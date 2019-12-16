import dns
from dns import resolver
import itertools
import collections
import multiprocessing.pool
import requests
import sys

import tldextract
import collections

filepath = "cumulative_links_parsed.txt"
final_dict = collections.defaultdict(list)

def worker(arg):
    """query dns for (hostname, qname) and return (qname, [rdata,...])"""
    try:
        url, qname = arg
        rdatalist = []
        for rdata in resolver.query(url, qname):
            rdatalist.append(rdata)
            final_dict[url].append(rdata)
            #print(f'url in worker: {url}')
            return qname, rdatalist
    except dns.exception.DNSException:
        return qname, []

def resolve_dns(url_list):
    """Given a list of hosts, return dict that maps qname to
    returned rdata records.
    """
    response_dict = collections.defaultdict(list)
    # create pool for querys but cap max number of threads
    pool = multiprocessing.pool.ThreadPool(processes=min(len(url_list)*3, 60))
    # run for all combinations of hosts and qnames
    for qname, rdatalist in pool.imap(
            worker,
            itertools.product(url_list, ('A', 'NS')),
            chunksize=1):
        response_dict[qname].extend(rdatalist)
    pool.close()
    return response_dict

urlset = set()
content = []

print(final_dict)

with open(filepath) as f:
    content = f.readlines()
    # you may also want to remove whitespace characters like `\n` at the end of each line
content = [x.strip() for x in content if not '#' in x]
urlset = set(content)

result = resolve_dns(urlset)

with open(filepath+'_dns_parsed', 'w') as f:
    for url, rdatalist in final_dict.items():
        f.write(url + ', ')
        for rdata in rdatalist:
            f.write(str(rdata) + '  ')
        f.write('\n')

ip_dict = {}
with open(filepath+'_dns_parsed') as f:
    content = f.readlines()
    for line in content:
        domain = line.split(",")[0].strip()
        ip_addr = line.split(",")[1].strip()
        ip_dict[domain] = ip_addr

# api-endpoint
URL = "http://api.iptoasn.com/v1/as/ip/"

# defining a params dict for the parameters to be sent to the API
PARAMS = {}

# sending get request and saving the response as response object
f = open(filepath+'_dns_parsed' + '_asn_mapping', 'w')
f.write('url, ip_address, asn_no, nameserver\n')
for domain, ip in ip_dict.items():
    ip = ip.split(" ")[0].strip()
    r = requests.get(url = f'{URL}{ip}', params = PARAMS)
    try:
        #print(r)
        data = r.json()
        as_no = data.get('as_number')
        if as_no:
            final_dict[domain].append(ip)
            final_dict[domain].append(as_no)
            f.write(f'{domain}, {ip}, {as_no}\n')
        else:
            final_dict[domain].append(ip)
            f.write(f'{domain}, {ip}\n')
    except:
        print(f'could not get as_no for domain: {domain}')
        print(sys.exc_info()[0])
        continue


tldfile = filepath + '_urls_tld'

sys.path.insert(1, 'python-whois')
import whois

tldmap = {}
with open(filepath, 'r') as f:
    contents = f.readlines()
    for content in contents:
        if '#' not in content:
            ext = tldextract.extract(content)
            #print(f'for the url{content}:\nsubdomain= {ext.subdomain}, domain= {ext.domain}, suffix= {ext.suffix}')
            final_dict[content.strip()].append(f'{ext.domain}.{ext.suffix}')
            tldmap[content.strip()] = f'{ext.domain}.{ext.suffix}'

with open(tldfile, 'w') as f:
    for key, val in tldmap.items():
        print(f'{key}, {val}')
        f.write(f'{key}, {val}')
f.close()


whois_dict = {}
with open(tldfile, 'r') as f:
    contents = f.readlines()
    for line in contents:
        url = line.split(',')[0].strip()
        tld = line.split(',')[1].strip()
        #print(f'url is {url} and tld is {tld}')
        try:
            domain = whois.query(tld)
        except:
            print(f'{url} could not be queried')
            continue
        whois_dict[url] = domain


for url, vals in final_dict.items():
    if url in whois_dict:
        for whois_key, whois_values in whois_dict[url].__dict__.items():
            final_dict[url].append(whois_values)


mongo_dict = {}
with open(filepath + '_registrant_name', 'w') as f:
    f.write('url, name, registrar, creation_date, expiration_date, last_updated, registrant name, name_servers\n')
    for url, val in final_dict.items():
        
        print(f'in mongo url is {url.replace(".", "_dot_")}')
        mongo_dict[url.replace('.', '_dot_')] = val
        f.write(f'{url}, ')
        f.write(f'{val}, ')
        f.write('\n')

# import pymongo

# from pymongo import MongoClient
# client = MongoClient('localhost', 27017)

# db = client['pymongo_test']

# posts = db.posts

# result = posts.insert(mongo_dict)
# print('One post: {0}'.format(result.inserted_id))

# bills_post = posts.find_one('mid.rkdms.com'.replace('.', '_dot_'))
# print(bills_post)

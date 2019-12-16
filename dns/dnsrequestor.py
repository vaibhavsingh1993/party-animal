import dns
from dns import resolver
import itertools
import collections
import multiprocessing.pool

filepath = "cumulative_links_parsed.txt"
final_dict = collections.defaultdict(list)

def worker(arg):
    """query dns for (hostname, qname) and return (qname, [rdata,...])"""
    try:
        url, qname = arg
        rdatalist = [rdata for rdata in resolver.query(url, qname)]
        final_dict[url].append(rdata)
        return qname, rdatalist
    except dns.exception.DNSException, e:
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
            #itertools.product(url_list, ('CNAME')),
            chunksize=1):
        response_dict[qname].extend(rdatalist)
    pool.close()
    return response_dict

urlset = set()
content = []

with open(filepath) as f:
    content = f.readlines()
    # you may also want to remove whitespace characters like `\n` at the end of each line
content = [x.strip() for x in content if not '#' in x]
urlset = set(content)

#print(urlset)

result = resolve_dns(urlset)

with open(filepath+'_dns_parsed', 'w') as f:
    f.write('url, ip_address, nameserver\n')
    for url, rdatalist in final_dict.items():
        for rdata in rdatalist:           
            f.write(url + ', ')
            f.write(str(rdata).strip() + ', ')
        f.write('\n')


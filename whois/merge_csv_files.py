import collections 

filename='urls_to_dns_info.csv'
filename2='urls_to_whois_info.csv'
filename3='domain_to_asn_mapping.txt'

final_dict = collections.defaultdict(list)


dns_info = open(filename, 'r')
whois_info =  open(filename2, 'r')
asn_info = open(filename3, 'r')

dns = dns_info.readlines()

for line in dns:
    url = line.split(",")[0].strip()
    ip_addr = line.split(",")[1].strip()
    dns_server = line.split(",")[2].strip()
    final_dict[url].append(ip_addr)
    final_dict[url].append(dns_server)

whois = whois_info.readlines()

for line in whois:
    url = line.split(",")[0].strip()
    name = line.split(",")[1].strip()
    registrar = line.split(",")[2].strip()
    creation_date = line.split(",")[3].strip()
    expiration_date = line.split(",")[4].strip()
    registrant = line.split(",")[5].strip()
    last_updated = line.split(",")[6].strip()

    final_dict[url].append(name)
    final_dict[url].append(registrar)
    final_dict[url].append(creation_date)
    final_dict[url].append(expiration_date)
    final_dict[url].append(registrant)
    final_dict[url].append(last_updated)

asn = asn_info.readlines()

for line in asn:
    url = line.split(",")[0].strip()
    asn = line.split(",")[1].strip()
    final_dict[url].append(asn)
    final_dict[url].append(dns_server)

f = open('consolidated_data.csv', 'w')
for url, items in final_dict.items():
    f.write(url + ', ')
    for item in items:
        f.write(item + ', ')
    f.write('\n')

print(final_dict.get('fonts.googleapis.com'))
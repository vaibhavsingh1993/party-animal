# importing the requests library 
import requests 
  


filename = 'cumulative_links_parsed.txt_dns_parsed'

ip_dict = {}
with open(filename) as f:
    content = f.readlines()
    for line in content:
        domain = line.split(",")[0].strip()
        ip_addr = line.split(",")[1].strip()
        ip_dict[domain] = ip_addr

# api-endpoint 
URL = "https://api.iptoasn.com/v1/as/ip/"
  
# defining a params dict for the parameters to be sent to the API 
PARAMS = {} 
  
# sending get request and saving the response as response object
f = open('domain_to_asn_mapping.txt', 'w')
for domain, ip in ip_dict.items():
    r = requests.get(url = f'{URL}{ip}', params = PARAMS)
    try: 
        data = r.json() 
        as_no = data.get('as_number')
        f.write(f'{domain}, {ip}, {as_no}\n')
        print(f'{domain}, {ip}, {as_no}')
    except:
        print(f'could not get as_no for domain: {domain}')
        continue
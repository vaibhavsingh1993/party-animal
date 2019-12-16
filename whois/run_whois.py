# some_file.py
import sys
# insert at 1, 0 is the script path (or '' in REPL)
sys.path.insert(1, 'python-whois')

import whois


# from whois import whois

filepath='urls_tld.txt'

final_dict = {}


with open(filepath, 'r') as f:
    contents = f.readlines()
    for line in contents:
        url = line.split(',')[0].strip()
        tld = line.split(',')[1].strip()
        try:
            domain = whois.query(tld)
        except:
            print(f'{url} could not be queried')
            continue
        final_dict[url] = domain

with open(filepath.split(".")[0] + '_registrant_name.csv', 'w') as f:
    f.write('url, name, registrar, creation_date, expiration_date, last_updated, registrant name, name_servers\n')
    for url, val in final_dict.items():
        f.write(url + ', ')
        for whois_key, whois_values in val.__dict__.items():
            f.write(f'{whois_values}, ')
        f.write('\n')



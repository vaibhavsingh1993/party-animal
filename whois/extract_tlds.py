import tldextract
import collections

filepath = 'cumulative_links_parsed.txt'
tldfile = 'urls_tld.txt'

tld_mapping = {}
with open(filepath, 'r') as f:
    contents = f.readlines()
    for content in contents:
        if '#' not in content:
            ext = tldextract.extract(content)
            #print(f'for the url{content}:\nsubdomain= {ext.subdomain}, domain= {ext.domain}, suffix= {ext.suffix}')
            tld_mapping[content.strip()] = (f'{ext.domain}.{ext.suffix}')
            

with open(tldfile, 'w') as f:
    for url, tld in tld_mapping.items(): 
        f.write(f'{url}={tld}')
        f.write('\n')
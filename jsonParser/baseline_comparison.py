import collections
from xlrd import open_workbook
import tldextract

wb = open_workbook('url_to_dns_info.xlsx')
values = []
for s in wb.sheets():
    #print 'Sheet:',s.name
    
    for row in range(s.nrows):
        col_value = []
        for col in range(s.ncols):
            value  = (s.cell(row,col).value)
            col_value.append(value)
        values.append(col_value)

ownership_map = collections.defaultdict(set)
for row in range(len(values)):
    tld = values[row][3].replace(",", "")
    owner = values[row][13].replace(",", "")
    if owner and tld:
        ownership_map[tld].add(owner)

urllist = list()

filename = 'cumulative_links_parsed.txt'

with open(filename, 'r') as f:
    for line in f:
        if '##' in line:
            print()
            print(f"Provider : {line.replace('#', '').strip()}")
            print()
        else:
            ext = tldextract.extract(line.strip())
            if ownership_map[f'{ext.domain}.{ext.suffix}']:
                ans = ownership_map[f'{ext.domain}.{ext.suffix}']
                print(f'{ext.domain}.{ext.suffix} : {ans}')

num_domains = 0
for keys, vals in ownership_map.items():
    #print(f'{keys}, {vals}')
    num_domains += len(vals)
#print(f'total owners : {len(ownership_map.items())}, total domains: {num_domains}')



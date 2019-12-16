import collections
from xlrd import open_workbook
wb = open_workbook('url_to_dns_info.xlsx')
values = []
for s in wb.sheets():
    #print 'Sheet:',s.name
    
    for row in range(s.nrows):
        col_value = []
        for col in range(s.ncols):
            value  = (s.cell(row,col).value)
            # try : value = str(value)
            # except : pass
            col_value.append(value)
        values.append(col_value)

ownership_map = collections.defaultdict(set)
reverse_map = {}
domain_tld_map = {} 
for row in range(len(values)):
    #print(f'{values[row][3]}, {values[row][13]}')
    domain = values[row][0].replace(",", "")
    tld = values[row][3].replace(",", "")
    owner = values[row][13].replace(",", "")
    if owner and tld:
        ownership_map[owner].add(tld)
        reverse_map[tld] = owner
        domain_tld_map[domain] = tld

num_domains = 0
for keys, vals in ownership_map.items():
    print(f'{keys}, {vals}')
    num_domains += len(vals)
print(f'total owners : {len(ownership_map.items())}, total domains: {num_domains}')


with open('cumulative_links_parsed.txt', 'r') as f:
    content = f.readlines()
    for line in content:
        if '##' in line:
            print(f'Provider: {line.replace("##", "").strip()}')
        else:
            tld = domain_tld_map.get(line.strip())
            print(f'{tld}: {reverse_map.get(tld)}')
    urlset = set(content)
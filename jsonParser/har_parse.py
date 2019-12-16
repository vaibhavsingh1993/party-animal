# Usage: python3 parse.py {location of har file} {domain}
#Eg: python3 parse.py ../hars/www.cnn.com.har cnn

import json
import sys
import collections

from urllib.parse import urlparse

urllist = list()

if len(sys.argv) >= 3:
	filename = sys.argv[1]
	tld = sys.argv[2]
else:
    filename = sys.argv[1]
    tld = ''

f = open(filename + '_parsed.txt', 'w+')
with open(filename) as json_file:
    data = json.load(json_file)
    for entry in data['log']['entries']:
        if len(tld) > 0:
            if tld not in entry['request']['url']:
                url = urlparse(entry['request']['url']).netloc
                if url not in urllist:
                    urllist.append(url)
        else:
            url = urlparse(entry['request']['url']).netloc
            if url not in urllist:
                urllist.append(url)
            
    for url in urllist:
        print(url)
        f.write(url + '\n')


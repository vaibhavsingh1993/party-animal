# Usage: python3 parse.py {location of har file} {domain}
#Eg: python3 parse.py ../hars/www.cnn.com.har cnn

import json
import sys

from urllib.parse import urlparse

urlset = set()
filename = sys.argv[1]
tld=sys.argv[2]
with open(filename) as json_file:
    data = json.load(json_file)
    print(data['log']['pages'][0]['title'])
    for entry in data['log']['entries']:
        if tld not in entry['request']['url']:
            url = urlparse(entry['request']['url']).netloc
            urlset.add(url)

print(urlset)


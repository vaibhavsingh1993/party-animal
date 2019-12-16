import json
import sys

from urllib.parse import urlparse

filename = sys.argv[1]
#tld=sys.argv[2]
f = open(filename + '_parsed.csv', 'w+')
stri = ''

with open(filename) as json_file:
    data = json.load(json_file)
    for category in data['categories']:
        for entry in data['categories'][category]:
            for key, value in entry.items():
                for k, v in value.items():
                    for vals in v:
                        #print(key + ', ' + k + ', ' + vals + ', ' + category)
                        f.write(vals + ', ' + k + ', ' + key + ', ' + category + '\n')
        #f.write(entry)

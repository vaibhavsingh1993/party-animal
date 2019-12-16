#!/bin/bash
file="tlds.txt"
while IFS= read -r line
do
        url="https://$line"
        printf 'For url: %s\n' "$url"
        timeout 10s curl -v -L -o /dev/null "https://$line" 2>&1 | grep "Issue another"
        printf '%s\n' "$1"
        echo ''
done <"$file"

#!/bin/bash
file="tlds.txt"
while IFS= read -r line
do
        url="https://www.$line"
        printf 'For url: %s\n' "$url"
        timeout 10s curl -v -L "https://$line" 2>&1 | grep '©\|&copy'
        printf '%s\n' "$1"
        echo ''
done <"$file"

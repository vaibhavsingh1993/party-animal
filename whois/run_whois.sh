#!/bin/bash
input=$1
while IFS= read -r line
do
  echo "Whois for $line"
  echo ""
  whois "$line" | grep "Registrant"
  echo ""
done < "$input"

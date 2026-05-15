#!/bin/bash
# Check alle examenblad.nl URLs via curl (parallel). Output: rapport per examen.
# Geverifieerd met HTTP-status: 200/3xx = OK, 404 = broken.

cd "$(dirname "$0")/.."

# Extract alle URLs uit examens.js — we evalueren de file via node.
node -e "
import('./src/data/examens.js').then(({ EXAMENS, getExamenUrl, getCorrectieUrl, getBijlageUrl, getUitwerkbijlageUrl }) => {
  for (const e of EXAMENS) {
    if (!e.externalUrl) continue;
    console.log(e.id + '|o|' + (getExamenUrl(e) || ''));
    console.log(e.id + '|c|' + (getCorrectieUrl(e) || ''));
    console.log(e.id + '|b|' + (getBijlageUrl(e) || ''));
    console.log(e.id + '|u|' + (getUitwerkbijlageUrl(e) || ''));
  }
});
" > /tmp/examen-urls.txt 2>&1

# Check elke URL via curl
declare -A status_map
total=0
ok=0
broken=0

while IFS='|' read -r id type url; do
  if [ -z "$url" ]; then continue; fi
  total=$((total+1))
  code=$(curl -s -o /dev/null -w "%{http_code}" --max-time 8 "$url")
  if [[ "$code" =~ ^(200|301|302|303|307|308)$ ]]; then
    status_map["$id|$type"]="OK"
    ok=$((ok+1))
  else
    status_map["$id|$type"]="$code"
    broken=$((broken+1))
    echo "BROKEN: $id $type ($code) - $url" >> /tmp/broken-urls.txt
  fi
done < /tmp/examen-urls.txt

echo "Totaal: $total"
echo "OK:     $ok"
echo "Broken: $broken"
echo ""
if [ $broken -gt 0 ]; then
  echo "Broken URLs:"
  cat /tmp/broken-urls.txt
fi

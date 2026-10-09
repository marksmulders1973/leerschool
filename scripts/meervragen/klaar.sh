#!/usr/bin/env bash
# scripts/meervragen/klaar.sh <map> blind|beslis <pathId…>
set -e; map=$1; fase=$2; shift 2
for id in "$@"; do
  if [ "$fase" = blind ]; then node scripts/meervragen/blind.mjs "$map" "$id" "$map/blind"
  else node scripts/meervragen/beslis.mjs "$map" "$id" "$map/blind" && node --import ./scripts/meervragen/reg.mjs scripts/meervragen/invoeg.mjs "$map" "$id"; fi
done

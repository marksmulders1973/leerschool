// Controleert (en past met --toepassen toe) de herstellijsten van audit deel 6.
// Elke regel {bestand, zoek, vervang, reden, ernst}: 'zoek' moet precies 1× in 'bestand' staan.
// Gebruik: node scripts/audit/schermen/check-fixes.mjs docs/audit/fixes-schermen.json [--toepassen]
import { readFileSync, writeFileSync, existsSync } from "node:fs";
const [lijst, vlag] = process.argv.slice(2);
const fixes = JSON.parse(readFileSync(lijst, "utf8"));
const cache = {};
let ok = 0; const mis = [];
for (const [i, f] of fixes.entries()) {
  if (!f.bestand || typeof f.zoek !== "string" || typeof f.vervang !== "string" || !f.zoek || f.zoek === f.vervang || ![1, 2, 3].includes(f.ernst)) { mis.push(`#${i} ongeldige regel`); continue; }
  if (!existsSync(f.bestand)) { mis.push(`#${i} ${f.bestand} bestaat niet`); continue; }
  const tekst = cache[f.bestand] ??= readFileSync(f.bestand, "utf8");
  const n = tekst.split(f.zoek).length - 1;
  if (n !== 1) { mis.push(`#${i} ${f.bestand}: 'zoek' komt ${n}× voor — ${f.zoek.slice(0, 80)}`); continue; }
  if (vlag === "--toepassen") cache[f.bestand] = tekst.replace(f.zoek, () => f.vervang);
  ok++;
}
if (vlag === "--toepassen") for (const [b, t] of Object.entries(cache)) writeFileSync(b, t);
console.log(`${ok} geldig${vlag === "--toepassen" ? " en toegepast" : ""}, ${mis.length} probleem`);
for (const m of mis) console.log("  ✗", m);
process.exit(mis.length ? 1 : 0);

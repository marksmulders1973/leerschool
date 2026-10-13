// node scripts/meervragen/verzamel-weg.mjs <scratch> <prefix vol-…> <aantalDelen> <sp-…|-> <uit.json>
// Verzamelt de bezwaren uit een volledige herkeuring (+ steekproef) tot een verwijderlijst [{pathId, stap, q, reden}].
// Alleen-uitlegPad-ontbreekt-bezwaren tellen niet (dat is pas fout als de stap er meestal een heeft; de nakijkers controleren dat zelf).
import fs from "node:fs";
const [S, pre, nS, sp, uit] = process.argv.slice(2);
const lees = (f) => (fs.existsSync(`${S}/${f}`) ? JSON.parse(fs.readFileSync(`${S}/${f}`, "utf8")) : []);
const key = lees(`${pre}.sleutel.json`); const bez = new Map();
const add = (k, b) => { if (b && String(b).trim()) { const s = `${k.pathId}|${k.q}`; (bez.get(s) || bez.set(s, { k, r: [] }).get(s)).r.push(String(b).trim()); } };
for (let i = 0; i < Number(nS); i++) for (const f of ["review", "review2"]) for (const r of lees(`${pre}-${i}.${f}.json`)) add(key.find((x) => x.id === r.id), r.bezwaar);
if (sp !== "-") { const spk = lees(`${sp}.sleutel.json`); for (const f of ["review", "review2"]) for (const r of lees(`${sp}.${f}.json`)) add(spk.find((x) => x.id === r.id), r.bezwaar); }
const out = [], genegeerd = [];
for (const { k, r } of bez.values()) {
  if (r.every((x) => /^(de )?uitlegPad ontbreekt( helemaal| volledig)?\b[^.]*\.?$/i.test(x) || /^geen uitlegPad\.?$/i.test(x))) { genegeerd.push(`${k.pathId}@${k.stap}: ${r.join(" | ")}`); continue; }
  out.push({ pathId: k.pathId, stap: k.stap, q: k.q, reden: r.join(" | ") });
}
fs.writeFileSync(uit, JSON.stringify(out, null, 1));
console.log(`weg ${out.length}, genegeerd (alleen uitlegPad) ${genegeerd.length}`); genegeerd.forEach((g) => console.log("  ", g.slice(0, 140)));

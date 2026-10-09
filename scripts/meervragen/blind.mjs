// node … blind.mjs <map> <pathId> → <map>/<pathId>.blind.json (zonder antwoord/hints/uitlegPad, opties geschud)
import fs from "node:fs"; import path from "node:path";
const [map, id, uitMap = map] = process.argv.slice(2);
const ctx = JSON.parse(fs.readFileSync(path.join(map, `${id}.context.json`), "utf8"));
const kand = JSON.parse(fs.readFileSync(path.join(map, `${id}.kandidaten.json`), "utf8"));
function rng(seed) { let h = 2166136261; for (const ch of seed) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); } return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }; }
const vragen = kand.map((k, i) => {
  const r = rng(id + "#" + i); const opties = [...k.options];
  for (let j = opties.length - 1; j > 0; j--) { const x = Math.floor(r() * (j + 1)); [opties[j], opties[x]] = [opties[x], opties[j]]; }
  return { id: `${id}#${i}`, stap: k.stap, q: k.q, opties };
});
const stapNrs = [...new Set(kand.map((k) => k.stap))];
const stappen = Object.fromEntries(stapNrs.map((n) => { const s = ctx.stappen[n]; return [n, { titel: s.titel, vanafGroep: s.vanafGroep, uitleg: s.uitleg, leesTekst: s.leesTekst, bestaandeVragen: s.bestaandeVragen.map((c) => c.q) }]; }));
const andereStappenVragen = ctx.stappen.flatMap((s) => s.bestaandeVragen.map((c) => c.q));
fs.mkdirSync(uitMap, { recursive: true });
fs.writeFileSync(path.join(uitMap, `${id}.blind.json`), JSON.stringify({ pathId: id, titel: ctx.titel, level: ctx.level, subject: ctx.subject, stappen, alleBestaandeVragenInPad: andereStappenVragen, vragen }, null, 1));
console.log(id, "blind:", vragen.length);

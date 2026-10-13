// node … steekproef.mjs <uitbestand> <aantal> <seed> <map1> [map2 …]
// Trekt willekeurig N opgenomen vragen uit alle *.besluit.json en schrijft een blinde lijst (met stapcontext) + sleutel.
import fs from "node:fs"; import path from "node:path";
const [uit, nS, seed, ...maps] = process.argv.slice(2);
let h = 2166136261; for (const ch of seed) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
const r = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1e6) / 1e6; };
const pool = [];
for (const m of maps) for (const f of fs.readdirSync(m).filter((f) => f.endsWith(".besluit.json"))) {
  const b = JSON.parse(fs.readFileSync(path.join(m, f), "utf8"));
  const ctx = JSON.parse(fs.readFileSync(path.join(m, `${b.pathId}.context.json`), "utf8"));
  for (const v of b.opgenomen) pool.push({ v, ctx });
}
for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
const keuze = pool.slice(0, Number(nS));
const vragen = keuze.map(({ v, ctx }) => { const s = ctx.stappen[v.stap]; const o = [...v.options];
  for (let j = o.length - 1; j > 0; j--) { const x = Math.floor(r() * (j + 1)); [o[j], o[x]] = [o[x], o[j]]; }
  return { id: v.id, pad: ctx.titel, level: ctx.level, stap: { titel: s.titel, vanafGroep: s.vanafGroep, uitleg: s.uitleg, leesTekst: s.leesTekst }, q: v.q, opties: o }; });
fs.writeFileSync(uit, JSON.stringify({ vragen }, null, 1));
fs.writeFileSync(uit.replace(/\.json$/, ".sleutel.json"), JSON.stringify(keuze.map(({ v }) => ({ id: v.id, goed: v.options[0], wrongHints: v.wrongHints, uitlegPad: v.uitlegPad }))));
console.log(`pool ${pool.length} → steekproef ${keuze.length}`);

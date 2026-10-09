// node --import ./scripts/meervragen/reg.mjs … steekproef-nieuw.mjs <nieuw.json> <uit.json> <aantal|alle> <seed>
// Blinde lijst (stap-uitleg erbij, opties geschud, zonder antwoord/hints/uitlegPad) + <uit>.sleutel.json.
import fs from "node:fs"; import { laadPad } from "./laad.mjs";
const [inF, uit, nS, seed] = process.argv.slice(2);
let h = 2166136261; for (const ch of seed) { h ^= ch.charCodeAt(0); h = Math.imul(h, 16777619); }
const r = () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1e6) / 1e6; };
const pool = JSON.parse(fs.readFileSync(inF, "utf8")).map((v, i) => ({ ...v, id: `${v.pathId}@${v.stap}#${i}` }));
for (let i = pool.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [pool[i], pool[j]] = [pool[j], pool[i]]; }
const keuze = nS === "alle" ? pool : pool.slice(0, Number(nS));
const cache = {};
const vragen = [];
for (const v of keuze) {
  cache[v.pathId] ||= (await laadPad(v.pathId)).pad;
  const s = cache[v.pathId].steps[v.stap]; const o = [...v.options];
  for (let j = o.length - 1; j > 0; j--) { const x = Math.floor(r() * (j + 1)); [o[j], o[x]] = [o[x], o[j]]; }
  vragen.push({ id: v.id, pad: cache[v.pathId].title, level: v.level, stap: { titel: s.title, vanafGroep: s.vanafGroep ?? null, uitleg: s.explanation || "", leesTekst: s.leesTekst || null }, q: v.q, opties: o });
}
fs.writeFileSync(uit, JSON.stringify({ vragen }, null, 1));
fs.writeFileSync(uit.replace(/\.json$/, ".sleutel.json"), JSON.stringify(keuze.map((v) => ({ id: v.id, pathId: v.pathId, stap: v.stap, q: v.q, goed: v.options[v.answer], wrongHints: v.wrongHints, uitlegPad: v.uitlegPad })), null, 1));
console.log(`pool ${pool.length} → ${keuze.length}`);

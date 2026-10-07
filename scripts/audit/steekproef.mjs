// Reproduceerbare steekproef uit de hele vragenpool (audit-eindmetingen, okt 2026).
// Pool = alle leerpaden via het manifest (ook .jsx) + alle exports van
// sampleQuestions.js, textbookQuestions.js en topics.js (zelfde wandeling als check-vragen.mjs).
// Trekking: mulberry32(seed), Fisher-Yates over de hele pool, eerste N; daarna gesorteerd op bron en pool-volgorde.
// Gebruik: node scripts/audit/steekproef.mjs [seed=20261006] [n=200] [basismap=.] [--json uit.json]
import { register } from "node:module";
import fs from "node:fs"; import path from "node:path"; import { pathToFileURL } from "node:url";
register(pathToFileURL(path.resolve(path.dirname(new URL(import.meta.url).pathname), "jsx-hook.mjs")).href);

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const seed = Number(args[0] ?? 20261006), N = Number(args[1] ?? 200), base = path.resolve(args[2] ?? ".");
const jsonUit = process.argv.includes("--json") ? process.argv[process.argv.indexOf("--json") + 1] : null;

export function mulberry32(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }

const pool = [];
const lp = path.join(base, "src/learnPaths");
const man = JSON.parse(fs.readFileSync(path.join(lp, "pathManifest.generated.json"), "utf8"));
for (const e of man) {
  const p = (await import(pathToFileURL(path.join(lp, e.file)).href)).default;
  (p?.steps || []).forEach((s, si) => (s.checks || []).forEach((c, ci) => pool.push({ bron: "leerpaden", waar: `${e.id} stap ${si + 1} vraag ${ci + 1}`, v: c })));
}
const BRON = { "sampleQuestions.js": "sampleQuestions", "textbookQuestions.js": "textbookQuestions", "topics.js": "topics" };
for (const f of Object.keys(BRON)) {
  const mod = await import(pathToFileURL(path.join(base, "src/data", f)).href);
  const loop = (x, waar) => { if (Array.isArray(x)) x.forEach((v, i) => (v && typeof v === "object" && "q" in v ? pool.push({ bron: BRON[f], waar: `${waar}[${i}]`, v }) : loop(v, `${waar}[${i}]`))); else if (x && typeof x === "object") for (const k of Object.keys(x)) loop(x[k], waar ? `${waar}.${k}` : k); };
  for (const [naam, w] of Object.entries(mod)) loop(w, naam);
}
const idx = pool.map((_, i) => i), r = mulberry32(seed);
for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
const VOLG = ["leerpaden", "sampleQuestions", "textbookQuestions", "topics"];
const trek = idx.slice(0, N).sort((a, b) => VOLG.indexOf(pool[a].bron) - VOLG.indexOf(pool[b].bron) || a - b);
const uit = trek.map((i, k) => ({ nr: k + 1, bron: pool[i].bron, waar: pool[i].waar, q: pool[i].v.q, options: pool[i].v.options, answer: pool[i].v.answer, explanation: pool[i].v.explanation, wrongHints: pool[i].v.wrongHints, svg: pool[i].v.svg ? "(svg)" : undefined }));
const telling = {}; for (const u of uit) telling[u.bron] = (telling[u.bron] || 0) + 1;
console.log(`pool ${pool.length} · seed ${seed} · n ${N} ·`, JSON.stringify(telling));
if (jsonUit) fs.writeFileSync(jsonUit, JSON.stringify(uit, null, 1)); else for (const u of uit) console.log(`#${u.nr} ${u.bron} ${u.waar}`);

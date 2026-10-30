// Eindmeting basisschool (27 okt 2026): reproduceerbare steekproef uit ALLEEN de basisschool-leerpaden.
// Zelfde trekking als steekproef.mjs (mulberry32 + Fisher-Yates over de pool, eerste N uit de
// willekeurige volgorde — niet uit een gesorteerde lijst), maar de pool is gefilterd op basisschool:
// manifest-id eindigt op -po / bevat groep, g3-g8, kleuters, doorstroomtoets of cito, óf manifest-level
// begint met groep / is "po". Nieuwkomer-paden tellen mee (ze zijn basisschool), examen-* niet.
// Gebruik: node scripts/audit/steekproef-po.mjs [seed=20261027] [n=200] [uitmap=docs/audit/eindmeting-po] [--delen 4]
import { register } from "node:module";
import fs from "node:fs"; import path from "node:path"; import { pathToFileURL } from "node:url";
register(new URL("./jsx-hook.mjs", import.meta.url).href);

const args = process.argv.slice(2).filter((a) => !a.startsWith("--"));
const seed = Number(args[0] ?? 20261027), N = Number(args[1] ?? 200), uitmap = path.resolve(args[2] ?? "docs/audit/eindmeting-po");
const delen = process.argv.includes("--delen") ? Number(process.argv[process.argv.indexOf("--delen") + 1]) : 4;

function mulberry32(a) { return function () { a |= 0; a = (a + 0x6d2b79f5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
const isPo = (e) => { const id = String(e.id), l = String(e.level || ""); return !/^examen-/.test(id) && (/-po$|groep|g[3-8]\b|kleuters|doorstroomtoets|cito/i.test(id) || /^groep|^po$|kleuter/i.test(l)); };

const lp = path.resolve("src/learnPaths");
const man = JSON.parse(fs.readFileSync(path.join(lp, "pathManifest.generated.json"), "utf8")).filter(isPo);
const pool = [];
for (const e of man) {
  const p = (await import(pathToFileURL(path.join(lp, e.file)).href)).default;
  (p?.steps || []).forEach((s, si) => (s.checks || []).forEach((c, ci) => { if (Array.isArray(c?.options)) pool.push({ waar: `${e.id} stap ${si + 1} vraag ${ci + 1}`, file: e.file, level: e.level, v: c }); }));
}
const idx = pool.map((_, i) => i), r = mulberry32(seed);
for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
const trek = idx.slice(0, N).sort((a, b) => a - b);
const uit = trek.map((i, k) => { const c = pool[i].v; return { nr: k + 1, bron: "leerpaden", waar: pool[i].waar, file: pool[i].file, level: pool[i].level, q: c.q, options: c.options, answer: c.answer, wrongHints: c.wrongHints ?? null, explanation: c.explanation ?? null, niveaus: c.uitlegPad?.niveaus ?? null }; });
fs.mkdirSync(uitmap, { recursive: true });
fs.writeFileSync(path.join(uitmap, "steekproef.json"), JSON.stringify(uit, null, 1));
const per = Math.ceil(uit.length / delen);
for (let d = 0; d < delen; d++) fs.writeFileSync(path.join(uitmap, `deel-${String.fromCharCode(65 + d)}.json`), JSON.stringify(uit.slice(d * per, (d + 1) * per), null, 1));
console.log(`basisschoolpaden ${man.length} · pool ${pool.length} meerkeuzevragen · seed ${seed} · n ${uit.length} · ${delen} delen van ${per} → ${uitmap}`);

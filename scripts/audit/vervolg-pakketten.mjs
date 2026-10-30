// Verdeelt een vervolgset-dump (lijst.json van vervolg-dump.mjs) in nakijkpakketten per BRONBESTAND.
// Gebruik: node scripts/audit/vervolg-pakketten.mjs docs/audit/vervolg/B2 [--max 55]
// - dedupliceert op `waar` (een vraag kan in meerdere sets zitten), slaat vragen over die al in het register staan,
// - stopt bestanden greedy in pakketten van max --max vragen (een bestand zit altijd in precies één pakket),
// - schrijft <map>/pakketten/pakket-NN-A.md (blind: vraag + opties in GESCHUDDE volgorde) en -B.md (bestandsvolgorde,
//   ✅ bij het antwoord, wrongHints, niveaus) en pakketten.json (nummer, aantal, bestanden, sets).
// Les B1 (30 okt 2026): in de bron staat het goede antwoord vrijwel altijd op index 0; zonder schudden is deel A niet blind.
import fs from "node:fs";
import path from "node:path";

const MAP = path.resolve(process.argv[2] || "docs/audit/vervolg/B2");
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? Number(process.argv[i + 1]) : d; };
const MAX = arg("--max", 55);
const lijst = JSON.parse(fs.readFileSync(path.join(MAP, "lijst.json"), "utf8"));
const uniek = new Map();
for (const i of lijst) { const e = uniek.get(i.waar); if (!e) uniek.set(i.waar, { ...i, sets: [i.set] }); else if (!e.sets.includes(i.set)) e.sets.push(i.set); }
const open = [...uniek.values()].filter((i) => !i.goedgekeurd);
const perFile = {};
for (const i of open) (perFile[i.file] ||= []).push(i);
const files = Object.entries(perFile).sort((a, b) => b[1].length - a[1].length);
const pakketten = [];
for (const [f, items] of files) {
  let p = pakketten.find((p) => p.n + items.length <= MAX);
  if (!p) { p = { files: [], n: 0, items: [] }; pakketten.push(p); }
  p.files.push(f); p.n += items.length; p.items.push(...items);
}
pakketten.sort((a, b) => b.n - a.n);
const plat = (t) => String(t ?? "").replace(/\s*\n\s*/g, " ").trim();
const uit = path.join(MAP, "pakketten");
fs.mkdirSync(uit, { recursive: true });
const meta = [];
pakketten.forEach((p, k) => {
  const nr = String(k + 1).padStart(2, "0");
  let seed = (k + 1) * 7919;
  const rnd = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  const A = [`# Pakket ${nr} — deel A (blind: alleen vraag + opties)`, "", "LET OP: de opties staan hier in willekeurige volgorde (blind). In deel B staan ze in bestandsvolgorde; vergelijk op inhoud, niet op letter.", "", `Bestanden: ${p.files.join(", ")}. ${p.n} vragen.`, ""];
  const B = [`# Pakket ${nr} — deel B (met antwoord en hints)`, ""];
  p.items.forEach((i, j) => {
    const kop = `## ${j + 1}. ${i.waar}  _(sets: ${i.sets.join(", ")})_`;
    const opts = i.options.map((o) => plat(o));
    for (let x = opts.length - 1; x > 0; x--) { const y = Math.floor(rnd() * (x + 1)); [opts[x], opts[y]] = [opts[y], opts[x]]; }
    A.push(kop); if (i.leesTekst) A.push(`> Leestekst bij de stap: ${i.leesTekst}`, ""); A.push(`Vraag: ${plat(i.q)}`); opts.forEach((o, x) => A.push(`- ${String.fromCharCode(65 + x)}. ${o}`)); A.push("");
    B.push(kop, `_Bestand: ${i.file}_`); if (i.leesTekst) B.push(`> Leestekst bij de stap: ${i.leesTekst}`, ""); B.push(`Vraag: ${plat(i.q)}`);
    i.options.forEach((o, x) => B.push(`- ${x === i.answer ? "✅" : "▫️"} ${String.fromCharCode(65 + x)}. ${plat(o)}`));
    if (i.wrongHints) B.push(`wrongHints: ${JSON.stringify(i.wrongHints.map((h) => (h == null ? null : plat(h))))}`);
    if (i.niveaus) B.push(`niveaus: ${JSON.stringify(i.niveaus)}`);
    B.push("");
  });
  fs.writeFileSync(path.join(uit, `pakket-${nr}-A.md`), A.join("\n") + "\n");
  fs.writeFileSync(path.join(uit, `pakket-${nr}-B.md`), B.join("\n") + "\n");
  meta.push({ pakket: nr, n: p.n, files: p.files, sets: [...new Set(p.items.flatMap((i) => i.sets))] });
});
fs.writeFileSync(path.join(uit, "pakketten.json"), JSON.stringify(meta, null, 1) + "\n");
console.log(`${lijst.length} posities → ${uniek.size} uniek → ${open.length} niet goedgekeurd → ${pakketten.length} pakketten (max ${MAX})`);
for (const m of meta) console.log(m.pakket, m.n, m.files.map((f) => f.replace("src/learnPaths/", "")).join(" "));

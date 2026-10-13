// Weggever-scan (13 okt 2026, idee "derde ronde op weggevers" uit VERSLAG-leerpaden-2):
// de eindmeting van 8 okt gaf 11% fout, waarvan 7,5 procentpunt weggevers.
// Meldt kandidaten (geen automatische fix):
//  L = het goede antwoord is opvallend langer dan de foute opties (≥ 1,6× het gemiddelde én ≥ 12 tekens langer)
//  H = een hint (wrongHints / hint) noemt het goede antwoord letterlijk
// Gebruik: node scripts/audit/weggever-scan.mjs [--po] [--json uit.json]
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
const root = path.resolve("src/learnPaths");
const manifest = JSON.parse(fs.readFileSync(path.join(root, "pathManifest.generated.json"), "utf8"));
const alleenPo = process.argv.includes("--po");
const jsonUit = process.argv.includes("--json") ? process.argv[process.argv.indexOf("--json") + 1] : null;
const schoon = (s) => String(s ?? "").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
const uit = [];
let n = 0;
for (const e of manifest) {
  if (e.id.startsWith("examen-")) continue; // authentiek, niet aanpassen
  if (alleenPo && !(/-po$|groep|g[3-8]\b|-g[3-8]-|kleuters|doorstroomtoets|cito|nieuwkomers/.test(e.id) || /groep/i.test(JSON.stringify(e.level ?? e.groep ?? "")))) continue;
  let pad; try { pad = (await import(pathToFileURL(path.join(root, e.file)).href)).default; } catch { continue; }
  (pad?.steps || []).forEach((s, si) => (s.checks || []).forEach((c, ci) => {
    if (!Array.isArray(c.options) || typeof c.answer !== "number" || c.options.length < 3) return;
    n++;
    const opts = c.options.map(schoon);
    const juist = opts[c.answer];
    const fout = opts.filter((_, i) => i !== c.answer);
    const gem = fout.reduce((a, o) => a + o.length, 0) / fout.length;
    const soorten = [];
    if (juist.length >= 1.6 * gem && juist.length - gem >= 12 && juist.length > Math.max(...fout.map((o) => o.length))) soorten.push("L");
    const hints = [...(Array.isArray(c.wrongHints) ? c.wrongHints : []), c.hint].filter(Boolean).map((h) => schoon(h).toLowerCase());
    const jl = juist.toLowerCase();
    if (jl.length >= 4 && !/^\d+([.,]\d+)?$/.test(jl) && hints.some((h) => h.includes(jl))) soorten.push("H");
    if (soorten.length) uit.push({ pad: e.id, file: e.file, stap: si, vraag: ci, soort: soorten.join(""), q: schoon(c.q).slice(0, 160), opties: opts, answer: c.answer });
  }));
}
const tel = (s) => uit.filter((u) => u.soort.includes(s)).length;
console.log(`${n} vragen gescand · kandidaten ${uit.length} (${(100 * uit.length / n).toFixed(1)}%) · L ${tel("L")} · H ${tel("H")}`);
const perPad = {}; uit.forEach((u) => (perPad[u.pad] = (perPad[u.pad] || 0) + 1));
console.log(Object.entries(perPad).sort((a, b) => b[1] - a[1]).slice(0, 15).map(([p, k]) => `${p} ${k}`).join(" · "));
if (jsonUit) fs.writeFileSync(jsonUit, JSON.stringify(uit, null, 1));

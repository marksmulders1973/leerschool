// Dump van één leerpad ("bank") in nakijkpakketten (3 nov 2026, na de eindmetingen: de
// doorstroomtoets-studievaardigheden-g8-bank gaf 8 van de 21 fouten → integraal nakijken).
// Anders dan vervolg-dump.mjs: niet per groep×vak-set, maar ALLE geldige vragen van één pad, in
// bestandsvolgorde, zonder de vragen die al (met geldige hash) in docs/audit/goedgekeurd.json staan.
// Omdat alle nakijkers in hetzelfde bronbestand zouden werken, schrijven zij GEEN edits maar een
// herstellijst {waar, oud, nieuw, reden} (docs/audit/fixes-<naam>-NN.json) die pas-fixes-toe.mjs toepast.
// Gebruik: node scripts/audit/bank-dump.mjs <pad-id> <uitmap> [--max 55]
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import { register } from "node:module";
register(new URL("./jsx-hook.mjs", import.meta.url).href);

const [,, PAD, UIT] = process.argv;
if (!PAD || !UIT) { console.error("gebruik: node scripts/audit/bank-dump.mjs <pad-id> <uitmap> [--max 55]"); process.exit(1); }
const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? Number(process.argv[i + 1]) : d; };
const MAX = arg("--max", 55);
const MAP = path.resolve(UIT); fs.mkdirSync(MAP, { recursive: true });

const lp = path.resolve("src/learnPaths");
const manifest = JSON.parse(fs.readFileSync(path.join(lp, "pathManifest.generated.json"), "utf8"));
const e = manifest.find((p) => p.id === PAD); if (!e) { console.error("pad niet in manifest: " + PAD); process.exit(1); }
const pad = (await import(pathToFileURL(path.join(lp, e.file)).href)).default;
const register_ = (() => { try { return JSON.parse(fs.readFileSync(path.resolve("docs/audit/goedgekeurd.json"), "utf8")); } catch { return []; } })();
const hashVan = (c) => crypto.createHash("sha1").update(JSON.stringify([c.q, c.options, c.wrongHints ?? null, c.niveaus ?? c.uitlegPad?.niveaus ?? null])).digest("hex").slice(0, 16);
const isGoedgekeurd = (waar, h) => register_.some((r) => r.waar === waar && r.hash === h);
const plat = (t) => String(t ?? "").replace(/\s*\n\s*/g, " ").trim();

const alles = []; let totaal = 0, al = 0, uit = 0;
(pad.steps || []).forEach((s, si) => {
  (s.checks || []).forEach((c, ci) => {
    totaal++;
    const waar = `${PAD} stap ${si + 1} vraag ${ci + 1}`;
    if (c.disabled || !Array.isArray(c.options) || typeof c.answer !== "number") { uit++; return; }
    if (isGoedgekeurd(waar, hashVan(c))) { al++; return; }
    alles.push({
      waar, file: `src/learnPaths/${e.file.replace(/^\.\//, "")}`, stapTitel: plat(s.title), vanafGroep: c.vanafGroep ?? s.vanafGroep ?? null,
      q: c.q, options: c.options, answer: c.answer, wrongHints: c.wrongHints ?? null,
      niveaus: c.niveaus ?? c.uitlegPad?.niveaus ?? null, explanation: c.explanation ?? null,
      heeftEigenSvg: !!(c.svg || c.image || c.bronAfbeelding), stapHeeftSvg: !!(s.svg || s.image),
    });
  });
});
const pakketten = [];
for (let i = 0; i < alles.length; i += MAX) pakketten.push(alles.slice(i, i + MAX));
pakketten.forEach((p, i) => {
  const nr = String(i + 1).padStart(2, "0");
  fs.writeFileSync(path.join(MAP, `pakket-${nr}.json`), JSON.stringify(p.map((x, j) => ({ nr: i * MAX + j + 1, ...x })), null, 1) + "\n");
});
fs.writeFileSync(path.join(MAP, "overzicht.json"), JSON.stringify({ pad: PAD, file: e.file, totaal, alGoedgekeurd: al, uitgeschakeld: uit, open: alles.length, pakketten: pakketten.map((p, i) => ({ nr: i + 1, aantal: p.length, van: p[0]?.waar, tot: p[p.length - 1]?.waar })) }, null, 1) + "\n");
console.log(`${PAD}: ${totaal} vragen · ${al} al goedgekeurd · ${uit} uitgeschakeld/ongeldig · ${alles.length} open → ${pakketten.length} pakketten (max ${MAX}) in ${MAP}`);

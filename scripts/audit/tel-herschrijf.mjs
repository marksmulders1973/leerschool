// Telt per vak/groep: gecontroleerd · herschreven · verwijderd, door een bronbestand te vergelijken met
// dezelfde file op een git-ref (herschrijfronde 6 okt 2026). Twee controles:
//  1. regel-voor-regel (elke vraag = 1 regel): welke vraagregels zijn gewijzigd, per label;
//  2. via import (alleen sampleQuestions.js): aantal vragen per vak.groep moet gelijk zijn.
// Gebruik: node scripts/audit/tel-herschrijf.mjs <bestand> [ref=origin/audit3/integratie] [--voorbeelden N] [--json uit.json]
import { execSync } from "node:child_process";
import fs from "node:fs"; import os from "node:os"; import path from "node:path"; import { pathToFileURL } from "node:url";
const argv = process.argv.slice(2); const [file, ref = "origin/audit3/integratie"] = argv.filter((a, i) => !a.startsWith("--") && argv[i - 1] !== "--json");
const oudTekst = execSync(`git show ${ref}:${file}`, { encoding: "utf8", maxBuffer: 1 << 28 });
const nieuwTekst = fs.readFileSync(file, "utf8");
const O = oudTekst.split("\n"), N = nieuwTekst.split("\n");
if (O.length !== N.length) { console.error(`✗ regelaantal verschilt: ${O.length} → ${N.length}`); process.exit(1); }
const isQ = (r) => /^\s*\{\s*q\s*:/.test(r);
const parse = (r) => new Function(`return (${r.trim().replace(/,\s*$/, "")});`)();
let vak = "?", groep = "-"; const per = {}, wijz = [];
for (let i = 0; i < O.length; i++) {
  const r = O[i]; let m;
  if ((m = r.match(/^ {2}(?:"([^"]+)"|([a-zA-Z0-9_-]+)):\s*[{[]/))) { vak = m[1] || m[2]; groep = "-"; }
  if ((m = r.match(/^ {4}(groep\d+|klas\d+)\s*:/))) groep = m[1];
  if ((m = r.match(/^\s*(?:export )?const (_\w+)\s*=\s*\[/))) { vak = m[1]; groep = "-"; }
  if ((m = r.match(/^TOPIC_QUESTIONS\["([^"]+)"\]\s*=\s*\[/))) { vak = m[1]; groep = "-"; }
  if ((m = r.match(/^ {2}(\w+):\s*\{/)) && file.includes("textbook")) { vak = m[1]; groep = "-"; }
  if (!isQ(r)) { if (r !== N[i]) { console.error(`✗ r${i + 1}: geen vraagregel maar wel gewijzigd`); process.exit(1); } continue; }
  if (!isQ(N[i])) { console.error(`✗ r${i + 1}: vraagregel is geen vraag meer`); process.exit(1); }
  const label = groep === "-" ? vak : `${vak}.${groep}`;
  per[label] ??= { gecontroleerd: 0, herschreven: 0, verwijderd: 0 };
  per[label].gecontroleerd++;
  if (r !== N[i]) {
    per[label].herschreven++;
    let a, b; try { a = parse(r); b = parse(N[i]); } catch (e) { console.error(`✗ r${i + 1}: parse ${e.message}`); process.exit(1); }
    if (!Array.isArray(b.options) || b.options.length !== a.options.length || !(b.answer >= 0 && b.answer < b.options.length)) { console.error(`✗ r${i + 1}: opties/antwoord ongeldig`); process.exit(1); }
    wijz.push({ regel: i + 1, label, was: a, nu: b });
  }
}
// import-controle aantallen per vak.groep
if (file.endsWith("sampleQuestions.js")) {
  const tmp = path.join(os.tmpdir(), `sq-oud-${process.pid}.mjs`); fs.writeFileSync(tmp, oudTekst);
  const tel = (SQ) => { const t = {}; for (const [v, lv] of Object.entries(SQ)) for (const [g, a] of Object.entries(lv)) t[`${v}.${g}`] = a.length; return t; };
  const a = tel((await import(pathToFileURL(tmp).href)).SAMPLE_QUESTIONS), b = tel((await import(pathToFileURL(path.resolve(file)).href + "?" + Date.now())).SAMPLE_QUESTIONS);
  fs.unlinkSync(tmp);
  const verschil = Object.keys({ ...a, ...b }).filter((k) => a[k] !== b[k]);
  console.log(verschil.length ? `✗ aantallen per vak.groep wijken af: ${verschil.map((k) => `${k} ${a[k]}→${b[k]}`).join(", ")}` : `✓ aantallen per vak.groep gelijk (${Object.keys(a).length} groepen, ${Object.values(a).reduce((x, y) => x + y, 0)} vragen incl. aliassen)`);
  if (verschil.length) process.exitCode = 1;
}
let tg = 0, th = 0;
for (const [k, w] of Object.entries(per)) { console.log(`${k} · gecontroleerd ${w.gecontroleerd} · herschreven ${w.herschreven} · verwijderd ${w.verwijderd}`); tg += w.gecontroleerd; th += w.herschreven; }
console.log(`TOTAAL ${file}: gecontroleerd ${tg} · herschreven ${th} · verwijderd 0`);
const ji = process.argv.indexOf("--json"); if (ji > 0) fs.writeFileSync(process.argv[ji + 1], JSON.stringify({ per, wijz }, null, 1));

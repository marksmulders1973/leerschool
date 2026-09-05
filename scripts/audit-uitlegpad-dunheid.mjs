#!/usr/bin/env node
// audit-uitlegpad-dunheid.mjs — hoe rijk is de "Hulp bij deze vraag" per leerpad?
//
// Mark 5 sep 2026: "is het uitlegpad niet wat sober?" → dit script meet per pad
// hoeveel checks een uitlegPad hebben en hoeveel daarvan theorie / voorbeelden /
// woorden / basiskennis missen, of maar één stap hebben. Rangschikt de
// Cito-kernpaden (rekenen/taal/begrijpend-lezen/studievaardigheden/spelling,
// groep-niveau) op dunheid zodat een content-sprint van boven naar beneden kan.
//
// Statisch (regex op de bronbestanden), geen import van pad-data.
// Gebruik: node scripts/audit-uitlegpad-dunheid.mjs [--alle] [--json]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, "..", "src", "learnPaths");
const manifest = JSON.parse(fs.readFileSync(path.join(dir, "pathManifest.generated.json"), "utf8"));
const alle = process.argv.includes("--alle");
const asJson = process.argv.includes("--json");

const KERN = new Set(["rekenen", "taal", "begrijpend-lezen", "studievaardigheden", "spelling", "woordenschat"]);

function meet(src) {
  // Knip per uitlegPad-blok: van "uitlegPad: {" tot het bijpassende sluit-accolade.
  const blokken = [];
  let i = 0;
  while ((i = src.indexOf("uitlegPad: {", i)) !== -1) {
    let d = 0, j = src.indexOf("{", i);
    for (; j < src.length; j++) {
      if (src[j] === "{") d++;
      else if (src[j] === "}") { d--; if (d === 0) break; }
    }
    blokken.push(src.slice(i, j + 1));
    i = j + 1;
  }
  const checks = (src.match(/^\s*q:\s*["'`]/gm) || []).length;
  const tel = (re) => blokken.filter((b) => re.test(b)).length;
  const eenStap = blokken.filter((b) => {
    const m = /stappen:\s*\[([\s\S]*?)\](?=\s*,?\s*(woorden|theorie|voorbeelden|basiskennis|niveaus|\}))/.exec(b);
    if (!m) return true;
    return (m[1].match(/\{/g) || []).length <= 1;
  }).length;
  return {
    checks,
    uitlegPads: blokken.length,
    theorie: tel(/\btheorie:/),
    voorbeelden: tel(/\bvoorbeelden:\s*\[/),
    woorden: tel(/\bwoorden:\s*\[/),
    basiskennis: tel(/\bbasiskennis:\s*\[/),
    eenStap,
  };
}

const rows = [];
for (const p of manifest) {
  const isKern = KERN.has(p.subject) && /^groep|^po$/.test(String(p.level || ""));
  if (!alle && !isKern) continue;
  const file = path.join(dir, p.file.replace(/^\.\//, ""));
  if (!fs.existsSync(file)) continue;
  const m = meet(fs.readFileSync(file, "utf8"));
  if (m.checks === 0) continue;
  // Dunheid 0-100: gemiddeld ontbrekend aandeel van de 4 rijke velden + 1-stap-aandeel.
  const n = Math.max(1, m.uitlegPads);
  const dun = Math.round(100 * (
    (1 - m.theorie / n) + (1 - m.voorbeelden / n) + (1 - m.woorden / n) + (1 - m.basiskennis / n) + (m.eenStap / n)
  ) / 5);
  rows.push({ id: p.id, subject: p.subject, level: p.level, file: path.basename(file), kern: isKern, ...m, dun });
}
rows.sort((a, b) => b.dun - a.dun || b.checks - a.checks);

if (asJson) { console.log(JSON.stringify(rows, null, 1)); process.exit(0); }
console.log(`${rows.length} paden${alle ? "" : " (Cito-kern, basisschool)"} · gesorteerd op dunheid (100 = niets rijks)\n`);
console.log("dun%  checks  upad  theor  vb  woord  basis  1stap  id");
for (const r of rows) {
  console.log(String(r.dun).padStart(3) + "%  " + String(r.checks).padStart(5) + "  " + String(r.uitlegPads).padStart(4) + "  " + String(r.theorie).padStart(5) + "  " + String(r.voorbeelden).padStart(3) + "  " + String(r.woorden).padStart(5) + "  " + String(r.basiskennis).padStart(5) + "  " + String(r.eenStap).padStart(5) + "  " + r.id + "  (" + r.file + ")");
}
const tot = rows.reduce((a, r) => (a.c += r.checks, a.u += r.uitlegPads, a.t += r.theorie, a), { c: 0, u: 0, t: 0 });
console.log(`\nTotaal: ${tot.c} checks · ${tot.u} met uitlegPad · ${tot.t} met theorie (${Math.round(100 * tot.t / Math.max(1, tot.u))}%)`);

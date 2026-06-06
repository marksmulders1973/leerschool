#!/usr/bin/env node
// scripts/auditPadVulling.mjs — hoeveel vragen (checks) heeft elk leerpad NU?
// Toont dunne paden (<25 = onder min-doel, <15 = echt mager). Excl. examen-paden
// (authentiek, vast) + helpers + STOPLIST. Run: node scripts/auditPadVulling.mjs

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const DIR = join(process.cwd(), "src", "learnPaths");
const STOP = new Set([
  "eetcultuurNederlandPo.js","emotiesSocialePo.js","klassiekeMuziekPo.js",
  "koudeOorlogModernPo.js","olympischeSpelenPo.js","ruimtevaartPo.js","godsdienstenCulturenPo.js",
]);
const isHelper = (f) => /^(index|subjectMapping|examenLookup|pathLoaders|pathManifest|utils|examPathPicker|questionPathMap)/.test(f) || f.includes(".test.") || f.endsWith(".json") || f.endsWith(".generated.js");

const rows = [];
for (const f of readdirSync(DIR)) {
  if (!f.endsWith(".js") || isHelper(f) || f.startsWith("examen") || STOP.has(f)) continue;
  const c = readFileSync(join(DIR, f), "utf8");
  const checks = (c.match(/\bq:\s*["`']/g) || []).length;
  const subj = (c.match(/subject:\s*["']([^"']+)["']/) || [])[1] || "?";
  rows.push({ f, checks, subj });
}
rows.sort((a, b) => a.checks - b.checks);

const leeg = rows.filter(r => r.checks < 15);
const onder = rows.filter(r => r.checks >= 15 && r.checks < 25);
console.log(`\n=== Pad-vulling (excl. examen/STOPLIST) — ${rows.length} paden ===\n`);
console.log(`🔴 <15 vragen (mager, prio): ${leeg.length}`);
for (const r of leeg) console.log(`   ${String(r.checks).padStart(2)}  ${r.f}  [${r.subj}]`);
console.log(`\n🟠 15–24 vragen (onder min-doel 25): ${onder.length}`);
for (const r of onder) console.log(`   ${String(r.checks).padStart(2)}  ${r.f}  [${r.subj}]`);
console.log(`\n🟢 ≥25 vragen: ${rows.filter(r => r.checks >= 25).length}`);
const totaal = rows.reduce((s, r) => s + r.checks, 0);
console.log(`\nTotaal vragen in deze paden: ${totaal} · gemiddeld ${(totaal / rows.length).toFixed(1)}/pad\n`);
process.exit(0);

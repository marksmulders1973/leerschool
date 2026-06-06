#!/usr/bin/env node
// scripts/auditUitlegPadGaps.mjs
//
// Vindt examen-checks die WEL een leerpadLink hebben maar GEEN uitlegPad.
// Die sturen de leerling weg i.p.v. ter plekke uit te leggen — dat is een dode
// plek in de "bal" (vraag → uitleg → leerpad → terug). Koersplan 2026-06-06.
//
// Heuristiek (zelfde stijl als auditKennisgraaf.mjs): per examen-bestand tellen
// we checks (q:), uitlegPad: en leerpadLink:. Gat = checks zonder uitlegPad.
//
// Run: node scripts/auditUitlegPadGaps.mjs   (--verbose voor alle bestanden)

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const PATHS_DIR = join(process.cwd(), "src", "learnPaths");
const VERBOSE = process.argv.includes("--verbose");

const files = readdirSync(PATHS_DIR)
  .filter((f) => f.startsWith("examen") && f.endsWith(".js") && f !== "examenLookup.js");

const rapport = [];
let totChecks = 0, totUitleg = 0, totLink = 0, totGat = 0;

for (const f of files) {
  const c = readFileSync(join(PATHS_DIR, f), "utf8");
  const checks = (c.match(/\bq:\s*["`']/g) || []).length;
  const uitleg = (c.match(/uitlegPad:/g) || []).length;
  const links = (c.match(/leerpadLink:/g) || []).length;
  const gat = Math.max(0, checks - uitleg);
  totChecks += checks; totUitleg += uitleg; totLink += links; totGat += gat;
  if (gat > 0 || VERBOSE) rapport.push({ f, checks, uitleg, links, gat });
}

rapport.sort((a, b) => b.gat - a.gat);

console.log("\n=== uitlegPad-gaten in examen-paden ===\n");
console.log(`Examen-bestanden: ${files.length}`);
console.log(`Checks totaal: ${totChecks} · met uitlegPad: ${totUitleg} · met leerpadLink: ${totLink}`);
console.log(`GAT (checks zonder uitlegPad): ${totGat}\n`);
console.log("Per bestand (meeste gaten eerst):");
for (const r of rapport) {
  console.log(`  ${r.gat.toString().padStart(3)} gat  ·  ${r.uitleg}/${r.checks} uitleg  ·  ${r.links} link  ·  ${r.f}`);
}
console.log("\nPrioriteit = bestanden met veel gaten én veel leerpadLinks (de loop bestaat al, alleen de in-place uitleg mist).\n");

process.exit(0);

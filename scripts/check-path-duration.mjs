#!/usr/bin/env node
// B1.5 — 15-min-belofte build-gate (ratchet) + duur-rapport.
//
// Probleem: 206/322 paden duren >15 min (estimatedMinutes uit het manifest).
// Bestaande lange paden in één keer auto-splitsen is onveilig — pad-id's
// veranderen breekt leerpadLink/examenLookup/voortgang. Daarom een RATCHET-gate:
// we leggen de huidige duur per pad vast als baseline en bewaken dat het niet
// ERGER wordt. Naarmate paden gesplitst/ingekort worden, draai je
// `--update-baseline` om de lat te verlagen (kan nooit omhoog).
//
// Bron: src/learnPaths/pathManifest.generated.json (estimatedMinutes is daar al
// precomputed — zelfde formule als shared/pathDuration.js). Draai dit dus NA
// buildPathManifest (zit in `npm run prebuild`).
//
// Gebruik:
//   node scripts/check-path-duration.mjs                 → rapport (verdeling + ergste)
//   node scripts/check-path-duration.mjs --gate          → faalt (exit 1) bij regressie
//   node scripts/check-path-duration.mjs --update-baseline → herijk baseline naar nu
//
// Gate faalt als:
//   (a) een bestaand pad LANGER werd dan zijn baseline, OF
//   (b) een NIEUW pad (niet in baseline) >15 min duurt.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const MANIFEST = new URL("../src/learnPaths/pathManifest.generated.json", import.meta.url);
const BASELINE = new URL("./pathDuration.baseline.json", import.meta.url);
const BELOFTE_MIN = 15;

const args = process.argv.slice(2);
const GATE = args.includes("--gate");
const UPDATE = args.includes("--update-baseline");

const manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
const cur = Object.fromEntries(manifest.map((p) => [p.id, p.estimatedMinutes]));

if (UPDATE) {
  writeFileSync(BASELINE, JSON.stringify(cur, null, 2) + "\n", "utf8");
  console.log(`✓ baseline herijkt: ${Object.keys(cur).length} paden → ${BASELINE.pathname.split("/").pop()}`);
  process.exit(0);
}

// Rapport
const over = manifest.filter((p) => p.estimatedMinutes > BELOFTE_MIN);
const buckets = {};
for (const p of manifest) buckets[p.estimatedMinutes] = (buckets[p.estimatedMinutes] || 0) + 1;
console.log(`\n=== 15-min-belofte — duur-rapport ===`);
console.log(`Paden: ${manifest.length} · binnen belofte (≤${BELOFTE_MIN}m): ${manifest.length - over.length} · erover: ${over.length}`);
console.log(`Verdeling (min→#): ${JSON.stringify(buckets)}`);
const worst = [...over].sort((a, b) => b.estimatedMinutes - a.estimatedMinutes).slice(0, 12);
if (worst.length) {
  console.log(`Langste paden (kandidaat voor splitsen/inkorten):`);
  for (const p of worst) console.log(`  ${String(p.estimatedMinutes).padStart(3)}m · ${p.stepCount} stappen · ${p.checkCount} checks · ${p.id}`);
}

if (!GATE) {
  console.log(`\n(rapport-modus; gebruik --gate voor de build-bewaking, --update-baseline om de lat te verlagen)\n`);
  process.exit(0);
}

// Gate (ratchet) tegen baseline
if (!existsSync(BASELINE)) {
  console.error(`\n✗ Geen baseline (${BASELINE.pathname.split("/").pop()}). Draai eerst --update-baseline.`);
  process.exit(1);
}
const base = JSON.parse(readFileSync(BASELINE, "utf8"));
const regressies = [];
const nieuweLang = [];
for (const p of manifest) {
  const b = base[p.id];
  if (b === undefined) {
    if (p.estimatedMinutes > BELOFTE_MIN) nieuweLang.push(`${p.id}: ${p.estimatedMinutes}m (nieuw pad > ${BELOFTE_MIN}m)`);
  } else if (p.estimatedMinutes > b) {
    regressies.push(`${p.id}: ${b}m → ${p.estimatedMinutes}m (werd langer)`);
  }
}
if (regressies.length || nieuweLang.length) {
  console.error(`\n✗ 15-min-gate gefaald:`);
  for (const r of regressies) console.error(`  ↑ ${r}`);
  for (const n of nieuweLang) console.error(`  + ${n}`);
  console.error(`\nKort het pad in (minder/korter explanation of checks) of splits het.`);
  console.error(`Bewust akkoord? Draai 'node scripts/check-path-duration.mjs --update-baseline' en commit de baseline.\n`);
  process.exit(1);
}
console.log(`\n✓ 15-min-gate OK — geen pad werd langer, geen nieuw pad > ${BELOFTE_MIN}m.\n`);
process.exit(0);

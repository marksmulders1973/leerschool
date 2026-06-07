#!/usr/bin/env node
// fix-uitlegpad-letterleak.mjs — USP-lek opschoning (Mark 2026-06-07).
//
// Probleem (25-agent-audit 2026-06-02): de 3-niveau-uitleg (uitlegPad.niveaus
// + korte uitlegPad-strings) — DE USP van Leerkwartier — eindigt op een
// aangeplakt antwoord-letter-token: "...= 20. = A.", "Urgenda = A.". Dat:
//   1) verklapt het multiple-choice-antwoord (uitleg hoort te helpen, niet de
//      letter te geven), en
//   2) is na option-shuffle vaak de VERKEERDE letter (correctheidsbug).
//
// Bevinding: alle ~6937 voorkomens van " = [A-D]." staan aan het EIND van een
// double-quoted string-literal (geverifieerd: 0 midden-in-zin). Dus veilig te
// strippen zonder de didactische uitleg ervóór aan te tasten.
//
// Fix: verwijder het trailing " = [A-D]."-token vlak vóór de sluit-quote.
//   Regex: ([^"])\s*=\s*[A-D]\.\s*"   →   $1"
//   - ([^"]) garandeert dat er échte inhoud vóór het token staat (geen lege
//     string als resultaat; "= A." alleen → onaangeroerd).
//   - [A-D] = exact één keuze-letter (geen getallen/variabelen zoals "= 20").
//   - alleen vlak vóór " (einde string-literal) → raakt geen midden-in-zin "=".
//
// Scope: alleen src/learnPaths/*.js. Reversibel via git.
// Run: node scripts/fix-uitlegpad-letterleak.mjs [--dry-run]

import fs from "fs";
import path from "path";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

const SKIP = new Set([
  "index.js", "index.test.js", "examenLookup.js", "pathLoaders.js",
  "subjectMapping.js", "subjectMapping.test.js", "questionPathMap.generated.js",
]);

// Drie hoog-precieze antwoord-letter-lek-vormen aan het EIND van een
// string-literal (allemaal vlak vóór de sluit-quote). De ([^"]) / ([^"\s])
// lead-guard voorkomt een lege resultaat-string.
//   1) "...= A."        → keuze-letter na een '=' (bv. "3 cm = 3 km. = A.")
//   2) "...Antwoord A."  → expliciete "Antwoord <letter>."-verklap
//   3) "...optie A."     → expliciete "optie <letter>."-verklap
// NIET geraakt (bewust): losse " B." (kan Ampère/bloedgroep/wis-A-en-B zijn).
const LEAKS = [
  /([^"\s])\s*=\s*[A-D]\.\s*"/g,
  /([^"])\s*Antwoord [A-D]\.\s*"/g,
  /([^"])\s*[Oo]ptie [A-D]\.\s*"/g,
];

const files = fs.readdirSync(ROOT).filter(
  (f) => f.endsWith(".js") && !SKIP.has(f) && !f.includes(".test.")
);

let totalFixed = 0;
let filesTouched = 0;
const samples = [];

for (const file of files) {
  const full = path.join(ROOT, file);
  const src = fs.readFileSync(full, "utf8");
  let count = 0;
  let out = src;
  for (const LEAK of LEAKS) {
    out = out.replace(LEAK, (m, lead) => {
      count++;
      if (samples.length < 25) {
        samples.push(`${file}: …${m.trim()}  →  …${lead}"`);
      }
      return `${lead}"`;
    });
  }
  if (count > 0) {
    totalFixed += count;
    filesTouched++;
    if (!dryRun) fs.writeFileSync(full, out, "utf8");
  }
}

console.log(`${dryRun ? "[DRY-RUN] " : ""}Antwoord-letter-tokens gestript: ${totalFixed} in ${filesTouched} bestanden.`);
console.log("\nSteekproef (eerste 25):");
for (const s of samples) console.log("  " + s);
if (dryRun) console.log("\n(geen bestanden gewijzigd — run zonder --dry-run om toe te passen)");

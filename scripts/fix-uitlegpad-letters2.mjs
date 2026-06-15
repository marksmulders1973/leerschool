// B2.1 (vervolg op fix-uitlegpad-letters.mjs): de eerste fixer raakte alleen de
// MEERREGELIGE niveau-vorm (regel begint met basis:/simpeler:/nogSimpeler:).
// De INLINE vorm  `niveaus: { basis: "Convergent. A.", ... }`  bleef onaangeroerd
// → daar staat de antwoord-letter ("A.") nog overal. Die letters (a) kloppen niet
// meer na shuffleOptions en (b) verklappen de antwoord-positie aan juist de
// zwakste leerling (auto-switch naar simpeler/nogSimpeler bij ≥2 fout).
//
// Dit script strip de losse "X."-lettertokens aan het EINDE van ELKE niveau-string
// (basis/simpeler/nogSimpeler), ongeacht inline of meerregelig. Het matcht de
// key→string-waarde direct, dus regel-positie maakt niet uit.
//
// VEILIG: alleen strippen als er échte zin-einde-interpunctie (.!?…) vlak vóór de
// losse letter staat ("Convergent. A." → "Convergent."). Daardoor blijven legitieme
// einden als "vitamine A." of "wis A." ongemoeid (geen punt+spatie vóór de letter).
//
// Gebruik:  node scripts/fix-uitlegpad-letters2.mjs          (dry-run, telling)
//           node scripts/fix-uitlegpad-letters2.mjs --write  (past bestanden aan)
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = new URL("../src/learnPaths/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const WRITE = process.argv.includes("--write");

// Matcht een niveau-key gevolgd door een string-waarde (", ' of `), met escapes.
// De waarde wordt apart verwerkt; we laten quotes/escapes intact.
const NIVEAU_KV = /(\b(?:basis|simpeler|nogSimpeler)\s*:\s*)(["'`])((?:\\.|(?!\2)[\s\S])*?)(\2)/g;
// Losse antwoord-letter aan het EIND, ná zin-einde-interpunctie.
const TRAILING_LETTER = /([.!?…])\s+(?:Antwoord\s+|[Oo]ptie\s+)?[A-D]\.\s*$/;

let totalFiles = 0, totalFixes = 0;
const perFile = [];

for (const name of readdirSync(DIR)) {
  if (!/\.(js|jsx)$/.test(name)) continue;
  if (name.includes(".test.")) continue;
  const file = join(DIR, name);
  const src = readFileSync(file, "utf8");
  let fixes = 0;
  const out = src.replace(NIVEAU_KV, (full, key, q, body, qEnd) => {
    let v = body;
    let changed = false;
    while (TRAILING_LETTER.test(v)) {
      v = v.replace(TRAILING_LETTER, "$1");
      changed = true;
    }
    if (!changed) return full;
    fixes += 1;
    return `${key}${q}${v}${qEnd}`;
  });
  if (fixes > 0) {
    totalFiles += 1;
    totalFixes += fixes;
    perFile.push(`${name}: ${fixes}`);
    if (WRITE) writeFileSync(file, out, "utf8");
  }
}

console.log(`${WRITE ? "GEFIXT" : "DRY-RUN"} — ${totalFixes} niveau-waarden in ${totalFiles} bestanden`);
for (const p of perFile.slice(0, 25)) console.log("  " + p);
if (perFile.length > 25) console.log(`  … en ${perFile.length - 25} bestanden meer`);

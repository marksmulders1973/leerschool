// B0.5 + B2.1-deel-1 (7-bots-review 2026-06-13): uitlegPad-niveaus eindigen
// 695× op een antwoord-letter ("8 komt na 7. A.") — die letters kloppen niet
// (shuffleOptions hershuffelt de opties per sessie) én verklappen het antwoord.
// Dit script stript de losse letter-tokens aan het EINDE van niveau-strings.
//
// Bewust beperkt tot regels die met basis:/simpeler:/nogSimpeler: beginnen,
// zodat we geen legitieme tekst elders raken ("vitamine A." e.d.).
// De inhoudelijke herschrijf (niveau-tekst die het antwoord zelf bevat) is
// een aparte content-sessie — zie backlog B2.1.
//
// Gebruik:  node scripts/fix-uitlegpad-letters.mjs          (dry-run, toont telling)
//           node scripts/fix-uitlegpad-letters.mjs --write  (past bestanden aan)
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const DIR = new URL("../src/learnPaths/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const WRITE = process.argv.includes("--write");

// Regel begint met een niveau-key; strip 1+ losse "X."-lettertokens vlak vóór
// de sluitquote, mits er al zin-einde-interpunctie vóór staat.
const NIVEAU_LINE = /^(\s*(?:basis|simpeler|nogSimpeler)\s*:\s*)(["'`])([\s\S]*?)(\2)(,?\s*)$/;
const TRAILING_LETTER = /([.!?…])\s+(?:Antwoord\s+)?[A-D]\.\s*$/;

let totalFiles = 0, totalFixes = 0;
const perFile = [];

for (const name of readdirSync(DIR)) {
  if (!/\.(js|jsx)$/.test(name)) continue;
  const file = join(DIR, name);
  const src = readFileSync(file, "utf8");
  const lines = src.split("\n");
  let fixes = 0;
  const out = lines.map((line) => {
    const m = line.match(NIVEAU_LINE);
    if (!m) return line;
    let body = m[3];
    let changed = false;
    // herhaal: soms staan er meerdere tokens ("…. A. B.")
    while (TRAILING_LETTER.test(body)) {
      body = body.replace(TRAILING_LETTER, "$1");
      changed = true;
    }
    if (!changed) return line;
    fixes += 1;
    return `${m[1]}${m[2]}${body}${m[4]}${m[5]}`;
  });
  if (fixes > 0) {
    totalFiles += 1;
    totalFixes += fixes;
    perFile.push(`${name}: ${fixes}`);
    if (WRITE) writeFileSync(file, out.join("\n"), "utf8");
  }
}

console.log(`${WRITE ? "GEFIXT" : "DRY-RUN"} — ${totalFixes} niveau-regels in ${totalFiles} bestanden`);
for (const p of perFile.slice(0, 20)) console.log("  " + p);
if (perFile.length > 20) console.log(`  … en ${perFile.length - 20} bestanden meer`);

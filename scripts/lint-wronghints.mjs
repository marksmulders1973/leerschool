#!/usr/bin/env node
// scripts/lint-wronghints.mjs
//
// Scan alle src/learnPaths/*.js voor wrongHints die het juiste antwoord
// verklappen. Geeft een gestructureerde lijst met file/regel/citaat zodat
// de wrongHints gefaseerd herschreven kunnen worden naar denkprikkels.
//
// Patronen die als 'verklapt antwoord' tellen:
//   - "= 12", "= -3", "= 0,75", "= ¾"  (eindresultaat in hint)
//   - "→ 12", "→ x = 4"                (oplossing-pijl)
//   - "Reken: a × b = c"               (volledige berekening)
//   - "dus x = 5"                      (variabele-oplossing)
//   - "het antwoord is X"              (letterlijk)
//
// Skipped: paden die al gereviewed zijn (memory feedback_didactic_hints.md):
//   citoStrategieenGroep8, begrijpendLezenStrategie, procenten, verhoudingen.
//
// Run: node scripts/lint-wronghints.mjs

import { readdirSync, readFileSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\//, "");
const PATHS_DIR = join(process.cwd(), "src", "learnPaths");
const SKIP = new Set([
  "citoStrategieenGroep8.js",
  "begrijpendLezenStrategie.js",
  "procenten.js",
  "verhoudingen.js",
  "index.js",
  "index.test.js",
  "subjectMapping.js",
  "subjectMapping.test.js",
]);

// Patronen die antwoord verklappen
const PATTERNS = [
  { re: /=\s*[-−]?\d+(?:[.,]\d+)?(?!\d*\s*[?])/g, label: "= getal (eindresultaat)" },
  { re: /→\s*[-−]?\d+(?:[.,]\d+)?/g, label: "→ getal (oplossing-pijl)" },
  { re: /→\s*[a-z]\s*=/gi, label: "→ var = (variabele-oplossing)" },
  { re: /\bdus\s+[a-z]\s*=/gi, label: "'dus x = ...' (eind-conclusie)" },
  { re: /Reken:\s+[^.]+=\s*[-−]?\d/g, label: "Reken: ... = N (volledige som)" },
  { re: /het\s+(?:goede|juiste)\s+antwoord\s+is/gi, label: "letterlijk 'het antwoord is'" },
  { re: /=\s*[½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/g, label: "= breuk-symbool" },
];

function findHints(content) {
  // Vind alle "wrongHints: [...]"-blokken — ondiepe parser.
  const hits = [];
  const lines = content.split("\n");
  let inWrongHints = false;
  let depth = 0;
  let buffer = [];
  let startLine = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (!inWrongHints) {
      const m = line.match(/wrongHints\s*:\s*\[/);
      if (m) {
        inWrongHints = true;
        depth = 1;
        buffer = [];
        startLine = i + 1;
        const after = line.slice(m.index + m[0].length);
        if (after.trim()) buffer.push({ ln: i + 1, txt: after });
      }
      continue;
    }
    // count brackets — naive but works for typical formatting
    for (const ch of line) {
      if (ch === "[") depth++;
      else if (ch === "]") depth--;
    }
    buffer.push({ ln: i + 1, txt: line });
    if (depth <= 0) {
      hits.push({ startLine, lines: buffer });
      inWrongHints = false;
    }
  }
  return hits;
}

function checkLine(text) {
  const matches = [];
  for (const p of PATTERNS) {
    const found = text.match(p.re);
    if (found) matches.push({ label: p.label, samples: found.slice(0, 2) });
  }
  return matches;
}

function main() {
  const files = readdirSync(PATHS_DIR).filter((f) => f.endsWith(".js") && !SKIP.has(f));
  let totalLeaks = 0;
  let totalFiles = 0;
  const report = [];

  for (const f of files) {
    const fp = join(PATHS_DIR, f);
    const content = readFileSync(fp, "utf8");
    const hints = findHints(content);
    const fileLeaks = [];
    for (const h of hints) {
      for (const { ln, txt } of h.lines) {
        // Alleen quote-strings met substantiële inhoud testen
        const m = txt.match(/["'`]([^"'`]{15,})["'`]/g);
        if (!m) continue;
        for (const raw of m) {
          const inner = raw.slice(1, -1);
          const found = checkLine(inner);
          if (found.length > 0) {
            fileLeaks.push({ ln, txt: inner.slice(0, 120), found });
          }
        }
      }
    }
    if (fileLeaks.length > 0) {
      totalFiles++;
      totalLeaks += fileLeaks.length;
      report.push({ file: f, count: fileLeaks.length, items: fileLeaks });
    }
  }

  // Sorteer op aantal leaks per file (meest stuk eerst)
  report.sort((a, b) => b.count - a.count);

  console.log("=== wrongHints Lint Report ===\n");
  console.log(`Geanalyseerd: ${files.length} pad-files (${SKIP.size} skipped)`);
  console.log(`Files met antwoord-verklap: ${totalFiles}`);
  console.log(`Totaal verdachte hints: ${totalLeaks}\n`);

  for (const r of report) {
    console.log(`\n--- ${r.file} (${r.count} hints met verklap) ---`);
    for (const item of r.items.slice(0, 8)) {
      console.log(`  r.${item.ln}: "${item.txt}"`);
      for (const f of item.found) {
        console.log(`    ⚠️ ${f.label}: ${f.samples.join(" | ")}`);
      }
    }
    if (r.items.length > 8) console.log(`  ... en ${r.items.length - 8} meer.`);
  }

  // Exit-code = aantal files met leaks (CI-friendly)
  process.exit(totalFiles > 0 ? 1 : 0);
}

main();

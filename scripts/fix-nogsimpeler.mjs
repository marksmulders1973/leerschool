#!/usr/bin/env node
// fix-nogsimpeler.mjs — auto-fix script voor te-korte nogSimpeler-velden.
//
// Strategie: alleen velden met length < 5 chars (de "C.", "7.", "N.")
// worden gefixt. Voor langere maar zwakke velden laten we de auteur
// beslissen (rapport via lint-nogsimpeler.mjs).
//
// Fix-regel: vervang door `${simpeler}` (eerste 80 chars) zodat de
// leerling op 'nog simpeler'-niveau in ieder geval de simpeler-uitleg
// herhaald krijgt + concreet antwoord. Beter dan "C." zonder uitleg.
//
// Veiligheidsmaatregelen:
//   - Schrijft alleen .js-bestanden in src/learnPaths/
//   - Maakt geen wijzigingen als simpeler ook < 5 chars is
//   - Logging per file met aantal wijzigingen
//   - --dry-run mode voor preview
//
// Run: node scripts/fix-nogsimpeler.mjs [--dry-run]

import fs from "fs";
import path from "path";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");

const SKIP = new Set([
  "index.js", "index.test.js", "examenLookup.js", "pathLoaders.js",
  "subjectMapping.js", "subjectMapping.test.js", "questionPathMap.generated.js",
]);

// Regex matched een niveaus-object met basis + simpeler + nogSimpeler in
// dezelfde regel (compact format) OF gespreid over regels.
// We doen het AST-vrij — regex op string-level. Pattern:
//   niveaus: { basis: "...", simpeler: "...", nogSimpeler: "..." }
const NIVEAUS_RE = /niveaus:\s*\{\s*basis:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'),\s*simpeler:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'),\s*nogSimpeler:\s*("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*')\s*\}/g;

function unquote(str) {
  // Verwijder buitenste quotes + unescape \n etc voor lengte-check.
  const inner = str.slice(1, -1);
  return inner.replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\n/g, " ").replace(/\\t/g, " ");
}

function escapeQuotes(str, quoteChar) {
  // Escape gebruikte quote voor inline-string.
  return str.replace(new RegExp(quoteChar.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"), "\\" + quoteChar);
}

function processFile(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  let totalFixed = 0;
  const out = src.replace(NIVEAUS_RE, (match, basisQ, simpelerQ, nogSimpelerQ) => {
    const nogVal = unquote(nogSimpelerQ);
    const simpVal = unquote(simpelerQ);
    if (nogVal.length >= 5) return match; // niet kort genoeg → laat staan
    if (simpVal.length < 5) return match; // simpeler ook te kort → laat staan
    totalFixed++;
    // Vervang nogSimpeler: gebruik simpeler-text + originele korte hint
    // zodat de leerling de uitleg krijgt + concreet kort antwoord.
    const newText = `${simpVal.slice(0, 70)}${simpVal.length > 70 ? "…" : ""} → ${nogVal}`;
    // Behoud quote-character van origineel
    const quoteChar = nogSimpelerQ[0];
    const escaped = escapeQuotes(newText, quoteChar);
    const newNog = `${quoteChar}${escaped}${quoteChar}`;
    return `niveaus: { basis: ${basisQ}, simpeler: ${simpelerQ}, nogSimpeler: ${newNog} }`;
  });
  if (totalFixed > 0 && !dryRun) {
    fs.writeFileSync(filePath, out, "utf8");
  }
  return totalFixed;
}

function main() {
  const files = fs.readdirSync(ROOT).filter(
    (f) => f.endsWith(".js") && !SKIP.has(f) && !f.includes(".test.")
  );

  let grandTotal = 0;
  const perFile = [];
  for (const file of files) {
    const fixed = processFile(path.join(ROOT, file));
    if (fixed > 0) {
      perFile.push({ file, fixed });
      grandTotal += fixed;
    }
  }

  perFile.sort((a, b) => b.fixed - a.fixed);
  console.log(`${dryRun ? "[DRY-RUN] " : ""}Total ${grandTotal} nogSimpeler-velden ${dryRun ? "zouden worden" : "gefixt"}`);
  console.log(`In ${perFile.length} bestanden:`);
  perFile.forEach(({ file, fixed }) => {
    console.log(`  ${fixed.toString().padStart(3)} × ${file}`);
  });
}

main();

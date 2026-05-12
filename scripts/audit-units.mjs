#!/usr/bin/env node
// scripts/audit-units.mjs
//
// Scan src/learnPaths/*.js voor rekensommen waar eenheden (%, €, m, cm, km,
// L, ml, kg, gr, min, uur, leerlingen, vakjes) ontbreken in de uitleg of
// vragen. Mark's regel (2026-05-11): een kind van ~8 jr mag nooit hoeven
// gokken of "100 − 30 = 70" over euro's, procenten of iets anders gaat.
//
// Patroon: een rekenuitdrukking van vorm  <getal> <operator> <getal> [= <getal>]
// op een regel die WEL "korting"/"prijs"/"€" in directe context heeft (binnen
// 80 tekens) maar GEEN €-symbool op de getallen zelf, of die "%" mist in
// een procent-uitleg, telt als verdacht.
//
// Run: node scripts/audit-units.mjs
//
// Output: bestand:regel | verdachte expressie | context (40 tekens links/rechts)

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const PATHS_DIR = join(process.cwd(), "src", "learnPaths");

const SKIP = new Set([
  "index.js", "index.test.js",
  "subjectMapping.js", "subjectMapping.test.js",
]);

// Een rekenexpressie: getal operator getal, eventueel met '= getal'.
// Operator: − - + × x * (geen ÷/: want die zijn vaak abstract).
const EXPR = /(\d+(?:[.,]\d+)?)\s*([−\-+×x*])\s*(\d+(?:[.,]\d+)?)(?:\s*=\s*(\d+(?:[.,]\d+)?))?/g;

// Unit-tokens die binnen 25 tekens van de expressie aanwezig moeten zijn,
// óf direct vóór/na een van de drie getallen.
const UNIT_TOKENS = [
  "%", "€", "$",
  " L", " ml", " cl", " dl",
  " kg", " gr", " gram",
  " cm", " mm", " km", " m ", " m.", "meter",
  " min", "minuten", " uur", " sec",
  "leerlingen", "kinderen", "mensen", "vragen", "vakjes",
  "stuks", "snoepjes", "punten", "graden",
  "procent", "euro",
];

// Money/currency-context: als deze in dezelfde regel/bullet voorkomen,
// verwachten we €-tekens op de getallen.
const MONEY_CONTEXT = /(korting|prijs|betaal|bespaa?r|bedrag|kost|kosten|verkoop|prijskaartje|aanbieding|uitverkoop|sale|nieuwe prijs|oude prijs)/i;
const PCT_CONTEXT = /(procent|percentage|korting|toename|stijging|daling)/i;

function hasUnitNear(line, matchIdx, matchLen) {
  // Check 30 chars links + 30 chars rechts van de hele expressie.
  const start = Math.max(0, matchIdx - 30);
  const end = Math.min(line.length, matchIdx + matchLen + 30);
  const window = line.slice(start, end);
  return UNIT_TOKENS.some((t) => window.includes(t));
}

function lint(file, text) {
  const findings = [];
  const lines = text.split("\n");
  lines.forEach((line, i) => {
    // Skip code-only regels (SVG, imports, etc.)
    if (/^\s*(\/\/|import|export|const |let |function |<rect|<text|<line|<svg|<\/svg)/.test(line)) return;
    if (!/['"`]/.test(line)) return; // geen string-literal

    const moneyCtx = MONEY_CONTEXT.test(line);
    const pctCtx = PCT_CONTEXT.test(line);
    if (!moneyCtx && !pctCtx) return;

    let m;
    EXPR.lastIndex = 0;
    while ((m = EXPR.exec(line)) !== null) {
      const expr = m[0];
      const idx = m.index;
      // Heeft de expressie zelf een eenheid in z'n window?
      if (hasUnitNear(line, idx, expr.length)) continue;

      // Verdacht. Bepaal welk type.
      const type = moneyCtx ? "€?" : "%?";
      const ctxStart = Math.max(0, idx - 40);
      const ctxEnd = Math.min(line.length, idx + expr.length + 40);
      const ctx = line.slice(ctxStart, ctxEnd).replace(/\s+/g, " ").trim();
      findings.push({ file, line: i + 1, type, expr, ctx });
    }
  });
  return findings;
}

const files = readdirSync(PATHS_DIR).filter(
  (f) => f.endsWith(".js") && !SKIP.has(f),
);

let total = 0;
const byFile = {};
for (const f of files) {
  const text = readFileSync(join(PATHS_DIR, f), "utf8");
  const findings = lint(f, text);
  if (findings.length) {
    byFile[f] = findings;
    total += findings.length;
  }
}

const order = Object.keys(byFile).sort(
  (a, b) => byFile[b].length - byFile[a].length,
);

console.log("\n=== EENHEDEN-AUDIT — verdachte rekensommen zonder %/€/eenheid ===\n");
for (const f of order) {
  console.log(`\n--- ${f} (${byFile[f].length} verdacht) ---`);
  for (const x of byFile[f]) {
    console.log(`  L${x.line}  ${x.type}  "${x.expr}"   in: …${x.ctx}…`);
  }
}
console.log(`\nTotaal: ${total} verdachte expressies in ${order.length} files.\n`);
console.log("LET OP: heuristisch. False positives mogelijk wanneer eenheid 1-2 regels eerder staat. Visueel verifiëren voor je fixt.\n");

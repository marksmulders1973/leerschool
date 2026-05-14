#!/usr/bin/env node
// lint-wronghints-eliminatie.mjs — Sprint-0 audit (Mark 2026-05-14).
//
// Doel: detecteer wrongHints die het correcte antwoord weggeven via UITSLUITING,
// niet via een directe verklap (= getal). Twee patronen:
//
//   Pattern A — IDENTIEKE-HINTS-LEAK
//     Alle non-null/non-lege wrongHints zijn (na lowercase+trim) IDENTIEK.
//     Voorbeeld: [null, "Vrouw.", "Vrouw.", "Vrouw."] bij vraag "wie is
//     eerste man-koning?" — de null-positie is per uitsluiting de man.
//
//   Pattern D — CORRECT-ANTWOORD-IN-HINT-LEAK
//     Een wrongHint bevat letterlijk de tekst van options[answer]. Vaak een
//     "eigenlijk is het X, niet Y"-formulering die het juiste antwoord verraadt.
//     Filter: options[answer] moet ≥4 chars zijn (anders te veel false-positives
//     op woorden als 'is', '€', etc.).
//
// Modi:
//   node scripts/lint-wronghints-eliminatie.mjs              → alle hits
//   node scripts/lint-wronghints-eliminatie.mjs --top 20     → top-N pad-files
//   node scripts/lint-wronghints-eliminatie.mjs --pattern A  → alleen pattern A
//   node scripts/lint-wronghints-eliminatie.mjs --pattern D  → alleen pattern D
//   node scripts/lint-wronghints-eliminatie.mjs --path <id>  → 1 pad

import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const args = process.argv.slice(2);
const topN = args.includes("--top") ? Number(args[args.indexOf("--top") + 1]) || 50 : Infinity;
const onlyPattern = args.includes("--pattern") ? args[args.indexOf("--pattern") + 1] : null;
const pathFilter = args.includes("--path") ? args[args.indexOf("--path") + 1] : null;

const SKIP = new Set([
  "index.js", "index.test.js", "examenLookup.js", "pathLoaders.js",
  "subjectMapping.js", "subjectMapping.test.js", "questionPathMap.generated.js",
]);

function normalize(s) {
  return String(s || "").toLowerCase().trim().replace(/[.,;:!?]+$/g, "");
}

function stripMd(s) {
  // Strip basis-markdown om vergelijking met options eerlijker te maken.
  return String(s || "").replace(/[*_`~]+/g, "");
}

function analyzeCheck(check) {
  const flags = [];
  const opts = Array.isArray(check?.options) ? check.options : null;
  const hints = Array.isArray(check?.wrongHints) ? check.wrongHints : null;
  const answer = Number.isInteger(check?.answer) ? check.answer : null;
  if (!opts || !hints || answer == null) return flags;
  if (opts.length < 3) return flags; // Bij 2 opties is uitsluiting onvermijdelijk.

  // Pattern A: non-null hints allemaal identiek.
  const nonNullHints = hints
    .map((h, i) => ({ i, h }))
    .filter(({ h }) => h != null && String(h).trim() !== "");
  if (nonNullHints.length >= 2) {
    const normSet = new Set(nonNullHints.map(({ h }) => normalize(h)));
    if (normSet.size === 1 && nonNullHints.length === opts.length - 1) {
      // Alle foute opties dezelfde hint = klassieke eliminatie-leak.
      flags.push({
        pattern: "A",
        detail: `alle ${nonNullHints.length} foute hints identiek: "${nonNullHints[0].h}"`,
      });
    }
  }

  // Pattern D: hint bevat options[answer] letterlijk.
  const correctText = stripMd(opts[answer] || "").trim();
  if (correctText.length >= 4) {
    const lcCorrect = correctText.toLowerCase();
    for (const { i, h } of nonNullHints) {
      const lcHint = stripMd(h).toLowerCase();
      if (lcHint.includes(lcCorrect)) {
        flags.push({
          pattern: "D",
          detail: `hint[${i}] bevat correct antwoord "${correctText}": "${h}"`,
        });
        break; // 1 melding per check is genoeg.
      }
    }
  }

  return flags;
}

async function main() {
  const files = fs.readdirSync(ROOT).filter(
    (f) => f.endsWith(".js") && !SKIP.has(f) && !f.includes(".test.")
  );

  const perFile = []; // [{ file, pathId, hits: [...] }]
  let totalA = 0;
  let totalD = 0;

  for (const file of files) {
    const full = path.join(ROOT, file);
    let mod;
    try {
      mod = await import(pathToFileURL(full).href);
    } catch (e) {
      console.error(`[skip] ${file}: ${e.message}`);
      continue;
    }
    const p = mod.default;
    if (!p || !p.id) continue;
    if (pathFilter && p.id !== pathFilter) continue;
    const steps = Array.isArray(p.steps) ? p.steps : [];
    const hits = [];
    steps.forEach((step, stepIdx) => {
      const checks = Array.isArray(step?.checks) ? step.checks : [];
      checks.forEach((check, checkIdx) => {
        const flags = analyzeCheck(check);
        for (const f of flags) {
          if (onlyPattern && onlyPattern !== f.pattern) continue;
          hits.push({
            stepIdx,
            checkIdx,
            stepTitle: step?.title || "?",
            q: String(check?.q || "").slice(0, 80),
            options: check.options,
            answer: check.answer,
            wrongHints: check.wrongHints,
            pattern: f.pattern,
            detail: f.detail,
          });
          if (f.pattern === "A") totalA++;
          if (f.pattern === "D") totalD++;
        }
      });
    });
    if (hits.length > 0) perFile.push({ file, pathId: p.id, hits });
  }

  perFile.sort((a, b) => b.hits.length - a.hits.length);

  console.log("=== wrongHints Eliminatie-leak Audit ===\n");
  console.log(`Geanalyseerd: ${files.length} pad-files`);
  console.log(`Pattern A (identieke hints): ${totalA}`);
  console.log(`Pattern D (correct in hint):  ${totalD}`);
  console.log(`Files met hits: ${perFile.length}\n`);

  const limit = isFinite(topN) ? Math.min(topN, perFile.length) : perFile.length;
  for (let i = 0; i < limit; i++) {
    const r = perFile[i];
    console.log(`\n--- ${r.file} (id: ${r.pathId}) — ${r.hits.length} hit${r.hits.length === 1 ? "" : "s"} ---`);
    for (const h of r.hits.slice(0, 6)) {
      console.log(`  step ${h.stepIdx} · check ${h.checkIdx} (${h.stepTitle})`);
      console.log(`    Q: ${h.q}`);
      console.log(`    options: ${JSON.stringify(h.options)}`);
      console.log(`    answer:  ${h.answer} → "${h.options[h.answer]}"`);
      console.log(`    hints:   ${JSON.stringify(h.wrongHints)}`);
      console.log(`    [pattern ${h.pattern}] ${h.detail}`);
    }
    if (r.hits.length > 6) console.log(`    ... ${r.hits.length - 6} meer.`);
  }
  if (perFile.length > limit) {
    console.log(`\n... ${perFile.length - limit} extra files niet getoond. Run met --top ${perFile.length} voor alles.`);
  }

  process.exit(totalA + totalD > 0 ? 1 : 0);
}

main();

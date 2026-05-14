#!/usr/bin/env node
// lint-wronghints-klopt.mjs — Sprint-0 audit-fix (Mark 2026-05-14).
//
// Probleem: sommige `wrongHints[i]` beginnen met "Klopt" terwijl
// `i !== answer`. Dat is misleidend — de leerling klikt op een FOUTE
// optie en krijgt feedback die suggereert dat het GOED is.
//
// Voorbeeld foutpatroon (kort-format wrongHints):
//   options: ["A", "B", "C", "D"], answer: 0,
//   wrongHints: [null, "Klopt — A is wel goed maar...", ...]
//                       ^^^ FOUT — i=1 is niet het juiste antwoord
//
// Reden dat dit gebeurt: in compact-format wordt de wrongHints-array
// soms verschoven na een refactor, of de auteur kopieert "Klopt" als
// generieke hint zonder te denken.
//
// Modi:
//   node scripts/lint-wronghints-klopt.mjs           → alle problemen
//   node scripts/lint-wronghints-klopt.mjs --top 20  → top 20

import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const args = process.argv.slice(2);
const topN = args.includes("--top") ? Number(args[args.indexOf("--top") + 1]) || 50 : Infinity;

const SKIP = new Set([
  "index.js", "index.test.js", "examenLookup.js", "pathLoaders.js",
  "subjectMapping.js", "subjectMapping.test.js", "questionPathMap.generated.js",
]);

async function main() {
  const files = fs.readdirSync(ROOT).filter(
    (f) => f.endsWith(".js") && !SKIP.has(f) && !f.includes(".test.")
  );

  const findings = [];
  for (const file of files) {
    const full = path.join(ROOT, file);
    try {
      const mod = await import(pathToFileURL(full).href);
      const p = mod.default;
      if (!p || !p.id) continue;
      const steps = Array.isArray(p.steps) ? p.steps : [];
      steps.forEach((step, stepIdx) => {
        const checks = Array.isArray(step?.checks) ? step.checks : [];
        checks.forEach((check, checkIdx) => {
          if (!Array.isArray(check?.wrongHints)) return;
          const answer = check.answer;
          check.wrongHints.forEach((hint, i) => {
            if (i === answer) return; // skip antwoord-positie (mag wel "Klopt")
            if (!hint || typeof hint !== "string") return;
            // Detecteer "Klopt" aan begin (case-insensitive, met optionele leestekens)
            if (/^\s*klopt\b/i.test(hint)) {
              findings.push({
                pathId: p.id,
                file,
                stepIdx: stepIdx + 1,
                checkIdx: checkIdx + 1,
                question: (check.q || "").slice(0, 70),
                wrongIdx: i,
                wrongOption: check.options?.[i] || "?",
                hint: hint.slice(0, 80),
              });
            }
          });
        });
      });
    } catch (e) {
      console.warn(`[lint-wronghints-klopt] skip ${file}: ${e.message}`);
    }
  }

  console.log(`Gevonden: ${findings.length} foute "Klopt"-wrongHints`);
  console.log("");
  findings.slice(0, topN).forEach((f, i) => {
    console.log(`${(i + 1).toString().padStart(3)}. ${f.pathId} · stap ${f.stepIdx} · check ${f.checkIdx} · optie ${f.wrongIdx}`);
    console.log(`     Q: ${f.question}${f.question.length === 70 ? "…" : ""}`);
    console.log(`     Foute optie ${f.wrongIdx}: "${f.wrongOption}"`);
    console.log(`     wrongHints[${f.wrongIdx}]: "${f.hint}"`);
    console.log("");
  });

  // Per pad
  const perPath = {};
  findings.forEach((f) => { perPath[f.pathId] = (perPath[f.pathId] || 0) + 1; });
  const sorted = Object.entries(perPath).sort((a, b) => b[1] - a[1]);
  console.log("\n=== Paden met meeste 'Klopt'-foutjes ===");
  sorted.slice(0, 20).forEach(([pathId, count]) => {
    console.log(`  ${count.toString().padStart(3)} × ${pathId}`);
  });
}

main().catch((e) => {
  console.error("FATAL:", e);
  process.exit(1);
});

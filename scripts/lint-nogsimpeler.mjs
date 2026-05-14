#!/usr/bin/env node
// lint-nogsimpeler.mjs — Sprint-0 audit-fix (Mark 2026-05-14).
//
// Probleem: veel uitlegPad.niveaus.nogSimpeler-strings zijn slechts het
// antwoord herhaald ("7.", "Plus.", "Zeven."). Doel van nogSimpeler is
// een laatste-niveau-uitleg die werkt voor de leerling die NOG STEEDS
// niet snapt na 'simpeler'. Te kort = nutteloos.
//
// Eis: minimaal 20 chars + bevat een concreet voorbeeld of formule (=
// of × of cijfer-rij of woord ≥6 letters).
//
// Modi:
//   node scripts/lint-nogsimpeler.mjs              → report alle slechte
//   node scripts/lint-nogsimpeler.mjs --top 20     → toon top 20 slechtste
//   node scripts/lint-nogsimpeler.mjs --path <id>  → alleen voor pad

import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const args = process.argv.slice(2);
const topN = args.includes("--top") ? Number(args[args.indexOf("--top") + 1]) || 50 : Infinity;
const pathFilter = args.includes("--path") ? args[args.indexOf("--path") + 1] : null;

const SKIP = new Set([
  "index.js", "index.test.js", "examenLookup.js", "pathLoaders.js",
  "subjectMapping.js", "subjectMapping.test.js", "questionPathMap.generated.js",
]);

function isPoor(text) {
  if (!text) return { bad: true, reason: "leeg" };
  const t = String(text).trim();
  if (t.length < 20) return { bad: true, reason: `te kort (${t.length} chars)` };
  // Geen voorbeeld + geen formule + geen lang woord?
  const hasFormule = /[=×*÷+\-]/.test(t);
  const hasCijfers = /\d/.test(t);
  const hasLangWoord = /\b\w{6,}\b/.test(t);
  if (!hasFormule && !hasCijfers && !hasLangWoord) {
    return { bad: true, reason: "geen formule/cijfer/concreet woord" };
  }
  return { bad: false };
}

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
      if (pathFilter && p.id !== pathFilter) continue;
      const steps = Array.isArray(p.steps) ? p.steps : [];
      steps.forEach((step, stepIdx) => {
        const checks = Array.isArray(step?.checks) ? step.checks : [];
        checks.forEach((check, checkIdx) => {
          const ns = check?.uitlegPad?.niveaus?.nogSimpeler;
          if (!ns) return;
          const verdict = isPoor(ns);
          if (verdict.bad) {
            findings.push({
              pathId: p.id,
              file,
              stepIdx: stepIdx + 1,
              stepTitle: step.title,
              checkIdx: checkIdx + 1,
              question: (check.q || "").slice(0, 60),
              nogSimpeler: ns,
              reason: verdict.reason,
            });
          }
        });
      });
    } catch (e) {
      console.warn(`[lint-nogsimpeler] skip ${file}: ${e.message}`);
    }
  }

  // Sorteer slechtste eerst (korter = slechter)
  findings.sort((a, b) => (a.nogSimpeler?.length || 0) - (b.nogSimpeler?.length || 0));

  console.log(`Gevonden: ${findings.length} slechte nogSimpeler-velden`);
  console.log("");
  findings.slice(0, topN).forEach((f, i) => {
    console.log(`${(i + 1).toString().padStart(3)}. ${f.pathId} · stap ${f.stepIdx} · check ${f.checkIdx}`);
    console.log(`     Q: ${f.question}${f.question.length === 60 ? "…" : ""}`);
    console.log(`     nogSimpeler (${f.reason}): "${f.nogSimpeler}"`);
    console.log("");
  });

  // Tellen per pad
  if (topN === Infinity || topN >= 100) {
    const perPath = {};
    findings.forEach((f) => { perPath[f.pathId] = (perPath[f.pathId] || 0) + 1; });
    const sorted = Object.entries(perPath).sort((a, b) => b[1] - a[1]);
    console.log("\n=== Paden met meeste slechte nogSimpeler ===");
    sorted.slice(0, 20).forEach(([pathId, count]) => {
      console.log(`  ${count.toString().padStart(3)} × ${pathId}`);
    });
  }
}

main().catch((e) => {
  console.error("[lint-nogsimpeler] FATAL:", e);
  process.exit(1);
});

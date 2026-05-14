#!/usr/bin/env node
// buildExamenLookup.mjs — pre-build script dat examenLookup.generated.json
// produceert uit alle examen-paden (src/learnPaths/examen*.js).
//
// Mark 2026-05-14 (QW7 lazy-load STAP 2 deel 3): vóór deze stap importeerde
// examenLookup.js top-level ALL_LEARN_PATHS waardoor de hele 5,8 MB bundle
// werd binnengetrokken zodra een consumer (LearnPath.jsx, ExamensPage.jsx)
// `getExamRefsForPath()` aanriep. Nu staat de lookup als JSON in de bundle
// — ~30 kB, alleen examen-references.

import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const ROOT = path.resolve(process.cwd(), "src/learnPaths");
const OUT_FILE = path.join(ROOT, "examenLookup.generated.json");

function extractVraagNr(bronStr) {
  if (!bronStr) return null;
  const m = String(bronStr).match(/vraag\s*(\d+)/i);
  return m ? Number(m[1]) : null;
}

async function main() {
  const files = fs.readdirSync(ROOT).filter(
    (f) => f.startsWith("examen") && f.endsWith(".js")
      && !f.startsWith("examenLookup")
  );

  const map = {};
  let totalRefs = 0;
  for (const file of files) {
    const full = path.join(ROOT, file);
    try {
      const mod = await import(pathToFileURL(full).href);
      const p = mod.default;
      if (!p || typeof p !== "object" || !p.id || !p.id.startsWith("examen-")) continue;
      const steps = Array.isArray(p.steps) ? p.steps : [];
      steps.forEach((step, stepIdx) => {
        const checks = Array.isArray(step?.checks) ? step.checks : [];
        for (const check of checks) {
          const target = check?.leerpadLink?.id;
          if (!target) continue;
          if (!map[target]) map[target] = [];
          map[target].push({
            examPathId: p.id,
            examPathTitle: p.title,
            stepIdx,
            vraagNr: extractVraagNr(check.examenBron),
            examenBron: check.examenBron || "",
          });
          totalRefs++;
        }
      });
    } catch (e) {
      console.warn(`[buildExamenLookup] skip ${file}: ${e.message}`);
    }
  }

  // Sorteer targets alfabetisch voor stabiele diffs.
  const sorted = Object.fromEntries(
    Object.keys(map).sort().map((k) => [k, map[k]])
  );
  fs.writeFileSync(OUT_FILE, JSON.stringify(sorted, null, 2) + "\n", "utf8");
  console.log(`✓ ${totalRefs} examen-references → ${Object.keys(sorted).length} unieke target-paden`);
  console.log(`  ${path.relative(process.cwd(), OUT_FILE)} (${(fs.statSync(OUT_FILE).size / 1024).toFixed(1)} kB)`);
}

main().catch((e) => {
  console.error("[buildExamenLookup] FATAL:", e);
  process.exit(1);
});

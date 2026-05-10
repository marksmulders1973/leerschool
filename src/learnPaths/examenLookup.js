// Reverse-lookup: gegeven een Pincode-/leer-pad-id, geef alle examen-vragen
// die naar dat pad linken via `leerpadLink.id`.
// A9 (10-agent circulariteit-review 2026-05-10): sluit de cirkel Pincode→examen.
//
// Resultaat: per leer-pad-id een lijst van { examPathId, examPathTitle, stepIdx,
// vraagNr, examenBron }. UI toont dat als "Oefen N echte examenvragen over X".
//
// Build-time gegenereerd uit ALL_LEARN_PATHS.

import { ALL_LEARN_PATHS } from "./index.js";

let cache = null;

function buildLookup() {
  const map = {};
  for (const p of Object.values(ALL_LEARN_PATHS || {})) {
    if (!p || !(p.id || "").startsWith("examen-")) continue;
    const steps = Array.isArray(p.steps) ? p.steps : [];
    steps.forEach((step, stepIdx) => {
      const checks = Array.isArray(step.checks) ? step.checks : [];
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
      }
    });
  }
  return map;
}

function extractVraagNr(bronStr) {
  if (!bronStr) return null;
  const m = String(bronStr).match(/vraag\s*(\d+)/i);
  return m ? Number(m[1]) : null;
}

export function getExamRefsForPath(pathId) {
  if (!cache) cache = buildLookup();
  return cache[pathId] || [];
}

export function countExamRefs(pathId) {
  return getExamRefsForPath(pathId).length;
}

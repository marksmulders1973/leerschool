// Reverse-lookup: gegeven een Pincode-/leer-pad-id, geef alle examen-vragen
// die naar dat pad linken via `leerpadLink.id`.
// A9 (10-agent circulariteit-review 2026-05-10): sluit de cirkel Pincode→examen.
//
// Mark 2026-05-14 (QW7 lazy-load STAP 2 deel 3): vóór deze refactor importeerde
// dit bestand top-level ALL_LEARN_PATHS waardoor de hele 5,8 MB pad-bundel
// werd binnengetrokken. Nu lezen we examenLookup.generated.json (~16 kB) die
// vóór elke vite build wordt regenereerd door scripts/buildExamenLookup.mjs.

import lookup from "./examenLookup.generated.json";

export function getExamRefsForPath(pathId) {
  if (!pathId) return [];
  return lookup[pathId] || [];
}

export function countExamRefs(pathId) {
  return getExamRefsForPath(pathId).length;
}

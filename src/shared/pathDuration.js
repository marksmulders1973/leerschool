// Automatische tijdschatting per leerpad — gebaseerd op explanation-lengte
// + aantal checks. Vervangt handmatige "~15 min"-tekst in elk pad-intro
// (die met de inflatie naar 40 checks niet meer klopt).
//
// Formule: leestijd explanation (~1500 chars/min) + ~24 sec per check.
// Resultaat wordt afgerond naar handige stappen (5, 10, 15, 20, 25, 30, 45, 60).

import { VRAGEN_PER_BEZOEK } from "./geziendeVragen.js";

function rawMinutes(path) {
  if (!path || !Array.isArray(path.steps)) return 15;
  const steps = path.steps;
  const explChars = steps.reduce((sum, s) => sum + ((s?.explanation || "").length), 0);
  // 👀 Per stapbezoek hoogstens VRAGEN_PER_BEZOEK vragen (geziendeVragen.js); examens: alle.
  const examen = String(path.id || "").startsWith("examen-");
  const checks = steps.reduce((sum, s) => {
    const n = Array.isArray(s?.checks) ? s.checks.length : 0;
    return sum + (examen ? n : Math.min(n, VRAGEN_PER_BEZOEK));
  }, 0);
  return explChars / 1500 + checks * 0.4;
}

const BUCKETS = [5, 10, 15, 20, 25, 30, 45, 60, 90];

export function estimatePathMinutes(path) {
  const raw = rawMinutes(path);
  // Snap naar dichtstbijzijnde bucket (afronden naar boven).
  for (const b of BUCKETS) {
    if (raw <= b) return b;
  }
  return Math.ceil(raw / 15) * 15;
}

export function formatPathDuration(path) {
  const m = estimatePathMinutes(path);
  if (m <= 15) return `~${m} min`;
  if (m <= 30) return `~${m} min`;
  // 45+ min = bundel-pad — toon als 'bundel' boodschap
  return `${m} min bundel`;
}

// Voor pad-stap-niveau (toon 'stap 2/8 — ~3 min').
export function estimateStepMinutes(step) {
  if (!step) return 2;
  const explChars = (step.explanation || "").length;
  const checks = Math.min(Array.isArray(step.checks) ? step.checks.length : 0, VRAGEN_PER_BEZOEK);
  const raw = explChars / 1500 + checks * 0.4;
  return Math.max(1, Math.round(raw));
}

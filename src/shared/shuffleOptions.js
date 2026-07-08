// Option-shuffler voor meerkeuze-vragen. Audit-2 v2 (2026-05-08)
// code-quality-agent identificeerde 3× duplicate Fisher-Yates +
// indexOf-mapping in App.jsx:558, LearnPath.jsx:254, CitoLeerpadToets.jsx:65.
//
// Sinds 2026-07-08 een dunne wrapper om shuffleOpties — er bestonden twee
// implementaties naast elkaar en alleen shuffleOpties had de veiligheden
// (positie-vaste opties zoals "geen van beide" niet schudden, authentieke
// examenvragen in officiële volgorde laten, letter-shorthand "… A." uit
// uitlegPad-niveaus strippen). LearnPath/MiniQuiz misten die guards.
//
// Gebruik:
//   const shuffled = shuffleOptions(check);
//
// Input  : { options, answer (index), wrongHints?, ... }
// Output : { ...orig, options, answer (nieuwe index), wrongHints (geherorderd,
//            altijd null-gevuld tot options-lengte) }

import { shuffleOpties } from "./shuffleOpties.js";

export function shuffleOptions(check, rng = Math.random) {
  if (!check || !Array.isArray(check.options)) return check;
  const out = shuffleOpties(check, rng);
  // Oud contract van deze wrapper: wrongHints altijd een array van
  // options-lengte, gaten gevuld met null (consumers indexeren er blind in).
  const hints = Array.isArray(out.wrongHints) ? out.wrongHints : [];
  return { ...out, wrongHints: out.options.map((_, i) => hints[i] ?? null) };
}

// Centrale index van alle leerpaden.
// Voeg een nieuw onderwerp toe door:
//   1. Een nieuwe file in src/learnPaths/<naam>.js (zelfde structuur als parabolen.js)
//   2. Importeer en registreer hem hieronder

import parabolen from "./parabolen";
import ruimtemeetkunde from "./ruimtemeetkunde";

export const ALL_LEARN_PATHS = {
  parabolen,
  ruimtemeetkunde,
};

export function findLearnPathForQuestion(questionText) {
  if (!questionText) return null;
  const lower = questionText.toLowerCase();
  for (const path of Object.values(ALL_LEARN_PATHS)) {
    if (path.triggerKeywords?.some((kw) => lower.includes(kw.toLowerCase()))) {
      return path.id;
    }
  }
  return null;
}

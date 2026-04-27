// Centrale index van alle leerpaden.
// Voeg een nieuw onderwerp toe door:
//   1. Een nieuwe file in src/learnPaths/<naam>.js (zelfde structuur als parabolen.js)
//   2. Importeer en registreer hem hieronder

import parabolen from "./parabolen";
import ruimtemeetkunde from "./ruimtemeetkunde";
import kwadratenWortels from "./kwadratenWortels";
import pythagoras from "./pythagoras";
import kwadratischeVergelijkingen from "./kwadratischeVergelijkingen";

export const ALL_LEARN_PATHS = {
  parabolen,
  ruimtemeetkunde,
  "kwadraten-wortels": kwadratenWortels,
  pythagoras,
  "kwadratische-vergelijkingen": kwadratischeVergelijkingen,
};

// Vind het meest passende leerpad én de meest passende stap binnen dat pad
// op basis van de tekst van een quiz-vraag.
// Returnt { pathId, stepIdx } of null als er geen match is.
// Backwards-compat: oude callers die alleen pathId verwachten kunnen nog
// `result?.pathId` lezen, of een oude "string"-vorm via een wrapper.
export function findLearnPathForQuestion(questionText) {
  if (!questionText) return null;
  const lower = questionText.toLowerCase();
  // Verzamel "betekenisvolle" woorden uit de vraag (>= 4 chars, geen stopwoorden)
  const stop = new Set(["een", "het", "deze", "die", "voor", "wordt", "wat", "hoe", "welk", "welke", "bij", "naar", "dan", "als", "maar", "ook", "niet", "met", "van", "uit", "tot", "kun", "kan", "krijg", "geef", "zonder", "samen", "telkens", "klopt"]);
  const words = lower
    .split(/[^a-zà-ž0-9²³½]+/i)
    .map((w) => w.trim())
    .filter((w) => w.length >= 4 && !stop.has(w));

  for (const path of Object.values(ALL_LEARN_PATHS)) {
    const padMatcht = path.triggerKeywords?.some((kw) => lower.includes(kw.toLowerCase()));
    if (!padMatcht) continue;

    // Zoek beste stap binnen dit pad
    let bestStepIdx = 0;
    let bestScore = 0;
    path.steps.forEach((step, idx) => {
      const stepText = (step.title + " " + (step.explanation || "")).toLowerCase();
      let score = 0;
      // Kernwoord match — title-match telt extra
      const titleLower = step.title.toLowerCase();
      for (const w of words) {
        if (titleLower.includes(w)) score += 3;
        else if (stepText.includes(w)) score += 1;
      }
      if (score > bestScore) {
        bestScore = score;
        bestStepIdx = idx;
      }
    });

    return { pathId: path.id, stepIdx: bestScore > 0 ? bestStepIdx : 0 };
  }
  return null;
}

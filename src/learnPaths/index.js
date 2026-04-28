// Centrale index van alle leerpaden.
// Voeg een nieuw onderwerp toe door:
//   1. Een nieuwe file in src/learnPaths/<naam>.js (zelfde structuur als parabolen.js)
//   2. Importeer en registreer hem hieronder

import parabolen from "./parabolen";
import ruimtemeetkunde from "./ruimtemeetkunde";
import kwadratenWortels from "./kwadratenWortels";
import pythagoras from "./pythagoras";
import kwadratischeVergelijkingen from "./kwadratischeVergelijkingen";
import lineaireFormules from "./lineaireFormules";
import rekenenMetLetters from "./rekenenMetLetters";
import vlakkeFiguren from "./vlakkeFiguren";
import breuken from "./breuken";
import procenten from "./procenten";
import negatieveGetallen from "./negatieveGetallen";
import verhoudingen from "./verhoudingen";
import statistiek from "./statistiek";
import goniometrie from "./goniometrie";
import coordinatenstelsel from "./coordinatenstelsel";
import vergelijkingenOplossen from "./vergelijkingenOplossen";
import werkwoordsvervoeging from "./werkwoordsvervoeging";
import argumentatieleer from "./argumentatieleer";
import schrijfvaardigheid from "./schrijfvaardigheid";
import tekstanalyse from "./tekstanalyse";
import literatuurgeschiedenis from "./literatuurgeschiedenis";
import spelling from "./spelling";
import zinsontleding from "./zinsontleding";

export const ALL_LEARN_PATHS = {
  // Klas 1 basis (komen het eerst aan bod)
  coordinatenstelsel,
  breuken,
  procenten,
  "negatieve-getallen": negatieveGetallen,
  verhoudingen,
  // Klas 1-2 algebra-basis
  "rekenen-met-letters": rekenenMetLetters,
  "vergelijkingen-oplossen": vergelijkingenOplossen,
  "kwadraten-wortels": kwadratenWortels,
  // Klas 2 functies
  "lineaire-formules": lineaireFormules,
  parabolen,
  "kwadratische-vergelijkingen": kwadratischeVergelijkingen,
  // Klas 2 meetkunde
  "vlakke-figuren": vlakkeFiguren,
  pythagoras,
  goniometrie,
  ruimtemeetkunde,
  // Statistiek
  statistiek,
  // Nederlands
  werkwoordsvervoeging,
  spelling,
  zinsontleding,
  argumentatieleer,
  schrijfvaardigheid,
  tekstanalyse,
  literatuurgeschiedenis,
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

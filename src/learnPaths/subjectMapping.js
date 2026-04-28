// Mapping tussen TEXTBOOK_CATEGORIES_VO/PO ids (zoals gebruikt in TextbookQuiz)
// en de `subject`-keys op leerpaden in src/learnPaths/<naam>.js (`wiskunde`, `taal`).
//
// Wordt gebruikt om bij klikken op 📚 Leren te bepalen of er leerpaden zijn,
// of dat we naar de "Mee bezig"-pagina sturen.

import { ALL_LEARN_PATHS } from "./index.js";

// Categorie-id (TextbookQuiz) → leerpad-subject (zoals in pad-files)
const CATEGORY_TO_LEARN_SUBJECT = {
  wiskunde: "wiskunde",
  "wiskunde-a": "wiskunde",
  "wiskunde-b": "wiskunde",
  nederlands: "taal",
  taal: "taal",
  spelling: "taal",
  "begrijpend-lezen": "taal",
  engels: "engels",
  "engels-po": "engels",
  biologie: "biologie",
  // NaSk = biologie + natuurkunde + scheikunde (mavo/vmbo). Wacht met mapping
  // tot er ook natuurkunde- en scheikunde-paden zijn — anders krijgt een NaSk-
  // leerling alleen biologie te zien zonder dat dat duidelijk is.
};

export function categoryToLearnSubject(categoryId) {
  return CATEGORY_TO_LEARN_SUBJECT[categoryId] || null;
}

export function hasLearnPathsForCategory(categoryId) {
  const subj = categoryToLearnSubject(categoryId);
  if (!subj) return false;
  return Object.values(ALL_LEARN_PATHS).some((p) => p.subject === subj);
}

// Aantal leerpaden voor visuele badge op de tegel ("17 paden")
export function countLearnPathsForCategory(categoryId) {
  const subj = categoryToLearnSubject(categoryId);
  if (!subj) return 0;
  return Object.values(ALL_LEARN_PATHS).filter((p) => p.subject === subj).length;
}

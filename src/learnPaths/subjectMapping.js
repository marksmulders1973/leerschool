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
  geschiedenis: "geschiedenis",
  "geschiedenis-po": "geschiedenis",
  aardrijkskunde: "aardrijkskunde",
  "aardrijkskunde-po": "aardrijkskunde",
  natuurkunde: "natuurkunde",
  scheikunde: "scheikunde",
  economie: "economie",
  beco: "beco",
  duits: "duits",
  frans: "frans",
  maatschappijleer: "maatschappijleer",
  // NaSk (mavo/vmbo) = biologie + natuurkunde + scheikunde gebundeld
  nask: ["biologie", "natuurkunde", "scheikunde"],
  // Wereld & Natuur (PO) = bundel het PO-natuur-pad + biologie + aardrijkskunde
  natuur: ["natuur", "biologie", "aardrijkskunde"],
};

export function categoryToLearnSubject(categoryId) {
  return CATEGORY_TO_LEARN_SUBJECT[categoryId] || null;
}

// Returnt altijd een array van leerpad-subjects (1 of meer). Lege array = geen mapping.
export function categoryToLearnSubjects(categoryId) {
  const v = CATEGORY_TO_LEARN_SUBJECT[categoryId];
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

export function hasLearnPathsForCategory(categoryId) {
  const subjects = categoryToLearnSubjects(categoryId);
  if (subjects.length === 0) return false;
  return Object.values(ALL_LEARN_PATHS).some((p) => subjects.includes(p.subject));
}

// Aantal leerpaden voor visuele badge op de tegel ("17 paden")
export function countLearnPathsForCategory(categoryId) {
  const subjects = categoryToLearnSubjects(categoryId);
  if (subjects.length === 0) return 0;
  return Object.values(ALL_LEARN_PATHS).filter((p) => subjects.includes(p.subject)).length;
}

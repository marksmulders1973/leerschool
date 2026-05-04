// Single source of truth voor leerpad-subjects (de `subject`-key op
// leerpad-bestanden) en hun UI-labels.
//
// Vóór deze file stond `SUBJECT_LABELS` op 3 plekken: LearnPathsHub,
// MyMastery, App.jsx — telkens met kleine verschillen. Dat is een
// klassieke source-of-truth-bug. Hier centraal.
//
// LET OP — twee aparte concepten in deze codebase:
//   1. **Categorie-id** uit TEXTBOOK_CATEGORIES_VO/PO (constants.js):
//      "wiskunde", "wiskunde-a", "nederlands", "engels-po", "nask", ...
//      Wordt gebruikt door TextbookQuiz, Mee bezig, Oefenen-grid.
//   2. **Leerpad-subject-key** (deze file):
//      "wiskunde", "taal", "engels", "biologie", "geschiedenis", ...
//      Wordt gebruikt door leerpaden zelf en de mastery-pipeline.
//
// `subjectMapping.js` koppelt categorie-id ↔ leerpad-subject (kan een
// array zijn voor bundles zoals NaSk of PO Natuur).

// Iconen synchroon met TEXTBOOK_CATEGORIES_VO in constants.js — zo zien
// leerlingen overal hetzelfde icoon voor hetzelfde vak (Oefenen-tab grid +
// Leren-hub vak-grid + ticker + mastery-banner).
export const SUBJECTS = {
  wiskunde: { title: "Wiskunde", emoji: "📐" },
  taal: { title: "Nederlands", emoji: "📖" },
  engels: { title: "Engels", emoji: "📕" },
  biologie: { title: "Biologie", emoji: "🧬" },
  geschiedenis: { title: "Geschiedenis", emoji: "🏛️" },
  aardrijkskunde: { title: "Aardrijkskunde", emoji: "🌍" },
  natuurkunde: { title: "Natuurkunde", emoji: "⚛️" },
  scheikunde: { title: "Scheikunde", emoji: "🧪" },
  economie: { title: "Economie", emoji: "💶" },
  beco: { title: "Bedrijfseconomie", emoji: "📈" },
  duits: { title: "Duits", emoji: "📘" },
  frans: { title: "Frans", emoji: "📗" },
  maatschappijleer: { title: "Maatschappijleer", emoji: "🏛️" },
  natuur: { title: "Natuur (PO)", emoji: "🌿" },
};

/**
 * Leerpad-subject → label-object. Returnt een fallback als de key
 * onbekend is (geen crashes bij oude data).
 */
export function subjectMeta(subjectKey) {
  return SUBJECTS[subjectKey] || { title: subjectKey || "Vak", emoji: "📘" };
}

/**
 * Korte tekst-label voor één of meer subjects (bv. NaSk = bio + nat + sch).
 * Voorbeeld: subjectsLabel(["biologie","natuurkunde"]) → "Biologie + Natuurkunde"
 */
export function subjectsLabel(subjects) {
  if (!subjects) return "";
  const arr = Array.isArray(subjects) ? subjects : [subjects];
  return arr.map((s) => subjectMeta(s).title).join(" + ");
}

export function subjectsEmoji(subjects) {
  const arr = Array.isArray(subjects) ? subjects : [subjects];
  if (arr.length === 1) return subjectMeta(arr[0]).emoji;
  // Bundles → algemene "wetenschap" of "leren" emoji
  return "🔬";
}

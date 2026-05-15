// Pure utility-functies voor leerpaden — GEEN imports van pad-data zodat
// consumers (App.jsx, PlayQuiz.jsx) deze kunnen importeren zonder de hele
// 5,8 MB ALL_LEARN_PATHS-bundle binnen te trekken.
//
// QW7 lazy-load STAP 2 (2026-05-15): geëxtraheerd uit learnPaths/index.js.

import { QUESTION_PATH_MAP } from "./questionPathMap.generated.js";
import pathManifest from "./pathManifest.generated.json";

const PATHS_BY_ID = Object.fromEntries(pathManifest.map((p) => [p.id, p]));

// Bucket-mapping zodat een PO-quiz niet in een VO-pad belandt en omgekeerd.
// Drie buckets: "po" (groep 1-8), "vo-onder" (klas 1-3), "vo-boven" (klas 4-6).
// Onbekende strings → null = niet-filteren.
export function levelToBucket(lvl) {
  if (!lvl) return null;
  const s = String(lvl).toLowerCase();
  if (s === "nvt") return null;
  if (s.startsWith("groep")) return "po";
  if (
    s.includes("havo4") || s.includes("havo5") ||
    s.includes("vwo4") || s.includes("vwo5") || s.includes("vwo6") ||
    s.includes("klas4") || s.includes("klas5") || s.includes("klas6") ||
    s.includes("vmbo-gt-4") || s.includes("vmbo-bb-4") || s.includes("vmbo-kb-4")
  ) return "vo-boven";
  if (s.startsWith("klas") || s.includes("vmbo") || s.includes("havo") || s.includes("vwo") || s.includes("gym")) return "vo-onder";
  return null;
}

export function levelsCompatible(quizLevel, pathLevel) {
  const q = levelToBucket(quizLevel);
  const p = levelToBucket(pathLevel);
  if (!q || !p) return true;
  return q === p;
}

// Returnt { pathId, stepIdx } of null. Manifest-based: precisie van stepIdx
// alleen voor getagde vragen (QUESTION_PATH_MAP). Niet-getagde vragen krijgen
// stepIdx=0 omdat we step-tekst niet in manifest hebben (zou kost ~1MB extra).
export function findLearnPathForQuestion(questionText, allowedSubjects = null, quizLevel = null) {
  if (!questionText) return null;
  const allowedSet = Array.isArray(allowedSubjects) && allowedSubjects.length > 0
    ? new Set(allowedSubjects)
    : null;

  // Stap 1: exact lookup in pre-gegenereerde map
  const exact = QUESTION_PATH_MAP[questionText];
  if (exact) {
    const taggedPath = PATHS_BY_ID[exact.pathId];
    const subjectOk = !allowedSet || (taggedPath && allowedSet.has(taggedPath.subject));
    const levelOk = !quizLevel || !taggedPath || levelsCompatible(quizLevel, taggedPath.level);
    if (subjectOk && levelOk) return exact;
  }

  // Stap 2: keyword-fallback op triggerKeywords (manifest heeft die)
  const lower = questionText.toLowerCase();
  for (const path of pathManifest) {
    if (allowedSet && !allowedSet.has(path.subject)) continue;
    if (quizLevel && !levelsCompatible(quizLevel, path.level)) continue;
    const padMatcht = path.triggerKeywords?.some((kw) => lower.includes(kw.toLowerCase()));
    if (padMatcht) {
      return { pathId: path.id, stepIdx: 0 };
    }
  }
  return null;
}

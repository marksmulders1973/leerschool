// Random echte-examenvragen-picker voor leerkracht-toetsen.
// Filtert pathManifest op examen-paden van (subject, level) en laadt
// random checks via pathLoaders. Examen-paden bestaan momenteel alleen
// voor vmbo-gt-4 (5 vakken: biologie/economie/engels/geschiedenis/maatschappijleer).

import pathManifest from "./pathManifest.generated.json";
import { getLearnPath } from "./pathLoaders.js";

// Teacher-level → examen-pad-level mapping. Examen-paden zijn vmbo-gt-4 (klas 3-4).
const TEACHER_LEVEL_TO_EXAM = {
  klas3: ["vmbo-gt-4"],
  "klas3-mavo": ["vmbo-gt-4"],
  klas5: ["vmbo-gt-4"],
  klas6: ["vmbo-gt-4"],
  klas1: ["vmbo-gt-4"],
  "klas1-mavo": ["vmbo-gt-4"],
};

function getExamPathsFor(subject, level) {
  const examLevels = TEACHER_LEVEL_TO_EXAM[level];
  if (!examLevels) return [];
  return pathManifest.filter(
    (p) =>
      p.id?.startsWith("examen-") &&
      p.subject === subject &&
      examLevels.includes(p.level)
  );
}

export function countExamPathsFor(subject, level) {
  return getExamPathsFor(subject, level).length;
}

export async function getRandomExamQuestions(subject, level, count = 5) {
  const examPaths = getExamPathsFor(subject, level);
  if (examPaths.length === 0) return [];

  const shuffledPaths = [...examPaths].sort(() => Math.random() - 0.5);
  const collected = [];

  for (const p of shuffledPaths) {
    if (collected.length >= count * 4) break;
    const data = await getLearnPath(p.id);
    if (!data?.steps) continue;
    for (const step of data.steps) {
      for (const check of step.checks || []) {
        if (!check.q || !Array.isArray(check.options) || check.options.length < 2) continue;
        if (typeof check.answer !== "number") continue;
        collected.push({
          q: check.q,
          options: [...check.options],
          answer: check.answer,
          explanation: check.explanation || "",
          examenBron: check.examenBron || `🎓 Echt examen ${data.subject || subject}`,
          isExam: true,
        });
      }
    }
  }

  for (let i = collected.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [collected[i], collected[j]] = [collected[j], collected[i]];
  }
  return collected.slice(0, count);
}

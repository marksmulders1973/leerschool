// Registry van speelbare oude examens (geparseerd door scripts/parse_examen.py).
// Per examen: id matcht de id in src/data/examens.js. Wie een nieuwe examen-quiz
// toevoegt: parser draaien -> JSON komt hier -> import + entry hieronder.

import engelsVmboGltl2025T1 from "./engels-vmbo-gltl-2025-tijdvak1.json";

export const EXAMEN_QUIZZES = {
  "engels-vmbo-gltl-2025-tijdvak1": engelsVmboGltl2025T1,
};

export function isExamenSpeelbaar(examenId) {
  return Boolean(EXAMEN_QUIZZES[examenId]);
}

export function getExamenQuiz(examenId) {
  return EXAMEN_QUIZZES[examenId] || null;
}

// Bouw vragen-array klaar voor PlayQuiz: koppel bron-tekst direct in
// elke vraag via 'bronTekst' (alleen als de vraag een tekstNr heeft).
// PlayQuiz toont die als collapsable card boven de vraag.
export function prepareExamenQuestions(examenId) {
  const quiz = getExamenQuiz(examenId);
  if (!quiz) return null;
  return quiz.questions.map((q) => {
    if (q.tekstNr == null) return q;
    const tekst = quiz.teksten?.[q.tekstNr];
    if (!tekst) return q;
    return {
      ...q,
      bronTekst: {
        nr: q.tekstNr,
        titel: tekst.titel,
        body: tekst.body,
      },
    };
  });
}

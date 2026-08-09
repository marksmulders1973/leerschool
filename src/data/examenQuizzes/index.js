// Registry van speelbare oude examens (geparseerd door scripts/parse_examen.py).
// Per examen: key matcht de id in src/data/examens.js. Wie een nieuwe examen-quiz
// toevoegt: parser draaien -> JSON komt hier -> import + entry hieronder.
//
// NIET geregistreerd (2026-06-10) — eerst repareren vóór registratie:
//   - maatschappijkunde-2023-T1 / 2024-T1 / 2024-T2: meeste vragen verwijzen naar
//     bronteksten die de parser niet heeft meegenomen (resp. 14/19, 16/18, 11/15)
//     én het vak staat nog niet in examens.js. Teksten aanvullen vanuit de bijlage-PDF.
//   - nederlands-2024-T1: kapot duplicaat van nederlands-vmbo-gltl-2024-tijdvak1
//     (0 teksten, alle 20 vragen verwijzen ernaar).
//   - nederlands-vmbo-gltl-2025-tijdvak1: 11 van 13 vragen missen hun brontekst.
//   - wiskunde-vmbo-gltl-2025-tijdvak1: 0 vragen (lege parse).

import biologieVmboGltl2023T1 from "./biologie-vmbo-gltl-2023-tijdvak1.json";
import biologieVmboGltl2024T1 from "./biologie-vmbo-gltl-2024-tijdvak1.json";
import biologieVmboGltl2024T2 from "./biologie-vmbo-gltl-2024-tijdvak2.json";
import biologieVmboGltl2025T1 from "./biologie-vmbo-gltl-2025-tijdvak1.json";
import economieVmboGltl2023T1 from "./economie-vmbo-gltl-2023-tijdvak1.json";
import economieVmboGltl2023T2 from "./economie-vmbo-gltl-2023-tijdvak2.json";
import economieVmboGltl2024T1 from "./economie-vmbo-gltl-2024-tijdvak1.json";
import economieVmboGltl2024T2 from "./economie-vmbo-gltl-2024-tijdvak2.json";
import economieVmboGltl2025T1 from "./economie-vmbo-gltl-2025-tijdvak1.json";
import economieVmboGltl2025T2 from "./economie-vmbo-gltl-2025-tijdvak2.json";
import engelsVmboGltl2024T1 from "./engels-vmbo-gltl-2024-tijdvak1.json";
import engelsVmboGltl2025T1 from "./engels-vmbo-gltl-2025-tijdvak1.json";
import geschiedenisVmboGltl2023T1 from "./geschiedenis-vmbo-gltl-2023-tijdvak1.json";
import geschiedenisVmboGltl2024T1 from "./geschiedenis-vmbo-gltl-2024-tijdvak1.json";
import geschiedenisVmboGltl2024T2 from "./geschiedenis-vmbo-gltl-2024-tijdvak2.json";
import geschiedenisVmboGltl2025T1 from "./geschiedenis-vmbo-gltl-2025-tijdvak1.json";
import nederlandsVmboGltl2023T1 from "./nederlands-vmbo-gltl-2023-tijdvak1.json";
import nederlandsVmboGltl2023T2 from "./nederlands-vmbo-gltl-2023-tijdvak2.json";
import nederlandsVmboGltl2024T1 from "./nederlands-vmbo-gltl-2024-tijdvak1.json";
import nederlandsVmboGltl2024T2 from "./nederlands-vmbo-gltl-2024-tijdvak2.json";
import nederlandsVmboGltl2025T2 from "./nederlands-vmbo-gltl-2025-tijdvak2.json";

export const EXAMEN_QUIZZES = {
  "biologie-vmbo-gltl-2023-tijdvak1": biologieVmboGltl2023T1,
  "biologie-vmbo-gltl-2024-tijdvak1": biologieVmboGltl2024T1,
  "biologie-vmbo-gltl-2024-tijdvak2": biologieVmboGltl2024T2,
  "biologie-vmbo-gltl-2025-tijdvak1": biologieVmboGltl2025T1,
  "economie-vmbo-gltl-2023-tijdvak1": economieVmboGltl2023T1,
  "economie-vmbo-gltl-2023-tijdvak2": economieVmboGltl2023T2,
  "economie-vmbo-gltl-2024-tijdvak1": economieVmboGltl2024T1,
  "economie-vmbo-gltl-2024-tijdvak2": economieVmboGltl2024T2,
  "economie-vmbo-gltl-2025-tijdvak1": economieVmboGltl2025T1,
  "economie-vmbo-gltl-2025-tijdvak2": economieVmboGltl2025T2,
  "engels-vmbo-gltl-2024-tijdvak1": engelsVmboGltl2024T1,
  "engels-vmbo-gltl-2025-tijdvak1": engelsVmboGltl2025T1,
  "geschiedenis-vmbo-gltl-2023-tijdvak1": geschiedenisVmboGltl2023T1,
  "geschiedenis-vmbo-gltl-2024-tijdvak1": geschiedenisVmboGltl2024T1,
  "geschiedenis-vmbo-gltl-2024-tijdvak2": geschiedenisVmboGltl2024T2,
  "geschiedenis-vmbo-gltl-2025-tijdvak1": geschiedenisVmboGltl2025T1,
  "nederlands-vmbo-gltl-2023-tijdvak1": nederlandsVmboGltl2023T1,
  "nederlands-vmbo-gltl-2023-tijdvak2": nederlandsVmboGltl2023T2,
  "nederlands-vmbo-gltl-2024-tijdvak1": nederlandsVmboGltl2024T1,
  "nederlands-vmbo-gltl-2024-tijdvak2": nederlandsVmboGltl2024T2,
  "nederlands-vmbo-gltl-2025-tijdvak2": nederlandsVmboGltl2025T2,
};

export function isExamenSpeelbaar(examenId) {
  return Boolean(EXAMEN_QUIZZES[examenId]);
}

export function getExamenQuiz(examenId) {
  return EXAMEN_QUIZZES[examenId] || null;
}

// Vragen die naar beeldmateriaal verwijzen ("In de afbeelding zie je…") zijn
// zonder die afbeelding niet te beantwoorden — wij nemen de examen-afbeeldingen
// niet over (rechten + PDF-extractie). Mark-melding 9 aug 2026: biologie-2025-T1
// vraag 1 toonde "kijk naar de afbeelding" zonder afbeelding. 29 zulke vragen
// over alle examens; elk examen houdt er genoeg over.
const BEELD_REF = /afbeelding|figuur|diagram|op de foto|tekening|grafiek|kaartje|spotprent|\bprent\b|cartoon/i;

// Bouw vragen-array klaar voor PlayQuiz: koppel bron-tekst direct in
// elke vraag via 'bronTekst' (alleen als de vraag een tekstNr heeft).
// PlayQuiz toont die als collapsable card boven de vraag.
// Vragen waarvan de brontekst ontbreekt in de JSON worden overgeslagen —
// zonder leestekst is zo'n vraag niet eerlijk te beantwoorden.
export function prepareExamenQuestions(examenId) {
  const quiz = getExamenQuiz(examenId);
  if (!quiz) return null;
  return quiz.questions
    .filter((q) => q.tekstNr == null || quiz.teksten?.[q.tekstNr])
    .filter((q) => !BEELD_REF.test(q.q || ""))
    .map((q) => {
      if (q.tekstNr == null) return q;
      const tekst = quiz.teksten[q.tekstNr];
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

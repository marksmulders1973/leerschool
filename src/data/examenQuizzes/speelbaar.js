// Lichtgewicht lijst van speelbare examen-ids — GEEN JSON-imports hier.
// ExamensPage gebruikt dit om de "oefen interactief"-knop te tonen zonder
// alle examen-JSONs (±600 KB) in de pagina-chunk te trekken; de echte data
// laadt App.jsx lazy via ./index.js.
// HOUD IN SYNC met de keys van EXAMEN_QUIZZES in ./index.js.

export const SPEELBARE_EXAMENS = [
  "biologie-vmbo-gltl-2023-tijdvak1",
  "biologie-vmbo-gltl-2024-tijdvak1",
  "biologie-vmbo-gltl-2024-tijdvak2",
  "biologie-vmbo-gltl-2025-tijdvak1",
  "economie-vmbo-gltl-2023-tijdvak1",
  "economie-vmbo-gltl-2023-tijdvak2",
  "economie-vmbo-gltl-2024-tijdvak1",
  "economie-vmbo-gltl-2024-tijdvak2",
  "economie-vmbo-gltl-2025-tijdvak1",
  "economie-vmbo-gltl-2025-tijdvak2",
  "engels-vmbo-gltl-2024-tijdvak1",
  "engels-vmbo-gltl-2025-tijdvak1",
  "geschiedenis-vmbo-gltl-2023-tijdvak1",
  "geschiedenis-vmbo-gltl-2024-tijdvak1",
  "geschiedenis-vmbo-gltl-2024-tijdvak2",
  "geschiedenis-vmbo-gltl-2025-tijdvak1",
  "nederlands-vmbo-gltl-2023-tijdvak1",
  "nederlands-vmbo-gltl-2023-tijdvak2",
  "nederlands-vmbo-gltl-2024-tijdvak1",
  "nederlands-vmbo-gltl-2024-tijdvak2",
  "nederlands-vmbo-gltl-2025-tijdvak2",
];

export function isExamenSpeelbaar(examenId) {
  return SPEELBARE_EXAMENS.includes(examenId);
}

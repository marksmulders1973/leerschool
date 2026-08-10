// E5 (10 aug 2026): genereert src/data/examenQuizzes/speelbaarTelling.js —
// het aantal ÉCHT speelbare vragen per examen, met exact dezelfde filter-
// logica als prepareExamenQuestions in index.js (tekstNr-check + BEELD_REF +
// beeldOntbreekt-vlag). ExamensPage toont dit op de "▶ Speel in app"-knop
// zonder de examen-JSONs (±600 KB) in de pagina-chunk te trekken.
// Draait in de prebuild → kan nooit uit sync lopen met de data.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DIR = join(ROOT, "src", "data", "examenQuizzes");

// HOUD IN SYNC met BEELD_REF in src/data/examenQuizzes/index.js.
const BEELD_REF = /afbeelding|figuur|diagram|op de foto|tekening|grafiek|kaartje|spotprent|\bprent\b|cartoon|\btabel\b/i;

const telling = {};
for (const f of readdirSync(DIR).filter((n) => n.endsWith(".json")).sort()) {
  const quiz = JSON.parse(readFileSync(join(DIR, f), "utf8"));
  const vragen = (quiz.questions || [])
    .filter((q) => q.tekstNr == null || quiz.teksten?.[q.tekstNr])
    .filter((q) => q.svg || !BEELD_REF.test(q.q || ""))
    .filter((q) => !q.beeldOntbreekt);
  telling[quiz.id || f.replace(/\.json$/, "")] = vragen.length;
}

const uit = `// GEGENEREERD door scripts/buildExamenTelling.mjs — niet met de hand wijzigen.
// Aantal speelbare vragen per examen (zelfde filter als prepareExamenQuestions).
export const EXAMEN_VRAGEN_TELLING = ${JSON.stringify(telling, null, 2)};
`;
writeFileSync(join(DIR, "speelbaarTelling.js"), uit);
console.log(`[buildExamenTelling] ${Object.keys(telling).length} examens geteld →`, Object.entries(telling).map(([k, v]) => `${k.replace("-vmbo-gltl-", " ")}: ${v}`).join(" · "));

// Examen-mix builder per vak (Mark wens 2026-05-18).
//
// Neemt een subject ("biologie", "economie", "engels", "geschiedenis",
// "maatschappijkunde") en bouwt een random reeks van ALLE examen-vragen
// over alle jaren/tijdvakken samen. Geeft ~40-50 vragen achter elkaar
// in examen-modus (geen hints, geen uitlegPad-trigger, geen timer).
//
// Pattern volgt `buildProefToets` voor de Doorstroomtoets-G8-pool — zelfde
// gameState-shape, hergebruikt PlayQuiz examen-modus-rendering.

import { getLearnPath } from "../../learnPaths/pathLoaders.js";
import pathManifest from "../../learnPaths/pathManifest.generated.json";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const VAK_LABELS = {
  biologie: "Biologie",
  economie: "Economie",
  engels: "Engels",
  geschiedenis: "Geschiedenis",
  maatschappijkunde: "Maatschappijkunde",
};

/** Tel hoeveel mix-vragen er voor een vak beschikbaar zijn — zonder de
 *  pad-data daadwerkelijk te laden. Gebruikt `checkCount` uit pathManifest
 *  zodat de ExamensPage de teller kan tonen zonder ~8 lazy-imports. */
export function countExamenMixVragen(subject) {
  const prefix = `examen-${subject}-`;
  return pathManifest
    .filter((p) => p.id && p.id.startsWith(prefix))
    .reduce((sum, p) => sum + (p.checkCount || 0), 0);
}

/** Bouw de mix-quiz voor een vak. `aantal=null` betekent: alle vragen. */
export async function buildExamenMix({ subject, aantal = null }) {
  const prefix = `examen-${subject}-`;
  const padInfos = pathManifest.filter((p) => p.id && p.id.startsWith(prefix));
  if (padInfos.length === 0) {
    throw new Error(`buildExamenMix: geen examen-paden gevonden voor '${subject}'`);
  }
  // Laad alle vak-paden parallel — async lazy-imports schalen prima voor
  // 4-8 chunks (~700 kB totaal per vak in examens-chunk).
  const paden = await Promise.all(padInfos.map((p) => getLearnPath(p.id)));
  const alleChecks = [];
  for (let i = 0; i < paden.length; i++) {
    const pad = paden[i];
    if (!pad) continue;
    for (const step of (pad.steps || [])) {
      for (const check of (step.checks || [])) {
        if (Array.isArray(check.options) && check.options.length >= 2 && typeof check.answer === "number") {
          alleChecks.push(check);
        }
      }
    }
  }
  if (alleChecks.length === 0) {
    throw new Error(`buildExamenMix: geen geldige vragen in examen-paden van '${subject}'`);
  }
  const selectie = shuffle(alleChecks);
  const finalSelectie = aantal != null ? selectie.slice(0, Math.min(aantal, selectie.length)) : selectie;
  // Strip uitlegPad: in examen-modus toont PlayQuiz geen "ik snap het
  // niet"-flow. examenBron blijft staan zodat per-vraag de bron-info
  // (jaar+tijdvak+vraag-nr) zichtbaar is via de examenBron-pill.
  const questions = finalSelectie.map((c) => {
    const { uitlegPad: _u, ...rest } = c;
    return rest;
  });
  const label = VAK_LABELS[subject] || subject;
  const quiz = {
    id: `examen-mix-${subject}`,
    subject,
    level: "vmbo-gt",
    title: `${label} — alle examens door elkaar`,
    timePerQuestion: 0,
    examenMixSource: subject,
    examenMixTotaal: alleChecks.length,
  };
  return { quiz, questions };
}

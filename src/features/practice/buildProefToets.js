// Proef-toets builder voor Doorstroomtoets G8 (taal/rekenen/studievaardigheden).
//
// Pakt een leerpad-id (bv "doorstroomtoets-taal-g8"), vlakt alle checks samen
// uit de stappen, shuffelt en neemt N (default 30) random checks.
// Retourneert een quiz + questions-paar dat in gameState past — zelfde shape
// als startQuiz/startExamenQuiz in App.jsx.
//
// Mode is "examen" — PlayQuiz verbergt dan hints/YouTube/uitlegPad-trigger.

import { getLearnPath } from "../../learnPaths/pathLoaders.js";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const TITLES = {
  "doorstroomtoets-taal-g8": "Proef-toets — Taal (groep 8)",
  "doorstroomtoets-rekenen-g8": "Proef-toets — Rekenen (groep 8)",
  "doorstroomtoets-studievaardigheden-g8": "Proef-toets — Studievaardigheden (groep 8)",
};

const SUBJECTS = {
  "doorstroomtoets-taal-g8": "taal",
  "doorstroomtoets-rekenen-g8": "rekenen",
  "doorstroomtoets-studievaardigheden-g8": "studievaardigheden",
};

export async function buildProefToets({ leerpadId, aantal = 30 }) {
  const pad = await getLearnPath(leerpadId);
  if (!pad) {
    throw new Error(`buildProefToets: leerpad '${leerpadId}' niet gevonden`);
  }
  // Mark infra-fix 2026-05-18: neem step.svg mee per check zodat grafiek-/
  // tabel-vragen renderable blijven in proef-toets-modus. PlayQuiz toont
  // question.svg automatisch. Skip checks met `disabled: true`.
  const alleChecks = (pad.steps || []).flatMap((s) =>
    (s.checks || []).map((c) => ({ ...c, svg: c.svg || s.svg || null }))
  );
  const valide = alleChecks.filter(
    (c) => !c.disabled && Array.isArray(c.options) && c.options.length >= 2 && typeof c.answer === "number"
  );
  if (valide.length === 0) {
    throw new Error(`buildProefToets: geen geldige vragen in '${leerpadId}'`);
  }
  const selectie = shuffle(valide).slice(0, Math.min(aantal, valide.length));
  // Strip uitlegPad zodat PlayQuiz geen "ik snap het niet"-flow toont in examen-modus
  const questions = selectie.map((c) => {
    const { uitlegPad: _u, ...rest } = c;
    return rest;
  });
  const quiz = {
    id: `proeftoets-${leerpadId}`,
    subject: SUBJECTS[leerpadId] || "doorstroomtoets",
    level: "groep8",
    title: TITLES[leerpadId] || `Proef-toets — ${pad.title}`,
    timePerQuestion: 0, // examen-modus = geen per-vraag-timer
    proefToetsSource: leerpadId,
    proefToetsTotaal: valide.length,
  };
  return { quiz, questions };
}

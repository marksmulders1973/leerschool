// Topic-quiz builder (Mark wens 2026-05-18).
//
// Pakt één leerpad-id en bouwt een oefen-quiz uit alle checks in dat pad.
// Anders dan buildProefToets:
// - behoud uitlegPad (oefen-modus is didactisch, niet examen)
// - mode = "self" (standaard quiz met hints + uitlegPad-trigger bij fout)
// - geen shuffle-limiet — alle vragen mee
//
// Pattern volgt buildProefToets, hergebruikt PlayQuiz rendering.

import { getLearnPath } from "../../learnPaths/pathLoaders.js";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function buildTopicQuiz({ pathId, aantal = null, shuffleQuestions = true }) {
  const pad = await getLearnPath(pathId);
  if (!pad) {
    throw new Error(`buildTopicQuiz: leerpad '${pathId}' niet gevonden`);
  }
  // Neem step.svg mee per check (zelfde infra-fix als sample-flows 2026-05-18).
  const alleChecks = (pad.steps || []).flatMap((s) =>
    (s.checks || []).map((c) => ({ ...c, svg: c.svg || s.svg || null }))
  );
  const valide = alleChecks.filter(
    (c) => !c.disabled
      && Array.isArray(c.options)
      && c.options.length >= 2
      && typeof c.answer === "number"
  );
  if (valide.length === 0) {
    throw new Error(`buildTopicQuiz: geen geldige vragen in '${pathId}'`);
  }
  const ordered = shuffleQuestions ? shuffle(valide) : valide;
  const selectie = aantal != null ? ordered.slice(0, Math.min(aantal, ordered.length)) : ordered;
  // Behoud uitlegPad (oefen-modus is didactisch — geen strip).
  const questions = selectie.map((c) => ({ ...c }));
  const quiz = {
    id: `topic-${pathId}`,
    subject: pad.subject || "topic",
    level: pad.level || null,
    title: pad.title || `Onderwerp ${pathId}`,
    topicPathId: pathId,
    timePerQuestion: 0, // oefen-modus = geen timer-druk
    questionCount: questions.length,
  };
  return { quiz, questions };
}

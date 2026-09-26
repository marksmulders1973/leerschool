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
import { shuffleOpties } from "../../shared/shuffleOpties.js";

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// `alleenEersteStappen` (26 sep 2026, start-kwartier): kies alleen uit de eerste N stappen van
// het pad — daar staan de makkelijkste vragen. Zo is vraag 1 van een nieuwe leerling een opwarmer.
// `stapIndexen` (26 sep 2026, klassikaal-setje "gevoelens"): alleen deze stappen (0-based).
// `stapPlaatje` (26 sep 2026): "altijd" (standaard) hangt het plaatje van de stap aan elke vraag;
// "bij-verwijzing" alleen als de vraag er zelf naar verwijst (tabel, kaart, grafiek …). Kliktocht 26 sep:
// in het start-kwartier stond bij "Wat is de stam van werken?" de vervoegingstabel van lopen, en bij
// "Werk jij hard?" een tabel met "jij → werkt" die juist naar het foute antwoord wees. En op het digibord
// viel het hele taalsetje van groep 6-7 weg, omdat elke vraag een (stap)plaatje had.
const VERWIJST_NAAR_PLAATJE = /tabel|kaart|grafiek|plaatje|tekening|figuur|afbeelding|hieronder|hierboven|diagram|klok|getallenlijn|schema|staaf|cirkel/i;
const STAP_MET_TEKST = /(op basis van (de|het) (tekst|verhaal)|lees (eerst |nog eens |nogmaals )?(de|het) (tekst|verhaal)|beantwoord de \d+ vragen)/i;

export async function buildTopicQuiz({ pathId, aantal = null, shuffleQuestions = true, alleenEersteStappen = null, stapIndexen = null, stapPlaatje = "altijd" }) {
  const pad = await getLearnPath(pathId);
  if (!pad) {
    throw new Error(`buildTopicQuiz: leerpad '${pathId}' niet gevonden`);
  }
  // Neem step.svg mee per check (zelfde infra-fix als sample-flows 2026-05-18).
  const alle = pad.steps || [];
  const stappen = stapIndexen ? alle.filter((_, i) => stapIndexen.includes(i)) : alleenEersteStappen ? alle.slice(0, alleenEersteStappen) : alle;
  const alleChecks = stappen.flatMap((s) =>
    (s.checks || []).map((c) => ({ ...c, svg: c.svg || ((stapPlaatje === "altijd" || VERWIJST_NAAR_PLAATJE.test(String(c.q || ""))) ? s.svg : null) || null,
      // Vraag hoort bij een leestekst in de stap-uitleg (kliktest 26 sep 2026: "Wat heb je nodig om de
      // armband te maken?" stond zonder tekst op het digibord). Klassikaal slaat zulke vragen over.
      stapTekst: STAP_MET_TEKST.test(String(s.explanation || "")) || undefined }))
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
  // Opties per vraag schudden: in de pad-data staat het juiste antwoord
  // vrijwel altijd op index 0 — zonder shuffle is "altijd A" bijna 100% goed.
  // shuffleOpties bewaakt examenBron (officiële volgorde) + positie-vaste
  // opties en stript letter-shorthand uit uitlegPad-niveaus (fix 2026-07-08).
  const questions = selectie.map((c) => shuffleOpties({ ...c }));
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

// Curricula — geordende doorloop van leerpaden per vak/klas.
// Een curriculum is geen losse content: het is een SEQUENTIE van bestaande
// leerpaden, in didactisch zinvolle volgorde. Voortgang wordt afgeleid uit
// learn_progress (de bestaande tabel) — geen aparte tabel nodig.
//
// Toevoegen van een curriculum:
//   1. Voeg hier een nieuwe entry in CURRICULA toe.
//   2. Verwijs alleen naar pathId's die in src/learnPaths/index.js bestaan.
//   3. Optioneel: groepeer in "phases" (= leerjaar/blok) voor visuele indeling.

import { ALL_LEARN_PATHS } from "../learnPaths";

export const CURRICULA = {
  "wiskunde-klas1": {
    id: "wiskunde-klas1",
    title: "Wiskunde — Klas 1",
    subject: "wiskunde",
    emoji: "🧮",
    intro:
      "De basis voor alles wat in klas 2 en 3 komt. Werk de onderwerpen in volgorde af, of spring naar wat je nu nodig hebt.",
    phases: [
      {
        title: "Getalbegrip",
        emoji: "🔢",
        pathIds: ["breuken", "procenten", "negatieve-getallen"],
      },
      {
        title: "Verhoudingen & algebra",
        emoji: "🅰️",
        pathIds: ["verhoudingen", "rekenen-met-letters"],
      },
    ],
  },
  "wiskunde-klas2": {
    id: "wiskunde-klas2",
    title: "Wiskunde — Klas 2",
    subject: "wiskunde",
    emoji: "📐",
    intro:
      "Voortbouw op klas 1. Algebra wordt formules, getallen worden grafieken, en meetkunde wordt rekenen.",
    phases: [
      {
        title: "Algebra-bouwstenen",
        emoji: "🧱",
        pathIds: ["kwadraten-wortels", "lineaire-formules"],
      },
      {
        title: "Meetkunde",
        emoji: "📐",
        pathIds: ["vlakke-figuren", "pythagoras", "ruimtemeetkunde"],
      },
      {
        title: "Functies & vergelijkingen",
        emoji: "📈",
        pathIds: ["parabolen", "kwadratische-vergelijkingen"],
      },
    ],
  },
  "wiskunde-klas3": {
    id: "wiskunde-klas3",
    title: "Wiskunde — Klas 3",
    subject: "wiskunde",
    emoji: "📊",
    intro:
      "Statistiek en goniometrie — de twee grote nieuwe bouwstenen van de bovenbouw.",
    phases: [
      {
        title: "Driehoeksmeting",
        emoji: "📐",
        pathIds: ["goniometrie"],
      },
      {
        title: "Data & kans",
        emoji: "📊",
        pathIds: ["statistiek"],
      },
    ],
  },
  "nederlands-onderbouw": {
    id: "nederlands-onderbouw",
    title: "Nederlands — Onderbouw",
    subject: "taal",
    emoji: "📖",
    intro:
      "De fundamenten van Nederlands voor klas 1-2. Begint met spelling en werkwoordsvervoeging — dé basis voor goed schrijven.",
    phases: [
      {
        title: "Spelling van werkwoorden",
        emoji: "📝",
        pathIds: ["werkwoordsvervoeging"],
      },
    ],
  },
  "nederlands-havo4": {
    id: "nederlands-havo4",
    title: "Nederlands — Havo 4",
    subject: "taal",
    emoji: "💬",
    intro:
      "Examenstof havo 4-5: leesvaardigheid (argumentatie + drogredenen) en schrijfvaardigheid (betoog, beschouwing, uiteenzetting). Past bij elke gangbare methode — eigen uitleg en oefenvragen.",
    phases: [
      {
        title: "Argumentatie & leesvaardigheid",
        emoji: "💬",
        pathIds: ["argumentatieleer"],
      },
      {
        title: "Schrijfvaardigheid",
        emoji: "✍️",
        pathIds: ["schrijfvaardigheid"],
      },
    ],
  },
};

// Hulp: alle pathIds in een curriculum (in volgorde, plat).
export function curriculumPathIds(curriculumId) {
  const c = CURRICULA[curriculumId];
  if (!c) return [];
  return c.phases.flatMap((p) => p.pathIds);
}

// Hulp: hoeveel stappen totaal in dit curriculum (alle leerpaden bij elkaar).
export function curriculumTotalSteps(curriculumId) {
  const ids = curriculumPathIds(curriculumId);
  return ids.reduce((sum, pid) => {
    const path = ALL_LEARN_PATHS[pid];
    return sum + (path?.steps.length || 0);
  }, 0);
}

// Hulp: vind het volgende onafgemaakte pad in een curriculum, gegeven een
// progressByPath-map { pathId: Set<stepIdx> }. Returnt { pathId, stepIdx } of null.
export function curriculumNextStep(curriculumId, progressByPath) {
  const ids = curriculumPathIds(curriculumId);
  for (const pid of ids) {
    const path = ALL_LEARN_PATHS[pid];
    if (!path) continue;
    const done = progressByPath?.[pid] || new Set();
    if (done.size < path.steps.length) {
      // Eerste niet-voltooide stap binnen dit pad
      for (let i = 0; i < path.steps.length; i++) {
        if (!done.has(i)) return { pathId: pid, stepIdx: i };
      }
    }
  }
  return null;
}

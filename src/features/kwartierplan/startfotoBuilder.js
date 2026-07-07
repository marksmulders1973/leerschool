// Startfoto-builder — Kwartierplan stap 2 (sessie 1, 2026-07-07).
//
// Bouwt een korte diagnose van 12 vragen: 4 per Doorstroomtoets-pijler
// (taal / rekenen / studievaardigheden), gestratificeerd uit de bestaande
// doorstroomtoets-G8-pools. Zelfde pool-aanpak als buildProefToets, maar
// gegroepeerd per pijler zodat de momentum-berichten kunnen zeggen
// "Taal klaar — nu rekenen!".
//
// Bewust ~5-7 min en géén 15: testen voelt zwaarder dan leren voor een
// 10-jarige (ontwerp-doc Kwartierplan, Mark 2026-05-19).

import { getLearnPath } from "../../learnPaths/pathLoaders.js";
import { shuffleOpties } from "../../shared/shuffleOpties.js";
import pathManifest from "../../learnPaths/pathManifest.generated.json";

export const PIJLERS = [
  { id: "taal", label: "Taal", emoji: "📝", padId: "doorstroomtoets-taal-g8" },
  { id: "rekenen", label: "Rekenen", emoji: "🔢", padId: "doorstroomtoets-rekenen-g8" },
  { id: "studievaardigheden", label: "Studievaardigheden", emoji: "🧭", padId: "doorstroomtoets-studievaardigheden-g8" },
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export async function buildStartfoto({ perPijler = 4 } = {}) {
  const vragen = [];
  for (const pijler of PIJLERS) {
    const pad = await getLearnPath(pijler.padId);
    if (!pad) continue;
    const checks = (pad.steps || []).flatMap((s) =>
      (s.checks || []).map((c) => ({ ...c, svg: c.svg || s.svg || null }))
    );
    const valide = checks.filter(
      (c) => !c.disabled && !c.kind && Array.isArray(c.options) && c.options.length >= 2 && typeof c.answer === "number"
    );
    for (const c of shuffle(valide).slice(0, perPijler)) {
      const { uitlegPad: _u, wrongHints: _w, ...rest } = c;
      vragen.push({ ...shuffleOpties(rest), pijler: pijler.id });
    }
  }
  return vragen; // gegroepeerd: eerst taal, dan rekenen, dan studievaardigheden
}

// Aanbevolen paden op basis van de zwakste pijlers: 3 uit de zwakste, 2 uit
// de op-één-na-zwakste. Runtime-filter op het manifest zodat we nooit naar
// een niet-bestaand pad verwijzen (kern-loop-regel uit CLAUDE.md).
const PIJLER_SUBJECTS = {
  taal: ["taal", "spelling", "begrijpend-lezen"],
  rekenen: ["rekenen"],
  studievaardigheden: ["studievaardigheden"],
};

function padenVoorPijler(pijlerId, n) {
  const subjects = PIJLER_SUBJECTS[pijlerId] || [];
  return pathManifest
    .filter((p) =>
      subjects.includes(p.subject) &&
      /groep.*(6|7|8)/.test(String(p.level || "")) &&
      !String(p.id).startsWith("doorstroomtoets-") // de toets-pools zelf niet adviseren
    )
    .sort((a, b) => (b.checkCount || 0) - (a.checkCount || 0))
    .slice(0, n)
    .map((p) => ({ id: p.id, title: p.title, emoji: p.emoji || "📚", pijler: pijlerId }));
}

export function aanbevolenPaden(perPijlerScores) {
  const volgorde = Object.entries(perPijlerScores)
    .map(([id, s]) => ({ id, pct: s.total ? s.correct / s.total : 0 }))
    .sort((a, b) => a.pct - b.pct);
  const paden = [];
  if (volgorde[0]) paden.push(...padenVoorPijler(volgorde[0].id, 3));
  if (volgorde[1]) paden.push(...padenVoorPijler(volgorde[1].id, 2));
  return paden.slice(0, 5);
}

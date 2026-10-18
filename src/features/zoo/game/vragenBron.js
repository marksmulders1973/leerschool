// 🎮 Vragenbron voor de game-taken (fase 3, 9 sep 2026): de spelleider (bv. de
// leerkracht) kiest het vak en de groep; elke taak haalt dan 3 vragen uit een
// passend leerpad. "Alles op niveau" = dezelfde mix als het start-kwartier.
// Examens (VO): echte VMBO-examenvragen uit de examen-paden.
import manifest from "../../../learnPaths/pathManifest.generated.json";
import { buildTopicQuiz } from "../../practice/buildTopicQuiz.js";
import { bouwStartVragen } from "../../onboarding/startKwartier.js";

export const VAKKEN = [
  { id: "alles", emoji: "🎲", label: "Alles op niveau" },
  { id: "rekenen", emoji: "🔢", label: "Rekenen" },
  { id: "taal", emoji: "✏️", label: "Taal & spelling" },
  { id: "lezen", emoji: "📖", label: "Begrijpend lezen" },
  { id: "wereld", emoji: "🌍", label: "Wereld & natuur" },
  { id: "examens", emoji: "🎓", label: "VMBO-examens" },
];
export const GROEPEN = ["eigen", "4", "5", "6", "7", "8", "vo"];
export const groepLabel = (g) => (g === "eigen" ? "Eigen niveau" : g === "vo" ? "Middelbaar" : `Groep ${g}`);

const SUBJECTS = {
  rekenen: ["rekenen", "cito"],
  taal: ["taal", "spelling"],
  lezen: ["begrijpend-lezen"],
  wereld: ["aardrijkskunde", "geschiedenis", "natuur", "wereldorientatie", "biologie"], // VERKEER_OFFLINE
};
const PADEN = Array.isArray(manifest) ? manifest : manifest.paths || Object.values(manifest);

/** past het niveau-label van een pad bij groep g (4-8)? */
function pastBijGroep(level, g) {
  const l = String(level || "");
  if (l === "po") return true;
  const m = l.match(/^groep(\d)(?:-(\d))?$/);
  if (!m) return false;
  const a = +m[1], b = m[2] ? +m[2] : a;
  return g >= a && g <= b;
}
function isVO(level) { return /^(klas|vmbo|havo|vwo)/.test(String(level || "")); }

export function padenVoor(vak, groep) {
  if (vak === "examens") return PADEN.filter((p) => String(p.id).startsWith("examen-") && (p.checkCount || 0) >= 3);
  const subj = SUBJECTS[vak]; if (!subj) return [];
  return PADEN.filter((p) => subj.includes(p.subject) && (p.checkCount || 0) >= 3 && (groep === "vo" ? isVO(p.level) : pastBijGroep(p.level, +groep)));
}

/**
 * 3 vragen voor een taak. vak = 'alles' | rekenen | taal | lezen | wereld | examens;
 * groep = 'eigen' | '4'..'8' | 'vo'; level = eigen niveau van de speler (voor 'eigen'/'alles').
 */
export async function bouwGameVragen({ vak = "alles", groep = "eigen", level = "6", n = 3 }) {
  const g = groep === "eigen" ? (String(level).match(/(\d)/) || [null, "6"])[1] : groep;
  // Vraag 1 van het start-kwartier is een vaste opwarmvraag: die overslaan, anders begon elke taak met dezelfde vraag (18 okt 2026).
  if (vak === "alles" || !vak) return (await bouwStartVragen(groep === "eigen" ? level : g, n + 1)).slice(1, n + 1);
  let kandidaten = padenVoor(vak, g);
  if (!kandidaten.length && g !== "vo") kandidaten = padenVoor(vak, "6");
  const volgorde = kandidaten.slice().sort(() => Math.random() - 0.5).slice(0, 4);
  for (const p of volgorde) {
    try { const q = await buildTopicQuiz({ pathId: p.id, aantal: n }); if (q?.questions?.length) return q.questions.slice(0, n).map((v) => ({ ...v, padTitel: p.title })); } catch { /* volgende */ }
  }
  return (await bouwStartVragen(level, n + 1)).slice(1, n + 1);
}

// 🕵️ Eén vraag voor de loting in de Bedrieger-kamer (Mark 18 okt 2026: "je krijgt ALTIJD dezelfde vraag").
// Vroeger kwam die uit het start-kwartier, en daarvan is vraag 1 een vaste opwarmvraag. Nu elke keer een
// willekeurig reken-, taal- of wereldpad van de groep (groep 6: 77 paden, ~3.750 vragen). Geen begrijpend
// lezen, plaatjes of lange vragen: iedereen moet hem in een paar seconden kunnen lezen (het is een race).
const LOTING_VAKKEN = ["rekenen", "taal", "wereld"];
const lotingRecent = [];   // laatste vragen in dit tabblad, om herhaling te voorkomen
export const geschiktVoorLoting = (v) => !!v && Array.isArray(v.options) && v.options.length >= 2 && typeof v.answer === "number"
  && !v.leesTekst && !v.stapTekst && !v.svg && String(v.q || "").length <= 140 && v.options.every((o) => String(o).length <= 60);
export async function bouwLotingVraag(level = "6") {
  const g = (String(level).match(/(\d)/) || [null, "6"])[1];
  let kandidaten = LOTING_VAKKEN.flatMap((v) => padenVoor(v, g));
  if (!kandidaten.length) kandidaten = LOTING_VAKKEN.flatMap((v) => padenVoor(v, "6"));
  const volgorde = kandidaten.slice().sort(() => Math.random() - 0.5).slice(0, 5);
  for (const p of volgorde) {
    try {
      const q = await buildTopicQuiz({ pathId: p.id, aantal: 8, groep: +g || null });
      const goed = (q?.questions || []).filter((v) => geschiktVoorLoting(v) && !lotingRecent.includes(v.q));
      if (!goed.length) continue;
      const v = goed[Math.floor(Math.random() * goed.length)];
      lotingRecent.push(v.q); if (lotingRecent.length > 30) lotingRecent.shift();
      return { ...v, padTitel: p.title };
    } catch { /* volgende pad */ }
  }
  return null;
}

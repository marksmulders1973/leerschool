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
  wereld: ["aardrijkskunde", "geschiedenis", "natuur", "wereldorientatie", "biologie", "verkeer"],
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
  if (vak === "alles" || !vak) return (await bouwStartVragen(groep === "eigen" ? level : g, n)).slice(0, n);
  let kandidaten = padenVoor(vak, g);
  if (!kandidaten.length && g !== "vo") kandidaten = padenVoor(vak, "6");
  const volgorde = kandidaten.slice().sort(() => Math.random() - 0.5).slice(0, 4);
  for (const p of volgorde) {
    try { const q = await buildTopicQuiz({ pathId: p.id, aantal: n }); if (q?.questions?.length) return q.questions.slice(0, n).map((v) => ({ ...v, padTitel: p.title })); } catch { /* volgende */ }
  }
  return (await bouwStartVragen(level, n)).slice(0, n);
}

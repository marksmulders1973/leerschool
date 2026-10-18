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

// 🕵️ Eén som voor de loting in de Bedrieger-kamer.
// Mark 18 okt 2026: "je krijgt ALTIJD dezelfde vraag" → daarna "NEE, ik wil een som, 100+ sommen" (een weetvraag
// over fruit was niet de bedoeling). Dus: elke keer een nieuw bedachte rekensom op het niveau van de groep,
// met 4 antwoorden die er net naast zitten. Duizenden mogelijkheden, kort genoeg voor een race.
const lotingRecent = [];   // laatste sommen in dit tabblad, om herhaling te voorkomen
const r = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const kiesUit = (arr) => arr[Math.floor(Math.random() * arr.length)];
const fmt = (n) => (Number.isInteger(n) ? String(n) : String(n).replace(".", ","));

/** Som-soorten per groep: elk geeft [vraagtekst, antwoord]. */
function somVoorGroep(g) {
  const plus = (max) => { const a = r(2, max - 2), b = r(1, max - a); return [`${a} + ${b}`, a + b]; };
  const min = (max) => { const a = r(3, max), b = r(1, a - 1); return [`${a} − ${b}`, a - b]; };
  const keer = (tot) => { const a = r(2, tot), b = r(2, 10); return [`${a} × ${b}`, a * b]; };
  const deel = (tot, cMin = 2) => { const b = r(cMin, tot), c = r(cMin, 10); return [`${b * c} : ${b}`, c]; };
  const tientallen = (max) => { const a = r(1, max / 10 - 1) * 10, b = r(1, max / 10 - a / 10) * 10 - (Math.random() < .5 ? r(1, 9) : 0); return [`${a} + ${b}`, a + b]; };
  const soorten = {
    3: [() => plus(20), () => min(20)],
    4: [() => plus(100), () => min(100), () => keer(5), () => { const a = r(2, 10); return [`${a} × 10`, a * 10]; }],
    5: [() => plus(1000), () => min(1000), () => keer(10), () => deel(5), () => tientallen(1000)],
    6: [() => keer(10), () => deel(10), () => plus(1000), () => min(1000), () => { const a = r(11, 99); return [`${a} × 10`, a * 10]; }],
    7: [() => { const a = r(12, 49), b = r(3, 9); return [`${a} × ${b}`, a * b]; }, () => deel(12, 4), () => min(10000), () => { const a = r(2, 99); return [`${a} × 100`, a * 100]; }, () => { const a = r(1, 9) * 100, b = kiesUit([10, 50, 25]); return [`${b}% van ${a}`, (a * b) / 100]; }],
    8: [() => { const a = r(12, 99), b = r(3, 9); return [`${a} × ${b}`, a * b]; }, () => deel(12, 4), () => { const a = r(2, 40) * 0.5, b = r(1, 20) * 0.25; return [`${fmt(a)} + ${fmt(b)}`, a + b]; }, () => { const a = r(1, 20) * 20, b = kiesUit([10, 25, 50, 75]); return [`${b}% van ${a}`, (a * b) / 100]; }, () => { const a = r(1000, 9999), b = r(100, a - 1); return [`${a} − ${b}`, a - b]; }],
  };
  return kiesUit(soorten[Math.min(8, Math.max(3, g))])();
}
/** 3 foute antwoorden die er net naast zitten (±1, ±2, ±10, ± een tafel), uniek en niet negatief. */
function afleiders(goed) {
  const stap = Number.isInteger(goed) ? 1 : 0.25;
  const kand = [goed + stap, goed - stap, goed + 2 * stap, goed - 2 * stap, goed + 10, goed - 10, goed + 5, goed - 5, goed * 2, Math.round(goed / 2)]
    .filter((x) => x >= 0 && x !== goed).map((x) => Math.round(x * 100) / 100);
  const uniek = [...new Set(kand)].sort(() => Math.random() - 0.5);
  return uniek.slice(0, 3);
}
export const geschiktVoorLoting = (v) => !!v && Array.isArray(v.options) && v.options.length === 4 && typeof v.answer === "number"
  && new Set(v.options).size === 4 && String(v.q || "").length <= 60;
export function maakLotingSom(level = "6") {
  const g = +((String(level).match(/(\d)/) || [null, "6"])[1]);
  for (let poging = 0; poging < 20; poging++) {
    const [som, goed] = somVoorGroep(g);
    const q = `Wat is ${som}?`;
    if (lotingRecent.includes(q)) continue;
    const opties = [goed, ...afleiders(goed)].sort(() => Math.random() - 0.5);
    lotingRecent.push(q); if (lotingRecent.length > 30) lotingRecent.shift();
    return { q, options: opties.map(fmt), answer: opties.indexOf(goed), padTitel: "Rekenen" };
  }
  return { q: "Wat is 7 × 8?", options: ["54", "56", "64", "48"], answer: 1, padTitel: "Rekenen" };
}
export async function bouwLotingVraag(level = "6") { return maakLotingSom(level); }

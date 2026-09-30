// 📈 Niveaulijn — fase 1: signalen verzamelen (Mark 29/30 sep 2026: "dit kind is 11, zit in groep 8
// en vindt de vragen te moeilijk — na 100 kwartieren past de app de lijn aan naar wat het moet zijn").
// Fase 1 rekent nog niets uit en verandert niets voor het kind. Per antwoord leggen we vast hoe
// moeilijk de vraag was (uit het niveau-label van het leerpad), of het goed was, hoe lang het
// duurde, of er hulp is gebruikt en of het kind "weet ik niet" koos. Plus af en toe het gevoel
// van het kind zelf. Alles als event (dagrapport) én op dit toestel (lk_niveau), zodat fase 2 er
// het werkniveau per vak uit kan rekenen. Geen extra persoonsgegevens: alleen groep + apparaat-id.
import manifest from "../../learnPaths/pathManifest.generated.json";
import { track } from "../../utils.js";

const KEY = "lk_niveau";
const MAX_RECENT = 60;

const PADEN = (() => { const m = new Map(); for (const p of (Array.isArray(manifest) ? manifest : Object.values(manifest))) m.set(p.id, p); return m; })();

// Vak van een pad → drie hoofdvakken (rest houdt zijn eigen naam).
const HOOFDVAK = { rekenen: "rekenen", wiskunde: "rekenen", taal: "taal", spelling: "taal", "begrijpend-lezen": "lezen" };
export function vakVanPad(pathId) {
  const p = PADEN.get(pathId);
  const s = p?.subject || "";
  return HOOFDVAK[s] || s || null;
}

// Moeilijkheid op de groepschaal: groep 3 = 3 … groep 8 = 8, klas 1 = 9, klas 3 = 11, havo/vwo 4-5 ≈ 12,5.
export function moeilijkheidVanLevel(level) {
  const l = String(level || "").toLowerCase();
  const rng = (a, b) => (a + b) / 2;
  let m;
  if ((m = l.match(/groep(\d)-(\d)/))) return rng(+m[1], +m[2]);
  if ((m = l.match(/groep(\d)/))) return +m[1];
  if ((m = l.match(/klas(\d)-(\d)/))) return rng(8 + +m[1], 8 + +m[2]);
  if ((m = l.match(/klas(\d)/))) return 8 + +m[1];
  if ((m = l.match(/(?:havo|vwo)(\d)-(\d)/))) return rng(8 + +m[1], 8 + +m[2]);
  if ((m = l.match(/(?:havo|vwo)(\d)/))) return 8 + +m[1];
  if (/vmbo.*4/.test(l)) return 12;
  if (/havo|vwo/.test(l)) return 12.5;
  if (l === "po") return 6;
  return null;
}
export function moeilijkheidVanPad(pathId) {
  const m = String(pathId || "").match(/^opwarm-g(\d)/); // opwarmvragen van het start-kwartier: groep = moeilijkheid
  if (m) return +m[1];
  return moeilijkheidVanLevel(PADEN.get(pathId)?.level);
}
// Vaknaam uit een label ("Rekenen", "Taal", "Lezen", "Wereld") → hoofdvak
export function vakVanLabel(label) {
  const l = String(label || "").toLowerCase();
  if (/reken|wiskunde/.test(l)) return "rekenen";
  if (/lez/.test(l)) return "lezen";
  if (/taal|spelling|woord/.test(l)) return "taal";
  return l || null;
}

function kindGroep() {
  try { const u = JSON.parse(localStorage.getItem("ls_user") || "{}"); const m = String(u.level || "").match(/(\d)/); return m ? +m[1] : null; } catch { return null; }
}
function lees() { try { return JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch { return {}; } }
function schrijf(s) { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* */ } }

/** Eén beantwoorde vraag. `ms` = tijd sinds de vraag in beeld kwam; `hints` = aantal keer hulp/uitleg. */
export function meldAntwoord({ pathId = null, correct, ms = null, hints = 0, weetNiet = false, bron = null, moeilijkheid = null, vak = null }) {
  const moeilijk = moeilijkheid ?? (pathId ? moeilijkheidVanPad(pathId) : null);
  const v = vak || (pathId ? vakVanPad(pathId) : null) || "overig";
  const groep = kindGroep();
  const rij = { t: Date.now(), m: moeilijk, g: correct ? 1 : 0, ms: ms != null ? Math.min(Math.round(ms), 600000) : null, h: hints || 0, w: weetNiet ? 1 : 0 };
  try {
    track("niveau_signaal", { pad: pathId || undefined, vak: v, moeilijkheid: moeilijk, groep, correct: correct ? 1 : 0, ms: rij.ms, hints: rij.h, weetniet: rij.w, bron });
  } catch { /* */ }
  const s = lees();
  const per = s.vakken?.[v] || { n: 0, goed: 0, weetniet: 0, recent: [] };
  per.n += 1; per.goed += rij.g; per.weetniet += rij.w;
  per.recent = [...(per.recent || []), rij].slice(-MAX_RECENT);
  per.laatste = rij.t;
  s.vakken = { ...(s.vakken || {}), [v]: per };
  s.groep = groep;
  schrijf(s);
}

/** Het kind zelf: "te makkelijk" | "goed" | "te moeilijk" — na een kwartier of een check. */
export function meldGevoel(gevoel, { bron = null, vak = null } = {}) {
  const s = lees();
  s.gevoel = [...(s.gevoel || []), { t: Date.now(), gevoel, bron, vak }].slice(-30);
  schrijf(s);
  try { track("niveau_gevoel", { gevoel, bron, vak, groep: kindGroep(), kwartieren: s.kwartieren || 0 }); } catch { /* */ }
}

/** Kwartier afgerond: telt mee; elk 3e kwartier vragen we hoe het kind het vond. */
export function meldKwartierKlaar() {
  const s = lees();
  s.kwartieren = (s.kwartieren || 0) + 1;
  schrijf(s);
  return s.kwartieren % 3 === 0;
}

/** Stand op dit toestel (voor fase 2 / dagrapport-diagnose). */
export function niveauStand() { return lees(); }

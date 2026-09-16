// 🌟 Trouwe gast (idee H, Mark "bouw maar" 16 sep 2026).
//
// Waarom: het trouwste apparaat in de app (22 bezoekdagen sinds 20 aug, 10
// kwartieren) had géén naam en géén ouder eraan. Wie wél een naam kiest, doet
// dat vóór de eerste vraag ("Speler") — precies verkeerd om. Hier draaien we
// het om: pas als een gast op ≥5 verschillende dagen is geweest én minstens één
// kwartier heeft gehaald, vragen we één keer vriendelijk of hij zijn voortgang
// wil bewaren (naam + eventueel koppelcode). Overslaan mag; het kaartje komt
// dan pas na 5 níeuwe bezoekdagen terug. Geen nieuwe voordeur: het kaartje
// staat op het eindscherm van het kwartier en op Mijn pagina.
//
// Opslag (alleen dit toestel):
//   lk_bezoekdagen = { dagen: ["YYYY-MM-DD", …] }   (max 120 dagen bewaard)
//   lk_trouwe_gast = { getoond_bij, overgeslagen_bij, klaar }
// Meten: event `trouwe_gast_kaart` met props { actie, dagen } —
//   actie = toon | naam | overgeslagen.

import { getDayStreak, getDailyGoal } from "../../shared/dailyGoal.js";

export const DREMPEL_DAGEN = 5;
const KEY_DAGEN = "lk_bezoekdagen";
const KEY_STAND = "lk_trouwe_gast";
const MAX_DAGEN = 120;

const vandaagStr = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

function leesDagen() {
  try {
    const v = JSON.parse(localStorage.getItem(KEY_DAGEN) || "null");
    return Array.isArray(v?.dagen) ? v.dagen.filter((d) => typeof d === "string") : [];
  } catch { return []; }
}
function leesStand() {
  try { return JSON.parse(localStorage.getItem(KEY_STAND) || "null") || {}; } catch { return {}; }
}
function schrijfStand(s) {
  try { localStorage.setItem(KEY_STAND, JSON.stringify(s)); } catch { /* best-effort */ }
}

/** Eén keer per app-start aanroepen: vandaag als bezoekdag noteren. */
export function noteerBezoekdag() {
  const dagen = leesDagen();
  const vandaag = vandaagStr();
  if (dagen.includes(vandaag)) return dagen.length;
  const nieuw = [...dagen, vandaag].slice(-MAX_DAGEN);
  try { localStorage.setItem(KEY_DAGEN, JSON.stringify({ dagen: nieuw })); } catch { /* */ }
  return nieuw.length;
}

/** Aantal verschillende dagen dat dit toestel de app opende. */
export function aantalBezoekdagen() { return leesDagen().length; }

/** Gast = geen naam, of de standaardnaam "Speler" (naamvraag overgeslagen). */
export function isGast(userName) {
  const n = String(userName || "").trim();
  return !n || /^speler$/i.test(n);
}

/** Is er op dit toestel ooit een kwartier gehaald? (dag-streak of vandaag voltooid) */
export function kwartierOoitGehaald() {
  try {
    if ((getDayStreak()?.best || 0) > 0) return true;
    return !!getDailyGoal()?.completed;
  } catch { return false; }
}

/**
 * Moet het kaartje nu getoond worden?
 * Regels: gast · ≥5 bezoekdagen · ooit een kwartier gehaald · nog niet klaar ·
 * na overslaan pas weer na 5 nieuwe bezoekdagen.
 */
export function trouweGastKaartTonen(userName) {
  const dagen = aantalBezoekdagen();
  const stand = leesStand();
  const basis = { dagen, stand };
  if (stand.klaar) return { tonen: false, ...basis };
  if (!isGast(userName)) return { tonen: false, ...basis };
  if (dagen < DREMPEL_DAGEN) return { tonen: false, ...basis };
  if (!kwartierOoitGehaald()) return { tonen: false, ...basis };
  if (typeof stand.overgeslagen_bij === "number" && dagen < stand.overgeslagen_bij + DREMPEL_DAGEN) return { tonen: false, ...basis };
  return { tonen: true, ...basis };
}

/** Kaartje is getoond (voor de meting; verandert de regels niet). */
export function trouweGastGetoond() {
  const s = leesStand();
  schrijfStand({ ...s, getoond_bij: aantalBezoekdagen(), getoond_op: Date.now() });
}

/** "Liever niet": pas na 5 nieuwe bezoekdagen opnieuw vragen. */
export function trouweGastOvergeslagen() {
  const s = leesStand();
  schrijfStand({ ...s, overgeslagen_bij: aantalBezoekdagen(), overgeslagen_op: Date.now() });
}

/** Naam gekozen: nooit meer vragen op dit toestel. */
export function trouweGastKlaar() {
  const s = leesStand();
  schrijfStand({ ...s, klaar: true, klaar_op: Date.now() });
}

/** Alleen voor tests / de reset-URL. */
export function resetTrouweGast() {
  try { localStorage.removeItem(KEY_DAGEN); localStorage.removeItem(KEY_STAND); } catch { /* */ }
}

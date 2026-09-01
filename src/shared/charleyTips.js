// 🐕 Charley-tips engine (Mark 1 sep 2026: "laat Charley de app kennen en
// adviseren — koppelcode, voortgang, printbare oefeningen"). Laag 1 van het
// plan: régel-gebaseerde tips, géén AI — voorspelbaar en gratis.
//
// Anti-Clippy-spelregels (afgesproken 1 sep):
// - maximaal ÉÉN Charley-tip per sessie, app-breed (sessionStorage);
// - elke tip is wegklikbaar; "niet meer tonen" wordt per tip onthouden;
// - tips verschijnen alleen op een echt twijfel-moment (de aanroepende
//   pagina bepaalt de conditie), nooit als algemene reclame;
// - alles gemeten: charley_tip_toon / charley_tip_klik / charley_tip_weg —
//   een tip die massaal wordt weggeklikt gaat eruit.

import { track } from "../utils.js";

const SESSIE_KEY = "lk_charley_tip_sessie"; // al een tip getoond deze sessie?
const UIT_PREFIX = "lk_charley_uit_";       // per tip: "niet meer tonen"

export function tipStaatUit(tipId) {
  try { return localStorage.getItem(UIT_PREFIX + tipId) === "1"; } catch { return false; }
}

// Mag deze tip nu? (per-tip-uit + sessie-cap). Reserveert de sessie-slot NIET —
// dat doet markeerGetoond zodra de tip echt rendert.
export function kanTipTonen(tipId) {
  if (tipStaatUit(tipId)) return false;
  try { if (sessionStorage.getItem(SESSIE_KEY)) return sessionStorage.getItem(SESSIE_KEY) === tipId; } catch { /* */ }
  return true;
}

export function markeerTipGetoond(tipId) {
  try { sessionStorage.setItem(SESSIE_KEY, tipId); } catch { /* */ }
  track("charley_tip_toon", { tip: tipId });
}

export function tipGeklikt(tipId) {
  track("charley_tip_klik", { tip: tipId });
}

// weggeklikt; blijvend=true → nooit meer tonen (× = alleen deze sessie al
// afgedekt door de sessie-cap, dus × zonder blijvend hoeft niets op te slaan).
export function tipWeggeklikt(tipId, blijvend = false) {
  if (blijvend) { try { localStorage.setItem(UIT_PREFIX + tipId, "1"); } catch { /* */ } }
  track("charley_tip_weg", { tip: tipId, blijvend });
}

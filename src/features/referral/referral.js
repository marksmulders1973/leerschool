// 🤝 Vrienden-werven (Mark 8 jul 2026): een volwassene deelt een persoonlijke
// link (leerkwartier.app/?vriend=CODE). Een nieuwe bezoeker via die link telt
// pas als "geworven vriend" als hij écht oefent (ACTIVATIE_DREMPEL vragen
// beantwoord) — deel-kliks tellen niet, dus valsspelen door zelf te klikken
// levert niets op. Bij 5 geworven vrienden zet vrienden_stand() (Supabase-RPC)
// automatisch 6 maanden Pro klaar voor de Pro-lancering (jan 2027).
//
// Bewust NIET in kinder-schermen gebruiken: dit programma is voor volwassenen
// (ouder-dashboard + e-mails), conform STOPLIST (geen deel-druk op kinderen).

import supabase from "../../supabase.js";
import { track } from "../../utils.js";
import { telAntwoordVoorPartner } from "./partnerCode.js";

const KEY_CODE = "lk_vriend_code";
const KEY_TELLER = "lk_vriend_antwoorden";
const KEY_KLAAR = "lk_vriend_geactiveerd";
export const ACTIVATIE_DREMPEL = 3;
export const VRIENDEN_DOEL = 5;

// Zelfde apparaat-id als track() (utils._deviceId is privé — zelfde key).
function uid() {
  try {
    let u = localStorage.getItem("lk_uid");
    if (!u) { u = "u_" + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem("lk_uid", u); }
    return u;
  } catch { return null; }
}

const ls = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* */ } },
};

// Bij app-start: staat er ?vriend=CODE in de URL? Bewaar 'm (eerste code wint)
// en meld de bezoeker aan bij de code-eigenaar. Fire-and-forget.
export function vangVriendCode() {
  try {
    const params = new URLSearchParams(window.location.search);
    const code = (params.get("vriend") || "").trim().toUpperCase();
    if (!code || code.length > 12) return;
    if (ls.get(KEY_CODE)) return; // eerste verwijzer wint — niet overschrijven
    const visitor = uid();
    if (!visitor) return;
    ls.set(KEY_CODE, code);
    supabase.rpc("registreer_vriend", { p_code: code, p_visitor: visitor })
      .then(() => { try { track("vriend_bezoek", { code }); } catch { /* */ } })
      .catch(() => { /* stil — telt dan gewoon niet */ });
  } catch { /* nooit de app-start breken */ }
}

// Bij elk beantwoord oefen-vraagje aanroepen. Na ACTIVATIE_DREMPEL antwoorden
// telt deze bezoeker als geworven vriend (eenmalig).
export function telAntwoordVoorVriend() {
  // 🤲 Partner-codes liften mee op dezelfde aanroep-punten (alle oefen-flows
  // roepen deze functie al aan) — zie partnerCode.js.
  telAntwoordVoorPartner();
  try {
    const code = ls.get(KEY_CODE);
    if (!code || ls.get(KEY_KLAAR)) return;
    const n = (parseInt(ls.get(KEY_TELLER) || "0", 10) || 0) + 1;
    ls.set(KEY_TELLER, String(n));
    if (n < ACTIVATIE_DREMPEL) return;
    ls.set(KEY_KLAAR, "1"); // vóór de call — dubbel vuren voorkomen
    const visitor = uid();
    if (!visitor) return;
    supabase.rpc("activeer_vriend", { p_code: code, p_visitor: visitor })
      .then(() => { try { track("vriend_geworven", { code }); } catch { /* */ } })
      .catch(() => { ls.set(KEY_KLAAR, ""); /* volgende antwoord probeert opnieuw */ });
  } catch { /* nooit de leerflow breken */ }
}

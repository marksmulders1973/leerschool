// 🤲 Partner-codes (Mark 10 jul 2026): voedselbanken, Stichtingen Leergeld en
// bibliotheken delen een flyer met QR-code → leerkwartier.app/?partner=CODE.
// De code geeft het gezin de garantie "gratis Pro tot en met de Doorstroomtoets
// 2027" (vlag lokaal; wordt ingelost bij de Pro-lancering jan 2027) en maakt
// per partner meetbaar of de flyer werkt:
//   - event `partner_bezoek` = iemand landde via de QR/link (met de code)
//   - event `partner_actief` = diegene is écht gaan oefenen (na 3 antwoorden)
// Geen aparte tabel of RPC nodig — de bestaande events-tabel is de teller.
// LET OP: ?code= is bezet door quiz-deelcodes (App.jsx), daarom ?partner=.

import { track } from "../../utils.js";

const KEY_CODE = "lk_partner_code";
const KEY_TELLER = "lk_partner_antwoorden";
const KEY_ACTIEF = "lk_partner_actief";
export const PARTNER_ACTIVATIE_DREMPEL = 3;
// Waar de code recht op geeft — getoond in UI en straks gehonoreerd door de
// paywall (useSubscription): gratis Pro tot na de Doorstroomtoets van 2027.
export const PARTNER_PRO_TOT = "2027-08-01";

const ls = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* */ } },
};

// Bij app-start: staat er ?partner=CODE in de URL? Bewaar 'm (eerste code
// wint) en log het bezoek zodat we per partner kunnen tellen. Fire-and-forget.
export function vangPartnerCode() {
  try {
    const params = new URLSearchParams(window.location.search);
    const code = (params.get("partner") || "").trim().toUpperCase();
    if (!code || code.length > 20 || !/^[A-Z0-9-]+$/.test(code)) return;
    const nieuw = !ls.get(KEY_CODE);
    if (nieuw) ls.set(KEY_CODE, code);
    // Elk bezoek via de link telt als scan — ook herhaalbezoek (props.uid
    // maakt unieke mensen telbaar in het dagrapport).
    track("partner_bezoek", { code: ls.get(KEY_CODE) || code, nieuw });
  } catch { /* nooit de app-start breken */ }
}

// Bij elk beantwoord oefen-vraagje aanroepen (loopt mee via referral.js).
// Na PARTNER_ACTIVATIE_DREMPEL antwoorden telt dit gezin als "actief geworden
// via deze partner" (eenmalig per apparaat).
export function telAntwoordVoorPartner() {
  try {
    const code = ls.get(KEY_CODE);
    if (!code || ls.get(KEY_ACTIEF)) return;
    const n = (parseInt(ls.get(KEY_TELLER) || "0", 10) || 0) + 1;
    ls.set(KEY_TELLER, String(n));
    if (n < PARTNER_ACTIVATIE_DREMPEL) return;
    ls.set(KEY_ACTIEF, "1");
    track("partner_actief", { code });
  } catch { /* nooit de leerflow breken */ }
}

// Voor UI + straks de paywall: welke partner-code is hier actief?
export function actievePartnerCode() {
  return ls.get(KEY_CODE) || null;
}

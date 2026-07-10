// 🤲 Partner-codes (Mark 10 jul 2026): voedselbanken, Stichtingen Leergeld en
// bibliotheken delen een flyer met QR-code → leerkwartier.app/?partner=CODE.
// De code geeft het gezin de garantie "gratis Pro tot en met de Doorstroomtoets
// 2027" (vlag lokaal; wordt ingelost bij de Pro-lancering jan 2027) en maakt
// per partner meetbaar of de flyer werkt:
//   - event `partner_bezoek` = iemand landde via de QR/link (met de code)
//   - event `partner_actief` = diegene is écht gaan oefenen (na 3 antwoorden)
// Limiet (Mark 10 jul): elke code heeft max_uses plekken (standaard 50) in de
// partner_codes-tabel; de RPC claim_partner_plek claimt er atomisch één op het
// moment van activatie — niet bij de scan, anders branden nieuwsgierige scans
// de plekken op. Vol = ZACHTE landing: app blijft gewoon werken (2026 is
// gratis), alleen de 2027-garantie is op; event partner_vol waarschuwt Mark.
// LET OP: ?code= is bezet door quiz-deelcodes (App.jsx), daarom ?partner=.

import supabase from "../../supabase.js";
import { track } from "../../utils.js";

const KEY_CODE = "lk_partner_code";
const KEY_TELLER = "lk_partner_antwoorden";
const KEY_ACTIEF = "lk_partner_actief";
const KEY_STATUS = "lk_partner_status"; // 'pro2027' (plek geclaimd) of 'vol'
export const PARTNER_ACTIVATIE_DREMPEL = 3;
// Waar de code recht op geeft — getoond in UI en straks gehonoreerd door de
// paywall (useSubscription): gratis Pro tot na de Doorstroomtoets van 2027.
export const PARTNER_PRO_TOT = "2027-08-01";

const ls = {
  get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
  set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* */ } },
};

// Zelfde apparaat-id als track() en referral.js (key lk_uid).
function uid() {
  try {
    let u = localStorage.getItem("lk_uid");
    if (!u) { u = "u_" + Math.random().toString(36).slice(2) + Date.now().toString(36); localStorage.setItem("lk_uid", u); }
    return u;
  } catch { return null; }
}

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
// via deze partner" (eenmalig per apparaat) en claimen we een van de max 50
// plekken van de code. Vol/onbekend = zachte landing, alleen status noteren.
export function telAntwoordVoorPartner() {
  try {
    const code = ls.get(KEY_CODE);
    if (!code || ls.get(KEY_ACTIEF)) return;
    const n = (parseInt(ls.get(KEY_TELLER) || "0", 10) || 0) + 1;
    ls.set(KEY_TELLER, String(n));
    if (n < PARTNER_ACTIVATIE_DREMPEL) return;
    const visitor = uid();
    if (!visitor) return;
    ls.set(KEY_ACTIEF, "1"); // vóór de call — dubbel vuren voorkomen
    supabase.rpc("claim_partner_plek", { p_code: code, p_visitor: visitor })
      .then(({ data }) => {
        track("partner_actief", { code, status: data || "?" });
        if (data === "geclaimd" || data === "al_geclaimd") {
          ls.set(KEY_STATUS, "pro2027");
        } else if (data === "vol") {
          ls.set(KEY_STATUS, "vol");
          track("partner_vol", { code }); // sein voor Mark: limiet bereikt
        }
      })
      .catch(() => { ls.set(KEY_ACTIEF, ""); /* volgende antwoord probeert opnieuw */ });
  } catch { /* nooit de leerflow breken */ }
}

// Voor UI + straks de paywall: welke partner-code is hier actief?
export function actievePartnerCode() {
  return ls.get(KEY_CODE) || null;
}

// 'pro2027' = plek geclaimd (paywall moet dit in jan 2027 honoreren),
// 'vol' = code was op — gezin valt dan terug op het gewone gratis aanbod.
export function partnerProStatus() {
  return ls.get(KEY_STATUS) || null;
}

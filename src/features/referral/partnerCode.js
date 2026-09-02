// 🤲 Partner-codes (Mark 10 jul 2026): voedselbanken, Stichtingen Leergeld en
// bibliotheken delen een flyer met QR-code → leerkwartier.app/?partner=CODE.
// De code geeft het gezin de garantie "gratis Familie-niveau tot en met de
// Doorstroomtoets 2027" (vlag lokaal; ingelost bij de lancering jan 2027 —
// prijsplan-besluit Mark 2026-07-25: partner-code = Familie gratis) en maakt
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
// Waar de code recht op geeft — getoond in UI en gehonoreerd door de paywall
// (useSubscription). Mark-besluit 27 aug 2026: HEEL 2027, t/m 31 december
// (was 1 aug) — de verspreide flyers beloven "gratis heel 2027", dus de
// einddatum is gelijkgetrokken met die belofte (eerlijke-claim-regel).
// (Sleutelwaarde 'pro2027' blijft technisch ongewijzigd voor bestaande apparaten.)
export const PARTNER_PRO_TOT = "2027-12-31";

// ⚖️ BLIJVENDE codes — CONTRACTUEEL vastgelegd, niet zomaar wijzigen.
// Hard toegezegd in het getekende "Aanvraagformulier vriend OP" aan de gemeente
// Den Haag (26 jul 2026) + bevestigd per mail aan Esther Versluis (3 aug 2026):
// Ooievaarspashouders krijgen het Familie-abonnement BLIJVEND gratis, zonder
// einddatum en zonder plekken-limiet (max_uses in de DB staat op 1.000.000).
// Pro (leerkracht-tier) én los kwartier-tegoed vallen hier nadrukkelijk buiten.
// NIET inkorten/limiteren/van einddatum voorzien zonder een nieuwe schriftelijke
// afspraak met bureau Ooievaarspas. Volledige afspraak: docs/AFSPRAKEN-OOIEVAARSPAS.md.
const BLIJVENDE_CODE_PREFIX = "OOIEVAAR";

// Tot wanneer geeft de actieve partner-code gratis Familie?
// null = blijvend (geen einddatum); anders een ISO-datum.
export function partnerFamilieTot() {
  const code = ls.get(KEY_CODE) || "";
  if (code.startsWith(BLIJVENDE_CODE_PREFIX)) return null;
  return PARTNER_PRO_TOT;
}

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
    // F3 (Fable-review 2 sep 2026): een verzonnen code (?partner=TEST123)
    // bleef anders voor altijd staan mét gratis-belofte. Achteraf checken;
    // onbekend → weer weghalen (alleen als er nog geen plek geclaimd is).
    // Níét alleen bij `nieuw`: de stille SW-herlaad bij een verse installatie
    // brak de eerste RPC af (live gezien 2 sep), dus bij elk ?partner=-bezoek
    // zonder geclaimde plek opnieuw checken — één goedkope RPC.
    if (!ls.get(KEY_STATUS)) {
      partnerCodeBekend(code).then((bekend) => {
        if (bekend === false && ls.get(KEY_CODE) === code && !ls.get(KEY_STATUS)) {
          ls.set(KEY_CODE, "");
          track("partner_code_onbekend", { code });
        }
      });
    }
  } catch { /* nooit de app-start breken */ }
}

// Bestaat deze code in partner_codes? true/false, of null als de check niet
// kon (offline) — dan voordeel van de twijfel.
export async function partnerCodeBekend(code) {
  try {
    const { data, error } = await supabase.rpc("partner_code_bestaat", { p_code: code });
    if (error) return null;
    return data === true;
  } catch { return null; }
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

// Handmatige invoer "Ik heb een code" (WhatsApp-feedback Mark 11 aug 15:23) —
// zelfde effect als via de QR-link ?partner=CODE, maar dan getypt in het
// Familie/Pro-blok. Best-effort-validatie tegen de partner_codes-tabel; kan
// die check niet (offline/RLS), dan zelfde zachte landing als de QR-flow.
export async function zetPartnerCodeHandmatig(invoer) {
  const code = (invoer || "").trim().toUpperCase();
  if (!/^[A-Z0-9-]{3,20}$/.test(code)) return { ok: false, reden: "vorm" };
  const bestaand = ls.get(KEY_CODE);
  if (bestaand && bestaand !== code) return { ok: false, reden: "al-actief", code: bestaand };
  let bekend = null;
  try {
    // Via RPC (27 aug): een directe select op partner_codes gaf door RLS-zonder-
    // policy altijd "leeg" terug — elke code leek onbekend. De RPC geeft alleen
    // ja/nee en houdt de interne partner-aantekeningen in die tabel afgeschermd.
    const { data, error } = await supabase.rpc("partner_code_bestaat", { p_code: code });
    if (!error) bekend = data === true;
  } catch { /* onbekend laten — voordeel van de twijfel */ }
  if (bekend === false) return { ok: false, reden: "onbekend" };
  if (!bestaand) ls.set(KEY_CODE, code);
  track("partner_code_handmatig", { code, bekend });
  return { ok: true, code, familieTot: partnerFamilieTot() };
}

// 'pro2027' = plek geclaimd (paywall moet dit in jan 2027 honoreren),
// 'vol' = code was op — gezin valt dan terug op het gewone gratis aanbod.
export function partnerProStatus() {
  return ls.get(KEY_STATUS) || null;
}

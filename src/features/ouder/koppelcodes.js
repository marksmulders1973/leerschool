// 🔑 Koppelcodes — losse logica voor het ouder-dashboard en /koppelen.
//
// Mark 14 okt 2026 (ouderkoppeling "werkt niet, of we komen er niet uit"):
// vraag de ouder eerst hoeveel kinderen hij wil koppelen, maak dan meteen 1, 2
// of 3 codes zónder naam, zet die voor altijd in het ouder-dashboard (met
// wissen), en laat het kind de code op het eigen toestel invoeren op
// leerkwartier.app/koppelen. De naam komt dan van het kind zelf
// (claim_link_code neemt p_child_name als de code geen naam heeft).
//
// Een code is éénmalig: na gebruik staat 'm used_at en verschijnt het kind als
// kaart. Niet-gebruikte codes verlopen niet meer (expires_at null) — de 48 uur
// was de grootste valkuil: 3 van de 4 codes in 28 dagen verliepen ongebruikt.
import { BRAND } from "../../brand.js";

export const MAX_CODES = 3;

// Alfabet zonder verwarrende tekens (0/O, 1/I/L) voor overtypen vanaf een
// telefoon. Crypto-random: een koppelcode geeft toegang tot kind-voortgang.
const ALFABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
export function generateCode() {
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => ALFABET[b % ALFABET.length]).join("");
}

/** Openstaande codes splitsen: zonder naam (losse codes, nieuw) en op naam (oude flow / herstel). */
export function splitsCodes(openInvites) {
  const losse = [];
  const opNaam = [];
  for (const iv of openInvites || []) {
    if ((iv.child_name || "").trim()) opNaam.push(iv); else losse.push(iv);
  }
  return { losse, opNaam };
}

/** Hoeveel codes mag de ouder er nog bij maken? (kinderen + losse codes ≤ 3) */
export function codesOver(aantalKinderen, aantalLosse) {
  return Math.max(0, MAX_CODES - (aantalKinderen || 0) - (aantalLosse || 0));
}

/** Link die het kind rechtstreeks op /koppelen brengt met de code al ingevuld. */
export function koppelLink(code) {
  return `https://${BRAND.domain}/koppelen?code=${encodeURIComponent(String(code || "").trim())}`;
}

/** Tekst voor WhatsApp/e-mail: link mét code, plus de code los om over te typen. */
export function koppelBericht(code, naam = "") {
  const hoi = naam ? `Hoi ${naam}!` : "Hoi!";
  return `${hoi} Tik op deze link en vul je naam in, dan kan ik meekijken met ${BRAND.name}:\n${koppelLink(code)}\n\nLukt de link niet? Ga naar ${BRAND.domain}/koppelen en typ de code ${code}`;
}

/** Code uit de URL (?code=ABC123) of uit het voorstel van de codebalk. */
export function codeUitUrl(search, storage) {
  try {
    const q = new URLSearchParams(search || "").get("code");
    if (q) return String(q).toUpperCase().replace(/[\s\-._]/g, "");
  } catch { /* */ }
  try {
    const s = storage?.getItem("lk_koppelcode_voorstel");
    if (s) return String(s).toUpperCase().replace(/[\s\-._]/g, "");
  } catch { /* */ }
  return "";
}

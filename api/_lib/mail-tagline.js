// Vaste mail-tagline onder ELKE uitgaande Leerkwartier-mail (Mark 31 jul 2026).
// Doel: onder iedere mail dezelfde eerlijke, merk-versterkende regel die de
// gratis-belofte kenbaar maakt + zacht naar de site trechtert.
//
// Bewust GEEN kale "100%/altijd gratis": de belofte is gebonden aan de BASIS
// (oefenen + uitleg) én in tijd afgebakend — max 5 jaar vooruit (nu t/m 2031),
// telkens verlengd. Consistent met src/components/PakketUitleg.jsx en de
// gratis-claim-regel. Familie/Pro zijn optionele extra's, geen verplichting.
//
// Eén bron van waarheid: pas je 'm hier aan, dan verandert 'ie in alle mails.
// 6 nov 2026 (poort): de Familie-regel kent de poort — staat die aan, dan is de
// vroege-vogel-zin weg en begint de regel met de proefweek.
import { PAYWALL_ACTIVE } from "../../src/subscription/config.js";

export const MAIL_TAGLINE_TEXT =
  "De basis van Leerkwartier — oefenen en uitleg — is gratis, gegarandeerd t/m 2031, en die belofte verlengen we telkens. leerkwartier.app";

// Subtiele gecentreerde regel, bedoeld vlak boven de juridische/afmeld-voetregel.
// `kleur` past 'm aan de footer-stijl van de betreffende mail aan.
export function mailTaglineHtml({ site = "https://leerkwartier.app", kleur = "#7d8aa0", link = "#69f0ae" } = {}) {
  return `<p style="font-size:12px;line-height:1.6;color:${kleur};margin:0 0 4px;text-align:center;">` +
    `De basis van Leerkwartier — oefenen en uitleg — is <strong style="color:${link}">gratis, gegarandeerd t/m 2031</strong>, en die belofte verlengen we telkens. ` +
    `<a href="${site}/?utm_source=mail_tagline" style="color:${link};text-decoration:none;">leerkwartier.app</a>` +
    `</p>`;
}

// 👪 Familie-regel (Mark 30 sep 2026): één rustige regel met een link naar de
// koopkaart (/abonnement.html#familie). Alleen in mails aan ouders/verzorgers
// die Familie NIET al hebben (partnercode of betaald) — dat filter doet de
// aanroeper. Vóór 1 jan 2027 met de vroege-vogel-zin; daarna vanzelf zonder.
// Links in mails altijd mét .html (zonder .html = SPA-startpagina).
const FAMILIE_START_MS = Date.parse("2027-01-01T00:00:00+01:00");

export function familieUrl(plek) {
  return `https://leerkwartier.app/abonnement.html?van=${encodeURIComponent(plek)}#familie`;
}

export function familieRegelText(plek, nu = Date.now(), poortAan = PAYWALL_ACTIVE) {
  if (poortAan) {
    return `Meer uit Leerkwartier halen? Probeer Familie een week gratis, zonder betaalgegevens. Daarna € 39 voor 12 maanden, per gezin — geen abonnement, stopt vanzelf. ${familieUrl(plek)}`;
  }
  const vroeg = nu < FAMILIE_START_MS ? " Sluit je nu af, dan gaan je 12 maanden pas in op 1 januari 2027." : "";
  return `Meer uit Leerkwartier halen? Kies Familie: € 39 voor 12 maanden, per gezin — geen abonnement, stopt vanzelf.${vroeg} ${familieUrl(plek)}`;
}

export function familieRegelHtml(plek, { kleur = "#9fb0c6", link = "#ffd54f", nu = Date.now(), poortAan = PAYWALL_ACTIVE } = {}) {
  if (poortAan) {
    return `<p style="font-size:12.5px;line-height:1.6;color:${kleur};margin:0 0 12px;text-align:center;">` +
      `Meer uit Leerkwartier halen? <a href="${familieUrl(plek)}" style="color:${link};font-weight:700;">Probeer het Familie-pakket een week gratis</a>, zonder betaalgegevens. Daarna € 39 voor 12 maanden, per gezin — geen abonnement, stopt vanzelf.` +
      `</p>`;
  }
  const vroeg = nu < FAMILIE_START_MS ? " Sluit je nu af, dan gaan je 12 maanden pas in op 1 januari 2027." : "";
  return `<p style="font-size:12.5px;line-height:1.6;color:${kleur};margin:0 0 12px;text-align:center;">` +
    `Meer uit Leerkwartier halen? <a href="${familieUrl(plek)}" style="color:${link};font-weight:700;">Kies Familie: € 39 voor 12 maanden, per gezin</a> — geen abonnement, stopt vanzelf.${vroeg}` +
    `</p>`;
}

// 💛 "Dit betekent Familie voor u" (Mark 9 nov 2026) — zelfde drie zinnen als
// src/features/familie/FamilieVoorU.jsx (daar is de bron; hier gekopieerd omdat de
// mail-functies geen React importeren). Alleen als de poort aan staat; daarvoor de
// gewone regel. Links in mails altijd mét .html.
export const FAMILIE_VOOR_U_MAIL = [
  ["U weet waar uw kind staat.", "Per onderdeel groen, oranje of rood, en elke vrijdag dit weekrapport."],
  ["Het kwartier loopt zonder gezeur.", "U zet een les klaar, uw kind ziet “Vandaag staat klaar”. Weekschema voor de koelkast om af te vinken."],
  ["U kunt het thuis uitleggen.", "Een kaart in gewone woorden, Charley legt onbeperkt uit, en het dictee met de woorden van school."],
];

export function familieVoorUHtml(plek, { poortAan = PAYWALL_ACTIVE, proefToken = null } = {}) {
  if (!poortAan) return familieRegelHtml(plek, { poortAan });
  const punten = FAMILIE_VOOR_U_MAIL.map(([kop, tekst], i) =>
    `<tr><td style="width:26px;vertical-align:top;padding:3px 8px 3px 0;"><span style="display:inline-block;width:22px;height:22px;line-height:22px;border-radius:11px;background:#ffd54f;color:#0b1224;font-size:12px;font-weight:900;text-align:center;">${i + 1}</span></td>` +
    `<td style="vertical-align:top;padding:3px 0;font-size:13.5px;line-height:1.5;color:#e8edf5;"><strong style="color:#fff;">${kop}</strong> ${tekst}</td></tr>`
  ).join("");
  return `<div style="margin:0 0 16px;padding:14px 16px;border-radius:14px;border:1.5px solid rgba(255,213,79,0.45);background:rgba(255,213,79,0.08);">` +
    `<div style="font-size:10.5px;font-weight:800;letter-spacing:.6px;text-transform:uppercase;color:#ffce80;margin-bottom:4px;">● Familie-pakket · voor ouders</div>` +
    `<div style="font-size:17px;font-weight:900;color:#fff;margin-bottom:6px;">Dit betekent het Familie-pakket voor u</div>` +
    `<p style="font-size:13px;line-height:1.5;color:#a9b6c8;margin:0 0 8px;">Oefenen is en blijft gratis voor elk kind. Het Familie-pakket is er voor ú:</p>` +
    `<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 10px;">${punten}</table>` +
    `<p style="font-size:12.5px;line-height:1.5;color:#a9b6c8;margin:0 0 10px;">€ 39 voor 12 maanden: één pakket voor het hele gezin, tot 3 kinderen. Eén keer betalen, stopt vanzelf.</p>` +
    `<a href="${proefToken ? `https://leerkwartier.app/abonnement.html?van=${encodeURIComponent(plek)}&proeflink=${encodeURIComponent(proefToken)}#familie` : familieUrl(plek)}" style="display:inline-block;padding:10px 18px;border-radius:10px;background:#ffd54f;color:#0b1224;font-size:14px;font-weight:800;text-decoration:none;">${proefToken ? "Start uw gratis proefweek" : "Probeer het Familie-pakket een week gratis"}</a>` +
    `<div style="font-size:11.5px;color:#8899aa;margin-top:6px;">${proefToken ? "Eén tik op de pagina die opent, geen inloggen nodig. " : ""}Zonder betaalgegevens. Code van uw gemeente of een organisatie? Dan krijgt u het Familie-pakket gratis.</div>` +
    `</div>`;
}

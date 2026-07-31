// Vaste mail-tagline onder ELKE uitgaande Leerkwartier-mail (Mark 31 jul 2026).
// Doel: onder iedere mail dezelfde eerlijke, merk-versterkende regel die de
// gratis-belofte kenbaar maakt + zacht naar de site trechtert.
//
// Bewust GEEN kale "100%/altijd gratis": de belofte is gebonden aan de BASIS
// (oefenen + uitleg), consistent met src/components/PakketUitleg.jsx en de
// gratis-claim-regel. Familie/Pro zijn optionele extra's, geen verplichting.
//
// Eén bron van waarheid: pas je 'm hier aan, dan verandert 'ie in alle mails.

export const MAIL_TAGLINE_TEXT =
  "De basis van Leerkwartier — oefenen en uitleg — is en blijft gratis. leerkwartier.app";

// Subtiele gecentreerde regel, bedoeld vlak boven de juridische/afmeld-voetregel.
// `kleur` past 'm aan de footer-stijl van de betreffende mail aan.
export function mailTaglineHtml({ site = "https://leerkwartier.app", kleur = "#7d8aa0", link = "#69f0ae" } = {}) {
  return `<p style="font-size:12px;line-height:1.6;color:${kleur};margin:0 0 4px;text-align:center;">` +
    `De basis van Leerkwartier — oefenen en uitleg — is en <strong style="color:${link}">blijft gratis</strong>. ` +
    `<a href="${site}/?utm_source=mail_tagline" style="color:${link};text-decoration:none;">leerkwartier.app</a>` +
    `</p>`;
}

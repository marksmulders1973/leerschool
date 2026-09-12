// 📭 List-Unsubscribe-koppen (12 sep 2026, Mark: "zit er wel een afmeldknop?").
//
// In élke mail stond al een zichtbare uitschrijf-link met een persoonlijke
// token — dat is wat de wet vraagt. Wat ontbrak waren de mail-KOPPEN waarmee
// Gmail en Outlook zelf een "Afmelden"-knop naast de afzendernaam tonen.
//
// Waarom dat telt: zonder die knop is het alternatief voor een geërgerde lezer
// de spamknop. Eén spammelding schaadt de reputatie van een jong domein veel
// harder dan honderd uitschrijvingen. De kop is dus vooral bescherming van de
// bezorgbaarheid, niet een juridische verplichting (die geldt pas vanaf 5.000
// mails per dag; daar zitten we ver onder).
//
// One-Click (RFC 8058) mag alleen als de URL een POST rechtstreeks verwerkt,
// zónder tussenscherm. api/unsubscribe.js doet precies dat: GET toont een
// bevestigingspagina met een formulier, POST schrijft daadwerkelijk uit. De
// bevestigingspagina blijft dus bestaan voor wie de link zelf aanklikt, en
// mailprogramma's krijgen de directe route.

const SITE = "https://leerkwartier.app";

// Geeft het headers-object voor de Resend-body, of undefined als er geen
// bruikbare token is (dan laten we de kop liever weg dan een kapotte te sturen).
export function afmeldKoppen(token, { partner = false } = {}) {
  const t = String(token || "").trim();
  if (!t || t.length < 8) return undefined;
  const url = `${SITE}/api/unsubscribe?${partner ? "partner" : "token"}=${encodeURIComponent(t)}`;
  return {
    "List-Unsubscribe": `<${url}>`,
    "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
  };
}

// "Straks met je kind" (13 okt 2026, plan docs/PLAN-STRAKS-MET-JE-KIND.md).
// Vondst: 2 van de 3 partnerbezoekers komen overdag binnen (vaak de ouder op
// het werk, het kind zit op school) en maar 20% komt ooit terug. Dit helpt de
// ouder het vanavond aan het kind te geven: een agenda-afspraak (.ics) of een
// WhatsApp-bericht aan zichzelf. Er wordt niets opgeslagen.

export const STRAKS_UUR = 19;

// Vandaag 19:00, of morgen 19:00 als het al na 18:30 is.
export function straksMoment(nu = new Date()) {
  const t = new Date(nu.getFullYear(), nu.getMonth(), nu.getDate(), STRAKS_UUR, 0, 0);
  const grens = new Date(nu.getFullYear(), nu.getMonth(), nu.getDate(), STRAKS_UUR - 1, 30, 0);
  if (nu >= grens) t.setDate(t.getDate() + 1);
  return t;
}

export function straksIsVandaag(moment, nu = new Date()) {
  return moment.getDate() === nu.getDate() && moment.getMonth() === nu.getMonth();
}

export function straksLink(code) {
  const p = new URLSearchParams();
  if (code) p.set("partner", code);
  p.set("utm_source", "straks");
  return `https://leerkwartier.app/?${p.toString()}`;
}

const twee = (n) => String(n).padStart(2, "0");
// Zwevende lokale tijd (zonder Z of TZID): de agenda zet hem op 19:00 in de
// tijdzone van het toestel, en dat is precies wat we bedoelen.
function icsTijd(d) {
  return `${d.getFullYear()}${twee(d.getMonth() + 1)}${twee(d.getDate())}T${twee(d.getHours())}${twee(d.getMinutes())}00`;
}
function icsUtc(d) {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}
// Komma's, puntkomma's en backslashes moeten in .ics-tekst ge-escaped worden.
const icsTekst = (s) => s.replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n");

export function straksIcs(code, nu = new Date()) {
  const begin = straksMoment(nu);
  const eind = new Date(begin.getTime() + 15 * 60 * 1000);
  const link = straksLink(code);
  const regels = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Leerkwartier//Straks met je kind//NL",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:straks-${icsUtc(nu)}-${Math.random().toString(36).slice(2, 8)}@leerkwartier.app`,
    `DTSTAMP:${icsUtc(nu)}`,
    `DTSTART:${icsTijd(begin)}`,
    `DTEND:${icsTijd(eind)}`,
    `SUMMARY:${icsTekst("Leerkwartier: een kwartier oefenen met je kind")}`,
    `DESCRIPTION:${icsTekst(`Open deze link samen met je kind:\n${link}\n\nEen kwartier per dag leren, een leven lang slimmer.`)}`,
    `URL:${link}`,
    "BEGIN:VALARM",
    "TRIGGER:PT0M",
    "ACTION:DISPLAY",
    `DESCRIPTION:${icsTekst("Tijd voor Leerkwartier")}`,
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];
  return regels.join("\r\n") + "\r\n";
}

export function straksWhatsAppTekst(code, nu = new Date()) {
  const wanneer = straksIsVandaag(straksMoment(nu), nu) ? "Vanavond" : "Morgen";
  return `${wanneer} even een kwartier oefenen met de kinderen (gratis, geen account nodig):\n${straksLink(code)}`;
}

// Charley-rem (idee F, Mark "nee, dat was ik niet" — 16 sep 2026).
//
// Aanleiding: één kind stuurde op 15/16 sep 134 berichten naar het maatje en
// beantwoordde 2 vragen. Het maatje is hulp BIJ een vraag, geen chatbot.
// Drie lagen, van zacht naar hard, allemaal per apparaat per dag:
//   1. TERUG_NA  — na 5 berichten zonder beantwoorde vraag antwoordt het
//                  maatje kort en eindigt met "Zullen we er samen één doen?"
//                  (server krijgt context.stuurTerug; de client toont een knop).
//   2. PAUZE_NA  — na 15 berichten zonder beantwoorde vraag géén AI-call meer:
//                  "ik help je verder zodra je een vraag hebt gedaan".
//   3. TRAPJE    — (Mark 26 sep 2026: "eerst het kind leren kennen en maximaal
//                  helpen, daarna steeds iets afbouwen — dan is het kind al gewend")
//                  dag 1 met Charley 75 berichten, dag 2 65, 3 55, 4 45, 5 35, 6 25;
//                  vanaf dag 7: 10 + 1 per gemaakte som vandaag (max 30). Wie oefent,
//                  krijgt vanzelf meer Charley. Familie (ook via partnercode): 75/dag.
//                  Daarboven een vriendelijke pauze tot morgen. Server: api/_guard.js
//                  charleyServerLimiet (zelfde trapje, telt de dagen zelf).
// De teller "sinds vraag" gaat op 0 bij élk question_answered-event (utils.track).
// Server-backstop: api/tutor-chat.js telt per uid (20/dag, was 120 tot 22 sep) via ai_call_quota,
// voor het geval localStorage gewist wordt.
//
// Geen imports: utils.js importeert dit bestand (geen kringverwijzing).

const KEY = "lk_charley_dag";

export const REM = {
  TERUG_NA: 5,
  PAUZE_NA: 15,
  TRAPJE: [75, 65, 55, 45, 35, 25], // dag 1 t/m 6 met Charley
  BASIS: 10,        // vanaf dag 7 …
  PER_SOM: 1,       // … + 1 per gemaakte som vandaag
  MAX_LATER: 30,    // … tot hooguit 30
  FAMILIE: 75,
};
const KEY_DAGEN = "lk_charley_dagen"; // datums waarop dit apparaat Charley gebruikte

function vandaag() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function lees() {
  const leeg = { dag: vandaag(), berichten: 0, sindsVraag: 0, vragen: 0 };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return leeg;
    const s = JSON.parse(raw);
    if (!s || s.dag !== leeg.dag) return leeg;
    return {
      dag: s.dag,
      berichten: Number(s.berichten) || 0,
      sindsVraag: Number(s.sindsVraag) || 0,
      vragen: Number(s.vragen) || 0,
    };
  } catch {
    return leeg;
  }
}

function schrijf(s) {
  try { localStorage.setItem(KEY, JSON.stringify(s)); } catch { /* */ }
}

export function charleyStand() {
  return lees();
}

// Eén bericht van het kind erbij. Geeft de nieuwe stand terug.
export function noteerCharleyBericht() {
  const s = lees();
  noteerCharleyDag();
  s.berichten += 1;
  s.sindsVraag += 1;
  schrijf(s);
  return s;
}

// Het kind beantwoordde een échte vraag → het gesprek mag weer even.
export function noteerVraagBeantwoord() {
  const s = lees();
  s.sindsVraag = 0;
  s.vragen += 1; // telt mee voor het trapje vanaf dag 7
  schrijf(s);
  return s;
}

// Op welke "Charley-dag" zit dit apparaat? 1 = de eerste dag dat het kind Charley
// gebruikt(e). Alleen dagen mét een bericht tellen, dus een kind dat een week niet
// kwam, zakt niet sneller af.
function charleyDagen() {
  try { const d = JSON.parse(localStorage.getItem(KEY_DAGEN) || "[]"); return Array.isArray(d) ? d : []; } catch { return []; }
}
function noteerCharleyDag() {
  const d = charleyDagen(); const v = vandaag();
  if (d.includes(v)) return;
  try { localStorage.setItem(KEY_DAGEN, JSON.stringify([...d, v].slice(-10))); } catch { /* */ }
}
export function charleyDagNummer() {
  const d = charleyDagen(); const v = vandaag();
  return d.includes(v) ? d.length : d.length + 1;
}

export function charleyDagLimiet({ isBetaald = false, stand = lees(), dagNr = charleyDagNummer() } = {}) {
  if (isBetaald) return REM.FAMILIE;
  if (dagNr <= REM.TRAPJE.length) return REM.TRAPJE[dagNr - 1];
  return Math.min(REM.MAX_LATER, REM.BASIS + REM.PER_SOM * (stand.vragen || 0));
}

// Beoordeel het bericht dat het kind NU wil sturen (na noteerCharleyBericht).
// Returnt { soort, stand }: soort = null | "terug" | "pauze" | "daglimiet".
export function beoordeelCharley(stand, opties = {}) {
  const limiet = charleyDagLimiet({ ...opties, stand });
  if (stand.berichten > limiet) return { soort: "daglimiet", stand, limiet };
  if (stand.sindsVraag > REM.PAUZE_NA) return { soort: "pauze", stand, limiet };
  if (stand.sindsVraag > REM.TERUG_NA) return { soort: "terug", stand, limiet };
  return { soort: null, stand, limiet };
}

// Teksten in het maatje z'n stem (kindertaal, geen dev-jargon).
export function remTekst(soort, naam = "Charley") {
  if (soort === "pauze") {
    return `Ik help je graag verder zodra je een vraag hebt gedaan. 🐾 Doe eerst één som of vraag, dan praten we weer verder.`;
  }
  if (soort === "daglimiet") {
    return `Voor vandaag hebben we genoeg gekletst! 🐾 Morgen help ik je weer. Oefenen kan gewoon door — ${naam} kijkt mee.`;
  }
  return "";
}

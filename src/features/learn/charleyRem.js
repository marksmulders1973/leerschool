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
//   3. DAG_*     — gast-apparaat 40 berichten/dag, account 80, betaald
//                  Familie onbeperkt. Daarboven een vriendelijke pauze tot morgen.
// De teller "sinds vraag" gaat op 0 bij élk question_answered-event (utils.track).
// Server-backstop: api/tutor-chat.js telt per uid (20/dag, was 120 tot 22 sep) via ai_call_quota,
// voor het geval localStorage gewist wordt.
//
// Geen imports: utils.js importeert dit bestand (geen kringverwijzing).

const KEY = "lk_charley_dag";

export const REM = {
  TERUG_NA: 5,
  PAUZE_NA: 15,
  DAG_GAST: 40,
  DAG_ACCOUNT: 80,
};

function vandaag() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function lees() {
  const leeg = { dag: vandaag(), berichten: 0, sindsVraag: 0 };
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return leeg;
    const s = JSON.parse(raw);
    if (!s || s.dag !== leeg.dag) return leeg;
    return {
      dag: s.dag,
      berichten: Number(s.berichten) || 0,
      sindsVraag: Number(s.sindsVraag) || 0,
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
  s.berichten += 1;
  s.sindsVraag += 1;
  schrijf(s);
  return s;
}

// Het kind beantwoordde een échte vraag → het gesprek mag weer even.
export function noteerVraagBeantwoord() {
  const s = lees();
  if (s.sindsVraag === 0) return s;
  s.sindsVraag = 0;
  schrijf(s);
  return s;
}

export function charleyDagLimiet({ isAccount = false, isBetaald = false } = {}) {
  if (isBetaald) return Infinity;
  return isAccount ? REM.DAG_ACCOUNT : REM.DAG_GAST;
}

// Beoordeel het bericht dat het kind NU wil sturen (na noteerCharleyBericht).
// Returnt { soort, stand }: soort = null | "terug" | "pauze" | "daglimiet".
export function beoordeelCharley(stand, opties = {}) {
  const limiet = charleyDagLimiet(opties);
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

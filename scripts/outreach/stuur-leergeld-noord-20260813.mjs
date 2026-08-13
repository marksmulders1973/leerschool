// Leergeld-golf 1a — regio NOORD (16 stichtingen), 13 aug 2026.
// Mark-go 13 aug ("ik wil wel 50 mails versturen… welke kunnen wél").
// Timing: regio Noord start ma 17 aug weer → dit is hun laatste vakantieweek,
// precies zoals OUTREACH-VOORRAAD.md voorschrijft. Zuid volgt ~24 aug,
// Midden ~31 aug (zomervakantie 2026-regio's).
// Route: Resend vanaf hallo@leerkwartier.app, reply-to Mark's Gmail
// (Zapier-taken op; zelfde route als de Lelystad-bedankmail 12 aug).
// Tekst: het Squla-proof-sjabloon uit OUTREACH-VOORRAAD.md (§ Leergeld-rest,
// door Mark voorbereid 2 aug) — [BEVESTIG]-regel definitief: Inez bevestigde
// de Spark Fest-levering op 4 aug.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const PROEF = process.argv.includes("--proef");

// (A) = adres uit Wayback-archief → bounce apart bijhouden.
const BATCH = [
  { naam: "Leergeld Salland", email: "info@leergeldsalland.nl", opener: "Voedselbank Raalte raadde mij aan contact met u op te nemen. " },
  { naam: "Jeugdfonds Almelo", email: "jeugdfonds@jeugdfondsalmelo.nl", aanhef: "Beste team van Jeugdfonds Almelo" },
  { naam: "Leergeld Dinkelland", email: "info@leergelddinkelland.nl" },
  { naam: "Leergeld Eemsdelta", email: "info@leergeldeemsdelta.nl" },
  { naam: "Leergeld Haaksbergen", email: "info@leergeldhaaksbergen.nl" },
  { naam: "Leergeld Het Hoogeland", email: "coordinator@leergeldhoogeland.nl" },
  { naam: "Leergeld IJssel & Vecht", email: "info@samenoverijssel.nl" },
  { naam: "Leergeld Losser", email: "info@leergeldlosser.nl" },
  { naam: "Leergeld Midden Drenthe", email: "info@leergeldmiddendrenthe.nl" },
  { naam: "Leergeld Midden-Groningen", email: "leergeld.hs@gmail.com" },
  { naam: "Leergeld Noordoostpolder", email: "info@leergeldnoordoostpolder.nl" },
  { naam: "Leergeld Oldenzaal", email: "info@leergeldoldenzaal.nl" },
  { naam: "Leergeld Tubbergen", email: "info@leergeldtubbergen.nl" },
  { naam: "Leergeld Twenterand", email: "info@leergeldtwenterand.nl" },
  { naam: "Leergeld Westerkwartier-Noordenveld", email: "info@wn.leergeld.nl" },
  { naam: "Leergeld Zuid-Oost Groningen", email: "info@leergeldzuidoostgroningen.nl" },
];

const ONDERWERP = "Gratis Doorstroomtoets-oefenen voor uw gezinnen — zonder kosten, naast wat u al doet";

function tekst({ naam, aanhef, opener }) {
  return `${aanhef || `Beste team van ${naam}`},

${opener || ""}Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Oefenboeken kosten €30 en bijles €37 per uur; juist de gezinnen die u helpt, verdienen dezelfde voorbereiding als ieder ander.

Veel stichtingen ondersteunen gezinnen al met een oefenprogramma — Leerkwartier is daar geen vervanging van, maar een gratis aanvulling die u zónder kosten en zónder aanmelding aan álle gezinnen kunt doorgeven, ook de gezinnen die (nog) buiten een regeling vallen. Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd.

Dit doen andere organisaties al:
- Voedselbank Rotterdam toont Leerkwartier op de schermen in hun drie sociale supermarkten
- Voor het jubileumfestival van Leergeld Haarlemmermeer leverden wij 1.000 Leerkwartier-flyers voor de goodybags (festival oktober)
- Leergeld Apeldoorn-Voorst zet Leerkwartier in hun oktober-nieuwsbrief
- Voedselbank Alkmaar maakte samen met ons een flyer in eenvoudige taal

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting uw gezinnen — in een nieuwsbrief, een briefje of een poster? Ik maak alles kosteloos op maat, ook met uw logo.

Er zit geen addertje onder het gras: gratis in 2026, geen account nodig, geen reclame, en gezinnen die via uw organisatie komen houden ook 2027 gratis toegang via een eigen code. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;
}

const doel = PROEF ? [{ naam: "Leergeld Salland", email: "marksmulders1973@gmail.com", opener: "Voedselbank Raalte raadde mij aan contact met u op te nemen. " }] : BATCH;

let ok = 0, fout = 0;
for (const s of doel) {
  const body = {
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: [s.email],
    reply_to: "marksmulders1973@gmail.com",
    subject: ONDERWERP,
    text: tekst(s),
  };
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const j = await r.json().catch(() => ({}));
    if (r.ok) { ok++; console.log(`OK  ${s.naam} <${s.email}> id=${j.id || "?"}`); }
    else { fout++; console.log(`FOUT ${s.naam} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 150)}`); }
  } catch (e) {
    fout++; console.log(`FOUT ${s.naam}: ${e.message}`);
  }
  await new Promise((res) => setTimeout(res, 1300));
}
console.log(`\nKlaar: ${ok} verstuurd, ${fout} mislukt (van ${doel.length}).`);

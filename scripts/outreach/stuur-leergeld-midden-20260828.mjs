// Leergeld-golf 1c — regio MIDDEN (rest van de 55-lijst), vr 28 aug 2026.
// Timing: regio Midden terug van vakantie ma 31 aug → mail landt bovenin de inbox.
// Tekst = goedgekeurde Leergeld-Zuid-tekst (18 aug, stuur-batch14) + participatie-zin
// (idee #61, 20 aug — les van Oisterwijk: "wij doen meedoen, geen schoolse zaken").
// Dedup gecheckt tegen verzendlog: Noord-16 (13 aug) + Zuid-20 (18 aug) + Emmen (6 aug);
// herinnering Gorinchem/Bommelerwaard 13 aug was de VOEDSELBANK, niet Leergeld.
// (A) = adres uit Wayback-archief → bounce-risico, checken bij mail-check.
// Route: Resend/hallo@, reply-to Mark's Gmail. --dry = lijst tonen, --proef = 1 mail naar Mark.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const DRY = process.argv.includes("--dry");
const PROEF = process.argv.includes("--proef");

const BATCH = [
  { naam: "Meedoen in Rotterdam", email: "info@meedoeninrotterdam.nl" },
  { naam: "Leergeld 2stromenland", email: "info@leergeld2stromenland.nl" },
  { naam: "Leergeld Bommelerwaard e.o.", email: "info@leergeldbommelerwaard.nl" },
  { naam: "Leergeld De Bilt", email: "leergelddebilt@gmail.com" },
  { naam: "Leergeld De Ronde Venen", email: "info@leergeldderondevenen.nl" },
  { naam: "Leergeld De Stuwwal", email: "info@leergelddestuwwal.nl" },
  { naam: "Leergeld Groene Hart", email: "info@leergeldgroenehart.nl" },
  { naam: "Leergeld Houten", email: "info@leergeldhouten.nl" },
  { naam: "Leergeld IJsselstein", email: "info@leergeldijsselstein.nl" },
  { naam: "Leergeld Liemers-Doesburg", email: "info@leergelddeliemers.nl" },
  { naam: "Leergeld Doesburg", email: "info@leergelddoesburg.nl" },
  { naam: "Leergeld Lochem", email: "leergeldlochem@gmail.com" },
  { naam: "Leergeld Nieuwegein", email: "info@leergeldnieuwegein.nl" },          // (A)
  { naam: "Leergeld Oost Achterhoek", email: "info-leergeldachterhoek@lgoa.nl" },
  { naam: "Leergeld Oost Betuwe", email: "info@lgob.nl" },                        // (A)
  { naam: "Leergeld Soest-Baarn", email: "coordinator@leergeld-sb.nl" },          // (A)
  { naam: "Leergeld Stichtse Vecht", email: "info@leergeldstichtsevecht.nl" },    // (A)
  { naam: "Leergeld Vianen", email: "coordinator@leergeldvianen.nl" },
  { naam: "Leergeld Voorschoten", email: "info@leergeld-voorschoten.nl" },        // (A)
  { naam: "Leergeld Wassenaar", email: "info@leergeldwassenaar.nl" },             // (A)
];

const ONDERWERP = "Gratis Doorstroomtoets-oefenen voor uw gezinnen — zonder kosten, naast wat u al doet";

const tekst = ({ naam }) => `Beste team van ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Waar andere gezinnen €30 voor oefenboeken of €37 per uur voor bijles betalen, kost Leerkwartier niets — want juist de gezinnen die u helpt, verdienen dezelfde voorbereiding als ieder ander.

Net als een laptop of een schoolspullenpas is dit een leermiddel dat kinderen laat méédoen — aan de toets-voorbereiding die klasgenootjes wél kunnen betalen.

Veel stichtingen ondersteunen gezinnen al met een oefenprogramma — Leerkwartier is daar geen vervanging van, maar een gratis aanvulling die u zónder kosten en zónder aanmelding aan álle gezinnen kunt doorgeven, ook de gezinnen die (nog) buiten een regeling vallen. Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd.

Er zijn gelukkig al organisaties zoals de uwe die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting uw gezinnen — in een nieuwsbrief, een briefje of een poster? Een kant-en-klare poster staat al klaar (A3: leerkwartier.app/drukwerk/poster-a3.pdf · A4: leerkwartier.app/drukwerk/poster-a4.pdf) — en ik maak alles kosteloos digitaal op maat, ook met uw logo. Mag de poster blijven hangen minstens tot de Doorstroomtoets? Die is begin februari 2027 — juist in de weken ervóór zoeken ouders hulp.

Er zit geen addertje onder het gras: gratis in 2026, geen account nodig, geen reclame, en gezinnen die via uw organisatie komen houden ook 2027 gratis toegang via een eigen code. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

// Vangnet: geen dubbele adressen in de batch
const alle = BATCH.map((s) => s.email.toLowerCase());
const dubbel = alle.filter((e, i) => alle.indexOf(e) !== i);
if (dubbel.length) { console.error("DUBBELE ADRESSEN:", dubbel); process.exit(1); }

if (DRY) {
  BATCH.forEach((s, i) => console.log(`${String(i + 1).padStart(2)} ${s.naam} <${s.email}>`));
  console.log(`\nLeergeld-Midden: ${BATCH.length} mails (dry-run, niets verstuurd).`);
  process.exit(0);
}

const doel = PROEF ? [{ ...BATCH[0], email: "marksmulders1973@gmail.com" }] : BATCH;

let ok = 0, fout = 0;
for (const s of doel) {
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
        to: [s.email],
        reply_to: "marksmulders1973@gmail.com",
        subject: ONDERWERP,
        text: tekst(s),
      }),
    });
    const j = await r.json().catch(() => ({}));
    if (r.ok) { ok++; console.log(`OK  ${s.naam} <${s.email}>`); }
    else { fout++; console.log(`FOUT ${s.naam} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
  } catch (e) { fout++; console.log(`FOUT ${s.naam}: ${e.message}`); }
  await new Promise((res) => setTimeout(res, 1300));
}
console.log(`\nKlaar (Leergeld-Midden): ${ok} verstuurd, ${fout} mislukt (van ${doel.length}).`);

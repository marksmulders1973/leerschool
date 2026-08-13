// Vriendelijke herinnering (Mark-opdracht 13 aug): Gorinchem + Bommelerwaard
// kregen 10 jul de eerste mail, nooit reactie — buurt-banken van Mark (10-20
// min rijden). Zelfde goedgekeurde privacy-sjabloon als vandaag, met één
// extra openingszin ("mogelijk aan uw aandacht ontschoten").

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const BATCH = [
  { naam: "Voedselbank Gorinchem", email: "info@voedselbankgorinchem.nl" },
  { naam: "Voedselbank Bommelerwaard", email: "info@voedselbankbommelerwaard.nl" },
];

const ONDERWERP = "Gratis Doorstroomtoets-oefenen voor de gezinnen die u helpt";

const tekst = ({ naam }) => `Beste team van ${naam},

Begin juli stuurde ik u een mail over Leerkwartier — mogelijk is die in de vakantieperiode aan uw aandacht ontschoten, vandaar nog één keer mijn vraag.

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Waar andere gezinnen €30 voor oefenboeken of €37 per uur voor bijles betalen, kost Leerkwartier niets — want juist de gezinnen die u helpt, verdienen dezelfde voorbereiding als ieder ander.

Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd. Er zijn gelukkig al organisaties zoals de uwe die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting uw gezinnen — in een nieuwsbrief, een briefje of een poster bij het uitdeelpunt? Ik maak alles kosteloos digitaal op maat, ook met uw logo.

Er zit geen addertje onder het gras: gratis in 2026, geen account nodig, geen reclame, en gezinnen die via uw organisatie komen houden ook 2027 gratis toegang via een eigen code. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

let ok = 0, fout = 0;
for (const s of BATCH) {
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
    else { fout++; console.log(`FOUT ${s.naam} ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
  } catch (e) { fout++; console.log(`FOUT ${s.naam}: ${e.message}`); }
  await new Promise((res) => setTimeout(res, 1300));
}
console.log(`\nKlaar: ${ok} verstuurd, ${fout} mislukt (van ${BATCH.length}).`);

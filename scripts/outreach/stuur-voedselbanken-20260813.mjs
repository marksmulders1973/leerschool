// Voedselbanken-rest batch 1 — 30 banken, 13 aug 2026 (Mark-akkoord op concept
// + "verstuur er nu maar 30"). NIEUW SJABLOON (partner-privacy-regel 13 aug):
// géén partner-details meer, alleen "organisaties zoals de uwe" + bedankt.html;
// gratis-vergelijking i.p.v. prijzenlijstje; "kosteloos digitaal op maat".
// A/B-notitie: Leergeld-Noord-16 (13 aug ochtend) ging met de oude tekst —
// respons later vergelijken. Route: Resend, reply-to Mark's Gmail.
// Adressen: agent-verzameld 13 aug van voedselbankennederland.nl (bron-URL
// per adres in OUTREACH-VOORRAAD verzend-log), gededupliceerd tegen de
// 132 al-gemailde uit Gmail-sent.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const BATCH = [
  { naam: "Voedselbank Utrecht", email: "info@voedselbankutrecht.nl" },
  { naam: "Voedselbank Haaglanden", email: "info@voedselbankhaaglanden.nl" },
  { naam: "Voedselbank Leidschendam-Voorburg", email: "info@voedselbanklv.nl" },
  { naam: "Voedselbank Almelo", email: "info@voedselbankalmelo.nl" },
  { naam: "Voedselbank Hart van Drenthe", email: "info@voedselbankhvd.nl" },
  { naam: "Voedselbank IJmond-Noord", email: "informatie@voedselbankijmond.nl" },
  { naam: "Voedselbank Bladel", email: "voedselbankbladelbestuur@gmail.com" },
  { naam: "Voedselbank Westelijke Mijnstreek", email: "info@voedselbank-westelijke-mijnstreek.nl" },
  { naam: "Voedselbank Limburg-Noord", email: "welkom@voedselbanklimburg-noord.nl" },
  { naam: "Voedselbank Schouwen-Duiveland", email: "info@voedselbanksd.nl" },
  { naam: "Voedselbank De Baronie", email: "gb@stillearmoede.org" },
  { naam: "Voedselbank Ridderkerk", email: "info@vbridderkerk.nl" },
  { naam: "Voedselbank Vianen", email: "info-vianen@voedselbankvijfheerenlanden.nl" },
  { naam: "Voedselbank Veldhoven", email: "info@voedselbankveldhoven.nl" },
  { naam: "Voedselbank Nuenen", email: "secretarisvbnuenen@gmail.com" },
  { naam: "Voedselbank Deurne", email: "info@voedselbankdeurne.nl" },
  { naam: "Voedselbank Aalst-Waalre", email: "info@voedselbankaalstwaalre.nl" },
  { naam: "Voedselbank Bergeijk", email: "info@voedselbankbergeijk.nl" },
  { naam: "Voedselbank Alblasserdam", email: "info@voedselbankalblasserdam.nl" },
  { naam: "Voedselbank Papendrecht", email: "contact@voedselbankpapendrecht.nl" },
  { naam: "Voedselbank Sliedrecht", email: "secretariaat@voedselbanksliedrecht.nl" },
  { naam: "Voedselbank Hendrik-Ido-Ambacht", email: "info@voedselbankhiambacht.nl" },
  { naam: "Voedselbank Hardinxveld-Giessendam", email: "secretaris@voedselbank-hardinxveld-giessendam.nl" },
  { naam: "Voedselbank Altena", email: "info@voedselbankaltena.nl" },
  { naam: "Voedselbank Moerdijk", email: "info@voedselbankmoerdijk.nl" },
  { naam: "Voedselbank Dongen", email: "info@voedselbankdongen.nl" },
  { naam: "Voedselbank Gilze-Rijen", email: "info@voedselbankgilzerijen.nl" },
  { naam: "Voedselbank Loon op Zand", email: "info@voedselbankloz.nl" },
  { naam: "Voedselbank Lansingerland", email: "info@voedselbanklansingerland.nl" },
  { naam: "Voedselbank Zuidplas", email: "info@voedselbank-zuidplas.nl" },
];

const ONDERWERP = "Gratis Doorstroomtoets-oefenen voor de gezinnen die u helpt";

const tekst = ({ naam }) => `Beste team van ${naam},

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
    else { fout++; console.log(`FOUT ${s.naam} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
  } catch (e) { fout++; console.log(`FOUT ${s.naam}: ${e.message}`); }
  await new Promise((res) => setTimeout(res, 1300));
}
console.log(`\nKlaar: ${ok} verstuurd, ${fout} mislukt (van ${BATCH.length}).`);

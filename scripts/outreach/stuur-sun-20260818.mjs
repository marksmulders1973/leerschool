// SUN-noodhulpbureaus — 36 bureaus, 18-19 aug 2026 (Mark-go "stuur ook de
// volgende batch", 18 aug). Adressen: docs/outreach/sun-bureaus.md (agent-
// geverifieerd 18 aug op de eigen sites). Almere overgeslagen (alleen
// behandelaar-adres, geen algemeen contactpunt).
// ⚠️ SUN-bureaus werken uitsluitend via hulpverleners (geen direct client-
// contact) → de vraag-alinea richt zich op "noemen richting de hulpverleners
// in uw netwerk" (Mark-akkoord op concept-alinea 18 aug).
// Resend free tier = 100/dag; 18 aug waren er al 71 verstuurd → DEEL 1 = 29
// vandaag, DEEL 2 = 7 (de 4 onzekere (?)-adressen + rest) op 19 aug via
// vlag --deel2. Route: Resend/hallo@, reply-to Mark's Gmail.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const DEEL2 = process.argv.includes("--deel2");
const PROEF = process.argv.includes("--proef");

// Deel 1 — 29 bevestigde adressen (18 aug)
const DEEL_1 = [
  { naam: "SUN Weert", email: "info@sunweert.nl" },
  { naam: "SUN Zoetermeer", email: "info@sunzoetermeer.nl" },
  { naam: "Sociale Fondsen Den Haag", email: "info@socialefondsendenhaag.nl" },
  { naam: "SUN Leiden", email: "info@sunleiden.nl" },
  { naam: "SUN Rijswijk", email: "info@sunrijswijk.nl" },
  { naam: "het Fonds Bijzondere Noden Rotterdam", email: "info@fbnr.nl" },
  { naam: "Noodfonds Amsterdam", email: "info@noodfondsamsterdam.nl" },
  { naam: "SUN Rheden e.o.", email: "bureau@sunrheden.nl" },
  { naam: "SUN Liemers-Achterhoek", email: "info@sunliemersachterhoek.nl" },
  { naam: "Stichting Noodhulp Utrecht", email: "info.stichtingnu@utrecht.nl" },
  { naam: "het Fonds Bijzondere Noden Enschede", email: "info@fbne.nl" },
  { naam: "SUN Twente", email: "info@suntwente.nl" },
  { naam: "SUN Friesland", email: "info@sunfriesland.nl" },
  { naam: "SUN Groningen/Drenthe", email: "info@sungroningendrenthe.nl" },
  { naam: "HiBO Breda", email: "hibo.breda@protonmail.com" },
  { naam: "FUN Haarlem", email: "info@urgentenodenhaarlem.nl" },
  { naam: "SUN Waterweg", email: "info@sunwaterweg.nl" },
  { naam: "SUN Nissewaard", email: "info@sunnissewaard.nl" },
  { naam: "SUN Hilversum", email: "info@sunhilversum.nl" },
  { naam: "SUN Drechtsteden", email: "aanvragen@sundrechtsteden.nl" },
  { naam: "SUN Krimpenerwaard", email: "info@sunkrimpenerwaard.nl" },
  { naam: "SUN Lekstroom", email: "info@sunlekstroom.nl" },
  { naam: "SUN Delft", email: "info@sundelft.nl" },
  { naam: "SUN-U (Urgente Noden Uithoorn)", email: "info@urgentenodenuithoorn.nl" },
  { naam: "SUN Middelburg", email: "info@sunmiddelburg.nl" },
  { naam: "SUN Midden-Limburg", email: "info@sunmidden-limburg.nl" },
  { naam: "SUN Goes", email: "info@sungoes.nl" },
  { naam: "SUN Goeree-Overflakkee", email: "coordinator@sungoereeoverflakkee.nl" },
  { naam: "SUN Veenendaal", email: "info@sunveenendaal.nl" },
];

// Deel 2 — 7 rest (19 aug): 3 bevestigd + 4 met (?)-zekerheid → bounces checken
const DEEL_2 = [
  { naam: "SUN De Ronde Venen", email: "aanvragen@sunderondevenen.nl" },
  { naam: "SUN Gelderland-Zuid", email: "info@sungelderland-zuid.nl" },
  { naam: "SUN Zutphen", email: "info@sunzutphen.nl" },
  { naam: "Noodfonds Zwolle e.o.", email: "info@noodfondszwolle.nl" },
  { naam: "het Fonds Bijzondere Noden Huizen", email: "info@fondsbijzonderenodenhuizen.nl" },
  { naam: "SUN Amstelveen", email: "info@sunamstelveen.nl" },
  { naam: "het Sociaal Fonds Leidschendam-Voorburg", email: "info@ssflv.nl" },
];

const ONDERWERP = "Gratis Doorstroomtoets-oefenen — een tip voor de hulpverleners in uw netwerk";

const tekst = ({ naam }) => `Beste team van ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Waar andere gezinnen €30 voor oefenboeken of €37 per uur voor bijles betalen, kost Leerkwartier niets — want juist kinderen uit gezinnen in nood verdienen dezelfde voorbereiding als ieder ander.

Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd. Er zijn gelukkig al organisaties die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Ik weet dat u als noodhulpbureau via hulpverleners werkt, niet rechtstreeks met gezinnen. Daarom is mijn vraag klein: zou u Leerkwartier willen noemen richting de hulpverleners in uw netwerk? Zij zitten aan tafel bij gezinnen waar geen geld is voor oefenboeken of bijles — en dit is iets wat zij gratis kunnen doorgeven, zonder aanvraag of formulier. Een korte vermelding in uw nieuwsbrief of op uw site is al genoeg; ik maak alles kosteloos digitaal op maat, ook met uw logo. Er staat ook een kant-en-klare poster klaar (A3: leerkwartier.app/drukwerk/poster-a3.pdf · A4: leerkwartier.app/drukwerk/poster-a4.pdf) — handig voor een wachtruimte of spreekkamer, het liefst tot de Doorstroomtoets van begin februari 2027, want juist in de weken ervóór zoeken ouders hulp.

Er zit geen addertje onder het gras: geen account nodig, geen reclame, geen doorverkoop van gegevens. En eerlijk over de toekomst: de leer-kern blijft gratis — gegarandeerd t/m 2031, en die belofte verlengen we telkens. Alleen voor extra's die veel AI gebruiken komt er later een kleine betaalde optie voor gezinnen en leerkrachten — zo dekken we de AI-kosten zonder reclame. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

const lijst = DEEL2 ? DEEL_2 : DEEL_1;
const doel = PROEF ? [{ ...lijst[0], email: "marksmulders1973@gmail.com" }] : lijst;

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
console.log(`\nKlaar (${DEEL2 ? "deel 2" : "deel 1"}): ${ok} verstuurd, ${fout} mislukt (van ${doel.length}).`);

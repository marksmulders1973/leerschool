// Mail-week di 18 aug 2026 — batch 1-4 (Mark-go "go 1-4" in chat, 18 aug).
// 1. Leergeld-Zuid (20)     — Squla-proof-sjabloon ZONDER partner-bullets
//                             (privacy-regel 13 aug) + poster + hang-duur-regel.
// 2. Fondsen (26)           — JFSC 15 regionaal + 11 landelijk; vraag-alinea
//                             "nieuwsbrief / bevestigingsmail bij toekenning /
//                             tips-pagina" (Mark-akkoord op concept 18 aug).
// 3. Bibliotheken-rest (21) — privacy-sjabloon + leesladder-zin + poster/hang-duur.
// 4. Voedselbanken-rest (4) — exacte 13-aug-tekst + poster-zin (14-aug-standaard).
//    (Utrechtse Heuvelrug: site onbereikbaar → overgeslagen, later checken.)
// Route: Resend vanaf hallo@leerkwartier.app, reply-to Mark's Gmail.
// Totaal 71 — onder de Resend-daglimiet (100).

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const PROEF = process.argv.includes("--proef");

/* ── batch 1: Leergeld-Zuid (regio Zuid t/m 23 aug vakantie = laatste week) ── */
const LEERGELD = [
  { naam: "Leergeld Asten-Someren", email: "info@leergeld-asten-someren.nl" },
  { naam: "Leergeld Beesel", email: "info@leergeldbeesel.nl" },
  { naam: "Leergeld Best e.o.", email: "contact.leergeld@gmail.com" },
  { naam: "Leergeld Boxtel", email: "info@leergeldboxtel.nl" },
  { naam: "Leergeld Deurne", email: "info@leergelddeurne.nl" },
  { naam: "Leergeld Geldrop-Mierlo en Heeze-Leende", email: "info@leergeldgeldrop.nl" },
  { naam: "Leergeld Gemert e.o.", email: "contact@gemert-bakel.leergeld.nl" },
  { naam: "Leergeld Goirle en Riel", email: "info@leergeld-goirle-riel.nl" },
  { naam: "Leergeld Heusden", email: "info@leergeldheusden.nl" },
  { naam: "Leergeld Hilvarenbeek", email: "info@leergeldhilvarenbeek.nl" },
  { naam: "Leergeld Horst aan de Maas", email: "info@leergeldhorstaandemaas.nl" },
  { naam: "Leergeld Land van Cuijk", email: "info@leergeldlandvancuijk.nl" },
  { naam: "Leergeld Leudal-Maasgouw", email: "stichtingleergeldlm@gmail.com" },
  { naam: "Leergeld Nuenen", email: "leergeld@onsnet.nu" },
  { naam: "Leergeld Oisterwijk", email: "info@leergeldoisterwijk.nl" },       // (A)
  { naam: "Leergeld Peel en Maas", email: "info@leergeldpeelenmaas.nl" },     // (A)
  { naam: "Leergeld Valkenswaard en Omstreken", email: "info@leergeldvalkenswaard-waalre.nl" },
  { naam: "Leergeld Veldhoven en De Kempen", email: "info@leergeldvdk.nl" },  // (A)
  { naam: "Leergeld Venlo", email: "info@leergeldvenlo.nl" },                 // (A)
  { naam: "Leergeld Vught", email: "info@leergeldvught.nl" },                 // (A)
];

const leergeldTekst = ({ naam }) => `Beste team van ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Waar andere gezinnen €30 voor oefenboeken of €37 per uur voor bijles betalen, kost Leerkwartier niets — want juist de gezinnen die u helpt, verdienen dezelfde voorbereiding als ieder ander.

Veel stichtingen ondersteunen gezinnen al met een oefenprogramma — Leerkwartier is daar geen vervanging van, maar een gratis aanvulling die u zónder kosten en zónder aanmelding aan álle gezinnen kunt doorgeven, ook de gezinnen die (nog) buiten een regeling vallen. Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd.

Er zijn gelukkig al organisaties zoals de uwe die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting uw gezinnen — in een nieuwsbrief, een briefje of een poster? Een kant-en-klare poster staat al klaar (A3: leerkwartier.app/drukwerk/poster-a3.pdf · A4: leerkwartier.app/drukwerk/poster-a4.pdf) — en ik maak alles kosteloos digitaal op maat, ook met uw logo. Mag de poster blijven hangen minstens tot de Doorstroomtoets? Die is begin februari 2027 — juist in de weken ervóór zoeken ouders hulp.

Er zit geen addertje onder het gras: gratis in 2026, geen account nodig, geen reclame, en gezinnen die via uw organisatie komen houden ook 2027 gratis toegang via een eigen code. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

/* ── batch 2: fondsen (JFSC regionaal + landelijke kinderarmoede-fondsen) ── */
const FONDSEN = [
  { naam: "Jeugdfonds Sport & Cultuur Groningen", email: "groningen@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Friesland", email: "friesland@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Drenthe", email: "drenthe@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Overijssel", email: "overijssel@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Flevoland", email: "lelystad@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Noord-Holland", email: "noord-holland@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Haarlem", email: "haarlem@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Amsterdam", email: "amsterdam@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Utrecht", email: "utrecht@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Zuid-Holland", email: "zuid-holland@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Rotterdam", email: "rotterdam@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Zeeland", email: "zeeland@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Gelderland", email: "gelderland@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Brabant", email: "brabant@jeugdfondssportencultuur.nl" },
  { naam: "Jeugdfonds Sport & Cultuur Limburg", email: "limburg@jeugdfondssportencultuur.nl" },
  { naam: "Nationaal Fonds Kinderhulp", email: "info@kinderhulp.nl" },
  { naam: "Stichting Leergeld Nederland", email: "info@leergeld.nl" },
  { naam: "Stichting Jarige Job", email: "info@stichtingjarigejob.nl" },
  { naam: "het Jeugdeducatiefonds", email: "info@jeugdeducatiefonds.nl" },
  { naam: "Kinderen van de Voedselbank", email: "info@kinderenvandevoedselbank.nl" },
  { naam: "Kinderzwerfboek", email: "info@kinderzwerfboek.nl" },
  { naam: "Stichting Babyspullen", email: "gemeenten@stichtingbabyspullen.nl" },
  { naam: "Stichting Kinder Cadeau", email: "info@stichtingkindercadeau.nl" },
  { naam: "de LINDA.foundation", email: "info@lindafoundation.nl" },
  { naam: "het Armoedefonds", email: "info@armoedefonds.nl" },
  { naam: "De Vakantiebank", email: "pim@devakantiebank.nl" },
];

const fondsenTekst = ({ naam }) => `Beste team van ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Waar andere gezinnen €30 voor oefenboeken of €37 per uur voor bijles betalen, kost Leerkwartier niets — want juist de gezinnen die bij u aankloppen, verdienen dezelfde voorbereiding als ieder ander.

Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd. Er zijn gelukkig al organisaties zoals de uwe die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting de gezinnen die u helpt — bijvoorbeeld in een nieuwsbrief, een bevestigingsmail bij een toekenning, of op uw tips-pagina? Juist een gezin dat bij u aanklopt, heeft vaak ook een kind in groep 6, 7 of 8 dat naar de Doorstroomtoets toewerkt. Ik maak alles kosteloos digitaal op maat, ook met uw logo.

Er zit geen addertje onder het gras: geen account nodig, geen reclame, geen doorverkoop van gegevens. En eerlijk over de toekomst: de leer-kern blijft gratis. Alleen voor extra's die veel AI gebruiken komt er later een kleine betaalde optie voor gezinnen en leerkrachten — zo dekken we de AI-kosten zonder reclame. Gezinnen die via uw organisatie komen, houden óók in 2027 gratis toegang via een eigen code. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

/* ── batch 3: bibliotheken-rest (verzamelde adressen; persoonlijke adressen
      kunnen bouncen → log bijhouden) ── */
const BIEB = [
  { naam: "Stadkamer Zwolle", email: "hallo@stadkamer.nl" },
  { naam: "Rozet Arnhem", email: "info@rozet.nl" },
  { naam: "de Bibliotheek Deventer", email: "klantenservice@bibliotheekdeventer.nl" },
  { naam: "SCHUNCK Heerlen", email: "info@schunck.nl" },
  { naam: "Theek 5", email: "info@theek5.nl" },
  { naam: "Bibliocenter", email: "info@bibliocenter.nl" },
  { naam: "BiblioNu", email: "info@biblionu.nl" },
  { naam: "de Bibliotheek De Kempen", email: "info@bibliotheekdekempen.nl" },
  { naam: "de Bibliotheek Oosterschelde", email: "secretariaat@bibliotheekoosterschelde.nl" },
  { naam: "Biblionet Drenthe", email: "klantenservice@biblionetdrenthe.nl" },
  { naam: "Bibliotheken Mar en Fean", email: "info@bibliothekenmarenfean.nl" },
  { naam: "de Bibliotheek Zuidoost Fryslân", email: "m.dejong@bzof.nl" },
  { naam: "de Bibliotheek Noord Fryslân", email: "p.schreuder@bnfrl.nl" },
  { naam: "de Bibliotheek Bollenstreek", email: "lisse@bibliotheekbollenstreek.nl" },
  { naam: "de Zoomerij (Veluwezoom)", email: "info@dezoomerij.nl" },
  { naam: "de Bibliotheek Oost-Achterhoek", email: "ton.mengerink@oostachterhoek.nl" },
  { naam: "de Bibliotheek Oostland", email: "pijnacker@bibliotheekoostland.nl" },
  { naam: "de Bibliotheek aan de Vliet", email: "jdiemel@bibliotheekaandevliet.nl" },
  { naam: "Regiobibliotheek Het Groene Hart", email: "jantine@regiobibliotheekhetgroenehart.nl" },
  { naam: "de Bibliotheek Lek & IJssel", email: "annemariedoesburg@bibliotheeklekijssel.nl" },
  { naam: "de Bibliotheek Z-O-U-T", email: "rtiemstra@rbzout.nl" },
];

const biebTekst = ({ naam }) => `Beste team van ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Waar sommige gezinnen €30 voor oefenboeken of €37 per uur voor bijles betalen, kost Leerkwartier niets — want elk kind verdient dezelfde voorbereiding, ook als er thuis geen geld voor is.

Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd. Er zijn gelukkig al organisaties die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting uw jonge bezoekers en hun ouders — in een nieuwsbrief, bij de jeugdafdeling of met een poster? Een kant-en-klare poster staat al klaar (A3: leerkwartier.app/drukwerk/poster-a3.pdf · A4: leerkwartier.app/drukwerk/poster-a4.pdf) — en ik maak alles kosteloos digitaal op maat, ook met uw logo. Mag de poster blijven hangen minstens tot de Doorstroomtoets? Die is begin februari 2027 — juist in de weken ervóór zoeken ouders hulp. Voor de leesliefhebbers is er bovendien de gratis Leesladder (leerkwartier.app/leesladder): leesplezier en begrijpend lezen in één.

Er zit geen addertje onder het gras: geen account nodig, geen reclame, geen doorverkoop van gegevens. En eerlijk over de toekomst: de leer-kern blijft gratis. Alleen voor extra's die veel AI gebruiken komt er later een kleine betaalde optie — zo dekken we de kosten zonder reclame. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

/* ── batch 4: voedselbanken-rest (Utrechtse Heuvelrug overgeslagen: site down) ── */
const VB = [
  { naam: "Voedselbank IJssel en Lek", email: "wgvbkw@gmail.com" },
  { naam: "Voedselbank De Ronde Venen", email: "info@voedselbankderondevenen.nl" },
  { naam: "Voedselbank Kromme Rijn", email: "info@voedselbankkrommerijn.nl" },
  { naam: "Voedselbank Montfoort", email: "voedselbankmontfoort@gmail.com" },
];

const vbTekst = ({ naam }) => `Beste team van ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Waar andere gezinnen €30 voor oefenboeken of €37 per uur voor bijles betalen, kost Leerkwartier niets — want juist de gezinnen die u helpt, verdienen dezelfde voorbereiding als ieder ander.

Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd. Er zijn gelukkig al organisaties zoals de uwe die met ons meedoen — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting uw gezinnen — in een nieuwsbrief, een briefje of een poster bij het uitdeelpunt? Een kant-en-klare poster staat al klaar (A3: leerkwartier.app/drukwerk/poster-a3.pdf · A4: leerkwartier.app/drukwerk/poster-a4.pdf) — en ik maak alles kosteloos digitaal op maat, ook met uw logo. Mag de poster blijven hangen minstens tot de Doorstroomtoets? Die is begin februari 2027 — juist in de weken ervóór zoeken ouders hulp.

Er zit geen addertje onder het gras: gratis in 2026, geen account nodig, geen reclame, en gezinnen die via uw organisatie komen houden ook 2027 gratis toegang via een eigen code. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

Meer over ons: leerkwartier.app/voor-organisaties.html · linkedin.com/company/leerkwartier

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

/* ── versturen ── */
const BATCHES = [
  { label: "Leergeld-Zuid", lijst: LEERGELD, tekst: leergeldTekst, onderwerp: "Gratis Doorstroomtoets-oefenen voor uw gezinnen — zonder kosten, naast wat u al doet" },
  { label: "Fondsen", lijst: FONDSEN, tekst: fondsenTekst, onderwerp: "Gratis Doorstroomtoets-oefenen voor de gezinnen die u helpt" },
  { label: "Bibliotheken", lijst: BIEB, tekst: biebTekst, onderwerp: "Gratis Doorstroomtoets-oefenen voor uw jonge bezoekers" },
  { label: "Voedselbanken", lijst: VB, tekst: vbTekst, onderwerp: "Gratis Doorstroomtoets-oefenen voor de gezinnen die u helpt" },
];

let ok = 0, fout = 0, totaal = 0;
for (const b of BATCHES) {
  const doel = PROEF ? [{ ...b.lijst[0], email: "marksmulders1973@gmail.com" }] : b.lijst;
  console.log(`\n── ${b.label} (${doel.length}) ──`);
  for (const s of doel) {
    totaal++;
    try {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
          to: [s.email],
          reply_to: "marksmulders1973@gmail.com",
          subject: b.onderwerp,
          text: b.tekst(s),
        }),
      });
      const j = await r.json().catch(() => ({}));
      if (r.ok) { ok++; console.log(`OK  ${s.naam} <${s.email}>`); }
      else { fout++; console.log(`FOUT ${s.naam} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
    } catch (e) { fout++; console.log(`FOUT ${s.naam}: ${e.message}`); }
    await new Promise((res) => setTimeout(res, 1300));
  }
}
console.log(`\nKlaar: ${ok} verstuurd, ${fout} mislukt (van ${totaal}).`);

// Onderwijskoepels/schoolbesturen — golf 0+1, 25 aug 2026 (Mark-akkoord op
// definitieve tekst: "akkoord, verstuur maar, en t liefst naar ook nog andere
// scholen"). Sjabloon + regels: docs/outreach/ONDERWIJSKOEPELS-VOORWERK.md.
// Kern-beloftes in de tekst (vastgelegd 25 aug):
//   - leerkracht-functies 2 jaar kosteloos testen/gebruiken (t/m zomer 2028)
//   - GEEN demo-aanbod (zelf proberen + "er wordt gewerkt aan een demo-video")
//   - founding-alinea ("een van de eerste schoolbesturen")
// Adressen: ALLEEN geverifieerd van de eigen bestuurssite (nooit verzinnen).
// Route: Resend/hallo@, reply-to Mark's Gmail. --dry = lijst tonen.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const DRY = process.argv.includes("--dry");
const GOLF1 = process.argv.includes("--golf1");

// Golf 0 — de warme eerste (bekeek Mark's LinkedIn 17 aug)
const GOLF_0 = [
  { naam: "De Hoeksche School", email: "info@dehoekscheschool.nl", scholen: "ruim twintig" },
];

// Golf 1 — grootste PO-besturen, adressen site-geverifieerd (agent 25 aug),
// aan te vullen vóór verzending via --golf1.
const GOLF_1 = [];

const onderwerp = (s) => `Gratis Doorstroomtoets-oefenen voor de scholen van ${s.naam}`;

const tekst = (s) => `Beste bestuur van ${s.naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier (leerkwartier.app): een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag een kwartier oefenen voor de Doorstroomtoets — met uitleg die stééds eenvoudiger wordt zolang het kwartje nog niet valt.

Ik benader u bewust als bestuur, en niet uw ${s.scholen} scholen los: vindt ${s.naam} het de moeite waard, dan kunt u het in één keer beschikbaar stellen aan al uw scholen — of gewoon aan de leerkrachten die er iets aan hebben. Geen verplichting, geen account nodig, geen reclame, geen doorverkoop van gegevens.

Wat Leerkwartier anders maakt: bij een fout krijgt een kind niet "fout, volgende", maar dezelfde vraag in drie steeds eenvoudiger stappen uitgelegd. Een leerkracht kan bovendien gericht een oefening klaarzetten die persoonlijk bij een leerling verschijnt. Alles draait om begrijpen, niet om afraffelen.

Twee dingen wil ik eerlijk zeggen. De app is jong en door één persoon gemaakt — daardoor zijn verbeterpunten juist wélkom, en kan ik aanpassingen die uw scholen helpen vaak binnen een paar dagen doorvoeren. En eerlijk over kosten: voor gezinnen blijft de leer-kern gratis (gegarandeerd t/m 2031). De leerkracht-functies gaan op termijn iets kosten, maar de komende twee jaar kunt u ze met al uw scholen kosteloos testen en gebruiken — uw feedback is voor mij in deze fase meer waard dan een factuur.

U zou daarmee een van de éérste schoolbesturen zijn die met Leerkwartier werkt. Dat heeft een voordeel dat grote aanbieders niet kunnen geven: wensen van uw leerkrachten komen vooraan in de bouwlijst. Al is het maar één groep-8-leerkracht die het een paar weken probeert — daar leer ik het meest van.

Organisaties in onderwijs en armoedebestrijding doen al mee — een overzicht staat op leerkwartier.app/bedankt.html. Voor leerkrachten is er een aparte pagina (leerkwartier.app/voor-organisaties.html) en een kant-en-klare flyer/poster die ik kosteloos op maat maak, ook met uw logo.

Zelf proberen kan direct op leerkwartier.app — zonder account, gewoon in de browser (er wordt ook gewerkt aan een korte demo-video). En om het intern delen makkelijk te maken staat er een kant-en-klaar pakketje online: beeld (leerkwartier.app/drukwerk/nieuwsbrief-beeld.png) · one-pager (leerkwartier.app/drukwerk/Leerkwartier-nieuwsbrief-beeld.pdf) · tekstblokje (leerkwartier.app/drukwerk/nieuwsbrief-tekst.txt).

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

const lijst = GOLF1 ? GOLF_1 : GOLF_0;
const naam = GOLF1 ? "golf 1" : "golf 0 (De Hoeksche School)";

if (!lijst.length) { console.error(`${naam}: lijst is leeg`); process.exit(1); }

if (DRY) {
  lijst.forEach((s, i) => console.log(`${String(i + 1).padStart(2)} ${s.naam} <${s.email}> (${s.scholen} scholen)`));
  console.log(`\n${naam}: ${lijst.length} mails (dry-run, niets verstuurd).`);
  process.exit(0);
}

let ok = 0, fout = 0;
for (const s of lijst) {
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
        to: [s.email],
        reply_to: "marksmulders1973@gmail.com",
        subject: onderwerp(s),
        text: tekst(s),
      }),
    });
    const j = await r.json().catch(() => ({}));
    if (r.ok) { ok++; console.log(`OK  ${s.naam} <${s.email}>`); }
    else { fout++; console.log(`FOUT ${s.naam} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
  } catch (e) { fout++; console.log(`FOUT ${s.naam}: ${e.message}`); }
  await new Promise((res) => setTimeout(res, 1300));
}
console.log(`\nKlaar (${naam}): ${ok} verstuurd, ${fout} mislukt (van ${lijst.length}).`);

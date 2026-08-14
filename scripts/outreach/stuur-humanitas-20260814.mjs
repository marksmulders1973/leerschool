// Humanitas golf 1 — eerste 50 van 73 afdelingen, 14 aug 2026 (Mark-go op
// definitieve tekst na 2 aanpassingen: (1) eerlijk verdienmodel-alinea
// "leer-kern blijft gratis; AI-extra's later betaald voor gezinnen/leerkrachten",
// (2) sociaal bewijs "heel wat voedselbanken" zonder namen → bedankt.html.
// Nieuw sinds 14 aug: poster A3+A4-links standaard in outreach.
// ⭐-afdelingen (jeugd/gezin: Homestart, taalmaatjes, Get a Grip) vooraan.
// Rest (23) = batch ma 17 aug. Tempo-regel Mark 14 aug: ~50 per dag.
// Route: Resend vanaf hallo@leerkwartier.app (ontvangt sinds 14 aug ook,
// forwardemail→Gmail), reply-to Mark's Gmail. Adressen: docs/outreach/
// humanitas-afdelingen.md (agent-geverifieerd 29 jul), batch-JSON hiernaast.

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const hier = dirname(fileURLToPath(import.meta.url));
const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const BATCH = JSON.parse(readFileSync(join(hier, "humanitas-batch-20260814.json"), "utf8"));

const ONDERWERP = "Gratis Doorstroomtoets-oefenen voor de gezinnen die u helpt";

const tekst = ({ naam }) => `Beste team van Humanitas ${naam},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier: een gratis leer-app waarmee kinderen uit groep 6, 7 en 8 elke dag kunnen oefenen voor de Doorstroomtoets — met uitleg die simpeler wordt zolang het kwartje nog niet valt. Waar andere gezinnen €30 voor oefenboeken of €37 per uur voor bijles betalen, kost Leerkwartier niets — want juist de gezinnen die u ondersteunt, verdienen dezelfde voorbereiding als ieder ander.

Het verschil zit in de uitleg: bij een fout krijgt het kind niet 'fout, volgende', maar dezelfde som in drie steeds eenvoudiger stappen uitgelegd. Gelukkig steunen al heel wat voedselbanken en andere maatschappelijke organisaties dit initiatief — wie dat zijn ziet u op leerkwartier.app/bedankt.html.

Mijn vraag is klein: zou u leerkwartier.app willen noemen richting de gezinnen die u ondersteunt — via uw vrijwilligers, in een nieuwsbrief of met een poster op uw locatie? Een kant-en-klare poster staat al klaar (A3: leerkwartier.app/drukwerk/poster-a3.pdf · A4: leerkwartier.app/drukwerk/poster-a4.pdf) — en ik maak alles kosteloos digitaal op maat, ook met uw logo.

Er zit geen addertje onder het gras: geen account nodig, geen reclame, geen doorverkoop van gegevens. En eerlijk over de toekomst: de leer-kern blijft gratis. Alleen voor extra's die veel AI gebruiken komt er later een kleine betaalde optie voor gezinnen en leerkrachten — zo dekken we de AI-kosten zonder reclame. Gezinnen die via uw organisatie komen, houden óók in 2027 gratis toegang via een eigen code. Nieuw: met de gratis Kwartiercheck ziet een ouder in één kwartier waar hun kind staat — leerkwartier.app/kwartiercheck.

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
    if (r.ok) { ok++; console.log(`OK  Humanitas ${s.naam} <${s.email}>`); }
    else { fout++; console.log(`FOUT Humanitas ${s.naam} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
  } catch (e) { fout++; console.log(`FOUT Humanitas ${s.naam}: ${e.message}`); }
  await new Promise((res) => setTimeout(res, 1300));
}
console.log(`\nKlaar: ${ok} verstuurd, ${fout} mislukt (van ${BATCH.length}).`);

// Bedankmail + deelpakket Speelgoedbank De Meern (Mark "stuur nu", wo 21 okt 2026 11:10).
// Antwoord in de bestaande thread (In-Reply-To/References), vanaf hallo@ via Resend,
// flyer-DEMEERN2027.pdf als bijlage. Concept: docs/outreach/DEMEERN-CONCEPT.md
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
const ROOT = join(import.meta.dirname, "..", "..");
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) throw new Error("geen RESEND_API_KEY");

// Message-ID van Jolanda's mail (uit de RAW-headers, base64-stuk gedecodeerd zodat er geen typefout in kan zitten)
const msgIdRegel = Buffer.from("TWVzc2FnZS1JRDogPENBTVJVSE9oM1JVVU9qX1ZBMCtkTDRhQ3hXWVl1cDB0czFuQjI0N3c0eXBrZXE1MFIyUUBtYWlsLmdtYWlsLmNvbT4", "base64").toString();
const inReplyTo = msgIdRegel.match(/<[^>]+>/)[0];
const origineel = "<010201a15844c748-dab64091-acf0-4e2e-a313-d8b766c9e32a-000000@eu-west-1.amazonses.com>";
console.log("In-Reply-To:", inReplyTo);

const tekst = `Dag Jolanda,

Dank je wel, wat fijn dat je het met de gezinnen wilt delen!

Ik heb een eigen code voor Speelgoedbank De Meern gemaakt: DEMEERN2027. Gezinnen die daarmee binnenkomen krijgen alle extra's van het Familie-pakket gratis tot en met 2028 (het oefenen zelf is sowieso gratis, tot en met 2031). En jij ziet dan dat het via jullie komt.

Hieronder staat alles kant-en-klaar, kies wat bij jullie past:

1. Een berichtje om door te sturen (WhatsApp, app of mail aan ouders):

   Gratis oefenen voor school, voor kinderen van groep 3 t/m 8. Een kwartier per dag rekenen, taal en lezen, met uitleg als het fout gaat. Geen account, geen reclame, geen kosten. Ga naar leerkwartier.app en vul de code DEMEERN2027 in. Dan zijn alle extra's gratis voor jullie gezin, via Speelgoedbank De Meern.

2. Een flyer met jullie logo (bijlage, A4): om te printen en mee te geven in de speelgoedtas, of digitaal door te sturen.

3. Een tekstblok en beeld voor nieuwsbrief, website of Facebook:
   - tekst: https://leerkwartier.app/drukwerk/nieuwsbrief-tekst.txt
   - beeld: https://leerkwartier.app/drukwerk/nieuwsbrief-beeld.png
   - link die jullie code meteen invult: https://leerkwartier.app/?partner=DEMEERN2027

Wil je iets anders, bijvoorbeeld een andere tekst of een ander formaat? Eén mailtje en ik pas het aan.

Hartelijke groet,

Mark Smulders
Leerkwartier — Een kwartier per dag leren, een leven lang slimmer.
leerkwartier.app · hallo@leerkwartier.app · KvK 42176244`;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const html = `<div style="font-family:Segoe UI,Arial,sans-serif;font-size:15px;line-height:1.55;color:#1a2233;white-space:pre-wrap">${esc(tekst)
  .replace(/https:\/\/\S+/g, (u) => `<a href="${u}">${u.replace("https://", "")}</a>`)}</div>`;

const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["info@speelgoedbankdemeern.nl"],
    reply_to: "hallo@leerkwartier.app",
    subject: "Re: Gratis oefenen voor kinderen van groep 3 t/m 8: een blokje voor uw nieuwsbrief?",
    headers: { "In-Reply-To": inReplyTo, References: `${origineel} ${inReplyTo}` },
    text: tekst,
    html,
    attachments: [{ filename: "Leerkwartier-flyer-Speelgoedbank-De-Meern.pdf", content: readFileSync(join(ROOT, "public/drukwerk/flyer-DEMEERN2027.pdf")).toString("base64") }],
  }),
});
console.log(r.status, await r.text());

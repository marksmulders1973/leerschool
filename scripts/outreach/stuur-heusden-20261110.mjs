// Antwoord aan Stichting Leergeld Heusden (Jelle P. Marchand) op zijn "wij willen het wel proberen"
// van di 10 nov 2026 11:14, vanaf hallo@ via Resend, met de flyer als bijlage.
// Mark "stuur maar" di 10 nov 2026 op de tekst in docs/outreach/deelpakket/HEUSDEN2027-MAIL.md.
// Zonder In-Reply-To: de Message-ID van zijn mail is via de Gmail-koppeling niet op te halen;
// het onderwerp is gelijk, dus mailprogramma's zetten het bij elkaar.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const ROOT = "C:/Users/mark-/Desktop/Studiebol/leerschool";
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) throw new Error("geen RESEND_API_KEY");

const text = `Dag Jelle,

Dank je wel, fijn dat jullie het willen proberen.

Ik heb een eigen code voor Leergeld Heusden gemaakt: HEUSDEN2027. Gezinnen die daarmee binnenkomen krijgen naast het gratis oefenen ook het Familie-pakket, gratis tot en met 31 december 2028. Het oefenen zelf blijft voor iedereen gratis, tot en met 2031.

Alles staat klaar op één pagina, kies wat bij jullie past:
https://leerkwartier.app/drukwerk/deelpakket-HEUSDEN2027.html

Daar staan:
1. Een korte tekst met beeld voor de nieuwsbrief, de website of Facebook.
2. Een bericht om door te sturen via WhatsApp, met een link die de code meteen invult.
3. Een flyer met jullie logo, om te printen of digitaal te delen. Die zit ook als bijlage bij deze mail.
4. Een losse QR-code en link voor eigen drukwerk.

Het logo heb ik van jullie website gehaald. Zeg het gerust als jullie een andere versie willen, of liever geen logo op de flyer.

Eén vraag: weet je al wanneer het bericht naar de gezinnen gaat? Dan stuur ik je die week een kort overzicht van hoeveel gezinnen uit Heusden zijn begonnen. Daarna krijg je dat elk kwartaal.

Wil je een andere tekst of een ander formaat? Eén mailtje en ik pas het aan.

Hartelijke groet,

Mark Smulders
Leerkwartier — Een kwartier per dag leren, een leven lang slimmer.
leerkwartier.app · hallo@leerkwartier.app · KvK 42176244`;

const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["info@leergeldheusden.nl"],
    reply_to: "hallo@leerkwartier.app",
    subject: "Re: Wat één nieuwsbrief-blokje deed: 144 gezinnen oefenen gratis voor school",
    text,
    attachments: [
      { filename: "Leerkwartier-flyer-Leergeld-Heusden-A4.pdf", content: readFileSync(join(ROOT, "public/drukwerk/flyer-HEUSDEN2027.pdf")).toString("base64") },
    ],
  }),
});
console.log(r.status, await r.text());

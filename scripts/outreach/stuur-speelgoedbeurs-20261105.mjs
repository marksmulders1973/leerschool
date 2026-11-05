// Antwoord aan Speelgoedbeurs Den Haag (Gerda) in haar thread, vanaf hallo@ via Resend,
// met poster + flyer A4 als bijlage. Mark "stuur maar" 5 nov 2026 (tweede versie: vragend,
// sorry als drukwerk verwacht werd, budget deze maand op).
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { homedir } from "node:os";

const ROOT = "C:/Users/mark-/Desktop/Studiebol/leerschool";
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) throw new Error("geen RESEND_API_KEY");

// Message-ID / References uit de RAW-headers van Gerda's mail (base64url-stukken; de
// uitlijning weten we niet, dus alle vier de offsets proberen en de leesbare nemen).
function decodeHeader(chunk, naam) {
  for (let off = 0; off < 4; off++) {
    for (const pad of ["", "A", "AA", "AAA"]) {
      try {
        const txt = Buffer.from(pad + chunk.slice(off), "base64url").toString("utf8");
        const m = txt.match(new RegExp(naam + ":\\s*(<[^>]+>)"));
        if (m) return m[1];
      } catch { /* volgende */ }
    }
  }
  throw new Error("header niet gevonden: " + naam);
}
const inReplyTo = decodeHeader("DQpNZXNzYWdlLUlEOiA8Q0FGK0NnX0IxUWVXd01WaDltS2ZPZWtYd083YU9MQ3R4TFlQcHdmazNoWEFIVTVBdlVRQG1haWwuZ21haWwuY29tPg0K", "Message-ID");
const origineel = decodeHeader("DQpSZWZlcmVuY2VzOiA8MDEwMjAxYTFhYmRmNzhlZS0xNDM0MmY0Mi0zYWQxLTQ2NDAtYTE3MS0xOTRkMjY0Zjk1YjQtMDAwMDAwQGV1LXdlc3QtMS5hbWF6b25zZXMuY29tPg0K", "References");
console.log("In-Reply-To:", inReplyTo, "\nReferences:", origineel);
if (!/mail\.gmail\.com>$/.test(inReplyTo) || !/amazonses\.com>$/.test(origineel)) throw new Error("headers zien er niet goed uit");

const text = `Dag Gerda,

Wat fijn dat jullie dit aan de ouders willen doorgeven, dank je wel. Jullie zitten precies op de goede plek: iedereen aan jullie balie heeft een Ooievaarspas, en voor die gezinnen is het Familie-pakket via de gemeente gratis.

Eerst even eerlijk: als mijn mail klonk alsof ik gedrukte folders en een poster kon opsturen, dan spijt me dat. Mijn budget voor deze maand is op. Ik bouw Leerkwartier alleen en in mijn vrije tijd, en het geld gaat nu eerst naar de app zelf.

Wat ik wél heb gedaan: een poster en een folder met jullie logo erop, allebei als A4 (zie bijlagen), en een pagina met alles bij elkaar, ook een kort berichtje voor jullie Facebook of WhatsApp: https://leerkwartier.app/drukwerk/deelpakket-SPEELGOEDBEURS2027.html

Zou het lukken om de poster en een stapeltje folders een keer zelf op A4 te printen? Een gewone printer is genoeg, de QR-code werkt ook in zwart-wit. En als printen bij jullie lastig is, hoor ik het graag, dan denk ik mee over wat wel kan. Misschien alleen de poster, of alleen het berichtje op jullie Facebook?

Mag ik nog twee dingen vragen? Zou de poster kunnen blijven hangen tot na de Doorstroomtoets, van 25 januari tot en met 12 februari 2027? Juist in de weken daarvoor zoeken ouders iets om thuis te oefenen. En hoeveel ouders zien jullie ongeveer per week aan de balie? Dan kan ik jullie later eerlijk vertellen hoeveel gezinnen via jullie zijn gaan oefenen.

Hartelijke groet,
Mark Smulders
Leerkwartier, Een kwartier per dag leren, een leven lang slimmer.
leerkwartier.app · hallo@leerkwartier.app · KvK 42176244`;

const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["speelgoedbeursdenhaag@gmail.com"],
    reply_to: "hallo@leerkwartier.app",
    subject: "Re: Gratis oefenen voor kinderen uit Den Haag: iets om door te geven aan jullie gezinnen?",
    headers: { "In-Reply-To": inReplyTo, References: `${origineel} ${inReplyTo}` },
    text,
    attachments: [
      { filename: "Leerkwartier-poster-Speelgoedbeurs-Den-Haag-A4.pdf", content: readFileSync(join(ROOT, "public/drukwerk/poster-SPEELGOEDBEURS2027-a4.pdf")).toString("base64") },
      { filename: "Leerkwartier-folder-Speelgoedbeurs-Den-Haag-A4.pdf", content: readFileSync(join(ROOT, "public/drukwerk/flyer-SPEELGOEDBEURS2027.pdf")).toString("base64") },
    ],
  }),
});
console.log(r.status, await r.text());

// Leergeld Den Haag (tip Esther Versluis 3 nov 2026; Mark "stuur maar" 3 nov). Vanaf hallo@ via Resend,
// Ooievaarspas-beeld 600x400 als bijlage. Concept: docs/outreach/CONCEPT-leergeld-den-haag-2026-11-03.md
// Bewust GEEN code in de mail (Mark 3 nov: code pas aanmaken bij "ja"; niets openbaar tot dan).
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) throw new Error("geen RESEND_API_KEY");
const BEELD = "C:/Users/mark-/Desktop/Leerkwartier-dossiers/Ooievaarspas/Leerkwartier-Ooievaarspas-600x400.png";

const tekst = `Beste team van Leergeld Den Haag,

Ik ben Mark Smulders, maker van Leerkwartier: een Nederlandse oefen-app voor kinderen van groep 3 tot en met 8. Elke dag een kwartier rekenen, taal en lezen, met uitleg in gewone taal als iets nog niet lukt, en extra aandacht voor de Doorstroomtoets in groep 8. Het oefenen is gratis, zonder account en zonder reclame.

Leerkwartier is sinds kort vriend van de Ooievaarspas; gezinnen met een pas krijgen via de gemeente het Familie-pakket gratis. Esther Versluis van bureau Ooievaarspas gaf me de tip om ook jullie te benaderen, omdat jullie veel van dezelfde gezinnen bereiken.

Mijn aanbod: een eigen code voor Leergeld Den Haag. Gezinnen die via jullie komen, krijgen daarmee het Familie-pakket drie jaar gratis, tot en met 31 december 2029. Jullie delen de code alleen met jullie eigen gezinnen, bijvoorbeeld in een bericht aan ouders of op jullie socials, en jullie zien hoeveel gezinnen er via jullie oefenen. Het kost jullie niets en er zit geen verplichting aan.

Hebben jullie interesse? Eén mailtje terug is genoeg, dan maak ik de code aan en stuur ik een kant-en-klaar tekstje met beeld. Het beeld zit alvast in de bijlage.

De weken voor de Doorstroomtoets (25 januari tot 12 februari 2027) zijn het drukst. Delen in november of december helpt kinderen uit groep 8 het meest.

Met vriendelijke groet,

Mark Smulders
Leerkwartier — Een kwartier per dag leren, een leven lang slimmer.
leerkwartier.app · hallo@leerkwartier.app · KvK 42176244`;

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const html = `<div style="font-family:Segoe UI,Arial,sans-serif;font-size:15px;line-height:1.55;color:#1a2233;white-space:pre-wrap">${esc(tekst)
  .replace(/leerkwartier\.app(?=[\s·])/g, '<a href="https://leerkwartier.app/?utm_source=leergeld-denhaag">leerkwartier.app</a>')}</div>`;

const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["info@leergelddenhaag.nl"],
    reply_to: "hallo@leerkwartier.app",
    subject: "Gratis oefenen voor Haagse kinderen, iets om te delen met jullie gezinnen?",
    text: tekst,
    html,
    attachments: [{ filename: "Leerkwartier-Ooievaarspas-600x400.png", content: readFileSync(BEELD).toString("base64") }],
  }),
});
console.log(r.status, await r.text());

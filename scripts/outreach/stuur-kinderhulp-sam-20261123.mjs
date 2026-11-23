// 23 nov 2026 — antwoord aan Marion (Kinderhulp, reservelijst-tekst) en eerste mail aan Juultje (Sam&).
// Mark: "Stuur maar" op beide teksten zoals ze in de chat stonden.
//   node scripts/outreach/stuur-kinderhulp-sam-20261123.mjs marion
//   node scripts/outreach/stuur-kinderhulp-sam-20261123.mjs juultje
// Blinde kopie naar hallo@ = bewijs van aankomst in de eigen inbox.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) throw new Error("geen RESEND_API_KEY");
const FROM = "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>";

const MAILS = {
  marion: {
    to: ["m.reuvers@kinderhulp.nl"],
    subject: "RE: Doorstroomtoets in januari: een ander bericht voor de intermediairs?",
    text: `Hoi Marion,

Dank je, daar kan ik goed mee verder. Hieronder de tekst voor de reservelijst. Komt er geen plek, dan is dat ook goed.

Weet je waar een kind uit groep 8 staat voor de Doorstroomtoets?
Van 25 januari tot en met 12 februari maken alle kinderen in groep 8 de Doorstroomtoets. Met de Kwartiercheck van Leerkwartier ziet een ouder of verzorger in een paar minuten per vak waar het kind staat en wat het thuis nog kan oefenen. Gratis en zonder account: leerkwartier.app/kwartiercheck.html

Dank ook voor het adres van Sam&; ik schrijf Juultje deze week.

Hartelijke groet,
Mark Smulders
Leerkwartier
hallo@leerkwartier.app`,
  },
  juultje: {
    to: ["info@samenvoorallekinderen.nl"],
    subject: "T.a.v. Juultje: gratis oefenen voor de Doorstroomtoets, voor gezinnen via Sam&",
    text: `Beste Juultje,

Marion Reuvers van Kinderhulp gaf mij jouw naam. In september stond Leerkwartier in de nieuwsbrief van Kinderhulp voor intermediairs. Sindsdien hebben ruim honderd gezinnen de code gebruikt.

Leerkwartier is een Nederlandse oefen-app voor de basisschool: een kwartier per dag rekenen, taal en lezen, met uitleg bij elke fout. Oefenen is gratis, zonder account en zonder reclame. Gezinnen die via een fonds een code krijgen, hebben daarnaast het Familie-pakket gratis, met onder meer een weekrapport voor de ouder of verzorger.

Mijn vraag: is er binnen Sam& een plek waar intermediairs of gezinnen dit kunnen vinden, bijvoorbeeld in een overzicht van gratis hulpmiddelen? Ik lever graag een korte tekst aan, in de vorm die jullie gebruiken. Alles om door te geven staat op leerkwartier.app/doorgeven.html.

Met vriendelijke groet,
Mark Smulders
Leerkwartier
hallo@leerkwartier.app`,
  },
};

const wie = process.argv[2];
const m = MAILS[wie];
if (!m) throw new Error("gebruik: marion | juultje");
const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({ from: FROM, reply_to: "hallo@leerkwartier.app", bcc: ["hallo@leerkwartier.app"], ...m }),
});
console.log(wie, r.status, await r.text());

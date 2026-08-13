// Succes-update aan Amber (VB Rotterdam) — Mark-go 13 aug ("go met de mail").
// Tekst exact zoals door Mark goedgekeurd in de chat. Route: Resend vanaf
// hallo@leerkwartier.app, reply-to Mark's Gmail (vaste route sinds 12 aug).

import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const tekst = `Beste Amber,

Een korte update, zoals beloofd. De Leerkwartier-dia draait nu zo'n maand op jullie schermen in de drie sociale supermarkten — en het werkt: de eerste gezinnen komen via jullie eigen code binnen en de eerste ouder heeft zich via de flyer-QR aangemeld. Klein begin, maar precies de gezinnen om wie het gaat.

Twee vragen:
1. Zouden we jullie logo mogen tonen op onze bedank-pagina (leerkwartier.app/bedankt.html)? Daar bedanken we de organisaties die meedoen — alleen mét toestemming.
2. Ik kom graag een keer langs op een dinsdag of donderdag — dan neem ik meteen een setje van 50 gedrukte flyers mee voor bij de intake of in de winkels. Welke dag komt jullie uit?

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["MarCom@voedselbank.nl"],
    reply_to: "marksmulders1973@gmail.com",
    subject: "Re: Gratis Doorstroomtoets-oefenen voor de gezinnen die u helpt — korte update",
    text: tekst,
  }),
});
const j = await r.json().catch(() => ({}));
console.log(r.ok ? `OK id=${j.id}` : `FOUT ${r.status}: ${JSON.stringify(j).slice(0, 200)}`);

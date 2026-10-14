// Stichting NOB — nieuwe doelgroep NTC/expat (14 okt 2026). Mark "stuur maar" op de tekst in docs/outreach/NOB-CONCEPT.md.
// Route: Resend/hallo@, reply-to hallo@, geen bijlage.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
const md = readFileSync("docs/outreach/NOB-CONCEPT.md", "utf8");
const tekst = md.split("## Tekst")[1].trim() + "\n";
const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["info@stichtingnob.nl"],
    reply_to: "hallo@leerkwartier.app",
    subject: "Gratis oefen-app voor NTC-leerlingen: een kwartier per dag Nederlands en rekenen bijhouden",
    text: tekst,
  }),
});
console.log(r.status, JSON.stringify(await r.json()), "| regels:", tekst.split("\n").length, "| begint:", tekst.slice(0, 40));

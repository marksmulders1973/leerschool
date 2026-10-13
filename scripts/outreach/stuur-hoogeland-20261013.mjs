// Leergeld Het Hoogeland (Detty Wiltjer) — antwoord op haar vraag 12 okt 2026 om FB- en websitetekst.
// Mark 13 okt: "stuur maar vanaf hallo@". Route: Resend/hallo@, reply-to hallo@ (haar mail naar Gmail bouncte), QR als bijlage.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
const ROOT = "C:/Users/mark-/Desktop/Studiebol/leerschool";
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
const tekst = `Beste Detty,

Wat fijn dat u Leerkwartier wilt delen, en dank voor het doorsturen. Uw eerste mail kwam niet aan; deze wel, via hallo@leerkwartier.app. Dat adres gebruiken we voortaan.

Hieronder staan drie teksten om over te nemen: een bericht voor Facebook, een blok voor uw website en een korte versie voor de nieuwsbrief. Ik heb voor Leergeld Het Hoogeland een eigen code gemaakt: HOOGELAND2027. Gezinnen die via uw link binnenkomen, krijgen daarmee ook de extra's van het Familie-pakket gratis, tot en met 31 december 2028. Het oefenen zelf is voor iedereen gratis, gegarandeerd tot en met 2031. Voor Leergeld zijn er geen kosten en geen voorwaarden.

Als bijlage zit de QR-code, voor bij een bericht of op een poster. Wie hem scant, komt direct in de app met de code erin.

Wilt u iets anders verwoord hebben of een flyer met uw logo erop? Laat het weten, dat maak ik graag. De weken voor de Doorstroomtoets (begin februari 2027) zijn het drukst; als het bericht tot dan zichtbaar kan blijven, helpt dat de kinderen het meest.


=== 1. FACEBOOK ===

📚 Gratis oefenen voor de Doorstroomtoets

Zit uw kind in groep 6, 7 of 8? Met Leerkwartier oefent uw kind elke dag een kwartier rekenen, taal en begrijpend lezen. Gratis, zonder account en zonder reclame. Het werkt op elke telefoon, tablet of computer.

Gaat er iets fout? Dan krijgt uw kind uitleg op drie niveaus, tot het écht snapt.

🎁 Via Leergeld Het Hoogeland krijgt uw gezin er iets extra's bij: met de code HOOGELAND2027 zijn ook de extra's van het Familie-pakket gratis, tot en met 31 december 2028. Gewoon oefenen is gratis voor iedereen, gegarandeerd tot en met 2031.

👉 Klik op de link, de code gaat er vanzelf in:
https://leerkwartier.app/?partner=HOOGELAND2027

Een kwartier per dag leren, een leven lang slimmer.


=== 2. WEBSITE ===

Gratis oefenen voor de Doorstroomtoets: Leerkwartier

Oefenboeken en bijles zijn duur. Daarom werken wij samen met Leerkwartier, een gratis leer-app voor kinderen uit groep 6, 7 en 8.

Wat kan uw kind ermee?
- Elke dag een kwartier oefenen: rekenen, taal en begrijpend lezen
- Een complete oefen-Doorstroomtoets
- Bij elke fout uitleg op drie niveaus
- Printbare werkboeken voor wie liever op papier oefent

Eerlijk en veilig
- Oefenen is gratis, gegarandeerd tot en met 2031
- Geen account nodig, geen reclame, geen betaalgegevens
- Uw gegevens worden niet doorverkocht

Extra voor gezinnen van Leergeld Het Hoogeland
Gebruik de code HOOGELAND2027. Dan krijgt uw gezin ook de extra's van het Familie-pakket gratis, tot en met 31 december 2028. U hoeft niets aan te vragen of te betalen.

Zo begint u: open de link hieronder, de code gaat er vanzelf in.
https://leerkwartier.app/?partner=HOOGELAND2027

Lukt de link niet? Ga naar leerkwartier.app en typ de code HOOGELAND2027 bovenaan de pagina.

Vragen over de app? Mail naar hallo@leerkwartier.app.


=== 3. NIEUWSBRIEF (kort) ===

Gratis oefenen voor de Doorstroomtoets
Kinderen uit groep 6, 7 en 8 kunnen elke dag gratis oefenen met de leer-app Leerkwartier: een kwartier rekenen, taal en lezen, met uitleg bij elke fout. Geen account nodig. Met onze code HOOGELAND2027 krijgt uw gezin ook de extra's van het Familie-pakket gratis, tot en met 31 december 2028.
https://leerkwartier.app/?partner=HOOGELAND2027


Hartelijke groet,
Mark Smulders
Leerkwartier · hallo@leerkwartier.app
Een kwartier per dag leren, een leven lang slimmer.`;
const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["coordinator@leergeldhoogeland.nl"],
    reply_to: "hallo@leerkwartier.app",
    subject: "Re: FW: Gratis Doorstroomtoets-oefenen voor de gezinnen die u helpt",
    text: tekst,
    attachments: [{ filename: "QR-HOOGELAND2027.png", content: readFileSync(`${ROOT}/public/qr/HOOGELAND2027.png`).toString("base64") }],
  }),
});
console.log(r.status, JSON.stringify(await r.json()));

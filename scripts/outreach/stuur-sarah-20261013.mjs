// Antwoord aan Sarah van Hoven (Kinderhulp-gezin), vraag 7 okt 2026 "hoe werkt de code verder?".
// Mark 13 okt: "stuur maar vanaf hallo@". Route: Resend/hallo@, reply-to hallo@.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
const tekst = `Beste Sarah,

Dank voor uw bericht, en sorry dat het even duurde. Voor de zekerheid nog even hoe de code werkt:

1. Open op de telefoon, tablet of computer waar uw kind op oefent deze link:
   https://leerkwartier.app/?partner=KINDERHULP2027
   De code gaat er dan vanzelf in. Typt u liever zelf? Ga naar leerkwartier.app en vul KINDERHULP2027 in bovenaan de pagina.

2. Laat uw kind daarna een paar vragen maken. Na drie antwoorden staat de code vast op dat apparaat.

3. Dat is alles. U hoeft niets aan te vragen of te betalen, en uw kind heeft geen account nodig.

Met de code krijgt uw gezin de extra's van het Familie-pakket gratis, tot en met 31 december 2028. Het oefenen zelf is voor iedereen gratis, gegarandeerd tot en met 2031.

Lukt er iets niet, of heeft u een vraag? Antwoord gerust op deze mail.

Hartelijke groet,
Mark Smulders
Leerkwartier · hallo@leerkwartier.app
Een kwartier per dag leren, een leven lang slimmer.`;
const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["sarahvanhoven@gmail.com"],
    reply_to: "hallo@leerkwartier.app",
    subject: "Re: Familie met een krappe beurs",
    text: tekst,
  }),
});
console.log(r.status, JSON.stringify(await r.json()));

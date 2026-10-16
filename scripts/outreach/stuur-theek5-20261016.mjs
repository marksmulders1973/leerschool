// Bibliotheek Theek 5 (Margo Kerstes, educatie@) — antwoord op haar vraag 16 okt 2026 om een "bibliotheekinlog".
// Mark 16 okt: "stuur maar" op de tekst in de chat. Route: Resend/hallo@, reply-to hallo@. Code THEEK52027 aangemaakt.
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
const tekst = `Hoi Margo,

Wat leuk dat u wilt kijken! Een aparte inlog is niet nodig: Leerkwartier werkt zonder account. U en uw collega's kunnen direct beginnen op leerkwartier.app, op een telefoon, tablet of computer.

Om ook de extra's voor gezinnen te zien, heb ik een eigen code voor Theek 5 gemaakt: THEEK52027. Open op het apparaat waarmee u kijkt deze link:
https://leerkwartier.app/?partner=THEEK52027

De code blijft dan op dat apparaat staan. Gezinnen die via Theek 5 binnenkomen, krijgen met dezelfde code de extra's gratis. Zo ziet u later ook hoeveel gezinnen via de bibliotheek zijn gaan oefenen.

Een tip om snel te zien hoe het werkt: kies "Leerling", kies een groep en beantwoord een vraag eens bewust fout. Dan ziet u hoe de app het uitlegt: eerst met een vraag die het kind zelf laat nadenken, daarna stap voor stap, tot het kind het snapt. Voor de leesmediaconsulenten is het onderdeel begrijpend lezen het interessantst, met ook printbare leesteksten met vragen.

Als het u aanspreekt, maak ik graag een flyer met het logo van Theek 5 en de eigen code erop.

Met vriendelijke groet,

Mark Smulders
Leerkwartier — Een kwartier per dag leren, een leven lang slimmer.
leerkwartier.app · hallo@leerkwartier.app`;
const r = await fetch("https://api.resend.com/emails", {
  method: "POST",
  headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({
    from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
    to: ["educatie@theek5.nl"],
    reply_to: "hallo@leerkwartier.app",
    subject: "RE: Gratis oefen-app voor kinderen van groep 3 t/m 8: een blokje voor uw nieuwsbrief?",
    text: tekst,
  }),
});
console.log(r.status, JSON.stringify(await r.json()));

// Gemeenten ronde 2 — ma 5 okt 2026 09:00 (Mark 3 okt: "stuur maar naar 50 gemeentes" + "stuur maar"
// op de volledige tekst in docs/gemeenten/GEMEENTE-MAILS-RONDE2-OKT-2026.md).
// Aanbod: gratis proef 50 gezinnen t/m 1 april 2027, in maart beslissen (€ 1.725/jaar), niets verlengt.
// Adressen: ALLEEN letterlijk van officiële gemeentepagina's (docs/gemeenten/ronde2-lijst.json, met bron).
// Gemeenten met alleen een contactformulier staan in de lijst met "formulier" en worden hier overgeslagen
// (Mark vult die zelf in met de plaktekst). Route: Resend/hallo@, reply-to Mark's Gmail, privacy-pdf als bijlage.
// Veiligheid: draait niet vóór ma 5 okt 07:00; wie al in ronde2-verzonden.json staat, krijgt niets meer.
//   node scripts/outreach/stuur-gemeenten-ronde2-20261005.mjs --dry   → lijst + voorbeeldmail, niets versturen

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const ROOT = "C:/Users/mark-/Desktop/Studiebol/leerschool";
const LIJST = `${ROOT}/docs/gemeenten/ronde2-lijst.json`;
const VERZONDEN = `${ROOT}/docs/gemeenten/ronde2-verzonden.json`;
const PDF = `${ROOT}/docs/gemeenten/Privacy-voor-gemeenten.pdf`;
const DRY = process.argv.includes("--dry");

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY && !DRY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

if (!DRY && Date.now() < new Date("2026-10-05T07:00:00+02:00").getTime()) {
  console.error("Te vroeg: deze ronde gaat pas ma 5 okt om 09:00."); process.exit(1);
}

const lijst = JSON.parse(readFileSync(LIJST, "utf8"));
const verzonden = existsSync(VERZONDEN) ? JSON.parse(readFileSync(VERZONDEN, "utf8")) : {};

const LOKAAL = {
  Enschede: " Ook in Enschede doet al een lokale organisatie met ons mee.",
  Haarlemmermeer: " Ook in Haarlemmermeer doet al een lokale organisatie met ons mee.",
};

const onderwerp = (g) => `Thuis oefenen voor kinderen uit gezinnen met een krappe beurs: gratis proef in ${g.gemeente}`;
const tekst = (g) => `Geachte heer, mevrouw,

Ik ben Mark Smulders, maker van Leerkwartier: een Nederlandse oefenapp voor kinderen van groep 3 tot en met 8. Rekenen, taal en begrijpend lezen, met extra aandacht voor de Doorstroomtoets in groep 8. Elke dag een kwartier, met uitleg in gewone taal.${LOKAAL[g.gemeente] || ""}

Het oefenen is gratis, gegarandeerd tot en met 2031. Daarbovenop is er het Familie-pakket: ouders of verzorgers zien in één oogopslag hoe hun kind ervoor staat, krijgen elke vrijdag een kort weekrapport met wat ze thuis kunnen doen, en kinderen krijgen onbeperkt uitleg van een AI-bijlesmaatje. Juist gezinnen die geen bijles kunnen betalen, hebben daar het meeste aan.

Wat de app kan, in het kort:

- Oefenen voor groep 3 tot en met 8: rekenen, taal, spelling en begrijpend lezen. Bij een fout antwoord legt de app uit waarom, op drie niveaus.
- Een AI-assistent, Charley, die in gewone taal uitlegt wat een kind niet snapt.
- Leren in een rondje, tot een kind het echt begrijpt: fout antwoord → uitleg → een korte les over het onderwerp → terug naar dezelfde vraag.
- Groep 8: oefenen voor de Doorstroomtoets, ook een hele oefentoets met de klok en een overzicht per onderdeel.
- Voor kinderen die net Nederlands leren: een eigen startpunt met voorlezen en steun in zes talen.
- Werkt op elke telefoon, tablet of computer. Niets installeren, geen reclame, en kinderen hebben geen account nodig.

Daarom een voorstel: een gratis proef voor 50 gezinnen in ${g.gemeente}, tot 1 april 2027.

- U krijgt één code en bepaalt zelf welke gezinnen die krijgen, bijvoorbeeld via ${g.regeling}.
- Gezinnen betalen niets en hoeven geen gegevens bij u aan te leveren.
- In januari en in maart krijgt u een overzicht: hoeveel gezinnen de code gebruiken en hoeveel er oefenen. Nooit gegevens van een kind.
- In maart beslist u of u doorgaat: dan kost het € 1.725 per jaar voor 50 gezinnen (€ 34,50 per gezin; bij meer gezinnen lager). Zegt u niets, dan stopt het vanzelf. Het gewone oefenen blijft voor deze gezinnen altijd gratis.

Waar ik trots op ben: vanaf 1 januari 2027 is Leerkwartier Vriend van de Ooievaarspas van de gemeente Den Haag (samen met Leidschendam-Voorburg en Rijswijk). Het is onze eerste grote partner.

De voorwaarden voor organisaties staan op leerkwartier.app/voorwaarden-organisaties.html. Ons privacystuk voor gemeenten stuur ik mee als bijlage.

Wilt u deze mail doorsturen naar de collega die over armoedebeleid of het kindpakket gaat? Een korte reactie is genoeg om te beginnen; dan stuur ik de code.

Met vriendelijke groet,

Mark Smulders
Leerkwartier — Een kwartier per dag leren, een leven lang slimmer.
leerkwartier.app · hallo@leerkwartier.app · 06-84581000
KvK 42176244`;

const perMail = lijst.filter((g) => g.email && !verzonden[g.email]);
const formulier = lijst.filter((g) => !g.email);

if (DRY) {
  perMail.forEach((g, i) => console.log(`${String(i + 1).padStart(2)} ${g.gemeente} <${g.email}> — ${g.regeling}`));
  console.log(`\nPer mail: ${perMail.length} · formulier (Mark): ${formulier.length} · al verstuurd: ${Object.keys(verzonden).length}`);
  if (perMail[0]) console.log(`\n--- voorbeeld ---\nOnderwerp: ${onderwerp(perMail[0])}\n\n${tekst(perMail[0])}`);
  process.exit(0);
}

if (perMail.length > 60) { console.error(`${perMail.length} mails > 60/werkdag-regel`); process.exit(1); }
const bijlage = readFileSync(PDF).toString("base64");

let ok = 0, fout = 0;
for (const g of perMail) {
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
        to: [g.email],
        reply_to: "marksmulders1973@gmail.com",
        subject: onderwerp(g),
        text: tekst(g),
        attachments: [{ filename: "Privacy-voor-gemeenten.pdf", content: bijlage }],
      }),
    });
    const j = await r.json().catch(() => ({}));
    if (r.ok) {
      ok++; verzonden[g.email] = { gemeente: g.gemeente, id: j.id, op: new Date().toISOString() };
      writeFileSync(VERZONDEN, JSON.stringify(verzonden, null, 1));
      console.log(`OK   ${g.gemeente} <${g.email}> ${j.id}`);
    } else { fout++; console.log(`FOUT ${g.gemeente} <${g.email}> ${r.status}: ${JSON.stringify(j).slice(0, 160)}`); }
  } catch (e) { fout++; console.log(`FOUT ${g.gemeente}: ${e.message}`); }
  await new Promise((res) => setTimeout(res, 1500));
}
console.log(`\nKlaar: ${ok} verstuurd, ${fout} mislukt (van ${perMail.length}). Formulier voor Mark: ${formulier.map((g) => g.gemeente).join(", ") || "geen"}.`);

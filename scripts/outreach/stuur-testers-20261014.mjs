// Tester-oproep aan 35 Gmail-adressen uit accounts + e-maillijst (Mark "stuur maar" 14 okt 2026 op de tekst in de chat).
// Adressen staan vooraf op de Play-testerslijst (50). Route: Resend/hallo@, reply-to hallo@, één mail per adres.
import { readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
const KEY = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8").match(/RESEND_API_KEY=(\S+)/)?.[1];
const lijst = JSON.parse(readFileSync("C:/Users/mark-/Desktop/Leerkwartier-dossiers/android-testers/testers-mail-20261014.json", "utf8"));
const tekst = `Beste ouder of verzorger,

U heeft een account bij Leerkwartier, of u staat op onze e-maillijst. Daarom een kleine vraag.

Leerkwartier komt in de Play Store, zodat de app op een Android-telefoon gewoon te installeren is. Google wil eerst dat twaalf mensen de app twee weken testen. Er zijn er nu negen.

Heeft u een Android-telefoon? Dan kunt u helpen, het kost twee minuten:
1. Open deze link op uw telefoon, ingelogd met het Google-account waarop u deze mail ontvangt: https://play.google.com/apps/testing/app.leerkwartier.twa
2. Tik op "Tester worden", installeer Leerkwartier en open de app één keer.
3. Laat de app twee weken staan. Meer hoeft niet; u mag hem natuurlijk ook gebruiken.

Heeft u geen Android-telefoon, of liever niet? Dan is deze mail bij deze afgedaan; u hoeft niets te doen.

Hartelijk dank,

Mark Smulders
Leerkwartier — Een kwartier per dag leren, een leven lang slimmer.
leerkwartier.app · hallo@leerkwartier.app
`;
const log = {}; let ok = 0, fout = 0;
for (const to of lijst) {
  try {
    const r = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>", to: [to], reply_to: "hallo@leerkwartier.app", subject: "Help Leerkwartier in de Play Store te komen? Twee minuten", text: tekst }) });
    const j = await r.json().catch(() => ({}));
    if (r.ok) { ok++; log[to] = j.id; } else { fout++; log[to] = "FOUT " + r.status + " " + JSON.stringify(j).slice(0, 100); }
  } catch (e) { fout++; log[to] = "FOUT " + e.message; }
  await new Promise((res) => setTimeout(res, 700));
}
writeFileSync("C:/Users/mark-/Desktop/Leerkwartier-dossiers/android-testers/testers-mail-20261014-verzonden.json", JSON.stringify(log, null, 1));
console.log(`verstuurd ${ok}, mislukt ${fout}`); Object.entries(log).filter(([, v]) => String(v).startsWith("FOUT")).forEach(([k, v]) => console.log(k, v));

// LOWAN-nieuwkomersscholen PO — outreach (concept goedgekeurd Mark 31 aug 2026).
// Leest de 55 site-geverifieerde adressen uit docs/outreach/lowan-scholen.md
// (kolom E-mail, rij 1-60). Route: Resend/hallo@, reply-to Mark's Gmail.
// Gebruik: node scripts/outreach/stuur-lowan-20260901.mjs [--dry] [--max N]
import { readFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const env = readFileSync(join(homedir(), ".claude", "resend-lokaal.env"), "utf8");
const KEY = env.match(/RESEND_API_KEY=(\S+)/)?.[1];
if (!KEY) { console.error("Geen RESEND_API_KEY"); process.exit(1); }

const DRY = process.argv.includes("--dry");
const maxArg = process.argv.indexOf("--max");
const MAX = maxArg > -1 ? parseInt(process.argv[maxArg + 1], 10) : Infinity;
const skipArg = process.argv.indexOf("--skip");
const SKIP = skipArg > -1 ? parseInt(process.argv[skipArg + 1], 10) : 0;

// --- adressen inlezen uit de markdown-tabel ---
const md = readFileSync(join(process.cwd(), "docs", "outreach", "lowan-scholen.md"), "utf8");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const seen = new Set();
const lijst = [];
for (const line of md.split(/\r?\n/)) {
  const m = line.match(/^\|\s*\d+\s*\|/);
  if (!m) continue;
  const cols = line.split("|").map((c) => c.trim());
  // cols: ['', '#', 'School', 'Plaats', 'LOWAN-link', 'Website', 'E-mail', (note?)]
  const school = cols[2];
  const email = (cols[6] || "").toLowerCase();
  if (!school || !EMAIL_RE.test(email)) continue;
  if (seen.has(email)) continue;
  seen.add(email);
  lijst.push({ school, email });
}

const onderwerp = "Gratis oefenen in makkelijk Nederlands — voor uw nieuwkomersleerlingen";
const tekst = (s) => `Beste team van ${s.school},

Mijn naam is Mark Smulders. Ik ben operator bij Sonac in Vuren, en in mijn vrije tijd bouwde ik Leerkwartier (leerkwartier.app): een gratis leer-app waarmee kinderen in groep 6, 7 en 8 elke dag een kwartier oefenen met taal, rekenen en begrijpend lezen — met uitleg die stééds eenvoudiger wordt zolang het kwartje nog niet valt.

Ik denk dat de app juist voor uw nieuwkomersleerlingen kan helpen. Drie dingen zijn er speciaal op gericht:
- Voorleesknop bij elke tekst — een kind dat het Nederlands nog leert, kan de vraag en de uitleg laten voorlezen.
- Uitleg op drie niveaus (basis → simpeler → nog simpeler), in korte zinnen en makkelijke woorden.
- Werkt zonder account en zonder installeren, gewoon in de browser of via een QR-code — handig als ouders het Nederlands nog niet machtig zijn; het kind kan zelfstandig aan de slag.

Geen reclame, geen doorverkoop van gegevens, geen betaalgegevens. Voor gezinnen blijft de leer-kern gratis (gegarandeerd t/m 2031). Een leerkracht kan bovendien gericht een oefening klaarzetten die persoonlijk bij een leerling verschijnt — er is een aparte pagina voor leerkrachten: leerkwartier.app/voor-organisaties.html.

Twee dingen wil ik eerlijk zeggen. De app is jong en door één persoon gemaakt — daardoor zijn verbeterpunten juist wélkom, en pas ik iets dat uw leerlingen helpt vaak binnen een paar dagen aan (bijvoorbeeld extra makkelijke teksten of een woord dat beter uitgelegd moet). En u zou een van de eerste nieuwkomersscholen zijn die meedenkt — wat u signaleert, komt vooraan in de bouwlijst.

Zelf proberen kan direct op leerkwartier.app — zonder account, gewoon in de browser. Om het intern delen makkelijk te maken staat er een kant-en-klaar pakketje online: beeld (leerkwartier.app/drukwerk/nieuwsbrief-beeld.png) · one-pager (leerkwartier.app/drukwerk/Leerkwartier-nieuwsbrief-beeld.pdf) · tekstblokje (leerkwartier.app/drukwerk/nieuwsbrief-tekst.txt). Een flyer/poster op maat, ook met uw logo, maak ik kosteloos.

Hartelijke groet,
Mark Smulders — leerkwartier.app`;

const send = lijst.slice(SKIP).slice(0, MAX);
if (DRY) {
  send.forEach((s, i) => console.log(`${String(i + 1).padStart(2)} ${s.school} <${s.email}>`));
  console.log(`\nLOWAN: ${send.length} mails (dry-run, niets verstuurd). Totaal geldig in lijst: ${lijst.length}.`);
  process.exit(0);
}

let ok = 0, fout = 0;
for (const s of send) {
  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: "Mark Smulders — Leerkwartier <hallo@leerkwartier.app>",
        to: [s.email],
        reply_to: "marksmulders1973@gmail.com",
        subject: onderwerp,
        text: tekst(s),
      }),
    });
    const j = await r.json().catch(() => ({}));
    if (r.ok) { ok++; console.log(`OK  ${s.school} <${s.email}>`); }
    else { fout++; console.log(`FOUT ${s.school} <${s.email}> ${r.status}: ${JSON.stringify(j).slice(0, 140)}`); }
  } catch (e) { fout++; console.log(`FOUT ${s.school}: ${e.message}`); }
  await new Promise((res) => setTimeout(res, 1300));
}
console.log(`\nKlaar (LOWAN): ${ok} verstuurd, ${fout} mislukt (van ${send.length}).`);

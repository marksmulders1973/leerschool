#!/usr/bin/env node
// 🎁 Deelpakket per partner die "ja" zegt (groeiplan punt 1, Mark 21 okt 2026).
//
// Eén commando zet alles klaar wat een organisatie nodig heeft om Leerkwartier
// met haar gezinnen te delen — het patroon dat bij Speelgoedbank De Meern werkte:
//   1. QR-code            public/qr/<CODE>.png              (+ decodeer-controle)
//   2. Flyer B1 (A4)      public/drukwerk/flyer-<CODE>.html/.pdf  (met hun logo)
//   3. Deelpakket-pagina  public/drukwerk/deelpakket-<CODE>.html
//      → één link voor de partner: WhatsApp-bericht (kopiëren / direct openen),
//        flyer, nieuwsbrief-tekst + beeld, losse QR. Elke link draagt de code.
//   4. Mailconcept        docs/outreach/deelpakket/<CODE>-MAIL.md  (NIET versturen:
//      eerst tonen aan Mark, "stuur maar" op díe tekst — mail-verstuur-regel)
//   5. Naam in PARTNER_NAMEN (welkomscherm) + BEDANK_PARTNERS (park-zeppelin)
//   6. Print de SQL voor partner_codes (draai via Supabase; script heeft geen service-key)
//
// Gebruik:
//   node scripts/maak-deelpakket.mjs CODE "Naam organisatie" [--logo=pad-of-url] [--flyer-opnieuw]
// Voorbeeld:
//   node scripts/maak-deelpakket.mjs DEMEERN2027 "Speelgoedbank De Meern" --logo=public/drukwerk/logo-speelgoedbank-demeern.png
//
// Bestaande flyer wordt NIET overschreven (kan al verstuurd zijn) tenzij --flyer-opnieuw.
// Daarna: build + versie ophogen + push, dan livetest via Chrome-voor-Claude
// (?erescherm=CODE en de QR-link); headless browsers worden door de hosting geweigerd.

import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { tmpdir } from "node:os";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DRUKWERK = join(ROOT, "public", "drukwerk");
const SITE = "https://leerkwartier.app";
const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";

// ---------- argumenten ----------
const args = process.argv.slice(2);
const vlag = (n) => args.find((a) => a.startsWith(`--${n}`));
const los = args.filter((a) => !a.startsWith("--"));
const CODE = (los[0] || "").trim().toUpperCase();
const ORG = (los[1] || "").trim();
if (!/^[A-Z0-9]{4,30}$/.test(CODE) || !ORG) {
  console.error('Gebruik: node scripts/maak-deelpakket.mjs CODE "Naam organisatie" [--logo=pad-of-url] [--flyer-opnieuw]');
  process.exit(1);
}
const logoArg = vlag("logo")?.split("=").slice(1).join("=");
const flyerOpnieuw = !!vlag("flyer-opnieuw");
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const link = (bron) => `${SITE}/?partner=${CODE}&utm_source=${bron}&utm_medium=deelpakket`;

// ---------- vaste teksten (één bron, zelfde woorden in pagina én mail) ----------
// Gratis-claim eerlijk afgebakend: oefenen t/m 2031, Familie-extra's via code t/m 2028.
const WHATSAPP = `Gratis oefenen voor school, voor kinderen van groep 3 t/m 8. Een kwartier per dag rekenen, taal en lezen, met uitleg als het fout gaat. Geen account, geen reclame, geen kosten.

Tik hier, dan staat de code van ${ORG} er meteen in: ${link("whatsapp")}

Of ga naar leerkwartier.app en vul de code ${CODE} in. Dan zijn alle extra's gratis voor jullie gezin.`;

const NIEUWSBRIEF_KOP = "Gratis oefenen voor school";
const NIEUWSBRIEF = `Via ${ORG} kunnen kinderen van groep 3 tot en met 8 gratis oefenen met Leerkwartier. Een kwartier per dag rekenen, taal en begrijpend lezen, met uitleg in gewone taal als het fout gaat. In groep 8 helpt het ook bij de Doorstroomtoets. Geen account, geen reclame, geen kosten. Ga naar leerkwartier.app en vul de code ${CODE} in: dan zijn ook alle extra's gratis.`;

// ---------- 1. QR ----------
const qrPad = join(ROOT, "public", "qr", `${CODE}.png`);
if (!existsSync(qrPad)) execFileSync(process.execPath, [join(ROOT, "scripts", "maak-partner-qr.mjs"), CODE], { stdio: "inherit" });
try {
  const { PNG } = await import("pngjs");
  const jsQR = (await import("jsqr")).default;
  const png = PNG.sync.read(readFileSync(qrPad));
  const gelezen = jsQR(new Uint8ClampedArray(png.data), png.width, png.height)?.data;
  const verwacht = `${SITE}/?partner=${CODE}&utm_source=qr-flyer&utm_medium=print`;
  if (gelezen !== verwacht) throw new Error(`QR leest "${gelezen}", verwacht "${verwacht}"`);
  console.log("✅ QR gedecodeerd en klopt");
} catch (e) {
  if (/Cannot find (package|module)/.test(e.message)) console.warn("⚠️  QR niet gedecodeerd (npm i --no-save jsqr pngjs om dat te doen)");
  else throw e;
}

// ---------- logo ----------
let logoNaam = "";
if (logoArg) {
  const ext = (extname(logoArg.split("?")[0]) || ".png").toLowerCase();
  const lokaal = !/^https?:\/\//.test(logoArg) && join(ROOT, logoArg);
  if (lokaal && dirname(lokaal) === DRUKWERK) {
    // Logo staat al in public/drukwerk (zoals bij De Meern): gewoon die naam gebruiken.
    logoNaam = lokaal.split(/[\\/]/).pop();
  } else {
    logoNaam = `logo-${CODE.toLowerCase()}${ext}`;
    const doel = join(DRUKWERK, logoNaam);
    if (lokaal) copyFileSync(lokaal, doel);
    else {
      const r = await fetch(logoArg);
      if (!r.ok) throw new Error(`logo downloaden mislukt: ${r.status}`);
      writeFileSync(doel, Buffer.from(await r.arrayBuffer()));
    }
  }
  console.log(`✅ logo ${logoNaam}`);
}

// ---------- 2. flyer ----------
const flyerHtml = join(DRUKWERK, `flyer-${CODE}.html`);
const flyerPdf = join(DRUKWERK, `flyer-${CODE}.pdf`);
if (existsSync(flyerHtml) && !flyerOpnieuw) {
  console.log(`↷ flyer-${CODE} bestaat al — niet overschreven (--flyer-opnieuw om dat wel te doen)`);
} else {
  let h = readFileSync(join(ROOT, "scripts", "sjablonen", "flyer-b1.html"), "utf8")
    .replace("{{QR_DATA}}", `data:image/png;base64,${readFileSync(qrPad).toString("base64")}`)
    .replaceAll("{{CODE}}", CODE)
    .replaceAll("{{ORG}}", esc(ORG));
  if (logoNaam) h = h.replaceAll("{{LOGO}}", logoNaam);
  else {
    // Geen logo: partnerlogo rechtsboven en in het steunblok weglaten.
    h = h.replace(/\s*<div class="partner-logo">[\s\S]*?<\/div>/, "").replace(/\s*<img src="\{\{LOGO\}\}"[^>]*>/, "");
  }
  if (h.includes("{{")) throw new Error("flyer: niet alle invulplekken gevuld");
  writeFileSync(flyerHtml, h, "utf8");
  const tmp = join(tmpdir(), `deelpakket-${CODE}-${Date.now()}`);
  mkdirSync(tmp, { recursive: true });
  const tmpPdf = join(tmp, "flyer.pdf");
  execFileSync(EDGE, ["--headless", "--disable-gpu", "--no-pdf-header-footer", `--user-data-dir=${join(tmp, "profiel")}`,
    `--print-to-pdf=${tmpPdf}`, `file:///${flyerHtml.replace(/\\/g, "/")}`], { stdio: "ignore" });
  const pdf = readFileSync(tmpPdf);
  const paginas = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
  if (paginas !== 1) throw new Error(`flyer-PDF heeft ${paginas} pagina's, moet 1 zijn`);
  writeFileSync(flyerPdf, pdf);
  console.log(`✅ flyer-${CODE}.html + .pdf (1 A4)`);
}

// ---------- 3. deelpakket-pagina ----------
const logoInFlyer = (readFileSync(flyerHtml, "utf8").match(/<div class="partner-logo"><img src="([^"]+)"/) || [])[1] || logoNaam;
const kopieer = (id, label) => `<button class="knop" type="button" onclick="kopieer('${id}', this)">${label}</button>`;
const pagina = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="robots" content="noindex" />
<title>Deelpakket ${esc(ORG)} — Leerkwartier</title>
<style>
  /* Deelpakket-pagina (gegenereerd door scripts/maak-deelpakket.mjs — niet met de hand bewerken). */
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;background:#eef2f5;color:#1a2332;line-height:1.55;padding:16px}
  .vel{max-width:720px;margin:0 auto;background:#fff;border-radius:12px;padding:28px 24px;box-shadow:0 4px 24px rgba(0,0,0,.08)}
  .kop{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:6px}
  .merk{font-size:22px;font-weight:800;color:#0a7d43}
  .kop img{max-height:56px;max-width:200px}
  .slogan{color:#5a6775;font-size:13px;margin-bottom:18px}
  h1{font-size:24px;line-height:1.3;margin-bottom:8px}
  .intro{font-size:16px;color:#3a4658;margin-bottom:8px}
  .code{display:inline-block;background:#8a6200;color:#fff;font-weight:800;letter-spacing:2px;padding:4px 12px;border-radius:8px}
  section{border:1px solid #dde3ea;border-radius:10px;padding:16px;margin-top:16px}
  h2{font-size:17px;color:#0a7d43;margin-bottom:4px}
  .uitleg{font-size:14px;color:#5a6775;margin-bottom:10px}
  textarea{width:100%;font:inherit;font-size:15px;border:1px solid #cfd8e2;border-radius:8px;padding:10px;background:#f8fafc;resize:vertical}
  .knoppen{display:flex;gap:8px;flex-wrap:wrap;margin-top:10px}
  .knop{display:inline-block;font:inherit;font-size:15px;font-weight:700;border:0;border-radius:8px;padding:10px 14px;cursor:pointer;background:#0a7d43;color:#fff;text-decoration:none}
  .knop.licht{background:#e6f3ec;color:#0a7d43}
  .rij{display:flex;gap:16px;align-items:center;flex-wrap:wrap}
  .rij img{width:120px;height:120px;border:1px solid #dde3ea;border-radius:8px}
  .rij > div{flex:1 1 200px;min-width:0}
  .vel,section{min-width:0;overflow-wrap:anywhere}
  .link{word-break:break-all;font-size:14px}
  .voet{margin-top:20px;font-size:13px;color:#5a6775;text-align:center}
</style>
</head>
<body>
<div class="vel">
  <div class="kop"><span class="merk">Leerkwartier</span>${logoInFlyer ? `<img src="${esc(logoInFlyer)}" alt="Logo ${esc(ORG)}" />` : ""}</div>
  <div class="slogan">Een kwartier per dag leren, een leven lang slimmer.</div>

  <h1>Deelpakket voor ${esc(ORG)}</h1>
  <p class="intro">Dank je wel dat jullie Leerkwartier met de gezinnen delen! Hieronder staat alles kant-en-klaar. Kies wat bij jullie past. Jullie eigen code is <span class="code">${CODE}</span>: daarmee zijn alle extra's gratis voor de gezinnen, en zien jullie dat het via jullie komt.</p>

  <section>
    <h2>1. Bericht voor WhatsApp of de app</h2>
    <p class="uitleg">Voor de groepsapp, een appje aan een ouder of een bericht in jullie eigen app. De link zet de code er meteen in.</p>
    <textarea id="whatsapp" rows="8" readonly>${esc(WHATSAPP)}</textarea>
    <div class="knoppen">
      ${kopieer("whatsapp", "Kopieer bericht")}
      <a class="knop licht" href="https://wa.me/?text=${encodeURIComponent(WHATSAPP)}" target="_blank" rel="noopener">Open in WhatsApp</a>
    </div>
  </section>

  <section>
    <h2>2. Flyer met jullie logo</h2>
    <p class="uitleg">Eén A4 in makkelijke taal, met QR-code en jullie code. Om te printen en mee te geven, of digitaal door te sturen.</p>
    <div class="knoppen">
      <a class="knop" href="flyer-${CODE}.pdf" download>Download flyer (PDF)</a>
      <a class="knop licht" href="flyer-${CODE}.html" target="_blank" rel="noopener">Bekijk flyer</a>
    </div>
  </section>

  <section>
    <h2>3. Tekst en beeld voor nieuwsbrief, website of Facebook</h2>
    <p class="uitleg">Ongeveer 70 woorden. Mag ingekort of in eigen woorden.</p>
    <textarea id="nieuwsbrief" rows="7" readonly>${esc(NIEUWSBRIEF_KOP)}

${esc(NIEUWSBRIEF)}

${esc(link("website"))}</textarea>
    <div class="knoppen">
      ${kopieer("nieuwsbrief", "Kopieer tekst")}
      <a class="knop licht" href="nieuwsbrief-beeld.png" download>Download beeld</a>
    </div>
  </section>

  <section>
    <h2>4. Losse QR-code en link</h2>
    <p class="uitleg">Voor eigen drukwerk, een poster of een scherm. Wie scant of klikt, krijgt de code vanzelf.</p>
    <div class="rij">
      <img src="../qr/${CODE}.png" alt="QR-code met code ${CODE}" />
      <div>
        <p class="link"><input id="link" type="text" readonly value="${esc(link("website"))}" style="width:100%;font:inherit;font-size:14px;border:1px solid #cfd8e2;border-radius:8px;padding:8px" /></p>
        <div class="knoppen">${kopieer("link", "Kopieer link")}<a class="knop licht" href="../qr/${CODE}.png" download="QR-${CODE}.png">Download QR</a></div>
      </div>
    </div>
  </section>

  <p class="voet">Iets anders nodig, een andere tekst of een ander formaat? Mail naar <a href="mailto:hallo@leerkwartier.app">hallo@leerkwartier.app</a>.<br>Oefenen is gratis, gegarandeerd tot en met 2031. Met de code zijn de Familie-extra's gratis tot en met 2028.</p>
</div>
<script>
function kopieer(id, knop) {
  var veld = document.getElementById(id), oud = knop.textContent;
  var klaar = function () { knop.textContent = "Gekopieerd ✓"; setTimeout(function () { knop.textContent = oud; }, 1800); };
  if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(veld.value).then(klaar, function () { veld.select(); document.execCommand("copy"); klaar(); });
  else { veld.select(); document.execCommand("copy"); klaar(); }
}
</script>
</body>
</html>
`;
writeFileSync(join(DRUKWERK, `deelpakket-${CODE}.html`), pagina, "utf8");
console.log(`✅ deelpakket-${CODE}.html → ${SITE}/drukwerk/deelpakket-${CODE}.html`);

// ---------- 4. mailconcept ----------
const mailDir = join(ROOT, "docs", "outreach", "deelpakket");
mkdirSync(mailDir, { recursive: true });
const mail = `# Deelpakket ${ORG} — ${CODE} (concept, ${new Date().toISOString().slice(0, 10)})

> NIET versturen zonder "stuur maar" van Mark op deze tekst. Vul [Naam] in uit hun mail.
> Bijlage: public/drukwerk/flyer-${CODE}.pdf · versturen in de thread vanaf hallo@ (zie scripts/outreach/stuur-demeern-20261021.mjs als voorbeeld).

**Onderwerp:** Re: <onderwerp van hun mail>

Dag [Naam],

Dank je wel, wat fijn dat jullie Leerkwartier met de gezinnen willen delen!

Ik heb een eigen code voor ${ORG} gemaakt: ${CODE}. Gezinnen die daarmee binnenkomen krijgen alle extra's van het Familie-pakket gratis tot en met 2028 (het oefenen zelf is sowieso gratis, tot en met 2031). En jullie zien dan dat het via jullie komt.

Alles staat kant-en-klaar op één pagina, kies wat bij jullie past:
${SITE}/drukwerk/deelpakket-${CODE}.html

Daar staan:
1. Een berichtje om door te sturen via WhatsApp of jullie app, met een link die de code meteen invult.
2. Een flyer met jullie logo (ook als bijlage bij deze mail), om te printen of digitaal te delen.
3. Een korte tekst en een beeld voor nieuwsbrief, website of Facebook.
4. Een losse QR-code en link voor eigen drukwerk.

Wil je iets anders, bijvoorbeeld een andere tekst of een ander formaat? Eén mailtje en ik pas het aan.

Hartelijke groet,

Mark Smulders
Leerkwartier — Een kwartier per dag leren, een leven lang slimmer.
leerkwartier.app · hallo@leerkwartier.app · KvK 42176244
`;
writeFileSync(join(mailDir, `${CODE}-MAIL.md`), mail, "utf8");
console.log(`✅ docs/outreach/deelpakket/${CODE}-MAIL.md`);

// ---------- 5. naam in welkomscherm + bedank-zeppelin ----------
// Bronbestanden kunnen Windows-regeleinden hebben (autocrlf): ankers daarom met \r?.
const eolVan = (s) => (s.includes("\r\n") ? "\r\n" : "\n");
const datum = new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" });
const welkom = join(ROOT, "src", "components", "PartnerWelkom.jsx");
{
  const s = readFileSync(welkom, "utf8"), eol = eolVan(s);
  const anker = /^  DONGEN2027: "Voedselbank Dongen",(?=\r?$)/m;
  if (new RegExp(`^  ${CODE}:`, "m").test(s)) console.log(`↷ PartnerWelkom.jsx kent ${CODE} al`);
  else if (!anker.test(s)) throw new Error("anker DONGEN2027 niet gevonden in PartnerWelkom.jsx");
  else {
    writeFileSync(welkom, s.replace(anker, (m) => `${m}${eol}  ${CODE}: ${JSON.stringify(ORG)}, // ${datum}: deelpakket (scripts/maak-deelpakket.mjs)`), "utf8");
    console.log(`✅ ${CODE} toegevoegd aan PARTNER_NAMEN`);
  }
}
const park = join(ROOT, "src", "features", "zoo", "ParkProps.jsx");
{
  const s = readFileSync(park, "utf8"), eol = eolVan(s);
  const bedank = s.match(/const BEDANK_PARTNERS = \[[\s\S]*?\r?\n\];/)?.[0];
  if (!bedank) throw new Error("BEDANK_PARTNERS niet gevonden");
  if (bedank.includes(`"${CODE}"`)) console.log(`↷ ParkProps.jsx kent ${CODE} al`);
  else {
    writeFileSync(park, s.replace(bedank, bedank.replace(/\r?\n\];$/, `${eol}  "${CODE}",${eol}];`)), "utf8");
    console.log(`✅ ${CODE} toegevoegd aan BEDANK_PARTNERS`);
  }
}

// ---------- 6. SQL ----------
console.log(`\n▶ Draai in Supabase (project uxqnzrymyjbcpuzqktdm):\ninsert into partner_codes (code, org_naam, max_uses, familie_tot, slapend) values ('${CODE}', ${"'" + ORG.replace(/'/g, "''") + "'"}, 1000000, '2028-12-31', false) on conflict (code) do nothing;`);
console.log(`\n▶ Daarna: build + versie ophogen + push, livetest ${SITE}/?erescherm=${CODE} via Chrome-voor-Claude, mailconcept tonen aan Mark.`);

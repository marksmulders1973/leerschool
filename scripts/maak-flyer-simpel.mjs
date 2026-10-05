// Simpele partnerflyer (Mark 5 okt 2026: "maak de flyer veel simpeler, dat is de les van
// alle feedbacks"). Eén A4, grote letters, B1-taal, één QR, één code. Geen uitleg over
// kansenongelijkheid, geen lijstjes met onderdelen — dat leest niemand aan een uitgiftepunt.
// Gebruik: node scripts/maak-flyer-simpel.mjs ALMELO2027 "Voedselbank Almelo"
// Schrijft public/drukwerk/flyer-<CODE>.html (QR inline als base64, dus ook offline printbaar).
import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
// Derde argument (optioneel): pad naar het logo van de partner → tweede variant "-logo" met hun
// beeldmerk rechtsboven (Mark 5 okt: "dan hebben ze 2 keuzen, met of zonder hun eigen logo").
const [code, organisatie, partnerLogo] = process.argv.slice(2);
if (!code || !organisatie) { console.error("Gebruik: node scripts/maak-flyer-simpel.mjs CODE \"Naam organisatie\""); process.exit(1); }
const CODE = code.trim().toUpperCase();
const qr = readFileSync(join(root, "public", "qr", `${CODE}.png`)).toString("base64");
const logo = readFileSync(join(root, "public", "logo.jpg")).toString("base64");
const partnerData = partnerLogo ? `data:image/${partnerLogo.endsWith(".png") ? "png" : "jpeg"};base64,${readFileSync(partnerLogo).toString("base64")}` : null;

const html = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex" />
<title>Gratis oefenen voor school — via ${organisatie}</title>
<style>
  @page { size: A4; margin: 14mm; }
  * { box-sizing: border-box; }
  html, body { margin: 0; background: #fff; color: #14283c; font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
  .vel { max-width: 720px; margin: 0 auto; padding: 28px 24px 32px; }
  .kop { display: flex; align-items: center; gap: 16px; }
  .kop img.lk { width: 72px; height: 72px; border-radius: 16px; }
  .kop .partner { margin-left: auto; max-height: 64px; max-width: 300px; object-fit: contain; }
  .kop .naam { font-size: 30px; font-weight: 900; line-height: 1; }
  .kop .slogan { font-size: 15px; color: #4a5a6a; margin-top: 6px; }
  h1 { font-size: 46px; line-height: 1.1; margin: 36px 0 10px; font-weight: 900; }
  .sub { font-size: 22px; line-height: 1.4; margin: 0 0 26px; }
  ul { list-style: none; padding: 0; margin: 0 0 30px; }
  li { font-size: 21px; line-height: 1.35; padding: 8px 0 8px 40px; position: relative; }
  li::before { content: ""; position: absolute; left: 4px; top: 13px; width: 22px; height: 22px; border-radius: 50%; background: #1b7f3b; }
  li::after { content: ""; position: absolute; left: 11px; top: 17px; width: 7px; height: 11px; border: solid #fff; border-width: 0 3px 3px 0; transform: rotate(45deg); }
  .scan { display: flex; align-items: center; gap: 26px; border: 3px solid #14283c; border-radius: 22px; padding: 22px; }
  .scan img { width: 220px; height: 220px; flex: none; }
  .scan .tekst { font-size: 22px; line-height: 1.4; }
  .scan .tekst strong { display: block; font-size: 24px; margin-bottom: 8px; }
  .code { display: inline-block; margin-top: 10px; background: #ffd54f; color: #14283c; font-weight: 900; font-size: 30px; letter-spacing: 1px; padding: 8px 18px; border-radius: 12px; }
  .extra { font-size: 17px; color: #4a5a6a; margin-top: 12px; line-height: 1.35; }
  .voet { margin-top: 30px; font-size: 17px; color: #4a5a6a; display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; }
  @media print { .vel { padding: 0; max-width: none; } }
</style>
</head>
<body>
<div class="vel">
  <div class="kop">
    <img class="lk" src="data:image/jpeg;base64,${logo}" alt="Leerkwartier" />
    <div><div class="naam">Leerkwartier</div><div class="slogan">Een kwartier per dag leren, een leven lang slimmer.</div></div>
    ${partnerData ? `<img class="partner" src="${partnerData}" alt="${organisatie}" />` : ""}
  </div>

  <h1>Gratis oefenen voor school</h1>
  <p class="sub">Voor kinderen van groep 3 tot en met 8, en voor de brugklas. Elke dag een kwartier.</p>

  <ul>
    <li>Rekenen, lezen en taal. Met uitleg als het nog niet lukt.</li>
    <li>Werkt op elke telefoon of tablet. Geen account nodig.</li>
    <li>Gratis en zonder reclame.</li>
  </ul>

  <div class="scan">
    <img src="data:image/png;base64,${qr}" alt="QR-code" />
    <div class="tekst">
      <strong>Scan met de camera van je telefoon.</strong>
      Of ga naar <b>leerkwartier.app</b> en vul deze code in:
      <br /><span class="code">${CODE}</span>
      <div class="extra">Met deze code: ook alle extra's voor het gezin gratis, tot en met 2028.</div>
    </div>
  </div>

  <div class="voet">
    <span>In samenwerking met ${organisatie}.</span>
    <span>Vragen? hallo@leerkwartier.app</span>
  </div>
</div>
</body>
</html>
`;
const uit = join(root, "public", "drukwerk", `flyer-${CODE}${partnerData ? "-logo" : ""}.html`);
writeFileSync(uit, html);
console.log("✅", uit);

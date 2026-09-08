// 🖨️ Bulk-flyer-generator (Mark 14 jul 2026 — sticker-hybride).
// Strategie: één generieke flyer in bulk laten drukken (Drukwerkdeal) en per
// partner een QR-STICKER (met partner-code) over het sticker-vak plakken.
// Zonder sticker werkt de flyer ook: onder het vak zit een generieke QR naar
// leerkwartier.app (utm_campaign=bulk). De 2027-cadeau-belofte hoort op de
// partner-sticker, NIET op deze flyer (zie memory feedback_gratis_claim_eerlijk:
// drukwerk leeft lang → tijdloze "Gratis oefenen"-formulering).
//
// Output: public/drukwerk/flyer-bulk.html — A4 + 3mm afloop (216×303mm).
// PDF maken: chrome --headless=new --print-to-pdf=flyer-bulk.pdf --no-pdf-header-footer <file-url>
//
// Gebruik:  node scripts/maak-bulk-flyer.mjs
// (eerst de generieke QR: zie public/qr/BULK-GENERIEK.png)

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "drukwerk");
mkdirSync(outDir, { recursive: true });

const qr64 = readFileSync(join(root, "public", "qr", "BULK-GENERIEK.png")).toString("base64");
const logo64 = readFileSync(join(root, "public", "icons", "icon-512.png")).toString("base64");

const html = `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="UTF-8" />
<meta name="robots" content="noindex" />
<title>Leerkwartier — bulk-flyer (drukwerk, A4 + 3mm afloop)</title>
<style>
  /* A4 210×297 + 3mm afloop rondom = 216×303. Veilige marge: 13mm (10+3). */
  @page { size: 216mm 303mm; margin: 0; }
  *{margin:0;padding:0;box-sizing:border-box}
  html,body{width:216mm;height:303mm}
  body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;color:#1a2332;background:#fff;padding:13mm;display:flex;flex-direction:column}
  .kop{display:flex;align-items:center;gap:5mm;margin-bottom:1.5mm}
  .kop img{width:16mm;height:16mm;border-radius:3.5mm}
  .kop .naam{font-size:26pt;font-weight:800;color:#0a7d43;letter-spacing:-0.5px}
  .payoff{font-size:11pt;color:#5a6775;margin-bottom:7mm}
  h1{font-size:19pt;line-height:1.22;margin-bottom:4mm}
  p{font-size:10.5pt;line-height:1.55;color:#3a4658;margin-bottom:3.5mm}
  h2{font-size:12pt;color:#0a7d43;margin:4.5mm 0 2mm}
  ul{list-style:none}
  ul li{font-size:10pt;color:#3a4658;padding:1.2mm 0 1.2mm 6mm;position:relative;line-height:1.45}
  ul li::before{content:"✓";position:absolute;left:0;color:#00a852;font-weight:700}
  .kader{background:#f2f8f4;border:0.5mm solid #bfe3cd;border-radius:3.5mm;padding:4mm 5mm;margin:4mm 0}
  .kader strong{color:#0a7d43}
  .kader p{margin:0;font-size:10pt}
  .twee{display:flex;gap:8mm}
  .twee>div{flex:1}
  .onder{margin-top:auto;display:flex;gap:6mm;align-items:stretch}
  .onder-links{flex:1;display:flex;flex-direction:column;justify-content:flex-end}
  .url{display:block;text-align:center;background:#0a7d43;color:#fff;font-size:20pt;font-weight:800;padding:4.5mm;border-radius:3.5mm;letter-spacing:0.3px;text-decoration:none;margin-bottom:2mm}
  .url-sub{text-align:center;font-size:9pt;color:#5a6775;margin-bottom:3mm}
  .voet{padding-top:2.5mm;border-top:0.3mm solid #e3e8ee;font-size:8pt;color:#8893a3;line-height:1.5}
  /* Sticker-vak: 50×50mm. Zonder sticker = generieke QR die gewoon werkt;
     partner-sticker (50mm, met eigen QR + 2027-cadeau) plakt er precies over. */
  .stickervak{flex:0 0 auto;width:50mm;display:flex;flex-direction:column;align-items:center;justify-content:flex-end}
  .stickervak .scan{font-size:9.5pt;font-weight:800;color:#0a7d43;text-align:center;margin-bottom:1.5mm}
  .stickervak img{width:44mm;height:44mm}
  .stickervak .qr-url{font-size:8pt;color:#8893a3;text-align:center;margin-top:1mm}
</style>
</head>
<body>
  <div class="kop">
    <img src="data:image/png;base64,${logo64}" alt="Leerkwartier-logo" />
    <span class="naam">Leerkwartier</span>
  </div>
  <div class="payoff">Een kwartier per dag leren, een leven lang slimmer.</div>

  <h1>Gratis oefenen voor de Doorstroomtoets — voor élk gezin</h1>
  <p>Oefenboeken kosten €27 tot €40. Bijles kost €37 per uur. Zo vergroot betaalde toetstraining de kansenongelijkheid rond de Doorstroomtoets. <strong>Leerkwartier is het gratis alternatief:</strong> een Nederlandse leer-app waar kinderen uit groep 6, 7 en 8 élke dag kunnen oefenen voor de Doorstroomtoets — zonder kosten, zonder account, zonder reclame.</p>

  <div class="kader">
    <p><strong>Voor de gezinnen die deze flyer krijgen betekent dat:</strong> volwaardige toetsvoorbereiding zonder dat er iets aangevraagd, betaald of verantwoord hoeft te worden. Het werkt direct, op elke telefoon, tablet of (bibliotheek)computer.</p>
  </div>

  <div class="twee">
    <div>
      <h2>Wat zit erin?</h2>
      <ul>
        <li>Complete gratis <strong>oefen-Doorstroomtoets</strong> (rekenen, taal, studievaardigheden)</li>
        <li>Elke dag een gratis <strong>vraag van de dag</strong> met uitleg</li>
        <li>Bij elke fout: <strong>uitleg op 3 niveaus</strong> (basis / simpeler / nog simpeler)</li>
        <li>Een <strong>leermaatje</strong> dat helpt als je kind vastloopt — zonder voor te zeggen</li>
        <li>Voor de bovenbouw: <strong>echte VMBO-examenvragen</strong> met uitleg</li>
      </ul>
    </div>
    <div>
      <h2>Ook zonder goed internet</h2>
      <ul>
        <li><strong>Printbare werkboeken</strong>: compleet oefenpakket met antwoordsleutel</li>
        <li>De <strong>Leesladder</strong>: begrijpend lezen dat klein begint (5 zinnen) en opbouwt</li>
        <li>Tafel-werkbladen mét tafeldiploma</li>
        <li>Alles printbaar via leerkwartier.app/printen</li>
      </ul>
    </div>
  </div>

  <h2>Eerlijk en veilig</h2>
  <ul>
    <li><strong>Gratis oefenen</strong> — geen abonnement, geen proefperiode, geen betaalgegevens</li>
    <li>Geen account nodig, geen reclame, geen doorverkoop van gegevens (AVG-vriendelijk)</li>
    <li>Gemaakt door één vader uit Nederland, niet door een marketingmachine</li>
  </ul>

  <div class="onder">
    <div class="onder-links">
      <a class="url" href="https://leerkwartier.app">leerkwartier.app</a>
      <div class="url-sub">Direct te gebruiken — geen inlog nodig. Deel deze flyer gerust verder.</div>
      <div class="voet">
        Contact: Mark Smulders · marksmulders1973@gmail.com · leerkwartier.app<br />
        Werkt u bij een school, bibliotheek, voedselbank of stichting? Teksten en materiaal op maat maak ik graag — ook gratis.
      </div>
    </div>
    <div class="stickervak">
      <div class="scan">Scan met de camera<br />van je telefoon</div>
      <img src="data:image/png;base64,${qr64}" alt="QR-code naar leerkwartier.app" />
      <div class="qr-url">of typ: leerkwartier.app</div>
    </div>
  </div>
</body>
</html>
`;

const file = join(outDir, "flyer-bulk.html");
writeFileSync(file, html, "utf8");
console.log(`✅ ${file}`);

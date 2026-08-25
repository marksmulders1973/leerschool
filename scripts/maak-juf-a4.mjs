// Pilot-juf-A4 (idee #75, 25 aug 2026): één printbaar A4 voor de leerkracht —
// wat is Leerkwartier + klaarzetten in 3 stappen + demo-code TAAK24 + de
// 2-jaar-gratis-testbelofte. Hoort bij het bestuurs-spoor: elk bestuurs-ja
// eindigt met "mag één groep-8-leerkracht het proberen?" — dit A4 is het antwoord.
// Bouwt op het goedgekeurde B1-sjabloon (_template-flyer-b1.html): zelfde CSS,
// écht logo (base64 uit het sjabloon), verse QR (Desktop\dagrapport\qr-leerkwartier.png).
// Output: public/drukwerk/juf-start-A4.html

import { readFileSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const sjabloon = readFileSync("public/drukwerk/_template-flyer-b1.html", "utf8");

const css = sjabloon.match(/<style>([\s\S]*?)<\/style>/)?.[1];
if (!css) { console.error("CSS niet gevonden in sjabloon"); process.exit(1); }

const logoImg = sjabloon.match(/<img src="data:image\/jpeg;base64,[^"]+"[^>]*>/)?.[0];
if (!logoImg) { console.error("Logo niet gevonden in sjabloon"); process.exit(1); }

const qrB64 = readFileSync(join(homedir(), "Desktop", "dagrapport", "qr-leerkwartier.png")).toString("base64");

const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <title>Leerkwartier in de klas — starten in 3 stappen (A4 voor de leerkracht)</title>
  <style>${css}</style>
</head>
<body>
  <div class="vel">
    <div class="kop">
      <div class="merk">${logoImg}<div class="naam">Leerkwartier<br /><span style="font-size:15px;color:#5a6775;font-weight:400">Een kwartier per dag — écht begrijpen wat je leert.</span></div></div>
      <span class="feest" style="background:linear-gradient(90deg,#0a7d43,#00a852)">Voor de leerkracht</span>
    </div>

    <h1>Probeer Leerkwartier met uw klas</h1>
    <p>Leerkwartier is een <strong>gratis Nederlandse oefen-app</strong> voor groep 3 t/m 8, met de nadruk op de <em class="toets">Doorstroomtoets</em> (groep 6-8). Maakt een leerling een fout? Dan wordt de uitleg <strong>steeds simpeler, tot het kwartje valt</strong>. Elk stukje tekst heeft een voorleesknop.</p>

    <h2>Klaarzetten in 3 stappen</h2>
    <ul>
      <li><strong>Stap 1.</strong> Ga naar <strong>leerkwartier.app</strong> en kies <strong>Leerkracht</strong>.</li>
      <li><strong>Stap 2.</strong> Zet een oefening, taak of toets klaar. U krijgt een <strong>code voor uw klas</strong>.</li>
      <li><strong>Stap 3.</strong> Leerlingen voeren de code in en gaan aan de slag — <strong>zonder account</strong>. U ziet wat er gedaan is.</li>
    </ul>

    <div class="qr-blok">
      <img src="data:image/png;base64,${qrB64}" alt="QR-code naar leerkwartier.app" />
      <div>
        <h2>Eerst zelf kijken?</h2>
        <p><strong>Scan de code</strong> of ga naar leerkwartier.app — u hoeft niets te installeren en geen account te maken.</p>
        <p>Wilt u zien wat leerlingen krijgen als u iets klaarzet? Vul dan als leerling de voorbeeldcode <span class="qr-code-badge">TAAK24</span> in.</p>
      </div>
    </div>

    <h2>Eerlijk en duidelijk</h2>
    <ul>
      <li>Oefenen is <strong>gratis voor leerlingen</strong> — gegarandeerd tot en met 2031.</li>
      <li>De leerkracht-functies kunt u <strong>de komende twee jaar kosteloos testen en gebruiken</strong> (tot en met de zomer van 2028).</li>
      <li>Geen reclame. Geen doorverkoop van gegevens.</li>
      <li>De app is jong en wordt elke week beter. <strong>Wensen van leerkrachten komen vooraan in de bouwlijst</strong> — mail de maker en het staat er vaak binnen een week in.</li>
    </ul>

    <a class="url" href="https://leerkwartier.app">leerkwartier.app</a>
    <div class="url-sub">Werkt op elke telefoon, tablet, computer en digibord.</div>

    <div class="voet">
      Vragen? Mail Mark Smulders (de maker): marksmulders1973@gmail.com
    </div>
  </div>
</body>
</html>
`;

writeFileSync("public/drukwerk/juf-start-A4.html", html);
console.log("Geschreven: public/drukwerk/juf-start-A4.html (" + Math.round(html.length / 1024) + " kB)");

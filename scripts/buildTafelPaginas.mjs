#!/usr/bin/env node
// scripts/buildTafelPaginas.mjs — 26 nov 2026.
// Een crawlbare pagina per tafel: "tafel van 7" e.d. (public/tafel-van-<1..12>.html).
//
// Waarom: de sitemap-vergelijking van 26 nov liet zien dat tafelsites één pagina per tafel hebben,
// terwijl Leerkwartier alleen tafels-oefenen.html had; die pagina kreeg in oktober wel de meeste
// vertoningen buiten de merknaam. De knop opent de app met die tafel al klaar (/?go=tafels&tafel=7),
// de printknop de tafelbladen met alleen die tafel (/tafelbladen?tafel=7).
//
// Run: node scripts/buildTafelPaginas.mjs  (draait mee in prebuild; sitemap-regels staan in public/sitemap.xml)

import { writeFileSync } from "node:fs";

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Per tafel: in welke groep, het handigste ezelsbruggetje (met een uitgewerkt voorbeeld) en wat opvalt.
const INFO = {
  1: {
    groep: "groep 3 en 4",
    truc: "Bij de tafel van 1 blijft het getal gelijk: 1 × 6 = 6. Eén groepje van zes is gewoon zes.",
    valtOp: "De antwoorden zijn de telrij: 1, 2, 3, 4, … Deze tafel is vooral handig om te begrijpen wat 'keer' betekent: zoveel groepjes van zoveel.",
  },
  2: {
    groep: "groep 3 en 4",
    truc: "De tafel van 2 is verdubbelen: 2 × 7 is hetzelfde als 7 + 7 = 14.",
    valtOp: "Alle antwoorden zijn even getallen en eindigen op 0, 2, 4, 6 of 8. Tel je in sprongen van 2, dan zeg je de tafel op.",
  },
  3: {
    groep: "groep 4",
    truc: "Reken eerst de tafel van 2 uit en tel het getal er nog één keer bij: 3 × 7 = 14 + 7 = 21.",
    valtOp: "Tel de cijfers van een antwoord bij elkaar op en je komt altijd op 3, 6 of 9 uit. Bij 27 is dat 2 + 7 = 9, bij 12 is het 1 + 2 = 3.",
  },
  4: {
    groep: "groep 4",
    truc: "De tafel van 4 is twee keer verdubbelen: 4 × 6 → het dubbele van 6 is 12, het dubbele van 12 is 24.",
    valtOp: "Alle antwoorden zijn even. Wie de tafel van 2 kent, kent de tafel van 4 bijna ook: elk antwoord is het dubbele.",
  },
  5: {
    groep: "groep 4",
    truc: "Neem de tafel van 10 en halveer het antwoord: 5 × 8 → 10 × 8 = 80, de helft is 40.",
    valtOp: "Elk antwoord eindigt op een 0 of een 5. Bij een even getal op een 0 (5 × 4 = 20), bij een oneven getal op een 5 (5 × 7 = 35). Het is ook de klok: 5 × 3 = 15 minuten, een kwartier.",
  },
  6: {
    groep: "groep 5",
    truc: "Reken de tafel van 5 uit en tel het getal er nog één keer bij: 6 × 7 = 35 + 7 = 42. Of verdubbel de tafel van 3: 3 × 7 = 21, het dubbele is 42.",
    valtOp: "Alle antwoorden zijn even. De helft van de sommen ken je al van de lagere tafels: 6 × 4 is hetzelfde als 4 × 6.",
  },
  7: {
    groep: "groep 5",
    truc: "Splits de 7 in 5 en 2: 7 × 6 = 5 × 6 + 2 × 6 = 30 + 12 = 42. Voor 7 × 8 = 56 helpt het rijtje 5, 6, 7, 8: vijf-zes is zeven keer acht.",
    valtOp: "De tafel van 7 heeft geen handig patroon in de antwoorden; daarom vinden veel kinderen hem het lastigst. Wie de tafels van 1 tot en met 6 kent, hoeft er nog maar vier nieuw te leren: 7 × 7, 7 × 8, 7 × 9 en 7 × 10.",
  },
  8: {
    groep: "groep 5",
    truc: "De tafel van 8 is drie keer verdubbelen: 8 × 6 → 12 → 24 → 48.",
    valtOp: "Alle antwoorden zijn even en het laatste cijfer telt steeds twee terug: 8, 16, 24, 32, 40 en dan opnieuw 48, 56, 64, 72, 80.",
  },
  9: {
    groep: "groep 5",
    truc: "Reken de tafel van 10 uit en haal het getal er één keer af: 9 × 7 = 70 − 7 = 63.",
    valtOp: "Tot en met 9 × 10 zijn de cijfers van het antwoord samen altijd 9: bij 63 is dat 6 + 3, bij 27 is het 2 + 7. Het tiental is steeds één minder dan het getal waarmee je vermenigvuldigt: 9 × 7 begint met een 6.",
  },
  10: {
    groep: "groep 3 en 4",
    truc: "Zet een 0 achter het getal: 10 × 7 = 70. Elk cijfer schuift één plaats op.",
    valtOp: "Alle antwoorden eindigen op een 0. De tafel van 10 is de basis voor rekenen met geld en met meters en centimeters.",
  },
  11: {
    groep: "groep 6",
    truc: "Tot en met 11 × 9 schrijf je het cijfer twee keer: 11 × 4 = 44. Daarna reken je 10 keer het getal plus één keer het getal: 11 × 12 = 120 + 12 = 132.",
    valtOp: "Let op bij 11 × 10 = 110, 11 × 11 = 121 en 11 × 12 = 132: daar werkt 'twee keer hetzelfde cijfer' niet meer.",
  },
  12: {
    groep: "groep 6",
    truc: "Splits de 12 in 10 en 2: 12 × 7 = 10 × 7 + 2 × 7 = 70 + 14 = 84.",
    valtOp: "Twaalf is een dozijn. De tafel van 12 kom je tegen bij maanden (3 jaar = 36 maanden) en bij de klok (12 uur, 24 uur).",
  },
};

// Vaste volgorde voor de tien oefensommen, zodat de pagina bij elke build gelijk blijft.
const DOOR_ELKAAR = [7, 3, 9, 1, 6, 10, 4, 8, 2, 5];

function pagina(n) {
  const info = INFO[n];
  const url = `https://leerkwartier.app/tafel-van-${n}.html`;
  const titel = `Tafel van ${n} oefenen: de hele tafel, een ezelsbruggetje en gratis oefenen | Leerkwartier`;
  const rij = Array.from({ length: 10 }, (_, i) => `${i + 1} × ${n} = ${(i + 1) * n}`);
  const omschrijving = `De tafel van ${n} op een rij (${rij.slice(0, 3).join(", ")} … 10 × ${n} = ${10 * n}), een ezelsbruggetje, de deeltafel en tien oefensommen. Direct online oefenen of een werkblad printen, zonder account.`;
  const faq = [
    [`Wat is de tafel van ${n}?`, `De tafel van ${n} is: ${rij.join(", ")}. Daarna komen 11 × ${n} = ${11 * n} en 12 × ${n} = ${12 * n}.`],
    [`Hoe leer je de tafel van ${n} snel?`, `${info.truc} Oefen daarna kort en vaak: vijf minuten per dag werkt beter dan één keer een uur. Eerst op volgorde, daarna door elkaar.`],
    [`In welke groep leer je de tafel van ${n}?`, `Op de meeste basisscholen komt de tafel van ${n} aan bod in ${info.groep}. Aan het eind van groep 5 horen kinderen de tafels van 1 tot en met 10 vlot te kennen.`],
    [`Kan ik de tafel van ${n} gratis online oefenen?`, `Ja: https://leerkwartier.app/?go=tafels&tafel=${n} opent de tafel van ${n} op Leerkwartier. Je ziet bij elke som meteen of het antwoord goed is. Geen account en geen reclame; het oefenen is gratis, gegarandeerd tot en met 2031.`],
  ];
  const ld = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://leerkwartier.app/" },
      { "@type": "ListItem", position: 2, name: "Tafels oefenen", item: "https://leerkwartier.app/tafels-oefenen.html" },
      { "@type": "ListItem", position: 3, name: `Tafel van ${n}`, item: url },
    ] },
    { "@context": "https://schema.org", "@type": "LearningResource", name: `Tafel van ${n} oefenen`, description: omschrijving, url, inLanguage: "nl-NL", educationalLevel: `${info.groep} basisschool`, learningResourceType: "Oefening", isAccessibleForFree: true },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];
  const tafelRijen = Array.from({ length: 12 }, (_, i) => `<tr${i >= 10 ? ' class="extra"' : ""}><td>${i + 1} × ${n}</td><td>=</td><td><b>${(i + 1) * n}</b></td></tr>`).join("\n        ");
  const deelRijen = Array.from({ length: 10 }, (_, i) => `<tr><td>${(i + 1) * n} : ${n}</td><td>=</td><td><b>${i + 1}</b></td></tr>`).join("\n        ");
  const sommen = DOOR_ELKAAR.map((k) => `<li>${k} × ${n} = <span class="lijn"></span></li>`).join("");
  const antwoorden = DOOR_ELKAAR.map((k) => `${k} × ${n} = ${k * n}`).join(" · ");
  const andere = Array.from({ length: 12 }, (_, i) => i + 1).map((k) => (k === n ? `<b>${k}</b>` : `<a href="/tafel-van-${k}.html">${k}</a>`)).join(" · ");
  const vorige = n > 1 ? `<a href="/tafel-van-${n - 1}.html">← tafel van ${n - 1}</a>` : "";
  const volgende = n < 12 ? `<a href="/tafel-van-${n + 1}.html">tafel van ${n + 1} →</a>` : "";

  return `<!DOCTYPE html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(titel)}</title>
<meta name="description" content="${esc(omschrijving)}">
<link rel="canonical" href="${url}">
<meta property="og:title" content="${esc(titel)}">
<meta property="og:description" content="${esc(omschrijving)}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="website">
<meta property="og:locale" content="nl_NL">
<meta property="og:image" content="https://leerkwartier.app/social/deel-start.jpg">
${ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n")}
<style>
  *{box-sizing:border-box}
  body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Arial,sans-serif;background:linear-gradient(160deg,#0f1729 0%,#162033 50%,#1a2744 100%);min-height:100vh;color:#e8edf5;line-height:1.6}
  .vel{max-width:720px;margin:0 auto;padding:28px 20px 60px}
  .merk{font-size:22px;font-weight:800;color:#00d4ff;text-decoration:none}
  .slogan{color:rgba(255,255,255,.6);font-size:14px;margin-bottom:20px}
  nav.bc{font-size:13px;opacity:.75;margin-bottom:14px}
  a{color:#69b2ff}
  h1{font-size:30px;line-height:1.2;color:#fff;margin:0 0 10px}
  h2{font-size:20px;color:#00d4ff;margin:30px 0 8px}
  p{margin:0 0 12px;color:rgba(255,255,255,.82)}
  .knop{display:block;text-align:center;background:linear-gradient(135deg,#00c853,#00e676);color:#06211a;text-decoration:none;font-weight:800;font-size:18px;padding:16px;border-radius:14px;margin:18px 0 8px}
  .knop.licht{background:none;border:2px solid rgba(255,255,255,.25);color:#fff;font-size:16px;padding:12px}
  .klein{font-size:13px;color:rgba(255,255,255,.55);text-align:center;margin:0 0 6px}
  .twee{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:520px){.twee{grid-template-columns:1fr}}
  .kaart{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 18px}
  .kaart h3{margin:0 0 6px;font-size:15px;color:#fff}
  table{border-collapse:collapse;font-size:17px;width:100%}
  td{padding:4px 6px;border-bottom:1px solid rgba(255,255,255,.07)}
  td:first-child{text-align:right;width:45%}
  td:nth-child(2){text-align:center;width:10%;opacity:.6}
  tr.extra td{opacity:.75}
  ol.sommen{columns:2;padding-left:22px;font-size:17px;margin:8px 0}
  ol.sommen li{padding:4px 0;break-inside:avoid}
  .lijn{display:inline-block;width:48px;border-bottom:1px solid rgba(255,255,255,.5)}
  details{margin:8px 0 0;font-size:15px}
  summary{cursor:pointer;color:#69b2ff}
  .rij{display:flex;justify-content:space-between;margin-top:26px;font-size:15px}
  .voet{margin-top:30px;font-size:12.5px;color:#7d8aa0}
</style>
</head>
<body>
<div class="vel">
  <a class="merk" href="/">Leerkwartier</a>
  <div class="slogan">Een kwartier per dag leren, een leven lang slimmer.</div>
  <nav class="bc"><a href="/">Home</a> › <a href="/tafels-oefenen.html">Tafels oefenen</a> › Tafel van ${n}</nav>

  <h1>Tafel van ${n} oefenen</h1>
  <p>Hieronder staat de hele tafel van ${n}, met een ezelsbruggetje, de deeltafel en tien sommen om meteen te proberen. De tafel van ${n} leren kinderen op de meeste scholen in ${info.groep}.</p>

  <a class="knop" href="/?go=tafels&amp;tafel=${n}&amp;utm_source=seo&amp;utm_campaign=tafel-van-${n}">Oefen de tafel van ${n} online</a>
  <p class="klein">Een korte ronde sommen. Geen account, geen reclame.</p>

  <h2>De tafel van ${n} op een rij</h2>
  <div class="twee">
    <div class="kaart">
      <h3>Keer</h3>
      <table>
        ${tafelRijen}
      </table>
    </div>
    <div class="kaart">
      <h3>Delen: de deeltafel van ${n}</h3>
      <table>
        ${deelRijen}
      </table>
    </div>
  </div>

  <h2>Ezelsbruggetje voor de tafel van ${n}</h2>
  <p>${esc(info.truc)}</p>
  <p>${esc(info.valtOp)}</p>
  <p>Omdraaien mag altijd: 4 × ${n} is hetzelfde als ${n} × 4. Elke som die je kind al kent uit een andere tafel, hoeft dus niet opnieuw geleerd te worden.</p>

  <h2>Tien sommen door elkaar</h2>
  <p>Op volgorde opzeggen is stap één. Echt kennen is: het antwoord weten als de sommen door elkaar staan.</p>
  <ol class="sommen">${sommen}</ol>
  <details><summary>Bekijk de antwoorden</summary><p>${antwoorden}</p></details>

  <h2>Liever op papier?</h2>
  <p>Print een werkblad met alleen de tafel van ${n}: op volgorde, door elkaar en met deelsommen, plus een tempotoets van vijf minuten en een antwoordblad. Elke keer nieuwe sommen.</p>
  <a class="knop licht" href="/tafelbladen?tafel=${n}&amp;utm_source=seo&amp;utm_campaign=tafel-van-${n}">Print het werkblad van de tafel van ${n}</a>

  <h2>Zo oefen je thuis</h2>
  <p>Vijf minuten per dag werkt beter dan één keer een uur in het weekend. Begin met opzeggen op volgorde, ga dan door elkaar, en eindig met de deelsommen. Gaat een som drie dagen achter elkaar vlot, dan zit hij erin. Meer uitleg voor thuis staat op <a href="/tafels-oefenen.html">tafels oefenen</a> en in <a href="/uitleg-thuis.html">zo leg je het thuis uit</a>.</p>

  <h2>Veelgestelde vragen</h2>
${faq.map(([q, a]) => `  <h3 style="font-size:16px;color:#fff;margin:14px 0 4px">${esc(q)}</h3>\n  <p>${esc(a)}</p>`).join("\n")}

  <h2>Alle tafels</h2>
  <p>Tafel van ${andere}</p>
  <div class="rij"><span>${vorige}</span><span>${volgende}</span></div>

  <div class="voet">Leerkwartier is gemaakt door één vader, zonder reclame en zonder doorverkoop van gegevens. Het oefenen is gratis, gegarandeerd tot en met 2031.</div>
</div>
</body>
</html>
`;
}

for (let n = 1; n <= 12; n++) writeFileSync(`public/tafel-van-${n}.html`, pagina(n));
console.log("[tafel-paginas] 12 pagina's geschreven (public/tafel-van-*.html)");

#!/usr/bin/env node
// scripts/buildDicteePaginas.mjs — 26 sep 2026.
// Een crawlbare pagina per groep: "dictee groep 6 oefenen" e.d.
//
// Waarom: de AI-assistenten-test van 26 sep (docs/AI-ASSISTENTEN-TEST-2026-09-26.md) liet zien dat
// op dictee- en spellingvragen van ouders simpele, specifieke pagina's winnen ("dictee groep 6"),
// en dat Leerkwartier daar 0 van 8 keer genoemd werd, terwijl het dictee live staat. De woorden,
// zinnen en regels komen uit dezelfde bron als de app (src/features/dictee/dicteeData.js), dus de
// pagina's lopen nooit uit de pas met wat een kind echt oefent.
//
// Output: public/dictee-groep-<4..8>.html  (sitemap-regels staan handmatig in public/sitemap.xml)
// Run: node scripts/buildDicteePaginas.mjs  (draait mee in prebuild)

import { writeFileSync } from "node:fs";
import { DICTEE } from "../src/features/dictee/dicteeData.js";

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const OVER = {
  4: "In groep 4 leren kinderen de eerste spellingregels: d of t aan het eind (verlengen: hond → honden), lange klanken (kaas, boot), -ng en -nk, cht, en woorden met au/ou en ei/ij die je moet onthouden.",
  5: "In groep 5 komen open en gesloten lettergrepen (bomen, bommen), -ig en -lijk, f/v en s/z (brieven, huizen), verkleinwoorden en hoofdletters bij namen.",
  6: "In groep 6 oefent je kind -isch en -heid, c als k of s, -tje/-pje/-kje, het trema, voorvoegsels, leenwoorden en de eerste werkwoordvormen (hij loopt, zij wordt).",
  7: "In groep 7 staat werkwoordspelling centraal: de tegenwoordige tijd (t, dt, 'word jij'), de verleden tijd, apostrof, tussen-n en tussen-s, en hoofdletters bij talen en feestdagen.",
  8: "In groep 8 komen het voltooid deelwoord ('t kofschip), gebeurd of gebeurt, -d of -t met een e erachter, Engelse werkwoorden in het Nederlands en lastige leenwoorden.",
};

function pagina(groep, items) {
  const cats = [...new Set(items.map((i) => i.cat).filter(Boolean))];
  const url = `https://leerkwartier.app/dictee-groep-${groep}.html`;
  const titel = `Dictee groep ${groep} oefenen — gratis online, met voorleesstem | Leerkwartier`;
  const omschrijving = `Gratis online dictee voor groep ${groep}: ${items.length} dicteewoorden in een zin (${cats.slice(0, 4).join(", ")}). De voorleesstem zegt de zin, je kind typt het woord. Fout? Meteen de spellingregel. Geen account.`;
  const faq = {
    "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
      { "@type": "Question", name: `Wat oefen je bij dictee in groep ${groep}?`, acceptedAnswer: { "@type": "Answer", text: `${OVER[groep]} Leerkwartier heeft ${items.length} dicteewoorden voor groep ${groep}, elk in een korte zin met de regel erbij.` } },
      { "@type": "Question", name: `Is er een gratis online dictee voor groep ${groep}?`, acceptedAnswer: { "@type": "Answer", text: `Ja: https://leerkwartier.app/dictee?groep=${groep}. De voorleesstem zegt een korte zin en daarna het woord; je kind typt het woord in het gat. Bij een fout staat het goede woord er meteen, met de regel in één zin. Tien woorden per keer, geen account nodig.` } },
      { "@type": "Question", name: "Kan ik de dicteewoorden van school oefenen?", acceptedAnswer: { "@type": "Answer", text: "Ja. Plak of typ de woordenlijst van school in het dictee onder 'Woorden van school'; de voorleesstem leest ze voor en je kind oefent precies die woorden." } },
    ],
  };
  const rijen = items.map((i) => `<tr><td><b>${esc(i.woord)}</b></td><td>${esc(i.zin)}</td><td>${esc(i.regel)}</td></tr>`).join("\n");
  const andere = [4, 5, 6, 7, 8].filter((g) => g !== groep).map((g) => `<a href="/dictee-groep-${g}.html">groep ${g}</a>`).join(" · ");
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
<script type="application/ld+json">${JSON.stringify(faq)}</script>
<style>
  body{margin:0;font-family:"Segoe UI",Arial,sans-serif;background:#0a0f1e;color:#e8edf5;line-height:1.55}
  .vel{max-width:720px;margin:0 auto;padding:28px 20px 60px}
  h1{font-size:26px;color:#fff;margin:0 0 6px}
  .sub{color:#69f0ae;font-weight:700;margin-bottom:18px}
  .knop{display:block;text-align:center;background:linear-gradient(135deg,#2e9e4f,#1f7a3a);color:#fff;text-decoration:none;font-weight:800;font-size:17px;padding:14px;border-radius:14px;margin:18px 0}
  h2{font-size:18px;color:#fff;margin:22px 0 6px}
  a{color:#69f0ae}
  table{width:100%;border-collapse:collapse;font-size:14px;margin:8px 0}
  th,td{text-align:left;padding:6px 8px;border-bottom:1px solid rgba(255,255,255,.1);vertical-align:top}
  th{color:#9fb0c6;font-size:12px;text-transform:uppercase;letter-spacing:.3px}
  .voet{margin-top:30px;font-size:12.5px;color:#7d8aa0}
</style>
</head>
<body>
<div class="vel">
  <div style="font-size:20px;font-weight:800;color:#fff">Leerkwartier</div>
  <div class="sub">Een kwartier per dag leren, een leven lang slimmer.</div>
  <h1>✍️ Dictee groep ${groep} oefenen</h1>
  <p>${esc(OVER[groep])}</p>
  <p>Zo werkt het: de voorleesstem zegt een korte zin en daarna het woord. Je kind ziet de zin met een gat en typt alleen dat woord. Fout? Dan staat het goede woord er meteen, met de regel in één zin. Tien woorden per keer, elke keer een andere mix.</p>
  <a class="knop" href="/dictee?groep=${groep}">▶ Start het dictee voor groep ${groep} — gratis, geen account</a>
  <h2>Alle ${items.length} dicteewoorden voor groep ${groep}</h2>
  <p style="font-size:14px;opacity:.85">Handig om samen door te lezen of voor te lezen. Onderwerpen: ${esc(cats.join(", "))}.</p>
  <table>
    <tr><th>Woord</th><th>Zin</th><th>Regel</th></tr>
${rijen}
  </table>
  <h2>De woorden van school oefenen</h2>
  <p>Krijgt je kind elke week een woordenlijst mee? Plak of typ die in het dictee onder <b>Woorden van school</b>. De voorleesstem leest ze voor en je kind oefent precies de woorden die op school komen. Meer uitleg: <a href="/dictee-oefenen.html">dictee oefenen</a>.</p>
  <h2>Andere groepen</h2>
  <p>Dictee ${andere}. Ook: de <a href="/werkwoordspelling-oefenen.html">werkwoordspellingtest</a> (groep 6-8).</p>
  <div class="voet">Leerkwartier is gemaakt door één vader, zonder reclame en zonder doorverkoop van gegevens. Deze pagina wordt gemaakt uit dezelfde woordenlijst als het dictee in de app.</div>
</div>
</body>
</html>
`;
}

let n = 0;
for (const g of [4, 5, 6, 7, 8]) {
  const items = DICTEE[g];
  if (!Array.isArray(items) || !items.length) continue;
  writeFileSync(`public/dictee-groep-${g}.html`, pagina(g, items));
  n++;
}
console.log(`[dictee-paginas] ${n} pagina's geschreven (public/dictee-groep-*.html)`);

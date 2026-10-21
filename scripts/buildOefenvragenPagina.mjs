#!/usr/bin/env node
// scripts/buildOefenvragenPagina.mjs — groeiplan punt 3 (Mark 21 okt 2026).
//
// Waarom: Search Console (90 dgn t/m 18 okt) gaf voor alle "doorstroom"-pagina's samen
// 2 klikken en 89 vertoningen; de oefen- en gidspagina werden niet eens vertoond. Die
// pagina's beschrijven de app, maar bevatten zelf weinig unieks. Ouders zoeken in
// december/januari op "doorstroomtoets oefenvragen" — dus: een pagina mét echte
// oefenvragen, antwoord en uitleg, crawlbaar. Uit onze eigen, nagekeken banken
// (Doorstroomtoets-copyrightregel: eigen vragen "in de stijl van", nooit gekopieerd).
//
// Output: public/doorstroomtoets-oefenvragen.html (in prebuild; staat in sitemap/llms.txt).
// Selectie: per onderdeel 12 vragen, gelijk verdeeld over de stappen: de eerste vragen met 4 opties + uitleg die zonder
// leestekst, tabel of kaart te begrijpen zijn. Deterministisch: zelfde bank = zelfde pagina.

import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const SITE = "https://leerkwartier.app";
const UIT = join(ROOT, "public", "doorstroomtoets-oefenvragen.html");

const BANKEN = [
  { file: "doorstroomtoetsTaalG8", kop: "Taal", anker: "taal", uitleg: "Woordenschat, begrijpend lezen, spelling, interpunctie en werkwoordspelling." },
  { file: "doorstroomtoetsRekenenG8", kop: "Rekenen", anker: "rekenen", uitleg: "Breuken, procenten, meten, geld, tijd en redactiesommen." },
  { file: "doorstroomtoetsStudievaardighedenG8", kop: "Studievaardigheden", anker: "studievaardigheden", uitleg: "Informatie opzoeken, schema's, bronnen en naslag." },
];
const PER_ONDERDEEL = 12; // evenwicht: elke bank evenveel, verdeeld over de stappen
const VERBODEN = /\b(tekst|bron|tabel|kaart|grafiek|schema|plaatje|afbeelding|hierboven|hieronder|legenda|dienstregeling|rooster|figuur|zie)\b/i;

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const md = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
const kaal = (s) => String(s ?? "").replace(/\*\*?/g, "").replace(/\s+/g, " ").trim();
const kopKort = (t) => String(t).split(" — ")[0].trim();

// Uitleg: de losse uitleg, anders de eerste twee niveaus van het uitlegpad.
// (`ref` is alleen een vaardigheidslabel zoals "S", geen verwijzing naar een tekst.)
function uitlegVan(c) {
  if (c.explanation) return c.explanation;
  const n = c.uitlegPad?.niveaus;
  return n ? [n.basis, n.simpeler].filter(Boolean).join(" ") : "";
}

// In de banken staat het goede antwoord vaak op plek A; de app husselt bij het tonen.
// Op een vaste pagina zou het dan altijd A zijn. Daarom vast husselen per vraagnummer
// (zelfde nummer = zelfde volgorde, dus de pagina verandert niet bij elke build).
function hussel(c, zaad) {
  let x = (zaad * 2654435761) >>> 0;
  const rnd = () => ((x = (x * 1664525 + 1013904223) >>> 0) / 4294967296);
  const volgorde = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [volgorde[i], volgorde[j]] = [volgorde[j], volgorde[i]]; }
  return { ...c, options: volgorde.map((i) => c.options[i]), answer: volgorde.indexOf(c.answer) };
}

function bruikbaar(c) {
  return Array.isArray(c.options) && c.options.length === 4 && Number.isInteger(c.answer)
    && uitlegVan(c).length >= 20 && !c.kind
    && String(c.q).length <= 220 && !String(c.q).includes("|") && !VERBODEN.test(c.q);
}

const secties = [];
const ldVragen = [];
let nr = 0;
for (const bank of BANKEN) {
  const pad = (await import(pathToFileURL(join(ROOT, "src", "learnPaths", `${bank.file}.js`)).href)).default;
  const blokken = [];
  const stappen = pad.steps || [];
  const perStap = Math.ceil(PER_ONDERDEEL / stappen.length);
  for (const stap of stappen) {
    if (blokken.length >= PER_ONDERDEEL) break;
    const gekozen = (stap.checks || []).filter(bruikbaar).slice(0, Math.min(perStap, PER_ONDERDEEL - blokken.length));
    for (const c0 of gekozen) {
      nr++;
      const c = hussel(c0, nr);
      const letters = ["A", "B", "C", "D"];
      blokken.push(`<div class="vraag" id="vraag-${nr}">
  <p class="q"><span class="nr">${nr}.</span> ${md(c.q)}</p>
  <ol class="opties" type="A">${c.options.map((o) => `<li>${md(o)}</li>`).join("")}</ol>
  <details><summary>Bekijk het antwoord en de uitleg</summary>
    <p><strong>Goed antwoord: ${letters[c.answer]}. ${md(c.options[c.answer])}</strong></p>
    <p>${md(uitlegVan(c))}</p>
  </details>
  <p class="soort">${esc(bank.kop)} · ${esc(kopKort(stap.title))}</p>
</div>`);
      ldVragen.push({ "@type": "Question", name: kaal(c.q), eduQuestionType: "Multiple choice",
        acceptedAnswer: { "@type": "Answer", text: `${kaal(c.options[c.answer])}. ${kaal(uitlegVan(c))}` } });
    }
  }
  secties.push({ ...bank, padId: pad.id, html: blokken.join("\n"), aantal: blokken.length });
}
if (nr < 20) throw new Error(`te weinig bruikbare vragen (${nr}) — selectie te streng?`);

const vandaag = new Date().toISOString().slice(0, 10);
const ld = [
  { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Doorstroomtoets oefenen", item: `${SITE}/doorstroomtoets-oefenen.html` },
    { "@type": "ListItem", position: 3, name: "Oefenvragen", item: `${SITE}/doorstroomtoets-oefenvragen.html` } ] },
  { "@context": "https://schema.org", "@type": "Quiz", name: "Doorstroomtoets oefenvragen met antwoorden en uitleg (groep 8)",
    url: `${SITE}/doorstroomtoets-oefenvragen.html`, inLanguage: "nl", isAccessibleForFree: true, educationalLevel: "basisonderwijs groep 7-8",
    about: ["Doorstroomtoets", "taal", "rekenen", "studievaardigheden"], dateModified: vandaag,
    provider: { "@type": "Organization", name: "Leerkwartier", url: SITE }, hasPart: ldVragen },
];

const html = `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- GEGENEREERD door scripts/buildOefenvragenPagina.mjs — niet met de hand bewerken. -->
<title>Doorstroomtoets oefenvragen met antwoorden en uitleg (gratis, groep 8) · Leerkwartier</title>
<meta name="description" content="${nr} gratis Doorstroomtoets-oefenvragen voor groep 7 en 8, met het goede antwoord en uitleg in gewone taal: taal, rekenen en studievaardigheden. Oefen daarna verder in de app, zonder account.">
<link rel="canonical" href="${SITE}/doorstroomtoets-oefenvragen.html">
<meta name="robots" content="index,follow">
<meta property="og:title" content="Doorstroomtoets oefenvragen met antwoorden en uitleg">
<meta property="og:description" content="${nr} gratis oefenvragen voor groep 7-8: taal, rekenen en studievaardigheden, met uitleg.">
<meta property="og:url" content="${SITE}/doorstroomtoets-oefenvragen.html">
<meta property="og:image" content="${SITE}/logo.jpg">
<meta property="og:type" content="website">
<meta property="og:locale" content="nl_NL">
${ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join("\n")}
<style>
  :root { color-scheme: dark; }
  body { margin: 0; background: #0b1224; color: #e8eef7; font-family: "Segoe UI", system-ui, sans-serif; line-height: 1.6; }
  main { max-width: 820px; margin: 0 auto; padding: 22px 16px 48px; }
  a { color: #8fd3ff; }
  .kruimel { font-size: 13px; opacity: .75; }
  .hero { margin: 14px 0 18px; padding: 22px; border-radius: 18px; border: 2px solid rgba(66,165,245,.55); background: linear-gradient(135deg, rgba(66,165,245,.16), rgba(30,45,70,.7)); }
  h1 { font-size: 28px; line-height: 1.2; margin: 0 0 10px; color: #fff; }
  .hero p { margin: 0 0 10px; font-size: 16px; }
  .inhoud a { display: inline-block; margin: 4px 8px 4px 0; padding: 6px 12px; border-radius: 999px; border: 1px solid #2a3f5f; text-decoration: none; font-weight: 700; font-size: 14px; }
  h2 { font-size: 22px; margin: 34px 0 6px; color: #fff; }
  .sub { margin: 0 0 12px; opacity: .85; }
  .vraag { padding: 14px 16px; border-radius: 14px; background: rgba(30,45,70,.55); border: 1px solid #2a3f5f; margin: 10px 0; }
  .q { margin: 0 0 6px; font-size: 16.5px; }
  .nr { font-weight: 900; color: #ffd54f; margin-right: 4px; }
  .opties { margin: 0 0 8px 22px; padding: 0; }
  .opties li { margin: 2px 0; }
  details { margin-top: 6px; }
  summary { cursor: pointer; font-weight: 800; color: #69f0ae; }
  details p { margin: 6px 0 0; }
  .soort { margin: 8px 0 0; font-size: 12.5px; opacity: .6; }
  .meer { display: inline-block; margin: 8px 0 0; padding: 12px 18px; border-radius: 12px; background: #ffd54f; color: #0b1224; font-weight: 900; text-decoration: none; box-shadow: 0 4px 0 #c9a227; }
  .noot { margin-top: 28px; font-size: 14px; opacity: .8; }
  footer { margin-top: 24px; font-size: 13px; opacity: .75; }
  @media (max-width: 640px) { h1 { font-size: 24px; } }
</style>
</head>
<body>
<main>
<p class="kruimel"><a href="/">Leerkwartier</a> › <a href="/doorstroomtoets-oefenen.html">Doorstroomtoets oefenen</a> › Oefenvragen</p>
<section class="hero">
  <h1>Doorstroomtoets oefenvragen met antwoorden en uitleg</h1>
  <p>${nr} gratis oefenvragen voor groep 7 en 8, verdeeld over taal, rekenen en studievaardigheden. Probeer eerst zelf, open dan het antwoord: bij elke vraag staat in gewone taal waarom het zo is.</p>
  <p>Meer oefenen? In de app staan per onderdeel honderden vragen, met hulp op drie niveaus als het niet lukt. Gratis, zonder account.</p>
  <div class="inhoud">${secties.map((s) => `<a href="#${s.anker}">${esc(s.kop)} (${s.aantal})</a>`).join("")}</div>
</section>
${secties.map((s) => `
<h2 id="${s.anker}">${esc(s.kop)}</h2>
<p class="sub">${esc(s.uitleg)}</p>
${s.html}
<a class="meer" href="/leren/pad?id=${s.padId}&amp;utm_source=oefenvragen&amp;utm_medium=seo">Oefen meer ${esc(s.kop.toLowerCase())} in de app →</a>`).join("\n")}
<p class="noot">Dit zijn eigen oefenvragen van Leerkwartier in de stijl van de Doorstroomtoets, geen echte toetsvragen. De Doorstroomtoets in groep 8 bestaat uit lezen, taalverzorging en rekenen; studievaardigheden helpen bij alle drie. Meer uitleg over de toets: <a href="/doorstroomtoets-2027-gids.html">de Doorstroomtoets 2027-gids</a>. Fout gezien? Mail <a href="mailto:hallo@leerkwartier.app">hallo@leerkwartier.app</a>.</p>
<footer>Leerkwartier — Een kwartier per dag leren, een leven lang slimmer. · Oefenen is gratis, gegarandeerd tot en met 2031 · Bijgewerkt ${vandaag}</footer>
</main>
</body>
</html>
`;
writeFileSync(UIT, html, "utf8");
console.log(`[oefenvragen] ${nr} vragen → public/doorstroomtoets-oefenvragen.html (${secties.map((s) => `${s.kop} ${s.aantal}`).join(", ")})`);

#!/usr/bin/env node
// scripts/buildOefenvragenPagina.mjs — groeiplan punt 3 (Mark 21 okt 2026), uitgebreid 3 nov 2026.
//
// Waarom: Search Console (90 dgn t/m 18 okt) gaf voor alle "doorstroom"-pagina's samen
// 2 klikken en 89 vertoningen; de oefen- en gidspagina werden niet eens vertoond. Die
// pagina's beschrijven de app, maar bevatten zelf weinig unieks. Ouders zoeken in
// december/januari op "doorstroomtoets oefenvragen" — dus: pagina's mét echte
// oefenvragen, antwoord en uitleg, crawlbaar. Uit onze eigen, nagekeken banken
// (Doorstroomtoets-copyrightregel: eigen vragen "in de stijl van", nooit gekopieerd).
//
// Output (in prebuild; sitemap scant public/*.html, llms.txt met de hand bijhouden):
//   public/doorstroomtoets-oefenvragen.html                      overzicht, 12 per onderdeel (36)
//   public/doorstroomtoets-oefenvragen-taal.html                 per onderdeel, tot 40 vragen
//   public/doorstroomtoets-oefenvragen-rekenen.html              (3 nov 2026: na de integrale nakijkronde
//   public/doorstroomtoets-oefenvragen-studievaardigheden.html    van de drie groep 8-banken)
// Selectie: gelijk verdeeld over de stappen, alleen vragen met 4 opties + uitleg die zonder
// leestekst, tabel of kaart te begrijpen zijn. Deterministisch: zelfde bank = zelfde pagina.

import { writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const SITE = "https://leerkwartier.app";

const BANKEN = [
  { file: "doorstroomtoetsTaalG8", kop: "Taal", anker: "taal", slug: "taal", uitleg: "Woordenschat, begrijpend lezen, spelling, interpunctie en werkwoordspelling.",
    zoek: "Doorstroomtoets taal oefenen: woordenschat, spelling, werkwoordspelling, interpunctie en begrijpend lezen voor groep 8",
    intro: "Taal op de Doorstroomtoets betekent: lezen (begrijpend lezen, signaalwoorden, verwijswoorden) en taalverzorging (spelling, werkwoordspelling, interpunctie). Hieronder oefen je precies die onderdelen." },
  { file: "doorstroomtoetsRekenenG8", kop: "Rekenen", anker: "rekenen", slug: "rekenen", uitleg: "Breuken, procenten, meten, geld, tijd en redactiesommen.",
    zoek: "Doorstroomtoets rekenen oefenen: breuken, procenten, kommagetallen, meten, geld en tijd voor groep 8",
    intro: "Rekenen op de Doorstroomtoets gaat over getallen en bewerkingen, breuken, procenten en kommagetallen, meten en meetkunde, verhoudingen en verbanden (tabellen en grafieken). Veel sommen zijn redactiesommen: een kort verhaal waar je zelf de som uit moet halen." },
  { file: "doorstroomtoetsStudievaardighedenG8", kop: "Studievaardigheden", anker: "studievaardigheden", slug: "studievaardigheden", uitleg: "Informatie opzoeken, schema's, bronnen en naslag.",
    zoek: "Doorstroomtoets studievaardigheden oefenen: informatie opzoeken, tabellen en schema's lezen, woordenboek en alfabet voor groep 8",
    intro: "Studievaardigheden helpen bij alle onderdelen van de Doorstroomtoets: informatie opzoeken in een tabel, schema of register, een woordenboek of alfabetische lijst gebruiken, een plattegrond lezen en bronnen beoordelen." },
];
const PER_ONDERDEEL_OVERZICHT = 12;
const PER_ONDERDEEL_DETAIL = 40;
const VERBODEN = /\b(tekst|bron|tabel|kaart|grafiek|schema|plaatje|afbeelding|hierboven|hieronder|legenda|dienstregeling|rooster|figuur|zie)\b/i;

const esc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const md = (s) => esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/\*([^*]+)\*/g, "<em>$1</em>");
const kaal = (s) => String(s ?? "").replace(/\*\*?/g, "").replace(/\s+/g, " ").trim();
const kopKort = (t) => String(t).split(" — ")[0].trim();

// Uitleg: de losse uitleg, anders de eerste twee niveaus van het uitlegpad.
function uitlegVan(c) {
  if (c.explanation) return c.explanation;
  const n = c.uitlegPad?.niveaus ?? c.niveaus;
  return n ? [n.basis, n.simpeler].filter(Boolean).join(" ") : "";
}

// In de banken staat het goede antwoord vaak op plek A; de app husselt bij het tonen.
// Op een vaste pagina zou het dan altijd A zijn. Daarom vast husselen per vraagnummer.
function hussel(c, zaad) {
  let x = (zaad * 2654435761) >>> 0;
  const rnd = () => ((x = (x * 1664525 + 1013904223) >>> 0) / 4294967296);
  const volgorde = [0, 1, 2, 3];
  for (let i = 3; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [volgorde[i], volgorde[j]] = [volgorde[j], volgorde[i]]; }
  return { ...c, options: volgorde.map((i) => c.options[i]), answer: volgorde.indexOf(c.answer) };
}

function bruikbaar(c) {
  return Array.isArray(c.options) && c.options.length === 4 && Number.isInteger(c.answer) && !c.disabled
    && uitlegVan(c).length >= 20 && !c.kind
    && String(c.q).length <= 220 && !String(c.q).includes("|") && !VERBODEN.test(c.q);
}

// Kies per bank `max` vragen, gelijk verdeeld over de stappen (ronde na ronde, zodat elk
// onderwerp aan bod komt). Overslaan: vragen die in `skip` zitten (zelfde vraagtekst).
function selecteer(pad, max, skip = new Set()) {
  const stappen = (pad.steps || []).map((s) => ({ stap: s, lijst: (s.checks || []).filter((c) => bruikbaar(c) && !skip.has(kaal(c.q))) }));
  const uit = [];
  for (let ronde = 0; uit.length < max; ronde++) {
    let gevonden = false;
    for (const { stap, lijst } of stappen) {
      if (uit.length >= max) break;
      if (lijst[ronde]) { uit.push({ stap, c: lijst[ronde] }); gevonden = true; }
    }
    if (!gevonden) break;
  }
  return uit;
}

function vraagBlok(nr, c0, bank, stap, ldVragen) {
  const c = hussel(c0, nr);
  const letters = ["A", "B", "C", "D"];
  ldVragen.push({ "@type": "Question", name: kaal(c.q), eduQuestionType: "Multiple choice",
    acceptedAnswer: { "@type": "Answer", text: `${kaal(c.options[c.answer])}. ${kaal(uitlegVan(c))}` } });
  return `<div class="vraag" id="vraag-${nr}">
  <p class="q"><span class="nr">${nr}.</span> ${md(c.q)}</p>
  <ol class="opties" type="A">${c.options.map((o) => `<li>${md(o)}</li>`).join("")}</ol>
  <details><summary>Bekijk het antwoord en de uitleg</summary>
    <p><strong>Goed antwoord: ${letters[c.answer]}. ${md(c.options[c.answer])}</strong></p>
    <p>${md(uitlegVan(c))}</p>
  </details>
  <p class="soort">${esc(bank.kop)} · ${esc(kopKort(stap.title))}</p>
</div>`;
}

const STIJL = `<style>
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
</style>`;

const NOOT = `<p class="noot">Dit zijn eigen oefenvragen van Leerkwartier in de stijl van de Doorstroomtoets, geen echte toetsvragen. De Doorstroomtoets in groep 8 bestaat uit lezen, taalverzorging en rekenen; studievaardigheden helpen bij alle drie. Meer uitleg over de toets: <a href="/doorstroomtoets-2027-gids.html">de Doorstroomtoets 2027-gids</a>. Fout gezien? Mail <a href="mailto:hallo@leerkwartier.app">hallo@leerkwartier.app</a>.</p>`;
const vandaag = new Date().toISOString().slice(0, 10);
const voet = `<footer>Leerkwartier — Een kwartier per dag leren, een leven lang slimmer. · Oefenen is gratis, gegarandeerd tot en met 2031 · Bijgewerkt ${vandaag}</footer>`;

function paginaHtml({ url, titel, beschrijving, ogTitel, kruimelLaatste, heroH1, heroTekst, inhoudLinks, body, ld }) {
  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- GEGENEREERD door scripts/buildOefenvragenPagina.mjs — niet met de hand bewerken. -->
<title>${esc(titel)}</title>
<meta name="description" content="${esc(beschrijving)}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index,follow">
<meta property="og:title" content="${esc(ogTitel)}">
<meta property="og:description" content="${esc(beschrijving)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/logo.jpg">
<meta property="og:type" content="website">
<meta property="og:locale" content="nl_NL">
${ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x)}</script>`).join("\n")}
${STIJL}
</head>
<body>
<main>
<p class="kruimel"><a href="/">Leerkwartier</a> › <a href="/doorstroomtoets-oefenen.html">Doorstroomtoets oefenen</a> › ${kruimelLaatste}</p>
<section class="hero">
  <h1>${heroH1}</h1>
  ${heroTekst}
  <div class="inhoud">${inhoudLinks}</div>
</section>
${body}
${NOOT}
${voet}
</main>
</body>
</html>
`;
}

const kruimels = (extra) => ({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
  { "@type": "ListItem", position: 2, name: "Doorstroomtoets oefenen", item: `${SITE}/doorstroomtoets-oefenen.html` },
  ...extra.map((e, i) => ({ "@type": "ListItem", position: 3 + i, name: e.name, item: e.item })) ] });

// ── Banken laden ──────────────────────────────────────────────────────────────
const geladen = [];
for (const bank of BANKEN) {
  const pad = (await import(pathToFileURL(join(ROOT, "src", "learnPaths", `${bank.file}.js`)).href)).default;
  geladen.push({ bank, pad });
}

// ── 1. Overzichtspagina (ongewijzigd gedrag: 12 per onderdeel) ───────────────
{
  const secties = []; const ldVragen = []; let nr = 0;
  for (const { bank, pad } of geladen) {
    const blokken = [];
    for (const { stap, c } of selecteer(pad, PER_ONDERDEEL_OVERZICHT)) { nr++; blokken.push(vraagBlok(nr, c, bank, stap, ldVragen)); }
    secties.push({ ...bank, padId: pad.id, html: blokken.join("\n"), aantal: blokken.length });
  }
  if (nr < 20) throw new Error(`te weinig bruikbare vragen (${nr}) — selectie te streng?`);
  const url = `${SITE}/doorstroomtoets-oefenvragen.html`;
  const ld = [kruimels([{ name: "Oefenvragen", item: url }]),
    { "@context": "https://schema.org", "@type": "Quiz", name: "Doorstroomtoets oefenvragen met antwoorden en uitleg (groep 8)", url, inLanguage: "nl", isAccessibleForFree: true,
      educationalLevel: "basisonderwijs groep 7-8", about: ["Doorstroomtoets", "taal", "rekenen", "studievaardigheden"], dateModified: vandaag,
      provider: { "@type": "Organization", name: "Leerkwartier", url: SITE }, hasPart: ldVragen }];
  const body = secties.map((s) => `
<h2 id="${s.anker}">${esc(s.kop)}</h2>
<p class="sub">${esc(s.uitleg)} <a href="/doorstroomtoets-oefenvragen-${s.slug}.html">Meer ${esc(s.kop.toLowerCase())}-vragen →</a></p>
${s.html}
<a class="meer" href="/leren/pad?id=${s.padId}&amp;utm_source=oefenvragen&amp;utm_medium=seo">Oefen meer ${esc(s.kop.toLowerCase())} in de app →</a>`).join("\n");
  writeFileSync(join(ROOT, "public", "doorstroomtoets-oefenvragen.html"), paginaHtml({
    url, titel: "Doorstroomtoets oefenvragen met antwoorden en uitleg (gratis, groep 8) · Leerkwartier",
    beschrijving: `${nr} gratis Doorstroomtoets-oefenvragen voor groep 7 en 8, met het goede antwoord en uitleg in gewone taal: taal, rekenen en studievaardigheden. Oefen daarna verder in de app, zonder account.`,
    ogTitel: "Doorstroomtoets oefenvragen met antwoorden en uitleg", kruimelLaatste: "Oefenvragen",
    heroH1: "Doorstroomtoets oefenvragen met antwoorden en uitleg",
    heroTekst: `<p>${nr} gratis oefenvragen voor groep 7 en 8, verdeeld over taal, rekenen en studievaardigheden. Probeer eerst zelf, open dan het antwoord: bij elke vraag staat in gewone taal waarom het zo is.</p>
  <p>Meer oefenen? In de app staan per onderdeel honderden vragen, met hulp op drie niveaus als het niet lukt. Gratis, zonder account. Per onderdeel staat er ook een pagina met ${PER_ONDERDEEL_DETAIL} vragen: <a href="/doorstroomtoets-oefenvragen-taal.html">taal</a>, <a href="/doorstroomtoets-oefenvragen-rekenen.html">rekenen</a> en <a href="/doorstroomtoets-oefenvragen-studievaardigheden.html">studievaardigheden</a>.</p>`,
    inhoudLinks: secties.map((s) => `<a href="#${s.anker}">${esc(s.kop)} (${s.aantal})</a>`).join(""), body, ld }), "utf8");
  console.log(`[oefenvragen] ${nr} vragen → public/doorstroomtoets-oefenvragen.html (${secties.map((s) => `${s.kop} ${s.aantal}`).join(", ")})`);
}

// ── 2. Per onderdeel een eigen pagina (tot 40 vragen, per stap gegroepeerd) ──
for (const { bank, pad } of geladen) {
  const keuze = selecteer(pad, PER_ONDERDEEL_DETAIL);
  const ldVragen = []; let nr = 0;
  // Eerst per stap groeperen, dán nummeren: anders springen de nummers (1, 7, 13, …) binnen een deel.
  const groepen = new Map();
  for (const { stap, c } of keuze) { const k = kopKort(stap.title); if (!groepen.has(k)) groepen.set(k, []); groepen.get(k).push({ stap, c }); }
  const perStap = new Map();
  for (const [k, lijst] of groepen) perStap.set(k, lijst.map(({ stap, c }) => { nr++; return vraagBlok(nr, c, bank, stap, ldVragen); }));
  const url = `${SITE}/doorstroomtoets-oefenvragen-${bank.slug}.html`;
  const andere = BANKEN.filter((b) => b.slug !== bank.slug);
  const ld = [kruimels([{ name: "Oefenvragen", item: `${SITE}/doorstroomtoets-oefenvragen.html` }, { name: bank.kop, item: url }]),
    { "@context": "https://schema.org", "@type": "Quiz", name: `Doorstroomtoets ${bank.kop.toLowerCase()} oefenen: ${nr} oefenvragen met antwoorden en uitleg (groep 8)`, url, inLanguage: "nl",
      isAccessibleForFree: true, educationalLevel: "basisonderwijs groep 7-8", about: ["Doorstroomtoets", bank.kop.toLowerCase()], dateModified: vandaag,
      provider: { "@type": "Organization", name: "Leerkwartier", url: SITE }, hasPart: ldVragen }];
  const body = [...perStap.entries()].map(([k, blokken], i) => `
<h2 id="deel-${i + 1}">${esc(k)}</h2>
${blokken.join("\n")}`).join("\n") + `
<a class="meer" href="/leren/pad?id=${pad.id}&amp;utm_source=oefenvragen-${bank.slug}&amp;utm_medium=seo">Oefen meer ${esc(bank.kop.toLowerCase())} in de app →</a>
<p class="sub" style="margin-top:18px">Ook oefenen: ${andere.map((b) => `<a href="/doorstroomtoets-oefenvragen-${b.slug}.html">${esc(b.kop.toLowerCase())}</a>`).join(" · ")} · <a href="/doorstroomtoets-oefenvragen.html">overzicht</a> · <a href="/weektaak?g=8">weektaak groep 8</a></p>`;
  writeFileSync(join(ROOT, "public", `doorstroomtoets-oefenvragen-${bank.slug}.html`), paginaHtml({
    url, titel: `${bank.zoek} · Leerkwartier`,
    beschrijving: `${nr} gratis oefenvragen ${bank.kop.toLowerCase()} in de stijl van de Doorstroomtoets, met antwoord en uitleg in gewone taal. ${bank.uitleg} Verder oefenen in de app, zonder account.`,
    ogTitel: `Doorstroomtoets ${bank.kop.toLowerCase()} oefenen: ${nr} vragen met uitleg`, kruimelLaatste: `<a href="/doorstroomtoets-oefenvragen.html">Oefenvragen</a> › ${esc(bank.kop)}`,
    heroH1: `Doorstroomtoets ${esc(bank.kop.toLowerCase())} oefenen: ${nr} oefenvragen met uitleg`,
    heroTekst: `<p>${esc(bank.intro)}</p><p>Probeer eerst zelf, open dan het antwoord. Lukt het niet? In de app krijgt een kind bij elke vraag hulp op drie niveaus, tot het het snapt. Gratis, zonder account.</p>`,
    inhoudLinks: [...perStap.keys()].map((k, i) => `<a href="#deel-${i + 1}">${esc(k)}</a>`).join(""), body, ld }), "utf8");
  console.log(`[oefenvragen] ${nr} vragen → public/doorstroomtoets-oefenvragen-${bank.slug}.html (${perStap.size} delen)`);
}

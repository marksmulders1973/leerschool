#!/usr/bin/env node
// scripts/buildToetsGroepPaginas.mjs — 26 nov 2026.
// Een crawlbare pagina per groep: "cito toets groep 5 oefenen" e.d.
// (public/cito-toets-groep-<3..8>-oefenen.html).
//
// Waarom: de sitemap-vergelijking van 26 nov liet zien dat andere oefensites per groep 3-8 een pagina
// over de toetsen van het leerlingvolgsysteem hebben; Leerkwartier had dat alleen voor groep 8, terwijl
// de Kwartiercheck sinds 29 sep per groep 3-8 bestaat. Onderwerpen en voorbeeldvragen komen uit dezelfde
// bron als de check (src/features/kwartiercheck/groepen), dus de pagina loopt nooit uit de pas.
// De knop opent de check met de groep al gekozen (/?go=kwartiercheck&groep=5).
//
// Bestandsnaam met "cito" (zoekwoord van ouders, zie CLAUDE.md § Copy); de tekst zegt eerlijk dat de
// vragen eigen vragen zijn en dat Leerkwartier niet aan een toetsaanbieder verbonden is.
//
// Run: node scripts/buildToetsGroepPaginas.mjs  (draait mee in prebuild; sitemap-regels staan in public/sitemap.xml)

import { existsSync, writeFileSync } from "node:fs";
import { GROEP_SETS } from "../src/features/kwartiercheck/groepen/index.js";
import { KWARTIERCHECK_VRAGEN } from "../src/features/kwartiercheck/questions.js";

const esc = (t) => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const VAK = { rekenen: "Rekenen", taal: "Taal en spelling", lezen: "Lezen", "begrijpend-lezen": "Begrijpend lezen" };
const VAK_VOLGORDE = ["rekenen", "taal", "lezen", "begrijpend-lezen"];

// Wat er per groep getoetst wordt. Bron: docs/kwartiercheck/CONCEPTEN-PER-GROEP.md (SLO-tussendoelen).
const OVER = {
  3: {
    rekenen: "Tellen en getallen tot 20 (aan het eind van het jaar tot 100), erbij en eraf tot 10 en daarna tot 20, splitsen, hele uren op de klok en kleine bedragen met munten.",
    taal: "Klanken horen, rijmen en korte woorden schrijven zoals je ze hoort (pen, maan, kast), later ook woorden met sch, -ng en -nk.",
    lezen: "Letters en klanken kennen en korte woorden en zinnetjes vlot lezen. Begrijpend lezen komt pas aan het eind van groep 3 of in groep 4.",
    thuis: "In groep 3 is elke dag tien minuten samen lezen het meeste waard. Voor rekenen: tellen, splitsen (7 is 3 en 4) en sommetjes tot 10 tot ze vanzelf gaan.",
  },
  4: {
    rekenen: "Getallen tot 100 (tientallen en eenheden), plus en min tot 100, de eerste tafels (1, 2, 5 en 10, daarna 3 en 4), hele en halve uren en kwartieren, geld tot € 100 en meten in meters en centimeters.",
    taal: "Spelling van lastige klanken (ei of ij, au of ou, -cht, een d aan het eind zoals in hond), open en gesloten lettergrepen (bomen, bommen), en de eerste woordsoorten: zelfstandig naamwoord, werkwoord en lidwoord.",
    lezen: "De eerste toets begrijpend lezen: korte teksten van een paar zinnen, met vragen over wie, wat, waar en wat er eerst gebeurde.",
    thuis: "In groep 4 helpt het om de tafels van 1, 2, 5 en 10 te automatiseren en elke dag een stukje te lezen en er één vraag over te stellen: wat gebeurde er?",
  },
  5: {
    rekenen: "Getallen tot 1000 en afronden, plus en min tot 1000 (ook onder elkaar), alle tafels van 1 tot en met 10 met de deelsommen erbij, klokkijken op de minuut (ook digitaal), tijdsduur en geld met een komma.",
    taal: "Spelling van langere woorden (-ig en -lijk, verkleinwoorden, brief wordt brieven, huis wordt huizen), hoofdletters en punten, en woordsoorten: zelfstandig naamwoord, werkwoord en bijvoeglijk naamwoord.",
    lezen: "Teksten van een of twee alinea's: wie, wat en waarom, de volgorde van gebeurtenissen en de betekenis van een woord uit de zin halen.",
    thuis: "In groep 5 moeten de tafels van 1 tot en met 10 vlot gaan; dat is de basis voor bijna al het rekenwerk daarna. Vijf minuten per dag is genoeg.",
  },
  6: {
    rekenen: "Grote getallen tot 100.000 en afronden, vermenigvuldigen en delen op papier (4 × 38, 78 : 5 met rest), kommagetallen, de eerste breuken (een kwart van 28), omtrek en oppervlakte, en omrekenen van lengte, gewicht en inhoud.",
    taal: "Werkwoorden in de tegenwoordige tijd (hij wordt, jij loopt), woorden als politie en vrijheid, leenwoorden, en zinsdelen en woordsoorten: onderwerp, persoonsvorm, voorzetsel.",
    lezen: "Langere teksten met tussenkopjes: informatie opzoeken, verwijswoorden (wie is 'hij'?) en verbanden tussen zinnen.",
    thuis: "In groep 6 beginnen breuken en werkwoordspelling. Wie daar nu rustig de basis van legt, heeft er in groep 7 en 8 het meeste aan.",
  },
  7: {
    rekenen: "Rekenen met breuken (vereenvoudigen, optellen en aftrekken), kommagetallen tot drie cijfers achter de komma, de eerste procenten (10% korting), schaal, en het hele metrieke stelsel met omtrek en oppervlakte.",
    taal: "Werkwoordspelling in de verleden tijd en het voltooid deelwoord ('t kofschip), leestekens en hoofdletters, leenwoorden, en woordenschat met uitdrukkingen.",
    lezen: "Teksten van twee of drie alinea's: de hoofdgedachte vinden, signaalwoorden (omdat, maar, daardoor) en verbanden zoals oorzaak en gevolg.",
    thuis: "De toetsen van groep 7 tellen mee voor het voorlopig schooladvies. Kijk nu al welke onderwerpen nog wankel zijn; er is dan nog ruim een jaar om ze bij te werken.",
  },
  8: {
    rekenen: "Breuken, procenten en kortingen, verhoudingen en schaal, maten en eenheden omrekenen, en tabellen en grafieken lezen: het niveau dat aan het eind van de basisschool wordt verwacht.",
    taal: "Spelling van lastige woorden (tussen-n, koppelteken), werkwoordtijden en het voltooid deelwoord als bijvoeglijk naamwoord (de geplakte band), en woordenschat.",
    lezen: "Teksten van drie alinea's of meer: de hoofdgedachte, samenvatten, het doel van de schrijver en dingen afleiden die er niet letterlijk staan.",
    thuis: "In groep 8 gaat het om herhalen wat er al is, niet om nieuwe stof. Kort en regelmatig oefenen op de onderwerpen die nog niet vastzitten levert het meest op.",
  },
};

const GROEPEN = [3, 4, 5, 6, 7, 8];

function vragenVan(groep) {
  const set = GROEP_SETS[String(groep)];
  return [...(set.vragen || []), ...(groep === 8 ? KWARTIERCHECK_VRAGEN : [])];
}

// Eén voorbeeldvraag per onderwerp: liefst een toepassingsvraag (niveau 2) die kort genoeg is om te lezen.
function voorbeeldVraag(concept, alle) {
  const eigen = alle.filter((v) => v.concept === concept.id && Array.isArray(v.opties) && typeof v.correct === "number");
  const max = concept.vak === "begrijpend-lezen" || concept.vak === "lezen" ? 480 : 220;
  const kort = eigen.filter((v) => v.vraag.length <= max);
  return kort.find((v) => v.niveau === 2) || kort[0] || null;
}

function pagina(groep) {
  const set = GROEP_SETS[String(groep)];
  const over = OVER[groep];
  const alle = vragenVan(groep);
  const url = `https://leerkwartier.app/cito-toets-groep-${groep}-oefenen.html`;
  const afk = groep === 8 ? "M8 en Doorstroomtoets" : `M${groep} en E${groep}`;
  const titel = `Cito-toets groep ${groep} oefenen (${afk}): wat wordt getoetst + gratis check | Leerkwartier`;
  const omschrijving = `Wat wordt er getoetst in groep ${groep} bij rekenen, spelling en lezen, wanneer zijn de toetsen en hoe oefen je thuis? Met voorbeeldvragen en een gratis check van 15 minuten die per onderwerp laat zien waar je kind staat.`;
  const startLink = `/?go=kwartiercheck&amp;groep=${groep}&amp;utm_source=seo&amp;utm_campaign=toets-groep-${groep}`;

  const perVak = VAK_VOLGORDE.map((vak) => [vak, set.concepten.filter((c) => c.vak === vak)]).filter(([, cs]) => cs.length);
  const onderwerpen = perVak.map(([vak, cs]) => {
    const regels = cs.map((c) => {
      const links = [];
      if (existsSync(`public/leerpad/${c.leerpadId}.html`)) links.push(`<a href="/leerpad/${c.leerpadId}.html">uitleg</a>`);
      if (existsSync(`public/werkblad/${c.leerpadId}.html`)) links.push(`<a href="/werkblad/${c.leerpadId}.html">werkblad</a>`);
      return `<li>${esc(c.label)}${links.length ? ` <span class="bij">(${links.join(" · ")})</span>` : ""}</li>`;
    }).join("");
    return `<h3>${VAK[vak]}</h3>\n  <ul>${regels}</ul>`;
  }).join("\n  ");

  const voorbeelden = set.concepten.map((c) => [c, voorbeeldVraag(c, alle)]).filter(([, v]) => v);
  const letters = ["A", "B", "C", "D", "E"];
  const vragenHtml = voorbeelden.map(([c, v], i) => `<div class="vraag">
    <div class="soort">${i + 1}. ${esc(c.label)}</div>
    <p>${esc(v.vraag).replace(/\n/g, "<br>")}</p>
    <ol type="A">${v.opties.map((o) => `<li>${esc(o)}</li>`).join("")}</ol>
    <details><summary>Bekijk het antwoord</summary><p>${letters[v.correct]}: ${esc(v.opties[v.correct])}</p></details>
  </div>`).join("\n  ");

  const wanneer = groep === 8
    ? "In groep 8 is er meestal nog één toets van het leerlingvolgsysteem, rond de herfst of in januari. Daarna volgt de Doorstroomtoets: in 2027 tussen 25 januari en 12 februari. De precieze dagen kiest de school."
    : `De meeste scholen toetsen twee keer per jaar: halverwege het schooljaar, in januari of februari (bij Cito heet dat M${groep}, de M van midden), en aan het eind, in mei of juni (E${groep}, de E van eind). De precieze weken kiest de school.`;

  const faq = [
    [`Wat wordt er getoetst in groep ${groep}?`, `Rekenen: ${over.rekenen} Taal en spelling: ${over.taal} Lezen: ${over.lezen}`],
    [`Wanneer zijn de toetsen in groep ${groep}?`, wanneer],
    [`Kun je voor de Cito-toets in groep ${groep} oefenen?`, `De echte toetsvragen zijn niet openbaar; de toets is bedoeld om te zien wat een kind op dat moment kan. Wat wel helpt, is de stof van groep ${groep} kort en regelmatig oefenen en wennen aan vragen met vier antwoorden. De Kwartiercheck van Leerkwartier laat in ongeveer 15 minuten per onderwerp zien wat je kind al beheerst en wat nog oefening vraagt: https://leerkwartier.app/?go=kwartiercheck&groep=${groep}`],
    ["Is de Kwartiercheck gratis?", "Ja. De Kwartiercheck is gratis en werkt zonder account. Het oefenen op Leerkwartier is gratis, gegarandeerd tot en met 2031; voor thuis is er daarnaast een betaald Familie-pakket met extra's."],
  ];
  const ld = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://leerkwartier.app/" },
      { "@type": "ListItem", position: 2, name: "Kwartiercheck", item: "https://leerkwartier.app/kwartiercheck.html" },
      { "@type": "ListItem", position: 3, name: `Toetsen groep ${groep}`, item: url },
    ] },
    { "@context": "https://schema.org", "@type": "LearningResource", name: `Toetsen in groep ${groep}: oefenen en zien waar je kind staat`, description: omschrijving, url, inLanguage: "nl-NL", educationalLevel: `groep ${groep} basisschool`, learningResourceType: "Diagnostische toets", isAccessibleForFree: true },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ];

  const andere = GROEPEN.map((g) => (g === groep ? `<b>groep ${g}</b>` : `<a href="/cito-toets-groep-${g}-oefenen.html">groep ${g}</a>`)).join(" · ");
  const meer = [];
  if (groep >= 3 && groep <= 6) meer.push(`<a href="/tafels-oefenen.html">tafels oefenen</a>`);
  if (groep >= 4) meer.push(`<a href="/dictee-groep-${groep}.html">dictee groep ${groep}</a>`);
  if (groep >= 6) meer.push(`<a href="/werkwoordspelling-oefenen.html">werkwoordspelling</a>`);
  if (groep === 7) meer.push(`<a href="/doorstroomtoets-oefenen-groep-7.html">in groep 7 al wennen aan de Doorstroomtoets</a>`, `<a href="/voorlopig-schooladvies.html">het voorlopig schooladvies</a>`);
  if (groep === 8) meer.push(`<a href="/doorstroomtoets-oefenen.html">de Doorstroomtoets oefenen</a>`, `<a href="/doorstroomtoets-oefenvragen.html">36 oefenvragen met uitleg</a>`, `<a href="/doorstroomtoets-2027-gids.html">de data van 2027</a>`);
  meer.push(`<a href="/werkbladen.html">werkbladen om te printen</a>`);

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
  h1{font-size:28px;line-height:1.25;color:#fff;margin:0 0 10px}
  h2{font-size:20px;color:#00d4ff;margin:30px 0 8px}
  h3{font-size:16px;color:#fff;margin:14px 0 4px}
  p{margin:0 0 12px;color:rgba(255,255,255,.82)}
  ul{margin:0 0 12px;padding-left:20px;color:rgba(255,255,255,.82)}
  li{padding:2px 0}
  .bij{font-size:13.5px;opacity:.85}
  .knop{display:block;text-align:center;background:linear-gradient(135deg,#ff6b35,#ff8c42);color:#fff;text-decoration:none;font-weight:800;font-size:18px;padding:16px;border-radius:14px;margin:18px 0 8px}
  .klein{font-size:13px;color:rgba(255,255,255,.55);text-align:center;margin:0 0 6px}
  .kaart{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:14px 18px;margin-bottom:12px}
  .kaart p:last-child{margin-bottom:0}
  .vraag{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:12px 16px;margin-bottom:10px}
  .vraag .soort{font-size:12.5px;text-transform:uppercase;letter-spacing:.3px;color:#9fb0c6;margin-bottom:4px}
  .vraag p{margin-bottom:6px;color:#fff}
  .vraag ol{margin:0 0 6px;padding-left:24px;color:rgba(255,255,255,.85)}
  details{font-size:15px}
  summary{cursor:pointer;color:#69b2ff}
  details p{margin:6px 0 0;color:#69f0ae}
  .voet{margin-top:30px;font-size:12.5px;color:#7d8aa0}
</style>
</head>
<body>
<div class="vel">
  <a class="merk" href="/">Leerkwartier</a>
  <div class="slogan">Een kwartier per dag leren, een leven lang slimmer.</div>
  <nav class="bc"><a href="/">Home</a> › <a href="/kwartiercheck.html">Kwartiercheck</a> › Toetsen groep ${groep}</nav>

  <h1>Toetsen in groep ${groep}: wat wordt er getoetst en hoe oefen je thuis?</h1>
  <p>Bijna elke basisschool volgt met vaste toetsen hoe een kind zich ontwikkelt. Welke toetsen dat zijn, kiest de school: veel scholen gebruiken Cito (Leerling in beeld), andere IEP of DIA. De onderdelen zijn overal ongeveer gelijk: rekenen, spelling en lezen. Op deze pagina staat wat daar in groep ${groep} bij hoort, met voorbeeldvragen en een gratis check om te zien waar je kind nu staat.</p>

  <a class="knop" href="${startLink}">Doe de Kwartiercheck voor groep ${groep}</a>
  <p class="klein">Ongeveer 15 minuten, ${set.concepten.length} onderwerpen. Gratis, geen account.</p>

  <h2>Wat wordt er getoetst in groep ${groep}?</h2>
  <div class="kaart"><h3 style="margin-top:0">Rekenen</h3><p>${esc(over.rekenen)}</p></div>
  <div class="kaart"><h3 style="margin-top:0">Taal en spelling</h3><p>${esc(over.taal)}</p></div>
  <div class="kaart"><h3 style="margin-top:0">Lezen</h3><p>${esc(over.lezen)}</p></div>

  <h2>Wanneer zijn de toetsen in groep ${groep}?</h2>
  <p>${esc(wanneer)}</p>

  <h2>Voorbeeldvragen groep ${groep}</h2>
  <p>Dit zijn eigen vragen van Leerkwartier, op het niveau van halverwege groep ${groep}. Het zijn niet de vragen van de toets op school; die zijn niet openbaar.</p>
  ${vragenHtml}

  <h2>De ${set.concepten.length} onderwerpen van de Kwartiercheck voor groep ${groep}</h2>
  <p>De check stelt per onderwerp een paar vragen en stopt zodra duidelijk is hoe het ervoor staat. Aan het eind zie je per onderwerp: beheerst, bijna daar of nog niet. Weet je kind een antwoord niet, dan is er de knop 'Dit weet ik (nog) niet'; gokken hoeft niet.</p>
  ${onderwerpen}

  <a class="knop" href="${startLink}">Start de check voor groep ${groep}</a>
  <p class="klein">Na afloop weet je welke onderwerpen aandacht vragen.</p>

  <h2>Kun je voor de toets oefenen?</h2>
  <p>De echte toetsvragen zijn niet openbaar, en dat is ook de bedoeling: de toets laat zien wat een kind op dat moment kan. Stampen op toetsvragen heeft daarom weinig zin. Wat wel helpt, is de stof van dit leerjaar kort en regelmatig oefenen, en wennen aan vragen met vier antwoorden waarvan er één goed is.</p>
  <p>${esc(over.thuis)}</p>

  <h2>Veelgestelde vragen</h2>
${faq.slice(2).map(([q, a]) => `  <h3>${esc(q)}</h3>\n  <p>${esc(a)}</p>`).join("\n")}

  <h2>Andere groepen en meer oefenen</h2>
  <p>Toetsen ${andere}</p>
  <p>Ook handig voor groep ${groep}: ${meer.join(", ")}.</p>

  <div class="voet">Leerkwartier is gemaakt door één vader, zonder reclame en zonder doorverkoop van gegevens, en is niet verbonden aan Cito, Bureau ICE, DIA of een andere toetsaanbieder. De voorbeeldvragen komen uit dezelfde vragenlijst als de Kwartiercheck in de app.</div>
</div>
</body>
</html>
`;
}

let n = 0;
for (const g of GROEPEN) {
  if (!GROEP_SETS[String(g)]) continue;
  writeFileSync(`public/cito-toets-groep-${g}-oefenen.html`, pagina(g));
  n++;
}
console.log(`[toets-groep-paginas] ${n} pagina's geschreven (public/cito-toets-groep-*-oefenen.html)`);

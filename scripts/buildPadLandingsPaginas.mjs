#!/usr/bin/env node
// scripts/buildPadLandingsPaginas.mjs
// 2026-05-16: pre-rendering van 15 kern-leerpaden naar statische landing-pages.
//
// Achtergrond (uit audit-rapport): Leerkwartier is een SPA, dus AI-engines en
// Google zien geen pad-content tot JS draait. Voor kern-Cito-paden willen we
// een statische HTML-versie met de pad-uitleg crawl-baar maken. Dit is een
// lichtere variant dan Vercel ISR — gewoon build-time HTML in public/leerpad/.
//
// Output: public/leerpad/<id>.html
// Plus: sitemap-entries-lijst voor public/sitemap.xml.
//
// Selectie: ICP-focus = Cito-PO kern groep 6-8 + Doorstroomtoets-trio.
//
// Run: node scripts/buildPadLandingsPaginas.mjs

import { writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";

const SRC = "src/learnPaths";
const OUT = "public/leerpad";
const SITE = "https://leerkwartier.app";

// Top 15 kern-paden voor Cito-doelgroep groep 6-8. Volgorde = SEO-prioriteit
// (eerst = belangrijkst). Per pad: bestandsnaam (zonder .js) + korte SEO-pitch.
const KERN_PADEN = [
  { file: "doorstroomtoetsRekenenG8", pitch: "Rekenen voor de Doorstroomtoets groep 8 — getallen, breuken, procenten, redactiesommen." },
  { file: "doorstroomtoetsTaalG8", pitch: "Taalverzorging voor de Doorstroomtoets groep 8 — woordenschat, begrijpend lezen, spelling, grammatica." },
  { file: "doorstroomtoetsStudievaardighedenG8", pitch: "Studievaardigheden voor de Doorstroomtoets — informatie zoeken in tabellen, kaarten, schema's." },
  { file: "begrijpendLezenTekstenPo", pitch: "Begrijpend lezen groep 5-8 — hoofdgedachte, signaalwoorden, Cito-strategie per tekstsoort." },
  { file: "samenvattenHoofdgedachtePo", pitch: "Hoofdgedachte herkennen en samenvatten — kern-strategie voor Cito-begrijpend-lezen." },
  { file: "tafelsPo", pitch: "Tafels groep 3-6 — alle vermenigvuldigtafels van 1 t/m 12 met trucs per tafel." },
  { file: "procentenPo", pitch: "Procenten groep 6-8 — 10%, 25%, 50%, korting berekenen en procent omdraaien." },
  { file: "breukenPo", pitch: "Breuken groep 6-8 — gelijkwaardige breuken, optellen, vermenigvuldigen, breuk-decimaal-procent." },
  { file: "verhoudingenPo", pitch: "Verhoudingen groep 6-8 — recept omrekenen, schaal lezen, eenheidsprijs." },
  { file: "kommagetallenPo", pitch: "Kommagetallen groep 6-8 — decimalen lezen, optellen, vermenigvuldigen met komma's." },
  { file: "gemiddeldenStatistiekPo", pitch: "Gemiddelde, modus en mediaan — Cito-statistiek groep 6-8 met directe voorbeelden." },
  { file: "grafiekenLezenPo", pitch: "Grafieken lezen groep 6-8 — staaf, lijn, cirkel: assen, waarden, hoofdgedachte." },
  { file: "kaartlezenPo", pitch: "Kaartlezen groep 6-8 — schaal, legenda, windrichtingen, topografische kaart." },
  { file: "tijdvakkenNederlandPo", pitch: "10 tijdvakken Nederlandse geschiedenis — Cito-tijdlijn van jagers-verzamelaars tot nu." },
  { file: "woordenschatPo", pitch: "Woordenschat groep 6-8 — synoniemen, tegenstellingen, spreekwoorden, context-truc." },
];

function escapeHtml(s) {
  return String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// MarkDown-light → plain HTML (alleen **bold** en line-breaks)
function mdToHtml(text) {
  if (!text) return "";
  return escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\s][^*]*[^*\s])\*/g, "<em>$1</em>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>");
}

// Pak eerste alinea van pad-intro of step-0-explanation als korte SEO-pitch.
function eersteAlinea(text, maxChars = 280) {
  if (!text) return "";
  const plat = String(text).split("\n\n")[0].replace(/\*\*/g, "").replace(/\n/g, " ").trim();
  if (plat.length <= maxChars) return plat;
  return plat.slice(0, maxChars - 3).trimEnd() + "...";
}

function levelLabel(level) {
  if (!level) return "groep 6-8";
  const s = String(level).toLowerCase();
  if (s.startsWith("groep")) return s.replace("groep", "groep ");
  return s;
}

function subjectLabel(subject) {
  const map = {
    rekenen: "Rekenen",
    taal: "Taal",
    spelling: "Spelling",
    "begrijpend-lezen": "Begrijpend lezen",
    cito: "Cito-toets",
    natuur: "Wereld &amp; natuur",
    aardrijkskunde: "Aardrijkskunde",
    geschiedenis: "Geschiedenis",
    engels: "Engels",
  };
  return map[subject] || subject || "Onderwijs";
}

function renderHtml({ pathData, pitch }) {
  const id = pathData.id;
  const title = pathData.title || id;
  const canonical = `${SITE}/leerpad/${id}.html`;
  const oefenenUrl = `${SITE}/leren/pad?id=${id}`;
  const level = levelLabel(pathData.level);
  const subj = subjectLabel(pathData.subject);
  const intro = pathData.intro ? eersteAlinea(pathData.intro, 360) : eersteAlinea(pathData.steps?.[0]?.explanation, 360);
  const stepCount = pathData.steps?.length || 0;
  const checkCount = (pathData.steps || []).reduce((n, s) => n + (s.checks?.length || 0), 0);
  const pageTitle = `${title} — ${subj}, ${level} · Leerkwartier`;
  const metaDesc = pitch || intro || `Oefenen voor ${title} — gratis op Leerkwartier.`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: title,
    description: metaDesc,
    url: canonical,
    inLanguage: "nl-NL",
    educationalLevel: level,
    learningResourceType: "Quiz",
    isAccessibleForFree: true,
    teaches: pathData.triggerKeywords?.slice(0, 8) || [subj],
    provider: { "@type": "EducationalOrganization", name: "Leerkwartier", url: SITE },
    audience: { "@type": "EducationalAudience", educationalRole: "student" },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Leerkwartier", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: "Leerpaden", item: SITE + "/leren" },
      { "@type": "ListItem", position: 3, name: title, item: canonical },
    ],
  };

  // Stappen-overzicht
  const stappenHtml = (pathData.steps || [])
    .map((s, i) => {
      const tEx = s.explanation ? eersteAlinea(s.explanation, 220) : "";
      return `
      <li>
        <strong>Deel ${i + 1} — ${escapeHtml(s.title || "")}</strong>
        ${tEx ? `<p>${mdToHtml(tEx)}</p>` : ""}
      </li>`;
    })
    .join("");

  // Voorbeelden van vraag-types
  const eersteVraag = pathData.steps?.[0]?.checks?.[0];
  const voorbeeldVraagHtml = eersteVraag
    ? `
    <section class="lk-voorbeeld">
      <h2>Voorbeeld-oefenvraag</h2>
      <div class="lk-vraag">
        <p><strong>${mdToHtml(eersteVraag.q || eersteVraag.question || "")}</strong></p>
        <ul>
          ${(eersteVraag.options || []).map((o, i) => `<li><span class="lk-letter">${["A", "B", "C", "D"][i]}.</span> ${mdToHtml(o)}</li>`).join("")}
        </ul>
        <p class="lk-cta-mini">Wil je het antwoord en uitleg op 3 niveaus? <a href="${oefenenUrl}">Open dit pad in de app →</a></p>
      </div>
    </section>`
    : "";

  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(pageTitle)}</title>
<meta name="description" content="${escapeHtml(metaDesc)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="article">
<meta property="og:title" content="${escapeHtml(pageTitle)}">
<meta property="og:description" content="${escapeHtml(metaDesc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="Leerkwartier">
<meta property="og:locale" content="nl_NL">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<script type="application/ld+json">${JSON.stringify(breadcrumbs)}</script>
<style>
  :root { color-scheme: dark; }
  body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; background: linear-gradient(160deg,#0f1729 0%,#162033 50%,#1a2744 100%); color:#e8eef7; max-width: 760px; margin: 0 auto; padding: 24px 18px 64px; line-height: 1.65; min-height: 100vh; }
  a { color: #69b2ff; text-decoration: none; }
  a:hover { color: #00d4ff; text-decoration: underline; }
  h1 { font-size: 1.7em; line-height: 1.2; color: #fff; margin-bottom: .35em; }
  h2 { color: #00d4ff; margin-top: 2em; font-size: 1.2em; }
  nav.lk-breadcrumb { font-size: .85em; opacity: .65; margin-bottom: 1em; }
  nav.lk-breadcrumb a { color: #80deea; }
  .lk-eyebrow { font-size: .8em; color: #00d4ff; text-transform: uppercase; letter-spacing: .5px; font-weight: 700; margin-bottom: .3em; }
  .lk-lead { font-size: 1.1em; color: rgba(255,255,255,.92); margin: .5em 0 1.5em; }
  .lk-stats { display: flex; gap: 12px; flex-wrap: wrap; margin: 1em 0 1.5em; }
  .lk-stat { background: rgba(255,255,255,0.05); padding: 8px 14px; border-radius: 10px; font-size: .85em; color: rgba(255,255,255,.85); }
  .lk-stat strong { color: #ffd54f; }
  .lk-cta { display: inline-flex; align-items: center; gap: 8px; padding: 14px 26px; background: linear-gradient(135deg, #00c853, #00e676); color: #06211a; text-decoration: none; border-radius: 12px; font-weight: 800; font-size: 1em; box-shadow: 0 4px 20px rgba(0,200,83,.4); margin: 1em 0; }
  .lk-cta:hover { color: #06211a; text-decoration: none; transform: translateY(-1px); }
  ol { padding-left: 22px; }
  ol li { margin-bottom: 14px; }
  .lk-voorbeeld { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,.08); border-radius: 12px; padding: 16px 20px; margin-top: 1em; }
  .lk-voorbeeld ul { list-style: none; padding-left: 0; margin: 12px 0; }
  .lk-voorbeeld ul li { padding: 8px 12px; background: rgba(255,255,255,.04); border-radius: 6px; margin-bottom: 6px; }
  .lk-letter { font-weight: 700; color: #00d4ff; margin-right: 6px; }
  .lk-cta-mini { font-size: .9em; margin-top: 12px; color: rgba(255,255,255,.7); }
  .lk-related { margin-top: 2.5em; padding: 14px 18px; background: rgba(255,255,255,.03); border-radius: 10px; font-size: .9em; }
  .lk-related strong { color: #00d4ff; }
  .lk-back { display: inline-block; margin-top: 30px; color: rgba(255,255,255,.55); font-size: .9em; }
</style>
</head>
<body>
<nav class="lk-breadcrumb"><a href="/">Home</a> › <a href="/leren">Leerpaden</a> › ${escapeHtml(title)}</nav>

<div class="lk-eyebrow">${escapeHtml(subj)} · ${escapeHtml(level)}</div>
<h1>${escapeHtml(title)}</h1>
<p class="lk-lead">${escapeHtml(pitch || intro)}</p>

<div class="lk-stats">
  <div class="lk-stat"><strong>${stepCount}</strong> delen</div>
  <div class="lk-stat"><strong>${checkCount}</strong> oefenvragen</div>
  <div class="lk-stat"><strong>~15 min</strong> per deel</div>
  <div class="lk-stat">Gratis · geen account</div>
</div>

<a class="lk-cta" href="${oefenenUrl}">🎯 Start dit leerpad</a>

<h2>Wat leer je in dit pad?</h2>
<ol>${stappenHtml}</ol>

${voorbeeldVraagHtml}

<a class="lk-cta" href="${oefenenUrl}">🎯 Open het volledige leerpad</a>

<div class="lk-related">
  <strong>Gerelateerd op Leerkwartier:</strong><br>
  <a href="/doorstroomtoets-oefenen.html">Doorstroomtoets oefenen — in 15 min/dag</a> ·
  <a href="/cito-toets-oefenen.html">Cito-toets oefenen voor groep 6, 7 en 8</a> ·
  <a href="/onderwijs-begrippen.html">Onderwijs-begrippen voor ouders</a>
</div>

<a class="lk-back" href="/">← Terug naar Leerkwartier</a>
</body>
</html>
`;
}

// ─── Main ────────────────────────────────────────────────────────────────
async function main() {
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

  const sitemapEntries = [];
  let totaal = 0;
  let skip = 0;

  for (const { file, pitch } of KERN_PADEN) {
    const path = join(SRC, `${file}.js`);
    if (!existsSync(path)) {
      console.warn(`[skip] ${file}.js bestaat niet`);
      skip++;
      continue;
    }
    let pathData;
    try {
      const mod = await import(pathToFileURL(join(process.cwd(), path)).href);
      pathData = mod.default;
    } catch (err) {
      console.warn(`[skip] ${file}: ${err.message}`);
      skip++;
      continue;
    }
    if (!pathData?.id) {
      console.warn(`[skip] ${file}: geen .id`);
      skip++;
      continue;
    }

    const html = renderHtml({ pathData, pitch });
    const outFile = join(OUT, `${pathData.id}.html`);
    writeFileSync(outFile, html, "utf8");
    sitemapEntries.push(`/leerpad/${pathData.id}.html`);
    totaal++;
    console.log(`✓ ${file} → ${outFile} (${pathData.steps?.length || 0} delen)`);
  }

  console.log(`\n${totaal} pad-landing-pages gegenereerd (${skip} skipped).\n`);
  console.log("Sitemap-entries (kopieer naar public/sitemap.xml):");
  sitemapEntries.forEach((u) => {
    console.log(`  <url><loc>${SITE}${u}</loc><changefreq>monthly</changefreq><priority>0.80</priority></url>`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

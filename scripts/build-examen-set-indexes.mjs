#!/usr/bin/env node
// scripts/build-examen-set-indexes.mjs
// Fix soft-404 (2026-07-30): de 238 statische examenvraag-pagina's linken in hun
// kruimelpad naar /examen/<vak>/<set>/ maar die mappen hadden geen index.html →
// bezoekers en crawlers landden op de SPA-shell. Dit script genereert per set-map
// een overzichts-index met links naar alle vraag-pagina's van die set.
//
// - Scant public/examen/<vak>/<set>/vraag-*.html
// - Extraheert vraagnummer + onderwerp uit de <title> van elke vraag-pagina
//   (fallback: bestandsnaam + <h1>) — GEEN verzonnen content.
// - Schrijft public/examen/<vak>/<set>/index.html (idempotent: overschrijft gewoon).
// - Upsert de 40 set-URL's in public/sitemap.xml (alleen toevoegen als ze ontbreken;
//   sitemap.xml wordt incrementeel bijgehouden, dus geen volledige regen hier).
//
// Run: node scripts/build-examen-set-indexes.mjs

import { readdirSync, readFileSync, writeFileSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const EXAMEN_DIR = join(ROOT, "public", "examen");
const SITEMAP = join(ROOT, "public", "sitemap.xml");
const SITE = "https://leerkwartier.app";
const TODAY = new Date().toISOString().slice(0, 10);

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function decodeEntities(s) {
  return String(s)
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

const vakLabel = (vak) => vak.charAt(0).toUpperCase() + vak.slice(1);

// "vmbo-gl-tl-2024-tijdvak-1" → { niveauLabel: "VMBO-GL/TL", jaar: "2024", tijdvak: "1" }
function parseSetName(set) {
  const m = set.match(/^vmbo-gl-tl-(\d{4})-tijdvak-(\d+)$/);
  if (!m) return null;
  return { niveauLabel: "VMBO-GL/TL", jaar: m[1], tijdvak: m[2] };
}

// Leest 1 vraag-pagina en haalt nummer + onderwerp op.
// <title>Vraag 1 — Wat is clicker-training voor leergedrag? | biologie ...</title>
function parseVraagPagina(filePath, filename) {
  const html = readFileSync(filePath, "utf8");
  let nr = null;
  let onderwerp = null;

  const t = html.match(/<title>\s*Vraag\s+(\d+)\s*—\s*(.*?)\s*\|/s);
  if (t) {
    nr = parseInt(t[1], 10);
    onderwerp = decodeEntities(t[2]).replace(/\s+/g, " ").trim();
  }
  if (nr == null) {
    const f = filename.match(/^vraag-(\d+)/);
    if (f) nr = parseInt(f[1], 10);
  }
  if (!onderwerp) {
    const h = html.match(/<h1>(.*?)<\/h1>/s);
    if (h) onderwerp = decodeEntities(h[1].replace(/<[^>]+>/g, "")).replace(/\s+/g, " ").trim();
  }

  // CTA naar de interactieve oefen-app (per set gelijk, op ?step= na)
  const cta = html.match(/class="lk-cta"\s+href="([^"]+)"/);
  const ctaUrl = cta ? cta[1].replace(/\?step=\d+$/, "") : null;

  // Examenblad.nl-bronlink (alleen aanwezig bij vakken met bekende vakcode)
  const eb = html.match(/href="(https:\/\/www\.examenblad\.nl\/[^"]+)"/);
  const ebUrl = eb ? eb[1] : null;

  return { nr, onderwerp, ctaUrl, ebUrl };
}

function renderIndex({ vak, set, meta, vragen, ctaUrl, ebUrl }) {
  const label = vakLabel(vak);
  const { niveauLabel, jaar, tijdvak } = meta;
  const canonical = `${SITE}/examen/${vak}/${set}/`;
  const pageTitle = `${label} ${niveauLabel} ${jaar} tijdvak ${tijdvak} — examenvragen met uitleg — Leerkwartier`;
  const metaDesc = `De ${vragen.length} examenvragen uit het eindexamen ${vak} ${niveauLabel} ${jaar} tijdvak ${tijdvak}, met antwoord en stap-voor-stap uitleg. Gratis oefenen op Leerkwartier.`;

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Leerkwartier", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: `${label} examens`, item: `${SITE}/vmbo-examens-oefenen.html` },
      { "@type": "ListItem", position: 3, name: `${label} ${jaar} tijdvak ${tijdvak}`, item: canonical },
    ],
  };

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${label} ${niveauLabel} eindexamen ${jaar} tijdvak ${tijdvak} — vragen met uitleg`,
    itemListElement: vragen.map((v, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `Vraag ${v.nr} — ${v.onderwerp}`,
      url: canonical + v.filename,
    })),
  };

  const lijst = vragen
    .map(
      (v) =>
        `    <li><a href="${escapeHtml(v.filename)}">Vraag ${v.nr} — ${escapeHtml(v.onderwerp)}</a></li>`
    )
    .join("\n");

  return `<!doctype html>
<html lang="nl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>${escapeHtml(pageTitle)}</title>
<meta name="description" content="${escapeHtml(metaDesc)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${escapeHtml(pageTitle)}">
<meta property="og:description" content="${escapeHtml(metaDesc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:site_name" content="Leerkwartier">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
<script type="application/ld+json">${JSON.stringify(breadcrumbs)}</script>
<script type="application/ld+json">${JSON.stringify(itemList)}</script>
<style>
  :root { color-scheme: dark; }
  body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; background:#0e1014; color:#e8eef7; max-width: 760px; margin: 0 auto; padding: 24px 18px; line-height: 1.6; }
  a { color: #69b2ff; }
  h1 { font-size: 1.5em; line-height: 1.3; color: #fff; }
  h2 { color: #00d4ff; margin-top: 2em; font-size: 1.15em; }
  nav.lk-breadcrumb { font-size: .85em; opacity: .7; margin-bottom: 1.5em; }
  nav.lk-breadcrumb a { color: #80deea; }
  .lk-bron { background: rgba(255, 213, 79, 0.08); border: 1px solid rgba(255, 213, 79, 0.3); padding: 10px 14px; border-radius: 8px; font-size: .9em; margin-top: 2em; }
  .lk-bron strong { color: #ffd54f; }
  .lk-vragen { background: rgba(0, 212, 255, 0.06); padding: 16px 16px 16px 36px; border-radius: 8px; margin: 1em 0; }
  .lk-vragen li { margin: 8px 0; }
  .lk-cta { display: inline-block; background: linear-gradient(135deg, #ff6b35, #ff8c42); color: #fff; padding: 12px 20px; border-radius: 10px; text-decoration: none; font-weight: 700; margin-top: 1.5em; }
  footer { margin-top: 3em; padding-top: 1.5em; border-top: 1px solid #2a3f5f; font-size: .85em; opacity: .75; }
</style>
</head>
<body>
<nav class="lk-breadcrumb" aria-label="Kruimelpad">
  <a href="/">Leerkwartier</a> ›
  <a href="/vmbo-examens-oefenen.html">${escapeHtml(label)} examens</a> ›
  ${escapeHtml(label)} ${jaar} tijdvak ${tijdvak}
</nav>

<header>
  <p style="opacity:.7;font-size:.9em;margin-bottom:.5em">Centraal Schriftelijk Eindexamen ${escapeHtml(vak)} ${niveauLabel} ${jaar} tijdvak ${tijdvak}</p>
  <h1>${escapeHtml(label)} ${niveauLabel} ${jaar} tijdvak ${tijdvak} — examenvragen met uitleg</h1>
  <p>Echte examenvragen uit dit eindexamen, elk met het juiste antwoord en een stap-voor-stap uitleg. Kies een vraag om te beginnen.</p>
</header>

<section>
  <h2>Alle ${vragen.length} vragen van dit examen</h2>
  <ol class="lk-vragen">
${lijst}
  </ol>
</section>

${ebUrl ? `<section class="lk-bron">
  <strong>🎓 Officiële bron</strong><br>
  Dit zijn echte examenvragen uit het Centraal Schriftelijk Eindexamen ${escapeHtml(vak)} ${niveauLabel} ${jaar} tijdvak ${tijdvak}.<br>
  <a href="${escapeHtml(ebUrl)}" target="_blank" rel="noopener nofollow">Bekijk de volledige examenopgaven op examenblad.nl</a> (PDF).
</section>` : `<section class="lk-bron">
  <strong>🎓 Bron</strong><br>
  Echte examenvragen uit het Centraal Schriftelijk Eindexamen ${escapeHtml(vak)} ${niveauLabel} ${jaar} tijdvak ${tijdvak}.
</section>`}

${ctaUrl ? `<a class="lk-cta" href="${escapeHtml(ctaUrl)}">Oefen dit examen interactief in Leerkwartier →</a>` : ""}

<footer>
  Leerkwartier is een gratis examen-oefenplatform voor VMBO, HAVO, VWO en de Doorstroomtoets.
  <a href="/">Naar de homepage</a> · <a href="/over.html">Over Leerkwartier</a>
</footer>
</body>
</html>
`;
}

// ─── Sitemap-upsert ──────────────────────────────────────────────────────
// Voegt ontbrekende set-URL's toe aan public/sitemap.xml (zelfde entry-format).
// Plaatst elke set-index vlak vóór de eerste vraag-entry van die set; anders
// vóór </urlset>. Bestaande entries blijven onaangeroerd (lastmods behouden).
function upsertSitemap(setUrls) {
  let xml = readFileSync(SITEMAP, "utf8");
  let added = 0;
  for (const loc of setUrls) {
    if (xml.includes(`<loc>${loc}</loc>`)) continue;
    const entry = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`;
    const firstVraag = xml.indexOf(`<loc>${loc}vraag-`);
    let insertAt;
    if (firstVraag !== -1) {
      insertAt = xml.lastIndexOf("  <url>", firstVraag);
    } else {
      insertAt = xml.indexOf("</urlset>");
    }
    xml = xml.slice(0, insertAt) + entry + xml.slice(insertAt);
    added++;
  }
  if (added) writeFileSync(SITEMAP, xml, "utf8");
  return added;
}

// ─── Main ────────────────────────────────────────────────────────────────
let generated = 0;
const setUrls = [];

for (const vak of readdirSync(EXAMEN_DIR).sort()) {
  const vakDir = join(EXAMEN_DIR, vak);
  if (!statSync(vakDir).isDirectory()) continue;

  for (const set of readdirSync(vakDir).sort()) {
    const setDir = join(vakDir, set);
    if (!statSync(setDir).isDirectory()) continue;

    const meta = parseSetName(set);
    if (!meta) {
      console.warn(`[skip] ${vak}/${set}: onbekend mapnaam-patroon`);
      continue;
    }

    const files = readdirSync(setDir).filter((f) => /^vraag-.*\.html$/.test(f));
    if (!files.length) {
      console.warn(`[skip] ${vak}/${set}: geen vraag-*.html gevonden`);
      continue;
    }

    const vragen = [];
    let ctaUrl = null;
    let ebUrl = null;
    for (const filename of files) {
      const info = parseVraagPagina(join(setDir, filename), filename);
      if (info.nr == null || !info.onderwerp) {
        console.warn(`[let op] ${vak}/${set}/${filename}: titel niet te parsen — overgeslagen in lijst`);
        continue;
      }
      vragen.push({ nr: info.nr, onderwerp: info.onderwerp, filename });
      if (!ctaUrl && info.ctaUrl) ctaUrl = info.ctaUrl;
      if (!ebUrl && info.ebUrl) ebUrl = info.ebUrl;
    }
    vragen.sort((a, b) => a.nr - b.nr);

    const html = renderIndex({ vak, set, meta, vragen, ctaUrl, ebUrl });
    writeFileSync(join(setDir, "index.html"), html, "utf8");
    setUrls.push(`${SITE}/examen/${vak}/${set}/`);
    generated++;
    console.log(`✓ ${vak}/${set}/index.html (${vragen.length} vragen${ebUrl ? ", + examenblad-link" : ""})`);
  }
}

console.log(`\nTotaal ${generated} set-indexpagina's geschreven.`);

if (existsSync(SITEMAP)) {
  const added = upsertSitemap(setUrls);
  console.log(added ? `sitemap.xml: ${added} set-URL's toegevoegd.` : "sitemap.xml: alle set-URL's stonden er al in.");
} else {
  console.warn("public/sitemap.xml niet gevonden — sitemap niet bijgewerkt.");
}

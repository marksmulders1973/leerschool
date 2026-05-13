#!/usr/bin/env node
// scripts/buildExamenVraagPaginas.mjs
// Audit-1 QW5 (2026-05-13): genereert SEO-pagina's per authentieke examenvraag.
//
// Strategie (uit audit-rapport):
// - AI-citation goudmijn: per-vraag-URL met FAQ-schema scoort 3.2× meer in AI-search
// - Concurrent leren.jojoschool.nl doet dit al → Leerkwartier authentieker
// - URL: /examen/<vak>/<vmbo-niveau-jaar-tijdvak>/vraag-<n>.html
// - H1 = exacte vraagtekst (verbatim — AI-engines pakken dit op)
// - Antwoord boven-de-vouw + uitleg + voorkennisKeten + bron-link examenblad.nl
//
// Output: public/examen/<vak>/<slug>/vraag-<n>.html
// Plus: lijst voor sitemap-update in console (handmatig naar sitemap.xml kopiëren).
//
// Run: node scripts/buildExamenVraagPaginas.mjs

import { readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { pathToFileURL } from "node:url";

const SRC = "src/learnPaths";
const OUT = "public/examen";
const SITE = "https://leerkwartier.app";

// Examenblad.nl vakcodes (VMBO-GL/TL). Verifieer per nieuwe vak via memory
// reference_examenblad_urls.md. Bij onbekend → geen externe link (string null).
const VAK_INFO = {
  economie: { vakCode: "0233", niveauPad: "vmbo-gl", niveauPrefix: "gt", vakLabel: "Economie" },
  engels: { vakCode: null, niveauPad: "vmbo-gl", niveauPrefix: "gt", vakLabel: "Engels" },
  geschiedenis: { vakCode: null, niveauPad: "vmbo-gl", niveauPrefix: "gt", vakLabel: "Geschiedenis" },
};

const NIVEAU_LABEL = {
  "vmbo-gt-4": "VMBO-GL/TL",
  "vmbo-bb-4": "VMBO-BB",
  "vmbo-kb-4": "VMBO-KB",
  havo: "HAVO",
  vwo: "VWO",
};

function slugify(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// Parse id: "examen-economie-2024-t1" → { vak: "economie", jaar: "2024", tijdvak: "1" }
function parseId(id) {
  const m = String(id).match(/^examen-([a-z]+)-(\d{4})-t(\d)$/);
  if (!m) return null;
  return { vak: m[1], jaar: m[2], tijdvak: m[3] };
}

// Parse vraag-nummer uit step.title: "Vraag 2 — Zweden in de EMU" → { nr: 2, onderwerp: "zweden in de emu" }
function parseVraagTitel(stepTitle) {
  const m = String(stepTitle).match(/^vraag\s+(\d+)\s*[—\-:]\s*(.+)$/i);
  if (!m) return { nr: null, onderwerp: stepTitle };
  return { nr: parseInt(m[1], 10), onderwerp: m[2].trim() };
}

// Examenblad.nl URL voor opgaven-PDF
function examenbladUrl(vak, jaar, tijdvak) {
  const info = VAK_INFO[vak];
  if (!info || !info.vakCode) return null;
  const yy = String(jaar).slice(-2);
  return `https://www.examenblad.nl/${jaar}/${info.niveauPad}/documenten/cse-${tijdvak}/${info.niveauPrefix}-${info.vakCode}-a-${yy}-${tijdvak}-o`;
}

// MarkDown-light → plain HTML (alleen **bold** en line-breaks)
function mdToHtml(text) {
  if (!text) return "";
  return escapeHtml(text)
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/\n/g, "<br>");
}

function renderHtml({ pathMeta, check, vraagNr, vraagOnderwerp, totalVragen }) {
  const { vak, jaar, tijdvak } = pathMeta;
  const vakInfo = VAK_INFO[vak] || {};
  const niveauLabel = NIVEAU_LABEL[pathMeta.level] || pathMeta.level || "VMBO";
  const vakLabel = vakInfo.vakLabel || vak;
  const ebUrl = examenbladUrl(vak, jaar, tijdvak);
  const answerLetter = ["A", "B", "C", "D"][check.answer] || "?";
  const answerText = check.options[check.answer] || "";
  const pathSlug = `${vak}/vmbo-gl-tl-${jaar}-tijdvak-${tijdvak}`;
  const vraagSlug = `vraag-${vraagNr}${vraagOnderwerp ? "-" + slugify(vraagOnderwerp) : ""}`;
  const canonical = `${SITE}/examen/${pathSlug}/${vraagSlug}.html`;
  const pageTitle = `Vraag ${vraagNr} — ${vraagOnderwerp} | ${vakLabel} ${niveauLabel} examen ${jaar} tijdvak ${tijdvak}`;
  const metaDesc = (check.q.length > 155 ? check.q.slice(0, 152) + "..." : check.q).replace(/\s+/g, " ");
  const oefenenUrl = `${SITE}/leerpaden/${pathMeta.id}?step=${vraagNr}`;

  // FAQ-schema items
  const faqItems = [
    {
      q: check.q,
      a: `Het juiste antwoord is ${answerLetter}: ${answerText}. ${check.explanation || ""}`.trim(),
    },
  ];
  // Voeg woordenschat als FAQ toe (top 3)
  if (check.uitlegPad?.woorden && Array.isArray(check.uitlegPad.woorden)) {
    check.uitlegPad.woorden.slice(0, 3).forEach((w) => {
      if (w.woord && w.uitleg) {
        faqItems.push({ q: `Wat betekent ${w.woord}?`, a: w.uitleg });
      }
    });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Leerkwartier", item: SITE + "/" },
      { "@type": "ListItem", position: 2, name: `${vakLabel} examens`, item: `${SITE}/vmbo-examens-oefenen.html` },
      { "@type": "ListItem", position: 3, name: `${vakLabel} ${jaar} tijdvak ${tijdvak}`, item: `${SITE}/examen/${pathSlug}/` },
      { "@type": "ListItem", position: 4, name: `Vraag ${vraagNr}`, item: canonical },
    ],
  };

  // VoorkennisKeten als zichtbare lijst
  let voorkennisHtml = "";
  if (check.voorkennisKeten && Array.isArray(check.voorkennisKeten) && check.voorkennisKeten.length) {
    voorkennisHtml = `
    <section class="lk-voorkennis">
      <h2>Wat moet je weten om deze vraag te kunnen beantwoorden?</h2>
      <ol>
        ${check.voorkennisKeten.map((v) => `
        <li>
          <strong>${escapeHtml(v.title)}</strong>${v.niveau ? ` <span class="lk-niveau">${escapeHtml(v.niveau)}</span>` : ""}
          ${v.why ? `<br><span class="lk-why">${escapeHtml(v.why)}</span>` : ""}
        </li>`).join("")}
      </ol>
    </section>`;
  }

  // Uitleg-stappen
  let stappenHtml = "";
  if (check.uitlegPad?.stappen && Array.isArray(check.uitlegPad.stappen)) {
    stappenHtml = `
    <section class="lk-stappen">
      <h2>Stap voor stap uitgelegd</h2>
      <ol>
        ${check.uitlegPad.stappen.map((s) => `
        <li>
          <strong>${escapeHtml(s.titel || "")}</strong><br>
          <p>${mdToHtml(s.tekst || "")}</p>
        </li>`).join("")}
      </ol>
    </section>`;
  }

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
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<script type="application/ld+json">${JSON.stringify(breadcrumbs)}</script>
<style>
  :root { color-scheme: dark; }
  body { font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; background:#0e1014; color:#e8eef7; max-width: 760px; margin: 0 auto; padding: 24px 18px; line-height: 1.6; }
  a { color: #69b2ff; }
  h1 { font-size: 1.5em; line-height: 1.3; color: #fff; }
  h2 { color: #00d4ff; margin-top: 2em; font-size: 1.15em; }
  nav.lk-breadcrumb { font-size: .85em; opacity: .7; margin-bottom: 1.5em; }
  nav.lk-breadcrumb a { color: #80deea; }
  .lk-antwoord { background: linear-gradient(135deg, #1a3a2e, #1e4536); border-left: 4px solid #00e676; padding: 14px 18px; border-radius: 10px; margin: 1.5em 0; }
  .lk-antwoord strong { color: #00e676; font-size: 1.1em; }
  .lk-bron { background: rgba(255, 213, 79, 0.08); border: 1px solid rgba(255, 213, 79, 0.3); padding: 10px 14px; border-radius: 8px; font-size: .9em; }
  .lk-bron strong { color: #ffd54f; }
  .lk-niveau { background: rgba(0, 212, 255, 0.15); padding: 1px 8px; border-radius: 8px; font-size: .8em; color: #00d4ff; }
  .lk-why { font-size: .9em; opacity: .85; }
  .lk-stappen ol, .lk-voorkennis ol { padding-left: 1.4em; }
  .lk-stappen li, .lk-voorkennis li { margin-bottom: 1em; }
  .lk-opties { background: rgba(0, 212, 255, 0.06); padding: 12px 16px; border-radius: 8px; margin: 1em 0; }
  .lk-opties li { margin: 4px 0; }
  .lk-opties .correct { color: #00e676; font-weight: 600; }
  .lk-cta { display: inline-block; background: linear-gradient(135deg, #ff6b35, #ff8c42); color: #fff; padding: 12px 20px; border-radius: 10px; text-decoration: none; font-weight: 700; margin-top: 1.5em; }
  footer { margin-top: 3em; padding-top: 1.5em; border-top: 1px solid #2a3f5f; font-size: .85em; opacity: .75; }
</style>
</head>
<body>
<nav class="lk-breadcrumb" aria-label="Kruimelpad">
  <a href="/">Leerkwartier</a> ›
  <a href="/vmbo-examens-oefenen.html">${escapeHtml(vakLabel)} examens</a> ›
  <a href="/examen/${pathSlug}/">${escapeHtml(vakLabel)} ${jaar} tijdvak ${tijdvak}</a> ›
  Vraag ${vraagNr}
</nav>

<header>
  <p style="opacity:.7;font-size:.9em;margin-bottom:.5em">${escapeHtml(vakLabel)} eindexamen ${escapeHtml(niveauLabel)} ${jaar} tijdvak ${tijdvak} — vraag ${vraagNr} van ${totalVragen}</p>
  <h1>${escapeHtml(check.q)}</h1>
</header>

<section class="lk-opties">
  <strong>Antwoordopties:</strong>
  <ol type="A">
    ${check.options.map((opt, i) => `<li${i === check.answer ? ' class="correct"' : ""}>${escapeHtml(opt)}${i === check.answer ? " ✓" : ""}</li>`).join("\n    ")}
  </ol>
</section>

<div class="lk-antwoord">
  <strong>Het juiste antwoord is ${answerLetter}: ${escapeHtml(answerText)}</strong>
  ${check.explanation ? `<p style="margin:.8em 0 0">${mdToHtml(check.explanation)}</p>` : ""}
</div>

${stappenHtml}
${voorkennisHtml}

${ebUrl ? `<section class="lk-bron">
  <strong>🎓 Officiële bron</strong><br>
  Dit is een echte examenvraag uit het Centraal Schriftelijk Eindexamen ${vakLabel} ${niveauLabel} ${jaar} tijdvak ${tijdvak}.<br>
  <a href="${ebUrl}" target="_blank" rel="noopener nofollow">Bekijk de volledige examenopgaven op examenblad.nl</a> (PDF).
</section>` : `<section class="lk-bron">
  <strong>🎓 Bron</strong><br>
  Echte examenvraag uit het Centraal Schriftelijk Eindexamen ${vakLabel} ${niveauLabel} ${jaar} tijdvak ${tijdvak}.
</section>`}

<a class="lk-cta" href="${oefenenUrl}">Oefen deze vraag interactief in Leerkwartier →</a>

<footer>
  Leerkwartier is een gratis examen-oefenplatform voor VMBO, HAVO, VWO en de Doorstroomtoets.
  <a href="/">Naar de homepage</a> · <a href="/over.html">Over Leerkwartier</a>
</footer>
</body>
</html>
`;
}

// ─── Main ────────────────────────────────────────────────────────────────
async function main() {
  const examenFiles = readdirSync(SRC)
    .filter((f) => f.startsWith("examen") && f.endsWith(".js") && f !== "examenLookup.js")
    .sort();

  const sitemapEntries = [];
  let totalPaginas = 0;

  for (const file of examenFiles) {
    const fileUrl = pathToFileURL(join(process.cwd(), SRC, file)).href;
    let pathData;
    try {
      const mod = await import(fileUrl);
      pathData = mod.default;
    } catch (err) {
      console.warn(`[skip] ${file}: ${err.message}`);
      continue;
    }
    if (!pathData?.id) continue;

    const parsed = parseId(pathData.id);
    if (!parsed) {
      console.warn(`[skip] ${file}: kan id ${pathData.id} niet parsen`);
      continue;
    }

    const totalVragen = pathData.steps?.length || 0;
    const pathSlug = `${parsed.vak}/vmbo-gl-tl-${parsed.jaar}-tijdvak-${parsed.tijdvak}`;
    const outDir = join(OUT, parsed.vak, `vmbo-gl-tl-${parsed.jaar}-tijdvak-${parsed.tijdvak}`);
    if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

    for (const step of pathData.steps || []) {
      const { nr, onderwerp } = parseVraagTitel(step.title);
      if (!nr || !step.checks || !step.checks.length) continue;

      const check = step.checks[0]; // examen-paden hebben 1 check per step
      if (!check.q || !Array.isArray(check.options) || check.options.length < 2) continue;

      const vraagSlug = `vraag-${nr}${onderwerp ? "-" + slugify(onderwerp) : ""}`;
      const filename = `${vraagSlug}.html`;
      const html = renderHtml({
        pathMeta: { ...parsed, id: pathData.id, level: pathData.level },
        check,
        vraagNr: nr,
        vraagOnderwerp: onderwerp,
        totalVragen,
      });
      writeFileSync(join(outDir, filename), html, "utf8");
      sitemapEntries.push(`/examen/${pathSlug}/${vraagSlug}.html`);
      totalPaginas++;
    }
    console.log(`✓ ${file}: ${pathData.steps?.length || 0} vragen → ${pathSlug}/`);
  }

  console.log(`\nTotaal ${totalPaginas} examenvraag-pagina's gegenereerd.\n`);
  console.log("Sitemap-entries (kopieer naar public/sitemap.xml):");
  sitemapEntries.forEach((u) => {
    console.log(`  <url><loc>${SITE}${u}</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>`);
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

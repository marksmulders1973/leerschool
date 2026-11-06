#!/usr/bin/env node
// scripts/buildWerkbladPaginas.mjs — 6 nov 2026 (Mark: "doe 1 en 3", kanaal werkbladen).
//
// WAAROM: juffen en ouders zoeken "werkblad breuken groep 6" op Google en Pinterest en delen
// zulke bladen in lerarengroepen. Sinds v1061 is elk leerpad printbaar (/print/pad?werkblad=<id>),
// maar dat is een SPA-route en dus onzichtbaar voor crawlers. Dit script maakt per PO-leerpad
// één crawlbare pagina public/werkblad/<id>.html (titel, wat erop staat, vijf voorbeeldvragen,
// knop naar het printblad en naar de app) plus een overzicht public/werkbladen.html, en zet de
// URL's in de sitemap. Eén bron van waarheid: de leerpaden zelf (pathManifest + pad-bestanden).
//
// Selectie: alle paden met "groep" in level (basisschool), geen examen-*. Draait mee in prebuild.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import { pathToFileURL } from "node:url";
import esbuild from "esbuild";

const SITE = "https://leerkwartier.app";
const SRC = "src/learnPaths";
const OUT = "public/werkblad";
const MANIFEST = join(SRC, "pathManifest.generated.json");
const SITEMAP = "public/sitemap.xml";
const VANDAAG = new Date().toISOString().slice(0, 10);

// Zelfde .jsx-stub als buildPadLandingsPaginas.mjs: paden met 3D-componenten laden zonder browser-code.
const stubJsx = {
  name: "stub-jsx-assets",
  setup(build) {
    build.onResolve({ filter: /\.(jsx|tsx|css|svg|png|jpe?g|glb|gltf|webp)$/ }, (args) => ({ path: args.path, namespace: "stub" }));
    build.onLoad({ filter: /.*/, namespace: "stub" }, () => ({
      contents: "const c=new Proxy(function(){},{get:()=>c,apply:()=>c});const f=()=>c;module.exports={makeRekenOefenRonde:f,maakFotoStrook:f,default:c};",
      loader: "js",
    }));
  },
};
async function laadPadData(absPath) {
  try {
    const mod = await import(pathToFileURL(absPath).href);
    if (mod.default?.id) return mod.default;
  } catch { /* esbuild-route */ }
  const res = await esbuild.build({ entryPoints: [absPath], bundle: true, format: "esm", platform: "node", write: false, plugins: [stubJsx], logLevel: "silent" });
  const mod = await import("data:text/javascript;base64," + Buffer.from(res.outputFiles[0].text).toString("base64"));
  return mod.default;
}

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const schoon = (s) => String(s ?? "").replace(/\*\*/g, "").replace(/(^|[^\w])[*_]([^*_]+)[*_]/g, "$1$2").replace(/\$/g, "").replace(/\s+/g, " ").trim();
const eersteZin = (s, max = 160) => { const t = schoon(s); const m = t.match(/^.{20,}?[.!?](\s|$)/); const z = m ? m[0].trim() : t; return z.length > max ? z.slice(0, max).replace(/\s+\S*$/, "") + "…" : z; };
const titelKort = (t) => schoon(t).split(/\s[—·(]\s?/)[0].replace(/\s*\(.*$/, "").trim();
function groepLabel(level) { const m = String(level || "").match(/groep\s*([\d-]+)/i); return m ? "groep " + m[1].replace("-", " t/m ") : "basisschool"; }
const VAK = { rekenen: "Rekenen", taal: "Taal", "begrijpend-lezen": "Begrijpend lezen", natuur: "Natuur", geschiedenis: "Geschiedenis", aardrijkskunde: "Aardrijkskunde", wereldorientatie: "Wereldoriëntatie", studievaardigheden: "Studievaardigheden", spelling: "Spelling", engels: "Engels", cito: "Doorstroomtoets" };
const vakLabel = (s) => VAK[s] || (s ? s[0].toUpperCase() + s.slice(1) : "Oefenen");

function vragenVan(pad, max = 5) {
  const uit = [];
  for (const st of pad.steps || []) {
    for (const c of st.checks || (st.check ? [st.check] : [])) {
      if (!c?.q || !Array.isArray(c.options) || c.leesTekst) continue;
      uit.push({ q: schoon(c.q), opties: c.options.map(schoon) });
      if (uit.length >= max) return uit;
    }
  }
  return uit;
}
function telVragen(pad) { return (pad.steps || []).reduce((n, s) => n + (s.checks?.length || (s.check ? 1 : 0)), 0); }

const STIJL = `
  :root{color-scheme:dark}
  body{font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;background:linear-gradient(160deg,#0f1729 0%,#162033 50%,#1a2744 100%);color:#e8eef7;max-width:760px;margin:0 auto;padding:28px 20px 60px;line-height:1.55}
  a{color:#69b2ff;text-decoration:none} a:hover{text-decoration:underline}
  h1{font-size:1.7em;line-height:1.2;color:#fff;margin:.2em 0 .35em} h2{color:#00d4ff;margin-top:1.8em;font-size:1.15em}
  nav.bc{font-size:.85em;opacity:.65;margin-bottom:1em} .eyebrow{font-size:.8em;color:#00d4ff;text-transform:uppercase;letter-spacing:.5px;font-weight:700}
  .lead{font-size:1.08em;color:rgba(255,255,255,.92);margin:.4em 0 1.2em}
  .stats{display:flex;gap:10px;flex-wrap:wrap;margin:0 0 1.2em} .stat{background:rgba(255,255,255,.05);padding:7px 12px;border-radius:10px;font-size:.85em} .stat b{color:#ffd54f}
  .cta{display:inline-flex;align-items:center;gap:8px;padding:14px 24px;background:linear-gradient(135deg,#ffd54f,#ffb300);color:#1a1a00;border-radius:12px;font-weight:800;margin:6px 10px 6px 0}
  .cta.groen{background:linear-gradient(135deg,#00c853,#00e676);color:#06211a}
  .cta:hover{text-decoration:none;transform:translateY(-1px)}
  ol,ul{padding-left:22px} li{margin-bottom:8px}
  .vraag{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:12px 16px;margin:10px 0}
  .vraag ul{list-style:none;padding:0;margin:8px 0 0;display:grid;grid-template-columns:1fr 1fr;gap:6px 14px} .vraag li{margin:0;font-size:.95em} .letter{font-weight:700;color:#00d4ff;margin-right:6px}
  .rel{margin-top:2.2em;padding:14px 18px;background:rgba(255,255,255,.03);border-radius:10px;font-size:.9em} .rel b{color:#00d4ff}
  .klein{font-size:.85em;color:rgba(255,255,255,.6)}
  .lijst{columns:2;column-gap:28px} .lijst li{break-inside:avoid}
  @media (max-width:600px){.vraag ul{grid-template-columns:1fr}.lijst{columns:1}}
`;

function renderWerkblad(pad, broers) {
  const id = pad.id, kort = titelKort(pad.title || id), groep = groepLabel(pad.level), vak = vakLabel(pad.subject);
  const canonical = `${SITE}/werkblad/${id}.html`;
  const printUrl = `/print/pad?werkblad=${encodeURIComponent(id)}&utm_source=werkbladpagina`;
  const appUrl = `/leren/pad?id=${encodeURIComponent(id)}&utm_source=werkbladpagina`;
  const nVragen = telVragen(pad), nDelen = (pad.steps || []).length;
  const titel = `Werkblad ${kort} (${groep}) — gratis printen met antwoorden`;
  const desc = `Printbaar werkblad ${kort.toLowerCase()} voor ${groep}: de uitleg in het kort, ${Math.min(nVragen, 20)} oefenvragen en een antwoordblad. Gratis, zonder account, van Leerkwartier.`;
  const delen = (pad.steps || []).slice(0, 8).map((s, i) => `<li><b>Deel ${i + 1}: ${esc(schoon(s.title))}</b>${s.explanation ? ` — ${esc(eersteZin(s.explanation))}` : ""}</li>`).join("");
  const vragen = vragenVan(pad).map((v, i) => `<div class="vraag"><b>${i + 1}. ${esc(v.q)}</b><ul>${v.opties.map((o, j) => `<li><span class="letter">${"ABCDEF"[j]}.</span>${esc(o)}</li>`).join("")}</ul></div>`).join("");
  const jsonLd = { "@context": "https://schema.org", "@type": "LearningResource", name: titel, description: desc, url: canonical, inLanguage: "nl-NL", educationalLevel: `${groep} basisschool`, learningResourceType: "Worksheet", isAccessibleForFree: true, about: kort, provider: { "@type": "EducationalOrganization", name: "Leerkwartier", url: SITE } };
  const bc = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Leerkwartier", item: SITE + "/" },
    { "@type": "ListItem", position: 2, name: "Werkbladen", item: SITE + "/werkbladen.html" },
    { "@type": "ListItem", position: 3, name: titel, item: canonical }] };
  const rel = broers.map((b) => `<a href="/werkblad/${b.id}.html">${esc(titelKort(b.title))}</a>`).join(" · ");
  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titel)} · Leerkwartier</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="article"><meta property="og:title" content="${esc(titel)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="Leerkwartier"><meta property="og:locale" content="nl_NL"><meta property="og:image" content="${SITE}/social/deel-start.jpg">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<script type="application/ld+json">${JSON.stringify(bc)}</script>
<style>${STIJL}</style>
<script defer src="/_vercel/insights/script.js"></script>
</head><body>
<nav class="bc"><a href="/">Home</a> › <a href="/werkbladen.html">Werkbladen</a> › ${esc(kort)}</nav>
<div class="eyebrow">${esc(vak)} · ${esc(groep)} · werkblad</div>
<h1>Werkblad ${esc(kort)}</h1>
<p class="lead">Printbaar werkblad met de uitleg in het kort, ${Math.min(nVragen, 20)} oefenvragen om te omcirkelen en een antwoordblad voor wie nakijkt. Gratis, zonder account.</p>
<div class="stats"><div class="stat"><b>${nDelen}</b> delen uitleg</div><div class="stat"><b>${Math.min(nVragen, 20)}</b> vragen</div><div class="stat"><b>A4</b> · antwoordblad achteraan</div><div class="stat">Gratis · geen account</div></div>
<a class="cta" href="${printUrl}">🖨️ Open en print het werkblad</a>
<a class="cta groen" href="${appUrl}">🎯 Liever op het scherm: oefen in de app</a>
<h2>Wat staat er op het werkblad?</h2>
<ol>${delen}</ol>
<p class="klein">Blad 1 is de uitleg per deel met een uitgewerkt voorbeeld, daarna de vragen (zeven per blad), en als laatste de antwoorden met één zin uitleg.</p>
<h2>Voorbeeldvragen</h2>
${vragen || "<p class='klein'>De vragen staan op het werkblad.</p>"}
<p class="klein">De antwoorden staan op het laatste blad van het werkblad. Op het scherm krijgt een kind bij elke vraag uitleg op drie niveaus.</p>
<a class="cta" href="${printUrl}">🖨️ Open en print het werkblad</a>
<div class="rel"><b>Meer werkbladen ${esc(vak.toLowerCase())}:</b> ${rel || "—"}<br><a href="/werkbladen.html">Alle werkbladen</a> · <a href="/verhoudingstabellen-oefenblad.html">Verhoudingstabellen (groep 8, steeds nieuwe getallen)</a> · <a href="/weekpakket.html">Weekpakket per mail</a></div>
<p class="klein" style="margin-top:28px">Een kwartier per dag leren, een leven lang slimmer. · <a href="/">leerkwartier.app</a></p>
</body></html>
`;
}

function renderIndex(paden) {
  const perVak = new Map();
  for (const p of paden) { const v = vakLabel(p.subject); if (!perVak.has(v)) perVak.set(v, []); perVak.get(v).push(p); }
  const volg = ["Rekenen", "Taal", "Spelling", "Begrijpend lezen", "Studievaardigheden", "Doorstroomtoets", "Natuur", "Geschiedenis", "Aardrijkskunde", "Wereldoriëntatie", "Engels"];
  const vakken = [...perVak.keys()].sort((a, b) => (volg.indexOf(a) + 99 * (volg.indexOf(a) < 0)) - (volg.indexOf(b) + 99 * (volg.indexOf(b) < 0)));
  const secties = vakken.map((v) => `<h2>${esc(v)}</h2><ul class="lijst">${perVak.get(v).sort((a, b) => titelKort(a.title).localeCompare(titelKort(b.title), "nl")).map((p) => `<li><a href="/werkblad/${p.id}.html">${esc(titelKort(p.title))}</a> <span class="klein">· ${esc(groepLabel(p.level))}</span></li>`).join("")}</ul>`).join("");
  const canonical = `${SITE}/werkbladen.html`;
  const titel = `Gratis werkbladen basisschool (groep 3 t/m 8) — printen met antwoorden`;
  const desc = `${paden.length} printbare werkbladen voor rekenen, taal, spelling, begrijpend lezen en wereldoriëntatie, groep 3 t/m 8. Elk blad: uitleg in het kort, oefenvragen en een antwoordblad. Gratis, zonder account.`;
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: titel, description: desc, url: canonical, inLanguage: "nl-NL", isAccessibleForFree: true, provider: { "@type": "EducationalOrganization", name: "Leerkwartier", url: SITE } };
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [
    { "@type": "Question", name: "Zijn de werkbladen van Leerkwartier gratis?", acceptedAnswer: { "@type": "Answer", text: "Ja. Elk werkblad is gratis te printen, zonder account en zonder betaalgegevens. Het oefenen in de app is gratis, gegarandeerd tot en met 2031." } },
    { "@type": "Question", name: "Staan de antwoorden erbij?", acceptedAnswer: { "@type": "Answer", text: "Ja. Het laatste blad van elk werkblad is het antwoordblad, met bij elke vraag één zin uitleg voor wie nakijkt." } },
    { "@type": "Question", name: "Voor welke groepen zijn de werkbladen?", acceptedAnswer: { "@type": "Answer", text: "Groep 3 tot en met 8 van de basisschool. Bij elk werkblad staat de groep. De onderwerpen volgen de leerlijnen voor rekenen, taal, spelling, begrijpend lezen en wereldoriëntatie, met extra aandacht voor de Doorstroomtoets in groep 8." } } ] };
  return `<!doctype html>
<html lang="nl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(titel)} · Leerkwartier</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website"><meta property="og:title" content="${esc(titel)}"><meta property="og:description" content="${esc(desc)}"><meta property="og:url" content="${canonical}"><meta property="og:site_name" content="Leerkwartier"><meta property="og:image" content="${SITE}/social/deel-start.jpg">
<meta name="robots" content="index,follow,max-snippet:-1,max-image-preview:large">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
<script type="application/ld+json">${JSON.stringify(faq)}</script>
<style>${STIJL}</style>
<script defer src="/_vercel/insights/script.js"></script>
</head><body>
<nav class="bc"><a href="/">Home</a> › Werkbladen</nav>
<div class="eyebrow">Printen · groep 3 t/m 8</div>
<h1>Gratis werkbladen voor de basisschool</h1>
<p class="lead">${paden.length} werkbladen om te printen: per onderwerp de uitleg in het kort, oefenvragen en een antwoordblad. Elk werkblad hoort bij een leerpad in de app, waar een kind bij elke vraag uitleg op drie niveaus krijgt. Gratis, zonder account.</p>
<a class="cta" href="/verhoudingstabellen-oefenblad.html">📐 Verhoudingstabellen groep 8: elke keer nieuwe getallen</a>
<a class="cta groen" href="/weekpakket.html">📬 Elke week een vers printpakket per mail</a>
${secties}
<div class="rel"><b>Voor leerkrachten:</b> <a href="/weektaak?g=8">de weektaak per groep</a> · <a href="/klas">vijf vragen op het digibord</a> · <a href="/voor-leerkrachten.html">alles voor leerkrachten</a>. Een school betaalt nooit.</div>
<p class="klein" style="margin-top:28px">Een kwartier per dag leren, een leven lang slimmer. · <a href="/">leerkwartier.app</a></p>
</body></html>
`;
}

function sitemapBijwerken(urls) {
  let xml = readFileSync(SITEMAP, "utf8");
  const bestaand = new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()));
  const nieuw = urls.filter((u) => !bestaand.has(u));
  if (!nieuw.length) return 0;
  const blok = nieuw.map((u) => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${VANDAAG}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>\n`).join("");
  xml = xml.replace(/<\/urlset>\s*$/, blok + "</urlset>\n");
  writeFileSync(SITEMAP, xml, "utf8");
  return nieuw.length;
}

async function main() {
  if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });
  const manifest = JSON.parse(readFileSync(MANIFEST, "utf8"));
  const kandidaten = manifest.filter((p) => /groep/i.test(String(p.level || "")) && !String(p.id).startsWith("examen-"));
  const paden = [];
  for (const m of kandidaten) {
    const file = join(process.cwd(), SRC, String(m.file || "").replace(/^\.\//, ""));
    if (!existsSync(file)) { console.warn(`[skip] ${m.id}: ${m.file} ontbreekt`); continue; }
    try {
      const pad = await laadPadData(file);
      if (!pad?.id || telVragen(pad) < 5) { console.warn(`[skip] ${m.id}: te weinig vragen`); continue; }
      paden.push(pad);
    } catch (e) { console.warn(`[skip] ${m.id}: ${String(e.message).slice(0, 80)}`); }
  }
  const urls = [];
  for (const pad of paden) {
    const broers = paden.filter((b) => b.subject === pad.subject && b.id !== pad.id).slice(0, 4);
    writeFileSync(join(OUT, `${pad.id}.html`), renderWerkblad(pad, broers), "utf8");
    urls.push(`${SITE}/werkblad/${pad.id}.html`);
  }
  writeFileSync("public/werkbladen.html", renderIndex(paden), "utf8");
  urls.push(`${SITE}/werkbladen.html`);
  const n = sitemapBijwerken(urls);
  console.log(`✓ werkbladen: ${paden.length} pagina's + overzicht → public/werkblad/ (sitemap +${n})`);
}
main().catch((e) => { console.error("buildWerkbladPaginas faalde:", e); process.exit(1); });

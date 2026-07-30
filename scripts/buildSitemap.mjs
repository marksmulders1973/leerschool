// Sitemap-generator voor leerkwartier.app.
// Scant public/ voor alle echte landingspagina's (.html) + alle examenpagina's
// onder public/examen/**, plus de homepage. Schrijft public/sitemap.xml.
// Doel: alle 240 examenpagina's vindbaar maken voor Google (stonden er maar 61 in).
//
// Draaien:  node scripts/buildSitemap.mjs
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { join, relative, sep } from "node:path";

const BASE = "https://leerkwartier.app";
const PUBLIC = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const TODAY = "2026-06-04"; // lastmod; handmatig bijwerken bij grote contentronde

// Top-level bestanden die GEEN vindbare contentpagina zijn → uitsluiten.
const EXCLUDE_TOPLEVEL = new Set([
  "google6c89719e47d5ff0b.html", // GSC-verificatie
  "maak-icoon.html",             // dev-tool (icoon-generator)
  "index.html",                  // SPA-shell zelf
  "404.html",
]);

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) out.push(...walk(full));
    else if (name.endsWith(".html")) out.push(full);
  }
  return out;
}

const all = walk(PUBLIC);
const urls = [];

// Homepage
urls.push({ loc: `${BASE}/`, priority: "1.0" });

for (const file of all) {
  const rel = relative(PUBLIC, file).split(sep).join("/");
  if (!rel.includes("/") && EXCLUDE_TOPLEVEL.has(rel)) continue; // top-level uitsluiten
  const isExamen = rel.startsWith("examen/");
  // Set-indexpagina's (examen/<vak>/<set>/index.html) als map-URL met trailing slash
  // (canonical is de map-URL; zie scripts/build-examen-set-indexes.mjs).
  if (isExamen && rel.endsWith("/index.html")) {
    urls.push({ loc: `${BASE}/${rel.slice(0, -"index.html".length)}`, priority: "0.7" });
    continue;
  }
  // examen-index-pagina's iets hoger (0.7), losse vragen 0.6, landing 0.8
  const priority = isExamen ? "0.6" : "0.8";
  urls.push({ loc: `${BASE}/${rel}`, priority });
}

// dedup + sorteer (homepage eerst, dan landing, dan examen)
const seen = new Set();
const uniq = urls.filter((u) => (seen.has(u.loc) ? false : (seen.add(u.loc), true)));
uniq.sort((a, b) => Number(b.priority) - Number(a.priority) || a.loc.localeCompare(b.loc));

const body = uniq
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

writeFileSync(join(PUBLIC, "sitemap.xml"), xml, "utf8");
const examenCount = uniq.filter((u) => u.loc.includes("/examen/")).length;
console.log(`sitemap.xml geschreven: ${uniq.length} URLs (waarvan ${examenCount} examenpagina's).`);

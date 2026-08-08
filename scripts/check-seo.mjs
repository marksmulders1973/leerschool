// SEO-waakhond (dagrapport-idee #17, 2026-08-08). Draait in de prebuild en
// laat de build HARD falen bij stille SEO-schade — zodat we het zelf vangen
// vóórdat Google Search Console het per mail meldt (zoals de noindex-fout
// van 7 aug 2026).
//
// Checks:
//  1. Geen sitemap-URL mag naar een pagina met een noindex-robots-tag wijzen.
//  2. Elke sitemap-URL moet naar een bestaand bestand in public/ wijzen.
//  3. Elke indexeerbare .html in public/ moet in de sitemap staan
//     (vergeten? → `node scripts/buildSitemap.mjs` draaien).
//  4. Elke leerkwartier.app/*.html-link in llms.txt moet bestaan.
//
// Draaien:  node scripts/check-seo.mjs
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const BASE = "https://leerkwartier.app";
const PUBLIC = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

// Zelfde uitsluitingen als buildSitemap.mjs — geen contentpagina's.
const EXCLUDE_TOPLEVEL = new Set([
  "google6c89719e47d5ff0b.html",
  "maak-icoon.html",
  "index.html",
  "404.html",
]);

const fouten = [];

function isNoindex(file) {
  const head = readFileSync(file, "utf8").slice(0, 2000);
  return /<meta[^>]+name=["']robots["'][^>]+noindex/i.test(head);
}

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

// ── Sitemap inlezen ────────────────────────────────────────────────
const sitemapPad = join(PUBLIC, "sitemap.xml");
if (!existsSync(sitemapPad)) {
  console.error("❌ check-seo: public/sitemap.xml ontbreekt.");
  process.exit(1);
}
const sitemapXml = readFileSync(sitemapPad, "utf8");
const sitemapUrls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());

// Check 1 + 2: elke sitemap-URL → bestaand bestand zonder noindex.
for (const url of sitemapUrls) {
  if (!url.startsWith(BASE)) { fouten.push(`sitemap: vreemde URL buiten ${BASE}: ${url}`); continue; }
  let pad = url.slice(BASE.length).replace(/^\//, "");
  if (pad === "") continue; // homepage = SPA-shell (index.html in projectroot, niet in public/)
  if (pad.endsWith("/")) pad += "index.html";
  const file = join(PUBLIC, ...pad.split("/"));
  if (!existsSync(file)) {
    fouten.push(`sitemap wijst naar niet-bestaand bestand: ${url} (→ node scripts/buildSitemap.mjs)`);
    continue;
  }
  if (isNoindex(file)) {
    fouten.push(`sitemap bevat noindex-pagina: ${url} (GSC-fout! → node scripts/buildSitemap.mjs)`);
  }
}

// Check 3: elke indexeerbare pagina hoort in de sitemap.
const sitemapSet = new Set(sitemapUrls);
for (const file of walk(PUBLIC)) {
  const rel = relative(PUBLIC, file).split(sep).join("/");
  if (!rel.includes("/") && EXCLUDE_TOPLEVEL.has(rel)) continue;
  if (isNoindex(file)) continue;
  const alsBestand = `${BASE}/${rel}`;
  const alsMap = rel.endsWith("/index.html") ? `${BASE}/${rel.slice(0, -"index.html".length)}` : null;
  if (!sitemapSet.has(alsBestand) && !(alsMap && sitemapSet.has(alsMap))) {
    fouten.push(`indexeerbare pagina mist in sitemap: /${rel} (→ node scripts/buildSitemap.mjs)`);
  }
}

// Check 4: llms.txt-links naar eigen .html-pagina's moeten bestaan.
for (const naam of ["llms.txt", "llms-full.txt"]) {
  const pad = join(PUBLIC, naam);
  if (!existsSync(pad)) continue;
  const tekst = readFileSync(pad, "utf8");
  const links = [...tekst.matchAll(/https:\/\/(?:www\.)?leerkwartier\.app\/([^\s)\]"'<>]+\.html)/g)].map((m) => m[1]);
  for (const rel of new Set(links)) {
    const file = join(PUBLIC, ...rel.split("/"));
    if (!existsSync(file)) fouten.push(`${naam} linkt naar niet-bestaande pagina: /${rel}`);
  }
}

if (fouten.length) {
  console.error(`❌ check-seo: ${fouten.length} probleem(en) gevonden:\n` + fouten.map((f) => `  - ${f}`).join("\n"));
  process.exit(1);
}
console.log(`✅ check-seo: sitemap (${sitemapUrls.length} URLs) + llms.txt schoon — geen noindex-lekken, geen dode links, niets vergeten.`);

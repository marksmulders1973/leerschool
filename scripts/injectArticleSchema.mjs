// Voegt Article JSON-LD toe aan de lange, artikel-achtige landingspagina's
// (Google Discover / rich-result eligibility). Idempotent: slaat pagina's met
// een bestaand '"@type": "Article"' over. Draaien: node scripts/injectArticleSchema.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = "https://leerkwartier.app";
const PUBLIC = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const DATE = process.env.SITEMAP_DATE || new Date().toISOString().slice(0, 10);

const TARGETS = [
  "begrijpend-lezen-doorstroomtoets.html",
  "rekenen-doorstroomtoets.html",
  "spelling-doorstroomtoets.html",
  "woordenschat-doorstroomtoets.html",
  "studievaardigheden-doorstroomtoets.html",
  "leren-15-minuten.html",
  "onderwijs-begrippen.html",
  "zomerdip-voorkomen.html",
];

const jsonEsc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

function wordCount(html) {
  const body = (html.match(/<body[\s\S]*?<\/body>/i) || [""])[0]
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ");
  return body.split(/\s+/).filter(Boolean).length;
}

const changed = [], skipped = [];
for (const file of TARGETS) {
  const path = join(PUBLIC, file);
  let html;
  try { html = readFileSync(path, "utf8"); } catch { skipped.push(`${file} (bestaat niet)`); continue; }
  if (/"@type":\s*"Article"/.test(html)) { skipped.push(`${file} (had al Article)`); continue; }

  const title = decode((html.match(/<title>([^<]*)<\/title>/i) || [, file])[1].split(" · ")[0].split(" — ")[0].trim());
  const desc = decode((html.match(/<meta name="description" content="([^"]*)"/i) || [, ""])[1]);
  const canon = (html.match(/rel="canonical"\s+href="([^"]+)"/i) || [, `${BASE}/${file}`])[1];
  const wc = wordCount(html);

  const block = `\n  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${jsonEsc(title)}",
    "description": "${jsonEsc(desc)}",
    "articleSection": "Onderwijs",
    "wordCount": ${wc},
    "inLanguage": "nl-NL",
    "datePublished": "${DATE}",
    "dateModified": "${DATE}",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "${canon}" },
    "author": { "@type": "Organization", "name": "Leerkwartier", "url": "${BASE}" },
    "publisher": {
      "@type": "Organization",
      "name": "Leerkwartier",
      "logo": { "@type": "ImageObject", "url": "${BASE}/logo.jpg" }
    }
  }
  </script>`;

  html = html.replace(/<\/title>/i, `</title>${block}`);
  writeFileSync(path, html, "utf8");
  changed.push(`${file} (${wc} woorden)`);
}

console.log(`Article-schema toegevoegd aan ${changed.length}:`);
changed.forEach((c) => console.log("  + " + c));
if (skipped.length) { console.log("Overgeslagen:"); skipped.forEach((s) => console.log("  - " + s)); }

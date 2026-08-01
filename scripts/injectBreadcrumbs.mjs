// Injecteert BreadcrumbList JSON-LD in de top-level landingspagina's onder
// public/*.html die het nog NIET hebben. Idempotent: pagina's met een
// bestaande "BreadcrumbList" worden overgeslagen, dus meermaals draaien is veilig.
//
// Hiërarchie:
//   Home > [rubriek-hub] > [pagina]      (voor sub-pagina's van een cluster)
//   Home > [pagina]                       (voor hub-/losse pagina's)
//
// Draaien:  node scripts/injectBreadcrumbs.mjs
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BASE = "https://leerkwartier.app";
const PUBLIC = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");

// Geen echte contentpagina's → overslaan.
const SKIP = new Set([
  "index.html", "404.html", "maak-icoon.html", "google6c89719e47d5ff0b.html",
]);

// Cluster-hubs: sub-pagina's krijgen een tussenlaag naar hun hub.
// key = herkenning in bestandsnaam; hub = {name, file}. Hub-bestand zelf krijgt géén tussenlaag.
const CLUSTERS = [
  { match: (f) => f.startsWith("doorstroomtoets-") || f.includes("-doorstroomtoets"), hubFile: "doorstroomtoets-oefenen.html", hubName: "Doorstroomtoets oefenen" },
  { match: (f) => f.startsWith("cito-"), hubFile: "cito-eindtoets-oefenen.html", hubName: "Cito-eindtoets oefenen" },
  { match: (f) => f.startsWith("vmbo-"), hubFile: "vmbo-examens-oefenen.html", hubName: "VMBO-examens oefenen" },
];

const jsonEsc = (s) => s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');

function cleanTitle(raw) {
  // Neem de kern vóór de eerste " · " of " — " scheider; strip merk-staart.
  let t = raw.split(" · ")[0].split(" — ")[0].trim();
  t = t.replace(/\s*·\s*Leerkwartier\s*$/i, "").trim();
  // HTML-entiteiten decoderen — binnen <script> worden ze niet HTML-geparsed,
  // dus ze moeten al als los teken in de JSON staan.
  t = t.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'")
       .replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  return t || "Leerkwartier";
}

const files = readdirSync(PUBLIC).filter((f) => f.endsWith(".html") && !SKIP.has(f));
const changed = [];
const skipped = [];

for (const file of files) {
  const path = join(PUBLIC, file);
  let html = readFileSync(path, "utf8");

  if (/"BreadcrumbList"/.test(html)) { skipped.push(`${file} (had al breadcrumb)`); continue; }
  const titleMatch = html.match(/<title>([^<]*)<\/title>/i);
  if (!titleMatch) { skipped.push(`${file} (geen <title>)`); continue; }

  const canonMatch = html.match(/rel="canonical"\s+href="([^"]+)"/i);
  const canonical = canonMatch ? canonMatch[1] : `${BASE}/${file}`;
  const pageName = cleanTitle(titleMatch[1]);

  const items = [{ name: "Home", item: `${BASE}/` }];
  const cluster = CLUSTERS.find((c) => c.match(file) && file !== c.hubFile);
  if (cluster) items.push({ name: cluster.hubName, item: `${BASE}/${cluster.hubFile}` });
  items.push({ name: pageName, item: canonical });

  const listEls = items
    .map((it, i) => `      { "@type": "ListItem", "position": ${i + 1}, "name": "${jsonEsc(it.name)}", "item": "${it.item}" }`)
    .join(",\n");

  const block = `\n  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
${listEls}
    ]
  }
  </script>`;

  // Na de eerste </title> invoegen.
  html = html.replace(/<\/title>/i, `</title>${block}`);
  writeFileSync(path, html, "utf8");
  changed.push(`${file}  →  ${items.map((i) => i.name).join(" > ")}`);
}

console.log(`BreadcrumbList toegevoegd aan ${changed.length} pagina's:`);
changed.forEach((c) => console.log("  + " + c));
console.log(`\nOvergeslagen: ${skipped.length}`);
skipped.forEach((s) => console.log("  - " + s));

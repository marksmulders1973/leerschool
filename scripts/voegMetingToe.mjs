#!/usr/bin/env node
// scripts/voegMetingToe.mjs — groeiplan punt 3 (21 okt 2026).
//
// Ontdekt 21 okt: geen enkele statische pagina in public/ (79 stuks) laadde de
// bezoekersmeting van de hosting. Al het SEO-werk was in onze eigen cijfers dus
// onzichtbaar; alleen Search Console wist het. Dit script zet het meet-script in
// elke indexeerbare pagina (public/*.html en public/leerpad/*.html), vlak voor
// </head>. Idempotent: staat het er al, dan gebeurt er niets. Draait in prebuild,
// dus nieuwe pagina's krijgen het vanzelf. Drukwerk (noindex) blijft ongemeten.

import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PUBLIC = new URL("../public/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const TAG = '<script defer src="/_vercel/insights/script.js"></script>';
const OVERSLAAN = new Set(["google6c89719e47d5ff0b.html", "maak-icoon.html", "index.html"]);

let gezet = 0, al = 0;
for (const map of ["", "leerpad"]) {
  const dir = join(PUBLIC, map);
  for (const f of readdirSync(dir)) {
    if (!f.endsWith(".html") || OVERSLAAN.has(f) || f.startsWith("_")) continue;
    const pad = join(dir, f);
    const s = readFileSync(pad, "utf8");
    if (/name=["']robots["'][^>]*noindex/i.test(s.slice(0, 3000))) continue;
    if (s.includes("/_vercel/insights/script.js")) { al++; continue; }
    if (!/<\/head>/i.test(s)) continue;
    const eol = s.includes("\r\n") ? "\r\n" : "\n";
    writeFileSync(pad, s.replace(/<\/head>/i, `${TAG}${eol}</head>`), "utf8");
    gezet++;
  }
}
console.log(`[meting] ${gezet} pagina's kregen de bezoekersmeting, ${al} hadden hem al`);

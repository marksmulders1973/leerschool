// Visuals-sweep: verzamelt ALLE inline-SVG's uit de leerpaden en rendert ze
// op overzichtsvellen (HTML) voor visuele beoordeling door mens of agent.
// Output: %TEMP%/visuals-sweep/sheet-NN.html + manifest.json (cel → pad/stap).
// Gebruik:  node scripts/visuals-sweep.mjs

import { writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

// index.js importeert ook .jsx (kan Node niet laden) → per bestand importeren.
const SKIP = new Set(["index.js", "subjectMapping.js", "examPathPicker.js", "pathLoaders.js", "questionPathMap.generated.js", "utils.js", "nederlandKaartPaths.js"]);
const dir = new URL("../src/learnPaths/", import.meta.url);
const ALL_LEARN_PATHS = {};
let jsxOvergeslagen = 0;
for (const f of readdirSync(dir)) {
  if (f.endsWith(".jsx")) { jsxOvergeslagen++; continue; }
  if (!f.endsWith(".js") || SKIP.has(f)) continue;
  try {
    const m = await import(new URL(f, dir));
    const pad = m.default;
    if (pad && pad.steps) ALL_LEARN_PATHS[pad.id || f.replace(/\.js$/, "")] = pad;
  } catch { /* helper-bestand zonder pad-export */ }
}
console.log(`geladen: ${Object.keys(ALL_LEARN_PATHS).length} paden (+${jsxOvergeslagen} jsx overgeslagen)`);

const items = [];
const gezien = new Map(); // svg-string → index in items (dedupe)
for (const [padId, pad] of Object.entries(ALL_LEARN_PATHS)) {
  (pad.steps || []).forEach((step, si) => {
    const svgs = [];
    if (step.svg) svgs.push({ waar: "stap", svg: step.svg });
    (step.checks || []).forEach((c, ci) => {
      if (c.svg) svgs.push({ waar: `check ${ci + 1}`, svg: c.svg });
    });
    for (const { waar, svg } of svgs) {
      if (typeof svg !== "string" || !svg.includes("<svg")) continue;
      const bestaand = gezien.get(svg);
      if (bestaand !== undefined) { items[bestaand].dubbel++; continue; }
      gezien.set(svg, items.length);
      items.push({ padId, stap: si + 1, titel: (step.title || "").slice(0, 40), waar, svg, dubbel: 0 });
    }
  });
}

const PER_VEL = 40;
const outDir = join(process.env.TEMP || "/tmp", "visuals-sweep");
mkdirSync(outDir, { recursive: true });
const manifest = [];
let vel = 0;
for (let i = 0; i < items.length; i += PER_VEL) {
  vel++;
  const batch = items.slice(i, i + PER_VEL);
  const cellen = batch.map((it, j) => {
    const nr = `${vel}.${j + 1}`;
    manifest.push({ cel: nr, padId: it.padId, stap: it.stap, titel: it.titel, waar: it.waar, hergebruikt: it.dubbel });
    return `<div style="width:236px;background:#0d1b2e;border-radius:8px;padding:6px">
<div style="color:#ffd54f;font:bold 11px Arial">${nr} · ${it.padId}</div>
<div style="color:#8899aa;font:10px Arial;margin-bottom:4px">stap ${it.stap} ${it.waar} — ${it.titel}</div>
${it.svg}
</div>`;
  }).join("\n");
  writeFileSync(join(outDir, `sheet-${String(vel).padStart(2, "0")}.html`),
    `<html><head><meta charset="utf-8"></head><body style="background:#060e1a;display:flex;flex-wrap:wrap;gap:10px;padding:10px;margin:0">${cellen}</body></html>`);
}
writeFileSync(join(outDir, "manifest.json"), JSON.stringify(manifest, null, 1));
console.log(`✓ ${items.length} unieke SVG's (van ${items.length + items.reduce((a, i) => a + i.dubbel, 0)} totaal) → ${vel} vellen in ${outDir}`);

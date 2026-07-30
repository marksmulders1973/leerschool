// Tijdelijke preview: rendert de unieke SVG's uit het topografie-pad naar HTML.
import { writeFileSync } from "node:fs";
import { join } from "node:path";
const m = await import("../src/learnPaths/topografieNederland.js");
const p = m.default;
const svgs = [...new Set(p.steps.map((s) => s.svg).filter(Boolean))];
const html = `<html><body style="background:#0d1b2e;display:flex;gap:20px;padding:20px;flex-wrap:wrap">${svgs
  .map((s) => `<div style="width:300px">${s}</div>`)
  .join("")}</body></html>`;
writeFileSync(join(process.env.TEMP || "/tmp", "kaart-preview.html"), html);
console.log(`preview geschreven: ${svgs.length} unieke svgs`);

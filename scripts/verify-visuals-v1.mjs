// V1-controle: rendert de SVG's van de 18 door de bio/geschiedenis/taal-fixer
// gewijzigde paden GROOT (320px), zodat label-overlap/clipping leesbaar is.
// Output: %TEMP%/v1-check/check-NN.html
import { writeFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const PADEN = [
  "tachtigjarigeOorlogGeschiedenis", "wereldoorlog1Geschiedenis", "wereldoorlog2Geschiedenis",
  "voortplantingHormonenBiologie", "sterrenPlaneten", "schrijfvaardigheid", "zinsontleding",
  "tekstanalyse", "spelling", "spellingEiIjAuOu", "tafelsPo", "tijdsduurRekenenPo",
  "tabellenGrafieken", "platentektoniekAardrijkskunde", "naamvallenDuits", "meetkundeBouwsels",
  "onregelmatigeWerkwoordenEngels", "fotosyntheseBiologie",
];
const dir = new URL("../src/learnPaths/", import.meta.url);
const items = [];
for (const naam of PADEN) {
  let pad;
  try { pad = (await import(new URL(naam + ".js", dir))).default; } catch { continue; }
  (pad.steps || []).forEach((step, si) => {
    const svgs = [];
    if (step.svg) svgs.push(step.svg);
    (step.checks || []).forEach((c) => { if (c.svg) svgs.push(c.svg); });
    svgs.forEach((svg, k) => {
      if (typeof svg === "string" && svg.includes("<svg"))
        items.push({ label: `${naam} · stap ${si + 1}${k ? " #" + (k + 1) : ""} — ${(step.title || "").slice(0, 32)}`, svg });
    });
  });
}
const outDir = join(process.env.TEMP || "/tmp", "v1-check");
mkdirSync(outDir, { recursive: true });
const PER = 6;
let n = 0;
for (let i = 0; i < items.length; i += PER) {
  n++;
  const cellen = items.slice(i, i + PER).map((it) =>
    `<div style="width:320px;background:#0d1b2e;border-radius:8px;padding:8px">
<div style="color:#ffd54f;font:bold 12px Arial;margin-bottom:4px">${it.label}</div>${it.svg}</div>`).join("\n");
  writeFileSync(join(outDir, `check-${String(n).padStart(2, "0")}.html`),
    `<html><head><meta charset="utf-8"></head><body style="background:#060e1a;display:flex;flex-wrap:wrap;gap:12px;padding:12px;margin:0">${cellen}</body></html>`);
}
console.log(`${items.length} SVG's → ${n} controle-vellen in ${outDir}`);

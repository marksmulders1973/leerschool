// node --import ./scripts/meervragen/reg.mjs scripts/meervragen/verwijder.mjs <lijst.json>
// lijst = [{pathId, stap, q}] — haalt deze (nieuwe) vragen uit het bronbestand. Controleert na afloop door opnieuw te laden.
import fs from "node:fs"; import { createRequire } from "node:module";
import { laadPad, mc, norm } from "./laad.mjs";
const { parse } = createRequire(process.cwd() + "/package.json")("@babel/parser");
const lijst = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const perPad = {}; for (const v of lijst) (perPad[v.pathId] ||= []).push(v);
let totaal = 0;
for (const [id, weg] of Object.entries(perPad)) {
  const { pad, bestand } = await laadPad(id);
  const orig = fs.readFileSync(bestand, "utf8"); let src = orig;
  const ast = parse(src, { sourceType: "module", plugins: ["jsx"] });
  const doel = new Set(weg.map((v) => norm(v.q))); const ranges = [];
  (function loop(n) {
    if (!n || typeof n.type !== "string") return;
    if (n.type === "ObjectProperty" && (n.key.name === "checks" || n.key.value === "checks") && n.value.type === "ArrayExpression")
      for (const e of n.value.elements) if (e?.type === "ObjectExpression") {
        const p = e.properties.find((x) => x.key && (x.key.name === "q" || x.key.value === "q"));
        const q = p?.value.type === "StringLiteral" ? p.value.value : p?.value.type === "TemplateLiteral" ? p.value.quasis.map((x) => x.value.cooked).join("") : null;
        if (q && doel.has(norm(q))) { let end = e.end; const m = src.slice(end).match(/^\s*,/); if (m) end += m[0].length; let start = src.lastIndexOf("\n", e.start) + 1; if (src.slice(start, e.start).trim()) start = e.start; ranges.push([start, end]); }
      }
    for (const k of Object.keys(n)) { if (k === "loc") continue; const v = n[k]; if (Array.isArray(v)) v.forEach(loop); else if (v && typeof v === "object" && v.type) loop(v); }
  })(ast.program);
  if (ranges.length !== weg.length) { console.error(id, `gevonden ${ranges.length} van ${weg.length} — overgeslagen`); continue; }
  ranges.sort((a, b) => b[0] - a[0]).forEach(([a, b]) => { src = src.slice(0, a) + src.slice(b).replace(/^[ \t]*\n/, ""); });
  fs.writeFileSync(bestand, src);
  try {
    const { pad: nieuw } = await laadPad(id, true);
    const voor = pad.steps.reduce((a, s) => a + mc(s).length, 0), na = nieuw.steps.reduce((a, s) => a + mc(s).length, 0);
    if (voor - na !== weg.length) throw new Error(`aantal ${voor}→${na}`);
    const over = new Set(nieuw.steps.flatMap((s) => mc(s).map((c) => norm(c.q))));
    if (weg.some((v) => over.has(norm(v.q)))) throw new Error("vraag staat er nog");
  } catch (e) { fs.writeFileSync(bestand, orig); console.error(id, "TERUGGEZET:", e.message); continue; }
  totaal += weg.length; console.log(`${id}: ${weg.length} verwijderd`);
}
console.log("totaal verwijderd:", totaal);

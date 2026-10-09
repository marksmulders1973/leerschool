// node --import ./scripts/meervragen/reg.mjs … invoeg.mjs <map> <pathId>
// Zet de opgenomen vragen uit <pathId>.besluit.json AAN HET EIND van de checks-lijst van hun stap,
// in het bronbestand. Bestaande vragen blijven ongemoeid. Controleert na afloop door het pad opnieuw te laden.
import fs from "node:fs"; import path from "node:path"; import { createRequire } from "node:module";
import { laadPad, mc, norm } from "./laad.mjs";
const { parse } = createRequire(process.cwd() + "/package.json")("@babel/parser");
const [map, id] = process.argv.slice(2);
const besluit = JSON.parse(fs.readFileSync(path.join(map, `${id}.besluit.json`), "utf8"));
if (!besluit.opgenomen.length) { console.log(id, "niets in te voegen"); process.exit(0); }
const { pad, bestand } = await laadPad(id);
let src = fs.readFileSync(bestand, "utf8");
const ast = parse(src, { sourceType: "module", plugins: ["jsx"] });
// Alle `checks: [ … ]`-arrays in het bestand.
const arrays = [];
(function loop(n) {
  if (!n || typeof n.type !== "string") return;
  if (n.type === "ObjectProperty" && ((n.key.type === "Identifier" && n.key.name === "checks") || (n.key.type === "StringLiteral" && n.key.value === "checks")) && n.value.type === "ArrayExpression") arrays.push(n.value);
  for (const k of Object.keys(n)) { const v = n[k]; if (k === "loc") continue; if (Array.isArray(v)) v.forEach(loop); else if (v && typeof v === "object" && v.type) loop(v); }
})(ast.program);
const qVan = (obj) => { const p = obj.properties?.find((x) => x.key && (x.key.name === "q" || x.key.value === "q")); if (!p) return null; const v = p.value;
  if (v.type === "StringLiteral") return v.value; if (v.type === "TemplateLiteral" && !v.expressions.length) return v.quasis.map((q) => q.value.cooked).join(""); return null; };
const ident = /^[A-Za-z_$][\w$]*$/;
function js(v, ind) {
  const pad2 = ind + "  ";
  if (v === null || v === undefined) return "null";
  if (typeof v === "string" || typeof v === "number" || typeof v === "boolean") return JSON.stringify(v);
  if (Array.isArray(v)) { if (v.every((x) => x === null || typeof x !== "object") && JSON.stringify(v).length < 90) return "[" + v.map((x) => js(x, ind)).join(", ") + "]"; return "[\n" + v.map((x) => pad2 + js(x, pad2)).join(",\n") + ",\n" + ind + "]"; }
  return "{\n" + Object.entries(v).filter(([, x]) => x !== undefined).map(([k, x]) => pad2 + (ident.test(k) ? k : JSON.stringify(k)) + ": " + js(x, pad2)).join(",\n") + ",\n" + ind + "}";
}
const perStap = {};
for (const v of besluit.opgenomen) (perStap[v.stap] ||= []).push(v);
const invoegingen = []; const fouten = [];
for (const [stapS, vragen] of Object.entries(perStap)) {
  const stap = Number(stapS); const checks = pad.steps[stap]?.checks || [];
  const qs = new Set(checks.map((c) => c.q).filter(Boolean));
  const kandidaten = arrays.filter((a) => a.elements.some((e) => e && e.type === "ObjectExpression" && qs.has(qVan(e))));
  // Precies één array dat bij deze stap hoort: zelfde lengte en alle q's gelijk.
  const passend = kandidaten.filter((a) => a.elements.length === checks.length && a.elements.every((e, i) => e && e.type === "ObjectExpression" && (qVan(e) === null || qVan(e) === checks[i].q)));
  if (passend.length !== 1) { fouten.push(`stap ${stap}: ${passend.length} passende checks-arrays (kandidaten ${kandidaten.length})`); continue; }
  const arr = passend[0]; const laatste = arr.elements[arr.elements.length - 1];
  const regelStart = src.lastIndexOf("\n", laatste.start) + 1; const ind = src.slice(regelStart, laatste.start).match(/^\s*/)[0];
  const tussen = src.slice(laatste.end, arr.end - 1); const heeftKomma = /^\s*,/.test(tussen);
  const objs = vragen.map(({ stap: _s, id: _i, ...v }) => ({ q: v.q, options: v.options, answer: 0, wrongHints: v.wrongHints, ...(v.uitlegPad ? { uitlegPad: v.uitlegPad } : {}) }));
  const tekst = (heeftKomma ? "" : ",") + "\n" + ind + "// Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.\n" + objs.map((o) => ind + js(o, ind)).join(",\n") + ",";
  const plek = heeftKomma ? laatste.end + tussen.indexOf(",") + 1 : laatste.end;
  invoegingen.push({ plek, tekst, stap, n: objs.length, qs: objs.map((o) => o.q) });
}
if (fouten.length) { console.error(id, "NIET INGEVOEGD:", fouten.join(" | ")); }
invoegingen.sort((a, b) => b.plek - a.plek).forEach((x) => { src = src.slice(0, x.plek) + x.tekst + src.slice(x.plek); });
const orig = fs.readFileSync(bestand, "utf8");
fs.writeFileSync(bestand, src);
// Controle: opnieuw laden, aantallen en volgorde.
try {
  const { pad: nieuw } = await laadPad(id, true);
  for (const x of invoegingen) {
    const voor = pad.steps[x.stap].checks.length, na = nieuw.steps[x.stap].checks.length;
    const staart = nieuw.steps[x.stap].checks.slice(-x.n).map((c) => c.q);
    if (na !== voor + x.n || staart.some((q, i) => q !== x.qs[i])) throw new Error(`stap ${x.stap} klopt niet na invoegen (${voor}→${na})`);
    if (nieuw.steps[x.stap].checks.slice(0, voor).some((c, i) => JSON.stringify(c) !== JSON.stringify(pad.steps[x.stap].checks[i]))) throw new Error(`stap ${x.stap}: bestaande vragen veranderd`);
  }
  if (nieuw.steps.length !== pad.steps.length) throw new Error("aantal stappen veranderd");
} catch (e) { fs.writeFileSync(bestand, orig); console.error(id, "TERUGGEZET:", e.message); process.exit(1); }
const ingevoegd = invoegingen.reduce((a, x) => a + x.n, 0);
fs.writeFileSync(path.join(map, `${id}.ingevoegd.json`), JSON.stringify({ ingevoegd, fouten, perStap: invoegingen.map((x) => ({ stap: x.stap, n: x.n })) }));
console.log(`${id}: ${ingevoegd} ingevoegd${fouten.length ? " · " + fouten.length + " stap(pen) overgeslagen" : ""}`);

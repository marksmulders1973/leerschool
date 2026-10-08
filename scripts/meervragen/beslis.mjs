// node … beslis.mjs <map> <pathId> → <map>/<pathId>.besluit.json
// Opnemen alleen als: vorm klopt (4 opties, uniek, answer 0, wrongHints[0] leeg, uitlegPad als de stap die kent),
// geen (bijna-)dubbele vraag in het pad, de goede optie valt niet op door lengte,
// én beide nakijkers kozen optie 0 zonder enig bezwaar.
import fs from "node:fs"; import path from "node:path";
import { norm } from "./laad.mjs";
const [map, id, reviewMap = map] = process.argv.slice(2);
const lees = (f, m = map) => JSON.parse(fs.readFileSync(path.join(m, f), "utf8"));
const ctx = lees(`${id}.context.json`), kand = lees(`${id}.kandidaten.json`);
const A = new Map(lees(`${id}.review-A.json`, reviewMap).map((r) => [r.id, r])), B = new Map(lees(`${id}.review-B.json`, reviewMap).map((r) => [r.id, r]));
const bestaand = new Set(ctx.stappen.flatMap((s) => s.bestaandeVragen.map((c) => norm(c.q))));
const opgenomen = [], afgekeurd = [];
kand.forEach((k, i) => {
  const vid = `${id}#${i}`; const red = [];
  const s = ctx.stappen[k.stap];
  if (!s || s.interactief) red.push("stap bestaat niet of is interactief");
  if (!Array.isArray(k.options) || k.options.length !== 4) red.push("niet 4 opties");
  else if (new Set(k.options.map(norm)).size !== 4) red.push("dubbele opties");
  if (k.answer !== 0) red.push("answer ≠ 0");
  if (!k.q || typeof k.q !== "string") red.push("geen vraag");
  if (!Array.isArray(k.wrongHints) || k.wrongHints.length !== 4 || k.wrongHints[0]) red.push("wrongHints-vorm");
  if (s && s.uitlegPadInBestaande * 2 > s.aantalNu && !k.uitlegPad) red.push("uitlegPad ontbreekt");
  if (k.uitlegPad && s) for (const v of s.uitlegPadVelden) if (!(v in k.uitlegPad) && s.uitlegPadInBestaande === s.aantalNu && s.bestaandeVragen.every((c) => c.uitlegPad && v in c.uitlegPad)) red.push("uitlegPad mist veld " + v);
  if (bestaand.has(norm(k.q))) red.push("dubbel met bestaande vraag");
  if (opgenomen.some((o) => norm(o.q) === norm(k.q))) red.push("dubbel met nieuwe vraag");
  if (Array.isArray(k.options) && k.options.length === 4) {
    const L = k.options.map((o) => norm(o).length); const maxAnder = Math.max(...L.slice(1));
    if (L[0] > 1.6 * maxAnder && L[0] - maxAnder > 12) red.push("goede optie veel langer");
    const vq = norm(k.q); const j = norm(k.options[0]);
    if (j.split(" ").length >= 2 && j.length >= 8 && vq.includes(j) && !k.options.slice(1).some((o) => vq.includes(norm(o)))) red.push("antwoord staat in de vraag");
  }
  for (const [naam, R] of [["A", A], ["B", B]]) {
    const r = R.get(vid);
    if (!r) { red.push(`nakijker ${naam} ontbreekt`); continue; }
    if (norm(r.keuze) !== norm(k.options?.[0])) red.push(`nakijker ${naam} koos "${r.keuze}"`);
    if (r.bezwaar && String(r.bezwaar).trim()) red.push(`nakijker ${naam}: ${r.bezwaar}`);
  }
  if (red.length) afgekeurd.push({ id: vid, stap: k.stap, q: k.q, redenen: red });
  else opgenomen.push({ ...k, id: vid });
});
fs.writeFileSync(path.join(map, `${id}.besluit.json`), JSON.stringify({ pathId: id, geschreven: kand.length, opgenomen, afgekeurd }, null, 1));
console.log(`${id}: geschreven ${kand.length} · afgekeurd ${afgekeurd.length} · opgenomen ${opgenomen.length}`);

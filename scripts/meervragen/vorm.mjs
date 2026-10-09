// node … vorm.mjs <map> <pathId> — vormcontrole voor de schrijver (zelfde regels als beslis.mjs, zonder nakijkers).
import fs from "node:fs"; import path from "node:path"; import { norm } from "./laad.mjs";
const [map, id] = process.argv.slice(2);
const ctx = JSON.parse(fs.readFileSync(path.join(map, `${id}.context.json`), "utf8"));
const kand = JSON.parse(fs.readFileSync(path.join(map, `${id}.kandidaten.json`), "utf8"));
const bestaand = new Set(ctx.stappen.flatMap((s) => s.bestaandeVragen.map((c) => norm(c.q))));
const gezien = new Set(); let fout = 0; const perStap = {};
kand.forEach((k, i) => {
  const red = []; const s = ctx.stappen[k.stap];
  if (!s) red.push("onbekende stap"); else if (s.interactief) red.push("interactieve stap");
  if (!Array.isArray(k.options) || k.options.length !== 4) red.push("niet 4 opties"); else if (new Set(k.options.map(norm)).size !== 4) red.push("dubbele opties");
  if (k.answer !== 0) red.push("answer moet 0 zijn");
  if (!Array.isArray(k.wrongHints) || k.wrongHints.length !== 4 || k.wrongHints[0]) red.push("wrongHints: 4 stuks, [0] = null");
  if (s && s.uitlegPadInBestaande * 2 > s.aantalNu && !k.uitlegPad) red.push("uitlegPad ontbreekt");
  if (k.uitlegPad && s) for (const v of s.uitlegPadVelden) if (!(v in k.uitlegPad) && s.bestaandeVragen.every((c) => c.uitlegPad && v in c.uitlegPad)) red.push("uitlegPad mist veld " + v);
  if (s && s.bestaandeVragen.length && s.bestaandeVragen.every((c) => c.steun) && !k.steun) red.push("stap heeft vertaalhulp (steun) bij alle bestaande vragen");
  if (bestaand.has(norm(k.q)) || gezien.has(norm(k.q))) red.push("dubbele vraag"); gezien.add(norm(k.q));
  if (Array.isArray(k.options) && k.options.length === 4) { const L = k.options.map((o) => norm(o).length); const m = Math.max(...L.slice(1)); if (L[0] > 1.6 * m && L[0] - m > 12) red.push("goede optie veel langer dan de rest"); }
  perStap[k.stap] = (perStap[k.stap] || 0) + 1;
  if (red.length) { fout++; console.log(`#${i} (stap ${k.stap}) ${String(k.q).slice(0, 60)} → ${red.join("; ")}`); }
});
for (const [st, n] of Object.entries(perStap)) if (ctx.stappen[st] && n > ctx.stappen[st].nodig) { fout++; console.log(`stap ${st}: ${n} vragen, maar nodig is ${ctx.stappen[st].nodig}`); }
console.log(`${id}: ${kand.length} kandidaten · ${fout} vormfouten`);

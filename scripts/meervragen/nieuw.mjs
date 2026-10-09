// node --import ./scripts/meervragen/reg.mjs scripts/meervragen/nieuw.mjs <mainRoot> <uit.json> [bestand1.js …]
// Verzamelt alle meerkeuzevragen die op de branch staan maar niet op <mainRoot> (zelfde pad, zelfde stap).
import fs from "node:fs"; import path from "node:path"; import { pathToFileURL } from "node:url";
import { manifest, mc, norm, ROOT } from "./laad.mjs";
const [mainRoot, uit, ...bestanden] = process.argv.slice(2);
const filter = bestanden.length ? new Set(bestanden.map((b) => path.basename(b))) : null;
const out = [];
for (const e of manifest()) {
  if (filter && !filter.has(path.basename(e.file))) continue;
  const nieuwP = (await import(pathToFileURL(path.join(ROOT, e.file)).href)).default;
  const mf = path.join(mainRoot, "src/learnPaths", e.file);
  const oudP = fs.existsSync(mf) ? (await import(pathToFileURL(mf).href)).default : { steps: [] };
  nieuwP.steps.forEach((s, i) => {
    const oud = new Set(mc(oudP.steps?.find((o) => o.title === s.title) || oudP.steps?.[i]).map((c) => norm(c.q)));
    for (const c of mc(s)) if (!oud.has(norm(c.q))) out.push({ pathId: e.id, level: e.level, stap: i, stapTitel: s.title, vanafGroep: s.vanafGroep ?? null, q: c.q, options: c.options, answer: c.answer, wrongHints: c.wrongHints, uitlegPad: c.uitlegPad });
  });
}
fs.writeFileSync(uit, JSON.stringify(out, null, 1));
console.log("nieuw:", out.length);

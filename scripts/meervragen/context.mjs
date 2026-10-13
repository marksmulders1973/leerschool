// node --import <reg> scripts/meervragen/context.mjs <pathId> <uitmap>
// Schrijft <uitmap>/<pathId>.context.json voor de schrijver.
import fs from "node:fs"; import path from "node:path";
import { laadPad, mc } from "./laad.mjs";
const [id, uit] = process.argv.slice(2);
const { pad, entry } = await laadPad(id);
const stappen = pad.steps.map((s, i) => {
  const checks = mc(s);
  const nodig = s.interactiveComponent ? 0 : Math.max(0, 10 - checks.length);
  return {
    stap: i, titel: s.title, vanafGroep: s.vanafGroep ?? null, interactief: !!s.interactiveComponent,
    heeftSvg: !!s.svg, uitleg: s.explanation || "", leesTekst: s.leesTekst || null,
    aantalNu: checks.length, nodig,
    uitlegPadInBestaande: checks.filter((c) => c.uitlegPad).length,
    uitlegPadVelden: [...new Set(checks.flatMap((c) => (c.uitlegPad ? Object.keys(c.uitlegPad) : [])))],
    bestaandeVragen: checks,
  };
});
const ctx = { pathId: id, titel: pad.title, level: entry.level, subject: entry.subject, intro: pad.intro || "", stappen };
fs.mkdirSync(uit, { recursive: true });
fs.writeFileSync(path.join(uit, `${id}.context.json`), JSON.stringify(ctx, null, 1));
console.log(id, entry.level, "nodig:", stappen.reduce((a, s) => a + s.nodig, 0), stappen.map((s) => s.nodig).join(","));

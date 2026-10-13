// Controle na een tekstronde (weggevers VO, 13 okt 2026): vergelijkt elk gewijzigd leerpad met main.
// Per check moeten `answer`, `q` en het aantal opties gelijk blijven; het aantal stappen en checks ook.
// Meldt daarnaast per bestand hoeveel checks er inhoudelijk veranderd zijn.
// Gebruik: node scripts/audit/vergelijk-met-main.mjs [basis-ref] [--alleen a.js,b.js]   (standaard origin/main)
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { register } from "node:module";
register(new URL("./jsx-hook.mjs", import.meta.url).href);

const args = process.argv.slice(2);
const alleenIdx = args.indexOf("--alleen");
const alleen = alleenIdx >= 0 ? args.splice(alleenIdx, 2)[1].split(",").map((x) => path.basename(x)) : null;
const basis = args[0] || "origin/main";
const gewijzigd = execSync(`git diff --name-only ${basis} -- src/learnPaths`, { encoding: "utf8" })
  .split("\n").filter((f) => /\.jsx?$/.test(f) && !/\.test\.jsx?$/.test(f) && fs.existsSync(f) && (!alleen || alleen.includes(path.basename(f))));
let afwijkingen = 0, checksAnders = 0;
for (const f of gewijzigd) {
  const tmp = path.join(path.dirname(f), `.__basis_${path.basename(f)}`);
  fs.writeFileSync(tmp, execSync(`git show ${basis}:${f}`, { encoding: "utf8", maxBuffer: 64 << 20 }));
  let oud, nieuw;
  try {
    oud = (await import(pathToFileURL(path.resolve(tmp)).href)).default;
    nieuw = (await import(pathToFileURL(path.resolve(f)).href)).default;
  } catch (e) { console.log(`✗ ${f}: laadt niet (${e.message})`); afwijkingen++; continue; }
  finally { fs.rmSync(tmp, { force: true }); }
  const meld = (t) => { console.log(`✗ ${f}: ${t}`); afwijkingen++; };
  const so = oud?.steps || [], sn = nieuw?.steps || [];
  if (so.length !== sn.length) { meld(`aantal stappen ${so.length} → ${sn.length}`); continue; }
  let anders = 0;
  so.forEach((s, si) => {
    const co = s.checks || [], cn = sn[si].checks || [];
    if (co.length !== cn.length) return meld(`stap ${si + 1}: aantal checks ${co.length} → ${cn.length}`);
    co.forEach((c, ci) => {
      const n = cn[ci], waar = `stap ${si + 1} vraag ${ci + 1}`;
      if (c.answer !== n.answer) meld(`${waar}: answer ${c.answer} → ${n.answer}`);
      if (c.q !== n.q) meld(`${waar}: q gewijzigd`);
      if ((c.options || []).length !== (n.options || []).length) meld(`${waar}: aantal opties ${(c.options || []).length} → ${(n.options || []).length}`);
      if (Array.isArray(c.options) && typeof c.answer === "number" && c.options[c.answer] !== n.options?.[c.answer] && /^examen/.test(path.basename(f))) meld(`${waar}: optie gewijzigd in examenpad`);
      if (/^examen/.test(path.basename(f)) && JSON.stringify(c.options) !== JSON.stringify(n.options)) meld(`${waar}: opties gewijzigd in examenpad`);
      if (/^examen/.test(path.basename(f)) && c.examenBron !== n.examenBron) meld(`${waar}: examenBron gewijzigd`);
      if (JSON.stringify(c) !== JSON.stringify(n)) anders++;
    });
  });
  checksAnders += anders;
  console.log(`  ${f}: ${anders} checks gewijzigd`);
}
console.log(`\n${gewijzigd.length} bestanden · ${checksAnders} checks gewijzigd · ${afwijkingen} afwijkingen`);
process.exit(afwijkingen ? 1 : 0);

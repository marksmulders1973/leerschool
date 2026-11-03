// Scan (3 nov 2026): eerste hulpstap (niveaus.basis) die (bijna) alleen het antwoord geeft — grootste
// twijfel-categorie uit de eindmetingen. Loopt alle basisschoolpaden (zelfde filter als steekproef-po) af.
// Gebruik: node scripts/audit/basis-scan.mjs [--json uit.json] [--alles  = ook niet-PO-paden, zonder examens]
import fs from "node:fs"; import path from "node:path"; import { pathToFileURL } from "node:url"; import { register } from "node:module";
register(new URL("./jsx-hook.mjs", import.meta.url).href);
const lp = path.resolve("src/learnPaths");
const manifest = JSON.parse(fs.readFileSync(path.join(lp, "pathManifest.generated.json"), "utf8"));
const isPo = (p) => /-po$|groep|g[3-8]\b|kleuters|doorstroomtoets|cito|nieuwkomers/i.test(p.id) || /^(groep|po)/i.test(String(p.level || "")) ;
const norm = (s) => String(s ?? "").toLowerCase().replace(/[*_`"'.,!?;:()€%]/g, " ").replace(/\s+/g, " ").trim();
const ALLES = process.argv.includes("--alles");
const out = []; let paden = 0, vragen = 0;
for (const e of manifest) {
  if ((!ALLES && !isPo(e)) || /^examen-/.test(e.id)) continue;
  let pad; try { pad = (await import(pathToFileURL(path.join(lp, e.file)).href)).default; } catch { continue; }
  paden++;
  (pad.steps || []).forEach((s, si) => (s.checks || []).forEach((c, ci) => {
    if (c.disabled || !Array.isArray(c.options) || typeof c.answer !== "number") return;
    vragen++;
    const basis = c.niveaus?.basis ?? c.uitlegPad?.niveaus?.basis; if (!basis) return;
    const b = norm(basis), a = norm(c.options[c.answer]);
    if (!a) return;
    const kort = b.split(" ").length <= 12;
    const bevat = b === a || (a.length >= 2 && b.includes(a) && kort) || (b.length <= a.length + 4 && a.includes(b) && b.length >= 3);
    if (bevat) out.push({ pad: e.id, file: e.file.replace(/^\.\//, ""), waar: `${e.id} stap ${si + 1} vraag ${ci + 1}`, antwoord: c.options[c.answer], basis: String(basis).slice(0, 120) });
  }));
}
const perFile = {}; for (const o of out) (perFile[o.file] ||= []).push(o);
const i = process.argv.indexOf("--json"); if (i > 0) fs.writeFileSync(process.argv[i + 1], JSON.stringify({ paden, vragen, treffers: out.length, perFile }, null, 1));
console.log(`${paden} basisschoolpaden · ${vragen} vragen · ${out.length} basis-hulpstappen die (bijna) alleen het antwoord geven · ${Object.keys(perFile).length} bestanden`);
console.log(Object.entries(perFile).sort((a, b) => b[1].length - a[1].length).slice(0, 15).map(([f, l]) => `${l.length}\t${f}`).join("\n"));

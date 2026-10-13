// Maakt per gewijzigde check één regel "oud → nieuw" (opties, hints, uitleg, brontekst) t.o.v. een basis-ref.
// Gebruik: node scripts/audit/wijzigingen-lijst.mjs [basis-ref=origin/main] > uit.md
import { execSync } from "node:child_process"; import fs from "node:fs"; import path from "node:path";
import { pathToFileURL } from "node:url"; import { register } from "node:module";
register(new URL("./jsx-hook.mjs", import.meta.url).href);
const basis = process.argv[2] || "origin/main";
const man = JSON.parse(fs.readFileSync("src/learnPaths/pathManifest.generated.json", "utf8"));
const idVan = Object.fromEntries(man.map((e) => [path.basename(e.file), e.id]));
const files = execSync(`git diff --name-only ${basis} -- src/learnPaths`, { encoding: "utf8" }).split("\n").filter((f) => /\.jsx?$/.test(f) && !/\.test\./.test(f) && fs.existsSync(f)).sort();
const kort = (s) => { const t = String(s ?? "").replace(/\s+/g, " ").trim(); return t.length > 160 ? t.slice(0, 157) + "…" : t; };
let totaal = 0;
for (const f of files) {
  const tmp = path.join(path.dirname(f), `.__lijst_${path.basename(f)}`);
  fs.writeFileSync(tmp, execSync(`git show ${basis}:${f}`, { encoding: "utf8", maxBuffer: 1 << 26 }));
  const oud = (await import(pathToFileURL(path.resolve(tmp)).href)).default; fs.rmSync(tmp);
  const nieuw = (await import(pathToFileURL(path.resolve(f)).href)).default;
  const regels = [];
  nieuw.steps.forEach((s, si) => (s.checks || []).forEach((c, ci) => {
    const o = oud.steps[si]?.checks?.[ci]; if (!o || JSON.stringify(o) === JSON.stringify(c)) return;
    const d = [];
    (c.options || []).forEach((x, i) => { if (o.options?.[i] !== x) d.push(`optie ${i + 1}${i === c.answer ? " (goed)" : ""}: "${kort(o.options?.[i])}" → "${kort(x)}"`); });
    (c.wrongHints || []).forEach((x, i) => { if ((o.wrongHints?.[i] ?? null) !== (x ?? null)) d.push(`hint ${i + 1}: "${kort(o.wrongHints?.[i])}" → "${kort(x)}"`); });
    if ((o.hint ?? "") !== (c.hint ?? "")) d.push(`hint: "${kort(o.hint)}" → "${kort(c.hint)}"`);
    if (JSON.stringify(o.explanation) !== JSON.stringify(c.explanation)) d.push("uitleg aangepast");
    if (JSON.stringify(o.uitlegPad) !== JSON.stringify(c.uitlegPad)) d.push("uitlegPad aangepast");
    for (const k of ["bronTekst", "bron"]) if (JSON.stringify(o[k]) !== JSON.stringify(c[k])) d.push(`${k}: door ons toegevoegde aantekening weggehaald`);
    if (d.length) regels.push(`- stap ${si + 1} vraag ${ci + 1} · ${d.join(" · ")}`);
  }));
  if (JSON.stringify(oud.steps.map((s) => s.bronTekst)) !== JSON.stringify(nieuw.steps.map((s) => s.bronTekst))) regels.push("- (brontekst op stapniveau aangepast: aantekening weggehaald)");
  if (!regels.length) continue;
  totaal += regels.length;
  console.log(`\n#### ${idVan[path.basename(f)] ?? f} (${path.basename(f)}) — ${regels.length}\n`);
  console.log(regels.join("\n"));
}
console.error(`${files.length} bestanden, ${totaal} regels`);

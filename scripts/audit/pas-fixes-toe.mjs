// Past de JSON-herstellijsten van de nakijkers toe (audit ronde 2, 5 okt 2026).
// Meerdere nakijkers werken in hetzelfde bestand (sampleQuestions.js, topics.js), dus zij
// schrijven {waar, oud, nieuw, reden} naar docs/audit/fixes-*.json en dit script vervangt.
// Veilig: `oud` moet precies ÉÉN keer in het bestand voorkomen; anders overslaan + melden.
// Gebruik: node scripts/audit/pas-fixes-toe.mjs            (alles)
//          node scripts/audit/pas-fixes-toe.mjs sq-taal    (alleen docs/audit/fixes-sq-taal.json)
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const DOEL = { "sq-vo-": "src/data/sampleQuestions.js", "sq-": "src/data/sampleQuestions.js", "topics-": "src/data/topics.js", "tb-": "src/data/textbookQuestions.js" };
const map = join(root, "docs", "audit");
const alleen = process.argv[2] || null;
const lijsten = readdirSync(map).filter((f) => f.startsWith("fixes-") && f.endsWith(".json") && (!alleen || f === `fixes-${alleen}.json`));

let totaalOk = 0, totaalMis = 0;
for (const naam of lijsten) {
  const sleutel = Object.keys(DOEL).find((k) => naam.startsWith(`fixes-${k}`));
  if (!sleutel) { console.log(`⚠️  ${naam}: onbekend doelbestand, overgeslagen`); continue; }
  const doel = join(root, DOEL[sleutel]);
  let fixes;
  try { fixes = JSON.parse(readFileSync(join(map, naam), "utf8")); } catch (e) { console.log(`⚠️  ${naam}: geen geldige JSON (${e.message})`); continue; }
  if (!Array.isArray(fixes)) { console.log(`⚠️  ${naam}: geen array`); continue; }
  let tekst = readFileSync(doel, "utf8");
  const mis = [];
  let ok = 0;
  for (const f of fixes) {
    if (!f || typeof f.oud !== "string" || typeof f.nieuw !== "string" || !f.oud) { mis.push(`${f?.waar ?? "?"}: ongeldige regel`); continue; }
    const n = tekst.split(f.oud).length - 1;
    if (n !== 1) { mis.push(`${f.waar}: 'oud' komt ${n}× voor (moet 1×) — ${f.oud.slice(0, 70).replace(/\n/g, "⏎")}`); continue; }
    tekst = tekst.replace(f.oud, () => f.nieuw);
    ok++;
  }
  if (ok) writeFileSync(doel, tekst);
  totaalOk += ok; totaalMis += mis.length;
  console.log(`${naam} → ${DOEL[sleutel]}: ${ok} toegepast, ${mis.length} overgeslagen`);
  for (const m of mis) console.log("   ✗", m);
}
console.log(`\nTOTAAL: ${totaalOk} toegepast, ${totaalMis} overgeslagen. Daarna: node --check + npm run audit:vragen + build.`);
if (!existsSync(join(root, "src", "data", "sampleQuestions.js"))) process.exit(1);

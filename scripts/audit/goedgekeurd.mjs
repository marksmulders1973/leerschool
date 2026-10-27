// Register van goedgekeurde vragen (Mark 27 okt 2026: "alles wat nu goed is, heb je dat onthouden, zodat we
// niet steeds dezelfde opgaves proberen te herstellen?").
//
// docs/audit/goedgekeurd.json = lijst van { waar, hash, oordeel, bron, datum, reden? }.
//   waar  = "<pad-id> stap X vraag Y" (zoals steekproef/oordeel-bestanden), hash = sha1 van [q, options, wrongHints, niveaus].
//   Een vraag geldt als goedgekeurd zolang haar hash nog klopt; verandert de vraag, dan vervalt de goedkeuring vanzelf.
//
// Gebruik:
//   node scripts/audit/goedgekeurd.mjs toevoegen <oordeel.json> <deel.json> <bron>   (oordeel goed/twijfel → register; deel.json levert q/options voor de hash)
//   node scripts/audit/goedgekeurd.mjs toevoegen-huidig <oordeel.json> <bron>        (zoals boven, maar hash uit de HUIDIGE bron van het pad)
//   node scripts/audit/goedgekeurd.mjs status                                           (hoeveel goedgekeurd, hoeveel nog geldig)
//   node scripts/audit/goedgekeurd.mjs filter <lijst.json> > rest.json                 (laat alleen vragen over die NIET (meer) goedgekeurd zijn)
//   In code: import { laadRegister, isGoedgekeurd, hashVan } from "./goedgekeurd.mjs".
import fs from "node:fs"; import path from "node:path"; import crypto from "node:crypto";
import { pathToFileURL } from "node:url"; import { register } from "node:module";
register(new URL("./jsx-hook.mjs", import.meta.url).href);

const REG = path.resolve("docs/audit/goedgekeurd.json");
export const hashVan = (c) => crypto.createHash("sha1").update(JSON.stringify([c.q, c.options, c.wrongHints ?? null, c.niveaus ?? c.uitlegPad?.niveaus ?? null])).digest("hex").slice(0, 16);
export function laadRegister() { try { return JSON.parse(fs.readFileSync(REG, "utf8")); } catch { return []; } }
function bewaar(lijst) { lijst.sort((a, b) => a.waar.localeCompare(b.waar)); fs.writeFileSync(REG, JSON.stringify(lijst, null, 1) + "\n"); }
export function isGoedgekeurd(reg, waar, hash) { return reg.some((r) => r.waar === waar && r.hash === hash); }

async function huidigeVragen() {
  const lp = path.resolve("src/learnPaths"); const man = JSON.parse(fs.readFileSync(path.join(lp, "pathManifest.generated.json"), "utf8")); const m = new Map();
  for (const e of man) { const p = (await import(pathToFileURL(path.join(lp, e.file)).href)).default;
    (p?.steps || []).forEach((s, si) => (s.checks || []).forEach((c, ci) => { if (c.options) m.set(`${e.id} stap ${si + 1} vraag ${ci + 1}`, c); })); }
  return m;
}

const [cmd, a1, a2, a3] = process.argv.slice(2);
if (cmd === "toevoegen" || cmd === "toevoegen-huidig") {
  const oordelen = JSON.parse(fs.readFileSync(a1, "utf8")); const reg = laadRegister(); const datum = new Date().toISOString().slice(0, 10);
  let bronVragen; if (cmd === "toevoegen") { bronVragen = new Map(JSON.parse(fs.readFileSync(a2, "utf8")).map((d) => [d.waar, d])); } else { bronVragen = await huidigeVragen(); }
  const bron = cmd === "toevoegen" ? a3 : a2; let n = 0;
  for (const o of oordelen) {
    if (!["goed", "twijfel"].includes(o.oordeel)) continue; const c = bronVragen.get(o.waar); if (!c) continue; const h = hashVan(c);
    const i = reg.findIndex((r) => r.waar === o.waar); const rij = { waar: o.waar, hash: h, oordeel: o.oordeel, bron, datum, ...(o.oordeel === "twijfel" && o.reden ? { reden: String(o.reden).slice(0, 200) } : {}) };
    if (i >= 0) reg[i] = rij; else reg.push(rij); n++;
  }
  bewaar(reg); console.log(`${n} toegevoegd/bijgewerkt uit ${path.basename(a1)} (bron ${bron}); register ${reg.length}`);
} else if (cmd === "status") {
  const reg = laadRegister(); const cur = await huidigeVragen(); let geldig = 0, verlopen = 0, weg = 0;
  for (const r of reg) { const c = cur.get(r.waar); if (!c) weg++; else if (hashVan(c) === r.hash) geldig++; else verlopen++; }
  console.log(`register ${reg.length}: ${geldig} nog geldig · ${verlopen} sindsdien gewijzigd (goedkeuring vervallen) · ${weg} vraag bestaat niet meer`);
} else if (cmd === "filter") {
  const reg = laadRegister(); const lijst = JSON.parse(fs.readFileSync(a1, "utf8"));
  const rest = lijst.filter((d) => !isGoedgekeurd(reg, d.waar, hashVan(d))); console.error(`${lijst.length} → ${rest.length} niet goedgekeurd`); process.stdout.write(JSON.stringify(rest, null, 1));
} else if (cmd) { console.log("onbekend commando"); }

// Vervolgsets (Mark 29 okt 2026, "de eerste 20 deed je vorige keer, nu vraag 20 tot 60 ofzo en dan door").
//
// Na de startset (de eerste 20 vragen per groep × vak, startsetsData.js) krijgt een kind via "Oefen nu"
// een pad van dat vak voor zijn groep (padenVoorVak: per dag een ander pad, 10 vragen geschud, ongezien
// eerst). Welke vraag precies als 21e komt is dus toeval; dit script legt een VASTE volgorde vast om in
// batches na te kijken: alle paden van het vak voor de groep (alfabetisch op titel, zoals het vakscherm),
// om en om per stap (eerst stap 1 van elk pad, dan stap 2, …), in bestandsvolgorde, zonder de startset-
// vragen. Positie 1-40 van die lijst = "vraag 21-60", 41-80 = "vraag 61-100", enz.
//
// Gebruik: node scripts/audit/vervolg-dump.mjs --van 21 --tot 60 [--map docs/audit/vervolg/B1]
// Schrijft per set <map>/VERVOLG-<groep>-<vak>-A.md (blind: alleen vraag + opties) en -B.md (met antwoord,
// hints, uitleg), plus <map>/lijst.json (alles) en <map>/per-bestand.json (gegroepeerd per bronbestand,
// voor de verdeling over nakijkers). Vragen die al in docs/audit/goedgekeurd.json staan (hash klopt nog)
// worden gemarkeerd met ✔ en hoeven niet opnieuw.
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pathToFileURL } from "node:url";
import { register } from "node:module";
register(new URL("./jsx-hook.mjs", import.meta.url).href);

const arg = (k, d) => { const i = process.argv.indexOf(k); return i >= 0 ? process.argv[i + 1] : d; };
const VAN = Number(arg("--van", 21)), TOT = Number(arg("--tot", 60));
const MAP = path.resolve(arg("--map", `docs/audit/vervolg/${VAN}-${TOT}`));
fs.mkdirSync(MAP, { recursive: true });

const lp = path.resolve("src/learnPaths");
const manifest = JSON.parse(fs.readFileSync(path.join(lp, "pathManifest.generated.json"), "utf8"));
const { STARTSETS } = await import(pathToFileURL(path.resolve("src/features/learn/startsetsData.js")).href);
const register_ = (() => { try { return JSON.parse(fs.readFileSync(path.resolve("docs/audit/goedgekeurd.json"), "utf8")); } catch { return []; } })();
const hashVan = (c) => crypto.createHash("sha1").update(JSON.stringify([c.q, c.options, c.wrongHints ?? null, c.niveaus ?? c.uitlegPad?.niveaus ?? null])).digest("hex").slice(0, 16);
const isGoedgekeurd = (waar, h) => register_.some((r) => r.waar === waar && r.hash === h);

function padBijGroep(level, groep) {
  const m = String(level || "").toLowerCase().match(/groep\s*(\d)(?:\s*-\s*(\d))?/);
  if (!m) return false;
  const lo = Number(m[1]), hi = Number(m[2] || m[1]);
  return groep >= lo && groep <= hi;
}
const padCache = new Map();
async function laadPad(id) {
  if (padCache.has(id)) return padCache.get(id);
  const e = manifest.find((p) => p.id === id);
  let pad = null;
  try { pad = e ? (await import(pathToFileURL(path.join(lp, e.file)).href)).default : null; } catch (err) { console.error(`kon ${id} niet laden: ${err.message}`); }
  padCache.set(id, pad ? { pad, file: e.file.replace(/^\.\//, ""), title: e.title } : null);
  return padCache.get(id);
}
const geldig = (c, groep) => c && !c.disabled && Array.isArray(c.options) && c.options.length >= 2 && typeof c.answer === "number" && !(groep && Number(c.vanafGroep) > groep);
const stapGeldig = (s, groep) => !(groep && s && Number(s.vanafGroep) > groep);
const plat = (t) => String(t ?? "").replace(/\s*\n\s*/g, " ").trim();

const lijst = [];
const perBestand = {};
const overzicht = [];
// Startset-vragen van ÁLLE sets (zelfde selectie als startsets.js: per item de eerste n geldige vragen van die
// stap). Wereldwijd uitsluiten: een pad als getallen-tot-20-po is startset voor groep 3 én vervolg voor groep 5;
// die vragen zijn al nagekeken en de startset moet stabiel blijven (les golf 1, 30 okt 2026).
const startset = new Set();
for (const [sleutel, set] of Object.entries(STARTSETS)) {
  const groep = Number(sleutel.split("|")[0]);
  for (const it of set.items) {
    const L = await laadPad(it.pad); if (!L) continue;
    const s = (L.pad.steps || [])[it.stap - 1]; if (!s) continue;
    const valide = (s.checks || []).map((c, ci) => ({ c, ci })).filter(({ c }) => geldig(c, groep));
    valide.slice(0, it.n).forEach(({ ci }) => startset.add(`${it.pad}|${it.stap - 1}|${ci}`));
  }
}
for (const [sleutel, set] of Object.entries(STARTSETS)) {
  const [g, vak] = sleutel.split("|");
  const groep = Number(g);
  const subj = vak === "wiskunde" ? "rekenen" : vak;
  const paden = manifest.filter((p) => p.subject === subj && padBijGroep(p.level, groep) && !/-nieuwkomers$/.test(p.id))
    .sort((a, b) => String(a.title).localeCompare(String(b.title), "nl"));
  const geladen = [];
  for (const p of paden) { const L = await laadPad(p.id); if (L) geladen.push({ id: p.id, ...L }); }
  const maxStappen = Math.max(0, ...geladen.map((L) => (L.pad.steps || []).length));
  const volgorde = [];
  for (let si = 0; si < maxStappen; si++) {
    for (const L of geladen) {
      const s = (L.pad.steps || [])[si]; if (!s || !stapGeldig(s, groep)) continue;
      (s.checks || []).forEach((c, ci) => {
        if (!geldig(c, groep) || startset.has(`${L.id}|${si}|${ci}`)) return;
        volgorde.push({ pad: L.id, padTitel: L.title, file: `src/learnPaths/${L.file}`, si, ci, s, c });
      });
    }
  }
  const selectie = volgorde.slice(VAN - 1, TOT);
  const regelsA = [`# Vervolgset ${set.titel} — vraag ${VAN} t/m ${TOT} (deel A: blind, alleen vraag + opties)`, "", `Gegenereerd door scripts/audit/vervolg-dump.mjs op ${new Date().toISOString().slice(0, 10)}. Na de startset van 20 (STARTSET-${g}-${vak}.md). Beschikbaar na de startset: ${volgorde.length} vragen in ${geladen.length} paden; hier ${selectie.length}.`, ""];
  const regelsB = [`# Vervolgset ${set.titel} — vraag ${VAN} t/m ${TOT} (deel B: met antwoord, hints en uitleg)`, "", `Zelfde vragen als deel A. ✔ = stond al als goed/twijfel in docs/audit/goedgekeurd.json (hash klopt nog).`, ""];
  selectie.forEach((v, i) => {
    const nr = VAN + i;
    const waar = `${v.pad} stap ${v.si + 1} vraag ${v.ci + 1}`;
    const h = hashVan(v.c);
    const goed = isGoedgekeurd(waar, h);
    const kop = `## ${nr}. ${v.padTitel} (${waar})${v.c.svg || v.s.svg && /plaatje|afbeelding|figuur|tekening|hieronder|hierboven/i.test(String(v.c.q)) ? " 🖼️ met plaatje" : ""}${goed ? " ✔ al goedgekeurd" : ""}`;
    const leesTekst = v.s.leesTekst ? plat(v.s.leesTekst) : null;
    regelsA.push(kop);
    if (leesTekst) regelsA.push(`> Leestekst bij de stap: ${leesTekst}`, "");
    regelsA.push(`Vraag: ${plat(v.c.q)}`);
    v.c.options.forEach((o, k) => regelsA.push(`- ${String.fromCharCode(65 + k)}. ${plat(o)}`));
    regelsA.push("");
    regelsB.push(kop, `_Bestand: ${v.file} · stap-titel: ${plat(v.s.title)}_`);
    if (leesTekst) regelsB.push(`> Leestekst bij de stap: ${leesTekst}`, "");
    regelsB.push(`Vraag: ${plat(v.c.q)}`);
    v.c.options.forEach((o, k) => regelsB.push(`- ${k === v.c.answer ? "✅" : "▫️"} ${String.fromCharCode(65 + k)}. ${plat(o)}`));
    if (Array.isArray(v.c.wrongHints)) regelsB.push(`wrongHints: ${JSON.stringify(v.c.wrongHints.map((x) => (x == null ? null : plat(x))))}`);
    const niv = v.c.niveaus ?? v.c.uitlegPad?.niveaus;
    if (niv) regelsB.push(`niveaus: ${JSON.stringify(niv)}`);
    if (v.c.explanation) regelsB.push(`explanation: ${plat(v.c.explanation).slice(0, 400)}`);
    const uitleg = plat(v.s.explanation).slice(0, 700);
    if (uitleg) regelsB.push(`stap-uitleg (ingekort): ${uitleg}${plat(v.s.explanation).length > 700 ? " …" : ""}`);
    regelsB.push("");
    const item = { set: sleutel, nr, waar, file: v.file, pad: v.pad, stap: v.si + 1, vraag: v.ci + 1, goedgekeurd: goed, hash: h, q: v.c.q, options: v.c.options, answer: v.c.answer, wrongHints: v.c.wrongHints ?? null, niveaus: niv ?? null, leesTekst: leesTekst || undefined };
    lijst.push(item);
    (perBestand[v.file] ||= []).push(item);
  });
  fs.writeFileSync(path.join(MAP, `VERVOLG-${g}-${vak}-A.md`), regelsA.join("\n") + "\n");
  fs.writeFileSync(path.join(MAP, `VERVOLG-${g}-${vak}-B.md`), regelsB.join("\n") + "\n");
  overzicht.push({ set: sleutel, paden: geladen.length, beschikbaar: volgorde.length, geselecteerd: selectie.length, alGoedgekeurd: selectie.filter((v) => isGoedgekeurd(`${v.pad} stap ${v.si + 1} vraag ${v.ci + 1}`, hashVan(v.c))).length });
}
fs.writeFileSync(path.join(MAP, "lijst.json"), JSON.stringify(lijst, null, 1) + "\n");
fs.writeFileSync(path.join(MAP, "per-bestand.json"), JSON.stringify(Object.fromEntries(Object.entries(perBestand).map(([f, items]) => [f, items.map((i) => ({ set: i.set, nr: i.nr, waar: i.waar, goedgekeurd: i.goedgekeurd }))])), null, 1) + "\n");
console.log(`set\tpaden\tbeschikbaar\tgeselecteerd\tal goedgekeurd`);
for (const o of overzicht) console.log(`${o.set}\t${o.paden}\t${o.beschikbaar}\t${o.geselecteerd}\t${o.alGoedgekeurd}`);
console.log(`\nTOTAAL ${lijst.length} vragen (${lijst.filter((i) => i.goedgekeurd).length} al goedgekeurd) in ${Object.keys(perBestand).length} bestanden → ${path.relative(process.cwd(), MAP)}`);

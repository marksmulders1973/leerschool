// LOWAN-schooltaalwoordenlijst: hoeveel van de minimumwoorden (groep 1) komen voor in het
// nieuwkomers-pakket? (Mark 2 okt 2026: "doe punt 2, de LOWAN-woordenlijst dekking".)
// Bron lijst: LOWAN, "Schooltaalwoordenlijst nieuwkomers kleuters" (juli 2023, mede gebaseerd op
// de BAK-lijst), minimumwoorden groep 1. Handmatig overgenomen per categorie.
// "Komt voor" = het woord (of een vervoeging) staat in een vraag, antwoord, uitleg of woordkaart
// van een nieuwkomers-onderdeel. Dat is nog niet hetzelfde als "wordt gericht geoefend".
// Gebruik: node scripts/lowanDekking.mjs  → schrijft docs/LOWAN-DEKKING.md
import fs from "node:fs";
import path from "node:path";

const LIJST = {
  "Instructie": "aanwijzen bouwen dat deze die dit doen kijken klaar klappen kleien kleuren knippen krassen lezen leggen neerleggen neerzetten netjes omdraaien opruimen proberen puzzelen samen scheuren schrijven spelen stempelen stoppen tafel tekenen verhaal voorlezen vouwen werk werken wijzen zetten",
  "Gesprek": "bedenken bedoelen begrijpen denken fluisteren eerst daarna toen eigenlijk klopt idee ja kletsen knikken leren makkelijk moeten nadenken misschien moeilijk nee noemen of omdat opletten praten roepen schreeuwen snappen vergeten vertellen vinden vragen waar want weten zeker zomaar wel zeggen zo",
  "Routines": "beurt afspreken beginnen boek bord dag gisteren kiezen kring middag morgen opsteken plek stoel tellen vandaag vinger week zitten buitenspelen",
  "Overig": "bel bijvoorbeeld binnen buiten blok bouwhoek duim gang geen groep hand hoeven helpen kapstok kast klas kraan krijtje kunnen kwast letter lijm lijn mogen niet niets nodig openmaken papier poppenhoek potlood schaar school willen woord zullen",
  "Rekentaal": "een twee drie vier vijf zes zeven acht negen tien eerste achter blauw bruin geel grijs groen kleur paars rood roze wit zwart cirkel driehoek dicht open dichtbij ver dik dun erbij erin erop eruit evenveel groot klein half heel hard zacht heleboel hetzelfde hoeveel hoog boven in naast onder op tussen uit jong oud klok kort lang langzaam leeg vol passen rij rond veel meer weinig minder zoveel",
  "Emotie": "alleen bang blij boos durven eng gelukkig huilen koud warm lachen moe pijn schrikken verdrietig ziek",
};

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1")), "..");
const dir = path.join(ROOT, "src", "learnPaths");
const bestanden = fs.readdirSync(dir).filter((f) => /Nieuwkomers\.js$|^nieuwkomers(Zinnen|Picto)\.js$/.test(f));
// Alleen Nederlandse tekst: neem strings uit de bronbestanden, sla vertaalvelden (en/ar/uk/tr/ro/bg) over.
// De modules echt laden en alle tekst-waarden aflopen (ook vragen die met code worden gebouwd);
// vertalingen (steun, steunOpties, steunTeksten en taalsleutels) overslaan.
const VERTAAL = new Set(["en", "ar", "uk", "tr", "ro", "bg", "steun", "steunOpties", "steunTeksten", "vertaling", "vertalingen"]);
let tekst = "";
const gezien = new WeakSet();
function loop(v, sleutel = "") {
  if (VERTAAL.has(sleutel)) return;
  if (typeof v === "string") { tekst += " " + v; return; }
  if (!v || typeof v !== "object" || gezien.has(v)) return;
  gezien.add(v);
  for (const [k, w] of Object.entries(v)) loop(w, k);
}
// Plus de "…"-strings uit de broncode zelf (vangt tekst in componenten-data die niet geëxporteerd is).
for (const f of bestanden) {
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  for (const m of src.matchAll(/(?<!(?:en|ar|uk|tr|ro|bg)\s*:\s*)"((?:[^"\\]|\\.)*)"/g)) tekst += " " + m[1];
}
for (const f of bestanden) {
  if (f === "nieuwkomersSteun.js") continue;
  const mod = await import("file:///" + path.join(dir, f).replace(/\\/g, "/"));
  for (const [k, w] of Object.entries(mod)) {
    // Woordenboek-objecten met NL-sleutels: de sleutels zijn de Nederlandse woorden.
    if (w && typeof w === "object" && !Array.isArray(w)) tekst += " " + Object.keys(w).join(" ");
    loop(w, k === "default" ? "" : k);
  }
}
const tokens = new Set(tekst.toLowerCase().replace(/\\n/g, " ").split(/[^a-zà-ÿ'-]+/).filter(Boolean));

// Vervoegingen: kijken → kijk/kijkt/keek…; we matchen op de stam (woord zonder -en/-n) of het hele woord.
const ONREGELMATIG = { mogen: ["mag"], kunnen: ["kan", "kun", "kunt"], zullen: ["zal", "zul", "zult"], willen: ["wil", "wilt"], hoeven: ["hoeft"], weten: ["weet"], zitten: ["zit"], doen: ["doe", "doet"], zeggen: ["zeg", "zegt", "zei"], vragen: ["vraag", "vraagt", "vroeg"], vinden: ["vind", "vindt"], beginnen: ["begin", "begint"] };
function komtVoor(w) {
  if (tokens.has(w)) return true;
  if ((ONREGELMATIG[w] || []).some((x) => tokens.has(x))) return true;
  const kandidaten = new Set([w]);
  if (w.endsWith("en") && w.length > 4) {
    const stam = w.slice(0, -2);
    kandidaten.add(stam); kandidaten.add(stam + "t");
    if (/(.)\1$/.test(stam)) { kandidaten.add(stam.slice(0, -1)); kandidaten.add(stam.slice(0, -1) + "t"); }
    if (/[^aeiou][aeiou][^aeiou]$/.test(stam)) { const lang = stam.slice(0, -2) + stam.slice(-2, -1) + stam.slice(-2); kandidaten.add(lang); kandidaten.add(lang + "t"); }
    if (stam.endsWith("v")) { kandidaten.add(stam.slice(0, -1) + "f"); kandidaten.add(stam.slice(0, -1) + "ft"); }
    if (stam.endsWith("z")) { kandidaten.add(stam.slice(0, -1) + "s"); kandidaten.add(stam.slice(0, -1) + "st"); }
  }
  for (const k of kandidaten) if (tokens.has(k)) return true;
  return false;
}

let totaal = 0, gedekt = 0;
const regels = [];
const missend = {};
for (const [cat, woorden] of Object.entries(LIJST)) {
  const lijst = woorden.split(/\s+/);
  const mis = lijst.filter((w) => !komtVoor(w));
  totaal += lijst.length; gedekt += lijst.length - mis.length;
  missend[cat] = mis;
  regels.push(`| ${cat} | ${lijst.length - mis.length} van ${lijst.length} | ${Math.round(((lijst.length - mis.length) / lijst.length) * 100)}% |`);
}
const pct = Math.round((gedekt / totaal) * 100);
const datum = new Date().toISOString().slice(0, 10);
const md = `# LOWAN-dekking nieuwkomers-pakket (gegenereerd ${datum})

> Gegenereerd door \`node scripts/lowanDekking.mjs\`. Bron: LOWAN "Schooltaalwoordenlijst nieuwkomers kleuters" (juli 2023, mede gebaseerd op de BAK-lijst), **minimumwoorden groep 1** (${totaal} woorden).
> "Komt voor" = het woord of een vervoeging staat ergens in een vraag, antwoord, uitleg of woordkaart van een nieuwkomers-onderdeel (${bestanden.length} bestanden). Dat is nog niet hetzelfde als "gericht geoefend".

**Totaal: ${gedekt} van ${totaal} woorden komen voor (${pct}%).**

| Categorie | Komt voor | % |
|---|---|---|
${regels.join("\n")}

## Ontbrekende woorden per categorie
${Object.entries(missend).map(([c, m]) => `- **${c}** (${m.length}): ${m.join(", ") || "—"}`).join("\n")}
`;
fs.writeFileSync(path.join(ROOT, "docs", "LOWAN-DEKKING.md"), md);
console.log(`LOWAN groep 1: ${gedekt}/${totaal} (${pct}%)`);
for (const [c, m] of Object.entries(missend)) console.log(`  ${c}: mist ${m.length} — ${m.join(", ")}`);

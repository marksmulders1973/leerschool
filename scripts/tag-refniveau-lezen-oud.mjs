// B6 fase 2b — referentieniveau-tags op de OUDERE Begrijpend lezen-vragen
// in doorstroomtoetsTaalG8.js. Per vraag beoordeeld:
// 1F = letterlijk verband, basale signaalwoorden, tekstbegrippen (alinea,
//      hoofdgedachte vinden, tekstsoort/doel herkennen).
// S  = 2F: schrijversdoel/overtuigen, feit vs mening, conclusie trekken,
//      formele signaalwoorden (echter), kritisch lezen, publiekgerichtheid.
// Bewust ONGETAGD gelaten: Cito-strategie/meta-vragen ("Cito-truc",
// "leestips", "NIET-strik") — die meten toetsstrategie, geen leesniveau.
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/learnPaths/doorstroomtoetsTaalG8.js";
const TAGS = {
  "Waarom** gaan veel mensen naar het strand": "1F",
  "honden helpen** bij brand": "1F",
  "Tom oefende elke dag 1 uur": "1F",
  "Vervolgens** schenk je het water": "1F",
  "te weinig water gaf": "1F",
  "'bijvoorbeeld'** introduceert": "1F",
  "'omdat'** introduceert": "1F",
  "'daardoor'** introduceert": "1F",
  "In de Sahara valt": "1F",
  "Wat is **alinea**?": "1F",
  "Een **alinea** is...": "1F",
  "*Hoofdgedachte* van tekst": "1F",
  "De hoofdgedachte van een tekst is...": "1F",
  "wijst op een **voorbeeld**": "1F",
  "bedoeld om te **informeren**": "1F",
  "doel** van een **reclame-tekst**": "1F",
  "Allereerst... Vervolgens... Ten slotte": "1F",
  "inleiding** van een tekst is meestal": "1F",
  "citaat** in een tekst": "1F",
  "samenvatting** van een tekst...": "1F",
  "vooral overtuigen": "S",
  "woord **'echter'**": "S",
  "**'feit'** *en* **'mening'**": "S",
  "conclusie** van de schrijver": "S",
  "kritisch lezen": "S",
  "wil overtuigen** van iets is een": "S",
  "conclusie** van een betoog": "S",
  "tekst voor wetenschappers": "S",
};

let t = readFileSync(FILE, "utf8");
let n = 0, missers = [];
for (const [frag, niveau] of Object.entries(TAGS)) {
  const qi = t.indexOf(frag);
  if (qi < 0) { missers.push(frag); continue; }
  const qstart = t.lastIndexOf('q: "', qi);
  const eol = t.indexOf("\n", qstart);
  const lineStart = t.lastIndexOf("\n", qstart) + 1;
  const indent = t.slice(lineStart, qstart);
  if (t.slice(eol, eol + indent.length + 12).includes('ref: "')) continue;
  t = t.slice(0, eol) + "\n" + indent + 'ref: "' + niveau + '",' + t.slice(eol);
  n++;
}
writeFileSync(FILE, t);
console.log("getagd:", n);
if (missers.length) { console.log("NIET GEVONDEN:"); missers.forEach((m) => console.log("  -", m)); }

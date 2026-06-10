// B6 fase 2a — referentieniveau-tags (1F = fundamenteel, S = streefniveau 2F/1S)
// op de 123 trio-vragen die op 2026-06-10 zijn geschreven, plus refOnderdeel
// per stap. Per vraag individueel beoordeeld (geen bulk-aanname):
// 1F = basale bewerking/letterlijk lezen/regel direct toepassen;
// S  = meerstaps, formeler, terugrekenen, tussen-de-regels, uitzonderingsregels.
// Studievaardigheden + woordenschat krijgen refOnderdeel "geen" (tellen niet
// mee op de echte toets — zie memory bugjacht-20260610).
import { readFileSync, writeFileSync } from "node:fs";

const FILES = {
  rekenen: "src/learnPaths/doorstroomtoetsRekenenG8.js",
  taal: "src/learnPaths/doorstroomtoetsTaalG8.js",
  studie: "src/learnPaths/doorstroomtoetsStudievaardighedenG8.js",
};

// ── per-vraag oordelen (sleutel = uniek q-fragment) ──
const TAGS = {
  rekenen: {
    "gelijk aan 0,4": "S", "3/4 + 1/8": "S", "klein naar groot**: 0,8": "1F",
    "1/3 van 27": "1F", "2,5 + 1,75": "1F", "hoort bij **3/8": "S",
    "5/6 − 1/2": "S", "0,06 × 10": "1F", "verdeeld in 12 punten": "1F",
    "precies tussen** 0,3 en 0,4": "S", "3 × 2/9": "S", "1,2 ÷ 0,4": "S",
    "Welke breuk is het **grootst": "S", "0,25 liter sap": "1F", "schrijf 7/10": "1F",
    "jas van **€80": "1F", "15% van 60": "1F", "dragen er 7 een bril": "1F",
    "meng je **1 : 4": "1F", "kostte **€400** en kost nu": "S", "hoort bij 3/5": "1F",
    "3 croissants": "1F", "40%** ouder": "1F", "20% duurder": "1F",
    "verhouding jongens : meisjes": "S", "voordeligst** bij een broek": "S",
    "20% extra gratis": "1F", "zakgeld** per week": "1F", "rode en blauwe knikkers": "S",
    "10% van €85": "1F", "50% van een getal is 18": "1F",
    "3,5 km": "1F", "rechthoekige tuin": "1F", "schaal 1 : 50.000** meet je 6 cm": "S",
    "2,5 liter": "1F", "pak melk weegt": "S", "les duurt **70 minuten": "1F",
    "kubus heeft ribben": "S", "0,75 uur": "1F", "hardloper doet **12 km": "S",
    "afstand Amsterdam": "1F", "aquarium": "S", "kwart voor vier": "1F",
    "muur is **4 m breed": "S", "hoeveel cm is **1,25 m": "1F", "film duurt 95 minuten": "1F",
    "3 schriften van **€1,25": "1F", "53 kinderen** op kamp": "S",
    "bioscoopkaartje": "1F", "fietsen en steps": "S", "verdelen **€45": "S",
    "vertrekt om **10:48": "S", "2e brood halve prijs": "1F",
    "leest elke avond **25 bladzijden": "S", "klas spaart voor het schoolreisje": "S",
    "3 keer zo oud** als Daan": "S", "24 flesjes** water": "S",
    "vliegtuig vertrekt om **14:20": "S", "recept voor **4 personen": "1F",
    "broodje van €3,45": "1F", "zwembad-abonnement kost €120": "S",
  },
  taal: {
    // Stap B — begrijpend lezen (refOnderdeel: lezen)
    "Egels houden een winterslaap": "1F", "verbieden mobieltjes": "S",
    "**Daarom** trok ze haar jas aan": "1F", "spinnen insecten zijn": "S",
    "Kom naar het Zomerfestival": "1F", "kneed je het deeg": "1F",
    "niet naar de Efteling **maar**": "1F", "IJsberen lijken wit": "S",
    "Hoewel het stortregende": "S", "plant 500 nieuwe bomen": "1F",
    "Zijn koffer stond al klaar": "S", "Eet je groente, **want**": "1F",
    "In de bieb is het stil": "S", "hoofdgedachte** van een alinea": "1F",
    "25.000 tandjes": "1F", "spaarde drie maanden voor nieuwe schaatsen": "S",
    // Stap C — spelling (refOnderdeel: taalverzorging)
    "jij morgen mee naar de film": "S", "verleden tijd** van *'fietsen'": "1F",
    "Het feest vindt plaats": "1F", "voltooid deelwoord** van *'verhuizen'": "S",
    "allebei": "1F", "vieren Koningsdag": "1F", "meervoud** van *'paraplu'": "1F",
    "onmiddellijk": "S", "verleden tijd van 'blaffen'": "1F",
    "vrouw die rechtspreekt": "1F", "huiswerk gedaan": "1F",
    "verkleinwoord** van *'ring'": "S", "veel mensen op het plein": "1F",
    "fout** gespeld": "S", "meervoud van 'dame'": "1F",
    // Stap D — taalverzorging
    "mooie dag is het vandaag": "1F", "kinderen van groep 8 oefenen": "1F",
    "Als je klaar bent": "S", "Lisa zei": "S", "meisje **...** daar fietst": "1F",
    "lijdende vorm": "S", "leent een boek van de bieb": "1F",
    "vraagzin** met het juiste leesteken": "1F", "mijn broertje en ik gaan zaterdag": "1F",
    "misschien** gaat gebeuren": "S", "geeft de klas een compliment": "S",
    "netjes geschreven": "1F", "gladde vloer": "1F",
    "Morgen begint de zomervakantie": "1F", "het huis **die** te koop staat": "1F",
  },
};

// ── refOnderdeel per stap (op step-titel) ──
const STAP_ONDERDEEL = {
  rekenen: [
    ["Breuken & decimalen", "rekenen"], ["Procenten & verhoudingen", "rekenen"],
    ["Meten & schaal", "rekenen"], ["Redactiesommen", "rekenen"],
  ],
  taal: [
    ["Woordenschat", "geen"], ["Begrijpend lezen", "lezen"],
    ["Spelling", "taalverzorging"], ["Taalverzorging", "taalverzorging"],
  ],
  studie: [
    ["Kaart + schaal lezen", "geen"], ["Tabel + grafiek lezen", "geen"],
    ["Woordenboek, atlas + index", "geen"], ["Schema's + stappenplan", "geen"], ["Eind-opdracht", "geen"],
  ],
};

let totaalTags = 0, totaalStappen = 0, missers = [];
for (const [pad, file] of Object.entries(FILES)) {
  let t = readFileSync(file, "utf8");
  // 1. stap-onderdeel — alleen stap-objecten (regel begint met 4 spaties + title)
  for (const [titelDeel, onderdeel] of STAP_ONDERDEEL[pad]) {
    const zoek = '\n    title: "' + titelDeel;
    const si = t.indexOf(zoek);
    if (si < 0) { missers.push(pad + " (stap): " + titelDeel); continue; }
    const eol = t.indexOf("\n", si + 1);
    if (t.slice(eol, eol + 40).includes("refOnderdeel")) continue;
    t = t.slice(0, eol) + '\n    refOnderdeel: "' + onderdeel + '",' + t.slice(eol);
    totaalStappen++;
  }
  // 2. vraag-tags: zoek q-fragment, voeg ref toe direct ná de q-regel van
  // dezelfde check (werkt voor mc én open vragen; geen overslag naar de
  // volgende vraag zoals bij de eerdere answer:-aanpak).
  for (const [frag, niveau] of Object.entries(TAGS[pad] || {})) {
    const qi = t.indexOf(frag);
    if (qi < 0) { missers.push(pad + ": " + frag); continue; }
    const qstart = t.lastIndexOf('q: "', qi);
    if (qstart < 0) { missers.push(pad + " (geen q): " + frag); continue; }
    const eol = t.indexOf("\n", qstart);
    const lineStart = t.lastIndexOf("\n", qstart) + 1;
    const indent = t.slice(lineStart, qstart);
    if (t.slice(eol, eol + indent.length + 12).includes('ref: "')) continue;
    t = t.slice(0, eol) + "\n" + indent + 'ref: "' + niveau + '",' + t.slice(eol);
    totaalTags++;
  }
  writeFileSync(file, t);
}
console.log("stappen voorzien van refOnderdeel:", totaalStappen);
console.log("vragen getagd:", totaalTags);
if (missers.length) { console.log("NIET GEVONDEN:"); missers.forEach((m) => console.log("  -", m)); }

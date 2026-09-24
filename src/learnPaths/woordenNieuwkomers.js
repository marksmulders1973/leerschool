// Leerpad: Woorden — de eerste woorden in het Nederlands (nieuwkomers).
// Gebouwd 24 sep 2026 voor het Nieuwkomer-pakket. 15 vragen in 3 delen (school,
// thuis en eten, lichaam en kleuren). Geen plaatjes: het woord staat in de eigen
// steuntaal (`steun`: en/ar/uk/tr) en het kind kiest het Nederlandse woord.
// Zonder gekozen taal staat Engels erbij. Elke stap begint met uitleg in drie stappen.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
const stepEmojis = ["🏫", "🏠", "🧍"];
const chapters = [
  { letter: "A", title: "Op school", emoji: "🏫", from: 0, to: 0 },
  { letter: "B", title: "Thuis en eten", emoji: "🏠", from: 1, to: 1 },
  { letter: "C", title: "Lichaam en kleuren", emoji: "🧍", from: 2, to: 2 },
];

// 🌍 Woordenboekje voor het vertaalknopje bij elk ANTWOORD (Mark 24 sep 2026: hij tikte op
// 'de stoel' om te vertalen en dat telde als fout antwoord → dus een knopje ernaast).
// Bewuste keuze: dit verklapt het antwoord als je alle vier tikt, maar het kind leest dan
// wél vier Nederlandse woorden mét de/het naast de eigen taal — leren, geen toets.
const WOORDENBOEK = {
  "de tafel": { en: "the table", ar: "الطاولة", uk: "стіл", tr: "masa" },
  "de stoel": { en: "the chair", ar: "الكرسي", uk: "стілець", tr: "sandalye" },
  "de deur": { en: "the door", ar: "الباب", uk: "двері", tr: "kapı" },
  "het raam": { en: "the window", ar: "النافذة", uk: "вікно", tr: "pencere" },
  "de tas": { en: "the bag", ar: "الحقيبة", uk: "сумка", tr: "çanta" },
  "de pen": { en: "the pen", ar: "القلم", uk: "ручка", tr: "kalem" },
  "het boek": { en: "the book", ar: "الكتاب", uk: "книжка", tr: "kitap" },
  "het bord": { en: "the board (in class)", ar: "السبّورة", uk: "дошка", tr: "tahta" },
  "de jas": { en: "the coat", ar: "المعطف", uk: "куртка", tr: "mont" },
  "de juf": { en: "the (female) teacher", ar: "المعلّمة", uk: "вчителька", tr: "kadın öğretmen" },
  "de meester": { en: "the (male) teacher", ar: "المعلّم", uk: "вчитель", tr: "erkek öğretmen" },
  "het kind": { en: "the child", ar: "الطفل", uk: "дитина", tr: "çocuk" },
  "de moeder": { en: "the mother", ar: "الأم", uk: "мама", tr: "anne" },
  "het huis": { en: "the house", ar: "البيت", uk: "будинок", tr: "ev" },
  "de school": { en: "the school", ar: "المدرسة", uk: "школа", tr: "okul" },
  "de auto": { en: "the car", ar: "السيارة", uk: "машина", tr: "araba" },
  "de tuin": { en: "the garden", ar: "الحديقة", uk: "сад", tr: "bahçe" },
  "de melk": { en: "the milk", ar: "الحليب", uk: "молоко", tr: "süt" },
  "de appel": { en: "the apple", ar: "التفاحة", uk: "яблуко", tr: "elma" },
  "het water": { en: "the water", ar: "الماء", uk: "вода", tr: "su" },
  "het brood": { en: "the bread", ar: "الخبز", uk: "хліб", tr: "ekmek" },
  "de kaas": { en: "the cheese", ar: "الجبن", uk: "сир", tr: "peynir" },
  "de banaan": { en: "the banana", ar: "الموزة", uk: "банан", tr: "muz" },
  "de vader": { en: "the father", ar: "الأب", uk: "тато", tr: "baba" },
  "de zus": { en: "the sister", ar: "الأخت", uk: "сестра", tr: "kız kardeş" },
  "het hoofd": { en: "the head", ar: "الرأس", uk: "голова", tr: "baş" },
  "de hand": { en: "the hand", ar: "اليد", uk: "рука (кисть)", tr: "el" },
  "de voet": { en: "the foot", ar: "القدم", uk: "стопа", tr: "ayak" },
  "de buik": { en: "the belly", ar: "البطن", uk: "живіт", tr: "karın" },
  "het oog": { en: "the eye", ar: "العين", uk: "око", tr: "göz" },
  "het oor": { en: "the ear", ar: "الأذن", uk: "вухо", tr: "kulak" },
  "de neus": { en: "the nose", ar: "الأنف", uk: "ніс", tr: "burun" },
  "de mond": { en: "the mouth", ar: "الفم", uk: "рот", tr: "ağız" },
  "rood": { en: "red", ar: "أحمر", uk: "червоний", tr: "kırmızı" },
  "blauw": { en: "blue", ar: "أزرق", uk: "синій", tr: "mavi" },
  "geel": { en: "yellow", ar: "أصفر", uk: "жовтий", tr: "sarı" },
  "groen": { en: "green", ar: "أخضر", uk: "зелений", tr: "yeşil" },
  "wit": { en: "white", ar: "أبيض", uk: "білий", tr: "beyaz" },
};

// Woord-vraag: "Welk woord is dit?" + steun in eigen taal; opties = Nederlandse woorden (goed = index 0 vóór schudden).
let zaad = 7;
const rnd = () => { zaad = (zaad * 9301 + 49297) % 233280; return zaad / 233280; };
const schud = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const w = (goed, fout, steun, extra = {}) => {
  const opts = schud([goed, ...fout]);
  const answer = opts.indexOf(goed);
  return { q: "Welk Nederlands woord is dit?", options: opts, answer, wrongHints: opts.map((_, i) => (i === answer ? null : "Kijk naar het woord in jouw taal. Welk Nederlands woord past?")), steun, steunAltijd: true, steunOpties: Object.fromEntries(opts.map((o) => [o, WOORDENBOEK[o]]).filter(([, v]) => v)), ...extra };
};

const school = [
  w("de tafel", ["de stoel", "de deur", "het raam"], { en: "the table", ar: "الطاولة", uk: "стіл", tr: "masa" }, { uitlegPad: {
    stappen: [
      { titel: "Zo werkt dit", tekst: "Je ziet een woord in **jouw taal**. Kies het **Nederlandse** woord dat hetzelfde betekent." },
      { titel: "De tafel", tekst: "Aan een **tafel** zit je. Je werkt eraan. Je eet eraan." },
      { titel: "de en het", tekst: "In het Nederlands hoort **de** of **het** bij een woord. Leer ze samen: **de tafel**, **het raam**." },
    ],
    woorden: [{ woord: "de tafel", uitleg: "Daar zit je aan." }, { woord: "de stoel", uitleg: "Daar zit je op." }],
    theorie: "Leer het woord altijd mét de of het.",
    voorbeelden: [{ type: "stap", tekst: "de tafel, de stoel, de deur" }, { type: "stap", tekst: "het raam, het boek, het bord" }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Zeg het woord hardop met de of het ervoor." }],
    niveaus: { basis: "Kies het Nederlandse woord.", simpeler: "Kijk naar jouw taal. Welk woord is dat in het Nederlands?", nogSimpeler: "de tafel" },
  } }),
  w("de stoel", ["de tafel", "de tas", "de pen"], { en: "the chair", ar: "الكرسي", uk: "стілець", tr: "sandalye" }),
  w("het boek", ["de pen", "de tas", "het bord"], { en: "the book", ar: "الكتاب", uk: "книжка", tr: "kitap" }),
  w("de pen", ["het boek", "de stoel", "de jas"], { en: "the pen", ar: "القلم", uk: "ручка", tr: "kalem" }),
  w("de juf", ["de meester", "het kind", "de moeder"], { en: "the (female) teacher", ar: "المعلّمة", uk: "вчителька", tr: "kadın öğretmen" }),
];

const thuis = [
  w("het huis", ["de school", "de auto", "de tuin"], { en: "the house", ar: "البيت", uk: "будинок", tr: "ev" }, { uitlegPad: {
    stappen: [
      { titel: "Thuis", tekst: "**Thuis** is waar je woont. Dat is je **huis**." },
      { titel: "In huis", tekst: "In huis zijn de **keuken** (koken), de **kamer** (zitten) en de **slaapkamer** (slapen)." },
      { titel: "Eten", tekst: "**Brood**, **water**, **melk**, **appel**: woorden die je elke dag hoort." },
    ],
    woorden: [{ woord: "het huis", uitleg: "Waar je woont." }, { woord: "de keuken", uitleg: "Waar je kookt." }],
    theorie: "Huis = waar je woont.",
    voorbeelden: [{ type: "stap", tekst: "Ik ga naar huis." }, { type: "stap", tekst: "Mama is in de keuken." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Zeg elke dag één woord hardop in huis." }],
    niveaus: { basis: "Kies het Nederlandse woord.", simpeler: "Waar je woont = het huis.", nogSimpeler: "het huis" },
  } }),
  w("het brood", ["de melk", "de appel", "het water"], { en: "the bread", ar: "الخبز", uk: "хліб", tr: "ekmek" }),
  w("het water", ["de melk", "het brood", "de kaas"], { en: "the water", ar: "الماء", uk: "вода", tr: "su" }),
  w("de appel", ["de banaan", "het brood", "de kaas"], { en: "the apple", ar: "التفاحة", uk: "яблуко", tr: "elma" }),
  w("de moeder", ["de vader", "de juf", "de zus"], { en: "the mother", ar: "الأم", uk: "мама", tr: "anne" }),
];

const lichaam = [
  w("het hoofd", ["de hand", "de voet", "de buik"], { en: "the head", ar: "الرأس", uk: "голова", tr: "baş" }, { uitlegPad: {
    stappen: [
      { titel: "Je lichaam", tekst: "**Hoofd** (boven), **buik** (midden), **voet** (onder). **Hand**: daar pak je mee." },
      { titel: "Kleuren", tekst: "**Rood**, **blauw**, **geel**, **groen**. Kijk om je heen: wat is rood?" },
      { titel: "Wijs aan", tekst: "Zeg het woord en **wijs** het aan. Zo onthoud je het sneller." },
    ],
    woorden: [{ woord: "het hoofd", uitleg: "Bovenaan je lichaam." }, { woord: "de hand", uitleg: "Daar pak je mee." }],
    theorie: "Wijs aan wat je zegt.",
    voorbeelden: [{ type: "stap", tekst: "Dit is mijn hand." }, { type: "stap", tekst: "De appel is rood." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Woord + aanwijzen." }],
    niveaus: { basis: "Kies het Nederlandse woord.", simpeler: "Bovenaan je lichaam = het hoofd.", nogSimpeler: "het hoofd" },
  } }),
  w("de hand", ["de voet", "het oog", "het oor"], { en: "the hand", ar: "اليد", uk: "рука (кисть)", tr: "el" }),
  w("het oog", ["het oor", "de neus", "de mond"], { en: "the eye", ar: "العين", uk: "око", tr: "göz" }),
  w("rood", ["blauw", "geel", "groen"], { en: "red", ar: "أحمر", uk: "червоний", tr: "kırmızı" }),
  w("blauw", ["rood", "geel", "wit"], { en: "blue", ar: "أزرق", uk: "синій", tr: "mavi" }),
];

const steps = [
  { title: "Op school", explanation: "Je ziet een woord in **jouw taal**. Kies het **Nederlandse** woord.\n\nLeer elk woord met **de** of **het** ervoor: de tafel, het boek.", checks: school },
  { title: "Thuis en eten", explanation: "Woorden voor **thuis** en **eten**.\n\nZeg ze hardop. Wijs ze aan in huis.", checks: thuis },
  { title: "Lichaam en kleuren", explanation: "Woorden voor je **lichaam** en voor **kleuren**.\n\nWijs aan wat je zegt. Zo onthoud je het.", checks: lichaam },
];
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordenNieuwkomers = {
  id: "woorden-nieuwkomers",
  title: "Woorden — je eerste Nederlandse woorden (nieuwkomers)",
  emoji: "🔤",
  level: "groep3-4",
  subject: "taal",
  referentieNiveau: "voor 1F",
  sloThema: "Woordenschat — basiswoorden",
  prerequisites: [],
  intro: "Vijftien woorden voor school, thuis, eten, lichaam en kleuren. Het woord staat in jouw taal; jij kiest het Nederlandse woord. ~10 min.",
  triggerKeywords: ["nieuwkomers", "woorden", "woordenschat", "nt2", "eerste woorden", "nederlands leren", "de het"],
  chapters,
  steps,
  steunTeksten: NIEUWKOMERS_STEUN, // alles tikbaar in de eigen taal (SteunTik.jsx)
};

export default woordenNieuwkomers;

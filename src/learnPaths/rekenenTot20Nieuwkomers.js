// Leerpad: Rekenen tot 20 — voor nieuwkomers (niveau groep 3-4).
// Gebouwd 24 sep 2026 na de mail van een nieuwkomersleerkracht (LOWAN-ronde):
// "de meeste kinderen functioneren op het niveau van groep 3/4". Korte zinnen,
// geen uitdrukkingen, elk getal ook als woord waar dat helpt, elke stap begint
// met een som mét uitleg in drie stappen (basis · simpeler · nog simpeler).
// De sommen worden bij het laden gemaakt met een vaste volgorde (geen toeval),
// zodat een kind bij herhalen dezelfde sommen ziet en de leerkracht weet wat er staat.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { voegFoutUitlegToe, rekenReden } from "./nieuwkomersFoutUitleg.js";
const stepEmojis = ["🔢", "➕", "➖", "🔟", "🎒"];

const chapters = [
  { letter: "A", title: "Tellen tot 20", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Erbij tot 10", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Eraf tot 10", emoji: "➖", from: 2, to: 2 },
  { letter: "D", title: "Over de 10 heen", emoji: "🔟", from: 3, to: 3 },
  { letter: "E", title: "Sommen uit de klas", emoji: "🎒", from: 4, to: 4 },
];

// Vaste "willekeur": zelfde sommen bij elke keer laden.
let zaad = 20;
const rnd = () => { zaad = (zaad * 9301 + 49297) % 233280; return zaad / 233280; };
const tussen = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const schud = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

// Maak 4 opties rond het goede antwoord; het goede antwoord staat op een vaste plek per som.
function opties(goed, fouten) {
  const uniek = [goed];
  for (const f of fouten) if (f >= 0 && !uniek.includes(f) && uniek.length < 4) uniek.push(f);
  let k = 1;
  while (uniek.length < 4) { const kandidaat = goed + (k % 2 ? k : -k); if (kandidaat >= 0 && !uniek.includes(kandidaat)) uniek.push(kandidaat); k++; }
  const volgorde = schud(uniek);
  return { options: volgorde.map(String), answer: volgorde.indexOf(goed) };
}

function hints(answerIdx, tekstFout) {
  return [0, 1, 2, 3].map((i) => (i === answerIdx ? null : tekstFout));
}

// STAP 1 — tellen
const telVragen = [];
for (let i = 0; i < 5; i++) {
  const n = tussen(3, 19);
  const o = opties(n + 1, [n, n + 2, n - 1]);
  telVragen.push({ q: `Tel verder. Wat komt **na ${n}**?`, steun: { en: `Count on. What comes after ${n}?`, ar: `عُدّ. ماذا يأتي بعد ${n}؟`, uk: `Рахуй далі. Що йде після ${n}?`, tr: `Saymaya devam et. ${n} sayısından sonra ne gelir?` }, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Tel: ${n}, en dan één erbij.`) });
}
telVragen[0].uitlegPad = {
  stappen: [
    { titel: "Tellen is één erbij", tekst: "Als je telt, doe je steeds **één erbij**. Na 5 komt 6. Na 6 komt 7." },
    { titel: "Gebruik je vingers", tekst: "Zeg het getal. Doe **één vinger** omhoog. Zeg het volgende getal." },
    { titel: "De rij tot 20", tekst: "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20." },
  ],
  woorden: [{ woord: "na", uitleg: "Wat erna komt. Na 3 komt 4." }, { woord: "tellen", uitleg: "1, 2, 3, 4… steeds één erbij." }],
  theorie: "Tellen = steeds één erbij.",
  voorbeelden: [{ type: "stap", tekst: "Na 9 komt 10." }, { type: "stap", tekst: "Na 14 komt 15." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Zeg de rij hardop. Het getal dat je daarna zegt, is het antwoord." }],
  niveaus: { basis: "Tel één verder.", simpeler: "Zeg het getal en dan het volgende getal.", nogSimpeler: "Eén erbij." },
};

// STAP 2 — erbij tot 10
const erbij10 = [];
for (let i = 0; i < 5; i++) {
  const a = tussen(1, 8); const b = tussen(1, 10 - a);
  const o = opties(a + b, [a + b + 1, a + b - 1, a + b + 2]);
  erbij10.push({ q: `**${a} + ${b} =** ?`, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Begin bij ${a}. Tel er ${b} bij.`) });
}
erbij10[0].uitlegPad = {
  stappen: [
    { titel: "Erbij = tellen", tekst: "**Plus** (+) betekent **erbij**. 3 + 2: begin bij 3 en tel 2 verder: 4, 5. Het antwoord is 5." },
    { titel: "Met je vingers", tekst: "Doe 3 vingers omhoog. Doe er 2 bij. Tel alle vingers." },
    { titel: "Het grootste eerst", tekst: "Begin altijd bij het **grootste** getal. Dat is korter tellen." },
  ],
  woorden: [{ woord: "plus", uitleg: "Het teken +. Erbij." }, { woord: "erbij", uitleg: "Meer maken." }],
  theorie: "Plus = erbij = verder tellen.",
  voorbeelden: [{ type: "stap", tekst: "4 + 3: 5, 6, 7. Antwoord 7." }, { type: "stap", tekst: "6 + 2: 7, 8. Antwoord 8." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Begin bij het grootste getal en tel het kleinste erbij." }],
  niveaus: { basis: "Tel het tweede getal erbij.", simpeler: "Begin bij het eerste getal. Tel verder.", nogSimpeler: "Erbij = verder tellen." },
};

// STAP 3 — eraf tot 10
const eraf10 = [];
for (let i = 0; i < 5; i++) {
  const a = tussen(2, 10); const b = tussen(1, a);
  const o = opties(a - b, [a - b + 1, a - b - 1, a + b]);
  eraf10.push({ q: `**${a} − ${b} =** ?`, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Begin bij ${a}. Tel ${b} terug.`) });
}
eraf10[0].uitlegPad = {
  stappen: [
    { titel: "Eraf = terug tellen", tekst: "**Min** (−) betekent **eraf**. 7 − 2: begin bij 7 en tel 2 terug: 6, 5. Het antwoord is 5." },
    { titel: "Met je vingers", tekst: "Doe 7 vingers omhoog. Doe er 2 naar beneden. Tel de vingers die nog omhoog zijn." },
    { titel: "Het wordt minder", tekst: "Bij eraf wordt het getal altijd **kleiner**. Is je antwoord groter? Dan klopt het niet." },
  ],
  woorden: [{ woord: "min", uitleg: "Het teken −. Eraf." }, { woord: "eraf", uitleg: "Minder maken." }],
  theorie: "Min = eraf = terug tellen.",
  voorbeelden: [{ type: "stap", tekst: "9 − 3: 8, 7, 6. Antwoord 6." }, { type: "stap", tekst: "5 − 5 = 0. Alles eraf." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Tel terug op je vingers." }],
  niveaus: { basis: "Tel het tweede getal terug.", simpeler: "Begin bij het eerste getal. Tel terug.", nogSimpeler: "Eraf = terug tellen." },
};

// STAP 4 — over de 10 heen
const over10 = [];
for (let i = 0; i < 5; i++) {
  const erbijSom = i % 2 === 0;
  if (erbijSom) {
    const a = tussen(5, 9); const b = tussen(11 - a, 9);
    const o = opties(a + b, [a + b - 1, a + b + 1, a + b - 10]);
    over10.push({ q: `**${a} + ${b} =** ?`, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Maak eerst 10: ${a} + ${10 - a} = 10. Dan nog ${b - (10 - a)} erbij.`) });
  } else {
    const a = tussen(11, 18); const b = tussen(a - 9, 9);
    const o = opties(a - b, [a - b + 1, a - b - 1, a - b + 10]);
    over10.push({ q: `**${a} − ${b} =** ?`, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Ga eerst naar 10: ${a} − ${a - 10} = 10. Dan nog ${b - (a - 10)} eraf.`) });
  }
}
over10[0].uitlegPad = {
  stappen: [
    { titel: "Eerst naar 10", tekst: "8 + 5. Maak eerst **10**: 8 + 2 = 10. Je had 5, je hebt 2 gebruikt. Er blijft 3 over. 10 + 3 = **13**." },
    { titel: "In twee stukjes", tekst: "Knip het tweede getal in **twee stukjes**. Eén stukje maakt 10 vol. Het andere stukje komt erbij." },
    { titel: "Met je vingers", tekst: "10 vingers vol? Dan begin je opnieuw en tel je verder: 11, 12, 13." },
  ],
  woorden: [{ woord: "tien vol", uitleg: "Eerst tot 10 tellen. Dan verder." }],
  theorie: "Over de 10: eerst 10 vol maken, dan de rest erbij.",
  voorbeelden: [{ type: "stap", tekst: "7 + 6: 7 + 3 = 10, dan 10 + 3 = 13." }, { type: "stap", tekst: "14 − 6: 14 − 4 = 10, dan 10 − 2 = 8." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "10 is een tussenstop. Ga eerst naar 10." }],
  niveaus: { basis: "Maak eerst 10 vol, dan de rest.", simpeler: "Knip het getal in twee stukjes. Eén stukje tot 10.", nogSimpeler: "Eerst naar 10." },
};

// STAP 5 — sommen uit de klas (korte verhaaltjes, eenvoudige woorden)
const klasSommen = [
  { q: "Er zijn **6 kinderen** in de klas. Er komen **3 kinderen** bij. Hoeveel kinderen zijn er nu?", goed: 9, fout: [8, 10, 3] , steun: {"en": "There are 6 children in the class. 3 more children come. How many children are there now?", "ar": "في الصف 6 أطفال. يأتي 3 أطفال آخرون. كم طفلًا هناك الآن؟", "uk": "У класі 6 дітей. Приходять ще 3 дитини. Скільки дітей тепер?", "tr": "Sınıfta 6 çocuk var. 3 çocuk daha geliyor. Şimdi kaç çocuk var?"} },
  { q: "Je hebt **10 potloden**. Je geeft er **4** weg. Hoeveel potloden heb je nog?", goed: 6, fout: [5, 7, 14] , steun: {"en": "You have 10 pencils. You give 4 away. How many pencils do you have left?", "ar": "عندك 10 أقلام رصاص. تعطي 4 منها. كم قلمًا بقي معك؟", "uk": "У тебе 10 олівців. Ти віддаєш 4. Скільки олівців у тебе залишилось?", "tr": "10 kalemin var. 4 tanesini veriyorsun. Kaç kalemin kaldı?"} },
  { q: "In de tas zitten **7 boeken**. Je doet er **5** bij. Hoeveel boeken zijn er nu?", goed: 12, fout: [11, 13, 2] , steun: {"en": "There are 7 books in the bag. You add 5. How many books are there now?", "ar": "في الحقيبة 7 كتب. تضيف 5. كم كتابًا هناك الآن؟", "uk": "У сумці 7 книжок. Ти додаєш 5. Скільки книжок тепер?", "tr": "Çantada 7 kitap var. 5 tane daha koyuyorsun. Şimdi kaç kitap var?"} },
  { q: "Er staan **15 stoelen**. **8 stoelen** zijn bezet. Hoeveel stoelen zijn leeg?", goed: 7, fout: [6, 8, 23] , steun: {"en": "There are 15 chairs. 8 chairs are taken. How many chairs are empty?", "ar": "هناك 15 كرسيًا. 8 كراسٍ مشغولة. كم كرسيًا فارغًا؟", "uk": "Є 15 стільців. 8 стільців зайняті. Скільки стільців вільних?", "tr": "15 sandalye var. 8 sandalye dolu. Kaç sandalye boş?"} },
  { q: "Sara heeft **9 knikkers**. Ali heeft **9 knikkers**. Hoeveel knikkers samen?", goed: 18, fout: [17, 19, 0] , steun: {"en": "Sara has 9 marbles. Ali has 9 marbles. How many marbles together?", "ar": "عند سارة 9 كرات زجاجية. عند علي 9 كرات زجاجية. كم كرة معًا؟", "uk": "У Сари 9 кульок. В Алі 9 кульок. Скільки кульок разом?", "tr": "Sara'nın 9 misketi var. Ali'nin 9 misketi var. Toplam kaç misket?"} },
  { q: "Er zijn **20 appels**. De kinderen eten er **12**. Hoeveel appels zijn er nog?", goed: 8, fout: [9, 7, 32] },
  { q: "Op de tafel liggen **4 rode** en **8 blauwe** blokken. Hoeveel blokken zijn het samen?", goed: 12, fout: [11, 13, 4] },
  { q: "De juf heeft **16 stickers**. Ze geeft **9 stickers** weg. Hoeveel stickers heeft ze nog?", goed: 7, fout: [6, 8, 25] },
].slice(0, 5).map((s) => { const o = opties(s.goed, s.fout); return { q: s.q, steun: s.steun, options: o.options, answer: o.answer, wrongHints: hints(o.answer, "Lees de som nog een keer. Is het erbij of eraf?") }; });
klasSommen[0].uitlegPad = {
  stappen: [
    { titel: "Erbij of eraf?", tekst: "Lees de som. **Komen er kinderen bij?** Dan is het **plus**. **Gaan er weg?** Dan is het **min**." },
    { titel: "Schrijf de som op", tekst: "6 kinderen, 3 komen erbij: **6 + 3**. Dat is 9." },
    { titel: "Woorden die helpen", tekst: "**Erbij, komen, samen** = plus. **Weg, eten, geven** = min." },
  ],
  woorden: [{ woord: "samen", uitleg: "Alles bij elkaar. Plus." }, { woord: "weg", uitleg: "Niet meer. Min." }],
  theorie: "Zoek het woord dat zegt: plus of min.",
  voorbeelden: [{ type: "stap", tekst: "3 komen erbij → +3." }, { type: "stap", tekst: "4 geef je weg → −4." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Onderstreep het woord: erbij of weg." }],
  niveaus: { basis: "Kijk of het plus of min is.", simpeler: "Komen erbij = plus. Gaan weg = min.", nogSimpeler: "Erbij = plus." },
};

const steps = [
  { title: "Tellen tot 20", explanation: "We tellen van **1 tot 20**.\n\nTellen is steeds **één erbij**: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20.\n\nZeg de rij hardop. Gebruik je vingers.", checks: telVragen },
  { title: "Erbij tot 10", explanation: "**Plus** (+) is **erbij**.\n\n3 + 2: begin bij 3, tel 2 verder: 4, 5. Het antwoord is **5**.\n\nBegin bij het **grootste** getal. Dan tel je korter.", checks: erbij10 },
  { title: "Eraf tot 10", explanation: "**Min** (−) is **eraf**.\n\n7 − 2: begin bij 7, tel 2 terug: 6, 5. Het antwoord is **5**.\n\nBij eraf wordt het getal **kleiner**.", checks: eraf10 },
  { title: "Over de 10 heen", explanation: "8 + 5 is meer dan 10. Dat doen we in **twee stapjes**.\n\nStap 1: maak 10 vol. 8 + 2 = 10.\nStap 2: de rest erbij. 10 + 3 = **13**.\n\nBij eraf: ga eerst naar 10, dan de rest eraf.", checks: over10 },
  { title: "Sommen uit de klas", explanation: "Nu sommen met **woorden**.\n\nLees goed. **Komen er dingen bij?** Dan plus. **Gaan er dingen weg?** Dan min.\n\nSchrijf de som op. Reken uit.", checks: klasSommen },
];
voegFoutUitlegToe(steps, rekenReden); // fout antwoord: waarom klopt het niet (Mark 25 sep)
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const rekenenTot20Nieuwkomers = {
  id: "rekenen-tot-20-nieuwkomers",
  title: "Rekenen tot 20 (nieuwkomers, groep 3-4)",
  emoji: "🔢",
  level: "groep3-4",
  subject: "rekenen",
  referentieNiveau: "voor 1F",
  sloThema: "Getallen — tellen, optellen en aftrekken tot 20",
  prerequisites: [],
  intro: "Tellen tot 20, erbij en eraf tot 10, over de 10 heen, en sommen met woorden. Korte zinnen, elke som met uitleg. Ook voor kinderen die nog Nederlands leren. ~10 min.",
  triggerKeywords: ["tellen", "tot 20", "erbij", "eraf", "plus", "min", "nieuwkomers", "groep 3", "groep 4", "beginners", "eerste sommen"],
  chapters,
  steps,
  steunTeksten: NIEUWKOMERS_STEUN, // alles tikbaar in de eigen taal (SteunTik.jsx)
};

export default rekenenTot20Nieuwkomers;

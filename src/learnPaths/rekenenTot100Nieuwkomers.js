// Leerpad: Rekenen tot 100 — voor nieuwkomers (niveau groep 4).
// Gebouwd 24 sep 2026 (zie rekenenTot20Nieuwkomers.js). Tientallen en eenheden,
// erbij en eraf zonder en met tientalovergang, en sommen met woorden. Korte
// zinnen, elke stap begint met uitleg in drie stappen. Vaste sommen (geen toeval).

const stepEmojis = ["🔟", "➕", "➖", "🧮", "🛒"];

const chapters = [
  { letter: "A", title: "Tientallen en eenheden", emoji: "🔟", from: 0, to: 0 },
  { letter: "B", title: "Erbij tot 100", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Eraf tot 100", emoji: "➖", from: 2, to: 2 },
  { letter: "D", title: "Over het tiental heen", emoji: "🧮", from: 3, to: 3 },
  { letter: "E", title: "Sommen uit de winkel", emoji: "🛒", from: 4, to: 4 },
];

let zaad = 100;
const rnd = () => { zaad = (zaad * 9301 + 49297) % 233280; return zaad / 233280; };
const tussen = (a, b) => a + Math.floor(rnd() * (b - a + 1));
const schud = (arr) => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function opties(goed, fouten) {
  const uniek = [goed];
  for (const f of fouten) if (f >= 0 && !uniek.includes(f) && uniek.length < 4) uniek.push(f);
  let k = 1;
  while (uniek.length < 4) { const kandidaat = goed + (k % 2 ? k : -k); if (kandidaat >= 0 && !uniek.includes(kandidaat)) uniek.push(kandidaat); k++; }
  const volgorde = schud(uniek);
  return { options: volgorde.map(String), answer: volgorde.indexOf(goed) };
}
const hints = (answerIdx, tekst) => [0, 1, 2, 3].map((i) => (i === answerIdx ? null : tekst));

// STAP 1 — tientallen en eenheden
const tientallen = [];
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    const t = tussen(2, 9); const e = tussen(1, 9); const n = t * 10 + e;
    const o = opties(n, [t + e, e * 10 + t, n + 10]);
    tientallen.push({ q: `**${t} tientallen** en **${e} eenheden**. Welk getal is dat?`, steun: { en: `${t} tens and ${e} ones. Which number is that?`, ar: `${t} عشرات و ${e} آحاد. ما هو العدد؟`, uk: `${t} десятків і ${e} одиниць. Яке це число?`, tr: `${t} onluk ve ${e} birlik. Bu hangi sayı?` }, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `${t} tientallen = ${t * 10}. Dan ${e} erbij.`) });
  } else {
    const t = tussen(1, 9); const n = t * 10;
    const o = opties(n + 10, [n, n + 1, n + 20]);
    tientallen.push({ q: `Tel met **tien** verder. Wat komt na **${n}**?`, steun: { en: `Count on in tens. What comes after ${n}?`, ar: `عُدّ بالعشرات. ماذا يأتي بعد ${n}؟`, uk: `Рахуй десятками. Що йде після ${n}?`, tr: `Onar onar say. ${n} sayısından sonra ne gelir?` }, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Tien erbij: ${n} + 10.`) });
  }
}
tientallen[0].uitlegPad = {
  stappen: [
    { titel: "Tientallen zijn groepjes van 10", tekst: "**Een tiental** is 10. **3 tientallen** is 10, 20, 30. Dus 30." },
    { titel: "Eenheden zijn losse", tekst: "**Eenheden** zijn losse. 3 tientallen en 4 eenheden: 30 en 4 = **34**." },
    { titel: "Zo schrijf je het", tekst: "Het eerste cijfer = tientallen. Het tweede cijfer = eenheden. **34** = 3 tientallen, 4 eenheden." },
  ],
  woorden: [{ woord: "tiental", uitleg: "Een groepje van 10." }, { woord: "eenheid", uitleg: "Eén losse." }],
  theorie: "Getal = tientallen en eenheden.",
  voorbeelden: [{ type: "stap", tekst: "5 tientallen, 2 eenheden = 52." }, { type: "stap", tekst: "70 = 7 tientallen, 0 eenheden." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Tel de tientallen: 10, 20, 30… Dan de eenheden erbij." }],
  niveaus: { basis: "Tientallen × 10, dan eenheden erbij.", simpeler: "3 tientallen = 30. Dan 4 erbij = 34.", nogSimpeler: "Eerst 30, dan 4." },
};

// STAP 2 — erbij zonder overgang
const erbij100 = [];
for (let i = 0; i < 5; i++) {
  const a = tussen(11, 80); const e = a % 10; const b = i % 2 === 0 ? tussen(10, 90 - a - (a % 10 === 0 ? 0 : 0)) - (tussen(10, 90 - a) % 10) : tussen(1, Math.max(1, 9 - e));
  const bb = Math.max(1, b);
  const o = opties(a + bb, [a + bb + 10, a + bb - 10, a + bb + 1]);
  erbij100.push({ q: `**${a} + ${bb} =** ?`, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Eerst de tientallen, dan de eenheden.`) });
}
erbij100[0].uitlegPad = {
  stappen: [
    { titel: "Eerst de tientallen", tekst: "34 + 20. Tel eerst de **tientallen**: 34 + 20 = **54**." },
    { titel: "Dan de eenheden", tekst: "34 + 5. Tel de **eenheden** erbij: 34 + 5 = **39**. De 3 blijft staan." },
    { titel: "Met sprongen", tekst: "Spring met 10: 34, 44, 54. Spring met 1: 54, 55, 56." },
  ],
  woorden: [{ woord: "sprong van 10", uitleg: "Tien erbij in één keer." }],
  theorie: "Tientallen erbij: het eerste cijfer wordt groter. Eenheden erbij: het tweede cijfer.",
  voorbeelden: [{ type: "stap", tekst: "23 + 30 = 53." }, { type: "stap", tekst: "41 + 6 = 47." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Grote sprongen eerst (10), dan kleine (1)." }],
  niveaus: { basis: "Eerst tientallen, dan eenheden.", simpeler: "Spring met 10, dan met 1.", nogSimpeler: "Eerst 10 erbij." },
};

// STAP 3 — eraf zonder overgang
const eraf100 = [];
for (let i = 0; i < 5; i++) {
  const a = tussen(21, 99); const e = a % 10;
  const b = i % 2 === 0 ? tussen(1, Math.floor((a - 10) / 10)) * 10 : tussen(1, Math.max(1, e));
  const o = opties(a - b, [a - b - 10, a - b + 10, a - b - 1]);
  eraf100.push({ q: `**${a} − ${b} =** ?`, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Eerst de tientallen eraf, dan de eenheden.`) });
}
eraf100[0].uitlegPad = {
  stappen: [
    { titel: "Tientallen eraf", tekst: "56 − 20. Spring **terug met 10**: 56, 46, 36. Antwoord **36**." },
    { titel: "Eenheden eraf", tekst: "56 − 4. Tel **terug met 1**: 55, 54, 53, 52. Antwoord **52**." },
    { titel: "Het wordt kleiner", tekst: "Bij eraf wordt het getal **kleiner**. Groter? Dan klopt het niet." },
  ],
  woorden: [{ woord: "terug springen", uitleg: "Tien eraf in één keer." }],
  theorie: "Eraf = terug springen. Eerst met 10, dan met 1.",
  voorbeelden: [{ type: "stap", tekst: "78 − 30 = 48." }, { type: "stap", tekst: "65 − 3 = 62." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Spring terug op de getallenlijn." }],
  niveaus: { basis: "Eerst tientallen eraf, dan eenheden.", simpeler: "Spring terug met 10, dan met 1.", nogSimpeler: "Eerst 10 eraf." },
};

// STAP 4 — over het tiental heen
const overTiental = [];
for (let i = 0; i < 5; i++) {
  if (i % 2 === 0) {
    const a = tussen(15, 85); const e = a % 10; const b = tussen(10 - e + (e === 0 ? 1 : 0), 9); const goed = a + b;
    const o = opties(goed, [goed - 10, goed + 10, goed - 1]);
    overTiental.push({ q: `**${a} + ${b} =** ?`, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Maak eerst het tiental vol: ${a} + ${10 - e} = ${a + 10 - e}. Dan nog ${b - (10 - e)} erbij.`) });
  } else {
    const a = tussen(21, 95); const e = a % 10; const b = tussen(e + 1, 9); const goed = a - b;
    const o = opties(goed, [goed + 10, goed - 10, goed + 1]);
    overTiental.push({ q: `**${a} − ${b} =** ?`, options: o.options, answer: o.answer, wrongHints: hints(o.answer, `Ga eerst naar het tiental: ${a} − ${e} = ${a - e}. Dan nog ${b - e} eraf.`) });
  }
}
overTiental[0].uitlegPad = {
  stappen: [
    { titel: "Eerst het tiental vol", tekst: "38 + 5. Maak eerst **40**: 38 + 2 = 40. Je had 5, je hebt 2 gebruikt. Er blijft 3 over. 40 + 3 = **43**." },
    { titel: "In twee stukjes", tekst: "Knip het kleine getal in **twee stukjes**. Eén stukje maakt het tiental vol." },
    { titel: "Bij eraf net zo", tekst: "43 − 5. Ga eerst naar **40**: 43 − 3 = 40. Dan nog 2 eraf: **38**." },
  ],
  woorden: [{ woord: "tiental vol", uitleg: "Naar 10, 20, 30, 40…" }],
  theorie: "Over het tiental: eerst naar het ronde getal, dan de rest.",
  voorbeelden: [{ type: "stap", tekst: "47 + 6: 47 + 3 = 50, 50 + 3 = 53." }, { type: "stap", tekst: "62 − 5: 62 − 2 = 60, 60 − 3 = 57." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Het ronde getal is een tussenstop." }],
  niveaus: { basis: "Eerst naar het ronde getal, dan de rest.", simpeler: "Knip het getal in twee stukjes.", nogSimpeler: "Eerst naar 40." },
};

// STAP 5 — sommen uit de winkel (geld in hele euro's, korte zinnen)
const winkel = [
  { q: "Een bal kost **12 euro**. Een pet kost **15 euro**. Hoeveel euro samen?", goed: 27, fout: [26, 28, 3] , steun: {"en": "A ball costs 12 euros. A cap costs 15 euros. How many euros together?", "ar": "الكرة ثمنها 12 يورو. القبعة ثمنها 15 يورو. كم يورو معًا؟", "uk": "М'яч коштує 12 євро. Кепка коштує 15 євро. Скільки євро разом?", "tr": "Bir top 12 euro. Bir şapka 15 euro. Toplam kaç euro?"} },
  { q: "Je hebt **50 euro**. Je koopt schoenen van **35 euro**. Hoeveel euro heb je nog?", goed: 15, fout: [25, 85, 14] , steun: {"en": "You have 50 euros. You buy shoes for 35 euros. How many euros do you have left?", "ar": "عندك 50 يورو. تشتري حذاءً بـ 35 يورو. كم يورو بقي معك؟", "uk": "У тебе 50 євро. Ти купуєш взуття за 35 євро. Скільки євро в тебе залишилось?", "tr": "50 euron var. 35 euroya ayakkabı alıyorsun. Kaç euron kaldı?"} },
  { q: "Er zijn **40 stoelen**. Er komen **25 stoelen** bij. Hoeveel stoelen zijn er nu?", goed: 65, fout: [55, 15, 75] , steun: {"en": "There are 40 chairs. 25 more chairs are added. How many chairs are there now?", "ar": "هناك 40 كرسيًا. يُضاف 25 كرسيًا. كم كرسيًا هناك الآن؟", "uk": "Є 40 стільців. Додають ще 25 стільців. Скільки стільців тепер?", "tr": "40 sandalye var. 25 sandalye daha geliyor. Şimdi kaç sandalye var?"} },
  { q: "In de bus zitten **48 mensen**. **19 mensen** stappen uit. Hoeveel mensen zitten er nog?", goed: 29, fout: [39, 67, 31] , steun: {"en": "There are 48 people on the bus. 19 people get off. How many people are still on the bus?", "ar": "في الحافلة 48 شخصًا. ينزل 19 شخصًا. كم شخصًا بقي؟", "uk": "В автобусі 48 людей. 19 людей виходять. Скільки людей залишилось?", "tr": "Otobüste 48 kişi var. 19 kişi iniyor. Kaç kişi kaldı?"} },
  { q: "Een boek kost **23 euro**. Een pen kost **8 euro**. Hoeveel euro samen?", goed: 31, fout: [21, 15, 30] , steun: {"en": "A book costs 23 euros. A pen costs 8 euros. How many euros together?", "ar": "الكتاب ثمنه 23 يورو. القلم ثمنه 8 يورو. كم يورو معًا؟", "uk": "Книжка коштує 23 євро. Ручка коштує 8 євро. Скільки євро разом?", "tr": "Bir kitap 23 euro. Bir kalem 8 euro. Toplam kaç euro?"} },
  { q: "Er liggen **100 appels**. De klas eet er **36**. Hoeveel appels blijven over?", goed: 64, fout: [74, 54, 136] },
  { q: "Op maandag lees je **27 bladzijden**. Op dinsdag **27**. Hoeveel bladzijden samen?", goed: 54, fout: [44, 0, 55] },
  { q: "Je hebt **75 euro**. Je geeft **28 euro** uit. Hoeveel euro heb je nog?", goed: 47, fout: [57, 103, 53] },
].slice(0, 5).map((s) => { const o = opties(s.goed, s.fout); return { q: s.q, steun: s.steun, options: o.options, answer: o.answer, wrongHints: hints(o.answer, "Lees de som nog een keer. Samen = plus. Weg, uit, over = min.") }; });
winkel[0].uitlegPad = {
  stappen: [
    { titel: "Plus of min?", tekst: "**Samen** betekent **plus**. 12 euro en 15 euro samen: 12 + 15." },
    { titel: "Reken in stapjes", tekst: "12 + 15: eerst 12 + 10 = 22. Dan 22 + 5 = **27**." },
    { titel: "Check", tekst: "Samen moet **meer** zijn dan elk los getal. 27 is meer dan 12 en meer dan 15. Klopt." },
  ],
  woorden: [{ woord: "samen", uitleg: "Bij elkaar. Plus." }, { woord: "over", uitleg: "Wat je nog hebt. Min." }],
  theorie: "Samen = plus. Uitgeven, weg, over = min.",
  voorbeelden: [{ type: "stap", tekst: "20 + 15 = 35." }, { type: "stap", tekst: "50 − 20 = 30." }],
  basiskennis: [{ onderwerp: "Truc", uitleg: "Zoek het woord: samen of weg." }],
  niveaus: { basis: "Samen = plus.", simpeler: "Twee dingen bij elkaar = plus.", nogSimpeler: "Plus." },
};

const steps = [
  { title: "Tientallen en eenheden", explanation: "Een getal tot 100 heeft **twee cijfers**.\n\nHet eerste cijfer zijn de **tientallen** (groepjes van 10). Het tweede cijfer zijn de **eenheden** (losse).\n\n**34** = 3 tientallen en 4 eenheden = 30 + 4.", checks: tientallen },
  { title: "Erbij tot 100", explanation: "Erbij doen we in **sprongen**.\n\nEerst sprongen van **10**: 34 + 20 = 54.\nDan sprongen van **1**: 54 + 3 = 57.", checks: erbij100 },
  { title: "Eraf tot 100", explanation: "Eraf is **terug springen**.\n\nEerst met **10**: 56 − 20 = 36.\nDan met **1**: 36 − 4 = 32.\n\nHet getal wordt **kleiner**.", checks: eraf100 },
  { title: "Over het tiental heen", explanation: "38 + 5 gaat over de 40 heen. Dat doen we in **twee stapjes**.\n\nStap 1: maak het tiental vol. 38 + 2 = 40.\nStap 2: de rest erbij. 40 + 3 = **43**.\n\nBij eraf: ga eerst naar het ronde getal, dan de rest eraf.", checks: overTiental },
  { title: "Sommen uit de winkel", explanation: "Sommen met **woorden** en **geld**.\n\n**Samen** = plus. **Uitgeven, weg, over** = min.\n\nSchrijf de som op. Reken in stapjes.", checks: winkel },
];
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const rekenenTot100Nieuwkomers = {
  id: "rekenen-tot-100-nieuwkomers",
  title: "Rekenen tot 100 (nieuwkomers, groep 4)",
  emoji: "🧮",
  level: "groep4-5",
  subject: "rekenen",
  referentieNiveau: "voor 1F",
  sloThema: "Getallen — optellen en aftrekken tot 100",
  prerequisites: [{ id: "rekenen-tot-20-nieuwkomers", title: "Rekenen tot 20 (nieuwkomers)", niveau: "groep3-4" }],
  intro: "Tientallen en eenheden, erbij en eraf in sprongen, over het tiental heen, en sommen met geld. Korte zinnen, elke som met uitleg. Ook voor kinderen die nog Nederlands leren. ~10 min.",
  triggerKeywords: ["tot 100", "tientallen", "eenheden", "erbij", "eraf", "nieuwkomers", "groep 4", "sprongen", "getallenlijn"],
  chapters,
  steps,
};

export default rekenenTot100Nieuwkomers;

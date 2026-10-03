// Leerpad: Rekenverhaaltjes — sommen in woorden (nieuwkomers, trede 3 "de brug").
// Gebouwd 3 okt 2026 (Mark: "een overgangsbrug van nieuwkomer-niveau naar de gewone app").
// Nieuwkomers kunnen vaak al rekenen, maar haken af op de vraagzin: "Hoeveel meer heeft
// Sara dan Tim?". Dit pad oefent precies die zinnen, op het niveau van gewone groep 3-4-
// sommen, met de signaalwoorden vet. 20 vragen in 4 delen. Vertalingen in
// nieuwkomersSteun.js (vulSteun); antwoorden zijn getallen.

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { vulSteun } from "./nieuwkomersHelpers.js";
import { voegFoutUitlegToe, rekenReden } from "./nieuwkomersFoutUitleg.js";

const stepEmojis = ["➕", "➖", "⚖️", "✌️"];
const chapters = [
  { letter: "A", title: "Samen en erbij", emoji: "➕", from: 0, to: 0 },
  { letter: "B", title: "Weg en over", emoji: "➖", from: 1, to: 1 },
  { letter: "C", title: "Meer, minder en het verschil", emoji: "⚖️", from: 2, to: 2 },
  { letter: "D", title: "Dubbel, de helft en elk", emoji: "✌️", from: 3, to: 3 },
];

// Goed antwoord staat steeds eerst; LearnPath schudt de opties.
const v = (q, options, hint) => ({ q, options, answer: 0, wrongHints: options.map((_, i) => (i === 0 ? null : hint)) });

const HINT_BIJ = "Komt er iets bij of gaat er iets af?";
const HINT_WEG = "Gaat er iets weg? Wat heb je dan nog?";
const HINT_VERSCHIL = "Hoeveel moet er bij het kleine getal, tot het grote getal?";
const HINT_KEER = "Is het twee keer zoveel, of de helft? Of steeds hetzelfde getal?";

const samenErbij = [
  v("Tim heeft 5 knikkers. Hij krijgt er 3 bij. Hoeveel knikkers heeft hij nu?", ["8", "2", "5", "9"], HINT_BIJ),
  v("Sara heeft 7 stiften. Ahmed heeft 6 stiften. Hoeveel stiften hebben ze samen?", ["13", "1", "12", "14"], HINT_BIJ),
  v("In de klas zitten 12 meisjes en 11 jongens. Hoeveel kinderen zijn het samen?", ["23", "1", "22", "24"], HINT_BIJ),
  v("Olena heeft 20 stickers. Ze krijgt er 15 bij. Hoeveel stickers heeft ze nu?", ["35", "5", "25", "36"], HINT_BIJ),
  v("Er staan 30 stoelen in de zaal. De juf zet er 8 bij. Hoeveel stoelen staan er nu?", ["38", "22", "48", "37"], HINT_BIJ),
];

const wegOver = [
  v("Mehmet heeft 9 snoepjes. Hij eet er 4 op. Hoeveel snoepjes heeft hij nog over?", ["5", "13", "4", "6"], HINT_WEG),
  v("Er zitten 15 vogels op het dak. Er vliegen 6 vogels weg. Hoeveel vogels zijn er over?", ["9", "21", "6", "10"], HINT_WEG),
  v("Ana heeft 20 euro. Ze koopt een boek van 8 euro. Hoeveel euro heeft ze over?", ["12", "28", "8", "13"], HINT_WEG),
  v("In de bus zitten 40 mensen. Bij de halte stappen er 10 uit. Hoeveel mensen zitten er nog in de bus?", ["30", "50", "10", "31"], HINT_WEG),
  v("De juf heeft 50 potloden. Ze geeft er 25 weg. Hoeveel potloden heeft ze over?", ["25", "75", "35", "24"], HINT_WEG),
];

const verschil = [
  v("Sara heeft 8 kaarten. Tim heeft 5 kaarten. Hoeveel kaarten heeft Sara meer dan Tim?", ["3", "13", "8", "4"], HINT_VERSCHIL),
  v("Ahmed is 9 jaar. Zijn zus is 6 jaar. Hoeveel jaar is Ahmed ouder?", ["3", "15", "6", "2"], HINT_VERSCHIL),
  v("Olena heeft 12 knikkers. Ana heeft 7 knikkers. Hoeveel knikkers heeft Ana minder dan Olena?", ["5", "19", "7", "6"], HINT_VERSCHIL),
  v("Tim leest 20 bladzijden. Mehmet leest 14 bladzijden. Wat is het verschil?", ["6", "34", "14", "7"], HINT_VERSCHIL),
  v("Een pen kost 6 euro. Een schrift kost 2 euro. Hoeveel euro is de pen duurder?", ["4", "8", "2", "3"], HINT_VERSCHIL),
];

const dubbelHelftElk = [
  v("Sara heeft 4 appels. Ahmed heeft het dubbele. Hoeveel appels heeft Ahmed?", ["8", "2", "4", "6"], HINT_KEER),
  v("Tim heeft 10 koekjes. Hij geeft de helft aan Olena. Hoeveel koekjes krijgt Olena?", ["5", "20", "10", "4"], HINT_KEER),
  v("3 kinderen krijgen elk 2 snoepjes. Hoeveel snoepjes zijn het samen?", ["6", "5", "3", "2"], HINT_KEER),
  v("4 kinderen hebben elk 5 kaarten. Hoeveel kaarten zijn het samen?", ["20", "9", "5", "4"], HINT_KEER),
  v("Mehmet heeft 16 knikkers. Hij verdeelt ze eerlijk over 2 zakjes. Hoeveel knikkers zitten er in elk zakje?", ["8", "18", "14", "32"], HINT_KEER),
];

const steps = vulSteun([
  { title: "Samen en erbij", explanation: "Een rekenverhaaltje is een som in woorden.\n\n**Erbij** en **samen** = plus (+).\n\nTim heeft 5. Hij krijgt er 3 **bij**. 5 + 3 = 8.\n\nLees de zin langzaam. Zoek het rekenwoord. Dan weet je de som.", checks: samenErbij },
  { title: "Weg en over", explanation: "**Weg**, **opeten**, **uitstappen** en **weggeven** = min (−).\n\n**Over** = wat je nog hebt.\n\nMehmet heeft 9. Hij eet er 4 op. 9 − 4 = 5 **over**.\n\nEerst het grote getal, dan gaat er iets af.", checks: wegOver },
  { title: "Meer, minder, verschil", explanation: "**Hoeveel meer dan**, **hoeveel minder dan** en **het verschil**: dat is steeds dezelfde vraag.\n\nHoeveel zit er tussen de twee getallen?\n\nSara 8, Tim 5. Tel van 5 naar 8: 6, 7, 8. Dat is 3. Of: 8 − 5 = 3.", checks: verschil },
  { title: "Dubbel, de helft, elk", explanation: "**Dubbel** = twee keer zoveel. Het dubbele van 4 is 8.\n\n**De helft** = in twee gelijke stukken. De helft van 10 is 5.\n\n**Elk** = ieder kind krijgt hetzelfde. 3 kinderen krijgen **elk** 2: 2 + 2 + 2 = 6.", checks: dubbelHelftElk },
]);
voegFoutUitlegToe(steps, rekenReden); // fout antwoord: zeg waarom het niet klopt
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const rekenverhaaltjesNieuwkomers = {
  id: "rekenverhaaltjes-nieuwkomers",
  title: "Rekenverhaaltjes — sommen in woorden (nieuwkomers)",
  emoji: "📖",
  level: "groep3-4",
  subject: "rekenen",
  referentieNiveau: "voor 1F",
  sloThema: "Rekentaal — contextsommen (verhaaltjessommen)",
  prerequisites: [
    { id: "rekentaal-nieuwkomers", title: "Rekentaal", niveau: "nieuwkomers" },
    { id: "rekenen-tot-100-nieuwkomers", title: "Rekenen tot 100", niveau: "nieuwkomers" },
  ],
  intro: "Sommen in woorden, zoals in de gewone rekenles: erbij, weg, meer dan, het verschil, dubbel en de helft. Met steun in je eigen taal. ~10 min.",
  triggerKeywords: ["nieuwkomers", "rekenverhaaltjes", "verhaaltjessommen", "redactiesommen", "verschil", "meer dan", "nt2"],
  chapters,
  steps,
  steunTeksten: NIEUWKOMERS_STEUN,
};

export default rekenverhaaltjesNieuwkomers;

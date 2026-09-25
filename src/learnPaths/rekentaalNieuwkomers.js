// Leerpad: Rekentaal — de woorden achter de sommen (nieuwkomers).
// Gebouwd 24 sep 2026 na onderzoek naar nieuwkomersonderwijs: rekenwoorden moet je
// bewust aanleren (LOWAN: rekentaalkaarten per bewerking; schooltaalwoordenlijst
// "rekentaal": meer/minder/evenveel, erbij/eraf, samen, over(houden), verdelen, eerlijk,
// helft, groepjes). Geen plaatjes: kleine getallen in korte zinnen, en elke tekst is
// tikbaar in de eigen taal (vertalingen in nieuwkomersSteun.js, ingevuld via vulSteun).

import NIEUWKOMERS_STEUN from "./nieuwkomersSteun.js";
import { vulSteun } from "./nieuwkomersHelpers.js";
import { voegFoutUitlegToe, rekentaalReden } from "./nieuwkomersFoutUitleg.js";

const stepEmojis = ["⚖️", "➕", "✂️"];
const chapters = [
  { letter: "A", title: "Wat betekent meer, minder en evenveel?", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Wat betekent samen, weg en over?", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Wat betekent keer en verdelen?", emoji: "✂️", from: 2, to: 2 },
];

const v = (q, options, answer, hint, extra = {}) => ({ q, options, answer, wrongHints: options.map((_, i) => (i === answer ? null : hint)), ...extra });

const vergelijken = [
  v("Ali heeft 5 knikkers. Sam heeft 3 knikkers. Wie heeft meer?", ["Ali", "Sam", "Ze hebben evenveel."], 0, "Meer = het grotere getal. Welk getal is groter: 5 of 3?", { uitlegPad: {
    stappen: [
      { titel: "Meer", tekst: "**Meer** betekent: een groter aantal. 5 is **meer** dan 3." },
      { titel: "Minder", tekst: "**Minder** betekent: een kleiner aantal. 3 is **minder** dan 5." },
      { titel: "Evenveel", tekst: "**Evenveel** betekent: hetzelfde aantal. 4 en 4 is **evenveel**." },
    ],
    woorden: [{ woord: "meer", uitleg: "Een groter aantal." }, { woord: "minder", uitleg: "Een kleiner aantal." }, { woord: "evenveel", uitleg: "Hetzelfde aantal." }],
    theorie: "Meer = groter getal. Minder = kleiner getal. Evenveel = hetzelfde getal.",
    voorbeelden: [{ type: "stap", tekst: "7 is meer dan 2." }, { type: "stap", tekst: "1 is minder dan 6." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Tel allebei. Welk getal komt later bij het tellen? Dat is meer." }],
    niveaus: { basis: "Kijk welk getal groter is.", simpeler: "5 of 3: welk getal is groter?", nogSimpeler: "5 is meer dan 3." },
  } }),
  v("Lina heeft 2 appels. Tom heeft 6 appels. Wie heeft minder?", ["Lina", "Tom", "Ze hebben evenveel."], 0, "Minder = het kleinere getal. Welk getal is kleiner: 2 of 6?"),
  v("Noor heeft 4 pennen. Adam heeft 4 pennen. Wat is waar?", ["Ze hebben evenveel.", "Noor heeft meer.", "Adam heeft meer."], 0, "Kijk naar de twee getallen. Zijn ze hetzelfde?"),
  v("Wie heeft de meeste boeken? Eva 3, Omar 8, Mila 5.", ["Omar", "Eva", "Mila"], 0, "De meeste = het allergrootste getal van de drie."),
  v("Wie heeft de minste stickers? Jan 7, Sara 2, Yusuf 4.", ["Sara", "Jan", "Yusuf"], 0, "De minste = het allerkleinste getal van de drie."),
];

const samenWegOver = [
  v("Je hebt 3 ballen. Je krijgt er 2 bij. Hoeveel ballen heb je samen?", ["5", "1", "6", "3"], 0, "Erbij en samen = plus. 3 + 2.", { uitlegPad: {
    stappen: [
      { titel: "Samen", tekst: "**Samen** en **erbij** betekenen: **plus** (+). Alles bij elkaar." },
      { titel: "Weg", tekst: "**Weg**, **eraf** en **opeten** betekenen: **min** (−). Er gaat iets af." },
      { titel: "Over", tekst: "**Over** betekent: wat je nog hebt, als er iets weg is. Dat is ook **min**." },
    ],
    woorden: [{ woord: "samen", uitleg: "Alles bij elkaar. Plus." }, { woord: "weg", uitleg: "Het is er niet meer. Min." }, { woord: "over", uitleg: "Wat je nog hebt. Min." }],
    theorie: "Samen, erbij = plus. Weg, eraf, over = min.",
    voorbeelden: [{ type: "stap", tekst: "3 en 2 samen: 3 + 2 = 5." }, { type: "stap", tekst: "6 appels, 2 weg: 6 − 2 = 4 over." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Zoek het rekenwoord in de zin. Dat zegt: plus of min." }],
    niveaus: { basis: "Samen = plus.", simpeler: "Je krijgt er 2 bij. Tel 2 verder vanaf 3.", nogSimpeler: "3 + 2" },
  } }),
  v("Je hebt 6 appels. Je eet er 2 op. Hoeveel appels heb je over?", ["4", "8", "2", "6"], 0, "Opeten = weg = min. Over = wat je nog hebt. 6 − 2."),
  v("Wat betekent het woord 'samen' bij een som?", ["plus (+)", "min (−)", "keer (×)"], 0, "Samen = alles bij elkaar."),
  v("Wat betekent het woord 'weg' bij een som?", ["min (−)", "plus (+)", "keer (×)"], 0, "Weg = er gaat iets af."),
  v("Er zitten 8 vogels in een boom. Er vliegen 3 vogels weg. Hoeveel vogels zijn er over?", ["5", "11", "3", "8"], 0, "Wegvliegen = weg = min. 8 − 3."),
];

const keerVerdelen = [
  v("3 groepjes van 2 kinderen. Hoeveel kinderen zijn het samen?", ["6", "5", "3", "2"], 0, "3 groepjes van 2 = 2 + 2 + 2.", { uitlegPad: {
    stappen: [
      { titel: "Groepjes", tekst: "**3 groepjes van 2** = 2 + 2 + 2 = 6. Dat is ook **3 keer 2** (3 × 2)." },
      { titel: "Verdelen", tekst: "**Eerlijk verdelen**: iedereen krijgt **evenveel**. 8 snoepjes voor 2 kinderen: ieder 4." },
      { titel: "De helft", tekst: "**De helft** = in twee gelijke stukken. De helft van 10 is 5." },
    ],
    woorden: [{ woord: "keer", uitleg: "Steeds hetzelfde getal erbij. 3 keer 2 = 2 + 2 + 2." }, { woord: "verdelen", uitleg: "Uitdelen, zodat iedereen evenveel krijgt." }, { woord: "de helft", uitleg: "Een van de twee gelijke stukken." }],
    theorie: "Keer = groepjes van hetzelfde. Verdelen = eerlijk uitdelen.",
    voorbeelden: [{ type: "stap", tekst: "2 keer 5 = 5 + 5 = 10." }, { type: "stap", tekst: "6 koekjes voor 3 kinderen: ieder 2." }],
    basiskennis: [{ onderwerp: "Truc", uitleg: "Verdelen? Deel één voor één uit, zoals kaarten bij een spel." }],
    niveaus: { basis: "Tel de groepjes bij elkaar op.", simpeler: "2 + 2 + 2", nogSimpeler: "6" },
  } }),
  v("Wat betekent '2 keer 4'?", ["4 + 4", "2 + 4", "4 − 2"], 0, "Keer = hetzelfde getal een paar keer bij elkaar. Kijk: welk getal, en hoe vaak?"),
  v("Je verdeelt 8 snoepjes eerlijk over 2 kinderen. Hoeveel krijgt ieder kind?", ["4", "6", "2", "10"], 0, "Eerlijk = iedereen krijgt evenveel. Deel één voor één uit."),
  v("Wat is de helft van 10?", ["5", "2", "10", "20"], 0, "De helft = in twee gelijke stukken."),
  v("Je verdeelt 6 koekjes eerlijk over 3 kinderen. Hoeveel krijgt ieder kind?", ["2", "3", "9", "18"], 0, "Deel uit: één voor jou, één voor jou, één voor jou… tot alles op is."),
];

const steps = vulSteun([
  { title: "Meer, minder, evenveel", explanation: "Welke groep is groter?\n\n**Meer**: een groter aantal. **Minder**: een kleiner aantal. **Evenveel**: hetzelfde aantal.\n\n**De meeste** = het allergrootste. **De minste** = het allerkleinste.", checks: vergelijken },
  { title: "Samen, weg, over", explanation: "Rekenwoorden zeggen welke som je maakt.\n\n**Samen** en **erbij** = plus (+).\n**Weg**, **eraf** en **over** = min (−).\n\nZoek eerst het rekenwoord. Dan weet je de som.", checks: samenWegOver },
  { title: "Keer en verdelen", explanation: "**Keer** (×) = groepjes van hetzelfde. 3 keer 2 = 2 + 2 + 2.\n\n**Eerlijk verdelen** = iedereen krijgt evenveel.\n\n**De helft** = in twee gelijke stukken.", checks: keerVerdelen },
]);
voegFoutUitlegToe(steps, rekentaalReden); // fout antwoord: waarom klopt het niet (Mark 25 sep)
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const rekentaalNieuwkomers = {
  id: "rekentaal-nieuwkomers",
  title: "Rekentaal — de woorden achter de sommen (nieuwkomers)",
  emoji: "⚖️",
  level: "groep3-4",
  subject: "rekenen",
  referentieNiveau: "voor 1F",
  sloThema: "Rekentaal — schooltaal bij rekenen",
  prerequisites: [],
  intro: "Meer, minder, samen, weg, over, keer en verdelen: de woorden die in elke rekenles terugkomen. Met steun in je eigen taal. ~10 min.",
  triggerKeywords: ["nieuwkomers", "rekentaal", "rekenwoorden", "meer minder", "verdelen", "nt2"],
  chapters,
  steps,
  steunTeksten: NIEUWKOMERS_STEUN, // alles tikbaar in de eigen taal (SteunTik.jsx)
};

export default rekentaalNieuwkomers;

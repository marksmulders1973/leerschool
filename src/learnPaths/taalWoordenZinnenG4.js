// Leerpad: Taal — woorden en zinnen (groep 4).
// Mark 12 aug 2026: "alles met 'hieraan bouwen we' oppakken" — groep 4 had
// nog géén taal-pad (alle taal-PO start bij groep 5+). Dit pad volgt de
// leerlijn taal groep 4: alfabet, meervoud, verkleinwoorden, tegenstellingen,
// zinnen. Taal extra simpel: lezers van 7-8 jaar.

const stepEmojis = ["🔤", "📚", "🐣", "↔️", "✍️"];

const chapters = [
  { letter: "A", title: "Het alfabet", emoji: "🔤", from: 0, to: 0 },
  { letter: "B", title: "Meervoud — één en meer", emoji: "📚", from: 1, to: 1 },
  { letter: "C", title: "Verkleinwoorden", emoji: "🐣", from: 2, to: 2 },
  { letter: "D", title: "Tegenstellingen", emoji: "↔️", from: 3, to: 3 },
  { letter: "E", title: "Zinnen maken", emoji: "✍️", from: 4, to: 4 },
];

const steps = [
  // ─── A. Alfabet ───────────────────────────────────────────
  {
    title: "Het alfabet — de letters op volgorde",
    explanation:
      "Het **alfabet** zijn alle letters op een rij:\n\n**a b c d e f g h i j k l m n o p q r s t u v w x y z**\n\nDat zijn er 26.\n\n**Waarom handig?**\n• Woorden in een woordenboek staan op alfabet.\n• Namen op een lijst staan op alfabet.\n\n**Zo zoek je**: kijk naar de **eerste letter** van het woord. De b komt vóór de k. Dus *bal* staat vóór *kat*.",
    checks: [
      {
        q: "Welke letter komt **na de d**?",
        options: ["e", "c", "f", "b"],
        answer: 0,
        wrongHints: [null, "Die komt vóór de d.", "Die komt een stukje verder.", "Die komt eerder in het alfabet."],
        uitlegPad: {
          stappen: [{ titel: "Zeg het rijtje", tekst: "a, b, c, **d, e**, f. Na de d komt de e." }],
          niveaus: { basis: "Na de d komt de e.", simpeler: "Zeg maar: c... d... e!", nogSimpeler: "e" },
        },
      },
      {
        q: "Welk woord staat **het eerst** in het woordenboek?",
        options: ["appel", "banaan", "citroen", "druif"],
        answer: 0,
        wrongHints: [null, "Kijk naar de eerste letter: komt de b vóór de a?", "De c komt later in het alfabet.", "De d komt later in het alfabet."],
        uitlegPad: {
          stappen: [{ titel: "Eerste letter kijken", tekst: "appel begint met **a**. banaan met **b**. De a komt het eerst in het alfabet. Dus *appel* staat voorop." }],
          woorden: [{ woord: "woordenboek", uitleg: "Een boek met heel veel woorden, op alfabet." }],
          niveaus: { basis: "a komt vóór b, c en d.", simpeler: "Welke letter komt het eerst: a, b, c of d?", nogSimpeler: "appel" },
        },
      },
      {
        q: "Welke letter hoort op de plek van het vraagteken? **k — l — ? — n**",
        options: ["m", "o", "j", "p"],
        answer: 0,
        wrongHints: [null, "Die komt na de n.", "Die komt vóór de k.", "Die komt veel later."],
        uitlegPad: {
          stappen: [{ titel: "Stukje alfabet", tekst: "k, l, **m**, n, o. Tussen de l en de n zit de m." }],
          niveaus: { basis: "k-l-m-n: de m hoort ertussen.", simpeler: "Zeg maar: k... l... m... n.", nogSimpeler: "m" },
        },
      },
      {
        q: "Hoeveel letters heeft het alfabet?",
        options: ["26", "20", "30", "16"],
        answer: 0,
        wrongHints: [null, "Iets meer — tel de laatste letters ook mee.", "Iets minder.", "Veel meer."],
        uitlegPad: {
          stappen: [{ titel: "Tellen", tekst: "Van a tot en met z zijn het **26** letters." }],
          niveaus: { basis: "Het alfabet heeft 26 letters.", simpeler: "a tot z = 26.", nogSimpeler: "26" },
        },
      },
    ],
  },

  // ─── B. Meervoud ──────────────────────────────────────────
  {
    title: "Meervoud — één boek, twee boeken",
    explanation:
      "**Eén** ding = enkelvoud. **Meer** dingen = meervoud.\n\nMeestal komt er **-en** achter:\n• één boek → twee boek**en**\n• één fiets → twee fiets**en**\n\nSoms komt er **-s** achter:\n• één tafel → twee tafel**s**\n• één jongen → twee jongen**s**\n\n**Let op, soms verandert er iets**:\n• één huis → twee hui**z**en\n• één brief → twee brie**v**en\n\nEn een paar woorden doen gek:\n• één kind → kind**eren**\n• één ei → ei**eren**",
    checks: [
      {
        q: "Wat is het meervoud van **stoel**?",
        options: ["stoelen", "stoels", "stoeles", "stoelden"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — klinkt dat goed?", "Dat is geen woord.", "Daar zit iets te veel in."],
        uitlegPad: {
          stappen: [{ titel: "-en erachter", tekst: "één stoel → twee stoel + **en** = stoelen." }],
          niveaus: { basis: "stoel → stoelen.", simpeler: "Doe -en erachter.", nogSimpeler: "stoelen" },
        },
      },
      {
        q: "Wat is het meervoud van **tafel**?",
        options: ["tafels", "tafelen", "tafelles", "tafel"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — zeg je 'twee tafelen'?", "Dat is geen woord.", "Dat is er maar één."],
        uitlegPad: {
          stappen: [{ titel: "-s erachter", tekst: "één tafel → twee tafel + **s** = tafels. Bij woorden die eindigen op -el, -er of -en komt er vaak een -s." }],
          niveaus: { basis: "tafel → tafels.", simpeler: "Doe -s erachter.", nogSimpeler: "tafels" },
        },
      },
      {
        q: "Wat is het meervoud van **huis**?",
        options: ["huizen", "huisen", "huises", "huizes"],
        answer: 0,
        wrongHints: [null, "Bijna! De s verandert in een andere letter.", "Zeg het hardop — klinkt dat goed?", "Daar zit een letter te veel."],
        uitlegPad: {
          stappen: [{ titel: "De s wordt een z", tekst: "één huis → twee **huizen**. De s verandert in een z. Zo ook: muis → muizen." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "één muis → twee muizen. één neus → twee neuzen." }],
          niveaus: { basis: "huis → huizen (s wordt z).", simpeler: "Zeg maar: twee hui-zen.", nogSimpeler: "huizen" },
        },
      },
      {
        q: "Wat is het meervoud van **kind**?",
        options: ["kinderen", "kinden", "kinds", "kindes"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — zeg je 'twee kinden'?", "Zeg het hardop — zeg je 'twee kinds'?", "Dat is geen woord."],
        uitlegPad: {
          stappen: [{ titel: "Gek woord", tekst: "één kind → twee **kinderen**. Dit is een uitzondering: er komt -eren achter. Net als: één ei → twee eieren." }],
          woorden: [{ woord: "uitzondering", uitleg: "Een woord dat zich niet aan de gewone regel houdt." }],
          niveaus: { basis: "kind → kinderen.", simpeler: "Dit woord doet gek: kind-eren.", nogSimpeler: "kinderen" },
        },
      },
      {
        q: "Welk woord is **enkelvoud** (dus: maar één)?",
        options: ["appel", "appels", "boeken", "fietsen"],
        answer: 0,
        wrongHints: [null, "Daar staat een -s achter — dat zijn er meer.", "Daar staat -en achter — dat zijn er meer.", "Daar staat -en achter — dat zijn er meer."],
        uitlegPad: {
          stappen: [{ titel: "Eén of meer?", tekst: "**appel** = er is er één. appels, boeken en fietsen = er zijn er meer (meervoud)." }],
          woorden: [{ woord: "enkelvoud", uitleg: "Er is er maar één." }, { woord: "meervoud", uitleg: "Er zijn er meer." }],
          niveaus: { basis: "appel is er één, de rest is meer.", simpeler: "Waar staat géén -s of -en achter?", nogSimpeler: "appel" },
        },
      },
    ],
  },

  // ─── C. Verkleinwoorden ───────────────────────────────────
  {
    title: "Verkleinwoorden — alles klein maken",
    explanation:
      "Met een **verkleinwoord** maak je iets klein.\n\nEr komt meestal **-je** achter:\n• huis → huis**je**\n• boek → boek**je**\n\nSoms **-tje**:\n• stoel → stoel**tje**\n• ei → ei**tje**\n\nSoms **-pje**:\n• boom → boom**pje**\n• duim → duim**pje**\n\n**Tip**: zeg het woord hardop. Je hoort vanzelf wat goed klinkt.",
    checks: [
      {
        q: "Wat is het verkleinwoord van **bal**?",
        options: ["balletje", "balje", "balpje", "ballertje"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — klinkt dat goed?", "-pje hoort bij woorden met een m.", "Daar zit iets te veel in."],
        uitlegPad: {
          stappen: [{ titel: "Zeg het hardop", tekst: "bal → **balletje**. Er komt zelfs een extra l en e bij, anders kun je het niet zeggen." }],
          niveaus: { basis: "bal → balletje.", simpeler: "Zeg maar: bal-le-tje.", nogSimpeler: "balletje" },
        },
      },
      {
        q: "Wat is het verkleinwoord van **boom**?",
        options: ["boompje", "boomje", "boomtje", "bometje"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — klinkt dat goed?", "Bijna — na een m klinkt een andere letter beter.", "Dat is geen woord."],
        uitlegPad: {
          stappen: [{ titel: "Na een m: -pje", tekst: "boom eindigt op een **m**. Dan komt er **-pje**: boompje. Zo ook: duim → duimpje, bezem → bezempje." }],
          niveaus: { basis: "boom → boompje.", simpeler: "Na een m komt -pje.", nogSimpeler: "boompje" },
        },
      },
      {
        q: "Wat is het verkleinwoord van **stoel**?",
        options: ["stoeltje", "stoelje", "stoelpje", "stoeletje"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — klinkt dat goed?", "-pje hoort bij woorden met een m.", "Daar zit een letter te veel."],
        uitlegPad: {
          stappen: [{ titel: "Na een l: -tje", tekst: "stoel → **stoeltje**. Zo ook: paal → paaltje, wiel → wieltje. Zeg het hardop, dan hoor je het: stoel-tje klinkt goed." }],
          niveaus: { basis: "stoel → stoeltje.", simpeler: "Zeg maar: stoel-tje.", nogSimpeler: "stoeltje" },
        },
      },
      {
        q: "**Poesje** is het verkleinwoord van…?",
        options: ["poes", "poesen", "poezen", "poest"],
        answer: 0,
        wrongHints: [null, "Dat is geen goed woord — denk aan één poes.", "Dat zijn er meer — we zoeken er één.", "Dat is geen woord."],
        uitlegPad: {
          stappen: [{ titel: "Terugdenken", tekst: "poes**je** = poes + je. Het gewone woord is **poes**." }],
          niveaus: { basis: "poesje komt van poes.", simpeler: "Haal -je weg: poes.", nogSimpeler: "poes" },
        },
      },
    ],
  },

  // ─── D. Tegenstellingen ───────────────────────────────────
  {
    title: "Tegenstellingen — precies andersom",
    explanation:
      "Een **tegenstelling** is precies het omgekeerde.\n\n• groot ↔ **klein**\n• warm ↔ **koud**\n• snel ↔ **langzaam**\n• vol ↔ **leeg**\n• dag ↔ **nacht**\n• blij ↔ **verdrietig**\n\n**Truc**: maak een zinnetje. *De olifant is groot, de muis is…?* Klein! Dan weet je de tegenstelling.",
    checks: [
      {
        q: "Wat is de tegenstelling van **warm**?",
        options: ["koud", "heet", "lauw", "zacht"],
        answer: 0,
        wrongHints: [null, "Dat is juist nóg warmer.", "Dat zit er tussenin.", "Dat gaat over voelen, niet over warm of niet."],
        uitlegPad: {
          stappen: [{ titel: "Andersom denken", tekst: "warm ↔ **koud**. Denk maar: warme chocomel en koude limonade." }],
          niveaus: { basis: "Warm en koud zijn tegenstellingen.", simpeler: "Wat is een ijsje? Niet warm maar…", nogSimpeler: "koud" },
        },
      },
      {
        q: "Wat is de tegenstelling van **vol**?",
        options: ["leeg", "half", "groot", "zwaar"],
        answer: 0,
        wrongHints: [null, "Dat zit er tussenin.", "Dat gaat over hoe groot iets is.", "Dat gaat over hoe zwaar iets is."],
        uitlegPad: {
          stappen: [{ titel: "Andersom denken", tekst: "vol ↔ **leeg**. Een volle beker en een lege beker." }],
          niveaus: { basis: "Vol en leeg zijn tegenstellingen.", simpeler: "Beker zonder drinken = …", nogSimpeler: "leeg" },
        },
      },
      {
        q: "**Snel** hoort bij de haas. Welk woord hoort bij de slak?",
        options: ["langzaam", "vlug", "rap", "druk"],
        answer: 0,
        wrongHints: [null, "Dat betekent juist snel.", "Dat betekent ook snel.", "Dat gaat over veel te doen hebben."],
        uitlegPad: {
          stappen: [{ titel: "Andersom denken", tekst: "snel ↔ **langzaam**. Een haas rent snel, een slak kruipt langzaam." }],
          niveaus: { basis: "Snel en langzaam zijn tegenstellingen.", simpeler: "Een slak is niet snel maar…", nogSimpeler: "langzaam" },
        },
      },
      {
        q: "Welke twee woorden zijn een **tegenstelling**?",
        options: ["dag en nacht", "groot en reusachtig", "blij en vrolijk", "nat en vochtig"],
        answer: 0,
        wrongHints: [null, "Die betekenen bijna hetzelfde.", "Die betekenen bijna hetzelfde.", "Die betekenen bijna hetzelfde."],
        uitlegPad: {
          stappen: [{ titel: "Zelfde of andersom?", tekst: "**dag ↔ nacht** = precies andersom, dus een tegenstelling. De andere paren lijken juist op elkaar (dat heet: ze betekenen bijna hetzelfde)." }],
          niveaus: { basis: "Dag en nacht zijn precies andersom.", simpeler: "Wanneer is het licht? En wanneer donker?", nogSimpeler: "dag en nacht" },
        },
      },
    ],
  },

  // ─── E. Zinnen maken ──────────────────────────────────────
  {
    title: "Zinnen maken — hoofdletter en punt",
    explanation:
      "Een goede zin heeft drie dingen:\n\n1. Hij begint met een **hoofdletter**.\n2. Hij eindigt met een **punt** (.)\n3. De woorden staan in een goede **volgorde**.\n\n• Goed: *De hond rent door de tuin.*\n• Fout: *de hond rent door de tuin* (geen hoofdletter, geen punt)\n\nIs de zin een **vraag**? Dan komt er een **vraagteken** (?):\n• *Waar is de hond?*\n\nRoep je iets heel hard of blij? Dan mag een **uitroepteken** (!):\n• *Kijk uit!*",
    checks: [
      {
        q: "Welke zin is **goed** geschreven?",
        options: ["De kat slaapt.", "de kat slaapt.", "De kat slaapt", "de kat slaapt"],
        answer: 0,
        wrongHints: [null, "Kijk naar de eerste letter.", "Kijk naar het einde van de zin.", "Er missen twee dingen."],
        uitlegPad: {
          stappen: [{ titel: "Checklist", tekst: "Hoofdletter aan het begin? ✓ Punt aan het eind? ✓ → **De kat slaapt.** is goed." }],
          niveaus: { basis: "Hoofdletter + punt = goede zin.", simpeler: "Begin groot, eindig met een punt.", nogSimpeler: "De kat slaapt." },
        },
      },
      {
        q: "Wat hoort er aan het eind van deze zin? **Hoe heet jouw juf of meester**",
        options: ["een vraagteken (?)", "een punt (.)", "niets", "een komma (,)"],
        answer: 0,
        wrongHints: [null, "Dit is niet zomaar een zin — er wordt iets gevraagd.", "Elke zin eindigt met een teken.", "Een komma is voor een rustje midden in de zin."],
        uitlegPad: {
          stappen: [{ titel: "Vraag of niet?", tekst: "De zin begint met **Hoe** — er wordt iets gevraagd. Een vraag eindigt met een **vraagteken (?)**." }],
          voorbeelden: [{ type: "voorbeeld", tekst: "Waar woon jij? Hoe oud ben je? Wat eet je het liefst?" }],
          niveaus: { basis: "Een vraag krijgt een vraagteken.", simpeler: "Je vraagt iets → ?", nogSimpeler: "?" },
        },
      },
      {
        q: "Zet de woorden in de goede volgorde: **rent — hond — de — hard**",
        options: ["De hond rent hard.", "Hond de rent hard.", "Rent de hond hard.", "Hard hond de rent."],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — klinkt dat goed?", "Zo begint een vraag, geen gewone zin.", "Zeg het hardop — klinkt dat goed?"],
        uitlegPad: {
          stappen: [{ titel: "Hardop zeggen", tekst: "Zeg de zin hardop. **De hond rent hard.** klinkt goed: eerst wie (de hond), dan wat hij doet (rent hard)." }],
          niveaus: { basis: "Eerst wie, dan wat die doet.", simpeler: "Wie rent er? De hond. Dus: De hond rent…", nogSimpeler: "De hond rent hard." },
        },
      },
      {
        q: "Welk woord in deze zin moet een **hoofdletter** hebben? **gisteren ging lisa naar school.**",
        options: ["gisteren én lisa", "alleen school", "alleen ging", "geen enkel woord"],
        answer: 0,
        wrongHints: [null, "Denk aan het begin van de zin — en aan namen.", "Kijk naar het eerste woord van de zin.", "Er zijn er zeker twee."],
        uitlegPad: {
          stappen: [{ titel: "Twee regels", tekst: "1. Het **eerste woord** van de zin krijgt een hoofdletter: Gisteren. 2. Een **naam** krijgt altijd een hoofdletter: Lisa. Dus: *Gisteren ging Lisa naar school.*" }],
          theorie: "Namen van mensen, plaatsen en landen krijgen altijd een hoofdletter, waar ze ook in de zin staan.",
          niveaus: { basis: "Eerste woord + namen = hoofdletter.", simpeler: "De zin begint groot, en Lisa is een naam.", nogSimpeler: "gisteren én lisa" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const taalWoordenZinnenG4 = {
  id: "taal-woorden-zinnen-g4",
  title: "Taal — woorden en zinnen (groep 4)",
  emoji: "✏️",
  level: "groep4-5",
  subject: "taal",
  referentieNiveau: "po-1F",
  sloThema: "Taal — alfabet, meervoud, verkleinwoorden, tegenstellingen, zinsbouw groep 4",
  prerequisites: [],
  intro:
    "Taal voor groep 4: het alfabet, meervoud (boek → boeken), verkleinwoorden (boompje), tegenstellingen (warm ↔ koud) en goede zinnen maken. ~15 min.",
  triggerKeywords: [
    "alfabet", "meervoud", "verkleinwoord", "verkleinwoorden",
    "tegenstelling", "tegenstellingen", "hoofdletter", "punt", "vraagteken",
    "zinnen maken", "groep 4", "taal groep 4",
  ],
  chapters,
  steps,
};

export default taalWoordenZinnenG4;

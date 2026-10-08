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
      "Het **alfabet** is alle letters op een rij:\n\n**a b c d e f g h i j k l m n o p q r s t u v w x y z**\n\nDat zijn er 26.\n\n**Waarom handig?**\n• Woorden in een woordenboek staan op alfabet.\n• Namen op een lijst staan op alfabet.\n\n**Zo zoek je**: kijk naar de **eerste letter** van het woord. De b komt vóór de k. Dus *bal* staat vóór *kat*.",
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke letter komt **net vóór de h**?",
        options: ["g", "i", "j", "k"],
        answer: 0,
        wrongHints: [null, "Die komt na de h.", null, "Die komt een stuk later."],
        uitlegPad: {
          stappen: [
            {
              titel: "Zeg het rijtje",
              tekst: "e, f, **g, h**, i. Net vóór de h komt de g.",
            },
          ],
          niveaus: {
            basis: "Net vóór de h staat de g.",
            simpeler: "Zeg maar: f... g... h!",
            nogSimpeler: "g",
          },
        },
      },
      {
        q: "Welk woord staat **het laatst** in het woordenboek?",
        options: ["zon", "maan", "ster", "regen"],
        answer: 0,
        wrongHints: [
          null,
          "De m komt vrij vroeg in het alfabet.",
          "Die komt laat, maar er is er één die nog later komt.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste letter kijken",
              tekst: "zon begint met **z**. De z is de allerlaatste letter van het alfabet. Dus *zon* staat achteraan.",
            },
          ],
          woorden: [
            {
              woord: "woordenboek",
              uitleg: "Een boek met heel veel woorden, op alfabet.",
            },
          ],
          niveaus: {
            basis: "De z komt na de m, r en s.",
            simpeler: "Welke letter komt het laatst: z, m, s of r?",
            nogSimpeler: "zon",
          },
        },
      },
      {
        q: "Welke rij letters staat **goed** op alfabet?",
        options: ["a – b – c", "a – c – b", "b – a – c", "c – b – a"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de laatste twee letters.",
          "Welke letter komt helemaal vooraan in het alfabet?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zeg het rijtje",
              tekst: "Het alfabet begint zo: **a, b, c**. Eerst de a, dan de b, dan de c.",
            },
          ],
          niveaus: {
            basis: "a, b, c is de goede volgorde.",
            simpeler: "Zeg maar: a... b... c!",
            nogSimpeler: "a – b – c",
          },
        },
      },
      {
        q: "Wat is de **laatste** letter van het alfabet?",
        options: ["z", "y", "x", "a"],
        answer: 0,
        wrongHints: [null, "Bijna — er komt nog één letter na.", null, "Dat is juist de eerste letter."],
        uitlegPad: {
          stappen: [
            {
              titel: "Het einde van het rijtje",
              tekst: "..., v, w, x, y, **z**. Na de z komt er niets meer.",
            },
          ],
          niveaus: {
            basis: "Het alfabet eindigt met de z.",
            simpeler: "Zeg maar: x... y... z!",
            nogSimpeler: "z",
          },
        },
      },
      {
        q: "Op de klassenlijst staan de namen op alfabet. Welke naam staat **bovenaan**?",
        options: ["Daan", "Fleur", "Sem", "Noor"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de eerste letter: komt de f vóór de d?",
          null,
          "De n komt later in het alfabet.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerste letter kijken",
              tekst: "Daan begint met **D**, Fleur met F, Noor met N en Sem met S. De d komt het eerst in het alfabet. Dus *Daan* staat bovenaan.",
            },
          ],
          niveaus: {
            basis: "d komt vóór f, n en s.",
            simpeler: "Welke letter komt het eerst: d, f, n of s?",
            nogSimpeler: "Daan",
          },
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
        wrongHints: [null, "Bijna! De s verandert in een andere letter.", "Zeg het hardop — klinkt dat goed?", "Bijna — maar het meervoud eindigt op -en."],
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is het meervoud van **hond**?",
        options: ["honden", "honds", "hondes", "hondens"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het hardop — zeg je 'twee honds'?",
          "Dat is geen woord.",
          "Daar zit iets te veel in.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "-en erachter",
              tekst: "één hond → twee hond + **en** = honden.",
            },
          ],
          niveaus: {
            basis: "hond → honden.",
            simpeler: "Doe -en erachter.",
            nogSimpeler: "honden",
          },
        },
      },
      {
        q: "Wat is het meervoud van **jongen**?",
        options: ["jongens", "jongenen", "jongense", "jongen"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het hardop — zeg je 'twee jongenen'?",
          "Dat is geen woord.",
          "Dat is er maar één.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "-s erachter",
              tekst: "één jongen → twee jongen + **s** = jongens. Bij woorden die eindigen op -en komt er vaak een -s.",
            },
          ],
          niveaus: {
            basis: "jongen → jongens.",
            simpeler: "Doe -s erachter.",
            nogSimpeler: "jongens",
          },
        },
      },
      {
        q: "Wat is het meervoud van **brief**?",
        options: ["brieven", "briefen", "briefs", "brievs"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna! De f verandert in een andere letter.",
          "Zeg het hardop — klinkt dat goed?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "De f wordt een v",
              tekst: "één brief → twee **brieven**. De f verandert in een v, en er komt -en achter.",
            },
          ],
          niveaus: {
            basis: "brief → brieven (f wordt v).",
            simpeler: "Zeg maar: twee brie-ven.",
            nogSimpeler: "brieven",
          },
        },
      },
      {
        q: "Wat is het meervoud van **ei**?",
        options: ["eieren", "eien", "eiens", "eiers"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het hardop — zeg je 'twee eien'?",
          "Dat is geen woord.",
          "Dit woord doet gek — er komt iets anders achter.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gek woord",
              tekst: "één ei → twee **eieren**. Dit is een uitzondering: er komt -eren achter. Net als: één kind → twee kinderen.",
            },
          ],
          woorden: [
            {
              woord: "uitzondering",
              uitleg: "Een woord dat zich niet aan de gewone regel houdt.",
            },
          ],
          niveaus: {
            basis: "ei → eieren.",
            simpeler: "Dit woord doet gek: ei-e-ren.",
            nogSimpeler: "eieren",
          },
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is het verkleinwoord van **huis**?",
        options: ["huisje", "huistje", "huispje", "huizje"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — klinkt dat goed?", "-pje hoort bij woorden met een m.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "-je erachter",
              tekst: "huis → huis + **je** = huisje. Zeg het hardop: huis-je klinkt goed.",
            },
          ],
          niveaus: {
            basis: "huis → huisje.",
            simpeler: "Doe -je erachter.",
            nogSimpeler: "huisje",
          },
        },
      },
      {
        q: "Wat is het verkleinwoord van **duim**?",
        options: ["duimpje", "duimje", "duimtje", "duimetje"],
        answer: 0,
        wrongHints: [
          null,
          "Bijna — na een m klinkt een andere letter beter.",
          "Zeg het hardop — klinkt dat goed?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Na een m: -pje",
              tekst: "duim eindigt op een **m**. Dan komt er **-pje**: duimpje. Zo ook: boom → boompje.",
            },
          ],
          niveaus: {
            basis: "duim → duimpje.",
            simpeler: "Na een m komt -pje.",
            nogSimpeler: "duimpje",
          },
        },
      },
      {
        q: "Wat is het verkleinwoord van **ei**?",
        options: ["eitje", "eije", "eipje", "eietje"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het hardop — klinkt dat goed?",
          "-pje hoort bij woorden met een m.",
          "Daar zit iets te veel in.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "-tje erachter",
              tekst: "ei → ei + **tje** = eitje. Zeg het hardop: ei-tje klinkt goed.",
            },
          ],
          niveaus: {
            basis: "ei → eitje.",
            simpeler: "Zeg maar: ei-tje.",
            nogSimpeler: "eitje",
          },
        },
      },
      {
        q: "Wat is het verkleinwoord van **boek**?",
        options: ["boekje", "boektje", "boekpje", "boekeje"],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — klinkt dat goed?", null, "Daar zit een letter te veel."],
        uitlegPad: {
          stappen: [
            {
              titel: "-je erachter",
              tekst: "boek → boek + **je** = boekje. Zeg het hardop: boek-je klinkt goed.",
            },
          ],
          niveaus: {
            basis: "boek → boekje.",
            simpeler: "Doe -je erachter.",
            nogSimpeler: "boekje",
          },
        },
      },
      {
        q: "Wat is het verkleinwoord van **wiel**?",
        options: ["wieltje", "wielje", "wielpje", "wieletje"],
        answer: 0,
        wrongHints: [
          null,
          "Zeg het hardop — klinkt dat goed?",
          "-pje hoort bij woorden met een m.",
          "Daar zit een letter te veel.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Na een l: -tje",
              tekst: "wiel → **wieltje**. Zo ook: stoel → stoeltje. Zeg het hardop, dan hoor je het: wiel-tje klinkt goed.",
            },
          ],
          niveaus: {
            basis: "wiel → wieltje.",
            simpeler: "Zeg maar: wiel-tje.",
            nogSimpeler: "wieltje",
          },
        },
      },
      {
        q: "Welk woord is een **verkleinwoord**?",
        options: ["bloempje", "bloemen", "bloem", "bloemkool"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn er meer, maar zijn ze ook klein gemaakt?",
          null,
          "Kijk naar het einde van het woord: staat er -je, -tje of -pje?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk naar het eind",
              tekst: "bloem**pje** eindigt op **-pje**. Dan is het een verkleinwoord: een kleine bloem.",
            },
          ],
          niveaus: {
            basis: "bloempje = een kleine bloem.",
            simpeler: "Welk woord eindigt op -je?",
            nogSimpeler: "bloempje",
          },
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
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is de tegenstelling van **groot**?",
        options: ["klein", "lang", "zwaar", "breed"],
        answer: 0,
        wrongHints: [null, "Dat gaat over hoe lang iets is.", null, "Dat gaat over hoe breed iets is."],
        uitlegPad: {
          stappen: [
            {
              titel: "Andersom denken",
              tekst: "groot ↔ **klein**. De olifant is groot, de muis is klein.",
            },
          ],
          niveaus: {
            basis: "Groot en klein zijn tegenstellingen.",
            simpeler: "De olifant is groot, de muis is…",
            nogSimpeler: "klein",
          },
        },
      },
      {
        q: "Wat is de tegenstelling van **blij**?",
        options: ["verdrietig", "vrolijk", "lief", "moe"],
        answer: 0,
        wrongHints: [null, "Dat betekent bijna hetzelfde als blij.", null, "Dat gaat over slaap nodig hebben."],
        uitlegPad: {
          stappen: [
            {
              titel: "Andersom denken",
              tekst: "blij ↔ **verdrietig**. Op je verjaardag ben je blij. Als je knuffel kwijt is, ben je verdrietig.",
            },
          ],
          niveaus: {
            basis: "Blij en verdrietig zijn tegenstellingen.",
            simpeler: "Je huilt. Je bent niet blij maar…",
            nogSimpeler: "verdrietig",
          },
        },
      },
      {
        q: "Wat is de tegenstelling van **nat**?",
        options: ["droog", "vochtig", "koud", "schoon"],
        answer: 0,
        wrongHints: [null, "Dat betekent bijna hetzelfde als nat.", "Dat gaat over warm of niet.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Andersom denken",
              tekst: "nat ↔ **droog**. Na het zwemmen ben je nat. Na het afdrogen ben je droog.",
            },
          ],
          niveaus: {
            basis: "Nat en droog zijn tegenstellingen.",
            simpeler: "Een handdoek maakt je niet nat maar…",
            nogSimpeler: "droog",
          },
        },
      },
      {
        q: "Wat is de tegenstelling van **open**?",
        options: ["dicht", "half", "stil", "kapot"],
        answer: 0,
        wrongHints: [null, "Dat zit er tussenin.", "Dat gaat over geluid.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Andersom denken",
              tekst: "open ↔ **dicht**. Een open deur en een dichte deur.",
            },
          ],
          niveaus: {
            basis: "Open en dicht zijn tegenstellingen.",
            simpeler: "Je doet de deur niet open maar…",
            nogSimpeler: "dicht",
          },
        },
      },
      {
        q: "Wat is de tegenstelling van **hoog**?",
        options: ["laag", "lang", "dik", "smal"],
        answer: 0,
        wrongHints: [null, "Dat gaat over hoe lang iets is.", "Dat gaat over hoe dik iets is.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Andersom denken",
              tekst: "hoog ↔ **laag**. Een vogel vliegt hoog in de lucht. Een slak kruipt laag over de grond.",
            },
          ],
          niveaus: {
            basis: "Hoog en laag zijn tegenstellingen.",
            simpeler: "Niet bovenin de lucht, maar onderaan bij de grond: …",
            nogSimpeler: "laag",
          },
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
        q: "Welke woorden in deze zin moeten een **hoofdletter** hebben? **gisteren ging lisa naar school.**",
        options: ["gisteren én lisa", "alleen school", "alleen ging", "geen enkel woord"],
        answer: 0,
        wrongHints: [null, "Denk aan het begin van de zin — en aan namen.", "Kijk naar het eerste woord van de zin.", "Er zijn er zeker twee."],
        uitlegPad: {
          stappen: [{ titel: "Twee regels", tekst: "1. Het **eerste woord** van de zin krijgt een hoofdletter: Gisteren. 2. Een **naam** krijgt altijd een hoofdletter: Lisa. Dus: *Gisteren ging Lisa naar school.*" }],
          theorie: "Namen van mensen, plaatsen en landen krijgen altijd een hoofdletter, waar ze ook in de zin staan.",
          niveaus: { basis: "Eerste woord + namen = hoofdletter.", simpeler: "De zin begint groot, en Lisa is een naam.", nogSimpeler: "gisteren én lisa" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke zin is een **vraag**?",
        options: ["Waar is mijn jas?", "Mijn jas is rood.", "Pak je jas!", "Ik zoek mijn jas."],
        answer: 0,
        wrongHints: [null, "Wordt hier iets gevraagd?", "Hier roept iemand iets.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vraag of niet?",
              tekst: "**Waar is mijn jas?** — hier wordt iets gevraagd. Daarom staat er een **vraagteken (?)** aan het eind.",
            },
          ],
          voorbeelden: [
            {
              type: "voorbeeld",
              tekst: "Waar woon jij? Hoe oud ben je? Waar is de hond?",
            },
          ],
          niveaus: {
            basis: "Een vraag eindigt met een vraagteken.",
            simpeler: "Zoek de zin met een ?",
            nogSimpeler: "Waar is mijn jas?",
          },
        },
      },
      {
        q: "Zet de woorden in de goede volgorde: **school — naar — ik — fiets**",
        options: [
          "Ik fiets naar school.",
          "Naar ik fiets school.",
          "School fiets ik naar.",
          "Ik naar school fiets.",
        ],
        answer: 0,
        wrongHints: [null, "Zeg het hardop — klinkt dat goed?", null, "Zeg het hardop — klinkt dat goed?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Hardop zeggen",
              tekst: "Zeg de zin hardop. **Ik fiets naar school.** klinkt goed: eerst wie (ik), dan wat ik doe (fiets naar school).",
            },
          ],
          niveaus: {
            basis: "Eerst wie, dan wat die doet.",
            simpeler: "Wie fietst er? Ik. Dus: Ik fiets…",
            nogSimpeler: "Ik fiets naar school.",
          },
        },
      },
      {
        q: "Waarmee begint een zin **altijd**?",
        options: ["met een hoofdletter", "met een punt", "met een vraagteken", "met een komma"],
        answer: 0,
        wrongHints: [
          null,
          "Een punt staat juist aan het eind.",
          "Een vraagteken staat aan het eind van een vraag.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin groot",
              tekst: "Een zin begint altijd met een **hoofdletter**: *De hond rent door de tuin.*",
            },
          ],
          niveaus: {
            basis: "Een zin begint met een hoofdletter.",
            simpeler: "Begin groot!",
            nogSimpeler: "met een hoofdletter",
          },
        },
      },
      {
        q: "Wat is er **fout** aan deze zin? **mijn broer speelt buiten.**",
        options: [
          "Er mist een hoofdletter.",
          "Er mist een punt.",
          "Er mist een vraagteken.",
          "Er is niets fout.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kijk eens naar het einde: staat daar al iets?",
          null,
          "Kijk goed naar de eerste letter.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Checklist",
              tekst: "Hoofdletter aan het begin? ✗ Punt aan het eind? ✓ → Het moet zijn: **Mijn broer speelt buiten.**",
            },
          ],
          niveaus: {
            basis: "Een zin begint met een hoofdletter.",
            simpeler: "Kijk naar de eerste letter: m of M?",
            nogSimpeler: "Er mist een hoofdletter.",
          },
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

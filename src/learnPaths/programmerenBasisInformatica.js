// Leerpad: Programmeren — de basis — Informatica HAVO/VWO
// Variabelen + datatypes, condities (if/else), herhaling (for/while),
// functies + debuggen. Voorbeelden in Python-stijl. 4 stappen.

const stepEmojis = ["📦", "🔀", "🔁", "🧩"];

const chapters = [
  { letter: "A", title: "Variabelen & datatypes", emoji: "📦", from: 0, to: 0 },
  { letter: "B", title: "Condities (if/else)", emoji: "🔀", from: 1, to: 1 },
  { letter: "C", title: "Herhaling (loops)", emoji: "🔁", from: 2, to: 2 },
  { letter: "D", title: "Functies & debuggen", emoji: "🧩", from: 3, to: 3 },
];

const steps = [
  // ─── A. Variabelen & datatypes ────────────────────────────
  {
    title: "Variabelen & datatypes",
    explanation:
      "Programmeren = de computer in een **programmeertaal** (zoals **Python**) stap voor stap vertellen wat hij moet doen. We gebruiken Python-stijl omdat die goed leesbaar is.\n\n**Variabele = een doosje met een naam:**\nEen **variabele** bewaart een waarde onder een naam, zodat je 'm later kunt gebruiken of veranderen.\n```\nleeftijd = 12\nnaam = \"Sara\"\nleeftijd = leeftijd + 1   # nu 13\n```\nDe `=` is hier **toekennen** ('stop de waarde rechts in de variabele links'), niet 'is gelijk aan' in wiskundige zin.\n\n**Datatypes — soorten waarden:**\n• **int** (integer) — een geheel getal: `12`, `-3`\n• **float** — een kommagetal: `3.14`, `7.5`\n• **string (str)** — tekst, tussen aanhalingstekens: `\"hallo\"`\n• **boolean (bool)** — waar of onwaar: `True` / `False`\n\n**Waarom types?** De computer behandelt ze anders:\n• `3 + 4` (getallen) = **7**\n• `\"3\" + \"4\"` (tekst!) = **\"34\"** (tekst wordt aan elkaar geplakt)\n\n**Input/output:**\n• `print(\"Hallo\")` → toont iets op het scherm.\n• `naam = input(\"Wat is je naam? \")` → vraagt iets aan de gebruiker (komt binnen als **string**).",
    checks: [
      {
        q: "Wat is een **variabele**?",
        options: ["Een benoemd 'doosje' dat een waarde bewaart", "Een foutmelding", "Een soort scherm", "Een internetverbinding"],
        answer: 0,
        wrongHints: [null, "Een variabele is normaal, geen fout.", "Het heeft niets met je beeldscherm te maken.", "Geen netwerk — een opslagplek in het programma."],
        uitlegPad: {
          stappen: [{ titel: "Een doosje met naam", tekst: "Een **variabele** bewaart een waarde onder een **naam** (`leeftijd = 12`), zodat je 'm later kunt gebruiken of wijzigen. De `=` betekent **toekennen** (waarde rechts in variabele links), niet 'is gelijk aan' zoals in wiskunde." }],
          niveaus: { basis: "Doosje met een waarde.", simpeler: "Variabele = doosje", nogSimpeler: "A." },
        },
      },
      {
        q: "Welk datatype is **`True` / `False`**?",
        options: ["Boolean", "Integer", "String", "Float"],
        answer: 0,
        wrongHints: [null, "Een integer is een geheel getal.", "Een string is tekst.", "Een float is een kommagetal."],
        uitlegPad: {
          stappen: [{ titel: "Waar of onwaar", tekst: "Een **boolean** (bool) kan maar twee waarden hebben: **True** (waar) of **False** (onwaar). Booleans zijn het resultaat van vergelijkingen (`5 > 3` → True) en sturen keuzes (if/else) aan. int = geheel getal, float = kommagetal, string = tekst." }],
          niveaus: { basis: "Boolean.", simpeler: "True/False = boolean", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is in Python de uitkomst van **`\"3\" + \"4\"`** (let op de aanhalingstekens)?",
        options: ["\"34\" (tekst geplakt)", "7", "12", "Een foutmelding"],
        answer: 0,
        wrongHints: [null, "7 zou het zijn bij getallen: 3 + 4.", "12 is vermenigvuldigen, en het zijn geen getallen.", "Het mag gewoon — strings plakken aan elkaar."],
        uitlegPad: {
          stappen: [{ titel: "Tekst plakt, getallen rekenen", tekst: "Met aanhalingstekens zijn `\"3\"` en `\"4\"` **strings (tekst)**. `+` plakt tekst aan elkaar → **\"34\"**. Zónder aanhalingstekens (`3 + 4`) zijn het getallen → **7**. Daarom is het **datatype** zo belangrijk." }],
          niveaus: { basis: "\"34\".", simpeler: "Tekst + tekst = plakken", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Condities ─────────────────────────────────────────
  {
    title: "Condities — if / elif / else",
    explanation:
      "Met een **conditie** laat je het programma **kiezen** op basis van een voorwaarde (de selectie-bouwsteen, nu in echte code).\n```\nleeftijd = 16\nif leeftijd >= 18:\n    print(\"volwassen\")\nelif leeftijd >= 12:\n    print(\"tiener\")\nelse:\n    print(\"kind\")\n```\n• **if** — als de voorwaarde **True** is, doe dit blok.\n• **elif** (else-if) — anders, als deze voorwaarde geldt…\n• **else** — in alle andere gevallen.\n\nIn Python hoort bij een blok een **dubbele punt** `:` en **inspringen** (indentatie). Het ingesprongen deel hoort bij de if.\n\n**Vergelijkings-operatoren** (geven een boolean terug):\n• `==` is gelijk aan · `!=` is niet gelijk aan\n• `>` groter dan · `<` kleiner dan · `>=` · `<=`\n\n⚠️ Let op: **`=`** is **toekennen**, **`==`** is **vergelijken**. Een veelgemaakte beginnersfout.\n\n**Combineren** met logische operatoren:\n• `and` — beide moeten waar zijn\n• `or` — minstens één waar\n• `not` — keert om\n```\nif leeftijd >= 12 and leeftijd < 20:\n    print(\"tiener\")\n```",
    checks: [
      {
        q: "Wat is het verschil tussen **`=`** en **`==`** in code?",
        options: ["= kent toe, == vergelijkt", "Ze zijn hetzelfde", "= vergelijkt, == kent toe", "== is alleen voor tekst"],
        answer: 0,
        wrongHints: [null, "Ze doen echt iets verschillends.", "Net andersom.", "== werkt voor getallen én tekst."],
        uitlegPad: {
          stappen: [{ titel: "Toekennen vs vergelijken", tekst: "**`=`** kent een waarde **toe** (`x = 5`). **`==`** **vergelijkt** en geeft een boolean (`x == 5` → True/False). In een `if` gebruik je dus `==`. Per ongeluk `=` schrijven in een vergelijking is een klassieke beginnersfout." }],
          niveaus: { basis: "= toekennen, == vergelijken.", simpeler: "== is vergelijken", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer wordt het blok onder **`if leeftijd >= 18:`** uitgevoerd?",
        options: ["Als de voorwaarde True is (leeftijd 18 of hoger)", "Altijd", "Nooit", "Alleen bij tekst"],
        answer: 0,
        wrongHints: [null, "Niet altijd — alleen als de voorwaarde klopt.", "Het wordt wél uitgevoerd als de voorwaarde waar is.", "Het gaat om de getal-voorwaarde, niet om tekst."],
        uitlegPad: {
          stappen: [{ titel: "Alleen bij True", tekst: "Een **if** voert zijn (ingesprongen) blok alleen uit als de voorwaarde **True** is. Bij `leeftijd >= 18` gebeurt dat vanaf 18. Is het False, dan kijkt Python naar **elif**/**else**." }],
          niveaus: { basis: "Als de voorwaarde True is.", simpeler: "if = alleen bij waar", nogSimpeler: "A." },
        },
      },
      {
        q: "`if leeftijd >= 12 **and** leeftijd < 20:` is waar als…",
        options: ["Beide voorwaarden waar zijn (12 t/m 19)", "Eén van beide waar is", "Geen van beide waar is", "Altijd"],
        answer: 0,
        wrongHints: [null, "Dat zou 'or' zijn, niet 'and'.", "Dan is het juist False.", "Niet altijd — alleen in het bereik 12-19."],
        uitlegPad: {
          stappen: [{ titel: "and = beide", tekst: "**and** vereist dat **beide** voorwaarden waar zijn. `leeftijd >= 12 and leeftijd < 20` is alleen True voor 12 t/m 19. **or** zou genoeg hebben aan één; **not** keert een waarde om." }],
          niveaus: { basis: "Beide waar.", simpeler: "and = beide", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── C. Herhaling ─────────────────────────────────────────
  {
    title: "Herhaling — for & while",
    explanation:
      "Met een **loop** laat je code **herhalen** zonder alles los over te typen.\n\n**for-loop — een vast aantal keren / over een rij:**\n```\nfor i in range(5):\n    print(i)        # 0 1 2 3 4\n```\n`range(5)` geeft 0 t/m 4. Je kunt ook over een lijst lopen:\n```\nnamen = [\"Sara\", \"Tim\", \"Noor\"]\nfor naam in namen:\n    print(\"Hoi\", naam)\n```\n\n**while-loop — zolang een voorwaarde geldt:**\n```\nteller = 1\nwhile teller <= 3:\n    print(teller)\n    teller = teller + 1\n```\nGebruik je een **while** als je niet vooraf weet hoe vaak (bv. 'zolang het antwoord fout is').\n\n⚠️ **Oneindige lus:** vergeet je de teller op te hogen, dan wordt de voorwaarde nooit False en stopt het programma **nooit**:\n```\nwhile teller <= 3:\n    print(teller)   # teller wordt nooit groter → loopt eeuwig\n```\n\n**Vuistregel:**\n• Weet je het **aantal** (of loop je over een lijst)? → **for**.\n• Hangt het van een **voorwaarde** af? → **while** (en zorg dat die ooit False wordt).",
    checks: [
      {
        q: "Wat print `for i in range(5): print(i)`?",
        options: ["0 1 2 3 4", "1 2 3 4 5", "5 keer het getal 5", "Niets"],
        answer: 0,
        wrongHints: [null, "range begint bij 0, niet bij 1, en stopt vóór 5.", "range(5) telt niet 5 keer 5.", "Er wordt wel degelijk geprint."],
        uitlegPad: {
          stappen: [{ titel: "range begint bij 0", tekst: "`range(5)` levert **0, 1, 2, 3, 4** (vijf getallen, beginnend bij 0, tot maar niet inclusief 5). De for-loop print ze één voor één: **0 1 2 3 4**." }],
          niveaus: { basis: "0 t/m 4.", simpeler: "range(5) = 0-4", nogSimpeler: "A." },
        },
      },
      {
        q: "Wanneer kies je een **while**-loop in plaats van een for-loop?",
        options: ["Als je niet vooraf weet hoe vaak (afhankelijk van een voorwaarde)", "Als je over een lijst loopt", "Als je precies 10 keer iets doet", "while bestaat niet"],
        answer: 0,
        wrongHints: [null, "Over een lijst lopen is juist een for-loop.", "Een vast aantal keren past beter bij for.", "while bestaat zeker wel."],
        uitlegPad: {
          stappen: [{ titel: "Onbekend aantal → while", tekst: "Een **while** herhaalt **zolang een voorwaarde waar is** — handig als je vooraf niet weet hoe vaak (bv. 'zolang het antwoord fout is'). Weet je het aantal of loop je over een lijst, kies dan **for**." }],
          niveaus: { basis: "Onbekend aantal.", simpeler: "while = zolang voorwaarde", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat gebeurt er als je in een while-loop de **teller niet ophoogt**?",
        options: ["Een oneindige lus — het stopt nooit", "Het programma gaat sneller", "De loop draait precies één keer", "Niets, dat mag gewoon"],
        answer: 0,
        wrongHints: [null, "Sneller? Nee — het loopt juist eindeloos.", "Hij draait juist eindeloos, niet één keer.", "Het is een echte bug."],
        uitlegPad: {
          stappen: [{ titel: "Voorwaarde wordt nooit False", tekst: "Als de teller niet verandert, blijft de while-voorwaarde **altijd waar** → een **oneindige lus**: het programma stopt nooit (en loopt vast). Zorg dus dat er in de loop iets gebeurt waardoor de voorwaarde ooit **False** wordt." }],
          niveaus: { basis: "Oneindige lus.", simpeler: "Geen ophoging = eeuwig", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── D. Functies & debuggen ───────────────────────────────
  {
    title: "Functies & debuggen",
    explanation:
      "**Functies** maken code overzichtelijk en herbruikbaar: je geeft een stukje code een naam en roept het aan wanneer je het nodig hebt.\n```\ndef begroet(naam):\n    print(\"Hoi\", naam)\n\nbegroet(\"Sara\")     # Hoi Sara\nbegroet(\"Tim\")      # Hoi Tim\n```\n• **def** definieert de functie.\n• **naam** tussen haakjes is een **parameter** (input).\n• Je **roept** de functie **aan** met een waarde (een argument).\n\n**return — een uitkomst teruggeven:**\n```\ndef kwadraat(x):\n    return x * x\n\nresultaat = kwadraat(5)   # 25\n```\n`return` geeft een waarde **terug** die je verder kunt gebruiken (anders dan `print`, dat alleen toont).\n\n**Waarom functies?**\n• **DRY** — Don't Repeat Yourself: schrijf logica één keer, gebruik 'm overal.\n• Fout? Eén plek aanpassen.\n• Code wordt leesbaar (kleine, benoemde stukjes).\n\n**Debuggen — fouten opsporen:**\n• **Syntaxfout** — verkeerde 'grammatica' (vergeten `:` of haakje) → programma start niet.\n• **Logische fout (bug)** — het draait wél, maar geeft het **verkeerde** antwoord. Lastiger te vinden.\n• Tip: zet `print()`-regels tussendoor om te zien wat de variabelen dóén, en test met bekende voorbeelden.",
    checks: [
      {
        q: "Waarvoor gebruik je een **functie**?",
        options: ["Een stukje code benoemen en herbruiken", "De computer afsluiten", "Het scherm groter maken", "Internet sneller maken"],
        answer: 0,
        wrongHints: [null, "Een functie sluit niets af.", "Niets met schermgrootte.", "Niets met internetsnelheid."],
        uitlegPad: {
          stappen: [{ titel: "Eén keer schrijven, vaak gebruiken", tekst: "Een **functie** geeft een stukje code een **naam**, zodat je het kunt **hergebruiken** (met `def …` definiëren, daarna aanroepen). Voordeel: schrijf logica één keer (DRY), pas fouten op één plek aan, en je code blijft leesbaar." }],
          niveaus: { basis: "Code benoemen + hergebruiken.", simpeler: "Functie = herbruikbaar blok", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat doet **`return`** in een functie?",
        options: ["Geeft een waarde terug om verder te gebruiken", "Print iets op het scherm", "Stopt de computer", "Maakt een variabele"],
        answer: 0,
        wrongHints: [null, "Tonen is `print` — return geeft een waarde terug (zonder per se te tonen).", "Het stopt alleen de functie, niet de computer.", "Een variabele maken doe je met `=`."],
        uitlegPad: {
          stappen: [{ titel: "Terruggeven ≠ printen", tekst: "**return** geeft een **uitkomst terug** uit de functie, die je daarna kunt opslaan of verder gebruiken (`resultaat = kwadraat(5)`). Dat is anders dan **print**, dat alleen iets op het scherm toont en geen waarde teruggeeft." }],
          niveaus: { basis: "Geeft een waarde terug.", simpeler: "return = waarde terug", nogSimpeler: "A." },
        },
      },
      {
        q: "Het programma start niet door een vergeten dubbele punt. Wat voor fout is dat?",
        options: ["Een syntaxfout", "Een logische fout", "Een netwerkfout", "Geen fout"],
        answer: 0,
        wrongHints: [null, "Een logische fout draait wél, maar geeft een fout antwoord.", "Het ligt niet aan het netwerk.", "Het is zeker een fout — het start niet."],
        uitlegPad: {
          stappen: [{ titel: "Syntax = grammatica", tekst: "Een **syntaxfout** is een fout in de 'grammatica' van de code (vergeten `:`, haakje of dubbele punt) — het programma **start niet**. Een **logische fout (bug)** draait wél, maar geeft het **verkeerde** antwoord; die spoor je op met test-voorbeelden en tussentijdse `print()`-regels." }],
          niveaus: { basis: "Syntaxfout.", simpeler: "Start niet = syntaxfout", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const programmerenBasisInformatica = {
  id: "programmeren-basis-informatica",
  title: "Programmeren — de basis (Informatica)",
  emoji: "📦",
  level: "havo4-5-vwo",
  subject: "informatica",
  referentieNiveau: "havo-vwo-informatica-domein-programmeren",
  sloThema: "Informatica HAVO/VWO — leren programmeren: variabelen, condities, herhaling en functies (Python-stijl)",
  prerequisites: [
    { id: "algoritmen-pseudocode-informatica", title: "Algoritmen & pseudocode", niveau: "havo4-5-vwo" },
  ],
  intro:
    "Echt leren programmeren (in Python-stijl). Je leert variabelen & datatypes (int/float/string/boolean), condities (if/elif/else + en/of), herhaling (for & while + de gevreesde oneindige lus) en functies (def, parameters, return) — plus het verschil tussen een syntaxfout en een bug. ~15 min.",
  triggerKeywords: [
    "programmeren", "python", "code", "coderen",
    "variabele", "datatype", "integer", "float", "string", "boolean",
    "if", "else", "elif", "conditie", "voorwaarde", "vergelijken",
    "for loop", "while loop", "herhaling", "loop", "range", "oneindige lus",
    "functie", "def", "parameter", "return", "argument",
    "debuggen", "syntaxfout", "bug", "logische fout",
    "print", "input",
  ],
  chapters,
  steps,
};

export default programmerenBasisInformatica;

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
        options: ["Een benoemd 'doosje' dat een waarde bewaart", "Een opdracht die iets op het scherm zet", "Een stukje code dat je kunt hergebruiken", "Een getal dat je in een berekening intypt"],
        answer: 0,
        wrongHints: [null, "Dat doet print(). Waarin bewaar je een waarde?", "Dat is een functie. Een variabele bewaart iets anders.", "Zo'n los getal in je code heet een letterlijke waarde."],
        uitlegPad: {
          stappen: [{ titel: "Een doosje met naam", tekst: "Een **variabele** bewaart een waarde onder een **naam** (`leeftijd = 12`), zodat je 'm later kunt gebruiken of wijzigen. De `=` betekent **toekennen** (waarde rechts in variabele links), niet 'is gelijk aan' zoals in wiskunde." }],
          niveaus: { basis: "Doosje met een waarde.", simpeler: "Variabele = doosje", nogSimpeler: "Doosje met naam." },
        },
      },
      {
        q: "Welk datatype is **`True` / `False`**?",
        options: ["Boolean", "Integer", "String", "Float"],
        answer: 0,
        wrongHints: [null, "Een integer is een geheel getal.", "Een string is tekst.", "Een float is een kommagetal."],
        uitlegPad: {
          stappen: [{ titel: "Waar of onwaar", tekst: "Een **boolean** (bool) kan maar twee waarden hebben: **True** (waar) of **False** (onwaar). Booleans zijn het resultaat van vergelijkingen (`5 > 3` → True) en sturen keuzes (if/else) aan. int = geheel getal, float = kommagetal, string = tekst." }],
          niveaus: { basis: "Boolean.", simpeler: "True/False = boolean", nogSimpeler: "True of False." },
        },
      },
      {
        q: "Wat is in Python de uitkomst van **`\"3\" + \"4\"`** (let op de aanhalingstekens)?",
        options: ["\"34\"", "7", "12", "Een foutmelding"],
        answer: 0,
        wrongHints: [null, "7 zou het zijn bij getallen: 3 + 4.", "12 is vermenigvuldigen, en het zijn geen getallen.", "Het mag gewoon — wat doet + met twee stukken tekst?"],
        uitlegPad: {
          stappen: [{ titel: "Tekst plakt, getallen rekenen", tekst: "Met aanhalingstekens zijn `\"3\"` en `\"4\"` **strings (tekst)**. `+` plakt tekst aan elkaar → **\"34\"**. Zónder aanhalingstekens (`3 + 4`) zijn het getallen → **7**. Daarom is het **datatype** zo belangrijk." }],
          niveaus: { basis: "\"34\".", simpeler: "Tekst + tekst = plakken", nogSimpeler: "Tekst plakken." },
        },
      },
      {
        q: "Welk datatype is **`3.14`**?",
        options: ["Float", "Integer", "String", "Boolean"],
        answer: 0,
        wrongHints: [null, "Een integer is juist een gehéél getal (geen komma).", "Zonder aanhalingstekens is het geen tekst.", "Een boolean is True/False."],
        uitlegPad: {
          stappen: [{ titel: "Komma = float", tekst: "Een **float** is een **kommagetal** (`3.14`, `7.5`). Een **integer (int)** is een geheel getal (`12`, `-3`). Tekst tussen aanhalingstekens is een **string**, en True/False een **boolean**." }],
          niveaus: { basis: "Float.", simpeler: "Kommagetal = float", nogSimpeler: "Komma = float." },
        },
      },
      {
        q: "Wat geeft `input(\"Naam? \")` terug?",
        options: ["Tekst — een string", "Een getal — een int", "Waar/onwaar — een boolean", "Een lijst — van letters"],
        answer: 0,
        wrongHints: [null, "Ook als je een cijfer typt — in welke vorm komt de invoer binnen?", "input geeft geen True/False.", "input geeft geen lijst terug — in welke vorm komt de invoer dan binnen?"],
        uitlegPad: {
          stappen: [{ titel: "Invoer = altijd tekst", tekst: "`input(...)` geeft de invoer **altijd als string (tekst)** terug — óók als je een getal typt. Wil je ermee rekenen, dan moet je het eerst omzetten, bv. `int(input(...))`. Vergeten leidt tot de fout `\"3\" + \"4\"` = `\"34\"`." }],
          niveaus: { basis: "Een string.", simpeler: "input = tekst", nogSimpeler: "Altijd tekst." },
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
        options: ["= kent toe, == vergelijkt", "= is voor Python, == voor andere talen", "= vergelijkt, == kent toe", "== is alleen voor tekst"],
        answer: 0,
        wrongHints: [null, "Allebei komen ze in Python voor, elk met een eigen taak.", "Kijk welke van de twee je in een if-voorwaarde gebruikt.", "== werkt voor getallen én tekst."],
        uitlegPad: {
          stappen: [{ titel: "Toekennen vs vergelijken", tekst: "**`=`** kent een waarde **toe** (`x = 5`). **`==`** **vergelijkt** en geeft een boolean (`x == 5` → True/False). In een `if` gebruik je dus `==`. Per ongeluk `=` schrijven in een vergelijking is een klassieke beginnersfout." }],
          niveaus: { basis: "= toekennen, == vergelijken.", simpeler: "== is vergelijken", nogSimpeler: "= is toekennen." },
        },
      },
      {
        q: "Wanneer wordt het blok onder **`if leeftijd >= 18:`** uitgevoerd?",
        options: ["Als de voorwaarde True is", "Als leeftijd een getal is", "Als de voorwaarde False is", "Als leeftijd groter dan 18 is"],
        answer: 0,
        wrongHints: [null, "Ook 12 is een getal. Draait het blok dan?", "Bij False wordt dit blok juist overgeslagen.", "Kijk naar het =-teken in >=. Doet 18 zelf ook mee?"],
        uitlegPad: {
          stappen: [{ titel: "Alleen bij True", tekst: "Een **if** voert zijn (ingesprongen) blok alleen uit als de voorwaarde **True** is. Bij `leeftijd >= 18` gebeurt dat vanaf 18. Is het False, dan kijkt Python naar **elif**/**else**." }],
          niveaus: { basis: "Als de voorwaarde True is.", simpeler: "if = alleen bij waar", nogSimpeler: "Alleen bij True." },
        },
      },
      {
        q: "`if leeftijd >= 12 **and** leeftijd < 20:` is waar als…",
        options: ["Beide voorwaarden waar zijn", "Eén van beide waar is", "Geen van beide waar is", "Leeftijd van 12 tot en met 20 is"],
        answer: 0,
        wrongHints: [null, "Dat zou 'or' zijn, niet 'and'.", "Dan is het juist False.", "Kijk naar het tweede deel: leeftijd < 20. Doet 20 zelf mee?"],
        uitlegPad: {
          stappen: [{ titel: "and = beide", tekst: "**and** vereist dat **beide** voorwaarden waar zijn. `leeftijd >= 12 and leeftijd < 20` is alleen True voor 12 t/m 19. **or** zou genoeg hebben aan één; **not** keert een waarde om." }],
          niveaus: { basis: "Beide waar.", simpeler: "and = beide", nogSimpeler: "Allebei waar." },
        },
      },
      {
        q: "Wat betekent **`elif`**?",
        options: ["Anders, als deze andere voorwaarde geldt", "Anders, zonder nieuwe voorwaarde", "Hier eindigt de hele if-opdracht", "Een nieuwe variabele aanmaken"],
        answer: 0,
        wrongHints: [null, "Dat doet else — wat staat er bij elif nog achter?", "elif sluit niets af — wat volgt er meestal achter elif?", "Een variabele maak je met `=`."],
        uitlegPad: {
          stappen: [{ titel: "Nog een keuze ertussen", tekst: "**elif** (else-if) is een **extra voorwaarde** die Python pas test als de `if` (en eerdere `elif`s) **False** waren. Zo bouw je een keten: if … elif … elif … else. De **else** vangt alle overige gevallen op." }],
          niveaus: { basis: "Anders-als.", simpeler: "elif = anders-als", nogSimpeler: "Anders, als…" },
        },
      },
      {
        q: "Wat geeft de vergelijking **`5 > 3`** terug?",
        options: ["True (een boolean)", "2 (het verschil)", "\"True\" (tekst)", "False (een boolean)"],
        answer: 0,
        wrongHints: [null, "Vergelijken rekent niets uit.", "Met aanhalingstekens zou het tekst zijn. Geeft een vergelijking tekst terug?", "Is 5 groter dan 3?"],
        uitlegPad: {
          stappen: [{ titel: "Vergelijken → waar/onwaar", tekst: "Een vergelijking (`>`, `<`, `==`, `!=`…) geeft een **boolean** terug: `5 > 3` is **True**. Die booleans sturen je `if`/`elif` aan. Dus een voorwaarde is eigenlijk 'reken uit of dit waar of onwaar is'." }],
          niveaus: { basis: "True.", simpeler: "Vergelijken = boolean", nogSimpeler: "True." },
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
        options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3 4 5", "5 5 5 5 5"],
        answer: 0,
        wrongHints: [null, "Bij welk getal begint range eigenlijk?", "Doet range(5) ook nog de 5 zelf?", "Er wordt wel degelijk geprint."],
        uitlegPad: {
          stappen: [{ titel: "range begint bij 0", tekst: "`range(5)` levert **0, 1, 2, 3, 4** (vijf getallen, beginnend bij 0, tot maar niet inclusief 5). De for-loop print ze één voor één: **0 1 2 3 4**." }],
          niveaus: { basis: "0 t/m 4.", simpeler: "range(5) = 0-4", nogSimpeler: "Begint bij 0." },
        },
      },
      {
        q: "Wanneer kies je een **while**-loop in plaats van een for-loop?",
        options: ["Als je niet vooraf weet hoe vaak", "Als je over een lijst loopt", "Als je precies 10 keer iets doet", "Als de loop sneller moet zijn"],
        answer: 0,
        wrongHints: [null, "Over een lijst lopen is juist een for-loop.", "Een vast aantal keren past beter bij for.", "Een while is niet sneller dan een for. Waar hangt de keuze dan van af?"],
        uitlegPad: {
          stappen: [{ titel: "Onbekend aantal → while", tekst: "Een **while** herhaalt **zolang een voorwaarde waar is** — handig als je vooraf niet weet hoe vaak (bv. 'zolang het antwoord fout is'). Weet je het aantal of loop je over een lijst, kies dan **for**." }],
          niveaus: { basis: "Onbekend aantal.", simpeler: "while = zolang voorwaarde", nogSimpeler: "Zolang iets waar is." },
        },
      },
      {
        q: "Wat gebeurt er als je in een while-loop de **teller niet ophoogt**?",
        options: ["De lus blijft eindeloos doorgaan", "De lus wordt helemaal overgeslagen", "De loop draait precies één keer", "Python geeft meteen een foutmelding"],
        answer: 0,
        wrongHints: [null, "De voorwaarde was bij de start waar. Wordt de lus dan overgeslagen?", "Wordt de voorwaarde na één ronde ineens False?", "Python ziet hier geen fout: de code is geldig. Wordt de voorwaarde ooit False?"],
        uitlegPad: {
          stappen: [{ titel: "Voorwaarde wordt nooit False", tekst: "Als de teller niet verandert, blijft de while-voorwaarde **altijd waar** → een **oneindige lus**: het programma stopt nooit (en loopt vast). Zorg dus dat er in de loop iets gebeurt waardoor de voorwaarde ooit **False** wordt." }],
          niveaus: { basis: "Oneindige lus.", simpeler: "Geen ophoging = eeuwig", nogSimpeler: "Stopt nooit." },
        },
      },
      {
        q: "Wat doet `for naam in [\"Sara\", \"Tim\"]: print(naam)`?",
        options: ["Print Sara en Tim onder elkaar", "Print de hele lijst in één keer", "Geeft een foutmelding over de lijst", "Print 0 en 1 onder elkaar"],
        answer: 0,
        wrongHints: [null, "Een for-loop gaat juist item voor item.", "Deze code is helemaal correct.", "Dat zou bij range(2) gebeuren — waar loopt deze lus over?"],
        uitlegPad: {
          stappen: [{ titel: "Over een lijst lopen", tekst: "Een **for-loop** kan over een **lijst** lopen: bij elke ronde krijgt `naam` het volgende item. `print(naam)` toont dan **Sara**, daarna **Tim**. Handig als je met elk element iets wilt doen." }],
          niveaus: { basis: "Elk item apart.", simpeler: "for = elk item", nogSimpeler: "Elke naam los." },
        },
      },
      {
        q: "Je wilt iets **precies 10 keer** doen. Welke loop past het best?",
        options: ["Een for-loop", "Een variabele met waarde 10", "Een if-opdracht", "Een functie"],
        answer: 0,
        wrongHints: [null, "Een variabele bewaart 10, maar herhaalt nog niets.", "Een if kiest, maar herhaalt niets.", "Een functie herhaalt op zichzelf niets."],
        uitlegPad: {
          stappen: [{ titel: "Bekend aantal → for", tekst: "Als je het **aantal** vooraf weet (10 keer), past een **for-loop** het best: `for i in range(10):`. Een **while** gebruik je als het aantal van een **voorwaarde** afhangt — maar zorg dan dat die ooit False wordt (anders oneindige lus)." }],
          niveaus: { basis: "for-loop.", simpeler: "Vast aantal = for", nogSimpeler: "Vast aantal: for." },
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
        options: ["Een stukje code benoemen en hergebruiken", "Een waarde onder een naam bewaren", "Een keuze maken tussen twee routes", "De code sneller laten draaien"],
        answer: 0,
        wrongHints: [null, "Dat doet een variabele.", "Kiezen doet een if-opdracht.", "Een functie maakt code niet sneller."],
        uitlegPad: {
          stappen: [{ titel: "Eén keer schrijven, vaak gebruiken", tekst: "Een **functie** geeft een stukje code een **naam**, zodat je het kunt **hergebruiken** (met `def …` definiëren, daarna aanroepen). Voordeel: schrijf logica één keer (DRY), pas fouten op één plek aan, en je code blijft leesbaar." }],
          niveaus: { basis: "Code benoemen + hergebruiken.", simpeler: "Functie = herbruikbaar blok", nogSimpeler: "Herbruikbaar blok." },
        },
      },
      {
        q: "Wat doet **`return`** in een functie?",
        options: ["Geeft een waarde terug om verder te gebruiken", "Print de uitkomst meteen op het scherm", "Stopt het hele programma op die plek", "Springt terug naar het begin van de functie"],
        answer: 0,
        wrongHints: [null, "Tonen is `print` — return doet iets anders. Wat kun je daarna met de uitkomst?", "Het stopt alleen de functie, niet het hele programma.", "Return herhaalt niets; na return is de functie klaar."],
        uitlegPad: {
          stappen: [{ titel: "Teruggeven ≠ printen", tekst: "**return** geeft een **uitkomst terug** uit de functie, die je daarna kunt opslaan of verder gebruiken (`resultaat = kwadraat(5)`). Dat is anders dan **print**, dat alleen iets op het scherm toont en geen waarde teruggeeft." }],
          niveaus: { basis: "Geeft een waarde terug.", simpeler: "return = waarde terug", nogSimpeler: "Waarde terug." },
        },
      },
      {
        q: "Het programma start niet door een vergeten dubbele punt. Wat voor fout is dat?",
        options: ["Een syntaxfout", "Een logische fout", "Een oneindige lus", "Een fout in de invoer van de gebruiker"],
        answer: 0,
        wrongHints: [null, "Een logische fout draait wél, maar geeft een fout antwoord.", "Een oneindige lus start wél, maar stopt niet. Dit programma start niet eens.", "De gebruiker heeft nog niets ingetypt; het programma start niet eens. Waar zit de fout dan?"],
        uitlegPad: {
          stappen: [{ titel: "Syntax = grammatica", tekst: "Een **syntaxfout** is een fout in de 'grammatica' van de code (vergeten dubbele punt `:` of haakje) — het programma **start niet**. Een **logische fout (bug)** draait wél, maar geeft het **verkeerde** antwoord; die spoor je op met test-voorbeelden en tussentijdse `print()`-regels." }],
          niveaus: { basis: "Syntaxfout.", simpeler: "Start niet = syntaxfout", nogSimpeler: "Grammaticafout." },
        },
      },
      {
        q: "In **`def begroet(naam):`** is **`naam`** een…",
        options: ["Parameter", "return-waarde", "Functienaam", "Datatype"],
        answer: 0,
        wrongHints: [null, "De return-waarde komt juist úit de functie.", "De functienaam is begroet. Wat staat er tussen de haakjes?", "Een datatype is bv. int of string."],
        uitlegPad: {
          stappen: [{ titel: "Wat er in de functie gaat", tekst: "**naam** is een **parameter**: een plek voor de **input** van de functie. Roep je `begroet(\"Sara\")` aan, dan is `\"Sara\"` het **argument** dat in `naam` terechtkomt. Zo werkt dezelfde functie voor Sara, Tim, iedereen." }],
          niveaus: { basis: "Een parameter.", simpeler: "naam = parameter (input)", nogSimpeler: "Input." },
        },
      },
      {
        q: "Het programma draait wél, maar geeft het **verkeerde antwoord**. Wat voor fout is dat?",
        options: ["Een logische fout", "Een syntaxfout", "Een oneindige lus", "Een fout in de computer zelf"],
        answer: 0,
        wrongHints: [null, "Bij een syntaxfout start het programma juist niet.", "Een oneindige lus stopt nooit en geeft dus geen antwoord. Hier komt er wél een (fout) antwoord uit.", "De computer doet precies wat jij hebt opgeschreven. Waar zit de fout dan?"],
        uitlegPad: {
          stappen: [{ titel: "Draait, maar klopt niet", tekst: "Een **logische fout (bug)** laat het programma gewoon **draaien**, maar de uitkomst is **verkeerd** — bv. een `+` waar een `-` moest staan. Die is lastiger te vinden dan een **syntaxfout** (waarbij het programma niet eens start). Test met bekende voorbeelden en zet `print()`-regels tussendoor." }],
          niveaus: { basis: "Logische fout.", simpeler: "Fout antwoord = bug", nogSimpeler: "Bug." },
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

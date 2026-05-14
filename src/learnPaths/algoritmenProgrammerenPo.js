// Leerpad: Algoritmen + programmeren - groep 6-8.
// Sluit op digitale-geletterdheid. Cito-burgerschap. 1F. 4 stappen.

const stepEmojis = ["📋", "💡", "🐍", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een algoritme?", emoji: "📋", from: 0, to: 0 },
  { letter: "B", title: "Programmeer-bouwstenen", emoji: "💡", from: 1, to: 1 },
  { letter: "C", title: "Code + apps", emoji: "🐍", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Wat is een algoritme?",
    explanation:
      "**Algoritme** = een **stappenplan** om iets op te lossen.\nVoorbeeld: een **recept** voor pannenkoeken is een algoritme.\n\n**Eigenschappen** van algoritme:\n• **Stappen** in vaste **volgorde**.\n• Elke stap **duidelijk** *(geen verwarring)*.\n• Komt tot **eindresultaat**.\n• Werkt voor **alle gevallen** *(of voor specifieke groep)*.\n\n**Voorbeelden uit dagelijks leven**:\n\n**1. Tanden poetsen** 🦷:\n1. Pak tandenborstel.\n2. Doe tandpasta erop.\n3. Maak nat.\n4. Poets 2 minuten.\n5. Spoel mond.\n6. Klaar.\n\n**2. Pannenkoek maken** 🥞:\n1. Mix bloem + ei + melk.\n2. Verwarm pan met boter.\n3. Schep beslag in pan.\n4. Wacht tot bubbeltjes.\n5. Draai om.\n6. Wacht 30 sec.\n7. Op bord.\n\n**3. Naar school gaan** 🏫:\n1. Word wakker.\n2. Kleed je aan.\n3. Eet ontbijt.\n4. Pak boekentas.\n5. Vertrek.\n6. Stop bij verkeerslicht ALS rood.\n7. Anders: lopen door.\n8. Aankomen.\n\n**Algoritmen in computer**:\n• Computer = volgt **precies** wat je zegt.\n• Bedenk je een fout → fout in programma.\n• Algoritmen achter:\n  - Google zoek-resultaten.\n  - Netflix-aanbevelingen.\n  - Sociale media-feed *(welke berichten zie je)*.\n  - Spel-AI.\n  - Auto's *(rem-systemen)*.\n  - GPS-route *(kortste pad)*.\n\n**Beroemde algoritmen**:\n\n**Sorteer-algoritme**:\n• Hoe leg je 10 boeken op alfabet?\n• **Bubble sort**: vergelijk 2 buren, wissel als nodig, herhaal.\n• **Quicksort**: kies middenpunt, klein erlinks, groot rechts.\n• Computer kan miljoenen items snel sorteren.\n\n**Zoek-algoritme**:\n• Hoe vind je naam in telefoonboek?\n• **Lineair**: blader door alles tot je 'm vindt *(traag)*.\n• **Binair zoeken**: open middenpunt, halveer steeds *(super snel)*.\n• Daarom zijn telefoonboeken alfabetisch.\n\n**Pad-zoeken** *(GPS)*:\n• **Dijkstra-algoritme** *(uitgevonden door NL-er Edsger Dijkstra in 1956!)*.\n• Vindt **kortste pad** tussen 2 punten op kaart.\n• Gebruikt in alle GPS-apps.\n\n**Edsger Dijkstra** *(1930-2002)*:\n• Beroemde **NL-informaticus**.\n• Vond meerdere algoritmen uit.\n• 'Goto-statement considered harmful' *(1968)* — beroemd artikel.\n• Won **Turing-award** *(hoogste IT-prijs)* 1972.\n\n**Goede vs slechte algoritmen**:\n• **Goed**: snel + correct + werkt voor edge-cases.\n• **Slecht**: traag + soms fout + crasht.\n• Snelheid gemeten in **'Big-O notatie'** — O(n²) is traag, O(log n) is snel.\n\n**Cito-feitje**:\n**Internet-zoekmachines** *(Google)* gebruiken algoritmen om **miljarden webpagina's te rangschikken** in milliseconden. Algoritme heet **PageRank** — bedacht door Larry Page + Sergey Brin in **1996**.",
    checks: [
      {
        q: "Wat is een **algoritme**?",
        options: ["Stappenplan om iets op te lossen", "Computer", "Brood", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Wel — recept = algoritme.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een algoritme?", tekst: "Een algoritme is een **stappenplan**: een rijtje stappen om een probleem op te lossen of een taak te doen. Klinkt fancy maar je gebruikt het ELKE DAG." },
            { titel: "Bekende voorbeelden", tekst: "Een **recept** voor pannenkoeken = algoritme. Een **routebeschrijving** = algoritme. Een **tandenpoets-volgorde** = algoritme. Stappen in vaste volgorde = altijd hetzelfde resultaat." },
            { titel: "Bij computers", tekst: "Computers gebruiken algoritmes om bv. de KORTSTE route te vinden (GPS-app), om FOTOS te sorteren op datum, of om SPAM-mails te herkennen." },
          ],
          woorden: [
            { woord: "algoritme", uitleg: "Stappenplan om probleem op te lossen." },
            { woord: "stappenplan", uitleg: "Nederlandse woord voor algoritme." },
          ],
          theorie: "Cito-tip: een algoritme staat los van wat het GEBRUIKT (computer of mens). Recept = algoritme. Route op kaart = algoritme. Stenen tegen stenen-spel-strategie = algoritme.",
          voorbeelden: [
            { type: "stap", tekst: "Algoritme 'tafel zetten': 1) bord neerzetten, 2) bestek erbij, 3) glas erbij, 4) servet erbij. Klaar." },
            { type: "stap", tekst: "Algoritme 'kortste route': probeer alle paden, kies de minst-tijd. Te traag op computer? Bestaan slimmere algoritmes (Dijkstra)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Algoritme = recept voor een taak. Niet beperkt tot computers." }],
          niveaus: {
            basis: "Algoritme = stappenplan om probleem op te lossen.",
            simpeler: "Recept of routebeschrijving = soort algoritme.",
            nogSimpeler: "Stappenplan.",
          },
        },
      },
      {
        q: "Wat doet **GPS** *(Global Positioning System — plaats-bepaling via satellieten)*-app?",
        options: ["Kortste pad-algoritme (Dijkstra)", "Sportscore", "Gewicht", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Wel."],
      },
      {
        q: "Wie was **Edsger Dijkstra**?",
        options: ["Beroemde NL-informaticus (Turing-award 1972)", "Voetballer", "F1", "Vondel"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Schrijver."],
      },
      {
        q: "Wat is **PageRank**?",
        options: ["Google's pagina-rangschik-algoritme", "Boekenlijst", "Spel", "Telefoon"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Programmeer-bouwstenen",
    explanation:
      "**Programmeren** = algoritmen opschrijven in **code** die computer begrijpt.\n\nElke programmeer-taal heeft **bouwstenen**:\n\n**1. Variabele** *(opslag-plaats)* 📦:\n```\nleeftijd = 11\nnaam = \"Sven\"\n```\nDe computer **onthoudt** de waarde.\nJe kunt later **veranderen**: `leeftijd = 12`.\n\n**2. Operatie** *(rekenen + acties)*:\n```\nbreedte = 5\nhoogte = 3\noppervlakte = breedte * hoogte    // 15\n```\n\nOperaties:\n• `+` plus.\n• `-` min.\n• `*` keer.\n• `/` gedeeld door.\n• `==` is gelijk aan? *(controle, geeft true/false)*\n\n**3. Conditie / Als-Dan** *(if-else)* 🤔:\nDoet iets **alleen ALS** voorwaarde klopt.\n```\nals leeftijd >= 18:\n    print(\"Mag stemmen\")\nanders:\n    print(\"Te jong\")\n```\n\nEcht voorbeeld:\n• Verkeerslicht: als rood → stop. Anders → rijden.\n• Sociale media: als spam → niet tonen.\n\n**4. Lus / Loop** 🔄:\nDoet **iets vaak** zonder code-herhaling.\n\n```\nvoor i van 1 tot 10:\n    print(i)\n```\nPrint: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.\n\nEcht voorbeeld:\n• Alle leerlingen in klas controleren.\n• Foto's in album doorbladeren.\n• Game-frames *(60 keer per seconde)*.\n\n**5. Functie** *(herbruikbaar stuk)* 🛠️:\nVerzameling code die je een **naam** geeft + later vele keren **gebruiken**.\n\n```\nfunctie groet(naam):\n    print(\"Hallo \" + naam)\n\ngroet(\"Lisa\")    // Hallo Lisa\ngroet(\"Sven\")    // Hallo Sven\n```\n\n**6. Lijst / Array** 📝:\nVerzameling **meerdere waarden** in 1 variabele.\n```\nklas = [\"Lisa\", \"Sven\", \"Anna\", \"Tom\"]\nprint(klas[0])    // Lisa (telt vanaf 0!)\nprint(klas[2])    // Anna\n```\n\n**7. Input / Output** ⌨️📺:\n• **Input**: data **erin** *(toetsenbord, muis, sensor)*.\n• **Output**: resultaat **eruit** *(scherm, geluid, motor)*.\n\n**Voorbeeld algoritme in code**:\n\n*'Som van 1 tot 100'*:\n```\ntotaal = 0\nvoor i van 1 tot 100:\n    totaal = totaal + i\nprint(totaal)    // 5050\n```\n\n*'Test of getal even of oneven'*:\n```\ngetal = 7\nals getal % 2 == 0:\n    print(\"Even\")\nanders:\n    print(\"Oneven\")    // Oneven\n```\n\n*(% = modulo = restdeling)*\n\n**Bug** 🐛:\n• Fout in code.\n• Komt van: **'eerste computer-bug'** in 1947 was een **echte mot** in Mark II-computer *(Harvard, VS)*.\n• **Debuggen** = bugs zoeken + fixen.\n\n**Cito-feitje**:\nDe **eerste programmeur** ooit was **Ada Lovelace** *(1815-1852, dochter van dichter Lord Byron)*. Ze schreef algoritmes voor **Babbage's Analytical Engine** *(theoretische mechanische computer)*. **100 jaar voor** eerste echte computer! Programmeer-taal **Ada** is naar haar genoemd.",
    checks: [
      {
        q: "Wat is een **variabele** in code?",
        options: ["Opslag-plaats met naam + waarde", "Spel", "Boekenrij", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet primair.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een variabele?", tekst: "Een variabele is een **opslag-plaats** in de computer met een NAAM en een WAARDE. Stel je voor: een doosje met een label, en iets erin." },
            { titel: "Voorbeeld", tekst: "`leeftijd = 11` betekent: maak een doosje met label 'leeftijd' en stop er '11' in. Later kun je vragen: 'wat staat er in leeftijd?' → 11." },
            { titel: "Vari-abel = veranderbaar", tekst: "De waarde kan VERANDEREN. Volgende jaar: `leeftijd = 12`. Daarom heet het 'variabele' (variabel = veranderlijk)." },
          ],
          woorden: [
            { woord: "variabele", uitleg: "Naam + opslag-plaats voor een waarde." },
            { woord: "waarde", uitleg: "Wat in de variabele staat (getal, tekst, etc)." },
          ],
          theorie: "Cito-feit: variabelen zitten in alle programmeertalen. In Python, Java, JavaScript, etc. Ze zijn de meest basale bouwsteen van programmeren.",
          voorbeelden: [
            { type: "stap", tekst: "`naam = 'Sven'` → variabele naam bevat tekst 'Sven'." },
            { type: "stap", tekst: "`punten = 0` → variabele punten begint op 0. Bij goede vraag: `punten = punten + 1`." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Variabele = doosje met label (naam) en inhoud (waarde). De inhoud kan wisselen." }],
          niveaus: {
            basis: "Variabele = naam + waarde in computer-geheugen.",
            simpeler: "Een 'doosje met label' waar iets in zit.",
            nogSimpeler: "Doosje met naam.",
          },
        },
      },
      {
        q: "Wat doet **if-statement**?",
        options: ["Iets doen ALS voorwaarde klopt", "Sneller", "Herhalen", "Niet"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Loop.", "Wel iets."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een if-statement?", tekst: "**'If'** is Engels voor 'als'. Een **if-statement** = stukje code dat zegt: '**ALS** dit klopt, doe dan dat.' Het laat de computer **beslissingen** nemen." },
            { titel: "Voorbeeld in code", tekst: "```\nALS leeftijd >= 18:\n   print('Je mag stemmen!')\nANDERS:\n   print('Nog even wachten.')\n```\nDe computer checkt: is leeftijd 18 of meer? Zo ja → print eerste. Zo nee → print tweede." },
            { titel: "Waarom belangrijk?", tekst: "Zonder if's zou een programma maar 1 ding doen, ongeacht situatie. **Met if's** reageert het programma op gebruiker, getallen, tijd, etc.\n• Game: ALS jij raakt vijand DAN levens − 1\n• Login: ALS wachtwoord klopt DAN ingelogd, ANDERS foutmelding." },
          ],
          woorden: [
            { woord: "if-statement", uitleg: "Code-regel die ALLEEN uitvoert als voorwaarde klopt." },
            { woord: "voorwaarde", uitleg: "Wat moet kloppen voor je iets doet (bv. leeftijd >= 18)." },
            { woord: "else", uitleg: "Engels voor 'anders' — wat doen als voorwaarde NIET klopt." },
          ],
          theorie: "Cito-feit if-statement: hoort bij de **3 hoofdbouwstenen** van programmeren:\n1. **Variabele** = onthouden (doosje met info)\n2. **If** = beslissen (als-dan)\n3. **Loop** = herhalen (zolang...).\nElk programma gebruikt deze 3.",
          voorbeelden: [
            { type: "stap", tekst: "Verkeerslicht-software: ALS auto wacht > 30 sec DAN groen licht." },
            { type: "stap", tekst: "Cito-toets: ALS goed antwoord DAN +1 punt ANDERS 0 punten. Computer scoort automatisch." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "If = ALS = beslissing. Loop = HERHALEN. Variabele = ONTHOUDEN. Drie bouwstenen waarmee elk programma werkt." }],
          niveaus: {
            basis: "If-statement = iets doen ALS voorwaarde klopt. = A.",
            simpeler: "ALS-DAN-regel in code. Computer kiest pad afhankelijk van situatie. = A.",
            nogSimpeler: "Als-dan = A.",
          },
        },
      },
      {
        q: "Wat doet een **loop**?",
        options: ["Iets herhaaldelijk doen", "Sneller", "Controle", "Reken"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Conditie.", "Niet primair."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een loop?", tekst: "Een **loop** (lus) is een stuk code dat steeds OPNIEUW wordt uitgevoerd, totdat een voorwaarde klopt om te stoppen. Sla je dezelfde regels heen-en-weer." },
            { titel: "Waarom handig?", tekst: "Stel je voor: print getallen van 1 tot 10. Zonder loop schrijf je 10 keer 'print'. Met loop: 1 keer, en de computer herhaalt het 10 keer. **Veel korter + minder fouten**." },
            { titel: "Voorbeeld in code", tekst: "`voor i van 1 tot 10: print(i)` → print 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Eén regel doet het werk van 10." },
          ],
          woorden: [
            { woord: "loop / lus", uitleg: "Code-blok dat herhaalt." },
            { woord: "for-loop", uitleg: "Loop met vast aantal herhalingen." },
            { woord: "while-loop", uitleg: "Loop die herhaalt zolang voorwaarde klopt." },
          ],
          theorie: "Cito-tip: loops zijn naast variabelen + if-statements DE belangrijkste bouwsteen van programmeren. Bijna elk programma gebruikt ze.",
          voorbeelden: [
            { type: "stap", tekst: "Game-engine: loop draait 60x per seconde om scherm te updaten." },
            { type: "stap", tekst: "Sociale media: loop checkt elke 5 seconden of er nieuw bericht is." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Loop = herhalen. If = beslissen. Variabele = onthouden. Drie hoofdbouwstenen." }],
          niveaus: {
            basis: "Loop herhaalt code-blok meerdere keren.",
            simpeler: "Loop = doe dit X keer (of zolang Y waar is).",
            nogSimpeler: "Loop = herhalen.",
          },
        },
      },
      {
        q: "Wie was **Ada Lovelace**?",
        options: ["Eerste programmeur (1840s, mathematicus)", "Eerste president", "Schilder", "Astronaut"],
        answer: 0,
        wrongHints: [null, "Niet.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Ada Lovelace?", tekst: "**Ada Lovelace** (1815-1852) was een **Engelse wiskundige**. Ze wordt **wereldwijd erkend als de eerste programmeur ooit** — al in de jaren **1840s**, lang voor er computers bestonden zoals wij ze kennen." },
            { titel: "Wat deed ze?", tekst: "Ada werkte samen met **Charles Babbage**, een uitvinder die een mechanische 'Analytical Engine' bouwde (eerste idee voor computer). Ada schreef het **eerste algoritme** dat op zo'n machine kon draaien — om Bernoulli-getallen uit te rekenen." },
            { titel: "Vergeten en herontdekt", tekst: "Lang werd haar bijdrage vergeten. In **1980** noemde het Amerikaanse leger een programmeer-taal **'Ada'** naar haar — eerbetoon. Sindsdien wordt ze gezien als symbool voor **vrouwen in tech**." },
          ],
          woorden: [
            { woord: "Ada Lovelace", uitleg: "Engelse wiskundige (1815-1852), eerste programmeur." },
            { woord: "Analytical Engine", uitleg: "Mechanische voorloper van computer (Babbage)." },
          ],
          theorie: "Cito-feit Ada Lovelace:\n• Dochter van beroemde dichter **Lord Byron**.\n• Stierf jong (36 jaar) aan kanker.\n• Vroege voorzag dat machines meer konden dan rekenen — bv. muziek componeren!\n• Inspiratie voor Girls Who Code-beweging.",
          voorbeelden: [
            { type: "stap", tekst: "Ada zag al in 1840 dat computers ooit muziek + kunst zouden kunnen maken — visionair." },
            { type: "stap", tekst: "Niet verwarren met Grace Hopper (1906-1992, ook tech-pionier — bedacht 'bug' voor software-fout)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Ada Lovelace = 1e programmeur (1840s) = vrouw. Lang voor moderne computers. Belangrijk feit." }],
          niveaus: {
            basis: "Ada Lovelace = eerste programmeur (1840s, Engelse wiskundige). = A.",
            simpeler: "In 1840 schreef ze het eerste algoritme voor de Analytical Engine. = A.",
            nogSimpeler: "Eerste programmeur = A.",
          },
        },
      },
    ],
  },
  {
    title: "Programmeer-talen + code-omgevingen",
    explanation:
      "Veel verschillende **programmeer-talen** — elk voor ander doel.\n\n**Voor beginners**:\n\n**1. Scratch** *(MIT, gratis)* 🧩:\n• **Drag-and-drop** blokken.\n• Geen typen vereist.\n• Maak games, animaties, verhalen.\n• Voor kinderen 8+.\n• Op scratch.mit.edu.\n\n**2. Python** 🐍:\n• **Makkelijkste echte taal**.\n• Veel gebruikt — AI, web, data, games.\n• Voorbeeld:\n```python\nprint(\"Hallo wereld!\")\nvoor i in range(5):\n    print(i)\n```\n\n**3. Code.org**:\n• Online cursussen.\n• Met Disney-, Star Wars-, Minecraft-thema's.\n• Gratis.\n\n**Voor verder**:\n\n**JavaScript**:\n• Maakt websites **interactief**.\n• Klikken op knop → iets gebeurt.\n• Werkt in browser.\n\n**Java**:\n• Voor grote bedrijfsprogramma's.\n• Apps Android.\n\n**C++**:\n• Voor **games** + besturingssystemen.\n• Sneller maar moeilijker.\n• Fortnite, GTA, Counter-Strike — allemaal C++.\n\n**Swift**:\n• Voor **iPhone-apps**.\n• Door Apple.\n\n**Kotlin**:\n• Moderne Android-app-taal.\n\n**HTML + CSS**:\n• Niet echt 'programmeren' maar maakt **uiterlijk** van website.\n• HTML = structuur.\n• CSS = stijl + kleuren.\n\n**Wat kun je MAKEN met code?**\n\n**Games** 🎮:\n• Minecraft *(Java)*.\n• Fortnite *(C++)*.\n• Roblox — kinderen maken eigen games in Roblox Studio.\n• Eigen game in Scratch of Python.\n\n**Websites** 🌐:\n• HTML + CSS + JavaScript.\n• Met platforms als WordPress + Wix kan zonder code.\n\n**Apps** 📱:\n• Voor iPhone: Swift.\n• Voor Android: Kotlin of Java.\n• Met **Flutter** of **React Native**: 1 keer schrijven, beide platforms.\n\n**AI** 🤖:\n• Python is favoriet.\n• Libraries: TensorFlow, PyTorch.\n• ChatGPT, Stable Diffusion — allemaal Python.\n\n**Robots** 🤖:\n• Microcontroller *(Arduino, Raspberry Pi)*.\n• Hardware + software combineren.\n• Bijvoorbeeld zelfrijdende auto.\n\n**Data-analyse** 📊:\n• Python + R.\n• Voor wetenschap + bedrijven + sport.\n\n**Programmeer-leeromgevingen voor kinderen**:\n\n• **Scratch** *(scratch.mit.edu)* — gratis.\n• **Code.org** — gratis cursussen + games.\n• **Khan Academy** — Computer-Programmeren.\n• **CodeCombat** — leer Python door game.\n• **Minecraft Education** — programmeer in Minecraft.\n• **Roblox Studio** — maak eigen Roblox-spel.\n• **MakeCode** *(micro:bit)* — programmeer fysiek apparaatje.\n\n**Wedstrijden**:\n• **CodeCup** *(NL middelbare school-wedstrijd)*.\n• **First Lego League** *(robotica, met Lego)*.\n• **Hour of Code** *(1 uur leren, december wereldwijd)*.\n\n**Vrouwen in tech**:\n• Lang geweest: weinig vrouwen in IT.\n• Verandert: 25% nu vrouw *(stijgend)*.\n• Beweging: **'Girls Who Code'**, '**She Codes'**.\n\n**Beroepen met programmeren**:\n• Software developer.\n• Data scientist.\n• Game-developer.\n• Web-developer.\n• AI-onderzoeker.\n• Cyber-security analist.\n• Goed betaald + veel werk.\n\n**Cito-feitje**:\n**Linus Torvalds** *(Fins, 1969+)* schreef **Linux** in 1991 als 21-jarige student. Hij liet de code **gratis** zijn voor iedereen *(open source)*. Linux draait nu op: **alle smartphones (Android)**, **96% van top-supercomputers**, **veel servers + auto's**. Eén persoon, enorme impact.",
    checks: [
      {
        q: "Welke is **drag-and-drop** programmeer-taal voor kinderen?",
        options: ["Scratch (MIT)", "Python", "C++", "Java"],
        answer: 0,
        wrongHints: [null, "Tekstgebaseerd.", "Moeilijk.", "Tekstgebaseerd."],
      },
      {
        q: "Welke taal voor **AI**?",
        options: ["Python (TensorFlow/PyTorch)", "HTML", "Scratch", "Excel"],
        answer: 0,
        wrongHints: [null, "Niet AI.", "Niet voor AI.", "Wel data, niet AI-bouw."],
      },
      {
        q: "Wat is **HTML**?",
        options: ["Structuur van website", "Programmeer-taal voor algoritmen", "Reken", "Game"],
        answer: 0,
        wrongHints: [null, "Niet echt programmeren.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is HTML?", tekst: "**HTML** = **HyperText Markup Language**. Het is de **structuur-taal** voor websites: welke tekst is een kop, welke een paragraaf, waar staan plaatjes, links. Elke website ter wereld gebruikt het." },
            { titel: "Voorbeeld HTML", tekst: "```html\n<h1>Welkom!</h1>\n<p>Dit is een paragraaf.</p>\n<img src=\"kat.jpg\">\n<a href=\"https://nos.nl\">Link naar NOS</a>\n```\n• `<h1>` = grote kop\n• `<p>` = paragraaf\n• `<img>` = plaatje\n• `<a>` = link" },
            { titel: "HTML ≠ programmeer-taal", tekst: "HTML is **markup** (= opmaak), geen programmeer-taal. Het beschrijft hoe iets eruit ziet, maar 'denkt' niet. Echte logica + algoritmen schrijf je in JavaScript (gedrag) + CSS (kleur/stijl) bovenop HTML." },
          ],
          woorden: [
            { woord: "HTML", uitleg: "HyperText Markup Language — structuur van websites." },
            { woord: "CSS", uitleg: "Stijl + kleur van website." },
            { woord: "JavaScript", uitleg: "Gedrag (knoppen, animaties, interactie)." },
          ],
          theorie: "Cito-feit website-bouwstenen:\n• **HTML** = structuur (wat staat waar)\n• **CSS** = stijl (kleur, lettertype, lay-out)\n• **JavaScript** = gedrag (klikken, animaties)\nDe 3 'kerntalen' van elke website.",
          voorbeelden: [
            { type: "stap", tekst: "Rechter-muisklik op willekeurige website → 'Inspect element' → je ziet de HTML achter de site." },
            { type: "stap", tekst: "Wordpress/Wix maken HTML voor je. Maar onderwater = nog steeds HTML." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "HTML = structuur. Geen echte programmeer-taal — geen if-statements, loops. Maar wel onmisbaar voor websites." }],
          niveaus: {
            basis: "HTML = structuur van website. = A.",
            simpeler: "HTML beschrijft welke delen van een website een kop, paragraaf of link zijn. = A.",
            nogSimpeler: "Website-structuur = A.",
          },
        },
      },
      {
        q: "Wie schreef **Linux**?",
        options: ["Linus Torvalds (1991, 21 jr)", "Bill Gates", "Steve Jobs", "Berners-Lee"],
        answer: 0,
        wrongHints: [null, "Microsoft.", "Apple.", "WWW."],
      },
    ],
  },
  {
    title: "Eind-toets — algoritme mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat is een **algoritme**?", options: ["Stappenplan", "Spel", "Computer", "Niet bestaand"], answer: 0, wrongHints: [null, "Niet.", "Niet primair.", "Wel."] },
      { q: "Welke is **drag-and-drop** taal?", options: ["Scratch", "Python", "C++", "JavaScript"], answer: 0, wrongHints: [null, "Tekst.", "Tekst.", "Tekst."] },
      { q: "Wat doet **loop**?", options: ["Iets herhalen", "Conditie", "Variabele", "Functie"], answer: 0, wrongHints: [null, "Niet primair.", "Niet.", "Niet primair."] },
      { q: "Wie was **eerste programmeur**?", options: ["Ada Lovelace (1840s)", "Gates", "Jobs", "Berners-Lee"], answer: 0, wrongHints: [null, "Veel later.", "Niet primair.", "Niet primair."] },
      { q: "**Linux** door?", options: ["Linus Torvalds (1991)", "Microsoft", "Apple", "Google"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "**NL-informaticus** die kortste-pad-algoritme bedacht?", options: ["Edsger Dijkstra", "Cruijff", "Slat", "Tim Berners-Lee"], answer: 0, wrongHints: [null, "Voetbal.", "Niet primair.", "Niet NL."] },
      {
        q: "Een **if-else**-instructie betekent?",
        options: ["ALS X dan dit, ANDERS dat", "Herhaal iets 10 keer", "Wacht 5 seconden", "Maak een variabele"],
        answer: 0,
        wrongHints: [null, "Dat is een loop, niet if-else.", "Dat is sleep/wait.", "Dat is variabele declaratie."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is if-else?", tekst: "**If-else** (Engels voor 'als-anders') is een **beslissings-instructie** in elke programmeertaal. Computer checkt een **conditie** en kiest één van twee paden:\n\n```\nif (regen):\n    pak paraplu\nelse:\n    laat paraplu thuis\n```\n\nMens-vertaling: 'ALS het regent → paraplu mee. ANDERS → niet.'" },
            { titel: "Voorbeelden in dagelijks leven", tekst: "Computers doen if-else miljoenen keren per dag:\n• **Login**: ALS wachtwoord klopt → laat binnen, ANDERS → toon fout\n• **Spel**: ALS speler nog 0 levens → game over, ANDERS → ga door\n• **Webshop**: ALS in voorraad → toon 'koop', ANDERS → 'wachtlijst'\n• **Self-driving car**: ALS rood licht → stop, ANDERS → rij door" },
            { titel: "Cito-tip: 3 belangrijke programmeer-bouwstenen", tekst: "Onthoud deze 3 voor Cito:\n1. **Sequentie** — stappen in volgorde uitvoeren\n2. **Conditie** (if-else) — beslissing nemen\n3. **Loop** (herhaling) — iets X keer of zolang nodig herhalen\n\nAlle programma's combineren deze 3 dingen, hoe complex ook." },
          ],
          woorden: [
            { woord: "if-else", uitleg: "Programmeer-instructie voor beslissingen: ALS conditie → A, ANDERS → B." },
            { woord: "conditie", uitleg: "Voorwaarde die waar (true) of niet-waar (false) is. Bv. 'regent het?'" },
            { woord: "Boolean", uitleg: "Waarde die alleen TRUE of FALSE kan zijn. Komt van wiskundige George Boole." },
          ],
          theorie: "Voorbeelden if-else in Scratch (kinder-programmeer-omgeving):\n```\nals <regent> dan\n    zeg 'paraplu mee!'\nanders\n    zeg 'fijne dag!'\n```\n\nDezelfde logica in Python:\n```\nif regent:\n    print('paraplu mee!')\nelse:\n    print('fijne dag!')\n```\n\nIn elke taal hetzelfde idee: conditie → beslissing.",
          voorbeelden: [
            { type: "feit", tekst: "Kinderen leren if-else vaak via Scratch (visuele blokken) voor ze 'echte' code typen." },
            { type: "feit", tekst: "Spelletjes als Minecraft hebben honderden if-else: ALS speler aanvalt → minus leven, ANDERS → wacht." },
          ],
          basiskennis: [{ onderwerp: "Engels", uitleg: "Programmeertalen gebruiken Engels: 'if', 'else', 'while', 'for'. Goed Engels = makkelijker leren." }],
          niveaus: { basis: "Als-dan-anders. = A.", simpeler: "If-else = ALS-DAN-ANDERS. Computer checkt iets en kiest 1 van 2 paden. Bv. ALS wachtwoord klopt → laat binnen. = A.", nogSimpeler: "Als-anders = A." },
        },
      },
      {
        q: "Een **bug** in software is?",
        options: ["Fout in de code waardoor programma niet goed werkt", "Spinnetje in de computer", "Snelheid van de chip", "Wachtwoord-kraker"],
        answer: 0,
        wrongHints: [null, "Niet letterlijk — kwam wel van echte mot in oude computer (1947).", "Dat is clock-snelheid (GHz).", "Dat is hacking-tool."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een bug?", tekst: "Een **bug** is een **fout in software**. Code werkt niet zoals bedoeld. Voorbeelden:\n• Knop reageert niet als je klikt\n• App crasht plotseling\n• Spelletje geeft 999999 punten ipv 100\n• Rekenmachine zegt 2+2=5\n\nElke programmeur — zelfs de allerbeste — schrijft bugs. Goede programmeurs zoeken + verbeteren bugs snel." },
            { titel: "Waar komt de naam 'bug' vandaan?", tekst: "**Echt verhaal uit 1947**: pionier-programmeur **Grace Hopper** vond een **echte mot** in haar computer (Harvard Mark II). De mot zat tussen schakelaars en blokkeerde de werking. Ze schreef 'first actual case of bug being found' in haar logboek. Sindsdien = bug = software-fout.\n\nHet woord 'bug' bestond al eerder in techniek (Thomas Edison gebruikte het), maar Hopper's verhaal werd legendarisch." },
            { titel: "Cito-feit: bug-jacht = debuggen", tekst: "Het zoeken + oplossen van bugs heet **'debuggen'**. Programmeurs gebruiken:\n• **Print-statements** — laat zien wat code doet\n• **Debugger** — stap-voor-stap door code lopen\n• **Tests** — automatisch checken of code klopt\n• **Vraag aan AI** (ChatGPT/Copilot) — moderne hulpmiddel" },
          ],
          woorden: [
            { woord: "bug", uitleg: "Fout in software. Maakt dat programma niet werkt zoals bedoeld." },
            { woord: "debuggen", uitleg: "Bugs zoeken en oplossen. Letterlijk: 'on-buggen'." },
            { woord: "crash", uitleg: "Programma stopt onverwacht door bug. App sluit, scherm zwart." },
          ],
          theorie: "Beroemde bugs in geschiedenis:\n• **Y2K-bug (2000)** — angst dat alle computers zouden crashen op 1 jan 2000 (datum-format) — viel mee\n• **NASA Mars Climate Orbiter (1999)** — bug met meter vs feet → $125 mln-satelliet verloren\n• **Knight Capital (2012)** — bug zorgde voor $440 mln verlies in 45 minuten\n• **Therac-25 (1985-87)** — radio-therapie-bug doodde 6 patiënten\n\nProgramma-fouten kunnen ECHTE gevolgen hebben.",
          voorbeelden: [
            { type: "feit", tekst: "Grace Hopper's mot zit nu in het Smithsonian Museum (Washington DC), opgeplakt in een logboek." },
            { type: "feit", tekst: "Top-software heeft ~1 bug per 1000 regels code. Een browser heeft 10+ miljoen regels = 10.000+ bugs." },
          ],
          basiskennis: [{ onderwerp: "Niet beestje", uitleg: "Hoewel het verhaal echt is, betekent 'bug' nu uitsluitend code-fout — geen letterlijk insect." }],
          niveaus: { basis: "Fout in code. = A.", simpeler: "Een bug is een fout in software die maakt dat programma niet goed werkt. Naam komt van een echte mot in oude computer (1947). = A.", nogSimpeler: "Code-fout = A." },
        },
      },
      {
        q: "Wat doet een **variabele** in code?",
        options: ["Onthoudt een waarde met een naam (bv. score = 0)", "Voert berekening uit", "Toont bericht aan gebruiker", "Sluit programma af"],
        answer: 0,
        wrongHints: [null, "Dat is een functie/operator, niet een variabele.", "Dat is print/output.", "Dat is exit/quit."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een variabele?", tekst: "Een **variabele** is een **'doosje met naam'** in code. Computer onthoudt er een waarde in, en jij gebruikt de naam om de waarde op te halen.\n\nVoorbeeld:\n```\nscore = 0\nleven = 3\nspeler_naam = 'Floor'\n```\n\nLater in code: `score = score + 10` (score wordt 10)." },
            { titel: "Waarom 'variabele'?", tekst: "Heet zo omdat de waarde **kan veranderen** (variëren). Anders dan een **constante** (bv. π = 3,14, blijft altijd hetzelfde).\n\nIn games:\n• Score VERANDERT (variabele)\n• Maximum-leven KAN constant zijn (bv. altijd 3)\n• Speler-naam VERANDERT per speler" },
            { titel: "Cito-feit: data-types", tekst: "Variabelen hebben **types** (soorten waarden):\n• **Getal** (int): score = 100\n• **Tekst** (string): naam = 'Floor'\n• **Waar/onwaar** (boolean): geactiveerd = True\n• **Lijst**: hoogste_scores = [100, 85, 70]\n\nElk type heeft eigen regels. Bij Cito test soms: 'welk type is X?' bij voorbeeld." },
          ],
          woorden: [
            { woord: "variabele", uitleg: "Doosje met naam dat een waarde opslaat. Waarde kan veranderen." },
            { woord: "constante", uitleg: "Waarde die NIET kan veranderen. Bv. π of het aantal dagen in een week." },
            { woord: "type", uitleg: "Soort waarde: getal, tekst, waar/onwaar, lijst." },
          ],
          theorie: "Variabelen in verschillende talen:\n• **Scratch**: 'maak variabele score' → blokje\n• **Python**: `score = 0`\n• **JavaScript**: `let score = 0;`\n• **Java**: `int score = 0;`\n\nElke taal heeft eigen syntax, maar het CONCEPT is overal hetzelfde: 'sla waarde op onder naam'.",
          voorbeelden: [
            { type: "feit", tekst: "Een game zoals Minecraft heeft tienduizenden variabelen tegelijk: positie speler, leven, item-inhoud, weer, dag/nacht, enzovoort." },
            { type: "feit", tekst: "Slimme namen helpen: 'score' > 's', 'aantal_levens' > 'al'. Code-leesbaarheid = belangrijk." },
          ],
          basiskennis: [{ onderwerp: "Geen 'doos'-tegel-cito", uitleg: "Cito vraagt vaak op concept-niveau: 'wat doet een variabele?' Antwoord = 'onthoudt waarde met naam'." }],
          niveaus: { basis: "Onthoudt waarde. = A.", simpeler: "Variabele = doosje met naam in code dat een waarde onthoudt. Bv. score = 0. Later: score = 10. = A.", nogSimpeler: "Doosje met naam = A." },
        },
      },
      { q: "Wat is een **algoritme**?", options: ["Stappenplan om iets op te lossen","Een spel","Een tafel","Een verhaal"], answer: 0, wrongHints: [null, "Niet specifiek.", "Niet.", "Niet."] },
      { q: "Welke programmeertaal is **kindvriendelijk** met sleep-blokjes?", options: ["Scratch","Python","JavaScript","C++"], answer: 0, wrongHints: [null, "Tekst-taal.", "Tekst-taal.", "Niet voor beginners."] },
      { q: "Wat is een **loop** (lus) in code?", options: ["Stappen herhalen","Een spel","Een variabele","Een fout"], answer: 0, wrongHints: [null, "Niet relevant.", "Andere bouwsteen.", "Niet."] },
      { q: "**Ada Lovelace** wordt gezien als?", options: ["Eerste programmeur","Eerste astronaut","Eerste president","Eerste schaker"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Wat is een **if-else** in code?", options: ["Beslissing: ALS X DAN Y, ANDERS Z","Een lus","Een variabele","Niet bestaand"], answer: 0, wrongHints: [null, "Loop.", "Andere bouwsteen.", "Wel."] },
      { q: "Wat is een **bug** in code?", options: ["Een fout","Een dier","Een feature","Niet bestaand"], answer: 0, wrongHints: [null, "Letterlijk wel een woord, maar bedoeld is fout.", "Tegengestelde.", "Wel."] },
      { q: "Wie was **Linus Torvalds**?", options: ["Maker van Linux","Eerste astronaut","Niet bestaand","Componist"], answer: 0, wrongHints: [null, "Niet.", "Wel.", "Niet."] },
      { q: "Wat is **open source**?", options: ["Code die iedereen mag zien + gebruiken","Code achter slot","Niet bestaand","Reclame"], answer: 0, wrongHints: [null, "Tegengestelde.", "Wel.", "Niet."] },
      { q: "Wat is een **functie** in programmeren?", options: ["Stukje code dat een taak doet","Niet relevant","Een variabele","Een fout"], answer: 0, wrongHints: [null, "Wel.", "Andere bouwsteen.", "Niet."] },
      { q: "Welke is **niet** een programmeertaal?", options: ["Excel","Python","JavaScript","Java"], answer: 0, wrongHints: [null, "Wel.", "Wel.", "Wel."] },
      { q: "**HTML** is voor?", options: ["Websites opmaken","Apps bouwen","Spellen","Niet relevant"], answer: 0, wrongHints: [null, "Wel deels.", "Niet primair.", "Wel."] },
      { q: "Wat doet **Google's PageRank**-algoritme?", options: ["Webpagina's rangschikken op relevantie","Niets","Vertalen","Sturen"], answer: 0, wrongHints: [null, "Wel.", "Andere algoritme.", "Niet primair."] },
      { q: "Wat is een **GPS-algoritme** (Dijkstra)?", options: ["Kortste pad-vinder","Niet relevant","Reclame","Spelletje"], answer: 0, wrongHints: [null, "Wel.", "Niet.", "Niet."] },
      { q: "Wat is een **list/lijst** in code?", options: ["Geordende verzameling items","Eén item","Niet bestaand","Functie"], answer: 0, wrongHints: [null, "Niet.", "Wel.", "Andere bouwsteen."] },
      { q: "Welk **probleem** lost een algoritme niet op?", options: ["Onmogelijke wiskunde","Sorteren","Zoeken","Patronen vinden"], answer: 0, wrongHints: [null, "Wel.", "Wel.", "Wel."] },
      { q: "Wat is **AI** (kunstmatige intelligentie)?", options: ["Software die patronen leert","Robot uit film","Niet bestaand","Reclame"], answer: 0, wrongHints: [null, "Niet specifiek.", "Wel.", "Niet."] },
      { q: "Wat is een **hash** in computers?", options: ["Unieke digitale code","Niet bestaand","Eten","Reclame"], answer: 0, wrongHints: [null, "Wel.", "Niet.", "Niet."] },
      { q: "Wie ontwierp het **WWW** (web)?", options: ["Tim Berners-Lee","Bill Gates","Steve Jobs","Linus Torvalds"], answer: 0, wrongHints: [null, "Microsoft.", "Apple.", "Linux."] },
      { q: "Wat is een **stappenplan** in code (samenvatting)?", options: ["Geordende stappen om probleem op te lossen","Reclame","Niet bestaand","Game"], answer: 0, wrongHints: [null, "Niet.", "Wel.", "Niet primair."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const algoritmenProgrammerenPo = {
  id: "algoritmen-programmeren-po",
  title: "Algoritmen + programmeren (Cito groep 6-8)",
  emoji: "📋",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / digitaal",
  prerequisites: [
    { id: "digitale-geletterdheid-po", title: "Digitale geletterdheid", niveau: "1F" },
  ],
  intro:
    "Algoritmen + programmeren voor Cito groep 6-8 — wat is algoritme (stappenplan, recept, GPS-Dijkstra-NL'er) + bouwstenen (variabele/if/loop/functie/lijst) + Ada Lovelace + talen (Scratch/Python/JavaScript) + Linus Torvalds Linux. Sluit op digitale-geletterdheid. ~15 min.",
  triggerKeywords: [
    "algoritme", "stappenplan",
    "programmeren", "code", "coderen",
    "Scratch", "Python", "JavaScript",
    "variabele", "loop", "if-else", "functie",
    "Edsger Dijkstra",
    "Ada Lovelace",
    "Linus Torvalds", "Linux",
    "PageRank", "Google",
  ],
  chapters,
  steps,
};

export default algoritmenProgrammerenPo;

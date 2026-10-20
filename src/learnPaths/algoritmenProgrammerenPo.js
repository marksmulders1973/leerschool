// Leerpad: Algoritmen + programmeren - groep 6-8.
// Sluit op digitale-geletterdheid. Toets-burgerschap. 1F. 4 stappen.

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
      "**Algoritme** = een **stappenplan** om iets op te lossen.\nVoorbeeld: een **recept** voor pannenkoeken is een algoritme.\n\n**Eigenschappen** van algoritme:\n• **Stappen** in vaste **volgorde**.\n• Elke stap **duidelijk** *(geen verwarring)*.\n• Komt tot **eindresultaat**.\n• Werkt voor **alle gevallen** *(of voor specifieke groep)*.\n\n**Voorbeelden uit dagelijks leven**:\n\n**1. Tanden poetsen** 🦷:\n1. Pak tandenborstel.\n2. Doe tandpasta erop.\n3. Maak nat.\n4. Poets 2 minuten.\n5. Spoel mond.\n6. Klaar.\n\n**2. Pannenkoek maken** 🥞:\n1. Mix bloem + ei + melk.\n2. Verwarm pan met boter.\n3. Schep beslag in pan.\n4. Wacht tot bubbeltjes.\n5. Draai om.\n6. Wacht 30 sec.\n7. Op bord.\n\n**3. Naar school gaan** 🏫:\n1. Word wakker.\n2. Kleed je aan.\n3. Eet ontbijt.\n4. Pak boekentas.\n5. Vertrek.\n6. Stop bij verkeerslicht ALS rood.\n7. Anders: doorlopen.\n8. Aankomen.\n\n**Algoritmen in computer**:\n• Computer = volgt **precies** wat je zegt.\n• Bedenk je een fout → fout in programma.\n• Algoritmen achter:\n  - Google zoek-resultaten.\n  - Netflix-aanbevelingen.\n  - Sociale media-feed *(welke berichten zie je)*.\n  - Spel-AI.\n  - Auto's *(rem-systemen)*.\n  - GPS-route *(kortste pad)*.\n\n**Beroemde algoritmen**:\n\n**Sorteer-algoritme**:\n• Hoe leg je 10 boeken op alfabet?\n• **Bubble sort**: vergelijk 2 buren, wissel als nodig, herhaal.\n• **Quicksort**: kies middenpunt, klein links, groot rechts.\n• Computer kan miljoenen items snel sorteren.\n\n**Zoek-algoritme**:\n• Hoe vind je naam in telefoonboek?\n• **Lineair**: blader door alles tot je 'm vindt *(traag)*.\n• **Binair zoeken**: open middenpunt, halveer steeds *(super snel)*.\n• Daarom zijn telefoonboeken alfabetisch.\n\n**Pad-zoeken** *(GPS)*:\n• **Dijkstra-algoritme** *(uitgevonden door NL-er Edsger Dijkstra in 1956!)*.\n• Vindt **kortste pad** tussen 2 punten op kaart.\n• Gebruikt in alle GPS-apps.\n\n**Edsger Dijkstra** *(1930-2002)*:\n• Beroemde **NL-informaticus**.\n• Vond meerdere algoritmen uit.\n• 'Goto-statement considered harmful' *(1968)* — beroemd artikel.\n• Won **Turing-award** *(hoogste IT-prijs)* 1972.\n\n**Goede vs slechte algoritmen**:\n• **Goed**: snel + correct + werkt voor edge-cases.\n• **Slecht**: traag + soms fout + crasht.\n• Snelheid gemeten in **'Big-O notatie'** — O(n²) is traag, O(log n) is snel.\n\n**Toets-feitje**:\n**Internet-zoekmachines** *(Google)* gebruiken algoritmen om **miljarden webpagina's te rangschikken** in milliseconden. Algoritme heet **PageRank** — bedacht door Larry Page + Sergey Brin in **1996**.",
    checks: [
      {
        q: "Wat is een **algoritme**?",
        options: ["Stappenplan om iets op te lossen", "Machine die opdrachten snel uitvoert", "Foutje in een computerprogramma", "Rekenmachine met heel veel knoppen"],
        answer: 0,
        wrongHints: [null, "Zo'n machine vóért algoritmes uit, maar is zelf een apparaat. Wat is het rijtje opdrachten zelf?", "Een foutje in code heet een bug. Is een algoritme iets wat misgaat?", "Een rekenmachine is een apparaat — is dat een rijtje stappen?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een algoritme?", tekst: "Een algoritme is een **stappenplan**: een rijtje stappen om een probleem op te lossen of een taak te doen. Klinkt fancy maar je gebruikt het ELKE DAG." },
            { titel: "Bekende voorbeelden", tekst: "Een **recept** voor pannenkoeken = algoritme. Een **routebeschrijving** = algoritme. Een **tandenpoets-volgorde** = algoritme. Stappen in vaste volgorde = altijd hetzelfde resultaat." },
            { titel: "Bij computers", tekst: "Computers gebruiken algoritmes om bv. de KORTSTE route te vinden (GPS-app), om FOTO'S te sorteren op datum, of om SPAM-mails te herkennen." },
          ],
          woorden: [
            { woord: "algoritme", uitleg: "Stappenplan om probleem op te lossen." },
            { woord: "stappenplan", uitleg: "Nederlands woord voor algoritme." },
          ],
          theorie: "Toets-tip: een algoritme staat los van wat het GEBRUIKT (computer of mens). Recept = algoritme. Route op kaart = algoritme. Steen-papier-schaar-strategie = algoritme.",
          voorbeelden: [
            { type: "stap", tekst: "Algoritme 'tafel zetten': 1) bord neerzetten, 2) bestek erbij, 3) glas erbij, 4) servet erbij. Klaar." },
            { type: "stap", tekst: "Algoritme 'kortste route': probeer alle paden, kies de snelste. Te traag op de computer? Dan bestaan er slimmere algoritmes (Dijkstra)." },
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
        q: "Een navigatie-app met **GPS** *(Global Positioning System — plaats-bepaling via satellieten)* zoekt de snelste route. Wat gebruikt de app daarvoor?",
        options: ["Een algoritme dat de kortste route berekent", "Een algoritme dat foto's op datum sorteert", "Een stappenteller die je passen telt", "Een weegschaal die je gewicht meet"],
        answer: 0,
        wrongHints: [null, "Foto's sorteren helpt niet om een route te vinden.", "Een stappenteller telt wat je al liep — plant hij ook een route?", "Gewicht zegt niets over de weg naar je bestemming."],
      },
      {
        q: "Wie was **Edsger Dijkstra**?",
        options: ["Nederlandse informaticus", "Nederlandse voetballer", "Nederlandse wielrenner", "Nederlandse dichter"],
        answer: 0,
        wrongHints: [null, "Werd hij beroemd op het voetbalveld?", "Werd hij beroemd op de fiets?", "Schreef hij gedichten of computerprogramma's?"],
      },
      {
        q: "Wat is **PageRank**?",
        options: ["Google's pagina-rangschik-algoritme", "Google's lijst met de beste boeken", "Google's spelletje voor in de browser", "Google's app om te videobellen"],
        answer: 0,
        wrongHints: [null, "Geen boekenlijst. Wat doet Google met al die webpagina's?", "Geen spel. 'Rank' betekent plaats in een rij — waarvan?", "Geen app om mee te bellen — een rekenregel."],
      },
    ],
  },
  {
    title: "Programmeer-bouwstenen",
    explanation:
      "**Programmeren** = algoritmen opschrijven in **code** die computer begrijpt.\n\nElke programmeer-taal heeft **bouwstenen**:\n\n**1. Variabele** *(opslag-plaats)* 📦:\n```\nleeftijd = 11\nnaam = \"Sven\"\n```\nDe computer **onthoudt** de waarde.\nJe kunt later **veranderen**: `leeftijd = 12`.\n\n**2. Operatie** *(rekenen + acties)*:\n```\nbreedte = 5\nhoogte = 3\noppervlakte = breedte * hoogte    // 15\n```\n\nOperaties:\n• `+` plus.\n• `-` min.\n• `*` keer.\n• `/` gedeeld door.\n• `==` is gelijk aan? *(controle, geeft true/false)*\n\n**3. Conditie / Als-Dan** *(if-else)* 🤔:\nDoet iets **alleen ALS** voorwaarde klopt.\n```\nals leeftijd >= 18:\n    print(\"Mag stemmen\")\nanders:\n    print(\"Te jong\")\n```\n\nEcht voorbeeld:\n• Verkeerslicht: als rood → stop. Anders → rijden.\n• Sociale media: als spam → niet tonen.\n\n**4. Lus / Loop** 🔄:\nDoet **iets vaak** zonder code-herhaling.\n\n```\nvoor i van 1 tot 10:\n    print(i)\n```\nPrint: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.\n\nEcht voorbeeld:\n• Alle leerlingen in klas controleren.\n• Foto's in album doorbladeren.\n• Game-frames *(60 keer per seconde)*.\n\n**5. Functie** *(herbruikbaar stuk)* 🛠️:\nVerzameling code die je een **naam** geeft + later vele keren **gebruikt**.\n\n```\nfunctie groet(naam):\n    print(\"Hallo \" + naam)\n\ngroet(\"Lisa\")    // Hallo Lisa\ngroet(\"Sven\")    // Hallo Sven\n```\n\n**6. Lijst / Array** 📝:\nVerzameling **meerdere waarden** in 1 variabele.\n```\nklas = [\"Lisa\", \"Sven\", \"Anna\", \"Tom\"]\nprint(klas[0])    // Lisa (telt vanaf 0!)\nprint(klas[2])    // Anna\n```\n\n**7. Input / Output** ⌨️📺:\n• **Input**: data **erin** *(toetsenbord, muis, sensor)*.\n• **Output**: resultaat **eruit** *(scherm, geluid, motor)*.\n\n**Voorbeeld algoritme in code**:\n\n*'Som van 1 tot 100'*:\n```\ntotaal = 0\nvoor i van 1 tot 100:\n    totaal = totaal + i\nprint(totaal)    // 5050\n```\n\n*'Test of getal even of oneven'*:\n```\ngetal = 7\nals getal % 2 == 0:\n    print(\"Even\")\nanders:\n    print(\"Oneven\")    // Oneven\n```\n\n*(% = modulo = restdeling)*\n\n**Bug** 🐛:\n• Fout in code.\n• Komt van: **'eerste computer-bug'** in 1947 was een **echte mot** in Mark II-computer *(Harvard, VS)*.\n• **Debuggen** = bugs zoeken + fixen.\n\n**Toets-feitje**:\nDe **eerste programmeur** ooit was **Ada Lovelace** *(1815-1852, dochter van dichter Lord Byron)*. Ze schreef algoritmes voor **Babbage's Analytical Engine** *(theoretische mechanische computer)*. **100 jaar voor** eerste echte computer! Programmeer-taal **Ada** is naar haar genoemd.",
    checks: [
      {
        q: "Wat is een **variabele** in code?",
        options: ["Opslagplaats met een naam en een waarde", "Rij stappen die steeds herhaald wordt", "Melding dat er iets mis is in je code", "Knop waarmee je het programma start"],
        answer: 0,
        wrongHints: [null, "Dat is een loop (lus).", "Een fout in code heet een bug.", "Een startknop doet iets — maar wat onthoudt de computer?"],
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
          theorie: "Toets-feit: variabelen zitten in alle programmeertalen. In Python, Java, JavaScript, etc. Ze zijn de meest basale bouwsteen van programmeren.",
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
        q: "Wat doet een **if-statement** (als-dan) in code?",
        options: ["Iets doen ALS voorwaarde klopt", "De computer sneller maken", "Iets steeds herhalen", "Een waarde onthouden"],
        answer: 0,
        wrongHints: [null, "Gaat 'if' (als) over snelheid of over een keuze?", "Herhalen doet een loop.", "Onthouden doet een variabele."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een if-statement?", tekst: "**'If'** is Engels voor 'als'. Een **if-statement** = stukje code dat zegt: '**ALS** dit klopt, doe dan dat.' Het laat de computer **beslissingen** nemen." },
            { titel: "Voorbeeld in code", tekst: "```\nALS leeftijd >= 18:\n   print('Je mag stemmen!')\nANDERS:\n   print('Nog even wachten.')\n```\nDe computer checkt: is leeftijd 18 of meer? Zo ja → print eerste. Zo nee → print tweede." },
            { titel: "Waarom belangrijk?", tekst: "Zonder if's zou een programma maar 1 ding doen, ongeacht situatie. **Met if's** reageert het programma op gebruiker, getallen, tijd, etc.\n• Game: ALS jij een vijand raakt DAN levens − 1\n• Login: ALS wachtwoord klopt DAN ingelogd, ANDERS foutmelding." },
          ],
          woorden: [
            { woord: "if-statement", uitleg: "Code-regel die ALLEEN wordt uitgevoerd als de voorwaarde klopt." },
            { woord: "voorwaarde", uitleg: "Wat moet kloppen voor je iets doet (bv. leeftijd >= 18)." },
            { woord: "else", uitleg: "Engels voor 'anders' — wat doen als voorwaarde NIET klopt." },
          ],
          theorie: "Toets-feit if-statement: hoort bij de **3 hoofdbouwstenen** van programmeren:\n1. **Variabele** = onthouden (doosje met info)\n2. **If** = beslissen (als-dan)\n3. **Loop** = herhalen (zolang...).\nElk programma gebruikt deze 3.",
          voorbeelden: [
            { type: "stap", tekst: "Verkeerslicht-software: ALS auto wacht > 30 sec DAN groen licht." },
            { type: "stap", tekst: "Doorstroomtoets: ALS goed antwoord DAN +1 punt ANDERS 0 punten. Computer scoort automatisch." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "If = ALS = beslissing. Loop = HERHALEN. Variabele = ONTHOUDEN. Drie bouwstenen waarmee elk programma werkt." }],
          niveaus: {
            basis: "If-statement = iets doen ALS voorwaarde klopt.",
            simpeler: "ALS-DAN-regel in code. Computer kiest pad afhankelijk van situatie.",
            nogSimpeler: "Als-dan",
          },
        },
      },
      {
        q: "Wat doet een **loop**?",
        options: ["Iets herhaaldelijk doen", "De computer sneller maken", "Een keuze maken (als-dan)", "Een waarde onthouden"],
        answer: 0,
        wrongHints: [null, "Gaat een lus over snelheid?", "Kiezen doet een if-statement.", "Onthouden doet een variabele."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een loop?", tekst: "Een **loop** (lus) is een stuk code dat steeds OPNIEUW wordt uitgevoerd, totdat een voorwaarde klopt om te stoppen. Zo hoef je dezelfde regels niet steeds opnieuw te schrijven." },
            { titel: "Waarom handig?", tekst: "Stel je voor: print getallen van 1 tot 10. Zonder loop schrijf je 10 keer 'print'. Met loop: 1 keer, en de computer herhaalt het 10 keer. **Veel korter + minder fouten**." },
            { titel: "Voorbeeld in code", tekst: "`voor i van 1 tot 10: print(i)` → print 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Eén regel doet het werk van 10." },
          ],
          woorden: [
            { woord: "loop / lus", uitleg: "Code-blok dat herhaalt." },
            { woord: "for-loop", uitleg: "Loop met vast aantal herhalingen." },
            { woord: "while-loop", uitleg: "Loop die herhaalt zolang voorwaarde klopt." },
          ],
          theorie: "Toets-tip: loops zijn naast variabelen + if-statements DE belangrijkste bouwsteen van programmeren. Bijna elk programma gebruikt ze.",
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
        options: ["De eerste programmeur", "De eerste vrouwelijke president", "Een beroemde Engelse schilderes", "De eerste vrouw in de ruimte"],
        answer: 0,
        wrongHints: [null, "Ada zat niet in de politiek. Waar werkte ze aan, samen met de uitvinder Charles Babbage?", "Ada maakte geen schilderijen; ze was heel goed in wiskunde.", "Ada leefde van 1815 tot 1852 — lang vóór de eerste raketten."],
        uitlegPad: {
          stappen: [
            { titel: "Wie was Ada Lovelace?", tekst: "**Ada Lovelace** (1815-1852) was een **Engelse wiskundige**. Ze wordt **wereldwijd erkend als de eerste programmeur ooit** — al in de jaren **1840**, lang voor er computers bestonden zoals wij ze kennen." },
            { titel: "Wat deed ze?", tekst: "Ada werkte samen met **Charles Babbage**, een uitvinder die een mechanische 'Analytical Engine' ontwierp (eerste idee voor computer). Ada schreef het **eerste algoritme** dat op zo'n machine kon draaien — om Bernoulli-getallen uit te rekenen." },
            { titel: "Vergeten en herontdekt", tekst: "Lang werd haar bijdrage vergeten. In **1980** noemde het Amerikaanse leger een programmeer-taal **'Ada'** naar haar — eerbetoon. Sindsdien wordt ze gezien als symbool voor **vrouwen in tech**." },
          ],
          woorden: [
            { woord: "Ada Lovelace", uitleg: "Engelse wiskundige (1815-1852), eerste programmeur." },
            { woord: "Analytical Engine", uitleg: "Mechanische voorloper van computer (Babbage)." },
          ],
          theorie: "Toets-feit Ada Lovelace:\n• Dochter van beroemde dichter **Lord Byron**.\n• Stierf jong (36 jaar) aan kanker.\n• Voorzag al vroeg dat machines meer konden dan rekenen — bv. muziek componeren!\n• Inspiratie voor Girls Who Code-beweging.",
          voorbeelden: [
            { type: "stap", tekst: "Ada zag al in 1840 dat computers ooit muziek + kunst zouden kunnen maken — visionair." },
            { type: "stap", tekst: "Niet verwarren met Grace Hopper (1906-1992, ook tech-pionier — maakte 'bug' als woord voor software-fout beroemd)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Ada Lovelace = 1e programmeur (jaren 1840) = vrouw. Lang voor moderne computers. Belangrijk feit." }],
          niveaus: {
            basis: "Ada Lovelace = eerste programmeur (jaren 1840, Engelse wiskundige).",
            simpeler: "In 1840 schreef ze het eerste algoritme voor de Analytical Engine.",
            nogSimpeler: "Eerste programmeur",
          },
        },
      },
    ],
  },
  {
    title: "Programmeer-talen + code-omgevingen",
    explanation:
      "Veel verschillende **programmeer-talen** — elk voor ander doel.\n\n**Voor beginners**:\n\n**1. Scratch** *(MIT, gratis)* 🧩:\n• **Drag-and-drop** blokken.\n• Geen typen vereist.\n• Maak games, animaties, verhalen.\n• Voor kinderen 8+.\n• Op scratch.mit.edu.\n\n**2. Python** 🐍:\n• **Makkelijkste echte taal**.\n• Veel gebruikt — AI, web, data, games.\n• Voorbeeld:\n```python\nprint(\"Hallo wereld!\")\nfor i in range(5):\n    print(i)\n```\n\n**3. Code.org**:\n• Online cursussen.\n• Met Disney-, Star Wars-, Minecraft-thema's.\n• Gratis.\n\n**Voor verder**:\n\n**JavaScript**:\n• Maakt websites **interactief**.\n• Klikken op knop → iets gebeurt.\n• Werkt in browser.\n\n**Java**:\n• Voor grote bedrijfsprogramma's.\n• Apps Android.\n\n**C++**:\n• Voor **games** + besturingssystemen.\n• Sneller maar moeilijker.\n• Fortnite, GTA, Counter-Strike — allemaal C++.\n\n**Swift**:\n• Voor **iPhone-apps**.\n• Door Apple.\n\n**Kotlin**:\n• Moderne Android-app-taal.\n\n**HTML + CSS**:\n• Niet echt 'programmeren' maar maakt **uiterlijk** van website.\n• HTML = structuur.\n• CSS = stijl + kleuren.\n\n**Wat kun je MAKEN met code?**\n\n**Games** 🎮:\n• Minecraft *(Java)*.\n• Fortnite *(C++)*.\n• Roblox — kinderen maken eigen games in Roblox Studio.\n• Eigen game in Scratch of Python.\n\n**Websites** 🌐:\n• HTML + CSS + JavaScript.\n• Met platforms als WordPress + Wix kan het zonder code.\n\n**Apps** 📱:\n• Voor iPhone: Swift.\n• Voor Android: Kotlin of Java.\n• Met **Flutter** of **React Native**: 1 keer schrijven, beide platforms.\n\n**AI** 🤖:\n• Python is favoriet.\n• Libraries: TensorFlow, PyTorch.\n• ChatGPT, Stable Diffusion — allemaal Python.\n\n**Robots** 🤖:\n• Microcontroller *(Arduino, Raspberry Pi)*.\n• Hardware + software combineren.\n• Bijvoorbeeld zelfrijdende auto.\n\n**Data-analyse** 📊:\n• Python + R.\n• Voor wetenschap + bedrijven + sport.\n\n**Programmeer-leeromgevingen voor kinderen**:\n\n• **Scratch** *(scratch.mit.edu)* — gratis.\n• **Code.org** — gratis cursussen + games.\n• **Khan Academy** — Computer-Programmeren.\n• **CodeCombat** — leer Python door game.\n• **Minecraft Education** — programmeer in Minecraft.\n• **Roblox Studio** — maak eigen Roblox-spel.\n• **MakeCode** *(micro:bit)* — programmeer fysiek apparaatje.\n\n**Wedstrijden**:\n• **CodeCup** *(NL middelbare school-wedstrijd)*.\n• **First Lego League** *(robotica, met Lego)*.\n• **Hour of Code** *(1 uur leren, december wereldwijd)*.\n\n**Vrouwen in tech**:\n• Lang geweest: weinig vrouwen in IT.\n• Verandert: 25% nu vrouw *(stijgend)*.\n• Beweging: **'Girls Who Code'**, '**She Codes'**.\n\n**Beroepen met programmeren**:\n• Software developer.\n• Data scientist.\n• Game-developer.\n• Web-developer.\n• AI-onderzoeker.\n• Cyber-security analist.\n• Goed betaald + veel werk.\n\n**Toets-feitje**:\n**Linus Torvalds** *(Fins, 1969+)* schreef **Linux** in 1991 als 21-jarige student. Hij liet de code **gratis** zijn voor iedereen *(open source)*. Linux draait nu op: **alle Android-smartphones**, **alle top-500-supercomputers**, **veel servers + auto's**. Eén persoon, enorme impact.",
    checks: [
      {
        q: "Welke programmeertaal werkt met **sleepblokjes** (drag-and-drop) en is gemaakt voor kinderen?",
        options: ["Scratch", "Python", "C++", "Java"],
        answer: 0,
        wrongHints: [null, "Python typ je als tekst. Zoek de taal met blokjes die je versleept.", "C++ is een moeilijke typtaal voor games. Zoek de taal met blokjes.", "Java is een typtaal voor grote programma's en apps. Zoek de taal met blokjes."],
      },
      {
        q: "Welke programmeertaal wordt het meest gebruikt om **AI** te bouwen?",
        options: ["Python", "HTML", "Scratch", "JavaScript"],
        answer: 0,
        wrongHints: [null, "HTML is geen echte programmeertaal; het bouwt de structuur van een website.", "Met Scratch leer je programmeren met blokjes; echte AI bouw je er niet mee.", "JavaScript maakt websites interactief. Voor AI gebruiken onderzoekers meestal een andere taal."],
      },
      {
        q: "Wat is **HTML**?",
        options: ["Structuur van website", "Programmeer-taal voor algoritmen", "Een rekenprogramma", "Stijl en kleuren van een website"],
        answer: 0,
        wrongHints: [null, "HTML heeft geen if-statements of loops, dus het is geen echte programmeertaal. Wat doet het dan wél voor een website?", "Met HTML reken je niet. Codes als <h1> en <p> zeggen wat een kop en wat een alinea is — waarvan?", "Kleuren en lettertypes regelt CSS, niet HTML. Codes als <h1> en <p> zeggen wat een kop en wat een alinea is — waarvan?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is HTML?", tekst: "**HTML** = **HyperText Markup Language**. Het is de **structuur-taal** voor websites: welke tekst is een kop, welke een paragraaf, waar staan plaatjes, links. Elke website ter wereld gebruikt het." },
            { titel: "Voorbeeld HTML", tekst: "```html\n<h1>Welkom!</h1>\n<p>Dit is een paragraaf.</p>\n<img src=\"kat.jpg\">\n<a href=\"https://nos.nl\">Link naar NOS</a>\n```\n• `<h1>` = grote kop\n• `<p>` = paragraaf\n• `<img>` = plaatje\n• `<a>` = link" },
            { titel: "HTML ≠ programmeer-taal", tekst: "HTML is **markup** (= opmaak), geen programmeer-taal. Het beschrijft hoe iets eruit ziet, maar 'denkt' niet. Echte logica + algoritmen schrijf je in JavaScript (gedrag); CSS regelt kleur/stijl. Allebei bovenop HTML." },
          ],
          woorden: [
            { woord: "HTML", uitleg: "HyperText Markup Language — structuur van websites." },
            { woord: "CSS", uitleg: "Stijl + kleur van website." },
            { woord: "JavaScript", uitleg: "Gedrag (knoppen, animaties, interactie)." },
          ],
          theorie: "Toets-feit website-bouwstenen:\n• **HTML** = structuur (wat staat waar)\n• **CSS** = stijl (kleur, lettertype, lay-out)\n• **JavaScript** = gedrag (klikken, animaties)\nDe 3 'kerntalen' van elke website.",
          voorbeelden: [
            { type: "stap", tekst: "Rechter-muisklik op willekeurige website → 'Inspect element' → je ziet de HTML achter de site." },
            { type: "stap", tekst: "Wordpress/Wix maken HTML voor je. Maar onder water = nog steeds HTML." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "HTML = structuur. Geen echte programmeer-taal — geen if-statements, loops. Maar wel onmisbaar voor websites." }],
          niveaus: {
            basis: "HTML = structuur van website.",
            simpeler: "HTML beschrijft welke delen van een website een kop, paragraaf of link zijn.",
            nogSimpeler: "Website-structuur",
          },
        },
      },
      {
        q: "Wie schreef **Linux**?",
        options: ["Linus Torvalds", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"],
        answer: 0,
        wrongHints: [null, "Hij richtte Microsoft op.", "Hij richtte Apple op.", "Hij bedacht het wereldwijde web."],
      },
    ],
  },
  {
    title: "Eind-toets — algoritme mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat is een **algoritme**?", options: ["Stappenplan", "Spelletje", "Computer", "Rekenmachine"], answer: 0, wrongHints: [null, "Een spel kán algoritmes gebruiken, maar is het er zelf een?", "Een computer vóért algoritmes uit.", "Een rekenmachine is een apparaat. Is een algoritme een ding dat je kunt vastpakken?"] },
      { q: "Welke programmeertaal werkt met **sleepblokjes** (drag-and-drop)?", options: ["Scratch", "Python", "C++", "JavaScript"], answer: 0, wrongHints: [null, "Python typ je als tekst. Welke taal werkt met blokjes?", "C++ typ je als tekst. Welke taal werkt met blokjes?", "JavaScript typ je als tekst. Welke taal werkt met blokjes?"] },
      { q: "Wat doet een **loop** in een programma?", options: ["Iets herhalen", "Een keuze maken", "Een waarde onthouden", "Het programma afsluiten"], answer: 0, wrongHints: [null, "Kiezen doet een if-statement (als-dan).", "Onthouden doet een variabele.", "Denk aan het woord 'lus': rondgaan of stoppen?"] },
      { q: "Wie wordt gezien als de **eerste programmeur** ooit?", options: ["Ada Lovelace", "Bill Gates", "Steve Jobs", "Tim Berners-Lee"], answer: 0, wrongHints: [null, "Bill Gates leefde veel later (20e eeuw).", "Steve Jobs leefde ook veel later.", "Tim Berners-Lee bedacht rond 1990 het web — was hij de allereerste?"] },
      { q: "Wie heeft **Linux** gemaakt?", options: ["Linus Torvalds", "Bill Gates", "Steve Jobs", "Edsger Dijkstra"], answer: 0, wrongHints: [null, "Bill Gates maakte Windows bij Microsoft.", "Steve Jobs richtte Apple op.", "Dijkstra bedacht het kortste-pad-algoritme, geen besturingssysteem."] },
      { q: "Welke **Nederlandse informaticus** bedacht het kortste-pad-algoritme?", options: ["Edsger Dijkstra", "Johan Cruijff", "Boyan Slat", "Tim Berners-Lee"], answer: 0, wrongHints: [null, "Johan Cruijff was een beroemde voetballer, geen informaticus.", "Boyan Slat ruimt plastic op uit de oceaan.", "Tim Berners-Lee is Engels en bedacht het web."] },
      {
        q: "Een **if-else**-instructie betekent?",
        options: ["ALS X dan dit, ANDERS dat", "Herhaal iets 10 keer", "Wacht 5 seconden", "Maak een variabele"],
        answer: 0,
        wrongHints: [null, "Herhalen doet een loop. Wat betekenen 'if' en 'else' in het Nederlands?", "Wachten is een andere opdracht. Wat betekenen 'if' en 'else' in het Nederlands?", "Een variabele maken is onthouden. Wat betekenen 'if' en 'else' in het Nederlands?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is if-else?", tekst: "**If-else** (Engels voor 'als-anders') is een **beslissings-instructie** in elke programmeertaal. Computer checkt een **conditie** en kiest één van twee paden:\n\n```\nif (regen):\n    pak paraplu\nelse:\n    laat paraplu thuis\n```\n\nMens-vertaling: 'ALS het regent → paraplu mee. ANDERS → niet.'" },
            { titel: "Voorbeelden in dagelijks leven", tekst: "Computers doen if-else miljoenen keren per dag:\n• **Login**: ALS wachtwoord klopt → laat binnen, ANDERS → toon fout\n• **Spel**: ALS speler nog 0 levens → game over, ANDERS → ga door\n• **Webshop**: ALS in voorraad → toon 'koop', ANDERS → 'wachtlijst'\n• **Self-driving car**: ALS rood licht → stop, ANDERS → rij door" },
            { titel: "Toets-tip: 3 belangrijke programmeer-bouwstenen", tekst: "Onthoud deze 3:\n1. **Sequentie** — stappen in volgorde uitvoeren\n2. **Conditie** (if-else) — beslissing nemen\n3. **Loop** (herhaling) — iets X keer of zolang nodig herhalen\n\nAlle programma's combineren deze 3 dingen, hoe complex ook." },
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
          niveaus: { basis: "Als-dan-anders.", simpeler: "If-else = ALS-DAN-ANDERS. Computer checkt iets en kiest 1 van 2 paden. Bv. ALS wachtwoord klopt → laat binnen.", nogSimpeler: "Als-anders" },
        },
      },
      {
        q: "Een **bug** in software is?",
        options: ["Fout in de code", "Spinnetje in de computer", "Snelheid van de chip", "Wachtwoord-kraker"],
        answer: 0,
        wrongHints: [null, "Niet letterlijk — al komt het woord wel van een echte mot in een oude computer (1947).", "Snelheid gaat over hoe snel een chip rekent. Een bug is iets wat misgaat.", "Een programma dat wachtwoorden kraakt, is iets anders. Een bug gaat per ongeluk mis."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een bug?", tekst: "Een **bug** is een **fout in software**. Code werkt niet zoals bedoeld. Voorbeelden:\n• Knop reageert niet als je klikt\n• App crasht plotseling\n• Spelletje geeft 999999 punten ipv 100\n• Rekenmachine zegt 2+2=5\n\nElke programmeur — zelfs de allerbeste — schrijft bugs. Goede programmeurs zoeken + verbeteren bugs snel." },
            { titel: "Waar komt de naam 'bug' vandaan?", tekst: "**Echt verhaal uit 1947**: het team van pionier-programmeur **Grace Hopper** vond een **echte mot** in hun computer (Harvard Mark II). De mot zat tussen schakelaars en blokkeerde de werking. In het logboek werd geschreven: 'first actual case of bug being found'. Sindsdien = bug = software-fout.\n\nHet woord 'bug' bestond al eerder in techniek (Thomas Edison gebruikte het), maar Hopper's verhaal werd legendarisch." },
            { titel: "Toets-feit: bug-jacht = debuggen", tekst: "Het zoeken + oplossen van bugs heet **'debuggen'**. Programmeurs gebruiken:\n• **Print-statements** — laat zien wat code doet\n• **Debugger** — stap-voor-stap door code lopen\n• **Tests** — automatisch checken of code klopt\n• **Vraag aan AI** (ChatGPT/Copilot) — modern hulpmiddel" },
          ],
          woorden: [
            { woord: "bug", uitleg: "Fout in software. Maakt dat programma niet werkt zoals bedoeld." },
            { woord: "debuggen", uitleg: "Bugs zoeken en oplossen. Letterlijk: 'on-buggen'." },
            { woord: "crash", uitleg: "Programma stopt onverwacht door bug. App sluit, scherm zwart." },
          ],
          theorie: "Beroemde bugs in geschiedenis:\n• **Y2K-bug (2000)** — angst dat alle computers zouden crashen op 1 jan 2000 (datum-format) — viel mee\n• **NASA Mars Climate Orbiter (1999)** — fout met Engelse vs metrische eenheden → ruimtesonde van $125 mln verloren\n• **Knight Capital (2012)** — bug zorgde voor $440 mln verlies in 45 minuten\n• **Therac-25 (1985-87)** — radiotherapie-bug: 6 ongelukken met zware overdoses, meerdere patiënten overleden\n\nProgramma-fouten kunnen ECHTE gevolgen hebben.",
          voorbeelden: [
            { type: "feit", tekst: "Grace Hopper's mot zit nu in het Smithsonian Museum (Washington DC), opgeplakt in een logboek." },
            { type: "feit", tekst: "Top-software heeft ~1 bug per 1000 regels code. Een browser heeft 10+ miljoen regels = 10.000+ bugs." },
          ],
          basiskennis: [{ onderwerp: "Niet beestje", uitleg: "Hoewel het verhaal echt is, betekent 'bug' nu uitsluitend code-fout — geen letterlijk insect." }],
          niveaus: { basis: "Fout in code.", simpeler: "Een bug is een fout in software die maakt dat programma niet goed werkt. Naam komt van een echte mot in oude computer (1947).", nogSimpeler: "Code-fout" },
        },
      },
      {
        q: "Wat doet een **variabele** in code?",
        options: ["Onthoudt een waarde onder een naam", "Voert berekening uit", "Toont bericht aan gebruiker", "Sluit programma af"],
        answer: 0,
        wrongHints: [null, "Rekenen doet de computer met tekens als + en ×. Wat doet een variabele zelf?", "Een bericht tonen is output. Wat doet een variabele zelf?", "Afsluiten is een andere opdracht. Denk aan een doosje met een naam erop."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een variabele?", tekst: "Een **variabele** is een **'doosje met naam'** in code. Computer onthoudt er een waarde in, en jij gebruikt de naam om de waarde op te halen.\n\nVoorbeeld:\n```\nscore = 0\nleven = 3\nspeler_naam = 'Floor'\n```\n\nLater in code: `score = score + 10` (score wordt 10)." },
            { titel: "Waarom 'variabele'?", tekst: "Heet zo omdat de waarde **kan veranderen** (variëren). Anders dan een **constante** (bv. π = 3,14, blijft altijd hetzelfde).\n\nIn games:\n• Score VERANDERT (variabele)\n• Maximum-leven KAN constant zijn (bv. altijd 3)\n• Speler-naam VERANDERT per speler" },
            { titel: "Toets-feit: data-types", tekst: "Variabelen hebben **types** (soorten waarden):\n• **Getal** (int): score = 100\n• **Tekst** (string): naam = 'Floor'\n• **Waar/onwaar** (boolean): geactiveerd = True\n• **Lijst**: hoogste_scores = [100, 85, 70]\n\nElk type heeft eigen regels. Bij een voorbeeld kun je dan vragen: 'welk type is X?'" },
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
          basiskennis: [{ onderwerp: "Geen 'doos'-tegel-cito", uitleg: "Snap vooral het idee: 'wat doet een variabele?' Antwoord = 'onthoudt waarde met naam'." }],
          niveaus: { basis: "Onthoudt waarde.", simpeler: "Variabele = doosje met naam in code dat een waarde onthoudt. Bv. score = 0. Later: score = 10.", nogSimpeler: "Doosje met naam" },
        },
      },
      { q: "Wat is een **algoritme**?", options: ["Stappenplan om iets op te lossen", "Spel dat je op de computer speelt", "Rekenmachine die heel snel rekent", "Verhaal dat met 'er was eens' begint"], answer: 0, wrongHints: [null, "Een spel kán algoritmes gebruiken, maar is het er zelf een?", "Een rekenmachine is een apparaat. Is een algoritme een ding?", "Een verhaal vertelt iets — lost het een probleem op?"] },
      { q: "Welke programmeertaal is **kindvriendelijk** met sleep-blokjes?", options: ["Scratch","Python","JavaScript","C++"], answer: 0, wrongHints: [null, "Python typ je als tekst. Zoek de taal met blokjes.", "JavaScript typ je als tekst. Zoek de taal met blokjes.", "C++ is een moeilijke typtaal. Zoek de taal met blokjes."] },
      { q: "Wat is een **loop** (lus) in code?", options: ["Stappen herhalen","Een keuze maken","Een waarde onthouden","Een fout melden"], answer: 0, wrongHints: [null, "Kiezen doet een if-statement. Denk aan het woord 'lus': wat doet die?", "Onthouden doet een variabele. Denk aan het woord 'lus'.", "Een fout heet een bug. Denk aan het woord 'lus': rondgaan of stoppen?"] },
      { q: "Hoe wordt **Ada Lovelace** gezien in de geschiedenis?", options: ["Eerste programmeur","Eerste astronaut","Eerste president","Eerste schaker"], answer: 0, wrongHints: [null, "Ada leefde van 1815 tot 1852, lang vóór de eerste raketten.", "Ada zat niet in de politiek. Waar werkte ze aan met Charles Babbage?", "Van schaken is bij Ada niets bekend; ze was heel goed in wiskunde."] },
      { q: "Wat is een **if-else** in code?", options: ["Beslissing: ALS X DAN Y, ANDERS Z", "Lus: DOE X tien keer achter elkaar", "Opslag: ONTHOUD het getal X als Y", "Fout: X KLOPT NIET, stop het programma"], answer: 0, wrongHints: [null, "Een lus herhaalt. Wat betekenen 'if' en 'else' in het Nederlands?", "Zo onthoud je iets in een variabele — dat is een andere bouwsteen.", "Een fout in code heet een bug — dat is iets anders."] },
      { q: "Wat is een **bug** in code?", options: ["Een fout","Een dier","Een feature","Een snelle computer"], answer: 0, wrongHints: [null, "Letterlijk betekent bug 'beestje', maar in code bedoel je iets anders.", "Een feature is juist iets wat wél goed werkt.", "Gaat het om snelheid of om iets wat misgaat?"] },
      { q: "Wie was **Linus Torvalds**?", options: ["Maker van Linux","Oprichter van Microsoft","Oprichter van Apple","Bedenker van het web"], answer: 0, wrongHints: [null, "Microsoft is van Bill Gates. Lees het toets-feitje over de Finse student nog eens.", "Dat was Steve Jobs.", "Het web is bedacht door Tim Berners-Lee. Lees het toets-feitje over de Finse student nog eens."] },
      { q: "Wat is **open source**?", options: ["Code die iedereen mag zien + gebruiken", "Code die alleen de maker mag zien", "Code die je computer kapotmaakt", "Code die je alleen met geld krijgt"], answer: 0, wrongHints: [null, "Dat is juist gesloten code. Wat betekent 'open'?", "Dat is een virus — schadelijke software. Wat betekent 'open' bij code?", "Moet je voor open code betalen? Denk aan wat 'open' betekent."] },
      { q: "Wat is een **functie** in programmeren?", options: ["Stukje code dat een taak doet", "Een rij stappen die zich herhaalt", "Een vakje dat een getal onthoudt", "Een foutje waardoor code vastloopt"], answer: 0, wrongHints: [null, "Dat is een loop (lus).", "Dat is een variabele — een andere bouwsteen.", "Een fout heet een bug."] },
      { q: "Welke is **niet** een programmeertaal?", options: ["Excel","Python","JavaScript","Java"], answer: 0, wrongHints: [null, "Bekende schrijf-taal voor data + AI.", "Schrijf-taal voor websites (browser).", "Schrijf-taal voor Android-apps + servers."] },
      { q: "**HTML** is voor?", options: ["De structuur van websites", "Het bouwen van telefoon-apps", "Het maken van 3D-spellen", "Het rekenen met grote getallen"], answer: 0, wrongHints: [null, "Voor apps gebruik je meestal talen als Swift of Kotlin.", "Spellen maak je meestal met talen als C++ of in Scratch.", "Heeft HTML met sommen te maken, of met webpagina's?"] },
      { q: "Wat doet **Google's PageRank**-algoritme?", options: ["Webpagina's rangschikken op relevantie", "Wachtwoorden van websites kraken", "Webpagina's vertalen naar het Engels", "E-mails versturen naar veel mensen"], answer: 0, wrongHints: [null, "Is dat de taak van een zoekmachine?", "Vertalen doet een ander programma. Wat betekent 'rank'?", "Dat doet een mailprogramma."] },
      { q: "Wat doet het **algoritme van Dijkstra** in een navigatie-app?", options: ["De kortste route vinden","De snelheid meten","Je plek bepalen","De kaart tekenen"], answer: 0, wrongHints: [null, "Snelheid meten doet de snelheidsmeter van de auto. Wat rekent het algoritme uit?", "Je plek bepalen doen de satellieten (GPS). Wat rekent het algoritme daarna uit?", "De kaart staat al opgeslagen. Wat rekent het algoritme uit met die kaart?"] },
      { q: "Wat is een **list/lijst** in code?", options: ["Geordende verzameling items", "Eén los item zonder volgorde", "Melding dat de code fout is", "Stukje code dat een taak doet"], answer: 0, wrongHints: [null, "Een lijst bevat er meer dan één.", "Een fout heet een bug.", "Dat is een functie — een andere bouwsteen."] },
      { q: "Welk **probleem** kan een algoritme niet oplossen?", options: ["Een som die geen uitkomst heeft","Een lijst op alfabet zetten","Een naam in een lijst vinden","Een patroon in foto's herkennen"], answer: 0, wrongHints: [null, "Sorteren is juist een klassieke klus voor een algoritme, zoals boeken op alfabet zetten.", "Zoeken is juist een klassieke klus voor een algoritme, zoals een naam in het telefoonboek vinden.", "Patronen herkennen doen algoritmes juist heel goed, bijvoorbeeld gezichten op foto's."] },
      { q: "Wat is **AI** (kunstmatige intelligentie)?", options: ["Software die patronen leert", "Robot die alleen in films bestaat", "Een gewone rekenmachine", "Reclame die je online ziet"], answer: 0, wrongHints: [null, "AI bestaat echt, niet alleen in films.", "Een rekenmachine volgt vaste regels — leert hij iets bij?", "Reclame kán AI gebruiken, maar is zelf geen AI."] },
      { q: "Wat is een **hash** in computers?", options: ["Unieke digitale code","Een soort computerspel","Een snelle internetkabel","Een toets op het toetsenbord"], answer: 0, wrongHints: [null, "Een hash speel je niet. Denk aan een digitale vingerafdruk van een bestand.", "Een kabel kun je vastpakken. Denk aan een digitale vingerafdruk van een bestand.", "Het hekje # heet ook hash, maar hier gaat het om iets in de computer: een digitale vingerafdruk van een bestand."] },
      { q: "Wie ontwierp het **WWW** (web)?", options: ["Tim Berners-Lee","Bill Gates","Steve Jobs","Linus Torvalds"], answer: 0, wrongHints: [null, "Bill Gates is bekend van Microsoft en Windows op je computer — is dat hetzelfde als het web bedenken?", "Steve Jobs maakte de iPhone en Apple-computers — bouwde hij ook het wereldwijde web?", "Linus Torvalds maakte het besturingssysteem Linux — vond hij daarmee het web uit?"] },
      { q: "Wat is een **stappenplan** in code (samenvatting)?", options: ["Geordende stappen om probleem op te lossen", "Losse stappen in willekeurige volgorde", "Melding dat er een fout in de code zit", "Game die je op de computer speelt"], answer: 0, wrongHints: [null, "Doet de volgorde er bij een stappenplan niet toe?", "Een fout heet een bug.", "Een game kán stappenplannen gebruiken, maar is er zelf geen."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const algoritmenProgrammerenPo = {
  id: "algoritmen-programmeren-po",
  title: "Algoritmen + programmeren (groep 6-8, Doorstroomtoets-stof)",
  emoji: "📋",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — burgerschap / digitaal",
  prerequisites: [
    { id: "digitale-geletterdheid-po", title: "Digitale geletterdheid", niveau: "1F" },
  ],
  intro:
    "Algoritmen + programmeren voor groep 6-8, Doorstroomtoets-stof — wat is algoritme (stappenplan, recept, GPS-Dijkstra-NL'er) + bouwstenen (variabele/if/loop/functie/lijst) + Ada Lovelace + talen (Scratch/Python/JavaScript) + Linus Torvalds Linux. Sluit op digitale-geletterdheid. ~15 min.",
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

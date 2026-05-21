// Leerpad: Examen-oefenpad Nederlands VMBO-GL/TL 2023 tijdvak 1.
// 1e Nederlands-pilot 2026-05-21. 6 echte MC-vragen uit 20, gespreid over
// alle 4 teksten. Bron: examenblad.nl, 0011 GT 2023-1.
// Vragen: V1 (inleiding) · V10 (functie alinea) · V18 (doel) ·
// V20 (tekstverband doel-middel) · V23 (hoofdonderwerp) · V28 (gevolg).

const tekst1 = {
  titel: "T1 — Ook de snapchatgeneratie vindt technologie vaak ingewikkeld",
  body:
    "**(1)** Ze groeiden op met smartphones, maar ook jongeren begrijpen technologie eigenlijk niet altijd. Hoe school je ze bij?\n\n**(2)** Deze generatie snapt technologie wel, wordt vaak gedacht. Jongeren zijn verslaafd aan TikTok, verslingerd aan WhatsApp, verknocht aan Snapchat — hún hoef je technologie niet meer uit te leggen.\n\n**(3)** Maar dat is een misvatting. \"Als de knoppencombinaties anders zijn, of de plaatjes, dan weten sommigen niet meer hoe een programma werkt\", zegt Wouter de Jong, docent Engels op het Stedelijk Gymnasium in Leiden. \"Geef jongeren Signal in plaats van WhatsApp en een deel zal het niet snappen.\"\n\n**(4)** Ook Jelte Wouters, docent bij Terra, een groene vmbo- en praktijkschool in Winsum, zegt dat schijnbaar simpele opdrachten niet altijd worden begrepen. \"Lever de opdracht in als pdf. Upload als bijlage. Maak een mapje. Niemand die het ze geleerd heeft, omdat gedacht werd dat ze het wel weten.\"\n\n**(5)** Het verschil tussen wat leerlingen digitaal kunnen, is groot. Dit blijkt uit een leerlingenmonitor in opdracht van Kennisnet. Voor dit onderzoek, uitgevoerd door de Universiteit Twente, maakten 746 leerlingen tussen 10 en 13 jaar een digitale toets, waarbij ze bijvoorbeeld een sterk wachtwoord moesten bedenken en informatie op internet moesten opzoeken. Vwo'ers blijken over meer digitale vaardigheden te beschikken dan vmbo'ers, maar er zijn ook hoog presterende vmbo'ers en laag presterende vwo'ers.\n\n**(15)** Arjan Stoffels, directeur van vakcollege ISW Irenestraat in Poeldijk, ziet dat leerlingen al een stuk digitaal vaardiger zijn dan tien jaar geleden. \"Laatst was er in een klas een mooie discussie. Leerlingen kwamen tot de conclusie dat de komst van digitale middelen ook beperkt: als je je telefoon niet goed instelt, weten vrienden waar je zit. Als je niet binnen een minuut reageert, worden ze boos, ook al ben je aan het eten. Je bent minder vrij.\"\n\n*(NRC, 16 maart 2020 — fragment, alinea's 6-14 weggelaten voor leesbaarheid)*",
};

const tekst2 = {
  titel: "T2 — In 2025 proefdiervrij? Nee, die termijn zal Nederland niet halen",
  body:
    "**(1)** In Nederland worden jaarlijks meer dan 400.000 dieren gebruikt voor onderzoek. Het zijn vooral muizen en ratten die worden ingezet voor wetenschappelijk onderzoek of om de risico's van giftige stoffen te bepalen. Donderdag wijdt het College ter Beoordeling van Geneesmiddelen (CBG) een studiedag aan het terugdringen van het proefdiergebruik voor medicijnen. \"We gaan gestaag de goede kant op\", zegt Coenraad Hendriksen, emeritus hoogleraar Alternatieven voor Dierproeven. Maar uitbannen is lastig. \"We leven in een hypocriete maatschappij. We willen geen dierproeven, maar wel veilige en werkzame geneesmiddelen.\"\n\n**(3)** *Moeten het er zo veel zijn?* \"Het gebruik is al flink verminderd. Bijvoorbeeld door andere procedures te gebruiken of een slimmere opzet van de test. Het vaccin tegen tetanus bijvoorbeeld testten we vroeger door een dier ermee in te enten en het een paar weken later een hoge dosis te geven. Nu nemen we bij ingeënte muizen bloed af en kijken we hoeveel antistoffen erin zitten. Dat scheelt het dier veel leed en bezorgt ons veel meer informatie. En bij vaccins tegen difterie testen we de veiligheid op celkweken. Dan hebben we helemaal geen proefdieren meer nodig.\"\n\n**(5)** *Hoe zit het met alternatieven, zoals organen op een chip?* \"Dat is een veelbelovende ontwikkeling. Met zo'n orgaan op een chip kun je bijvoorbeeld een minilevertje nabootsen en heb je verschillende celtypen bijeen. Dat biedt mogelijkheden, maar heeft tijd nodig. De voormalige staatssecretaris Martijn van Dam heeft eens gezegd dat Nederland in 2025 proefdiervrij zou moeten zijn. We gaan de goede kant op, maar die termijn zullen we niet halen.\"\n\n*(Trouw, 13 februari 2020 — interview-fragment)*",
};

const tekst3 = {
  titel: "T3 — Advertentie Vitens: 'Schoon en veilig drinkwater is onbetaalbaar'",
  body:
    "**Schoon en veilig drinkwater is onbetaalbaar**\n\nIn 2021 betaal je €0,70 voor 1.000 liter (1 m³) perfect drinkwater en €45,78 per jaar voor vastrecht. Beide bedragen zijn inclusief 9% btw. Schoon en veilig drinkwater is goedkoop, maar tegelijk onbetaalbaar, omdat het van groot belang is voor onze gezondheid en ons welzijn. Maar ons drinkwater staat door allerlei factoren steeds meer onder druk. **Om het voor de toekomst veilig te stellen, gaan we in die toekomst investeren.** Onze ambitie daarbij is helder: in 2030 willen we dat elke druppel duurzaam is. Lees meer over onze ambitie en de nieuwe tarieven op Vitens.nl.\n\n*water voor nu en later — Vitens*\n\n*(advertentie van Vitens in de Volkskrant, 30 november 2020)*",
};

const tekst4 = {
  titel: "T4 — De strijd van de bieb om de puber die niet lezen wil",
  body:
    "**(1)** Hiphop en de bibliotheek: niet meteen een combinatie die je verwacht. Toch klinken in de openbare bibliotheek in Veenendaal op een van de verdiepingen zware beats. Een groep 16-jarigen staat in een zaaltje fanatiek te dansen.\n\n**(2)** Hiphopdanser Melano Bruinhart (22) doet de jongeren voor hoe ze de juiste bounce in hun lijf kunnen brengen. De bibliotheek hoopt met de les eenzelfde soort enthousiasme los te maken voor boeken en lezen. \"Je moet ze echt verleiden om hier te komen\", zegt medewerker Cornelie de Kuijper.\n\n**(3)** Bibliotheken in Nederland hebben het moeilijk: het afgelopen decennium verdwenen er bijna 140. De Raad van Cultuur, die vandaag met een advies over bibliotheken komt voor het ministerie van OCW, vindt die ontwikkeling zorgelijk. Want de bieb is een belangrijke troef in de strijd om jongeren weer aan het lezen te krijgen.\n\n**(5)** Lezen én nog eens lezen is de oplossing. Maar bijna de helft van onze 15-jarigen vindt lezen tijdverspilling. Als Marleen Davelaar, docent Nederlands in Veenendaal, aan leerlingen uit klas 4 vmbo vraagt wie er thuis weleens voor de lol een boek pakt, steekt niemand zijn hand op.\n\n**(6)** Dat geldt ook voor de 16-jarige Romy. Terwijl ze in de mediatheek haar vingers langs wat kaften laat gaan, keurt ze de boeken vooral op dikte. Hoe dunner, hoe beter. Kleine letters? Een echte afknapper. \"Ik kijk liever filmpjes of ga met mijn vriendinnen de stad in.\"\n\n**(10)** De Onderwijsraad benadrukt dat het lezen op allerlei vlakken onder druk staat. **Thuis lezen ouders steeds minder vaak. Jongeren missen zo een goed voorbeeld, leren niet dat lezen ook leuk en ontspannend kan zijn.** Wie opgroeit bij niet-lezende ouders komt ook thuis geen rondslingerende boeken tegen die de interesse kunnen wekken.\n\n*(naar Nieuwsuur op NOS.nl, 12 november 2020 — fragment)*",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Nederlands 2023 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2023/vmbo-gl/documenten/cse-1/gt-0011-a-23-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie:
    "Cito-truc Nederlands leesvaardigheid: kop + alinea 1 = onderwerp + invalshoek. Alinea 2-4 = uitwerking met voorbeelden. Slot-alinea = conclusie/nuancering/oproep. Tekstverbanden: oorzaak-gevolg (daardoor/dus), opsomming (en, ook), tegenstelling (maar, echter), doel-middel (om...te), reden (omdat, want), voorbeeld (zoals, namelijk).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Tekst-structuur (inleiding & alinea-functie)", emoji: "📖", from: 0, to: 1 },
  { letter: "B", title: "Doel & hoofdonderwerp", emoji: "🎯", from: 2, to: 3 },
  { letter: "C", title: "Tekstverband binnen alinea", emoji: "🔗", from: 4, to: 5 },
];

const steps = [
  {
    title: "Vraag 1 — Hoe wordt T1 (Snapchatgeneratie) ingeleid?",
    explanation: "Echte examenvraag uit Nederlands 2023-T1, vraag 1.",
    emoji: "📖",
    checks: [{
      q: "Hoe wordt de tekst ingeleid in alinea 1? De tekst wordt ingeleid door een vraag te stellen die belangrijk is voor de tekst en door",
      options: [
        "de aanleiding voor het schrijven van de tekst te geven.",
        "een anekdote bij de tekst te vertellen.",
        "een voorbeeld bij het onderwerp van de tekst te geven.",
        "het centrale probleem van de tekst te benoemen.",
      ],
      answer: 3,
      wrongHints: [
        "Aanleiding = waarom NU geschreven (gebeurtenis, rapport). Hier wordt geen losse aanleiding genoemd.",
        "Anekdote = klein verhaaltje over een persoon/gebeurtenis. Alinea 1 vertelt geen verhaaltje.",
        "Voorbeeld = concreet geval ter illustratie. Alinea 1 noemt geen concreet voorbeeld.",
        null,
      ],
      explanation: "Alinea 1 zegt: 'Ze groeiden op met smartphones, maar ook jongeren begrijpen technologie eigenlijk niet altijd. Hoe school je ze bij?' Dat IS het probleem dat de hele tekst behandelt — jongeren ≠ automatisch digitaal vaardig. De vraag 'hoe school je ze bij' zet dat probleem als rode draad neer. Antwoord D.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "kop + alinea 1 lezen = onderwerp + invalshoek vinden" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "inleidingstypen herkennen — kern" },
      ],
      uitlegPad: compact(
        "5 inleidings-typen: AANLEIDING (gebeurtenis NU), ANEKDOTE (verhaaltje), VOORBEELD (concreet geval), PROBLEEM (rode draad-issue), DEFINITIE (wat IS X). Hier: 'jongeren snappen technologie niet' = probleem dat tekst oplost. = D.",
        {
          basis: "Alinea 1 noemt een probleem dat de tekst gaat behandelen. = D.",
          simpeler: "Probleem = iets dat MIS is. 'Jongeren ≠ slim met techniek' is mis → probleem. = D.",
          nogSimpeler: "Probleem = D.",
        },
        [
          { woord: "aanleiding", uitleg: "De gebeurtenis NU die maakte dat dit geschreven werd." },
          { woord: "anekdote", uitleg: "Kort verhaaltje over een persoon of gebeurtenis." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 10 — Functie van laatste alinea (T1)",
    explanation: "Echte examenvraag uit Nederlands 2023-T1, vraag 10.",
    emoji: "📖",
    checks: [{
      q: "Wat is de functie van alinea 15? Alinea 15 geeft",
      options: [
        "een conclusie.",
        "een nuancering.",
        "een samenvatting.",
        "een toekomstverwachting.",
      ],
      answer: 1,
      wrongHints: [
        "Conclusie = de tekst eindelijk kort samenvatten met EINDOORDEEL. Alinea 15 trekt geen oordeel.",
        null,
        "Samenvatting = ALLE punten kort herhalen. Alinea 15 noemt alleen 1 nieuw inzicht.",
        "Toekomstverwachting = voorspellen wat ER GAAT gebeuren. Alinea 15 spreekt over NU.",
      ],
      explanation: "Alinea 15 voegt iets toe: leerlingen ZIJN wel vaardig, MAAR digitale middelen hebben óók nadelen ('je bent minder vrij'). Dat is een nuancering — niet zwart/wit, maar 'ja, maar ook...'. Antwoord B.",
      examenBron: BRON_LABEL(10),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "alinea-functies herkennen (conclusie/nuancering/samenvatting)" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "structurele rol van slot-alinea — kern" },
      ],
      uitlegPad: compact(
        "Slot-alinea kan: (1) CONCLUSIE = eindoordeel, (2) SAMENVATTING = alles kort herhalen, (3) NUANCERING = 'ja, maar...' inzicht toevoegen, (4) TOEKOMSTVERWACHTING = voorspellen, (5) OPROEP = doe iets. Alinea 15: 'wel digitaal vaardig, maar minder vrij' = ja, maar = nuancering. = B.",
        {
          basis: "'Ja, maar...' inzicht = nuancering. = B.",
          simpeler: "Nuancering = een KLEIN tegendeel toevoegen. 'Wel vaardig, MAAR minder vrij.' = B.",
          nogSimpeler: "Nuancering = B.",
        },
        [
          { woord: "nuancering", uitleg: "Iets verzachten of toevoegen dat het zwart-wit-beeld kleurt." },
          { woord: "conclusie", uitleg: "Het eindoordeel of besluit van een redenering." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 18 — Doel van T2 (proefdieren-tekst)",
    explanation: "Echte examenvraag uit Nederlands 2023-T1, vraag 18.",
    emoji: "🎯",
    checks: [{
      q: "Met welk doel lijkt deze tekst te zijn geschreven? De tekst wil de lezer vooral",
      options: [
        "informeren over de verschillende ontwikkelingen in het proefdiergebruik voor geneesmiddelen.",
        "informeren over het feit dat mensen hypocriet zijn als het gaat om hun houding tegenover proefdiergebruik.",
        "overtuigen van de noodzaak om proefdieren voor geneesmiddelenonderzoek te gebruiken.",
        "overtuigen van het feit dat proefdiergebruik voor medicijnen teruggedrongen moet worden.",
      ],
      answer: 0,
      wrongHints: [
        null,
        "Te smal — hypocrisie wordt 1× genoemd (citaat Hendriksen), niet de hele tekst.",
        "Overtuigen vraagt MENING + ARGUMENTEN. Hier vooral feiten + interview = informeren.",
        "Overtuigen vraagt MENING + ARGUMENTEN. De tekst neemt geen kant — wisselt voor- en nadelen af.",
      ],
      explanation: "De tekst is een interview met een onderzoeker over hoe het staat met proefdier-vermindering: nieuwe methodes (bloedtest, celkweek, orgaan-op-chip), waarom het langzaam gaat (regelgeving), wat de stand van zaken is. Geen MENING dat het anders MOET — wel uitleg over verschillende ontwikkelingen. = informeren. Antwoord A.",
      examenBron: BRON_LABEL(18),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "doel-typen herkennen (informeren/overtuigen/amuseren/activeren)" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "schrijfdoel onderscheiden — kern" },
      ],
      uitlegPad: compact(
        "4 schrijfdoelen: INFORMEREN (feiten, neutraal, leren), OVERTUIGEN (mening + argumenten), AMUSEREN (humor, plezier), ACTIVEREN (oproep, doe iets). Interview met experts + feiten + verschillende ontwikkelingen = informeren. = A.",
        {
          basis: "Interview met feiten, geen mening = informeren. = A.",
          simpeler: "Informeren = JOU iets LEREN. Zonder dat de schrijver iets WIL. = A.",
          nogSimpeler: "Informeren = A.",
        },
        [
          { woord: "informeren", uitleg: "Feiten geven zodat de lezer iets leert (zonder mening op te dringen)." },
          { woord: "overtuigen", uitleg: "Lezer laten geloven in een mening met argumenten." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 23 — Hoofdonderwerp T4 (bibliotheek + hiphop)",
    explanation: "Echte examenvraag uit Nederlands 2023-T1, vraag 23.",
    emoji: "🎯",
    checks: [{
      q: "Wat is het hoofdonderwerp van deze tekst?",
      options: [
        "activiteiten om de leesmotivatie van jongeren in kaart te brengen",
        "activiteiten om jongeren aan het lezen te krijgen",
        "inspanningen van bibliotheken om meer leden te werven",
        "inspanningen van scholen om jongeren meer te laten lezen",
      ],
      answer: 1,
      wrongHints: [
        "'In kaart brengen' = ONDERZOEK doen naar leesmotivatie. De tekst doet geen onderzoek — beschrijft acties.",
        null,
        "Te smal — leden werven is een GEVOLG. Het echte doel is jongeren LATEN LEZEN.",
        "Te smal — scholen worden 1× genoemd (Davelaar). Het is vooral BIEB-actie (hiphopdans, leesclub).",
      ],
      explanation: "De tekst gaat over hiphoplessen in de bieb, schoolbieb-acties, Onderwijsraad-advies — allemaal MANIEREN om jongeren weer aan het lezen te krijgen. Bibliotheek + school zijn de MIDDELEN, lezen is het DOEL. Antwoord B.",
      examenBron: BRON_LABEL(23),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "hoofdonderwerp = rode draad door alle alineas" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "onderwerp vs detail — kern" },
      ],
      uitlegPad: compact(
        "Hoofdonderwerp = DE RODE DRAAD door ALLE alineas. Truc: lees kop + slot — wat keert telkens terug? Hier: hiphop (alinea 1-2), bieb verdwijnt (3), lezen daalt (4-5), schoolbieb-actie (8-9), hiphopdans helpt (12-14). RODE DRAAD = jongeren weer laten lezen. = B.",
        {
          basis: "Alle alineas wijzen naar: jongeren aan het lezen krijgen. = B.",
          simpeler: "Wat is het DOEL van al die acties? = jongeren laten lezen. = B.",
          nogSimpeler: "Lezen krijgen = B.",
        },
        [
          { woord: "hoofdonderwerp", uitleg: "Het centrale thema dat in elke alinea op de achtergrond aanwezig is." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 20 — Tekstverband doel-middel (T3 Vitens-advertentie)",
    explanation: "Echte examenvraag uit Nederlands 2023-T1, vraag 20.",
    emoji: "🔗",
    checks: [{
      q: "In de tekst staat: 'Om het voor de toekomst veilig te stellen, gaan we in die toekomst investeren.' Van welk tekstverband is sprake in deze zin?",
      options: [
        "doel - middel",
        "oorzaak - gevolg",
        "probleem - oplossing",
        "uitspraak - voorwaarde",
      ],
      answer: 0,
      wrongHints: [
        null,
        "Oorzaak-gevolg = 'A gebeurde, DUS B'. Hier: 'we WILLEN A, daarvoor doen we B' = anders.",
        "Probleem-oplossing = 'er IS een probleem (X), dus we doen Y'. Hier wordt geen probleem GENOEMD.",
        "Voorwaarde = 'ALS A, DAN B'. Hier geen 'als-dan' constructie.",
      ],
      explanation: "Signaalwoord: **'Om ... te ...'** = klassiek doel-middel. Doel = 'voor de toekomst veilig stellen'. Middel = 'investeren'. Antwoord A. (Truc: 'om' aan het begin van een bijzin = altijd doel.)",
      examenBron: BRON_LABEL(20),
      bronLink: BRON_LINK,
      bronTekst: tekst3,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "signaalwoorden voor tekstverbanden herkennen" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "tekstverbanden in zinnen — kern" },
      ],
      uitlegPad: compact(
        "Signaalwoorden tekstverband: OM…TE (doel-middel), DOORDAT/OMDAT (oorzaak-gevolg), MAAR/ECHTER (tegenstelling), DUS/DAAROM (gevolg), ALS…DAN (voorwaarde), ZOALS/NAMELIJK (voorbeeld), EN/OOK (opsomming). 'Om...te' = ALTIJD doel-middel. = A.",
        {
          basis: "'Om...te' is een doel-zin. Antwoord = A.",
          simpeler: "Om EEN DOEL te bereiken doen we EEN MIDDEL. 'Om veilig te stellen → investeren.' = A.",
          nogSimpeler: "Doel-middel = A.",
        },
        [
          { woord: "doel-middel", uitleg: "Een doel willen bereiken via een bepaald middel ('om...te'-zin)." },
          { woord: "signaalwoord", uitleg: "Een woord dat het type verband in een zin verraadt." },
        ],
      ),
    }],
  },
  {
    title: "Vraag 28 — Tekstverband gevolg (T4 bibliotheek)",
    explanation: "Echte examenvraag uit Nederlands 2023-T1, vraag 28.",
    emoji: "🔗",
    checks: [{
      q: "In alinea 10 staan deze twee zinnen: 'Thuis lezen ouders steeds minder vaak. Jongeren missen zo een goed voorbeeld, leren niet dat lezen ook leuk en ontspannend kan zijn.' Wat is het verband tussen de eerste en de tweede zin? In de tweede zin staat een",
      options: [
        "conclusie.",
        "gevolg.",
        "opsomming.",
        "reden.",
      ],
      answer: 1,
      wrongHints: [
        "Conclusie = eindoordeel na een redenering. Tweede zin is geen oordeel, maar een direct effect.",
        null,
        "Opsomming = 'A én B én C'. Hier 2 zinnen, geen 'én'-relatie.",
        "Reden = WAAROM iets gebeurt. Dat staat in zin 1 (omdat ouders minder lezen). Vraag is wat ZIN 2 is.",
      ],
      explanation: "Signaalwoord: **'zo'** in zin 2 = 'op die manier, daardoor'. Zin 1 = oorzaak (ouders lezen minder thuis). Zin 2 = gevolg (kinderen missen voorbeeld). Klassiek oorzaak → gevolg. Antwoord B.",
      examenBron: BRON_LABEL(28),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
      voorkennisKeten: [
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-2F", why: "signaalwoorden 'zo / daardoor / dus' = gevolg" },
        { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands", niveau: "VMBO-GT eindexamen", why: "oorzaak-gevolg in opeenvolgende zinnen — kern" },
      ],
      uitlegPad: compact(
        "Gevolg-signaalwoorden: ZO, DAARDOOR, DUS, DAAROM, BIJGEVOLG. Hier: 'Jongeren missen ZO een goed voorbeeld' — 'zo' = 'op die manier'. Dus zin 2 = gevolg van zin 1. = B. (Truc: bij gevolg kan je 'dus' invullen tussen de zinnen — werkt het? Dan is het gevolg.)",
        {
          basis: "'Zo' = daardoor = gevolg-signaal. = B.",
          simpeler: "Ouders lezen niet → dus kinderen leren het niet → gevolg. = B.",
          nogSimpeler: "Gevolg = B.",
        },
        [
          { woord: "gevolg", uitleg: "Wat er als RESULTAAT uit een oorzaak voortkomt." },
          { woord: "oorzaak-gevolg", uitleg: "Zin 1 = oorzaak (X gebeurde), zin 2 = gevolg (dus Y)." },
        ],
      ),
    }],
  },
];

const path = {
  id: "examen-nederlands-2023-t1",
  subject: "nederlands",
  title: "Examen Nederlands 2023 — tijdvak 1 (VMBO-GL/TL)",
  shortTitle: "Examen Nederlands 2023-T1",
  description: "6 echte examenvragen Nederlands VMBO-GL/TL 2023 tijdvak 1, met didactische uitleg + leerpad-link bij elke fout.",
  groep: "vmbo-gt",
  category: "examen-vmbo",
  chapters,
  steps,
  meta: {
    bron: "examenblad.nl",
    bronLink: BRON_LINK,
    jaar: 2023,
    tijdvak: 1,
    niveau: "vmbo-gltl",
    leerpadLink: { id: "cse-leesvaardigheid-nederlands", title: "Leesvaardigheid Nederlands" },
  },
};

export default path;

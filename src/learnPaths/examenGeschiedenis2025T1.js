// Leerpad: Examen-oefenpad Geschiedenis VMBO-GL/TL 2025 tijdvak 1
// 2026-05-10: Eerste geschiedenis-pilot. 6 echte MC-vragen geverifieerd.
// Bron: examenblad.nl, examen 0125 GT 2025-1.

const bron5 = {
  titel: "Bron 5 — Engelse krant juli 1936 (politieke tekening)",
  body: "Uit een Engelse krant (juli 1936). Bij de tekening hoort de tekst: 'De weg naar de overwinning.'\n\nOp de tekening staat een stapel mensen. Op de mensen-stapel:\n• Bovenaan: 'baas van de wereld'\n• De onderste rug: 'herbewapening'\n• De stapel laffe mensen: 'Laffe democratische \"leiders\"'\n\n(De tekening toont Hitler/Nazi-Duitsland die op de schouders van laffe Westerse democratische leiders naar wereldmacht klimt — een aanklacht tegen het appeasement-beleid.)",
};

const chapters = [
  { letter: "A", title: "Interbellum & WO2", emoji: "⚔️", from: 0, to: 3 },
  { letter: "B", title: "Na de oorlog", emoji: "🏛️", from: 4, to: 5 },
];

const steps = [
  // V11
  {
    title: "Vraag 11 — Suze Groeneweg & kiesrecht",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 11. Doorklik voor de Pincode-uitleg in het tijdvakken-leerpad.",
    emoji: "🎓",
    checks: [
      {
        q: "In 1918 werd Suze Groeneweg als eerste vrouw gekozen tot lid van de Tweede Kamer. Van welk kiesrecht maakte Suze Groeneweg in 1918 gebruik?",
        options: [
          "actief kiesrecht",
          "algemeen vrouwenkiesrecht",
          "censuskiesrecht",
          "passief kiesrecht",
        ],
        answer: 3,
        wrongHints: [
          "Actief kiesrecht = het recht om te stemmen. Hier gaat het om gekozen WORDEN.",
          "Algemeen vrouwenkiesrecht = stemRECHT voor alle vrouwen, in NL pas in 1919. Suze werd in 1918 gekozen.",
          "Censuskiesrecht = stemmen op basis van vermogen — was juist afgeschaft.",
          null,
        ],
        explanation: "Passief kiesrecht = het recht om gekozen te WORDEN (kandidaat zijn). Vrouwen kregen dit in NL al in 1917 — vóór het actief kiesrecht (mogen stemmen) in 1919. Daardoor kon Suze in 1918 gekozen worden, terwijl vrouwen nog niet zelf konden stemmen.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 11",
        leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'kiesrecht', 'actief', 'passief', 'censuskiesrecht'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "verschil 'mogen stemmen' (actief) vs 'gekozen worden' (passief) uit de vraagtekst halen" },
          { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "kiesrecht-uitbreiding NL: 1917 passief vrouwen, 1919 actief vrouwen — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Gekozen worden = passief", tekst: "Suze werd gekozen → kandidaat → passief kiesrecht. Actief = zelf stemmen." }],
          woorden: [{ woord: "actief kiesrecht", uitleg: "Recht om zelf te stemmen." }, { woord: "passief kiesrecht", uitleg: "Recht om gekozen te worden (=kandidaat zijn)." }],
          theorie: "Twee soorten kiesrecht: actief (stemmen) en passief (gekozen worden). Vrouwen NL: passief 1917, actief 1919.",
          voorbeelden: [{ type: "feit", tekst: "Suze 1918 gekozen = passief. Vrouwen mochten pas in 1919 stemmen (actief)." }],
          basiskennis: [{ onderwerp: "Verwarring", uitleg: "Lijkt tegenstrijdig: kandidaat-zijn kan vóór mogen-stemmen." }],
          niveaus: { basis: "Passief kiesrecht. D.", simpeler: "Suze werd GEKOZEN (kandidaat) = passief kiesrecht. Actief = zelf STEMMEN. = D.", nogSimpeler: "Passief = D." },
        },
      },
    ],
  },
  // V15
  {
    title: "Vraag 15 — Engelse cartoon over democratische leiders",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 15. Bekijk eerst bron 5.",
    emoji: "🎓",
    checks: [
      {
        q: "De democratische leiders zijn door de tekenaar afgebeeld als laf. Welk argument voor deze mening is in de tekening te herkennen?",
        options: [
          "De leiders hebben de communistische regering van de Sovjet-Unie",
          "De leiders hebben de Vrede van Versailles getekend.",
          "De leiders verzetten zich niet tegen Hitlers machtsuitbreiding.",
          "De leiders zijn economisch afhankelijk van Duitsland.",
        ],
        answer: 2,
        wrongHints: [
          "Erkennen Sovjet-Unie heeft niets met 'laf zijn voor Hitler' te maken.",
          "Versailles tekenen was juist hard tegen Duitsland — niet laf.",
          null,
          "Economische afhankelijkheid is geen argument voor 'lafheid'.",
        ],
        explanation: "De cartoon kritiseert het APPEASEMENT-beleid van de Westerse democratieën (UK, Frankrijk) tegenover Hitler. Door geen actie te ondernemen tegen zijn herbewapening en gebiedsuitbreiding (Rijnland 1936, Anschluss 1938, Sudetenland 1938) lieten ze hem groeien — vandaar 'laf' afgebeeld als opstapje voor Hitler's wereldmacht.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 15",
        bronTekst: bron5,
        leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'appeasement', 'machtsuitbreiding', 'laf', 'democratische leiders'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "cartoon-symboliek lezen: wie staat waarop, wat betekent dat — koppel aan opties" },
          { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "interbellum + opkomst Hitler + appeasement-beleid UK/FR — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Cartoon = appeasement-kritiek", tekst: "Stapel laffe leiders + Hitler bovenop = leiders verzetten zich NIET tegen Hitler's groei. → optie C." }],
          woorden: [{ woord: "appeasement", uitleg: "Beleid: Hitler tegemoetkomen om oorlog te vermijden." }, { woord: "machtsuitbreiding", uitleg: "Gebied/macht groter maken." }],
          theorie: "Cartoon-vraag: zoek wat HET BEELD letterlijk laat zien. Hitler op leiders = leiders dragen Hitler = passieve houding.",
          voorbeelden: [{ type: "context", tekst: "1936 Rijnland, 1938 Anschluss + Sudetenland — telkens niet ingegrepen." }],
          basiskennis: [{ onderwerp: "Niet andere opties", uitleg: "Erkennen Sovjet-Unie / Versailles / economisch — geen verband met 'laf'." }],
          niveaus: { basis: "Verzetten niet tegen Hitler. C.", simpeler: "Cartoon: leiders dragen Hitler op schouders = leiders doen niets tegen Hitler's machtsuitbreiding (appeasement). = C.", nogSimpeler: "Geen verzet = C." },
        },
      },
    ],
  },
  // V16
  {
    title: "Vraag 16 — Conferentie van München",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 16.",
    emoji: "🎓",
    checks: [
      {
        q: "Tijdens de Conferentie van M'nchen werd een akkoord gesloten tussen Hitler, als leider van nazi-Duitsland, en Chamberlain, de minister-president van Groot-Brittanni'. Wat was voor Chamberlain de reden om het akkoord met Hitler te sluiten?",
        options: [
          "De Duitse politiek voor meer Lebensraum moest een succes worden.",
          "Duitsland wilde lid worden van de Volkenbond.",
          "Een nieuwe oorlog met Duitsland moest voorkomen worden.",
          "Groot-Brittanni' wilde dat Duitsland het Verdrag van Versailles tekende.",
        ],
        answer: 2,
        wrongHints: [
          "UK + FR wilden NIET dat Duitsland Lebensraum kreeg — daar gingen ze juist tegen in (te laat).",
          "Duitsland was uit de Volkenbond gestapt in 1933.",
          null,
          "Versailles was 1919, München 1938 — geen verband.",
        ],
        explanation: "Chamberlain (UK) en Daladier (FR) gaven Hitler het Sudetenland (deel Tsjechoslowakije) om een nieuwe wereldoorlog te voorkomen. Dit was de top van het APPEASEMENT-beleid: 'peace for our time'. Een jaar later begon Hitler WO2 alsnog — bewijs dat appeasement niet werkte.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 16",
        leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'Conferentie van München', 'appeasement', 'Lebensraum', 'Volkenbond', 'Versailles'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "vraag scant op MOTIEF Chamberlain — eliminatie van anti-appeasement-opties" },
          { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "voorgeschiedenis WO2: München 1938 + Sudetenland + 'peace for our time' — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "München = oorlog voorkomen", tekst: "Chamberlain wilde geen NIEUWE WO1. Akkoord = Sudetenland aan Hitler om vrede te kopen. → C." }],
          woorden: [{ woord: "Conferentie van München", uitleg: "1938 akkoord: UK+FR+Italie+Duitsland over Sudetenland." }, { woord: "appeasement", uitleg: "Tegemoet komen om vrede te bewaren." }],
          theorie: "Achtergrond: WO1 (1914-1918) verschrikkelijk → UK/FR willen NOOIT meer oorlog → appeasement Hitler.",
          voorbeelden: [{ type: "feit", tekst: "Chamberlain riep na München: 'Peace for our time'. 1 jaar later begon WO2." }],
          basiskennis: [{ onderwerp: "Niet andere opties", uitleg: "Lebensraum was juist Hitler's plan (UK tegen). Volkenbond, Versailles - geen verband." }],
          niveaus: { basis: "Oorlog voorkomen. C.", simpeler: "Chamberlain wilde geen nieuwe WO. Daarom akkoord met Hitler om Sudetenland weg te geven = oorlog VOORKOMEN. = C.", nogSimpeler: "Geen oorlog = C." },
        },
      },
    ],
  },
  // V35
  {
    title: "Vraag 35 — Stalin en WO2",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 35.",
    emoji: "🎓",
    checks: [
      {
        q: "Onder het bewind van Stalin werden veel mensen vermoord en werden politieke tegenstanders vervolgd. Toch was er in de Sovjet-Unie veel waardering voor Stalin. Wat is een belangrijke reden voor deze waardering?",
        options: [
          "kregen boeren en arbeiders steeds meer politieke macht.",
          "kwam er een einde aan de wapenwedloop met de Verenigde Staten.",
          "leidde de politiek van collectivisatie tot meer vrijheid.",
          "werd nazi-Duitsland verslagen.",
        ],
        answer: 3,
        wrongHints: [
          "Boeren en arbeiders kregen juist MINDER macht onder Stalin (collectivisatie was top-down).",
          "Wapenwedloop met VS begon JUIST na WO2 onder Stalin (Koude Oorlog).",
          "Collectivisatie betekende juist verlies van vrijheid voor boeren.",
          null,
        ],
        explanation: "Onder Stalin won de Sovjet-Unie WO2 tegen nazi-Duitsland (op een hoge prijs van ~27 miljoen Russische doden). Dat 'overwinningsverhaal' werd in de Sovjet-Unie eindeloos herhaald — daardoor bleef Stalin's reputatie hoog ondanks zijn miljoenen slachtoffers in de Goelag.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 35",
        leerpadLink: { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'Stalin', 'Goelag', 'collectivisatie', 'wapenwedloop', 'bewind'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "vraag scant op REDEN voor waardering — ondanks slachtoffers; eliminatie van foute claims" },
          { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "Sovjet-Unie in WO2 + Stalingrad + Stalin als 'redder van het moederland' — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Stalin = WO2-winnaar", tekst: "Sovjets versloegen Hitler (Stalingrad, Berlijn 1945). Dat 'overwinning' bleef Stalin's reputatie. → D." }],
          woorden: [{ woord: "Stalingrad", uitleg: "Beslissende slag (1942-1943). Sovjet-overwinning keerde WO2." }],
          theorie: "Politieke realiteit: ondanks Goelag-slachtoffers werd Stalin gevierd om WO2-overwinning. Bevolking ondersteunde 'redder van moederland'.",
          voorbeelden: [{ type: "feit", tekst: "~27 miljoen Sovjet-doden in WO2. Geheugen van overwinning bleef Stalin steunen." }],
          basiskennis: [{ onderwerp: "Niet andere opties", uitleg: "Boeren/arbeiders kregen MINDER macht. Wapenwedloop kwam JUIST onder Stalin. Collectivisatie was tegen vrijheid." }],
          niveaus: { basis: "Versloeg nazi-Duitsland. D.", simpeler: "Stalin won WO2 tegen Hitler. Veel waardering om 'redder van moederland'-imago. = D.", nogSimpeler: "WO2 = D." },
        },
      },
    ],
  },
  // V34
  {
    title: "Vraag 34 — Schuman-plan & EGKS",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 34.",
    emoji: "🎓",
    checks: [
      {
        q: "De Franse minister stelt voor om een organisatie op te richten. Welke organisatie is naar aanleiding van het voorstel opgericht?",
        options: [
          "EEG",
          "EGKS",
          "NAVO",
          "VN",
        ],
        answer: 1,
        wrongHints: [
          "EEG kwam pas in 1957 — voortvloeiend uit EGKS.",
          null,
          "NAVO is een militaire alliantie, geen kolen/staal-organisatie.",
          "VN is voor wereldvrede + diplomatie, niet voor kolen/staal.",
        ],
        explanation: "EGKS (Europese Gemeenschap voor Kolen en Staal, 1951) was de directe uitwerking van het Schuman-plan. Door kolen + staal (oorlogs-grondstoffen) onder gezamenlijk toezicht te zetten, werd nieuwe oorlog tussen FR en DE bemoeilijkt. EGKS was de KIEM van de huidige EU.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 34",
        leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "afkortingen: EGKS, EEG, NAVO, VN — waar staan ze voor en waarvoor dienden ze" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "Schuman = FR + kolen/staal — koppel deze 2 kerntermen direct aan de juiste organisatie" },
          { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "tijdvak naoorlogs: Europese samenwerking 1951 EGKS → 1957 EEG → 1993 EU — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Schuman = EGKS", tekst: "Schuman-plan (1950) → EGKS (1951). Franse plan voor Europese kolen+staal samenwerking. → B." }],
          woorden: [{ woord: "EGKS", uitleg: "Europese Gemeenschap voor Kolen en Staal (1951). Voorloper EU." }],
          theorie: "EU-tijdlijn: 1951 EGKS → 1957 EEG → 1993 EU. Schuman-plan = startpunt.",
          voorbeelden: [{ type: "feit", tekst: "EGKS-leden: FR, BRD, IT, NL, BE, LUX. Voorkomen oorlog door grondstof-samenwerking." }],
          basiskennis: [{ onderwerp: "Niet EEG/NAVO/VN", uitleg: "EEG kwam later (1957). NAVO=militair. VN=wereldwijd diplomatie." }],
          niveaus: { basis: "EGKS. B.", simpeler: "Schuman-plan → EGKS (1951, kolen+staal samen). Voorloper EU. = B.", nogSimpeler: "EGKS = B." },
        },
      },
    ],
  },
  // V39
  {
    title: "Vraag 39 — Cubacrisis 1962",
    explanation: "Echte examenvraag uit VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 39.",
    emoji: "🎓",
    checks: [
      {
        q: "Een gebeurtenis in 1962 bracht de hele wereld in gevaar, omdat een kernoorlog tussen de Verenigde Staten en de Sovjet-Unie nog nooit zo dichtbij was als toen. Welke gebeurtenis wordt bedoeld?",
        options: [
          "de bouw van de Berlijnse Muur",
          "de Cubacrisis",
          "de Praagse Lente",
          "de stichting van de DDR",
        ],
        answer: 1,
        wrongHints: [
          "Berlijnse Muur werd 1961 gebouwd — geen direct kernoorlog-risico.",
          null,
          "Praagse Lente was 1968 (USSR onderdrukt opstand).",
          "DDR werd 1949 gesticht — geen kernoorlog-crisis.",
        ],
        explanation: "Cubacrisis (oktober 1962): de Sovjet-Unie plaatste kernraketten op Cuba (vlak bij VS-grens). President Kennedy zette een marine-blokkade in. 13 dagen lang stond de wereld op rand kernoorlog. Pas na onderhandelingen trokken USSR (Cuba-raketten weg) + VS (Turkije-raketten weg) zich terug.",
        examenBron: "🎓 Echt examen VMBO-GL/TL geschiedenis 2025 tijdvak 1, vraag 39",
        leerpadLink: { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'Cubacrisis', 'Berlijnse Muur', 'Praagse Lente', 'DDR', 'kernoorlog'" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "jaartal 1962 + kernoorlog-bijzin → koppel direct aan juiste gebeurtenis (datum-truc)" },
          { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "Koude Oorlog tijdlijn: 1949 DDR/NAVO, 1961 Muur, 1962 Cubacrisis, 1968 Praag — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "1962 + kernoorlog = Cubacrisis", tekst: "Sleuteljaar 1962 + kernoorlog-risico → Cubacrisis. → B." }],
          woorden: [{ woord: "Cubacrisis", uitleg: "Oktober 1962. Sovjet-kernraketten op Cuba → 13 dagen op rand kernoorlog." }],
          theorie: "Koude Oorlog tijdlijn: 1949 DDR + NAVO. 1961 Berlijnse Muur. 1962 Cubacrisis. 1968 Praagse Lente.",
          voorbeelden: [{ type: "feit", tekst: "Kennedy zette marine-blokkade. Khroesjtsjov haalde raketten weg na onderhandelingen." }],
          basiskennis: [{ onderwerp: "Datum-truc", uitleg: "1962 = Cubacrisis. Andere opties: 1961 (Muur), 1949 (DDR), 1968 (Praag)." }],
          niveaus: { basis: "Cubacrisis. B.", simpeler: "1962 + kernoorlog dichtbij = Cubacrisis (Sovjet-raketten op Cuba, 90 km van VS). = B.", nogSimpeler: "Cubacrisis = B." },
        },
      },
    ],
  },
];

const examenGeschiedenis2025T1 = {
  id: "examen-geschiedenis-2025-t1",
  title: "Examen oefenen — Geschiedenis 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "geschiedenis",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Geschiedenis - eindexamen oefenen 2025-T1",
  intro:
    "6 echte examenvragen uit VMBO-GL/TL geschiedenis 2025 tijdvak 1. Onderwerpen: kiesrecht 1918, Conferentie van München, appeasement, Stalin & WO2, Schuman-plan/EGKS, Cubacrisis. Per vraag denkprikkel-hints, inhoudelijke uitleg, doorklik naar Pincode-leerpad. V23, V25, V26, V40 (vereist visueel materiaal) zijn weggelaten.",
  triggerKeywords: [
    "examen geschiedenis", "geschiedenis 2025", "echte examenvragen geschiedenis",
    "kiesrecht 1918", "suze groeneweg", "conferentie munchen", "appeasement",
    "stalin wo2", "schuman plan", "egks", "cubacrisis 1962",
  ],
  chapters,
  steps,
};

export default examenGeschiedenis2025T1;

// Leerpad: Nederland en water (VO-niveau)
// VMBO-GT eindexamen-syllabus aardrijkskunde 2026 — domein Water.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  blauw: "#1565c0",
  oranje: "#ef6c00",
  groen: "#00897b",
  goud: "#ffd54f",
};

const stepEmojis = ["⛪", "🏗️", "🌊", "🌡️", "🏆"];

const chapters = [
  { letter: "A", title: "Waterschap + Watersnood 1953", emoji: "⛪", from: 0, to: 0 },
  { letter: "B", title: "Afsluitdijk + IJsselmeer", emoji: "🏗️", from: 1, to: 1 },
  { letter: "C", title: "Deltawerken 1953-1997", emoji: "🌊", from: 2, to: 2 },
  { letter: "D", title: "Klimaatadaptatie nu", emoji: "🌡️", from: 3, to: 3 },
  { letter: "E", title: "Eind-opdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Waterschap + Watersnood ───────────────────────────
  {
    title: "Waterschap-traditie + Watersnood 1953",
    explanation:
      "Nederland ligt voor **26%** onder zeeniveau. Zonder dijken zou ~60% van het land onder water staan. Water-beheer is hier eeuwen-oud.\n\n**Waterschap — vroegste 'democratie' van NL**:\n• Oudste bestaande: **Hoogheemraadschap Rijnland** (1255).\n• Boeren langs rivieren + zee organiseerden samen dijkbeheer.\n• Iedereen die land had **moest meedoen** of betalen — eerste vorm van belasting + verplichting.\n• Vandaag: **21 waterschappen** in NL. Apart bestuur, eigen verkiezingen.\n• Taken: dijken, gemalen, waterzuivering, peilbeheer.\n\n**Watersnoodramp 1953** — keerpunt:\n• Nacht **31 januari → 1 februari 1953**: zware storm + springvloed in Noordzee.\n• Dijken bezweken in **Zeeland, Zuid-Holland, Brabant**.\n• **1.836 mensen** verdronken in NL (+ 28.000 vee).\n• 200.000 hectare onder water.\n• 100.000 mensen geëvacueerd.\n• Communicatie miste — geen telefoon-waarschuwing, geen radio 's nachts.\n• Land was **niet voorbereid** ondanks waarschuwingen sinds 1939.\n\n**Reacties**:\n• Solidariteit: hulp uit hele NL, België, Duitsland.\n• Koningin Juliana bezocht slachtoffers.\n• **Deltacommissie** ingesteld februari 1953 — moest plan maken zodat dit nooit meer kon.\n\n**Cito-feit**: Watersnood is **grootste vredestijds-ramp** in moderne NL-geschiedenis. Memorial-monument staat in Ouwerkerk.",
    checks: [
      {
        q: "Wanneer was de **Watersnoodramp**?",
        options: ["1 februari 1953","31 december 1953","1 januari 2000","12 mei 1940"],
        answer: 0,
        wrongHints: [null, "Niet — januari, niet december.", "Niet relevant.", "Duitse invasie WO2 — niet watersnood."],
        uitlegPad: {
          stappen: [{ titel: "Nacht van 31 jan op 1 feb 1953", tekst: "Springvloed + storm samen 's nachts → dijken bezweken in Zeeland. **1.836 doden** in NL. Datum vaak afgekort als **'de Ramp'** of **'1 februari 1953'**." }],
          woorden: [{ woord: "springvloed", uitleg: "Extra hoge vloed bij volle/nieuwe maan, ~30% hoger dan normaal." }],
          theorie: "Cito-feit: 'Bevrijdingsdag' = 5 mei 1945. 'Watersnoodramp' = 1 februari 1953. Niet verwarren.",
          niveaus: { basis: "1 februari 1953 — A.", simpeler: "1953 = watersnood = A.", nogSimpeler: "1953 = A." },
        },
      },
      {
        q: "Welke provincies werden **het hardst getroffen** in 1953?",
        options: ["Zeeland + Zuid-Holland + Brabant","Groningen + Friesland","Limburg + Overijssel","Utrecht + Gelderland"],
        answer: 0,
        wrongHints: [null, "Niet — Noord-NL bleef gespaard.", "Niet — binnenland.", "Niet — meer binnenland, geen Noordzee-kust."],
        uitlegPad: {
          stappen: [{ titel: "Zuidwestelijke delta", tekst: "Zeeland (Schouwen-Duiveland, Tholen), Zuid-Holland (Goeree-Overflakkee, Voorne-Putten) en West-Brabant lagen direct in de baan van de stormvloed in de **Zuidwestelijke delta**. Daar mondden Schelde, Maas + Rijn uit in zee." }],
          woorden: [{ woord: "delta", uitleg: "Gebied waar rivieren in zee uitmonden — vlak land + veel water." }],
          theorie: "Zuidwestelijke delta vandaag = Zeeland + zuid-Zuid-Holland + west-Brabant. Daar zijn ook de Deltawerken gebouwd.",
          niveaus: { basis: "Zeeland + Zuid-Holland + Brabant — A.", simpeler: "Zuidwest NL = ramp 1953 = A.", nogSimpeler: "Zeeland = A." },
        },
      },
      {
        q: "Wat is een **waterschap**?",
        options: ["Bestuurslaag verantwoordelijk voor water-beheer","Schap in supermarkt","Waterleidingbedrijf","Het Rijksinstituut voor Volksgezondheid"],
        answer: 0,
        wrongHints: [null, "Letterlijk wel, maar in context staatsinrichting.", "Niet — waterbedrijf is iets anders (drinkwater).", "Niet — RIVM is gezondheid."],
        uitlegPad: {
          stappen: [{ titel: "Waterschap = 4e bestuurslaag", tekst: "**21 waterschappen** in NL. Eigen verkiezingen (ook in 2023 + 2027). Taken: **dijken** (kering tegen water), **gemalen** (overtollig water wegpompen), **rioolwaterzuivering**, **peilbeheer** sloten. Heffen eigen belasting: **waterschapsbelasting**." }],
          woorden: [{ woord: "waterschap", uitleg: "Decentrale overheid die water beheert in een bepaald gebied." }, { woord: "peil", uitleg: "Hoogte van water in een gebied — wordt door waterschap geregeld via stuwen + gemalen." }],
          theorie: "NL kent 4 bestuurslagen: Rijk (centraal) + provincie + gemeente + **waterschap**. Het waterschap is oudste vorm van bestuur in NL.",
          voorbeelden: [{ type: "feit", tekst: "Hoogheemraadschap Rijnland (1255) bestaat al 770 jaar — oudste bestuursvorm NL." }],
          niveaus: { basis: "Bestuurslaag water — A.", simpeler: "Waterschap = water-bestuur = A.", nogSimpeler: "Water-bestuur = A." },
        },
      },
      {
        q: "Hoeveel **doden** vielen bij de Watersnoodramp 1953 in NL?",
        options: ["~1.836 doden","~100 doden","~10.000 doden","~50.000 doden"],
        answer: 0,
        wrongHints: [null, "Te weinig — duizend keer zoveel.", "Te veel.", "Veel te veel — wel evacueerden 100.000."],
        uitlegPad: {
          stappen: [{ titel: "1.836 NL + 300 buitenland", tekst: "**1.836 NL-doden** + 28.000 dode dieren + 47.000 huizen verwoest. In België ook 28 doden + Engeland 326. Erger had nog gekund — Rotterdam ontsnapte ternauwernood." }],
          theorie: "Memo: 1836 ≈ jaartal 1836 (Belgische opstand) — koppel-ezel om jaartal/dodental te onthouden.",
          niveaus: { basis: "1836 — A.", simpeler: "Watersnood 1953 = ~1836 doden = A.", nogSimpeler: "1836 = A." },
        },
      },
      {
        q: "Wat is een **dijk**?",
        options: ["Een wal van grond/zand/klei tegen water","Een diep gat","Een waterloop","Een stuw"],
        answer: 0,
        wrongHints: [null, "Niet — dat is het tegengestelde.", "Niet — dat is een sloot/kanaal.", "Stuw is regelend, dijk is barrière."],
        uitlegPad: {
          stappen: [{ titel: "Dijk = aarden wal", tekst: "**Dijk** = opgeworpen aarden wal langs water (zee/rivier) om overstroming te voorkomen. NL heeft ~22.000 km dijken (zee + rivier + boezem). Hoogte 's-Heerenhoek = laagste plek NL (-6,76m NAP)." }],
          woorden: [{ woord: "NAP", uitleg: "Normaal Amsterdams Peil — meetpunt zeeniveau voor hoogte in NL." }],
          theorie: "Cito-feit: ~26% van NL ligt onder NAP. Hardst beschermd: Randstad-gebied.",
          niveaus: { basis: "Aarden wal — A.", simpeler: "Dijk = grondwal tegen water = A.", nogSimpeler: "Dijk = A." },
        },
      },
    ],
  },

  // ─── B. Afsluitdijk + IJsselmeer ──────────────────────────
  {
    title: "Afsluitdijk + IJsselmeer (Plan Lely 1932)",
    explanation:
      "**Vóór 1932**: de **Zuiderzee** was een grote binnenzee — open verbinding met Noordzee. Beruchte stormvloeden: 1916 was er nog een grote overstroming.\n\n**Plan Lely**:\n• Ingenieur **Cornelis Lely** ontwierp het al in **1891** — toen geen geld.\n• 1916: na overstroming + WO1-voedseltekort werd plan eindelijk goedgekeurd.\n• **Zuiderzeewet 1918**.\n\n**Afsluitdijk (1927-1932)**:\n• 32 km lang. Verbindt Noord-Holland met Friesland.\n• Klaar 28 mei 1932. Eindstuk gedicht — gedenkstein 'Een volk dat leeft, bouwt aan zijn toekomst'.\n• Effect: Zuiderzee wordt afgesloten → veranderde in zoetwater-meer.\n• Naam: **IJsselmeer** (omdat IJsselrivier erin uitmondt).\n\n**Inpolderen — nieuwe provincie**:\n• **Wieringermeerpolder** (1930): eerste polder.\n• **Noordoostpolder** (1942): tweede polder. Steden: Emmeloord, Marknesse.\n• **Oostelijk Flevoland** (1957): Dronten, Biddinghuizen.\n• **Zuidelijk Flevoland** (1968): Lelystad (hoofdstad), Almere (1976+).\n• 1986: officiële **provincie Flevoland** opgericht.\n• Totaal land gewonnen: **1.650 km²** — grootste landwinning ter wereld door mensenhand.\n\n**Markermeer**:\n• Oorspronkelijk was er ook plan voor **Markerwaard** (5e polder).\n• Geschrapt jaren '80 — milieu-overwegingen + financieel.\n• Markermeer blijft open water tot vandaag. Sinds 2016: **Marker Wadden** (kunstmatig eilandje voor vogels).\n\n**Effect op vissers**:\n• Vissersdorpen rond Zuiderzee (Volendam, Marken, Urk, Spakenburg) verloren beroep.\n• Compensatie + omschakeling naar palingvisserij (zoet) + visserij IJsselmeer.\n• Klederdracht + cultureel erfgoed bleven — toerisme-impact.",
    checks: [
      {
        q: "Wanneer werd de **Afsluitdijk** voltooid?",
        options: ["1932","1916","1953","1986"],
        answer: 0,
        wrongHints: [null, "Niet — toen overstroming, dat triggerde plan.", "Niet — andere ramp.", "Niet — provincie Flevoland."],
        uitlegPad: {
          stappen: [{ titel: "28 mei 1932 = sluitstuk", tekst: "Bouw startte 1927 vanuit Wieringen + Friese kant. Beide kanten ontmoetten elkaar op 28 mei 1932 — 'sluitgat' werd gedicht. Plan Lely had geduurd van 1891 → 1932 (40 jaar van plan naar werkelijkheid)." }],
          theorie: "Cito-truc: 1932 = Afsluitdijk. 1953 = watersnood. Niet verwarren.",
          niveaus: { basis: "1932 — A.", simpeler: "Afsluitdijk = 1932 = A.", nogSimpeler: "1932 = A." },
        },
      },
      {
        q: "Hoe heet het meer dat door de Afsluitdijk ontstond?",
        options: ["IJsselmeer","Markermeer","Zuiderzee","Wadden­zee"],
        answer: 0,
        wrongHints: [null, "Onderdeel van IJsselmeer (via Houtribdijk gescheiden 1976).", "Oude naam — werd IJsselmeer na 1932.", "Aparte zee — Waddenzee blijft."],
        uitlegPad: {
          stappen: [{ titel: "Zuiderzee → IJsselmeer", tekst: "Vóór 1932: open **Zuiderzee** (zout). Na Afsluitdijk: **IJsselmeer** (zoet), genoemd naar IJsselrivier die erin uitmondt. **Markermeer** is sinds 1976 apart deel (via Houtribdijk Enkhuizen-Lelystad gescheiden)." }],
          woorden: [{ woord: "Zuiderzee", uitleg: "Oude naam (vóór 1932) voor wat nu IJsselmeer + Markermeer is." }],
          niveaus: { basis: "IJsselmeer — A.", simpeler: "Na Afsluitdijk = IJsselmeer = A.", nogSimpeler: "IJsselmeer = A." },
        },
      },
      {
        q: "Wie ontwierp het **plan voor de Afsluitdijk + IJsselmeer**?",
        options: ["Cornelis Lely","Pieter Caland","Johan van Veen","Hendrik Colijn"],
        answer: 0,
        wrongHints: [null, "Nieuwe Waterweg-ontwerper (1872) — ander project.", "Deltawerken-ontwerper — 50 jaar later.", "Premier '30 — geen ingenieur."],
        uitlegPad: {
          stappen: [{ titel: "Lely = ingenieur + minister", tekst: "**Cornelis Lely** (1854-1929), ingenieur + minister van Waterstaat (3x). Hoofdstad Flevoland (**Lelystad**) is naar hem genoemd. Standbeeld op kop Afsluitdijk." }],
          woorden: [{ woord: "Lely", uitleg: "Cornelis Lely, ingenieur Afsluitdijk/Zuiderzeewerken." }],
          niveaus: { basis: "Cornelis Lely — A.", simpeler: "Afsluitdijk-ontwerper = Lely = A.", nogSimpeler: "Lely = A." },
        },
      },
      {
        q: "Welke provincie is opgericht in **1986** uit ingepolderd land?",
        options: ["Flevoland","Drenthe","Limburg","Friesland"],
        answer: 0,
        wrongHints: [null, "Oude provincie sinds 1796.", "Provincie sinds 1839.", "Een van oudste — bestaat al eeuwen."],
        uitlegPad: {
          stappen: [{ titel: "Flevoland = 12e provincie", tekst: "**Flevoland** opgericht 1 januari **1986** uit drooggemaakte polders. Bevat: Noordoostpolder + Oostelijk Flevoland + Zuidelijk Flevoland. Hoofdstad **Lelystad** — grootste stad **Almere** (vandaag ~220.000 inwoners)." }],
          theorie: "Cito-feit: NL heeft 12 provincies sinds 1986. Daarvoor 11.",
          niveaus: { basis: "Flevoland — A.", simpeler: "1986 = Flevoland = A.", nogSimpeler: "Flevoland = A." },
        },
      },
      {
        q: "Wat is **Markerwaard**?",
        options: ["Geplande maar geschrapte polder","5e Deltawerk","Vissersdorp","Stad in Friesland"],
        answer: 0,
        wrongHints: [null, "Niet — Deltawerken in Zeeland.", "Vissersdorpen aan Markermeer (Volendam, Marken).", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Markerwaard nooit gebouwd", tekst: "**Markerwaard** = oorspronkelijk 5e polder-plan (Lely). Begin '80 geschrapt — milieubeweging + financieel + minder noodzaak. **Markermeer** bleef open water. **Marker Wadden** sinds 2016: kunstmatige eilandjes voor vogel-/natuurherstel." }],
          theorie: "Cito-actueel: Markerwaard-schrap = symbool voor milieu-bewustzijn jaren '80 (RUS-bos verzet etc).",
          niveaus: { basis: "Geschrapte polder — A.", simpeler: "Markerwaard = nooit gebouwd = A.", nogSimpeler: "Geschrapt = A." },
        },
      },
    ],
  },

  // ─── C. Deltawerken ───────────────────────────────────────
  {
    title: "Deltawerken — nooit meer 1953",
    explanation:
      "Na de **Watersnoodramp 1953** stelde de regering direct een **Deltacommissie** in. Hun rapport (1960) leidde tot de grootste waterbouw-operatie ter wereld.\n\n**De Deltawerken 1953-1997**:\n• 13 grote bouwwerken in Zuidwestelijke delta.\n• Doel: **veilig achter de dijk wonen** — kans op overstroming verlagen tot ≤1× per 10.000 jaar (norm Randstad) of 1× per 4.000 jaar (Zeeland).\n• Kosten: ~5 miljard gulden in 40 jaar (~€2,3 miljard).\n• **Hoofdarchitect**: **ir. Johan van Veen** ('vader van de Deltawerken').\n\n**Belangrijkste werken**:\n\n**Stormvloedkering Hollandse IJssel (1958)** — eerste, klein.\n\n**Driedammen-cluster** (gewone dammen):\n• **Veerse Gatdam** (1961) — Walcheren-Noord-Beveland\n• **Brouwersdam** (1971) — Goeree-Schouwen\n• **Haringvlietdam** (1971) — met sluizen voor scheepvaart + waterafvoer\n\n**Oosterscheldekering (1986)** — beroemdste:\n• 9 km lang met **62 reusachtige schuiven**.\n• Bij stormvloed: schuiven dicht. Normaal open → getij in Oosterschelde blijft → uniek natuurgebied behouden.\n• Compromis: vissers + milieu wonnen vs eenvoudiger dichte dam.\n• Geopend door koningin Beatrix.\n\n**Maeslantkering (1997)** — laatste + meest geavanceerd:\n• Beschermt **Rotterdam + omgeving** (1,5 miljoen mensen).\n• 2 reuzendeuren in **Nieuwe Waterweg** — sluit alleen bij stormvloed >3m NAP.\n• Computer-bestuurd, sluit gemiddeld 1x per 10 jaar (eerste echte storm-sluiting: november 2007).\n• Klaar 10 mei 1997 — koningin Beatrix opent.\n\n**Hartelkering** (1997): aanvullend op Maeslantkering, sluit Hartelkanaal-zijde.\n\n**Effect Deltawerken**:\n• Zeeland nu **veiligste delta-gebied** ter wereld.\n• Reistijden verkort (dammen = ook wegen).\n• Toerisme + visserij behouden door slim ontwerp.\n• Sluitstuk 2010: **Zandmotor** voor de kust (kunstmatige zandbult die natuur zelf laat verdelen).",
    checks: [
      {
        q: "Wat is **kenmerkend** voor de Oosterscheldekering (1986)?",
        options: ["62 schuiven die open/dicht kunnen","Volledig dichte dam","Drijvende brug","Tunnel onder water"],
        answer: 0,
        wrongHints: [null, "Niet — bewust géén dichte dam vanwege natuur.", "Niet — vaste constructie.", "Niet — stormvloedkering, geen tunnel."],
        uitlegPad: {
          stappen: [{ titel: "Open-tenzij-storm-design", tekst: "Oosterscheldekering = grootste stormvloedkering ter wereld. **62 stalen schuiven** van 42m × 6,5m. Normaal open → eb/vloed gaat door → Oosterschelde-natuur (oesters, kreeften, zeehonden) blijft. Dicht bij storm. Compromis tussen veiligheid en natuur." }],
          woorden: [{ woord: "stormvloedkering", uitleg: "Beweegbare barrière tegen extreme vloed — normaal open, dicht bij storm." }],
          theorie: "Bouw 1976-1986 — duurde 10 jaar + extra duur wegens ontwerpwijziging na milieu-protest.",
          niveaus: { basis: "62 schuiven — A.", simpeler: "Oosterscheldekering = open/dicht-schuiven = A.", nogSimpeler: "Schuiven = A." },
        },
      },
      {
        q: "Welke kering beschermt **Rotterdam**?",
        options: ["Maeslantkering","Oosterscheldekering","Afsluitdijk","Haringvlietdam"],
        answer: 0,
        wrongHints: [null, "Niet — Zeeland, niet Rotterdam.", "Beschermt Friesland-NH, niet Rotterdam.", "Beschermt Goeree-Overflakkee — niet Rotterdam stad."],
        uitlegPad: {
          stappen: [{ titel: "Maeslantkering = Rotterdam-poort", tekst: "**Maeslantkering** sluit de **Nieuwe Waterweg** af bij extreem stormgevaar. 2 reuze-deuren elk 22m hoog. Beschermt 1,5 miljoen mensen + havengebied. Klaar 1997. Eerste echte storm-sluiting: 8-9 november 2007 + 2018." }],
          theorie: "Computer beslist autonoom over sluiting bij voorspelling >3m NAP — geen mens kan op tijd handelen.",
          niveaus: { basis: "Maeslantkering — A.", simpeler: "Rotterdam = Maeslantkering = A.", nogSimpeler: "Maeslant = A." },
        },
      },
      {
        q: "Wat is **ir. Johan van Veen** beroemd om?",
        options: ["Hoofdontwerper Deltawerken","Premier 1953","Afsluitdijk","Watersnood-redder"],
        answer: 0,
        wrongHints: [null, "Drees was premier 1953.", "Lely deed Afsluitdijk.", "Niet specifiek deze persoon."],
        uitlegPad: {
          stappen: [{ titel: "Vader van de Deltawerken", tekst: "**Ir. Johan van Veen** (1893-1959) waarschuwde al **vóór 1953** voor dijk-zwakte in Zeeland — werd niet serieus genomen. Na de ramp werd hij eerste secretaris **Deltacommissie**. Tekende ontwerp Deltaplan. Stierf vóór voltooiing — kreeg postuum 'vader van Deltawerken' titel." }],
          theorie: "Tragiek: Van Veen had ramp kunnen voorkomen als z'n waarschuwingen waren overgenomen.",
          niveaus: { basis: "Deltawerken-architect — A.", simpeler: "Johan van Veen = vader Deltawerken = A.", nogSimpeler: "Deltawerken = A." },
        },
      },
      {
        q: "Wanneer was de **laatste grote Delta-werk** voltooid?",
        options: ["1997 — Maeslantkering","1986 — Oosterscheldekering","1953 — eerste plan","2010 — Zandmotor"],
        answer: 0,
        wrongHints: [null, "Bekendst, maar Maeslantkering is later.", "Begin proces.", "Wel later innovatie, maar niet Deltawerk in oorspronkelijke plan."],
        uitlegPad: {
          stappen: [{ titel: "Maeslantkering = 1997 sluitstuk", tekst: "**10 mei 1997**: Maeslantkering geopend door koningin Beatrix. Markeert **einde Deltawerken**. 44 jaar nadat Watersnoodramp 1953 het plan in gang zette." }],
          niveaus: { basis: "1997 — A.", simpeler: "Maeslantkering 1997 = sluitstuk = A.", nogSimpeler: "1997 = A." },
        },
      },
      {
        q: "Wat is de **kans op overstroming** voor de Randstad in NL-veiligheidsnorm?",
        options: ["1× per 10.000 jaar","1× per 100 jaar","1× per 1.000 jaar","1× per miljoen jaar"],
        answer: 0,
        wrongHints: [null, "Veel te hoog risico — niet acceptabel.", "Nog te hoog voor Randstad.", "Niet realistisch laag — overdreven."],
        uitlegPad: {
          stappen: [{ titel: "Hoogste norm ter wereld", tekst: "**Randstad-norm**: 1 keer per **10.000 jaar** mag dijk falen. Zeeland-norm: 1× per **4.000 jaar**. Rivierdijken NL: 1× per **1.250 jaar**. Internationaal record-strikt: VS-norm 1× per 100 jaar, Japan 1× per 200." }],
          woorden: [{ woord: "overstromingsnorm", uitleg: "Acceptabele kans dat een dijk faalt per jaar." }],
          theorie: "Cito-actueel: door klimaatverandering moeten dijken nóg sterker — discussie over verhoging norm naar 1× per 100.000 jaar.",
          niveaus: { basis: "1 per 10.000 jaar — A.", simpeler: "Randstad = 1/10000 jaar = A.", nogSimpeler: "10000 = A." },
        },
      },
    ],
  },

  // ─── D. Klimaatadaptatie nu ───────────────────────────────
  {
    title: "Klimaatverandering + Nederland nu",
    explanation:
      "Tegen 2100 verwacht **KNMI** een zeespiegelstijging van **0,3 tot 1,2 meter** (afhankelijk van wereld-klimaatbeleid). Voor laag NL is dit een existentiële uitdaging.\n\n**Klimaat-uitdagingen voor NL**:\n• **Zeespiegelstijging**: hogere dijken nodig.\n• **Bodemdaling**: vooral West-NL daalt 5-10 mm/jaar (veen klinkt in).\n• **Extreem weer**: zwaarder regen + langere droogte.\n• **Rivieren**: pieken in afvoer Rijn + Maas door extreme regen in Duitsland/Frankrijk.\n• **Verzilting**: zout zeewater dringt landinwaarts via gronwater.\n\n**Aanpassings-strategieën**:\n\n**1. Dijken verhogen + versterken**:\n• **Hoogwaterbeschermingsprogramma** (HWBP): 1.500 km dijken versterken 2020-2050.\n• Kosten ~€7 miljard.\n\n**2. Ruimte voor de Rivier (2007-2019)**:\n• Hoogwaterproblemen Rijn/Maas (1993 + 1995 evacuaties).\n• Aanpak: rivieren **MEER ruimte** geven ipv hogere dijken. **Uiterwaarden verdiept**, **nieuwe nevengeulen** gegraven.\n• Bv. **Ruimte voor de Waal Nijmegen** (2015): nevengeul + waterfront — toerisme-prijs.\n\n**3. Maeslantkering reserveren** + bouw vermoedelijk **2e Maeslantkering** in toekomst.\n\n**4. Watertoets**:\n• Bij elke nieuwe woningbouw verplichte check: kan dit gebied water aan?\n• 'Niet bouwen in diepste polders' — beleidsregel.\n\n**5. Zoetwater-buffer**:\n• Bij langere droogte (zoals 2018-2022): minder zoetwater Rijn → IJsselmeer gebruikt als reserve.\n• Discussie over **Markermeer-rol** voor drinkwater.\n\n**6. Drijvende huizen + waterwoningen**:\n• Experimenten in **IJburg Amsterdam** + Maasbommel.\n• Houden mee met water-niveau.\n\n**7. Wadden + ecologische hervorming**:\n• Mariene reservaten.\n• Marker Wadden = 1.000 ha kunstmatige eilandjes voor natuur.\n\n**Politieke discussies**:\n• Wie betaalt? Waterschapsbelasting? Inkomstenbelasting?\n• **Klimaatakkoord 2019**: NL streeft 49% CO₂-reductie 2030 vs 1990.\n• **2030-doel**: kabinet Schoof wil minder ambitieus.\n\n**Onthoud voor Cito**:\n• KNMI = klimaat-instituut. Voorspellingen worden tot 2100 ge-extrapoleerd.\n• Ruimte voor de Rivier = klassiek voorbeeld 'klimaatadaptatie' i.p.v. alleen dijken.\n• Bodemdaling = NL-specifiek probleem (veen + drainage).",
    checks: [
      {
        q: "Wat wordt voorspeld als **zeespiegelstijging** in NL tot 2100?",
        options: ["0,3 tot 1,2 meter (KNMI)","Niet meetbaar","5 meter","30 cm zeker"],
        answer: 0,
        wrongHints: [null, "Niet — wel meetbaar, ~3mm/jaar nu.", "Te extreem — wel mogelijk bij ramp.", "Lager dan realistisch — verschilt per scenario."],
        uitlegPad: {
          stappen: [{ titel: "KNMI 2023-scenario's", tekst: "Bij **lage** CO₂-uitstoot: ~30-50 cm in 2100. Bij **hoge** uitstoot (alles blijft zo): tot ~1,2m. Bij extreme **kantelpunt-scenario's** (Antarctische ijsmelt): >2m mogelijk." }],
          woorden: [{ woord: "KNMI", uitleg: "Koninklijk Nederlands Meteorologisch Instituut — staat in De Bilt." }],
          theorie: "Cito-actueel: getallen worden elke ~5 jaar herzien als IPCC nieuwe rapporten publiceert.",
          niveaus: { basis: "0,3-1,2 m — A.", simpeler: "Zeespiegel +0,3-1,2m tot 2100 = A.", nogSimpeler: "1m = A." },
        },
      },
      {
        q: "Wat is **'Ruimte voor de Rivier'**?",
        options: ["Rivieren krijgen meer ruimte ipv hogere dijken","Rivieren afsluiten","Brug-bouw","Tunnels onder rivieren"],
        answer: 0,
        wrongHints: [null, "Niet — juist OPEN laten met meer ruimte.", "Niet — verkeer-oplossing.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Nieuwe rivierstrategie", tekst: "Na hoogwater Rijn/Maas 1993+1995 (evacuaties Roermond + Limburg) koos NL voor **anders denken**. Niet alleen hoger dijken, maar **uiterwaarden verbreden** + **nevengeulen graven**. Voorbeeld: Nijmegen kreeg een 'nieuwe Waal-arm' met park (klaar 2015)." }],
          woorden: [{ woord: "uiterwaard", uitleg: "Vlak land langs een rivier dat bij hoogwater onderloopt." }, { woord: "nevengeul", uitleg: "Extra rivierloop naast de hoofdgeul, zodat water meer weg kan." }],
          theorie: "Cito-feit: 'Ruimte voor de Rivier' programma 2007-2019, ~€2,3 miljard, 34 projecten langs Rijn/Maas/IJssel/Waal.",
          niveaus: { basis: "Meer ruimte ipv hogere dijken — A.", simpeler: "Ruimte voor Rivier = rivier breder maken = A.", nogSimpeler: "Meer ruimte = A." },
        },
      },
      {
        q: "Wat is **bodemdaling** in West-NL?",
        options: ["Land zakt 5-10 mm/jaar door veen-inklinking","Aardbeving","Erosie","Klimaatcyclus"],
        answer: 0,
        wrongHints: [null, "Niet — wel in Groningen (gas), maar bodemdaling-veen anders.", "Niet — vooral zee-erosie elders.", "Niet — chronisch proces, geen cyclus."],
        uitlegPad: {
          stappen: [{ titel: "Veen klinkt in", tekst: "West-NL ligt op **veen**. Veen bevat veel water — als waterpeil wordt verlaagd voor landbouw, droogt veen uit en klinkt in. **5-10 mm zakking per jaar** = 50 cm per eeuw. Maakt NL **steeds dieper** onder zeeniveau." }],
          woorden: [{ woord: "veen", uitleg: "Half-vergane plantenresten in moerasbodem — typisch West-NL ondergrond." }],
          theorie: "Probleem-illustratie: Schiphol ligt ~4 m onder NAP. Door bodemdaling daalt het verder. Funderingen huizen scheef → schade.",
          niveaus: { basis: "Land zakt door veen — A.", simpeler: "Bodemdaling = veen klinkt in = A.", nogSimpeler: "Veen zakt = A." },
        },
      },
      {
        q: "Wat is de **Watertoets**?",
        options: ["Verplichte check op water-impact bij bouwplannen","Examen voor zwemmen","Drinkwater-keuring","Belasting"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — andere context.", "Niet — wel waterschapsbelasting, maar geen 'toets'."],
        uitlegPad: {
          stappen: [{ titel: "Watertoets sinds 2003", tekst: "Bij elke **nieuwe bouwplan** (woonwijk, weg, fabriek) moet de gemeente een **watertoets** doen: kan dit gebied water aan bij extreme regen + zeespiegelstijging? Anders → niet bouwen of aanpassen. Voorkomt bouwen in kwetsbare gebieden." }],
          woorden: [{ woord: "watertoets", uitleg: "Verplichte beoordeling van waterhuishouding bij ruimtelijke plannen." }],
          theorie: "Bij twijfel adviseert het **waterschap**. Mark UX: een ouder kan bv. niet zomaar in diepste deel Beemster een huis bouwen.",
          niveaus: { basis: "Check water bij bouw — A.", simpeler: "Watertoets = waterimpact-check = A.", nogSimpeler: "Check = A." },
        },
      },
      {
        q: "Welk doel heeft NL voor **CO₂-reductie** in 2030?",
        options: ["49% minder dan 1990","100% emissievrij","20% minder","Geen doel"],
        answer: 0,
        wrongHints: [null, "Pas 2050-doel (klimaatneutraal).", "Te weinig — EU eist meer.", "Wel een doel — Klimaatakkoord 2019."],
        uitlegPad: {
          stappen: [{ titel: "Klimaatakkoord 2019", tekst: "**Klimaatakkoord** ondertekend juni 2019 door regering + werkgevers + milieugroepen. Doel: **49% CO₂-reductie 2030** vs 1990. **2050**: 95% reductie + klimaatneutraal. Sectoren: industrie / mobiliteit / gebouwde omgeving / landbouw / elektriciteit." }],
          theorie: "Cito-actueel: kabinet Schoof (2024+) wil minder ambitieus, terug naar 2030-doel onder druk.",
          niveaus: { basis: "49% — A.", simpeler: "NL 2030-doel = -49% CO₂ = A.", nogSimpeler: "49% = A." },
        },
      },
    ],
  },

  // ─── E. Eind-opdracht ─────────────────────────────────────
  {
    title: "Examen-eindopdracht — NL + water",
    explanation:
      "Mix vragen over water-beheer NL. VMBO-AK-eindexamen-stijl.\n\nLet op tijdperiode (waterschap-traditie / Afsluitdijk / Deltawerken / nu).\n\nVeel succes!",
    checks: [
      {
        q: "Welk percentage van NL ligt **onder zeeniveau**?",
        options: ["~26%","~5%","~70%","Heel NL"],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Veel te veel.", "Niet — Limburg + Veluwe hoger."],
        uitlegPad: {
          stappen: [{ titel: "26% onder NAP", tekst: "**~26% NL ligt onder NAP** (Normaal Amsterdams Peil = zeeniveau). Zonder dijken zou ~60% bij hoog water onderlopen. Hoogste plek = Vaalserberg 322m. Laagste = Zuidplaspolder bij Nieuwerkerk -6,76m." }],
          niveaus: { basis: "26% — A.", simpeler: "Kwart NL onder zee = A.", nogSimpeler: "26 = A." },
        },
      },
      {
        q: "Welke **rivier** geeft het IJsselmeer zijn naam?",
        options: ["IJssel","Rijn","Maas","Waal"],
        answer: 0,
        wrongHints: [null, "Niet — heet wel Rijnland, niet IJsselmeer-naamgever.", "Niet — Maas mondt in Hollands Diep.", "Niet — Waal in Merwede."],
        uitlegPad: {
          stappen: [{ titel: "IJssel mondt erin uit", tekst: "**IJssel** is Rijntak die noordwaarts naar IJsselmeer stroomt. Voor 1932 mondde IJssel in Zuiderzee — vandaar de naam. **Gelderse IJssel** + **Hollandse IJssel** + **Overijsselse Vecht** alle in IJsselmeer-gebied." }],
          niveaus: { basis: "IJssel — A.", simpeler: "IJsselmeer = naar IJssel = A.", nogSimpeler: "IJssel = A." },
        },
      },
      {
        q: "Wat is **NAP**?",
        options: ["Normaal Amsterdams Peil — referentie zeeniveau","Naam voor polder","Nederlandse Atletiek Prijs","Nationaal Akkoord Pensioenen"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "NAP sinds 1684", tekst: "**NAP** = Normaal Amsterdams Peil. Begon als gemiddeld peil Amsterdams IJ (1684). Vandaag fysiek vastgelegd in granieten plaat in Stopera (Amsterdam stadhuis). Alle hoogtes in NL gemeten t.o.v. NAP." }],
          woorden: [{ woord: "NAP", uitleg: "Normaal Amsterdams Peil — zeeniveau-referentie in NL." }],
          niveaus: { basis: "Zeeniveau-referentie — A.", simpeler: "NAP = zeeniveau-meetpunt = A.", nogSimpeler: "NAP = A." },
        },
      },
      {
        q: "Wat is bestuurlijk **niet juist** voor waterschappen?",
        options: ["Geen eigen verkiezingen","Eigen belasting heffen","Dijkbeheer","Rioolwaterzuivering"],
        answer: 0,
        wrongHints: [null, "Klopt — eigen verkiezingen (~elke 4 jaar).", "Wel — eigen taken.", "Wel — eigen taak."],
        uitlegPad: {
          stappen: [{ titel: "Letten op 'niet'-vraag", tekst: "Vraag draait om wat NIET juist is. **Geen eigen verkiezingen** = onjuist (waterschappen hebben WEL eigen verkiezingen, samen met provinciale staten-verkiezingen elke 4 jaar). Andere opties zijn allemaal echte taken." }],
          theorie: "Examen-tip: lees altijd 'niet'-vragen 2x. Onderstreep 'niet' voor je antwoordt.",
          niveaus: { basis: "Geen verkiezingen = onjuist — A.", simpeler: "Waterschappen HEBBEN verkiezingen → 'geen' = onjuist = A.", nogSimpeler: "A = onjuist." },
        },
      },
      {
        q: "Welk **jaartal** koppel je aan de **Watersnoodramp**?",
        options: ["1953","1932","1986","1997"],
        answer: 0,
        wrongHints: [null, "Afsluitdijk-jaar.", "Flevoland-oprichting.", "Maeslantkering-voltooiing."],
        uitlegPad: {
          stappen: [{ titel: "Vier kerndata water-NL", tekst: "**1932** Afsluitdijk. **1953** Watersnood. **1986** Provincie Flevoland + Oosterscheldekering. **1997** Maeslantkering. Onthoud deze 4 — kernkennis VMBO-AK." }],
          niveaus: { basis: "1953 — A.", simpeler: "Watersnoodramp = 1953 = A.", nogSimpeler: "1953 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const nederlandWaterVo = {
  id: "nederland-water-vo",
  title: "Nederland en water (VMBO-AK)",
  emoji: "🌊",
  level: "vmbo-gt-4",
  subject: "aardrijkskunde",
  referentieNiveau: "vmbo-gt-CSE",
  sloThema: "Aardrijkskunde VMBO — domein Water / Nederland delta-land",
  prerequisites: [
    { id: "klimaten-aardrijkskunde", title: "Klimaten + klimaatverandering", niveau: "po-1F" },
    { id: "water-erfgoed-nederland-po", title: "Water + erfgoed NL", niveau: "po-1F" },
    { id: "topografie-nederland", title: "Topografie NL", niveau: "po-1F" },
  ],
  intro:
    "Hoe houdt Nederland droge voeten? Van Hoogheemraadschap Rijnland (1255) via Afsluitdijk (1932) + Watersnood (1953) + Deltawerken (1953-1997) naar klimaatadaptatie vandaag. VMBO-GT-AK eindexamen-stof domein Water. 5 stappen × ~5 vragen. ~15 min.",
  triggerKeywords: [
    "Nederland water", "delta", "watersnood", "1953",
    "Deltawerken", "Oosterscheldekering", "Maeslantkering",
    "Afsluitdijk", "Lely", "IJsselmeer", "Markermeer",
    "Flevoland", "polder", "inpoldering",
    "waterschap", "Rijnland", "NAP",
    "Ruimte voor de Rivier", "uiterwaard",
    "zeespiegelstijging", "klimaatadaptatie", "KNMI",
    "bodemdaling", "veen",
    "Van Veen", "Johan van Veen",
  ],
  chapters,
  steps,
};

export default nederlandWaterVo;

// Leerpad: Topografie Europa (groep 7-8 basisschool)
// 6 stappen × 3 checks = 18 vragen. Aansluiting op europese-unie-po +
// topografie-nederland. Cito-stof wereldoriëntatie.
// Stijl: kort, NL-context-bridge (welk land grenst aan ons + buurland-feiten).

const chapters = [
  { letter: "A", title: "Europa: vorm + werelddelen", emoji: "🌍", from: 0, to: 0 },
  { letter: "B", title: "Hoofdsteden 4 windrichtingen", emoji: "🏛️", from: 1, to: 4 },
  { letter: "C", title: "Wateren + bergen", emoji: "💧", from: 5, to: 5 },
];

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc topografie: lijst per windrichting onthouden + geheugentrucs (bv. 'Wie Pa Bedrog Vraagt' voor Wenen-Praag-Boedapest-Vlaanderen). Hoofdsteden vaak in vraag verstopt.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Stap 1 — Europa: vorm + werelddelen",
    explanation: "**Werelddelen** (continenten): 7 stuks — **Europa, Azië, Afrika, Noord-Amerika, Zuid-Amerika, Oceanië, Antarctica**.\n\n**Europa** is qua oppervlak het **op één na kleinste** werelddeel (alleen Oceanië is kleiner). Maar qua **inwoners** zit het in de top: ~750 miljoen.\n\n**Grenzen van Europa**:\n- **Westen**: Atlantische Oceaan\n- **Noorden**: Noordelijke IJszee\n- **Oosten**: Oeral-gebergte (Rusland) + Kaspische Zee — splitsing tussen Europa en Azië\n- **Zuiden**: Middellandse Zee\n\nRusland is bijzonder: ligt deels in Europa (westen, t/m de Oeral) en deels in Azië (oostelijk).\n\n**~45 landen** in Europa. Niet allemaal EU-lidstaat (UK is geen EU-lid sinds Brexit, Noorwegen + Zwitserland kozen er nooit voor).",
    emoji: "🌍",
    checks: [
      {
        q: "Welke gebergte vormt de oostelijke grens van Europa (en scheidt Europa van Azië)?",
        options: ["Alpen", "Pyreneeën", "Oeral", "Karpaten"],
        answer: 2,
        wrongHints: ["Alpen liggen in midden-Europa (Zwitserland, Oostenrijk, Italië-grens) — niet de grens met Azië.", "Pyreneeën liggen tussen Frankrijk en Spanje — geen Azië-grens.", null, "Karpaten liggen in Roemenië/Polen — binnen Europa, geen continent-grens."],
        explanation: "**Oeral-gebergte** loopt door Rusland van noord naar zuid. Geldt als symbolische scheidingslijn tussen Europa (west) en Azië (oost). Plus de Kaspische Zee in het zuiden. Antwoord C.",
        uitlegPad: compact(
          "Oeral = Europa-Azië-grens binnen Rusland. Westelijk = Europa, oostelijk = Azië. Plus Kaspische Zee in zuiden.",
          { basis: "Oeral. = C.", simpeler: "Oeral splitst Europa en Azië in Rusland. = C.", nogSimpeler: "Oeral = C." },
          [{ woord: "Oeral", uitleg: "Gebergte in Rusland — symbolische Europa-Azië-grens." }, { woord: "Kaspische Zee", uitleg: "Grote binnenzee tussen Europa, Azië, Iran." }],
        ),
      },
      {
        q: "Hoeveel werelddelen (continenten) telt de aarde?",
        options: ["5", "6", "7", "9"],
        answer: 2,
        wrongHints: ["Te weinig — er zijn er meer.", "Bijna — eentje meer.", null, "Te veel."],
        explanation: "**7 werelddelen**: Europa, Azië, Afrika, Noord-Amerika, Zuid-Amerika, Oceanië, Antarctica. Sommige tellingen combineren Noord+Zuid-Amerika tot 'Amerika' (dan 6), of laten Antarctica weg (dan 6). Standaard NL-onderwijs: 7. Antwoord C.",
        uitlegPad: compact(
          "7 werelddelen: Europa, Azië, Afrika, Noord-Amerika, Zuid-Amerika, Oceanië, Antarctica. Geheugentruc: 'EAANZOA'.",
          { basis: "7. = C.", simpeler: "EU, AZ, AF, NA, ZA, OC, AT = 7. = C.", nogSimpeler: "7 = C." },
          [{ woord: "werelddeel", uitleg: "Continent — groot landoppervlak op aarde." }],
        ),
      },
      {
        q: "Welk land ligt deels in Europa én deels in Azië?",
        options: ["Turkije", "Rusland", "Beide A en B", "Frankrijk"],
        answer: 2,
        wrongHints: ["Turkije ligt voor het grootste deel in Azië, maar Istanbul is deels Europees — dus deel A klopt. Maar er is meer.", "Rusland ligt deels in Europa (westkant tot Oeral) en deels in Azië (oostkant tot Pacific) — dus B klopt ook. Maar...", null, "Frankrijk ligt volledig in Europa (op overzeese gebieden na in Caribisch/Pacific)."],
        explanation: "**Zowel Rusland als Turkije** liggen op 2 werelddelen. Rusland: Europa (Moskou + Sint-Petersburg) + Azië (Vladivostok + Siberië). Turkije: Europa (Istanbul-Europees deel) + Azië (Ankara + rest). Antwoord C.",
        uitlegPad: compact(
          "2 landen op 2 continenten: Rusland (Europa-Azië via Oeral) + Turkije (Europa-Azië via Bosporus in Istanbul). Egypte ligt op Afrika maar Sinaï-schiereiland telt soms als Azië.",
          { basis: "Beide. = C.", simpeler: "Rusland EN Turkije liggen in 2 werelddelen. = C.", nogSimpeler: "Beide = C." },
          [{ woord: "Bosporus", uitleg: "Zeestraat door Istanbul — scheidt Europa van Azië." }],
        ),
      },
    ],
  },
  {
    title: "Stap 2 — Hoofdsteden West-Europa",
    explanation: "**West-Europese hoofdsteden** (handig om naast NL te kennen):\n\n| Land | Hoofdstad |\n|---|---|\n| Nederland 🇳🇱 | **Amsterdam** (regering in Den Haag) |\n| België 🇧🇪 | **Brussel** (ook EU-hoofdstad) |\n| Luxemburg 🇱🇺 | **Luxemburg-Stad** |\n| Duitsland 🇩🇪 | **Berlijn** |\n| Frankrijk 🇫🇷 | **Parijs** |\n| Verenigd Koninkrijk 🇬🇧 | **Londen** |\n| Ierland 🇮🇪 | **Dublin** |\n\n**Bijzonderheden**:\n- **Amsterdam vs Den Haag**: Amsterdam is officieel hoofdstad (Grondwet 1815) — maar regering + parlement zitten in **Den Haag**. Uitzonderlijk.\n- **Brussel**: hoofdstad België + de facto EU-hoofdstad + NAVO. Drietalig (NL/FR/DE).\n- **Berlijn**: hoofdstad Duitsland sinds 1990 (na hereniging). Voor 1990 was Bonn de hoofdstad van West-Duitsland.\n- **Verenigd Koninkrijk** = Engeland + Schotland + Wales + Noord-Ierland. Niet meer EU-lid sinds Brexit.",
    emoji: "🏛️",
    checks: [
      {
        q: "Wat is de hoofdstad van **Duitsland**?",
        options: ["München", "Bonn", "Berlijn", "Frankfurt"],
        answer: 2,
        wrongHints: ["München = grote stad in Beieren (zuiden), niet hoofdstad.", "Bonn was hoofdstad van WEST-Duitsland (1949-1990). Niet meer.", null, "Frankfurt = financieel centrum (ECB!) — geen hoofdstad."],
        explanation: "**Berlijn** is hoofdstad van Duitsland sinds 1990 (na Duitse hereniging). Tijdens deling (1949-1990) was West-Berlijn enclave + Bonn = hoofdstad West-Duitsland, Oost-Berlijn = hoofdstad DDR. Antwoord C.",
        uitlegPad: compact(
          "Berlijn = hoofdstad Duitsland (sinds 1990). Voor val muur: Bonn was hoofdstad West-Duitsland. Sinds hereniging: Berlijn weer.",
          { basis: "Berlijn. = C.", simpeler: "Duitsland = Berlijn. = C.", nogSimpeler: "Berlijn = C." },
          [{ woord: "Berlijn", uitleg: "Hoofdstad Duitsland." }, { woord: "Bonn", uitleg: "Hoofdstad West-Duitsland 1949-1990." }],
        ),
      },
      {
        q: "Wat is de hoofdstad van het Verenigd Koninkrijk?",
        options: ["Edinburgh", "Dublin", "Londen", "Cardiff"],
        answer: 2,
        wrongHints: ["Edinburgh = hoofdstad Schotland (deel van UK).", "Dublin = hoofdstad Ierland (apart land, geen UK).", null, "Cardiff = hoofdstad Wales (deel van UK)."],
        explanation: "**Londen** = hoofdstad Verenigd Koninkrijk. UK bestaat uit 4 delen (Engeland + Schotland + Wales + Noord-Ierland) met elk eigen 'hoofdstad' (Londen + Edinburgh + Cardiff + Belfast), maar Londen is de hoofdstad van het hele rijk. Antwoord C.",
        uitlegPad: compact(
          "Londen = UK-hoofdstad. UK = 4 delen (Engeland + Schotland + Wales + N-Ierland). Niet meer EU-lid sinds Brexit 2020.",
          { basis: "Londen. = C.", simpeler: "UK = Londen. = C.", nogSimpeler: "Londen = C." },
          [{ woord: "Verenigd Koninkrijk", uitleg: "UK — Engeland + Schotland + Wales + N-Ierland." }],
        ),
      },
      {
        q: "Wat is de hoofdstad van **België**?",
        options: ["Antwerpen", "Brussel", "Gent", "Brugge"],
        answer: 1,
        wrongHints: ["Antwerpen = grote havenstad België (Vlaanderen) — niet hoofdstad.", null, "Gent = mooie stad Vlaanderen — niet hoofdstad.", "Brugge = toeristisch Vlaanderen — niet hoofdstad."],
        explanation: "**Brussel** = hoofdstad België. Bijzonder: ligt in Vlaanderen-gebied (waar NL gesproken wordt) maar zelf hoofdzakelijk Franstalig. Plus: hoofdstad EU (Commissie + Raad) + NAVO. Antwoord B.",
        uitlegPad: compact(
          "Brussel = België-hoofdstad + EU-hoofdstad + NAVO-hoofdstad. Drietalig (NL/FR/DE). NL-grens-buurland.",
          { basis: "Brussel. = B.", simpeler: "België = Brussel. = B.", nogSimpeler: "Brussel = B." },
          [{ woord: "Brussel", uitleg: "Hoofdstad België + de facto EU." }],
        ),
      },
    ],
  },
  {
    title: "Stap 3 — Hoofdsteden Zuid-Europa",
    explanation: "**Zuid-Europese hoofdsteden**:\n\n| Land | Hoofdstad |\n|---|---|\n| Spanje 🇪🇸 | **Madrid** |\n| Portugal 🇵🇹 | **Lissabon** |\n| Italië 🇮🇹 | **Rome** |\n| Griekenland 🇬🇷 | **Athene** |\n| Vaticaanstad 🇻🇦 | (= staat in zichzelf, Rome) |\n\n**Bijzonderheden**:\n- **Rome** = hoofdstad Italië. Bevat de **Vaticaanstad** — kleinste staat ter wereld (~44 ha, ~800 inwoners). Paus = staatshoofd.\n- **Athene** = hoofdstad Griekenland. Oudste hoofdstad van Europa — bestond al 3500 jaar geleden. 'Wieg van de democratie'.\n- **Madrid + Lissabon** = grote Iberische hoofdsteden. Lissabon ligt aan Atlantische Oceaan.\n\nZuid-Europa = warm + droog klimaat, veel toerisme + olijfolie + wijn.",
    emoji: "🏛️",
    checks: [
      {
        q: "Wat is de hoofdstad van **Spanje**?",
        options: ["Barcelona", "Madrid", "Valencia", "Sevilla"],
        answer: 1,
        wrongHints: ["Barcelona = grote stad Catalonië — niet hoofdstad. Wel veel toerisme.", null, "Valencia = grote stad oostkust — niet hoofdstad.", "Sevilla = stad Andalusië (zuiden) — niet hoofdstad."],
        explanation: "**Madrid** = hoofdstad Spanje. Ligt centraal in het land (op een hoogvlakte). Grootste stad van Spanje + financieel centrum. Antwoord B.",
        uitlegPad: compact(
          "Madrid = Spanje-hoofdstad. Centraal gelegen, ~3.3 mln inwoners. Barcelona is wel groter qua toerisme maar geen hoofdstad.",
          { basis: "Madrid. = B.", simpeler: "Spanje = Madrid. = B.", nogSimpeler: "Madrid = B." },
          [{ woord: "Madrid", uitleg: "Hoofdstad Spanje, centraal." }],
        ),
      },
      {
        q: "Wat is de hoofdstad van **Italië**?",
        options: ["Milaan", "Venetië", "Rome", "Napels"],
        answer: 2,
        wrongHints: ["Milaan = mode + financieel centrum noord-Italië — niet hoofdstad.", "Venetië = beroemd watertoeristenstadje — niet hoofdstad.", null, "Napels = grote stad zuid-Italië — niet hoofdstad."],
        explanation: "**Rome** = hoofdstad Italië. 'Eeuwige stad' — bestaat sinds 753 voor Christus. Bevat ook de **Vaticaanstad** (mini-staat met de paus). Antwoord C.",
        uitlegPad: compact(
          "Rome = Italië-hoofdstad. Romeinse Rijk-hoofdstad, sinds 1871 ook Italië-hoofdstad. Bevat Vaticaanstad.",
          { basis: "Rome. = C.", simpeler: "Italië = Rome. = C.", nogSimpeler: "Rome = C." },
          [{ woord: "Rome", uitleg: "Hoofdstad Italië, Romeinse erfgoed." }, { woord: "Vaticaanstad", uitleg: "Kleinste land ter wereld, ligt in Rome." }],
        ),
      },
      {
        q: "Wat is de hoofdstad van **Griekenland**?",
        options: ["Sparta", "Athene", "Olympia", "Thessaloniki"],
        answer: 1,
        wrongHints: ["Sparta = oude stadstaat (rivaal van Athene in oudheid) — geen hoofdstad nu.", null, "Olympia = plek van oude Olympische Spelen — geen hoofdstad.", "Thessaloniki = 2e stad Griekenland — niet hoofdstad."],
        explanation: "**Athene** = hoofdstad Griekenland. Een van oudste steden ter wereld (3500 jaar). Bekend om de Akropolis + Parthenon — 'wieg van de democratie'. Antwoord B.",
        uitlegPad: compact(
          "Athene = Griekenland-hoofdstad. Oudste continu bewoonde stad van Europa.",
          { basis: "Athene. = B.", simpeler: "Griekenland = Athene. = B.", nogSimpeler: "Athene = B." },
          [{ woord: "Athene", uitleg: "Hoofdstad Griekenland, oude democratie." }, { woord: "Akropolis", uitleg: "Heuvel in Athene met Parthenon-tempel." }],
        ),
      },
    ],
  },
  {
    title: "Stap 4 — Hoofdsteden Noord-Europa",
    explanation: "**Noord-Europese hoofdsteden** (Scandinavië + buren):\n\n| Land | Hoofdstad |\n|---|---|\n| Zweden 🇸🇪 | **Stockholm** |\n| Noorwegen 🇳🇴 | **Oslo** |\n| Finland 🇫🇮 | **Helsinki** |\n| Denemarken 🇩🇰 | **Kopenhagen** |\n| IJsland 🇮🇸 | **Reykjavik** |\n\n**Bijzonderheden**:\n- **Scandinavië** = traditioneel Zweden + Noorwegen + Denemarken. Bredere term: 'Noordse landen' (+ Finland + IJsland).\n- **Noorwegen + IJsland**: GEEN EU-lidstaten (Noorwegen koos in 1972 + 1994 referenda voor NEE). Wel in EER.\n- **Finland** spreekt Fins (geen Germaanse taal — verwant aan Estisch + Hongaars).\n- **Reykjavik** = noordelijkste hoofdstad ter wereld.\n- Klimaat: lang + koud. 's Zomers 'middernachtzon', 's winters 'pooldageraad'.",
    emoji: "🏛️",
    checks: [
      {
        q: "Wat is de hoofdstad van **Noorwegen**?",
        options: ["Bergen", "Stockholm", "Oslo", "Helsinki"],
        answer: 2,
        wrongHints: ["Bergen = 2e stad Noorwegen + havenstad — niet hoofdstad.", "Stockholm = hoofdstad Zweden, niet Noorwegen.", null, "Helsinki = hoofdstad Finland."],
        explanation: "**Oslo** = hoofdstad Noorwegen. Ligt aan een fjord (Oslofjord). Antwoord C.",
        uitlegPad: compact(
          "Oslo = hoofdstad Noorwegen. Aan fjord. Noorwegen niet in EU (referenda 1972 + 1994).",
          { basis: "Oslo. = C.", simpeler: "Noorwegen = Oslo. = C.", nogSimpeler: "Oslo = C." },
          [{ woord: "fjord", uitleg: "Lange smalle zee-inham tussen bergen — kenmerkend Noorwegen." }],
        ),
      },
      {
        q: "Wat is de hoofdstad van **Denemarken**?",
        options: ["Stockholm", "Kopenhagen", "Oslo", "Aarhus"],
        answer: 1,
        wrongHints: ["Stockholm = Zweden.", null, "Oslo = Noorwegen.", "Aarhus = 2e stad Denemarken, niet hoofdstad."],
        explanation: "**Kopenhagen** = hoofdstad Denemarken. Ligt op eiland Seeland. Verbonden via brug + tunnel met Zweden (Öresundbrug). Antwoord B.",
        uitlegPad: compact(
          "Kopenhagen = Denemarken-hoofdstad. Op eiland Seeland. Brug naar Zweden.",
          { basis: "Kopenhagen. = B.", simpeler: "Denemarken = Kopenhagen. = B.", nogSimpeler: "Kopenhagen = B." },
          [{ woord: "Kopenhagen", uitleg: "Hoofdstad Denemarken — beroemd Tivoli + Kleine Zeemeermin." }],
        ),
      },
      {
        q: "Welk Scandinavisch land is GEEN lid van de Europese Unie?",
        options: ["Zweden", "Finland", "Denemarken", "Noorwegen"],
        answer: 3,
        wrongHints: ["Zweden is EU-lid sinds 1995.", "Finland is EU-lid sinds 1995.", "Denemarken is EU-lid sinds 1973.", null],
        explanation: "**Noorwegen** is GEEN EU-lid. Twee referenda (1972 + 1994) wezen toetreding af — vooral vanwege visserij + olie-belangen. Wel in EER (European Economic Area) → meeste EU-regels gelden. Antwoord D.",
        uitlegPad: compact(
          "Noorwegen + IJsland + Zwitserland = EER maar geen EU-lid. Zweden/Finland/Denemarken zijn wel EU. Denemarken zit ook NIET in eurozone (heeft Deense kroon).",
          { basis: "Noorwegen. = D.", simpeler: "Noorwegen koos 2x tegen EU. = D.", nogSimpeler: "Noorwegen = D." },
          [{ woord: "EER", uitleg: "European Economic Area — EU + Noorwegen/IJsland/Liechtenstein." }],
        ),
      },
    ],
  },
  {
    title: "Stap 5 — Hoofdsteden Oost-Europa",
    explanation: "**Oost-Europese hoofdsteden** (voormalige Oostblok-landen + meer):\n\n| Land | Hoofdstad |\n|---|---|\n| Polen 🇵🇱 | **Warschau** |\n| Tsjechië 🇨🇿 | **Praag** |\n| Slowakije 🇸🇰 | **Bratislava** |\n| Hongarije 🇭🇺 | **Boedapest** |\n| Roemenië 🇷🇴 | **Boekarest** |\n| Bulgarije 🇧🇬 | **Sofia** |\n| Oostenrijk 🇦🇹 | **Wenen** |\n| Rusland 🇷🇺 | **Moskou** |\n| Oekraïne 🇺🇦 | **Kiev** (Kyiv) |\n\n**Geheugentruc voor 4 hoofdsteden**:\n- **W**enen (Oostenrijk)\n- **P**raag (Tsjechië)\n- **B**oedapest (Hongarije)\n- **B**ratislava (Slowakije)\n→ 'WPBB' alle 4 aan de **Donau-rivier**.\n\n**Bijzonderheden**:\n- **Tsjechoslowakije** splitste in 1993 vreedzaam in Tsjechië (Praag) + Slowakije (Bratislava). 'Fluwelen scheiding'.\n- **Wenen** = oude Habsburgs-hoofdstad. Niet voor de hand voor 'Oost' maar lag ten tijde van Koude Oorlog dicht bij IJzeren Gordijn.\n- **Kiev/Kyiv**: hoofdstad Oekraïne. Russische schrijving = Kiev, Oekraïense schrijving = Kyiv. Door oorlog vanaf 2022 vaak in nieuws.",
    emoji: "🏛️",
    checks: [
      {
        q: "Wat is de hoofdstad van **Polen**?",
        options: ["Krakau", "Praag", "Warschau", "Boedapest"],
        answer: 2,
        wrongHints: ["Krakau = oude koningsstad Polen, 2e stad — niet hoofdstad.", "Praag = hoofdstad Tsjechië, niet Polen.", null, "Boedapest = hoofdstad Hongarije."],
        explanation: "**Warschau** (Pools: Warszawa) = hoofdstad Polen. Antwoord C.",
        uitlegPad: compact(
          "Warschau = Polen-hoofdstad. EU-lid sinds 2004. Munt: zloty (geen euro).",
          { basis: "Warschau. = C.", simpeler: "Polen = Warschau. = C.", nogSimpeler: "Warschau = C." },
          [{ woord: "Warschau", uitleg: "Hoofdstad Polen — heropgebouwd na WO2-verwoesting." }],
        ),
      },
      {
        q: "Welke 4 hoofdsteden liggen alle aan de rivier de **Donau**?",
        options: [
          "Warschau, Praag, Berlijn, Wenen",
          "Wenen, Praag, Boedapest, Bratislava",
          "Wenen, Bratislava, Boedapest, Belgrado",
          "Berlijn, Wenen, Boedapest, Sofia",
        ],
        answer: 2,
        wrongHints: ["Praag ligt aan Moldau (zijrivier), niet Donau. Berlijn aan Spree.", "Praag ligt NIET aan Donau.", null, "Berlijn ligt aan Spree, Sofia niet aan Donau."],
        explanation: "**Donau** stroomt door Wenen (Oostenrijk), Bratislava (Slowakije), Boedapest (Hongarije), Belgrado (Servië). 2e langste rivier Europa (na Wolga). Antwoord C.",
        uitlegPad: compact(
          "Donau = 2e langste rivier Europa. Door 10 landen. 4 hoofdsteden eraan: Wenen, Bratislava, Boedapest, Belgrado. (Praag aan Moldau, niet Donau.)",
          { basis: "Wenen-Bratislava-Boedapest-Belgrado. = C.", simpeler: "WBBB ligt aan Donau. = C.", nogSimpeler: "WBBB = C." },
          [{ woord: "Donau", uitleg: "Grote rivier Centraal-Europa, mond in Zwarte Zee." }],
        ),
      },
      {
        q: "Wat is de hoofdstad van **Oekraïne**?",
        options: ["Moskou", "Minsk", "Kiev", "Sofia"],
        answer: 2,
        wrongHints: ["Moskou = hoofdstad Rusland, niet Oekraïne.", "Minsk = hoofdstad Wit-Rusland (Belarus), niet Oekraïne.", null, "Sofia = hoofdstad Bulgarije."],
        explanation: "**Kiev** (Oekraïens: Kyiv) = hoofdstad Oekraïne. Sinds Russische invasie februari 2022 dagelijks in het nieuws. Antwoord C.",
        uitlegPad: compact(
          "Kiev/Kyiv = Oekraïne-hoofdstad. Russische spelling 'Kiev', Oekraïense 'Kyiv'. Sinds 2022 in oorlog met Rusland.",
          { basis: "Kiev. = C.", simpeler: "Oekraïne = Kiev. = C.", nogSimpeler: "Kiev = C." },
          [{ woord: "Kiev", uitleg: "Hoofdstad Oekraïne." }],
        ),
      },
    ],
  },
  {
    title: "Stap 6 — Wateren + bergen Europa",
    explanation: "**Grote wateren rond Europa**:\n\n- **Atlantische Oceaan** — westkust (IE, UK, FR, ES, PT)\n- **Noordzee** — tussen NL/UK/DK/NO\n- **Middellandse Zee** — zuiden (Spanje, Frankrijk, Italië, Griekenland, Turkije)\n- **Oostzee** — tussen Scandinavië + Polen + Baltische staten\n- **Zwarte Zee** — Roemenië, Bulgarije, Oekraïne, Turkije\n- **Noordelijke IJszee** — boven Scandinavië + Rusland\n\n**Grote rivieren**:\n- **Donau** (Wenen-Bratislava-Boedapest-Belgrado, mondt in Zwarte Zee) — 2e langste\n- **Wolga** (Rusland) — langste van Europa, mondt in Kaspische Zee\n- **Rijn** (Zwitserland → Duitsland → NL) — belangrijkste handelsrivier voor NL\n- **Maas** (Frankrijk → België → NL)\n- **Theems** (UK, door Londen)\n- **Seine** (Frankrijk, door Parijs)\n\n**Grote bergketens**:\n- **Alpen** — Zwitserland, Oostenrijk, Frankrijk, Italië, Duitsland, Slovenië\n- **Pyreneeën** — grens Frankrijk-Spanje\n- **Karpaten** — Polen-Slowakije-Roemenië\n- **Oeral** — Rusland (Europa-Azië-grens)\n- **Scandinavische bergketen** — Noorwegen/Zweden",
    emoji: "💧",
    checks: [
      {
        q: "Welke is de **langste rivier** van Europa?",
        options: ["Rijn", "Donau", "Wolga", "Seine"],
        answer: 2,
        wrongHints: ["Rijn ~1233 km — belangrijke handelsrivier maar niet langst.", "Donau ~2860 km — 2e langste. Maar niet de allerlangste.", null, "Seine ~777 km — klein."],
        explanation: "**Wolga** is langste rivier Europa (~3530 km). Stroomt door Rusland → Kaspische Zee. Donau is 2e (~2860 km). Antwoord C.",
        uitlegPad: compact(
          "Top 3 langste rivieren Europa: 1) Wolga (~3530 km, Rusland), 2) Donau (~2860 km), 3) Oeral.",
          { basis: "Wolga. = C.", simpeler: "Wolga (Rusland) = langste rivier Europa. = C.", nogSimpeler: "Wolga = C." },
          [{ woord: "Wolga", uitleg: "Langste Europese rivier, door Rusland, naar Kaspische Zee." }],
        ),
      },
      {
        q: "Welk gebergte vormt de **grens tussen Frankrijk en Spanje**?",
        options: ["Alpen", "Pyreneeën", "Karpaten", "Apennijnen"],
        answer: 1,
        wrongHints: ["Alpen liggen tussen Frankrijk/Italië/Zwitserland/Oostenrijk — niet Spanje.", null, "Karpaten = Centraal-Oost-Europa (Polen/Slowakije/Roemenië).", "Apennijnen = ruggengraat van Italië."],
        explanation: "**Pyreneeën** = bergketen op grens Frankrijk-Spanje. ~430 km lang. Bevat Andorra (mini-staat in de bergen). Antwoord B.",
        uitlegPad: compact(
          "Pyreneeën = FR-ES grens (en Andorra). Alpen = Zwitserland-omgeving. Apennijnen = Italië. Karpaten = Oost-Europa.",
          { basis: "Pyreneeën. = B.", simpeler: "Frankrijk-Spanje = Pyreneeën. = B.", nogSimpeler: "Pyreneeën = B." },
          [{ woord: "Pyreneeën", uitleg: "Bergketen Frankrijk-Spanje-grens." }, { woord: "Andorra", uitleg: "Mini-staat in de Pyreneeën." }],
        ),
      },
      {
        q: "Welke zee ligt tussen **Spanje, Italië en Griekenland**?",
        options: ["Noordzee", "Oostzee", "Middellandse Zee", "Zwarte Zee"],
        answer: 2,
        wrongHints: ["Noordzee = tussen NL, UK, DK, NO.", "Oostzee = tussen Scandinavië en Polen.", null, "Zwarte Zee = oosten (Roemenië, Bulgarije, Oekraïne, Turkije)."],
        explanation: "**Middellandse Zee** = grote binnenzee tussen Zuid-Europa, Noord-Afrika en het Midden-Oosten. Verbonden met Atlantische Oceaan via Straat van Gibraltar. Antwoord C.",
        uitlegPad: compact(
          "Middellandse Zee tussen Zuid-Europa + Noord-Afrika + Midden-Oosten. Spanje/Italië/Griekenland liggen eraan. Gibraltar = poort naar Atlantische Oceaan.",
          { basis: "Middellandse Zee. = C.", simpeler: "Zuid-Europa-zee = Middellandse. = C.", nogSimpeler: "Middellandse = C." },
          [{ woord: "Middellandse Zee", uitleg: "Grote binnenzee tussen Europa-Afrika-Azië." }, { woord: "Gibraltar", uitleg: "Zeestraat tussen Atlantische Oceaan en Middellandse Zee." }],
        ),
      },
    ],
  },
];

const topografieEuropaPo = {
  id: "topografie-europa-po",
  title: "Topografie Europa — hoofdsteden, zeeën, bergen",
  emoji: "🌍",
  level: "po",
  subject: "wereldorientatie",
  referentieNiveau: "po-1F",
  sloThema: "Wereldoriëntatie - topografie Europa",
  intro: "18 vragen Cito-stof groep 7-8: hoofdsteden per windrichting, grote zeeën + rivieren, bergketens. Aansluiting op topografie-nederland + europese-unie-po.",
  triggerKeywords: ["topografie europa", "hoofdsteden europa", "europese landen", "rivier europa", "bergen europa"],
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "topografie-nederland", title: "Topografie Nederland", niveau: "po-1F" },
  ],
  chapters,
  steps,
};

export default topografieEuropaPo;

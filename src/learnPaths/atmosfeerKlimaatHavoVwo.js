// Leerpad: Atmosfeer + Klimaatsystemen — HAVO/VWO Aardrijkskunde
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Atmosfeer-lagen, druk + wind,
// Coriolis, fronten + depressies, klimaatzones (Köppen), opwarming.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["☁️", "💨", "🌪️", "🌍", "🏆"];

const chapters = [
  { letter: "A", title: "Atmosfeer-lagen", emoji: "☁️", from: 0, to: 0 },
  { letter: "B", title: "Luchtdruk + wind + Coriolis", emoji: "💨", from: 1, to: 1 },
  { letter: "C", title: "Fronten + depressies", emoji: "🌪️", from: 2, to: 2 },
  { letter: "D", title: "Klimaatzones + oceaanstromingen", emoji: "🌍", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — klimaatverandering", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Atmosfeer-lagen ───────────────────────────────────
  {
    title: "Atmosfeer-lagen + samenstelling",
    explanation:
      "**Atmosfeer** = lucht-schil rond aarde, ~100 km dik (Kármán-lijn).\n\n**Samenstelling**:\n• 78% **N₂** (stikstof) — inert.\n• 21% **O₂** (zuurstof) — leven afhankelijk.\n• 0,9% **Ar** (argon).\n• 0,04% **CO₂** (koolstof-dioxide, stijgend).\n• Variabel: waterdamp (0-4%), ozon (zeer weinig), methaan, etc.\n\n**Lagen** (van laag naar hoog):\n\n**1. Troposfeer** (0-12 km):\n• Bevat 80% van atmosfeer-massa.\n• Waar ALLE weer plaatsvindt (wolken, regen, wind).\n• Temperatuur daalt met hoogte (−6,5 °C per km).\n• Top: tropopauze.\n\n**2. Stratosfeer** (12-50 km):\n• Stabiel — geen wolken/weer.\n• **Ozonlaag** rond 20-30 km — beschermt tegen UV-straling.\n• Temperatuur stijgt met hoogte (UV-absorptie door O₃).\n• Vliegtuigen vliegen onderaan stratosfeer (~10-12 km) — stabiel, geen turbulentie.\n\n**3. Mesosfeer** (50-85 km):\n• Koudste laag (-90 °C op top).\n• Meteoren verbranden hier.\n\n**4. Thermosfeer** (85-500+ km):\n• Heel ijl maar zeer heet (>1000 °C door zonnewind-deeltjes).\n• Internationaal ruimtestation (ISS) op ~400 km.\n• Aurora (polaire licht) hier door zonnewind-interactie.\n\n**Broeikaseffect** (klassiek):\n• Zonlicht (kort-golf) komt door atmosfeer naar aarde.\n• Aarde reflecteert in infrarood (lang-golf).\n• Broeikasgassen (CO₂, methaan, waterdamp) absorberen IR → vasthouden warmte.\n• Zonder natuurlijk effect: aarde ~ −18 °C. Met: ~15 °C. **Cruciaal voor leven**.\n• Versterkt broeikaseffect (extra CO₂ door mens) → klimaatverandering.\n\n**Ozonlaag-probleem** (1980s):\n• CFK's (uit spuitbussen, koelkast) tasten ozon aan.\n• 'Ozongat' boven Antarctica (vooral lente).\n• Meer UV → meer huidkanker + DNA-schade.\n• **Montréal Protocol 1987**: CFK's verboden → succesvolle internationaal verdrag, ozonlaag herstelt.\n• Verschillend van klimaatverandering (CO₂) — wordt vaak verward.",
    checks: [
      {
        q: "Waarin vindt alle **weer** plaats?",
        options: ["Troposfeer", "Stratosfeer", "Mesosfeer", "Thermosfeer"],
        answer: 0,
        wrongHints: [null, "Niet — stabiel + droog daar.", "Te hoog.", "Te hoog."],
        uitlegPad: {
          stappen: [{ titel: "Onderste laag", tekst: "Troposfeer (0-12 km): bevat waterdamp + verticale luchtbeweging → wolken + neerslag + wind. Boven tropopauze: stabiel, geen weer." }],
          niveaus: { basis: "Troposfeer. A.", simpeler: "Onderste laag = weer. A.", nogSimpeler: "Troposfeer = A." },
        },
      },
      {
        q: "Wat doet de **ozonlaag** (in stratosfeer)?",
        options: [
          "Beschermt tegen schadelijke UV-straling",
          "Houdt warmte vast",
          "Maakt zuurstof aan",
          "Verkoelt aarde"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair functie.", "Niet — al bestaande O₂.", "Niet specifiek."],
        uitlegPad: {
          stappen: [
            { titel: "O₃ absorbeert UV", tekst: "Ozon (O₃) absorbeert UV-fotonen → splitsen + samenstellen continu → UV blijft in atmosfeer + minder dringt door naar aarde. Cruciaal voor DNA-bescherming alle leven." },
          ],
          theorie: "Zonder ozonlaag: huidkanker-rates omhoog + foto-synthese problemen.",
          niveaus: { basis: "Beschermt tegen UV. A.", simpeler: "Stopt schadelijke straling. A.", nogSimpeler: "UV-filter = A." },
        },
      },
      {
        q: "**Broeikaseffect** wordt veroorzaakt door:",
        options: [
          "Atmosfeer houdt door aarde-uitgezonden warmte (IR) vast",
          "Zonnestraling die direct opwarmt",
          "Vulkanen",
          "Magnetisme"
        ],
        answer: 0,
        wrongHints: [null, "Niet — verschil tussen inkomend + uitgaand.", "Geen broeikas-mechanisme.", "Niet relevant."],
        uitlegPad: {
          stappen: [
            { titel: "Glas-effect in kas", tekst: "Naam komt van tuinkas: licht komt in, warmte uit moeilijk. Atmosfeer doet zelfde: zon (kort-golf) door, aarde-warmte (lang-golf IR) deels vastgehouden door CO₂/CH₄/H₂O. Natuurlijk effect = +33°C; versterkt = klimaatverandering." },
          ],
          niveaus: { basis: "IR vasthouden. A.", simpeler: "Atmosfeer als glas. A.", nogSimpeler: "IR-trap = A." },
        },
      },
      {
        q: "Hoeveel **% CO₂** zit in atmosfeer (2024)?",
        options: ["~0,042% (= 420 ppm)", "~21%", "~78%", "~1%"],
        answer: 0,
        wrongHints: [null, "Niet — dat is O₂.", "Niet — dat is N₂.", "Hoger dan werkelijk."],
        uitlegPad: {
          stappen: [{ titel: "Spoor-gas met groot effect", tekst: "CO₂ is slechts ~420 ppm = 0,042% van atmosfeer. Toch enorme klimaat-impact want het effectief absorbeert IR. Pre-industrieel: 280 ppm. Stijgend ~2,5 ppm/jaar." }],
          niveaus: { basis: "0,042% (420 ppm). A.", simpeler: "Hele klein deel: 0,04%. A.", nogSimpeler: "420 ppm = A." },
        },
      },
      {
        q: "**Montréal Protocol 1987** regelt:",
        options: [
          "CFK-verbod tegen ozonlaag-aantasting",
          "CO₂-reductie",
          "Plastic-verbod",
          "Walvis-jacht"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is Parijs/Kyoto.", "Niet — pas later beleidsdiscussies.", "Niet — andere verdragen."],
        uitlegPad: {
          stappen: [
            { titel: "Internationaal succesverhaal", tekst: "Wetenschappers ontdekten 1985 ozongat → 1987 wereld-akkoord CFK's uitfaseren → ozonlaag herstelt langzaam → volledig herstel verwacht ~2070. Bewijs dat internationale samenwerking milieu-problemen kan oplossen." },
          ],
          theorie: "Klimaatverandering blijkt veel moeilijker — meer gevarieerde belangen + meer industrie betrokken.",
          niveaus: { basis: "CFK-verbod. A.", simpeler: "Verbood spuitbus-gas voor ozon. A.", nogSimpeler: "CFK = A." },
        },
      },
    ],
  },

  // ─── B. Luchtdruk + wind + Coriolis ───────────────────────
  {
    title: "Luchtdruk + wind + Coriolis-effect",
    explanation:
      "**Luchtdruk** = gewicht van luchtkolom boven punt.\n• Zee-niveau: ~**1013 hPa** (= 1 atm = 760 mmHg).\n• Op hoogte: minder lucht boven → lagere druk. Verdubbelt ongeveer per 5,5 km daling.\n• Berghoogte heeft ~30% minder druk → moeilijker ademen.\n\n**Hoge druk (anticycloon)**:\n• Lucht zakt → opwarming + uitdrogen → weinig wolken.\n• 'Mooi weer': zonnig, droog, weinig wind.\n• In NL: H boven Engeland = mooi weer NL.\n\n**Lage druk (depressie)**:\n• Lucht stijgt → afkoeling → condensatie → wolken + neerslag.\n• 'Slecht weer': bewolkt, regenachtig, winderig.\n• In NL: L boven IJsland trekt vaak over NL.\n\n**Wind**: lucht stroomt van hoge naar lage druk → drukverschillen veroorzaken wind.\n\n**Coriolis-effect** (door aarde-rotatie):\n• Aarde draait → bewegende lucht/water 'lijkt' naar rechts (NH) of links (ZH) af te buigen.\n• Effect groter bij hoge breedte, nul op evenaar.\n• Maakt wind NIET recht van H naar L, maar **omtrek wervelend**:\n  - **NH**: wind om L tegen de klok in, om H met de klok mee.\n  - **ZH**: omgekeerd.\n\n**Wind-systemen wereldwijd**:\n• **Passaten** (0-30° breedte): NO/ZO-winden, constant, droog.\n• **Westenwinden** (30-60°): dominant op gematigde zones.\n• **Polair-oosten**: rond N/Z-pool, koud + droog.\n\n**Lokaal wind-systeem**:\n• **Zeewind/landwind**: dag (land warm → opstijgt → zeewind naar binnen); nacht (omgekeerd).\n• **Föhn**: warme droge wind aan lij-zijde van berg.\n• **Mistral** (Zuid-Frankrijk): koude noordwind door Rhône-vallei.\n• **Sirocco**: hete Sahara-wind naar Middellandse Zee.\n\n**Schaal van Beaufort** (wind-snelheid):\n• 0: windstil. 4-5: matig (12-15 m/s, fris). 8: stormachtig. 10-12: zware tot orkaan-kracht.\n• Orkaan ≥ 32 m/s = ≥ 117 km/h.\n\n**Coriolis-effect-fabel**: 'water stroomt anders door gootsteen-afvoer op NH/ZH'. Onjuist — gootsteen-schaal te klein, Coriolis verwaarloosbaar. Wel echt: orkanen draaien anders per halfrond.",
    checks: [
      {
        q: "**Luchtdruk op zee-niveau** is standaard:",
        options: ["~1013 hPa (= 1 atm)", "~500 hPa", "~2000 hPa", "Variabel zonder norm"],
        answer: 0,
        wrongHints: [null, "Niet — te laag.", "Niet — te hoog.", "Niet — wel standaard."],
        uitlegPad: {
          stappen: [{ titel: "1 atm = 1013 hPa = 1013 mbar", tekst: "Standaard atmosfeer-druk op zee-niveau, 0°C. Op weerkaart 'hoog' = >1015 hPa, 'laag' = <1010 hPa. Verandert door temperatuur + weersysteem." }],
          niveaus: { basis: "1013 hPa. A.", simpeler: "Standaard ~1000 hPa. A.", nogSimpeler: "1013 = A." },
        },
      },
      {
        q: "Een **anticycloon (hoge druk)** in NL betekent meestal:",
        options: [
          "Mooi weer (zonnig, droog, weinig wind)",
          "Slecht weer met regen",
          "Stormachtig weer",
          "Sneeuw"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — anticycloon kalm.", "Mogelijk maar niet typisch."],
        uitlegPad: {
          stappen: [
            { titel: "Daleende lucht = drogend", tekst: "In anticycloon zakt lucht → warmt op + verliest relatieve vochtigheid → minder wolken. Daarom: zonnig + droog. Vooral in zomer 'hittegolf' onder H-gebied; in winter 'mistig + ijskoud'." },
          ],
          niveaus: { basis: "Mooi weer. A.", simpeler: "Hogedruk = zon. A.", nogSimpeler: "Mooi = A." },
        },
      },
      {
        q: "**Coriolis-effect** op het Noordelijk Halfrond buigt bewegende lucht:",
        options: [
          "Naar rechts",
          "Naar links",
          "Niet, alleen ZH",
          "Hangt af van breedte-graad"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is ZH.", "Niet — werkt op NH ook.", "Effect-grootte wel, richting niet."],
        uitlegPad: {
          stappen: [
            { titel: "Aarde-rotatie schijneffect", tekst: "Aarde draait van west naar oost. Voor waarnemer op draaiende aarde lijkt lucht naar rechts (NH) of links (ZH) af te buigen. Effect 0 op evenaar, maximaal op polen. Verklaart waarom orkanen op NH tegen de klok in draaien." },
          ],
          niveaus: { basis: "Rechts NH. A.", simpeler: "NH: rechts. ZH: links. A.", nogSimpeler: "Rechts = A." },
        },
      },
      {
        q: "Op NH draait een **depressie** (L) in welke richting?",
        options: [
          "Tegen de klok in",
          "Met de klok mee",
          "Geen draaiing",
          "Hangt af van seizoen"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel draaiing.", "Niet seizoens-afhankelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Coriolis + drukgradiënt", tekst: "Lucht stroomt naar L-centrum. Coriolis-buiging naar rechts op NH → spiraal tegen de klok in. Op ZH: met de klok mee. Orkanen volgen zelfde patroon (grote depressies)." },
          ],
          niveaus: { basis: "Tegen klok in (NH). A.", simpeler: "Linksom op NH. A.", nogSimpeler: "Tegen klok = A." },
        },
      },
      {
        q: "**Föhn-wind** is:",
        options: [
          "Warm + droog aan lij-zijde berg (lucht gestegen + condensatie aan loef-zijde, dan gedaald)",
          "Koude zeewind",
          "Sneeuwstorm",
          "Tropische cycloon"
        ],
        answer: 0,
        wrongHints: [null, "Niet — föhn warm.", "Niet — föhn warm.", "Niet — kleine schaal."],
        uitlegPad: {
          stappen: [
            { titel: "Adiabatische opwarming", tekst: "Vochtige lucht stijgt aan windkant berg → koelt → condenseert → regen → lucht nu DROOG. Aan andere kant zakt droge lucht → adiabatische opwarming (1°C per 100m). Bovenop berg 0°C → in dal 25°C. Vooral Alpen + Schotse Hooglanden." },
          ],
          theorie: "Soms heel snel: föhn kan in uren temperatuur 10-15°C laten stijgen → fenomeen 'föhn-koorts' (gezondheid-impact).",
          niveaus: { basis: "Warm + droog aan lij. A.", simpeler: "Berg-effect: warm aan andere kant. A.", nogSimpeler: "Föhn = A." },
        },
      },
    ],
  },

  // ─── C. Fronten + depressies ──────────────────────────────
  {
    title: "Fronten + depressies — Bjerknes-model",
    explanation:
      "**Front** = grens tussen twee luchtmassa's met verschillende temperatuur/vochtigheid.\n\n**Vier types**:\n\n**1. Warmtefront** (warme lucht verdringt koude):\n• Schuift langzaam over koude lucht.\n• Helling 1:200 — lange voorbode.\n• Bewolking 1-2 dagen vooraf: cirrus → cirrostratus → altostratus → nimbostratus.\n• Lange, zachte regenval (mottregen).\n• Op kaart: rode lijn met halfronde bobbels in richting beweging.\n\n**2. Koudefront** (koude lucht verdringt warme):\n• Beweegt snel.\n• Helling 1:50 — steil → krachtige opwaarts.\n• Cumulonimbus = onweer + hagel mogelijk.\n• Korte, intense buien.\n• Op kaart: blauwe lijn met driehoeken in richting beweging.\n• Na passage: koude + heldere lucht.\n\n**3. Occlusiefront** (samengevoegd):\n• Koudefront haalt warmtefront in (sneller).\n• Warme lucht omhoog geduwd → uitgebreide bewolking + neerslag.\n• Op kaart: paarse lijn met afwisselend bobbels + driehoeken.\n\n**4. Stationair front**: geen beweging.\n\n**Depressie-ontwikkeling (cyclogenese)**:\n1. Frontale grens tussen polair (koud) + tropisch (warm).\n2. Verstoring → golf op grens.\n3. Lage druk vormt op golf.\n4. Warmtefront vooruit, koudefront achteraan.\n5. Koudefront haalt warmtefront in → occlusie.\n6. Depressie sterft uit (geen energiebron meer).\n\nKlassiek **Bjerknes-Bergen-model** (Noors, jaren 1920) — basis weerkunde.\n\n**Op weerkaart**:\n• Isobaren: lijnen van gelijke luchtdruk.\n• Dichte isobaren → groot drukverschil → harde wind.\n• Rond H + L gebogen.\n\n**Voorspelling**:\n• Modellen (HARMONIE, ECMWF) simuleren atmosfeer in 3D-grid.\n• 1-3 dagen voorspelling: betrouwbaar.\n• 7-14 dagen: indicatie + onzekerheid.\n• > 14 dagen: weinig nut (chaos-grens, Lorenz 1963).\n\n**Extreem weer**:\n• Orkaan: tropische cycloon ≥ 117 km/h. Energiebron warmte uit warme oceaan.\n• Tornado: lokale wervel op kleine schaal, vooral USA (warm + koud lucht botsen op vlak terrein).\n• Hagel: onweerswolk waar druppels opgaan/dalen + bevriezen meermaals.\n• Sneeuwstorm: harde wind + hevige sneeuwval, beperkt zicht.",
    checks: [
      {
        q: "Een **koudefront** brengt vaak:",
        options: [
          "Korte intense buien + onweer + cumulonimbus",
          "Langdurige mottregen",
          "Mist",
          "Helder zonnig weer"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is warmtefront.", "Niet — geen mist.", "Pas NA passage."],
        uitlegPad: {
          stappen: [{ titel: "Steile lift = hevig", tekst: "Koude lucht dringt onder warme door → warme lucht snel omhoog → snel condensatie → cumulonimbus (verticale onweerswolken). Resultaat: korte hevige buien, soms hagel + onweer. Na passage: temperatuur daalt + heldere lucht." }],
          niveaus: { basis: "Buien + onweer. A.", simpeler: "Korte hevige bui. A.", nogSimpeler: "Onweer = A." },
        },
      },
      {
        q: "**Isobaren** op weerkaart zijn:",
        options: [
          "Lijnen van gelijke luchtdruk",
          "Lijnen van gelijke temperatuur",
          "Lijnen van gelijke neerslag",
          "Lijnen van gelijke wind"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat zijn isothermen.", "Niet — isohyetes.", "Niet — anders weergegeven."],
        uitlegPad: {
          stappen: [{ titel: "Iso = gelijk, baar = druk", tekst: "Hoe dichter op elkaar isobaren → groter drukgradient → harder wind. Patronen rond H + L op weerkaart vertellen waar het waait + hoe hard." }],
          niveaus: { basis: "Gelijke druk. A.", simpeler: "Iso-druk-lijnen. A.", nogSimpeler: "Druk = A." },
        },
      },
      {
        q: "Een **occlusiefront** ontstaat wanneer:",
        options: [
          "Koudefront warmtefront inhaalt + warme lucht omhoog duwt",
          "Twee koudefronten samenkomen",
          "Stationair front beweegt",
          "Depressie verdwijnt"
        ],
        answer: 0,
        wrongHints: [null, "Niet — koud + warm combinatie.", "Niet — beweging vereist.", "Wel resultaat, niet oorzaak."],
        uitlegPad: {
          stappen: [
            { titel: "Eind-stadium depressie", tekst: "Koudefront beweegt sneller dan warmtefront → klampt eraan → warme lucht-pakket tussen wordt OMHOOG gedrukt + verdwijnt aan oppervlakte. Resultaat: één front met gemengde eigenschappen. Daarna sterft depressie uit." },
          ],
          niveaus: { basis: "Koud haalt warm in. A.", simpeler: "Beide fronten botsen. A.", nogSimpeler: "Occlusie = A." },
        },
      },
      {
        q: "Maximale **betrouwbare** weersvoorspelling-horizon:",
        options: [
          "~3-7 dagen",
          "1 dag",
          "~30 dagen",
          "Niet voorspelbaar"
        ],
        answer: 0,
        wrongHints: [null, "Te kort.", "Niet betrouwbaar zo ver.", "Wel voor enkele dagen."],
        uitlegPad: {
          stappen: [
            { titel: "Chaos-grens (Lorenz)", tekst: "Edward Lorenz 1963 ontdekte: atmosfeer is chaotisch systeem. Kleinste verstoring (vlinder-effect) groeit exponentieel. Praktisch: 1-3 dagen vrij betrouwbaar, 7 dagen indicatie, na 14 dagen vrijwel willekeurig. Daarom: weer-modellen draaien tientallen variaties (ensemble) + tonen waarschijnlijkheidsbereik." },
          ],
          niveaus: { basis: "3-7 dagen. A.", simpeler: "Week-vooruit nog ok. A.", nogSimpeler: "~5 dgn = A." },
        },
      },
      {
        q: "**Orkaan** vereist als energiebron:",
        options: [
          "Warme oceaan (>26 °C)",
          "Koude poolregio",
          "Bergen",
          "Woestijn"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Geen orkanen.", "Verkoeling-bron."],
        uitlegPad: {
          stappen: [
            { titel: "Latente warmte uit verdamping", tekst: "Warme oceaan: water verdampt → waterdamp omhoog → condenseert → releases latente warmte → drijft opwaartse luchtstroom → cyclonale spiraal. Daarom orkanen vooral tropisch eind zomer (warmste water). Verdwijnt boven land of koud water (geen energiebron meer)." },
          ],
          theorie: "Klimaatverandering verwarmt oceanen → potentieel sterkere orkanen + langere seizoenen.",
          niveaus: { basis: "Warm water >26°C. A.", simpeler: "Warme zee = brandstof. A.", nogSimpeler: "Warm zee = A." },
        },
      },
    ],
  },

  // ─── D. Klimaatzones + oceaanstromingen ───────────────────
  {
    title: "Klimaatzones + oceaanstromingen",
    explanation:
      "**Köppen-Geiger-klimaatclassificatie** (basis CSE):\n\n**A - Tropisch** (alle maanden >18°C):\n• Af - regenwoud (Amazone, Congo, Indonesië).\n• Am - moeson (India, Z-Oost-Azië).\n• Aw - savanne (droog seizoen).\n\n**B - Droog**:\n• BW - woestijn (Sahara, Atacama, Australië-centrum).\n• BS - steppe (semi-droog, randen woestijn).\n\n**C - Gematigd** (winter koudste maand 0-18°C):\n• Cfb - zee-klimaat (NL!): mild + nat hele jaar.\n• Cfa - subtropisch (Florida, Z-China).\n• Cs - mediterraan (Z-Europa, Californië): warme droge zomer, milde natte winter.\n\n**D - Continentaal** (winter <0°C):\n• Df - vochtig (Rusland, Canada).\n• Dw - droog winter (Siberië).\n\n**E - Pool**:\n• ET - toendra (>0°C zomers).\n• EF - ijskap (Antarctica, Groenland — nooit boven 0°C).\n\n**Wat bepaalt klimaat?**\n• **Breedtegraad**: hoek zon, daglengte.\n• **Nabijheid water**: zee mildert (vertraagt opwarming + afkoeling).\n• **Hoogte**: per 1 km koeler ~6°C.\n• **Wind-systeem**: passaten + westenwinden brengen lucht-massa's.\n• **Oceaan-stromingen**: warm/koud water beïnvloedt aangrenzende kust.\n• **Bergen**: regen-schaduw (Andes droogt Atacama).\n\n**Oceaan-stromingen**:\n\n**Warm**:\n• **Golfstroom**: pak warm water uit Caraïben → Noord-Atlantische Oceaan → milderen NW-Europa. Zonder Golfstroom zou NL klimaat van Newfoundland hebben (ijskoud).\n• Kuroshio: West-Pacific.\n\n**Koud**:\n• **Humboldt**: koud Antarctica-water langs Chili → koud + droog kust + Atacama-woestijn.\n• Californië-stroom: koud → mistig San Francisco.\n• Benguela: voor Namibië → Namib-woestijn.\n\n**Thermohaliene circulatie**:\n• Wereldwijde 'lopende band' van oceaan-stromen.\n• Warm water aan oppervlakte naar polen.\n• In Noord-Atlantische: koelt, wordt zout (verdamping), zinkt.\n• Diep stroom terug naar tropen.\n• Cyclus ~1000 jaar.\n• Klimaatverandering: smelt-water polen verstoort → mogelijk Golfstroom verzwakt → paradoxaal koude NW-Europa terwijl rest aarde opwarmt.\n\n**Microklimaat**:\n• Stad: 'urban heat island' — 1-3°C warmer dan platteland door beton + auto's + minder groen.\n• Berghelling: zonkant warmer dan schaduwkant.\n• Naast meer: gematigde fluctuaties.",
    checks: [
      {
        q: "Welke klimaat-classificatie heeft **Nederland** (Köppen)?",
        options: ["Cfb (zee-klimaat)", "Cs (mediterraan)", "Df (continentaal)", "ET (toendra)"],
        answer: 0,
        wrongHints: [null, "Niet — geen droge zomers.", "Niet — niet streng winter.", "Niet — wel >0 winter."],
        uitlegPad: {
          stappen: [{ titel: "Mild + nat hele jaar", tekst: "Cfb: gematigd (C), zonder droog seizoen (f), warmste maand <22°C maar koudste >−3°C (b). NL klassieker — door zee-invloed mild jaarrond." }],
          theorie: "Zonder Golfstroom: NL Df (continentaal, streng winter zoals St-Petersburg op zelfde breedte).",
          niveaus: { basis: "Cfb. A.", simpeler: "Zee-klimaat: mild + nat. A.", nogSimpeler: "Cfb = A." },
        },
      },
      {
        q: "**Atacama-woestijn** (Chili) is droog door:",
        options: [
          "Koude Humboldt-stroom voor kust + regenschaduw Andes",
          "Hoge breedte",
          "Geen wind",
          "Vulkanisme"
        ],
        answer: 0,
        wrongHints: [null, "Niet — relatief tropisch.", "Wel wind, maar droog.", "Geen relatie."],
        uitlegPad: {
          stappen: [
            { titel: "Twee mechanismen", tekst: "1. Humboldt-stroom (koud water langs Chili-kust) → koude lucht erboven → weinig verdamping → weinig regen.\n2. Andes-gebergte aan oost-kant: vochtige Atlantische lucht regent uit aan oostkant → droge lucht aan west = Atacama.\n\nResultaat: meest droge woestijn ter aarde (sommige plekken <1 mm regen/jaar)." },
          ],
          niveaus: { basis: "Humboldt + Andes-schaduw. A.", simpeler: "Koude zee + bergen. A.", nogSimpeler: "Humboldt = A." },
        },
      },
      {
        q: "**Golfstroom** beïnvloedt het klimaat van:",
        options: [
          "Noordwest-Europa (mildert winter aanzienlijk)",
          "Zuid-Amerika",
          "Australië",
          "Geen invloed op land"
        ],
        answer: 0,
        wrongHints: [null, "Niet — daar Humboldt.", "Niet — Pacific.", "Wel — significant."],
        uitlegPad: {
          stappen: [
            { titel: "Lopende band warmte", tekst: "Golfstroom transporteert ~1 PW (= 10¹⁵ W) warmte van tropen naar Noord-Atlantische. Zonder: London zou klimaat hebben van Labrador (Canada) op zelfde breedte (~50°N). Engeland + NL profiteren enorm." },
          ],
          niveaus: { basis: "NW-Europa. A.", simpeler: "Maakt NL milder. A.", nogSimpeler: "NL = A." },
        },
      },
      {
        q: "Tropisch **regenwoud** (Af-klimaat) vereist:",
        options: [
          "Hele jaar warm (>18°C) + veel regen",
          "Koud + droog",
          "Wisselende seizoenen",
          "Hoogte boven 3000 m"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — constant.", "Niet — hoogte → klimaat-verandering."],
        uitlegPad: {
          stappen: [{ titel: "Af = altijd nat + warm", tekst: "Amazone, Congo, Borneo, Sumatra: bijna evenaar + constante warmte (~25°C) + 2000+ mm regen/jaar. Hoogste biodiversiteit + grootste netto-fotosynthese ter aarde." }],
          niveaus: { basis: "Warm + nat. A.", simpeler: "Altijd warm + regen. A.", nogSimpeler: "Warm/nat = A." },
        },
      },
      {
        q: "**Thermohaliene circulatie** wordt gedreven door:",
        options: [
          "Verschillen in temperatuur + zoutgehalte (dichtheid) van water",
          "Wind alleen",
          "Coriolis-effect",
          "Magnetisme"
        ],
        answer: 0,
        wrongHints: [null, "Wind speelt rol bij oppervlakte, maar diepte = dichtheid.", "Wel deels, niet hoofdmotor.", "Geen relatie."],
        uitlegPad: {
          stappen: [
            { titel: "Thermo (T) + halien (zout)", tekst: "Warm + zoet water = licht → drijft. Koud + zout = dicht → zinkt. In NW Atlantische zinkt water naar diepe → terug naar tropen via diep-stroom → cyclus van 1000 jaar. Klimaat-bepalend voor halve wereld." },
          ],
          theorie: "IPCC: smelt-water uit Groenland kan circulatie verzwakken — gevreesde 'tipping point'.",
          niveaus: { basis: "Dichtheid (T + zout). A.", simpeler: "Zwaar water zinkt = motor. A.", nogSimpeler: "Dichtheid = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — klimaatverandering",
    explanation:
      "**Klimaatverandering** door mens (sinds ~1850):\n\n**Oorzaken**:\n• Verbranden fossiele brandstoffen → CO₂ in atmosfeer.\n• Ontbossing → minder opname CO₂.\n• Veehouderij → methaan (CH₄, 25× sterker broeikasgas).\n• Industrie → lachgas (N₂O), CFK's (al verboden).\n\n**Cijfers** (IPCC AR6, 2021):\n• CO₂: 280 ppm (preindustrieel) → 420 ppm (2024).\n• Temperatuurstijging: +1,1-1,2°C tot nu.\n• Doel Parijs 2015: <1,5°C totaal (waarschijnlijk niet meer haalbaar zonder drastische actie).\n• 2°C-pad realistisch met sterke maatregelen.\n• Business-as-usual: 3-4°C tegen 2100 (catastrofaal).\n\n**Gevolgen** (al zichtbaar):\n• Zeespiegel: +20 cm sinds 1900, tempo versnelt (4 mm/jaar nu).\n• Smelten poolijs Groenland + Antarctica.\n• Extremer weer: hittegolven, droogte, hevige neerslag.\n• Verschuiving klimaatzones noordwaarts.\n• Verlies biodiversiteit + koraalbleek.\n• Voedsel-onzekerheid in arme landen.\n• Migratie + conflicten.\n\n**Tipping points** (onomkeerbare drempels):\n• Smelt Groenland-ijskap.\n• Permafrost-ontdooi → CH₄ vrij → feedback-loop.\n• Verzwakking Golfstroom.\n• Amazone-regenwoud → savanne (door droogte + brand).\n• Koraalriffen verdwijnen.\n\n**Maatregelen**:\n• **Mitigatie** (oorzaak aanpakken):\n  - Schone energie (zon, wind, kern).\n  - Elektrificeren transport.\n  - Energie-efficiëntie gebouwen.\n  - Veehouderij verminderen.\n  - Reforestation.\n  - CCS (carbon capture).\n• **Adaptatie** (gevolgen managen):\n  - Hogere dijken.\n  - Watermanagement (droogte/wateroverlast).\n  - Klimaat-resistente gewassen.\n  - Klimaat-adaptief bouwen.\n\n**Nederlandse situatie**:\n• 26% land onder zeeniveau → kwetsbaar voor zeespiegelstijging.\n• Deltawerken beschermen tegen +1m zeespiegel, mogelijk te kort voor 2100+.\n• 'Klimaatakkoord' 2019: -49% CO₂ tegen 2030, klimaatneutraal 2050.\n• Stikstof-crisis 2019+: agrarische uitstoot verstoort natuur.\n\n**Internationale samenwerking**:\n• **Kyoto-protocol 1997**: eerste verdrag, beperkt resultaat.\n• **Parijs-akkoord 2015**: ALLE landen committeerd, doelen niet-bindend.\n• **COP-bijeenkomsten** jaarlijks (Glasgow 2021, Dubai 2023).\n• Onenigheid Noord-Zuid: arme landen 'wij vervuilen minder, jullie betalen'.\n\n**Hoop**:\n• Zonne-energie is goedkoopste energie wereldwijd (sinds 2020).\n• Wind + opslag in opkomst.\n• Elektrische auto's exponentieel groeiend.\n• Bewustzijn jongere generaties.\n• Maar: tempo te traag voor 1,5°C-doel.",
    checks: [
      {
        q: "**Belangrijkste broeikasgas** door menselijke activiteit:",
        options: ["CO₂ (uit fossiele brandstoffen)", "Waterdamp", "Ozon", "Stikstof"],
        answer: 0,
        wrongHints: [null, "Waterdamp natuurlijk; CO₂ menselijk.", "Niet — ozon-laag herstelt.", "Niet — N₂ inert."],
        uitlegPad: {
          stappen: [{ titel: "CO₂ + lange levensduur", tekst: "CO₂ blijft eeuwen in atmosfeer. CH₄ veel sterker maar afgebroken in ~12 j. CO₂ is de hoofd-driver van langetermijn opwarming. Pre-industrieel 280 ppm → 2024: 420 ppm." }],
          niveaus: { basis: "CO₂. A.", simpeler: "Koolstof-dioxide uit kolen + olie. A.", nogSimpeler: "CO₂ = A." },
        },
      },
      {
        q: "Wat is **mitigatie** vs **adaptatie**?",
        options: [
          "Mitigatie = oorzaak aanpakken; adaptatie = met gevolgen omgaan",
          "Beide hetzelfde",
          "Mitigatie = klein, adaptatie = groot",
          "Tegenovergesteld"
        ],
        answer: 0,
        wrongHints: [null, "Niet — verschillende strategieën.", "Niet — schaal onafhankelijk.", "Tegenovergesteld is fout."],
        uitlegPad: {
          stappen: [
            { titel: "Twee aanpakken", tekst: "**Mitigatie**: CO₂-uitstoot verminderen → klimaat-verandering beperken (zon/wind, EV, etc.).\n**Adaptatie**: zelfs met mitigatie blijft opwarming → samenleving aanpassen (hogere dijken, droogte-resistente gewassen, koeler bouwen).\nBeide nodig — niet of/of." },
          ],
          niveaus: { basis: "Oorzaak vs gevolg. A.", simpeler: "Voorkomen vs erop reageren. A.", nogSimpeler: "Anders = A." },
        },
      },
      {
        q: "Parijs-akkoord (2015) richt zich op opwarming **onder**:",
        options: ["1,5-2 °C totaal", "5 °C", "10 °C", "Geen doel"],
        answer: 0,
        wrongHints: [null, "Veel te hoog.", "Catastrofaal.", "Wel doel."],
        uitlegPad: {
          stappen: [
            { titel: "Klimaatwetenschappelijk doel", tekst: "<1,5°C = 'veilig', <2°C = 'beheersbaar'. Boven 2°C: tipping points cascade-risico. Huidige plannen: ~2,5°C tegen 2100 zonder versterkte actie. 1,5°C waarschijnlijk al onbereikbaar zonder revolutionaire CCS." },
          ],
          niveaus: { basis: "1,5-2°C. A.", simpeler: "Onder 2 graden. A.", nogSimpeler: "2°C = A." },
        },
      },
      {
        q: "**Tipping point** in klimaat betekent:",
        options: [
          "Onomkeerbare drempel waarna verandering zichzelf versterkt",
          "Belasting op CO₂",
          "Politiek besluit",
          "Tijdelijke fluctuatie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — fysisch concept.", "Niet — natuurlijk verschijnsel.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Feedback-loops", tekst: "Permafrost-voorbeeld: opwarming → permafrost ontdooit → CH₄ vrij → meer opwarming → meer ontdooiing → cyclus. Eenmaal voorbij drempel niet meer te stoppen. IPCC identificeert ~10 grote tipping points (Golfstroom, Amazone, Antarctische ijskap, etc.)." },
          ],
          theorie: "Sommige tipping points zouden actief kunnen zijn rond 1,5-2°C — daarom is 1,5°C-doel zo belangrijk.",
          niveaus: { basis: "Onomkeerbare drempel. A.", simpeler: "Punt van geen terug. A.", nogSimpeler: "Drempel = A." },
        },
      },
      {
        q: "Nederland is **bijzonder kwetsbaar** voor klimaatverandering omdat:",
        options: [
          "26% land onder zeeniveau + dichtbevolkte kust",
          "Te koud klimaat",
          "Geen overheidsbeleid",
          "Geen wetenschap"
        ],
        answer: 0,
        wrongHints: [null, "Onjuist klimaat.", "Wel beleid (klimaatakkoord 2019).", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Geografie + bevolking", tekst: "NL ligt grotendeels in delta + onder zeeniveau (Randstad, Flevoland). Met zeespiegelstijging + extreme stormvloeden vereist veel investering in dijken + 'Plan Deltacommissaris' (2008+). Plus dichte stedelijke bevolking → hittegolf-stress." },
          ],
          theorie: "Andere kwetsbaarheden: hittegolven (stedelijke heat island), wateroverlast door hevige regen, droogte op zandgronden.",
          niveaus: { basis: "Onder zeeniveau + delta. A.", simpeler: "Onder zee + kustland. A.", nogSimpeler: "Onder zee = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const atmosfeerKlimaatHavoVwo = {
  id: "atmosfeer-klimaat-havo-vwo",
  title: "Atmosfeer + Klimaatsystemen (HAVO/VWO Aardrijkskunde)",
  emoji: "☁️",
  level: "havo-vwo-4-5",
  subject: "aardrijkskunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Aardrijkskunde — Atmosfeer + Klimaatsystemen (CSE-onderwerp)",
  prerequisites: [
    { id: "klimaten-aardrijkskunde", title: "Klimaten basis", niveau: "vmbo-3" },
    { id: "klimaatverandering-aardrijkskunde", title: "Klimaatverandering", niveau: "vmbo-3" },
  ],
  intro:
    "Atmosfeer + Klimaatsystemen voor HAVO/VWO eindexamen — atmosfeer-lagen, broeikaseffect + ozonlaag, luchtdruk + wind + Coriolis, fronten + depressies (Bjerknes), Köppen-zones + oceaanstromingen, klimaatverandering + tipping points. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "atmosfeer", "lucht-lagen",
    "troposfeer", "stratosfeer", "mesosfeer", "thermosfeer",
    "ozonlaag", "Montréal Protocol",
    "broeikaseffect", "CO₂", "methaan",
    "luchtdruk", "hPa", "millibar",
    "anticycloon", "hoge druk",
    "depressie", "lage druk",
    "wind", "isobaren",
    "Coriolis-effect",
    "passaten", "westenwinden",
    "föhn", "zeewind", "landwind",
    "Beaufort", "orkaan",
    "warmtefront", "koudefront", "occlusiefront",
    "Bjerknes",
    "cumulonimbus", "onweer",
    "weersvoorspelling", "Lorenz", "chaos",
    "Köppen", "klimaatclassificatie",
    "tropisch", "regenwoud",
    "gematigd", "zee-klimaat", "Cfb",
    "mediterraan", "Cs",
    "continentaal", "Df",
    "woestijn", "Atacama",
    "Golfstroom", "Humboldt",
    "thermohaliene circulatie",
    "klimaatverandering",
    "Parijs-akkoord", "1,5 graden",
    "IPCC",
    "tipping point",
    "mitigatie", "adaptatie",
    "zeespiegelstijging",
    "Deltawerken",
  ],
  chapters,
  steps,
};

export default atmosfeerKlimaatHavoVwo;

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
      "**Atmosfeer** = lucht-schil rond aarde, ~100 km dik (Kármán-lijn).\n\n**Samenstelling**:\n• 78% **N₂** (stikstof) — inert.\n• 21% **O₂** (zuurstof) — leven afhankelijk.\n• 0,9% **Ar** (argon).\n• 0,04% **CO₂** (koolstof-dioxide, stijgend).\n• Variabel: waterdamp (0-4%), ozon (zeer weinig), methaan, etc.\n\n**Lagen** (van laag naar hoog):\n\n**1. Troposfeer** (0-12 km):\n• Bevat 80% van atmosfeer-massa.\n• Waar ALLE weer plaatsvindt (wolken, regen, wind).\n• Temperatuur daalt met hoogte (−6,5 °C per km).\n• Top: tropopauze.\n\n**2. Stratosfeer** (12-50 km):\n• Stabiel — geen wolken/weer.\n• **Ozonlaag** rond 20-30 km — beschermt tegen UV-straling.\n• Temperatuur stijgt met hoogte (UV-absorptie door O₃).\n• Vliegtuigen vliegen onderaan stratosfeer (~10-12 km) — stabiel, weinig turbulentie.\n\n**3. Mesosfeer** (50-85 km):\n• Koudste laag (-90 °C op top).\n• Meteoren verbranden hier.\n\n**4. Thermosfeer** (85-500+ km):\n• Heel ijl maar zeer heet (>1000 °C door absorptie van UV- en röntgenstraling van de zon).\n• Internationaal ruimtestation (ISS) op ~400 km.\n• Aurora (poollicht) hier door zonnewind-interactie.\n\n**Broeikaseffect** (klassiek):\n• Zonlicht (kort-golf) komt door atmosfeer naar aarde.\n• Aarde straalt warmte uit als infrarood (lang-golf).\n• Broeikasgassen (CO₂, methaan, waterdamp) absorberen IR → vasthouden warmte.\n• Zonder natuurlijk effect: aarde ~ −18 °C. Met: ~15 °C. **Cruciaal voor leven**.\n• Versterkt broeikaseffect (extra CO₂ door mens) → klimaatverandering.\n\n**Ozonlaag-probleem** (jaren 80):\n• CFK's (uit spuitbussen, koelkast) tasten ozon aan.\n• 'Ozongat' boven Antarctica (vooral lente).\n• Meer UV → meer huidkanker + DNA-schade.\n• **Montréal Protocol 1987**: CFK's verboden → succesvol internationaal verdrag, ozonlaag herstelt.\n• Verschillend van klimaatverandering (CO₂) — wordt vaak verward.",
    checks: [
      {
        q: "Waarin vindt alle **weer** plaats?",
        options: ["Troposfeer", "Stratosfeer", "Mesosfeer", "Thermosfeer"],
        answer: 0,
        wrongHints: [null, "In de stratosfeer zit bijna geen waterdamp en wordt het hoger juist warmer. Kunnen daar regenwolken ontstaan?", "De mesosfeer begint pas rond 50 km hoogte. Zie je daar ooit regen of sneeuw vandaan komen?", "In de thermosfeer is de lucht extreem dun. Is daar genoeg lucht en waterdamp voor weer?"],
        uitlegPad: {
          stappen: [{ titel: "Onderste laag", tekst: "Troposfeer (0-12 km): bevat waterdamp + verticale luchtbeweging → wolken + neerslag + wind. Boven tropopauze: stabiel, geen weer." }],
          niveaus: { basis: "Troposfeer.", simpeler: "Onderste laag = weer.", nogSimpeler: "Troposfeer" },
        },
      },
      {
        q: "Wat doet de **ozonlaag** (in stratosfeer)?",
        options: [
          "Houdt schadelijke UV-straling tegen",
          "Filtert stof en roet uit de lucht",
          "Weerkaatst zonlicht terug de ruimte in",
          "Laat meteorieten verbranden"
        ],
        answer: 0,
        wrongHints: [null, "Stof en roet spoelen vooral met regen uit de lucht, lager in de troposfeer. Wat doet ozon (O₃) met het zonlicht?", "Zonlicht terugkaatsen doen vooral wolken, ijs en sneeuw. Wat doet ozon (O₃) dan met zonlicht?", "Meteorieten verbranden hoger, in de mesosfeer. Wat doet de ozonlaag in de stratosfeer?"],
        uitlegPad: {
          stappen: [
            { titel: "O₃ absorbeert UV", tekst: "Ozon (O₃) absorbeert UV-fotonen → splitsen + samenstellen continu → UV blijft in atmosfeer + minder dringt door naar aarde. Cruciaal voor DNA-bescherming alle leven." },
          ],
          theorie: "Zonder ozonlaag: huidkanker-rates omhoog + foto-synthese problemen.",
          niveaus: { basis: "Beschermt tegen UV.", simpeler: "Stopt schadelijke straling.", nogSimpeler: "UV-filter" },
        },
      },
      {
        q: "**Broeikaseffect** wordt veroorzaakt door:",
        options: [
          "Gassen die uitgestraalde warmte vasthouden",
          "Een gat in de ozonlaag dat meer zon doorlaat",
          "Zonlicht dat de grond direct opwarmt",
          "Vulkanen die warme gassen uitstoten"
        ],
        answer: 0,
        wrongHints: [null, "Het ozongat laat meer UV door, en dat geeft zonnebrand. Maar waardoor blijft de warmte van de aarde hangen?", "Inkomend zonlicht warmt de grond op, maar het broeikaseffect gaat over wat daarna gebeurt. Wat doet de aarde met die warmte?", "Vulkanen stoten wel gassen uit, maar het broeikaseffect werkt altijd. Wat houdt de warmte als een deken vast?"],
        uitlegPad: {
          stappen: [
            { titel: "Glas-effect in kas", tekst: "Naam komt van tuinkas: licht komt in, warmte uit moeilijk. Atmosfeer doet zelfde: zon (kort-golf) door, aarde-warmte (lang-golf IR) deels vastgehouden door CO₂/CH₄/H₂O. Natuurlijk effect = +33°C; versterkt = klimaatverandering." },
          ],
          niveaus: { basis: "IR vasthouden.", simpeler: "Atmosfeer als glas.", nogSimpeler: "IR-trap" },
        },
      },
      {
        q: "Hoeveel **% CO₂** zit in atmosfeer (2024)?",
        options: ["~0,04%", "~21%", "~78%", "~1%"],
        answer: 0,
        wrongHints: [null, "21% is het aandeel van het gas dat je inademt om te leven. Welk gas is dat?", "Het grootste deel van de lucht is stikstof. Kan CO₂ dan 78% zijn?", "Rond 1% zit argon, een edelgas. Is er meer of minder CO₂ dan argon?"],
        uitlegPad: {
          stappen: [{ titel: "Spoor-gas met groot effect", tekst: "CO₂ is slechts ~420 ppm = 0,042% van atmosfeer. Toch enorme klimaat-impact want het absorbeert IR effectief. Pre-industrieel: 280 ppm. Stijgend ~2,5 ppm/jaar." }],
          niveaus: { basis: "0,042% (420 ppm).", simpeler: "Heel klein deel: 0,04%.", nogSimpeler: "420 ppm" },
        },
      },
      {
        q: "**Montréal Protocol 1987** regelt:",
        options: [
          "CFK-verbod tegen ozonlaag-aantasting",
          "CO₂-reductie tegen de opwarming",
          "Plastic-verbod tegen zeevervuiling",
          "Walvisjacht-verbod tegen uitsterven"
        ],
        answer: 0,
        wrongHints: [null, "CO₂-afspraken staan in Kyoto (1997) en Parijs (2015). Waar ging het in 1987 om?", "Wereldwijde plasticafspraken kwamen pas veel later. Welk milieuprobleem speelde in de jaren 80 hoog in de lucht?", "De walvisjacht valt onder een ander verdrag. Welk probleem in de atmosfeer was in de jaren 80 groot nieuws?"],
        uitlegPad: {
          stappen: [
            { titel: "Internationaal succesverhaal", tekst: "Wetenschappers ontdekten 1985 ozongat → 1987 wereld-akkoord CFK's uitfaseren → ozonlaag herstelt langzaam → volledig herstel verwacht ~2070. Bewijs dat internationale samenwerking milieu-problemen kan oplossen." },
          ],
          theorie: "Klimaatverandering blijkt veel moeilijker — meer gevarieerde belangen + meer industrie betrokken.",
          niveaus: { basis: "CFK-verbod.", simpeler: "Verbood spuitbus-gas voor ozon.", nogSimpeler: "CFK" },
        },
      },
    ],
  },

  // ─── B. Luchtdruk + wind + Coriolis ───────────────────────
  {
    title: "Luchtdruk + wind + Coriolis-effect",
    explanation:
      "**Luchtdruk** = gewicht van luchtkolom boven punt.\n• Zee-niveau: ~**1013 hPa** (= 1 atm = 760 mmHg).\n• Op hoogte: minder lucht boven → lagere druk. Verdubbelt ongeveer per 5,5 km daling.\n• Berghoogte heeft ~30% minder druk → moeilijker ademen.\n\n**Hoge druk (anticycloon)**:\n• Lucht zakt → opwarming + uitdrogen → weinig wolken.\n• 'Mooi weer': zonnig, droog, weinig wind.\n• In NL: H boven Engeland = mooi weer NL.\n\n**Lage druk (depressie)**:\n• Lucht stijgt → afkoeling → condensatie → wolken + neerslag.\n• 'Slecht weer': bewolkt, regenachtig, winderig.\n• In NL: L boven IJsland trekt vaak over NL.\n\n**Wind**: lucht stroomt van hoge naar lage druk → drukverschillen veroorzaken wind.\n\n**Coriolis-effect** (door aarde-rotatie):\n• Aarde draait → bewegende lucht/water 'lijkt' naar rechts (NH) of links (ZH) af te buigen.\n• Effect groter bij hoge breedte, nul op evenaar.\n• Maakt wind NIET recht van H naar L, maar **omtrek wervelend**:\n  - **NH**: wind om L tegen de klok in, om H met de klok mee.\n  - **ZH**: omgekeerd.\n\n**Wind-systemen wereldwijd**:\n• **Passaten** (0-30° breedte): NO/ZO-winden, constant, droog.\n• **Westenwinden** (30-60°): dominant op gematigde zones.\n• **Polaire oostenwinden**: rond N/Z-pool, koud + droog.\n\n**Lokaal wind-systeem**:\n• **Zeewind/landwind**: dag (land warm → lucht stijgt op → zeewind naar binnen); nacht (omgekeerd).\n• **Föhn**: warme droge wind aan lij-zijde van berg.\n• **Mistral** (Zuid-Frankrijk): koude noordwind door Rhône-vallei.\n• **Sirocco**: hete Sahara-wind naar Middellandse Zee.\n\n**Schaal van Beaufort** (wind-snelheid):\n• 0: windstil. 4-5: matig tot vrij krachtig (6-11 m/s). 8: stormachtig. 10-12: zware tot orkaan-kracht.\n• Orkaan ≥ 32 m/s = ≥ 117 km/h.\n\n**Coriolis-effect-fabel**: 'water stroomt anders door gootsteen-afvoer op NH/ZH'. Onjuist — gootsteen-schaal te klein, Coriolis verwaarloosbaar. Wel echt: orkanen draaien anders per halfrond.",
    checks: [
      {
        q: "**Luchtdruk op zee-niveau** is standaard:",
        options: ["~1013 hPa", "~500 hPa", "~2000 hPa", "~760 hPa"],
        answer: 0,
        wrongHints: [null, "500 hPa meet je pas op zo'n 5,5 km hoogte. Hoe zit het op zeeniveau?", "Zelfs een sterk hogedrukgebied komt zelden boven de 1050 hPa. Kan het gemiddelde dan 2000 zijn?", "760 is de luchtdruk in millimeter kwik, niet in hectopascal. Hoeveel hPa hoort daarbij?"],
        uitlegPad: {
          stappen: [{ titel: "1 atm = 1013 hPa = 1013 mbar", tekst: "Standaard atmosfeer-druk op zee-niveau, 15°C. Op weerkaart 'hoog' = >1015 hPa, 'laag' = <1010 hPa. Verandert door temperatuur + weersysteem." }],
          niveaus: { basis: "1013 hPa.", simpeler: "Standaard ~1000 hPa.", nogSimpeler: "1013" },
        },
      },
      {
        q: "Een **anticycloon (hoge druk)** in NL betekent meestal:",
        options: [
          "Droog en vaak zonnig weer",
          "Wisselvallig weer met buien",
          "Warm en zwoel met onweersbuien",
          "Harde westenwind met regen"
        ],
        answer: 0,
        wrongHints: [null, "Wisselvallig weer hoort bij de fronten van een lagedrukgebied. Wat doet lucht die bij hoge druk daalt?", "Onweer ontstaat als warme lucht snel opstijgt. Stijgt of daalt de lucht in een hogedrukgebied?", "Harde wind hoort bij grote drukverschillen, zoals bij een depressie. Hoe groot zijn die rond een hogedrukgebied?"],
        uitlegPad: {
          stappen: [
            { titel: "Dalende lucht = drogend", tekst: "In anticycloon zakt lucht → warmt op + verliest relatieve vochtigheid → minder wolken. Daarom: zonnig + droog. Vooral in zomer 'hittegolf' onder H-gebied; in winter 'mistig + ijskoud'." },
          ],
          niveaus: { basis: "Mooi weer.", simpeler: "Hogedruk = zon.", nogSimpeler: "Mooi" },
        },
      },
      {
        q: "**Coriolis-effect** op het Noordelijk Halfrond buigt bewegende lucht:",
        options: [
          "Naar rechts af",
          "Naar links af",
          "Niet, rechtdoor",
          "Per seizoen anders"
        ],
        answer: 0,
        wrongHints: [null, "Op het zuidelijk halfrond buigt lucht naar links af. Hoe zit het op het noordelijk halfrond?", "Zonder afbuiging zou wind recht van hoge naar lage druk waaien. Waarom draait de wind op een weerkaart dan rond een depressie?", "Het corioliseffect komt door de draaiing van de aarde, en die verandert niet per seizoen. Wat betekent dat voor de richting?"],
        uitlegPad: {
          stappen: [
            { titel: "Aarde-rotatie schijneffect", tekst: "Aarde draait van west naar oost. Voor waarnemer op draaiende aarde lijkt lucht naar rechts (NH) of links (ZH) af te buigen. Effect 0 op evenaar, maximaal op polen. Verklaart waarom orkanen op NH tegen de klok in draaien." },
          ],
          niveaus: { basis: "Rechts NH.", simpeler: "NH: rechts. ZH: links.", nogSimpeler: "Rechts" },
        },
      },
      {
        q: "Op NH draait een **depressie** (L) in welke richting?",
        options: [
          "Tegen de klok in",
          "Met de klok mee",
          "Recht naar het midden",
          "Hangt af van seizoen"
        ],
        answer: 0,
        wrongHints: [null, "Met de klok mee draait de lucht rond een hogedrukgebied. Hoe draait ze rond lage druk?", "Lucht stroomt wel naar het midden, maar het corioliseffect buigt haar af naar rechts. Wat voor draaiing geeft dat?", "Het corioliseffect komt door de draaiing van de aarde, en die verandert niet per seizoen. Wat betekent dat voor de draairichting?"],
        uitlegPad: {
          stappen: [
            { titel: "Coriolis + drukgradiënt", tekst: "Lucht stroomt naar L-centrum. Coriolis-buiging naar rechts op NH → spiraal tegen de klok in. Op ZH: met de klok mee. Orkanen volgen zelfde patroon (grote depressies)." },
          ],
          niveaus: { basis: "Tegen klok in (NH).", simpeler: "Linksom op NH.", nogSimpeler: "Tegen klok" },
        },
      },
      {
        q: "**Föhn-wind** is:",
        options: [
          "Warme, droge valwind aan de lijzijde",
          "Koude, droge valwind van een ijsvlakte",
          "Warme, vochtige stijgwind aan de loefzijde",
          "Warme, vochtige zeewind uit de tropen"
        ],
        answer: 0,
        wrongHints: [null, "Koude valwinden van een ijskap heten katabatische winden. Föhn ontstaat juist doordat lucht eerst over een berg is gegaan. Wat verloor die lucht onderweg?", "Aan de loefzijde stijgt de lucht en regent hij uit. Waar waait de föhn: vóór of achter de berg?", "Een tropische zeewind komt van zee, niet van een berg. Waar ontstaat föhn?"],
        uitlegPad: {
          stappen: [
            { titel: "Adiabatische opwarming", tekst: "Vochtige lucht stijgt aan windkant berg → koelt → condenseert → regen → lucht nu DROOG. Aan andere kant zakt droge lucht → adiabatische opwarming (1°C per 100m). Bovenop berg 0°C → in dal 25°C. Vooral Alpen + Schotse Hooglanden." },
          ],
          theorie: "Soms heel snel: föhn kan in uren temperatuur 10-15°C laten stijgen → fenomeen 'föhn-koorts' (gezondheid-impact).",
          niveaus: { basis: "Warm + droog aan lij.", simpeler: "Berg-effect: warm aan andere kant.", nogSimpeler: "Föhn" },
        },
      },
    ],
  },

  // ─── C. Fronten + depressies ──────────────────────────────
  {
    title: "Fronten + depressies — Bjerknes-model",
    explanation:
      "**Front** = grens tussen twee luchtmassa's met verschillende temperatuur/vochtigheid.\n\n**Vier types**:\n\n**1. Warmtefront** (warme lucht verdringt koude):\n• Schuift langzaam over koude lucht.\n• Helling 1:200 — lange voorbode.\n• Bewolking 1-2 dagen vooraf: cirrus → cirrostratus → altostratus → nimbostratus.\n• Lange, zachte regenval (motregen).\n• Op kaart: rode lijn met halfronde bobbels in richting beweging.\n\n**2. Koudefront** (koude lucht verdringt warme):\n• Beweegt snel.\n• Helling 1:50 — steil → krachtige opwaartse beweging.\n• Cumulonimbus = onweer + hagel mogelijk.\n• Korte, intense buien.\n• Op kaart: blauwe lijn met driehoeken in richting beweging.\n• Na passage: koude + heldere lucht.\n\n**3. Occlusiefront** (samengevoegd):\n• Koudefront haalt warmtefront in (sneller).\n• Warme lucht omhoog geduwd → uitgebreide bewolking + neerslag.\n• Op kaart: paarse lijn met afwisselend bobbels + driehoeken.\n\n**4. Stationair front**: geen beweging.\n\n**Depressie-ontwikkeling (cyclogenese)**:\n1. Frontale grens tussen polair (koud) + tropisch (warm).\n2. Verstoring → golf op grens.\n3. Lage druk vormt op golf.\n4. Warmtefront vooruit, koudefront achteraan.\n5. Koudefront haalt warmtefront in → occlusie.\n6. Depressie sterft uit (geen energiebron meer).\n\nKlassiek **Bjerknes-Bergen-model** (Noors, jaren 1920) — basis weerkunde.\n\n**Op weerkaart**:\n• Isobaren: lijnen van gelijke luchtdruk.\n• Dichte isobaren → groot drukverschil → harde wind.\n• Rond H + L gebogen.\n\n**Voorspelling**:\n• Modellen (HARMONIE, ECMWF) simuleren atmosfeer in 3D-grid.\n• 1-3 dagen voorspelling: betrouwbaar.\n• 7-14 dagen: indicatie + onzekerheid.\n• > 14 dagen: weinig nut (chaos-grens, Lorenz 1963).\n\n**Extreem weer**:\n• Orkaan: tropische cycloon ≥ 117 km/h. Energiebron warmte uit warme oceaan.\n• Tornado: lokale wervel op kleine schaal, vooral USA (warme + koude lucht botsen op vlak terrein).\n• Hagel: onweerswolk waar druppels opgaan/dalen + bevriezen meermaals.\n• Sneeuwstorm: harde wind + hevige sneeuwval, beperkt zicht.",
    checks: [
      {
        q: "Een **koudefront** brengt vaak:",
        options: [
          "Korte, hevige buien en soms onweer",
          "Langdurige motregen uit grijze lucht",
          "Dichte mist die urenlang blijft hangen",
          "Helder zonnig weer zonder wolken"
        ],
        answer: 0,
        wrongHints: [null, "Motregen hoort bij het front waar warme lucht langzaam omhoog glijdt. Is dat dit front?", "Mist ontstaat bij rustig, koel weer. Is een koudefront rustig?", "Opklaringen komen pas als het front voorbij is. Wat gebeurt er als het front zelf overtrekt?"],
        uitlegPad: {
          stappen: [{ titel: "Steile lift = hevig", tekst: "Koude lucht dringt onder warme door → warme lucht snel omhoog → snel condensatie → cumulonimbus (verticale onweerswolken). Resultaat: korte hevige buien, soms hagel + onweer. Na passage: temperatuur daalt + heldere lucht." }],
          niveaus: { basis: "Buien + onweer.", simpeler: "Korte hevige bui.", nogSimpeler: "Onweer" },
        },
      },
      {
        q: "**Isobaren** op weerkaart zijn:",
        options: [
          "Lijnen van gelijke luchtdruk",
          "Lijnen van gelijke temperatuur",
          "Lijnen van gelijke neerslag",
          "Lijnen van gelijke hoogte"
        ],
        answer: 0,
        wrongHints: [null, "Lijnen van gelijke temperatuur heten isothermen (thermo = warmte). Bij welke grootheid hoort het woorddeel 'baar'?", "Lijnen van gelijke neerslag heten isohyeten. Welke grootheid zie je in hectopascal (hPa) bij de lijnen op een weerkaart?", "Lijnen van gelijke hoogte heten hoogtelijnen (isohypsen) en staan op een topografische kaart. Wat staat er op een weerkaart?"],
        uitlegPad: {
          stappen: [{ titel: "Iso = gelijk, baar = druk", tekst: "Hoe dichter op elkaar isobaren → grotere drukgradiënt → hardere wind. Patronen rond H + L op weerkaart vertellen waar het waait + hoe hard." }],
          niveaus: { basis: "Gelijke druk.", simpeler: "Iso-druk-lijnen.", nogSimpeler: "Druk" },
        },
      },
      {
        q: "Een **occlusiefront** ontstaat wanneer:",
        options: [
          "Het koudefront het warmtefront inhaalt",
          "Twee koudefronten samensmelten",
          "Een stationair front gaat bewegen",
          "Een depressie helemaal oplost"
        ],
        answer: 0,
        wrongHints: [null, "Bij occlusie gaat het om twee verschillende soorten fronten. Welke?", "Een stationair front dat gaat bewegen wordt gewoon een warm- of koudefront. Wat gebeurt er bij occlusie?", "Een depressie verdwijnt vaak ná de occlusie. Is dat oorzaak of gevolg?"],
        uitlegPad: {
          stappen: [
            { titel: "Eind-stadium depressie", tekst: "Koudefront beweegt sneller dan warmtefront → haalt het in → warme lucht-pakket tussen wordt OMHOOG gedrukt + verdwijnt aan oppervlakte. Resultaat: één front met gemengde eigenschappen. Daarna sterft depressie uit." },
          ],
          niveaus: { basis: "Koud haalt warm in.", simpeler: "Beide fronten botsen.", nogSimpeler: "Occlusie" },
        },
      },
      {
        q: "Maximale **betrouwbare** weersvoorspelling-horizon:",
        options: [
          "~3-7 dagen",
          "~1-2 dagen",
          "~10-14 dagen",
          "~3-4 weken"
        ],
        answer: 0,
        wrongHints: [null, "Een verwachting voor overmorgen klopt meestal nog goed. Hoe ver vooruit lukt dat ongeveer?", "Kijk eens naar een 14-daagse 'pluim': hoe ver lopen de lijnen aan het eind uiteen? Is dat nog betrouwbaar?", "Kleine meetfouten groeien elke dag verder door (het vlindereffect). Blijft een voorspelling dan weken betrouwbaar?"],
        uitlegPad: {
          stappen: [
            { titel: "Chaos-grens (Lorenz)", tekst: "Edward Lorenz 1963 ontdekte: atmosfeer is chaotisch systeem. Kleinste verstoring (vlinder-effect) groeit exponentieel. Praktisch: 1-3 dagen vrij betrouwbaar, 7 dagen indicatie, na 14 dagen vrijwel willekeurig. Daarom: weer-modellen draaien tientallen variaties (ensemble) + tonen waarschijnlijkheidsbereik." },
          ],
          niveaus: { basis: "3-7 dagen.", simpeler: "Week-vooruit nog ok.", nogSimpeler: "~5 dgn" },
        },
      },
      {
        q: "**Orkaan** vereist als energiebron:",
        options: [
          "Warm, verdampend zeewater",
          "Botsende warme en koude lucht",
          "Een sterke straalstroom",
          "Hete lucht boven woestijnen"
        ],
        answer: 0,
        wrongHints: [null, "Botsende luchtmassa's horen bij de fronten van onze depressies. Een orkaan heeft geen fronten. Waar haalt hij dan energie vandaan?", "De straalstroom stuurt depressies, maar sterke wind hoog in de lucht blaast een orkaan juist uit elkaar. Wat voedt hem wel?", "Boven een woestijn verdampt bijna geen water. Welke warmte komt vrij als waterdamp condenseert?"],
        uitlegPad: {
          stappen: [
            { titel: "Latente warmte uit verdamping", tekst: "Warme oceaan: water verdampt → waterdamp omhoog → condenseert → geeft latente warmte vrij → drijft opwaartse luchtstroom → cyclonale spiraal. Daarom orkanen vooral tropisch eind zomer (warmste water). Verdwijnt boven land of koud water (geen energiebron meer)." },
          ],
          theorie: "Klimaatverandering verwarmt oceanen → potentieel sterkere orkanen + langere seizoenen.",
          niveaus: { basis: "Warm water >26°C.", simpeler: "Warme zee = brandstof.", nogSimpeler: "Warm zee" },
        },
      },
    ],
  },

  // ─── D. Klimaatzones + oceaanstromingen ───────────────────
  {
    title: "Klimaatzones + oceaanstromingen",
    explanation:
      "**Köppen-Geiger-klimaatclassificatie** (basis CSE):\n\n**A - Tropisch** (alle maanden >18°C):\n• Af - regenwoud (Amazone, Congo, Indonesië).\n• Am - moeson (India, Z-Oost-Azië).\n• Aw - savanne (droog seizoen).\n\n**B - Droog**:\n• BW - woestijn (Sahara, Atacama, Australië-centrum).\n• BS - steppe (semi-droog, randen woestijn).\n\n**C - Gematigd** (winter koudste maand 0-18°C):\n• Cfb - zee-klimaat (NL!): mild + nat hele jaar.\n• Cfa - subtropisch (Florida, Z-China).\n• Cs - mediterraan (Z-Europa, Californië): warme droge zomer, milde natte winter.\n\n**D - Continentaal** (winter <0°C):\n• Df - vochtig (Rusland, Canada).\n• Dw - droge winter (Siberië).\n\n**E - Pool**:\n• ET - toendra (>0°C zomers).\n• EF - ijskap (Antarctica, Groenland — nooit boven 0°C).\n\n**Wat bepaalt klimaat?**\n• **Breedtegraad**: hoek zon, daglengte.\n• **Nabijheid water**: zee mildert (vertraagt opwarming + afkoeling).\n• **Hoogte**: per 1 km koeler ~6°C.\n• **Wind-systeem**: passaten + westenwinden brengen lucht-massa's.\n• **Oceaan-stromingen**: warm/koud water beïnvloedt aangrenzende kust.\n• **Bergen**: regen-schaduw (Andes droogt Atacama).\n\n**Oceaan-stromingen**:\n\n**Warm**:\n• **Golfstroom**: pak warm water uit Caraïben → Noord-Atlantische Oceaan → maakt NW-Europa milder. Zonder Golfstroom zou NL klimaat van Newfoundland hebben (ijskoud).\n• Kuroshio: West-Pacific.\n\n**Koud**:\n• **Humboldt**: koud Antarctica-water langs Chili → koude + droge kust + Atacama-woestijn.\n• Californië-stroom: koud → mistig San Francisco.\n• Benguela: voor Namibië → Namib-woestijn.\n\n**Thermohaliene circulatie**:\n• Wereldwijde 'lopende band' van oceaan-stromen.\n• Warm water aan oppervlakte naar polen.\n• In Noord-Atlantische: koelt, wordt zout (verdamping), zinkt.\n• Diep stroom terug naar tropen.\n• Cyclus ~1000 jaar.\n• Klimaatverandering: smelt-water polen verstoort → mogelijk Golfstroom verzwakt → paradoxaal koude NW-Europa terwijl rest aarde opwarmt.\n\n**Microklimaat**:\n• Stad: 'urban heat island' — 1-3°C warmer dan platteland door beton + auto's + minder groen.\n• Berghelling: zonkant warmer dan schaduwkant.\n• Naast meer: gematigde fluctuaties.",
    checks: [
      {
        q: "Welke klimaat-classificatie heeft **Nederland** (Köppen)?",
        options: ["Cfb (gematigd zeeklimaat)", "Cfc (koel zeeklimaat)", "Dfb (vochtig landklimaat)", "Cfa (vochtig subtropisch)"],
        answer: 0,
        wrongHints: [null, "Bij Cfc zijn er minder dan vier maanden boven 10 °C, zoals op IJsland en de Faeröer. Hoeveel van die maanden heeft Nederland?", "D-klimaten hebben strenge winters met maandenlang vorst. Past dat bij een Nederlandse winter?", "Bij Cfa is de zomer heet: de warmste maand is gemiddeld boven 22 °C. Is dat een gewone Nederlandse zomer?"],
        uitlegPad: {
          stappen: [{ titel: "Mild + nat hele jaar", tekst: "Cfb: gematigd (C), zonder droog seizoen (f), warmste maand <22°C en minstens 4 maanden >10°C (b). NL klassieker — door zee-invloed mild jaarrond." }],
          theorie: "Zonder Golfstroom: NL Df (continentaal, strenge winter zoals St-Petersburg).",
          niveaus: { basis: "Cfb.", simpeler: "Zee-klimaat: mild + nat.", nogSimpeler: "Cfb" },
        },
      },
      {
        q: "**Atacama-woestijn** (Chili) is droog door:",
        options: [
          "Koude zeestroom en regenschaduw van de Andes",
          "Koude zeestroom en ligging bij de poolcirkel",
          "Warme zeestroom en de hoge ligging van de Andes",
          "Ligging midden op het continent, ver van zee"
        ],
        answer: 0,
        wrongHints: [null, "De Atacama ligt rond de Steenbokskeerkring, ver van de poolcirkel. Wat houdt verder nog vocht tegen?", "Warm zeewater verdampt juist veel en geeft regen. Welke zeestroom loopt er langs de kust van Chili?", "De Atacama ligt pal aan de Grote Oceaan. Wat houdt het vocht van die zee tegen?"],
        uitlegPad: {
          stappen: [
            { titel: "Twee mechanismen", tekst: "1. Humboldt-stroom (koud water langs Chili-kust) → koude lucht erboven → weinig verdamping → weinig regen.\n2. Andes-gebergte aan oost-kant: vochtige Atlantische lucht regent uit aan oostkant → droge lucht aan west = Atacama.\n\nResultaat: droogste woestijn ter aarde (sommige plekken <1 mm regen/jaar)." },
          ],
          niveaus: { basis: "Humboldt + Andes-schaduw.", simpeler: "Koude zee + bergen.", nogSimpeler: "Humboldt" },
        },
      },
      {
        q: "**Golfstroom** beïnvloedt het klimaat van:",
        options: [
          "Noordwest-Europa",
          "Zuidwest-Afrika",
          "Oost-Azië en Japan",
          "West-Zuid-Amerika"
        ],
        answer: 0,
        wrongHints: [null, "Langs Zuidwest-Afrika stroomt de koude Benguelastroom. Waar gaat het warme water uit de Golf van Mexico naartoe?", "Bij Japan stroomt de Kuroshio, in de Grote Oceaan. In welke oceaan ligt de Golfstroom?", "Langs Chili en Peru stroomt de koude Humboldtstroom. In welke oceaan ligt de Golfstroom?"],
        uitlegPad: {
          stappen: [
            { titel: "Lopende band warmte", tekst: "Golfstroom transporteert ~1 PW (= 10¹⁵ W) warmte van tropen naar Noord-Atlantische. Zonder: Londen zou klimaat hebben van Labrador (Canada) op zelfde breedte (~50°N). Engeland + NL profiteren enorm." },
          ],
          niveaus: { basis: "NW-Europa.", simpeler: "Maakt NL milder.", nogSimpeler: "NL" },
        },
      },
      {
        q: "Tropisch **regenwoud** (Af-klimaat) vereist:",
        options: [
          "Het hele jaar warm en nat",
          "Nat, maar met koele winters",
          "Een natte en een droge tijd",
          "Regen door bergen in de buurt"
        ],
        answer: 0,
        wrongHints: [null, "Nat met koele winters past bij een zeeklimaat zoals in Nederland. Waar staat de A in Af voor?", "Een droge tijd hoort bij de savanne. Hoe is het in het regenwoud?", "Bergen geven soms veel stuwingsregen, maar het Amazonegebied is vlak. Wat zegt de code Af?"],
        uitlegPad: {
          stappen: [{ titel: "Af = altijd nat + warm", tekst: "Amazone, Congo, Borneo, Sumatra: bijna evenaar + constante warmte (~25°C) + 2000+ mm regen/jaar. Hoogste biodiversiteit + grootste netto-fotosynthese ter aarde." }],
          niveaus: { basis: "Warm + nat.", simpeler: "Altijd warm + regen.", nogSimpeler: "Warm/nat" },
        },
      },
      {
        q: "**Thermohaliene circulatie** wordt gedreven door:",
        options: [
          "Verschillen in temperatuur en zoutgehalte",
          "Vooral de wind aan het zeeoppervlak",
          "Het corioliseffect van de draaiende aarde",
          "Eb en vloed door de aantrekking van de maan"
        ],
        answer: 0,
        wrongHints: [null, "Wind beweegt vooral de bovenste laag. Wat laat water in de diepte zakken?", "Coriolis buigt stromingen af, maar zet ze niet in gang. Wat maakt zeewater zwaarder?", "Getijden laten het water op en neer gaan, maar zetten geen stroming door alle oceanen in gang. Waardoor zakt water ergens naar de bodem?"],
        uitlegPad: {
          stappen: [
            { titel: "Thermo (T) + halien (zout)", tekst: "Warm + zoet water = licht → drijft. Koud + zout = dicht → zinkt. In NW Atlantische zinkt water naar diepe → terug naar tropen via diep-stroom → cyclus van 1000 jaar. Klimaat-bepalend voor halve wereld." },
          ],
          theorie: "IPCC: smelt-water uit Groenland kan circulatie verzwakken — gevreesde 'tipping point'.",
          niveaus: { basis: "Dichtheid (T + zout).", simpeler: "Zwaar water zinkt = motor.", nogSimpeler: "Dichtheid" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — klimaatverandering",
    explanation:
      "**Klimaatverandering** door mens (sinds ~1850):\n\n**Oorzaken**:\n• Verbranden fossiele brandstoffen → CO₂ in atmosfeer.\n• Ontbossing → minder opname CO₂.\n• Veehouderij → methaan (CH₄, 25× sterker broeikasgas).\n• Industrie → lachgas (N₂O), CFK's (al verboden).\n\n**Cijfers** (IPCC AR6, 2021):\n• CO₂: 280 ppm (preindustrieel) → 420 ppm (2024).\n• Temperatuurstijging: +1,1-1,2°C tot nu.\n• Doel Parijs 2015: <1,5°C totaal (waarschijnlijk niet meer haalbaar zonder drastische actie).\n• 2°C-pad realistisch met sterke maatregelen.\n• Business-as-usual: 3-4°C tegen 2100 (catastrofaal).\n\n**Gevolgen** (al zichtbaar):\n• Zeespiegel: +20 cm sinds 1900, tempo versnelt (4 mm/jaar nu).\n• Smelten poolijs Groenland + Antarctica.\n• Extremer weer: hittegolven, droogte, hevige neerslag.\n• Verschuiving klimaatzones noordwaarts.\n• Verlies biodiversiteit + koraalbleek.\n• Voedsel-onzekerheid in arme landen.\n• Migratie + conflicten.\n\n**Tipping points** (onomkeerbare drempels):\n• Smelt Groenland-ijskap.\n• Permafrost-ontdooi → CH₄ vrij → feedback-loop.\n• Verzwakking Golfstroom.\n• Amazone-regenwoud → savanne (door droogte + brand).\n• Koraalriffen verdwijnen.\n\n**Maatregelen**:\n• **Mitigatie** (oorzaak aanpakken):\n  - Schone energie (zon, wind, kern).\n  - Elektrificeren transport.\n  - Energie-efficiëntie gebouwen.\n  - Veehouderij verminderen.\n  - Herbebossing.\n  - CCS (carbon capture).\n• **Adaptatie** (gevolgen managen):\n  - Hogere dijken.\n  - Watermanagement (droogte/wateroverlast).\n  - Klimaat-resistente gewassen.\n  - Klimaat-adaptief bouwen.\n\n**Nederlandse situatie**:\n• 26% land onder zeeniveau → kwetsbaar voor zeespiegelstijging.\n• Deltawerken beschermen tegen +1m zeespiegel, mogelijk te kort voor 2100+.\n• 'Klimaatakkoord' 2019: -49% CO₂ tegen 2030, klimaatneutraal 2050.\n• Stikstof-crisis 2019+: agrarische uitstoot verstoort natuur.\n\n**Internationale samenwerking**:\n• **Kyoto-protocol 1997**: eerste verdrag, beperkt resultaat.\n• **Parijs-akkoord 2015**: ALLE landen gecommitteerd, doelen niet-bindend.\n• **COP-bijeenkomsten** jaarlijks (Glasgow 2021, Dubai 2023).\n• Onenigheid Noord-Zuid: arme landen 'wij vervuilen minder, jullie betalen'.\n\n**Hoop**:\n• Zonne-energie is goedkoopste energie wereldwijd (sinds 2020).\n• Wind + opslag in opkomst.\n• Elektrische auto's exponentieel groeiend.\n• Bewustzijn jongere generaties.\n• Maar: tempo te traag voor 1,5°C-doel.",
    checks: [
      {
        q: "**Belangrijkste broeikasgas** door menselijke activiteit:",
        options: ["CO₂", "Waterdamp", "Ozon", "Methaan"],
        answer: 0,
        wrongHints: [null, "Waterdamp is wel een broeikasgas, maar de hoeveelheid hangt af van de temperatuur, niet van wat de mens uitstoot.", "Ozon bij de grond is een broeikasgas, maar de mens stoot het niet direct uit. Welk gas komt uit elke uitlaat en schoorsteen?", "Methaan houdt per molecuul meer warmte vast, maar de mens stoot er veel minder van uit. Welk gas draagt in totaal het meest bij?"],
        uitlegPad: {
          stappen: [{ titel: "CO₂ + lange levensduur", tekst: "CO₂ blijft eeuwen in atmosfeer. CH₄ veel sterker maar afgebroken in ~12 j. CO₂ is de hoofd-driver van langetermijn opwarming. Pre-industrieel 280 ppm → 2024: 420 ppm." }],
          niveaus: { basis: "CO₂.", simpeler: "Koolstof-dioxide uit kolen + olie.", nogSimpeler: "CO₂" },
        },
      },
      {
        q: "Wat is **mitigatie** vs **adaptatie**?",
        options: [
          "Mitigatie = oorzaak aanpakken; adaptatie = met gevolgen omgaan",
          "Mitigatie = rijke landen; adaptatie = arme landen",
          "Mitigatie = lokaal aanpakken; adaptatie = wereldwijd",
          "Mitigatie = dijken bouwen; adaptatie = CO₂ verminderen"
        ],
        answer: 0,
        wrongHints: [null, "Rijke én arme landen doen allebei aan mitigatie en adaptatie. Waar zit dan het echte verschil?", "Een dijk is lokaal, maar CO₂ verminderen kan ook in je eigen stad. Gaat het verschil echt over schaal?", "Draai het eens om: welke aanpak pakt de oorzaak (de uitstoot) aan?"],
        uitlegPad: {
          stappen: [
            { titel: "Twee aanpakken", tekst: "**Mitigatie**: CO₂-uitstoot verminderen → klimaat-verandering beperken (zon/wind, EV, etc.).\n**Adaptatie**: zelfs met mitigatie blijft opwarming → samenleving aanpassen (hogere dijken, droogte-resistente gewassen, koeler bouwen).\nBeide nodig — niet of/of." },
          ],
          niveaus: { basis: "Oorzaak vs gevolg.", simpeler: "Voorkomen vs erop reageren.", nogSimpeler: "Anders" },
        },
      },
      {
        q: "Parijs-akkoord (2015) richt zich op opwarming **onder**:",
        options: ["1,5 à 2 °C", "2 à 2,5 °C", "2,5 à 3 °C", "0,5 à 1 °C"],
        answer: 0,
        wrongHints: [null, "Bij 2,5 °C verwachten wetenschappers al veel meer hittegolven en droogte. Was dat het afgesproken doel?", "Bij 3 °C smelten de ijskappen veel sneller. Mikte het akkoord zo hoog?", "De aarde is al ruim 1 °C opgewarmd. Kan het doel dan nog lager liggen?"],
        uitlegPad: {
          stappen: [
            { titel: "Klimaatwetenschappelijk doel", tekst: "<1,5°C = 'veilig', <2°C = 'beheersbaar'. Boven 2°C: tipping points cascade-risico. Huidige plannen: ~2,5°C tegen 2100 zonder versterkte actie. 1,5°C waarschijnlijk al onbereikbaar zonder revolutionaire CCS." },
          ],
          niveaus: { basis: "1,5-2°C.", simpeler: "Onder 2 graden.", nogSimpeler: "2°C" },
        },
      },
      {
        q: "**Tipping point** in klimaat betekent:",
        options: [
          "Drempel waarna verandering zichzelf versterkt",
          "Hoogste temperatuur die de aarde bereikt",
          "Punt waarop de opwarming weer omkeert",
          "Een tijdelijke schommeling die vanzelf herstelt"
        ],
        answer: 0,
        wrongHints: [null, "Een record is maar een getal. Wat gebeurt er met de Amazone als die te droog wordt?", "Een omslag naar afkoeling zou goed nieuws zijn. Waarom waarschuwen klimaatwetenschappers dan voor tipping points?", "Wat is het verschil tussen een schommeling en iets dat niet meer terug kan?"],
        uitlegPad: {
          stappen: [
            { titel: "Feedback-loops", tekst: "Permafrost-voorbeeld: opwarming → permafrost ontdooit → CH₄ vrij → meer opwarming → meer ontdooiing → cyclus. Eenmaal voorbij drempel niet meer te stoppen. IPCC identificeert ~10 grote tipping points (Golfstroom, Amazone, Antarctische ijskap, etc.)." },
          ],
          theorie: "Sommige tipping points zouden actief kunnen zijn rond 1,5-2°C — daarom is 1,5°C-doel zo belangrijk.",
          niveaus: { basis: "Onomkeerbare drempel.", simpeler: "Punt van geen terug.", nogSimpeler: "Drempel" },
        },
      },
      {
        q: "Nederland is **bijzonder kwetsbaar** voor klimaatverandering omdat:",
        options: [
          "Veel land onder zeeniveau en een drukke kust",
          "De hoge CO₂-uitstoot per inwoner van Nederland",
          "Ligging op de route van Atlantische orkanen",
          "Ligging in het droogste deel van Europa"
        ],
        answer: 0,
        wrongHints: [null, "Uitstoot zegt iets over de oorzaak, niet over hoe hard de gevolgen een land raken. Wat maakt Nederland kwetsbaar?", "Atlantische orkanen buigen af of verzwakken lang voordat ze bij Nederland zijn. Welk ander gevolg van opwarming raakt Nederland wel?", "Droogte speelt soms, maar Nederland is juist nat met veel rivieren. Wat maakt de ligging van het land zo riskant?"],
        uitlegPad: {
          stappen: [
            { titel: "Geografie + bevolking", tekst: "NL ligt grotendeels in delta + onder zeeniveau (Randstad, Flevoland). Met zeespiegelstijging + extreme stormvloeden vereist veel investering in dijken + het Deltaprogramma (na advies Deltacommissie 2008). Plus dichte stedelijke bevolking → hittegolf-stress." },
          ],
          theorie: "Andere kwetsbaarheden: hittegolven (stedelijke heat island), wateroverlast door hevige regen, droogte op zandgronden.",
          niveaus: { basis: "Onder zeeniveau + delta.", simpeler: "Onder zee + kustland.", nogSimpeler: "Onder zee" },
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

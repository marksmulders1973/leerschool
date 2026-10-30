// Leerpad: Weer + weersvoorspelling - groep 6-8 natuur/aardrijkskunde.
// toets-relevant. 1F. 4 stappen.

const stepEmojis = ["🌤️", "🌬️", "📡", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is weer?", emoji: "🌤️", from: 0, to: 0 },
  { letter: "B", title: "Wind + luchtdruk", emoji: "🌬️", from: 1, to: 1 },
  { letter: "C", title: "Voorspellen weer", emoji: "📡", from: 2, to: 2 },
  { letter: "D", title: "Eind-toets", emoji: "🏆", from: 3, to: 3 },
];

const steps = [
  {
    title: "Wat is weer?",
    explanation:
      "**Weer** = wat er **nu in de atmosfeer** gebeurt op een plek.\n• Temperatuur, neerslag, wind, bewolking, vochtigheid.\n• Verandert per dag/uur.\n\n**Verschil weer + klimaat**:\n• **Weer**: vandaag *(regent het nu?)*.\n• **Klimaat**: gemiddelde van jaren *(is NL meestal nat?)*.\n\n**Onderdelen weer**:\n\n**1. Temperatuur** 🌡️\n• Gemeten in **graden Celsius** *(°C)* — wereldwijd behalve VS *(°F = Fahrenheit)*.\n• In NL: gemiddeld jaar **10°C**.\n• Warmste meting NL: **40,7°C** *(2019, Gilze-Rijen)*.\n• Koudste meting NL: **-27,4°C** *(1942, Winterswijk)*.\n• 0°C = water bevriest.\n• 100°C = water kookt.\n\n**Omzetten °F → °C**: (°F − 32) × 5/9.\n**Omzetten °C → °F**: °C × 9/5 + 32.\n\n**2. Neerslag** 🌧️\n• Regen, sneeuw, hagel, motregen.\n• Gemeten in **mm** *(1 mm = 1 L per m²)*.\n• NL gemiddeld: ~850 mm per jaar.\n\n**3. Wind** 🌬️\n• Beweging van lucht.\n• Gemeten in m/s of km/u of beaufort.\n• Zie volgende stap.\n\n**4. Bewolking** ☁️\n• Hoeveel hemel bedekt.\n• In achtsten: 0/8 = blauwe lucht. 8/8 = compleet bewolkt.\n• 4/8 = half bewolkt.\n\n**5. Luchtdruk** 📈\n• Gewicht van lucht boven je.\n• Gemeten in **hectopascal (hPa)** of **millibar (mb)** — zelfde getal.\n• Normaal op zeeniveau: ~1013 hPa.\n• Hoog = goed weer. Laag = slecht weer + neerslag.\n\n**6. Luchtvochtigheid** 💧\n• Hoeveel water in lucht zit *(% van max)*.\n• Hoog = klam, drukkend.\n• Laag = droog.\n\n**7. Zonneschijn** ☀️\n• Aantal uren zon per dag.\n• NL gem: ~5 uur per dag.\n• Voor planten + zonnepanelen + humeur.\n\n**Wat maakt het weer?**\n• **Zon** = motor *(geeft energie aan atmosfeer)*.\n• Verschillen in **temperatuur** → lucht beweegt → wind.\n• Wind brengt **vocht** + **warmte** mee.\n• Daardoor wisselt het weer.\n\n**Klimatologische cijfers NL**:\n• Gemiddeld 850 mm regen per jaar — verdeeld over ~200 regen-dagen.\n• Gemiddeld 1600 zonne-uren per jaar.\n• Gemiddeld 50 dagen vorst *(< 0°C)*.\n• ~25 zomerse dagen *(≥ 25°C)*, een paar tropische *(≥ 30°C)* — vaker door klimaatverandering.\n\n**Seizoenen**:\n• **Lente**: maart-mei *(~10°C gem, opwarmend)*.\n• **Zomer**: juni-aug *(~17°C gem, soms 35+°C)*.\n• **Herfst**: sept-nov *(~11°C gem, regen)*.\n• **Winter**: dec-feb *(4°C gem, soms vorst + sneeuw)*.\n\n**Toets-feitje**:\n**Witte kerst** in NL = zeldzaam. Sinds 1900 maar **een handvol echte witte kersten** *(sneeuw op 25 dec)*. Klimaatverandering maakt het nog onwaarschijnlijker.",
    checks: [
      {
        q: "Wat is **weer** (en dus niet klimaat)?",
        options: ["Wat nu in de lucht gebeurt", "Het gemiddelde over vele jaren", "Alleen de temperatuur buiten", "Alleen of het regent of niet"],
        answer: 0,
        wrongHints: [null, "Het gemiddelde over vele jaren heet klimaat.", "Temperatuur is maar één onderdeel van het weer.", "Regen is maar één onderdeel van het weer."],
        uitlegPad: {
          stappen: [
            { titel: "Twee belangrijke begrippen", tekst: "**Weer** = wat er **NU** (vandaag, deze week) in de atmosfeer gebeurt op een plek. Temperatuur, regen, wind. Kan **per uur** veranderen.\n**Klimaat** = het **gemiddelde** weer over **30+ jaar** op een plek. Verandert traag." },
            { titel: "Voorbeeld", tekst: "**Weer**: 'Het regent vandaag in Amsterdam.'\n**Klimaat**: 'Amsterdam heeft een gematigd zeeklimaat met ~850 mm regen per jaar.'\nWeer = momentopname. Klimaat = lange-termijn patroon." },
            { titel: "Toets-truc", tekst: "Verwar ze niet:\n• Iemand zegt 'klimaatverandering' → bedoelt TREND over decennia\n• Iemand zegt 'het weer is gek vandaag' → bedoelt MOMENT.\nKlimaatverandering ≠ regenachtige dag. Klimaatverandering = patronen over **jaren** verschuiven." },
          ],
          woorden: [
            { woord: "weer", uitleg: "Atmosfeer NU (vandaag, deze week)." },
            { woord: "klimaat", uitleg: "Gemiddelde weer over 30+ jaar." },
            { woord: "meteorologie", uitleg: "Wetenschap van weer en klimaat." },
          ],
          theorie: "Toets-feit:\n• **Weer** verandert dagelijks.\n• **Klimaat** verandert over decennia.\n• KNMI meet beide.\n• Klimaat-cijfers NL: 10°C gem, 850 mm regen, 1600 zon-uren per jaar.",
          voorbeelden: [
            { type: "stap", tekst: "Vandaag 25°C in juli = warm weer. Maar gemiddelde juli-temperatuur NL = ~18°C, dus klimatologisch is dit een warme dag." },
            { type: "stap", tekst: "Sahara: het weer kan toevallig regen zijn op een dag, maar het klimaat is toch droog (gemiddeld). Klimaat overheerst." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Weer = NU. Klimaat = LANG. Beide gebruiken zelfde meet-eenheden (graden, mm), maar tijdschaal verschilt." }],
          niveaus: {
            basis: "Weer is wat er nu in de lucht gebeurt: zon, regen, wind en temperatuur.",
            simpeler: "Weer is wat je vandaag buiten ziet. Klimaat is het gemiddelde weer over heel veel jaren.",
            nogSimpeler: "Weer is wat er nú buiten gebeurt.",
          },
        },
      },
      {
        q: "Wat is de **gemiddelde temperatuur** in Nederland per jaar?",
        options: ["~10°C", "~20°C", "~0°C", "~30°C"],
        answer: 0,
        wrongHints: [null, "Te warm — dat is een lekkere zomerdag, geen jaargemiddelde.", "Te koud — dan zou het het hele jaar vriezen.", "Veel te warm — dat is tropisch."],
      },
      {
        q: "In welke eenheid meet je **neerslag**?",
        options: ["mm", "kg", "km/u", "meter"],
        answer: 0,
        wrongHints: [null, "Kilogram is gewicht; regen meet je als een laagje water.", "Km/u is snelheid, bijvoorbeeld van de wind.", "Een meter regen per dag? Dat is veel te groot."],
        uitlegPad: {
          stappen: [
            { titel: "Neerslag = water uit lucht", tekst: "**Neerslag** is alle water dat uit de lucht valt: regen, sneeuw, hagel, motregen. Meteorologen meten dit in **millimeter (mm)**." },
            { titel: "Wat betekent 1 mm?", tekst: "1 mm regen = als alle gevallen regen op een ondergrond van 1 vierkante meter blijft liggen, is dat laagje **1 millimeter dik**. Dat is hetzelfde als **1 liter water per m²**." },
            { titel: "Praktisch", tekst: "Een hevige regenbui = ~20-30 mm in een uur. Een normale regendag = ~5 mm. Per jaar in NL: ~850 mm (= bijna 1 meter water als je het zou stapelen)." },
          ],
          woorden: [
            { woord: "mm neerslag", uitleg: "Hoogte van waterlaag (1 mm = 1 L/m²)." },
            { woord: "regenmeter", uitleg: "Glazen buisje dat regen opvangt om mm te meten." },
          ],
          theorie: "Toets-tip neerslag: ALTIJD in mm. Liter zegt niets zonder oppervlak — daarom mm (universeel). Regen in mm wordt gemeten per dag of per jaar.",
          voorbeelden: [
            { type: "stap", tekst: "Tuintje 4 m × 5 m = 20 m². Bij 10 mm regen valt er: 10 × 20 = 200 liter water in je tuin." },
            { type: "stap", tekst: "Dak van 100 m². 5 mm regen = 500 liter water dat in regenton kan." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Onthoud: 1 mm = 1 L/m². Per dag = die dag. Per jaar = totaal jaar." }],
          niveaus: {
            basis: "Neerslag wordt gemeten in mm (millimeter).",
            simpeler: "1 mm = 1 liter water per vierkante meter.",
            nogSimpeler: "Regen in mm.",
          },
        },
      },
      {
        q: "Hoeveel regen valt er in Nederland **gemiddeld per jaar**?",
        options: ["~850 mm", "~100 mm", "~5000 mm", "~300 mm"],
        answer: 0,
        wrongHints: [null, "Te weinig — zo weinig valt er in een woestijn.", "Te veel — zo veel valt er in een tropisch regenwoud.", "Te weinig — zo droog is een steppe, niet Nederland."],
      },
    ],
  },
  {
    title: "Wind + luchtdruk + onweer",
    explanation:
      "**Wind** = beweging van lucht door drukverschil.\n\n**Hoe ontstaat wind?**\n• Zon verwarmt grond ongelijkmatig.\n• Warme lucht stijgt → lage druk op die plek.\n• Koude lucht stroomt erheen → wind.\n\n**Windrichting**:\n• Genoemd naar waar wind **VANDAAN komt**.\n• 'Noordenwind' = wind komt uit noord.\n• In NL: **zuidwesten-wind** meest voorkomend.\n• Vandaar het milde, natte zeeklimaat in NL.\n\n**Windsnelheid**:\n• **m/s** *(meter per seconde)*: 5 m/s = matige wind.\n• **km/u** *(kilometer per uur)*: 18 km/u = matige wind.\n• Beaufort-schaal *(0-12)*:\n  - **0**: windstil *(0 m/s)*.\n  - **3**: matige wind *(4 m/s)*.\n  - **5**: vrij krachtige *(8 m/s)*.\n  - **8**: stormachtig *(18 m/s)*.\n  - **10**: zware storm *(25 m/s)*.\n  - **12**: orkaan *(>32 m/s)* — bijna nooit in NL.\n\n**Wat doen winden?**\n• Verspreiden warmte over aarde.\n• Brengen wolken + regen mee.\n• Bewegen schepen.\n• Maken windmolens draaien.\n\n**Bekende winden**:\n• **Passaatwinden**: stabiele winden in tropen.\n• **Mistral** *(Frankrijk)*: koude noordenwind.\n• **Föhn**: warme valwind in bergen.\n• **Storm + orkaan + tornado**.\n\n**Storm in NL**:\n• Vooral in herfst/winter.\n• Storm-namen sinds 2019 *(op alfabet)*.\n• Bekende stormen: **Eunice (feb 2022)**: zeer zware windstoten.\n\n**Luchtdruk** 📈:\n• Lucht heeft gewicht — drukt op alles.\n• Op zeeniveau: ~1013 hPa.\n• Hoog in bergen: minder lucht boven, dus minder druk.\n• Mt. Everest: ~330 hPa *(1/3 van zee)*.\n\n**Hoge druk** *(H)*:\n• Lucht zakt naar beneden.\n• Verwarmt → wolken oplossen.\n• → **goed weer**.\n\n**Lage druk** *(L)*:\n• Lucht stijgt.\n• Koelt af → wolken vormen.\n• → **slecht weer + regen**.\n\nWeerkaart: H = hoge druk, L = lage druk. Tussen H + L = wind.\n\n**Fronts** *(grenzen tussen luchtsoorten)*:\n• **Warmtefront**: warme lucht schuift over koude. → regen.\n• **Koufront**: koude lucht duwt warme weg. → buien + storm.\n• **Occlusiefront**: combinatie.\n\n**Onweer + bliksem** ⚡:\n• Cumulonimbus-wolken.\n• Druppels + ijskristallen wrijven tegen elkaar → **elektrische lading**.\n• Lading wordt te groot → **bliksem** *(ontlading)*.\n• Donder = geluid van plots uitzettende, hete lucht.\n\n**Wat te doen bij onweer?**\n• Binnen blijven *(huis, auto)*.\n• Niet onder boom *(bliksem treft hoge dingen)*.\n• In open veld: maak je zo klein mogelijk.\n• Niet zwemmen / douchen *(bliksem via water/pijpen)*.\n\n**Afstand bliksem berekenen**:\nFlits → tel seconden tot donder → deel door 3 = km afstand.\n*(geluid = 343 m/s, ~3 sec per km)*.\n\n**Tornado** in NL:\n• Een paar per jaar.\n• Klein meestal — niet zoals VS-tornado's.\n• Beste binnen blijven.\n\n**Toets-feitje**:\nDe wind in NL waait **op zee gemiddeld 7-8 m/s**, in **dorpen 3-4 m/s** *(huizen + bomen remmen wind af)*. Daarom staan windmolens vooral aan **zee** of in **open vlakte**.",
    checks: [
      {
        q: "Waaruit komt **wind**?",
        options: ["Drukverschil + opwarming", "Bewegende bomen", "Draaiende windmolens", "Golven op zee"],
        answer: 0,
        wrongHints: [null, "Bomen bewegen dóór de wind. Wat zet de lucht zelf in beweging?", "Windmolens draaien dóór de wind, ze maken geen wind.", "Golven ontstaan juist door de wind."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is wind?", tekst: "**Wind** = bewegende lucht. Lucht stroomt van een gebied met HOGE druk naar een gebied met LAGE druk." },
            { titel: "Waardoor drukverschil?", tekst: "Vooral door **opwarming door zon**. Warme lucht stijgt op (lichter) → bij grond minder druk. Koude lucht zakt → bij grond meer druk. Verschil = wind." },
            { titel: "Weerkaart: H + L", tekst: "Op weerkaart: **H** = hogedrukgebied (mooi weer). **L** = lagedrukgebied (wolken/regen). Wind blaast van H naar L (door de draaiing van de aarde buigt hij af)." },
          ],
          woorden: [
            { woord: "wind", uitleg: "Bewegende lucht door drukverschil." },
            { woord: "hogedruk (H)", uitleg: "Veel lucht — mooi weer." },
            { woord: "lagedruk (L)", uitleg: "Minder lucht — wolken/regen." },
          ],
          theorie: "Toets-feit: zon = motor van wind. Warmt aarde ongelijk op → drukverschillen → wind. Op evenaar warm = lagedruk. Bij polen koud = hogedruk.",
          voorbeelden: [
            { type: "stap", tekst: "Zeewind: land warmt sneller op dan zee → lucht stijgt boven land → koele zeewind blaast naar binnen." },
            { type: "stap", tekst: "Storm = groot drukverschil = harde wind. Beaufort-schaal gebruikt om kracht aan te geven." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "H → L. Lucht altijd van hoge naar lage druk, net als water bergaf." }],
          niveaus: {
            basis: "Wind = drukverschil in lucht (van hoog naar laag).",
            simpeler: "Zon warmt lucht ongelijk → drukverschil → wind.",
            nogSimpeler: "Drukverschil = wind.",
          },
        },
      },
      {
        q: "Meest voorkomende **windrichting NL**?",
        options: ["Zuidwesten", "Noorden", "Oosten", "Zuiden"],
        answer: 0,
        wrongHints: [null, "Noordenwind komt wel voor, maar niet het vaakst — hij brengt koude lucht.", "Oostenwind brengt droge lucht uit Duitsland en Rusland, maar waait minder vaak.", "Zuidenwind is warm, maar niet de meest voorkomende."],
        uitlegPad: {
          stappen: [
            { titel: "Wind komt VANDAAN waar je naar wijst", tekst: "Een 'zuidwestenwind' = wind die uit het **zuidwesten KOMT**, en dus naar het noordoosten BLAAST. Onthoud: wind heeft de naam van waar hij **VANDAAN** komt, niet waar hij heen gaat." },
            { titel: "In NL: vooral zuidwesten", tekst: "**Het vaakst** komt de wind in Nederland uit het **zuidwesten** (vanuit Atlantische Oceaan + UK). Dat brengt **vochtige + milde lucht** mee → grijs + regenachtig weer." },
            { titel: "Andere richtingen", tekst: "• **Noordenwind**: koud (uit poolgebied)\n• **Oostenwind**: droog + warm zomers / droog + koud winters (uit Rusland/Duitsland)\n• **Zuidenwind**: warm (vanuit Frankrijk/Spanje)\n• **Westenwind**: nat (zee, lijkt op zuidwesten)." },
          ],
          woorden: [
            { woord: "windrichting", uitleg: "Waar wind VANDAAN komt." },
            { woord: "windroos", uitleg: "Symbool met 8 of 16 richtingen (N/NO/O/ZO/Z/ZW/W/NW)." },
          ],
          theorie: "Toets-feit NL-wind:\n• Zuidwesten = dominant.\n• Daarom: westkust = zout/vochtig (zeewind).\n• Oosten van NL = drogere lucht.\n• Windmolens draaien hun wieken naar de wind toe.",
          voorbeelden: [
            { type: "stap", tekst: "Vlag wapperen naar het noordoosten? = wind komt uit het zuidwesten." },
            { type: "stap", tekst: "Klimaatverandering kan windpatronen verschuiven. Voor nu: zuidwesten blijft dominant in NL." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Wind komt VANDAAN waar hij heet. Zuidwestenwind = van zuidwest komen. Veelvoorkomend in NL." }],
          niveaus: {
            basis: "Zuidwesten.",
            simpeler: "De meeste NL-wind komt uit het zuidwesten (Atlantische Oceaan + UK).",
            nogSimpeler: "Zuidwesten",
          },
        },
      },
      {
        q: "Wat is **Beaufort 12**?",
        options: ["Orkaan", "Windstil", "Matige wind", "Sneeuwstorm"],
        answer: 0,
        wrongHints: [null, "Windstil is juist Beaufort 0.", "Matige wind is Beaufort 3-4.", "Beaufort zegt iets over de wind, niet over sneeuw."],
      },
      {
        q: "Welk weer hoort meestal bij **hoge druk (H)**?",
        options: ["Goed weer", "Regen", "Wind", "Onweer"],
        answer: 0,
        wrongHints: [null, "Regen hoort bij lage druk.", "Wind ontstaat tussen hoge en lage druk, niet door hoge druk alleen.", "Onweer hoort bij lage druk en opstijgende lucht."],
      },
    ],
  },
  {
    title: "Voorspellen weer + KNMI",
    explanation:
      "Weersvoorspelling = **wetenschap** + **technologie**.\n\n**KNMI** *(Koninklijk Nederlands Meteorologisch Instituut)*:\n• Opgericht **1854**.\n• Hoofdkwartier in **De Bilt** *(Utrecht)*.\n• Voorspelt weer voor NL.\n• Geeft **weeralarmen** *(code geel/oranje/rood)*.\n• Onderzoekt klimaat.\n• Internationale samenwerking *(EU-weerservices)*.\n\n**Hoe wordt weer voorspeld?**\n\n**1. Meten** 📡:\n• **Weerstations** op grond *(temperatuur, regen, wind)*.\n• **Weerballonnen** *(2x per dag opgelaten, hoog in atmosfeer)*.\n• **Vliegtuigen** verzamelen data.\n• **Boeien** op zee.\n• **Satellieten** *(volgen wolken vanuit ruimte)*.\n• **Radar** *(detecteert neerslag, bewegingen)*.\n\n**2. Computermodellen** 💻:\n• Supercomputers berekenen wat lucht gaat doen.\n• Gebruik van **fysica-formules** *(thermodynamica, vloeistofdynamica)*.\n• Belangrijke modellen: **ECMWF** *(EU)*, **GFS** *(VS)*, **HARMONIE** *(NL)*.\n• Modellen draaien meerdere keren per dag.\n• Geven verschillende mogelijkheden *(ensemble)*.\n\n**3. Interpreteren** 🔍:\n• Meteorologen kijken naar modellen.\n• Kennis + ervaring nodig.\n• Beste voorspelling kiezen.\n• Maken weerkaart + tekst.\n\n**Hoe ver kunnen we vooruit?**\n• **1-3 dagen**: heel betrouwbaar *(>90% goed)*.\n• **4-7 dagen**: redelijk *(70% goed)*.\n• **8-14 dagen**: alleen trends *(<50%)*.\n• **>2 weken**: bijna onmogelijk *(klimaat-statistiek)*.\n\nWaarom niet langer? Atmosfeer = **chaotisch systeem** *('vlindereffect')*.\nKleine fout → groeit snel uit.\n\n**Weerkaart leestips**:\n• **L** = lage druk *(slecht weer)*.\n• **H** = hoge druk *(goed weer)*.\n• **Isobaren** *(lijnen)* = gelijke druk.\n• Veel isobaren bij elkaar = harde wind.\n• **Driehoeken op lijn**: koufront.\n• **Halve cirkels op lijn**: warmtefront.\n• **Cijfers**: temperatuur of druk.\n\n**Beroemde NL-weerpresentatoren**:\n• Helga van Leur, Reinier van den Berg, Diana Woei.\n• KNMI-meteorologen op TV.\n\n**Weer-apps**:\n• Buienradar *(NL)*.\n• Weeronline.\n• Buienalarm.\n• KNMI-app.\n• Windy.com *(wereldwijd, mooi visueel)*.\n\n**Extreem weer wereldwijd** 🌪️:\n\n**Orkanen / tyfoons** *(tropische cyclonen)*:\n• Boven warme zee *(>26°C)*.\n• Wind > 119 km/u.\n• In Caraïben: orkanen.\n• In Pacific Azië: tyfoons.\n• In Indische Oceaan: cyclonen.\n\n**Tornado's**:\n• Vooral in 'tornado-gang' VS *(Texas-Kansas)*.\n• Trechtervormige wervelwind.\n• Wind tot 500 km/u.\n• Schaal **F0-F5**.\n\n**Hittegolf**:\n• 5+ dagen ≥25°C, waarvan 3+ ≥30°C.\n• Vaker door klimaatverandering.\n\n**Droogte**:\n• Lange tijd zonder regen.\n• Boer + natuur lijden.\n\n**Overstroming**:\n• Te veel water *(rivier, regen, zee)*.\n• Limburg 2021, Watersnoodramp 1953.\n\n**Klimaatverandering** verandert weer:\n• Meer extremen *(droogte + overstroming + hitte)*.\n• Hogere zeespiegel.\n• Veranderde windpatronen.\n\n**Toets-feitje**:\nRond **1860** begon het KNMI met stormwaarschuwingen voor de zeevaart. Nu krijgen we weer-updates **elke paar minuten** via apps + radar.",
    checks: [
      {
        q: "Wat is **KNMI**?",
        options: ['NL-weerinstituut (De Bilt)', 'Belastingdienst (Apeldoorn)', 'Nederlandse sportbond (Zeist)', 'Technische hogeschool (Delft)'],
        answer: 0,
        wrongHints: [null, 'De Belastingdienst gaat over geld, niet over het weer.', 'Geen sport. Zoek uit waar de letters K-N-M-I voor staan.', 'Geen school — denk aan wie het weerbericht maakt.'],
        uitlegPad: {
          stappen: [
            { titel: "Wat is KNMI?", tekst: "**KNMI** = **Koninklijk Nederlands Meteorologisch Instituut**. Sinds **1854** verantwoordelijk voor weervoorspelling + onderzoek naar klimaat in Nederland." },
            { titel: "Waar?", tekst: "Hoofdkwartier in **De Bilt** (provincie Utrecht). Meten daar continu het weer. Daarnaast 35+ weerstations door heel NL." },
            { titel: "Wat doet KNMI?", tekst: "1) **Weervoorspelling** (per app/web). 2) **Weeralarmen** (code geel/oranje/rood bij storm/hitte). 3) **Klimaatonderzoek**. 4) Adviseert overheid + bedrijven." },
          ],
          woorden: [
            { woord: "KNMI", uitleg: "Koninklijk Nederlands Meteorologisch Instituut." },
            { woord: "weeralarm", uitleg: "Officiële waarschuwing — code geel/oranje/rood." },
          ],
          theorie: "Toets-feit: KNMI gebruikt supercomputers + satellieten + weerballonnen + radar. Modellen rekenen meerdere keren per dag wat lucht gaat doen. Voorspellingen 1-3 dagen = ~90% betrouwbaar.",
          voorbeelden: [
            { type: "stap", tekst: "KNMI-app op telefoon: actueel weer + buienradar + voorspelling." },
            { type: "stap", tekst: "Code rood = blijf binnen! Bijv. zware storm of grote sneeuwval." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "KNMI = NL-weer-officieel. De Bilt = hoofdkwartier. Sinds 1854." }],
          niveaus: {
            basis: "KNMI = NL-weerinstituut (De Bilt, sinds 1854).",
            simpeler: "Officiële weer-organisatie van Nederland.",
            nogSimpeler: "KNMI = weer-NL.",
          },
        },
      },
      {
        q: "Wat zijn **isobaren**?",
        options: ['Lijnen van gelijke luchtdruk', 'Lijnen van gelijke temperatuur', 'Lijnen die de windkracht tonen', 'Lijnen rond grote wolkenvelden'],
        answer: 0,
        wrongHints: [null, 'Die lijnen heten isothermen. Denk aan het woordstuk \'baar\'.', 'Wind hangt ermee samen, maar wat geven de lijnen zelf aan?', 'Wolken teken je met symbolen, niet met lijnen.'],
        uitlegPad: {
          stappen: [
            { titel: "Iso = gelijk, baar = druk", tekst: "**Isobaren** zijn lijnen op een weerkaart die plekken met **gelijke luchtdruk** verbinden. Net zoals **hoogtelijnen** op landkaart punten met gelijke hoogte verbinden." },
            { titel: "Wat zie je eruit?", tekst: "• **Veel isobaren dicht bij elkaar** = groot drukverschil over kleine afstand → **HARDE WIND** (storm-risico).\n• **Isobaren ver uit elkaar** = klein verschil → **zwakke wind**.\n• Cirkels rond **H** of **L** = hoge/lage druk-centrum." },
            { titel: "Iso- voorvoegsel komt vaker voor", tekst: "Bij weerkaarten ook:\n• **Isothermen** = lijnen van gelijke TEMPERATUUR\n• **Isohyeten** = lijnen van gelijke NEERSLAG\n'Iso' = Grieks voor 'gelijk'. Onthoud dit voorvoegsel." },
          ],
          woorden: [
            { woord: "isobaar", uitleg: "Lijn van gelijke luchtdruk op weerkaart." },
            { woord: "hoogtelijn", uitleg: "Vergelijkbaar op landkaart — lijn van gelijke hoogte." },
            { woord: "iso-", uitleg: "Grieks voorvoegsel = 'gelijk'." },
          ],
          theorie: "Toets-feit isobaren-lezen:\n• Dicht bij elkaar = harde wind\n• Wijd uit elkaar = zwak\n• Cirkels: H = hoog, L = laag\n• Wind blaast LANGS isobaren (door Coriolis-effect), niet direct van H naar L.",
          voorbeelden: [
            { type: "stap", tekst: "Op weerkaart van NL zie je vaak isobaren op 5 hPa-stappen: 1010, 1015, 1020, etc." },
            { type: "stap", tekst: "Bij Eunice-storm 2022 stonden isobaren super dicht op weerkaart — daaraan kon je vooraf zien dat het zwaar zou worden." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Isobaar = 'gelijke druk'-lijn. Veel + dicht = wind hard. Weinig + ver = wind zwak." }],
          niveaus: {
            basis: "Isobaren = lijnen van gelijke luchtdruk op weerkaart.",
            simpeler: "Lijnen die luchtdruk-waarden verbinden. Dicht bij elkaar = wind.",
            nogSimpeler: "Druk-lijnen",
          },
        },
      },
      {
        q: "Hoe **betrouwbaar** is een weersvoorspelling voor 1-3 dagen vooruit?",
        options: ["~90%", "10%", "~50%", "100%"],
        answer: 0,
        wrongHints: [null, "Veel meer — de voorspelling voor morgen klopt bijna altijd.", "Meer — 50% is gokken; zo slecht zijn de computermodellen niet.", "Nooit 100% — de lucht is te chaotisch om alles te weten."],
      },
      {
        q: "Hoe heet een **tropische cycloon** in het Caribisch gebied?",
        options: ["Orkaan", "Tyfoon", "Storm", "Tornado"],
        answer: 0,
        wrongHints: [null, "Zo heet een tropische cycloon bij Azië.", "Storm is een algemeen woord voor harde wind.", "Een tornado is een kleine, draaiende windhoos boven land."],
      },
    ],
  },
  {
    title: "Eind-toets — weer mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Wat bedoelen we met **weer** (en niet met klimaat)?", options: ["Het weer van nu / vandaag", "Het gemiddelde over vele jaren", "Alleen de temperatuur", "Alleen regen en sneeuw"], answer: 0, wrongHints: [null, "Het gemiddelde over vele jaren heet klimaat.", "Temperatuur is maar één onderdeel van het weer.", "Neerslag is maar één onderdeel van het weer."] },
      { q: "**KNMI** zit in?", options: ["De Bilt", "Den Haag", "Amsterdam", "Rotterdam"], answer: 0, wrongHints: [null, "Den Haag is de regeringsstad, niet de plek van het KNMI.", "De hoofdstad, maar niet waar het weerinstituut zit.", "De havenstad, niet waar het KNMI zit."] },
      { q: "Welk weer hoort bij **hoge druk (H)**?", options: ["Goed weer", "Regen", "Storm", "Onweer"], answer: 0, wrongHints: [null, "Regen hoort bij lage druk.", "Storm hoort bij een diep lagedrukgebied.", "Onweer hoort bij lage druk en opstijgende lucht."] },
      { q: "Wat is **Beaufort 12**?", options: ["Orkaan", "Windstil", "Matige wind", "Sneeuwstorm"], answer: 0, wrongHints: [null, "Windstil is juist Beaufort 0.", "Matige wind is Beaufort 3.", "Beaufort zegt iets over de wind, niet over sneeuw."] },
      { q: "In welke eenheid meet je **neerslag**?", options: ["mm", "kg", "graden", "m³"], answer: 0, wrongHints: [null, "Kilogram is gewicht; regen meet je als een laagje water.", "Graden zijn voor temperatuur.", "Kubieke meters zijn voor een hele hoeveelheid water, niet voor een laagje regen."] },
      { q: "Hoe ver vooruit kun je **redelijk voorspellen**?", options: ["Ongeveer een week", "Ongeveer een maand", "Ongeveer een jaar", "Hooguit één uur"], answer: 0, wrongHints: [null, "Zo ver vooruit zie je alleen nog trends, geen dagweer.", "Een jaar vooruit kan niemand het weer voorspellen.", "Veel verder — voor morgen en overmorgen zit het KNMI er zelden naast."] },
      {
        q: "Wat is **klimaatverandering**?",
        options: ['Aarde warmt op door meer CO₂', 'Wisseling van weer per dag', 'Wisseling van de seizoenen', 'Een nieuwe app voor het weer'],
        answer: 0,
        wrongHints: [null, "Dat is gewoon WEER, niet klimaat (= langere termijn).", "Seizoenen = normale cyclus, geen verandering.", "Niet — klimaat is wetenschappelijk fenomeen."],
        uitlegPad: {
          stappen: [
            { titel: "Weer vs klimaat (herhaling)", tekst: "**Weer** = wat NU gebeurt (vandaag regen). **Klimaat** = GEMIDDELDE over **30+ jaar** (Nederlands klimaat = gematigd zee-klimaat).\n\n**Klimaatverandering** = het klimaat (gemiddelde) verandert over de lange termijn. Niet één warme dag — een **trend over decennia**." },
            { titel: "Wat gebeurt er nu?", tekst: "Sinds **industriële revolutie (~1850)** is aarde gemiddeld **ruim 1 °C warmer**. Verklaring:\n• Mensen verbranden veel **fossiele brandstoffen** (olie, kolen, gas)\n• Dat geeft **CO₂** (koolstofdioxide) in de lucht\n• CO₂ houdt zonnewarmte vast = **broeikaseffect**\n• Meer CO₂ → meer warmte vasthouden → opwarming\n\nGevolgen al zichtbaar: smeltende ijskappen, hogere zeespiegel, meer extreem weer." },
            { titel: "Toets-feit: Parijsakkoord", tekst: "In **2015** sloten 196 landen het **Parijsakkoord**:\n• Opwarming **onder 2 °C** houden (liefst 1,5 °C)\n• Drastisch minder CO₂ uitstoten\n• Tegen ~2050 'klimaatneutraal' zijn\n\nNL doel: **55% minder CO₂ in 2030** + **klimaatneutraal in 2050** (Klimaatwet). Voor toetsstof: weet dat MENS de oorzaak is + Parijs 2015 belangrijk." },
          ],
          woorden: [
            { woord: "klimaatverandering", uitleg: "Langzame opwarming van aarde over decennia door menselijke uitstoot van CO₂ + andere broeikasgassen." },
            { woord: "broeikaseffect", uitleg: "CO₂ houdt warmte vast (zoals glas in broeikas). Zonder geen leven mogelijk; te veel = opwarming." },
            { woord: "CO₂", uitleg: "Koolstofdioxide. Komt bij verbranding van fossiele brandstoffen + ademen. Hoofdoorzaak opwarming." },
            { woord: "fossiele brandstoffen", uitleg: "Olie, kolen, gas. Gevormd uit oude planten/dieren miljoenen jaren terug." },
          ],
          theorie: "Wat doen we eraan?\n• **Duurzame energie**: zon, wind, water (geen CO₂)\n• **Elektrische auto's** (geen benzine)\n• **Isoleren** huizen (minder verwarming)\n• **Minder vlees** eten (dieren stoten CH₄ uit)\n• **Bossen aanplanten** (CO₂ uit lucht halen)\n\nNL: rond 2024 kwam ongeveer de helft van de stroom uit duurzame bronnen; dat moet verder groeien.",
          voorbeelden: [
            { type: "feit", tekst: "2024 was wereldwijd het warmste jaar ooit gemeten — gemiddeld 1,55 °C boven pre-industrieel." },
            { type: "feit", tekst: "Zeespiegelstijging: ~20 cm sinds 1900, mogelijk 1 meter in 2100. Voor NL = grote uitdaging (26% land onder zeespiegel)." },
          ],
          basiskennis: [{ onderwerp: "Niet 1 dag warm = klimaat", uitleg: "Hete zomer ≠ klimaatverandering. TREND over 30 jaar wel. Toets-feit: weer ≠ klimaat." }],
          niveaus: { basis: "Opwarming door CO₂.", simpeler: "Klimaatverandering = aarde wordt langzaam warmer door mensen die fossiele brandstoffen verbranden + veel CO₂ uitstoten. Al ruim 1 °C warmer sinds 1850.", nogSimpeler: "Opwarming" },
        },
      },
      {
        q: "Welke 4 **windrichtingen** zijn er?",
        options: ["Noord, Oost, Zuid, West", "Boven, Onder, Links, Rechts", "Voor, Achter, Links, Rechts", "Noord, Zuid, Hoog, Laag"],
        answer: 0,
        wrongHints: [null, "Dat zijn schermrichtingen, geen windrichtingen.", "Voor en achter hangen af van hoe je staat — een windrichting niet.", "Hoog en laag zeggen iets over luchtdruk, niet over een richting op het kompas."],
        uitlegPad: {
          stappen: [
            { titel: "De 4 hoofd-windrichtingen", tekst: "Het **kompas** heeft 4 hoofdrichtingen:\n• **N** — Noord (boven op kaart)\n• **O** — Oost (rechts)\n• **Z** — Zuid (onder)\n• **W** — West (links)\n\nEzelsbruggetje: **'Nooit Op Zaterdag Werken'** = NOZW (klokrond)." },
            { titel: "Tussen-richtingen", tekst: "Ook nuttig: **NO, NW, ZO, ZW** (tussen-richtingen).\n• **NO** = Noord-Oost (rechtsboven)\n• **NW** = Noord-West (linksboven)\n• **ZO** = Zuid-Oost (rechtsonder)\n• **ZW** = Zuid-West (linksonder)\n\nTotaal **8 richtingen**. Meer fijn-richtingen bestaan ook (NNO etc.) maar niet voor de Doorstroomtoets." },
            { titel: "Toets-feit: windrichting bij weer", tekst: "**Wind komt UIT die richting**:\n• **Noordenwind** = wind WAAIT uit het noorden NAAR ons (vanaf Noordpool → koud)\n• **Zuidenwind** = uit het zuiden → warm (vanaf Sahara/Spanje)\n• **Westenwind** = uit het westen (vanaf Atlantische Oceaan → vochtig, brengt regen)\n• **Oostenwind** = uit het oosten (vanaf Rusland → droog, koud in winter)\n\n**NL hoofdwind = zuidwest** (komt van warme oceaan, vandaar veel regen)." },
          ],
          woorden: [
            { woord: "kompas", uitleg: "Instrument dat altijd noord aanwijst (magneet). Onmisbaar voor navigatie zonder GPS." },
            { woord: "windrichting", uitleg: "Uit welke kant de wind komt. Bv. noordenwind = waait uit noord." },
            { woord: "Beaufort-schaal", uitleg: "Schaal voor windsterkte: 0 (windstil) tot 12 (orkaan)." },
          ],
          theorie: "Toets-context windrichting + weer in NL:\n• **Zuidwesten-wind** (meest voorkomend): mild + nat\n• **Westen-wind**: koel + nat\n• **Noorden-wind**: koud + droog winter / fris zomer\n• **Oosten-wind**: droog (continentaal) — vrieskou winter\n\nWindroos op weerkaarten KNMI = standaard 8 of 16 richtingen.",
          voorbeelden: [
            { type: "feit", tekst: "Het noorderlicht (aurora) zie je vooral hoog in het noorden — vandaar de naam." },
            { type: "feit", tekst: "Bomenrijen rond boerderijen (windsingels) beschermen tegen de vaak westelijke wind." },
          ],
          basiskennis: [{ onderwerp: "Niet schermrichting", uitleg: "Op kaart: noord = boven, zuid = onder. Maar op kompas in WERKELIJKHEID is noord magnetisch noorden." }],
          niveaus: { basis: "NOZW.", simpeler: "Vier windrichtingen: Noord (boven), Oost (rechts), Zuid (onder), West (links). Ezelsbrug: Nooit Op Zaterdag Werken.", nogSimpeler: "NOZW" },
        },
      },
      {
        q: "Wat is een **storm** in Nederland (volgens KNMI)?",
        options: ['Wind ≥ Beaufort 9 (75 km/u)', 'Neerslag ≥ 10 mm (veel regen)', 'Sneeuw ≥ 10 cm (dik pak)', 'Onweer ≥ 10 bliksems per uur'],
        answer: 0,
        wrongHints: [null, 'Veel regen is een bui, geen storm.', 'Een storm gaat over iets anders dan sneeuw.', 'Onweer is bliksem en donder. Storm gaat over iets anders.'],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een storm?", tekst: "Volgens **KNMI** is er storm bij **windkracht 9 op Beaufort-schaal** = **75-88 km/u**.\n• **Zware storm** = Beaufort 10 (89-102 km/u)\n• **Zeer zware storm** = Beaufort 11 (103-117 km/u)\n• **Orkaan** = Beaufort 12 (>117 km/u)\n\nIn NL komt orkaankracht (gemiddelde wind) bijna nooit voor." },
            { titel: "KNMI-waarschuwingen", tekst: "**KNMI** geeft waarschuwingen uit:\n• **Code geel** — wees alert (kans op gevaarlijk weer)\n• **Code oranje** — wees voorbereid (grote kans op schade of letsel)\n• **Code rood** — neem actie (extreme situatie, kans op slachtoffers)\n\nBij code rood: blijf binnen, ga niet op de weg. Vaak gegeven bij storm + sneeuw." },
            { titel: "Toets-feit: bekende NL-stormen", tekst: "Beroemde stormen in NL:\n• **31 jan 1953**: Watersnoodramp (zware storm + springtij, 1.836 doden)\n• **18 jan 2007**: Storm Kyrill, ook doden in NL\n• **18 jan 2018**: Storm Friederike, code rood in meerdere provincies\n• **18 feb 2022**: Storm Eunice, NS legde alle treinen plat\n\nNL krijgt vaak namen via NL-België-VK-systeem (vanaf 2019)." },
          ],
          woorden: [
            { woord: "storm", uitleg: "Wind met snelheid ≥ Beaufort 9 (75 km/u). KNMI-definitie." },
            { woord: "Beaufort-schaal", uitleg: "Engelse zee-officier Francis Beaufort (1805) bedacht schaal 0-12 voor wind." },
            { woord: "windstoot", uitleg: "Kortdurende uitschieter in windsnelheid. Vaak hoger dan gemiddelde." },
            { woord: "KNMI", uitleg: "Koninklijk Nederlands Meteorologisch Instituut. Sinds 1854. In De Bilt." },
          ],
          theorie: "Beaufort-schaal kerntermen:\n• 0 — Windstil (<1 km/u)\n• 3 — Matige wind (12-19 km/u) — vlag wappert\n• 6 — Krachtige wind (40-49 km/u) — paraplu lastig\n• 9 — **STORM** (75-88 km/u) — takken breken\n• 12 — **ORKAAN** (>117 km/u) — verwoesting\n\nKnipperende verkeerstekens + spoorvertraging vanaf code geel.",
          voorbeelden: [
            { type: "feit", tekst: "Tijdens storm Eunice (2022) waren er windstoten van rond de 140 km/u." },
            { type: "feit", tekst: "NL/BE/VK kondigen sinds 2019 stormen aan met namen. Letter rouleert: Eunice (E) → Franklin (F) → ..." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen wind", uitleg: "Stormschade in NL meestal door wind + neerslag samen. Bomen omver, ramen kapot, dijken bedreigd." }],
          niveaus: { basis: "Beaufort 9+ (75 km/u).", simpeler: "Storm in NL = windkracht 9 op Beaufort-schaal = 75 km/u of harder. Beaufort 12 = orkaan (>117 km/u).", nogSimpeler: "Beaufort 9+" },
        },
      },
      { q: "Welk instituut doet **weersvoorspellingen** in Nederland?", options: ["KNMI","RIVM","CBS","NS"], answer: 0, wrongHints: [null, "Het RIVM gaat over gezondheid en ziektes.", "Het CBS telt en meet cijfers over Nederland.", "De NS rijdt treinen."] },
      { q: "Welke schaal meet **windkracht**?", options: ["Beaufort","Richter","Celsius","Kelvin"], answer: 0, wrongHints: [null, "Richter meet aardbevingen.", "Celsius meet temperatuur.", "Kelvin is ook een temperatuurschaal."] },
      { q: "Waarom zie je de **bliksem** eerder dan je de **donder** hoort?", options: ['Licht reist sneller dan geluid', 'Bliksem ontstaat eerder dan donder', 'Geluid reist sneller dan licht', 'Je ogen werken sneller dan oren'], answer: 0, wrongHints: [null, 'Bliksem en donder ontstaan tegelijk. Waarom bereikt het één je dan eerder?', 'Denk aan onweer ver weg: wat merk je het eerst?', 'Je ogen en oren werken allebei razendsnel. Het verschil zit buiten je hoofd.'] },
      { q: "Welk weersymbool betekent **regenbui**?", options: ["Wolk met druppels","Zon","Sneeuwvlok","Wolk met bliksemschicht"], answer: 0, wrongHints: [null, "Een zon betekent mooi weer.", "Een sneeuwvlok betekent sneeuw.", "Een bliksemschicht betekent onweer."] },
      { q: "Wat is **luchtdruk**?", options: ['Kracht waarmee lucht drukt', 'Snelheid waarmee lucht waait', 'Warmte die in de lucht zit', 'Vocht dat in de lucht zit'], answer: 0, wrongHints: [null, 'Dat is wind.', 'Dat is temperatuur.', 'Dat is luchtvochtigheid.'] },
      { q: "Hoge luchtdruk = welk weer?", options: ["Mooi/droog","Storm","Onweer","Regen"], answer: 0, wrongHints: [null, "Storm hoort bij lágedruk, niet hoge.", "Onweer komt bij lagedruk en opstijgende lucht.", "Regen hoort bij lagedruk — wat doet hoge druk dan?"] },
      { q: "Welke windrichting waait meestal in NL?", options: ["Zuidwest","Noord","Oost","Zuid"], answer: 0, wrongHints: [null, "Noordenwind komt wel voor, maar niet het vaakst — hij brengt koude lucht.", "Oostenwind brengt droge lucht, maar waait minder vaak.", "Zuidenwind is warm, maar niet de meest voorkomende."] },
      { q: "Welke **witte stapelwolk** zie je vaak bij mooi zomerweer?", options: ["Cumulus","Cirrus","Stratus","Cumulonimbus"], answer: 0, wrongHints: [null, "Cirrus zijn dunne sluierwolken van ijskristallen, heel hoog.", "Stratus is een vlakke grijze laag — grijs weer.", "Cumulonimbus is de hoge onweerswolk."] },
      { q: "Welke schaal meet **temperatuur** in NL?", options: ["Celsius","Fahrenheit","Kelvin","Beaufort"], answer: 0, wrongHints: [null, "Fahrenheit gebruiken ze in de VS.", "Kelvin gebruiken wetenschappers, niet het weerbericht.", "Beaufort meet wind."] },
      { q: "Welk **instrument** meet luchtdruk?", options: ["Barometer","Thermometer","Anemometer","Hygrometer"], answer: 0, wrongHints: [null, "Een thermometer meet temperatuur.", "Een anemometer meet wind.", "Een hygrometer meet vocht."] },
      { q: "Wat doet een **anemometer**?", options: ["Wind meten","Temperatuur meten","Luchtdruk meten","Vochtigheid meten"], answer: 0, wrongHints: [null, "Daarvoor gebruik je een thermometer.", "Daarvoor gebruik je een barometer.", "Daarvoor gebruik je een hygrometer."] },
      { q: "Een **hittegolf** in NL = ?", options: ["≥5 dagen ≥25°C met 3 ≥30°C","≥3 dagen ≥25°C met 1 ≥30°C","≥1 dag ≥30°C met 1 ≥35°C","≥7 dagen zon met 3 ≥20°C"], answer: 0, wrongHints: [null, "Te kort — een hittegolf duurt langer.", "Eén hete dag is nog geen hittegolf.", "Het gaat om de temperatuur, niet alleen om zon."] },
      { q: "Wat doet een **front** in weer?", options: ['Grens tussen luchtmassa\'s', 'Wind die over zee waait', 'Grote wolk boven het land', 'Zon die door de wolken komt'], answer: 0, wrongHints: [null, 'Wind is lucht die beweegt. Een front is iets anders.', 'Bij een front zie je vaak wolken, maar wat is het front zelf?', 'Na een front kan de zon schijnen, maar wat is het front zelf?'] },
      { q: "**Code rood** bij KNMI betekent?", options: ["Extreem gevaarlijk weer","Heel warm en zonnig weer","Kans op een beetje regen","Het weerbericht is nog niet klaar"], answer: 0, wrongHints: [null, "Rood is een waarschuwingskleur, geen zonnetje.", "Voor een beetje regen geeft het KNMI geen code.", "Een code is een waarschuwing, geen melding over het bericht zelf."] },
      { q: "Wat is **smog**?", options: ['Mengsel van mist en vervuiling', 'Mengsel van sneeuw en hagel', 'Heel helder en zonnig weer', 'Mengsel van zand en harde wind'], answer: 0, wrongHints: [null, 'Sneeuw en hagel zijn neerslag. Smog hangt in de lucht.', 'Juist niet — bij smog zie je minder goed.', 'Een zandstorm heet geen smog. Denk aan grote steden met veel verkeer.'] },
      { q: "Welk weer geeft een **lage druk** vaak?", options: ["Bewolkt/regen","Mooi weer","Sneeuw","Altijd windstil"], answer: 0, wrongHints: [null, "Mooi weer hoort bij hoge druk.", "Sneeuw is maar één vorm van neerslag, en alleen bij vorst.", "Bij lage druk waait het juist vaak."] },
      { q: "Wat doet een **buienradar**?", options: ['Toont waar regen valt en heen trekt', 'Voorspelt de temperatuur van morgen', 'Toont hoe hard de wind waait', 'Toont waar de zon het eerst schijnt'], answer: 0, wrongHints: [null, 'Daarvoor heb je een thermometer of weerbericht.', 'Wind zie je op een windkaart.', 'Zon is geen bui. Kijk naar de naam.'] },
      { q: "Welke **afkortingen** gebruik je voor windrichtingen?", options: ["N, O, Z, W","N, E, S, W","A, B, C, D","B, O, L, R"], answer: 0, wrongHints: [null, "Dat zijn de Engelse letters (East, South). Welke Nederlandse woorden gebruiken wij?", "Letters van het alfabet zeggen niets over een richting.", "Boven, onder, links en rechts zijn geen windrichtingen."] },
      { q: "Welke maanden zijn meestal **warmst** in NL?", options: ["Juni-augustus","December-februari","Maart-mei","September-november"], answer: 0, wrongHints: [null, "December tot februari is de winter.", "Maart tot mei is de lente — dan warmt het pas op.", "September tot november is de herfst — dan koelt het af."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const weersvoorspellingPo = {
  id: "weersvoorspelling-po",
  title: "Weer + weersvoorspelling (groep 6-8, Doorstroomtoets-stof)",
  emoji: "🌤️",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / aardrijkskunde",
  prerequisites: [
    { id: "waterkringloop-po", title: "Waterkringloop", niveau: "1F" },
  ],
  intro:
    "Weer voor groep 6-8, Doorstroomtoets-stof — wat is weer (temperatuur/neerslag/wind/druk) + wind + luchtdruk + onweer/bliksem + KNMI in De Bilt + voorspellen via radar/satelliet/computermodellen + weerkaart-symbolen + extreem weer (orkaan/tornado/hittegolf). Sluit op water-kringloop. ~15 min.",
  triggerKeywords: [
    "weer", "weersvoorspelling",
    "temperatuur", "neerslag", "regen",
    "wind", "Beaufort", "windrichting",
    "luchtdruk", "hPa", "isobaren",
    "onweer", "bliksem", "donder",
    "KNMI", "De Bilt", "Buienradar",
    "orkaan", "tornado", "hittegolf",
  ],
  chapters,
  steps,
};

export default weersvoorspellingPo;

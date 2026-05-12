// Leerpad: Weer + weersvoorspelling - groep 6-8 natuur/aardrijkskunde.
// Cito-relevant. 1F. 4 stappen.

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
      "**Weer** = wat er **nu in de atmosfeer** gebeurt op een plek.\n• Temperatuur, neerslag, wind, bewolking, vochtigheid.\n• Verandert per dag/uur.\n\n**Verschil weer + klimaat**:\n• **Weer**: vandaag *(regent het nu?)*.\n• **Klimaat**: gemiddelde van jaren *(is NL meestal nat?)*.\n\n**Onderdelen weer**:\n\n**1. Temperatuur** 🌡️\n• Gemeten in **graden Celsius** *(°C)* — wereldwijd behalve VS *(°F = Fahrenheit)*.\n• In NL: gemiddeld jaar **10°C**.\n• Warmste meting NL: **40,7°C** *(2019, Gilze-Rijen)*.\n• Koudste meting NL: **-27,4°C** *(1942, Winterswijk)*.\n• 0°C = water bevriest.\n• 100°C = water kookt.\n\n**Omzetten **°F → °C**: (°F − 32) × 5/9.\nOmzetten **°C → °F**: °C × 9/5 + 32.\n\n**2. Neerslag** 🌧️\n• Regen, sneeuw, hagel, motregen.\n• Gemeten in **mm** *(1 mm = 1 L per m²)*.\n• NL gemiddeld: ~850 mm per jaar.\n\n**3. Wind** 🌬️\n• Beweging van lucht.\n• Gemeten in m/s of km/u of beaufort.\n• Zie volgende stap.\n\n**4. Bewolking** ☁️\n• Hoeveel hemel bedekt.\n• In achtsten: 0/8 = blauwe lucht. 8/8 = compleet bewolkt.\n• 4/8 = half bewolkt.\n\n**5. Luchtdruk** 📈\n• Gewicht van lucht boven je.\n• Gemeten in **hectopascal (hPa)** of **millibar (mb)** — zelfde getal.\n• Normaal op zeeniveau: ~1013 hPa.\n• Hoog = goed weer. Laag = slecht weer + neerslag.\n\n**6. Luchtvochtigheid** 💧\n• Hoeveel water in lucht zit *(% van max)*.\n• Hoog = klam, drukkend.\n• Laag = droog.\n\n**7. Zonneschijn** ☀️\n• Aantal uren zon per dag.\n• NL gem: ~5 uur per dag.\n• Voor planten + zonnepanelen + humeur.\n\n**Wat maakt het weer?**\n• **Zon** = motor *(geeft energie aan atmosfeer)*.\n• Verschillen in **temperatuur** → lucht beweegt → wind.\n• Wind brengt **vocht** + **warmte** mee.\n• Daardoor wisselt het weer.\n\n**Klimatologische cijfers NL**:\n• Gemiddeld 850 mm regen per jaar — verdeeld over ~200 regen-dagen.\n• Gemiddeld 1600 zonne-uren per jaar.\n• Gemiddeld 50 dagen vorst *(< 0°C)*.\n• Gemiddeld 25 'tropische' dagen *(> 30°C — bijna nooit vroeger, nu meer door klimaatverandering)*.\n\n**Seizoenen**:\n• **Lente**: maart-mei *(15°C gem, opwarmend)*.\n• **Zomer**: juni-aug *(20°C gem, soms 35+°C)*.\n• **Herfst**: sept-nov *(12°C gem, regen)*.\n• **Winter**: dec-feb *(4°C gem, soms vorst + sneeuw)*.\n\n**Cito-feitje**:\n**Witte kerst** in NL = zeldzaam. Sinds 1900 maar **5 echte witte kersten** *(sneeuw op 25 dec)*. Klimaatverandering maakt het nog onwaarschijnlijker.",
    checks: [
      {
        q: "Wat is **weer** (vs klimaat)?",
        options: ["Wat NU in atmosfeer gebeurt", "Gemiddelde van jaren", "Niet bestaand", "Geen verschil"],
        answer: 0,
        wrongHints: [null, "Klopt — vandaag.", "Klimaat.", "Wel.", "Wel verschil."],
      },
      {
        q: "Wat is **gemiddelde temperatuur NL** per jaar?",
        options: ["~10°C", "20°C", "0°C", "30°C"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te warm.", "Te koud.", "Te warm."],
      },
      {
        q: "**Eenheid neerslag**?",
        options: ["mm (1 mm = 1 L/m²)", "kg", "Liter", "meter"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Wel maar specifiek mm.", "Te groot."],
      },
      {
        q: "Wat is **gemiddelde regen NL** per jaar?",
        options: ["~850 mm", "100 mm", "5000 mm", "0 mm"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig — woestijn.", "Te veel — tropisch regenwoud.", "Niet."],
      },
    ],
  },
  {
    title: "Wind + luchtdruk + onweer",
    explanation:
      "**Wind** = beweging van lucht door drukverschil.\n\n**Hoe ontstaat wind?**\n• Zon verwarmt grond ongelijkmatig.\n• Warme lucht stijgt → lage druk op die plek.\n• Koude lucht stroomt erheen → wind.\n\n**Windrichting**:\n• Genoemd naar waar wind **VANDAAN komt**.\n• 'Noordenwind' = wind komt uit noord.\n• In NL: **zuidwesten-wind** meest voorkomend *(60% van tijd)*.\n• Vandaar 'zoete' kant van NL is west *(zee-invloed)*.\n\n**Windsnelheid**:\n• **m/s** *(meter per seconde)*: 5 m/s = matige wind.\n• **km/u** *(kilometer per uur)*: 36 km/u = matige wind.\n• Beaufort-schaal *(0-12)*:\n  - **0**: windstil *(0 m/s)*.\n  - **3**: matig zwakke wind *(4 m/s)*.\n  - **5**: vrij krachtige *(8 m/s)*.\n  - **8**: stormachtig *(18 m/s)*.\n  - **10**: zware storm *(25 m/s)*.\n  - **12**: orkaan *(>32 m/s)* — bijna nooit in NL.\n\n**Wat doen winden?**\n• Verspreiden warmte over aarde.\n• Brengen wolken + regen mee.\n• Bewegen schepen.\n• Maken windmolens draaien.\n\n**Bekende winden**:\n• **Passaatwinden**: stabiele winden in tropen.\n• **Mistral** *(Frankrijk)*: koude noordenwind.\n• **Föhn**: warme valwind in bergen.\n• **Storm + orkaan + tornado**.\n\n**Storm in NL**:\n• Vooral in herfst/winter.\n• Storm-namen sinds 2019 *(eerste alfabet)*.\n• Bekende stormen: **Eunice (feb 2022)** brak record-windkracht.\n\n**Luchtdruk** 📈:\n• Lucht heeft gewicht — drukt op alles.\n• Op zeeniveau: ~1013 hPa.\n• Hoog in bergen: minder lucht boven, dus minder druk.\n• Mt. Everest: ~330 hPa *(1/3 van zee)*.\n\n**Hoge druk** *(H)*:\n• Lucht zakt naar beneden.\n• Verwarmt → wolken oplossen.\n• → **goed weer**.\n\n**Lage druk** *(L)*:\n• Lucht stijgt.\n• Koelt af → wolken vormen.\n• → **slecht weer + regen**.\n\nWeerkaart: H = hoge druk, L = lage druk. Tussen H + L = wind.\n\n**Fronts** *(grenzen tussen luchtsoorten)*:\n• **Warmtefront**: warme lucht schuift over koude. → regen.\n• **Koufront**: koude lucht duwt warme weg. → buien + storm.\n• **Occlusiefront**: combinatie.\n\n**Onweer + bliksem** ⚡:\n• Cumulonimbus-wolken.\n• Druppels + ijskristallen wrijven tegen elkaar → **elektrische lading**.\n• Lading wordt te groot → **bliksem** *(ontlading)*.\n• Donder = geluid van plotse opwarming-koeling lucht.\n\n**Wat te doen bij onweer?**\n• Binnen blijven *(huis, auto).\n• Niet onder boom *(bliksem treft hoge dingen).\n• Bij in tent: laat zo'n diep mogelijk.\n• Niet zwemmen / douchen *(bliksem via water/pijpen)*.\n\n**Afstand bliksem berekenen**:\nFlits → tel seconden tot donder → deel door 3 = km afstand.\n*(geluid =* 343 m/s, ~3 sec per km).\n\n**Tornado** in NL:\n• ~10-15 per jaar.\n• Klein meestal — niet zoals VS-tornado's.\n• Beste binnen blijven.\n\n**Cito-feitje**:\nDe wind in NL waait **op zee gemiddeld 7-8 m/s**, in **dorpen 3-4 m/s** *(huizen + bomen remmen wind af)*. Daarom staan windmolens vooral aan **zee** of in **open vlakte**.",
    checks: [
      {
        q: "Waaruit komt **wind**?",
        options: ["Drukverschil + opwarming", "Magie", "Vulkaan", "Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet primair.", "Wel."],
      },
      {
        q: "Meest voorkomende **windrichting NL**?",
        options: ["Zuidwesten", "Noorden", "Oosten", "Zuiden"],
        answer: 0,
        wrongHints: [null, "Klopt — 60%.", "Niet.", "Vooral droog.", "Niet primair."],
      },
      {
        q: "Wat is **Beaufort 12**?",
        options: ["Orkaan (>32 m/s)", "Windstil", "Matig", "Sneeuwstorm"],
        answer: 0,
        wrongHints: [null, "Klopt — bijna nooit NL.", "0.", "3-5.", "Wel zwaar weer."],
      },
      {
        q: "Hoge druk (H) = ?",
        options: ["Goed weer", "Regen", "Wind", "Onweer"],
        answer: 0,
        wrongHints: [null, "Klopt — wolken lossen op.", "Lage druk.", "Niet primair.", "Lage druk."],
      },
    ],
  },
  {
    title: "Voorspellen weer + KNMI",
    explanation:
      "Weersvoorspelling = **wetenschap** + **technologie**.\n\n**KNMI** *(Koninklijk Nederlands Meteorologisch Instituut)*:\n• Opgericht **1854**.\n• Hoofdkwartier in **De Bilt** *(Utrecht)*.\n• Voorspelt weer voor NL.\n• Geeft **weeralarmen** *(code geel/oranje/rood)*.\n• Onderzoekt klimaat.\n• Internationale samenwerking *(EU-weerservices)*.\n\n**Hoe wordt weer voorspeld?**\n\n**1. Meten** 📡:\n• **Weerstations** op grond *(temperatuur, regen, wind)*.\n• **Weerballonnen** *(2x per dag opgelaten, hoog in atmosfeer)*.\n• **Vliegtuigen** verzamelen data.\n• **Boeien** op zee.\n• **Satellieten** *(volgen wolken vanuit ruimte)*.\n• **Radar** *(detecteert neerslag, bewegingen)*.\n\n**2. Computermodellen** 💻:\n• Supercomputers berekenen wat lucht gaat doen.\n• Gebruik van **fysica-formules** *(thermodynamica, vloeistofdynamica)*.\n• Belangrijke modellen: **ECMWF** *(EU)*, **GFS** *(VS)*, **HARMONIE** *(NL)*.\n• Modellen draaien meerdere keren per dag.\n• Geven verschillende mogelijkheden *(ensemble)*.\n\n**3. Interpreteren** 🔍:\n• Meteorologen kijken naar modellen.\n• Kennis + ervaring nodig.\n• Beste voorspelling kiezen.\n• Maken weerkaart + tekst.\n\n**Hoe ver kunnen we vooruit?**\n• **1-3 dagen**: heel betrouwbaar *(>90% goed)*.\n• **4-7 dagen**: redelijk *(70% goed)*.\n• **8-14 dagen**: alleen trends *(<50%)*.\n• **>2 weken**: bijna onmogelijk *(klimaat-statistiek)*.\n\nWaarom niet langer? Atmosfeer = **chaotisch systeem** *('vlindereffect')*.\nKleine fout → groeit snel uit.\n\n**Weerkaart leestips**:\n• **L** = lage druk *(slecht weer)*.\n• **H** = hoge druk *(goed weer)*.\n• **Isobaren** *(lijnen)* = gelijke druk.\n• Veel isobaren bij elkaar = harde wind.\n• **Driehoeken op lijn**: koufront.\n• **Halve cirkels op lijn**: warmtefront.\n• **Cijfers**: temperatuur of druk.\n\n**Beroemde NL-weerpresentatoren**:\n• Helga van Leur, Reinier van den Berg, Diana Woei.\n• KNMI-meteorologen op TV.\n\n**Weer-apps**:\n• Buienradar *(NL)*.\n• Weeronline.\n• Buienalarm.\n• KNMI-app.\n• Windy.com *(wereldwijd, mooi visueel)*.\n\n**Extreem weer wereldwijd** 🌪️:\n\n**Orkanen / typhoons** *(tropische cyclonen)*:\n• Boven warme zee *(>26°C)*.\n• Wind > 119 km/u.\n• In Caraïben: orkanen.\n• In Pacific Azië: typhoons.\n• In Indische Oceaan: cyclonen.\n\n**Tornado's**:\n• Vooral in 'tornado-gang' VS *(Texas-Kansas)*.\n• Trechtervormige wervelwind.\n• Wind tot 500 km/u.\n• Schaal **F0-F5**.\n\n**Hittegolf**:\n• 5+ dagen >25°C in NL.\n• 3+ dagen >30°C.\n• Vaker door klimaatverandering.\n\n**Droogte**:\n• Lange tijd zonder regen.\n• Boer + natuur lijden.\n\n**Overstroming**:\n• Te veel water *(rivier, regen, zee)*.\n• Limburg 2021 + verleden Watersnoodramp.\n\n**Klimaatverandering** verandert weer:\n• Meer extremen *(droogte + overstroming + hitte)*.\n• Hogere zeespiegel.\n• Veranderde windpatronen.\n\n**Cito-feitje**:\nDe NL-weervoorspelling werd in **1860** voor het eerst publiek gemaakt. Voor dat: alleen voor zeevaart. Nu krijgen we weer-updates **elke 10 minuten** via apps + radar.",
    checks: [
      {
        q: "Wat is **KNMI**?",
        options: ["NL-weerinstituut (De Bilt)", "Belasting", "Sport", "School"],
        answer: 0,
        wrongHints: [null, "Klopt — sinds 1854.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wat zijn **isobaren**?",
        options: ["Lijnen van gelijke luchtdruk", "Temperatuur", "Wind", "Wolken"],
        answer: 0,
        wrongHints: [null, "Klopt — op weerkaart.", "Iso-thermen.", "Niet primair.", "Niet specifiek."],
      },
      {
        q: "Hoe **betrouwbaar** weersvoorspelling 1-3 dagen?",
        options: ["~90%", "10%", "Onmogelijk", "100%"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Wel mogelijk.", "Nooit 100%."],
      },
      {
        q: "Wat is **tropische cyclon** in Caraiben?",
        options: ["Orkaan", "Typhoon", "Storm", "Tornado"],
        answer: 0,
        wrongHints: [null, "Klopt — naam-verschil per regio.", "Pacific.", "Algemeen.", "Anders."],
      },
    ],
  },
  {
    title: "Eind-toets — weer mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Weer vs klimaat**: weer = ?", options: ["Nu / vandaag", "Gemiddelde jaren", "Geen verschil", "Niet bekend"], answer: 0, wrongHints: [null, "Klopt.", "Klimaat.", "Wel.", "Wel."] },
      { q: "**KNMI** zit in?", options: ["De Bilt", "Den Haag", "Amsterdam", "Rotterdam"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."] },
      { q: "**Hoge druk (H)** = ?", options: ["Goed weer", "Regen", "Storm", "Onweer"], answer: 0, wrongHints: [null, "Klopt.", "Lage druk.", "Wind.", "Lage druk."] },
      { q: "**Beaufort 12** = ?", options: ["Orkaan (>32 m/s)", "Windstil", "Matige wind", "Sneeuwstorm"], answer: 0, wrongHints: [null, "Klopt.", "0.", "5.", "Niet specifiek."] },
      { q: "**Eenheid neerslag**?", options: ["mm", "kg", "graden", "m³"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Temp.", "Niet."] },
      { q: "Hoe lang **vooruit voorspellen**?", options: ["~7 dagen redelijk", "1 maand exact", "1 jaar", "Niet mogelijk"], answer: 0, wrongHints: [null, "Klopt.", "Onmogelijk.", "Onmogelijk.", "Wel."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const weersvoorspellingPo = {
  id: "weersvoorspelling-po",
  title: "Weer + weersvoorspelling (Cito groep 6-8)",
  emoji: "🌤️",
  level: "groep6-8",
  subject: "wereldorientatie",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek / aardrijkskunde",
  prerequisites: [
    { id: "waterkringloop-po", title: "Waterkringloop", niveau: "1F" },
  ],
  intro:
    "Weer voor Cito groep 6-8 — wat is weer (temperatuur/neerslag/wind/druk) + wind + luchtdruk + onweer/bliksem + KNMI in De Bilt + voorspellen via radar/satelliet/computermodellen + weerkaart-symbolen + extreem weer (orkaan/tornado/hittegolf). Sluit op water-kringloop. ~15 min.",
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

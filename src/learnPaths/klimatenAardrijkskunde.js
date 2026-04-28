// Leerpad: Klimaten en klimaatzones — Aardrijkskunde onderbouw VO
// 10 stappen in 4 hoofdstukken (A t/m D).

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  trop: "#43a047", subtrop: "#fbc02d", gematigd: "#42a5f5",
  landkl: "#8d6e63", pool: "#90caf9", hoog: "#ce93d8",
};

const stepEmojis = ["☀️", "🌐", "🌴", "🏜️", "🍂", "🌾", "🧊", "⛰️", "🌡️", "🏆"];

const chapters = [
  { letter: "A", title: "Klimaat — wat is het?", emoji: "☀️", from: 0, to: 1 },
  { letter: "B", title: "De klimaatzones", emoji: "🌐", from: 2, to: 7 },
  { letter: "C", title: "Klimaatverandering", emoji: "🌡️", from: 8, to: 8 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 9, to: 9 },
];

const steps = [
  {
    title: "Weer of klimaat? — verschil",
    explanation: "**Weer** is hoe het *vandaag* of *deze week* is — zon, regen, wind, temperatuur op één moment. Het verandert constant.\n\n**Klimaat** is het **gemiddelde weer** over een lange periode (minstens 30 jaar) op een plek. Het zegt iets over wat je kunt verwachten.\n\n**Voorbeelden**:\n• 'Vandaag regent het in Amsterdam' → **weer**.\n• 'Nederland heeft een gematigd zeeklimaat' → **klimaat**.\n• 'Het is 25 °C in juli' → weer (één meting).\n• 'In juli is het in Spanje gemiddeld 30 °C' → klimaat.\n\nMeteorologen kijken naar weer (vandaag, morgen). Klimatologen kijken naar klimaat (lange tijd, patronen).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="120" height="120" rx="10" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="80" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">WEER</text>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vandaag</text>
<text x="80" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">deze week</text>
<text x="80" y="124" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">verandert snel</text>
<rect x="160" y="30" width="120" height="120" rx="10" fill="rgba(66,165,245,0.10)" stroke="${COLORS.gematigd}" stroke-width="2"/>
<text x="220" y="55" text-anchor="middle" fill="${COLORS.gematigd}" font-size="13" font-family="Arial" font-weight="bold">KLIMAAT</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">gemiddelde</text>
<text x="220" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">≥ 30 jaar</text>
<text x="220" y="124" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">verandert langzaam</text>
</svg>`,
    checks: [
      {
        q: "Wat is klimaat?",
        options: [
          "Het gemiddelde weer over minstens 30 jaar",
          "Het weer van vandaag",
          "De temperatuur op één plek nu",
          "De voorspelling voor morgen",
        ],
        answer: 0,
        wrongHints: [null, "Dat is weer.", "Eén meting, dat is weer.", "Voorspelling = weer, niet klimaat."],
      },
      {
        q: "Welke uitspraak gaat over **klimaat**?",
        options: [
          "Italië heeft warme zomers en milde winters",
          "Het regent nu in Rome",
          "Morgen wordt het 18 °C",
          "Vandaag is het zonnig",
        ],
        answer: 0,
        wrongHints: [null, "Eén moment = weer.", "Voorspelling = weer.", "Eén dag = weer."],
      },
    ],
  },
  {
    title: "Hoe ontstaan klimaten? — de zon",
    explanation: "Klimaten ontstaan vooral door de **zon**. Maar de zon schijnt niet overal even sterk.\n\n**Hoe verder van de evenaar, hoe minder zonkracht** — om twee redenen:\n1. **Schuine inval**: bij de polen valt het zonlicht onder een steile hoek → het verspreidt zich over een groter oppervlak en is dus minder sterk per m².\n2. **Lange weg door de atmosfeer**: licht moet daar verder door de atmosfeer, en verliest meer energie.\n\nDaardoor zijn er drie hoofdgroepen:\n• Bij de **evenaar** (0° breedte): heel warm — *tropisch klimaat*.\n• Tussen evenaar en polen (~25°-65°): lekker temperatuurverschil — *gematigd klimaat*.\n• Bij de **polen** (90°): heel koud — *poolklimaat*.\n\nNaast de zon spelen ook **zee/oceaan** (verzacht het klimaat) en **hoogte** (hoe hoger, hoe kouder) een rol.",
    svg: `<svg viewBox="0 0 300 200">
<circle cx="150" cy="100" r="70" fill="${COLORS.gematigd}" opacity="0.25" stroke="${COLORS.gematigd}" stroke-width="2"/>
<line x1="80" y1="100" x2="220" y2="100" stroke="${COLORS.warm}" stroke-width="1" stroke-dasharray="3"/>
<text x="225" y="105" fill="${COLORS.warm}" font-size="10" font-family="Arial">evenaar</text>
<rect x="80" y="92" width="140" height="16" fill="${COLORS.trop}" opacity="0.4"/>
<text x="150" y="104" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">tropisch</text>
<rect x="100" y="60" width="100" height="12" fill="${COLORS.gematigd}" opacity="0.5"/>
<rect x="100" y="128" width="100" height="12" fill="${COLORS.gematigd}" opacity="0.5"/>
<text x="150" y="69" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">gematigd</text>
<text x="150" y="137" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">gematigd</text>
<rect x="120" y="35" width="60" height="10" fill="${COLORS.pool}" opacity="0.6"/>
<rect x="120" y="155" width="60" height="10" fill="${COLORS.pool}" opacity="0.6"/>
<text x="150" y="42" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">pool</text>
<text x="150" y="163" text-anchor="middle" fill="#fff" font-size="8" font-family="Arial">pool</text>
</svg>`,
    checks: [
      {
        q: "Waar is de zonkracht het grootst?",
        options: ["Bij de evenaar", "Bij de Noordpool", "Bij de Zuidpool", "Op grote hoogte"],
        answer: 0,
        wrongHints: [null, "Pool = schuine zoninval = minder warmte.", "Zelfde verhaal — pool = koud.", "Hoogte = juist kouder."],
      },
      {
        q: "Waarom is het bij de polen zo koud?",
        options: [
          "Zonlicht valt schuin in en verspreidt over groter oppervlak",
          "De polen staan dichter bij de zon",
          "Er is geen atmosfeer",
          "Daar regent het altijd",
        ],
        answer: 0,
        wrongHints: [null, "Polen staan juist niet dichterbij — afstand maakt nauwelijks verschil.", "Er is wél atmosfeer.", "Polen zijn juist droog."],
      },
    ],
  },
  {
    title: "Tropisch klimaat (A)",
    explanation: "**Ligging**: rond de evenaar, tussen ~23° NB en 23° ZB.\n\n**Kenmerken**:\n• Het hele jaar **warm** (≥ 18 °C, vaak 25-30 °C).\n• Geen seizoenen zoals wij die kennen.\n• Veel **regen** — er bestaat geen droge winter.\n\n**Subtypes**:\n• **Tropisch regenwoud (Af)**: het hele jaar warm én nat. *Voorbeelden: Amazonegebied, Congo.*\n• **Savanne (Aw)**: warm met een **droge** en een **natte** tijd. Grasvlaktes met losse bomen. *Voorbeelden: groot deel van Afrika, India.*\n\n**Wat groeit er?**\n• Regenwoud: enorme bomen, lianen, tropische dieren.\n• Savanne: gras, acacia's, leeuwen, zebra's, olifanten.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.trop}" opacity="0.18" stroke="${COLORS.trop}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.trop}" font-size="14" font-family="Arial" font-weight="bold">TROPISCH 🌴</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• Warm jaar rond (≥18°C)</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Veel regen</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• Bij de evenaar</text>
</svg>`,
    checks: [
      {
        q: "Welk gebied heeft een tropisch regenwoudklimaat?",
        options: ["Amazonegebied", "Sahara", "Nederland", "Siberië"],
        answer: 0,
        wrongHints: [null, "Sahara is woestijn — bijna geen regen.", "Nederland is gematigd.", "Siberië is koud landklimaat."],
      },
      {
        q: "Wat is het verschil tussen regenwoud en savanne?",
        options: [
          "Savanne heeft een droge en natte tijd, regenwoud is altijd nat",
          "Savanne is kouder",
          "Regenwoud heeft sneeuw",
          "Savanne ligt bij de polen",
        ],
        answer: 0,
        wrongHints: [null, "Beide zijn warm.", "Sneeuw kan bijna nooit in tropisch klimaat.", "Beide liggen rond de evenaar."],
      },
    ],
  },
  {
    title: "Subtropisch / woestijnklimaat (B)",
    explanation: "**Ligging**: zone *direct boven* en *onder* de tropen (~20°-35°). Veel zon, weinig regen.\n\n**Twee belangrijke subtypes**:\n\n**B-woestijn (BW)**\n• Heel **droog** (<250 mm regen per jaar).\n• Overdag heet, 's nachts koud.\n• *Voorbeelden: Sahara, Atacama, Australische binnenland.*\n\n**B-steppe (BS)**\n• Iets meer regen dan woestijn (250-500 mm).\n• Korte grasvlaktes — geen bomen.\n• *Voorbeelden: rand van Sahara (Sahel), grote vlakten van centraal Azië.*\n\n**Mediterraan klimaat (Cs)** — een speciaal subtropisch klimaat:\n• Warme **droge** zomers, milde **natte** winters.\n• *Voorbeelden: Italië, Spanje, Griekenland, Californië.*",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.subtrop}" opacity="0.20" stroke="${COLORS.subtrop}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.subtrop}" font-size="14" font-family="Arial" font-weight="bold">SUBTROPISCH 🏜️</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• Veel zon, weinig regen</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Woestijn / steppe</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• Mediterraan = droge zomer</text>
</svg>`,
    checks: [
      {
        q: "Welk klimaat heeft Spanje?",
        options: ["Mediterraan (subtropisch)", "Tropisch regenwoud", "Poolklimaat", "Landklimaat"],
        answer: 0,
        wrongHints: [null, "Spanje ligt veel noordelijker dan de evenaar.", "Spanje is zeker niet zo koud.", "Landklimaat heeft extreme winters — Spanje heeft milde winters."],
      },
      {
        q: "Wat heeft de Sahara?",
        options: ["Woestijnklimaat", "Toendraklimaat", "Savanneklimaat", "Mediterraan klimaat"],
        answer: 0,
        wrongHints: [null, "Toendra = koud poolgebied.", "Savanne heeft natte+droge tijd; Sahara is altijd droog.", "Mediterraan heeft milde winters; Sahara is veel droger."],
      },
    ],
  },
  {
    title: "Gematigd klimaat (C) — Nederland",
    explanation: "**Ligging**: tussen ~35° en 60° breedte. Hier woont een groot deel van de wereldbevolking.\n\n**Kenmerken**:\n• Vier duidelijke **seizoenen**: lente, zomer, herfst, winter.\n• Niet extreem warm, niet extreem koud.\n• Genoeg regen, gespreid over het jaar.\n\n**Twee subtypes** belangrijk voor Nederland:\n\n**Zeeklimaat (Cfb)** — Nederland!\n• Zachte winters (>0 °C gemiddeld), koele zomers (~17 °C).\n• Het hele jaar regen.\n• Komt door de **zee** + de westenwind die zachte oceaanlucht aanvoert.\n\n**Landklimaat (Dfb)** — niet in NL\n• Verder van zee → koudere winters (-10 °C of lager) en warmere zomers (>20 °C).\n• *Voorbeelden: Polen, Oekraïne, midden van Rusland.*\n\nHet **verschil**: hoe verder van zee, hoe groter het temperatuurverschil tussen zomer en winter.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.gematigd}" opacity="0.18" stroke="${COLORS.gematigd}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.gematigd}" font-size="14" font-family="Arial" font-weight="bold">GEMATIGD 🍂</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• 4 seizoenen</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Zeeklimaat (NL): zacht</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• Landklimaat: extreem</text>
</svg>`,
    checks: [
      {
        q: "Welk klimaat heeft Nederland?",
        options: ["Gematigd zeeklimaat (Cfb)", "Tropisch", "Mediterraan", "Landklimaat"],
        answer: 0,
        wrongHints: [null, "Tropisch = bij evenaar.", "Mediterraan heeft droge zomers — NL niet.", "Landklimaat heeft veel extremere winters."],
      },
      {
        q: "Waarom is het in Nederland 's winters zo zacht?",
        options: [
          "De zee/oceaan zorgt met westenwind voor warmte",
          "Nederland ligt dicht bij de evenaar",
          "Door alle steden",
          "Er is hier veel sneeuw",
        ],
        answer: 0,
        wrongHints: [null, "Nederland ligt op ~52° NB — vrij noordelijk.", "Stedelijk effect bestaat, maar zee is veel groter.", "Sneeuw maakt het juist niet zacht."],
      },
    ],
  },
  {
    title: "Landklimaat (D) en koud klimaat",
    explanation: "**Landklimaat** ligt verder van zee. Het is **extremer**: hete zomers én koude winters.\n\n**Kenmerken**:\n• Grote temperatuurverschillen tussen zomer en winter.\n• Minder regen dan zeeklimaat.\n• *Voorbeelden: Polen, Rusland, midden van Canada.*\n\n**Boreaal klimaat (Dfc)** — naaldwouden:\n• Lange koude winters, korte koele zomers.\n• Naaldbomen (taiga): dennen, sparren.\n• *Voorbeelden: Siberië, Canada, Scandinavië (noordelijk deel).*\n\n**Geheugentruc**: 'Land' in landklimaat = midden in continent → ver van zee → extreem.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.landkl}" opacity="0.20" stroke="${COLORS.landkl}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.landkl}" font-size="14" font-family="Arial" font-weight="bold">LANDKLIMAAT 🌲</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• Heet in zomer, koud in winter</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Ver van zee (binnenland)</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• Naaldbossen / taiga</text>
</svg>`,
    checks: [
      {
        q: "Wat klopt over **landklimaat**?",
        options: [
          "Grote temperatuurverschillen tussen zomer en winter",
          "Constant warm",
          "Het hele jaar koud",
          "Veel regen, vooral 's winters",
        ],
        answer: 0,
        wrongHints: [null, "Constant warm = tropisch.", "Hele jaar koud = pool.", "Veel regen + zachte winter = zeeklimaat."],
      },
      {
        q: "Waar vind je een landklimaat?",
        options: ["Centraal Rusland", "Nederland", "Brazilië", "Egypte"],
        answer: 0,
        wrongHints: [null, "Nederland = zeeklimaat.", "Brazilië = tropisch/savanne.", "Egypte = woestijnklimaat."],
      },
    ],
  },
  {
    title: "Poolklimaat (E)",
    explanation: "**Ligging**: bij de **Noord- en Zuidpool**, en hoge breedten (boven 65°).\n\n**Kenmerken**:\n• Heel **koud**. De warmste maand komt zelden boven de 10 °C.\n• Bijna geen regen — meeste neerslag valt als sneeuw.\n• Vaak permanent ijs of bevroren bodem (**permafrost**).\n\n**Twee subtypes**:\n\n**Toendraklimaat (ET)**\n• Korte zomer waarin er nog korte vegetatie groeit (mossen, gras).\n• *Voorbeelden: Noord-Siberië, noordelijk Canada, IJsland, delen van Groenland.*\n\n**IJsklimaat (EF)**\n• Het hele jaar onder 0 °C — alleen ijs.\n• *Voorbeelden: Antarctica, midden van Groenland.*\n\n**Wie woont er?** Vrijwel niemand in de ijskap. In toendragebieden leven volken zoals de Inuit.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="30" width="260" height="120" rx="10" fill="${COLORS.pool}" opacity="0.20" stroke="${COLORS.pool}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.pool}" font-size="14" font-family="Arial" font-weight="bold">POOLKLIMAAT 🧊</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="12" font-family="Arial">• Heel koud (≤10°C zomer)</text>
<text x="40" y="110" fill="${COLORS.text}" font-size="12" font-family="Arial">• Toendra: mossen, korte zomer</text>
<text x="40" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">• IJskap: altijd onder 0°C</text>
</svg>`,
    checks: [
      {
        q: "Wat is **permafrost**?",
        options: [
          "Bodem die altijd bevroren is",
          "Een soort sneeuwvlok",
          "Een berg op de pool",
          "Een ijsbeer",
        ],
        answer: 0,
        wrongHints: [null, "Permafrost is een bodemkenmerk.", "Niets met bergen.", "Een dier — niet de bodem."],
      },
      {
        q: "Welk gebied heeft een ijsklimaat?",
        options: ["Antarctica", "Sahara", "Spanje", "Brazilië"],
        answer: 0,
        wrongHints: [null, "Sahara = woestijn (heet!).", "Spanje = mediterraan.", "Brazilië = tropisch."],
      },
    ],
  },
  {
    title: "Hoogteklimaat — bergen",
    explanation: "**Hoe hoger je komt, hoe kouder het wordt** — gemiddeld zo'n **0,6 °C kouder per 100 meter** stijging.\n\nDaarom kan het op een berg in een tropisch land toch vriezen op de top — denk aan **Kilimanjaro** (Tanzania, op de evenaar, maar 5895 m hoog → besneeuwde top).\n\n**Verticale klimaatzones** in een berg:\n• Onderaan: het lokale klimaat (bv. tropisch).\n• Hoger: gematigd, dan koud, dan eeuwige sneeuw.\n\n**Voorbeelden**:\n• Andes (Zuid-Amerika).\n• Himalaya (Mount Everest, 8848 m — eeuwig ijs).\n• Alpen (Europa).\n\n**Praktisch**: bergvolkeren leven op verschillende hoogten en passen wat ze verbouwen aan op de hoogte (mais beneden, aardappel midden, lama's hoog).",
    svg: `<svg viewBox="0 0 300 180">
<polygon points="40,150 150,30 260,150" fill="${COLORS.hoog}" opacity="0.30" stroke="${COLORS.hoog}" stroke-width="2"/>
<rect x="40" y="120" width="220" height="30" fill="${COLORS.trop}" opacity="0.4"/>
<text x="150" y="140" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">tropisch / gematigd (laag)</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">koud (midden)</text>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.pool}" font-size="11" font-family="Arial" font-weight="bold">eeuwige sneeuw 🏔️</text>
<text x="20" y="90" fill="${COLORS.muted}" font-size="9" font-family="Arial">↑ 0,6°C kouder/100m</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel kouder wordt het ongeveer per 100 m hoogte?",
        options: ["0,6 °C", "10 °C", "0,01 °C", "Het wordt warmer"],
        answer: 0,
        wrongHints: [null, "Veel te veel — dan zou alles boven 1 km al bevroren zijn.", "Veel te weinig — dan zou hoogte nauwelijks effect hebben.", "Hoogte = juist kouder, niet warmer."],
      },
      {
        q: "Hoe kan er sneeuw liggen op de Kilimanjaro, terwijl die op de evenaar staat?",
        options: [
          "Hoogte zorgt dat het toch koud wordt",
          "Hij ligt in Antarctica",
          "Het is een vulkaan",
          "Klimaatverandering smelt dat",
        ],
        answer: 0,
        wrongHints: [null, "Hij staat in Tanzania, niet Antarctica.", "Vulkaan ja, maar dat geeft niet sneeuw.", "Het smelt inderdaad — maar dat verklaart niet waarom er ooit sneeuw lág."],
      },
    ],
  },

  // C
  {
    title: "Klimaatverandering — wat gebeurt er?",
    explanation: "Het wereldklimaat **verandert**: gemiddeld is het de laatste 150 jaar ~1,2 °C warmer geworden — vooral door menselijk gedrag.\n\n**Oorzaak**: **broeikasgassen** (CO₂, methaan) blijven in de atmosfeer en houden warmte vast (broeikaseffect). Bronnen:\n• Fossiele brandstoffen (kolen, olie, gas) verbranden voor energie en transport.\n• Ontbossing.\n• Veeteelt (koeien stoten methaan uit).\n\n**Gevolgen**:\n• Smelten van **gletsjers en poolijs** → **zeespiegelstijging**.\n• Meer **extreem weer**: hittegolven, zware buien, droogtes, bosbranden.\n• Klimaatzones schuiven op (gematigd wordt warmer; mediterraan wordt droger).\n• Soorten dreigen uit te sterven door verandering van leefomgeving.\n\n**Wat helpt**:\n• Minder fossiel, meer zon/wind.\n• Bossen herstellen.\n• Energie besparen.\n• Internationale afspraken (**Akkoord van Parijs**, 2015): doel max 1,5-2 °C opwarming.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="20" width="260" height="50" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">🌡️ +1,2°C (sinds 1850)</text>
<text x="150" y="58" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">door broeikasgassen (CO₂, methaan)</text>
<text x="20" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">• zeespiegel stijgt</text>
<text x="20" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">• extreem weer (hitte, droogte)</text>
<text x="20" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">• klimaatzones schuiven op</text>
<text x="20" y="160" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Akkoord van Parijs (2015): max 1,5°C</text>
</svg>`,
    checks: [
      {
        q: "Wat is de hoofdoorzaak van klimaatverandering?",
        options: [
          "Uitstoot van broeikasgassen door mensen",
          "Vulkanen",
          "De aarde draait sneller",
          "De zon is heter geworden",
        ],
        answer: 0,
        wrongHints: [null, "Vulkanen stoten ook iets uit, maar veel minder dan menselijke uitstoot.", "Aarde draait niet sneller.", "Zon-uitstraling is vrijwel constant gebleven."],
      },
      {
        q: "Wat is een gevolg van klimaatverandering?",
        options: [
          "Zeespiegel stijgt door smeltend ijs",
          "Maan wordt groter",
          "Aarde wordt platter",
          "Er komen meer dinosauriërs",
        ],
        answer: 0,
        wrongHints: [null, "Maan blijft hetzelfde.", "Onzin.", "Onzin."],
      },
    ],
  },

  {
    title: "Eindopdracht — klimaat herkennen",
    explanation: "Tijd om alles toe te passen. Bij elke beschrijving: welk klimaat is het?\n\n**Snelle samenvatting**:\n\n| Klimaat | Kenmerk | Voorbeeld |\n|---|---|---|\n| Tropisch (A) | Warm, veel regen, bij evenaar | Brazilië, Congo |\n| Subtropisch (B) | Veel zon, weinig regen, woestijn | Sahara, Spanje (mediterraan) |\n| Gematigd (C) | 4 seizoenen, zacht | Nederland (zee), Polen (land) |\n| Koud / pool (E) | Heel koud, weinig groei | Antarctica, IJsland |\n| Hoogte (H) | Koud door hoogte | Andes, Himalaya |\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">A B C D E + H</text>
<text x="20" y="50" fill="${COLORS.trop}" font-size="11" font-family="Arial">A = tropisch (evenaar)</text>
<text x="20" y="70" fill="${COLORS.subtrop}" font-size="11" font-family="Arial">B = woestijn / mediterraan</text>
<text x="20" y="90" fill="${COLORS.gematigd}" font-size="11" font-family="Arial">C = gematigd (NL!)</text>
<text x="20" y="110" fill="${COLORS.landkl}" font-size="11" font-family="Arial">D = landklimaat</text>
<text x="20" y="130" fill="${COLORS.pool}" font-size="11" font-family="Arial">E = pool (heel koud)</text>
<text x="20" y="150" fill="${COLORS.hoog}" font-size="11" font-family="Arial">H = hoogte (bergen)</text>
</svg>`,
    checks: [
      {
        q: "Welk klimaat: \"Het hele jaar warm, veel regen, ligt rond de evenaar\"?",
        options: ["Tropisch regenwoud (A)", "Mediterraan (B)", "Gematigd zeeklimaat (C)", "Toendra (E)"],
        answer: 0,
        wrongHints: [null, "Mediterraan heeft droge zomers.", "Gematigd is niet 'het hele jaar warm'.", "Toendra is heel koud."],
      },
      {
        q: "Welk klimaat: \"Vier seizoenen, zachte winters, regen door het hele jaar\"?",
        options: ["Gematigd zeeklimaat (Cfb)", "Tropisch", "Woestijn", "IJsklimaat"],
        answer: 0,
        wrongHints: [null, "Tropisch heeft geen seizoenen.", "Woestijn = bijna geen regen.", "IJsklimaat = onder 0°C."],
      },
      {
        q: "Welk klimaat: \"Heel droog, overdag heet, 's nachts koud\"?",
        options: ["Woestijnklimaat (BW)", "Gematigd", "Tropisch regenwoud", "Toendra"],
        answer: 0,
        wrongHints: [null, "Gematigd heeft niet zulke extreme dag/nacht-verschillen.", "Regenwoud is altijd nat.", "Toendra is gewoon koud, niet 's nachts ijskoud / overdag heet."],
      },
      {
        q: "Welk klimaat heeft Centraal Rusland?",
        options: ["Landklimaat (D)", "Mediterraan (B)", "Tropisch (A)", "Hoogteklimaat (H)"],
        answer: 0,
        wrongHints: [null, "Mediterraan ligt langs de zee, in het Zuiden.", "Tropisch = bij evenaar.", "Centraal Rusland is grotendeels vlak."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const klimatenAardrijkskunde = {
  id: "klimaten-aardrijkskunde",
  title: "Klimaten en klimaatzones",
  emoji: "🌍",
  level: "klas1-3",
  subject: "aardrijkskunde",
  intro:
    "Het verschil tussen weer en klimaat, hoe klimaatzones ontstaan door zon en zee, de 5 hoofdklimaten (A-E) plus hoogteklimaat, met klimaatverandering tot slot. Eerste pad aardrijkskunde onderbouw.",
  triggerKeywords: [
    "klimaat", "klimaten", "klimaatzone", "klimaatzones",
    "weer", "weer en klimaat",
    "tropisch", "regenwoud", "savanne",
    "subtropisch", "woestijn", "mediterraan",
    "gematigd", "zeeklimaat", "landklimaat",
    "polen", "toendra", "permafrost", "ijsklimaat",
    "hoogteklimaat", "kilimanjaro",
    "klimaatverandering", "broeikaseffect", "CO2", "akkoord van parijs",
    "evenaar", "breedtegraad",
  ],
  chapters,
  steps,
};

export default klimatenAardrijkskunde;

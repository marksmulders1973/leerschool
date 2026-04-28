// Leerpad: De stelling van Pythagoras — H6 Wiskunde Flex deel 2 (klas 2)
// 13 stappen, 5 hoofdstukken, op basisniveau.

const COLORS = {
  axis: "#e0e6f0",
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = [
  "📐", "🔻", "📏",                  // A. Rechthoekige driehoeken
  "🟰", "🔢", "🎯",                  // B. De stelling
  "📤", "✏️", "🧮",                   // C. Schuine zijde uitrekenen
  "📥", "🔄",                        // D. Rechthoekszijde uitrekenen
  "📦", "🏁",                        // E. 3D + eindopdracht
];

const chapters = [
  { letter: "A", title: "Rechthoekige driehoeken", emoji: "📐", from: 0, to: 2 },
  { letter: "B", title: "De stelling van Pythagoras", emoji: "🟰", from: 3, to: 5 },
  { letter: "C", title: "De schuine zijde berekenen", emoji: "📤", from: 6, to: 8 },
  { letter: "D", title: "Een rechthoekszijde berekenen", emoji: "📥", from: 9, to: 10 },
  { letter: "E", title: "Pythagoras in 3D + eindopdracht", emoji: "📦", from: 11, to: 12 },
];

const steps = [
  // ─── A. Rechthoekige driehoeken ────────────────────────────
  {
    title: "Wat is een rechthoekige driehoek?",
    explanation: "Een **rechthoekige driehoek** is een driehoek met **één rechte hoek** (een hoek van 90°).\n\nEen rechte hoek herken je aan het **vierkantje** in de hoek (zie plaatje).\n\nDe andere twee hoeken samen zijn ook 90° (want alle hoeken samen zijn altijd 180°). Dus de twee niet-rechte hoeken zijn altijd **scherp** (kleiner dan 90°).\n\nVoorbeelden in het echt:\n• De hoek tussen vloer en muur\n• De hoek van een vierkant of rechthoek\n• Het gat tussen een ladder en de grond\n\nIn dit hoofdstuk werken we **alleen** met rechthoekige driehoeken — Pythagoras werkt niet bij andere driehoeken.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 220,160 60,40" fill="rgba(0,200,83,0.15)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<rect x="60" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="40" y="155" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">90°</text>
<text x="62" y="35" fill="${COLORS.text}" font-size="11" font-family="Arial">scherp</text>
<text x="190" y="178" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">scherp</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">het vierkantje markeert de rechte hoek</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel rechte hoeken heeft een rechthoekige driehoek?",
        options: ["1", "2", "3", "0"],
        answer: 0,
        wrongHints: [
          null,
          "Twee rechte hoeken zou samen 180° zijn — dan is er geen ruimte meer voor de derde hoek.",
          "Drie rechte hoeken samen is 270°. Maar alle hoeken van een driehoek zijn samen 180°. Dat past niet.",
          "Bij 0 rechte hoeken is het geen rechthoekige driehoek. De definitie zegt: 1 rechte hoek.",
        ],
      },
    ],
  },
  {
    title: "De zijden hebben namen",
    explanation: "In een rechthoekige driehoek hebben de zijden namen:\n\n• De twee zijden bij de rechte hoek heten **rechthoekszijden** (ook wel 'rechte zijden').\n• De zijde **tegenover** de rechte hoek heet de **schuine zijde** (in het Engels: hypotenuse, in het Nederlands ook wel 'hypotenusa').\n\nIn formules gebruiken we vaak letters:\n• **a** en **b** = de rechthoekszijden\n• **c** = de schuine zijde\n\n**Belangrijk**: de schuine zijde is **altijd de langste** zijde van de driehoek. Onthoud dit — straks helpt het bij het oplossen.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="70,160 230,160 70,50" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<rect x="70" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">a</text>
<text x="150" y="193" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">rechthoekszijde</text>
<text x="55" y="110" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">b</text>
<text x="40" y="125" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">recht-</text>
<text x="40" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">hoekszijde</text>
<text x="170" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">c</text>
<text x="195" y="115" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">schuine zijde</text>
<text x="195" y="128" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(tegenover 90°)</text>
</svg>`,
    checks: [
      {
        q: "Welke zijde is altijd de langste in een rechthoekige driehoek?",
        options: ["De schuine zijde", "Een rechthoekszijde", "Maakt niet uit", "De korte zijde"],
        answer: 0,
        wrongHints: [
          null,
          "Een rechthoekszijde is een van de twee zijden bij de rechte hoek. Die zijn samen kleiner dan de schuine zijde.",
          "Het maakt wél uit. Door de geometrie is de schuine zijde altijd de langste.",
          "Er is geen vaste 'korte zijde' in een rechthoekige driehoek.",
        ],
      },
    ],
  },
  {
    title: "Hoe herken je de schuine zijde?",
    explanation: "Soms staat de driehoek anders gedraaid dan in de standaard positie. Hoe herken je dan welke zijde **c** is?\n\n**Drie manieren** om de schuine zijde te vinden:\n\n1. **Tegenover de rechte hoek**: de zijde aan de overkant van het vierkantje (de rechte hoek).\n2. **De langste zijde** (in een rechthoekige driehoek).\n3. **De zijde die niet aan de rechte hoek raakt**.\n\nLet op: 'schuin' betekent niet altijd letterlijk schuin in beeld. Een verticale of horizontale lijn kan ook de schuine zijde zijn — als de rechte hoek aan de andere kant zit.\n\nKortom: zoek altijd eerst het rechte-hoek-vierkantje, en kijk wat de overkantse zijde is.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="40,150 130,150 40,60" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2"/>
<rect x="40" y="132" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<line x1="130" y1="150" x2="40" y2="60" stroke="${COLORS.point}" stroke-width="3"/>
<text x="100" y="95" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">c</text>
<polygon points="170,40 270,40 270,160" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2"/>
<rect x="252" y="40" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<line x1="170" y1="40" x2="270" y2="160" stroke="${COLORS.point}" stroke-width="3"/>
<text x="200" y="105" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">c</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">de schuine zijde (geel) ligt tegenover de rechte hoek</text>
</svg>`,
    checks: [
      {
        q: "Hoe weet je zeker welke zijde de schuine is?",
        options: [
          "Het is de zijde tegenover de rechte hoek",
          "Het is altijd de bovenste zijde",
          "Het is de zijde links",
          "Maakt niet uit, ze zijn gelijk",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De positie 'boven' hangt af van hoe de driehoek getekend is. De schuine zijde definieer je via de rechte hoek.",
          "Zelfde verhaal — links/rechts hangt van de tekening af. Definieer via de rechte hoek.",
          "In een rechthoekige driehoek zijn de zijden zelden gelijk; de schuine is bovendien altijd de langste.",
        ],
      },
    ],
  },

  // ─── B. De stelling ────────────────────────────
  {
    title: "De stelling van Pythagoras",
    explanation: "De **stelling van Pythagoras** zegt iets bijzonders over rechthoekige driehoeken:\n\n**a² + b² = c²**\n\nIn woorden: de **twee rechthoekszijden in het kwadraat opgeteld** geven hetzelfde als **de schuine zijde in het kwadraat**.\n\nVoorbeeld: een driehoek met a = 3, b = 4. Wat is c?\n• a² + b² = c²\n• 3² + 4² = c²\n• 9 + 16 = c²\n• 25 = c²\n• c = √25 = **5**\n\nDus c = 5. Dit heet de '3-4-5'-driehoek — bekend voorbeeld.\n\nDe stelling is ruim 2500 jaar oud en vernoemd naar de Griekse wiskundige Pythagoras. Hij werkt **alleen** bij rechthoekige driehoeken.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="80,160 200,160 80,70" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<rect x="80" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="140" y="178" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">a = 4</text>
<text x="65" y="115" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">b = 3</text>
<text x="155" y="105" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">c = ?</text>
<text x="240" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">a² + b² = c²</text>
<text x="240" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">3² + 4² = c²</text>
<text x="240" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">9 + 16 = 25</text>
<rect x="210" y="135" width="60" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="240" y="158" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">c = 5</text>
</svg>`,
    checks: [
      {
        q: "De stelling van Pythagoras is **a² + b² = c²**. Wat is c hier?",
        options: ["De schuine zijde", "De rechte hoek", "Een rechthoekszijde", "De oppervlakte"],
        answer: 0,
        wrongHints: [
          null,
          "De rechte hoek is een hoek (90°), geen zijde. c is een zijde — namelijk de schuine.",
          "a en b zijn de rechthoekszijden. c is de overgebleven — de schuine.",
          "c² is de schuine zijde in het kwadraat (oppervlakte van een vierkant), maar c zelf is de zijde.",
        ],
      },
    ],
  },
  {
    title: "Waarom werkt het — visueel",
    explanation: "Pythagoras klinkt vreemd: kwadraten van zijden? Maar visueel klopt het.\n\nTeken een vierkant met zijde **a** vast aan zijde a — oppervlakte **a²**.\nIdem voor zijde **b** — oppervlakte **b²**.\nIdem voor de schuine zijde **c** — oppervlakte **c²**.\n\nDe stelling zegt: de **oppervlakte van het grootste vierkant** is gelijk aan de **som van de andere twee**.\n\nVoor onze 3-4-5 driehoek:\n• Vierkant op zijde 3 → oppervlakte 9\n• Vierkant op zijde 4 → oppervlakte 16\n• Vierkant op zijde 5 → oppervlakte 25\n\nEn 9 + 16 = 25 ✓.\n\nDit is honderden jaren met meetkundige tekeningen bewezen. We hoeven het niet zelf te bewijzen — we **gebruiken** het.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="120,140 180,140 120,100" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<rect x="120" y="122" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<rect x="120" y="140" width="60" height="40" fill="rgba(105,240,174,0.15)" stroke="${COLORS.curve2}" stroke-width="1.5"/>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.curve2}" font-size="11" font-family="Arial" font-weight="bold">a² = 16</text>
<rect x="80" y="100" width="40" height="40" fill="rgba(105,240,174,0.15)" stroke="${COLORS.curve2}" stroke-width="1.5"/>
<text x="100" y="125" text-anchor="middle" fill="${COLORS.curve2}" font-size="11" font-family="Arial" font-weight="bold">b² = 9</text>
<g transform="rotate(-37 120 100)">
<rect x="120" y="100" width="50" height="50" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="1.5"/>
</g>
<text x="220" y="80" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">c² = 25</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">9 + 16 = 25 ✓</text>
</svg>`,
    checks: [
      {
        q: "Een driehoek heeft a = 6 en b = 8. Wat is c² (nog niet c)?",
        options: ["100", "14", "48", "200"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 6 + 8 = 14 gedaan. Maar Pythagoras zegt: a² + b² (eerst kwadrateren).",
          "Je hebt 6 · 8 = 48 gedaan. Maar het is a² + b², niet a · b.",
          "Te groot. Reken: 6² + 8² = 36 + 64 = ?",
        ],
      },
    ],
  },
  {
    title: "Wanneer gebruik je Pythagoras?",
    explanation: "Pythagoras is je gereedschap als:\n\n1. Je hebt een **rechthoekige** driehoek (eerst checken: zit er een rechte hoek?)\n2. Je weet **2 van de 3 zijden**\n3. Je wilt de **derde zijde** vinden\n\nAls deze drie kloppen, kun je Pythagoras toepassen: **a² + b² = c²**.\n\nDrie scenarios:\n\n• **Beide rechthoekszijden bekend, schuine zijde zoeken**: vul a en b in, los c op.\n• **Schuine zijde + één rechthoekszijde bekend, andere rechthoekszijde zoeken**: omschrijven en oplossen.\n• **Geen rechte hoek**: Pythagoras werkt **niet**, gebruik andere methodes (later).\n\n**Tip bij het opschrijven**: zet altijd eerst de stelling neer (a² + b² = c²), vul daarna de getallen in. Voorkomt fouten.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">stappenplan</text>
<rect x="40" y="42" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="40" y="68" fill="${COLORS.text}" font-size="12" font-family="Arial">1. Check: rechte hoek aanwezig?</text>
<text x="40" y="92" fill="${COLORS.text}" font-size="12" font-family="Arial">2. Welke 2 zijden zijn bekend?</text>
<text x="40" y="116" fill="${COLORS.text}" font-size="12" font-family="Arial">3. Schrijf op: a² + b² = c²</text>
<text x="40" y="140" fill="${COLORS.text}" font-size="12" font-family="Arial">4. Vul de bekende getallen in</text>
<text x="40" y="164" fill="${COLORS.text}" font-size="12" font-family="Arial">5. Los op + neem de wortel</text>
<text x="150" y="188" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">altijd in deze volgorde</text>
</svg>`,
    checks: [
      {
        q: "Wanneer kun je Pythagoras gebruiken?",
        options: [
          "Bij een rechthoekige driehoek met 2 zijden bekend",
          "Bij elke driehoek",
          "Alleen bij gelijkbenige driehoeken",
          "Bij vierhoeken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij driehoeken zonder rechte hoek werkt Pythagoras niet. Daar gebruik je andere methodes.",
          "Gelijkbenig betekent twee zijden gelijk — dat zegt niets over of er een rechte hoek is.",
          "Pythagoras is voor driehoeken (3 zijden), niet vierhoeken.",
        ],
      },
    ],
  },

  // ─── C. Schuine zijde berekenen ────────────────────────────
  {
    title: "Voorbeeld: a = 5, b = 12",
    explanation: "**Vraag**: een rechthoekige driehoek heeft rechthoekszijden a = 5 en b = 12. Hoe lang is de schuine zijde c?\n\n**Stappen**:\n\n1. Schrijf op: **a² + b² = c²**\n2. Vul in: 5² + 12² = c²\n3. Reken kwadraten: 25 + 144 = c²\n4. Tel op: 169 = c²\n5. Wortel: c = √169 = **13**\n\nDus de schuine zijde is **13**.\n\n**Check**: 13 is groter dan 12 ✓ (schuine is langste).\n\nDeze driehoek (5-12-13) is ook een 'mooie' rechthoekige driehoek — alle zijden zijn gehele getallen. Net als 3-4-5 bestaan er meer van dit soort: 6-8-10, 8-15-17, 7-24-25.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 220,160 60,40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<rect x="60" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="140" y="178" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">a = 12</text>
<text x="45" y="105" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">b = 5</text>
<text x="155" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">c = ?</text>
<text x="245" y="55" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5² + 12²</text>
<text x="245" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">= 25 + 144</text>
<text x="245" y="101" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">= 169</text>
<rect x="220" y="118" width="55" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="247" y="140" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">c = 13</text>
</svg>`,
    checks: [
      {
        q: "Een rechthoekige driehoek heeft a = 6, b = 8. Wat is c?",
        options: ["10", "14", "100", "48"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 6 + 8 gedaan. Maar Pythagoras: kwadrateer eerst.",
          "100 is c² (= 36 + 64). Je moet nog √ toepassen om c te vinden.",
          "Je hebt 6 · 8 gedaan. Het is a² + b², geen vermenigvuldigen.",
        ],
      },
    ],
  },
  {
    title: "Stappen netjes opschrijven",
    explanation: "Bij elke Pythagoras-opgave volg je hetzelfde stappenplan. Schrijf elke stap **netjes** op — dat voorkomt fouten en je leerkracht ziet je werk.\n\n**Standaard opbouw**:\n\n```\n  a² + b² = c²\n   ?  +  ? = c²        (vul de getallen in)\n  ?? + ?? = c²        (reken de kwadraten)\n     ??? = c²        (tel op)\n      c = √???        (neem de wortel)\n      c = ?           (eindantwoord)\n```\n\nVoorbeeld voor a = 7, b = 24:\n```\n  a² + b² = c²\n  7² + 24² = c²\n  49 + 576 = c²\n     625 = c²\n      c = √625\n      c = 25\n```\n\nDeze opbouw is **niet** facultatief — leerkrachten verwachten dit zo. Geeft jou ook overzicht.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="55" y="42" fill="${COLORS.text}" font-size="13" font-family="Arial">a² + b² = c²</text>
<text x="55" y="64" fill="${COLORS.text}" font-size="13" font-family="Arial">7² + 24² = c²</text>
<text x="55" y="86" fill="${COLORS.text}" font-size="13" font-family="Arial">49 + 576 = c²</text>
<text x="55" y="108" fill="${COLORS.text}" font-size="13" font-family="Arial">625 = c²</text>
<text x="55" y="130" fill="${COLORS.text}" font-size="13" font-family="Arial">c = √625</text>
<rect x="55" y="146" width="100" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="168" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">c = 25</text>
<text x="200" y="168" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">elke stap netjes</text>
</svg>`,
    checks: [
      {
        q: "Een driehoek heeft a = 8 en b = 15. Wat is c²?",
        options: ["289", "23", "120", "529"],
        answer: 0,
        wrongHints: [
          null,
          "23 = 8 + 15. Maar je moet kwadrateren: 8² + 15² = 64 + 225.",
          "120 = 8 · 15. Pythagoras zegt a² + b², niet a · b.",
          "529 = 23². Maar de echte berekening is 8² + 15² = 64 + 225 = 289.",
        ],
      },
      {
        q: "c² = 289. Wat is c?",
        options: ["17", "144,5", "83521", "23"],
        answer: 0,
        wrongHints: [
          null,
          "144,5 = 289 / 2. Maar je zoekt √289, niet 289/2.",
          "83521 = 289². Andersom — kwadrateren ipv wortel.",
          "Probeer: 17² = 17 · 17 = 289 ✓. Dus √289 = 17.",
        ],
      },
    ],
  },
  {
    title: "Wat als de wortel niet rond is?",
    explanation: "Niet altijd komen er ronde getallen uit. Voorbeeld:\n\n**Vraag**: a = 2, b = 3. Wat is c?\n\n```\n  a² + b² = c²\n  2² + 3² = c²\n  4 + 9 = c²\n      13 = c²\n       c = √13\n```\n\nNu staat er **c = √13**. Dit getal is **irrationaal** (oneindige niet-herhalende decimaal). Je hebt twee opties:\n\n**Exact antwoord**: laat het staan als **c = √13**. Vaak vraagt je leerkracht dit.\n\n**Benadering**: gebruik je rekenmachine. √13 ≈ **3,61** (afgerond op 2 decimalen).\n\nLees in de opdracht goed: 'exact' of 'in twee decimalen' — dan weet je wat je moet doen.\n\nEen exacte uitkomst is altijd nauwkeuriger; een benadering is vaak makkelijker te interpreteren in praktijk.",
    svg: `<svg viewBox="0 0 300 200">
<text x="60" y="40" fill="${COLORS.text}" font-size="13" font-family="Arial">a² + b² = c²</text>
<text x="60" y="62" fill="${COLORS.text}" font-size="13" font-family="Arial">2² + 3² = c²</text>
<text x="60" y="84" fill="${COLORS.text}" font-size="13" font-family="Arial">13 = c²</text>
<rect x="40" y="100" width="100" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="90" y="124" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">c = √13</text>
<text x="90" y="148" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">(exact)</text>
<rect x="170" y="100" width="100" height="36" fill="rgba(255,112,67,0.18)" stroke="${COLORS.curveAlt}" stroke-width="2" rx="6"/>
<text x="220" y="124" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial" font-weight="bold">≈ 3,61</text>
<text x="220" y="148" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">(benadering)</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">lees de opdracht: exact of decimaal?</text>
</svg>`,
    checks: [
      {
        q: "a = 1, b = 2. Wat is c (exact)?",
        options: ["√5", "5", "3", "√3"],
        answer: 0,
        wrongHints: [
          null,
          "5 = c². Je moet nog √ toepassen: c = √5 (niet rond).",
          "3 = a + b. Maar Pythagoras: a² + b² = 1 + 4 = 5, dus c = √5.",
          "Reken na: 1² + 2² = 1 + 4 = 5. Dus c² = 5, en c = √5.",
        ],
      },
    ],
  },

  // ─── D. Rechthoekszijde berekenen ────────────────────────────
  {
    title: "Andersom: rechthoekszijde zoeken",
    explanation: "Soms ken je de **schuine zijde** en **één rechthoekszijde**, en moet je de andere rechthoekszijde vinden.\n\nDe stelling blijft hetzelfde:  **a² + b² = c²**\n\nMaar nu schrijf je 'm anders om. Stel je weet c en b, en je zoekt a:\n\n**a² = c² − b²**\n\n(verplaats b² naar de andere kant)\n\nDan: **a = √(c² − b²)**\n\nVoorbeeld: c = 13, b = 5. Wat is a?\n• a² = 13² − 5² = 169 − 25 = 144\n• a = √144 = **12**\n\n**Pas op**: bij het omschrijven werkt het alleen omdat c² **groter** is dan b² (de schuine zijde is altijd langer dan een rechthoekszijde). Bij een echte rechthoekige driehoek is c² − b² altijd positief.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 220,160 60,40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<rect x="60" y="142" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="140" y="178" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">a = ?</text>
<text x="45" y="105" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">b = 5</text>
<text x="155" y="100" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">c = 13</text>
<text x="240" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">a² = c² − b²</text>
<text x="240" y="73" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">= 169 − 25</text>
<text x="240" y="96" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">= 144</text>
<rect x="215" y="115" width="55" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="242" y="137" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">a = 12</text>
</svg>`,
    checks: [
      {
        q: "c = 25, b = 7. Wat is a?",
        options: ["24", "18", "32", "576"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 25 − 7 = 18 gedaan. Maar je moet eerst kwadrateren: a² = 25² − 7² = 625 − 49 = 576.",
          "Je hebt opgeteld. Bij rechthoekszijde zoeken doe je c² − b² (aftrekken).",
          "576 = a². Je moet nog √ toepassen: a = √576 = ?",
        ],
      },
    ],
  },
  {
    title: "Welke is de schuine zijde — let op!",
    explanation: "**Belangrijk**: pas op met welke zijde de schuine is. Verkeerde toewijzing = verkeerde uitkomst.\n\n**Test**: kijk naar het plaatje. Welke zijde ligt tegenover de rechte hoek? Dat is **c** (schuine zijde).\n\n**Veelgemaakte fout**: een leerling rekent klakkeloos a² + b² = c² zonder te kijken welke zijde welke is. Als een rechthoekszijde per ongeluk c² wordt genoemd, klopt de berekening niet.\n\n**Veilige aanpak**:\n1. Identificeer de **rechte hoek** (vierkantje of expliciet 90°).\n2. De zijde **tegenover** = schuine = c.\n3. De andere twee = rechthoekszijden = a en b.\n4. Pas pas dán de stelling toe.\n\nSoms staat in de opgave 'de schuine zijde is 17' of 'de hypotenusa is 10'. Dan weet je direct welke c is.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="40,150 130,150 130,50" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2"/>
<rect x="112" y="132" width="18" height="18" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="85" y="170" text-anchor="middle" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">a</text>
<text x="145" y="103" text-anchor="middle" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">b</text>
<text x="75" y="95" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">c</text>
<text x="180" y="60" fill="${COLORS.text}" font-size="11" font-family="Arial">c = schuine zijde</text>
<text x="180" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">  = tegenover 90°</text>
<rect x="170" y="100" width="110" height="60" fill="rgba(255,213,79,0.10)" stroke="${COLORS.point}" stroke-width="1.5" rx="6"/>
<text x="225" y="121" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">altijd:</text>
<text x="225" y="142" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">c² = a² + b²</text>
</svg>`,
    checks: [
      {
        q: "In een driehoek zijn de zijden 7, 24 en 25. Welke is de schuine zijde?",
        options: ["25", "24", "7", "Maakt niet uit"],
        answer: 0,
        wrongHints: [
          null,
          "24 is bijna de langste maar niet helemaal. De schuine zijde is altijd de **langste** — dus 25.",
          "7 is de kortste. De schuine zijde is altijd de langste van de drie.",
          "Het maakt wél uit. De schuine zijde is altijd de langste — hier 25.",
        ],
      },
    ],
  },

  // ─── E. Pythagoras in 3D + eindopdracht ────────────────────────────
  {
    title: "Pythagoras in 3D — diagonaal van een balk",
    explanation: "In 3D wordt het iets complexer. Stel: een balk van l × b × h. Hoe lang is de **diagonaal** van hoek tot hoek (van de ene hoek dwars door de balk naar de tegenoverliggende)?\n\n**Twee keer Pythagoras** is de truc:\n\n**Stap 1**: bereken eerst de diagonaal van het **grondvlak** (een rechthoek l × b).\n• d_grondvlak² = l² + b²\n\n**Stap 2**: het grondvlak-diagonaal en de hoogte vormen samen een nieuwe rechthoekige driehoek. Pas weer Pythagoras toe:\n• diagonaal² = d_grondvlak² + h²\n\n**Combinatie**: diagonaal² = l² + b² + h²\n\n**Voorbeeld**: balk 3 × 4 × 12.\n• d_grondvlak² = 9 + 16 = 25, dus d_grondvlak = 5\n• diagonaal² = 25 + 144 = 169, dus diagonaal = **13**\n\nDus de hoekdiagonaal van een 3-4-12 balk is 13.",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(60, 40)" stroke="${COLORS.curve}" stroke-width="2" fill="rgba(0,200,83,0.12)">
<polygon points="0,40 90,40 90,110 0,110"/>
<polygon points="0,40 25,15 115,15 90,40"/>
<polygon points="90,40 115,15 115,85 90,110"/>
</g>
<line x1="60" y1="150" x2="175" y2="55" stroke="${COLORS.point}" stroke-width="2.5"/>
<text x="105" y="105" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">diagonaal</text>
<line x1="60" y1="150" x2="150" y2="150" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="150" y1="150" x2="175" y2="125" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="200" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">d² = l² + b² + h²</text>
<text x="200" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">= 9 + 16 + 144</text>
<text x="200" y="105" fill="${COLORS.text}" font-size="11" font-family="Arial">= 169</text>
<rect x="195" y="120" width="80" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="235" y="142" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">d = 13</text>
</svg>`,
    checks: [
      {
        q: "Een balk 1 × 2 × 2. Wat is d² (diagonaal in het kwadraat)?",
        options: ["9", "5", "4", "8"],
        answer: 0,
        wrongHints: [
          null,
          "5 = 1² + 2² (alleen grondvlak). Maar voor 3D: 1² + 2² + 2² = 1 + 4 + 4 = 9.",
          "4 = 2². Vergeet de andere afmetingen niet: 1² + 2² + 2².",
          "8 = 2² · 2. Maar het is **+** niet **×**: 1 + 4 + 4 = 9.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht: ladder tegen de muur",
    explanation: "**Praktisch voorbeeld**. Een ladder van 5 meter staat tegen een muur. De voet van de ladder staat 3 m van de muur af. Hoe hoog reikt de ladder tegen de muur?\n\n**Tekening**: de ladder + de muur + de grond vormen een rechthoekige driehoek:\n• Muur (rechthoekszijde 1) = h (zoeken)\n• Grond (rechthoekszijde 2) = 3 m\n• Ladder (schuine zijde) = 5 m\n\n**Pythagoras**:\n```\n  a² + b² = c²\n  h² + 3² = 5²\n  h² + 9 = 25\n     h² = 16\n      h = √16\n      h = 4 m\n```\n\nDe ladder reikt tot **4 meter** hoog.\n\nDit is een klassiek toepassingsprobleem. Je herkent de 3-4-5 driehoek terug — een van de bekendste rechthoekige driehoeken.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="50" y1="170" x2="250" y2="170" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="40" y="183" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">grond</text>
<line x1="180" y1="170" x2="180" y2="50" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="190" y="80" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">muur</text>
<line x1="100" y1="170" x2="180" y2="50" stroke="${COLORS.point}" stroke-width="3"/>
<rect x="180" y="152" width="18" height="18" fill="none" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="140" y="183" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">3 m</text>
<text x="135" y="105" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">5 m</text>
<text x="135" y="120" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">(ladder)</text>
<text x="215" y="120" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">h = ?</text>
<rect x="200" y="135" width="65" height="32" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="232" y="156" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">h = 4 m</text>
</svg>`,
    checks: [
      {
        q: "Een ladder van 10 m staat 6 m van de muur af. Hoe hoog reikt hij?",
        options: ["8 m", "4 m", "16 m", "12 m"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 10 − 6 = 4 gedaan. Maar Pythagoras: h² = 10² − 6² = 100 − 36 = 64, dus h = 8.",
          "16 = 100 − 64 + 80 of zoiets vreemd. Reken: h² = 100 − 36 = 64, dus h = √64 = 8.",
          "Dat is groter dan de ladder zelf — onmogelijk. Reken: 10² − 6² = 64, h = √64 = 8.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pythagoras = {
  id: "pythagoras",
  title: "De stelling van Pythagoras",
  emoji: "📐",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.meetkunde.pythagoras"],
  intro: "H6 uit Wiskunde Flex deel 2: een van de beroemdste stellingen uit de wiskunde. a² + b² = c² — een eenvoudige formule om in elke rechthoekige driehoek de derde zijde te berekenen.",
  triggerKeywords: ["pythagoras", "rechthoekige driehoek", "schuine zijde", "hypotenusa", "rechthoekszijde", "a² + b² = c²"],
  chapters,
  steps,
};

export default pythagoras;

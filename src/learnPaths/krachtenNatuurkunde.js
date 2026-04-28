// Leerpad: Krachten en bewegen — Natuurkunde onderbouw VO
// 10 stappen in 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  good: "#00c853", arrow: "#42a5f5", mass: "#bcaaa4",
};

const stepEmojis = ["💪", "🏷️", "⚖️", "🌍", "📐", "🚗", "💥", "🚀", "🎢", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een kracht?", emoji: "💪", from: 0, to: 2 },
  { letter: "B", title: "Soorten krachten", emoji: "⚖️", from: 3, to: 5 },
  { letter: "C", title: "Newton's wetten", emoji: "🚀", from: 6, to: 8 },
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 9, to: 9 },
];

const steps = [
  {
    title: "Wat is een kracht?",
    explanation: "Een **kracht** is een **duw** of **trek** op een voorwerp. Krachten kunnen:\n• Iets in beweging zetten (bal wegschoppen).\n• Een beweging veranderen (afremmen, versnellen, van richting veranderen).\n• Iets vervormen (een veer indrukken).\n\n**Eenheid van kracht**: **newton (N)**. Genoemd naar Isaac Newton.\n\nEen kracht heeft altijd:\n• Een **grootte** (hoeveel newton).\n• Een **richting** (waar duwt of trekt het naartoe).\n\nDaarom teken je krachten als **pijlen**: de lengte = grootte, de richting = richting.\n\nEen krachtmeter (een soort veer) meet hoeveel newton een kracht is.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="80" y="80" width="60" height="40" fill="${COLORS.mass}" stroke="${COLORS.text}" stroke-width="2"/>
<text x="110" y="105" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">blok</text>
<line x1="40" y1="100" x2="78" y2="100" stroke="${COLORS.arrow}" stroke-width="3"/>
<polygon points="78,100 70,96 70,104" fill="${COLORS.arrow}"/>
<text x="35" y="92" fill="${COLORS.arrow}" font-size="11" font-family="Arial" font-weight="bold">F = 5 N</text>
<line x1="142" y1="100" x2="220" y2="100" stroke="${COLORS.alt}" stroke-width="3"/>
<polygon points="220,100 212,96 212,104" fill="${COLORS.alt}"/>
<text x="220" y="92" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">F = 10 N</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">kracht = pijl (grootte + richting)</text>
</svg>`,
    checks: [
      {
        q: "Wat is de eenheid van kracht?",
        options: ["newton (N)", "meter (m)", "kilogram (kg)", "seconde (s)"],
        answer: 0,
        wrongHints: [null, "Meter = lengte, niet kracht.", "Kilogram = massa, niet kracht.", "Seconde = tijd, niet kracht."],
      },
      {
        q: "Wat heeft een kracht **altijd**?",
        options: ["Een grootte én een richting", "Alleen een grootte", "Alleen een richting", "Een kleur"],
        answer: 0,
        wrongHints: [null, "Zonder richting weet je niet waarheen.", "Zonder grootte weet je niet hoe sterk.", "Krachten hebben geen kleur."],
      },
    ],
  },
  {
    title: "Massa vs gewicht — niet hetzelfde!",
    explanation: "Veel mensen verwarren **massa** en **gewicht**. In het dagelijks leven hetzelfde, in de natuurkunde verschillend.\n\n**Massa (m)**\n• Hoeveel **stof** een voorwerp bevat.\n• Eenheid: **kilogram (kg)**.\n• **Overal hetzelfde** — op aarde, op de maan, in de ruimte.\n\n**Gewicht (Fz)**\n• De **kracht** waarmee de zwaartekracht aan een voorwerp trekt.\n• Eenheid: **newton (N)**, want het is een kracht.\n• **Verschilt per planeet**: op de maan is je gewicht ~6× kleiner.\n\n**Formule**: \nFz = m × g\n\nWaarbij **g** ≈ 10 N/kg op aarde (eigenlijk 9,81). Dus:\n• Een appel van 0,1 kg → Fz = 0,1 × 10 = 1 N.\n• Een mens van 70 kg → Fz = 70 × 10 = 700 N.\n\nOp de maan: g ≈ 1,6 N/kg. Diezelfde mens van 70 kg weegt daar slechts 70 × 1,6 = 112 N.",
    svg: `<svg viewBox="0 0 300 180">
<text x="80" y="22" text-anchor="middle" fill="${COLORS.mass}" font-size="12" font-family="Arial" font-weight="bold">MASSA</text>
<rect x="50" y="35" width="60" height="60" rx="5" fill="${COLORS.mass}" opacity="0.6"/>
<text x="80" y="72" text-anchor="middle" fill="#fff" font-size="14" font-family="Arial" font-weight="bold">70 kg</text>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">overal gelijk</text>
<text x="220" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">GEWICHT</text>
<text x="220" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">Aarde: 700 N</text>
<text x="220" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Maan: 112 N</text>
<text x="220" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">Ruimte: 0 N</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">Fz = m × g</text>
</svg>`,
    checks: [
      {
        q: "Iemand heeft op aarde een massa van 60 kg. Wat is zijn gewicht (Fz)?",
        options: ["600 N", "60 N", "60 kg", "10 N"],
        answer: 0,
        wrongHints: [null, "Bijna — vergeet niet te vermenigvuldigen met g (10).", "Massa staat in kg, gewicht is een kracht in N.", "Veel te weinig — zou minder zijn dan een appel."],
      },
      {
        q: "Wat verandert er als je naar de maan gaat?",
        options: [
          "Je gewicht wordt kleiner, je massa blijft gelijk",
          "Beide worden kleiner",
          "Beide blijven gelijk",
          "Alleen je massa wordt kleiner",
        ],
        answer: 0,
        wrongHints: [null, "Massa blijft gelijk — alleen het gewicht verandert.", "Gewicht verandert wel.", "Massa is overal gelijk."],
      },
    ],
  },
  {
    title: "Krachten samenstellen",
    explanation: "Vaak werken er **meerdere krachten** tegelijk op een voorwerp. Dan kijk je naar de **resultante** (resulterende kracht): wat blijft er netto over?\n\n**Twee krachten dezelfde kant op**: optellen.\n• 5 N + 3 N → resultante 8 N (zelfde richting).\n\n**Twee krachten tegengestelde kant op**: aftrekken.\n• 5 N naar rechts, 3 N naar links → resultante 2 N naar rechts.\n\n**Twee gelijke krachten in tegengestelde richting**: in evenwicht — resultante is 0 N. Het voorwerp **blijft staan** of **blijft met dezelfde snelheid bewegen**.\n\nVoorbeeld: een boek op tafel.\n• Zwaartekracht trekt het naar beneden (Fz).\n• Tafel duwt het naar boven met dezelfde kracht (normaalkracht Fn).\n• Resultante = 0 → boek blijft liggen.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="80" y="80" width="60" height="40" fill="${COLORS.mass}" stroke="${COLORS.text}" stroke-width="2"/>
<line x1="40" y1="100" x2="78" y2="100" stroke="${COLORS.arrow}" stroke-width="3"/>
<polygon points="78,100 70,96 70,104" fill="${COLORS.arrow}"/>
<text x="35" y="92" fill="${COLORS.arrow}" font-size="10" font-family="Arial">8 N →</text>
<line x1="142" y1="100" x2="180" y2="100" stroke="${COLORS.alt}" stroke-width="3"/>
<polygon points="142,100 150,96 150,104" fill="${COLORS.alt}"/>
<text x="148" y="92" fill="${COLORS.alt}" font-size="10" font-family="Arial">← 3 N</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">resultante = 5 N →</text>
</svg>`,
    checks: [
      {
        q: "Twee krachten van 4 N en 6 N, beide naar rechts. Wat is de resultante?",
        options: ["10 N naar rechts", "2 N naar rechts", "10 N naar links", "0 N"],
        answer: 0,
        wrongHints: [null, "Dat is bij tegengestelde richting.", "Niet links — beide gaan rechts.", "Bij gelijke richting is het optellen."],
      },
      {
        q: "Een blok ligt stil op tafel. Wat klopt?",
        options: [
          "De resultante kracht is 0 N",
          "Er is geen kracht aanwezig",
          "Alleen zwaartekracht werkt",
          "Het blok versnelt",
        ],
        answer: 0,
        wrongHints: [null, "Er werkt zwaartekracht én normaalkracht.", "Tafel duwt ook terug — twee krachten in evenwicht.", "Stil = geen versnelling."],
      },
    ],
  },

  // B
  {
    title: "Zwaartekracht — naar beneden",
    explanation: "**Zwaartekracht** is de kracht waarmee de aarde alle voorwerpen naar zich toe trekt. Ze werkt **altijd verticaal naar beneden**, naar het middelpunt van de aarde.\n\n**Symbool**: Fz (zwaartekracht in newton)\n**Formule**: Fz = m × g\n\nWaar **g** afhangt van waar je bent:\n• Aarde: g ≈ 10 N/kg (preciezer 9,81)\n• Maan: g ≈ 1,6 N/kg\n• Mars: g ≈ 3,7 N/kg\n• Jupiter: g ≈ 24,8 N/kg\n\n**Zwaartekracht zorgt voor**:\n• Dat dingen naar beneden vallen.\n• Dat we op aarde blijven staan.\n• Dat de maan om de aarde draait.\n• Dat de aarde om de zon draait.\n\nIn de ruimte (ver van planeten) is de zwaartekracht heel klein — astronauten zweven daarom 'gewichtloos'.",
    svg: `<svg viewBox="0 0 300 180">
<circle cx="150" cy="160" r="60" fill="${COLORS.good}" opacity="0.30"/>
<text x="150" y="168" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">Aarde</text>
<circle cx="150" cy="50" r="14" fill="${COLORS.mass}" stroke="${COLORS.text}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">m</text>
<line x1="150" y1="64" x2="150" y2="100" stroke="${COLORS.alt}" stroke-width="3"/>
<polygon points="150,100 146,92 154,92" fill="${COLORS.alt}"/>
<text x="160" y="85" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">Fz</text>
</svg>`,
    checks: [
      {
        q: "Welke richting heeft zwaartekracht op aarde?",
        options: ["Verticaal naar beneden", "Verticaal omhoog", "Naar het oosten", "Geen vaste richting"],
        answer: 0,
        wrongHints: [null, "Dan zou je niet vallen.", "Heeft niets met windrichting te maken.", "Naar middelpunt aarde — dat is naar beneden."],
      },
      {
        q: "Wat is g op aarde (afgerond)?",
        options: ["10 N/kg", "1 N/kg", "100 N/kg", "1000 N/kg"],
        answer: 0,
        wrongHints: [null, "Zou betekenen dat alles bijna gewichtloos is.", "Veel te groot — alles zou zwaar als lood lijken.", "Veel te groot."],
      },
    ],
  },
  {
    title: "Wrijvingskracht — remt af",
    explanation: "**Wrijving** is een kracht die ontstaat als twee oppervlakken langs elkaar bewegen of dat proberen. Ze werkt **tegen de bewegingsrichting** in.\n\n**Soorten wrijving**:\n• **Schuifwrijving**: voorwerp glijdt over een oppervlak (slee op sneeuw).\n• **Rolwrijving**: voorwerp rolt (auto, fiets) — meestal kleiner dan schuifwrijving.\n• **Luchtwrijving** (luchtweerstand): bij snelle dingen — fietser, auto, parachute.\n• **Wrijving in vloeistoffen**: een schip in water voelt waterwrijving.\n\n**Hoe meer wrijving**:\n• Hoe sneller iets afremt.\n• Hoe meer energie verloren gaat (vaak als warmte).\n\n**Wrijving is niet altijd slecht**:\n• Zonder wrijving kun je niet lopen (slipt weg).\n• Remmen werken juist door wrijving.\n• Auto's hebben grip nodig (wrijving banden ↔ wegdek).\n\n**Wrijving verlagen**: gladmaken, oliëen, stroomlijnen.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="20" y1="140" x2="280" y2="140" stroke="${COLORS.text}" stroke-width="2"/>
<rect x="100" y="100" width="60" height="40" fill="${COLORS.mass}" stroke="${COLORS.text}" stroke-width="2"/>
<line x1="160" y1="120" x2="220" y2="120" stroke="${COLORS.arrow}" stroke-width="3"/>
<polygon points="220,120 212,116 212,124" fill="${COLORS.arrow}"/>
<text x="220" y="112" fill="${COLORS.arrow}" font-size="10" font-family="Arial">duwen →</text>
<line x1="60" y1="120" x2="100" y2="120" stroke="${COLORS.alt}" stroke-width="3"/>
<polygon points="60,120 68,116 68,124" fill="${COLORS.alt}"/>
<text x="40" y="112" fill="${COLORS.alt}" font-size="10" font-family="Arial">← Fwr</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">wrijving werkt tegen beweging in</text>
</svg>`,
    checks: [
      {
        q: "In welke richting werkt wrijving?",
        options: ["Tegen de bewegingsrichting in", "In de bewegingsrichting", "Naar boven", "Geen vaste richting"],
        answer: 0,
        wrongHints: [null, "Dan zou wrijving juist versnellen — onlogisch.", "Niet altijd verticaal.", "Wrijving heeft wél een vaste richting (tegen beweging)."],
      },
      {
        q: "Waarom is wrijving belangrijk voor lopen?",
        options: [
          "Zonder wrijving slipt je voet weg",
          "Het maakt je lichter",
          "Het versnelt je",
          "Het houdt je warm",
        ],
        answer: 0,
        wrongHints: [null, "Wrijving heeft niets met massa te maken.", "Het remt eerder dan dat het versnelt — maar je hebt het wél nodig om af te zetten.", "Wrijving geeft warmte, maar dat is geen reden om te lopen."],
      },
    ],
  },
  {
    title: "Veerkracht & spankracht",
    explanation: "**Veerkracht (Fv)** ontstaat als je een veer indrukt of uitrekt. De veer wil terug naar zijn oorspronkelijke vorm.\n\n**Wet van Hooke**: hoe meer je een veer indrukt of uitrekt, hoe groter de veerkracht.\n• Fv = C × u\n• C = veerconstante (N/m): hoe stug de veer is\n• u = uitwijking in m (hoeveel hij is uitgerekt)\n\n**Voorbeeld**: een veer met C = 50 N/m, 0,2 m uitgerekt → Fv = 50 × 0,2 = 10 N.\n\n**Spankracht** is een vergelijkbare kracht in een touw of kabel die **strak gespannen** staat. Het touw trekt aan beide uiteinden naar binnen toe (richting middelpunt van het touw).\n\n**Praktische voorbeelden**:\n• Krachtmeter (= veer met schaal in N).\n• Trampoline (springt je terug).\n• Pen met veertje (voor klikken).\n• Lift-kabel houdt de lift op met spankracht.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="40" y1="40" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="2"/>
<path d="M 40 60 L 60 55 L 80 65 L 100 55 L 120 65 L 140 55 L 160 65 L 180 55" stroke="${COLORS.good}" stroke-width="2" fill="none"/>
<rect x="180" y="40" width="40" height="40" fill="${COLORS.mass}" stroke="${COLORS.text}" stroke-width="2"/>
<text x="200" y="65" text-anchor="middle" fill="#fff" font-size="9" font-family="Arial">m</text>
<text x="100" y="35" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial">veer</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">Fv = C × u</text>
</svg>`,
    checks: [
      {
        q: "Een veer met C = 100 N/m wordt 0,30 m uitgerekt. Wat is Fv?",
        options: ["30 N", "100 N", "0,30 N", "330 N"],
        answer: 0,
        wrongHints: [null, "Dat is C — je moet vermenigvuldigen met u.", "Te klein — je hebt door 100 niet 100 gedeeld, je moet vermenigvuldigen.", "Optellen i.p.v. vermenigvuldigen."],
      },
      {
        q: "Wat is **spankracht**?",
        options: [
          "Kracht in een gespannen touw of kabel",
          "Kracht waarmee je iets duwt",
          "Wrijvingskracht",
          "Zwaartekracht",
        ],
        answer: 0,
        wrongHints: [null, "Spankracht is geen duwkracht — het trekt langs het touw.", "Dat is wrijving.", "Zwaartekracht trekt naar beneden, spankracht langs het touw."],
      },
    ],
  },

  // C
  {
    title: "Newton 1 — Wet van traagheid",
    explanation: "**Wet van Newton 1**: een voorwerp blijft in **rust** of beweegt **rechtdoor met dezelfde snelheid**, tenzij er een kracht op werkt.\n\nMet andere woorden: zonder netto kracht (= resultante 0) gebeurt er **niets nieuws**. Wat stilstaat blijft staan, wat beweegt blijft op dezelfde manier bewegen.\n\nDit heet **traagheid**. Voorwerpen 'willen' niet veranderen.\n\n**Voorbeelden**:\n• Boek op tafel: blijft liggen.\n• Hockeypuck op gladijs (bijna geen wrijving): glijdt door.\n• In een rijdende auto plotseling remmen: jij vliegt naar voren — je lichaam wil dóór met dezelfde snelheid.\n• In een auto bij optrekken: je wordt in stoel gedrukt — je wil blijven staan terwijl auto versnelt.\n\n**Daarom dragen we autogordels**: ze houden ons tegen als de auto plotseling stopt en ons lichaam door wil bewegen.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="20" y1="120" x2="280" y2="120" stroke="${COLORS.text}" stroke-width="2"/>
<circle cx="80" cy="105" r="15" fill="${COLORS.good}" opacity="0.7"/>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial">in rust</text>
<circle cx="200" cy="105" r="15" fill="${COLORS.arrow}" opacity="0.7"/>
<line x1="218" y1="105" x2="260" y2="105" stroke="${COLORS.arrow}" stroke-width="3"/>
<polygon points="260,105 252,101 252,109" fill="${COLORS.arrow}"/>
<text x="240" y="80" text-anchor="middle" fill="${COLORS.arrow}" font-size="11" font-family="Arial">blijft bewegen</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">geen kracht → geen verandering</text>
</svg>`,
    checks: [
      {
        q: "Wat zegt de eerste wet van Newton?",
        options: [
          "Zonder netto kracht blijft beweging hetzelfde",
          "F = m × a",
          "Actie = reactie",
          "Alle voorwerpen vallen even snel",
        ],
        answer: 0,
        wrongHints: [null, "Dat is Newton 2.", "Dat is Newton 3.", "Klopt op zich, maar niet de eerste wet."],
      },
      {
        q: "Waarom vlieg je naar voren als de auto remt?",
        options: [
          "Je lichaam wil door met dezelfde snelheid (traagheid)",
          "Een kracht duwt je naar voren",
          "De auto versnelt",
          "Door de zwaartekracht",
        ],
        answer: 0,
        wrongHints: [null, "Geen extra kracht — het is juist de afwezigheid van remkracht op jou.", "Auto remt juist (vertraagt).", "Zwaartekracht is verticaal, niet horizontaal."],
      },
    ],
  },
  {
    title: "Newton 2 — F = m × a",
    explanation: "**Wet van Newton 2**: als er wél een netto kracht (resultante) op een voorwerp werkt, krijgt het een **versnelling**.\n\n**Formule**: F = m × a\n\n• F = (resulterende) kracht in N\n• m = massa in kg\n• a = versnelling in m/s²\n\n**Wat betekent dit?**\n• **Meer kracht** → meer versnelling.\n• **Meer massa** → minder versnelling (zwaarder ding is moeilijker te versnellen).\n\n**Voorbeelden**:\n• Een fiets (~10 kg) duw je makkelijker weg dan een auto (~1500 kg) met dezelfde kracht.\n• Een sportauto met krachtige motor versnelt sneller dan een vrachtwagen met dezelfde motor.\n\n**Rekenvoorbeeld**:\n• Een blok van 5 kg krijgt een kracht van 20 N → a = F/m = 20/5 = 4 m/s². Het blok versnelt elke seconde 4 m/s erbij.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="40" y="80" width="40" height="40" fill="${COLORS.mass}" stroke="${COLORS.text}" stroke-width="2"/>
<text x="60" y="105" text-anchor="middle" fill="#fff" font-size="11" font-family="Arial">m</text>
<line x1="80" y1="100" x2="160" y2="100" stroke="${COLORS.arrow}" stroke-width="4"/>
<polygon points="160,100 152,94 152,106" fill="${COLORS.arrow}"/>
<text x="120" y="92" text-anchor="middle" fill="${COLORS.arrow}" font-size="11" font-family="Arial" font-weight="bold">F</text>
<text x="120" y="120" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial">→ a (versnelling)</text>
<text x="220" y="98" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">F = m·a</text>
<text x="220" y="120" fill="${COLORS.text}" font-size="10" font-family="Arial">a = F/m</text>
</svg>`,
    checks: [
      {
        q: "Een blok van 4 kg krijgt een kracht van 12 N. Wat is de versnelling?",
        options: ["3 m/s²", "48 m/s²", "16 m/s²", "0,3 m/s²"],
        answer: 0,
        wrongHints: [null, "Vermenigvuldigd i.p.v. gedeeld.", "Optellen niet doen — je moet F door m delen.", "Decimaal verkeerd. 12/4 = 3."],
      },
      {
        q: "Wat klopt over Newton 2?",
        options: [
          "Meer massa → kleinere versnelling bij dezelfde kracht",
          "Meer massa → grotere versnelling",
          "Massa heeft geen invloed",
          "Versnelling = kracht",
        ],
        answer: 0,
        wrongHints: [null, "Andersom — zwaarder = moeilijker te versnellen.", "Massa heeft veel invloed.", "Niet hetzelfde — F = m × a."],
      },
    ],
  },
  {
    title: "Newton 3 — Actie = reactie",
    explanation: "**Wet van Newton 3**: als voorwerp A een kracht op voorwerp B uitoefent, oefent voorwerp B een **even grote tegengestelde kracht** uit op A.\n\nKortweg: **actie = -reactie**.\n\n**Voorbeelden**:\n• Schaatser duwt de muur weg → muur duwt schaatser even hard terug → schaatser glijdt achteruit.\n• Een raket stoot heet gas naar beneden → gas duwt raket omhoog.\n• Je voet duwt op de grond bij lopen → grond duwt je voet terug omhoog → je beweegt vooruit.\n• Geweer afvuren: kogel naar voren → geweer wordt teruggeduwd ('terugslag').\n\n**Belangrijk**: actie en reactie werken op **verschillende voorwerpen**. Daarom heffen ze elkaar niet op (zoals krachten op één voorwerp soms wel doen).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="40" y="80" width="50" height="40" fill="${COLORS.mass}" stroke="${COLORS.text}" stroke-width="2"/>
<text x="65" y="105" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial">A</text>
<rect x="210" y="80" width="50" height="40" fill="${COLORS.mass}" stroke="${COLORS.text}" stroke-width="2"/>
<text x="235" y="105" text-anchor="middle" fill="#fff" font-size="10" font-family="Arial">B</text>
<line x1="92" y1="95" x2="208" y2="95" stroke="${COLORS.arrow}" stroke-width="3"/>
<polygon points="208,95 200,91 200,99" fill="${COLORS.arrow}"/>
<text x="150" y="85" text-anchor="middle" fill="${COLORS.arrow}" font-size="10" font-family="Arial">A duwt B</text>
<line x1="208" y1="115" x2="92" y2="115" stroke="${COLORS.alt}" stroke-width="3"/>
<polygon points="92,115 100,111 100,119" fill="${COLORS.alt}"/>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.alt}" font-size="10" font-family="Arial">B duwt A terug</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">even groot, tegengesteld</text>
</svg>`,
    checks: [
      {
        q: "Hoe vliegt een raket omhoog?",
        options: [
          "Hij stoot gas naar beneden, gas duwt raket omhoog",
          "Hij wordt aangezogen door de zon",
          "Lucht trekt hem op",
          "Door zwaartekracht",
        ],
        answer: 0,
        wrongHints: [null, "Niets met de zon te maken.", "Lucht trekt niet op.", "Zwaartekracht trekt juist naar beneden."],
      },
      {
        q: "Een schaatser duwt de muur weg. Wat gebeurt er?",
        options: [
          "Muur duwt schaatser even hard terug, schaatser glijdt weg",
          "Niets gebeurt",
          "Muur valt om",
          "Schaatser blijft staan",
        ],
        answer: 0,
        wrongHints: [null, "Wel: actie-reactie werkt altijd.", "Muur is veel zwaarder, blijft staan.", "Volgens Newton 3 wordt schaatser teruggeduwd."],
      },
    ],
  },

  // D
  {
    title: "Eindopdracht — krachten in actie",
    explanation: "Tijd om alles toe te passen!\n\n**Snelle samenvatting**:\n\n| Kracht | Symbool | Richting |\n|---|---|---|\n| Zwaartekracht | Fz = m·g | naar beneden |\n| Wrijving | Fw | tegen beweging in |\n| Veerkracht | Fv = C·u | terug naar rust |\n| Spankracht | Fs | langs het touw |\n| Normaalkracht | Fn | loodrecht op oppervlak |\n\n**Newton's wetten**:\n1. Geen netto kracht → geen verandering (traagheid).\n2. F = m · a\n3. Actie = reactie\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">checklist</text>
<text x="20" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Welke krachten werken?</text>
<text x="20" y="68" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Resultante = som met richtingen</text>
<text x="20" y="86" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Resultante = 0 → geen versnelling</text>
<text x="20" y="104" fill="${COLORS.text}" font-size="11" font-family="Arial">4. Resultante ≠ 0 → F = m·a</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">je kunt het — succes!</text>
</svg>`,
    checks: [
      {
        q: "Wat is het gewicht van iemand met massa 50 kg op aarde (g = 10 N/kg)?",
        options: ["500 N", "50 N", "10 N", "5 N"],
        answer: 0,
        wrongHints: [null, "Dat is de massa, niet het gewicht.", "Te weinig — Fz = m·g.", "Veel te weinig."],
      },
      {
        q: "Een blok van 2 kg wordt met 6 N voortgeduwd op een wrijvingsloze vloer. Versnelling?",
        options: ["3 m/s²", "12 m/s²", "8 m/s²", "0,33 m/s²"],
        answer: 0,
        wrongHints: [null, "Vermenigvuldigd i.p.v. gedeeld.", "Optellen.", "Verkeerde rekenvolgorde — F/m = 6/2 = 3."],
      },
      {
        q: "Welke kracht remt bewegende voorwerpen af?",
        options: ["Wrijving", "Zwaartekracht", "Veerkracht", "Spankracht"],
        answer: 0,
        wrongHints: [null, "Zwaartekracht is verticaal, niet altijd remmend.", "Veerkracht trekt naar rustpunt, niet remmend.", "Spankracht is langs touw."],
      },
      {
        q: "Wie schreef deze drie wetten op?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Marie Curie"],
        answer: 0,
        wrongHints: [null, "Einstein deed relativiteit, niet deze wetten.", "Galilei was eerder maar formuleerde de wetten niet zo.", "Curie deed radioactiviteit."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const krachtenNatuurkunde = {
  id: "krachten-natuurkunde",
  title: "Krachten en bewegen",
  emoji: "💪",
  level: "klas2-3",
  subject: "natuurkunde",
  intro:
    "De basis van krachten en beweging — kracht als pijl, massa vs gewicht, soorten krachten (zwaartekracht, wrijving, veerkracht), de drie wetten van Newton. Eerste pad natuurkunde onderbouw.",
  triggerKeywords: [
    "kracht", "krachten", "newton", "F = m a",
    "zwaartekracht", "Fz", "g",
    "massa", "gewicht",
    "wrijving", "wrijvingskracht",
    "veerkracht", "veerconstante", "wet van Hooke",
    "spankracht",
    "normaalkracht",
    "traagheid", "wet van newton", "newton 1", "newton 2", "newton 3",
    "actie reactie", "raket", "raketprincipe",
    "versnelling", "snelheid",
    "natuurkunde", "natuurwetenschap",
  ],
  chapters,
  steps,
};

export default krachtenNatuurkunde;

// Leerpad: Vlakke figuren (meetkundige constructies + oppervlakte vierhoeken)
// Conceptueel — werkt voor elk wiskundeboek met meetkunde-stof.
// Past bij G&R FLEX deel 1 klas 2 H2, maar ook bij andere methodes.
// 16 stappen, 6 hoofdstukken.

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  accent: "#5b86b8",
};

const stepEmojis = [
  "📏", "⊥",                       // A. Afstanden (2)
  "🪞", "✏️", "⭕",                 // B. Middelloodlijn (3)
  "✂️", "📐", "🔵",                 // C. Bissectrice (3)
  "⚖️", "📍", "📐",                 // D. Zwaartelijn/hoogtelijn (3)
  "▱", "🔷", "🪟",                 // E. Vierhoeken (3)
  "🏁", "🏆",                       // F. Eindopdrachten (2)
  "📝",                            // G. Examenstijl
];

const chapters = [
  { letter: "A", title: "Afstanden in de meetkunde", emoji: "📏", from: 0, to: 1 },
  { letter: "B", title: "Middelloodlijn + omgeschreven cirkel", emoji: "🪞", from: 2, to: 4 },
  { letter: "C", title: "Bissectrice + ingeschreven cirkel", emoji: "✂️", from: 5, to: 7 },
  { letter: "D", title: "Zwaartelijn en hoogtelijn", emoji: "⚖️", from: 8, to: 10 },
  { letter: "E", title: "Oppervlakte van vierhoeken", emoji: "▱", from: 11, to: 13 },
  { letter: "F", title: "Eindopdrachten", emoji: "🏁", from: 14, to: 15 },
  { letter: "G", title: "Examenstijl — VMBO-GT CSE", emoji: "📝", from: 16, to: 16 },
];

const steps = [
  // ─── A. Afstanden ────────────────────────────
  {
    title: "Afstand tussen twee punten",
    explanation: "**Afstand** in de meetkunde is de **kortste** weg tussen twee dingen.\n\nVoor **twee punten** is dat simpel: trek een rechte lijn ertussen, en meet hoe lang die is. Dat is de afstand.\n\nVoorbeelden:\n• Afstand van A naar B = lengte van het lijnstuk AB\n• Afstand van punt P naar Q = lengte van PQ\n\nIn formules schrijven we soms **|AB|** voor 'lengte van AB' (de twee verticale streepjes betekenen 'lengte van' of 'absolute waarde').\n\n**Belangrijk**: een **rechte lijn** is altijd de kortste verbinding tussen twee punten. Een omweg of bocht is altijd langer.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="60" y1="140" x2="240" y2="60" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="60" cy="140" r="6" fill="${COLORS.point}"/>
<text x="50" y="160" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">A</text>
<circle cx="240" cy="60" r="6" fill="${COLORS.point}"/>
<text x="245" y="55" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">B</text>
<text x="155" y="92" fill="${COLORS.curve}" font-size="12" font-family="Arial" font-weight="bold">|AB|</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">de rechte lijn is altijd de kortste verbinding</text>
</svg>`,
    checks: [
      {
        q: "Wat is de kortste afstand tussen twee punten?",
        options: [
          "Een rechte lijn",
          "Een gebogen lijn",
          "Twee rechte lijnen via een tussenpunt",
          "Een cirkelboog",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een gebogen lijn maakt de weg langer. De directe rechte verbinding is altijd korter.",
          "Een omweg via een tussenpunt is per definitie langer dan direct.",
          "Een cirkelboog is een gebogen pad — langer dan recht.",
        ],
      },
    ],
  },
  {
    title: "Afstand van een punt tot een lijn",
    explanation: "Wat is de afstand tussen een **punt** en een **lijn** (geen tweede punt, maar een hele lijn)?\n\n**Antwoord**: de **loodrechte** afstand. Dat is altijd de kortste route — een rechte lijn die haaks (90°) op de oorspronkelijke lijn staat.\n\n**Hoe vind je het?**:\n1. Trek vanuit het punt P een lijn die **loodrecht** op de gegeven lijn staat.\n2. Het snijpunt heet de 'voet van de loodlijn' (noem het bv. F).\n3. De afstand is dan |PF|.\n\nElk ander pad (schuin) is langer.\n\n**In het echt**: stel je staat 5 meter voor een muur. De afstand tot de muur = 5 meter (loodrecht). Niet 7 meter (schuin via de hoek).",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="150" x2="260" y2="150" stroke="${COLORS.curve}" stroke-width="2.5"/>
<text x="40" y="170" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">lijn ℓ</text>
<circle cx="150" cy="60" r="6" fill="${COLORS.point}"/>
<text x="160" y="55" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">P</text>
<line x1="150" y1="60" x2="150" y2="150" stroke="${COLORS.point}" stroke-width="2.5" stroke-dasharray="5 3"/>
<rect x="150" y="132" width="14" height="14" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<text x="170" y="105" fill="${COLORS.point}" font-size="11" font-family="Arial">afstand</text>
<line x1="150" y1="60" x2="220" y2="150" stroke="${COLORS.muted}" stroke-width="1" stroke-dasharray="3 3"/>
<text x="220" y="120" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">schuin = langer</text>
<text x="155" y="170" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">F (voet)</text>
</svg>`,
    checks: [
      {
        q: "De afstand van een punt P tot een lijn is...",
        options: [
          "De loodrechte afstand tot de lijn",
          "Elke afstand vanuit P naar de lijn",
          "De afstand tot het beginpunt van de lijn",
          "De diagonale afstand",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Elke afstand werkt niet als definitie. Specifiek: de loodrechte (kortste) afstand.",
          "Een lijn heeft geen 'beginpunt' (in wiskunde gaat hij oneindig door). Het gaat om de loodrechte afstand.",
          "Diagonaal is een vorm van schuin — die is langer dan loodrecht.",
        ],
      },
    ],
  },

  // ─── B. Middelloodlijn ────────────────────────────
  {
    title: "Wat is een middelloodlijn?",
    explanation: "De **middelloodlijn** van een lijnstuk AB is een lijn die:\n1. Door het **midden** van AB gaat, en\n2. **Loodrecht** op AB staat.\n\nVandaar de naam: **midden** + **lood**.\n\n**Hoe teken je hem?**:\n1. Bepaal het midden M van AB.\n2. Trek door M een lijn die haaks (90°) op AB staat.\n3. Klaar — dat is de middelloodlijn.\n\n**Bijzondere eigenschap**: de middelloodlijn deelt het lijnstuk AB precies in twee gelijke delen, en is symmetrisch (zoals een spiegel-as).\n\n**In het echt**: stel je hebt twee huizen A en B, en je wilt een verbindingsweg recht door het midden tussen ze: dat is langs de middelloodlijn.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="50" y1="140" x2="250" y2="140" stroke="${COLORS.curve}" stroke-width="2.5"/>
<circle cx="50" cy="140" r="5" fill="${COLORS.point}"/>
<text x="40" y="160" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">A</text>
<circle cx="250" cy="140" r="5" fill="${COLORS.point}"/>
<text x="252" y="160" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">B</text>
<circle cx="150" cy="140" r="4" fill="${COLORS.curveAlt}"/>
<text x="142" y="160" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">M</text>
<line x1="150" y1="40" x2="150" y2="180" stroke="${COLORS.curveAlt}" stroke-width="2" stroke-dasharray="5 3"/>
<rect x="135" y="125" width="14" height="14" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<text x="155" y="55" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">middelloodlijn</text>
<text x="80" y="135" fill="${COLORS.muted}" font-size="10" font-family="Arial">|AM|</text>
<text x="180" y="135" fill="${COLORS.muted}" font-size="10" font-family="Arial">|MB|</text>
</svg>`,
    checks: [
      {
        q: "Een middelloodlijn van AB is een lijn die...",
        options: [
          "Door het midden gaat én loodrecht op AB staat",
          "Schuin door A loopt",
          "Parallel aan AB loopt",
          "Door beide punten A en B gaat",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Schuin werkt niet — de naam zegt 'lood' = loodrecht.",
          "Parallel betekent dezelfde richting — niet loodrecht. Dat is geen middelloodlijn.",
          "Door A en B is gewoon AB zelf, niet de middelloodlijn.",
        ],
      },
    ],
  },
  {
    title: "Eigenschap: gelijke afstanden",
    explanation: "De middelloodlijn heeft een **bijzondere eigenschap** die in heel veel meetkundige bewijzen voorkomt:\n\n**Elk punt op de middelloodlijn van AB ligt even ver van A als van B.**\n\nMet symbolen: voor elk punt P op de middelloodlijn geldt:  **|PA| = |PB|**\n\nDe omgekeerde regel klopt ook:\n\n**Als een punt even ver van A als van B ligt, dan ligt het op de middelloodlijn.**\n\nDeze twee dingen zijn dus equivalent: 'op middelloodlijn' = 'gelijke afstand tot A en B'.\n\n**Toepassing**: stel je wilt een **postbode** een huis kiezen dat even ver van twee dorpen A en B af ligt. Elk punt op de middelloodlijn is een geldige plek.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="50" y1="150" x2="250" y2="150" stroke="${COLORS.curve}" stroke-width="2"/>
<circle cx="50" cy="150" r="5" fill="${COLORS.point}"/>
<text x="40" y="170" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">A</text>
<circle cx="250" cy="150" r="5" fill="${COLORS.point}"/>
<text x="252" y="170" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">B</text>
<line x1="150" y1="40" x2="150" y2="180" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="150" cy="80" r="6" fill="${COLORS.curve2}"/>
<text x="158" y="78" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">P</text>
<line x1="150" y1="80" x2="50" y2="150" stroke="${COLORS.curve2}" stroke-width="1.5"/>
<line x1="150" y1="80" x2="250" y2="150" stroke="${COLORS.curve2}" stroke-width="1.5"/>
<text x="80" y="105" fill="${COLORS.curve2}" font-size="11" font-family="Arial" font-weight="bold">|PA|</text>
<text x="200" y="105" fill="${COLORS.curve2}" font-size="11" font-family="Arial" font-weight="bold">|PB|</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">|PA| = |PB|</text>
</svg>`,
    checks: [
      {
        q: "Punt P ligt op de middelloodlijn van AB. Wat klopt?",
        options: [
          "P ligt even ver van A als van B",
          "P ligt dichterbij A dan B",
          "P ligt verder van A dan van B",
          "P ligt op de lijn AB zelf",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou betekenen dat P **niet** op de middelloodlijn ligt. Dichterbij A is de andere kant.",
          "Andersom — verder van A betekent dichterbij B. Op de middelloodlijn is het gelijk.",
          "P ligt op de middelloodlijn (loodrecht erop), niet op AB zelf.",
        ],
      },
    ],
  },
  {
    title: "Omgeschreven cirkel — drie middelloodlijnen kruisen",
    explanation: "Maak nu een **driehoek ABC**. Teken de **drie middelloodlijnen** — één per zijde (van AB, BC en AC).\n\n**Verrassing**: alle drie de lijnen kruisen elkaar **in één punt**! Dat punt heet **M** (middelpunt).\n\n**Waarom?** \n- M ligt op middelloodlijn van AB → |MA| = |MB|\n- M ligt op middelloodlijn van BC → |MB| = |MC|\n- Dus: |MA| = |MB| = |MC| — M ligt even ver van alle 3 hoeken.\n\nDat betekent: je kunt een **cirkel rond de driehoek** tekenen, met M als middelpunt. Die cirkel raakt alle drie de hoeken precies.\n\nDit heet de **omgeschreven cirkel**: de cirkel die de driehoek netjes omspant.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="80,150 220,150 150,50" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="70" y="170" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">A</text>
<text x="225" y="170" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">B</text>
<text x="145" y="40" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">C</text>
<circle cx="150" cy="118" r="68" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<circle cx="150" cy="118" r="4" fill="${COLORS.curveAlt}"/>
<text x="158" y="115" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">M</text>
<text x="40" y="35" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">omgeschreven cirkel</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">|MA| = |MB| = |MC|</text>
</svg>`,
    checks: [
      {
        q: "Het middelpunt M van de omgeschreven cirkel is...",
        options: [
          "Het snijpunt van de drie middelloodlijnen",
          "Het snijpunt van de drie hoogtelijnen",
          "Het midden van de driehoek",
          "Een willekeurig punt binnen de driehoek",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Hoogtelijnen geven een ander snijpunt (het hoogtelijnpunt). Voor de omgeschreven cirkel: middelloodlijnen.",
          "'Midden van de driehoek' is vaag. M is specifiek waar de drie middelloodlijnen kruisen.",
          "M is geen willekeurig punt — het is exact bepaald als snijpunt van middelloodlijnen.",
        ],
      },
    ],
  },

  // ─── C. Bissectrice ────────────────────────────
  {
    title: "Wat is een bissectrice?",
    explanation: "Een **bissectrice** is een lijn die een **hoek** in **twee gelijke delen** verdeelt.\n\nLetterlijk uit het Latijn: 'bi-sect' = 'in tweeën snijden'.\n\nStel je hebt een hoek die 60° groot is. De bissectrice deelt 'm in twee hoeken van **30°** elk.\n\n**Hoe teken je een bissectrice?**:\n1. Begin in het hoekpunt.\n2. Trek een lijn die zo loopt dat de hoeken aan beide kanten **gelijk** zijn.\n3. De lijn zit dus 'in het midden' van de hoek.\n\n**Twee hoeken van 90°**: bissectrice = 45° schuin.\n**Hoek van 100°**: bissectrice splitst in 50° en 50°.\n\nElke hoek heeft precies één bissectrice.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="60" y1="160" x2="240" y2="160" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="60" y1="160" x2="200" y2="50" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="60" y1="160" x2="220" y2="105" stroke="${COLORS.curveAlt}" stroke-width="2" stroke-dasharray="4 3"/>
<text x="55" y="180" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">A</text>
<path d="M 95 160 A 35 35 0 0 0 87 132" fill="none" stroke="${COLORS.curve2}" stroke-width="1.5"/>
<text x="100" y="148" fill="${COLORS.curve2}" font-size="10" font-family="Arial">α</text>
<path d="M 87 132 A 35 35 0 0 0 80 110" fill="none" stroke="${COLORS.curve2}" stroke-width="1.5"/>
<text x="78" y="125" fill="${COLORS.curve2}" font-size="10" font-family="Arial">α</text>
<text x="190" y="115" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">bissectrice</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">deelt de hoek in twee gelijke delen</text>
</svg>`,
    checks: [
      {
        q: "Een hoek van 80°. De bissectrice maakt twee hoeken van...",
        options: [
          "40° elk",
          "80° elk",
          "180° en -100°",
          "20° en 60°",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dan zou de bissectrice de hoek niet delen — maar hetzelfde laten.",
          "180° is een rechte lijn — geen hoekdeel. Klopt niet.",
          "20+60=80, maar bissectrice deelt in **gelijke** stukken: 40 en 40.",
        ],
      },
    ],
  },
  {
    title: "Eigenschap: gelijke afstand tot beide zijden",
    explanation: "Net als de middelloodlijn heeft de bissectrice een **bijzondere eigenschap**:\n\n**Elk punt op de bissectrice ligt even ver van de twee zijden van de hoek.**\n\nLet op: 'afstand tot een zijde' = **loodrechte** afstand (zoals we bij stap 2 zagen).\n\n**Voorbeeld**: hoek met zijden A en B. Punt P op de bissectrice. Trek loodlijnen vanuit P naar A en B. De voetpunten heten F₁ en F₂.\n\nDan geldt: **|PF₁| = |PF₂|**\n\nOmgekeerd: als een punt even ver van twee zijden ligt, ligt het op de bissectrice van de hoek tussen die zijden.\n\n**Toepassing**: stel je wilt een paadje aanleggen tussen twee muren — de bissectrice geeft je de plek waar je precies in het midden tussen beide muren bent.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="60" y1="160" x2="240" y2="160" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="60" y1="160" x2="200" y2="50" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="60" y1="160" x2="220" y2="105" stroke="${COLORS.curveAlt}" stroke-width="2" stroke-dasharray="4 3"/>
<circle cx="160" cy="125" r="5" fill="${COLORS.point}"/>
<text x="170" y="125" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">P</text>
<line x1="160" y1="125" x2="160" y2="160" stroke="${COLORS.curve2}" stroke-width="1.5" stroke-dasharray="3 2"/>
<rect x="153" y="153" width="10" height="10" fill="none" stroke="${COLORS.curve2}" stroke-width="1"/>
<line x1="160" y1="125" x2="135" y2="92" stroke="${COLORS.curve2}" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="155" y="148" fill="${COLORS.curve2}" font-size="10" font-family="Arial">d</text>
<text x="138" y="118" fill="${COLORS.curve2}" font-size="10" font-family="Arial">d</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">|PF₁| = |PF₂|  (gelijke afstanden)</text>
</svg>`,
    checks: [
      {
        q: "Punt P ligt op de bissectrice van een hoek. Wat klopt?",
        options: [
          "P ligt even ver van beide zijden van de hoek",
          "P ligt op één van de zijden",
          "P ligt op de top van de hoek",
          "P ligt verder van één zijde dan de andere",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou betekenen dat P op een zijde ligt, niet op de bissectrice (die zit ertussen).",
          "Op de top zou alleen kloppen voor één punt. P is een willekeurig punt op de bissectrice.",
          "Dat is het tegenovergestelde — op de bissectrice zijn de afstanden juist gelijk.",
        ],
      },
    ],
  },
  {
    title: "Ingeschreven cirkel — drie bissectrices kruisen",
    explanation: "Bij een driehoek ABC heeft elke hoek een **bissectrice** — drie in totaal.\n\n**Mooie eigenschap**: de drie bissectrices kruisen elkaar **in één punt**, midden in de driehoek. Dat punt heet **I** (van **i**ngeschreven).\n\n**Waarom belangrijk?**\n• I ligt op alle drie de bissectrices\n• Dus I ligt even ver van **alle drie** de zijden van de driehoek\n\nDat betekent: je kunt een **cirkel binnen** de driehoek tekenen die alle drie de zijden **raakt** (nét aan). Middelpunt = I, straal = afstand van I tot een zijde.\n\nDit heet de **ingeschreven cirkel**: de grootste cirkel die binnen de driehoek past.\n\n**Verschil**:\n• **Omgeschreven** cirkel: gaat rond de driehoek (raakt de hoeken).\n• **Ingeschreven** cirkel: zit binnen de driehoek (raakt de zijden).",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,170 240,170 150,40" fill="rgba(0,200,83,0.08)" stroke="${COLORS.curve}" stroke-width="2"/>
<circle cx="150" cy="135" r="35" fill="rgba(255,213,79,0.10)" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<circle cx="150" cy="135" r="3" fill="${COLORS.curveAlt}"/>
<text x="158" y="138" fill="${COLORS.curveAlt}" font-size="12" font-family="Arial" font-weight="bold">I</text>
<text x="50" y="190" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">A</text>
<text x="245" y="190" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">B</text>
<text x="146" y="32" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">C</text>
<text x="35" y="35" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">ingeschreven cirkel</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">raakt alle 3 de zijden net</text>
</svg>`,
    checks: [
      {
        q: "Wat is het middelpunt van de ingeschreven cirkel?",
        options: [
          "Snijpunt van de drie bissectrices",
          "Snijpunt van de drie middelloodlijnen",
          "Het zwaartepunt",
          "Een hoekpunt van de driehoek",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Middelloodlijnen geven het middelpunt van de **omgeschreven** cirkel (rond de hoeken). Voor ingeschreven (binnen): bissectrices.",
          "Zwaartepunt is iets anders — daar komen we straks op. Voor ingeschreven cirkel: bissectrices.",
          "De ingeschreven cirkel zit binnen de driehoek, niet op een hoek.",
        ],
      },
    ],
  },

  // ─── D. Zwaartelijn en hoogtelijn ────────────────────────────
  {
    title: "Zwaartelijn — naar het midden van de overkant",
    explanation: "Een **zwaartelijn** in een driehoek is een lijn die loopt van een **hoek** naar het **midden van de overstaande zijde**.\n\nElke driehoek heeft drie zwaartelijnen — één per hoek.\n\n**Hoe teken je een zwaartelijn vanuit hoek A?**\n1. Bepaal het midden M van de overstaande zijde BC.\n2. Trek een lijn van A naar M.\n3. Klaar.\n\n**Verschil met andere speciale lijnen**:\n• Middelloodlijn: loopt loodrecht op het midden (niet door een hoek).\n• Bissectrice: deelt de hoek in tweeën (eindpunt op willekeurige zijde).\n• Zwaartelijn: van hoek naar **midden** van overkant.\n\n**Naam komt van**: bij gewicht-balans van een driehoek (denk aan een papieren driehoek balanceren op je vinger) loopt elke zwaartelijn door het 'zwaartepunt'.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 240,160 150,40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2"/>
<circle cx="150" cy="160" r="4" fill="${COLORS.curveAlt}"/>
<text x="142" y="180" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">M</text>
<line x1="150" y1="40" x2="150" y2="160" stroke="${COLORS.curveAlt}" stroke-width="2.5" stroke-dasharray="5 3"/>
<text x="50" y="180" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">A</text>
<text x="245" y="180" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">B</text>
<text x="146" y="32" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">C</text>
<text x="160" y="100" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">zwaartelijn</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">van hoek C naar midden van AB</text>
</svg>`,
    checks: [
      {
        q: "Een zwaartelijn vanuit hoek A loopt naar...",
        options: [
          "Het midden van de overstaande zijde",
          "Het midden van een willekeurige zijde",
          "Het midden van zijde naast A",
          "De andere hoeken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet willekeurig — specifiek de **overstaande** zijde (zonder hoek A).",
          "Een zijde naast A heeft A als eindpunt — die heeft geen 'eigen midden' apart van A.",
          "Een zwaartelijn eindigt op een midden, niet op een hoek.",
        ],
      },
    ],
  },
  {
    title: "Zwaartepunt — de drie zwaartelijnen kruisen",
    explanation: "Net als bij middelloodlijnen en bissectrices: de drie zwaartelijnen kruisen elkaar in **één punt**.\n\nDat punt heet het **zwaartepunt** (Z).\n\n**Bijzondere eigenschap**:\nHet zwaartepunt deelt elke zwaartelijn in een verhouding van **2 : 1**.\n• Vanaf een hoek tot het zwaartepunt is **2 delen**.\n• Vanaf het zwaartepunt tot het midden van de overkant is **1 deel**.\n\n**Praktisch**: knip een driehoek uit papier. Zoek de drie zwaartelijnen. Het kruispunt is het **balanspunt** — daar kun je de driehoek op je vinger laten balanceren.\n\nVandaar de naam 'zwaartepunt': het punt waar het 'gewicht' (de zwaartekracht) door verdeeld wordt.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 240,160 150,40" fill="rgba(0,200,83,0.08)" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="150" y1="40" x2="150" y2="160" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="60" y1="160" x2="195" y2="100" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="240" y1="160" x2="105" y2="100" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<circle cx="150" cy="120" r="6" fill="${COLORS.point}"/>
<text x="160" y="118" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">Z</text>
<text x="158" y="133" fill="${COLORS.muted}" font-size="9" font-family="Arial">zwaartepunt</text>
<text x="50" y="180" fill="${COLORS.curve}" font-size="12" font-family="Arial" font-weight="bold">A</text>
<text x="245" y="180" fill="${COLORS.curve}" font-size="12" font-family="Arial" font-weight="bold">B</text>
<text x="146" y="32" fill="${COLORS.curve}" font-size="12" font-family="Arial" font-weight="bold">C</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">balanseert hier op je vinger</text>
</svg>`,
    checks: [
      {
        q: "Hoe deelt het zwaartepunt een zwaartelijn?",
        options: [
          "In een verhouding 2:1 (2 vanaf hoek, 1 vanaf midden zijde)",
          "Precies in tweeën (1:1)",
          "In drie gelijke delen",
          "Niet — Z ligt aan een uiteinde",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Z deelt **niet** in tweeën — wel in 2:1 (twee delen vanaf hoek, één vanaf midden).",
          "Z is één punt op de zwaartelijn, niet drie. De verhouding is 2:1.",
          "Z ligt **binnen** de driehoek, op het kruispunt — niet op een uiteinde.",
        ],
      },
    ],
  },
  {
    title: "Hoogtelijn — loodrecht naar de overkant",
    explanation: "Een **hoogtelijn** in een driehoek loopt vanuit een **hoek** **loodrecht** op de overstaande zijde.\n\nVerschil met zwaartelijn: een zwaartelijn gaat naar het **midden**, een hoogtelijn staat **loodrecht**. Niet altijd hetzelfde punt!\n\n**Hoe teken je 'm vanuit hoek A?**\n1. Trek een lijn vanuit A die loodrecht (90°) op zijde BC staat.\n2. Het voetpunt op BC is meestal **niet** het midden.\n3. Klaar.\n\n**Bijzonder**: bij een **rechthoekige** driehoek vallen twee hoogtelijnen samen met de rechthoekszijden zelf!\n\n**De drie hoogtelijnen** kruisen ook in één punt — het **hoogtelijnpunt** (vaak H genoemd).\n\n**Belangrijke toepassing**: voor de **oppervlakte** van een driehoek heb je een 'hoogte' nodig — dat is de lengte van een hoogtelijn (loodrecht op de basis).",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,160 240,160 110,40" fill="rgba(0,200,83,0.08)" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="110" y1="40" x2="110" y2="160" stroke="${COLORS.curveAlt}" stroke-width="2.5" stroke-dasharray="5 3"/>
<rect x="110" y="146" width="14" height="14" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<text x="50" y="180" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">A</text>
<text x="245" y="180" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">B</text>
<text x="105" y="32" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">C</text>
<text x="120" y="100" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">hoogtelijn</text>
<text x="115" y="175" fill="${COLORS.curveAlt}" font-size="9" font-family="Arial">90°</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vanaf hoek loodrecht op overstaande zijde</text>
</svg>`,
    checks: [
      {
        q: "Verschil tussen zwaartelijn en hoogtelijn?",
        options: [
          "Zwaartelijn naar midden, hoogtelijn loodrecht",
          "Allebei hetzelfde",
          "Zwaartelijn loodrecht, hoogtelijn naar midden",
          "Zwaartelijn deelt hoek, hoogtelijn niet",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Niet hetzelfde — ze raken vaak een ander punt op de overstaande zijde.",
          "Andersom — hoogtelijn is loodrecht, zwaartelijn naar het midden.",
          "Een hoek delen is een **bissectrice**, niet zwaartelijn.",
        ],
      },
    ],
  },

  // ─── E. Vierhoeken ────────────────────────────
  {
    title: "Oppervlakte parallellogram",
    explanation: "Een **parallellogram** is een vierhoek waarvan de overstaande zijden **evenwijdig** zijn (parallel) en gelijk lang.\n\n**Oppervlakte** = **basis × hoogte**\n\nLet op: hoogte is de **loodrechte** afstand tussen de twee evenwijdige basis-zijden — niet de schuine zijde!\n\n**Voorbeeld**: parallellogram met basis 8 cm en hoogte 5 cm.\n• Oppervlakte = 8 × 5 = **40 cm²**\n\n**Trucje voor begrip**: knip een parallellogram diagonaal door, draai een driehoek om — dan heb je een rechthoek met dezelfde basis en hoogte. Die heeft oppervlakte basis × hoogte. Dus parallellogram ook.\n\n**Speciale gevallen**:\n• Een **rechthoek** is een parallellogram waar alle hoeken 90° zijn.\n• Een **vierkant** is een rechthoek met alle zijden gelijk.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="60,140 220,140 250,60 90,60" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="60" y1="140" x2="60" y2="60" stroke="${COLORS.curveAlt}" stroke-width="2" stroke-dasharray="4 3"/>
<rect x="60" y="124" width="16" height="16" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<text x="35" y="105" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">h</text>
<text x="140" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">basis</text>
<rect x="60" y="60" width="160" height="80" fill="rgba(255,213,79,0.10)" stroke="${COLORS.point}" stroke-width="1" stroke-dasharray="3 3"/>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">opp = basis × hoogte</text>
</svg>`,
    checks: [
      {
        q: "Parallellogram met basis 12 m en hoogte 7 m. Oppervlakte?",
        options: ["84 m²", "19 m²", "84 m", "168 m²"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 12 + 7 gedaan. Maar oppervlakte = basis **×** hoogte (vermenigvuldigen).",
          "Het getal klopt, maar de eenheid is m² (vierkante meter), niet m.",
          "Je hebt × 2 erbij gedaan. Voor parallellogram is het gewoon basis × hoogte.",
        ],
      },
    ],
  },
  {
    title: "Oppervlakte ruit",
    explanation: "Een **ruit** is een vierhoek waarbij **alle vier zijden gelijk zijn** (en de overstaande zijden parallel — dus ook een soort parallellogram, maar dan met gelijke zijden).\n\nVoor een ruit kun je twee formules gebruiken:\n\n**1. Basis × hoogte** (zoals bij parallellogram).\n\n**2. Met de diagonalen**:\n\n**Oppervlakte ruit = ½ × d₁ × d₂**\n\nWaar d₁ en d₂ de twee diagonalen zijn (lijnen tussen overstaande hoeken).\n\n**Voorbeeld**: ruit met diagonalen 6 cm en 8 cm.\n• Oppervlakte = ½ × 6 × 8 = ½ × 48 = **24 cm²**\n\n**Waarom werkt dit?** De diagonalen van een ruit staan **loodrecht** op elkaar en delen elkaar middendoor. Daardoor verdelen ze de ruit in 4 gelijke rechthoekige driehoekjes, die samen ½·d₁·d₂ aan oppervlakte vormen.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="150,40 240,100 150,160 60,100" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="60" y1="100" x2="240" y2="100" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="150" y1="40" x2="150" y2="160" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<rect x="143" y="100" width="14" height="14" fill="none" stroke="${COLORS.curveAlt}" stroke-width="1"/>
<text x="115" y="98" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">d₁</text>
<text x="155" y="85" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">d₂</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">opp = ½ × d₁ × d₂</text>
</svg>`,
    checks: [
      {
        q: "Ruit met diagonalen 10 cm en 6 cm. Oppervlakte?",
        options: ["30 cm²", "60 cm²", "16 cm²", "30 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de **½** vergeten. Oppervlakte ruit = ½ × d₁ × d₂.",
          "Je hebt 10 + 6 gedaan. Maar het is vermenigvuldigen, niet optellen — én × ½.",
          "Het getal klopt, maar oppervlakte heeft eenheid cm² (niet cm).",
        ],
      },
    ],
  },
  {
    title: "Oppervlakte trapezium",
    explanation: "Een **trapezium** is een vierhoek met **één paar evenwijdige zijden** (en de andere twee zijden niet noodzakelijk parallel).\n\nDe twee evenwijdige zijden heten **a** en **b** (vaak verschillend lang). De **hoogte h** is de loodrechte afstand tussen ze.\n\n**Oppervlakte trapezium = ½ × (a + b) × h**\n\nIn woorden: gemiddelde van de twee evenwijdige zijden, keer de hoogte.\n\n**Voorbeeld**: trapezium met evenwijdige zijden 4 cm en 8 cm, hoogte 5 cm.\n• Oppervlakte = ½ × (4 + 8) × 5 = ½ × 12 × 5 = ½ × 60 = **30 cm²**\n\n**Waarom werkt dit?** Stel je twee identieke trapezia naast elkaar zodanig dat ze samen een parallellogram vormen. Die parallellogram heeft basis (a + b) en hoogte h. Oppervlakte parallellogram = (a+b)·h. Dus trapezium = de helft = ½·(a+b)·h.",
    svg: `<svg viewBox="0 0 300 200">
<polygon points="80,150 220,150 180,60 120,60" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">b</text>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">a</text>
<line x1="240" y1="150" x2="240" y2="60" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="4 3"/>
<line x1="220" y1="150" x2="240" y2="150" stroke="${COLORS.curveAlt}" stroke-width="0.7"/>
<line x1="180" y1="60" x2="240" y2="60" stroke="${COLORS.curveAlt}" stroke-width="0.7"/>
<text x="248" y="108" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">h</text>
<text x="150" y="195" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">opp = ½ × (a + b) × h</text>
</svg>`,
    checks: [
      {
        q: "Trapezium: evenwijdige zijden 6 en 10, hoogte 4. Oppervlakte?",
        options: ["32", "20", "60", "40"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt ½ × 10 × 4 gedaan? Vergeet niet de 6: ½ × (6 + 10) × 4 = ½ × 16 × 4 = 32.",
          "60 = (6+10) × ? — je bent de ½ vergeten. ½ × 16 × 4 = 32.",
          "Je hebt 10 × 4 gedaan. Maar het is ½ × **(6 + 10)** × 4.",
        ],
      },
    ],
  },

  // ─── F. Eindopdrachten ────────────────────────────
  {
    title: "Eindopdracht 1: middelpunten",
    explanation: "**Drie korte conceptvragen**:\n\n**A**: Hoe vind je het **middelpunt van de omgeschreven cirkel** van een driehoek?\n→ Snijpunt van de drie **middelloodlijnen**.\n\n**B**: Hoe vind je het **middelpunt van de ingeschreven cirkel**?\n→ Snijpunt van de drie **bissectrices**.\n\n**C**: Hoe vind je het **zwaartepunt** van een driehoek?\n→ Snijpunt van de drie **zwaartelijnen**.\n\n**Onthoudtruc**:\n• **omgeschreven** (rond hoeken) ↔ **middelloodlijnen** (over zijden)\n• **ingeschreven** (rond zijden) ↔ **bissectrices** (over hoeken)\n• **zwaartepunt** (balans) ↔ **zwaartelijnen** (van hoek naar midden)\n\n**Wat hoogtelijnen geven**: snijpunt heet 'hoogtelijnpunt' — wordt minder vaak gevraagd, gebruik je als je de hoogte (en daarmee oppervlakte) wilt berekenen.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="30" fill="${COLORS.text}" font-size="12" font-family="Arial">middelpunt cirkels:</text>
<text x="55" y="55" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">omgeschreven</text>
<text x="180" y="55" fill="${COLORS.point}" font-size="11" font-family="Arial">middelloodlijnen</text>
<text x="55" y="78" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">ingeschreven</text>
<text x="180" y="78" fill="${COLORS.point}" font-size="11" font-family="Arial">bissectrices</text>
<line x1="40" y1="92" x2="260" y2="92" stroke="${COLORS.curve}" stroke-width="0.7" opacity="0.4"/>
<text x="55" y="115" fill="${COLORS.text}" font-size="12" font-family="Arial">andere snijpunten:</text>
<text x="55" y="138" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">zwaartepunt</text>
<text x="180" y="138" fill="${COLORS.point}" font-size="11" font-family="Arial">zwaartelijnen</text>
<text x="55" y="161" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">hoogtelijnpunt</text>
<text x="180" y="161" fill="${COLORS.point}" font-size="11" font-family="Arial">hoogtelijnen</text>
<text x="150" y="192" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">elk type lijn → eigen snijpunt</text>
</svg>`,
    checks: [
      {
        q: "Welke lijnen kruisen elkaar in het zwaartepunt?",
        options: [
          "Zwaartelijnen",
          "Bissectrices",
          "Middelloodlijnen",
          "Hoogtelijnen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bissectrices kruisen in het middelpunt van de **ingeschreven** cirkel.",
          "Middelloodlijnen kruisen in het middelpunt van de **omgeschreven** cirkel.",
          "Hoogtelijnen kruisen in het hoogtelijnpunt — niet zwaartepunt.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 2: oppervlakte berekenen",
    explanation: "Drie figuren — bereken de oppervlakte:\n\n**A** — **Driehoek** met basis 10 cm en hoogte 6 cm.\n• Opp = ½ × 10 × 6 = **30 cm²**\n\n**B** — **Parallellogram** met basis 7 m en hoogte 4 m.\n• Opp = 7 × 4 = **28 m²**\n\n**C** — **Trapezium** met evenwijdige zijden 5 cm en 9 cm, hoogte 4 cm.\n• Opp = ½ × (5 + 9) × 4 = ½ × 14 × 4 = **28 cm²**\n\n**D** — **Ruit** met diagonalen 12 cm en 5 cm.\n• Opp = ½ × 12 × 5 = **30 cm²**\n\n**Overzicht formules**:\n\n| Figuur | Formule |\n|--------|---------|\n| Driehoek | ½ × b × h |\n| Rechthoek | l × b |\n| Parallellogram | b × h |\n| Ruit | ½ × d₁ × d₂ |\n| Trapezium | ½ × (a + b) × h |\n\nOnthoud: de **hoogte** is altijd loodrecht — niet de schuine zijde.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="160" y1="20" x2="160" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="100" y="36" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="11" font-family="Arial">figuur</text>
<text x="210" y="36" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="11" font-family="Arial">formule</text>
<text x="100" y="63" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">driehoek</text>
<text x="210" y="63" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">½ · b · h</text>
<text x="100" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">rechthoek</text>
<text x="210" y="85" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">l · b</text>
<text x="100" y="107" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">parallellogram</text>
<text x="210" y="107" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">b · h</text>
<text x="100" y="129" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">ruit</text>
<text x="210" y="129" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">½ · d₁ · d₂</text>
<text x="100" y="151" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">trapezium</text>
<text x="210" y="151" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">½ · (a+b) · h</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">hoogte is altijd loodrecht</text>
</svg>`,
    checks: [
      {
        q: "Een trapezium heeft evenwijdige zijden 8 cm en 12 cm en hoogte 5 cm. Oppervlakte?",
        options: ["50 cm²", "100 cm²", "60 cm²", "20 cm²"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de ½ vergeten. ½ × (8 + 12) × 5 = ½ × 20 × 5 = ½ × 100 = 50.",
          "Je hebt 12 × 5 gedaan. Maar je moet eerst de twee evenwijdige zijden optellen, dan × hoogte, dan × ½.",
          "20 = 8 + 12. Maar je moet nog × hoogte (5) en × ½ doen.",
        ],
      },
    ],
  },
  // ─── G. Examenstijl — VMBO-GT CSE ─────────────────────────
  {
    title: "CSE-vraag — speeltuin met grasveld en zandbak",
    explanation: "Op het CSE krijg je vaak een **combinatie-figuur**: een rechthoekige tuin met daarin een rond/half-rond stuk dat anders is. Examen-stijl probeer-vraag:\n\n> **Een speeltuin is rechthoekig** met afmetingen 12,0 m × 8,0 m. Daarin ligt een **halfronde zandbak** met diameter 6,0 m langs één lange zijde van de tuin. De rest is grasveld.\n\n**Aanpak in 3 stappen:**\n1. **Hele tuin** = 12,0 × 8,0 = **96 m²**.\n2. **Zandbak** = ½ × π × r². Diameter 6,0 → straal 3,0. Oppervlakte = ½ × π × 3² = ½ × π × 9 ≈ **14,1 m²**.\n3. **Grasveld** = hele tuin − zandbak = 96 − 14,1 ≈ **81,9 m²**.\n\n**Examen-tips**:\n• Lees goed: diameter of straal? **r = d / 2**.\n• Een **halfronde** vorm = **½ × π × r²**.\n• Rond af volgens de instructie (vaak 1 decimaal).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="40" width="220" height="120" fill="rgba(0,200,83,0.18)" stroke="${COLORS.curve}" stroke-width="2"/>
<path d="M 100 40 A 50 50 0 0 1 200 40 Z" fill="rgba(255,213,79,0.45)" stroke="${COLORS.point}" stroke-width="2"/>
<text x="150" y="105" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">grasveld</text>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">zandbak</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">12,0 m × 8,0 m · zandbak Ø 6,0 m</text>
</svg>`,
    checks: [
      {
        q: "Wat is de oppervlakte van de **hele speeltuin**?",
        options: ["96 m²", "20 m²", "40 m²", "120 m²"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is alleen de omtrek-helft (12 + 8). Oppervlakte = lengte × breedte.",
          "Je hebt door 2 gedeeld of zoiets. Reken: 12 × 8 = 96.",
          "Niet — 12 × 8 = 96, niet 120.",
        ],
      },
      {
        q: "Wat is de oppervlakte van de **halfronde zandbak**? (diameter 6,0 m, gebruik π ≈ 3,14)",
        options: ["≈ 14,1 m²", "≈ 28,3 m²", "≈ 9,4 m²", "≈ 18,8 m²"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is een hele cirkel (π × r²). Voor halfrond moet je nog ÷ 2.",
          "Je hebt waarschijnlijk de diameter ipv straal gebruikt, of × ½ vergeten.",
          "Dichtbij. Reken: r = 3, dus ½ × π × 9 ≈ 14,1 m². 18,8 lijkt op 6π — waar komt dat vandaan?",
        ],
      },
      {
        q: "Wat is de oppervlakte van het **grasveld** (de rest)?",
        options: ["≈ 81,9 m²", "≈ 96,0 m²", "≈ 110,1 m²", "≈ 67,8 m²"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de hele tuin. Vergeet niet de zandbak ervan af te trekken.",
          "Je hebt de zandbak erbij OPgeteld — moet aftrekken.",
          "Je hebt waarschijnlijk een hele cirkel afgetrokken ipv halfrond.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const vlakkeFiguren = {
  id: "vlakke-figuren",
  title: "Vlakke figuren (meetkunde)",
  emoji: "📐",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.meetkunde.vlak"],
  intro: "Meetkundige constructies en vierhoeken: middelloodlijn, bissectrice, zwaartelijn, hoogtelijn — en hoe ze de in- en omgeschreven cirkels van een driehoek bepalen. Plus oppervlakteformules voor parallellogram, ruit en trapezium.",
  triggerKeywords: ["middelloodlijn", "bissectrice", "zwaartelijn", "hoogtelijn", "ingeschreven cirkel", "omgeschreven cirkel", "parallellogram", "ruit", "trapezium", "zwaartepunt"],
  chapters,
  steps,
};

export default vlakkeFiguren;

// Leerpad: Stelsels van vergelijkingen — Wiskunde klas 2-3
// 14 stappen in 5 hoofdstukken (A t/m E).
// Bouwt voort op vergelijkingen-oplossen + lineaire-formules.

const COLORS = {
  axis: "#e0e6f0",
  grid: "#2a3f5f",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  blue: "#5b86b8",
  paars: "#a060ff",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const baseAxes = (xMin = -2, xMax = 8, yMin = -2, yMax = 8) => {
  const sx = 200 / (xMax - xMin);
  const sy = 200 / (yMax - yMin);
  const ox = -xMin * sx;
  const oy = 200 - (-yMin * sy);
  let grid = "";
  for (let x = Math.ceil(xMin); x <= Math.floor(xMax); x++) {
    if (x === 0) continue;
    const px = ox + x * sx;
    grid += `<line x1="${px}" y1="0" x2="${px}" y2="200" stroke="${COLORS.grid}" stroke-width="0.5" opacity="0.3"/>`;
  }
  for (let y = Math.ceil(yMin); y <= Math.floor(yMax); y++) {
    if (y === 0) continue;
    const py = oy - y * sy;
    grid += `<line x1="0" y1="${py}" x2="200" y2="${py}" stroke="${COLORS.grid}" stroke-width="0.5" opacity="0.3"/>`;
  }
  const axes = `
    <line x1="0" y1="${oy}" x2="200" y2="${oy}" stroke="${COLORS.axis}" stroke-width="1.2"/>
    <line x1="${ox}" y1="0" x2="${ox}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
    <text x="194" y="${oy - 4}" fill="${COLORS.text}" font-size="9" font-family="Arial">x</text>
    <text x="${ox + 3}" y="9" fill="${COLORS.text}" font-size="9" font-family="Arial">y</text>
  `;
  return { grid, axes, toX: (x) => ox + x * sx, toY: (y) => oy - y * sy };
};

const stepEmojis = [
  "🔗", "🎯", "📐",                    // A. Wat is een stelsel?
  "🔁", "✏️", "📋",                     // B. Substitutie
  "➕", "✖️", "🧮",                     // C. Optellen/aftrekken
  "❓", "💬",                            // D. Bijzondere gevallen + woord
  "🎯", "📝", "🏆",                    // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een stelsel?", emoji: "🔗", from: 0, to: 2 },
  { letter: "B", title: "Substitutie-methode", emoji: "🔁", from: 3, to: 5 },
  { letter: "C", title: "Optel/aftrek-methode", emoji: "➕", from: 6, to: 8 },
  { letter: "D", title: "Bijzondere gevallen + woord", emoji: "💬", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. Wat is een stelsel? ───────────────────────────
  {
    title: "Twee vergelijkingen, twee onbekenden",
    explanation: "Een **stelsel van twee vergelijkingen met twee onbekenden** is een set van twee vergelijkingen die je **tegelijk** moet oplossen. Beide vergelijkingen moeten kloppen.\n\n**Notatie**:\n```\n{ x + y = 7\n{ 2x − y = 2\n```\n\nDit lees je als: \"Welke x én y maken **beide** vergelijkingen waar?\"\n\n**Voorbeeld**: zoek x en y zodat:\n• x + y = 7\n• 2x − y = 2\n\n**Antwoord**: x = 3, y = 4\n• Check: 3 + 4 = 7 ✓\n• Check: 2·3 − 4 = 6 − 4 = 2 ✓\n\nBeide vergelijkingen kloppen → x = 3, y = 4 is de oplossing.\n\n**Waarom een stelsel?** In de echte wereld zijn vaak twee feiten tegelijk waar:\n• \"Ik koop 2 boterhammen + 1 koffie voor €4. Mijn vriend koopt 3 boterhammen + 2 koffies voor €7,50.\"\n• Hieruit kun je de prijs van een boterham (x) én een koffie (y) afleiden.\n\nDat los je op met een stelsel.\n\nIn de volgende stappen leer je **twee methodes** om een stelsel op te lossen:\n• **Substitutie** — invullen\n• **Optellen/aftrekken** — combineren tot één vergelijking",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">stelsel = 2 vergelijkingen, 2 onbekenden</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="40" y "76" fill="${COLORS.text}" font-size="13" font-family="monospace">{ x + y = 7</text>
<text x="40" y "94" fill="${COLORS.text}" font-size="13" font-family="monospace">{ 2x − y = 2</text>
<line x1="30" y1="108" x2="270" y2="108" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="40" y "128" fill="${COLORS.muted}" font-size="11" font-family="Arial">oplossing: x = 3, y = 4</text>
<text x="40" y "146" fill="${COLORS.good}" font-size="11" font-family="Arial">check: 3 + 4 = 7 ✓</text>
<text x="40" y "164" fill="${COLORS.good}" font-size="11" font-family="Arial">check: 2·3 − 4 = 2 ✓</text>
</svg>`,
    checks: [
      {
        q: "*Is x = 5, y = 2 een oplossing van het stelsel: x + y = 7 én 2x − y = 8?*",
        options: [
          "Ja — beide vergelijkingen kloppen",
          "Nee — alleen de eerste klopt",
          "Nee — alleen de tweede klopt",
          "Nee — geen van beide klopt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Check beide: 5 + 2 = 7 ✓, en 2·5 − 2 = 8 ✓. Beide kloppen.",
          "Check beide: 5 + 2 = 7 ✓, en 2·5 − 2 = 8 ✓. Beide kloppen.",
          "Beide kloppen wel — controleer rustig: 5+2=7 en 2·5-2=10-2=8.",
        ],
      },
    ],
  },
  {
    title: "Wat is een 'oplossing' van een stelsel?",
    explanation: "Een **oplossing** van een stelsel is een **paar getallen** (x, y) waarvoor **beide vergelijkingen tegelijk waar zijn**.\n\n**Drie mogelijkheden** voor een stelsel van twee lineaire vergelijkingen:\n\n**1. Eén oplossing** (meest voorkomend)\nEr is precies één paar (x, y) dat past.\n• Voorbeeld: x + y = 7 en 2x − y = 2 → x = 3, y = 4. Geen ander paar werkt.\n\n**2. Geen oplossing** (zelden)\nDe twee vergelijkingen spreken elkaar tegen — geen enkel paar werkt.\n• Voorbeeld: x + y = 5 en x + y = 7. Onmogelijk dat de som tegelijk 5 én 7 is.\n\n**3. Oneindig veel oplossingen** (zelden)\nDe vergelijkingen zijn eigenlijk dezelfde — elk paar dat de ene vergelijking maakt, maakt ook de andere.\n• Voorbeeld: x + y = 7 en 2x + 2y = 14. De tweede is gewoon 2× de eerste.\n\nIn dit pad richten we ons vooral op **geval 1** — de overgrote meerderheid van schoolopdrachten.\n\n**Notatie van oplossing**: \"x = 3 en y = 4\" of \"(x, y) = (3, 4)\".",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">drie mogelijkheden</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">1. één oplossing</text>
<text x="170" y "76" fill="${COLORS.muted}" font-size="11" font-family="Arial">(meeste gevallen)</text>
<text x="35" y "100" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">2. geen oplossing</text>
<text x="170" y "100" fill="${COLORS.muted}" font-size="11" font-family="Arial">(tegenstrijdig)</text>
<text x="35" y "124" fill="${COLORS.paars}" font-size="11" font-family="Arial" font-weight="bold">3. oneindig veel</text>
<text x="170" y "124" fill="${COLORS.muted}" font-size="11" font-family="Arial">(zelfde vergelijking)</text>
<line x1="30" y1="138" x2="270" y2="138" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "160" fill="${COLORS.text}" font-size="11" font-family="Arial">notatie: (x, y) = (3, 4)</text>
<text x="35" y "176" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">in dit pad: focus op geval 1</text>
</svg>`,
    checks: [
      {
        q: "*Stelsel: x + y = 5 én x + y = 7. Hoeveel oplossingen?*",
        options: [
          "Geen — de vergelijkingen spreken elkaar tegen",
          "Eén",
          "Oneindig veel",
          "Twee",
        ],
        answer: 0,
        wrongHints: [
          null,
          "x + y kan niet tegelijk 5 én 7 zijn. Onmogelijk → geen oplossing.",
          "Oneindig veel zou alleen kunnen als de vergelijkingen feitelijk hetzelfde zijn. Hier zeggen ze iets verschillends.",
          "Een lineair stelsel heeft 1, 0 of oneindig veel oplossingen — nooit precies 2.",
        ],
      },
    ],
  },
  {
    title: "Grafische interpretatie — twee lijnen",
    explanation: "Elke vergelijking met x en y is **een lijn** in het assenstelsel (mits lineair). Een stelsel = **twee lijnen**, en de oplossing is hun **snijpunt**.\n\n**Voorbeeld**: stelsel x + y = 7 en 2x − y = 2.\n\n• Lijn 1: x + y = 7 → y = 7 − x (= een dalende lijn)\n• Lijn 2: 2x − y = 2 → y = 2x − 2 (= een stijgende lijn)\n\nDe twee lijnen kruisen elkaar in **één punt**: (3, 4). Dat is de oplossing.\n\n**Drie grafische gevallen** komen overeen met de drie soorten oplossingen:\n\n**1. Snijden** → één punt → **één oplossing**\n**2. Parallel** → geen kruispunt → **geen oplossing**\n**3. Vallen samen** → oneindig veel kruispunten → **oneindig veel oplossingen**\n\n**Grafisch oplossen** is een methode op zich:\n1. Teken beide lijnen.\n2. Lees het snijpunt af.\n\nWerkt prima bij hele getallen en eenvoudige stelsels. Maar bij ingewikkelde getallen of breuken is **algebraïsch oplossen** (substitutie / optellen) preciezer.\n\nIn dit pad focussen we daarom vooral op de algebraïsche methodes.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      // Lijn 1: y = 7 - x
      // Lijn 2: y = 2x - 2
      // Snijpunt: (3, 4)
      const line1Start = { x: -1, y: 8 };
      const line1End = { x: 7, y: 0 };
      const line2Start = { x: 0, y: -2 };
      const line2End = { x: 5, y: 8 };
      return `<svg viewBox="0 0 200 200">${grid}${axes}
        <line x1="${toX(line1Start.x)}" y1="${toY(line1Start.y)}" x2="${toX(line1End.x)}" y2="${toY(line1End.y)}" stroke="${COLORS.good}" stroke-width="2"/>
        <line x1="${toX(line2Start.x)}" y1="${toY(line2Start.y)}" x2="${toX(line2End.x)}" y2="${toY(line2End.y)}" stroke="${COLORS.alt}" stroke-width="2"/>
        <circle cx="${toX(3)}" cy="${toY(4)}" r="4" fill="${COLORS.warm}" stroke="#000" stroke-width="0.5"/>
        <text x="${toX(3) + 6}" y="${toY(4) - 5}" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">(3,4)</text>
      </svg>`;
    })(),
    checks: [
      {
        q: "*Twee lijnen lopen parallel (zelfde steilte, andere y-snijpunt). Hoeveel oplossingen heeft het stelsel?*",
        options: [
          "Geen oplossing",
          "Eén oplossing",
          "Oneindig veel oplossingen",
          "Twee oplossingen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Eén oplossing zou betekenen dat de lijnen kruisen — parallelle lijnen kruisen nooit.",
          "Oneindig veel zou betekenen dat de lijnen samenvallen. Parallel = niet samenvallend.",
          "Twee snijpunten kunnen lineaire lijnen niet hebben — ze kruisen óf 0, óf 1 keer, óf vallen samen.",
        ],
      },
    ],
  },

  // ─── B. Substitutie-methode ───────────────────────────
  {
    title: "Substitutie — invullen wat je weet",
    explanation: "**Substitutie** = vervangen. Je gebruikt één vergelijking om x of y te isoleren, en vult die uitdrukking in **de andere** vergelijking.\n\n**Stappenplan**:\n1. **Isoleer** in vergelijking 1 ofwel x of y (kies wat het makkelijkst is).\n2. **Vul in** in vergelijking 2.\n3. Los de **enkele** vergelijking op die nu één onbekende heeft.\n4. Vul de gevonden waarde terug in stap 1 om de andere onbekende te vinden.\n5. Controleer beide vergelijkingen.\n\n**Voorbeeld kort**: y = 2x + 1 (al geïsoleerd) én x + y = 7\n\n• Stap 1: y is al geïsoleerd in vergelijking 1 (y = 2x + 1).\n• Stap 2: vul in vergelijking 2 in: x + (2x + 1) = 7\n• Stap 3: los op: 3x + 1 = 7 → 3x = 6 → x = 2.\n• Stap 4: y = 2·2 + 1 = 5.\n• Oplossing: (x, y) = (2, 5).\n• Check: 2 + 5 = 7 ✓, en y = 2·2 + 1 = 5 ✓.\n\n**Wanneer is substitutie handig?**\n• Als één vergelijking al geïsoleerd is (zoals y = 2x + 1).\n• Als één variabele eenvoudig te isoleren is (factor 1 of -1).\n\n**Wanneer beter optellen/aftrekken?**\n• Als beide vergelijkingen in standaard-vorm staan (ax + by = c).\n• Komt later in dit hoofdstuk.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">substitutie — invullen wat je weet</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="11" font-family="Arial">1. isoleer x of y in 1 vergelijking</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="Arial">2. vul in in andere vergelijking</text>
<text x="35" y "110" fill="${COLORS.text}" font-size="11" font-family="Arial">3. los enkele vergelijking op</text>
<text x="35" y "128" fill="${COLORS.text}" font-size="11" font-family="Arial">4. vul gevonden waarde terug</text>
<text x="35" y "146" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">5. controleer altijd beide!</text>
<text x="150" y "172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">handig als 1 vgl. al geïsoleerd is</text>
</svg>`,
    checks: [
      {
        q: "*Stelsel: y = 3x − 1 én x + y = 7. Wat doe je in stap 2 (substitutie)?*",
        options: [
          "Vul (3x − 1) in voor y in de tweede vergelijking",
          "Vul x = 7 − y in beide vergelijkingen",
          "Tel beide vergelijkingen op",
          "Vermenigvuldig beide kanten met 3",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Te veel werk — y is al netjes geïsoleerd. Pak die uitdrukking en vul in waar y staat.",
          "Dat is optellen-methode, niet substitutie.",
          "Vermenigvuldigen is geen onderdeel van de basis-substitutie-stap.",
        ],
      },
    ],
  },
  {
    title: "Voorbeeld substitutie volledig",
    explanation: "Volledig voorbeeld met alle stappen.\n\n**Stelsel**:\n• 2x + y = 11\n• y = x + 2\n\n**Stap 1**: y is al geïsoleerd in vergelijking 2: **y = x + 2**.\n\n**Stap 2**: vul (x + 2) in voor y in vergelijking 1:\n```\n2x + (x + 2) = 11\n```\n\n**Stap 3**: los op:\n```\n2x + x + 2 = 11\n3x + 2 = 11        | -2\n3x = 9             | :3\nx = 3\n```\n\n**Stap 4**: vul x = 3 terug in vergelijking 2:\n```\ny = 3 + 2 = 5\n```\n\n**Oplossing**: (x, y) = **(3, 5)**.\n\n**Stap 5 — controleer beide**:\n• 2·3 + 5 = 6 + 5 = 11 ✓\n• 5 = 3 + 2 ✓\n\nBeide kloppen → klaar.\n\n**Tip**: de controle aan het eind is belangrijk — fouten in tekens of breuken slip je makkelijk in. Vul de oplossing **letterlijk** in beide vergelijkingen in.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">substitutie volledig</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "72" fill="${COLORS.text}" font-size="12" font-family="monospace">{ 2x + y = 11</text>
<text x="35" y "88" fill="${COLORS.text}" font-size="12" font-family="monospace">{ y = x + 2</text>
<text x="35" y "108" fill="${COLORS.alt}" font-size="11" font-family="monospace">vul in: 2x + (x + 2) = 11</text>
<text x="35" y "126" fill="${COLORS.text}" font-size="11" font-family="monospace">3x + 2 = 11 → x = 3</text>
<text x="35" y "144" fill="${COLORS.text}" font-size="11" font-family="monospace">y = 3 + 2 = 5</text>
<text x="35" y "164" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">(x, y) = (3, 5)</text>
</svg>`,
    checks: [
      {
        q: "*Los op met substitutie: y = 2x én x + y = 9. Wat is x?*",
        options: ["x = 3", "x = 9", "x = 6", "x = 4.5"],
        answer: 0,
        wrongHints: [
          null,
          "Check: x + 2x = 9 → 3x = 9 → x = 3, niet 9.",
          "6 = 2·3 (dat zou y zijn). Niet x.",
          "Niet zo'n breuk — invul levert 3x = 9, dus x is geheel.",
        ],
      },
    ],
  },
  {
    title: "Substitutie — wanneer eerst isoleren",
    explanation: "Soms staat geen van beide vergelijkingen al geïsoleerd. Dan moet je **eerst** een variabele isoleren voordat je kunt invullen.\n\n**Voorbeeld**: stelsel\n• 3x + y = 10\n• 2x + 4y = 12\n\n**Welke variabele isoleren?** Kies degene met de **simpelste coëfficiënt** (1 of -1 ideaal). Hier: **y in vergelijking 1** heeft coëfficiënt 1.\n\n**Stap 1**: isoleer y in vergelijking 1:\n```\n3x + y = 10        | -3x\ny = 10 − 3x\n```\n\n**Stap 2**: vul in vergelijking 2:\n```\n2x + 4(10 − 3x) = 12\n```\n\n**Stap 3**: los op:\n```\n2x + 40 − 12x = 12\n-10x + 40 = 12      | -40\n-10x = -28          | :(-10)\nx = 2.8\n```\n\n**Stap 4**: vul x = 2.8 in vergelijking 1 in:\n```\ny = 10 − 3·2.8 = 10 − 8.4 = 1.6\n```\n\n**Oplossing**: (x, y) = (2.8, 1.6).\n\n**Check**:\n• 3·2.8 + 1.6 = 8.4 + 1.6 = 10 ✓\n• 2·2.8 + 4·1.6 = 5.6 + 6.4 = 12 ✓\n\n**Tip — coëfficiënt-check**: kijk altijd in welke vergelijking welke variabele de eenvoudigste coëfficiënt heeft. Daar isoleer je. Anders krijg je veel breuken in je tussenstappen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">eerst isoleren, dan invullen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "72" fill="${COLORS.text}" font-size="11" font-family="monospace">{ 3x + y = 10</text>
<text x="35" y "88" fill="${COLORS.text}" font-size="11" font-family="monospace">{ 2x + 4y = 12</text>
<text x="35" y "108" fill="${COLORS.alt}" font-size="11" font-family="monospace">isoleer y: y = 10 − 3x</text>
<text x="35" y "124" fill="${COLORS.alt}" font-size="11" font-family="monospace">vul in: 2x + 4(10−3x) = 12</text>
<text x="35" y "140" fill="${COLORS.text}" font-size="11" font-family="monospace">→ -10x + 40 = 12 → x = 2.8</text>
<text x="35" y "160" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">(x, y) = (2.8, 1.6)</text>
<text x="35" y "180" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tip: kies variabele met coëfficiënt 1 of -1</text>
</svg>`,
    checks: [
      {
        q: "*In stelsel \"x + 3y = 8 en 2x + 5y = 14\" — welke variabele isoleer je het eerst?*",
        options: [
          "x in vergelijking 1 (heeft coëfficiënt 1)",
          "y in vergelijking 1 (heeft coëfficiënt 3)",
          "x in vergelijking 2 (heeft coëfficiënt 2)",
          "Geen verschil — kies willekeurig",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Coëfficiënt 3 betekent meer rekenwerk. Coëfficiënt 1 is veel makkelijker.",
          "Coëfficiënt 2 vereist een breuk. Coëfficiënt 1 is ideaal.",
          "Coëfficiënt 1 is altijd handiger — minder breuken, minder fouten.",
        ],
      },
    ],
  },

  // ─── C. Optel/aftrek-methode ──────────────────────────
  {
    title: "Optellen-methode (eliminatie)",
    explanation: "**Optellen-methode** (ook wel **eliminatie**): je telt of trekt de twee vergelijkingen op zo'n manier dat **één variabele verdwijnt**.\n\n**Werkt direct als** een variabele in de twee vergelijkingen **dezelfde coëfficiënt** heeft, maar met **tegengesteld teken**.\n\n**Voorbeeld**:\n• 2x + y = 10\n• 3x − y = 5\n\nDe y heeft coëfficiënt +1 in de ene en -1 in de andere. **Optellen** elimineert y:\n\n```\n  2x + y = 10\n+ 3x − y = 5\n  ─────────\n  5x + 0 = 15\n```\n\nDan: 5x = 15 → x = 3.\n\nVul x = 3 in een van de oorspronkelijke vergelijkingen:\n• 2·3 + y = 10 → 6 + y = 10 → y = 4.\n\n**Oplossing**: (x, y) = (3, 4).\n\n**Check**:\n• 2·3 + 4 = 10 ✓\n• 3·3 − 4 = 5 ✓\n\n**Wanneer aftrekken?**\nAls de variabele in beide vergelijkingen **dezelfde coëfficiënt en hetzelfde teken** heeft.\n• 3x + 2y = 11\n• 3x + 5y = 17\n\nNu heeft x in beide coëfficiënt 3 (zelfde teken). **Trek** de eerste van de tweede af:\n```\n  3x + 5y = 17\n− 3x + 2y = 11\n  ───────────\n  0  + 3y = 6\n```\n\n→ y = 2. Vul terug: 3x + 2·2 = 11 → 3x = 7 → x = 7/3.\n\n**Tip**: kies altijd voor de variabele die het makkelijkst te elimineren is (= zelfde coëfficiënt of tegengesteld).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">optellen → variabele elimineren</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "72" fill="${COLORS.text}" font-size="11" font-family="monospace">  2x + y = 10</text>
<text x="35" y "88" fill="${COLORS.text}" font-size="11" font-family="monospace">+ 3x − y = 5</text>
<text x="35" y "98" fill="${COLORS.text}" font-size="11" font-family="monospace">  ─────────</text>
<text x="35" y "112" fill="${COLORS.good}" font-size="11" font-family="monospace">  5x = 15 → x = 3</text>
<text x="35" y "132" fill="${COLORS.alt}" font-size="11" font-family="monospace">vul in: 2·3 + y = 10 → y = 4</text>
<text x="35" y "156" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">(x, y) = (3, 4)</text>
<text x="35" y "176" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">teken-tegengesteld → +    teken-zelfde → −</text>
</svg>`,
    checks: [
      {
        q: "*Stelsel: 4x + y = 13 en 2x − y = 5. Welke methode is direct toepasbaar?*",
        options: [
          "Optellen — y heeft tegengesteld teken (+1 en -1)",
          "Aftrekken — x heeft zelfde teken",
          "Vermenigvuldigen met 2",
          "Geen — eerst manipuleren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Voor aftrekken moeten coëfficiënten gelijk zijn. x heeft 4 in de eerste en 2 in de tweede — niet gelijk.",
          "Niet nodig — y is direct tegengesteld, dus optellen werkt meteen.",
          "Wel direct toepasbaar — optellen elimineert y direct.",
        ],
      },
    ],
  },
  {
    title: "Vermenigvuldigen voor het optellen",
    explanation: "Wat als geen enkele variabele direct dezelfde coëfficiënt heeft? Dan **vermenigvuldig** je een (of beide) vergelijkingen met een factor om dat **wel** voor elkaar te krijgen.\n\n**Voorbeeld**:\n• 2x + 3y = 16\n• 5x + 2y = 18\n\nGeen variabele heeft direct dezelfde coëfficiënt. We willen één variabele wegmaken.\n\n**Mikpunt**: laten we y elimineren. y heeft coëfficiënten 3 en 2. **Kleinste gemeenschappelijke veelvoud** van 3 en 2 = 6.\n\n• Vermenigvuldig vergelijking 1 met **2** → 4x + 6y = 32\n• Vermenigvuldig vergelijking 2 met **3** → 15x + 6y = 54\n\nNu heeft y in beide coëfficiënt 6 (zelfde teken). **Trek** de ene van de andere af:\n\n```\n  15x + 6y = 54\n−  4x + 6y = 32\n  ───────────\n  11x + 0  = 22\n```\n\n→ x = 2. Vul terug in vergelijking 1: 2·2 + 3y = 16 → 4 + 3y = 16 → y = 4.\n\n**Oplossing**: (x, y) = (2, 4).\n\n**Stappenplan vermenigvuldigen + optellen**:\n1. Kies welke variabele je wilt elimineren.\n2. Vind het kleinste gemeenschappelijke veelvoud (kgv) van haar twee coëfficiënten.\n3. Vermenigvuldig elke vergelijking zo dat de variabele kgv als coëfficiënt heeft.\n4. Tel op (bij tegengesteld teken) of trek af (bij zelfde teken).\n5. Los de enkele vergelijking op.\n6. Vul terug, controleer.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">eerst vermenigvuldigen, dan optellen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "72" fill="${COLORS.text}" font-size="11" font-family="monospace">{ 2x + 3y = 16   (·2)</text>
<text x="35" y "88" fill="${COLORS.text}" font-size="11" font-family="monospace">{ 5x + 2y = 18   (·3)</text>
<text x="35" y "112" fill="${COLORS.alt}" font-size="11" font-family="monospace">  4x + 6y = 32</text>
<text x="35" y "126" fill="${COLORS.alt}" font-size="11" font-family="monospace">- 15x + 6y = 54</text>
<text x="35" y "142" fill="${COLORS.text}" font-size="11" font-family="monospace">→ 11x = 22 → x = 2</text>
<text x="35" y "162" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">(x, y) = (2, 4)</text>
<text x="35" y "180" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">kgv coëfficiënten = doel</text>
</svg>`,
    checks: [
      {
        q: "*Stelsel: 2x + 5y = 19 en 3x + 2y = 12. Met welke vermenigvuldiging kun je x elimineren?*",
        options: [
          "Verg. 1 ·3 en verg. 2 ·2 (beide krijgen 6x)",
          "Verg. 1 ·2 en verg. 2 ·3",
          "Beide ·5",
          "Beide ·1",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou 4x in 1 en 9x in 2 geven — niet gelijk.",
          "Beide ·5 geeft 10x in 1 en 15x in 2 — niet gelijk.",
          "Geen verandering. De x-coëfficiënten blijven 2 en 3 — niet gelijk.",
        ],
      },
    ],
  },
  {
    title: "Welke methode kies je?",
    explanation: "**Substitutie of optellen — wanneer wat?**\n\n**Kies substitutie** als:\n• Eén vergelijking al de vorm y = ... of x = ... heeft.\n• Een variabele coëfficiënt 1 of -1 heeft (gemakkelijk te isoleren).\n\n**Kies optellen/aftrekken (eliminatie)** als:\n• Beide vergelijkingen in de vorm ax + by = c staan.\n• Een variabele al dezelfde of tegengestelde coëfficiënt heeft.\n• Coëfficiënten makkelijk gelijk te maken zijn.\n\n**Beide werken altijd** — er is nooit een fout antwoord. Het gaat om snelheid en gemak.\n\n**Voorbeelden**:\n\n**Substitutie ideaal**:\n• y = 2x + 1, 3x − 2y = 5 → invullen werkt direct\n• x − 3y = 4, x + y = 12 → isoleer x in een en vul in\n\n**Eliminatie ideaal**:\n• 2x + y = 9, 4x + y = 13 → trek af, x verdwijnt direct (1·1=1)\n• 3x − 2y = 7, 3x + 5y = 21 → trek af, x verdwijnt\n\n**Examen-tip**: lees beide vergelijkingen voor je kiest. Vraag jezelf af: *welke variabele kan ik het snelst kwijt?*\n\nVerken in deze stap met twee voorbeelden:\n\n• Voorbeeld 1: x + y = 6 en 2x − y = 3 → optellen elimineert y direct.\n• Voorbeeld 2: y = 4x − 3 en 5x + 2y = 12 → substitueer.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">welke methode?</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="105" height="60" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="87" y "82" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">substitutie</text>
<text x="87" y "100" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">y=... al klaar</text>
<text x="87" y "115" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">coëff. 1 of -1</text>
<rect x="160" y="62" width="105" height="60" rx="8" fill="rgba(255,213,79,0.10)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="212" y "82" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">eliminatie</text>
<text x="212" y "100" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">ax+by=c vorm</text>
<text x="212" y "115" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">coëff. matchen</text>
<text x="150" y "150" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">beide werken altijd — kies de snelste</text>
</svg>`,
    checks: [
      {
        q: "*Welke methode ligt het meest voor de hand bij: y = 5x én 2x + y = 14?*",
        options: [
          "Substitutie (y is al geïsoleerd)",
          "Eliminatie (optellen)",
          "Eliminatie (aftrekken)",
          "Grafisch oplossen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Optellen vereist standaard-vorm in beide. Hier is y al netjes alleen.",
          "Aftrekken vereist standaard-vorm in beide met matchende coëfficiënt. Hier is y al alleen.",
          "Grafisch werkt maar is veel werk. Snel: y = 5x is al klaar voor invullen.",
        ],
      },
    ],
  },

  // ─── D. Bijzondere gevallen + woord ───────────────────
  {
    title: "Geen oplossing of oneindig veel",
    explanation: "Soms loopt een stelsel **niet uit op een gewone oplossing**. De methodes geven dan iets vreemds.\n\n**Geval A — Geen oplossing**\n\nVoorbeeld: x + y = 5 en x + y = 7\n• Trek af: 0 = -2 (niet waar!)\n• Conclusie: geen oplossing.\n\nGrafisch: twee parallelle lijnen — kruisen nooit.\n\n**Geval B — Oneindig veel oplossingen**\n\nVoorbeeld: x + y = 5 en 2x + 2y = 10\n• Vermenigvuldig vergelijking 1 met 2 → 2x + 2y = 10\n• Identiek aan vergelijking 2 → de twee vergelijkingen zijn dezelfde.\n• Conclusie: elk paar (x, y) dat de eerste vergelijking maakt, maakt ook de tweede. Oneindig veel oplossingen.\n\nGrafisch: twee lijnen die volledig samenvallen.\n\n**Hoe herken je dit?**\n• Tijdens optellen/aftrekken: krijg je 0 = N (waarbij N ≠ 0)? → **geen oplossing**.\n• Krijg je 0 = 0? → **oneindig veel oplossingen**.\n\n**Hoe schrijf je het op?**\n• Geen oplossing: *\"Geen oplossing — vergelijkingen zijn tegenstrijdig.\"*\n• Oneindig veel: *\"Oneindig veel oplossingen — vergelijkingen zijn equivalent.\"* of *\"Alle (x, y) waarvoor x + y = 5.\"*\n\nIn schoolexamens komt geval A en B niet vaak voor — maar wel handig om te herkennen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">bijzondere gevallen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">geen oplossing:</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="monospace">→ 0 = N (N ≠ 0)</text>
<text x="35" y "108" fill="${COLORS.muted}" font-size="10" font-family="Arial">→ parallelle lijnen</text>
<line x1="30" y1="120" x2="270" y2="120" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "140" fill="${COLORS.paars}" font-size="11" font-family="Arial" font-weight="bold">oneindig veel:</text>
<text x="35" y "156" fill="${COLORS.text}" font-size="11" font-family="monospace">→ 0 = 0</text>
<text x="35" y "172" fill="${COLORS.muted}" font-size="10" font-family="Arial">→ samenvallende lijnen</text>
</svg>`,
    checks: [
      {
        q: "*Bij optellen krijg je: 0 = 5. Wat betekent dat?*",
        options: [
          "Geen oplossing — vergelijkingen zijn tegenstrijdig",
          "Oneindig veel oplossingen",
          "x = 5",
          "Je hebt een rekenfout gemaakt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Oneindig veel zou betekenen 0 = 0. Hier krijgt je iets dat niet kan kloppen → geen oplossing.",
          "0 = 5 is geen waarde voor x. Het zegt dat het stelsel onmogelijk is.",
          "Niet noodzakelijk — bij parallelle lijnen krijg je dit altijd. Het is een geldige uitkomst die zegt: stelsel heeft geen oplossing.",
        ],
      },
    ],
  },
  {
    title: "Woordvragen → stelsel opstellen",
    explanation: "Bij **woordvragen** krijg je een verhaal en moet je zelf het stelsel opstellen. Pas daarna oplossen.\n\n**Voorbeeld**: \"In een mandje zitten 12 stukken fruit: appels en peren samen. Een appel weegt 80g, een peer 120g. Het hele mandje weegt 1200g. Hoeveel appels en peren?\"\n\n**Stap 1 — variabelen kiezen**:\n• x = aantal appels\n• y = aantal peren\n\n**Stap 2 — vergelijkingen opstellen**:\n• Aantal: x + y = 12\n• Gewicht: 80x + 120y = 1200\n\n**Stap 3 — oplossen** (substitutie):\n• Uit eerste: y = 12 − x\n• Vul in tweede: 80x + 120(12 − x) = 1200\n• 80x + 1440 − 120x = 1200\n• -40x + 1440 = 1200 → -40x = -240 → x = 6\n• y = 12 − 6 = 6\n\n**Stap 4 — antwoord in woorden**: 6 appels en 6 peren.\n\n**Stap 5 — controleer**: 6+6 = 12 ✓, en 6·80 + 6·120 = 480 + 720 = 1200 ✓.\n\n**Tip — wat zoek je?**\nKies altijd je variabelen voor wat de vraag wil weten. Hier vraagt het: *hoeveel van elk soort*. Dus x en y staan voor aantallen.\n\n**Andere veel voorkomende woordvragen**:\n• Geld + hoeveelheden (bv. \"X kost 3€, Y kost 5€...\").\n• Snelheid + tijd + afstand (afstand-vergelijkingen).\n• Mengselproblemen (volume + concentratie).\n\nDe truc is altijd: **bedenk twee feiten** uit het verhaal en zet ze om in twee vergelijkingen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">woordvraag → stelsel</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.muted}" font-size="11" font-family="Arial">"12 fruit, weegt 1200g..."</text>
<text x="35" y "94" fill="${COLORS.alt}" font-size="11" font-family="Arial">↓ 2 feiten → 2 vergelijkingen</text>
<text x="35" y "114" fill="${COLORS.text}" font-size="11" font-family="monospace">{ x + y = 12</text>
<text x="35" y "130" fill="${COLORS.text}" font-size="11" font-family="monospace">{ 80x + 120y = 1200</text>
<text x="35" y "152" fill="${COLORS.alt}" font-size="11" font-family="Arial">↓ oplossen</text>
<text x="35" y "172" fill="${COLORS.good}" font-size="12" font-family="monospace" font-weight="bold">6 appels, 6 peren</text>
</svg>`,
    checks: [
      {
        q: "*\"Twee getallen samen 20, hun verschil 6. Welke vergelijkingen?\"*",
        options: [
          "x + y = 20 en x − y = 6",
          "x · y = 20 en x · y = 6",
          "x + y = 20 en 2x + 2y = 6",
          "x − y = 20 en x − y = 6",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Samen' = optellen, niet vermenigvuldigen.",
          "'Verschil' = aftrekken, niet 2x + 2y.",
          "Optie '2x' bestaat in tweede vergelijking — geen factor 2.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — substitutie & eliminatie",
    explanation: "Vier vragen — combinatie van beide methoden.\n\n**Tip**: kies de methode die het snelste werkt. Als één variabele coëfficiënt 1 heeft → substitutie. Als beide in standaard-vorm en coëfficiënten matchen → eliminatie.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">x, y</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">kies de juiste methode 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Los op: x + y = 10 en 2x − y = 5. Wat is x?*",
        options: ["x = 5", "x = 10", "x = 7.5", "x = 3.33"],
        answer: 0,
        wrongHints: [
          null,
          "Optellen elimineert y: 3x = 15 → x = 5, niet 10.",
          "Onjuist — 7.5 = 15/2, maar je deelt door 3.",
          "Onjuist — geen ingewikkelde breuk hier.",
        ],
      },
      {
        q: "*Los op: y = 3x − 4 en 2x + y = 6. Wat is x?*",
        options: ["x = 2", "x = 4", "x = 1", "x = 3"],
        answer: 0,
        wrongHints: [
          null,
          "Substitutie: 2x + (3x−4) = 6 → 5x = 10 → x = 2.",
          "Check: y = 3·1 - 4 = -1, en 2·1 + (-1) = 1 ≠ 6.",
          "Check: y = 3·3 - 4 = 5, en 2·3 + 5 = 11 ≠ 6.",
        ],
      },
      {
        q: "*Stelsel: 4x + 3y = 23 en 2x + 5y = 21. Wat is y?*",
        options: ["y = 5", "y = 3", "y = 7", "y = 2"],
        answer: 1,
        wrongHints: [
          "Check: x bij y=5 → 4x + 15 = 23 → 4x = 8 → x = 2. Tweede: 2·2 + 5·5 = 29 ≠ 21.",
          null,
          "Check: 4x + 21 = 23 → 4x = 2 → x = 0.5. Tweede: 1 + 35 = 36 ≠ 21.",
          "Check: 4x + 6 = 23 → x = 4.25. Tweede: 8.5 + 10 = 18.5 ≠ 21.",
        ],
      },
      {
        q: "*\"Een hond + 2 katten = 8 kg. 2 honden + 1 kat = 11 kg.\" Hoeveel weegt een hond?*",
        options: ["Hond = 4.67 kg", "Hond = 4 kg", "Hond = 5 kg", "Hond = 3 kg"],
        answer: 0,
        wrongHints: [
          null,
          "Stel op: h + 2k = 8 én 2h + k = 11. Los op: h = 14/3 ≈ 4.67, k = 5/3.",
          "5 zou betekenen 5 + 2k = 8 → k = 1.5. Check 2: 2·5 + 1.5 = 11.5 ≠ 11.",
          "3 zou betekenen 3 + 2k = 8 → k = 2.5. Check 2: 2·3 + 2.5 = 8.5 ≠ 11.",
        ],
      },
    ],
  },
  {
    title: "Examen-stijl",
    explanation: "Drie examen-stijl vragen.\n\n**Tip**: bij ingewikkelde stelsels — schrijf elke stap netjes op. Een '|·2' of '|+y' in de marge maakt het verschil tussen een goed en een fout antwoord.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap voor stap 🎯</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 3x + 2y = 18 en 5x − 2y = 14. Welk paar?*",
        options: ["(4, 3)", "(3, 4.5)", "(2, 6)", "(5, 1.5)"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 3·3 + 2·4.5 = 18 ✓, maar 5·3 − 2·4.5 = 6 ≠ 14.",
          "Check: 3·2 + 2·6 = 18 ✓, maar 5·2 − 2·6 = -2 ≠ 14.",
          "Check: 3·5 + 2·1.5 = 18 ✓, maar 5·5 − 2·1.5 = 22 ≠ 14.",
        ],
      },
      {
        q: "*\"Een fietsentocht: 60 km. Eerste deel 15 km/u, tweede 20 km/u. Totaal 3.5 uur.\" Hoe lang duurde het eerste deel?*",
        options: [
          "2 uur",
          "1 uur",
          "1.5 uur",
          "3 uur",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Check: 1·15 + 2.5·20 = 65 ≠ 60.",
          "Check: 1.5·15 + 2·20 = 22.5 + 40 = 62.5 ≠ 60.",
          "Check: 3·15 + 0.5·20 = 45 + 10 = 55 ≠ 60.",
        ],
      },
      {
        q: "*Stelsel: 2x − y = 4 en 4x − 2y = 8. Aantal oplossingen?*",
        options: [
          "Oneindig veel — vergelijking 2 is 2× vergelijking 1",
          "Eén",
          "Geen",
          "Twee",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Vermenigvuldig vergelijking 1 met 2: 4x - 2y = 8. Identiek aan vergelijking 2 → niet één unieke oplossing.",
          "Geen oplossing zou tegenstrijdig zijn. Hier zijn ze juist hetzelfde.",
          "Een lineair stelsel heeft 0, 1 of oneindig — niet precies 2.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "Laatste twee vragen op examen-niveau.\n\n**Klaar?** Dan beheers je stelsels van twee vergelijkingen met twee onbekenden — een belangrijke vaardigheid voor klas 3 en hoger (kwadratische vergelijkingen, snijden van krommen, en in het examen wiskunde A/B).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.paars}" font-size="28" font-family="Arial" font-weight="bold">stelsel</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.paars}" font-size="22" font-family="Arial" font-weight="bold">op</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je beheerst het 🎓</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 7x + 3y = 27 en 5x − 2y = 4. Wat is x?*",
        options: ["x = 2", "x = 3", "x = 4", "x = 1"],
        answer: 1,
        wrongHints: [
          "Check: 7·2 + 3y = 27 → 3y = 13 → y = 13/3. Tweede: 5·2 − 2·(13/3) = 10 − 26/3 = 4/3 ≠ 4.",
          null,
          "Check: 7·4 + 3y = 27 → 3y = -1 → y = -1/3. Tweede: 5·4 − 2·(-1/3) = 20 + 2/3 ≠ 4.",
          "Check: 7·1 + 3y = 27 → y = 20/3. Tweede: 5 − 40/3 = -25/3 ≠ 4.",
        ],
      },
      {
        q: "*\"In een kantine: 3 koffies + 2 broodjes = €11. 2 koffies + 4 broodjes = €14.\" Wat kost een broodje?*",
        options: ["€2.50", "€2", "€3", "€4"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 3k + 4 = 11 → k = 7/3. Tweede: 2·(7/3) + 8 = 38/3 ≠ 14.",
          "Check: 3k + 6 = 11 → k = 5/3. Tweede: 2·(5/3) + 12 = 46/3 ≠ 14.",
          "Check: 3k + 8 = 11 → k = 1. Tweede: 2 + 16 = 18 ≠ 14.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const stelsels = {
  id: "stelsels",
  title: "Stelsels van vergelijkingen",
  emoji: "🔗",
  level: "klas2-3-vmbo-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.vergelijking"],
  intro:
    "Twee vergelijkingen, twee onbekenden — oplossen met substitutie of optellen/aftrekken (eliminatie). Plus woordvragen waarin je zelf het stelsel moet opstellen. Vervolg op vergelijkingen-oplossen.",
  triggerKeywords: [
    "stelsel", "stelsels", "twee vergelijkingen",
    "substitutie", "eliminatie", "optellen aftrekken",
    "x en y", "snijpunt twee lijnen", "twee onbekenden",
  ],
  chapters,
  steps,
};

export default stelsels;

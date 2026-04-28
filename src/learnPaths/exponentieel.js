// Leerpad: Exponentiële groei en afname — Wiskunde klas 3
// 14 stappen in 5 hoofdstukken (A t/m E).
// Voorbouw op machten + lineaire-formules. Voorbereiding op havo wisA.

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

const baseAxes = (xMin = 0, xMax = 6, yMin = 0, yMax = 100) => {
  const sx = 200 / (xMax - xMin);
  const sy = 180 / (yMax - yMin);
  const ox = -xMin * sx;
  const oy = 180 - (-yMin * sy);
  return { ox, oy, sx, sy, toX: (x) => ox + x * sx, toY: (y) => oy - y * sy };
};

const stepEmojis = [
  "📈", "🚀", "📊",                    // A. Lineair vs exponentieel
  "✖️", "%", "🔄",                     // B. Groeifactor
  "📐", "🌐", "🧮",                    // C. Formule
  "📉", "☢️",                            // D. Afname
  "🎯", "📝", "🏆",                    // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Lineair vs exponentieel", emoji: "📈", from: 0, to: 2 },
  { letter: "B", title: "Groeifactor en percentage", emoji: "%", from: 3, to: 5 },
  { letter: "C", title: "Formule N(t) = b·g^t", emoji: "🧮", from: 6, to: 8 },
  { letter: "D", title: "Afname + halveringstijd", emoji: "📉", from: 9, to: 10 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 11, to: 13 },
];

const steps = [
  // ─── A. Lineair vs exponentieel ───────────────────────
  {
    title: "Lineaire groei — constant verschil",
    explanation: "Bij **lineaire groei** stijgt iets met een **vast getal** per stap.\n\n**Voorbeeld**: een spaarpot. Je begint met €10 en spaart elke maand €5 bij.\n\n| Maand | Bedrag |\n|---|---|\n| 0 | €10 |\n| 1 | €15 |\n| 2 | €20 |\n| 3 | €25 |\n| 4 | €30 |\n\n**Verschil per stap**: altijd +€5 (constant).\n\n**Formule lineair**: y = ax + b\n• a = constante stijging per stap\n• b = beginwaarde\n\nVoor de spaarpot: y = 5x + 10 (met x = aantal maanden).\n\n**Grafiek lineair**: een **rechte lijn**.\n\n**Andere lineaire voorbeelden**:\n• Per uur werken €12 verdienen → geld = 12·uren.\n• Auto rijdt 60 km/u → afstand = 60·tijd.\n• Een plant groeit elke week 2 cm → hoogte = 2·weken + beginhoogte.\n\nDit ken je al van het leerpad **lineaire formules**. Hier is het de vergelijking met **exponentieel** dat we gaan maken.",
    svg: (() => {
      const { toX, toY } = baseAxes(0, 6, 0, 50);
      // y = 5x + 10
      const pts = [0, 1, 2, 3, 4, 5, 6].map(x => ({ x, y: 5 * x + 10 }));
      const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<path d="${path}" stroke="${COLORS.good}" stroke-width="2" fill="none"/>
${pts.map(p => `<circle cx="${toX(p.x)}" cy="${toY(p.y)}" r="3" fill="${COLORS.good}"/>`).join('')}
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">y = 5x + 10 (lineair, rechte lijn)</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Een plant is 10 cm. Hij groeit 3 cm per week. Welke vorm heeft de groei?*",
        options: [
          "Lineair (vast +3 cm per stap)",
          "Exponentieel (verdubbelt elke stap)",
          "Kwadratisch",
          "Geen groei",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Exponentieel zou betekenen dat de groei zelf groter wordt elke week. Hier is +3 cm constant.",
          "Kwadratisch zou y = ax² zijn. Hier is verschil constant, dus lineair.",
          "Wel groei — elke week +3.",
        ],
      },
    ],
  },
  {
    title: "Exponentiële groei — vaste factor",
    explanation: "Bij **exponentiële groei** wordt iets elke stap met dezelfde **factor** vermenigvuldigd (niet vast getal erbij).\n\n**Voorbeeld**: een bacterie deelt elke uur in tweeën. Je begint met 1.\n\n| Uur | Aantal |\n|---|---|\n| 0 | 1 |\n| 1 | 2 |\n| 2 | 4 |\n| 3 | 8 |\n| 4 | 16 |\n| 5 | 32 |\n\n**Verschil per stap**: NIET constant! +1, +2, +4, +8, +16. Wel: het aantal **verdubbelt** steeds → ×2 elke stap.\n\n**Formule exponentieel**: N = b · g^t\n• N = aantal op tijdstip t\n• b = beginhoeveelheid (op t=0)\n• g = groeifactor (×2 in dit voorbeeld)\n• t = tijd (= aantal stappen)\n\nVoor de bacterie: N = 1 · 2^t.\n\n**Grafiek exponentieel**: een **kromme lijn** die steeds steiler omhoog gaat.\n\n**Andere voorbeelden**:\n• Bevolkingsgroei (×1.02 per jaar = 2% groei per jaar)\n• Spaarrekening met rente (×1.05 per jaar = 5% per jaar)\n• Virusverspreiding (in begin)\n• Geluid in dB-schaal (logaritmisch ↔ exponentieel)\n\n**Cruciaal verschil met lineair**:\n• **Lineair**: + constant.\n• **Exponentieel**: × constant.",
    svg: (() => {
      const { toX, toY } = baseAxes(0, 6, 0, 64);
      const pts = [0, 1, 2, 3, 4, 5, 6].map(x => ({ x, y: Math.pow(2, x) }));
      const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<path d="${path}" stroke="${COLORS.alt}" stroke-width="2" fill="none"/>
${pts.map(p => `<circle cx="${toX(p.x)}" cy="${toY(p.y)}" r="3" fill="${COLORS.alt}"/>`).join('')}
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">N = 2^t (exponentieel, krom omhoog)</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Een bacterie verdubbelt elke uur. Welke vorm heeft de groei?*",
        options: [
          "Exponentieel (× 2 per uur)",
          "Lineair (constante toename)",
          "Constant (geen groei)",
          "Aftrekkend",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verdubbelen = vermenigvuldigen, niet optellen. Lineair zou +N per uur zijn.",
          "Wel groei — verdubbelt elke uur.",
          "Aftrekkend = afname. Hier juist toename.",
        ],
      },
    ],
  },
  {
    title: "Tabel + grafiek vergelijken",
    explanation: "**Hoe herken je lineair vs exponentieel uit een tabel?**\n\n**Truc lineair**: kijk naar de **verschillen** tussen opeenvolgende waardes.\n• Constant verschil → lineair.\n\n**Truc exponentieel**: kijk naar de **factor** tussen opeenvolgende waardes.\n• Constante factor → exponentieel.\n\n**Voorbeeld 1** (lineair):\n| t | y |\n|---|---|\n| 0 | 5 |\n| 1 | 8 |\n| 2 | 11 |\n| 3 | 14 |\n• Verschil: +3, +3, +3 (constant) → **lineair**, y = 3t + 5.\n\n**Voorbeeld 2** (exponentieel):\n| t | N |\n|---|---|\n| 0 | 100 |\n| 1 | 110 |\n| 2 | 121 |\n| 3 | 133.1 |\n• Verschil: +10, +11, +12.1 (niet constant!).\n• Factor: 110/100 = 1.1, 121/110 = 1.1, 133.1/121 = 1.1 (constant!) → **exponentieel**, N = 100 · 1.1^t.\n\n**Grafisch**:\n• Lineair: rechte lijn (constante helling).\n• Exponentieel: kromme die steeds steiler wordt (bij g > 1).\n\n**Wat is wat in de praktijk?**\n• Salaris met vast bedrag erbij per jaar = lineair.\n• Salaris met vast percentage erbij per jaar = exponentieel.\n• Auto-snelheid bij vaste versnelling = lineair.\n• Aantal mensen in een groeiende stad (vast %) = exponentieel.",
    svg: (() => {
      const { toX, toY } = baseAxes(0, 5, 0, 40);
      const linPts = [0, 1, 2, 3, 4, 5].map(x => ({ x, y: 5 + 3 * x }));
      const expPts = [0, 1, 2, 3, 4, 5].map(x => ({ x, y: 5 * Math.pow(1.5, x) }));
      const linPath = linPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      const expPath = expPts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<path d="${linPath}" stroke="${COLORS.good}" stroke-width="2" fill="none"/>
<path d="${expPath}" stroke="${COLORS.alt}" stroke-width="2" fill="none"/>
<text x="100" y="20" text-anchor="middle" fill="${COLORS.alt}" font-size="10" font-family="Arial">exponentieel</text>
<text x="170" y="80" fill="${COLORS.good}" font-size="10" font-family="Arial">lineair</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">verschil ↔ rechte ·  factor ↔ kromme</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Tabel: t=0:50, t=1:75, t=2:112.5, t=3:168.75. Welke groei?*",
        options: [
          "Exponentieel (factor ×1.5 elke stap)",
          "Lineair (+25 elke stap)",
          "Constant",
          "Niet te bepalen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Verschil is +25, +37.5, +56.25 (niet constant). Reken factor: 75/50 = 1.5, 112.5/75 = 1.5, 168.75/112.5 = 1.5 (wel constant).",
          "Constant = geen groei. Hier is wel groei.",
          "Wel te bepalen — kijk naar verschillen of factoren.",
        ],
      },
    ],
  },

  // ─── B. Groeifactor + percentage ──────────────────────
  {
    title: "Wat is een groeifactor?",
    explanation: "De **groeifactor** g zegt **met welke factor** je elke stap vermenigvuldigt.\n\n**Voorbeelden**:\n\n**Verdubbelen elke stap** → g = **2**.\n• Voorbeeld: bacterie. 1 → 2 → 4 → 8 → ...\n\n**Verdriedubbelen elke stap** → g = **3**.\n• Voorbeeld: 1 → 3 → 9 → 27 → ...\n\n**5% groei per stap** → g = **1.05**.\n• Voorbeeld: spaarrekening. €100 → €105 → €110.25 → ...\n\n**10% afname per stap** → g = **0.9**.\n• Voorbeeld: aantal vissen daalt. 1000 → 900 → 810 → ...\n\n**Halveren elke stap** → g = **0.5** (= 1/2).\n• Voorbeeld: radioactief verval. 100 → 50 → 25 → 12.5 → ...\n\n**Algemene regels**:\n• g > 1 → **groei** (toename)\n• g = 1 → geen verandering\n• 0 < g < 1 → **afname**\n• g = 0 → alles weg in één stap (zeldzaam)\n\n**Hoe vind je g uit een tabel?**\nDeel een waarde door de vorige.\n• 75 / 50 = 1.5 → g = 1.5\n• 90 / 100 = 0.9 → g = 0.9 (afname van 10%)\n\n**Tip**: bereken g uit **twee opeenvolgende waardes**, en check daarna of de derde ook past. Zo voorkom je rekenfouten.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">groeifactor g</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "76" fill="${COLORS.text}" font-size="11" font-family="monospace">g = 2  → verdubbelen</text>
<text x="35" y "94" fill="${COLORS.text}" font-size="11" font-family="monospace">g = 1.05 → 5% groei</text>
<text x="35" y "112" fill="${COLORS.text}" font-size="11" font-family="monospace">g = 0.9 → 10% afname</text>
<text x="35" y "130" fill="${COLORS.text}" font-size="11" font-family="monospace">g = 0.5 → halveren</text>
<line x1="30" y1="142" x2="270" y2="142" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "162" fill="${COLORS.muted}" font-size="11" font-family="Arial">vind g: deel waarde door vorige</text>
<text x="35" y "178" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">g > 1 = groei · g < 1 = afname</text>
</svg>`,
    checks: [
      {
        q: "*Tabel: 100, 80, 64, 51.2. Wat is de groeifactor?*",
        options: ["g = 0.8", "g = 1.25", "g = -20", "g = 0.2"],
        answer: 0,
        wrongHints: [
          null,
          "g = 1.25 zou 80/100 = 1.25 zijn. Maar 80 < 100, dus deel andersom: 80/100 = 0.8.",
          "Groeifactor is altijd positief (geen min). -20 zou een verschil aangeven, niet de factor.",
          "g = 0.2 zou alle waardes door 5 maken. 100·0.2 = 20, niet 80.",
        ],
      },
    ],
  },
  {
    title: "Percentage → groeifactor",
    explanation: "**Bij groei** (toename per stap):\n**g = 1 + (percentage / 100)**\n\nOf in het kort: **g = 1 + p**, waarbij p de fractie is (5% = 0.05).\n\n**Voorbeelden**:\n• 5% groei → g = 1 + 0.05 = **1.05**\n• 8% groei → g = 1 + 0.08 = **1.08**\n• 100% groei (verdubbelen) → g = 1 + 1 = **2**\n• 0.5% groei → g = 1 + 0.005 = **1.005**\n\n**Bij afname** (vermindering per stap):\n**g = 1 − (percentage / 100)**\n\n**Voorbeelden**:\n• 5% afname → g = 1 − 0.05 = **0.95**\n• 10% afname → g = 1 − 0.10 = **0.90**\n• 50% afname (halveren) → g = 1 − 0.5 = **0.5**\n• 25% afname → g = 1 − 0.25 = **0.75**\n\n**Waarom 1 + p?**\nBij 5% groei wordt elke waarde 100% + 5% = 105% van de vorige. 105% = 1.05.\n\n**Voorbeeld toepassen**:\n*\"Een spaarrekening levert 4% rente per jaar. Je begint met €500. Wat is g?\"*\n• 4% groei → g = 1.04.\n• Na 1 jaar: 500 · 1.04 = €520.\n• Na 2 jaar: 500 · 1.04² = 500 · 1.0816 = €540.80.\n\n**Belangrijk**: percentage moet **per dezelfde periode** zijn als g. \"5% per jaar\" ≠ \"5% per maand\". Eén stap in de formule = één periode.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">% → groeifactor</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">groei: g = 1 + p</text>
<text x="35" y "92" fill="${COLORS.muted}" font-size="11" font-family="Arial">5% → 1.05 · 8% → 1.08 · 100% → 2</text>
<line x1="30" y1="106" x2="270" y2="106" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "128" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">afname: g = 1 − p</text>
<text x="35" y "146" fill="${COLORS.muted}" font-size="11" font-family="Arial">5% af → 0.95 · 10% af → 0.90</text>
<text x="35" y "164" fill="${COLORS.muted}" font-size="11" font-family="Arial">50% af → 0.5 (halveren)</text>
<text x="35" y "180" fill="${COLORS.text}" font-size="10" font-family="Arial" font-style="italic">% per dezelfde periode als de stap</text>
</svg>`,
    checks: [
      {
        q: "*Een populatie groeit 7% per jaar. Wat is de groeifactor per jaar?*",
        options: ["1.07", "0.07", "0.93", "7"],
        answer: 0,
        wrongHints: [
          null,
          "0.07 is de fractie van de groei. Maar de factor = 1 + p = 1.07.",
          "0.93 = afname van 7%. Hier juist groei.",
          "7 zou 600% groei zijn (verzeven-en-een-halfvuldigen). Te groot.",
        ],
      },
      {
        q: "*Een huizenprijs daalt 4% per jaar. Wat is g?*",
        options: ["0.96", "1.04", "0.04", "-0.04"],
        answer: 0,
        wrongHints: [
          null,
          "1.04 = 4% groei. Hier juist afname.",
          "0.04 zou 96% afname betekenen. Onlogisch.",
          "Groeifactor is altijd positief.",
        ],
      },
    ],
  },
  {
    title: "Groeifactor → percentage",
    explanation: "Andersom: van **groeifactor terug** naar percentage.\n\n**Bij g > 1** (groei): **percentage = (g − 1) · 100**\n\n• g = 1.05 → (1.05 − 1) · 100 = **5% groei**\n• g = 1.20 → (1.20 − 1) · 100 = **20% groei**\n• g = 2 → (2 − 1) · 100 = **100% groei** (verdubbelen)\n\n**Bij g < 1** (afname): **percentage afname = (1 − g) · 100**\n\n• g = 0.95 → (1 − 0.95) · 100 = **5% afname**\n• g = 0.80 → (1 − 0.80) · 100 = **20% afname**\n• g = 0.5 → (1 − 0.5) · 100 = **50% afname** (halveren)\n\n**Voorbeeld toepassen**:\n*\"Bij een formule N = 100 · 1.08^t — hoeveel procent groei per stap?\"*\n• g = 1.08 → 8% groei.\n\n*\"N = 50 · 0.93^t — hoeveel procent afname?\"*\n• g = 0.93 → (1 − 0.93) · 100 = 7% afname.\n\n**Tip**: het verschil tussen g en 1 is altijd het procentueel verschil per stap.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">g → %</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">groei (g > 1):</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="monospace">1.05 → 5% · 1.20 → 20%</text>
<text x="35" y "108" fill="${COLORS.text}" font-size="11" font-family="monospace">2.00 → 100% (verdubbelen)</text>
<line x1="30" y1="120" x2="270" y2="120" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "142" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">afname (g < 1):</text>
<text x="35" y "160" fill="${COLORS.text}" font-size="11" font-family="monospace">0.95 → 5% af · 0.80 → 20% af</text>
<text x="35" y "176" fill="${COLORS.text}" font-size="11" font-family="monospace">0.50 → 50% af (halveren)</text>
</svg>`,
    checks: [
      {
        q: "*Groeifactor g = 1.15. Hoeveel procent groei per stap?*",
        options: ["15%", "1.15%", "115%", "1.5%"],
        answer: 0,
        wrongHints: [
          null,
          "1.15% is g zelf als procent — onjuist. Trek eerst 1 af: (1.15 − 1) · 100 = 15%.",
          "115% zou betekenen méér dan verdubbelen. g = 2.15 zou 115% zijn, niet 1.15.",
          "1.5% zou g = 1.015 zijn. Hier g = 1.15 → 15%.",
        ],
      },
    ],
  },

  // ─── C. Formule N(t) = b·g^t ──────────────────────────
  {
    title: "De formule N(t) = b · g^t",
    explanation: "De **standaard-formule** voor exponentiële groei is:\n\n**N(t) = b · g^t**\n\n• **N(t)** = aantal/hoeveelheid op tijdstip t\n• **b** = beginhoeveelheid (op t = 0)\n• **g** = groeifactor (per stap)\n• **t** = aantal stappen sinds begin\n\n**Voorbeeld**: 50 bacteriën verdubbelen elk uur.\n• b = 50 (begin)\n• g = 2 (verdubbelen)\n• Formule: N(t) = 50 · 2^t\n\nNa 1 uur: N(1) = 50 · 2¹ = 100\nNa 2 uur: N(2) = 50 · 2² = 200\nNa 4 uur: N(4) = 50 · 2⁴ = 800\nNa 10 uur: N(10) = 50 · 2¹⁰ = 51 200\n\n**Ander voorbeeld**: spaarrekening €1000 met 4% rente per jaar.\n• b = 1000\n• g = 1.04\n• N(t) = 1000 · 1.04^t\n\nNa 5 jaar: N(5) = 1000 · 1.04⁵ = 1000 · 1.217 = €1216.65.\n\n**Berekenen op de rekenmachine**:\n• 50 · 2 ^ 4 = 800\n• 1000 · 1.04 ^ 5 = 1216.65\n\nGebruik de **machtknop** ^ of x^y op je rekenmachine.\n\n**Belangrijk**:\n• N(0) = b (begin) — dus altijd 'b' bij t = 0.\n• De grafiek begint links bij (0, b) en gaat krom omhoog (bij g > 1) of omlaag (bij g < 1).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">N(t) = b · g^t</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="11" font-family="Arial">b = beginhoeveelheid (t=0)</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="Arial">g = groeifactor</text>
<text x="35" y "110" fill="${COLORS.text}" font-size="11" font-family="Arial">t = aantal stappen</text>
<line x1="30" y1="124" x2="270" y2="124" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "146" fill="${COLORS.muted}" font-size="11" font-family="Arial">50 bacteriën · ×2 elk uur:</text>
<text x="35" y "164" fill="${COLORS.text}" font-size="12" font-family="monospace" font-weight="bold">N(t) = 50 · 2^t</text>
<text x="35" y "180" fill="${COLORS.muted}" font-size="10" font-family="Arial">N(4) = 50·16 = 800</text>
</svg>`,
    checks: [
      {
        q: "*Een populatie van 200 verdubbelt elk jaar. N(3) = ?*",
        options: ["1600", "600", "1200", "800"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is 200 · 3 (lineair). Maar exponentieel: 200 · 2³ = 200 · 8 = 1600.",
          "1200 = 200 + 1000? Geen logische berekening. Reken: 200 · 2 · 2 · 2.",
          "Dat is 200 · 4 = 200 · 2². Maar t = 3 → 200 · 2³ = 1600.",
        ],
      },
    ],
  },
  {
    title: "Toepassingen — bevolking, rente, virus",
    explanation: "Exponentiële groei zit overal in de echte wereld. Een aantal voorbeelden:\n\n**1. Bevolkingsgroei**\nDe wereldbevolking groeide ~1% per jaar in de 20e eeuw.\n• g = 1.01, b = 5 miljard (1990)\n• N(t) = 5 · 1.01^t (in miljarden, met t = jaren sinds 1990)\n\n**2. Rente / spaarrekening**\nGeld op de bank groeit met **samengestelde rente**: rente over rente.\n• g = 1 + r (r = rente-fractie)\n• b = startbedrag\n• N(t) = b · g^t\n\n**3. Virusverspreiding** (in begin-fase)\nElk besmet persoon besmet gemiddeld R andere personen per generatie.\n• g = R (= reproductiefactor)\n• Beginnend met 1 persoon: N(t) = R^t\n• R = 2 → exponentiële verdubbeling per generatie.\n\n**4. Prijsstijging / inflatie**\n• g = 1 + inflatie-percentage / 100\n• Bij 3% inflatie: prijzen worden 1.03^t na t jaar.\n\n**5. Radioactief verval** (afname, komt in volgende stap).\n\n**Voorbeeld berekening**:\n*\"Een hardloper traint elke week 5% meer kilometers dan de vorige week. Hij begint met 10 km. Hoeveel km in week 8?\"*\n• b = 10, g = 1.05, t = 8\n• N(8) = 10 · 1.05⁸ = 10 · 1.477 = **14.8 km**.\n\n**Tip**: schrijf altijd eerst op wat b, g, en t zijn. Dan kun je de formule invullen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">toepassingen exponentieel</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "74" fill="${COLORS.text}" font-size="11" font-family="Arial">🌍 bevolking ~1% per jaar (g=1.01)</text>
<text x="35" y "92" fill="${COLORS.text}" font-size="11" font-family="Arial">💰 rente — spaarrekening</text>
<text x="35" y "110" fill="${COLORS.text}" font-size="11" font-family="Arial">🦠 virusverspreiding (R-factor)</text>
<text x="35" y "128" fill="${COLORS.text}" font-size="11" font-family="Arial">📈 inflatie (~3% per jaar)</text>
<text x="35" y "146" fill="${COLORS.text}" font-size="11" font-family="Arial">☢️ radioactief verval (afname)</text>
<text x="150" y "176" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tip: schrijf b, g, t apart op</text>
</svg>`,
    checks: [
      {
        q: "*Spaarrekening: €1000 begin, 5% rente per jaar. Bedrag na 3 jaar?*",
        options: ["€1157.63", "€1150", "€1015", "€1500"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is lineair: 1000 + 3·50 = 1150 (zonder rente over rente). Exponentieel: 1000·1.05³ = 1157.63.",
          "Dat is 1000 + 15 = 1015 (1.5% in totaal). Maar 5% per jaar gedurende 3 jaar = 15.7%.",
          "Veel te veel — 1500 = +50%, niet +15.7%.",
        ],
      },
    ],
  },
  {
    title: "Berekenen voor verschillende t",
    explanation: "Vaak moet je de formule **meerdere keren** evalueren — voor verschillende t-waardes. Doe het netjes en stap voor stap.\n\n**Voorbeeld**: N(t) = 80 · 0.9^t (= 10% afname per stap, beginwaarde 80).\n\n**Tabel maken**:\n| t | N(t) |\n|---|---|\n| 0 | 80 · 0.9⁰ = 80 |\n| 1 | 80 · 0.9¹ = 72 |\n| 2 | 80 · 0.9² = 64.8 |\n| 3 | 80 · 0.9³ = 58.32 |\n| 5 | 80 · 0.9⁵ = 47.24 |\n| 10 | 80 · 0.9¹⁰ ≈ 27.89 |\n\n**Tip**: rekenen op rekenmachine met de **^**-knop of de **x^y**-knop.\n• 80 × 0.9 ^ 5 = 47.24\n• Op sommige rekenmachines: 80 · 0.9 y^x 5 = 47.24\n\n**Handig om in tabelvorm te denken**:\n• Soms vraagt een examen om \"vul de tabel verder in voor t = 0, 1, 2, ..., 8\".\n• Bereken elke cel apart en vul in.\n\n**Let op decimale precisie**: \n• Op examens vaak afgerond op 1 decimaal of zoals gevraagd.\n• Niet eerder afronden — pas in laatste antwoord.\n\n**Examen-vraag**: \"Volgens de formule N(t) = 200 · 1.06^t, hoeveel zijn er na 4 jaar?\"\n• N(4) = 200 · 1.06⁴ = 200 · 1.262 = **252.5** (rond af op 1 decimaal: 252.5).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">tabel maken: N(t) = 80 · 0.9^t</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="40" y "74" fill="${COLORS.text}" font-size="11" font-family="monospace">t  |  N(t)</text>
<text x="40" y "90" fill="${COLORS.text}" font-size="11" font-family="monospace">0  |  80</text>
<text x="40" y "104" fill="${COLORS.text}" font-size="11" font-family="monospace">1  |  72</text>
<text x="40" y "118" fill="${COLORS.text}" font-size="11" font-family="monospace">2  |  64.8</text>
<text x="40" y "132" fill="${COLORS.text}" font-size="11" font-family="monospace">5  |  47.24</text>
<text x="40" y "146" fill="${COLORS.text}" font-size="11" font-family="monospace">10 |  27.89</text>
<line x1="30" y1="158" x2="270" y2="158" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y "176" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">rekenmachine: ^ of x^y · niet eerder afronden</text>
</svg>`,
    checks: [
      {
        q: "*N(t) = 100 · 1.5^t. Wat is N(2)?*",
        options: ["225", "150", "300", "450"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is N(1). N(2) = 100 · 1.5² = 100 · 2.25 = 225.",
          "Dat is 100 · 3 (lineair). Reken: 100 · 1.5².",
          "Te groot. 100 · 1.5² = 225, niet 450 (dat zou 1.5·100·3 zijn).",
        ],
      },
    ],
  },

  // ─── D. Afname + halveringstijd ───────────────────────
  {
    title: "Afname (g < 1)",
    explanation: "**Afname** = exponentiële daling. De formule blijft hetzelfde, alleen is **g < 1**.\n\n**Voorbeelden**:\n\n**Vissen verdwijnen 5% per jaar uit een meer**:\n• g = 0.95\n• Begin: 1000 vissen.\n• N(t) = 1000 · 0.95^t\n• Na 1 jaar: 950\n• Na 5 jaar: 1000 · 0.95⁵ = 774\n• Na 10 jaar: 1000 · 0.95¹⁰ = 599\n\n**Auto verliest 12% waarde per jaar**:\n• g = 0.88\n• Begin: €30 000.\n• N(t) = 30 000 · 0.88^t\n• Na 5 jaar: 30 000 · 0.88⁵ = €15 832\n\n**Medicijn-concentratie halveert elke 3 uur** (komt in volgende stap als 'halveringstijd').\n\n**Grafiek bij afname**:\n• Lijn begint hoog (links bij b) en daalt **steeds langzamer** richting 0.\n• Bereikt nooit echt 0 — wel oneindig dichtbij.\n\n**Belangrijk**:\n• 5% afname per stap is **niet** hetzelfde als 50% na 10 stappen!\n  • Lineair (verkeerd): 5%·10 = 50% af → 500 over.\n  • Exponentieel (juist): 1000·0.95¹⁰ = 599 over (≈40% afname).\n• Dat komt omdat elke 5% van een steeds **kleinere** hoeveelheid is.\n\n**Voorbeeld**: \"Een sportschool verliest 8% leden per maand. Beginnend met 500, hoeveel na een jaar?\"\n• N(12) = 500 · 0.92¹² = 500 · 0.368 = 184 leden.",
    svg: (() => {
      const { toX, toY } = baseAxes(0, 12, 0, 1100);
      const pts = [];
      for (let t = 0; t <= 12; t++) pts.push({ x: t, y: 1000 * Math.pow(0.95, t) });
      const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<path d="${path}" stroke="${COLORS.alt}" stroke-width="2" fill="none"/>
${pts.filter((p, i) => i % 2 === 0).map(p => `<circle cx="${toX(p.x)}" cy="${toY(p.y)}" r="2" fill="${COLORS.alt}"/>`).join('')}
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">N = 1000 · 0.95^t (5% afname/jaar)</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Een populatie van 800 daalt 10% per jaar. N(3) = ?*",
        options: ["583.2", "560", "240", "5832"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is lineair: 800 - 3·80 = 560. Exponentieel: 800 · 0.9³ = 800 · 0.729 = 583.2.",
          "Dat is 800 - 3·800·0.1 = 800 - 240 = 560 (lineair). Niet exponentieel.",
          "Verkeerde rekening — komma verkeerd?",
        ],
      },
    ],
  },
  {
    title: "Halveringstijd",
    explanation: "**Halveringstijd** = de tijd waarbinnen iets **halveert** (= keer 0.5 wordt).\n\n**Voorbeelden**:\n• Radioactief verval: cesium-137 heeft halveringstijd van ~30 jaar.\n• Medicijn in bloed: sommige hebben halveringstijd van 4-8 uur.\n• Geluidsabsorptie in materiaal.\n\n**Kenmerk**: na elke halveringstijd is er nog **de helft** over.\n\n**Tabel** voor cesium-137 (begin 80 g):\n| Tijd | Hoeveelheid |\n|---|---|\n| 0 jaar | 80 g |\n| 30 jaar | 40 g |\n| 60 jaar | 20 g |\n| 90 jaar | 10 g |\n| 120 jaar | 5 g |\n\n**Formule** voor halveringstijd:\n**N(t) = b · 0.5^(t/T)**\n\n• b = beginhoeveelheid\n• T = halveringstijd\n• t = verstreken tijd\n\nVoor cesium-137: N(t) = 80 · 0.5^(t/30).\n\n**Voorbeeld**: hoeveel cesium-137 over na 75 jaar?\n• N(75) = 80 · 0.5^(75/30) = 80 · 0.5^2.5 = 80 · 0.1768 = **14.14 g**.\n\n**Anders berekend** met groeifactor per jaar:\n• g per jaar = 0.5^(1/30) ≈ 0.9772 (= 2.28% afname per jaar)\n• N(t) = 80 · 0.9772^t\n\n**Verdubbelingstijd** is het tegenovergestelde: tijd waarbinnen iets verdubbelt. Dat komt voor bij groei.\n\n**Voorbeeld verdubbelingstijd**: een populatie verdubbelt elke 10 jaar. Begin 500.\n• N(t) = 500 · 2^(t/10)\n• Na 30 jaar: 500 · 2³ = 4000.",
    svg: (() => {
      const { toX, toY } = baseAxes(0, 120, 0, 90);
      const pts = [];
      for (let t = 0; t <= 120; t += 10) pts.push({ x: t, y: 80 * Math.pow(0.5, t / 30) });
      const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${toX(p.x)},${toY(p.y)}`).join(' ');
      return `<svg viewBox="0 0 200 200">
<line x1="0" y1="${toY(0)}" x2="200" y2="${toY(0)}" stroke="${COLORS.axis}" stroke-width="1.2"/>
<line x1="${toX(0)}" y1="0" x2="${toX(0)}" y2="200" stroke="${COLORS.axis}" stroke-width="1.2"/>
<path d="${path}" stroke="${COLORS.paars}" stroke-width="2" fill="none"/>
<circle cx="${toX(0)}" cy="${toY(80)}" r="3" fill="${COLORS.paars}"/>
<circle cx="${toX(30)}" cy="${toY(40)}" r="3" fill="${COLORS.paars}"/>
<circle cx="${toX(60)}" cy="${toY(20)}" r="3" fill="${COLORS.paars}"/>
<circle cx="${toX(90)}" cy="${toY(10)}" r="3" fill="${COLORS.paars}"/>
<text x="${toX(30)}" y="${toY(40) - 5}" fill="${COLORS.warm}" font-size="9" font-family="Arial">↓50%</text>
<text x="${toX(60)}" y="${toY(20) - 5}" fill="${COLORS.warm}" font-size="9" font-family="Arial">↓50%</text>
<text x="100" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">cesium-137 — T = 30 jaar</text>
</svg>`;
    })(),
    checks: [
      {
        q: "*Een radioactief element heeft halveringstijd 8 jaar. Begin 100 g. Na 24 jaar is er nog over:*",
        options: ["12.5 g", "76 g", "50 g", "8 g"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is lineair (100 - 3·8 = 76). Exponentieel: 24/8 = 3 halveringen → 100/2/2/2 = 12.5.",
          "Dat is na 1 halveringstijd (8 jaar). Na 24 jaar zijn dat 3 halveringen.",
          "Dat is willekeurig. Reken: 24 jaar = 3 halveringstijden → 100·(1/2)³ = 12.5.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — exponentieel toepassen",
    explanation: "Vier vragen die alle hoofdstukken combineren.\n\n**Examen-tip**: schrijf altijd **b**, **g**, en **t** apart op voor je rekent. Verwar groei en afname niet — bij afname is g < 1.\n\n**Reken-tip**: gebruik de ^-knop op je rekenmachine. 1000 · 1.04 ^ 5 = 1216.65.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">b·g^t</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">groei + afname 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Een populatie groeit met 8% per jaar. Wat is de groeifactor?*",
        options: ["1.08", "0.08", "0.92", "8"],
        answer: 0,
        wrongHints: [
          null,
          "0.08 is de fractie. De groeifactor is 1 + p = 1.08.",
          "0.92 = 8% afname. Hier juist groei.",
          "g = 8 zou 700% groei zijn — veel te veel.",
        ],
      },
      {
        q: "*N(t) = 50 · 2^t. Wat is N(5)?*",
        options: ["1600", "500", "32", "250"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is 50 · 10 (verkeerde berekening). 50 · 2⁵ = 50 · 32 = 1600.",
          "Dat is 2⁵ zonder de 50.",
          "Dat is 50 · 5 (lineair). Maar 2⁵ = 32, niet 5.",
        ],
      },
      {
        q: "*Een radioactief element heeft halveringstijd 5 jaar. Begin 200 g. Na 20 jaar zijn er nog:*",
        options: ["12.5 g", "100 g", "0 g", "40 g"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is na 1 halveringstijd. 20 jaar = 4 halveringen: 200/2/2/2/2 = 12.5.",
          "Nooit 0 bij exponentiële afname — dichtbij maar nooit precies 0.",
          "Dat is lineair (200 - 4·40 = 40). Exponentieel: 200·(0.5)⁴.",
        ],
      },
      {
        q: "*Een lening heeft 3% rente per jaar. Begin €5000. Na 10 jaar (zonder af te lossen)?*",
        options: ["€6720", "€6500", "€5300", "€15 000"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is lineair (5000 + 10·150 = 6500). Bij rente over rente: 5000·1.03¹⁰ = 6720.",
          "Dat is na 1 jaar. Bij 10 jaar: 5000·1.03¹⁰ ≈ 6720.",
          "Veel te veel — 3% per jaar geeft niet 200% groei in 10 jaar.",
        ],
      },
    ],
  },
  {
    title: "Examen-stijl",
    explanation: "Drie examen-vragen.\n\n**Tip**: bij \"hoeveel jaar tot...\" of \"hoe lang duurt het tot...\" — vaak is er geen directe formule. Probeer met logaritmen (havo 4-5) of vul verschillende t-waardes in tot je in de buurt komt.\n\nFocus op het lezen van de vraag: groei of afname? wat is de begin? wat moet je vinden?",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">b, g, t opschrijven 🎯</text>
</svg>`,
    checks: [
      {
        q: "*\"Een ijskast verbruikt 200 kWh in jaar 1. Door slijtage wordt het verbruik elk jaar 4% hoger. Verbruik in jaar 5?\"*",
        options: [
          "200 · 1.04⁴ ≈ 234 kWh",
          "200 · 1.04⁵ ≈ 243 kWh",
          "200 + 4·8 = 232 kWh",
          "200 · 4 = 800 kWh",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bijna goed maar: 'jaar 5' is 4 stappen ná jaar 1, niet 5. Reken N(4) = 200·1.04⁴.",
          "Dat is lineair. Bij 4% per jaar moet je vermenigvuldigen.",
          "Veel te veel — dat zou 300% groei zijn.",
        ],
      },
      {
        q: "*\"Een meer heeft 5000 vissen. Door overbevissing daalt de populatie 12% per jaar. Hoeveel vissen na 5 jaar?\"*",
        options: [
          "5000 · 0.88⁵ ≈ 2640",
          "5000 · 1.12⁵",
          "5000 - 5·600 = 2000",
          "5000 / 5 = 1000",
        ],
        answer: 0,
        wrongHints: [
          null,
          "1.12 = groei 12%. Hier is afname → g = 1 - 0.12 = 0.88.",
          "Lineair. Exponentieel: 5000·0.88⁵.",
          "Onlogische berekening. Bij afname per jaar gebruik je de formule met g^t.",
        ],
      },
      {
        q: "*\"Een populatie van 100 verdubbelt elke 5 jaar. Hoeveel na 25 jaar?\"*",
        options: [
          "100 · 2^(25/5) = 100 · 32 = 3200",
          "100 · 2 · 25 = 5000",
          "100 · 25 / 5 = 500",
          "100 · 2 · 5 = 1000",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is product zonder macht. Bij verdubbelingstijd: 25 jaar = 5 verdubbelingen → 2⁵ = 32.",
          "Lineair (verkeerd). Exponentieel: 100·2⁵ = 3200.",
          "Onjuist. Bij verdubbelingstijd 5 jaar is 25 jaar = 5 verdubbelingen.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "Twee laatste vragen — examenniveau klas 3 / havo 4.\n\n**Klaar?** Dan beheers je de basis van exponentiële groei + afname. Belangrijk fundament voor:\n• Logaritmen (havo 4)\n• Differentiaalrekening van exponentiële functies (havo 5)\n• Statistiek: exponentiële kans-verdelingen\n• Echt-leven: rente, virusverspreiding, klimaatmodellen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.paars}" font-size="28" font-family="Arial" font-weight="bold">expo</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.paars}" font-size="22" font-family="Arial" font-weight="bold">📈</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je beheerst het 🎓</text>
</svg>`,
    checks: [
      {
        q: "*\"Een spaarrekening: €2000 begin, 6% rente per jaar (rente over rente). Bedrag na 12 jaar?\"*",
        options: [
          "2000 · 1.06¹² ≈ €4024",
          "2000 + 12·120 = €3440",
          "2000 · 1.72 = €3440",
          "2000 · 12 · 0.06 = €1440",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Lineair, geen rente over rente. Spaarrekening = exponentieel: 2000·1.06¹² ≈ 4024.",
          "1.72 zou 72% groei zijn na 12 jaar. Maar 1.06¹² ≈ 2.012 → 2000·2.012 ≈ €4024.",
          "Dat is alleen rente (€1440), niet eindbedrag. Eindbedrag = begin + groei.",
        ],
      },
      {
        q: "*\"Cafeïne in bloed halveert elke 5 uur. Begin 200 mg. Hoeveel na 15 uur?\"*",
        options: [
          "25 mg",
          "100 mg",
          "0 mg",
          "75 mg",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is na 1 halveringstijd. 15 uur = 3 halveringen: 200·(0.5)³ = 25.",
          "Cafeïne wordt nooit precies 0. Dichtbij maar niet 0.",
          "Onjuist. Reken: 15/5 = 3 halveringen, 200·(1/2)³ = 25.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const exponentieel = {
  id: "exponentieel",
  title: "Exponentiële groei en afname",
  emoji: "📈",
  level: "klas3-vmbo-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.machten"],
  intro:
    "Exponentiële groei en afname voor klas 3: lineair vs exponentieel, groeifactor + percentage, formule N(t) = b·g^t, halveringstijd. Voorbereiding op havo wiskunde A (logaritmen, financiële wiskunde) met praktische toepassingen: rente, bevolking, radioactief verval, virusverspreiding.",
  triggerKeywords: [
    "exponentieel", "exponentiële groei", "exponentiële afname",
    "groeifactor", "halveringstijd", "verdubbelingstijd",
    "rente", "samengestelde rente", "bevolkingsgroei",
    "radioactief verval", "afname percentage", "groei per jaar",
  ],
  chapters,
  steps,
};

export default exponentieel;

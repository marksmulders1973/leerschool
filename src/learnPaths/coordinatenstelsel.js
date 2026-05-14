// Leerpad: Coördinatenstelsel — Wiskunde klas 1
// 14 stappen in 5 hoofdstukken (A t/m E).
// Fundament voor lineaire-formules.js en parabolen.js — geeft uitleg over
// assen, oorsprong, kwadranten, punten plotten en lijnen.

const COLORS = {
  axis: "#e0e6f0",
  grid: "#2a3f5f",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  point: "#ffd54f",
  pointAlt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
};

// Helpers voor SVG: assenstelsel met grid (compact, 200x200 viewbox).
const baseAxes = (xMin = -5, xMax = 5, yMin = -5, yMax = 5) => {
  const sx = 200 / (xMax - xMin);
  const sy = 200 / (yMax - yMin);
  const ox = -xMin * sx;
  const oy = 200 - (-yMin * sy);
  let grid = "";
  for (let x = xMin; x <= xMax; x++) {
    if (x === 0) continue;
    const px = ox + x * sx;
    grid += `<line x1="${px}" y1="0" x2="${px}" y2="200" stroke="${COLORS.grid}" stroke-width="0.5" opacity="0.4"/>`;
  }
  for (let y = yMin; y <= yMax; y++) {
    if (y === 0) continue;
    const py = oy - y * sy;
    grid += `<line x1="0" y1="${py}" x2="200" y2="${py}" stroke="${COLORS.grid}" stroke-width="0.5" opacity="0.4"/>`;
  }
  // assen
  const axes = `
    <line x1="0" y1="${oy}" x2="200" y2="${oy}" stroke="${COLORS.axis}" stroke-width="1.5"/>
    <line x1="${ox}" y1="0" x2="${ox}" y2="200" stroke="${COLORS.axis}" stroke-width="1.5"/>
    <text x="194" y="${oy - 5}" fill="${COLORS.text}" font-size="10" font-family="Arial">x</text>
    <text x="${ox + 4}" y="9" fill="${COLORS.text}" font-size="10" font-family="Arial">y</text>
  `;
  return { grid, axes, sx, sy, ox, oy, toX: (x) => ox + x * sx, toY: (y) => oy - y * sy };
};

const stepEmojis = [
  "📐", "🎯", "📏",                    // A. Wat is een assenstelsel?
  "📍", "🔍", "✏️",                     // B. Punten plotten
  "🗂️", "🧭", "📦",                    // C. Vier kwadranten
  "📈", "🔺", "🧱",                     // D. Meerdere punten
  "🗺️", "🏆",                           // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een assenstelsel?", emoji: "📐", from: 0, to: 2 },
  { letter: "B", title: "Punten plotten", emoji: "📍", from: 3, to: 5 },
  { letter: "C", title: "Vier kwadranten", emoji: "🧭", from: 6, to: 8 },
  { letter: "D", title: "Meerdere punten + lijnen", emoji: "📈", from: 9, to: 11 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 12, to: 13 },
];

const steps = [
  // ─── A. Wat is een assenstelsel? ──────────────────────
  {
    title: "Het assenstelsel — twee assen, één vlak",
    explanation: "Een **assenstelsel** is een hulpmiddel om punten op een **vlak** te beschrijven. Het bestaat uit twee **lijnen** (= assen) die haaks op elkaar staan.\n\n• De **horizontale** as = de **x-as** (links-rechts).\n• De **verticale** as = de **y-as** (onder-boven).\n\nMet die twee assen kun je elk punt op het vlak een **adres** geven, net als straat + huisnummer.\n\n**Waarom belangrijk?**\n• Lijnen tekenen → grafieken (lineaire formules, parabolen).\n• Kaarten lezen → coördinaten van plaatsen.\n• Computer-graphics → elke pixel heeft een (x, y).\n• Schaakbord → A1, B2, C3 zijn ook coördinaten.\n\n**Belangrijke woorden** in dit hoofdstuk:\n• **As** — een lijn waarop je telt (x-as / y-as).\n• **Oorsprong** — het punt waar de assen elkaar snijden (volgende stap).\n• **Schaal** — hoeveel ruimte 1 stap inneemt.\n• **Coördinaat** — een getal op een as.\n• **Punt** — een plek in het vlak met een (x, y).",
    svg: (() => {
      const { grid, axes } = baseAxes();
      return `<svg viewBox="0 0 200 200">${grid}${axes}</svg>`;
    })(),
    checks: [
      {
        q: "*Welke as gaat horizontaal (links-rechts)?*",
        options: ["x-as", "y-as", "z-as", "h-as"],
        answer: 0,
        wrongHints: [null, "De y-as gaat verticaal (omhoog/omlaag).", "Een z-as gebruik je in 3D, niet bij een gewoon assenstelsel.", "h-as bestaat niet als standaard-as."],
        uitlegPad: {
          stappen: [{ titel: "X = horizontaal", tekst: "X-as = horizontaal (links-rechts). Y-as = verticaal (omhoog-omlaag). Standaard 2D-assenstelsel. Conventie van Descartes (17e eeuw)." }],
          woorden: [{ woord: "x-as", uitleg: "Horizontale as." }, { woord: "y-as", uitleg: "Verticale as." }, { woord: "z-as", uitleg: "Derde dimensie (3D), bv. diepte." }],
          theorie: "Onthoud-truc: X = 'kruis' = horizon = horizontaal. Y reikt omhoog naar de hemel. Werkt in heel wiskunde + natuurkunde.",
          voorbeelden: [{ type: "praktijk", tekst: "Schaakbord: A-H = x-as. 1-8 = y-as. Battleship: letter = x. Cijfer = y." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "y = vertical. z = 3D. h-as bestaat niet." }],
          niveaus: { basis: "x-as. A.", simpeler: "Horizontaal = x-as. = A.", nogSimpeler: "x = A." },
        },
      },
    ],
  },
  {
    title: "De oorsprong — waar de assen elkaar kruisen",
    explanation: "De **oorsprong** is het **kruispunt** van de x-as en de y-as. Hier zijn allebei de coördinaten **0**.\n\nDe oorsprong heeft als coördinaten **(0, 0)** — geschreven met haakjes en een komma ertussen.\n\n**Notatie**: een punt op een assenstelsel schrijf je altijd zo:\n\n**(x-coördinaat, y-coördinaat)**\n\nDus eerst de x (horizontaal), dan de y (verticaal). Komma ertussen, haakjes eromheen.\n\n**Voorbeelden**:\n• De oorsprong = **(0, 0)**\n• Een punt op de x-as, 3 stappen rechts van de oorsprong = **(3, 0)**\n• Een punt op de y-as, 2 stappen omhoog vanaf de oorsprong = **(0, 2)**\n• Een punt 4 rechts en 5 omhoog vanaf de oorsprong = **(4, 5)**\n\n**Geheugensteun**: x komt vóór y in het alfabet, en in coördinaten ook altijd eerst.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      const ox = toX(0), oy = toY(0);
      return `<svg viewBox="0 0 200 200">${grid}${axes}
        <circle cx="${ox}" cy="${oy}" r="5" fill="${COLORS.point}" stroke="#000" stroke-width="0.5"/>
        <text x="${ox + 8}" y="${oy + 13}" fill="${COLORS.point}" font-size="10" font-family="Arial" font-weight="bold">(0, 0) = oorsprong</text>
      </svg>`;
    })(),
    checks: [
      {
        q: "*Wat zijn de coördinaten van de oorsprong?*",
        options: ["(0, 0)", "(1, 1)", "(0, 1)", "(geen, geen)"],
        answer: 0,
        wrongHints: [null, "(1, 1) is een punt 1 rechts en 1 omhoog vanaf de oorsprong, niet de oorsprong zelf.", "(0, 1) ligt op de y-as, niet op het kruispunt.", "Coördinaten zijn altijd getallen. De oorsprong heeft beide assen op 0."],
        uitlegPad: {
          stappen: [{ titel: "Oorsprong (0,0)", tekst: "Oorsprong = punt waar x-as en y-as elkaar snijden. Allebei coördinaten op 0. Notatie (x,y) = (0,0). Centraal punt van assenstelsel." }],
          woorden: [{ woord: "oorsprong", uitleg: "Kruispunt assenstelsel. (0,0). Engels: origin." }, { woord: "(x, y)", uitleg: "Notatie coördinaten: eerst x (horizontaal), dan y (verticaal)." }],
          theorie: "Vanaf oorsprong meet je alle andere punten. 'Hoeveel stappen vanaf (0,0)'.",
          voorbeelden: [{ type: "andere", tekst: "(3,0) = 3 stappen rechts op x-as. (0,2) = 2 stappen omhoog op y-as. (2,3) = 2 rechts + 3 omhoog." }],
          basiskennis: [{ onderwerp: "Notatie", uitleg: "ALTIJD x eerst, y tweede. Haakjes + komma. (3,5) ≠ (5,3)." }],
          niveaus: { basis: "(0,0). A.", simpeler: "Oorsprong = (0,0). = A.", nogSimpeler: "(0,0) = A." },
        },
      },
    ],
  },
  {
    title: "Schaalverdeling — eenheden op de assen",
    explanation: "Op elke as staan **getalletjes** (= eenheden). Die geven aan hoe ver van de oorsprong je bent.\n\n**Standaard schaal**: meestal staan op de assen de getallen ..., -3, -2, -1, **0**, 1, 2, 3, ... met gelijke afstanden ertussen.\n\n• **Rechts** van de oorsprong op de x-as: positieve getallen (1, 2, 3, ...).\n• **Links** van de oorsprong op de x-as: negatieve getallen (-1, -2, -3, ...).\n• **Boven** de oorsprong op de y-as: positieve getallen.\n• **Onder** de oorsprong op de y-as: negatieve getallen.\n\n**Andere schalen** kunnen ook:\n• Bij een grafiek over geld kan op de y-as 0, 100, 200, 300 staan (per 100 euro).\n• Bij temperatuur kan -10, -5, 0, 5, 10, 15 staan.\n• Belangrijke regel: de **stappen op de as moeten gelijk zijn** — anders klopt het niet.\n\n**Examenvraag**: \"Welk getal staat op de x-as bij dit punt?\" — tel rustig vanaf 0.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      const tics = (() => {
        let out = "";
        for (let i = -5; i <= 5; i++) {
          if (i === 0) continue;
          const px = toX(i), py = toY(i);
          out += `<text x="${px}" y="${toY(0) + 12}" fill="${COLORS.muted}" font-size="8" font-family="Arial" text-anchor="middle">${i}</text>`;
          out += `<text x="${toX(0) - 8}" y="${py + 3}" fill="${COLORS.muted}" font-size="8" font-family="Arial" text-anchor="end">${i}</text>`;
        }
        return out;
      })();
      return `<svg viewBox="0 0 200 200">${grid}${axes}${tics}</svg>`;
    })(),
    checks: [
      {
        q: "*Op de x-as: 3 stappen naar links vanaf de oorsprong. Welk getal is dat?*",
        options: ["-3", "3", "0", "-1"],
        answer: 0,
        wrongHints: [null, "3 ligt rechts van de oorsprong, niet links.", "0 is de oorsprong zelf, niet 3 stappen naar links.", "-1 is maar 1 stap naar links."],
        uitlegPad: {
          stappen: [{ titel: "Links = negatief", tekst: "X-as: rechts = positief (1, 2, 3...). Links = negatief (−1, −2, −3...). 3 stappen naar links = −3." }],
          woorden: [{ woord: "negatief getal", uitleg: "Kleiner dan 0. Schrijf met minteken voor. -3, -7." }],
          theorie: "Standaard-conventie: rechts/omhoog = positief. Links/omlaag = negatief. Oorsprong = 0. Stappen tellen vanaf 0.",
          voorbeelden: [{ type: "vergelijk", tekst: "3 rechts = +3. 3 links = -3. 5 omhoog = +5. 5 omlaag = -5." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "3 (zonder min) = rechts (verkeerd). 0 = oorsprong (geen stap). -1 = maar 1 stap." }],
          niveaus: { basis: "-3. A.", simpeler: "3 stappen links = -3 op x-as. = A.", nogSimpeler: "-3 = A." },
        },
      },
    ],
  },

  // ─── B. Punten plotten ────────────────────────────────
  {
    title: "Coördinaten van een punt",
    explanation: "Elk punt in het assenstelsel heeft **twee getallen** (= coördinaten): de **x-coördinaat** (hoever rechts/links) en de **y-coördinaat** (hoever boven/onder).\n\n**Notatie**: **(x, y)** — eerst x, dan y, met haakjes en een komma.\n\n**Voorbeelden uit de figuur**:\n• Punt **A** = **(2, 3)** → 2 stappen rechts, 3 stappen omhoog.\n• Punt **B** = **(-3, 1)** → 3 stappen links, 1 stap omhoog.\n• Punt **C** = **(0, -2)** → op de y-as, 2 stappen omlaag.\n• Punt **D** = **(4, -1)** → 4 stappen rechts, 1 stap omlaag.\n\n**Truc om af te lezen**:\n1. Kijk naar het punt.\n2. Ga met je vinger **horizontaal** (links of rechts) naar de y-as. Hoeveel stappen heb je nodig? = x-coördinaat.\n3. Ga vanuit het punt **verticaal** (omhoog of omlaag) naar de x-as. Hoeveel stappen? = y-coördinaat.\n4. Schrijf op: (x, y).\n\n**Belangrijk**: x altijd eerst, y altijd tweede. Nooit andersom!",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      const points = [
        { x: 2, y: 3, label: "A (2, 3)", color: COLORS.point },
        { x: -3, y: 1, label: "B (-3, 1)", color: COLORS.goodSoft },
        { x: 0, y: -2, label: "C (0, -2)", color: COLORS.warm },
        { x: 4, y: -1, label: "D (4, -1)", color: COLORS.alt },
      ];
      let pts = "";
      for (const p of points) {
        const px = toX(p.x), py = toY(p.y);
        pts += `<circle cx="${px}" cy="${py}" r="4" fill="${p.color}" stroke="#000" stroke-width="0.5"/>`;
        pts += `<text x="${px + 6}" y="${py - 4}" fill="${p.color}" font-size="8" font-family="Arial" font-weight="bold">${p.label}</text>`;
      }
      return `<svg viewBox="0 0 200 200">${grid}${axes}${pts}</svg>`;
    })(),
    checks: [
      {
        q: "*Een punt ligt 5 rechts en 2 omhoog vanaf de oorsprong. Welke coördinaten heeft het?*",
        options: ["(5, 2)", "(2, 5)", "(5, -2)", "(-5, 2)"],
        answer: 0,
        wrongHints: [null, "Verkeerde volgorde — x staat altijd eerst (rechts = positieve x), dan y (omhoog = positieve y).", "Een negatieve y betekent omlaag. Hier staat omhoog → positief.", "Een negatieve x betekent links. Hier staat rechts → positief."],
        uitlegPad: {
          stappen: [{ titel: "x dan y, met tekens", tekst: "5 rechts → x = +5. 2 omhoog → y = +2. Notatie: (5, 2). Altijd x eerst!" }],
          woorden: [{ woord: "volgorde", uitleg: "x EERST, y TWEEDE. Nooit andersom. (3,5) ≠ (5,3)." }],
          theorie: "Stappenplan: (1) lees x-richting (rechts=+, links=-). (2) lees y-richting (omhoog=+, omlaag=-). (3) Schrijf (x, y).",
          voorbeelden: [{ type: "andere", tekst: "3 links + 4 omlaag → (-3, -4). 2 rechts + 5 omlaag → (2, -5). 6 links + 1 omhoog → (-6, 1)." }],
          basiskennis: [{ onderwerp: "Volgorde-val", uitleg: "Examen-val: (2,5) ipv (5,2). Klassieke verwisseling. Onthoud: x alfabetisch eerst, dus 1e plek." }],
          niveaus: { basis: "(5,2). A.", simpeler: "5 rechts en 2 omhoog = (5,2). x eerst! = A.", nogSimpeler: "(5,2) = A." },
        },
      },
    ],
  },
  {
    title: "Punt opzoeken in het assenstelsel",
    explanation: "Andersom: je krijgt een **paar coördinaten** en moet het **punt vinden** of plotten.\n\n**Stappenplan**:\n1. Kijk naar de **eerste** coördinaat (x). Ga vanuit de oorsprong **rechts** (positief) of **links** (negatief).\n2. Vanaf daar: kijk naar de **tweede** coördinaat (y). Ga **omhoog** (positief) of **omlaag** (negatief).\n3. Daar is je punt — zet er een dik puntje neer.\n\n**Voorbeeld**: zoek het punt **(-2, 4)**.\n• x = -2 → ga 2 stappen naar **links** vanaf de oorsprong.\n• y = 4 → vandaar 4 stappen **omhoog**.\n• Daar zet je het punt.\n\n**Voorbeeld**: zoek het punt **(3, -2)**.\n• x = 3 → 3 stappen rechts.\n• y = -2 → 2 stappen omlaag.\n\n**Truc**: lees eerst alleen de x-as alsof je naar een straat zoekt, daarna pas de y-as alsof je naar een huisnummer zoekt.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      // Markeer route naar (-2, 4)
      const ox = toX(0), oy = toY(0);
      const x1 = toX(-2), y1 = toY(0);
      const x2 = toX(-2), y2 = toY(4);
      return `<svg viewBox="0 0 200 200">${grid}${axes}
        <line x1="${ox}" y1="${oy}" x2="${x1}" y2="${y1}" stroke="${COLORS.alt}" stroke-width="2" stroke-dasharray="3 2"/>
        <line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${COLORS.alt}" stroke-width="2" stroke-dasharray="3 2"/>
        <circle cx="${x2}" cy="${y2}" r="5" fill="${COLORS.alt}" stroke="#000" stroke-width="0.5"/>
        <text x="${x2 + 6}" y="${y2 - 4}" fill="${COLORS.alt}" font-size="9" font-family="Arial" font-weight="bold">(-2, 4)</text>
        <text x="${(ox + x1) / 2}" y="${oy + 12}" fill="${COLORS.muted}" font-size="8" font-family="Arial" text-anchor="middle">2 links</text>
        <text x="${x1 - 14}" y="${(y1 + y2) / 2}" fill="${COLORS.muted}" font-size="8" font-family="Arial" text-anchor="end">4 omhoog</text>
      </svg>`;
    })(),
    checks: [
      {
        q: "*Welk punt heeft de coördinaten (3, -2)?*",
        options: ["3 rechts en 2 omlaag","3 links en 2 omlaag","2 rechts en 3 omlaag","3 rechts en 2 omhoog"],
        answer: 0,
        wrongHints: [null, "Welk teken heeft x — positief of negatief? En welk kant gaat dat op?", "Welke is de eerste coördinaat (horizontaal) — x of y?", "Welk teken heeft y? Een negatieve y gaat de andere richting op."],
        uitlegPad: {
          stappen: [{ titel: "Coördinaat → punt", tekst: "(3, -2): x = +3 (rechts), y = -2 (omlaag). Dus: 3 rechts + 2 omlaag." }],
          woorden: [{ woord: "tekens", uitleg: "+ x → rechts. − x → links. + y → omhoog. − y → omlaag." }],
          theorie: "Stappenplan opzoeken: (1) ga rechts/links (x). (2) Vandaar omhoog/omlaag (y). Punt klaar.",
          voorbeelden: [{ type: "andere", tekst: "(2, -4) = 2 rechts + 4 omlaag. (-1, 5) = 1 links + 5 omhoog." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "3 links zou (-3, ...) zijn. 2 rechts/3 omlaag zou (2, -3) zijn (verkeerd volgorde). Omhoog zou (3, 2) zijn (geen min)." }],
          niveaus: { basis: "3 rechts + 2 omlaag. A.", simpeler: "(3,-2): x=+3 rechts, y=-2 omlaag. = A.", nogSimpeler: "3r 2o = A." },
        },
      },
    ],
  },
  {
    title: "Een punt met negatieve coördinaten plotten",
    explanation: "Negatieve coördinaten geven aan dat je in de **andere richting** moet vanaf de oorsprong:\n\n• **Negatieve x**: naar **links**.\n• **Negatieve y**: naar **omlaag**.\n\n**Voorbeelden**:\n• (-4, -3) → 4 links en 3 omlaag\n• (-2, 5) → 2 links en 5 omhoog\n• (3, -1) → 3 rechts en 1 omlaag\n\n**Punten op de assen**:\n• (5, 0) → 5 rechts, helemaal **op** de x-as (geen omhoog/omlaag).\n• (0, -3) → recht onder de oorsprong, op de y-as.\n• (0, 0) → de oorsprong zelf.\n\n**Vergeet niet**: vier mogelijke combinaties van tekens:\n• **(+ , +)** → rechtsboven\n• **(- , +)** → linksboven\n• **(- , -)** → linksonder\n• **(+ , -)** → rechtsonder\n\nDie vier 'gebieden' heten **kwadranten** — daar gaan we het volgende hoofdstuk over hebben.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      const points = [
        { x: -4, y: -3, label: "(-4,-3)", color: COLORS.alt },
        { x: -2, y: 5, label: "(-2,5)", color: COLORS.goodSoft },
        { x: 3, y: -1, label: "(3,-1)", color: COLORS.point },
      ];
      let pts = "";
      for (const p of points) {
        const px = toX(p.x), py = toY(p.y);
        pts += `<circle cx="${px}" cy="${py}" r="4" fill="${p.color}" stroke="#000" stroke-width="0.5"/>`;
        pts += `<text x="${px + 6}" y="${py - 4}" fill="${p.color}" font-size="8" font-family="Arial" font-weight="bold">${p.label}</text>`;
      }
      return `<svg viewBox="0 0 200 200">${grid}${axes}${pts}</svg>`;
    })(),
    checks: [
      {
        q: "*Het punt (-4, -2) ligt:*",
        options: ["linksonder de oorsprong","rechtsboven de oorsprong","linksboven de oorsprong","rechtsonder de oorsprong"],
        answer: 0,
        wrongHints: [null, "Beide getallen zijn negatief = links én omlaag, niet rechts en omhoog.", "x is negatief = links (klopt), maar y is ook negatief = omlaag (niet omhoog).", "x is negatief = links (niet rechts)."],
        uitlegPad: {
          stappen: [{ titel: "Beide negatief = linksonder", tekst: "(-4, -2): x negatief → links. y negatief → omlaag. Samen: linksonder de oorsprong (= kwadrant III)." }],
          woorden: [{ woord: "linksonder", uitleg: "Onder de x-as + links van de y-as. Kwadrant III." }],
          theorie: "4 mogelijke combinaties tekens: (+,+) rechtsboven, (-,+) linksboven, (-,-) linksonder, (+,-) rechtsonder. Volgende stap: kwadranten.",
          voorbeelden: [{ type: "andere", tekst: "(5,7) rechtsboven. (-3,4) linksboven. (-2,-6) linksonder. (1,-9) rechtsonder." }],
          basiskennis: [{ onderwerp: "Tekens onthouden", uitleg: "Truc: 'negatief = naar links of omlaag'. 'positief = rechts of omhoog'." }],
          niveaus: { basis: "Linksonder. A.", simpeler: "Beide min = links + omlaag = linksonder. = A.", nogSimpeler: "Linksonder = A." },
        },
      },
    ],
  },

  // ─── C. Vier kwadranten ───────────────────────────────
  {
    title: "Wat zijn kwadranten?",
    explanation: "De x-as en y-as verdelen het vlak in **vier vakken**. Die vakken heten **kwadranten** (van het Latijnse *quadrans* = een vierde deel).\n\nDe kwadranten worden genummerd van **I tot IV** in **tegen-de-klok-richting**, beginnend rechtsboven:\n\n• **Kwadrant I** — rechtsboven (x positief, y positief)\n• **Kwadrant II** — linksboven (x negatief, y positief)\n• **Kwadrant III** — linksonder (x negatief, y negatief)\n• **Kwadrant IV** — rechtsonder (x positief, y negatief)\n\n**Geheugensteun**: I begint rechtsboven, dan tegen de klok in. Net als hoe je leest (van rechts naar links naar onderen).\n\n**Punten OP de assen** zitten in geen kwadrant — ze liggen op de grens. Een punt zoals (3, 0) ligt op de x-as, niet in een kwadrant.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      // labels in kwadranten
      const labels = `
        <text x="${toX(2.5)}" y="${toY(3.5)}" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold" text-anchor="middle">I</text>
        <text x="${toX(-2.5)}" y="${toY(3.5)}" fill="${COLORS.goodSoft}" font-size="13" font-family="Arial" font-weight="bold" text-anchor="middle">II</text>
        <text x="${toX(-2.5)}" y="${toY(-3)}" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold" text-anchor="middle">III</text>
        <text x="${toX(2.5)}" y="${toY(-3)}" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold" text-anchor="middle">IV</text>
      `;
      return `<svg viewBox="0 0 200 200">${grid}${axes}${labels}</svg>`;
    })(),
    checks: [
      {
        q: "*In welke richting worden de kwadranten genummerd?*",
        options: ["Tegen de klok in, vanaf rechtsboven (I → II → III → IV)","Met de klok mee","Van linksonder naar rechtsboven","Willekeurig"],
        answer: 0,
        wrongHints: [null, "Andersom — kwadranten worden tegen de klok in genummerd.", "De richting is rotatie, niet diagonaal. Kwadrant I = rechtsboven.", "Het is een vaste volgorde — niet willekeurig."],
        uitlegPad: {
          stappen: [{ titel: "I → II → III → IV", tekst: "Kwadranten genummerd I (rechtsboven) → II (linksboven) → III (linksonder) → IV (rechtsonder). TEGEN de klok in. Internationale wiskunde-conventie." }],
          woorden: [{ woord: "kwadrant", uitleg: "Een van 4 vakken in assenstelsel. Latijn 'quadrans' = vierde." }, { woord: "tegen de klok in", uitleg: "Andersom dan klokwijzer. Begint bij 12 uur, gaat naar 9, dan 6, dan 3." }],
          theorie: "Truc: I begint waar je leesgewoonte aanneemt 'natuurlijk begin' = rechtsboven. Dan tegen de klok naar links → onder → rechts.",
          voorbeelden: [{ type: "lokatie", tekst: "I = rechtsboven (+,+). II = linksboven (-,+). III = linksonder (-,-). IV = rechtsonder (+,-)." }],
          basiskennis: [{ onderwerp: "Niet met klok", uitleg: "Met klok zou I-IV-III-II zijn. Tegen klok = standaard wiskunde." }],
          niveaus: { basis: "Tegen klok. A.", simpeler: "I→II→III→IV tegen de klok in (rechtsboven start). = A.", nogSimpeler: "Tegen klok = A." },
        },
      },
    ],
  },
  {
    title: "Welke tekens horen bij welke kwadrant?",
    explanation: "Elke kwadrant heeft een **vaste combinatie** van + en - voor x en y:\n\n| Kwadrant | x | y | Voorbeeld |\n|---|---|---|---|\n| I | + | + | (3, 4) |\n| II | − | + | (-2, 5) |\n| III | − | − | (-1, -3) |\n| IV | + | − | (4, -2) |\n\n**Truc om snel te bepalen in welke kwadrant een punt ligt**:\n1. Kijk naar de **tekens** van x en y.\n2. Combineer:\n   • Beide + → kwadrant I (rechtsboven)\n   • x neg, y pos → kwadrant II (linksboven)\n   • Beide − → kwadrant III (linksonder)\n   • x pos, y neg → kwadrant IV (rechtsonder)\n\n**Examen-vraag**: \"In welke kwadrant ligt het punt (-3, 4)?\" → x = -3 (neg), y = 4 (pos) → kwadrant **II**.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      const labels = `
        <text x="${toX(2.5)}" y="${toY(4)}" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold" text-anchor="middle">I</text>
        <text x="${toX(2.5)}" y="${toY(2.5)}" fill="${COLORS.warm}" font-size="9" font-family="Arial" text-anchor="middle">(+, +)</text>
        <text x="${toX(-2.5)}" y="${toY(4)}" fill="${COLORS.goodSoft}" font-size="11" font-family="Arial" font-weight="bold" text-anchor="middle">II</text>
        <text x="${toX(-2.5)}" y="${toY(2.5)}" fill="${COLORS.goodSoft}" font-size="9" font-family="Arial" text-anchor="middle">(−, +)</text>
        <text x="${toX(-2.5)}" y="${toY(-2.5)}" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold" text-anchor="middle">III</text>
        <text x="${toX(-2.5)}" y="${toY(-4)}" fill="${COLORS.alt}" font-size="9" font-family="Arial" text-anchor="middle">(−, −)</text>
        <text x="${toX(2.5)}" y="${toY(-2.5)}" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold" text-anchor="middle">IV</text>
        <text x="${toX(2.5)}" y="${toY(-4)}" fill="${COLORS.point}" font-size="9" font-family="Arial" text-anchor="middle">(+, −)</text>
      `;
      return `<svg viewBox="0 0 200 200">${grid}${axes}${labels}</svg>`;
    })(),
    checks: [
      {
        q: "*In welke kwadrant ligt het punt (-3, 4)?*",
        options: ["II", "I", "III", "IV"],
        answer: 0,
        wrongHints: [null, "Kwadrant I is rechtsboven (beide +). Hier is x negatief.", "Kwadrant III is linksonder (beide -). Hier is y juist positief.", "Kwadrant IV is rechtsonder (x pos, y neg). Hier is x negatief."],
        uitlegPad: {
          stappen: [{ titel: "x=- en y=+ → II", tekst: "(-3, 4): x is -3 (negatief, dus links). y is 4 (positief, dus omhoog). Combinatie (-, +) = LINKSBOVEN = kwadrant II." }],
          woorden: [{ woord: "kwadrant II", uitleg: "Linksboven. Tekens (-, +). Tweede kwadrant tegen klok in." }],
          theorie: "Tabel onthouden: I=(+,+), II=(-,+), III=(-,-), IV=(+,-). Kijk naar tekens, vind kwadrant.",
          voorbeelden: [{ type: "anders", tekst: "(3,5) → I. (-2,-1) → III. (4,-7) → IV. Patroon volgen op tekens." }],
          basiskennis: [{ onderwerp: "Tekenherkenning", uitleg: "Snel: kijk eerst naar x-teken, dan y-teken, dan combineer. 2 stappen → kwadrant." }],
          niveaus: { basis: "II (-,+). A.", simpeler: "(-3,4) heeft (-,+) = kwadrant II (linksboven). = A.", nogSimpeler: "II = A." },
        },
      },
    ],
  },
  {
    title: "Punten plaatsen in de juiste kwadrant",
    explanation: "Even oefenen met snel herkennen.\n\n**Beslis-rijtje**:\n1. Wat is het teken van **x**? + of − ?\n2. Wat is het teken van **y**? + of − ?\n3. Combineer:\n   • + , + → I\n   • − , + → II\n   • − , − → III\n   • + , − → IV\n\n**Voorbeelden**:\n• (5, 7) → x=5 (+), y=7 (+) → **I**\n• (-1, 8) → x=-1 (-), y=8 (+) → **II**\n• (-6, -4) → x=-6 (-), y=-4 (-) → **III**\n• (2, -9) → x=2 (+), y=-9 (-) → **IV**\n\n**Speciale gevallen**:\n• (5, 0) → ligt op de x-as → géén kwadrant\n• (0, -3) → ligt op de y-as → géén kwadrant\n• (0, 0) → oorsprong → géén kwadrant\n\n**Tip**: oefen door verschillende coördinaten op een blaadje te schrijven en zonder na te denken het kwadrant te roepen.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      // Vier voorbeelden — één per kwadrant
      const points = [
        { x: 4, y: 3, label: "I", color: COLORS.warm },
        { x: -3, y: 2, label: "II", color: COLORS.goodSoft },
        { x: -4, y: -3, label: "III", color: COLORS.alt },
        { x: 3, y: -4, label: "IV", color: COLORS.point },
      ];
      let pts = "";
      for (const p of points) {
        const px = toX(p.x), py = toY(p.y);
        pts += `<circle cx="${px}" cy="${py}" r="5" fill="${p.color}" stroke="#000" stroke-width="0.5"/>`;
        pts += `<text x="${px + 7}" y="${py - 5}" fill="${p.color}" font-size="9" font-family="Arial" font-weight="bold">${p.label}</text>`;
      }
      return `<svg viewBox="0 0 200 200">${grid}${axes}${pts}</svg>`;
    })(),
    checks: [
      {
        q: "*In welke kwadrant ligt het punt (6, -2)?*",
        options: ["IV", "I", "II", "III"],
        answer: 0,
        wrongHints: [null, "Kwadrant I is (+, +). Hier is y negatief.", "Kwadrant II is (-, +). Hier is x positief.", "Kwadrant III is (-, -). Hier is x positief."],
        uitlegPad: {
          stappen: [{ titel: "(+,-) = IV", tekst: "(6, -2): x = 6 (positief, rechts). y = -2 (negatief, omlaag). Combinatie (+, -) = RECHTSONDER = kwadrant IV." }],
          woorden: [{ woord: "kwadrant IV", uitleg: "Rechtsonder. Tekens (+, -). Vierde tegen klok in." }],
          theorie: "Klassieke quick-check: tekens herkennen → kwadrant direct. (+,-) altijd IV.",
          voorbeelden: [{ type: "anders", tekst: "(1,-5) → IV. (8,-3) → IV. (5,2) → I. Steeds tekens vergelijken." }],
          basiskennis: [{ onderwerp: "Routine", uitleg: "Met oefening: 1 seconde van punt → kwadrant. Belangrijke vaardigheid voor grafieken." }],
          niveaus: { basis: "IV (+,-). A.", simpeler: "(6,-2) heeft (+,-) = kwadrant IV. = A.", nogSimpeler: "IV = A." },
        },
      },
      {
        q: "*Het punt (0, 5) ligt:*",
        options: ["op de y-as (geen kwadrant)","in kwadrant I","in kwadrant II","in de oorsprong"],
        answer: 0,
        wrongHints: [null, "Welke kwadrant heeft een positieve x? Bekijk de x-coördinaat van dit punt.", "Kwadrant II vereist een NEGATIEVE x. Klopt dat hier?", "De oorsprong is (0, 0). Wat is hier y? Past dat bij 'oorsprong'?"],
        uitlegPad: {
          stappen: [{ titel: "x=0 → op y-as", tekst: "(0, 5): x = 0 → punt ligt op de y-as. Niet in kwadrant (kwadranten zijn AREA's, assen zijn GRENZEN). Y = 5 → 5 stappen omhoog vanaf oorsprong." }],
          woorden: [{ woord: "op de as", uitleg: "Wanneer x=0 (op y-as) of y=0 (op x-as). Niet in kwadrant." }],
          theorie: "Speciale gevallen: x=0 → op y-as. y=0 → op x-as. x=0 én y=0 → in oorsprong (= geen kwadrant ook).",
          voorbeelden: [{ type: "andere", tekst: "(3,0) op x-as. (0,-7) op y-as. (-5,0) op x-as. (0,0) oorsprong." }],
          basiskennis: [{ onderwerp: "Grens", uitleg: "Assen zijn GRENZEN van kwadranten — punten op grens horen bij geen kwadrant. Strikt." }],
          niveaus: { basis: "Op y-as. A.", simpeler: "(0,5): x=0 → op y-as, geen kwadrant. = A.", nogSimpeler: "Y-as = A." },
        },
      },
    ],
  },

  // ─── D. Meerdere punten + lijnen ──────────────────────
  {
    title: "Twee punten verbinden = een lijn",
    explanation: "Als je **twee punten** hebt, kun je ze verbinden met een **rechte lijn**. Dit is de basis van veel grafieken.\n\n**Voorbeeld**: punten A(1, 2) en B(4, 5).\n• Plaats beide punten in het assenstelsel.\n• Trek met een lineaal een rechte lijn van A naar B.\n• Lijn loopt schuin omhoog (van linksonder naar rechtsboven).\n\n**Wat zegt een lijn?**\n• **Stijgend** (van linksonder naar rechtsboven) → y wordt groter als x groter wordt. Bijvoorbeeld: hoe meer uren werken, hoe meer geld.\n• **Dalend** (van linksboven naar rechtsonder) → y wordt kleiner als x groter wordt. Bijvoorbeeld: hoe verder van de oven, hoe kouder.\n• **Horizontaal** → y blijft hetzelfde, ongeacht x.\n• **Verticaal** → x blijft hetzelfde, ongeacht y.\n\n**Belangrijk** voor later: in het volgende leerpad (\"lineaire formules\") leer je hoe je een **formule** opstelt voor zo'n lijn. Bijvoorbeeld y = x + 1, of y = 2x − 3.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      const ax = toX(1), ay = toY(2);
      const bx = toX(4), by = toY(5);
      return `<svg viewBox="0 0 200 200">${grid}${axes}
        <line x1="${ax}" y1="${ay}" x2="${bx}" y2="${by}" stroke="${COLORS.good}" stroke-width="2"/>
        <circle cx="${ax}" cy="${ay}" r="4" fill="${COLORS.point}" stroke="#000" stroke-width="0.5"/>
        <text x="${ax - 14}" y="${ay + 4}" fill="${COLORS.point}" font-size="9" font-family="Arial" font-weight="bold">A(1,2)</text>
        <circle cx="${bx}" cy="${by}" r="4" fill="${COLORS.point}" stroke="#000" stroke-width="0.5"/>
        <text x="${bx + 6}" y="${by - 4}" fill="${COLORS.point}" font-size="9" font-family="Arial" font-weight="bold">B(4,5)</text>
      </svg>`;
    })(),
    checks: [
      {
        q: "*Een lijn loopt van linksboven naar rechtsonder. Hoe noem je dat?*",
        options: ["Dalend", "Stijgend", "Horizontaal", "Verticaal"],
        answer: 0,
        wrongHints: [null, "Stijgend gaat van linksonder naar rechtsboven (omhoog). Hier gaat de lijn juist omlaag van links naar rechts.", "Horizontaal blijft op dezelfde y-hoogte (geen op of neer).", "Verticaal blijft op dezelfde x-positie (recht omhoog)."],
        uitlegPad: {
          stappen: [{ titel: "Linksboven → rechtsonder = dalend", tekst: "Lees lijn van LINKS naar RECHTS. Begint hoog (linksboven), eindigt laag (rechtsonder) → DAALT. Y wordt kleiner als x groter wordt." }],
          woorden: [{ woord: "dalend", uitleg: "Y wordt kleiner. Lijn gaat omlaag. Negatieve helling/richtingscoëfficiënt." }, { woord: "stijgend", uitleg: "Y wordt groter. Lijn gaat omhoog. Positieve helling." }],
          theorie: "4 typen lijnen: stijgend (↗), dalend (↘), horizontaal (→), verticaal (↑). Bij lineaire formules: helling = positief (stijgend), negatief (dalend), 0 (horizontaal).",
          voorbeelden: [{ type: "concreet", tekst: "Salaris vs uren = stijgend (meer uren = meer geld). Temperatuur na zonsondergang = dalend. Vaste prijs = horizontaal." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Stijgend = andersom (omhoog). Horizontaal = vlak. Verticaal = recht omhoog (geen x-verandering)." }],
          niveaus: { basis: "Dalend. A.", simpeler: "Linksboven → rechtsonder = lijn daalt. = A.", nogSimpeler: "Dalend = A." },
        },
      },
    ],
  },
  {
    title: "Drie punten = een driehoek",
    explanation: "Met **drie** punten kun je een **driehoek** tekenen — de eenvoudigste veelhoek.\n\n**Voorbeeld**: punten A(1, 1), B(5, 1), C(3, 4) vormen een driehoek.\n• Verbind A met B (onderkant)\n• Verbind B met C (rechterkant)\n• Verbind C met A (linkerkant)\n\n**Toepassing in coördinatenstelsel**:\n• Je kunt de **omtrek** uitrekenen door alle zijden bij elkaar te tellen (met Pythagoras voor de schuine).\n• Je kunt de **oppervlakte** uitrekenen.\n• Coördinaten zijn de basis voor **meetkunde-vraagstukken**.\n\n**Met meer punten**:\n• 4 punten → vierhoek (rechthoek, vierkant, parallellogram, etc.)\n• 5 punten → vijfhoek\n• 6 punten → zeshoek\n• 100 punten + verbindingen → komt steeds dichter bij een gladde curve\n\n**Punten op een rechte lijn**: als drie of meer punten exact op één lijn liggen, vormen ze samen géén driehoek — alleen een lijn. Dan zegt men ze zijn **collineair**.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      const a = { x: toX(1), y: toY(1) };
      const b = { x: toX(5), y: toY(1) };
      const c = { x: toX(3), y: toY(4) };
      return `<svg viewBox="0 0 200 200">${grid}${axes}
        <polygon points="${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
        <circle cx="${a.x}" cy="${a.y}" r="3.5" fill="${COLORS.point}"/>
        <text x="${a.x - 4}" y="${a.y + 12}" fill="${COLORS.point}" font-size="9" font-family="Arial" font-weight="bold">A(1,1)</text>
        <circle cx="${b.x}" cy="${b.y}" r="3.5" fill="${COLORS.point}"/>
        <text x="${b.x + 4}" y="${b.y + 12}" fill="${COLORS.point}" font-size="9" font-family="Arial" font-weight="bold">B(5,1)</text>
        <circle cx="${c.x}" cy="${c.y}" r="3.5" fill="${COLORS.point}"/>
        <text x="${c.x + 4}" y="${c.y - 4}" fill="${COLORS.point}" font-size="9" font-family="Arial" font-weight="bold">C(3,4)</text>
      </svg>`;
    })(),
    checks: [
      {
        q: "*Drie punten op exact één rechte lijn vormen geen driehoek. Hoe noem je drie punten op één lijn?*",
        options: ["Collineair", "Concentrisch", "Parallel", "Diagonaal"],
        answer: 0,
        wrongHints: [null, "Concentrisch betekent met dezelfde middelpunt (zoals cirkels die binnen elkaar liggen).", "Parallel zijn twee of meer lijnen die nooit kruisen — niet drie punten op één lijn.", "Diagonaal is een lijn dwars door iets heen."],
        uitlegPad: {
          stappen: [{ titel: "Collineair = op één lijn", tekst: "Latijn 'co' (samen) + 'lineair' (lijn). Punten zijn collineair als ze allemaal op één rechte lijn liggen. Geen driehoek mogelijk." }],
          woorden: [{ woord: "collineair", uitleg: "Op één lijn liggend. Engels: collinear." }],
          theorie: "Test op collineariteit: verschillen y/x constant? Voor punten (0,0), (2,4), (4,8): per x-stap +2 wordt y +4. Constant → collineair. Liggen op y=2x.",
          voorbeelden: [{ type: "andere termen", tekst: "Concentrisch = zelfde middelpunt (cirkels). Parallel = lijnen die elkaar nooit kruisen. Diagonaal = dwarslijn." }],
          basiskennis: [{ onderwerp: "Toepassing", uitleg: "Bij rechte-lijn-formules (y=ax+b): alle (x,y) op die lijn zijn collineair. Basis lineaire algebra." }],
          niveaus: { basis: "Collineair. A.", simpeler: "3 punten op één lijn = collineair. = A.", nogSimpeler: "Collineair = A." },
        },
      },
    ],
  },
  {
    title: "Patronen herkennen — punten op één lijn",
    explanation: "Soms krijg je een **rij punten** en moet je herkennen of ze op één rechte lijn liggen — of dat er een ander patroon is.\n\n**Voorbeeld 1**: (1, 2), (2, 4), (3, 6), (4, 8)\n• Plot ze: ze liggen op een rechte lijn die schuin omhoog gaat.\n• Patroon: y = 2x. Voor elke x is y twee keer zo groot.\n\n**Voorbeeld 2**: (-1, 1), (0, 0), (1, 1), (2, 4), (3, 9)\n• Plot ze: ze liggen op een **kromme lijn** (een parabool!).\n• Patroon: y = x².\n\n**Truc om te herkennen of punten op een rechte lijn liggen**:\n• Verschillen in y per stap in x **moeten constant zijn**.\n• Voorbeeld 1: bij x=1→2, y gaat 2→4 (verschil 2). Bij x=2→3, y gaat 4→6 (verschil 2). → constant → rechte lijn ✓\n• Voorbeeld 2: bij x=0→1, y gaat 0→1 (verschil 1). Bij x=1→2, y gaat 1→4 (verschil 3). → niet constant → kromme lijn (parabool).\n\n**Belangrijk**: deze patroon-analyse is de basis voor **lineaire formules** (= rechte lijnen, volgend leerpad) en **parabolen** (= U-vormen, leerpad daarna).",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes(-2, 5, -1, 10);
      const pts = [[1, 2], [2, 4], [3, 6], [4, 8]];
      let svgPts = "";
      for (let i = 0; i < pts.length; i++) {
        const [x, y] = pts[i];
        svgPts += `<circle cx="${toX(x)}" cy="${toY(y)}" r="4" fill="${COLORS.point}" stroke="#000" stroke-width="0.5"/>`;
        if (i > 0) {
          const [px, py] = pts[i - 1];
          svgPts += `<line x1="${toX(px)}" y1="${toY(py)}" x2="${toX(x)}" y2="${toY(y)}" stroke="${COLORS.good}" stroke-width="1.5"/>`;
        }
      }
      return `<svg viewBox="0 0 200 200">${grid}${axes}${svgPts}
        <text x="100" y="195" fill="${COLORS.text}" font-size="9" font-family="Arial" text-anchor="middle">y = 2x → constante stijging</text>
      </svg>`;
    })(),
    checks: [
      {
        q: "*Je hebt punten (0,0), (1,3), (2,6), (3,9). Liggen die op een rechte lijn?*",
        options: ["Ja — y stijgt elke stap met 3 (constant)","Nee — y stijgt onregelmatig","Nee — ze liggen op een parabool","Niet genoeg informatie"],
        answer: 0,
        wrongHints: [null, "Tel de y-waardes: 0, 3, 6, 9. Verschil = 3, 3, 3 — wat zegt dat?", "Een parabool heeft niet-constante verschillen. Hier zijn ze juist constant.", "De gegevens zijn voldoende om dit te bepalen — kijk naar het patroon."],
        uitlegPad: {
          stappen: [
            { titel: "Verschillen tellen", tekst: "Y-waardes: 0, 3, 6, 9. Verschillen: 3-0=3, 6-3=3, 9-6=3. Allemaal +3 per stap. CONSTANT." },
            { titel: "Conclusie", tekst: "Constante verschillen → rechte lijn. Formule: y = 3x. Punten collineair." },
          ],
          woorden: [{ woord: "verschilrij", uitleg: "Rij verschillen tussen opeenvolgende y-waardes. Constant = rechte lijn." }],
          theorie: "Test: bij gelijke x-stappen, zijn y-verschillen constant? Ja → rechte lijn (lineair). Nee, maar verschillen-van-verschillen constant → parabool (kwadratisch). Beide herkennen is sleutel voor wiskunde klas 1-3.",
          voorbeelden: [{ type: "parabool", tekst: "Vergelijk parabool (0,0)(1,1)(2,4)(3,9): verschillen 1, 3, 5 — niet constant. Verschil-verschillen: 2, 2 — constant → parabool." }],
          basiskennis: [{ onderwerp: "Vooruitkijk", uitleg: "Hier nog 'rechte lijn'-herkennen. Later leer je formule y=3x opstellen + grafiek tekenen." }],
          niveaus: { basis: "Ja, constant +3. A.", simpeler: "0,3,6,9 stijgt elke stap +3 → rechte lijn. = A.", nogSimpeler: "Ja = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Toepassingen — coördinaten in het echt",
    explanation: "Coördinaten zijn niet alleen voor wiskunde-toetsen. In het echt:\n\n**1. Plattegronden en kaarten**\nGoogle Maps gebruikt coördinaten (latitude + longitude) om elke plek op aarde te vinden. De Eiffeltoren = ongeveer (48.85°N, 2.29°O).\n\n**2. Schaakbord**\nElk vakje heeft een coördinaat: A1, A2, ..., H8. Letter = x-as, cijfer = y-as. Ook hier eerst x, dan y.\n\n**3. Computer-graphics**\nElke pixel op je scherm heeft een (x, y). Bij een Full HD scherm: 1920 pixels breed, 1080 hoog. Pixel (0, 0) zit linksboven, (1919, 1079) rechtsonder.\n*Let op: bij computers loopt de y-as vaak omgekeerd (omlaag is positief)!*\n\n**4. GPS in de auto**\nDe auto weet de coördinaten van waar je nu bent. De route is een lange reeks coördinaten die de auto volgt.\n\n**5. Natuurkunde — beweging**\nEen voorwerp dat beweegt heeft op elk moment een (x, y) — als je die op een grafiek zet, krijg je de **baan** van het voorwerp.\n\n**6. Spelletjes — Slagschip / Battleship**\nJe roept coördinaten als 'B5' om je tegenstander te raken.\n\nKortom: coördinatenstelsels zitten overal. Wat je hier leert, gebruik je in heel veel andere vakken.",
    svg: (() => {
      const { grid, axes, toX, toY } = baseAxes();
      // Schaakbord-stijl labels
      const labels = `
        <text x="${toX(-3.5)}" y="${toY(0) + 12}" fill="${COLORS.muted}" font-size="9" font-family="Arial">A</text>
        <text x="${toX(-2.5)}" y="${toY(0) + 12}" fill="${COLORS.muted}" font-size="9" font-family="Arial">B</text>
        <text x="${toX(-1.5)}" y="${toY(0) + 12}" fill="${COLORS.muted}" font-size="9" font-family="Arial">C</text>
        <text x="${toX(-0.5)}" y="${toY(0) + 12}" fill="${COLORS.muted}" font-size="9" font-family="Arial">D</text>
        <text x="${toX(0)+10}" y="${toY(0.5)}" fill="${COLORS.muted}" font-size="9" font-family="Arial" text-anchor="end">1</text>
        <text x="${toX(0)+10}" y="${toY(1.5)}" fill="${COLORS.muted}" font-size="9" font-family="Arial" text-anchor="end">2</text>
        <circle cx="${toX(-1.5)}" cy="${toY(2)}" r="6" fill="${COLORS.alt}" stroke="#fff" stroke-width="1"/>
        <text x="${toX(-1.5)+10}" y="${toY(2)+3}" fill="${COLORS.alt}" font-size="10" font-family="Arial" font-weight="bold">C2</text>
      `;
      return `<svg viewBox="0 0 200 200">${grid}${axes}${labels}</svg>`;
    })(),
    checks: [
      {
        q: "*In Battleship wordt een coördinaat opgegeven als \"B5\". Wat staat de letter B voor?*",
        options: ["De x-as (horizontaal)","De y-as (verticaal)","De diepte","De kleur"],
        answer: 0,
        wrongHints: [null, "Het cijfer 5 staat juist voor de y-as.", "Battleship is een 2D-spel, geen diepte.", "Letters in Battleship duiden positie aan, geen kleur."],
        uitlegPad: {
          stappen: [{ titel: "Letter = kolom = x-as", tekst: "Battleship-veld 10×10: letters A-J bovenaan (kolom = x-as horizontaal). Cijfers 1-10 links (rij = y-as verticaal). 'B5' = kolom B + rij 5." }],
          woorden: [{ woord: "Battleship", uitleg: "Spel met bord 10×10 + verborgen schepen. Roep coördinaat → tegenstander zegt 'mis' of 'raak'." }],
          theorie: "Net als schaakbord: letter = x, cijfer = y. Wereldwijde conventie voor 2D-grids met named axes.",
          voorbeelden: [{ type: "andere", tekst: "Schaak: 'Pe4' = pion naar veld E (kolom) 4 (rij). Excel-cellen: A1, B2, C3 hetzelfde principe." }],
          basiskennis: [{ onderwerp: "Praktisch", uitleg: "Letters voor x makkelijker uitspreken dan getallen. 'B5' duidelijker dan '(2, 5)' in spel-context." }],
          niveaus: { basis: "X-as. A.", simpeler: "Letter B in Battleship = kolom = x-as. = A.", nogSimpeler: "X = A." },
        },
      },
    ],
  },
  {
    title: "Eindronde — gemixte vragen",
    explanation: "Vier vragen die alles uit dit leerpad combineren.\n\n**Tip**: lees iedere vraag rustig. Bij coördinaten-vragen: schrijf het punt op in de notatie (x, y) en bedenk dan waar het ligt.\n\nVeel succes! 🎯",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">(x, y)</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">basis voor alle grafieken 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Wat zijn de coördinaten van de oorsprong?*",
        options: ["(0, 0)", "(1, 0)", "(0, 1)", "Geen"],
        answer: 0,
        wrongHints: [null, "(1, 0) ligt 1 stap rechts op de x-as.", "(0, 1) ligt 1 stap omhoog op de y-as.", "De oorsprong heeft wel coördinaten — beide assen op 0."],
        uitlegPad: {
          stappen: [{ titel: "Oorsprong = (0,0)", tekst: "Kruispunt assen, allebei op 0. Vaste notatie: (0, 0)." }],
          woorden: [{ woord: "oorsprong", uitleg: "(0,0). Centraal punt." }],
          theorie: "Herhaling uit hoofdstuk A. Onthoud-truc: 'origin' = oorsprong, beginpunt.",
          voorbeelden: [{ type: "andere", tekst: "(1,0) = 1 stap rechts. (0,1) = 1 stap omhoog. (0,0) = oorsprong." }],
          basiskennis: [{ onderwerp: "Examen", uitleg: "Klassieke instap-vraag. Snel beantwoorden, spaart tijd." }],
          niveaus: { basis: "(0,0). A.", simpeler: "Oorsprong = (0,0). = A.", nogSimpeler: "(0,0) = A." },
        },
      },
      {
        q: "*In welke kwadrant ligt het punt (-2, -7)?*",
        options: ["III", "I", "II", "IV"],
        answer: 0,
        wrongHints: [null, "I = rechtsboven (beide +). Hier zijn beide negatief.", "II = linksboven (x neg, y pos). Hier is y ook negatief.", "IV = rechtsonder (x pos, y neg). Hier is x negatief."],
        uitlegPad: {
          stappen: [{ titel: "Beide negatief = III", tekst: "(-2, -7): x=-2 (links). y=-7 (omlaag). (-, -) = LINKSONDER = kwadrant III." }],
          woorden: [{ woord: "kwadrant III", uitleg: "Linksonder. Tekens (-,-). Derde tegen klok in." }],
          theorie: "Snel-test: kijk tekens. Twee minnen → III. Eén min, één plus → II of IV (afhankelijk welke). Twee plussen → I.",
          voorbeelden: [{ type: "anders", tekst: "(-2,-7) → III. (-5,-1) → III. (3,8) → I. Patroon werkt altijd." }],
          basiskennis: [{ onderwerp: "Routine", uitleg: "Met oefening: 1 seconde te bepalen." }],
          niveaus: { basis: "III (-,-). A.", simpeler: "(-2,-7) heeft (-,-) → kwadrant III. = A.", nogSimpeler: "III = A." },
        },
      },
      {
        q: "*Een punt heeft coördinaten (4, 0). Waar ligt het?*",
        options: ["Op de x-as, 4 rechts van de oorsprong","In kwadrant I","Op de y-as","In de oorsprong"],
        answer: 0,
        wrongHints: [null, "Kwadrant I vereist y > 0. Hier is y = 0 → het punt ligt op de x-as zelf.", "Op de y-as zou x = 0 moeten zijn. Hier is x = 4.", "De oorsprong is (0, 0). Hier is x = 4."],
        uitlegPad: {
          stappen: [{ titel: "y=0 → op x-as", tekst: "(4, 0): x = 4 (vier stappen rechts), y = 0 (geen omhoog/omlaag). Punt ligt OP de x-as (waar y = 0)." }],
          woorden: [{ woord: "op de x-as", uitleg: "Alle punten met y=0. Grens tussen kwadranten I+IV (boven) en II+III (onder)." }],
          theorie: "Speciale gevallen: y=0 op x-as. x=0 op y-as. Beide 0: oorsprong. Niet in kwadrant zelf.",
          voorbeelden: [{ type: "andere", tekst: "(7,0), (-3,0), (0,0) allemaal op x-as. (0,5), (0,-1) allemaal op y-as." }],
          basiskennis: [{ onderwerp: "Asgrens", uitleg: "Examen-val: punt op as ≠ kwadrant. Lees vraag goed." }],
          niveaus: { basis: "Op x-as. A.", simpeler: "(4,0): y=0 → op x-as, 4 rechts. = A.", nogSimpeler: "X-as = A." },
        },
      },
      {
        q: "*Drie punten: (0,0), (2,4), (4,8). Liggen ze op een rechte lijn?*",
        options: ["Ja — y stijgt elke stap met 4 (constant)","Nee — onregelmatige stappen","Nee — ze vormen een driehoek","Niet te bepalen"],
        answer: 0,
        wrongHints: [null, "Tel de y-waardes: 0, 4, 8. Verschil = 4, 4. Constant of niet?", "Drie punten vormen alleen een driehoek als ze NIET op één lijn liggen. Wat denk je hier?", "Wel — als je weet hoe je naar verschillen moet kijken, kun je dit afleiden."],
        uitlegPad: {
          stappen: [
            { titel: "Y-verschillen", tekst: "Y-waardes: 0, 4, 8. Verschillen: 4-0=4, 8-4=4. Constant: +4 per x-stap (van 2)." },
            { titel: "Rechte lijn", tekst: "Constant verschil → rechte lijn. Formule: y = 2x." },
          ],
          woorden: [{ woord: "rechte lijn", uitleg: "Punten waarvoor y-verschil constant is per x-stap." }],
          theorie: "Test eindopdracht: kijk constant. Hier elke 2 x-stappen: y +4. Dus per 1 x-stap: y +2 → helling 2. Lijn y=2x.",
          voorbeelden: [{ type: "andere lijn", tekst: "(0,0), (1,2), (2,4): y stijgt +2 per +1 x. Constant → rechte lijn y=2x. Zelfde lijn als deze opgave!" }],
          basiskennis: [{ onderwerp: "Collineair", uitleg: "Drie punten op rechte lijn = collineair. Geen driehoek." }],
          niveaus: { basis: "Ja, constant. A.", simpeler: "Y-verschillen constant (+4) → rechte lijn. = A.", nogSimpeler: "Ja = A." },
        },
      },
      { q: "Punt (3, 5) ligt in welk **kwadrant**?", options: ["I (rechtsboven)","II (linksboven)","III (linksonder)","IV (rechtsonder)"], answer: 0, wrongHints: [null, "Niet — x is +.", "Niet — beide +.", "Niet — y is +."] },
      { q: "Welk punt ligt op de **x-as**?", options: ["(4, 0)","(0, 4)","(4, 4)","(−1, 2)"], answer: 0, wrongHints: [null, "Dat is y-as.", "Niet — beide niet 0.", "Niet — geen 0."] },
      { q: "Welk punt is de **oorsprong**?", options: ["(0, 0)","(1, 1)","(0, 1)","(−1, 0)"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Punt (−2, −3) ligt in welk kwadrant?", options: ["III (linksonder)","I","II","IV"], answer: 0, wrongHints: [null, "Niet — beide +.", "Niet — y negatief.", "Niet — x negatief."] },
      { q: "Welk punt ligt op de **y-as**?", options: ["(0, 7)","(7, 0)","(7, 7)","(1, 2)"], answer: 0, wrongHints: [null, "X-as.", "Niet.", "Niet."] },
      { q: "Welk punt ligt op lijn y = 2x?", options: ["(3, 6)","(2, 3)","(6, 3)","(1, 3)"], answer: 0, wrongHints: [null, "Niet — invullen y=2×2=4.", "Niet — andersom.", "Niet — y moet 2."] },
      { q: "**Helling** = verandering in y per verandering in x. Van (0,1) naar (3,7) is helling?", options: ["2","1/2","3","6"], answer: 0, wrongHints: [null, "Andersom.", "Verschil x.", "Verschil y."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const coordinatenstelsel = {
  id: "coordinatenstelsel",
  title: "Coördinatenstelsel",
  emoji: "📐",
  level: "klas1-vmbo-vwo",
  subject: "wiskunde",
  referentieNiveau: "2F",
  sloThema: "Verbanden — assenstelsel & coördinaten",
  topics: ["WI.basis.coordinaten"],
  prerequisites: [
    { id: "negatieve-getallen", title: "Negatieve getallen", niveau: "vmbo-2F" },
    { id: "grafieken-lezen-po", title: "Grafieken lezen", niveau: "po-1F" },
  ],
  intro:
    "Het assenstelsel — de basis voor alle grafieken in wiskunde. x-as, y-as, oorsprong, schaal, kwadranten, punten plotten en herkennen of punten op een rechte lijn liggen. Voorbereiding op lineaire formules en parabolen.",
  triggerKeywords: [
    "coordinatenstelsel", "coördinaten", "assenstelsel",
    "x-as", "y-as", "oorsprong", "kwadrant", "punt plotten",
    "x y coordinaat", "grafiek lezen", "schaalverdeling",
  ],
  chapters,
  steps,
};

export default coordinatenstelsel;

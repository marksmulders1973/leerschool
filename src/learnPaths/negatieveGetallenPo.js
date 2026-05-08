// Leerpad: Negatieve getallen — voor groep 5-8
// 5 stappen. Cito-stijl praktijksommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  cold: "#5d9cec",
  warm: "#ef6c00",
};

const stepEmojis = ["🌡️","➡️","➕","💸","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een negatief getal?", emoji: "🌡️", from: 0, to: 0 },
  { letter: "B", title: "Getalslijn — optellen + aftrekken", emoji: "➡️", from: 1, to: 2 },
  { letter: "C", title: "Praktijk — temperatuur en geld", emoji: "💸", from: 3, to: 3 },
  { letter: "D", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

function thermometerSvg(temp, label) {
  const breedte = 240, hoogte = 200;
  const cx = breedte / 2;
  return `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<line x1="${cx}" y1="20" x2="${cx}" y2="170" stroke="${COLORS.muted}" stroke-width="3"/>
${[20, 10, 0, -10, -20].map((t, i) => `
<line x1="${cx - 6}" y1="${30 + i * 30}" x2="${cx + 6}" y2="${30 + i * 30}" stroke="${COLORS.muted}"/>
<text x="${cx + 12}" y="${34 + i * 30}" fill="${COLORS.text}" font-size="13" font-family="Arial">${t > 0 ? '+' : ''}${t}°C</text>
`).join("")}
<circle cx="${cx}" cy="${30 + ((20 - temp) / 10) * 30}" r="6" fill="${temp >= 0 ? COLORS.warm : COLORS.cold}"/>
<text x="${cx - 12}" y="${34 + ((20 - temp) / 10) * 30}" text-anchor="end" fill="${temp >= 0 ? COLORS.warm : COLORS.cold}" font-size="13" font-family="Arial" font-weight="bold">${temp > 0 ? '+' : ''}${temp}°C</text>
<text x="${cx}" y="${hoogte - 8}" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">${label}</text>
</svg>`;
}

function getalslijnSvg(start, eind, marker) {
  const breedte = 320, hoogte = 100;
  const startX = 30, eindX = breedte - 30, plotW = eindX - startX;
  const range = eind - start;
  const stap = plotW / range;
  return `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<line x1="${startX}" y1="50" x2="${eindX}" y2="50" stroke="${COLORS.text}" stroke-width="2"/>
<polygon points="${eindX},50 ${eindX - 8},45 ${eindX - 8},55" fill="${COLORS.text}"/>
${Array.from({ length: range + 1 }).map((_, i) => {
  const x = startX + i * stap;
  const v = start + i;
  return `<line x1="${x}" y1="46" x2="${x}" y2="54" stroke="${COLORS.muted}"/><text x="${x}" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">${v}</text>`;
}).join("")}
<circle cx="${startX + (marker - start) * stap}" cy="50" r="6" fill="${COLORS.point}"/>
<text x="${startX + (marker - start) * stap}" y="38" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">${marker > 0 ? '+' : ''}${marker}</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is een negatief getal?",
    explanation: "**Negatieve getallen** zijn getallen **kleiner dan 0**. Ze zien er uit met een **min-teken**: −1, −2, −3, etc.\n\n**Echte voorbeelden**:\n• **Temperatuur**: in de winter daalt 't onder nul. −5 °C = vijf graden onder nul.\n• **Geld**: een **schuld** is negatief. Je hebt −€ 50 = je moet 50 euro betalen.\n• **Verlies**: een **kelder** is onder grondniveau. -2 verdieping = 2 onder nul.\n\n**Op de getalslijn**:\nGetallen gaan in beide richtingen vanaf nul:\n```\n← ... -5  -4  -3  -2  -1   0   +1  +2  +3  +4  +5 ...→\n```\n\n**Hoe lees je**:\n• 'Min vier' = −4.\n• 'Min twaalf' = −12.\n• 'Plus drie' = +3 *(of gewoon 3)*.\n\n**Welk getal is groter?**\n• −1 is **groter** dan −5. *(Op de getalslijn ligt −1 rechts van −5.)*\n• 0 is groter dan elke negatieve. \n• Elke positieve is groter dan elke negatieve.\n\n**Cito-tip**:\nDenk aan een thermometer. **Hoger** = warmer = groter. **Lager** = kouder = kleiner.",
    svg: thermometerSvg(-5, "Vijf graden onder nul"),
    checks: [
      {
        q: "Welk getal is **groter**: −3 of −7?",
        options: ["−3","−7","Hetzelfde","Niet vergelijkbaar"],
        answer: 0,
        wrongHints: [null,"Andersom — −7 is verder van nul aan de min-kant.","Ze zijn niet hetzelfde.","Wel vergelijkbaar — denk aan thermometer."],
      },
      {
        q: "**−12 °C** — wat is dat?",
        options: ["12 graden onder nul","12 graden boven nul","Niets — bestaat niet","12 graden warm"],
        answer: 0,
        wrongHints: [null,"Andersom — min-teken = onder nul.","Wel — denk aan winter.","Andersom — boven nul = positief."],
      },
      {
        q: "Welk getal is het **kleinst**: 0, −1, +5, −10?",
        options: ["−10","−1","0","+5"],
        answer: 0,
        wrongHints: [null,"Niet de kleinste — −10 is verder van nul aan min-kant.","Niet de kleinste.","De grootste."],
      },
    ],
  },

  {
    title: "Getalslijn — stappen tellen",
    explanation: "Op de getalslijn kun je **lopen** *(stappen tellen)* om sommen te maken.\n\n**Optellen** = naar **rechts** lopen.\n**Aftrekken** = naar **links** lopen.\n\n**Voorbeeld 1**: 3 − 5 = ?\n• Begin op 3.\n• 5 stappen naar links: 3 → 2 → 1 → 0 → −1 → **−2**.\n• Antwoord: **−2**.\n\n**Voorbeeld 2**: −4 + 6 = ?\n• Begin op −4.\n• 6 stappen naar rechts: −4 → −3 → −2 → −1 → 0 → 1 → **2**.\n• Antwoord: **+2**.\n\n**Voorbeeld 3**: −2 − 3 = ?\n• Begin op −2.\n• 3 stappen naar links: −2 → −3 → −4 → **−5**.\n• Antwoord: **−5**.\n\n**Cito-truc — denken in 'stappen op de getalslijn'**:\nVooral handig bij sommen waar het mis gaat in je hoofd. Teken de getalslijn op kladpapier en wandel.\n\n**Sneltrucs voor optellen**:\n• Plus een positief = naar rechts.\n• Plus een negatief = naar links.\n• Min een positief = naar links.\n• Min een negatief = naar **rechts** *(min een minus = plus)*.",
    svg: getalslijnSvg(-7, 7, -2),
    checks: [
      {
        q: "**4 − 6** = ?",
        options: ["−2","2","10","−10"],
        answer: 0,
        wrongHints: [null,"Andersom — 4 < 6, dus negatief.","Veel te veel — heb je optellen gedaan?","Te veel."],
      },
      {
        q: "**−3 + 5** = ?",
        options: ["+2","−2","−8","+8"],
        answer: 0,
        wrongHints: [null,"Andersom — 5 stappen rechts vanaf −3 brengt je op +2.","Te ver naar links — controleer richting.","Te ver naar rechts."],
      },
      {
        q: "**−5 − 4** = ?",
        options: ["−9","−1","+9","+1"],
        answer: 0,
        wrongHints: [null,"Te dichtbij — controleer: 4 stappen LINKS vanaf −5.","Andersom — verder van nul.","Andersom — links, niet rechts."],
      },
    ],
  },

  {
    title: "Min een minus = plus",
    explanation: "Een **lastige** maar belangrijke regel:\n\n**Twee min-tekens op rij worden plus**.\n\n**Voorbeeld**: 5 − (−3) = ?\n\nDe '−(−3)' betekent: je trekt een negatief getal af. Dat is hetzelfde als **er drie bij optellen**.\n\nDus: 5 − (−3) = 5 + 3 = **8**.\n\n**Waarom?**\nStel je hebt geld: € 5. Een 'schuld' van € 3 betekent dat je in totaal € 5 − € 3 = € 2 hebt. Maar als die schuld **wegvalt** *(wordt afgetrokken)*, krijg je € 3 erbij. Dus 5 − (−3) = 8.\n\n**Andere voorbeelden**:\n• −2 − (−5) = −2 + 5 = **+3**.\n• 4 + (−6) = 4 − 6 = **−2** *(plus een negatief = aftrekken)*.\n• −7 + (−3) = −7 − 3 = **−10**.\n\n**Cito-truc — telkens-tekens-regel**:\nKijk naar de **2 tekens op rij**:\n• + + = **plus**\n• + − = **min**\n• − + = **min**\n• − − = **plus**\n\nVoorbeeld: 8 − − 5 = 8 + 5 = **13** *(want −− = +)*.\n\n**Cito-vraag-vorm**:\n*'In een spel kun je punten verliezen. Sven had +12 en verliest dan −5 (dus krijgt 5 erbij). Wat is zijn nieuwe score?'*\n• Niet aftrekken want 'verliest' van negatief = krijgt erbij.\n• 12 − (−5) = 12 + 5 = **17**.",
    checks: [
      {
        q: "**8 − (−3)** = ?",
        options: ["11","5","−11","−5"],
        answer: 0,
        wrongHints: [null,"Twee minnen achter elkaar — wat doen die samen? Optellen of aftrekken?","Niet 8 − 3 — let goed op het minteken in de haakjes.","Andersom — twee minnen heffen elkaar op.","Niet aftrekken — twee minnen heffen elkaar op."],
      },
      {
        q: "**−4 + (−6)** = ?",
        options: ["−10","+10","−2","+2"],
        answer: 0,
        wrongHints: [null,"Plus een minus = aftrekken: −4 − 6.","Niet plus — hoe twee tekens samen.","Te dichtbij — heb je 4 − 6 gedaan ipv −4−6?","Andersom."],
      },
      {
        q: "**5 + (−2)** = ?",
        options: ["+3","+7","−3","−7"],
        answer: 0,
        wrongHints: [null,"Plus een minus = aftrekken: 5 − 2 = 3.","Niet optellen — er is een min in de haakjes.","Andersom — 5 > 2, dus positief.","Veel te ver."],
      },
    ],
  },

  {
    title: "Praktijk — temperatuur en geld",
    explanation: "Negatieve getallen zie je vooral in:\n\n**Temperatuur**:\n*'In de winter daalde de temperatuur van +3 °C overdag naar −7 °C 's nachts. Hoeveel graden was 't gedaald?'*\n\n• Verschil = +3 − (−7) = 3 + 7 = **10 graden**.\n\nOf op de thermometer: van +3 → 0 = 3 omlaag. Van 0 → −7 = 7 omlaag. Totaal **10 omlaag**.\n\n**Geld** *(schuld + saldo)*:\n*'Mark heeft saldo van € 25 op rekening. Hij betaalt € 40 boodschappen. Wat is zijn saldo nu?'*\n\n• 25 − 40 = **−€ 15** *(roodstand)*.\n\n*'Hij krijgt zijn loon van € 100. Wat is zijn saldo?'*\n• −15 + 100 = **+€ 85**.\n\n**Diepte / hoogte** *(zeespiegel)*:\nNederland ligt deels onder zeespiegel.\n• Schiphol: −4 m *(4 meter onder zeespiegel)*.\n• Mont Blanc: +4810 m *(boven zeespiegel)*.\n\n**Cito-tip — verschil van temperaturen**:\nVerschil = grotere getal − kleinere getal *(altijd positief uitkomst)*.\n• Tussen +5 en −3: verschil = 5 − (−3) = 5 + 3 = **8**.\n• Tussen +20 en −10: verschil = 20 − (−10) = 20 + 10 = **30**.\n\n**Slimme aanpak**: tel apart het 'positieve deel' (tot 0) en het 'negatieve deel' (van 0 omlaag). Dan tel je beide samen.",
    checks: [
      {
        q: "Temperatuur is **+5 °C**, daalt **8 graden**. **Nieuwe temperatuur**?",
        options: ["−3 °C","+3 °C","−13 °C","+13 °C"],
        answer: 0,
        wrongHints: [null,"Andersom — daalt naar onder nul.","Te ver — 5 − 8 = −3, niet −13.","Andersom — daalt, niet stijgt."],
      },
      {
        q: "Verschil tussen **+12 °C en −5 °C**?",
        options: ["17","7","−17","−7"],
        answer: 0,
        wrongHints: [null,"Te weinig — 12 − (−5) = 12 + 5 = 17.","Andersom — verschil is altijd positief.","Andersom."],
      },
      {
        q: "Anna had **−€ 30 saldo** *(rood)*. Krijgt **€ 80 zakgeld**. Nieuw saldo?",
        options: ["+€ 50","+€ 110","−€ 50","−€ 110"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je rood vergeten?","Andersom — krijgt erbij, dus stijgt naar plus.","Veel te ver."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — negatieve getallen mix",
    explanation: "Mix-toets in Cito-stijl met negatieve getallen — temperatuur, saldo, sommen.\n\nVeel succes!",
    checks: [
      {
        q: "**−8 + 5** = ?",
        options: ["−3","+3","−13","+13"],
        answer: 0,
        wrongHints: [null,"Andersom — 5 stappen rechts vanaf −8.","Te ver naar links — kijk richting.","Veel te ver."],
      },
      {
        q: "Temperatuur **−4 °C**, stijgt **9 graden**. Nieuwe temperatuur?",
        options: ["+5 °C","+13 °C","−5 °C","−13 °C"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: −4 + 9 = 5.","Andersom — gaat omhoog, niet omlaag.","Veel te laag."],
      },
      {
        q: "Welk getal is het **grootst**: −8, −2, 0, −15?",
        options: ["0","−2","−8","−15"],
        answer: 0,
        wrongHints: [null,"Tweede — 0 is groter.","Niet — 0 en −2 zijn beide groter.","Kleinste."],
      },
      {
        q: "**3 − (−7)** = ?",
        options: ["+10","−10","−4","+4"],
        answer: 0,
        wrongHints: [null,"Andersom — min een minus = plus.","Niet aftrekken.","Niet aftrekken — twee minnen heffen op."],
      },
      {
        q: "Marc had **+€ 15** zakgeld. Hij geeft **€ 22 uit**. Saldo?",
        options: ["−€ 7","+€ 7","−€ 37","+€ 37"],
        answer: 0,
        wrongHints: [null,"Andersom — gaat onder nul (rood).","Te veel — heb je optellen gedaan?","Te veel — heb je 15 + 22 ipv 15−22?"],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const negatieveGetallenPo = {
  id: "negatieve-getallen-po",
  title: "Negatieve getallen — Cito groep 5-8",
  emoji: "🌡️",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — negatieve getallen",
  intro:
    "Negatieve getallen voor groep 5-8: wat is een negatief getal, getalslijn lopen, min-een-minus = plus, praktijk met temperatuur en geld. ~12 min.",
  triggerKeywords: [
    "negatief","negatieve getallen","min","onder nul","temperatuur",
    "thermometer","getalslijn","schuld","rood",
  ],
  chapters,
  steps,
};

export default negatieveGetallenPo;

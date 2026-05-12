// Leerpad: Kommagetallen — groep 6-8 PO.
// Cito-onderdeel decimalen + geld + meten. Referentieniveau 1F.
// 6 stappen met uitlegPad. Eenheden expliciet (€, m, kg) per Mark's regel.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  accent: "#ff8a65",
  digit: "#80cbc4",
  komma: "#ff5252",
};

const stepEmojis = ["🔢", "➕", "✖️", "➗", "🛒", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een kommagetal?", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Optellen & aftrekken", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Vermenigvuldigen", emoji: "✖️", from: 2, to: 2 },
  { letter: "D", title: "Delen", emoji: "➗", from: 3, to: 3 },
  { letter: "E", title: "Praktijk — geld + meten", emoji: "🛒", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function plaatswaardenSvg() {
  const w = 320, h = 170;
  const cellW = 36;
  const cells = [
    { d: "1", l: "honderden", x: 30 },
    { d: "2", l: "tientallen", x: 30 + cellW },
    { d: "3", l: "eenheden", x: 30 + cellW * 2 },
    { d: ",", l: "komma", x: 30 + cellW * 3 - 18, special: true },
    { d: "4", l: "tienden", x: 30 + cellW * 3 + 18 },
    { d: "5", l: "honderdsten", x: 30 + cellW * 4 + 18 },
  ];
  let svg = `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Plaats van elk cijfer: 123,45</text>`;
  cells.forEach((c) => {
    const fill = c.special ? "transparent" : COLORS.paper;
    const txtFill = c.special ? COLORS.komma : COLORS.digit;
    const labelFill = c.special ? COLORS.komma : COLORS.muted;
    if (!c.special) {
      svg += `<rect x="${c.x}" y="50" width="${cellW - 4}" height="36" fill="${fill}" stroke="${COLORS.curve}" stroke-width="1.2"/>`;
    }
    svg += `<text x="${c.x + cellW / 2 - 2}" y="76" text-anchor="middle" fill="${txtFill}" font-size="20" font-family="Arial" font-weight="bold">${c.d}</text>`;
    svg += `<text x="${c.x + cellW / 2 - 2}" y="115" text-anchor="middle" fill="${labelFill}" font-size="10" font-family="Arial">${c.l}</text>`;
  });
  svg += `<text x="${w / 2}" y="148" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-style="italic">vóór de komma = hele getallen · ná de komma = stukjes van 1</text>`;
  svg += `</svg>`;
  return svg;
}

function optellenSvg() {
  const w = 320, h = 170;
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Komma's onder elkaar zetten!</text>
<text x="120" y="60" text-anchor="end" fill="${COLORS.digit}" font-size="20" font-family="Courier New, monospace" font-weight="bold">3,50</text>
<text x="120" y="88" text-anchor="end" fill="${COLORS.digit}" font-size="20" font-family="Courier New, monospace" font-weight="bold">+ 2,70</text>
<line x1="60" y1="98" x2="125" y2="98" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="120" y="124" text-anchor="end" fill="${COLORS.highlight}" font-size="20" font-family="Courier New, monospace" font-weight="bold">6,20</text>
<rect x="105" y="42" width="3" height="92" fill="${COLORS.komma}" opacity="0.4"/>
<text x="180" y="80" fill="${COLORS.text}" font-size="12" font-family="Arial">↑</text>
<text x="190" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">komma's</text>
<text x="190" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">staan recht</text>
<text x="190" y="104" fill="${COLORS.text}" font-size="11" font-family="Arial">onder elkaar</text>
<text x="${w / 2}" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">Antwoord komma op zelfde plek!</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is een kommagetal?
  {
    title: "Wat is een kommagetal?",
    explanation:
      "Een **kommagetal** *(ook wel decimaal genoemd)* is een getal met een **komma** erin. De komma scheidt het **hele** deel van het **stukje** deel.\n\n**Voorbeeld**: **3,5** *(spreek uit: drie-komma-vijf)*.\n• **3** is het hele deel.\n• **5** ná de komma = vijf-tienden = 5/10 = een half.\n• Dus 3,5 = drie-en-een-half.\n\n**Wat staat op welke plek?**\nVoor het getal **123,45**:\n• **1** = honderden *(100)*.\n• **2** = tientallen *(20)*.\n• **3** = eenheden *(3)*.\n• Komma.\n• **4** = tienden *(4 stukjes van 1/10)* = 0,4.\n• **5** = honderdsten *(5 stukjes van 1/100)* = 0,05.\n\nAlles bij elkaar: 100 + 20 + 3 + 0,4 + 0,05 = **123,45**.\n\n**Cito-truc — een kommagetal lezen**:\nLees het vóór de komma als gewoon getal. Lees de komma als 'komma'. Lees ná de komma de cijfers één voor één.\n• 12,5 = 'twaalf-komma-vijf'.\n• 7,03 = 'zeven-komma-nul-drie'.\n• 0,8 = 'nul-komma-acht'.\n\n**Kommagetallen ↔ breuken**:\n• 0,5 = ½ *(de helft)*.\n• 0,25 = ¼ *(een kwart)*.\n• 0,75 = ¾ *(drie kwart)*.\n• 0,1 = 1/10 *(een tiende)*.\n\n**Wanneer kom je kommagetallen tegen?**\n• Geld: € 4,25.\n• Lengte: 1,80 m.\n• Gewicht: 0,5 kg = een halve kilo.\n• Temperatuur: 36,7 °C.\n• Tijd: 3,5 uur = 3 uur en een half.",
    svg: plaatswaardenSvg(),
    checks: [
      {
        q: "**3,5** is hetzelfde als ... ?",
        options: ["3 + ½", "35", "3 × 5", "0,35"],
        answer: 0,
        wrongHints: [null, "Te veel — geen komma meer.", "Komma is geen vermenigvuldiging.", "Te weinig — komma verkeerd geplaatst."],
      },
      {
        q: "Wat betekent de **2** in 4,**2**?",
        options: ["2 tienden (2/10)", "2 honderden", "2 eenheden", "2 tientallen"],
        answer: 0,
        wrongHints: [null, "Cijfers ná komma zijn juist 'stukjes' — niet honderden.", "Vóór de komma staat 4. Na de komma 2 = tienden.", "Te groot — ná de komma worden cijfers kleiner."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste plek ná komma = tienden", tekst: "In 4,2 staat de 2 op de eerste plek ná de komma. Dat is de tienden-plek. Dus 2/10 = 0,2." },
          ],
          woorden: [{ woord: "tiende", uitleg: "Een tiende deel van 1. 10 tienden samen = 1." }],
          theorie: "Plaatswaarden gaan voor komma: eenheden/tientallen/honderden. Ná de komma: tienden/honderdsten.",
          voorbeelden: [{ type: "stap", tekst: "4,2 = 4 hele + 2 tienden = 4 en 2/10." }],
          basiskennis: [{ onderwerp: "Kleiner ná komma", uitleg: "Hoe verder rechts ná de komma, hoe kleiner het stukje." }],
          niveaus: {
            basis: "2 tienden = 0,2. A.",
            simpeler: "Achter de komma staat 2 op de eerste plek. Dat is tienden. 2 tienden = 2/10 = 0,2. = A.",
            nogSimpeler: "Tienden = A.",
          },
        },
      },
      {
        q: "Welk kommagetal is **gelijk aan ¼**?",
        options: ["0,25", "0,4", "0,5", "0,75"],
        answer: 0,
        wrongHints: [null, "0,4 is 4 tienden = 2/5, niet ¼.", "0,5 is de helft (½), niet ¼.", "0,75 is ¾, niet ¼."],
      },
      {
        q: "Welk getal is **groter**: 0,9 of 0,12?",
        options: ["0,9", "0,12", "Even groot", "Kan je niet zeggen"],
        answer: 0,
        wrongHints: [null, "Lijkt groter omdat er meer cijfers staan, maar 0,12 = 12 honderdsten = nog geen 2 tienden. 0,9 = 9 tienden — veel meer!", "Niet hetzelfde — vergelijk per plek.", "Wél te zeggen: zet 0,9 als 0,90 → meer dan 0,12."],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk per plek", tekst: "Schrijf gelijk aantal cijfers: 0,90 vs 0,12. Eerste plek: 9 > 1. Dus 0,9 > 0,12." },
          ],
          woorden: [{ woord: "tienden", uitleg: "Eerste cijfer ná de komma." }],
          theorie: "Vergelijk kommagetallen door eerst gelijk aantal cijfers ná komma te zetten.",
          voorbeelden: [{ type: "stap", tekst: "0,9 = 0,90. 0,90 vs 0,12 → 90 > 12. Dus 0,9 groter." }],
          basiskennis: [{ onderwerp: "Niet aantal cijfers tellen", uitleg: "Meer cijfers betekent niet automatisch groter — kijk per plek." }],
          niveaus: {
            basis: "0,9 = 0,90 > 0,12. A.",
            simpeler: "Schrijf gelijk: 0,90 en 0,12. 90 hondertste vs 12 hondertsten. 90 > 12. Dus 0,9 groter. = A.",
            nogSimpeler: "0,9 = A.",
          },
        },
      },
    ],
  },

  // STAP 2: Optellen + aftrekken
  {
    title: "Optellen & aftrekken — komma's onder elkaar!",
    explanation:
      "Bij optellen en aftrekken met kommagetallen geldt **één belangrijke regel**:\n\n**De komma's moeten recht onder elkaar staan.**\n\nDat is alles. Verder doe je het net als gewoon optellen/aftrekken.\n\n**Voorbeeld optellen**:\n```\n  3,50\n+ 2,70\n─────\n  6,20\n```\nKomma's staan recht. Antwoord-komma op dezelfde plek. Dus **3,50 + 2,70 = 6,20**.\n\n**Voorbeeld aftrekken**:\n```\n  8,25\n− 3,40\n─────\n  4,85\n```\nKomma op dezelfde plek. **8,25 − 3,40 = 4,85**.\n\n**Cito-truc — verschillende aantallen cijfers**:\nAls de getallen niet evenveel cijfers ná de komma hebben, **vul aan met nullen**:\n• 5,2 + 3,75 → schrijf als **5,20** + 3,75.\n• 4,5 + 2 → schrijf als 4,5 + 2,0 (of 4,50 + 2,00).\n\nNullen aan het eind veranderen niets aan de waarde, maar maken het optellen makkelijker.\n\n**Aandachtspunt — gehele getallen**:\nEen getal zonder komma (zoals 5) is gelijk aan 5,0 of 5,00 of 5,000. Allemaal hetzelfde getal!\n\n**Veel-voorkomende fout**:\nKomma's NIET recht onder elkaar zetten. Dan kan **0,5 + 2** worden gerekend als 0,5 + 2 = 2,5 (correct) maar als je 0,5 + 02 doet zonder uitlijnen kun je per ongeluk 7 antwoorden.",
    svg: optellenSvg(),
    checks: [
      {
        q: "**3,5 + 2,4** = ?",
        options: ["5,9", "5,11", "59", "0,59"],
        answer: 0,
        wrongHints: [null, "Te veel — heb je tienden gemixt met losse cijfers? 5 + 4 = 9, geen 11.", "Komma vergeten.", "Komma te ver naar links."],
      },
      {
        q: "**7,80 − 3,25** = ?",
        options: ["4,55", "4,65", "10,05", "5,45"],
        answer: 0,
        wrongHints: [null, "Net niet — controleer: 80 − 25 = 55. 7 − 3 = 4. Dus 4,55.", "Niet 10 — dat is opgeteld i.p.v. afgetrokken.", "Te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Komma's uitlijnen", tekst: "7,80 - 3,25. Komma's recht onder elkaar. 80 - 25 = 55 (cijfers ná komma). 7 - 3 = 4. Antwoord: 4,55." },
          ],
          woorden: [{ woord: "uitlijnen", tekst: "Komma's recht boven elkaar zetten zoals in een kolom." }],
          theorie: "Aftrekken met kommagetallen werkt zoals gewoon aftrekken, mits komma's uitgelijnd zijn.",
          voorbeelden: [{ type: "stap", tekst: "7,80 - 3,25 = 4,55." }],
          basiskennis: [{ onderwerp: "Vul aan met nullen", uitleg: "Als getallen niet gelijk aantal decimalen hebben, vul aan met 0." }],
          niveaus: {
            basis: "7,80 - 3,25 = 4,55. A.",
            simpeler: "Schrijf onder elkaar met komma's uitgelijnd. Trek af: 80-25=55, 7-3=4. Dus 4,55. = A.",
            nogSimpeler: "4,55 = A.",
          },
        },
      },
      {
        q: "**4,5 + 1,75** = ?",
        options: ["6,25", "6,2", "5,75", "62,5"],
        answer: 0,
        wrongHints: [null, "Net niet — vul aan: 4,50 + 1,75 = 6,25.", "Te weinig — 4,5 = 4,50. Reken nogmaals.", "Komma verkeerd."],
      },
      {
        q: "**10 − 2,75** = ?",
        options: ["7,25", "7,75", "8,25", "12,75"],
        answer: 0,
        wrongHints: [null, "Net niet — 10 = 10,00. 10,00 - 2,75 = 7,25.", "Te veel — controleer aftrekking.", "Niet 12,75 — dat is optellen, niet aftrekken."],
      },
    ],
  },

  // STAP 3: Vermenigvuldigen
  {
    title: "Vermenigvuldigen met kommagetallen",
    explanation:
      "Vermenigvuldigen met kommagetallen heeft een **trucje** *(uit je hoofd!)*:\n\n**Stap 1**: doe alsof de komma er **niet staat** (gewone vermenigvuldiging).\n**Stap 2**: tel de cijfers **ná** de komma — in beide getallen samen.\n**Stap 3**: zet die komma in het antwoord, geteld vanaf rechts.\n\n**Voorbeeld 1**: 0,5 × 0,3 = ?\n• Stap 1: 5 × 3 = 15.\n• Stap 2: cijfers ná komma: 0,5 heeft 1, 0,3 heeft 1 → totaal 2.\n• Stap 3: 2 plaatsen vanaf rechts → 0,15.\n• Dus 0,5 × 0,3 = **0,15**.\n\n**Voorbeeld 2**: 2,4 × 3 = ?\n• Stap 1: 24 × 3 = 72.\n• Stap 2: cijfers ná komma: 2,4 heeft 1, 3 heeft 0 → totaal 1.\n• Stap 3: 1 plaats vanaf rechts → 7,2.\n• Dus 2,4 × 3 = **7,2**.\n\n**Voorbeeld 3**: 1,5 × 1,2 = ?\n• Stap 1: 15 × 12 = 180.\n• Stap 2: 1 + 1 = 2 cijfers ná komma.\n• Stap 3: 2 plaatsen vanaf rechts → 1,80 = 1,8.\n• Dus 1,5 × 1,2 = **1,8**.\n\n**Cito-truc — schatten als check**:\n• 2,4 × 3 → ongeveer 2 × 3 = 6. Antwoord 7,2 klopt qua grootte.\n• 0,5 × 0,3 → 0,5 is de helft, dus de helft van 0,3 = 0,15. Klopt.\n\n**Belangrijke regel**:\nAls je kommagetal vermenigvuldigt met een gewoon getal: alleen het kommagetal heeft cijfers ná de komma.",
    checks: [
      {
        q: "**0,4 × 0,2** = ?",
        options: ["0,08", "0,8", "8", "0,008"],
        answer: 0,
        wrongHints: [null, "Te veel — heb je goed op de komma gelet? 4 × 2 = 8, dan 2 plaatsen vanaf rechts: 0,08.", "Komma vergeten.", "Te ver naar rechts."],
      },
      {
        q: "**3,2 × 5** = ?",
        options: ["16", "1,6", "8,2", "1,5"],
        answer: 0,
        wrongHints: [null, "Komma te ver — 3,2 × 5 = 16,0 = 16.", "Te weinig — controleer 32 × 5 = 160, dan 1 plaats = 16,0.", "Optelling. We zoeken vermenigvuldiging."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldig zonder komma", tekst: "Doe 32 × 5 = 160." },
            { titel: "Tel cijfers ná komma", tekst: "3,2 heeft 1 cijfer ná komma. 5 heeft er 0. Totaal: 1." },
            { titel: "Zet komma terug", tekst: "160 met 1 plaats vanaf rechts = 16,0 = 16." },
          ],
          woorden: [{ woord: "decimaalplaats", uitleg: "Cijfer ná de komma." }],
          theorie: "Vermenigvuldig zonder komma's, tel decimaalplaatsen op, zet komma in antwoord.",
          voorbeelden: [{ type: "stap", tekst: "3,2 × 5: 32 × 5 = 160. 1 decimaal → 16,0 = 16." }],
          basiskennis: [{ onderwerp: "Tellen decimalen", uitleg: "Tel decimaalplaatsen van beide getallen samen." }],
          niveaus: {
            basis: "32 × 5 = 160 → 16. A.",
            simpeler: "Stap 1: zonder komma 32 × 5 = 160. Stap 2: 1 cijfer ná komma (in 3,2). Stap 3: komma 1 plaats van rechts → 16,0 = 16. = A.",
            nogSimpeler: "16 = A.",
          },
        },
      },
      {
        q: "**1,2 × 1,2** = ?",
        options: ["1,44", "1,4", "1,2", "2,4"],
        answer: 0,
        wrongHints: [null, "Net niet — 12 × 12 = 144, dan 2 decimalen → 1,44.", "Te weinig — controleer 1,2 × 1,2.", "Optelling.", "Optelling."],
      },
      {
        q: "Hoeveel **cijfers ná de komma** heeft het antwoord van **0,5 × 0,2**?",
        options: ["2", "1", "0", "3"],
        answer: 0,
        wrongHints: [null, "Tel: 0,5 heeft 1, 0,2 heeft 1, totaal 2.", "Geen kommagetal — maar het antwoord 0,10 heeft wel 2 cijfers ná komma (of 0,1 met 1).", "Vergelijk: 0,5×0,2 = 0,10 = 0,1 — afhankelijk hoe je schrijft."],
      },
    ],
  },

  // STAP 4: Delen
  {
    title: "Delen met kommagetallen",
    explanation:
      "Delen met een kommagetal kent **2 hoofdgevallen**:\n\n**Geval 1 — Delen door een geheel getal**:\nDoe gewoon staartdeling. De komma in het antwoord komt op dezelfde plek als in het deeltal.\n\n**Voorbeeld**: 4,8 ÷ 2 = ?\n• 4 ÷ 2 = 2 → komma → 8 ÷ 2 = 4.\n• Dus 4,8 ÷ 2 = **2,4**.\n\n**Geval 2 — Delen door een kommagetal**:\n**Verschuif de komma** in beide getallen totdat de deler een **geheel getal** wordt.\n\n**Voorbeeld**: 6,4 ÷ 0,2 = ?\n• 0,2 heeft 1 cijfer ná komma — schuif beide kommas 1 plaats naar rechts.\n• Wordt: 64 ÷ 2 = **32**.\n• Dus 6,4 ÷ 0,2 = **32**.\n\n**Voorbeeld 2**: 1,5 ÷ 0,3 = ?\n• Verschuif komma 1 plaats: wordt 15 ÷ 3 = 5.\n• Dus 1,5 ÷ 0,3 = **5**.\n\n**Cito-truc — schatten**:\n• 4,8 ÷ 2 → ongeveer 5 ÷ 2 = 2,5. Antwoord 2,4 klopt qua grootte.\n• 6,4 ÷ 0,2 → 0,2 is een vijfde, dus 6,4 × 5 = 32. Klopt.\n\n**Belangrijk**:\nDelen door een **kleiner dan 1** kommagetal geeft een **groter** antwoord. Bv. 6,4 ÷ 0,2 = 32 *(veel groter dan 6,4!)*. Dat lijkt vreemd maar klopt — je kijkt hoe vaak 0,2 in 6,4 past.\n\n**Veel-voorkomende fout**:\nKomma vergeten of verkeerd verschuiven. Controleer met een schatting.",
    checks: [
      {
        q: "**6,8 ÷ 2** = ?",
        options: ["3,4", "3,8", "13,6", "0,34"],
        answer: 0,
        wrongHints: [null, "Net niet — 6 ÷ 2 = 3, en 8 ÷ 2 = 4 (na komma). Antwoord 3,4.", "Te veel — controleer.", "Te veel — dat zou 6,8 × 2 zijn.", "Komma verkeerd geplaatst."],
      },
      {
        q: "**2,4 ÷ 0,3** = ?",
        options: ["8", "0,8", "80", "0,08"],
        answer: 0,
        wrongHints: [null, "Net niet — verschuif komma 1 plaats: wordt 24 ÷ 3 = 8.", "Te weinig — heb je de komma niet verschoven?", "Te veel — komma 1 plaats te ver.", "Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Verschuif komma", tekst: "0,3 heeft 1 cijfer ná komma. Schuif komma in beide getallen 1 plaats: 2,4 → 24, 0,3 → 3." },
            { titel: "Deel als gewone getallen", tekst: "24 ÷ 3 = 8." },
          ],
          woorden: [{ woord: "komma verschuiven", uitleg: "Komma rechts opschuiven (= × 10) in beide getallen tegelijk." }],
          theorie: "Bij delen door kommagetal: maak deler heel door komma's te schuiven.",
          voorbeelden: [{ type: "stap", tekst: "2,4 ÷ 0,3 → 24 ÷ 3 = 8." }],
          basiskennis: [{ onderwerp: "Beide getallen", uitleg: "Schuif in BEIDE getallen evenveel plaatsen — anders verandert je som." }],
          niveaus: {
            basis: "24 ÷ 3 = 8. A.",
            simpeler: "Stap 1: schuif komma 1 plaats in beide (2,4 → 24, 0,3 → 3). Stap 2: 24 ÷ 3 = 8. = A.",
            nogSimpeler: "8 = A.",
          },
        },
      },
      {
        q: "**3,6 ÷ 0,4** = ?",
        options: ["9", "0,9", "14,4", "0,09"],
        answer: 0,
        wrongHints: [null, "Net niet — verschuif komma's: 36 ÷ 4 = 9.", "Te weinig — heb je de komma niet verschoven?", "Dat is 3,6 × 4 — niet delen.", "Veel te weinig."],
      },
      {
        q: "Een lint van **9,6 m** wordt in stukjes van **0,8 m** geknipt. **Hoeveel stukjes**?",
        options: ["12 stukjes", "8 stukjes", "120 stukjes", "1,2 stukjes"],
        answer: 0,
        wrongHints: [null, "Net niet — schuif komma's: 96 ÷ 8 = 12.", "Te weinig — heb je goed gedeeld?", "Te veel — komma 1 plaats te ver.", "Aantal moet een heel getal zijn — je kunt geen 1,2 stukjes hebben."],
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk-sommen — geld & meten",
    explanation:
      "Cito-praktijksommen draaien vaak om **geld** *(euro's)* of **meten** *(meters/kilo's)*. Beide gebruiken kommagetallen.\n\n**Voorbeeld 1 — geld**:\n*'3 boeken van € 4,75. Hoeveel **totaal**?'*\n• 3 × €4,75 → 3 × 475 = 1425 → 2 decimalen → **€14,25**.\n\n**Voorbeeld 2 — wisselgeld**:\n*'Boodschappen kosten €7,80. Je betaalt met €10. Wisselgeld?'*\n• €10,00 − €7,80 = **€2,20**.\n\n**Voorbeeld 3 — meten**:\n*'Een touw van 5,4 m wordt in stukjes van 0,6 m geknipt. Aantal stukjes?'*\n• 5,4 ÷ 0,6 → 54 ÷ 6 = **9 stukjes**.\n\n**Voorbeeld 4 — gewicht delen**:\n*'4 kinderen delen 2,8 kg snoep gelijk. Per kind?'*\n• 2,8 kg ÷ 4 = **0,7 kg per kind** = **700 gram**.\n\n**Cito-tip — altijd eenheid mee**:\nSchrijf '€', 'kg', 'm' bij je antwoord. Veel punten worden gemist door eenheid weg te laten.\n\n**Eenheden-truc**:\n• 1 kg = 1000 gram. Dus 0,5 kg = 500 g.\n• 1 m = 100 cm. Dus 1,5 m = 150 cm.\n• 1 liter = 1000 mL. Dus 0,75 L = 750 mL.",
    checks: [
      {
        q: "Een tas van **€ 24,75** met een **€ 50-biljet**. Wisselgeld?",
        options: ["€ 25,25", "€ 25,75", "€ 24,25", "€ 74,75"],
        answer: 0,
        wrongHints: [null, "Net niet — controleer €50,00 - €24,75 = €25,25.", "Te veel — komma niet goed afgetrokken.", "Te weinig.", "Te veel — dat is opgeteld, niet afgetrokken."],
      },
      {
        q: "**3 boeken** van **€ 4,75** kosten samen?",
        options: ["€ 14,25", "€ 12,25", "€ 14,75", "€ 7,75"],
        answer: 0,
        wrongHints: [null, "Net niet — 3 × €4,75 = €14,25.", "Te weinig — controleer.", "Eén boek + iets — niet 3 keer.", "Veel te weinig — dat is alleen 1 boek + €3."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldigen", tekst: "3 × €4,75. Doe 3 × 475 = 1425. 2 decimalen ná komma in 4,75. Dus €14,25." },
          ],
          woorden: [{ woord: "totaal", uitleg: "Som van alle items samen." }],
          theorie: "Geld-vermenigvuldiging: net als gewone kommagetal-vermenigvuldiging, met € erbij.",
          voorbeelden: [{ type: "stap", tekst: "3 × €4,75 = 3 × €4 + 3 × €0,75 = €12 + €2,25 = €14,25." }],
          basiskennis: [{ onderwerp: "Eenheid", uitleg: "Schrijf altijd € bij geld-antwoord." }],
          niveaus: {
            basis: "3 × €4,75 = €14,25. A.",
            simpeler: "3 boeken × €4,75 per boek. 3 × 475 = 1425 cent = €14,25. = A.",
            nogSimpeler: "€14,25 = A.",
          },
        },
      },
      {
        q: "Een touw van **5,4 m** in stukken van **0,6 m**. **Aantal stukken**?",
        options: ["9 stukken", "8 stukken", "6 stukken", "0,9 stukken"],
        answer: 0,
        wrongHints: [null, "Net niet — 54 ÷ 6 = 9.", "Te weinig.", "Te weinig — 5,4 ÷ 0,6 is meer dan 6.", "Stukken moet een heel getal zijn."],
      },
      {
        q: "**1,5 kg** suiker = **... gram**?",
        options: ["1500 gram", "150 gram", "15 gram", "15.000 gram"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 kg = 1000 g, dus 1,5 kg = 1,5 × 1000.", "Te weinig — controleer komma.", "Veel te weinig.", "Te veel — komma 1 plaats te ver."],
      },
      {
        q: "**4 kinderen** delen **2,8 kg snoep** gelijk. **Per kind**?",
        options: ["0,7 kg per kind", "7 kg per kind", "11,2 kg per kind", "0,07 kg per kind"],
        answer: 0,
        wrongHints: [null, "Net niet — 2,8 ÷ 4 = 0,7 kg per kind.", "Te veel — dat zou 2,8 × 4 zijn... wait, dat is ook 11,2. Hier moet je delen, niet vermenigvuldigen.", "Klopt qua som maar verkeerde berekening — delen geeft 0,7.", "Komma 1 plaats te ver."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — kommagetallen-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: optellen, aftrekken, vermenigvuldigen, delen + praktijk.\n\n**Tip**: zet komma's altijd recht onder elkaar bij optellen/aftrekken. Tel decimalen bij vermenigvuldigen. Verschuif komma's bij delen door een kommagetal.\n\nVeel succes!",
    checks: [
      {
        q: "**4,7 + 2,8** = ?",
        options: ["7,5", "7,15", "6,5", "75"],
        answer: 0,
        wrongHints: [null, "Net niet — controleer 47 + 28 = 75, dan 1 plaats vanaf rechts: 7,5.", "Komma verkeerd.", "Te weinig.", "Komma vergeten."],
      },
      {
        q: "**€ 12,50 − € 3,75** = ?",
        options: ["€ 8,75", "€ 9,25", "€ 16,25", "€ 8,25"],
        answer: 0,
        wrongHints: [null, "Net niet — €12,50 - €3,75 = €8,75.", "Te veel.", "Dat is opgeteld.", "Net niet — controleer."],
      },
      {
        q: "**0,6 × 0,4** = ?",
        options: ["0,24", "2,4", "0,024", "0,1"],
        answer: 0,
        wrongHints: [null, "Net niet — 6 × 4 = 24, 2 decimalen → 0,24.", "Komma te ver naar rechts — 2 plaatsen vanaf rechts moet.", "Komma 1 plaats te ver naar links.", "Veel te weinig — controleer 6 × 4 = 24, met 2 decimalen → 0,24."],
      },
      {
        q: "**8,4 ÷ 0,7** = ?",
        options: ["12", "1,2", "120", "0,12"],
        answer: 0,
        wrongHints: [null, "Net niet — verschuif komma's: 84 ÷ 7 = 12.", "Te weinig — heb je verschoven?", "Komma te ver naar rechts.", "Veel te weinig."],
      },
      {
        q: "Een doos met **0,25 kg** koekjes. **4 dozen** wegen samen?",
        options: ["1 kg", "0,5 kg", "100 kg", "0,1 kg"],
        answer: 0,
        wrongHints: [null, "Net niet — 4 × 0,25 = 1,00 = 1 kg.", "Te weinig — dat is 2 dozen.", "Komma weg.", "Te weinig — dat is maar 1 koekje misschien."],
      },
      {
        q: "**2,4 m** stof = **... cm**?",
        options: ["240 cm", "24 cm", "2400 cm", "2,4 cm"],
        answer: 0,
        wrongHints: [null, "Net niet — 1 m = 100 cm, dus 2,4 m = 2,4 × 100 = 240 cm.", "Te weinig — komma 1 plaats verkeerd.", "Te veel — komma 1 plaats te ver.", "Dat is hetzelfde getal — heb je niet omgerekend?"],
        uitlegPad: {
          stappen: [
            { titel: "1 m = 100 cm", tekst: "Vermenigvuldig met 100: 2,4 × 100 = 240. Dus 2,4 m = 240 cm." },
          ],
          woorden: [{ woord: "m / cm", uitleg: "Meter / centimeter. 1 m = 100 cm." }],
          theorie: "Van m naar cm = × 100. Van cm naar m = ÷ 100.",
          voorbeelden: [{ type: "stap", tekst: "2,4 m × 100 = 240 cm." }],
          basiskennis: [{ onderwerp: "Komma verschuift", uitleg: "× 100 = komma 2 plaatsen naar rechts." }],
          niveaus: {
            basis: "2,4 × 100 = 240 cm. A.",
            simpeler: "1 meter = 100 cm. 2,4 m = 2,4 × 100 = 240 cm. = A.",
            nogSimpeler: "240 cm = A.",
          },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kommagetallenPo = {
  id: "kommagetallen-po",
  title: "Kommagetallen / decimalen (groep 6-8)",
  emoji: "🔢",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — kommagetallen / decimalen",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "breuken-po", title: "Breuken", niveau: "po-1F" },
  ],
  intro:
    "Kommagetallen voor groep 6-8 — wat ze zijn, optellen/aftrekken met komma's uitgelijnd, vermenigvuldigen, delen, en Cito-praktijksommen met geld/meten. ~15 min.",
  triggerKeywords: [
    "kommagetal", "decimaal", "decimalen", "komma",
    "tienden", "honderdsten", "wisselgeld", "totaal",
  ],
  chapters,
  steps,
};

export default kommagetallenPo;

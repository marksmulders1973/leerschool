// Leerpad: Procenten — vanaf de basis
// Conceptueel — werkt voor élk wiskundeboek vanaf klas 1.
// 12 stappen, 5 hoofdstukken.

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = [
  "💯", "🟰", "📋",                  // A. Wat is een procent
  "🧮", "✖️", "📱",                  // B. Procent van een getal
  "🔢", "📊",                        // C. Welk % is X van Y
  "💸", "📈",                        // D. Korting + toename
  "🛒", "🏆",                        // E. Eindopdrachten
  "📝",                              // F. Examenstijl
];

const chapters = [
  { letter: "A", title: "Wat is een procent?", emoji: "💯", from: 0, to: 2 },
  { letter: "B", title: "Procent van een getal", emoji: "🧮", from: 3, to: 5 },
  { letter: "C", title: "Welk percentage is X van Y?", emoji: "🔢", from: 6, to: 7 },
  { letter: "D", title: "Korting en toename", emoji: "💸", from: 8, to: 9 },
  { letter: "E", title: "Eindopdrachten", emoji: "🏆", from: 10, to: 11 },
  { letter: "F", title: "Examenstijl — VMBO-GT CSE", emoji: "📝", from: 12, to: 12 },
];

const steps = [
  // ─── A. Wat is een procent? ────────────────────────────
  {
    title: "% betekent 'per honderd'",
    explanation: "Het symbool **%** spreek je uit als 'procent'. Het komt uit het Latijn 'per centum' = 'per honderd'.\n\nEen percentage is dus altijd **een deel van 100**.\n\nVoorbeelden:\n• **50%** = 50 per 100 = de helft\n• **25%** = 25 per 100 = een vierde\n• **100%** = 100 per 100 = alles\n• **10%** = 10 per 100 = een tiende\n\n**Visualisatie**: stel je hebt 100 snoepjes. Je geeft er 30 weg. Dan gaf je **30%** weg.\n\n**Procent in het echt**:\n• 21% btw op een rekening\n• 50% korting in de uitverkoop\n• 75% van de leerlingen slaagde\n• 100% gemaakt = alles goed\n\nProcenten zijn **overal** — bij geld, statistiek, reclame, weer (kans op regen).",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="cell-proc" width="20" height="20" patternUnits="userSpaceOnUse">
<rect width="20" height="20" fill="rgba(0,200,83,0.15)" stroke="${COLORS.curve}" stroke-width="0.6"/>
</pattern>
</defs>
<rect x="50" y="40" width="200" height="100" fill="url(#cell-proc)" stroke="${COLORS.curve}" stroke-width="2"/>
<rect x="50" y="40" width="60" height="100" fill="${COLORS.point}" opacity="0.6"/>
<text x="80" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="20" font-family="Arial" font-weight="bold">30%</text>
<text x="180" y="95" text-anchor="middle" fill="${COLORS.muted}" font-size="14" font-family="Arial">70%</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">100 vakjes totaal · 30 gekleurd</text>
<text x="150" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">% = per honderd</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent 40%?",
        options: [
          "40 per 100",
          "40 keer iets",
          "40 + 100",
          "40 ÷ 100 = 0,4",
        ],
        answer: 0,
        wrongHints: [
          null,
          "% betekent niet 'keer'. Het is 'per honderd'.",
          "Niet '+'. Het is een verhouding: 40 per honderd.",
          "Klopt eigenlijk wél (0,4 = 40/100), maar 'per honderd' is de meest letterlijke betekenis. Dus de eerste optie.",
        ],
      },
    ],
  },
  {
    title: "Procent ↔ kommagetal ↔ breuk",
    explanation: "Een procent is **drie dingen tegelijk** — een percentage, een kommagetal én een breuk. Drie manieren om hetzelfde te schrijven.\n\n**Belangrijke conversies**:\n\n| % | breuk | komma |\n|---|-------|-------|\n| 50% | ½ | 0,5 |\n| 25% | ¼ | 0,25 |\n| 75% | ¾ | 0,75 |\n| 10% | ⅒ | 0,1 |\n| 20% | ⅕ | 0,2 |\n| 100% | 1 | 1,0 |\n| 1% | ¹⁄₁₀₀ | 0,01 |\n| 5% | ¹⁄₂₀ | 0,05 |\n\n**Truc: percentage → komma**: deel door 100 (= komma 2 plekken naar links).\n• 35% → 0,35\n• 8% → 0,08\n• 150% → 1,5\n\n**Truc: komma → percentage**: maal 100.\n• 0,72 → 72%\n• 0,9 → 90%\n• 1,25 → 125%",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="260" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="62" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">%</text>
<text x="150" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">breuk</text>
<text x="240" y="40" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">komma</text>
<line x1="20" y1="50" x2="280" y2="50" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="105" y1="20" x2="105" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="195" y1="20" x2="195" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="62" y="70" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">50%</text>
<text x="150" y="70" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">½</text>
<text x="240" y="70" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">0,5</text>
<text x="62" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">25%</text>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">¼</text>
<text x="240" y="92" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">0,25</text>
<text x="62" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">75%</text>
<text x="150" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">¾</text>
<text x="240" y="114" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">0,75</text>
<text x="62" y="136" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">10%</text>
<text x="150" y="136" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">⅒</text>
<text x="240" y="136" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">0,1</text>
<text x="62" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">20%</text>
<text x="150" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">⅕</text>
<text x="240" y="158" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">0,2</text>
<text x="62" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">100%</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">1</text>
<text x="240" y="180" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">1,0</text>
</svg>`,
    checks: [
      {
        q: "Welk kommagetal hoort bij 65%?",
        options: ["0,65", "65", "6,5", "0,065"],
        answer: 0,
        wrongHints: [
          null,
          "65 zou 6500% zijn. Voor procent → komma: deel door 100.",
          "6,5 = 650%. Komma één plek te ver naar rechts.",
          "0,065 = 6,5%. Komma één plek te ver naar links.",
        ],
      },
    ],
  },
  {
    title: "Standaard percentages onthouden",
    explanation: "Bepaalde percentages kom je **vaak** tegen. Zelfs zonder rekenmachine kun je ze direct uitrekenen:\n\n**Vuistregels** (heel handig):\n\n• **10% van iets** = deel door 10\n  → 10% van 80 = 8\n  → 10% van 250 = 25\n\n• **1% van iets** = deel door 100\n  → 1% van 800 = 8\n  → 1% van 50 = 0,5\n\n• **50% van iets** = de helft\n  → 50% van 60 = 30\n\n• **25% van iets** = een kwart (deel door 4)\n  → 25% van 80 = 20\n\n• **20% van iets** = een vijfde\n  → 20% van 50 = 10\n\n**Trucje**: andere percentages bouw je hieruit op:\n• 30% = 3 × 10%\n• 5% = ½ × 10%\n• 15% = 10% + 5%\n• 75% = 3 × 25%\n\nMet deze trucs hoef je voor veel sommen geen rekenmachine.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">handige standaard-percentages</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="65" fill="${COLORS.text}" font-size="13" font-family="Arial">1% van x  =  x ÷ 100</text>
<text x="55" y="88" fill="${COLORS.text}" font-size="13" font-family="Arial">10% van x  =  x ÷ 10</text>
<text x="55" y="111" fill="${COLORS.text}" font-size="13" font-family="Arial">25% van x  =  x ÷ 4</text>
<text x="55" y="134" fill="${COLORS.text}" font-size="13" font-family="Arial">50% van x  =  x ÷ 2</text>
<text x="55" y="157" fill="${COLORS.text}" font-size="13" font-family="Arial">75% van x  =  ¾ × x</text>
<text x="55" y="180" fill="${COLORS.text}" font-size="13" font-family="Arial">100% van x  =  x</text>
</svg>`,
    checks: [
      {
        q: "Wat is 10% van 240?",
        options: ["24", "2400", "10", "120"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt × 10 gedaan. Maar 10% = 1/10 = delen door 10, niet vermenigvuldigen.",
          "Je hebt het percentage zelf overgenomen. Voor 10% van 240: deel 240 door 10.",
          "120 is 50% van 240, niet 10%. Voor 10%: deel door 10.",
        ],
      },
    ],
  },

  // ─── B. Procent van een getal ────────────────────────────
  {
    title: "Met de rekenmachine: × 0,XX",
    explanation: "Voor **niet-standaard percentages** (bv. 17%, 35%, 8%) gebruik je een rekenmachine.\n\n**Truc**: zet het percentage om naar een **kommagetal**, en vermenigvuldig.\n\n**35% van 200**:\n• 35% = 0,35\n• 200 × 0,35 = **70**\n\n**17% van 50**:\n• 17% = 0,17\n• 50 × 0,17 = **8,5**\n\n**Stappenplan**:\n1. Schrijf het percentage als kommagetal (deel door 100, of komma 2 plekken naar links).\n2. Vermenigvuldig met het oorspronkelijke getal.\n3. Lees het antwoord af.\n\n**Voorbeelden**:\n• 8% van 600 = 600 × 0,08 = **48**\n• 12% van 250 = 250 × 0,12 = **30**\n• 95% van 80 = 80 × 0,95 = **76**\n\nNa een paar keer oefenen gaat het automatisch.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="32" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">35% van 200 = ?</text>
<line x1="40" y1="48" x2="260" y2="48" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="75" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap 1: % → komma</text>
<text x="55" y="98" fill="${COLORS.text}" font-size="14" font-family="Arial">35% = 0,35</text>
<text x="55" y="125" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap 2: vermenigvuldigen</text>
<text x="55" y="148" fill="${COLORS.text}" font-size="14" font-family="Arial">200 × 0,35</text>
<rect x="170" y="130" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="210" y="155" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">= 70</text>
</svg>`,
    checks: [
      {
        q: "Wat is 30% van 80?",
        options: ["24", "240", "300", "2,4"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt × 3 gedaan. Maar wat is 30% als kommagetal — en wat doe je daarmee?",
          "Schat eens: 30% is iets minder dan de helft. Past 300 dan bij 30% van 80?",
          "Check je komma. Hoeveel plekken schuift hij als je % omzet naar kommagetal?",
        ],
      },
    ],
  },
  {
    title: "Hoofdrekenen: trucjes voor netjes percentages",
    explanation: "Sommige percentages kun je **uit het hoofd** uitrekenen, zonder rekenmachine.\n\n**Trucs voor handig rekenen**:\n\n**5% van x** = ½ × 10% van x\n• 5% van 200 = ½ × 20 = **10**\n\n**15% van x** = 10% + 5%\n• 15% van 80 = 8 + 4 = **12**\n\n**30% van x** = 3 × 10%\n• 30% van 50 = 3 × 5 = **15**\n\n**90% van x** = 100% − 10%\n• 90% van 250 = 250 − 25 = **225**\n\n**12,5% van x** = ⅛ van x\n• 12,5% van 80 = 80 ÷ 8 = **10**\n\n**Praktijk**: je rekent dit soort sommen vaak in supermarkt, restaurant, bij korting. Met deze trucs ben je sneller dan met je telefoon.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">hoofdrekenen-trucs</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="65" fill="${COLORS.text}" font-size="12" font-family="Arial">15% = 10% + 5%</text>
<text x="55" y="85" fill="${COLORS.muted}" font-size="11" font-family="Arial">  → 15% van 80 = 8 + 4 = 12</text>
<text x="55" y="108" fill="${COLORS.text}" font-size="12" font-family="Arial">30% = 3 × 10%</text>
<text x="55" y="128" fill="${COLORS.muted}" font-size="11" font-family="Arial">  → 30% van 50 = 3 × 5 = 15</text>
<text x="55" y="151" fill="${COLORS.text}" font-size="12" font-family="Arial">90% = 100% − 10%</text>
<text x="55" y="171" fill="${COLORS.muted}" font-size="11" font-family="Arial">  → 90% van 200 = 200 − 20 = 180</text>
</svg>`,
    checks: [
      {
        q: "Wat is 15% van 60? (uit het hoofd)",
        options: ["9", "12", "10", "15"],
        answer: 0,
        wrongHints: [
          null,
          "Bouw het op: wat is 10% van 60? En wat is dan 5% van 60? Tel die twee bij elkaar op.",
          "Schat eens: 15% is iets meer dan een tiende. Reken eerst 10% en daarna 5%.",
          "Je nam het percentage zelf over. Splits 15% in 10% + 5% — wat krijg je dan?",
        ],
      },
    ],
  },
  {
    title: "Met een formule: percentage × getal / 100",
    explanation: "De algemene **formule** voor 'X% van een getal G':\n\n**(X / 100) × G**  of equivalent:  **X × G / 100**\n\n**Voorbeelden**:\n• 25% van 80: (25/100) × 80 = 0,25 × 80 = **20**\n• 17% van 250: 17 × 250 / 100 = 4250 / 100 = **42,5**\n• 8% van 1500: 0,08 × 1500 = **120**\n\n**Stappen**:\n1. Schrijf de formule op.\n2. Vul de waardes in.\n3. Reken stap-voor-stap.\n4. Lees af.\n\nVoor wiskundetoetsen: schrijf de formule áltijd op. Dat geeft houvast en je leerkracht ziet je werkwijze.\n\n**Bonus**: deze formule werkt ook voor percentages **boven 100%** (bv. 150% van 40 = 60), en voor decimale percentages (bv. 3,5% van 200 = 7).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="16" font-family="Arial">(X / 100) × G</text>
<text x="55" y="85" fill="${COLORS.muted}" font-size="11" font-family="Arial">17% van 250:</text>
<text x="55" y="108" fill="${COLORS.text}" font-size="13" font-family="Arial">(17/100) × 250</text>
<text x="55" y="131" fill="${COLORS.text}" font-size="13" font-family="Arial">= 0,17 × 250</text>
<rect x="55" y="143" width="100" height="34" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="166" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 42,5</text>
</svg>`,
    checks: [
      {
        q: "Wat is 22% van 350?",
        options: ["77", "722", "7,7", "1,57"],
        answer: 0,
        wrongHints: [
          null,
          "Wat is 22% als kommagetal? Vermenigvuldig dat met 350.",
          "Check je komma. Hoeveel plekken schuift hij van % naar kommagetal?",
          "Schat eens: 22% is iets meer dan een vijfde. Wat zou een redelijke uitkomst zijn?",
        ],
      },
    ],
  },

  // ─── C. Welk % is X van Y? ────────────────────────────
  {
    title: "Andersom: welk percentage is iets?",
    explanation: "Soms is de **vraag andersom**: 'Welk percentage is 15 van 60?'\n\nFormule: **(deel / geheel) × 100%**\n\nIn woorden: deel het kleine getal door het grote, en maal 100.\n\n**Voorbeeld**: welk percentage is 15 van 60?\n• 15 / 60 = 0,25\n• 0,25 × 100% = **25%**\n\n**Voorbeeld 2**: van 80 leerlingen zijn er 24 ziek. Welk percentage?\n• 24 / 80 = 0,3\n• 0,3 × 100% = **30%**\n\n**Voorbeeld 3**: een product is afgeprijsd van €50 naar €40. Hoeveel korting?\n• Afprijzing: €50 − €40 = €10\n• Percentage: 10 / 50 × 100% = **20% korting**\n\n**Stappen**:\n1. Bepaal welk getal het 'deel' is (kleinere) en welk het 'geheel' (grotere).\n2. Deel deel door geheel.\n3. Vermenigvuldig met 100.\n4. Schrijf % achter het antwoord.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">(deel / geheel) × 100%</text>
<text x="55" y="85" fill="${COLORS.muted}" font-size="11" font-family="Arial">welk % is 15 van 60?</text>
<text x="55" y="108" fill="${COLORS.text}" font-size="13" font-family="Arial">(15 / 60) × 100%</text>
<text x="55" y="131" fill="${COLORS.text}" font-size="13" font-family="Arial">= 0,25 × 100%</text>
<rect x="55" y="143" width="100" height="34" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="166" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 25%</text>
</svg>`,
    checks: [
      {
        q: "Welk percentage is 12 van 50?",
        options: ["24%", "12%", "50%", "62%"],
        answer: 0,
        wrongHints: [
          null,
          "Het getal 12 is niet automatisch 12%. Welke formule moet je gebruiken: deel/geheel × 100?",
          "Is 12 echt de helft van 50? Reken eerst: hoe vaak past 12 in 50?",
          "Optellen klopt niet voor procenten. Wat moet je delen en daarna doen?",
        ],
      },
    ],
  },
  {
    title: "Voorbeelden uit het echte leven",
    explanation: "Procenten kom je overal tegen. Drie typische situaties:\n\n**A — Examen**: 32 leerlingen doen een toets. 24 zijn geslaagd. Slagingspercentage?\n• 24 / 32 = 0,75\n• 0,75 × 100% = **75%** is geslaagd\n\n**B — Korting**: een spijkerbroek kost normaal €60, nu €45. Hoeveel korting?\n• Korting in euro: €60 − €45 = €15\n• Korting in %: 15 / 60 × 100% = **25%**\n\n**C — Prijsstijging**: een ijsje kost vroeger €1,50, nu €1,80. Hoeveel duurder?\n• Verhoging in euro: 1,80 − 1,50 = €0,30\n• Verhoging in %: 0,30 / 1,50 × 100% = **20%** duurder\n\n**Schema**:\n• Welk % is X van Y? → (X / Y) × 100%\n• Welk % is veranderd? → (verschil / origineel) × 100%\n\n**Tip**: bij **stijging/daling** altijd vergelijken met het **oorspronkelijke** getal.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="30" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">A. examen</text>
<text x="55" y="50" fill="${COLORS.text}" font-size="11" font-family="Arial">24 / 32 × 100% = </text>
<text x="220" y="50" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">75%</text>
<line x1="40" y1="65" x2="260" y2="65" stroke="${COLORS.curve}" stroke-width="0.5" opacity="0.5"/>
<text x="55" y="85" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">B. korting</text>
<text x="55" y="105" fill="${COLORS.text}" font-size="11" font-family="Arial">€15 / €60 × 100% = </text>
<text x="220" y="105" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">25%</text>
<line x1="40" y1="120" x2="260" y2="120" stroke="${COLORS.curve}" stroke-width="0.5" opacity="0.5"/>
<text x="55" y="140" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">C. duurder</text>
<text x="55" y="160" fill="${COLORS.text}" font-size="11" font-family="Arial">€0,30 / €1,50 × 100% = </text>
<text x="220" y="160" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">20%</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">altijd: verschil ÷ oorspronkelijk × 100</text>
</svg>`,
    checks: [
      {
        q: "Een schaaltje druiven kostte €4, nu €5. Hoeveel duurder in %?",
        options: ["25%", "20%", "1%", "100%"],
        answer: 0,
        wrongHints: [
          null,
          "Door welk getal moet je delen — de nieuwe prijs of de oorspronkelijke (€4)?",
          "€1 is de stijging in euro, niet het percentage. Hoe maak je daar een percentage van?",
          "Bij 100% verdubbelt de prijs — naar €8. Klopt dat met €4 → €5?",
        ],
      },
    ],
  },

  // ─── D. Korting + toename ────────────────────────────
  {
    title: "Korting berekenen — twee manieren",
    explanation: "Een product kost €80 met **20% korting**. Hoeveel kost het nu?\n\n**Methode 1**: bereken eerst de korting, trek af.\n• Korting: 20% van 80 = €16\n• Nieuwe prijs: 80 − 16 = **€64**\n\n**Methode 2**: korting-factor (sneller).\n• Bij 20% korting betaal je nog **80%** van de oorspronkelijke prijs.\n• 80% van 80 = 0,80 × 80 = **€64**\n\nSamen: **bij X% korting betaal je (100−X)%**:\n• 25% korting → betaal 75%\n• 50% korting → betaal 50%\n• 10% korting → betaal 90%\n\n**Voorbeelden**:\n• €120 met 30% korting: 0,70 × 120 = **€84**\n• €25 met 15% korting: 0,85 × 25 = **€21,25**\n• €200 met 50% korting: 0,50 × 200 = **€100**\n\nMethode 2 is meestal sneller — één vermenigvuldiging in plaats van twee stappen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="36" fill="rgba(255,112,67,0.15)" stroke="${COLORS.curveAlt}" stroke-width="2" rx="6"/>
<text x="150" y="44" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">€80 met 20% korting</text>
<text x="55" y="82" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">betaal je 80% van €80:</text>
<text x="55" y="105" fill="${COLORS.text}" font-size="14" font-family="Arial">0,80 × 80</text>
<rect x="55" y="120" width="100" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="105" y="144" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">= €64</text>
<text x="180" y="140" fill="${COLORS.muted}" font-size="11" font-family="Arial">korting €16</text>
<text x="150" y="182" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">truc: 100% − korting% = wat je betaalt</text>
</svg>`,
    checks: [
      {
        q: "€50 met 30% korting. Wat betaal je?",
        options: ["€35", "€20", "€15", "€65"],
        answer: 0,
        wrongHints: [
          null,
          "Bij 30% korting betaal je nog hoeveel procent? Reken die factor × €50.",
          "Dat is de korting zelf, niet het bedrag dat je nog moet betalen. Wat trek je waarvan af?",
          "Korting maakt het goedkoper, niet duurder. Welke richting moet de prijs op?",
        ],
      },
    ],
  },
  {
    title: "Toename — andersom",
    explanation: "Bij **toename** of **verhoging** doe je het omgekeerde: er komt iets bij.\n\n**Voorbeeld**: een investering groeit met 8%. Begin: €1000. Eindstand?\n\n**Methode 1**:\n• Toename: 8% van 1000 = €80\n• Nieuwe waarde: 1000 + 80 = **€1080**\n\n**Methode 2**: groei-factor.\n• Bij 8% toename betaal je 100% + 8% = **108%** van het origineel.\n• 1,08 × 1000 = **€1080**\n\n**Algemeen**: bij X% toename = factor **(100 + X) / 100**:\n• 5% toename → × 1,05\n• 10% toename → × 1,10\n• 25% toename → × 1,25\n• 100% toename → × 2 (verdubbeling)\n\n**Voorbeelden**:\n• €60 + 15% btw: 1,15 × 60 = **€69**\n• 250 inwoners + 12% groei: 1,12 × 250 = **280**\n• €40 + 5% rente: 1,05 × 40 = **€42**",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="36" fill="rgba(0,200,83,0.15)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="44" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial">€1000 + 8% groei</text>
<text x="55" y="82" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">100% + 8% = 108% van €1000:</text>
<text x="55" y="105" fill="${COLORS.text}" font-size="14" font-family="Arial">1,08 × 1000</text>
<rect x="55" y="120" width="120" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="115" y="144" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">= €1080</text>
<text x="195" y="140" fill="${COLORS.muted}" font-size="11" font-family="Arial">groei €80</text>
<text x="150" y="182" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">truc: 100% + groei% = factor</text>
</svg>`,
    checks: [
      {
        q: "€80 + 25% btw. Wat is het totaalbedrag?",
        options: ["€100", "€60", "€20", "€105"],
        answer: 0,
        wrongHints: [
          null,
          "Bij +25% wordt het bedrag hoger, niet lager. Welke factor hoort bij + 25%?",
          "Dat is alleen het btw-bedrag, niet het totaal. Wat moet je daar nog bij optellen?",
          "Reken nog eens met + 25% in plaats van + 30%. Welke factor hoort daarbij?",
        ],
      },
    ],
  },

  // ─── E. Eindopdrachten ────────────────────────────
  {
    title: "Eindopdracht: gemengde procentvragen",
    explanation: "**Drie typische vraagstukken** — alle technieken samen:\n\n**A** — Een trui kost €60. Vandaag 20% korting. Wat betaal je?\n• Kortingsfactor: 100% − 20% = 80%\n• Nieuwe prijs: 0,80 × 60 = **€48**\n\n**B** — Vorig jaar 240 leerlingen, dit jaar 300. Hoeveel procent meer?\n• Stijging: 300 − 240 = 60\n• Percentage: 60 / 240 × 100% = **25%** meer\n\n**C** — Een telefoon kost €450 inclusief 21% btw. Wat is de prijs zonder btw?\n• Met btw is 121% van origineel\n• Origineel = 450 / 1,21 = **€371,90** (afgerond)\n\n**Overzicht formules**:\n\n| Vraag | Formule |\n|-------|---------|\n| X% van G | (X/100) × G |\n| Welk % is X van Y? | (X/Y) × 100% |\n| X% korting | × (100−X)/100 |\n| X% toename | × (100+X)/100 |\n| Origineel uit eindprijs | eindprijs / factor |\n\nMet deze 5 formules dek je 99% van alle procent-vragen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="155" y1="20" x2="155" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="95" y="36" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="11" font-family="Arial">vraag</text>
<text x="210" y="36" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="11" font-family="Arial">formule</text>
<text x="95" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">X% van G</text>
<text x="210" y="60" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">(X/100)×G</text>
<text x="95" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Welk %?</text>
<text x="210" y="82" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">(X/Y)×100%</text>
<text x="95" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">X% korting</text>
<text x="210" y="104" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">×(100-X)/100</text>
<text x="95" y="126" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">X% toename</text>
<text x="210" y="126" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">×(100+X)/100</text>
<text x="95" y="148" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">origineel</text>
<text x="210" y="148" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">eind / factor</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">5 formules dekken 99% van procent-vragen</text>
</svg>`,
    checks: [
      {
        q: "Een fiets kostte €200, nu €150. Hoeveel procent korting?",
        options: ["25%", "50%", "33%", "75%"],
        answer: 0,
        wrongHints: [
          null,
          "Bij 50% korting zou de fiets €100 worden. Klopt dat met €200 → €150?",
          "Reken eerst de korting in euro uit. Daarna: korting / oorspronkelijke prijs × 100.",
          "Bij 75% korting zou er weinig over zijn van €200. Klopt dat met €150 die je nog betaalt?",
        ],
      },
      {
        q: "Wat is 35% van 80?",
        options: ["28", "35", "115", "2,28"],
        answer: 0,
        wrongHints: [
          null,
          "35 is het percentage zelf, niet de uitkomst. Wat is 35% als kommagetal × 80?",
          "'Van' betekent vermenigvuldigen, niet optellen. Welke bewerking gebruik je dan?",
          "Check je komma. Hoeveel plekken schuift hij van 35% naar kommagetal?",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 2: BTW en omgekeerd rekenen",
    explanation: "**Praktisch eindvraagstuk** waar je vaak in het echt mee te maken krijgt.\n\n**Situatie**: een product staat in een winkel voor **€121** inclusief 21% btw. Vraag: wat is het bedrag zonder btw?\n\n**Stappen**:\n\n1. **Met btw** is **121%** van de prijs zonder btw.\n2. Dus: prijs zonder btw × 1,21 = €121\n3. Omgekeerd: **prijs zonder btw = €121 / 1,21 = €100**\n\n**Check**: €100 × 1,21 = €121 ✓\n\n**Algemeen**:\n• Eindprijs gegeven, oorspronkelijk gevraagd → **deel** door de factor.\n• Bij 21% btw: deel door 1,21.\n• Bij 25% korting (klant betaalde €75): origineel = 75 / 0,75 = **€100**.\n• Bij 50% groei (eind 300): origineel = 300 / 1,50 = **200**.\n\n**Goed gedaan**: je hebt nu het procenten-leerpad doorlopen!\n\n**Recap**:\n- % betekent 'per honderd'\n- Procenten ↔ kommagetallen ↔ breuken\n- 5 formules dekken alle procent-vragen\n- In het echt: korting, btw, groei, prijsverandering",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€121 inclusief 21% btw</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="65" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">factor: 100% + 21% = 121%</text>
<text x="55" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">prijs ex btw × 1,21 = €121</text>
<text x="55" y="115" fill="${COLORS.text}" font-size="13" font-family="Arial">prijs ex btw = €121 / 1,21</text>
<rect x="55" y="128" width="120" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="115" y="152" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">= €100</text>
<text x="195" y="150" fill="${COLORS.muted}" font-size="11" font-family="Arial">btw was €21</text>
<text x="150" y="188" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">procenten onder de knie 🏆</text>
</svg>`,
    checks: [
      {
        q: "Een jas kost €120 met 25% korting. Wat was de oorspronkelijke prijs?",
        options: ["€160", "€150", "€144", "€96"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe krijg je het origineel terug? Deel €120 door welke factor (= percentage dat je nog betaalde)?",
          "Bij 25% korting betaal je 75% van de oorspronkelijke prijs. Welke deling moet je doen?",
          "Vóór de korting was de prijs hoger of lager dan €120? Reken die kant op.",
        ],
      },
    ],
  },
  // ─── F. Examenstijl — VMBO-GT CSE ─────────────────────────
  {
    title: "CSE-vraag — huizenprijs in 4 jaar",
    explanation: "Klassieke CSE-context: een **prijsstijging** of **-daling** uitrekenen, vaak met **indexcijfer**.\n\n> **In 2020 kostte een gemiddeld huis €280.000.** In 2024 is dat **€420.000**.\n\n**Aanpak in 3 stappen:**\n1. **Absolute stijging** = nieuw − oud = 420.000 − 280.000 = **€140.000**.\n2. **Procentuele stijging** = (stijging / oude waarde) × 100% = (140.000 / 280.000) × 100% = 0,5 × 100 = **50%**.\n3. **Indexcijfer** met 2020 = 100: indexcijfer 2024 = (nieuw / oud) × 100 = (420.000 / 280.000) × 100 = **150**.\n\n**Examen-tips**:\n• Procentuele verandering: deel altijd door de **oude** waarde.\n• Indexcijfer: het basisjaar krijgt 100. Andere jaren tov dat basisjaar.\n• Een index van 150 betekent: 50% gestegen sinds basisjaar.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="170" x2="280" y2="170" stroke="#8899aa" stroke-width="1.2"/>
<line x1="40" y1="20" x2="40" y2="170" stroke="#8899aa" stroke-width="1.2"/>
<rect x="80" y="100" width="40" height="70" fill="#42a5f5"/>
<text x="100" y="185" text-anchor="middle" fill="#e0e6f0" font-size="11" font-family="Arial">2020</text>
<text x="100" y="92" text-anchor="middle" fill="#42a5f5" font-size="10" font-family="Arial" font-weight="bold">€280k</text>
<rect x="200" y="55" width="40" height="115" fill="#ff7043"/>
<text x="220" y="185" text-anchor="middle" fill="#e0e6f0" font-size="11" font-family="Arial">2024</text>
<text x="220" y="48" text-anchor="middle" fill="#ff7043" font-size="10" font-family="Arial" font-weight="bold">€420k</text>
<text x="160" y="35" text-anchor="middle" fill="#e0e6f0" font-size="11" font-family="Arial" font-weight="bold">+ 50%</text>
<text x="160" y="48" text-anchor="middle" fill="#ffd54f" font-size="10" font-family="Arial">index: 100 → 150</text>
</svg>`,
    checks: [
      {
        q: "Wat is de **absolute stijging** van de huizenprijs?",
        options: ["€140.000", "€700.000", "€280.000", "€420.000"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van afgetrokken. Stijging = nieuw − oud.",
          "Dat is de oude prijs.",
          "Dat is de nieuwe prijs.",
        ],
      },
      {
        q: "Wat is de **procentuele stijging**?",
        options: ["50%", "33%", "100%", "150%"],
        answer: 0,
        wrongHints: [
          null,
          "Door welk getal moet je delen — de nieuwe of de oude waarde?",
          "Bij 100% verdubbelt de prijs. Klopt dat met 280k → 420k?",
          "Dat is het indexcijfer waarbij het basisjaar 100 is. Het stijgingspercentage is iets anders.",
        ],
      },
      {
        q: "Wat is het **indexcijfer in 2024** (basisjaar 2020 = 100)?",
        options: ["150", "50", "120", "100"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is hoeveel het is gestegen, maar wat is het indexcijfer dat begint bij 100?",
          "Reken: (nieuwe waarde / oude waarde) × 100. Welk getal komt eruit?",
          "100 is alleen het basisjaar. De prijs is gestegen — moet de index dan boven of onder 100 liggen?",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const procenten = {
  id: "procenten",
  title: "Procenten",
  emoji: "💯",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.rekenen.procenten"],
  intro: "Procenten kom je overal tegen — in de winkel, op je rekening, in nieuwsbericht. Hier leer je vanaf de basis: wat % betekent, omzettingen naar kommagetal en breuk, percentage van een getal, andersom, korting, toename en BTW.",
  triggerKeywords: ["procent", "procenten", "%", "korting", "btw", "toename", "stijging", "afname"],
  chapters,
  steps,
};

export default procenten;

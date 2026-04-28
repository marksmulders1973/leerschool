// Leerpad: Kwadraten en wortels — H5 uit Wiskunde Flex deel 2 (havo/vwo klas 2)
// 18 stappen, 6 hoofdstukken, op basisniveau.

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
  "²", "📋", "➖",                       // A. Kwadraten herhaling
  "√", "📐", "🔢", "≈",                  // B. Wortels
  "✖️", "➗", "🧮",                       // C. Rekenen met wortels
  "🟰", "✌️", "🚫",                       // D. x² = c
  "ℕ", "ℚ", "🌀",                        // E. Soorten getallen
  "🏗️", "🏁",                            // F. Toepassingen
];

const chapters = [
  { letter: "A", title: "Kwadraten — herhaling", emoji: "²", from: 0, to: 2 },
  { letter: "B", title: "Wortels (√)", emoji: "√", from: 3, to: 6 },
  { letter: "C", title: "Rekenen met wortels", emoji: "🧮", from: 7, to: 9 },
  { letter: "D", title: "De vergelijking x² = c", emoji: "🟰", from: 10, to: 12 },
  { letter: "E", title: "Soorten getallen", emoji: "🔢", from: 13, to: 15 },
  { letter: "F", title: "Toepassingen + eindopdracht", emoji: "🏁", from: 16, to: 17 },
];

const steps = [
  // ─── A. Kwadraten — herhaling ────────────────────────────
  {
    title: "Wat is een kwadraat?",
    explanation: "Een **kwadraat** is een getal vermenigvuldigd met **zichzelf**. We schrijven het met een klein 2-tje rechtsboven:\n\n• **3²** = 3 · 3 = **9**\n• **5²** = 5 · 5 = **25**\n• **10²** = 10 · 10 = **100**\n• **1²** = 1 · 1 = **1**\n\nDe naam *kwadraat* komt van het Latijnse woord voor **vierkant**: x² is de oppervlakte van een vierkant met zijde x. Vandaar het kleine 2-tje (twee dimensies).",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="cell-h5a" width="8" height="8" patternUnits="userSpaceOnUse">
<rect width="8" height="8" fill="rgba(0,200,83,0.28)" stroke="${COLORS.curve}" stroke-width="0.7"/>
</pattern>
</defs>
<text x="150" y="22" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x² = oppervlakte van een vierkant met zijde x</text>
<rect x="50" y="120" width="16" height="16" fill="url(#cell-h5a)"/>
<text x="58" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">2²</text>
<text x="58" y="172" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 4</text>
<rect x="92" y="112" width="24" height="24" fill="url(#cell-h5a)"/>
<text x="104" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">3²</text>
<text x="104" y="172" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 9</text>
<rect x="140" y="104" width="32" height="32" fill="url(#cell-h5a)"/>
<text x="156" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4²</text>
<text x="156" y="172" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 16</text>
<rect x="195" y="96" width="40" height="40" fill="url(#cell-h5a)"/>
<text x="215" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5²</text>
<text x="215" y="172" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">= 25</text>
</svg>`,
    checks: [
      {
        q: "Wat is 7²?",
        options: ["49", "14", "9", "77"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 7 + 7 gedaan. Maar bij kwadraat **vermenigvuldig** je met zichzelf.",
          "Hoe kom je aan 9? Reken: 7 keer 7.",
          "Niet de cijfers naast elkaar plakken. 7² = 7 · 7.",
        ],
      },
    ],
  },
  {
    title: "Kwadraten van 1 tot 10",
    explanation: "Voor wortels (volgende stap) is het handig om de **eerste 10 kwadraten** te kennen. Probeer deze te onthouden:\n\n| Getal | Kwadraat |\n|-------|----------|\n| 1² | 1 |\n| 2² | 4 |\n| 3² | 9 |\n| 4² | 16 |\n| 5² | 25 |\n| 6² | 36 |\n| 7² | 49 |\n| 8² | 64 |\n| 9² | 81 |\n| 10² | 100 |\n\nHoe vaker je deze kwadraten ziet, hoe sneller je ze herkent. Bij 'welk getal in het kwadraat geeft 49?' moet je direct denken: **7**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="40" y1="40" x2="260" y2="40" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="150" y1="20" x2="150" y2="190" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="95" y="34" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">x²</text>
<text x="205" y="34" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">=</text>
<text x="95" y="55" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">1²</text><text x="205" y="55" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">1</text>
<text x="95" y="71" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">2²</text><text x="205" y="71" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">4</text>
<text x="95" y="87" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">3²</text><text x="205" y="87" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">9</text>
<text x="95" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4²</text><text x="205" y="103" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">16</text>
<text x="95" y="119" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5²</text><text x="205" y="119" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">25</text>
<text x="95" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">6²</text><text x="205" y="135" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">36</text>
<text x="95" y="151" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">7²</text><text x="205" y="151" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">49</text>
<text x="95" y="167" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">8²</text><text x="205" y="167" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">64</text>
<text x="95" y="183" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">9·10²</text><text x="205" y="183" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">81·100</text>
</svg>`,
    checks: [
      {
        q: "Wat is 8²?",
        options: ["64", "16", "82", "48"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 8 + 8 gedaan. Reken nog: 8 keer 8.",
          "Niet de cijfers achter elkaar zetten. 8² = 8 · 8.",
          "Hoe kom je aan 48? Probeer: 8 · 8 = ?",
        ],
      },
    ],
  },
  {
    title: "Negatieve getallen kwadrateren",
    explanation: "Wat als het getal **negatief** is? Voorbeeld: (−3)².\n\n(−3)² = (−3) · (−3) = **9**\n\nWaarom 9 en niet −9? Omdat **min keer min = plus**. Dus elk negatief getal in het kwadraat wordt **positief** (of 0).\n\nBelangrijke gevolgen:\n• **(−5)² = 25** (niet −25)\n• **(−10)² = 100**\n• **0² = 0**\n\nKortom: een kwadraat is **nooit negatief**. Onthoud dit — straks bij wortels speelt het een rol.\n\n**Let op het verschil**:\n• **(−3)²** = 9 (eerst negatief, dan kwadrateren)\n• **−3²** = −9 (eerst 3², dan minteken ervoor)\n\nDe haakjes maken het verschil!",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">min × min = plus</text>
<rect x="40" y="55" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="80" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">(−3)²</text>
<text x="160" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">= (−3) · (−3)</text>
<text x="245" y="80" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 9</text>
<text x="80" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">(−5)²</text>
<text x="160" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">= (−5) · (−5)</text>
<text x="245" y="105" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 25</text>
<rect x="40" y="125" width="220" height="2" fill="${COLORS.curveAlt}" opacity="0.4"/>
<text x="150" y="148" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">let op het verschil:</text>
<text x="100" y="172" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">(−3)² = 9</text>
<text x="200" y="172" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="12" font-family="Arial">−3² = −9</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">haakjes maken het verschil</text>
</svg>`,
    checks: [
      {
        q: "Wat is (−4)²?",
        options: ["16", "−16", "−8", "8"],
        answer: 0,
        wrongHints: [
          null,
          "Min × min geeft **plus**. Het kwadraat van een negatief getal is altijd positief.",
          "Je hebt −4 · 2 gedaan. Maar het 2-tje is geen vermenigvuldiger — het zegt: doe het kwadraat.",
          "Je hebt 4 + 4 gedaan. Reken: (−4) · (−4) = ?",
        ],
      },
    ],
  },

  // ─── B. Wortels (√) ────────────────────────────
  {
    title: "Wat is een wortel?",
    explanation: "Een **wortel** is precies het **omgekeerde** van een kwadraat.\n\nKwadraat zegt: 'pak een getal en vermenigvuldig met zichzelf'.\nWortel zegt: 'gegeven een uitkomst, welk getal in het kwadraat geeft dat?'\n\nWe schrijven het met dit teken: **√**.\n\n• **√9** = ? → welk getal · zichzelf = 9? → **3** (want 3·3 = 9)\n• **√25** = ? → welk getal · zichzelf = 25? → **5** (want 5·5 = 25)\n• **√100** = **10** (want 10·10 = 100)\n\nKortom: **kwadraat en wortel heffen elkaar op**. Als je √ doet en daarna ², dan kom je weer op het oorspronkelijke getal uit.",
    svg: `<svg viewBox="0 0 300 200">
<text x="80" y="40" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">3</text>
<line x1="100" y1="38" x2="180" y2="38" stroke="${COLORS.curve}" stroke-width="2"/>
<polygon points="180,33 190,38 180,43" fill="${COLORS.curve}"/>
<text x="140" y="30" text-anchor="middle" fill="${COLORS.curve}" font-size="11" font-family="Arial">×zichzelf</text>
<text x="220" y="40" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">9</text>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">kwadraat: 3 → 9</text>
<line x1="40" y1="90" x2="260" y2="90" stroke="${COLORS.text}" stroke-width="1" opacity="0.3"/>
<text x="80" y="130" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">9</text>
<line x1="100" y1="128" x2="180" y2="128" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<polygon points="100,123 90,128 100,133" fill="${COLORS.curveAlt}"/>
<text x="140" y="120" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial">√</text>
<text x="220" y="130" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">3</text>
<text x="150" y="150" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">wortel: 9 → 3</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial" font-style="italic">de wortel ondoet het kwadraat</text>
</svg>`,
    checks: [
      {
        q: "Wat is √16?",
        options: ["4", "8", "16", "256"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 16 ÷ 2 gedaan. Maar de wortel zoekt: welk getal **in het kwadraat** geeft 16?",
          "16 staat ónder de wortel. De vraag is: welk getal · zichzelf geeft 16?",
          "256 = 16². Dat is juist het tegenovergestelde — kwadrateren in plaats van wortel.",
        ],
      },
    ],
  },
  {
    title: "Wortels uit perfecte kwadraten",
    explanation: "Sommige getallen geven een **mooie** wortel — een rond getal. Dat heten **perfecte kwadraten**. Dit zijn getallen uit de tabel van vorige stap:\n\n| √ | uitkomst |\n|---|----------|\n| √1 | 1 |\n| √4 | 2 |\n| √9 | 3 |\n| √16 | 4 |\n| √25 | 5 |\n| √36 | 6 |\n| √49 | 7 |\n| √64 | 8 |\n| √81 | 9 |\n| √100 | 10 |\n\nAls je deze kent, hoef je niet te rekenen — direct herkennen.\n\n**Trucje**: zie je bv. √64? Vraag jezelf: 'welk getal kwadraat is 64?' De tabel zegt: 8² = 64. Dus **√64 = 8**.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">perfecte kwadraten geven mooie wortels</text>
<rect x="35" y="40" width="230" height="150" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="150" y1="40" x2="150" y2="190" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="95" y="58" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">√x</text>
<text x="205" y="58" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">=</text>
<line x1="35" y1="65" x2="265" y2="65" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="95" y="83" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">√4</text><text x="205" y="83" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">2</text>
<text x="95" y="103" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">√9</text><text x="205" y="103" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">3</text>
<text x="95" y="123" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">√25</text><text x="205" y="123" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">5</text>
<text x="95" y="143" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">√49</text><text x="205" y="143" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">7</text>
<text x="95" y="163" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">√81</text><text x="205" y="163" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">9</text>
<text x="95" y="183" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">√100</text><text x="205" y="183" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">10</text>
</svg>`,
    checks: [
      {
        q: "Wat is √36?",
        options: ["6", "9", "18", "1296"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe kom je aan 9? Reken: welk getal kwadraat is 36? 6 · 6 = ?",
          "Je hebt 36 ÷ 2 gedaan. Maar wortel zoekt het getal dat **in het kwadraat** 36 geeft.",
          "1296 is 36². Andersom — dat is kwadrateren, niet wortel trekken.",
        ],
      },
      {
        q: "Wat is √64?",
        options: ["8", "32", "16", "4096"],
        answer: 0,
        wrongHints: [
          null,
          "32 = 64 ÷ 2. Maar wortel werkt anders: welk getal · zichzelf = 64?",
          "Je hebt half-half gedaan. Probeer: welk getal kwadraat geeft 64? 8 · 8 = ?",
          "4096 = 64². Dat is kwadraat, niet wortel.",
        ],
      },
    ],
  },
  {
    title: "Niet alle wortels zijn rond",
    explanation: "Niet elk getal heeft een **mooie** wortel. Sommige geven oneindig lange decimale getallen.\n\nVoorbeelden:\n• **√2** ≈ **1,414...** (gaat oneindig door zonder herhaling)\n• **√3** ≈ **1,732...**\n• **√5** ≈ **2,236...**\n• **√10** ≈ **3,162...**\n\nMet een **rekenmachine** zoek je deze waardes op. In opdrachten houden we het meestal exact: we schrijven gewoon **√2** in plaats van 1,414...\n\n**Tip**: weet je niet of een wortel rond is? Check of het getal in de kwadratentabel staat. √49 = 7 (want 49 staat in de tabel). √50 is geen rond getal — 50 staat niet in de tabel.\n\nVoor schattingen: √50 ligt tussen √49 (=7) en √64 (=8), dus iets meer dan 7.",
    svg: `<svg viewBox="0 0 300 200">
<text x="60" y="50" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">rond:</text>
<text x="200" y="50" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">niet rond:</text>
<line x1="150" y1="35" x2="150" y2="180" stroke="${COLORS.text}" stroke-width="1" opacity="0.3"/>
<text x="60" y="80" fill="${COLORS.text}" font-size="12" font-family="Arial">√4 = 2</text>
<text x="200" y="80" fill="${COLORS.text}" font-size="12" font-family="Arial">√2 ≈ 1,414...</text>
<text x="60" y="105" fill="${COLORS.text}" font-size="12" font-family="Arial">√9 = 3</text>
<text x="200" y="105" fill="${COLORS.text}" font-size="12" font-family="Arial">√3 ≈ 1,732...</text>
<text x="60" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">√25 = 5</text>
<text x="200" y="130" fill="${COLORS.text}" font-size="12" font-family="Arial">√5 ≈ 2,236...</text>
<text x="60" y="155" fill="${COLORS.text}" font-size="12" font-family="Arial">√100 = 10</text>
<text x="200" y="155" fill="${COLORS.text}" font-size="12" font-family="Arial">√7 ≈ 2,646...</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">niet-ronde wortels schrijven we vaak gewoon als √2, √3, √7</text>
</svg>`,
    checks: [
      {
        q: "Welke wortel is een 'mooi' rond getal?",
        options: ["√81", "√7", "√50", "√99"],
        answer: 0,
        wrongHints: [
          null,
          "7 staat niet in de kwadratentabel — er is geen geheel getal dat in het kwadraat 7 geeft.",
          "50 staat niet in de tabel. Dichtstbijzijnde: 49 (=7²) en 64 (=8²).",
          "99 staat niet in de tabel. Dichtstbijzijnde: 81 (=9²) en 100 (=10²).",
        ],
      },
    ],
  },
  {
    title: "Wortel en kwadraat heffen elkaar op",
    explanation: "Een belangrijke regel: **wortel en kwadraat ondoen elkaar**.\n\n**(√a)² = a**  (als je een wortel kwadrateert, krijg je het oorspronkelijke getal terug)\n\nVoorbeelden:\n• (√7)² = **7**\n• (√50)² = **50**\n• (√123)² = **123**\n\nDit werkt ook andersom (voor positieve x):\n\n**√(x²) = x**  (als je een kwadraat onder een wortel zet, krijg je x terug)\n\nDeze regel is heel handig bij het oplossen van vergelijkingen — bv. x² = 25 → x = √25 = 5.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="35" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">wortel en kwadraat heffen elkaar op</text>
<rect x="40" y="60" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="60" y="95" fill="${COLORS.text}" font-size="14" font-family="Arial">(√7)²</text>
<text x="120" y="95" fill="${COLORS.text}" font-size="14" font-family="Arial">=</text>
<text x="155" y="95" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">7</text>
<text x="200" y="95" fill="${COLORS.muted}" font-size="11" font-family="Arial">(√ daarna ²)</text>
<text x="60" y="130" fill="${COLORS.text}" font-size="14" font-family="Arial">√(5²)</text>
<text x="120" y="130" fill="${COLORS.text}" font-size="14" font-family="Arial">=</text>
<text x="155" y="130" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">5</text>
<text x="200" y="130" fill="${COLORS.muted}" font-size="11" font-family="Arial">(² daarna √)</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">handig bij het oplossen van x² = c later</text>
</svg>`,
    checks: [
      {
        q: "Wat is (√11)²?",
        options: ["11", "121", "√11", "22"],
        answer: 0,
        wrongHints: [
          null,
          "121 = 11². Maar je begint hier met √11 en kwadrateert dat — dan ondoen ze elkaar.",
          "Het kwadraat heft de wortel op. Je krijgt het getal **onder** de wortel terug.",
          "Je hebt 11 + 11 gedaan. Maar √ en ² zijn omgekeerden — ze geven elkaar's invoer terug.",
        ],
      },
    ],
  },

  // ─── C. Rekenen met wortels ────────────────────────────
  {
    title: "Vermenigvuldigen: √a × √b = √(a·b)",
    explanation: "Wortels mag je in elkaar schuiven bij vermenigvuldigen:\n\n**√a × √b = √(a · b)**\n\nVoorbeelden:\n• **√2 × √3** = √(2·3) = **√6**\n• **√5 × √5** = √(5·5) = √25 = **5**\n• **√4 × √9** = √(4·9) = √36 = **6**\n  (check: √4 = 2, √9 = 3, dus 2·3 = 6 ✓)\n\n**Speciaal geval**: **√a × √a = a**. Bijvoorbeeld √7 × √7 = 7.\n\nWaarom? Omdat √a · √a = (√a)² = a (vorige stap).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="35" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">√a × √b = √(a · b)</text>
<rect x="40" y="55" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="80" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">√2 × √3</text>
<text x="160" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">= √(2·3)</text>
<text x="240" y="90" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= √6</text>
<text x="80" y="120" fill="${COLORS.text}" font-size="13" font-family="Arial">√4 × √9</text>
<text x="160" y="120" fill="${COLORS.text}" font-size="13" font-family="Arial">= √36</text>
<text x="240" y="120" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 6</text>
<text x="80" y="150" fill="${COLORS.text}" font-size="13" font-family="Arial">√7 × √7</text>
<text x="160" y="150" fill="${COLORS.text}" font-size="13" font-family="Arial">= √49</text>
<text x="240" y="150" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 7</text>
<text x="150" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tip: √a × √a = a (handig bij identiek wortels)</text>
</svg>`,
    checks: [
      {
        q: "Wat is √3 × √12?",
        options: ["6", "√15", "12", "36"],
        answer: 0,
        wrongHints: [
          null,
          "Bij √a × √b mag je optellen onder de wortel? Nee — je vermenigvuldigt: √(3·12) = √36.",
          "12 = 3 · 4 — dat is alleen het tweede getal × iets. Reken: √(3·12) = √? = ?",
          "Je hebt 3 · 12 gedaan zonder de wortel. Maar √36 = ? (denk aan de tabel)",
        ],
      },
    ],
  },
  {
    title: "Delen: √a / √b = √(a/b)",
    explanation: "Hetzelfde maar dan met delen:\n\n**√a / √b = √(a / b)**\n\nVoorbeelden:\n• **√50 / √2** = √(50/2) = **√25** = **5**\n• **√48 / √3** = √(48/3) = **√16** = **4**\n• **√100 / √4** = √25 = **5**\n  (check: √100 = 10, √4 = 2, dus 10/2 = 5 ✓)\n\nDeze regel is handig om grote of moeilijke wortels te vereenvoudigen.\n\n**Trucje**: zoek of je het getal onder de wortel **deelbaar** kan maken — dan komen er soms mooie ronde getallen uit.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="35" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">√a / √b = √(a / b)</text>
<rect x="40" y="55" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="60" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">√50 / √2</text>
<text x="155" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">= √(50/2)</text>
<text x="240" y="90" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= √25 = 5</text>
<text x="60" y="120" fill="${COLORS.text}" font-size="13" font-family="Arial">√48 / √3</text>
<text x="155" y="120" fill="${COLORS.text}" font-size="13" font-family="Arial">= √(48/3)</text>
<text x="240" y="120" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= √16 = 4</text>
<text x="60" y="150" fill="${COLORS.text}" font-size="13" font-family="Arial">√100/√4</text>
<text x="155" y="150" fill="${COLORS.text}" font-size="13" font-family="Arial">= √25</text>
<text x="240" y="150" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 5</text>
</svg>`,
    checks: [
      {
        q: "Wat is √72 / √8?",
        options: ["3", "9", "√64", "√9"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt √72 / √8 = 9 gedaan? Reken: √(72/8) = √9 = ?",
          "√64 zou betekenen 72 + 8 of zoiets. Maar de regel is delen: √(72/8).",
          "Je bent gestopt bij √9. Werk nog 1 stap verder: √9 = ?",
        ],
      },
    ],
  },
  {
    title: "Wortels vereenvoudigen",
    explanation: "Soms kun je een grote wortel **vereenvoudigen** door 'm te splitsen.\n\nTruc: zoek of het getal onder de wortel een **perfect kwadraat** als factor heeft.\n\n**Voorbeeld**: √50\n• 50 = 25 · 2 (en 25 is een perfect kwadraat)\n• √50 = √(25 · 2) = √25 · √2 = **5√2**\n\n**Voorbeeld**: √72\n• 72 = 36 · 2\n• √72 = √36 · √2 = **6√2**\n\n**Voorbeeld**: √45\n• 45 = 9 · 5\n• √45 = √9 · √5 = **3√5**\n\nKortom: trek het 'mooie' deel uit de wortel. Wat overblijft staat netjes als '5√2' of '3√5'.\n\n**Lees als**: '5 keer wortel 2' (de wortel hoort bij het tweede getal).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">trek het perfecte kwadraat uit de wortel</text>
<rect x="40" y="50" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="60" y="80" fill="${COLORS.text}" font-size="13" font-family="Arial">√50</text>
<text x="105" y="80" fill="${COLORS.text}" font-size="13" font-family="Arial">= √(25 · 2)</text>
<text x="200" y="80" fill="${COLORS.text}" font-size="13" font-family="Arial">= √25 · √2</text>
<text x="60" y="100" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 5√2</text>
<rect x="40" y="115" width="220" height="1" fill="${COLORS.curve}" opacity="0.2"/>
<text x="60" y="135" fill="${COLORS.text}" font-size="13" font-family="Arial">√72</text>
<text x="105" y="135" fill="${COLORS.text}" font-size="13" font-family="Arial">= √(36 · 2)</text>
<text x="200" y="135" fill="${COLORS.text}" font-size="13" font-family="Arial">= √36 · √2</text>
<text x="60" y="155" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 6√2</text>
<rect x="40" y="170" width="220" height="1" fill="${COLORS.curve}" opacity="0.2"/>
<text x="60" y="190" fill="${COLORS.text}" font-size="13" font-family="Arial">√45 = √(9·5)</text>
<text x="180" y="190" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 3√5</text>
</svg>`,
    checks: [
      {
        q: "Vereenvoudig √20.",
        options: ["2√5", "4√5", "√20 (kan niet)", "10"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 20 = 4 · 5 (klopt), maar √4 is 2 — niet 4. Vergeet niet de wortel te nemen.",
          "Probeer 20 = 4 · 5. Dan √20 = √4 · √5 = ?",
          "10 zou √100 zijn. Maar we hebben √20. Splits: 20 = 4 · 5.",
        ],
      },
    ],
  },

  // ─── D. De vergelijking x² = c ────────────────────────────
  {
    title: "Wat is een vergelijking?",
    explanation: "Een **vergelijking** is een wiskundige zin met een **=** teken erin. Het zegt: links en rechts is gelijk.\n\nVoorbeelden van vergelijkingen:\n• **3 + 4 = 7** (klopt, geen onbekende)\n• **x + 3 = 8** (er staat een onbekende x in — die zoeken we)\n• **2x = 10** (welke x maakt dit waar?)\n\n**Vergelijking oplossen** = de waarde van x zoeken die de zin **kloppend** maakt.\n\nVoor x + 3 = 8: welke x? Antwoord: **x = 5** (want 5 + 3 = 8 ✓).\nVoor 2x = 10: welke x? Antwoord: **x = 5** (want 2 · 5 = 10 ✓).\n\nIn de volgende stappen kijken we naar een speciale soort: vergelijkingen met **x²** erin.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="30" width="180" height="40" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="56" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">x + 3 = 8</text>
<text x="100" y="100" fill="${COLORS.text}" font-size="12" font-family="Arial">welke x maakt</text>
<text x="100" y="115" fill="${COLORS.text}" font-size="12" font-family="Arial">dit kloppend?</text>
<line x1="200" y1="105" x2="240" y2="105" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="240,100 250,105 240,110" fill="${COLORS.point}"/>
<rect x="115" y="135" width="80" height="40" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="155" y="161" text-anchor="middle" fill="${COLORS.point}" font-size="18" font-family="Arial" font-weight="bold">x = 5</text>
</svg>`,
    checks: [
      {
        q: "Los op: 2x = 14.",
        options: ["x = 7", "x = 12", "x = 28", "x = 16"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 14 − 2 = 12 gedaan. Maar 2x betekent 2 keer x — dus delen: 14 / 2.",
          "Je hebt 14 + 14 of 2 · 14 gedaan. We zoeken het omgekeerde: x · 2 = 14, dus x = 14 / 2.",
          "14 + 2 = 16. Maar de vergelijking heeft geen plus — er staat 2x = 14, dus x = ?",
        ],
      },
    ],
  },
  {
    title: "x² = c oplossen",
    explanation: "Nu een speciale vergelijking: **x² = c** (waarbij c een getal is).\n\nVoorbeeld: **x² = 9**.\n• Welk getal in het kwadraat geeft 9? Dat is √9 = **3**.\n• Maar pas op: ook **−3** werkt, want (−3)² = 9 ook.\n• Dus er zijn **twee** oplossingen: x = 3 of x = −3.\n• We schrijven dat als **x = ±3** (lees: 'plus of min 3').\n\n**Algemene regel** voor x² = c (met c > 0):\n\n**x = ±√c**\n\nVoorbeelden:\n• x² = 16 → x = ±4\n• x² = 25 → x = ±5\n• x² = 100 → x = ±10\n• x² = 50 → x = ±√50 = ±5√2 (vereenvoudigd)\n\nElke kwadraatvergelijking met c > 0 heeft dus **twee oplossingen**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="80" y="25" width="140" height="38" fill="rgba(0,200,83,0.10)" stroke="${COLORS.curve}" stroke-width="2" rx="6"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="18" font-family="Arial">x² = 9</text>
<line x1="150" y1="68" x2="150" y2="90" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="145,85 150,95 155,85" fill="${COLORS.point}"/>
<text x="150" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">x = ±√9</text>
<line x1="150" y1="125" x2="150" y2="140" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="145,135 150,145 155,135" fill="${COLORS.point}"/>
<rect x="60" y="150" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="100" y="174" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">x = 3</text>
<rect x="160" y="150" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="200" y="174" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">x = −3</text>
</svg>`,
    checks: [
      {
        q: "Los op: x² = 25.",
        options: ["x = ±5", "x = 5", "x = 12,5", "x = ±25"],
        answer: 0,
        wrongHints: [
          null,
          "5 is één oplossing, maar er is ook een **negatieve**: (−5)² = 25 ook. Dus er zijn twee.",
          "Je hebt 25 / 2 gedaan. Maar bij x² = 25 zoek je √25, niet 25/2.",
          "Je hebt het kwadraat over genomen. Maar je moet juist √ doen. √25 = 5, en min 5 ook.",
        ],
      },
      {
        q: "Los op: x² = 64.",
        options: ["x = ±8", "x = ±32", "x = 64", "x = ±64"],
        answer: 0,
        wrongHints: [
          null,
          "32 = 64 / 2. Maar je zoekt √64 — welk getal kwadraat is 64?",
          "64 = 8², maar je zoekt x, niet x². Pas √ toe.",
          "Je hebt 64 zelf overgenomen. √64 = 8 (en −8). Pas √ toe.",
        ],
      },
    ],
  },
  {
    title: "Speciale gevallen: x² = 0 en x² = negatief",
    explanation: "Niet altijd zijn er twee oplossingen. Soms zijn het er **één** of zelfs **geen**.\n\n**Geval 1**: **x² = 0**\n• Welk getal in het kwadraat geeft 0? Alleen 0 zelf (0² = 0).\n• Eén oplossing: **x = 0**.\n\n**Geval 2**: **x² = negatief getal** (bv. x² = −4)\n• Een kwadraat is **nooit negatief** (we zagen al: min × min = plus).\n• Dus geen enkele x maakt x² = −4 waar.\n• **Geen oplossingen**.\n\n**Samenvatting** voor x² = c:\n\n| c | aantal oplossingen |\n|---|--------------------|\n| c > 0 (positief) | **2** (x = ±√c) |\n| c = 0 | **1** (x = 0) |\n| c < 0 (negatief) | **0** (geen) |\n\nDit komt later weer terug bij parabolen en nulpunten.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">aantal oplossingen van x² = c</text>
<rect x="35" y="40" width="230" height="150" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="35" y1="68" x2="265" y2="68" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="125" y1="40" x2="125" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="80" y="60" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">c</text>
<text x="195" y="60" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="12" font-family="Arial">aantal oplossingen</text>
<text x="80" y="95" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">positief</text>
<text x="195" y="95" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">2 (±√c)</text>
<text x="80" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">= 0</text>
<text x="195" y="125" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">1 (x = 0)</text>
<text x="80" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">negatief</text>
<text x="195" y="155" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">0 (geen)</text>
<text x="150" y="183" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">een kwadraat kan nooit negatief zijn</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel oplossingen heeft x² = −9?",
        options: ["0", "1", "2", "Oneindig"],
        answer: 0,
        wrongHints: [
          null,
          "1 zou kloppen als c = 0. Hier is c negatief — dat geeft 0 oplossingen.",
          "2 oplossingen krijg je alleen bij positieve c. Bij negatief is er **geen** x die werkt.",
          "Een vergelijking heeft hooguit een paar oplossingen, niet oneindig veel.",
        ],
      },
    ],
  },

  // ─── E. Soorten getallen ────────────────────────────
  {
    title: "Natuurlijke en gehele getallen",
    explanation: "Wiskundigen verdelen getallen in **soorten**, gebaseerd op wat je ermee kunt.\n\n**Natuurlijke getallen** (ℕ): de telgetallen vanaf 0.\n• 0, 1, 2, 3, 4, 5, ...\n• Geen negatieve, geen breuken, geen decimalen.\n\n**Gehele getallen** (ℤ): de natuurlijke getallen + de negatieve.\n• ..., −3, −2, −1, 0, 1, 2, 3, ...\n• Wel negatieve, geen breuken.\n\nElk natuurlijk getal is dus ook een geheel getal. Maar niet andersom: −5 is geheel, niet natuurlijk.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="20" y1="100" x2="280" y2="100" stroke="${COLORS.text}" stroke-width="1.5"/>
<polygon points="270,95 280,100 270,105" fill="${COLORS.text}"/>
<polygon points="30,95 20,100 30,105" fill="${COLORS.text}"/>
<text x="40" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">−3</text>
<text x="75" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">−2</text>
<text x="110" y="118" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">−1</text>
<text x="145" y="118" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">0</text>
<text x="180" y="118" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">1</text>
<text x="215" y="118" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">2</text>
<text x="250" y="118" text-anchor="middle" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">3</text>
<circle cx="40" cy="100" r="3" fill="${COLORS.text}"/>
<circle cx="75" cy="100" r="3" fill="${COLORS.text}"/>
<circle cx="110" cy="100" r="3" fill="${COLORS.text}"/>
<circle cx="145" cy="100" r="4" fill="${COLORS.point}"/>
<circle cx="180" cy="100" r="4" fill="${COLORS.curve}"/>
<circle cx="215" cy="100" r="4" fill="${COLORS.curve}"/>
<circle cx="250" cy="100" r="4" fill="${COLORS.curve}"/>
<text x="200" y="55" text-anchor="middle" fill="${COLORS.curve}" font-size="11" font-family="Arial" font-weight="bold">ℕ natuurlijk: 0, 1, 2, 3, ...</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">ℤ geheel: ..., −2, −1, 0, 1, 2, ...</text>
</svg>`,
    checks: [
      {
        q: "Welk getal is wel **geheel** maar niet **natuurlijk**?",
        options: ["−7", "5", "0,5", "½"],
        answer: 0,
        wrongHints: [
          null,
          "5 is wel natuurlijk (de telgetallen 1, 2, 3, ... bevatten 5).",
          "0,5 is een decimaal — geen geheel getal.",
          "½ is een breuk — geen geheel getal.",
        ],
      },
    ],
  },
  {
    title: "Rationale getallen (breuken)",
    explanation: "**Rationale getallen** (ℚ): alle getallen die je als **breuk** kunt schrijven (teller / noemer).\n\nVoorbeelden:\n• **½** = 1/2 = 0,5\n• **¾** = 3/4 = 0,75\n• **7** = 7/1 (elk geheel getal is ook rationaal)\n• **−2,5** = −5/2\n• **0,333...** = 1/3 (terugkerende decimaal)\n\nKenmerk: de decimale schrijfwijze stopt **of herhaalt** zich na een tijdje. Bv:\n• 1/4 = 0,25 (stopt)\n• 1/3 = 0,333... (3 herhaalt)\n• 1/7 = 0,142857142857... (142857 herhaalt)\n\n**Volgorde**: ℕ ⊂ ℤ ⊂ ℚ (elke natuurlijke is geheel, elke gehele is rationaal).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="25" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">rationaal: te schrijven als breuk</text>
<rect x="40" y="45" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="60" y="75" fill="${COLORS.text}" font-size="14" font-family="Arial">½</text>
<text x="100" y="75" fill="${COLORS.text}" font-size="13" font-family="Arial">= 1/2 = 0,5</text>
<text x="60" y="100" fill="${COLORS.text}" font-size="14" font-family="Arial">¾</text>
<text x="100" y="100" fill="${COLORS.text}" font-size="13" font-family="Arial">= 3/4 = 0,75</text>
<text x="60" y="125" fill="${COLORS.text}" font-size="14" font-family="Arial">7</text>
<text x="100" y="125" fill="${COLORS.text}" font-size="13" font-family="Arial">= 7/1 (ook rationaal)</text>
<text x="60" y="150" fill="${COLORS.text}" font-size="14" font-family="Arial">⅓</text>
<text x="100" y="150" fill="${COLORS.text}" font-size="13" font-family="Arial">= 0,333... (herhaalt)</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">decimalen stoppen of herhalen zich</text>
</svg>`,
    checks: [
      {
        q: "Welk getal is **rationaal**?",
        options: ["⅖", "√2", "π", "Geen van deze"],
        answer: 0,
        wrongHints: [
          null,
          "√2 = 1,414... is een oneindige niet-herhalende decimaal — niet rationaal.",
          "π = 3,14159... is ook oneindig en niet-herhalend — niet rationaal.",
          "⅖ is gewoon een breuk (2/5 = 0,4). Dat is per definitie rationaal.",
        ],
      },
    ],
  },
  {
    title: "Irrationale getallen — √2, π, ...",
    explanation: "Sommige getallen kun je **niet** als breuk schrijven. Deze heten **irrationale getallen**.\n\nKenmerk: hun decimale schrijfwijze gaat **oneindig door zonder herhaling**.\n\nBekendste voorbeelden:\n• **√2** = 1,4142135... (oneindig, geen patroon)\n• **√3** = 1,7320508...\n• **√5** = 2,2360679...\n• **π** (pi) = 3,1415926...\n\nSterker nog: **elk wortelgetal van een niet-perfect kwadraat is irrationaal**. Dus √2, √3, √5, √6, √7, √8, √10, ... zijn allemaal irrationaal.\n\n**Reële getallen** (ℝ): alle rationale + alle irrationale getallen samen. Dit is de hele getallenlijn die je kent.\n\n**Hierarchie**: ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ (elke groep is een onderdeel van de volgende).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">irrationaal: oneindige niet-herhalende decimaal</text>
<rect x="40" y="42" width="220" height="2" fill="${COLORS.curveAlt}" opacity="0.4"/>
<text x="60" y="75" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial">√2</text>
<text x="105" y="75" fill="${COLORS.text}" font-size="12" font-family="Arial">= 1,41421356...</text>
<text x="60" y="100" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial">√3</text>
<text x="105" y="100" fill="${COLORS.text}" font-size="12" font-family="Arial">= 1,73205080...</text>
<text x="60" y="125" fill="${COLORS.curveAlt}" font-size="14" font-family="Arial">π</text>
<text x="105" y="125" fill="${COLORS.text}" font-size="12" font-family="Arial">= 3,14159265...</text>
<rect x="40" y="138" width="220" height="2" fill="${COLORS.curve}" opacity="0.3"/>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">ℝ = ℚ + irrationale</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">de hele getallenlijn — ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ</text>
</svg>`,
    checks: [
      {
        q: "Welk getal is **irrationaal**?",
        options: ["√7", "0,5", "−3", "1/4"],
        answer: 0,
        wrongHints: [
          null,
          "0,5 = 1/2 — dat is een breuk, dus rationaal.",
          "−3 is een geheel getal, dus ook rationaal.",
          "1/4 is letterlijk al een breuk — rationaal per definitie.",
        ],
      },
    ],
  },

  // ─── F. Toepassingen ────────────────────────────
  {
    title: "Toepassing: vierkant grondvlak",
    explanation: "**Praktisch voorbeeld**. Een vierkant pleintje heeft een oppervlakte van **49 m²**. Hoe lang zijn de zijden?\n\nFormule: oppervlakte = zijde² (vierkant).\n\nDus: zijde² = 49 → zijde = √49 = **7 m**.\n\nAls de oppervlakte 50 m² is? Dan: zijde = √50 ≈ 7,07 m (afgerond).\n\n**Ander voorbeeld**: een tegelvloer is 144 cm². Welke maat tegel is dat?\n• zijde² = 144\n• zijde = √144 = 12\n• Dus 12 cm bij 12 cm tegels.\n\nHet wortel-trekken is hier de **omgekeerde** van het kwadrateren: oppervlakte → zijde.",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="cell-h5f" width="10" height="10" patternUnits="userSpaceOnUse">
<rect width="10" height="10" fill="rgba(0,200,83,0.18)" stroke="${COLORS.curve}" stroke-width="0.6"/>
</pattern>
</defs>
<rect x="80" y="40" width="70" height="70" fill="url(#cell-h5f)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<text x="115" y="78" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">49 m²</text>
<text x="115" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">? m</text>
<text x="55" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">? m</text>
<line x1="170" y1="75" x2="200" y2="75" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="200,70 210,75 200,80" fill="${COLORS.point}"/>
<text x="240" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">zijde = √49</text>
<text x="240" y="85" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">= 7 m</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">van oppervlakte naar zijde: pas de wortel toe</text>
</svg>`,
    checks: [
      {
        q: "Een vierkante kamer heeft oppervlakte 81 m². Hoe lang zijn de zijden?",
        options: ["9 m", "40,5 m", "81 m", "8 m"],
        answer: 0,
        wrongHints: [
          null,
          "40,5 = 81 / 2. Maar voor zijden van een vierkant: zijde = √oppervlakte = √81.",
          "81 zou de oppervlakte zelf zijn. De zijde is √81 = ?",
          "8² = 64 — niet 81. Probeer 9² = ?",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht: kwadraten en wortels gemengd",
    explanation: "Tijd om alles bij elkaar te zetten. Drie korte vraagstukken.\n\n**Vraag 1**: Bereken (−6)².\n• Min × min = plus, dus (−6)² = (−6)·(−6) = **36**.\n\n**Vraag 2**: Vereenvoudig √98.\n• 98 = 49 · 2\n• √98 = √49 · √2 = **7√2**.\n\n**Vraag 3**: Los op: x² = 81.\n• x = ±√81 = **±9** (dus x = 9 of x = −9).\n\nAlle vier eigenschappen die we leerden komen samen:\n• Kwadrateren met negatieve getallen ✓\n• Wortels vereenvoudigen ✓\n• Vergelijking x² = c oplossen ✓\n• Twee oplossingen onthouden ✓",
    svg: `<svg viewBox="0 0 300 200">
<text x="60" y="40" fill="${COLORS.text}" font-size="13" font-family="Arial">1. (−6)² =</text>
<rect x="160" y="22" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="200" y="42" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">36</text>
<text x="60" y="90" fill="${COLORS.text}" font-size="13" font-family="Arial">2. √98 =</text>
<rect x="160" y="72" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="200" y="92" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">7√2</text>
<text x="60" y="140" fill="${COLORS.text}" font-size="13" font-family="Arial">3. x² = 81 →</text>
<rect x="160" y="122" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="200" y="142" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">x = ±9</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je hebt H5 onder de knie</text>
</svg>`,
    checks: [
      {
        q: "Los op: x² = 100.",
        options: ["x = ±10", "x = ±50", "x = 10", "x = ±100"],
        answer: 0,
        wrongHints: [
          null,
          "50 = 100 / 2. Maar bij x² = c zoek je √c, niet c/2.",
          "10 is één oplossing, maar er is ook een **negatieve**: (−10)² = 100.",
          "Je hebt 100 zelf overgenomen. Pas √ toe: √100 = 10.",
        ],
      },
    ],
  },
];

// Koppel emoji aan elke stap
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kwadratenWortels = {
  id: "kwadraten-wortels",
  title: "Kwadraten en wortels",
  emoji: "²",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.kwadraten"],
  intro: "H5 uit Wiskunde Flex deel 2: vanaf het kwadraat (3² = 9) tot wortels (√), rekenen met wortels, x² = c oplossen, en de soorten getallen (rationaal, irrationaal). Op basisniveau opgebouwd.",
  triggerKeywords: ["kwadraat", "kwadraten", "wortel", "wortels", "√", "x²", "irrationaal", "rationaal", "soorten getallen"],
  chapters,
  steps,
};

export default kwadratenWortels;

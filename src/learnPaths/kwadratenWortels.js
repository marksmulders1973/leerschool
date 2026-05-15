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
        wrongHints: [null, "Niet optellen — bij kwadraat **vermenigvuldig** je het getal met zichzelf.", "Welke bewerking zit er in een kwadraat? Doe je + of ×?", "Niet de cijfers naast elkaar plakken — een kwadraat is geen samenstelling. Wat is de bewerking?"],
        uitlegPad: {
          stappen: [{ titel: "n² = n × n", tekst: "Kwadraat = getal vermenigvuldigen met zichzelf. 7² = 7 × 7 = 49. NIET 7+7 (=14), NIET 7+2 (=9), NIET '7 en 2 naast elkaar' (77)." }],
          woorden: [{ woord: "kwadraat", uitleg: "Getal in het kwadraat = getal × zichzelf. Latijn 'quadratus' = vierkant." }],
          theorie: "Onthoud 1²-10²: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Examen-cruciaal.",
          voorbeelden: [{ type: "tabel", tekst: "5² = 25. 6² = 36. 7² = 49. 8² = 64. Zie het patroon." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "14 = 7+7. 9 = 7+2. 77 = cijfers naast elkaar. Allemaal fout — 7² = 7×7 = 49." }],
          niveaus: { basis: "49. A.", simpeler: "7² = 7×7 = 49. = A.", nogSimpeler: "49 = A." },
        },
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
        wrongHints: [null, "Niet optellen — een kwadraat is een vermenigvuldiging met zichzelf.", "Niet samenstellen — een kwadraat is geen nieuw getal opbouwen, het is een bewerking.", "Welke bewerking zit er in een kwadraat? Doe je + of ×, en met welk ander getal?"],
        uitlegPad: {
          stappen: [{ titel: "8 × 8 = 64", tekst: "8² = 8 × 8 = 64. Standaard uit kwadratentabel. Onthouden helpt bij latere wortels: √64 = 8." }],
          woorden: [{ woord: "kwadraatpaar", uitleg: "Getal + zijn kwadraat. 8 + 64. Helpt herkennen bij wortel-vragen." }],
          theorie: "Top kwadraten: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Probeer ze uit hoofd te kennen tot 10² = 100.",
          voorbeelden: [{ type: "rij", tekst: "Patroon kwadraten: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Verschillen: 3, 5, 7, 9, 11... (oneven, +2 elke keer)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "16 = 4². 82 = naast elkaar. 48 = 8×6. Alleen 64 = 8×8." }],
          niveaus: { basis: "64. A.", simpeler: "8² = 8×8 = 64. = A.", nogSimpeler: "64 = A." },
        },
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
        wrongHints: [null, "Min × min geeft **plus**. Het kwadraat van een negatief getal is altijd positief.", "Je hebt −4 · 2 gedaan. Maar het 2-tje is geen vermenigvuldiger — het zegt: doe het kwadraat.", "Je hebt 4 + 4 gedaan. Reken: (−4) · (−4) = ?"],
        uitlegPad: {
          stappen: [{ titel: "Min × min = plus", tekst: "(−4)² = (−4) × (−4). Twee mintekens → plus. 4 × 4 = 16. Dus (−4)² = +16, niet −16. Kwadraat NOOIT negatief." }],
          woorden: [{ woord: "tekenregel", uitleg: "+ × + = +. + × − = −. − × − = +. Vandaar kwadraat van negatief = positief." }],
          theorie: "Belangrijk verschil: (−4)² = 16 (met haakjes, hele −4 wordt gekwadrateerd). −4² = −16 (zonder haakjes, alleen 4 gekwadrateerd, daarna min). Haakjes maken verschil!",
          voorbeelden: [{ type: "test", tekst: "(−3)² = 9. (−5)² = 25. (−10)² = 100. Allemaal positief." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Geen −16 (min × min = plus). Niet −8 (= −4×2, niet kwadraat). Niet 8 (= 4×2)." }],
          niveaus: { basis: "16. A.", simpeler: "(−4)² = (−4)×(−4) = 16 (min×min=plus). = A.", nogSimpeler: "16 = A." },
        },
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
        wrongHints: [null, "Niet delen door 2 — de wortel zoekt: welk getal in het kwadraat geeft het getal onder de wortel?", "16 staat ónder de wortel. Zoek: welk getal × zichzelf = 16?", "Dat is het tegenovergestelde van wortel. Welke bewerking ondoet kwadrateren?"],
        uitlegPad: {
          stappen: [{ titel: "Welk getal² = 16?", tekst: "Wortel zoekt: welk getal × zichzelf = 16? Antwoord: 4 (want 4×4=16). Dus √16 = 4. Wortel = omgekeerde van kwadraat." }],
          woorden: [{ woord: "wortel", uitleg: "Symbool √. Omgekeerde bewerking van kwadrateren. Engels: square root." }],
          theorie: "Top wortels onthouden: √1=1, √4=2, √9=3, √16=4, √25=5, √36=6, √49=7, √64=8, √81=9, √100=10.",
          voorbeelden: [{ type: "check", tekst: "√16 = 4. Check: 4² = 4×4 = 16 ✓. Wortel en kwadraat ondoen elkaar." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "8 = 16/2 (delen, fout). 16 zelf = niet wortel. 256 = 16² (andersom)." }],
          niveaus: { basis: "4. A.", simpeler: "√16: welk getal² = 16? → 4. = A.", nogSimpeler: "4 = A." },
        },
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
        wrongHints: [null, "Hoe kom je aan 9? Reken: welk getal kwadraat is 36? 6 · 6 = ?", "Je hebt 36 ÷ 2 gedaan. Maar wortel zoekt het getal dat **in het kwadraat** 36 geeft.", "1296 is 36². Andersom — dat is kwadrateren, niet wortel trekken."],
        uitlegPad: {
          stappen: [{ titel: "6 × 6 = 36", tekst: "Welk getal² = 36? 6, want 6×6=36. √36 = 6. Uit kwadratentabel direct te zien." }],
          woorden: [{ woord: "perfect kwadraat", uitleg: "Getal dat is kwadraat van geheel getal. 36 = 6² → perfect kwadraat." }],
          theorie: "Snel-check: zit getal in kwadratentabel? Dan rond antwoord. 36 staat erin (6²). 49 (7²). 64 (8²). Tussenliggende getallen (50, 60) hebben geen rond antwoord.",
          voorbeelden: [{ type: "andere", tekst: "√25 = 5. √36 = 6. √49 = 7. Telkens uit tabel." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "9 = √81. 18 = 36÷2. 1296 = 36²." }],
          niveaus: { basis: "6. A.", simpeler: "√36 = 6 (uit kwadratentabel). = A.", nogSimpeler: "6 = A." },
        },
      },
      {
        q: "Wat is √64?",
        options: ["8", "32", "16", "4096"],
        answer: 0,
        wrongHints: [null, "32 = 64 ÷ 2. Maar wortel werkt anders: welk getal · zichzelf = 64?", "Je hebt half-half gedaan. Probeer: welk getal kwadraat geeft 64? 8 · 8 = ?", "4096 = 64². Dat is kwadraat, niet wortel."],
        uitlegPad: {
          stappen: [{ titel: "8 × 8 = 64", tekst: "Welk getal² = 64? 8. Dus √64 = 8. Direct uit tabel." }],
          woorden: [{ woord: "wortelpaar", uitleg: "64 ↔ 8. Onthoud kwadraat-wortel-paren tot 10²." }],
          theorie: "Vereenvoudig herkenning: stel je een vierkant voor met oppervlakte 64. Zijde = √64 = 8. Geometrisch.",
          voorbeelden: [{ type: "test", tekst: "8×8 = 64. Check √64 = 8. Klopt." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "32 = 64/2 (delen, fout). 16 = √256 of 64/4. 4096 = 64² (omgekeerd)." }],
          niveaus: { basis: "8. A.", simpeler: "√64 = 8. = A.", nogSimpeler: "8 = A." },
        },
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
        wrongHints: [null, "7 staat niet in de kwadratentabel — er is geen geheel getal dat in het kwadraat 7 geeft.", "50 staat niet in de tabel. Dichtstbijzijnde: 49 (=7²) en 64 (=8²).", "99 staat niet in de tabel. Dichtstbijzijnde: 81 (=9²) en 100 (=10²)."],
        uitlegPad: {
          stappen: [{ titel: "81 in tabel = 9²", tekst: "√81 = 9 (mooi rond). Andere opties: √7, √50, √99 staan NIET in kwadratentabel → komen oneindige decimalen uit. Vandaar deze is enige 'mooie'." }],
          woorden: [{ woord: "perfect kwadraat", uitleg: "Getal dat kwadraat van geheel is. 81=9² perfect. 50 niet." }],
          theorie: "Test: in kwadratentabel? (1,4,9,16,25,36,49,64,81,100). Ja → rond. Nee → oneindig decimaal. Truc om snel te beoordelen.",
          voorbeelden: [{ type: "vergelijk", tekst: "√81 = 9 (rond). √50 ≈ 7,07 (decimaal). √99 ≈ 9,95. √7 ≈ 2,65." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "Alleen √81 in tabel → enige rond. Andere geven irrationale getallen." }],
          niveaus: { basis: "√81. A.", simpeler: "√81 = 9 (uit tabel). Andere niet rond. = A.", nogSimpeler: "√81 = A." },
        },
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
        wrongHints: [null, "Wat gebeurt er als je √ en ² na elkaar toepast op hetzelfde getal? Doen ze iets, of heffen ze elkaar op?", "Het kwadraat heft de wortel op. Welk getal krijg je dan terug?", "Niet optellen — √ en ² zijn omgekeerden, geen optelling."],
        uitlegPad: {
          stappen: [{ titel: "√ en ² ondoen elkaar", tekst: "(√a)² = a. Wortel en kwadraat zijn omgekeerden — ze heffen elkaar op. (√11)² = 11. Klaar." }],
          woorden: [{ woord: "inverse bewerkingen", uitleg: "Bewerkingen die elkaar ongedaan maken. + en −. × en ÷. ² en √." }],
          theorie: "Algemene regel: voor positieve a, (√a)² = a EN √(a²) = a. Beide kanten op. Heel handig bij vergelijkingen oplossen.",
          voorbeelden: [{ type: "voorbeelden", tekst: "(√5)² = 5. (√100)² = 100. (√17)² = 17. Altijd terug naar oorspronkelijke getal." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "121 = 11² (verkeerde richting). √11 = niet kwadraat. 22 = 11+11 (optellen, fout)." }],
          niveaus: { basis: "11. A.", simpeler: "(√11)² = 11 (√ en ² ondoen elkaar). = A.", nogSimpeler: "11 = A." },
        },
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
        wrongHints: [null, "Bij √a × √b mag je optellen onder de wortel? Nee — je vermenigvuldigt: √(3·12) = √36.", "12 = 3 · 4 — dat is alleen het tweede getal × iets. Reken: √(3·12) = √? = ?", "Je hebt 3 · 12 gedaan zonder de wortel. Maar √36 = ? (denk aan de tabel)"],
        uitlegPad: {
          stappen: [
            { titel: "Regel: √a × √b = √(ab)", tekst: "Wortels vermenigvuldigen: getallen onder wortels combineren. √3 × √12 = √(3×12) = √36." },
            { titel: "Uitrekenen", tekst: "√36 = 6 (uit tabel). Dus √3 × √12 = 6." },
          ],
          woorden: [{ woord: "wortels combineren", uitleg: "Bij × of ÷ mag onder ene wortel. Niet bij + of −!" }],
          theorie: "Algemene formule: √a × √b = √(a·b). Werkt voor positieve getallen. Niet voor + of − (dan blijven wortels apart!).",
          voorbeelden: [{ type: "test", tekst: "√2 × √8 = √16 = 4. √5 × √5 = √25 = 5. √3 × √12 = √36 = 6 (deze opgave)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "√15 zou bij + zijn (15=3+12). 12 zonder wortel. 36 zelf is onder wortel — moet nog √ doen → 6." }],
          niveaus: { basis: "6 (√36). A.", simpeler: "√3×√12 = √36 = 6. = A.", nogSimpeler: "6 = A." },
        },
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
        wrongHints: [null, "Je hebt √72 / √8 = 9 gedaan? Reken: √(72/8) = √9 = ?", "√64 zou betekenen 72 + 8 of zoiets. Maar de regel is delen: √(72/8).", "Je bent gestopt bij √9. Werk nog 1 stap verder: √9 = ?"],
        uitlegPad: {
          stappen: [
            { titel: "Regel: √a/√b = √(a/b)", tekst: "Wortels delen: √72/√8 = √(72/8) = √9." },
            { titel: "Uitrekenen", tekst: "72/8 = 9. √9 = 3. Antwoord 3." },
          ],
          woorden: [{ woord: "wortels delen", uitleg: "Werkt zelfde als vermenigvuldigen: getallen onder wortels combineren via deling." }],
          theorie: "Tip: delen vereenvoudigt vaak. Grote wortels worden mooi rond. √72/√8 zou anders veel werk zijn, nu makkelijk.",
          voorbeelden: [{ type: "andere", tekst: "√50/√2 = √25 = 5. √48/√3 = √16 = 4. √80/√5 = √16 = 4." }],
          basiskennis: [{ onderwerp: "Niet stoppen", uitleg: "Werk DOOR tot eindantwoord. √9 ≠ eindantwoord. Doe √ ook → 3." }],
          niveaus: { basis: "3 (√9). A.", simpeler: "√72/√8 = √9 = 3. = A.", nogSimpeler: "3 = A." },
        },
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
        wrongHints: [null, "Je hebt 20 = 4 · 5 (klopt), maar √4 is 2 — niet 4. Vergeet niet de wortel te nemen.", "Probeer 20 = 4 · 5. Dan √20 = √4 · √5 = ?", "10 zou √100 zijn. Maar we hebben √20. Splits: 20 = 4 · 5."],
        uitlegPad: {
          stappen: [
            { titel: "Splits in factoren", tekst: "20 = 4 × 5. Waarom 4? Omdat 4 perfect kwadraat is. √20 = √(4×5) = √4 × √5 = 2 × √5 = 2√5." },
          ],
          woorden: [{ woord: "vereenvoudigen", uitleg: "Wortel uittrekken: zoek perfect-kwadraat-factor, haal uit wortel." }, { woord: "2√5", uitleg: "2 keer wortel 5. Wortel-vorm voor 2×√5." }],
          theorie: "Truc: zoek grootste perfect-kwadraat dat deler is. √20: 4|20 → 2√5. √50: 25|50 → 5√2. √72: 36|72 → 6√2.",
          voorbeelden: [{ type: "andere", tekst: "√18 = √(9×2) = 3√2. √45 = √(9×5) = 3√5. √98 = √(49×2) = 7√2." }],
          basiskennis: [{ onderwerp: "Wortel-toepassen", uitleg: "Vergeet niet √ op de factor: √4 = 2 (niet 4 zelf naar buiten halen)." }],
          niveaus: { basis: "2√5. A.", simpeler: "20=4×5. √20 = √4·√5 = 2√5. = A.", nogSimpeler: "2√5 = A." },
        },
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
        wrongHints: [null, "Je hebt 14 − 2 = 12 gedaan. Maar 2x betekent 2 keer x — dus delen: 14 / 2.", "Je hebt 14 + 14 of 2 · 14 gedaan. We zoeken het omgekeerde: x · 2 = 14, dus x = 14 / 2.", "14 + 2 = 16. Maar de vergelijking heeft geen plus — er staat 2x = 14, dus x = ?"],
        uitlegPad: {
          stappen: [{ titel: "Beide kanten ÷ 2", tekst: "2x = 14. Om x alleen te krijgen: deel beide kanten door 2. x = 14/2 = 7." }],
          woorden: [{ woord: "vergelijking oplossen", uitleg: "Stappen om x alleen te krijgen aan ene kant. Beide kanten dezelfde bewerking." }],
          theorie: "Lineaire vergelijking: ax = b → x = b/a. Hier a=2, b=14 → x=7. Check: 2×7 = 14 ✓.",
          voorbeelden: [{ type: "andere", tekst: "3x = 12 → x = 4. 5x = 20 → x = 4. 4x = 36 → x = 9." }],
          basiskennis: [{ onderwerp: "Niet andere bewerkingen", uitleg: "Niet aftrekken (12), niet vermenigvuldigen (28), niet optellen (16). Voor 'ax=b': deel door a." }],
          niveaus: { basis: "x=7. A.", simpeler: "2x=14 → x=14/2=7. = A.", nogSimpeler: "7 = A." },
        },
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
        wrongHints: [null, "5 is één oplossing, maar er is ook een **negatieve**: (−5)² = 25 ook. Dus er zijn twee.", "Je hebt 25 / 2 gedaan. Maar bij x² = 25 zoek je √25, niet 25/2.", "Je hebt het kwadraat over genomen. Maar je moet juist √ doen. √25 = 5, en min 5 ook."],
        uitlegPad: {
          stappen: [{ titel: "x² = c → x = ±√c", tekst: "x² = 25 → x = ±√25 = ±5. Twee oplossingen: x = 5 OF x = −5. Beide² geven 25." }],
          woorden: [{ woord: "±", uitleg: "Plus of min. Twee oplossingen tegelijk aanduiden." }],
          theorie: "Vergeet NOOIT de negatieve oplossing bij x²=c (met c>0). Beide werken want kwadraat van min ook positief.",
          voorbeelden: [{ type: "check", tekst: "x=5: 5² = 25 ✓. x=−5: (−5)² = 25 ✓. Beide kloppen." }],
          basiskennis: [{ onderwerp: "Examenval", uitleg: "Klassieke val: vergeet negatieve. Schrijf altijd ±√c bij positieve c." }],
          niveaus: { basis: "±5. A.", simpeler: "x²=25 → x=±√25=±5. = A.", nogSimpeler: "±5 = A." },
        },
      },
      {
        q: "Los op: x² = 64.",
        options: ["x = ±8", "x = ±32", "x = 64", "x = ±64"],
        answer: 0,
        wrongHints: [null, "32 = 64 / 2. Maar je zoekt √64 — welk getal kwadraat is 64?", "64 = 8², maar je zoekt x, niet x². Pas √ toe.", "Je hebt 64 zelf overgenomen. √64 = 8 (en −8). Pas √ toe."],
        uitlegPad: {
          stappen: [{ titel: "√64 = 8", tekst: "x² = 64 → x = ±√64 = ±8. Twee oplossingen: 8 of −8." }],
          woorden: [{ woord: "kwadratentabel-gebruik", uitleg: "Snel: 8²=64 uit tabel kennen. Dan direct ±8." }],
          theorie: "Voor c>0: altijd 2 oplossingen. Voor c=0: 1 (x=0). Voor c<0: 0 (onmogelijk).",
          voorbeelden: [{ type: "andere", tekst: "x²=36 → ±6. x²=49 → ±7. x²=81 → ±9. x²=100 → ±10." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "32 = 64/2 (delen). 64 = oorspronkelijk getal, niet x." }],
          niveaus: { basis: "±8. A.", simpeler: "x²=64 → x=±√64=±8. = A.", nogSimpeler: "±8 = A." },
        },
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
        wrongHints: [null, "1 zou kloppen als c = 0. Hier is c negatief — dat geeft 0 oplossingen.", "2 oplossingen krijg je alleen bij positieve c. Bij negatief is er **geen** x die werkt.", "Een vergelijking heeft hooguit een paar oplossingen, niet oneindig veel."],
        uitlegPad: {
          stappen: [{ titel: "Kwadraat nooit negatief", tekst: "x² = −9 → onmogelijk. Want x² is ALTIJD ≥ 0 (kwadraat van elk reëel getal is positief of 0). Geen reëele x voldoet. 0 oplossingen." }],
          woorden: [{ woord: "reëel getal", uitleg: "Standaard getallen (positief, negatief, breuken, decimalen). Excludeert 'imaginaire' getallen." }],
          theorie: "Volledige regel x²=c: c>0 → 2 opl (±√c). c=0 → 1 opl (x=0). c<0 → 0 opl. Drie gevallen.",
          voorbeelden: [{ type: "vergelijk", tekst: "x²=9 → ±3 (2 opl). x²=0 → 0 (1 opl). x²=−9 → onmogelijk (0 opl)." }],
          basiskennis: [{ onderwerp: "Hoger niveau", uitleg: "Vanaf havo/vwo: imaginaire getallen (i²=−1) → dan wel oplossing. Voor VMBO: 0 oplossingen." }],
          niveaus: { basis: "0. A.", simpeler: "x²=−9 onmogelijk (kwadraat nooit negatief) → 0 oplossingen. = A.", nogSimpeler: "0 = A." },
        },
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
        wrongHints: [null, "5 is wel natuurlijk (de telgetallen 1, 2, 3, ... bevatten 5).", "0,5 is een decimaal — geen geheel getal.", "½ is een breuk — geen geheel getal."],
        uitlegPad: {
          stappen: [{ titel: "−7 is geheel, geen natuurlijk", tekst: "Natuurlijk: 0, 1, 2, 3, ... (geen negatieve). Geheel: ..., −2, −1, 0, 1, 2, ... (wel negatieve). −7 = wel geheel (negatief geheel getal), maar NIET natuurlijk." }],
          woorden: [{ woord: "ℕ natuurlijk", uitleg: "0, 1, 2, 3, ... Telgetallen vanaf 0." }, { woord: "ℤ geheel", uitleg: "Alle getallen zonder breuken/decimalen. Inclusief negatieve." }],
          theorie: "Hiërarchie: natuurlijke ⊂ gehele ⊂ rationale ⊂ reële. Elk natuurlijk getal ook geheel. Maar niet andersom.",
          voorbeelden: [{ type: "voorbeelden", tekst: "5: natuurlijk + geheel + rationaal. −7: geheel + rationaal (niet natuurlijk). ½: rationaal (niet geheel). √2: reëel (niet rationaal)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "5 wel natuurlijk. 0,5 + ½ = breuken (niet geheel). Alleen −7 voldoet aan 'geheel maar niet natuurlijk'." }],
          niveaus: { basis: "−7. A.", simpeler: "Geheel + niet natuurlijk = negatief geheel getal. −7. = A.", nogSimpeler: "−7 = A." },
        },
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
        wrongHints: [null, "√2 = 1,414... is een oneindige niet-herhalende decimaal — niet rationaal.", "π = 3,14159... is ook oneindig en niet-herhalend — niet rationaal.", "⅖ is gewoon een breuk (2/5 = 0,4). Dat is per definitie rationaal."],
        uitlegPad: {
          stappen: [{ titel: "⅖ = breuk = rationaal", tekst: "Rationaal = te schrijven als breuk a/b. ⅖ = 2/5 al een breuk → rationaal. √2 + π = oneindige niet-herhalende decimalen → irrationaal." }],
          woorden: [{ woord: "ℚ rationaal", uitleg: "Te schrijven als breuk teller/noemer." }, { woord: "irrationaal", uitleg: "NIET als breuk te schrijven. Oneindig + niet-herhalend." }],
          theorie: "Test: stopt of herhaalt de decimaal? Ja → rationaal. Oneindig + niet-herhalend → irrationaal. Klassiek irrationaal: √(niet-perfect-kwadraat), π, e.",
          voorbeelden: [{ type: "voorbeelden", tekst: "⅖ = 0,4 (stopt, rationaal). ⅓ = 0,333... (herhaalt, rationaal). √2 = 1,414... (geen patroon, irrationaal)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "√2 + π = irrationaal (klassieke voorbeelden). ⅖ enige rationale optie." }],
          niveaus: { basis: "⅖. A.", simpeler: "⅖ is breuk → rationaal. √2 + π = irrationaal. = A.", nogSimpeler: "⅖ = A." },
        },
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
        wrongHints: [null, "0,5 = 1/2 — dat is een breuk, dus rationaal.", "−3 is een geheel getal, dus ook rationaal.", "1/4 is letterlijk al een breuk — rationaal per definitie."],
        uitlegPad: {
          stappen: [{ titel: "√7 = oneindig", tekst: "√7 ≈ 2,6457513... oneindige decimaal zonder herhaling = irrationaal. Geen perfect kwadraat is 7. Andere opties (0,5 = ½, −3, 1/4) zijn allemaal rationaal (te schrijven als breuk)." }],
          woorden: [{ woord: "√(niet-perfect kwadraat)", uitleg: "Wortel uit getal niet in kwadratentabel → irrationaal. √2, √3, √5, √7, √8, ... allemaal." }],
          theorie: "Truc: kijk naar wortelgetal. Is het perfect kwadraat (4, 9, 16, 25...)? → wortel rationaal. Anders → irrationaal.",
          voorbeelden: [{ type: "test", tekst: "√4 = 2 (rationaal). √7 ≈ 2,65 (irrationaal). √16 = 4 (rationaal). √20 ≈ 4,47 (irrationaal)." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "0,5 = ½ = rationaal. −3 = geheel = rationaal. 1/4 = al breuk = rationaal." }],
          niveaus: { basis: "√7. A.", simpeler: "√7 = oneindige decimaal → irrationaal. Andere = breuken/gehelen → rationaal. = A.", nogSimpeler: "√7 = A." },
        },
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
        wrongHints: [null, "40,5 = 81 / 2. Maar voor zijden van een vierkant: zijde = √oppervlakte = √81.", "81 zou de oppervlakte zelf zijn. De zijde is √81 = ?", "8² = 64 — niet 81. Probeer 9² = ?"],
        uitlegPad: {
          stappen: [{ titel: "zijde = √opp", tekst: "Vierkant: opp = zijde². Andersom: zijde = √opp. Hier: zijde = √81 = 9 m." }],
          woorden: [{ woord: "vierkant", uitleg: "Alle 4 zijden gelijk. Opp = zijde × zijde = zijde²." }],
          theorie: "Vierkant-formules: opp = z². z = √opp. Voor andere vormen anders (rechthoek: opp = l×b, driehoek: ½×b×h).",
          voorbeelden: [{ type: "andere", tekst: "Opp 36 m² → z = 6 m. Opp 100 m² → z = 10 m. Opp 49 m² → z = 7 m." }],
          basiskennis: [{ onderwerp: "Niet anders", uitleg: "40,5 = 81/2 (delen, fout). 81 = de opp zelf (niet zijde). 8² = 64 (niet 81)." }],
          niveaus: { basis: "9 m. A.", simpeler: "Opp 81 → zijde = √81 = 9 m. = A.", nogSimpeler: "9 = A." },
        },
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
        wrongHints: [null, "50 = 100 / 2. Maar bij x² = c zoek je √c, niet c/2.", "10 is één oplossing, maar er is ook een **negatieve**: (−10)² = 100.", "Je hebt 100 zelf overgenomen. Pas √ toe: √100 = 10."],
        uitlegPad: {
          stappen: [{ titel: "√100 = 10", tekst: "x² = 100 → x = ±√100 = ±10. Twee oplossingen: 10 of −10. Beide² geven 100." }],
          woorden: [{ woord: "perfect kwadraat", uitleg: "100 = 10² (perfect kwadraat). Wortel direct uit tabel." }],
          theorie: "Eindronde-vraag: combineer alles. Herken c=100 als perfect kwadraat. √c = 10. ± want 2 oplossingen.",
          voorbeelden: [{ type: "check", tekst: "10² = 100 ✓. (−10)² = 100 ✓. Beide kloppen." }],
          basiskennis: [{ onderwerp: "Niet vergeten", uitleg: "±-teken: VERPLICHT bij c>0. Anders halve antwoord (klassieke examen-val)." }],
          niveaus: { basis: "±10. A.", simpeler: "x²=100 → x=±√100=±10. = A.", nogSimpeler: "±10 = A." },
        },
      },
      { q: "Bereken: 6² = ?", options: ["36","12","18","30"], answer: 0, wrongHints: [null, "Niet — niet 2×6.", "Niet — niet 3×6.", "Niet."] },
      { q: "Bereken: √81 = ?", options: ["9","8","7","18"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Bereken: √144 = ?", options: ["12","11","14","72"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Helft."] },
      { q: "Wat is **√2** ongeveer?", options: ["1,41","1,5","2","1"], answer: 0, wrongHints: [null, "Te hoog.", "Wortel ≠ getal.", "Te laag."] },
      { q: "Is **π** rationaal of irrationaal?", options: ["Irrationaal","Rationaal","Geheel","Natuurlijk"], answer: 0, wrongHints: [null, "Niet — π is irrationaal.", "Niet.", "Niet."] },
      { q: "Bereken **5² + 12²**", options: ["169","144","25","60"], answer: 0, wrongHints: [null,"Alleen 12².","Alleen 5².","Niet."] },
      { q: "Hoeveel is **(−4)²**?", options: ["16","−16","−8","8"], answer: 0, wrongHints: [null,"Minus × minus = plus.","Verkeerd.","Verkeerd."] },
      { q: "Wat is **√0**?", options: ["0","1","Bestaat niet","∞"], answer: 0, wrongHints: [null,"√1 = 1.","Wel bestaat.","Niet relevant."] },
      { q: "Wat is **√(25 × 4)**?", options: ["10","20","100","5"], answer: 0, wrongHints: [null,"√(25×4) = √25 × √4 = 5×2 = 10.","Niet — eerst worteltrekken.","Niet."] },
      { q: "**Kwadraat** van een breuk **(½)²** = ?", options: ["¼","½","¾","1"], answer: 0, wrongHints: [null,"Niet — kwadraat verkleint.","Niet primair.","Veel te groot."] },
      { q: "Welke getallen zijn **perfecte kwadraten**?", options: ["1, 4, 9, 16, 25...","Alle even getallen","Alle oneven","Alle priemgetallen"], answer: 0, wrongHints: [null,"Niet alle even (6 is geen kwadraat).","Niet alle oneven (3 is geen kwadraat).","Niet."] },
      { q: "**a² × b²** = ?", options: ["(a × b)²","a × b","a² + b²","Te beoordelen"], answer: 0, wrongHints: [null,"Te simpel.","Tegen-bewerking.","Geen relevant."] },
      { q: "**Open vraag**: bereken 9² (typ alleen getal).", kind: "open", acceptedAnswers: ["81"], numericTolerance: 0, explanation: "9 × 9 = 81." },
      { q: "**Open vraag**: bereken √169 (typ alleen getal).", kind: "open", acceptedAnswers: ["13"], numericTolerance: 0, explanation: "13² = 169 → √169 = 13." },
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
  // SLO-niveau (G4b): 2F basis. Kwadrateren + worteltrekken = vmbo-onderbouw.
  referentieNiveau: "2F",
  sloThema: "Getallen — machten en wortels",
  topics: ["WI.algebra.kwadraten"],
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "negatieve-getallen", title: "Negatieve getallen", niveau: "vmbo-2F" },
  ],
  intro: "H5 uit Wiskunde Flex deel 2: vanaf het kwadraat (3² = 9) tot wortels (√), rekenen met wortels, x² = c oplossen, en de soorten getallen (rationaal, irrationaal). Op basisniveau opgebouwd.",
  triggerKeywords: ["kwadraat", "kwadraten", "wortel", "wortels", "√", "x²", "irrationaal", "rationaal", "soorten getallen"],
  chapters,
  steps,
};

export default kwadratenWortels;

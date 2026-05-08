// Leerpad: Breuken — vanaf de basis
// Conceptueel — werkt voor élk wiskundeboek vanaf klas 1.
// 15 stappen, 5 hoofdstukken.

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = [
  "🍕", "↔️", "🔢",                  // A. Wat is een breuk
  "🟰", "✖️", "✂️",                  // B. Gelijkwaardige breuken
  "➕", "➖", "🔄",                  // C. Optellen + aftrekken
  "✖️", "➗", "🧮",                  // D. Vermenigvuldigen + delen
  "🥗", "⚖️", "🏆",                  // E. Toepassingen
];

const chapters = [
  { letter: "A", title: "Wat is een breuk?", emoji: "🍕", from: 0, to: 2 },
  { letter: "B", title: "Gelijkwaardige breuken", emoji: "🟰", from: 3, to: 5 },
  { letter: "C", title: "Optellen en aftrekken", emoji: "➕", from: 6, to: 8 },
  { letter: "D", title: "Vermenigvuldigen en delen", emoji: "✖️", from: 9, to: 11 },
  { letter: "E", title: "Toepassingen + eindopdracht", emoji: "🏆", from: 12, to: 14 },
];

const steps = [
  // ─── A. Wat is een breuk? ────────────────────────────
  {
    title: "Wat is een breuk?",
    explanation: "Een **breuk** is een manier om een **deel van een geheel** te schrijven.\n\nStel je hebt een pizza. Je snijdt 'm in **4 gelijke stukken**. Eet je er **1**? Dan eet je **¼** (een vierde, of een kwart) van de pizza.\n\nWe schrijven breuken als getallen boven elkaar:\n\n**¼**  (lees: 'een vierde' of 'een kwart')\n\nAndere voorbeelden:\n• **½** = de helft\n• **⅓** = een derde\n• **¾** = drie vierde\n• **⅖** = twee vijfde\n\nIn elke breuk staat een **lijn**:\n• Bovenaan: hoeveel stukjes je hebt\n• Onderaan: in hoeveel gelijke stukjes het geheel verdeeld is\n\nIn de volgende stap: hoe heten die twee getallen?",
    svg: `<svg viewBox="0 0 300 200">
<circle cx="80" cy="100" r="55" fill="rgba(255,213,79,0.15)" stroke="${COLORS.point}" stroke-width="2"/>
<line x1="80" y1="45" x2="80" y2="155" stroke="${COLORS.point}" stroke-width="2"/>
<line x1="25" y1="100" x2="135" y2="100" stroke="${COLORS.point}" stroke-width="2"/>
<path d="M 80 100 L 80 45 A 55 55 0 0 1 135 100 Z" fill="${COLORS.curve}" opacity="0.5"/>
<text x="80" y="180" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">¼ pizza</text>
<text x="200" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="32" font-family="Arial" font-weight="bold">¼</text>
<text x="200" y="100" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">een vierde</text>
<text x="200" y="120" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">(een kwart)</text>
<text x="200" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">= 1 van de 4 stukjes</text>
</svg>`,
    checks: [
      {
        q: "Een taart is in 8 gelijke stukken gesneden. Je eet 3 stukken. Welk deel heb je gegeten?",
        options: ["⅜", "⅓", "⁸⁄₃", "8/3"],
        answer: 0,
        wrongHints: [
          null,
          "⅓ zou 1 van 3 stukken zijn. Hier zijn er 8 stukken in totaal, en je hebt 3 gegeten.",
          "Je hebt het omgedraaid. Bovenaan: gegeten stukken (3). Onderaan: totaal (8). Dus 3/8.",
          "Andersom: bovenaan staat hoeveel je hebt (3), onderaan het totaal (8). Dus ⅜.",
        ],
      },
    ],
  },
  {
    title: "Teller en noemer",
    explanation: "De twee getallen in een breuk hebben namen:\n\n• **Teller** = het getal **bovenaan** (telt hoeveel stukjes je hebt)\n• **Noemer** = het getal **onderaan** (noemt in hoeveel stukjes het geheel verdeeld is)\n\nVoorbeelden:\n• **¾** → teller = 3, noemer = 4\n• **²⁄₇** → teller = 2, noemer = 7\n• **⁵⁄₈** → teller = 5, noemer = 8\n\n**Onthoudtruc**:\n- **T**eller = **T**op (boven)\n- **N**oemer = **N**a teller, dus eronder\n\n**Een breuk is altijd een deling**: ¾ betekent eigenlijk 3 ÷ 4 = 0,75. Daar komen we straks op terug.\n\nEen breuk waarbij teller = noemer (zoals ⁴⁄₄) is gelijk aan **1** (alle stukjes = het hele geheel).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="75" text-anchor="middle" fill="${COLORS.text}" font-size="56" font-family="Arial" font-weight="bold">3</text>
<line x1="120" y1="85" x2="180" y2="85" stroke="${COLORS.point}" stroke-width="3"/>
<text x="150" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="56" font-family="Arial" font-weight="bold">4</text>
<text x="220" y="60" fill="${COLORS.curve}" font-size="13" font-family="Arial" font-weight="bold">teller</text>
<text x="220" y="75" fill="${COLORS.muted}" font-size="10" font-family="Arial">(boven)</text>
<text x="220" y="130" fill="${COLORS.curveAlt}" font-size="13" font-family="Arial" font-weight="bold">noemer</text>
<text x="220" y="145" fill="${COLORS.muted}" font-size="10" font-family="Arial">(onder)</text>
<text x="80" y="110" fill="${COLORS.text}" font-size="13" font-family="Arial">3 stukken</text>
<text x="80" y="175" fill="${COLORS.text}" font-size="13" font-family="Arial">van 4 totaal</text>
</svg>`,
    checks: [
      {
        q: "In de breuk ⁵⁄₉, wat is de noemer?",
        options: ["9", "5", "Beide", "Geen"],
        answer: 0,
        wrongHints: [
          null,
          "5 is de **teller** (bovenaan). De noemer is het getal eronder.",
          "Een breuk heeft één teller en één noemer — niet beide samen één van de twee.",
          "Elke breuk heeft een teller én een noemer. Zoek het onderste getal.",
        ],
      },
    ],
  },
  {
    title: "Breuk en kommagetal — twee manieren voor hetzelfde",
    explanation: "Een **breuk** kun je ook schrijven als een **kommagetal** (decimaal). Want een breuk is gewoon een deling.\n\n**Voorbeelden**:\n• **½** = 1 ÷ 2 = **0,5**\n• **¼** = 1 ÷ 4 = **0,25**\n• **¾** = 3 ÷ 4 = **0,75**\n• **⅕** = 1 ÷ 5 = **0,2**\n• **⅖** = 2 ÷ 5 = **0,4**\n• **⅓** = 1 ÷ 3 = **0,333...** (oneindig herhalend)\n\n**Met een rekenmachine**: typ teller, dan **÷**, dan noemer. Krijg je het kommagetal.\n\nIn opgaves zie je vaak afwisselend breuken én kommagetallen — ze betekenen hetzelfde, kies wat handiger is.\n\n**Tip**: ronde percentages = mooie breuken:\n• 50% = ½\n• 25% = ¼\n• 75% = ¾\n• 20% = ⅕\n• 10% = ⅒",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="170" fill="rgba(0,200,83,0.06)" stroke="${COLORS.curve}" stroke-width="1.5" rx="6"/>
<text x="100" y="42" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">breuk</text>
<text x="200" y="42" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">kommagetal</text>
<line x1="40" y1="50" x2="260" y2="50" stroke="${COLORS.curve}" stroke-width="1"/>
<line x1="150" y1="20" x2="150" y2="190" stroke="${COLORS.curve}" stroke-width="1"/>
<text x="100" y="70" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">½</text>
<text x="200" y="70" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">0,5</text>
<text x="100" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">¼</text>
<text x="200" y="92" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">0,25</text>
<text x="100" y="114" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">¾</text>
<text x="200" y="114" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">0,75</text>
<text x="100" y="136" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">⅕</text>
<text x="200" y="136" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">0,2</text>
<text x="100" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">⅒</text>
<text x="200" y="158" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">0,1</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">teller ÷ noemer = kommagetal</text>
</svg>`,
    checks: [
      {
        q: "Welk kommagetal hoort bij ¾?",
        options: ["0,75", "0,34", "1,33", "0,43"],
        answer: 0,
        wrongHints: [
          null,
          "Niet de cijfers naast elkaar — een breuk is een deling. Welk getal staat boven, welk onder?",
          "Je hebt de breuk omgedraaid: welke is de teller (boven), welk de noemer (onder)?",
          "Welk getal deel je door welk? Boven door onder, niet andersom.",
        ],
      },
    ],
  },

  // ─── B. Gelijkwaardige breuken ────────────────────────────
  {
    title: "Gelijkwaardige breuken",
    explanation: "Verschillende breuken kunnen **dezelfde waarde** hebben! Bijvoorbeeld:\n\n**½ = ²⁄₄ = ³⁄₆ = ⁴⁄₈ = ⁵⁄₁₀ = ...**\n\nAllemaal **de helft**! Maar geschreven met verschillende getallen.\n\n**Hoe ontstaan ze?** Door **teller en noemer met hetzelfde getal te vermenigvuldigen**:\n• ½ × 2/2 = ²⁄₄ (boven en onder × 2)\n• ½ × 3/3 = ³⁄₆ (boven en onder × 3)\n\nWaarom mag dit? Omdat 2/2 = 1 (en × 1 verandert niets).\n\n**Visueel**: snijd een pizza in 2 stukken en eet 1 → ½. Snijd 'm anders in 4 stukken en eet 2 → ²⁄₄. Even veel pizza!\n\n**Bekende gelijkwaardige groepen**:\n• ⅓ = ²⁄₆ = ³⁄₉ = ⁴⁄₁₂\n• ¼ = ²⁄₈ = ³⁄₁₂\n• ⅗ = ⁶⁄₁₀ = ⁹⁄₁₅",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="60" width="60" height="60" fill="rgba(0,200,83,0.30)" stroke="${COLORS.curve}" stroke-width="2"/>
<rect x="100" y="60" width="60" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="100" y="140" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">½</text>
<text x="180" y="95" text-anchor="middle" fill="${COLORS.point}" font-size="20" font-family="Arial" font-weight="bold">=</text>
<rect x="200" y="60" width="20" height="60" fill="rgba(0,200,83,0.30)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="220" y="60" width="20" height="60" fill="rgba(0,200,83,0.30)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="240" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="260" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="240" y="140" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">²⁄₄</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">precies dezelfde hoeveelheid</text>
</svg>`,
    checks: [
      {
        q: "Welke breuk is gelijk aan ⅓?",
        options: ["⁴⁄₁₂", "⅔", "²⁄₆", "Beide ²⁄₆ en ⁴⁄₁₂"],
        answer: 3,
        wrongHints: [
          "Klopt — maar ²⁄₆ is óók gelijk aan ⅓. Beide opties kloppen.",
          "⅔ is twee derde, niet een derde.",
          "Klopt — maar ⁴⁄₁₂ is óók gelijk aan ⅓. Beide opties kloppen.",
          null,
        ],
      },
    ],
  },
  {
    title: "Vereenvoudigen — kleinere getallen schrijven",
    explanation: "Vaak willen we een breuk **zo simpel mogelijk** schrijven — met de kleinste getallen. Dat heet **vereenvoudigen** (of 'breuk verkleinen').\n\n**Hoe?** Deel teller en noemer **door hetzelfde getal**.\n\n**Voorbeeld**: ⁶⁄₈\n• Beide deelbaar door 2: ⁶⁄₈ = ⁶ : ²⁄₈ : ² = ³⁄₄\n• Klaar — kleinere getallen, zelfde waarde.\n\n**Voorbeeld 2**: ¹⁰⁄₁₅\n• Beide deelbaar door 5: ¹⁰⁄₁₅ = ²⁄₃\n\n**Voorbeeld 3**: ¹²⁄₁₈\n• Beide deelbaar door 2: → ⁶⁄₉\n• Beide deelbaar door 3: → ²⁄₃\n• Klaar (²⁄₃ kun je niet verder vereenvoudigen)\n\n**Trucje**: zoek een getal dat in **beide** past. Begin met kleine getallen: 2, 3, 5, 7. Als ze allebei deelbaar zijn — deel beide.\n\nEen breuk is volledig vereenvoudigd als teller en noemer **geen gemeenschappelijke deler** meer hebben.",
    svg: `<svg viewBox="0 0 300 200">
<text x="80" y="75" text-anchor="middle" fill="${COLORS.text}" font-size="40" font-family="Arial" font-weight="bold">⁶⁄₈</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="18" font-family="Arial" font-weight="bold">=</text>
<text x="220" y="75" text-anchor="middle" fill="${COLORS.point}" font-size="40" font-family="Arial" font-weight="bold">¾</text>
<text x="150" y="130" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">deel boven en onder door 2</text>
<text x="80" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">6 : 2 = 3</text>
<text x="220" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">8 : 2 = 4</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-style="italic">¾ kan niet verder vereenvoudigd worden</text>
</svg>`,
    checks: [
      {
        q: "Vereenvoudig ⁹⁄₁₂.",
        options: ["¾", "⅓", "⁹⁄₁₂", "²⁄₃"],
        answer: 0,
        wrongHints: [
          null,
          "⅓ is iets anders — dat is 4/12 niet 9/12. Reken: deel 9 en 12 door 3.",
          "⁹⁄₁₂ is wel een breuk maar niet vereenvoudigd. Beide deelbaar door 3.",
          "²⁄₃ = ⁸⁄₁₂, niet ⁹⁄₁₂. Probeer: 9 ÷ 3 = ?, 12 ÷ 3 = ?",
        ],
      },
    ],
  },
  {
    title: "Gelijknamig maken (gemeenschappelijke noemer)",
    explanation: "Soms moeten we breuken **gelijknamig** maken — alle dezelfde **noemer** geven. Dat is nodig voordat je ze kunt **optellen** of **aftrekken** (volgende stappen).\n\n**Hoe?** Vind een **gemeenschappelijke noemer** — een getal waar **alle** noemers in passen.\n\n**Voorbeeld**: ½ en ⅓\n• Wat is een getal waar zowel 2 als 3 in past? **6** (want 6 = 2·3)\n• ½ = ³⁄₆ (×3 boven en onder)\n• ⅓ = ²⁄₆ (×2 boven en onder)\n• Nu hebben beide noemer 6 — gelijknamig.\n\n**Voorbeeld 2**: ¼ en ⅙\n• Gemeenschappelijke noemer? 12 (want 12 = 4·3 = 6·2)\n• ¼ = ³⁄₁₂\n• ⅙ = ²⁄₁₂\n\n**Trucje**: vermenigvuldig de noemers. Voor ½ en ⅓: 2 × 3 = 6. Werkt altijd, maar soms kan het kleiner (zie volgende stap).",
    svg: `<svg viewBox="0 0 300 200">
<text x="60" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="32" font-family="Arial" font-weight="bold">½</text>
<text x="120" y="60" text-anchor="middle" fill="${COLORS.muted}" font-size="20" font-family="Arial">en</text>
<text x="180" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="32" font-family="Arial" font-weight="bold">⅓</text>
<text x="240" y="60" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial">→ noemer 6</text>
<line x1="40" y1="80" x2="260" y2="80" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="60" y="120" text-anchor="middle" fill="${COLORS.point}" font-size="32" font-family="Arial" font-weight="bold">³⁄₆</text>
<text x="120" y="120" text-anchor="middle" fill="${COLORS.muted}" font-size="20" font-family="Arial">en</text>
<text x="180" y="120" text-anchor="middle" fill="${COLORS.point}" font-size="32" font-family="Arial" font-weight="bold">²⁄₆</text>
<text x="60" y="150" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">×3</text>
<text x="180" y="150" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">×2</text>
<text x="150" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">nu zelfde noemer — gelijknamig</text>
</svg>`,
    checks: [
      {
        q: "Wat is een gemeenschappelijke noemer voor ⅓ en ¼?",
        options: ["12", "7", "6", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Niet optellen — je zoekt een getal waar BEIDE noemers in passen. Welke bewerking past daarbij?",
          "Past de 4 in dat getal? Probeer een groter getal waar zowel 3 als 4 een geheel-aantal-keer in passen.",
          "Dat is alleen de eerste noemer. Je zoekt een getal dat door BEIDE deelbaar is.",
        ],
      },
    ],
  },

  // ─── C. Optellen + aftrekken ────────────────────────────
  {
    title: "Optellen met gelijke noemers",
    explanation: "Als twee breuken **dezelfde noemer** hebben, kun je ze direct optellen:\n\n**Tellers optellen, noemer blijft hetzelfde.**\n\n**Voorbeelden**:\n• ¹⁄₅ + ²⁄₅ = ³⁄₅\n• ³⁄₈ + ²⁄₈ = ⁵⁄₈\n• ²⁄₇ + ⁴⁄₇ = ⁶⁄₇\n\n**Visueel**: ¹⁄₅ pizza + ²⁄₅ pizza = ³⁄₅ pizza. Logisch.\n\n**Pas op**: tel **alleen de tellers** op. De noemer blijft. Doe **niet** ¹⁄₅ + ²⁄₅ = ³⁄₁₀ — dat is fout!\n\n**Aftrekken** werkt hetzelfde:\n• ⁵⁄₈ − ²⁄₈ = ³⁄₈\n• ⁷⁄₁₀ − ⁴⁄₁₀ = ³⁄₁₀\n\nNoemer blijft, tellers worden afgetrokken.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="60" width="20" height="60" fill="rgba(0,200,83,0.40)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="40" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="60" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="80" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="100" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="70" y="140" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">⅕</text>
<text x="135" y="97" text-anchor="middle" fill="${COLORS.point}" font-size="20" font-family="Arial" font-weight="bold">+</text>
<rect x="150" y="60" width="20" height="60" fill="rgba(255,213,79,0.40)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="170" y="60" width="20" height="60" fill="rgba(255,213,79,0.40)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="190" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="210" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="230" y="60" width="20" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="200" y="140" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">⅖</text>
<text x="135" y="180" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">= ³⁄₅</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: ²⁄₇ + ³⁄₇.",
        options: ["⁵⁄₇", "⁵⁄₁₄", "⅕", "²¹⁄₇"],
        answer: 0,
        wrongHints: [
          null,
          "Bij optellen met zelfde noemer: wat doe je met de tellers, en wat met de noemers?",
          "Niet beide optellen — alleen tellers veranderen, de noemer blijft hetzelfde.",
          "Niet vermenigvuldigen. Bij optellen tel je de tellers samen, de noemer blijft.",
        ],
      },
    ],
  },
  {
    title: "Optellen met ongelijke noemers",
    explanation: "Bij **verschillende noemers** kun je niet direct optellen. Eerst **gelijknamig maken** (vorige stap), dán optellen.\n\n**Voorbeeld**: ½ + ⅓\n\n**Stap 1**: gemeenschappelijke noemer = 6\n• ½ = ³⁄₆\n• ⅓ = ²⁄₆\n\n**Stap 2**: nu gelijknamig — tellers optellen:\n• ³⁄₆ + ²⁄₆ = ⁵⁄₆\n\nResultaat: **⅚**.\n\n**Voorbeeld 2**: ¼ + ⅙\n• Gemeenschappelijke noemer = 12\n• ¼ = ³⁄₁₂\n• ⅙ = ²⁄₁₂\n• ³⁄₁₂ + ²⁄₁₂ = ⁵⁄₁₂\n\n**Stappenplan**:\n1. Vind gemeenschappelijke noemer\n2. Maak elke breuk gelijknamig\n3. Tel tellers op\n4. Vereenvoudig indien mogelijk\n\nAftrekken werkt hetzelfde: gelijknamig maken, dan tellers aftrekken.",
    svg: `<svg viewBox="0 0 300 200">
<text x="50" y="40" fill="${COLORS.text}" font-size="14" font-family="Arial">½ + ⅓ = ?</text>
<text x="50" y="70" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap 1: gelijknamig (×6)</text>
<text x="50" y="92" fill="${COLORS.text}" font-size="14" font-family="Arial">³⁄₆ + ²⁄₆</text>
<text x="50" y="118" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">stap 2: tellers optellen</text>
<rect x="50" y="130" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="90" y="154" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">⅚</text>
<text x="160" y="150" fill="${COLORS.muted}" font-size="11" font-family="Arial">noemer blijft 6</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: ¼ + ½.",
        options: ["¾", "⅔", "²⁄₆", "⅗"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt iets anders gedaan. Maak gelijknamig (noemer 4): ¼ + ²⁄₄ = ¾.",
          "Je hebt tellers en noemers apart opgeteld (1+1=2, 4+2=6). Maar de regel werkt anders — gelijknamig maken eerst.",
          "Klopt niet. ¼ + ½ = ¼ + ²⁄₄ = ¾.",
        ],
      },
    ],
  },
  {
    title: "Aftrekken werkt net zo",
    explanation: "Aftrekken van breuken is hetzelfde proces als optellen — alleen het teken in het midden is **min** in plaats van plus.\n\n**Stappenplan**:\n1. Maak gelijknamig (gemeenschappelijke noemer)\n2. Trek de tellers af\n3. Vereenvoudig zo nodig\n\n**Voorbeelden**:\n\n**A**: ⅗ − ¹⁄₅ (al gelijknamig)\n• Tellers aftrekken: 3 − 1 = 2\n• Resultaat: **²⁄₅**\n\n**B**: ¾ − ⅓\n• Gemeenschappelijke noemer: 12\n• ¾ = ⁹⁄₁₂\n• ⅓ = ⁴⁄₁₂\n• ⁹⁄₁₂ − ⁴⁄₁₂ = **⁵⁄₁₂**\n\n**C**: ⅚ − ½\n• Gemeenschappelijke noemer: 6\n• ½ = ³⁄₆\n• ⅚ − ³⁄₆ = **²⁄₆ = ⅓** (vereenvoudigd!)\n\n**Tip**: na aftrekken altijd kijken of je kunt vereenvoudigen.",
    svg: `<svg viewBox="0 0 300 200">
<text x="50" y="40" fill="${COLORS.text}" font-size="14" font-family="Arial">¾ − ⅓ = ?</text>
<text x="50" y="70" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">gelijknamig (×12):</text>
<text x="50" y="92" fill="${COLORS.text}" font-size="14" font-family="Arial">⁹⁄₁₂ − ⁴⁄₁₂</text>
<text x="50" y="118" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">tellers aftrekken:</text>
<rect x="50" y="130" width="80" height="36" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="90" y="154" text-anchor="middle" fill="${COLORS.point}" font-size="16" font-family="Arial" font-weight="bold">⁵⁄₁₂</text>
<text x="160" y="150" fill="${COLORS.muted}" font-size="11" font-family="Arial">9 − 4 = 5</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: ⅚ − ⅓.",
        options: ["½", "⁴⁄₆", "⁴⁄₃", "²⁄₃"],
        answer: 0,
        wrongHints: [
          null,
          "⁴⁄₆ klopt als tussenstap, maar je kunt nog vereenvoudigen: ⁴⁄₆ = ²⁄₃... hm, en ²⁄₃ ≠ ½. Reken nog: ⅚ − ²⁄₆ = ³⁄₆ = ½.",
          "Je hebt iets verkeerd berekend. ⅓ = ²⁄₆. Dus ⅚ − ²⁄₆ = ³⁄₆ = ½.",
          "²⁄₃ = ⁴⁄₆. Maar we krijgen ⅚ − ²⁄₆ = ³⁄₆ = ½. Iets anders dus.",
        ],
      },
    ],
  },

  // ─── D. Vermenigvuldigen + delen ────────────────────────────
  {
    title: "Vermenigvuldigen — eenvoudig",
    explanation: "Bij **vermenigvuldigen** van breuken is het juist **eenvoudig**:\n\n**Teller × teller, noemer × noemer.**\n\nGeen gelijknamig maken nodig!\n\n**Voorbeelden**:\n• ½ × ⅓ = (1·1)⁄(2·3) = **⅙**\n• ¾ × ²⁄₅ = (3·2)⁄(4·5) = ⁶⁄₂₀ = **³⁄₁₀** (vereenvoudigd)\n• ⅖ × ⅗ = ⁶⁄₂₅\n\n**Voorbeeld in het echt**: helft van een derde pizza = ½ × ⅓ = ⅙ pizza. Logisch.\n\n**Tip**: na vermenigvuldigen meestal vereenvoudigen.\n\n**Met een geheel getal**:\n• 3 × ⅖ = ⁶⁄₅ (schrijf 3 als ³⁄₁ en doe normaal: ³⁄₁ × ²⁄₅ = ⁶⁄₅)\n• 2 × ¾ = ⁶⁄₄ = ³⁄₂ = 1½",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="40" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">teller × teller, noemer × noemer</text>
<line x1="40" y1="55" x2="260" y2="55" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="60" y="85" fill="${COLORS.text}" font-size="14" font-family="Arial">½ × ⅓ =</text>
<text x="180" y="85" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">¹⁄₆</text>
<text x="60" y="110" fill="${COLORS.text}" font-size="14" font-family="Arial">¾ × ²⁄₅ =</text>
<text x="180" y="110" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">⁶⁄₂₀ = ³⁄₁₀</text>
<text x="60" y="135" fill="${COLORS.text}" font-size="14" font-family="Arial">⅖ × ⅗ =</text>
<text x="180" y="135" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">⁶⁄₂₅</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">geen gelijknamig maken nodig</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: ¾ × ⅓.",
        options: ["¼", "³⁄₁₂ (= ¼)", "²⁄₇", "Beide ¼ en ³⁄₁₂"],
        answer: 3,
        wrongHints: [
          "Klopt — maar ³⁄₁₂ is hetzelfde als ¼. Beide opties zijn correct.",
          "Klopt — maar ¼ is hetzelfde als ³⁄₁₂ (vereenvoudigd). Beide kloppen.",
          "²⁄₇ = (3+ −)/(4+3)? Klopt niet. Vermenigvuldigen: teller·teller, noemer·noemer. 3·1=3 en 4·3=12.",
          null,
        ],
      },
    ],
  },
  {
    title: "Delen — omkeren en vermenigvuldigen",
    explanation: "Delen van breuken klinkt moeilijk maar heeft een truc:\n\n**Bij delen door een breuk: keer de tweede breuk om en vermenigvuldig.**\n\n**Voorbeelden**:\n• ½ ÷ ⅓ = ½ × ³⁄₁ = ³⁄₂ = **1½**\n  (¹⁄₃ omgekeerd is ³⁄₁)\n• ¾ ÷ ⅖ = ¾ × ⁵⁄₂ = ¹⁵⁄₈\n• ⅗ ÷ ¾ = ⅗ × ⁴⁄₃ = ¹²⁄₁₅ = **⁴⁄₅**\n\n**'Omkeren'** betekent: teller en noemer wisselen.\n• ½ → ²⁄₁ (= 2)\n• ⅔ → ³⁄₂\n• ⅘ → ⁵⁄₄\n\n**Waarom werkt deze truc?** Delen door 2 is hetzelfde als × ½ (de helft nemen). Delen door ⅓ is dus × ³⁄₁ (omgekeerd).\n\n**In het echt**: 'Hoeveel keer past ⅓ pizza in ½ pizza?' = ½ ÷ ⅓ = 1½ keer.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="30" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">delen = keer omgekeerde</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="60" y="70" fill="${COLORS.text}" font-size="14" font-family="Arial">½ ÷ ⅓</text>
<text x="120" y="70" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">→</text>
<text x="155" y="70" fill="${COLORS.text}" font-size="14" font-family="Arial">½ × ³⁄₁</text>
<text x="220" y="70" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 1½</text>
<text x="60" y="105" fill="${COLORS.text}" font-size="14" font-family="Arial">¾ ÷ ⅖</text>
<text x="120" y="105" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">→</text>
<text x="155" y="105" fill="${COLORS.text}" font-size="14" font-family="Arial">¾ × ⁵⁄₂</text>
<text x="220" y="105" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= ¹⁵⁄₈</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">tweede breuk omdraaien, dan vermenigvuldigen</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: ½ ÷ ¼.",
        options: ["2", "⅛", "1", "½"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt vermenigvuldigd ipv gedeeld. Bij delen: tweede breuk omdraaien (¼ → ⁴⁄₁ = 4), dan ½ × 4 = 2.",
          "Hoe past ¼ in ½? Twee keer (½ = ²⁄₄ = 2 × ¼). Dus 2.",
          "Reken: ½ ÷ ¼ = ½ × ⁴⁄₁ = ⁴⁄₂ = 2.",
        ],
      },
    ],
  },
  {
    title: "Volgorde van bewerkingen met breuken",
    explanation: "Bij langere uitdrukkingen met breuken geldt dezelfde **volgorde** als bij gewone getallen:\n\n1. Haakjes eerst\n2. Vermenigvuldigen / delen\n3. Optellen / aftrekken\n\n**Voorbeeld**: ½ + ⅓ × ¾\n\nEerst vermenigvuldigen: ⅓ × ¾ = ³⁄₁₂ = ¼\nDan optellen: ½ + ¼ = ²⁄₄ + ¼ = ¾\n\n**Voorbeeld 2**: (¾ − ½) × ⅔\n• Haakjes eerst: ¾ − ½ = ¾ − ²⁄₄ = ¼\n• Dan: ¼ × ⅔ = ²⁄₁₂ = ⅙\n\n**Veelgemaakte fout**: van links naar rechts werken zonder de volgorde. Maar **vermenigvuldigen gaat voor optellen**, ook bij breuken.\n\nHandig om de volgorde 'haakjes-machten-vermenigvuldigen-optellen' (HMVO) te onthouden — geldt voor élke wiskunde, ook met breuken.",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="30" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">volgorde:  haakjes → × ÷ → + −</text>
<line x1="40" y1="42" x2="260" y2="42" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="55" y="65" fill="${COLORS.text}" font-size="13" font-family="Arial">½ + ⅓ × ¾</text>
<text x="55" y="88" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">eerst vermenigvuldigen:</text>
<text x="55" y="110" fill="${COLORS.text}" font-size="13" font-family="Arial">½ + ¼</text>
<text x="55" y="133" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">dan optellen:</text>
<rect x="55" y="145" width="80" height="34" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="95" y="168" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">¾</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: ⅓ + ½ × ⅖.",
        options: [
          "⁸⁄₁₅",
          "⁵⁄₆",
          "²⁄₅",
          "¾",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt eerst opgeteld (⅓+½) en daarna keer ⅖. Maar volgens volgorde: eerst ½ × ⅖ = ⅕. Dan ⅓ + ⅕ = ⁸⁄₁₅.",
          "²⁄₅ is alleen ½ × ⅖. Je vergeet de + ⅓.",
          "Niet ¾. Reken stap voor stap: eerst ½ × ⅖ = ⅕, dan ⅓ + ⅕ = ⁵⁄₁₅ + ³⁄₁₅ = ⁸⁄₁₅.",
        ],
      },
    ],
  },

  // ─── E. Toepassingen + eindopdracht ────────────────────────────
  {
    title: "Toepassing: een breuk van een getal",
    explanation: "Hoe bereken je '**een breuk van een getal**'? Bv. **⅔ van 24**?\n\n**Methode 1**: vermenigvuldigen.\n⅔ × 24 = (2·24)⁄3 = ⁴⁸⁄₃ = **16**\n\n**Methode 2**: deel eerst, dan vermenigvuldig (vaak makkelijker).\n• Eerst ⅓ van 24 = 24 ÷ 3 = 8\n• Dan ⅔ = 2 × 8 = **16**\n\n**Voorbeelden**:\n• ½ van 50 = 50 ÷ 2 = **25**\n• ¾ van 100 = (¼ van 100 = 25) → 3 × 25 = **75**\n• ⅖ van 35 = (⅕ van 35 = 7) → 2 × 7 = **14**\n• ⅛ van 64 = 64 ÷ 8 = **8**\n\n**Trucje voor ronde getallen**: deel het getal door de noemer, vermenigvuldig met de teller.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="35" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">⅔ van 24 = ?</text>
<rect x="40" y="55" width="220" height="2" fill="${COLORS.curve}" opacity="0.4"/>
<text x="60" y="85" fill="${COLORS.text}" font-size="13" font-family="Arial">stap 1:</text>
<text x="60" y="108" fill="${COLORS.text}" font-size="13" font-family="Arial">⅓ van 24 = 24 ÷ 3 = 8</text>
<text x="60" y="138" fill="${COLORS.text}" font-size="13" font-family="Arial">stap 2:</text>
<text x="60" y="161" fill="${COLORS.text}" font-size="13" font-family="Arial">⅔ = 2 × 8 = 16</text>
<rect x="180" y="115" width="80" height="40" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="220" y="142" text-anchor="middle" fill="${COLORS.point}" font-size="20" font-family="Arial" font-weight="bold">16</text>
</svg>`,
    checks: [
      {
        q: "Wat is ¾ van 60?",
        options: ["45", "20", "180", "15"],
        answer: 0,
        wrongHints: [
          null,
          "20 = 60 ÷ 3. Maar dat is ⅓ van 60, niet ¾. Bij ¾: deel door 4, keer 3.",
          "180 = 60 × 3. Maar het is ¾ van — niet 3 keer.",
          "15 = ¼ van 60. Maar je zoekt ¾ (drie kwarten): 3 × 15 = 45.",
        ],
      },
    ],
  },
  {
    title: "Toepassing: breuken vergelijken",
    explanation: "Welke breuk is **groter**: ⅔ of ¾?\n\n**Methode 1**: gelijknamig maken, dan vergelijken.\n• Gemeenschappelijke noemer 12: ⅔ = ⁸⁄₁₂, ¾ = ⁹⁄₁₂\n• 9 > 8, dus **¾ > ⅔**\n\n**Methode 2**: omzetten naar kommagetal.\n• ⅔ ≈ 0,67\n• ¾ = 0,75\n• 0,75 > 0,67, dus **¾ > ⅔**\n\nBeide methodes geven hetzelfde antwoord — kies wat je makkelijker vindt.\n\n**Algemeen geldt**: bij gelijke teller, kleinere noemer = grotere breuk.\n• ⅓ < ½ (drie stukken eten = kleiner stuk dan twee)\n• ⅖ < ⅓ ? Nee andersom.\n\n**Bij gelijke noemer, grotere teller = grotere breuk**:\n• ⅗ > ⅖ (meer van dezelfde grootte)\n\n**Onthoudtruc**: hoe groter de noemer, hoe kleiner het stuk (8 stukjes pizza zijn kleiner dan 4 stukjes uit dezelfde pizza).",
    svg: `<svg viewBox="0 0 300 200">
<text x="80" y="32" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">⅔</text>
<text x="150" y="32" text-anchor="middle" fill="${COLORS.muted}" font-size="20" font-family="Arial">vs</text>
<text x="220" y="32" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">¾</text>
<rect x="30" y="60" width="100" height="40" fill="rgba(0,200,83,0.40)" stroke="${COLORS.curve}" stroke-width="1.5"/>
<rect x="30" y="60" width="50" height="40" fill="none" stroke="${COLORS.curve}" stroke-width="0.7"/>
<rect x="80" y="60" width="50" height="40" fill="rgba(0,200,83,0.40)" stroke="${COLORS.curve}" stroke-width="0.7"/>
<text x="80" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">≈ 0,67</text>
<rect x="160" y="60" width="100" height="40" fill="rgba(255,213,79,0.40)" stroke="${COLORS.point}" stroke-width="1.5"/>
<text x="210" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">= 0,75</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">¾ > ⅔</text>
<text x="150" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">9/12 vs 8/12 — duidelijk</text>
</svg>`,
    checks: [
      {
        q: "Welke is groter: ⅗ of ⅔?",
        options: ["⅔", "⅗", "Even groot", "Niet vergelijkbaar"],
        answer: 0,
        wrongHints: [
          null,
          "⅗ = ⁹⁄₁₅, ⅔ = ¹⁰⁄₁₅. Dus ⅔ is groter.",
          "Niet even groot. ⅗ ≈ 0,6 en ⅔ ≈ 0,67 — net iets verschillend.",
          "Breuken zijn altijd vergelijkbaar — maak gelijknamig en vergelijk tellers.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht",
    explanation: "**Drie korte vraagstukken** om alles bij elkaar te zetten:\n\n**A**: Reken uit: ⅓ + ¼.\n• Gelijknamig maken (noemer 12): ⁴⁄₁₂ + ³⁄₁₂\n• Tellers optellen: **⁷⁄₁₂**\n\n**B**: Wat is ⅖ × ¾?\n• Teller × teller, noemer × noemer: (2·3)⁄(5·4) = ⁶⁄₂₀\n• Vereenvoudigen: **³⁄₁₀**\n\n**C**: Pizza-vraagstuk: een pizza is in 8 stukken. Lisa eet ⅜, Tom eet ¼. Hoeveel pizza is er over?\n• Eerst gelijknamig: ¼ = ²⁄₈\n• Samen gegeten: ⅜ + ²⁄₈ = ⁵⁄₈\n• Over: 1 − ⅝ = **⅜** (of: ⁸⁄₈ − ⅝ = ⅜)\n\nGoed gedaan — je hebt alle technieken in één toepassing gebruikt:\n• Gelijknamig maken ✓\n• Optellen / aftrekken ✓\n• Vermenigvuldigen + vereenvoudigen ✓\n• Toepassen in praktijk ✓\n\nHiermee heb je het breuken-leerpad doorlopen!",
    svg: `<svg viewBox="0 0 300 200">
<text x="55" y="32" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">A. ⅓ + ¼ =</text>
<rect x="180" y="18" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="220" y="37" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">⁷⁄₁₂</text>
<text x="55" y="78" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">B. ⅖ × ¾ =</text>
<rect x="180" y="64" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="220" y="83" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">³⁄₁₀</text>
<text x="55" y="124" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">C. pizza over =</text>
<rect x="180" y="110" width="80" height="28" fill="rgba(255,213,79,0.18)" stroke="${COLORS.point}" stroke-width="2" rx="6"/>
<text x="220" y="129" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">⅜</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">je hebt breuken onder de knie 🏆</text>
</svg>`,
    checks: [
      {
        q: "Reken uit: ½ + ⅓ × ⅙.",
        options: ["¹⁰⁄₁₈ (= ⁵⁄₉)", "¹⁄₁₈", "⁵⁄₃", "⁵⁄₆"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is alleen ⅓ × ⅙ = ¹⁄₁₈. Je vergeet de + ½.",
          "Te groot — ½ is maar 0,5 en je telt iets kleins op.",
          "Eerst vermenigvuldigen: ⅓ × ⅙ = ¹⁄₁₈. Dan ½ + ¹⁄₁₈ = ⁹⁄₁₈ + ¹⁄₁₈ = ¹⁰⁄₁₈.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const breuken = {
  id: "breuken",
  title: "Breuken",
  emoji: "🍕",
  level: "klas1-vwo",
  subject: "wiskunde",
  // SLO-niveau (sprint-5 G4b 2026-05-08): 2F = einde-vmbo minimum,
  // 2S = streef voor havo/vwo onderbouw. Breuken zijn 2F-basis.
  referentieNiveau: "2F",
  sloThema: "Getallen — breuken",
  topics: ["WI.rekenen.breuken"],
  intro: "Breuken zijn fundamenteel in álle wiskunde — niet alleen klas 1. Hier leer je vanaf de basis: wat is een breuk, gelijkwaardige breuken, optellen/aftrekken (met gelijknamig maken), vermenigvuldigen/delen (omdraaien-truc), en praktische toepassingen.",
  triggerKeywords: ["breuk", "breuken", "teller", "noemer", "gelijknamig", "½", "⅓", "¾"],
  chapters,
  steps,
};

export default breuken;

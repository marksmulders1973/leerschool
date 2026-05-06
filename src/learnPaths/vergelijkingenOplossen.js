// Leerpad: Vergelijkingen oplossen — Wiskunde klas 2
// 14 stappen in 5 hoofdstukken (A t/m E).
// Bouwt voort op rekenen-met-letters; voorbereiding voor lineaire-formules en
// kwadratische-vergelijkingen.

const COLORS = {
  axis: "#e0e6f0",
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

const stepEmojis = [
  "🔍", "🎯", "⚖️",                    // A. Wat is een vergelijking?
  "➖", "➗", "✖️",                      // B. Eenvoudige vergelijkingen
  "🔄", "📋", "🗺️",                    // C. x aan beide kanten
  "📦", "🔢", "💬",                    // D. Haakjes + breuken + woord
  "🎯", "🏆",                            // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Wat is een vergelijking?", emoji: "⚖️", from: 0, to: 2 },
  { letter: "B", title: "Eenvoudige vergelijkingen", emoji: "➖", from: 3, to: 5 },
  { letter: "C", title: "x aan beide kanten", emoji: "🔄", from: 6, to: 8 },
  { letter: "D", title: "Haakjes, breuken, woord", emoji: "📦", from: 9, to: 11 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 12, to: 13 },
];

const steps = [
  // ─── A. Wat is een vergelijking? ──────────────────────
  {
    title: "Vergelijking versus uitdrukking",
    explanation: "Een **uitdrukking** is een rekenstuk zonder is-gelijk-teken: bijvoorbeeld **3x + 5**, **2(a − 1)**, **x²**.\n\nEen **vergelijking** is twee uitdrukkingen die met **=** aan elkaar staan: bijvoorbeeld **3x + 5 = 14**, **2(a − 1) = 8**.\n\n**Verschil**:\n• Uitdrukking → bereken je waarde voor een gegeven x.\n• Vergelijking → vind je de **x** zodat de twee kanten gelijk zijn.\n\n**Voorbeelden**:\n• Uitdrukking: 3x + 5 → bij x = 2 is dit 11.\n• Vergelijking: 3x + 5 = 11 → vraag: welke x maakt dit waar? (Antwoord: x = 2.)\n\n**Wat moet je leren in dit pad**:\n• Verschillende soorten vergelijkingen oplossen (eenvoudig, met x aan beide kanten, met haakjes).\n• De **balans-methode** gebruiken: links en rechts hetzelfde doen om x te isoleren.\n• Uit een woordprobleem een vergelijking opstellen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<rect x="35" y="62" width="105" height="56" rx="8" fill="rgba(0,200,83,0.12)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="87" y="82" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">uitdrukking</text>
<text x="87" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">3x + 5</text>
<text x="87" y="116" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">geen =</text>
<rect x="160" y="62" width="105" height="56" rx="8" fill="rgba(255,213,79,0.12)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="212" y="82" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">vergelijking</text>
<text x="212" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">3x + 5 = 14</text>
<text x="212" y="116" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vind x</text>
<text x="150" y="168" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">vergelijking = uitdrukking = uitdrukking</text>
</svg>`,
    checks: [
      {
        q: "*Wat is een vergelijking?*",
        options: [
          "Twee uitdrukkingen met een = ertussen",
          "Een rekenstuk zonder = teken",
          "Een tabel met getallen",
          "Een grafiek",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is een uitdrukking. Een vergelijking heeft een = teken.",
          "Een tabel is geen vergelijking. Vergelijkingen hebben =.",
          "Een grafiek is iets anders — visuele weergave, geen vergelijking met = teken.",
        ],
      },
    ],
  },
  {
    title: "De oplossing van een vergelijking",
    explanation: "De **oplossing** van een vergelijking is de waarde van x (of een andere letter) die de vergelijking **waar** maakt — d.w.z. waarvoor links = rechts.\n\n**Voorbeeld**: x + 3 = 7\n• Probeer x = 1: 1 + 3 = 4 ≠ 7. Niet goed.\n• Probeer x = 4: 4 + 3 = 7 ✓ Dit is de oplossing!\n\n**Notatie**: schrijf de oplossing als **x = 4**.\n\n**Hoeveel oplossingen heeft een vergelijking?**\n• Eén oplossing: x + 3 = 7 → x = 4 (uniek)\n• Geen oplossing: x = x + 1 (kan nooit waar zijn)\n• Oneindig veel: 2x = 2x (altijd waar)\n\nMeestal heeft een vergelijking precies één oplossing — daar gaan we vanuit in dit pad.\n\n**Hoe vind je de oplossing? Twee manieren**:\n1. **Proberen** (gokken en checken) — werkt voor heel simpele vergelijkingen.\n2. **Systematisch oplossen** met de balans-methode — werkt altijd, ook bij ingewikkelde vergelijkingen. Dat leren we hier.\n\nDe balans-methode is de hoofdtechniek vanaf de volgende stap.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">x + 3 = 7</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.alt}" font-size="11" font-family="Arial">x = 1: 1 + 3 = 4 ≠ 7 ✗</text>
<text x="35" y="94" fill="${COLORS.alt}" font-size="11" font-family="Arial">x = 2: 2 + 3 = 5 ≠ 7 ✗</text>
<text x="35" y="112" fill="${COLORS.alt}" font-size="11" font-family="Arial">x = 3: 3 + 3 = 6 ≠ 7 ✗</text>
<text x="35" y="130" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">x = 4: 4 + 3 = 7 ✓</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">oplossing: x = 4</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de oplossing van x − 5 = 8?*",
        options: ["x = 13", "x = 3", "x = -3", "x = 40"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 3 - 5 = -2, niet 8. Probeer iets groters.",
          "Check: -3 - 5 = -8, niet 8.",
          "Check: 40 - 5 = 35, niet 8. Te groot.",
        ],
      },
    ],
  },
  {
    title: "De balans-methode — beide kanten hetzelfde",
    explanation: "Een vergelijking is als een **weegschaal in balans**: links en rechts wegen even zwaar.\n\nAls je iets aan **één kant** verandert, raakt de balans verstoord. Maar als je **aan beide kanten hetzelfde** doet, blijft de balans intact.\n\n**Toegelaten acties op beide kanten** (om x te isoleren):\n1. **Optellen** — bij beide kanten +N\n2. **Aftrekken** — bij beide kanten −N\n3. **Vermenigvuldigen** — beide kanten × N (geen 0)\n4. **Delen** — beide kanten ÷ N (geen 0)\n\n**Doel**: de x **alleen** krijgen aan één kant, en het getal aan de andere kant. Dan staat de oplossing er.\n\n**Voorbeeld**: x + 3 = 7\n• Aan beide kanten −3 doen:\n  → x + 3 − 3 = 7 − 3\n  → x = 4 ✓\n\n**Voorbeeld**: 5x = 25\n• Aan beide kanten ÷5:\n  → 5x ÷ 5 = 25 ÷ 5\n  → x = 5 ✓\n\n**Belangrijk**: doe **altijd hetzelfde** aan beide kanten. Vergeet je een kant, dan klopt de balans niet meer.\n\n**Schrijfwijze tip**: schrijf de actie naast de vergelijking om bij te houden wat je doet:\n```\nx + 3 = 7      | -3\nx = 4\n```",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">balans-methode</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<line x1="60" y1="100" x2="240" y2="100" stroke="${COLORS.warm}" stroke-width="3"/>
<line x1="150" y1="100" x2="150" y2="80" stroke="${COLORS.warm}" stroke-width="3"/>
<polygon points="135,80 165,80 150,65" fill="${COLORS.warm}"/>
<rect x="70" y="105" width="60" height="30" rx="4" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="100" y="125" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">x + 3</text>
<rect x="170" y="105" width="60" height="30" rx="4" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="200" y="125" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">7</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">altijd HETZELFDE doen aan links en rechts</text>
</svg>`,
    checks: [
      {
        q: "*Bij de vergelijking 8x = 24 — welke actie isoleert x?*",
        options: [
          "Beide kanten delen door 8",
          "Beide kanten aftrekken met 8",
          "Beide kanten optellen met 8",
          "Beide kanten vermenigvuldigen met 8",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Aftrekken zou geen werk doen — 8x staat er niet als 8 + x.",
          "Optellen helpt niet om de 8 weg te krijgen die met x vermenigvuldigt wordt.",
          "Vermenigvuldigen maakt het juist groter (64x = 192). Je wil delen.",
        ],
      },
    ],
  },

  // ─── B. Eenvoudige vergelijkingen ────────────────────
  {
    title: "Vergelijking met +: aftrekken",
    explanation: "Een vergelijking als **x + 5 = 12** los je op door **aan beide kanten dezelfde 5 af te trekken**:\n\n```\nx + 5 = 12     | -5\nx = 7\n```\n\nDe '5' valt links weg (5 − 5 = 0), en rechts wordt het 12 − 5 = 7.\n\n**Andere voorbeelden**:\n\n• x + 9 = 20  →  | -9  →  x = 11\n• x + 3 = 8   →  | -3  →  x = 5\n• x + 12 = 30 →  | -12 →  x = 18\n\n**Tip**: schrijf altijd het getal dat je optelt of aftrekt **rechts naast de vergelijking**, met een streep. Dat helpt om het overzicht te bewaren.\n\n**Controle**: vul je oplossing in en check of de vergelijking klopt.\n• x = 7 in x + 5 = 12 → 7 + 5 = 12 ✓\n• Klopt → goede oplossing.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">+ wegwerken: aftrekken</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="78" fill="${COLORS.text}" font-size="14" font-family="monospace">x + 5 = 12</text>
<text x="180" y="78" fill="${COLORS.alt}" font-size="13" font-family="monospace">| -5</text>
<line x1="35" y1="88" x2="220" y2="88" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="35" y="108" fill="${COLORS.good}" font-size="14" font-family="monospace" font-weight="bold">x = 7</text>
<line x1="30" y1="125" x2="270" y2="125" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="148" fill="${COLORS.text}" font-size="11" font-family="Arial">controle: 7 + 5 = 12 ✓</text>
<text x="35" y="168" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">altijd controleren!</text>
</svg>`,
    checks: [
      {
        q: "*Los op: x + 8 = 15.*",
        options: ["x = 7", "x = 23", "x = 8", "x = -7"],
        answer: 0,
        wrongHints: [
          null,
          "23 = 15 + 8 (verkeerd om). Trek 8 af van 15, niet bij elkaar op.",
          "Check: 8 + 8 = 16, niet 15. Probeer iets kleiner.",
          "Negatief klopt niet hier — 15 is groter dan 8 dus x is positief.",
        ],
      },
      {
        q: "*Los op: x + 12 = 5.*",
        options: ["x = -7", "x = 7", "x = 17", "x = -17"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 7 + 12 = 19, niet 5. Hier moet x negatief zijn.",
          "17 = 12 + 5 (verkeerd om). Trek 12 af van 5: 5 - 12 = -7.",
          "Te negatief. Reken: 5 - 12 = -7.",
        ],
      },
    ],
  },
  {
    title: "Vergelijking met ×: delen",
    explanation: "Een vergelijking als **3x = 21** los je op door **aan beide kanten te delen door 3**:\n\n```\n3x = 21        | :3\nx = 7\n```\n\nLinks wordt 3x ÷ 3 = x. Rechts wordt 21 ÷ 3 = 7.\n\n**Andere voorbeelden**:\n\n• 5x = 35   →  | :5   →  x = 7\n• 4x = 24   →  | :4   →  x = 6\n• 7x = 56   →  | :7   →  x = 8\n• 2x = -10  →  | :2   →  x = -5\n\n**Belangrijk**: bij delen door een **negatief getal** moet je opletten — daar komen we later bij ongelijkheden op terug. Voor gewone vergelijkingen werkt het identiek.\n\n• -3x = 12  →  | :(-3)  →  x = -4 *(let op: 12 ÷ (-3) = -4)*\n\n**Truc om te zien dat het klopt**: vul de oplossing in. 3 · 7 = 21 ✓.\n\n**Tip voor breuk-uitkomsten**:\n• 3x = 7  →  x = 7/3 (mag als breuk blijven staan)\n• 5x = 12  →  x = 12/5 = 2.4",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">× wegwerken: delen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="78" fill="${COLORS.text}" font-size="14" font-family="monospace">3x = 21</text>
<text x="160" y="78" fill="${COLORS.alt}" font-size="13" font-family="monospace">| :3</text>
<line x1="35" y1="88" x2="200" y2="88" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="35" y="108" fill="${COLORS.good}" font-size="14" font-family="monospace" font-weight="bold">x = 7</text>
<line x1="30" y1="125" x2="270" y2="125" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="148" fill="${COLORS.text}" font-size="11" font-family="Arial">controle: 3 · 7 = 21 ✓</text>
<text x="35" y="168" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">delen door negatief: x kan negatief worden</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 7x = 42.*",
        options: ["x = 6", "x = 35", "x = 49", "x = 7"],
        answer: 0,
        wrongHints: [
          null,
          "35 = 42 - 7 (aftrekken). Hier moet je delen, niet aftrekken.",
          "49 = 42 + 7 (optellen). Hier moet je delen.",
          "Check: 7 · 7 = 49, niet 42.",
        ],
      },
    ],
  },
  {
    title: "Vergelijking met deling: vermenigvuldigen",
    explanation: "Bij **x ÷ N = M** los je op door **aan beide kanten met N te vermenigvuldigen**.\n\n**Voorbeeld**: x/4 = 5\n\n```\nx/4 = 5         | ·4\nx = 20\n```\n\nLinks wordt x/4 · 4 = x. Rechts wordt 5 · 4 = 20.\n\n**Andere voorbeelden**:\n\n• x/3 = 8   →  | ·3   →  x = 24\n• x/5 = -2  →  | ·5   →  x = -10\n• x/10 = 7  →  | ·10  →  x = 70\n\n**Notatie**: x/4 betekent hetzelfde als x ÷ 4 of ¼·x.\n\n**Combinatie van + en ÷**:\nSoms staat er een combinatie zoals x/3 + 2 = 7. Pak het in **omgekeerde volgorde** van een gewone berekening:\n• Eerst: trek de 2 af → x/3 = 5\n• Daarna: vermenigvuldig met 3 → x = 15\n\n**Vuistregel — omgekeerde volgorde**:\nWat als laatste werd gedaan in de uitdrukking, doe je als eerste ongedaan. (Hier: + 2 was de laatste stap, dus die haal je als eerste weg.)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">÷ wegwerken: vermenigvuldigen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="78" fill="${COLORS.text}" font-size="14" font-family="monospace">x / 4 = 5</text>
<text x="160" y="78" fill="${COLORS.alt}" font-size="13" font-family="monospace">| · 4</text>
<line x1="35" y1="88" x2="200" y2="88" stroke="${COLORS.muted}" stroke-width="0.5"/>
<text x="35" y="108" fill="${COLORS.good}" font-size="14" font-family="monospace" font-weight="bold">x = 20</text>
<line x1="30" y1="125" x2="270" y2="125" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="146" fill="${COLORS.muted}" font-size="11" font-family="Arial">combinatie: x/3 + 2 = 7</text>
<text x="35" y="162" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ -2 eerst → x/3 = 5</text>
<text x="35" y="178" fill="${COLORS.muted}" font-size="11" font-family="Arial">→ ·3 daarna → x = 15</text>
</svg>`,
    checks: [
      {
        q: "*Los op: x/6 = 9.*",
        options: ["x = 54", "x = 1.5", "x = 15", "x = 3"],
        answer: 0,
        wrongHints: [
          null,
          "1.5 = 9/6 (verkeerd om). Hier moet je vermenigvuldigen.",
          "15 = 9 + 6 (optellen). Hier moet je vermenigvuldigen met 6.",
          "Check: 3 / 6 = 0.5, niet 9.",
        ],
      },
    ],
  },

  // ─── C. x aan beide kanten ────────────────────────────
  {
    title: "x aan beide kanten — x'en bij elkaar halen",
    explanation: "Bij vergelijkingen als **5x = 2x + 12** staat x **aan beide kanten**. Eerste stap: alle x'en aan **één kant** verzamelen.\n\n**Voorbeeld**: 5x = 2x + 12\n\n```\n5x = 2x + 12     | -2x\n3x = 12          | :3\nx = 4\n```\n\n**Stap 1**: Trek 2x af van beide kanten. Links: 5x − 2x = 3x. Rechts: 2x + 12 − 2x = 12.\n**Stap 2**: Deel beide kanten door 3.\n\n**Andere voorbeelden**:\n\n• 7x = 4x + 9    →  | -4x  →  3x = 9   →  | :3  →  x = 3\n• 6x = x + 25    →  | -x   →  5x = 25  →  | :5  →  x = 5\n• 8x = 3x + 30   →  | -3x  →  5x = 30  →  | :5  →  x = 6\n\n**Tip**: haal altijd de x'en bij elkaar **aan de kant waar ze al groter zijn**. Dat voorkomt negatieve aantallen x'en.\n\n**Voorbeeld andersom**: 2x = 5x − 12 (let op: 5x > 2x)\n• Beter naar links halen: zou 2x − 5x = -3x geven, lastig.\n• Beter naar rechts: trek 2x af → 0 = 3x − 12 → +12 → 12 = 3x → x = 4.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">x aan beide kanten</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="13" font-family="monospace">5x = 2x + 12</text>
<text x="180" y="76" fill="${COLORS.alt}" font-size="11" font-family="monospace">| -2x</text>
<text x="35" y="98" fill="${COLORS.text}" font-size="13" font-family="monospace">3x = 12</text>
<text x="180" y="98" fill="${COLORS.alt}" font-size="11" font-family="monospace">| :3</text>
<text x="35" y="120" fill="${COLORS.good}" font-size="14" font-family="monospace" font-weight="bold">x = 4</text>
<line x1="30" y1="135" x2="270" y2="135" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="156" fill="${COLORS.muted}" font-size="11" font-family="Arial">controle: 5·4 = 20, 2·4+12 = 20 ✓</text>
<text x="35" y="176" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tip: haal x'en naar de kant waar ze al groter zijn</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 6x = 2x + 16.*",
        options: ["x = 4", "x = 8", "x = 2", "x = 16"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 6·8 = 48, en 2·8+16 = 32. Niet gelijk.",
          "Check: 6·2 = 12, en 2·2+16 = 20. Niet gelijk.",
          "Check: 6·16 = 96, en 2·16+16 = 48. Niet gelijk.",
        ],
      },
    ],
  },
  {
    title: "Met getallen aan beide kanten",
    explanation: "Soms staan er **getallen** aan beide kanten **én** x aan beide kanten. Dan is het twee stappen:\n\n**Voorbeeld**: 4x + 3 = x + 18\n\n```\n4x + 3 = x + 18      | -x   (x'en bij elkaar)\n3x + 3 = 18          | -3   (getallen bij elkaar)\n3x = 15              | :3\nx = 5\n```\n\n**Volgorde**: meestal eerst de x'en, daarna de getallen, daarna delen. Maar je mag ook andersom — het maakt niet uit zolang je consistent bent.\n\n**Andere voorbeelden**:\n\n• 5x + 7 = 2x + 16  →  | -2x  →  3x + 7 = 16   →  | -7  →  3x = 9    →  | :3  →  x = 3\n• 6x − 4 = 3x + 11  →  | -3x  →  3x − 4 = 11   →  | +4  →  3x = 15   →  | :3  →  x = 5\n• 2x + 8 = 5x − 4   →  | -2x  →  8 = 3x − 4    →  | +4  →  12 = 3x   →  | :3  →  x = 4\n\n**Belangrijk**: streep nooit door wat je aan één kant doet zonder het ook aan de andere kant te doen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">getallen + x aan beide kanten</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="12" font-family="monospace">4x + 3 = x + 18</text>
<text x="200" y="74" fill="${COLORS.alt}" font-size="10" font-family="monospace">| -x</text>
<text x="35" y="94" fill="${COLORS.text}" font-size="12" font-family="monospace">3x + 3 = 18</text>
<text x="200" y="94" fill="${COLORS.alt}" font-size="10" font-family="monospace">| -3</text>
<text x="35" y="114" fill="${COLORS.text}" font-size="12" font-family="monospace">3x = 15</text>
<text x="200" y="114" fill="${COLORS.alt}" font-size="10" font-family="monospace">| :3</text>
<text x="35" y="134" fill="${COLORS.good}" font-size="14" font-family="monospace" font-weight="bold">x = 5</text>
<line x1="30" y1="148" x2="270" y2="148" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="170" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">eerst x'en, dan getallen, dan delen</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 5x + 4 = 2x + 19.*",
        options: ["x = 5", "x = 4", "x = 7", "x = 3"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 5·4+4 = 24, 2·4+19 = 27. Niet gelijk.",
          "Check: 5·7+4 = 39, 2·7+19 = 33. Niet gelijk.",
          "Check: 5·3+4 = 19, 2·3+19 = 25. Niet gelijk.",
        ],
      },
    ],
  },
  {
    title: "Strategie — stappen ordenen",
    explanation: "Bij elke vergelijking is er meer dan één manier om hem op te lossen. Een goede **strategie** maakt het overzichtelijker.\n\n**Standaard-strategie** (werkt altijd):\n\n**1. Open haakjes** (als die er zijn — volgende hoofdstuk).\n**2. Verzamel x aan één kant** (kies de kant waar x al meer voorkomt).\n**3. Verzamel getallen aan de andere kant**.\n**4. Deel** beide kanten door het getal vóór x.\n**5. Controleer** door je oplossing in te vullen.\n\n**Voorbeeld doorlopen**: 2(x − 1) + 5 = 3x − 4\n\n```\nstap 1: haakjes openen\n2x − 2 + 5 = 3x − 4\n2x + 3 = 3x − 4\n\nstap 2: x naar rechts (3x > 2x, dus x rechts laten)\n2x + 3 = 3x − 4    | -2x\n3 = x − 4\n\nstap 3: getallen naar links\n3 = x − 4          | +4\n7 = x\n\nstap 4: niet nodig (geen getal vóór x)\n\nstap 5: controleer\n2(7-1) + 5 = 12 + 5 = 17\n3·7 − 4 = 21 − 4 = 17 ✓\n```\n\n**Tip**: schrijf altijd elke stap duidelijk op, met de actie in de marge. Dat voorkomt fouten en maakt het makkelijk om terug te kijken.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">strategie — 5 stappen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">1. haakjes openen</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">2. x verzamelen aan 1 kant</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">3. getallen aan andere kant</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">4. delen door getal vóór x</text>
<text x="35" y="146" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">5. controleer altijd!</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">schrijf elke stap met actie in de marge</text>
</svg>`,
    checks: [
      {
        q: "*Wat is de eerste stap bij 4(x + 2) = 16?*",
        options: [
          "Haakjes openen → 4x + 8 = 16",
          "Beide kanten delen door 4",
          "Beide kanten −2",
          "Beide kanten ·4",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Pas wel mogelijk maar niet de eerste stap. Wat zit er om de x aan de linkerkant?",
          "Aftrekken werkt niet zolang er nog haakjes om x staan.",
          "Vermenigvuldigen maakt het juist groter — niet de standaard eerste stap.",
        ],
      },
    ],
  },

  // ─── D. Haakjes, breuken, woord ───────────────────────
  {
    title: "Haakjes openen",
    explanation: "Vergelijkingen kunnen **haakjes** bevatten zoals **2(x + 3) = 14**. De haakjes moet je eerst **openwerken** voordat je de balans-methode kunt gebruiken.\n\n**Distributieve eigenschap**: a(b + c) = a·b + a·c.\n\n**Voorbeeld**: 2(x + 3) = 14\n\n```\nstap 1: haakjes openen\n2(x + 3) = 14\n2·x + 2·3 = 14\n2x + 6 = 14         | -6\n2x = 8              | :2\nx = 4\n```\n\n**Andere voorbeelden**:\n\n• 3(x − 1) = 9      →  3x − 3 = 9      →  | +3  →  3x = 12  →  | :3  →  x = 4\n• 5(2x + 1) = 25    →  10x + 5 = 25    →  | -5  →  10x = 20 →  | :10 →  x = 2\n• -2(x + 4) = 6     →  -2x − 8 = 6     →  | +8  →  -2x = 14 →  | :(-2) →  x = -7\n\n**Let op bij negatief vóór de haakjes**:\n• -(x + 3) = -x − 3 (alle tekens veranderen)\n• -(x − 5) = -x + 5\n\n**Check je werk**: vul de oplossing in en kijk of het klopt.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">haakjes openen: a(b+c) = ab + ac</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="13" font-family="monospace">2(x + 3) = 14</text>
<text x="35" y="96" fill="${COLORS.text}" font-size="13" font-family="monospace">2x + 6 = 14</text>
<text x="200" y="96" fill="${COLORS.alt}" font-size="11" font-family="monospace">| -6</text>
<text x="35" y="116" fill="${COLORS.text}" font-size="13" font-family="monospace">2x = 8</text>
<text x="200" y="116" fill="${COLORS.alt}" font-size="11" font-family="monospace">| :2</text>
<text x="35" y="136" fill="${COLORS.good}" font-size="14" font-family="monospace" font-weight="bold">x = 4</text>
<text x="35" y="168" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">let op: -(x+3) = -x − 3 (alle tekens om)</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 3(x + 4) = 21.*",
        options: ["x = 3", "x = 7", "x = 6", "x = 17"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 3(7+4) = 33, niet 21.",
          "Check: 3(6+4) = 30, niet 21.",
          "Check: 3(17+4) = 63, niet 21.",
        ],
      },
    ],
  },
  {
    title: "Vergelijkingen met breuken",
    explanation: "Bij **breuken in een vergelijking** is de truc: vermenigvuldig **beide kanten** met de **noemer** om de breuk weg te werken.\n\n**Voorbeeld**: x/3 + 1 = 5\n\n```\nstap 1: -1 om de breuk te isoleren\nx/3 = 4              | ·3\n\nstap 2: ·3 om de noemer weg te werken\nx = 12\n```\n\n**Voorbeeld met breuk aan beide kanten**: x/2 = (x + 5)/3\n\n```\nstap 1: kruisproduct\nx · 3 = (x + 5) · 2\n3x = 2x + 10        | -2x\n\nstap 2: gewoon oplossen\nx = 10\n```\n\n**Of stap 1 anders**: vermenigvuldig beide kanten met **6** (de gemeenschappelijke noemer):\n• Links: x/2 · 6 = 3x\n• Rechts: (x + 5)/3 · 6 = 2(x + 5) = 2x + 10\n• Resultaat: 3x = 2x + 10 → x = 10 ✓\n\n**Andere voorbeelden**:\n• x/4 = 7   →  | ·4   →  x = 28\n• (x − 2)/5 = 3   →  | ·5  →  x − 2 = 15  →  | +2  →  x = 17\n• 2x/3 = 10  →  | ·3  →  2x = 30  →  | :2  →  x = 15",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">breuken: vermenigvuldig met noemer</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.text}" font-size="13" font-family="monospace">x/3 + 1 = 5</text>
<text x="200" y="76" fill="${COLORS.alt}" font-size="11" font-family="monospace">| -1</text>
<text x="35" y="96" fill="${COLORS.text}" font-size="13" font-family="monospace">x/3 = 4</text>
<text x="200" y="96" fill="${COLORS.alt}" font-size="11" font-family="monospace">| ·3</text>
<text x="35" y="116" fill="${COLORS.good}" font-size="14" font-family="monospace" font-weight="bold">x = 12</text>
<line x1="30" y1="135" x2="270" y2="135" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="155" fill="${COLORS.muted}" font-size="10" font-family="Arial">breuk = breuk → kruisproduct werkt:</text>
<text x="35" y="172" fill="${COLORS.muted}" font-size="10" font-family="Arial">a/b = c/d → ad = bc</text>
</svg>`,
    checks: [
      {
        q: "*Los op: x/5 = 8.*",
        options: ["x = 40", "x = 13", "x = 1.6", "x = 3"],
        answer: 0,
        wrongHints: [
          null,
          "13 = 8 + 5 (optellen). Hier moet je vermenigvuldigen: x = 8 · 5.",
          "1.6 = 8/5 (verkeerd om). Vermenigvuldig 8 met 5, niet andersom.",
          "Check: 3/5 = 0.6, niet 8.",
        ],
      },
    ],
  },
  {
    title: "Woordvergelijkingen — uit verhaal naar formule",
    explanation: "Bij een **woordvergelijking** krijg je een verhaaltje en moet je daar zelf een vergelijking uit maken. Daarna pas oplossen.\n\n**Voorbeeld**: \"Ik denk aan een getal. Ik vermenigvuldig dat met 3 en tel er 5 bij op. Het resultaat is 26. Welk getal denk ik?\"\n\n**Vertaling naar wiskunde**:\n• 'Een getal' = x\n• 'Vermenigvuldigen met 3' = 3x\n• 'Er 5 bij optellen' = 3x + 5\n• 'Het resultaat is 26' = 3x + 5 = 26\n\n**Oplossen**:\n```\n3x + 5 = 26    | -5\n3x = 21         | :3\nx = 7\n```\n\nAntwoord: het getal is **7**. (Check: 3·7 + 5 = 26 ✓)\n\n**Veelvoorkomende vertalingen**:\n• 'twee meer dan' → +2\n• 'drie minder dan' → -3\n• 'vier keer zoveel' → ·4\n• 'helft van' → /2\n• 'is gelijk aan' / 'het resultaat is' / 'wordt' → =\n\n**Voorbeeld 2**: \"Mijn vader is 4 keer zo oud als ik. Samen zijn we 50. Hoe oud ben ik?\"\n• Mijn leeftijd = x. Vaders leeftijd = 4x.\n• Samen = 50: x + 4x = 50.\n• 5x = 50 → x = 10. Ik ben 10, vader is 40.\n\n**Tip**: kies een **duidelijke variabele** (vaak x voor wat je zoekt). Schrijf even op wat x betekent in jouw context, voorkom verwarring.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">woord → formule → oplossing</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.muted}" font-size="11" font-family="Arial">"3 keer een getal + 5 = 26"</text>
<text x="35" y="92" fill="${COLORS.alt}" font-size="11" font-family="Arial">↓ vertaling</text>
<text x="35" y="112" fill="${COLORS.text}" font-size="13" font-family="monospace">3x + 5 = 26</text>
<text x="35" y="132" fill="${COLORS.alt}" font-size="11" font-family="Arial">↓ oplossen</text>
<text x="35" y="152" fill="${COLORS.good}" font-size="14" font-family="monospace" font-weight="bold">x = 7</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">'is gelijk aan' / 'wordt' / 'resultaat is' = →</text>
</svg>`,
    checks: [
      {
        q: "*\"Ik denk aan een getal. Ik trek er 7 vanaf en het resultaat is 12.\" Welke vergelijking past?*",
        options: [
          "x − 7 = 12",
          "x + 7 = 12",
          "7 − x = 12",
          "7x = 12",
        ],
        answer: 0,
        wrongHints: [
          null,
          "'Trek er 7 vanaf' = -7, niet +7.",
          "'Trek er 7 vanaf' = van x af, niet van 7 af. x − 7, niet 7 − x.",
          "'Vermenigvuldigen met 7' zou 7x zijn. Hier wordt afgetrokken.",
        ],
      },
      {
        q: "*Los op: \"3 keer een getal min 4 = 11.\"*",
        options: ["x = 5", "x = 7", "x = 4", "x = 15"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 3·7 - 4 = 17, niet 11.",
          "Check: 3·4 - 4 = 8, niet 11.",
          "Check: 3·15 - 4 = 41, niet 11.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Mixed — alle types samen",
    explanation: "Vier vragen die alle hoofdstukken combineren. Eenvoudige, met x aan beide kanten, met haakjes, en woordvergelijkingen.\n\n**Tip**: schrijf altijd elke stap netjes op, met de actie in de marge. Veel fouten ontstaan door 'in het hoofd' rekenen — opschrijven helpt.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">x = ?</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">los systematisch op 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 3x − 5 = 16.*",
        options: ["x = 7", "x = 11/3", "x = 17/3", "x = 21"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 3·(11/3) - 5 = 11 - 5 = 6, niet 16. Vergeet niet eerst de -5 weg te halen.",
          "Niet zo'n breuk. Doe eerst +5 aan beide kanten: 3x = 21. Daarna :3.",
          "21 zou pas correct zijn als de stap '+5' gedaan is, maar dan delen door 3 nog vergeten.",
        ],
      },
      {
        q: "*Los op: 4x + 7 = 2x + 13.*",
        options: ["x = 3", "x = 5", "x = 10", "x = 6"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 4·5+7 = 27, 2·5+13 = 23. Niet gelijk.",
          "Check: 4·10+7 = 47, 2·10+13 = 33. Niet gelijk.",
          "Check: 4·6+7 = 31, 2·6+13 = 25. Niet gelijk.",
        ],
      },
      {
        q: "*Los op: 2(x − 3) = 8.*",
        options: ["x = 7", "x = 5", "x = 4", "x = 11"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 2(5-3) = 4, niet 8.",
          "Check: 2(4-3) = 2, niet 8.",
          "Check: 2(11-3) = 16, niet 8.",
        ],
      },
      {
        q: "*\"Een getal verdubbeld + 6 is gelijk aan 20.\" Welk getal?*",
        options: ["7", "10", "13", "26"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 2·10 + 6 = 26, niet 20.",
          "Check: 2·13 + 6 = 32, niet 20.",
          "Check: 2·26 + 6 = 58, niet 20. Te groot.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht — examen-stijl",
    explanation: "Laatste vier examen-style vragen.\n\n**Tip**: bij examen-vraagstukken — lees twee keer voor je begint te rekenen. En controleer altijd je antwoord door het in te vullen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.good}" font-size="32" font-family="Arial" font-weight="bold">examen</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">stijl</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">controleer altijd! 🎯</text>
</svg>`,
    checks: [
      {
        q: "*Los op: 5(x + 2) − 3 = 2x + 19.*",
        options: ["x = 4", "x = 5", "x = 6", "x = 3"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 5(5+2)-3 = 32, 2·5+19 = 29. Niet gelijk.",
          "Check: 5(6+2)-3 = 37, 2·6+19 = 31. Niet gelijk.",
          "Check: 5(3+2)-3 = 22, 2·3+19 = 25. Niet gelijk.",
        ],
      },
      {
        q: "*Los op: x/3 + 5 = x/2 + 1.*",
        options: ["x = 24", "x = 6", "x = 12", "x = 8"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 6/3+5 = 7, 6/2+1 = 4. Niet gelijk.",
          "Check: 12/3+5 = 9, 12/2+1 = 7. Niet gelijk.",
          "Check: 8/3+5 ≈ 7.67, 8/2+1 = 5. Niet gelijk.",
        ],
      },
      {
        q: "*Een fietsenmaker rekent 25 euro voor inspectie + 8 euro per uur werk. Voor de hele klus betaalde je 65 euro. Hoeveel uur werk?*",
        options: [
          "5 uur (25 + 8u = 65)",
          "8 uur",
          "3 uur",
          "10 uur",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Check: 25 + 8·8 = 89, niet 65.",
          "Check: 25 + 8·3 = 49, niet 65.",
          "Check: 25 + 8·10 = 105, niet 65.",
        ],
      },
      {
        q: "*Los op: 2(3x − 1) = 4x + 6.*",
        options: ["x = 4", "x = 2", "x = 3", "x = 8"],
        answer: 0,
        wrongHints: [
          null,
          "Check: 2(3·2-1) = 10, 4·2+6 = 14. Niet gelijk.",
          "Check: 2(3·3-1) = 16, 4·3+6 = 18. Niet gelijk.",
          "Check: 2(3·8-1) = 46, 4·8+6 = 38. Niet gelijk.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const vergelijkingenOplossen = {
  id: "vergelijkingen-oplossen",
  title: "Vergelijkingen oplossen",
  emoji: "⚖️",
  level: "klas2-vmbo-vwo",
  subject: "wiskunde",
  topics: ["WI.algebra.vergelijking"],
  intro:
    "Lineaire vergelijkingen oplossen met de balans-methode: van eenvoudige x + a = b, via vergelijkingen met x aan beide kanten en haakjes/breuken, tot woordvergelijkingen. Voorbereiding op alle latere algebra (lineaire formules, kwadratische vergelijkingen, stelsels).",
  triggerKeywords: [
    "vergelijking", "vergelijkingen oplossen", "x oplossen",
    "balans", "haakjes wegwerken", "woordvergelijking",
    "x aan beide kanten", "isoleren x",
  ],
  chapters,
  steps,
};

export default vergelijkingenOplossen;

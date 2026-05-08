// Leerpad: Verhoudingen — voor groep 5-8 (PO-versie)
// 6 stappen in 5 hoofdstukken. Cito-stijl praktijksommen.
// Sprint-5+ S4 (2026-05-08).

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["⚖️","🍋","📋","🍪","🗺️","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een verhouding?", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Recepten — siroop en water", emoji: "🍋", from: 1, to: 1 },
  { letter: "C", title: "Verhoudingstabel", emoji: "📋", from: 2, to: 2 },
  { letter: "D", title: "Recepten omrekenen + schaal", emoji: "🍪", from: 3, to: 4 },
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function siroopSvg() {
  return `<svg viewBox="0 0 300 200">
<rect x="0" y="0" width="300" height="200" fill="${COLORS.paper}"/>
<text x="150" y="22" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">Limonade-recept: 1 : 4</text>
<rect x="40" y="60" width="50" height="80" fill="rgba(255,213,79,0.55)" stroke="${COLORS.point}" stroke-width="2"/>
<text x="65" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">1</text>
<text x="65" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">siroop</text>
<text x="105" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial" font-weight="bold">:</text>
<rect x="120" y="60" width="140" height="80" fill="rgba(105,178,255,0.3)" stroke="#69b2ff" stroke-width="2"/>
<text x="190" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">4</text>
<text x="190" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">water</text>
<text x="150" y="188" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">5 delen totaal: 1 deel siroop + 4 delen water</text>
</svg>`;
}

function tabelSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">Verhoudingstabel — limonade</text>
<rect x="20" y="35" width="280" height="120" fill="rgba(0,200,83,0.05)" stroke="${COLORS.curve}" stroke-width="1.2" rx="6"/>
<text x="80" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">siroop (mL)</text>
<text x="240" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">water (mL)</text>
<line x1="20" y1="68" x2="300" y2="68" stroke="${COLORS.curve}" stroke-width="0.8"/>
<line x1="160" y1="35" x2="160" y2="155" stroke="${COLORS.curve}" stroke-width="0.5"/>
<text x="80" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">100</text>
<text x="240" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">400</text>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">200</text>
<text x="240" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">800</text>
<text x="80" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">300</text>
<text x="240" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">1200</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is een verhouding?",
    explanation: "Een **verhouding** zegt hoe twee dingen zich tot elkaar **verhouden**. Niet de losse getallen, maar de **verhouding** ertussen.\n\n**Voorbeelden**:\n• In een klas zitten 8 jongens en 12 meisjes. Verhouding **jongens : meisjes = 8 : 12 = 2 : 3**.\n• Een limonade-recept: 1 deel siroop op 4 delen water. Verhouding **1 : 4**.\n• Op een schoolplein 50 fietsen en 25 steps. Verhouding **2 : 1**.\n\n**Notatie**: we schrijven het met een **dubbelpunt** ':' (lees: 'tot').\n\n**Vereenvoudigen**: net als breuken kun je verhoudingen kleiner maken door beide getallen door hetzelfde te delen.\n• 8 : 12 → ÷4 → **2 : 3**\n• 50 : 25 → ÷25 → **2 : 1**\n• 100 : 400 → ÷100 → **1 : 4**\n\n**Verschil met breuk**:\n• 2/5 betekent: 2 delen van een totaal van 5.\n• 2 : 3 betekent: 2 delen naast 3 delen — totaal 5 delen.\n\n**Cito-tip**: kijk altijd of je een verhouding kunt **vereenvoudigen** voordat je verder rekent. Dat scheelt!",
    svg: siroopSvg(),
    checks: [
      {
        q: "**12 jongens en 18 meisjes** — vereenvoudigde verhouding?",
        options: ["2 : 3","12 : 18","3 : 2","1 : 1"],
        answer: 0,
        wrongHints: [null,"Klopt in aantal, maar niet vereenvoudigd. Welk getal deelt 12 én 18?","Volgorde klopt niet — vraag begint met jongens.","Past dat bij meer meisjes dan jongens?"],
      },
      {
        q: "Een verhouding **6 : 9** — vereenvoudigd?",
        options: ["2 : 3","3 : 2","6 : 9","1 : 1"],
        answer: 0,
        wrongHints: [null,"Andersom — kijk naar de volgorde.","Niet vereenvoudigd. Beide getallen kun je door iets delen.","Is 6 hetzelfde als 9?"],
      },
      {
        q: "Op het strand staan **20 fietsen en 5 brommers**. Verhouding fietsen:brommers vereenvoudigd?",
        options: ["4 : 1","20 : 5","1 : 4","5 : 20"],
        answer: 0,
        wrongHints: [null,"Niet vereenvoudigd — beide door 5 delen.","Andersom — fietsen staan eerst.","Niet vereenvoudigd, en andersom."],
      },
    ],
  },

  {
    title: "Recept — siroop en water",
    explanation: "Verhoudingen kom je vaak tegen bij **recepten**.\n\n**Voorbeeld**: limonade-recept zegt 1 : 4 (1 deel siroop op 4 delen water).\n\nAls je een **glas vult van 200 mL**:\n• 1 + 4 = **5 delen totaal** in één glas.\n• Elk deel = 200 ÷ 5 = **40 mL**.\n• Dus: **40 mL siroop + 160 mL water**.\n\n**Slimme aanpak — denk in 'delen'**:\n• Bij 1 : 4 zit 1 deel van 5 = **1/5** in siroop.\n• Bij 2 : 3 zit 2 deel van 5 = **2/5** in het eerste.\n• Bij 3 : 7 zit 3 deel van 10 = **3/10** in het eerste.\n\n**Voorbeeld 2**: een schip-bemanning is 1 : 5 (kapitein : matrozen). Als er 24 mensen zijn:\n• 1 + 5 = 6 delen.\n• Elk deel = 24 ÷ 6 = 4.\n• Kapiteins: 1 × 4 = **4**.\n• Matrozen: 5 × 4 = **20**.\n• Check: 4 + 20 = 24 ✓.\n\n**Cito-truc**: tel altijd eerst **alle delen samen** (1 + 4 = 5, 2 + 3 = 5, etc.). Verdeel dan het totaal door dat getal — en je kent de waarde van **één deel**.",
    checks: [
      {
        q: "Een recept zegt **1 : 3 (siroop : water)**. Voor een glas van **400 mL** — hoeveel **siroop**?",
        options: ["100 mL","200 mL","133 mL","300 mL"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is de helft. 1 : 3 betekent 1 deel van 4.","Past niet bij hele delen — dat zou 1:3 niet rond uitkomen.","Te veel — dat is het water-deel."],
      },
      {
        q: "Verhouding **2 : 5** in een klas van **28 leerlingen**. Hoeveel zijn de eerste groep?",
        options: ["8","10","20","14"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je per ongeluk 5 delen genomen?","Veel te veel — dat is de tweede groep.","Te veel — dat is de helft."],
      },
      {
        q: "Een mengsel **3 : 1 (zand : cement)**. Bij **20 kg totaal** — hoeveel **cement**?",
        options: ["5 kg","15 kg","4 kg","6 kg"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is het zand-deel.","Te weinig — denk: 4 delen totaal van 20.","Te weinig."],
      },
    ],
  },

  {
    title: "Verhoudingstabel — denk in stapjes",
    explanation: "De **verhoudingstabel** is de Cito-favoriet. Je vult getallen in een tabel die de verhouding vasthoudt.\n\n**Voorbeeld**: limonade 1 : 4. Bij 100 mL siroop hoort 400 mL water.\n\n| siroop | water |\n|--------|-------|\n| 100 mL | 400 mL |\n| 200 mL | 800 mL |\n| 300 mL | 1200 mL |\n\n**Regel**: wat je met 1 kant doet, doe je ook met de **andere kant** (× of ÷ met hetzelfde getal).\n\n• 100 → 200 = × 2 → ook water: 400 → 800.\n• 100 → 50 = ÷ 2 → ook water: 400 → 200.\n• 100 → 250 = × 2,5 → ook water: 400 → 1000.\n\n**Stappen voor moeilijke vragen**:\n*'4 broden kosten € 12. Wat kosten 7 broden?'*\n\n| broden | euro |\n|--------|------|\n| 4 | 12 |\n| 1 | 3 *(deel door 4)* |\n| 7 | 21 *(maal 7)* |\n\nDus 7 broden kosten **€ 21**.\n\n**Cito-truc — 'tussenstap via 1'**:\nAls de getallen niet handig delen, ga eerst naar **1** *(eenheid-prijs)* en dan naar het gewenste aantal.",
    svg: tabelSvg(),
    checks: [
      {
        q: "**3 broden = € 6**. Wat kosten **5 broden**?",
        options: ["€ 10","€ 9","€ 12","€ 8"],
        answer: 0,
        wrongHints: [null,"Te weinig — eerst per brood: € 6 ÷ 3 = €2. Dus 5 × €2.","Te veel — heb je per ongeluk × 6 gedaan?","Te weinig."],
      },
      {
        q: "**Verhouding 2 : 5**. Bij **40** voor de eerste — hoeveel voor de tweede?",
        options: ["100","20","8","16"],
        answer: 0,
        wrongHints: [null,"Te weinig — denk: 2 → 40 is × 20. Dus 5 × 20.","Te weinig — dat is alleen voor 1 deel.","Te weinig — ander deel rekening."],
      },
      {
        q: "**Recept 4 : 3 (meel : suiker) bij 200 g meel** — hoeveel **suiker**?",
        options: ["150 g","250 g","100 g","75 g"],
        answer: 0,
        wrongHints: [null,"Te veel — kijk: meel is groter (4) dan suiker (3), dus suiker is minder.","Te weinig — denk via 1 deel.","Te weinig — heb je halveren ipv evenredig?"],
      },
    ],
  },

  {
    title: "Recepten omrekenen — voor meer of minder mensen",
    explanation: "Een recept is meestal voor **een vast aantal mensen**. Bij meer of minder mensen reken je het hele recept om.\n\n**Voorbeeld**: pannenkoek-recept voor **4 personen**:\n• 200 g meel\n• 400 mL melk\n• 2 eieren\n\n**Voor 6 personen** *(× 1,5)*:\n• 200 × 1,5 = **300 g meel**\n• 400 × 1,5 = **600 mL melk**\n• 2 × 1,5 = **3 eieren**\n\n**Voor 1 persoon** *(÷ 4)*:\n• 200 ÷ 4 = 50 g meel\n• 400 ÷ 4 = 100 mL melk\n• 2 ÷ 4 = ½ ei (in praktijk: 1 ei voor 2 mensen)\n\n**Cito-aanpak**:\n1. **Welke factor?** Aantal nieuwe mensen ÷ aantal oude mensen.\n2. **Vermenigvuldig** alle ingrediënten met die factor.\n\n**Voorbeeld 2 — recept voor 8, jij maakt voor 6**:\n• Factor = 6/8 = 0,75 *(ofwel ÷ 8 × 6)*.\n• Alle ingrediënten × 0,75.\n\n**Cito-truc voor mooie getallen**:\nGa via 1 persoon. Als recept voor 8 = 200g, dan 1 persoon = 25g. Voor 6 = 6 × 25 = 150g. Sneller dan met komma-factor rekenen.",
    checks: [
      {
        q: "Recept voor **4 personen** gebruikt **300 g pasta**. Voor **6 personen**?",
        options: ["450 g","400 g","500 g","600 g"],
        answer: 0,
        wrongHints: [null,"Te weinig — ga via 1 persoon: 300 ÷ 4 = 75 per persoon.","Te veel — heb je gewoon × 2 gedaan?","Veel te veel — dat zou voor 8 zijn."],
      },
      {
        q: "Limonade voor **8 mensen** = **1 L water**. Voor **3 mensen**?",
        options: ["375 mL","300 mL","250 mL","500 mL"],
        answer: 0,
        wrongHints: [null,"Te weinig — denk: 1 L ÷ 8 = 125 mL per persoon. × 3.","Te weinig — dat is voor 2 personen.","Te veel — dat is voor 4 personen."],
      },
      {
        q: "Een **schaal van 1 : 100** op een kaart. **Werkelijke afstand 5 km** — hoeveel **cm op de kaart**?",
        options: ["5 cm","50 cm","500 cm","0,5 cm"],
        answer: 0,
        wrongHints: [null,"Te veel — bij 1:100 is alles 100 keer kleiner.","Veel te veel.","Te weinig — heb je ÷ 1000 gedaan?"],
      },
    ],
  },

  {
    title: "Schaal op de kaart",
    explanation: "Een **schaal** is een **verhouding** tussen kaart-afstand en werkelijke afstand.\n\n**Voorbeeld**: schaal **1 : 100.000** betekent: 1 cm op de kaart = 100.000 cm in het echt = **1 km**.\n\n**Belangrijke schalen** (schoolse kaarten):\n• 1 : 100 → 1 cm = 1 m (plattegrond kamer)\n• 1 : 1.000 → 1 cm = 10 m (school-plattegrond)\n• 1 : 10.000 → 1 cm = 100 m (klein gebied)\n• 1 : 100.000 → 1 cm = 1 km (regio-kaart)\n• 1 : 1.000.000 → 1 cm = 10 km (provincie-kaart)\n\n**Aanpak — twee soorten vragen**:\n\n**A. Kaart → werkelijk** *(meten naar werkelijkheid)*:\n• Op kaart staat 5 cm + schaal 1 : 100.000.\n• 5 × 100.000 = 500.000 cm = 5.000 m = **5 km**.\n\n**B. Werkelijk → kaart** *(plannen op kaart)*:\n• Werkelijke afstand 8 km = 800.000 cm.\n• Bij schaal 1 : 100.000: 800.000 ÷ 100.000 = **8 cm op kaart**.\n\n**Truc voor schaal 1 : 100.000** *(meest gebruikt)*:\n• 1 cm op kaart = 1 km in echt. Heel simpel.\n• Werkelijke km = direct cm op kaart.\n\n**Cito-tip**:\nLet op **eenheden**! Schaal-getallen werken in cm. Reken alles eerst naar cm voor je deelt of vermenigvuldigt.",
    checks: [
      {
        q: "Schaal **1 : 100.000**. Op kaart **3 cm** — werkelijk?",
        options: ["3 km","30 km","300 m","30 m"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je per ongeluk × 1 miljoen gedaan?","Te weinig — bij 1:100.000 is 1 cm = 1 km.","Veel te weinig."],
      },
      {
        q: "Een tuin is **15 m breed**. Op een schaal **1 : 100** kaart — hoeveel **cm**?",
        options: ["15 cm","1,5 cm","150 cm","1500 cm"],
        answer: 0,
        wrongHints: [null,"Te weinig — bij 1:100 is 1 m = 1 cm. Dus 15 m = 15 cm.","Te veel — dat is werkelijk 150 m.","Veel te veel."],
      },
      {
        q: "Schaal **1 : 50**. Op kaart staat **8 cm**. **Werkelijke afstand**?",
        options: ["4 m","400 m","80 m","8 m"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je × 5000 ipv × 50 gedaan?","Te veel — heb je × 1000 gedaan?","Te weinig — heb je 1:50 als 1:1 gelezen?"],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — verhoudingen mix",
    explanation: "Mix-toets in echte Cito-stijl. Verschillende verhoudings-vragen door elkaar — recept, schaal, klas, kostprijs.\n\n**Hint**: maak voor lastige vragen een **tabel** op kladpapier en vul in stapjes in.\n\nVeel succes!",
    checks: [
      {
        q: "Een fles van **750 mL** kost **€ 3,75**. Wat is de **prijs per 100 mL**?",
        options: ["€ 0,50","€ 5,00","€ 0,75","€ 0,30"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je × 100 ipv ÷ gedaan?","Te veel — dat is meer dan de hele fles.","Te weinig — denk: 750 mL = 7,5 × 100 mL."],
      },
      {
        q: "Verhouding **3 : 5 (rood : blauw)**. **24 rode** ballonnen — hoeveel **blauwe**?",
        options: ["40","16","30","8"],
        answer: 0,
        wrongHints: [null,"Te weinig — denk: 3 → 24 is × 8. Dus 5 × 8.","Te weinig — heb je verhouding goed?","Te weinig — dat is niet 5 × 8."],
      },
      {
        q: "Pannenkoek-recept voor **4 mensen** = **300 g meel**. Voor **10 mensen**?",
        options: ["750 g","600 g","800 g","450 g"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je × 2 gedaan ipv × 2,5?","Te veel — dat zou voor meer dan 10 zijn.","Te weinig — dat is voor 6 mensen."],
      },
      {
        q: "Schaal **1 : 200**. Op kaart staat **9 cm** — werkelijk?",
        options: ["18 m","9 m","180 m","1,8 m"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je × 100 ipv × 200 gedaan?","Te veel — heb je × 2000 gedaan?","Te weinig — heb je × 20 gedaan?"],
      },
      {
        q: "**Klas A: 12 jongens, 16 meisjes. Klas B: 9 jongens, 12 meisjes**. Welke klas heeft **dezelfde verhouding** jongens:meisjes?",
        options: ["Beide hetzelfde (3:4)","Klas A heeft meer jongens","Klas B heeft meer jongens","Niet te zeggen"],
        answer: 0,
        wrongHints: [null,"Vereenvoudig beide: 12:16 = 3:4 en 9:12 = ?","Vereenvoudig beide tot dezelfde-noemer-vorm.","Wel te zeggen — vereenvoudig de verhoudingen."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const verhoudingenPo = {
  id: "verhoudingen-po",
  title: "Verhoudingen — Cito groep 5-8",
  emoji: "⚖️",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Verhoudingen — recepten en schaal",
  intro:
    "Verhoudingen voor groep 5-8: wat is een verhouding, recepten omrekenen, verhoudingstabellen, schaal op de kaart. Cito-stijl praktijksommen. ~15 min.",
  triggerKeywords: [
    "verhouding","verhoudingen","recept","schaal","kaart",
    "vereenvoudigen","verhoudingstabel","mengsel","omrekenen",
  ],
  chapters,
  steps,
};

export default verhoudingenPo;

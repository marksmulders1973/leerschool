// Leerpad: Volgorde van bewerkingen + haakjes
// 7 stappen in 4 hoofdstukken (A t/m D).
// Doelgroep: groep 5-7 basisschool. Cito-relevant.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  warm: "#ffd54f",
  alt: "#ff7043",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  haakje: "#ec407a",
  macht: "#9be069",
  vermenig: "#5d9cec",
  optellen: "#ffd54f",
  fout: "#ef5350",
  good2: "#00c853",
};

const stepEmojis = ["🤔","🟦","🟨","🟩","➕","🔍","🏆"];

const chapters = [
  { letter: "A", title: "Het probleem", emoji: "🤔", from: 0, to: 0 },
  { letter: "B", title: "De volgorde-regel", emoji: "🟦", from: 1, to: 2 },
  { letter: "C", title: "Haakjes + machten", emoji: "🟩", from: 3, to: 4 },
  { letter: "D", title: "Lastige + eindopdracht", emoji: "🏆", from: 5, to: 6 },
];

// Visualisatie van een rekenstap met 4 niveaus
function volgordeSvg() {
  const niveaus = [
    { naam: "1. Haakjes", icon: "( )", kleur: COLORS.haakje, voorbeeld: "(2 + 3) = 5" },
    { naam: "2. Machten", icon: "x²", kleur: COLORS.macht, voorbeeld: "3² = 9" },
    { naam: "3. × en :", icon: "×÷", kleur: COLORS.vermenig, voorbeeld: "4 × 5 = 20" },
    { naam: "4. + en −", icon: "+−", kleur: COLORS.optellen, voorbeeld: "8 − 3 = 5" },
  ];
  return `<svg viewBox="0 0 320 280">
<rect x="0" y="0" width="320" height="280" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Volgorde van bewerkingen — 4 stappen</text>

${niveaus.map((n, i) => {
  const y = 45 + i * 55;
  return `
<rect x="20" y="${y}" width="280" height="44" rx="8" fill="${n.kleur}" opacity="0.30" stroke="${n.kleur}" stroke-width="1.5"/>
<text x="40" y="${y + 27}" fill="${n.kleur}" font-size="22" font-family="Arial" font-weight="bold">${n.icon}</text>
<text x="100" y="${y + 18}" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">${n.naam}</text>
<text x="100" y="${y + 35}" fill="${COLORS.muted}" font-size="11" font-family="Arial">Voorbeeld: ${n.voorbeeld}</text>`;
}).join('')}

<text x="160" y="270" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-style="italic">Trucje: 'Hé Maria, Voor Vader Op'</text>
</svg>`;
}

// Voorbeeld-uitwerking-stappen visueel
function uitwerkingSvg(steps) {
  return `<svg viewBox="0 0 320 ${50 + steps.length * 36}">
<rect x="0" y="0" width="320" height="${50 + steps.length * 36}" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">Stap voor stap uitwerken</text>

${steps.map((s, i) => {
  const y = 40 + i * 36;
  return `
<text x="20" y="${y + 15}" fill="${COLORS.muted}" font-size="14" font-family="Arial">Stap ${i + 1}:</text>
<text x="100" y="${y + 15}" fill="${COLORS.text}" font-size="15" font-family="monospace" font-weight="bold">${s.expr}</text>
<text x="160" y="${y + 30}" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-style="italic">${s.uitleg}</text>`;
}).join('')}
</svg>`;
}

const steps = [
  {
    title: "Het probleem — wat eerst doen?",
    explanation: "Als je een **rekensom** hebt met meerdere getallen en bewerkingen, **maakt het uit in welke volgorde je ze doet**.\n\n**Voorbeeld**: **2 + 3 × 4** = ?\n\nTwee mogelijke antwoorden:\n• Optie A: van links naar rechts → 2 + 3 = 5, dan 5 × 4 = **20**.\n• Optie B: vermenigvuldigen eerst → 3 × 4 = 12, dan 2 + 12 = **14**.\n\nWelke is goed? **14** is goed.\n\nWaarom? **Omdat 'maal' altijd vóór 'plus' gaat**. Dat is een **wereldwijde wiskundige afspraak**.\n\nAnders zou iedereen een ander antwoord krijgen, en kunnen we niet meer rekenen met elkaar!\n\n**Het probleem**: kinderen rekenen vaak **van links naar rechts**, alsof bij lezen. Dat is **fout** bij rekenen waar bewerkingen gemixt zijn.\n\n**Andere voorbeelden**:\n• **10 − 6 ÷ 2** = 10 − 3 = **7** (delen eerst, dan aftrekken)\n• **5 + 2 × 3** = 5 + 6 = **11** (× eerst)\n• **8 ÷ 2 + 3** = 4 + 3 = **7** (÷ eerst)\n\n**De regel** *(in dit pad uitgelegd)*:\n1. **Haakjes** eerst\n2. **Machten** (zoals 3² = 9)\n3. **Vermenigvuldigen + delen**\n4. **Optellen + aftrekken**\n\nGeheugentruc Nederlands: '**H**aakjes, **M**achten, **V**ermenigvuldigen, **D**elen, **O**ptellen, **A**ftrekken' = **HMVDOA**.\n\nVeel scholen leren ook: **'M**aal **e**erst' (M staat voor maal/×).\n\n**Belangrijk**: × en ÷ zijn **even sterk** — werken die in dezelfde stap. Idem + en −.",
    svg: volgordeSvg(),
    checks: [
      {
        q: "**2 + 3 × 4** = ?",
        options: ["14","20","11","24"],
        answer: 0,
        wrongHints: [null,"Vergeet niet: × eerst — 3×4=12, dan 2+12=14.","Te weinig.","Te veel."],
      },
      {
        q: "Wat doe je **eerst** als er + en × in een som staan?",
        options: ["Vermenigvuldigen","Optellen","Maakt niet uit","Van links naar rechts"],
        answer: 0,
        wrongHints: [null,"Andersom — × is sterker dan +.","Wel uit — er is een vaste regel.","Niet bij rekenen — er is een volgorde-regel."],
      },
    ],
  },
  {
    title: "De volgorde-regel — × en ÷ vóór + en −",
    explanation: "**Regel**: **vermenigvuldigen** (×) en **delen** (÷) komen **vóór** **optellen** (+) en **aftrekken** (−).\n\n**Voorbeelden** *(stap voor stap)*:\n\n**Voorbeeld 1**: 2 + 3 × 4\n• Eerst ×: 3 × 4 = 12\n• Dan +: 2 + 12 = **14**\n\n**Voorbeeld 2**: 10 − 6 ÷ 2\n• Eerst ÷: 6 ÷ 2 = 3\n• Dan −: 10 − 3 = **7**\n\n**Voorbeeld 3**: 5 × 4 + 3 × 2\n• Eerst beide ×: 5×4 = 20, en 3×2 = 6\n• Dan +: 20 + 6 = **26**\n\n**Voorbeeld 4**: 8 + 12 ÷ 4 − 5\n• Eerst ÷: 12 ÷ 4 = 3\n• Dan om-de-buurt + en − van links naar rechts:\n  - 8 + 3 = 11\n  - 11 − 5 = **6**\n\n**Belangrijk: × en ÷ zijn even sterk**\nAls er meerdere × en ÷ in een som staan, doe ze van **links naar rechts**:\n• 12 ÷ 3 × 2 = (12 ÷ 3) × 2 = 4 × 2 = **8**\n• 24 × 2 ÷ 6 = (24 × 2) ÷ 6 = 48 ÷ 6 = **8**\n\n**Idem voor + en −**: even sterk, links naar rechts:\n• 10 − 3 + 5 = (10 − 3) + 5 = 7 + 5 = **12**\n• 8 + 4 − 6 = (8 + 4) − 6 = 12 − 6 = **6**\n\n**Trucje om bewerkingen te onthouden**:\n• × en ÷ zijn **stronger** (\"krachtiger\")\n• + en − zijn **swakker** (\"basiser\")\n\nDoe altijd eerst de stronkere bewerkingen.\n\n**Veelvoorkomende fout**:\nKinderen rekenen \"5 + 2 × 3\" als (5+2)×3 = 21. Maar correct is 5 + 6 = **11**. Onthoud: × eerst!",
    svg: uitwerkingSvg([
      { expr: "2 + 3 × 4", uitleg: "Eerst de × doen" },
      { expr: "= 2 + 12", uitleg: "Nu het optellen" },
      { expr: "= 14", uitleg: "Klaar!" },
    ]),
    checks: [
      {
        q: "**5 × 4 + 3** = ?",
        options: ["23","35","27","19"],
        answer: 0,
        wrongHints: [null,"Welke bewerking gaat eerst — × of +? Pak die eerst, dan de rest.","Te veel — heb je de × eerst gedaan?","Te weinig — heb je de × wel meegenomen?"],
      },
      {
        q: "**12 − 6 ÷ 3** = ?",
        options: ["10","2","6","4"],
        answer: 0,
        wrongHints: [null,"Eerst ÷: 6÷3=2, dan 12-2=10.","Dat zou (12-6)÷3 zijn met haakjes.","Anders.","Anders."],
      },
      {
        q: "**6 × 2 + 4 × 3** = ?",
        options: ["24","36","48","20"],
        answer: 0,
        wrongHints: [null,"Welke twee onderdelen pak je eerst — beide ×? Doe ze los van elkaar.","Niet (6×2+4)×3 — × bindt sterker dan + zonder haakjes.","Te veel — je rekent waarschijnlijk haakjes om de hele som.","Te weinig — heb je beide × meegenomen?"],
      },
    ],
  },
  {
    title: "Haakjes — boss boven alles",
    explanation: "**Haakjes ( )** kunnen de volgorde **veranderen**.\n\nWat tussen haakjes staat, doe je **EERST** — vóór alles anders!\n\n**Vergelijk**:\n\n*Zonder haakjes*:\n**2 + 3 × 4** = 2 + 12 = **14** *(× eerst)*\n\n*Met haakjes*:\n**(2 + 3) × 4** = 5 × 4 = **20** *(haakjes eerst)*\n\nDe haakjes **forceren** dat 2 + 3 als eerste berekend wordt.\n\n**Voorbeelden**:\n\n**Voorbeeld 1**: (4 + 6) × 3\n• Eerst haakjes: 4 + 6 = 10\n• Dan ×: 10 × 3 = **30**\n\n**Voorbeeld 2**: 8 × (5 − 2)\n• Eerst haakjes: 5 − 2 = 3\n• Dan ×: 8 × 3 = **24**\n\n**Voorbeeld 3**: (10 + 5) ÷ (1 + 2)\n• Eerst beide haakjes: (15) ÷ (3)\n• Dan ÷: 15 ÷ 3 = **5**\n\n**Geneste haakjes** *(haakjes binnen haakjes)*:\n\n**Voorbeeld**: 3 × ((4 + 2) − 1)\n• Eerst de **binnenste** haakjes: 4 + 2 = 6\n• Dan de **buitenste** haakjes: 6 − 1 = 5\n• Tot slot ×: 3 × 5 = **15**\n\nWerkje van **binnen** naar **buiten**.\n\n**Wanneer gebruik je haakjes?**\n• Om volgorde te forceren: '(2+3)×4' ipv '2+3×4'.\n• Om duidelijkheid: zelfs als niet nodig, soms voor leesbaarheid.\n• In wiskunde-formules constant: omtrek = 2(l + b).\n\n**Pas op met deelstrepen**:\n• 12 ÷ (4 + 2) = 12 ÷ 6 = 2\n• 12 ÷ 4 + 2 = 3 + 2 = 5 (geheel anders!)\n\nHaakjes maken het verschil.",
    svg: uitwerkingSvg([
      { expr: "(2 + 3) × 4", uitleg: "Eerst haakjes" },
      { expr: "= 5 × 4", uitleg: "Nu de ×" },
      { expr: "= 20", uitleg: "Klaar!" },
    ]),
    checks: [
      {
        q: "**(4 + 6) × 3** = ?",
        options: ["30","22","18","13"],
        answer: 0,
        wrongHints: [null,"Eerst haakjes: 10, dan ×3 = 30.","Niet 4+6×3 — haakjes!","Te weinig.","Te weinig."],
      },
      {
        q: "**3 × (4 + 2) − 1** = ?",
        options: ["17","11","9","21"],
        answer: 0,
        wrongHints: [null,"Werk van binnen naar buiten: doe eerst de haakjes, dan ×, dan −.","Heb je de haakjes als eerste gedaan?","Heb je de × en − in de juiste volgorde gedaan?","Niet zo — werk van binnen naar buiten."],
      },
      {
        q: "Wat doe je bij **haakjes binnen haakjes**?",
        options: ["Eerst binnenste, dan buitenste","Eerst buitenste","Maakt niet uit","Negeren"],
        answer: 0,
        wrongHints: [null,"Andersom — van binnen naar buiten.","Wel uit — verschillende antwoorden mogelijk.","Niet negeren."],
      },
    ],
  },
  {
    title: "Machten (kwadraten) komen na haakjes",
    explanation: "Een **macht** is een afkorting voor herhaaldelijk vermenigvuldigen.\n\n**Voorbeelden**:\n• **3²** = 3 × 3 = **9** *(uitspraak: 'drie kwadraat' of 'drie tot de tweede macht')*\n• **2³** = 2 × 2 × 2 = **8** *(uitspraak: 'twee tot de derde macht')*\n• **5²** = 5 × 5 = **25**\n• **10²** = 10 × 10 = **100**\n• **10³** = 10 × 10 × 10 = **1.000**\n\n**De macht** zegt hoe vaak je het grondtal met zichzelf vermenigvuldigt. **3² = 3 × 3** (twee keer 3, dus 'tot de tweede').\n\n**Volgorde-regel met machten**:\n\nMachten komen **NA haakjes** maar **VOOR × en ÷ en + en −**.\n\nDus:\n1. **Haakjes**\n2. **Machten** ← deze stap\n3. × en ÷\n4. + en −\n\n**Voorbeelden**:\n\n**Voorbeeld 1**: 5 + 3²\n• Eerst macht: 3² = 9\n• Dan +: 5 + 9 = **14**\n\n**Voorbeeld 2**: 4 × 2² + 1\n• Eerst macht: 2² = 4\n• Dan ×: 4 × 4 = 16\n• Dan +: 16 + 1 = **17**\n\n**Voorbeeld 3**: (3 + 2)² − 5\n• Eerst haakjes: 3 + 2 = 5\n• Dan macht: 5² = 25\n• Dan −: 25 − 5 = **20**\n\n**Belangrijk**: machten zijn niet hetzelfde als gewone vermenigvuldiging.\n• 3² = 3 × 3 = 9 (NIET 3 × 2 = 6!)\n• 2³ = 2 × 2 × 2 = 8 (NIET 2 × 3 = 6!)\n\nDe **kleine 2** of **kleine 3** zegt **hoe vaak** je vermenigvuldigt.\n\n**Speciale machten**:\n• **n¹** = n (zelf): 5¹ = 5\n• **n⁰** = 1 (altijd!): 7⁰ = 1, 100⁰ = 1\n• **0² = 0**: 0 × 0 = 0\n\n**Trucje om machten te oefenen**:\nLeer **machten van 2** uit het hoofd: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128, 2⁸=256, 2⁹=512, 2¹⁰=1024.\n\nMachten van 10 zijn handig voor wetenschappelijk schrijven: 10² = 100, 10³ = 1.000, 10⁶ = 1.000.000 (1 miljoen).",
    svg: uitwerkingSvg([
      { expr: "5 + 3²", uitleg: "Eerst de macht: 3² = 9" },
      { expr: "= 5 + 9", uitleg: "Nu het optellen" },
      { expr: "= 14", uitleg: "Klaar!" },
    ]),
    checks: [
      {
        q: "**3²** = ?",
        options: ["9","6","5","12"],
        answer: 0,
        wrongHints: [null,"Niet 3×2.","3+3 zou zijn — geen macht.","Niet zo.","Niet zo."],
      },
      {
        q: "**2³** = ?",
        options: ["8","6","9","16"],
        answer: 0,
        wrongHints: [null,"2×2×2 = 8.","Niet 2×3.","Dat is 3².","2⁴ is 16."],
      },
      {
        q: "**4 + 5²** = ?",
        options: ["29","81","20","9"],
        answer: 0,
        wrongHints: [null,"5²=25, 4+25=29.","(4+5)²=81 — maar geen haakjes.","Niet zo.","Niet zo."],
      },
    ],
  },
  {
    title: "De volledige volgorde — alles samen",
    explanation: "**Volledige volgorde** *(één-voor-één)*:\n\n1. **Haakjes** ( ) eerst — van binnen naar buiten\n2. **Machten** (zoals 3²)\n3. **× en ÷** *(samen, van links naar rechts)*\n4. **+ en −** *(samen, van links naar rechts)*\n\n**Geheugenezels Nederlands**:\n• **HMVDOA** (Haakjes Machten Vermenigvuldigen Delen Optellen Aftrekken)\n• **'Hoe Maak Vader Diepe Open Aardlaag?'** (verzonnen rijmpje)\n\n**Engels** *(soms gebruikt)*:\n• **PEMDAS** (Parentheses Exponents Multiplication Division Addition Subtraction)\n• 'Please Excuse My Dear Aunt Sally'\n\n**Voorbeeld met alles**: 2 × (3 + 1)² − 4 ÷ 2\n• **1. Haakjes**: 3 + 1 = 4\n• Som wordt: 2 × 4² − 4 ÷ 2\n• **2. Machten**: 4² = 16\n• Som wordt: 2 × 16 − 4 ÷ 2\n• **3. × en ÷** (van links naar rechts): 2 × 16 = 32, en 4 ÷ 2 = 2\n• Som wordt: 32 − 2\n• **4. + en −**: 32 − 2 = **30**\n\n**Pas op**:\n\n**Veelvoorkomende fout 1**: aftrekken vóór delen\n• \"10 − 6 ÷ 2\" → kinderen doen vaak (10−6) ÷ 2 = 2. Fout! ÷ eerst: 10 − 3 = **7**.\n\n**Veelvoorkomende fout 2**: machten als gewone ×\n• 3² = 9, niet 6. Wees alert.\n\n**Veelvoorkomende fout 3**: alles van links naar rechts\n• \"5 + 3 × 2\" wordt 16 ipv 11. Onthoud: × is sterker!\n\n**Trucje om rustig te werken**:\nSchrijf **elke stap apart op**, zodat je niet door elkaar haalt:\n```\n2 + 3 × 4\n= 2 + 12\n= 14\n```\n\nNet zoals een kookrecept: één stap tegelijk.",
    svg: volgordeSvg(),
    checks: [
      {
        q: "**8 − 4 ÷ 2 + 1** = ?",
        options: ["7","3","5","9"],
        answer: 0,
        wrongHints: [null,"Eerst ÷: 4÷2=2, dan 8-2+1=7.","Niet zo.","Niet zo.","Niet zo."],
      },
      {
        q: "**(2 + 3)² − 5** = ?",
        options: ["20","22","11","17"],
        answer: 0,
        wrongHints: [null,"Haakjes: 5, machten: 25, -5: 20.","Niet zo.","Niet zo.","Niet zo."],
      },
      {
        q: "**3 × 2² + 4** = ?",
        options: ["16","24","28","12"],
        answer: 0,
        wrongHints: [null,"2²=4, 3×4=12, +4=16.","(3×2)²=36 — geen haakjes.","Niet zo.","3×2+4 = 10."],
      },
    ],
  },
  {
    title: "Lastige sommen — combinaties",
    explanation: "Tijd voor wat lastigere sommen waar alle regels samenkomen.\n\n**Voorbeeld 1**: 24 ÷ (2 + 4) × 3\n• Haakjes: 2 + 4 = 6\n• Som wordt: 24 ÷ 6 × 3\n• ÷ en × van links naar rechts: 24 ÷ 6 = 4, 4 × 3 = **12**\n\n**Voorbeeld 2**: 100 − 5 × (3 + 2²)\n• Macht: 2² = 4\n• Haakjes: 3 + 4 = 7\n• Som wordt: 100 − 5 × 7\n• ×: 5 × 7 = 35\n• −: 100 − 35 = **65**\n\n**Voorbeeld 3** (geneste haakjes): 2 × (3 + (4 × 2))\n• Binnenste haakjes: 4 × 2 = 8\n• Buitenste haakjes: 3 + 8 = 11\n• ×: 2 × 11 = **22**\n\n**Voorbeeld 4** (machten + haakjes): (2 + 3)² − (4 − 1)²\n• Beide haakjes: 5 en 3\n• Beide machten: 5² = 25, 3² = 9\n• Tot slot: 25 − 9 = **16**\n\n**Voorbeeld 5** (echt lastig): 50 − 2 × (3² + 1) ÷ 5\n• Macht binnen haakjes: 3² = 9\n• Haakjes: 9 + 1 = 10\n• Som wordt: 50 − 2 × 10 ÷ 5\n• × en ÷ van links naar rechts: 2 × 10 = 20, 20 ÷ 5 = 4\n• Som wordt: 50 − 4\n• −: **46**\n\n**Tips voor lastige sommen**:\n1. **Schrijf elke stap apart** — niet alles in één keer doen.\n2. **Onderlijn wat je net berekend hebt** zodat je niet vergeet.\n3. **Werk van binnen naar buiten** bij geneste haakjes.\n4. **Controleer aan het einde** — is je antwoord realistisch?\n\n**Hoe controleer je?**\nBijvoorbeeld bij 100 − 5 × 7 = 65:\n• 5 × 7 = 35 (~30, ~40 — past).\n• 100 − 35 = 65 (groter dan 100 zou raar zijn).\n• Antwoord 65 is plausibel.",
    svg: uitwerkingSvg([
      { expr: "24 ÷ (2 + 4) × 3", uitleg: "Eerst haakjes" },
      { expr: "= 24 ÷ 6 × 3", uitleg: "Nu × en ÷ links naar rechts" },
      { expr: "= 4 × 3", uitleg: "" },
      { expr: "= 12", uitleg: "Klaar!" },
    ]),
    checks: [
      {
        q: "**18 ÷ (1 + 2) × 4** = ?",
        options: ["24","6","2","12"],
        answer: 0,
        wrongHints: [null,"Haakjes:3, 18÷3=6, 6×4=24.","Niet zo — × erna.","Niet zo.","Niet zo."],
      },
      {
        q: "**2 × (4 + 3²)** = ?",
        options: ["26","18","14","49"],
        answer: 0,
        wrongHints: [null,"3²=9, 4+9=13, 2×13=26.","Niet zo.","Niet zo.","Niet zo."],
      },
      {
        q: "**(5 + 1)² − 4 × 3** = ?",
        options: ["24","60","30","12"],
        answer: 0,
        wrongHints: [null,"Haakjes:6, macht:36, ×:12, -:24.","Niet zo.","Niet zo.","Niet zo."],
      },
    ],
  },
  {
    title: "Eindopdracht",
    explanation: "**Snelle samenvatting**:\n\n**Volgorde** *(altijd):\n1. Haakjes\n2. Machten\n3. × en ÷ *(samen, links→rechts)*\n4. + en − *(samen, links→rechts)*\n\n**Geheugenezel: HMVDOA**\n\n**Tips**:\n• Schrijf elke stap apart\n• Bij geneste haakjes: van binnen naar buiten\n• Onthoud: × eerst, niet altijd van links naar rechts\n• Macht is herhaling van vermenigvuldigen, niet zomaar tweemaal\n\nVeel succes!",
    svg: volgordeSvg(),
    checks: [
      {
        q: "**3 + 4 × 2** = ?",
        options: ["11","14","9","24"],
        answer: 0,
        wrongHints: [null,"× eerst: 4×2=8, 3+8=11.","(3+4)×2 zou zijn — geen haakjes.","Niet zo.","Niet zo."],
      },
      {
        q: "**(6 − 2) × 5** = ?",
        options: ["20","-4","60","8"],
        answer: 0,
        wrongHints: [null,"Haakjes:4, ×5=20.","Niet zo.","Niet zo.","Niet zo."],
      },
      {
        q: "**5²** = ?",
        options: ["25","10","7","52"],
        answer: 0,
        wrongHints: [null,"5×5=25, niet 5+5 of 5×2.","Dat is 5+5.","Niet zo.","Niet getal in macht-vorm."],
      },
      {
        q: "**12 ÷ 4 + 3 × 2** = ?",
        options: ["9","24","30","6"],
        answer: 0,
        wrongHints: [null,"÷:3, ×:6, samen:9.","Niet zo.","Niet zo.","Niet zo."],
      },
      {
        q: "**Welke is sterker dan +?**",
        options: ["× (vermenigvuldigen)","− (aftrekken)","Geen — gelijk","( (haakje)"],
        answer: 0,
        wrongHints: [null,"− is even sterk als +.","× komt voor +.","Haakje is geen bewerking maar groep."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const volgordeBewerkingen = {
  id: "volgorde-bewerkingen",
  title: "Volgorde van bewerkingen + haakjes",
  emoji: "🧮",
  level: "groep5-7",
  subject: "rekenen",
  // SLO-referentieniveau (sprint-4 G4a): 1F kerndoel rekenen einde basis;
  // 1S = streef voor havo/vwo-bound leerlingen.
  referentieNiveau: "1F/1S",
  sloThema: "Getallen",
  intro:
    "Wat doe je eerst — × of +? De volgorde-regel HMVDOA: Haakjes, Machten, ×÷, +−. Met haakjes om volgorde te forceren, machten als kwadraat, en de bekende valkuilen. Cito-relevant voor groep 5-7.",
  triggerKeywords: [
    "volgorde bewerkingen","HMVDOA","PEMDAS","haakjes","machten","kwadraat",
    "rekenvolgorde","wat eerst","keer of plus eerst",
    "rekenen met haakjes","2+3*4","exponenten",
  ],
  chapters,
  steps,
};

export default volgordeBewerkingen;

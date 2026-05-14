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
        wrongHints: [null,"Welke bewerking gaat eerst — × of +? Probeer in die volgorde.","Te weinig — heb je de × wel meegenomen?","Te veel — kijk of je niet eerst optelt voor je vermenigvuldigt."],
        uitlegPad: {
          stappen: [{ titel: "× eerst", tekst: "× sterker dan +. Eerst 3×4=12, dan 2+12=14." }],
          woorden: [{ woord: "HMVDOA", uitleg: "Haakjes-Machten-Vermenigvuldigen-Delen-Optellen-Aftrekken." }],
          theorie: "Wereldwijde regel: × en ÷ vóór + en −. Anders zou iedereen ander antwoord krijgen.",
          voorbeelden: [{ type: "stap", tekst: "2 + 3×4 = 2 + 12 = 14. (Niet 5×4=20 — dat zou (2+3)×4 zijn met haakjes)." }],
          basiskennis: [{ onderwerp: "Niet links→rechts", uitleg: "Bij rekenen niet zoals bij lezen. Volgorde-regel telt." }],
          niveaus: { basis: "14. A.", simpeler: "× eerst: 3×4=12. Dan +: 2+12=14. = A.", nogSimpeler: "14 = A." },
        },
      },
      {
        q: "Wat doe je **eerst** als er + en × in een som staan?",
        options: ["Vermenigvuldigen","Optellen","Maakt niet uit","Van links naar rechts"],
        answer: 0,
        wrongHints: [null,"Andersom — × is sterker dan +.","Wel uit — er is een vaste regel.","Niet bij rekenen — er is een volgorde-regel."],
        uitlegPad: {
          stappen: [{ titel: "× sterker", tekst: "Vermenigvuldigen (×) gaat altijd vóór optellen (+). Vaste regel." }],
          woorden: [{ woord: "sterkte", uitleg: "× en ÷ zijn 'sterker' dan + en −. Doen ze eerst." }],
          theorie: "HMVDOA-volgorde: Haakjes → Machten → × en ÷ → + en −.",
          voorbeelden: [{ type: "tabel", tekst: "5+2×3 = 5+6=11. Niet 7×3=21." }],
          basiskennis: [{ onderwerp: "Wereldregel", uitleg: "Iedereen volgt zelfde volgorde — anders chaos." }],
          niveaus: { basis: "Vermenigvuldigen. A.", simpeler: "× is sterker dan +. Doe altijd eerst de × in een som met beide. = A.", nogSimpeler: "× = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "× eerst", tekst: "5×4=20, dan +3=23." }],
          woorden: [{ woord: "× eerst", uitleg: "Vermenigvuldigen vóór optellen, ook als × links staat." }],
          theorie: "Volgorde-regel onafhankelijk van positie: × eerst, dan +.",
          voorbeelden: [{ type: "stap", tekst: "5×4+3 = 20+3 = 23." }],
          basiskennis: [{ onderwerp: "Niet (5×4+3)", uitleg: "Geen haakjes om hele som — gewoon volgorde." }],
          niveaus: { basis: "23. A.", simpeler: "5×4=20, +3=23. (Niet 5+3 of 4+3 ipv ×). = A.", nogSimpeler: "23 = A." },
        },
      },
      {
        q: "**12 − 6 ÷ 3** = ?",
        options: ["10","2","6","4"],
        answer: 0,
        wrongHints: [null,"Eerst ÷: 6÷3=2, dan 12-2=10.","Dat zou (12-6)÷3 zijn met haakjes.","Anders.","Anders."],
        uitlegPad: {
          stappen: [{ titel: "÷ eerst", tekst: "÷ sterker dan −. Eerst 6÷3=2, dan 12-2=10." }],
          woorden: [{ woord: "÷ vóór −", uitleg: "Delen gaat vóór aftrekken (zelfde regel als × vóór +)." }],
          theorie: "× en ÷ even sterk, samen niveau 3. + en − samen niveau 4.",
          voorbeelden: [{ type: "stap", tekst: "12 − 6÷3 = 12 − 2 = 10." }],
          basiskennis: [{ onderwerp: "Niet links→rechts", uitleg: "12-6 eerst geeft 6, ÷3=2 (fout). Volgorde houden!" }],
          niveaus: { basis: "10. A.", simpeler: "÷ eerst: 6÷3=2. Dan -: 12-2=10. = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "**6 × 2 + 4 × 3** = ?",
        options: ["24","36","48","20"],
        answer: 0,
        wrongHints: [null,"Welke twee onderdelen pak je eerst — beide ×? Doe ze los van elkaar.","Niet (6×2+4)×3 — × bindt sterker dan + zonder haakjes.","Te veel — je rekent waarschijnlijk haakjes om de hele som.","Te weinig — heb je beide × meegenomen?"],
        uitlegPad: {
          stappen: [{ titel: "Beide × eerst", tekst: "Eerst beide ×: 6×2=12, 4×3=12. Dan +: 12+12=24." }],
          woorden: [{ woord: "× bindt", uitleg: "× verbindt twee getallen sterker dan + ze van elkaar scheidt." }],
          theorie: "Bij meerdere × in 1 som: doe ze ALLE eerst, dan +.",
          voorbeelden: [{ type: "stap", tekst: "6×2 + 4×3 = 12 + 12 = 24." }],
          basiskennis: [{ onderwerp: "Niet 6×2+4", uitleg: "+ zonder haakjes scheidt × niet — × bindt sterker." }],
          niveaus: { basis: "24. A.", simpeler: "Twee maal-stukken eerst: 6×2=12, 4×3=12. Som: 24. = A.", nogSimpeler: "24 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Haakjes eerst", tekst: "(4+6)=10. Dan ×3=30." }],
          woorden: [{ woord: "haakjes", uitleg: "Forceren volgorde: ALTIJD eerst." }],
          theorie: "Haakjes = baas. Negeren volgorde-regel als nodig.",
          voorbeelden: [{ type: "vergelijk", tekst: "Zonder haakjes: 4+6×3 = 4+18 = 22. Met haakjes: (4+6)×3 = 30." }],
          basiskennis: [{ onderwerp: "Verschil", uitleg: "Haakjes maken altijd verschil. Lees zorgvuldig." }],
          niveaus: { basis: "30. A.", simpeler: "Haakjes eerst: 4+6=10. Dan ×3=30. = A.", nogSimpeler: "30 = A." },
        },
      },
      {
        q: "**3 × (4 + 2) − 1** = ?",
        options: ["17","11","9","21"],
        answer: 0,
        wrongHints: [null,"Werk van binnen naar buiten: doe eerst de haakjes, dan ×, dan −.","Heb je de haakjes als eerste gedaan?","Heb je de × en − in de juiste volgorde gedaan?","Niet zo — werk van binnen naar buiten."],
        uitlegPad: {
          stappen: [{ titel: "Volgorde HMVDOA", tekst: "Haakjes: 4+2=6. ×: 3×6=18. −: 18-1=17." }],
          woorden: [{ woord: "stappenplan", uitleg: "Haakjes → × → −. Strikt deze volgorde." }],
          theorie: "Volgorde: 1) haakjes, 2) ×, 3) − (gewoon van links naar rechts bij gelijke prioriteit).",
          voorbeelden: [{ type: "stap", tekst: "3×(4+2)-1 → 3×6-1 → 18-1 = 17." }],
          basiskennis: [{ onderwerp: "Niet 3×(4+2-1)", uitleg: "−1 hoort niet bij haakjes." }],
          niveaus: { basis: "17. A.", simpeler: "(4+2)=6. 3×6=18. 18-1=17. = A.", nogSimpeler: "17 = A." },
        },
      },
      {
        q: "Wat doe je bij **haakjes binnen haakjes**?",
        options: ["Eerst binnenste, dan buitenste","Eerst buitenste","Maakt niet uit","Negeren"],
        answer: 0,
        wrongHints: [null,"Andersom — van binnen naar buiten.","Wel uit — verschillende antwoorden mogelijk.","Niet negeren."],
        uitlegPad: {
          stappen: [{ titel: "Binnen → buiten", tekst: "Bij geneste haakjes: eerst de binnenste, dan buitenste." }],
          woorden: [{ woord: "geneste haakjes", uitleg: "Haakjes binnen haakjes: ((...)...)." }],
          theorie: "Werk-richting: van binnen naar buiten (meest diepe eerst).",
          voorbeelden: [{ type: "stap", tekst: "((2+3)×4) → eerst (2+3)=5 → dan (5×4)=20." }],
          basiskennis: [{ onderwerp: "Logica", uitleg: "Binnenste haakjes maken klaar voor buitenste." }],
          niveaus: { basis: "Binnenste eerst. A.", simpeler: "Bij haakjes-in-haakjes: doe altijd eerst de binnenste, daarna buitenste. = A.", nogSimpeler: "Binnen = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "3×3 = 9", tekst: "3² = 3 keer met zichzelf vermenigvuldigd = 3×3 = 9." }],
          woorden: [{ woord: "kwadraat", uitleg: "x² = x maal x. 'Tot de tweede macht'." }],
          theorie: "Macht: kleine getal zegt HOE VAAK je vermenigvuldigt. 3² = 2 keer 3 vermenigvuldigen.",
          voorbeelden: [{ type: "tabel", tekst: "2²=4. 3²=9. 4²=16. 5²=25. 10²=100." }],
          basiskennis: [{ onderwerp: "Niet 3×2", uitleg: "3² ≠ 3×2 = 6. Macht is HERHALEN, niet vermenigvuldigen." }],
          niveaus: { basis: "9. A.", simpeler: "3² = 3×3 = 9 (NIET 3+3 of 3×2). = A.", nogSimpeler: "9 = A." },
        },
      },
      {
        q: "**2³** = ?",
        options: ["8","6","9","16"],
        answer: 0,
        wrongHints: [null,"2×2×2 = 8.","Niet 2×3.","Dat is 3².","2⁴ is 16."],
        uitlegPad: {
          stappen: [{ titel: "2×2×2 = 8", tekst: "2³ = 3 keer 2 vermenigvuldigen = 2×2×2 = 8." }],
          woorden: [{ woord: "tot de derde macht", uitleg: "x³ = x × x × x." }],
          theorie: "Machten van 2 onthouden: 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2¹⁰=1024.",
          voorbeelden: [{ type: "tabel", tekst: "2³ = 2×2×2 = 8. 2⁴ = 2×2×2×2 = 16. 2⁵ = 32." }],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Machten van 2 zijn handig (computer-wereld!): 1,2,4,8,16,32,64..." }],
          niveaus: { basis: "8. A.", simpeler: "2³ = 2×2×2 = 4×2 = 8. = A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "**4 + 5²** = ?",
        options: ["29","81","20","9"],
        answer: 0,
        wrongHints: [null,"5²=25, 4+25=29.","(4+5)²=81 — maar geen haakjes.","Niet zo.","Niet zo."],
        uitlegPad: {
          stappen: [{ titel: "Macht eerst", tekst: "5² = 25. Dan +: 4+25 = 29." }],
          woorden: [{ woord: "macht eerst", uitleg: "Machten gaan vóór + en − en × en ÷." }],
          theorie: "HMVDOA: H-M-V-D-O-A. Macht (M) komt op nr 2 — vóór alles behalve haakjes.",
          voorbeelden: [{ type: "stap", tekst: "4 + 5² = 4 + 25 = 29. (Niet (4+5)² = 81 — geen haakjes)." }],
          basiskennis: [{ onderwerp: "Niet 9² of 9×2", uitleg: "Eerst macht apart uitrekenen, dan optellen." }],
          niveaus: { basis: "29. A.", simpeler: "5² = 25 (eerst). Dan 4+25 = 29. = A.", nogSimpeler: "29 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "÷ → − → +", tekst: "÷ eerst: 4÷2=2. Som: 8-2+1. − en + links→rechts: 8-2=6, 6+1=7." }],
          woorden: [{ woord: "links→rechts", uitleg: "Bij gelijke prioriteit (+ en −): van links naar rechts." }],
          theorie: "Volgorde: ÷ vóór + en −. Daarna + en − op volgorde van links naar rechts.",
          voorbeelden: [{ type: "stap", tekst: "8 − 4÷2 + 1 = 8 − 2 + 1 = 6 + 1 = 7." }],
          basiskennis: [{ onderwerp: "Niet (8-4)÷2+1", uitleg: "Geen haakjes — ÷ eerst, dan rest." }],
          niveaus: { basis: "7. A.", simpeler: "÷ eerst: 4÷2=2. Som = 8-2+1 = 7. = A.", nogSimpeler: "7 = A." },
        },
      },
      {
        q: "**(2 + 3)² − 5** = ?",
        options: ["20","22","11","17"],
        answer: 0,
        wrongHints: [null,"Haakjes: 5, machten: 25, -5: 20.","Niet zo.","Niet zo.","Niet zo."],
        uitlegPad: {
          stappen: [{ titel: "H → M → −", tekst: "Haakjes: 2+3=5. Macht: 5²=25. −: 25-5=20." }],
          woorden: [{ woord: "haakjes met macht", uitleg: "Eerst haakjes invullen, dan kwadraat van resultaat." }],
          theorie: "(a+b)² = bereken eerst (a+b), dan kwadraat. NIET a²+b²!",
          voorbeelden: [{ type: "stap", tekst: "(2+3)² = 5² = 25. NIET 4+9=13." }],
          basiskennis: [{ onderwerp: "Veelfout", uitleg: "Veel leerlingen denken (a+b)² = a²+b². Fout. Eerst haakjes." }],
          niveaus: { basis: "20. A.", simpeler: "Haakjes 2+3=5. Macht 5²=25. -5 = 20. = A.", nogSimpeler: "20 = A." },
        },
      },
      {
        q: "**3 × 2² + 4** = ?",
        options: ["16","24","28","12"],
        answer: 0,
        wrongHints: [null,"2²=4, 3×4=12, +4=16.","(3×2)²=36 — geen haakjes.","Niet zo.","3×2+4 = 10."],
        uitlegPad: {
          stappen: [{ titel: "M → × → +", tekst: "Macht eerst: 2²=4. ×: 3×4=12. +: 12+4=16." }],
          woorden: [{ woord: "macht ≠ vermenigvuldiging", uitleg: "Macht (2²) en × (3×2) zijn verschillend." }],
          theorie: "Macht heeft hogere prioriteit dan ×. Dus 3×2² = 3×(2²) = 3×4 = 12.",
          voorbeelden: [{ type: "stap", tekst: "3×2²+4 = 3×4+4 = 12+4 = 16." }],
          basiskennis: [{ onderwerp: "Niet (3×2)²", uitleg: "Geen haakjes om 3×2 — macht hangt alleen aan 2." }],
          niveaus: { basis: "16. A.", simpeler: "2² eerst = 4. 3×4 = 12. +4 = 16. = A.", nogSimpeler: "16 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "H → ÷× LR", tekst: "Haakjes: 1+2=3. Daarna ÷ en × van links naar rechts: 18÷3=6, 6×4=24." }],
          woorden: [{ woord: "links→rechts", uitleg: "Bij × en ÷ samen: van links naar rechts." }],
          theorie: "× en ÷ even sterk → links naar rechts. Niet eerst alle ÷ doen.",
          voorbeelden: [{ type: "stap", tekst: "18÷(1+2)×4 = 18÷3×4 = 6×4 = 24." }],
          basiskennis: [{ onderwerp: "Niet 18÷(3×4)", uitleg: "× komt LATER, niet eerst. Eerst ÷ links, dan ×." }],
          niveaus: { basis: "24. A.", simpeler: "Haakjes:1+2=3. Dan 18÷3=6. Dan 6×4=24. = A.", nogSimpeler: "24 = A." },
        },
      },
      {
        q: "**2 × (4 + 3²)** = ?",
        options: ["26","18","14","49"],
        answer: 0,
        wrongHints: [null,"3²=9, 4+9=13, 2×13=26.","Niet zo.","Niet zo.","Niet zo."],
        uitlegPad: {
          stappen: [{ titel: "Macht in haakjes", tekst: "Binnen haakjes: 3²=9 eerst, dan 4+9=13. Daarna ×: 2×13=26." }],
          woorden: [{ woord: "binnen-volgorde", uitleg: "Binnen haakjes geldt ook HMVDOA." }],
          theorie: "Stap 1: binnen haakjes alle volgorde-regels toepassen. Stap 2: × eromheen.",
          voorbeelden: [{ type: "stap", tekst: "2×(4+3²) = 2×(4+9) = 2×13 = 26." }],
          basiskennis: [{ onderwerp: "Niet 2×4+3²", uitleg: "Haakjes om 4+3² — die hele groep wordt × 2." }],
          niveaus: { basis: "26. A.", simpeler: "Binnen haakjes: 3²=9, 4+9=13. Dan 2×13=26. = A.", nogSimpeler: "26 = A." },
        },
      },
      {
        q: "**(5 + 1)² − 4 × 3** = ?",
        options: ["24","60","30","12"],
        answer: 0,
        wrongHints: [null,"Haakjes:6, macht:36, ×:12, -:24.","Niet zo.","Niet zo.","Niet zo."],
        uitlegPad: {
          stappen: [{ titel: "Volledige HMVDOA", tekst: "H: 5+1=6. M: 6²=36. ×: 4×3=12. −: 36-12=24." }],
          woorden: [{ woord: "alle stappen", uitleg: "Som met alle 4 niveaus van HMVDOA." }],
          theorie: "Strikte volgorde: H → M → × → −. Doe ze één voor één.",
          voorbeelden: [{ type: "stap", tekst: "(5+1)²-4×3 = 6²-12 = 36-12 = 24." }],
          basiskennis: [{ onderwerp: "Niet 6²-4×3 = 32×3", uitleg: "× heeft eigen niveau, niet aan haakjes/macht plakken." }],
          niveaus: { basis: "24. A.", simpeler: "(5+1)²=36. 4×3=12. 36-12=24. = A.", nogSimpeler: "24 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "× eerst", tekst: "4×2=8, dan 3+8=11." }],
          woorden: [{ woord: "× vóór +", uitleg: "Vermenigvuldigen sterker dan optellen." }],
          theorie: "Klassieke valkuil-som. Antwoord 14 = (3+4)×2, maar er staan geen haakjes.",
          voorbeelden: [{ type: "stap", tekst: "3 + 4×2 = 3 + 8 = 11." }],
          basiskennis: [{ onderwerp: "Test", uitleg: "Twijfel? × heeft altijd voorrang op +." }],
          niveaus: { basis: "11. A.", simpeler: "× eerst: 4×2=8. Dan 3+8=11. = A.", nogSimpeler: "11 = A." },
        },
      },
      {
        q: "**(6 − 2) × 5** = ?",
        options: ["20","-4","60","8"],
        answer: 0,
        wrongHints: [null,"Haakjes:4, ×5=20.","Niet zo.","Niet zo.","Niet zo."],
        uitlegPad: {
          stappen: [{ titel: "Haakjes eerst", tekst: "(6-2)=4. Dan ×5: 4×5=20." }],
          woorden: [{ woord: "haakjes met −", uitleg: "Aftrekking binnen haakjes wordt eerst gedaan." }],
          theorie: "Haakjes forceren: 6-2 wordt 4, dan ×5=20. Zonder haakjes zou ×5 eerst, dan -.",
          voorbeelden: [{ type: "stap", tekst: "(6-2)×5 = 4×5 = 20." }],
          basiskennis: [{ onderwerp: "Vergelijk", uitleg: "6-2×5 (geen haakjes) = 6-10 = -4. Wel haakjes = 20." }],
          niveaus: { basis: "20. A.", simpeler: "(6-2)=4. 4×5=20. = A.", nogSimpeler: "20 = A." },
        },
      },
      {
        q: "**5²** = ?",
        options: ["25","10","7","52"],
        answer: 0,
        wrongHints: [null,"5×5=25, niet 5+5 of 5×2.","Dat is 5+5.","Niet zo.","Niet getal in macht-vorm."],
        uitlegPad: {
          stappen: [{ titel: "5×5 = 25", tekst: "5² = 5 keer met zichzelf = 5×5 = 25." }],
          woorden: [{ woord: "5²", uitleg: "Vijf kwadraat = 25." }],
          theorie: "Macht: kleine 2 betekent vermenigvuldig 2 keer met zichzelf. NIET +5 of ×2.",
          voorbeelden: [{ type: "tabel", tekst: "5²=25. 6²=36. 7²=49. 10²=100." }],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "Kwadraten 1-10: 1,4,9,16,25,36,49,64,81,100." }],
          niveaus: { basis: "25. A.", simpeler: "5² = 5×5 = 25. (Niet 5+5=10, niet 5×2=10). = A.", nogSimpeler: "25 = A." },
        },
      },
      {
        q: "**12 ÷ 4 + 3 × 2** = ?",
        options: ["9","24","30","6"],
        answer: 0,
        wrongHints: [null,"÷:3, ×:6, samen:9.","Niet zo.","Niet zo.","Niet zo."],
        uitlegPad: {
          stappen: [{ titel: "Beide ÷× eerst", tekst: "÷ + × allebei eerst: 12÷4=3, 3×2=6. Dan +: 3+6=9." }],
          woorden: [{ woord: "twee × en ÷", uitleg: "Doe alle × en ÷ vóór + en −." }],
          theorie: "Bij meerdere × en ÷ in 1 som: doe ze ALLE eerst, dan + en −.",
          voorbeelden: [{ type: "stap", tekst: "12÷4 + 3×2 = 3 + 6 = 9." }],
          basiskennis: [{ onderwerp: "Niet 12÷7×2", uitleg: "+ scheidt de twee multiplicatieve groepen. Doe ze los." }],
          niveaus: { basis: "9. A.", simpeler: "12÷4=3. 3×2=6. 3+6=9. = A.", nogSimpeler: "9 = A." },
        },
      },
      {
        q: "**Welke is sterker dan +?**",
        options: ["× (vermenigvuldigen)","− (aftrekken)","Geen — gelijk","( (haakje)"],
        answer: 0,
        wrongHints: [null,"− is even sterk als +.","× komt voor +.","Haakje is geen bewerking maar groep."],
        uitlegPad: {
          stappen: [{ titel: "× sterker", tekst: "× en ÷ zijn sterker dan + en −. + en − zijn even sterk." }],
          woorden: [{ woord: "sterkte", uitleg: "Welke bewerking gaat eerst in volgorde-regel." }],
          theorie: "HMVDOA-niveau: × en ÷ = niveau 3. + en − = niveau 4. Hoger niveau = eerst.",
          voorbeelden: [{ type: "tabel", tekst: "× sterker dan + ja. − even sterk als +. Haakje = niet bewerking." }],
          basiskennis: [{ onderwerp: "Eigenlijk allebei", uitleg: "× en ÷ zijn allebei sterker dan +. Optie A is correct genoemd." }],
          niveaus: { basis: "× (vermenigvuldigen). A.", simpeler: "× en ÷ zijn sterker dan + en −. Optie A correct. = A.", nogSimpeler: "× = A." },
        },
      },
      { q: "Bereken: 2 + 3 × 4 = ?", options: ["14","20","24","9"], answer: 0, wrongHints: [null, "Niet — eerst keer.", "Niet.", "Niet."] },
      { q: "Bereken: (2 + 3) × 4 = ?", options: ["20","14","9","24"], answer: 0, wrongHints: [null, "Niet — haakjes forceren volgorde.", "Niet — vermenigvuldigen eerst klopt niet hier.", "Niet."] },
      { q: "Bereken: 12 − 6 ÷ 2 = ?", options: ["9","3","6","2"], answer: 0, wrongHints: [null, "Niet — −6 dan ÷2 = 3, klopt niet.", "Niet.", "Niet."] },
      { q: "Bereken: 5 × (3 + 4) = ?", options: ["35","19","27","9"], answer: 0, wrongHints: [null, "Niet — haakjes prioriteit.", "Niet.", "Niet."] },
      { q: "Bereken: 100 − 30 × 2 = ?", options: ["40","140","70","60"], answer: 0, wrongHints: [null, "Niet — × eerst.", "Niet.", "Niet."] },
      { q: "Bereken: (10 + 5) × 2 = ?", options: ["30","25","15","20"], answer: 0, wrongHints: [null, "Niet — haakjes eerst.", "Niet.", "Niet."] },
      { q: "Bereken: 18 ÷ (6 − 3) = ?", options: ["6","3","18","2"], answer: 0, wrongHints: [null, "Niet — niet zonder haakjes.", "Niet.", "Niet."] },
      { q: "Bereken: 4 × 3 − 5 = ?", options: ["7","2","17","12"], answer: 0, wrongHints: [null, "Niet.", "Niet — geen +.", "Vergeet −5."] },
      { q: "Bereken: 8 + 4 ÷ 2 = ?", options: ["10","6","12","16"], answer: 0, wrongHints: [null, "Niet — ÷ eerst.", "Te veel.", "Niet."] },
      { q: "Welke bewerking is **sterkste** (eerst doen)?", options: ["Haakjes","Optellen","Aftrekken","Vermenigvuldigen"], answer: 0, wrongHints: [null, "Zwakst.", "Zwakst.", "Sterker dan +/−, niet sterkst."] },
      { q: "Bereken: 6² + 3 = ?", options: ["39","15","36","9"], answer: 0, wrongHints: [null, "Niet — 6² niet 6×3.", "Niet — vergeet +3.", "Niet."] },
      { q: "Bereken: 2 + 3 × 4 − 1 = ?", options: ["13","19","5","11"], answer: 0, wrongHints: [null, "Niet — niet eerst optellen.", "Niet.", "Niet — vergeet niet 3."] },
      { q: "Wat staat de **H** in HMVDOA voor?", options: ["Haakjes","Hard","Half","Honderdtal"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
      { q: "Bereken: 5 + (8 − 3) × 2 = ?", options: ["15","16","26","13"], answer: 0, wrongHints: [null, "Niet.", "Te veel.", "Niet."] },
      { q: "Bereken: 20 ÷ 4 × 2 = ?", options: ["10","2,5","160","5"], answer: 0, wrongHints: [null, "Niet — niet ÷ laatste.", "Te veel.", "20÷8."] },
      { q: "Bereken: 3² × 2 = ?", options: ["18","12","9","6"], answer: 0, wrongHints: [null, "Niet — 3²=9, niet 6.", "Macht.", "Niet."] },
      { q: "Welke is **gelijkwaardig**: × en ÷ of + en −?", options: ["Beide paren onderling gelijk","Niet relevant","× sterker dan ÷","+ sterker dan −"], answer: 0, wrongHints: [null, "Wel.", "Niet.", "Niet."] },
      { q: "Bereken: (4 + 2) × (3 − 1) = ?", options: ["12","7","10","20"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet."] },
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
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "tafels-po", title: "Tafels", niveau: "po-1F" },
  ],
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

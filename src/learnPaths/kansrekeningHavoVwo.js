// Leerpad: Kansrekening + combinatoriek HAVO/VWO Wiskunde A — eindexamen.
// Tweelingpad bij statistiek-havo-vwo.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  point: "#ffd54f",
  alt: "#ff7043",
};

const stepEmojis = ["🎲", "🌳", "🔢", "🎰", "🏆"];

const chapters = [
  { letter: "A", title: "Basis-kans + complement", emoji: "🎲", from: 0, to: 0 },
  { letter: "B", title: "Boomdiagram + product-regel", emoji: "🌳", from: 1, to: 1 },
  { letter: "C", title: "Combinatoriek", emoji: "🔢", from: 2, to: 2 },
  { letter: "D", title: "Venn + verwachtingswaarde", emoji: "🎰", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Basis-kans ────────────────────────────────────────
  {
    title: "Basis-kans — gunstige uitkomsten / totaal",
    explanation:
      "**Kans** beschrijft hoe waarschijnlijk een gebeurtenis is.\n\n**Basis-formule** (klassieke definitie):\n• P(A) = aantal gunstige uitkomsten / totaal aantal uitkomsten\n• Voorbeeld dobbelsteen: P(6) = 1/6 ≈ 0,167 = 16,7%.\n• P(even getal) = 3/6 = 0,5 = 50%.\n\n**Kenmerken**:\n• 0 ≤ P(A) ≤ 1 (kans is altijd tussen 0 en 1).\n• P(A) = 0: onmogelijk.\n• P(A) = 1: zeker.\n• Som van alle uitkomsten = 1.\n\n**Notatie**:\n• P(A) = kans op gebeurtenis A.\n• In percentages of breuken: P = 1/4 = 0,25 = 25%.\n\n**Complement** (tegengestelde):\n• P(niet A) = 1 − P(A)\n• Voorbeeld: P(geen 6 op dobbelsteen) = 1 − 1/6 = 5/6.\n• Hand-truc: bereken complement als hoofdgeval ingewikkeld is.\n• 'Minstens 1' is vaak gemakkelijker via complement (P(niemand) = ...).\n\n**Voorwaardelijke kans** (HAVO/VWO):\n• P(A | B) = kans op A gegeven dat B al gebeurd is.\n• Formule: P(A | B) = P(A en B) / P(B).\n• Voorbeeld: kans op auto-ongeluk bij regen = anders dan in droge tijd.\n\n**Onafhankelijke gebeurtenissen**:\n• A en B beïnvloeden elkaar niet.\n• P(A en B) = P(A) × P(B) — productregel.\n• Bv: 2 dobbelstenen, eerste = 6 EN tweede = 6: 1/6 × 1/6 = 1/36.\n\n**Afhankelijke gebeurtenissen**:\n• De eerste gebeurtenis verandert de kans op tweede.\n• Voorbeeld: 2 kaarten zonder terugleggen — kans verandert na eerste kaart.",
    checks: [
      {
        q: "Wat is de **kans** op een **even getal** bij dobbelsteen?",
        options: ["1/2 (50%)","1/3","1/6","2/3"],
        answer: 0,
        wrongHints: [null, "Te weinig — er zijn 3 even op 6.", "Niet — dat is kans op 1 specifiek getal.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "3 even van 6 totaal", tekst: "Even getallen op dobbelsteen: 2, 4, 6 = 3 stuks. Totaal uitkomsten: 6. P(even) = 3/6 = **1/2 = 0,5 = 50%**." }],
          niveaus: { basis: "1/2. A.", simpeler: "3 even / 6 totaal = 1/2 = A.", nogSimpeler: "50% = A." },
        },
      },
      {
        q: "P(A) = 0,3. Wat is **P(niet A)**?",
        options: ["0,7","0,3","1,3","0"],
        answer: 0,
        wrongHints: [null, "Niet — dat is P(A) zelf.", "Kansen kunnen niet >1.", "Niet — geen onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Complement = 1 − P(A)", tekst: "Som van P(A) + P(niet A) = 1 (alle mogelijkheden). Dus P(niet A) = **1 − 0,3 = 0,7**." }],
          theorie: "Cito-truc: bij 'minstens 1' vragen → gebruik complement. P(minstens 1) = 1 − P(niemand).",
          niveaus: { basis: "0,7. A.", simpeler: "1 − 0,3 = 0,7 = A.", nogSimpeler: "0,7 = A." },
        },
      },
      {
        q: "Twee dobbelstenen gooien: P(beide 6) = ?",
        options: ["1/36","1/6","2/6","1/12"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 1 dobbelsteen.", "Niet — onafhankelijk, dus vermenigvuldigen.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Productregel onafhankelijk", tekst: "P(eerste 6) = 1/6. P(tweede 6) = 1/6. Onafhankelijk → P(beide 6) = 1/6 × 1/6 = **1/36**." }],
          theorie: "Cito-pattern: 'én'-vragen + onafhankelijk → vermenigvuldigen.",
          niveaus: { basis: "1/36. A.", simpeler: "1/6 × 1/6 = 1/36 = A.", nogSimpeler: "1/36 = A." },
        },
      },
      {
        q: "Bij **afhankelijke** gebeurtenissen: kans 2e gebeurtenis hangt af van:",
        options: ["Uitkomst 1e gebeurtenis","Tijd van de dag","Wie het doet","Niets"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Wel — daar zit het verschil."],
        uitlegPad: {
          stappen: [{ titel: "Afhankelijk = beïnvloed", tekst: "Voorbeeld: 2 kaarten trekken **zonder terugleggen**. Eerste kaart heart → 12 harten over van 51 kaarten. Eerste kaart geen heart → 13 harten van 51. **Kans tweede hangt af van eerste**." }],
          theorie: "Wel terugleggen = onafhankelijk. Niet terugleggen = afhankelijk.",
          niveaus: { basis: "Uitkomst 1e. A.", simpeler: "Afhankelijk = 1e beïnvloedt 2e = A.", nogSimpeler: "1e = A." },
        },
      },
      {
        q: "Kans P(A) kan zijn:",
        options: ["Tussen 0 en 1","Boven 1","Negatief","Elk getal"],
        answer: 0,
        wrongHints: [null, "Niet — onmogelijk.", "Niet — onmogelijk.", "Niet — beperkt."],
        uitlegPad: {
          stappen: [{ titel: "0 ≤ P ≤ 1", tekst: "Kans **altijd tussen 0 en 1** (of 0% en 100%). 0 = onmogelijk, 1 = zeker. Negatieve kansen of >1 = wiskundig onzin." }],
          niveaus: { basis: "0 tot 1. A.", simpeler: "Kans = 0 t/m 1 = A.", nogSimpeler: "0-1 = A." },
        },
      },
    ],
  },

  // ─── B. Boomdiagram ───────────────────────────────────────
  {
    title: "Boomdiagram + product-regel",
    explanation:
      "**Boomdiagram** = visualisatie van opeenvolgende gebeurtenissen. Standaard-tool voor HAVO/VWO kansrekening.\n\n**Opbouw**:\n• Elk **knooppunt** = beslissingsmoment / kansgebeurtenis.\n• Elke **tak** = mogelijke uitkomst met kans erop.\n• **Eindpaden** = combinaties van uitkomsten.\n\n**Voorbeeld**: 2 keer gooien met dobbelsteen, P(6 en 6)?\n```\nEerste worp           Tweede worp\n               1/6 → 6   (P = 1/6 × 1/6 = 1/36)\n               5/6 → niet 6\n  1/6 → 6\n  5/6 → niet 6 →\n```\nResultaat: P(beide 6) = 1/6 × 1/6 = 1/36.\n\n**Twee regels**:\n\n**1. Product-regel** (langs een pad):\n• Vermenigvuldig kansen langs één pad in boom.\n• P(pad) = P(tak 1) × P(tak 2) × ...\n• Bv: P(rood eerst + blauw tweede) = P(rood) × P(blauw | rood).\n\n**2. Som-regel** (over verschillende paden):\n• Tel kansen van paden die zelfde gebeurtenis opleveren.\n• Bv: P(minstens 1 rood in 2 trekkingen) = P(R eerst) + P(R tweede zonder eerste).\n\n**Voorbeeld vaas met knikkers**:\nVaas: 3 rood + 2 blauw. Trek 2 zonder terugleggen.\n• P(beide rood) = (3/5) × (2/4) = 6/20 = 0,3.\n• Pad 1: R eerst (3/5), R tweede (2/4) = 6/20.\n• P(1 rood + 1 blauw) = P(RB) + P(BR) = (3/5)(2/4) + (2/5)(3/4) = 6/20 + 6/20 = 12/20 = 0,6.\n\n**Cito-favoriet**: 'Bereken kans op minstens 1 van iets'. Gebruik complement:\n• P(minstens 1 rood) = 1 − P(geen rode) = 1 − (2/5)(1/4) = 1 − 2/20 = 18/20 = 0,9.\n\n**Beslissing-pad-aantal**:\n• Bij n stappen, elke 2 keuzes: 2^n paden.\n• 3 keer muntje: 2^3 = 8 paden (KKK, KKM, KMK, KMM, MKK, MKM, MMK, MMM).",
    checks: [
      {
        q: "In een boomdiagram **vermenigvuldig** je kansen:",
        options: ["Langs één pad","Tussen verschillende paden","Nooit","Alleen bij 6"],
        answer: 0,
        wrongHints: [null, "Niet — daar tel je op (som-regel).", "Wel — product-regel.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Pad = vermenigvuldigen", tekst: "**Langs één pad**: vermenigvuldig kansen (product-regel). **Tussen verschillende paden**: tel kansen op (som-regel)." }],
          theorie: "Onthoud: 'én' = ×, 'of' = +.",
          niveaus: { basis: "Langs pad. A.", simpeler: "Pad = vermenigvuldigen = A.", nogSimpeler: "Pad × = A." },
        },
      },
      {
        q: "Vaas 4 rood + 6 blauw. Trek 1 knikker. P(rood) = ?",
        options: ["0,4","0,6","4","10"],
        answer: 0,
        wrongHints: [null, "Niet — kans op blauw.", "Niet — aantal, niet kans.", "Niet — totaal, niet kans."],
        uitlegPad: {
          stappen: [{ titel: "Gunstig / totaal", tekst: "P(rood) = 4 / (4+6) = 4/10 = **0,4 = 40%**." }],
          niveaus: { basis: "0,4. A.", simpeler: "4/10 = 0,4 = A.", nogSimpeler: "0,4 = A." },
        },
      },
      {
        q: "Drie keer muntje gooien. Hoeveel paden in boom?",
        options: ["8","6","3","27"],
        answer: 0,
        wrongHints: [null, "Niet — dat is dobbelsteen-1.", "Niet — aantal worpen.", "Niet — dat is 3³, niet 2³."],
        uitlegPad: {
          stappen: [{ titel: "2^n = paden", tekst: "Bij n worpen met 2 uitkomsten: **2^n paden**. 3 muntjes → 2³ = **8 paden** (KKK, KKM, ..., MMM)." }],
          theorie: "Formule: aantal paden = aantal-uitkomsten-per-stap ^ aantal-stappen.",
          niveaus: { basis: "8. A.", simpeler: "2³ = 8 paden = A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "Vaas 2 rood + 3 blauw, trek 2 ZONDER terugleggen. P(beide rood)?",
        options: ["1/10","4/25","2/5","1/5"],
        answer: 0,
        wrongHints: [null, "Niet — MET terugleggen (2/5)².", "Bijna — vergeet 'zonder' = na 1 rood is 1 over.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Afhankelijk: tel ook af", tekst: "P(rood 1e) = 2/5. Daarna: 1 rood + 3 blauw = 4 over. P(rood 2e) = 1/4. Product: 2/5 × 1/4 = **2/20 = 1/10 = 0,1**." }],
          theorie: "Met terugleggen → onafhankelijk = (2/5)² = 4/25. Zonder = afhankelijk = 1/10. Verschil!",
          niveaus: { basis: "1/10. A.", simpeler: "2/5 × 1/4 = 1/10 = A.", nogSimpeler: "1/10 = A." },
        },
      },
      {
        q: "Voor 'minstens 1 succes in 3 pogingen' werk je het handigst met:",
        options: ["Complement (1 − P(0 successen))","Direct optellen","Product-regel","Geen formule"],
        answer: 0,
        wrongHints: [null, "Niet — veel paden = ingewikkeld.", "Niet — voor opeenvolgende, niet 'minstens'.", "Wel formule."],
        uitlegPad: {
          stappen: [{ titel: "Complement-truc", tekst: "**Minstens 1** is gemakkelijker via complement: P(≥1 succes) = **1 − P(0 successen)**. Sneller dan optellen van P(1) + P(2) + P(3)." }],
          theorie: "Cito-CSE-favoriet: 'minstens 1' → altijd complement.",
          niveaus: { basis: "Complement. A.", simpeler: "Minstens 1 = 1 − P(nul) = A.", nogSimpeler: "Complement = A." },
        },
      },
    ],
  },

  // ─── C. Combinatoriek ─────────────────────────────────────
  {
    title: "Combinatoriek — permutaties + combinaties",
    explanation:
      "**Combinatoriek** = tellen hoeveel manieren iets kan op verschillende manieren.\n\n**Faculteit** (!):\n• n! = n × (n−1) × (n−2) × ... × 1.\n• 5! = 5×4×3×2×1 = 120.\n• 0! = 1 (definitie).\n• Op rekenmachine: knop x! of via menu.\n\n**Permutaties** (volgorde belangrijk):\n• Aantal manieren om k items uit n te kiezen, volgorde telt.\n• Formule: P(n,k) = n! / (n−k)!\n• Bv: 3 medailles (goud, zilver, brons) uit 10 atleten = 10!/7! = 10×9×8 = **720**.\n\n**Combinaties** (volgorde niet belangrijk):\n• Aantal manieren om k items uit n te kiezen, volgorde maakt NIET uit.\n• Formule: C(n,k) = n! / (k! × (n−k)!) = 'n boven k' = nCk\n• Bv: 3 mensen kiezen uit 10 voor een commissie = C(10,3) = 10!/(3!×7!) = 120.\n• Notatie: (n boven k) of nCk.\n\n**Wanneer wat**:\n• 'Volgorde maakt uit' (1e, 2e, 3e plaats) → permutaties.\n• 'Volgorde maakt niet uit' (groep van 3) → combinaties.\n• Loterij: combinatie. Race: permutatie.\n\n**Lotto-voorbeeld**:\n• Trek 6 uit 49 zonder terugleggen: C(49,6) = 13.983.816.\n• Kans op jackpot = 1 / 14 miljoen.\n\n**Productregel telkunst**:\n• n stappen, elke a, b, c... mogelijkheden: a × b × c paden.\n• Bv: kentekenplaat 2 letters + 3 cijfers + 2 letters: 26²×10³×26² = 4 hele veel.\n\n**Codes/wachtwoorden**:\n• 4-cijfercode 0-9: 10⁴ = 10.000.\n• Pincode 0-9 zonder herhaling: 10×9×8×7 = 5040.",
    checks: [
      {
        q: "Wat is **5!**?",
        options: ["120","25","15","60"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 5², niet 5!.", "Niet — dat is 5×3, niet faculteit.", "Niet — dat is 5×12."],
        uitlegPad: {
          stappen: [{ titel: "Faculteit = aftellen × elkaar", tekst: "5! = 5 × 4 × 3 × 2 × 1 = **120**." }],
          theorie: "Cito-truc: faculteit groeit snel. 10! = 3.628.800. 20! is veel groter dan miljarden.",
          niveaus: { basis: "120. A.", simpeler: "5×4×3×2×1 = 120 = A.", nogSimpeler: "120 = A." },
        },
      },
      {
        q: "Uit 10 spelers kies 3 voor team waar **volgorde niet uitmaakt**. Hoeveel manieren?",
        options: ["120 (combinaties)","720 (permutaties)","30","10"],
        answer: 0,
        wrongHints: [null, "Niet — daar telt volgorde.", "Niet — formule fout.", "Niet — dat is C(10,1)."],
        uitlegPad: {
          stappen: [{ titel: "Combinaties C(10,3)", tekst: "C(10,3) = 10! / (3! × 7!) = (10×9×8)/(3×2×1) = 720/6 = **120**. Volgorde maakt niet uit dus deel door 3! permutaties van zelfde 3 mensen." }],
          niveaus: { basis: "120. A.", simpeler: "C(10,3) = 120 = A.", nogSimpeler: "120 = A." },
        },
      },
      {
        q: "Atletiek-race 100m: 3 medailles uit 8 lopers. Aantal **podiums-orderingen**?",
        options: ["336","56","24","8"],
        answer: 0,
        wrongHints: [null, "Niet — combinaties zonder volgorde.", "Niet — andere combo.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Permutaties = volgorde", tekst: "**Medailles** = goud/zilver/brons = volgorde telt. P(8,3) = 8! / 5! = 8 × 7 × 6 = **336** mogelijke podiums." }],
          theorie: "Verschil: combinaties = 56, permutaties = 336. Permutaties = combinaties × k! (factor 3! = 6 erbij door volgorde).",
          niveaus: { basis: "336. A.", simpeler: "8×7×6 = 336 = A.", nogSimpeler: "336 = A." },
        },
      },
      {
        q: "Kentekenplaat: 2 letters + 3 cijfers + 2 letters. Hoeveel mogelijk (alleen herhaling, A-Z, 0-9)?",
        options: ["26²×10³×26² = ~457 miljoen","Onbeperkt","26+10+26","100"],
        answer: 0,
        wrongHints: [null, "Wel beperkt.", "Niet — dat is som, niet product.", "Niet — veel meer."],
        uitlegPad: {
          stappen: [{ titel: "Productregel", tekst: "**26 letters × 26 × 10 cijfers × 10 × 10 × 26 × 26 = 26⁴ × 10³ = 456.976.000** mogelijke kentekens. In praktijk minder door uitsluiting verwarrende combinaties." }],
          theorie: "Cito-pattern: productregel voor 'aantal codes/wachtwoorden/etiketten' vragen.",
          niveaus: { basis: "26²×10³×26². A.", simpeler: "Productregel = 26⁴·10³ = A.", nogSimpeler: "A = veel." },
        },
      },
      {
        q: "Wat is **0!**?",
        options: ["1","0","Onmogelijk","Oneindig"],
        answer: 0,
        wrongHints: [null, "Niet — 0! = 1 definitie.", "Wel mogelijk — definitie 1.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "0! = 1 (definitie)", tekst: "**0! = 1**. Wiskundige conventie zodat formules werken: C(n,0) = 1 (één manier om niets te kiezen), C(n,n) = 1. Zou breken als 0! ≠ 1." }],
          niveaus: { basis: "1. A.", simpeler: "0! = 1 = A.", nogSimpeler: "1 = A." },
        },
      },
    ],
  },

  // ─── D. Venn + verwachtingswaarde ─────────────────────────
  {
    title: "Venndiagram + verwachtingswaarde",
    explanation:
      "**Venndiagram** = cirkels die overlappen, voor het visualiseren van gebeurtenissen + hun overlap.\n\n**Twee cirkels A en B**:\n• Linker cirkel zonder overlap = alleen A (P(A en niet B)).\n• Rechter zonder overlap = alleen B.\n• **Overlap** = A én B (P(A ∩ B)).\n• Buiten beide cirkels = niet A en niet B.\n\n**Som-regel** (Venn-formule):\n• P(A of B) = P(A) + P(B) − P(A en B).\n• Trek doorsnede af om geen dubbel-telling.\n• Bv. 60% NL'ers eet vis (A), 40% drinkt wijn (B), 20% beide → P(A of B) = 60+40−20 = 80%.\n\n**Onverenigbare gebeurtenissen** (disjunct, uitsluitend):\n• P(A en B) = 0.\n• Dan P(A of B) = P(A) + P(B) — geen aftrek.\n• Bv: dobbelsteen — 6 én oneven = onmogelijk → 0.\n\n**Verwachtingswaarde** (E):\n• 'Gemiddeld' resultaat op lange termijn.\n• Formule: E(X) = Σ (waarde × kans) over alle uitkomsten.\n• Voorbeeld dobbelsteen: E = (1+2+3+4+5+6)/6 = 21/6 = 3,5.\n• Beslissing-tool: positieve E = winst op lange termijn, negatief = verlies.\n\n**Voorbeeld loterij**:\n• Lot kost €2. Win €100 met kans 1/100. Anders 0.\n• E(winst) = (100 × 1/100) + (−2 × 99/100) = 1 − 1,98 = **−0,98**.\n• Per lot verlies je gemiddeld 98 cent. Casino-truc: E altijd net negatief voor speler.\n\n**Gokken/casino-tip**:\n• Roulette enkele kleur: E < 0 (door 0/00-vakje).\n• Loterij: E sterk negatief.\n• Verzekering: E negatief voor consument (anders maakt verzekeraar geen winst).\n• Beleggen: E meestal positief op lange termijn (~7% per jaar aandelen historisch).\n\n**Cito-eindexamen-pattern**:\n• 'Bereken verwachte winst.'\n• 'Is dit spel eerlijk?' (= is E = 0?).\n• 'Hoeveel moet je inzetten zodat spel eerlijk wordt?'",
    checks: [
      {
        q: "P(A) = 0,5, P(B) = 0,4, P(A en B) = 0,2. Wat is **P(A of B)**?",
        options: ["0,7","0,9","0,1","1,1"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet de aftrek.", "Niet — minder dan dat.", "Onmogelijk — kansen ≤1."],
        uitlegPad: {
          stappen: [{ titel: "Som-regel: tel + trek af", tekst: "P(A of B) = P(A) + P(B) − P(A en B) = 0,5 + 0,4 − 0,2 = **0,7**." }],
          theorie: "Cito-Venn-favoriet. Trek doorsnede af om dubbel-telling te voorkomen.",
          niveaus: { basis: "0,7. A.", simpeler: "0,5+0,4-0,2 = 0,7 = A.", nogSimpeler: "0,7 = A." },
        },
      },
      {
        q: "**Verwachtingswaarde** dobbelsteen:",
        options: ["3,5","6","1","21"],
        answer: 0,
        wrongHints: [null, "Niet — dat is max.", "Niet — dat is min.", "Niet — dat is som, niet gemiddelde."],
        uitlegPad: {
          stappen: [{ titel: "Σ (waarde × kans)", tekst: "E = (1+2+3+4+5+6) × 1/6 = 21/6 = **3,5**. Op lange termijn gemiddeld 3,5 per worp." }],
          theorie: "Dobbelsteen heeft geen 3,5-zijde — verwachtingswaarde is gemiddelde, geen mogelijke uitkomst.",
          niveaus: { basis: "3,5. A.", simpeler: "21/6 = 3,5 = A.", nogSimpeler: "3,5 = A." },
        },
      },
      {
        q: "Een **eerlijk spel** heeft E gelijk aan:",
        options: ["0","1","0,5","Variabel"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — voor 50/50-kans, niet eerlijkheid.", "Niet specifiek."],
        uitlegPad: {
          stappen: [{ titel: "E = 0 betekent fair", tekst: "**Eerlijk spel**: lange termijn winst = 0. Speler wint of verliest niets gemiddeld. Casino's bouwen E < 0 in (voor speler) → winstgevend op de lange termijn voor het huis." }],
          theorie: "Voorbeeld: muntje gooien om €1 — eerlijk (E=0). Casino-spel — niet eerlijk (E<0 speler).",
          niveaus: { basis: "0. A.", simpeler: "Eerlijk = E = 0 = A.", nogSimpeler: "0 = A." },
        },
      },
      {
        q: "Bij **disjuncte** (uitsluitende) gebeurtenissen: P(A en B) = ?",
        options: ["0","P(A) × P(B)","P(A) + P(B)","1"],
        answer: 0,
        wrongHints: [null, "Niet — voor onafhankelijke.", "Niet — voor 'of'-vraag.", "Niet — alleen voor zekerheden."],
        uitlegPad: {
          stappen: [{ titel: "Disjunct = kunnen niet samen", tekst: "**Disjunct** = onverenigbaar = uitsluitend. Bv: dobbelsteen 6 EN dobbelsteen 5 in zelfde worp = onmogelijk. **P(A en B) = 0**." }],
          theorie: "Onverenigbaar ≠ onafhankelijk! Onafhankelijk: A en B beïnvloeden elkaar niet maar kunnen wel samen. Disjunct: kunnen NIET samen.",
          niveaus: { basis: "0. A.", simpeler: "Disjunct = P(A∩B) = 0 = A.", nogSimpeler: "0 = A." },
        },
      },
      {
        q: "Lot kost €5. Win €20 met kans 1/10, anders niets. E(winst) = ?",
        options: ["−€3","€20","€2","−€5"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet inzet aftrek.", "Niet — vergeet kans.", "Niet — wel deels winst."],
        uitlegPad: {
          stappen: [{ titel: "Winst = uitkomst − inzet", tekst: "Winnen: ontvang 20 − inzet 5 = +15 met kans 1/10. Niet winnen: verlies 5 met kans 9/10. E(winst) = 15×0,1 + (−5)×0,9 = 1,5 − 4,5 = **−3**. Speler verliest gemiddeld €3 per lot." }],
          theorie: "Tip: bij E-vragen altijd 'netto winst' uitrekenen (incl. inzet aftrek).",
          niveaus: { basis: "−3. A.", simpeler: "E = 15·0,1 − 5·0,9 = −3 = A.", nogSimpeler: "−3 = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — kansrekening mix",
    explanation:
      "Mix van basis-kans + boomdiagram + combinatoriek + Venn + E. HAVO/VWO-eindexamen-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "P(A) = 0,7. P(niet A) = ?",
        options: ["0,3","0,7","1,7","0"],
        answer: 0,
        wrongHints: [null, "Niet — dat is P(A) zelf.", "Niet — kansen ≤1.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Complement", tekst: "1 − 0,7 = 0,3." }],
          niveaus: { basis: "0,3. A.", simpeler: "Complement = 1-0,7 = 0,3 = A.", nogSimpeler: "0,3 = A." },
        },
      },
      {
        q: "5 mensen rond ronde tafel — hoeveel volgorden?",
        options: ["24","120","5","720"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 5! voor rij, niet ronde tafel.", "Te weinig.", "Niet — dat is 6!."],
        uitlegPad: {
          stappen: [{ titel: "Ronde tafel = (n-1)!", tekst: "Bij **ronde tafel** is 'eerste plaats' niet uniek → (n-1)! = 4! = **24**. Voor rij is 't 5! = 120." }],
          theorie: "Cito-truc: ronde tafel = (n-1)! ipv n!. Belangrijk verschil.",
          niveaus: { basis: "24. A.", simpeler: "(5-1)! = 24 = A.", nogSimpeler: "24 = A." },
        },
      },
      {
        q: "Vaas 3 wit + 7 zwart. P(eerste trek wit) = ?",
        options: ["0,3","0,7","3","0,1"],
        answer: 0,
        wrongHints: [null, "Niet — kans op zwart.", "Niet — aantal.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "3/10", tekst: "P(wit) = 3 / 10 = **0,3**." }],
          niveaus: { basis: "0,3. A.", simpeler: "3/10 = 0,3 = A.", nogSimpeler: "0,3 = A." },
        },
      },
      {
        q: "Verwachtingswaarde van **€10 winst met kans 0,4** (anders €0)?",
        options: ["€4","€10","€0","€4,40"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet kans-vermenigvuldiging.", "Niet — geen winst zonder kans.", "Niet — andere combo."],
        uitlegPad: {
          stappen: [{ titel: "E = waarde × kans", tekst: "E = 10 × 0,4 + 0 × 0,6 = **4**." }],
          niveaus: { basis: "4. A.", simpeler: "10·0,4 = 4 = A.", nogSimpeler: "4 = A." },
        },
      },
      {
        q: "Wanneer is **P(A en B) = P(A) × P(B)**?",
        options: ["Bij onafhankelijke gebeurtenissen","Altijd","Bij disjuncte","Bij volle kans 1"],
        answer: 0,
        wrongHints: [null, "Niet — alleen onafhankelijk.", "Niet — disjunct = 0.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Productregel onafhankelijkheid", tekst: "**Onafhankelijk** = A beïnvloedt B niet. Dan P(A∩B) = P(A)·P(B). Bij afhankelijk: P(A∩B) = P(A)·P(B|A)." }],
          niveaus: { basis: "Onafhankelijk. A.", simpeler: "Onafhankelijk → vermenigvuldigen = A.", nogSimpeler: "Onafhankelijk = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kansrekeningHavoVwo = {
  id: "kansrekening-havo-vwo",
  title: "Kansrekening + combinatoriek (HAVO/VWO Wisk A)",
  emoji: "🎲",
  level: "havo4-5-vwo",
  subject: "wiskunde",
  referentieNiveau: "havo-vwo-CSE",
  sloThema: "Wiskunde A — kansrekening + combinatoriek HAVO/VWO eindexamen",
  prerequisites: [
    { id: "statistiek-havo-vwo", title: "Statistiek HAVO/VWO", niveau: "havo-vwo-CSE" },
    { id: "kansrekening", title: "Kansrekening basis", niveau: "klas3-4" },
  ],
  intro:
    "Kansrekening voor HAVO/VWO Wiskunde A eindexamen. Basis-kans + complement, boomdiagram + product/som-regels, permutaties + combinaties (faculteit, lotto), Venndiagram + verwachtingswaarde + eerlijke spelen. ~15 min.",
  triggerKeywords: [
    "kans", "kansrekening", "P(A)", "complement",
    "boomdiagram", "product-regel", "som-regel",
    "afhankelijk", "onafhankelijk", "voorwaardelijke kans",
    "combinatoriek", "permutatie", "combinatie",
    "faculteit", "n!", "C(n,k)", "P(n,k)",
    "Venn", "Venndiagram",
    "verwachtingswaarde", "E(X)", "eerlijk spel",
    "lotto", "loterij", "casino",
    "disjunct", "onverenigbaar",
  ],
  chapters,
  steps,
};

export default kansrekeningHavoVwo;

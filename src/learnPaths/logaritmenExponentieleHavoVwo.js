// Leerpad: Logaritmen + Exponentiële functies — HAVO/VWO Wiskunde
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Machten, e, ln, log10,
// reken-regels, vergelijkingen, groei + verval.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["📊", "📈", "🔢", "📉", "🏆"];

const chapters = [
  { letter: "A", title: "Machten + wortels", emoji: "📊", from: 0, to: 0 },
  { letter: "B", title: "Exponentiële functies", emoji: "📈", from: 1, to: 1 },
  { letter: "C", title: "Logaritmen", emoji: "🔢", from: 2, to: 2 },
  { letter: "D", title: "Groei + verval", emoji: "📉", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (toepassingen)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Machten + wortels ─────────────────────────────────
  {
    title: "Machten — opfrissen + wortels als gebroken macht",
    explanation:
      "**Machtnotatie**: a^n = a · a · a · ... · a (n maal).\n• a = grondtal. n = exponent.\n• 2³ = 8. 5² = 25. 10⁴ = 10 000.\n\n**Rekenregels** (PAD-formule):\n• a^m · a^n = a^(m+n).\n• a^m / a^n = a^(m−n).\n• (a^m)^n = a^(m·n).\n• (a·b)^n = a^n · b^n.\n• (a/b)^n = a^n / b^n.\n\n**Speciale waarden**:\n• a⁰ = 1 (voor a ≠ 0).\n• a¹ = a.\n• a^(−n) = 1/a^n.\n• a^(½) = √a.\n• a^(1/n) = ⁿ√a.\n• a^(m/n) = ⁿ√(a^m).\n\n**Negatieve grondtallen**: voorzichtig.\n• (−2)² = 4 (even macht: positief).\n• (−2)³ = −8 (oneven macht: negatief).\n• (−2)^(½) = √(−2) = niet reëel (problematisch).\n\n**Wetenschappelijke notatie**:\n• 1,5 · 10⁸ = 150 000 000 (handig bij grote getallen).\n• 6,022 · 10²³ (Avogadro).\n• 3,0 · 10⁸ m/s (lichtsnelheid).\n• 1,6 · 10⁻¹⁹ C (elektron-lading).\n\n**Vereenvoudig**:\n• x³ · x⁵ = x⁸.\n• (x²)³ = x⁶.\n• x³ / x⁵ = x⁻² = 1/x².\n• 4^(½) = 2.\n• 8^(2/3) = ³√(8²) = ³√64 = 4.\n\n**Cito/CSE-tips**:\n• Alle wortels schrijven als gebroken macht voor uniformere rekenregels.\n• Negatieve exponent = omgekeerde.\n• Vereenvoudig altijd EERST voor je in formule stopt.",
    checks: [
      {
        q: "**2³ · 2⁴** = ?",
        options: ["2⁷", "2¹²", "4⁷", "16"],
        answer: 0,
        wrongHints: [null, "Niet — m+n, niet m·n.", "Niet — grondtal blijft 2.", "Niet — controleer berekening 2⁷."],
        uitlegPad: {
          stappen: [{ titel: "a^m · a^n = a^(m+n)", tekst: "2³ · 2⁴ = 2^(3+4) = **2⁷ = 128**. Bij MACHTEN-product: tellen op (zelfde grondtal)." }],
          niveaus: { basis: "2⁷. A.", simpeler: "Exponenten optellen: 3+4=7. A.", nogSimpeler: "2⁷ = A." },
        },
      },
      {
        q: "**Wat is 5⁰**?",
        options: ["1", "0", "5", "Onbepaald"],
        answer: 0,
        wrongHints: [null, "Niet — alleen 0⁰ is onbepaald.", "Niet — dat is 5¹.", "Niet — voor 5≠0 is bepaald."],
        uitlegPad: {
          stappen: [{ titel: "Elke a⁰ = 1 (a≠0)", tekst: "Volgt uit regel a^n / a^n = a^(n-n) = a⁰ = (per definitie van delen) 1. Werkt voor elke a ≠ 0. 0⁰ is wiskundig onbepaald." }],
          niveaus: { basis: "1. A.", simpeler: "Elk getal-tot-de-nul = 1. A.", nogSimpeler: "1 = A." },
        },
      },
      {
        q: "**8^(1/3)** = ?",
        options: ["2", "3", "24", "8/3"],
        answer: 0,
        wrongHints: [null, "Niet — verkeerde berekening.", "Niet — dat is keer.", "Niet — geen breuk."],
        uitlegPad: {
          stappen: [{ titel: "Derdemachtswortel", tekst: "a^(1/3) = ³√a. ³√8 = **2** (want 2³=8). 1/3-de macht is derdemachtswortel." }],
          niveaus: { basis: "2. A.", simpeler: "³√8 = 2. A.", nogSimpeler: "2 = A." },
        },
      },
      {
        q: "**a⁻² · a⁵** = ?",
        options: ["a³", "a⁷", "a⁻¹⁰", "1/a"],
        answer: 0,
        wrongHints: [null, "Niet — niet vergeten teken.", "Niet — vermenigvuldigen ipv optellen.", "Niet — controleer optelling."],
        uitlegPad: {
          stappen: [{ titel: "−2 + 5 = 3", tekst: "a⁻² · a⁵ = a^(−2+5) = **a³**. Negatieve exponenten gewoon optellen volgens reken-regel." }],
          niveaus: { basis: "a³. A.", simpeler: "-2 + 5 = 3, dus a³. A.", nogSimpeler: "a³ = A." },
        },
      },
      {
        q: "Welke gelijkheid klopt?",
        options: ["a^(m·n) = (a^m)^n", "a^m · b^m = (a·b)^(m²)", "a^m + a^n = a^(m+n)", "(a+b)^m = a^m + b^m"],
        answer: 0,
        wrongHints: [null, "Niet — exponent niet kwadrateren.", "Niet — som vs product verwarring.", "Niet — populair maar fout."],
        uitlegPad: {
          stappen: [
            { titel: "Macht-van-macht", tekst: "(a^m)^n = a^(m·n) — exponenten vermenigvuldigen. Voorbeeld: (2³)² = 2⁶ = 64 = 8² ✓. Andere fouten zijn klassieke valkuilen: (a+b)² = a² + 2ab + b² (NIET a² + b²)." },
          ],
          niveaus: { basis: "(a^m)^n correct. A.", simpeler: "Macht-van-macht = m·n. A.", nogSimpeler: "(a^m)^n = A." },
        },
      },
    ],
  },

  // ─── B. Exponentiële functies ─────────────────────────────
  {
    title: "Exponentiële functies — y = a · b^x",
    explanation:
      "**Exponentiële functie**: y = a · b^x.\n• **a** = beginwaarde (y bij x=0).\n• **b** = groei-factor per eenheid x (per stap met 1 vermenigvuldigt y met b).\n\n**Twee gevallen**:\n• b > 1 → **exponentiële groei** (stijgende kromme).\n• 0 < b < 1 → **exponentieel verval** (dalende kromme).\n• b = 1 → constant (geen exponentieel).\n• b ≤ 0 → niet bruikbaar (geeft negatieve waardes of complex).\n\n**Belangrijke voorbeelden**:\n• Bevolkingsgroei: N(t) = N₀ · (1+r)^t.\n• Bacterie-verdubbeling: N(t) = N₀ · 2^(t/T) (T = verdubbelingstijd).\n• Rente op spaargeld: K(t) = K₀ · (1+r)^t.\n• Radioactief verval: N(t) = N₀ · (½)^(t/t½) (= e^(−λt)).\n• Auto-waardevermindering: V(t) = V₀ · (1−r)^t.\n\n**Speciale gevallen** met grondtal e (Euler):\n• e ≈ 2,71828... (irrationaal).\n• y = e^x. Afgeleide gelijk aan zichzelf.\n• y = e^(kx): continue groei met snelheid k.\n• y = e^(−kx): verval.\n• Conversie: a · b^x = a · e^(x · ln(b)).\n\n**Grafiek-eigenschappen** y = b^x (b > 1):\n• Door (0, 1).\n• Voor x → −∞: y → 0 (horizontale asymptoot y=0).\n• Voor x → +∞: y → +∞ (snel!).\n• Stijgt sneller dan elke polynoom.\n\n**Vergelijking met polynoom**:\nNa lange tijd verslaat exponentieel ALTIJD polynoom. Bv. 2^x > x¹⁰⁰⁰ voor grote x. Daarom is exponentiële groei zo gevaarlijk in pandemie of bevolking.\n\n**Halveringstijd vs. levensduur**:\n• Halveringstijd t½: tijd voor halvering.\n• Verband: b = (½)^(1/t½).\n• Voorbeeld: t½ = 5 jaar → b = (½)^(1/5) ≈ 0,87 (per jaar 13% afname).\n\n**Verdubbelingstijd** (groei):\n• Tijd waarna populatie verdubbelt.\n• Vuistregel '**Rule of 70**': verdubbelingstijd ≈ 70 / groei-% per jaar.\n• 7% groei/jaar → verdubbelt elke ~10 jaar.\n• 2% groei/jaar → verdubbelt elke ~35 jaar.\n\n**Compound interest** (samengestelde rente):\nNa n jaar bij rente r per jaar: K(n) = K₀ · (1+r)^n.\nBv. €1000 bij 5% rente, 10 jaar: 1000 · 1,05¹⁰ ≈ 1629.",
    checks: [
      {
        q: "Een populatie groeit met 3% per jaar. Groei-factor b?",
        options: ["1,03", "0,03", "3", "1,3"],
        answer: 0,
        wrongHints: [null, "Niet — alleen de groei, niet totaal.", "Niet — drie keer is te veel.", "Niet — 30%."],
        uitlegPad: {
          stappen: [{ titel: "1 + r", tekst: "Bij groei: b = 1 + r/100. 3% groei → b = 1 + 0,03 = **1,03** per jaar. Na 10 jaar: factor 1,03¹⁰ ≈ 1,34 (34% meer)." }],
          niveaus: { basis: "1,03. A.", simpeler: "100% + 3% = 1,03. A.", nogSimpeler: "1,03 = A." },
        },
      },
      {
        q: "Een radioactieve stof: halveringstijd 5 jaar. Hoeveel over na **20 jaar**?",
        options: ["6,25%", "25%", "50%", "0%"],
        answer: 0,
        wrongHints: [null, "Niet — na 1 halvering.", "Niet — na 2 halveringen.", "Onmogelijk — nooit volledig nul."],
        uitlegPad: {
          stappen: [
            { titel: "(½)^(20/5) = (½)⁴", tekst: "20/5 = 4 halveringen. (½)⁴ = 1/16 = **6,25%** over. Tabel: 100→50→25→12,5→6,25." },
          ],
          niveaus: { basis: "(½)⁴=6,25%. A.", simpeler: "4 halveringen = 6,25%. A.", nogSimpeler: "6,25 = A." },
        },
      },
      {
        q: "€1000 sparen bij **4% rente**, 10 jaar. Eindbedrag?",
        options: ["~€1480", "~€1400", "~€2000", "~€10000"],
        answer: 0,
        wrongHints: [null, "Niet — exponentieel, niet lineair.", "Te groot.", "Onmogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Compound formula", tekst: "K = 1000 · 1,04¹⁰ = 1000 · 1,480 ≈ **€1480**. Vergelijking lineair (10×4%=40% = €1400): exponentieel geeft meer door 'rente op rente'." },
          ],
          theorie: "Vuistregel: bij ~7% rente verdubbelt geld elke 10 jaar. Bij 4%: elke ~17 jaar (rule of 70 / 4 ≈ 17,5).",
          niveaus: { basis: "~1480. A.", simpeler: "Iets meer dan 40% groei. A.", nogSimpeler: "1480 = A." },
        },
      },
      {
        q: "**Verdubbelingstijd** bij 7% groei per jaar?",
        options: ["~10 jaar", "~7 jaar", "~14 jaar", "~70 jaar"],
        answer: 0,
        wrongHints: [null, "Niet — verwarring met %.", "Niet — kwadrant fout.", "Niet — formule is 70/r."],
        uitlegPad: {
          stappen: [{ titel: "Rule of 70", tekst: "Verdubbelingstijd ≈ 70 / groei-%. Bij 7%: 70/7 = **10 jaar**. Handige vuistregel — exact via t = ln(2)/ln(1+r) ≈ 0,693/0,0677 ≈ 10,2 jaar." }],
          niveaus: { basis: "~10 jaar. A.", simpeler: "70/7=10. A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Een functie y = 100 · (0,8)^x. Wat gebeurt bij grote x?",
        options: ["y nadert 0 (verval)", "y stijgt explosief", "y is constant", "y wordt negatief"],
        answer: 0,
        wrongHints: [null, "Niet — b<1 = daling.", "Niet — daalt.", "Niet — exponentieel nooit negatief."],
        uitlegPad: {
          stappen: [{ titel: "0 < b < 1 → verval", tekst: "Groei-factor 0,8 < 1 → elke stap 20% minder. Bij grote x → 0 (asymptoot, nooit precies 0)." }],
          niveaus: { basis: "Nadert 0. A.", simpeler: "Daalt naar nul. A.", nogSimpeler: "0 = A." },
        },
      },
    ],
  },

  // ─── C. Logaritmen ────────────────────────────────────────
  {
    title: "Logaritmen — omgekeerde van exponentiële functie",
    explanation:
      "**Definitie**: log_b(y) = x betekent: b^x = y.\n• 'Tot welke macht moet ik b verheffen om y te krijgen?'\n\n**Notatie**:\n• log_b(x): logaritme met grondtal b.\n• **log(x)** zonder grondtal = log₁₀(x) (decimale logaritme).\n• **ln(x)** = log_e(x) = natuurlijke logaritme (grondtal e).\n• Op rekenmachine: 'log' = log₁₀; 'ln' = log_e.\n\n**Voorbeelden**:\n• log₂(8) = 3, want 2³ = 8.\n• log₁₀(1000) = 3.\n• log₁₀(0,01) = −2.\n• log_e(e) = 1.\n• log_e(1) = 0.\n• log_e(e²) = 2.\n\n**Rekenregels** (essentieel!):\n• log(a · b) = log(a) + log(b).\n• log(a / b) = log(a) − log(b).\n• log(a^n) = n · log(a).\n• log_b(b^x) = x.\n• b^(log_b(x)) = x.\n• log_b(1) = 0.\n• log_b(b) = 1.\n\n**Basis-conversie** (verandering grondtal):\nlog_b(x) = ln(x) / ln(b) = log(x) / log(b).\n\nVoorbeeld: log₂(10) = ln(10)/ln(2) = 2,303/0,693 ≈ 3,32.\n\n**Toepassingen logaritmische schalen**:\n• **pH**: pH = −log₁₀([H⁺]).\n  - pH 7 = neutraal = 10⁻⁷ mol/L H⁺.\n  - pH 4 = 1000× meer zuur dan pH 7.\n• **Decibel**: dB = 10 · log₁₀(I/I₀).\n  - 10 dB extra = 10× zo intens.\n• **Aardbeving (Richter)**: M = log₁₀(amplitude).\n  - Magnitude 7 = 10× sterker dan 6.\n• **Helderheid sterren**: 1 magnitude = factor 2,5× helderder.\n• **Muzieknoten**: octaaf = verdubbeling frequentie (log₂-schaal).\n\nWaarom log-schalen? Veel natuurlijke fenomenen overspannen vele orden van grootte. Op log-schaal worden ze visueel handelbaar.\n\n**Logaritmische vergelijkingen oplossen**:\nVoorbeeld: 2^x = 16.\nLog₂ beide kanten: x · log₂(2) = log₂(16) → x = 4.\n\nOf: 2^x = 10.\nx · log(2) = log(10) → x = 1 / 0,301 ≈ 3,32.\n\nOf: 3 · 2^x = 24.\n2^x = 8 → x = 3.\n\n**Veelgemaakte fouten**:\n• log(a + b) ≠ log(a) + log(b). (Som logaritme bestaat niet zonder rekenregel.)\n• log(a²) = 2 log(a) (niet log²(a)).",
    checks: [
      {
        q: "**log₂(32)** = ?",
        options: ["5", "16", "2", "32/2"],
        answer: 0,
        wrongHints: [null, "Niet — dat is helft.", "Niet — dat is wortel.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "2^? = 32", tekst: "32 = 2 · 2 · 2 · 2 · 2 = 2⁵. Dus log₂(32) = **5**. Tot welke macht moet 2 verheven worden? 5." }],
          niveaus: { basis: "5. A.", simpeler: "2⁵=32, dus log₂(32)=5. A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "**ln(e²)** = ?",
        options: ["2", "e", "e²", "1"],
        answer: 0,
        wrongHints: [null, "Niet — log van zichzelf.", "Niet — log van macht.", "Niet — dat is ln(e)."],
        uitlegPad: {
          stappen: [{ titel: "ln(e^n) = n", tekst: "ln neemt log met grondtal e. Macht n van e: ln(e^n) = n. Hier n=2 → **2**. Generaliseerd: log_b(b^n) = n." }],
          niveaus: { basis: "2. A.", simpeler: "ln en e zijn omgekeerd. A.", nogSimpeler: "2 = A." },
        },
      },
      {
        q: "Vereenvoudig **log(100) + log(10)**:",
        options: ["3 (= log 1000)", "log 110", "1000", "log(110)"],
        answer: 0,
        wrongHints: [null, "Niet — log(som) ≠ som(log).", "Niet — wel 1000 product.", "Niet — som ≠ log."],
        uitlegPad: {
          stappen: [
            { titel: "log(a) + log(b) = log(a·b)", tekst: "log(100) + log(10) = log(100·10) = log(1000) = **3**. Productregel logaritmen." },
          ],
          niveaus: { basis: "3. A.", simpeler: "Som log = log product. A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Een aardbeving 7 op Richter is **hoeveel sterker** dan 5?",
        options: ["100× sterker", "2× sterker", "7/5×", "10× sterker"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Onzin.", "Dat zou 6 vs 5 zijn."],
        uitlegPad: {
          stappen: [
            { titel: "10× per magnitude", tekst: "Richter is log₁₀-schaal. 7−5 = 2 stappen → 10² = **100× sterker** amplitude. Energie zelfs ~32× per magnitude → bij verschil 2: ~1000× energie." },
          ],
          theorie: "Aardbeving 9,1 (Sumatra 2004) ~ 1000× sterker dan 7 — uitzonderlijk vernietigend.",
          niveaus: { basis: "100×. A.", simpeler: "Log-schaal: 2 stappen = 100×. A.", nogSimpeler: "100 = A." },
        },
      },
      {
        q: "Vergelijking **2^x = 32**. x = ?",
        options: ["5", "16", "10", "30"],
        answer: 0,
        wrongHints: [null, "Niet — verwarring.", "Niet — verkeerde rekensom.", "Onzin."],
        uitlegPad: {
          stappen: [{ titel: "Log van beide kanten", tekst: "log₂(2^x) = log₂(32). x = log₂(32) = **5**. Of direct: 2⁵=32 → x=5. Bij 2^x = 10: x = log₂(10) ≈ 3,32 (niet-geheel)." }],
          niveaus: { basis: "5. A.", simpeler: "2^5=32. A.", nogSimpeler: "5 = A." },
        },
      },
    ],
  },

  // ─── D. Groei + verval ────────────────────────────────────
  {
    title: "Exponentiële groei + verval (toepassingen)",
    explanation:
      "**Model exponentiële groei**: N(t) = N₀ · e^(k·t) of N(t) = N₀ · b^t.\n• k > 0: groei.\n• k < 0: verval.\n• Verband: b = e^k.\n\n**Halveringstijd t½**:\nVoor verval N(t) = N₀ · e^(−λ·t):\n• Op t = t½ is N(t) = N₀/2.\n• N₀/2 = N₀ · e^(−λ·t½).\n• ½ = e^(−λ·t½).\n• ln(½) = −λ·t½.\n• **t½ = ln(2) / λ ≈ 0,693 / λ**.\n\n**Verdubbelingstijd t_2** (groei):\n• Op t = t_2 is N(t) = 2·N₀.\n• Analoog: t_2 = ln(2) / k.\n\n**Bevolkings-paradox**:\n• Linear groei: +x mensen/jaar.\n• Exponentieel: ×y per jaar.\n• Op lange termijn ALTIJD exponentieel >> lineair.\n• Daarom: 'rente op rente' wordt enorm na decennia.\n\n**Pandemie**:\n• Virus R₀ = 2 (één persoon besmet 2 anderen).\n• Generatie-tijd ~5 dagen.\n• Na 30 dagen: 2⁶ = 64× zoveel besmettingen. Na 60 dagen: 4096×.\n• Daarom is 'platdrukken' (verlagen R) cruciaal — beperken exponentiële fase.\n\n**Wet van afkoelen** (Newton):\nT(t) − T_omg = (T₀ − T_omg) · e^(−k·t).\nVoorwerp benadert omgevingstemperatuur exponentieel. Halftijd is constant.\n\n**Verval radioactiviteit**:\nA(t) = A₀ · e^(−λt) waar A = activiteit (Bq).\nHalveringstijd verschillend per isotoop:\n• ¹⁴C: 5730 jaar (datering).\n• ²³⁸U: 4,5·10⁹ jaar (geologisch).\n• ¹³¹I: 8 dagen (medisch).\n• ²²²Rn: 3,8 dagen (radon-gas).\n\n**Logistische groei** (echte populaties):\nIn echt: exponentieel afgeremd door draagkracht K:\ndN/dt = r·N·(1 − N/K).\n• Klein N: lijkt exponentieel.\n• Bij K: plat.\n• S-vormige curve.\n\n**Voorbeeld VWO**: koffie van 80 °C in kamer van 20 °C, na 10 min op 60 °C. Wanneer 30 °C?\n80 − 20 = 60 = startverschil.\n60 − 20 = 40 = na 10 min.\n40/60 = (½)^(10/t½) → t½ ≈ 17 min.\nVoor 30 °C: 30 − 20 = 10. 10/60 = 1/6 = (½)^(t/17) → t/17 = log₂(6) ≈ 2,58 → t ≈ 44 min.",
    checks: [
      {
        q: "Bacteriën verdubbelen elke 20 min. Hoeveel keer na **2 uur** (120 min)?",
        options: ["64× (= 2⁶)", "6×", "32×", "12×"],
        answer: 0,
        wrongHints: [null, "Niet — exponentieel.", "Niet — verdubbeling 5×.", "Niet — controleer."],
        uitlegPad: {
          stappen: [{ titel: "120 / 20 = 6 stappen", tekst: "Aantal verdubbelingen = 120/20 = 6. Vermenigvuldigingsfactor = 2⁶ = **64**. Dus 1 bacterie → 64 in 2 uur." }],
          theorie: "Realiteit: na een tijd loopt het tegen draagkracht (voedsel op, ruimte op) → logistische groei.",
          niveaus: { basis: "64×. A.", simpeler: "2 tot de 6e = 64. A.", nogSimpeler: "64 = A." },
        },
      },
      {
        q: "Een isotoop heeft λ = 0,1 per jaar. Halveringstijd?",
        options: ["~6,93 jaar", "~0,1 jaar", "~10 jaar", "Onbepaald"],
        answer: 0,
        wrongHints: [null, "Niet — dat is λ zelf.", "Niet — close, niet exact.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "t½ = ln(2)/λ", tekst: "t½ = 0,693 / 0,1 = **6,93 jaar**. Na ~7 jaar helft over. Na ~14 jaar kwart over." }],
          niveaus: { basis: "ln(2)/0,1 ≈ 6,93. A.", simpeler: "0,693/0,1 = ~7. A.", nogSimpeler: "6,93 = A." },
        },
      },
      {
        q: "Een virus met R₀ = 3, generatie 5 dagen. Na **15 dagen**?",
        options: ["27× zoveel", "3× zoveel", "15× zoveel", "45× zoveel"],
        answer: 0,
        wrongHints: [null, "Niet — eerste generatie.", "Niet — verwarring lineair.", "Niet — onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "3 generaties", tekst: "15/5 = 3 generaties. 3³ = **27**. Dus 27× besmettingen na 15 dagen. Exponentiële groei is 'verraderlijk': lijkt klein vroeg, explodeert later." },
          ],
          theorie: "COVID-19 had R₀ ~2-3 zonder maatregelen, dubbelingstijd ~3-5 dagen. Lockdowns + vaccinaties brachten R onder 1.",
          niveaus: { basis: "27× = A.", simpeler: "3 generaties × 3-voud = 27. A.", nogSimpeler: "27 = A." },
        },
      },
      {
        q: "Een **logistische curve** lijkt op exponentieel bij:",
        options: [
          "Lage N (ver onder draagkracht K)",
          "Hoge N (dichtbij K)",
          "N = K",
          "N = 0"
        ],
        answer: 0,
        wrongHints: [null, "Niet — daar plat.", "Niet — daar stilstand.", "Niet — daar geen groei."],
        uitlegPad: {
          stappen: [
            { titel: "Lage densiteit = veel ruimte", tekst: "Bij lage N: dN/dt ≈ r·N (1−0) = r·N → exponentieel. Vol-tegen-K: dN/dt → 0. Daarom S-vormig: start exponentieel, eindigt vlak." },
          ],
          niveaus: { basis: "Lage N. A.", simpeler: "Vroege fase exp, late vlak. A.", nogSimpeler: "Laag N = A." },
        },
      },
      {
        q: "Een houtmonster heeft 12,5% van ¹⁴C. Hoe oud? (t½=5730 j)",
        options: ["~17 190 jaar", "~5 730 jaar", "~11 460 jaar", "Pas dood"],
        answer: 0,
        wrongHints: [null, "Niet — 50% over.", "Niet — 25% over.", "Niet — al ver in tijd."],
        uitlegPad: {
          stappen: [
            { titel: "12,5% = (½)³ = 3 halveringstijden", tekst: "100% → 50% → 25% → 12,5%. Drie halveringstijden = 3·5730 = **17 190 jaar**. Pre-historisch (laat-ijstijd)." },
          ],
          niveaus: { basis: "17 190. A.", simpeler: "Drie halveringen × 5730 j. A.", nogSimpeler: "17k = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — toepassings-mix",
    explanation:
      "**Examen-vraag-types**:\n\n**1. Bevolkings-projectie**:\nWereld 2024: ~8 mld. Groei 0,9% per jaar. Bevolking in 2050?\n• 26 jaar × 0,9% groei.\n• N = 8 · (1,009)²⁶ ≈ 8 · 1,26 ≈ 10,1 mld.\n• VN-projectie: ~9,7 mld in 2050.\n\n**2. Rente-vergelijking**:\nSparen €1000 bij 3% vs lenen bij 5% over 20 jaar.\n• Sparen: 1000 · 1,03²⁰ ≈ 1806.\n• Lenen (terugbetaal): 1000 · 1,05²⁰ ≈ 2653.\n• Verschil ~€850 — verklaart waarom banken winst maken.\n\n**3. CO₂-budget**:\nHuidige uitstoot 37 Gt/j. Voor 1,5 °C: nog ~400 Gt 'budget'.\n• Tempo gelijk: 400/37 ≈ 11 jaar tot grens.\n• Voor halvering tegen 2030: jaarlijks ~7% reductie nodig — exponentieel afname.\n\n**4. Spaardoel**:\nVoor €100 000 in 30 jaar bij 5% rente — hoeveel start-bedrag?\n• 100 000 = K₀ · 1,05³⁰.\n• 1,05³⁰ ≈ 4,32.\n• K₀ ≈ 100 000 / 4,32 ≈ **€23 138**.\n\n**5. Aardbeving-vergelijking**:\nKobe (1995, M 6,9) vs Sendai (2011, M 9,1). Verschil energie?\n• Magnitudes verschillen 2,2.\n• Energie-verhouding ≈ 32^2,2 ≈ 1700×.\n• Sendai dus ~1700× energetischer.\n\n**6. Pandemie-modellering**:\nR₀ = 3, generatie 5 dagen. Verlagen R via maatregelen naar 0,8 (R<1):\n• Bij R<1: exponentieel verval — pandemie dooft uit.\n• Generatie 5 dgn: na 50 dgn (10 gen): (0,8)¹⁰ ≈ 0,107 → 90% reductie cases.\n\n**Belangrijk**:\n• ALTIJD eenheden checken.\n• Exponentiële groei is sneaky — start klein, explodeert.\n• Log-schalen zijn handzaam voor over-grote-bereik-fenomenen.\n• Compound interest werkt voor + tegen je (sparen + leningen).\n• Doubling time / halving time = handige vuistregels.",
    checks: [
      {
        q: "Een spaarrekening: **€500 sparen, 4% rente per jaar**. Na 5 jaar?",
        options: ["~€608", "~€500", "~€600", "~€700"],
        answer: 0,
        wrongHints: [null, "Niet — rente erbij.", "Net iets meer.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "K · b^t", tekst: "500 · 1,04⁵ = 500 · 1,217 ≈ **€608**." }],
          niveaus: { basis: "608. A.", simpeler: "5 jaar 4% rente. A.", nogSimpeler: "608 = A." },
        },
      },
      {
        q: "**ln(e^7 · e^3)** = ?",
        options: ["10", "21", "7·3=21", "ln(e^10)"],
        answer: 0,
        wrongHints: [null, "Niet — exponenten optellen, niet vermenigvuldigen.", "Idem.", "Niet — vraag voor getal."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst product simplificeren", tekst: "e^7 · e^3 = e^10. ln(e^10) = **10**. Macht-regel + ln-eigenschap." },
          ],
          niveaus: { basis: "10. A.", simpeler: "7+3=10, ln(e^10)=10. A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "**pH = 4** vs **pH = 7** — hoeveel **zuurder**?",
        options: ["1000× zuurder", "3× zuurder", "100× zuurder", "Half zo zuur"],
        answer: 0,
        wrongHints: [null, "Niet — log-schaal.", "Niet — drie stappen = 1000.", "Niet — andersom."],
        uitlegPad: {
          stappen: [
            { titel: "log10-schaal", tekst: "pH = −log[H⁺]. Verschil 3 → 10³ = **1000× meer H⁺**. Maag-zuur ~ pH 2 = miljoen-keer zuurder dan zuiver water." },
          ],
          niveaus: { basis: "1000×. A.", simpeler: "3 pH-eenheden = 1000×. A.", nogSimpeler: "1000 = A." },
        },
      },
      {
        q: "Een populatie groeit met **R₀ = 0,9** (R<1). Wat gebeurt?",
        options: [
          "Exponentieel verval — sterft uit",
          "Exponentiële groei",
          "Stabiel",
          "Logistische groei"
        ],
        answer: 0,
        wrongHints: [null, "Niet — R<1 = uitsterving.", "Niet — pas bij R=1.", "Niet — R<1 betekent geen groei."],
        uitlegPad: {
          stappen: [{ titel: "R<1 = krimp", tekst: "Bij R<1: elke generatie kleiner dan vorige → exponentieel verval. Voor pandemie cruciaal: 'platdrukken' = R<1 bereiken via maatregelen + immuniteit + vaccinatie." }],
          niveaus: { basis: "Verval. A.", simpeler: "R<1 = krimp. A.", nogSimpeler: "Verval = A." },
        },
      },
      {
        q: "Een muziek-octaaf verdubbelt frequentie. **Vier octaven hoger** = factor:",
        options: ["16×", "8×", "4×", "32×"],
        answer: 0,
        wrongHints: [null, "Niet — drie octaven.", "Niet — twee octaven.", "Niet — vijf octaven."],
        uitlegPad: {
          stappen: [
            { titel: "2⁴", tekst: "Per octaaf 2×. Vier octaven: 2⁴ = **16×**. Bv. A2 (110 Hz) → A6 (1760 Hz). Klassiek voorbeeld log-schaal in muziek." },
          ],
          theorie: "12 noten per octaaf in westerse muziek: elke noot = 2^(1/12) ≈ 1,059 frequentie-verhoudingsfactor.",
          niveaus: { basis: "16×. A.", simpeler: "2^4 = 16. A.", nogSimpeler: "16 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const logaritmenExponentieleHavoVwo = {
  id: "logaritmen-exponentieel-havo-vwo",
  title: "Logaritmen + Exponentiële functies (HAVO/VWO Wiskunde)",
  emoji: "📊",
  level: "havo-vwo-4-5",
  subject: "wiskunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Wiskunde — Logaritmen + Exponentiële functies (CSE-onderwerp wis-A/B)",
  prerequisites: [
    { id: "pythagoras", title: "Pythagoras + Rekenen", niveau: "vmbo-3F" },
  ],
  intro:
    "Logaritmen + Exponentiële functies voor HAVO/VWO eindexamen — machten + wortels, y=a·b^x, logaritme als omgekeerde, groei + verval (halveringstijd, verdubbelingstijd), toepassingen (rente, pH, aardbeving, pandemie). 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "machten", "exponenten",
    "wortel", "gebroken macht",
    "wetenschappelijke notatie",
    "exponentiële functie", "y=a·b^x",
    "groei-factor", "verval-factor",
    "e", "Euler", "natuurlijke logaritme",
    "logaritme", "log", "ln",
    "log10", "log_b",
    "logaritmische schaal",
    "Richter", "pH", "decibel",
    "halveringstijd", "verdubbelingstijd",
    "rule of 70",
    "compound interest", "samengestelde rente",
    "exponentiële groei", "verval",
    "logistische groei", "draagkracht",
    "pandemie", "R₀", "reproductiegetal",
    "afkoelwet", "Newton",
    "C-14 datering",
  ],
  chapters,
  steps,
};

export default logaritmenExponentieleHavoVwo;

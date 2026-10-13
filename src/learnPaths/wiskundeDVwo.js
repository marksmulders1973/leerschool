// Leerpad: Wiskunde D — VWO specialisatie
// Complexe getallen + matrices + meetkunde. Schoolexamen (SE).
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  comp: "#42a5f5",
  matr: "#66bb6a",
  goud: "#ffd54f",
};

const stepEmojis = ["ℹ", "🔢", "🟨", "📐", "🏆"];

const chapters = [
  { letter: "A", title: "Complexe getallen — basis", emoji: "ℹ", from: 0, to: 0 },
  { letter: "B", title: "Complexe getallen — polair", emoji: "🔢", from: 1, to: 1 },
  { letter: "C", title: "Matrices basis", emoji: "🟨", from: 2, to: 2 },
  { letter: "D", title: "Lineaire afbeeldingen", emoji: "📐", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Complexe getallen — basis ─────────────────────────
  {
    title: "Complexe getallen — basis",
    explanation:
      "**Wiskunde D** = VWO-specialisatievak (alleen SE, geen CSE). Voor N&T-profiel + technische studies. Onderwerpen: complexe getallen, matrices, statistiek-verdieping, meetkunde.\n\n**Reële getallen** (ℝ) zijn niet genoeg voor alle wiskunde.\n• x² = −1 heeft geen reële oplossing.\n• Daarom: uitbreiding naar **complexe getallen** (ℂ).\n\n**De imaginaire eenheid i**:\n• **$i^2 = -1$**.\n• i = √(−1) (informeel).\n• Vandaar de naam 'imaginair'.\n\n**Complex getal** z:\n• z = a + bi.\n• a = **reëel deel** (Re(z) = a).\n• b = **imaginair deel** (Im(z) = b).\n• Voorbeelden: 3 + 2i, −1 − 4i, 5i (zuiver imaginair), 7 (zuiver reëel met b=0).\n\n**Complex vlak (Gauss-vlak)**:\n• Tekenen op vlak: horizontale as = reëel, verticale = imaginair.\n• Punt (a, b) voor a + bi.\n• Voorbeeld: 3 + 2i ligt op (3, 2).\n\n**Rekenregels**:\n\n**Optellen** (per component):\n• (a + bi) + (c + di) = (a+c) + (b+d)i.\n• Voorbeeld: (3 + 2i) + (1 + 4i) = 4 + 6i.\n\n**Aftrekken**:\n• (a + bi) − (c + di) = (a−c) + (b−d)i.\n\n**Vermenigvuldigen**:\n• (a + bi)(c + di) = ac + adi + bci + bdi².\n• Met i² = −1: = (ac − bd) + (ad + bc)i.\n• Voorbeeld: (3 + 2i)(1 + 4i) = 3 + 12i + 2i + 8i² = 3 + 14i − 8 = −5 + 14i.\n\n**Geconjugeerde**:\n• Van z = a + bi → **$\\bar{z} = a - bi$** (imaginaire deel-teken omgekeerd).\n• Voorbeeld: 3 + 2i → 3 − 2i.\n\n**Eigenschap**: z · z̄ = a² + b² (altijd reëel, niet-negatief).\n\n**Delen** (truc: vermenigvuldig met geconjugeerde):\n• (a + bi) / (c + di) = ((a + bi)(c − di)) / ((c + di)(c − di)) = ((a + bi)(c − di)) / (c² + d²).\n• Voorbeeld: (3 + 2i) / (1 + i):\n  - Vermenigvuldig boven + onder met geconjugeerde (1 − i):\n  - Boven: (3 + 2i)(1 − i) = 3 − 3i + 2i − 2i² = 3 − i + 2 = 5 − i.\n  - Onder: (1 + i)(1 − i) = 1 − i² = 1 + 1 = 2.\n  - Resultaat: (5 − i)/2 = 2,5 − 0,5i.\n\n**Modulus (lengte/absolute waarde)**:\n• $|z| = \\sqrt{a^2 + b^2}$ — Pythagoras vanaf oorsprong.\n• Voorbeeld: |3 + 4i| = √(9 + 16) = √25 = 5.\n\n**Argument**:\n• Hoek met positieve x-as.\n• arg(z) = arctan(b/a) — let op kwadrant.\n• Voorbeeld: 1 + i → arg = arctan(1/1) = 45° = π/4.\n\n**Oplossen vergelijkingen**:\n• x² + 1 = 0 → x² = −1 → x = ±i.\n• x² + 4 = 0 → x = ±2i.\n• Algemeen kwadratisch met negatieve discriminant heeft 2 complexe wortels.\n• Voorbeeld: x² − 2x + 5 = 0.\n  - D = 4 − 20 = −16.\n  - x = (2 ± √(−16)) / 2 = (2 ± 4i) / 2 = 1 ± 2i.\n  - Twee complexe oplossingen, elkaars geconjugeerde.\n\n**Fundamentele stelling algebra**:\n• Elk polynoom van graad n heeft **precies n complexe wortels** (met multipliciteit).\n• x³ − 1 = 0 heeft drie complexe oplossingen.\n• Reden voor uitbreiding ℝ → ℂ: alle polynomen factoriseerbaar.\n\n**Toepassingen**:\n• Elektrotechniek: wisselstroom-circuits (j gebruikt ipv i om verwarring met stroom-I te voorkomen).\n• Kwantummechanica: golffunctie complex.\n• Signaal-bewerking: Fourier-transformatie.\n• Computer graphics: rotaties via complexe getallen.\n• Mandelbrot-set (fractalen).",
    checks: [
      {
        q: "Wat is **i²**?",
        options: ["−1","1","0","i"],
        answer: 0,
        wrongHints: [null, "i is juist zo gedefinieerd dat i² niet 1 is. Welk getal heeft in de reële getallen geen wortel?", "Alleen 0 × 0 = 0. Is i gelijk aan 0?", "i · i is niet i, net zoals 2 · 2 niet 2 is. Wat is de definitie van i?"],
        uitlegPad: {
          stappen: [{ titel: "Imaginaire eenheid", tekst: "**i² = −1** is de **definitie**. Daaruit volgt: i³ = i·i² = i·(−1) = −i. i⁴ = i²·i² = (−1)·(−1) = 1. Daarna herhaalt: i⁵ = i, i⁶ = −1, etc. Cyclus 4." }],
          niveaus: { basis: "−1.", simpeler: "i² = −1", nogSimpeler: "−1" },
        },
      },
      {
        q: "**(3 + 2i)(1 + i)** = ?",
        options: ["1 + 5i","3 + 2i","4 + 3i","5 + 5i"],
        answer: 0,
        wrongHints: [null, "Dat is (3 + 2i) zelf: je vermenigvuldigde alleen met de 1. Wat geeft (3 + 2i) · i nog?", "4 + 3i = (3 + 2i) + (1 + i): je telde op. Werk de haakjes uit: elke term keer elke term.", "Je rekende met i² = +1. Wat is i² ook alweer?"],
        uitlegPad: {
          stappen: [
            { titel: "FOIL + i²=−1", tekst: "(3 + 2i)(1 + i) = 3·1 + 3·i + 2i·1 + 2i·i = 3 + 3i + 2i + 2i² = 3 + 5i − 2 = **1 + 5i**." },
          ],
          niveaus: { basis: "1 + 5i.", simpeler: "3 + 5i − 2 = 1 + 5i", nogSimpeler: "1+5i" },
        },
      },
      {
        q: "Wat is **|3 + 4i|** (modulus)?",
        options: ["5","7","25","12"],
        answer: 0,
        wrongHints: [null, "7 = 3 + 4. De modulus is de afstand tot 0 in het complexe vlak: welke stelling gebruik je voor die afstand?", "25 = 3² + 4². Je bent er bijna: welke stap moet nog?", "12 = 3 · 4: je vermenigvuldigde. Teken 3 + 4i als punt: hoe ver ligt het van 0?"],
        uitlegPad: {
          stappen: [{ titel: "Pythagoras", tekst: "**|z| = √(a² + b²)**. Hier: |3 + 4i| = √(9 + 16) = √25 = **5**.\n\nKlassieke Pythagoras-rechthoekige driehoek 3-4-5." }],
          niveaus: { basis: "5.", simpeler: "√(9+16)=5", nogSimpeler: "5" },
        },
      },
      {
        q: "**Geconjugeerde** van **3 − 4i**:",
        options: ["3 + 4i","−3 + 4i","−3 − 4i","4 − 3i"],
        answer: 0,
        wrongHints: [null, "Bij toevoegen blijft het reële deel gelijk. Welk deel krijgt een ander teken?", "Je draaide beide tekens om; dat is −z. Bij toevoegen verandert maar één teken: welk?", "Je verwisselde het reële en het imaginaire deel. Wat gebeurt er bij toevoegen echt?"],
        uitlegPad: {
          stappen: [{ titel: "Spiegelen langs reële as", tekst: "**Geconjugeerde** = imaginaire deel-teken omkeren. 3 − 4i → **3 + 4i**. In complex vlak: spiegelen langs reële (horizontale) as.\n\nEigenschap: z·z̄ = (3−4i)(3+4i) = 9 + 16 = 25 (altijd reëel)." }],
          niveaus: { basis: "3+4i.", simpeler: "Geconjugeerd = teken om", nogSimpeler: "3 + 4i." },
        },
      },
      {
        q: "x² − 4x + 13 = 0. Oplossing?",
        options: ["x = 2 ± 3i","x = 4 ± 6i","x = −2 ± 3i","x = 2 ± 6i"],
        answer: 0,
        wrongHints: [null, "Je vergat te delen door 2a = 2.", "Let op het teken: in de abc-formule staat −b. Wat is −b als b = −4?", "Deel je de hele teller door 2, ook het deel met i?"],
        uitlegPad: {
          stappen: [
            { titel: "Discriminant negatief", tekst: "D = b² − 4ac = 16 − 52 = −36. Negatief → complexe oplossing." },
            { titel: "Wortelformule", tekst: "x = (4 ± √(−36)) / 2 = (4 ± 6i)/2 = **2 ± 3i**. Twee complexe wortels, elkaars geconjugeerde." },
          ],
          niveaus: { basis: "2±3i.", simpeler: "(4±6i)/2 = 2±3i", nogSimpeler: "2 ± 3i." },
        },
      },
    ],
  },

  // ─── B. Complexe getallen — polair ────────────────────────
  {
    title: "Complexe getallen — polaire vorm + Euler",
    explanation:
      "Naast **cartesisch** (a + bi) is er **polaire** vorm.\n\n**Polaire vorm**:\n• z = r(cos θ + i·sin θ).\n• r = |z| = modulus.\n• θ = arg(z) = argument (hoek).\n\n**Conversie cartesisch ↔ polair**:\n• r = √(a² + b²).\n• θ = arctan(b/a) (let op kwadrant!).\n• a = r·cos θ, b = r·sin θ.\n\n**Voorbeeld**:\nz = 1 + i:\n• r = √2.\n• θ = arctan(1) = π/4 = 45°.\n• Polair: √2 (cos 45° + i sin 45°).\n\n**Eulerformule**:\n**$e^{i\\theta} = \\cos\\theta + i\\sin\\theta$**.\n• Daarom: z = r·e^(iθ) (exponentiële vorm — kortste vorm).\n• Beroemd: **$e^{i\\pi} + 1 = 0$** (Euler's identiteit, mooiste formule wiskunde — combineert e, i, π, 1, 0).\n\n**Vermenigvuldigen in polair**:\nz₁·z₂ = r₁·r₂ · e^(i(θ₁+θ₂)).\n• Modulus vermenigvuldigt.\n• Argumenten optellen.\n• Bv: 2e^(iπ/4) × 3e^(iπ/3) = 6e^(i·7π/12).\n\n**Delen**:\nz₁/z₂ = (r₁/r₂) · e^(i(θ₁−θ₂)).\n• Modulus delen.\n• Argumenten aftrekken.\n\n**Stelling De Moivre**:\nz^n = r^n · e^(inθ) = r^n (cos nθ + i sin nθ).\n• Voor machten van complexe getallen.\n• Voorbeeld: (1 + i)⁴.\n  - 1 + i = √2 · e^(iπ/4).\n  - (√2)⁴ · e^(iπ) = 4 · (−1) = **−4**.\n  - Check via uitwerken: (1+i)² = 1 + 2i − 1 = 2i. (2i)² = −4. ✓\n\n**N-de wortels**:\nz^(1/n) heeft **n verschillende waarden**:\nz_k = r^(1/n) · e^(i(θ + 2kπ)/n) voor k = 0, 1, ..., n−1.\n\n• Op complex vlak vormen ze **regelmatige n-hoek** rond oorsprong.\n• 4 wortels uit 1: 1, i, −1, −i (op eenheidscirkel, hoeken 90° apart).\n\n**Eenheidscirkel**:\n• |z| = 1 → z ligt op cirkel om oorsprong straal 1.\n• z = e^(iθ).\n• Alle 'eenheids-getallen' rouleren rond met θ.\n\n**Rotaties via complex**:\n• Vermenigvuldigen met e^(iα) = rotatie met hoek α.\n• Vermenigvuldigen met i = rotatie 90°.\n• Vermenigvuldigen met −1 = rotatie 180°.\n• Handig voor computer-graphics + signaalbewerking.\n\n**Toepassingen**:\n• **Wisselstroom**: u(t) = U₀·cos(ωt) → in complex: U(t) = U₀·e^(iωt).\n• **Golfvergelijkingen**: ψ(x,t) = A·e^(i(kx−ωt)) (kwantummechanica).\n• **Fourier-analyse**: signaal opbreken in complexe sinusoïdes.\n• **Fractalen**: Mandelbrot iteratie z → z² + c.",
    checks: [
      {
        q: "**Eulerformule**:",
        options: ["e^(iθ) = cos θ + i·sin θ","e^(iθ) = cos θ − i·sin θ","e^(iθ) = sin θ + i·cos θ","e^θ = cos θ + i·sin θ"],
        answer: 0,
        wrongHints: [null, "Vul θ = π/2 in. Krijg je dan i of −i?", "Vul θ = 0 in: e⁰ = 1. Klopt dat met deze formule?", "Vul θ = 1 in: e¹ ≈ 2,72 is een reëel getal. Kan dat gelijk zijn aan cos 1 + i·sin 1?"],
        uitlegPad: {
          stappen: [{ titel: "Verband e met sin+cos", tekst: "**Eulerformule**: e^(iθ) = cos θ + i·sin θ. Verbindt exponent met goniometrie. **Beroemd gevolg**: e^(iπ) = cos π + i·sin π = −1 + 0 = −1. Daarom: **e^(iπ) + 1 = 0** = Euler's identiteit ('mooiste formule in wiskunde')." }],
          niveaus: { basis: "e^(iθ) = cos+i·sin.", simpeler: "Euler-formule", nogSimpeler: "e^(iθ) = cos θ + i·sin θ." },
        },
      },
      {
        q: "Bij **vermenigvuldigen in polair** doe je:",
        options: ["Modulus × en argumenten +","Modulus × en argumenten ×","Modulus + en argumenten +","Modulus + en argumenten ×"],
        answer: 0,
        wrongHints: [null, "Neem i · i: de moduli geven 1 · 1 = 1. Wat gebeurt er met de hoeken van 90° en 90°?", "Neem 2 · 3 = 6, allebei met argument 0. Krijg je 6 als je de moduli optelt?", "Precies verwisseld. Wat gebeurt er met de modulus bij 2 · 3?"],
        uitlegPad: {
          stappen: [{ titel: "Mod × Arg +", tekst: "**r₁·e^(iθ₁) · r₂·e^(iθ₂) = (r₁·r₂)·e^(i(θ₁+θ₂))**. Modulus vermenigvuldigt, argumenten optellen. Komt door regel e^a·e^b = e^(a+b)." }],
          niveaus: { basis: "Mod × Arg +.", simpeler: "× = mod×, arg+", nogSimpeler: "Moduli ×, hoeken +." },
        },
      },
      {
        q: "**i⁴** is?",
        options: ["1","−1","i","−i"],
        answer: 0,
        wrongHints: [null, "−1 is i². Wat krijg je als je −1 nog een keer kwadrateert?", "i is i¹. Wat is i² · i²?", "−i is i³. Vermenigvuldig nog één keer met i: wat krijg je?"],
        uitlegPad: {
          stappen: [{ titel: "Cyclus 4", tekst: "i¹=i, i²=−1, i³=−i, **i⁴=1**, i⁵=i, ... Cyclus van lengte 4. Werk: i⁴ = (i²)² = (−1)² = **1**." }],
          niveaus: { basis: "1.", simpeler: "i⁴=1", nogSimpeler: "1" },
        },
      },
      {
        q: "Vermenigvuldigen met **i** is geometrisch:",
        options: ["Rotatie 90° tegen de klok in","Rotatie 90° met de klok mee","Spiegeling in de reële as","Rotatie 180° om de oorsprong"],
        answer: 0,
        wrongHints: [null, "Kijk naar 1 · i = i: van punt 1 naar punt i. Welke kant draait dat op?", "Spiegelen in de reële as is complex toevoegen (z̄). Wat gebeurt er met het punt 1 als je met i vermenigvuldigt?", "Draaien over 180° is vermenigvuldigen met −1 = i². Wat doet één keer i?"],
        uitlegPad: {
          stappen: [{ titel: "i = e^(iπ/2)", tekst: "**Vermenigvuldigen met i**: |i|=1 (modulus 1, geen schaling), arg(i)=π/2 (90°). Resultaat: rotatie 90° **tegen klok**. Voorbeeld: 1·i = i (van punt (1,0) naar (0,1)). i·i = −1 (van (0,1) naar (−1,0)). Eindeloos draaien." }],
          theorie: "Toepassing: computer graphics, signaal-bewerking.",
          niveaus: { basis: "Rotatie 90°.", simpeler: "×i = 90° draaien", nogSimpeler: "Kwartslag draaien." },
        },
      },
      {
        q: "**De Moivre**: (1+i)⁴ = ?",
        options: ["−4","4","16","2i"],
        answer: 0,
        wrongHints: [null, "Niet — let op het teken: wat doet i² met het teken als je (1+i)² nog een keer kwadrateert?", "Bereken eerst (1 + i)² en kwadrateer dat resultaat daarna nog een keer.", "2i is (1 + i)², maar de vraag gaat over de vierde macht. Wat geeft (2i)²?"],
        uitlegPad: {
          stappen: [
            { titel: "Polair (1+i) = √2 e^(iπ/4)", tekst: "|1+i| = √2, arg = π/4." },
            { titel: "Vierde macht", tekst: "z⁴ = (√2)⁴ · e^(i·4·π/4) = 4 · e^(iπ) = 4 · (−1) = **−4**." },
            { titel: "Check directe", tekst: "(1+i)² = 1 + 2i + i² = 2i. (2i)² = 4i² = −4. ✓" },
          ],
          niveaus: { basis: "−4.", simpeler: "(1+i)⁴ = −4", nogSimpeler: "−4" },
        },
      },
    ],
  },

  // ─── C. Matrices basis ────────────────────────────────────
  {
    title: "Matrices — basis-operaties",
    explanation:
      "**Matrix** = rechthoekige reeks getallen, georganiseerd in rijen + kolommen.\n\n**Notatie**: m × n matrix heeft m rijen, n kolommen.\n```\nA = [1 2 3]\n    [4 5 6]\n```\n2×3 matrix.\n\n**Element**: a_ij = element op rij i, kolom j.\nIn voorbeeld: a_12 = 2, a_21 = 4.\n\n**Soorten**:\n• **Vierkant**: m = n. Bv. 3×3.\n• **Identiteit (eenheidsmatrix)** I_n: hoofddiagonaal 1, rest 0.\n  - I_3 = [[1,0,0],[0,1,0],[0,0,1]].\n• **Diagonaal**: alleen hoofddiagonaal niet-nul.\n• **Nul-matrix**: alle nullen.\n• **Symmetrisch**: A = A^T (transpose = origineel).\n• **Vector**: 1-kolom (kolomvector) of 1-rij.\n\n**Optellen** (zelfde dimensies):\n• Per component: (A + B)_ij = A_ij + B_ij.\n\n**Scalair vermenigvuldigen**:\n• (k·A)_ij = k·A_ij. Elk element × k.\n\n**Matrix-vermenigvuldiging** (A·B, **niet** B·A in algemeen):\n• Werkt alleen als kolommen A = rijen B.\n• Resultaat: rij A × kolom B → 1 element.\n• (A·B)_ij = Σ A_ik · B_kj.\n• Belangrijk: **niet commutatief**! A·B ≠ B·A meestal.\n\n**Voorbeeld**:\n```\nA = [1 2]    B = [5 6]\n    [3 4]        [7 8]\n\nA·B = [1·5+2·7  1·6+2·8]   [19 22]\n      [3·5+4·7  3·6+4·8] = [43 50]\n```\n\n**Transpose A^T**:\n• Verwissel rijen + kolommen.\n• (A^T)_ij = A_ji.\n• 2×3 matrix → 3×2.\n\n**Determinant** (alleen vierkante):\n• Voor 2×2: $\\det\\left(\\begin{bmatrix}a&b\\\\c&d\\end{bmatrix}\\right) = ad - bc$.\n• Voor 3×3: meer complex (regel van Sarrus of cofactor-expansie).\n• Geeft 'schaalfactor' van afbeelding.\n• **det = 0** → matrix is **singulier** (geen inverse).\n\n**Inverse A^(−1)**:\n• A·A^(−1) = I (eenheidsmatrix).\n• Voor 2×2: A^(−1) = (1/det A) · [[d, −b], [−c, a]].\n• Niet alle matrices hebben inverse (alleen vierkante + det ≠ 0).\n\n**Voorbeeld 2×2 inverse**:\n```\nA = [2 1]   det = 2·3 − 1·1 = 5\n    [1 3]\n\nA^(−1) = (1/5) [ 3 −1]\n               [−1  2]\n```\n\nCheck: A·A^(−1) = I ✓.\n\n**Stelsels vergelijkingen oplossen**:\n• 2x + y = 5\n• x + 3y = 10.\n• Matrix-vorm: A·**x** = **b** waarbij A = [[2,1],[1,3]], **x** = [x,y]^T, **b** = [5,10]^T.\n• Oplossing: **x** = A^(−1)·**b**.\n\n**Eigenwaarden + eigenvectoren** (geavanceerd):\n• Eigenvector v van A: A·v = λ·v voor scalair λ.\n• λ = **eigenwaarde**.\n• Oplossen: det(A − λI) = 0.\n• Toepassing: PCA (data-science), kwantummechanica.\n\n**Toepassingen matrices**:\n• Lineaire stelsels.\n• Grafische rotaties + schalingen (3D-modellen).\n• Markov-ketens (statistiek).\n• Adjacency-matrix (graf-theorie).\n• Kwantummechanica.\n• Machine learning (neurale netwerken).",
    checks: [
      {
        q: "Matrix-vermenigvuldiging is:",
        options: ["Niet commutatief","Wel commutatief","Niet associatief","Niet distributief"],
        answer: 0,
        wrongHints: [null, "Reken AB en BA uit voor twee 2×2-matrices. Krijg je hetzelfde?", "(AB)C = A(BC) geldt wél voor matrices. Welke rekenregel van gewone getallen geldt niet?", "A(B + C) = AB + AC geldt wél voor matrices. Welke rekenregel van gewone getallen geldt niet?"],
        uitlegPad: {
          stappen: [{ titel: "Volgorde telt", tekst: "Matrix-vermenigvuldiging is **NIET commutatief**: in het algemeen A·B ≠ B·A. Soms verschilt de dimensie zelfs zodat B·A niet eens gedefinieerd is. Belangrijk verschil met getal-vermenigvuldiging (2·3 = 3·2)." }],
          niveaus: { basis: "Niet commutatief.", simpeler: "AB ≠ BA", nogSimpeler: "Volgorde telt." },
        },
      },
      {
        q: "**Determinant** van [[2,3],[1,4]]?",
        options: ["5","11","8","−5"],
        answer: 0,
        wrongHints: [null, "Niet — ad + bc? Let op het minteken.", "Niet — je vergeet bc af te trekken.", "Je rekende bc − ad. In welke volgorde trek je de producten van de diagonalen van elkaar af?"],
        uitlegPad: {
          stappen: [{ titel: "ad − bc", tekst: "**det([[a,b],[c,d]]) = ad − bc** = 2·4 − 3·1 = 8 − 3 = **5**." }],
          niveaus: { basis: "5.", simpeler: "ad−bc = 8−3 = 5", nogSimpeler: "5" },
        },
      },
      {
        q: "Wanneer is matrix **niet inverteerbaar**?",
        options: ["det = 0","det = 1","Vierkant","Symmetrisch"],
        answer: 0,
        wrongHints: [null, "Bij det = 1 kun je gewoon door de determinant delen. Bij welke waarde lukt dat niet?", "Vierkant zijn is juist nodig om een inverse te kunnen hebben. Welke extra eis is er nog?", "Een symmetrische matrix kan best een inverse hebben, zoals I. Welk getal bepaalt of een inverse bestaat?"],
        uitlegPad: {
          stappen: [{ titel: "Singulier", tekst: "Matrix **niet inverteerbaar** (singulier) als **det = 0**. Reden: inverse-formule heeft 1/det → deling door 0. Geometrisch: matrix 'plat-drukt' ruimte (verliest dimensie). Stelsel met det=0 heeft 0 of oneindig veel oplossingen, geen unieke." }],
          niveaus: { basis: "det=0.", simpeler: "Singulier = det=0", nogSimpeler: "det = 0." },
        },
      },
      {
        q: "**Eenheidsmatrix I₃** is:",
        options: ["Hoofddiagonaal 1, rest 0","Hoofddiagonaal 0, rest 1","Nevendiagonaal 1, rest 0","Hoofddiagonaal 3, rest 0"],
        answer: 0,
        wrongHints: [null, "Vermenigvuldig A met deze matrix. Blijft A dan hetzelfde?", "Deze matrix verwisselt de eerste en de derde rij. Blijft A · I dan gelijk aan A?", "De 3 in I₃ geeft de grootte (3 × 3) aan, niet de getallen erin."],
        uitlegPad: {
          stappen: [{ titel: "Multiplicatief neutraal", tekst: "**I_n** (eenheidsmatrix): hoofddiagonaal **1**, rest **0**. I₃ = [[1,0,0],[0,1,0],[0,0,1]]. Eigenschap: A·I = I·A = A. Net zoals 1 voor getallen. Inverse-relatie: A·A^(−1) = I." }],
          niveaus: { basis: "Diagonaal 1, rest 0.", simpeler: "I = diag 1", nogSimpeler: "Enen op de diagonaal." },
        },
      },
      {
        q: "**Transpose** van A = [[1,2],[3,4]]:",
        options: ["[[1,3],[2,4]]","[[4,3],[2,1]]","[[1,2],[3,4]]","[[2,1],[4,3]]"],
        answer: 0,
        wrongHints: [null, "Je hebt de matrix helemaal omgedraaid. Wat gebeurt er bij transponeren met de eerste rij?", "Dat is A zelf. Bij transponeren worden rijen kolommen: wat wordt de eerste kolom?", "Je hebt de kolommen verwisseld. Wat gebeurt er bij transponeren met de eerste rij?"],
        uitlegPad: {
          stappen: [{ titel: "Rijen ↔ kolommen", tekst: "**Transpose A^T**: rijen worden kolommen + vice versa. Rij 1 (1,2) wordt kolom 1. Rij 2 (3,4) wordt kolom 2. **A^T = [[1,3],[2,4]]**." }],
          niveaus: { basis: "[[1,3],[2,4]].", simpeler: "Transpose = rijen↔kolom", nogSimpeler: "[[1,3],[2,4]]" },
        },
      },
    ],
  },

  // ─── D. Lineaire afbeeldingen ─────────────────────────────
  {
    title: "Lineaire afbeeldingen + meetkunde",
    explanation:
      "**Lineaire afbeelding** = transformatie van ruimte die lijnen op lijnen afbeeldt + oorsprong vast laat.\n\n**Matrix-representatie**:\n• Elke lineaire afbeelding in 2D/3D heeft matrix-vorm.\n• T(**v**) = A·**v** waarbij A de transformatie-matrix is.\n\n**Standaard 2D-transformaties**:\n\n**Rotatie** met hoek θ tegen klok:\n```\nR(θ) = [cos θ  −sin θ]\n        [sin θ   cos θ]\n```\n• Bv. R(90°) = [[0,−1],[1,0]].\n• R(90°) op (1,0) = (0,1). ✓\n\n**Schaling** factor k:\n```\nS(k) = [k 0]\n        [0 k]\n```\n• Uniforme schaling.\n• Niet-uniform: [[k1,0],[0,k2]].\n\n**Spiegeling** in x-as:\n```\nM_x = [1  0]\n      [0 −1]\n```\n\n**Spiegeling** in y-as:\n```\nM_y = [−1 0]\n      [0  1]\n```\n\n**Spiegeling** in lijn y=x:\n```\nM = [0 1]\n    [1 0]\n```\n\n**Shear** (afschuiving):\n```\nH_x = [1 k]\n      [0 1]\n```\nx-coord schuift met k·y.\n\n**Combineren transformaties**:\n• Compositie = matrix-vermenigvuldiging.\n• T = T₂·T₁ → eerst T₁, dan T₂.\n• Volgorde telt (niet commutatief).\n\n**3D-rotaties**:\n• Rond x-as, y-as, z-as elk eigen 3×3-matrix.\n• Quaternions vaak gebruikt in 3D-graphics (vermijden gimbal-lock).\n\n**Lineaire onafhankelijkheid**:\n• Vectoren v₁, ..., v_n zijn **lineair onafhankelijk** als geen niet-triviale lineaire combinatie 0 oplevert.\n• Voor 2D: 2 vectoren onafhankelijk = geen veelvoud van elkaar.\n• Lineair afhankelijk = liggen op zelfde lijn (in 2D).\n\n**Rang van matrix** (rank):\n• Aantal lineair onafhankelijke kolommen (= rijen).\n• Vol-rang: rank = min(rijen, kolommen).\n• Singuliere matrix: rank < n.\n\n**Vectorruimten** (algemener concept):\n• Ruimte met optellen + scalair vermenigvuldiging.\n• ℝ², ℝ³ klassieke voorbeelden.\n• Andere voorbeelden: polynomen, functies, matrices zelf.\n\n**Stelsels van lineaire vergelijkingen**:\n\n**Gauss-eliminatie**:\n• Systematische manier om stelsel op te lossen.\n• Reduceren naar bovendriehoek-vorm via rij-operaties.\n• Daarna terugsubstitutie.\n\n**Voorbeeld**:\n2x + y = 7\nx + 3y = 16\n\nMatrix-vorm:\n```\n[2 1 | 7 ]\n[1 3 | 16]\n```\n\nRij 2 wordt rij 2 − (1/2)·rij 1:\n```\n[2 1   | 7 ]\n[0 2,5 | 12,5]\n```\n\nUit rij 2: 2,5y = 12,5 → y = 5.\nUit rij 1: 2x + 5 = 7 → x = 1.\n\n**Eigenvectoren + eigenwaarden** (geavanceerd):\n• Eigenvector v: A·v = λv voor scalair λ.\n• λ = eigenwaarde.\n• Bepalen: oplossen det(A − λI) = 0 (karakteristieke polynoom).\n\n**Voorbeeld**:\nA = [[3, 1], [0, 2]].\ndet(A − λI) = det([[3−λ, 1], [0, 2−λ]]) = (3−λ)(2−λ) = 0.\nEigenwaarden λ₁ = 3, λ₂ = 2.\nVoor λ=3: (A − 3I)v = 0 → v = (1, 0).\nVoor λ=2: (A − 2I)v = 0 → v = (1, −1).\n\n**Toepassingen**:\n• **PCA** (Principal Component Analysis): dimensionaliteit-reductie in data-science.\n• **PageRank** Google: eigenvector van web-graf-matrix.\n• **Markov-ketens**: stabiele toestand = eigenvector met eigenwaarde 1.\n• **Kwantummechanica**: eigenwaarden Hamiltoniaan = energieniveaus.\n• **Mechanica**: trillingsfrequenties via eigenwaarden.\n• **Machine learning**: SVD (singular value decomposition) — generalisatie eigenwaarde.",
    checks: [
      {
        q: "**Rotatiematrix 90°** in 2D:",
        options: ["[[0,−1],[1,0]]","[[1,0],[0,1]]","[[−1,0],[0,−1]]","[[0,1],[−1,0]]"],
        answer: 0,
        wrongHints: [null, "Dat is de eenheidsmatrix: die draait niets.", "Deze matrix draait 180°. Waar moet (1,0) heen bij 90°?", "Dat is een draaiing van 90° met de klok mee. Waar komt (1,0) terecht?"],
        uitlegPad: {
          stappen: [{ titel: "cos 90 = 0, sin 90 = 1", tekst: "**R(θ) = [[cos θ, −sin θ], [sin θ, cos θ]]**. Voor θ = 90°: cos 90° = 0, sin 90° = 1 → **R(90°) = [[0, −1], [1, 0]]**.\n\nTest: R · (1, 0)^T = (0, 1). Punt (1,0) draait naar (0,1) — correct 90° tegen klok." }],
          niveaus: { basis: "[[0,-1],[1,0]].", simpeler: "R90 = [[0,-1],[1,0]]", nogSimpeler: "[[0,-1],[1,0]]" },
        },
      },
      {
        q: "**Gauss-eliminatie** is voor:",
        options: ["Stelsels lineaire vergelijkingen oplossen","De eigenwaarden van een matrix bepalen","Twee matrices met elkaar vermenigvuldigen","De nulpunten van een polynoom vinden"],
        answer: 0,
        wrongHints: [null, "Eigenwaarden vind je met det(A − λI) = 0. Waar zijn rij-operaties vooral voor bedoeld?", "Matrices vermenigvuldigen doe je met 'rij keer kolom', zonder rij-operaties. Waarvoor gebruik je rij-operaties dan?", "Daar gebruik je de abc-formule of ontbinden, geen rij-operaties."],
        uitlegPad: {
          stappen: [{ titel: "Systematische methode", tekst: "**Gauss-eliminatie**: methode om stelsel lineaire vergelijkingen systematisch op te lossen door rij-operaties (vermenigvuldigen, optellen, verwisselen). Reduceer naar **bovendriehoek-vorm**, dan terugsubstitutie. Carl Friedrich Gauss (1777-1855) — werd grootste wiskundige zijn tijd genoemd." }],
          niveaus: { basis: "Stelsels.", simpeler: "Gauss = stelsel oplossen", nogSimpeler: "Stelsels oplossen." },
        },
      },
      {
        q: "**Eigenvector** v van A vervult:",
        options: ["A·v = λ·v","A·v = 0","A = λ·v","A·v + λ = 0"],
        answer: 0,
        wrongHints: [null, "Dat is alleen het speciale geval λ = 0.", "Links staat een matrix en rechts een vector. Kunnen die aan elkaar gelijk zijn?", "Hier tel je een getal λ op bij een vector. Wat moet er met v gebeuren als A erop werkt?"],
        uitlegPad: {
          stappen: [{ titel: "Karakteristieke vergelijking", tekst: "**Eigenvector v** van matrix A: **A·v = λ·v** voor scalair λ. v wordt door A op zichzelf afgebeeld (alleen geschaald met λ). λ = **eigenwaarde**. Vinden: oplossen det(A − λI) = 0.\n\nToepassing: PCA, PageRank, Markov-stabiel, trillingen." }],
          niveaus: { basis: "A·v = λv.", simpeler: "Eig: A·v = λv", nogSimpeler: "A·v = λ·v" },
        },
      },
      {
        q: "Welke matrix doet **spiegeling in y-as**?",
        options: ["[[−1,0],[0,1]]","[[1,0],[0,−1]]","[[0,1],[1,0]]","[[1,0],[0,1]]"],
        answer: 0,
        wrongHints: [null, "[[1,0],[0,−1]] laat x staan en klapt y om: dat is spiegelen in de x-as. Welke coördinaat verandert bij spiegelen in de y-as?", "[[0,1],[1,0]] verwisselt x en y: dat is spiegelen in de lijn y = x. Wat gebeurt er met (x, y) bij spiegelen in de y-as?", "[[1,0],[0,1]] is de eenheidsmatrix en laat alles staan. Welke coördinaat moet van teken wisselen?"],
        uitlegPad: {
          stappen: [{ titel: "x-coord teken om", tekst: "**Spiegeling y-as**: x-coord wisselt van teken, y blijft. (1,2) → (−1,2). Matrix: **[[−1,0],[0,1]]**. (−1)·1 + 0·2 = −1. 0·1 + 1·2 = 2. ✓" }],
          niveaus: { basis: "[[-1,0],[0,1]].", simpeler: "y-as = [[-1,0],[0,1]]", nogSimpeler: "x wordt −x." },
        },
      },
      {
        q: "**PageRank** (Google) gebruikt:",
        options: ["De eigenvector van de link-matrix","Het aantal bezoekers per pagina","De determinant van de link-matrix","De inverse van de link-matrix"],
        answer: 0,
        wrongHints: [null, "Bezoekersaantallen gebruikt PageRank niet: het rekent met de links tússen pagina's. Welk lineair-algebra-begrip hoort daarbij?", "Een determinant is één getal voor de hele matrix. PageRank geeft elke pagina een eigen score: welk begrip levert een getal per pagina?", "PageRank zoekt een verdeling die niet meer verandert als je de matrix toepast. Hoort daar een inverse bij?"],
        uitlegPad: {
          stappen: [{ titel: "Larry Page 1996", tekst: "**PageRank** (Google-algoritme, Larry Page + Sergey Brin 1996): pagina's geranked op basis van **eigenvector** van matrix die links tussen pagina's representeert. Pagina populair als veel populaire pagina's ernaar linken (recursief). Eigenvector met eigenwaarde 1 = stabiele oplossing. Toonde kracht van lineaire algebra voor web-zoeken — basis Google-succes." }],
          niveaus: { basis: "Eigenvector.", simpeler: "PageRank = eigenvector", nogSimpeler: "Eigenvector." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Wiskunde D mix",
    explanation:
      "Mix van complex + matrices + lineaire afbeeldingen.\n\nVeel succes!",
    checks: [
      {
        q: "**(2 + 3i)** + **(4 − 5i)** =?",
        options: ["6 − 2i","6 + 2i","2 + 3i","8 − 15i"],
        answer: 0,
        wrongHints: [null, "Het reële deel klopt. Wat is 3i + (−5i)?", "2 + 3i is het eerste getal zelf. Tel je de reële en de imaginaire delen apart op?", "8 − 15i krijg je door de delen te vermenigvuldigen. Bij optellen tel je reëel bij reëel en imaginair bij imaginair."],
        uitlegPad: {
          stappen: [{ titel: "Reëel + reëel, im + im", tekst: "**Per component** optellen: reële delen optellen (2+4=6), imaginaire delen optellen (3+(−5)=−2). = **6 − 2i**." }],
          niveaus: { basis: "6−2i.", simpeler: "(2+4) + (3−5)i = 6 − 2i", nogSimpeler: "6 − 2i" },
        },
      },
      {
        q: "Modulus **|5 − 12i|** =?",
        options: ["13","17","7","60"],
        answer: 0,
        wrongHints: [null, "17 = 5 + 12. De modulus is een afstand: welke stelling gebruik je?", "7 = 12 − 5. Kwadrateer beide delen, tel ze op en neem de wortel.", "60 = 5 · 12. Teken 5 − 12i als punt: hoe ver ligt het van 0?"],
        uitlegPad: {
          stappen: [{ titel: "Pythagoras", tekst: "|5 − 12i| = √(5² + 12²) = √(25 + 144) = √169 = **13**. Klassiek Pythagoras-triple 5-12-13." }],
          niveaus: { basis: "13.", simpeler: "√169 = 13", nogSimpeler: "13" },
        },
      },
      {
        q: "Welke matrix beeldt elk punt (x, y) af op **(2x, 2y)**?",
        options: ["[[2,0],[0,2]]","[[1,1],[1,1]]","[[0,2],[2,0]]","[[1,0],[0,2]]"],
        answer: 0,
        wrongHints: [null, "Deze matrix stuurt (x, y) naar (x + y, x + y). Is dat (2x, 2y)?", "Deze matrix geeft (2y, 2x): x en y wisselen ook nog van plaats. Is dat (2x, 2y)?", "Deze matrix geeft (x, 2y). Wat gebeurt er met de x?"],
        uitlegPad: {
          stappen: [{ titel: "Uniforme schaling", tekst: "**Uniforme schaling met factor k**: matrix [[k,0],[0,k]]. Voor **2×**: **[[2,0],[0,2]]**. Test op (3,4): 2·3 + 0·4 = 6; 0·3 + 2·4 = 8. (3,4) → (6,8) = dubbel. ✓" }],
          niveaus: { basis: "[[2,0],[0,2]].", simpeler: "2× schaling", nogSimpeler: "[[2,0],[0,2]]" },
        },
      },
      {
        q: "Hoeveel **n-de wortels** heeft complex getal z (z ≠ 0)?",
        options: ["n verschillende","1","2","Oneindig"],
        answer: 0,
        wrongHints: [null, "Denk aan z³ = 1: is 1 de enige oplossing in de complexe getallen?", "2 klopt alleen voor vierkantswortels (n = 2). Hoeveel oplossingen heeft z³ = 1?", "zⁿ = w is een veeltermvergelijking. Wat weet je over het aantal oplossingen daarvan?"],
        uitlegPad: {
          stappen: [{ titel: "Regelmatige n-hoek", tekst: "**Elk complex getal z ≠ 0 heeft precies n n-de wortels**. Ze vormen een regelmatige n-hoek op cirkel rond oorsprong (met straal |z|^(1/n)). Bv. 4 vierde wortels uit 1: 1, i, −1, −i (op hoeken 90° apart). Fundamenteel verschil met reëel: x² = 4 heeft 2 reële oplossingen (±2), x² = −4 heeft 0 reële maar 2 complexe (±2i)." }],
          niveaus: { basis: "n.", simpeler: "n wortels", nogSimpeler: "n" },
        },
      },
      {
        q: "**Fundamentele stelling algebra**:",
        options: ["Polynoom graad n heeft n complexe wortels","Polynoom graad n heeft n reële wortels","Polynoom graad n heeft minstens één reële wortel","Polynoom graad n heeft n verschillende wortels"],
        answer: 0,
        wrongHints: [null, "Heeft x² + 1 = 0 twee reële oplossingen?", "Dat geldt alleen bij oneven graad. Heeft x² + 1 = 0 een reële wortel?", "Wortels kunnen samenvallen, zoals bij (x − 1)² = 0. Hoe tel je ze dan?"],
        uitlegPad: {
          stappen: [{ titel: "Carl Friedrich Gauss 1799", tekst: "**Fundamentele Stelling Algebra**: elk polynoom van graad **n ≥ 1** (met complexe coëfficiënten) heeft **precies n complexe wortels** (met multipliciteit). Bewezen door **Gauss** in 1799 (proefschrift, 22 jaar oud!). Reden om ℝ uit te breiden naar ℂ: alle polynomen factoriseerbaar in lineaire factoren. Onmisbaar voor algebra + complexe analyse." }],
          niveaus: { basis: "n wortels.", simpeler: "Polynoom n = n wortels", nogSimpeler: "n wortels." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const wiskundeDVwo = {
  id: "wiskunde-d-vwo",
  title: "Wiskunde D (VWO specialisatie)",
  emoji: "ℹ",
  level: "vwo",
  subject: "wiskunde",
  referentieNiveau: "vwo-SE-wiskundeD",
  sloThema: "Wiskunde D VWO — specialisatie complexe getallen + matrices",
  prerequisites: [
    { id: "kansrekening-havo-vwo", title: "Kansrekening", niveau: "havo4-5-vwo" },
    { id: "differentieren", title: "Differentiëren", niveau: "havo4-5" },
    { id: "integralen-havo-vwo", title: "Integralen", niveau: "havo4-5-vwo" },
    { id: "logaritmen", title: "Logaritmen", niveau: "klas4-5" },
    { id: "goniometrie", title: "Goniometrie", niveau: "klas3" },
  ],
  intro:
    "Wiskunde D VWO specialisatie-vak (SE-only, geen CSE). Complexe getallen (i²=−1, a+bi, geconjugeerd, modulus, polair, Eulerformule e^(iπ)+1=0, De Moivre, n-de wortels), matrices (operaties, determinant, inverse, Gauss), lineaire afbeeldingen (rotaties + schaling + spiegeling, eigenvectoren + PageRank-toepassing). Voor N&T-profiel + technische studies. ~15-20 min.",
  triggerKeywords: [
    "Wiskunde D",
    "complex getal", "complexe getallen",
    "imaginaire eenheid", "i kwadraat",
    "Gauss-vlak",
    "geconjugeerd",
    "modulus", "argument",
    "polaire vorm",
    "Eulerformule", "e^(iπ)",
    "De Moivre",
    "n-de wortel",
    "Fundamentele stelling algebra",
    "matrix", "matrices",
    "determinant",
    "inverse matrix",
    "eenheidsmatrix",
    "Gauss-eliminatie",
    "transpose",
    "lineaire afbeelding",
    "rotatiematrix",
    "spiegelingsmatrix",
    "schalingsmatrix",
    "eigenwaarde", "eigenvector",
    "PageRank",
    "PCA",
    "Markov-keten",
    "lineaire algebra",
  ],
  chapters,
  steps,
};

export default wiskundeDVwo;

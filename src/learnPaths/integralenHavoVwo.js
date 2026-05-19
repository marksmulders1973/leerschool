// Leerpad: Integralen — HAVO/VWO Wiskunde B
// Eindexamen-CSE-stof. Vervolg op differentieren.js.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#42a5f5",
  oppervlak: "#66bb6a",
  primitief: "#ffd54f",
  rood: "#ef5350",
};

const stepEmojis = ["∫", "📐", "🔧", "📈", "🏆"];

const chapters = [
  { letter: "A", title: "Primitieve functies", emoji: "∫", from: 0, to: 0 },
  { letter: "B", title: "Bepaalde integraal + oppervlakte", emoji: "📐", from: 1, to: 1 },
  { letter: "C", title: "Integratietechnieken", emoji: "🔧", from: 2, to: 2 },
  { letter: "D", title: "Toepassingen", emoji: "📈", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Primitieve functies ───────────────────────────────
  {
    title: "Primitieven — omgekeerd differentiëren",
    explanation:
      "**Integreren** = omgekeerd van differentiëren. Bij differentiëren ga je van F(x) → F'(x) = f(x). Bij integreren ga je terug: gegeven f(x), vind F(x) zodat F'(x) = f(x). F heet de **primitieve** van f.\n\n**Notatie**: ∫ f(x) dx = F(x) + C\n• ∫ = integraalteken\n• f(x) = de **integrand**\n• dx = geeft aan: integreren naar variabele x\n• C = **integratieconstante** (afgeleide van constante = 0, dus altijd onbekend)\n\n**Basis-regels**:\n• ∫ x^n dx = x^(n+1) / (n+1) + C **(n ≠ −1)**\n• ∫ 1 dx = x + C\n• ∫ k · f(x) dx = k · ∫ f(x) dx (constante voor het integraal)\n• ∫ [f(x) + g(x)] dx = ∫ f(x) dx + ∫ g(x) dx\n\n**Voorbeelden**:\n• ∫ x² dx = x³/3 + C (check: d/dx(x³/3) = 3x²/3 = x²)\n• ∫ x³ dx = x⁴/4 + C\n• ∫ 6x dx = 3x² + C\n• ∫ (2x + 3) dx = x² + 3x + C\n• ∫ √x dx = ∫ x^(1/2) dx = x^(3/2) / (3/2) = (2/3)x^(3/2) + C\n• ∫ 1/x² dx = ∫ x^(-2) dx = x^(-1)/(-1) = −1/x + C\n\n**Speciale primitieven** (uit hoofd kennen):\n• ∫ e^x dx = e^x + C\n• ∫ 1/x dx = ln|x| + C **(let op: |x|)**\n• ∫ sin(x) dx = −cos(x) + C **(min!)**\n• ∫ cos(x) dx = sin(x) + C\n• ∫ a^x dx = a^x / ln(a) + C\n\n**Checken**: differentieer je antwoord → krijg je f(x) terug? Dan klopt het.\n\n**Veelgemaakte fouten**:\n• C vergeten.\n• Bij ∫ x^n: 'n+1' in noemer vergeten of bij teller delen.\n• ∫ sin(x) → vergeten van min-teken bij −cos.\n• ∫ 1/x = ln(x) zonder absolute waarde.\n• Productregel verkeerd toepassen: ∫ f · g dx ≠ ∫f · ∫g (geen productregel voor integraal — vergt partieel-integreren).",
    checks: [
      {
        q: "Wat is ∫ **x² dx**?",
        options: ["x³/3 + C","2x + C","x²/2 + C","x³ + C"],
        answer: 0,
        wrongHints: [null, "Niet — dat is afgeleide.", "Verkeerde noemer.", "Mist /3."],
        uitlegPad: {
          stappen: [{ titel: "Macht-regel", tekst: "∫ x^n dx = **x^(n+1) / (n+1) + C**. Hier n=2 → x³/3 + C. Check: d/dx(x³/3) = 3x²/3 = x². ✓" }],
          theorie: "Voor ∫ x^n: macht +1, gedeeld door nieuwe macht. Spiegelt differentiatie-regel.",
          niveaus: { basis: "x³/3 + C. A.", simpeler: "n=2 → x^(2+1)/(2+1) = x³/3 + C = A.", nogSimpeler: "x³/3+C = A." },
        },
      },
      {
        q: "Wat is ∫ **6x dx**?",
        options: ["3x² + C","6x² + C","6 + C","x² + 6 + C"],
        answer: 0,
        wrongHints: [null, "Mist /2.", "Niet — dat is afgeleide-achtig.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Constante voor integraal", tekst: "∫ 6x dx = 6 · ∫ x dx = 6 · x²/2 + C = **3x² + C**. Check: d/dx(3x²) = 6x. ✓" }],
          niveaus: { basis: "3x² + C. A.", simpeler: "6·x²/2 = 3x² + C = A.", nogSimpeler: "3x²+C = A." },
        },
      },
      {
        q: "Wat is ∫ **sin(x) dx**?",
        options: ["−cos(x) + C","cos(x) + C","−sin(x) + C","tan(x) + C"],
        answer: 0,
        wrongHints: [null, "Mist het minteken.", "Niet — dat zou afgeleide van −cos zijn? Nee.", "Niet — andere functie."],
        uitlegPad: {
          stappen: [{ titel: "Goniometrische tabel", tekst: "**∫ sin(x) dx = −cos(x) + C**. Reden: d/dx(−cos x) = −(−sin x) = sin x. ✓\n\nVergelijk: ∫ cos(x) dx = sin(x) + C (zonder min)." }],
          theorie: "Cito-favoriet-val: min-teken vergeten. Onthoud: sin → −cos, cos → +sin.",
          niveaus: { basis: "−cos(x) + C. A.", simpeler: "sin → −cos = A.", nogSimpeler: "−cos+C = A." },
        },
      },
      {
        q: "Wat is ∫ **1/x dx**?",
        options: ["ln|x| + C","1/x² + C","−1/x + C","x + C"],
        answer: 0,
        wrongHints: [null, "Niet — dat is afgeleide.", "Niet correct.", "Niet — niet via macht-regel hier."],
        uitlegPad: {
          stappen: [{ titel: "Uitzondering n=−1", tekst: "Bij ∫ x^n dx geldt **n ≠ −1**. Voor n=−1 (oftewel 1/x): **∫ 1/x dx = ln|x| + C**. Absolute waarde omdat ln voor negatieve waarden niet bestaat." }],
          theorie: "Onthoud uit hoofd: e^x → e^x, 1/x → ln|x|, sin → −cos, cos → sin.",
          niveaus: { basis: "ln|x| + C. A.", simpeler: "1/x = uitzondering, → ln|x| + C = A.", nogSimpeler: "ln|x|+C = A." },
        },
      },
      {
        q: "Wat is ∫ **e^x dx**?",
        options: ["e^x + C","e^(x+1)/(x+1) + C","x·e^x + C","ln(e^x) + C"],
        answer: 0,
        wrongHints: [null, "Niet — macht-regel werkt niet voor e^x.", "Verkeerde regel.", "Niet zinvol."],
        uitlegPad: {
          stappen: [{ titel: "e blijft e", tekst: "**∫ e^x dx = e^x + C**. Speciaal: e^x is z'n eigen afgeleide EN primitieve. Komt uit hoofd kennen." }],
          niveaus: { basis: "e^x + C. A.", simpeler: "e^x → e^x = A.", nogSimpeler: "e^x+C = A." },
        },
      },
    ],
  },

  // ─── B. Bepaalde integraal + oppervlakte ──────────────────
  {
    title: "Bepaalde integraal + oppervlakte",
    explanation:
      "**Onbepaalde integraal**: ∫ f(x) dx = F(x) + C (familie van functies).\n\n**Bepaalde integraal**: getalswaarde, geen +C. Notatie:\n\n∫[a tot b] f(x) dx = F(b) − F(a) = [F(x)] van a tot b\n\nHeet **hoofdstelling van de integraalrekening** (Newton-Leibniz).\n\n**Voorbeeld**:\n∫[0 tot 2] x² dx = [x³/3] van 0 tot 2 = 2³/3 − 0³/3 = 8/3.\n\n**Wat betekent dit geometrisch**?\n• Bij f(x) ≥ 0 op [a,b]: ∫[a tot b] f(x) dx = **oppervlakte** onder de grafiek tussen x=a en x=b en boven de x-as.\n• Bij f(x) ≤ 0: integraal is **negatief**, oppervlakte is dan |integraal|.\n• Als grafiek door x-as snijdt op [a,b]: splits in stukken boven + onder x-as, neem absolute waarden, tel op.\n\n**Voorbeeld oppervlakte**:\nOppervlakte onder y = x² tussen x=0 en x=2:\n∫[0 tot 2] x² dx = 8/3 ≈ 2,67 eenheden².\n\n**Oppervlakte tussen 2 grafieken** (boven f, onder g, op [a,b]):\nOppervlakte = ∫[a tot b] (f(x) − g(x)) dx\n• 'Boven minus onder'.\n• Vooraf snijpunten bepalen → a en b vinden.\n\n**Voorbeeld**:\nf(x) = x² en g(x) = x op [0,1]. Snijpunten: x² = x → x(x−1) = 0 → x=0 en x=1.\nOp dat interval x ≥ x², dus g (lineair) is boven, f (parabool) onder.\nOpp = ∫[0,1] (x − x²) dx = [x²/2 − x³/3] van 0 tot 1 = 1/2 − 1/3 = **1/6**.\n\n**Eigenschappen bepaalde integraal**:\n• ∫[a tot a] f(x) dx = 0\n• ∫[a tot b] f(x) dx = −∫[b tot a] f(x) dx (omgekeerde grenzen → min)\n• ∫[a tot b] f(x) dx + ∫[b tot c] f(x) dx = ∫[a tot c] f(x) dx (op te splitsen)\n• ∫[a tot b] k·f(x) dx = k · ∫[a tot b] f(x) dx\n\n**Numerieke benadering** (als geen primitieve te vinden):\n• Riemann-sommen: rechthoekjes onder grafiek.\n• Trapeziumregel: trapeziumpjes.\n• Op CSE meestal niet vereist — primitieve bepalen werkt.",
    checks: [
      {
        q: "Bereken **∫[0 tot 3] 2x dx**.",
        options: ["9","6","3","18"],
        answer: 0,
        wrongHints: [null, "Niet — controleer F(b)−F(a).", "Niet — dat is afgeleide-waarde.", "Niet — te groot."],
        uitlegPad: {
          stappen: [{ titel: "F(b)−F(a)", tekst: "∫ 2x dx = x². ∫[0,3] 2x dx = [x²] van 0 tot 3 = 3² − 0² = **9**." }],
          theorie: "Eerst primitieve, dan invullen b en a, dan aftrekken.",
          niveaus: { basis: "9. A.", simpeler: "[x²] 0→3 = 9−0 = 9 = A.", nogSimpeler: "9 = A." },
        },
      },
      {
        q: "Wat betekent **∫[1 tot 5] f(x) dx geometrisch** als f(x) ≥ 0?",
        options: ["Oppervlakte onder grafiek tussen x=1 en x=5","Helling op x=5","Afgeleide op x=1","Lengte van grafiek"],
        answer: 0,
        wrongHints: [null, "Niet — helling is afgeleide.", "Niet — andere bewerking.", "Niet — booglengte vergt andere integraal."],
        uitlegPad: {
          stappen: [{ titel: "Integraal = oppervlakte", tekst: "Bij **f(x) ≥ 0** op [a,b]: bepaalde integraal **= oppervlakte** tussen grafiek en x-as, tussen x=a en x=b. Geometrische interpretatie van integralen." }],
          theorie: "Cito-favoriet: 'wat stelt deze integraal voor in figuur?' Antwoord: gearceerde gebied.",
          niveaus: { basis: "Oppervlakte. A.", simpeler: "f≥0 → integraal = opp = A.", nogSimpeler: "Opp = A." },
        },
      },
      {
        q: "Oppervlakte tussen **f(x)=x²** (onder) en **g(x)=2x** (boven) op interval waar ze elkaar omsluiten:\n\nSnijpunten?",
        options: ["x = 0 en x = 2","x = 1 en x = 2","x = 0 en x = 4","Alleen x = 1"],
        answer: 0,
        wrongHints: [null, "Niet — los x² = 2x op.", "Niet — andere oplossing.", "Niet — twee snijpunten."],
        uitlegPad: {
          stappen: [{ titel: "Snijpunten = vergelijk", tekst: "x² = 2x → x² − 2x = 0 → **x(x−2) = 0** → x=0 of x=2. Dit zijn de grenzen van het ingesloten gebied." }],
          niveaus: { basis: "x=0 en x=2. A.", simpeler: "x²=2x → x=0,2 = A.", nogSimpeler: "0,2 = A." },
        },
      },
      {
        q: "Oppervlakte tussen **f(x)=2x** en **g(x)=x²** op [0,2] (boven minus onder)?",
        options: ["4/3","2","8/3","4"],
        answer: 0,
        wrongHints: [null, "Niet — meer rekenen.", "Niet — alleen één term.", "Niet — alleen boven."],
        uitlegPad: {
          stappen: [{ titel: "Opp = ∫(boven−onder)", tekst: "Op [0,2]: 2x ≥ x² (lineair boven parabool). Oppervlakte = ∫[0,2] (2x − x²) dx = [x² − x³/3] van 0 tot 2 = (4 − 8/3) − 0 = **12/3 − 8/3 = 4/3**." }],
          theorie: "Pattern: snijpunten → 'boven minus onder' → integraal nemen.",
          niveaus: { basis: "4/3. A.", simpeler: "∫(2x−x²) van 0→2 = 4−8/3 = 4/3 = A.", nogSimpeler: "4/3 = A." },
        },
      },
      {
        q: "∫[2 tot 2] f(x) dx = ?",
        options: ["0","f(2)","f(2)−f(2)","Onbepaald"],
        answer: 0,
        wrongHints: [null, "Niet — geen evaluatie nodig.", "Wel = 0 maar via andere reden.", "Wel bepaald, 0."],
        uitlegPad: {
          stappen: [{ titel: "Gelijke grenzen", tekst: "**∫[a tot a] f(x) dx = 0**. Geen interval = geen oppervlakte = 0. Eigenschap bepaalde integraal." }],
          niveaus: { basis: "0. A.", simpeler: "Gelijke grenzen = 0 = A.", nogSimpeler: "0 = A." },
        },
      },
    ],
  },

  // ─── C. Integratietechnieken ──────────────────────────────
  {
    title: "Integratietechnieken — substitutie + partieel",
    explanation:
      "Niet elke functie heeft een directe primitieve via basisregels. Twee technieken op HAVO/VWO Wiskunde B:\n\n**1. Substitutie (kettingregel omgekeerd)**:\n\nWerkt als integrand de vorm **f(g(x)) · g'(x)** heeft.\n\nStrategie:\n• Stel u = g(x).\n• Dan du = g'(x) dx.\n• Integraal wordt ∫ f(u) du.\n• Integreer + substitueer x terug.\n\n**Voorbeeld 1**: ∫ 2x · cos(x²) dx\n• u = x² → du = 2x dx ✓ (precies matchend in integrand)\n• ∫ cos(u) du = sin(u) + C = **sin(x²) + C**\n• Check: d/dx(sin x²) = cos(x²) · 2x ✓\n\n**Voorbeeld 2**: ∫ (3x²+1)(x³+x)⁵ dx\n• u = x³+x → du = (3x²+1) dx ✓\n• ∫ u⁵ du = u⁶/6 = **(x³+x)⁶/6 + C**\n\n**Eenvoudige substitutie** (lineair): ∫ f(ax+b) dx → **F(ax+b)/a + C**\n• ∫ cos(3x) dx = **sin(3x)/3 + C**\n• ∫ e^(2x) dx = **e^(2x)/2 + C**\n• ∫ (2x+5)⁴ dx = **(2x+5)⁵/(5·2) = (2x+5)⁵/10 + C**\n\n**2. Partiële integratie** (productregel omgekeerd):\n\n∫ u dv = uv − ∫ v du\n\nHandig bij producten als x·sin(x), x·e^x, x²·ln(x), e^x·cos(x) etc.\n\n**Strategie**:\n• Kies u = factor die simpeler wordt na differentieren (vaak x of ln of inverse).\n• Kies dv = rest (moet primitieve hebben).\n• Bereken du (afgeleide u) en v (primitieve dv).\n• Pas formule toe.\n\n**Ezelsbruggetje LIATE** voor u-keuze:\n**L**ogaritmen → **I**nverse goniometrisch → **A**lgebraïsch (x, x²) → **T**rigonometrisch → **E**xponentieel.\nKies de meest-links beschikbare als u.\n\n**Voorbeeld**: ∫ x · e^x dx\n• u = x (A) → du = dx\n• dv = e^x dx → v = e^x\n• ∫ x·e^x dx = x·e^x − ∫ e^x dx = x·e^x − e^x + C = **(x−1)e^x + C**\n\n**Voorbeeld 2**: ∫ ln(x) dx (truc: ln·1)\n• u = ln(x) (L) → du = 1/x dx\n• dv = 1·dx → v = x\n• ∫ ln(x) dx = x·ln(x) − ∫ x · 1/x dx = x·ln(x) − x + C = **x(ln(x) − 1) + C**\n\n**Wanneer welke?**\n• Functie binnen functie + afgeleide-buiten? → **substitutie**.\n• Product van twee verschillende soorten? → **partieel**.\n• Soms beide nodig of substitutie 2× of partieel 2×.",
    checks: [
      {
        q: "Bij ∫ **2x · cos(x²) dx** — welke techniek?",
        options: ["Substitutie u=x²","Partiële integratie","Direct macht-regel","Niet integreerbaar"],
        answer: 0,
        wrongHints: [null, "Niet — geen product van twee aparte functies.", "Niet — kettingvorm aanwezig.", "Wel — via substitutie."],
        uitlegPad: {
          stappen: [{ titel: "Substitutie-cue: f(g(x))·g'(x)", tekst: "**Substitutie**. u=x², du=2x dx. ∫ 2x·cos(x²) dx → ∫ cos(u) du = sin(u) + C = **sin(x²) + C**. De 2x naast cos(x²) is de afgeleide van het binnen-deel x². Klassieke substitutie-vorm." }],
          niveaus: { basis: "Substitutie u=x². A.", simpeler: "2x·cos(x²) = substitutie = A.", nogSimpeler: "Subst = A." },
        },
      },
      {
        q: "Wat is ∫ **e^(2x) dx**?",
        options: ["e^(2x)/2 + C","e^(2x) + C","2·e^(2x) + C","e^x + C"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet niet door 2.", "Niet — dat is afgeleide.", "Niet — andere functie."],
        uitlegPad: {
          stappen: [{ titel: "Lineaire substitutie", tekst: "∫ e^(ax+b) dx = **e^(ax+b)/a + C**. Hier a=2: ∫ e^(2x) dx = **e^(2x)/2 + C**. Check: d/dx(e^(2x)/2) = 2·e^(2x)/2 = e^(2x). ✓" }],
          niveaus: { basis: "e^(2x)/2 + C. A.", simpeler: "e^(ax) → e^(ax)/a = A.", nogSimpeler: "/2 = A." },
        },
      },
      {
        q: "Bij ∫ **x · e^x dx** — welke techniek?",
        options: ["Partiële integratie","Substitutie","Direct","Niet integreerbaar"],
        answer: 0,
        wrongHints: [null, "Niet — geen f(g)·g'-vorm.", "Niet — twee verschillende functies.", "Wel — via partieel."],
        uitlegPad: {
          stappen: [{ titel: "Product = partieel", tekst: "**Partiële integratie**. ∫ u dv = uv − ∫ v du. Kies u = x (Algebraïsch, wordt simpel) en dv = e^x dx (heeft primitieve). Dan du = dx, v = e^x.\n\n∫ x·e^x dx = x·e^x − ∫ e^x dx = x·e^x − e^x + C = **(x−1)e^x + C**." }],
          theorie: "LIATE-cue: kies meest-links-beschikbare als u. Hier alleen A (x) en E (e^x) → A wordt u.",
          niveaus: { basis: "Partiële integratie. A.", simpeler: "Product x·e^x = partieel = A.", nogSimpeler: "Partieel = A." },
        },
      },
      {
        q: "Wat is ∫ **(2x+1)³ dx**?",
        options: ["(2x+1)⁴/8 + C","(2x+1)⁴/4 + C","3(2x+1)² + C","(2x+1)⁴ + C"],
        answer: 0,
        wrongHints: [null, "Mist /2 door binnen-afgeleide.", "Niet — andere regel.", "Mist deling."],
        uitlegPad: {
          stappen: [{ titel: "Lineaire substitutie", tekst: "∫ (ax+b)^n dx = **(ax+b)^(n+1) / [a·(n+1)] + C**. Hier a=2, n=3: (2x+1)⁴ / (2·4) = **(2x+1)⁴/8 + C**. Check: d/dx((2x+1)⁴/8) = 4(2x+1)³·2/8 = (2x+1)³. ✓" }],
          niveaus: { basis: "(2x+1)⁴/8 + C. A.", simpeler: "Macht+1, gedeeld door [a·nieuwe macht] = A.", nogSimpeler: "/8 = A." },
        },
      },
      {
        q: "Wat is ∫ **ln(x) dx**?",
        options: ["x·ln(x) − x + C","1/x + C","x/ln(x) + C","ln(x)·ln(x) + C"],
        answer: 0,
        wrongHints: [null, "Niet — dat is afgeleide ln.", "Niet zinvol.", "Niet — kettingvorm verkeerd."],
        uitlegPad: {
          stappen: [{ titel: "Partieel met truc", tekst: "Truc: schrijf ln(x) = ln(x) · 1. Partieel: u=ln(x), du=1/x dx; dv=1·dx, v=x. ∫ ln(x) dx = x·ln(x) − ∫ x · (1/x) dx = x·ln(x) − ∫ 1 dx = **x·ln(x) − x + C**." }],
          theorie: "Cito-klassieker. Onthoud: ∫ ln(x) dx = x(ln x − 1) + C.",
          niveaus: { basis: "x·ln(x) − x + C. A.", simpeler: "Partieel met truc → x·ln(x) − x + C = A.", nogSimpeler: "x·ln(x)−x+C = A." },
        },
      },
    ],
  },

  // ─── D. Toepassingen ──────────────────────────────────────
  {
    title: "Toepassingen — wegen, volumes, gemiddelden",
    explanation:
      "Integralen lossen veel praktische problemen op. CSE-eindexamen test toepassingen.\n\n**1. Snelheid → afstand (kinematica)**:\n• Snelheid v(t) = positie's afgeleide.\n• Dan: **afstand tussen tijdstip t=a en t=b = ∫[a tot b] v(t) dt**.\n• Bij negatieve v: terug — let op tekens.\n\n**Voorbeeld**: v(t) = 3t² m/s op [0,4]:\nAfstand = ∫[0,4] 3t² dt = [t³] van 0 tot 4 = 64 m.\n\n**2. Versnelling → snelheid**:\n• Versnelling a(t) = afgeleide v(t).\n• v(t) = ∫ a(t) dt + v₀ (begin-snelheid).\n\n**3. Oppervlakte tussen 2 grafieken** (zie stap B): ∫(boven − onder).\n\n**4. Volume omwentelingslichaam**:\n• Roteer grafiek y = f(x) rond x-as op [a,b].\n• Volume = π · ∫[a tot b] [f(x)]² dx (schijf-methode).\n• Bij rotatie rond y-as: π · ∫[c,d] [g(y)]² dy.\n\n**Voorbeeld**: y = √x op [0,4], rond x-as:\nV = π · ∫[0,4] (√x)² dx = π · ∫[0,4] x dx = π · [x²/2] van 0 tot 4 = π · 8 = **8π** ≈ 25,1.\n\n**5. Gemiddelde waarde** functie op [a,b]:\n**f_gem = (1/(b−a)) · ∫[a tot b] f(x) dx**.\n\n**Voorbeeld**: temperatuur T(t) gemeten over 24 uur:\nGem. dagtemperatuur = (1/24) · ∫[0,24] T(t) dt.\n\n**6. Boog-lengte** (VWO):\nL = ∫[a,b] √(1 + [f'(x)]²) dx. Op CSE meestal alleen herkennen.\n\n**7. Cumulatieve waarden uit dichtheidsfuncties** (statistiek/economie):\n• Snelheid van toename × tijd = totaal.\n• Bv: bedrijfswinst-snelheid p(t) = 100 − t² → totaal winst op [0,10] = ∫[0,10] p(t) dt.\n\n**Eindexamen-pattern**:\n• Functie + interval gegeven.\n• Eerst: snijpunten / primitieve / interpretatie.\n• Daarna: bepaalde integraal evalueren.\n• Soms: optimalisatie ('voor welke x is opp/volume maximaal') → differentieer integraal naar parameter.",
    checks: [
      {
        q: "v(t) = 2t m/s. **Afstand tussen t=0 en t=5**?",
        options: ["25 m","10 m","50 m","100 m"],
        answer: 0,
        wrongHints: [null, "Niet — gebruik integraal.", "Niet — te groot.", "Niet — extreem groot."],
        uitlegPad: {
          stappen: [{ titel: "s = ∫v dt", tekst: "Afstand = ∫[0,5] 2t dt = [t²] van 0 tot 5 = 25 − 0 = **25 m**." }],
          theorie: "Algemene regel: ∫ snelheid dt = afstand. Cito-klassieker.",
          niveaus: { basis: "25 m. A.", simpeler: "[t²]0→5 = 25 = A.", nogSimpeler: "25 = A." },
        },
      },
      {
        q: "Volume bij rotatie y = x rond x-as op [0,3]?",
        options: ["9π","3π","27π","π/3"],
        answer: 0,
        wrongHints: [null, "Mist π·x².", "Niet — te groot.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Schijf-methode", tekst: "V = π · ∫[a,b] [f(x)]² dx = π · ∫[0,3] x² dx = π · [x³/3] van 0 tot 3 = π · 9 = **9π**. (≈ 28,3 eenheden³)" }],
          theorie: "Cone om x-as is dit precies — kegel met straal 3, hoogte 3. V = (1/3)πr²h = (1/3)·π·9·3 = 9π. ✓",
          niveaus: { basis: "9π. A.", simpeler: "π·∫x²dx 0→3 = 9π = A.", nogSimpeler: "9π = A." },
        },
      },
      {
        q: "Gemiddelde waarde **f(x) = x² op [0,3]**?",
        options: ["3","9","1","27"],
        answer: 0,
        wrongHints: [null, "Niet — dat is max.", "Niet — interval-eindpunt.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "f_gem-formule", tekst: "f_gem = (1/(b−a)) · ∫[a,b] f(x) dx = (1/3) · ∫[0,3] x² dx = (1/3) · [x³/3] 0→3 = (1/3) · 9 = **3**." }],
          theorie: "Cito-toepassing: 'gem temperatuur tussen 12u en 18u' = (1/6)·∫T(t) dt.",
          niveaus: { basis: "3. A.", simpeler: "(1/3)·9 = 3 = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "**Versnelling a(t) = 6t**, v₀ = 2. Wat is v(t)?",
        options: ["3t² + 2","6t² + 2","6 + 2","t³ + 2"],
        answer: 0,
        wrongHints: [null, "Mist /2.", "Niet integraal.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "v = ∫a dt + v₀", tekst: "v(t) = ∫ 6t dt + v₀ = 3t² + C. Begin-conditie: v(0)=2 → C=2. **v(t) = 3t² + 2**." }],
          niveaus: { basis: "3t²+2. A.", simpeler: "∫6t = 3t² + v₀ = A.", nogSimpeler: "3t²+2 = A." },
        },
      },
      {
        q: "Bedrijfswinst-tempo **p(t) = 100 − 5t** €/dag. **Totale winst over 10 dagen**?",
        options: ["€750","€500","€1000","€250"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Te hoog.", "Te laag."],
        uitlegPad: {
          stappen: [{ titel: "Cumulatief = integraal", tekst: "Totaal = ∫[0,10] (100 − 5t) dt = [100t − 5t²/2] 0→10 = 1000 − 250 = **€750**." }],
          theorie: "Toepassing: tempo van toename × tijd = totaal opbrengst.",
          niveaus: { basis: "€750. A.", simpeler: "∫(100−5t) 0→10 = 1000−250 = 750 = A.", nogSimpeler: "€750 = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — integralen mix",
    explanation:
      "Combinatie van techniek + interpretatie + toepassingen.\n\nVeel succes!",
    checks: [
      {
        q: "Wat is ∫ **3x² + 4x − 5 dx**?",
        options: ["x³ + 2x² − 5x + C","6x + 4 + C","x³ + 4x² − 5x + C","3x³ + 4x² − 5 + C"],
        answer: 0,
        wrongHints: [null, "Niet — dat is afgeleide.", "Mist /2 bij 4x.", "Niet correct (waar zijn /3, /2?)."],
        uitlegPad: {
          stappen: [{ titel: "Term voor term", tekst: "∫ 3x² = x³, ∫ 4x = 2x², ∫ −5 = −5x. Totaal: **x³ + 2x² − 5x + C**." }],
          niveaus: { basis: "x³+2x²−5x+C. A.", simpeler: "Per term primitief = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Bereken **∫[1 tot 2] 1/x dx**.",
        options: ["ln(2) ≈ 0,693","1","ln(2)−ln(1)+1","Niet bepaald"],
        answer: 0,
        wrongHints: [null, "Niet — dan vergeet je ln-primitief.", "Klopt half (eerste term goed, +1 niet).", "Wel bepaald."],
        uitlegPad: {
          stappen: [{ titel: "ln-primitief", tekst: "∫ 1/x dx = ln|x|. ∫[1,2] 1/x dx = ln(2) − ln(1) = ln(2) − 0 = **ln(2)** ≈ 0,693." }],
          theorie: "ln(1) = 0 altijd onthouden.",
          niveaus: { basis: "ln(2). A.", simpeler: "ln(2)−ln(1) = ln(2) = A.", nogSimpeler: "ln 2 = A." },
        },
      },
      {
        q: "Oppervlakte tussen **f(x) = 4 − x²** en x-as (parabool boven x-as):",
        options: ["32/3","16/3","8","16"],
        answer: 0,
        wrongHints: [null, "Te klein.", "Mist meer.", "Te groot."],
        uitlegPad: {
          stappen: [
            { titel: "Snijpunten met x-as", tekst: "4 − x² = 0 → x = ±2. Parabool snijdt x-as op x=−2 en x=2." },
            { titel: "Integreer", tekst: "Opp = ∫[−2,2] (4 − x²) dx = [4x − x³/3] −2→2 = (8 − 8/3) − (−8 + 8/3) = (24/3 − 8/3) + (8 − 8/3) = 16/3 + 16/3 = **32/3** ≈ 10,67." },
          ],
          niveaus: { basis: "32/3. A.", simpeler: "∫(4−x²)−2→2 = 32/3 = A.", nogSimpeler: "32/3 = A." },
        },
      },
      {
        q: "Snelheid v(t) = t² − 4 m/s. **Verplaatsing tussen t=0 en t=3**?",
        options: ["−3 m (terugverplaatst)","9 m","12 m","Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Niet — negatief deel telt mee.", "Niet — onjuist.", "Wel mogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Negatieve snelheid", tekst: "v(t) = t²−4. Voor t<2: v<0 (achteruit). t>2: v>0.\n\nVerplaatsing = ∫[0,3] (t²−4) dt = [t³/3 − 4t] 0→3 = 9 − 12 = **−3**.\n\nDus netto 3 m **achteruit** verplaatst. (Afgelegde afstand = som van |stukken| = anders.)" }],
          theorie: "Verschil tussen 'verplaatsing' (integraal, kan negatief) en 'afstand' (positieve som). Cito let goed op.",
          niveaus: { basis: "−3. A.", simpeler: "∫(t²−4) 0→3 = 9−12 = −3 = A.", nogSimpeler: "−3 = A." },
        },
      },
      {
        q: "Welke techniek voor **∫ x·sin(x) dx**?",
        options: ["Partiële integratie","Substitutie u=sin(x)","Direct","Niet integreerbaar"],
        answer: 0,
        wrongHints: [null, "Niet — geen kettingvorm met afgeleide.", "Niet zonder techniek.", "Wel — via partieel."],
        uitlegPad: {
          stappen: [{ titel: "LIATE: A vóór T", tekst: "**Partiële integratie**. Kies u = x (A), dv = sin(x) dx (T). Dan du=dx, v=−cos(x).\n\n∫ x·sin(x) dx = x·(−cos x) − ∫ (−cos x) dx = −x·cos x + sin x + C = **sin(x) − x·cos(x) + C**." }],
          theorie: "Cito-klassieker. LIATE: A=x voor T=sin → x wordt u.",
          niveaus: { basis: "Partieel. A.", simpeler: "x·sin = partieel = A.", nogSimpeler: "Partieel = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const integralenHavoVwo = {
  id: "integralen-havo-vwo",
  title: "Integralen (HAVO/VWO wiskunde B)",
  emoji: "∫",
  level: "havo4-5-vwo",
  subject: "wiskunde",
  referentieNiveau: "havo-vwo-CSE-wiskundeB",
  sloThema: "Wiskunde B HAVO/VWO — integraalrekening eindexamen-stof",
  prerequisites: [
    { id: "differentieren", title: "Differentiëren", niveau: "havo4-5" },
    { id: "parabolen", title: "Parabolen", niveau: "klas2" },
    { id: "machten", title: "Machten", niveau: "klas3" },
    { id: "exponentieel", title: "Exponentiële functies", niveau: "klas4" },
    { id: "logaritmen", title: "Logaritmen", niveau: "klas4-5" },
  ],
  intro:
    "Integraalrekening HAVO/VWO wiskunde B eindexamen-stof. Primitieven (∫ x^n, e^x, sin, cos, ln), bepaalde integraal + oppervlakte tussen grafieken, substitutie + partiële integratie, en toepassingen (snelheid→afstand, omwentelingsvolume, gemiddelde waarde). Vervolg op differentieren-pad. ~15-20 min.",
  triggerKeywords: [
    "integraal", "integreren", "integralen",
    "primitieve", "primitief",
    "onbepaalde integraal", "bepaalde integraal",
    "F(b)-F(a)", "hoofdstelling",
    "oppervlakte onder grafiek", "oppervlakte tussen",
    "snijpunten grafieken",
    "substitutie", "kettingregel omgekeerd",
    "partieel integreren", "partiële integratie",
    "LIATE",
    "ln(x) primitief", "e^x integraal",
    "sin cos integraal",
    "omwentelingslichaam", "rotatie x-as",
    "volume omwenteling",
    "gemiddelde waarde functie",
    "snelheid afstand integraal",
    "kinematica integraal",
    "Riemann", "trapeziumregel",
    "wiskunde B", "wiskunde-B",
  ],
  chapters,
  steps,
};

export default integralenHavoVwo;

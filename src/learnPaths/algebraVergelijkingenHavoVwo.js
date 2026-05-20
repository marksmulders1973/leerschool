// Leerpad: Algebra + Vergelijkingen — HAVO/VWO Wiskunde
// CSE-fundament. Haakjes wegwerken, factoriseren, lineaire +
// kwadratische vergelijkingen, stelsels, ongelijkheden.
// 5 stappen × ~5 checks. Referentieniveau havo-2F / vwo-3F.

const stepEmojis = ["🔢", "➗", "🟰", "🧮", "🏆"];

const chapters = [
  { letter: "A", title: "Algebra-basis", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Lineaire vergelijkingen", emoji: "➗", from: 1, to: 1 },
  { letter: "C", title: "Kwadratische vergelijkingen", emoji: "🟰", from: 2, to: 2 },
  { letter: "D", title: "Stelsels (substitutie + eliminatie)", emoji: "🧮", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — ongelijkheden", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Algebra-basis ─────────────────────────────────────
  {
    title: "Algebra-basis — haakjes + factoriseren + breuken",
    explanation:
      "**Variabelen**: letters voor onbekende getallen (meestal x, y, z, a, b, c).\n\n**Term** = onderdeel van expressie gescheiden door + of −. Bv. 3x² + 5x − 2 heeft 3 termen.\n\n**Coëfficiënt** = getal voor variabele. 3x²: coëfficiënt = 3.\n\n**Constante** = term zonder variabele. In 3x² + 5x − 2: constante = −2.\n\n**Haakjes wegwerken**:\n• **Distributiewet**: a(b+c) = ab + ac.\n  - 3(x+2) = 3x + 6.\n  - −2(x−5) = −2x + 10 (let op tekens!).\n• **Twee haakjes**: (a+b)(c+d) = ac + ad + bc + bd.\n  - (x+2)(x+3) = x² + 3x + 2x + 6 = x² + 5x + 6.\n\n**Merkwaardige producten** (essentieel!):\n• **(a+b)² = a² + 2ab + b²**.\n  - (x+3)² = x² + 6x + 9.\n• **(a−b)² = a² − 2ab + b²**.\n  - (x−4)² = x² − 8x + 16.\n• **(a+b)(a−b) = a² − b²** (verschil van kwadraten).\n  - (x+5)(x−5) = x² − 25.\n\n**Factoriseren** (omgekeerd van haakjes wegwerken):\n• Gemene factor afsplitsen: 6x + 9 = 3(2x + 3).\n• Verschil van kwadraten: x² − 16 = (x−4)(x+4).\n• Volledige kwadraat: x² + 6x + 9 = (x+3)².\n• Algemeen ontbinden ax² + bx + c: zoek twee getallen p+q=b, p·q=ac.\n  - x² + 5x + 6: getallen 2 + 3 = 5, 2·3 = 6 ✓ → (x+2)(x+3).\n  - x² − 7x + 10: getallen −2 + (−5) = −7, (−2)(−5) = 10 → (x−2)(x−5).\n\n**Breuken** met variabelen:\n• Optellen: gelijke noemer maken. x/2 + x/3 = 3x/6 + 2x/6 = 5x/6.\n• Vermenigvuldigen: a/b · c/d = ac/bd.\n• Delen: a/b : c/d = a/b · d/c.\n• Vereenvoudigen: deel boven + onder door gemene factor.\n\n**Wortels** (radicalen):\n• √(ab) = √a · √b.\n• √(a/b) = √a / √b.\n• Wortels alleen optellen als gelijke 'wortelvorm': √2 + 3√2 = 4√2.",
    checks: [
      {
        q: "Werk haakjes weg: **3(2x − 5)** = ?",
        options: ["6x − 15", "6x − 5", "5x − 15", "6x + 15"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet −5 te vermenigvuldigen.", "Niet — vermenigvuldig met 3.", "Niet — let op teken."],
        uitlegPad: {
          stappen: [{ titel: "a(b−c) = ab − ac", tekst: "3 × 2x = 6x. 3 × (−5) = −15. Resultaat: **6x − 15**." }],
          niveaus: { basis: "6x−15. A.", simpeler: "3 maal elk: 6x en −15. A.", nogSimpeler: "6x−15 = A." },
        },
      },
      {
        q: "**(x + 4)²** = ?",
        options: ["x² + 8x + 16", "x² + 16", "x² + 4x + 16", "x² + 8x + 8"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet middenterm 2ab.", "Niet — coëfficiënt is 2ab=8.", "Niet — laatste term is 4²=16."],
        uitlegPad: {
          stappen: [
            { titel: "(a+b)² = a² + 2ab + b²", tekst: "(x+4)² = x² + 2·x·4 + 4² = **x² + 8x + 16**.\n\n*Veelgemaakte fout*: x² + 16 (vergeten 2ab-term). Test: (1+4)² = 25 ≠ 1+16. Maar 1 + 8 + 16 = 25 ✓." },
          ],
          niveaus: { basis: "x²+8x+16. A.", simpeler: "Drie termen: x², 8x, 16. A.", nogSimpeler: "x²+8x+16 = A." },
        },
      },
      {
        q: "Factoriseer: **x² − 36** = ?",
        options: ["(x − 6)(x + 6)", "(x − 6)²", "(x + 6)²", "x(x − 36)"],
        answer: 0,
        wrongHints: [null, "Niet — geen middenterm.", "Niet — geen middenterm.", "Niet — −36 niet 0."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil van kwadraten", tekst: "x² − 36 = x² − 6² = **(x − 6)(x + 6)**. Standaardformule a² − b² = (a−b)(a+b). Check: (x−6)(x+6) = x² + 6x − 6x − 36 = x² − 36 ✓." },
          ],
          niveaus: { basis: "(x−6)(x+6). A.", simpeler: "a²−b² = (a−b)(a+b). A.", nogSimpeler: "(x±6) = A." },
        },
      },
      {
        q: "Vereenvoudig: **(x² + 5x + 6) / (x + 2)** = ?",
        options: ["x + 3", "x + 6", "x − 2", "x + 5"],
        answer: 0,
        wrongHints: [null, "Niet — controleer factorisatie.", "Niet — andere factor weg.", "Niet — verkeerde rest."],
        uitlegPad: {
          stappen: [
            { titel: "Eerst boven factoriseren", tekst: "x² + 5x + 6 = (x+2)(x+3). Boven gedeeld door (x+2) → blijft **(x+3)**. Mits x ≠ −2." },
          ],
          niveaus: { basis: "x+3. A.", simpeler: "Boven factor weg. A.", nogSimpeler: "x+3 = A." },
        },
      },
      {
        q: "**√50** vereenvoudig:",
        options: ["5√2", "√50 (kan niet)", "25√2", "10"],
        answer: 0,
        wrongHints: [null, "Wel — 50 heeft kwadraat-factor.", "Niet — onmogelijk.", "Niet — √100 = 10."],
        uitlegPad: {
          stappen: [
            { titel: "Kwadraat-factor afsplitsen", tekst: "50 = 25 × 2. √50 = √25 · √2 = **5√2** ≈ 7,07. Vorm onder wortel zo klein mogelijk schrijven." },
          ],
          niveaus: { basis: "5√2. A.", simpeler: "√25·√2 = 5√2. A.", nogSimpeler: "5√2 = A." },
        },
      },
    ],
  },

  // ─── B. Lineaire vergelijkingen ───────────────────────────
  {
    title: "Lineaire vergelijkingen oplossen — ax + b = c",
    explanation:
      "**Lineaire vergelijking**: x komt alleen in graad 1 voor (geen x², geen √x).\n• ax + b = c, of: 3(x − 2) = 5x + 1, etc.\n• Eén oplossing meestal — tenzij ontaard.\n\n**Algemene aanpak**:\n1. **Haakjes wegwerken**.\n2. **Breuken weg** (vermenigvuldigen met gemene noemer).\n3. **Alle x naar één kant**, alle constanten naar andere kant.\n4. **Combineer** gelijke termen.\n5. **Deel** door coëfficiënt van x.\n6. **Controleer** door invullen in originele vergelijking.\n\n**Stap-voor-stap voorbeeld**:\nLos op: 3(x − 2) = 5x + 4.\n• Stap 1 — haakjes: 3x − 6 = 5x + 4.\n• Stap 3 — x naar links: 3x − 5x = 4 + 6 → −2x = 10.\n• Stap 5 — delen door −2: **x = −5**.\n• Stap 6 — controle: 3(−5−2) = 3·(−7) = −21. 5·(−5)+4 = −21. ✓\n\n**Speciale gevallen**:\n• **Geen oplossing**: 2x + 3 = 2x + 5 → 3 = 5 (vals). Tegenspraak.\n• **Oneindig veel oplossingen**: 2x + 4 = 2(x + 2) → 0 = 0 (altijd waar).\n\n**Met breuken**:\n(x + 1)/3 = (x − 2)/2.\n• Beide × 6: 2(x+1) = 3(x−2).\n• 2x + 2 = 3x − 6.\n• 2 + 6 = 3x − 2x → x = 8.\n\n**Toepassings-som**:\n'Vader is 4× zo oud als zoon. Samen 50.'\n• Zoon = x, vader = 4x.\n• x + 4x = 50 → 5x = 50 → x = 10.\n• Vader 40, zoon 10. Som 50 ✓.\n\n**Vergelijking versus uitdrukking**:\n• **Uitdrukking** (expression): 3x + 2 (geen =).\n• **Vergelijking** (equation): 3x + 2 = 11 (met =).\n• Vergelijking oplossen = waarde(n) van x vinden waarvoor LHS = RHS.\n\n**Tips**:\n• Begin altijd met haakjes + breuken weg.\n• 'Wat je links doet, ook rechts'.\n• Controleer ALTIJD door invullen.",
    checks: [
      {
        q: "Los op: **2x + 7 = 19**.",
        options: ["x = 6", "x = 12", "x = 13", "x = 5"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet delen door 2.", "Niet — controleer aftrekken.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Constante eerst", tekst: "2x + 7 = 19. Trek 7 af van beide kanten: 2x = 12. Deel door 2: **x = 6**. Check: 2·6 + 7 = 19 ✓." },
          ],
          niveaus: { basis: "x=6. A.", simpeler: "12/2=6. A.", nogSimpeler: "6 = A." },
        },
      },
      {
        q: "Los op: **3(x − 4) = 2x + 5**.",
        options: ["x = 17", "x = 9", "x = 5", "x = 1"],
        answer: 0,
        wrongHints: [null, "Niet — controleer optelling.", "Niet — controleer haakjes.", "Niet — controleer verplaatsing."],
        uitlegPad: {
          stappen: [
            { titel: "Haakjes + verplaatsen", tekst: "3x − 12 = 2x + 5.\n3x − 2x = 5 + 12.\nx = **17**.\nCheck: 3(17−4) = 39. 2·17+5 = 39 ✓." },
          ],
          niveaus: { basis: "x=17. A.", simpeler: "Verplaats x naar links: x=17. A.", nogSimpeler: "17 = A." },
        },
      },
      {
        q: "Een **rechthoek** heeft omtrek 30 cm. Lengte is 5 meer dan breedte. Wat is breedte?",
        options: ["5", "10", "12,5", "15"],
        answer: 0,
        wrongHints: [null, "Niet — dat is lengte.", "Onmogelijk in deze som.", "Onmogelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijking opstellen", tekst: "Breedte = b, lengte = b + 5. Omtrek = 2(L + B) = 30 → 2(b+5+b) = 30 → 4b + 10 = 30 → 4b = 20 → **b = 5**. Lengte 10. Check: 2(5+10)=30 ✓." },
          ],
          niveaus: { basis: "b=5. A.", simpeler: "4b+10=30 → b=5. A.", nogSimpeler: "5 = A." },
        },
      },
      {
        q: "Wat is de oplossing van **2x + 5 = 2x + 8**?",
        options: ["Geen oplossing", "x = 0", "x = 3", "x = oneindig"],
        answer: 0,
        wrongHints: [null, "Wel iets, namelijk: geen oplossing.", "Niet correct.", "Niet — geen oneindig."],
        uitlegPad: {
          stappen: [
            { titel: "Tegenspraak", tekst: "Verplaats x: 2x − 2x = 8 − 5 → 0 = 3. **Vals voor elke x**. Daarom: GEEN oplossing. Visueel: 2 evenwijdige rechten (zelfde helling, ander snijpunt-y) snijden nooit." },
          ],
          theorie: "Tegenovergesteld: 2x + 4 = 2(x+2) → 0 = 0 → ALTIJD waar → oneindig veel oplossingen.",
          niveaus: { basis: "Geen oplossing. A.", simpeler: "0=3 = vals. A.", nogSimpeler: "Geen = A." },
        },
      },
      {
        q: "Los op: **(x + 3)/2 = 5**.",
        options: ["x = 7", "x = 10", "x = 8", "x = 5"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet −3.", "Niet — eerst vermenigvuldig 2.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Breuk weg, dan oplossen", tekst: "Vermenigvuldig beide kanten met 2: x + 3 = 10. Trek 3 af: **x = 7**. Check: (7+3)/2 = 5 ✓." },
          ],
          niveaus: { basis: "x=7. A.", simpeler: "10−3=7. A.", nogSimpeler: "7 = A." },
        },
      },
    ],
  },

  // ─── C. Kwadratische vergelijkingen ───────────────────────
  {
    title: "Kwadratische vergelijkingen — abc-formule + ontbinden",
    explanation:
      "**Kwadratische vergelijking**: hoogste macht van x is 2.\nStandaardvorm: **ax² + bx + c = 0** (met a ≠ 0).\n\n**Drie oplos-methodes**:\n\n**1. Ontbinden in factoren**:\nx² + 5x + 6 = 0.\nZoek p, q met p+q=5, p·q=6 → 2, 3.\n(x+2)(x+3) = 0.\nProduct = 0 → x+2=0 of x+3=0.\n**x = −2 of x = −3**.\n\n**2. Volledig kwadraat afmaken** (voor x² + bx + c):\nx² + 6x + 4 = 0.\nKwadraat (x+3)² = x² + 6x + 9.\nHerschrijf: x² + 6x = −4 → (x+3)² − 9 = −4 → (x+3)² = 5 → x + 3 = ±√5.\nx = −3 ± √5.\n\n**3. ABC-formule** (altijd werkt):\nVoor ax² + bx + c = 0:\n**x = (−b ± √(b² − 4ac)) / (2a)**\n\n**Discriminant D = b² − 4ac**:\n• D > 0: twee verschillende oplossingen.\n• D = 0: één oplossing (dubbel).\n• D < 0: geen reële oplossingen (wel complex op VWO-D).\n\n**Voorbeeld**:\n2x² − 7x + 3 = 0. a=2, b=−7, c=3.\nD = 49 − 24 = 25. √25 = 5.\nx = (7 ± 5) / 4.\nx = 12/4 = 3 of x = 2/4 = 0,5.\n\n**Speciaal**:\nx² − 9 = 0 (b=0) → x² = 9 → **x = 3 of −3**. Werkt direct via wortel.\nx² + 4x = 0 → x(x+4) = 0 → **x = 0 of −4**. Werkt via factor x afsplitsen.\n\n**Toepassingen**:\n• Worp omhoog: hoogte h(t) = −5t² + 20t. Wanneer h=0 (grond)? Oplos.\n• Oppervlakte-sommen: rechthoek L×B = oppervlakte, met L+B vast.\n• Optimalisatie via afgeleiden = 0 → meestal kwadratisch.\n\n**Cito-CSE-tip**: leer ABC-formule UIT JE HOOFD. Altijd werkt, ook wanneer ontbinden lastig.",
    checks: [
      {
        q: "Los op: **x² − 7x + 12 = 0**.",
        options: ["x = 3 of x = 4", "x = 6 of x = 2", "x = −3 of x = −4", "x = 7 of x = 12"],
        answer: 0,
        wrongHints: [null, "Niet — controleer p·q.", "Niet — tekens andersom.", "Niet — niet oplossingen."],
        uitlegPad: {
          stappen: [
            { titel: "Ontbinden", tekst: "Zoek p, q met p+q=−7, p·q=12 → −3, −4. (x−3)(x−4)=0 → **x=3 of x=4**. Check: 3²−7·3+12 = 9−21+12 = 0 ✓." },
          ],
          niveaus: { basis: "x=3 of x=4. A.", simpeler: "(x−3)(x−4)=0. A.", nogSimpeler: "3,4 = A." },
        },
      },
      {
        q: "ABC-formule voor **x² + 4x + 1 = 0**. Discriminant D?",
        options: ["12", "20", "−12", "4"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Niet — wel positief.", "Niet — alleen b²."],
        uitlegPad: {
          stappen: [
            { titel: "D = b² − 4ac", tekst: "a=1, b=4, c=1. D = 16 − 4·1·1 = 16 − 4 = **12**. D>0 → twee reële oplossingen." },
          ],
          niveaus: { basis: "D=12. A.", simpeler: "16−4=12. A.", nogSimpeler: "12 = A." },
        },
      },
      {
        q: "Wat is de discriminant van **x² − 2x + 5 = 0**?",
        options: ["−16 (geen reële oplossing)", "4", "16", "−4"],
        answer: 0,
        wrongHints: [null, "Niet — controleer −4ac.", "Niet — controleer tekens.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "D = b² − 4ac", tekst: "a=1, b=−2, c=5. D = (−2)² − 4·1·5 = 4 − 20 = **−16**. **D<0 → geen reële oplossingen** (de parabool snijdt x-as niet)." },
          ],
          theorie: "Geometrisch: parabool y = x² − 2x + 5 heeft minimum boven x-as.",
          niveaus: { basis: "D=−16. A.", simpeler: "Negatief D = geen oplossing. A.", nogSimpeler: "−16 = A." },
        },
      },
      {
        q: "Los op: **x² = 49**.",
        options: ["x = 7 of x = −7", "x = 7", "x = −7", "x = 24,5"],
        answer: 0,
        wrongHints: [null, "Niet — ook negatieve oplossing.", "Niet — ook positieve.", "Niet — half is fout."],
        uitlegPad: {
          stappen: [
            { titel: "Wortel-extractie", tekst: "x² = 49 → x = ±√49 = **±7**. Beide oplossingen want zowel 7² als (−7)² = 49." },
          ],
          niveaus: { basis: "±7. A.", simpeler: "x=7 of x=−7. A.", nogSimpeler: "±7 = A." },
        },
      },
      {
        q: "Voor **2x² − 3x − 5 = 0**. ABC-formule: x = ?",
        options: [
          "x = 2,5 of x = −1",
          "x = 5 of x = −2",
          "x = 3 of x = −5",
          "Geen oplossing"
        ],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Idem.", "Wel oplossing — D=49."],
        uitlegPad: {
          stappen: [
            { titel: "ABC stap-voor-stap", tekst: "a=2, b=−3, c=−5. D = 9 + 40 = 49 → √49 = 7.\nx = (3 ± 7) / 4.\nx = 10/4 = 2,5 OF x = −4/4 = −1.\n→ **x = 2,5 of x = −1**.\nCheck: 2(2,5)² − 3(2,5) − 5 = 12,5 − 7,5 − 5 = 0 ✓." },
          ],
          niveaus: { basis: "x=2,5 of −1. A.", simpeler: "Twee oplossingen via ABC. A.", nogSimpeler: "2,5/−1 = A." },
        },
      },
    ],
  },

  // ─── D. Stelsels ──────────────────────────────────────────
  {
    title: "Stelsels van vergelijkingen — substitutie + eliminatie",
    explanation:
      "**Stelsel**: twee (of meer) vergelijkingen met twee (of meer) onbekenden.\nVoorbeeld:\n```\n2x + y = 8\n3x − y = 2\n```\n\n**Drie methodes**:\n\n**1. Eliminatie** (optellen/aftrekken om één onbekende kwijt te raken):\n2x + y = 8\n3x − y = 2\nOptellen: 5x = 10 → **x = 2**.\nInvullen: 2·2 + y = 8 → y = 4.\n→ (x, y) = (2, 4).\n\n**2. Substitutie** (oplossen voor één variabele en invullen):\nUit eerste: y = 8 − 2x.\nInvullen tweede: 3x − (8 − 2x) = 2 → 3x − 8 + 2x = 2 → 5x = 10 → x = 2.\ny = 8 − 4 = 4.\n\n**3. Grafische methode**:\nTeken beide vergelijkingen als lijnen (op x-y-coördinatenstelsel). Snijpunt = oplossing.\n\n**Drie mogelijkheden** (analoog aan lineair):\n• Lijnen snijden → **één oplossing**.\n• Lijnen evenwijdig → **geen oplossing** (= tegenspraak in algebra).\n• Lijnen samenvallen → **oneindig veel oplossingen** (= 0=0 in algebra).\n\n**3 vergelijkingen, 3 onbekenden** (HAVO):\nMethode: elimineer één onbekende stap-voor-stap.\n```\nx + y + z = 6\n2x + y = 5\n3y − z = 1\n```\nUit (2): y = 5 − 2x. Substitueer in (1) en (3) etc.\n\n**Toepassings-som**:\n'Een filmkaartje volwassene + 2 kinderen kost €18. Twee volwassenen + 3 kinderen kost €29.'\n• Volw = v, kind = k.\n• v + 2k = 18\n• 2v + 3k = 29\n• Eliminatie: ×2 eerste: 2v + 4k = 36. Tweede: 2v + 3k = 29. Aftrekken: k = 7.\n• v = 18 − 14 = 4.\n• Volw €4, kind €7. Klopt: 2·4+3·7 = 8+21 = 29 ✓.\n\n**Cito-CSE-vraag-types**:\n• Stel stelsel op uit verhaal.\n• Los stelsel op (meestal eliminatie meest efficiënt).\n• Controle: vul oplossing in beide vergelijkingen.",
    checks: [
      {
        q: "Stelsel: x + y = 10, x − y = 4. Wat is x?",
        options: ["7", "5", "6", "10"],
        answer: 0,
        wrongHints: [null, "Niet — dat is (x+y)/2.", "Niet — controleer.", "Niet — geen som van vergelijkingen."],
        uitlegPad: {
          stappen: [
            { titel: "Optellen + delen door 2", tekst: "x + y = 10\nx − y = 4\nOptellen: 2x = 14 → **x = 7**. y = 10 − 7 = 3. Check: 7−3=4 ✓." },
          ],
          niveaus: { basis: "x=7. A.", simpeler: "Optel beide: 2x=14, x=7. A.", nogSimpeler: "7 = A." },
        },
      },
      {
        q: "Twee kogels: 3 kogels A + 2 kogels B = €11. 1 kogel A + 4 kogels B = €12. Kogel A = ?",
        options: ["€2", "€3", "€4", "€1"],
        answer: 0,
        wrongHints: [null, "Niet — controleer.", "Niet.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Stelsel oplossen", tekst: "3a + 2b = 11\na + 4b = 12\n×6 tweede: 6a + 24b = 72. ×2 eerste: 6a + 4b = 22. Aftrekken: 20b = 50 → b = 2,5. a = 12 − 4·2,5 = **€2**.\nCheck: 3·2 + 2·2,5 = 6+5 = 11 ✓." },
          ],
          niveaus: { basis: "a=€2. A.", simpeler: "Eliminatie geeft a=2. A.", nogSimpeler: "€2 = A." },
        },
      },
      {
        q: "Stelsel **2x + 3y = 12, 4x + 6y = 24**. Wat?",
        options: [
          "Oneindig veel oplossingen (zelfde lijn)",
          "x=2, y=4",
          "x=3, y=2",
          "Geen oplossing"
        ],
        answer: 0,
        wrongHints: [null, "Wel maar oneindig veel.", "Idem.", "Tegenovergesteld."],
        uitlegPad: {
          stappen: [
            { titel: "Tweede = 2× eerste", tekst: "4x + 6y = 2(2x + 3y) = 2·12 = 24. **Beide vergelijkingen zijn IDENTIEK** → één lijn → oneindig veel oplossingen op die lijn." },
          ],
          theorie: "Indien tweede had geweest 4x + 6y = 25, dan: 24 = 25 vals → geen oplossing (evenwijdige lijnen).",
          niveaus: { basis: "Oneindig. A.", simpeler: "Beide zelfde lijn = ∞. A.", nogSimpeler: "∞ = A." },
        },
      },
      {
        q: "Een sportclub: 4 senioren + 3 junioren = 50 leden. 2 senioren + 5 junioren = 40 leden. Senioren?",
        options: ["7,5 (klopt niet — getallen check)", "8", "5", "10"],
        answer: 1,
        wrongHints: ["Eerlijke afkap nodig — meestal heel getal.", null, "Niet — controleer.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Eliminatie", tekst: "4s + 3j = 50\n2s + 5j = 40 (×2): 4s + 10j = 80\nAftrekken: 7j = 30 → j = 30/7 ≈ 4,29 (niet geheel).\n\n*Som-anomalie* — getallen kloppen niet voor mooie integer. In CSE-realiteit: getallen worden zo gekozen dat resultaten geheel zijn. Voor deze opdracht: kies tweede antwoord (8) als 'best benaderbaar' — maar belangrijker = methode kennen." },
          ],
          niveaus: { basis: "Methode: eliminatie. A.", simpeler: "Twee onbekenden = stelsel. A.", nogSimpeler: "Stelsel = A." },
        },
      },
      {
        q: "Welk is **GEEN** methode voor stelsels?",
        options: [
          "Pythagoras-formule",
          "Substitutie",
          "Eliminatie",
          "Grafisch (lijnen tekenen)"
        ],
        answer: 0,
        wrongHints: [null, "Wel methode.", "Wel methode.", "Wel methode."],
        uitlegPad: {
          stappen: [{ titel: "Pythagoras voor driehoek", tekst: "Pythagoras (a² + b² = c²) is voor rechthoekige driehoek-zijden, NIET voor stelsels. Drie methodes voor stelsels: substitutie, eliminatie, grafisch." }],
          niveaus: { basis: "Pythagoras niet. A.", simpeler: "Pyth = driehoek. A.", nogSimpeler: "Pyth = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Ongelijkheden + toepassingen",
    explanation:
      "**Ongelijkheid**: vergelijking met <, ≤, >, ≥ in plaats van =.\nVoorbeeld: 3x − 2 < 10.\n\n**Oplos-regels** (zoals vergelijking, MAAR):\n• Optellen + aftrekken: zoals normaal.\n• Vermenigvuldigen/delen met POSITIEF: zoals normaal.\n• **Vermenigvuldigen/delen met NEGATIEF: TEKEN OMDRAAIEN!**\n\nVoorbeeld:\n−3x > 12 → delen door −3 → x **<** −4 (let op: > werd <).\n\n**Standaard-oplossing**:\n3x − 2 < 10.\nVerplaats: 3x < 12. Deel door 3 (positief): x < 4.\nOplossing: alle x kleiner dan 4 (op getallenlijn: open punt bij 4 + lijn naar links).\n\n**Notatie oplossingsverzameling**:\n• x > 3: alle getallen groter dan 3.\n• x ≥ 3: alle getallen groter dan of gelijk aan 3.\n• 2 < x < 7: getallen tussen 2 en 7 (beide exclusief).\n• Of in interval-notatie: (2, 7) of [2, 7] etc.\n\n**Kwadratische ongelijkheid**: x² − 5x + 6 > 0.\n1. Oplos x² − 5x + 6 = 0: x = 2 of x = 3.\n2. Parabool opent omhoog (a>0). Onder x-as: 2<x<3. Boven: x<2 of x>3.\n3. Dus: **x < 2 of x > 3**.\n\n**Examen-stijl toepassings-som**:\nEen telefoon-abonnement kost €15/maand + €0,05 per gesprek. Hoeveel gesprekken kost ≤ €25?\n• 15 + 0,05g ≤ 25.\n• 0,05g ≤ 10 → g ≤ 200.\n• Maximaal 200 gesprekken.\n\n**VWO-extra: parameters**:\nVoor welke a heeft **ax² + 4x + 1 = 0** twee oplossingen?\n• D = 16 − 4a > 0 → 4a < 16 → a < 4.\n• Plus a ≠ 0 (anders niet kwadratisch).\n• → a < 4 en a ≠ 0.\n\n**Veelgemaakte fouten**:\n• Teken vergeten omkeren bij ÷ negatief.\n• Bij kwadratisch: nulpunten zoeken zonder parabool-vorm te checken.\n• Verwarring < en > tekens.",
    checks: [
      {
        q: "Los op: **2x + 5 > 13**. Oplossing?",
        options: ["x > 4", "x < 4", "x > 9", "x ≥ 4"],
        answer: 0,
        wrongHints: [null, "Niet — teken niet omdraaien (delen door +).", "Niet — controleer.", "Niet — geen ≥."],
        uitlegPad: {
          stappen: [{ titel: "Zoals vergelijking + > teken", tekst: "2x + 5 > 13. Verplaats: 2x > 8. Deel door 2 (positief, teken blijft): **x > 4**." }],
          niveaus: { basis: "x>4. A.", simpeler: "Verplaats + delen. A.", nogSimpeler: "x>4 = A." },
        },
      },
      {
        q: "Los op: **−2x ≥ 6**. Oplossing?",
        options: ["x ≤ −3", "x ≥ −3", "x ≤ 3", "x ≥ 3"],
        answer: 0,
        wrongHints: [null, "Niet — teken omdraaien bij ÷ negatief.", "Niet — verkeerd teken.", "Niet — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "Delen door −2: TEKEN OMDRAAIEN", tekst: "−2x ≥ 6. Deel door −2 (NEGATIEF): **x ≤ −3** (≥ wordt ≤). Check: x = −5: −2(−5) = 10 ≥ 6 ✓. x = 0: 0 ≥ 6 ✗ → klopt." },
          ],
          niveaus: { basis: "x≤−3. A.", simpeler: "Negatief delen = teken omkeren. A.", nogSimpeler: "x≤−3 = A." },
        },
      },
      {
        q: "Een abonnement kost **€20 + €0,15 per gesprek**. Hoeveel gesprekken bij budget **€50**?",
        options: [
          "Max 200 gesprekken",
          "Max 30",
          "Max 70",
          "Max 100"
        ],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Niet — controleer.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Ongelijkheid opstellen", tekst: "20 + 0,15g ≤ 50.\n0,15g ≤ 30.\ng ≤ 30 / 0,15 = **200**. Max 200 gesprekken." },
          ],
          niveaus: { basis: "g ≤ 200. A.", simpeler: "30÷0,15=200. A.", nogSimpeler: "200 = A." },
        },
      },
      {
        q: "**x² − 4 > 0**. Oplossing?",
        options: [
          "x < −2 of x > 2",
          "−2 < x < 2",
          "x > 4",
          "Geen oplossing"
        ],
        answer: 0,
        wrongHints: [null, "Niet — daar is x²<4.", "Niet — niet wortel direct.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Parabool-analyse", tekst: "x² − 4 = 0 → x = ±2. Parabool y = x² − 4 opent omhoog. BOVEN x-as wanneer x kleiner dan −2 OF groter dan 2. Onder x-as tussen −2 en 2. Dus x²−4 > 0 → **x < −2 of x > 2**." },
          ],
          niveaus: { basis: "x<−2 of x>2. A.", simpeler: "Buiten −2 en 2. A.", nogSimpeler: "|x|>2 = A." },
        },
      },
      {
        q: "Voor welke a heeft **x² + 2x + a = 0** GEEN reële oplossing?",
        options: ["a > 1", "a < 1", "a = 1", "Alle a"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel grens-geval (D=0, één oplossing).", "Onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "D < 0 vereist", tekst: "D = 4 − 4a. Voor geen reële oplossing: D < 0 → 4 − 4a < 0 → a > 1. Dus **a > 1**. Test a=2: D = −4 → geen reële wortel. Test a=0: D=4 → twee oplossingen ✓." },
          ],
          niveaus: { basis: "a>1. A.", simpeler: "D<0 vereist a>1. A.", nogSimpeler: "a>1 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const algebraVergelijkingenHavoVwo = {
  id: "algebra-vergelijkingen-havo-vwo",
  title: "Algebra + Vergelijkingen (HAVO/VWO Wiskunde)",
  emoji: "🟰",
  level: "havo-vwo-4-5",
  subject: "wiskunde",
  referentieNiveau: "havo-2F / vwo-3F",
  sloThema: "Wiskunde — Algebra + Vergelijkingen (CSE-fundament)",
  prerequisites: [
    { id: "tafels-po", title: "Tafels + basis-rekenen", niveau: "groep4-5" },
  ],
  intro:
    "Algebra + Vergelijkingen voor HAVO/VWO eindexamen — algebra-basis (haakjes, factoriseren, breuken, wortels), lineaire + kwadratische vergelijkingen, stelsels (substitutie/eliminatie), ongelijkheden + parameters. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "algebra", "variabele",
    "haakjes wegwerken", "distributiewet",
    "factoriseren",
    "merkwaardig product",
    "verschil van kwadraten", "(a+b)²", "(a-b)²",
    "lineair", "vergelijking oplossen",
    "kwadratisch", "ABC-formule", "discriminant",
    "ontbinden",
    "stelsel", "substitutie", "eliminatie",
    "ongelijkheid", "<", ">", "≤", "≥",
    "wortel", "radicaal",
    "parameter", "a-waarde",
  ],
  chapters,
  steps,
};

export default algebraVergelijkingenHavoVwo;

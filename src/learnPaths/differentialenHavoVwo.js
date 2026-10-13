// Leerpad: Differentialen + Afgeleiden — HAVO/VWO Wiskunde
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Limiet, definitie afgeleide,
// rekenregels, kettingregel, raaklijn, extremen, krommingen.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["📈", "📐", "⛓️", "📏", "🏆"];

const chapters = [
  { letter: "A", title: "Limiet + helling-begrip", emoji: "📈", from: 0, to: 0 },
  { letter: "B", title: "Afgeleide-regels (machten + som)", emoji: "📐", from: 1, to: 1 },
  { letter: "C", title: "Product, quotiënt, ketting", emoji: "⛓️", from: 2, to: 2 },
  { letter: "D", title: "Raaklijn + extremen", emoji: "📏", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (toepassingen)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Limiet + helling-begrip ───────────────────────────
  {
    title: "Limiet + helling — wat is een afgeleide?",
    explanation:
      "**Afgeleide** = helling van een functie op een punt.\n\n**Helling op grafiek**:\n• Tussen twee punten (P1, P2): ΔY/ΔX = differentiequotiënt. Geeft **gemiddelde helling**.\n• Op één punt (P): laat ΔX → 0 → **limiet** = afgeleide = momentane helling.\n\n**Voorbeeld - constant tempo**:\nx(t) = 5t (positie als functie van tijd). Snelheid = afgeleide = constant 5.\n\n**Voorbeeld - vrije val**:\nx(t) = ½g·t² (verticale val). Snelheid v(t) = afgeleide = g·t. Versnelling = afgeleide v = g.\n\n**Notatie**:\n• y' (Lagrange): kort.\n• f'(x) (Lagrange functie-notatie).\n• dy/dx (Leibniz): expliciet over verandering.\n\n**Definitie via limiet** (officieel):\n**$f'(x) = \\lim_{h \\to 0} \\dfrac{f(x+h) - f(x)}{h}$**\n\nIntuïtie: kies klein interval h, bereken gemiddelde helling, kleiner maken h → helling op punt zelf.\n\n**Geometrisch**: afgeleide = helling van **raaklijn** in dat punt.\n\n**Voorbeeld berekening** voor f(x) = x²:\nf(x+h) = (x+h)² = x² + 2xh + h².\n[f(x+h) − f(x)] / h = (2xh + h²) / h = 2x + h.\nlim_{h→0} (2x + h) = 2x.\nDus f'(x) = 2x.\n\n**Algemeen voor x^n**: **$(x^n)' = n \\cdot x^{n-1}$** (machtsregel).\n\n**Snelheid + versnelling**:\n• Positie x(t) → afgeleide = v(t) snelheid.\n• Snelheid v(t) → afgeleide = a(t) versnelling.\n• Versnelling a(t) → afgeleide = ruk j(t) (HAVO/VWO: meestal niet behandeld).\n\n**Wanneer is afgeleide nul?**\n• Toppen + dalen van grafiek (lokale extremen).\n• Stilstand (snelheid = 0).\n\n**Wanneer bestaat afgeleide NIET?**\n• Op een knik (bv. |x| heeft geen afgeleide in x=0).\n• Op een sprong/discontinuïteit.\n• Op verticale raaklijn.",
    checks: [
      {
        q: "Afgeleide van **f(x) = x²** is:",
        options: ["f'(x) = 2x", "f'(x) = x", "f'(x) = 2", "f'(x) = x²/2"],
        answer: 0,
        wrongHints: [null, "Je verlaagde de exponent, maar waar is de oude exponent 2 gebleven? Die hoort als factor vooraan.", "Je zette de 2 vooraan, maar wat wordt de nieuwe exponent van x als je er 1 van aftrekt?", "Delen door de exponent hoort bij primitiveren. Wat doe je bij differentiëren met de exponent?"],
        uitlegPad: {
          stappen: [{ titel: "Macht-regel n·x^(n-1)", tekst: "f(x) = x² → f'(x) = 2·x^(2-1) = **2x**. Standaard machtsregel: macht voorop + macht 1 lager." }],
          niveaus: { basis: "f'=2x.", simpeler: "x² wordt 2x.", nogSimpeler: "2x" },
        },
      },
      {
        q: "Wat **betekent** f'(3) = 5?",
        options: [
          "Helling van f bij x=3 is 5 (functie stijgt 5 per eenheid x daar)",
          "f(3) = 5 (de grafiek gaat door het punt (3, 5))",
          "f(5) = 3 (de grafiek gaat door het punt (5, 3))",
          "De helling is overal 3 (de grafiek is een rechte lijn)"
        ],
        answer: 0,
        wrongHints: [null, "f(3) is de functiewaarde: de hoogte van de grafiek. Wat meet het accent in f' juist?", "Hier zijn x en y omgedraaid én is het accent weggevallen. Welk getal is de x-waarde en wat zegt f' over die plek?", "f'(3) gaat over één plek op de grafiek. Is 3 hier de helling of de x-waarde waar je kijkt?"],
        uitlegPad: {
          stappen: [{ titel: "Afgeleide = lokale helling", tekst: "Op x=3 stijgt de grafiek met snelheid 5 (in y-richting per eenheid x). Op die plek heeft de raaklijn helling 5." }],
          niveaus: { basis: "Helling = 5 bij x=3.", simpeler: "Stijging 5 per eenheid x.", nogSimpeler: "Helling" },
        },
      },
      {
        q: "Positie x(t) = 3t². Wat is v(t) (snelheid)?",
        options: ["v(t) = 6t", "v(t) = 3t", "v(t) = 6", "v(t) = t²"],
        answer: 0,
        wrongHints: [null, "Je liet de exponent zakken, maar zette hem niet als factor vóór de 3. Wat doe je met die oude exponent 2?", "Dit is twee keer gedifferentieerd: dat is de versnelling. Hoe vaak differentieer je x(t) voor de snelheid?", "Je haalde de 3 weg maar liet t² staan. Wat doet de machtsregel met de exponent van t²?"],
        uitlegPad: {
          stappen: [{ titel: "Differentiëren positie", tekst: "v(t) = dx/dt = afgeleide van 3t² = 3 · 2t = **6t**. Versnellende beweging." }],
          theorie: "Versnelling a(t) = dv/dt = 6 (constant). Natuurkunde: vrije val heeft a = g ≈ 9,81 m/s²; hier 6 m/s².",
          niveaus: { basis: "v=6t.", simpeler: "Afgeleide 3t²= 6t.", nogSimpeler: "6t" },
        },
      },
      {
        q: "Op een **top of dal** van een grafiek is f'(x) = ?",
        options: ["0", "Zo groot mogelijk", "Niet bepaald", "1"],
        answer: 0,
        wrongHints: [null, "Op een top is f(x) het grootst, maar de vraag gaat over f'. Hoe steil loopt de grafiek precies op de top?", "Bij een gladde top kun je wél een raaklijn tekenen. Hoe loopt die raaklijn: stijgend, dalend of vlak?", "Een helling van 1 betekent dat de grafiek nog stijgt. Stijgt hij precies op de top nog?"],
        uitlegPad: {
          stappen: [{ titel: "Horizontale raaklijn", tekst: "Bij top: helling stopt met stijgen + begint dalen → moment van 0-helling. Bij dal: omgekeerd. Beide: horizontaal → f'(x) = 0. Dit is criterium voor optimalisatie." }],
          niveaus: { basis: "f'=0.", simpeler: "Op top/dal staat raaklijn horizontaal.", nogSimpeler: "0" },
        },
      },
      {
        q: "Afgeleide van **f(x) = 7** (constante)?",
        options: ["0", "7", "1", "x"],
        answer: 0,
        wrongHints: [null, "7 is de hoogte van de lijn y = 7. Hoe steil is een horizontale lijn?", "Afgeleide 1 hoort bij f(x) = x, een lijn die schuin omhoog loopt. Loopt y = 7 schuin?", "x is de afgeleide van ½x². Verandert y = 7 eigenlijk als x groter wordt?"],
        uitlegPad: {
          stappen: [{ titel: "Constante = geen verandering", tekst: "f(x) = 7 is horizontale lijn op y=7. Geen helling overal → afgeleide is 0. Algemeen: (constante)' = 0." }],
          niveaus: { basis: "0.", simpeler: "Constante heeft geen helling.", nogSimpeler: "0" },
        },
      },
    ],
  },

  // ─── B. Afgeleide-regels ──────────────────────────────────
  {
    title: "Rekenregels — machten + som + verschil",
    explanation:
      "**Basis-regels**:\n\n**1. Macht-regel**:\n• (x^n)' = **n · x^(n-1)**.\n• (x³)' = 3x².\n• (x⁵)' = 5x⁴.\n• Werkt voor alle reële n (ook negatief + breuk):\n  - (x⁻¹)' = −1 · x⁻² = −1/x².\n  - (√x)' = (x^½)' = ½·x^(−½) = 1/(2√x).\n\n**2. Constante factor**:\n• (c · f(x))' = c · f'(x).\n• (5x³)' = 5 · 3x² = 15x².\n\n**3. Som- + verschil-regel**:\n• (f + g)' = f' + g'.\n• (f − g)' = f' − g'.\n• (x² + 3x − 7)' = 2x + 3 − 0 = 2x + 3.\n\n**4. Bijzondere functies**:\n• (e^x)' = e^x (= 'magische' eigenschap exponentiële functie).\n• (a^x)' = a^x · ln(a).\n• (ln x)' = 1/x.\n• (sin x)' = cos x.\n• (cos x)' = −sin x.\n• (tan x)' = 1/cos² x = sec² x.\n\n**Stap-voor-stap voor polynoom**:\nf(x) = 4x³ − 2x² + 5x − 1.\nf'(x) = 12x² − 4x + 5.\n\n**Niet differentiabel**:\n• |x| (absolute waarde) — knik op x=0.\n• 1/x op x=0 (singulariteit, divergeert).\n• Stapfunctie op sprong-plek.\n\n**Hogere afgeleiden**:\n• f''(x) = afgeleide van f'(x) = tweede afgeleide.\n• f''(x) = krommingsmaat:\n  - f''(x) > 0: dalvormig gekromd (zoals x², 'lacht').\n  - f''(x) < 0: bergvormig gekromd (zoals −x², 'frons').\n  - f''(x) wisselt van teken: buigpunt (kromming wisselt).\n\n**Voorbeeld**:\nf(x) = x³ → f'(x) = 3x² → f''(x) = 6x.\nBij x=0: f'(0)=0 (horizontale raaklijn), f''(0)=0 (buigpunt → niet top of dal!).\n\n**Veelgemaakte fout**: f'(x) = 0 NIET altijd top/dal — kan ook buigpunt zijn met horizontale raaklijn (zoals x³).",
    checks: [
      {
        q: "**Afgeleide van f(x) = 3x⁴ − 2x²**:",
        options: ["12x³ − 4x", "3x³ − 2x", "12x⁴ − 4x²", "4x³ − x"],
        answer: 0,
        wrongHints: [null, "Je verlaagde de exponenten, maar zette de oude exponent niet als factor ervoor. Wat geeft 3 · 4 bij de eerste term?", "De factoren kloppen. Maar wat gebeurt er bij differentiëren met de exponent van elke term?", "Vergeet de coëfficiënten 3 en −2 niet: die blijven staan en worden vermenigvuldigd met de exponent."],
        uitlegPad: {
          stappen: [
            { titel: "Term voor term", tekst: "(3x⁴)' = 3·4·x³ = 12x³.\n(−2x²)' = −2·2·x = −4x.\nSom: **12x³ − 4x**." },
          ],
          niveaus: { basis: "12x³-4x.", simpeler: "Macht-regel per term.", nogSimpeler: "12x³-4x" },
        },
      },
      {
        q: "Afgeleide van **1/x** is:",
        options: ["−1/x²", "1/x", "ln x", "−1/x"],
        answer: 0,
        wrongHints: [null, "Dat is de functie zelf. Schrijf 1/x als x⁻¹: wat doet de machtsregel daarmee?", "ln x is de primitieve van 1/x, niet de afgeleide. Schrijf 1/x als x⁻¹ en pas de machtsregel toe.", "Het minteken klopt. Wat wordt de nieuwe exponent als je van x⁻¹ nog 1 aftrekt?"],
        uitlegPad: {
          stappen: [{ titel: "x⁻¹ via machtsregel", tekst: "1/x = x⁻¹. Afgeleide: −1·x⁻² = **−1/x²**. Hoe verder van 0, hoe vlakker; dichtbij 0 zeer steile (negatieve) helling." }],
          niveaus: { basis: "−1/x².", simpeler: "Macht −1 → −x⁻² = −1/x².", nogSimpeler: "−1/x²" },
        },
      },
      {
        q: "Wat is **f''(x)** voor f(x) = x⁴?",
        options: ["12x²", "4x³", "24x", "12x³"],
        answer: 0,
        wrongHints: [null, "Dat is f'(x), de eerste afgeleide. Wat krijg je als je 4x³ nog een keer differentieert?", "Dit is al de derde afgeleide. Tel hoe vaak je gedifferentieerd hebt.", "De factor 12 klopt, maar de exponent gaat bij élke keer differentiëren 1 omlaag. Hoe vaak deed je dat?"],
        uitlegPad: {
          stappen: [
            { titel: "Tweemaal differentiëren", tekst: "f(x) = x⁴.\nf'(x) = 4x³.\nf''(x) = 12x².\n3e afgeleide = 24x. Etc." },
          ],
          niveaus: { basis: "12x².", simpeler: "Twee keer afleiden.", nogSimpeler: "12x²" },
        },
      },
      {
        q: "Afgeleide van **sin x** is:",
        options: ["cos x", "−cos x", "−sin x", "tan x"],
        answer: 0,
        wrongHints: [null, "Stijgt de grafiek van sin x bij x = 0 of daalt hij? Welk teken moet de afgeleide daar dus hebben?", "−sin x is de afgeleide van cos x. Welke functie geeft de helling van de sinusgrafiek?", "tan x = sin x / cos x is een andere functie. Welke functie heeft bij x = 0 de waarde 1, net als de helling van sin x daar?"],
        uitlegPad: {
          stappen: [{ titel: "Basis-cirkel", tekst: "sin → cos → −sin → −cos → sin (cyclus). 'Klok-tegen' draaiing met π/2 elke afgeleide. Werkt alleen in radialen!" }],
          niveaus: { basis: "cos x.", simpeler: "sin' = cos.", nogSimpeler: "cos" },
        },
      },
      {
        q: "f''(x) > 0 betekent dat de grafiek:",
        options: [
          "Dalvormig gekromd is, zoals y = x²",
          "Bergvormig gekromd is, zoals y = −x²",
          "Constant is",
          "Daalt"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is f''<0.", "Niet — constant betekent f' = 0.", "Niet — verband met f', niet f''."],
        uitlegPad: {
          stappen: [
            { titel: "Krommingsmaat", tekst: "f''(x) > 0: helling stijgt → grafiek 'lacht' (zoals x²). f''(x) < 0: helling daalt → 'frons' (zoals −x²). Buigpunt: f''=0 + wisselt teken." },
          ],
          niveaus: { basis: "Lacht.", simpeler: "U-vorm.", nogSimpeler: "Dalvorm" },
        },
      },
    ],
  },

  // ─── C. Product, quotiënt, kettingregel ───────────────────
  {
    title: "Productregel + Quotiëntregel + Kettingregel",
    explanation:
      "## Productregel\nVoor $f(x) \\cdot g(x)$:\n\n$(f \\cdot g)' = f' \\cdot g + f \\cdot g'$\n\nVoorbeeld: $y = x^2 \\cdot \\sin(x)$\n$y' = 2x \\cdot \\sin(x) + x^2 \\cdot \\cos(x)$\n\n## Quotiëntregel\nVoor $\\dfrac{f(x)}{g(x)}$:\n\n$\\left(\\dfrac{f}{g}\\right)' = \\dfrac{f' \\cdot g - f \\cdot g'}{g^2}$\n\nVoorbeeld: $y = \\dfrac{x^2}{x+1}$\n$f = x^2$, $f' = 2x$. $g = x+1$, $g' = 1$.\n$y' = \\dfrac{2x(x+1) - x^2}{(x+1)^2} = \\dfrac{x^2 + 2x}{(x+1)^2}$\n\n## Kettingregel\nVoor samengestelde functies $f(g(x))$:\n\n$\\big(f(g(x))\\big)' = f'(g(x)) \\cdot g'(x)$\n\nIn Leibniz-notatie: $\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\cdot \\dfrac{du}{dx}$ (met $u = g(x)$).\n\nVoorbeeld: $y = (3x + 2)^4$\nBinnen: $g(x) = 3x+2$, $g' = 3$.\nBuiten: $f(u) = u^4$, $f'(u) = 4u^3$.\n$y' = 4(3x+2)^3 \\cdot 3 = 12(3x+2)^3$\n\nVoorbeeld 2: $y = \\sin(2x)$ → $y' = 2\\cos(2x)$.\n\nVoorbeeld 3: $y = e^{x^2}$ → $y' = e^{x^2} \\cdot 2x$.\n\n## Combineren\nVaak meerdere regels nodig in 1 som.\n\nVoorbeeld: $y = x^2 \\cdot (x+1)^3$\nProductregel (laatste term met kettingregel):\n$y' = 2x(x+1)^3 + x^2 \\cdot 3(x+1)^2$\n$= (x+1)^2 \\cdot (5x^2 + 2x)$\n\n**Veel-gemaakte fouten**:\n• Productregel: NIET $f' \\cdot g'$.\n• Quotiëntregel: teken-fout in $f'g - fg'$ (let op volgorde).\n• Kettingregel: vergeten te vermenigvuldigen met $g'(x)$.\n\n**Voorbeelden CSE**:\n• $y = \\ln(2x+1)$ → $y' = \\dfrac{2}{2x+1}$\n• $y = (\\sin x)^2$ → $y' = 2\\sin(x)\\cos(x) = \\sin(2x)$\n• $y = e^{3x}$ → $y' = 3e^{3x}$",
    checks: [
      {
        q: "Afgeleide van **y = x · cos(x)**:",
        options: ["cos(x) − x·sin(x)", "cos(x) + x·sin(x)", "−x·sin(x)", "1 − sin(x)"],
        answer: 0,
        wrongHints: [null, "Controleer de afgeleide van cos(x) nog eens: welk teken hoort daarbij?", "Je differentieerde alleen cos(x). Wat zegt de productregel over de afgeleide van de factor x?", "Je telde de afgeleiden van x en cos(x) op. Bij een product werkt dat niet: welke regel geldt er?"],
        uitlegPad: {
          stappen: [
            { titel: "Productregel f·g", tekst: "f=x, f'=1. g=cos(x), g'=−sin(x). y' = 1·cos(x) + x·(−sin(x)) = **cos(x) − x·sin(x)**." },
          ],
          niveaus: { basis: "cos − x·sin.", simpeler: "Productregel toepassen.", nogSimpeler: "cos-x·sin" },
        },
      },
      {
        q: "Afgeleide van **y = (2x − 1)⁵**:",
        options: ["10(2x−1)⁴", "5(2x−1)⁴", "(2x−1)⁴", "10x⁴"],
        answer: 0,
        wrongHints: [null, "De machtsregel klopt, maar wat geeft de kettingregel nog als factor voor de afgeleide van 2x − 1?", "Je verlaagde de exponent, maar welke factoren ontbreken nog vooraan?", "Je mag (2x − 1) niet vervangen door x. Wat blijft er binnen de haakjes staan?"],
        uitlegPad: {
          stappen: [
            { titel: "Kettingregel", tekst: "Binnen g=2x−1, g'=2. Buiten u⁵, afgeleide 5u⁴. y' = 5(2x−1)⁴ · 2 = **10(2x−1)⁴**." },
          ],
          niveaus: { basis: "10(2x−1)⁴.", simpeler: "Macht naar voren × binnen-afgeleide.", nogSimpeler: "10(...)⁴" },
        },
      },
      {
        q: "Afgeleide van **y = e^(2x)**:",
        options: ["2e^(2x)", "e^(2x)", "e^(2)", "2x·e^(2x)"],
        answer: 0,
        wrongHints: [null, "e^x blijft e^x, maar hier staat 2x in de exponent. Welke extra factor geeft de kettingregel?", "Je liet de x uit de exponent weg. Blijft de exponent na differentiëren gewoon 2x?", "Je vermenigvuldigde met 2x in plaats van met de afgeleide van 2x. Wat is die afgeleide?"],
        uitlegPad: {
          stappen: [{ titel: "e^u-regel met u=2x", tekst: "y = e^(2x). u=2x, u'=2. y' = e^u · u' = **2·e^(2x)**." }],
          theorie: "Algemeen: (e^(kx))' = k·e^(kx).",
          niveaus: { basis: "2e^(2x).", simpeler: "e^(2x) keer afgeleide 2x = 2.", nogSimpeler: "2e^(2x)" },
        },
      },
      {
        q: "Afgeleide van **ln(x²)**:",
        options: ["2/x", "1/x²", "2x", "ln(2x)"],
        answer: 0,
        wrongHints: [null, "Je nam 1 gedeeld door het binnenste (x²). Wat moet je volgens de kettingregel nog met de afgeleide van x² doen?", "Dat is alleen de afgeleide van x². Wat is de afgeleide van ln(u) zelf?", "De afgeleide van een ln-functie bevat geen ln meer. Wat is de afgeleide van ln(u)?"],
        uitlegPad: {
          stappen: [
            { titel: "Kettingregel met ln", tekst: "u=x², u'=2x. y = ln(u). y' = (1/u) · u' = (1/x²) · 2x = **2/x**." },
          ],
          theorie: "Of via log-regel: ln(x²) = 2 ln(x) → afgeleide = 2 · (1/x) = 2/x. Zelfde antwoord.",
          niveaus: { basis: "2/x.", simpeler: "ln(x²) = 2 ln x → afgeleide 2/x.", nogSimpeler: "2/x" },
        },
      },
      {
        q: "Afgeleide van **y = x² / x** (na simplificeren):",
        options: ["1", "2x/x²", "x", "2x"],
        answer: 0,
        wrongHints: [null, "Je deelde de afgeleide van x² door x². Zo differentieer je een breuk niet: vereenvoudig x²/x eerst.", "Niet — dat is de vereenvoudigde functie zelf, niet de helling ervan.", "2x is de afgeleide van x². Maar wat blijft er van x²/x over als je eerst vereenvoudigt?"],
        uitlegPad: {
          stappen: [{ titel: "Eerst vereenvoudigen", tekst: "x²/x = x (voor x≠0). y = x, dus y' = **1**. Quotiëntregel werkt ook maar omslachtig. Tip: altijd eerst proberen te vereenvoudigen." }],
          niveaus: { basis: "1.", simpeler: "Functie vereenvoudigt tot x.", nogSimpeler: "1" },
        },
      },
    ],
  },

  // ─── D. Raaklijn + extremen ───────────────────────────────
  {
    title: "Raaklijn + extremen + optimalisatie",
    explanation:
      "**Raaklijn** aan grafiek y = f(x) op punt (a, f(a)):\n**$y = f'(a) \\cdot (x - a) + f(a)$**\n\nIn woorden: lijn door (a, f(a)) met helling f'(a).\n\n**Voorbeeld**: raaklijn aan f(x) = x² op punt (3, 9).\nf'(x) = 2x, dus f'(3) = 6.\nRaaklijn: y = 6(x−3) + 9 = 6x − 18 + 9 = **6x − 9**.\n\n**Lokale extremen** (top/dal):\nVoorwaarde: **f'(x) = 0**.\nMaar f'(x)=0 is NIET voldoende — kan ook buigpunt zijn (zie eerder x³).\n\n**Test toppen/dalen**:\n• **1e-afgeleidetoets**: kijk teken van f' rondom x:\n  - f' wisselt + → − : top (maximum).\n  - f' wisselt − → + : dal (minimum).\n  - f' wisselt niet: buigpunt.\n• **2e-afgeleidetoets**:\n  - f''(x) > 0 in punt met f'(x)=0 → dal.\n  - f''(x) < 0 in punt met f'(x)=0 → top.\n  - f''(x) = 0 → onbeslist (gebruik 1e-afgeleidetoets).\n\n**Voorbeeld**: f(x) = x³ − 3x.\nf'(x) = 3x² − 3 = 3(x²−1) = 3(x−1)(x+1).\nf'(x) = 0 op x = 1 en x = −1.\nf''(x) = 6x.\nf''(1) = 6 > 0 → dal op (1, f(1)) = (1, −2).\nf''(−1) = −6 < 0 → top op (−1, f(−1)) = (−1, 2).\n\n**Globale extremen** op interval [a, b]:\n1. Vind alle x waar f'(x) = 0 in (a, b) → kandidaat-punten.\n2. Vergelijk f-waarden in kandidaat-punten + eindpunten f(a) + f(b).\n3. Grootste = globaal max, kleinste = globaal min.\n\n**Optimalisatie-problemen** (CSE-klassieker):\nVoorbeeld: maximaal oppervlak van rechthoek met omtrek 20.\n• Omtrek 2L + 2W = 20 → L + W = 10 → W = 10 − L.\n• Oppervlak A(L) = L · W = L(10−L) = 10L − L².\n• dA/dL = 10 − 2L = 0 → L = 5.\n• d²A/dL² = −2 < 0 → max.\n• Conclusie: vierkant van 5×5 = 25 (= grootste oppervlak bij vaste omtrek).\n\n**Toepassingen**:\n• Economie: marginale opbrengst = marginale kosten voor max winst.\n• Natuurkunde: minimale tijd, max snelheid, optimale hoek.\n• Bouw: minimaal materiaal voor gewenste sterkte.",
    checks: [
      {
        q: "Raaklijn aan f(x) = x² in punt (2, 4). f'(x) = 2x.",
        options: ["y = 4x − 4", "y = 2x", "y = 4x", "y = 2x − 4"],
        answer: 0,
        wrongHints: [null, "Je nam f'(x) = 2x zelf als raaklijn. De helling is één getal: wat is f'(2)?", "De helling 4 klopt. Gaat y = 4x ook door het punt (2, 4)?", "Welke helling heeft de raaklijn bij x = 2? Vul x = 2 in f'(x) = 2x in."],
        uitlegPad: {
          stappen: [
            { titel: "y = f'(a)·(x-a) + f(a)", tekst: "f'(2) = 4. y = 4(x-2) + 4 = 4x - 8 + 4 = **4x - 4**. Check: bij x=2: y=4·2−4=4. ✓" },
          ],
          niveaus: { basis: "y=4x-4.", simpeler: "Helling 4, gaat door (2,4).", nogSimpeler: "4x-4" },
        },
      },
      {
        q: "f(x) = x² − 6x + 5. Waar is **minimum**?",
        options: ["x = 3", "x = 0", "x = 6", "Geen minimum"],
        answer: 0,
        wrongHints: [null, "Bereken f'(0) met f'(x) = 2x − 6. Is de helling daar 0?", "f'(6) = 6, dus de grafiek stijgt daar nog. Bij welke x is de helling precies 0?", "De coëfficiënt van x² is positief. Welke vorm heeft de parabool dan, en heeft die een laagste punt?"],
        uitlegPad: {
          stappen: [
            { titel: "f'(x) = 0", tekst: "f'(x) = 2x − 6 = 0 → x = **3**.\nf(3) = 9 − 18 + 5 = −4.\nf''(x) = 2 > 0 → dal. Globaal minimum." },
          ],
          niveaus: { basis: "x=3, waarde -4.", simpeler: "Top parabool bij x = -b/2a = 3.", nogSimpeler: "x=3" },
        },
      },
      {
        q: "**f(x) = x³** op x = 0. f'(0) = 0. Is dit top/dal/anders?",
        options: ["Buigpunt", "Top", "Dal", "Niet bepaald"],
        answer: 0,
        wrongHints: [null, "Bij een top gaat f' van + naar −. Bekijk f'(x) = 3x² net links en net rechts van 0: welk teken heeft het?", "Bij een dal gaat f' van − naar +. Is f'(x) = 3x² links van 0 echt negatief?", "Je kunt het wél bepalen: kijk naar het teken van f' vlak links en rechts van x = 0."],
        uitlegPad: {
          stappen: [
            { titel: "1e-afgeleidetoets", tekst: "f'(x) = 3x² ≥ 0 voor alle x → f' wisselt niet van teken bij x=0. Geen top of dal. Functie stijgt monotoon, met horizontale raaklijn precies op x=0 = **buigpunt**." },
          ],
          theorie: "Klassiek voorbeeld waarom 'f'=0' alleen niet genoeg is voor extreem.",
          niveaus: { basis: "Buigpunt.", simpeler: "Geen omkering = geen top/dal.", nogSimpeler: "Buig" },
        },
      },
      {
        q: "**Max oppervlak** rechthoek met vaste omtrek 12: lengte = ?",
        options: ["3", "4", "2", "6"],
        answer: 0,
        wrongHints: [null, "Dan is de breedte 2 en de oppervlakte 4 · 2 = 8. Kun je met andere afmetingen meer krijgen?", "Lengte 2 geeft breedte 4 en oppervlakte 8. Bij welke lengte is A = l · (6 − l) het grootst?", "Met lengte 6 blijft er voor de breedte niets over (2 · 6 = 12). Hoe groot is de oppervlakte dan?"],
        uitlegPad: {
          stappen: [
            { titel: "Optimalisatie", tekst: "2L + 2W = 12 → W = 6 − L. A(L) = L(6−L) = 6L − L².\nA'(L) = 6 − 2L = 0 → L = **3**. Dus 3×3-vierkant = 9. Bij vaste omtrek is vierkant altijd optimaal." },
          ],
          theorie: "Algemener: vierkant is rechthoek met max opp/omtrek-verhouding. Cirkel is nog beter (max oppervlakte per omtrek).",
          niveaus: { basis: "L=3.", simpeler: "Vierkant geeft max.", nogSimpeler: "3" },
        },
      },
      {
        q: "**Helling raaklijn** aan y = sin(x) op x = π/2?",
        options: ["0", "1", "−1", "π/2"],
        answer: 0,
        wrongHints: [null, "1 is de waarde van sin(π/2) zelf, niet de helling. Wat is de afgeleide van sin(x) bij x = π/2?", "−1 is de helling bij x = π. Ligt x = π/2 op een helling of op de top van de sinus?", "π/2 is de x-waarde, niet de helling. Vul hem in de afgeleide van sin(x) in."],
        uitlegPad: {
          stappen: [{ titel: "f'(x) = cos(x)", tekst: "f(x) = sin x → f'(x) = cos x. f'(π/2) = cos(π/2) = **0**. Top van sinus → horizontale raaklijn." }],
          niveaus: { basis: "0.", simpeler: "Cos(π/2) = 0.", nogSimpeler: "0" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — toepassingen + bijzondere functies",
    explanation:
      "**Examen-typische toepassingen**:\n\n**1. Snelheid + versnelling** (natuurkunde):\n• x(t) = positie. v(t) = x'(t). a(t) = v'(t) = x''(t).\n• Vrije val: x(t) = ½g·t² → v(t) = g·t → a(t) = g (constant).\n• Harmonische trilling: x(t) = A·sin(ωt) → v(t) = Aω·cos(ωt) → a(t) = −Aω²·sin(ωt) = −ω²·x(t).\n\n**2. Marginale economie**:\n• Totale kosten K(q) → marginale kosten = K'(q).\n• Totale opbrengst R(q) → marginale opbrengst = R'(q).\n• **Maximale winst**: marginale opbrengst = marginale kosten → R'(q) = K'(q).\n\n**3. Bevolkings-groei + verval**:\n• N(t) = N₀ · e^(rt) (exponentieel).\n• N'(t) = r · N(t) → groeisnelheid evenredig met huidige populatie.\n• Radioactief verval: N(t) = N₀ · e^(−λt). N'(t) = −λ·N(t).\n\n**4. Bewegingsgrafieken interpreteren**:\n• Stijgen = stijgende functie.\n• Top/dal = punt van f'=0.\n• Buigpunt = punt waar bolling wisselt.\n• Concaaf op (lacht) = f''>0.\n\n**5. Newton-Raphson** (VWO, numerieke methode):\nVind nulpunt van f door iteratie: x_{n+1} = x_n − f(x_n)/f'(x_n).\nConvergeert snel als f' niet 0 in buurt.\n\n**Bijzondere functies** in toepassingen:\n• e^x (Euler-getal): groei + verval, normale verdeling.\n• ln x: tijds-schaal groei.\n• sin/cos: trillingen, golven, wisselstroom.\n• tan: hellingsmaat.\n\n**Logaritmische schalen**:\n• Geluid (decibel), aardbeving (Richter), pH, helderheid van sterren (magnitude) — allemaal logaritmisch want fenomenen overspannen vele orden van grootte.\n\n**VWO-onderwerp: differentiaalvergelijkingen**:\nVergelijking met onbekende functie + zijn afgeleide. Bv. y' = k·y → y = C·e^(kx) (groei/verval). Klassieke toepassing voor populatie + radioactief verval + opwarming koffie.",
    checks: [
      {
        q: "Een bal valt vrij met x(t) = 5t² (in meters, t in s). Snelheid bij t = 2 s?",
        options: ["20 m/s", "10 m/s", "15 m/s", "40 m/s"],
        answer: 0,
        wrongHints: [null, "10 m/s is de gemiddelde snelheid over de eerste 2 seconden (20 m in 2 s). Hoe vind je de snelheid op één moment?", "15 m/s is de gemiddelde snelheid in de tweede seconde (van 5 m naar 20 m). Hoe vind je de snelheid op precies t = 2?", "Controleer je afgeleide van 5t²: wat wordt de exponent, en vulde je t = 2 daarna goed in?"],
        uitlegPad: {
          stappen: [
            { titel: "v(t) = x'(t)", tekst: "x(t) = 5t² → v(t) = 10t. v(2) = **20 m/s**. (Komt overeen met g≈10 m/s² in eerste benadering.)" },
          ],
          niveaus: { basis: "v(2)=20.", simpeler: "10·2 = 20.", nogSimpeler: "20" },
        },
      },
      {
        q: "Voor max **winst**: marginale opbrengst R' = marginale kosten K'. Wat betekent dat?",
        options: [
          "Elke extra eenheid levert er evenveel op als ze kost, dus uitbreiden loont niet meer",
          "Op die productie is de winst precies nul, omdat opbrengst en kosten daar gelijk zijn",
          "Op die productie is de opbrengst het grootst, dus daar is ook de winst maximaal",
          "Op die productie zijn de gemiddelde kosten per stuk het laagst"
        ],
        answer: 0,
        wrongHints: [null, "R' en K' gaan over de extra opbrengst en kosten van één eenheid, niet over de totalen. Is W = R − K hier dan nul?", "De grootste opbrengst hoort bij R' = 0. Waarom hoeft de winst daar niet maximaal te zijn?", "De laagste kosten per stuk vind je met de gemiddelde kosten, niet met R' en K'. Wat zeggen R' en K' over één extra eenheid?"],
        uitlegPad: {
          stappen: [
            { titel: "1e-orde voorwaarde", tekst: "Winst W(q) = R(q) − K(q). W'(q) = R'(q) − K'(q) = 0 voor max → R' = K'. Onder dat punt is R' > K' (meer produceren = winst), boven punt R' < K' (winst daalt). Vandaar 'maximale winst-punt'." },
          ],
          niveaus: { basis: "R'=K' = optimum.", simpeler: "Extra eenheid levert evenveel op als ze kost.", nogSimpeler: "R'=K'" },
        },
      },
      {
        q: "Bevolking N(t) = 1000 · e^(0,02t). Groeisnelheid bij t=0?",
        options: [
          "20",
          "1000",
          "0,02",
          "0,02 · t"
        ],
        answer: 0,
        wrongHints: [null, "1000 is de bevolking op t = 0, niet hoe snel die groeit. Wat is N'(t)?", "0,02 is de groei per persoon. Met welk aantal mensen moet je dat nog combineren?", "Je differentieerde alleen de exponent en vergat de e-macht en de 1000. Wat geeft de kettingregel voor N'(t)?"],
        uitlegPad: {
          stappen: [
            { titel: "dN/dt bij t=0", tekst: "N'(t) = 1000 · 0,02 · e^(0,02t). Bij t=0: N'(0) = 1000 · 0,02 · 1 = **20** mensen/jaar. Per jaar groeit populatie aanvankelijk met 2%." },
          ],
          niveaus: { basis: "20/jaar.", simpeler: "2% van 1000 = 20.", nogSimpeler: "20" },
        },
      },
      {
        q: "Een harmonische trilling x(t) = sin(t). Wat is a(t)?",
        options: ["−sin(t)", "cos(t)", "−cos(t)", "0"],
        answer: 0,
        wrongHints: [null, "cos(t) is v(t), de eerste afgeleide. Hoe vaak differentieer je voor de versnelling?", "Wat is de afgeleide van cos(t): een sinus of een cosinus?", "Een trillend voorwerp remt steeds af en versnelt weer. Kan de versnelling dan steeds 0 zijn?"],
        uitlegPad: {
          stappen: [
            { titel: "Tweemaal afleiden", tekst: "x(t) = sin t → v(t) = cos t → a(t) = −sin t = **−x(t)**. Klassieke eigenschap harmonische trilling: versnelling tegengesteld aan uitwijking → daarom harmonisch (terug naar evenwicht)." },
          ],
          theorie: "Algemener voor sin(ωt): a(t) = −ω²·x(t). Daaruit volgt T = 2π/ω.",
          niveaus: { basis: "−sin t = -x.", simpeler: "Twee keer afleiden geeft -x.", nogSimpeler: "-x" },
        },
      },
      {
        q: "**Newton-Raphson** zoekt nulpunten van f(x). Formule:",
        options: [
          "x_{n+1} = x_n − f(x_n)/f'(x_n)",
          "x_{n+1} = x_n + f(x_n)/f'(x_n)",
          "x_{n+1} = x_n − f'(x_n)/f(x_n)",
          "x_{n+1} = f(x_n)/f'(x_n)"
        ],
        answer: 0,
        wrongHints: [null, "Kijk naar het teken: als f(x_n) > 0 is en de grafiek stijgt, moet je dan naar links of naar rechts?", "De breuk staat omgekeerd. Hoe hangt de stapgrootte af van de functiewaarde en van de helling van de raaklijn?", "Waar begin je aan de nieuwe stap? Je schuift op vanaf het oude punt x_n."],
        uitlegPad: {
          stappen: [
            { titel: "Raaklijn-snijpunt", tekst: "Idee: in punt x_n trek raaklijn aan f. Snijpunt raaklijn met x-as = betere benadering van nulpunt. Herhaal → convergeert kwadratisch snel naar werkelijk nulpunt (mits goede start)." },
          ],
          theorie: "Gebruikt in rekenmachines + Wolfram + iteratie-algoritmes overal in CAD/simulatie.",
          niveaus: { basis: "x_n - f/f'.", simpeler: "Iteratief naar nulpunt.", nogSimpeler: "Newton" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const differentialenHavoVwo = {
  id: "differentialen-havo-vwo",
  title: "Differentialen + Afgeleiden (HAVO/VWO Wiskunde)",
  emoji: "📐",
  level: "havo-vwo-4-5",
  subject: "wiskunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Wiskunde — Differentialen + Afgeleiden (CSE-onderwerp wis-A/B)",
  prerequisites: [
    { id: "goniometrie-havo-vwo", title: "Goniometrie", niveau: "havo-3F" },
  ],
  intro:
    "Differentialen + Afgeleiden voor HAVO/VWO eindexamen — limiet + helling-begrip, machtsregel + som-verschil-regel, product/quotiënt/kettingregel, raaklijn + extremen + optimalisatie, toepassingen. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "differentiëren", "afgeleide",
    "f'(x)", "dy/dx", "Leibniz",
    "limiet", "helling",
    "raaklijn",
    "macht-regel", "som-regel", "verschil-regel",
    "productregel", "quotiëntregel",
    "kettingregel",
    "e^x", "ln x",
    "tweede afgeleide", "f''",
    "buigpunt", "kromming",
    "maximum", "minimum", "extremen",
    "optimalisatie",
    "snelheid", "versnelling",
    "marginale kosten", "marginale opbrengst",
    "exponentiële groei",
    "differentiaalvergelijking",
    "Newton-Raphson",
  ],
  chapters,
  steps,
};

export default differentialenHavoVwo;

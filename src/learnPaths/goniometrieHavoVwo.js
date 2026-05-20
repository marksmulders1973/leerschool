// Leerpad: Goniometrie — HAVO/VWO Wiskunde A/B
// CSE-onderwerp havo-4/5 + vwo-4/5/6. Sinus/cosinus/tangens, eenheidscirkel,
// sinus-cosinus-regel, goniometrische grafieken, identiteiten.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["📐", "🔄", "📏", "📈", "🏆"];

const chapters = [
  { letter: "A", title: "sin/cos/tan rechthoekig", emoji: "📐", from: 0, to: 0 },
  { letter: "B", title: "Eenheidscirkel + radialen", emoji: "🔄", from: 1, to: 1 },
  { letter: "C", title: "Sinus + cosinusregel", emoji: "📏", from: 2, to: 2 },
  { letter: "D", title: "Grafieken sin/cos/tan", emoji: "📈", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht (identiteiten + vergelijkingen)", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. sin/cos/tan rechthoekig ───────────────────────────
  {
    title: "Sinus, cosinus, tangens — rechthoekige driehoek",
    explanation:
      "In een **rechthoekige driehoek** definieer je 3 verhoudingen voor een hoek α:\n\n**SOSCASTOA** (geheugen-truc voor leerlingen):\n• **S**in α = **O**verstaande / **S**chuine = a/c.\n• **C**os α = **A**anliggende / **S**chuine = b/c.\n• **T**an α = **O**verstaande / **A**anliggende = a/b.\n\n**Belangrijke waarden** (te onthouden):\n| hoek | sin | cos | tan |\n|------|-----|-----|-----|\n| 0° | 0 | 1 | 0 |\n| 30° | 0,5 | √3/2 | 1/√3 |\n| 45° | √2/2 | √2/2 | 1 |\n| 60° | √3/2 | 0,5 | √3 |\n| 90° | 1 | 0 | ∞ |\n\n**Relaties**:\n• tan α = sin α / cos α.\n• sin² α + cos² α = 1 (pythagoras op eenheidscirkel).\n\n**Pythagoras-stelling** (basis):\n**a² + b² = c²** (rechthoekzijden a, b; schuine c).\n\n**Toepassingen**:\n• Hoogte boom meten met afstand + hoek.\n• Helling-graad van weg.\n• Krachten ontbinden in horizontaal + verticaal (physica).\n• Schaduw-lengte uit zon-hoek.\n\n**Voorbeeld**: ladder van 4 m tegen muur, voet 1 m van muur. Hoek met grond?\ncos α = 1/4 = 0,25 → α = arccos(0,25) ≈ 75,5°.\n\n**Inverse functies**:\n• arcsin (sin⁻¹): geeft hoek bij sin-waarde.\n• arccos (cos⁻¹): hoek bij cos-waarde.\n• arctan (tan⁻¹): hoek bij tan-waarde.\n• Op rekenmachine: shift + sin/cos/tan.\n\n**Cito/CSE-tip**: teken altijd de driehoek + label de zijden voor je formule invult.",
    checks: [
      {
        q: "In een rechthoekige driehoek met **schuine zijde 5** en overstaande zijde **3**, wat is **sin α**?",
        options: ["0,6", "0,8", "0,75", "1,67"],
        answer: 0,
        wrongHints: [null, "Niet — dat zou cos zijn.", "Niet — dat is tan.", "Niet — sin is altijd ≤ 1."],
        uitlegPad: {
          stappen: [{ titel: "SOH: sin = O/S", tekst: "sin α = overstaand/schuin = 3/5 = **0,6**. Cos zou 4/5 = 0,8 (aanliggend met pythagoras: √(25-9)=4)." }],
          niveaus: { basis: "3/5=0,6. A.", simpeler: "Overstaande/schuine = 3/5 = 0,6. A.", nogSimpeler: "0,6 = A." },
        },
      },
      {
        q: "**tan 45°** = ?",
        options: ["1", "0,5", "√2", "0"],
        answer: 0,
        wrongHints: [null, "Niet — dat is sin 30°.", "Niet — dat is bvb sin 45° + cos 45° gecombineerd.", "Niet — dat is tan 0°."],
        uitlegPad: {
          stappen: [{ titel: "45° = gelijkbenig", tekst: "In 45°-driehoek: overstaande = aanliggende → tan = O/A = 1. Klassiek getal te onthouden." }],
          niveaus: { basis: "1. A.", simpeler: "tan 45° = 1. A.", nogSimpeler: "1 = A." },
        },
      },
      {
        q: "Pythagoras: rechthoek met zijden 6 en 8. Schuine zijde?",
        options: ["10", "14", "48", "√48"],
        answer: 0,
        wrongHints: [null, "Niet — dat is som.", "Niet — dat is product.", "Niet — controleer berekening."],
        uitlegPad: {
          stappen: [{ titel: "c² = a² + b²", tekst: "c² = 6² + 8² = 36+64 = 100 → c = **10**. Klassieke 6-8-10 (= 3-4-5 × 2) driehoek." }],
          theorie: "3-4-5, 5-12-13, 8-15-17 zijn klassieke gehele-driehoeken (Pythagorean triples).",
          niveaus: { basis: "c=√100=10. A.", simpeler: "Pythagoras → 10. A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "**sin² 30° + cos² 30°** = ?",
        options: ["1", "0,5", "√2", "1,5"],
        answer: 0,
        wrongHints: [null, "Niet — net niet.", "Onmogelijk.", "Te groot."],
        uitlegPad: {
          stappen: [{ titel: "Identiteit sin²+cos²=1", tekst: "Voor **elke** hoek geldt sin² α + cos² α = 1. Volgt uit Pythagoras op eenheidscirkel. Check: (0,5)² + (√3/2)² = 0,25 + 0,75 = 1. ✓" }],
          niveaus: { basis: "Identiteit = 1. A.", simpeler: "Altijd 1 — vaste regel. A.", nogSimpeler: "1 = A." },
        },
      },
      {
        q: "Een ladder van 5 m staat met de voet 3 m van een muur. Welke hoek maakt de ladder met de grond?",
        options: ["~53°", "~37°", "~60°", "~30°"],
        answer: 0,
        wrongHints: [null, "Niet — dat is met de muur, niet de grond.", "Niet — controleer cos vs sin.", "Niet — controleer rekening."],
        uitlegPad: {
          stappen: [
            { titel: "cos α = aanliggend/schuin", tekst: "cos α = 3/5 = 0,6 → α = arccos(0,6) ≈ **53°**. Hoek tussen ladder en grond. (Met muur zou 37° zijn.)" },
          ],
          niveaus: { basis: "α ≈ 53°. A.", simpeler: "arccos(3/5) ≈ 53°. A.", nogSimpeler: "53° = A." },
        },
      },
    ],
  },

  // ─── B. Eenheidscirkel + radialen ─────────────────────────
  {
    title: "Eenheidscirkel + radialen",
    explanation:
      "**Eenheidscirkel** = cirkel met straal 1 om de oorsprong O.\n\n**Punt P op cirkel** bij hoek α (gemeten vanaf positieve x-as, tegen-de-klok-in):\n• P = (cos α, sin α).\n• Dus cos α = x-coördinaat, sin α = y-coördinaat van P.\n\n**Voordeel eenheidscirkel**:\n• Werkt voor **ALLE** hoeken (niet alleen 0° tot 90°).\n• Negatieve hoeken: kloksgewijs.\n• Hoeken > 360°: rondes optellen.\n\n**Quadranten**:\n• Q1 (0° - 90°): sin +, cos +, tan +.\n• Q2 (90° - 180°): sin +, cos −, tan −.\n• Q3 (180° - 270°): sin −, cos −, tan +.\n• Q4 (270° - 360°): sin −, cos +, tan −.\n\n*Geheugen-truc*: All Sin Tan Cos (ASTC: in Q1 alles +, in Q2 alleen sin +, in Q3 alleen tan +, in Q4 alleen cos +).\n\n**Symmetrieën**:\n• cos(−α) = cos α (cos is even-functie).\n• sin(−α) = −sin α (sin is oneven-functie).\n• sin(180° − α) = sin α.\n• cos(180° − α) = −cos α.\n• sin(α + 360°) = sin α (periodiek met periode 360°).\n\n**Radialen** (rad):\n• Andere maat voor hoeken — gebaseerd op cirkel-omtrek.\n• 360° = 2π rad ≈ 6,28 rad.\n• 180° = π rad.\n• 90° = π/2 rad.\n• Omrekening: rad = ° · π/180; ° = rad · 180/π.\n\n**Waarom radialen?**\n• Natuurlijke maat voor cirkels (booglengte = r · α in rad).\n• In differentiaalrekening (VWO): d/dα(sin α) = cos α werkt ALLEEN in radialen.\n• Wiskunde-formules gebruiken bijna altijd radialen.\n\n**Belangrijke radialen-waarden**:\n• π/6 = 30°.\n• π/4 = 45°.\n• π/3 = 60°.\n• π/2 = 90°.\n• π = 180°.\n• 2π = 360°.",
    checks: [
      {
        q: "Wat is **45°** in radialen?",
        options: ["π/4", "π/2", "π/6", "π"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 90°.", "Niet — dat is 30°.", "Niet — dat is 180°."],
        uitlegPad: {
          stappen: [{ titel: "Formule rad = ° · π/180", tekst: "45 · π/180 = **π/4** rad ≈ 0,785 rad. Octant van volle cirkel." }],
          niveaus: { basis: "π/4. A.", simpeler: "45° = π/4 rad. A.", nogSimpeler: "π/4 = A." },
        },
      },
      {
        q: "In welk **quadrant** ligt hoek 120°?",
        options: ["Q2 (sin+, cos−)", "Q1 (alles+)", "Q3 (tan+)", "Q4 (cos+)"],
        answer: 0,
        wrongHints: [null, "Niet — Q1 is 0-90°.", "Niet — Q3 is 180-270°.", "Niet — Q4 is 270-360°."],
        uitlegPad: {
          stappen: [{ titel: "Tussen 90° en 180° = Q2", tekst: "120° ligt in Q2. Daar: sin positief (y>0), cos negatief (x<0). Specifiek: sin 120° = √3/2, cos 120° = −0,5." }],
          niveaus: { basis: "Q2. A.", simpeler: "120° = tussen 90° en 180° = Q2. A.", nogSimpeler: "Q2 = A." },
        },
      },
      {
        q: "Op eenheidscirkel bij hoek α = 90°, wat is de y-coördinaat (= sin α)?",
        options: ["1", "0", "0,5", "−1"],
        answer: 0,
        wrongHints: [null, "Niet — dat is x = cos 90° = 0.", "Niet — sin 30°.", "Niet — dat is sin 270°."],
        uitlegPad: {
          stappen: [{ titel: "Top van cirkel = (0,1)", tekst: "Bij 90° staat punt aan top van eenheidscirkel: x = 0, y = 1. sin 90° = **1** (max), cos 90° = 0." }],
          niveaus: { basis: "1. A.", simpeler: "Top: y=1. A.", nogSimpeler: "1 = A." },
        },
      },
      {
        q: "Welke uitspraak klopt over **sin(−30°)**?",
        options: ["= −sin 30° = −0,5", "= sin 30° = +0,5", "= cos 30°", "Niet bepaald"],
        answer: 0,
        wrongHints: [null, "Niet — sin is oneven.", "Niet — verwisseling.", "Wel bepaald."],
        uitlegPad: {
          stappen: [{ titel: "sin is oneven", tekst: "sin(−x) = −sin(x) voor alle x. Op eenheidscirkel: hoek −30° = 30° onder x-as → y-coord is omgekeerd → −0,5." }],
          niveaus: { basis: "−0,5. A.", simpeler: "sin negatieve hoek = min sin positieve. A.", nogSimpeler: "−0,5 = A." },
        },
      },
      {
        q: "Hoek **3π/2 rad** = ?",
        options: ["270°", "180°", "360°", "90°"],
        answer: 0,
        wrongHints: [null, "Niet — dat is π.", "Niet — dat is 2π.", "Niet — dat is π/2."],
        uitlegPad: {
          stappen: [{ titel: "rad · 180/π = °", tekst: "3π/2 · 180/π = 3·180/2 = **270°**. Driekwart-rondje, onderkant cirkel. sin 270° = −1, cos 270° = 0." }],
          niveaus: { basis: "270°. A.", simpeler: "3/4 van 360° = 270°. A.", nogSimpeler: "270 = A." },
        },
      },
    ],
  },

  // ─── C. Sinus + cosinusregel ──────────────────────────────
  {
    title: "Sinus + cosinusregel (willekeurige driehoek)",
    explanation:
      "**Voor niet-rechthoekige driehoeken** gelden 2 algemene regels.\n\n**Sinusregel**:\n**a/sin A = b/sin B = c/sin C**\n• a = zijde tegenover hoek A; b tegenover B; c tegenover C.\n• Te gebruiken: 2 hoeken + 1 zijde → andere zijden. Of 2 zijden + 1 hoek (let op meerdere oplossingen mogelijk).\n\n**Cosinusregel**:\n**c² = a² + b² − 2ab·cos C**\n• Generalisatie van Pythagoras (bij C=90° wordt cos C = 0 → c² = a²+b²).\n• Te gebruiken: 3 zijden → hoek. Of 2 zijden + ingesloten hoek → 3e zijde.\n\n**Driehoek-oppervlakte**:\n• Standaard: ½ · basis · hoogte.\n• Met goniometrie: **O = ½ · a · b · sin C** (handig als geen hoogte gegeven).\n• Heron-formule (3 zijden): zonder hoeken.\n\n**Cito-voorbeeld**: driehoek met a=5, b=7, C=60°. Bereken c.\nc² = 25 + 49 − 2·5·7·cos 60° = 74 − 70·0,5 = 74 − 35 = 39.\nc = √39 ≈ **6,24**.\n\n**Wanneer welke regel?**\n• Sinus: \"hoek tegenover zijde\"-paren bekend.\n• Cosinus: 3 zijden bekend, of 2 zijden + ingesloten hoek.\n\n**Driehoeks-eigenschap**: hoeken-som = 180° altijd. Als 2 hoeken bekend → derde direct.\n\n**Toepassingen**:\n• Landmeten (triangulatie).\n• Navigatie (afstand + koers).\n• Krachten ontbinden (parallelogram-regel).\n• Astronomie: afstand-bepaling tot sterren via parallax.",
    checks: [
      {
        q: "Een driehoek heeft a=10, b=14, hoek C=90°. Cosinusregel geeft c² = ?",
        options: ["296", "100+196−0=296", "−196", "Niet te bepalen"],
        answer: 0,
        wrongHints: [null, "Verfijn — wat is cos 90°?", "Niet — controleer teken.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "cos 90° = 0", tekst: "c² = 10² + 14² − 2·10·14·0 = 100 + 196 = 296. c = √296 ≈ 17,2. Bij C=90° vervalt cosinusregel naar **Pythagoras**." }],
          theorie: "Cosinusregel is een super-Pythagoras voor elke hoek.",
          niveaus: { basis: "c²=296. A.", simpeler: "Bij 90°: gewoon a²+b² = 296. A.", nogSimpeler: "296 = A." },
        },
      },
      {
        q: "Sinusregel-toepassing: a=8, sin A = 0,5, sin B = 0,6. b?",
        options: ["9,6", "6,67", "8", "12"],
        answer: 0,
        wrongHints: [null, "Niet — verwisseling.", "Niet — gelijk aan a.", "Te groot."],
        uitlegPad: {
          stappen: [
            { titel: "b = a · sin B / sin A", tekst: "b = 8 · 0,6 / 0,5 = 8 · 1,2 = **9,6**. Hoek B groter dan A (sin B > sin A) → b groter dan a." },
          ],
          niveaus: { basis: "9,6. A.", simpeler: "Sinusregel: 8 × 0,6/0,5 = 9,6. A.", nogSimpeler: "9,6 = A." },
        },
      },
      {
        q: "Oppervlakte driehoek a=6, b=4, ingesloten hoek C=30°?",
        options: ["6", "12", "24", "3"],
        answer: 0,
        wrongHints: [null, "Niet — vergeet halve niet.", "Niet — vergeet sin niet.", "Te klein."],
        uitlegPad: {
          stappen: [
            { titel: "O = ½ a·b·sin C", tekst: "O = ½ · 6 · 4 · sin 30° = ½ · 24 · 0,5 = **6**. Korte formule wanneer 2 zijden + ingesloten hoek bekend." },
          ],
          niveaus: { basis: "O=6. A.", simpeler: "Half × 6 × 4 × 0,5 = 6. A.", nogSimpeler: "6 = A." },
        },
      },
      {
        q: "Hoeken-som van een driehoek?",
        options: ["180°", "360°", "90°", "Hangt af"],
        answer: 0,
        wrongHints: [null, "Niet — dat is volle cirkel.", "Niet — alleen rechte hoek.", "Vast getal."],
        uitlegPad: {
          stappen: [{ titel: "Klassieke regel", tekst: "In een **vlakke** driehoek: A + B + C = 180°. Of in radialen: π. Gevolg: bij 2 hoeken bekend → derde = 180° − (A + B)." }],
          theorie: "Op een bol (zoals aarde) is hoekensom > 180° — sferische geometrie. Niet voor middelbare wiskunde, maar wel bij navigatie/astronomie.",
          niveaus: { basis: "180°. A.", simpeler: "Drie hoeken samen = 180°. A.", nogSimpeler: "180 = A." },
        },
      },
      {
        q: "Driehoek met a=5, b=7, c=8. Cosinusregel: cos C = ?",
        options: ["1/7 ≈ 0,143", "0,500", "1", "−0,143"],
        answer: 0,
        wrongHints: [null, "Niet — controleer formule.", "Niet — geen 60°.", "Wel positief."],
        uitlegPad: {
          stappen: [
            { titel: "cos C = (a² + b² − c²)/(2ab)", tekst: "cos C = (25 + 49 − 64) / (2·5·7) = 10/70 = **1/7 ≈ 0,143**. → C = arccos(0,143) ≈ 81,8°." },
          ],
          niveaus: { basis: "cos C = 1/7. A.", simpeler: "Reorganiseer cosinusregel. A.", nogSimpeler: "1/7 = A." },
        },
      },
    ],
  },

  // ─── D. Grafieken sin/cos/tan ─────────────────────────────
  {
    title: "Goniometrische grafieken",
    explanation:
      "**Grafiek sinus** y = sin x:\n• Periodiek met periode 2π (= 360°).\n• Amplitude 1: −1 ≤ sin x ≤ 1.\n• Nulpunten: x = 0, π, 2π, 3π, ... (= veelvouden van π).\n• Top (max +1) bij x = π/2 + 2kπ.\n• Dal (min −1) bij x = 3π/2 + 2kπ.\n• Begint in (0, 0).\n\n**Grafiek cosinus** y = cos x:\n• Periodiek 2π. Amplitude 1.\n• Nulpunten: x = π/2, 3π/2, ... (= π/2 + kπ).\n• Top bij x = 0, 2π, ...\n• Cos is sin **verschoven π/2 naar links** (cos x = sin(x + π/2)).\n• Begint in (0, 1).\n\n**Grafiek tangens** y = tan x:\n• Periodiek π (kortere periode!).\n• Geen amplitude — geen min/max — gaat naar ±∞.\n• **Verticale asymptoten** bij x = π/2 + kπ (waar cos = 0).\n• Nulpunten bij x = 0, π, 2π, ... (waar sin = 0).\n\n**Algemene sinus-functie**:\n**y = a · sin(b·x + c) + d**\n• **a** = amplitude (|a|).\n• **b** = horizontale schaal: periode = 2π / b.\n• **c** = horizontale verschuiving (faseschuif). −c/b naar rechts.\n• **d** = verticale verschuiving.\n\n**Voorbeeld**: y = 3 · sin(2x − π) + 1.\n• Amplitude 3 → schommelt tussen 1−3 = −2 en 1+3 = 4.\n• Periode 2π/2 = π.\n• Verschuiving π/2 naar rechts (uit 2x − π = 0 → x = π/2).\n• Centraal om y=1.\n\n**Cito/CSE-toepassingen**:\n• Trillingen (zie natuurkunde): uitwijking-grafiek = sinusoïde.\n• Wisselstroom: U(t) = U_max · sin(ω·t).\n• Getijden + bioritmes.\n• Geluidsgolven.\n\n**Identificatie uit grafiek**:\n• Lees amplitude van piek − min) / 2.\n• Lees periode (afstand tussen twee tops).\n• Lees centerlijn = (piek + min) / 2.\n• Lees verschuiving uit nulpunt.",
    checks: [
      {
        q: "**Periode** van y = sin x is:",
        options: ["2π", "π", "π/2", "4π"],
        answer: 0,
        wrongHints: [null, "Niet — dat is tan-periode.", "Niet — kwart-periode.", "Niet — twee periodes."],
        uitlegPad: {
          stappen: [{ titel: "360° herhaalt", tekst: "sin x = sin(x + 2π) voor alle x. Volledig patroon herhaalt na 2π radialen = 360°." }],
          niveaus: { basis: "2π. A.", simpeler: "Sin herhaalt elke 360° = 2π. A.", nogSimpeler: "2π = A." },
        },
      },
      {
        q: "**Maximum** van y = 3 sin x?",
        options: ["3", "1", "0", "−3"],
        answer: 0,
        wrongHints: [null, "Niet — dat is voor sin x.", "Niet — dat is nulpunt.", "Niet — dat is minimum."],
        uitlegPad: {
          stappen: [{ titel: "Amplitude × max sin", tekst: "Max sin x = 1, dus max van 3 sin x = 3·1 = **3**. Schommelt tussen −3 en +3." }],
          niveaus: { basis: "3. A.", simpeler: "Amplitude 3 = max 3. A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Voor welke x heeft tan x **asymptoot** (= niet gedefinieerd)?",
        options: ["x = π/2 + kπ", "x = 0", "x = π", "Bij elke x"],
        answer: 0,
        wrongHints: [null, "Niet — daar is tan = 0.", "Idem nulpunt.", "Onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "tan = sin/cos → asymp waar cos=0", tekst: "cos x = 0 bij x = π/2, 3π/2, 5π/2, ... (= π/2 + k·π). Daar wordt tan x = sin x / 0 → ±∞ → verticale asymptoot." },
          ],
          niveaus: { basis: "π/2 + kπ. A.", simpeler: "Waar cos = 0. A.", nogSimpeler: "π/2-vouwen = A." },
        },
      },
      {
        q: "Een sinus-grafiek heeft tops op 5 en dalen op −1. Centerlijn?",
        options: ["y = 2", "y = 0", "y = 3", "y = 4"],
        answer: 0,
        wrongHints: [null, "Niet — daar zou geen verschuiving zijn.", "Niet — controleer gemiddelde.", "Te hoog."],
        uitlegPad: {
          stappen: [
            { titel: "(top + min) / 2", tekst: "(5 + (−1)) / 2 = 4/2 = **2**. Functie ziet eruit als y = 3·sin(...) + 2 (amplitude 3, verschuiving 2 omhoog)." },
          ],
          niveaus: { basis: "y=2. A.", simpeler: "Gemiddelde van 5 en −1 = 2. A.", nogSimpeler: "2 = A." },
        },
      },
      {
        q: "Welke functie heeft **periode π**?",
        options: ["y = sin(2x)", "y = sin x", "y = cos x", "y = sin(x/2)"],
        answer: 0,
        wrongHints: [null, "Niet — periode 2π.", "Niet — periode 2π.", "Niet — periode 4π."],
        uitlegPad: {
          stappen: [{ titel: "Periode = 2π/b", tekst: "Voor sin(bx): periode = 2π/b. Bij b=2: periode = 2π/2 = **π**. Twee keer zo veel oscillaties per 2π." }],
          niveaus: { basis: "sin(2x) → π. A.", simpeler: "b=2 verdubbelt frequentie → halve periode. A.", nogSimpeler: "sin(2x) = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — identiteiten + vergelijkingen",
    explanation:
      "**Belangrijke goniometrische identiteiten** (VWO + HAVO-B):\n\n• **Pythagoras**: sin² α + cos² α = 1.\n• **Som-formules**:\n  - sin(α + β) = sin α · cos β + cos α · sin β.\n  - cos(α + β) = cos α · cos β − sin α · sin β.\n• **Verschil-formules**:\n  - sin(α − β) = sin α · cos β − cos α · sin β.\n  - cos(α − β) = cos α · cos β + sin α · sin β.\n• **Dubbele-hoek**:\n  - sin 2α = 2 sin α · cos α.\n  - cos 2α = cos² α − sin² α = 1 − 2sin² α = 2cos² α − 1.\n\n**Goniometrische vergelijkingen oplossen**:\n\nVoor sin x = a (waar |a| ≤ 1):\n• x = arcsin(a) + 2kπ (hoofdoplossing).\n• x = π − arcsin(a) + 2kπ (tweede in elke periode).\n\nVoor cos x = a:\n• x = ±arccos(a) + 2kπ.\n\nVoor tan x = a:\n• x = arctan(a) + kπ.\n\n**Voorbeeld**: sin x = 0,5 voor 0 ≤ x ≤ 2π.\nx = arcsin(0,5) = π/6 = 30°. Tweede: π − π/6 = 5π/6 = 150°.\nDus: x ∈ {π/6, 5π/6}.\n\n**Wiskunde-B (HAVO/VWO)**: differentiaalrekening op sin/cos.\n• d/dx (sin x) = cos x.\n• d/dx (cos x) = −sin x.\n• d/dx (tan x) = 1/cos² x = sec² x.\n\n**Wiskunde-VWO**: complexe getallen + Euler-formule e^(iθ) = cos θ + i·sin θ.",
    checks: [
      {
        q: "**sin 2α** = ?",
        options: ["2 sin α · cos α", "sin² α", "1 − cos α", "2 sin α"],
        answer: 0,
        wrongHints: [null, "Niet — geen kwadraat.", "Niet — andere identiteit.", "Niet — vergeet cos."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele-hoek identiteit", tekst: "sin 2α = 2·sin α·cos α. Klassiek te onthouden. Bv. sin 60° = 2 · sin 30° · cos 30° = 2 · 0,5 · √3/2 = √3/2 ✓." }],
          niveaus: { basis: "2 sin α cos α. A.", simpeler: "Vaste formule. A.", nogSimpeler: "2sin·cos = A." },
        },
      },
      {
        q: "Oplos: **cos x = 0** voor 0 ≤ x ≤ 2π. Antwoorden?",
        options: ["x = π/2 of 3π/2", "x = 0 of π", "Alleen x = π/2", "Alleen x = 0"],
        answer: 0,
        wrongHints: [null, "Niet — daar is cos ±1.", "Te beperkt.", "Onvolledig."],
        uitlegPad: {
          stappen: [
            { titel: "cos = 0 op π/2 + kπ", tekst: "In [0, 2π] zijn dat: π/2 en 3π/2. Dat zijn de top en onderkant van de eenheidscirkel (cos = x-coord = 0)." },
          ],
          niveaus: { basis: "π/2 en 3π/2. A.", simpeler: "Cos=0 op kwartronde en driekwartronde. A.", nogSimpeler: "π/2, 3π/2 = A." },
        },
      },
      {
        q: "**Afgeleide** van y = sin x?",
        options: ["cos x", "−cos x", "sin x", "−sin x"],
        answer: 0,
        wrongHints: [null, "Niet — dat is voor −sin.", "Niet — dat is integraal.", "Niet — dat is afgeleide van cos."],
        uitlegPad: {
          stappen: [{ titel: "Basisformule", tekst: "d/dx (sin x) = **cos x**. Bewijs via verschilformule + limiet. Werkt alleen wanneer x in radialen!" }],
          theorie: "Volgorde sin → cos → −sin → −cos → sin (terug). Elke afleiding draait de cirkel met π/2.",
          niveaus: { basis: "cos x. A.", simpeler: "sin' = cos. A.", nogSimpeler: "cos = A." },
        },
      },
      {
        q: "Een trilling: u(t) = 5 sin(2π · 3 · t). Frequentie?",
        options: ["3 Hz", "6 Hz", "2π Hz", "5 Hz"],
        answer: 0,
        wrongHints: [null, "Niet — vergelijk standaardvorm.", "Niet — 2π is omrekening.", "Niet — dat is amplitude."],
        uitlegPad: {
          stappen: [
            { titel: "u(t) = A sin(2π f t)", tekst: "Standaardvorm voor trilling: u(t) = A·sin(2π·f·t). Vergelijk: A = 5, **f = 3 Hz**, T = 1/3 s." },
          ],
          niveaus: { basis: "f=3 Hz. A.", simpeler: "2π·f → f = 3. A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "**arctan(1)** in radialen?",
        options: ["π/4", "π/2", "1", "π"],
        answer: 0,
        wrongHints: [null, "Niet — tan π/2 is ∞.", "Niet — antwoord in radialen.", "Niet — tan π = 0."],
        uitlegPad: {
          stappen: [{ titel: "tan 45° = 1", tekst: "tan(π/4) = 1 → arctan(1) = **π/4** = 45°. Klassiek geheugen-feit." }],
          niveaus: { basis: "π/4. A.", simpeler: "tan=1 bij 45° = π/4 rad. A.", nogSimpeler: "π/4 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const goniometrieHavoVwo = {
  id: "goniometrie-havo-vwo",
  title: "Goniometrie (HAVO/VWO Wiskunde)",
  emoji: "📐",
  level: "havo-vwo-4-5",
  subject: "wiskunde",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Wiskunde — Goniometrie (CSE-onderwerp wis-A/B)",
  prerequisites: [
    { id: "pythagoras", title: "Pythagoras-stelling", niveau: "vmbo-2" },
  ],
  intro:
    "Goniometrie voor HAVO/VWO eindexamen — sin/cos/tan in rechthoekige driehoek, eenheidscirkel + radialen, sinus + cosinusregel, goniometrische grafieken. VWO-stof: dubbele-hoek + afgeleide. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "goniometrie", "trigonometrie",
    "sinus", "cosinus", "tangens",
    "sin", "cos", "tan",
    "SOSCASTOA",
    "rechthoekige driehoek",
    "Pythagoras",
    "eenheidscirkel",
    "radialen", "rad", "π",
    "graden", "°",
    "quadrant",
    "sinusregel", "cosinusregel",
    "driehoek-oppervlakte",
    "asymptoot",
    "amplitude", "periode",
    "harmonische trilling",
    "arcsin", "arccos", "arctan",
    "identiteit",
    "dubbele hoek",
    "afgeleide sin",
    "afgeleide cos",
  ],
  chapters,
  steps,
};

export default goniometrieHavoVwo;

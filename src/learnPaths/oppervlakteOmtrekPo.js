// Leerpad: Oppervlakte en omtrek (groep 6-8 basisschool)
// 6 stappen × 3 checks = 18 vragen. Cito-rekenen stof.
// Stijl: praktische voorbeelden, geheugentrucs (rondje = omtrek, vlak = oppervlakte).

const chapters = [
  { letter: "A", title: "Verschil omtrek vs oppervlakte", emoji: "📐", from: 0, to: 0 },
  { letter: "B", title: "Rechthoek + vierkant", emoji: "⬛", from: 1, to: 2 },
  { letter: "C", title: "Driehoek + cirkel", emoji: "🔺", from: 3, to: 4 },
  { letter: "D", title: "Praktijk-vraagstukken", emoji: "🛋️", from: 5, to: 5 },
];

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Cito-truc oppervlakte/omtrek: OMTREK = rondje langs de rand (in cm/m/km). OPPERVLAKTE = vlak vullen (in cm²/m²/km² — altijd kwadraat!). Geheugentrucs: omtrek = 'om-rondje', oppervlakte = 'opper-vlak'.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Stap 1 — Wat is het verschil tussen omtrek en oppervlakte?",
    explanation: "**Omtrek** en **oppervlakte** zijn 2 verschillende dingen — vaak verward.\n\n**🔄 OMTREK**\n- Hoe lang is de **rand** rondom een figuur?\n- Loop met je vinger langs alle zijden — wat is de totale lengte?\n- Eenheid: **cm, m, km** (gewoon lengte)\n- Voorbeeld: hek om een tuin\n\n**🟦 OPPERVLAKTE**\n- Hoe veel **vlak** zit er IN een figuur?\n- Hoeveel kleine vierkantjes passen erin?\n- Eenheid: **cm², m², km², ha** (altijd kwadraat-symbool ²)\n- Voorbeeld: tapijt op de vloer leggen, tuin bezaaien met gras\n\n**🎯 Truc om ze uit elkaar te houden**:\n- **Om-trek** = je **trekt eromheen** (rondje)\n- **Opper-vlak** = het hele **vlak** binnen de rand\n\n**Cito-valkuil**: bij een vraag goed lezen: gaat het over **omheining** (omtrek) of over **bestrating** (oppervlakte)? Vraag in tweesporig: 'Hoeveel meter hek heb je nodig?' = omtrek. 'Hoeveel tegels heb je nodig?' = oppervlakte.",
    emoji: "📐",
    checks: [
      {
        q: "Een tuin is 8 m lang en 5 m breed. Hoeveel meter **hek** heb je nodig om alle 4 de zijden af te zetten?",
        options: ["13 m", "26 m", "40 m", "40 m²"],
        answer: 1,
        wrongHints: ["Dat is 8 + 5 — slechts 2 zijden. Een tuin heeft 4 zijden.", null, "40 = oppervlakte (8 × 5), niet omtrek. Hek = omtrek!", "Eenheid klopt niet (m²) — hek wordt in meters gemeten, niet vierkante meters."],
        explanation: "**Omtrek = 2× lengte + 2× breedte** = 2×8 + 2×5 = 16 + 10 = **26 m**. Een tuin heeft 4 zijden — niet 2. Antwoord B.",
        uitlegPad: compact(
          "Omtrek rechthoek = 2×(L+B). 8m+5m=13m, ×2=26m. Hek = randje = omtrek.",
          { basis: "Omtrek = 2×(8+5) = 26 m. = B.", simpeler: "Hek rondom 4 zijden: 8+8+5+5 = 26 m. = B.", nogSimpeler: "26 m = B." },
          [{ woord: "omtrek", uitleg: "Totale rand langs figuur." }],
        ),
      },
      {
        q: "Wat is de **juiste eenheid** voor de **oppervlakte** van een kamer?",
        options: ["meter (m)", "vierkante meter (m²)", "kubieke meter (m³)", "centimeter (cm)"],
        answer: 1,
        wrongHints: ["m = lengte (omtrek of zijde). Niet vlak.", null, "m³ = inhoud (volume) — voor doos/zwembad/lucht. Niet vlak.", "cm = lengte. Niet vlak."],
        explanation: "**Vierkante meter (m²)** = oppervlakte. Het kleine ²-tje betekent 'maal zichzelf' = vlak. Eenheden: cm² (klein), m² (kamer/tuin), km² (provincie). Antwoord B.",
        uitlegPad: compact(
          "Eenheden ladder: m = lengte (1D). m² = vlak (2D). m³ = inhoud (3D). Steeds 1 dimensie meer.",
          { basis: "m² (vierkante meter). = B.", simpeler: "Oppervlakte = vlak = ². = B.", nogSimpeler: "m² = B." },
          [{ woord: "m²", uitleg: "Vierkante meter — eenheid voor oppervlakte." }, { woord: "m³", uitleg: "Kubieke meter — eenheid voor inhoud (volume)." }],
        ),
      },
      {
        q: "Een vloer is 6 m × 4 m. Hoeveel **tegels van 1 m² heb je nodig** om de hele vloer te bedekken?",
        options: ["10 tegels", "20 tegels", "24 tegels", "10 m²"],
        answer: 2,
        wrongHints: ["10 = 6+4 (omtrek-helft). Niet oppervlakte.", "20 = 2×(6+4) (omtrek). Niet oppervlakte.", null, "Antwoord moet aantal tegels zijn (een getal), niet m²."],
        explanation: "**Oppervlakte = lengte × breedte** = 6 × 4 = **24 m²**. Bij tegels van 1 m² = 24 tegels. Antwoord C.",
        uitlegPad: compact(
          "Oppervlakte rechthoek = L × B. Tegels 1m²: aantal = totale oppervlakte.",
          { basis: "6 × 4 = 24. = C.", simpeler: "Vloer = 6×4 m² = 24 m². 24 tegels. = C.", nogSimpeler: "24 = C." },
          [{ woord: "oppervlakte rechthoek", uitleg: "L × B (lengte maal breedte)." }],
        ),
      },
    ],
  },
  {
    title: "Stap 2 — Omtrek rechthoek + vierkant",
    explanation: "**Rechthoek**: 4 zijden, tegenoverliggende zijden gelijk.\n\n**Omtrek-formule rechthoek**:\n- O = 2 × **lengte** + 2 × **breedte**\n- Of: O = 2 × (L + B)\n- Of gewoon: alle 4 zijden optellen → L + B + L + B\n\n**Vierkant**: speciaal geval van rechthoek waar alle 4 zijden GELIJK zijn.\n\n**Omtrek-formule vierkant**:\n- O = 4 × **zijde**\n- Want alle 4 zijden zijn even lang\n\n**Voorbeeld 1**: rechthoek 7 cm × 3 cm.\n- Omtrek = 2×(7+3) = 2×10 = **20 cm**\n- Of: 7+3+7+3 = 20 cm\n\n**Voorbeeld 2**: vierkant met zijde 5 m.\n- Omtrek = 4 × 5 = **20 m**\n\n**Cito-valkuil**: soms krijg je de omtrek en MOET je de zijde terug-rekenen.\nVoorbeeld: omtrek vierkant = 24 cm. Wat is zijde? → 24 ÷ 4 = **6 cm**.",
    emoji: "⬛",
    checks: [
      {
        q: "Bereken de **omtrek** van een rechthoek met lengte **12 cm** en breedte **5 cm**.",
        options: ["17 cm", "34 cm", "60 cm", "60 cm²"],
        answer: 1,
        wrongHints: ["17 = 12+5 (slechts 2 zijden — er zijn 4 zijden!).", null, "60 = 12×5 (oppervlakte). Niet omtrek.", "60 cm² = oppervlakte-eenheid. Omtrek = lengte (cm)."],
        explanation: "**Omtrek = 2×L + 2×B** = 2×12 + 2×5 = 24 + 10 = **34 cm**. Of: 12+5+12+5 = 34. Antwoord B.",
        uitlegPad: compact(
          "Rechthoek omtrek = 2L + 2B = 2(L+B). 2(12+5) = 2×17 = 34 cm.",
          { basis: "2(12+5) = 34 cm. = B.", simpeler: "12+5+12+5 = 34. = B.", nogSimpeler: "34 = B." },
          [{ woord: "omtrek rechthoek", uitleg: "2 × lengte + 2 × breedte." }],
        ),
      },
      {
        q: "Een vierkant heeft een **omtrek van 36 cm**. Hoe lang is **één zijde**?",
        options: ["6 cm", "9 cm", "12 cm", "18 cm"],
        answer: 1,
        wrongHints: ["6 = 36÷6 (geen reden om door 6 te delen — vierkant heeft 4 zijden).", null, "12 = 36÷3 (vierkant heeft 4 zijden, niet 3).", "18 = 36÷2 (vierkant heeft 4 zijden, niet 2)."],
        explanation: "**Vierkant heeft 4 gelijke zijden**. Omtrek = 4 × zijde → zijde = omtrek ÷ 4 = 36 ÷ 4 = **9 cm**. Check: 4×9 = 36 ✓. Antwoord B.",
        uitlegPad: compact(
          "Vierkant omtrek = 4×zijde. Terug-reken: zijde = omtrek/4. 36/4 = 9 cm.",
          { basis: "36÷4 = 9 cm. = B.", simpeler: "Vierkant 4 gelijke zijden. 36÷4 = 9. = B.", nogSimpeler: "9 = B." },
          [{ woord: "vierkant", uitleg: "Rechthoek met 4 gelijke zijden." }],
        ),
      },
      {
        q: "Welke omtrek heeft een vierkant met zijde **7,5 cm**?",
        options: ["15 cm", "22,5 cm", "30 cm", "56,25 cm"],
        answer: 2,
        wrongHints: ["15 = 7,5×2 (slechts 2 zijden).", "22,5 = 7,5×3 (slechts 3 zijden — vierkant heeft 4!).", null, "56,25 = 7,5×7,5 = 7,5² (oppervlakte, niet omtrek)."],
        explanation: "**Vierkant omtrek** = 4 × zijde = 4 × 7,5 = **30 cm**. Antwoord C.",
        uitlegPad: compact(
          "4 × 7,5 = 30. Truc: 4×7=28, 4×0,5=2, samen 30.",
          { basis: "4 × 7,5 = 30 cm. = C.", simpeler: "4 zijden van 7,5 = 30. = C.", nogSimpeler: "30 = C." },
          [{ woord: "decimaal vermenigvuldigen", uitleg: "4 × 7,5: doe 4×7=28 + 4×0,5=2 → 30." }],
        ),
      },
    ],
  },
  {
    title: "Stap 3 — Oppervlakte rechthoek + vierkant",
    explanation: "**Oppervlakte-formule rechthoek**:\n- A = **lengte × breedte**\n- A = L × B\n- Eenheid: cm² of m²\n\n**Oppervlakte-formule vierkant**:\n- A = **zijde × zijde**\n- A = z × z = z²\n- (vierkant van een getal — vandaar het ² in 'vierkante meter')\n\n**Voorbeeld 1**: rechthoek 7 cm × 3 cm.\n- Oppervlakte = 7 × 3 = **21 cm²**\n\n**Voorbeeld 2**: vierkant met zijde 5 m.\n- Oppervlakte = 5 × 5 = **25 m²**\n- Of: 5² = 25 m²\n\n**Eenheid-conversies** (handig om snel te kennen):\n- 1 m² = **10.000 cm²** (LET OP: niet 100, want 100×100 = 10.000)\n- 1 km² = **1.000.000 m²** (1000×1000)\n- 1 ha (hectare) = **10.000 m²** (= 100m × 100m vierkant)\n- 1 km² = **100 ha**\n\n**Cito-valkuil**: omrekenen lengte naar oppervlakte is anders dan gewone lengte! 1m = 100cm, maar 1m² = 10.000 cm² (NIET 100). Komt omdat OPPERVLAKTE 2 dimensies heeft.",
    emoji: "⬛",
    checks: [
      {
        q: "Bereken de **oppervlakte** van een rechthoek met lengte **9 m** en breedte **6 m**.",
        options: ["15 m²", "30 m²", "54 m²", "54 m"],
        answer: 2,
        wrongHints: ["15 = 9+6 (halve omtrek). Niet oppervlakte.", "30 = 2×(9+6) (omtrek, niet oppervlakte).", null, "Eenheid moet m² zijn (oppervlakte), niet m."],
        explanation: "**Oppervlakte = L × B** = 9 × 6 = **54 m²**. Antwoord C.",
        uitlegPad: compact(
          "Oppervlakte rechthoek = L×B. 9×6 = 54 m².",
          { basis: "9 × 6 = 54 m². = C.", simpeler: "L×B = 9×6 = 54. = C.", nogSimpeler: "54 = C." },
          [{ woord: "oppervlakte rechthoek", uitleg: "L × B." }],
        ),
      },
      {
        q: "Wat is de **oppervlakte van een vierkant** met zijde **12 cm**?",
        options: ["24 cm²", "48 cm²", "144 cm²", "144 cm"],
        answer: 2,
        wrongHints: ["24 = 2×12 (halve omtrek).", "48 = 4×12 (omtrek!).", null, "Eenheid is cm² voor oppervlakte (niet cm)."],
        explanation: "**Vierkant oppervlakte** = zijde × zijde = 12 × 12 = **144 cm²**. (Of: 12² = 144.) Antwoord C.",
        uitlegPad: compact(
          "Vierkant oppervlakte = zijde². 12² = 12×12 = 144 cm².",
          { basis: "12 × 12 = 144 cm². = C.", simpeler: "12² = 144. = C.", nogSimpeler: "144 = C." },
          [{ woord: "vierkant oppervlakte", uitleg: "zijde × zijde = z²." }],
        ),
      },
      {
        q: "Hoeveel cm² is **1 m²**?",
        options: ["100 cm²", "1.000 cm²", "10.000 cm²", "1.000.000 cm²"],
        answer: 2,
        wrongHints: ["100 cm = 1m, maar OPPERVLAKTE is 2D — dus 100×100 = 10.000.", "Tussen-getal — niet correct.", null, "1.000.000 cm² = 1 m² × 100 (= 100 m²) — te veel."],
        explanation: "**1 m² = 100 cm × 100 cm = 10.000 cm²**. Truc: lengte-conversie ×100, maar oppervlakte (vierkant) ×100×100 = 10.000. Belangrijke Cito-trap! Antwoord C.",
        uitlegPad: compact(
          "1m = 100cm. 1m² = 100×100 = 10.000 cm² (NIET 100). Steeds 1 dimensie meer: m³ = 100³ = 1.000.000 cm³.",
          { basis: "10.000. = C.", simpeler: "1m² = 100cm × 100cm = 10.000 cm². = C.", nogSimpeler: "10.000 = C." },
          [{ woord: "eenheid-conversie m² ↔ cm²", uitleg: "1 m² = 10.000 cm² (niet 100 — vierkant geeft ×100²)." }],
        ),
      },
    ],
  },
  {
    title: "Stap 4 — Driehoek-oppervlakte",
    explanation: "**Driehoek-oppervlakte** is iets lastiger dan rechthoek.\n\n**Formule**:\n- A = **½ × basis × hoogte**\n- Of: A = (basis × hoogte) ÷ 2\n\n**Waar kijk je voor de hoogte?** De **hoogte staat LOODRECHT (haaks)** op de basis. Niet een schuine zijde!\n\n**Voorbeeld**: driehoek met basis = 8 cm, hoogte = 5 cm.\n- A = ½ × 8 × 5 = **20 cm²**\n- Of: (8 × 5) ÷ 2 = 40 ÷ 2 = 20\n\n**Waarom ÷ 2?** Een driehoek is precies de **helft** van een rechthoek. Trek je een diagonaal in een rechthoek? Krijg je 2 driehoeken die samen de hele rechthoek vormen.\n\n**Bijzondere gevallen**:\n- **Rechthoekige driehoek**: de 2 rechte zijden zijn basis + hoogte (handig: ze staan al haaks!).\n- **Gelijkzijdige driehoek**: alle 3 zijden gelijk. Hoogte = lastig te zien (niet zijde zelf).\n\n**Cito-truc**: kijk goed waar de hoogte in de figuur is aangegeven (met stippellijntje en hoekje ⊥). Pak NIET zomaar de langste zijde als 'hoogte'.",
    emoji: "🔺",
    checks: [
      {
        q: "Bereken de **oppervlakte** van een driehoek met basis **10 cm** en hoogte **6 cm**.",
        options: ["16 cm²", "30 cm²", "60 cm²", "30 cm"],
        answer: 1,
        wrongHints: ["16 = 10+6 (geen formule).", null, "60 = 10×6 (vergeten te delen door 2 — driehoek is half rechthoek!).", "Eenheid moet cm² zijn."],
        explanation: "**Oppervlakte driehoek = ½ × basis × hoogte** = ½ × 10 × 6 = **30 cm²**. Of: (10×6)÷2 = 60÷2 = 30. Antwoord B.",
        uitlegPad: compact(
          "Driehoek = halve rechthoek. A = (b×h)/2 = (10×6)/2 = 30 cm².",
          { basis: "(10×6)/2 = 30. = B.", simpeler: "Driehoek = half rechthoek. 10×6=60, /2 = 30. = B.", nogSimpeler: "30 = B." },
          [{ woord: "oppervlakte driehoek", uitleg: "½ × basis × hoogte (b × h ÷ 2)." }],
        ),
      },
      {
        q: "Een rechthoekige driehoek heeft een rechte hoek bij hoek A. De zijden bij A zijn **5 cm** en **12 cm**. Wat is de oppervlakte?",
        options: ["17 cm²", "30 cm²", "60 cm²", "60 cm"],
        answer: 1,
        wrongHints: ["17 = 5+12 (geen formule).", null, "60 = 5×12 (vergeten te delen door 2).", "Eenheid moet cm²."],
        explanation: "**Bij rechthoekige driehoek**: de 2 rechte zijden ZIJN basis + hoogte (ze staan al haaks). A = ½ × 5 × 12 = ½ × 60 = **30 cm²**. Antwoord B.",
        uitlegPad: compact(
          "Rechthoekige driehoek: de 2 zijden bij de rechte hoek = basis + hoogte. (5×12)/2 = 30.",
          { basis: "(5×12)/2 = 30 cm². = B.", simpeler: "Rechte hoek-zijden = basis+hoogte. 5×12=60, /2 = 30. = B.", nogSimpeler: "30 = B." },
          [{ woord: "rechthoekige driehoek", uitleg: "Driehoek met 1 hoek van 90°." }],
        ),
      },
      {
        q: "Een driehoek heeft een oppervlakte van **24 cm²** en basis **8 cm**. Wat is de **hoogte**?",
        options: ["3 cm", "6 cm", "8 cm", "16 cm"],
        answer: 1,
        wrongHints: ["3 = 24÷8 (vergeet ×2 — formule heeft /2).", null, "8 = basis — geen reden.", "16 = 24÷8×2 — verkeerd geordend, kijk weer."],
        explanation: "**Terug-rekenen**: A = ½×b×h → h = (2×A)÷b = (2×24)÷8 = 48÷8 = **6 cm**. Check: ½×8×6 = 24 ✓. Antwoord B.",
        uitlegPad: compact(
          "Terug-reken hoogte: h = 2A/b. 2×24/8 = 48/8 = 6 cm.",
          { basis: "(2×24)÷8 = 6 cm. = B.", simpeler: "A=½bh, dus h = 2A/b = 48/8 = 6. = B.", nogSimpeler: "6 cm = B." },
          [{ woord: "terug-rekenen driehoek", uitleg: "Hoogte = (2 × oppervlakte) ÷ basis." }],
        ),
      },
    ],
  },
  {
    title: "Stap 5 — Cirkel: omtrek + oppervlakte",
    explanation: "**Cirkel** heeft 2 belangrijke maten:\n- **Straal (r)** = van middelpunt naar rand\n- **Diameter (d)** = van rand naar rand door middelpunt. **d = 2r**\n\n**Omtrek cirkel** (rondje langs de rand):\n- O = **π × d** (pi maal diameter)\n- O = **2 × π × r** (pi maal 2 maal straal)\n- π (pi) ≈ **3,14** (oneindig veel decimalen, vaak ronden we naar 3,14)\n\n**Oppervlakte cirkel** (vlak binnenin):\n- A = **π × r²**\n- (pi maal straal in het kwadraat)\n\n**Voorbeeld 1**: cirkel met straal 5 cm.\n- Omtrek = 2 × π × 5 = 10π ≈ 10 × 3,14 = **31,4 cm**\n- Oppervlakte = π × 5² = π × 25 ≈ 25 × 3,14 = **78,5 cm²**\n\n**Voorbeeld 2**: cirkel met diameter 10 m.\n- Straal = 10÷2 = 5 m\n- Omtrek = π × 10 = 10π ≈ **31,4 m**\n- Oppervlakte = π × 5² ≈ **78,5 m²**\n\n**Cito-truc**: kijk goed of de vraag STRAAL of DIAMETER geeft. Vaak verleidt de toets je om diameter te gebruiken waar straal moet (of andersom).\n\n**Geheugentruc**: 'OMtrek = OMtrek-rondje = π × d' (allebei begint met letters). 'Oppervlakte = vlak = r² (twee dimensies, dus kwadraat)'.",
    emoji: "⭕",
    checks: [
      {
        q: "Een cirkel heeft een **straal van 4 cm**. Wat is de **omtrek**? (Gebruik π ≈ 3,14)",
        options: ["12,56 cm", "25,12 cm", "50,24 cm", "12,56 cm²"],
        answer: 1,
        wrongHints: ["12,56 = π × 4 (vergeten ×2 — gebruikt straal, formule is π×d = π×2r).", null, "50,24 = π × 4 × 4 (oppervlakte met r² verkeerd). Niet omtrek.", "Eenheid omtrek = cm, niet cm²."],
        explanation: "**Omtrek = 2 × π × r** = 2 × 3,14 × 4 = 6,28 × 4 = **25,12 cm**. (Of: d = 2×4 = 8 cm, π×d = 3,14×8 = 25,12.) Antwoord B.",
        uitlegPad: compact(
          "Omtrek cirkel = 2πr = πd. r=4: 2×3,14×4 = 25,12 cm.",
          { basis: "2×3,14×4 = 25,12 cm. = B.", simpeler: "d=2r=8. Omtrek=π×8=25,12. = B.", nogSimpeler: "25,12 = B." },
          [{ woord: "straal", uitleg: "Van middelpunt cirkel naar rand. (Helft van diameter.)" }, { woord: "diameter", uitleg: "Van rand tot rand door middelpunt. (Dubbele straal.)" }],
        ),
      },
      {
        q: "Een ronde tafel heeft een **diameter van 1 meter**. Wat is de **oppervlakte**? (π ≈ 3,14)",
        options: ["3,14 m²", "0,785 m²", "1,57 m²", "0,5 m²"],
        answer: 1,
        wrongHints: ["3,14 = π × 1 (geen oppervlakte-formule).", null, "1,57 = ½ × π × 1 (half van π).", "0,5 = ½ × 1 (geen formule)."],
        explanation: "**Diameter = 1 m, dus straal = 0,5 m**. Oppervlakte = π × r² = 3,14 × 0,5² = 3,14 × 0,25 = **0,785 m²** (= 7850 cm²). Antwoord B.",
        uitlegPad: compact(
          "Diameter=1m → straal=0,5m. Oppervlakte=πr²=3,14×0,5²=3,14×0,25=0,785 m².",
          { basis: "π × 0,25 = 0,785 m². = B.", simpeler: "Straal halveer eerst (1m → 0,5m). Dan π × 0,5² = 0,785. = B.", nogSimpeler: "0,785 = B." },
          [{ woord: "oppervlakte cirkel", uitleg: "π × straal² (NIET diameter²)." }],
        ),
      },
      {
        q: "Hoeveel is π (pi) **afgerond op 2 decimalen**?",
        options: ["3,12", "3,14", "3,16", "3,18"],
        answer: 1,
        wrongHints: ["Net te laag. π begint met 3,14...", null, "Net te hoog.", "Te hoog. π is iets kleiner dan 3,16."],
        explanation: "**π ≈ 3,14** (op 2 decimalen). Volledig: 3,14159265... Voor Cito gebruik je meestal 3,14. Op rekenmachine = π-knop. Antwoord B.",
        uitlegPad: compact(
          "π = 3,14159... Op 2 decimalen: 3,14. Pi-dag = 14 maart (3-14 datum-notatie).",
          { basis: "3,14. = B.", simpeler: "Pi = 3,14 op 2 decimalen. = B.", nogSimpeler: "3,14 = B." },
          [{ woord: "pi (π)", uitleg: "Wiskunde-constante ~3,14159. Verhouding omtrek/diameter cirkel." }],
        ),
      },
    ],
  },
  {
    title: "Stap 6 — Praktijk-vraagstukken",
    explanation: "Op de Cito en in het echt komen oppervlakte + omtrek vaak in **praktijksituaties** voor:\n\n**Voorbeelden**:\n- 🏡 **Tuin omheinen** → omtrek (hoeveel meter hek?)\n- 🎨 **Muur behangen** → oppervlakte (hoeveel rollen?)\n- 🟨 **Vloer betegelen** → oppervlakte (hoeveel tegels?)\n- 🧶 **Lint om cadeau** → omtrek\n- 🌱 **Gazon mest geven** → oppervlakte\n- 🚪 **Schuur schilderen** → oppervlakte van de muren\n- 🛣️ **Rondje hardlopen om vijver** → omtrek\n\n**Aanpak Cito-vraag (3 stappen)**:\n1. **Lees goed**: gaat het om **rand** (omtrek) of **vlak** (oppervlakte)?\n2. **Maak schets**: teken figuur + zet getallen erbij.\n3. **Reken uit + check eenheid**: m, m², m³? Klopt het?\n\n**Cito-valkuilen**:\n- Een **schuine zijde** is geen 'hoogte' van een driehoek — die staat haaks.\n- 1 m² ≠ 100 cm² — het is **10.000 cm²**.\n- Bij cirkel: gebruik **straal** voor r², niet diameter.\n- Soms moet je een **gat eraf trekken** (bv. tuin met vijver: tuin-oppervlakte − vijver-oppervlakte = gras).\n\n**Combinatie-vragen**: soms gevraagd OMTREK én OPPERVLAKTE in 1 vraag. Lees vraag 2× — pak de juiste formule.",
    emoji: "🛋️",
    checks: [
      {
        q: "Je legt **plinten** (houten randjes) langs de muren van een kamer van **5 m × 4 m**. Hoeveel meter plint heb je nodig?",
        options: ["9 m", "18 m", "20 m", "20 m²"],
        answer: 1,
        wrongHints: ["9 = 5+4 (slechts 2 zijden).", null, "20 = 5×4 (oppervlakte). Plinten gaan langs de randen, niet over de vloer.", "Eenheid moet m zijn (plinten = lengte)."],
        explanation: "**Plinten gaan langs alle 4 muren** = omtrek = 2×(5+4) = 2×9 = **18 m**. (Of: 5+4+5+4 = 18.) Antwoord B.",
        uitlegPad: compact(
          "Plinten = langs muren = omtrek. 2×(5+4) = 18 m.",
          { basis: "Omtrek 2(5+4) = 18 m. = B.", simpeler: "Plinten 4 wanden = 5+4+5+4 = 18. = B.", nogSimpeler: "18 m = B." },
          [{ woord: "plint", uitleg: "Houten randje langs muur op vloer." }],
        ),
      },
      {
        q: "Een tuin van **20 m × 15 m** heeft in een hoek een **vijver van 4 m × 3 m**. Hoeveel m² **gras** is er?",
        options: ["288 m²", "300 m²", "312 m²", "330 m²"],
        answer: 0,
        wrongHints: [null, "300 = 20×15 (totale tuin, vergeet vijver eraf).", "312 = 20×15+12 (vijver erbij geteld, moet eraf).", "330 = 20×15+30 (foute optelling)."],
        explanation: "**Tuin = 20×15 = 300 m²**. **Vijver = 4×3 = 12 m²**. Gras = tuin − vijver = 300 − 12 = **288 m²**. Antwoord A.",
        uitlegPad: compact(
          "Gras = totale tuin − vijver. (20×15) − (4×3) = 300 − 12 = 288 m².",
          { basis: "300 − 12 = 288 m². = A.", simpeler: "Tuin 300, vijver 12 eraf = 288 gras. = A.", nogSimpeler: "288 = A." },
          [{ woord: "samengestelde figuur", uitleg: "Figuur uit meerdere delen — bereken stuk voor stuk." }],
        ),
      },
      {
        q: "Een ronde **pizza** heeft een **diameter van 30 cm**. Hoeveel cm² is de pizza? (π ≈ 3,14)",
        options: ["94,2 cm²", "188,4 cm²", "706,5 cm²", "2826 cm²"],
        answer: 2,
        wrongHints: ["94,2 = π × 30 (omtrek, niet oppervlakte).", "188,4 = 2 × π × 30 (foute formule).", null, "2826 = π × 30² (gebruikt diameter ipv straal — moet eerst /2)."],
        explanation: "**Diameter = 30, straal = 15**. Oppervlakte = π × r² = 3,14 × 15² = 3,14 × 225 = **706,5 cm²**. Cito-trap: pas op voor diameter ipv straal! Antwoord C.",
        uitlegPad: compact(
          "Pizza diameter=30, straal=15. Oppervlakte = πr² = 3,14×225 = 706,5 cm². Niet 30² gebruiken!",
          { basis: "π × 15² = 706,5 cm². = C.", simpeler: "Straal = halve diameter = 15. π×15² = 706,5. = C.", nogSimpeler: "706,5 = C." },
          [{ woord: "straal vs diameter", uitleg: "Straal = halve diameter. In formule cirkel-oppervlakte gebruik je STRAAL (niet diameter)." }],
        ),
      },
    ],
  },
];

const oppervlakteOmtrekPo = {
  id: "oppervlakte-omtrek-po",
  title: "Oppervlakte en omtrek — rechthoek, driehoek, cirkel",
  emoji: "📐",
  level: "po",
  subject: "rekenen",
  referentieNiveau: "po-1F",
  sloThema: "Rekenen - meten + meetkunde",
  intro: "18 vragen Cito-rekenen groep 6-8: verschil omtrek vs oppervlakte, rechthoek + vierkant + driehoek + cirkel, eenheid-conversies (1 m² = 10.000 cm²), praktijkvraagstukken (tuin met vijver, pizza, plinten).",
  triggerKeywords: ["oppervlakte omtrek po", "rechthoek vierkant", "driehoek oppervlakte", "cirkel pi", "m² cm² conversie", "praktijkvraagstuk meten"],
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "vlakke-figuren-po", title: "Vlakke figuren", niveau: "po-1F" },
  ],
  chapters,
  steps,
};

export default oppervlakteOmtrekPo;

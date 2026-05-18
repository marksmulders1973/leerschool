// Leerpad: Statistiek HAVO/VWO Wiskunde A — eindexamen-stof.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  point: "#ffd54f",
  alt: "#ff7043",
};

const stepEmojis = ["📊", "📏", "🔔", "📈", "🏆"];

const chapters = [
  { letter: "A", title: "Centrum-maten", emoji: "📊", from: 0, to: 0 },
  { letter: "B", title: "Spreiding + boxplot", emoji: "📏", from: 1, to: 1 },
  { letter: "C", title: "Normaalverdeling", emoji: "🔔", from: 2, to: 2 },
  { letter: "D", title: "Regressie + correlatie", emoji: "📈", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Centrum-maten ─────────────────────────────────────
  {
    title: "Centrum-maten — gemiddelde, mediaan, modus",
    explanation:
      "Drie manieren om het **centrum** van een dataset te beschrijven.\n\n**Gemiddelde** (rekenkundig gemiddelde, x̄):\n• Som van alle waarden ÷ aantal waarden.\n• Formule: x̄ = Σx / n.\n• Voorbeeld: 4, 6, 8, 10 → (4+6+8+10)/4 = 28/4 = **7**.\n• Nadeel: gevoelig voor **uitschieters**. Eén waarde van 1000 trekt gemiddelde omhoog.\n\n**Mediaan** (Md):\n• De **middelste waarde** als je data op volgorde zet.\n• Bij oneven aantal: middelste positie. Bij even aantal: gemiddelde van twee middelste.\n• Voorbeeld 1 (oneven): 3, 5, **7**, 9, 11 → mediaan = 7.\n• Voorbeeld 2 (even): 4, **6**, **8**, 10 → mediaan = (6+8)/2 = 7.\n• Voordeel: **niet** gevoelig voor uitschieters. Geschikt voor scheve verdelingen.\n\n**Modus** (Mo):\n• De **meest voorkomende** waarde.\n• Voorbeeld: 2, 3, 3, 5, 7, 7, 7, 8 → modus = 7.\n• Een dataset kan **geen, één of meerdere modi** hebben.\n• Wordt vooral gebruikt bij **categoriale** data (favoriete kleur, dieren-soort).\n\n**Wanneer wat**?\n• Symmetrische verdeling: gemiddelde = mediaan = modus (vrijwel).\n• Scheve verdeling (uitschieters): liever **mediaan** rapporteren.\n• Categoriale data: alleen modus mogelijk.\n• Voorbeeld: inkomens in NL — **mediaan** is realistischer dan gemiddelde (uitschieters miljonairs trekken gemiddelde omhoog).\n\n**Kwartielen** (Q1, Q2 = mediaan, Q3):\n• Q1 = 25%-grens. Q2 = mediaan = 50%. Q3 = 75%.\n• **Interkwartielafstand** (IQR) = Q3 − Q1. Geeft 'breedte van middelste 50%'.\n• Uitschieters: meer dan **1,5 × IQR** boven Q3 of onder Q1.",
    checks: [
      {
        q: "Bereken het **gemiddelde** van: 3, 6, 9, 12.",
        options: ["7,5","6","9","30"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is mediaan-element.", "Te veel — niet gemiddelde.", "Niet — dat is som, geen gemiddelde."],
        uitlegPad: {
          stappen: [{ titel: "Som / aantal", tekst: "Som = 3 + 6 + 9 + 12 = 30. Aantal = 4. Gemiddelde = 30 / 4 = **7,5**." }],
          woorden: [{ woord: "gemiddelde", uitleg: "Som van waarden gedeeld door aantal." }],
          theorie: "Formule: x̄ = Σx / n. Σ (sigma) = som-teken.",
          niveaus: { basis: "7,5. A.", simpeler: "(3+6+9+12)/4 = 30/4 = 7,5. A.", nogSimpeler: "7,5 = A." },
        },
      },
      {
        q: "Bereken de **mediaan** van: 2, 5, 8, 11, 14.",
        options: ["8","7","10","5"],
        answer: 0,
        wrongHints: [null, "Te weinig — niet middelste.", "Niet — gemiddelde benadering, niet exact middelste.", "Niet — dat is 2e element."],
        uitlegPad: {
          stappen: [{ titel: "Middelste bij oneven", tekst: "Vijf waarden op volgorde: 2, 5, **8**, 11, 14. De middelste = derde positie = **8**." }],
          woorden: [{ woord: "mediaan", uitleg: "Middelste waarde in een geordende reeks." }],
          theorie: "Cito-/HAVO-trucs: middelste positie = (n+1)/2. Voor n=5 → 3e positie. Voor n=7 → 4e positie.",
          niveaus: { basis: "8. A.", simpeler: "Middelste van 5 = 3e = 8. A.", nogSimpeler: "8 = A." },
        },
      },
      {
        q: "Bij een **scheve verdeling met uitschieters** is welk centrummaat beter?",
        options: ["Mediaan","Gemiddelde","Modus","Som"],
        answer: 0,
        wrongHints: [null, "Niet — gevoelig voor uitschieters.", "Soms — maar mediaan algemener bij continue data.", "Niet — geen centrummaat."],
        uitlegPad: {
          stappen: [{ titel: "Mediaan = robuust", tekst: "**Mediaan** is **niet beïnvloed** door uitschieters — alleen de middenwaarde telt. Gemiddelde wordt sterk getrokken. Bv: 1, 2, 3, 4, 100 → mediaan = 3, gemiddelde = 22." }],
          theorie: "Toepassing: inkomens, huizenprijzen, salaris-statistieken → mediaan gebruiken want enkele uitschieters (CEOs) verstoren gemiddelde.",
          niveaus: { basis: "Mediaan. A.", simpeler: "Mediaan negeert uitschieters = A.", nogSimpeler: "Mediaan = A." },
        },
      },
      {
        q: "Wat is de **modus** van: 2, 4, 4, 4, 7, 8?",
        options: ["4","2","8","Geen modus"],
        answer: 0,
        wrongHints: [null, "Niet — 2 komt 1 keer voor.", "Niet — komt 1 keer.", "Wel — 4 komt 3 keer voor."],
        uitlegPad: {
          stappen: [{ titel: "Vaakst voorkomend", tekst: "Aantal keren: 2 → 1x, 4 → **3x**, 7 → 1x, 8 → 1x. Modus = waarde met hoogste frequentie = **4**." }],
          woorden: [{ woord: "modus", uitleg: "Meest voorkomende waarde in dataset." }],
          niveaus: { basis: "4. A.", simpeler: "4 komt 3x voor = modus. A.", nogSimpeler: "4 = A." },
        },
      },
      {
        q: "Wat is de **IQR** (interkwartielafstand) van data met Q1=10, Q3=24?",
        options: ["14","34","17","24"],
        answer: 0,
        wrongHints: [null, "Niet — dat is Q1+Q3.", "Niet — dat is (Q1+Q3)/2 ≈ mediaan-schatting.", "Niet — dat is alleen Q3."],
        uitlegPad: {
          stappen: [{ titel: "IQR = Q3 − Q1", tekst: "**IQR = Q3 − Q1 = 24 − 10 = 14**. Beschrijft 'spreiding van middelste 50%' van data." }],
          woorden: [{ woord: "IQR", uitleg: "Interquartile Range = Q3 minus Q1 = breedte middelste helft data." }],
          theorie: "Uitschieter-regel: waarde < Q1 − 1,5·IQR of > Q3 + 1,5·IQR. In dit geval: < 10-21 = -11 of > 24+21 = 45.",
          niveaus: { basis: "14. A.", simpeler: "IQR = 24-10 = 14. A.", nogSimpeler: "14 = A." },
        },
      },
    ],
  },

  // ─── B. Spreiding + boxplot ───────────────────────────────
  {
    title: "Spreiding — standaardafwijking + boxplot",
    explanation:
      "Centrum-maten zeggen waar data 'zit'. **Spreidings-maten** zeggen hoe **verspreid** ze zijn.\n\n**Variatiebreedte (range)**:\n• Hoogste − laagste waarde.\n• Eenvoudig maar gevoelig voor uitschieters.\n• Voorbeeld: 3, 5, 8, 12, 100 → range = 100 − 3 = 97 (door uitschieter).\n\n**Standaardafwijking** (σ of s):\n• **Gemiddelde afstand** van elke waarde tot het gemiddelde.\n• Formule: σ = √(Σ(x-x̄)² / n).\n• HAVO/VWO: alleen interpreteren, vaak met **GR** (grafische rekenmachine) of formule-blad.\n• Kleine σ = data dichtbij gemiddelde. Grote σ = data verspreid.\n• Eenheid = zelfde als data (cm, kg, euro).\n\n**Variantie** (s² of σ²):\n• Standaardafwijking gekwadrateerd.\n• Wiskundig handiger maar geen logische eenheid (cm², kg², €²).\n• In wiskunde A: meestal eindstap voor standaardafwijking.\n\n**Boxplot** (doosdiagram):\n• Visualisatie van **kwartielen + uitschieters**.\n• Onderkant box = Q1. Streep in box = mediaan (Q2). Bovenkant box = Q3.\n• Whiskers (\"snorhaarjes\"): tot 1,5·IQR boven Q3 + onder Q1.\n• Stippen buiten whiskers = uitschieters.\n\n**Boxplot-interpretatie**:\n• Lange box = grote spreiding middelste 50%.\n• Streep niet in midden = scheve verdeling.\n• Veel stippen = veel uitschieters.\n\n**HAVO/VWO-toets-favoriet**:\n• 'Gegeven boxplot: lees mediaan af.'\n• 'Bereken IQR uit boxplot.'\n• 'Is data symmetrisch?' → kijk waar mediaan-streep in box zit.",
    checks: [
      {
        q: "Wat is de **range** (variatiebreedte) van: 8, 15, 22, 30, 40?",
        options: ["32","40","22","48"],
        answer: 0,
        wrongHints: [null, "Niet — dat is hoogste waarde, geen range.", "Niet — dat is mediaan.", "Niet — dat is hoogste + laagste."],
        uitlegPad: {
          stappen: [{ titel: "Range = max − min", tekst: "Hoogste = 40. Laagste = 8. Range = 40 − 8 = **32**." }],
          woorden: [{ woord: "range", uitleg: "Variatiebreedte = hoogste minus laagste waarde." }],
          niveaus: { basis: "32. A.", simpeler: "Range = max-min = 40-8 = 32. A.", nogSimpeler: "32 = A." },
        },
      },
      {
        q: "Wat betekent een **grote standaardafwijking**?",
        options: ["Data is sterk gespreid","Data zit dichtbij gemiddelde","Geen mediaan","Veel modussen"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — dat is kleine σ.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "σ = afstand tot gemiddelde", tekst: "**Grote σ** = waarden liggen ver van gemiddelde (verspreid). **Kleine σ** = waarden dichtbij gemiddelde (compact)." }],
          theorie: "Vergelijking: examen-cijfers klas A (σ=0,5) → iedereen ~hetzelfde. Klas B (σ=2) → grote verschillen.",
          niveaus: { basis: "Sterk gespreid. A.", simpeler: "Grote σ = verspreid = A.", nogSimpeler: "Verspreid = A." },
        },
      },
      {
        q: "In een **boxplot**: wat representeert de **lijn binnen de box**?",
        options: ["Mediaan (Q2)","Gemiddelde","Modus","Range"],
        answer: 0,
        wrongHints: [null, "Niet — gemiddelde apart, niet in boxplot.", "Niet relevant in boxplot.", "Niet — heel ander concept."],
        uitlegPad: {
          stappen: [{ titel: "Boxplot-onderdelen", tekst: "Boxplot bevat: **Q1** (onderkant box), **mediaan/Q2** (lijn IN box), **Q3** (bovenkant box), **whiskers** (1,5·IQR), **uitschieters** (stippen)." }],
          theorie: "Gemiddelde wordt NIET in boxplot getoond — alleen kwartielen + uitschieters.",
          niveaus: { basis: "Mediaan. A.", simpeler: "Lijn in box = mediaan = A.", nogSimpeler: "Mediaan = A." },
        },
      },
      {
        q: "Een dataset heeft een **gemiddelde 50, σ = 10**. Welke waarde is **typisch**?",
        options: ["55","100","5","200"],
        answer: 0,
        wrongHints: [null, "5σ boven gemiddelde = uitschieter.", "Veel onder gemiddelde, ~4,5σ.", "Extreme uitschieter."],
        uitlegPad: {
          stappen: [{ titel: "Binnen 1σ = typisch", tekst: "Waarden binnen 1σ van gemiddelde = typisch. Bereik: 50 ± 10 = [40, 60]. **55 valt erin** → typisch. 100 = 5σ boven gemiddelde = extreme uitschieter." }],
          theorie: "68% van normaalverdeelde data valt binnen 1σ van gemiddelde (zie volgende stap).",
          niveaus: { basis: "55. A.", simpeler: "55 binnen [40,60] = typisch = A.", nogSimpeler: "55 = A." },
        },
      },
      {
        q: "**Uitschieter-regel**: een waarde > Q3 + ___ · IQR is uitschieter.",
        options: ["1,5","2","3","1"],
        answer: 0,
        wrongHints: [null, "Niet — 2σ-regel is anders (normaal-verdeling).", "Niet — te strikt.", "Niet — te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Tukey's 1,5·IQR-regel", tekst: "**1,5 × IQR** boven Q3 of onder Q1 = uitschieter. Standaard in boxplots. Bv: Q3=30, IQR=10 → uitschieter > 30 + 15 = 45." }],
          theorie: "Cito-/HAVO-formule: vaak in examen — ken 1,5 als constante uit je hoofd.",
          niveaus: { basis: "1,5. A.", simpeler: "Boxplot-regel = 1,5·IQR = A.", nogSimpeler: "1,5 = A." },
        },
      },
    ],
  },

  // ─── C. Normaalverdeling ──────────────────────────────────
  {
    title: "Normaalverdeling — de klokvorm",
    explanation:
      "Veel natuurlijke data is **normaal verdeeld**: lengte, gewicht, examen-cijfers, IQ. Vorm = symmetrische **klok**.\n\n**Kenmerken normaalverdeling**:\n• **Symmetrisch** rond gemiddelde μ.\n• **Klokvormig**: piek in midden, dunner uitlopend naar buiten.\n• Volledig beschreven door **2 parameters**: μ (gemiddelde) + σ (standaardafwijking).\n• Geschreven: **N(μ, σ²)** of N(μ, σ).\n\n**68-95-99,7-regel** (zeer belangrijk voor examen):\n• **68%** van data ligt binnen **1σ** van gemiddelde: μ ± σ.\n• **95%** binnen **2σ**: μ ± 2σ.\n• **99,7%** binnen **3σ**: μ ± 3σ.\n• Voorbeeld: IQ N(100, 15) → 68% van mensen heeft IQ 85-115. 95% heeft IQ 70-130.\n\n**Z-score** (gestandaardiseerde score):\n• Z = (x − μ) / σ\n• Hoeveel σ ligt waarde van gemiddelde af?\n• Z = 0 → exact gemiddelde. Z = 2 → 2 standaarddeviaties boven gemiddelde.\n• Negatieve z = onder gemiddelde.\n• Gebruikt voor: vergelijking tussen verschillende verdelingen.\n\n**Kans uit normaalverdeling**:\n• P(X < a) = oppervlakte links van a onder klokcurve.\n• HAVO/VWO: bereken met **GR** (normalcdf) of **z-tabel**.\n• Bv: P(X < μ) = 0,5 (50% — symmetrie).\n• P(X < μ + σ) = 0,5 + 0,34 = 0,84 (68%-regel: 34% tussen μ en μ+σ).\n\n**Toepassingen**:\n• Examen-cijfers: gemiddelde 6,5 met σ = 1. Hoeveel % hoger dan 8?\n  - Z = (8-6,5)/1 = 1,5. P(Z > 1,5) ≈ 0,067 = 6,7%.\n• Lengte mannen NL: N(184, 7). Hoeveel % langer dan 200?\n  - Z = (200-184)/7 ≈ 2,3. P(Z > 2,3) ≈ 0,011 = 1,1%.",
    checks: [
      {
        q: "**68%** van normaal-verdeelde data ligt binnen __ standaarddeviaties van gemiddelde.",
        options: ["1","2","3","0,5"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 95%.", "Niet — dat is 99,7%.", "Niet — te weinig."],
        uitlegPad: {
          stappen: [{ titel: "1-2-3 regel", tekst: "**68-95-99,7-regel**: 68% binnen 1σ, 95% binnen 2σ, 99,7% binnen 3σ. Onthouden!" }],
          woorden: [{ woord: "68-95-99,7-regel", uitleg: "Empirische regel voor normaalverdeling — 68% binnen 1σ, 95% binnen 2σ, 99,7% binnen 3σ." }],
          theorie: "Cito-/HAVO-favoriet: ezelsbruggetje 68-95-99,7 of '1-2-3'.",
          niveaus: { basis: "1. A.", simpeler: "68% = 1σ. A.", nogSimpeler: "1 = A." },
        },
      },
      {
        q: "IQ heeft N(100, 15). Hoeveel % heeft IQ **tussen 85 en 115**?",
        options: ["68%","95%","50%","99,7%"],
        answer: 0,
        wrongHints: [null, "Niet — dat is binnen 2σ (70-130).", "Te weinig.", "Te veel — dat is binnen 3σ."],
        uitlegPad: {
          stappen: [{ titel: "Binnen 1σ", tekst: "μ = 100, σ = 15. Bereik 85-115 = μ ± σ. Volgens 68%-regel: **68%** ligt hier." }],
          theorie: "Cito-voorbeeld-pattern: IQ-vragen met N(100,15). Ook lengte N(170,8) of cijfers N(6,1).",
          niveaus: { basis: "68%. A.", simpeler: "85-115 = ±1σ = 68% = A.", nogSimpeler: "68% = A." },
        },
      },
      {
        q: "Examen N(6,5; σ=1). Wat is **z-score** voor cijfer 8?",
        options: ["1,5","2","8","0,5"],
        answer: 0,
        wrongHints: [null, "Niet — dat is z voor cijfer 8,5.", "Niet — dat is de score zelf.", "Niet — z voor cijfer 7."],
        uitlegPad: {
          stappen: [{ titel: "Z = (x-μ)/σ", tekst: "Z = (8 − 6,5) / 1 = **1,5**. Cijfer 8 ligt 1,5 standaarddeviatie boven gemiddelde." }],
          woorden: [{ woord: "z-score", uitleg: "Standaardscore — hoeveel σ een waarde van het gemiddelde afligt." }],
          theorie: "Toepassing: vergelijking verschillende vakken. Z=2 in NL en Z=1 in WI → in NL relatief beter gescoord.",
          niveaus: { basis: "1,5. A.", simpeler: "Z = (8-6,5)/1 = 1,5 = A.", nogSimpeler: "1,5 = A." },
        },
      },
      {
        q: "Welke kans is **P(Z < 0)** in standaard-normaalverdeling?",
        options: ["0,5","1","0","0,68"],
        answer: 0,
        wrongHints: [null, "Niet — niet alles ligt links van 0.", "Niet — niet niets.", "Niet — 0,68 is een ander pattern."],
        uitlegPad: {
          stappen: [{ titel: "Symmetrie rond 0", tekst: "Standaard-normaalverdeling (Z) heeft gemiddelde 0. Bij symmetrische verdeling ligt **50%** onder gemiddelde. Dus P(Z < 0) = **0,5**." }],
          theorie: "Idem: P(X < μ) = 0,5 voor elke normaalverdeling.",
          niveaus: { basis: "0,5. A.", simpeler: "P(Z<0) = helft = 0,5 = A.", nogSimpeler: "0,5 = A." },
        },
      },
      {
        q: "Wat zijn de **parameters** van een normaalverdeling?",
        options: ["μ (gemiddelde) en σ (standaardafwijking)","Q1 en Q3","Modus en mediaan","Min en max"],
        answer: 0,
        wrongHints: [null, "Geen normaalverdeling-parameters.", "Beschrijven centrum, geen volledige normaalverdeling.", "Onvolledig."],
        uitlegPad: {
          stappen: [{ titel: "N(μ, σ)", tekst: "Normaalverdeling wordt **volledig** beschreven door **μ** (gemiddelde, locatie van piek) en **σ** (spreiding, breedte van klok). Notatie: N(μ, σ) of N(μ, σ²)." }],
          niveaus: { basis: "μ en σ. A.", simpeler: "Normaal = N(μ,σ) = A.", nogSimpeler: "μ + σ = A." },
        },
      },
    ],
  },

  // ─── D. Regressie + correlatie ────────────────────────────
  {
    title: "Lineaire regressie + correlatie",
    explanation:
      "Wanneer **twee variabelen** (x en y) samenhangen — bv. lengte vs gewicht, studie-uren vs cijfer — gebruik je **regressie** + **correlatie**.\n\n**Correlatiecoëfficiënt** (r):\n• Tussen **−1 en +1**.\n• r = +1: perfect positief lineair verband (alle punten op stijgende lijn).\n• r = 0: geen lineair verband.\n• r = −1: perfect negatief verband (dalende lijn).\n• |r| > 0,7: sterke samenhang.\n• |r| 0,3-0,7: matige samenhang.\n• |r| < 0,3: zwakke / geen samenhang.\n• Berekend uit data via GR of formule (HAVO/VWO meestal GR).\n\n**Belangrijk**: correlatie ≠ oorzaak!\n• Hoge correlatie betekent NIET dat x → y veroorzaakt.\n• Voorbeeld: ijsverkoop + verdrinking-statistieken correleren positief — niet omdat ijs verdrinking veroorzaakt, maar omdat in zomer beide stijgen (gemeenschappelijke oorzaak: warmte).\n\n**Lineaire regressie-lijn** (y = ax + b):\n• Beste rechte lijn door datapunten.\n• **Helling a**: hoeveel y stijgt per eenheid x.\n• **Y-snijpunt b**: y-waarde als x = 0.\n• HAVO/VWO: bereken met GR (LinReg) of uit formule met x̄, ȳ, σ.\n\n**Voorspelling met regressie**:\n• Heb je y = 0,4x + 12, dan voor x = 30: y = 0,4·30 + 12 = 24.\n• Let op: voorspellen alleen binnen bereik van data (interpolatie). Buiten bereik = onbetrouwbaar (extrapolatie).\n\n**Scatterplot** (spreidingsdiagram):\n• Visualisatie van x-y paren als puntenwolk.\n• Lijngerecht patroon = lineaire correlatie.\n• Kromme = niet-lineair verband — regressie-lijn past niet.\n• Cluster zonder patroon = geen verband.\n\n**HAVO/VWO-toets-favoriet**:\n• 'Schat r uit deze scatterplot.' (visueel beoordelen)\n• 'Bereken voorspelling y bij gegeven x.'\n• 'Beoordeel of verband oorzakelijk is.'",
    checks: [
      {
        q: "Wat zegt **correlatiecoëfficiënt r = 0,9**?",
        options: ["Sterke positieve samenhang","Sterk negatief","Geen verband","Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Niet — positief is +, negatief is −.", "Niet — |r|=0,9 = sterk.", "Wel mogelijk, r tussen -1 en +1."],
        uitlegPad: {
          stappen: [{ titel: "r-interpretatie", tekst: "r = 0,9 → bijna +1 → **zeer sterke positieve** samenhang. Als x stijgt, stijgt y mee. Punten liggen dichtbij stijgende lijn." }],
          theorie: "Schaal: |r|>0,7 sterk, 0,3-0,7 matig, <0,3 zwak. Teken (+/-) bepaalt richting.",
          niveaus: { basis: "Sterk positief. A.", simpeler: "r = 0,9 = sterke positieve correlatie = A.", nogSimpeler: "Sterk + = A." },
        },
      },
      {
        q: "*'IJsverkoop en verdrinkingen correleren positief'* — wat is meest waarschijnlijk?",
        options: ["Gemeenschappelijke oorzaak (warmte)","IJs veroorzaakt verdrinking","Verdrinking veroorzaakt ijsverkoop","Toeval"],
        answer: 0,
        wrongHints: [null, "Onzin — geen causaal verband.", "Onzin.", "Onwaarschijnlijk — gerichte correlatie."],
        uitlegPad: {
          stappen: [{ titel: "Correlatie ≠ oorzaak", tekst: "Beide stijgen in zomer. **Warmte** is de gemeenschappelijke oorzaak. **Schijncorrelatie** — leerlingen moeten dit herkennen." }],
          woorden: [{ woord: "schijncorrelatie", uitleg: "Correlatie zonder oorzakelijk verband — door gemeenschappelijke factor." }],
          theorie: "Statistici: *'Correlation does not imply causation.'* Klassiek voorbeeld in HAVO-examens.",
          niveaus: { basis: "Gemeenschappelijke oorzaak. A.", simpeler: "Warmte = oorzaak van beide = A.", nogSimpeler: "Warmte = A." },
        },
      },
      {
        q: "Regressielijn **y = 2x + 5**. Wat is y als **x = 10**?",
        options: ["25","20","15","30"],
        answer: 0,
        wrongHints: [null, "Niet — vergeten +5 op te tellen.", "Niet — alleen +5 zonder 2x.", "Te veel — 2·12 + 5 = 29."],
        uitlegPad: {
          stappen: [{ titel: "Substitueren", tekst: "y = 2·10 + 5 = 20 + 5 = **25**." }],
          theorie: "Lineaire vergelijking: y = ax + b. a = helling, b = y-snijpunt.",
          niveaus: { basis: "25. A.", simpeler: "2·10+5 = 25 = A.", nogSimpeler: "25 = A." },
        },
      },
      {
        q: "**Helling** in y = ax + b betekent:",
        options: ["Hoeveel y stijgt per eenheid x","Y-waarde bij x=0","Gemiddelde van y","Maximum y"],
        answer: 0,
        wrongHints: [null, "Dat is b (y-snijpunt).", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "a = richtingscoëfficiënt", tekst: "**a** in y = ax + b is **helling/steilheid**. Bv. y = 2x + 3: x stijgt met 1 → y stijgt met 2. Negatieve a = dalende lijn." }],
          niveaus: { basis: "Stijging y per x-eenheid. A.", simpeler: "Helling = stijging per x = A.", nogSimpeler: "Helling = A." },
        },
      },
      {
        q: "Wat is veiliger: **interpolatie** of **extrapolatie**?",
        options: ["Interpolatie (binnen data-bereik)","Extrapolatie (buiten data-bereik)","Beide even goed","Geen van beide"],
        answer: 0,
        wrongHints: [null, "Niet — buiten bereik onbetrouwbaar.", "Verschil bestaat.", "Wel — interpolatie is betrouwbaar."],
        uitlegPad: {
          stappen: [{ titel: "Binnen bereik = veiliger", tekst: "**Interpolatie** (voorspellen binnen data-bereik) is **betrouwbaarder** dan extrapolatie. Extrapolatie buiten bereik kan compleet fout zijn — model kan niet meer lineair zijn op extremen." }],
          woorden: [{ woord: "interpolatie", uitleg: "Voorspellen binnen data-bereik." }, { woord: "extrapolatie", uitleg: "Voorspellen buiten data-bereik." }],
          theorie: "Voorbeeld: regressie lengte-leeftijd kinderen 4-16 jaar. Extrapolatie naar leeftijd 60 = onzin (mensen krimpen niet meer mee).",
          niveaus: { basis: "Interpolatie. A.", simpeler: "Binnen bereik = veiliger = A.", nogSimpeler: "Interpolatie = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — statistiek mix",
    explanation:
      "Mix van centrum + spreiding + normaalverdeling + regressie. HAVO/VWO-eindexamen-stijl.\n\nGebruik formules waar nodig:\n• x̄ = Σx / n\n• Z = (x − μ) / σ\n• y = ax + b\n\nVeel succes!",
    checks: [
      {
        q: "Welke centrummaat is **gevoelig voor uitschieters**?",
        options: ["Gemiddelde","Mediaan","Modus","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — juist robuust.", "Niet relevant — frequentie.", "Wel — gemiddelde dus."],
        uitlegPad: {
          stappen: [{ titel: "Gemiddelde = gevoelig", tekst: "Gemiddelde wordt direct beïnvloed door alle waarden — uitschieters tellen mee. Mediaan + modus niet." }],
          niveaus: { basis: "Gemiddelde. A.", simpeler: "Gemiddelde = uitschieter-gevoelig = A.", nogSimpeler: "Gemiddelde = A." },
        },
      },
      {
        q: "Lengte mannen N(184; 7). Hoeveel % is **groter dan 198**?",
        options: ["~2,5%","~5%","~50%","~16%"],
        answer: 0,
        wrongHints: [null, "Niet — dat is binnen 1σ uitschieter (84% < of 16%>).", "Wel groot deel — niet helft.", "Niet — dat is groter dan μ+σ."],
        uitlegPad: {
          stappen: [{ titel: "Z-truc", tekst: "Z = (198 − 184)/7 = 2. P(Z > 2) ≈ **2,5%** (uit 68-95-99,7: 95% binnen 2σ → 5% buiten → 2,5% boven)." }],
          theorie: "Cito-truc-cluster: P(Z > 1) ≈ 16%. P(Z > 2) ≈ 2,5%. P(Z > 3) ≈ 0,15%.",
          niveaus: { basis: "~2,5%. A.", simpeler: "198 = μ+2σ = top 2,5% = A.", nogSimpeler: "2,5% = A." },
        },
      },
      {
        q: "Een **scatterplot** toont punten in een **dalende lijn**. Wat is r?",
        options: ["Negatief","Positief","0","Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Positief = stijgende lijn.", "Geen lijn = 0.", "Wel mogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Dalend = negatieve correlatie", tekst: "Dalende lijn: als x stijgt, daalt y. **Negatieve correlatie**. r tussen −1 en 0. Sterk dalend → r ≈ −0,9." }],
          niveaus: { basis: "Negatief. A.", simpeler: "Dalend = r < 0 = A.", nogSimpeler: "Negatief = A." },
        },
      },
      {
        q: "Regressie y = −0,5x + 20. Bij **x = 8**, y = ?",
        options: ["16","24","12","28"],
        answer: 0,
        wrongHints: [null, "Niet — +0,5·8+20.", "Niet — vergeten teken.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Substitueren met negatieve helling", tekst: "y = −0,5·8 + 20 = −4 + 20 = **16**." }],
          niveaus: { basis: "16. A.", simpeler: "−0,5·8+20 = 16 = A.", nogSimpeler: "16 = A." },
        },
      },
      {
        q: "In een **boxplot**: linkerkant van de box (Q1) = 30, mediaan (Q2) = 50, rechterkant (Q3) = 60. Wat is **IQR**?",
        options: ["30","20","10","60"],
        answer: 0,
        wrongHints: [null, "Niet — dat is Q3 − mediaan.", "Niet — dat is alleen mediaan − Q1.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Q3 − Q1", tekst: "IQR = Q3 − Q1 = 60 − 30 = **30**." }],
          niveaus: { basis: "30. A.", simpeler: "IQR = 60-30 = 30 = A.", nogSimpeler: "30 = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const statistiekHavoVwo = {
  id: "statistiek-havo-vwo",
  title: "Statistiek (HAVO/VWO Wiskunde A)",
  emoji: "📊",
  level: "havo4-5-vwo",
  subject: "wiskunde",
  referentieNiveau: "havo-vwo-CSE",
  sloThema: "Wiskunde A — statistiek (HAVO/VWO eindexamen)",
  prerequisites: [
    { id: "lineaire-formules", title: "Lineaire formules", niveau: "klas3-vmbo-vwo" },
    { id: "kansrekening", title: "Kansrekening basis", niveau: "klas3-4" },
    { id: "tabellen-grafieken", title: "Tabellen + grafieken", niveau: "po-1F" },
  ],
  intro:
    "Statistiek voor HAVO/VWO Wiskunde A eindexamen. Centrum-maten (gemiddelde/mediaan/modus), spreiding (σ + IQR + boxplot), normaalverdeling (68-95-99,7-regel + z-scores), lineaire regressie + correlatie. ~15 min.",
  triggerKeywords: [
    "statistiek", "gemiddelde", "mediaan", "modus",
    "standaardafwijking", "spreiding", "boxplot",
    "kwartiel", "IQR", "uitschieter",
    "normaalverdeling", "normale verdeling", "klokcurve",
    "z-score", "68-95-99.7", "68-95-99,7",
    "correlatie", "correlatiecoëfficiënt", "scatterplot",
    "regressie", "lineaire regressie",
    "schijncorrelatie",
  ],
  chapters,
  steps,
};

export default statistiekHavoVwo;

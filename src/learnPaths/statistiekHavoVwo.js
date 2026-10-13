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
        wrongHints: [null, "6 is een van de twee middelste getallen. Voor het gemiddelde tel je alle vier op en deel je door 4.", "9 is het andere middelste getal. Hoe bereken je het gemiddelde van alle vier de getallen?", "30 is de som. Wat moet je nog doen om er een gemiddelde van te maken?"],
        uitlegPad: {
          stappen: [{ titel: "Som / aantal", tekst: "Som = 3 + 6 + 9 + 12 = 30. Aantal = 4. Gemiddelde = 30 / 4 = **7,5**." }],
          woorden: [{ woord: "gemiddelde", uitleg: "Som van waarden gedeeld door aantal." }],
          theorie: "Formule: x̄ = Σx / n. Σ (sigma) = som-teken.",
          niveaus: { basis: "7,5.", simpeler: "(3+6+9+12)/4 = 30/4 = 7,5.", nogSimpeler: "7,5" },
        },
      },
      {
        q: "Bereken de **mediaan** van: 2, 5, 8, 11, 14.",
        options: ["8","7","10","5"],
        answer: 0,
        wrongHints: [null, "7 staat niet eens in de rij. Welk getal staat bij 5 getallen precies in het midden?", "Te veel — 10 staat niet in het midden van de rij.", "5 is het tweede getal. Welke plek is de middelste bij 5 getallen?"],
        uitlegPad: {
          stappen: [{ titel: "Middelste bij oneven", tekst: "Vijf waarden op volgorde: 2, 5, **8**, 11, 14. De middelste = derde positie = **8**." }],
          woorden: [{ woord: "mediaan", uitleg: "Middelste waarde in een geordende reeks." }],
          theorie: "Cito-/HAVO-trucs: middelste positie = (n+1)/2. Voor n=5 → 3e positie. Voor n=7 → 4e positie.",
          niveaus: { basis: "8.", simpeler: "Middelste van 5 = 3e = 8.", nogSimpeler: "8" },
        },
      },
      {
        q: "Bij een **scheve verdeling met uitschieters** is welke centrummaat beter?",
        options: ["Mediaan","Gemiddelde","Modus","Gewogen gemiddelde"],
        answer: 0,
        wrongHints: [null, "Het gemiddelde rekent met álle waarden. Wat doet één extreme waarde met het gemiddelde?", "De modus zegt alleen wat het vaakst voorkomt — niet waar het midden van de data ligt.", "Een gewogen gemiddelde rekent nog steeds met alle waarden, dus ook met de uitschieters. Welke maat let alleen op het midden?"],
        uitlegPad: {
          stappen: [{ titel: "Mediaan = robuust", tekst: "**Mediaan** is **niet beïnvloed** door uitschieters — alleen de middenwaarde telt. Gemiddelde wordt sterk getrokken. Bv: 1, 2, 3, 4, 100 → mediaan = 3, gemiddelde = 22." }],
          theorie: "Toepassing: inkomens, huizenprijzen, salaris-statistieken → mediaan gebruiken want enkele uitschieters (CEOs) verstoren gemiddelde.",
          niveaus: { basis: "Mediaan.", simpeler: "Mediaan negeert uitschieters", nogSimpeler: "Mediaan" },
        },
      },
      {
        q: "Wat is de **modus** van: 2, 4, 4, 4, 7, 8?",
        options: ["4","2","8","Geen modus"],
        answer: 0,
        wrongHints: [null, "Hoe vaak komt 2 voor? Komt een ander getal vaker voor?", "8 is de grootste waarde. Is de modus het grootste getal of het getal dat het vaakst voorkomt?", "Er is wél een modus — tel hoe vaak elke waarde voorkomt."],
        uitlegPad: {
          stappen: [{ titel: "Vaakst voorkomend", tekst: "Aantal keren: 2 → 1x, 4 → **3x**, 7 → 1x, 8 → 1x. Modus = waarde met hoogste frequentie = **4**." }],
          woorden: [{ woord: "modus", uitleg: "Meest voorkomende waarde in dataset." }],
          niveaus: { basis: "4.", simpeler: "4 komt 3x voor = modus.", nogSimpeler: "4" },
        },
      },
      {
        q: "Wat is de **IQR** (interkwartielafstand) van data met Q1=10, Q3=24?",
        options: ["14","34","17","24"],
        answer: 0,
        wrongHints: [null, "34 = Q1 + Q3. De IQR is een afstand tussen twee kwartielen: tel je die op of trek je ze af?", "17 is het gemiddelde van Q1 en Q3. De IQR is een afstand: hoe ver liggen Q1 en Q3 uit elkaar?", "24 is Q3 zelf. Wat moet je er nog van aftrekken?"],
        uitlegPad: {
          stappen: [{ titel: "IQR = Q3 − Q1", tekst: "**IQR = Q3 − Q1 = 24 − 10 = 14**. Beschrijft 'spreiding van middelste 50%' van data." }],
          woorden: [{ woord: "IQR", uitleg: "Interquartile Range = Q3 minus Q1 = breedte middelste helft data." }],
          theorie: "Uitschieter-regel: waarde < Q1 − 1,5·IQR of > Q3 + 1,5·IQR. In dit geval: < 10-21 = -11 of > 24+21 = 45.",
          niveaus: { basis: "14.", simpeler: "IQR = 24-10 = 14.", nogSimpeler: "14" },
        },
      },
    ],
  },

  // ─── B. Spreiding + boxplot ───────────────────────────────
  {
    title: "Spreiding — standaardafwijking + boxplot",
    explanation:
      "Centrum-maten zeggen waar data 'zit'. **Spreidings-maten** zeggen hoe **verspreid** ze zijn.\n\n**Variatiebreedte (range)**:\n• Hoogste − laagste waarde.\n• Eenvoudig maar gevoelig voor uitschieters.\n• Voorbeeld: 3, 5, 8, 12, 100 → range = 100 − 3 = 97 (door uitschieter).\n\n**Standaardafwijking** (σ of s):\n• Een soort **gemiddelde afstand** van de waarden tot het gemiddelde.\n• Formule: σ = √(Σ(x-x̄)² / n).\n• HAVO/VWO: alleen interpreteren, vaak met **GR** (grafische rekenmachine) of formule-blad.\n• Kleine σ = data dichtbij gemiddelde. Grote σ = data verspreid.\n• Eenheid = zelfde als data (cm, kg, euro).\n\n**Variantie** (s² of σ²):\n• Standaardafwijking gekwadrateerd.\n• Handiger maar geen logische eenheid (cm², kg², €²).\n• In wiskunde A: meestal tussenstap voor standaardafwijking.\n\n**Boxplot** (doosdiagram):\n• Visualisatie van **kwartielen + uitschieters**.\n• Onderkant box = Q1. Streep in box = mediaan (Q2). Bovenkant box = Q3.\n• Whiskers (\"snorhaarjes\"): tot 1,5·IQR boven Q3 + onder Q1.\n• Stippen buiten whiskers = uitschieters.\n\n**Boxplot-interpretatie**:\n• Lange box = grote spreiding middelste 50%.\n• Streep niet in midden = scheve verdeling.\n• Veel stippen = veel uitschieters.\n\n**HAVO/VWO-toets-favoriet**:\n• 'Gegeven boxplot: lees mediaan af.'\n• 'Bereken IQR uit boxplot.'\n• 'Is data symmetrisch?' → kijk waar mediaan-streep in box zit.",
    checks: [
      {
        q: "Wat is de **range** (variatiebreedte) van: 8, 15, 22, 30, 40?",
        options: ["32","40","22","48"],
        answer: 0,
        wrongHints: [null, "40 is de hoogste waarde. Wat moet je er nog van aftrekken?", "22 is de mediaan, het middelste getal. De range gaat over de hoogste en de laagste waarde.", "48 = 40 + 8: je telde op. De range is een verschil."],
        uitlegPad: {
          stappen: [{ titel: "Range = max − min", tekst: "Hoogste = 40. Laagste = 8. Range = 40 − 8 = **32**." }],
          woorden: [{ woord: "range", uitleg: "Variatiebreedte = hoogste minus laagste waarde." }],
          niveaus: { basis: "32.", simpeler: "Range = max-min = 40-8 = 32.", nogSimpeler: "32" },
        },
      },
      {
        q: "Wat betekent een **grote standaardafwijking**?",
        options: ["Data is sterk gespreid","Data zit dichtbij gemiddelde","Het gemiddelde is groot","De steekproef is groot"],
        answer: 0,
        wrongHints: [null, "Als de data dicht bij het gemiddelde zit, is de spreiding klein. Hoort daar een grote of een kleine σ bij?", "De standaardafwijking zegt niets over hoe groot het gemiddelde is. Waar gaat σ wel over?", "Een grote steekproef geeft niet vanzelf een grote σ. Wat meet σ?"],
        uitlegPad: {
          stappen: [{ titel: "σ = afstand tot gemiddelde", tekst: "**Grote σ** = waarden liggen ver van gemiddelde (verspreid). **Kleine σ** = waarden dichtbij gemiddelde (compact)." }],
          theorie: "Vergelijking: examen-cijfers klas A (σ=0,5) → iedereen ~hetzelfde. Klas B (σ=2) → grote verschillen.",
          niveaus: { basis: "Sterk gespreid.", simpeler: "Grote σ = verspreid", nogSimpeler: "Verspreid" },
        },
      },
      {
        q: "In een **boxplot**: wat representeert de **lijn binnen de box**?",
        options: ["Mediaan (Q2)","Gemiddelde","Modus","Range"],
        answer: 0,
        wrongHints: [null, "Een boxplot is opgebouwd uit kwartielen. Is het gemiddelde een kwartiel?", "Een boxplot toont de kwartielen, niet wat het vaakst voorkomt. Welke waarde verdeelt de data in twee gelijke helften?", "De range zie je aan de lengte van de hele boxplot, van snor tot snor. Welke waarde verdeelt de data in twee gelijke helften?"],
        uitlegPad: {
          stappen: [{ titel: "Boxplot-onderdelen", tekst: "Boxplot bevat: **Q1** (onderkant box), **mediaan/Q2** (lijn IN box), **Q3** (bovenkant box), **whiskers** (1,5·IQR), **uitschieters** (stippen)." }],
          theorie: "Gemiddelde wordt NIET in boxplot getoond — alleen kwartielen + uitschieters.",
          niveaus: { basis: "Mediaan.", simpeler: "Lijn in box = mediaan", nogSimpeler: "Mediaan" },
        },
      },
      {
        q: "Een dataset heeft een **gemiddelde 50, σ = 10**. Welke waarde is **typisch**?",
        options: ["55","75","25","10"],
        answer: 0,
        wrongHints: [null, "75 ligt 2,5σ boven het gemiddelde. Valt dat nog binnen de gewone spreiding rond 50?", "25 ligt 2,5σ onder het gemiddelde. Hoeveel procent van de data ligt zó ver weg?", "10 is de standaardafwijking, geen waarde uit de data. Rond welk getal liggen de meeste waarden?"],
        uitlegPad: {
          stappen: [{ titel: "Binnen 1σ = typisch", tekst: "Waarden binnen 1σ van gemiddelde = typisch. Bereik: 50 ± 10 = [40, 60]. **55 valt erin** → typisch. 75 en 25 liggen 2,5σ van het gemiddelde af = zeldzaam, en 10 is σ zelf, geen datawaarde." }],
          theorie: "68% van normaalverdeelde data valt binnen 1σ van gemiddelde (zie volgende stap).",
          niveaus: { basis: "55.", simpeler: "55 binnen [40,60] = typisch", nogSimpeler: "55" },
        },
      },
      {
        q: "**Uitschieter-regel**: een waarde > Q3 + ___ · IQR is uitschieter.",
        options: ["1,5","2","3","1"],
        answer: 0,
        wrongHints: [null, "Met 2 haal je de σ-regel van de normaalverdeling erbij. Welke factor hoort bij de vaste uitschieterregel met de IQR?", "Met factor 3 vind je alleen de extreme uitschieters. Welke kleinere factor geldt voor gewone uitschieters?", "Met factor 1 noem je al gauw gewone waarden een uitschieter. Is de afgesproken factor groter of kleiner?"],
        uitlegPad: {
          stappen: [{ titel: "Tukey's 1,5·IQR-regel", tekst: "**1,5 × IQR** boven Q3 of onder Q1 = uitschieter. Standaard in boxplots. Bv: Q3=30, IQR=10 → uitschieter > 30 + 15 = 45." }],
          theorie: "Cito-/HAVO-formule: vaak in examen — ken 1,5 als constante uit je hoofd.",
          niveaus: { basis: "1,5.", simpeler: "Boxplot-regel = 1,5·IQR", nogSimpeler: "1,5" },
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
        wrongHints: [null, "Binnen 2σ ligt ongeveer 95%. Hoeveel σ hoort bij 68%?", "Binnen 3σ ligt ongeveer 99,7%. Hoeveel σ hoort bij 68%?", "Binnen 0,5σ ligt maar ongeveer 38%. Moet je voor 68% verder van het gemiddelde af?"],
        uitlegPad: {
          stappen: [{ titel: "1-2-3 regel", tekst: "**68-95-99,7-regel**: 68% binnen 1σ, 95% binnen 2σ, 99,7% binnen 3σ. Onthouden!" }],
          woorden: [{ woord: "68-95-99,7-regel", uitleg: "Empirische regel voor normaalverdeling — 68% binnen 1σ, 95% binnen 2σ, 99,7% binnen 3σ." }],
          theorie: "Cito-/HAVO-favoriet: ezelsbruggetje 68-95-99,7 of '1-2-3'.",
          niveaus: { basis: "1.", simpeler: "68% = 1σ.", nogSimpeler: "1" },
        },
      },
      {
        q: "IQ heeft N(100, 15). Hoeveel % heeft IQ **tussen 85 en 115**?",
        options: ["68%","95%","50%","99,7%"],
        answer: 0,
        wrongHints: [null, "95% hoort bij 2σ rond het gemiddelde: van 70 tot 130. Hoe ver liggen 85 en 115 van 100?", "50% is de helft onder het gemiddelde. Hier gaat het om 1σ aan beide kanten van 100.", "Te veel: 99,7% hoort bij 3σ, van 55 tot 145. Dat is veel breder dan 85 tot 115."],
        uitlegPad: {
          stappen: [{ titel: "Binnen 1σ", tekst: "μ = 100, σ = 15. Bereik 85-115 = μ ± σ. Volgens 68%-regel: **68%** ligt hier." }],
          theorie: "Toets-voorbeeldpatroon: IQ-vragen met N(100,15). Ook lengte N(170,8) of cijfers N(6,1).",
          niveaus: { basis: "68%.", simpeler: "85-115 = ±1σ = 68%", nogSimpeler: "68%" },
        },
      },
      {
        q: "Examen N(6,5; σ=1). Wat is **z-score** voor cijfer 8?",
        options: ["1,5","2","8","0,5"],
        answer: 0,
        wrongHints: [null, "z = 2 hoort bij cijfer 8,5. Hoeveel ligt 8 boven het gemiddelde 6,5?", "8 is het cijfer zelf. Een z-score zegt hoeveel σ het cijfer van het gemiddelde af ligt.", "z = 0,5 hoort bij cijfer 7. Hoeveel ligt 8 boven 6,5?"],
        uitlegPad: {
          stappen: [{ titel: "Z = (x-μ)/σ", tekst: "Z = (8 − 6,5) / 1 = **1,5**. Cijfer 8 ligt 1,5 standaarddeviatie boven gemiddelde." }],
          woorden: [{ woord: "z-score", uitleg: "Standaardscore — hoeveel σ een waarde van het gemiddelde afligt." }],
          theorie: "Toepassing: vergelijking verschillende vakken. Z=2 in NL en Z=1 in WI → in NL relatief beter gescoord.",
          niveaus: { basis: "1,5.", simpeler: "Z = (8-6,5)/1 = 1,5", nogSimpeler: "1,5" },
        },
      },
      {
        q: "Welke kans is **P(Z < 0)** in standaard-normaalverdeling?",
        options: ["0,5","1","0","0,68"],
        answer: 0,
        wrongHints: [null, "Bij kans 1 ligt álles links van 0. Waar ligt het midden van de standaardnormale verdeling?", "Bij kans 0 ligt er niets links van 0. Is de verdeling helemaal naar rechts geschoven?", "0,68 hoort bij het gebied tussen −1 en 1. Welk deel ligt links van het midden?"],
        uitlegPad: {
          stappen: [{ titel: "Symmetrie rond 0", tekst: "Standaard-normaalverdeling (Z) heeft gemiddelde 0. Bij symmetrische verdeling ligt **50%** onder gemiddelde. Dus P(Z < 0) = **0,5**." }],
          theorie: "Idem: P(X < μ) = 0,5 voor elke normaalverdeling.",
          niveaus: { basis: "0,5.", simpeler: "P(Z<0) = helft = 0,5", nogSimpeler: "0,5" },
        },
      },
      {
        q: "Wat zijn de **parameters** van een normaalverdeling?",
        options: ["μ (gemiddelde) en σ (standaardafwijking)","Q1 (eerste kwartiel) en Q3 (derde kwartiel)","Modus (vaakst) en mediaan (midden)","Minimum (laagst) en maximum (hoogst)"],
        answer: 0,
        wrongHints: [null, "Q1 en Q3 beschrijven een boxplot. Welke twee getallen leg je vast om een klokvorm te tekenen?", "Bij een normaalverdeling vallen modus en mediaan samen met het gemiddelde. Wat ontbreekt er dan nog om de breedte van de klok vast te leggen?", "Een normaalverdeling heeft geen vast minimum of maximum: de staarten lopen door. Welke twee getallen bepalen de klok?"],
        uitlegPad: {
          stappen: [{ titel: "N(μ, σ)", tekst: "Normaalverdeling wordt **volledig** beschreven door **μ** (gemiddelde, locatie van piek) en **σ** (spreiding, breedte van klok). Notatie: N(μ, σ) of N(μ, σ²)." }],
          niveaus: { basis: "μ en σ.", simpeler: "Normaal = N(μ,σ)", nogSimpeler: "μ + σ" },
        },
      },
    ],
  },

  // ─── D. Regressie + correlatie ────────────────────────────
  {
    title: "Lineaire regressie + correlatie",
    explanation:
      "Wanneer **twee variabelen** (x en y) samenhangen — bv. lengte vs gewicht, studie-uren vs cijfer — gebruik je **regressie** + **correlatie**.\n\n**Correlatiecoëfficiënt** (r):\n• Tussen **−1 en +1**.\n• r = +1: perfect positief lineair verband (alle punten op stijgende lijn).\n• r = 0: geen lineair verband.\n• r = −1: perfect negatief verband (dalende lijn).\n• |r| > 0,7: sterke samenhang.\n• |r| 0,3-0,7: matige samenhang.\n• |r| < 0,3: zwakke / geen samenhang.\n• Berekend uit data via GR of formule (HAVO/VWO meestal GR).\n\n**Belangrijk**: correlatie ≠ oorzaak!\n• Hoge correlatie betekent NIET dat x → y veroorzaakt.\n• Voorbeeld: ijsverkoop + verdrinking-statistieken correleren positief — niet omdat ijs verdrinking veroorzaakt, maar omdat in zomer beide stijgen (gemeenschappelijke oorzaak: warmte).\n\n**Lineaire regressie-lijn** (y = ax + b):\n• Beste rechte lijn door datapunten.\n• **Helling a**: hoeveel y stijgt per eenheid x.\n• **Y-snijpunt b**: y-waarde als x = 0.\n• HAVO/VWO: bereken met GR (LinReg) of uit formule met x̄, ȳ, σ.\n\n**Voorspelling met regressie**:\n• Heb je y = 0,4x + 12, dan voor x = 30: y = 0,4·30 + 12 = 24.\n• Let op: voorspellen alleen binnen bereik van data (interpolatie). Buiten bereik = onbetrouwbaar (extrapolatie).\n\n**Scatterplot** (spreidingsdiagram):\n• Visualisatie van x-y paren als puntenwolk.\n• Rechtlijnig patroon = lineaire correlatie.\n• Kromme = niet-lineair verband — regressie-lijn past niet.\n• Cluster zonder patroon = geen verband.\n\n**HAVO/VWO-toets-favoriet**:\n• 'Schat r uit deze scatterplot.' (visueel beoordelen)\n• 'Bereken voorspelling y bij gegeven x.'\n• 'Beoordeel of verband oorzakelijk is.'",
    checks: [
      {
        q: "Wat zegt **correlatiecoëfficiënt r = 0,9**?",
        options: ["Sterke positieve samenhang","Sterke negatieve samenhang","Zwakke positieve samenhang","Zwakke negatieve samenhang"],
        answer: 0,
        wrongHints: [null, "Niet — positief verband heeft een pluswaarde, negatief verband een minwaarde.", "Een waarde dicht bij 1 hoort niet bij een zwak verband. Waar liggen zwakke verbanden op de schaal van −1 tot 1?", "Kijk naar het teken van r en naar hoe dicht r bij 0 of bij 1 ligt."],
        uitlegPad: {
          stappen: [{ titel: "r-interpretatie", tekst: "r = 0,9 → bijna +1 → **zeer sterke positieve** samenhang. Als x stijgt, stijgt y mee. Punten liggen dichtbij stijgende lijn." }],
          theorie: "Schaal: |r|>0,7 sterk, 0,3-0,7 matig, <0,3 zwak. Teken (+/-) bepaalt richting.",
          niveaus: { basis: "Sterk positief.", simpeler: "r = 0,9 = sterke positieve correlatie", nogSimpeler: "Sterk +" },
        },
      },
      {
        q: "*'IJsverkoop en verdrinkingen correleren positief'* — wat is meest waarschijnlijk?",
        options: ["Een derde factor: warm weer laat beide stijgen","Oorzaak: met een volle maag zwemmen is riskant","Toeval: met meer metingen verdwijnt het verband","Oorzaak: suiker in ijs maakt zwemmers sneller moe"],
        answer: 0,
        wrongHints: [null, "Een correlatie bewijst geen oorzaak-gevolg. Welke andere verklaringen voor een correlatie ken je?", "Dit verband komt elke zomer terug, en in veel landen. Past dat bij toeval?", "Ook dit is een oorzaak-gevolg-verklaring die niet uit de cijfers volgt. In welke maanden stijgen beide cijfers?"],
        uitlegPad: {
          stappen: [{ titel: "Correlatie ≠ oorzaak", tekst: "Beide stijgen in zomer. **Warmte** is de gemeenschappelijke oorzaak. **Schijncorrelatie** — leerlingen moeten dit herkennen." }],
          woorden: [{ woord: "schijncorrelatie", uitleg: "Correlatie zonder oorzakelijk verband — door gemeenschappelijke factor." }],
          theorie: "Statistici: *'Correlation does not imply causation.'* Klassiek voorbeeld in HAVO-examens.",
          niveaus: { basis: "Gemeenschappelijke oorzaak.", simpeler: "Warmte = oorzaak van beide", nogSimpeler: "Warmte" },
        },
      },
      {
        q: "Regressielijn **y = 2x + 5**. Wat is y als **x = 10**?",
        options: ["25","20","15","30"],
        answer: 0,
        wrongHints: [null, "Niet — de formule heeft twee termen; heb je ze allebei gebruikt?", "Niet — je hebt x wel opgeteld, maar niet met 2 vermenigvuldigd.", "30 = 2 · (10 + 5). Mag je de 5 ook met 2 vermenigvuldigen?"],
        uitlegPad: {
          stappen: [{ titel: "Substitueren", tekst: "y = 2·10 + 5 = 20 + 5 = **25**." }],
          theorie: "Lineaire vergelijking: y = ax + b. a = helling, b = y-snijpunt.",
          niveaus: { basis: "25.", simpeler: "2·10+5 = 25", nogSimpeler: "25" },
        },
      },
      {
        q: "**Helling** in y = ax + b betekent:",
        options: ["Hoeveel y stijgt per eenheid x","Waar de lijn de y-as snijdt","Hoeveel x stijgt per eenheid y","Waar de lijn de x-as snijdt"],
        answer: 0,
        wrongHints: [null, "Het snijpunt met de y-as is b. Wat geeft a aan?", "Je hebt x en y verwisseld. Wat verandert er in y = ax + b als x met 1 toeneemt?", "Het snijpunt met de x-as vind je door y = 0 te stellen. Dat is niet a."],
        uitlegPad: {
          stappen: [{ titel: "a = richtingscoëfficiënt", tekst: "**a** in y = ax + b is **helling/steilheid**. Bv. y = 2x + 3: x stijgt met 1 → y stijgt met 2. Negatieve a = dalende lijn." }],
          niveaus: { basis: "Stijging y per x-eenheid.", simpeler: "Helling = stijging per x", nogSimpeler: "Helling" },
        },
      },
      {
        q: "Wat is veiliger: **interpolatie** of **extrapolatie**?",
        options: ["Interpolatie (binnen data-bereik)","Extrapolatie (buiten data-bereik)","Beide even goed","Geen van beide"],
        answer: 0,
        wrongHints: [null, "Buiten je meetgebied weet je niet of het verband nog doorloopt. Is dat veilig?", "Bij de ene voorspel je tussen gemeten punten, bij de andere daarbuiten. Is dat even betrouwbaar?", "Binnen het gemeten gebied heb je data aan beide kanten. Is een voorspelling daar ook onbetrouwbaar?"],
        uitlegPad: {
          stappen: [{ titel: "Binnen bereik = veiliger", tekst: "**Interpolatie** (voorspellen binnen data-bereik) is **betrouwbaarder** dan extrapolatie. Extrapolatie buiten bereik kan compleet fout zijn — model kan niet meer lineair zijn op extremen." }],
          woorden: [{ woord: "interpolatie", uitleg: "Voorspellen binnen data-bereik." }, { woord: "extrapolatie", uitleg: "Voorspellen buiten data-bereik." }],
          theorie: "Voorbeeld: regressie lengte-leeftijd kinderen 4-16 jaar. Extrapolatie naar leeftijd 60 = onzin (volwassenen groeien niet meer door).",
          niveaus: { basis: "Interpolatie.", simpeler: "Binnen bereik = veiliger", nogSimpeler: "Interpolatie" },
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
        wrongHints: [null, "Bij de mediaan kijk je alleen naar het middelste getal. Verandert dat als de grootste waarde nóg groter wordt?", "De modus is de waarde die het vaakst voorkomt. Verandert die door één extreme waarde?", "Wel — denk na welke maat met álle waarden rekent."],
        uitlegPad: {
          stappen: [{ titel: "Gemiddelde = gevoelig", tekst: "Gemiddelde wordt direct beïnvloed door alle waarden — uitschieters tellen mee. Mediaan + modus niet." }],
          niveaus: { basis: "Gemiddelde.", simpeler: "Gemiddelde = uitschieter-gevoelig", nogSimpeler: "Gemiddelde" },
        },
      },
      {
        q: "Lengte mannen N(184; 7). Hoeveel % is **groter dan 198**?",
        options: ["~2,5%","~5%","~50%","~16%"],
        answer: 0,
        wrongHints: [null, "Niet — 5% ligt buiten 2σ aan béide kanten samen; je zoekt alleen de bovenkant.", "Niet — 50% is groter dan het gemiddelde (184), niet dan 198.", "16% hoort bij langer dan μ + σ = 191. Hoeveel σ ligt 198 boven 184?"],
        uitlegPad: {
          stappen: [{ titel: "Z-truc", tekst: "Z = (198 − 184)/7 = 2. P(Z > 2) ≈ **2,5%** (uit 68-95-99,7: 95% binnen 2σ → 5% buiten → 2,5% boven)." }],
          theorie: "Toets-truc-cluster: P(Z > 1) ≈ 16%. P(Z > 2) ≈ 2,5%. P(Z > 3) ≈ 0,15%.",
          niveaus: { basis: "~2,5%.", simpeler: "198 = μ+2σ = top 2,5%", nogSimpeler: "2,5%" },
        },
      },
      {
        q: "Een **scatterplot** toont punten in een **dalende lijn**. Wat is r?",
        options: ["Negatief","Positief","0","Groter dan 1"],
        answer: 0,
        wrongHints: [null, "Bij een positieve r stijgen de punten. Wat doen de punten hier?", "r = 0 betekent geen lineair verband. Zie je hier wel een lijn?", "r ligt altijd tussen −1 en 1. En welk teken hoort bij een dalende lijn?"],
        uitlegPad: {
          stappen: [{ titel: "Dalend = negatieve correlatie", tekst: "Dalende lijn: als x stijgt, daalt y. **Negatieve correlatie**. r tussen −1 en 0. Sterk dalend → r ≈ −0,9." }],
          niveaus: { basis: "Negatief.", simpeler: "Dalend = r < 0", nogSimpeler: "Negatief" },
        },
      },
      {
        q: "Regressie y = −0,5x + 20. Bij **x = 8**, y = ?",
        options: ["16","24","12","28"],
        answer: 0,
        wrongHints: [null, "24 = 0,5 · 8 + 20: je rekende met +0,5. Wat doet het minteken voor 0,5?", "12 = 20 − 8: je vermenigvuldigde 8 niet met 0,5.", "Je telde 8 bij 20 op. Wat gebeurt er met de factor −0,5?"],
        uitlegPad: {
          stappen: [{ titel: "Substitueren met negatieve helling", tekst: "y = −0,5·8 + 20 = −4 + 20 = **16**." }],
          niveaus: { basis: "16.", simpeler: "−0,5·8+20 = 16", nogSimpeler: "16" },
        },
      },
      {
        q: "In een **boxplot**: linkerkant van de box (Q1) = 30, mediaan (Q2) = 50, rechterkant (Q3) = 60. Wat is **IQR**?",
        options: ["30","20","10","60"],
        answer: 0,
        wrongHints: [null, "20 = mediaan − Q1. De IQR loopt van Q1 tot Q3: welke twee waarden horen daarbij?", "10 = Q3 − mediaan, maar de IQR beslaat de hele box. Van welke tot welke waarde loopt die?", "60 is Q3 zelf. De IQR is een verschil: welke twee kwartielen trek je van elkaar af?"],
        uitlegPad: {
          stappen: [{ titel: "Q3 − Q1", tekst: "IQR = Q3 − Q1 = 60 − 30 = **30**." }],
          niveaus: { basis: "30.", simpeler: "IQR = 60-30 = 30", nogSimpeler: "30" },
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

// Leerpad: Verandering + groei — HAVO/VWO Wiskunde A
// Lineair, exponentieel, logistisch model. Eindexamen-CSE-stof.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  lineair: "#42a5f5",
  exp: "#ef5350",
  log: "#ab47bc",
  helling: "#66bb6a",
  highlight: "#ffd54f",
};

const stepEmojis = ["📏", "📈", "🔢", "🌱", "🏆"];

const chapters = [
  { letter: "A", title: "Lineair model", emoji: "📏", from: 0, to: 0 },
  { letter: "B", title: "Exponentieel model", emoji: "📈", from: 1, to: 1 },
  { letter: "C", title: "Logaritmes + halveringstijd", emoji: "🔢", from: 2, to: 2 },
  { letter: "D", title: "Logistisch + andere modellen", emoji: "🌱", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Lineair model ─────────────────────────────────────
  {
    title: "Lineair model — gelijke toename",
    explanation:
      "**Lineaire groei**: per tijdseenheid stijgt of daalt iets met een **vast bedrag** (absolute toename).\n\n**Formule**: y = a + b·x\n• a = startwaarde (y bij x=0).\n• b = richtingscoëfficiënt (helling) = toename per tijdseenheid.\n• x = tijd of onafhankelijke variabele.\n\n**Voorbeelden**:\n• Spaarrekening met €50 per maand: y = 100 + 50·x (start €100, +€50/maand).\n• Mobiel-abonnement: y = 15 + 0,20·x (vast €15 + €0,20/min belminuut).\n• Boom groeit elk jaar 20 cm: y = 100 + 20·x.\n\n**Herkenning lineair**:\n• Tabel: verschillen tussen opvolgende y-waarden zijn **constant**.\n  - x: 1, 2, 3, 4\n  - y: 5, 8, 11, 14 → verschillen 3, 3, 3 → lineair, b=3.\n• Grafiek: **rechte lijn**.\n• Verbaal: 'per X krijgt erbij/eraf'.\n\n**Berekenen b uit twee punten** (x1, y1) en (x2, y2):\nb = (y2 − y1) / (x2 − x1)\n\n**Voorbeeld**: punten (2, 10) en (5, 22).\nb = (22 − 10) / (5 − 2) = 12/3 = 4.\nDan a: 10 = a + 4·2 → a = 2.\nFormule: y = 2 + 4·x.\n\n**Negatieve helling** (b<0): daling.\n• Bv. auto-waarde verliest €1500/jaar: y = 25000 − 1500·x.\n\n**Lineair ↔ procentueel verwarring**:\n• Lineair = vast bedrag erbij.\n• Procentueel = vast percentage = exponentieel (volgende stap).\n• Bij '5% per jaar erbij' is het **niet** lineair! Zelfs als grafiek voor korte tijd lijkt op rechte lijn.\n\n**Toepassingen**:\n• Salarisstijging vast bedrag per jaar.\n• Verbruik (kWh per maand redelijk constant).\n• Afschrijving lineair vs exponentieel.\n• Cito-context: bevolkingsgrafieken bij stabiele groei.\n\n**Extrapolatie + interpolatie**:\n• **Interpolatie**: waarden BINNEN data-bereik schatten via formule.\n• **Extrapolatie**: waarden BUITEN data-bereik schatten (risicovol — patronen kunnen veranderen).\n• Bij lineair extrapoleren: niet eindeloos doorgaan. Bv: kind groeit lineair tot 18, daarna stopt.\n\n**Verschil-met-richting-coefficient (gemiddelde verandering)**:\nVoor niet-lineaire functies: gem.verandering tussen x=a en x=b = (f(b) − f(a)) / (b − a) = **helling van koorde**.",
    checks: [
      {
        q: "Bij **lineaire groei** is welke eigenschap constant?",
        options: ["Absolute toename per stap","Procentuele toename","Beide","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — dat is exponentieel.", "Niet — een van twee.", "Wel constant."],
        uitlegPad: {
          stappen: [{ titel: "Vast bedrag erbij", tekst: "**Lineair**: elke stap **zelfde bedrag** erbij (of eraf). Bv +€50/maand spaaren. Procentueel (5%/jaar) is exponentieel, niet lineair." }],
          theorie: "Cito-favoriet om te onderscheiden: 'is dit lineair of exponentieel?' → kijk naar verschillen vs procenten in tabel.",
          niveaus: { basis: "Absolute toename. A.", simpeler: "Lineair = vast bedrag erbij = A.", nogSimpeler: "Vast = A." },
        },
      },
      {
        q: "Tabel: x: 1,2,3,4 | y: 7, 11, 15, 19. **Formule**?",
        options: ["y = 3 + 4x","y = 7 + 4x","y = 7 + 11x","y = 4 + 3x"],
        answer: 0,
        wrongHints: [null, "Niet — y(1)=11 dan, ≠ 7.", "Onmogelijk.", "Niet — y(1)=7 niet correct."],
        uitlegPad: {
          stappen: [
            { titel: "Verschillen", tekst: "Verschillen: 11-7=4, 15-11=4, 19-15=4. Constant 4 → lineair met **b=4**." },
            { titel: "Start bepalen", tekst: "y(1) = 7 = a + 4·1 → a = 3. **Formule: y = 3 + 4x**." },
            { titel: "Check", tekst: "y(2) = 3 + 8 = 11 ✓. y(4) = 3 + 16 = 19 ✓." },
          ],
          niveaus: { basis: "y = 3 + 4x. A.", simpeler: "b=4, a=3, y=3+4x = A.", nogSimpeler: "3+4x = A." },
        },
      },
      {
        q: "Auto kost nu €20.000, verliest **€2000/jaar lineair**. Waarde over 5 jaar?",
        options: ["€10.000","€18.000","€2000","€0"],
        answer: 0,
        wrongHints: [null, "Niet — slechts 1 jaar.", "Niet — wel over.", "Niet zo snel."],
        uitlegPad: {
          stappen: [{ titel: "y = 20000 − 2000·t", tekst: "t=5: y = 20000 − 2000·5 = 20000 − 10000 = **€10.000**. Lineaire afschrijving." }],
          theorie: "Praktijk: vooral nieuwe auto's verliezen exponentieel (eerste jaar veel). Lineair is een vereenvoudiging.",
          niveaus: { basis: "€10.000. A.", simpeler: "20000−2000·5=10000 = A.", nogSimpeler: "10k = A." },
        },
      },
      {
        q: "Tussen (1, 5) en (4, 14). **Helling b**?",
        options: ["3","9","2","4,5"],
        answer: 0,
        wrongHints: [null, "Niet — alleen Δy, niet ÷Δx.", "Niet correct.", "Niet — 9/3=3."],
        uitlegPad: {
          stappen: [{ titel: "b = Δy/Δx", tekst: "b = (14−5) / (4−1) = 9/3 = **3**." }],
          niveaus: { basis: "3. A.", simpeler: "9/3=3 = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Lineair model voor lange-termijn-projecties is **risicovol** omdat:",
        options: ["Patronen veranderen vaak buiten data-bereik","Te complex","Geen rekenkracht","Verboden"],
        answer: 0,
        wrongHints: [null, "Niet — juist eenvoudig.", "Niet relevant.", "Niet — wordt gebruikt."],
        uitlegPad: {
          stappen: [{ titel: "Extrapolatie-risico", tekst: "Lineair past kort meetbaar bereik vaak goed, maar **extrapolatie** buiten dat bereik = risicovol omdat patroon kan kantelen (capaciteit, saturatie, technologische verandering). Bevolking ooit lineair gegroeid maar nu stagnatie." }],
          theorie: "Klassieker: Malthusiaans lineair voedsel + exp.bevolking → catastrofe. In praktijk bleek voedselgroei ook exp. door techniek.",
          niveaus: { basis: "Patroon verandert. A.", simpeler: "Extrapolatie risico = A.", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── B. Exponentieel model ────────────────────────────────
  {
    title: "Exponentieel model — gelijke factor",
    explanation:
      "**Exponentiële groei**: per tijdseenheid wordt iets met een **vast percentage** of **vaste factor** vermenigvuldigd (relatieve toename).\n\n**Formule**: y = a · b^x\n• a = startwaarde (y bij x=0).\n• b = **groeifactor** per tijdseenheid.\n• x = tijd.\n\n**Groeifactor b berekenen** uit groei-percentage p%:\n• Groei: b = 1 + p/100.\n• Afname: b = 1 − p/100.\n\n**Voorbeelden**:\n• Spaargeld 3% rente per jaar: y = 1000 · 1,03^x.\n• Bevolking groeit 1,5%/jaar: P = P₀ · 1,015^x.\n• Auto verliest 20% per jaar: y = 25000 · 0,80^x.\n• Bacterie verdubbelt per uur: y = 1 · 2^x.\n• Radio-actief verval, halveringstijd 5 jaar: y = a · 0,5^(t/5).\n\n**Herkenning exponentieel**:\n• Tabel: **quotiënten** tussen opvolgende y-waarden zijn constant.\n  - x: 1, 2, 3, 4\n  - y: 6, 12, 24, 48 → quotiënten 2, 2, 2 → exp met b=2.\n• Grafiek: **kromme** die steeds steiler stijgt (b>1) of asymptotisch naar 0 daalt (0<b<1).\n• Op semi-log-papier (log-as): rechte lijn.\n\n**Verdubbelingstijd**:\nT_v = log(2) / log(b) ≈ 0,301 / log(b).\n• Voorbeeld: groei 7%/jaar → b=1,07 → T_v ≈ 10,3 jaar.\n• **Vuistregel 70**: T_v ≈ 70/p (jaren) bij groei van p%. Bv: 7% → 10 jaar.\n\n**Halveringstijd**:\nT_h = log(0,5) / log(b) = log(2) / log(1/b).\n• Voor afname b=0,8 (20% verlies/jaar): T_h ≈ 3,1 jaar.\n\n**Berekenen b uit twee waarnemingen**:\nb = (y2/y1)^(1/(x2−x1)).\n• Voorbeeld: x=2, y=10; x=5, y=80. b = (80/10)^(1/3) = 8^(1/3) = 2.\n\n**Exponentieel vs lineair vergelijken**:\n• Klein interval: lijkt op elkaar.\n• Lang interval: exponentieel domineert (loopt enorm uit).\n• Bv: lineair 1+5x na 20 jaar = 101. Exp 1·1,05^20 ≈ 2,65 (klein bij lage rente).\n• Bv: 1·1,10^20 ≈ 6,73. Bij 50 jaar 1,10^50 ≈ 117.\n\n**Continue groei (e^kt)**:\n• Bij continue (i.p.v. discrete) groei: y = a · e^(k·t) waarbij k = continue groeisnelheid.\n• Verband: b = e^k → k = ln(b).\n• Voorbeeld: k=0,05 → b ≈ 1,0513 → ~5,13% per jaar.\n\n**Toepassingen exp groei**:\n• Rente op rente (samengestelde rente).\n• Bevolkingsgroei (Malthus).\n• Bacterien-, virus-spread (pandemie).\n• Inflatie cumulatief.\n• Moore's wet (chip-transistors verdubbelen ~2 jaar).\n\n**Toepassingen exp daling**:\n• Radioactief verval.\n• Medicijn-uitscheiding in bloed.\n• Auto-/inventaris-afschrijving exp.\n• Daling temperatuur naar kamer-T (Newtons koeling).\n• Cooling carrière-loonvraag.",
    checks: [
      {
        q: "Bij **5% rente per jaar** is de groeifactor:",
        options: ["1,05","0,05","5","0,95"],
        answer: 0,
        wrongHints: [null, "Niet — moet 1+...", "Niet — factor.", "Tegenovergesteld — afname."],
        uitlegPad: {
          stappen: [{ titel: "b = 1 + p/100", tekst: "5% groei → **b = 1 + 0,05 = 1,05**. Elk jaar vermenigvuldigt waarde met 1,05.\n\n€100 → na 1 jaar €105 → na 2 jaar €110,25 → na 10 jaar €162,89." }],
          niveaus: { basis: "1,05. A.", simpeler: "5% = ×1,05 = A.", nogSimpeler: "1,05 = A." },
        },
      },
      {
        q: "Tabel: x:1,2,3,4 | y: 4, 8, 16, 32. Welk model?",
        options: ["Exponentieel met b=2","Lineair met b=4","Logistisch","Kwadratisch"],
        answer: 0,
        wrongHints: [null, "Niet — verschillen niet constant.", "Niet — quotiënten constant.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "Quotiënten = constant", tekst: "8/4=2, 16/8=2, 32/16=2 → **factor 2 per stap = exponentieel b=2**. Formule: y = 2 · 2^x (a=2, b=2). Check: y(1)=4 ✓.\n\nKlassiek 'verdubbel-elke-stap'-patroon (bacteriegroei, schaakbord-graan-legende)." }],
          niveaus: { basis: "Exp b=2. A.", simpeler: "Quotiënten 2 = exp = A.", nogSimpeler: "Exp = A." },
        },
      },
      {
        q: "**Verdubbelingstijd** bij 7% groei?",
        options: ["~10 jaar","~5 jaar","~70 jaar","~1 jaar"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Veel te snel."],
        uitlegPad: {
          stappen: [{ titel: "Vuistregel 70", tekst: "**Vuistregel 70**: T_v ≈ 70 / groei% = 70/7 = **10 jaar**. Werkt nauwkeurig voor kleine groei-%. Exact: T_v = ln(2)/ln(1,07) ≈ 10,24." }],
          theorie: "Memo: 1%/jaar → 70 jaar verdubbeling. 7% → 10 jaar. 10% → 7 jaar.",
          niveaus: { basis: "10 jaar. A.", simpeler: "70/7=10 = A.", nogSimpeler: "10 = A." },
        },
      },
      {
        q: "Auto **20%/jaar afnemen**, start €25.000. Na 2 jaar?",
        options: ["€16.000","€15.000","€10.000","€20.000"],
        answer: 0,
        wrongHints: [null, "Lijkt — maar exp anders.", "Niet — te laag.", "Niet — lineair zou 21000."],
        uitlegPad: {
          stappen: [{ titel: "y = 25000 · 0,8²", tekst: "Groeifactor 0,8. y = 25000 · 0,80² = 25000 · 0,64 = **€16.000**." }],
          theorie: "Lineair 'min €5000/jaar' zou na 2 jaar 15000 zijn. Exponentieel is hier nipt hoger (16000) omdat de daling ‘op kleiner bedrag’ wordt toegepast.",
          niveaus: { basis: "16000. A.", simpeler: "25000·0,8²=16000 = A.", nogSimpeler: "16k = A." },
        },
      },
      {
        q: "Welk wereld-fenomeen heeft **exponentiële groei** in 20e-21e eeuw?",
        options: ["Computer-rekenkracht (Moore's wet)","Lineaire bevolkingsgroei","Onveranderd","Wereld-temperatuur"],
        answer: 0,
        wrongHints: [null, "Niet — exp tot ~1970.", "Niet relevant.", "Niet — wel lineaire stijging recent."],
        uitlegPad: {
          stappen: [{ titel: "Moore's wet", tekst: "**Moore's wet** (1965): aantal transistors per chip verdubbelt ~elke 2 jaar. **Exponentiële groei**. Klopte ~50 jaar — sinds 2020 vertraagd vanwege fysieke grenzen (atomaire schaal). Vandaar specialisatie GPU/AI/quantum als opvolger." }],
          theorie: "Andere exp: internet-gebruikers tot ~2010, GenAI-modellen 2017-2024, zonne-energie-prijs dalend exp.",
          niveaus: { basis: "Moore. A.", simpeler: "Computer = Moore = A.", nogSimpeler: "Moore = A." },
        },
      },
    ],
  },

  // ─── C. Logaritmes + halveringstijd ───────────────────────
  {
    title: "Logaritmes — terugrekenen exponenten",
    explanation:
      "**Logaritme** = inverse van exponent. Beantwoord vraag: 'tot welke macht moet ik b verheffen om x te krijgen?'\n\n**Notatie**: log_b(x) = exponent. Op CSE meestal log_10 (gewone log) of ln (natuurlijke log, basis e).\n\n• log(1000) = 3 (want 10³ = 1000).\n• log(100) = 2.\n• log(10) = 1.\n• log(1) = 0.\n• log(0,1) = −1.\n\n**Rekenregels** logaritmes:\n• log(a · b) = log(a) + log(b) — vermenigvuldigen → optellen.\n• log(a/b) = log(a) − log(b) — delen → aftrekken.\n• log(a^n) = n · log(a) — macht naar voren.\n• log_b(b) = 1, log_b(1) = 0.\n• Basis-conversie: log_b(x) = log(x) / log(b).\n\n**Toepassingen logaritmen**:\n\n**1. Verdubbelings- en halveringstijd berekenen**:\n• T_v = log(2) / log(b) bij groei.\n• T_h = log(2) / log(1/b) bij afname.\n• Voorbeeld: 3% groei → T_v = log(2) / log(1,03) ≈ 0,301 / 0,01284 ≈ 23,4 jaar.\n\n**2. 'Wanneer bereik ik...?'**:\nKlassieke Cito-vraag: 'na hoeveel jaar zijn we boven X?'\n• Formule: y = a · b^t. Oplossen t bij gegeven y.\n• Voorbeeld: spaargeld €1000 bij 5%/jaar, wanneer €2500?\n• 2500 = 1000 · 1,05^t → 2,5 = 1,05^t.\n• Log nemen: log(2,5) = t · log(1,05) → t = log(2,5)/log(1,05) ≈ 0,398/0,0212 ≈ 18,8 jaar.\n\n**3. pH (chemie)**:\n• pH = −log[H₃O⁺].\n• Logaritmische schaal voor zuurgraad.\n• pH 3 → 10× zuurder dan pH 4.\n\n**4. Geluidssterkte (decibel)**:\n• dB = 10 · log(I/I₀).\n• Logaritmische schaal voor geluid.\n• 60 dB = 100× sterker dan 40 dB.\n\n**5. Aardbevingen (Richter)**:\n• Logaritmisch — M7 is 10× sterker dan M6 (amplitude).\n\n**6. Sterren-magnitude (astronomie)**:\n• Helderheid op log-schaal.\n• Magnitude 1 ster is 100× helderder dan magnitude 6.\n\n**Halveringstijd radioactief verval**:\n• Elk type radio-actief element heeft eigen halveringstijd.\n• C-14 (koolstof-14): 5730 jaar — gebruikt voor datering archeologie.\n• U-238: 4,5 miljard jaar — datering steen.\n• Jod-131: 8 dagen — medisch.\n• Cs-137: 30 jaar — Tsjernobyl-fall-out.\n• Po-210: 138 dagen — Litvinenko-vergiftiging.\n\n**Carbon-dating-voorbeeld**:\n• Levend organisme heeft constant C-14/C-12 ratio.\n• Na dood: C-14 vervalt, ratio daalt exp.\n• Meet ratio in fossiel → bereken hoe lang dood.\n• Houtskool met 25% C-14 → 2 halveringstijden voorbij → 2 × 5730 = 11.460 jaar oud.\n\n**Log-schaal-grafieken**:\n• X- of y-as logaritmisch.\n• Exp groei wordt **rechte lijn** op semi-log.\n• Handig om groei-snelheden te vergelijken.\n• Gebruikt in: bevolking, COVID-statistieken, schaalvergelijking aarde-zonnestelsel.\n\n**Veel-gemaakte fouten**:\n• log(a + b) ≠ log(a) + log(b) (alleen ×).\n• log(−x) bestaat niet (in reëel).\n• log(0) niet gedefinieerd (gaat naar −∞).",
    checks: [
      {
        q: "Wat is **log(1000)** (basis 10)?",
        options: ["3","100","1000","0"],
        answer: 0,
        wrongHints: [null, "Niet — dat is √.", "Niet — log is exponent.", "Niet — dat is log(1)."],
        uitlegPad: {
          stappen: [{ titel: "10³ = 1000", tekst: "log_10(1000) = **3** want 10³ = 1000. Logaritme = de exponent die je nodig hebt om grondtal naar getal te krijgen." }],
          niveaus: { basis: "3. A.", simpeler: "10³=1000 → log=3 = A.", nogSimpeler: "3 = A." },
        },
      },
      {
        q: "Spaargeld €1000 bij 5%/jaar. **Na hoeveel jaar €2000**?",
        options: ["~14,2 jaar","~10 jaar","~20 jaar","~40 jaar"],
        answer: 0,
        wrongHints: [null, "Te kort.", "Te lang.", "Veel te lang."],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijking", tekst: "2000 = 1000 · 1,05^t → 2 = 1,05^t." },
            { titel: "Log nemen", tekst: "log(2) = t · log(1,05) → t = log(2) / log(1,05) = 0,301 / 0,0212 ≈ **14,2 jaar**." },
          ],
          theorie: "Vuistregel 70: 70/5 = 14 jaar — matcht.",
          niveaus: { basis: "~14,2 jaar. A.", simpeler: "log2/log1,05 ≈ 14 = A.", nogSimpeler: "14 = A." },
        },
      },
      {
        q: "Welke regel klopt?",
        options: ["log(a·b) = log(a) + log(b)","log(a+b) = log(a)·log(b)","log(a/b) = log(a)·log(b)","log(a²) = 2 + log(a)"],
        answer: 0,
        wrongHints: [null, "Niet — fout patroon.", "Niet — moet aftrekken.", "Niet — moet × niet +."],
        uitlegPad: {
          stappen: [{ titel: "Vermenigvuldig → optellen", tekst: "**log(a·b) = log(a) + log(b)**. Vermenigvuldigen wordt optellen na log-transformatie. Dit is fundamentele log-regel (uitgevonden 17e eeuw, vóór rekenmachines, om vermenigvuldigen op te lossen)." }],
          niveaus: { basis: "log(ab) = log(a)+log(b). A.", simpeler: "× → + bij log = A.", nogSimpeler: "× → + = A." },
        },
      },
      {
        q: "Houtskool van fossiel heeft **25% C-14** vergeleken levend. T_h C-14 = 5730 jaar. **Leeftijd**?",
        options: ["~11.460 jaar","5730 jaar","2865 jaar","23.000 jaar"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 50%.", "Niet — te jong.", "Te oud."],
        uitlegPad: {
          stappen: [
            { titel: "Tellen halveringen", tekst: "Levend: 100%. Na 1 halvering: 50%. Na 2 halveringen: 25%. → **2 halveringstijden** voorbij." },
            { titel: "Tijd", tekst: "2 × 5730 = **11.460 jaar** oud." },
          ],
          theorie: "Carbon-dating betrouwbaar tot ~50.000 jaar. Daarna te weinig C-14 over. Voor oudere steen: K-Ar of U-Pb-methodes.",
          niveaus: { basis: "11.460 jaar. A.", simpeler: "25%=2 halveringen=11460j = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke schaal is **logaritmisch**?",
        options: ["pH (zuurgraad)","Lengte in cm","Tijd in seconden","Massa in kg"],
        answer: 0,
        wrongHints: [null, "Lineair.", "Lineair.", "Lineair."],
        uitlegPad: {
          stappen: [{ titel: "pH = −log[H₃O⁺]", tekst: "**pH** is logaritmisch: pH 3 is 10× zuurder dan pH 4, 100× zuurder dan pH 5. Andere log-schalen: **Richter** (aardbeving), **decibel** (geluid), **magnitude** (sterren). Reden: schaal-bereik te groot voor lineair (10⁻¹⁴ tot 10⁰ M voor H⁺)." }],
          niveaus: { basis: "pH. A.", simpeler: "pH = log = A.", nogSimpeler: "pH = A." },
        },
      },
    ],
  },

  // ─── D. Logistisch + andere modellen ──────────────────────
  {
    title: "Logistisch + andere modellen",
    explanation:
      "**Niet alles groeit eindeloos exponentieel.** Vaak komt er een **plafond** door schaarste of capaciteit.\n\n**Logistische groei**:\n• Beginfase: nauwelijks groei (lage aantallen).\n• Middenfase: snelle (~exp) groei.\n• Eindfase: groei vlakt af richting plafond (carrying capacity K).\n\n**Formule** (vereenvoudigd):\nN(t) = K / (1 + ((K − N₀)/N₀) · e^(−r·t))\n• K = plafond.\n• N₀ = startwaarde.\n• r = groeisnelheid.\n• t = tijd.\n• Op CSE meestal alleen herkennen + interpreteren, niet handmatig oplossen.\n\n**Grafiek logistisch**:\n• S-vorm (sigmoid).\n• Eerst plat (vergelijkbaar met exp).\n• Dan snel.\n• Dan asymptotisch naar K.\n\n**Voorbeelden**:\n• **Bevolking-cap** in eindig gebied (eiland met dieren).\n• **Virus-uitbraak**: snelle groei eerst, dan vertraging door immuniteit/maatregelen → plafond.\n• **Marktaandeel** nieuw product: trage start → snelle adoptie → markt verzadigd.\n• **Bacterie-cultuur** in beperkte petrischaal.\n• **Leerproces**: weinig vooruitgang eerst (basis), dan snel, dan plateau (expert).\n\n**Verschil exp vs logistisch**:\n• Korte tijd: lijken op elkaar.\n• Lang: exp loopt door tot oneindig, logistisch stabiliseert op K.\n• Cito-vraag: 'past dit model lange-termijn?' — bevolking kan niet exp doorgroeien (voedsel-, ruimte-grenzen).\n\n**Periodiek model** (sinus):\nf(t) = a + b · sin(c · t + d)\n• Cyclisch herhalend.\n• Voorbeelden: getijden, seizoenen, eb-en-vloed, dag-nacht-cyclus, biologische ritme.\n\n**Kwadratisch model** (parabool):\ny = a + b·x + c·x²\n• Voorbeeld: bal omhoog gooien (hoogte als functie van tijd).\n• Winst-functie met optimum.\n\n**Macht-model** (machtsfunctie):\ny = a · x^b\n• Bv: oppervlakte cirkel = π·r² (b=2). Volume bol = (4/3)π·r³ (b=3).\n• Allometric scaling: lichaamsgewicht ~ massa^0,75 voor hartslag.\n\n**Combinaties**:\n• **Gedempte oscillatie**: sinus + exp daling. Bv: veer met wrijving, harmonisch oscillerend systeem dat tot stilstand komt.\n• **Pieken + bodem-model**: cyclisch in trend. Bv: economie (cyclus rond stijgende trend).\n\n**Model-kiezen-strategie (Cito-pattern)**:\n\n1. **Tabel inspecteren**:\n   - Constante verschillen → lineair.\n   - Constante quotiënten → exponentieel.\n   - Patroon herhaalt → periodiek.\n   - Curve met plafond → logistisch.\n\n2. **Context analyseren**:\n   - Eindige resource → logistisch waarschijnlijker.\n   - Geen beperking → exp.\n   - Vast bedrag → lineair.\n\n3. **Grafiek**:\n   - Rechte lijn → lineair.\n   - Exp-curve → exp.\n   - S-vorm → logistisch.\n   - Golf → periodiek.\n   - Parabool → kwadratisch.\n\n4. **Voorspelling beoordelen**:\n   - 'Klopt voor 10 jaar maar niet voor 100' — denk over model-grenzen.\n   - 'Extrapoleren tot 2050 mag/mag niet' — Cito-stijl-vraag.\n\n**Toepassing economie**:\n• BBP-groei: exp model voor lange termijn (recessies + boom-cycli rond trend).\n• Inflatie cumulatief: exp.\n• Marktverzadiging: logistisch.\n\n**Toepassing biologie**:\n• Populatie zonder voedsel-/ruimte-limiet: exp.\n• Populatie in habitat: logistisch.\n• Roofdier-prooi-cyclus: cyclisch (Lotka-Volterra).\n\n**Toepassing technologie**:\n• Adoptie nieuwe technologie: S-curve (logistisch).\n• Moore's wet: exp tot verzadiging (dan logistisch).\n• Internet-gebruikers: was exp, nu logistisch (verzadiging).",
    checks: [
      {
        q: "Welk model heeft een **plafond**?",
        options: ["Logistisch","Lineair","Exponentieel groei","Periodiek"],
        answer: 0,
        wrongHints: [null, "Niet — gaat door.", "Niet — naar oneindig.", "Wel begrensd maar geen plafond — schommelt."],
        uitlegPad: {
          stappen: [{ titel: "S-curve = logistisch", tekst: "**Logistisch model**: S-vormige curve, groeit eerst snel, vlakt af naar plafond (carrying capacity K). Past op bevolking in eindig gebied, virus-uitbraak, marktverzadiging." }],
          niveaus: { basis: "Logistisch. A.", simpeler: "Plafond = logistisch = A.", nogSimpeler: "Logist. = A." },
        },
      },
      {
        q: "Welk patroon past bij **eb en vloed** in NL-haven?",
        options: ["Periodiek (sinus)","Lineair","Exponentieel","Logistisch"],
        answer: 0,
        wrongHints: [null, "Niet — herhalend.", "Niet — niet groeiend.", "Niet — geen plafond."],
        uitlegPad: {
          stappen: [{ titel: "Cyclisch herhalend", tekst: "Eb-vloed herhaalt ~12,5u (Maan-gravitatie). **Periodiek (sinus)-model** past: f(t) = a + b·sin(c·t + d). Cito-classics: getijden, dagelijkse temperatuur, hartslag, seizoens-vraag." }],
          niveaus: { basis: "Periodiek. A.", simpeler: "Getijden = sinus = A.", nogSimpeler: "Sinus = A." },
        },
      },
      {
        q: "Bal omhoog gooien — hoogte als functie van tijd is:",
        options: ["Kwadratisch (parabool)","Lineair","Exponentieel","Logaritmisch"],
        answer: 0,
        wrongHints: [null, "Niet — versnelling.", "Niet — daalt eerst niet exp.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "h = v₀·t − ½g·t²", tekst: "**Kwadratisch model**: hoogte stijgt eerst (lineaire bijdrage v₀·t) maar wordt door zwaartekracht (−½g·t²) afgeremd → maximum → daling. **Parabool** met top." }],
          niveaus: { basis: "Kwadratisch. A.", simpeler: "Bal-baan = parabool = A.", nogSimpeler: "Parabool = A." },
        },
      },
      {
        q: "Virus-uitbraak: aantal besmetten verloopt typisch:",
        options: ["Eerst exp → afvlakkend (logistisch)","Lineair","Periodiek alleen","Constant"],
        answer: 0,
        wrongHints: [null, "Niet — niet zonder beperking.", "Wel later golf, eerst monotoon.", "Niet — wel verandering."],
        uitlegPad: {
          stappen: [{ titel: "Logistisch met R0", tekst: "Beginfase virus: weinig immuniteit → besmetten dragen exp. Naarmate meer mensen besmet (of beschermd door maatregelen/immuniteit): R-getal daalt → groei vlakt af → **logistische curve**.\n\nMeerdere golven mogelijk (nieuwe varianten) → opvolgende S-curves." }],
          theorie: "COVID-19 grafiek-pattern: meerdere logistische golven achter elkaar.",
          niveaus: { basis: "Logistisch. A.", simpeler: "Virus = logistisch = A.", nogSimpeler: "Logist. = A." },
        },
      },
      {
        q: "Voor **extrapolatie naar 50 jaar** is welk model meest risicovol?",
        options: ["Exponentieel ongebreideld","Lineair tussen grenzen","Logistisch","Periodiek voor bekende cyclus"],
        answer: 0,
        wrongHints: [null, "Niet — beperkt risico.", "Niet — bevat plafond.", "Wel betrouwbaar bekend cyclisch."],
        uitlegPad: {
          stappen: [{ titel: "Exp loopt scheef", tekst: "**Exponentieel zonder plafond** extrapoleren naar lange termijn → onrealistisch grote uitkomsten. Voorbeeld: 'bevolking groeit 3%/jaar voor altijd' → na 1000 jaar miljarden×miljarden mensen. Klopt niet door eindige voedsel/grond." }],
          theorie: "Cito-pattern: 'leg uit waarom je niet zomaar 2080 mag voorspellen via exp.'",
          niveaus: { basis: "Exp ongebreideld. A.", simpeler: "Exp extrapolatie risico = A.", nogSimpeler: "Exp = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — modellen mix",
    explanation:
      "Mix van lineair + exp + log + logistisch + model-keuze.\n\nVeel succes!",
    checks: [
      {
        q: "Bevolking 100.000 groeit **2,5%/jaar**. Aantal na 10 jaar?",
        options: ["~128.000","~125.000","~250.000","~10.000.000"],
        answer: 0,
        wrongHints: [null, "Lineair zou 125.000 — exp ietsje meer.", "Te groot.", "Belachelijk."],
        uitlegPad: {
          stappen: [{ titel: "y = 100.000·1,025^10", tekst: "1,025^10 ≈ 1,28. → **~128.000**.\n\nVerschil met lineair (+2500/jaar = 125.000): exp ~3000 meer door rente-op-rente." }],
          niveaus: { basis: "~128.000. A.", simpeler: "100.000·1,025^10≈128k = A.", nogSimpeler: "128k = A." },
        },
      },
      {
        q: "Tabel: x:1,2,3,4 | y:100, 90, 81, 72,9. Welk model + factor?",
        options: ["Exp afnemend, b=0,9","Lineair, b=−10","Logistisch","Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Niet — verschillen veranderen.", "Niet zo te zien.", "Wel mogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Quotiënten = 0,9", tekst: "90/100=0,9, 81/90=0,9, 72,9/81=0,9 → constante factor → **exp afnemend met b=0,9** (10% verlies/jaar)." }],
          niveaus: { basis: "Exp b=0,9. A.", simpeler: "0,9-quotiënt = exp afn = A.", nogSimpeler: "0,9 = A." },
        },
      },
      {
        q: "Iod-131 halveringstijd 8 dagen. Na **24 dagen** is welk % over?",
        options: ["12,5%","50%","25%","6,25%"],
        answer: 0,
        wrongHints: [null, "Niet — dat is 8 dagen.", "Niet — dat is 16 dagen.", "Niet — dat is 32 dagen."],
        uitlegPad: {
          stappen: [
            { titel: "Hoeveel halveringen?", tekst: "24 / 8 = 3 halveringen." },
            { titel: "0,5³", tekst: "Na 3 halveringen: (0,5)³ = 0,125 = **12,5%**." },
          ],
          theorie: "Medisch: na 80 dagen (10 halveringen) < 0,1% → praktisch nul. Daarom Tsjernobyl-jood snel weg, Cs-137 (T_h=30 jaar) blijft veel langer.",
          niveaus: { basis: "12,5%. A.", simpeler: "3×halveren = 1/8 = 12,5% = A.", nogSimpeler: "12,5 = A." },
        },
      },
      {
        q: "Welk model past bij **leerproces** (oefenen)?",
        options: ["Logistisch (begin traag, midden snel, eind plateau)","Lineair","Periodiek","Kwadratisch"],
        answer: 0,
        wrongHints: [null, "Niet — geen gelijke stappen.", "Niet — geen cyclus.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Learning curve = S-vorm", tekst: "**Leren**: begin traag (basis snappen), dan snel (kennis groeit op kennis), uiteindelijk plateau (expertgrens, marginal returns). Klassieke S-curve = **logistisch**. Wordt gebruikt in psychologie + training-theorie." }],
          theorie: "Daarom: 15-min/dag werkt op lange termijn (volharden door beginplateau) > sprong-leren.",
          niveaus: { basis: "Logistisch. A.", simpeler: "Leren = S-curve = A.", nogSimpeler: "S = A." },
        },
      },
      {
        q: "Vuistregel **70**: T_v ≈ 70/p werkt voor:",
        options: ["Kleine groei-% (< ~10%)","Alleen percentages > 50%","Alleen lineair","Niet bestaand"],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — voor exp.", "Wel bestaand."],
        uitlegPad: {
          stappen: [{ titel: "Vuistregel uit ln(2)", tekst: "T_v = ln(2)/ln(1+r) ≈ 0,693/r voor kleine r (Taylor-expansie). Met r in % en uitkomst in jaar: T_v ≈ 70/p. **Werkt voor p < 10%**. Bij grotere groei (20%, 50%) wordt approximatie minder nauwkeurig — gebruik exacte formule." }],
          niveaus: { basis: "Kleine %. A.", simpeler: "70-regel = kleine % = A.", nogSimpeler: "A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const veranderingGroeiHavoVwo = {
  id: "verandering-groei-havo-vwo",
  title: "Verandering + groei (HAVO/VWO wiskunde A)",
  emoji: "📈",
  level: "havo4-5-vwo",
  subject: "wiskunde",
  referentieNiveau: "havo-vwo-CSE-wiskundeA",
  sloThema: "Wiskunde A HAVO/VWO — modellen voor groei + verandering eindexamen",
  prerequisites: [
    { id: "lineaire-formules", title: "Lineaire formules", niveau: "klas2" },
    { id: "exponentieel", title: "Exponentiële functies", niveau: "klas4" },
    { id: "logaritmen", title: "Logaritmen", niveau: "klas4-5" },
    { id: "procenten", title: "Procenten", niveau: "klas2" },
    { id: "machten", title: "Machten", niveau: "klas3" },
  ],
  intro:
    "Verandering + groei HAVO/VWO wiskunde A eindexamen. Lineair model (vast bedrag), exponentieel (vaste factor + verdubbelingstijd), logaritmen (terugrekenen tijd + halveringstijd + log-schalen), logistisch (S-curve plafond) + periodiek/kwadratisch. Model-keuze vanuit tabel/grafiek/context. ~15-20 min.",
  triggerKeywords: [
    "lineaire groei", "lineair model",
    "richtingscoëfficiënt", "helling",
    "exponentiële groei", "exp groei",
    "groeifactor",
    "verdubbelingstijd",
    "halveringstijd",
    "vuistregel 70",
    "samengestelde rente", "rente op rente",
    "logaritme", "log",
    "log-schaal", "logaritmische schaal",
    "decibel", "pH-schaal",
    "Moore's wet",
    "carbon dating", "C-14",
    "radioactief verval",
    "logistisch model", "logistische groei",
    "S-curve", "sigmoid",
    "carrying capacity",
    "modelkeuze", "model kiezen",
    "periodiek model", "sinus-model",
    "extrapolatie", "interpolatie",
    "Malthus", "bevolkingsgroei",
  ],
  chapters,
  steps,
};

export default veranderingGroeiHavoVwo;

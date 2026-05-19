// Leerpad: Genetica + erfelijkheid HAVO/VWO biologie — eindexamen-stof.
// Bouwt voort op geneticaErfelijkheidBiologie (klas 3 / onderbouw) met
// diepere CSE-stof: Punnett, geslachtsgebonden, stamboom, mutaties.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  point: "#ffd54f",
  alt: "#ff7043",
  blauw: "#1565c0",
};

const stepEmojis = ["🧬", "🟢", "⬛", "🌳", "🏆"];

const chapters = [
  { letter: "A", title: "DNA + genen + chromosomen", emoji: "🧬", from: 0, to: 0 },
  { letter: "B", title: "Mendel — monohybride", emoji: "🟢", from: 1, to: 1 },
  { letter: "C", title: "Dihybride + geslachtsgebonden", emoji: "⬛", from: 2, to: 2 },
  { letter: "D", title: "Stamboom + mutaties", emoji: "🌳", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. DNA + genen + chromosomen ─────────────────────────
  {
    title: "DNA + genen + chromosomen — de basis",
    explanation:
      "Erfelijkheid begint bij **DNA** (deoxyribonucleïnezuur), het molecuul dat alle erfelijke info bevat.\n\n**Structuur DNA**:\n• Dubbele helix — twee strengen om elkaar gedraaid (Watson + Crick 1953).\n• Opgebouwd uit **nucleotiden**: suiker (deoxyribose) + fosfaatgroep + **base**.\n• 4 basen: **A**denine, **T**hymine, **G**uanine, **C**ytosine.\n• Basenparing: **A-T** en **G-C** (Chargaff's regel) — A altijd tegenover T, G altijd tegenover C.\n• Volgorde basen = **genetische code**.\n\n**Gen vs chromosoom**:\n• **Gen** = stukje DNA dat codeert voor 1 eigenschap of eiwit. Bv. gen voor oogkleur.\n• **Chromosoom** = lang DNA-molecuul + eiwitten (histonen). 1 chromosoom = duizenden genen.\n• Mens heeft **46 chromosomen** = 23 paren = **diploïd** (2n).\n• Geslachtscellen (sperma + eicel) hebben 23 chromosomen = **haploïd** (n).\n\n**Allelen**:\n• Een **allel** = variant van een gen. Bv. allel voor blauwe ogen vs allel voor bruine ogen.\n• Mens heeft van elk gen **2 allelen** — 1 van vader, 1 van moeder.\n• **Homozygoot**: twee dezelfde allelen (BB of bb).\n• **Heterozygoot**: twee verschillende allelen (Bb).\n\n**Geslachtschromosomen**:\n• Vrouw: **XX** (paar 23).\n• Man: **XY**.\n• Y-chromosoom heeft veel minder genen dan X — vandaar geslachtsgebonden overerving (stap C).\n\n**Genotype vs fenotype**:\n• **Genotype** = welke allelen (Bb, BB, bb).\n• **Fenotype** = hoe het eruit ziet (bruine ogen, blauwe ogen).\n• Genotype Bb + Bb-vader+moeder → fenotype hangt af van dominantie.",
    checks: [
      {
        q: "Welke **basenparing** klopt in DNA?",
        options: ["A-T en G-C","A-G en T-C","A-A en T-T","A-C en G-T"],
        answer: 0,
        wrongHints: [null, "Niet — verkeerde paring.", "Niet — A paart niet met A.", "Niet — A paart met T, niet C."],
        uitlegPad: {
          stappen: [{ titel: "Chargaff's regel", tekst: "**A** (adenine) plakt altijd op **T** (thymine) via 2 waterstofbruggen. **G** (guanine) op **C** (cytosine) via 3 waterstofbruggen. Daarom is %A = %T en %G = %C in elke DNA-streng (Chargaff)." }],
          woorden: [{ woord: "nucleotide", uitleg: "DNA-bouwsteen: suiker + fosfaat + base." }, { woord: "Chargaff's regel", uitleg: "In elk DNA: %A = %T en %G = %C." }],
          theorie: "Cito-CSE-pattern: gegeven %A → bereken %T (=zelfde), %G + %C (= 100% - 2·%A samen).",
          niveaus: { basis: "A-T, G-C. A.", simpeler: "A↔T, G↔C = basenparing. A.", nogSimpeler: "A-T = A." },
        },
      },
      {
        q: "Hoeveel **chromosomen** heeft een menselijke **geslachtscel** (sperma/eicel)?",
        options: ["23 (haploïd)","46 (diploïd)","2 (XY)","48"],
        answer: 0,
        wrongHints: [null, "Niet — dat is normale lichaamscel.", "Geslachtscel maar 1 paar — verkeerd genoteerd.", "Niet menselijk."],
        uitlegPad: {
          stappen: [{ titel: "Meiose halveert", tekst: "Lichaamscel = **diploïd (2n) = 46 chromosomen**. Bij **meiose** (vorming geslachtscel) wordt aantal gehalveerd → **haploïd (n) = 23**. Bij bevruchting: sperma (23) + eicel (23) = zygote 46." }],
          woorden: [{ woord: "haploïd", uitleg: "Cel met 1 set chromosomen (n)." }, { woord: "diploïd", uitleg: "Cel met 2 sets chromosomen (2n)." }, { woord: "meiose", uitleg: "Celdeling waarbij 1 diploïde cel → 4 haploïde geslachtscellen." }],
          theorie: "Cito-eindexamen-favoriet: meiose vs mitose. Mitose = lichaamscel-deling (2n → 2n). Meiose = geslachtscel-vorming (2n → n).",
          niveaus: { basis: "23 (haploïd). A.", simpeler: "Geslachtscel = 23 = haploïd = A.", nogSimpeler: "23 = A." },
        },
      },
      {
        q: "Een persoon met genotype **Bb** is:",
        options: ["Heterozygoot","Homozygoot dominant","Homozygoot recessief","Geen genotype"],
        answer: 0,
        wrongHints: [null, "Niet — dat is BB.", "Niet — dat is bb.", "Wel — Bb is een geldig genotype."],
        uitlegPad: {
          stappen: [{ titel: "Hetero = verschillend", tekst: "**Heterozygoot** = twee **verschillende** allelen (Bb). **Homozygoot** = twee dezelfde (BB = homozygoot dominant, bb = homozygoot recessief)." }],
          woorden: [{ woord: "heterozygoot", uitleg: "Twee verschillende allelen voor een gen." }, { woord: "homozygoot", uitleg: "Twee dezelfde allelen voor een gen." }],
          niveaus: { basis: "Heterozygoot. A.", simpeler: "Bb = verschillende allelen = hetero = A.", nogSimpeler: "Hetero = A." },
        },
      },
      {
        q: "Wat is **fenotype**?",
        options: ["Uiterlijke kenmerk (zichtbaar)","Allel-combinatie (genotype)","DNA-volgorde","Chromosoom-aantal"],
        answer: 0,
        wrongHints: [null, "Dat is genotype.", "Onderdeel van genotype.", "Niet — biologische taxonomie."],
        uitlegPad: {
          stappen: [{ titel: "Fenotype = zichtbaar", tekst: "**Fenotype** = wat je **ziet** of meet (bruine ogen, lengte 1,80m, bloedgroep A). **Genotype** = de allel-combinatie (Bb, OO, AA). Genotype → fenotype via dominantie." }],
          theorie: "Voorbeeld: bruine ogen kunnen Bb of BB zijn (zelfde fenotype, ander genotype). Blauwe ogen alleen bb.",
          niveaus: { basis: "Uiterlijk. A.", simpeler: "Fenotype = wat je ziet = A.", nogSimpeler: "Zichtbaar = A." },
        },
      },
      {
        q: "Een man heeft geslachtschromosomen:",
        options: ["XY","XX","YY","X"],
        answer: 0,
        wrongHints: [null, "Niet — dat is vrouw.", "Niet — Y zonder X = niet levensvatbaar.", "Niet — onvolledig (Turner-syndroom is X0)."],
        uitlegPad: {
          stappen: [{ titel: "Geslachtsbepaling man", tekst: "Vrouw = **XX** (paar 23). Man = **XY**. De **vader** bepaalt geslacht — sperma met X → meisje, sperma met Y → jongen. Eicel is altijd X." }],
          theorie: "Cito-pattern: SRY-gen op Y-chromosoom triggert mannelijke ontwikkeling. Zonder Y → vrouwelijke ontwikkeling default.",
          niveaus: { basis: "XY. A.", simpeler: "Man = XY = A.", nogSimpeler: "XY = A." },
        },
      },
    ],
  },

  // ─── B. Mendel — monohybride ──────────────────────────────
  {
    title: "Mendel — wetten van overerving",
    explanation:
      "**Gregor Mendel** (1822-1884), Tsjechische monnik, deed kruisings-experimenten met **erwten**. Ontdekte 3 wetten van overerving — basis voor moderne genetica.\n\n**Mendel-experiment**:\n• Kruiste **homozygote** ouders (bv. paarse bloem × witte bloem).\n• F1-generatie: ALLE paars (paars dominant over wit).\n• F1 × F1 = F2-generatie: **3 paars : 1 wit** (klassiek 3:1-verhouding).\n• Conclusie: erfelijke factoren bestaan in paren + één is dominant.\n\n**Mendel's 3 wetten**:\n\n**1. Uniformiteitswet (F1)**:\n• Kruis 2 homozygote ouders met verschillende eigenschap → F1 is **uniform heterozygoot**.\n• Bv. BB × bb → 100% Bb.\n\n**2. Splitsingswet (F2)**:\n• Kruis 2 heterozygoten (F1 × F1) → 1:2:1 genotype-verhouding (BB:Bb:bb) of **3:1 fenotype** bij volledige dominantie.\n• Bb × Bb → 25% BB, 50% Bb, 25% bb.\n\n**3. Onafhankelijkheidswet**:\n• Bij dihybride kruising (2 genen) splitsen genen onafhankelijk.\n• Alleen geldig als genen op verschillende chromosomen liggen.\n\n**Monohybride kruising — Punnett-vierkant**:\nKruising Bb × Bb:\n```\n        B       b\n   B  | BB    | Bb\n   b  | Bb    | bb\n```\n→ 1 BB : 2 Bb : 1 bb genotype.\n→ 3 dominant : 1 recessief fenotype.\n\n**Onvolledige dominantie**:\n• Heterozygoot = **tussenvorm**. Bv. rood (RR) × wit (rr) → roze (Rr).\n• Splitsing F2: 1 rood : 2 roze : 1 wit.\n\n**Co-dominantie**:\n• Beide allelen **tegelijk zichtbaar**. Bv. bloedgroep AB (allel A + B beide actief).",
    checks: [
      {
        q: "Welke verhouding krijg je in **F2** bij kruising Bb × Bb (volledige dominantie)?",
        options: ["3 dominant : 1 recessief","1 : 1","2 : 1","Allemaal hetzelfde"],
        answer: 0,
        wrongHints: [null, "Niet — dat is testcross.", "Niet — onvolledige dominantie heeft 1:2:1.", "Niet — er is splitsing."],
        uitlegPad: {
          stappen: [{ titel: "Klassieke 3:1", tekst: "Bb × Bb → 25% BB + 50% Bb + 25% bb genotype. Bij volledige dominantie: BB + Bb beide dominante fenotype → **75% dominant : 25% recessief = 3:1**." }],
          theorie: "Cito-CSE: 3:1-verhouding altijd in monohybride kruising heterozygoot × heterozygoot, bij volledige dominantie.",
          niveaus: { basis: "3:1. A.", simpeler: "Bb × Bb = 3 dominant : 1 recessief = A.", nogSimpeler: "3:1 = A." },
        },
      },
      {
        q: "Kruising **BB × bb** levert in F1:",
        options: ["100% Bb (heterozygoot)","75% BB, 25% bb","50% BB, 50% bb","Mendel's uitzondering"],
        answer: 0,
        wrongHints: [null, "Niet — geen splitsing in F1.", "Niet — geen homozygoten in F1.", "Niet — Mendel's uniformiteitswet voorspelt dit."],
        uitlegPad: {
          stappen: [{ titel: "Uniformiteitswet (1e wet)", tekst: "BB-ouder geeft alleen B-allel. bb-ouder geeft alleen b-allel. F1-kinderen krijgen 1 van elke ouder = Bb. **Alle F1 = uniform Bb**." }],
          theorie: "Eerste Mendel-wet: kruising homozygoten met verschillende allelen → uniforme F1 (alle heterozygoot).",
          niveaus: { basis: "100% Bb. A.", simpeler: "BB × bb = alleen Bb F1 = A.", nogSimpeler: "Bb = A." },
        },
      },
      {
        q: "Bij **onvolledige dominantie** rood (RR) × wit (rr) → F1:",
        options: ["Roze (Rr)","Helft rood, helft wit","Alleen rood","Alleen wit"],
        answer: 0,
        wrongHints: [null, "Niet — dat zou volledig dominant zijn.", "Niet — geen R dominant.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Tussenvorm bij onvolledig", tekst: "Bij **onvolledige dominantie** is heterozygoot een **tussenvorm**. RR × rr → 100% Rr **roze**. F2 (Rr × Rr): 25% rood, 50% roze, 25% wit (= 1:2:1)." }],
          woorden: [{ woord: "onvolledige dominantie", uitleg: "Heterozygoot vertoont tussenvorm-fenotype." }],
          theorie: "Voorbeelden in natuur: leeuwebek-bloem rood/wit/roze, vergelijkbare planten.",
          niveaus: { basis: "Roze. A.", simpeler: "Onvolledig dominant = tussenvorm = roze = A.", nogSimpeler: "Roze = A." },
        },
      },
      {
        q: "Welk **bloedgroep**-systeem toont **co-dominantie**?",
        options: ["AB (A + B beide actief)","O","A homozygoot","Negatief rhesus"],
        answer: 0,
        wrongHints: [null, "Niet — O is dubbel-recessief.", "Niet — homozygoot is geen co-dominantie.", "Niet — apart systeem (Rh)."],
        uitlegPad: {
          stappen: [{ titel: "AB = beide allelen actief", tekst: "ABO-bloedgroep: 3 allelen (A, B, O). Genotype **AB** → fenotype **AB** met beide antigenen op rode bloedcellen. Allel A en B zijn **co-dominant** (beide volledig zichtbaar). O is recessief." }],
          woorden: [{ woord: "co-dominantie", uitleg: "Beide allelen volledig en gelijktijdig tot uiting." }],
          theorie: "Bloedgroep-genotypes: AA/AO = A, BB/BO = B, AB = AB, OO = O.",
          niveaus: { basis: "AB. A.", simpeler: "Bloedgroep AB = beide allelen zichtbaar = A.", nogSimpeler: "AB = A." },
        },
      },
      {
        q: "Wie was **Gregor Mendel**?",
        options: ["Monnik die erwt-erfelijkheid ontdekte","Ontdekker DNA-structuur","Eerste evolutie-bioloog","Engelse koning"],
        answer: 0,
        wrongHints: [null, "Niet — dat zijn Watson + Crick.", "Niet — dat is Darwin.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Mendel = vader genetica", tekst: "**Gregor Mendel** (1822-1884) was Tsjechische augustijner-monnik in Brno. Werkte ~10 jaar met erwten-experimenten. Publiceerde 1866 — werd lange tijd genegeerd. **Herontdekt 1900** door 3 wetenschappers gelijktijdig — start moderne genetica." }],
          theorie: "Geen DNA bekend toen — Mendel sprak over 'erfelijke factoren' (later: genen). DNA pas in 1953 ontrafeld door Watson + Crick + Franklin.",
          niveaus: { basis: "Mendel-monnik. A.", simpeler: "Mendel = erwt-erfelijkheid = A.", nogSimpeler: "Mendel = A." },
        },
      },
    ],
  },

  // ─── C. Dihybride + geslachtsgebonden ─────────────────────
  {
    title: "Dihybride kruising + geslachtsgebonden overerving",
    explanation:
      "**Dihybride kruising** = kruising met 2 eigenschappen tegelijk (2 genen).\n\n**Mendel's onafhankelijkheidswet**:\n• Bij genen op verschillende chromosomen: ze splitsen onafhankelijk.\n• Kruising AaBb × AaBb → klassieke **9:3:3:1 fenotype**.\n\n**Voorbeeld dihybride**:\n• Erwten: geel (G) dominant over groen (g). Glad (R) dominant over gerimpeld (r).\n• GgRr × GgRr:\n```\nGenotype (4×4 Punnett):\n        GR    Gr    gR    gr\n  GR  GGRR  GGRr  GgRR  GgRr\n  Gr  GGRr  GGrr  GgRr  Ggrr\n  gR  GgRR  GgRr  ggRR  ggRr\n  gr  GgRr  Ggrr  ggRr  ggrr\n```\n• Fenotypes: 9 geel-glad : 3 geel-gerimpeld : 3 groen-glad : 1 groen-gerimpeld.\n\n**Geslachtsgebonden overerving**:\n• Genen op **X-chromosoom** ('X-linked').\n• Y-chromosoom heeft maar weinig genen — vooral SRY (mannelijkheid).\n• Vrouwen (XX): hebben 2 kopieën van X-gen. Mannen (XY): maar 1 kopie X.\n• Gevolg: **recessieve X-allelen tonen vaker bij mannen** (geen tweede X-kopie om dominant te zijn).\n\n**Voorbeelden geslachtsgebonden ziekten** (recessief op X):\n• **Hemofilie** (bloedstollings-stoornis): vooral bij jongens.\n• **Duchenne spierdystrofie**: vooral bij jongens.\n• **Kleurenblindheid (rood-groen)**: ~8% van mannen, ~0,5% van vrouwen.\n\n**Hoe overerving werkt** (kleurenblindheid voorbeeld):\n• Moeder draagster (X^cX) × normale vader (XY):\n  - 25% X^cX (dochter draagster, normaal zicht)\n  - 25% XX (dochter normaal)\n  - 25% X^cY (zoon kleurenblind)\n  - 25% XY (zoon normaal)\n• 50% zonen kleurenblind, 0% dochters kleurenblind (wel draagster).\n\n**Testcross** (testkruising):\n• Onbekend genotype × homozygoot recessief.\n• Doel: bepalen of onbekend BB of Bb.\n• BB × bb → alle Bb (allemaal dominant fenotype).\n• Bb × bb → 50% Bb : 50% bb (1:1 verhouding).",
    checks: [
      {
        q: "Welke **fenotype-verhouding** krijg je bij AaBb × AaBb (volledige dominantie, onafhankelijke genen)?",
        options: ["9:3:3:1","3:1","1:1:1:1","9:1"],
        answer: 0,
        wrongHints: [null, "Niet — monohybride.", "Niet — testcross.", "Niet — geen 9:1-verhouding."],
        uitlegPad: {
          stappen: [{ titel: "Dihybride klassiek", tekst: "AaBb × AaBb in 4×4 Punnett-vierkant → 16 combinaties. Fenotypes: **9** dom-dom : **3** dom-rec : **3** rec-dom : **1** rec-rec. Mendel-3:1 × Mendel-3:1 = 9:3:3:1." }],
          theorie: "Cito-truc: 9+3+3+1 = 16. Komt altijd uit bij dihybride kruising heterozygoten.",
          niveaus: { basis: "9:3:3:1. A.", simpeler: "Dihybride AaBb × AaBb = 9:3:3:1 = A.", nogSimpeler: "9:3:3:1 = A." },
        },
      },
      {
        q: "Waarom hebben **mannen vaker geslachtsgebonden ziekten** dan vrouwen?",
        options: ["Mannen hebben maar 1 X, geen tweede kopie","Mannen-DNA is anders","Y veroorzaakt ziekten","Hormonen"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — Y heeft niet de ziekte-genen.", "Geen direct verband."],
        uitlegPad: {
          stappen: [{ titel: "XY mist tweede X-kopie", tekst: "Vrouwen XX: als 1 X-allel ziek is, kan andere X compenseren → meestal draagster, geen ziekte. Mannen XY: 1 ziek X-allel → ziekte direct, geen tweede kopie als reserve." }],
          theorie: "Daarom zijn hemofilie/Duchenne/kleurenblindheid bijna alleen bij mannen. Vrouwen kunnen **draagster** zijn — geven door aan zonen.",
          niveaus: { basis: "Maar 1 X. A.", simpeler: "Man = XY = 1 X = geen reserve = A.", nogSimpeler: "1 X = A." },
        },
      },
      {
        q: "Een **draagster-moeder** (X^cX) krijgt kinderen met een **normale vader** (XY). Hoeveel % **zonen** is kleurenblind?",
        options: ["50%","100%","25%","0%"],
        answer: 0,
        wrongHints: [null, "Niet — moeder geeft maar 1 X-allel.", "Niet — vier mogelijke kinderen.", "Onmogelijk — wel kans."],
        uitlegPad: {
          stappen: [{ titel: "Punnett geslachtsgebonden", tekst: "Moeder XcX × vader XY:\n```\n       Xc    X\n  X | XcX  XX (dochters)\n  Y | XcY  XY (zonen)\n```\nZonen: 50% XcY (kleurenblind) + 50% XY (normaal). **50% van zonen kleurenblind**." }],
          theorie: "Dochters: 50% draagster XcX + 50% normaal XX. Geen kleurenblinde dochter (moet 2 Xc hebben, vader gaf gezonde X).",
          niveaus: { basis: "50%. A.", simpeler: "Draagster × normaal = 50% zonen ziek = A.", nogSimpeler: "50% = A." },
        },
      },
      {
        q: "Wat is een **testcross**?",
        options: ["Onbekende × homozygoot recessief","BB × BB","Bb × Bb","Geen kruising"],
        answer: 0,
        wrongHints: [null, "Niet — twee homozygotenkruising.", "Niet — heterozygoten F1.", "Wel — kruising bestaat."],
        uitlegPad: {
          stappen: [{ titel: "Testcross = bepaal genotype", tekst: "**Testcross** = onbekend genotype kruisen met homozygoot recessief (bb). \n• BB × bb → alle Bb → 100% dominant fenotype.\n• Bb × bb → 50% Bb (dominant) + 50% bb (recessief).\nUitkomst zegt of onbekende BB of Bb was." }],
          theorie: "Cito-pattern: 'Hoe bepaal je of dominante plant homo- of heterozygoot is?' Antwoord: testcross.",
          niveaus: { basis: "× homozygoot recessief. A.", simpeler: "Testcross = × bb = A.", nogSimpeler: "× bb = A." },
        },
      },
      {
        q: "**Hemofilie** is een __ aandoening.",
        options: ["Geslachtsgebonden recessieve","Autosomaal dominante","Autosomaal recessieve","Mitochondriale"],
        answer: 0,
        wrongHints: [null, "Niet — wel mogelijk maar hemofilie zit op X.", "Niet — wel mogelijk maar hemofilie zit op X.", "Niet — hemofilie is nucleair, niet mitochondriaal."],
        uitlegPad: {
          stappen: [{ titel: "Hemofilie op X-chromosoom", tekst: "**Hemofilie** = bloedstollings-stoornis. Gen voor stollingsfactor zit op X-chromosoom. **Recessief**, dus vrouwen alleen ziek bij XcXc (zeldzaam), mannen al ziek bij XcY (1 X). Beroemd: Russische tsaren-familie (Romanovs), Engelse koningshuis (via koningin Victoria)." }],
          theorie: "Andere voorbeelden geslachtsgebonden recessief: Duchenne, kleurenblindheid, Lesch-Nyhan-syndroom.",
          niveaus: { basis: "Geslachtsgebonden recessief. A.", simpeler: "Hemofilie = X-gebonden recessief = A.", nogSimpeler: "X-recessief = A." },
        },
      },
    ],
  },

  // ─── D. Stamboom + mutaties ───────────────────────────────
  {
    title: "Stamboomanalyse + mutaties + genetische ziekten",
    explanation:
      "**Stamboom** (pedigree) = familie-tekening die toont wie welke eigenschap heeft. CSE-favoriet — bijna elk biologie-eindexamen heeft een stamboom-vraag.\n\n**Stamboom-symbolen**:\n• ○ = vrouw (cirkel)\n• □ = man (vierkant)\n• Ingevuld (●/■) = persoon met aandoening.\n• Halfvol = draagster (vooral bij geslachtsgebonden).\n• Lijn tussen ○ en □ = paar.\n• Verticale lijn naar onder = kinderen.\n\n**Analyseren**:\n1. Is aandoening **dominant of recessief**?\n   - Dominant: minstens 1 ouder ALTIJD aangedaan.\n   - Recessief: aangedane kind kan 2 gezond-lijkende dragers-ouders hebben.\n2. Is aandoening **autosomaal of geslachtsgebonden**?\n   - Autosomaal: jongens en meisjes ongeveer even vaak.\n   - X-gebonden recessief: vooral jongens. Moeder is draagster.\n   - X-gebonden dominant: meisjes 2× vaker (2 X-chromosomen).\n3. Bepaal **genotypes** waar mogelijk.\n\n**Voorbeeld**:\n• Twee gezonde ouders krijgen een aangedaan kind → recessief.\n• Vader aangedaan + moeder gezond + alle dochters draagster + alle zonen gezond → X-gebonden recessief.\n\n**Mutaties**:\nVeranderingen in DNA-volgorde. Bronnen: kopieer-fouten bij celdeling, straling, chemische stoffen, virussen.\n\n**Soorten mutaties**:\n• **Puntmutatie**: 1 base verandert. Kan stil zijn (zelfde aminozuur), missense (ander aminozuur) of nonsense (stopcodon).\n• **Frameshift**: invoeging of deletie van basen → hele leeskader verschuift → meestal ernstig.\n• **Chromosoom-mutaties**: hele stukken verloren, gedupliceerd, omgekeerd.\n• **Aneuploïdie**: verkeerd aantal chromosomen. Bv. **trisomie 21 = Down-syndroom** (3 ipv 2 van chromosoom 21).\n\n**Wanneer mutatie ernstig**:\n• In codant DNA (gen) → eiwit-effect.\n• In niet-codant DNA → meestal geen effect.\n• In geslachtscel → doorgegeven aan nageslacht.\n• In lichaamscel → alleen die persoon.\n\n**Bekende genetische ziekten**:\n• **Cystic fibrosis (taaislijmziekte)**: autosomaal recessief, 1 op 25 NL'ers is drager.\n• **Sikkelcelanemie**: autosomaal recessief, vooral Afrikaanse afkomst.\n• **Huntington**: autosomaal **dominant**, ziekte op latere leeftijd.\n• **Down-syndroom**: trisomie 21, niet erfelijk meestal.\n• **Hemofilie / Duchenne**: X-gebonden recessief (zie stap C).",
    checks: [
      {
        q: "In een stamboom: **2 gezonde ouders** krijgen een **aangedaan kind**. Wat zegt dit?",
        options: ["Aandoening is recessief (ouders zijn dragers)","Dominant","Geslachtsgebonden","Geen erfelijke aandoening"],
        answer: 0,
        wrongHints: [null, "Niet — dominant zou minstens 1 ouder aangedaan zijn.", "Niet noodzakelijk — kan autosomaal recessief zijn.", "Wel — patroon past bij erfelijkheid."],
        uitlegPad: {
          stappen: [{ titel: "Gezonde ouders + ziek kind = recessief", tekst: "Bij **recessieve aandoening**: beide ouders zijn **dragers** (Aa). Kruising Aa × Aa → 25% kans op aa (ziek). Bij dominante: minstens 1 ouder zou ziek moeten zijn." }],
          theorie: "Cito-truc voor stambomen: zoek 'gezonde ouders + ziek kind'-combinatie → vrijwel zeker recessief.",
          niveaus: { basis: "Recessief, ouders dragers. A.", simpeler: "Gezonde ouders + ziek kind = recessief = A.", nogSimpeler: "Recessief = A." },
        },
      },
      {
        q: "Wat is **Down-syndroom** genetisch gezien?",
        options: ["Trisomie 21","Geslachtsgebonden mutatie","Punt-mutatie","Frameshift-mutatie"],
        answer: 0,
        wrongHints: [null, "Niet — chromosoom-mutatie, niet X/Y-gerelateerd.", "Niet — hele chromosoom-issue.", "Niet — hele chromosoom-issue."],
        uitlegPad: {
          stappen: [{ titel: "Trisomie 21 = 3× chromosoom 21", tekst: "**Down-syndroom** = persoon heeft **3 kopieën van chromosoom 21** ipv 2 (= trisomie 21). Oorzaak: fout in meiose — chromosoom-paar splitst niet correct. Risico stijgt met leeftijd moeder. Niet erfelijk in de meeste gevallen (toeval)." }],
          woorden: [{ woord: "trisomie", uitleg: "3 kopieën van een chromosoom in plaats van 2." }, { woord: "aneuploïdie", uitleg: "Verkeerd aantal chromosomen (trisomie, monosomie)." }],
          theorie: "Andere trisomieën: Edwards (18), Patau (13) — meestal niet-levensvatbaar. Down is mildste vorm.",
          niveaus: { basis: "Trisomie 21. A.", simpeler: "Down = 3× chrom 21 = A.", nogSimpeler: "Trisomie 21 = A." },
        },
      },
      {
        q: "Welke erfelijke ziekte is **autosomaal dominant**?",
        options: ["Huntington","Hemofilie","Cystic fibrosis","Kleurenblindheid"],
        answer: 0,
        wrongHints: [null, "X-gebonden recessief.", "Autosomaal recessief.", "X-gebonden recessief."],
        uitlegPad: {
          stappen: [{ titel: "Huntington = dominant", tekst: "**Huntington** = ziekte van zenuwstelsel, openbaart zich pas rond 40-50 jaar. Autosomaal dominant: 1 ziek allel = ziekte. 50% kans op overerving van aangedane ouder. Geen 'draagsters' — wie het gen heeft, wordt ziek." }],
          theorie: "Klassiek dilemma: testen op Huntington-gen is ethisch beladen — wil je weten dat je over 30 jaar dementeert?",
          niveaus: { basis: "Huntington. A.", simpeler: "Autosomaal dominant = Huntington = A.", nogSimpeler: "Huntington = A." },
        },
      },
      {
        q: "Wat is een **frameshift-mutatie**?",
        options: ["Invoeging/deletie verschuift leeskader","1 base verandert","Hele chromosoom verloren","Geen effect"],
        answer: 0,
        wrongHints: [null, "Dat is puntmutatie.", "Dat is chromosoom-mutatie.", "Niet — meestal grote effect."],
        uitlegPad: {
          stappen: [{ titel: "Insertie/deletie = leeskader-shift", tekst: "**Frameshift** = invoeging (insertie) of weglaten (deletie) van basen — niet 3 of 6 etc. Hele **leeskader** verschuift → alle aminozuren erna fout → eiwit functioneert niet. Meestal ernstig." }],
          theorie: "Cito-pattern: leeskader = codons van 3 basen. Verschuiving 1-2-3 basen = ramp. Verschuiving van 3 = 1 codon weg/erbij = minder ernstig.",
          niveaus: { basis: "Invoeging/deletie. A.", simpeler: "Frameshift = leeskader-shift = A.", nogSimpeler: "Shift = A." },
        },
      },
      {
        q: "Cystic fibrosis (taaislijmziekte) is:",
        options: ["Autosomaal recessief","Geslachtsgebonden","Dominant","Trisomie"],
        answer: 0,
        wrongHints: [null, "Niet — beide geslachten gelijk vatbaar.", "Niet — dragers gezond.", "Niet — gen-mutatie, geen chromosoom-aantal."],
        uitlegPad: {
          stappen: [{ titel: "CF = recessief", tekst: "**Cystic fibrosis (CF, taaislijmziekte)** = autosomaal recessief. Gen op chromosoom 7. **1 op 25 NL'ers** is drager (heterozygoot, gezond). Ziek alleen bij dubbel-recessief (homozygoot). Behandeling laatste jaren sterk verbeterd (Trikafta-medicatie)." }],
          theorie: "Cito-actueel: CF was 30 jaar geleden dodelijk in kindertijd. Nu mediaan levensverwachting ~50 jaar door betere medicatie.",
          niveaus: { basis: "Autosomaal recessief. A.", simpeler: "CF = recessief = A.", nogSimpeler: "Recessief = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — genetica mix",
    explanation:
      "Mix van DNA + Mendel + Punnett + stamboom + mutaties. HAVO/VWO-eindexamen-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "Kruising Aa × aa levert genotypes:",
        options: ["50% Aa, 50% aa","75% Aa, 25% aa","100% Aa","100% aa"],
        answer: 0,
        wrongHints: [null, "Niet — testcross is 1:1.", "Wel mogelijk maar dit is testcross — 50:50.", "Wel mogelijk maar dit is testcross — 50:50."],
        uitlegPad: {
          stappen: [{ titel: "Testcross = 1:1", tekst: "Aa geeft 50% A, 50% a. aa geeft alleen a. F1: 50% Aa + 50% aa. **Klassieke testcross-uitkomst**." }],
          niveaus: { basis: "50:50. A.", simpeler: "Aa × aa = 1:1 = A.", nogSimpeler: "50:50 = A." },
        },
      },
      {
        q: "Een vrouw met bloedgroep **A** krijgt kind met bloedgroep **O**. Welk genotype heeft de moeder?",
        options: ["AO (heterozygoot)","AA","BB","OO"],
        answer: 0,
        wrongHints: [null, "Niet — AA × OO zou alleen AO geven, geen O.", "Niet — geen B in moeder.", "Niet — dan was moeder ook O, niet A."],
        uitlegPad: {
          stappen: [{ titel: "Genotype-puzzel", tekst: "Kind is OO (alleen OO geeft fenotype O). Kind krijgt 1 allel van elk. Dus moeder MOET een O-allel hebben. Moeder is A-fenotype → genotype AO (heterozygoot). AA zou nooit O-kind kunnen krijgen." }],
          theorie: "Cito-pattern: 'bepaal genotype ouder op basis van kind-fenotype' — vooral als kind recessief is.",
          niveaus: { basis: "AO. A.", simpeler: "A-moeder + O-kind = AO heterozygoot = A.", nogSimpeler: "AO = A." },
        },
      },
      {
        q: "Een **draagster-moeder** voor hemofilie krijgt met gezonde man:",
        options: ["50% zonen ziek, 50% dochters draagster","100% zieke zonen","Geen kans op ziekte","50% van alle kinderen ziek"],
        answer: 0,
        wrongHints: [null, "Niet — slechts 50%.", "Niet — wel kans.", "Niet — dochters worden geen ziektedragers automatisch, alleen draagsters."],
        uitlegPad: {
          stappen: [{ titel: "X-gebonden recessief patroon", tekst: "XcX × XY → dochters: 50% XX (normaal) + 50% XcX (draagster). Zonen: 50% XY (normaal) + 50% XcY (ziek). **50% zonen ziek, 50% dochters draagster**." }],
          niveaus: { basis: "50% zonen ziek + 50% dochters draagster. A.", simpeler: "Hemofilie-draagster + gezond = A.", nogSimpeler: "Eerste optie = A." },
        },
      },
      {
        q: "Welk celdelingstype geeft **haploïde** dochtercellen?",
        options: ["Meiose","Mitose","Beide","Geen"],
        answer: 0,
        wrongHints: [null, "Niet — mitose maakt diploïde kopieën.", "Niet — verschillen wel.", "Niet — meiose doet het."],
        uitlegPad: {
          stappen: [{ titel: "Meiose = halveren", tekst: "**Meiose**: diploïde cel (2n=46) → 4 haploïde geslachtscellen (n=23). Voor sperma/eicel-productie. **Mitose**: diploïd → diploïd kopieën voor groei + reparatie." }],
          theorie: "Cito-tip: meiose alleen in geslachtsklieren (testis + ovarium). Mitose overal in lichaam.",
          niveaus: { basis: "Meiose. A.", simpeler: "Haploïd = meiose = A.", nogSimpeler: "Meiose = A." },
        },
      },
      {
        q: "Wat ontdekten **Watson + Crick** in 1953?",
        options: ["Dubbele helix DNA-structuur","Mendel's wetten","Evolutie-theorie","Eerste vaccin"],
        answer: 0,
        wrongHints: [null, "Niet — Mendel in 1866.", "Niet — Darwin in 1859.", "Niet — Jenner 1796."],
        uitlegPad: {
          stappen: [{ titel: "Dubbele helix 1953", tekst: "**James Watson + Francis Crick** publiceerden in **Nature, 25 april 1953** de dubbele-helix-structuur van DNA. Mede dankzij röntgen-foto's van **Rosalind Franklin** (vaak vergeten in NL-leerboeken). Kreeg Nobelprijs 1962 — Franklin was inmiddels overleden." }],
          theorie: "Cito-historische context: 1953 = mijlpaal moleculaire biologie. Mogelijk maakte 50 jaar later het Human Genome Project.",
          niveaus: { basis: "Dubbele helix DNA. A.", simpeler: "1953 = DNA-structuur = A.", nogSimpeler: "DNA = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const geneticaHavoVwo = {
  id: "genetica-havo-vwo",
  title: "Genetica + erfelijkheid (HAVO/VWO)",
  emoji: "🧬",
  level: "havo4-5-vwo",
  subject: "biologie",
  referentieNiveau: "havo-vwo-CSE",
  sloThema: "Biologie HAVO/VWO — genetica + erfelijkheid CSE-stof",
  prerequisites: [
    { id: "genetica-erfelijkheid-biologie", title: "Genetica + erfelijkheid (klas 3)", niveau: "klas3" },
    { id: "cel-biologie", title: "Cel-biologie", niveau: "vmbo-2F" },
    { id: "voortplanting-hormonen-biologie", title: "Voortplanting + hormonen", niveau: "vmbo-2F" },
  ],
  intro:
    "Genetica op HAVO/VWO-niveau: DNA-structuur + Mendel-wetten + Punnett-vierkant + geslachtsgebonden overerving (hemofilie/kleurenblindheid) + stamboomanalyse + mutaties (puntmutatie/frameshift/aneuploïdie) + bekende erfelijke ziekten. ~15 min.",
  triggerKeywords: [
    "genetica", "erfelijkheid", "DNA", "RNA",
    "Mendel", "Mendel-wetten", "monohybride", "dihybride",
    "Punnett", "Punnett-vierkant", "kruisingsschema",
    "homozygoot", "heterozygoot", "allel", "fenotype", "genotype",
    "geslachtsgebonden", "X-chromosoom", "hemofilie", "kleurenblindheid",
    "Duchenne",
    "stamboom", "pedigree",
    "mutatie", "puntmutatie", "frameshift",
    "Down", "trisomie",
    "cystic fibrosis", "taaislijmziekte", "Huntington",
    "Watson Crick", "dubbele helix",
    "meiose", "mitose",
    "co-dominantie", "onvolledige dominantie", "bloedgroep",
  ],
  chapters,
  steps,
};

export default geneticaHavoVwo;

// Leerpad: Hart + Bloedsomloop + Ademhaling — HAVO/VWO Biologie
// CSE-onderwerp mens-fysiologie. Hart, bloedvaten, bloed, longen,
// gasuitwisseling, hartziekten + leefstijl.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["❤️", "🩸", "🔴", "🫁", "🏆"];

const chapters = [
  { letter: "A", title: "Hart + bloedcirculatie", emoji: "❤️", from: 0, to: 0 },
  { letter: "B", title: "Bloedvaten + bloeddruk", emoji: "🩸", from: 1, to: 1 },
  { letter: "C", title: "Bloed-componenten", emoji: "🔴", from: 2, to: 2 },
  { letter: "D", title: "Ademhaling + longen", emoji: "🫁", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — hart + leefstijl", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Hart + circulatie ─────────────────────────────────
  {
    title: "Hart — bouw + pomp-functie + circulatie",
    explanation:
      "**Hart** = spier-pomp die bloed door lichaam circuleert.\n• Grootte ~vuist, gewicht ~300g.\n• Slaat ~70 keer/min in rust = ~100 000 keer/dag.\n• Pompt ~5 L/min in rust, tot 25 L/min bij sport.\n\n**Bouw** (4 holtes):\n• **Rechterboezem (atrium)**: ontvangt zuurstofarm bloed uit lichaam (via grote aders: vena cava).\n• **Rechterkamer (ventrikel)**: pompt naar longen (via longslagader).\n• **Linkerboezem**: ontvangt zuurstofrijk bloed uit longen (longader).\n• **Linkerkamer**: pompt naar lichaam (aorta — sterkste).\n\n**Kleppen** voorkomen terugstroming:\n• **Tricuspidalisklep**: rechterboezem → rechterkamer.\n• **Pulmonalisklep**: rechterkamer → longslagader.\n• **Mitralisklep** (= bicuspidalis): linkerboezem → linkerkamer.\n• **Aortaklep**: linkerkamer → aorta.\n\n**Hartspier (myocard)**:\n• Speciale spiercel: contraheert spontaan + ritmisch.\n• Krijgt zelf bloed via **kransslagaders** (coronair).\n• Als kransslagader verstopt: deel hartspier sterft = hartinfarct.\n\n**Hart-ritme**:\n• Eigen 'pacemaker' = **sinusknoop** in rechterboezem.\n• Stuurt elektrische puls → boezems contraheren → AV-knoop → kamers contraheren.\n• Stoornis: hartritmestoornis (arrhythmia). Behandeling: pacemaker-implantaat.\n\n**Bloedsomloop — twee circuits**:\n\n**1. Kleine (long-)circulatie**:\nRechterkamer → longslagader → longen (zuurstof opnemen, CO₂ afgeven) → longader → linkerboezem.\n\n**2. Grote (lichaams-)circulatie**:\nLinkerkamer → aorta → lichaam → organen (zuurstof afgeven, CO₂ opnemen) → vena cava → rechterboezem.\n\n**Bijzonder**:\n• Longslagaders bevatten zuurstofARM bloed (gaan NAAR longen voor zuurstof).\n• Longaders bevatten zuurstofRIJK bloed (komen UIT longen).\n• Uitzondering op vuistregel 'slagader = zuurstof, ader = arm'.\n\n**Hartslag-controle**:\n• Sympatisch zenuwstelsel: versnelt (vlucht/vecht).\n• Parasympatisch (vagus-zenuw): vertraagt (rust).\n• Adrenaline (hormoon): versnelt sterk.\n• Sport-conditie verbetert: hart pompt MEER per slag → minder slagen nodig.\n\n**Hart-volume**:\n• Slagvolume: ~70 mL per hartslag.\n• Hartminuutvolume (HMV) = slagvolume × hartfrequentie.\n• Rust: 70 × 70 ≈ 5 L/min.\n• Sport: 100+ slagvolume × 180+ = 18-25 L/min.",
    checks: [
      {
        q: "Welke kamer pompt **zuurstofrijk** bloed naar het lichaam?",
        options: ["Linkerkamer", "Rechterkamer", "Linkerboezem", "Rechterboezem"],
        answer: 0,
        wrongHints: [null, "Niet — die pompt naar longen.", "Niet — boezem ontvangt.", "Idem."],
        uitlegPad: {
          stappen: [{ titel: "Sterkste pomp", tekst: "Linkerkamer is sterkst (moet bloed door HELE lichaam pompen → dikkere spier dan rechterkamer). Aorta is dikste slagader. Bij hoge bloeddruk werkt linkerkamer extra hard → kan vergroten + falen op lange termijn." }],
          niveaus: { basis: "Linkerkamer. A.", simpeler: "Sterkste pomp = links. A.", nogSimpeler: "Links = A." },
        },
      },
      {
        q: "**Kransslagaders** voeden:",
        options: ["Hartspier zelf", "Longen", "Hersenen", "Lever"],
        answer: 0,
        wrongHints: [null, "Niet — longslagader.", "Niet — halsslagaders.", "Niet — leverslagader."],
        uitlegPad: {
          stappen: [{ titel: "Coronair = krans", tekst: "Hart pompt bloed maar moet zelf ook gevoed worden. Kransslagaders (coronair) lopen rondom hart als 'krans'. Verstopping → deel hartspier sterft = **hartinfarct**. Atherosclerose (vetafzetting in wand) hoofdoorzaak. Behandelt via stent of bypass." }],
          niveaus: { basis: "Hartspier. A.", simpeler: "Krans rond hart. A.", nogSimpeler: "Hart = A." },
        },
      },
      {
        q: "Een **longslagader** bevat:",
        options: [
          "Zuurstof-ARM bloed (gaat naar longen voor O₂)",
          "Zuurstofrijk bloed",
          "Geen bloed",
          "Voedingsstoffen alleen"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel bloed.", "Niet relevant."],
        uitlegPad: {
          stappen: [
            { titel: "Uitzondering op regel", tekst: "Gewone regel: 'slagader = zuurstofrijk, ader = arm'. Maar bij longvaten OMGEKEERD: longslagader gaat van hart NAAR longen om zuurstof OP TE NEMEN → arm bloed. Longader komt terug met zuurstofrijk bloed. Veel-gemaakte CSE-fout!" },
          ],
          niveaus: { basis: "Arm bloed. A.", simpeler: "Naar longen voor O₂. A.", nogSimpeler: "Arm = A." },
        },
      },
      {
        q: "**Sinusknoop** zit in:",
        options: [
          "Rechterboezem — natuurlijke pacemaker",
          "Linkerkamer",
          "Hersens",
          "Longen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — daar AV-knoop voor kamers.", "Hersens controleren WEL.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Eigen ritme", tekst: "Sinusknoop genereert elektrische impuls 60-100/min spontaan. Impuls → boezems samentrekken → AV-knoop vertraging 0,1 s → kamers samentrekken. Bij defect: pacemaker-implantaat met batterij in borstkas geeft elektrische pulsen." },
          ],
          niveaus: { basis: "Rechterboezem. A.", simpeler: "Eigen pacemaker. A.", nogSimpeler: "Sinus = A." },
        },
      },
      {
        q: "**Hartminuutvolume** in rust van volwassene ~?",
        options: ["5 L/min", "1 L/min", "20 L/min", "50 L/min"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Sport-niveau.", "Onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "HMV = slagvolume × frequentie", tekst: "70 mL × 70 slagen/min = 4900 mL ≈ **5 L/min**. Bij maximale inspanning: 100+ × 180+ = ~20 L/min. Hele bloedvolume (~5 L) gaat dus ~elke minuut rond." }],
          niveaus: { basis: "5 L/min. A.", simpeler: "70×70 ml = 5 L. A.", nogSimpeler: "5 = A." },
        },
      },
    ],
  },

  // ─── B. Bloedvaten + bloeddruk ────────────────────────────
  {
    title: "Bloedvaten + bloeddruk",
    explanation:
      "**Drie soorten bloedvaten**:\n\n**1. Slagaders (arteriën)**:\n• Voeren bloed VAN hart AF.\n• Dikke spierwand → bestand tegen hoge druk.\n• Stuwt bloed verder met hart-impuls (voel je als pols).\n• Klein worden tot **arteriolen** → vertakken in haarvaten.\n\n**2. Haarvaten (capillairen)**:\n• Allerkleinste bloedvaten — wand 1 cel dik.\n• HIER vindt UITWISSELING plaats: zuurstof + voedingsstoffen → cellen, CO₂ + afval → bloed.\n• Hoog oppervlak: alle haarvaten samen = ~7000 m² (= voetbalveld).\n• Geen pols meer voelbaar — druk laag.\n\n**3. Aders (venen)**:\n• Voeren bloed TERUG NAAR hart.\n• Dunne wand, lage druk.\n• Hebben **kleppen** die terugstroming voorkomen (vooral in benen).\n• Bloed terug via spier-pomp: spieren spannen → druk op aders → bloed omhoog.\n\n**Stof-uitwisseling in haarvat**:\n• Bloed komt aan met O₂ + glucose.\n• Diffusie naar weefsel: O₂ + glucose IN, CO₂ + ureum UIT.\n• Onderhalfvelden van vocht gaat uit ('weefselvloeistof').\n• Lymfevaten zuigen overschot vocht terug → naar hart-systeem.\n\n**Bloeddruk**:\n• **Systolisch** (boven-getal): druk wanneer linkerkamer pompt. Normaal: 120 mmHg.\n• **Diastolisch** (onder): druk in rust tussen slagen. Normaal: 80 mmHg.\n• Vermeld als **120/80**.\n• **Hypertensie** (hoge bloeddruk): >140/90 — risico hartziekte, beroerte, nier-problemen.\n• **Hypotensie** (lage bloeddruk): <90/60 — duizeligheid, flauwvallen.\n\n**Wat beïnvloedt bloeddruk?**\n• **Hartminuutvolume**: meer bloed = hogere druk.\n• **Vaatweerstand**: nauwer = hogere druk.\n• Stress, koffie, zout → omhoog.\n• Sport, ontspanning → omlaag.\n• Roken + obesitas + ouderdom → omhoog.\n\n**Atherosclerose** (slagaderverkalking):\n• Vetafzetting (cholesterol) in vaatwand → vernauwing → hogere druk → meer schade.\n• Risicofactoren: roken, hoog vet/zout dieet, weinig sport, genetisch.\n• Gevolgen: hartinfarct, beroerte, perifere arteriële ziekte.\n\n**Spataders** (varices):\n• Aderkleppen falen → bloed pools in benen → uitgezette aders zichtbaar.\n• Oorzaak: lang staan, zwangerschap, erfelijkheid.\n• Behandeling: steunkousen, sclerotherapie, laser.\n\n**Praktische bloeddruk-meting**:\n• Bloeddrukmanchet om arm.\n• Pompen tot circulatie afgesloten (180 mmHg).\n• Langzaam loslaten + luister met stethoscoop.\n• Eerste klop horen = systolisch (slagader heropent).\n• Klop verdwijnt = diastolisch (constant doorstromen).",
    checks: [
      {
        q: "Een **haarvat** (capillair) heeft als hoofdfunctie:",
        options: [
          "Uitwisseling stoffen tussen bloed + cellen",
          "Bloed snel transporteren",
          "Druk genereren",
          "Filter"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat doen slagaders.", "Niet — hart doet dat.", "Niet — nieren."],
        uitlegPad: {
          stappen: [{ titel: "Wand 1 cel dik", tekst: "Daarom kunnen O₂, glucose, ionen, gassen vrij diffunderen. Alle haarvaten samen ~7000 m² oppervlak in lichaam — geen weefselcel verder dan paar μm van haarvat. Daarom zo efficiënt." }],
          niveaus: { basis: "Uitwisseling. A.", simpeler: "Stoffen uitwisselen. A.", nogSimpeler: "Uitwiss = A." },
        },
      },
      {
        q: "**Aderen** hebben kleppen vooral in:",
        options: [
          "Benen (om terugstroming tegen zwaartekracht te voorkomen)",
          "Hoofd",
          "Slagaders",
          "Haarvaten"
        ],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Niet — slagaders niet.", "Niet — geen kleppen."],
        uitlegPad: {
          stappen: [
            { titel: "Zwaartekracht-uitdaging", tekst: "Bloed in benen-aders moet OMHOOG terug naar hart. Tegen zwaartekracht in. Kleppen open + dicht zorgen dat bloed niet terugzakt. Werk hard wanneer je staat. Bij falen → spataders. Tip: regelmatig lopen helpt 'spier-pomp' om bloed omhoog te duwen." },
          ],
          niveaus: { basis: "Benen. A.", simpeler: "Kleppen in benen. A.", nogSimpeler: "Benen = A." },
        },
      },
      {
        q: "**Normale bloeddruk** bij volwassene:",
        options: ["120/80 mmHg", "200/150 mmHg", "60/40 mmHg", "100/100 mmHg"],
        answer: 0,
        wrongHints: [null, "Veel te hoog — hypertensie.", "Te laag.", "Onmogelijk."],
        uitlegPad: {
          stappen: [{ titel: "Systolisch/diastolisch", tekst: "120 = piek (linkerkamer pompt). 80 = rust tussen slagen. Hypertensie >140/90, behandeling met medicatie + leefstijl-aanpassing. Te laag (<90/60) = duizeligheid bij opstaan." }],
          niveaus: { basis: "120/80. A.", simpeler: "120 boven / 80 onder. A.", nogSimpeler: "120/80 = A." },
        },
      },
      {
        q: "**Atherosclerose** = ?",
        options: [
          "Vetafzetting in slagaderwand → vernauwing",
          "Aderwand-zwakte",
          "Hartritmestoornis",
          "Bloedstolling"
        ],
        answer: 0,
        wrongHints: [null, "Niet — apart.", "Niet — apart.", "Niet — apart."],
        uitlegPad: {
          stappen: [
            { titel: "Slagaderverkalking", tekst: "Cholesterol + andere stoffen vormen plak in slagaderwand. Vernauwt opening + maakt wand stijf → hogere bloeddruk. Plak kan breken → stolsel → blokkeert vat → hartinfarct of beroerte. Risicofactoren: roken, dieet rijk in verzadigd vet, weinig sport, diabetes, hoge bloeddruk, genetisch." },
          ],
          niveaus: { basis: "Slagaderverkalking. A.", simpeler: "Vet in vaatwand. A.", nogSimpeler: "Plak = A." },
        },
      },
      {
        q: "**Spataders** ontstaan door:",
        options: [
          "Aderkleppen die niet meer sluiten → bloed-pools in benen",
          "Slagaders te smal",
          "Hartinfarct",
          "Allergie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — slagader-probleem.", "Niet — apart probleem.", "Niet."],
        uitlegPad: {
          stappen: [
            { titel: "Mechanisch probleem", tekst: "Beenaderen werken tegen zwaartekracht. Kleppen helpen normaal. Bij slijtage (lang staan, leeftijd, zwangerschap, erfelijkheid) sluiten ze niet meer → bloed zakt terug → ader gerekt → blauwe slang zichtbaar onder huid. Behandeling: steunkousen, lasertherapie, sclerose-injectie." },
          ],
          niveaus: { basis: "Klep-falen. A.", simpeler: "Bloed pools onderbeen. A.", nogSimpeler: "Klep = A." },
        },
      },
    ],
  },

  // ─── C. Bloed-componenten ─────────────────────────────────
  {
    title: "Bloed — rode + witte cellen, plaatjes, plasma",
    explanation:
      "**Bloed** = vloeibaar bindweefsel. Totaal ~5 L in volwassene (~7% lichaamsgewicht).\n\n**Vier hoofdcomponenten**:\n\n**1. Rode bloedcellen (erytrocyten, RBC)**:\n• ~25 trillion totaal, ~5 mln per mm³.\n• Levensduur 120 dagen, dan afgebroken in milt.\n• Aangemaakt in beenmerg.\n• Bevatten **hemoglobine (Hb)** — eiwit dat O₂ bindt.\n• 1 Hb-molecuul: 4 O₂-bindplaatsen (4 ijzer-atomen).\n• Schijf-vorm, geen kern, flexibel → passen door smalle haarvaten.\n\n**Anemie** (bloedarmoede):\n• Te weinig RBC of Hb.\n• Oorzaken: ijzer-tekort (vaak vrouwen door menstruatie), B12/foliumzuur-tekort, bloedingen, sikkel-cel, beenmerg-falen.\n• Symptomen: moeheid, bleek, kortademig.\n\n**2. Witte bloedcellen (leukocyten, WBC)**:\n• ~7000 per mm³ (veel minder dan RBC).\n• Bestaan uit verschillende types: neutrofielen, lymfocyten, monocyten, eosinofielen, basofielen.\n• Functie: AFWEER (zie immuunsysteem-pad).\n• Bij infectie: aantal stijgt sterk.\n\n**3. Bloedplaatjes (trombocyten)**:\n• ~250 000 per mm³.\n• Geen cellen — celfragmenten zonder kern.\n• Functie: BLOEDSTOLLING.\n• Levensduur ~10 dagen.\n\n**4. Plasma** (vloeibaar deel, ~55% van bloed):\n• 90% water.\n• Eiwitten: albumine (vasthouden water), globulines, fibrinogeen (stolling).\n• Voedingsstoffen: glucose, aminozuren, vetten.\n• Hormonen.\n• Afval: CO₂, ureum.\n• Elektrolyten: Na+, K+, Ca²+.\n\n**Bloedstolling (hemostase)**:\n1. **Vasoconstrictie**: vat krimpt om bloeding te verkleinen.\n2. **Plaatjes-prop**: bloedplaatjes klonteren rond wond.\n3. **Coagulatie**: stolling-cascade vormt fibrine-netwerk.\n4. **Wond geneest**: nieuwe cellen vormen.\n\n**Stolling-stoornissen**:\n• **Hemofilie**: erfelijke stollingsfactor-tekort → bloedt te lang. Vooral jongens (X-chromosoom). Bekend bij Britse + Russische koningshuizen ('koninklijke ziekte' verspreid via Queen Victoria).\n• **Trombose**: ongewenste stolling in vat → blokkade. Risicofactoren: lange immobiliteit (lang vliegen!), roken, pil.\n• **Anti-stollers**: aspirine, heparine, warfarine, DOAC's — voorkomen stolsels bij risico-patiënten.\n\n**Bloedgroepen** (ABO-systeem, Landsteiner 1900, Nobel 1930):\n• **A**: antigeen-A op RBC.\n• **B**: antigeen-B.\n• **AB**: beide.\n• **O**: geen.\n• Plus **Rhesus-factor**: + of −.\n\n**Wie kan aan wie doneren**:\n• O− = universele donor (kan aan iedereen).\n• AB+ = universele ontvanger (kan van iedereen).\n• Cross-match nodig om reactie te voorkomen (afweer attacks vreemd bloed).\n\n**Zwangerschap + Rhesus**:\n• Moeder Rh-, vader Rh+ → kind kan Rh+ zijn.\n• Eerste zwangerschap: meestal OK.\n• Tweede: moeder heeft antistoffen → kan kind aanvallen.\n• Voorkomen: anti-D-injectie na eerste bevalling.",
    checks: [
      {
        q: "**Hemoglobine** bindt:",
        options: ["O₂ (zuurstof)", "CO₂ uitsluitend", "Glucose", "Vet"],
        answer: 0,
        wrongHints: [null, "Wel deels, maar O₂ primair.", "Niet — albumine.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "IJzer-houdend eiwit", tekst: "Hb in rode bloedcel bevat 4 ijzer-atomen → bindt 4 O₂-moleculen. In longen (hoge O₂): bindt. In weefsel (lage O₂): laat los. Rood door ijzer. Bij CO-vergiftiging: CO bindt sterker dan O₂ → mensen stikken." }],
          niveaus: { basis: "O₂. A.", simpeler: "Zuurstof. A.", nogSimpeler: "O₂ = A." },
        },
      },
      {
        q: "**Bloedplaatjes** zijn cruciaal voor:",
        options: [
          "Bloedstolling bij wond",
          "Zuurstof-transport",
          "Afweer tegen virussen",
          "Voedingsstoffen-vervoer"
        ],
        answer: 0,
        wrongHints: [null, "Niet — RBC.", "Niet — witte bloedcellen.", "Niet — plasma."],
        uitlegPad: {
          stappen: [{ titel: "Klont vormen", tekst: "Bij wond: plaatjes worden geactiveerd, klonteren samen tot prop, geven signaal voor coagulatie-cascade → fibrine-net → stolsel houdt bloeding tegen. Te weinig plaatjes (trombocytopenie): bloed makkelijk uit, blauwe plekken. Te veel: trombose-risico." }],
          niveaus: { basis: "Stolling. A.", simpeler: "Bloedstolsel maken. A.", nogSimpeler: "Stolling = A." },
        },
      },
      {
        q: "**O-negatief** bloed is:",
        options: [
          "Universele donor — kan aan iedereen gegeven worden",
          "Universele ontvanger",
          "Zeldzaam in NL",
          "Krimpt"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is AB+.", "Niet zo zeldzaam.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Geen antigenen → geen reactie", tekst: "O = geen A/B-antigenen. Negatief = geen Rh-antigen. Lichaam ontvanger ziet niets vreemds → geen afweer. Daarom vraagteken-bloed in noodgeval. NL: ~6% bevolking. Bloedbanken doen continu campagne voor O-negatief donoren." },
          ],
          niveaus: { basis: "Universele donor. A.", simpeler: "Iedereen kan O− krijgen. A.", nogSimpeler: "O− = A." },
        },
      },
      {
        q: "**Hemofilie** is:",
        options: [
          "Erfelijke ziekte met te trage bloedstolling, vooral jongens",
          "Bloedkanker",
          "Te dik bloed",
          "Bloedgroep-mismatch"
        ],
        answer: 0,
        wrongHints: [null, "Niet — apart (leukemie).", "Tegenovergesteld.", "Niet — bloedtransfusie-fout."],
        uitlegPad: {
          stappen: [
            { titel: "X-chromosoom-gen", tekst: "Stollingsfactor-VIII of -IX defect. Mannen (XY) hebben slechts één X — bij defect: hemofilie. Vrouwen (XX) hebben backup → drager maar meestal geen ziekte. Bekendste familie: Queen Victoria + nakomelingen (Britse + Russische tsarenfamilie + Spaanse koningshuis). Behandeling: stollingsfactor-injecties." },
          ],
          niveaus: { basis: "Erfelijke stollings-issue. A.", simpeler: "Bloed stolt te traag. A.", nogSimpeler: "Hemof = A." },
        },
      },
      {
        q: "**Anemie** = ?",
        options: [
          "Te weinig rode bloedcellen of hemoglobine",
          "Te veel rode bloedcellen",
          "Bloed-infectie",
          "Hartritmestoornis"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld (polycytemie).", "Apart (sepsis).", "Apart."],
        uitlegPad: {
          stappen: [
            { titel: "Te weinig O₂-transport", tekst: "Bloed kan minder O₂ vervoeren → moeheid, bleek, kortademig. Hoofdoorzaken: ijzer-tekort (vooral menstruerende vrouwen), B12-tekort (vegetariërs let op), bloedingen (maagzweer), sikkel-cel (genetisch). Behandeling: ijzer-supplement, B12-injectie, bloed transfusie." },
          ],
          niveaus: { basis: "Te weinig RBC. A.", simpeler: "Bloedarmoede. A.", nogSimpeler: "Anemie = A." },
        },
      },
    ],
  },

  // ─── D. Ademhaling + longen ───────────────────────────────
  {
    title: "Ademhaling + longen — gasuitwisseling",
    explanation:
      "**Ademhaling** = O₂ opnemen + CO₂ afgeven.\n\n**Twee typen** (verwarrend!):\n• **Externe ademhaling**: gasuitwisseling in LONGEN.\n• **Interne ademhaling**: gasuitwisseling in WEEFSEL (haarvaten ↔ cellen).\n• **Cellulaire ademhaling**: in MITOCHONDRIA: glucose + O₂ → CO₂ + H₂O + ATP.\n\n**Anatomie luchtwegen** (van boven naar onder):\n• **Neus**: opwarmen + bevochtigen lucht, trilharen vangen stof.\n• **Keelholte (farynx)**.\n• **Strottenhoofd (larynx)**: stembanden.\n• **Luchtpijp (trachea)**: kraakbeen-ringen, trilharen + slijm vangen vuil.\n• **Bronchiën**: vertakkingen luchtpijp.\n• **Bronchiolen**: kleinere vertakkingen.\n• **Longblaasjes (alveoli)**: eindstation, hier vindt gasuitwisseling plaats. ~300 mln/long.\n\n**Gasuitwisseling in alveoli**:\n• Alveolus omgeven door haarvaten.\n• Wand alveolus + haarvat = SAMEN ~1 μm dik → makkelijke diffusie.\n• O₂ in lucht-alveolus is hoger dan in bloed → O₂ diffundeert naar bloed.\n• CO₂ in bloed hoger dan in alveolus → CO₂ diffundeert eruit.\n• Per ademteug: ~500 mL uitgewisseld (rust).\n\n**Ademhalingsmechaniek**:\n• **Inademen**:\n  - Diafragma (middenrif) trekt SAMEN → omlaag → borstkas vergroot.\n  - Tussenribspieren trekken samen → ribben omhoog → borstkas vergroot.\n  - Druk in borstkas DAALT → lucht stroomt IN.\n• **Uitademen** (in rust passief):\n  - Diafragma + ribspieren ontspannen.\n  - Borstkas verkleint → druk stijgt → lucht UIT.\n\n**Longvolumes**:\n• **Vitale capaciteit**: max in + uit te ademen = ~4-5 L (variabel).\n• **Ademvolume rust**: ~500 mL per teug, ~12 teugen/min = 6 L/min.\n• **Inspiratoire reserve**: extra inademen mogelijk.\n• **Restvolume**: ~1-1,5 L blijft altijd in longen (niet uitadembaar — voorkomt collaps).\n\n**Frequentie controle**:\n• Adem-centrum in hersenstam (medulla).\n• Sensoren voor CO₂-niveau in bloed.\n• Bij hoge CO₂ (sport, slecht-geventileerde ruimte) → centrum verhoogt frequentie.\n• Wij ademen primair op CO₂, NIET op O₂-tekort.\n\n**Lucht-samenstelling**:\n• Inademen: 21% O₂, 0,04% CO₂.\n• Uitademen: ~17% O₂, ~4% CO₂.\n• Verschil: ~4% O₂ gebruikt + ~4% CO₂ vrijgegeven per ademteug.\n\n**Aandoeningen**:\n• **Astma**: bronchiën vernauwen + slijm → benauwd. Trigger: allergie, koude, sport. Behandeling: bronchodilator (ventolin).\n• **COPD**: chronische ontsteking longen, vooral door roken. Alveoli kapot → minder oppervlak.\n• **Longontsteking (pneumonie)**: infectie longen → vocht in alveoli → moeilijke ademhaling.\n• **Longkanker**: 85% door roken.\n• **Tbc** (tuberculose): bacteriële infectie, wereldwijd nog grote killer (vooral arme landen).\n\n**Roken**:\n• 7000 chemicaliën, 70+ bewezen kankerverwekkend.\n• Vernietigt cilia (trilharen) → minder reiniging.\n• Beschadigt alveoli → COPD.\n• Verhoogt hart-vaatziekte 2-4×.\n• Stoppen verbetert binnen MAANDEN longfunctie + risico daalt door jaren.",
    checks: [
      {
        q: "Gasuitwisseling vindt plaats in:",
        options: ["Longblaasjes (alveoli)", "Luchtpijp", "Neus", "Bronchiolen"],
        answer: 0,
        wrongHints: [null, "Niet — geen uitwisseling daar.", "Niet — geen.", "Niet — alleen geleiding."],
        uitlegPad: {
          stappen: [{ titel: "300 mln per long", tekst: "Alveoli zijn eindstation: wand 1 cel dik, omgeven door haarvaten. O₂ diffundeert in, CO₂ uit. Totaal oppervlak ~70 m² per persoon (tennisbaan). Daarom enorme efficiëntie." }],
          niveaus: { basis: "Alveoli. A.", simpeler: "Longblaasjes. A.", nogSimpeler: "Alveoli = A." },
        },
      },
      {
        q: "**Diafragma** beweegt tijdens **inademen**:",
        options: ["Naar BENEDEN (samentrekken)", "Naar boven", "Niet", "Zijwaarts"],
        answer: 0,
        wrongHints: [null, "Niet — dat is uitademen.", "Wel — actief.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "Borstkas vergroten", tekst: "Diafragma is koepel-spier onderkant borstkas. Bij inademen: samentrekken → koepel afvlakt → naar beneden → borstkas-volume groter → druk daalt → lucht stroomt IN. Bij uitademen ontspannen → koepel terug omhoog." }],
          niveaus: { basis: "Omlaag. A.", simpeler: "Naar beneden = ruimte. A.", nogSimpeler: "Beneden = A." },
        },
      },
      {
        q: "Wij ademen voornamelijk op:",
        options: [
          "CO₂-niveau in bloed (niet O₂)",
          "O₂-tekort",
          "Spier-vermoeidheid",
          "Hersengolven"
        ],
        answer: 0,
        wrongHints: [null, "Verassend tegenovergesteld.", "Niet primair.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Klassieke biologie-feit", tekst: "Adem-centrum in medulla meet CO₂ via pH-verandering (CO₂ + H₂O → H₂CO₃ → H+). Hoog CO₂ → 'ademen!'-signaal. Daarom kun je adem-inhouden moeilijk doorzetten: niet O₂-tekort triggert, maar CO₂-stijging. Hyperventileren (te diep, te snel) wast CO₂ weg → minder ademimpuls → duizelig." },
          ],
          niveaus: { basis: "CO₂. A.", simpeler: "CO₂ niet O₂. A.", nogSimpeler: "CO₂ = A." },
        },
      },
      {
        q: "**COPD** wordt vooral veroorzaakt door:",
        options: ["Roken", "Allergie", "Genen", "Virus"],
        answer: 0,
        wrongHints: [null, "Niet primair.", "Speelt rol bij sommige.", "Niet hoofdoorzaak."],
        uitlegPad: {
          stappen: [
            { titel: "Niet-omkeerbare longschade", tekst: "Chronic Obstructive Pulmonary Disease. ~90% door roken. Trilharen vernietigd → slijm + bacteriën → chronische ontsteking → alveolus-wanden weg → minder oppervlak → benauwd, vooral bij inspanning. NIET genezen, alleen vertragen door stoppen + medicatie." },
          ],
          niveaus: { basis: "Roken. A.", simpeler: "Roken vernietigt longen. A.", nogSimpeler: "Roken = A." },
        },
      },
      {
        q: "Wat is **vitale capaciteit**?",
        options: [
          "Maximum dat je in + uit kunt ademen",
          "Constant ademvolume",
          "O₂-niveau bloed",
          "Hartslag"
        ],
        answer: 0,
        wrongHints: [null, "Niet — ademvolume in rust.", "Niet — saturatie.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "~4-5 L", tekst: "Maximum diep inademen + helemaal uitademen. Wordt gemeten met spirometer in ziekenhuis. Topsporters hoger (5-6 L). Bij COPD/longziekte daalt. Restvolume ~1,5 L blijft altijd (voorkomt alveolus-collaps)." }],
          niveaus: { basis: "Max ademen. A.", simpeler: "Diepste in/uit-ademing. A.", nogSimpeler: "Max = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — Hartziekten + leefstijl",
    explanation:
      "**Hart- en vaatziekten** zijn wereldwijd doodsoorzaak #1.\n• ~18 mln doden/jaar wereldwijd.\n• In NL: ~30% van alle doden.\n• Vooral mannen, maar vrouwen ook stijgend.\n\n**Hoofdziekten**:\n\n**1. Hartinfarct (myocardinfarct)**:\n• Kransslagader verstopt door stolsel → deel hartspier sterft.\n• Symptomen: drukkende pijn borst, naar arm uitstralend, zweten, kortademig.\n• Eerste hulp: ambulance bellen, aspirine kauwen (versnelt bloed), reanimatie als bewustelos.\n• Behandeling ziekenhuis: dotter (PCI: stent plaatsen om vat open te maken) binnen 90 min van pijn-begin.\n\n**2. Beroerte (CVA, stroke)**:\n• Bloedvat in hersenen verstopt (ischemisch) of gescheurd (hemorragisch).\n• Hersencellen sterven snel — 'time is brain'.\n• Symptomen FAST: **F**ace droopen, **A**rm zwakte, **S**peech onduidelijk, **T**ime om 112 te bellen.\n• Behandeling: trombolyse (stolseloplosser) of trombectomie (mechanisch verwijderen) binnen uren.\n\n**3. Hartfalen**:\n• Hart pompt onvoldoende → vocht ophoping in longen + benen.\n• Vaak gevolg langdurig hoge bloeddruk, infarct, kleplek.\n• Behandeling: medicatie, leefstijl, soms harttransplantatie.\n\n**4. Hartritmestoornissen**:\n• Atriumfibrilleren: boezems trillen ipv pompen → stolsel-risico.\n• Behandeling: medicatie, pacemaker, ablatie.\n\n**Risicofactoren** (te beïnvloeden):\n• Roken (verdubbelt risico).\n• Hoge bloeddruk (>140/90).\n• Hoog cholesterol (LDL).\n• Diabetes (suikerziekte).\n• Obesitas (BMI >30).\n• Sedentair leven (te weinig sport).\n• Slechte voeding (veel verzadigd vet, zout, suiker).\n• Stress + slecht slapen.\n• Alcohol-overmaat.\n\n**Niet-beïnvloedbaar**:\n• Leeftijd (>55 risico stijgt).\n• Geslacht (man > vrouw tot menopauze).\n• Familiegeschiedenis (genetisch).\n• Etniciteit.\n\n**Preventie via leefstijl**:\n\n**1. Sport**: 150 min/week matig of 75 min intensief.\n• Verbetert hart-conditie, lager bloeddruk + cholesterol.\n• Even kleine wandelingen helpen (10k stappen/dag).\n\n**2. Voeding** (Mediterrane dieet bewezen beste):\n• Veel groenten + fruit (5-7 porties/dag).\n• Vis 2× per week (omega-3).\n• Noten + olijfolie ipv boter.\n• Minder rood vlees + verwerkt vlees.\n• Vermijd transvetten + ultra-bewerkt voedsel.\n• Zout < 5 g/dag (NL gemiddelde 9 g).\n\n**3. Niet roken** (en stoppen):\n• Risico daalt 50% in 1 jaar.\n• Na 15 jaar bijna terug naar nooit-roker.\n\n**4. Alcohol matig**:\n• 0 = ideaal volgens WHO 2023.\n• Max 1 glas/dag voor vrouwen, 2 voor mannen (oudere richtlijn).\n\n**5. Gezond gewicht**:\n• BMI 18,5-25.\n• Buikomvang: man <94 cm, vrouw <80 cm.\n\n**6. Slaap**: 7-9 uur per nacht. Te weinig slaap verhoogt risico.\n\n**7. Stress-management**: meditatie, sport, sociale contacten.\n\n**Medische check-ups**:\n• Vanaf 40-50: bloeddruk + cholesterol periodiek meten.\n• Bij risico: medicatie (statines voor cholesterol, bloeddrukverlagers).\n• Aspirine-profylaxe: alleen op medisch advies (kan bloedingen veroorzaken).\n\n**Reanimatie + AED**:\n• Hartstilstand: bewustzijn weg + geen ademhaling → reanimatie!\n• 30 borstcompressies + 2 beademingen (of alleen compressies).\n• **AED**: automatische externe defibrillator — geeft elektrische schok om hart te resetten. In NL ~80 000 publiek beschikbaar.\n• Snelle hulp redt levens: elke minuut zonder zuurstof = 10% minder overlevings-kans.",
    checks: [
      {
        q: "**FAST-acroniem** voor beroerte:",
        options: [
          "Face / Arm / Speech / Time",
          "Fast / Aspirin / Sport / Talk",
          "Food / Air / Stand / Talk",
          "Geen acroniem"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Onzin.", "Wel."],
        uitlegPad: {
          stappen: [
            { titel: "Herken beroerte", tekst: "**F**ace: hangt mondhoek af bij glimlachen? **A**rm: kan beide armen omhoog houden? **S**peech: spraak onduidelijk? **T**ime: bel 112 ONMIDDELLIJK. Tijd is hersenweefsel - hoe sneller behandeling, hoe meer behoud. Behandeling werkt alleen binnen ~4,5 uur na begin." },
          ],
          niveaus: { basis: "FAST. A.", simpeler: "Face Arm Speech Time. A.", nogSimpeler: "FAST = A." },
        },
      },
      {
        q: "**Mediterrane dieet** is goed omdat:",
        options: [
          "Veel groenten/vis/noten/olijfolie + weinig vlees → lager hart-vaatrisico",
          "Veel vlees",
          "Veel suiker",
          "Geen relatie"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Tegenovergesteld.", "Wel relatie."],
        uitlegPad: {
          stappen: [
            { titel: "Bewezen door PREDIMED-studie 2013", tekst: "Spaanse studie 7000 mensen, 5 jaar. Mediterrane dieet verlaagde hart-vaatziekte ~30% vergeleken met laagvet-dieet. Olijfolie + noten gunstige vetten. Vis omega-3. Veel plantaardig. Minder rood vlees + zout. Eenvoudig + lekker." },
          ],
          niveaus: { basis: "Mediterraan = gezond. A.", simpeler: "Olijfolie + vis + groente. A.", nogSimpeler: "Mediter = A." },
        },
      },
      {
        q: "**Roken stoppen**: risico hart-vaatziekte daalt:",
        options: [
          "~50% binnen 1 jaar, bijna naar nooit-roker na 15 jaar",
          "Direct naar nul",
          "Pas na 30 jaar",
          "Nooit"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geleidelijk.", "Sneller.", "Helemaal niet — wel verbetering."],
        uitlegPad: {
          stappen: [
            { titel: "Het loont altijd te stoppen", tekst: "Bekend feit van campagnes. 1 jaar stop: ~50% minder hart-aanval-risico. 5 jaar: beroerte-risico bijna gelijk nooit-roker. 10 jaar: longkanker-risico halveert. 15 jaar: bijna alle risico's gelijk. Daarom: stoppen lonen wat leeftijd ook." },
          ],
          theorie: "Vape (e-sigaret): minder schadelijk dan tabak maar niet veilig — nicotine + onbekende lange-termijn-effecten.",
          niveaus: { basis: "Snelle daling. A.", simpeler: "Stop = veel beter binnen jaar. A.", nogSimpeler: "Stop = A." },
        },
      },
      {
        q: "Een **AED** is:",
        options: [
          "Automatische Externe Defibrillator — schok hart bij stilstand",
          "Adem-Eerste-Devies",
          "Allergie-Eet-Dieet",
          "Anti-Drugs"
        ],
        answer: 0,
        wrongHints: [null, "Onzin.", "Onzin.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Levens-redder", tekst: "Bij hartstilstand: hart fibrilleert (chaotische beweging, geen pomp). AED detecteert + geeft elektrische schok om ritme te herstellen. ~80 000 AEDs in NL openbaar beschikbaar (HartslagNu.nl-app toont nabij). Gebruik vereist geen medisch diploma. Combineer met reanimatie." },
          ],
          niveaus: { basis: "Defibrillator. A.", simpeler: "Hart-schok-apparaat. A.", nogSimpeler: "AED = A." },
        },
      },
      {
        q: "WHO-advies voor sport voor hart:",
        options: [
          "150 min/week matig of 75 min intensief",
          "10 min/dag",
          "30 min/maand",
          "Geen advies"
        ],
        answer: 0,
        wrongHints: [null, "Veel te weinig.", "Te weinig.", "Wel advies."],
        uitlegPad: {
          stappen: [
            { titel: "Beweegrichtlijn", tekst: "150 min/week = 30 min × 5 dagen 'matig' (snelwandelen, fietsen, dansen). Of 75 min intensief (joggen, zwemmen, tennis). Plus 2× per week kracht-training. Lager risico hart-vaatziekte, diabetes type 2, sommige kankers, dementie." },
          ],
          theorie: "Zelfs 10k stappen per dag (wandelen) helpt aanzienlijk.",
          niveaus: { basis: "150 min/week. A.", simpeler: "Half uur 5 dagen. A.", nogSimpeler: "150 min = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const hartBloedAdemhalingHavoVwo = {
  id: "hart-bloed-ademhaling-havo-vwo",
  title: "Hart + Bloedsomloop + Ademhaling (HAVO/VWO Biologie)",
  emoji: "❤️",
  level: "havo-vwo-4-5",
  subject: "biologie",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Biologie — Hart + Bloed + Ademhaling (CSE-onderwerp)",
  prerequisites: [
    { id: "zenuwstelsel-hormonen-havo-vwo", title: "Zenuwstelsel + Hormonen", niveau: "havo-3F" },
  ],
  intro:
    "Hart + Bloedsomloop + Ademhaling voor HAVO/VWO eindexamen — hart-anatomie + kleppen + circulatie, bloedvaten + bloeddruk, bloed-componenten (RBC/WBC/plaatjes/plasma), longen + gasuitwisseling, hartziekten + preventie via leefstijl. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "hart", "myocard",
    "rechterboezem", "rechterkamer",
    "linkerboezem", "linkerkamer",
    "tricuspidalisklep", "mitralisklep", "aortaklep",
    "sinusknoop", "AV-knoop",
    "pacemaker",
    "kransslagader", "coronair",
    "kleine circulatie", "longcirculatie",
    "grote circulatie", "lichaamscirculatie",
    "aorta", "vena cava",
    "longslagader", "longader",
    "hartminuutvolume",
    "bloedvat", "slagader", "ader", "haarvat", "capillair",
    "bloeddruk", "systolisch", "diastolisch",
    "hypertensie", "hypotensie",
    "atherosclerose", "slagaderverkalking",
    "spataders",
    "rode bloedcel", "erytrocyt",
    "hemoglobine", "Hb",
    "anemie", "bloedarmoede",
    "witte bloedcel", "leukocyt",
    "bloedplaatje", "trombocyt",
    "plasma",
    "bloedstolling", "coagulatie",
    "hemofilie",
    "trombose",
    "bloedgroep", "ABO", "rhesus",
    "longen", "alveoli", "longblaasje",
    "trachea", "bronchiën",
    "diafragma", "middenrif",
    "vitale capaciteit",
    "astma", "COPD",
    "longontsteking", "pneumonie",
    "longkanker",
    "hartinfarct",
    "beroerte", "CVA", "FAST",
    "hartfalen",
    "atriumfibrilleren",
    "leefstijl",
    "mediterrane dieet",
    "AED", "reanimatie",
  ],
  chapters,
  steps,
};

export default hartBloedAdemhalingHavoVwo;

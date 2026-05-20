// Leerpad: Immuunsysteem + Afweer — HAVO/VWO Biologie
// CSE-onderwerp. Aspecifieke vs specifieke afweer, T- + B-cellen,
// antilichamen, vaccinaties, auto-immuun + allergieën.
// 5 stappen × ~5 checks. Referentieniveau havo-3F / vwo-3S.

const stepEmojis = ["🛡️", "🦠", "💉", "🧬", "🏆"];

const chapters = [
  { letter: "A", title: "Aspecifieke afweer", emoji: "🛡️", from: 0, to: 0 },
  { letter: "B", title: "Specifieke afweer (B + T)", emoji: "🦠", from: 1, to: 1 },
  { letter: "C", title: "Vaccinatie + immuniteit", emoji: "💉", from: 2, to: 2 },
  { letter: "D", title: "Auto-immuun + allergie", emoji: "🧬", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht — pandemie + actueel", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Aspecifieke afweer ────────────────────────────────
  {
    title: "Aspecifieke afweer — barrières + ontstekingsreactie",
    explanation:
      "**Immuunsysteem** verdedigt tegen ziekteverwekkers (pathogenen): bacteriën, virussen, schimmels, parasieten.\n\n**Twee hoofdlijnen**:\n• **Aspecifiek** (= niet-gericht, snel, aangeboren): werkt tegen ALLES.\n• **Specifiek** (= gericht, langzamer, verworven): herkent + onthoudt specifieke pathogenen.\n\n**Aspecifieke afweer — 3 lagen**:\n\n**1. Externe barrières**:\n• **Huid**: fysieke barrière + zuur (pH ~5).\n• **Slijmvliezen** (neus, longen, darm): vangen pathogenen op.\n• **Trilharen** in luchtwegen: spoelen slijm met indringers omhoog.\n• **Maagsap** (pH ~2): doodt meeste pathogenen.\n• **Traanvocht + speeksel**: bevatten **lysozym** (enzym dat bacterie-celwanden afbreekt).\n• **Goede bacteriën** (microbiota): verdringen pathogenen.\n\n**2. Interne aspecifieke reactie**:\n• **Ontsteking** (rood, warm, gezwollen, pijn) bij binnendringen:\n  - Bloedvaten verwijden → meer bloed → rood/warm.\n  - Doorlatender → vocht uit → zwelling.\n  - Witte bloedcellen lokken erin via chemische signalen.\n• **Fagocyten** (macrofagen + neutrofielen): 'opeters' van pathogenen.\n• **Koorts**: hoger T → minder gunstig voor pathogenen + sneller immuunwerk.\n\n**3. Aspecifieke moleculen**:\n• **Complement-systeem**: bloedeiwitten die pathogenen markeren of doorboren.\n• **Interferonen**: virus-geïnfecteerde cellen sturen waarschuwing naar buurcellen.\n\n**Snel maar grof**:\n• Reageert binnen minuten/uren.\n• Geen 'geheugen' — elke keer opnieuw.\n• Geen onderscheid tussen verschillende pathogenen.\n\n**Cito-vraag-type**:\n• 'Welke is aspecifiek?' — huid, slijmvlies, fagocytose.\n• 'Wat is functie van koorts?' — hogere T remt pathogenen + activeert immuuncellen.\n• 'Waarom doen rood/warm/gezwollen?' — ontstekingsreactie.",
    checks: [
      {
        q: "Welke is **aspecifieke** afweer?",
        options: [
          "Huid (fysieke barrière)",
          "Antilichamen tegen specifiek virus",
          "T-cellen herkennen specifieke antigenen",
          "Immuun-geheugen"
        ],
        answer: 0,
        wrongHints: [null, "Wel specifiek (gericht op virus).", "Specifieke afweer.", "Specifiek."],
        uitlegPad: {
          stappen: [{ titel: "Niet-gericht", tekst: "Huid blokkeert ALLES: virussen, bacteriën, parasieten — geen onderscheid. Aspecifiek = aangeboren + algemeen. Specifiek = doelgericht (B/T-cellen + antilichamen)." }],
          niveaus: { basis: "Huid. A.", simpeler: "Huid = barrière voor alles. A.", nogSimpeler: "Huid = A." },
        },
      },
      {
        q: "Wat is **fagocytose**?",
        options: [
          "Witte bloedcellen 'eten' pathogenen op",
          "Antilichamen aanmaken",
          "Koorts verhogen",
          "Trilharen bewegen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is specifieke afweer.", "Niet — gevolg, niet mechanisme.", "Niet — wel afweer, ander."],
        uitlegPad: {
          stappen: [{ titel: "'Fago' = eten, 'cyt' = cel", tekst: "Macrofagen + neutrofielen omsluiten pathogeen met celmembraan → opnemen in cel → afbreken met enzymen. Klassieke aspecifieke afweer. Macrofaag = 'grote eter' in Grieks." }],
          niveaus: { basis: "Cellen eten pathogeen. A.", simpeler: "Witte bloedcel slokt op. A.", nogSimpeler: "Eten = A." },
        },
      },
      {
        q: "**Koorts** is een immuunmechanisme dat:",
        options: [
          "Hogere lichaamstemperatuur → minder gunstig voor pathogenen + sneller afweer",
          "Direct virussen doodt",
          "Antilichamen aanmaakt",
          "Geen functie heeft"
        ],
        answer: 0,
        wrongHints: [null, "Niet — indirect.", "Niet — fagocyt-werk.", "Wel functie."],
        uitlegPad: {
          stappen: [
            { titel: "T-stijging als wapen", tekst: "Bij infectie maakt lichaam **pyrogenen** (interleukine-1) die hypothalamus opdragen T omhoog te zetten. Pathogenen + virus-replicatie remmen bij hogere T. Immuuncel-werking versnelt. Bij T>40°C wel risico — paracetamol-grens." },
          ],
          niveaus: { basis: "Pathogenen geremd. A.", simpeler: "Warmte slecht voor ziektes. A.", nogSimpeler: "Warmte = A." },
        },
      },
      {
        q: "**Rood + warm + gezwollen + pijn** op infectie-plek is:",
        options: [
          "Ontstekingsreactie (vasodilatatie + meer bloedvloei)",
          "Antilichaam-reactie",
          "T-cel attack",
          "Allergie"
        ],
        answer: 0,
        wrongHints: [null, "Geen direct antilichaam-effect.", "T-cellen op andere plek.", "Geen allergeen."],
        uitlegPad: {
          stappen: [
            { titel: "5 tekenen ontsteking", tekst: "Rubor (rood), calor (warm), tumor (zwelling), dolor (pijn), functio laesa (functieverlies). Veroorzaakt door histamine + ander cytokinen. Bloedvaten verwijden + doorlatender → meer immuunwerk ter plekke." },
          ],
          niveaus: { basis: "Ontstekingsreactie. A.", simpeler: "Inflammation. A.", nogSimpeler: "Ontsteking = A." },
        },
      },
      {
        q: "Welke is GEEN externe barrière?",
        options: [
          "T-lymfocyten",
          "Huid",
          "Slijmvlies",
          "Maagsap"
        ],
        answer: 0,
        wrongHints: [null, "Wel barrière.", "Wel barrière.", "Wel barrière."],
        uitlegPad: {
          stappen: [{ titel: "T-cellen zijn intern", tekst: "T-lymfocyten zijn witte bloedcellen → SPECIFIEKE INTERNE afweer (lymfeknopen, bloed). Huid/slijmvliezen/maagsap/traanvocht zijn externe barrières (eerste-lijn aspecifiek)." }],
          niveaus: { basis: "T-cellen niet extern. A.", simpeler: "T-cel = intern specifiek. A.", nogSimpeler: "T = A." },
        },
      },
    ],
  },

  // ─── B. Specifieke afweer ─────────────────────────────────
  {
    title: "Specifieke afweer — B + T cellen + antilichamen",
    explanation:
      "**Specifieke afweer** = gericht op specifiek antigeen + geheugen.\n• Trager (dagen tot weken) maar krachtiger + duurzamer.\n• Werkt via twee soorten **lymfocyten**:\n\n**B-lymfocyten** (B = bone marrow / been-merg):\n• Produceren **antilichamen** (Y-vormige eiwitten).\n• Antilichaam herkent specifiek **antigeen** (kenmerk op pathogeen).\n• Bindt aan antigeen → markeert voor fagocyten of blokkeert.\n• **Plasmacellen**: actieve B-cellen die massaal antilichamen maken.\n• **Geheugen-B-cellen**: blijven jaren leven → snelle response bij hercontact.\n\n**T-lymfocyten** (T = thymus = zwezerik):\n• Drie hoofd-types:\n  - **T-helper (CD4+)**: 'dirigent' — activeert B-cellen + andere T-cellen.\n  - **T-killer/cytotoxisch (CD8+)**: doodt geïnfecteerde lichaamscellen.\n  - **T-regulator**: dempt immuunreactie als nodig.\n• Werken via direct contact (geen antilichamen).\n• Cruciaal voor virussen (binnen-cel-pathogenen).\n\n**Antigenen** (Ag):\n• Moleculen op pathogeen-oppervlak die immuunsysteem herkent.\n• Vaak eiwitten of suikers.\n• Elk pathogeen heeft uniek antigeen-profiel.\n\n**Hoe werkt het** (vereenvoudigd):\n1. Macrofaag eet pathogeen.\n2. Toont antigeen op zijn oppervlak.\n3. T-helper herkent + activeert B-cel én T-killer met dezelfde specifiteit.\n4. B-cellen vermenigvuldigen → plasmacellen → antilichamen.\n5. T-killers doden geïnfecteerde cellen.\n6. Pathogeen geëlimineerd.\n7. Geheugen-cellen blijven achter.\n\n**Antilichamen-types** (immunoglobulinen):\n• **IgG**: meest voorkomend (80%), bescherming langere tijd.\n• **IgM**: eerste respons.\n• **IgA**: in slijmvliezen + moedermelk.\n• **IgE**: allergie + parasieten.\n• **IgD**: B-cel-receptoren.\n\n**Primaire vs secundaire respons**:\n• Eerste blootstelling: 1-2 weken voor antilichaamproductie (primair).\n• Tweede blootstelling: dagen, veel meer antilichamen (secundair) — door geheugen.\n• Daarom worden veel ziektes maar één keer doorgemaakt.",
    checks: [
      {
        q: "**B-cellen** produceren:",
        options: ["Antilichamen", "Insuline", "Hemoglobine", "Stresshormonen"],
        answer: 0,
        wrongHints: [null, "Niet — pancreas-cellen.", "Niet — rode bloedcellen.", "Niet — bijnieren."],
        uitlegPad: {
          stappen: [{ titel: "Plasmacel-fabriek", tekst: "Een actieve B-cell (plasmacel) maakt tot 2000 antilichaam-moleculen per seconde. Antilichamen circuleren in bloed + lymfe → binden aan antigeen op pathogeen → markeren voor opruiming." }],
          niveaus: { basis: "Antilichamen. A.", simpeler: "B = antilichaam-maker. A.", nogSimpeler: "Ab = A." },
        },
      },
      {
        q: "**T-helper-cellen** (CD4+) zijn cruciaal omdat ze:",
        options: [
          "B-cellen + andere T-cellen activeren (dirigent)",
          "Direct pathogenen eten",
          "Antilichamen maken",
          "Bloed-stolling regelen"
        ],
        answer: 0,
        wrongHints: [null, "Niet — fagocyten doen dat.", "Niet — dat is B-cel.", "Niet — irrelevant."],
        uitlegPad: {
          stappen: [
            { titel: "HIV vernietigt deze cellen", tekst: "T-helper coördineert hele immuunrespons. HIV-virus richt zich specifiek op T-helpers → bij AIDS vermindering tot <200 cellen/mm³ → immuunsysteem instort → opportunistische infecties. Daarom werkt HIV-therapie via T-helper-bescherming." },
          ],
          niveaus: { basis: "Activator. A.", simpeler: "Dirigent immuunsysteem. A.", nogSimpeler: "Activator = A." },
        },
      },
      {
        q: "Wat is een **antigeen**?",
        options: [
          "Molecuul op pathogeen dat immuunsysteem herkent",
          "Antilichaam dat lichaam maakt",
          "Virus zelf",
          "Vaccin"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet — antigenen ZITTEN op pathogeen.", "Niet — bevat antigeen maar is niet hetzelfde."],
        uitlegPad: {
          stappen: [
            { titel: "Antigeen = herken-molecuul", tekst: "Antigenen zijn eiwitten/suikers op pathogeen-oppervlak. Antilichamen binden specifiek aan één antigeen. Vaccin bevat (verzwakt) antigeen → lichaam maakt geheugen zonder ziekte." },
          ],
          niveaus: { basis: "Pathogeen-molecuul. A.", simpeler: "Vlag op pathogeen. A.", nogSimpeler: "Antigen = A." },
        },
      },
      {
        q: "Wat is **secundaire immuunrespons**?",
        options: [
          "Bij hercontact met zelfde antigeen: sneller + krachtiger door geheugencellen",
          "Eerste reactie op pathogeen",
          "Allergische reactie",
          "Auto-immuun"
        ],
        answer: 0,
        wrongHints: [null, "Niet — dat is primair.", "Niet — apart proces.", "Niet — fout-reactie."],
        uitlegPad: {
          stappen: [
            { titel: "Sneller via geheugen", tekst: "Primair: 1-2 weken voor antilichaam-productie. Secundair: 1-3 dagen, met 10-100× meer antilichamen. Verklaart waarom mazelen na één keer nooit meer terug komt + waarom vaccinaties werken." },
          ],
          niveaus: { basis: "Sneller + krachtiger. A.", simpeler: "2e keer sneller dankzij geheugen. A.", nogSimpeler: "Snel = A." },
        },
      },
      {
        q: "**T-killer-cellen** doden vooral:",
        options: [
          "Lichaamscellen die door virus geïnfecteerd zijn",
          "Bacteriën direct",
          "Allergenen",
          "Schimmels"
        ],
        answer: 0,
        wrongHints: [null, "Niet — bacteriën via antilichamen + fagocyten.", "Geen rol.", "Geen rol."],
        uitlegPad: {
          stappen: [
            { titel: "Virus-respons", tekst: "Virussen verstoppen binnen lichaamscellen → antilichamen kunnen daar niet komen. T-killers herkennen geïnfecteerde cellen via virale antigenen op celoppervlak → doden cel (apoptose) → virus stopt vermenigvuldiging. Cruciaal voor virus-bestrijding." },
          ],
          niveaus: { basis: "Geïnfecteerde cellen. A.", simpeler: "Cellen vol virus weg. A.", nogSimpeler: "Geinf cellen = A." },
        },
      },
    ],
  },

  // ─── C. Vaccinatie + immuniteit ───────────────────────────
  {
    title: "Vaccinatie + immuniteit — actief + passief",
    explanation:
      "**Vaccinatie** = bewust antigeen toedienen om immuunrespons + geheugen op te wekken ZONDER ziekte.\n\n**Vaccin-types**:\n• **Verzwakt** (live attenuated): mazelen, BMR, geel koorts. Sterke + langdurige immuniteit, maar niet voor immuun-zwakke patiënten.\n• **Geïnactiveerd**: griep, polio (IPV), tetanus. Veiliger maar zwakker → boosters nodig.\n• **Subunit** (alleen eiwit): hepatitis B, HPV. Heel veilig.\n• **Toxoid** (gif onschadelijk gemaakt): difterie, tetanus.\n• **mRNA** (nieuw): COVID-19 (Pfizer, Moderna). mRNA codeert voor antigeen → eigen cellen maken het. Snel ontwikkelbaar.\n• **Vector** (ander virus draagt antigeen): AstraZeneca, Janssen voor COVID.\n\n**Immuniteit-types**:\n\n**1. Actieve immuniteit** (lichaam maakt zelf antilichamen + geheugen):\n• **Natuurlijk**: door ziekte zelf doormaken.\n• **Kunstmatig**: door vaccinatie.\n• Geheugen: jaren tot levenslang.\n\n**2. Passieve immuniteit** (kant-en-klare antilichamen ontvangen):\n• **Natuurlijk**: baby via placenta (IgG) + moedermelk (IgA).\n• **Kunstmatig**: serum/immunoglobuline-injectie (na slangenbeet, tetanus, hondsdolheid).\n• Geen geheugen → tijdelijk (weken-maanden).\n\n**Groepsimmuniteit (herd immunity)**:\n• Wanneer voldoende % bevolking immuun (door vaccin of ziekte) → pathogeen verspreidt zich niet meer effectief → ook niet-immune mensen beschermd.\n• Drempel hangt af van besmettelijkheid:\n  - Mazelen (R₀ 12-18): ~95% nodig.\n  - COVID-19 (R₀ 2-3): ~65-70%.\n  - Polio: ~80-85%.\n• Beschermt mensen die niet zelf kunnen vaccineren (baby's, kanker-patiënten, immuun-zwakken).\n\n**RIVM-vaccinatieprogramma NL** (Rijksvaccinatie):\n• DKTP-Hib-HepB (6-in-1) op 3/5/11 maanden.\n• BMR (bof, mazelen, rode hond): 14 maanden + 9 jaar.\n• MenACWY (meningokokken) op 14 mnd + 14 jr.\n• HPV (kanker): 10 jaar (sinds 2022 ook jongens).\n\n**Vaccinatie-effecten wereld**:\n• Pokken UITGEROEID (laatste 1977) — WHO succes 1980.\n• Polio bijna uitgeroeid (alleen Afghanistan + Pakistan nog).\n• Mazelen-doden gehalveerd sinds 2000 maar nog ~140 000 per jaar.\n\n**Bijwerkingen** zijn meestal mild (pijn arm, lichte koorts). Ernstige bijwerkingen extreem zeldzaam (~1 op miljoen). Voordeel : risico ratio is enorm.",
    checks: [
      {
        q: "**Actieve immuniteit** krijg je via:",
        options: [
          "Ziekte doormaken OF vaccinatie",
          "Antilichaam-injectie",
          "Borstvoeding",
          "Erfelijkheid"
        ],
        answer: 0,
        wrongHints: [null, "Passieve immuniteit.", "Passief (via moedermelk).", "Geen erfelijke immuniteit."],
        uitlegPad: {
          stappen: [{ titel: "Eigen aanmaak", tekst: "Lichaam maakt zelf antilichamen + geheugen-cellen. Duurzaam (jaren-levenslang). Vaccinatie geeft hetzelfde effect zonder ziekte. Passief = kant-en-klare antilichamen ontvangen (geen geheugen, tijdelijk)." }],
          niveaus: { basis: "Ziekte of vaccin. A.", simpeler: "Eigen aanmaak. A.", nogSimpeler: "Eigen = A." },
        },
      },
      {
        q: "**Groepsimmuniteit** beschermt vooral:",
        options: [
          "Mensen die niet zelf gevaccineerd kunnen worden (baby, kanker-patiënten)",
          "Gevaccineerden",
          "Alleen kinderen",
          "Niemand"
        ],
        answer: 0,
        wrongHints: [null, "Die zijn al beschermd.", "Niet beperkt.", "Wel effect."],
        uitlegPad: {
          stappen: [
            { titel: "Indirecte bescherming", tekst: "Bij hoge vaccinatie-graad: pathogeen kan niet circuleren. Zelfs niet-immune individu (baby <14 mnd voor BMR, chemo-patiënt, allergische voor vaccin) wordt beschermd want niemand om hem heen kan ziek worden. **Solidariteits-aspect** van vaccinatie." },
          ],
          theorie: "Daarom doet anti-vaccinatie schade aan mensen die niet kunnen vaccineren — niet alleen aan zichzelf.",
          niveaus: { basis: "Niet-vaccineerbaren. A.", simpeler: "Beschermt kwetsbaren. A.", nogSimpeler: "Kwetsbaar = A." },
        },
      },
      {
        q: "**mRNA-vaccins** (Pfizer, Moderna) werken door:",
        options: [
          "mRNA codeert voor antigeen → eigen cellen maken het + immuun-respons",
          "Levend virus injecteren",
          "Antilichaam direct geven",
          "Bloed-transfusie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geen levend virus.", "Niet — actief, niet passief.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste mRNA-vaccin breed gebruikt 2021", tekst: "Lipid-nanodeeltjes leveren mRNA aan cellen → cellen produceren spike-eiwit (van coronavirus) → immuunsysteem leert dit eiwit herkennen. mRNA wordt binnen dagen afgebroken. Voordeel: snel ontwikkelbaar (~weken na ontdekking pathogeen). Werd gebruikt voor COVID-19 in record-tijd." },
          ],
          theorie: "Onderzoek loopt naar mRNA-vaccins voor kanker + andere ziektes.",
          niveaus: { basis: "Eigen cellen maken antigeen. A.", simpeler: "mRNA → eigen eiwit → immuniteit. A.", nogSimpeler: "mRNA = A." },
        },
      },
      {
        q: "**Pokken** zijn:",
        options: [
          "Uitgeroeid wereldwijd (laatste geval 1977)",
          "Nog wijdverbreid",
          "Onbestrijdbaar",
          "Niet besmettelijk"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Wel via vaccin uitgeroeid.", "Onjuist."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste mensziekte uitgeroeid", tekst: "WHO-campagne 1967-1980 met mass-vaccinatie + isolatie → laatste natuurlijk geval Somalië 1977. WHO verklaarde 1980 uitroeiing. **Enige menselijke pathogeen ooit uitgeroeid** (rinderpest 2011 voor dier). Polio bijna ook — Afghanistan + Pakistan nog endemisch." },
          ],
          niveaus: { basis: "Uitgeroeid 1980. A.", simpeler: "Niet meer wereldwijd. A.", nogSimpeler: "Uitgeroeid = A." },
        },
      },
      {
        q: "**Baby's** krijgen passieve immuniteit via:",
        options: [
          "Placenta (IgG) + moedermelk (IgA)",
          "Eigen aanmaak vanaf dag 1",
          "Vaccinaties bij geboorte",
          "Niets — alleen via vaccins"
        ],
        answer: 0,
        wrongHints: [null, "Niet — eigen pas later op gang.", "Sommige (HepB) wel, maar passieve = moeder.", "Wel passieve van moeder."],
        uitlegPad: {
          stappen: [
            { titel: "Moeder-bescherming eerste maanden", tekst: "Tijdens zwangerschap passeren IgG-antilichamen placenta → baby beschermd tegen wat moeder immuun voor is. Eerste maanden moedermelk geeft extra IgA. Dat verdwijnt na ~6-12 mnd → daarom vaccinaties dan starten." },
          ],
          niveaus: { basis: "Placenta + melk. A.", simpeler: "Moeder geeft antilichamen door. A.", nogSimpeler: "Moeder = A." },
        },
      },
    ],
  },

  // ─── D. Auto-immuun + allergie ────────────────────────────
  {
    title: "Wanneer immuunsysteem fout gaat — auto-immuun + allergie",
    explanation:
      "**Immuunsysteem kan misgaan** op twee manieren:\n\n**1. Auto-immuunziekten**: immuunsysteem valt EIGEN cellen aan.\n• Verstoorde 'zelf' vs 'niet-zelf' herkenning.\n• Vaak chronisch + niet te genezen, alleen onderdrukken.\n\n**Bekende voorbeelden**:\n• **Type-1 diabetes**: T-cellen vernietigen insuline-producerende β-cellen pancreas. Patiënt moet insuline inspuiten.\n• **Multiple Sclerose (MS)**: aanval op myeline-omhulsel van zenuwcellen → trillen, krachtverlies, blindheid.\n• **Reumatoïde Artritis**: aanval op gewricht-kraakbeen → pijn, vervorming.\n• **Lupus**: meerdere organen aangevallen (huid, nieren, gewrichten).\n• **Coeliakie**: gluten triggert immuunreactie tegen darm-villi → opname-stoornis.\n• **Hashimoto + Graves**: schildklier-aanval (te traag/snel).\n• **Multiple Sclerose, Crohn, Ulcerative Colitis**: chronische darm-ontsteking.\n\n**Behandeling**: immuunsuppressiva (corticosteroïden, biologicals). Onderdrukt immuunsysteem → bijwerking: meer kwetsbaar voor infecties.\n\n**Oorzaak** vaak combinatie:\n• Genetische aanleg (sommige HLA-types).\n• Trigger (virus-infectie, stress, dieet).\n• Vrouwen 3-4× meer kans (hormonen-rol).\n\n**2. Allergie**: immuunsysteem reageert OVERMATIG op ONSCHADELIJK 'antigeen' (allergeen).\n• Stuifmeel, kattenhaar, pinda, schaaldieren, latex, wesp-steek.\n• IgE-gemedieerd → histamine-vrijgave → niezen, jeuk, zwelling.\n\n**Allergische reactie**:\n1. **Sensitisatie** (eerste blootstelling): IgE wordt aangemaakt, geen symptomen.\n2. **Reactie** (volgende blootstelling): allergeen bindt aan IgE op mestcellen → histamine vrij.\n3. Symptomen: hooikoorts, eczeem, astma.\n\n**Anafylaxis**: extreem allergische reactie — bloeddruk-val, zwelling luchtweg → levensgevaarlijk. Behandeling: **adrenaline (EpiPen)** direct, dan ziekenhuis.\n\n**Astma**: chronische allergische ontsteking luchtwegen → bronchiën vernauwen + slijm → benauwd. Behandeling: bronchodilatator (ventolin) + corticosteroïden-inhalator.\n\n**Atopische triade**: hooikoorts + astma + eczeem komen vaak samen voor (familie-erfelijkheid).\n\n**Hygiene-hypothese**:\n• Theorie: minder vroege blootstelling aan microben → immuunsysteem 'verveelt' zich → reageert op onschuldige stoffen.\n• Verklaart deels stijging allergie + auto-immuun in westerse landen.\n• Daarom: 'kinderen mogen vies spelen', boerderijdieren, brede dieetblootstelling vroeg.\n\n**Immuundeficiëntie** (3e probleem-categorie):\n• **Aangeboren**: SCID (zeer zeldzaam, 'bubble baby').\n• **Verworven**: AIDS (HIV vernietigt T-helpers), chemotherapie, transplantatie-suppressie.",
    checks: [
      {
        q: "**Type-1 diabetes** is auto-immuun omdat:",
        options: [
          "Immuunsysteem vernietigt insuline-cellen in pancreas",
          "Te veel insuline geproduceerd",
          "Suiker-tolerantie verloren",
          "Geen verband"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld — te weinig.", "Gevolg, niet oorzaak.", "Wel verband."],
        uitlegPad: {
          stappen: [
            { titel: "β-cellen weg", tekst: "T-cellen herkennen β-cel-antigenen als 'vreemd' → vernietigen. Geen insuline-productie → bloedsuiker stijgt. Patiënt moet levenslang insuline inspuiten. Verschilt van type-2 (insuline-resistentie, leefstijl-gerelateerd)." },
          ],
          niveaus: { basis: "Auto-immuun pancreas. A.", simpeler: "Lichaam doodt eigen insuline-cellen. A.", nogSimpeler: "Auto = A." },
        },
      },
      {
        q: "**Anafylaxis** is:",
        options: [
          "Levensgevaarlijke allergische reactie (bloeddruk-val, luchtweg-zwelling)",
          "Milde allergie",
          "Auto-immuun",
          "Bacterie-infectie"
        ],
        answer: 0,
        wrongHints: [null, "Niet — extreem.", "Niet — allergisch.", "Niet — geen infectie."],
        uitlegPad: {
          stappen: [
            { titel: "EpiPen redden levens", tekst: "Systemische IgE-reactie: massa histamine → bloedvaten verwijden + lekken → bloeddruk valt + luchtweg zwelt. Binnen minuten levensbedreigend. **Adrenaline-injectie (EpiPen)** keert reactie om → naar ziekenhuis. Triggers: pinda's, schaaldieren, wespsteek, medicijnen." },
          ],
          niveaus: { basis: "Levensgevaarlijke allergie. A.", simpeler: "Extreem allergie + EpiPen. A.", nogSimpeler: "Anaf = A." },
        },
      },
      {
        q: "**Hygiene-hypothese** suggereert:",
        options: [
          "Minder vroege blootstelling aan microben → meer allergie + auto-immuun later",
          "Hygiene voorkomt allergie",
          "Schoonmaken is altijd goed",
          "Geen verband"
        ],
        answer: 0,
        wrongHints: [null, "Tegenovergesteld.", "Niet altijd.", "Wel theorie."],
        uitlegPad: {
          stappen: [
            { titel: "'Immuun-training'", tekst: "Sinds 1950 stijgen allergie + auto-immuun in westerse landen. Theorie: te schoon → immuunsysteem 'verveelt' → reageert op stuifmeel, eten. Boerderijkinderen hebben minder allergie (vroege diersmet)." },
          ],
          theorie: "Niet bedoeld 'wees vies' maar: balans + diverse blootstelling (probiotica, buitenspelen, brede dieet).",
          niveaus: { basis: "Te schoon = meer allergie. A.", simpeler: "Vroege microben = beter immuun. A.", nogSimpeler: "Hygiene-hypo = A." },
        },
      },
      {
        q: "**HIV** veroorzaakt AIDS doordat:",
        options: [
          "T-helper-cellen worden vernietigd → hele immuunsysteem instort",
          "Bacteriële infectie",
          "Allergische reactie",
          "Auto-immuun"
        ],
        answer: 0,
        wrongHints: [null, "Niet — virus.", "Niet — virus.", "Niet — verworven immuundeficiëntie."],
        uitlegPad: {
          stappen: [
            { titel: "T-helpers cruciaal", tekst: "HIV bindt CD4-receptor op T-helpers → infecteert + doodt ze. CD4-aantal daalt onder 200/mm³ = AIDS. Zonder T-helpers: geen activatie B + T-killer cellen → opportunistische infecties (PCP-longontsteking, Kaposi-sarcoom). Antiretrovirale therapie (ART) houdt virus laag, behoud CD4." },
          ],
          niveaus: { basis: "T-helpers weg. A.", simpeler: "HIV doodt dirigent-cellen. A.", nogSimpeler: "T-help = A." },
        },
      },
      {
        q: "**Coeliakie** is een auto-immuunziekte gericht tegen welk allergeen?",
        options: [
          "Gluten (in tarwe, gerst, rogge)",
          "Lactose",
          "Pinda's",
          "Stuifmeel"
        ],
        answer: 0,
        wrongHints: [null, "Niet — lactose-intolerantie is enzym-probleem, geen auto-immuun.", "Niet — pinda-allergie is IgE.", "Niet — stuifmeel = hooikoorts."],
        uitlegPad: {
          stappen: [
            { titel: "Gluten-trigger", tekst: "Bij coeliakie triggert gluten (eiwit in tarwe) een auto-immuunreactie tegen darm-villi → afbraak villi → opname-stoornis (gewichtsverlies, bloedarmoede). Behandeling: GLUTENVRIJ dieet voor altijd. ~1 op 100 mensen wereldwijd." },
          ],
          theorie: "Verschilt van gluten-intolerantie (niet auto-immuun, mildere symptomen).",
          niveaus: { basis: "Gluten. A.", simpeler: "Tarwe-eiwit. A.", nogSimpeler: "Gluten = A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — pandemie + actuele toepassingen",
    explanation:
      "**Pandemie** (COVID-19 als case-study):\n\n**Verloop**:\n• 2019: SARS-CoV-2 ontstaat in Wuhan.\n• Januari 2020: wereldwijd verspreiding.\n• Maart 2020: WHO verklaart pandemie.\n• 2021: eerste vaccins (Pfizer/Moderna mRNA, AstraZeneca vector).\n• 2024: endemisch — virus circuleert, maar minder dodelijk door immuniteit.\n• Totaal: ~7+ miljoen geregistreerde doden (werkelijk waarschijnlijk hoger).\n\n**Waarom moeilijk te bestrijden?**\n• **Asymptomatische verspreiding**: mensen zonder symptomen besmettelijk.\n• **Mutatie-snelheid**: Delta → Omicron → andere varianten. Vaccins moeten meegroeien (zoals griep-jaarvaccin).\n• **Lange incubatie**: 5-14 dagen — quarantaine moeilijk.\n• **Internationaal reizen**: geen virus blijft op één plek.\n\n**Reproductiegetal R**:\n• R = aantal mensen die één besmette persoon gemiddeld besmet.\n• R > 1: epidemie groeit. R < 1: krimpt.\n• Vroege COVID R₀ ~3. Met maatregelen + immuniteit → R rond 1.\n\n**Maatregelen pyramid** (van licht naar zwaar):\n• Hand wassen + ventileren.\n• 1,5m afstand + mondkapje.\n• Beperking bijeenkomsten.\n• Scholen + horeca dicht.\n• Lockdown.\n\n**Vaccinatie + boostercampagne**:\n• Primaire serie + booster om antilichaam-titer hoog te houden.\n• Aangepaste vaccins per variant (zoals jaarlijkse griep).\n\n**Antibiotica-resistentie** (parallel actueel probleem):\n• Bacteriën muteren tegen antibiotica.\n• MRSA, ESBL bekende resistente stammen.\n• Verklaring: overgebruik in ziekenhuizen + veehouderij.\n• WHO: kan grootste mediсal bedreiging 2050 worden (mss 10 mln doden/jaar).\n• Oplossingen: zuiniger gebruik, nieuwe antibiotica ontwikkelen (moeilijk), bacteriofagen (virussen die bacteriën doden).\n\n**Kanker + immuuntherapie** (recent + revolutionair):\n• Kankercellen zijn 'eigen cellen die misgaan' → immuunsysteem probeert ze normaal te doden, maar kanker ontwijkt vaak.\n• **Checkpoint-inhibitors** (Nobel 2018, Allison + Honjo): blokkeren 'rem' op T-cellen → meer kanker-doden.\n• **CAR-T-therapie**: T-cellen patiënt genetisch gewijzigd om kanker te herkennen → terug ingespoten. Spectaculaire resultaten bij sommige bloedkankers.\n\n**Orgaantransplantatie**:\n• Immuunsysteem ziet vreemd orgaan als 'niet-zelf' → afstoting.\n• Daarom: HLA-typering (zoeken naar match) + immuun-suppressie levenslang.\n• Bijwerking: hogere kans infectie + kanker.\n\n**Microbioom**:\n• Lichaam bevat ~38 trillion bacteriën (meer dan eigen cellen).\n• Belangrijk voor immuunsysteem-training, voedsel-vertering, vitamine-aanmaak.\n• Verstoring (door antibiotica, dieet) → meer auto-immuun + allergie + obesitas.",
    checks: [
      {
        q: "Een virus met **R₀ = 2** zonder maatregelen:",
        options: [
          "Groeit exponentieel — pandemie-potentieel",
          "Sterft uit",
          "Stabiel aantal besmettingen",
          "Heeft geen invloed"
        ],
        answer: 0,
        wrongHints: [null, "Niet — R>1 groeit.", "Niet — niet stabiel.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "Elke besmetting verdubbelt", tekst: "R₀ = 2: elke besmette geeft 2 nieuwe. Generatie 1: 1 → 2 → 4 → 8 → ... Exponentieel. Daarom maatregelen zoeken om R<1 te krijgen. COVID-Omicron R₀ tot ~10. Mazelen R₀ 12-18 (extreem besmettelijk)." }],
          niveaus: { basis: "Exponentieel. A.", simpeler: "Verdubbelt per generatie. A.", nogSimpeler: "Groei = A." },
        },
      },
      {
        q: "**Antibiotica werken NIET tegen**:",
        options: ["Virussen", "Bacteriën", "Sommige schimmels", "MRSA-bacterie"],
        answer: 0,
        wrongHints: [null, "Wel — basis-doel.", "Wel (antifungale).", "Wel maar moeilijk."],
        uitlegPad: {
          stappen: [
            { titel: "Virussen ≠ bacteriën", tekst: "Antibiotica richten zich op bacterie-specifieke structuren (celwand, ribosomen). Virussen hebben dat niet → werken niet. Voor virussen: antivirale middelen (oseltamivir voor griep, paxlovid voor COVID) of vaccinatie. Veel artsen schrijven antibiotica voor griep — IS NUTLOZE praktijk + draagt bij aan resistentie." },
          ],
          niveaus: { basis: "Niet tegen virussen. A.", simpeler: "Virus is geen bacterie. A.", nogSimpeler: "Niet virus = A." },
        },
      },
      {
        q: "**Microbioom** = ?",
        options: [
          "Alle bacteriën die in/op ons lichaam leven",
          "Klein virus",
          "Type kanker",
          "Vaccin"
        ],
        answer: 0,
        wrongHints: [null, "Niet — geen virus.", "Onzin.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Wij = 50% niet-menselijk", tekst: "~38 trillion bacteriële cellen vs ~30 trillion menselijke cellen. Vooral in darmen. Helpen vertering, vitamine-aanmaak, immuun-training. Verstoring (slecht dieet, te veel antibiotica) → diverse ziektes. Nieuw veld: probiotica + faeces-transplantatie." },
          ],
          niveaus: { basis: "Eigen bacterie-ecosysteem. A.", simpeler: "Goede bacteriën in lichaam. A.", nogSimpeler: "Bacteriën = A." },
        },
      },
      {
        q: "Bij **orgaantransplantatie**: waarom HLA-matching?",
        options: [
          "HLA-moleculen markeren cellen als 'zelf'; mismatch = afstoting",
          "HLA = bloedgroep",
          "Niet belangrijk",
          "Alleen voor cosmetisch"
        ],
        answer: 0,
        wrongHints: [null, "Niet — los systeem.", "Wel cruciaal.", "Onzin."],
        uitlegPad: {
          stappen: [
            { titel: "Major Histocompatibility Complex", tekst: "HLA = MHC bij mensen. Eiwitten op celoppervlak die immuunsysteem 'eigen' vs 'vreemd' onderscheiden. Bij transplantatie: hoe meer HLA-match donor/ontvanger, hoe minder afstotingsrisico. Plus levenslange immuunsuppressiva." },
          ],
          theorie: "Eeneiige tweelingen zijn 100% HLA-match (klassieker transplantatie-keuze). Familieleden vaak betere match dan vreemden.",
          niveaus: { basis: "HLA = zelf-markers. A.", simpeler: "Match nodig voor geen afstoten. A.", nogSimpeler: "HLA = A." },
        },
      },
      {
        q: "**CAR-T-therapie** voor kanker:",
        options: [
          "Patiënt's T-cellen genetisch gewijzigd om kanker te herkennen + ingespoten",
          "Bestralingstherapie",
          "Chirurgie",
          "Antibiotica"
        ],
        answer: 0,
        wrongHints: [null, "Apart middel.", "Apart.", "Werkt niet."],
        uitlegPad: {
          stappen: [
            { titel: "Patiënt eigen leger uitrusten", tekst: "T-cellen uit patiënt → laboratorium genetisch wijzigen met **Chimeric Antigen Receptor (CAR)** dat kanker-antigeen herkent → terug ingespoten → vermenigvuldigen + vernietigen kanker. Eerst voor bloedkankers (leukemie, lymfoom). Spectaculaire resultaten, maar duur (€300-500k) + bijwerkingen mogelijk." },
          ],
          niveaus: { basis: "Eigen T-cellen reprogrammeren. A.", simpeler: "T-cellen 'leren' kanker doden. A.", nogSimpeler: "CAR-T = A." },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const immuunsysteemHavoVwo = {
  id: "immuunsysteem-havo-vwo",
  title: "Immuunsysteem + Afweer (HAVO/VWO Biologie)",
  emoji: "🛡️",
  level: "havo-vwo-4-5",
  subject: "biologie",
  referentieNiveau: "havo-3F / vwo-3S",
  sloThema: "Biologie — Immuunsysteem (CSE-onderwerp)",
  prerequisites: [
    { id: "zenuwstelsel-hormonen-havo-vwo", title: "Zenuwstelsel + Hormonen", niveau: "havo-3F" },
  ],
  intro:
    "Immuunsysteem voor HAVO/VWO eindexamen — aspecifieke afweer (barrières, ontsteking, fagocytose), specifieke afweer (B/T-cellen, antilichamen), vaccinatie + groepsimmuniteit, auto-immuun + allergie, pandemie + actuele therapieën. 5 stappen × 5 vragen. ~15 min.",
  triggerKeywords: [
    "immuunsysteem", "afweer",
    "aspecifiek", "specifiek",
    "huid", "slijmvlies", "lysozym",
    "ontsteking", "rubor calor tumor dolor",
    "fagocyt", "macrofaag", "neutrofiel",
    "koorts", "pyrogeen",
    "complement-systeem", "interferon",
    "B-cel", "B-lymfocyt",
    "T-cel", "T-helper", "T-killer", "T-regulator",
    "antilichaam", "immunoglobuline",
    "IgG", "IgM", "IgA", "IgE",
    "antigeen",
    "plasmacel", "geheugencel",
    "primaire respons", "secundaire respons",
    "vaccinatie", "vaccin",
    "mRNA-vaccin", "Pfizer",
    "actieve immuniteit", "passieve immuniteit",
    "moedermelk",
    "groepsimmuniteit", "herd immunity",
    "BMR", "DKTP", "RIVM",
    "pokken uitgeroeid",
    "auto-immuun",
    "diabetes type 1",
    "MS", "multiple sclerose",
    "reumatoïde artritis",
    "coeliakie", "gluten",
    "lupus",
    "allergie", "allergeen",
    "anafylaxis", "EpiPen",
    "astma", "hooikoorts",
    "hygiene-hypothese",
    "HIV", "AIDS",
    "COVID-19", "SARS-CoV-2",
    "pandemie", "R-getal",
    "antibiotica-resistentie", "MRSA",
    "microbioom",
    "kanker immunotherapie",
    "CAR-T", "checkpoint-inhibitor",
    "transplantatie", "HLA",
  ],
  chapters,
  steps,
};

export default immuunsysteemHavoVwo;

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
      "**Immuunsysteem** verdedigt tegen ziekteverwekkers (pathogenen): bacteriën, virussen, schimmels, parasieten.\n\n**Twee hoofdlijnen**:\n• **Aspecifiek** (= niet-gericht, snel, aangeboren): werkt tegen ALLES.\n• **Specifiek** (= gericht, langzamer, verworven): herkent + onthoudt specifieke pathogenen.\n\n**Aspecifieke afweer — 3 lagen**:\n\n**1. Externe barrières**:\n• **Huid**: fysieke barrière + zuur (pH ~5).\n• **Slijmvliezen** (neus, longen, darm): vangen pathogenen op.\n• **Trilharen** in luchtwegen: spoelen slijm met indringers omhoog.\n• **Maagsap** (pH ~2): doodt meeste pathogenen.\n• **Traanvocht + speeksel**: bevatten **lysozym** (enzym dat bacterie-celwanden afbreekt).\n• **Goede bacteriën** (microbiota): verdringen pathogenen.\n\n**2. Interne aspecifieke reactie**:\n• **Ontsteking** (rood, warm, gezwollen, pijn) bij binnendringen:\n  - Bloedvaten verwijden → meer bloed → rood/warm.\n  - Doorlatender → vocht uit → zwelling.\n  - Witte bloedcellen worden erheen gelokt via chemische signalen.\n• **Fagocyten** (macrofagen + neutrofielen): 'opeters' van pathogenen.\n• **Koorts**: hoger T → minder gunstig voor pathogenen + sneller immuunwerk.\n\n**3. Aspecifieke moleculen**:\n• **Complement-systeem**: bloedeiwitten die pathogenen markeren of doorboren.\n• **Interferonen**: virus-geïnfecteerde cellen sturen waarschuwing naar buurcellen.\n\n**Snel maar grof**:\n• Reageert binnen minuten/uren.\n• Geen 'geheugen' — elke keer opnieuw.\n• Geen onderscheid tussen verschillende pathogenen.\n\n**toetsvraag-type**:\n• 'Welke is aspecifiek?' — huid, slijmvlies, fagocytose.\n• 'Wat is functie van koorts?' — hogere T remt pathogenen + activeert immuuncellen.\n• 'Waarom wordt het rood/warm/gezwollen?' — ontstekingsreactie.",
    checks: [
      {
        q: "Welke is **aspecifieke** afweer?",
        options: [
          "Fagocyten",
          "Antilichamen",
          "T-killercellen",
          "Geheugencellen"
        ],
        answer: 0,
        wrongHints: [null, "Een antilichaam past op één bepaald antigeen. Werkt het dan tegen elke indringer?", "Een T-killercel herkent één bepaald antigeen. Werkt die tegen elke indringer?", "Geheugencellen onthouden één bepaalde ziekteverwekker. Is dat afweer tegen alles tegelijk?"],
        uitlegPad: {
          stappen: [{ titel: "Niet-gericht", tekst: "Fagocyten (eetcellen) eten ALLES op wat vreemd is: virussen, bacteriën, parasieten — geen onderscheid. Aspecifiek = aangeboren + algemeen. Specifiek = doelgericht (B/T-cellen + antilichamen)." }],
          niveaus: { basis: "Fagocyten.", simpeler: "Fagocyten = eetcellen tegen alles.", nogSimpeler: "Fagocyten" },
        },
      },
      {
        q: "Wat is **fagocytose**?",
        options: ["Witte bloedcellen 'eten' pathogenen op", "B-cellen maken antilichamen aan", "Lichaamstemperatuur verhogen bij infectie", "Trilharen voeren slijm met ziekteverwekkers af"],
        answer: 0,
        wrongHints: [null, "Dat hoort bij de specifieke afweer. Fagocytose is aspecifiek.", "Koorts is een gevolg van de ontsteking, geen opnamemechanisme.", "Dat is ook afweer, maar dan via een barrière in de luchtwegen."],
        uitlegPad: {
          stappen: [{ titel: "'Fago' = eten, 'cyt' = cel", tekst: "Macrofagen + neutrofielen omsluiten pathogeen met celmembraan → opnemen in cel → afbreken met enzymen. Klassieke aspecifieke afweer. Macrofaag = 'grote eter' in Grieks." }],
          niveaus: { basis: "Cellen eten pathogeen.", simpeler: "Witte bloedcel slokt op.", nogSimpeler: "Eten" },
        },
      },
      {
        q: "**Koorts** is een immuunmechanisme dat:",
        options: ["Ziekteverwekkers remt en de afweer versnelt", "Virussen direct doodkookt door de hitte", "De ziekteverwekkers via het zweet afvoert", "Het bloed verdunt zodat afweercellen sneller stromen"],
        answer: 0,
        wrongHints: [null, "Bij 39 °C gaat een virus niet meteen dood. Kan koorts het op een andere manier lastiger maken?", "Zweten koelt je af, maar spoelt geen ziekteverwekkers weg. Wat doet een hogere temperatuur met hun vermenigvuldiging?", "Warmte maakt je bloed niet dunner. Wat doet een hogere temperatuur met ziekteverwekkers?"],
        uitlegPad: {
          stappen: [
            { titel: "T-stijging als wapen", tekst: "Bij infectie maakt lichaam **pyrogenen** (interleukine-1) die hypothalamus opdragen T omhoog te zetten. Pathogenen + virus-replicatie worden geremd bij hogere T. Immuuncel-werking versnelt. Bij T>40°C wel risico — paracetamol-grens." },
          ],
          niveaus: { basis: "Pathogenen geremd.", simpeler: "Warmte slecht voor ziektes.", nogSimpeler: "Warmte" },
        },
      },
      {
        q: "**Rood + warm + gezwollen + pijn** op infectie-plek is:",
        options: [
          "Ontstekingsreactie",
          "Antilichaam-reactie",
          "T-cel-aanval",
          "Allergie"
        ],
        answer: 0,
        wrongHints: [null, "Antilichamen zijn er pas na een paar dagen. Wordt een wondje ook al direct rood en warm?", "T-cellen horen bij de specifieke afweer. Komen deze verschijnselen al vóórdat die op gang komt?", "Bij een allergie reageert het lichaam op een onschuldige stof. Gaat het hier om een onschuldige stof of om een infectie?"],
        uitlegPad: {
          stappen: [
            { titel: "5 tekenen ontsteking", tekst: "Rubor (rood), calor (warm), tumor (zwelling), dolor (pijn), functio laesa (functieverlies). Veroorzaakt door histamine + andere cytokinen. Bloedvaten verwijden + doorlatender → meer immuunwerk ter plekke." },
          ],
          niveaus: { basis: "Ontstekingsreactie.", simpeler: "Lichaam reageert met ontsteking.", nogSimpeler: "Ontsteking" },
        },
      },
      {
        q: "Welke is GEEN externe barrière?",
        options: [
          "T-lymfocyten",
          "Trilhaarcellen",
          "Slijmvlies",
          "Maagsap"
        ],
        answer: 0,
        wrongHints: [null, "Trilhaarcellen in de luchtpijp vegen slijm met indringers naar buiten. Is dat een externe barrière of niet?", "Slijmvliezen in neus en keel vangen ziekteverwekkers af aan de buitengrens van het lichaam — hoort dat bij de externe of de interne afweer?", "Maagzuur doodt bacteriën in het spijsverteringskanaal nog vóór ze het weefsel bereiken — telt dat als eerste-lijns barrière?"],
        uitlegPad: {
          stappen: [{ titel: "T-cellen zijn intern", tekst: "T-lymfocyten zijn witte bloedcellen → SPECIFIEKE INTERNE afweer (lymfeknopen, bloed). Huid/slijmvliezen/maagsap/traanvocht zijn externe barrières (eerste-lijn aspecifiek)." }],
          niveaus: { basis: "T-cellen niet extern.", simpeler: "T-cel = intern specifiek.", nogSimpeler: "T" },
        },
      },
    ],
  },

  // ─── B. Specifieke afweer ─────────────────────────────────
  {
    title: "Specifieke afweer — B + T cellen + antilichamen",
    explanation:
      "**Specifieke afweer** = gericht op specifiek antigeen + geheugen.\n• Trager (dagen tot weken) maar krachtiger + duurzamer.\n• Werkt via twee soorten **lymfocyten**:\n\n**B-lymfocyten** (B = bone marrow / been-merg):\n• Produceren **antilichamen** (Y-vormige eiwitten).\n• Antilichaam herkent specifiek **antigeen** (kenmerk op pathogeen).\n• Bindt aan antigeen → markeert voor fagocyten of blokkeert.\n• **Plasmacellen**: actieve B-cellen die massaal antilichamen maken.\n• **Geheugen-B-cellen**: blijven jaren leven → snelle respons bij hercontact.\n\n**T-lymfocyten** (T = thymus = zwezerik):\n• Drie hoofd-types:\n  - **T-helper (CD4+)**: 'dirigent' — activeert B-cellen + andere T-cellen.\n  - **T-killer/cytotoxisch (CD8+)**: doodt geïnfecteerde lichaamscellen.\n  - **T-regulator**: dempt immuunreactie als nodig.\n• Werken via direct contact (geen antilichamen).\n• Cruciaal voor virussen (binnen-cel-pathogenen).\n\n**Antigenen** (Ag):\n• Moleculen op pathogeen-oppervlak die immuunsysteem herkent.\n• Vaak eiwitten of suikers.\n• Elk pathogeen heeft uniek antigeen-profiel.\n\n**Hoe werkt het** (vereenvoudigd):\n1. Macrofaag eet pathogeen.\n2. Toont antigeen op zijn oppervlak.\n3. T-helper herkent + activeert B-cel én T-killer met dezelfde specificiteit.\n4. B-cellen vermenigvuldigen → plasmacellen → antilichamen.\n5. T-killers doden geïnfecteerde cellen.\n6. Pathogeen geëlimineerd.\n7. Geheugen-cellen blijven achter.\n\n**Antilichamen-types** (immunoglobulinen):\n• **IgG**: meest voorkomend (80%), bescherming langere tijd.\n• **IgM**: eerste respons.\n• **IgA**: in slijmvliezen + moedermelk.\n• **IgE**: allergie + parasieten.\n• **IgD**: B-cel-receptoren.\n\n**Primaire vs secundaire respons**:\n• Eerste blootstelling: 1-2 weken voor antilichaamproductie (primair).\n• Tweede blootstelling: dagen, veel meer antilichamen (secundair) — door geheugen.\n• Daarom worden veel ziektes maar één keer doorgemaakt.",
    checks: [
      {
        q: "**B-cellen** produceren:",
        options: ["Antilichamen", "Antigenen", "Histamine", "Bloedplaatjes"],
        answer: 0,
        wrongHints: [null, "Antigenen zitten op de ziekteverwekker zelf. Wat maakt een B-cel om daaraan te binden?", "Histamine komt bij een allergie vrij uit mestcellen. Wat maken B-cellen?", "Bloedplaatjes helpen bij de bloedstolling. Hebben die met de afweer van B-cellen te maken?"],
        uitlegPad: {
          stappen: [{ titel: "Plasmacel-fabriek", tekst: "Een actieve B-cel (plasmacel) maakt tot 2000 antilichaam-moleculen per seconde. Antilichamen circuleren in bloed + lymfe → binden aan antigeen op pathogeen → markeren voor opruiming." }],
          niveaus: { basis: "Antilichamen.", simpeler: "B = antilichaam-maker.", nogSimpeler: "Antilichamen" },
        },
      },
      {
        q: "**T-helper-cellen** (CD4+) zijn cruciaal omdat ze:",
        options: ["B-cellen en andere T-cellen activeren", "Ziekteverwekkers zelf opeten en afbreken", "Zelf antilichamen in het bloed afgeven", "Geïnfecteerde lichaamscellen zelf doden"],
        answer: 0,
        wrongHints: [null, "Dat doen fagocyten (eetcellen). Eet een T-cel zelf ziekteverwekkers op?", "Dat doen plasmacellen, die uit B-cellen ontstaan. Maakt een T-cel zelf antilichamen?", "Dat doen T-killercellen (CD8+). Doet een T-helpercel het werk zelf?"],
        uitlegPad: {
          stappen: [
            { titel: "HIV vernietigt deze cellen", tekst: "T-helper coördineert hele immuunrespons. HIV-virus richt zich specifiek op T-helpers → bij AIDS vermindering tot <200 cellen/mm³ → immuunsysteem instort → opportunistische infecties. Daarom werkt HIV-therapie via T-helper-bescherming." },
          ],
          niveaus: { basis: "Activator.", simpeler: "Dirigent immuunsysteem.", nogSimpeler: "Activator" },
        },
      },
      {
        q: "Wat is een **antigeen**?",
        options: ["Molecuul op pathogeen dat immuunsysteem herkent", "Eiwit dat B-cellen maken om pathogenen te binden", "Het hele virus of de hele bacterie zelf", "Verzwakt virus dat je bij vaccinatie krijgt"],
        answer: 0,
        wrongHints: [null, "Dat is een antilichaam. Waar bindt een antilichaam aan?", "Niet — antigenen ZITTEN op een pathogeen.", "Niet — een vaccin bevat antigeen, maar is niet hetzelfde."],
        uitlegPad: {
          stappen: [
            { titel: "Antigeen = herken-molecuul", tekst: "Antigenen zijn eiwitten/suikers op pathogeen-oppervlak. Antilichamen binden specifiek aan één antigeen. Vaccin bevat (verzwakt) antigeen → lichaam maakt geheugen zonder ziekte." },
          ],
          niveaus: { basis: "Pathogeen-molecuul.", simpeler: "Vlag op pathogeen.", nogSimpeler: "Antigeen" },
        },
      },
      {
        q: "Wat is **secundaire immuunrespons**?",
        options: ["Snellere, sterkere reactie bij hercontact", "Eerste reactie bij het eerste contact", "Overdreven reactie op onschuldige stoffen", "Afweerreactie tegen eigen lichaamscellen"],
        answer: 0,
        wrongHints: [null, "Dat is de primaire respons. Wat betekent 'secundair'?", "Dat is een allergie — een apart proces.", "Dat is auto-immuniteit — een fout-reactie."],
        uitlegPad: {
          stappen: [
            { titel: "Sneller via geheugen", tekst: "Primair: 1-2 weken voor antilichaam-productie. Secundair: 1-3 dagen, met 10-100× meer antilichamen. Verklaart waarom mazelen na één keer nooit meer terugkomt + waarom vaccinaties werken." },
          ],
          niveaus: { basis: "Sneller + krachtiger.", simpeler: "2e keer sneller dankzij geheugen.", nogSimpeler: "Snel" },
        },
      },
      {
        q: "**T-killer-cellen** doden vooral:",
        options: ["Lichaamscellen die met een virus besmet zijn", "Bacteriën die vrij in het bloed zwemmen", "Stuifmeelkorrels en andere allergenen", "Schimmelsporen op de huid en slijmvliezen"],
        answer: 0,
        wrongHints: [null, "Niet — bacteriën worden opgeruimd via antilichamen + fagocyten.", "Bij een allergie spelen antilichamen (IgE) en histamine de hoofdrol.", "Schimmels worden vooral door fagocyten aangepakt."],
        uitlegPad: {
          stappen: [
            { titel: "Virus-respons", tekst: "Virussen verstoppen binnen lichaamscellen → antilichamen kunnen daar niet komen. T-killers herkennen geïnfecteerde cellen via virale antigenen op celoppervlak → doden cel (apoptose) → virus stopt vermenigvuldiging. Cruciaal voor virus-bestrijding." },
          ],
          niveaus: { basis: "Geïnfecteerde cellen.", simpeler: "Cellen vol virus weg.", nogSimpeler: "Geïnfecteerde cellen" },
        },
      },
    ],
  },

  // ─── C. Vaccinatie + immuniteit ───────────────────────────
  {
    title: "Vaccinatie + immuniteit — actief + passief",
    explanation:
      "**Vaccinatie** = bewust antigeen toedienen om immuunrespons + geheugen op te wekken ZONDER ziekte.\n\n**Vaccin-types**:\n• **Verzwakt** (live attenuated): mazelen, BMR, gele koorts. Sterke + langdurige immuniteit, maar niet voor immuun-zwakke patiënten.\n• **Geïnactiveerd**: griep, polio (IPV), hepatitis A. Veiliger maar zwakker → boosters nodig.\n• **Subunit** (alleen eiwit): hepatitis B, HPV. Heel veilig.\n• **Toxoid** (gif onschadelijk gemaakt): difterie, tetanus.\n• **mRNA** (nieuw): COVID-19 (Pfizer, Moderna). mRNA codeert voor antigeen → eigen cellen maken het. Snel ontwikkelbaar.\n• **Vector** (ander virus draagt antigeen): AstraZeneca, Janssen voor COVID.\n\n**Immuniteit-types**:\n\n**1. Actieve immuniteit** (lichaam maakt zelf antilichamen + geheugen):\n• **Natuurlijk**: door ziekte zelf doormaken.\n• **Kunstmatig**: door vaccinatie.\n• Geheugen: jaren tot levenslang.\n\n**2. Passieve immuniteit** (kant-en-klare antilichamen ontvangen):\n• **Natuurlijk**: baby via placenta (IgG) + moedermelk (IgA).\n• **Kunstmatig**: serum/immunoglobuline-injectie (na slangenbeet, tetanus, hondsdolheid).\n• Geen geheugen → tijdelijk (weken-maanden).\n\n**Groepsimmuniteit (herd immunity)**:\n• Wanneer voldoende % bevolking immuun (door vaccin of ziekte) → pathogeen verspreidt zich niet meer effectief → ook niet-immune mensen beschermd.\n• Drempel hangt af van besmettelijkheid:\n  - Mazelen (R₀ 12-18): ~95% nodig.\n  - COVID-19 (R₀ 2-3): ~65-70%.\n  - Polio: ~80-85%.\n• Beschermt mensen die niet zelf kunnen vaccineren (baby's, kanker-patiënten, immuun-zwakken).\n\n**RIVM-vaccinatieprogramma NL** (Rijksvaccinatie):\n• DKTP-Hib-HepB (6-in-1) op 3/5/11 maanden.\n• BMR (bof, mazelen, rode hond): 14 maanden + 9 jaar.\n• MenACWY (meningokokken) op 14 mnd + 14 jr.\n• HPV (kanker): 10 jaar (sinds 2022 ook jongens).\n\n**Vaccinatie-effecten wereld**:\n• Pokken UITGEROEID (laatste 1977) — WHO succes 1980.\n• Polio bijna uitgeroeid (alleen Afghanistan + Pakistan nog).\n• Mazelen-doden gehalveerd sinds 2000 maar nog ~140 000 per jaar.\n\n**Bijwerkingen** zijn meestal mild (pijn arm, lichte koorts). Ernstige bijwerkingen extreem zeldzaam (~1 op miljoen). Voordeel : risico ratio is enorm.",
    checks: [
      {
        q: "**Actieve immuniteit** krijg je via:",
        options: ["Een ziekte doormaken of een vaccinatie", "Een injectie met kant-en-klare antilichamen", "Antilichamen uit de moedermelk krijgen", "Afweer die je erft van je ouders"],
        answer: 0,
        wrongHints: [null, "Dan krijg je kant-en-klare antilichamen. Maakt je eigen lichaam ze dan zelf?", "Die antilichamen heeft de moeder gemaakt. Is de baby dan zelf actief?", "Afweer tegen een ziekte bouw je pas op na contact ermee. Kun je die van je ouders erven?"],
        uitlegPad: {
          stappen: [{ titel: "Eigen aanmaak", tekst: "Lichaam maakt zelf antilichamen + geheugen-cellen. Duurzaam (jaren-levenslang). Vaccinatie geeft hetzelfde effect zonder ziekte. Passief = kant-en-klare antilichamen ontvangen (geen geheugen, tijdelijk)." }],
          niveaus: { basis: "Ziekte of vaccin.", simpeler: "Eigen aanmaak.", nogSimpeler: "Eigen" },
        },
      },
      {
        q: "**Groepsimmuniteit** beschermt vooral:",
        options: ["Niet-vaccineerbare mensen", "Mensen die al gevaccineerd zijn", "Mensen die de ziekte al hadden", "Vooral oudere, gezonde mensen"],
        answer: 0,
        wrongHints: [null, "Gevaccineerden zijn zelf al beschermd. Wie heeft de groep dan het hardst nodig?", "Die hebben zelf al afweer opgebouwd. Wie heeft de bescherming van de groep écht nodig?", "Gezonde ouderen kunnen zich meestal zelf laten vaccineren. Wie kan dat niet?"],
        uitlegPad: {
          stappen: [
            { titel: "Indirecte bescherming", tekst: "Bij hoge vaccinatie-graad: pathogeen kan niet circuleren. Zelfs niet-immune individu (baby <14 mnd voor BMR, chemo-patiënt, allergische voor vaccin) wordt beschermd want niemand om hem heen kan ziek worden. **Solidariteits-aspect** van vaccinatie." },
          ],
          theorie: "Daarom doet anti-vaccinatie schade aan mensen die niet kunnen vaccineren — niet alleen aan zichzelf.",
          niveaus: { basis: "Niet-vaccineerbaren.", simpeler: "Beschermt kwetsbaren.", nogSimpeler: "Kwetsbaar" },
        },
      },
      {
        q: "**mRNA-vaccins** (Pfizer, Moderna) werken door:",
        options: ["Eigen cellen maken zelf het antigeen", "Een verzwakt levend virus inspuiten", "Kant-en-klare antilichamen inspuiten", "Het DNA van je cellen aanpassen"],
        answer: 0,
        wrongHints: [null, "Een mRNA-vaccin bevat geen virus, ook geen verzwakt levend virus.", "Kant-en-klare antilichamen geven passieve afweer. Bij een vaccin moet je lichaam zelf aan het werk.", "mRNA komt niet in de celkern en verandert je DNA niet."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste mRNA-vaccin breed gebruikt 2021", tekst: "Lipid-nanodeeltjes leveren mRNA aan cellen → cellen produceren spike-eiwit (van coronavirus) → immuunsysteem leert dit eiwit herkennen. mRNA wordt binnen dagen afgebroken. Voordeel: snel ontwikkelbaar (~weken na ontdekking pathogeen). Werd gebruikt voor COVID-19 in record-tijd." },
          ],
          theorie: "Onderzoek loopt naar mRNA-vaccins voor kanker + andere ziektes.",
          niveaus: { basis: "Eigen cellen maken antigeen.", simpeler: "mRNA → eigen eiwit → immuniteit.", nogSimpeler: "mRNA" },
        },
      },
      {
        q: "**Pokken** zijn:",
        options: [
          "Wereldwijd uitgeroeid",
          "Nog veel in Afrika en Azië",
          "Te genezen met antibiotica",
          "Een ziekte zonder vaccin"
        ],
        answer: 0,
        wrongHints: [null, "Het laatste natuurlijke geval van pokken was in 1977. Komen ze nog veel voor?", "Pokken worden veroorzaakt door een virus. Werken antibiotica tegen virussen?", "Het allereerste vaccin ooit (1796) was juist tegen pokken. Wat heeft dat opgeleverd?"],
        uitlegPad: {
          stappen: [
            { titel: "Eerste mensziekte uitgeroeid", tekst: "WHO-campagne 1967-1980 met massavaccinatie + isolatie → laatste natuurlijk geval Somalië 1977. WHO verklaarde 1980 uitroeiing. **Enige menselijke pathogeen ooit uitgeroeid** (rinderpest 2011 voor dier). Polio bijna ook — Afghanistan + Pakistan nog endemisch." },
          ],
          niveaus: { basis: "Uitgeroeid 1980.", simpeler: "Niet meer wereldwijd.", nogSimpeler: "Uitgeroeid" },
        },
      },
      {
        q: "**Baby's** krijgen passieve immuniteit via:",
        options: [
          "Placenta en moedermelk",
          "Eigen aanmaak vanaf dag 1",
          "Vaccinaties bij geboorte",
          "Hun eigen geheugencellen"
        ],
        answer: 0,
        wrongHints: [null, "Het afweersysteem van een baby moet nog op gang komen. Maakt hij zelf al genoeg antilichamen?", "Een vaccin laat de baby zélf antilichamen maken — is dat passief?", "Geheugencellen ontstaan pas na contact met een ziekteverwekker. Heeft een pasgeborene die al?"],
        uitlegPad: {
          stappen: [
            { titel: "Moeder-bescherming eerste maanden", tekst: "Tijdens zwangerschap passeren IgG-antilichamen placenta → baby beschermd tegen wat moeder immuun voor is. Eerste maanden moedermelk geeft extra IgA. Dat verdwijnt na ~6-12 mnd → daarom vaccinaties dan starten." },
          ],
          niveaus: { basis: "Placenta + melk.", simpeler: "Moeder geeft antilichamen door.", nogSimpeler: "Moeder" },
        },
      },
    ],
  },

  // ─── D. Auto-immuun + allergie ────────────────────────────
  {
    title: "Wanneer immuunsysteem fout gaat — auto-immuun + allergie",
    explanation:
      "**Immuunsysteem kan misgaan** op twee manieren:\n\n**1. Auto-immuunziekten**: immuunsysteem valt EIGEN cellen aan.\n• Verstoorde 'zelf' vs 'niet-zelf' herkenning.\n• Vaak chronisch + niet te genezen, alleen onderdrukken.\n\n**Bekende voorbeelden**:\n• **Type-1 diabetes**: T-cellen vernietigen insuline-producerende β-cellen pancreas. Patiënt moet insuline inspuiten.\n• **Multiple Sclerose (MS)**: aanval op myeline-omhulsel van zenuwcellen → trillen, krachtverlies, blindheid.\n• **Reumatoïde Artritis**: aanval op gewricht-kraakbeen → pijn, vervorming.\n• **Lupus**: meerdere organen aangevallen (huid, nieren, gewrichten).\n• **Coeliakie**: gluten triggert immuunreactie tegen darm-villi → opname-stoornis.\n• **Hashimoto + Graves**: schildklier-aanval (te traag/snel).\n• **Ziekte van Crohn, colitis ulcerosa**: chronische darm-ontsteking.\n\n**Behandeling**: immuunsuppressiva (corticosteroïden, biologicals). Onderdrukt immuunsysteem → bijwerking: meer kwetsbaar voor infecties.\n\n**Oorzaak** vaak combinatie:\n• Genetische aanleg (sommige HLA-types).\n• Trigger (virus-infectie, stress, dieet).\n• Vrouwen 3-4× meer kans (hormonen-rol).\n\n**2. Allergie**: immuunsysteem reageert OVERMATIG op ONSCHADELIJK 'antigeen' (allergeen).\n• Stuifmeel, kattenhaar, pinda, schaaldieren, latex, wesp-steek.\n• IgE-gemedieerd → histamine-vrijgave → niezen, jeuk, zwelling.\n\n**Allergische reactie**:\n1. **Sensitisatie** (eerste blootstelling): IgE wordt aangemaakt, geen symptomen.\n2. **Reactie** (volgende blootstelling): allergeen bindt aan IgE op mestcellen → histamine vrij.\n3. Symptomen: hooikoorts, eczeem, astma.\n\n**Anafylaxie**: extreem allergische reactie — bloeddruk-val, zwelling luchtweg → levensgevaarlijk. Behandeling: **adrenaline (EpiPen)** direct, dan ziekenhuis.\n\n**Astma**: chronische allergische ontsteking luchtwegen → bronchiën vernauwen + slijm → benauwd. Behandeling: bronchodilatator (ventolin) + corticosteroïden-inhalator.\n\n**Atopische triade**: hooikoorts + astma + eczeem komen vaak samen voor (familie-erfelijkheid).\n\n**Hygiëne-hypothese**:\n• Theorie: minder vroege blootstelling aan microben → immuunsysteem 'verveelt' zich → reageert op onschuldige stoffen.\n• Verklaart deels stijging allergie + auto-immuun in westerse landen.\n• Daarom: 'kinderen mogen vies spelen', boerderijdieren, brede dieetblootstelling vroeg.\n\n**Immuundeficiëntie** (3e probleem-categorie):\n• **Aangeboren**: SCID (zeer zeldzaam, 'bubble baby').\n• **Verworven**: AIDS (HIV vernietigt T-helpers), chemotherapie, transplantatie-suppressie.",
    checks: [
      {
        q: "**Type-1 diabetes** is auto-immuun omdat:",
        options: ["Het afweersysteem vernietigt de insulinecellen", "De alvleesklier maakt juist te veel insuline", "Lichaamscellen reageren slecht op insuline", "Afweercellen reageren te sterk op suiker uit eten"],
        answer: 0,
        wrongHints: [null, "Zou te veel insuline de bloedsuiker laten stijgen of dalen?", "Dat past bij type 2. Wat maakt type 1 auto-immuun?", "Suiker is een voedingsstof, geen indringer. Waar richt de aanval zich op bij een auto-immuunziekte?"],
        uitlegPad: {
          stappen: [
            { titel: "β-cellen weg", tekst: "T-cellen herkennen β-cel-antigenen als 'vreemd' → vernietigen. Geen insuline-productie → bloedsuiker stijgt. Patiënt moet levenslang insuline inspuiten. Verschilt van type-2 (insuline-resistentie, leefstijl-gerelateerd)." },
          ],
          niveaus: { basis: "Auto-immuun pancreas.", simpeler: "Lichaam doodt eigen insuline-cellen.", nogSimpeler: "Auto" },
        },
      },
      {
        q: "**Anafylaxie** is:",
        options: ["Levensgevaarlijke allergische reactie", "Milde allergische reactie zoals hooikoorts", "Afweer die eigen weefsel aanvalt", "Ernstige infectie met bacteriën in het bloed"],
        answer: 0,
        wrongHints: [null, "Hooikoorts is mild. Waarom heeft iemand met anafylaxie een EpiPen bij zich?", "Dat is auto-immuniteit. Waar reageert het lichaam bij anafylaxie op?", "Dat is bloedvergiftiging (sepsis) — een infectie."],
        uitlegPad: {
          stappen: [
            { titel: "EpiPens redden levens", tekst: "Systemische IgE-reactie: massa histamine → bloedvaten verwijden + lekken → bloeddruk valt + luchtweg zwelt. Binnen minuten levensbedreigend. **Adrenaline-injectie (EpiPen)** keert reactie om → naar ziekenhuis. Triggers: pinda's, schaaldieren, wespsteek, medicijnen." },
          ],
          niveaus: { basis: "Levensgevaarlijke allergie.", simpeler: "Extreme allergie + EpiPen.", nogSimpeler: "Anafylaxie" },
        },
      },
      {
        q: "**Hygiëne-hypothese** suggereert:",
        options: ["Te schoon opgroeien geeft meer allergie", "Veel hygiëne beschermt kinderen tegen allergie", "Schoonmaken maakt je afweer juist sterker", "Allergie wordt vooral door je genen bepaald"],
        answer: 0,
        wrongHints: [null, "Waarom hebben boerderijkinderen dan juist minder allergie?", "Krijgt je afweer volgens de hypothese meer of minder te oefenen als alles schoon is?", "Waarom zou allergie dan in korte tijd zo sterk stijgen?"],
        uitlegPad: {
          stappen: [
            { titel: "'Immuun-training'", tekst: "Sinds 1950 stijgen allergie + auto-immuun in westerse landen. Theorie: te schoon → immuunsysteem 'verveelt' → reageert op stuifmeel, eten. Boerderijkinderen hebben minder allergie (vroeg contact met dieren)." },
          ],
          theorie: "Niet bedoeld 'wees vies' maar: balans + diverse blootstelling (probiotica, buitenspelen, breed dieet).",
          niveaus: { basis: "Te schoon = meer allergie.", simpeler: "Vroege microben = beter immuun.", nogSimpeler: "Hygiëne-hypothese" },
        },
      },
      {
        q: "**HIV** veroorzaakt AIDS doordat:",
        options: ["T-helpercellen worden vernietigd", "Bacteriën de longen infecteren", "Een allergische reactie op het virus", "Afweer de eigen cellen gaat aanvallen"],
        answer: 0,
        wrongHints: [null, "HIV is geen bacterie maar een virus.", "Bij een allergie reageert de afweer te sterk. Is dat bij AIDS zo?", "Niet — AIDS is een verworven immuundeficiëntie."],
        uitlegPad: {
          stappen: [
            { titel: "T-helpers cruciaal", tekst: "HIV bindt CD4-receptor op T-helpers → infecteert + doodt ze. CD4-aantal daalt onder 200/mm³ = AIDS. Zonder T-helpers: geen activatie B + T-killer cellen → opportunistische infecties (PCP-longontsteking, Kaposi-sarcoom). Antiretrovirale therapie (ART) houdt virus laag en behoudt CD4." },
          ],
          niveaus: { basis: "T-helpers weg.", simpeler: "HIV doodt dirigent-cellen.", nogSimpeler: "T-helpers" },
        },
      },
      {
        q: "**Coeliakie** is een auto-immuunziekte. Welke stof is de trigger?",
        options: [
          "Gluten",
          "Lactose",
          "Pinda's",
          "Stuifmeel"
        ],
        answer: 0,
        wrongHints: [null, "Bij lactose-intolerantie mis je een enzym. Valt je afweer dan je eigen darm aan?", "Pinda-allergie is een gewone allergie (IgE). Bij coeliakie raakt de darmwand beschadigd. Door welke stof?", "Stuifmeel geeft hooikoorts via neus en ogen. Coeliakie speelt zich af in de darm. Welke stof uit voedsel past daarbij?"],
        uitlegPad: {
          stappen: [
            { titel: "Gluten-trigger", tekst: "Bij coeliakie triggert gluten (eiwit in tarwe) een auto-immuunreactie tegen darm-villi → afbraak villi → opname-stoornis (gewichtsverlies, bloedarmoede). Behandeling: GLUTENVRIJ dieet voor altijd. ~1 op 100 mensen wereldwijd." },
          ],
          theorie: "Verschilt van gluten-intolerantie (niet auto-immuun, mildere symptomen).",
          niveaus: { basis: "Gluten.", simpeler: "Tarwe-eiwit.", nogSimpeler: "Gluten" },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — pandemie + actuele toepassingen",
    explanation:
      "**Pandemie** (COVID-19 als case-study):\n\n**Verloop**:\n• 2019: SARS-CoV-2 ontstaat in Wuhan.\n• Januari 2020: wereldwijde verspreiding.\n• Maart 2020: WHO verklaart pandemie.\n• 2021: eerste vaccins (Pfizer/Moderna mRNA, AstraZeneca vector).\n• 2024: endemisch — virus circuleert, maar minder dodelijk door immuniteit.\n• Totaal: ~7+ miljoen geregistreerde doden (werkelijk waarschijnlijk hoger).\n\n**Waarom moeilijk te bestrijden?**\n• **Asymptomatische verspreiding**: mensen zonder symptomen besmettelijk.\n• **Mutatie-snelheid**: Delta → Omicron → andere varianten. Vaccins moeten meegroeien (zoals griep-jaarvaccin).\n• **Lange incubatie**: 5-14 dagen — quarantaine moeilijk.\n• **Internationaal reizen**: geen virus blijft op één plek.\n\n**Reproductiegetal R**:\n• R = aantal mensen die één besmette persoon gemiddeld besmet.\n• R > 1: epidemie groeit. R < 1: krimpt.\n• Vroege COVID R₀ ~3. Met maatregelen + immuniteit → R rond 1.\n\n**Maatregelen-piramide** (van licht naar zwaar):\n• Hand wassen + ventileren.\n• 1,5m afstand + mondkapje.\n• Beperking bijeenkomsten.\n• Scholen + horeca dicht.\n• Lockdown.\n\n**Vaccinatie + boostercampagne**:\n• Primaire serie + booster om antilichaam-titer hoog te houden.\n• Aangepaste vaccins per variant (zoals jaarlijkse griep).\n\n**Antibiotica-resistentie** (parallel actueel probleem):\n• Bacteriën muteren tegen antibiotica.\n• MRSA, ESBL bekende resistente stammen.\n• Verklaring: overgebruik in ziekenhuizen + veehouderij.\n• WHO: kan grootste medische bedreiging 2050 worden (mogelijk 10 mln doden/jaar).\n• Oplossingen: zuiniger gebruik, nieuwe antibiotica ontwikkelen (moeilijk), bacteriofagen (virussen die bacteriën doden).\n\n**Kanker + immuuntherapie** (recent + revolutionair):\n• Kankercellen zijn 'eigen cellen die misgaan' → immuunsysteem probeert ze normaal te doden, maar kanker ontwijkt vaak.\n• **Checkpoint-inhibitors** (Nobel 2018, Allison + Honjo): blokkeren 'rem' op T-cellen → T-cellen doden meer kankercellen.\n• **CAR-T-therapie**: T-cellen patiënt genetisch gewijzigd om kanker te herkennen → terug ingespoten. Spectaculaire resultaten bij sommige bloedkankers.\n\n**Orgaantransplantatie**:\n• Immuunsysteem ziet vreemd orgaan als 'niet-zelf' → afstoting.\n• Daarom: HLA-typering (zoeken naar match) + immuun-suppressie levenslang.\n• Bijwerking: hogere kans infectie + kanker.\n\n**Microbioom**:\n• Lichaam bevat ~38 biljoen bacteriën (meer dan eigen cellen).\n• Belangrijk voor immuunsysteem-training, voedsel-vertering, vitamine-aanmaak.\n• Verstoring (door antibiotica, dieet) → meer auto-immuun + allergie + obesitas.",
    checks: [
      {
        q: "Een virus met **R₀ = 2** zonder maatregelen:",
        options: [
          "Groeit exponentieel",
          "Sterft uit",
          "Stabiel aantal besmettingen",
          "Groeit lineair (steeds +2)"
        ],
        answer: 0,
        wrongHints: [null, "Bij R₀ = 2 steekt iedereen gemiddeld twee mensen aan. Kan het virus dan uitsterven?", "Stabiel hoort bij R = 1. Hier is R groter.", "Elke zieke steekt er twee aan, en die steken weer elk twee aan. Komen er dan steeds even veel bij?"],
        uitlegPad: {
          stappen: [{ titel: "Elke besmetting verdubbelt", tekst: "R₀ = 2: elke besmette geeft 2 nieuwe. Generatie 1: 1 → 2 → 4 → 8 → ... Exponentieel. Daarom maatregelen zoeken om R<1 te krijgen. COVID-Omicron R₀ tot ~10. Mazelen R₀ 12-18 (extreem besmettelijk)." }],
          niveaus: { basis: "Exponentieel.", simpeler: "Verdubbelt per generatie.", nogSimpeler: "Groei" },
        },
      },
      {
        q: "**Antibiotica werken NIET tegen**:",
        options: ["Virussen", "Bacteriën", "Tuberculose", "Blaasontsteking"],
        answer: 0,
        wrongHints: [null, "Antibiotica tasten de celwand en ribosomen van bacteriën aan. Werken ze dan tegen bacteriën?", "Tbc wordt veroorzaakt door een bacterie en behandeld met een lange antibioticakuur.", "Een blaasontsteking komt meestal door darmbacteriën. Wat schrijft de huisarts dan voor?"],
        uitlegPad: {
          stappen: [
            { titel: "Virussen ≠ bacteriën", tekst: "Antibiotica richten zich op bacterie-specifieke structuren (celwand, ribosomen). Virussen hebben dat niet → werken niet. Voor virussen: antivirale middelen (oseltamivir voor griep, paxlovid voor COVID) of vaccinatie. Antibiotica tegen griep zijn NUTTELOOS + dragen bij aan resistentie." },
          ],
          niveaus: { basis: "Niet tegen virussen.", simpeler: "Virus is geen bacterie.", nogSimpeler: "Niet virus" },
        },
      },
      {
        q: "**Microbioom** = ?",
        options: ["De bacteriën die in en op ons lichaam leven", "De afweercellen in onze darmwand", "Het slijmlaagje dat onze darmen beschermt", "De ziekteverwekkers in ons lichaam"],
        answer: 0,
        wrongHints: [null, "Afweercellen zijn je eigen lichaamscellen. Bestaat het microbioom uit eigen cellen of uit iets anders?", "Slijm is een stof die je lichaam zelf maakt. Leeft het microbioom?", "De meeste bacteriën in je darmen maken je juist niet ziek. Zijn het dan allemaal ziekteverwekkers?"],
        uitlegPad: {
          stappen: [
            { titel: "Wij = 50% niet-menselijk", tekst: "~38 biljoen bacteriële cellen vs ~30 biljoen menselijke cellen. Vooral in darmen. Helpen vertering, vitamine-aanmaak, immuun-training. Verstoring (slecht dieet, te veel antibiotica) → diverse ziektes. Nieuw veld: probiotica + faeces-transplantatie." },
          ],
          niveaus: { basis: "Eigen bacterie-ecosysteem.", simpeler: "Goede bacteriën in lichaam.", nogSimpeler: "Bacteriën" },
        },
      },
      {
        q: "Bij **orgaantransplantatie**: waarom HLA-matching?",
        options: ["Om afstoting van het orgaan te voorkomen", "Zodat je daarna geen afweerremmers meer nodig hebt", "Om infecties na de operatie te voorkomen", "Om bloedstolling in het orgaan te voorkomen"],
        answer: 0,
        wrongHints: [null, "Ook met een goede match slik je meestal levenslang afweerremmers. Wat probeert de match dan te beperken?", "Tegen infecties krijg je antibiotica. Waar zijn HLA-eiwitten herkenningstekens voor?", "Bloedstolling regelen bloedplaatjes. Wie 'leest' de HLA-eiwitten op een cel: bloedplaatjes of het afweersysteem?"],
        uitlegPad: {
          stappen: [
            { titel: "Major Histocompatibility Complex", tekst: "HLA = MHC bij mensen. Eiwitten op celoppervlak die immuunsysteem 'eigen' vs 'vreemd' onderscheiden. Bij transplantatie: hoe meer HLA-match donor/ontvanger, hoe minder afstotingsrisico. Plus levenslange immuunsuppressiva." },
          ],
          theorie: "Eeneiige tweelingen zijn 100% HLA-match (ideale match). Familieleden vaak betere match dan vreemden.",
          niveaus: { basis: "HLA = zelf-markers.", simpeler: "Match nodig om afstoting te voorkomen.", nogSimpeler: "HLA" },
        },
      },
      {
        q: "**CAR-T-therapie** voor kanker:",
        options: ["Eigen T-cellen die kanker leren herkennen", "Vaccin dat kanker bij gezonde mensen voorkomt", "Tumor operatief weghalen uit het lichaam", "T-cellen van een donor die je afweer vervangen"],
        answer: 0,
        wrongHints: [null, "CAR-T krijg je pas als je al kanker hebt. Wat wordt er dan met je eigen cellen gedaan?", "Dat is chirurgie, een aparte behandeling.", "Een donor is bij CAR-T niet nodig. Waar zou je de T-cellen dan vandaan kunnen halen?"],
        uitlegPad: {
          stappen: [
            { titel: "Eigen leger van de patiënt uitrusten", tekst: "T-cellen uit patiënt → laboratorium genetisch wijzigen met **Chimeric Antigen Receptor (CAR)** die kanker-antigeen herkent → terug ingespoten → vermenigvuldigen + vernietigen kanker. Eerst voor bloedkankers (leukemie, lymfoom). Spectaculaire resultaten, maar duur (€300-500k) + bijwerkingen mogelijk." },
          ],
          niveaus: { basis: "Eigen T-cellen reprogrammeren.", simpeler: "T-cellen 'leren' kanker doden.", nogSimpeler: "CAR-T" },
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

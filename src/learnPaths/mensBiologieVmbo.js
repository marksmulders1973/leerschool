// Leerpad: Mens-biologie VMBO (klas 2-3 onderbouw VO).
// Dekt: zenuwstelsel, bloed & lymfe, ademhaling, spijsvertering, uitscheiding.
// 2026-05-14: gebouwd om de PO-mismatch op te lossen bij examenvragen
// (zie examenBiologie2024T1 V2/V17/V33/V34/V38/V42 + 2024T2 V12/V43/V45).
// Toon: feitelijk en wetenschappelijk, vmbo-niveau. Officiële termen + korte
// definities. Per hoofdstuk 1 stap met 4-5 checks. Examenstof biologie CSE.

const chapters = [
  { letter: "A", title: "Zenuwstelsel", emoji: "🧠", from: 0, to: 0 },
  { letter: "B", title: "Bloed & lymfe", emoji: "🩸", from: 1, to: 1 },
  { letter: "C", title: "Ademhaling", emoji: "🫁", from: 2, to: 2 },
  { letter: "D", title: "Spijsvertering", emoji: "🍽️", from: 3, to: 3 },
  { letter: "E", title: "Uitscheiding", emoji: "💧", from: 4, to: 4 },
  { letter: "F", title: "Eindtoets — mix", emoji: "🏆", from: 5, to: 5 },
];

const stepEmojis = ["🧠", "🩸", "🫁", "🍽️", "💧", "🏆"];

const steps = [
  // ─── A. Zenuwstelsel ─────────────────────────────────────
  {
    title: "Zenuwstelsel — hersenen + ruggenmerg",
    explanation:
      "Het **zenuwstelsel** stuurt + reageert op signalen in het lichaam. Het bestaat uit twee delen:\n\n**Centraal zenuwstelsel (CZS)** = hersenen + ruggenmerg.\n**Perifeer zenuwstelsel** = alle zenuwen daarbuiten.\n\n**De hersenen — 3 delen + ruggenmerg**:\n\n**1. Grote hersenen** *(cerebrum, bovenste + grootste deel)*:\n• **Bewust denken + waarnemen** (zien, horen, voelen, ruiken, proeven).\n• Willekeurige bewegingen (lopen, schrijven, praten).\n• Geheugen + leren + emotie.\n\n**2. Kleine hersenen** *(cerebellum, achteronder)*:\n• **Coördinatie van bewegingen** + balans.\n• Maakt bewegingen vloeiend (fietsen, dansen).\n• Wordt geraakt door alcohol → wankelen.\n\n**3. Hersenstam** *(diep, verbinding met ruggenmerg)*:\n• **Onbewuste vitale functies**: ademhaling, hartslag, slikken, niezen, lichaamstemperatuur.\n• Bewustzijn aan/uit.\n\n**4. Ruggenmerg**:\n• **Signaal-snelweg** tussen hersenen en rest van lichaam.\n• **Reflexen** (knie-reflex, hand-terugtrekken bij hete plaat) gaan via ruggenmerg — sneller dan hersenen.\n\n**Soorten prikkels**:\n• **Uitwendige prikkel** = van buiten (licht, geluid, druk, warmte).\n• **Inwendige prikkel** = van binnen (honger, dorst, hormoonniveau).\n• **Adequate prikkel** = de soort waar een zintuig voor gemaakt is (licht voor oog, geluid voor oor).\n\n**4 soorten leergedrag**:\n• **Conditionering** — prikkel koppelen aan reactie (Pavlov + clicker-training).\n• **Gewenning** — stoppen met reageren op prikkel die geen gevolg heeft.\n• **Inprenten** — jong dier herkent eerste-bewegende-ding als 'moeder'.\n• **Trial-and-error** — zelf uitproberen + onthouden wat werkt.",
    checks: [
      {
        q: "Bewust horen (zoals een click in clicker-training) vindt plaats in:",
        options: ["de grote hersenen", "de kleine hersenen", "de hersenstam", "het ruggenmerg"],
        answer: 0,
        wrongHints: [
          null,
          "Kleine hersenen = coördinatie + balans, geen bewust horen.",
          "Hersenstam = onbewuste functies (ademen, hartslag).",
          "Ruggenmerg = signaal-doorgifte, bewust horen is hogerop.",
        ],
        explanation: "Bewust waarnemen (zien, horen, voelen) gebeurt altijd in de grote hersenen — de cortex.",
        uitlegPad: {
          stappen: [
            { titel: "Bewust = grote hersenen", tekst: "Alle 'ik weet dat ik dit zie/hoor/voel' = grote hersenen (cerebrum). Het hoogste niveau van verwerking." },
            { titel: "Per onderdeel", tekst: "Grote hersenen = denken/bewust. Kleine = coördinatie. Hersenstam = automatisch. Ruggenmerg = transport + reflexen." },
          ],
          woorden: [{ woord: "cortex", uitleg: "Buitenste laag van grote hersenen — waar bewust denken zit." }],
          theorie: "Onthoud: bewust ervaren = altijd grote hersenen.",
          voorbeelden: [{ type: "stap", tekst: "Je hoort een telefoon-melodie en herkent welk liedje = grote hersenen." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bewust → grote. Soepel bewegen → kleine. Ademen → stam. Reflex → ruggenmerg." }],
          niveaus: {
            basis: "Grote hersenen. Antwoord A.",
            simpeler: "Bewust waarnemen = grote hersenen, de 'denker'. Antwoord A.",
            nogSimpeler: "Grote hersenen = A.",
          },
        },
      },
      {
        q: "Coördinatie van bewegingen wordt geregeld door:",
        options: ["de kleine hersenen", "de grote hersenen", "de hersenstam", "het ruggenmerg"],
        answer: 0,
        wrongHints: [
          null,
          "Grote hersenen = bewust denken. Soepele coördinatie zit elders.",
          "Hersenstam = onbewuste functies zoals ademen.",
          "Ruggenmerg geleidt signalen door, het coördineert geen bewegingen.",
        ],
        explanation: "De kleine hersenen (cerebellum, achteronder in de schedel) regelen vloeiende coördinatie + balans. Alcohol verstoort dit → wankelen.",
      },
      {
        q: "Welke functie wordt geregeld door de hersenstam?",
        options: ["Ademhaling + hartslag", "Bewust nadenken", "Fijne motoriek", "Spier-reflex"],
        answer: 0,
        wrongHints: [
          null,
          "Bewust denken = grote hersenen.",
          "Fijne motoriek = kleine hersenen.",
          "Reflexen lopen via ruggenmerg.",
        ],
        explanation: "De hersenstam regelt automatische vitale functies: ademen, hartslag, slikken, lichaamstemperatuur.",
      },
      {
        q: "Bij clicker-training leert de hond click = beloning. Welk type leergedrag is dit?",
        options: ["conditionering", "gewenning", "inprenten", "trial-and-error"],
        answer: 0,
        wrongHints: [
          null,
          "Gewenning = stoppen met reageren — tegenovergesteld.",
          "Inprenten = jong dier leert moeder herkennen, geen training.",
          "Trial-and-error = zelf ontdekken, hier krijgt de hond signaal van mens.",
        ],
        explanation: "Pavlov-stijl conditionering: signaal koppelen aan reactie via beloning. Click + snoepje → hond verbindt click met 'beloning komt'.",
      },
      {
        q: "Een hormoon-prikkel die weeën opwekt is een:",
        options: ["inwendige prikkel", "adequate prikkel", "uitwendige prikkel", "supranormale prikkel"],
        answer: 0,
        wrongHints: [
          null,
          "Adequate prikkel = de soort waarvoor een zintuig speciaal is — niet over hormonen.",
          "Uitwendig = van buiten (licht, geluid). Hormonen zijn van binnenuit.",
          "Supranormaal = overdreven sterk natuurlijk signaal — gedragsbiologie.",
        ],
        explanation: "Hormonen worden gemaakt door eigen klieren in het lichaam → prikkel van binnenuit = inwendige prikkel.",
      },
    ],
  },

  // ─── B. Bloed & lymfe ──────────────────────────────────
  {
    title: "Bloed & lymfe — vervoer + afweer",
    explanation:
      "**Bloed** bestaat uit **plasma** *(geel vocht, ~55%)* + **cellen** *(45%)*. De cellen zijn 3 soorten:\n\n**1. Rode bloedcellen** *(erytrocyten)*:\n• Transport van **zuurstof** + CO₂.\n• Kleur: rood door **hemoglobine** (ijzer + zuurstof = rood).\n• Geen kern, leven ~120 dagen.\n• ~5 miljard per ml bloed.\n\n**2. Witte bloedcellen** *(leukocyten)*:\n• **Afweer**: doden bacteriën, virussen, opruimen van dode cellen.\n• Veel kleiner aantal dan rode.\n• **Kunnen door haarvatwand kruipen** *(diapedese)* om naar weefsels te gaan.\n\n**3. Bloedplaatjes** *(trombocyten)*:\n• **Stolling** bij wondjes.\n• Geen echte cellen — celfragmenten.\n• Maken samen met fibrine een korst.\n\n**Bloedsomloop — hart als pomp**:\n• **Grote bloedsomloop**: hart → lichaam → hart.\n• **Kleine bloedsomloop**: hart → longen → hart *(daar wordt CO₂ ↔ O₂ gewisseld)*.\n• **Slagaders**: weg van hart, dikke wand, hoge druk.\n• **Aders**: terug naar hart, dunne wand, lage druk, hebben **kleppen** om terugstromen te voorkomen.\n• **Haarvaten**: heel klein, hier vindt uitwisseling met weefsel plaats.\n\n**Lymfestelsel — parallel systeem**:\n• Lymfevaten verzamelen weefselvocht (vloeistof tussen cellen) en brengen het terug naar grote aders.\n• **Lymfe** = doorzichtig vocht met alleen **witte bloedcellen** (rode cellen + plaatjes blijven in bloedbaan).\n• **Lymfeklieren** *(lies, oksel, hals)* filteren lymfe + maken extra witte cellen aan.\n• **Stroming**: niet door het hart, maar door **spierwerking** + **kleppen** in lymfevaten.\n\n**Verschil bloed ↔ lymfe**:\n\n| | Bloed | Lymfe |\n|---|---|---|\n| Pomp | hart | spieren |\n| Inhoud | rode + witte cellen + plaatjes | alleen witte cellen |\n| Richting | rondje | éénrichting (weefsel → bloed) |",
    checks: [
      {
        q: "Welke bloeddeeltjes zijn in lymfevloeistof aanwezig?",
        options: [
          "alleen witte bloedcellen",
          "alleen rode + witte bloedcellen",
          "witte + rode bloedcellen + plaatjes",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Rode bloedcellen zijn te groot voor lymfevaten — blijven in bloedbaan.",
          "Plaatjes blijven ook in bloed — alleen witte cellen kunnen door vaatwand.",
        ],
        explanation: "Alleen witte bloedcellen kunnen door de wand van haarvaten heen kruipen (diapedese). Zo komen ze in weefselvocht en daarmee in lymfe.",
        uitlegPad: {
          stappen: [
            { titel: "Diapedese", tekst: "Witte bloedcellen 'persen' zich actief door haarvatwand om naar weefsel te gaan en infecties aan te pakken. Rode cellen + plaatjes kunnen dit NIET." },
          ],
          woorden: [{ woord: "diapedese", uitleg: "Witte cellen door vaatwand kruipen." }],
          theorie: "Lymfe = weefselvocht teruggevoerd. Alleen wat in weefselvocht zit komt erin.",
          voorbeelden: [{ type: "stap", tekst: "Bij infectie: meer witte cellen actief = etter (pus) = witte cellen + dode bacteriën." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lymfe = alleen wit. Onthoud die regel — komt terug op examens." }],
          niveaus: {
            basis: "Alleen witte bloedcellen. Antwoord A.",
            simpeler: "Alleen witte cellen kunnen door haarvatwand naar weefsel + lymfe. Antwoord A.",
            nogSimpeler: "Alleen wit = A.",
          },
        },
      },
      {
        q: "Wat zorgt ervoor dat lymfevocht maar in één richting stroomt?",
        options: ["Kleppen in lymfevaten + spierwerking", "Het hart pompt lymfe rond", "Diafragma duwt lymfe omhoog", "Zwaartekracht"],
        answer: 0,
        wrongHints: [
          null,
          "Het hart pompt bloed, niet lymfe — lymfe heeft eigen mechanisme.",
          "Diafragma helpt ademen, niet lymfestroom.",
          "Zwaartekracht werkt op alles — verklaart geen eenrichting.",
        ],
        explanation: "Lymfe heeft geen pomp. Stroming komt van spier-bewegingen (lopen, ademen) die lymfevaten samenknijpen + kleppen die terugstromen voorkomen.",
      },
      {
        q: "Welke bloedcellen vervoeren zuurstof?",
        options: ["Rode bloedcellen", "Witte bloedcellen", "Bloedplaatjes", "Plasma alleen"],
        answer: 0,
        wrongHints: [
          null,
          "Witte cellen = afweer, niet transport.",
          "Plaatjes = stolling.",
          "Plasma is vocht — vervoert opgeloste stoffen maar niet O₂.",
        ],
        explanation: "Rode bloedcellen (erytrocyten) bevatten hemoglobine, dat zich aan zuurstof bindt. Vandaar de rode kleur.",
      },
      {
        q: "Welk type bloedvat heeft de dikste spierwand?",
        options: ["Slagader", "Ader", "Haarvat", "Lymfevat"],
        answer: 0,
        wrongHints: [
          null,
          "Aders hebben juist dunnere wand — bloed onder lage druk.",
          "Haarvaten zijn 1 cel dik — voor uitwisseling.",
          "Lymfevaten hebben dunne wand zoals aders.",
        ],
        explanation: "Slagaders moeten hoge druk van hartpomp opvangen → dikke spierwand. Aders hebben lagere druk + kleppen ipv dikke wand.",
      },
    ],
  },

  // ─── C. Ademhaling ──────────────────────────────────────
  {
    title: "Ademhaling — luchtweg + gaswisseling",
    explanation:
      "Met **ademhaling** halen we zuurstof binnen en stoten CO₂ af.\n\n**Luchtweg — volgorde**:\n1. **Neus / mond** *(filteren + opwarmen + bevochtigen lucht)*\n2. **Keel** *(faryx)*\n3. **Strottenhoofd** *(larynx — met stembanden)*\n4. **Luchtpijp** *(trachea — grote centrale buis)*\n5. **Bronchiën** *(2 hoofdtakken, 1 per long)*\n6. **Bronchiolen** *(steeds kleinere vertakkingen)*\n7. **Longblaasjes** *(alveolen — eindstation)*\n\nDe eerste 6 zijn **alleen transport**. Pas in de longblaasjes vindt **gaswisseling** plaats.\n\n**Longblaasjes — alveolen**:\n• ~300 miljoen per long.\n• Wand: **1 cel dik**, omringd door dichte haarvaten.\n• Hier wisselt O₂ ↔ CO₂ tussen lucht en bloed via diffusie.\n• Totaal oppervlak: ~70 m² *(zo groot als tennishal!)*.\n\n**In + uit ademen**:\n• **Inademen**: middenrif zakt + ribben omhoog → borstkas groter → lucht in.\n• **Uitademen**: middenrif omhoog + ribben omlaag → borstkas kleiner → lucht eruit.\n• **Middenrif** *(diafragma)* = grote spier onder longen — belangrijkste ademspier.\n\n**Wat doet bloed bij gaswisseling?**\n• Bloed komt aan in longen met veel CO₂ + weinig O₂ *(via longslagader)*.\n• In longblaasjes: O₂ naar bloed, CO₂ naar lucht.\n• Bloed gaat weer richting hart met veel O₂ + weinig CO₂ *(via longader)*.\n• Daarna door hart het lichaam in.\n\n**Vluchtige stoffen** *(zoals alcohol)* kunnen óók via longblaasjes terug naar uitgeademde lucht → daarom werkt een **blaastest**.",
    checks: [
      {
        q: "Waar vindt de gaswisseling plaats?",
        options: ["in de longblaasjes", "in de bronchiën", "in de luchtpijp", "in de mondholte"],
        answer: 0,
        wrongHints: [
          null,
          "Bronchiën = vertakkingen die lucht NAAR de longblaasjes brengen — geen uitwisseling.",
          "Luchtpijp = grote transportbuis vóór de bronchiën.",
          "Mondholte = begin van luchtweg, geen gas-bloed-uitwisseling.",
        ],
        explanation: "Alleen longblaasjes hebben de dunne wand + haarvaten waar gaswisseling kan plaatsvinden. De rest is transport.",
        uitlegPad: {
          stappen: [
            { titel: "Waarom alleen daar?", tekst: "Longblaasjes-wand is 1 cel dik — gassen kunnen makkelijk doorheen. Bronchiën + luchtpijp hebben dikkere wand met slijm — geen uitwisseling mogelijk." },
            { titel: "Volgorde luchtweg", tekst: "Neus/mond → keel → luchtpijp → bronchiën → bronchiolen → LONGBLAASJES. Eerste 5 = alleen transport." },
          ],
          woorden: [
            { woord: "longblaasje (alveool)", uitleg: "Bolletje aan einde van bronchiole — plek waar O₂ ↔ CO₂ uitgewisseld worden." },
            { woord: "gaswisseling", uitleg: "O₂ van lucht naar bloed + CO₂ van bloed naar lucht." },
          ],
          theorie: "Onthoud: longblaasjes = enige plek met uitwisseling. Rest is snelweg.",
          voorbeelden: [{ type: "stap", tekst: "Blaastest politie: alcoholdamp uit longblaasjes wordt in uitgeademde lucht gemeten." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Longblaasje = einde + dun = wisselen." }],
          niveaus: {
            basis: "Longblaasjes. Antwoord A.",
            simpeler: "Lucht reist door luchtpijp en bronchiën als snelweg. Pas bij de longblaasjes wordt zuurstof opgenomen. Antwoord A.",
            nogSimpeler: "Longblaasjes = A.",
          },
        },
      },
      {
        q: "Welke spier is het belangrijkste voor de ademhaling?",
        options: ["Middenrif (diafragma)", "Hart", "Tussenribspieren alleen", "Buikspieren"],
        answer: 0,
        wrongHints: [
          null,
          "Hart pompt bloed, geen lucht.",
          "Tussenribspieren helpen wel mee maar middenrif is hoofdspier.",
          "Buikspieren helpen bij geforceerd uitademen maar zijn niet hoofdspier.",
        ],
        explanation: "Middenrif is de grote koepelvormige spier onder de longen. Trekt samen = zakt = borstkas groter = lucht stroomt in.",
      },
      {
        q: "Bloed dat de longen verlaat (via longader) bevat:",
        options: ["veel zuurstof + weinig CO₂", "veel CO₂ + weinig zuurstof", "alleen zuurstof", "alleen CO₂"],
        answer: 0,
        wrongHints: [
          null,
          "Andersom — dát is bloed dat NAAR de longen gaat.",
          "Bloed bevat altijd ook andere stoffen + wat CO₂.",
          "Bloed bevat altijd zowel O₂ als CO₂, alleen verhouding verschilt.",
        ],
        explanation: "Na gaswisseling: bloed heeft O₂ opgenomen + CO₂ afgegeven. Verlaat longen via longader → hart → lichaam.",
      },
      {
        q: "Hoe groot is het totale oppervlak van alle longblaasjes ongeveer?",
        options: ["~70 m² (zo groot als tennishal)", "~1 m²", "~10.000 m²", "~10 cm²"],
        answer: 0,
        wrongHints: [
          null,
          "Veel meer — 300 miljoen blaasjes samen.",
          "Te veel — geen sportveld.",
          "Veel meer — een blaadje is groter.",
        ],
        explanation: "300 miljoen alveolen samen = ~70 m². Groot oppervlak = veel uitwisseling mogelijk.",
      },
    ],
  },

  // ─── D. Spijsvertering ──────────────────────────────────
  {
    title: "Spijsvertering — afbraak van voedsel",
    explanation:
      "**Spijsvertering** = voedsel afbreken tot kleine moleculen die je lichaam kan opnemen. Gebeurt in een lange buis: het **spijsverteringsstelsel**.\n\n**Volgorde — van mond tot anus**:\n1. **Mond** — kauwen + speeksel.\n2. **Slokdarm** — transport naar maag.\n3. **Maag** — zoutzuur + pepsine.\n4. **Dunne darm** — verdere afbraak + opname.\n5. **Dikke darm** — water + zouten opname.\n6. **Endeldarm** + **anus** — uitscheiding.\n\n**Hulporganen** *(geen voedsel-doorgang maar maken verteringssappen)*:\n• **Lever** — maakt **gal** (voor vet-afbraak).\n• **Galblaas** — bewaart gal.\n• **Alvleesklier** *(pancreas)* — maakt **alvleessap** met enzymen voor alle 3 voedingsstoffen.\n\n**Maagsap — twee onderdelen**:\n• **Zoutzuur (HCl)** — doodt bacteriën + activeert het enzym.\n• **Pepsine** — enzym dat **eiwitten** afbreekt tot kleinere stukjes (peptiden).\n\n**Enzymen** = eiwit-moleculen die chemische reacties versnellen. Verteringsenzymen breken voedingsstoffen af.\n\n**Welk enzym waar?**\n• **Mond — speeksel-amylase**: koolhydraten beginnen.\n• **Maag — pepsine**: eiwitten.\n• **Dunne darm — pancreasenzymen + gal**: koolhydraten + eiwitten + vetten volledig afgebroken.\n• **Vezels** worden niet door enzymen verteerd — passeren grotendeels onverteerd (goed voor darmwerking).\n\n**Opname — in dunne darm**:\n• Wand heeft **darmvlokken** + **microvilli** → groot oppervlak.\n• Glucose + aminozuren → naar bloed (haarvaten in vlokken).\n• Vetzuren → naar lymfevaten in vlokken.\n\n**Tand-opbouw** *(omdat tandzenuwen vaak op examen komen)*:\n• **Glazuur** — hardste laag (buiten). Geen zenuwen.\n• **Tandbeen** *(dentine)* — hard. Geen zenuwen.\n• **Tandholte** *(pulpa)* — zacht centrum. **Hier zitten zenuwen + bloedvaten**.",
    checks: [
      {
        q: "Welke voedingsstof wordt door maagsap verteerd?",
        options: ["eiwitten", "koolhydraten", "vetten", "vezels"],
        answer: 0,
        wrongHints: [
          null,
          "Koolhydraten starten in mond (speeksel-amylase), volledige afbraak in dunne darm.",
          "Vetten worden in dunne darm afgebroken (gal + lipase).",
          "Vezels worden helemaal niet door enzymen verteerd.",
        ],
        explanation: "Maagsap bevat pepsine, dat eiwitten afbreekt. Voor andere voedingsstoffen heeft de maag geen enzym.",
      },
      {
        q: "Waar zitten de zenuwen in een tand?",
        options: ["alleen in de tandholte", "alleen in het tandbeen", "in beide", "in geen van beide"],
        answer: 0,
        wrongHints: [
          null,
          "Tandbeen is hard en heeft geen zenuwen — alleen kanaaltjes.",
          "Niet ook in tandbeen.",
          "Wel — anders zou de tandarts geen verdoving nodig hebben bij diepe gaatjes.",
        ],
        explanation: "Tandzenuwen + bloedvaten zitten samen in de tandholte (pulpa), het zachte centrum. Glazuur + tandbeen eromheen zijn hard en zonder zenuwen.",
      },
      {
        q: "Wat is de hoofdfunctie van enzymen in spijsvertering?",
        options: ["Voedsel afbreken", "Bacteriën doden", "Hormonen activeren", "Voedsel transporteren"],
        answer: 0,
        wrongHints: [
          null,
          "Bacteriën-doden = maagzuur (HCl), niet enzymen.",
          "Hormoonklieren worden door hormonen aangestuurd, niet door verteringsenzymen.",
          "Transport = peristaltiek (spierwerking), geen enzymen.",
        ],
        explanation: "Enzymen versnellen chemische reacties. In spijsvertering: afbraak van eiwitten, koolhydraten of vetten tot kleine moleculen.",
        uitlegPad: {
          stappen: [
            { titel: "Wat is een enzym?", tekst: "Een enzym is een eiwit-molecuul dat één specifieke chemische reactie versnelt. Lichaam heeft duizenden enzymen, elk voor een eigen taak." },
            { titel: "Verteringsenzymen — per plek", tekst: "Mond: amylase (koolhydraten). Maag: pepsine (eiwitten). Dunne darm: lipase (vet), amylase (kh), trypsine (eiwitten)." },
          ],
          woorden: [{ woord: "enzym", uitleg: "Eiwit dat reactie versnelt — verteringsenzym = breekt voedingsstof af." }],
          theorie: "Onthoud: enzymen = afbreken. Maagzuur = bacterie-doden. Verschillende functies, zelfde maagsap.",
          voorbeelden: [{ type: "stap", tekst: "Brood kauwen + speeksel mengen → koolhydraten beginnen al af te breken (smaakt zoeter na lang kauwen)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Enzym = knipt voedsel-moleculen in kleine stukjes." }],
          niveaus: {
            basis: "Voedsel afbreken. Antwoord A.",
            simpeler: "Enzymen knippen voedsel-moleculen in kleine stukjes zodat het lichaam ze kan opnemen. Antwoord A.",
            nogSimpeler: "Afbreken = A.",
          },
        },
      },
      {
        q: "Waar worden voedingsstoffen voornamelijk opgenomen in het bloed?",
        options: ["Dunne darm", "Maag", "Dikke darm", "Slokdarm"],
        answer: 0,
        wrongHints: [
          null,
          "Maag = afbraak (vooral eiwitten), opname is hier minimaal.",
          "Dikke darm = water + zouten opname, voedingsstoffen zijn al verwerkt.",
          "Slokdarm = alleen transport.",
        ],
        explanation: "Dunne darm heeft darmvlokken + microvilli → enorm oppervlak. Glucose + aminozuren → bloed. Vetzuren → lymfe.",
      },
    ],
  },

  // ─── E. Uitscheiding ───────────────────────────────────
  {
    title: "Uitscheiding — afvalstoffen uit het lichaam",
    explanation:
      "**Uitscheiding** = afvalstoffen uit het lichaam verwijderen. Belangrijkste organen: **nieren** + **lever** + **longen** + **huid**.\n\n**Nieren — filteren bloed**:\n\nElke nier heeft ~1 miljoen kleine filter-eenheden: **nefronen**.\n\n**3 lagen van de nier**:\n1. **Nierschors** *(buitenste laag)* — hier zitten de glomeruli (filter-startpunt van nefron).\n2. **Niermerg** *(middenlaag)* — hier worden water + nuttige stoffen TERUG-opgenomen.\n3. **Nierbekken** *(holle ruimte binnenin)* — verzamelt klare urine voordat die naar de blaas gaat.\n\n**Filtering vindt plaats in NIERSCHORS + NIERMERG**. Het nierbekken filtert NIET — het verzamelt alleen.\n\n**Wat doen de nieren?**\n• Filteren bloed.\n• Verwijderen afvalstoffen *(ureum, overtollig zout, water)*.\n• Reguleren water-balans + bloeddruk + pH.\n\n**Route van urine**:\nNier → urineleider *(uretur)* → blaas → urinebuis *(urethra)* → naar buiten.\n\n**Lever — afbraak + ureum-vorming**:\nDe **lever** breekt veel stoffen af, waaronder:\n• **Aminozuren** *(uit eiwit-vertering)* die je niet meer nodig hebt → stikstof eruit → **ureum** *(afvalstof)*.\n• **Alcohol** *(door enzymen)*.\n• **Medicijnen** *(metaboliseren)*.\n\nUreum gaat via bloed naar de nieren, die het uit het bloed filteren → urine → naar buiten.\n\n**Onthoud**: **lever MAAKT ureum** (uit eiwit-afbraak). **Nier VERWIJDERT ureum** (uit bloed). Twee verschillende stappen.\n\n**Nierdialyse**:\nAls nieren falen, kan een **kunstnier** (dialyse-machine) het bloed filteren. ~4 uur per behandeling, 3× per week. Tijdelijke oplossing tot een transplantatie mogelijk is.\n\n**Andere uitscheidingsorganen**:\n• **Longen** — verwijderen CO₂ (en vluchtige stoffen zoals alcoholdamp).\n• **Huid** — verwijderen zweet (water + zouten + kleine hoeveelheid ureum).\n• **Dikke darm** — verwijdert onverteerd voedsel + galkleurstof.",
    checks: [
      {
        q: "In welke delen van een nier wordt het bloed gefilterd?",
        options: [
          "in de nierschors en het niermerg",
          "in het nierbekken en het niermerg",
          "in het nierbekken en de nierschors",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Nierbekken filtert NIET — het verzamelt alleen urine.",
          "Nierbekken filtert niet. Alleen schors + merg samen doen filterwerk.",
        ],
        explanation: "Nefronen (filter-eenheden) lopen door schors + merg. Het nierbekken is een opvangruimte, geen filter.",
        uitlegPad: {
          stappen: [
            { titel: "3 nier-lagen", tekst: "Schors (buiten) → merg (midden) → bekken (binnen). Filtering in schors + merg. Bekken = opvang." },
            { titel: "Nefron strekt zich uit", tekst: "Elk nefron begint in de schors (filtering bloed) en gaat verder naar het merg (terug-opname water + zouten). Beide lagen samen = filterwerk." },
          ],
          woorden: [
            { woord: "nefron", uitleg: "Microscopisch filter-eenheid van de nier — ~1 miljoen per nier." },
            { woord: "nierbekken", uitleg: "Holle ruimte binnen in de nier waar klare urine in komt." },
          ],
          theorie: "Filter = schors + merg. Bekken = opvang. Niet verwarren.",
          voorbeelden: [{ type: "stap", tekst: "Veel drinken → minder terug-opname in merg → meer urine in bekken." }],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "Schors + merg filteren. Bekken verzamelt." }],
          niveaus: {
            basis: "Schors + merg. Antwoord A.",
            simpeler: "Het filteren doet de nefron — die loopt door schors EN merg. Nierbekken verzamelt alleen. Antwoord A.",
            nogSimpeler: "Schors + merg = A.",
          },
        },
      },
      {
        q: "In welk orgaan ontstaat ureum?",
        options: ["lever", "nier", "darm", "maag"],
        answer: 0,
        wrongHints: [
          null,
          "Nier VERWIJDERT ureum uit bloed, maakt het niet zelf.",
          "Darm = opname voedingsstoffen + uitscheiding ontlasting.",
          "Maag = vertering eiwit. Aminozuren komen daarna in lever terecht.",
        ],
        explanation: "Lever breekt aminozuren (uit eiwit-vertering) af en maakt daarbij ureum als afvalstof. Ureum gaat via bloed naar nieren → urine.",
      },
      {
        q: "Wat is de functie van het nierbekken?",
        options: ["Urine verzamelen", "Bloed filteren", "Water terug-opnemen", "Hormonen maken"],
        answer: 0,
        wrongHints: [
          null,
          "Filtering = schors + merg.",
          "Water terug-opnemen = niermerg (in nefron-lus).",
          "Hormonen worden door andere klieren gemaakt.",
        ],
        explanation: "Nierbekken is een verzamelplek voor klare urine voordat die via de urineleider naar de blaas gaat. Geen filtering.",
      },
      {
        q: "Welk orgaan verwijdert vluchtige stoffen zoals alcoholdamp via uitademen?",
        options: ["Longen", "Lever", "Nieren", "Huid"],
        answer: 0,
        wrongHints: [
          null,
          "Lever breekt alcohol af, maar via stofwisseling — niet via uitademen.",
          "Nieren filteren bloed, maar geen gas.",
          "Huid scheidt zweet uit, geen alcoholdamp.",
        ],
        explanation: "Vluchtige stoffen (gas-vorm) kunnen via gaswisseling in longblaasjes terug naar uitgeademde lucht. Vandaar de blaastest bij alcohol.",
      },
    ],
  },

  // ─── F. Eindtoets ───────────────────────────────────────
  {
    title: "Eindtoets — mens-biologie mix",
    explanation: "Mix-toets in vmbo-stijl. 6 vragen die alle 5 hoofdstukken raken. Veel succes!",
    checks: [
      {
        q: "Bewust denken en willekeurige bewegingen worden geregeld door:",
        options: ["de grote hersenen", "de kleine hersenen", "de hersenstam", "het ruggenmerg"],
        answer: 0,
        wrongHints: [null, "Kleine = coördinatie + balans.", "Stam = onbewuste vitale functies.", "Ruggenmerg = signaal-snelweg + reflexen."],
        explanation: "Grote hersenen = cortex = bewust denken, willekeurige bewegingen, geheugen.",
      },
      {
        q: "Wat zit er in lymfevloeistof?",
        options: ["Alleen witte bloedcellen", "Rode + witte + plaatjes", "Plasma + plaatjes", "Niets — lymfe is leeg"],
        answer: 0,
        wrongHints: [null, "Rode cellen + plaatjes blijven in bloedbaan.", "Plasma is bloed-vocht, geen lymfe-bestanddeel.", "Lymfe heeft wel inhoud — witte cellen + weefselvocht."],
        explanation: "Lymfe = weefselvocht teruggevoerd. Alleen witte cellen kunnen door haarvatwand kruipen → enige bloeddeel in lymfe.",
      },
      {
        q: "Waar in de longen vindt gaswisseling plaats?",
        options: ["In de longblaasjes (alveolen)", "In de bronchiën", "In de luchtpijp", "In de neusholte"],
        answer: 0,
        wrongHints: [null, "Bronchiën = transport.", "Luchtpijp = transport.", "Neus = filter + opwarmen."],
        explanation: "Longblaasjes zijn de enige plek waar O₂ + CO₂ kunnen oversteken tussen lucht en bloed.",
      },
      {
        q: "Maagsap bevat het enzym pepsine. Wat doet dat?",
        options: ["Het verteert eiwitten", "Het verteert vetten", "Het verteert vezels", "Het maakt hormonen"],
        answer: 0,
        wrongHints: [null, "Vet → lipase in dunne darm.", "Vezels worden niet door enzymen afgebroken.", "Hormoon-maken doen klieren, niet maagenzymen."],
        explanation: "Pepsine breekt eiwitten af tot peptiden. Het werkt alleen in zure omgeving (maagzuur).",
      },
      {
        q: "Ureum (afvalstof van eiwit-afbraak) wordt gevormd in:",
        options: ["de lever", "de nieren", "de darmen", "de hersenen"],
        answer: 0,
        wrongHints: [null, "Nieren filteren ureum, maken het niet.", "Darm = opname voeding, geen ureum-vorming.", "Hersenen verbruiken voeding maar maken geen ureum."],
        explanation: "Lever breekt overtollige aminozuren af → stikstof om naar ureum → bloed → nieren → urine.",
      },
      {
        q: "Welke spier is de belangrijkste ademspier?",
        options: ["Middenrif", "Hart", "Buikspieren", "Tussenribspieren alleen"],
        answer: 0,
        wrongHints: [null, "Hart pompt bloed, niet lucht.", "Buikspieren helpen forceren maar zijn niet hoofdspier.", "Tussenribspieren helpen, maar middenrif doet ~75% van het werk."],
        explanation: "Middenrif = grote koepelspier onder longen. Trekt samen = zakt = borstkas groter = lucht in.",
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const mensBiologieVmbo = {
  id: "mens-biologie-vmbo",
  title: "Mens-biologie (VMBO)",
  emoji: "🫀",
  level: "klas2-3",
  subject: "biologie",
  referentieNiveau: "VMBO-2F",
  sloThema: "Biologie — mens & gezondheid",
  prerequisites: [
    { id: "cel-biologie", title: "Cel-biologie", niveau: "vmbo-2F" },
    { id: "lichaam-gezondheid-po", title: "Lichaam + gezondheid (basis)", niveau: "po-1F" },
  ],
  intro:
    "5 onderdelen van mens-biologie op vmbo-niveau: zenuwstelsel, bloed & lymfe, ademhaling, spijsvertering, uitscheiding. Plus eindtoets. Sluit aan op examenstof biologie CSE — vooral vragen over hersenen, bloed, longblaasjes, maagsap-enzymen en nieren.",
  triggerKeywords: [
    "zenuwstelsel", "grote hersenen", "kleine hersenen", "hersenstam", "ruggenmerg",
    "coördinatie", "conditionering", "prikkel inwendig uitwendig",
    "bloed", "rode bloedcellen", "witte bloedcellen", "bloedplaatjes",
    "lymfe", "lymfevaten", "kleppen", "haarvaten",
    "ademhaling", "longen", "longblaasjes", "alveolen", "gaswisseling",
    "middenrif", "diafragma", "bronchiën", "luchtpijp",
    "spijsvertering", "maag", "maagsap", "pepsine", "enzymen",
    "dunne darm", "lever", "alvleesklier", "gal",
    "tandbeen", "tandholte", "glazuur", "tandzenuwen",
    "uitscheiding", "nieren", "nierschors", "niermerg", "nierbekken",
    "ureum", "urine", "dialyse",
  ],
  chapters,
  steps,
};

export default mensBiologieVmbo;

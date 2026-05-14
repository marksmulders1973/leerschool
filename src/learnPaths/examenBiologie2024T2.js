// Leerpad: Examen-oefenpad Biologie VMBO-GL/TL 2024 tijdvak 2
// 2026-05-14: 2e biologie-examenpilot. Bron: examenblad.nl GT-0191-a-24-2.
// 6 MC-vragen geselecteerd uit 13 geparste MC's (selectie op zelfstandigheid +
// koppeling naar bestaand leerpad). Authentiek overgenomen — geen paraphrase.
// PDF-corruptions handmatig gefixt: weeën, bacteriën, coördinatie, bronchiën.

const chapters = [
  { letter: "A", title: "Spijsvertering & alcohol (V12, V43, V45)", emoji: "🍷", from: 0, to: 2 },
  { letter: "B", title: "Voortplanting & hormonen (V22, V23)", emoji: "👶", from: 3, to: 4 },
  { letter: "C", title: "Ecologie (V35)", emoji: "🐢", from: 5, to: 5 },
];

const PDF_LINK = "https://www.examenblad.nl/system/files/exam-document/2024-07/gt-0191-a-24-2-o-spr.pdf";
const BRON_LABEL = (v) => `🎓 Echt examen VMBO-GL/TL 2024 tijdvak 2, vraag ${v}`;

const steps = [
  // ─── Vraag 12 — Functie van enzymen ────────────────────────
  {
    title: "Vraag 12 — Wat doen enzymen in maagsap?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 2, vraag 12.",
    emoji: "🎓",
    checks: [
      {
        q: "Behalve maagzuur bevat maagsap ook enzymen. Wat is de functie van enzymen?",
        options: [
          "Enzymen activeren hormoonklieren.",
          "Enzymen doden bacteriën.",
          "Enzymen lossen vetten op.",
          "Enzymen verteren voedingsstoffen.",
        ],
        answer: 3,
        wrongHints: [
          "Hormoonklieren worden door andere hormonen aangestuurd, niet door verteringsenzymen.",
          "Dat doet maagzuur (HCl), niet de enzymen zelf.",
          "Vetten worden niet door MAAGSAP-enzymen verteerd — dat gebeurt in de dunne darm (door gal + lipase).",
          null,
        ],
        explanation: "Enzymen zijn eiwit-moleculen die chemische reacties versnellen. In maagsap zit het enzym PEPSINE, dat eiwitten afbreekt. Algemeen geldt: enzymen in spijsvertering VERTEREN VOEDINGSSTOFFEN (eiwitten, koolhydraten, vetten — afhankelijk van welk enzym op welke plek).",
        examenBron: BRON_LABEL(12),
        bronLink: PDF_LINK,
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'enzym', 'maagzuur', 'verteren', 'voedingsstoffen'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam — Organen + voeding", niveau: "po-1F", why: "basis spijsvertering — opfris voor deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat is een enzym?", tekst: "Een **enzym** is een eiwit-molecuul dat een chemische reactie versnelt. In je lichaam zijn duizenden enzymen — elk voor een eigen taak. In spijsvertering: enzymen breken voedsel af tot kleine stukjes." },
            { titel: "Maagsap bestaat uit 2 dingen", tekst: "1. **Maagzuur (HCl)** — doodt bacteriën + activeert het enzym\n2. **Pepsine** (een enzym) — breekt eiwitten af tot peptiden\nDe vraag gaat over de enzymen, niet over het maagzuur." },
            { titel: "Antwoord", tekst: "Enzymen verteren voedingsstoffen. In het geval van maag = eiwitten. Antwoord D." },
          ],
          woorden: [
            { woord: "enzym", uitleg: "Eiwit dat een chemische reactie versnelt." },
            { woord: "pepsine", uitleg: "Maag-enzym dat eiwitten afbreekt." },
            { woord: "maagzuur (HCl)", uitleg: "Zuur — doodt bacteriën + activeert pepsine." },
          ],
          theorie: "Onthoud: maagzuur = doodt bacteriën. Enzymen = verteren. Twee verschillende functies in dezelfde maagsap.",
          voorbeelden: [
            { type: "stap", tekst: "Speeksel-amylase = enzym voor koolhydraten in mond." },
            { type: "stap", tekst: "Lipase + gal = enzymen voor vet in dunne darm." },
          ],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "Enzymen = verteren. Per spijsverteringsorgaan andere enzymen." }],
          niveaus: {
            basis: "Enzymen verteren voedingsstoffen. Antwoord D.",
            simpeler: "Enzymen knippen voedsel-moleculen in kleine stukjes zodat het lichaam ze kan opnemen. Antwoord D.",
            nogSimpeler: "Verteren = D.",
          },
        },
      },
    ],
  },

  // ─── Vraag 43 — Alcohol + kleine hersenen ──────────────────
  {
    title: "Vraag 43 — Waar wordt coördinatie geregeld?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 2, vraag 43.",
    emoji: "🎓",
    checks: [
      {
        q: "Mensen die alcohol hebben gedronken, hebben een verminderde coördinatie van hun bewegingen. In welk deel van het centrale zenuwstelsel vindt de coördinatie van bewegingen plaats?",
        options: [
          "in de grote hersenen",
          "in de kleine hersenen",
          "in de hersenstam",
          "in het ruggenmerg",
        ],
        answer: 1,
        wrongHints: [
          "Grote hersenen = denken + bewust waarnemen — niet specifiek coördinatie.",
          null,
          "Hersenstam = onbewuste functies (ademen, hartslag) — geen bewegings-coördinatie.",
          "Ruggenmerg = signaal-doorgifte + reflexen — coördinatie is hogerop.",
        ],
        explanation: "De KLEINE HERSENEN (cerebellum, achter onder in de schedel) zijn verantwoordelijk voor coördinatie van bewegingen + balans. Alcohol verstoort die werking — daarom waggelt iemand die teveel gedronken heeft. Politie's loopproeven (rechte lijn lopen, ogen dicht) testen de kleine hersenen.",
        examenBron: BRON_LABEL(43),
        bronLink: PDF_LINK,
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'coördinatie', 'grote/kleine hersenen', 'hersenstam'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam & organen", niveau: "po-1F", why: "basis zenuwstelsel — opfris voor deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Centraal zenuwstelsel — 4 onderdelen", tekst: "**Grote hersenen** = bewust denken/waarnemen.\n**Kleine hersenen** = COÖRDINATIE + balans.\n**Hersenstam** = automatische functies (ademen, hartslag).\n**Ruggenmerg** = signaal-snelweg + reflexen." },
            { titel: "Waarom alcohol → wankelen", tekst: "Alcohol vertraagt signalen in de kleine hersenen. Daardoor wordt fijne coördinatie minder: precisie verloren, balans wankel, spraak minder duidelijk. Bij veel alcohol vallen mensen om." },
            { titel: "Antwoord", tekst: "Coördinatie = kleine hersenen. Antwoord B." },
          ],
          woorden: [
            { woord: "kleine hersenen (cerebellum)", uitleg: "Achter onder in schedel, regelt soepele coördinatie + balans." },
            { woord: "coördinatie", uitleg: "Samenwerken van spieren tot een vloeiende beweging." },
          ],
          theorie: "**Onthoud per functie:**\n• Denken/willen → grote hersenen\n• Soepel bewegen/balans → kleine hersenen\n• Ademen/hartslag → hersenstam\n• Reflexen → ruggenmerg",
          voorbeelden: [
            { type: "stap", tekst: "Fietsen leren = kleine hersenen oefenen tot beweging automatisch wordt." },
            { type: "stap", tekst: "Politie-test: rechte lijn lopen met ogen dicht = test kleine hersenen-functie." },
          ],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "Coördinatie = kleine hersenen. Alcohol raakt vooral DAT." }],
          niveaus: {
            basis: "Kleine hersenen. Antwoord B.",
            simpeler: "Coördinatie + balans zit in de kleine hersenen. Daarom waggelt iemand die te veel gedronken heeft. Antwoord B.",
            nogSimpeler: "Kleine hersenen = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 45 — Gaswisseling in longblaasjes ───────────────
  {
    title: "Vraag 45 — Waar vindt gaswisseling plaats?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 2, vraag 45.",
    emoji: "🎓",
    checks: [
      {
        q: "Alcohol wordt in het lichaam afgebroken, maar kan ook door gaswisseling het lichaam verlaten. Waar vindt de gaswisseling plaats?",
        options: [
          "in de bronchiën",
          "in de longblaasjes",
          "in de luchtpijp",
          "in de mondholte",
        ],
        answer: 1,
        wrongHints: [
          "Bronchiën = vertakkende buizen die lucht naar de longblaasjes brengen — daar gebeurt uitwisseling niet zelf.",
          null,
          "Luchtpijp = grote centrale buis, vóór de bronchiën — alleen transport, geen uitwisseling.",
          "Mondholte = begin van de luchtweg, geen uitwisseling van gas met bloed.",
        ],
        explanation: "Gaswisseling = zuurstof uit lucht naar bloed + CO₂ uit bloed naar lucht. Dat gebeurt alleen in de LONGBLAASJES (alveolen) — dunne bolletjes met dichte haarvaten eromheen, waar de afstand tussen lucht en bloed minimaal is. Alcoholdamp (een vluchtige stof) lekt ook via deze plek terug naar uitgeademde lucht → daarom werkt de blaastest.",
        examenBron: BRON_LABEL(45),
        bronLink: PDF_LINK,
        leerpadLink: { id: "mens-biologie-vmbo", title: "Mens-biologie (VMBO)" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'gaswisseling', 'longblaasje', 'bronchiën', 'luchtpijp'" },
          { id: "lichaam-gezondheid-po", title: "Lichaam — Organen", niveau: "po-1F", why: "basis longen + ademhaling — opfris voor deze vraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Luchtweg van neus naar long", tekst: "Inademen: neus/mond → keel → **luchtpijp** → splitst in 2 **bronchiën** (1 per long) → kleinere bronchiolen → eindigen bij **longblaasjes** (alveolen).\nDe eerste 4 stappen zijn ALLEEN transport. Uitwisseling pas op het einde." },
            { titel: "Waarom alleen in longblaasjes?", tekst: "Longblaasjes hebben een dunne wand (1 cel dik) en zijn omringd door haarvaten. Zo kunnen O₂ + CO₂ snel doorheen. De luchtwegen erboven hebben dikke wanden + slijm — geen uitwisseling mogelijk." },
            { titel: "Antwoord", tekst: "Gaswisseling = longblaasjes. Antwoord B." },
          ],
          woorden: [
            { woord: "gaswisseling", uitleg: "Uitwisseling O₂ ↔ CO₂ tussen lucht en bloed." },
            { woord: "longblaasje (alveool)", uitleg: "Bolletje aan einde van bronchiole — plek waar gaswisseling plaatsvindt." },
            { woord: "bronchiën", uitleg: "Vertakkingen van de luchtpijp, vervoeren lucht naar diepere delen." },
          ],
          theorie: "**Volgorde luchtweg**: neus/mond → keel → strottenhoofd → luchtpijp → bronchiën → bronchiolen → **longblaasjes**.\nAlleen het laatste = uitwisseling.",
          voorbeelden: [
            { type: "stap", tekst: "Blaastest politie: alcoholdamp in uitgeademde lucht komt vanuit longblaasjes." },
            { type: "stap", tekst: "Bij longontsteking ontstoken longblaasjes → minder O₂ in bloed → kortademig." },
          ],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "Alleen longblaasjes wisselen gas uit. De rest is transport." }],
          niveaus: {
            basis: "Longblaasjes. Antwoord B.",
            simpeler: "Lucht reist door luchtpijp + bronchiën als 'snelweg'. Bij de longblaasjes komt de lucht aan en daar wordt zuurstof opgenomen + CO₂ afgegeven. Antwoord B.",
            nogSimpeler: "Longblaasjes = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 22 — Weeën zijn samentrekkingen van... ──────────
  {
    title: "Vraag 22 — Welke spieren veroorzaken weeën?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 2, vraag 22.",
    emoji: "🎓",
    checks: [
      {
        q: "Voor de ontsluiting krijgt Mandy weeën. Deze weeën zijn samentrekkingen van bepaalde spieren. Deze samentrekkingen zijn onbewuste bewegingen. Van welke spieren zijn dit de samentrekkingen?",
        options: [
          "van de baarmoederspieren",
          "van de buikspieren",
          "van de middenrifspieren",
          "van de vaginaspieren",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Buikspieren bewegen je romp en zijn bewust (kun je aanspannen) — weeën zijn onbewust.",
          "Middenrif zit bij ademhaling, niet bij geboorte.",
          "De vagina (geboortekanaal) heeft geen sterke spieren die het kind eruit duwen — dat doet de baarmoeder.",
        ],
        explanation: "Weeën zijn ONBEWUSTE samentrekkingen van de baarmoederspieren (myometrium — dikke gladde spierlaag in de baarmoederwand). Door deze samentrekkingen wordt het kind richting baarmoederhals geduwd, opent de baarmoedermond, en wordt het kind later via vagina naar buiten geperst. Ze worden gestuurd door het hormoon oxytocine.",
        examenBron: BRON_LABEL(22),
        bronLink: PDF_LINK,
        leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'weeën', 'ontsluiting', 'baarmoeder', 'samentrekken'" },
          { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen", niveau: "vmbo-3", why: "geboorte-proces + rol baarmoeder — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat zijn weeën?", tekst: "**Weeën** = sterke samentrekkingen van de baarmoeder. Komen in golven, worden steeds sterker en korter na elkaar. Doel: kind richting + door de baarmoederhals duwen (ontsluiting), en later het kind naar buiten persen (uitdrijving)." },
            { titel: "Welke spier?", tekst: "De baarmoeder bestaat uit een dikke laag GLADDE SPIER (myometrium). Die spier wordt onbewust aangestuurd door het hormoon **oxytocine**. Buikspieren + middenrif werken later mee bij persen (dat is bewust)." },
            { titel: "Antwoord", tekst: "Onbewuste samentrekkingen tijdens weeën = baarmoederspieren. Antwoord A." },
          ],
          woorden: [
            { woord: "weeën", uitleg: "Onbewuste samentrekkingen van de baarmoeder bij bevalling." },
            { woord: "baarmoederspier (myometrium)", uitleg: "Dikke gladde-spier-laag in de baarmoederwand." },
            { woord: "oxytocine", uitleg: "Hormoon dat weeën opwekt + versterkt." },
            { woord: "ontsluiting", uitleg: "Openen van de baarmoedermond (van 0 naar 10 cm) tijdens bevalling." },
          ],
          theorie: "**3 fases van bevalling:**\n1. Ontsluiting (weeën openen baarmoedermond)\n2. Uitdrijving (kind komt naar buiten — buikspieren helpen mee)\n3. Nageboorte (placenta komt eruit)",
          voorbeelden: [
            { type: "stap", tekst: "Bij oxytocine-injectie (ziekenhuis) versnelt arts de weeën." },
            { type: "stap", tekst: "Glad spier-weefsel zit ook in maagdarmkanaal — ook onbewust aangestuurd." },
          ],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "Weeën = baarmoeder = gladde spier = onbewust = oxytocine." }],
          niveaus: {
            basis: "Baarmoederspieren. Antwoord A.",
            simpeler: "Weeën zijn samentrekkingen van de baarmoeder zelf — die heeft een dikke spierlaag. Onbewust aangestuurd door het hormoon oxytocine. Antwoord A.",
            nogSimpeler: "Baarmoeder = A.",
          },
        },
      },
    ],
  },

  // ─── Vraag 23 — Prikkel voor weeën ─────────────────────────
  {
    title: "Vraag 23 — Welke prikkel veroorzaakt weeën?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 2, vraag 23.",
    emoji: "🎓",
    checks: [
      {
        q: "Hormonen geven bepaalde prikkels waardoor weeën ontstaan. Wat is de naam van deze prikkels?",
        options: [
          "adequate prikkels",
          "inwendige prikkels",
          "supranormale prikkels",
          "uitwendige prikkels",
        ],
        answer: 1,
        wrongHints: [
          "Adequate prikkel = de juiste soort prikkel voor een zintuig (licht voor oog) — niet over hormonen.",
          null,
          "Supranormale prikkel = overdreven sterke vorm van natuurlijke prikkel — uit gedragsbiologie.",
          "Uitwendig = van buitenaf (licht, geluid). Hormonen komen van binnenuit het lichaam.",
        ],
        explanation: "Hormonen komen van binnen het lichaam — uit klieren in het eigen lichaam. Een prikkel van binnenuit heet een INWENDIGE prikkel. Uitwendige prikkels komen van buiten (licht, geluid, warmte, druk).",
        examenBron: BRON_LABEL(23),
        bronLink: PDF_LINK,
        leerpadLink: { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'prikkel', 'hormoon', 'inwendig', 'uitwendig'" },
          { id: "voortplanting-hormonen-biologie", title: "Voortplanting & hormonen", niveau: "vmbo-3", why: "hormonen + prikkels in lichaam — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Soorten prikkels", tekst: "Een prikkel is een SIGNAAL dat een reactie veroorzaakt:\n• **Uitwendige prikkel** = van BUITEN (licht, geluid, warmte, aanraking, geur)\n• **Inwendige prikkel** = van BINNEN (hormoon-niveau, bloedsuiker, lichaamstemp)\n• **Adequate prikkel** = de soort waarvoor een zintuig speciaal gemaakt is (licht voor oog, geluid voor oor)" },
            { titel: "Hormoon = van binnenuit", tekst: "Hormonen worden gemaakt door klieren in JOUW lichaam (hypofyse, schildklier, eierstokken). Ze komen NIET van buitenaf. Dus: hormoon-prikkel = INWENDIGE prikkel." },
            { titel: "Antwoord", tekst: "Antwoord B: inwendige prikkels." },
          ],
          woorden: [
            { woord: "inwendige prikkel", uitleg: "Signaal van binnen het lichaam (bv. hormoon-niveau)." },
            { woord: "uitwendige prikkel", uitleg: "Signaal van buiten (licht, geluid, etc.)." },
            { woord: "adequate prikkel", uitleg: "Soort waarvoor een zintuig gespecialiseerd is." },
          ],
          theorie: "**Onthoud**: kom signaal van binnen = INwendig. Van buiten = UITwendig. Hormonen, bloedsuiker, dorst, honger = inwendig.",
          voorbeelden: [
            { type: "stap", tekst: "Honger = inwendige prikkel (laag bloedsuiker)." },
            { type: "stap", tekst: "Zonlicht op huid = uitwendige prikkel." },
          ],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "Hormoon = altijd inwendig (eigen klier maakt het)." }],
          niveaus: {
            basis: "Inwendige prikkels. Antwoord B.",
            simpeler: "Hormonen komen van binnenuit (eigen klieren), niet van buiten. Dus de prikkel die ze geven is een INwendige prikkel. Antwoord B.",
            nogSimpeler: "Van binnen = inwendig = B.",
          },
        },
      },
    ],
  },

  // ─── Vraag 35 — Temperatuur = abiotisch ────────────────────
  {
    title: "Vraag 35 — Temperatuur bepaalt geslacht — biotisch of abiotisch?",
    explanation: "Echte examenvraag uit VMBO-GL/TL biologie 2024 tijdvak 2, vraag 35.",
    emoji: "🎓",
    checks: [
      {
        q: "Wordt het geslacht van soepschildpadden volgens de informatie uit het onderzoek bepaald door een abiotische factor, door een biotische factor of door beide?",
        options: [
          "abiotisch",
          "biotisch",
          "beide",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Biotisch = LEVEND deel (planten, dieren). Maar geslacht-bepaling hier door temperatuur (niet-levend).",
          "Niet beide — temperatuur is alleen abiotisch (niet-levend deel van milieu).",
        ],
        explanation: "Bij soepschildpadden (zoals veel reptielen) wordt het geslacht bepaald door de TEMPERATUUR in het nest. Temperatuur is een ABIOTISCHE (niet-levende) factor. Biotische factoren zouden andere organismen zijn — die spelen hier geen rol.",
        examenBron: BRON_LABEL(35),
        bronLink: PDF_LINK,
        leerpadLink: { id: "ecosystemen-biologie", title: "Ecosystemen" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrijpen 'abiotisch', 'biotisch', 'factor'" },
          { id: "ecosystemen-biologie", title: "Ecosystemen", niveau: "vmbo-2", why: "abiotisch vs biotisch — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Twee soorten milieu-factoren", tekst: "**Abiotisch** = niet-levend (water, lucht, temperatuur, licht, bodem-stoffen, pH).\n**Biotisch** = levend (planten, dieren, bacteriën, schimmels)." },
            { titel: "Temperatuur = abiotisch", tekst: "Temperatuur is een meting van warmte — het heeft niets met leven te maken. Dus = abiotisch." },
            { titel: "Antwoord", tekst: "Temperatuur is abiotisch. Geen biotische factor genoemd in deze context. Antwoord A." },
          ],
          woorden: [
            { woord: "abiotisch", uitleg: "Niet-levend onderdeel van milieu (T, water, lucht, bodem)." },
            { woord: "biotisch", uitleg: "Levend onderdeel (organismen)." },
          ],
          theorie: "**Onthoud**: A = nee-leven (abiotisch). Bio = leven (biotisch). Bij ecosysteem-vragen onderscheid altijd of een factor levend (b) of niet-levend (a) is.",
          voorbeelden: [
            { type: "stap", tekst: "Regen = abiotisch. Konijn = biotisch. Bodem-pH = abiotisch. Schimmel = biotisch." },
            { type: "stap", tekst: "Krokodillen ook: warmere nesten geven meer vrouwtjes. Temperatuur stuurt geslacht = abiotische factor." },
          ],
          basiskennis: [{ onderwerp: "Onthoud", uitleg: "Temperatuur/water/lucht/grond = ALTIJD abiotisch." }],
          niveaus: {
            basis: "Abiotisch (temperatuur is niet-levend). Antwoord A.",
            simpeler: "Temperatuur is warmte-meting — geen leven. Dus abiotisch. Antwoord A.",
            nogSimpeler: "Temperatuur = abiotisch = A.",
          },
        },
      },
    ],
  },
];

const examenBiologie2024T2 = {
  id: "examen-biologie-2024-t2",
  title: "Examen oefenen — Biologie 2024 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "biologie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Biologie - eindexamen oefenen 2024-T2",
  intro:
    "6 echte examenvragen uit het VMBO-GL/TL biologie-examen 2024 tijdvak 2 (examen-id GT-0191-a-24-2). Per vraag de officiële antwoorden, didactische denkprikkel-hints, inhoudelijke uitleg, en doorklik naar bestaande biologie-leerpaden. Open vragen + bron-afhankelijke vragen overgeslagen.",
  triggerKeywords: [
    "examen biologie 2024 tijdvak 2", "echte examenvragen biologie",
    "enzymen maagsap", "weeën baarmoeder", "inwendige prikkel hormoon",
    "alcohol coördinatie kleine hersenen", "gaswisseling longblaasjes",
    "abiotisch biotisch temperatuur",
  ],
  chapters,
  steps,
};

export default examenBiologie2024T2;

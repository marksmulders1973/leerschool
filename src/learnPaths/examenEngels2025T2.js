// Leerpad: Examen-oefenpad Engels VMBO-GL/TL 2025 tijdvak 2.
// 2026-05-16: 4e Engels-pilot. 6 echte MC-vragen geselecteerd uit 30 MC's
// over 6 verschillende bronteksten. Bron: examenblad.nl, examen 0071 GT 2025-2.

const tekst1 = {
  titel: "Tekst 1 — Power Supply (koemest als energievoorziening)",
  body:
    "A total of 1,000 kilowatt hours of electricity can be obtained in a year from the slurry of a single cow and according to the German Ministry of Agriculture's 'Number of the Week', this is enough for 1,000 showers. If the manure of a small herd of cattle — about 25 cattle — is used, then the energy produced can supply up to seven average households with electricity for a year. According to the Ministry, biogas from cattle slurry is a major form of renewable energy in Germany. Some 9,000 biogas installations in Germany produce 9 percent of all renewable electricity in the country.",
};

const tekst3 = {
  titel: "Tekst 3 — 98-year-old defends her 1936 spelling bee title",
  body:
    "1 Adell Williams-Keays was 11 years old when she was asked to participate in a spelling bee competition at her school in Barney's River Station, N.S., back in 1936. It was then that she received her first trophy, a giant honeycomb made of wicker with a painted wooden bee sticking out of it.\n\n" +
    "2 Now 98 years old, Adell was approached by her niece Joan to sign up for the 86th annual Barney's River Heritage Society spelling bee — the same village event, 87 years later. Joan, charged with running this year's competition, admits she was a little tired of hearing her aunt boast about her unbeaten record. 'Auntie Adell has been talking about that spelling bee her whole life — every family gathering. So I said: prove it.'",
};

const tekst6 = {
  titel: "Tekst 6 — Should we ban phones in schools? (Daisy Turnbull)",
  body:
    "1 Every Sunday morning, my phone will get a screentime notification of how much (usually too much) time I've spent on my phone in the past week. I use my phone a lot. I am writing this on my phone. I also know when not to use my phone, when to have it on silent, and when it is using me more than I am using it. I have learned how to do this because sometimes the only way to learn how to use something properly is to fail to use it properly first.",
};

const tekst8 = {
  titel: "Tekst 8 — Old Clothes: Vintage or Classic? (Ashley Kane)",
  body:
    "1 The term 'vintage' is used to describe clothing between 20 and 100 years old that is also clearly representative of the era in which it was produced. To be called vintage the piece should strongly reflect styles and trends associated with that period.\n\n" +
    "5 Sizing has changed dramatically over the decades. A modern size 10 dress would have been called a size 14 in the 1960s and a size 16 in the 1940s. As Western women's average body shape has changed and vanity sizing has crept in, the numerical scale has gradually shifted — making vintage items run 1-2 sizes smaller than the labelled number suggests.",
};

const tekst10 = {
  titel: "Tekst 10 — The Unhoneymooners (Christina Lauren, 2019) — fragment",
  body:
    "chapter one\n\nIn the calm before the storm — in this case, the blessed quiet before the bridal suite is overrun by the wedding party — my twin sister stares critically down at a freshly painted shell-pink fingernail and says, 'I bet you're relieved I'm not a bridezilla.' She glances across the room at me and smiles generously. 'I bet you expected me to be impossible.'\n\nIt is a statement so perfectly dropped in the moment, I want to take a picture and frame it.\n\nI share a knowing look with our cousin Julieta, who is repainting Ami's toes ('It should be more cohesive!' Ami insisted earlier). Julieta lifts a sceptical eyebrow at me.\n\n'Define bridezilla,' I say, deadpan.",
};

const tekst11 = {
  titel: "Tekst 11 — Maori newsreader with traditional face tattoo",
  body:
    "1 A Kiwi newsreader has made history by becoming the first person to anchor a TV news bulletin with a traditional face tattoo. Oriini Kaipara, 37, who has a moko kauae — a traditional lower chin tattoo worn by Māori women — read Newshub Live's 6pm news bulletin in New Zealand on Monday. The mother-of-four from Auckland discovered she was 100 per cent Māori after taking a DNA test in 2017. The newsreader then decided to adopt the Māori tattoo in 2019 in a process known as Tā moko, which represents family heritage and social status.\n\n" +
    "2 For Māori women the moko was a rite of passage, marking the passage from childhood to adulthood, and was a symbol of cultural identity and pride.",
};

const chapters = [
  { letter: "A", title: "Maatschappij & technologie", emoji: "🔌", from: 0, to: 1 },
  { letter: "B", title: "Cultuur & identiteit", emoji: "🎭", from: 2, to: 4 },
  { letter: "C", title: "Persoonlijk verhaal", emoji: "💬", from: 5, to: 5 },
];

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2025/vmbo-gl/documenten/cse-2/gt-0071-a-25-2-o";

const steps = [
  // V1
  {
    title: "Vraag 1 — Power Supply: doel van de tekst",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 2, vraag 1. Bekijk eerst tekst 1.",
    emoji: "🎓",
    checks: [
      {
        q: "Wat is het doel van deze tekst?",
        options: [
          "aandacht vragen voor de ontwikkeling van winstgevende technologieën",
          "informatie geven over het gebruik van koemest als energievoorziening",
          "presenteren van de voordelen van kleinschalige veeteeltbedrijven in Duitsland",
          "wegnemen van misverstanden die bestaan over de bio-industrie",
        ],
        answer: 1,
        wrongHints: ["De tekst noemt geen winstgevende technologie-ontwikkeling als hoofdthema.", null, "Niet over kleinschalige veeteelt — wel over biogas-installaties (9000 in DE).", "Geen misverstanden weggenomen — pure feiten-presentatie."],
        explanation: "De tekst geeft cijfers + feiten over biogas uit koemest: 1000 kWh per koe per jaar, 25 koeien = 7 huishoudens, 9000 installaties in Duitsland. Pure **informatieve tekst** over gebruik van koemest als energiebron. Geen oproep, geen verkooppraat — louter feiten.",
        examenBron: BRON_LABEL(1),
        bronLink: BRON_LINK,
        bronTekst: tekst1,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'slurry/manure', 'biogas', 'renewable energy', 'household'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'doel van tekst'-vraag = tekstsoort herkennen (informatief / instructief / betogend / verhalend)" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "4 tekstsoorten + doelen", tekst: "**Informatief**: feiten geven. **Instructief**: leren hoe-iets-werkt. **Betogend**: overtuigen van een mening. **Verhalend**: verhaal vertellen." },
            { titel: "Wat doet deze tekst?", tekst: "Pure cijfers: 1000 kWh per koe, 25 koeien → 7 huishoudens, 9000 installaties. Geen 'we moeten meer X doen' (= betogend), geen verhaaltje. Pure feiten = **informatief**." },
            { titel: "Optie B match", tekst: "B zegt 'informatie geven over gebruik koemest als energievoorziening' — precies wat de tekst doet. Andere opties klinken plausibel maar passen niet bij de tekst-toon." },
          ],
          woorden: [{ woord: "slurry/manure", uitleg: "Koemest (vloeibare / vaste vorm)." }, { woord: "biogas", uitleg: "Methaangas uit organisch afval — energie." }, { woord: "renewable energy", uitleg: "Hernieuwbare energie — zon, wind, biogas." }],
          theorie: "Cito-truc 'doel van tekst': geen oproep + geen verhaal + alleen feiten = informatief. Werkwoord-cue 'informatie geven' = match.",
          voorbeelden: [{ type: "stap", tekst: "Vergelijk: 'Klimaatverandering is gevaarlijk, doe iets!' = betogend. 'In 2023 emitteerde NL 168 megaton CO₂' = informatief. Toon is anders." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Informatieve tekst heeft veel cijfers + 'is/are/has'-zinnen. Geen 'should/must/we need' (= betoog) en geen 'once upon a time' (= verhaal)." }],
          niveaus: { basis: "Informatie over koemest-energie. = B.", simpeler: "Pure feiten over biogas uit koeien = informatieve tekst. = B.", nogSimpeler: "B = informatie." },
        },
      },
    ],
  },
  // V3
  {
    title: "Vraag 3 — Spelling bee: Joan's reden",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 2, vraag 3. Bekijk eerst tekst 3.",
    emoji: "🎓",
    checks: [
      {
        q: "Why did Joan ask her aunt Adell to sign up for the spelling contest again, according to the text?",
        options: [
          "because Joan could not participate in the competition herself",
          "because Joan wanted to help the school to raise more money",
          "because she was a bit fed up with Adell's continuous boasting",
          "because she was certain that Adell was still up to the task",
        ],
        answer: 2,
        wrongHints: ["Niet genoemd dat Joan zelf wilde meedoen — ze rent de competitie.", "Niet over school-geld — gaat over Adell's record en bewijzen.", null, "Tegenovergesteld — Joan vond Adell's geschuif vermoeiend, niet 'sure she's up to it'."],
        explanation: "Sleutel-zin alinea 2: *'Joan ... admits she was a little tired of hearing her aunt boast about her unbeaten record.'* En: *'So I said: prove it.'* Joan was de eeuwige opscheppen-verhalen zat → uitdaagde Adell om het te bewijzen. 'Fed up with boasting' = klaar met opschepperij = optie C.",
        examenBron: BRON_LABEL(3),
        bronLink: BRON_LINK,
        bronTekst: tekst3,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'boast', 'fed up', 'unbeaten record', 'prove'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'why'-vraag — zoek motivatie-zin met 'because' / 'tired of' / 'so I said'" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Zoek het motief", tekst: "Vraag: waarom vroeg Joan Adell? Zoek in tekst een zin met 'because / tired of / so'." },
            { titel: "Sleutel-zin", tekst: "*'Joan admits she was a little tired of hearing her aunt boast'* + *'I said: prove it.'* = Joan was Adell's opscheppen zat → wilde bewijs." },
            { titel: "Wat is 'fed up'?", tekst: "**Fed up with X** = klaar met X / geen zin meer in X. 'Tired of' is synoniem. Optie C zegt 'fed up with continuous boasting' — directe parafrase." },
          ],
          woorden: [{ woord: "to boast", uitleg: "Opscheppen / pochen." }, { woord: "fed up with", uitleg: "Klaar zijn met / geen zin meer in." }, { woord: "unbeaten record", uitleg: "Ongeklopt record." }],
          theorie: "Cito-truc 'why' Engels: 'tired of' / 'fed up' / 'so I/she/he decided' zijn vaak motief-aanwijzingen. Match Nederlandse parafrase.",
          voorbeelden: [{ type: "stap", tekst: "Adell vertelt al haar leven over haar 1936-record. Familie kent het verhaal. Joan: 'kom op, doe het opnieuw, dan zien we wel.'" }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Opscheppen = continuously boast about an achievement. 'Continuous boasting' = aanhoudend opscheppen — directe match." }],
          niveaus: { basis: "Klaar met Adell's opschepperij. = C.", simpeler: "Joan was 'tired of hearing her aunt boast' → uitdagen om te bewijzen. = C.", nogSimpeler: "C = fed up boasting." },
        },
      },
    ],
  },
  // V11
  {
    title: "Vraag 11 — Phones in schools: hoe introduceert de schrijver?",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 2, vraag 11. Bekijk eerst tekst 6.",
    emoji: "🎓",
    checks: [
      {
        q: "How does the writer introduce the topic of her article in paragraph 1?",
        options: [
          "by admitting that she cannot do without her phone",
          "by claiming her phone has a negative impact on her life",
          "by explaining why she needs her phone professionally",
          "by telling about her own experiences with her phone",
        ],
        answer: 3,
        wrongHints: ["Ze geeft niet toe afhankelijk te zijn — ze zegt juist dat ze de juiste balans heeft geleerd.", "Ze claimt geen negatieve impact — toon is gebalanceerd, niet alarmerend.", "Geen 'professional' use noemen — wel persoonlijk gebruik (schrijft op telefoon).", null],
        explanation: "Alinea 1: *'Every Sunday morning, my phone will get a screentime notification. ... I use my phone a lot. I am writing this on my phone. I also know when not to use my phone.'* Pure persoonlijke ervaring delen — geen claim, geen mening, geen toegeving van afhankelijkheid. Schrijver introduceert het onderwerp via **eigen ervaringen**. Optie D.",
        examenBron: BRON_LABEL(11),
        bronLink: BRON_LINK,
        bronTekst: tekst6,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'admit', 'claim', 'explain', 'telling about experiences'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'how does writer introduce'-vraag — onderscheid werkwoord-types (admit/claim/explain/tell)" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Werkwoord-types onderscheiden", tekst: "**Admit** = toegeven (vaak iets negatiefs). **Claim** = beweren (mening). **Explain** = uitleggen (verklaring). **Tell about experiences** = vertellen wat je meemaakt (verhaal)." },
            { titel: "Wat doet de schrijver?", tekst: "Ze vertelt over haar zondag-routine, haar gebruik, dat ze schrijft op telefoon. Pure persoonlijke verhaaltjes — niet claim, niet uitleg, niet toegeven. Optie D match." },
            { titel: "Toon analyseren", tekst: "Toon = neutraal-vertellend, niet defensief (admit) of stellend (claim). Eerste-persoons-verhaal = experience-sharing." },
          ],
          woorden: [{ woord: "to admit", uitleg: "Toegeven (vaak iets onaangenaams)." }, { woord: "to claim", uitleg: "Beweren / stellen." }, { woord: "experience", uitleg: "Ervaring." }],
          theorie: "Cito-truc 'how does writer introduce' Engels: kijk welke werkwoord-soort het opening-alinea gebruikt. 'I use', 'I am writing', 'I know' = persoonlijke ervaring = tell about experiences.",
          voorbeelden: [{ type: "stap", tekst: "Andere openingen die WEL admit zouden zijn: 'I have to confess that...'. WEL claim: 'Phones are destroying childhood.' WEL explain: 'Here's why phones are bad...'. Schrijver doet géén van dit." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Personal experience-opening = 'tell about'. Schrijver bouwt geloofwaardigheid via 'ik heb dit zelf meegemaakt' — gangbaar in betogende artikelen." }],
          niveaus: { basis: "Persoonlijke ervaringen vertellen. = D.", simpeler: "Schrijver deelt eigen telefoon-gebruik = 'tell about her experiences'. = D.", nogSimpeler: "D = experiences." },
        },
      },
    ],
  },
  // V25
  {
    title: "Vraag 25 — Vintage clothing sizing: kern alinea 5",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 2, vraag 25. Bekijk eerst tekst 8.",
    emoji: "🎓",
    checks: [
      {
        q: "What is the main point made in paragraph 5?",
        options: [
          "In the past there was no reliable way to determine sizes.",
          "It has become fashionable to wear more slim-fitting clothes.",
          "The sizing scale has gradually changed over the years.",
          "Today's women are taller than those of previous generations.",
        ],
        answer: 2,
        wrongHints: ["Niet over betrouwbaarheid in het verleden — alinea spreekt van decennia-verschuiving.", "Geen mode-discussie — gaat over numerieke maten + statistiek, niet over slim-fit trend.", null, "Niet over lengte (taller) — wel over body shape + vanity sizing."],
        explanation: "Alinea 5: *'A modern size 10 dress would have been called a size 14 in the 1960s and a size 16 in the 1940s. ... the numerical scale has gradually shifted.'* Het hoofdpunt: de **maten-schaal is door de jaren heen veranderd** — wat nu maat 10 heet, was vroeger maat 14 of 16. Optie C zegt dat letterlijk: *'sizing scale has gradually changed over the years.'*",
        examenBron: BRON_LABEL(25),
        bronLink: BRON_LINK,
        bronTekst: tekst8,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'sizing', 'scale', 'gradually shifted', 'vanity sizing'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'main point of paragraph'-vraag — onderscheid hoofdgedachte van details" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Hoofdgedachte vinden", tekst: "Lees alinea 5 helemaal. De kern-zin staat vaak vooraan (topic sentence) of als conclusie. Hier: *'A modern size 10 ... a size 14 in the 1960s ... a size 16 in the 1940s.'* Plus: *'the numerical scale has gradually shifted.'*" },
            { titel: "Match opties", tekst: "Optie C 'sizing scale has gradually changed' = directe parafrase van 'numerical scale has gradually shifted'. Synoniemen: scale = schaal, gradually = geleidelijk, changed/shifted = veranderd/verschoven." },
            { titel: "Andere opties uitsluiten", tekst: "A: tekst zegt niet 'unreliable' — alleen 'changed'. B: geen slim-fit-mode-discussie. D: 'taller' niet genoemd — wel body shape + vanity sizing." },
          ],
          woorden: [{ woord: "sizing", uitleg: "Maatvoering (kleding)." }, { woord: "scale", uitleg: "Schaal." }, { woord: "gradually", uitleg: "Geleidelijk." }, { woord: "vanity sizing", uitleg: "Maten lager labelen om vleiend te zijn voor klanten." }],
          theorie: "Cito-truc 'main point' Engels: zoek de zin met de meest-algemene uitspraak in de alinea. Specifieke cijfers (size 10/14/16) zijn voorbeelden van die algemene uitspraak.",
          voorbeelden: [{ type: "feit", tekst: "'Vanity sizing' is bekend fenomeen: tussen 1980 en 2010 is een 'size 8' US ongeveer 2 maten gegroeid in feitelijke omvang. Goed voor marketing — kopers voelen zich dunner." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Voorbeelden + cijfers = bewijs. De HOOFDGEDACHTE staat in de samenvattende zin: 'the numerical scale has gradually shifted'." }],
          niveaus: { basis: "Maten-schaal is veranderd door de jaren. = C.", simpeler: "Wat nu 10 heet, was 60 jaar geleden 14-16. De schaal verschoof geleidelijk. = C.", nogSimpeler: "C = scale changed." },
        },
      },
    ],
  },
  // V32
  {
    title: "Vraag 32 — Bridezilla: tone 'mocking'",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 2, vraag 32. Bekijk eerst tekst 10 (boekfragment).",
    emoji: "🎓",
    checks: [
      {
        q: "'Define `bridezilla.'' (regel 16) How can this remark be characterised?",
        options: ["as curious", "as mocking", "as optimistic", "as surprised"],
        answer: 1,
        wrongHints: ["Niet nieuwsgierig (curious) — vertelster kent de definitie heel goed. Vraagt deadpan.", null, "Niet optimistisch — toon is spottend, niet hoopvol.", "Niet verrast — verteller verwacht juist precies dit gedrag."],
        explanation: "Context: zus Ami zegt 'I bet you're relieved I'm not a bridezilla' terwijl ze haar vingernagel kritisch bekijkt en juist bridezilla-gedrag vertoont (kleur eisen, fingernagels minutieus). Verteller's *'Define bridezilla'* (deadpan, met knipoog naar nicht) = **spottend/mockend** commentaar op Ami's blinde zelfbeeld. Ami is een bridezilla — verteller ironiseert dat.",
        examenBron: BRON_LABEL(32),
        bronLink: BRON_LINK,
        bronTekst: tekst10,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'curious', 'mocking', 'optimistic', 'surprised', 'deadpan'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "toon-werkwoorden onderscheiden in verhalend fragment (geen feiten, maar emoties/houding)" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Context begrijpen", tekst: "Ami (zus) zegt nét dat ze GEEN bridezilla is, maar gedraagt zich precies zo (eist perfecte nagel-kleur, cohesieve trouwfeest). De verteller ziet dit." },
            { titel: "Wat is 'deadpan'?", tekst: "**Deadpan** = met een uitdrukkingsloos gezicht — emotieloos zeggen wat eigenlijk grappig/ironisch is. Verteller's 'Define bridezilla' is deadpan = stiekem spottend." },
            { titel: "Mocking match", tekst: "**Mocking** = spottend / ironisch / belachelijk-makend (zonder direct te beledigen). Verteller maakt grap over Ami's blinde zelfbeeld — niet onbeleefd hardop, maar via subtle ironie. Optie B." },
          ],
          woorden: [{ woord: "mocking", uitleg: "Spottend, belachelijk-makend (subtiel)." }, { woord: "curious", uitleg: "Nieuwsgierig." }, { woord: "deadpan", uitleg: "Met emotieloos gezicht — ironisch effect." }, { woord: "bridezilla", uitleg: "Bruid die alles onder controle wil — onaardig + veeleisend." }],
          theorie: "Cito-truc toon-vraag in verhaal: kijk naar de DISSONANTIE — verteller zegt iets dat tegenstrijdig is met wat het personage van zichzelf denkt. Dat is bijna altijd mocking/ironisch.",
          voorbeelden: [{ type: "stap", tekst: "Ami: 'Ik ben geen bridezilla.' Verteller: 'Define bridezilla.' (= 'leg eens uit wat een bridezilla is — jij bent er één maar zegt het tegenovergestelde'). Klassieke mocking." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Mocking vs rude: mocking is subtiel + speels (kan tussen vrienden/familie). Rude is direct aanvallend + onbeleefd. Verteller is mockend, niet rude." }],
          niveaus: { basis: "Mockend / spottend. = B.", simpeler: "Verteller ziet dat zus zich bridezilla-achtig gedraagt en ironiseert dat met 'define bridezilla' = spottend. = B.", nogSimpeler: "Mocking = B." },
        },
      },
    ],
  },
  // V34
  {
    title: "Vraag 34 — Maori tattoo: omhelzen van etnische tradities",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 2, vraag 34. Bekijk eerst tekst 11.",
    emoji: "🎓",
    checks: [
      {
        q: "Why did Oriini Kaipara take a face tattoo, according to paragraph 1?",
        options: [
          "She chose to embrace the traditions of her ethnic background.",
          "She hoped an ethnic look would give her career a boost.",
          "She tried to get more attention for an ethnic minority group.",
          "She wanted to celebrate motherhood with an ethnic token.",
        ],
        answer: 0,
        wrongHints: [null, "Niet voor carrière-boost — ze deed het na DNA-test, niet om bekendheid.", "Geen minderheid-aandacht-doel — persoonlijke beslissing.", "Geen moederschap-viering — wel mother-of-four maar dat is achtergrond, geen reden."],
        explanation: "Alinea 1: *'discovered she was 100 per cent Māori after taking a DNA test in 2017. The newsreader then decided to adopt the Māori tattoo in 2019 in a process known as Tā moko, which represents family heritage and social status.'* Reden: DNA-test bevestigde dat ze 100% Māori is → ze koos toen om de **tradities van haar etnische achtergrond** te omhelzen via tā moko. Optie A.",
        examenBron: BRON_LABEL(34),
        bronLink: BRON_LINK,
        bronTekst: tekst11,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'embrace', 'ethnic background', 'heritage', 'rite of passage'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'why X did Y'-vraag — zoek motivatie-zin in tekst" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Tijdvolgorde uit tekst", tekst: "2017: DNA-test → bewijst 100% Māori. 2019: kiest tā moko-tattoo. De tattoo is een directe reactie op de DNA-onthulling — ze omhelst haar Māori-erfgoed." },
            { titel: "Tā moko = traditie", tekst: "*'Tā moko represents family heritage and social status'* — de tattoo is een **traditioneel cultureel symbool**, niet een fashion-statement of carrière-move." },
            { titel: "Match optie A", tekst: "'Embrace traditions of ethnic background' = omarmen van haar Māori-achtergrond. Letterlijk wat ze deed. Andere opties bedenken motieven die niet in de tekst staan." },
          ],
          woorden: [{ woord: "to embrace", uitleg: "Omarmen / toe-eigenen." }, { woord: "ethnic background", uitleg: "Etnische afkomst." }, { woord: "heritage", uitleg: "Erfgoed." }, { woord: "rite of passage", uitleg: "Overgangsritueel (kind → volwassene)." }],
          theorie: "Cito-truc Engels 'why'-vraag: vind in de tekst het tijd-pad (X gebeurde, daarom Y). Hier: 2017 DNA → 2019 tattoo = directe causale lijn naar identiteit-embrace.",
          voorbeelden: [{ type: "feit", tekst: "Māori tattoo-traditie was eeuwen onderdrukt door Britse kolonisten in NZ. Sinds 1990 revival — meer Māori-vrouwen kiezen weer tā moko om identity terug te claimen. Oriini Kaipara was eerste nieuwslezer met zichtbare tattoo." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "'Embrace traditions' = positief identiteit-omarmen. Andere opties suggereren motieven (carrière, aandacht, herinnering) die NIET in tekst staan. Stick to what tekst says." }],
          niveaus: { basis: "Omarmen van etnische traditie. = A.", simpeler: "DNA-test = 100% Māori → koos tā moko om Māori-erfgoed te omarmen. = A.", nogSimpeler: "Embrace traditions = A." },
        },
      },
    ],
  },
];

const examenEngels2025T2 = {
  id: "examen-engels-2025-t2",
  title: "Examen oefenen — Engels 2025 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Engels - eindexamen oefenen 2025-T2",
  intro:
    "6 echte examenvragen uit VMBO-GL/TL Engels 2025 tijdvak 2. Onderwerpen: koemest-biogas Duitsland, 98-jarige spelling bee, phones in schools, vintage clothing sizing, bridezilla mocking-toon, Māori tā moko-tattoo. Per vraag verbatim bronTekst + denkprikkel-hints + 3-niveau uitleg + voorkennisKeten + leerpad-doorklik.",
  triggerKeywords: [
    "examen engels 2025 tijdvak 2", "echte examenvragen engels",
    "biogas koemest", "spelling bee 98-jarige", "phones in schools",
    "vintage clothing sizing", "bridezilla mocking", "moko kauae maori",
    "cse engels", "engelse leesvaardigheid",
  ],
  chapters,
  steps,
};

export default examenEngels2025T2;

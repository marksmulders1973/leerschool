// Leerpad: Examen-oefenpad Engels VMBO-GL/TL 2023 tijdvak 2.
// 2026-05-16: 5e Engels-pilot. 6 echte MC-vragen geselecteerd uit 28 MC's.
// Bron: examenblad.nl, 0071 GT 2023-2.

const tekst1 = {
  titel: "T1 — YouTube parents sell baby replica (thetimes.co.uk, 2019)",
  body:
    "What 'merch' can a YouTube family sell when they already do mugs, T-shirts and hoodies? A lifelike doll of their baby, of course. Chris and Sarah Ingham broadcast their life to 1.2 million subscribers and livestreamed the birth of Jace, their fourth child. Now they are selling a toy version with 'realistically adorable features'. It costs £279.\n\nLike other YouTubers, they sell a variety of merchandise, but the announcement drew hostile comments. 'Imagine finding out your parents once sold realistic dolls of the newborn you online,' one user wrote. Referring to a dystopian TV show, another said: 'Is this an episode of Black Mirror?'\n\nThe Inghams said that their actions had been 'twisted' and that the doll was 'a representation of what he looked like at two weeks old but not an exact copy of him'. They said that any profit would go to Jace as an adult. Mrs Ingham said that 'reborn' dolls comforted infertile women.",
};

const tekst2 = {
  titel: "T2 — Wurst luck (German burglary case)",
  body:
    "1 German police say they have solved a nine-year-old burglary case after DNA found on a half-eaten piece of sausage matched that of a man detained in France over an unrelated crime.\n\n2 Police in the western town of Schwelm said on Thursday the sausage belonged to the victim, and the suspect appeared to have helped himself to a bite during the break-in in Gevelsberg in March 2012.\n\n3 Officers from the Nordrhein-Westfalen force said the DNA pattern did not produce a direct hit at the time but that automatic comparisons with international databases led to a link later on. The connection was made after French police took a DNA sample from a man involved in a violent crime that matched the burglary sample, alerting investigators.\n\n4 However, the statute of limitations on the burglary has expired, meaning the suspect is unlikely to be extradited to Germany. Schwelm police said the suspect remains free.",
};

const tekst4 = {
  titel: "T4 — Vienna selfie museum aims to make art more [...]",
  body:
    "1 Filled with brightly-coloured walls and giant objects, it has everything needed for the perfect selfie. 'The number of young people going to a museum has fallen, so we are trying to combat that with social media,' says Petra Scharinger, co-creator of nofilter_museum.\n\n2 The museum is filled with interactive exhibits which invite people to really have fun. There are 24 different rooms — ball pits, floral walls, glitter confetti, designed for creative selfies. Even a room filled with fake food.\n\n3 A number of major influencers have already expressed interest in coming to the museum for shoots. But the idea of attracting influencers is controversial, because of the often close relationship between popular influencers and brands. Much advertising on social media is subtle or even subliminal.\n\n4 Ms Scharinger, a business graduate, expects around 300-500 people a day to visit her museum. 'I think it's the future of museums,' she says. 'The main point is that it's not only about selfies, but also about having a good time, being able to interact while experiencing art.'\n\n(adapted from bbc.com, 2019)",
};

const tekst6 = {
  titel: "T6 — Hailie Deegan: NASCAR's exciting young driver (bbc.com, 2020)",
  body:
    "1 In September 2018, Hailie Deegan had her debut season in stock car racing, the most popular form of automobile racing in the USA. She had recently made the switch from off-road, where she had progressed through the classes after starting to compete aged eight. Her introduction to racing came as her dad, a decorated motocross rider, was making the transition to off-road competition. It was at one of his races that she saw others her age competing in events for children and, after 'begging' her parents, she received an off-road kart for her eighth birthday. Soon afterwards, Deegan began competing in the Lucas Oil Off Road Pro series' youth events. She was the only girl and became a three-time champion. The first female to win a title.\n\n2 By the time Deegan was 15, she was ready for a new challenge. Her mother saw an advert online for NASCAR's 'Drive for Diversity' driver development program and Deegan applied and was accepted...",
};

const tekst8 = {
  titel: "T8 — Playing outside no longer an option (theguardian.com, 2019)",
  body:
    "1 A national debate has been sparked in the Netherlands after a council ordered a primary school playground to be shut. Residents in apartments near De Buut primary school had complained that its pupils regularly exceeded a 70-decibel limit, which applies across the country for residential areas and is enforced by local councils. Official readings reached 88 decibels. The De Buut school playground has been used by children for 40 years. It was reduced in size during building works two years ago to make room for apartments to be built opposite.\n\n2 The school's director, Janneke Colsen, said the school had been told to close the playground by the end of the month or face a 10,000 (£9,000) fine for each infringement of the ruling, despite making repeated efforts to satisfy local residents.",
};

const tekst9 = {
  titel: "T9 — Blue whales' changing song has deeper meaning (The Times, 2019)",
  body:
    "1 Blue whales are not only the largest animals on Earth, they are also some of the loudest creatures in its oceans. Only the males sing but their droning hum is about as loud as a large ship and it generates a sound that can travel more than 600 miles underwater.\n\n2 It is still unclear whether this extraordinary communication, which exists on the furthest reaches of human hearing, is intended to repel rivals, attract a mate or achieve something else. What is known is that in oceans thousands of miles apart these atonal sounds have been evolving for decades.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Engels 2023 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2023/vmbo-gl/documenten/cse-2/gt-0071-a-23-2-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Engels-leesvaardigheid: bij main-purpose/main-point — lees ALINEA helemaal door + samenvat in 1 zin. Bij specifiek-feit — zoek scan-woord (datum, naam, getal).",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Modern life & media", emoji: "📱", from: 0, to: 1 },
  { letter: "B", title: "People & society", emoji: "👥", from: 2, to: 4 },
  { letter: "C", title: "Nature & science", emoji: "🐳", from: 5, to: 5 },
];

const steps = [
  {
    title: "Vraag 1 — YouTube parents sell baby doll: hostile reactions",
    explanation: "Echte examenvraag uit Engels 2023-T2, vraag 1.",
    emoji: "🎓",
    checks: [{
      q: "Which of the following becomes clear about the Ingham Family from this text?",
      options: [
        "The baby doll they are offering for sale has been met with negative reactions.",
        "The baby doll they created is especially designed to help childless couples.",
        "They gained many new followers of their channel after the birth of their son.",
        "They have promised to donate the money they earn with their products to charity.",
      ],
      answer: 0,
      wrongHints: [null, "'Reborn dolls comforted infertile women' wordt door MEVR. Ingham gezegd als rechtvaardiging — niet als design-doel. Lees zin met 'twisted' opnieuw.", "Tekst zegt niet over nieuwe volgers — wel over 1.2 miljoen bestaande. Geen 'gained' na geboorte.", "Tekst zegt 'profit would go to Jace as an adult' — naar het KIND, niet charity."],
      explanation: "**'The announcement drew hostile comments'** + voorbeelden ('Black Mirror', 'imagine finding out your parents sold dolls of you'). De doll-verkoop ontvangt negatieve reacties. Antwoord A.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'merch', 'hostile', 'dystopian', 'twisted', 'infertile'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "main idea van korte tekst destilleren — kern-truc van deze vraag" },
      ],
      uitlegPad: compact(
        "Vraag 'becomes clear' = wat blijkt? Zoek conclusie-zinnen. Hier: 'hostile comments' + voorbeeld 'imagine your parents sold dolls of you' = duidelijk negatief. Andere opties verzinnen iets dat NIET in de tekst staat.",
        { basis: "Hostile comments → negative reactions. = A.", simpeler: "Tekst zegt 'hostile' = vijandig. Reacties zijn dus negatief. = A.", nogSimpeler: "Negative = A." },
        [{ woord: "hostile", uitleg: "Vijandig, afkeurend." }, { woord: "merch", uitleg: "Merchandise — fan-spulletjes." }],
      ),
    }],
  },
  {
    title: "Vraag 2 — Wurst luck: what happens to burglar",
    explanation: "Echte examenvraag uit Engels 2023-T2, vraag 2.",
    emoji: "🎓",
    checks: [{
      q: "'German police say they have solved a nine-year-old burglary case' (first sentence). What will happen to the burglar, according to the text?",
      options: [
        "He will first serve prison time in France and then in Germany.",
        "He will have to submit himself to more testing in France.",
        "He will not be allowed to enter Germany ever again.",
        "He will not go on trial for the burglary committed in Germany.",
      ],
      answer: 3,
      wrongHints: ["Tekst noemt geen prison-volgorde. Lees alinea 4 — wat is de reden dat hij geen straf krijgt voor de inbraak?", "DNA-test is al gedaan in Frankrijk. Geen mention van EXTRA tests.", "Tekst zegt niet dat hij Duitsland niet in mag. Wel iets anders over wat NIET gebeurt — wat?", null],
      explanation: "Alinea 4: **'statute of limitations on the burglary has expired'** + 'suspect is unlikely to be extradited to Germany' = geen proces (trial) voor de inbraak. Verjaring = no trial. Antwoord D.",
      examenBron: BRON_LABEL(2),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'burglary', 'statute of limitations', 'extradite', 'trial'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "specifieke alinea scannen voor feit — kern-truc" },
      ],
      uitlegPad: compact(
        "'Statute of limitations expired' = verjaringstermijn verlopen. Daarom geen uitlevering ('not extradited') + geen rechtszaak (no trial). Hij blijft vrij in Frankrijk — niets gebeurt verder voor de Duitse inbraak.",
        { basis: "Verjaring → geen trial. = D.", simpeler: "Statute of limitations = verjaring. Inbraak is 9 jaar oud, te lang geleden — geen rechtszaak. = D.", nogSimpeler: "Geen trial = D." },
        [{ woord: "statute of limitations", uitleg: "Verjaringstermijn — na X jaar geen rechtszaak meer." }, { woord: "extradite", uitleg: "Uitleveren aan ander land." }],
      ),
    }],
  },
  {
    title: "Vraag 8 — Selfie museum: what is true overall",
    explanation: "Echte examenvraag uit Engels 2023-T2, vraag 8.",
    emoji: "🎓",
    checks: [{
      q: "What is true about the nofilter_museum, based on the text as a whole?",
      options: [
        "Instagram influencers have advertised it in their posts.",
        "It uses social media to inspire people to become artists.",
        "It wants to increase its value with the present exhibition.",
        "Its rooms are especially designed for making selfies.",
      ],
      answer: 3,
      wrongHints: ["Tekst zegt influencers HAVE EXPRESSED INTEREST — niet dat ze al adverteren. Verschil interesse vs actie.", "Doel is bezoek aan museum, niet kunstenaar worden. Lees zin 1 alinea 1.", "Tekst noemt $200m Ice Cream Museum als voorbeeld, niet als doel van NOFILTER. Lees zorgvuldig.", null],
      explanation: "Tekst-als-geheel: alle 24 rooms zijn 'designed for the perfect selfie' + 'creative selfies' (alinea 2). Selfies = kernconcept van het museum. Antwoord D.",
      examenBron: BRON_LABEL(8),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'influencer', 'subliminal', 'graduate', 'exhibit'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "hoofdgedachte uit hele tekst — kern-truc" },
      ],
      uitlegPad: compact(
        "'Text as a whole' = wat klopt over hele tekst. Naam zegt 't al: nofilter_MUSEUM = selfie-focus. Alinea 1 'everything needed for the perfect selfie'. Alinea 2 '24 rooms, creative selfies'. Andere opties zijn NIET in tekst.",
        { basis: "Rooms designed for selfies. = D.", simpeler: "Naam museum = 'nofilter' (Instagram-filter) + alle 24 rooms voor selfies. = D.", nogSimpeler: "Selfies = D." },
        [{ woord: "exhibit", uitleg: "Tentoongesteld stuk in een museum." }, { woord: "graduate", uitleg: "Afgestudeerde." }],
      ),
    }],
  },
  {
    title: "Vraag 13 — Hailie Deegan: how racing career started",
    explanation: "Echte examenvraag uit Engels 2023-T2, vraag 13.",
    emoji: "🎓",
    checks: [{
      q: "What is the main purpose of paragraph 1?",
      options: [
        "to explain why Deegan feels inspired by her father",
        "to list the number of racing awards Deegan has won",
        "to make clear how Deegan's racing career started",
        "to stress how extraordinary Deegan's home life has been",
      ],
      answer: 2,
      wrongHints: ["Vader is genoemd als context (motocross-rijder), maar alinea gaat niet om INSPIRATIE — wat doet alinea wel?", "Wel '3-time champion' genoemd, maar geen LIJST van awards. Lijst-doel zou meer prijzen vereisen.", null, "Familie-leven is niet 'extraordinary' geframed — alinea is feitelijk over begin carrière."],
      explanation: "Alinea 1 schetst het hele begin-verhaal: kart op 8e verjaardag → Lucas Oil Pro series → kampioen → eerste vrouw met titel. Dit is de **opstart van haar carrière**. Antwoord C.",
      examenBron: BRON_LABEL(13),
      bronLink: BRON_LINK,
      bronTekst: tekst6,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'debut', 'compete', 'transition', 'champion'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "main purpose paragraaf bepalen — kern-truc" },
      ],
      uitlegPad: compact(
        "'Main purpose paragraph 1' = waarom staat dit hier? Inhoud: 8-jarige kart → karten → kampioen → 1e vrouw met titel. Dit is een chronologisch overzicht van hoe haar carrière BEGON. Niet inspiratie/awards-lijst/family-life-extraordinary.",
        { basis: "How career started. = C.", simpeler: "Alinea vertelt waar/wanneer Hailie begon met racen (op haar 8e). Dat is haar START. = C.", nogSimpeler: "Start = C." },
        [{ woord: "debut", uitleg: "Eerste optreden/wedstrijd." }, { woord: "compete", uitleg: "Meedoen aan wedstrijd." }],
      ),
    }],
  },
  {
    title: "Vraag 25 — Dutch playground shut: waarom dichtgegooid?",
    explanation: "Echte examenvraag uit Engels 2023-T2, vraag 25.",
    emoji: "🎓",
    checks: [{
      q: "'a council ordered a primary school playground to be shut' (paragraph 1). Why did they do this, according to paragraph 1?",
      options: [
        "Having children play there produced more noise than was allowed.",
        "It lacked the proper permits to be used as a school play area.",
        "People living nearby said it attracted trouble to the neighbourhood.",
        "The space it occupied was needed for a new block of flats.",
      ],
      answer: 0,
      wrongHints: [null, "Tekst zegt niet dat vergunningen ontbraken — wel iets over geluid. Zoek decibels.", "Tekst noemt geen 'trouble' of overlast — wel een specifieke meeting. Welke?", "Apartments zijn al GEBOUWD (2 jaar terug). Plaatsruimte ging niet voor flats, geluid ging WEL boven de norm."],
      explanation: "Alinea 1: **'pupils regularly exceeded a 70-decibel limit'** + 'official readings reached 88 decibels'. Speelplaats dicht wegens te veel geluid (88 dB > 70 dB norm). Antwoord A.",
      examenBron: BRON_LABEL(25),
      bronLink: BRON_LINK,
      bronTekst: tekst8,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'council', 'decibel', 'exceeded', 'enforced', 'fine'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "specifieke reden in alinea 1 vinden" },
      ],
      uitlegPad: compact(
        "70 dB = norm, 88 dB = werkelijk gemeten = te veel = boete = dicht. Drie andere opties (geen vergunning / trouble / ruimte voor flats) komen NIET voor in tekst.",
        { basis: "88 > 70 dB = te luid = dicht. = A.", simpeler: "Decibels = geluid-meting. 88 boven de toegestane 70 = lawaai. Speelplaats dicht. = A.", nogSimpeler: "Lawaai = A." },
        [{ woord: "exceed", uitleg: "Overschrijden, boven gaan." }, { woord: "council", uitleg: "Gemeenteraad." }],
      ),
    }],
  },
  {
    title: "Vraag 29 — Blue whales: what is true about communication",
    explanation: "Echte examenvraag uit Engels 2023-T2, vraag 29.",
    emoji: "🎓",
    checks: [{
      q: "What is true about the communication of blue whales according to paragraphs 1-2?",
      options: [
        "The reason why they sing remains a mystery.",
        "Their singing has been getting louder in recent years.",
        "Their singing is inaudible to the human ear.",
        "They use their singing to chase away other sea animals.",
      ],
      answer: 0,
      wrongHints: [null, "Tekst zegt 'sounds have been EVOLVING' — niet 'louder'. Verandering ja, harder-worden niet.", "Tekst zegt 'furthest reaches of HUMAN HEARING' — dus AAN de grens, niet onhoorbaar.", "'Repel rivals' is GENOEMD als één van de mogelijkheden — maar onzeker. Tekst zegt 'still unclear'."],
      explanation: "Alinea 2: **'It is still unclear whether this extraordinary communication ... is intended to repel rivals, attract a mate or achieve something else.'** = reden onduidelijk = mysterie. Andere opties: louder = niet in tekst; inaudible = onjuist (wel hoorbaar, op grens); chase away animals = niet in tekst. Antwoord A.",
      examenBron: BRON_LABEL(29),
      bronLink: BRON_LINK,
      bronTekst: tekst9,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'unclear', 'repel', 'mate', 'inaudible'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "claim verifiëren tegen tekst — kern-truc" },
      ],
      uitlegPad: compact(
        "'Still unclear' = nog onduidelijk = mysterie. Geleerden weten WEL hoe luid + waar het zingen klinkt, maar WAAROM blijft een raadsel.",
        { basis: "Reason unclear = mystery. = A.", simpeler: "Tekst zegt 'still unclear whether to repel rivals, attract mate or other'. Reden = onbekend = mysterie. = A.", nogSimpeler: "Mystery = A." },
        [{ woord: "repel", uitleg: "Afweren, wegjagen." }, { woord: "inaudible", uitleg: "Onhoorbaar." }, { woord: "mate", uitleg: "Partner (voor voortplanting)." }],
      ),
    }],
  },
];

const examenEngels2023T2 = {
  id: "examen-engels-2023-t2",
  title: "Examen oefenen — Engels 2023 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Engels - eindexamen oefenen 2023-T2",
  intro: "6 echte examenvragen uit VMBO-GL/TL Engels 2023 tijdvak 2. Teksten: YouTube baby-doll Ingham, German burglary wurst-DNA, Vienna selfie museum, Hailie Deegan NASCAR, Dutch playground decibels, Blue whales mysterieuze zang.",
  triggerKeywords: ["examen engels 2023 tijdvak 2", "youtube baby doll", "wurst burglary dna", "selfie museum vienna", "hailie deegan nascar", "decibel playground netherlands", "blue whales song"],
  chapters,
  steps,
};

export default examenEngels2023T2;

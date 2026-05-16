// Leerpad: Examen-oefenpad Engels VMBO-GL/TL 2024 tijdvak 2.
// 2026-05-16: 3e Engels-pilot (na 2024-T1 + 2025-T1). 6 echte MC-vragen
// geverifieerd via parser (engels-vmbo-gltl-2024-tijdvak2.json — 29 MC's
// herkend, 6 representatieve geselecteerd over 6 verschillende bronteksten).
// Bron: examenblad.nl, examen 0071 GT 2024-2.

const tekst1 = {
  titel: "Tekst 1 — Artificial Intelligence at work (Andrew Griffin, independent.co.uk 2017)",
  body:
    "A Japanese insurance company, Fukoku Mutual Life Insurance, is replacing its staff with an artificial intelligence system. The move, which will see more than 30 people sacked to make way for the computer, is being seen as one of the clearest examples of the coming changes that robots and machines will bring to the workplace.\n\n" +
    "The computer will be used to calculate how much policyholders should be paid out. For now, the calculations will only be used as a way of saving time by reducing how long it takes to work out payouts. Those calculations will still need to be signed off by a human. But even doing that will allow the company to save about 140 million yen, or £1 million, per year.\n\n" +
    "Japan hopes that by introducing more robots into its workforce it can address the problem of its shrinking and rapidly ageing population. Artificial intelligence machines are going to be integrated into the work of government from next month, helping ministers look up answers to questions and cutting out the work done by civil servants.",
};

const tekst3 = {
  titel: "Tekst 3 — Ireland's most venomous spider",
  body:
    "1 In what is sure to be good news for absolutely no-one, the Noble False Widow spider, already considered the most venomous in Ireland, may be even more toxic than previously believed, according to new research.\n\n" +
    "2 Scientists investigating the venom of the Noble False Widow found that it can potentially deliver an even more toxic bite than was previously believed. They found that of 140 toxins found in its venom, 111 of those were also present in their more famous cousin, the true Black Widow.\n\n" +
    "3 Originating from the Canary Islands and Madeira, the Noble False Widow spider has since spread throughout Europe, North Africa, West Asia and parts of North and South America.",
};

const tekst4 = {
  titel: "Tekst 4 — The curse of Pompeii (Madeleine Aggeler)",
  body:
    "1 A good rule of thumb when visiting the historic ruins of unspeakable human tragedy is to … . This was the lesson one Canadian woman learned after she took bits of mosaic tiles, shards of an amphora vase, and a bit of ceramic wall from Pompeii in 2005.\n\n" +
    "2 The woman, identified only as Nicole, recently mailed the artifacts back to the Archaeological Park of Pompeii, along with a letter explaining what she had been through. Nicole explained that she took the ancient mementos because she 'wanted to have a piece of history that couldn't be bought.' After returning to Canada with them, though, she says she was plagued by misfortune, illness and financial struggles, hardships she attributes in part to the tiles she brought back with her from Italy. 'I took a piece of history captured in a time with so much negative energy attached to it,' she wrote. 'People died in such a horrible way and I took tiles related to that kind of destruction.'\n\n" +
    "3 Pompeii was an ancient city near Naples that was suddenly buried under nearly 20 feet of volcanic ash when nearby Mount Vesuvius erupted in 79 A.D.",
};

const tekst8 = {
  titel: "Tekst 8 — Wartime letters recovered from the SS Gairsoppa",
  body:
    "1 The fragments of a 1941 love letter to a woman named Iris, found nearly three miles under the ocean in a shipwreck, have been painstakingly pieced together by experts, 80 years after it was posted. 'Look after yourself my darling, not only for your own sake ……… for mine also,' wrote the unknown serviceman stationed in the Waziristan region, now part of Pakistan.\n\n" +
    "2 The letter is one of 717 that were never delivered by the cargo ship, the SS Gairsoppa, which was destined for the US. The ship was torpedoed off the coast of Ireland by a German U-boat on 16 February 1941. The ship lay nearly three miles deep until 2011, when Odyssey Marine Exploration, a US firm that won the contract from the British government in 2010 for salvage, discovered it. The company recovered more than 100 tonnes of silver from the wreck, along with the letters.\n\n" +
    "3 The letters — most of them everyday correspondence between family, friends and loved ones — survived because they were sealed in mailbags under sediment, with no oxygen.",
};

const tekst10 = {
  titel: "Tekst 10 — Barbie Queen (Queen Elizabeth II Barbie)",
  body:
    "1 Ever wanted to hang out with a tiny version of the Queen? Of course you have. Now, you won't have to make do with a paper cut-out, as Mattel has unveiled a special Queen Elizabeth II Barbie, to be released on the Queen's 96th birthday on Thursday.\n\n" +
    "2 In celebration of the Platinum Jubilee, the doll version of the Queen isn't wearing one of her usual brightly coloured twinsets, but instead a formal ivory gown, a tiara (modelled on the one the Queen wore on her wedding day), and a blue ribbon adorned with decorations of order.\n\n" +
    "3 The Queen doll forms part of Barbie's Tribute Collection, which launched in 2021 to celebrate 'visionary individuals with an outstanding impact and legacy within society'.",
};

const tekst13 = {
  titel: "Tekst 13 — Beautiful Skellig Michael (Ireland's UNESCO site, Star Wars location)",
  body:
    "1 ONE OF Ireland's most spectacular landmarks has gained international recognition for its sheer beauty. Skellig Michael is a UNESCO World Heritage site and popular tourist site which became even more famous than before when it was featured in the Star Wars movies 'The Force Awakens' and 'The Last Jedi'.\n\n" +
    "2 Located on the Great Skellig just off the gorgeous Dingle Peninsula, the historic site is home to an ancient monastery and stone structures which have survived over the centuries despite being battered by the elements at the edge of the Atlantic ocean. Skellig Michael is also a wildlife preserve home to hundreds of Puffins.\n\n" +
    "3 Now international travel magazine Big Seven Travel has named the historic site as one of the most beautiful movie locations in the world.",
};

const chapters = [
  { letter: "A", title: "Maatschappij & technologie", emoji: "🤖", from: 0, to: 0 },
  { letter: "B", title: "Geschiedenis & erfgoed", emoji: "🏛️", from: 1, to: 3 },
  { letter: "C", title: "Cultuur & natuur", emoji: "🌿", from: 4, to: 5 },
];

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 2, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2024/vmbo-gl/documenten/cse-2/gt-0071-a-24-2-o";

const steps = [
  // ─── V1 — AI at work in Japan ─────────────────────────────
  {
    title: "Vraag 1 — AI in Japan: oplossing voor vergrijzing",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 2, vraag 1. Bekijk eerst tekst 1.",
    emoji: "🎓",
    checks: [
      {
        q: "Waarom denkt men in Japan dat *'Artificial Intelligence at work'* (titel) nodig gaat zijn?",
        options: [
          "om beter in staat te zijn om complexe politieke besluiten te nemen",
          "om geldverspilling als gevolg van overbezetting te voorkomen",
          "om het personeelstekort als gevolg van vergrijzing op te vangen",
          "om rekenfouten die nu nog onopgemerkt blijven te corrigeren",
        ],
        answer: 2,
        wrongHints: [
          "De tekst noemt politici alleen indirect (ministers gebruiken AI om vragen op te zoeken) — niet als hoofdreden voor introductie van AI.",
          "Niet 'overbezetting' (te veel personeel) — de tekst spreekt juist van 'shrinking population'. Tegengesteld probleem.",
          null,
          "De tekst noemt geen rekenfouten — wel snellere afhandeling, maar dat is geen 'correctie van fouten'.",
        ],
        explanation: "Sleutel-zin alinea 3: '*Japan hopes that by introducing more robots into its workforce it can address the problem of its shrinking and rapidly ageing population*'. Vergrijzing + krimpende bevolking = minder werkenden beschikbaar → robots/AI moeten het personeelstekort opvangen. Antwoord C.",
        examenBron: BRON_LABEL(1),
        bronLink: BRON_LINK,
        bronTekst: tekst1,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'workforce', 'shrinking', 'ageing population', 'civil servants'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "Cito-strategie 'waarom-vraag': zoek causale zin met 'because' / 'in order to' / 'hopes that' — kern van deze vraag" },
          { id: "tijdvakken-geschiedenis", title: "Tijdvakken geschiedenis", niveau: "VMBO-GT eindexamen", why: "vergrijzing-context: Japan + NL beide vergrijzen — link naar verzorgingsstaat-discussie" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat staat er over Japan?", tekst: "Alinea 3 zegt: *'Japan hopes that by introducing more robots into its workforce it can address the problem of its shrinking and rapidly ageing population.'* Hoop = doel = waarom AI wordt geïntroduceerd." },
            { titel: "Vertaal de kern", tekst: "**Shrinking and rapidly ageing population** = krimpende en snel ouder wordende bevolking = vergrijzing + bevolkingsdaling. Gevolg: te weinig werkenden (= personeelstekort). AI vult dat gat." },
            { titel: "Waarom de andere opties fout zijn", tekst: "A (politieke besluiten): niet de hoofdreden, ministers gebruiken het slechts als hulpmiddel. B (overbezetting): tegengesteld — Japan heeft juist krimp, niet overbezetting. D (rekenfouten): niet genoemd in tekst." },
          ],
          woorden: [
            { woord: "workforce", uitleg: "Alle werkenden in een land/bedrijf — beroepsbevolking." },
            { woord: "shrinking", uitleg: "Krimpend, kleiner wordend." },
            { woord: "ageing population", uitleg: "Vergrijzende bevolking — meer ouderen." },
            { woord: "address a problem", uitleg: "Een probleem aanpakken / oplossen." },
          ],
          theorie: "Cito-truc bij waarom-vragen Engels: zoek in de tekst woorden als **hopes that / because / in order to / so that / to address**. Daar staat de oorzaak/het doel. Dan parafraseer naar de Nederlandse opties.",
          voorbeelden: [
            { type: "stap", tekst: "Sleutel-zin alinea 3 → *'address the problem of shrinking population'* → personeelstekort door vergrijzing → C." },
            { type: "feit", tekst: "Japan heeft een van de oudste bevolkingen ter wereld: 29% is ouder dan 65 (NL: 20%, VS: 17%)." },
          ],
          basiskennis: [{ onderwerp: "Vergrijzing wereldwijd", uitleg: "Vergrijzing speelt in Japan, NL, Duitsland, Italië, Zuid-Korea — de rijke landen. Veel armere landen hebben juist jonge bevolking. AI/robots als oplossing: nog experimenteel." }],
          niveaus: {
            basis: "Personeelstekort door vergrijzing → C.",
            simpeler: "Japan vergrijst snel → te weinig werkenden → AI vult het gat. = C.",
            nogSimpeler: "Vergrijzing = C.",
          },
        },
      },
    ],
  },
  // ─── V33 — Barbie Queen ───────────────────────────────────
  {
    title: "Vraag 33 — Queen Elizabeth II Barbie: eerbetoon",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 2, vraag 33. Bekijk eerst tekst 10.",
    emoji: "🎓",
    checks: [
      {
        q: "Why did Mattel make a Queen Elizabeth II Barbie according to the text?",
        options: [
          "to honour her as an influential and important person",
          "to profit from her being by far the most popular monarch",
          "to show off their skill at manufacturing accurate copies",
          "to stress the company's support for the royal family",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De tekst noemt geen verkoopcijfers of populariteit-rankings — geen profit-motief expliciet beschreven.",
          "Geen claim over fabricage-vakmanschap — wel detail over de jurk maar geen 'showing off skill'.",
          "Mattel positioneert dit niet als politiek statement (steun voor royals) — wel als artistieke eerbetoon.",
        ],
        explanation: "Alinea 3: '*The Queen doll forms part of Barbie's Tribute Collection, which launched in 2021 to celebrate visionary individuals with an outstanding impact and legacy within society.*' De Queen wordt eerbetoond als visionary individual met outstanding impact — dat is precies optie A ('influential and important person').",
        examenBron: BRON_LABEL(33),
        bronLink: BRON_LINK,
        bronTekst: tekst10,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'tribute', 'visionary', 'outstanding impact', 'legacy', 'monarch'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'why'-vraag: zoek het motivatie-statement van Mattel — alinea 3 = Tribute Collection-doel" },
          { id: "bekende-nederlanders-po", title: "Bekende personen + invloed", niveau: "po-1F", why: "concept van 'eerbetoon aan invloedrijk persoon' — vergelijkbaar met Nederlandse standbeelden/musea" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vraag = motief van Mattel", tekst: "*'Why did Mattel make...?'* → reden / doel. Niet 'wanneer' of 'hoe' — alleen het waarom-motief." },
            { titel: "Zoek het motief in de tekst", tekst: "Alinea 3 zegt het letterlijk: *'Tribute Collection ... to celebrate visionary individuals with an outstanding impact and legacy within society'*. Dat zinnetje is het hele antwoord." },
            { titel: "Parafraseer naar Nederlands → optie A", tekst: "**Visionary + outstanding impact + legacy** = **invloedrijk en belangrijk persoon**. Optie A is een directe samenvatting van die zin." },
          ],
          woorden: [
            { woord: "to honour", uitleg: "Eerbetoon geven, vereren." },
            { woord: "tribute", uitleg: "Eerbetoon, hommage." },
            { woord: "visionary", uitleg: "Met visie, vooruitstrevend." },
            { woord: "legacy", uitleg: "Erfenis, blijvende invloed." },
            { woord: "monarch", uitleg: "Vorst, koning(in)." },
          ],
          theorie: "Cito-truc bij 'why' / 'reason'-vragen: zoek in de tekst de zinnen met **to + werkwoord** (= doel) of **because / since / as**. Mattel's motief is letterlijk uitgesproken in alinea 3.",
          voorbeelden: [
            { type: "stap", tekst: "Andere Tribute Collection-Barbies: Ella Fitzgerald (jazz), Helen Keller (activiste), Maya Angelou (dichteres) — allemaal 'visionary individuals'. Bevestigt het patroon: eerbetoon-collectie." },
          ],
          basiskennis: [{ onderwerp: "Eliminate", uitleg: "B (profit) en C (manufacturing skill) staan niet in de tekst. D (royal family support) is een politiek statement dat Mattel zorgvuldig niet maakt." }],
          niveaus: {
            basis: "Eerbetoon aan invloedrijk persoon. = A.",
            simpeler: "Tribute Collection viert visionary individuals = invloedrijke mensen. Queen = invloedrijk. = A.",
            nogSimpeler: "Honour = A.",
          },
        },
      },
    ],
  },
  // ─── V25 — Wartime letters: alledaagse boodschappen ───────
  {
    title: "Vraag 25 — Wartime letters: passende subtitel",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 2, vraag 25. Bekijk eerst tekst 8.",
    emoji: "🎓",
    checks: [
      {
        q: "What would be an appropriate subtitle for this article?",
        options: [
          "A new opportunity to get youngsters interested in recent history",
          "Everyday messages written in times of historical importance",
          "Military glory and classified information saved from the depths",
          "Rare find adds new information to naval routines during WWII",
        ],
        answer: 1,
        wrongHints: [
          "Het artikel gaat niet over jongeren / educatie — geen woord over kinderen of scholen.",
          null,
          "De brieven zijn juist géén 'classified information' — het zijn gewone brieven aan vrienden + geliefden. Ook geen 'military glory'.",
          "De brieven onthullen geen nieuwe militaire details — ze zijn 'everyday correspondence'.",
        ],
        explanation: "Alinea 3: *'The letters — most of them everyday correspondence between family, friends and loved ones.*' De kern van het verhaal is **alledaagse berichten** uit een historisch belangrijke tijd (WO2 — 1941, kort na inval Duitsland). Optie B vat dit perfect samen.",
        examenBron: BRON_LABEL(25),
        bronLink: BRON_LINK,
        bronTekst: tekst8,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'subtitle', 'everyday correspondence', 'classified information', 'naval routines'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "subtitel-keuze = hoofdgedachte-vraag in disguise. Welke optie omvat zowel het soort brieven (alledaags) als de tijd (historisch)?" },
          { id: "wereldoorlog2-geschiedenis", title: "Wereldoorlog 2", niveau: "VMBO-GT eindexamen", why: "1941 + U-boat-torpedo + SS Gairsoppa = WO2-context — directe achtergrond van de bronTekst" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Subtitel = hoofdgedachte-in-1-zin", tekst: "Een goede subtitel vat de **hoofdgedachte** samen — niet een detail uit één alinea. Vraag: wat is de essentie van dit verhaal?" },
            { titel: "Wat zijn deze brieven?", tekst: "**Everyday correspondence** — gewone post tussen familie + vrienden + geliefden. Geen geheime documenten. Tegelijk: tijdens WO2 (= historisch belangrijke tijd)." },
            { titel: "Welke optie combineert beide?", tekst: "Optie B: **'Everyday messages written in times of historical importance'**. 'Everyday' = alledaagse (matched 'everyday correspondence'). 'Historical importance' = WO2 (matched 1941, U-boat torpedo). Perfecte match." },
          ],
          woorden: [
            { woord: "subtitle", uitleg: "Ondertitel — vat artikel samen." },
            { woord: "everyday", uitleg: "Alledaags, gewoon." },
            { woord: "correspondence", uitleg: "Briefwisseling." },
            { woord: "classified", uitleg: "Geheim, vertrouwelijk." },
          ],
          theorie: "Cito-truc subtitel-keuze: kijk welke optie ALLE belangrijke elementen van de tekst dekt. Niet alleen één alinea. Eliminate opties die maar over één aspect gaan (alleen leeftijd, alleen marine) of die feitelijk fout zijn.",
          voorbeelden: [
            { type: "stap", tekst: "Wartime brieven aan 'darling Iris' = liefdesbrief = alledaags (niet militair geheim). Tegelijk: 1941 WO2 = historisch belangrijke tijd." },
          ],
          basiskennis: [{ onderwerp: "Eliminate", uitleg: "A: geen youngsters in tekst. C: brieven waren NIET classified. D: geen nieuwe naval routines onthuld — alleen brieven gevonden." }],
          niveaus: {
            basis: "B (alledaagse berichten in historisch belangrijke tijd).",
            simpeler: "Brieven = alledaags. Tijd = WO2 historisch. B combineert beide. = B.",
            nogSimpeler: "Everyday + historical = B.",
          },
        },
      },
    ],
  },
  // ─── V40 — Skellig Michael: viert schoonheid ──────────────
  {
    title: "Vraag 40 — Skellig Michael: viert Ierse schoonheid wereldwijd",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 2, vraag 40. Bekijk eerst tekst 13.",
    emoji: "🎓",
    checks: [
      {
        q: "Which of the following best describes this text?",
        options: [
          "It analyses the popularity of Ireland as a background for movies.",
          "It celebrates the fact that Ireland's scenery is appreciated worldwide.",
          "It explains how Ireland can profit from entering global competitions.",
          "It praises the way in which Ireland protects its native flora and fauna.",
        ],
        answer: 1,
        wrongHints: [
          "Star Wars wordt genoemd maar de tekst gaat niet over film-locatie-analyse — Skellig Michael is breder.",
          null,
          "Geen analyse van Ierland's wedstrijd-deelname of winst. Big Seven Travel = magazine-erkenning, geen competitie met prijzen.",
          "Puffins worden genoemd maar de tekst gaat niet primair over natuurbescherming — focus is op landschap + internationale erkenning.",
        ],
        explanation: "De tekst zegt: *'ONE OF Ireland's most spectacular landmarks has gained international recognition for its sheer beauty.*' Vervolgens: Big Seven Travel noemt het 'een van de mooiste film-locaties wereldwijd'. De essentie: Ier-se schoonheid + wereldwijde erkenning. Optie B vat dat samen.",
        examenBron: BRON_LABEL(40),
        bronLink: BRON_LINK,
        bronTekst: tekst13,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'celebrate', 'scenery', 'appreciate worldwide', 'praise', 'flora and fauna'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'best describes'-vraag = vraag naar hoofdgedachte / toon. Onderscheid 'analyse', 'celebrate', 'explain', 'praise' = subtiele werkwoorden" },
          { id: "continenten-wereld-po", title: "Continenten + bekende landen", niveau: "po-1F", why: "Ierland-context (Europa, UNESCO-erfgoed, Atlantische Oceaan)" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Vraag = hoofdgedachte + toon", tekst: "'Best describes' = wat is de essentie + houding van de schrijver? Niet één detail." },
            { titel: "Wat is de toon?", tekst: "**'gained international recognition for its sheer beauty'** + **'most beautiful movie locations in the world'**. Beide positief — schrijver **viert** (celebrates) Ierland's schoonheid." },
            { titel: "Waarom B en niet A/C/D?", tekst: "A 'analyses' = neutraal/onderzoekend — past niet, tekst is enthousiast. C 'profit' = geld-aspect — staat niet in tekst. D 'protects flora and fauna' = natuurbescherming — staat niet centraal." },
          ],
          woorden: [
            { woord: "celebrate", uitleg: "Vieren, prijzen (positief)." },
            { woord: "scenery", uitleg: "Landschap, uitzicht." },
            { woord: "appreciate", uitleg: "Waarderen." },
            { woord: "flora and fauna", uitleg: "Planten en dieren — natuur." },
            { woord: "analyse", uitleg: "Onderzoeken, ontleden (neutraal)." },
          ],
          theorie: "Cito-truc 'best describes'-vraag: let op de **toon-werkwoorden** in de opties. 'Celebrates' = positief vieren. 'Analyses' = neutraal onderzoeken. 'Praises' = positief prijzen. 'Questions' = twijfelen. Match toon van tekst met toon van optie.",
          voorbeelden: [
            { type: "stap", tekst: "Sleutel-woorden tekst: 'spectacular', 'sheer beauty', 'beautiful movie locations'. Allemaal positief-vierend → 'celebrates' = B." },
          ],
          basiskennis: [{ onderwerp: "Toon-werkwoorden Engels", uitleg: "celebrate (positief) > praise (positief) > appreciate (positief) > analyse (neutraal) > criticise (negatief) > question (twijfelen). Niveau van enthousiasme oplopend tot negatief." }],
          niveaus: {
            basis: "Viert Ierse schoonheid wereldwijd. = B.",
            simpeler: "Toon = enthousiast positief. Optie B 'celebrates ... appreciated worldwide' past. = B.",
            nogSimpeler: "Celebrates = B.",
          },
        },
      },
    ],
  },
  // ─── V8 — Pompeii curse: Nicole geeft schuld aan tegels ───
  {
    title: "Vraag 8 — Pompeii curse: Nicole en haar tegenslagen",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 2, vraag 8. Bekijk eerst tekst 4.",
    emoji: "🎓",
    checks: [
      {
        q: "What becomes clear about Nicole from paragraph 2?",
        options: [
          "She blames some of her bad luck on the artifacts she pinched from a historic site.",
          "She feels guilty about having tried to sell fake historical artifacts illegally.",
          "She has found out that the artifacts she had purchased have no historic value.",
          "She is interested in historical artifacts that can be linked to violent events.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen schuld over verkoop — Nicole verkocht niet, ze hield de stukken. Ook geen 'fake' artifacts.",
          "Geen 'purchased' — ze stal ze (took bits). Ook geen melding dat ze geen historische waarde hebben.",
          "Ze is niet 'geïnteresseerd in violent events' — ze beschouwt de tegels juist als bron van haar tegenslag.",
        ],
        explanation: "Alinea 2: *'After returning to Canada with them, she says she was plagued by misfortune, illness and financial struggles, hardships she attributes in part to the tiles she brought back.*' **Attributes hardships to the tiles** = geeft de tegels (deels) de schuld van haar tegenslagen. Tegels gepikt uit Pompeii = artifacts pinched from historic site. Optie A klopt.",
        examenBron: BRON_LABEL(8),
        bronLink: BRON_LINK,
        bronTekst: tekst4,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'pinch (steal)', 'attribute to', 'misfortune', 'hardships', 'artifact'" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'becomes clear about X'-vraag = wat valt op over personage. Zoek de zinnen waar Nicole haar mening uitspreekt over haar tegenslag" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Sleutel-zin alinea 2", tekst: "*'plagued by misfortune, illness and financial struggles, hardships she **attributes** in part to the tiles she brought back'*. Attributes = geeft de schuld aan. Ze gelooft dat de tegels haar ongeluk veroorzaakten." },
            { titel: "Pinched = gestolen (informeel)", tekst: "**To pinch** in informeel Engels = stelen/jatten. Niet 'knijpen'. Nicole nam (= pinched) artifacts uit Pompeii (= historic site). Optie A's woordkeus klopt." },
            { titel: "Andere opties uitsluiten", tekst: "B: geen guilt over verkoop. C: geen ontdekking dat ze waardeloos zijn — ze stuurde ze terug. D: geen interesse in violent events." },
          ],
          woorden: [
            { woord: "to pinch (slang)", uitleg: "Stelen / jatten (informeel BE)." },
            { woord: "to attribute X to Y", uitleg: "X toeschrijven aan Y / Y de schuld geven van X." },
            { woord: "misfortune", uitleg: "Pech / tegenslag." },
            { woord: "artifact", uitleg: "Voorwerp uit het verleden — archeologisch object." },
          ],
          theorie: "Cito-truc 'becomes clear about X'-vragen: zoek alinea waar X expliciet spreekt of een actie doet. Dan extract de essentie. Niet wat de schrijver of een ander zegt — wat zegt X zelf.",
          voorbeelden: [
            { type: "stap", tekst: "Nicole's letter: 'I took a piece of history captured in a time with so much negative energy attached to it' — zij denkt dat de negatieve energie haar tegenslag bracht." },
            { type: "feit", tekst: "Vulkaan Vesuvius (79 n.Chr.) doodde 16.000 mensen in Pompeii en Herculaneum. 'Curse of Pompeii' is een populaire mythe — toeristen sturen sinds 1900 stiekem gestolen stenen terug omdat ze pech denken te hebben." },
          ],
          basiskennis: [{ onderwerp: "Eliminate", uitleg: "Optie A is enige die letterlijk uit alinea 2 volgt (attributes hardships to tiles). Andere opties zijn vervormingen of niet-genoemde feiten." }],
          niveaus: {
            basis: "Geeft tegels schuld voor pech. = A.",
            simpeler: "Nicole geloofde dat de gestolen tegels haar ongeluk brachten — bijgeloof = curse. = A.",
            nogSimpeler: "Blames tiles = A.",
          },
        },
      },
    ],
  },
  // ─── V4 — Spider tekst: toon 'playful' ─────────────────────
  {
    title: "Vraag 4 — Spider tekst: toon 'playful' herkennen",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 2, vraag 4. Bekijk eerst tekst 3.",
    emoji: "🎓",
    checks: [
      {
        q: "*'In what is sure to be good news for absolutely no-one'* (paragraph 1) — How can this remark be characterised?",
        options: [
          "as enthusiastic",
          "as outraged",
          "as playful",
          "as rude",
        ],
        answer: 2,
        wrongHints: [
          "Niet enthousiast — de spin is een **slechte** ontwikkeling. Schrijver is geen fan.",
          "Niet woedend / outraged — de toon is luchtig, niet boos. Geen uitroeptekens of harde verontwaardiging.",
          null,
          "Niet onbeschoft / rude — niemand wordt aangevallen. Het is een grapje, geen belediging.",
        ],
        explanation: "De zin *'good news for absolutely no-one'* is een **ironische grap** — uiteraard is meer toxiciteit van een gevaarlijke spin slecht nieuws voor iedereen. De schrijver gebruikt understatement (= playful ironie) om het serieuze onderwerp luchtig te brengen. Optie C 'playful' (= speels, grappig) klopt.",
        examenBron: BRON_LABEL(4),
        bronLink: BRON_LINK,
        bronTekst: tekst3,
        leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
        voorkennisKeten: [
          { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'playful', 'outraged', 'enthusiastic', 'rude' — toon-werkwoorden onderscheiden" },
          { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "Cito-truc toon-vraag: ironische opmerking herkennen + onderscheiden van boze / verontwaardigde tonen" },
        ],
        uitlegPad: {
          stappen: [
            { titel: "Wat zegt de zin letterlijk?", tekst: "*'Good news for absolutely no-one'* = goed nieuws voor helemaal niemand. Letterlijk een tegenspraak — als het 'goed nieuws' is, is dat altijd voor iemand. Dus de schrijver bedoelt het **ironisch**." },
            { titel: "Wat is ironie?", tekst: "**Ironie** = het tegenovergestelde zeggen van wat je bedoelt, op een speelse manier. Hier: 'good news' bedoelt eigenlijk 'bad news'. De grap zit in de overdrijving ('absolutely no-one')." },
            { titel: "Speels vs woedend", tekst: "Een woedende toon zou zijn: 'This is a disaster!' of 'How dare they not act?' De schrijver gebruikt juist een luchtige draai — typisch **playful** = speels. Niet boos, niet onbeschoft, niet enthousiast." },
          ],
          woorden: [
            { woord: "playful", uitleg: "Speels, met humor / lichte ironie." },
            { woord: "outraged", uitleg: "Woedend, verontwaardigd." },
            { woord: "enthusiastic", uitleg: "Enthousiast, met opwinding voor iets positiefs." },
            { woord: "rude", uitleg: "Onbeschoft, beledigend." },
            { woord: "irony", uitleg: "Ironie — het tegenovergestelde zeggen van wat je bedoelt." },
          ],
          theorie: "Cito-truc toon-vraag: lees de zin hardop. Klinkt het serieus, woedend, vrolijk of speels? Een tegenstrijdige uitspraak ('good news for no-one') = vrijwel altijd ironie/playful. Schrijver maakt grap, niet kwaad of enthousiast.",
          voorbeelden: [
            { type: "stap", tekst: "Andere playful-ironie voorbeelden: 'Just what we needed!' (sarcastisch over slecht nieuws). 'Brilliant.' (na ramp). 'Perfect timing.' (na storing)." },
            { type: "feit", tekst: "Britse journalistiek gebruikt veel deze toon — Guardian / Independent typische voorbeelden. Helpt zware onderwerpen toegankelijk maken." },
          ],
          basiskennis: [{ onderwerp: "Toon-werkwoorden Engels", uitleg: "playful = speels (humor + niet-aanvallend). rude = onbeschoft (= aanvallend, persoonlijk). Onderscheid: rude raakt iemand, playful raakt niemand." }],
          niveaus: {
            basis: "Speelse ironie. = C.",
            simpeler: "'Good news for no-one' = ironische grap = playful. Niet boos, niet onbeschoft. = C.",
            nogSimpeler: "Playful = C.",
          },
        },
      },
    ],
  },
];

const examenEngels2024T2 = {
  id: "examen-engels-2024-t2",
  title: "Examen oefenen — Engels 2024 tijdvak 2 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Engels - eindexamen oefenen 2024-T2",
  intro:
    "6 echte examenvragen uit VMBO-GL/TL Engels 2024 tijdvak 2. Onderwerpen: AI in Japanse bedrijven, Queen Elizabeth II Barbie, oorlogsbrieven SS Gairsoppa, Skellig Michael UNESCO, Pompeii-curse Nicole, ironische toon (giftige spin). Per vraag: verbatim bronTekst (Engels) + denkprikkel-hints (Nederlands) + 3-niveau uitleg + voorkennisKeten + doorklik naar CSE-leesvaardigheid-leerpad. Van 29 herkende MC-vragen zijn 6 geselecteerd om breed thema-bereik (tech, monarch, oorlog, natuur, archeologie, taal-toon) te dekken.",
  triggerKeywords: [
    "examen engels", "engels 2024 tijdvak 2", "echte examenvragen engels",
    "ai japan", "queen elizabeth barbie", "ss gairsoppa", "pompeii curse",
    "skellig michael", "noble false widow spider",
    "reading comprehension", "main idea engels", "tone playful",
    "cse engels", "engelse leesvaardigheid",
  ],
  chapters,
  steps,
};

export default examenEngels2024T2;

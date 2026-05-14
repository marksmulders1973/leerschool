// Leerpad: Examen-oefenpad Engels VMBO-GL/TL 2024 tijdvak 1
// 2026-05-10: 2e Engels-pilot. 8 vragen over 3 leesteksten.
// Bron: examenblad.nl, examen 0071 GT 2024-1.

const tekst1 = {
  titel: "Tekst 1 — Musical Bridge (Golden Gate Bridge album)",
  body: "You might've heard of the concept of a 'bridge' in music. Well, guitarist Nate Mercereau is taking that term literally. In July, he released a new album in collaboration with San Francisco's Golden Gate Bridge — yes, you read that right — titled 'Duets / Golden Gate Bridge', which features droning guitar improvisations over the eerie hum of the Bay Area landmark.\n\nMercereau says he first heard about the sound through a San Francisco Chronicle article that delved into how residents have been complaining about it. But when Mercereau heard recordings of the sound, which is produced by wind passing through the bridge's railings since a 2020 retrofit, he was inspired. He spent months recording his guitar over the bridge's hum.\n\nThe result is otherworldly: relaxed, dreamlike, almost meditative. Critics have praised the album for its hypnotic quality.\n\nSource: pitchfork.com, 2022",
};

const tekst3 = {
  titel: "Tekst 3 — Medieval tunnel discovery in Wales",
  body: "1. A routine excavation yielded something surprising when crews unearthed a mysterious medieval tunnel in Wales. It didn't appear on any Ordnance Survey map, but when technicians in the Wye Valley near Wales' famed Tintern Abbey were called to remove an electrical pole, they found something unexpected.\n\n2. Allyn Gore, the technician for Western Power Distribution working on the project, said: 'I had a phone call about two hours into the work... they said, \"Allyn, we've found a cave.\"' The digging had revealed a small opening tucked beneath the ground. It opened up into a small chamber, then a longer tunnel.\n\n3. Archaeologists were brought in. The tunnel is built of stone, with a curved ceiling about 5 feet (1.5 m) high. It runs for about 50 feet, although it appears to continue beyond a collapse point.\n\n4. The exact age and purpose remain mysterious. It might be linked to the nearby Tintern Abbey (12th century), but no historical record mentions it. Researchers say more excavation is needed before they can say when it was built or what it was used for.\n\nSource: smithsonianmag.com, 2023",
};

const tekst4 = {
  titel: "Tekst 4 — Brazil announces equal pay on national football teams",
  body: "1. Brazil's football federation announced it will pay men and women the same amount for representing the national team, one of the few countries to make such a pledge. It means Brazil's little-known female players will receive the same fees and allowances as global superstars such as Neymar.\n\n2. Brazil's announcement was met with widespread praise. Marta, the most successful Brazilian female player, said: 'This is a moment of joy, of huge celebration. A historic moment.' On social media, fans applauded the move.\n\n3. Australia, Norway and New Zealand were amongst the nations to previously decide to pay their men and women internationals the same amount. In March 2019, the US women's team filed a lawsuit against the US Soccer Federation alleging gender discrimination.\n\n4. The decision is part of [_12_] equal treatment in football. The country's football federation president said: 'There's no more gender difference. The CBF is equalising salaries and prize money among men and women.'\n\n5. [_13_], not all is equal yet. Female players still play in less prestigious tournaments and the women's league receives much less media coverage and sponsorship.\n\nSource: theguardian.com, 2020",
};

const chapters = [
  { letter: "A", title: "Tekst 1 — Musical Bridge", emoji: "🎵", from: 0, to: 1 },
  { letter: "B", title: "Tekst 3 — Medieval tunnel", emoji: "🏰", from: 2, to: 4 },
  { letter: "C", title: "Tekst 4 — Equal pay football", emoji: "⚽", from: 5, to: 7 },
];

const steps = [
  {
    title: "Vraag 1 — Golden Gate Bridge & album",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 1.",
    emoji: "🎓",
    checks: [
      {
        q: "Wat heeft de `Golden Gate Bridge' met een muziekalbum te maken, volgens deze tekst?",
        options: [
          "De liedteksten op het album gaan over de brug.",
          "Het album zal op de brug gepresenteerd worden.",
          "Het geluid dat de brug maakt is op het album gebruikt.",
          "Op de hoes van het album staat een foto van de brug.",
        ],
        answer: 2,
        wrongHints: [
          "Tekst zegt niet dat liedteksten over de brug gaan.",
          "Geen presentatie OP de brug — alleen samenwerking.",
          null,
          "Album-hoes wordt niet besproken.",
        ],
        explanation: "De tekst zegt: 'features droning guitar improvisations over the eerie hum of the Bay Area landmark.' De gitarist gebruikt het GELUID van de brug (door de wind veroorzaakt) als basis-laag, met zijn gitaar erover. Het is letterlijk een 'duet' met de brug.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 1, vraag 1",
        bronTekst: tekst1,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "NL-strategie 'sleutelwoord matchen' — herken welk woord uit de tekst (hum, landmark) past bij welk antwoord" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "uitsluiten van afleiders (lyrics, presentatie, hoes) — alleen wat letterlijk in tekst staat klopt" },
          { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "vmbo-3", why: "EN-vocab: 'hum', 'feature', 'landmark', 'improvisations' — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Sleutelzin zoeken", tekst: "'Features droning guitar improvisations over the eerie hum of the Bay Area landmark' = brug-geluid is basis. → optie C." }],
          woorden: [{ woord: "hum", uitleg: "Brommend/zoemend geluid." }, { woord: "feature", uitleg: "Bevatten, met als hoofdrol." }, { woord: "landmark", uitleg: "Beroemd herkenpunt (de brug)." }],
          theorie: "Examen Engels: zoek SLEUTELWOORDEN in tekst die naar antwoord wijzen. 'Hum of landmark' = geluid van brug.",
          voorbeelden: [{ type: "match", tekst: "'Hum' (brug) + 'guitar improvisations over' (gitaar erover) = brug-geluid + gitaar = album." }],
          basiskennis: [{ onderwerp: "Schrap de rest", uitleg: "Geen lyrics genoemd, geen brug-presentatie, geen hoes — alleen geluid is concreet aanwezig." }],
          niveaus: { basis: "Brug-geluid + gitaar = C.", simpeler: "Tekst zegt 'gitaar over hum (brom) van de brug' = brug-geluid wordt gebruikt op album. = C.", nogSimpeler: "Geluid = C." },
        },
      },
    ],
  },
  {
    title: "Vraag 2 — Sound of Duets album",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 2.",
    emoji: "🎓",
    checks: [
      {
        q: "What becomes clear about the album Duets / Golden Gate Bridge from this text?",
        options: [
          "It features both techno-beats and traditional rhythms.",
          "It has quite a relaxed, dreamlike and otherworldly sound.",
          "It includes instrumental covers of songs by prominent artists.",
        ],
        answer: 1,
        wrongHints: [
          "No techno-beats mentioned.",
          null,
          "No covers — original guitar improvisations.",
        ],
        explanation: "The text says: 'The result is otherworldly: relaxed, dreamlike, almost meditative.' This describes the SOUND quality of the album.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 1, vraag 2",
        bronTekst: tekst1,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "NL-strategie 'letterlijke match' — woorden uit tekst (relaxed, dreamlike) terugvinden in antwoord" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "afleiders herkennen: techno-beats en covers staan niet in tekst — eliminatie" },
          { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "vmbo-3", why: "EN-vocab: 'otherworldly', 'dreamlike', 'meditative' — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Letterlijke citaat-match", tekst: "Tekst: 'otherworldly: relaxed, dreamlike, almost meditative'. Optie B = letterlijk relaxed + dreamlike + otherworldly. → B." }],
          woorden: [{ woord: "otherworldly", uitleg: "Bovenaards, niet van deze wereld." }, { woord: "dreamlike", uitleg: "Droomachtig." }, { woord: "meditative", uitleg: "Mediterend, rustgevend." }],
          theorie: "Match-vraag: zoek optie die LETTERLIJK overeenkomt met tekst-fragment.",
          voorbeelden: [{ type: "match", tekst: "Tekst-woorden: relaxed, dreamlike, otherworldly. Optie B: relaxed, dreamlike, otherworldly. Identiek." }],
          basiskennis: [{ onderwerp: "Geen techno/covers", uitleg: "Tekst noemt geen techno-beats of covers — alleen guitar improvisations." }],
          niveaus: { basis: "Relaxed + dreamlike = B.", simpeler: "Tekst noemt 'otherworldly, relaxed, dreamlike, meditative'. Optie B gebruikt zelfde woorden. = B.", nogSimpeler: "Dreamlike = B." },
        },
      },
    ],
  },
  {
    title: "Vraag 6 — Discovery in paragraph 1",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 6.",
    emoji: "🎓",
    checks: [
      {
        q: "What becomes clear in paragraph 1?",
        options: [
          "A group of workers came across something quite unforeseen.",
          "A researcher stumbled upon a hidden entrance to a historic location.",
          "An ancient rumour about a secret underpass turned out to be true.",
          "An inspection of an old monastery caused quite some commotion.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Workers (technicians), not a researcher.",
          "No mention of a 'rumour' — surprise discovery.",
          "No 'inspection of monastery' — they were removing an electrical pole.",
        ],
        explanation: "Paragraph 1 says: 'A routine excavation yielded something surprising when crews unearthed a mysterious medieval tunnel.' Workers (crews) doing routine work found something they didn't expect = unforeseen discovery.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 1, vraag 6",
        bronTekst: tekst3,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "NL-strategie 'synoniem matchen' — 'crews' = workers, 'surprising' = unforeseen" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "afleider 'researcher' versus tekst 'crews' — letterlijk lezen, niet aannemen" },
          { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "vmbo-3", why: "EN-vocab: 'crews', 'unforeseen', 'yielded', 'unearthed' — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Crews + surprising = unforeseen", tekst: "'Crews unearthed something surprising' = werkers vonden iets onverwachts → optie A (group of workers, unforeseen)." }],
          woorden: [{ woord: "crews", uitleg: "Werkploegen." }, { woord: "unforeseen", uitleg: "Onvoorzien, onverwacht." }, { woord: "yielded", uitleg: "Opleverde." }],
          theorie: "Synoniem-match: 'crews' = workers. 'Surprising' = unforeseen.",
          voorbeelden: [{ type: "match", tekst: "Crews → group of workers. Surprising → unforeseen. → A." }],
          basiskennis: [{ onderwerp: "Niet researcher", uitleg: "Tekst zegt 'crews' (werkers), niet 'researcher'. Strikvraag." }],
          niveaus: { basis: "Werkers vonden iets onverwacht. A.", simpeler: "Crews (werkers) unearthed (vonden) something surprising (onverwachts) → A (group of workers, unforeseen). = A.", nogSimpeler: "Crews (werkers) unearthed (vonden) something surprising (onverwachts) … → A." },
        },
      },
    ],
  },
  {
    title: "Vraag 7 — Function paragraph 2",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 7.",
    emoji: "🎓",
    checks: [
      {
        q: "How is paragraph 2 linked to the discovery introduced in paragraph 1?",
        options: [
          "Paragraph 2 describes the emotional impact of the discovery.",
          "Paragraph 2 explains why the discovery drew a lot of attention.",
          "Paragraph 2 highlights the historical significance of the discovery.",
          "Paragraph 2 presents the facts of the discovery in more detail.",
        ],
        answer: 3,
        wrongHints: [
          "Paragraph 2 is factual, no emotion.",
          "No 'attention' discussed.",
          "Significance comes later (paragraph 3-4).",
          null,
        ],
        explanation: "Paragraph 2 quotes Allyn Gore directly + adds details: 'a small opening tucked beneath the ground... opened up into a small chamber, then a longer tunnel.' Pure factual elaboration on what was found.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 1, vraag 7",
        bronTekst: tekst3,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "begrip 'functie van een alinea' — beschrijven/uitleggen/vergelijken/details geven" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "alinea-functie herkennen aan inhoud: citaat + concrete details = feitelijke uitwerking" },
          { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "vmbo-3", why: "EN-vocab + alinea-signaalwoorden — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Quote = details", tekst: "Alinea 2 quote Allyn Gore + opening → chamber → tunnel = details over wat gevonden werd. → D (facts in detail)." }],
          woorden: [{ woord: "elaboration", uitleg: "Uitwerking met meer details." }, { woord: "presents", uitleg: "Geeft, presenteert." }],
          theorie: "Functie-vraag: kijk wat alinea DOET, niet wat het zegt. Beschrijven, uitleggen, vergelijken?",
          voorbeelden: [{ type: "match", tekst: "Alinea 2 = puur feiten (citaat + ruimtelijke details) → presents facts in detail." }],
          basiskennis: [{ onderwerp: "Niet emotie/aandacht", uitleg: "Geen emotionele woorden, geen 'people noticed' — puur feiten." }],
          niveaus: { basis: "Feiten in detail. D.", simpeler: "Alinea 2 geeft citaat + concrete details over de gevonden tunnel = feiten uitwerken. = D.", nogSimpeler: "Details = D." },
        },
      },
    ],
  },
  {
    title: "Vraag 9 — Conclusion about tunnel",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 9.",
    emoji: "🎓",
    checks: [
      {
        q: "What can be concluded about the tunnel from paragraph 4?",
        options: [
          "It is expected to become a tourist attraction.",
          "It is still unclear when or why it was built.",
          "It proves that people used to be a lot shorter.",
          "It seems to be damaged beyond repair.",
        ],
        answer: 1,
        wrongHints: [
          "No tourism plans mentioned.",
          null,
          "Height (5 ft) is described, but no conclusion about people being shorter.",
          "Damage mentioned but not 'beyond repair'.",
        ],
        explanation: "Paragraph 4: 'The exact age and purpose remain mysterious... no historical record mentions it. Researchers say more excavation is needed before they can say when it was built or what it was used for.' Pure uncertainty.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 1, vraag 9",
        bronTekst: tekst3,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "conclusie uit een alinea trekken — wat zegt de tekst LETTERLIJK over het object" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "synoniem-koppeling: 'mysterious age + purpose' = 'unclear when + why'" },
          { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "vmbo-3", why: "EN-vocab: 'mysterious', 'purpose', 'excavation', 'unclear' — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Mysterious = onbekend", tekst: "Alinea 4: 'age and purpose remain mysterious' = leeftijd én doel zijn nog onbekend. → B (still unclear when or why)." }],
          woorden: [{ woord: "mysterious", uitleg: "Onbekend, mysterieus." }, { woord: "purpose", uitleg: "Doel, reden." }, { woord: "unclear", uitleg: "Niet duidelijk." }],
          theorie: "Synoniem-match: 'mysterious' = unclear. 'Age' = when. 'Purpose' = why.",
          voorbeelden: [{ type: "match", tekst: "Mysterious age + purpose → unclear when (age) + why (purpose) → B." }],
          basiskennis: [{ onderwerp: "Niet andere opties", uitleg: "Geen woord over toerisme, mensgrootte of onherstelbare schade." }],
          niveaus: { basis: "Wanneer/waarom onbekend. B.", simpeler: "Tekst zegt 'age and purpose remain mysterious' = wanneer + waarom = nog niet duidelijk. = B.", nogSimpeler: "Onbekend = B." },
        },
      },
    ],
  },
  {
    title: "Vraag 11 — Function paragraph 2 (Brazil pay)",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 11.",
    emoji: "🎓",
    checks: [
      {
        q: "What is the function of paragraph 2?",
        options: [
          "to explain the consequences of the change in pay",
          "to illustrate how the change in pay was received",
          "to show why the change in pay was inevitable",
        ],
        answer: 1,
        wrongHints: [
          "No consequences discussed in paragraph 2.",
          null,
          "Not about WHY — about HOW it was received.",
        ],
        explanation: "Paragraph 2 quotes Marta ('moment of joy, historic moment') and mentions fans applauding on social media. This shows the RECEPTION of the announcement — how people reacted.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 1, vraag 11",
        bronTekst: tekst4,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "alinea-functie: citaten + reacties = how something is received" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "verschil tussen 'gevolgen', 'reactie', 'waarom nodig' — eliminatie via inhoud alinea" },
          { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "vmbo-3", why: "EN-vocab: 'received', 'praised', 'historic' — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Reactie van mensen", tekst: "Alinea 2: Marta-citaat (joy/historic) + fans applaudisseren = REACTIES op het besluit. → B (how received)." }],
          woorden: [{ woord: "received", uitleg: "Hoe iets ontvangen wordt door publiek." }, { woord: "praised", uitleg: "Geprezen." }],
          theorie: "Functie-vraag: alinea geeft REACTIES (citaten + fans) = receptie/ontvangst.",
          voorbeelden: [{ type: "match", tekst: "Marta = 'moment of joy'. Fans = applauding. Beide = reacties op besluit." }],
          basiskennis: [{ onderwerp: "Niet consequenties/waarom", uitleg: "Alinea zegt niet wat er VERANDERT (consequenties) of waarom NODIG (inevitable) — alleen reacties." }],
          niveaus: { basis: "Reacties op besluit. B.", simpeler: "Marta + fans-citaten = reactie op besluit = HOW it was received. = B.", nogSimpeler: "Reacties = B." },
        },
      },
    ],
  },
  {
    title: "Vraag 12 — Linking phrase paragraph 4",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 12. Choose the best phrase for [_12_].",
    emoji: "🎓",
    checks: [
      {
        q: "Kies bij 12 in alinea 4 het juiste antwoord uit de gegeven mogelijkheden.",
        options: [
          "a highly controversial step on the way to",
          "demanded by other nations in favour of",
          "part of the journey of transformation towards",
        ],
        answer: 2,
        wrongHints: [
          "Not 'controversial' — text is positive about the change.",
          "Other nations weren't demanding it — Brazil acted itself.",
          null,
        ],
        explanation: "Paragraph 4: 'The decision is part of [_12_] equal treatment in football.' Followed by federation president speaking POSITIVELY about ending gender difference. 'Journey of transformation towards' fits — neutral, positive framing.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 1, vraag 12",
        bronTekst: tekst4,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "toon van een tekst herkennen (positief/negatief/neutraal) — basis voor invul-vraag" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "cloze-vraag: kies fragment dat past bij de TOON van de omringende tekst, niet bij losse betekenis" },
          { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "vmbo-3", why: "EN-vocab: 'controversial', 'transformation', 'demanded' — kern van deze examenvraag" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Toon = positief", tekst: "Alinea 4 + president-citaat zijn positief over verandering. Optie C ('journey of transformation') past = positieve formulering." }],
          woorden: [{ woord: "transformation", uitleg: "Verandering, transformatie." }, { woord: "controversial", uitleg: "Omstreden, met discussie." }],
          theorie: "Linking-fragment-vraag: kies optie die past bij TOON van de tekst (positief/negatief/neutraal).",
          voorbeelden: [{ type: "context", tekst: "President: 'no more gender difference, equalising'. Toon = positief → 'journey towards'." }],
          basiskennis: [{ onderwerp: "Niet 'controversial'", uitleg: "Tekst is positief, niet omstreden. 'Demanded by' klopt ook niet — Brazilië nam zelf besluit." }],
          niveaus: { basis: "Positieve framing. C.", simpeler: "Tekst is positief over besluit. Optie C ('journey towards equal') past bij positieve toon. = C.", nogSimpeler: "Tekst is positief over besluit. Optie C ('journey towards equal') past… → C." },
        },
      },
    ],
  },
  {
    title: "Vraag 13 — Linking word paragraph 5",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 13.",
    emoji: "🎓",
    checks: [
      {
        q: "Kies bij 13 in alinea 5 het juiste antwoord uit de gegeven mogelijkheden.",
        options: [
          "Consequently",
          "However",
          "In addition",
          "In conclusion",
          "Therefore",
        ],
        answer: 1,
        wrongHints: [
          "'Consequently' = result. Doesn't fit the contrast.",
          null,
          "'In addition' = same direction. The sentence shows contrast.",
          "'In conclusion' would summarize, not contrast.",
          "'Therefore' = result, not contrast.",
        ],
        explanation: "Paragraph 5 says: '[_13_], not all is equal yet. Female players still play in less prestigious tournaments...' This CONTRASTS with the positive message in paragraph 4. 'However' is the contrast-word that fits.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2024 tijdvak 1, vraag 13",
        bronTekst: tekst4,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
        voorkennisKeten: [
          { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F", why: "signaalwoorden in een tekst: contrast (echter/maar), gevolg (dus/daarom), opsomming (bovendien)" },
          { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen — strategie", niveau: "po-1F", why: "verband tussen 2 zinnen herkennen: tegenstelling, oorzaak-gevolg of toevoeging" },
          { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "vmbo-3", why: "EN-connectieven: However (contrast), Therefore (gevolg), In addition (opsomming), Consequently (gevolg), In conclusion (samenvatting)" },
        ],
        uitlegPad: {
          stappen: [{ titel: "Tegenstelling", tekst: "Alinea 4 = positief (verandering!). Alinea 5 = 'not all equal yet' = MAAR. → 'However' (tegenstelling-woord)." }],
          woorden: [{ woord: "However", uitleg: "Maar, echter (tegenstelling)." }, { woord: "Consequently", uitleg: "Daarom, gevolg (geen tegenstelling)." }, { woord: "In addition", uitleg: "Bovendien (zelfde richting)." }],
          theorie: "Verbindwoorden Engels: However/But = tegenstelling. Consequently/Therefore = gevolg. In addition = bovendien. In conclusion = samenvatten.",
          voorbeelden: [{ type: "match", tekst: "Alinea 4 positief (gelijkheid komt!). Alinea 5 negatief (nog niet alles gelijk). Tegenstelling = However." }],
          basiskennis: [{ onderwerp: "Logica-test", uitleg: "Past 'maar' tussen alinea's? Ja → However. Past 'daarom'? Nee → niet Therefore." }],
          niveaus: { basis: "However. B.", simpeler: "Alinea 4 = positief. Alinea 5 = 'maar nog niet alles gelijk'. Tegenstelling = However. = B.", nogSimpeler: "However = B." },
        },
      },
    ],
  },
];

const examenEngels2024T1 = {
  id: "examen-engels-2024-t1",
  title: "Examen oefenen — Engels 2024 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Engels - eindexamen oefenen 2024-T1",
  intro:
    "8 echte examenvragen uit VMBO-GL/TL Engels 2024 tijdvak 1, verdeeld over 3 leesteksten (Golden Gate Bridge album, medieval tunnel Wales, equal pay football Brazil). Per vraag de echte 4 antwoorden, denkprikkel-hints, inhoudelijke uitleg.",
  triggerKeywords: [
    "examen engels 2024", "echte examenvragen engels",
    "golden gate bridge album", "medieval tunnel", "brazil equal pay football",
    "begrijpend lezen engels",
  ],
  chapters,
  steps,
};

export default examenEngels2024T1;

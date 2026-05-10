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
        q: "Wat heeft de 'Golden Gate Bridge' met een muziekalbum te maken, volgens deze tekst?",
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
      },
    ],
  },
  {
    title: "Vraag 2 — Sound of Duets album",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 2.",
    emoji: "🎓",
    checks: [
      {
        q: "What becomes clear about the album 'Duets / Golden Gate Bridge' from this text?",
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
      },
    ],
  },
  {
    title: "Vraag 6 — Discovery in paragraph 1",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 6.",
    emoji: "🎓",
    checks: [
      {
        q: "What becomes clear in paragraph 1 of text 3?",
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
      },
    ],
  },
  {
    title: "Vraag 11 — Function paragraph 2 (Brazil pay)",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 11.",
    emoji: "🎓",
    checks: [
      {
        q: "What is the function of paragraph 2 in text 4?",
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
      },
    ],
  },
  {
    title: "Vraag 12 — Linking phrase paragraph 4",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 12. Choose the best phrase for [_12_].",
    emoji: "🎓",
    checks: [
      {
        q: "Kies bij [12] in alinea 4 het juiste antwoord uit de gegeven mogelijkheden.",
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
      },
    ],
  },
  {
    title: "Vraag 13 — Linking word paragraph 5",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2024 tijdvak 1, vraag 13.",
    emoji: "🎓",
    checks: [
      {
        q: "Kies bij [13] in alinea 5 het juiste antwoord uit de gegeven mogelijkheden.",
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

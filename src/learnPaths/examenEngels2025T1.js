// Leerpad: Examen-oefenpad Engels VMBO-GL/TL 2025 tijdvak 1
// 2026-05-10: Eerste Engels-pilot. 9 echte MC-vragen verspreid over 3 leesteksten
// uit het examen. Engels-eindexamen is overwegend leesvaardigheid — bron-teksten
// zijn essentieel.
//
// Bron: examenblad.nl, examen 0071 GT 2025-1.

// ─── Bron-teksten (uit bijlage) ───────────────────────────

const tekst1 = {
  titel: "Tekst 1 — Close encounters (UFO sightings)",
  body: "On July 2nd avid watchers of the skies celebrate World UFO Day — the anniversary of the supposed crash of a flying saucer near Roswell in 1947. Helpfully, the National UFO Reporting Centre, a non-profit, has catalogued almost 90,000 reported sightings of UFOs, mostly in America, since 1974.\n\nIt turns out that aliens are considerate. They seldom disturb earthlings during working hours. Rather, they tend to arrive in the evening, especially on Fridays, when folks are sitting on the front porch nursing their fourth beer, the better to appreciate flashing lights in the heavens.\n\nThe state aliens like best is Washington — especially the thinly populated northern part. Other popular destinations are also near the Canadian border, where the Northern lights are sometimes visible. UFOs tend to shun big cities, where there are lots of other lights.\n\nSource: economist.com, 2014",
};

const tekst3 = {
  titel: "Tekst 3 — E-bikes and e-scooters battery scare",
  body: "1. Market consulting firm P&S Intelligence reports that the Australian micro mobility market — which encompasses both electric and traditional bikes and scooters, as well as electric mopeds — generated $16.9m in revenue in 2020. The largest share was in e-scooter sales, due to their cost effectiveness.\n\n2. But since then a number of these rideable devices, mostly powered by lithium-ion batteries, have burst into flames. Most incidents have occurred with low-quality light electric vehicles (LEVs) while they were charging. EV FireSafe, a body tracking electric vehicle battery fires, found 57 separate incidents worldwide since the start of the year.\n\n3. There were three issues with low-quality electric vehicles: (a) they often have poor quality lithium-ion battery cells; (b) they take a beating in normal operation; and (c) they're often stored or charged inside a home or workplace, so there is a higher risk of a fire spreading.\n\n4. Battery packs are made up of a module of smaller battery cells, like a group of traditional AA batteries. If damaged or overcharged, those cells can begin generating heat and internal gas build-up. The heat from the faulty cell spreads to other nearby cells, creating a chain reaction and eventual explosive exothermic reaction. This process is called a thermal runaway.\n\n5. The Australian Fire Department advises: 'Always stick to reputable and compatible lithium-ion battery brands, avoid over-charging and charging devices whilst you're asleep or away from home.' [_7_], the nation's consumer watchdog is conducting its own investigation into lithium-ion battery fires.\n\nSource: news.com.au, 2023",
};

const tekst4 = {
  titel: "Tekst 4 — Microplastics and Human Health (by Stuart Layt)",
  body: "1. Researchers at the University of Queensland (UQ) have been given a boost in their quest to find out exactly how harmful microplastics are to humans with the launch of a new specialist laboratory. Environmental health expert Kevin Thomas said having the resources to accurately measure nanoparticles of plastic meant they could answer longstanding questions. 'Plastic is in the environment, and it's a very complicated situation because there are many different types of plastics, and it's further changed in the environment through weathering,' he said. 'It's a unique challenge because there is a complexity we don't quite understand.'\n\n2. Microplastics have increasingly invaded the environment over the last few decades, from plastic products like bottles to fragments of car tyres flaking off on roads. The problem is growing because plastics continue to break down into smaller particles. Recent studies indicate the average adult human ingests more than 100,000 microplastic particles every day.\n\n3. The UQ team has two projects ready to go with the opening of the new centre — the first is to measure the levels of microplastics in blood, urine and brain tissue. The other project is to investigate the behaviour of extremely small microplastics. To achieve this, the lab does not contain much plastic at all, and is mostly stainless steel to avoid contamination.\n\n4. The lab has been established thanks to a partnership between UQ and the Minderoo Foundation. Sarah Dunlop, director of the Plastics and Human Health program, said the centre had the capability to do world-first research. 'It's about building global capacity so we can shine the light on the problem and eliminate the harmful effects of plastic on people on the planet.'\n\nSource: brisbanetimes.com.au, 2022",
};

const chapters = [
  { letter: "A", title: "Tekst 1 — UFOs", emoji: "🛸", from: 0, to: 0 },
  { letter: "B", title: "Tekst 3 — E-scooter batteries", emoji: "🛴", from: 1, to: 4 },
  { letter: "C", title: "Tekst 4 — Microplastics", emoji: "🔬", from: 5, to: 8 },
];

const steps = [
  // V1
  {
    title: "Vraag 1 — UFO sightings location",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 1. Lees eerst tekst 1 en beantwoord dan de vraag in het Nederlands.",
    emoji: "🎓",
    checks: [
      {
        q: "Wat wordt duidelijk uit tekst 1? Je hebt de grootste kans om een 'vliegende schotel' te zien als je...",
        options: [
          "bij de herdenking in Roswell bent.",
          "ergens bent waar weinig kunstlicht is.",
          "in de buurt van een druk vliegveld bent.",
          "onderweg bent van of naar je werk.",
        ],
        answer: 1,
        wrongHints: [
          "Roswell wordt wel genoemd, maar als context (1947 crash). Niet als plek waar je vandaag UFO's ziet.",
          null,
          "Tekst zegt juist het tegenovergestelde — UFO's mijden plekken met veel licht.",
          "Tekst zegt: 'They seldom disturb earthlings during working hours.' Dus juist NIET tijdens werk.",
        ],
        explanation: "De tekst zegt: 'UFOs tend to shun big cities, where there are lots of other lights.' En populaire plekken zijn 'thinly populated northern part' van Washington — donkere, dunbevolkte gebieden. Dus: weinig kunstlicht.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 1",
        bronTekst: tekst1,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
  // V3
  {
    title: "Vraag 3 — How is the topic introduced",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 3. Read text 3 paragraph 1 carefully.",
    emoji: "🎓",
    checks: [
      {
        q: "How is the topic of the article introduced in paragraph 1?",
        options: [
          "by claiming that most people can afford to buy an e-scooter",
          "by making clear that e-scooters are popular products",
          "by outlining why bicycles are often replaced by e-scooters",
          "by stressing that e-scooters have become too cheap",
        ],
        answer: 1,
        wrongHints: [
          "Paragraph 1 doesn't talk about affordability for individuals.",
          null,
          "Paragraph 1 doesn't compare e-scooters to bicycles.",
          "Paragraph 1 mentions cost-effectiveness, but not as criticism that they're 'too cheap'.",
        ],
        explanation: "Paragraph 1 says: 'The largest share of that figure was in e-scooter sales, due to their cost effectiveness.' This shows e-scooters are POPULAR products with a big market share. The article then goes on to discuss problems.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 3",
        bronTekst: tekst3,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
  // V5
  {
    title: "Vraag 5 — Conclusion paragraph 3",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 5. Read paragraph 3 of text 3.",
    emoji: "🎓",
    checks: [
      {
        q: "What can be concluded about electric vehicles from paragraph 3?",
        options: [
          "It is safer to park and recharge them outdoors.",
          "Their fragility causes unsafe traffic situations.",
          "They tend to fall apart under rough conditions.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Paragraph 3 doesn't talk about traffic situations.",
          "Paragraph 3 says they 'take a beating' but doesn't say they 'fall apart'.",
        ],
        explanation: "Paragraph 3 says one of the issues is that LEVs 'are often stored or charged inside a home or workplace, so there is a higher risk of a fire spreading.' Conclusion: charging OUTSIDE (where fire can't spread to a building) is safer.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 5",
        bronTekst: tekst3,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
  // V6
  {
    title: "Vraag 6 — Function paragraph 4",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 6.",
    emoji: "🎓",
    checks: [
      {
        q: "Which description fits paragraph 4?",
        options: [
          "It gives a technical explanation of how a battery pack can malfunction.",
          "It lists a number of recent incidents related to battery packs.",
          "It makes clear that certification of battery packs is overdue.",
          "It stresses that battery packs need to be maintained by professionals.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Paragraph 4 doesn't list incidents — it explains the mechanism.",
          "Paragraph 4 doesn't discuss certification.",
          "Paragraph 4 doesn't talk about maintenance.",
        ],
        explanation: "Paragraph 4 explains TECHNICALLY how thermal runaway works: damaged cells generate heat → spreads to nearby cells → chain reaction → explosion. Pure technical mechanism explanation.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 6",
        bronTekst: tekst3,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
  // V7
  {
    title: "Vraag 7 — Linking word in paragraph 5",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 7. Choose the best linking word for [_7_] in paragraph 5.",
    emoji: "🎓",
    checks: [
      {
        q: "Kies bij [7] in alinea 5 het juiste antwoord uit de gegeven mogelijkheden.",
        options: [
          "For example",
          "Meanwhile",
          "On the other hand",
          "Similarly",
        ],
        answer: 1,
        wrongHints: [
          "'For example' would introduce an example — but the next sentence is a separate event.",
          null,
          "'On the other hand' suggests contrast — but the watchdog investigating fits with the fire department warning.",
          "'Similarly' suggests same direction — closer, but 'meanwhile' is better for parallel actions in TIME.",
        ],
        explanation: "'Meanwhile' connects two parallel actions happening at the same time: the Fire Department is advising AND the consumer watchdog is also investigating. Both are simultaneous responses to the safety issue.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 7",
        bronTekst: tekst3,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
  // V8
  {
    title: "Vraag 8 — Goal of UQ research",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 8. Read paragraph 1 of text 4.",
    emoji: "🎓",
    checks: [
      {
        q: "What is the goal of the research done by UQ, according to paragraph 1?",
        options: [
          "to examine how microplastics end up in humans",
          "to find out the origin of microplastics consumed by humans",
          "to prove that microplastics are dangerous for people",
          "to study the impact of microplastics on people",
        ],
        answer: 3,
        wrongHints: [
          "The research is about EFFECTS, not how they get in.",
          "Origin/source isn't the focus — impact on body is.",
          "The research aims to STUDY the impact, not 'prove' a predetermined conclusion.",
          null,
        ],
        explanation: "Paragraph 1 quotes Kevin Thomas: 'we are trying to quantify what the effect is of that exposure.' The goal is to STUDY (measure) the impact on humans — not to prove anything specific in advance.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 8",
        bronTekst: tekst4,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
  // V10
  {
    title: "Vraag 10 — Function paragraph 3",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 10.",
    emoji: "🎓",
    checks: [
      {
        q: "What is the function of paragraph 3?",
        options: [
          "to emphasise why research on microplastics is indispensable",
          "to explain what is going to be studied in the new research lab",
          "to give an overview of the results and implications of the research",
          "to praise the scientists who conducted previous research projects",
          "to stress that more funding is needed for future research projects",
        ],
        answer: 1,
        wrongHints: [
          "Paragraph 3 is descriptive, not arguing for importance.",
          null,
          "Paragraph 3 is about PLANNED research, not results.",
          "No praise for previous scientists in paragraph 3.",
          "No funding-discussion in paragraph 3.",
        ],
        explanation: "Paragraph 3 describes the TWO PROJECTS the UQ team will start: (1) measure microplastics in blood/urine/brain, (2) investigate small microplastics behavior. Pure description of what will be studied in the new lab.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 10",
        bronTekst: tekst4,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
  // V12
  {
    title: "Vraag 12 — Why microplastics research is hard",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 12.",
    emoji: "🎓",
    checks: [
      {
        q: "Which of the following quotes explains why researching microplastics is so difficult?",
        options: [
          "\"Plastic is in the environment, and it's a very complicated situation because there are many different types of plastics.\"",
          "\"humans are exposed to particles, and our great challenge is to find out what effect that is having on us.\"",
          "\"It's a huge message in itself, which says just how far this plastic pollution has reached.\"",
        ],
        answer: 0,
        wrongHints: [
          null,
          "This quote is about the CHALLENGE in general, not WHY it's difficult.",
          "This quote is about the SCALE of pollution, not the difficulty of researching it.",
        ],
        explanation: "Quote A explains the DIFFICULTY: there are many different plastic types AND they change in the environment through weathering. Complexity = hard to research. Quote B and C are about the importance/scale, not the difficulty.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 12",
        bronTekst: tekst4,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
  // V13
  {
    title: "Vraag 13 — Main aim of text",
    explanation: "Echte examenvraag uit VMBO-GL/TL Engels 2025 tijdvak 1, vraag 13. Think about the WHOLE text 4.",
    emoji: "🎓",
    checks: [
      {
        q: "What is the main aim of the text as a whole?",
        options: [
          "to create awareness of the risks of plastics for the environment",
          "to persuade companies to produce materials without plastics",
          "to update people about a scientific examination into plastics",
          "to warn people about the harmful effects of plastics on humans",
        ],
        answer: 2,
        wrongHints: [
          "The text mentions environment briefly, but main focus is the new RESEARCH.",
          "Text doesn't address companies or persuasion.",
          null,
          "Text doesn't 'warn' — it reports on research that is JUST STARTING.",
        ],
        explanation: "The text reports on a new UQ research lab opening, the projects starting, and the partnership funding it. It's an UPDATE about scientific examination — not a warning, not a call to action. Tone is informative/news-style.",
        examenBron: "🎓 Echt examen VMBO-GL/TL Engels 2025 tijdvak 1, vraag 13",
        bronTekst: tekst4,
        leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      },
    ],
  },
];

const examenEngels2025T1 = {
  id: "examen-engels-2025-t1",
  title: "Examen oefenen — Engels 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Engels - eindexamen oefenen 2025-T1",
  intro:
    "9 echte examenvragen uit VMBO-GL/TL Engels 2025 tijdvak 1, verdeeld over 3 leesteksten (UFO sightings, e-scooter battery fires, microplastics research). Per vraag de echte 4 antwoorden, denkprikkel-hints, inhoudelijke uitleg, doorklik naar Engels-leerpad. Engels-eindexamen is overwegend leesvaardigheid — bron-teksten zijn essentieel.",
  triggerKeywords: [
    "examen engels", "engels 2025", "echte examenvragen engels",
    "ufo close encounters", "e-scooter battery", "microplastics",
    "begrijpend lezen engels", "reading comprehension",
  ],
  chapters,
  steps,
};

export default examenEngels2025T1;

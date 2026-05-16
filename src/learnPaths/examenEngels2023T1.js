// Leerpad: Examen-oefenpad Engels VMBO-GL/TL 2023 tijdvak 1.
// 2026-05-16: 5e Engels-pilot. 6 echte MC-vragen geselecteerd uit 30 MC's.
// Bron: examenblad.nl, examen 0071 GT 2023-1.

const tekst1 = {
  titel: "Tekst 1 — Traveller information (rugby fans)",
  body:
    "RUGBY fans from the West country set to travel to Twickenham for Saturday's clash between Bath and Bristol can get the train to Paddington, despite engineering works. Services between London Paddington and the South West will make additional stops at Westbury for rugby supporters travelling by train before and after the game. **Planned signalling work will be postponed and start the following day.**",
};

const tekst2 = {
  titel: "Tekst 2 — Hug a tree (Very Important Trees campagne)",
  body:
    "Go out into the nearest garden, park or field, select a sizeable tree, stand against the trunk and reach your arms around its girth. Feel good? Of course it does; you can touch the texture of the bark, smell the earthiness around its roots, look up into the sculptural shapes of the branches.\n\n" +
    "Now a new campaign called Very Important Trees aims to create a national register of the UK's most outstanding trees — to celebrate them, monitor their health, and protect them from being cut down for development.",
};

const tekst4 = {
  titel: "Tekst 4 — How Jamaican bobsledders train for the Olympics",
  body:
    "1 For a couple of Jamaican bobsledders hoping to qualify for the Olympics, the inspiration for outside-the-box training came from a classic sports movie. When gyms in England were closed, Shanwayne Stephens and Nimroy Turgott hit the streets of Peterborough, threw open the doors of a Mini Cooper and started pushing. And pushing.\n\n" +
    "3 The Mini, weighing about 1,400 pounds, is comparable in weight to a real two-man bobsled — making it an ideal substitute training tool. They got the idea from the 1993 film Cool Runnings, in which the original Jamaican team pushed a bathtub through the streets.",
};

const tekst5 = {
  titel: "Tekst 5 — Bears and wolves coexist in UK woods after 1,000 years",
  body:
    "1 For the first time in more than 1,000 years native bears and wolves are coming snout to muzzle with each other among towering oaks and ashes in a slice of British woodland. European brown bears, thought to have become extinct in the British wilds in medieval times, and grey wolves which roamed free until the 17th century, are once again sharing space.\n\n" +
    "2 The Wild Place Project, a 136-acre site near Bristol, is bringing these native species back together into the same habitat for the first time in a millennium.",
};

const tekst6 = {
  titel: "Tekst 6 — Smokejumpers (Canadian elite firefighters)",
  body:
    "1 When fires spark in some of the most inaccessible swaths of Canadian wilderness, elite firefighters known as smokejumpers are called into action. They parachute out of planes to quickly reach fire sites that do not have roads — the only way in is from the air.\n\n" +
    "5 'In British Columbia, our success rate of putting out fires before they get to two hectares is over 90 per cent,' says James Bergen, who manages a smokejumper team. 'Most fires in the wilderness get controlled before they become catastrophic.'",
};

const chapters = [
  { letter: "A", title: "Informatieve teksten", emoji: "📰", from: 0, to: 1 },
  { letter: "B", title: "Sport & natuur", emoji: "🏔️", from: 2, to: 3 },
  { letter: "C", title: "Bijzondere beroepen", emoji: "🪂", from: 4, to: 5 },
];

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Engels 2023 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2023/vmbo-gl/documenten/cse-1/gt-0071-a-23-1-o";

const compactUitleg = (kernUitleg, niveaus) => ({
  stappen: [{ titel: "Kern", tekst: kernUitleg }],
  woorden: [],
  theorie: "Cito-truc: lees de bron-tekst zorgvuldig, koppel sleutel-woorden uit vraag aan tekst. Antwoord moet letterlijk te onderbouwen zijn met een zin uit de tekst.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const steps = [
  {
    title: "Vraag 1 — Traveller info: signalling work uitgesteld",
    explanation: "Echte examenvraag uit Engels 2023-T1, vraag 1. Bekijk tekst 1.",
    emoji: "🎓",
    checks: [{
      q: "What becomes clear from this article?",
      options: [
        "A rugby match has been cancelled because a certain stadium cannot be reached by public transport.",
        "People wanting to go to a particular rugby match are advised to avoid going by train.",
        "Several train stations need to be repaired after having been vandalised by a group of rugby fans.",
        "Work at rail systems will be delayed in order to transport rugby fans to an important match.",
      ],
      answer: 3,
      wrongHints: ["De wedstrijd gaat door — tekst spreekt over fans die naar Twickenham reizen.", "Tegengesteld — tekst zegt juist dat trein OK is ('can get the train... despite engineering works').", "Geen vandalisme genoemd — alleen geplande onderhoudswerken.", null],
      explanation: "Sleutel-zin: 'Planned signalling work will be postponed and start the following day.' Onderhoud is **uitgesteld** zodat rugby-fans kunnen reizen. = D.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
      voorkennisKeten: [
        { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'postponed', 'signalling work', 'engineering works'" },
        { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "hoofdgedachte-vraag — zoek welke optie het hele artikel samenvat" },
      ],
      uitlegPad: compactUitleg(
        "'Planned signalling work will be postponed' = onderhoud wordt uitgesteld. Reden: rugby-fans moeten naar de wedstrijd kunnen reizen. Antwoord D vat dit samen: 'Work at rail systems will be delayed'.",
        { basis: "Onderhoud uitgesteld voor rugby-fans. = D.", simpeler: "Engineering works uitgesteld zodat fans kunnen reizen. = D.", nogSimpeler: "Work delayed = D." },
      ),
    }],
  },
  {
    title: "Vraag 2 — Very Important Trees: register aanleggen",
    explanation: "Echte examenvraag uit Engels 2023-T1, vraag 2. Bekijk tekst 2.",
    emoji: "🎓",
    checks: [{
      q: "'a campaign called Very Important Trees' (laatste zin) Wat is het doel van deze campagne?",
      options: [
        "een lijst aanleggen van bijzondere bomen om deze te behouden",
        "geld inzamelen voor de behandeling van zieke bomen",
        "onderzoeken welke boomsoorten met uitsterven bedreigd worden",
        "protesteren tegen het kappen van historische bossen",
      ],
      answer: 0,
      wrongHints: [null, "Niet over geld inzamelen — gaat om register + monitoring.", "Niet over uitstervende soorten — wel over individuele bijzondere bomen.", "Geen protest, wel positieve campagne (celebrate + protect)."],
      explanation: "Sleutel-zin: 'create a national register of the UK's most outstanding trees — to celebrate them, monitor their health, and protect them from being cut down'. Doel: **lijst aanleggen + behouden**. = A.",
      examenBron: BRON_LABEL(2),
      bronLink: BRON_LINK,
      bronTekst: tekst2,
      leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
      voorkennisKeten: [
        { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'register', 'outstanding', 'monitor', 'celebrate'" },
        { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'doel van campagne'-vraag — zoek werkwoorden 'to create / aim / protect'" },
      ],
      uitlegPad: compactUitleg(
        "'Create a national register' + 'protect them from being cut down' = lijst aanleggen om bijzondere bomen te behouden. Optie A direct parafrase.",
        { basis: "Lijst aanleggen + behouden. = A.", simpeler: "Register van bijzondere bomen + bescherming tegen kappen. = A.", nogSimpeler: "Register + behouden = A." },
      ),
    }],
  },
  {
    title: "Vraag 8 — Jamaicaanse bobsledders: Mini Cooper als trainingstool",
    explanation: "Echte examenvraag uit Engels 2023-T1, vraag 8. Bekijk tekst 4.",
    emoji: "🎓",
    checks: [{
      q: "What becomes clear about the two athletes from paragraph 3?",
      options: [
        "They chose a training tool comparable to the real thing.",
        "They have a history of wrecking their training materials.",
        "They have borrowed some training equipment before.",
        "They should ask their employer's permission to compete.",
      ],
      answer: 0,
      wrongHints: [null, "Geen geschiedenis van materiaal slopen genoemd.", "Geen lenen genoemd — eigen Mini.", "Geen werkgever-toestemming genoemd."],
      explanation: "Sleutel-zin alinea 3: 'The Mini, weighing about 1,400 pounds, is comparable in weight to a real two-man bobsled — making it an ideal substitute training tool.' Mini = vergelijkbaar met echte bobslee = **comparable to the real thing**. = A.",
      examenBron: BRON_LABEL(8),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
      voorkennisKeten: [
        { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'comparable', 'substitute', 'bobsled', 'wrecking'" },
        { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'becomes clear from paragraph'-vraag — extracteer essentie uit specifieke alinea" },
      ],
      uitlegPad: compactUitleg(
        "Mini Cooper 1400 pounds = ~635 kg, ongeveer gelijk aan een echte 2-mans bobslee. Daarom 'ideal substitute' = goed alternatief. Atleten kozen iets dat lijkt op de echte sportuitrusting.",
        { basis: "Trainings-tool vergelijkbaar met echte ding. = A.", simpeler: "Mini Cooper heeft zelfde gewicht als bobslee — perfect substituut. = A.", nogSimpeler: "Comparable = A." },
      ),
    }],
  },
  {
    title: "Vraag 12 — Wild Place Project: native wildlife herstellen",
    explanation: "Echte examenvraag uit Engels 2023-T1, vraag 12. Bekijk tekst 5.",
    emoji: "🎓",
    checks: [{
      q: "What becomes clear about the Wild Place Project in paragraphs 1 and 2?",
      options: [
        "It aims to improve the living conditions of endangered wildlife that is kept in captivity.",
        "It has been set up to get native wildlife living together in the same area again.",
        "It is a breeding programme that aims to prevent the extermination of wildlife.",
      ],
      answer: 1,
      wrongHints: ["Niet over verbeteren van captiviteit — wel over native wildlife (oorspronkelijke fauna).", null, "Niet over kweek-programma — wel over samenleven van bestaande dieren."],
      explanation: "Tekst: 'native bears and wolves are coming snout to muzzle with each other ... once again sharing space.' Het project laat **oorspronkelijke (native) fauna weer samenleven** in dezelfde habitat — na 1000 jaar. = B.",
      examenBron: BRON_LABEL(12),
      bronLink: BRON_LINK,
      bronTekst: tekst5,
      leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
      voorkennisKeten: [
        { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'native wildlife', 'extinct', 'captivity', 'breeding programme'" },
        { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "synonymische parafrase: 'native wildlife sharing space' = 'native wildlife living together'" },
      ],
      uitlegPad: compactUitleg(
        "'Native bears and wolves... once again sharing space.' = inheemse beren en wolven leven weer in dezelfde ruimte. Het Wild Place Project brengt deze oorspronkelijke fauna terug bij elkaar. Geen captivity-verbetering (= A), geen breeding-programma (= C).",
        { basis: "Native wildlife samenleven. = B.", simpeler: "Beren + wolven (inheems) weer in zelfde gebied — na 1000 jaar. = B.", nogSimpeler: "Native together = B." },
      ),
    }],
  },
  {
    title: "Vraag 19 — Smokejumpers: per parachute naar vuur",
    explanation: "Echte examenvraag uit Engels 2023-T1, vraag 19. Bekijk tekst 6.",
    emoji: "🎓",
    checks: [{
      q: "What is special about the smokejumpers, according to paragraph 1?",
      options: [
        "They are asked to join the brigade because they like heights.",
        "They combine their fire-fighting activities with a regular job.",
        "They go to areas that can only be reached through the air.",
        "They like being in charge under difficult circumstances.",
      ],
      answer: 2,
      wrongHints: ["Niet over 'liking heights' — wel parachute-springen maar dat is de methode, niet de reden.", "Niet over reguliere baan — alinea 1 noemt dat niet.", null, "Niet over 'being in charge' — wel over onbereikbare gebieden."],
      explanation: "Alinea 1: 'They parachute out of planes to quickly reach fire sites that do not have roads — the only way in is from the air.' Smokejumpers gaan naar plaatsen die alleen vanuit de lucht bereikbaar zijn. = C.",
      examenBron: BRON_LABEL(19),
      bronLink: BRON_LINK,
      bronTekst: tekst6,
      leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
      voorkennisKeten: [
        { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'parachute', 'wilderness', 'inaccessible', 'smokejumper'" },
        { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'what is special'-vraag = zoek het onderscheidende kenmerk in alinea 1" },
      ],
      uitlegPad: compactUitleg(
        "'Fire sites that do not have roads — the only way in is from the air.' = vuur-locaties zonder wegen, alleen per lucht bereikbaar. Dat maakt smokejumpers uniek — gewone brandweer kan niet komen.",
        { basis: "Onbereikbare gebieden per lucht. = C.", simpeler: "Smokejumpers springen waar geen wegen heen lopen — alleen vanuit de lucht. = C.", nogSimpeler: "Only by air = C." },
      ),
    }],
  },
  {
    title: "Vraag 23 — Smokejumpers BC: meeste vuren snel onder controle",
    explanation: "Echte examenvraag uit Engels 2023-T1, vraag 23. Bekijk tekst 6.",
    emoji: "🎓",
    checks: [{
      q: "What point is made by James Bergen in paragraph 5?",
      options: [
        "British Columbia would also like to be protected by an elite firefighting team.",
        "In the majority of cases the fire brigades in British Columbia arrive late at the scene.",
        "Media attention for the effects of fires on nature has risen dramatically these last years.",
        "Most fires in the Canadian wilderness are put out before they can cause serious damage.",
      ],
      answer: 3,
      wrongHints: ["BC heeft al smokejumper-team — Bergen ervan zegt 'in BC'.", "Tegengesteld — Bergen zegt juist dat brandweer SUCCESVOL is (90%).", "Geen media-discussie in alinea 5.", null],
      explanation: "Bergen-citaat: 'our success rate of putting out fires before they get to two hectares is over 90 per cent' + 'Most fires in the wilderness get controlled before they become catastrophic.' = **meeste vuren worden geblust voordat er ernstige schade ontstaat**. = D.",
      examenBron: BRON_LABEL(23),
      bronLink: BRON_LINK,
      bronTekst: tekst6,
      leerpadLink: { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid" },
      voorkennisKeten: [
        { id: "woordenschat-engels-po", title: "Woordenschat Engels", niveau: "po-1F", why: "begrijpen 'success rate', 'put out fires', 'catastrophic', 'wilderness'" },
        { id: "cse-leesvaardigheid-engels", title: "CSE Engels leesvaardigheid", niveau: "VMBO-GT eindexamen", why: "'point made by X'-vraag — zoek directe citatie + parafrase Nederlandse opties" },
      ],
      uitlegPad: compactUitleg(
        "90% success rate + 'most fires... controlled before they become catastrophic' = de meeste vuren in Canadese wildernis worden geblust voor er ernstige schade is. Optie D = directe parafrase.",
        { basis: "Meeste vuren snel onder controle. = D.", simpeler: "Bergen: 90% success rate, meeste vuren geblust voor catastrofe. = D.", nogSimpeler: "Snel onder controle = D." },
      ),
    }],
  },
];

const examenEngels2023T1 = {
  id: "examen-engels-2023-t1",
  title: "Examen oefenen — Engels 2023 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Engels - eindexamen oefenen 2023-T1",
  intro: "6 echte examenvragen uit VMBO-GL/TL Engels 2023 tijdvak 1. Onderwerpen: rugby-train info, Very Important Trees campagne, Jamaicaanse bobsledders, Wild Place Project, smokejumpers Canada.",
  triggerKeywords: ["examen engels 2023 tijdvak 1", "rugby twickenham", "very important trees", "jamaican bobsled", "wild place project", "smokejumpers canada"],
  chapters,
  steps,
};

export default examenEngels2023T1;

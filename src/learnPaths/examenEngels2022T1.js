// Leerpad: Examen-oefenpad Engels VMBO-GL/TL 2022 tijdvak 1.
// 2026-05-16: 6e Engels-pilot. 6 echte MC-vragen geselecteerd uit 30 MC's.
// Bron: examenblad.nl, 0071 GT 2022-1.

const tekst1 = {
  titel: "T1 — Caution: Pirri-pirri bur (informatiebord Lindisfarne)",
  body:
    "Pirri-pirri bur grows throughout the dunes. It is very likely to become matted in clothing and fur, especially between July and October.\n\nPirri-pirri bur is a non-native plant introduced from New Zealand which has become established here. It rapidly spreads and has a negative impact on our native wildlife.\n\nPlease ensure that it is not spread to other sites by checking your clothing and pets and removing any burrs before you leave Lindisfarne.\n\nThank you for your cooperation.",
};

const tekst4 = {
  titel: "T4 — Let the children sleep (Josh Gabbatiss, Science Correspondent)",
  body:
    "1 A new study has shown delaying school start times for teenagers can have major benefits. When students in their mid-teens started school at 10am instead of the usual 8:30am, rates of illness decreased by more than half over a two-year period, and they got significantly better grades, according to Dr Paul Kelley of the Open University.\n\n2 Researchers have argued that around the world, education systems hold sleep-deprived students to too high a standard, with American children topping the rankings. School in the US typically starts even before 8am, considerably earlier than in many other Western countries. Yet US students get worse results on standardised tests than students in many other developed nations. 'Conditions as diverse as obesity and depression have been linked with excessively early school times and lack of sleep,' Dr Kelley added.",
};

const tekst5 = {
  titel: "T5 — Heavy Dining (UK restaurants research)",
  body:
    "1 The calorie content of meals in UK restaurants is 'excessive' and sit-down restaurants are unhealthier than fast-food chains, recent research suggests. The research team looked at more than 13,500 meals on the menus of 21 sit-down restaurants and six fast-food chains.\n\n2 The study relied on information provided online by restaurant chains on calorie content. Only one in 10 meals was classed as healthy or fewer than 600kcal, as recommended by Public Health England. And nearly half of the meals contained 1,000kcal or more. Sit-down restaurants were five times more likely to offer high-calorie meals of 1,000kcal or more than fast-food restaurants.\n\n3 Dr Eric Robinson, lead researcher from Liverpool's department of psychology, said: 'It's important to point out that this is calories of meals AS LISTED. The actual portions served could be even higher than the printed numbers — so the real calorie intake may be greater than recorded.'",
};

const tekst6 = {
  titel: "T6 — Most Progressive Country on Earth (Wellington NZ)",
  body:
    "1 Wellington, New Zealand. When 6-year-old Eddie Writes decided the world needed a little more kindness, he did the only thing he thought would work — he wrote to his city's mayor and asked for help putting on an annual 'Kindness Day'. Much to Eddie's surprise, Wellington Mayor Justin Lester wrote back. On Nov. 16, New Zealand's capital city will be holding its first Manaaki Day (manaaki being the Maori word for kindness), taking Eddie's ideas of how to encourage and celebrate charitable acts. For example, 'We can buy toys for children that don't have any,' Eddie wrote.\n\n2 The mayor's support is part of a new wave of progressive, child-centred politics sweeping New Zealand, led by Prime Minister Jacinda Ardern, herself a new parent.",
};

const tekst7 = {
  titel: "T7 — The ice cream seller vs. Instagram influencers (Joe Nicchi)",
  body:
    "1 Instagram has fundamentally changed the way the culinary industry operates in Los Angeles and beyond in recent years, but Joe Nicchi kept it simple when he opened his food truck in 2014. Nicchi sells his ice cream out of a vintage 1960s Mister Softee truck.\n\n2 Forget the made-to-be-geotagged unicorn flavors or new inventions such as black charcoal soft-serve so popular with hip people that they stand in line halfway down the block to get a taste. Nicchi's soft-serve ice cream business offers three aggressively simple, old-style options — chocolate, vanilla or twist, hence the name, CVT Soft Serve. But the 'influencers' kept coming to ask Nicchi for free ice cream.\n\n3 'At first I was confused,' Nicchi explained, before launching into a different tone of voice to re-create one of the encounters: 'It's like, Hey, what's up. So, I don't know if you follow me but I have 100,000 Instagram followers. Could I get a free ice cream?' Joe's reaction: a $4 cone costs me 30 cents to make — pay me, that's how this works.\n\n4 Eventually Nicchi posted a sign reading 'Influencers Pay Double'. The post went viral. New customers showed up — many of them deliberately came to support a small business standing up to influencer-culture.",
};

const BRON_LABEL = (n) => `🎓 Echt examen VMBO-GL/TL Engels 2022 tijdvak 1, vraag ${n}`;
const BRON_LINK = "https://www.examenblad.nl/2022/vmbo-gl/documenten/cse-1/gt-0071-a-22-1-o";

const compact = (kern, niveaus, woorden = []) => ({
  stappen: [{ titel: "Kern", tekst: kern }],
  woorden,
  theorie: "Engels-leesvaardigheid: bij doel-van-bord/main-purpose-paragraph — lees inleiding + samenvat. Bij waarom-vraag — zoek 'because/since' woorden.",
  voorbeelden: [],
  basiskennis: [],
  niveaus,
});

const chapters = [
  { letter: "A", title: "Informatieborden & natuur", emoji: "🌱", from: 0, to: 0 },
  { letter: "B", title: "Gezondheid & onderwijs", emoji: "🛌", from: 1, to: 2 },
  { letter: "C", title: "Samenleving & business", emoji: "🍦", from: 3, to: 5 },
];

const steps = [
  {
    title: "Vraag 1 — Pirri-pirri bord: wat is het doel?",
    explanation: "Echte examenvraag uit Engels 2022-T1, vraag 1.",
    emoji: "🎓",
    checks: [{
      q: "Wat is het doel van het informatiebord 'Caution — Pirri-pirri bur' op Lindisfarne?",
      options: [
        "proberen de verspreiding van een exotische plant te stoppen",
        "uitleggen hoe men een bepaalde giftige plant kan vermijden",
        "waarschuwen voor een schadelijke plant die irritaties veroorzaakt",
      ],
      answer: 0,
      wrongHints: [null, "Tekst zegt niet 'giftig' of 'vermijden voor jezelf'. Wel iets over 'spreading' — wat?", "Niet voor IRRITATIES — voor wildlife-bescherming. Lees zin 'negative impact on native wildlife'."],
      explanation: "Sleutelzin: 'Please ensure that it is not **spread to other sites** by checking your clothing and pets'. Doel = verspreiding stoppen. Plant is NIET native (uit New Zealand) = exotisch. Antwoord A.",
      examenBron: BRON_LABEL(1),
      bronLink: BRON_LINK,
      bronTekst: tekst1,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'spread', 'non-native', 'wildlife', 'cooperation'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "doel van bord/tekst destilleren — kern-truc" },
      ],
      uitlegPad: compact(
        "Doel-van-bord-truc: lees laatste alinea — daar staat altijd 'please...' of wat de lezer MOET DOEN. Hier: 'ensure it is not spread' = verspreiding stoppen. Plant uit NZ → niet-native → exotisch.",
        { basis: "Voorkomen verspreiding exotische plant. = A.", simpeler: "Bord vraagt schoenen/kleding checken zodat plant niet OP NIEUWE PLEK terechtkomt. = A.", nogSimpeler: "Verspreiding stoppen = A." },
        [{ woord: "non-native", uitleg: "Niet-inheems, exotisch." }, { woord: "spread", uitleg: "Verspreiden." }],
      ),
    }],
  },
  {
    title: "Vraag 6 — American children sleep ranking: waarom?",
    explanation: "Echte examenvraag uit Engels 2022-T1, vraag 6.",
    emoji: "🎓",
    checks: [{
      q: "'with American children topping the rankings' (paragraph 2). Which possible reason for this top ranking is mentioned in paragraph 2?",
      options: [
        "American schools tend to start even earlier than schools in Great Britain.",
        "American society is very competitive and focused on scoring high.",
        "In America schooldays are often longer than eight hours a day.",
        "In America there is more research into sleep going on than elsewhere.",
      ],
      answer: 0,
      wrongHints: [null, "Tekst noemt 'standardised tests' resultaten — niet 'competitive society'. Lees specifiek alinea 2 — wat staat over tijdstip?", "Tekst zegt niets over schooldag-lengte. Wel over START-tijd.", "Geen vergelijking met onderzoek-volume — wel iets over school-START-time."],
      explanation: "Alinea 2: **'School in the US typically starts even BEFORE 8am, considerably EARLIER than in many other Western countries.'** UK-onderzoek vergelijkt met UK-school (8:30) — VS is dus nog vroeger = nog meer slaaptekort. Antwoord A.",
      examenBron: BRON_LABEL(6),
      bronLink: BRON_LINK,
      bronTekst: tekst4,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'sleep-deprived', 'ranking', 'developed nations'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "specifieke reden in alinea — kern-truc" },
      ],
      uitlegPad: compact(
        "Vraag 'which reason mentioned in paragraph 2' = scan ALLEEN alinea 2 voor reden. Sleutelwoord 'even before 8am, considerably earlier'. Geen 'competitive' of 'longer day' in tekst — die zijn verzonnen verleiders.",
        { basis: "VS start vóór 8am = vroeger dan UK = meer slaaptekort. = A.", simpeler: "VS school start nog vroeger dan VK → meer slaaptekort. = A.", nogSimpeler: "Eerder = A." },
        [{ woord: "ranking", uitleg: "Plek in een lijst (hoogste tot laagste)." }, { woord: "considerably", uitleg: "Aanzienlijk, behoorlijk." }],
      ),
    }],
  },
  {
    title: "Vraag 9 — Heavy Dining UK: wat blijkt uit alinea 1-2?",
    explanation: "Echte examenvraag uit Engels 2022-T1, vraag 9.",
    emoji: "🎓",
    checks: [{
      q: "What becomes clear from paragraphs 1 and 2 of 'Heavy Dining'?",
      options: [
        "A number of restaurants in the UK misinform consumers about the ingredients.",
        "A publication about the quality of restaurants and fast-food chains turned out wrong.",
        "An undercover investigation has exposed wrongdoings in the UK hospitality business.",
        "Many meals served in restaurants contain more calories than meals served in fast-food chains.",
      ],
      answer: 3,
      wrongHints: ["Tekst zegt niets over ingrediënten-misinformatie — wel over CALORIE-content.", "Geen publicatie over kwaliteit. Lees: aantal calorieën in sit-down vs fast-food.", "Geen undercover-onderzoek. Wel publiek menus-onderzoek.", null],
      explanation: "Alinea 1: 'sit-down restaurants are unhealthier than fast-food chains'. Alinea 2: 'Sit-down restaurants were **five times more likely** to offer high-calorie meals of 1,000kcal or more than fast-food restaurants.' → meer calorieën in restaurants. Antwoord D.",
      examenBron: BRON_LABEL(9),
      bronLink: BRON_LINK,
      bronTekst: tekst5,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'sit-down', 'fast-food chain', 'kcal', 'recommended'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "hoofdgedachte 2 alinea's destilleren — kern-truc" },
      ],
      uitlegPad: compact(
        "Lees alinea 1+2 + zoek de KERN. Hier: sit-down restaurants ≠ fast-food — sit-down BLIJKT 5× ongezonder. Andere opties verzinnen iets dat NIET in tekst staat.",
        { basis: "Restaurants > fast-food in calorieën. = D.", simpeler: "Onderzoek toont: gewone restaurants meer calorieën dan McDonalds-achtigen. = D.", nogSimpeler: "Restaurants > FF = D." },
        [{ woord: "sit-down restaurant", uitleg: "Gewoon restaurant waar je zit en bediening krijgt." }, { woord: "kcal", uitleg: "Kilocalorieën — eenheid energie in eten." }],
      ),
    }],
  },
  {
    title: "Vraag 14 — Manaaki Day Wellington: 'toys for children that don't have any'",
    explanation: "Echte examenvraag uit Engels 2022-T1, vraag 14.",
    emoji: "🎓",
    checks: [{
      q: "'We can buy toys for children that don't have any' (paragraph 1). What is true about this statement?",
      options: [
        "It defines what makes Manaaki Day such a unique festive event.",
        "It is a key aspect of the traditional Maori culture in New Zealand.",
        "It is one of the suggestions Eddie Writes made to Justin Lester.",
        "It shows how Justin Lester hopes to boost his popularity in Wellington.",
      ],
      answer: 2,
      wrongHints: ["Tekst zegt niet dat dit Manaaki Day uniek MAAKT — een van vele ideeën.", "'Manaaki' is Maori voor 'kindness', maar de TOYS-quote komt van Eddie, niet uit Maori-cultuur.", null, "Geen popularity-boost-motief in tekst. Eddie schreef gewoon zijn idee aan de mayor."],
      explanation: "Tekst: 'taking **Eddie's ideas** of how to encourage charitable acts to improve well-being. For example, **\"We can buy toys for children that don't have any,\" Eddie wrote.**' De quote is Eddie's suggestie. Antwoord C.",
      examenBron: BRON_LABEL(14),
      bronLink: BRON_LINK,
      bronTekst: tekst6,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'mayor', 'annual', 'charitable acts', 'progressive'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "quote-attributie (wie zei het) — kern-truc" },
      ],
      uitlegPad: compact(
        "Quote-attributie: kijk wie SPREKT in de zin. Hier 'Eddie wrote' direct na de quote → Eddie is de bron. Andere opties leiden af van wie het zei.",
        { basis: "Eddie wrote de suggestie. = C.", simpeler: "De quote komt van Eddie (6 jaar), in zijn brief aan de burgemeester. = C.", nogSimpeler: "Eddie = C." },
        [{ woord: "mayor", uitleg: "Burgemeester." }, { woord: "charitable", uitleg: "Goeddoelend, liefdadig." }],
      ),
    }],
  },
  {
    title: "Vraag 20 — Joe Nicchi's ice cream business: wat valt op?",
    explanation: "Echte examenvraag uit Engels 2022-T1, vraag 20.",
    emoji: "🎓",
    checks: [{
      q: "What becomes clear about Joe Nicchi's business in paragraphs 1 and 2?",
      options: [
        "His old-fashioned ice cream truck is trending on social media.",
        "His unusual and unique ice cream flavours are very popular.",
        "It is difficult for him to make a living with just selling ice cream.",
        "The concept of his ice cream business is quite traditional.",
      ],
      answer: 3,
      wrongHints: ["Niet 'trending' in tekst — wel 'simple' en 'vintage 1960s'.", "Tekst zegt expliciet GEEN 'unicorn flavors' — wel CHOCOLATE/VANILLA/TWIST.", "Tekst zegt niets over moeilijk-levensonderhoud. Wel over zijn keuze voor simpel.", null],
      explanation: "Alinea 1: 'kept it simple' + 'vintage 1960s Mister Softee truck'. Alinea 2: 'aggressively simple, **old-style** options — chocolate, vanilla or twist'. = traditioneel concept. Andere opties verzinnen kenmerken die NIET in tekst staan. Antwoord D.",
      examenBron: BRON_LABEL(20),
      bronLink: BRON_LINK,
      bronTekst: tekst7,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'vintage', 'soft-serve', 'aggressively simple', 'culinary'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "hoofdkenmerk businessmodel uit 2 alinea's — kern-truc" },
      ],
      uitlegPad: compact(
        "Sleutelwoorden alinea 1+2: 'simple', 'vintage 1960s', 'old-style', 'CVT = chocolate vanilla twist'. Alles wijst op TRADITIONEEL. Verleiders verzinnen 'trending' of 'unique flavours' die juist het tegenovergestelde zijn van wat in tekst staat.",
        { basis: "Simple + vintage + old-style = traditioneel. = D.", simpeler: "1960s truck + 3 smaken (chocolate/vanilla/twist) = ouderwets concept. = D.", nogSimpeler: "Traditional = D." },
        [{ woord: "vintage", uitleg: "Klassiek, ouderwets-mooi." }, { woord: "old-style", uitleg: "Ouderwets, traditioneel." }],
      ),
    }],
  },
  {
    title: "Vraag 21 — Waarom was Joe Nicchi confused?",
    explanation: "Echte examenvraag uit Engels 2022-T1, vraag 21.",
    emoji: "🎓",
    checks: [{
      q: "'At first I was confused' (paragraph 3). Why was Joe Nicchi confused?",
      options: [
        "He found it hard to believe that so many young people were interested in his ice cream.",
        "He was startled by the great number of strangers that reacted to his Instagram.",
        "He was surprised by how many people preferred his ice cream over more expensive ones.",
        "He wondered why people wanted something for free that costs very little to make.",
      ],
      answer: 3,
      wrongHints: ["Tekst zegt niet 'young people' specifiek — wel 'influencers'.", "Joe REAGEERT op influencers, niet andersom op zijn Instagram.", "Geen vergelijking 'expensive' — wel kostprijs vs prijs van eigen product.", null],
      explanation: "Joe's quote: '**a $4 cone costs me 30 cents to make — pay me, that's how this works.**' Hij vroeg zich af: waarom willen mensen GRATIS iets dat zo goedkoop te maken is + waarom verwachten ze dat als prominentie-claim genoeg is? Antwoord D.",
      examenBron: BRON_LABEL(21),
      bronLink: BRON_LINK,
      bronTekst: tekst7,
      leerpadLink: { id: "woordenschat-engels", title: "Woordenschat Engels" },
      voorkennisKeten: [
        { id: "woordenschat-engels", title: "Woordenschat Engels", niveau: "VMBO-GT eindexamen", why: "begrijpen 'confused', 'influencer', 'cone', 'free'" },
        { id: "begrijpend-lezen-strategie", title: "Begrijpend lezen strategie", niveau: "po-2F", why: "waarom-vraag + match met quote in tekst — kern-truc" },
      ],
      uitlegPad: compact(
        "Joe's confusion zit in de combo: kostprijs $0.30, verkoopprijs $4, en influencer eist het GRATIS — alleen op claim van 100k volgers. Joe ziet dat niet als business: 'pay me, that's how this works'.",
        { basis: "Verbaasd over gratis-vraag voor goedkope cone. = D.", simpeler: "Joe maakt voor 30 cent en verkoopt voor $4 — waarom zou hij gratis weggeven? = D.", nogSimpeler: "Gratis vs cost = D." },
        [{ woord: "confused", uitleg: "In de war, verbaasd." }, { woord: "encounter", uitleg: "Ontmoeting." }],
      ),
    }],
  },
];

const examenEngels2022T1 = {
  id: "examen-engels-2022-t1",
  title: "Examen oefenen — Engels 2022 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "engels",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Engels - eindexamen oefenen 2022-T1",
  intro: "6 echte examenvragen uit VMBO-GL/TL Engels 2022 tijdvak 1. Teksten: Pirri-pirri exotic plant warning, Let the children sleep (school start time), Heavy Dining UK restaurants calories, Wellington Manaaki Day NZ Maori, Joe Nicchi ice cream vs Instagram influencers (×2).",
  triggerKeywords: ["examen engels 2022 tijdvak 1", "pirri-pirri bur lindisfarne", "let the children sleep", "heavy dining uk restaurants", "manaaki day wellington maori", "joe nicchi ice cream influencers"],
  chapters,
  steps,
};

export default examenEngels2022T1;

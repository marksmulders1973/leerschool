// Leerpad: Engelse woordenschat — 10 thema's voor onderbouw
// 10 stappen, 4 hoofdstukken.

const COLORS = {
  text: "#e0e6f0", muted: "#8899aa", warm: "#ffd54f", alt: "#ff7043",
  paper: "rgba(255,255,255,0.04)",
  food: "#ff7043", body: "#ec407a", clothes: "#42a5f5",
  family: "#ab47bc", school: "#26a69a", home: "#8d6e63",
  animals: "#43a047", verbs: "#5e35b1", numbers: "#ffb300",
  good: "#00c853",
};

const stepEmojis = ["📖", "🍽️", "👕", "👨‍👩‍👧", "🏫", "🏠", "🐶", "🏃", "🔢", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is woordenschat?", emoji: "📖", from: 0, to: 0 },
  { letter: "B", title: "Dagelijkse dingen", emoji: "🍽️", from: 1, to: 5 },
  { letter: "C", title: "Acties & getallen", emoji: "🔢", from: 6, to: 8 },
  { letter: "D", title: "Eindtoets", emoji: "🏆", from: 9, to: 9 },
];

// Helper voor woord-tabellen
function vocabSvg(rows, color) {
  const h = 30 + rows.length * 20 + 12;
  return `<svg viewBox="0 0 300 ${h}">
  <rect x="20" y="14" width="120" height="18" rx="3" fill="${color}" opacity="0.3"/>
  <text x="80" y="26" text-anchor="middle" fill="${color}" font-size="11" font-family="Arial" font-weight="bold">Nederlands</text>
  <rect x="160" y="14" width="120" height="18" rx="3" fill="${color}" opacity="0.3"/>
  <text x="220" y="26" text-anchor="middle" fill="${color}" font-size="11" font-family="Arial" font-weight="bold">English</text>
  ${rows.map((r, i) => `
  <text x="80" y="${50 + i * 20}" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">${r[0]}</text>
  <text x="220" y="${50 + i * 20}" text-anchor="middle" fill="${color}" font-size="12" font-family="Arial">${r[1]}</text>`).join("")}
  </svg>`;
}

const steps = [
  {
    title: "Hoe leer je woordenschat?",
    explanation: "Engels leren = woorden leren. Hoe meer woorden je kent, hoe makkelijker lezen, schrijven en spreken wordt.\n\n**Tips voor woorden onthouden**:\n• **Per thema** leren: alle eten-woorden bij elkaar, alle kleding bij elkaar.\n• **Hardop zeggen** als je leert.\n• **Beelden bedenken** bij elk woord.\n• **3 keer herhalen** verspreid over een week (spaced repetition).\n• Maak **eigen zinnen** met nieuwe woorden.\n\n**In dit pad** leer je ~80 basiswoorden in 8 thema's:\n• Eten & drinken, kleding, lichaam, familie, school, huis, dieren, werkwoorden + getallen.\n\nDeze ~80 woorden dekken de grootste deel van dagelijks gepraat. Met deze kun je al simpele Engelse zinnen begrijpen en maken.\n\n**Truc**: niet alle woorden in één keer proberen — doe 1 thema per dag, herhaal de oude.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">8 thema's woordenschat</text>
<text x="20" y="55" fill="${COLORS.food}" font-size="11" font-family="Arial">🍽️ eten & drinken</text>
<text x="160" y="55" fill="${COLORS.clothes}" font-size="11" font-family="Arial">👕 kleding</text>
<text x="20" y="75" fill="${COLORS.body}" font-size="11" font-family="Arial">🦵 lichaam</text>
<text x="160" y="75" fill="${COLORS.family}" font-size="11" font-family="Arial">👨‍👩‍👧 familie</text>
<text x="20" y="95" fill="${COLORS.school}" font-size="11" font-family="Arial">🏫 school</text>
<text x="160" y="95" fill="${COLORS.home}" font-size="11" font-family="Arial">🏠 huis</text>
<text x="20" y="115" fill="${COLORS.animals}" font-size="11" font-family="Arial">🐶 dieren</text>
<text x="160" y="115" fill="${COLORS.verbs}" font-size="11" font-family="Arial">🏃 werkwoorden</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">+ getallen 1-100</text>
</svg>`,
    checks: [
      {
        q: "Welke leertruc helpt het meest voor woordenschat?",
        options: [
          "Per thema + herhalen over een week",
          "Eén keer hardop, dan klaar",
          "Alleen vertalingen invullen",
          "Alleen lezen zonder vertalen",
        ],
        answer: 0,
        wrongHints: [null, "Eén keer is niet genoeg — herhaling werkt beter.", "Alleen invullen zonder context werkt slecht.", "Lezen helpt, maar zonder begrijpen niet."],
      },
    ],
  },

  // B
  {
    title: "Eten en drinken",
    explanation: "Basiswoorden voor eten:\n\n| Nederlands | English |\n|---|---|\n| brood | bread |\n| boter | butter |\n| kaas | cheese |\n| ei | egg |\n| melk | milk |\n| vlees | meat |\n| vis | fish |\n| appel | apple |\n| sinaasappel | orange |\n| banaan | banana |\n| ontbijt | breakfast |\n| lunch | lunch |\n| avondeten | dinner |\n| water | water |\n| sap | juice |\n\n**Voorbeeldzinnen**:\n• I eat bread and cheese for breakfast.\n• Can I have some water, please?\n• She doesn't like meat.",
    svg: vocabSvg([
      ["brood", "bread"], ["kaas", "cheese"], ["ei", "egg"],
      ["melk", "milk"], ["vlees", "meat"], ["water", "water"],
    ], COLORS.food),
    checks: [
      {
        q: "Wat betekent **bread**?",
        options: ["brood", "boter", "vlees", "kaas"],
        answer: 0,
        wrongHints: [null, "Boter = butter.", "Vlees = meat.", "Kaas = cheese."],
      },
      {
        q: "Hoe zeg je **avondeten** in Engels?",
        options: ["dinner", "breakfast", "lunch", "supper"],
        answer: 0,
        wrongHints: [null, "Breakfast = ontbijt.", "Lunch = lunch (middag).", "Supper kan, maar dinner is gangbaarder."],
      },
      {
        q: "Wat is **fish**?",
        options: ["vis", "vlees", "fruit", "ei"],
        answer: 0,
        wrongHints: [null, "Vlees = meat.", "Fruit = fruit.", "Ei = egg."],
      },
    ],
  },
  {
    title: "Kleding",
    explanation: "Kleding-woorden:\n\n| Nederlands | English |\n|---|---|\n| jas | coat / jacket |\n| trui | sweater / jumper |\n| broek | trousers (BR) / pants (US) |\n| jurk | dress |\n| rok | skirt |\n| shirt / hemd | shirt |\n| t-shirt | t-shirt |\n| schoenen | shoes |\n| sokken | socks |\n| muts | hat / cap |\n| sjaal | scarf |\n| handschoenen | gloves |\n\n**Let op**: \n• 'pants' = onderbroek in Brits Engels, maar lange broek in Amerikaans.\n• 'trousers' is altijd lange broek, geen verwarring.\n• Verb: *to wear* = dragen → *I'm wearing a red shirt.*",
    svg: vocabSvg([
      ["jas", "coat"], ["trui", "sweater"], ["broek", "trousers"],
      ["schoenen", "shoes"], ["sokken", "socks"], ["jurk", "dress"],
    ], COLORS.clothes),
    checks: [
      {
        q: "Wat betekent **shoes**?",
        options: ["schoenen", "sokken", "shirt", "schoenpoets"],
        answer: 0,
        wrongHints: [null, "Sokken = socks.", "Shirt = shirt.", "Geen Engels."],
      },
      {
        q: "Hoe zeg je **trui**?",
        options: ["sweater", "shirt", "skirt", "scarf"],
        answer: 0,
        wrongHints: [null, "Shirt = hemd / shirt.", "Skirt = rok.", "Scarf = sjaal."],
      },
    ],
  },
  {
    title: "Lichaam en familie",
    explanation: "**Lichaam (body)**:\n\n| NL | EN |\n|---|---|\n| hoofd | head |\n| haar | hair |\n| oog / ogen | eye / eyes |\n| oor | ear |\n| neus | nose |\n| mond | mouth |\n| arm | arm |\n| hand | hand |\n| been | leg |\n| voet | foot (mv: feet) |\n| tand | tooth (mv: teeth) |\n\n**Familie (family)**:\n\n| NL | EN |\n|---|---|\n| moeder | mother / mum |\n| vader | father / dad |\n| zus | sister |\n| broer | brother |\n| oma | grandmother / grandma |\n| opa | grandfather / grandpa |\n| tante | aunt |\n| oom | uncle |\n| neef / nicht | cousin |\n| baby | baby |\n\n**Onregelmatige meervouden** om te onthouden:\n• foot → feet\n• tooth → teeth\n• man → men\n• woman → women\n• child → children",
    svg: vocabSvg([
      ["hoofd", "head"], ["mond", "mouth"], ["hand", "hand"],
      ["voet", "foot/feet"], ["moeder", "mother"], ["broer", "brother"],
    ], COLORS.body),
    checks: [
      {
        q: "Wat is het meervoud van **foot**?",
        options: ["feet", "foots", "feets", "footes"],
        answer: 0,
        wrongHints: [null, "Onregelmatig: foot → feet.", "Niet -s — onregelmatig.", "Niet -s.", "Niet -es."],
      },
      {
        q: "Hoe zeg je **broer** in Engels?",
        options: ["brother", "sister", "uncle", "cousin"],
        answer: 0,
        wrongHints: [null, "Sister = zus.", "Uncle = oom.", "Cousin = neef/nicht."],
      },
      {
        q: "Wat betekent **mouth**?",
        options: ["mond", "neus", "oor", "kin"],
        answer: 0,
        wrongHints: [null, "Neus = nose.", "Oor = ear.", "Kin = chin."],
      },
    ],
  },
  {
    title: "School",
    explanation: "Schoolwoorden:\n\n| NL | EN |\n|---|---|\n| school | school |\n| leraar / lerares | teacher |\n| leerling | pupil / student |\n| klas | class / classroom |\n| boek | book |\n| schrift / notitieboek | notebook |\n| pen | pen |\n| potlood | pencil |\n| gum | eraser / rubber |\n| tas | bag |\n| bord | board (whiteboard) |\n| tafel | desk |\n| stoel | chair |\n| toets | test |\n| huiswerk | homework |\n| les | lesson |\n| pauze | break |\n\n**Voorbeeldzinnen**:\n• I have **homework** for tomorrow.\n• Open your **books** at page 32.\n• The **lesson** starts at 9 o'clock.\n• Do we have a **test** on Friday?\n\n**Vakken**:\n• Engels = English\n• wiskunde = maths\n• biologie = biology\n• geschiedenis = history\n• aardrijkskunde = geography",
    svg: vocabSvg([
      ["leraar", "teacher"], ["boek", "book"], ["pen", "pen"],
      ["tas", "bag"], ["huiswerk", "homework"], ["toets", "test"],
    ], COLORS.school),
    checks: [
      {
        q: "Wat betekent **homework**?",
        options: ["huiswerk", "klas", "leraar", "boek"],
        answer: 0,
        wrongHints: [null, "Klas = class(room).", "Leraar = teacher.", "Boek = book."],
      },
      {
        q: "Hoe zeg je **gum** (om mee uit te wissen)?",
        options: ["eraser", "pencil", "pen", "ruler"],
        answer: 0,
        wrongHints: [null, "Pencil = potlood.", "Pen = pen.", "Ruler = liniaal."],
      },
    ],
  },
  {
    title: "Huis en dieren",
    explanation: "**Huis (house)**:\n\n| NL | EN |\n|---|---|\n| huis | house |\n| kamer | room |\n| keuken | kitchen |\n| woonkamer | living room |\n| slaapkamer | bedroom |\n| badkamer | bathroom |\n| tuin | garden |\n| deur | door |\n| raam | window |\n| bed | bed |\n| stoel | chair |\n| tafel | table |\n\n**Dieren (animals)**:\n\n| NL | EN |\n|---|---|\n| hond | dog |\n| kat | cat |\n| vogel | bird |\n| vis | fish |\n| paard | horse |\n| koe | cow |\n| varken | pig |\n| schaap | sheep |\n| kip | chicken |\n| muis | mouse (mv: mice) |\n| konijn | rabbit |\n| olifant | elephant |\n\n**Voorbeeldzinnen**:\n• My dog is in the garden.\n• There's a cat on the chair.\n• I see a bird at the window.",
    svg: vocabSvg([
      ["huis", "house"], ["keuken", "kitchen"], ["tuin", "garden"],
      ["hond", "dog"], ["kat", "cat"], ["paard", "horse"],
    ], COLORS.home),
    checks: [
      {
        q: "Wat betekent **kitchen**?",
        options: ["keuken", "badkamer", "slaapkamer", "tuin"],
        answer: 0,
        wrongHints: [null, "Badkamer = bathroom.", "Slaapkamer = bedroom.", "Tuin = garden."],
      },
      {
        q: "Hoe zeg je **vogel** in Engels?",
        options: ["bird", "fish", "cat", "horse"],
        answer: 0,
        wrongHints: [null, "Fish = vis.", "Cat = kat.", "Horse = paard."],
      },
      {
        q: "Wat is het meervoud van **mouse**?",
        options: ["mice", "mouses", "mices", "mouse"],
        answer: 0,
        wrongHints: [null, "Onregelmatig: mouse → mice.", "Niet -s.", "Niet -s.", "Verschilt enkelvoud/mv."],
      },
    ],
  },

  // C
  {
    title: "Veelgebruikte werkwoorden",
    explanation: "De top 15 werkwoorden in dagelijks Engels:\n\n| NL | EN |\n|---|---|\n| zijn | to be (am/is/are) |\n| hebben | to have / has |\n| doen | to do / does |\n| gaan | to go |\n| komen | to come |\n| zien | to see |\n| weten | to know |\n| denken | to think |\n| willen | to want |\n| kunnen | can |\n| moeten | must / have to |\n| eten | to eat |\n| drinken | to drink |\n| spreken | to speak |\n| werken | to work |\n| spelen | to play |\n| lezen | to read |\n| schrijven | to write |\n| lopen | to walk |\n| rennen | to run |\n| zwemmen | to swim |\n| slapen | to sleep |\n\n**Truc**: deze werkwoorden komen in 80% van alle Engelse zinnen voor. Leer hun **3 vormen** (V1/V2/V3) — zie ook leerpad 'Onregelmatige werkwoorden'.",
    svg: vocabSvg([
      ["gaan", "go / went / gone"], ["zien", "see / saw / seen"],
      ["eten", "eat / ate / eaten"], ["lopen", "walk / walked"],
      ["slapen", "sleep / slept"], ["werken", "work / worked"],
    ], COLORS.verbs),
    checks: [
      {
        q: "Wat betekent **to know**?",
        options: ["weten", "denken", "zien", "geven"],
        answer: 0,
        wrongHints: [null, "Denken = think.", "Zien = see.", "Geven = give."],
      },
      {
        q: "Hoe zeg je **werken**?",
        options: ["work", "play", "walk", "watch"],
        answer: 0,
        wrongHints: [null, "Play = spelen.", "Walk = lopen.", "Watch = kijken."],
      },
    ],
  },
  {
    title: "Getallen + tijd",
    explanation: "**Getallen 1-20**:\nzero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.\n\n**Tientallen**:\ntwenty, thirty, forty, fifty, sixty, seventy, eighty, ninety, hundred.\n\n**Combinaties**:\n• 21 = twenty-one (met streepje!)\n• 35 = thirty-five\n• 100 = a/one hundred\n• 1000 = a/one thousand\n\n**Tijd vertellen**:\n• What time is it?\n• It's 3 o'clock. (3:00)\n• It's half past three. (3:30) — UK\n• It's three thirty. (3:30) — US\n• It's a quarter to four. (3:45)\n• It's a quarter past four. (4:15)\n\n**Dagen van de week**:\nMonday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.\n\n**Maanden**:\nJanuary, February, March, April, May, June, July, August, September, October, November, December.\n\n**Met hoofdletter!** in Engels: dagen + maanden + landen + talen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.numbers}" font-size="13" font-family="Arial" font-weight="bold">getallen + tijd</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">1-10: one two three four five</text>
<text x="20" y="73" fill="${COLORS.text}" font-size="11" font-family="Arial">six seven eight nine ten</text>
<text x="20" y="98" fill="${COLORS.text}" font-size="11" font-family="Arial">tientallen: twenty thirty forty</text>
<text x="20" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial">tijd: half past, quarter to/past</text>
<text x="20" y="142" fill="${COLORS.text}" font-size="11" font-family="Arial">dagen: Monday, Tuesday, ...</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">altijd hoofdletter bij dagen/maanden!</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel is **fifteen**?",
        options: ["15", "5", "50", "500"],
        answer: 0,
        wrongHints: [null, "Five = 5.", "Fifty = 50.", "Five hundred = 500."],
      },
      {
        q: "Hoe schrijf je **maandag** in Engels?",
        options: ["Monday", "monday", "Mounday", "Mondag"],
        answer: 0,
        wrongHints: [null, "Hoofdletter bij dagen!", "Spelfout.", "Geen Engels."],
      },
      {
        q: "Wat is **a quarter past three**?",
        options: ["3:15", "3:45", "2:45", "3:30"],
        answer: 0,
        wrongHints: [null, "Past = na. Kwartier na 3 = 3:15.", "Quarter to = 15 min vóór.", "Quarter to vóór een ander uur.", "Half past = 30 min."],
      },
    ],
  },
  {
    title: "Standaarduitdrukkingen",
    explanation: "Veelvoorkomende zinnen die je kant-en-klaar kunt leren:\n\n**Begroetingen**:\n• Hello / Hi — hallo\n• Good morning — goede morgen\n• Good afternoon — goede middag\n• Good evening — goede avond\n• Good night — welterusten\n• Goodbye / Bye — dag\n\n**Beleefdheid**:\n• Please — alsjeblieft (vragend)\n• Thank you / Thanks — bedankt\n• You're welcome — graag gedaan\n• Sorry — sorry\n• Excuse me — pardon\n\n**Eenvoudige vragen**:\n• What's your name? → My name is...\n• How old are you? → I'm 12 (years old).\n• Where are you from? → I'm from the Netherlands.\n• How are you? → I'm fine, thank you.\n• What time is it? → It's 3 o'clock.\n\n**Hulpzinnen**:\n• I don't understand. — Ik begrijp het niet.\n• Can you repeat that? — Kun je dat herhalen?\n• How do you say ... in English? — Hoe zeg je ... in Engels?",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">standaardzinnen</text>
<text x="20" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">Hello! · Good morning · Goodbye</text>
<text x="20" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">Thank you · Sorry · Excuse me</text>
<text x="20" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">What's your name? - My name is...</text>
<text x="20" y="113" fill="${COLORS.text}" font-size="11" font-family="Arial">How are you? - I'm fine.</text>
<text x="20" y="131" fill="${COLORS.text}" font-size="11" font-family="Arial">I don't understand.</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">deze ken je → 80% van gesprek</text>
</svg>`,
    checks: [
      {
        q: "Hoe antwoord je op **How are you?**",
        options: ["I'm fine, thank you.", "I'm 12 years old.", "My name is Sara.", "I'm from Amsterdam."],
        answer: 0,
        wrongHints: [null, "Antwoord op 'How old?'.", "Antwoord op 'What's your name?'.", "Antwoord op 'Where are you from?'."],
      },
      {
        q: "Wat betekent **You're welcome**?",
        options: ["Graag gedaan", "Welkom", "Je bent welkom thuis", "Goedemorgen"],
        answer: 0,
        wrongHints: [null, "Welkom = welcome (los).", "Letterlijk klopt, maar als reactie op 'thanks' = graag gedaan.", "Goedemorgen = good morning."],
      },
    ],
  },

  // D
  {
    title: "Eindtoets — alles door elkaar",
    explanation: "Tijd om alles te combineren. Vertaal of kies het beste antwoord.\n\n**Tip**: ken je het woord niet meer? Denk terug aan welk thema het hoort. Kun je 'm visualiseren? Dat helpt vaak.\n\n**Veel succes!**",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">final test</text>
<text x="150" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">eten · kleding · lichaam · familie</text>
<text x="150" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">school · huis · dieren · werkwoorden</text>
<text x="150" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">getallen · tijd · uitdrukkingen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">good luck!</text>
</svg>`,
    checks: [
      {
        q: "Welke is het **niet**: een familie-woord?",
        options: ["window", "mother", "uncle", "cousin"],
        answer: 0,
        wrongHints: [null, "Window = raam (huis).", "Mother = moeder.", "Uncle = oom.", "Cousin = neef/nicht."],
      },
      {
        q: "Wat betekent: *I'm wearing a red dress.*",
        options: ["Ik draag een rode jurk.", "Ik koop een rode jurk.", "Ik ben een rode jurk.", "Ik wil een rode jurk."],
        answer: 0,
        wrongHints: [null, "Wearing = dragend.", "Wear ≠ buy.", "Wearing ≠ I am.", "Wearing ≠ want."],
      },
      {
        q: "Hoe vertaal je: *My grandmother lives in a small house.*",
        options: ["Mijn oma woont in een klein huis.", "Mijn oma werkt in een klein huis.", "Mijn moeder woont in een groot huis.", "Mijn opa heeft een klein huis."],
        answer: 0,
        wrongHints: [null, "Lives = woont.", "Lives ≠ works.", "Mother ≠ grandmother. Small ≠ big.", "Has ≠ lives in."],
      },
      {
        q: "Welk woord hoort niet bij eten?",
        options: ["scarf", "bread", "milk", "egg"],
        answer: 0,
        wrongHints: [null, "Scarf = sjaal (kleding).", "Bread = brood.", "Milk = melk.", "Egg = ei."],
      },
      {
        q: "Wat is **Tuesday**?",
        options: ["dinsdag", "donderdag", "woensdag", "zaterdag"],
        answer: 0,
        wrongHints: [null, "Donderdag = Thursday.", "Woensdag = Wednesday.", "Zaterdag = Saturday."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const woordenschatEngels = {
  id: "woordenschat-engels",
  title: "Engelse woordenschat — basis",
  emoji: "📖",
  level: "klas1-2",
  subject: "engels",
  intro:
    "~80 basiswoorden in 8 thema's: eten, kleding, lichaam, familie, school, huis, dieren, werkwoorden + getallen, tijd en standaarduitdrukkingen. Genoeg voor dagelijks Engels.",
  triggerKeywords: [
    "woordenschat", "vocabulary", "engelse woorden",
    "eten engels", "drinken engels", "food",
    "kleding engels", "clothes",
    "lichaam engels", "body",
    "familie engels", "family",
    "school engels",
    "huis engels", "house", "home",
    "dieren engels", "animals",
    "werkwoorden engels", "verbs",
    "getallen engels", "numbers", "telwoorden",
    "tijd engels", "time", "what time",
    "begroeting", "hello",
    "dagen engels", "monday", "tuesday",
    "maanden engels", "january",
    "hoe zeg je in engels",
    "betekenis", "vertaal", "vertaling",
  ],
  chapters,
  steps,
};

export default woordenschatEngels;

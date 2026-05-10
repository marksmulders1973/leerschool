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
        uitlegPad: {
          stappen: [{ titel: "Twee elementen", tekst: "Thema = woorden bij elkaar (eten, kleding...). Herhalen = meerdere keren in een week (spaced repetition)." }],
          woorden: [{ woord: "spaced repetition", uitleg: "Herhalen met steeds langere tussenpozen — meest bewezen leertechniek." }],
          theorie: "Hersenen onthouden beter via: (1) groepering per thema, (2) herhaling met pauzes ertussen.",
          voorbeelden: [{ type: "schema", tekst: "Maandag eten-thema → woensdag herhaal → vrijdag herhaal." }],
          basiskennis: [{ onderwerp: "Cramming werkt niet", uitleg: "Alles in 1 dag stampen = vergeten binnen 1 week." }],
          niveaus: { basis: "Per thema + herhalen. A.", simpeler: "Beste manier = woorden per thema leren + ~3× herhalen verspreid over een week. Eén keer hardop is te weinig. = A.", nogSimpeler: "Thema + herhaal = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "bread = brood", tekst: "Bread = basiswoord. Vergelijk met Duits 'Brot', Nederlands 'brood' — zelfde stam." }],
          woorden: [{ woord: "bread", uitleg: "Brood. Onderdeel van breakfast (ontbijt)." }],
          theorie: "Eten-thema kerntalen: bread, butter, cheese, meat, fish, milk, water.",
          voorbeelden: [{ type: "zin", tekst: "I eat bread for breakfast = Ik eet brood als ontbijt." }],
          basiskennis: [{ onderwerp: "Verwarring", uitleg: "Bread (brood) ≠ butter (boter) ≠ meat (vlees)." }],
          niveaus: { basis: "Bread = brood. A.", simpeler: "B-r-e-a-d = brood. Onthoud: 'breakfast' = ontbijt, dat is vaak met bread. = A.", nogSimpeler: "Brood = A." },
        },
      },
      {
        q: "Hoe zeg je **avondeten** in Engels?",
        options: ["dinner", "breakfast", "lunch", "supper"],
        answer: 0,
        wrongHints: [null, "Breakfast = ontbijt.", "Lunch = lunch (middag).", "Supper kan, maar dinner is gangbaarder."],
        uitlegPad: {
          stappen: [{ titel: "Drie maaltijden", tekst: "Breakfast (ochtend), lunch (middag), dinner (avond). Supper = ouderwetser woord voor avondeten." }],
          woorden: [{ woord: "dinner", uitleg: "Avondeten — hoofdmaaltijd van de dag in modern Engels." }],
          theorie: "Maaltijd-tijdlijn: breakfast → lunch → dinner. Onthoud volgorde = onthoud betekenis.",
          voorbeelden: [{ type: "zin", tekst: "We have dinner at 6 PM = We eten avondeten om 18:00." }],
          basiskennis: [{ onderwerp: "Supper vs dinner", uitleg: "Supper = lichte avondmaaltijd, regionaal. Dinner = standaard." }],
          niveaus: { basis: "Avondeten = dinner. A.", simpeler: "Dag-volgorde: ontbijt (breakfast) → middag (lunch) → avond (dinner). = A.", nogSimpeler: "Dinner = A." },
        },
      },
      {
        q: "Wat is **fish**?",
        options: ["vis", "vlees", "fruit", "ei"],
        answer: 0,
        wrongHints: [null, "Vlees = meat.", "Fruit = fruit.", "Ei = egg."],
        uitlegPad: {
          stappen: [{ titel: "fish = vis", tekst: "Fish = vis. Klinkt bijna hetzelfde als 'vis' (alleen f→v)." }],
          woorden: [{ woord: "fish", uitleg: "Vis. Meervoud is meestal 'fish' (geen -s)." }],
          theorie: "Eet-soorten: meat (vlees), fish (vis), eggs (eieren), bread (brood), fruit (fruit).",
          voorbeelden: [{ type: "zin", tekst: "I like fish and chips = Ik hou van vis en frietjes." }],
          basiskennis: [{ onderwerp: "Geen meervoud", uitleg: "One fish, two fish — fish blijft fish (uitzondering)." }],
          niveaus: { basis: "Fish = vis. A.", simpeler: "F-I-S-H = vis. Klinkt op vis. (Vlees=meat, fruit=fruit, ei=egg). = A.", nogSimpeler: "Vis = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "shoes = schoenen", tekst: "Shoes klinkt bijna als 'schoes' (sjoes). Engels heeft -s voor meervoud — shoe → shoes." }],
          woorden: [{ woord: "shoes", uitleg: "Schoenen (meervoud van shoe)." }],
          theorie: "Voet-thema: shoes (schoenen), socks (sokken), boots (laarzen), sandals.",
          voorbeelden: [{ type: "zin", tekst: "My shoes are wet = Mijn schoenen zijn nat." }],
          basiskennis: [{ onderwerp: "Geen schoenpoets", uitleg: "Schoenpoets = shoe polish. Optie D bestaat niet als woord." }],
          niveaus: { basis: "Shoes = schoenen. A.", simpeler: "Shoes (sjoes) = schoenen. Sokken = socks (klinkt anders). = A.", nogSimpeler: "Schoenen = A." },
        },
      },
      {
        q: "Hoe zeg je **trui**?",
        options: ["sweater", "shirt", "skirt", "scarf"],
        answer: 0,
        wrongHints: [null, "Shirt = hemd / shirt.", "Skirt = rok.", "Scarf = sjaal."],
        uitlegPad: {
          stappen: [{ titel: "trui = sweater", tekst: "Sweater (US) of jumper (UK). Een trui die je aantrekt als 't koud is." }],
          woorden: [{ woord: "sweater", uitleg: "Trui. Komt van 'sweat' (zweten) — kleding die je warm maakt." }],
          theorie: "Strikvraag: sh-irt, sk-irt, sc-arf — drie woorden die op elkaar lijken. Lees scherp.",
          voorbeelden: [{ type: "zin", tekst: "Put on your sweater, it's cold = Doe je trui aan, het is koud." }],
          basiskennis: [{ onderwerp: "shirt vs skirt", uitleg: "Shirt = hemd. Skirt = rok. Maar 1 letter verschil!" }],
          niveaus: { basis: "Trui = sweater. A.", simpeler: "Trui = sweater (US) of jumper (UK). Shirt=hemd, skirt=rok, scarf=sjaal — andere kleding. = A.", nogSimpeler: "Sweater = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "foot → feet", tekst: "Onregelmatig meervoud: oo→ee. Foot wordt feet (geen -s)." }],
          woorden: [{ woord: "feet", uitleg: "Meervoud van foot (voet). Klanksprong oo→ee." }],
          theorie: "Onregelmatige meervouden: foot→feet, tooth→teeth, man→men, woman→women, child→children, mouse→mice.",
          voorbeelden: [{ type: "patroon", tekst: "One foot, two feet. One tooth, two teeth. One mouse, two mice." }],
          basiskennis: [{ onderwerp: "Geen -s", uitleg: "Bij onregelmatige meervouden NIET -s plakken. Foots/feets bestaat niet." }],
          niveaus: { basis: "Foot → feet. A.", simpeler: "Foot is onregelmatig — meervoud is feet (klanksprong oo→ee). Niet 'foots'. = A.", nogSimpeler: "Feet = A." },
        },
      },
      {
        q: "Hoe zeg je **broer** in Engels?",
        options: ["brother", "sister", "uncle", "cousin"],
        answer: 0,
        wrongHints: [null, "Sister = zus.", "Uncle = oom.", "Cousin = neef/nicht."],
        uitlegPad: {
          stappen: [{ titel: "broer = brother", tekst: "Brother en broer komen uit dezelfde Germaanse stam. Bro-ther / bro-er." }],
          woorden: [{ woord: "brother", uitleg: "Broer. Familie-thema." }],
          theorie: "Familie kerntermen: father (vader), mother (moeder), brother (broer), sister (zus).",
          voorbeelden: [{ type: "zin", tekst: "I have one brother = Ik heb één broer." }],
          basiskennis: [{ onderwerp: "Cousin", uitleg: "In Engels = neef én nicht (geen onderscheid)." }],
          niveaus: { basis: "Broer = brother. A.", simpeler: "Bro-ther lijkt op bro-er. Sister=zus, uncle=oom, cousin=neef/nicht. = A.", nogSimpeler: "Brother = A." },
        },
      },
      {
        q: "Wat betekent **mouth**?",
        options: ["mond", "neus", "oor", "kin"],
        answer: 0,
        wrongHints: [null, "Neus = nose.", "Oor = ear.", "Kin = chin."],
        uitlegPad: {
          stappen: [{ titel: "mouth = mond", tekst: "Mouth (mauth) = mond. M-klank zit erin: mouth, mond, mund (Duits)." }],
          woorden: [{ woord: "mouth", uitleg: "Mond. Onderdeel van het gezicht." }],
          theorie: "Gezicht-onderdelen: eyes (ogen), nose (neus), mouth (mond), ears (oren), chin (kin).",
          voorbeelden: [{ type: "zin", tekst: "Open your mouth, please = Doe je mond open, alsjeblieft." }],
          basiskennis: [{ onderwerp: "M-klank", uitleg: "Mond/mouth/mund — Germaanse talen delen veel basis-woorden." }],
          niveaus: { basis: "Mouth = mond. A.", simpeler: "Mouth begint met M, mond ook. Neus=nose, oor=ear, kin=chin. = A.", nogSimpeler: "Mond = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "home + work", tekst: "Homework = home (thuis) + work (werk) = thuiswerk = huiswerk." }],
          woorden: [{ woord: "homework", uitleg: "Huiswerk. Samengesteld woord: home + work." }],
          theorie: "School-woorden samengesteld: homework, classroom, schoolbook, textbook.",
          voorbeelden: [{ type: "zin", tekst: "I have a lot of homework today = Ik heb veel huiswerk vandaag." }],
          basiskennis: [{ onderwerp: "Geen telbaar", uitleg: "Homework is meestal ontelbaar — geen 'a homework' of 'homeworks'." }],
          niveaus: { basis: "Homework = huiswerk. A.", simpeler: "Home (thuis) + work (werk) = werk dat je thuis doet = huiswerk. = A.", nogSimpeler: "Huiswerk = A." },
        },
      },
      {
        q: "Hoe zeg je **gum** (om mee uit te wissen)?",
        options: ["eraser", "pencil", "pen", "ruler"],
        answer: 0,
        wrongHints: [null, "Pencil = potlood.", "Pen = pen.", "Ruler = liniaal."],
        uitlegPad: {
          stappen: [{ titel: "Pas op: 'gum'", tekst: "Engels 'gum' = kauwgom (chewing gum), NIET het schoolgum. Schoolgum = eraser (US) of rubber (UK)." }],
          woorden: [{ woord: "eraser", uitleg: "Gum (om uit te wissen). Komt van 'erase' (uitwissen)." }],
          theorie: "False friend: NL 'gum' ≠ EN 'gum'. Zelfde klank, andere betekenis.",
          voorbeelden: [{ type: "zin", tekst: "May I borrow your eraser? = Mag ik je gum lenen?" }],
          basiskennis: [{ onderwerp: "False friends", uitleg: "Woorden die identiek lijken maar anders betekenen: gum, hand, ring, kind." }],
          niveaus: { basis: "Gum = eraser. A.", simpeler: "Engels 'gum' is kauwgom! Schoolgum = eraser (uitwisser). = A.", nogSimpeler: "Eraser = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "kitchen = keuken", tekst: "Kitchen / keuken — beide K-klank. Plek waar je kookt." }],
          woorden: [{ woord: "kitchen", uitleg: "Keuken. Onderdeel van een huis." }],
          theorie: "Huis-kamers: kitchen (keuken), bathroom (badkamer), bedroom (slaapkamer), living room (woonkamer).",
          voorbeelden: [{ type: "zin", tekst: "She is cooking in the kitchen = Zij is aan het koken in de keuken." }],
          basiskennis: [{ onderwerp: "-room woorden", uitleg: "Veel kamers eindigen op '-room': bathroom, bedroom, classroom." }],
          niveaus: { basis: "Kitchen = keuken. A.", simpeler: "Kitchen begint met K, keuken ook. Plek om te koken. (Bathroom=badkamer). = A.", nogSimpeler: "Keuken = A." },
        },
      },
      {
        q: "Hoe zeg je **vogel** in Engels?",
        options: ["bird", "fish", "cat", "horse"],
        answer: 0,
        wrongHints: [null, "Fish = vis.", "Cat = kat.", "Horse = paard."],
        uitlegPad: {
          stappen: [{ titel: "vogel = bird", tekst: "Bird (burd) = vogel. Drie letters om te onthouden." }],
          woorden: [{ woord: "bird", uitleg: "Vogel. Dier dat kan vliegen." }],
          theorie: "Dieren-thema: bird (vogel), fish (vis), cat (kat), dog (hond), horse (paard).",
          voorbeelden: [{ type: "zin", tekst: "A little bird sings in the tree = Een klein vogeltje zingt in de boom." }],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "B-I-R-D — denk aan beeld van vogel met deze letters in zijn vleugels." }],
          niveaus: { basis: "Vogel = bird. A.", simpeler: "B-I-R-D = vogel. Vis=fish, kat=cat, paard=horse — andere dieren. = A.", nogSimpeler: "Bird = A." },
        },
      },
      {
        q: "Wat is het meervoud van **mouse**?",
        options: ["mice", "mouses", "mices", "mouse"],
        answer: 0,
        wrongHints: [null, "Onregelmatig: mouse → mice.", "Niet -s.", "Niet -s.", "Verschilt enkelvoud/mv."],
        uitlegPad: {
          stappen: [{ titel: "mouse → mice", tekst: "Onregelmatig: mouse (1) → mice (meerdere). Klanksprong ou→i." }],
          woorden: [{ woord: "mice", uitleg: "Meervoud van mouse (muis)." }],
          theorie: "Onregelmatige meervouden: mouse→mice, foot→feet, tooth→teeth, man→men.",
          voorbeelden: [{ type: "patroon", tekst: "One mouse, two mice. NIET 'two mouses'." }],
          basiskennis: [{ onderwerp: "Computer-muis", uitleg: "Voor de computer-muis kan zowel 'mice' als 'mouses' — beide goedgekeurd." }],
          niveaus: { basis: "Mouse → mice. A.", simpeler: "Mouse is onregelmatig — meervoud is mice (klanksprong ou→i). Niet 'mouses'. = A.", nogSimpeler: "Mice = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "to know = weten", tekst: "Know (no) — k is stom. Betekent 'weten' of 'kennen'." }],
          woorden: [{ woord: "to know", uitleg: "Weten of kennen. Onregelmatig: know-knew-known." }],
          theorie: "Denkende werkwoorden: know (weten), think (denken), believe (geloven), understand (begrijpen).",
          voorbeelden: [{ type: "zin", tekst: "I know the answer = Ik weet het antwoord." }],
          basiskennis: [{ onderwerp: "Stomme K", uitleg: "Bij know, knee, knife, knight wordt de K niet uitgesproken." }],
          niveaus: { basis: "Know = weten. A.", simpeler: "K-N-O-W (uitspraak: 'no') = weten. K is stom. Denken=think, zien=see. = A.", nogSimpeler: "Weten = A." },
        },
      },
      {
        q: "Hoe zeg je **werken**?",
        options: ["work", "play", "walk", "watch"],
        answer: 0,
        wrongHints: [null, "Play = spelen.", "Walk = lopen.", "Watch = kijken."],
        uitlegPad: {
          stappen: [{ titel: "werken = work", tekst: "Work (wurk) = werken. Korte W-W vergelijking." }],
          woorden: [{ woord: "to work", uitleg: "Werken. Regelmatig: work-worked-worked." }],
          theorie: "Vier W-werkwoorden lijken op elkaar: work (werken), walk (lopen), watch (kijken), wash (wassen). Lees scherp.",
          voorbeelden: [{ type: "zin", tekst: "My father works in a factory = Mijn vader werkt in een fabriek." }],
          basiskennis: [{ onderwerp: "Spel-truc", uitleg: "Work-Werken: beide W. Walk-Wandelen: beide W ook (verwarrend!)." }],
          niveaus: { basis: "Werken = work. A.", simpeler: "Vier W-werkwoorden: work (werken), play (spelen), walk (lopen), watch (kijken). Werken = work. = A.", nogSimpeler: "Work = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "fifteen = 15", tekst: "-teen achtervoegsel = tussen 13 en 19. Fif-teen = 15. Fif komt van five." }],
          woorden: [{ woord: "fifteen", uitleg: "15. Five (5) + teen-suffix = 15." }],
          theorie: "Engelse getallen: 5=five, 15=fifteen, 50=fifty, 500=five hundred. Verschillende achtervoegsels.",
          voorbeelden: [{ type: "patroon", tekst: "thir-teen (13), four-teen (14), fif-teen (15), six-teen (16), seven-teen (17)." }],
          basiskennis: [{ onderwerp: "Klemtoon", uitleg: "fif-TEEN (klemtoon achteraan) ≠ FIF-ty (klemtoon voor) — zo hoor je verschil." }],
          niveaus: { basis: "Fifteen = 15. A.", simpeler: "Fif (van five=5) + -teen achtervoegsel = 15. Fifty (-ty) = 50. = A.", nogSimpeler: "15 = A." },
        },
      },
      {
        q: "Hoe schrijf je **maandag** in Engels?",
        options: ["Monday", "monday", "Mounday", "Mondag"],
        answer: 0,
        wrongHints: [null, "Hoofdletter bij dagen!", "Spelfout.", "Geen Engels."],
        uitlegPad: {
          stappen: [{ titel: "Monday — hoofdletter", tekst: "Engelse dagen krijgen ALTIJD hoofdletter. Monday, Tuesday, Wednesday..." }],
          woorden: [{ woord: "Monday", uitleg: "Maandag. M-O-N-D-A-Y. Komt van 'Moon-day'." }],
          theorie: "Hoofdletter-regel Engels: dagen, maanden, landen, talen, namen — altijd kapitaal.",
          voorbeelden: [{ type: "regel", tekst: "Goed: I see her on Monday. Fout: I see her on monday." }],
          basiskennis: [{ onderwerp: "NL anders", uitleg: "Nederlands schrijft dagen klein (maandag). Engels altijd groot (Monday)." }],
          niveaus: { basis: "Monday (hoofdletter). A.", simpeler: "Engels heeft hoofdletter bij dagen. M-O-N-D-A-Y begint met grote M. = A.", nogSimpeler: "Monday = A." },
        },
      },
      {
        q: "Wat is **a quarter past three**?",
        options: ["3:15", "3:45", "2:45", "3:30"],
        answer: 0,
        wrongHints: [null, "Past = na. Kwartier na 3 = 3:15.", "Quarter to = 15 min vóór.", "Quarter to vóór een ander uur.", "Half past = 30 min."],
        uitlegPad: {
          stappen: [{ titel: "quarter past = kwart na", tekst: "Quarter (kwart=15 min) + past (na) + three (3) = 15 minuten na 3 = 3:15." }],
          woorden: [{ woord: "quarter", uitleg: "Kwart (1/4 = 15 minuten van 60)." }, { woord: "past", uitleg: "Na, voorbij." }],
          theorie: "Tijd-formules: quarter past X = X:15. Half past X = X:30. Quarter to X = (X-1):45.",
          voorbeelden: [{ type: "tijd", tekst: "Quarter past 5 = 5:15. Half past 5 = 5:30. Quarter to 5 = 4:45." }],
          basiskennis: [{ onderwerp: "Past vs to", uitleg: "Past = na (uur is al begonnen). To = naar (uur komt nog)." }],
          niveaus: { basis: "Quarter past 3 = 3:15. A.", simpeler: "Quarter (kwart=15min) + past (na) + 3 = 15 min NA 3 uur = 3:15. = A.", nogSimpeler: "3:15 = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Vraag-antwoord paren", tekst: "How are you? = Hoe gaat het? → I'm fine = Het gaat goed." }],
          woorden: [{ woord: "How are you", uitleg: "Begroeting-vraag, geen echt 'hoe-vraag'. Antwoord = 'I'm fine'." }],
          theorie: "Vraag→antwoord: How old? → age. Name? → name. Where from? → land. How are you? → fine.",
          voorbeelden: [{ type: "dialoog", tekst: "A: How are you? B: I'm fine, thank you. And you?" }],
          basiskennis: [{ onderwerp: "Standaardgesprek", uitleg: "Echt antwoord (slecht/blij/etc.) hoeft niet — beleefdheidsritueel." }],
          niveaus: { basis: "I'm fine, thank you. A.", simpeler: "How are you? = hoe gaat het? Standaardantwoord = I'm fine, thank you. = A.", nogSimpeler: "I'm fine = A." },
        },
      },
      {
        q: "Wat betekent **You're welcome**?",
        options: ["Graag gedaan", "Welkom", "Je bent welkom thuis", "Goedemorgen"],
        answer: 0,
        wrongHints: [null, "Welkom = welcome (los).", "Letterlijk klopt, maar als reactie op 'thanks' = graag gedaan.", "Goedemorgen = good morning."],
        uitlegPad: {
          stappen: [{ titel: "Reactie op 'thanks'", tekst: "You're welcome = standaard reactie op 'thank you' = graag gedaan." }],
          woorden: [{ woord: "you're welcome", uitleg: "Letterlijk: 'jij bent welkom'. In context: 'graag gedaan'." }],
          theorie: "Beleefdheid-paren: thank you ↔ you're welcome. (NL: bedankt ↔ graag gedaan).",
          voorbeelden: [{ type: "dialoog", tekst: "A: Thanks for your help. B: You're welcome." }],
          basiskennis: [{ onderwerp: "Niet letterlijk", uitleg: "Pas niet de letterlijke betekenis toe — context bepaalt." }],
          niveaus: { basis: "You're welcome = graag gedaan. A.", simpeler: "Als iemand 'thank you' zegt, antwoord je 'you're welcome' = graag gedaan. = A.", nogSimpeler: "Graag gedaan = A." },
        },
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
        uitlegPad: {
          stappen: [{ titel: "Welke hoort niet", tekst: "Window = raam (huis-thema). Mother/uncle/cousin = familie-woorden." }],
          woorden: [{ woord: "window", uitleg: "Raam — onderdeel van een huis, geen familie." }],
          theorie: "Categorie-vraag: zoek het woord dat NIET in de groep past. Hier 3 familie + 1 huis.",
          voorbeelden: [{ type: "groep", tekst: "Familie: father, mother, brother, sister, uncle, aunt, cousin, grandparents." }],
          basiskennis: [{ onderwerp: "FOUT-vraag", uitleg: "Vraag zoekt afwijker, niet de meerderheid. Lees scherp." }],
          niveaus: { basis: "Window = niet familie. A.", simpeler: "Mother (moeder), uncle (oom), cousin (neef/nicht) = familie. Window (raam) = huis. = A.", nogSimpeler: "Window = A." },
        },
      },
      {
        q: "Wat betekent: *I'm wearing a red dress.*",
        options: ["Ik draag een rode jurk.", "Ik koop een rode jurk.", "Ik ben een rode jurk.", "Ik wil een rode jurk."],
        answer: 0,
        wrongHints: [null, "Wearing = dragend.", "Wear ≠ buy.", "Wearing ≠ I am.", "Wearing ≠ want."],
        uitlegPad: {
          stappen: [{ titel: "Vertaal woord-voor-woord", tekst: "I'm = ik ben (bezig). Wearing = dragend. A red dress = een rode jurk. Samen: 'Ik draag een rode jurk'." }],
          woorden: [{ woord: "to wear", uitleg: "Dragen (kleding). Onregelmatig: wear-wore-worn." }],
          theorie: "Present continuous (I'm + -ing) = nu bezig zijn. I'm wearing = ik ben aan het dragen = ik draag.",
          voorbeelden: [{ type: "vorm", tekst: "I'm reading = ik lees. I'm wearing = ik draag. I'm eating = ik eet." }],
          basiskennis: [{ onderwerp: "Niet letterlijk 'I am'", uitleg: "I'm + werkwoord-ing ≠ 'ik ben een ...'. Het is een werkwoordsvorm." }],
          niveaus: { basis: "Ik draag een rode jurk. A.", simpeler: "I'm wearing = ik draag (nu). A red dress = een rode jurk. = Ik draag een rode jurk = A.", nogSimpeler: "Draag rode jurk = A." },
        },
      },
      {
        q: "Hoe vertaal je: *My grandmother lives in a small house.*",
        options: ["Mijn oma woont in een klein huis.", "Mijn oma werkt in een klein huis.", "Mijn moeder woont in een groot huis.", "Mijn opa heeft een klein huis."],
        answer: 0,
        wrongHints: [null, "Lives = woont.", "Lives ≠ works.", "Mother ≠ grandmother. Small ≠ big.", "Has ≠ lives in."],
        uitlegPad: {
          stappen: [{ titel: "Vertaal stuk voor stuk", tekst: "My grandmother = mijn oma. Lives = woont. In a small house = in een klein huis." }],
          woorden: [{ woord: "grandmother", uitleg: "Oma. Grand- (groot-) + mother (moeder)." }, { woord: "lives", uitleg: "Woont (van to live)." }],
          theorie: "Vertaaltruc: vertaal elk woord apart, dan plak ze samen.",
          voorbeelden: [{ type: "vertaling", tekst: "She lives in Amsterdam = Zij woont in Amsterdam." }],
          basiskennis: [{ onderwerp: "False friends", uitleg: "Lives ≠ leven (zelfstandig nw) maar = woont (werkwoord)." }],
          niveaus: { basis: "Mijn oma woont in een klein huis. A.", simpeler: "Grandmother=oma, lives=woont, small=klein, house=huis → 'Mijn oma woont in een klein huis'. = A.", nogSimpeler: "Oma + klein huis = A." },
        },
      },
      {
        q: "Welk woord hoort niet bij eten?",
        options: ["scarf", "bread", "milk", "egg"],
        answer: 0,
        wrongHints: [null, "Scarf = sjaal (kleding).", "Bread = brood.", "Milk = melk.", "Egg = ei."],
        uitlegPad: {
          stappen: [{ titel: "Welke hoort niet", tekst: "Bread (brood), milk (melk), egg (ei) = eten/drinken. Scarf (sjaal) = kleding." }],
          woorden: [{ woord: "scarf", uitleg: "Sjaal — kleding-thema, geen eten." }],
          theorie: "Categorie-vraag: 3 woorden in 1 thema, 1 in ander. Welke is de afwijker?",
          voorbeelden: [{ type: "groep", tekst: "Eten: bread, butter, cheese, meat, fish, fruit, milk, water." }],
          basiskennis: [{ onderwerp: "Snelle scan", uitleg: "Loop opties langs en categoriseer: kleding/eten/dier/etc. De afwijker valt op." }],
          niveaus: { basis: "Scarf = niet eten. A.", simpeler: "Bread=brood, milk=melk, egg=ei = eten/drinken. Scarf=sjaal = kleding. Afwijker = scarf. = A.", nogSimpeler: "Scarf = A." },
        },
      },
      {
        q: "Wat is **Tuesday**?",
        options: ["dinsdag", "donderdag", "woensdag", "zaterdag"],
        answer: 0,
        wrongHints: [null, "Donderdag = Thursday.", "Woensdag = Wednesday.", "Zaterdag = Saturday."],
        uitlegPad: {
          stappen: [{ titel: "Tuesday = dinsdag", tekst: "Volgorde dagen: Monday (ma), Tuesday (di), Wednesday (wo), Thursday (do)..." }],
          woorden: [{ woord: "Tuesday", uitleg: "Dinsdag — 2e dag van de werkweek." }],
          theorie: "Week-volgorde EN: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.",
          voorbeelden: [{ type: "ezelsbrug", tekst: "Tu (twee) + esday → 2e dag = dinsdag." }],
          basiskennis: [{ onderwerp: "Verwarring", uitleg: "Tuesday/Thursday lijken op elkaar (T-eind). Tuesday = di (2), Thursday = do (4)." }],
          niveaus: { basis: "Tuesday = dinsdag. A.", simpeler: "Volgorde: Monday (ma), Tuesday (di). Tuesday is de 2e dag = dinsdag. = A.", nogSimpeler: "Dinsdag = A." },
        },
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
  referentieNiveau: "A1/A2",
  sloThema: "Engels — basiswoordenschat per thema",
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

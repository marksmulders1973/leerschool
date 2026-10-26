// Leerpad: Engels — eerste woorden en zinnetjes (groep 5).
// Mark 26 okt 2026 (breedte-plan B5): Engels staat in de vakkenkaart van groep 5 ("op veel scholen
// start Engels hier"), maar er was geen pad → de tegel bleef leeg. Dit pad = de allereerste
// 20 vragen: groeten, kleuren en getallen, dieren, de klas. Niveau: onder A1, alleen horen/herkennen.
// Korte uitleg per stap, de woorden staan er steeds bij: een kind van 8 hoeft niets uit het hoofd te
// weten om mee te kunnen doen (ontwerpregel "vraag eerst, tekst waar nodig").

const chapters = [
  { letter: "A", title: "Hello! — groeten", emoji: "👋", from: 0, to: 0 },
  { letter: "B", title: "Kleuren en tellen", emoji: "🎨", from: 1, to: 1 },
  { letter: "C", title: "Dieren", emoji: "🐱", from: 2, to: 2 },
  { letter: "D", title: "In de klas", emoji: "✏️", from: 3, to: 3 },
];

const steps = [
  {
    title: "Hello! — groeten en jezelf voorstellen",
    explanation: "In het Engels zeg je **Hello!** als je iemand ziet, en **Bye!** als je weggaat. (Engels spreken ze in heel veel landen: Engeland, Amerika, Australië … en op vakantie bijna overal.)\n\n• **Hello** / **Hi** = hallo\n• **Bye** / **Goodbye** = dag, tot ziens\n• **Good morning** = goedemorgen\n• **Thank you** = dank je wel\n• **Please** = alsjeblieft\n• **Yes** = ja · **No** = nee\n\nJezelf voorstellen:\n• **My name is Sam.** = Mijn naam is Sam.\n• **I am 8.** = Ik ben 8 (jaar).",
    checks: [
      { q: "Wat zeg je in het Engels als je iemand **begroet**?", options: ["Hello", "Bye", "Please", "No"], answer: 0, wrongHints: [null, "Dat zeg je als je wéggaat.", "Dat betekent 'alsjeblieft'.", "Dat betekent 'nee'."] },
      { q: "Wat betekent **Thank you**?", options: ["Dank je wel", "Alsjeblieft", "Tot ziens", "Goedemorgen"], answer: 0, wrongHints: [null, "'Alsjeblieft' is 'please'.", "'Tot ziens' is 'bye'.", "'Goedemorgen' is 'good morning'."],
        uitlegPad: { stappen: [{ titel: "Thank you", tekst: "**Thank you** zeg je als iemand je iets geeft of helpt. Kort: **Thanks!**" }], woorden: [{ woord: "thank you", uitleg: "dank je wel" }], theorie: "Beleefde woordjes: thank you (dank je), please (alsjeblieft), sorry (sorry).", voorbeelden: [{ type: "stap", tekst: "Je krijgt een koekje: 'Thank you!'" }], basiskennis: [{ onderwerp: "Please", uitleg: "'Please' zet je bij een vraag: 'A cookie, please.'" }], niveaus: { basis: "Dank je wel.", simpeler: "Thank you = dank je wel.", nogSimpeler: "dank je" } } },
      { q: "Je gaat naar huis. Wat zeg je?", options: ["Bye!", "Hello!", "Yes!", "Thank you!"], answer: 0, wrongHints: [null, "Dat zeg je als je iemand net ziet.", "Dat betekent 'ja'.", "Dat is 'dank je wel' — zeg je bij weggaan 'dank je wel' of 'dag'?"] },
      { q: "Hoe zeg je *'Mijn naam is Sam'* in het Engels?", options: ["My name is Sam.", "I am Sam is.", "Sam name my.", "Name is Sam my."], answer: 0, wrongHints: [null, "Kijk naar de volgorde in de uitleg: My name is …", "De woorden staan door elkaar. Zoek de zin in de uitleg.", "Begin met 'My'."] },
      { q: "Wat betekent **Yes**?", options: ["Ja", "Nee", "Dag", "Alsjeblieft"], answer: 0, wrongHints: [null, "'Nee' is 'no'.", "'Dag' is 'bye'.", "'Alsjeblieft' is 'please'."] },
    ],
  },
  {
    title: "Colours and numbers — kleuren en tellen tot 10",
    explanation: "**Kleuren**:\n• red = rood · blue = blauw · yellow = geel · green = groen\n• black = zwart · white = wit · orange = oranje · pink = roze\n\n**Tellen tot 10**:\n• one, two, three, four, five\n• six, seven, eight, nine, ten\n\nSamen: **three red cars** = drie rode auto's (de kleur staat vóór het ding, net als in het Nederlands).",
    checks: [
      { q: "Welke kleur is **blue**?", options: ["blauw", "groen", "geel", "zwart"], answer: 0, wrongHints: [null, "Groen is 'green'.", "Geel is 'yellow'.", "Zwart is 'black'."] },
      { q: "Hoe zeg je **geel** in het Engels?", options: ["yellow", "green", "white", "red"], answer: 0, wrongHints: [null, "'Green' is groen.", "'White' is wit.", "'Red' is rood."] },
      { q: "Wat is **three**?", options: ["3", "2", "8", "10"], answer: 0, wrongHints: [null, "Two is 2.", "Eight is 8.", "Ten is 10."] },
      { q: "Tel in het Engels: one, two, three, four, **…**?", options: ["five", "six", "seven", "ten"], answer: 0, wrongHints: [null, "Six is 6, dat komt ná 5.", "Seven is 7.", "Ten is 10, de laatste van het rijtje."],
        uitlegPad: { stappen: [{ titel: "Tellen tot 10", tekst: "one (1), two (2), three (3), four (4), **five (5)**, six (6), seven (7), eight (8), nine (9), ten (10)." }], woorden: [{ woord: "five", uitleg: "5" }], theorie: "Tellen gaat in het Engels net als in het Nederlands, alleen de woorden zijn anders.", voorbeelden: [{ type: "stap", tekst: "Vijf vingers: one, two, three, four, five." }], basiskennis: [{ onderwerp: "four / for", uitleg: "'Four' (4) klinkt als 'for' — let op de spelling met u." }], niveaus: { basis: "five.", simpeler: "Na four komt five (5).", nogSimpeler: "five" } } },
      { q: "Wat betekent **two green frogs**?", options: ["twee groene kikkers", "drie groene kikkers", "twee rode kikkers", "twee groene honden"], answer: 0, wrongHints: [null, "'Two' is 2, niet 3.", "'Green' is groen, niet rood.", "'Frogs' zijn kikkers, geen honden."] },
    ],
  },
  {
    title: "Animals — dieren",
    explanation: "**Dieren**:\n• cat = kat · dog = hond · bird = vogel · fish = vis\n• horse = paard · cow = koe · pig = varken · sheep = schaap\n• rabbit = konijn · mouse = muis · frog = kikker\n\nZinnetjes:\n• **I have a dog.** = Ik heb een hond.\n• **The cat is black.** = De kat is zwart.\n• **I like horses.** = Ik hou van paarden.",
    checks: [
      { q: "Welk dier is een **dog**?", options: ["hond", "kat", "koe", "vis"], answer: 0, wrongHints: [null, "Kat is 'cat'.", "Koe is 'cow'.", "Vis is 'fish'."] },
      { q: "Hoe zeg je **paard** in het Engels?", options: ["horse", "house", "mouse", "pig"], answer: 0, wrongHints: [null, "'House' is een huis — lijkt erop, maar één letter anders.", "'Mouse' is een muis.", "'Pig' is een varken."] },
      { q: "Welk dier zegt **mieuw**? Kies het Engelse woord.", options: ["cat", "cow", "bird", "sheep"], answer: 0, wrongHints: [null, "Een koe zegt boe.", "Een vogel fluit.", "Een schaap zegt bèèh."] },
      { q: "Wat betekent **I have a rabbit**?", options: ["Ik heb een konijn", "Ik zie een konijn", "Ik heb een kikker", "Jij hebt een konijn"], answer: 0, wrongHints: [null, "'Have' is hebben, niet zien.", "'Rabbit' is een konijn; een kikker is 'frog'.", "'I' is ik, niet jij."] },
      { q: "Welk woord hoort **niet** bij de dieren?", options: ["blue", "fish", "mouse", "bird"], answer: 0, wrongHints: [null, "'Fish' is een vis — dat is een dier.", "'Mouse' is een muis — dat is een dier.", "'Bird' is een vogel — dat is een dier."] },
    ],
  },
  {
    title: "In the classroom — in de klas",
    explanation: "**Spullen in de klas**:\n• pen = pen · pencil = potlood · book = boek · bag = tas\n• table = tafel · chair = stoel · door = deur · window = raam\n\n**Mensen**:\n• teacher = juf of meester · friend = vriend(in) · boy = jongen · girl = meisje\n\nZinnetjes:\n• **Open your book.** = Doe je boek open.\n• **Sit down.** = Ga zitten. · **Stand up.** = Ga staan.\n• **Can I have a pencil, please?** = Mag ik een potlood, alsjeblieft?",
    checks: [
      { q: "Wat is een **pencil**?", options: ["potlood", "pen", "boek", "tas"], answer: 0, wrongHints: [null, "Een pen is 'pen' — bijna hetzelfde woord, maar 'pencil' is langer.", "Een boek is 'book'.", "Een tas is 'bag'."] },
      { q: "De juf zegt: **Sit down.** Wat doe je?", options: ["Je gaat zitten", "Je gaat staan", "Je doet je boek open", "Je gaat naar buiten"], answer: 0, wrongHints: [null, "Staan is 'stand up'.", "Dat is 'open your book'.", "'Down' is naar beneden — wat doe je dan met je lijf?"] },
      { q: "Hoe zeg je **juf of meester** in het Engels?", options: ["teacher", "friend", "girl", "boy"], answer: 0, wrongHints: [null, "'Friend' is een vriend.", "'Girl' is een meisje.", "'Boy' is een jongen."] },
      { q: "Wat betekent **Open your book**?", options: ["Doe je boek open", "Pak je tas", "Doe de deur open", "Lees je boek"], answer: 0, wrongHints: [null, "'Book' is een boek, geen tas.", "'Book' is een boek, geen deur ('door').", "'Open' is opendoen, niet lezen ('read')."] },
      { q: "Welk woord hoort bij een **raam**?", options: ["window", "door", "table", "chair"], answer: 0, wrongHints: [null, "'Door' is een deur.", "'Table' is een tafel.", "'Chair' is een stoel."],
        uitlegPad: { stappen: [{ titel: "Window", tekst: "**Window** = raam. Je kijkt erdoor naar buiten." }], woorden: [{ woord: "window", uitleg: "raam" }, { woord: "door", uitleg: "deur" }], theorie: "Klas-woorden: window (raam), door (deur), table (tafel), chair (stoel).", voorbeelden: [{ type: "stap", tekst: "'Look out of the window!' = Kijk uit het raam!" }], basiskennis: [{ onderwerp: "Wind", uitleg: "Window begint met 'wind' — de wind komt door het raam." }], niveaus: { basis: "window.", simpeler: "Raam = window.", nogSimpeler: "window" } } },
    ],
  },
];

const engelsEersteWoordenG5 = {
  id: "engels-eerste-woorden-g5",
  title: "Engels — eerste woorden en zinnetjes (groep 5)",
  emoji: "🇬🇧",
  level: "groep5",
  subject: "engels",
  referentieNiveau: "pre-A1",
  sloThema: "Engels — eerste woorden (Early-English groep 5)",
  prerequisites: [],
  intro: "De allereerste Engelse woorden voor groep 5: hallo zeggen, kleuren en tellen tot 10, dieren en de klas. De woorden staan er steeds bij — je hoeft niets uit je hoofd te weten om mee te doen.",
  triggerKeywords: [
    "engels groep 5", "eerste woorden engels", "engels beginners",
    "hello", "colours", "numbers", "animals", "classroom",
    "kleuren engels", "tellen engels", "dieren engels", "klas engels",
  ],
  chapters,
  steps,
};

export default engelsEersteWoordenG5;

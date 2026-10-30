// Leerpad: Basis-grammatica Engels — groep 6-8.
// Mark 2026-05-14: tweede Engels-PO pad zodat tegel niet meer leeg is.
// Dekt brugklas-overgang: a/an, plural, this/that, am/is/are, present simple.

const COLORS = {
  curve: "#69b2ff",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

const stepEmojis = ["📖", "🔢", "👉", "🤝", "🏃", "❓", "🏆"];

const chapters = [
  { letter: "A", title: "a/an + meervoud + this/that", emoji: "📖", from: 0, to: 2 },
  { letter: "B", title: "to be (am/is/are)", emoji: "🤝", from: 3, to: 3 },
  { letter: "C", title: "Present simple + vragen", emoji: "🏃", from: 4, to: 5 },
  { letter: "D", title: "Eindopdracht — alles samen", emoji: "🏆", from: 6, to: 6 },
];

const steps = [
  {
    title: "A / An — onbepaald lidwoord",
    explanation: "In het Engels gebruik je **a** of **an** voor 'een':\n\n• **a** vóór medeklinker-klank: a book, a cat, a dog, a tree, a house\n• **an** vóór klinker-klank: an apple, an egg, an idea, an orange, an umbrella\n\n**Let op klanken**, niet letters:\n• an hour (h is stom — klinker-klank) ✓\n• a university (u klinkt als 'jou' — medeklinker-klank) ✓\n\n**Voor meervoud** geen lidwoord:\n• a book → books (geen 'a books')\n• an apple → apples",
    checks: [
      {
        q: "Welk lidwoord zet je voor **één** apple?",
        options: ["an", "a", "the", "geen"],
        answer: 0,
        wrongHints: [null, "Zeg 'a apple' eens hardop. Met welke klank begint 'apple'?", "'The' betekent 'de' of 'het'. Hier staat 'één' — welk woord betekent 'een'?", "Er staat 'één' — dan heb je wél een lidwoord nodig."],
        uitlegPad: {
          stappen: [{ titel: "Klinker = an", tekst: "'Apple' begint met de 'a'-klank (klinker), dus 'an apple'. Andere voorbeelden: an egg, an orange, an idea." }],
          woorden: [{ woord: "an", uitleg: "een — vóór klinkerklank" }, { woord: "a", uitleg: "een — vóór medeklinkerklank" }],
          theorie: "Truc: spreek het woord uit. Begint het met a/e/i/o/u-klank? → an. Anders → a.",
          voorbeelden: [{ type: "tabel", tekst: "an apple, an egg, an ice cream, an orange, an umbrella" }, { type: "tabel", tekst: "a book, a cat, a dog, a friend" }],
          basiskennis: [{ onderwerp: "Klank, niet letter", uitleg: "'an hour' (h stom) maar 'a university' (u = 'jou')." }],
          niveaus: { basis: "an.", simpeler: "Apple begint met klinker → an apple.", nogSimpeler: "an = klinker." },
        },
      },
      { q: "Welk lidwoord zet je voor **één** book?", options: ["a", "an", "the", "any"], answer: 0, wrongHints: [null, "Zeg 'an book' eens hardop. Met welke klank begint 'book'?", "'The' betekent 'de' of 'het', niet 'een'.", "'Any' betekent 'enig' of 'wat'. Hier staat 'één' — welk woord betekent 'een'?"] },
      { q: "Welke is **fout**?", options: ["a egg", "an egg", "a book", "an apple"], answer: 0, wrongHints: [null, "Kijk: 'an' + klinker — past dat?", "'a' + medeklinker — controleer of dat klopt.", "Kijk hoe het woord begint en welk lidwoord ervoor staat."] },
      { q: "*'Het meisje heeft een hond.'* → 'She has __ dog.'", options: ["a", "an", "the", "no"], answer: 0, wrongHints: [null, "Zeg 'an dog' eens hardop. Met welke klank begint 'dog'?", "'The' betekent 'de' of 'het'. In de zin staat 'een'.", "'No' betekent 'geen'. Heeft het meisje wel of geen hond?"] },
      { q: "*'I have an orange.'* — Welke vertaling?", options: ["Ik heb een sinaasappel.", "Ik heb sinaasappels.", "De sinaasappel is van mij.", "Ik heb geen sinaasappel."], answer: 0, wrongHints: [null, "'An' betekent 'een': dat is er maar één. Staat er iets over meer sinaasappels?", "Staat er in de Engelse zin iets van 'is van mij'? Kijk naar 'I have'.", "Staat er een woord als 'no' of 'not' in de zin?"] },
    ],
  },
  {
    title: "Plural — meervoud",
    explanation: "**Standaard meervoud**: voeg **-s** toe.\n• book → books\n• cat → cats\n• apple → apples\n\n**Eindigt op s / ss / sh / ch / x / o**: voeg **-es** toe.\n• bus → buses\n• box → boxes\n• watch → watches\n• potato → potatoes\n\n**Eindigt op y na medeklinker**: y → ies\n• baby → babies\n• city → cities\n• country → countries\n\n**Onregelmatig** (uit hoofd):\n• child → children\n• man → men\n• woman → women\n• foot → feet\n• tooth → teeth\n• mouse → mice\n• fish → fish (zelfde!)\n• sheep → sheep (zelfde!)",
    checks: [
      { q: "Wat is het meervoud van **book**?", options: ["books", "bookes", "booken", "book"], answer: 0, wrongHints: [null, "Eindigt 'book' op s, sh, ch, x of o? Zo niet, dan is -es te veel.", "Dat is de Nederlandse manier (boeken). Hoe maak je in het Engels meervoud?", "Je hebt er meer dan één. Blijft het woord dan helemaal hetzelfde?"] },
      { q: "Wat is het meervoud van **box**?", options: ["boxes", "boxs", "boxen", "box"], answer: 0, wrongHints: [null, "Zeg 'boxs' eens hardop. Dat gaat bijna niet — wat heb je na een x nodig?", "Dat is de Nederlandse manier (dozen). Hoe maak je in het Engels meervoud?", "Je hebt er meer dan één. Blijft het woord dan helemaal hetzelfde?"] },
      { q: "Wat is het meervoud van **baby**?", options: ["babies", "babys", "babyes", "baby"], answer: 0, wrongHints: [null, "Kijk naar de letter vóór de y. Is dat een klinker of een medeklinker?", "Bijna — maar de y verandert eerst in iets anders. Kijk naar city → cities.", "Je hebt er meer dan één. Blijft het woord dan helemaal hetzelfde?"] },
      { q: "Wat is het meervoud van **child**?", options: ["children", "childs", "childrens", "childes"], answer: 0, wrongHints: [null, "Child is onregelmatig: je plakt er geen -s achter. Kijk in het rijtje 'uit hoofd'.", "Bijna! Maar het meervoud is al klaar zonder extra -s.", "Child eindigt niet op s, sh, ch of x. En het is bovendien onregelmatig."] },
      { q: "Wat is het meervoud van **fish**?", options: ["fish", "fishen", "fish's", "fishs"], answer: 0, wrongHints: [null, "Engels maakt geen meervoud met -en zoals het Nederlands.", "Een apostrof gebruik je voor bezit (Tom's), niet voor meervoud.", "Fish is bijzonder: kijk in het rijtje 'uit hoofd'."] },
    ],
  },
  {
    title: "This / That / These / Those",
    explanation: "**Aanwijzen** in het Engels:\n\n| Enkelvoud | Meervoud | Afstand |\n|-----------|----------|---------|\n| this (dit/deze) | these (deze) | dichtbij |\n| that (dat/die) | those (die) | ver weg |\n\n**Voorbeelden**:\n• This is my book. (dit boek dat ik vasthoud)\n• That is your car. (die auto daar verderop)\n• These are my friends. (deze vrienden dichtbij)\n• Those are big trees. (die bomen daar)\n\n**Truc**: this/these = HIER · that/those = DAAR.",
    checks: [
      { q: "Vul in: *'__ is my book.'* Het gaat om het boek dat ik vasthoud.", options: ["This", "That", "These", "Those"], answer: 0, wrongHints: [null, "'That' gebruik je voor iets ver weg. Houd ik het boek vast, of ligt het verderop?", "'These' is meervoud. Om hoeveel boeken gaat het?", "'Those' is meervoud én ver weg. Hoeveel boeken, en waar zijn ze?"] },
      { q: "Vul in: *'Look at __ birds in the tree.'* Het gaat om meerdere vogels ver weg.", options: ["those", "that", "these", "this"], answer: 0, wrongHints: [null, "'That' is enkelvoud. Hoeveel vogels zijn het?", "'These' gebruik je voor dichtbij. Waar zitten de vogels?", "'This' is enkelvoud én dichtbij. Hoeveel vogels, en waar?"] },
      { q: "Wat is het meervoud van **this**?", options: ["these", "those", "thises", "this"], answer: 0, wrongHints: [null, "Dat is het meervoud van 'that' (ver weg). 'This' is juist dichtbij.", "Je plakt er geen -es achter: het meervoud is een apart woord. Kijk in de tabel.", "Er staat 'meervoud'. Blijft het woord dan hetzelfde?"] },
      { q: "Hoe zeg je **die auto** (verderop) in het Engels?", options: ["that car", "this car", "those car", "these car"], answer: 0, wrongHints: [null, "'This' is voor dichtbij. Staat de auto dichtbij of verderop?", "'Those' is meervoud. Om hoeveel auto's gaat het?", "'These' is meervoud én dichtbij. Hoeveel auto's, en waar?"] },
      { q: "Hoe zeg je **deze appels** (in mijn mand) in het Engels?", options: ["these apples", "this apples", "those apples", "that apples"], answer: 0, wrongHints: [null, "'This' is enkelvoud. Hoeveel appels zijn het?", "'Those' is voor ver weg. Waar zijn de appels?", "'That' is enkelvoud én ver weg. Hoeveel appels, en waar?"] },
    ],
  },
  {
    title: "To be — am / is / are",
    explanation: "Het werkwoord **'to be'** (zijn) is onregelmatig:\n\n| Onderwerp | Vorm | NL |\n|-----------|------|-----|\n| I | **am** | ik ben |\n| You | **are** | jij bent / jullie zijn |\n| He / She / It | **is** | hij/zij/het is |\n| We | **are** | wij zijn |\n| They | **are** | zij zijn |\n\n**Voorbeelden**:\n• I am happy. (Ik ben blij.)\n• She is tall. (Zij is lang.)\n• They are friends. (Zij zijn vrienden.)\n• We are at home. (Wij zijn thuis.)\n\n**Korte vormen** (samentrekkingen):\n• I am → I'm\n• You are → You're\n• He is → He's\n• We are → We're\n• They are → They're\n• It is → It's",
    checks: [
      { q: "Vul in: 'I __ a student.'", options: ["am", "is", "are", "be"], answer: 0, wrongHints: [null, "'Is' hoort bij he, she en it. Gaat de zin over hem, haar of het?", "'Are' hoort bij you, we en they. Gaat de zin over jou, ons of hen?", "'Be' is het hele werkwoord. Na 'I' gebruik je een vervoegde vorm uit de tabel."] },
      { q: "Vul in: 'She __ my sister.'", options: ["is", "am", "are", "be"], answer: 0, wrongHints: [null, "'Am' hoort alleen bij 'I'. Gaat de zin over mij?", "'Are' hoort bij you, we en they. 'She' is één persoon.", "'Be' is het hele werkwoord. Na 'she' gebruik je een vervoegde vorm uit de tabel."] },
      { q: "Vul in: 'They __ in the park.'", options: ["are", "am", "is", "be"], answer: 0, wrongHints: [null, "'Am' hoort alleen bij 'I'. Wie is hier het onderwerp?", "'Is' hoort bij één persoon of ding (he, she, it). 'They' zijn er meer.", "'Be' is het hele werkwoord. Na 'they' gebruik je een vervoegde vorm uit de tabel."] },
      { q: "Wat is de korte vorm van **He is**?", options: ["He's", "Hes", "He're", "Heis"], answer: 0, wrongHints: [null, "Hier zijn 'He' en 'is' aan elkaar geplakt. Je moet laten zien dat er een letter is weggevallen: welk teken gebruik je daarvoor?", "'re is de korte vorm van 'are'. Staat er hier 'is' of 'are'?", "Dit is geen korte vorm: 'He' en 'is' staan er nog helemaal. Welke letter valt weg?"] },
      { q: "Vul in: 'We __ at school.'", options: ["are", "is", "am", "be"], answer: 0, wrongHints: [null, "'Is' hoort bij één persoon of ding (he, she, it). 'We' zijn er meer.", "'Am' hoort alleen bij 'I'. Wie is hier het onderwerp?", "'Be' is het hele werkwoord. Na 'we' gebruik je een vervoegde vorm uit de tabel."] },
    ],
  },
  {
    title: "Present simple — tegenwoordige tijd",
    explanation: "Voor **gewoontes / feiten** gebruik je present simple.\n\n**Vorm**: onderwerp + werkwoord (+ s bij he/she/it)\n\n| Onderwerp | Werkwoord | Voorbeeld |\n|-----------|-----------|-----------|\n| I / You / We / They | play | I play football. |\n| He / She / It | play**s** | She plays piano. |\n\n**Signaalwoorden**: always, usually, often, sometimes, never, every day.\n\n**Voorbeelden**:\n• I read books. (Ik lees boeken.)\n• He plays football. (Hij speelt voetbal.)\n• We go to school. (Wij gaan naar school.)\n• She likes cats. (Zij houdt van katten.)\n\n**Let op -s**:\n• do → does (uitzondering)\n• go → goes\n• fly → flies (y na medeklinker → ies)\n• study → studies",
    checks: [
      { q: "Vul in: 'I __ books.' (read)", options: ["read", "reads", "reading", "readed"], answer: 0, wrongHints: [null, "De -s krijg je alleen bij he, she en it. Wie is hier het onderwerp?", "Met -ing hoort er 'am' voor. Staat dat in de zin?", "Zo maak je in het Engels geen vorm van 'read'. De zin gaat over nu."] },
      { q: "Vul in: 'She __ the piano.' (play)", options: ["plays", "play", "playing", "played"], answer: 0, wrongHints: [null, "Kijk naar het onderwerp: she. Wat gebeurt er dan met het werkwoord?", "Met -ing hoort er 'is' voor. Staat dat in de zin?", "Dat is verleden tijd. Gaat de zin over vroeger of over nu?"] },
      { q: "Vul in: 'We __ to school.' (go)", options: ["go", "goes", "going", "gone"], answer: 0, wrongHints: [null, "De -s krijg je alleen bij he, she en it. Wie is hier het onderwerp?", "Met -ing hoort er 'are' voor. Staat dat in de zin?", "'Gone' betekent 'gegaan'. Gaat de zin over vroeger of over nu?"] },
      { q: "Vul in: 'He __ chess.' (play)", options: ["plays", "play", "playing", "played"], answer: 0, wrongHints: [null, "Kijk naar het onderwerp: he. Wat gebeurt er dan met het werkwoord?", "Met -ing hoort er 'is' voor. Staat dat in de zin?", "Dat is verleden tijd. Gaat de zin over vroeger of over nu?"] },
      { q: "Welk signaalwoord past bij present simple?", options: ["always", "now", "yesterday", "tomorrow"], answer: 0, wrongHints: [null, "'Now' gaat over dit moment. Present simple gaat over wat je gewoonlijk doet.", "'Yesterday' is gisteren: dat is verleden tijd.", "'Tomorrow' is morgen: dat is toekomst."] },
    ],
  },
  {
    title: "Vragen + ontkenning",
    explanation: "**Vragen** maken in present simple met **do/does**:\n\n• **Do** + I / you / we / they + werkwoord?\n  *'Do you play football?'*\n• **Does** + he / she / it + werkwoord (zonder -s)?\n  *'Does she play piano?'*\n\n**Ontkenning** met **don't / doesn't**:\n• I / you / we / they: **don't** + werkwoord\n  *'I don't like fish.'*\n• He / she / it: **doesn't** + werkwoord (zonder -s)\n  *'She doesn't eat meat.'*\n\n**Antwoord op ja/nee-vraag**:\n• Do you like cats? → Yes, I do. / No, I don't.\n• Does he play? → Yes, he does. / No, he doesn't.\n\n**Vraagwoorden**:\n• What = wat · Where = waar · When = wanneer\n• Who = wie · Why = waarom · How = hoe",
    checks: [
      { q: "Maak de vraag af: *'__ you like apples?'*", options: ["Do", "Does", "Are", "Is"], answer: 0, wrongHints: [null, "'Does' hoort bij he, she en it. Wie is hier het onderwerp?", "'Are' is een vorm van 'to be' (zijn). Staat er hier 'zijn' of 'like'?", "'Is' is een vorm van 'to be' (zijn). Welk hulpwerkwoord hoort bij 'like'?"] },
      { q: "Maak de vraag af: *'__ she play tennis?'*", options: ["Does", "Do", "Is", "Are"], answer: 0, wrongHints: [null, "Bij he, she en it verandert het hulpwerkwoord. Welke vorm hoort daarbij?", "'Is' is een vorm van 'to be' (zijn). Hier staat 'play', geen 'zijn'.", "'Are' is een vorm van 'to be' (zijn). Welk hulpwerkwoord hoort bij 'play'?"] },
      { q: "Maak de ontkenning af: *'I __ like fish.'*", options: ["don't", "doesn't", "am not", "isn't"], answer: 0, wrongHints: [null, "Deze vorm hoort bij he, she en it. Wie is hier het onderwerp?", "'Am not' hoort bij 'to be' (zijn). Hier staat 'like'.", "'Isn't' hoort bij 'to be' (zijn) én bij he, she, it. Hier staat 'I' en 'like'."] },
      { q: "Wat betekent **Where**?", options: ["waar", "wat", "wanneer", "waarom"], answer: 0, wrongHints: [null, "what = wat.", "when = wanneer.", "why = waarom."] },
      { q: "Wat is een goed antwoord op *'Do you like cats?'*", options: ["Yes, I do.", "Yes, I am.", "Yes, I have.", "Yes, please."], answer: 0, wrongHints: [null, "'Yes, I am' past bij een vraag die met 'are' begint (to be). Met welk woord begint deze vraag?", "'Yes, I have' past bij een vraag die met 'have' begint. Met welk woord begint deze vraag?", "'Yes, please' zeg je als iemand je iets aanbiedt. Hier wordt gevraagd of je katten leuk vindt."] },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "Mix-toets over a/an + meervoud + this/that + am-is-are + present simple + vragen.\n\n**Tip**: bij twijfel, vraag jezelf:\n1. Klinker of medeklinker? → a/an\n2. Enkelvoud of meervoud?\n3. Ik / jij/wij/zij / hij-zij-het? → am / are / is\n4. Gewoon werkwoord + -s bij he/she/it? → play / plays",
    checks: [
      { q: "Welke is **fout**?", options: ["She play piano.", "She plays piano.", "I play piano.", "They play piano."], answer: 0, wrongHints: [null, "Kijk naar het onderwerp + werkwoordvorm.", "Deze zin is juist — I/we/you/they krijgen géén -s. Zoek de zin met he/she/it + verkeerd werkwoord.", "Deze zin is juist — I/we/you/they krijgen géén -s. Zoek de zin met he/she/it + verkeerd werkwoord."] },
      { q: "Vul in: '__ apple a day keeps the doctor away.'", options: ["An", "A", "The", "Some"], answer: 0, wrongHints: [null, "Met welke klank begint 'apple'? Zeg 'a apple' eens hardop.", "'The' betekent 'de'. Gaat het hier om 'de appel' of om 'een appel per dag'?", "'Some' betekent 'wat' of 'een paar'. Gaat het hier om één appel?"] },
      { q: "Wat is het meervoud van **woman**?", options: ["women", "womans", "womens", "woman"], answer: 0, wrongHints: [null, "Woman is onregelmatig: je plakt er geen -s achter. Denk aan man → men.", "Bijna! Maar het meervoud is al klaar zonder extra -s.", "Je hebt er meer dan één. Blijft het woord dan hetzelfde? Denk aan man → men."] },
      { q: "Vul in: 'My brother __ tall.' (to be)", options: ["is", "are", "am", "be"], answer: 0, wrongHints: [null, "'Are' hoort bij you, we en they. 'My brother' is één persoon: hij.", "'Am' hoort alleen bij 'I'. Gaat de zin over mij?", "'Be' is het hele werkwoord. 'My brother' is hij: welke vorm hoort daarbij?"] },
      { q: "Maak de vraag af: *'__ they go to school?'*", options: ["Do", "Does", "Is", "Are"], answer: 0, wrongHints: [null, "'Does' hoort bij he, she en it. Wie is hier het onderwerp?", "'Is' is een vorm van 'to be' (zijn). Hier staat 'go'.", "'Are' is een vorm van 'to be' (zijn). Welk hulpwerkwoord hoort bij 'go'?"] },
      { q: "Welk woord betekent **wanneer**?", options: ["When", "Where", "Why", "What"], answer: 0, wrongHints: [null, "Where = waar.", "Why = waarom.", "What = wat."] },
      { q: "Hoe zeg je **die boom daar** (ver weg) in het Engels?", options: ["that tree", "this tree", "those tree", "these tree"], answer: 0, wrongHints: [null, "'This' is voor dichtbij. Staat de boom dichtbij of daar verderop?", "'Those' is meervoud. Om hoeveel bomen gaat het?", "'These' is meervoud én dichtbij. Hoeveel bomen, en waar?"] },
      { q: "Vertaal: *'Ik heb een hond.'*", options: ["I have a dog.", "I have an dog.", "I has a dog.", "I am a dog."], answer: 0, wrongHints: [null, "Zeg 'an dog' eens hardop. Met welke klank begint 'dog'?", "De -s bij 'has' hoort bij he, she en it. Wie is hier het onderwerp?", "'Am' betekent 'ben'. Ben ik een hond, of heb ik een hond?"] },
      { q: "Maak de ontkenning af: *'He __ eat meat.'*", options: ["doesn't", "don't", "isn't", "aren't"], answer: 0, wrongHints: [null, "'Don't' hoort bij I, you, we en they. Wie is hier het onderwerp?", "'Isn't' hoort bij 'to be' (zijn). Hier staat 'eat'.", "'Aren't' hoort bij 'to be' (zijn) én bij meervoud. Hier staat 'he' en 'eat'."] },
      { q: "Wanneer gebruik je **a** en wanneer **an**?", options: ['a + medeklinker / an + klinker', 'an + medeklinker / a + klinker', 'a + enkelvoud / an + meervoud', 'a + kort woord / an + lang woord'], answer: 0, wrongHints: [null, 'Zeg \'an car\' en \'a apple\' eens hardop. Klinkt dat soepel?', 'Vóór meervoud zet je geen a of an. Waar hangt de keuze dan wel van af?', 'Denk aan \'a dog\' en \'an elephant\'. Gaat het echt om de lengte van het woord?'] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const basisGrammaticaEngelsPo = {
  id: "basis-grammatica-engels-po",
  title: "Basis-grammatica Engels (groep 6-8)",
  emoji: "📖",
  level: "groep6-8",
  subject: "engels",
  referentieNiveau: "A1",
  sloThema: "Engels — grammatica basis",
  prerequisites: [
    { id: "woordenschat-engels-po", title: "Woordenschat Engels (basis)", niveau: "po-A1" },
  ],
  intro:
    "Engelse grammatica voor groep 6-8 — a/an, meervoud (incl. children/men/feet), this/that/these/those, am/is/are, present simple + -s-regel, do/does-vragen + don't/doesn't-ontkenning, vraagwoorden. Voorbereiding op brugklas-Engels (CEFR-niveau A1).",
  triggerKeywords: [
    "grammatica engels", "english grammar basis",
    "a an the", "lidwoord engels",
    "meervoud engels", "plural english",
    "this that these those",
    "to be am is are",
    "present simple",
    "do does", "don't doesn't",
    "vraagwoorden engels", "wh-words",
  ],
  chapters,
  steps,
};

export default basisGrammaticaEngelsPo;

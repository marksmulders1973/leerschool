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
        q: "Welk lidwoord komt voor **apple**?",
        options: ["an", "a", "the", "geen"],
        answer: 0,
        wrongHints: [null, "Niet — 'apple' begint met klinkerklank.", "Wel mogelijk maar de vraag is over 'een' (a/an).", "Wel — 'een appel'."],
        uitlegPad: {
          stappen: [{ titel: "Klinker = an", tekst: "'Apple' begint met de 'a'-klank (klinker), dus 'an apple'. Andere voorbeelden: an egg, an orange, an idea." }],
          woorden: [{ woord: "an", uitleg: "een — vóór klinkerklank" }, { woord: "a", uitleg: "een — vóór medeklinkerklank" }],
          theorie: "Truc: spreek het woord uit. Begint het met a/e/i/o/u-klank? → an. Anders → a.",
          voorbeelden: [{ type: "tabel", tekst: "an apple, an egg, an ice cream, an orange, an umbrella" }, { type: "tabel", tekst: "a book, a cat, a dog, a friend" }],
          basiskennis: [{ onderwerp: "Klank, niet letter", uitleg: "'an hour' (h stom) maar 'a university' (u = 'jou')." }],
          niveaus: { basis: "an.", simpeler: "Apple begint met klinker → an apple.", nogSimpeler: "an = klinker." },
        },
      },
      { q: "Welk lidwoord komt voor **book**?", options: ["a", "an", "the", "any"], answer: 0, wrongHints: [null, "Niet — book begint met medeklinker.", "Niet vraag.", "Niet — any = enig."] },
      { q: "Welke is **fout**?", options: ["a egg", "an egg", "a book", "an apple"], answer: 0, wrongHints: [null, "Kijk: 'an' + klinker — past dat?", "'a' + medeklinker — controleer of dat klopt.", "Kijk hoe het woord begint en welk lidwoord ervoor staat."] },
      { q: "*'Het meisje heeft een hond.'* → 'She has __ dog.'", options: ["a", "an", "the", "no"], answer: 0, wrongHints: [null, "Dog begint met medeklinker.", "Wel mogelijk maar 'een' vraagt om a/an.", "Niet — geen ontkenning."] },
      { q: "*'I have an orange.'* — Welke vertaling?", options: ["Ik heb een sinaasappel.", "Ik heb sinaasappels.", "De sinaasappel is van mij.", "Ik heb geen sinaasappel."], answer: 0, wrongHints: [null, "Niet — 'an' is enkelvoud.", "Andere zinsbouw.", "Geen ontkenning."] },
    ],
  },
  {
    title: "Plural — meervoud",
    explanation: "**Standaard meervoud**: voeg **-s** toe.\n• book → books\n• cat → cats\n• apple → apples\n\n**Eindigt op s / ss / sh / ch / x / o**: voeg **-es** toe.\n• bus → buses\n• box → boxes\n• watch → watches\n• potato → potatoes\n\n**Eindigt op y na medeklinker**: y → ies\n• baby → babies\n• city → cities\n• country → countries\n\n**Onregelmatig** (uit hoofd):\n• child → children\n• man → men\n• woman → women\n• foot → feet\n• tooth → teeth\n• mouse → mice\n• fish → fish (zelfde!)\n• sheep → sheep (zelfde!)",
    checks: [
      { q: "Meervoud van **book**?", options: ["books", "bookes", "bookies", "book"], answer: 0, wrongHints: [null, "Niet — alleen -s.", "Niet.", "Wel meervoud."] },
      { q: "Meervoud van **box**?", options: ["boxes", "boxs", "boxies", "box"], answer: 0, wrongHints: [null, "Niet — eindigt op x → -es.", "Niet bestaand.", "Wel meervoud."] },
      { q: "Meervoud van **baby**?", options: ["babies", "babys", "babes", "baby"], answer: 0, wrongHints: [null, "Niet — y na medeklinker → -ies.", "Niet.", "Wel meervoud."] },
      { q: "Meervoud van **child**?", options: ["children", "childs", "childes", "childies"], answer: 0, wrongHints: [null, "Niet — onregelmatig.", "Bestaat niet.", "Niet."] },
      { q: "Meervoud van **fish**?", options: ["fish", "fishes", "fishies", "fishs"], answer: 0, wrongHints: [null, "Soms ook 'fishes' (verschillende soorten) maar standaard 'fish'.", "Niet primair.", "Niet bestaand."] },
    ],
  },
  {
    title: "This / That / These / Those",
    explanation: "**Aanwijzen** in Engels:\n\n| Enkelvoud | Meervoud | Afstand |\n|-----------|----------|---------|\n| this (dit/deze) | these (deze) | dichtbij |\n| that (dat/die) | those (die) | ver weg |\n\n**Voorbeelden**:\n• This is my book. (dit boek dat ik vasthoud)\n• That is your car. (die auto daar verderop)\n• These are my friends. (deze vrienden dichtbij)\n• Those are big trees. (die bomen daar)\n\n**Truc**: this/these = HIER · that/those = DAAR.",
    checks: [
      { q: "*'__ is my book.'* — boek dat ik vasthoud", options: ["This", "That", "These", "Those"], answer: 0, wrongHints: [null, "Niet — that is ver weg.", "Niet — meervoud.", "Niet."] },
      { q: "*'Look at __ birds in the tree.'* — meerdere vogels ver weg", options: ["those", "that", "these", "this"], answer: 0, wrongHints: [null, "Niet — enkelvoud.", "Niet — dichtbij.", "Niet."] },
      { q: "Meervoud van **this**?", options: ["these", "thats", "thoses", "this"], answer: 0, wrongHints: [null, "Niet bestaand.", "Niet.", "Wel meervoud."] },
      { q: "Vertaal: **die auto** (verderop)", options: ["that car", "this car", "those car", "these car"], answer: 0, wrongHints: [null, "Niet — dichtbij.", "Niet — meervoud.", "Niet."] },
      { q: "Vertaal: **deze appels** (in mijn mand)", options: ["these apples", "this apples", "those apples", "that apples"], answer: 0, wrongHints: [null, "Niet — meervoud nodig.", "Niet — ver.", "Niet — enkelvoud."] },
    ],
  },
  {
    title: "To be — am / is / are",
    explanation: "Het werkwoord **'to be'** (zijn) is onregelmatig:\n\n| Onderwerp | Vorm | NL |\n|-----------|------|-----|\n| I | **am** | ik ben |\n| You | **are** | jij bent / jullie zijn |\n| He / She / It | **is** | hij/zij/het is |\n| We | **are** | wij zijn |\n| They | **are** | zij zijn |\n\n**Voorbeelden**:\n• I am happy. (Ik ben blij.)\n• She is tall. (Zij is lang.)\n• They are friends. (Zij zijn vrienden.)\n• We are at home. (Wij zijn thuis.)\n\n**Korte vormen** (samentrekkingen):\n• I am → I'm\n• You are → You're\n• He is → He's\n• We are → We're\n• They are → They're\n• It is → It's",
    checks: [
      { q: "Vul in: 'I __ a student.'", options: ["am", "is", "are", "be"], answer: 0, wrongHints: [null, "Niet — is = hij/zij/het.", "Niet — are = jij/wij/zij.", "Hele werkwoord, niet vervoegd."] },
      { q: "Vul in: 'She __ my sister.'", options: ["is", "am", "are", "be"], answer: 0, wrongHints: [null, "Niet — am = ik.", "Niet — are = jij/wij/zij.", "Hele werkwoord."] },
      { q: "Vul in: 'They __ in the park.'", options: ["are", "am", "is", "be"], answer: 0, wrongHints: [null, "Niet — am = ik.", "Niet — is = hij/zij/het.", "Hele werkwoord."] },
      { q: "Wat is de korte vorm van **He is**?", options: ["He's", "Hes", "He're", "Heis"], answer: 0, wrongHints: [null, "Apostrof vergeten.", "Niet — that's 'are'.", "Niet samengetrokken."] },
      { q: "Vul in: 'We __ at school.'", options: ["are", "is", "am", "be"], answer: 0, wrongHints: [null, "Niet — is = enkelvoud.", "Niet — am = ik.", "Hele werkwoord."] },
    ],
  },
  {
    title: "Present simple — tegenwoordige tijd",
    explanation: "Voor **gewoontes / feiten** gebruik je present simple.\n\n**Vorm**: onderwerp + werkwoord (+ s bij he/she/it)\n\n| Onderwerp | Werkwoord | Voorbeeld |\n|-----------|-----------|-----------|\n| I / You / We / They | play | I play football. |\n| He / She / It | play**s** | She plays piano. |\n\n**Signaalwoorden**: always, usually, often, sometimes, never, every day.\n\n**Voorbeelden**:\n• I read books. (Ik lees boeken.)\n• He plays football. (Hij speelt voetbal.)\n• We go to school. (Wij gaan naar school.)\n• She likes cats. (Zij houdt van katten.)\n\n**Let op -s**:\n• do → does (special)\n• go → goes\n• fly → flies (y na medeklinker → ies)\n• study → studies",
    checks: [
      { q: "Vul in: 'I __ books.' (read)", options: ["read", "reads", "reading", "readed"], answer: 0, wrongHints: [null, "Niet — alleen bij he/she/it.", "Continuous — niet hier.", "Bestaat niet."] },
      { q: "Vul in: 'She __ piano.' (play)", options: ["plays", "play", "playing", "played"], answer: 0, wrongHints: [null, "Niet — vergeet -s bij she.", "Continuous.", "Verleden tijd."] },
      { q: "Vul in: 'We __ to school.' (go)", options: ["go", "goes", "going", "gone"], answer: 0, wrongHints: [null, "Niet — alleen bij he/she/it.", "Continuous.", "Voltooid deelwoord."] },
      { q: "Vul in: 'He __ chess.' (play)", options: ["plays", "play", "playing", "played"], answer: 0, wrongHints: [null, "Niet — vergeet -s bij he.", "Continuous.", "Verleden."] },
      { q: "Welk signaalwoord past bij present simple?", options: ["always", "now", "yesterday", "tomorrow"], answer: 0, wrongHints: [null, "Continuous of present.", "Verleden tijd.", "Toekomst."] },
    ],
  },
  {
    title: "Vragen + ontkenning",
    explanation: "**Vragen** maken in present simple met **do/does**:\n\n• **Do** + I / you / we / they + werkwoord?\n  *'Do you play football?'*\n• **Does** + he / she / it + werkwoord (zonder -s)?\n  *'Does she play piano?'*\n\n**Ontkenning** met **don't / doesn't**:\n• I / you / we / they: **don't** + werkwoord\n  *'I don't like fish.'*\n• He / she / it: **doesn't** + werkwoord (zonder -s)\n  *'She doesn't eat meat.'*\n\n**Antwoord op ja/nee-vraag**:\n• Do you like cats? → Yes, I do. / No, I don't.\n• Does he play? → Yes, he does. / No, he doesn't.\n\n**Vraagwoorden**:\n• What = wat · Where = waar · When = wanneer\n• Who = wie · Why = waarom · How = hoe",
    checks: [
      { q: "Vraag: *'__ you like apples?'*", options: ["Do", "Does", "Are", "Is"], answer: 0, wrongHints: [null, "Niet — does = he/she/it.", "Niet — geen 'to be'.", "Niet."] },
      { q: "Vraag: *'__ she play tennis?'*", options: ["Does", "Do", "Is", "Are"], answer: 0, wrongHints: [null, "Niet — bij she gebruik je does.", "Niet 'to be'.", "Niet."] },
      { q: "Ontkenning: *'I __ like fish.'*", options: ["don't", "doesn't", "am not", "isn't"], answer: 0, wrongHints: [null, "Niet — bij ik gebruik je don't.", "Voor 'to be'.", "Voor 'to be'."] },
      { q: "Wat betekent **Where**?", options: ["waar", "wat", "wanneer", "waarom"], answer: 0, wrongHints: [null, "what = wat.", "when = wanneer.", "why = waarom."] },
      { q: "Antwoord op 'Do you like cats?'", options: ["Yes, I do.", "Yes, I am.", "Yes, I have.", "Yes, please."], answer: 0, wrongHints: [null, "Niet — bij 'to be'-vraag.", "Niet — bij 'have'-vraag.", "Te beleefd, geen ja/nee."] },
    ],
  },
  {
    title: "Eindopdracht — alles samen",
    explanation: "Mix-toets over a/an + meervoud + this/that + am-is-are + present simple + vragen.\n\n**Tip**: bij twijfel, vraag jezelf:\n1. Klinker of medeklinker? → a/an\n2. Enkelvoud of meervoud?\n3. Ik / jij/wij/zij / hij-zij-het? → am / are / is\n4. Gewone werkwoord + -s bij he/she/it? → play / plays",
    checks: [
      { q: "Welke is **fout**?", options: ["She play piano.", "She plays piano.", "I play piano.", "They play piano."], answer: 0, wrongHints: [null, "Kijk naar het onderwerp + werkwoordvorm.", "Klopt I/we/you/they zonder -s?", "Klopt I/we/you/they zonder -s?"] },
      { q: "Vul in: '__ apple a day keeps the doctor away.'", options: ["An", "A", "The", "Some"], answer: 0, wrongHints: [null, "Niet — klinkerklank.", "Niet — context vraagt om 'een'.", "Niet — niet 'wat appel'."] },
      { q: "Meervoud van **woman**?", options: ["women", "womans", "womens", "womies"], answer: 0, wrongHints: [null, "Niet — onregelmatig.", "Niet.", "Niet."] },
      { q: "Vul in: 'My brother __ tall.' (to be)", options: ["is", "are", "am", "be"], answer: 0, wrongHints: [null, "Niet — are = jij/wij/zij.", "Niet — am = ik.", "Hele werkwoord."] },
      { q: "Vraag: *'__ they go to school?'*", options: ["Do", "Does", "Is", "Are"], answer: 0, wrongHints: [null, "Niet — does = he/she/it.", "Niet 'to be'.", "Niet 'to be'."] },
      { q: "Welk woord betekent **wanneer**?", options: ["When", "Where", "Why", "What"], answer: 0, wrongHints: [null, "Where = waar.", "Why = waarom.", "What = wat."] },
      { q: "Welk woord wijst aan op afstand: **die boom daar**?", options: ["that tree", "this tree", "those tree", "these tree"], answer: 0, wrongHints: [null, "Niet — dichtbij.", "Meervoud — fout.", "Meervoud — fout."] },
      { q: "Vertaal: *'Ik heb een hond.'*", options: ["I have a dog.", "I have an dog.", "I has a dog.", "I am a dog."], answer: 0, wrongHints: [null, "Niet — medeklinker → a.", "Niet — I have, niet I has.", "Niet — 'am' is 'ben'."] },
      { q: "Ontkenning: 'He __ eat meat.'", options: ["doesn't", "don't", "isn't", "aren't"], answer: 0, wrongHints: [null, "Niet — don't = I/you/we/they.", "Voor 'to be'.", "Voor 'to be'."] },
      { q: "Welke 2 vormen kan **a/an** voor staan?", options: ["a + medeklinker / an + klinker", "an + alles", "a + alles", "a + meervoud"], answer: 0, wrongHints: [null, "Niet — a voor medeklinker.", "Niet — an voor klinker.", "Geen lidwoord vóór meervoud."] },
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

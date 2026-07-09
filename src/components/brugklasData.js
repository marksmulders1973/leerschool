// Brugklas-oefenbundel (klas 1 havo/vwo) — printbaar. Ontstaan uit een concreet
// gebruikersverzoek op het wensenbord (Sahasra, 2026-07-09: "maak een PDF voor
// havo/vwo klas 1, ik heb toetsweek"). Echt vraagsignaal naar onderbouw-VO-
// oefenstof (de klas 1-3-gap). Eigen oefenvragen "in stijl van" de brugklas —
// geen overgenomen toetsvragen. Drie kernvakken die in klas 1 het vaakst een
// toets krijgen: wiskunde, Nederlands en Engels.
//
// Format per hoofdstuk: { titel, emoji, vragen: [{ q, options, answer, uitleg }] }
// `answer` = index in options. Antwoorden staan bewust op wisselende posities
// (niet altijd A), zodat de geprinte sleutel niet te raden is.

const BRUGKLAS_HOOFDSTUKKEN = [
  {
    titel: "Wiskunde — rekenen & getallen",
    emoji: "📐",
    vragen: [
      {
        q: "Reken uit: **−3 + 8**",
        options: ["−5", "5", "−11", "11"],
        answer: 1,
        uitleg: "Begin bij −3 en ga 8 stappen omhoog: −3 → 5.",
      },
      {
        q: "Reken uit: **3 + 4 × 2**",
        options: ["14", "11", "10", "24"],
        answer: 1,
        uitleg: "Eerst keer, dan plus: 4×2 = 8, daarna 3 + 8 = 11.",
      },
      {
        q: "Wat is **2⁴** (2 tot de macht 4)?",
        options: ["8", "6", "16", "24"],
        answer: 2,
        uitleg: "2×2×2×2 = 16. De macht zegt hoe vaak je 2 met zichzelf vermenigvuldigt.",
      },
      {
        q: "Reken uit: **−4 × 3**",
        options: ["12", "−1", "−12", "7"],
        answer: 2,
        uitleg: "min × plus = min. 4×3 = 12, dus het antwoord is −12.",
      },
      {
        q: "Hoeveel is **20% van 60**?",
        options: ["6", "30", "12", "120"],
        answer: 2,
        uitleg: "10% van 60 = 6, dus 20% = 2 × 6 = 12.",
      },
      {
        q: "3 balpennen kosten samen **€1,20**. Wat kosten **5** balpennen?",
        options: ["€1,80", "€2,00", "€2,40", "€1,50"],
        answer: 1,
        uitleg: "1 pen = €1,20 ÷ 3 = €0,40. Dan 5 × €0,40 = €2,00.",
      },
      {
        q: "Wat is de **oppervlakte** van een rechthoek van 5 bij 3 cm?",
        options: ["8 cm²", "16 cm²", "15 cm²", "15 cm"],
        answer: 2,
        uitleg: "Oppervlakte = lengte × breedte = 5 × 3 = 15 cm² (let op: vierkante cm).",
      },
      {
        q: "Reken uit: **½ + ¼**",
        options: ["⅔", "¾", "⅜", "1"],
        answer: 1,
        uitleg: "Maak gelijknamig: ½ = 2/4. Dan 2/4 + 1/4 = 3/4 (= ¾).",
      },
    ],
  },
  {
    titel: "Nederlands — taal & spelling",
    emoji: "✍️",
    vragen: [
      {
        q: "Wat is de **persoonsvorm** in: 'De hond blaft hard.'?",
        options: ["hond", "blaft", "hard", "De"],
        answer: 1,
        uitleg: "De persoonsvorm is het werkwoord dat verandert met de tijd: blaft (nu) → blafte (verleden).",
      },
      {
        q: "Vul in: 'Zij ___ de winnaar.'  (word / wordt)",
        options: ["word", "wordt", "words", "wort"],
        answer: 1,
        uitleg: "3e persoon enkelvoud (zij) = stam + t: word → wordt.",
      },
      {
        q: "Welke woordsoort is **'snelle'** in 'de snelle auto'?",
        options: ["zelfstandig naamwoord", "werkwoord", "bijvoeglijk naamwoord", "lidwoord"],
        answer: 2,
        uitleg: "Het zegt iets over het zelfstandig naamwoord (auto) → bijvoeglijk naamwoord.",
      },
      {
        q: "Wat is het **onderwerp** in: 'Morgen speelt Sam buiten.'?",
        options: ["Morgen", "speelt", "Sam", "buiten"],
        answer: 2,
        uitleg: "Vraag: wie speelt? → Sam. Dat is het onderwerp.",
      },
      {
        q: "Verleden tijd: 'Gisteren ___ ik hard.'  (werken → )",
        options: ["werk", "werkte", "werkten", "werkt"],
        answer: 1,
        uitleg: "'t kofschip: de stam 'werk' eindigt op k → verleden tijd met -te: werkte.",
      },
      {
        q: "Verleden tijd van **'racen'** (ik ___):",
        options: ["raceerde", "racede", "racete", "racte"],
        answer: 2,
        uitleg: "Stam = race, de klank eindigt op een sisklank (hoort bij 't kofschip) → -te: racete.",
      },
      {
        q: "Welk woord is een **lidwoord**?",
        options: ["huis", "de", "groot", "lopen"],
        answer: 1,
        uitleg: "Lidwoorden zijn: de, het en een.",
      },
      {
        q: "Hoeveel **zelfstandige naamwoorden** staan in: 'De kat drinkt melk.'?",
        options: ["1", "2", "3", "0"],
        answer: 1,
        uitleg: "kat en melk zijn zelfstandige naamwoorden (dingen of wezens): dat zijn er 2.",
      },
    ],
  },
  {
    titel: "Engels — grammar",
    emoji: "🇬🇧",
    vragen: [
      {
        q: "She ___ to school every day.",
        options: ["go", "goes", "going", "gone"],
        answer: 1,
        uitleg: "Present simple, 3e persoon (she/he/it): werkwoord + s → goes.",
      },
      {
        q: "They ___ very happy today.",
        options: ["is", "am", "are", "be"],
        answer: 2,
        uitleg: "they → are.  (I am · he/she/it is · we/you/they are.)",
      },
      {
        q: "Choose the correct article:  '___ apple'.",
        options: ["a", "an", "the one", "some"],
        answer: 1,
        uitleg: "Voor een klinkerklank (a-e-i-o-u) gebruik je 'an': an apple.",
      },
      {
        q: "Look! He ___ very fast.  (to run)",
        options: ["run", "runs", "is running", "ran"],
        answer: 2,
        uitleg: "'Look!' = nu bezig → present continuous: is + werkwoord + -ing = is running.",
      },
      {
        q: "___ you like pizza?",
        options: ["Does", "Do", "Is", "Are"],
        answer: 1,
        uitleg: "Vraag in present simple met 'you' → Do you like…?",
      },
      {
        q: "One child, two ___.",
        options: ["childs", "children", "childes", "child"],
        answer: 1,
        uitleg: "'child' heeft een onregelmatig meervoud: children.",
      },
      {
        q: "I ___ like spiders.  (negatief)",
        options: ["doesn't", "not", "don't", "am not"],
        answer: 2,
        uitleg: "Present simple met 'I' → don't: I don't like spiders.",
      },
      {
        q: "We ___ football on Saturdays.",
        options: ["plays", "playing", "play", "are play"],
        answer: 2,
        uitleg: "we → play. Alleen he/she/it krijgt de extra -s.",
      },
    ],
  },
];

export default BRUGKLAS_HOOFDSTUKKEN;

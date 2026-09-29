// Kwartiercheck — groep 5 (medio groep 5 = januari/februari).
// Ontwerp + niveaus: docs/kwartiercheck/CONCEPTEN-PER-GROEP.md § 4.
// Niveau 1 = basis (stof die er al in moet zitten, ook in september eerlijk).
// Niveau 2 = toepassen (stof van halverwege groep 5, in een verhaaltje of lastiger vorm).
// Per concept minstens 3 × niveau 1 (1 + bevestiging + reserve) en 2 × niveau 2.
// Eigen vragen, "in de stijl van" — niets overgenomen uit toetsen of methodes.

const concepten = [
  {
    id: "g5-getallen-tot-1000",
    label: "Getallen tot 1000",
    vak: "rekenen",
    leerpadId: "schatten-afronden",
    leerpadTitel: "Schatten en afronden",
  },
  {
    id: "g5-plus-min-tot-1000",
    label: "Plus en min tot 1000",
    vak: "rekenen",
    leerpadId: "cijferend-rekenen",
    leerpadTitel: "Cijferend rekenen",
  },
  {
    id: "g5-tafels-en-delen",
    label: "Alle tafels en delen",
    vak: "rekenen",
    leerpadId: "tafels-po",
    leerpadTitel: "Tafels & vermenigvuldigen",
  },
  {
    id: "g5-klok-en-tijd",
    label: "Klokkijken en tijdsduur",
    vak: "rekenen",
    leerpadId: "klokkijken",
    leerpadTitel: "Klokkijken",
  },
  {
    id: "g5-spelling",
    label: "Spelling: lange woorden",
    vak: "taal",
    leerpadId: "spelling-overige-po",
    leerpadTitel: "Spelling",
  },
  {
    id: "g5-woordsoorten",
    label: "Woordsoorten: naamwoord, werkwoord, bijvoeglijk",
    vak: "taal",
    leerpadId: "woordsoorten-po",
    leerpadTitel: "Woordsoorten herkennen",
  },
  {
    id: "g5-woordenschat",
    label: "Woordenschat: hetzelfde en het tegenovergestelde",
    vak: "taal",
    leerpadId: "synoniemen-tegenstellingen-po",
    leerpadTitel: "Synoniemen en tegenstellingen",
  },
  {
    id: "g5-tekst-begrijpen",
    label: "Een tekst begrijpen: wie, wat en waarom",
    vak: "begrijpend-lezen",
    leerpadId: "begrijpend-lezen-strategie",
    leerpadTitel: "Leer eerst de aanpak",
  },
];

const vragen = [
  // ─── GETALLEN TOT 1000 ─────────────────────────────────────────
  {
    id: "g5-getallen-1a", concept: "g5-getallen-tot-1000", niveau: 1,
    vraag: "Welk getal is het grootst?",
    opties: ["708", "870", "780", "87"],
    correct: 1,
  },
  {
    id: "g5-getallen-1b", concept: "g5-getallen-tot-1000", niveau: 1,
    vraag: "Hoe schrijf je 'vierhonderdzeven' in cijfers?",
    opties: ["470", "4007", "407", "47"],
    correct: 2,
  },
  {
    id: "g5-getallen-1c", concept: "g5-getallen-tot-1000", niveau: 1,
    vraag: "Hoeveel honderdtallen zitten er in 562?",
    opties: ["5", "6", "2", "56"],
    correct: 0,
  },
  {
    id: "g5-getallen-1d", concept: "g5-getallen-tot-1000", niveau: 1,
    vraag: "Een ijsje kost € 2,50. Hoeveel is dat?",
    opties: ["2 euro en 5 cent", "25 euro", "250 euro", "2 euro en 50 cent"],
    correct: 3,
  },
  {
    id: "g5-getallen-2a", concept: "g5-getallen-tot-1000", niveau: 2,
    vraag: "Rond 649 af op honderdtallen.",
    opties: ["700", "640", "600", "650"],
    correct: 2,
  },
  {
    id: "g5-getallen-2b", concept: "g5-getallen-tot-1000", niveau: 2,
    vraag: "Welk getal ligt het dichtst bij 500?",
    opties: ["450", "489", "538", "560"],
    correct: 1,
  },
  {
    id: "g5-getallen-2c", concept: "g5-getallen-tot-1000", niveau: 2,
    vraag: "Welk getal is 10 meer dan 395?",
    opties: ["405", "396", "495", "415"],
    correct: 0,
  },

  // ─── PLUS EN MIN TOT 1000 ──────────────────────────────────────
  {
    id: "g5-plusmin-1a", concept: "g5-plus-min-tot-1000", niveau: 1,
    vraag: "73 − 28 = ?",
    opties: ["55", "45", "51", "44"],
    correct: 1,
  },
  {
    id: "g5-plusmin-1b", concept: "g5-plus-min-tot-1000", niveau: 1,
    vraag: "46 + 38 = ?",
    opties: ["74", "714", "84", "85"],
    correct: 2,
  },
  {
    id: "g5-plusmin-1c", concept: "g5-plus-min-tot-1000", niveau: 1,
    vraag: "350 + 200 = ?",
    opties: ["550", "370", "650", "552"],
    correct: 0,
  },
  {
    id: "g5-plusmin-1d", concept: "g5-plus-min-tot-1000", niveau: 1,
    vraag: "700 − 250 = ?",
    opties: ["550", "350", "400", "450"],
    correct: 3,
  },
  {
    id: "g5-plusmin-2a", concept: "g5-plus-min-tot-1000", niveau: 2,
    vraag: "Sanne spaart voor een skateboard van 125 euro. Ze heeft al 68 euro. Hoeveel euro moet ze nog sparen?",
    opties: ["67", "193", "57", "63"],
    correct: 2,
  },
  {
    id: "g5-plusmin-2b", concept: "g5-plus-min-tot-1000", niveau: 2,
    vraag: "Op school zitten 238 kinderen. Na de zomer komen er 45 nieuwe kinderen bij. Hoeveel kinderen zitten er dan op school?",
    opties: ["273", "283", "683", "293"],
    correct: 1,
  },
  {
    id: "g5-plusmin-2c", concept: "g5-plus-min-tot-1000", niveau: 2,
    vraag: "In de bibliotheek staan 600 boeken. Er zijn 175 boeken uitgeleend. Hoeveel boeken staan er nog in de kast?",
    opties: ["525", "475", "775", "425"],
    correct: 3,
  },

  // ─── ALLE TAFELS EN DELEN ──────────────────────────────────────
  {
    id: "g5-tafels-1a", concept: "g5-tafels-en-delen", niveau: 1,
    vraag: "7 × 4 = ?",
    opties: ["24", "28", "32", "11"],
    correct: 1,
  },
  {
    id: "g5-tafels-1b", concept: "g5-tafels-en-delen", niveau: 1,
    vraag: "6 × 5 = ?",
    opties: ["30", "35", "11", "25"],
    correct: 0,
  },
  {
    id: "g5-tafels-1c", concept: "g5-tafels-en-delen", niveau: 1,
    vraag: "9 × 3 = ?",
    opties: ["24", "12", "27", "36"],
    correct: 2,
  },
  {
    id: "g5-tafels-1d", concept: "g5-tafels-en-delen", niveau: 1,
    vraag: "8 × 10 = ?",
    opties: ["18", "800", "88", "80"],
    correct: 3,
  },
  {
    id: "g5-tafels-2a", concept: "g5-tafels-en-delen", niveau: 2,
    vraag: "63 : 9 = ?",
    opties: ["6", "7", "8", "9"],
    correct: 1,
  },
  {
    id: "g5-tafels-2b", concept: "g5-tafels-en-delen", niveau: 2,
    vraag: "Er zitten 32 kinderen in de klas. De juf maakt groepjes van 4. Hoeveel groepjes zijn er?",
    opties: ["8", "28", "36", "7"],
    correct: 0,
  },
  {
    id: "g5-tafels-2c", concept: "g5-tafels-en-delen", niveau: 2,
    vraag: "6 × 8 = ?",
    opties: ["42", "54", "48", "46"],
    correct: 2,
  },
  {
    id: "g5-tafels-2d", concept: "g5-tafels-en-delen", niveau: 2,
    vraag: "Je hebt 23 knikkers. Je verdeelt ze eerlijk over 5 zakjes. Hoeveel knikkers blijven er over?",
    opties: ["4", "3", "2", "18"],
    correct: 1,
  },

  // ─── KLOKKIJKEN EN TIJDSDUUR ───────────────────────────────────
  {
    id: "g5-klok-1a", concept: "g5-klok-en-tijd", niveau: 1,
    vraag: "Het is 's middags half 5. Hoe schrijf je dat met de 24-uursklok?",
    opties: ["16.30", "4.30", "15.30", "17.30"],
    correct: 0,
  },
  {
    id: "g5-klok-1b", concept: "g5-klok-en-tijd", niveau: 1,
    vraag: "Hoeveel minuten zitten er in een kwartier?",
    opties: ["25", "15", "30", "4"],
    correct: 1,
  },
  {
    id: "g5-klok-1c", concept: "g5-klok-en-tijd", niveau: 1,
    vraag: "Het is 10 over 8. Hoe laat is het 5 minuten later?",
    opties: ["20 over 8", "kwart voor 9", "kwart over 8", "half 9"],
    correct: 2,
  },
  {
    id: "g5-klok-1d", concept: "g5-klok-en-tijd", niveau: 1,
    vraag: "Op de digitale klok staat 7.35. Hoe zeg je dat?",
    opties: ["vijf over half 7", "vijf voor half 8", "vijf over 7", "vijf over half 8"],
    correct: 3,
  },
  {
    id: "g5-klok-1e", concept: "g5-klok-en-tijd", niveau: 1,
    vraag: "Een etmaal is een dag en een nacht samen. Hoeveel uur is een etmaal?",
    opties: ["12", "24", "60", "7"],
    correct: 1,
  },
  {
    id: "g5-klok-2a", concept: "g5-klok-en-tijd", niveau: 2,
    vraag: "Het is 's avonds tien voor half 8. Hoe staat dat op een digitale klok (24 uur)?",
    opties: ["19.40", "20.20", "19.20", "18.20"],
    correct: 2,
  },
  {
    id: "g5-klok-2b", concept: "g5-klok-en-tijd", niveau: 2,
    vraag: "De zwemles begint om 16.15 uur en duurt 45 minuten. Hoe laat is de zwemles afgelopen?",
    opties: ["16.60 uur", "17.00 uur", "16.45 uur", "17.15 uur"],
    correct: 1,
  },
  {
    id: "g5-klok-2c", concept: "g5-klok-en-tijd", niveau: 2,
    vraag: "De film begint om 14.30 uur en is om 16.00 uur afgelopen. Hoe lang duurt de film?",
    opties: ["2 uur en 30 minuten", "1 uur", "2 uur", "1 uur en 30 minuten"],
    correct: 3,
  },

  // ─── SPELLING: LANGE WOORDEN ───────────────────────────────────
  {
    id: "g5-spelling-1a", concept: "g5-spelling", niveau: 1,
    vraag: "Wat is het meervoud van 'maan'?",
    opties: ["maanen", "mannen", "manen", "mane"],
    correct: 2,
  },
  {
    id: "g5-spelling-1b", concept: "g5-spelling", niveau: 1,
    vraag: "Wat is het meervoud van 'bal'?",
    opties: ["balen", "ballen", "bals", "baalen"],
    correct: 1,
  },
  {
    id: "g5-spelling-1c", concept: "g5-spelling", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["fietstocht", "fietstoch", "fiestocht", "fietsdocht"],
    correct: 0,
  },
  {
    id: "g5-spelling-1d", concept: "g5-spelling", niveau: 1,
    vraag: "Welke zin is goed geschreven?",
    opties: [
      "morgen gaan we naar opa.",
      "Morgen gaan we naar opa.",
      "Morgen gaan we naar opa",
      "morgen gaan we naar opa",
    ],
    correct: 1,
  },
  {
    id: "g5-spelling-1e", concept: "g5-spelling", niveau: 1,
    vraag: "Welk woord is goed geschreven?",
    opties: ["teiger", "tijgur", "tieger", "tijger"],
    correct: 3,
  },
  {
    id: "g5-spelling-2a", concept: "g5-spelling", niveau: 2,
    vraag: "Welk woord is goed geschreven?",
    opties: ["vroolijk", "vrolek", "vrolijk", "vrolluk"],
    correct: 2,
  },
  {
    id: "g5-spelling-2b", concept: "g5-spelling", niveau: 2,
    vraag: "Welk woord is goed geschreven?",
    opties: ["zonnig", "zonig", "zonnug", "zonnich"],
    correct: 0,
  },
  {
    id: "g5-spelling-2c", concept: "g5-spelling", niveau: 2,
    vraag: "Wat is het meervoud van 'brief'?",
    opties: ["briefen", "brieven", "brievven", "brieffen"],
    correct: 1,
  },
  {
    id: "g5-spelling-2d", concept: "g5-spelling", niveau: 2,
    vraag: "Wat is het verkleinwoord van 'boom'?",
    opties: ["boomtje", "boometje", "boomje", "boompje"],
    correct: 3,
  },

  // ─── WOORDSOORTEN ──────────────────────────────────────────────
  {
    id: "g5-woordsoort-1a", concept: "g5-woordsoorten", niveau: 1,
    vraag: "Welk woord is een zelfstandig naamwoord? 'De hond rent door het park.'",
    opties: ["rent", "door", "park", "het"],
    correct: 2,
  },
  {
    id: "g5-woordsoort-1b", concept: "g5-woordsoorten", niveau: 1,
    vraag: "Welk woord is een werkwoord? 'Lotte eet een appel.'",
    opties: ["Lotte", "een", "appel", "eet"],
    correct: 3,
  },
  {
    id: "g5-woordsoort-1c", concept: "g5-woordsoorten", niveau: 1,
    vraag: "Welk woord is een lidwoord? 'Het konijn eet een wortel.'",
    opties: ["konijn", "Het", "eet", "wortel"],
    correct: 1,
  },
  {
    id: "g5-woordsoort-1d", concept: "g5-woordsoorten", niveau: 1,
    vraag: "Welk woord is een werkwoord? 'Mijn broer speelt elke dag voetbal.'",
    opties: ["speelt", "broer", "elke", "voetbal"],
    correct: 0,
  },
  {
    id: "g5-woordsoort-2a", concept: "g5-woordsoorten", niveau: 2,
    vraag: "Welk woord vertelt hoe de fiets is? 'Ik heb een nieuwe fiets.'",
    opties: ["fiets", "nieuwe", "heb", "een"],
    correct: 1,
  },
  {
    id: "g5-woordsoort-2b", concept: "g5-woordsoorten", niveau: 2,
    vraag: "Welk woord is een bijvoeglijk naamwoord? 'De kleine poes slaapt in de mand.'",
    opties: ["poes", "slaapt", "mand", "kleine"],
    correct: 3,
  },
  {
    id: "g5-woordsoort-2c", concept: "g5-woordsoorten", niveau: 2,
    vraag: "Welk woord is een bijvoeglijk naamwoord? 'Papa drinkt warme thee.'",
    opties: ["warme", "Papa", "drinkt", "thee"],
    correct: 0,
  },
  {
    id: "g5-woordsoort-2d", concept: "g5-woordsoorten", niveau: 2,
    vraag: "Welk woord is een zelfstandig naamwoord? 'Het grote paard springt hoog.'",
    opties: ["grote", "springt", "paard", "hoog"],
    correct: 2,
  },

  // ─── WOORDENSCHAT ──────────────────────────────────────────────
  {
    id: "g5-woordenschat-1a", concept: "g5-woordenschat", niveau: 1,
    vraag: "Wat is het tegenovergestelde van 'zwaar'?",
    opties: ["licht", "dik", "sterk", "groot"],
    correct: 0,
  },
  {
    id: "g5-woordenschat-1b", concept: "g5-woordenschat", niveau: 1,
    vraag: "Welk woord betekent hetzelfde als 'snel'?",
    opties: ["langzaam", "vlug", "laat", "druk"],
    correct: 1,
  },
  {
    id: "g5-woordenschat-1c", concept: "g5-woordenschat", niveau: 1,
    vraag: "Wat is het tegenovergestelde van 'vroeg'?",
    opties: ["eerst", "morgen", "laat", "vlug"],
    correct: 2,
  },
  {
    id: "g5-woordenschat-1d", concept: "g5-woordenschat", niveau: 1,
    vraag: "Welk woord betekent hetzelfde als 'mooi'?",
    opties: ["lelijk", "groot", "raar", "prachtig"],
    correct: 3,
  },
  {
    id: "g5-woordenschat-2a", concept: "g5-woordenschat", niveau: 2,
    vraag: "Noor was doodop na de lange wandeling. Wat betekent 'doodop'?",
    opties: ["heel blij", "heel moe", "heel boos", "heel ziek"],
    correct: 1,
  },
  {
    id: "g5-woordenschat-2b", concept: "g5-woordenschat", niveau: 2,
    vraag: "Het was zo druk in de winkel dat we amper konden lopen. Wat betekent 'amper'?",
    opties: ["heel snel", "samen", "bijna niet", "gelukkig"],
    correct: 2,
  },
  {
    id: "g5-woordenschat-2c", concept: "g5-woordenschat", niveau: 2,
    vraag: "Opa zegt tegen Jesse: 'Jij hebt groene vingers!' Wat bedoelt opa?",
    opties: [
      "Jesse is goed met planten.",
      "Jesse heeft vieze vingers.",
      "Jesse heeft met verf gespeeld.",
      "Jesse heeft het koud.",
    ],
    correct: 0,
  },
  {
    id: "g5-woordenschat-2d", concept: "g5-woordenschat", niveau: 2,
    vraag: "De juf zegt dat de opdracht verplicht is. Wat betekent 'verplicht'?",
    opties: ["je mag het overslaan", "het is heel makkelijk", "het is een spelletje", "je moet het doen"],
    correct: 3,
  },

  // ─── EEN TEKST BEGRIJPEN ───────────────────────────────────────
  {
    id: "g5-tekst-1a", concept: "g5-tekst-begrijpen", niveau: 1,
    vraag: "Lees: 'Een egel slaapt overdag onder een hoop bladeren. Als het donker wordt, gaat hij op zoek naar eten. Hij eet vooral slakken, kevers en wormen. In de winter houdt een egel een winterslaap.' Wat eet een egel vooral?",
    opties: ["appels en peren", "bladeren", "slakken, kevers en wormen", "gras en bloemen"],
    correct: 2,
  },
  {
    id: "g5-tekst-1b", concept: "g5-tekst-begrijpen", niveau: 1,
    vraag: "Lees: 'Ties gaat op zaterdag naar de bibliotheek. Hij leent twee boeken over dinosaurussen. Zijn zusje Eva leent een boek over paarden.' Waarover gaan de boeken van Ties?",
    opties: ["over paarden", "over dinosaurussen", "over de bibliotheek", "over zijn zusje"],
    correct: 1,
  },
  {
    id: "g5-tekst-1c", concept: "g5-tekst-begrijpen", niveau: 1,
    vraag: "Lees: 'Op woensdag heeft groep 5 gym. De kinderen moeten dan gymschoenen meenemen. Zonder gymschoenen mag je niet op de klimtoestellen.' Wat moeten de kinderen op woensdag meenemen?",
    opties: ["gymschoenen", "een klimtouw", "hun fiets", "een lunchpakket"],
    correct: 0,
  },
  {
    id: "g5-tekst-1d", concept: "g5-tekst-begrijpen", niveau: 1,
    vraag: "Lees: 'Een zonnebloem kan wel drie meter hoog worden. De bloem draait mee met de zon. In de bloem zitten honderden zaadjes. Vogels eten die zaadjes graag.' Hoe hoog kan een zonnebloem worden?",
    opties: ["een meter", "twee meter", "dertig meter", "drie meter"],
    correct: 3,
  },
  {
    id: "g5-tekst-2a", concept: "g5-tekst-begrijpen", niveau: 2,
    vraag: "Lees: 'Mila en haar opa gaan vissen bij de rivier. Daar is het altijd rustig. Opa heeft een nieuwe hengel gekocht.' Waar gaat het woord 'Daar' over?",
    opties: ["bij opa thuis", "bij de rivier", "in de winkel", "op school"],
    correct: 1,
  },
  {
    id: "g5-tekst-2b", concept: "g5-tekst-begrijpen", niveau: 2,
    vraag: "Lees: 'Sem neemt elke dag een appel mee naar school. Vandaag vergeet hij die. Zijn vriendin Lina geeft hem de helft van haar banaan.' Waarom krijgt Sem een halve banaan van Lina?",
    opties: [
      "Hij houdt niet van appels.",
      "Lina lust geen bananen.",
      "Hij is zijn appel vergeten.",
      "Het is zijn verjaardag.",
    ],
    correct: 2,
  },
  {
    id: "g5-tekst-2c", concept: "g5-tekst-begrijpen", niveau: 2,
    vraag: "Lees: 'Juf Anouk heeft een konijn in de klas. Het konijn heet Snuf. Elke vrijdag neemt een ander kind hem mee naar huis. Zo is hij in het weekend nooit alleen.' Waarom neemt elke vrijdag een kind Snuf mee naar huis?",
    opties: [
      "Omdat Snuf dan naar de dierenarts gaat.",
      "Omdat het kind hem mag houden.",
      "Omdat de juf het konijn niet leuk vindt.",
      "Omdat hij dan in het weekend niet alleen is.",
    ],
    correct: 3,
  },
  {
    id: "g5-tekst-2d", concept: "g5-tekst-begrijpen", niveau: 2,
    vraag: "Lees: 'Fleur bouwt met Daan een hut in het bos. Daan haalt takken. Fleur heeft een oud laken van huis meegenomen. Dat hangt ze over de takken.' Wat hangt Fleur over de takken?",
    opties: ["een oud laken", "bladeren", "een jas", "een touw"],
    correct: 0,
  },
];

export default { concepten, vragen };

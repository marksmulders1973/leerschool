// Kwartiercheck — groep 4 (29 sep 2026).
// Concepten + niveaus volgens docs/kwartiercheck/CONCEPTEN-PER-GROEP.md §3.
// Niveau 1 = basis (moet er al in zitten), niveau 2 = toepassen (medio groep 4).
// Eigen vragen "in de stijl van", niet overgenomen uit Cito of een methode.
// Geen plaatjes: groepjes als stippen, klok en geld in woorden.

const concepten = [
  {
    id: "g4-getallen-tot-100",
    label: "Getallen tot 100",
    vak: "rekenen",
    leerpadId: "rekenen-tot-100-nieuwkomers",
    leerpadTitel: "Rekenen tot 100",
  },
  {
    id: "g4-plus-min-tot-100",
    label: "Plus en min tot 100",
    vak: "rekenen",
    leerpadId: "rekenen-tot-100-nieuwkomers",
    leerpadTitel: "Rekenen tot 100",
  },
  {
    id: "g4-tafels-1-2-5-10",
    label: "De eerste tafels (1, 2, 5, 10)",
    vak: "rekenen",
    leerpadId: "tafels-po",
    leerpadTitel: "Tafels & vermenigvuldigen",
  },
  {
    id: "g4-klok-en-geld",
    label: "Klokkijken en geld",
    vak: "rekenen",
    leerpadId: "klokkijken",
    leerpadTitel: "Klokkijken",
  },
  {
    id: "g4-spelling",
    label: "Spelling: lastige klanken",
    vak: "taal",
    leerpadId: "spelling-ei-ij-au-ou",
    leerpadTitel: "Spelling ei/ij en au/ou",
  },
  {
    id: "g4-woorden-en-zinnen",
    label: "Woorden en zinnen",
    vak: "taal",
    leerpadId: "taal-woorden-zinnen-g4",
    leerpadTitel: "Woorden en zinnen",
  },
  {
    id: "g4-korte-tekst",
    label: "Een korte tekst begrijpen",
    vak: "begrijpend-lezen",
    leerpadId: "korte-teksten-snappen-g4",
    leerpadTitel: "Korte teksten snappen",
  },
];

const vragen = [
  // ─── GETALLEN TOT 100 ──────────────────────────────────────────
  {
    id: "g4-getallen-1a", concept: "g4-getallen-tot-100", niveau: 1,
    vraag: "Hoeveel tientallen zitten er in 63?",
    opties: ["3", "6", "60", "9"],
    correct: 1,
  },
  {
    id: "g4-getallen-1b", concept: "g4-getallen-tot-100", niveau: 1,
    vraag: "Welk getal is 4 tientallen en 7 eenheden?",
    opties: ["47", "74", "11", "407"],
    correct: 0,
  },
  {
    id: "g4-getallen-1c", concept: "g4-getallen-tot-100", niveau: 1,
    vraag: "Welk getal komt na 59?",
    opties: ["50", "58", "60", "69"],
    correct: 2,
  },
  {
    id: "g4-getallen-1d", concept: "g4-getallen-tot-100", niveau: 1,
    vraag: "Welk getal is het grootst?",
    opties: ["38", "80", "29", "83"],
    correct: 3,
  },
  {
    id: "g4-getallen-2a", concept: "g4-getallen-tot-100", niveau: 2,
    vraag: "Tel verder in sprongen van 5: 35, 40, 45, …",
    opties: ["46", "50", "55", "60"],
    correct: 1,
  },
  {
    id: "g4-getallen-2b", concept: "g4-getallen-tot-100", niveau: 2,
    vraag: "Tel terug in sprongen van 10: 90, 80, 70, …",
    opties: ["69", "50", "60", "71"],
    correct: 2,
  },
  {
    id: "g4-getallen-2c", concept: "g4-getallen-tot-100", niveau: 2,
    vraag: "Welk getal ligt precies in het midden tussen 40 en 50?",
    opties: ["45", "44", "41", "90"],
    correct: 0,
  },
  {
    id: "g4-getallen-2d", concept: "g4-getallen-tot-100", niveau: 2,
    vraag: "Welk getal is even?",
    opties: ["27", "35", "51", "48"],
    correct: 3,
  },

  // ─── PLUS EN MIN TOT 100 ───────────────────────────────────────
  {
    id: "g4-plusmin-1a", concept: "g4-plus-min-tot-100", niveau: 1,
    vraag: "8 + 5 = ?",
    opties: ["12", "13", "14", "3"],
    correct: 1,
  },
  {
    id: "g4-plusmin-1b", concept: "g4-plus-min-tot-100", niveau: 1,
    vraag: "13 − 6 = ?",
    opties: ["7", "8", "6", "19"],
    correct: 0,
  },
  {
    id: "g4-plusmin-1c", concept: "g4-plus-min-tot-100", niveau: 1,
    vraag: "40 + 30 = ?",
    opties: ["43", "7", "70", "80"],
    correct: 2,
  },
  {
    id: "g4-plusmin-1d", concept: "g4-plus-min-tot-100", niveau: 1,
    vraag: "9 + 7 = ?",
    opties: ["15", "17", "14", "16"],
    correct: 3,
  },
  {
    id: "g4-plusmin-1e", concept: "g4-plus-min-tot-100", niveau: 1,
    vraag: "45 + 10 = ?",
    opties: ["46", "55", "65", "54"],
    correct: 1,
  },
  {
    id: "g4-plusmin-2a", concept: "g4-plus-min-tot-100", niveau: 2,
    vraag: "37 + 8 = ?",
    opties: ["44", "35", "45", "55"],
    correct: 2,
  },
  {
    id: "g4-plusmin-2b", concept: "g4-plus-min-tot-100", niveau: 2,
    vraag: "52 − 7 = ?",
    opties: ["45", "55", "44", "35"],
    correct: 0,
  },
  {
    id: "g4-plusmin-2c", concept: "g4-plus-min-tot-100", niveau: 2,
    vraag: "Jan heeft 24 knikkers. Hij wint er 9. Hoeveel knikkers heeft hij nu?",
    opties: ["32", "15", "34", "33"],
    correct: 3,
  },
  {
    id: "g4-plusmin-2d", concept: "g4-plus-min-tot-100", niveau: 2,
    vraag: "In de bus zitten 30 kinderen. Er stappen er 12 uit. Hoeveel kinderen zitten er nog in de bus?",
    opties: ["22", "18", "42", "28"],
    correct: 1,
  },

  // ─── DE EERSTE TAFELS (1, 2, 5, 10) ────────────────────────────
  {
    id: "g4-tafels-1a", concept: "g4-tafels-1-2-5-10", niveau: 1,
    vraag: "4 × 10 = ?",
    opties: ["14", "40", "400", "4"],
    correct: 1,
  },
  {
    id: "g4-tafels-1b", concept: "g4-tafels-1-2-5-10", niveau: 1,
    vraag: "3 × 2 = ?",
    opties: ["5", "8", "6", "9"],
    correct: 2,
  },
  {
    id: "g4-tafels-1c", concept: "g4-tafels-1-2-5-10", niveau: 1,
    vraag: "5 × 5 = ?",
    opties: ["10", "20", "30", "25"],
    correct: 3,
  },
  {
    id: "g4-tafels-1d", concept: "g4-tafels-1-2-5-10", niveau: 1,
    vraag: "6 × 2 = ?",
    opties: ["12", "8", "14", "10"],
    correct: 0,
  },
  {
    id: "g4-tafels-1e", concept: "g4-tafels-1-2-5-10", niveau: 1,
    vraag: "7 × 1 = ?",
    opties: ["8", "7", "1", "6"],
    correct: 1,
  },
  {
    id: "g4-tafels-2a", concept: "g4-tafels-1-2-5-10", niveau: 2,
    vraag: "Er staan 3 dozen met elk 5 eieren. Hoeveel eieren zijn dat samen?",
    opties: ["8", "15", "10", "20"],
    correct: 1,
  },
  {
    id: "g4-tafels-2b", concept: "g4-tafels-1-2-5-10", niveau: 2,
    vraag: "Een fiets heeft 2 wielen. Hoeveel wielen hebben 7 fietsen samen?",
    opties: ["9", "12", "14", "16"],
    correct: 2,
  },
  {
    id: "g4-tafels-2c", concept: "g4-tafels-1-2-5-10", niveau: 2,
    vraag: "Je hebt 6 munten van 10 cent. Hoeveel cent is dat?",
    opties: ["16", "600", "50", "60"],
    correct: 3,
  },
  {
    id: "g4-tafels-2d", concept: "g4-tafels-1-2-5-10", niveau: 2,
    vraag: "●● ●● ●● ●● Welke som hoort hierbij?",
    opties: ["4 × 2", "2 × 2", "4 + 2", "4 × 4"],
    correct: 0,
  },

  // ─── KLOKKIJKEN EN GELD ────────────────────────────────────────
  // Niveau 1 = hele en halve uren + geld samentellen, niveau 2 = rekenen met tijd of geld.
  {
    id: "g4-klokgeld-1a", concept: "g4-klok-en-geld", niveau: 1,
    vraag: "De grote wijzer staat op de 6. De kleine wijzer staat tussen de 3 en de 4. Hoe laat is het?",
    opties: ["half 3", "half 4", "6 uur", "kwart over 3"],
    correct: 1,
  },
  {
    id: "g4-klokgeld-1b", concept: "g4-klok-en-geld", niveau: 1,
    vraag: "De grote wijzer staat op de 12. De kleine wijzer staat op de 7. Hoe laat is het?",
    opties: ["7 uur", "12 uur", "half 7", "half 8"],
    correct: 0,
  },
  {
    id: "g4-klokgeld-1c", concept: "g4-klok-en-geld", niveau: 1,
    vraag: "Op een digitale klok staat 3:30. Hoe laat is het?",
    opties: ["half 3", "3 uur", "half 4", "kwart over 3"],
    correct: 2,
  },
  {
    id: "g4-klokgeld-1d", concept: "g4-klok-en-geld", niveau: 1,
    vraag: "Je hebt een briefje van €20, een briefje van €5 en een munt van €2. Hoeveel euro is dat?",
    opties: ["€25", "€22", "€17", "€27"],
    correct: 3,
  },
  {
    id: "g4-klokgeld-2a", concept: "g4-klok-en-geld", niveau: 2,
    vraag: "Het is half 2. Hoe laat is het 2 uur later?",
    opties: ["half 3", "half 4", "4 uur", "half 5"],
    correct: 1,
  },
  {
    id: "g4-klokgeld-2b", concept: "g4-klok-en-geld", niveau: 2,
    vraag: "Een pak koekjes kost €3. Je betaalt met een briefje van €10. Hoeveel krijg je terug?",
    opties: ["€7", "€13", "€6", "€8"],
    correct: 0,
  },
  {
    id: "g4-klokgeld-2c", concept: "g4-klok-en-geld", niveau: 2,
    vraag: "Je koopt een bal van €12 en een pet van €6. Hoeveel betaal je samen?",
    opties: ["€16", "€6", "€19", "€18"],
    correct: 3,
  },
  {
    id: "g4-klokgeld-2d", concept: "g4-klok-en-geld", niveau: 2,
    vraag: "De zwemles begint om half 9. De les duurt 1 uur. Hoe laat is de les klaar?",
    opties: ["9 uur", "10 uur", "half 10", "half 9"],
    correct: 2,
  },

  // ─── SPELLING: LASTIGE KLANKEN ─────────────────────────────────
  // Het woord staat nooit in de vraag (dat verklapt het); de vraag beschrijft wat het is.
  // Niveau 1 = Cito-categorieën medio groep 4 (-d, clusters, -ng/-nk, ooi, samenstelling);
  // niveau 2 = einddoelen groep 4 (-je/-tje, au/ou, -cht, open/gesloten lettergreep).
  {
    id: "g4-spelling-1a", concept: "g4-spelling", niveau: 1,
    vraag: "Dit dier blaft. Welk woord is goed geschreven?",
    opties: ["hont", "hond", "hondt", "honnd"],
    correct: 1,
  },
  {
    id: "g4-spelling-1b", concept: "g4-spelling", niveau: 1,
    vraag: "Daar koop je groente en kaas op het plein. Welk woord is goed geschreven?",
    opties: ["markt", "mark", "margt", "marrkt"],
    correct: 0,
  },
  {
    id: "g4-spelling-1c", concept: "g4-spelling", niveau: 1,
    vraag: "Daar zit je op in het park. Welk woord is goed geschreven?",
    opties: ["bang", "bangk", "bank", "banck"],
    correct: 2,
  },
  {
    id: "g4-spelling-1d", concept: "g4-spelling", niveau: 1,
    vraag: "Die jurk is heel … Welk woord is goed geschreven?",
    opties: ["mooj", "moi", "mooij", "mooi"],
    correct: 3,
  },
  {
    id: "g4-spelling-1e", concept: "g4-spelling", niveau: 1,
    vraag: "Die zit op je stuur en zegt tring tring. Welk woord is goed geschreven?",
    opties: ["fiesbel", "fietsbel", "fietbel", "fietsbell"],
    correct: 1,
  },
  {
    id: "g4-spelling-2a", concept: "g4-spelling", niveau: 2,
    vraag: "Een kleine trein is een … Welk woord is goed geschreven?",
    opties: ["treinje", "trijntje", "treintje", "treintie"],
    correct: 2,
  },
  {
    id: "g4-spelling-2b", concept: "g4-spelling", niveau: 2,
    vraag: "Het vriest buiten. Het is heel … Welk woord is goed geschreven?",
    opties: ["koud", "kout", "kaud", "koudt"],
    correct: 0,
  },
  {
    id: "g4-spelling-2c", concept: "g4-spelling", niveau: 2,
    vraag: "Het is donker en je ligt in bed. Het is … Welk woord is goed geschreven?",
    opties: ["nagt", "nach", "naght", "nacht"],
    correct: 3,
  },
  {
    id: "g4-spelling-2d", concept: "g4-spelling", niveau: 2,
    vraag: "Eén boom, twee … Welk woord is goed geschreven?",
    opties: ["boomen", "bomen", "bommen", "bome"],
    correct: 1,
  },

  // ─── WOORDEN EN ZINNEN ─────────────────────────────────────────
  {
    id: "g4-woorden-1a", concept: "g4-woorden-en-zinnen", niveau: 1,
    vraag: "Eén boek, twee … Wat is het meervoud?",
    opties: ["boeks", "boeken", "boekken", "boeke"],
    correct: 1,
  },
  {
    id: "g4-woorden-1b", concept: "g4-woorden-en-zinnen", niveau: 1,
    vraag: "Een klein huis is een …",
    opties: ["huistje", "huizen", "huizje", "huisje"],
    correct: 3,
  },
  {
    id: "g4-woorden-1c", concept: "g4-woorden-en-zinnen", niveau: 1,
    vraag: "Wat is het tegenovergestelde van 'groot'?",
    opties: ["lang", "dik", "klein", "hoog"],
    correct: 2,
  },
  {
    id: "g4-woorden-1d", concept: "g4-woorden-en-zinnen", niveau: 1,
    vraag: "Wat is goed: de of het?",
    opties: ["het huis", "de huis", "het fiets", "de boek"],
    correct: 0,
  },
  {
    id: "g4-woorden-1e", concept: "g4-woorden-en-zinnen", niveau: 1,
    vraag: "Eén tafel, twee … Wat is het meervoud?",
    opties: ["tafelen", "tafels", "tafel's", "tafells"],
    correct: 1,
  },
  {
    id: "g4-woorden-2a", concept: "g4-woorden-en-zinnen", niveau: 2,
    vraag: "Welk woord is een werkwoord? 'De hond rent naar huis.'",
    opties: ["hond", "huis", "rent", "de"],
    correct: 2,
  },
  {
    id: "g4-woorden-2b", concept: "g4-woorden-en-zinnen", niveau: 2,
    vraag: "Welke zin is goed geschreven?",
    opties: ["ik ga naar school.", "Ik ga naar school", "ik ga naar school", "Ik ga naar school."],
    correct: 3,
  },
  {
    id: "g4-woorden-2c", concept: "g4-woorden-en-zinnen", niveau: 2,
    vraag: "Welk woord komt eerst in het alfabet?",
    opties: ["pop", "kat", "bal", "vis"],
    correct: 2,
  },
  {
    id: "g4-woorden-2d", concept: "g4-woorden-en-zinnen", niveau: 2,
    vraag: "Welk woord is een zelfstandig naamwoord? 'De vogel zingt mooi.'",
    opties: ["vogel", "zingt", "mooi", "de"],
    correct: 0,
  },

  // ─── EEN KORTE TEKST BEGRIJPEN ─────────────────────────────────
  {
    id: "g4-tekst-1a", concept: "g4-korte-tekst", niveau: 1,
    vraag: "Lees: 'Lisa gaat naar het strand. Ze neemt een emmer en een schep mee. Het is warm. Lisa bouwt een zandkasteel.' Wat neemt Lisa mee?",
    opties: ["een bal", "een emmer en een schep", "een handdoek", "een ijsje"],
    correct: 1,
  },
  {
    id: "g4-tekst-1b", concept: "g4-korte-tekst", niveau: 1,
    vraag: "Lees: 'Tom heeft een hond. De hond heet Bruno. Bruno is bruin en heel groot.' Hoe heet de hond?",
    opties: ["Tom", "Bruin", "Bruno", "Groot"],
    correct: 2,
  },
  {
    id: "g4-tekst-1c", concept: "g4-korte-tekst", niveau: 1,
    vraag: "Lees: 'Eerst doet Sara haar jas aan. Daarna pakt ze haar tas. Dan fietst ze naar school.' Waar fietst Sara naartoe?",
    opties: ["naar huis", "naar oma", "naar de winkel", "naar school"],
    correct: 3,
  },
  {
    id: "g4-tekst-1d", concept: "g4-korte-tekst", niveau: 1,
    vraag: "Lees: 'Het is zaterdag. Ruben gaat met papa naar de dierentuin. Hij ziet een olifant en twee apen.' Wanneer gaat Ruben naar de dierentuin?",
    opties: ["op zaterdag", "op zondag", "na school", "in de vakantie"],
    correct: 0,
  },
  {
    id: "g4-tekst-2a", concept: "g4-korte-tekst", niveau: 2,
    vraag: "Lees: 'Lisa gaat naar het strand. Ze neemt een emmer en een schep mee. Het is warm. Lisa bouwt een zandkasteel.' Wat doet Lisa als laatste?",
    opties: ["naar het strand gaan", "een emmer pakken", "een zandkasteel bouwen", "zwemmen"],
    correct: 2,
  },
  {
    id: "g4-tekst-2b", concept: "g4-korte-tekst", niveau: 2,
    vraag: "Lees: 'Tom heeft een hond. De hond heet Bruno. Elke middag loopt Tom met hem naar het park.' Wie is 'hem'?",
    opties: ["Tom", "Bruno", "papa", "het park"],
    correct: 1,
  },
  {
    id: "g4-tekst-2c", concept: "g4-korte-tekst", niveau: 2,
    vraag: "Lees: 'Eerst doet Sara haar jas aan. Daarna pakt ze haar tas. Dan fietst ze naar school.' Wat doet Sara na het aandoen van haar jas?",
    opties: ["naar school fietsen", "haar jas ophangen", "haar fiets pakken", "haar tas pakken"],
    correct: 3,
  },
  {
    id: "g4-tekst-2d", concept: "g4-korte-tekst", niveau: 2,
    vraag: "Lees: 'Oma bakt een taart. Ze doet er aardbeien op. Mila mag helpen. Samen eten ze de taart op.' In zin 2 staat 'Ze'. Wie is dat?",
    opties: ["Mila", "oma", "de taart", "de aardbeien"],
    correct: 1,
  },
];

export default { concepten, vragen };

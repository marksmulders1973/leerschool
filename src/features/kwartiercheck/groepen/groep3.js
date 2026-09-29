// Kwartiercheck — groep 3 (29 sep 2026).
// Concepten + niveaus volgens docs/kwartiercheck/CONCEPTEN-PER-GROEP.md §2.
// Niveau 1 = basis (moet er al in zitten), niveau 2 = toepassen (medio groep 3).
// Eigen vragen "in de stijl van", niet overgenomen uit Cito of een methode.
// Geen plaatjes: hoeveelheden als stippen, klok en geld in woorden.
// nietVoorlezen: true = technisch lezen (letters / woordjes / zinnetjes): de voorleesknop slaat die over,
// anders meet je luisteren in plaats van lezen.

const concepten = [
  {
    id: "g3-getallen-tot-20",
    label: "Tellen en getallen tot 20",
    vak: "rekenen",
    leerpadId: "getallen-tot-20-po",
    leerpadTitel: "Getallen en sommen tot 20",
  },
  {
    id: "g3-plus-min-tot-10",
    label: "Erbij en eraf tot 10",
    vak: "rekenen",
    leerpadId: "getallen-tot-20-po",
    leerpadTitel: "Getallen en sommen tot 20",
  },
  {
    id: "g3-geld-en-klok",
    label: "Geld tellen en klokkijken",
    vak: "rekenen",
    leerpadId: "klokkijken",
    leerpadTitel: "Klokkijken",
  },
  {
    id: "g3-klanken-rijmen",
    label: "Klanken horen en rijmen",
    vak: "taal",
    leerpadId: "taal-leren-lezen-g3",
    leerpadTitel: "Leren lezen",
  },
  {
    id: "g3-woorden-schrijven",
    label: "Woorden schrijven (spelling)",
    vak: "taal",
    leerpadId: "spelling-eerste-woorden-g3",
    leerpadTitel: "Je eerste woorden schrijven",
  },
  {
    id: "g3-letters-klanken",
    label: "Letters en klanken",
    vak: "lezen",
    leerpadId: "taal-leren-lezen-g3",
    leerpadTitel: "Leren lezen",
  },
  {
    id: "g3-woordjes-zinnen-lezen",
    label: "Woordjes en zinnetjes lezen",
    vak: "lezen",
    leerpadId: "taal-leren-lezen-g3",
    leerpadTitel: "Leren lezen",
  },
];

const vragen = [
  // ─── TELLEN EN GETALLEN TOT 20 ─────────────────────────────────
  {
    id: "g3-tellen-1a", concept: "g3-getallen-tot-20", niveau: 1,
    vraag: "Welk getal komt na 13?",
    opties: ["12", "14", "15", "31"],
    correct: 1,
  },
  {
    id: "g3-tellen-1b", concept: "g3-getallen-tot-20", niveau: 1,
    vraag: "Tel de stippen: ●●●●● ●●●",
    opties: ["7", "5", "8", "9"],
    correct: 2,
  },
  {
    id: "g3-tellen-1c", concept: "g3-getallen-tot-20", niveau: 1,
    vraag: "Welk getal komt vóór 10?",
    opties: ["9", "11", "8", "1"],
    correct: 0,
  },
  {
    id: "g3-tellen-1d", concept: "g3-getallen-tot-20", niveau: 1,
    vraag: "Tel verder: 15, 16, 17, …",
    opties: ["19", "17", "71", "18"],
    correct: 3,
  },
  {
    id: "g3-tellen-2a", concept: "g3-getallen-tot-20", niveau: 2,
    vraag: "Welk getal ligt het dichtst bij 10?",
    opties: ["5", "17", "13", "2"],
    correct: 2,
  },
  {
    id: "g3-tellen-2b", concept: "g3-getallen-tot-20", niveau: 2,
    vraag: "Welk getal ligt tussen 14 en 16?",
    opties: ["15", "14", "16", "17"],
    correct: 0,
  },
  {
    id: "g3-tellen-2c", concept: "g3-getallen-tot-20", niveau: 2,
    vraag: "Welke rij gaat van klein naar groot?",
    opties: ["12, 8, 18", "8, 12, 18", "18, 12, 8", "8, 18, 12"],
    correct: 1,
  },

  // ─── ERBIJ EN ERAF TOT 10 ──────────────────────────────────────
  {
    id: "g3-plusmin-1a", concept: "g3-plus-min-tot-10", niveau: 1,
    vraag: "5 + 3 = ?",
    opties: ["7", "8", "9", "2"],
    correct: 1,
  },
  {
    id: "g3-plusmin-1b", concept: "g3-plus-min-tot-10", niveau: 1,
    vraag: "9 − 4 = ?",
    opties: ["6", "4", "13", "5"],
    correct: 3,
  },
  {
    id: "g3-plusmin-1c", concept: "g3-plus-min-tot-10", niveau: 1,
    vraag: "Je wilt 7. Je hebt 5. Hoeveel moet erbij?",
    opties: ["2", "3", "12", "7"],
    correct: 0,
  },
  {
    id: "g3-plusmin-1d", concept: "g3-plus-min-tot-10", niveau: 1,
    vraag: "●●●● en ●●● Hoeveel stippen samen?",
    opties: ["6", "1", "7", "8"],
    correct: 2,
  },
  {
    id: "g3-plusmin-2a", concept: "g3-plus-min-tot-10", niveau: 2,
    vraag: "Er zitten 8 vogels in de boom. Er vliegen er 3 weg. Hoeveel zitten er nog?",
    opties: ["11", "5", "4", "6"],
    correct: 1,
  },
  {
    id: "g3-plusmin-2b", concept: "g3-plus-min-tot-10", niveau: 2,
    vraag: "12 + 3 = ?",
    opties: ["14", "16", "9", "15"],
    correct: 3,
  },
  {
    id: "g3-plusmin-2c", concept: "g3-plus-min-tot-10", niveau: 2,
    vraag: "Lies heeft 14 stickers. Ze geeft er 2 weg. Hoeveel heeft ze nog?",
    opties: ["16", "13", "12", "11"],
    correct: 2,
  },

  // ─── GELD TELLEN EN KLOKKIJKEN ─────────────────────────────────
  // Niveau 1 = geld samentellen (basis), niveau 2 = hele uren (einddoel groep 3).
  {
    id: "g3-geldklok-1a", concept: "g3-geld-en-klok", niveau: 1,
    vraag: "Je hebt een briefje van €5 en een munt van €2. Hoeveel euro is dat?",
    opties: ["€3", "€7", "€6", "€10"],
    correct: 1,
  },
  {
    id: "g3-geldklok-1b", concept: "g3-geld-en-klok", niveau: 1,
    vraag: "€2 en €2 en €1. Hoeveel euro is dat?",
    opties: ["€4", "€3", "€6", "€5"],
    correct: 3,
  },
  {
    id: "g3-geldklok-1c", concept: "g3-geld-en-klok", niveau: 1,
    vraag: "Wat is het meeste geld?",
    opties: ["een munt van €2", "een briefje van €5", "een briefje van €10", "een munt van €1"],
    correct: 2,
  },
  {
    id: "g3-geldklok-1d", concept: "g3-geld-en-klok", niveau: 1,
    vraag: "Een briefje van €10 en een munt van €2. Hoeveel euro is dat?",
    opties: ["€12", "€8", "€11", "€13"],
    correct: 0,
  },
  {
    id: "g3-geldklok-2a", concept: "g3-geld-en-klok", niveau: 2,
    vraag: "De grote wijzer staat op de 12. De kleine wijzer staat op de 3. Hoe laat is het?",
    opties: ["12 uur", "half 3", "3 uur", "kwart over 3"],
    correct: 2,
  },
  {
    id: "g3-geldklok-2b", concept: "g3-geld-en-klok", niveau: 2,
    vraag: "De grote wijzer staat op de 12. De kleine wijzer staat op de 8. Hoe laat is het?",
    opties: ["8 uur", "12 uur", "half 8", "9 uur"],
    correct: 0,
  },
  {
    id: "g3-geldklok-2c", concept: "g3-geld-en-klok", niveau: 2,
    vraag: "Het is 5 uur. Waar staat de kleine wijzer?",
    opties: ["op de 12", "op de 5", "op de 6", "op de 1"],
    correct: 1,
  },

  // ─── KLANKEN HOREN EN RIJMEN ───────────────────────────────────
  // Deze vragen worden voorgelezen: de klank zit altijd in een heel woord.
  {
    id: "g3-klanken-1a", concept: "g3-klanken-rijmen", niveau: 1,
    vraag: "Welk woord rijmt op 'bal'?",
    opties: ["bel", "val", "bak", "bol"],
    correct: 1,
  },
  {
    id: "g3-klanken-1b", concept: "g3-klanken-rijmen", niveau: 1,
    vraag: "Welk woord rijmt op 'maan'?",
    opties: ["maak", "been", "baan", "mat"],
    correct: 2,
  },
  {
    id: "g3-klanken-1c", concept: "g3-klanken-rijmen", niveau: 1,
    vraag: "Welk woord rijmt op 'huis'?",
    opties: ["huid", "hoed", "haas", "muis"],
    correct: 3,
  },
  {
    id: "g3-klanken-1d", concept: "g3-klanken-rijmen", niveau: 1,
    vraag: "Welk woord begint met dezelfde klank als 'zon'?",
    opties: ["zak", "mok", "bon", "ton"],
    correct: 0,
  },
  {
    id: "g3-klanken-1e", concept: "g3-klanken-rijmen", niveau: 1,
    vraag: "Welk woord eindigt met dezelfde klank als 'kip'?",
    opties: ["kam", "pet", "lap", "kus"],
    correct: 2,
  },
  {
    id: "g3-klanken-2a", concept: "g3-klanken-rijmen", niveau: 2,
    vraag: "Hoeveel klanken hoor je in 'vis'?",
    opties: ["2", "3", "4", "1"],
    correct: 1,
  },
  {
    id: "g3-klanken-2b", concept: "g3-klanken-rijmen", niveau: 2,
    vraag: "Verander de k van 'kaas' in een b. Welk woord krijg je?",
    opties: ["kaas", "bas", "boos", "baas"],
    correct: 3,
  },
  {
    id: "g3-klanken-2c", concept: "g3-klanken-rijmen", niveau: 2,
    vraag: "Hoeveel klanken hoor je in 'boom'?",
    opties: ["4", "2", "3", "5"],
    correct: 2,
  },

  // ─── WOORDEN SCHRIJVEN (SPELLING) ──────────────────────────────
  // Het woord staat nooit in de vraag (dat verklapt het); de vraag beschrijft wat het is.
  // Niveau 1 = klankzuivere woorden (Cito-categorie 1), niveau 2 = medeklinkers achter elkaar, sch, -ng.
  {
    id: "g3-schrijven-1a", concept: "g3-woorden-schrijven", niveau: 1,
    vraag: "Wat zie je 's nachts aan de hemel? Kies het goede woord.",
    opties: ["man", "maan", "mane", "mahn"],
    correct: 1,
  },
  {
    id: "g3-schrijven-1b", concept: "g3-woorden-schrijven", niveau: 1,
    vraag: "Daar schrijf je mee. Kies het goede woord.",
    opties: ["pen", "ben", "pn", "pem"],
    correct: 0,
  },
  {
    id: "g3-schrijven-1c", concept: "g3-woorden-schrijven", niveau: 1,
    vraag: "Au, mijn knie doet zeer! Ik heb … Kies het goede woord.",
    opties: ["pin", "pijm", "pien", "pijn"],
    correct: 3,
  },
  {
    id: "g3-schrijven-1d", concept: "g3-woorden-schrijven", niveau: 1,
    vraag: "Daar woon je in. Kies het goede woord.",
    opties: ["hus", "huiz", "huis", "hois"],
    correct: 2,
  },
  {
    id: "g3-schrijven-2a", concept: "g3-woorden-schrijven", niveau: 2,
    vraag: "Daar hang je je kleren in. Kies het goede woord.",
    opties: ["kats", "kast", "kas", "kaast"],
    correct: 1,
  },
  {
    id: "g3-schrijven-2b", concept: "g3-woorden-schrijven", niveau: 2,
    vraag: "Die groeit in de tuin en ruikt lekker. Kies het goede woord.",
    opties: ["boem", "blom", "beloem", "bloem"],
    correct: 3,
  },
  {
    id: "g3-schrijven-2c", concept: "g3-woorden-schrijven", niveau: 2,
    vraag: "Een grote boot op zee. Kies het goede woord.",
    opties: ["schip", "sgip", "sip", "schib"],
    correct: 0,
  },
  {
    id: "g3-schrijven-2d", concept: "g3-woorden-schrijven", niveau: 2,
    vraag: "Die draag je om je vinger. Kies het goede woord.",
    opties: ["rink", "rin", "ring", "rieng"],
    correct: 2,
  },

  // ─── LETTERS EN KLANKEN (technisch lezen: niet voorlezen) ──────
  {
    id: "g3-letters-1a", concept: "g3-letters-klanken", niveau: 1, nietVoorlezen: true,
    vraag: "Met welke letter begint 'roos'?",
    opties: ["o", "s", "r", "b"],
    correct: 2,
  },
  {
    id: "g3-letters-1b", concept: "g3-letters-klanken", niveau: 1, nietVoorlezen: true,
    vraag: "Met welke letter eindigt 'kam'?",
    opties: ["k", "m", "a", "n"],
    correct: 1,
  },
  {
    id: "g3-letters-1c", concept: "g3-letters-klanken", niveau: 1, nietVoorlezen: true,
    vraag: "Welk woord begint met een s?",
    opties: ["vos", "bus", "zon", "sok"],
    correct: 3,
  },
  {
    id: "g3-letters-1d", concept: "g3-letters-klanken", niveau: 1, nietVoorlezen: true,
    vraag: "Plak aan elkaar: p – e – n. Welk woord is het?",
    opties: ["pen", "pan", "pin", "net"],
    correct: 0,
  },
  {
    id: "g3-letters-2a", concept: "g3-letters-klanken", niveau: 2, nietVoorlezen: true,
    vraag: "Plak aan elkaar: r – ij – k. Welk woord is het?",
    opties: ["rek", "rok", "ruik", "rijk"],
    correct: 3,
  },
  {
    id: "g3-letters-2b", concept: "g3-letters-klanken", niveau: 2, nietVoorlezen: true,
    vraag: "Plak aan elkaar: m – ui – s. Welk woord is het?",
    opties: ["mus", "mees", "muis", "mis"],
    correct: 2,
  },
  {
    id: "g3-letters-2c", concept: "g3-letters-klanken", niveau: 2, nietVoorlezen: true,
    vraag: "In welk woord zit 'ou'?",
    opties: ["kaal", "koud", "kuil", "keus"],
    correct: 1,
  },
  {
    id: "g3-letters-2d", concept: "g3-letters-klanken", niveau: 2, nietVoorlezen: true,
    vraag: "In welk woord zit 'eu'?",
    opties: ["neus", "noot", "nat", "nee"],
    correct: 0,
  },

  // ─── WOORDJES EN ZINNETJES LEZEN (technisch lezen: niet voorlezen) ─
  {
    id: "g3-lezen-1a", concept: "g3-woordjes-zinnen-lezen", niveau: 1, nietVoorlezen: true,
    vraag: "Welk woord is een dier?",
    opties: ["boom", "pen", "koe", "sok"],
    correct: 2,
  },
  {
    id: "g3-lezen-1b", concept: "g3-woordjes-zinnen-lezen", niveau: 1, nietVoorlezen: true,
    vraag: "Welk woord kun je eten?",
    opties: ["kaas", "kast", "bus", "raam"],
    correct: 0,
  },
  {
    id: "g3-lezen-1c", concept: "g3-woordjes-zinnen-lezen", niveau: 1, nietVoorlezen: true,
    vraag: "Waar slaap je in?",
    opties: ["bad", "bel", "bak", "bed"],
    correct: 3,
  },
  {
    id: "g3-lezen-1d", concept: "g3-woordjes-zinnen-lezen", niveau: 1, nietVoorlezen: true,
    vraag: "Welk woord is een kleur?",
    opties: ["roos", "rood", "boot", "room"],
    correct: 1,
  },
  {
    id: "g3-lezen-2a", concept: "g3-woordjes-zinnen-lezen", niveau: 2, nietVoorlezen: true,
    vraag: "Lees: 'Sam zit in de boot.' Waar zit Sam?",
    opties: ["in de boom", "op de fiets", "in de boot", "in bed"],
    correct: 2,
  },
  {
    id: "g3-lezen-2b", concept: "g3-woordjes-zinnen-lezen", niveau: 2, nietVoorlezen: true,
    vraag: "Lees: 'Mees eet een peer.' Wat eet Mees?",
    opties: ["een peer", "een pen", "een beer", "een appel"],
    correct: 0,
  },
  {
    id: "g3-lezen-2c", concept: "g3-woordjes-zinnen-lezen", niveau: 2, nietVoorlezen: true,
    vraag: "Lees: 'Tim heeft een rode bal.' Welke kleur heeft de bal?",
    opties: ["geel", "blauw", "groen", "rood"],
    correct: 3,
  },
  {
    id: "g3-lezen-2d", concept: "g3-woordjes-zinnen-lezen", niveau: 2, nietVoorlezen: true,
    vraag: "Lees: 'De kat ligt op de mat.' Waar ligt de kat?",
    opties: ["in de mand", "op de mat", "op het dak", "onder de mat"],
    correct: 1,
  },
];

export default { concepten, vragen };

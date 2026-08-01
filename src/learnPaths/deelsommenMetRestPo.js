// Leerpad: Deelsommen met rest — groep 7-8 PO.
// Doorstroomtoets-onderdeel rekenen. Delen met rest, en in een verhaal kiezen
// of je naar boven of naar beneden afrondt.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Delen met rest", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Naar boven afronden (hoeveel nodig?)", emoji: "⬆️", from: 1, to: 1 },
  { letter: "C", title: "Naar beneden afronden (hoeveel vol?)", emoji: "⬇️", from: 2, to: 2 },
  { letter: "D", title: "In het echt: bussen, dozen, groepjes", emoji: "🚌", from: 3, to: 3 },
];

const steps = [
  // ─── A. Delen met rest ────────────────────────────────────
  {
    title: "Delen met rest",
    explanation:
      "Niet elke deelsom komt precies uit. Wat overblijft heet de **rest**.\n\n" +
      "*17 ÷ 5:* hoe vaak past 5 in 17? Drie keer (3 × 5 = 15), en er blijft **2** over. Je schrijft: **3 rest 2**.\n\n" +
      "**Stappen:**\n" +
      "1. Hoe vaak past de deler er helemaal in? (Dat is het hele antwoord.)\n" +
      "2. Wat blijft er over? (Dat is de rest.)\n\n" +
      "Komt het precies uit (rest 0)? Dan is de deling 'op'. Voorbeeld: 30 ÷ 6 = 5 rest 0.",
    checks: [
      {
        q: "Wat is 17 ÷ 5?",
        options: ["3 rest 2", "4 rest 0", "2 rest 7", "3 rest 5"],
        answer: 0,
        wrongHints: [null, "Dat getal keer de deler gaat over 17 heen — probeer het getal ervoor.", "De rest moet kleiner zijn dan de deler (5).", "De rest kan niet gelijk zijn aan de deler."],
        uitlegPad: {
          stappen: [{ titel: "Hoe vaak past 5 in 17?", tekst: "3 × 5 = 15. Er blijft 17 − 15 = 2 over. Dus 3 rest 2." }],
          niveaus: {
            basis: "5 past 3 keer in 17 (15), met 2 over → 3 rest 2.",
            simpeler: "Tel: 5, 10, 15 — dat is 3 keer. Hoeveel mist er nog tot 17?",
            nogSimpeler: "3 × 5 = 15. 17 − 15 = ?",
          },
        },
      },
      {
        q: "Wat is 23 ÷ 4?",
        options: ["5 rest 3", "6 rest 1", "5 rest 4", "4 rest 7"],
        answer: 0,
        wrongHints: [null, "Dat getal keer de deler gaat over 23 heen — probeer het getal ervoor.", "De rest moet kleiner zijn dan de deler.", "De rest mag niet groter zijn dan de deler."],
        uitlegPad: {
          stappen: [{ titel: "Hoe vaak past 4 in 23?", tekst: "5 × 4 = 20. Rest: 23 − 20 = 3. Dus 5 rest 3." }],
          niveaus: {
            basis: "4 past 5 keer in 23 (20), met 3 over.",
            simpeler: "Tel met 4: 4, 8, 12, 16, 20 — dat is 5 keer. Wat blijft over tot 23?",
            nogSimpeler: "5 × 4 = 20. 23 − 20 = ?",
          },
        },
      },
      {
        q: "Wat betekent de 'rest' in een deelsom?",
        options: ["wat overblijft na eerlijk verdelen", "het hele antwoord", "de deler", "het dubbele"],
        answer: 0,
        wrongHints: [null, "Dat is het quotiënt, niet de rest.", "De deler is waardoor je deelt.", "Dat klopt niet."],
        uitlegPad: {
          stappen: [{ titel: "Rest = wat overblijft", tekst: "De rest is wat er overblijft als je niet meer eerlijk kunt verdelen." }],
          niveaus: {
            basis: "De rest is wat overblijft na het verdelen.",
            simpeler: "Bij 17 ÷ 5 = 3 rest 2: wat is die 2?",
            nogSimpeler: "Is de rest wat overblijft of het hele antwoord?",
          },
        },
      },
      {
        q: "Wat is 30 ÷ 6?",
        options: ["5 rest 0", "5 rest 6", "6 rest 0", "4 rest 6"],
        answer: 0,
        wrongHints: [null, "Een rest kan nooit gelijk zijn aan de deler — dat zou betekenen dat je nog een keer had kunnen delen.", "Dat getal keer de deler gaat over 30 heen.", "Als er nog een keer de deler overblijft, kun je nog één keer verdelen — probeer dat."],
        uitlegPad: {
          stappen: [{ titel: "Komt precies uit", tekst: "6 × 5 = 30, precies. Er blijft niets over: 5 rest 0." }],
          niveaus: {
            basis: "6 past precies 5 keer in 30 → 5 rest 0.",
            simpeler: "5 × 6 = 30. Blijft er iets over? Nee.",
            nogSimpeler: "30 ÷ 6 = ? (komt het precies uit?)",
          },
        },
      },
      {
        q: "Wat is 41 ÷ 7?",
        options: ["5 rest 6", "6 rest 1", "5 rest 7", "4 rest 9"],
        answer: 0,
        wrongHints: [null, "Dat getal keer de deler gaat over 41 heen — probeer het getal ervoor.", "De rest moet kleiner zijn dan de deler (7).", "De rest mag niet groter zijn dan de deler."],
        uitlegPad: {
          stappen: [{ titel: "Hoe vaak past 7 in 41?", tekst: "5 × 7 = 35. Rest: 41 − 35 = 6. Dus 5 rest 6." }],
          niveaus: {
            basis: "7 past 5 keer in 41 (35), met 6 over.",
            simpeler: "Tel met 7: 7, 14, 21, 28, 35 — dat is 5 keer. Wat blijft er over tot 41?",
            nogSimpeler: "5 × 7 = 35. 41 − 35 = ?",
          },
        },
      },
      {
        q: "Wat is 50 ÷ 8?",
        options: ["6 rest 2", "7 rest 1", "5 rest 10", "6 rest 8"],
        answer: 0,
        wrongHints: [null, "Dat getal keer de deler gaat over 50 heen.", "De rest mag nooit groter zijn dan de deler.", "De rest kan niet gelijk zijn aan de deler."],
        uitlegPad: {
          stappen: [{ titel: "Hoe vaak past 8 in 50?", tekst: "6 × 8 = 48. Rest: 50 − 48 = 2. Dus 6 rest 2." }],
          niveaus: {
            basis: "8 past 6 keer in 50 (48), met 2 over.",
            simpeler: "Tel met 8: 8, 16, 24, 32, 40, 48 — dat is 6 keer. Hoeveel mist er nog tot 50?",
            nogSimpeler: "6 × 8 = 48. 50 − 48 = ?",
          },
        },
      },
      {
        q: "Mag de rest bij 19 ÷ 4 gelijk zijn aan 4?",
        options: ["Nee, de rest moet kleiner zijn dan 4", "Ja, dat mag", "De rest mag gelijk zijn aan de deler", "Dat hangt af van de som"],
        answer: 0,
        wrongHints: [null, "Kijk eens: als er nog 4 overblijven, kun je nog één keer verdelen.", "Als de rest gelijk is aan de deler, kun je nog een keer verdelen — dan is je antwoord fout.", "De rest is altijd kleiner dan de deler."],
        uitlegPad: {
          stappen: [{ titel: "Rest < deler", tekst: "De rest moet altijd kleiner zijn dan de deler. Overblijft er nog één keer de deler? Dan kun je nog een keer verdelen." }],
          niveaus: {
            basis: "De rest is altijd kleiner dan de deler.",
            simpeler: "Als er nog 4 overblijven en je deelt door 4, kun je nog eens delen.",
            nogSimpeler: "Is 4 rest 4 een goed antwoord bij ÷ 4?",
          },
        },
      },
    ],
  },

  // ─── B. Naar boven ────────────────────────────────────────
  {
    title: "Naar boven afronden — hoeveel heb je nodig?",
    explanation:
      "Soms moet je een rest meetellen als een **extra**. Dat heet **naar boven afronden**.\n\n" +
      "Voorbeeld: 50 kinderen, een bus heeft 8 plaatsen. 50 ÷ 8 = 6 rest 2. Die 2 overgebleven kinderen moeten óók mee, dus heb je een **7e bus** nodig. → **7 bussen.**\n\n" +
      "**Wanneer naar boven?** Als de vraag is *hoeveel heb je nodig* en de rest ook 'meegenomen' moet worden (kinderen, dozen die je nodig hebt, weken om te sparen). De rest mag je niet weglaten.",
    checks: [
      {
        q: "Er gaan 50 kinderen op excursie. In een bus passen 8 kinderen. Hoeveel bussen zijn er nodig?",
        options: ["7", "6", "8", "6 rest 2"],
        answer: 0,
        wrongHints: [null, "Dan blijven er 2 kinderen staan — die moeten ook mee.", "Te veel — reken nog eens.", "Een aantal bussen is een heel getal."],
        uitlegPad: {
          stappen: [{ titel: "Rest erbij = extra bus", tekst: "50 ÷ 8 = 6 rest 2. De 2 overgebleven kinderen hebben ook een bus nodig → 6 + 1 = 7 bussen." }],
          niveaus: {
            basis: "6 bussen vol (48 kinderen), 2 over → nog 1 bus = 7.",
            simpeler: "Passen alle kinderen in 6 bussen? Nee, er blijven er 2 over. Dus eentje extra.",
            nogSimpeler: "6 bussen is niet genoeg voor iedereen — hoeveel dan wel?",
          },
        },
      },
      {
        q: "Waarom rond je bij de bussen naar boven af?",
        options: [
          "de overgebleven kinderen moeten ook mee",
          "bussen zijn duur",
          "het is altijd naar boven",
          "8 is een even getal",
        ],
        answer: 0,
        wrongHints: [null, "De prijs heeft er niets mee te maken.", "Niet altijd — soms rond je juist naar beneden af.", "Of het even is, maakt niet uit."],
        uitlegPad: {
          stappen: [{ titel: "Niemand blijft achter", tekst: "Je rondt naar boven af omdat de overgebleven kinderen ook vervoerd moeten worden." }],
          niveaus: {
            basis: "De rest (kinderen) heeft ook een bus nodig → naar boven.",
            simpeler: "Mogen er kinderen achterblijven? Nee, dus extra bus.",
            nogSimpeler: "Moeten de overgebleven kinderen ook mee?",
          },
        },
      },
      {
        q: "In een lift passen 5 personen. Er staan 12 mensen te wachten. Hoe vaak moet de lift minstens omhoog?",
        options: ["3 keer", "2 keer", "4 keer", "2 rest 2"],
        answer: 0,
        wrongHints: [null, "Dan blijven er 2 mensen staan.", "Te veel.", "Een aantal keer is een heel getal."],
        uitlegPad: {
          stappen: [{ titel: "Rest = extra rit", tekst: "12 ÷ 5 = 2 rest 2. De 2 overgebleven mensen moeten ook omhoog → 3 ritten." }],
          niveaus: {
            basis: "2 volle ritten (10 mensen), 2 over → nog 1 rit = 3.",
            simpeler: "Passen 12 mensen in 2 ritten van 5? Nee, 2 blijven over.",
            nogSimpeler: "10 mensen in 2 ritten, en die laatste 2?",
          },
        },
      },
      {
        q: "Je spaart €5 per week. Een spel kost €38. Na hoeveel weken heb je genoeg gespaard?",
        options: ["8 weken", "7 weken", "6 weken", "7,6 weken"],
        answer: 0,
        wrongHints: [null, "Na 7 weken heb je €35 — net niet genoeg.", "Veel te weinig.", "Een aantal weken is een heel getal."],
        uitlegPad: {
          stappen: [{ titel: "Genoeg = naar boven", tekst: "38 ÷ 5 = 7 rest 3. Na 7 weken heb je €35 (te weinig), pas na 8 weken €40. Dus 8 weken." }],
          niveaus: {
            basis: "7 weken = €35 (te weinig), 8 weken = €40 (genoeg).",
            simpeler: "Heb je na 7 weken (€35) genoeg voor €38? Nee, dus eentje erbij.",
            nogSimpeler: "Is €35 genoeg voor €38? Hoeveel weken dan wel?",
          },
        },
      },
      {
        q: "In een minibus passen 9 personen. Er moeten 33 mensen vervoerd worden. Hoeveel ritten heeft de minibus nodig?",
        options: ["4 ritten", "3 ritten", "5 ritten", "3 rest 6"],
        answer: 0,
        wrongHints: [null, "In 3 ritten kunnen maar 27 mensen — er blijven er 6 staan.", "Te veel, dat zijn meer ritten dan nodig.", "Een aantal ritten is een heel getal."],
        uitlegPad: {
          stappen: [{ titel: "Rest = extra rit", tekst: "33 ÷ 9 = 3 rest 6. De 6 overgebleven mensen hebben ook een rit nodig → 4 ritten." }],
          niveaus: {
            basis: "3 volle ritten (27 mensen), 6 over → nog 1 rit = 4.",
            simpeler: "Passen alle 33 mensen in 3 ritten van 9? Nee, er blijven er 6 over.",
            nogSimpeler: "27 mensen in 3 ritten, en die laatste 6?",
          },
        },
      },
      {
        q: "Dozen met 6 boeken. Je wilt 45 boeken verzenden. Hoeveel dozen heb je nodig?",
        options: ["8 dozen", "7 dozen", "7 rest 3", "9 dozen"],
        answer: 0,
        wrongHints: [null, "In 7 dozen passen maar 42 boeken — 3 blijven over.", "Een aantal dozen is een heel getal.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Rest = extra doos", tekst: "45 ÷ 6 = 7 rest 3. De 3 overgebleven boeken hebben ook een doos nodig → 8 dozen." }],
          niveaus: {
            basis: "7 volle dozen (42), 3 over → nog 1 doos = 8.",
            simpeler: "Passen 45 boeken in 7 dozen (42)? Nee, dus eentje extra.",
            nogSimpeler: "42 boeken in 7 dozen, en die laatste 3?",
          },
        },
      },
    ],
  },

  // ─── C. Naar beneden ──────────────────────────────────────
  {
    title: "Naar beneden afronden — hoeveel vol/compleet?",
    explanation:
      "Soms telt een rest juist **niet** mee, omdat hij niet 'compleet' is. Dan rond je **naar beneden** af (je laat de rest weg).\n\n" +
      "Voorbeeld: 26 eieren, in een doos passen 6. 26 ÷ 6 = 4 rest 2. Je hebt **4 volle dozen** (en 2 losse eieren die geen volle doos vullen). → **4 volle dozen.**\n\n" +
      "**Wanneer naar beneden?** Als de vraag is *hoeveel hele/volle* er zijn. Een halfvolle doos of een half stuk telt dan niet mee.",
    checks: [
      {
        q: "Je hebt 26 eieren. In een doos passen er 6. Hoeveel volle dozen kun je maken?",
        options: ["4", "5", "6", "4 rest 2"],
        answer: 0,
        wrongHints: [null, "De 5e doos zou niet vol zijn (maar 2 eieren).", "Te veel.", "Een aantal dozen is een heel getal."],
        uitlegPad: {
          stappen: [{ titel: "Alleen volle dozen tellen", tekst: "26 ÷ 6 = 4 rest 2. Er zijn 4 volle dozen; de 2 overige eieren vullen geen hele doos." }],
          niveaus: {
            basis: "4 volle dozen (24 eieren), 2 over die geen volle doos vullen.",
            simpeler: "Hoeveel keer kun je een doos van 6 helemaal vullen met 26 eieren?",
            nogSimpeler: "4 × 6 = 24. Is er een 5e volle doos? Nee.",
          },
        },
      },
      {
        q: "Waarom rond je bij volle dozen naar beneden af?",
        options: [
          "een doos die niet vol is, telt niet als 'vol'",
          "eieren zijn breekbaar",
          "het is altijd naar beneden",
          "6 is een even getal",
        ],
        answer: 0,
        wrongHints: [null, "Breekbaarheid heeft er niets mee te maken.", "Niet altijd — soms juist naar boven.", "Of het even is, maakt niet uit."],
        uitlegPad: {
          stappen: [{ titel: "Alleen complete tellen", tekst: "Bij 'hoeveel volle' tellen alleen complete dozen mee; een halfvolle doos is niet vol." }],
          niveaus: {
            basis: "Een niet-volle doos telt niet als vol → naar beneden.",
            simpeler: "Is een doos met maar 2 eieren een volle doos? Nee.",
            nogSimpeler: "Telt een halfvolle doos als vol?",
          },
        },
      },
      {
        q: "Je hebt 100 cm lint. Je knipt er stukken van 30 cm af. Hoeveel hele stukken krijg je?",
        options: ["3", "4", "10", "3,3"],
        answer: 0,
        wrongHints: [null, "Na 3 stukken is er nog 10 cm — te weinig voor een 4e stuk van 30.", "Dat is de rest in cm, geen aantal stukken.", "Een aantal stukken is een heel getal."],
        uitlegPad: {
          stappen: [{ titel: "Hele stukken", tekst: "100 ÷ 30 = 3 rest 10. Je krijgt 3 hele stukken; de overgebleven 10 cm is te kort voor nog een stuk van 30." }],
          niveaus: {
            basis: "3 stukken van 30 = 90 cm, met 10 cm over (te kort).",
            simpeler: "Hoe vaak past 30 helemaal in 100?",
            nogSimpeler: "30, 60, 90 — past 30 er nog een 4e keer in 100?",
          },
        },
      },
      {
        q: "In een verhaaltje staat: 'Hoeveel hele weken zitten er in 45 dagen?' (1 week = 7 dagen)",
        options: ["6 weken", "7 weken", "6 rest 3", "45"],
        answer: 0,
        wrongHints: [null, "Na 6 weken (42 dagen) blijven er 3 dagen over — geen hele week.", "Dat is de rest, geen aantal weken.", "Dat is het aantal dagen, niet weken."],
        uitlegPad: {
          stappen: [{ titel: "Hele weken", tekst: "45 ÷ 7 = 6 rest 3. Er zijn 6 hele weken; de 3 overgebleven dagen vormen geen volledige week." }],
          niveaus: {
            basis: "6 hele weken (42 dagen), 3 dagen over.",
            simpeler: "Hoe vaak past 7 helemaal in 45?",
            nogSimpeler: "6 × 7 = 42. Is er nog een hele week in de laatste 3 dagen?",
          },
        },
      },
      {
        q: "Je hebt 58 kleurpotloden. In een bakje passen 10. Hoeveel volle bakjes kun je vullen?",
        options: ["5", "6", "5 rest 8", "10"],
        answer: 0,
        wrongHints: [null, "Een 6e bakje heeft maar 8 potloden — niet vol.", "Dat is de rest, geen aantal bakjes.", "Dat is het aantal per bakje."],
        uitlegPad: {
          stappen: [{ titel: "Volle bakjes = naar beneden", tekst: "58 ÷ 10 = 5 rest 8. Er zijn 5 volle bakjes; de 8 overige potloden vullen geen heel bakje." }],
          niveaus: {
            basis: "5 volle bakjes (50 potloden), 8 over die geen vol bakje zijn.",
            simpeler: "Hoe vaak past 10 helemaal in 58?",
            nogSimpeler: "5 × 10 = 50. Is er een 6e vol bakje? Nee.",
          },
        },
      },
      {
        q: "Je hebt 38 foto's. Per pagina passen er 4. Hoeveel volle pagina's heb je?",
        options: ["9", "10", "9 rest 2", "4"],
        answer: 0,
        wrongHints: [null, "De 10e pagina zou maar 2 foto's hebben — niet vol.", "Dat is de rest, geen aantal pagina's.", "Dat is het aantal per pagina."],
        uitlegPad: {
          stappen: [{ titel: "Volle pagina's = naar beneden", tekst: "38 ÷ 4 = 9 rest 2. Er zijn 9 volle pagina's; de 2 overige foto's vullen geen hele pagina." }],
          niveaus: {
            basis: "9 volle pagina's (36 foto's), 2 over.",
            simpeler: "Hoe vaak past 4 helemaal in 38?",
            nogSimpeler: "9 × 4 = 36. Is er een 10e volle pagina?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — boven of beneden?",
    explanation:
      "De truc bij verhaaltjessommen is: **kies of je naar boven of naar beneden afrondt.**\n\n" +
      "• **Naar boven** als alles/iedereen mee moet of als je genoeg moet hebben: *hoeveel bussen/dozen heb je nódig?* (rest telt mee → eentje extra).\n" +
      "• **Naar beneden** als je telt hoeveel **hele/volle** er zijn: *hoeveel volle dozen/hele stukken?* (rest telt niet mee).\n\n" +
      "Lees de vraag dus goed: gaat het om *nodig hebben* of om *hoeveel compleet*?",
    checks: [
      {
        q: "Een klas heeft 45 leerlingen. Ze maken groepjes van 4. Hoeveel volledige groepjes van 4 zijn er?",
        options: ["11", "12", "11 rest 1", "9"],
        answer: 0,
        wrongHints: [null, "Het 12e groepje zou maar 1 leerling hebben — niet vol.", "Dat is de rest, geen aantal groepjes.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Volledige groepjes = naar beneden", tekst: "45 ÷ 4 = 11 rest 1. Er zijn 11 volledige groepjes; 1 leerling blijft over." }],
          niveaus: {
            basis: "11 groepjes van 4 (44), 1 leerling over.",
            simpeler: "Hoe vaak past 4 helemaal in 45?",
            nogSimpeler: "11 × 4 = 44. Is er een 12e vol groepje?",
          },
        },
      },
      {
        q: "Bij die 45 leerlingen en groepjes van 4: hoeveel leerlingen zitten er níét in een vol groepje?",
        options: ["1", "4", "0", "3"],
        answer: 0,
        wrongHints: [null, "Dat is een heel groepje, niet de rest.", "Er blijft wél iemand over.", "Reken de rest nog eens uit."],
        uitlegPad: {
          stappen: [{ titel: "De rest", tekst: "45 ÷ 4 = 11 rest 1. Die rest van 1 is de leerling die niet in een vol groepje past." }],
          niveaus: {
            basis: "De rest is 1 leerling.",
            simpeler: "11 groepjes × 4 = 44. Hoeveel van de 45 blijft over?",
            nogSimpeler: "45 − 44 = ?",
          },
        },
      },
      {
        q: "Voor 50 appels heb je dozen nodig. In een doos passen 12 appels. Hoeveel dozen heb je nodig?",
        options: ["5", "4", "4 rest 2", "6"],
        answer: 0,
        wrongHints: [null, "In 4 dozen passen maar 48 appels — 2 blijven over.", "Dat is de rest, geen aantal dozen.", "Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Nodig = naar boven", tekst: "50 ÷ 12 = 4 rest 2. De 2 overgebleven appels hebben ook een doos nodig → 5 dozen." }],
          niveaus: {
            basis: "4 volle dozen (48), 2 over → nog 1 doos = 5.",
            simpeler: "Passen 50 appels in 4 dozen (48)? Nee, dus eentje extra.",
            nogSimpeler: "48 appels in 4 dozen, en die laatste 2?",
          },
        },
      },
      {
        q: "Welke vraag vraagt om naar BENEDEN afronden?",
        options: [
          "Hoeveel volle kratten van 6 flessen maak je van 20 flessen?",
          "Hoeveel kratten heb je nodig voor 20 flessen?",
          "Hoeveel bussen zijn er nodig voor 20 kinderen?",
          "Na hoeveel weken sparen heb je genoeg?",
        ],
        answer: 0,
        wrongHints: [null, "'Nodig' betekent dat de rest ook mee moet → naar boven.", "'Nodig' → naar boven.", "'Genoeg' → naar boven."],
        uitlegPad: {
          stappen: [{ titel: "'Volle' = naar beneden", tekst: "Bij 'hoeveel volle kratten' telt een niet-volle krat niet mee → naar beneden. Bij 'nodig' of 'genoeg' rond je naar boven af." }],
          niveaus: {
            basis: "'Hoeveel volle' → naar beneden. 'Nodig/genoeg' → naar boven.",
            simpeler: "Welke vraag gaat over hoeveel er compleet/vol zijn?",
            nogSimpeler: "Welke vraag heeft het woord 'volle'?",
          },
        },
      },
      {
        q: "75 leerlingen moeten naar het zwembad. Een touringcar heeft 25 plaatsen. Hoeveel bussen zijn er nodig?",
        options: ["3", "2", "4", "2 rest 25"],
        answer: 0,
        wrongHints: [null, "In 2 bussen passen maar 50 leerlingen — te weinig.", "Reken nog eens: 75 ÷ 25.", "Een aantal bussen is een heel getal."],
        uitlegPad: {
          stappen: [{ titel: "75 ÷ 25", tekst: "75 ÷ 25 = 3 rest 0. Het komt precies uit: 3 bussen zijn genoeg voor iedereen." }],
          niveaus: {
            basis: "75 ÷ 25 = 3 precies → 3 bussen.",
            simpeler: "25, 50, 75 — hoe vaak past 25 in 75?",
            nogSimpeler: "3 × 25 = ?",
          },
        },
      },
      {
        q: "Een klas van 29 leerlingen maakt duo's. Hoeveel duo's zijn er, en hoeveel leerlingen blijven over?",
        options: ["14 duo's, 1 over", "14 duo's, 0 over", "15 duo's, 0 over", "13 duo's, 3 over"],
        answer: 0,
        wrongHints: [null, "29 is een oneven getal — er blijft er altijd één over.", "15 duo's zijn 30 leerlingen — te veel.", "Reken 29 ÷ 2 nog eens."],
        uitlegPad: {
          stappen: [{ titel: "29 ÷ 2", tekst: "29 ÷ 2 = 14 rest 1. Er zijn 14 duo's en 1 leerling blijft over." }],
          niveaus: {
            basis: "14 × 2 = 28, plus 1 = 29. Dus 14 duo's en 1 over.",
            simpeler: "Hoe vaak past 2 helemaal in 29?",
            nogSimpeler: "14 × 2 = 28. 29 − 28 = ?",
          },
        },
      },
      {
        q: "Bij een wedstrijd mogen teams van 3 meedoen. Er zijn 22 spelers. Hoeveel volledige teams zijn er?",
        options: ["7", "8", "7 rest 1", "6"],
        answer: 0,
        wrongHints: [null, "Een 8e team zou maar 1 speler hebben — niet vol.", "Dat is de rest, geen aantal teams.", "Reken 22 ÷ 3 nog eens."],
        uitlegPad: {
          stappen: [{ titel: "22 ÷ 3 = naar beneden", tekst: "22 ÷ 3 = 7 rest 1. Er zijn 7 volledige teams; 1 speler blijft over." }],
          niveaus: {
            basis: "7 × 3 = 21, plus 1 = 22. Dus 7 volledige teams.",
            simpeler: "Hoe vaak past 3 helemaal in 22?",
            nogSimpeler: "7 × 3 = 21. Is er een 8e vol team?",
          },
        },
      },
    ],
  },
];

export default {
  id: "deelsommen-met-rest-po",
  title: "Deelsommen met rest",
  subject: "rekenen",
  level: "groep7-8",
  sloThema: "rekenen-delen-rest",
  chapters,
  steps,
  prerequisites: [],
};

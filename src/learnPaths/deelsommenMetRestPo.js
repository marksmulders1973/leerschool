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
        q: "Hoeveel is 17 ÷ 5?",
        options: ["3 rest 2", "4 rest 0", "2 rest 7", "3 rest 5"],
        answer: 0,
        wrongHints: [null, "Dat getal keer de deler gaat over 17 heen — probeer het getal ervoor.", "De rest moet kleiner zijn dan de deler (5).", "De rest kan niet gelijk zijn aan de deler."],
        uitlegPad: {
          stappen: [
            { titel: "Zoek de tafel van 5", tekst: "Tel op in stappen van 5: 5, 10, 15, 20... Welk getal uit de rij komt het dichtst bij 17, zonder eroverheen te gaan?" },
            { titel: "Wat blijft er liggen?", tekst: "Trek het getal dat je vond af van 17. Dat overgebleven stukje schrijf je achter het woordje 'rest' — en het moet kleiner zijn dan 5." },
          ],
          woorden: [{ woord: "rest", uitleg: "Het stukje dat overblijft als een deelsom niet precies uitkomt." }],
          theorie: "Bij delen met rest zoek je eerst hoe vaak de deler er **helemaal** in past, zonder eroverheen te gaan. Wat je daarna nog overhoudt, is de rest. Die rest moet altijd **kleiner** zijn dan de deler.",
          voorbeelden: [{ type: "thuis", tekst: "Je verdeelt 19 knikkers eerlijk over 4 vriendjes: iedereen krijgt evenveel, en er blijven een paar knikkers over die niet meer eerlijk te verdelen zijn." }],
          basiskennis: [{ onderwerp: "Tafels kennen", uitleg: "Om snel te delen met rest moet je de tafels (zoals de tafel van 5) uit je hoofd kennen." }],
          niveaus: {
            basis: "5 past 3 keer in 17 (15), met 2 over → 3 rest 2.",
            simpeler: "Tel: 5, 10, 15 — dat is 3 keer. Hoeveel mist er nog tot 17?",
            nogSimpeler: "3 × 5 = 15. 17 − 15 = ?",
          },
        },
      },
      {
        q: "Hoeveel is 23 ÷ 4?",
        options: ["5 rest 3", "6 rest 1", "5 rest 4", "4 rest 7"],
        answer: 0,
        wrongHints: [null, "Dat getal keer de deler gaat over 23 heen — probeer het getal ervoor.", "De rest moet kleiner zijn dan de deler.", "De rest mag niet groter zijn dan de deler."],
        uitlegPad: {
          stappen: [
            { titel: "Tel op in stappen van 4", tekst: "4, 8, 12, 16, 20, 24... Welk getal uit deze rij komt het dichtst bij 23, zonder eroverheen te gaan?" },
            { titel: "Reken de rest uit", tekst: "Trek het getal dat je vond af van 23. Controleer daarna: is wat overblijft kleiner dan 4?" },
          ],
          woorden: [{ woord: "veelvoud", uitleg: "Een getal dat ontstaat door steeds hetzelfde getal op te tellen, zoals 4, 8, 12, 16 — allemaal veelvouden van 4." }],
          theorie: "Bij een deelsom met rest reken je eerst uit hoe vaak de deler volledig past. Het stukje dat daarna nog overblijft, is de rest — en die is altijd kleiner dan de deler zelf.",
          voorbeelden: [{ type: "school", tekst: "Een juf verdeelt 27 potloden over tafels van 4 leerlingen: ze telt hoeveel tafels ze helemaal kan vullen en wat er dan nog over is." }],
          basiskennis: [{ onderwerp: "Aftrekken", uitleg: "Om de rest te vinden moet je nauwkeurig kunnen aftrekken." }],
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
          stappen: [
            { titel: "Denk aan eerlijk verdelen", tekst: "Bij een deelsom probeer je een hoeveelheid zo eerlijk mogelijk te verspreiden over een aantal groepjes." },
            { titel: "Wat gebeurt er als het niet precies past?", tekst: "Soms lukt eerlijk verdelen niet helemaal. Er is dan een klein stukje dat niet meer bij een volle groep hoort." },
          ],
          woorden: [{ woord: "verdelen", uitleg: "Een hoeveelheid in gelijke stukken of groepen opsplitsen." }],
          theorie: "Bij een deelsom is het deeltal de hoeveelheid die je verdeelt en de deler het getal waarmee je verdeelt. Past de deler niet precies, dan blijft er een stukje over dat geen eigen groep meer vormt.",
          voorbeelden: [{ type: "sport", tekst: "Een sportleraar verdeelt 19 kinderen in teams van 4: hij telt hoeveel volle teams er zijn en hoeveel kinderen dan nog niet in een team zitten." }],
          basiskennis: [{ onderwerp: "Deler en deeltal", uitleg: "Het deeltal is het getal dat je verdeelt, de deler is het getal waarmee je deelt." }],
          niveaus: {
            basis: "De rest is wat overblijft na het verdelen.",
            simpeler: "Bij 17 ÷ 5 = 3 rest 2: wat is die 2?",
            nogSimpeler: "Is de rest wat overblijft of het hele antwoord?",
          },
        },
      },
      {
        q: "Hoeveel is 30 ÷ 6?",
        options: ["5 rest 0", "5 rest 6", "6 rest 0", "4 rest 6"],
        answer: 0,
        wrongHints: [null, "Een rest kan nooit gelijk zijn aan de deler — dat zou betekenen dat je nog een keer had kunnen delen.", "Dat getal keer de deler gaat over 30 heen.", "Als er nog een keer de deler overblijft, kun je nog één keer verdelen — probeer dat."],
        uitlegPad: {
          stappen: [
            { titel: "Tel op in stappen van 6", tekst: "6, 12, 18, 24, 30... Hoever kun je tellen zonder over de 30 heen te gaan?" },
            { titel: "Klopt het precies?", tekst: "Vergelijk het laatste getal uit je rij met 30. Zijn ze precies gelijk? Dan blijft er niets liggen." },
          ],
          woorden: [{ woord: "deling die 'op' gaat", uitleg: "Een deelsom waarbij niets overblijft — de rest is dan nul." }],
          theorie: "Niet elke deelsom laat een rest achter. Past de deler precies een aantal keer in het deeltal, dan is de rest nul en zeg je dat de deling 'op gaat'.",
          voorbeelden: [{ type: "winkel", tekst: "Een winkelier verdeelt 24 appels eerlijk over 4 bakjes: soms komt dat precies uit en soms blijft er eentje liggen." }],
          basiskennis: [{ onderwerp: "Terugvermenigvuldigen", uitleg: "Je kunt een deelsom controleren door je antwoord terug te vermenigvuldigen met de deler." }],
          niveaus: {
            basis: "6 past precies 5 keer in 30 → 5 rest 0.",
            simpeler: "5 × 6 = 30. Blijft er iets over? Nee.",
            nogSimpeler: "30 ÷ 6 = ? (komt het precies uit?)",
          },
        },
      },
      {
        q: "Hoeveel is 41 ÷ 7?",
        options: ["5 rest 6", "6 rest 1", "5 rest 7", "4 rest 9"],
        answer: 0,
        wrongHints: [null, "Dat getal keer de deler gaat over 41 heen — probeer het getal ervoor.", "De rest moet kleiner zijn dan de deler (7).", "De rest mag niet groter zijn dan de deler."],
        uitlegPad: {
          stappen: [
            { titel: "Tel op in stappen van 7", tekst: "7, 14, 21, 28, 35, 42... Welk getal uit deze rij mag niet groter zijn dan 41?" },
            { titel: "Bereken wat overblijft", tekst: "Trek dat getal af van 41. Controleer ook: is de rest kleiner dan 7? Zo niet, dan kon je nog verder tellen." },
          ],
          woorden: [{ woord: "deler", uitleg: "Het getal waardoor je deelt — hier is dat 7." }],
          theorie: "Bij grotere deelsommen helpt het om de tafel van de deler in je hoofd op te zeggen, tot je bij het getal komt dat het dichtst bij het deeltal ligt zonder eroverheen te gaan.",
          voorbeelden: [{ type: "thuis", tekst: "Je verdeelt 30 stickers over 6 vriendinnen: je rekent uit hoeveel elk krijgt en wat er dan nog over is." }],
          basiskennis: [{ onderwerp: "Tafels tot en met 10", uitleg: "Voor deelsommen met rest moet je de tafels tot en met 10 vlot kunnen opzeggen." }],
          niveaus: {
            basis: "7 past 5 keer in 41 (35), met 6 over.",
            simpeler: "Tel met 7: 7, 14, 21, 28, 35 — dat is 5 keer. Wat blijft er over tot 41?",
            nogSimpeler: "5 × 7 = 35. 41 − 35 = ?",
          },
        },
      },
      {
        q: "Hoeveel is 50 ÷ 8?",
        options: ["6 rest 2", "7 rest 1", "5 rest 10", "6 rest 8"],
        answer: 0,
        wrongHints: [null, "Dat getal keer de deler gaat over 50 heen.", "De rest mag nooit groter zijn dan de deler.", "De rest kan niet gelijk zijn aan de deler."],
        uitlegPad: {
          stappen: [
            { titel: "Tel op in stappen van 8", tekst: "8, 16, 24, 32, 40, 48, 56... Welk getal komt het dichtst bij 50, zonder eroverheen te gaan?" },
            { titel: "Controleer de rest", tekst: "Trek dat getal af van 50. Is wat overblijft kleiner dan 8? Dan klopt je rest." },
          ],
          woorden: [{ woord: "rest", uitleg: "Wat overblijft nadat je zo vaak mogelijk de deler hebt afgetrokken." }],
          theorie: "Reken bij grotere getallen rustig stap voor stap: eerst zoeken hoe vaak de deler past, dan pas de rest berekenen door af te trekken.",
          voorbeelden: [{ type: "sport", tekst: "Bij een zwemles moeten 35 kinderen in groepjes van 6 een baan zwemmen: je rekent uit hoeveel volle groepjes er zijn en hoeveel kinderen over zijn." }],
          basiskennis: [{ onderwerp: "Aftrekken met grote getallen", uitleg: "Reken rustig in twee stappen: eerst vermenigvuldigen, dan aftrekken." }],
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
          stappen: [
            { titel: "Wat betekent 'gelijk aan de deler'?", tekst: "Als er nog precies zo veel over is als de deler zelf, kun je daarmee eigenlijk nog een keer een groep vormen." },
            { titel: "Is de verdeling dan al klaar?", tekst: "Denk na: als je nog een hele groep extra kon maken, was de deelsom dan al helemaal afgerond?" },
          ],
          woorden: [{ woord: "deler", uitleg: "Het getal waardoor je deelt." }],
          theorie: "Een rest hoort altijd kleiner te zijn dan de deler. Is de rest even groot of groter, dan is de verdeling nog niet af — je kunt dan nog minstens één keer extra delen.",
          voorbeelden: [{ type: "school", tekst: "Bij het verdelen van 21 boeken over stapels van 5: als er nog 5 zouden overblijven, kon je daar nog een hele stapel bij maken." }],
          basiskennis: [{ onderwerp: "Vaste regel", uitleg: "Rest kleiner dan deler is een vaste regel bij delen met rest." }],
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
          stappen: [
            { titel: "Hoeveel bussen zijn helemaal vol?", tekst: "Reken 50 ÷ 8 uit met rest. Dat vertelt je hoeveel bussen je helemaal kunt vullen, en hoeveel kinderen daarna nog wachten." },
            { titel: "Waar blijven de overgebleven kinderen?", tekst: "Die kinderen kunnen niet gewoon thuisblijven — ook zij hebben vervoer nodig." },
            { titel: "Tel de extra bus mee", tekst: "Omdat de rest ook mee moet, komt er bovenop de volle bussen nog één extra bus bij voor de kinderen die overbleven." },
          ],
          woorden: [{ woord: "excursie", uitleg: "Een uitstapje met de klas, bijvoorbeeld naar een museum of dierentuin." }],
          theorie: "Bij dit soort verhaaltjes reken je eerst uit hoe vaak de bus (of doos, of groep) helemaal vol raakt. Blijft er daarna nog een groepje over, dan heeft dat groepje ook een plek nodig — je rondt dan **naar boven** af.",
          voorbeelden: [{ type: "sport", tekst: "Een sportclub vervoert spelers in busjes van 9 plaatsen voor een groep van 34 spelers: ook de laatste, kleinere groep spelers heeft een busje nodig." }],
          basiskennis: [{ onderwerp: "Delen met rest", uitleg: "Je moet eerst een deelsom met rest kunnen uitrekenen voordat je kunt bepalen hoeveel bussen nodig zijn." }],
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
          stappen: [
            { titel: "Denk aan de laatste, niet-volle bus", tekst: "Bij 50 ÷ 8 blijven er een paar kinderen over die niet meer in een volle bus passen." },
            { titel: "Mogen zij thuisblijven?", tekst: "Nee — iedereen gaat mee op excursie. Bedenk dus wat dat betekent voor het aantal bussen." },
          ],
          woorden: [{ woord: "naar boven afronden", uitleg: "De rest ook meetellen, zodat niemand of niets vergeten wordt." }],
          theorie: "Bij vragen als 'hoeveel heb je nodig' telt de rest altijd mee — die rest bestaat namelijk ook uit iets of iemand dat een plek moet krijgen.",
          voorbeelden: [{ type: "thuis", tekst: "Als je verhuisdozen nodig hebt voor je spullen, tel je de half-gevulde doos ook mee — die spullen moeten immers ook mee verhuizen." }],
          basiskennis: [{ onderwerp: "Rest verdient ook aandacht", uitleg: "Bij 'nodig hebben'-vragen telt de rest altijd mee, want die moet ook een plek krijgen." }],
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
          stappen: [
            { titel: "Hoeveel volle ritten kan de lift maken?", tekst: "12 ÷ 5 vertelt je hoeveel keer de lift helemaal vol kan, en hoeveel mensen daarna nog wachten." },
            { titel: "Blijven die mensen beneden staan?", tekst: "Nee — ook de mensen die overblijven willen naar boven. Wat betekent dat voor het aantal ritten?" },
          ],
          woorden: [{ woord: "minstens", uitleg: "Het kleinste aantal dat al genoeg is — niet meer dan nodig." }],
          theorie: "Bij 'hoe vaak minstens'-vragen hoort de rest bij een extra beurt, ook al is die beurt niet helemaal vol.",
          voorbeelden: [{ type: "winkel", tekst: "Een pakketbezorger heeft een busje voor 6 dozen tegelijk en moet 17 dozen bezorgen: ook de laatste, kleinere lading heeft nog een rit nodig." }],
          basiskennis: [{ onderwerp: "Rest = extra beurt", uitleg: "Bij 'hoe vaak minstens' telt de rest als een extra beurt, ook al is die niet vol." }],
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
          stappen: [
            { titel: "Reken uit hoeveel volle weken je spaart", tekst: "38 ÷ 5 vertelt je hoeveel hele weken van €5 je al gespaard hebt, en hoeveel euro je dan nog mist." },
            { titel: "Is dat genoeg?", tekst: "Kijk of het bedrag na die volle weken al hoog genoeg is voor €38. Zo niet, denk na wat er dan nog moet gebeuren." },
          ],
          woorden: [{ woord: "sparen", uitleg: "Geld opzij leggen totdat je genoeg hebt voor iets dat je wilt kopen." }],
          theorie: "Bij spaarvragen tel je net zo lang door tot het bedrag hoog genoeg is. Is één week extra nodig om over de grens te komen, dan reken je die erbij, ook al is die week niet helemaal 'vol' aan geld.",
          voorbeelden: [{ type: "thuis", tekst: "Je zusje spaart €4 per week voor een knuffel van €27: ook bij haar moet je kijken na hoeveel volle weken ze genoeg heeft." }],
          basiskennis: [{ onderwerp: "Vermenigvuldigen en vergelijken", uitleg: "Je moet per week kunnen uitrekenen hoeveel geld er al is, en dat vergelijken met het bedrag dat nodig is." }],
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
          stappen: [
            { titel: "Hoeveel volle ritten kan de minibus maken?", tekst: "33 ÷ 9 vertelt je hoeveel keer de minibus helemaal vol kan, en hoeveel mensen daarna nog wachten." },
            { titel: "Wat gebeurt er met de overgebleven mensen?", tekst: "Ook zij moeten vervoerd worden — denk na wat dat betekent voor het totale aantal ritten." },
          ],
          woorden: [{ woord: "minibus", uitleg: "Een kleine bus voor een beperkt aantal mensen." }],
          theorie: "Bij vervoersvragen tel je de volle ritten en voeg je daar, als er nog mensen overblijven, nog een extra rit aan toe voor die rest.",
          voorbeelden: [{ type: "school", tekst: "Een school regelt busjes van 7 plaatsen voor 30 leerlingen op schoolreis: ook de laatste, kleinere groep heeft een busje nodig." }],
          basiskennis: [{ onderwerp: "Naar boven afronden", uitleg: "Bij 'hoeveel nodig'-vragen rond je altijd naar boven af als er nog een rest is." }],
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
          stappen: [
            { titel: "Hoeveel volle dozen kun je vullen?", tekst: "45 ÷ 6 vertelt je hoeveel dozen je helemaal kunt vullen, en hoeveel boeken daarna nog over zijn." },
            { titel: "Passen die overgebleven boeken ergens anders?", tekst: "Nee — ook die boeken moeten verzonden worden. Denk na wat dat betekent voor het aantal dozen." },
          ],
          woorden: [{ woord: "verzenden", uitleg: "Iets opsturen naar iemand anders, bijvoorbeeld per post." }],
          theorie: "Bij verzendvragen telt elk overgebleven voorwerp mee — ook een paar losse stuks hebben een eigen doos nodig.",
          voorbeelden: [{ type: "winkel", tekst: "Een winkel verpakt 29 mokken in dozen van 4: ook de laatste, half-gevulde doos gaat mee de verzending in." }],
          basiskennis: [{ onderwerp: "Rest krijgt een eigen doos", uitleg: "Bij 'hoeveel dozen nodig' telt de rest altijd als een extra, niet-volle doos." }],
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
          stappen: [
            { titel: "Wat betekent 'vol'?", tekst: "Een doos van 6 is pas vol als er precies 6 eieren in zitten — niet meer en niet minder." },
            { titel: "Reken uit hoe vaak dat lukt", tekst: "Bereken 26 ÷ 6. Het losse stukje eieren dat overblijft, vormt geen volle doos meer." },
          ],
          woorden: [{ woord: "vol", uitleg: "Helemaal gevuld tot de rand — niet half, maar precies compleet." }],
          theorie: "Bij 'hoeveel volle' rond je **naar beneden** af: alleen complete groepen tellen mee, een groepje dat niet helemaal vol is telt niet mee.",
          voorbeelden: [{ type: "thuis", tekst: "Je pakt een doos eieren van 6 in voor de bakker en hebt 20 eieren: je rekent uit hoeveel volle dozen dat oplevert en hoeveel eieren los overblijven." }],
          basiskennis: [{ onderwerp: "Delen met rest", uitleg: "Je moet eerst kunnen uitrekenen wat de rest is voordat je weet hoeveel er compleet is." }],
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
          stappen: [
            { titel: "Denk aan een half-gevulde doos", tekst: "Bij 26 ÷ 6 blijven er een paar eieren over die geen doos meer vullen." },
            { titel: "Telt zo'n doos mee als 'vol'?", tekst: "Kijk goed naar het woord 'vol' in de vraag — telt iets dat niet compleet is daar wel of niet bij?" },
          ],
          woorden: [{ woord: "compleet", uitleg: "Helemaal af, niets ontbreekt en niets is te veel — hetzelfde als 'vol'." }],
          theorie: "Bij 'hoeveel volle'-vragen tel je alleen groepen die helemaal compleet zijn. Een groep die niet vol is, hoort niet mee te tellen, ook al zitten er wel wat in.",
          voorbeelden: [{ type: "school", tekst: "Een juf pakt schriften in setjes van 5 voor de klas: een setje van maar 2 schriften telt niet als een volle set." }],
          basiskennis: [{ onderwerp: "Naar boven of naar beneden", uitleg: "'Hoeveel volle/hele' → naar beneden. 'Hoeveel nodig/genoeg' → naar boven." }],
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
          stappen: [
            { titel: "Hoe vaak past een heel stuk van dertig centimeter?", tekst: "Reken uit hoe vaak dertig centimeter helemaal past in honderd centimeter, zonder eroverheen te gaan." },
            { titel: "Is het laatste stukje lang genoeg?", tekst: "Kijk wat er na de hele stukken nog over is aan lint. Is dat lang genoeg voor nog een heel stuk?" },
          ],
          woorden: [{ woord: "heel stuk", uitleg: "Een volledig, compleet stuk — niet een afgeknipt half stukje." }],
          theorie: "Bij lengtevragen rond je naar beneden af als er wordt gevraagd naar 'hele stukken'. Een reststukje dat te kort is voor nog een heel stuk telt niet mee.",
          voorbeelden: [{ type: "thuis", tekst: "Je knipt van 85 cm stof stukken van 20 cm voor een knutselwerkje: je rekent uit hoeveel hele stukken dat oplevert." }],
          basiskennis: [{ onderwerp: "Centimeters", uitleg: "Lengtes in centimeters kun je net als andere getallen delen met rest." }],
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
          stappen: [
            { titel: "Hoeveel hele weken zitten er in de dagen?", tekst: "Eén week heeft 7 dagen. Reken uit hoe vaak 7 dagen helemaal past in 45 dagen." },
            { titel: "Is het laatste stukje een hele week?", tekst: "Kijk wat er na de volle weken nog aan dagen over is. Is dat genoeg voor nog een complete week van 7 dagen?" },
          ],
          woorden: [{ woord: "hele week", uitleg: "Een volledige week van 7 dagen — geen dag mag ontbreken." }],
          theorie: "Bij tijdvragen met 'hele weken' tel je alleen de volledige weken van 7 dagen. Losse dagen die geen volle week meer vormen, tellen niet mee.",
          voorbeelden: [{ type: "sport", tekst: "Een zwemschool telt hoeveel hele trainingsweken er in 60 dagen zitten: de laatste, niet-volle week telt niet mee." }],
          basiskennis: [{ onderwerp: "Week = 7 dagen", uitleg: "Een week heeft altijd 7 dagen — dat getal gebruik je als deler." }],
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
          stappen: [
            { titel: "Wat betekent een 'vol' bakje?", tekst: "Een bakje van tien is pas vol als er precies tien potloden in zitten." },
            { titel: "Reken uit hoe vaak dat lukt", tekst: "Bereken achtenvijftig gedeeld door tien. Het losse stukje potloden dat overblijft, vormt geen vol bakje meer." },
          ],
          woorden: [{ woord: "vol bakje", uitleg: "Een bakje dat precies tot de rand gevuld is, niet half leeg." }],
          theorie: "Bij 'hoeveel volle bakjes' rond je naar beneden af: een bakje dat niet helemaal vol is, telt niet mee als vol.",
          voorbeelden: [{ type: "school", tekst: "Een klas verdeelt 43 stiften over bakjes van 8: het laatste bakje is niet vol en telt dus niet mee." }],
          basiskennis: [{ onderwerp: "Delen met rest", uitleg: "Eerst de rest uitrekenen, dan pas bepalen hoeveel er compleet is." }],
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
          stappen: [
            { titel: "Wat betekent een 'volle' pagina?", tekst: "Een pagina is pas vol als er precies vier foto's op staan." },
            { titel: "Reken uit hoe vaak dat lukt", tekst: "Bereken achtendertig gedeeld door vier. Het losse stukje foto's dat overblijft, vormt geen volle pagina meer." },
          ],
          woorden: [{ woord: "volle pagina", uitleg: "Een pagina die helemaal vol geplakt is, zonder lege plekjes." }],
          theorie: "Bij 'hoeveel volle pagina's' tel je alleen de pagina's die helemaal vol zitten. Een paar losse foto's die geen hele pagina vullen, tellen niet mee.",
          voorbeelden: [{ type: "thuis", tekst: "Je plakt 25 foto's in een album met vijf foto's per pagina: je rekent uit hoeveel volle pagina's dat oplevert." }],
          basiskennis: [{ onderwerp: "Vermenigvuldigen controleren", uitleg: "Je kunt checken door het aantal volle pagina's terug te vermenigvuldigen met het aantal foto's per pagina." }],
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
          stappen: [
            { titel: "Wat betekent een 'volledig' groepje?", tekst: "Een groepje van vier is pas volledig als er precies vier leerlingen in zitten." },
            { titel: "Reken uit hoe vaak dat lukt", tekst: "Bereken 45 ÷ 4. De leerling(en) die overblijven, vormen geen volledig groepje meer." },
          ],
          woorden: [{ woord: "volledig", uitleg: "Compleet, niets ontbreekt — hetzelfde als 'heel' of 'vol'." }],
          theorie: "Bij 'hoeveel volledige groepjes' rond je naar beneden af. Een groepje dat niet compleet is, telt niet mee, ook al zit er wel iemand in.",
          voorbeelden: [{ type: "sport", tekst: "Bij een voetbaltoernooi maakt een trainer teams van 5 uit 37 kinderen: hij rekent uit hoeveel volledige teams dat oplevert." }],
          basiskennis: [{ onderwerp: "Delen met rest", uitleg: "Eerst de rest uitrekenen, dan pas het aantal volledige groepjes bepalen." }],
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
          stappen: [
            { titel: "Denk terug aan de vorige vraag", tekst: "Bij vijfenveertig gedeeld door vier ontstonden een aantal volledige groepjes." },
            { titel: "Wat is de rest?", tekst: "Kijk naar het stukje leerlingen dat overbleef nadat alle volledige groepjes gevormd waren — dat stukje past nergens meer bij." },
          ],
          woorden: [{ woord: "rest", uitleg: "Het stukje dat overblijft nadat je zo veel mogelijk volle groepjes hebt gemaakt." }],
          theorie: "De rest van een deelsom is precies het aantal dat niet meer in een volledige groep past.",
          voorbeelden: [{ type: "school", tekst: "Bij het maken van tafelgroepjes van vier uit een klas van dertig blijft er soms een klein groepje leerlingen over dat niet compleet is." }],
          basiskennis: [{ onderwerp: "Rest herkennen", uitleg: "De rest is het antwoord op 'wat blijft er over', niet het aantal groepjes zelf." }],
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
          stappen: [
            { titel: "Hoeveel dozen zijn helemaal vol?", tekst: "Reken uit hoe vaak twaalf appels helemaal in vijftig appels passen." },
            { titel: "Wat gebeurt er met de appels die overblijven?", tekst: "Ook die appels moeten in een doos — denk na wat dat betekent voor het totale aantal dozen." },
          ],
          woorden: [{ woord: "nodig hebben", uitleg: "Signaalwoord dat de rest ook meetelt — je rondt dan naar boven af." }],
          theorie: "Bij 'hoeveel dozen heb je nodig' telt elke overgebleven appel mee: ook een paar losse appels hebben een eigen doos nodig.",
          voorbeelden: [{ type: "winkel", tekst: "Een marktkraam verpakt 65 sinaasappels in netjes van 8: ook de laatste, niet-volle zak gaat mee de verkoop in." }],
          basiskennis: [{ onderwerp: "Naar boven afronden", uitleg: "Bij 'nodig hebben'-vragen rond je altijd naar boven af als er een rest is." }],
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
          stappen: [
            { titel: "Zoek het signaalwoord", tekst: "Let op woorden als 'volle', 'hele' of 'compleet' tegenover 'nodig' of 'genoeg' in elke keuze." },
            { titel: "Wat betekent elk signaalwoord?", tekst: "'Volle/hele' betekent dat een rest niet meetelt. 'Nodig/genoeg' betekent dat de rest juist wel meetelt." },
          ],
          woorden: [{ woord: "signaalwoord", uitleg: "Een woord in de vraag dat verklapt of je naar boven of naar beneden moet afronden." }],
          theorie: "Woorden als 'volle', 'hele' of 'compleet' wijzen op afronden naar beneden. Woorden als 'nodig' of 'genoeg' wijzen op afronden naar boven.",
          voorbeelden: [{ type: "thuis", tekst: "'Hoeveel hele pizza's kun je uit de stukken leggen?' rondt naar beneden af; 'Hoeveel dozen heb je nodig voor al je spullen?' rondt naar boven af." }],
          basiskennis: [{ onderwerp: "Boven of beneden", uitleg: "'Volle/hele' → naar beneden. 'Nodig/genoeg' → naar boven." }],
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
          stappen: [
            { titel: "Komt de deling precies uit?", tekst: "Reken vijfenzeventig gedeeld door vijfentwintig uit. Blijft er iets over, of komt het precies uit?" },
            { titel: "Wat betekent dat voor de bussen?", tekst: "Als er niets overblijft, is er geen extra bus nodig — alle leerlingen passen dan precies." },
          ],
          woorden: [{ woord: "precies uitkomen", uitleg: "Wanneer een deelsom geen rest heeft — alles past exact." }],
          theorie: "Soms komt een deelsom precies uit: dan is de rest nul en hoef je niet naar boven af te ronden.",
          voorbeelden: [{ type: "sport", tekst: "Een sportdag vervoert 40 kinderen in busjes van 10 plaatsen: dat komt precies uit, dus is er geen extra busje nodig." }],
          basiskennis: [{ onderwerp: "Rest van nul", uitleg: "Als de rest 0 is, is het antwoord het quotiënt zelf, zonder erbij op te tellen." }],
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
          stappen: [
            { titel: "Hoeveel duo's kun je maken?", tekst: "Een duo bestaat uit twee leerlingen. Reken uit hoe vaak twee helemaal past in negenentwintig." },
            { titel: "Blijft er iemand alleen over?", tekst: "Negenentwintig is een oneven getal — denk na of er dan een leerling zonder duo overblijft." },
          ],
          woorden: [{ woord: "duo", uitleg: "Een groepje van twee personen die samenwerken." }],
          theorie: "Een oneven getal (zoals 29) is nooit precies deelbaar door twee — er blijft altijd één iemand over die geen duo heeft.",
          voorbeelden: [{ type: "sport", tekst: "Bij een tafeltennistoernooi met 17 kinderen die in duo's spelen, blijft er ook altijd één kind zonder maatje over." }],
          basiskennis: [{ onderwerp: "Even en oneven", uitleg: "Een even getal is altijd precies deelbaar door twee; een oneven getal laat rest 1 over." }],
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
          stappen: [
            { titel: "Wat betekent een 'volledig' team?", tekst: "Een team van drie spelers is pas volledig als er precies drie spelers in zitten." },
            { titel: "Reken uit hoe vaak dat lukt", tekst: "Bereken tweeëntwintig gedeeld door drie. De speler(s) die overblijven, vormen geen volledig team meer." },
          ],
          woorden: [{ woord: "volledig team", uitleg: "Een team waar niemand meer bij hoeft en niemand ontbreekt." }],
          theorie: "Bij 'hoeveel volledige teams' rond je naar beneden af: spelers die geen compleet team meer vormen, tellen niet mee.",
          voorbeelden: [{ type: "school", tekst: "Bij een schaaktoernooi met 19 leerlingen die in teams van vier spelen, rekent de meester uit hoeveel volledige teams er zijn." }],
          basiskennis: [{ onderwerp: "Delen met rest", uitleg: "Eerst de rest berekenen, dan pas het aantal volledige teams bepalen." }],
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

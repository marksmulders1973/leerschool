// Leerpad: Dienstregeling & roosters lezen — groep 7-8 PO.
// Doorstroomtoets-onderdeel STUDIEVAARDIGHEDEN (sloThema-prefix bepaalt pijler).
// Tijdtabellen, lesroosters, openingstijden en plannen ermee.
// Vragen zijn zelfstandig leesbaar (data ook inline, niet alleen in tabel).
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Een dienstregeling lezen", emoji: "🚌", from: 0, to: 0 },
  { letter: "B", title: "Een rooster lezen", emoji: "📅", from: 1, to: 1 },
  { letter: "C", title: "Openingstijden", emoji: "🕐", from: 2, to: 2 },
  { letter: "D", title: "In het echt: plannen met roosters", emoji: "🗺️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Dienstregeling ────────────────────────────────────
  {
    title: "Een dienstregeling (trein/bus) lezen",
    explanation:
      "Een **dienstregeling** is een tabel met vertrek- en aankomsttijden. Je leest 'm zo: zoek de juiste **rij** (het station) en de juiste **kolom** (de trein/bus).\n\n" +
      "Voorbeeld treintabel:\n\n" +
      "| Station | Trein A | Trein B | Trein C |\n" +
      "|---|---|---|---|\n" +
      "| Utrecht | 9:10 | 9:40 | 10:10 |\n" +
      "| Amersfoort | 9:25 | 9:55 | 10:25 |\n" +
      "| Zwolle | 10:00 | 10:30 | 11:00 |\n\n" +
      "**Handige stappen:**\n" +
      "• **Reistijd** = aankomsttijd − vertrektijd.\n" +
      "• **Wachttijd** = tijd tot de eerstvolgende vertrektijd.\n" +
      "• Moet je ergens **vóór** een bepaalde tijd zijn? Kies de laatste trein die nog op tijd aankomt.",
    checks: [
      {
        q: "Trein A vertrekt om 9:10 uit Utrecht en komt om 10:00 aan in Zwolle. Hoe lang duurt die reis?",
        options: ["50 minuten", "40 minuten", "1 uur", "30 minuten"],
        answer: 0,
        wrongHints: [null, "Reken nog eens: van 9:10 tot 10:00.", "Dat zou tot 10:10 zijn.", "Dat zou tot 9:40 zijn."],
        uitlegPad: {
          stappen: [{ titel: "Aankomst − vertrek", tekst: "Van 9:10 tot 10:00. Eerst tot 10:00 het hele uur: 9:10 → 10:10 is 60 min, maar je moet tot 10:00, dat is 10 min eerder: 50 min. Of: 9:10 → 9:30 → 10:00 = 50 min." }],
          niveaus: {
            basis: "Van 9:10 tot 10:00 zijn het 50 minuten (9:10 → 9:60/10:00).",
            simpeler: "Tel van 9:10 omhoog: na 50 minuten ben je bij 10:00.",
            nogSimpeler: "Hoeveel minuten van 9:10 tot 10:00?",
          },
        },
      },
      {
        q: "Je staat om 9:30 op het station Utrecht. De treinen vertrekken om 9:10, 9:40 en 10:10. Hoe lang moet je wachten op de volgende trein?",
        options: ["10 minuten", "30 minuten", "20 minuten", "40 minuten"],
        answer: 0,
        wrongHints: [null, "Reken van 9:30 tot de eerstvolgende vertrektijd — zo lang is dat niet.", "Kijk welke trein als eerste ná 9:30 komt.", "Te lang — er komt al eerder een trein."],
        uitlegPad: {
          stappen: [{ titel: "Tot de eerstvolgende vertrektijd", tekst: "De trein van 9:10 is al weg. De volgende is 9:40. Van 9:30 tot 9:40 = 10 minuten wachten." }],
          niveaus: {
            basis: "De eerstvolgende trein ná 9:30 is die van 9:40. 9:40 − 9:30 = 10 min.",
            simpeler: "Welke vertrektijd komt net ná 9:30? En hoeveel minuten is dat nog?",
            nogSimpeler: "Van 9:30 tot 9:40 is hoeveel minuten?",
          },
        },
      },
      {
        q: "Je moet uiterlijk 10:15 in Zwolle zijn. Trein A komt om 10:00 aan, trein B om 10:30. Welke trein neem je?",
        options: ["Trein A", "Trein B", "Allebei kan", "Geen van beide"],
        answer: 0,
        wrongHints: [null, "10:30 is ná 10:15 — dan ben je te laat.", "Maar één van de twee komt op tijd aan, niet allebei.", "Eén trein komt wél vóór 10:15 aan — dus dit klopt niet."],
        uitlegPad: {
          stappen: [{ titel: "Welke komt nog op tijd aan?", tekst: "Je moet vóór 10:15 er zijn. Trein A (10:00) is op tijd, trein B (10:30) is te laat. Dus trein A." }],
          niveaus: {
            basis: "Trein A komt om 10:00 (op tijd), trein B om 10:30 (te laat). Kies A.",
            simpeler: "Welke aankomsttijd is vóór 10:15?",
            nogSimpeler: "Is 10:00 vóór of na 10:15? En 10:30?",
          },
        },
      },
      {
        q: "Trein A vertrekt om 9:25 uit Amersfoort, trein C om 10:25. Hoeveel later rijdt trein C?",
        options: ["1 uur", "30 minuten", "45 minuten", "2 uur"],
        answer: 0,
        wrongHints: [null, "Reken: 9:25 tot 10:25.", "Reken nog eens precies.", "Te veel — vergelijk alleen de uren van 9:25 en 10:25."],
        uitlegPad: {
          stappen: [{ titel: "Verschil tussen vertrektijden", tekst: "Van 9:25 tot 10:25 is precies 60 minuten = 1 uur." }],
          niveaus: {
            basis: "9:25 en 10:25 schelen precies een vol uur.",
            simpeler: "De minuten zijn gelijk (25), alleen het uur verschilt: 9 → 10.",
            nogSimpeler: "Van 9:25 naar 10:25 = hoeveel uur?",
          },
        },
      },
      {
        q: "Trein B vertrekt om 9:40 uit Utrecht en komt om 10:30 aan in Zwolle. Hoe lang duurt die reis?",
        options: ["50 minuten", "60 minuten", "40 minuten", "45 minuten"],
        answer: 0,
        wrongHints: [null, "Dat zou tot 10:40 zijn.", "Dat zou tot 10:20 zijn.", "Reken nog eens precies."],
        uitlegPad: {
          stappen: [{ titel: "Aankomst − vertrek", tekst: "Van 9:40 tot 10:30: eerst 9:40 → 10:00 = 20 min, dan 10:00 → 10:30 = 30 min. Samen 50 min." }],
          niveaus: {
            basis: "9:40 → 10:00 (20 min) + 10:00 → 10:30 (30 min) = 50 min.",
            simpeler: "Tel van 9:40 omhoog tot 10:30 — hoeveel minuten?",
            nogSimpeler: "Hoeveel minuten van 9:40 tot 10:30?",
          },
        },
      },
      {
        q: "De treinen vertrekken om 9:10, 9:40 en 10:10. Je bent er om 9:45. Hoe lang wacht je op de volgende trein?",
        options: ["25 minuten", "30 minuten", "15 minuten", "5 minuten"],
        answer: 0,
        wrongHints: [null, "Reken van 9:45 tot de eerstvolgende vertrektijd.", "De trein van 9:40 is al weg.", "Te kort — kijk welke trein als eerste ná 9:45 komt."],
        uitlegPad: {
          stappen: [{ titel: "Eerstvolgende ná 9:45", tekst: "9:10 en 9:40 zijn al weg. De volgende is 10:10. Van 9:45 tot 10:10 = 25 minuten." }],
          niveaus: {
            basis: "Eerstvolgende trein ná 9:45 is 10:10. 10:10 − 9:45 = 25 min.",
            simpeler: "Welke vertrektijd komt net ná 9:45? Hoeveel minuten is dat nog?",
            nogSimpeler: "Van 9:45 tot 10:10 is hoeveel minuten?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. De eerste bus vertrekt om 7:50 uit Dorp. Hoe lang duurt de rit naar het Station?",
        options: ["28 minuten", "18 minuten", "32 minuten", "38 minuten"],
        answer: 0,
        wrongHints: [null, "Tel eerst van 7:50 tot 8:00 en daarna verder tot 8:18.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Aankomst − vertrek",
              tekst: "Van 7:50 tot 8:00 is 10 minuten. Van 8:00 tot 8:18 is 18 minuten. Samen 10 + 18 = 28 minuten.",
            },
          ],
          niveaus: {
            basis: "7:50 → 8:00 (10 min) + 8:00 → 8:18 (18 min) = 28 minuten.",
            simpeler: "Tel van 7:50 tot het hele uur, en dan verder tot 8:18.",
            nogSimpeler: "10 minuten + 18 minuten = ?",
          },
        },
      },
      {
        q: "Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Je bent om 8:40 bij de halte Markt. Hoe laat ben je op zijn vroegst bij het Station?",
        options: ["9:18", "8:48", "9:05", "8:35"],
        answer: 0,
        wrongHints: [null, "Rijdt de bus van 8:35 nog als jij om 8:40 bij de Markt bent?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst de bus zoeken, dan de aankomst",
              tekst: "Bij de Markt is de bus van 8:35 al weg. De volgende vertrekt om 9:05. Die bus komt om 9:18 aan bij het Station.",
            },
          ],
          niveaus: {
            basis: "Na 8:40 vertrekt de eerste bus om 9:05 bij de Markt; die is om 9:18 bij het Station.",
            simpeler: "Welke vertrektijd bij de Markt komt het eerst ná 8:40? Volg die bus naar het Station.",
            nogSimpeler: "Welke bus vertrekt bij de Markt na 8:40?",
          },
        },
      },
      {
        q: "Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Je moet uiterlijk 9:00 bij het Station zijn. Welke bus uit Dorp is de laatste die je kunt nemen?",
        options: ["de bus van 8:20", "de bus van 7:50", "de bus van 8:50", "geen enkele bus"],
        answer: 0,
        wrongHints: [null, "Die komt op tijd aan, maar is het ook de laatste bus die op tijd is?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Laatste bus die op tijd aankomt",
              tekst: "De bus van 8:20 komt om 8:48 aan: op tijd. De bus van 8:50 komt om 9:18 aan: te laat. Dus de laatste bus die je kunt nemen, is die van 8:20.",
            },
          ],
          niveaus: {
            basis: "Bus van 8:20 is om 8:48 bij het Station (op tijd); die van 8:50 pas om 9:18.",
            simpeler: "Kijk bij elke bus hoe laat hij bij het Station is. Welke is nog vóór 9:00?",
            nogSimpeler: "Is 8:48 vóór 9:00? En 9:18?",
          },
        },
      },
      {
        q: "Busdienstregeling lijn 12 — Dorp: 7:50, 8:20, 8:50 · Markt: 8:05, 8:35, 9:05 · Station: 8:18, 8:48, 9:18. Hoe lang rijdt de bus van de halte Markt naar het Station?",
        options: ["13 minuten", "15 minuten", "23 minuten", "18 minuten"],
        answer: 0,
        wrongHints: [
          null,
          null,
          null,
          "Dat is het getal achter de dubbele punt van de aankomsttijd, niet de reistijd.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Aankomst − vertrek",
              tekst: "Neem de eerste bus: hij vertrekt om 8:05 bij de Markt en is om 8:18 bij het Station. 8:18 − 8:05 = 13 minuten. Bij de andere bussen is het ook 13 minuten.",
            },
          ],
          niveaus: {
            basis: "8:05 → 8:18 = 13 minuten.",
            simpeler: "Kies één bus en trek de vertrektijd bij de Markt af van de aankomsttijd bij het Station.",
            nogSimpeler: "Van 8:05 tot 8:18 is hoeveel minuten?",
          },
        },
      },
    ],
  },

  // ─── B. Rooster ───────────────────────────────────────────
  {
    title: "Een rooster lezen",
    explanation:
      "Een **rooster** vertelt wat er op welke dag en welk tijdstip is. Je zoekt het vakje waar de juiste **rij** (het uur) en **kolom** (de dag) elkaar kruisen.\n\n" +
      "Voorbeeld lesrooster:\n\n" +
      "| | maandag | dinsdag | woensdag |\n" +
      "|---|---|---|---|\n" +
      "| 1e uur | rekenen | taal | gym |\n" +
      "| 2e uur | taal | rekenen | taal |\n" +
      "| 3e uur | gym | wereld | rekenen |\n\n" +
      "**Tips:**\n" +
      "• Wijs met je vinger eerst de **dag** (kolom) aan, ga dan omlaag naar het **uur** (rij).\n" +
      "• Moet je iets **tellen** (hoe vaak een vak voorkomt)? Loop alle vakjes systematisch langs.",
    checks: [
      {
        q: "In het rooster: maandag = rekenen, taal, gym · dinsdag = taal, rekenen, wereld. Welk vak heb je dinsdag het 1e uur?",
        options: ["taal", "rekenen", "gym", "wereld"],
        answer: 0,
        wrongHints: [null, "Dat is dinsdag het 2e uur.", "Dat is maandag.", "Dat is dinsdag het 3e uur."],
        uitlegPad: {
          stappen: [{ titel: "Kolom dinsdag, rij 1e uur", tekst: "Zoek de kolom 'dinsdag' en ga naar het 1e uur: taal." }],
          niveaus: {
            basis: "Dinsdag 1e uur = het eerste vak in de dinsdag-kolom: taal.",
            simpeler: "Welk vak staat bovenaan onder dinsdag?",
            nogSimpeler: "Wat is het 1e vak op dinsdag?",
          },
        },
      },
      {
        q: "1e uur: maandag rekenen, dinsdag taal, woensdag gym. Op welke dag begin je met gym?",
        options: ["woensdag", "maandag", "dinsdag", "donderdag"],
        answer: 0,
        wrongHints: [null, "Daar begin je met rekenen.", "Daar begin je met taal.", "Die dag staat niet in dit rooster."],
        uitlegPad: {
          stappen: [{ titel: "Zoek 'gym' in de rij '1e uur'", tekst: "In het 1e uur staat gym onder woensdag. Dus woensdag begint met gym." }],
          niveaus: {
            basis: "Kijk in het 1e uur: onder welke dag staat gym? Woensdag.",
            simpeler: "Welke dag heeft gym als eerste vak?",
            nogSimpeler: "Waar staat gym in de bovenste rij?",
          },
        },
      },
      {
        q: "Rekenen staat op: maandag 1e uur, dinsdag 2e uur, woensdag 3e uur. Hoe vaak heb je deze week rekenen?",
        options: ["3 keer", "2 keer", "4 keer", "1 keer"],
        answer: 0,
        wrongHints: [null, "Tel nog eens alle dagen.", "Je telt er eentje te veel.", "Er zijn meer dagen met rekenen."],
        uitlegPad: {
          stappen: [{ titel: "Tel systematisch", tekst: "Maandag (1×), dinsdag (1×), woensdag (1×) = 3 keer rekenen." }],
          niveaus: {
            basis: "Tel de dagen met rekenen: maandag, dinsdag, woensdag = 3.",
            simpeler: "Op hoeveel dagen staat rekenen? Tel ze.",
            nogSimpeler: "1 + 1 + 1 = ?",
          },
        },
      },
      {
        q: "Maandag is: 1e uur rekenen, 2e uur taal, 3e uur gym. Welk vak had je vlak vóór gym?",
        options: ["taal", "rekenen", "wereld", "gym"],
        answer: 0,
        wrongHints: [null, "Dat was het 1e uur, niet het uur vlak ervoor.", "Dat staat niet op maandag.", "Dat is het vak zelf."],
        uitlegPad: {
          stappen: [{ titel: "Het uur ervóór", tekst: "Gym is het 3e uur. Het uur ervoor (2e uur) is taal." }],
          niveaus: {
            basis: "Gym = 3e uur. Het 2e uur (ervoor) is taal.",
            simpeler: "Welk vak staat net boven gym op maandag?",
            nogSimpeler: "Wat heb je het 2e uur op maandag?",
          },
        },
      },
      {
        q: "Gym staat op maandag het 3e uur en op woensdag het 1e uur. Hoe vaak heb je deze week (ma–wo) gym?",
        options: ["2 keer", "3 keer", "1 keer", "4 keer"],
        answer: 0,
        wrongHints: [null, "Tel alleen de dagen waar gym écht staat.", "Er zijn meer dan dat genoemd.", "Tel nog eens op hoeveel dagen gym genoemd wordt."],
        uitlegPad: {
          stappen: [{ titel: "Tel de gym-dagen", tekst: "Maandag (1×) en woensdag (1×) = 2 keer gym." }],
          niveaus: {
            basis: "Gym staat op maandag en woensdag → 2 keer.",
            simpeler: "Op hoeveel dagen staat gym genoemd?",
            nogSimpeler: "1 + 1 = ?",
          },
        },
      },
      {
        q: "Dinsdag is: 1e uur taal, 2e uur rekenen, 3e uur wereld. Welk vak heb je dinsdag als laatste?",
        options: ["wereld", "taal", "rekenen", "gym"],
        answer: 0,
        wrongHints: [null, "Dat is het 1e uur.", "Dat is het 2e uur.", "Dat staat dinsdag niet in het rooster."],
        uitlegPad: {
          stappen: [{ titel: "Het laatste uur", tekst: "Het laatste (3e) uur op dinsdag is wereld." }],
          niveaus: {
            basis: "Dinsdag 3e (laatste) uur = wereld.",
            simpeler: "Welk vak staat onderaan onder dinsdag?",
            nogSimpeler: "Wat is het laatste vak op dinsdag?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Rooster — donderdag: 1e uur rekenen, 2e uur muziek, 3e uur taal · vrijdag: 1e uur taal, 2e uur gym, 3e uur tekenen. Welk vak heb je vrijdag het 3e uur?",
        options: ["tekenen", "taal", "gym", "muziek"],
        answer: 0,
        wrongHints: [null, null, "Dat is vrijdag het 2e uur.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Kolom vrijdag, rij 3e uur",
              tekst: "Zoek vrijdag op en ga naar het 3e uur: daar staat tekenen.",
            },
          ],
          niveaus: {
            basis: "Vrijdag 3e uur = tekenen.",
            simpeler: "Welk vak staat als laatste bij vrijdag?",
            nogSimpeler: "Wat is het laatste vak op vrijdag?",
          },
        },
      },
      {
        q: "Rooster — donderdag: 1e uur rekenen, 2e uur muziek, 3e uur taal · vrijdag: 1e uur taal, 2e uur gym, 3e uur tekenen. Wanneer heb je muziek?",
        options: ["donderdag het 2e uur", "vrijdag het 2e uur", "donderdag het 1e uur", "vrijdag het 3e uur"],
        answer: 0,
        wrongHints: [null, "Op vrijdag heb je het 2e uur een ander vak.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek het vak in het rooster",
              tekst: "Loop het rooster langs: muziek staat alleen bij donderdag, op het 2e uur.",
            },
          ],
          niveaus: {
            basis: "Muziek staat op donderdag het 2e uur.",
            simpeler: "Bij welke dag staat muziek, en op welk uur?",
            nogSimpeler: "Op welke dag staat muziek?",
          },
        },
      },
      {
        q: "Rooster — donderdag: 1e uur rekenen, 2e uur muziek, 3e uur taal · vrijdag: 1e uur taal, 2e uur gym, 3e uur tekenen. Welk vak heb je zowel op donderdag als op vrijdag?",
        options: ["taal", "rekenen", "gym", "muziek"],
        answer: 0,
        wrongHints: [null, "Kijk of dit vak ook bij vrijdag staat.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vergelijk de twee dagen",
              tekst: "Donderdag: rekenen, muziek, taal. Vrijdag: taal, gym, tekenen. Alleen taal staat bij allebei de dagen.",
            },
          ],
          niveaus: {
            basis: "Taal staat op donderdag (3e uur) én op vrijdag (1e uur).",
            simpeler: "Welk vak zie je bij donderdag én bij vrijdag?",
            nogSimpeler: "Staat taal op allebei de dagen?",
          },
        },
      },
      {
        q: "Rooster — donderdag: 1e uur rekenen, 2e uur muziek, 3e uur taal · vrijdag: 1e uur taal, 2e uur gym, 3e uur tekenen. Welk vak heb je op vrijdag direct na taal?",
        options: ["gym", "tekenen", "muziek", "rekenen"],
        answer: 0,
        wrongHints: [null, "Dat is het 3e uur; welk uur komt direct na het 1e uur?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Het uur erna",
              tekst: "Op vrijdag heb je taal het 1e uur. Het uur direct daarna is het 2e uur: gym.",
            },
          ],
          niveaus: {
            basis: "Vrijdag: taal (1e uur), daarna gym (2e uur).",
            simpeler: "Welk vak staat op vrijdag op het 2e uur?",
            nogSimpeler: "Wat heb je vrijdag het 2e uur?",
          },
        },
      },
    ],
  },

  // ─── C. Openingstijden ────────────────────────────────────
  {
    title: "Openingstijden lezen",
    explanation:
      "Bij **openingstijden** kijk je per dag wanneer iets open en dicht is. Let goed op dagen die **gesloten** zijn en op tijden 's avonds.\n\n" +
      "Voorbeeld bibliotheek:\n\n" +
      "| Dag | Open |\n" +
      "|---|---|\n" +
      "| maandag | gesloten |\n" +
      "| dinsdag | 13:00–17:00 |\n" +
      "| woensdag | 10:00–17:00 |\n" +
      "| donderdag | 13:00–20:00 |\n" +
      "| zaterdag | 10:00–13:00 |\n\n" +
      "**Open-duur** = sluitingstijd − openingstijd. **Kun je langs?** Check of jouw tijd tússen openings- en sluitingstijd valt (en of de dag niet gesloten is).",
    checks: [
      {
        q: "De bieb is open: di 13:00–17:00, wo 10:00–17:00, do 13:00–20:00. Op welke dag kun je er 's avonds om 19:00 nog terecht?",
        options: ["donderdag", "dinsdag", "woensdag", "geen enkele dag"],
        answer: 0,
        wrongHints: [null, "Die sluit om 17:00 — om 19:00 is het dicht.", "Die sluit ook om 17:00.", "Eén dag is wél tot 20:00 open."],
        uitlegPad: {
          stappen: [{ titel: "Welke dag is tot ná 19:00 open?", tekst: "Donderdag is open tot 20:00, dus om 19:00 kun je nog terecht. Di en wo sluiten om 17:00." }],
          niveaus: {
            basis: "Zoek de dag die het laatst open is: donderdag tot 20:00.",
            simpeler: "Welke sluitingstijd is ná 19:00?",
            nogSimpeler: "Welke dag is tot 20:00 open?",
          },
        },
      },
      {
        q: "Op woensdag is de bieb open van 10:00 tot 17:00. Hoe lang is dat?",
        options: ["7 uur", "5 uur", "6 uur", "4 uur"],
        answer: 0,
        wrongHints: [null, "Reken nog eens: 10:00 tot 17:00.", "Net niet — tel de uren nog eens.", "Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Sluiting − opening", tekst: "Van 10:00 tot 17:00 = 17 − 10 = 7 uur." }],
          niveaus: {
            basis: "17:00 − 10:00 = 7 uur open.",
            simpeler: "Tel van 10 naar 17: dat zijn 7 stappen.",
            nogSimpeler: "17 − 10 = ?",
          },
        },
      },
      {
        q: "De bieb is op maandag gesloten. Je kunt alléén op maandag. Kun je naar de bieb?",
        options: ["Nee, maandag is gesloten", "Ja, van 10:00 tot 17:00", "Ja, maar alleen 's avonds", "Ja, de hele dag"],
        answer: 0,
        wrongHints: [null, "Maandag staat als 'gesloten' — dan zijn er geen tijden.", "Op maandag is er geen avond-opening.", "Gesloten betekent dicht."],
        uitlegPad: {
          stappen: [{ titel: "Gesloten = dicht", tekst: "Maandag staat op 'gesloten'. Dan kun je er niet terecht, op geen enkel tijdstip." }],
          niveaus: {
            basis: "Maandag is gesloten, dus je kunt niet naar de bieb.",
            simpeler: "Wat betekent 'gesloten'? Dat het dicht is.",
            nogSimpeler: "Kun je ergens heen als het gesloten is?",
          },
        },
      },
      {
        q: "Op zaterdag is de bieb open van 10:00 tot 13:00. Je wilt om 14:00 langs. Lukt dat?",
        options: ["Nee, om 14:00 is het al dicht", "Ja, het is dan open", "Ja, maar je moet snel zijn", "Alleen met een afspraak"],
        answer: 0,
        wrongHints: [null, "De bieb sluit op zaterdag al om 13:00.", "Om 14:00 is het na sluitingstijd.", "Dat staat er niet — het is gewoon dicht."],
        uitlegPad: {
          stappen: [{ titel: "Valt jouw tijd binnen de openingstijden?", tekst: "Zaterdag sluit om 13:00. 14:00 is daarna, dus de bieb is dicht." }],
          niveaus: {
            basis: "Zaterdag open tot 13:00. 14:00 is later → dicht.",
            simpeler: "Is 14:00 vóór of ná de sluitingstijd 13:00?",
            nogSimpeler: "Komt 14:00 vóór of na 13:00?",
          },
        },
      },
      {
        q: "Een snackbar is open van 12:00 tot 21:00. Hoeveel uur is dat?",
        options: ["9 uur", "8 uur", "10 uur", "7 uur"],
        answer: 0,
        wrongHints: [null, "Tel nog eens van 12 naar 21.", "Iets te veel.", "Te weinig — tel de uren opnieuw."],
        uitlegPad: {
          stappen: [{ titel: "Sluiting − opening", tekst: "Van 12:00 tot 21:00 = 21 − 12 = 9 uur." }],
          niveaus: {
            basis: "21:00 − 12:00 = 9 uur open.",
            simpeler: "Tel van 12 naar 21: hoeveel stappen?",
            nogSimpeler: "21 − 12 = ?",
          },
        },
      },
      {
        q: "Een winkel is open van 9:00 tot 18:00. Het is nu 18:30. Kun je nog naar binnen?",
        options: ["Nee, het is na sluitingstijd", "Ja, het is nog open", "Ja, nog 30 minuten", "Alleen met een afspraak"],
        answer: 0,
        wrongHints: [null, "18:30 is ná 18:00 — dan is het dicht.", "De winkel sluit juist om 18:00.", "Daar staat niets over; het is gewoon gesloten."],
        uitlegPad: {
          stappen: [{ titel: "Valt jouw tijd binnen de openingstijd?", tekst: "De winkel sluit om 18:00. 18:30 is later, dus de winkel is dicht." }],
          niveaus: {
            basis: "Open tot 18:00; 18:30 is later → dicht.",
            simpeler: "Is 18:30 vóór of ná de sluitingstijd 18:00?",
            nogSimpeler: "Komt 18:30 vóór of na 18:00?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Zwembad — maandag: gesloten · dinsdag: 9:30–18:00 · woensdag: 13:00–18:00 · zaterdag: 8:30–12:00. Hoe lang is het zwembad op dinsdag open?",
        options: ["8 uur en 30 minuten", "8 uur", "9 uur en 30 minuten", "7 uur en 30 minuten"],
        answer: 0,
        wrongHints: [null, null, "Tel vanaf de openingstijd van dinsdag: 9:30.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Sluiting − opening",
              tekst: "Van 9:30 tot 17:30 is 8 uur. Van 17:30 tot 18:00 is nog 30 minuten. Samen 8 uur en 30 minuten.",
            },
          ],
          niveaus: {
            basis: "9:30 → 17:30 (8 uur) + 30 minuten = 8 uur en 30 minuten.",
            simpeler: "Tel eerst hele uren vanaf 9:30, en dan de minuten tot 18:00.",
            nogSimpeler: "Van 9:30 tot 17:30 is hoeveel uur?",
          },
        },
      },
      {
        q: "Zwembad — maandag: gesloten · dinsdag: 9:30–18:00 · woensdag: 13:00–18:00 · zaterdag: 8:30–12:00. Op welke dag kun je om 12:30 zwemmen?",
        options: ["dinsdag", "woensdag", "zaterdag", "maandag"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe laat gaat het zwembad op deze dag open?",
          null,
          "Kijk wat er bij deze dag staat.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Valt 12:30 tussen open en dicht?",
              tekst: "Dinsdag is open van 9:30 tot 18:00, dus 12:30 past. Woensdag gaat pas om 13:00 open, zaterdag sluit om 12:00 en maandag is gesloten.",
            },
          ],
          niveaus: {
            basis: "Alleen op dinsdag valt 12:30 tussen openings- en sluitingstijd.",
            simpeler: "Kijk per dag: is het zwembad om 12:30 al open en nog niet dicht?",
            nogSimpeler: "Is het zwembad op dinsdag om 12:30 open?",
          },
        },
      },
      {
        q: "Zwembad — maandag: gesloten · dinsdag: 9:30–18:00 · woensdag: 13:00–18:00 · zaterdag: 8:30–12:00. Je komt zaterdag om 11:15 bij het zwembad. Hoeveel tijd heb je nog tot sluitingstijd?",
        options: ["45 minuten", "15 minuten", "55 minuten", "35 minuten"],
        answer: 0,
        wrongHints: [null, "Hoe laat sluit het zwembad op zaterdag?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Sluiting − nu",
              tekst: "Op zaterdag sluit het zwembad om 12:00. Van 11:15 tot 12:00 is 45 minuten.",
            },
          ],
          niveaus: {
            basis: "12:00 − 11:15 = 45 minuten.",
            simpeler: "Tel van 11:15 verder tot 12:00.",
            nogSimpeler: "Van 11:15 tot 12:00 is hoeveel minuten?",
          },
        },
      },
      {
        q: "Zwembad — maandag: gesloten · dinsdag: 9:30–18:00 · woensdag: 13:00–18:00 · zaterdag: 8:30–12:00. Op welke dag gaat het zwembad al vóór 9:00 open?",
        options: ["zaterdag", "dinsdag", "woensdag", "maandag"],
        answer: 0,
        wrongHints: [null, "Hoe laat gaat het zwembad op dinsdag open?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vergelijk de openingstijden",
              tekst: "Dinsdag opent om 9:30, woensdag om 13:00 en maandag is gesloten. Alleen zaterdag gaat om 8:30 open, en dat is vóór 9:00.",
            },
          ],
          niveaus: {
            basis: "Zaterdag opent om 8:30, en dat is vóór 9:00.",
            simpeler: "Welke openingstijd is vroeger dan 9:00?",
            nogSimpeler: "Is 8:30 vóór of na 9:00?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — plannen met roosters",
    explanation:
      "Bij de Doorstroomtoets moet je vaak **combineren**: een reistijd bij een vertrektijd optellen, of kijken of je op tijd bent vóór iets sluit. Werk altijd stap voor stap:\n\n" +
      "1. **Lees** wat er precies gevraagd wordt (aankomst? uiterlijke tijd?).\n" +
      "2. **Reken** de tijden uit (vertrek + reistijd = aankomst).\n" +
      "3. **Vergelijk** met de grens (op tijd of te laat?).\n\n" +
      "Reken bij tijd altijd over het hele uur heen: na 60 minuten begint een nieuw uur.",
    checks: [
      {
        q: "De bieb sluit om 17:00. De bus erheen duurt 20 minuten en vertrekt om 16:30, 16:50 en 17:10. Welke bus moet je uiterlijk nemen om de bieb nog open te treffen?",
        options: ["die van 16:30", "die van 16:50", "die van 17:10", "het lukt niet meer"],
        answer: 0,
        wrongHints: [null, "Tel bij die vertrektijd 20 minuten op — hoe laat kom je aan, en is de bieb dan nog open?", "Tel bij die vertrektijd 20 minuten op — kom je dan nog vóór sluitingstijd aan?", "Tel bij de vroegste vertrektijd 20 minuten op — ben je dan nog vóór 17:00 bij de bieb?"],
        uitlegPad: {
          stappen: [{ titel: "Vertrek + reistijd = aankomst", tekst: "16:30 + 20 = 16:50 (op tijd). 16:50 + 20 = 17:10 (net dicht). Dus uiterlijk de bus van 16:30." }],
          niveaus: {
            basis: "Tel bij elke vertrektijd 20 min op. Alleen 16:30 komt vóór 17:00 aan (16:50).",
            simpeler: "Welke bus + 20 minuten komt nog vóór 17:00 aan?",
            nogSimpeler: "16:30 + 20 min = ? Is dat vóór 17:00?",
          },
        },
      },
      {
        q: "School begint om 8:30. Elk lesuur duurt 45 minuten (geen pauzes). Gym is het 3e uur. Hoe laat begint gym?",
        options: ["10:00", "9:15", "9:45", "10:30"],
        answer: 0,
        wrongHints: [null, "Dat is pas ná het 1e uur.", "Tel je wel twee keer 45 minuten op?", "Te laat — je telt te veel uren."],
        uitlegPad: {
          stappen: [{ titel: "Twee lesuren ervoor", tekst: "Vóór het 3e uur zitten 2 lesuren: 2 × 45 = 90 min = 1,5 uur. 8:30 + 1:30 = 10:00." }],
          niveaus: {
            basis: "1e uur 8:30, 2e uur 9:15, 3e uur 10:00. Elke keer 45 min erbij.",
            simpeler: "Tel twee keer 45 minuten bij 8:30 op.",
            nogSimpeler: "8:30 + 45 = 9:15, en nog eens 45 = ?",
          },
        },
      },
      {
        q: "Een film begint om 19:45 en duurt 1 uur en 50 minuten. Hoe laat is de film afgelopen?",
        options: ["21:35", "21:05", "20:35", "21:55"],
        answer: 0,
        wrongHints: [null, "Dat zou maar 1 uur en 20 min duren.", "Dat is maar 50 minuten erbij.", "Iets te veel."],
        uitlegPad: {
          stappen: [{ titel: "Eerst de uren, dan de minuten", tekst: "19:45 + 1 uur = 20:45. Dan + 50 min: 20:45 → 21:00 is 15 min, nog 35 min over → 21:35." }],
          niveaus: {
            basis: "19:45 + 1 uur = 20:45. Nog 50 min erbij: 20:45 + 50 = 21:35.",
            simpeler: "Tel eerst het hele uur op (20:45), dan de 50 minuten.",
            nogSimpeler: "Van 20:45 nog 50 minuten verder = ?",
          },
        },
      },
      {
        q: "De zwemles is op woensdag van 15:00 tot 15:45. Je moet een kwartier van tevoren aanwezig zijn. Hoe laat moet je er zijn?",
        options: ["14:45", "15:15", "14:30", "15:00"],
        answer: 0,
        wrongHints: [null, "Dat is ná de begintijd — je moet juist eerder zijn.", "Een kwartier is 15 minuten, geen half uur.", "Dat is precies de begintijd, niet 'van tevoren'."],
        uitlegPad: {
          stappen: [{ titel: "Een kwartier eerder", tekst: "Een kwartier = 15 minuten vóór 15:00. 15:00 − 15 min = 14:45." }],
          niveaus: {
            basis: "Een kwartier (15 min) vóór 15:00 is 14:45.",
            simpeler: "Trek 15 minuten af van 15:00.",
            nogSimpeler: "15:00 min 15 minuten = ?",
          },
        },
      },
      {
        q: "Een trein vertrekt om 14:20 en de reis duurt 35 minuten. Hoe laat kom je aan?",
        options: ["14:55", "15:55", "14:45", "15:05"],
        answer: 0,
        wrongHints: [null, "Dat is een heel uur erbij, niet 35 minuten.", "Dat is maar 25 minuten erbij.", "Iets te veel — tel precies 35 minuten."],
        uitlegPad: {
          stappen: [{ titel: "Vertrek + reistijd", tekst: "14:20 + 35 min: 14:20 → 14:40 is 20 min, nog 15 min → 14:55." }],
          niveaus: {
            basis: "14:20 + 35 minuten = 14:55.",
            simpeler: "Tel 35 minuten verder vanaf 14:20.",
            nogSimpeler: "14:20 + 35 min = ?",
          },
        },
      },
      {
        q: "Een feestje begint om 14:00. De reis duurt 40 minuten en je wilt 10 minuten eerder aankomen. Hoe laat vertrek je uiterlijk?",
        options: ["13:10", "13:20", "13:30", "12:50"],
        answer: 0,
        wrongHints: [null, "Je vergeet de 10 minuten eerder aankomen.", "Reken nog eens: eerst aankomsttijd, dan reistijd eraf.", "Te vroeg — tel precies terug."],
        uitlegPad: {
          stappen: [{ titel: "Eerst aankomst, dan terugtellen", tekst: "10 min vóór 14:00 = 13:50 aankomen. 40 min reizen eraf: 13:50 − 40 min = 13:10 vertrekken." }],
          niveaus: {
            basis: "Aankomen om 13:50, 40 min reizen → vertrek 13:10.",
            simpeler: "Reken eerst de aankomsttijd (13:50), trek dan de reistijd af.",
            nogSimpeler: "13:50 − 40 minuten = ?",
          },
        },
      },
      {
        q: "Een les duurt van 13:15 tot 14:00. Hoe lang duurt de les?",
        options: ["45 minuten", "60 minuten", "30 minuten", "50 minuten"],
        answer: 0,
        wrongHints: [null, "Dat zou tot 14:15 zijn.", "Dat zou tot 13:45 zijn.", "Reken nog eens precies."],
        uitlegPad: {
          stappen: [{ titel: "Eind − begin", tekst: "Van 13:15 tot 14:00: 13:15 → 13:45 is 30 min, dan 13:45 → 14:00 is 15 min. Samen 45 min." }],
          niveaus: {
            basis: "13:15 → 14:00 = 45 minuten.",
            simpeler: "Tel van 13:15 omhoog tot 14:00.",
            nogSimpeler: "Hoeveel minuten van 13:15 tot 14:00?",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "De bus vertrekt om 10:52 en de rit duurt 24 minuten. De film in de bioscoop begint om 11:20. Hoeveel minuten ben je te vroeg?",
        options: ["4 minuten", "28 minuten", "24 minuten", "14 minuten"],
        answer: 0,
        wrongHints: [
          null,
          "Vergeet de rit van 24 minuten niet: hoe laat kom je aan?",
          "Dat is hoe lang de rit duurt.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst de aankomst",
              tekst: "10:52 + 24 minuten: van 10:52 tot 11:00 is 8 minuten, nog 16 minuten erbij → 11:16.",
            },
            {
              titel: "Dan vergelijken",
              tekst: "De film begint om 11:20. Van 11:16 tot 11:20 is 4 minuten. Je bent 4 minuten te vroeg.",
            },
          ],
          niveaus: {
            basis: "Aankomst 11:16, film om 11:20 → 4 minuten te vroeg.",
            simpeler: "Reken eerst uit hoe laat je aankomt (10:52 + 24 minuten).",
            nogSimpeler: "Van 11:16 tot 11:20 is hoeveel minuten?",
          },
        },
      },
      {
        q: "School begint om 8:45. Een lesuur duurt 50 minuten en er zijn geen pauzes. Hoe laat is het 2e uur afgelopen?",
        options: ["10:25", "9:35", "10:45", "10:05"],
        answer: 0,
        wrongHints: [null, "Dat is het einde van het 1e uur.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Twee lesuren optellen",
              tekst: "Het 1e uur: 8:45 + 50 minuten = 9:35. Het 2e uur: 9:35 + 50 minuten = 10:25.",
            },
          ],
          niveaus: {
            basis: "8:45 + 50 = 9:35, en 9:35 + 50 = 10:25.",
            simpeler: "Tel twee keer 50 minuten bij 8:45 op.",
            nogSimpeler: "9:35 + 50 minuten = ?",
          },
        },
      },
      {
        q: "Je trein komt om 13:47 aan. Daarna stap je over op een bus die vertrekt om 13:50, 14:05 en 14:20. Je loopt 5 minuten naar de bushalte. Welke bus haal je het eerst?",
        options: ["de bus van 14:05", "de bus van 13:50", "de bus van 14:20", "geen enkele bus"],
        answer: 0,
        wrongHints: [null, "Hoe laat ben je bij de bushalte als je 5 minuten loopt?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst uitrekenen wanneer je bij de halte bent",
              tekst: "13:47 + 5 minuten = 13:52.",
            },
            {
              titel: "Dan de eerstvolgende bus",
              tekst: "De bus van 13:50 is dan al weg. De eerste bus ná 13:52 is die van 14:05.",
            },
          ],
          niveaus: {
            basis: "Je bent om 13:52 bij de halte, dus de eerste bus die je haalt, is die van 14:05.",
            simpeler: "Tel 5 minuten bij 13:47 op. Welke bus vertrekt daarna het eerst?",
            nogSimpeler: "13:47 + 5 minuten = ?",
          },
        },
      },
    ],
  },
];

export default {
  id: "dienstregeling-roosters-po",
  title: "Dienstregeling & roosters lezen",
  subject: "studievaardigheden",
  level: "groep7-8",
  sloThema: "studievaardigheden-roosters",
  chapters,
  steps,
  prerequisites: [],
};

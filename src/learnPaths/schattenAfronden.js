// Leerpad: Schatten en afronden — voor groep 5-8
// 5 stappen. Doorstroomtoets-stijl praktijksommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["🤔","🔄","➕","🛒","🏆"];

const chapters = [
  { letter: "A", title: "Wat is schatten?", emoji: "🤔", from: 0, to: 0 },
  { letter: "B", title: "Afronden op 10/100/1000", emoji: "🔄", from: 1, to: 1 },
  { letter: "C", title: "Schatten van sommen", emoji: "➕", from: 2, to: 2 },
  { letter: "D", title: "Praktijk — kassabon + tijden", emoji: "🛒", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is schatten?",
    explanation: "**Schatten** is een getal **bijna goed** opgeven, niet helemaal precies. Vaak handig om snel te checken of een antwoord klopt.\n\n**Voorbeeld**:\n*'Hoeveel is 23 × 19?'*\n• Schatten: 20 × 20 = **400**.\n• Echte uitkomst: 23 × 19 = 437.\n• Klopt — beide bij 400.\n\n**Wanneer schatten**:\n• Snel checken bij de Doorstroomtoets: 'Klinkt mijn antwoord redelijk?'\n• In de winkel: 'Past dit binnen mijn budget?'\n• Bij grote getallen waar exact weten niet hoeft.\n\n**Toets-truc — schatten als check**:\nNa een berekening, schat altijd om te zien of je antwoord 'klopt qua grootte'. Als je 437 antwoordt en jouw schatting was 400, dan zit je goed. Als jouw antwoord 4370 was, klopt iets niet.\n\n**Verschil schatten vs. afronden**:\n• **Afronden**: een precies getal bijna-precies maken *(123 → 120)*.\n• **Schatten**: een ruwe inschatting *(soms zonder precies getal)*.",
    checks: [
      {
        q: "**Schat 28 × 41**. Welk antwoord komt het dichtst bij?",
        options: ["1200","1500","800","2000"],
        answer: 0,
        wrongHints: [null,"Te veel — rond 28 en 41 af op tientallen en vermenigvuldig die.","Te weinig — controleer met 30 × 40.","Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: rond beide getallen af op 10", tekst: "28 → afgerond op tientallen = **30**. 41 → afgerond op tientallen = **40**." },
            { titel: "Stap 2: vermenigvuldig de afgeronde getallen", tekst: "30 × 40 = 3 × 4 × 100 = 1200." },
            { titel: "Check: klopt het qua grootte?", tekst: "Echte uitkomst: 28 × 41 = 1148. Schatting 1200 zit er dicht bij. Met schatten op 10 ben je vaak ~5% van de echte waarde af — goed genoeg voor Toets-controle." },
          ],
          woorden: [
            { woord: "schatten", uitleg: "Snel een ongeveer-antwoord berekenen door af te ronden." },
            { woord: "afronden", uitleg: "Een getal vereenvoudigen naar een 'rond' getal." },
          ],
          theorie: "Toets-tip schatten: rond af op tientallen (handig getal), reken met die. Goed voor: 1) sneller rekenen, 2) check of je echte antwoord ongeveer klopt.",
          voorbeelden: [
            { type: "stap", tekst: "Schat 47 × 19 → 50 × 20 = 1000. Echt: 893." },
            { type: "stap", tekst: "Schat 19 × 21 → 20 × 20 = 400. Echt: 399." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "1, 2, 3, 4 → omlaag. 5, 6, 7, 8, 9 → omhoog. Dan keer doen." }],
          niveaus: {
            basis: "Schatten = afronden + dan rekenen.",
            simpeler: "28 → 30. 41 → 40. 30 × 40 = 1200.",
            nogSimpeler: "Afronden, dan keer.",
          },
        },
      },
      {
        q: "**Wanneer is schatten handig**?",
        options: ["Snel checken of een antwoord klopt","Alleen bij de Doorstroomtoets","Nooit — altijd precies","Alleen bij grote getallen"],
        answer: 0,
        wrongHints: [null,"Niet alleen bij de Doorstroomtoets — overal in echte rekensommen.","Wel handig — een snelle check is waardevol.","Ook bij kleine getallen kun je schatten."],
      },
      {
        q: "**Schat het totaal**: € 4,80 + € 7,20 + € 12,30",
        options: ["€ 24","€ 22","€ 26","€ 30"],
        answer: 0,
        wrongHints: [null,"Te weinig — schat elk bedrag af op hele euro's en tel op.","Te veel — controleer schatting.","Veel te veel."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**Schat 32 + 59**. Welk antwoord komt het dichtst bij?",
        options: ["90", "80", "100", "70"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — rond 32 en 59 allebei af op tientallen en tel die op.",
          null,
          "Te weinig — kijk nog eens naar 59: wordt dat 50 of 60?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond af op 10",
              tekst: "32 → **30** (2 = omlaag). 59 → **60** (9 = omhoog).",
            },
            {
              titel: "Stap 2: tel de ronde getallen op",
              tekst: "30 + 60 = **90**.",
            },
            {
              titel: "Check",
              tekst: "Echte uitkomst: 32 + 59 = 91. Dat ligt heel dicht bij 90.",
            },
          ],
          woorden: [
            {
              woord: "schatten",
              uitleg: "Snel een ongeveer-antwoord berekenen door eerst af te ronden.",
            },
            {
              woord: "afronden",
              uitleg: "Een getal vereenvoudigen naar een 'rond' getal.",
            },
          ],
          theorie: "Schatten = eerst afronden, dan rekenen. Zo weet je snel hoe groot het antwoord ongeveer is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat 41 + 28 → 40 + 30 = 70. Echt: 69.",
            },
            {
              type: "stap",
              tekst: "Schat 63 + 17 → 60 + 20 = 80. Echt: 80.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "0, 1, 2, 3, 4 → omlaag. 5, 6, 7, 8, 9 → omhoog.",
            },
          ],
          niveaus: {
            basis: "30 + 60 = 90.",
            simpeler: "32 → 30. 59 → 60. Samen 90.",
            nogSimpeler: "Afronden, dan plus.",
          },
        },
      },
      {
        q: "Wat betekent **schatten**?",
        options: [
          "Een antwoord bijna goed geven, niet precies",
          "Een antwoord tot op de cent precies uitrekenen",
          "Een antwoord opschrijven zonder na te denken",
          "Een getal altijd naar beneden maken",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij schatten hoeft het juist níét precies.",
          "Bij schatten denk je wel na: je rekent met makkelijke getallen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is schatten?",
              tekst: "**Schatten** = een getal **bijna goed** opgeven. Niet helemaal precies, maar wel in de buurt.",
            },
            {
              titel: "Hoe doe je dat?",
              tekst: "Je rondt de getallen af naar makkelijke getallen en rekent daarmee. Soms naar boven, soms naar beneden.",
            },
            {
              titel: "Waarom?",
              tekst: "Zo kun je snel checken of een antwoord klopt qua grootte.",
            },
          ],
          woorden: [
            {
              woord: "schatten",
              uitleg: "Snel een ongeveer-antwoord berekenen door eerst af te ronden.",
            },
            {
              woord: "precies",
              uitleg: "Helemaal exact, zonder afronden.",
            },
          ],
          theorie: "Schatten is geen raden. Je rekent wél, maar met ronde getallen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "31 + 48 → 30 + 50 = 80. Echt: 79.",
            },
            {
              type: "stap",
              tekst: "€ 3,90 + € 2,10 → € 4 + € 2 = € 6.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Onthoud",
              uitleg: "Schatten = ongeveer. Uitrekenen = precies.",
            },
          ],
          niveaus: {
            basis: "Schatten = bijna goed, niet precies.",
            simpeler: "Je rekent met ronde getallen en krijgt een ongeveer-antwoord.",
            nogSimpeler: "Schatten = ongeveer.",
          },
        },
      },
      {
        q: "Sam rekent **213 + 386** uit. Hij schat eerst: 200 + 400 = 600. Welk antwoord van Sam **kan kloppen**?",
        options: ["599", "5990", "59", "899"],
        answer: 0,
        wrongHints: [
          null,
          "Vergelijk met de schatting 600: is dit ongeveer even groot?",
          null,
          "Dat is 300 meer dan de schatting — dat is te ver weg.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: kijk naar de schatting",
              tekst: "Sams schatting is **600**. Het echte antwoord moet daar dicht bij liggen.",
            },
            {
              titel: "Stap 2: vergelijk elk antwoord",
              tekst: "599 ligt vlak bij 600. 5990 is bijna tien keer zo groot. 59 is veel te klein. 899 is 300 te veel.",
            },
            {
              titel: "Check",
              tekst: "Echt: 213 + 386 = **599**. De schatting klopte.",
            },
          ],
          woorden: [
            {
              woord: "schatten",
              uitleg: "Snel een ongeveer-antwoord berekenen door eerst af te ronden.",
            },
            {
              woord: "check",
              uitleg: "Controleren of je antwoord ongeveer klopt.",
            },
          ],
          theorie: "Toets-truc: schat na elke som. Ligt je antwoord ver van je schatting? Dan heb je ergens een fout gemaakt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schatting 400, antwoord 4100 → fout.",
            },
            {
              type: "stap",
              tekst: "Schatting 700, antwoord 706 → klopt qua grootte.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Antwoord en schatting moeten dicht bij elkaar liggen.",
            },
          ],
          niveaus: {
            basis: "599 ligt dicht bij 600.",
            simpeler: "Schatting 600. Alleen 599 ligt daar dichtbij.",
            nogSimpeler: "599 ≈ 600.",
          },
        },
      },
      {
        q: "**Schat 4 × 49**. Welk antwoord komt het dichtst bij?",
        options: ["200", "160", "250", "100"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — 49 is bijna 50, niet bijna 40.",
          "Te veel — reken met 50 en neem dat 4 keer.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond 49 af op 10",
              tekst: "49 → **50** (9 = omhoog).",
            },
            {
              titel: "Stap 2: reken met het ronde getal",
              tekst: "4 × 50 = **200**.",
            },
            {
              titel: "Check",
              tekst: "Echt: 4 × 49 = 196. Dat ligt dicht bij 200.",
            },
          ],
          woorden: [
            {
              woord: "schatten",
              uitleg: "Snel een ongeveer-antwoord berekenen door eerst af te ronden.",
            },
            {
              woord: "afronden",
              uitleg: "Een getal vereenvoudigen naar een 'rond' getal.",
            },
          ],
          theorie: "Bij keersommen: rond het lastige getal af op een rond getal en reken daarmee.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 × 51 → 3 × 50 = 150. Echt: 153.",
            },
            {
              type: "stap",
              tekst: "6 × 19 → 6 × 20 = 120. Echt: 114.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "0, 1, 2, 3, 4 → omlaag. 5, 6, 7, 8, 9 → omhoog.",
            },
          ],
          niveaus: {
            basis: "4 × 50 = 200.",
            simpeler: "49 is bijna 50. 4 × 50 = 200.",
            nogSimpeler: "Ongeveer 200.",
          },
        },
      },
      {
        q: "Je koopt een boek van **€ 9,95** en een pen van **€ 2,10**. Hoeveel betaal je **ongeveer**?",
        options: ["€ 12", "€ 11", "€ 13", "€ 21"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — € 9,95 is bijna € 10.",
          null,
          "Te veel — rond elk bedrag af op hele euro's en tel op.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond af op hele euro's",
              tekst: "€ 9,95 → **€ 10**. € 2,10 → **€ 2**.",
            },
            {
              titel: "Stap 2: tel op",
              tekst: "€ 10 + € 2 = **€ 12**.",
            },
            {
              titel: "Check",
              tekst: "Echt: € 9,95 + € 2,10 = € 12,05. Dat is bijna € 12.",
            },
          ],
          woorden: [
            {
              woord: "schatten",
              uitleg: "Snel een ongeveer-antwoord berekenen door eerst af te ronden.",
            },
            {
              woord: "hele euro's",
              uitleg: "Bedragen zonder centen, zoals € 10 of € 2.",
            },
          ],
          theorie: "In de winkel: rond prijzen af op hele euro's. Dan kun je in je hoofd snel optellen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 4,90 + € 1,20 → € 5 + € 1 = € 6.",
            },
            {
              type: "stap",
              tekst: "€ 7,05 + € 2,95 → € 7 + € 3 = € 10.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kijk naar de centen: 50 cent of meer → omhoog, minder → omlaag.",
            },
          ],
          niveaus: {
            basis: "€ 10 + € 2 = € 12.",
            simpeler: "€ 9,95 ≈ € 10. € 2,10 ≈ € 2. Samen € 12.",
            nogSimpeler: "Ongeveer € 12.",
          },
        },
      },
      {
        q: "Lisa rekent **61 + 29** en krijgt **900**. Wat laat een schatting zien?",
        options: [
          "Fout, het is ongeveer 90",
          "Goed, 900 klopt precies",
          "Fout, het is ongeveer 9",
          "Fout, het is ongeveer 30",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Schat eerst zelf: rond 61 en 29 af op tientallen en tel op.",
          null,
          "Je moet beide getallen gebruiken, niet alleen 29.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: schat zelf",
              tekst: "61 → **60**. 29 → **30**. 60 + 30 = **90**.",
            },
            {
              titel: "Stap 2: vergelijk",
              tekst: "Lisa heeft 900. Dat is tien keer zo groot als de schatting 90. Dat klopt dus niet.",
            },
            {
              titel: "Check",
              tekst: "Echt: 61 + 29 = 90. Lisa heeft per ongeluk een 0 te veel geschreven.",
            },
          ],
          woorden: [
            {
              woord: "schatten",
              uitleg: "Snel een ongeveer-antwoord berekenen door eerst af te ronden.",
            },
            {
              woord: "check",
              uitleg: "Controleren of je antwoord ongeveer klopt.",
            },
          ],
          theorie: "Een schatting helpt je om fouten te vinden. Is je antwoord veel groter of kleiner dan je schatting? Reken dan opnieuw.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schatting 50, antwoord 500 → fout.",
            },
            {
              type: "stap",
              tekst: "Schatting 80, antwoord 79 → klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "0, 1, 2, 3, 4 → omlaag. 5, 6, 7, 8, 9 → omhoog.",
            },
          ],
          niveaus: {
            basis: "Schatting 90, niet 900.",
            simpeler: "60 + 30 = 90. 900 is veel te veel.",
            nogSimpeler: "Ongeveer 90.",
          },
        },
      },
      {
        q: "**Schat 18 + 23 + 31**. Welk antwoord komt het dichtst bij?",
        options: ["70", "60", "80", "90"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — 18 is bijna 20, niet bijna 10.",
          null,
          "Te veel — rond elk getal af op tientallen en tel ze alle drie op.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond elk getal af op 10",
              tekst: "18 → **20**. 23 → **20**. 31 → **30**.",
            },
            {
              titel: "Stap 2: tel op",
              tekst: "20 + 20 + 30 = **70**.",
            },
            {
              titel: "Check",
              tekst: "Echt: 18 + 23 + 31 = 72. Dat ligt dicht bij 70.",
            },
          ],
          woorden: [
            {
              woord: "schatten",
              uitleg: "Snel een ongeveer-antwoord berekenen door eerst af te ronden.",
            },
            {
              woord: "afronden",
              uitleg: "Een getal vereenvoudigen naar een 'rond' getal.",
            },
          ],
          theorie: "Bij drie of meer getallen: rond ze allemaal af en tel de ronde getallen op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "12 + 39 + 21 → 10 + 40 + 20 = 70. Echt: 72.",
            },
            {
              type: "stap",
              tekst: "27 + 14 + 48 → 30 + 10 + 50 = 90. Echt: 89.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "0, 1, 2, 3, 4 → omlaag. 5, 6, 7, 8, 9 → omhoog.",
            },
          ],
          niveaus: {
            basis: "20 + 20 + 30 = 70.",
            simpeler: "18 → 20, 23 → 20, 31 → 30. Samen 70.",
            nogSimpeler: "Ongeveer 70.",
          },
        },
      },
    ],
  },

  {
    title: "Afronden op 10, 100 of 1000",
    explanation: "**Afronden** = een getal **vereenvoudigen** naar een 'rond' getal.\n\n**Regel — kijk naar het cijfer ERNA**:\n• **0, 1, 2, 3, 4** → **naar beneden** afronden.\n• **5, 6, 7, 8, 9** → **naar boven** afronden.\n\n**Afronden op 10**:\n• 23 → 20 *(3 = naar beneden)*\n• 27 → 30 *(7 = naar boven)*\n• 25 → 30 *(5 = naar boven, regel)*\n• 144 → 140 *(4 = naar beneden)*\n\n**Afronden op 100**:\n• 247 → 200 *(4 = naar beneden, kijk naar TIENTAL)*\n• 270 → 300 *(7 in tienen = naar boven)*\n• 850 → 900 *(5 in tienen = naar boven)*\n\n**Afronden op 1000**:\n• 2300 → 2000 *(3 in honderden = naar beneden)*\n• 2700 → 3000 *(7 in honderden = naar boven)*\n• 1500 → 2000.\n\n**Toets-truc — kijk naar het juiste cijfer**:\n• Op 10 → kijk naar **eenheden**.\n• Op 100 → kijk naar **tientallen**.\n• Op 1000 → kijk naar **honderdtallen**.\n\n**Veel-voorkomende fout**:\nNaar het verkeerde cijfer kijken. Voor 'op 100': kijk naar de tien, niet de eenheden.",
    checks: [
      {
        q: "**Rond af op 10: 47**",
        options: ["50","40","45","47"],
        answer: 0,
        wrongHints: [null,"7 is meer dan 5 — naar boven afronden.","Geen tussen-getal — kies 40 of 50.","Niet afgerond."],
      },
      {
        q: "**Rond af op 100: 358**",
        options: ["400","300","350","360"],
        answer: 0,
        wrongHints: [null,"5 in tientallen → naar boven.","Niet op 100 afgerond — dat is op 10.","Niet op 100 afgerond — dat is op 10."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: welk cijfer telt?", tekst: "Bij afronden op **100** kijk je naar het cijfer in de **tientallen** (de '5' in 358)." },
            { titel: "Stap 2: regel toepassen", tekst: "Cijfer **5 of hoger** = naar **BOVEN** afronden. Dus 358 → naar 400 (niet 300)." },
            { titel: "Klopt het qua grootte?", tekst: "358 ligt tussen 300 en 400. Omdat de 5 in tientallen aangeeft 'naar boven', wordt het 400. Niet 350 of 360 — dat is afronden op 10, niet op 100." },
          ],
          woorden: [
            { woord: "afronden op 100", uitleg: "Maak hele honderdtallen (300, 400, 500, ...)." },
            { woord: "5-regel", uitleg: "5, 6, 7, 8, 9 → omhoog. 0, 1, 2, 3, 4 → omlaag." },
          ],
          theorie: "Toets-tip: kijk altijd 1 cijfer NA waar je naartoe rondt. Bij op 100: kijk tientallen. Bij op 10: kijk eenheden. Bij op 1000: kijk honderdtallen.",
          voorbeelden: [
            { type: "stap", tekst: "247 op 100 → 4 in tien = omlaag → 200." },
            { type: "stap", tekst: "850 op 100 → 5 in tien = omhoog → 900." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Op 100? Kijk naar tien. Dat cijfer beslist of je naar 200/300/400/... gaat." }],
          niveaus: {
            basis: "Op 100 afronden: kijk tientallen. 358 → 400 (5 = omhoog).",
            simpeler: "Cijfer in tienen ≥ 5 → omhoog. <5 → omlaag.",
            nogSimpeler: "358 → 400.",
          },
        },
      },
      {
        q: "**Rond af op 1000: 4500**",
        options: ["5000","4000","4500","5500"],
        answer: 0,
        wrongHints: [null,"5 in honderden → naar boven (regel).","Niet afgerond.","Te veel — bij afronden op 1000 eindigt het getal op 000."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**Rond af op 10: 83**",
        options: ["80", "90", "85", "100"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de eenheden: is 3 klein of groot?",
          "Geen tussen-getal — kies een getal dat op 0 eindigt.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: welk cijfer telt?",
              tekst: "Bij afronden op **10** kijk je naar de **eenheden**: de 3 in 83.",
            },
            {
              titel: "Stap 2: regel toepassen",
              tekst: "3 is 0, 1, 2, 3 of 4 → naar **beneden**. 83 → **80**.",
            },
            {
              titel: "Klopt het?",
              tekst: "83 ligt tussen 80 en 90, en dichter bij 80.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 10",
              uitleg: "Maak een heel tiental (70, 80, 90, ...).",
            },
            {
              woord: "5-regel",
              uitleg: "5, 6, 7, 8, 9 → omhoog. 0, 1, 2, 3, 4 → omlaag.",
            },
          ],
          theorie: "Op 10 afronden: kijk naar de eenheden.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "23 → 20.",
            },
            {
              type: "stap",
              tekst: "27 → 30.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Op 10? Kijk naar het laatste cijfer.",
            },
          ],
          niveaus: {
            basis: "3 = omlaag. 83 → 80.",
            simpeler: "Laatste cijfer 3 is minder dan 5 → omlaag.",
            nogSimpeler: "83 → 80.",
          },
        },
      },
      {
        q: "**Rond af op 10: 65**",
        options: ["70", "60", "65", "75"],
        answer: 0,
        wrongHints: [null, "Wat zegt de regel bij een 5?", "Niet afgerond.", "Dat eindigt niet op 0."],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: welk cijfer telt?",
              tekst: "Bij afronden op **10** kijk je naar de **eenheden**: de 5 in 65.",
            },
            {
              titel: "Stap 2: regel toepassen",
              tekst: "Bij een **5** ga je naar **boven**. 65 → **70**.",
            },
            {
              titel: "Let op",
              tekst: "65 ligt precies in het midden van 60 en 70. Daarom is er een vaste regel: 5 = omhoog.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 10",
              uitleg: "Maak een heel tiental (60, 70, 80, ...).",
            },
            {
              woord: "5-regel",
              uitleg: "5, 6, 7, 8, 9 → omhoog. 0, 1, 2, 3, 4 → omlaag.",
            },
          ],
          theorie: "Bij precies in het midden (een 5) rond je altijd naar boven af.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "25 → 30.",
            },
            {
              type: "stap",
              tekst: "45 → 50.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Een 5 gaat altijd omhoog.",
            },
          ],
          niveaus: {
            basis: "5 = omhoog. 65 → 70.",
            simpeler: "Laatste cijfer is 5 → naar boven.",
            nogSimpeler: "65 → 70.",
          },
        },
      },
      {
        q: "**Rond af op 100: 641**",
        options: ["600", "700", "640", "650"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de tientallen: is 4 klein of groot?",
          "Dat is afgerond op 10, niet op 100.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: welk cijfer telt?",
              tekst: "Bij afronden op **100** kijk je naar de **tientallen**: de 4 in 641.",
            },
            {
              titel: "Stap 2: regel toepassen",
              tekst: "4 → naar **beneden**. 641 → **600**.",
            },
            {
              titel: "Klopt het?",
              tekst: "641 ligt tussen 600 en 700, en dichter bij 600.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 100",
              uitleg: "Maak een heel honderdtal (500, 600, 700, ...).",
            },
            {
              woord: "5-regel",
              uitleg: "5, 6, 7, 8, 9 → omhoog. 0, 1, 2, 3, 4 → omlaag.",
            },
          ],
          theorie: "Op 100 afronden: kijk naar de tientallen, niet naar de eenheden.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "247 → 200.",
            },
            {
              type: "stap",
              tekst: "270 → 300.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Op 100? Kijk naar het middelste cijfer van een getal met drie cijfers.",
            },
          ],
          niveaus: {
            basis: "4 in de tientallen = omlaag. 641 → 600.",
            simpeler: "Tientallen-cijfer 4 is minder dan 5 → omlaag.",
            nogSimpeler: "641 → 600.",
          },
        },
      },
      {
        q: "**Rond af op 1000: 6280**",
        options: ["6000", "7000", "6300", "6200"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de honderdtallen: is 2 klein of groot?",
          "Dat is afgerond op 100, niet op 1000.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: welk cijfer telt?",
              tekst: "Bij afronden op **1000** kijk je naar de **honderdtallen**: de 2 in 6280.",
            },
            {
              titel: "Stap 2: regel toepassen",
              tekst: "2 → naar **beneden**. 6280 → **6000**.",
            },
            {
              titel: "Klopt het?",
              tekst: "Bij afronden op 1000 eindigt het getal op 000. 6280 ligt dichter bij 6000 dan bij 7000.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 1000",
              uitleg: "Maak een heel duizendtal (5000, 6000, 7000, ...).",
            },
            {
              woord: "5-regel",
              uitleg: "5, 6, 7, 8, 9 → omhoog. 0, 1, 2, 3, 4 → omlaag.",
            },
          ],
          theorie: "Op 1000 afronden: kijk naar de honderdtallen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2300 → 2000.",
            },
            {
              type: "stap",
              tekst: "2700 → 3000.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Op 1000? Kijk naar het tweede cijfer van een getal met vier cijfers.",
            },
          ],
          niveaus: {
            basis: "2 in de honderdtallen = omlaag. 6280 → 6000.",
            simpeler: "Honderdtallen-cijfer 2 is minder dan 5 → omlaag.",
            nogSimpeler: "6280 → 6000.",
          },
        },
      },
      {
        q: "**Rond af op 1000: 3499**",
        options: ["3000", "4000", "3500", "3400"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk alleen naar de honderdtallen — de negens erachter tellen niet mee.",
          null,
          "Dat eindigt niet op 000.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: welk cijfer telt?",
              tekst: "Bij afronden op **1000** kijk je naar de **honderdtallen**: de 4 in 3499.",
            },
            {
              titel: "Stap 2: regel toepassen",
              tekst: "4 → naar **beneden**. 3499 → **3000**.",
            },
            {
              titel: "Valkuil",
              tekst: "De 9's achter de 4 lijken groot, maar die tellen niet. Alleen het cijfer direct na de afrondplek beslist.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 1000",
              uitleg: "Maak een heel duizendtal (3000, 4000, ...).",
            },
            {
              woord: "5-regel",
              uitleg: "5, 6, 7, 8, 9 → omhoog. 0, 1, 2, 3, 4 → omlaag.",
            },
          ],
          theorie: "Kijk altijd naar precies één cijfer: het cijfer direct rechts van de plek waarop je afrondt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1500 → 2000.",
            },
            {
              type: "stap",
              tekst: "2300 → 2000.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eén cijfer beslist. De rest maakt niet uit.",
            },
          ],
          niveaus: {
            basis: "4 in de honderdtallen = omlaag. 3499 → 3000.",
            simpeler: "Alleen de 4 telt. 4 is minder dan 5 → omlaag.",
            nogSimpeler: "3499 → 3000.",
          },
        },
      },
      {
        q: "Welk getal wordt **40** als je het afrondt op 10?",
        options: ["36", "46", "34", "45"],
        answer: 0,
        wrongHints: [
          null,
          "Rond dit getal zelf af op 10: krijg je dan 40?",
          null,
          "Wat zegt de regel bij een 5?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond elk getal af op 10",
              tekst: "36 → 6 = omhoog → **40**. 46 → 6 = omhoog → 50. 34 → 4 = omlaag → 30. 45 → 5 = omhoog → 50.",
            },
            {
              titel: "Stap 2: welke wordt 40?",
              tekst: "Alleen **36** wordt 40.",
            },
            {
              titel: "Check",
              tekst: "Getallen die 40 worden: 35, 36, 37, 38, 39, 40, 41, 42, 43 en 44.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 10",
              uitleg: "Maak een heel tiental (30, 40, 50, ...).",
            },
            {
              woord: "5-regel",
              uitleg: "5, 6, 7, 8, 9 → omhoog. 0, 1, 2, 3, 4 → omlaag.",
            },
          ],
          theorie: "Bij zo'n vraag rond je elk getal apart af en kijk je welke uitkomst klopt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "27 → 30.",
            },
            {
              type: "stap",
              tekst: "144 → 140.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Van 35 tot en met 44 wordt alles 40.",
            },
          ],
          niveaus: {
            basis: "36 → 40.",
            simpeler: "36 eindigt op 6 → omhoog → 40.",
            nogSimpeler: "36 wordt 40.",
          },
        },
      },
      {
        q: "Welk getal wordt **NIET 500** als je het afrondt op 100?",
        options: ["560", "549", "451", "512"],
        answer: 0,
        wrongHints: [null, "Kijk bij dit getal naar het cijfer in de tientallen.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: kijk steeds naar de tientallen",
              tekst: "560 → 6 = omhoog → **600**. 549 → 4 = omlaag → 500. 451 → 5 = omhoog → 500. 512 → 1 = omlaag → 500.",
            },
            {
              titel: "Stap 2: welke wordt geen 500?",
              tekst: "Alleen **560** wordt 600.",
            },
            {
              titel: "Valkuil",
              tekst: "Bij 549 lijkt de 9 groot, maar op 100 kijk je naar de tientallen (de 4), niet naar de eenheden.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 100",
              uitleg: "Maak een heel honderdtal (400, 500, 600, ...).",
            },
            {
              woord: "5-regel",
              uitleg: "5, 6, 7, 8, 9 → omhoog. 0, 1, 2, 3, 4 → omlaag.",
            },
          ],
          theorie: "Op 100 afronden: alleen het cijfer in de tientallen beslist.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "247 → 200.",
            },
            {
              type: "stap",
              tekst: "850 → 900.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Van 450 tot en met 549 wordt alles 500.",
            },
          ],
          niveaus: {
            basis: "560 → 600, niet 500.",
            simpeler: "Tientallen-cijfer 6 → omhoog → 600.",
            nogSimpeler: "560 wordt 600.",
          },
        },
      },
    ],
  },

  {
    title: "Schatten van sommen — eerst afronden, dan rekenen",
    explanation: "Bij toetsvragen staat soms: *'Schat ongeveer'*. Dan ronden we eerst af en rekenen daarna.\n\n**Voorbeeld 1**:\n*'Schat 287 + 419'*\n• Afronden op 100: 300 + 400 = **700**.\n• Echte som: 287 + 419 = 706. Klopt!\n\n**Voorbeeld 2**:\n*'Schat 78 × 23'*\n• Afronden op 10: 80 × 20 = **1600**.\n• Echte som: 78 × 23 = 1794. Klopt qua grootte.\n\n**Voorbeeld 3 — verschil**:\n*'Schat 612 − 387'*\n• Afronden op 100: 600 − 400 = **200**.\n• Echte som: 612 − 387 = 225. Klopt.\n\n**Toets-tip**:\n• Schatten geeft **niet de exacte uitkomst**. Bij de Doorstroomtoets is meestal een schatting goed als 't dicht bij de echte uitkomst zit.\n• Gebruik schatten als **check**: 'klopt mijn echte antwoord met mijn schatting?'\n\n**Hoe nauwkeurig?**:\n• Op 10 afronden = meestal dicht bij het echte antwoord.\n• Op 100 of 1000 afronden = grover, minder precies.\n\n**Praktijk**:\n*'Drie boodschappen kosten € 12,80 + € 8,40 + € 6,75. Klopt het dat ik € 30 nodig heb?'*\n• Schatten: €13 + €8 + €7 = **€28**.\n• Antwoord: ja, €30 is genoeg.",
    checks: [
      {
        q: "**Schat 198 + 412** (afgerond op 100):",
        options: ["600","500","700","400"],
        answer: 0,
        wrongHints: [null,"Te weinig — rond elk getal af op honderdtallen en tel ze dan op.","Te veel — controleer afronding.","Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: rond elk getal af op 100", tekst: "198 → ligt vlakbij 200 (cijfer in tien = 9 = omhoog) → **200**. 412 → ligt vlakbij 400 (cijfer in tien = 1 = omlaag) → **400**." },
            { titel: "Stap 2: tel op", tekst: "200 + 400 = **600**." },
            { titel: "Snelle check", tekst: "Echte uitkomst: 198 + 412 = 610. Schatting 600 zit super-dicht erbij. Schatten op 100 = ~98% accuraat hier." },
          ],
          woorden: [
            { woord: "afronden op 100", uitleg: "Hele honderdtallen maken (100/200/300/...)." },
            { woord: "schatten + optellen", uitleg: "Eerst afronden, dan + doen." },
          ],
          theorie: "Toets-tip: bij grote sommen ALTIJD even schatten als check. 198 + 412 mag niet 1000 of 100 zijn — als jouw echte berekening dat zegt, heb je fout gerekend.",
          voorbeelden: [
            { type: "stap", tekst: "Schat 287 + 419 → 300 + 400 = 700. Echt: 706." },
            { type: "stap", tekst: "Schat 612 − 387 → 600 − 400 = 200. Echt: 225." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Afronden, dan rekenen. Veel sneller dan exact rekenen, en meestal dicht bij het echte antwoord." }],
          niveaus: {
            basis: "Schatten op 100: rond af, dan optellen. 200 + 400 = 600.",
            simpeler: "198 → 200. 412 → 400. Som = 600.",
            nogSimpeler: "200 + 400 = 600.",
          },
        },
      },
      {
        q: "**Schat 39 × 21** (afgerond op 10):",
        options: ["800","600","1000","900"],
        answer: 0,
        wrongHints: [null,"Te weinig — rond 39 en 21 af op tientallen en vermenigvuldig die.","Te veel — niet 50 × 20.","Te veel — heb je 30 ipv 20 gerekend?"],
      },
      {
        q: "**Schat 732 − 289** (afgerond op 100):",
        options: ["400","500","300","450"],
        answer: 0,
        wrongHints: [null,"Te veel — rond beide getallen af op honderdtallen en trek af.","Te weinig — heb je 700 - 400 gedaan?","Niet afgerond op 100 — kies een rond honderdtal."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**Schat 312 + 489** (afgerond op 100):",
        options: ["800", "700", "900", "600"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — 489 ligt dichter bij 500 dan bij 400.",
          "Te veel — 312 ligt dichter bij 300.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond elk getal af op 100",
              tekst: "312 → 1 in de tientallen = omlaag → **300**. 489 → 8 in de tientallen = omhoog → **500**.",
            },
            {
              titel: "Stap 2: tel op",
              tekst: "300 + 500 = **800**.",
            },
            {
              titel: "Check",
              tekst: "Echt: 312 + 489 = 801. Schatting 800 zit er vlak bij.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 100",
              uitleg: "Hele honderdtallen maken (100/200/300/...).",
            },
            {
              woord: "schatten + optellen",
              uitleg: "Eerst afronden, dan + doen.",
            },
          ],
          theorie: "Eerst afronden, dan rekenen. Zo kun je een grote som snel in je hoofd doen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat 287 + 419 → 300 + 400 = 700. Echt: 706.",
            },
            {
              type: "stap",
              tekst: "Schat 198 + 412 → 200 + 400 = 600. Echt: 610.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Afronden, dan rekenen.",
            },
          ],
          niveaus: {
            basis: "300 + 500 = 800.",
            simpeler: "312 → 300. 489 → 500. Samen 800.",
            nogSimpeler: "Ongeveer 800.",
          },
        },
      },
      {
        q: "**Schat 91 − 48** (afgerond op 10):",
        options: ["40", "50", "30", "60"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — 48 ligt dichter bij 50 dan bij 40.",
          "Te weinig — 91 wordt 90, niet 80.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond elk getal af op 10",
              tekst: "91 → 1 = omlaag → **90**. 48 → 8 = omhoog → **50**.",
            },
            {
              titel: "Stap 2: trek af",
              tekst: "90 − 50 = **40**.",
            },
            {
              titel: "Check",
              tekst: "Echt: 91 − 48 = 43. Schatting 40 zit er dicht bij.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 10",
              uitleg: "Hele tientallen maken (10/20/30/...).",
            },
            {
              woord: "schatten + aftrekken",
              uitleg: "Eerst afronden, dan − doen.",
            },
          ],
          theorie: "Bij een minsom rond je ook eerst beide getallen af, en dan trek je af.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat 612 − 387 → 600 − 400 = 200. Echt: 225.",
            },
            {
              type: "stap",
              tekst: "Schat 72 − 29 → 70 − 30 = 40. Echt: 43.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Afronden, dan min.",
            },
          ],
          niveaus: {
            basis: "90 − 50 = 40.",
            simpeler: "91 → 90. 48 → 50. 90 − 50 = 40.",
            nogSimpeler: "Ongeveer 40.",
          },
        },
      },
      {
        q: "**Schat 803 − 397** (afgerond op 100):",
        options: ["400", "500", "300", "1200"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — 397 ligt dichter bij 400 dan bij 300.",
          null,
          "Let op: er staat min, niet plus.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond elk getal af op 100",
              tekst: "803 → 0 in de tientallen = omlaag → **800**. 397 → 9 in de tientallen = omhoog → **400**.",
            },
            {
              titel: "Stap 2: trek af",
              tekst: "800 − 400 = **400**.",
            },
            {
              titel: "Check",
              tekst: "Echt: 803 − 397 = 406. Schatting 400 zit er vlak bij.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 100",
              uitleg: "Hele honderdtallen maken (100/200/300/...).",
            },
            {
              woord: "schatten + aftrekken",
              uitleg: "Eerst afronden, dan − doen.",
            },
          ],
          theorie: "Kijk goed naar het teken: + of −. Een schatting met het verkeerde teken is ver weg.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat 612 − 387 → 600 − 400 = 200. Echt: 225.",
            },
            {
              type: "stap",
              tekst: "Schat 732 − 289 → 700 − 300 = 400. Echt: 443.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Afronden, dan min.",
            },
          ],
          niveaus: {
            basis: "800 − 400 = 400.",
            simpeler: "803 → 800. 397 → 400. 800 − 400 = 400.",
            nogSimpeler: "Ongeveer 400.",
          },
        },
      },
      {
        q: "**Schat € 3,90 + € 5,20 + € 1,95** (afgerond op hele euro's):",
        options: ["€ 11", "€ 10", "€ 12", "€ 9"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — € 1,95 is bijna € 2, niet € 1.",
          null,
          "Te weinig — rond elk bedrag af en tel ze alle drie op.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond elk bedrag af op hele euro's",
              tekst: "€ 3,90 → **€ 4**. € 5,20 → **€ 5**. € 1,95 → **€ 2**.",
            },
            {
              titel: "Stap 2: tel op",
              tekst: "€ 4 + € 5 + € 2 = **€ 11**.",
            },
            {
              titel: "Check",
              tekst: "Echt: € 3,90 + € 5,20 + € 1,95 = € 11,05. Schatting € 11 zit er vlak bij.",
            },
          ],
          woorden: [
            {
              woord: "afronden op hele euro's",
              uitleg: "Bedragen zonder centen maken (€ 4, € 5, ...).",
            },
            {
              woord: "schatten + optellen",
              uitleg: "Eerst afronden, dan + doen.",
            },
          ],
          theorie: "Bij geld: 50 cent of meer → een euro omhoog. Minder dan 50 cent → omlaag.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 12,80 + € 8,40 + € 6,75 → € 13 + € 8 + € 7 = € 28.",
            },
            {
              type: "stap",
              tekst: "€ 2,60 + € 4,30 → € 3 + € 4 = € 7.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kijk naar de centen achter de komma.",
            },
          ],
          niveaus: {
            basis: "€ 4 + € 5 + € 2 = € 11.",
            simpeler: "€ 3,90 → € 4. € 5,20 → € 5. € 1,95 → € 2. Samen € 11.",
            nogSimpeler: "Ongeveer € 11.",
          },
        },
      },
      {
        q: "**Schat 29 + 38 + 52** (afgerond op 10):",
        options: ["120", "110", "130", "100"],
        answer: 0,
        wrongHints: [null, "Te weinig — 38 wordt 40, niet 30.", "Te veel — 52 wordt 50, niet 60.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond elk getal af op 10",
              tekst: "29 → **30**. 38 → **40**. 52 → **50**.",
            },
            {
              titel: "Stap 2: tel op",
              tekst: "30 + 40 + 50 = **120**.",
            },
            {
              titel: "Check",
              tekst: "Echt: 29 + 38 + 52 = 119. Schatting 120 zit er vlak bij.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 10",
              uitleg: "Hele tientallen maken (10/20/30/...).",
            },
            {
              woord: "schatten + optellen",
              uitleg: "Eerst afronden, dan + doen.",
            },
          ],
          theorie: "Rond elk getal apart af en tel dan de ronde getallen op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat 287 + 419 → 300 + 400 = 700. Echt: 706.",
            },
            {
              type: "stap",
              tekst: "Schat 21 + 47 + 33 → 20 + 50 + 30 = 100. Echt: 101.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Afronden, dan rekenen.",
            },
          ],
          niveaus: {
            basis: "30 + 40 + 50 = 120.",
            simpeler: "29 → 30, 38 → 40, 52 → 50. Samen 120.",
            nogSimpeler: "Ongeveer 120.",
          },
        },
      },
      {
        q: "**Schat 2.870 + 1.940** (afgerond op 1000):",
        options: ["5.000", "4.000", "6.000", "3.000"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — 2.870 ligt dichter bij 3.000 dan bij 2.000.",
          null,
          "Te weinig — rond beide getallen af en tel ze allebei op.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1: rond elk getal af op 1000",
              tekst: "2.870 → 8 in de honderdtallen = omhoog → **3.000**. 1.940 → 9 in de honderdtallen = omhoog → **2.000**.",
            },
            {
              titel: "Stap 2: tel op",
              tekst: "3.000 + 2.000 = **5.000**.",
            },
            {
              titel: "Check",
              tekst: "Echt: 2.870 + 1.940 = 4.810. Schatting 5.000 klopt qua grootte. Op 1000 afronden is grover dan op 10.",
            },
          ],
          woorden: [
            {
              woord: "afronden op 1000",
              uitleg: "Hele duizendtallen maken (1.000/2.000/3.000/...).",
            },
            {
              woord: "schatten + optellen",
              uitleg: "Eerst afronden, dan + doen.",
            },
          ],
          theorie: "Hoe grover je afrondt (op 1000), hoe verder je schatting van het echte antwoord kan liggen. Voor een snelle check is dat goed genoeg.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schat 287 + 419 → 300 + 400 = 700. Echt: 706.",
            },
            {
              type: "stap",
              tekst: "Schat 1.200 + 3.700 → 1.000 + 4.000 = 5.000. Echt: 4.900.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Op 1000? Kijk naar de honderdtallen.",
            },
          ],
          niveaus: {
            basis: "3.000 + 2.000 = 5.000.",
            simpeler: "2.870 → 3.000. 1.940 → 2.000. Samen 5.000.",
            nogSimpeler: "Ongeveer 5.000.",
          },
        },
      },
    ],
  },

  {
    title: "Praktijk — kassabon + tijdsbesteding",
    explanation: "Schatten is overal handig in praktijk:\n\n**Voorbeeld 1 — winkel-budget**:\n*'Heb ik genoeg geld? Met € 25 kunnen we kopen: brood € 2,15 + kaas € 4,30 + appels € 3,80 + chips € 1,50 + koek € 2,90.'*\n\nSchatten:\n• 2 + 4 + 4 + 2 + 3 = 15. Genoeg!\n\n**Voorbeeld 2 — reistijd**:\n*'Trein vertrekt 14:18, aankomst 16:47. Hoe lang duurt de reis ongeveer?'*\n• Afronden: 14:20 → 16:50 = **2,5 uur**.\n• Echte tijd: 2 uur 29 min ≈ 2,5 uur. Klopt.\n\n**Voorbeeld 3 — afstand schatten**:\n*'Sven loopt naar school. Hij doet er 28 minuten over. Hoe ver is dat ongeveer?'*\n• Mensen lopen ~5 km/uur, dus ~80 m/min.\n• 28 min × 80 m/min ≈ 2200 m = **~2 km**.\n\n**Toets-tip — controle achter elke som**:\nNa elke berekening — schat het antwoord. Klopt het qua grootte? Zo nee → fout gemaakt, opnieuw kijken.",
    checks: [
      {
        q: "Een kassabon: **€ 4,85 + € 7,15 + € 12,40 + € 3,60**. Schat:",
        options: ["€ 28","€ 25","€ 30","€ 22"],
        answer: 0,
        wrongHints: [null,"Te weinig — schat elk bedrag af op hele euro's en tel ze alle vier op.","Te veel — controleer schatting.","Veel te weinig."],
      },
      {
        q: "Een rit duurt **2 uur 47 min**. Afgerond op kwartiers — hoeveel?",
        options: ["2 uur 45 min","3 uur","2 uur 30 min","3 uur 15 min"],
        answer: 0,
        wrongHints: [null,"Te veel — welk kwartier (0, 15, 30 of 45 minuten) ligt het dichtst bij 47 minuten?","Te weinig — 47 minuten ligt dichter bij een ander kwartier.","Te veel."],
      },
      {
        q: "**€ 49,80 + € 24,30** — schat (rond af op hele euro's):",
        options: ["€ 74","€ 70","€ 80","€ 75"],
        answer: 0,
        wrongHints: [null,"Te weinig — rond elk bedrag af op hele euro's en tel op.","Te veel — controleer schatting.","Te veel — klopt jouw schatting van beide bedragen?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je hebt **€ 10**. Je koopt sap van **€ 2,10**, brood van **€ 2,90** en kaas van **€ 3,80**. Schat: is € 10 genoeg?",
        options: [
          "Ja, het is ongeveer € 9",
          "Nee, het is ongeveer € 11",
          "Nee, het is ongeveer € 13",
          "Ja, het is ongeveer € 5",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Schat nog eens: rond elk bedrag af op hele euro's en tel op.",
          null,
          "Te weinig — je moet alle drie de bedragen optellen.",
        ],
      },
      {
        q: "De bus vertrekt 's ochtends om **9:12** en komt aan om **10:58**. Hoe lang duurt de rit ongeveer?",
        options: ["Ongeveer 2 uur", "Ongeveer 1 uur", "Ongeveer 3 uur", "Ongeveer een half uur"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — rond de tijden af: 9:12 is ongeveer 9:10, 10:58 is bijna 11:00.",
          null,
          "Veel te weinig — de bus rijdt van negen uur tot bijna elf uur.",
        ],
      },
      {
        q: "Een kassabon: **€ 1,10 + € 5,90 + € 2,95 + € 8,05**. Schat:",
        options: ["€ 18", "€ 16", "€ 20", "€ 15"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — € 5,90 en € 2,95 zijn bijna € 6 en € 3.",
          "Te veel — rond elk bedrag af op hele euro's en tel ze alle vier op.",
          null,
        ],
      },
      {
        q: "Je koopt **3 schriften** van **€ 1,95** per stuk. Hoeveel betaal je ongeveer?",
        options: ["€ 6", "€ 5", "€ 4", "€ 8"],
        answer: 0,
        wrongHints: [null, "Te weinig — € 1,95 is bijna € 2.", null, "Te veel — reken met € 2 per schrift."],
      },
      {
        q: "Je koopt een tas van **€ 2,95** en een bal van **€ 3,10**. Je betaalt met een briefje van **€ 10**. Hoeveel krijg je ongeveer terug?",
        options: ["€ 4", "€ 6", "€ 3", "€ 5"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is ongeveer wat je betaalt, niet wat je terugkrijgt.",
          null,
          "Schat eerst wat je betaalt, en haal dat van € 10 af.",
        ],
      },
      {
        q: "Noor speelt 's middags buiten van **13:05** tot **15:55**. Hoe lang is dat ongeveer?",
        options: ["Ongeveer 3 uur", "Ongeveer 2 uur", "Ongeveer 4 uur", "Ongeveer 1 uur"],
        answer: 0,
        wrongHints: [null, "Te weinig — 15:55 is bijna 16:00.", null, "Veel te weinig."],
      },
    ],
  },

  {
    title: "Eindopdracht — schatten + afronden mix",
    explanation: "Mix-toets met afrond- en schat-vragen in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      {
        q: "**Rond 4567 af op 1000**:",
        options: ["5000","4000","4500","4600"],
        answer: 0,
        wrongHints: [null,"5 in honderden → naar boven.","Niet op 1000 afgerond.","Niet op 1000."],
      },
      {
        q: "**Schat 248 + 391 + 152** (op 100):",
        options: ["800","700","900","600"],
        answer: 0,
        wrongHints: [null,"Te weinig — rond elk getal af op honderdtallen en tel ze op.","Te veel — schatting controleren.","Veel te weinig."],
      },
      {
        q: "Een biljet van **€ 50** voor boodschappen van **€ 12,40 + € 8,30 + € 25,80**. **Past 't?**",
        options: ["Ja, het past","Nee, je komt ruim € 10 tekort","Nee, je komt net iets tekort","Onmogelijk te zeggen"],
        answer: 0,
        wrongHints: [null,"Schat de som: rond elk bedrag af op hele euro's en tel op.","Schat nog eens: rond elk bedrag af en tel op — is dat meer of minder dan € 50?","Wel te zeggen — schat de som."],
      },
      {
        q: "**Schat 612 ÷ 7**:",
        options: ["~87","~100","~70","~120"],
        answer: 0,
        wrongHints: [null,"Te veel — 7 × 100 is al 700, en dat is meer dan 612.","Te weinig — 7 × 70 is maar 490, dat is ver onder 612.","Te veel."],
      },
      {
        q: "**Rond 2849 af op 100**:",
        options: ["2800","2900","2850","3000"],
        answer: 0,
        wrongHints: [null,"4 in tientallen → naar beneden.","Niet op 100 afgerond.","Niet op 100 — dat is op 1000."],
      },
      {
        q: "**Schat: 19,80 × 4** (in winkel zonder rekenmachine):",
        options: ["~80","~70","~90","~50"],
        answer: 0,
        wrongHints: [null, "Te weinig — rond 19,80 omhoog (bijna 20), niet omlaag.", "Te veel — rond 19,80 af op een heel getal en reken dan × 4.", "Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Wanneer schat je?", tekst: "Bij winkel-vragen zonder rekenmachine: rond eerst af naar makkelijk getal, daarna rekenen." },
            { titel: "Rond af + reken", tekst: "19,80 ≈ 20 (bijna ronde getal). 20 × 4 = **80**. Exact zou zijn: 19,80 × 4 = 79,20 — dichtbij 80." },
            { titel: "Toets-truc snel schatten", tekst: "Bij **× of ÷** met kommagetallen: rond beide kanten af naar makkelijke getallen, reken in hoofd. Foutmarge meestal <10%. Bij **'past het in mijn budget?'**-vragen vaak voldoende." },
          ],
          woorden: [
            { woord: "schatten", uitleg: "Ongeveer-berekening met makkelijke getallen, sneller dan precies." },
            { woord: "afronden naar boven", uitleg: "Als getal dicht bij volgende ronde getal zit (bv 19,80 → 20)." },
          ],
          theorie: "Schatten-stappenplan:\n1. Kijk welke makkelijke getallen dichtbij zijn\n2. Rond AF (niet altijd naar boven — kies wat dichtst is)\n3. Reken in hoofd met ronde getallen\n4. Antwoord = 'ongeveer X'",
          voorbeelden: [
            { type: "stap", tekst: "€8,90 × 3 → ~9 × 3 = ~€27 (echt: €26,70)." },
            { type: "stap", tekst: "€12,10 × 5 → ~12 × 5 = ~€60 (echt: €60,50)." },
          ],
          basiskennis: [{ onderwerp: "De toets tip", uitleg: "Vraag 'ongeveer hoeveel' = schatten. Vraag 'precies hoeveel' = uitrekenen." }],
          niveaus: { basis: "20 × 4 = 80.", simpeler: "19,80 ≈ 20 euro. 4 × 20 = €80.", nogSimpeler: "~80" },
        },
      },
      {
        q: "Tel op en **rond de uitkomst af op 10**: 145 + 89 + 36 = ?",
        options: ["270","260","280","250"],
        answer: 0,
        wrongHints: [null, "Te weinig — tel eerst precies op.", "Dat krijg je als je elk getal apart afrondt. Hier rond je de uitkomst af.", "Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Precies vs schatten", tekst: "Voor PRECIES antwoord: 145 + 89 + 36. Stap voor stap: 145+89 = 234, +36 = **270**." },
            { titel: "Schat-check via afronding", tekst: "Als check: 145≈150, 89≈90, 36≈40. Schatting: 150+90+40 = 280. Het echte antwoord (270) ligt dichtbij. ✓" },
          ],
          woorden: [{ woord: "afronding-check", uitleg: "Ronde getallen om te checken of je antwoord ongeveer klopt." }],
          theorie: "Bij grote getallen: gebruik afronding om FOUT-ANTWOORDEN snel uit te sluiten. Een antwoord als 180 of 380 past niet bij schatting 280.",
          voorbeelden: [{ type: "stap", tekst: "234 + 167: schat 230+170=400. Echt 401. Past." }],
          basiskennis: [{ onderwerp: "Twee technieken combineren", uitleg: "Precies uitrekenen + ronde schatting als sanity-check = minste foutkans." }],
          niveaus: { basis: "145+89+36 = 270.", simpeler: "Tel: 145+89=234. 234+36=270. Schat-check: 150+90+40=280 (klopt qua orde).", nogSimpeler: "270" },
        },
      },
      {
        q: "Een **klas van 24 kinderen** krijgt elk een trakteerzakje van **€ 2,15**. **Past het in € 50 budget**?",
        options: ["Nee, net niet — precies €51,60","Ja, precies — schat €48","Nee, ruim te duur","Geen idee zonder rekenmachine"],
        answer: 0,
        wrongHints: [null, "Te optimistisch — je vergeet de 15 cent per zakje: 24 × €0,15 komt er nog bovenop.", "Te pessimistisch — schat eerst: 24 × €2 = €48.", "Wel — schat altijd eerst voor budget-vragen."],
        uitlegPad: {
          stappen: [
            { titel: "Schatten voor budget-check", tekst: "Bij 'past het in budget?'-vragen schat je eerst grof. 24 × €2,15." },
            { titel: "Splits in stukken", tekst: "24 × €2 = €48 (hoofdrekenen makkelijk). 24 × €0,15 = 24 × 15 cent = 360 cent = €3,60. Totaal: €48 + €3,60 = **€51,60**." },
            { titel: "Conclusie + Toets-tip", tekst: "€51,60 > €50 budget → past NET niet. Toets-tip: bij budget-vragen bij twijfel naar boven afronden voor zekerheid. Een 'misschien-past'-antwoord is risicovol." },
          ],
          woorden: [
            { woord: "budget", uitleg: "Maximum geld dat je mag uitgeven." },
            { woord: "afronden naar boven", uitleg: "Bij budget-check: altijd duurder schatten. Veiliger." },
          ],
          theorie: "Budget-vraag-stappenplan:\n1. Schat de kosten\n2. Vergelijk met budget\n3. Twijfel? → reken precies\n4. Antwoord = past wel/niet/net",
          voorbeelden: [{ type: "stap", tekst: "30 × €1,80 schat: 30 × €2 = €60. Klopt globaal." }],
          basiskennis: [{ onderwerp: "Niet alleen schatten", uitleg: "Voor JA/NEE bij budget: precies uitrekenen als schatting dichtbij grens zit." }],
          niveaus: { basis: "€51,60 > €50 → past niet.", simpeler: "24 × €2 = €48, + 24 × 15c = €3,60. Totaal €51,60. Boven €50.", nogSimpeler: "Past niet" },
        },
      },
      {
        q: "**Rond af op 1000**: 4.612 + 3.298 = ?",
        options: ["8.000","7.000","9.000","7.910"],
        answer: 0,
        wrongHints: [null, "Te weinig — afronding op 1000 brengt 4.612 dichter bij 5.000 dan 4.000.", "Te veel.", "Dat is precies, niet afgerond op 1000."],
        uitlegPad: {
          stappen: [
            { titel: "Afronden op 1000", tekst: "Kijk naar de **honderden-cijfer**:\n• 4.612 → 6 in honderden ≥ 5 → afronden naar BOVEN = **5.000**\n• 3.298 → 2 in honderden < 5 → afronden naar BENEDEN = **3.000**" },
            { titel: "Reken met ronde getallen", tekst: "5.000 + 3.000 = **8.000**. Schat-check: echt antwoord 4.612 + 3.298 = 7.910 (vlak bij 8.000) ✓." },
            { titel: "Toets-truc — eerst afronden, dan optellen", tekst: "Bij grote getallen: afronden naar boven of onder via tussen-cijfer. Bij afronden op 1000 kijk je naar het honderdtal." },
          ],
          woorden: [
            { woord: "afronden op 1000", uitleg: "Naar de dichtstbijzijnde 1000. Kijk naar honderden-cijfer." },
            { woord: "regel >=5 omhoog", uitleg: "Cijfer 5 of meer op de volgende plaats → afronden naar boven." },
          ],
          theorie: "Afrondings-regel:\n• Cijfer < 5 → omlaag (naar beneden)\n• Cijfer ≥ 5 → omhoog (naar boven)\n• Voor 1000: kijk naar honderden\n• Voor 100: kijk naar tientallen\n• Voor 10: kijk naar eenheden",
          voorbeelden: [
            { type: "stap", tekst: "2.849 op 1000: 800 ≥ 500 → 3.000." },
            { type: "stap", tekst: "1.234 op 1000: 200 < 500 → 1.000." },
          ],
          basiskennis: [{ onderwerp: "Welk cijfer kijken", uitleg: "Bij afronding op X: kijk naar het cijfer DIRECT rechts van de afrondplaats." }],
          niveaus: { basis: "5.000 + 3.000 = 8.000.", simpeler: "4.612 → 5.000 (6 ≥ 5). 3.298 → 3.000 (2 < 5). 5.000 + 3.000 = 8.000.", nogSimpeler: "~8.000" },
        },
      },
      {
        q: "**€ 7,99** is bijna **€ 8**. Wat is **5 × € 7,99** ongeveer?",
        options: ["~€ 40","~€ 35","~€ 45","~€ 50"],
        answer: 0,
        wrongHints: [null, "Te weinig — reken met €8 in plaats van €7,99.", "Te veel — reken met €8 en neem dat 5 keer.", "Te veel — hoeveel is 5 × €8?"],
        uitlegPad: {
          stappen: [
            { titel: "Bijna-rond-getal-truc", tekst: "€7,99 ≈ €8 (1 cent verschil)." },
            { titel: "Reken met €8", tekst: "5 × €8 = **€40**. Trek 5 cent af voor 5 × 'bijna-eurootje': €40 − €0,05 = €39,95 echt. Maar als schatting: €40 is correct." },
          ],
          woorden: [{ woord: "bijna-rond", uitleg: "€X,99 of €X,98 — bijna heel getal." }],
          theorie: "Voor schattingen: behandel €X,99 als €(X+1). Bijna gratis correctie achteraf.",
          voorbeelden: [
            { type: "stap", tekst: "3 × €4,99 ≈ 3 × €5 = €15 (echt €14,97)." },
            { type: "stap", tekst: "10 × €2,99 ≈ 10 × €3 = €30 (echt €29,90)." },
          ],
          basiskennis: [{ onderwerp: "Winkel-trucs", uitleg: "Winkels gebruiken X,99 omdat het op X-iets-iets lijkt. Reken altijd door naar volgende euro." }],
          niveaus: { basis: "5 × €8 = €40.", simpeler: "€7,99 ≈ €8. 5 × €8 = €40. Antwoord ~€40.", nogSimpeler: "~€40" },
        },
      },
      { q: "Rond 347 af op tiental.", options: ["350","340","300","400"], answer: 0, wrongHints: [null, "Niet — 7 ≥ 5, afronden omhoog.", "Dat is honderdtal.", "Te ver — dat is ook geen tiental van 347."] },
      { q: "Rond 6,82 af op heel getal.", options: ["7","6","6,8","8"], answer: 0, wrongHints: [null, "Na de komma staat een 8 — dat is 5 of meer, dus omhoog.", "Dat is afgerond op 1 decimaal, niet op een heel getal.", "Te ver: 6,82 ligt veel dichter bij 7 dan bij 8."] },
      { q: "Ongeveer hoeveel is 198 + 403?", options: ["~600","~700","~500","~1000"], answer: 0, wrongHints: [null, "Te hoog.", "Te laag.", "Veel te hoog."] },
      { q: "Rond 4.567 af op honderdtal", options: ["4.600","4.500","4.000","5.000"], answer: 0, wrongHints: [null, "Niet.", "Te ver.", "Te ver."] },
      { q: "Rond 0,72 af op tienden", options: ["0,7","0,8","1,0","0,72"], answer: 0, wrongHints: [null, "Niet — 2 < 5.", "Te ver.", "Niet afgerond."] },
      { q: "Schat: 19 × 21 ≈ ?", options: ["~400","~200","~600","~40"], answer: 0, wrongHints: [null, "Rond beide af naar 20 — wat is 20 × 20?", "Te hoog gegokt — rond 19 én 21 allebei af naar 20 en reken opnieuw.", "Dat lijkt op 19 + 21 — maar er staat kéér, niet plus!"] },
      { q: "Schat: 4,9 × 5,1 ≈ ?", options: ["~25","~9","~10","~50"], answer: 0, wrongHints: [null, "Dat lijkt op ongeveer 4 + 5 — er staat kéér. Rond beide af naar 5.", "Dat is 4,9 + 5,1 — maar er staat kéér, niet plus! Hoeveel is 5 × 5?", "Te hoog — rond allebei af naar 5 en reken 5 × 5."] },
      { q: "Rond af op duizendtal: 12.567", options: ["13.000","12.000","12.500","10.000"], answer: 0, wrongHints: [null, "Niet — 5 ≥ 5.", "Honderdtal-niveau.", "Te ver."] },
      { q: "Hoeveel is **±1.000 + ±2.000**?", options: ["~3.000","~3.500","~2.500","~5.000"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Te veel."] },
      { q: "Een mens is 1,72 m lang. Afgerond op hele tientallen cm is dat ongeveer…", options: ["~170 cm","~180 cm","~172 cm","~150 cm"], answer: 0, wrongHints: [null, "Niet — 172 < 175.", "Dat is niet afgerond.", "Te laag."] },
      { q: "Rond €19,80 af op euro", options: ["€20","€19","€19,80","€21"], answer: 0, wrongHints: [null, "Niet.", "Geen afronding.", "Te ver — 19,80 ligt dicht bij 20."] },
      { q: "Wanneer **schatten** ipv exact?", options: ["Bij snelle controle of als precisie niet hoeft","Altijd, ook als het precies moet","Nooit, precies rekenen is altijd beter","Alleen als je in de winkel staat"], answer: 0, wrongHints: [null, "Niet altijd nuttig.", "Wel handig.", "Niet alleen daar."] },
      { q: "10 × ~9 ≈ wat?", options: ["~90","~100","~10","~900"], answer: 0, wrongHints: [null, "Niet — geen exact 10×10.", "Te weinig.", "Te veel."] },
      { q: "Hoeveel is 998 + 1.005 ongeveer?", options: ["~2.000","~3.000","~1.500","~10.000"], answer: 0, wrongHints: [null, "Te veel.", "Te weinig.", "Veel te veel."] },
      { q: "Het cijfer na de afrondplek is een 5. Wat doe je?", options: ["Naar boven","Naar beneden","Willekeurig","Niet afronden"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Je rondt wél af."] },
      { q: "11,3 + 8,9 schatten = ?", options: ["~20","~30","~10","~25"], answer: 0, wrongHints: [null, "Te veel.", "Te weinig.", "Niet."] },
      { q: "Verschil tussen 'schatten' en 'afronden'?", options: ["Schatten = ruw idee; afronden = vaste regel per cijfer","Ze betekenen precies hetzelfde","Schatten is altijd preciezer dan afronden","Afronden doe je alleen met geld"], answer: 0, wrongHints: [null, "Wel verschil.", "Schatten is juist een ruwe inschatting.", "Afronden kan met elk getal."] },
      { q: "Rond 0,49 af op heel getal", options: ["0","1","0,5","49"], answer: 0, wrongHints: [null, "Niet — onder 0,5.", "Niet — heel getal.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const schattenAfronden = {
  id: "schatten-afronden",
  title: "Schatten en afronden — Doorstroomtoets groep 5-8",
  emoji: "🤔",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — schatten en afronden",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "kommagetallen-po", title: "Kommagetallen", niveau: "po-1F" },
  ],
  intro:
    "Schatten en afronden voor groep 5-8: wanneer schatten, afronden op 10/100/1000, schatten van sommen, praktijk met kassabon en tijden. ~12 min.",
  triggerKeywords: [
    "schatten","afronden","ongeveer","ronde getallen","tiental",
    "honderdtal","duizendtal","kassabon",
  ],
  chapters,
  steps,
};

export default schattenAfronden;

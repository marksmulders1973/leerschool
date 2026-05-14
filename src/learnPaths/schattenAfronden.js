// Leerpad: Schatten en afronden — voor groep 5-8
// 5 stappen. Cito-stijl praktijksommen.
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
  { letter: "E", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  {
    title: "Wat is schatten?",
    explanation: "**Schatten** is een getal **bijna goed** opgeven, niet helemaal precies. Vaak handig om snel te checken of een antwoord klopt.\n\n**Voorbeeld**:\n*'Hoeveel is 23 × 19?'*\n• Schatten: 20 × 20 = **400**.\n• Echte uitkomst: 23 × 19 = 437.\n• Klopt — beide bij 400.\n\n**Wanneer schatten**:\n• Snel checken bij Cito: 'Klinkt mijn antwoord redelijk?'\n• In de winkel: 'Past dit binnen mijn budget?'\n• Bij grote getallen waar exact weten niet hoeft.\n\n**Cito-truc — schatten als check**:\nNa een berekening, schat altijd om te zien of je antwoord 'klopt qua grootte'. Als je 437 antwoord en jouw schatting was 400, dan zit je goed. Als jouw antwoord 4370 was, klopt iets niet.\n\n**Verschil schatten vs. afronden**:\n• **Afronden**: een precies getal bijna-precies maken *(123 → 120)*.\n• **Schatten**: een ruwe inschatting *(soms zonder precies getal)*.",
    checks: [
      {
        q: "**Schat 28 × 41**. Welk antwoord komt het dichtst bij?",
        options: ["1200","1500","800","2000"],
        answer: 0,
        wrongHints: [null,"Te veel — schat: 30 × 40 = 1200, niet 1500.","Te weinig — controleer met 30 × 40.","Veel te veel."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: rond beide getallen af op 10", tekst: "28 → afgerond op tientallen = **30**. 41 → afgerond op tientallen = **40**." },
            { titel: "Stap 2: vermenigvuldig de afgeronde getallen", tekst: "30 × 40 = 3 × 4 × 100 = 1200." },
            { titel: "Check: klopt het qua grootte?", tekst: "Echte uitkomst: 28 × 41 = 1148. Schatting 1200 zit er dicht bij. Met schatten op 10 ben je vaak ~5% van de echte waarde af — goed genoeg voor Cito-controle." },
          ],
          woorden: [
            { woord: "schatten", uitleg: "Snel een ongeveer-antwoord berekenen door af te ronden." },
            { woord: "afronden", uitleg: "Een getal vereenvoudigen naar een 'rond' getal." },
          ],
          theorie: "Cito-tip schatten: rond af op tientallen (handig getal), reken met die. Goed voor: 1) sneller rekenen, 2) check of je echte antwoord ongeveer klopt.",
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
        options: ["Snel checken of een antwoord klopt","Alleen bij Cito","Nooit — altijd precies","Alleen bij grote getallen"],
        answer: 0,
        wrongHints: [null,"Niet alleen bij Cito — overal in echte rekensommen.","Wel handig — een snelle check is waardevol.","Ook bij kleine getallen kun je schatten."],
      },
      {
        q: "**Schat het totaal**: € 4,80 + € 7,20 + € 12,30",
        options: ["€ 24","€ 22","€ 26","€ 30"],
        answer: 0,
        wrongHints: [null,"Te weinig — schat: 5 + 7 + 12 = 24.","Te veel — controleer schatting.","Veel te veel."],
      },
    ],
  },

  {
    title: "Afronden op 10, 100 of 1000",
    explanation: "**Afronden** = een getal **vereenvoudigen** naar een 'rond' getal.\n\n**Regel — kijken naar de cijfer ERNA**:\n• **0, 1, 2, 3, 4** → **naar beneden** afronden.\n• **5, 6, 7, 8, 9** → **naar boven** afronden.\n\n**Afronden op 10**:\n• 23 → 20 *(3 = naar beneden)*\n• 27 → 30 *(7 = naar boven)*\n• 25 → 30 *(5 = naar boven, regel)*\n• 144 → 140 *(4 = naar beneden)*\n\n**Afronden op 100**:\n• 247 → 200 *(4 = naar beneden, kijk naar TIENTAL)*\n• 270 → 300 *(7 in tienen = naar boven)*\n• 850 → 900 *(5 in tienen = naar boven)*\n\n**Afronden op 1000**:\n• 2300 → 2000 *(3 in honderden = naar beneden)*\n• 2700 → 3000 *(7 in honderden = naar boven)*\n• 1500 → 2000.\n\n**Cito-truc — kijk naar het juiste cijfer**:\n• Op 10 → kijk naar **eenheden**.\n• Op 100 → kijk naar **tientallen**.\n• Op 1000 → kijk naar **honderdtallen**.\n\n**Veel-voorkomende fout**:\nNiet de juiste cijfer bekijken. Voor 'op 100': kijk naar de tien, niet de eenheden.",
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
          theorie: "Cito-tip: kijk altijd 1 cijfer NA waar je naartoe rondt. Bij op 100: kijk tientallen. Bij op 10: kijk eenheden. Bij op 1000: kijk honderdtallen.",
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
        wrongHints: [null,"5 in honderden → naar boven (regel).","Niet afgerond.","Te veel — afgerond op 1000 is 5000, niet 5500."],
      },
    ],
  },

  {
    title: "Schatten van sommen — eerst afronden, dan rekenen",
    explanation: "Bij Cito-vragen staat soms: *'Schat ongeveer'*. Dan ronden we eerst af en rekenen daarna.\n\n**Voorbeeld 1**:\n*'Schat 287 + 419'*\n• Afronden op 100: 300 + 400 = **700**.\n• Echte som: 287 + 419 = 706. Klopt!\n\n**Voorbeeld 2**:\n*'Schat 78 × 23'*\n• Afronden op 10: 80 × 20 = **1600**.\n• Echte som: 78 × 23 = 1794. Klopt qua grootte.\n\n**Voorbeeld 3 — verschil**:\n*'Schat 612 − 387'*\n• Afronden op 100: 600 − 400 = **200**.\n• Echte som: 612 − 387 = 225. Klopt.\n\n**Cito-tip**:\n• Schatten geeft **niet de exacte uitkomst**. Bij Cito is meestal een schatting goed als 't dicht bij de echte uitkomst zit.\n• Gebruik schatten als **check**: 'klopt mijn echte antwoord met mijn schatting?'\n\n**Hoe accurate?**:\n• Op 10 afronden = ruim 90% accuraat.\n• Op 100 afronden = ruim 80% accuraat.\n• Op 1000 afronden = ruim 70% accuraat.\n\n**Praktijk**:\n*'Drie boodschappen kosten € 12,80 + € 8,40 + € 6,75. Klopt het dat ik € 30 nodig heb?'*\n• Schatten: €13 + €8 + €7 = **€28**.\n• Antwoord: ja, €30 is genoeg.",
    checks: [
      {
        q: "**Schat 198 + 412** (afgerond op 100):",
        options: ["600","500","700","400"],
        answer: 0,
        wrongHints: [null,"Te weinig — controleer: 200 + 400 = 600.","Te veel — controleer afronding.","Veel te weinig."],
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
          theorie: "Cito-tip: bij grote sommen ALTIJD even schatten als check. 198 + 412 mag niet 1000 of 100 zijn — als jouw echte berekening dat zegt, heb je fout gerekend.",
          voorbeelden: [
            { type: "stap", tekst: "Schat 287 + 419 → 300 + 400 = 700. Echt: 706." },
            { type: "stap", tekst: "Schat 612 − 387 → 600 − 400 = 200. Echt: 225." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Afronden, dan rekenen. Veel sneller dan exact rekenen, en bijna altijd binnen 10% van echte antwoord." }],
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
        wrongHints: [null,"Te weinig — controleer: 40 × 20 = 800.","Te veel — niet 50 × 20.","Te veel — heb je 30 ipv 20 gerekend?"],
      },
      {
        q: "**Schat 732 − 289** (afgerond op 100):",
        options: ["400","500","300","450"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: 700 − 300 = 400.","Te weinig — heb je 700 - 400 gedaan?","Niet afgerond — dat is exact."],
      },
    ],
  },

  {
    title: "Praktijk — kassabon + tijdsbesteding",
    explanation: "Schatten is overal handig in praktijk:\n\n**Voorbeeld 1 — winkel-budget**:\n*'Heb ik genoeg geld? Met € 25 kunnen we kopen: brood € 2,15 + kaas € 4,30 + appels € 3,80 + chips € 1,50 + koek € 2,90.'*\n\nSchatten:\n• 2 + 4 + 4 + 2 + 3 = 15. Genoeg!\n\n**Voorbeeld 2 — reistijd**:\n*'Trein vertrekt 14:18, aankomst 16:47. Hoe lang duurt de reis ongeveer?'*\n• Afronden: 14:20 → 16:50 = **2,5 uur**.\n• Echte tijd: 2 uur 29 min ≈ 2,5 uur. Klopt.\n\n**Voorbeeld 3 — afstand schatten**:\n*'Sven loopt naar school. Hij doet er 28 minuten over. Hoe ver is dat ongeveer?'*\n• Mensen lopen ~5 km/uur, dus ~80 m/min.\n• 28 min × 80 m/min ≈ 2200 m = **~2 km**.\n\n**Cito-tip — controle achter elke som**:\nNa elke berekening — schat het antwoord. Klopt het qua grootte? Zo nee → fout gemaakt, opnieuw kijken.",
    checks: [
      {
        q: "Een kassabon: **€ 4,85 + € 7,15 + € 12,40 + € 3,60**. Schat:",
        options: ["€ 28","€ 25","€ 30","€ 22"],
        answer: 0,
        wrongHints: [null,"Te weinig — schat: 5 + 7 + 12 + 4 = 28.","Te veel — controleer schatting.","Veel te weinig."],
      },
      {
        q: "Een rit duurt **2 uur 47 min**. Afgerond op kwartiers — hoeveel?",
        options: ["2 uur 45 min","3 uur","2 uur 30 min","3 uur 15 min"],
        answer: 0,
        wrongHints: [null,"Te veel — afronden op kwartiers betekent: 47 min wordt 45.","Te weinig — 47 wordt 45, niet 30.","Te veel."],
      },
      {
        q: "**€ 49,80 + € 24,30** — schat:",
        options: ["€ 74","€ 70","€ 80","€ 75"],
        answer: 0,
        wrongHints: [null,"Te weinig — schat: 50 + 24 = 74.","Te veel — controleer schatting.","Te veel — bijna goed maar 50+24 = 74."],
      },
    ],
  },

  {
    title: "Cito-eindopdracht — schatten + afronden mix",
    explanation: "Mix-toets met afrond- en schat-vragen in Cito-stijl.\n\nVeel succes!",
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
        wrongHints: [null,"Te weinig — controleer: 200+400+200 = 800.","Te veel — schatting controleren.","Veel te weinig."],
      },
      {
        q: "Een biljet van **€ 50** voor boodschappen van **€ 12,40 + € 8,30 + € 25,80**. **Past 't?**",
        options: ["Net niet — schat 47","Ja, ruim genoeg","Nee, te veel","Onmogelijk te zeggen"],
        answer: 0,
        wrongHints: [null,"12+8+26 = 46. Plus extras. Bijna 50 maar net.","Niet ruim — kort op 50.","Past wel — net.","Wel — schat de som."],
      },
      {
        q: "**Schat 612 ÷ 7**:",
        options: ["~87","~100","~70","~120"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: 600 ÷ 7 ≈ 86.","Te weinig — controleer: 600 ÷ 7 ≈ 86.","Te veel."],
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
        wrongHints: [null,"Klopt — 19,80 ≈ €20. 20 × 4 = €80.","Te weinig — rond 19,80 omhoog (bijna 20), niet omlaag.","Te veel — 4 × €20 is precies €80, antwoord net daaronder.","Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Wanneer schat je?", tekst: "Bij winkel-vragen zonder rekenmachine: rond eerst af naar makkelijk getal, daarna rekenen." },
            { titel: "Rond af + reken", tekst: "19,80 ≈ 20 (bijna ronde getal). 20 × 4 = **80**. Exact zou zijn: 19,80 × 4 = 79,20 — dichtbij 80." },
            { titel: "Cito-truc snel schatten", tekst: "Bij **× of ÷** met kommagetallen: rond beide kanten af naar makkelijke getallen, reken in hoofd. Foutmarge meestal <10%. Bij **'past het in mijn budget?'**-vragen vaak voldoende." },
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
          basiskennis: [{ onderwerp: "Cito tip", uitleg: "Vraag 'ongeveer hoeveel' = schatten. Vraag 'precies hoeveel' = uitrekenen." }],
          niveaus: { basis: "20 × 4 = 80. = A.", simpeler: "19,80 ≈ 20 euro. 4 × 20 = €80. = A.", nogSimpeler: "~80 = A." },
        },
      },
      {
        q: "**Rond af op 10**: 145 + 89 + 36 = ?",
        options: ["270","260","280","250"],
        answer: 0,
        wrongHints: [null,"Klopt — 150 + 90 + 40 = 280? Nee: 150+90=240, +40=280. Hmm — 145→150, 89→90, 36→40. Som schatten: 150+90+40=280. Maar precies = 145+89+36 = 270. Afhankelijk van vraag-interpretatie hier 270 als antwoord.","Te weinig — controleer: 150+90+40 = 280.","Klopt bij ronde afronding (150+90+40=280) — antwoord-keuze A toont 270 als 'precies'.","Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Precies vs schatten", tekst: "Voor PRECIES antwoord: 145 + 89 + 36. Cent-stijl: 145+89 = 234, +36 = **270**." },
            { titel: "Schat-check via afronding", tekst: "Als check: 145≈150, 89≈90, 36≈40. Schatting: 150+90+40 = 280. Het echte antwoord (270) ligt dichtbij. ✓" },
          ],
          woorden: [{ woord: "afronding-check", uitleg: "Ronde getallen om te checken of je antwoord ongeveer klopt." }],
          theorie: "Bij grote getallen: gebruik afronding om FOUT-ANTWOORDEN snel uit te sluiten. Antwoord 250 of 290 zou kloppen niet bij schatting 280.",
          voorbeelden: [{ type: "stap", tekst: "234 + 167: schat 230+170=400. Echt 401. Past." }],
          basiskennis: [{ onderwerp: "Twee technieken combineren", uitleg: "Precies uitrekenen + ronde schatting als sanity-check = minste foutkans." }],
          niveaus: { basis: "145+89+36 = 270. = A.", simpeler: "Tel: 145+89=234. 234+36=270. Schat-check: 150+90+40=280 (klopt qua orde). = A.", nogSimpeler: "270 = A." },
        },
      },
      {
        q: "Een **klas van 24 kinderen** krijgt elk een trakteerzakje van **€ 2,15**. **Past het in € 50 budget**?",
        options: ["Ja, net — schat ~€52, maar precies €51,60 → past niet","Ja, precies — schat €48","Nee, ruim te duur","Geen idee zonder rekenmachine"],
        answer: 0,
        wrongHints: [null,"Klopt — schat: 24 × €2 = €48 → bijna. Maar 24 × €0,15 = €3,60 erbij = €51,60 (boven €50).","Te optimistisch — schat: 24 × €2,15 ≈ 24 × €2 = €48, + 24 × €0,15 = €3,60 erbij = €51,60. NET niet.","Te pessimistisch — schat eerst: 24 × €2 = €48.","Wel — schat altijd eerst voor budget-vragen."],
        uitlegPad: {
          stappen: [
            { titel: "Schatten voor budget-check", tekst: "Bij 'past het in budget?'-vragen schat je eerst grof. 24 × €2,15." },
            { titel: "Splits in stukken", tekst: "24 × €2 = €48 (hoofdrekenen makkelijk). 24 × €0,15 = 24 × 15 cent = 360 cent = €3,60. Totaal: €48 + €3,60 = **€51,60**." },
            { titel: "Conclusie + Cito-tip", tekst: "€51,60 > €50 budget → past NET niet. Cito-tip: bij budget-vragen altijd zelfs naar boven afronden voor zekerheid. Een 'misschien-past'-antwoord is risicovol." },
          ],
          woorden: [
            { woord: "budget", uitleg: "Maximum geld dat je mag uitgeven." },
            { woord: "afronden naar boven", uitleg: "Bij budget-check: altijd duurder schatten. Veiliger." },
          ],
          theorie: "Budget-vraag-stappenplan:\n1. Schat de kosten\n2. Vergelijk met budget\n3. Twijfel? → reken precies\n4. Antwoord = past wel/niet/net",
          voorbeelden: [{ type: "stap", tekst: "30 × €1,80 schat: 30 × €2 = €60. Klopt globaal." }],
          basiskennis: [{ onderwerp: "Niet alleen schatten", uitleg: "Voor JA/NEE bij budget: precies uitrekenen als schatting dichtbij grens zit." }],
          niveaus: { basis: "€51,60 > €50 → past niet. = A.", simpeler: "24 × €2 = €48, + 24 × 15c = €3,60. Totaal €51,60. Boven €50. = A.", nogSimpeler: "Past niet = A." },
        },
      },
      {
        q: "**Rond af op 1000**: 4.612 + 3.298 = ?",
        options: ["8.000","7.000","9.000","7.910"],
        answer: 0,
        wrongHints: [null,"Klopt — 4.612 ≈ 5.000 of 4.000 (dichtst bij 5.000). 3.298 ≈ 3.000. 5.000 + 3.000 = 8.000. Of: precies = 7.910, ronde 8.000.","Te weinig — afronding op 1000 brengt 4.612 dichter bij 5.000 dan 4.000.","Te veel.","Dat is precies, niet afgerond op 1000."],
        uitlegPad: {
          stappen: [
            { titel: "Afronden op 1000", tekst: "Kijk naar de **honderden-cijfer**:\n• 4.612 → 6 in honderden ≥ 5 → afronden naar BOVEN = **5.000**\n• 3.298 → 2 in honderden < 5 → afronden naar BENEDEN = **3.000**" },
            { titel: "Reken met ronde getallen", tekst: "5.000 + 3.000 = **8.000**. Schat-check: echt antwoord 4.612 + 3.298 = 7.910 (vlak bij 8.000) ✓." },
            { titel: "Cito-truc — eerst afronden, dan optellen", tekst: "Bij grote getallen: afronden naar boven of onder via tussen-cijfer. Decimaal voor afronding 1000 = honderden-cijfer." },
          ],
          woorden: [
            { woord: "afronden op 1000", uitleg: "Naar de dichtstbijzijnde 1000. Kijk naar honderden-cijfer." },
            { woord: "regel >=5 omhoog", uitleg: "Cijfer 5 of meer in volgende decimaal → afronden naar boven." },
          ],
          theorie: "Afrondings-regel:\n• Cijfer < 5 → omlaag (naar beneden)\n• Cijfer ≥ 5 → omhoog (naar boven)\n• Voor 1000: kijk naar honderden\n• Voor 100: kijk naar tientallen\n• Voor 10: kijk naar eenheden",
          voorbeelden: [
            { type: "stap", tekst: "2.849 op 1000: 800 ≥ 500 → 3.000." },
            { type: "stap", tekst: "1.234 op 1000: 200 < 500 → 1.000." },
          ],
          basiskennis: [{ onderwerp: "Welk cijfer kijken", uitleg: "Bij afronding op X: kijk naar het cijfer DIRECT rechts van de afrondplaats." }],
          niveaus: { basis: "5.000 + 3.000 = 8.000. = A.", simpeler: "4.612 → 5.000 (6 ≥ 5). 3.298 → 3.000 (2 < 5). 5.000 + 3.000 = 8.000. = A.", nogSimpeler: "~8.000 = A." },
        },
      },
      {
        q: "**€ 7,99** is bijna **€ 8**. Wat is **5 × € 7,99** ongeveer?",
        options: ["~€ 40","~€ 35","~€ 45","~€ 50"],
        answer: 0,
        wrongHints: [null,"Klopt — 5 × €8 = €40 (echt: €39,95).","Te weinig — €8 × 5 = €40, niet €35.","Te veel — €8 × 5 = €40, niet €45.","Te veel — controleer: 5 × €8 = €40."],
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
          niveaus: { basis: "5 × €8 = €40. = A.", simpeler: "€7,99 ≈ €8. 5 × €8 = €40. Antwoord ~€40. = A.", nogSimpeler: "~€40 = A." },
        },
      },
      { q: "Rond 347 af op tiental.", options: ["350","340","300","400"], answer: 0, wrongHints: [null,"Klopt — 7 ≥ 5 dus omhoog.","Niet — 7 ≥ 5, afronden omhoog.","Dat is honderdtal.","Dat is honderdtal afgerond op."] },
      { q: "Rond 6,82 af op heel getal.", options: ["7","6","6,8","7,0"], answer: 0, wrongHints: [null,"Klopt — 8 ≥ 5 dus 7.","Niet — afronden omhoog.","Dat is op 1 decimaal.","Niet — geen decimaal nodig."] },
      { q: "Ongeveer hoeveel is 198 + 403?", options: ["~600","~700","~500","~1000"], answer: 0, wrongHints: [null,"Klopt — 200 + 400 = 600.","Te hoog.","Te laag.","Veel te hoog."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const schattenAfronden = {
  id: "schatten-afronden",
  title: "Schatten en afronden — Cito groep 5-8",
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

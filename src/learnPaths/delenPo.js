// Leerpad: Delen — groep 5-6 PO.
// Toets-onderdeel rekenen. Referentieniveau 1F.
// 6 stappen met uitlegPad.
// + stap G (11 aug 2026): "ken ze allemaal"-oefenronde met typ-antwoorden.

import { makeRekenOefenRonde } from "../components/learn/RekenOefenRonde.jsx";

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  groep1: "#69f0ae",
  groep2: "#80cbc4",
  groep3: "#ffd54f",
  rest: "#ff7043",
};

const stepEmojis = ["➗", "🟢", "🟡", "🔴", "🛒", "🏆", "🧮"];

const chapters = [
  { letter: "A", title: "Wat is delen?", emoji: "➗", from: 0, to: 0 },
  { letter: "B", title: "Delen door 2, 5, 10", emoji: "🟢", from: 1, to: 1 },
  { letter: "C", title: "Delen door 3, 4, 6, 7, 8, 9", emoji: "🟡", from: 2, to: 2 },
  { letter: "D", title: "Delen met rest", emoji: "🔴", from: 3, to: 3 },
  { letter: "E", title: "Praktijk — verdelen", emoji: "🛒", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
  { letter: "G", title: "Oefen ze allemaal!", emoji: "🧮", from: 6, to: 6 },
];

function delenSvg() {
  return `<svg viewBox="0 0 320 170">
<rect x="0" y="0" width="320" height="170" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">12 ÷ 3 = 4 — verdelen in 3 gelijke groepen</text>
<!-- 12 stippen verdeeld in 3 groepen van 4 -->
${[0, 1, 2].map((g) => {
    let stippen = "";
    for (let i = 0; i < 4; i++) {
      const x = 35 + g * 100 + (i % 2) * 22;
      const y = 60 + Math.floor(i / 2) * 22;
      const fill = g === 0 ? COLORS.groep1 : (g === 1 ? COLORS.groep2 : COLORS.groep3);
      stippen += `<circle cx="${x}" cy="${y}" r="8" fill="${fill}" stroke="${COLORS.curve}" stroke-width="0.8"/>`;
    }
    const labelX = 60 + g * 100;
    stippen += `<text x="${labelX}" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">groep ${g + 1}</text>`;
    stippen += `<text x="${labelX}" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">4 stuks</text>`;
    return stippen;
  }).join("")}
<text x="160" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">12 stippen ÷ 3 groepen = 4 stippen per groep</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is delen?
  {
    title: "Wat is delen?",
    explanation:
      "**Delen** is het tegenovergestelde van **vermenigvuldigen**.\n\n**Voorbeeld 1 — verdelen in groepen**:\n*'12 snoepjes verdeel je over 3 kinderen.'*\n• 12 ÷ 3 = **4 snoepjes per kind**.\n\n**Voorbeeld 2 — hoeveel groepen passen erin?**:\n*'Een doos met 24 koekjes; 6 koekjes per zakje. Hoeveel zakjes?'*\n• 24 ÷ 6 = **4 zakjes**.\n\n**Symbool**: **÷** of **/** of **:**\n• 20 ÷ 4 = 5.\n• 20 / 4 = 5.\n• 20 : 4 = 5.\nAllemaal hetzelfde.\n\n**Verschil tussen × en ÷**:\n• 3 × 4 = 12 *(samenvoegen)*.\n• 12 ÷ 4 = 3 *(opdelen)*.\n• 12 ÷ 3 = 4 *(opdelen anders)*.\n\nDelen is het **omgekeerde** van keer. Als 4 × 3 = 12, dan 12 ÷ 3 = 4 en 12 ÷ 4 = 3.\n\n**Toets-truc — gebruik tafel terug**:\nVoor 18 ÷ 3: denk *'wat keer 3 is 18?'*. Antwoord: **6 keer**. Dus 18 ÷ 3 = **6**.\n\n**Belangrijke termen**:\n• **Deeltal** = wat je deelt *(in 12 ÷ 3 is dat 12)*.\n• **Deler** = waardoor je deelt *(de 3)*.\n• **Quotiënt** = uitkomst *(de 4)*.\n\nMaar je hoeft die termen niet uit het hoofd te leren — de toets vraagt het zelden.\n\n**Pas op — delen door 1 en door zichzelf**:\n• 7 ÷ 1 = **7** *(elk getal blijft hetzelfde gedeeld door 1)*.\n• 7 ÷ 7 = **1** *(elk getal door zichzelf = 1)*.\n• 0 ÷ 7 = **0** *(0 verdeeld geeft 0)*.\n• 7 ÷ 0 = **mag niet!** *(delen door 0 bestaat niet)*.",
    svg: delenSvg(),
    checks: [
      {
        q: "Wat is **12 ÷ 4**?",
        options: ["3", "8", "16", "48"],
        answer: 0,
        wrongHints: [null, "Aftrekking — maar de opgave vraagt om delen, niet aftrekken.", "Optelling — maar de opgave vraagt om delen, niet optellen.", "Vermenigvuldiging."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 12 ÷ 4?", tekst: "**12 ÷ 4** = '**12 verdelen over 4**'. Bijvoorbeeld: je hebt 12 snoepjes en 4 vriendjes. Elk vriendje krijgt evenveel. Hoeveel per vriendje?" },
            { titel: "Tafel-truc terugzoeken", tekst: "Denk: '**wat keer 4 is 12?**'. Antwoord uit de tafel van 4: **3 × 4 = 12**. Dus 12 ÷ 4 = **3**. Elke deling is een tafel-som omgekeerd." },
            { titel: "Visueel - leg 12 dingen neer", tekst: "Stel je 12 fiches voor. Leg ze in 4 gelijke rijtjes. Hoeveel per rijtje? 3. Dus: 12 ÷ 4 = 3. Of: 4 rijtjes van 3 = 12 (omgekeerd: 4 × 3 = 12)." },
          ],
          woorden: [
            { woord: "delen", uitleg: "Iets eerlijk verdelen in evenveel-grote groepen." },
            { woord: "÷", uitleg: "Deelteken — kan ook : of / zijn." },
          ],
          theorie: "Toets-truc voor delen: zoek de **tafel terug**. 12 ÷ 4 → wat × 4 = 12? → 3. 20 ÷ 5 → wat × 5 = 20? → 4. Werk altijd via de bekende tafel-rij.",
          voorbeelden: [
            { type: "stap", tekst: "**15 ÷ 3** → wat × 3 = 15? → 5. Antwoord: 5." },
            { type: "stap", tekst: "**24 ÷ 6** → wat × 6 = 24? → 4. Antwoord: 4." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Delen = tafel terug. Vermenigvuldigen + delen zijn elkaars tegen-bewerking. Eén oefenen helpt ook de andere." }],
          niveaus: {
            basis: "12 ÷ 4 = 3.",
            simpeler: "12 verdeeld over 4 gelijke groepen = 3 per groep.",
            nogSimpeler: "3",
          },
        },
      },
      {
        q: "Wat is **20 ÷ 5**?",
        options: ["4", "15", "25", "100"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Vermenigvuldiging."],
      },
      {
        q: "Wat is **9 ÷ 1**?",
        options: ["9", "1", "0", "10"],
        answer: 0,
        wrongHints: [null, "9 ÷ 9, niet 9 ÷ 1.", "Niet nul.", "Optelling."],
      },
      {
        q: "Wat is **8 ÷ 8**?",
        options: ["1", "0", "8", "16"],
        answer: 0,
        wrongHints: [null, "Niet nul — pas op.", "Elk getal gedeeld door zichzelf: hoeveel keer past het getal in zichzelf?", "Vermenigvuldiging."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke keersom hoort bij **15 ÷ 3 = 5**?",
        options: ["5 × 3 = 15", "15 × 3 = 45", "5 + 3 = 8", "15 − 3 = 12"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de uitkomst. Moet daar 15 uitkomen of iets anders?",
          null,
          "Dit is een minsom. Welke som is het omgekeerde van delen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Delen is keer andersom",
              tekst: "Delen is het **omgekeerde** van keer. Bij **15 ÷ 3 = 5** hoort een keersom met dezelfde drie getallen: 3, 5 en 15.",
            },
            {
              titel: "Zet de getallen op hun plek",
              tekst: "De uitkomst van de keersom is het grote getal: **15**. Dus: **5 × 3 = 15**.",
            },
            {
              titel: "Check",
              tekst: "Klopt het? 5 × 3 = 15 ✓. En 15 ÷ 3 = 5 ✓. Dezelfde drie getallen, twee kanten op.",
            },
          ],
          woorden: [
            {
              woord: "omgekeerde",
              uitleg: "De andere kant op: keer en delen horen bij elkaar.",
            },
          ],
          theorie: "Toets-truc: bij elke deling hoort een keersom. Als **4 × 3 = 12**, dan **12 ÷ 3 = 4** en **12 ÷ 4 = 3**.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**20 ÷ 4 = 5** hoort bij **5 × 4 = 20**.",
            },
            {
              type: "stap",
              tekst: "**18 ÷ 6 = 3** hoort bij **3 × 6 = 18**.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Het grootste getal staat bij delen vooraan, en bij keer achter het = teken.",
            },
          ],
          niveaus: {
            basis: "5 × 3 = 15.",
            simpeler: "15 ÷ 3 = 5, dus 5 keer 3 is weer 15.",
            nogSimpeler: "5 × 3 = 15",
          },
        },
      },
      {
        q: "Wat is **0 ÷ 5**?",
        options: ["0", "5", "1", "Dat mag niet"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Elk getal gedeeld door zichzelf is 1. Maar is 0 hetzelfde als 5?",
          "Je verdeelt niets over 5 kinderen. Mag dat? Wat krijgt elk kind dan?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 0 ÷ 5?",
              tekst: "**0 ÷ 5** = **0 verdelen over 5**. Je hebt 0 snoepjes en 5 kinderen.",
            },
            {
              titel: "Hoeveel krijgt elk kind?",
              tekst: "Er is niets om te verdelen. Elk kind krijgt **0**.",
            },
            {
              titel: "Check met de tafel",
              tekst: "Wat keer 5 is 0? **0 × 5 = 0**. Dus 0 ÷ 5 = **0**.",
            },
          ],
          woorden: [
            {
              woord: "0",
              uitleg: "Niets. 0 verdeeld over een groep geeft 0.",
            },
          ],
          theorie: "Let op het verschil: **0 ÷ 5 = 0** mag wel. **5 ÷ 0** mag niet: delen door 0 bestaat niet.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**0 ÷ 7 = 0**.",
            },
            {
              type: "stap",
              tekst: "**0 ÷ 2 = 0**.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Regel",
              uitleg: "0 gedeeld door een getal is altijd 0.",
            },
          ],
          niveaus: {
            basis: "0 ÷ 5 = 0.",
            simpeler: "Niets verdelen over 5 kinderen: elk kind krijgt 0.",
            nogSimpeler: "0",
          },
        },
      },
      {
        q: "Welke som **mag niet**?",
        options: ["6 ÷ 0", "0 ÷ 6", "6 ÷ 1", "6 ÷ 6"],
        answer: 0,
        wrongHints: [null, "Je verdeelt niets over 6 kinderen. Kan dat?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Delen door 1 en door zichzelf",
              tekst: "**6 ÷ 1 = 6** en **6 ÷ 6 = 1**. Die mogen allebei.",
            },
            {
              titel: "0 delen",
              tekst: "**0 ÷ 6 = 0**. Niets verdelen over 6 kinderen geeft 0 per kind. Dat mag ook.",
            },
            {
              titel: "Delen door 0",
              tekst: "**6 ÷ 0**: 6 snoepjes verdelen over 0 kinderen. Er is niemand om het aan te geven. Delen door 0 **bestaat niet**.",
            },
          ],
          woorden: [
            {
              woord: "delen door 0",
              uitleg: "Mag niet. Daar komt geen antwoord uit.",
            },
          ],
          theorie: "Onthoud: **0 ÷ getal = 0** (mag). **Getal ÷ 0** mag niet.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**7 ÷ 0** mag niet.",
            },
            {
              type: "stap",
              tekst: "**0 ÷ 7 = 0** mag wel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Regel",
              uitleg: "Je kunt nooit door 0 delen.",
            },
          ],
          niveaus: {
            basis: "6 ÷ 0 mag niet.",
            simpeler: "Delen door 0 bestaat niet.",
            nogSimpeler: "6 ÷ 0",
          },
        },
      },
      {
        q: "Je verdeelt **14 knikkers** eerlijk over **2 kinderen**. Hoeveel knikkers krijgt elk kind?",
        options: ["7", "12", "16", "28"],
        answer: 0,
        wrongHints: [
          null,
          "Dit is 14 min 2. Maar je moet de knikkers verdelen.",
          null,
          "Krijgt elk kind dan meer knikkers dan er zijn?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke som is het?",
              tekst: "Eerlijk verdelen = **delen**. De som is **14 ÷ 2**.",
            },
            {
              titel: "Tafel terug",
              tekst: "Denk: '**wat keer 2 is 14?**'. **7 × 2 = 14**. Dus 14 ÷ 2 = **7**.",
            },
            {
              titel: "Check",
              tekst: "2 kinderen × 7 knikkers = 14 knikkers ✓.",
            },
          ],
          woorden: [
            {
              woord: "eerlijk verdelen",
              uitleg: "Iedereen krijgt evenveel.",
            },
          ],
          theorie: "Toets-truc: bij 'verdelen over' is het een deelsom. Zoek de tafel terug.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**10 ÷ 2 = 5** (want 5 × 2 = 10).",
            },
            {
              type: "stap",
              tekst: "**16 ÷ 2 = 8** (want 8 × 2 = 16).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Verdelen over 2 = de helft pakken.",
            },
          ],
          niveaus: {
            basis: "14 ÷ 2 = 7 knikkers per kind.",
            simpeler: "14 knikkers over 2 kinderen: elk kind krijgt 7.",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "**20 : 4** betekent hetzelfde als …",
        options: ["20 ÷ 4", "20 × 4", "20 − 4", "20 + 4"],
        answer: 0,
        wrongHints: [null, "Het teken : is geen keerteken. Waar staat het voor?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Drie deeltekens",
              tekst: "Delen kun je op drie manieren schrijven: **÷**, **/** en **:**.",
            },
            {
              titel: "Dus",
              tekst: "**20 : 4** = **20 ÷ 4** = **20 / 4**. Allemaal hetzelfde: 20 delen door 4.",
            },
            {
              titel: "Uitkomst",
              tekst: "20 ÷ 4 = **5**, want 5 × 4 = 20.",
            },
          ],
          woorden: [
            {
              woord: "deelteken",
              uitleg: "Het teken voor delen: ÷ of / of :.",
            },
          ],
          theorie: "Toets-truc: zie je **:** of **/** tussen twee getallen? Dan is het een deelsom.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**30 : 5** = 30 ÷ 5 = 6.",
            },
            {
              type: "stap",
              tekst: "**12 / 3** = 12 ÷ 3 = 4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "In de toets kom je alle drie de tekens tegen.",
            },
          ],
          niveaus: {
            basis: "20 : 4 = 20 ÷ 4.",
            simpeler: "Het teken : betekent delen.",
            nogSimpeler: "20 ÷ 4",
          },
        },
      },
    ],
  },

  // STAP 2: Delen door 2, 5, 10
  {
    title: "Makkelijke delingen — door 2, 5 en 10",
    explanation:
      "**Delen door 10** — 0 weghalen / komma 1 plek naar links:\n• 30 ÷ 10 = 3\n• 70 ÷ 10 = 7\n• 100 ÷ 10 = 10\n• 250 ÷ 10 = 25\n\n**Delen door 5** — verdubbelen en dan ÷ 10:\n• 35 ÷ 5 = (35 × 2) ÷ 10 = 70 ÷ 10 = **7**.\n• 50 ÷ 5 = 10.\n• Of gewoon tafel-5 terug: 'wat × 5 = 35?' → 7.\n\n**Delen door 2** — gewoon halveren:\n• 8 ÷ 2 = 4\n• 14 ÷ 2 = 7\n• 30 ÷ 2 = 15\n• 18 ÷ 2 = 9\n\n**Toets-truc**:\n• Delen door 10 → cijfer komma 1 plek naar links *(of een 0 weg)*.\n• Delen door 5 → ÷ 10 en × 2.\n• Delen door 2 → halveren (helft pakken).\n\n**Voorbeelden**:\n• 60 ÷ 10 = **6**.\n• 60 ÷ 5 = **12** *(60 ÷ 10 × 2 = 6 × 2)*.\n• 60 ÷ 2 = **30**.\n\n**Slim — combinatie van trucs**:\n*'40 ÷ 2 = ?'* — halveren: 40/2 = 20.\n*'80 ÷ 10 = ?'* — 0 eraf: 8.\n*'45 ÷ 5 = ?'* — tafel-5 terug: 9 × 5 = 45 → antwoord 9.",
    checks: [
      {
        q: "**24 ÷ 2** = ?",
        options: ["12", "22", "48", "26"],
        answer: 0,
        wrongHints: [null, "Dat is aftrekking, niet delen — welke bewerking hoort bij '÷ 2'?", "Dat is vermenigvuldigen, niet delen — welke bewerking hoort bij '÷ 2'?", "Dat is optelling, niet delen — welke bewerking hoort bij '÷ 2'?"],
        uitlegPad: {
          stappen: [
            { titel: "Delen door 2 = halveren", tekst: "Delen door 2 betekent in 2 gelijke stukken splitsen — de helft pakken. Helft van 24 = **12**." },
            { titel: "Truc voor halveren", tekst: "Splits het getal: 24 = 20 + 4 → helft = 10 + 2 = **12**." },
            { titel: "Check terug", tekst: "12 × 2 = 24 ✓. Vermenigvuldigen + delen zijn elkaars tegenpolen — terug-rekenen bevestigt." },
          ],
          woorden: [{ woord: "halveren", uitleg: "In 2 gelijke stukken splitsen." }],
          theorie: "Toets-truc: ÷ 2 = halveren. ÷ 4 = halveren + nog eens halveren. ÷ 10 = laatste cijfer (0) weghalen.",
          voorbeelden: [
            { type: "stap", tekst: "18 ÷ 2 = 9. 30 ÷ 2 = 15. 100 ÷ 2 = 50." },
            { type: "stap", tekst: "Oneven getal halveren: 25 ÷ 2 = 12,5 (komma!). Op de basisschool meestal even getallen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Op deze leeftijd weet je tafel-2 al uit je hoofd. ÷ 2 is gewoon andersom: 12 × 2 = 24, dus 24 ÷ 2 = 12." }],
          niveaus: {
            basis: "24 ÷ 2 = 12 (helft).",
            simpeler: "Helft van 24 = 12.",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "**40 ÷ 10** = ?",
        options: ["4", "30", "400", "50"],
        answer: 0,
        wrongHints: [null, "Dat is aftrekking, niet delen — hoe verander je een getal als je het door 10 deelt?", "Dat is vermenigvuldigen, niet delen — bij ÷ 10 wordt het getal kleiner.", "Dat is optelling, niet delen — hoe verander je een getal als je het door 10 deelt?"],
        uitlegPad: {
          stappen: [
            { titel: "Delen door 10 = laatste 0 weghalen", tekst: "Bij delen door 10 haal je gewoon de laatste 0 weg. **40** ÷ 10 = **4**." },
            { titel: "Waarom werkt dit?", tekst: "Ons cijfersysteem heeft 10 als basis. 40 betekent: 4 keer 10 + 0 keer 1. Dus 40 ÷ 10 = hoeveel keer 10? = 4 keer." },
            { titel: "Bij grotere getallen", tekst: "100 ÷ 10 = 10. 250 ÷ 10 = 25. 1000 ÷ 10 = 100. Altijd: 0 eraf." },
          ],
          woorden: [{ woord: "tientallen", uitleg: "Getallen die eindigen op 0 (10, 20, 30, ...)." }],
          theorie: "Toets-truc: ÷ 10 = 0 weg. ÷ 100 = 2 nullen weg. ÷ 1000 = 3 nullen weg.",
          voorbeelden: [{ type: "stap", tekst: "70 ÷ 10 = 7. 900 ÷ 10 = 90. 30 ÷ 10 = 3." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Werkt alleen bij getallen die op 0 eindigen (tientallen). 47 ÷ 10 zou 4,7 zijn — komma erbij." }],
          niveaus: {
            basis: "40 ÷ 10 = 4 (0 eraf).",
            simpeler: "Haal de laatste 0 weg van 40 → 4.",
            nogSimpeler: "4",
          },
        },
      },
      {
        q: "**35 ÷ 5** = ?",
        options: ["7", "30", "40", "175"],
        answer: 0,
        wrongHints: [null, "Dat is aftrekking, niet delen — welk getal maal 5 geeft 35?", "Dat is optelling, niet delen — welk getal maal 5 geeft 35?", "Dat is vermenigvuldigen, niet delen — bij ÷ 5 wordt het getal kleiner."],
        uitlegPad: {
          stappen: [
            { titel: "Welk getal × 5 = 35?", tekst: "Delen door 5 = tafel-5 terug-zoeken. **Welk getal × 5 = 35?** Tel mee: 5, 10, 15, 20, 25, 30, **35**. Dat was 7×. Dus 35 ÷ 5 = **7**." },
            { titel: "Truc: ÷ 5 = ÷ 10 × 2", tekst: "Alternatief: 35 ÷ 10 = 3,5. Dan × 2 = **7**. Soms sneller bij grotere getallen." },
            { titel: "Check", tekst: "7 × 5 = 35 ✓. Terug-rekenen bevestigt het antwoord altijd." },
          ],
          woorden: [{ woord: "tafel van 5", uitleg: "5, 10, 15, 20, 25, 30, 35, 40, ..." }],
          theorie: "Toets-truc: ÷ 5 → kijk welk veelvoud van 5 het is. Tafel-5 ken je uit je hoofd, dus terug-zoeken is snel.",
          voorbeelden: [
            { type: "stap", tekst: "45 ÷ 5 = 9 (9 × 5 = 45). 60 ÷ 5 = 12. 75 ÷ 5 = 15." },
            { type: "stap", tekst: "Bij niet-tafel-5 (bv. 32 ÷ 5): kom uit op 6 rest 2, of 6,4." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Op een nood-moment: tel 5-stappen van 5 tot je het getal bereikt, tel hoeveel stappen. Bij 35: 5-10-15-20-25-30-35 = 7 stappen." }],
          niveaus: {
            basis: "35 ÷ 5 = 7 (7 × 5 = 35).",
            simpeler: "Tafel-5 terug: welk getal × 5 = 35? Antwoord 7.",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "**100 ÷ 10** = ?",
        options: ["10", "1", "1000", "110"],
        answer: 0,
        wrongHints: [null, "Te weinig.", "Vermenigvuldiging.", "Optelling."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**70 ÷ 10** = ?",
        options: ["7", "60", "700", "80"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is aftrekking, niet delen — hoe verander je een getal als je het door 10 deelt?",
          "Dat is vermenigvuldigen, niet delen — bij ÷ 10 wordt het getal kleiner.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Delen door 10",
              tekst: "Bij delen door 10 haal je **een 0 weg**. 70 → **7**.",
            },
            {
              titel: "Check terug",
              tekst: "7 × 10 = 70 ✓.",
            },
          ],
          woorden: [
            {
              woord: "÷ 10",
              uitleg: "Een 0 weghalen, of de komma 1 plek naar links.",
            },
          ],
          theorie: "Toets-truc: ÷ 10 = laatste 0 weghalen. 30 ÷ 10 = 3. 100 ÷ 10 = 10.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "80 ÷ 10 = 8.",
            },
            {
              type: "stap",
              tekst: "250 ÷ 10 = 25.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel-10 terug: wat × 10 = 70? → 7.",
            },
          ],
          niveaus: {
            basis: "70 ÷ 10 = 7.",
            simpeler: "Haal de 0 weg: 70 wordt 7.",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "**30 ÷ 2** = ?",
        options: ["15", "28", "60", "32"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is aftrekking, niet delen — welke bewerking hoort bij '÷ 2'?",
          "Dat is vermenigvuldigen, niet delen — bij ÷ 2 wordt het getal kleiner.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Delen door 2 = halveren",
              tekst: "Delen door 2 betekent de **helft** pakken. Helft van 30 = **15**.",
            },
            {
              titel: "Truc voor halveren",
              tekst: "Splits het getal: 30 = 20 + 10 → helft = 10 + 5 = **15**.",
            },
            {
              titel: "Check terug",
              tekst: "15 × 2 = 30 ✓.",
            },
          ],
          woorden: [
            {
              woord: "halveren",
              uitleg: "In 2 gelijke stukken splitsen.",
            },
          ],
          theorie: "Toets-truc: ÷ 2 = halveren. Splits een groot getal in makkelijke stukken en halveer elk stuk.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "18 ÷ 2 = 9.",
            },
            {
              type: "stap",
              tekst: "40 ÷ 2 = 20.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "15 + 15 = 30. Twee gelijke helften.",
            },
          ],
          niveaus: {
            basis: "30 ÷ 2 = 15 (helft).",
            simpeler: "Helft van 30 = 15.",
            nogSimpeler: "15",
          },
        },
      },
      {
        q: "**45 ÷ 5** = ?",
        options: ["9", "40", "50", "225"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is aftrekking, niet delen — welk getal maal 5 geeft 45?",
          null,
          "Dat is vermenigvuldigen, niet delen — bij ÷ 5 wordt het getal kleiner.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel-5 terug",
              tekst: "Denk: '**wat × 5 = 45?**'. Tafel van 5: 5, 10, 15, 20, 25, 30, 35, 40, **45**. Dat is de 9e.",
            },
            {
              titel: "Andere truc",
              tekst: "Verdubbelen en dan ÷ 10: 45 × 2 = 90, 90 ÷ 10 = **9**.",
            },
            {
              titel: "Check terug",
              tekst: "9 × 5 = 45 ✓.",
            },
          ],
          woorden: [
            {
              woord: "tafel terugzoeken",
              uitleg: "Zoek welk getal keer 5 het deeltal geeft.",
            },
          ],
          theorie: "Toets-truc: ÷ 5 = eerst × 2, dan ÷ 10. Of de tafel van 5 terugzoeken.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "35 ÷ 5 = 7 (want 7 × 5 = 35).",
            },
            {
              type: "stap",
              tekst: "50 ÷ 5 = 10.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Elk getal in de tafel van 5 eindigt op 0 of 5.",
            },
          ],
          niveaus: {
            basis: "45 ÷ 5 = 9.",
            simpeler: "9 × 5 = 45, dus 45 ÷ 5 = 9.",
            nogSimpeler: "9",
          },
        },
      },
      {
        q: "**250 ÷ 10** = ?",
        options: ["25", "240", "2500", "260"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Dat is vermenigvuldigen, niet delen — bij ÷ 10 wordt het getal kleiner.",
          "Dat is optelling, niet delen — hoe verander je een getal als je het door 10 deelt?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Delen door 10",
              tekst: "Bij delen door 10 haal je de **laatste 0 weg**. 250 → **25**.",
            },
            {
              titel: "Check terug",
              tekst: "25 × 10 = 250 ✓.",
            },
          ],
          woorden: [
            {
              woord: "÷ 10",
              uitleg: "Een 0 weghalen, of de komma 1 plek naar links.",
            },
          ],
          theorie: "Toets-truc: ÷ 10 = laatste 0 weghalen. Ook bij grote getallen: 400 ÷ 10 = 40.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "300 ÷ 10 = 30.",
            },
            {
              type: "stap",
              tekst: "120 ÷ 10 = 12.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "Haal alleen de **laatste** 0 weg, niet de 5 of de 2.",
            },
          ],
          niveaus: {
            basis: "250 ÷ 10 = 25.",
            simpeler: "Haal de laatste 0 weg: 250 wordt 25.",
            nogSimpeler: "25",
          },
        },
      },
      {
        q: "**60 ÷ 5** = ?",
        options: ["12", "55", "65", "300"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is aftrekking, niet delen — welk getal maal 5 geeft 60?",
          null,
          "Dat is vermenigvuldigen, niet delen — bij ÷ 5 wordt het getal kleiner.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Truc: × 2 en ÷ 10",
              tekst: "Delen door 5: eerst **verdubbelen**, dan **÷ 10**. 60 × 2 = 120.",
            },
            {
              titel: "Dan ÷ 10",
              tekst: "120 ÷ 10 = **12**.",
            },
            {
              titel: "Check terug",
              tekst: "12 × 5 = 60 ✓.",
            },
          ],
          woorden: [
            {
              woord: "verdubbelen",
              uitleg: "Keer 2 doen.",
            },
          ],
          theorie: "Toets-truc: ÷ 5 = × 2 en dan ÷ 10. Of andersom: 60 ÷ 10 = 6, en 6 × 2 = 12.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "40 ÷ 5 = 80 ÷ 10 = 8.",
            },
            {
              type: "stap",
              tekst: "70 ÷ 5 = 140 ÷ 10 = 14.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "5 is de helft van 10. Dus ÷ 5 geeft het dubbele van ÷ 10.",
            },
          ],
          niveaus: {
            basis: "60 ÷ 5 = 12.",
            simpeler: "60 ÷ 10 = 6, en 6 × 2 = 12.",
            nogSimpeler: "12",
          },
        },
      },
      {
        q: "Welke deling heeft als uitkomst **8**?",
        options: ["80 ÷ 10", "60 ÷ 10", "18 ÷ 2", "50 ÷ 5"],
        answer: 0,
        wrongHints: [null, "Haal de 0 weg. Welk getal hou je over?", null, "Wat keer 5 is 50?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Reken elke deling uit",
              tekst: "80 ÷ 10 = **8**. 60 ÷ 10 = 6. 18 ÷ 2 = 9. 50 ÷ 5 = 10.",
            },
            {
              titel: "Welke is 8?",
              tekst: "Alleen **80 ÷ 10** geeft 8.",
            },
            {
              titel: "Check terug",
              tekst: "8 × 10 = 80 ✓.",
            },
          ],
          woorden: [
            {
              woord: "uitkomst",
              uitleg: "Het antwoord van de som.",
            },
          ],
          theorie: "Toets-truc: reken bij zo'n vraag elke optie kort uit. ÷ 10 = 0 weg, ÷ 2 = halveren, ÷ 5 = tafel-5 terug.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "16 ÷ 2 = 8.",
            },
            {
              type: "stap",
              tekst: "40 ÷ 5 = 8.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Check je keuze met keer: 8 × 10 = 80.",
            },
          ],
          niveaus: {
            basis: "80 ÷ 10 = 8.",
            simpeler: "Haal de 0 van 80 weg: 8.",
            nogSimpeler: "80 ÷ 10",
          },
        },
      },
    ],
  },

  // STAP 3: Delen door 3 t/m 9
  {
    title: "Delen door 3 t/m 9",
    explanation:
      "De **tafel terugzoeken** is bij delen door 3-9 essentieel.\n\n**Voorbeeld**: 28 ÷ 7 = ?\n→ Denk: 'wat × 7 = 28?' → 4 × 7 = 28. Dus 28 ÷ 7 = **4**.\n\n**Delingen die je vaak ziet** *(uit je hoofd handig)*:\n\n**Door 3**:\n• 9 ÷ 3 = 3\n• 12 ÷ 3 = 4\n• 15 ÷ 3 = 5\n• 18 ÷ 3 = 6\n• 21 ÷ 3 = 7\n• 24 ÷ 3 = 8\n• 27 ÷ 3 = 9\n• 30 ÷ 3 = 10\n\n**Door 4**:\n• 16 ÷ 4 = 4\n• 20 ÷ 4 = 5\n• 24 ÷ 4 = 6\n• 28 ÷ 4 = 7\n• 32 ÷ 4 = 8\n• 36 ÷ 4 = 9\n\n**Door 6**:\n• 24 ÷ 6 = 4\n• 30 ÷ 6 = 5\n• 36 ÷ 6 = 6\n• 42 ÷ 6 = 7\n• 48 ÷ 6 = 8\n• 54 ÷ 6 = 9\n\n**Door 7**:\n• 21 ÷ 7 = 3\n• 28 ÷ 7 = 4\n• 35 ÷ 7 = 5\n• 42 ÷ 7 = 6\n• 49 ÷ 7 = 7\n• 56 ÷ 7 = 8\n• 63 ÷ 7 = 9\n\n**Door 8**:\n• 32 ÷ 8 = 4\n• 40 ÷ 8 = 5\n• 48 ÷ 8 = 6\n• 56 ÷ 8 = 7\n• 64 ÷ 8 = 8\n• 72 ÷ 8 = 9\n\n**Door 9**:\n• 27 ÷ 9 = 3\n• 36 ÷ 9 = 4\n• 45 ÷ 9 = 5\n• 54 ÷ 9 = 6\n• 63 ÷ 9 = 7\n• 72 ÷ 9 = 8\n• 81 ÷ 9 = 9\n\n**Toets-truc — schatten**:\nBij grote getallen — schat eerst.\n*'63 ÷ 7 = ?'* Schatting: 70/7 = 10. Dus iets onder 10. Inderdaad: 9.",
    checks: [
      {
        q: "**24 ÷ 3** = ?",
        options: ["8", "27", "21", "72"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Aftrekking.", "Vermenigvuldiging."],
        uitlegPad: {
          stappen: [
            { titel: "Tafel van 3 opzeggen", tekst: "Zeg de tafel van 3 op tot je 24 hoort: **3, 6, 9, 12, 15, 18, 21, 24**. Welke stap? Tel mee: 1-2-3-4-5-6-7-**8**. De **8e stap** levert 24. Dus 24 ÷ 3 = **8**." },
            { titel: "Andersom check", tekst: "Check: 3 × 8 = 24 ✓. Dus 24 ÷ 3 = 8 klopt. Bij elke deling moet de tafel-controle uitkomen op het oorspronkelijke deeltal." },
            { titel: "Wat als je vastloopt?", tekst: "Tafel-3 niet helemaal uit je hoofd? Bouw stappen van 3: 3+3=6, +3=9, +3=12, +3=15, +3=18, +3=21, +3=24. **8 stappen** = 8 keer 3 = 24. Antwoord: 8." },
          ],
          woorden: [
            { woord: "tafel terugzoeken", uitleg: "Bij delen: welke factor maakt het deeltal? = antwoord." },
          ],
          theorie: "Toets-truc voor delen door 3: tafel-3 is een veel-voorkomende. Leer hem **uit het hoofd**: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Bij elke ÷3 vraag → tel waar het getal staat.",
          voorbeelden: [
            { type: "stap", tekst: "**18 ÷ 3** = 6 (18 is 6e stap: 3, 6, 9, 12, 15, **18**)." },
            { type: "stap", tekst: "**27 ÷ 3** = 9 (27 is 9e stap)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tafel-3 reciteren: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Voor ÷3 zoek je gewoon de positie van het getal in deze rij." }],
          niveaus: {
            basis: "24 ÷ 3 = 8.",
            simpeler: "Tel tafel-3: 3, 6, 9, 12, 15, 18, 21, 24. 24 is de 8e.",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "**56 ÷ 7** = ?",
        options: ["8", "49", "63", "9"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet — controleer."],
      },
      {
        q: "**63 ÷ 9** = ?",
        options: ["7", "54", "72", "8"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet."],
        uitlegPad: {
          stappen: [
            { titel: "Tafel terug", tekst: "Denk: 9 × ? = 63. Tafel-9: 9, 18, 27, 36, 45, 54, 63. 63 is de 7e. Dus 63 ÷ 9 = 7." },
          ],
          woorden: [{ woord: "tafel terug", uitleg: "Voor delen: zoek welke vermenigvuldiging hetzelfde getal geeft." }],
          theorie: "Delen = omgekeerde van vermenigvuldigen.",
          voorbeelden: [{ type: "stap", tekst: "63 ÷ 9: zoek wat × 9 = 63. Antwoord: 7." }],
          basiskennis: [{ onderwerp: "Tafels kennen", uitleg: "Vlot delen vereist vlot tafels." }],
          niveaus: {
            basis: "7.",
            simpeler: "Wat keer 9 is 63? Tafel-9 op: 9, 18, 27, 36, 45, 54, 63. Dat is de 7e. Dus 63 ÷ 9 = 7.",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "**48 ÷ 6** = ?",
        options: ["8", "42", "54", "9"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**28 ÷ 7** = ?",
        options: ["4", "21", "35", "5"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel-7 terug",
              tekst: "Denk: '**wat × 7 = 28?**'. Tafel van 7: 7, 14, 21, **28**. Dat is de 4e.",
            },
            {
              titel: "Check",
              tekst: "4 × 7 = 28 ✓. Dus 28 ÷ 7 = **4**.",
            },
          ],
          woorden: [
            {
              woord: "tafel terugzoeken",
              uitleg: "Bij delen: welk getal keer 7 geeft het deeltal?",
            },
          ],
          theorie: "Toets-truc: zeg de tafel van 7 op tot je het deeltal hoort, en tel hoeveel stappen het waren.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**21 ÷ 7** = 3.",
            },
            {
              type: "stap",
              tekst: "**35 ÷ 7** = 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel-7: 7, 14, 21, 28, 35, 42, 49, 56, 63, 70.",
            },
          ],
          niveaus: {
            basis: "28 ÷ 7 = 4.",
            simpeler: "Tel tafel-7: 7, 14, 21, 28. 28 is de 4e.",
            nogSimpeler: "4",
          },
        },
      },
      {
        q: "**32 ÷ 4** = ?",
        options: ["8", "28", "36", "7"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet — controleer."],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel-4 terug",
              tekst: "Denk: '**wat × 4 = 32?**'. Tafel van 4: 4, 8, 12, 16, 20, 24, 28, **32**. Dat is de 8e.",
            },
            {
              titel: "Check",
              tekst: "8 × 4 = 32 ✓. Dus 32 ÷ 4 = **8**.",
            },
          ],
          woorden: [
            {
              woord: "tafel terugzoeken",
              uitleg: "Bij delen: welk getal keer 4 geeft het deeltal?",
            },
          ],
          theorie: "Toets-truc: ÷ 4 is ook twee keer halveren. 32 → 16 → **8**.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**24 ÷ 4** = 6.",
            },
            {
              type: "stap",
              tekst: "**36 ÷ 4** = 9.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel-4: 4, 8, 12, 16, 20, 24, 28, 32, 36, 40.",
            },
          ],
          niveaus: {
            basis: "32 ÷ 4 = 8.",
            simpeler: "Halveer 32: 16. Halveer nog eens: 8.",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "**54 ÷ 6** = ?",
        options: ["9", "48", "60", "8"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet."],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel-6 terug",
              tekst: "Denk: '**wat × 6 = 54?**'. Tafel van 6: 6, 12, 18, 24, 30, 36, 42, 48, **54**. Dat is de 9e.",
            },
            {
              titel: "Schatten",
              tekst: "60 ÷ 6 = 10. 54 is iets minder dan 60, dus het antwoord is iets onder 10: **9**.",
            },
            {
              titel: "Check",
              tekst: "9 × 6 = 54 ✓.",
            },
          ],
          woorden: [
            {
              woord: "schatten",
              uitleg: "Eerst ongeveer uitrekenen met een rond getal.",
            },
          ],
          theorie: "Toets-truc: bij grote getallen eerst schatten met een rond getal (60 ÷ 6 = 10), dan precies uitrekenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**42 ÷ 6** = 7.",
            },
            {
              type: "stap",
              tekst: "**30 ÷ 6** = 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel-6: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60.",
            },
          ],
          niveaus: {
            basis: "54 ÷ 6 = 9.",
            simpeler: "9 × 6 = 54, dus 54 ÷ 6 = 9.",
            nogSimpeler: "9",
          },
        },
      },
      {
        q: "**27 ÷ 3** = ?",
        options: ["9", "24", "30", "8"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel-3 terug",
              tekst: "Denk: '**wat × 3 = 27?**'. Tafel van 3: 3, 6, 9, 12, 15, 18, 21, 24, **27**. Dat is de 9e.",
            },
            {
              titel: "Check",
              tekst: "9 × 3 = 27 ✓. Dus 27 ÷ 3 = **9**.",
            },
          ],
          woorden: [
            {
              woord: "tafel terugzoeken",
              uitleg: "Bij delen: welk getal keer 3 geeft het deeltal?",
            },
          ],
          theorie: "Toets-truc: 30 ÷ 3 = 10. 27 is 3 minder dan 30, dus één stap minder: **9**.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**21 ÷ 3** = 7.",
            },
            {
              type: "stap",
              tekst: "**15 ÷ 3** = 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel-3: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30.",
            },
          ],
          niveaus: {
            basis: "27 ÷ 3 = 9.",
            simpeler: "Tel tafel-3 tot 27: dat is de 9e stap.",
            nogSimpeler: "9",
          },
        },
      },
      {
        q: "**42 ÷ 6** = ?",
        options: ["7", "36", "48", "6"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet — controleer."],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel-6 terug",
              tekst: "Denk: '**wat × 6 = 42?**'. Tafel van 6: 6, 12, 18, 24, 30, 36, **42**. Dat is de 7e.",
            },
            {
              titel: "Check",
              tekst: "7 × 6 = 42 ✓. Dus 42 ÷ 6 = **7**.",
            },
          ],
          woorden: [
            {
              woord: "tafel terugzoeken",
              uitleg: "Bij delen: welk getal keer 6 geeft het deeltal?",
            },
          ],
          theorie: "Toets-truc: ken je 6 × 7 = 42? Dan weet je meteen 42 ÷ 6 = 7 en 42 ÷ 7 = 6.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**36 ÷ 6** = 6.",
            },
            {
              type: "stap",
              tekst: "**48 ÷ 6** = 8.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel-6: 6, 12, 18, 24, 30, 36, 42, 48, 54, 60.",
            },
          ],
          niveaus: {
            basis: "42 ÷ 6 = 7.",
            simpeler: "7 × 6 = 42, dus 42 ÷ 6 = 7.",
            nogSimpeler: "7",
          },
        },
      },
    ],
  },

  // STAP 4: Delen met rest
  {
    title: "Delen met rest",
    explanation:
      "Soms gaat een deling **niet precies op**. Dan blijft er een **rest** over.\n\n**Voorbeeld**: 11 ÷ 3 = ?\n• 3 × 3 = 9 *(net niet 11)*.\n• 3 × 4 = 12 *(te veel)*.\n• Dus 11 ÷ 3 = **3 rest 2**.\n\nWaarom rest 2? 11 − 9 = 2. *(11 = 3 × 3 + 2.)*\n\n**Schrijfwijze**:\n• 11 ÷ 3 = **3 rest 2** *(meest gebruikt)*.\n• 11 ÷ 3 = **3 r 2** *(verkort)*.\n• 11 ÷ 3 = **3⅔** *(met breuk: rest÷deler = 2/3)*.\n\n**Stappenplan**:\n1. Zoek de **grootste tafel-keer** die NIET groter is dan het deeltal.\n2. **Trek af** om de rest te vinden.\n3. Schrijf 'rest X'.\n\n**Voorbeelden uit de toets**:\n• 17 ÷ 5 = 3 rest 2 *(want 5×3=15, 17-15=2)*.\n• 22 ÷ 4 = 5 rest 2 *(want 4×5=20, 22-20=2)*.\n• 30 ÷ 7 = 4 rest 2 *(want 7×4=28, 30-28=2)*.\n• 50 ÷ 8 = 6 rest 2 *(want 8×6=48)*.\n\n**Toets-truc — rest 0**:\nAls het precies opgaat: rest = 0.\n• 20 ÷ 4 = 5 rest 0.\nMeestal schrijf je dan gewoon 'rest 0' niet — gewoon 'precies 5'.\n\n**Praktijk-vraag — wat doe je met rest?**:\nSoms moet je **afronden naar boven** *(want de rest moet ook ergens heen)*:\n• 'In 1 doos passen 6 ballen. Hoeveel dozen voor 20 ballen?'\n• 20 ÷ 6 = 3 rest 2 → je hebt **4 dozen nodig** *(3 vol + 1 extra voor de rest)*.\n\nSoms **afronden naar beneden** *(want rest hou je over)*:\n• 'Je hebt €23. Een boek kost €5. Hoeveel boeken kun je kopen?'\n• 23 ÷ 5 = 4 rest 3 → je kunt **4 boeken** kopen *(van de €3 die over is, kun je geen boek meer kopen)*.\n\nDe **Toets-strikvraag** test of je weet **wanneer je naar boven afrondt** (dozen, dragen).",
    checks: [
      {
        q: "**11 ÷ 3** = ?",
        options: ["3 rest 2", "4 rest 1", "3 rest 1", "Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Dat is te veel — hoeveel maal 3 past nét niet meer in 11?", "Reken na: hoeveel is 3 groepjes van 3, en hoeveel scheelt dat met 11?", "Wel mogelijk."],
      },
      {
        q: "**17 ÷ 5** = ?",
        options: ["3 rest 2", "4 rest 0", "2 rest 7", "5 rest 0"],
        answer: 0,
        wrongHints: [null, "Te veel — dat keer 5 is al groter dan 17.", "Hoeveel blijft er over? Is die rest kleiner dan de deler?", "Onmogelijk — hoeveel keer past 5 in 17?"],
      },
      {
        q: "Een kind krijgt **20 snoepjes**. Hij verdeelt over **3 vriendjes**. Hoeveel per vriendje, hoeveel rest?",
        options: ["6 rest 2", "7 rest 0", "5 rest 5", "6 rest 1"],
        answer: 0,
        wrongHints: [null, "Dat keer 3 is al meer dan 20 — zoek het getal nét eronder.", "Hoeveel blijft er over? Is die rest kleiner dan 3?", "Net niet — hoeveel blijft er over als je dit keer 3 doet?"],
      },
      {
        q: "In 1 doos passen **6 eieren**. Je hebt **20 eieren**. Hoeveel dozen heb je nodig?",
        options: ["4 dozen", "3 dozen", "20 dozen", "6 dozen"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel eieren passen in drie dozen, en hoeveel blijven er dan over?", "Veel te veel.", "Te veel — hoeveel dozen heb je werkelijk nodig?"],
        uitlegPad: {
          stappen: [
            { titel: "Verdeel + rest", tekst: "20 ÷ 6 = 3 rest 2. In 3 dozen passen 18 eieren. 2 eieren blijven over." },
            { titel: "Naar boven afronden", tekst: "Die 2 extra eieren moeten ook in een doos. Dus 3 vol + 1 doos met 2 = 4 dozen nodig." },
          ],
          woorden: [{ woord: "afronden naar boven", uitleg: "Bij 'hoeveel dozen' altijd naar boven afronden, want rest moet ook in een doos." }],
          theorie: "Bij Toets-doos-vragen: rest > 0 → +1 doos.",
          voorbeelden: [{ type: "stap", tekst: "Bij 'aantal containers/dozen': rest = extra container nodig." }],
          basiskennis: [{ onderwerp: "Niet afsnijden", uitleg: "Je kunt geen halve doos hebben." }],
          niveaus: {
            basis: "4 dozen.",
            simpeler: "20 eieren ÷ 6 per doos = 3 dozen vol + 2 eieren over. Die 2 ook in een doos = 4 dozen totaal.",
            nogSimpeler: "4 dozen",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**22 ÷ 4** = ?",
        options: ["5 rest 2", "6 rest 2", "5 rest 1", "4 rest 2"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — hoeveel is 6 keer 4?",
          "Reken na: hoeveel is 5 groepjes van 4, en hoeveel scheelt dat met 22?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Grootste tafel-keer",
              tekst: "Tafel van 4: 4 × 5 = 20 *(net niet 22)*. 4 × 6 = 24 *(te veel)*. Dus 5 keer.",
            },
            {
              titel: "Rest uitrekenen",
              tekst: "22 − 20 = **2**. Dus 22 ÷ 4 = **5 rest 2**.",
            },
            {
              titel: "Check",
              tekst: "4 × 5 + 2 = 22 ✓.",
            },
          ],
          woorden: [
            {
              woord: "rest",
              uitleg: "Wat er overblijft als de deling niet precies opgaat.",
            },
          ],
          theorie: "Stappenplan: 1) zoek de grootste tafel-keer die niet groter is dan het deeltal, 2) trek af, 3) schrijf 'rest'.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**17 ÷ 5** = 3 rest 2 (want 5 × 3 = 15).",
            },
            {
              type: "stap",
              tekst: "**30 ÷ 7** = 4 rest 2 (want 7 × 4 = 28).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "De rest is altijd kleiner dan het getal waardoor je deelt.",
            },
          ],
          niveaus: {
            basis: "22 ÷ 4 = 5 rest 2.",
            simpeler: "5 × 4 = 20. 22 − 20 = 2 over.",
            nogSimpeler: "5 rest 2",
          },
        },
      },
      {
        q: "**19 ÷ 4** = ?",
        options: ["4 rest 3", "5 rest 1", "4 rest 2", "3 rest 3"],
        answer: 0,
        wrongHints: [
          null,
          "Te veel — dat keer 4 is al groter dan 19.",
          "Reken na: hoeveel is 4 groepjes van 4, en hoeveel scheelt dat met 19?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Grootste tafel-keer",
              tekst: "Tafel van 4: 4 × 4 = 16 *(net niet 19)*. 4 × 5 = 20 *(te veel)*. Dus 4 keer.",
            },
            {
              titel: "Rest uitrekenen",
              tekst: "19 − 16 = **3**. Dus 19 ÷ 4 = **4 rest 3**.",
            },
            {
              titel: "Check",
              tekst: "4 × 4 + 3 = 19 ✓.",
            },
          ],
          woorden: [
            {
              woord: "rest",
              uitleg: "Wat er overblijft als de deling niet precies opgaat.",
            },
          ],
          theorie: "Stappenplan: 1) grootste tafel-keer zoeken, 2) aftrekken, 3) 'rest' opschrijven.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**11 ÷ 3** = 3 rest 2.",
            },
            {
              type: "stap",
              tekst: "**22 ÷ 4** = 5 rest 2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "Rest 3 bij delen door 4 mag: de rest is kleiner dan 4.",
            },
          ],
          niveaus: {
            basis: "19 ÷ 4 = 4 rest 3.",
            simpeler: "4 × 4 = 16. 19 − 16 = 3 over.",
            nogSimpeler: "4 rest 3",
          },
        },
      },
      {
        q: "**30 ÷ 7** = ?",
        options: ["4 rest 2", "5 rest 0", "4 rest 1", "3 rest 2"],
        answer: 0,
        wrongHints: [null, "Te veel — hoeveel is 5 keer 7?", null, "Reken na: past 7 niet vaker in 30?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Grootste tafel-keer",
              tekst: "Tafel van 7: 7 × 4 = 28 *(net niet 30)*. 7 × 5 = 35 *(te veel)*. Dus 4 keer.",
            },
            {
              titel: "Rest uitrekenen",
              tekst: "30 − 28 = **2**. Dus 30 ÷ 7 = **4 rest 2**.",
            },
            {
              titel: "Check",
              tekst: "7 × 4 + 2 = 30 ✓.",
            },
          ],
          woorden: [
            {
              woord: "rest",
              uitleg: "Wat er overblijft als de deling niet precies opgaat.",
            },
          ],
          theorie: "Stappenplan: 1) grootste tafel-keer zoeken, 2) aftrekken, 3) 'rest' opschrijven.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "**50 ÷ 8** = 6 rest 2 (want 8 × 6 = 48).",
            },
            {
              type: "stap",
              tekst: "**17 ÷ 5** = 3 rest 2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "De rest is altijd kleiner dan het getal waardoor je deelt.",
            },
          ],
          niveaus: {
            basis: "30 ÷ 7 = 4 rest 2.",
            simpeler: "4 × 7 = 28. 30 − 28 = 2 over.",
            nogSimpeler: "4 rest 2",
          },
        },
      },
      {
        q: "Wat is de **rest** bij **29 ÷ 6**?",
        options: ["5", "4", "3", "1"],
        answer: 0,
        wrongHints: [null, "Dat is hoe vaak 6 in 29 past. Maar wat blijft er over?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Grootste tafel-keer",
              tekst: "Tafel van 6: 6 × 4 = 24 *(net niet 29)*. 6 × 5 = 30 *(te veel)*. Dus 4 keer.",
            },
            {
              titel: "Rest uitrekenen",
              tekst: "29 − 24 = **5**. De rest is **5**.",
            },
            {
              titel: "Check",
              tekst: "6 × 4 + 5 = 29 ✓. En 5 is kleiner dan 6, dus het klopt.",
            },
          ],
          woorden: [
            {
              woord: "rest",
              uitleg: "Wat er overblijft als de deling niet precies opgaat.",
            },
          ],
          theorie: "Let op wat de vraag wil: **hoe vaak** het past (4) of **wat overblijft** (de rest, 5).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Rest bij **23 ÷ 5** = 3.",
            },
            {
              type: "stap",
              tekst: "Rest bij **30 ÷ 4** = 2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "De rest is altijd kleiner dan het getal waardoor je deelt.",
            },
          ],
          niveaus: {
            basis: "De rest is 5.",
            simpeler: "29 ÷ 6 = 4 rest 5.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "**26 kinderen** gaan met auto's naar het zwembad. In elke auto is plek voor **4 kinderen**. Hoeveel auto's zijn er nodig?",
        options: ["7 auto's", "6 auto's", "8 auto's", "4 auto's"],
        answer: 0,
        wrongHints: [null, "Hoeveel kinderen passen in 6 auto's? Kunnen er dan kinderen mee?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Deel met rest",
              tekst: "26 ÷ 4 = **6 rest 2**. In 6 auto's passen 24 kinderen. 2 kinderen blijven over.",
            },
            {
              titel: "Naar boven afronden",
              tekst: "Die 2 kinderen moeten ook mee. Dus 6 auto's + 1 extra = **7 auto's**.",
            },
          ],
          woorden: [
            {
              woord: "afronden naar boven",
              uitleg: "Er blijft iets over, dus je hebt er nog één nodig.",
            },
          ],
          theorie: "Toets-strikvraag: bij 'hoeveel heb je nodig?' en een rest: **+1**. Niemand blijft achter.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "20 ballen, 6 per doos: 3 rest 2 → 4 dozen.",
            },
            {
              type: "stap",
              tekst: "50 ballen, 8 per doos: 6 rest 2 → 7 dozen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet achterlaten",
              uitleg: "Je kunt geen kind thuislaten omdat de auto vol is.",
            },
          ],
          niveaus: {
            basis: "7 auto's.",
            simpeler: "26 ÷ 4 = 6 rest 2. De 2 kinderen hebben ook een auto nodig: 7.",
            nogSimpeler: "7 auto's",
          },
        },
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — verdelen en prijs-per-stuk",
    explanation:
      "Toets-praktijksommen draaien vaak om **eerlijk verdelen** of **prijs per stuk**.\n\n**Voorbeeld 1 — verdelen**:\n*'Een zak van 24 dropjes verdeel je over 4 kinderen. Hoeveel krijgen ze elk?'*\n• 24 ÷ 4 = **6 dropjes per kind**.\n\n**Voorbeeld 2 — prijs per stuk**:\n*'5 boeken kosten samen €25. Hoe duur is 1 boek?'*\n• €25 ÷ 5 = **€5 per boek**.\n\n**Voorbeeld 3 — hoeveel passen erin?**:\n*'In 1 bus passen 50 mensen. Voor schoolreis zijn er 200 kinderen. Hoeveel bussen?'*\n• 200 ÷ 50 = **4 bussen**.\n\n**Voorbeeld 4 — met rest (afronden naar boven)**:\n*'In 1 doos passen 8 ballen. Hoeveel dozen voor 50 ballen?'*\n• 50 ÷ 8 = 6 rest 2.\n• Dus **7 dozen** nodig (rest moet ook ergens heen).\n\n**Voorbeeld 5 — geld delen**:\n*'4 kinderen verdelen €36 gelijk. Hoeveel per kind?'*\n• €36 ÷ 4 = **€9 per kind**.\n\n**Voorbeeld 6 — tafels in actie**:\n*'Een leerkracht maakt groepjes van 4. De klas heeft 28 kinderen. Hoeveel groepjes?'*\n• 28 ÷ 4 = **7 groepjes**.\n\n**Toets-tip**:\n• 'Hoeveel **per** stuk?' → delen.\n• 'Hoeveel **groepjes** van X?' → delen.\n• 'Hoeveel **dozen/zakjes** nodig?' → delen + naar boven afronden.\n• 'Hoeveel **passen erin**?' → delen + naar **beneden** afronden *(want te veel past niet)*.",
    checks: [
      {
        q: "**32 koekjes** over **8 kinderen** eerlijk. **Per kind**?",
        options: ["4 koekjes", "3 koekjes", "5 koekjes", "8 koekjes"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel koekjes zou dat totaal geven voor alle kinderen?", "Te veel — hoeveel koekjes zou dat totaal geven voor alle kinderen?", "Te veel — dan zou één kind alle koekjes krijgen."],
        uitlegPad: {
          stappen: [
            { titel: "Welk teken gebruik je?", tekst: "**32 koekjes verdelen over 8 kinderen** = delen. Symbool **÷**. De som: **32 ÷ 8 = ?**" },
            { titel: "Reken: 32 ÷ 8", tekst: "Tafel terug: wat × 8 = 32? Tafel-8: 8, 16, 24, **32**. De 4e stap. Dus **32 ÷ 8 = 4**. Elk kind krijgt 4 koekjes." },
            { titel: "Check je antwoord", tekst: "Klopt het? **8 kinderen × 4 koekjes = 32 koekjes** totaal ✓. Som is rond — geen koekjes blijven over." },
          ],
          woorden: [
            { woord: "eerlijk verdelen", uitleg: "Iedereen krijgt evenveel = delen." },
            { woord: "per kind", uitleg: "Signaalwoord 'per' = delen." },
          ],
          theorie: "Toets-truc redactiesommen — signaalwoorden:\n• **'per'** / **'elk'** / **'iedere'** / **'eerlijk verdelen'** → DELEN\n• **'totaal'** / **'samen'** → meestal × of +\n• **'over X groepen'** → delen door X.",
          voorbeelden: [
            { type: "stap", tekst: "**'48 appels in dozen van 6'** → 48 ÷ 6 = 8 dozen." },
            { type: "stap", tekst: "**'€60 over 5 kinderen'** → 60 ÷ 5 = €12 per kind." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "'PER' = deel-teken. Schrijf elke redactiesom om naar een gewone som met getallen + ÷." }],
          niveaus: {
            basis: "32 ÷ 8 = 4 koekjes per kind.",
            simpeler: "32 koekjes verdelen over 8 kinderen = 32 ÷ 8 = 4.",
            nogSimpeler: "4",
          },
        },
      },
      {
        q: "**5 appels** voor **€2,50** totaal. Prijs **per appel**?",
        options: ["€0,50", "€2,50", "€5,00", "€1,25"],
        answer: 0,
        wrongHints: [null, "Dat is alles samen.", "Te veel.", "Net niet."],
      },
      {
        q: "**56 kinderen** in **groepjes van 7**. Hoeveel **groepjes**?",
        options: ["8 groepjes", "7 groepjes", "9 groepjes", "56 groepjes"],
        answer: 0,
        wrongHints: [null, "Niet — hoeveel maal 7 geeft 56?", "Te veel.", "Te veel — dat is iedereen apart."],
      },
      {
        q: "Een doos heeft **6 chocolaatjes**. Hoeveel **dozen** voor **40 chocolaatjes**?",
        options: ["7 dozen", "6 dozen", "5 dozen", "8 dozen"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel chocolaatjes passen daarin, en hoeveel blijven er dan over?", "Te weinig.", "Te veel — hoeveel dozen heb je werkelijk nodig?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**3 schriften** kosten samen **€6**. Hoeveel kost **1 schrift**?",
        options: ["€2", "€3", "€18", "€9"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel kosten 3 schriften dan samen? Is dat €6?",
          "Dat is €6 keer 3. Wordt 1 schrift duurder dan alle 3 samen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke som?",
              tekst: "Prijs **per** stuk = **delen**. De som: **€6 ÷ 3**.",
            },
            {
              titel: "Reken",
              tekst: "Wat × 3 = 6? **2 × 3 = 6**. Dus 1 schrift kost **€2**.",
            },
            {
              titel: "Check",
              tekst: "3 schriften × €2 = €6 ✓.",
            },
          ],
          woorden: [
            {
              woord: "per stuk",
              uitleg: "Voor één ding. Signaalwoord voor delen.",
            },
          ],
          theorie: "Toets-truc: totaalprijs ÷ aantal = prijs per stuk.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5 boeken kosten €25 → €25 ÷ 5 = €5 per boek.",
            },
            {
              type: "stap",
              tekst: "4 pennen kosten €8 → €8 ÷ 4 = €2 per pen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Eén ding is altijd goedkoper dan alles samen.",
            },
          ],
          niveaus: {
            basis: "€6 ÷ 3 = €2 per schrift.",
            simpeler: "€6 verdelen over 3 schriften = €2.",
            nogSimpeler: "€2",
          },
        },
      },
      {
        q: "In 1 bus passen **40 kinderen**. Er gaan **160 kinderen** mee op schoolreis. Hoeveel bussen zijn er nodig?",
        options: ["4 bussen", "3 bussen", "5 bussen", "120 bussen"],
        answer: 0,
        wrongHints: [null, "Hoeveel kinderen passen in 3 bussen? Kan iedereen dan mee?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke som?",
              tekst: "Hoeveel keer passen 40 kinderen in 160? De som: **160 ÷ 40**.",
            },
            {
              titel: "Reken",
              tekst: "Wat × 40 = 160? 4 × 40 = 160. Dus **4 bussen**.",
            },
            {
              titel: "Check",
              tekst: "4 bussen × 40 kinderen = 160 kinderen ✓. Precies vol, niemand blijft over.",
            },
          ],
          woorden: [
            {
              woord: "hoeveel passen erin",
              uitleg: "Hoe vaak een groep in het totaal past = delen.",
            },
          ],
          theorie: "Toets-truc: tel in stappen van 40: 40, 80, 120, 160. Dat zijn **4** stappen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "200 kinderen, 50 per bus → 200 ÷ 50 = 4 bussen.",
            },
            {
              type: "stap",
              tekst: "90 kinderen, 30 per bus → 90 ÷ 30 = 3 bussen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Grote getallen? Tel in sprongen van de groepsgrootte.",
            },
          ],
          niveaus: {
            basis: "160 ÷ 40 = 4 bussen.",
            simpeler: "40, 80, 120, 160: 4 bussen.",
            nogSimpeler: "4 bussen",
          },
        },
      },
      {
        q: "De juf maakt **groepjes van 5**. De klas heeft **30 kinderen**. Hoeveel **groepjes** zijn er?",
        options: ["6 groepjes", "5 groepjes", "25 groepjes", "150 groepjes"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel kinderen zitten er in 5 groepjes van 5?",
          null,
          "Dat is 30 keer 5. Kunnen er meer groepjes dan kinderen zijn?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke som?",
              tekst: "Hoeveel **groepjes van 5**? Dat is delen: **30 ÷ 5**.",
            },
            {
              titel: "Reken",
              tekst: "Wat × 5 = 30? **6 × 5 = 30**. Dus **6 groepjes**.",
            },
            {
              titel: "Check",
              tekst: "6 groepjes × 5 kinderen = 30 ✓.",
            },
          ],
          woorden: [
            {
              woord: "groepjes van",
              uitleg: "Signaalwoord voor delen.",
            },
          ],
          theorie: "Toets-truc: 'hoeveel groepjes van X?' → totaal ÷ X.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "28 kinderen in groepjes van 4 → 28 ÷ 4 = 7 groepjes.",
            },
            {
              type: "stap",
              tekst: "24 kinderen in groepjes van 6 → 24 ÷ 6 = 4 groepjes.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel van 5 terug: 5, 10, 15, 20, 25, 30 → 6 stappen.",
            },
          ],
          niveaus: {
            basis: "30 ÷ 5 = 6 groepjes.",
            simpeler: "30 kinderen, steeds 5 bij elkaar: 6 groepjes.",
            nogSimpeler: "6 groepjes",
          },
        },
      },
      {
        q: "In 1 doos passen **8 ballen**. Hoeveel **dozen** heb je nodig voor **34 ballen**?",
        options: ["5 dozen", "4 dozen", "6 dozen", "8 dozen"],
        answer: 0,
        wrongHints: [
          null,
          "Te weinig — hoeveel ballen passen in 4 dozen, en hoeveel blijven er dan over?",
          null,
          "Te veel — hoeveel dozen heb je werkelijk nodig?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Deel met rest",
              tekst: "34 ÷ 8 = **4 rest 2**. In 4 dozen passen 32 ballen. 2 ballen blijven over.",
            },
            {
              titel: "Naar boven afronden",
              tekst: "Die 2 ballen moeten ook in een doos. Dus 4 + 1 = **5 dozen**.",
            },
          ],
          woorden: [
            {
              woord: "afronden naar boven",
              uitleg: "Bij 'hoeveel dozen nodig': is er een rest, dan nog 1 doos erbij.",
            },
          ],
          theorie: "Toets-tip: 'hoeveel dozen/zakjes nodig?' → delen + naar **boven** afronden.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "50 ballen, 8 per doos: 6 rest 2 → 7 dozen.",
            },
            {
              type: "stap",
              tekst: "20 eieren, 6 per doos: 3 rest 2 → 4 dozen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet afsnijden",
              uitleg: "De laatste doos is niet vol, maar je hebt hem wel nodig.",
            },
          ],
          niveaus: {
            basis: "5 dozen.",
            simpeler: "34 ÷ 8 = 4 rest 2. Die 2 ballen ook in een doos: 5 dozen.",
            nogSimpeler: "5 dozen",
          },
        },
      },
      {
        q: "Een zak met **42 dropjes** verdeel je eerlijk over **7 kinderen**. Hoeveel dropjes krijgt **elk kind**?",
        options: ["6 dropjes", "35 dropjes", "49 dropjes", "7 dropjes"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is 42 min 7. Maar je verdeelt de dropjes.",
          null,
          "Hoeveel dropjes zijn dat samen voor 7 kinderen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Welke som?",
              tekst: "Eerlijk verdelen = **delen**. De som: **42 ÷ 7**.",
            },
            {
              titel: "Reken",
              tekst: "Tafel terug: wat × 7 = 42? Tafel-7: 7, 14, 21, 28, 35, **42**. De 6e stap. Dus **6 dropjes**.",
            },
            {
              titel: "Check",
              tekst: "7 kinderen × 6 dropjes = 42 ✓. Er blijft niets over.",
            },
          ],
          woorden: [
            {
              woord: "eerlijk verdelen",
              uitleg: "Iedereen krijgt evenveel = delen.",
            },
            {
              woord: "per kind",
              uitleg: "Hoeveel één kind krijgt.",
            },
          ],
          theorie: "Toets-truc redactiesommen: 'eerlijk verdelen over X' → delen door X. Zoek de tafel terug.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "24 dropjes over 4 kinderen → 24 ÷ 4 = 6.",
            },
            {
              type: "stap",
              tekst: "32 koekjes over 8 kinderen → 32 ÷ 8 = 4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Schrijf de verhaalsom eerst om naar een gewone som met ÷.",
            },
          ],
          niveaus: {
            basis: "42 ÷ 7 = 6 dropjes per kind.",
            simpeler: "42 dropjes over 7 kinderen: elk kind krijgt 6.",
            nogSimpeler: "6 dropjes",
          },
        },
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — delen-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: gewone delingen, rest, verdelen, prijs-per-stuk.\n\nVeel succes!",
    checks: [
      {
        q: "**45 ÷ 9** = ?",
        options: ["5", "36", "54", "9"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet."],
      },
      {
        q: "**72 ÷ 8** = ?",
        options: ["9", "64", "80", "8"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet."],
      },
      {
        q: "**25 ÷ 4** = ?",
        options: ["6 rest 1", "7 rest 0", "5 rest 5", "6 rest 0"],
        answer: 0,
        wrongHints: [null, "Te veel — dat keer 4 is al meer dan 25.", "Geen rest groter dan de deler.", "Hoeveel blijft er over als je dit keer 4 doet? Is de rest nul?"],
      },
      {
        q: "**8 kinderen** verdelen **€40** eerlijk. **Per kind**?",
        options: ["€5", "€40", "€8", "€48"],
        answer: 0,
        wrongHints: [null, "Alles samen.", "Niet zo veel per kind.", "Optelling."],
      },
      {
        q: "**63 ÷ 7** = ?",
        options: ["9", "56", "70", "8"],
        answer: 0,
        wrongHints: [null, "Aftrekking.", "Optelling.", "Net niet."],
      },
      {
        q: "**1 box per 6 boeken**. **50 boeken** in totaal. Hoeveel **boxen**?",
        options: ["9 boxen", "8 boxen", "10 boxen", "6 boxen"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel boeken passen daarin, en hoeveel blijven er dan over?", "Te veel.", "Veel te weinig."],
      },
      { q: "20 ÷ 4 = ?", options: ["5","4","6","20"], answer: 0, wrongHints: [null, "Deler.", "Niet.", "Niet."] },
      { q: "36 ÷ 9 = ?", options: ["4","5","6","9"], answer: 0, wrongHints: [null, "Niet.", "Niet — 9×6=54.", "Deler."] },
      { q: "72 ÷ 8 = ?", options: ["9","8","7","6"], answer: 0, wrongHints: [null, "Niet.", "Niet — 8×7=56.", "Niet."] },
      { q: "100 ÷ 10 = ?", options: ["10","100","1","11"], answer: 0, wrongHints: [null, "Geen verandering.", "Niet.", "Niet."] },
      { q: "**56 ÷ 7** = ?", options: ["8","7","6","9"], answer: 0, wrongHints: [null, "Deler.", "Niet.", "Te hoog."] },
      { q: "**Rest** bij 23 ÷ 5 = ?", options: ["3","2","4","0"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Niet — wel rest."] },
      { q: "**Rest** bij 30 ÷ 4 = ?", options: ["2","1","4","0"], answer: 0, wrongHints: [null, "Niet.", "Te veel.", "Niet — wel rest."] },
      { q: "Welke is **deeltafel** van 10: 10/10 = ?", options: ["1","10","100","0"], answer: 0, wrongHints: [null, "Hoe vaak past 10 in 10? Dat is niet 10 keer.", "Delen maakt kleiner, niet groter.", "Een getal door zichzelf delen is niet 0 — er past wél iets in."] },
      { q: "**24 ÷ 6** = ?", options: ["4","6","8","3"], answer: 0, wrongHints: [null, "Deler.", "Niet.", "Niet."] },
      { q: "Je verdeelt **48** in **8 gelijke groepjes**. Hoeveel zitten er in elk groepje?", options: ["6","8","4","12"], answer: 0, wrongHints: [null, "Aantal groepen.", "Niet.", "Niet."] },
      { q: "100 ÷ 25 = ?", options: ["4","25","5","10"], answer: 0, wrongHints: [null, "Deler.", "Niet.", "Niet."] },
      { q: "Wat is **omgekeerde** van delen?", options: ["Vermenigvuldigen","Aftrekken","Optellen","Niet bestaand"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Wel."] },
      { q: "**Halveren** is delen door?", options: ["2","½","4","10"], answer: 0, wrongHints: [null, "Vermenigvuldigen met.", "Kwarten.", "Niet."] },
      { q: "**Eerlijk verdelen** 18 koeken over 6 kinderen?", options: ["3","12","6","18"], answer: 0, wrongHints: [null, "Dat is 18 − 6, geen deling.", "Aantal kinderen.", "Dat is het totaal."] },
    ],
  },
  // G. Oefenronde (11 aug 2026, zelfde didactiek als topografie "Ken ze alle 12"):
  // typ het antwoord; in één keer goed = gekend; mis = som komt later terug.
  {
    title: "Oefen ze allemaal!",
    explanation:
      "Nu je weet hoe delen werkt: **echt oefenen**, net zolang tot je ze kent.\n\n" +
      "Je krijgt **12 deelsommen** door elkaar. Typ het antwoord:\n" +
      "• In **één keer goed** → ✔ die ken je!\n" +
      "• **Mis?** Je krijgt een hint (denk aan de tafel andersom!) en mag het nog eens proberen — en die som komt straks nog een keer terug.\n\n" +
      "Klaar als je ze **allemaal** in één keer goed hebt. Genoeg geoefend? Stoppen mag altijd.",
    interactiveComponent: makeRekenOefenRonde({ soort: "delen", aantal: 12, emoji: "➗", meervoud: "deelsommen" }),
    checks: [
      { q: "56 ÷ 7 = ?", options: ["8","7","6","9"], answer: 0, wrongHints: [null, "Denk aan de tafel van 7: 7 × hoeveel kom je uit bij deze som?", "Dat is 42 ÷ 7.", "Dat is 63 ÷ 7."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const delenPo = {
  id: "delen-po",
  title: "Delen (groep 5-6)",
  emoji: "➗",
  level: "groep5-6",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen — delen",
  prerequisites: [
    { id: "tafels-po", title: "Vermenigvuldigingstafels", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Delen voor groep 5-6 — wat is delen, makkelijke (÷2/5/10), tafel-terug (÷3-9), delen met rest, praktijksommen. Bouwt voort op tafelsPo. ~15 min.",
  triggerKeywords: [
    "delen", "deling", "verdelen",
    "per stuk", "per kind", "groepjes",
    "rest", "tafel terug",
  ],
  chapters,
  steps,
};

export default delenPo;

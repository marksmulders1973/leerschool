// Leerpad: Breuken, procenten & kommagetallen omzetten — groep 7-8 PO.
// Doorstroomtoets-onderdeel rekenen. De drie schrijfwijzen van een deel
// (1/2 = 0,5 = 50%) naar elkaar omzetten en vergelijken.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Breuk ↔ kommagetal", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Kommagetal ↔ procent", emoji: "％", from: 1, to: 1 },
  { letter: "C", title: "Breuk ↔ procent", emoji: "🍰", from: 2, to: 2 },
  { letter: "D", title: "In het echt: vergelijken", emoji: "⚖️", from: 3, to: 3 },
];

const steps = [
  // ─── A. Breuk ↔ kommagetal ────────────────────────────────
  {
    title: "Breuk en kommagetal",
    explanation:
      "Een **deel** kun je op drie manieren opschrijven: als **breuk**, als **kommagetal** en als **procent**. Ze betekenen hetzelfde.\n\n" +
      "**Handige om uit je hoofd te kennen:**\n" +
      "| Breuk | Kommagetal | Procent |\n" +
      "|---|---|---|\n" +
      "| ½ | 0,5 | 50% |\n" +
      "| ¼ | 0,25 | 25% |\n" +
      "| ¾ | 0,75 | 75% |\n" +
      "| 1/10 | 0,1 | 10% |\n" +
      "| 1/5 | 0,2 | 20% |\n\n" +
      "**Breuk → kommagetal:** deel de teller door de noemer. ¾ = 3 ÷ 4 = 0,75.\n" +
      "**Kommagetal → breuk:** 0,5 is vijf tienden = 5/10 = ½.",
    checks: [
      {
        q: "Wat is ½ als kommagetal?",
        options: ["0,5", "0,2", "1,2", "0,12"],
        answer: 0,
        wrongHints: [null, "Dat is 1/5, niet de helft.", "Dat is meer dan 1 — een halve is minder.", "Dat is veel te klein."],
        uitlegPad: {
          stappen: [{ titel: "1 ÷ 2", tekst: "½ = 1 gedeeld door 2 = 0,5. De helft van 1 is 0,5." }],
          niveaus: {
            basis: "De helft schrijf je als kommagetal als 0,5.",
            simpeler: "1 ÷ 2 = ?",
            nogSimpeler: "Wat is de helft van 1?",
          },
        },
      },
      {
        q: "Wat is 0,25 als breuk?",
        options: ["¼", "½", "2/5", "1/25"],
        answer: 0,
        wrongHints: [null, "Dat is 0,5, niet 0,25.", "Dat is 0,4.", "Dat is veel te klein (0,04)."],
        uitlegPad: {
          stappen: [{ titel: "Een kwart", tekst: "0,25 is een kwart van 1, en een kwart schrijf je als ¼." }],
          niveaus: {
            basis: "0,25 is een kwart = ¼.",
            simpeler: "Hoeveel kwarten passen er in 1? Vier. Dus 0,25 = ¼.",
            nogSimpeler: "Welke breuk hoort bij 'een kwart'?",
          },
        },
      },
      {
        q: "Wat is ¾ als kommagetal?",
        options: ["0,75", "0,34", "0,43", "0,7"],
        answer: 0,
        wrongHints: [null, "Reken: 3 ÷ 4.", "Dat zijn niet de juiste cijfers.", "Bijna — maar ¾ is iets meer dan 0,7."],
        uitlegPad: {
          stappen: [{ titel: "3 ÷ 4", tekst: "¾ = 3 gedeeld door 4 = 0,75. (¼ is 0,25, dus drie kwart is 3 × 0,25 = 0,75.)" }],
          niveaus: {
            basis: "¾ = 0,75 (drie keer een kwart van 0,25).",
            simpeler: "Een kwart is 0,25. Hoeveel is drie kwart?",
            nogSimpeler: "0,25 + 0,25 + 0,25 = ?",
          },
        },
      },
      {
        q: "Wat is 1/10 als kommagetal?",
        options: ["0,1", "0,01", "1,0", "0,10 0"],
        answer: 0,
        wrongHints: [null, "Dat is 1/100.", "Dat is een heel getal.", "Dat is geen geldig kommagetal."],
        uitlegPad: {
          stappen: [{ titel: "Eén tiende", tekst: "1/10 is één tiende = 0,1. De eerste plaats achter de komma is de 'tienden'." }],
          niveaus: {
            basis: "1/10 = 0,1 (één tiende).",
            simpeler: "Eén tiende: hoeveel achter de komma?",
            nogSimpeler: "1 gedeeld door 10 = ?",
          },
        },
      },
    ],
  },

  // ─── B. Kommagetal ↔ procent ──────────────────────────────
  {
    title: "Kommagetal en procent",
    explanation:
      "**Procent** betekent letterlijk 'per honderd'. 50% = 50 van de 100.\n\n" +
      "**Kommagetal → procent:** vermenigvuldig met 100 (de komma 2 plaatsen naar rechts).\n" +
      "0,5 → 50%. 0,25 → 25%. 0,07 → 7%.\n\n" +
      "**Procent → kommagetal:** deel door 100 (de komma 2 plaatsen naar links).\n" +
      "25% → 0,25. 8% → 0,08.\n\n" +
      "Onthoud: 100% = 1 (het geheel), 50% = 0,5 (de helft), 10% = 0,1.",
    checks: [
      {
        q: "Wat is 0,5 in procent?",
        options: ["50%", "5%", "0,5%", "500%"],
        answer: 0,
        wrongHints: [null, "Te weinig — schuif de komma 2 plaatsen, niet 1.", "Veel te klein.", "Dat is meer dan het geheel."],
        uitlegPad: {
          stappen: [{ titel: "× 100", tekst: "0,5 × 100 = 50%. De komma schuift 2 plaatsen naar rechts: 0,5 → 50." }],
          niveaus: {
            basis: "0,5 × 100 = 50%.",
            simpeler: "Schuif de komma 2 plaatsen naar rechts: 0,5 wordt 50.",
            nogSimpeler: "De helft is hoeveel procent?",
          },
        },
      },
      {
        q: "Wat is 25% als kommagetal?",
        options: ["0,25", "2,5", "0,025", "25,0"],
        answer: 0,
        wrongHints: [null, "Te groot — deel door 100.", "Te klein, je schoof 3 plaatsen.", "Dat is het hele getal."],
        uitlegPad: {
          stappen: [{ titel: "÷ 100", tekst: "25% = 25 ÷ 100 = 0,25. De komma schuift 2 plaatsen naar links." }],
          niveaus: {
            basis: "25 ÷ 100 = 0,25.",
            simpeler: "Schuif de komma 2 plaatsen naar links: 25 wordt 0,25.",
            nogSimpeler: "Een kwart als kommagetal is …",
          },
        },
      },
      {
        q: "Wat is 0,1 in procent?",
        options: ["10%", "1%", "0,1%", "100%"],
        answer: 0,
        wrongHints: [null, "Te weinig — schuif 2 plaatsen.", "Veel te klein.", "Dat is het hele getal (1,0)."],
        uitlegPad: {
          stappen: [{ titel: "× 100", tekst: "0,1 × 100 = 10%." }],
          niveaus: {
            basis: "0,1 × 100 = 10%.",
            simpeler: "Komma 2 naar rechts: 0,1 → 10.",
            nogSimpeler: "Eén tiende is hoeveel procent?",
          },
        },
      },
      {
        q: "Hoe ga je van een kommagetal naar procent?",
        options: ["keer 100", "deel door 100", "keer 10", "deel door 10"],
        answer: 0,
        wrongHints: [null, "Dat is juist andersom (procent → kommagetal).", "Dat is maar 1 plaats.", "Ook maar 1 plaats."],
        uitlegPad: {
          stappen: [{ titel: "Kommagetal → procent = × 100", tekst: "Van kommagetal naar procent vermenigvuldig je met 100 (komma 2 naar rechts)." }],
          niveaus: {
            basis: "Kommagetal × 100 = procent.",
            simpeler: "0,3 wordt 30%. Wat deed je: × 100 of ÷ 100?",
            nogSimpeler: "Wordt het getal groter of kleiner als je naar procent gaat?",
          },
        },
      },
    ],
  },

  // ─── C. Breuk ↔ procent ───────────────────────────────────
  {
    title: "Breuk en procent",
    explanation:
      "Een **procent** is eigenlijk een breuk van honderd: 25% = 25/100 = ¼.\n\n" +
      "**De handigste om te onthouden:**\n" +
      "• ½ = 50%\n" +
      "• ¼ = 25%\n" +
      "• ¾ = 75%\n" +
      "• 1/5 = 20%\n" +
      "• 1/10 = 10%\n\n" +
      "**Truc:** ga via het kommagetal als je het niet zo weet. ¼ → 0,25 → 25%.",
    checks: [
      {
        q: "Wat is ¼ in procent?",
        options: ["25%", "14%", "40%", "4%"],
        answer: 0,
        wrongHints: [null, "Dat zijn de cijfers door elkaar.", "Dat is 2/5.", "Veel te klein."],
        uitlegPad: {
          stappen: [{ titel: "Een kwart van honderd", tekst: "¼ van 100 = 25, dus ¼ = 25%." }],
          niveaus: {
            basis: "¼ = 25%.",
            simpeler: "Een kwart van 100 is hoeveel?",
            nogSimpeler: "100 ÷ 4 = ?",
          },
        },
      },
      {
        q: "Wat is 50% als breuk?",
        options: ["½", "1/5", "5", "1/50"],
        answer: 0,
        wrongHints: [null, "Dat is 20%.", "Dat is een heel getal.", "Veel te klein."],
        uitlegPad: {
          stappen: [{ titel: "De helft", tekst: "50% is 50 van de 100 = de helft = ½." }],
          niveaus: {
            basis: "50% = de helft = ½.",
            simpeler: "50 van de 100 — welk deel is dat?",
            nogSimpeler: "Welke breuk betekent 'de helft'?",
          },
        },
      },
      {
        q: "Wat is ¾ in procent?",
        options: ["75%", "34%", "43%", "7%"],
        answer: 0,
        wrongHints: [null, "Dat zijn de cijfers door elkaar.", "Niet de juiste cijfers.", "Veel te klein."],
        uitlegPad: {
          stappen: [{ titel: "Drie kwart", tekst: "¼ = 25%, dus ¾ = 3 × 25% = 75%." }],
          niveaus: {
            basis: "¾ = 75% (drie keer 25%).",
            simpeler: "Een kwart is 25%. Hoeveel is drie kwart?",
            nogSimpeler: "25 + 25 + 25 = ?",
          },
        },
      },
      {
        q: "Wat is 1/5 in procent?",
        options: ["20%", "15%", "5%", "50%"],
        answer: 0,
        wrongHints: [null, "Dat zijn de cijfers door elkaar.", "Te klein.", "Dat is ½."],
        uitlegPad: {
          stappen: [{ titel: "Een vijfde van honderd", tekst: "100 ÷ 5 = 20, dus 1/5 = 20%." }],
          niveaus: {
            basis: "1/5 = 20%.",
            simpeler: "Een vijfde van 100 is hoeveel?",
            nogSimpeler: "100 ÷ 5 = ?",
          },
        },
      },
    ],
  },

  // ─── D. Vergelijken ───────────────────────────────────────
  {
    title: "In het echt — welke is groter?",
    explanation:
      "Bij de Doorstroomtoets moet je vaak **vergelijken**: wat is groter, een breuk, een procent of een kommagetal? De truc: **maak ze dezelfde soort** (meestal allemaal procent of allemaal kommagetal), dan zie je het meteen.\n\n" +
      "Voorbeeld: wat is groter, ½ of 0,4?\n" +
      "½ = 0,5. En 0,5 > 0,4, dus ½ is groter.\n\n" +
      "Zet alles om naar procent of kommagetal en vergelijk dan de getallen.",
    checks: [
      {
        q: "Wat is groter: ½ of 0,4?",
        options: ["½", "0,4", "ze zijn gelijk", "dat kun je niet vergelijken"],
        answer: 0,
        wrongHints: [null, "Reken ½ om naar een kommagetal en vergelijk.", "0,5 en 0,4 zijn niet gelijk.", "Het kan juist wél: maak ze dezelfde soort."],
        uitlegPad: {
          stappen: [{ titel: "Maak ze gelijk", tekst: "½ = 0,5. Vergelijk: 0,5 > 0,4, dus ½ is groter." }],
          niveaus: {
            basis: "½ = 0,5 en dat is meer dan 0,4.",
            simpeler: "Schrijf ½ als kommagetal (0,5) en vergelijk met 0,4.",
            nogSimpeler: "Is 0,5 groter of kleiner dan 0,4?",
          },
        },
      },
      {
        q: "Welke korting is meer: ¼ korting of 20% korting?",
        options: ["¼ korting", "20% korting", "ze zijn gelijk", "geen van beide"],
        answer: 0,
        wrongHints: [null, "Reken ¼ om naar procent en vergelijk met 20%.", "Reken ¼ om naar procent — dan zie je dat ze niet gelijk zijn.", "Eén korting haalt echt meer van de prijs af; reken ¼ om."],
        uitlegPad: {
          stappen: [{ titel: "¼ = 25%", tekst: "¼ = 25%. En 25% > 20%, dus ¼ korting is meer." }],
          niveaus: {
            basis: "¼ = 25%, dat is meer dan 20%.",
            simpeler: "Reken ¼ om naar procent: 25%. Is dat meer dan 20%?",
            nogSimpeler: "Hoeveel procent is ¼? Vergelijk dat met 20%.",
          },
        },
      },
      {
        q: "Je had op een toets ¾ van de vragen goed. Hoeveel procent is dat?",
        options: ["75%", "34%", "50%", "60%"],
        answer: 0,
        wrongHints: [null, "Dat zijn de cijfers door elkaar.", "Dat is ½.", "Reken ¾ om naar procent."],
        uitlegPad: {
          stappen: [{ titel: "¾ = 75%", tekst: "¾ van de vragen goed = 75% goed." }],
          niveaus: {
            basis: "¾ = 75%.",
            simpeler: "Een kwart is 25%, drie kwart is …",
            nogSimpeler: "25 + 25 + 25 = ?",
          },
        },
      },
      {
        q: "Welke is het grootst: 0,7 of 65% of ¾?",
        options: ["¾", "0,7", "65%", "ze zijn gelijk"],
        answer: 0,
        wrongHints: [null, "Reken alles om naar procent en vergelijk.", "0,7 = 70%, maar er is iets groters.", "65% is de kleinste."],
        uitlegPad: {
          stappen: [{ titel: "Alles naar procent", tekst: "0,7 = 70%, 65% = 65%, ¾ = 75%. De grootste is 75%, dus ¾." }],
          niveaus: {
            basis: "0,7 = 70%, ¾ = 75%. ¾ is het grootst.",
            simpeler: "Maak alles procent: 70%, 65%, 75%. Welke is het hoogst?",
            nogSimpeler: "Welk getal is het grootst: 70, 65 of 75?",
          },
        },
      },
    ],
  },
];

export default {
  id: "omzetten-breuk-procent-komma-po",
  title: "Breuken, procenten & kommagetallen omzetten",
  subject: "rekenen",
  level: "groep7-8",
  sloThema: "rekenen-omzetten",
  chapters,
  steps,
  prerequisites: [],
};

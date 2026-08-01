// Leerpad: Meten — Gewicht, Inhoud (liters) en Tijd — groep 7-8 PO.
// Doorstroomtoets-onderdeel rekenen/meten. Bewust GEEN overlap met
// matenOmtrekOppervlaktePo (dat doet lengte/oppervlakte/kubieke inhoud).
// Hier: gewicht (g/ons/pond/kg), inhoud in liters (ml/cl/dl/l) en tijd
// (s/min/uur, klokrekenen). Dagelijks-leven-context.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter (opties shufflen) —
// ze leren de methode. 4 hoofdstukken × ~5 checks. Referentieniveau 1F/1S.

const chapters = [
  { letter: "A", title: "Gewicht (gram, ons, pond, kilo)", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Inhoud in liters (ml, cl, dl, l)", emoji: "🥤", from: 1, to: 1 },
  { letter: "C", title: "Tijd (seconde, minuut, uur)", emoji: "⏰", from: 2, to: 2 },
  { letter: "D", title: "In het echt: boodschappen, recept & reizen", emoji: "🛒", from: 3, to: 3 },
];

const steps = [
  // ─── A. Gewicht ───────────────────────────────────────────
  {
    title: "Gewicht omrekenen — gram, ons, pond, kilo",
    explanation:
      "**Gewicht-eenheden die je in de winkel tegenkomt:**\n" +
      "• **mg** (milligram) — heel klein, bijv. een medicijn.\n" +
      "• **g** (gram) — basis voor boodschappen.\n" +
      "• **ons** — 1 ons = **100 g**.\n" +
      "• **pond** — 1 pond = **500 g** (een half kilo).\n" +
      "• **kg** (kilogram, 'kilo') — 1 kg = **1000 g**.\n\n" +
      "**Handige omrekentabel:**\n" +
      "• 1 kg = 1000 g = 10 ons = 2 pond.\n" +
      "• 1 pond = 500 g = 5 ons.\n" +
      "• 1 ons = 100 g.\n\n" +
      "**Naar gram toe** ga je naar een kleinere eenheid → je krijgt een **groter getal** (× 1000 bij kg). **Naar kilo toe** → kleiner getal (÷ 1000).\n\n" +
      "**Valkuil:** een 'ons' is in Nederland 100 g (niet hetzelfde als het Engelse ounce). En 1 pond = 500 g, dus 2 pond = 1 kg.",
    checks: [
      {
        q: "**2,5 kg** is hoeveel gram?",
        options: ["2500 g", "250 g", "25 000 g", "25 g"],
        answer: 0,
        wrongHints: [null, "Kijk nog eens: 1 kg is hoeveel gram?", null, "Dat zou minder dan een ons zijn — klopt dat voor 2,5 kilo?"],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "1 kg = 1000 g, dus 2,5 kg × 1000 = 2500 g. De komma schuift 3 plaatsen naar rechts." }],
          niveaus: {
            basis: "1 kilo is 1000 gram. Reken 2,5 × 1000 uit.",
            simpeler: "Keer 1000 betekent: de komma drie plaatsen naar rechts. 2,5 → 2500.",
            nogSimpeler: "Denk: 1 kg = 1000 g, 2 kg = 2000 g. Hoeveel is dan een halve kilo erbij?",
          },
        },
      },
      {
        q: "Hoeveel gram is **1 pond**?",
        options: ["500 g", "1000 g", "100 g", "250 g"],
        answer: 0,
        wrongHints: [null, "Dat is een hele kilo — een pond is de helft daarvan.", "Dat is een ons.", null],
        uitlegPad: {
          stappen: [{ titel: "Pond = half kilo", tekst: "1 pond = 500 g. Twee pond samen is precies 1 kg (1000 g)." }],
          niveaus: {
            basis: "Een pond is een half kilo. Een halve kilo is 500 g.",
            simpeler: "1 kg = 1000 g. De helft daarvan is een pond.",
            nogSimpeler: "2 pond = 1 kilo = 1000 g. Hoeveel is dan 1 pond?",
          },
        },
      },
      {
        q: "**3 ons** kaas is hoeveel gram?",
        options: ["300 g", "30 g", "3000 g", "150 g"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 ons is al 100 g.", "Dat zou 3 kilo zijn.", null],
        uitlegPad: {
          stappen: [{ titel: "× 100", tekst: "1 ons = 100 g, dus 3 ons = 3 × 100 = 300 g." }],
          niveaus: {
            basis: "Elke ons is 100 g. Tel 3 keer 100 op.",
            simpeler: "1 ons = 100 g, 2 ons = 200 g … ga zo door tot 3 ons.",
            nogSimpeler: "100 + 100 + 100 = ?",
          },
        },
      },
      {
        q: "**750 g** is hoeveel kilo?",
        options: ["0,75 kg", "7,5 kg", "0,075 kg", "75 kg"],
        answer: 0,
        wrongHints: [null, "Dat zou 7500 g zijn — dat is veel te zwaar.", null, "Onmogelijk: 75 kg is zwaarder dan jij."],
        uitlegPad: {
          stappen: [{ titel: "÷ 1000", tekst: "Van gram naar kilo deel je door 1000: 750 / 1000 = 0,75 kg. De komma schuift 3 plaatsen naar links." }],
          niveaus: {
            basis: "1000 g = 1 kg. 750 g is net iets minder dan een kilo.",
            simpeler: "Deel door 1000: de komma drie plaatsen naar links. 750 → 0,75.",
            nogSimpeler: "750 is driekwart van 1000. Driekwart kilo schrijf je als 0,75 kg.",
          },
        },
      },
      {
        q: "Je koopt **1 kg appels** en **3 ons druiven**. Hoeveel gram fruit samen?",
        options: ["1300 g", "1003 g", "4000 g", "1030 g"],
        answer: 0,
        wrongHints: [null, "Let op: 3 ons is niet 3 gram.", "Dat zou 4 kilo zijn.", null],
        uitlegPad: {
          stappen: [{ titel: "Alles naar gram", tekst: "1 kg = 1000 g. 3 ons = 300 g. Samen: 1000 + 300 = 1300 g." }],
          niveaus: {
            basis: "Maak beide eerst gram: 1 kg = 1000 g, 3 ons = 300 g. Tel dan op.",
            simpeler: "1000 g appels + 300 g druiven samen optellen.",
            nogSimpeler: "1000 + 300 = ?",
          },
        },
      },
    ],
  },

  // ─── B. Inhoud (liters) ───────────────────────────────────
  {
    title: "Inhoud omrekenen — milliliter, centiliter, deciliter, liter",
    explanation:
      "**Inhoud-eenheden (van klein naar groot):**\n" +
      "• **ml** (milliliter) — een theelepel is ~5 ml.\n" +
      "• **cl** (centiliter) — staat vaak op een glas of blikje.\n" +
      "• **dl** (deciliter) — een maatbeker gebruikt vaak dl.\n" +
      "• **l** (liter) — een pak melk is 1 l.\n\n" +
      "**Omrekentabel:**\n" +
      "• 1 l = **10 dl** = **100 cl** = **1000 ml**.\n" +
      "• 1 dl = 100 ml.\n" +
      "• 1 cl = 10 ml.\n\n" +
      "**Naar ml toe** (kleiner) → × 10 per stap, dus groter getal. **Naar liter toe** (groter) → ÷ 10 per stap, dus kleiner getal.\n\n" +
      "**Geheugensteun:** liter → deciliter → centiliter → milliliter, elke stap een nul erbij. 1 l = 1000 ml (drie nullen, drie stappen).\n\n" +
      "**Valkuil:** 50 cl is een halve liter (niet 50 liter). En 1 dl = 100 ml, niet 10 ml.",
    checks: [
      {
        q: "**2 liter** is hoeveel milliliter?",
        options: ["2000 ml", "200 ml", "20 000 ml", "20 ml"],
        answer: 0,
        wrongHints: [null, "Te weinig — 1 liter is al 1000 ml.", null, "Dat is nog geen borrelglaasje."],
        uitlegPad: {
          stappen: [{ titel: "× 1000", tekst: "1 l = 1000 ml, dus 2 l = 2 × 1000 = 2000 ml." }],
          niveaus: {
            basis: "1 liter = 1000 ml. Reken 2 × 1000 uit.",
            simpeler: "Elke liter is 1000 ml, dus twee liter is twee keer zoveel.",
            nogSimpeler: "1000 + 1000 = ?",
          },
        },
      },
      {
        q: "**50 cl** is hoeveel liter?",
        options: ["0,5 l", "5 l", "0,05 l", "50 l"],
        answer: 0,
        wrongHints: [null, "Dat zou 500 cl zijn — een hele emmer.", null, null],
        uitlegPad: {
          stappen: [{ titel: "÷ 100", tekst: "1 l = 100 cl, dus 50 cl = 50 / 100 = 0,5 l. Dat is precies een halve liter." }],
          niveaus: {
            basis: "1 liter = 100 cl. 50 cl is de helft daarvan.",
            simpeler: "Deel door 100: 50 → 0,5.",
            nogSimpeler: "100 cl is een hele liter. Wat is dan de helft, 50 cl?",
          },
        },
      },
      {
        q: "Hoeveel milliliter is **1 deciliter (dl)**?",
        options: ["100 ml", "10 ml", "1000 ml", "1 ml"],
        answer: 0,
        wrongHints: [null, "Dat is 1 cl, een stap te klein.", "Dat is een hele liter.", null],
        uitlegPad: {
          stappen: [{ titel: "1 dl = 100 ml", tekst: "Van dl naar ml zijn het 2 stappen (dl → cl → ml), dus × 100. 1 dl = 100 ml." }],
          niveaus: {
            basis: "1 liter = 10 dl én 1 liter = 1000 ml. Dus 1 dl is 1000 ÷ 10.",
            simpeler: "Tien deciliter maakt 1000 ml samen. Eén deciliter is daar een tiende van.",
            nogSimpeler: "1000 gedeeld door 10 = ?",
          },
        },
      },
      {
        q: "Een pak melk is **1,5 l**. Je schenkt glazen van **250 ml**. Hoeveel volle glazen?",
        options: ["6", "4", "7", "5"],
        answer: 0,
        wrongHints: [null, "Reken eerst de liters om naar ml voor je deelt.", null, null],
        uitlegPad: {
          stappen: [{ titel: "Eerst gelijke eenheid", tekst: "1,5 l = 1500 ml. Dan 1500 ÷ 250 = 6 glazen." }],
          niveaus: {
            basis: "Maak van 1,5 liter eerst milliliter: 1500 ml. Deel daarna door 250.",
            simpeler: "Hoe vaak past 250 in 1500? Tel: 250, 500, 750, 1000, 1250, 1500.",
            nogSimpeler: "1500 ÷ 250 = ?",
          },
        },
      },
      {
        q: "In een recept: **3 dl** water + **200 ml** melk. Hoeveel milliliter vocht samen?",
        options: ["500 ml", "320 ml", "230 ml", "3200 ml"],
        answer: 0,
        wrongHints: [null, "Let op: 3 dl is niet 3 ml.", "Reken 3 dl eerst om naar ml.", null],
        uitlegPad: {
          stappen: [{ titel: "Alles naar ml", tekst: "3 dl = 300 ml. Dan 300 + 200 = 500 ml." }],
          niveaus: {
            basis: "Maak 3 dl eerst ml: 1 dl = 100 ml, dus 3 dl = 300 ml. Tel dan 200 ml erbij.",
            simpeler: "300 ml water + 200 ml melk samen optellen.",
            nogSimpeler: "300 + 200 = ?",
          },
        },
      },
    ],
  },

  // ─── C. Tijd ──────────────────────────────────────────────
  {
    title: "Tijd omrekenen — seconden, minuten en uren",
    explanation:
      "**Tijd rekent niet met 10 of 100, maar met 60!**\n" +
      "• 1 minuut = **60 seconden**.\n" +
      "• 1 uur = **60 minuten**.\n" +
      "• 1 uur = 60 × 60 = **3600 seconden**.\n\n" +
      "**Omrekenen:**\n" +
      "• Van uur naar minuten: × 60. (2 uur = 120 min)\n" +
      "• Van minuten naar uur: ÷ 60. (90 min = 1,5 uur)\n" +
      "• Van minuten naar seconden: × 60.\n\n" +
      "**Let op de 60-valkuil:** 1,5 uur is **niet** 1 uur en 50 minuten, maar 1 uur en **30** minuten (een half uur = 30 min). En na 59 minuten komt een heel uur, niet '100 minuten'.\n\n" +
      "**Klokrekenen:** tel eerst de hele uren, dan de minuten. Kom je boven de 60 minuten, dan wordt dat een uur erbij. Bijv. 14:50 + 35 min: 50 + 35 = 85 min = 1 uur en 25 min → 15:25.",
    checks: [
      {
        q: "**2 uur** is hoeveel minuten?",
        options: ["120 min", "200 min", "60 min", "240 min"],
        answer: 0,
        wrongHints: [null, "Tijd rekent met 60, niet met 100.", "Dat is maar 1 uur.", null],
        uitlegPad: {
          stappen: [{ titel: "× 60", tekst: "1 uur = 60 min, dus 2 uur = 2 × 60 = 120 min." }],
          niveaus: {
            basis: "Eén uur is 60 minuten. Twee uur is twee keer 60.",
            simpeler: "60 + 60 = ?",
            nogSimpeler: "Een uur heeft 60 minuten. Tel er nog een uur van 60 bij.",
          },
        },
      },
      {
        q: "**90 minuten** is hoeveel uur?",
        options: ["1,5 uur", "1,3 uur", "9 uur", "0,9 uur"],
        answer: 0,
        wrongHints: [null, "Hoeveel minuten zitten er in een heel uur? Wat blijft er over, en hoe schrijf je dat deel als kommagetal?", null, null],
        uitlegPad: {
          stappen: [{ titel: "60 + 30", tekst: "90 min = 60 min (1 uur) + 30 min (half uur). Een half uur is 0,5 uur, dus samen 1,5 uur." }],
          niveaus: {
            basis: "90 minuten is een uur (60) plus nog een half uur (30).",
            simpeler: "Haal er eerst 60 minuten af = 1 uur. Wat blijft over? Een half uur.",
            nogSimpeler: "Een half uur schrijf je als 0,5. Eén uur en een half is dus 1,5.",
          },
        },
      },
      {
        q: "**180 seconden** is hoeveel minuten?",
        options: ["3 min", "18 min", "30 min", "1,8 min"],
        answer: 0,
        wrongHints: [null, "Deel door 60, niet door 10.", null, null],
        uitlegPad: {
          stappen: [{ titel: "÷ 60", tekst: "1 min = 60 s, dus 180 / 60 = 3 min." }],
          niveaus: {
            basis: "Elke 60 seconden is 1 minuut. Hoe vaak past 60 in 180?",
            simpeler: "60, 120, 180 — dat is drie keer 60.",
            nogSimpeler: "180 ÷ 60 = ?",
          },
        },
      },
      {
        q: "Een film duurt **1 uur en 45 minuten**. Hoeveel minuten is dat in totaal?",
        options: ["105 min", "145 min", "175 min", "60 min"],
        answer: 0,
        wrongHints: [null, "Niet de getallen aan elkaar plakken — reken het uur eerst om.", null, "Dat is maar het uur, de 45 min mist nog."],
        uitlegPad: {
          stappen: [{ titel: "Uur naar minuten, dan optellen", tekst: "1 uur = 60 min. Dan 60 + 45 = 105 min." }],
          niveaus: {
            basis: "Maak het uur eerst minuten: 60. Tel daar de 45 minuten bij op.",
            simpeler: "60 + 45 = ?",
            nogSimpeler: "Eén uur is 60 minuten. Hoeveel is 60 plus 45?",
          },
        },
      },
      {
        q: "De trein vertrekt om **14:50** en rijdt **35 minuten**. Hoe laat komt hij aan?",
        options: ["15:25", "14:85", "15:05", "15:35"],
        answer: 0,
        wrongHints: [null, "Een klok gaat niet tot 85 minuten — na 60 komt een nieuw uur.", null, null],
        uitlegPad: {
          stappen: [{ titel: "Over het hele uur heen", tekst: "50 + 35 = 85 min. Dat is 1 uur en 25 min. 14:50 + 1 uur = 15:50, maar je telde 60 min te veel: 14:50 + 35 min = 15:25." }],
          niveaus: {
            basis: "Van 14:50 tot 15:00 is 10 minuten. Je hebt dan nog 25 minuten over (35 − 10). Dus 15:25.",
            simpeler: "Eerst naar het hele uur: 14:50 + 10 min = 15:00. Nog 25 min erbij = 15:25.",
            nogSimpeler: "10 minuten brengt je op 15:00. Hoeveel van de 35 minuten blijft er dan nog over?",
          },
        },
      },
    ],
  },

  // ─── D. Praktijk-mix ──────────────────────────────────────
  {
    title: "In het echt — boodschappen, recept en reizen",
    explanation:
      "Op de Doorstroomtoets staan meeteenheden bijna altijd in een **verhaaltje**: een recept, een pak drinken, een treinreis. De truc is steeds hetzelfde:\n\n" +
      "1. **Lees** wat er gevraagd wordt en in welke eenheid het antwoord moet.\n" +
      "2. **Maak alles dezelfde eenheid** voordat je optelt, aftrekt of deelt.\n" +
      "3. **Reken** en kijk of het antwoord **logisch** is (een glas water is geen 5 liter).\n\n" +
      "**Onthoud de bruggen:**\n" +
      "• 1 kg = 1000 g = 2 pond = 10 ons.\n" +
      "• 1 l = 1000 ml = 100 cl = 10 dl.\n" +
      "• 1 uur = 60 min = 3600 s.\n\n" +
      "Reken bij tijd over het hele uur heen (na 60 min begint een nieuw uur), en gebruik bij recepten een **verhoudingstabel** als je voor meer of minder personen moet rekenen.",
    checks: [
      {
        q: "Een recept voor **4 personen** vraagt **500 ml** melk. Hoeveel melk voor **6 personen**?",
        options: ["750 ml", "600 ml", "500 ml", "1000 ml"],
        answer: 0,
        wrongHints: [null, "Je voegt 2 personen toe, niet 1 — reken per persoon.", "Voor meer personen heb je niet evenveel nodig.", null],
        uitlegPad: {
          stappen: [{ titel: "Per persoon, dan × 6", tekst: "500 ml ÷ 4 = 125 ml per persoon. Dan 125 × 6 = 750 ml." }],
          niveaus: {
            basis: "Reken eerst hoeveel melk 1 persoon krijgt: 500 ÷ 4 = 125 ml. Daarna × 6 personen.",
            simpeler: "4 personen → 500 ml, dus 2 personen → 250 ml. Zes personen is 4 + 2.",
            nogSimpeler: "500 ml voor 4, plus de helft daarvan (250 ml) voor 2 personen extra.",
          },
        },
      },
      {
        q: "Een pakket weegt **2 kg en 300 g**. Hoeveel gram is dat?",
        options: ["2300 g", "2003 g", "230 g", "2030 g"],
        answer: 0,
        wrongHints: [null, "Let op waar de 300 komt te staan.", "Dat is minder dan het pakket alleen al aan kilo's heeft.", null],
        uitlegPad: {
          stappen: [{ titel: "Kilo naar gram, dan optellen", tekst: "2 kg = 2000 g. Dan 2000 + 300 = 2300 g." }],
          niveaus: {
            basis: "Maak de 2 kg eerst gram: 2000 g. Tel daar de 300 g bij.",
            simpeler: "2000 + 300 = ?",
            nogSimpeler: "Twee kilo is 2000 gram. Hoeveel is 2000 plus 300?",
          },
        },
      },
      {
        q: "Vier kinderen drinken elk **3 dl** limonade. Hoeveel **liter** samen?",
        options: ["1,2 l", "12 l", "0,12 l", "1,12 l"],
        answer: 0,
        wrongHints: [null, "12 liter is meer dan een emmer — kan dat voor 4 glazen?", null, null],
        uitlegPad: {
          stappen: [{ titel: "Eerst totaal in dl, dan naar liter", tekst: "4 × 3 dl = 12 dl. En 10 dl = 1 l, dus 12 dl = 1,2 l." }],
          niveaus: {
            basis: "Tel eerst alle deciliters: 4 × 3 = 12 dl. Tien dl is een liter, dus 12 dl = 1,2 l.",
            simpeler: "12 dl. Deel door 10 om liters te krijgen: 12 → 1,2.",
            nogSimpeler: "10 dl = 1 liter. 12 dl is iets meer dan een liter: 1,2 l.",
          },
        },
      },
      {
        q: "Een reis duurt **2 uur 15 min** heen en **1 uur 50 min** terug. Hoeveel tijd in totaal?",
        options: ["4 uur 5 min", "4 uur 25 min", "3 uur 65 min", "4 uur 15 min"],
        answer: 0,
        wrongHints: [null, null, "Bijna — maar 65 minuten bestaat niet, dat is een uur en 5 min.", null],
        uitlegPad: {
          stappen: [{ titel: "Uren en minuten apart", tekst: "Uren: 2 + 1 = 3. Minuten: 15 + 50 = 65 min = 1 uur en 5 min. Samen: 3 uur + 1 uur 5 min = 4 uur 5 min." }],
          niveaus: {
            basis: "Tel de uren (2 + 1 = 3) en de minuten (15 + 50 = 65) apart. 65 min is 1 uur en 5 min, dus 3 + 1 = 4 uur en 5 min.",
            simpeler: "Minuten samen: 15 + 50 = 65. Dat is meer dan 60, dus een uur erbij en 5 min over.",
            nogSimpeler: "3 uur, plus 65 minuten. 60 van die minuten maken nog een uur (4 uur), met 5 min over.",
          },
        },
      },
    ],
  },
];

export default {
  id: "meten-gewicht-inhoud-tijd-po",
  title: "Meten: gewicht, inhoud & tijd",
  subject: "rekenen",
  level: "groep7-8",
  sloThema: "rekenen-meten",
  chapters,
  steps,
  prerequisites: [],
};

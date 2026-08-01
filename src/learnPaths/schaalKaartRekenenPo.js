// Leerpad: Schaal & kaart rekenen — groep 7-8 PO.
// Doorstroomtoets-onderdeel rekenen (meten/verhoudingen). Wat schaal betekent,
// van kaart naar echt en terug rekenen.
// uitlegPad-niveaus noemen NOOIT de antwoord-letter. 4 hfdst × ~4 checks.

const chapters = [
  { letter: "A", title: "Wat betekent schaal?", emoji: "🗺️", from: 0, to: 0 },
  { letter: "B", title: "Van kaart naar het echt", emoji: "📏", from: 1, to: 1 },
  { letter: "C", title: "Van het echt naar de kaart", emoji: "📐", from: 2, to: 2 },
  { letter: "D", title: "In het echt: afstanden", emoji: "🧭", from: 3, to: 3 },
];

const steps = [
  // ─── A. Wat betekent schaal ───────────────────────────────
  {
    title: "Wat betekent schaal?",
    explanation:
      "Een kaart is een **verkleining** van de werkelijkheid. De **schaal** vertelt hoeveel kleiner.\n\n" +
      "**Schaal 1 : 100** betekent: **1 cm op de kaart = 100 cm in het echt.** Alles is dus 100 keer verkleind.\n\n" +
      "Andere voorbeelden:\n" +
      "• 1 : 1.000 → 1 cm op de kaart = 1.000 cm = 10 m echt.\n" +
      "• 1 : 100.000 → 1 cm op de kaart = 100.000 cm = 1 km echt.\n\n" +
      "**Belangrijk:** het tweede getal is het aantal keer dat het verkleind is. Hoe groter dat getal, hoe meer de werkelijkheid is verkleind.",
    checks: [
      {
        q: "Schaal 1 : 100 betekent: 1 cm op de kaart is in het echt...",
        options: ["100 cm", "1 cm", "10 cm", "1.000 cm"],
        answer: 0,
        wrongHints: [null, "Dan zou de kaart even groot zijn als het echt.", "Te weinig — kijk naar het schaalgetal.", "Dat hoort bij schaal 1 : 1.000."],
        uitlegPad: {
          stappen: [{ titel: "Het schaalgetal", tekst: "Bij 1 : 100 is 1 cm op de kaart gelijk aan 100 cm in het echt." }],
          niveaus: {
            basis: "Het tweede getal (100) zegt hoeveel cm echt bij 1 cm op de kaart hoort: 100 cm.",
            simpeler: "1 cm op de kaart = … cm echt? Kijk naar het getal achter de dubbele punt.",
            nogSimpeler: "Wat staat er na de '1 :' ?",
          },
        },
      },
      {
        q: "Bij schaal 1 : 1.000 is de werkelijkheid hoeveel keer verkleind op de kaart?",
        options: ["1.000 keer", "10 keer", "100 keer", "1 keer"],
        answer: 0,
        wrongHints: [null, "Dat hoort bij 1 : 10.", "Dat hoort bij 1 : 100.", "Dan zou er niets verkleind zijn."],
        uitlegPad: {
          stappen: [{ titel: "Het tweede getal = verkleining", tekst: "Bij 1 : 1.000 is alles 1.000 keer kleiner gemaakt." }],
          niveaus: {
            basis: "Het tweede getal (1.000) is het aantal keer verkleind.",
            simpeler: "Welk getal staat er na de dubbele punt?",
            nogSimpeler: "1 : 1.000 → hoeveel keer kleiner?",
          },
        },
      },
      {
        q: "Schaal 1 : 50.000 — 1 cm op de kaart is hoeveel meter in het echt?",
        options: ["500 m", "50 m", "5.000 m", "5 m"],
        answer: 0,
        wrongHints: [null, "Te weinig — 50.000 cm is meer dan 50 m.", "Te veel — reken cm naar m terug.", "Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Eerst cm, dan m", tekst: "1 cm = 50.000 cm echt. En 50.000 cm = 500 m (delen door 100)." }],
          niveaus: {
            basis: "50.000 cm = 500 m (100 cm = 1 m).",
            simpeler: "1 cm = 50.000 cm. Hoeveel meter is 50.000 cm?",
            nogSimpeler: "50.000 ÷ 100 = ?",
          },
        },
      },
      {
        q: "Welke schaal is het meest verkleind (de kaart toont het grootste gebied)?",
        options: ["1 : 100.000", "1 : 1.000", "1 : 100", "1 : 10"],
        answer: 0,
        wrongHints: [null, "Dat is veel minder verkleind.", "Nog minder verkleind.", "Het minst verkleind van allemaal."],
        uitlegPad: {
          stappen: [{ titel: "Groter getal = meer verkleind", tekst: "Hoe groter het tweede getal, hoe sterker verkleind. 100.000 is het grootst, dus het meest verkleind." }],
          niveaus: {
            basis: "1 : 100.000 heeft het grootste getal → het meest verkleind.",
            simpeler: "Welk schaalgetal is het grootst?",
            nogSimpeler: "Welk getal is groter: 100.000 of 100?",
          },
        },
      },
    ],
  },

  // ─── B. Kaart → echt ──────────────────────────────────────
  {
    title: "Van de kaart naar het echt",
    explanation:
      "Om van een afstand **op de kaart** naar de **echte** afstand te gaan:\n\n" +
      "**afstand op kaart (cm) × schaalgetal = echte afstand (cm)**\n\n" +
      "Daarna reken je de cm om naar m of km:\n" +
      "• 100 cm = 1 m\n" +
      "• 100.000 cm = 1 km\n\n" +
      "Voorbeeld: schaal 1 : 1.000, op de kaart 3 cm. → 3 × 1.000 = 3.000 cm = 30 m.",
    checks: [
      {
        q: "Schaal 1 : 100. Op de kaart is iets 5 cm. Hoeveel cm is dat in het echt?",
        options: ["500 cm", "50 cm", "105 cm", "5 cm"],
        answer: 0,
        wrongHints: [null, "Reken: 5 × 100.", "Niet optellen — vermenigvuldigen met de schaal.", "Dat is de kaart-afstand zelf."],
        uitlegPad: {
          stappen: [{ titel: "× schaalgetal", tekst: "5 cm × 100 = 500 cm in het echt." }],
          niveaus: {
            basis: "5 × 100 = 500 cm.",
            simpeler: "Vermenigvuldig de kaart-afstand met 100.",
            nogSimpeler: "5 × 100 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 1.000. Op de kaart 3 cm. Hoeveel meter in het echt?",
        options: ["30 m", "3 m", "300 m", "3.000 m"],
        answer: 0,
        wrongHints: [null, "Reken 3 × 1.000 cm en dan naar meter.", "Vergeet de schaal niet.", "Je vergat cm naar m om te rekenen."],
        uitlegPad: {
          stappen: [{ titel: "Eerst cm, dan m", tekst: "3 × 1.000 = 3.000 cm. En 3.000 cm = 30 m (delen door 100)." }],
          niveaus: {
            basis: "3 × 1.000 = 3.000 cm = 30 m.",
            simpeler: "3.000 cm omrekenen naar meter: deel door 100.",
            nogSimpeler: "3.000 ÷ 100 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 100.000. Op de kaart 4 cm. Hoeveel km in het echt?",
        options: ["4 km", "40 km", "400 m", "0,4 km"],
        answer: 0,
        wrongHints: [null, "Te veel — reken cm goed naar km.", "Te weinig.", "Te weinig — het is meerdere kilometers."],
        uitlegPad: {
          stappen: [{ titel: "cm → km", tekst: "4 × 100.000 = 400.000 cm. En 100.000 cm = 1 km, dus 400.000 cm = 4 km." }],
          niveaus: {
            basis: "4 × 100.000 = 400.000 cm = 4 km.",
            simpeler: "Bij schaal 1 : 100.000 is 1 cm = 1 km. Dus 4 cm = 4 km.",
            nogSimpeler: "1 cm = 1 km, hoeveel is 4 cm?",
          },
        },
      },
      {
        q: "Schaal 1 : 50.000. Op de kaart 2 cm. Hoeveel km in het echt?",
        options: ["1 km", "2 km", "0,5 km", "10 km"],
        answer: 0,
        wrongHints: [null, "Reken: 2 × 50.000 cm en dan naar km.", "Net niet — 100.000 cm is 1 km.", "Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "cm → km", tekst: "2 × 50.000 = 100.000 cm. En 100.000 cm = 1 km." }],
          niveaus: {
            basis: "2 × 50.000 = 100.000 cm = 1 km.",
            simpeler: "1 cm = 50.000 cm = 0,5 km. Dus 2 cm = 1 km.",
            nogSimpeler: "0,5 km + 0,5 km = ?",
          },
        },
      },
    ],
  },

  // ─── C. Echt → kaart ──────────────────────────────────────
  {
    title: "Van het echt naar de kaart",
    explanation:
      "Andersom: van een **echte** afstand naar de afstand **op de kaart**:\n\n" +
      "**echte afstand (cm) ÷ schaalgetal = afstand op kaart (cm)**\n\n" +
      "Let op: reken de echte afstand eerst om naar **cm** (1 m = 100 cm, 1 km = 100.000 cm).\n\n" +
      "Voorbeeld: schaal 1 : 1.000, echte weg 50 m. → 50 m = 5.000 cm. → 5.000 ÷ 1.000 = 5 cm op de kaart.",
    checks: [
      {
        q: "Schaal 1 : 100. Een muur is in het echt 300 cm. Hoe lang is hij op de kaart?",
        options: ["3 cm", "30 cm", "300 cm", "0,3 cm"],
        answer: 0,
        wrongHints: [null, "Deel door 100, je deelde door 10.", "Dat is de echte lengte.", "Te klein — deel door 100, niet door 1.000."],
        uitlegPad: {
          stappen: [{ titel: "÷ schaalgetal", tekst: "300 cm ÷ 100 = 3 cm op de kaart." }],
          niveaus: {
            basis: "300 ÷ 100 = 3 cm.",
            simpeler: "Deel de echte lengte door 100.",
            nogSimpeler: "300 ÷ 100 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 1.000. Een weg is 50 m lang. Hoe lang op de kaart?",
        options: ["5 cm", "50 cm", "0,5 cm", "500 cm"],
        answer: 0,
        wrongHints: [null, "Reken 50 m eerst naar cm (5.000), dan ÷ 1.000.", "Je vergat door de schaal te delen.", "Te klein."],
        uitlegPad: {
          stappen: [{ titel: "Eerst m naar cm", tekst: "50 m = 5.000 cm. Dan 5.000 ÷ 1.000 = 5 cm op de kaart." }],
          niveaus: {
            basis: "50 m = 5.000 cm; 5.000 ÷ 1.000 = 5 cm.",
            simpeler: "Maak van 50 m eerst cm, deel dan door 1.000.",
            nogSimpeler: "5.000 ÷ 1.000 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 100.000. De afstand tussen twee dorpen is 5 km. Hoe lang op de kaart?",
        options: ["5 cm", "50 cm", "0,5 cm", "500 cm"],
        answer: 0,
        wrongHints: [null, "Reken: hoeveel cm zijn 5 km bij deze schaal? Begin met 1 km.", "Te groot — kijk goed naar de schaalverhouding.", "Te klein — je mist een factor."],
        uitlegPad: {
          stappen: [{ titel: "1 km = 1 cm", tekst: "Bij schaal 1 : 100.000 is 1 km = 1 cm op de kaart. Dus 5 km = 5 cm." }],
          niveaus: {
            basis: "1 : 100.000 → 1 km = 1 cm. 5 km = 5 cm.",
            simpeler: "Hoeveel cm hoort er bij 1 km? En bij 5 km?",
            nogSimpeler: "1 km = 1 cm, dus 5 km = … cm?",
          },
        },
      },
      {
        q: "Hoe ga je van de echte afstand naar de afstand op de kaart?",
        options: ["delen door het schaalgetal", "keer het schaalgetal", "het schaalgetal erbij optellen", "het schaalgetal eraf halen"],
        answer: 0,
        wrongHints: [null, "Dat is juist andersom (kaart → echt).", "Optellen klopt niet bij schaal.", "Aftrekken klopt niet bij schaal."],
        uitlegPad: {
          stappen: [{ titel: "Echt → kaart = delen", tekst: "Van echt naar kaart deel je door het schaalgetal (de kaart is immers kleiner)." }],
          niveaus: {
            basis: "Echte afstand ÷ schaalgetal = kaart-afstand.",
            simpeler: "Wordt het op de kaart groter of kleiner? Kleiner → delen.",
            nogSimpeler: "De kaart is kleiner: keer of delen?",
          },
        },
      },
    ],
  },

  // ─── D. In het echt ───────────────────────────────────────
  {
    title: "In het echt — afstanden op de kaart",
    explanation:
      "Bij de Doorstroomtoets staan schaalvragen vaak in een verhaal met een kaart. Werk altijd in deze volgorde:\n\n" +
      "1. **Welke kant op?** Van kaart naar echt = × schaalgetal. Van echt naar kaart = ÷ schaalgetal.\n" +
      "2. **Reken** uit (in cm).\n" +
      "3. **Zet om** naar de gevraagde eenheid (m of km).\n\n" +
      "Onthoud de handige stap: bij schaal 1 : 100.000 is **1 cm = 1 km**.",
    checks: [
      {
        q: "Op een kaart (schaal 1 : 100.000) is de route 7 cm. Hoeveel km moet je echt fietsen?",
        options: ["7 km", "70 km", "0,7 km", "700 m"],
        answer: 0,
        wrongHints: [null, "Te veel — reken eerst hoeveel kilometer één cm op de kaart voorstelt.", "Te weinig — zet de schaal om: hoeveel kilometer hoort bij één cm?", "Te weinig — het zijn meerdere kilometers."],
        uitlegPad: {
          stappen: [{ titel: "1 cm = 1 km", tekst: "Bij 1 : 100.000 is 1 cm = 1 km. Dus 7 cm = 7 km." }],
          niveaus: {
            basis: "7 cm × (1 km per cm) = 7 km.",
            simpeler: "1 cm is 1 km. Hoeveel is 7 cm?",
            nogSimpeler: "1 cm = 1 km, 7 cm = … km?",
          },
        },
      },
      {
        q: "Schaal 1 : 200. Op de kaart is een gebouw 6 cm. Hoeveel meter is het in het echt?",
        options: ["12 m", "1,2 m", "120 m", "6 m"],
        answer: 0,
        wrongHints: [null, "Reken 6 × 200 cm en dan naar meter.", "Te klein — reken nog eens.", "Te groot."],
        uitlegPad: {
          stappen: [{ titel: "× 200, dan naar m", tekst: "6 × 200 = 1.200 cm. En 1.200 cm = 12 m." }],
          niveaus: {
            basis: "6 × 200 = 1.200 cm = 12 m.",
            simpeler: "Reken eerst de cm uit (1.200), dan naar meter.",
            nogSimpeler: "1.200 ÷ 100 = ?",
          },
        },
      },
      {
        q: "Schaal 1 : 1.000. Een speeltuin is in het echt 80 m breed. Hoe breed op de kaart?",
        options: ["8 cm", "80 cm", "0,8 cm", "800 cm"],
        answer: 0,
        wrongHints: [null, "Reken 80 m naar cm (8.000), dan ÷ 1.000.", "Je vergat door de schaal te delen.", "Te klein."],
        uitlegPad: {
          stappen: [{ titel: "m → cm, dan ÷ schaal", tekst: "80 m = 8.000 cm. Dan 8.000 ÷ 1.000 = 8 cm op de kaart." }],
          niveaus: {
            basis: "80 m = 8.000 cm; 8.000 ÷ 1.000 = 8 cm.",
            simpeler: "Maak van 80 m eerst cm, deel dan door 1.000.",
            nogSimpeler: "8.000 ÷ 1.000 = ?",
          },
        },
      },
      {
        q: "Twee steden liggen 3 km uit elkaar. Op een kaart staan ze 6 cm uit elkaar. Welke schaal heeft de kaart?",
        options: ["1 : 50.000", "1 : 100.000", "1 : 5.000", "1 : 500.000"],
        answer: 0,
        wrongHints: [null, "Reken: hoeveel cm is 3 km? Deel dat door het aantal cm op de kaart.", "Dan zou 6 cm een andere werkelijke afstand vertegenwoordigen — klopt dat met de gegeven steden?", "Veel te klein — hoe groot wordt het tweede getal als je deelt?"],
        uitlegPad: {
          stappen: [{ titel: "Echt (cm) ÷ kaart (cm)", tekst: "3 km = 300.000 cm. 300.000 ÷ 6 = 50.000. De schaal is 1 : 50.000." }],
          niveaus: {
            basis: "300.000 cm echt ÷ 6 cm kaart = 50.000 → schaal 1 : 50.000.",
            simpeler: "Hoeveel cm echt hoort bij 1 cm kaart? 300.000 ÷ 6.",
            nogSimpeler: "300.000 ÷ 6 = ?",
          },
        },
      },
    ],
  },
];

export default {
  id: "schaal-kaart-rekenen-po",
  title: "Schaal & kaart rekenen",
  subject: "rekenen",
  level: "groep7-8",
  sloThema: "rekenen-schaal",
  chapters,
  steps,
  prerequisites: [],
};

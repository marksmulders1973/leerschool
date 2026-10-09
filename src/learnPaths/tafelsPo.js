// Leerpad: Vermenigvuldigingstafels (1 t/m 10) — groep 4-5 PO.
// Toets-onderdeel rekenen-basis. Referentieniveau 1F.
// 6 stappen met uitlegPad. Belangrijk fundament voor groep 6-8.
// + stap G (11 aug 2026): "ken ze allemaal"-oefenronde met typ-antwoorden.

import { makeRekenOefenRonde } from "../components/learn/RekenOefenRonde.jsx";

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  easy: "#69f0ae",
  medium: "#ffd54f",
  hard: "#ff8a65",
};

const stepEmojis = ["✖️", "🟢", "🟡", "🔴", "💡", "🏆", "🧮"];

const chapters = [
  { letter: "A", title: "Wat is een tafel?", emoji: "✖️", from: 0, to: 0 },
  { letter: "B", title: "Makkelijke tafels (2, 5, 10)", emoji: "🟢", from: 1, to: 1 },
  { letter: "C", title: "Basis-tafels (3, 4)", emoji: "🟡", from: 2, to: 2 },
  { letter: "D", title: "Lastige tafels (6, 7, 8, 9)", emoji: "🔴", from: 3, to: 3 },
  { letter: "E", title: "Slimme tafel-trucs", emoji: "💡", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
  { letter: "G", title: "Oefen ze allemaal!", emoji: "🧮", from: 6, to: 6 },
];

function tafelRijSvg(getallen, tafel) {
  const cellW = 30, startX = 30;
  // Breedte meelaten groeien met het aantal cellen, anders valt het laatste
  // getal (bv. 100) half buiten de viewBox.
  const w = Math.max(320, startX + getallen.length * cellW + 12), h = 90;
  let cells = "";
  getallen.forEach((g, i) => {
    const x = startX + i * cellW;
    cells += `<rect x="${x}" y="35" width="${cellW - 3}" height="30" rx="3" fill="rgba(255,213,79,0.15)" stroke="${COLORS.highlight}" stroke-width="0.8"/>`;
    cells += `<text x="${x + cellW / 2 - 1}" y="55" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">${g}</text>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Tafel van ${tafel}</text>
${cells}
<text x="${w / 2}" y="82" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">stappen van ${tafel}</text>
</svg>`;
}

// Rijen-model: teken één keers -som als rijen stippen (bolletjes), elke rij een
// eigen kleur zodat "N groepjes van M" zichtbaar is. Rekent zelf uit.
// blokX = linker-x van dit blokje binnen de gedeelde viewBox.
function groepjesBlok(rijen, kolommen, blokX, topY, kleuren) {
  const r = 7;            // straal van een stip
  const gap = 22;         // hart-op-hart afstand tussen stippen
  const startX = blokX + r + 4;
  let dots = "";
  for (let ri = 0; ri < rijen; ri++) {
    const cy = topY + ri * gap;
    const kleur = kleuren[ri % kleuren.length];
    // lichte "groepje"-band achter elke rij, zodat de rij herkenbaar is
    dots += `<rect x="${startX - r - 3}" y="${cy - r - 2}" width="${(kolommen - 1) * gap + 2 * r + 6}" height="${2 * r + 4}" rx="${r + 2}" fill="${kleur}" opacity="0.13"/>`;
    for (let ci = 0; ci < kolommen; ci++) {
      const cx = startX + ci * gap;
      dots += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${kleur}"/>`;
    }
  }
  return dots;
}

// Twee heldere voorbeelden naast elkaar: 3 × 4 en 5 × 2, als stippen-rijen.
function groepjesSvg() {
  const w = 340, h = 230;
  const kleuren = [COLORS.highlight, COLORS.curve, "#5d9cec", "#ff8a65", "#69f0ae"];
  const topY = 60; // eerste rij stippen

  // Voorbeeld 1: 3 × 4 = 12  → 3 rijen van 4, linkerhelft
  const v1 = groepjesBlok(3, 4, 22, topY, kleuren);
  // Voorbeeld 2: 5 × 2 = 10  → 5 rijen van 2, rechterhelft
  const v2 = groepjesBlok(5, 2, 232, topY, kleuren);

  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="24" text-anchor="middle" fill="${COLORS.curve2}" font-size="14" font-family="Arial" font-weight="bold">Keersom = groepjes tellen</text>
<text x="${w / 2}" y="41" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">elke kleur is één groepje</text>

<text x="90" y="55" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">3 × 4 = 12</text>
${v1}
<text x="90" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">3 groepjes van 4</text>

<line x1="170" y1="52" x2="170" y2="205" stroke="${COLORS.muted}" stroke-width="0.6" opacity="0.4"/>

<text x="258" y="55" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">5 × 2 = 10</text>
${v2}
<text x="258" y="200" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">5 groepjes van 2</text>

<text x="${w / 2}" y="223" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">tel de stippen: dat is het antwoord</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is een tafel?
  {
    title: "Wat is een tafel (vermenigvuldigen)?",
    explanation:
      "Een **tafel** is een **rijtje vermenigvuldigingen** met hetzelfde getal.\n\n**Voorbeeld — tafel van 3**:\n• 1 × 3 = 3\n• 2 × 3 = 6\n• 3 × 3 = 9\n• 4 × 3 = 12\n• 5 × 3 = 15\n• ...tot 10 × 3 = 30.\n\nElk antwoord is **3 meer** dan het vorige *(stappen van 3)*.\n\n**Wat betekent 'keer'?**\n• **3 × 4** = **3 keer 4** = 4 + 4 + 4 = 12.\n• **5 × 2** = 5 keer 2 = 2 + 2 + 2 + 2 + 2 = 10.\n\nDus 'keer' is **hetzelfde optellen, maar korter**.\n\n**Waarom tafels leren?**\nBij **redactiesommen** *(verhaaltjes-sommen)* en **rekenen met grote getallen** heb je tafels nodig:\n• 4 zakjes met 6 koekjes = 4 × 6 = 24 koekjes.\n• 1 boek kost €7, 5 boeken kosten 5 × €7 = €35.\n\n**Belangrijke regel**:\nDe volgorde **maakt niet uit**:\n• 3 × 4 = 12.\n• 4 × 3 = 12.\nDit heet de **wisselregel** (of 'commutatief').\n\n**Toets-truc — 'rooster' tekenen**:\nBij 4 × 6 stel je voor: 4 rijen van 6 vakjes. Totaal = 4 × 6 = 24 vakjes. Helpt om 'keer' te visualiseren.",
    svg: groepjesSvg(),
    checks: [
      {
        q: "Wat is **3 × 4**?",
        options: ["12", "7", "34", "9"],
        answer: 0,
        wrongHints: [null, "Dat is 3+4, niet 3×4.", "Plak-getal.", "Te weinig."],
      },
      {
        q: "Wat is **5 × 2**?",
        options: ["10", "7", "5", "52"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Te weinig.", "Plak-getal."],
      },
      {
        q: "**3 × 4** = **4 × 3** — klopt dat?",
        options: ["Ja, altijd", "Nee", "Soms", "Hangt af"],
        answer: 0,
        wrongHints: [null, "Wel waar — reken 3 × 4 én 4 × 3 en vergelijk.", "Probeer het ook met andere getallen — kom je dan ooit iets anders uit?", "Waar zou het van afhangen? Reken 3 × 4 en 4 × 3 eens uit."],
        uitlegPad: {
          stappen: [
            { titel: "Wat zegt de wisselregel?", tekst: "Bij **vermenigvuldigen** (keer) maakt de **volgorde niet uit**. 3 × 4 geeft hetzelfde antwoord als 4 × 3. Dit heet de **wisselregel**." },
            { titel: "Probeer het zelf", tekst: "**3 × 4** = 4 + 4 + 4 = **12**.\n**4 × 3** = 3 + 3 + 3 + 3 = **12**.\nAllebei 12! Volgorde maakt dus geen verschil." },
            { titel: "Met een rooster", tekst: "Teken een **rooster** van 3 rijen × 4 kolommen = 12 vakjes. Draai het rooster — nu 4 rijen × 3 kolommen = nog steeds 12 vakjes. Hetzelfde aantal." },
          ],
          woorden: [
            { woord: "wisselregel", uitleg: "Bij × maakt volgorde niet uit." },
            { woord: "vermenigvuldigen", uitleg: "Keer doen, hetzelfde getal vaak optellen." },
          ],
          theorie: "Toets-truc — gebruik de wisselregel om makkelijker te rekenen. **7 × 3** voelt soms lastig, maar **3 × 7** ('drie keer zeven') is iets vertrouwder. Beide = 21. Kies de versie die voor jou het snelst werkt.",
          voorbeelden: [
            { type: "stap", tekst: "8 × 2 = 2 × 8 = 16. Vaak weet je '2 keer 8' sneller dan '8 keer 2'." },
            { type: "stap", tekst: "Let op: wisselregel werkt NIET bij delen of aftrekken! 10 − 3 ≠ 3 − 10." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij elke ×-som mag je de getallen omdraaien. Pak de makkelijkere kant." }],
          niveaus: {
            basis: "Ja — wisselregel.",
            simpeler: "3 × 4 = 12 én 4 × 3 = 12. Allebei 12. Volgorde maakt niets uit.",
            nogSimpeler: "Ja",
          },
        },
      },
      {
        q: "Hoeveel is **2 × 6**?",
        options: ["12", "8", "26", "10"],
        answer: 0,
        wrongHints: [null, "Optelling 2+6.", "Plak-getal.", "Te weinig."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke optelsom hoort bij **4 × 5**?",
        options: ["5 + 5 + 5 + 5", "4 + 5", "5 + 5 + 5", "4 + 4 + 4 + 4"],
        answer: 0,
        wrongHints: [
          null,
          "Dit is een plussom van twee getallen. Bij 'keer' tel je hetzelfde getal vaker op.",
          "Tel eens hoe vaak de 5 hier staat. Hoe vaak moet dat?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat betekent 4 × 5?",
              tekst: "**4 × 5** = **4 keer 5**. Je telt de 5 vier keer op.",
            },
            {
              titel: "Schrijf het uit",
              tekst: "4 keer 5 = **5 + 5 + 5 + 5**.",
            },
            {
              titel: "Reken het na",
              tekst: "5 + 5 = 10, + 5 = 15, + 5 = **20**. Dus 4 × 5 = 20.",
            },
          ],
          woorden: [
            {
              woord: "keer",
              uitleg: "Hetzelfde getal een paar keer optellen.",
            },
          ],
          theorie: "Toets-truc: bij **a × b** schrijf je het getal b zo vaak op als a zegt. 3 × 4 = 4 + 4 + 4.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 × 6 = 6 + 6 = 12.",
            },
            {
              type: "stap",
              tekst: "3 × 2 = 2 + 2 + 2 = 6.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Keer",
              uitleg: "'Keer' is hetzelfde optellen, maar korter opgeschreven.",
            },
          ],
          niveaus: {
            basis: "4 × 5 = 5 + 5 + 5 + 5.",
            simpeler: "4 keer 5: schrijf vier keer een 5 en zet er + tussen.",
            nogSimpeler: "5 + 5 + 5 + 5",
          },
        },
      },
      {
        q: "**2 + 2 + 2 + 2** is hetzelfde als …",
        options: ["4 × 2", "2 × 2", "8 × 2", "2 + 4"],
        answer: 0,
        wrongHints: [
          null,
          "Tel eens hoe vaak de 2 er staat.",
          null,
          "Dit is een plussom. Welke keersom hoort bij steeds 2 erbij?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel de tweeën",
              tekst: "Er staat **4 keer** een 2: 2 + 2 + 2 + 2.",
            },
            {
              titel: "Maak er een keersom van",
              tekst: "4 keer een 2 = **4 × 2**.",
            },
            {
              titel: "Reken het na",
              tekst: "2 + 2 + 2 + 2 = 8. En 4 × 2 = 8. Klopt!",
            },
          ],
          woorden: [
            {
              woord: "keer",
              uitleg: "Hoe vaak je hetzelfde getal optelt.",
            },
          ],
          theorie: "Toets-truc: tel hoe vaak hetzelfde getal er staat. Dat aantal komt vóór het × -teken.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 + 3 + 3 = 3 × 3 = 9.",
            },
            {
              type: "stap",
              tekst: "5 + 5 = 2 × 5 = 10.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Keer",
              uitleg: "Een lange plussom met steeds hetzelfde getal kun je korter schrijven als keersom.",
            },
          ],
          niveaus: {
            basis: "4 × 2 (vier keer een 2).",
            simpeler: "Er staan vier tweeën. Dus 4 keer 2.",
            nogSimpeler: "4 × 2",
          },
        },
      },
      {
        q: "Een chocoladereep heeft **3 rijen** met in elke rij **6 blokjes**. Hoeveel blokjes zijn het samen?",
        options: ["18 blokjes", "9 blokjes", "15 blokjes", "36 blokjes"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 3 en 6 opgeteld. Maar élke rij heeft 6 blokjes.",
          null,
          "Tel eens hoeveel rijen er zijn. Zijn dat er 6?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Denk aan een rooster",
              tekst: "De reep is een **rooster**: 3 rijen, en in elke rij 6 blokjes.",
            },
            {
              titel: "Maak een keersom",
              tekst: "3 rijen van 6 = **3 × 6**.",
            },
            {
              titel: "Reken uit",
              tekst: "6 + 6 + 6 = **18**. Samen 18 blokjes.",
            },
          ],
          woorden: [
            {
              woord: "rooster",
              uitleg: "Vakjes in rijen naast en onder elkaar.",
            },
            {
              woord: "rij",
              uitleg: "Een streep vakjes naast elkaar.",
            },
          ],
          theorie: "Toets-truc: bij rijen en vakjes reken je **aantal rijen × vakjes per rij**.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 rijen van 5 stoelen = 2 × 5 = 10 stoelen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rooster",
              uitleg: "Een rooster helpt je 'keer' te zien: rijen × vakjes per rij.",
            },
          ],
          niveaus: {
            basis: "3 × 6 = 18 blokjes.",
            simpeler: "Rij 1: 6, rij 2: 12, rij 3: 18.",
            nogSimpeler: "18",
          },
        },
      },
      {
        q: "Je weet: **7 × 2 = 14**. Wat is dan **2 × 7**?",
        options: ["14", "9", "12", "16"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 2 en 7 opgeteld. Maar het is een keersom.",
          "Maakt de volgorde bij keer eigenlijk uit?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "De wisselregel",
              tekst: "Bij keer maakt de **volgorde niet uit**. Dat heet de **wisselregel**.",
            },
            {
              titel: "Toepassen",
              tekst: "7 × 2 = 14. Dus 2 × 7 is ook **14**.",
            },
            {
              titel: "Controleer",
              tekst: "2 × 7 = 7 + 7 = 14. 7 × 2 = 2 + 2 + 2 + 2 + 2 + 2 + 2 = 14. Allebei 14!",
            },
          ],
          woorden: [
            {
              woord: "wisselregel",
              uitleg: "Bij × mag je de getallen omdraaien.",
            },
          ],
          theorie: "Toets-truc: weet je de ene kant, dan weet je de andere kant ook. 3 × 5 = 5 × 3 = 15.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 × 3 = 12, dus 3 × 4 = 12.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Wisselregel",
              uitleg: "Dit werkt bij keer en plus, maar niet bij min of delen.",
            },
          ],
          niveaus: {
            basis: "2 × 7 = 14 (wisselregel).",
            simpeler: "Omdraaien mag bij keer. Dus ook 14.",
            nogSimpeler: "14",
          },
        },
      },
      {
        q: "Welk rijtje is het begin van de **tafel van 3**?",
        options: ["3, 6, 9, 12", "3, 4, 5, 6", "3, 5, 7, 9", "3, 6, 12, 24"],
        answer: 0,
        wrongHints: [
          null,
          "Hier komt er steeds 1 bij. Hoeveel komt er bij de tafel van 3 steeds bij?",
          null,
          "Hier wordt het getal steeds dubbel. Komt er steeds hetzelfde bij?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is een tafel?",
              tekst: "Een **tafel** is een rijtje keersommen met hetzelfde getal: 1 × 3, 2 × 3, 3 × 3, ...",
            },
            {
              titel: "Stappen van 3",
              tekst: "Bij de tafel van 3 komt er **steeds 3 bij**: 3, 6, 9, 12, 15, ...",
            },
            {
              titel: "Controleer",
              tekst: "3 + 3 = 6, 6 + 3 = 9, 9 + 3 = 12. Het rijtje **3, 6, 9, 12** klopt.",
            },
          ],
          woorden: [
            {
              woord: "tafel",
              uitleg: "Een rijtje keersommen met hetzelfde getal.",
            },
          ],
          theorie: "Toets-truc: bij de tafel van een getal komt er steeds dát getal bij. Tafel van 3 → steeds +3.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tafel van 2: 2, 4, 6, 8 (steeds +2).",
            },
            {
              type: "stap",
              tekst: "Tafel van 5: 5, 10, 15, 20 (steeds +5).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tafel",
              uitleg: "Elk antwoord is 3 meer dan het vorige.",
            },
          ],
          niveaus: {
            basis: "3, 6, 9, 12 — steeds 3 erbij.",
            simpeler: "Begin bij 3 en tel steeds 3 erbij.",
            nogSimpeler: "3, 6, 9, 12",
          },
        },
      },
    ],
  },

  // STAP 2: Makkelijke tafels (2, 5, 10)
  {
    title: "Makkelijke tafels — 2, 5 en 10",
    explanation:
      "**Sommige tafels zijn extra makkelijk**. Begin hiermee!\n\n**Tafel van 10** — gewoon 0 erbij plakken:\n• 1 × 10 = 10\n• 2 × 10 = 20\n• 3 × 10 = 30\n• 4 × 10 = 40\n• ...tot 10 × 10 = 100.\n\n**Tafel van 5** — eindigt op 5 of 0:\n• 1 × 5 = 5\n• 2 × 5 = 10\n• 3 × 5 = 15\n• 4 × 5 = 20\n• 5 × 5 = 25\n• 6 × 5 = 30\n• 7 × 5 = 35\n• 8 × 5 = 40\n• 9 × 5 = 45\n• 10 × 5 = 50.\n\n**Tafel van 2** — gewoon verdubbelen:\n• 1 × 2 = 2\n• 2 × 2 = 4\n• 3 × 2 = 6\n• 4 × 2 = 8\n• 5 × 2 = 10\n• ...tot 10 × 2 = 20.\n\n**Toets-truc**:\n• Tafel van 10 → cijfer + 0 erachter.\n• Tafel van 5 → cijfer × 10, dan ÷ 2. *(Of: 5, 10, 15, 20... stappen van 5.)*\n• Tafel van 2 → cijfer + cijfer (verdubbelen).\n\n**Slimme trucs**:\n• **5 × 8** = 5 × 10 ÷ 2 = 50 ÷ 2 = **40**.\n• **2 × 7** = 7 + 7 = **14**.\n• **10 × 12** = 120 (gewoon 0 erbij).",
    svg: tafelRijSvg([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], "10"),
    checks: [
      {
        q: "**7 × 10** = ?",
        options: ["70", "17", "100", "7"],
        answer: 0,
        wrongHints: [null, "Je hebt opgeteld in plaats van vermenigvuldigd.", "Te veel stapjes — tel eens hoeveel keer 10 je optelt.", "7 is gewoon één keer 7, niet 7 keer 10."],
        uitlegPad: {
          stappen: [
            { titel: "Tafel van 10 = 0 erbij", tekst: "Elke keer 10 betekent: het andere getal + een **0** erachter. **7 × 10 = 70**." },
            { titel: "Waarom werkt dit?", tekst: "Ons cijfer-systeem heeft 10 als basis. 7 keer 10 = 7 tientallen = 70. Net zoals 3 × 10 = 30 en 9 × 10 = 90." },
            { titel: "Snelle check", tekst: "Tel mee: 10, 20, 30, 40, 50, 60, **70** — dat was 7 stapjes. Klopt!" },
          ],
          woorden: [{ woord: "tafel van 10", uitleg: "10, 20, 30, 40, 50, 60, 70, 80, 90, 100. Makkelijkste tafel." }],
          theorie: "Toets-truc: × 10 = laatste cijfer is 0, eerste cijfer is het andere getal. 3 × 10 = 30, 8 × 10 = 80.",
          voorbeelden: [{ type: "stap", tekst: "Probeer ook andersom: 70 ÷ 10 = 7 (0 weghalen)." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tafel van 10 is altijd makkelijkst — leer deze als eerste." }],
          niveaus: {
            basis: "7 × 10 = 70 (0 erbij).",
            simpeler: "7 keer 10 → schrijf 7 op + 0 erachter = 70.",
            nogSimpeler: "70",
          },
        },
      },
      {
        q: "**6 × 5** = ?",
        options: ["30", "25", "11", "35"],
        answer: 0,
        wrongHints: [null, "Eén stap te weinig — tel eens hoe vaak 5 je optelt.", "Je hebt opgeteld in plaats van vermenigvuldigd.", "Eén stap te veel — tel eens hoe vaak 5 je optelt."],
        uitlegPad: {
          stappen: [
            { titel: "Tafel van 5 — telstap", tekst: "Tel in stappen van 5: 5, 10, 15, 20, 25, **30**. Dat was 6 stapjes — dus 6 × 5 = **30**." },
            { titel: "Tafel-5-truc: ÷ 2 × 10", tekst: "Alternatief: 6 × 10 = 60, dan ÷ 2 = 30. Werkt altijd voor × 5." },
            { titel: "Tafel-5 eigenschap", tekst: "Antwoorden eindigen op 0 of 5: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50. Past dit antwoord erin? 30 eindigt op 0 ✓." },
          ],
          woorden: [{ woord: "tafel van 5", uitleg: "5, 10, 15, 20, 25, 30, 35, 40, 45, 50." }],
          theorie: "Toets-truc tafel-5: altijd 0 of 5 als laatste cijfer. Geen 23 of 27 — moet rond/vijf zijn.",
          voorbeelden: [{ type: "stap", tekst: "8 × 5: 8 × 10 = 80, ÷ 2 = 40. Klopt: tel-stap 5, 10, 15, 20, 25, 30, 35, 40." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tafel-5 ↔ tafel-10: 5 keer iets is altijd helft van 10 keer dat ding." }],
          niveaus: {
            basis: "6 × 5 = 30.",
            simpeler: "Tel 6 stappen van 5: 5,10,15,20,25,30.",
            nogSimpeler: "30",
          },
        },
      },
      {
        q: "**9 × 2** = ?",
        options: ["18", "11", "20", "16"],
        answer: 0,
        wrongHints: [null, "Je hebt opgeteld in plaats van vermenigvuldigd.", "Eén stap te veel — tel eens hoe vaak 2 je optelt.", "Eén stap te weinig — tel eens hoe vaak 2 je optelt."],
        uitlegPad: {
          stappen: [
            { titel: "Tafel van 2 = verdubbelen", tekst: "Elke × 2 = het andere getal **dubbel**. **9 × 2 = 9 + 9 = 18**." },
            { titel: "Optellen om te dubbelen", tekst: "9 + 9: 9 + 1 = 10, dan + 8 = 18. Of: 5 + 5 (= 10) + 4 + 4 (= 8) = 18. Verschillende routes, zelfde antwoord." },
            { titel: "Tafel-2 als 'plus zelf'", tekst: "Tafel-2 onthouden: 2, 4, 6, 8, 10, 12, 14, 16, **18**, 20. Bij elke stap kom je 2 erbij — totdat je bij 9 keer = 18 bent." },
          ],
          woorden: [{ woord: "verdubbelen", uitleg: "Een getal bij zichzelf optellen — × 2." }],
          theorie: "Toets-truc tafel-2: gewoon dubbel. 7 × 2 = 7 + 7 = 14. 5 × 2 = 10. Werkt makkelijk uit het hoofd.",
          voorbeelden: [{ type: "stap", tekst: "9 × 2 = 9 + 9. Schrijf het op je vingers als nodig: 2-4-6-8-10-12-14-16-18 = 9 stapjes." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tafel-2 leer je als eerste echte tafel — de basis voor alle andere." }],
          niveaus: {
            basis: "9 × 2 = 18 (9 + 9).",
            simpeler: "9 + 9 = 18.",
            nogSimpeler: "18",
          },
        },
      },
      {
        q: "**3 × 5** = ?",
        options: ["15", "8", "35", "13"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Optelling met 10."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**9 × 10** = ?",
        options: ["90", "19", "900", "80"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          "Hoeveel nullen plak je erachter bij keer 10?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel van 10 = 0 erbij",
              tekst: "Bij keer 10 plak je een **0** achter het andere getal. **9 × 10 = 90**.",
            },
            {
              titel: "Waarom werkt dit?",
              tekst: "9 keer 10 = 9 tientallen = 90.",
            },
            {
              titel: "Snelle check",
              tekst: "Tel mee: 10, 20, 30, 40, 50, 60, 70, 80, **90**. Dat waren 9 stapjes.",
            },
          ],
          woorden: [
            {
              woord: "tafel van 10",
              uitleg: "10, 20, 30, 40, 50, 60, 70, 80, 90, 100.",
            },
          ],
          theorie: "Toets-truc: × 10 = één 0 erachter. 4 × 10 = 40, 6 × 10 = 60.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Andersom: 90 ÷ 10 = 9 (0 weghalen).",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel van 10 is de makkelijkste tafel.",
            },
          ],
          niveaus: {
            basis: "9 × 10 = 90 (0 erbij).",
            simpeler: "Schrijf 9 op en zet een 0 erachter: 90.",
            nogSimpeler: "90",
          },
        },
      },
      {
        q: "**7 × 5** = ?",
        options: ["35", "12", "30", "40"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          "Tel eens hoe vaak je 5 hebt opgeteld.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel van 5 — telstap",
              tekst: "Tel in stappen van 5: 5, 10, 15, 20, 25, 30, **35**. Dat waren 7 stapjes.",
            },
            {
              titel: "Truc: keer 10, dan de helft",
              tekst: "7 × 10 = 70. De helft van 70 = **35**.",
            },
            {
              titel: "Check: eindigt op 0 of 5?",
              tekst: "Antwoorden van de tafel van 5 eindigen op 0 of 5. 35 eindigt op 5 ✓.",
            },
          ],
          woorden: [
            {
              woord: "tafel van 5",
              uitleg: "5, 10, 15, 20, 25, 30, 35, 40, 45, 50.",
            },
          ],
          theorie: "Toets-truc tafel van 5: reken eerst keer 10 en neem dan de helft.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9 × 5: 9 × 10 = 90, de helft = 45.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "5 keer iets is de helft van 10 keer dat iets.",
            },
          ],
          niveaus: {
            basis: "7 × 5 = 35.",
            simpeler: "Tel 7 stappen van 5: 5, 10, 15, 20, 25, 30, 35.",
            nogSimpeler: "35",
          },
        },
      },
      {
        q: "**8 × 2** = ?",
        options: ["16", "10", "18", "14"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          null,
          "Eén stap te weinig — tel eens hoe vaak 2 je optelt.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel van 2 = verdubbelen",
              tekst: "Keer 2 betekent: het getal **dubbel** nemen. **8 × 2 = 8 + 8 = 16**.",
            },
            {
              titel: "Optellen",
              tekst: "8 + 8: 8 + 2 = 10, en dan nog + 6 = 16.",
            },
            {
              titel: "Rijtje",
              tekst: "Tafel van 2: 2, 4, 6, 8, 10, 12, 14, **16**. Dat is de 8e.",
            },
          ],
          woorden: [
            {
              woord: "verdubbelen",
              uitleg: "Een getal bij zichzelf optellen.",
            },
          ],
          theorie: "Toets-truc tafel van 2: gewoon het dubbele. 6 × 2 = 6 + 6 = 12.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9 × 2 = 9 + 9 = 18.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Keer 2 is hetzelfde als het getal plus zichzelf.",
            },
          ],
          niveaus: {
            basis: "8 × 2 = 16 (8 + 8).",
            simpeler: "8 + 8 = 16.",
            nogSimpeler: "16",
          },
        },
      },
      {
        q: "Welk getal hoort **niet** bij de tafel van 5?",
        options: ["23", "15", "40", "35"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar het laatste cijfer. Waar eindigen getallen van de tafel van 5 op?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Waar eindigt de tafel van 5 op?",
              tekst: "Alle antwoorden van de tafel van 5 eindigen op een **0** of een **5**.",
            },
            {
              titel: "Kijk naar de getallen",
              tekst: "15 eindigt op 5, 40 op 0, 35 op 5. Maar **23** eindigt op een **3**.",
            },
            {
              titel: "Conclusie",
              tekst: "23 hoort dus **niet** bij de tafel van 5.",
            },
          ],
          woorden: [
            {
              woord: "tafel van 5",
              uitleg: "5, 10, 15, 20, 25, 30, 35, 40, 45, 50.",
            },
          ],
          theorie: "Toets-truc: eindigt een getal niet op 0 of 5? Dan zit het nooit in de tafel van 5.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "15 = 3 × 5, 40 = 8 × 5, 35 = 7 × 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel van 5: laatste cijfer is altijd 0 of 5.",
            },
          ],
          niveaus: {
            basis: "23 — eindigt niet op 0 of 5.",
            simpeler: "Kijk naar het laatste cijfer: alleen 23 eindigt op 3.",
            nogSimpeler: "23",
          },
        },
      },
    ],
  },

  // STAP 3: Basis tafels (3 en 4)
  {
    title: "Basis-tafels — 3 en 4",
    explanation:
      "Na de makkelijke tafels komen 3 en 4.\n\n**Tafel van 3** — stappen van 3:\n• 1 × 3 = 3\n• 2 × 3 = 6\n• 3 × 3 = 9\n• 4 × 3 = 12\n• 5 × 3 = 15\n• 6 × 3 = 18\n• 7 × 3 = 21\n• 8 × 3 = 24\n• 9 × 3 = 27\n• 10 × 3 = 30.\n\n**Tafel van 4** — stappen van 4 (= het dubbele van tafel 2):\n• 1 × 4 = 4\n• 2 × 4 = 8\n• 3 × 4 = 12\n• 4 × 4 = 16\n• 5 × 4 = 20\n• 6 × 4 = 24\n• 7 × 4 = 28\n• 8 × 4 = 32\n• 9 × 4 = 36\n• 10 × 4 = 40.\n\n**Toets-truc — tafel van 4 via 2**:\nElk antwoord in tafel-4 is **dubbel** van tafel-2.\n• Tafel-2: 2, 4, 6, 8, 10, ...\n• Tafel-4: 4, 8, 12, 16, 20, ... *(dubbele)*.\n\n**Oefen-tip**:\nLeer eerst tafel-3 en tafel-4 als rijtje uit je hoofd (3, 6, 9, 12, 15...) en (4, 8, 12, 16, 20...). Net als versjes. Dan kun je je rij opzeggen en vinden waar het antwoord staat.",
    checks: [
      {
        q: "**4 × 3** = ?",
        options: ["12", "7", "43", "9"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 3 × 3."],
      },
      {
        q: "**7 × 4** = ?",
        options: ["28", "11", "47", "24"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 6 × 4."],
      },
      {
        q: "**9 × 3** = ?",
        options: ["27", "12", "30", "24"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Dat is 10 × 3.", "Dat is 8 × 3."],
        uitlegPad: {
          stappen: [
            { titel: "9 keer 3", tekst: "Reken stap voor stap: 3, 6, 9, 12, 15, 18, 21, 24, 27. Negende getal = 27." },
            { titel: "Of trucje", tekst: "9 × 3 = (10 × 3) - 3 = 30 - 3 = 27." },
          ],
          woorden: [{ woord: "tafel-truc", uitleg: "9 × iets is altijd 1 minder rijtje dan 10 × iets." }],
          theorie: "9 × n = 10 × n - n.",
          voorbeelden: [{ type: "stap", tekst: "9 × 3 = 30 - 3 = 27." }],
          basiskennis: [{ onderwerp: "9-truc", uitleg: "Gebruik de 10-tafel + aftrekken voor 9-tafel." }],
          niveaus: {
            basis: "27.",
            simpeler: "Tafel van 3 op: 3, 6, 9, 12, 15, 18, 21, 24, 27. Negende stap = 27. Of: 10×3=30, dan -3 = 27.",
            nogSimpeler: "27",
          },
        },
      },
      {
        q: "**6 × 4** = ?",
        options: ["24", "10", "64", "20"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 5 × 4."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**8 × 3** = ?",
        options: ["24", "11", "21", "27"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          "Eén stap te weinig — tel eens hoe vaak je 3 optelt.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel van 3 — stappen van 3",
              tekst: "Tel in stappen van 3: 3, 6, 9, 12, 15, 18, 21, **24**. Dat waren 8 stapjes.",
            },
            {
              titel: "Via de wisselregel",
              tekst: "8 × 3 = 3 × 8 = 8 + 8 + 8 = **24**.",
            },
            {
              titel: "Check",
              tekst: "24 staat in het rijtje van de tafel van 3 ✓.",
            },
          ],
          woorden: [
            {
              woord: "tafel van 3",
              uitleg: "3, 6, 9, 12, 15, 18, 21, 24, 27, 30.",
            },
          ],
          theorie: "Toets-truc: zeg het rijtje op als een versje (3, 6, 9, 12, ...) en tel op je vingers mee.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 × 3: 3, 6, 9, 12, 15, 18 → 18.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Elke stap in de tafel van 3 is 3 meer.",
            },
          ],
          niveaus: {
            basis: "8 × 3 = 24.",
            simpeler: "Tel 8 stappen van 3: 3, 6, 9, 12, 15, 18, 21, 24.",
            nogSimpeler: "24",
          },
        },
      },
      {
        q: "Welk getal hoort **wel** bij de tafel van 4?",
        options: ["28", "26", "30", "18"],
        answer: 0,
        wrongHints: [null, "Tel in stappen van 4: kom je dit getal tegen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Zeg het rijtje op",
              tekst: "Tafel van 4: 4, 8, 12, 16, 20, 24, **28**, 32, 36, 40.",
            },
            {
              titel: "Zoek de getallen",
              tekst: "26, 30 en 18 staan niet in het rijtje. **28** wel.",
            },
            {
              titel: "Check",
              tekst: "28 = 7 × 4 ✓.",
            },
          ],
          woorden: [
            {
              woord: "tafel van 4",
              uitleg: "4, 8, 12, 16, 20, 24, 28, 32, 36, 40.",
            },
          ],
          theorie: "Toets-truc: zeg het rijtje van 4 op als een versje. Staat het getal erin? Dan hoort het bij de tafel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "24 = 6 × 4, 32 = 8 × 4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel van 4 = stappen van 4.",
            },
          ],
          niveaus: {
            basis: "28 (= 7 × 4).",
            simpeler: "4, 8, 12, 16, 20, 24, 28 — 28 staat erin.",
            nogSimpeler: "28",
          },
        },
      },
      {
        q: "Je weet: **9 × 2 = 18**. Hoeveel is dan **9 × 4**?",
        options: ["36", "20", "22", "32"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 2 bij 18 opgeteld. Wat is de tafel van 4 vergeleken met de tafel van 2?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel van 4 via 2",
              tekst: "Elk antwoord van de tafel van 4 is het **dubbele** van de tafel van 2.",
            },
            {
              titel: "Toepassen",
              tekst: "9 × 2 = 18. Het dubbele van 18 = 18 + 18 = **36**.",
            },
            {
              titel: "Check",
              tekst: "Tafel van 4: ..., 32, **36**, 40. 36 is de 9e ✓.",
            },
          ],
          woorden: [
            {
              woord: "verdubbelen",
              uitleg: "Een getal bij zichzelf optellen.",
            },
          ],
          theorie: "Toets-truc: keer 4 = twee keer verdubbelen. 9 → 18 → 36.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 × 2 = 12, dus 6 × 4 = 24.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Tafel van 4 = dubbel van tafel van 2.",
            },
          ],
          niveaus: {
            basis: "9 × 4 = 36 (dubbel van 18).",
            simpeler: "18 + 18 = 36.",
            nogSimpeler: "36",
          },
        },
      },
    ],
  },

  // STAP 4: Lastige tafels (6, 7, 8, 9)
  {
    title: "Lastige tafels — 6, 7, 8 en 9",
    explanation:
      "De **moeilijkste tafels** voor de meeste kinderen.\n\n**Tafel van 6**:\n6, 12, 18, 24, 30, 36, 42, 48, 54, 60.\n\n**Tafel van 7**:\n7, 14, 21, 28, 35, 42, 49, 56, 63, 70.\n\n**Tafel van 8**:\n8, 16, 24, 32, 40, 48, 56, 64, 72, 80.\n\n**Tafel van 9** *(speciaal!)*:\n9, 18, 27, 36, 45, 54, 63, 72, 81, 90.\n\n**De 9-truc** *(magie!)*:\nKijk naar de antwoorden van tafel 9:\n• 1×9=**0**9 → 0+9=9\n• 2×9=**1**8 → 1+8=9\n• 3×9=**2**7 → 2+7=9\n• 4×9=**3**6 → 3+6=9\n• 5×9=**4**5 → 4+5=9\n• 6×9=**5**4 → 5+4=9\n• ...\n\nDe **cijfers van het antwoord tellen op tot 9**! En het **eerste cijfer** is altijd 1 minder dan wat je vermenigvuldigt.\n\n**Vingertruc voor 9-tafel**:\n1. Houd je 10 vingers omhoog.\n2. Wil je 4 × 9? Buig vinger nummer 4 *(van links)*.\n3. Aan de **linkerkant van die vinger**: aantal vingers = **eerste cijfer** *(3)*.\n4. Aan de **rechterkant**: aantal vingers = **tweede cijfer** *(6)*.\n5. 4 × 9 = **36**. ✓\n\n**Slimme verdeel-truc**:\n• **7 × 8** = (7 × 10) − (7 × 2) = 70 − 14 = **56**.\n• **8 × 6** = (8 × 5) + 8 = 40 + 8 = **48**.\n• **9 × 7** = (10 × 7) − 7 = 70 − 7 = **63**.\n\n**Onthoud-tip**:\n• 7 × 7 = **49** *(zeg het hardop een paar keer)*.\n• 8 × 8 = **64** *(als een rijmpje)*.\n• 6 × 7 = **42** (Douglas Adams: 'het antwoord op alles').",
    svg: tafelRijSvg([7, 14, 21, 28, 35, 42, 49, 56, 63, 70], "7"),
    checks: [
      {
        q: "**6 × 7** = ?",
        options: ["42", "13", "67", "36"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Niet juist."],
      },
      {
        q: "**8 × 7** = ?",
        options: ["56", "15", "87", "48"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 6 × 8."],
        uitlegPad: {
          stappen: [
            { titel: "8 × 7 — een lastige", tekst: "8 × 7 is een van de **lastigste** tafel-sommen. Bijna iedereen vergeet 'm soms. Gelukkig zijn er trucjes." },
            { titel: "Truc 1 — via tafel-10", tekst: "**8 × 7** = (8 × 10) − (8 × 3) = 80 − 24 = **56**.\nOf: **8 × 7** = (10 × 7) − (2 × 7) = 70 − 14 = **56**.\nBeide werken!" },
            { titel: "Truc 2 — splitsen", tekst: "**8 × 7** = (8 × 5) + (8 × 2) = 40 + 16 = **56**.\nDe 5-tafel en 2-tafel zijn makkelijke tafels — gebruik ze als hulp." },
          ],
          woorden: [
            { woord: "splitsen", uitleg: "Eén grote som in 2 kleinere makkelijkere stukken delen." },
          ],
          theorie: "Toets-onthoud-tip: '8 × 7 = 56' — zeg het hardop, als een rijmpje. Of: **'56 = 7 × 8'** (5-6 in volgorde komt vóór 7-8). Sommige juffen leren dit als 'mooie reeks': 5-6-7-8.",
          voorbeelden: [
            { type: "stap", tekst: "Met wisselregel: 8 × 7 = 7 × 8. Zeg het zoals jij het makkelijkst onthoudt." },
            { type: "stap", tekst: "Niet 48 (= 6 × 8 of 8 × 6). Niet 64 (= 8 × 8). Goed: **56**." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Top-3 lastige tafel-sommen: 7×8=56, 7×9=63, 8×9=72. Leer deze 3 expliciet — ze komen op de Doorstroomtoets vaak terug." }],
          niveaus: {
            basis: "56.",
            simpeler: "8 × 7 = (8 × 10) − (8 × 3) = 80 − 24 = 56.",
            nogSimpeler: "56",
          },
        },
      },
      {
        q: "**9 × 6** = ?",
        options: ["54", "15", "96", "45"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 9 × 5."],
      },
      {
        q: "**8 × 8** = ?",
        options: ["64", "16", "88", "48"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 6 × 8."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**9 × 7** = ?",
        options: ["63", "16", "56", "72"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          null,
          "Eén stap te veel — tel eens hoe vaak je 9 optelt.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Via de tafel van 10",
              tekst: "10 × 7 = 70. Je hebt één 7 te veel, dus 70 − 7 = **63**.",
            },
            {
              titel: "Check met de 9-truc",
              tekst: "6 + 3 = 9 ✓. En het eerste cijfer (6) is 1 minder dan 7 ✓.",
            },
            {
              titel: "Rijtje",
              tekst: "Tafel van 9: 9, 18, 27, 36, 45, 54, **63**. Dat is de 7e.",
            },
          ],
          woorden: [
            {
              woord: "tafel van 9",
              uitleg: "9, 18, 27, 36, 45, 54, 63, 72, 81, 90.",
            },
          ],
          theorie: "Toets-truc: 9 keer iets = 10 keer dat iets, min één keer dat iets.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9 × 4 = 40 − 4 = 36.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "9-truc",
              uitleg: "De cijfers van het antwoord tellen op tot 9.",
            },
          ],
          niveaus: {
            basis: "9 × 7 = 63.",
            simpeler: "70 − 7 = 63.",
            nogSimpeler: "63",
          },
        },
      },
      {
        q: "**6 × 6** = ?",
        options: ["36", "12", "30", "42"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          "Eén stap te weinig — tel eens hoe vaak je 6 optelt.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tafel van 6",
              tekst: "Tel in stappen van 6: 6, 12, 18, 24, 30, **36**. Dat waren 6 stapjes.",
            },
            {
              titel: "Via de tafel van 5",
              tekst: "5 × 6 = 30. Eén 6 erbij: 30 + 6 = **36**.",
            },
            {
              titel: "Onthoud",
              tekst: "6 × 6 = 36 is een 'dubbele' som — net als 7 × 7 = 49 en 8 × 8 = 64.",
            },
          ],
          woorden: [
            {
              woord: "tafel van 6",
              uitleg: "6, 12, 18, 24, 30, 36, 42, 48, 54, 60.",
            },
          ],
          theorie: "Toets-truc: weet je 5 × een getal? Tel er dan één keer dat getal bij voor 6 ×.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 × 4: 5 × 4 = 20, + 4 = 24.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Sommen met twee dezelfde getallen kun je los uit je hoofd leren.",
            },
          ],
          niveaus: {
            basis: "6 × 6 = 36.",
            simpeler: "30 + 6 = 36.",
            nogSimpeler: "36",
          },
        },
      },
      {
        q: "Welk getal hoort **niet** bij de tafel van 9?",
        options: ["56", "45", "72", "18"],
        answer: 0,
        wrongHints: [
          null,
          "Tel de twee cijfers van elk getal bij elkaar op. Wat komt er bij de tafel van 9 altijd uit?",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "De 9-truc",
              tekst: "Bij de tafel van 9 tellen de **cijfers van het antwoord op tot 9**.",
            },
            {
              titel: "Controleer elk getal",
              tekst: "4 + 5 = 9 ✓. 7 + 2 = 9 ✓. 1 + 8 = 9 ✓. Maar 5 + 6 = **11** ✗.",
            },
            {
              titel: "Conclusie",
              tekst: "**56** hoort dus niet bij de tafel van 9. (56 zit wel in de tafel van 7 en 8.)",
            },
          ],
          woorden: [
            {
              woord: "tafel van 9",
              uitleg: "9, 18, 27, 36, 45, 54, 63, 72, 81, 90.",
            },
          ],
          theorie: "Toets-truc: tel de cijfers op. Komt er geen 9 uit? Dan hoort het getal niet bij de tafel van 9 (tot 10 × 9).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "63: 6 + 3 = 9 ✓. 64: 6 + 4 = 10 ✗.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "9-truc",
              uitleg: "Cijfers samen = 9.",
            },
          ],
          niveaus: {
            basis: "56 — want 5 + 6 = 11, geen 9.",
            simpeler: "Tel de cijfers op: alleen bij 56 komt er geen 9 uit.",
            nogSimpeler: "56",
          },
        },
      },
      {
        q: "Een week heeft **7 dagen**. Hoeveel dagen zijn **3 weken**?",
        options: ["21 dagen", "10 dagen", "14 dagen", "28 dagen"],
        answer: 0,
        wrongHints: [null, "Je hebt 3 en 7 opgeteld. Maar elke week heeft 7 dagen.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat weet je?",
              tekst: "Er zijn **3 weken**. Elke week heeft **7 dagen**.",
            },
            {
              titel: "Maak een keersom",
              tekst: "3 weken van 7 dagen = **3 × 7**.",
            },
            {
              titel: "Reken uit",
              tekst: "Tafel van 7: 7, 14, **21**. Samen 21 dagen.",
            },
          ],
          woorden: [
            {
              woord: "tafel van 7",
              uitleg: "7, 14, 21, 28, 35, 42, 49, 56, 63, 70.",
            },
          ],
          theorie: "Toets-truc: 3 × 7 = 7 × 3. Tel 7 + 7 + 7 = 21.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 weken = 2 × 7 = 14 dagen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verhaaltjes-som",
              uitleg: "Weken × 7 = aantal dagen.",
            },
          ],
          niveaus: {
            basis: "3 × 7 = 21 dagen.",
            simpeler: "7, 14, 21 — drie weken.",
            nogSimpeler: "21",
          },
        },
      },
    ],
  },

  // STAP 5: Slimme trucs
  {
    title: "Slimme tafel-trucs",
    explanation:
      "Je hoeft tafels niet **uit het hoofd te kennen** als je **trucjes** kunt gebruiken.\n\n**Truc 1 — Wisselregel** *(volgorde wisselen)*:\n3 × 7 = 7 × 3. Kies de versie die jij makkelijker vindt.\n\n**Truc 2 — Splitsen**:\nGroot getal splitsen in kleinere delen.\n• **7 × 12** = 7 × (10 + 2) = (7 × 10) + (7 × 2) = 70 + 14 = **84**.\n• **8 × 13** = (8 × 10) + (8 × 3) = 80 + 24 = **104**.\n• **6 × 25** = (6 × 20) + (6 × 5) = 120 + 30 = **150**.\n\n**Truc 3 — Via tafel-10**:\nTafel-10 is makkelijkst. Werk daar omheen.\n• **9 × n** = (10 × n) − n.\n• **11 × n** = (10 × n) + n.\n• **15 × n** = (10 × n) + (5 × n).\n\n**Truc 4 — Verdubbelen**:\n• 4 × n = (2 × n) × 2.\n• 8 × n = (4 × n) × 2 = ((2 × n) × 2) × 2.\n\n**Truc 5 — Helft + helft**:\n• 5 × n = (10 × n) ÷ 2.\n• Bv: 5 × 24 = (10 × 24) ÷ 2 = 240 ÷ 2 = **120**.\n\n**Truc 6 — Bekende dingen herkennen**:\n• 9 × 9 = **81**.\n• 8 × 8 = **64**.\n• 7 × 7 = **49**.\n• 6 × 6 = **36**.\n• 5 × 5 = **25**.\n• 12 × 12 = 144.\n\n**Toets-tip — vertrouwen op trucs**:\nAls je een tafel echt niet weet, gebruik een truc. Schrijf op kladpapier wat je deed. Sneller dan blind gokken.",
    checks: [
      {
        q: "**7 × 12** = ? *(via splitsen)*",
        options: ["84", "19", "712", "78"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Niet juist."],
      },
      {
        q: "**9 × 8** = ? *(via 10×8 − 8)*",
        options: ["72", "17", "98", "63"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 9 × 7."],
      },
      {
        q: "**5 × 18** = ? *(via 10×18 ÷ 2)*",
        options: ["90", "23", "518", "85"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Net niet."],
      },
      {
        q: "**6 × 25** = ? *(via splitsen)*",
        options: ["150", "31", "625", "100"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Net niet."],
        uitlegPad: {
          stappen: [
            { titel: "Waarom splitsen?", tekst: "**25** zit niet in de gewone tafels (1 t/m 10). Maar je kunt 25 splitsen in delen die je WEL kent: **20 + 5**." },
            { titel: "Stap 1 — splits 25", tekst: "**6 × 25** = 6 × (20 + 5) = (6 × 20) + (6 × 5). Het is alsof je 25 in 2 zakjes verdeelt: een zakje van 20 en een zakje van 5. Voor elk reken je apart, daarna optellen." },
            { titel: "Stap 2 — reken de delen", tekst: "**6 × 20** = 6 × 2 × 10 = 12 × 10 = **120**.\n**6 × 5** = **30**.\nTotaal: **120 + 30 = 150**." },
          ],
          woorden: [
            { woord: "splitsen", uitleg: "Een getal opdelen in 2 makkelijkere getallen." },
            { woord: "× 25", uitleg: "= × 20 + × 5 (splitsen) OF = × 100 ÷ 4 (kwart van 100)." },
          ],
          theorie: "Toets-truc voor ×25: er is ook een **trucje** — × 25 = ÷ 4 × 100. Bv: 6 × 25 = 6 ÷ 4 × 100 = 1,5 × 100 = 150. Maar splitsen werkt altijd, ook bij rare getallen. Begin met splitsen.",
          voorbeelden: [
            { type: "stap", tekst: "**8 × 25** via splitsen: (8 × 20) + (8 × 5) = 160 + 40 = 200." },
            { type: "stap", tekst: "**4 × 15** via splitsen: (4 × 10) + (4 × 5) = 40 + 20 = 60." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Splits het lastige getal in een **tien-deel** (× 10, 20, 30...) + een **rest-deel** (× 1, 2, 3, 5...). Tel apart, dan optellen." }],
          niveaus: {
            basis: "150.",
            simpeler: "6 × 25 = 6 × 20 + 6 × 5 = 120 + 30 = 150.",
            nogSimpeler: "150",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**6 × 13** = ? *(via splitsen)*",
        options: ["78", "19", "68", "613"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          "Splits 13 in 10 en 3. Hoeveel is 6 × 3 ook alweer?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Splitsen",
              tekst: "Splits **13** in **10 + 3**.",
            },
            {
              titel: "Twee kleine sommen",
              tekst: "6 × 10 = 60. 6 × 3 = 18.",
            },
            {
              titel: "Optellen",
              tekst: "60 + 18 = **78**.",
            },
          ],
          woorden: [
            {
              woord: "splitsen",
              uitleg: "Een groot getal in kleinere stukken verdelen.",
            },
          ],
          theorie: "Toets-truc: splits het grote getal in tientallen en eenheden. Reken elk stuk apart en tel op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7 × 12 = (7 × 10) + (7 × 2) = 70 + 14 = 84.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Splits altijd in 10 + rest — keer 10 is het makkelijkst.",
            },
          ],
          niveaus: {
            basis: "6 × 13 = 60 + 18 = 78.",
            simpeler: "6 × 10 = 60, 6 × 3 = 18, samen 78.",
            nogSimpeler: "78",
          },
        },
      },
      {
        q: "**11 × 7** = ? *(via 10 × 7 + 7)*",
        options: ["77", "18", "70", "711"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          "Dit is 10 × 7. Moet er nog iets bij?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Via de tafel van 10",
              tekst: "**11 × n** = (10 × n) + n.",
            },
            {
              titel: "Toepassen",
              tekst: "10 × 7 = 70. Plus één 7 erbij: 70 + 7 = **77**.",
            },
            {
              titel: "Check",
              tekst: "11 keer 7 = 10 keer 7 en nog 1 keer 7. Klopt!",
            },
          ],
          woorden: [
            {
              woord: "tafel van 10",
              uitleg: "De makkelijkste tafel: 0 erachter.",
            },
          ],
          theorie: "Toets-truc: 11 keer iets = 10 keer dat iets, plus nog één keer dat iets.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "11 × 4 = 40 + 4 = 44.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Werk vanuit de tafel van 10.",
            },
          ],
          niveaus: {
            basis: "11 × 7 = 70 + 7 = 77.",
            simpeler: "10 × 7 = 70, plus 7 = 77.",
            nogSimpeler: "77",
          },
        },
      },
      {
        q: "**5 × 14** = ? *(via 10 × 14 ÷ 2)*",
        options: ["70", "19", "60", "140"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          null,
          "Dit is 10 × 14. Wat moet je daarna nog doen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Helft-truc",
              tekst: "**5 × n** = (10 × n) ÷ 2.",
            },
            {
              titel: "Eerst keer 10",
              tekst: "10 × 14 = 140.",
            },
            {
              titel: "Dan de helft",
              tekst: "140 ÷ 2 = **70**.",
            },
          ],
          woorden: [
            {
              woord: "helft",
              uitleg: "Iets in 2 gelijke delen verdelen.",
            },
          ],
          theorie: "Toets-truc: keer 5 is de helft van keer 10. Eerst een 0 erachter, dan halveren.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5 × 24 = 240 ÷ 2 = 120.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "5 is de helft van 10.",
            },
          ],
          niveaus: {
            basis: "5 × 14 = 140 ÷ 2 = 70.",
            simpeler: "14 met 0 erachter = 140. De helft = 70.",
            nogSimpeler: "70",
          },
        },
      },
      {
        q: "**4 × 15** = ? *(via verdubbelen)*",
        options: ["60", "19", "30", "45"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld in plaats van vermenigvuldigd.",
          "Dit is 2 × 15. Hoe vaak moet je verdubbelen bij keer 4?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Verdubbel-truc",
              tekst: "**4 × n** = (2 × n) × 2. Dus twee keer verdubbelen.",
            },
            {
              titel: "Eerste keer verdubbelen",
              tekst: "2 × 15 = 15 + 15 = 30.",
            },
            {
              titel: "Tweede keer verdubbelen",
              tekst: "30 × 2 = 30 + 30 = **60**.",
            },
          ],
          woorden: [
            {
              woord: "verdubbelen",
              uitleg: "Een getal bij zichzelf optellen.",
            },
          ],
          theorie: "Toets-truc: keer 4 = verdubbelen en nog een keer verdubbelen. 15 → 30 → 60.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 × 12: 12 → 24 → 48.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Keer 4 = 2 keer verdubbelen. Keer 8 = 3 keer verdubbelen.",
            },
          ],
          niveaus: {
            basis: "4 × 15 = 60.",
            simpeler: "15 + 15 = 30, 30 + 30 = 60.",
            nogSimpeler: "60",
          },
        },
      },
      {
        q: "Je rekent **8 × 12** uit met **splitsen**. Welke som klopt?",
        options: ["(8 × 10) + (8 × 2)", "(8 × 10) + 2", "(8 × 1) + (8 × 2)", "(8 + 10) × 2"],
        answer: 0,
        wrongHints: [null, "Je moet élk stuk keer 8 doen. Ook de 2?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Splits 12",
              tekst: "**12** = **10 + 2**.",
            },
            {
              titel: "Allebei de stukken keer 8",
              tekst: "8 × 10 = 80 en 8 × 2 = 16.",
            },
            {
              titel: "Optellen",
              tekst: "80 + 16 = **96**. Dus (8 × 10) + (8 × 2) = 96 = 8 × 12.",
            },
          ],
          woorden: [
            {
              woord: "splitsen",
              uitleg: "Een groot getal in kleinere stukken verdelen.",
            },
          ],
          theorie: "Toets-truc: na het splitsen doe je **elk stuk** keer hetzelfde getal. Vergeet er geen!",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 × 13 = (6 × 10) + (6 × 3) = 60 + 18 = 78.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Splits in 10 + rest, keer elk stuk, tel op.",
            },
          ],
          niveaus: {
            basis: "(8 × 10) + (8 × 2) = 96.",
            simpeler: "80 + 16 = 96. Elk stuk keer 8.",
            nogSimpeler: "(8 × 10) + (8 × 2)",
          },
        },
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — tafel-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Alle tafels door elkaar + redactiesommen.\n\nVeel succes!",
    checks: [
      {
        q: "**6 × 7** = ?",
        options: ["42", "13", "67", "48"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 6 × 8."],
      },
      {
        q: "**9 × 9** = ?",
        options: ["81", "18", "99", "72"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 8 × 9."],
      },
      {
        q: "**8 × 5** = ?",
        options: ["40", "13", "85", "35"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 7 × 5."],
      },
      {
        q: "**4 zakjes** met **7 koekjes** per zakje. Totaal?",
        options: ["28 koekjes", "11 koekjes", "47 koekjes", "21 koekjes"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 3 × 7."],
      },
      {
        q: "**5 boeken** van **€7** elk. **Totaalprijs**?",
        options: ["€35", "€12", "€57", "€28"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 4 × 7."],
      },
      {
        q: "Welke tafel-uitkomst is **fout**?",
        options: ["7 × 8 = 54", "6 × 6 = 36", "9 × 4 = 36", "8 × 7 = 56"],
        answer: 0,
        wrongHints: [null, "Probeer 6 × 6 zelf even uit te rekenen.", "Reken 9 × 4 stap voor stap na.", "Reken 8 × 7 stap voor stap na."],
      },
      { q: "3 × 4 = ?", options: ["12","7","9","16"], answer: 0, wrongHints: [null, "Som.", "Niet.", "Niet."] },
      { q: "5 × 6 = ?", options: ["30","11","25","36"], answer: 0, wrongHints: [null, "Som.", "5×5.", "6×6."] },
      { q: "7 × 7 = ?", options: ["49","14","42","56"], answer: 0, wrongHints: [null, "Niet — × niet +.", "Niet.", "Niet."] },
      { q: "8 × 9 = ?", options: ["72","17","81","56"], answer: 0, wrongHints: [null, "Som.", "9×9.", "Niet."] },
      { q: "6 × 7 = ?", options: ["42","13","36","49"], answer: 0, wrongHints: [null, "Som.", "Niet.", "Niet."] },
      { q: "4 × 8 = ?", options: ["32","12","36","48"], answer: 0, wrongHints: [null, "Som.", "Niet.", "Te veel."] },
      { q: "Welke is tafel van **9**? 9 × 6 = ?", options: ["54","56","45","63"], answer: 0, wrongHints: [null, "Niet.", "Cijfers gehusseld.", "9×7."] },
      { q: "10 × 8 = ?", options: ["80","18","100","800"], answer: 0, wrongHints: [null, "Som.", "10×10.", "Te veel."] },
      { q: "2 × 12 = ?", options: ["24","14","20","6"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Helft."] },
      { q: "Tafel-truc: 5 × even getal eindigt op?", options: ["0","5","1","2"], answer: 0, wrongHints: [null, "Bij oneven.", "Niet.", "Niet."] },
      { q: "Welke truc helpt bij **9-tafel**?", options: ["Elke stap: tientallen +1, eenheden −1","Elke stap: tientallen −1, eenheden +1","Er is geen truc","Alles gewoon uit je hoofd leren"], answer: 0, wrongHints: [null, "Andersom: van 9 naar 18 gaat het tiental omhoog (0 → 1) en de eenheid omlaag (9 → 8).", "Er is wel een handige truc — kijk naar 9, 18, 27.", "Uit je hoofd mag, maar de truc helpt je controleren."] },
      { q: "6 × 8 = ?", options: ["48","14","56","42"], answer: 0, wrongHints: [null, "Som.", "7×8.", "6×7."] },
      { q: "11 × 11 = ?", options: ["121","111","112","144"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "12×12."] },
      { q: "12 × 4 = ?", options: ["48","16","44","36"], answer: 0, wrongHints: [null, "Som.", "Niet.", "12×3."] },
    ],
  },
  // G. Oefenronde (11 aug 2026, zelfde didactiek als topografie "Ken ze alle 12"):
  // typ het antwoord; in één keer goed = gekend; mis = som komt later terug.
  {
    title: "Oefen ze allemaal!",
    explanation:
      "Nu je de trucs kent: **echt oefenen**, net zolang tot je ze kent.\n\n" +
      "Je krijgt **12 keersommen** door elkaar. Typ het antwoord:\n" +
      "• In **één keer goed** → ✔ die ken je!\n" +
      "• **Mis?** Je krijgt een hint en mag het nog eens proberen — en die som komt straks nog een keer terug.\n\n" +
      "Klaar als je ze **allemaal** in één keer goed hebt. Genoeg geoefend? Stoppen mag altijd.",
    interactiveComponent: makeRekenOefenRonde({ soort: "keer", aantal: 12, emoji: "✖️", meervoud: "keersommen", jong: true }),
    checks: [
      { q: "7 × 8 = ?", options: ["56","54","48","63"], answer: 0, wrongHints: [null, "Dat is 6×9.", "Dat is 6×8.", "Dat is 7×9."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const tafelsPo = {
  id: "tafels-po",
  title: "Vermenigvuldigingstafels (groep 4-5)",
  emoji: "✖️",
  level: "groep4-5",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen — vermenigvuldigingstafels (basisfundament)",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Tafels 1 t/m 10 voor groep 4-5 — wat is een tafel, makkelijke (2/5/10), basis (3/4), lastig (6/7/8/9), slimme trucs (splitsen, 9-truc, verdubbelen). ~15 min.",
  triggerKeywords: [
    "tafel", "tafels", "vermenigvuldigen", "keer",
    "maaltafels", "splitsen", "9-truc",
  ],
  chapters,
  steps,
};

export default tafelsPo;

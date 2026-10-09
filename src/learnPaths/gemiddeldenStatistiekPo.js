// Leerpad: Gemiddelde / modus / mediaan — groep 7-8 PO.
// Toets-onderdeel statistiek/verwerken informatie. Referentieniveau 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  bar: "#69f0ae",
  bar2: "#80cbc4",
  bar3: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  highlight: "#ffd54f",
  accent: "#ff8a65",
};

const stepEmojis = ["⚖️", "🧮", "🏆", "🎯", "🤔", "🏁"];

const chapters = [
  { letter: "A", title: "Wat is een gemiddelde?", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Gemiddelde uitrekenen", emoji: "🧮", from: 1, to: 1 },
  { letter: "C", title: "Modus", emoji: "🏆", from: 2, to: 2 },
  { letter: "D", title: "Mediaan", emoji: "🎯", from: 3, to: 3 },
  { letter: "E", title: "Wanneer wat gebruiken?", emoji: "🤔", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏁", from: 5, to: 5 },
];

function getalRijSvg(getallen, gemiddelde, label) {
  const w = 320, h = 130, padL = 30, padR = 42; // padR ruim genoeg voor het "gem N"-label rechts
  const max = Math.max(...getallen);
  const stepX = (w - padL - padR) / getallen.length;
  let dots = "";
  let labels = "";
  getallen.forEach((g, i) => {
    const x = padL + (i + 0.5) * stepX;
    const y = h - 30 - ((h - 70) * g) / max;
    dots += `<circle cx="${x}" cy="${y}" r="6" fill="${COLORS.bar3}" stroke="${COLORS.curve}" stroke-width="1.2"/>`;
    dots += `<text x="${x}" y="${y - 10}" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">${g}</text>`;
    labels += `<text x="${x}" y="${h - 10}" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">${i + 1}</text>`;
  });
  const gemY = h - 30 - ((h - 70) * gemiddelde) / max;
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="18" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">${label}</text>
<line x1="${padL}" y1="${gemY}" x2="${w - padR}" y2="${gemY}" stroke="${COLORS.accent}" stroke-width="1.5" stroke-dasharray="4,3"/>
<text x="${w - padR + 2}" y="${gemY + 4}" fill="${COLORS.accent}" font-size="11" font-family="Arial" font-weight="bold">gem ${gemiddelde}</text>
${dots}
${labels}
<line x1="${padL}" y1="${h - 28}" x2="${w - padR}" y2="${h - 28}" stroke="${COLORS.curve}" stroke-width="1"/>
</svg>`;
}

function modusSvg() {
  // Visualisatie: rij van getallen, modus geel highlight
  const getallen = [3, 5, 4, 5, 6, 5, 7];
  const w = 320, h = 100;
  const cellW = 38, padL = 30;
  let cells = "";
  getallen.forEach((g, i) => {
    const x = padL + i * cellW;
    const isModus = g === 5;
    cells += `<rect x="${x}" y="38" width="${cellW - 4}" height="38" fill="${isModus ? COLORS.bar3 : COLORS.bar2}" stroke="${COLORS.curve}" stroke-width="1"/>`;
    cells += `<text x="${x + cellW / 2 - 2}" y="62" text-anchor="middle" fill="${isModus ? "#0e1014" : COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">${g}</text>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Modus: 5 komt 3× voor (meest)</text>
${cells}
<text x="${w / 2}" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">3, 5, 4, 5, 6, 5, 7</text>
</svg>`;
}

function mediaanSvg() {
  // gesorteerde rij, middelste geel
  const getallen = [3, 4, 5, 6, 7, 8, 9];
  const w = 320, h = 100;
  const cellW = 38, padL = 30;
  let cells = "";
  getallen.forEach((g, i) => {
    const x = padL + i * cellW;
    const isMed = i === 3;
    cells += `<rect x="${x}" y="38" width="${cellW - 4}" height="38" fill="${isMed ? COLORS.bar3 : COLORS.bar2}" stroke="${COLORS.curve}" stroke-width="1"/>`;
    cells += `<text x="${x + cellW / 2 - 2}" y="62" text-anchor="middle" fill="${isMed ? "#0e1014" : COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">${g}</text>`;
  });
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Mediaan: 6 (middelste van 7 getallen)</text>
${cells}
<text x="${w / 2}" y="94" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">Op volgorde: 3, 4, 5, 6, 7, 8, 9</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is een gemiddelde?
  {
    title: "Wat is een gemiddelde?",
    explanation:
      "Het **gemiddelde** is een getal dat zegt wat **'in het midden'** ligt van een groep getallen. Het geeft een idee van hoe een groep er ongeveer uitziet.\n\n**Voorbeeld in het echt**:\n• Je hebt 3 kinderen met cijfers **6, 8, 7**.\n• Gemiddelde = (6 + 8 + 7) ÷ 3 = 21 ÷ 3 = **7**.\n• Dus: 'de klas haalt **gemiddeld een 7**'.\n\nHet gemiddelde is **geen werkelijk cijfer** dat iemand haalde. Het is een **berekening**. Het zegt hoe de groep ongeveer presteert.\n\n**Wanneer kom je een gemiddelde tegen?**:\n• Cijfers op school: gemiddeld rapportcijfer.\n• Sport: gemiddeld aantal punten per wedstrijd.\n• Weer: gemiddelde temperatuur per maand.\n• Klas: gemiddelde lengte van leerlingen.\n\n**Belangrijke regel**:\nHet gemiddelde ligt **tussen het laagste en het hoogste getal**. Als je 6, 7, 8 hebt, kan het gemiddelde nooit 3 of 12 zijn — alleen iets tussen 6 en 8.",
    checks: [
      {
        q: "Wat is een **gemiddelde**?",
        options: ["Een berekening die laat zien wat 'in het midden' ligt", "Het hoogste getal dat in de groep voorkomt", "Het laagste getal dat in de groep voorkomt", "Het getal dat in de groep het vaakst voorkomt"],
        answer: 0,
        wrongHints: [null, "Dat is het maximum, niet het gemiddelde.", "Dat is het minimum.", "Dat is de modus, niet het gemiddelde."],
      },
      {
        q: "Een gemiddelde ligt altijd tussen het kleinste en het grootste getal. Welk getal kan dus **nooit** het gemiddelde van een rij tussen **5 en 9** zijn?",
        options: ["3", "6", "7", "8"],
        answer: 0,
        wrongHints: [null, "6 ligt tussen 5 en 9 — dat kán het gemiddelde zijn (bv. van 5 en 7).", "7 ligt tussen 5 en 9 — dat kán (bv. van 5, 7 en 9).", "8 ligt tussen 5 en 9 — dat kán (bv. van 7 en 9)."],
        uitlegPad: {
          stappen: [
            { titel: "Tussen min en max", tekst: "Gemiddelde ligt altijd tussen het laagste (5) en het hoogste (9) getal. 3 ligt eronder. 6/7/8 liggen ertussen, dus die kunnen wél." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Het 'middel-getal' van een groep — niet het kleinste, niet het grootste." }],
          theorie: "Een gemiddelde ligt nooit onder de minimum-waarde of boven de maximum-waarde.",
          voorbeelden: [{ type: "stap", tekst: "5, 7, 9 → gem = 21/3 = 7. Inderdaad tussen 5 en 9." }],
          basiskennis: [{ onderwerp: "Check je antwoord", uitleg: "Als je gemiddelde lager dan het laagste of hoger dan het hoogste is — fout!" }],
          niveaus: {
            basis: "3 ligt onder de minimum (5). Dus 3 kan niet.",
            simpeler: "Laagste = 5, hoogste = 9. Gemiddelde moet daar tussenin liggen. 3 ligt eronder, dus 3 kan niet.",
            nogSimpeler: "3",
          },
        },
      },
      {
        q: "Welke zin **klopt** over een gemiddelde?",
        options: ["Het is een berekening, geen 'echt' cijfer", "Het is altijd een rond getal", "Het is altijd hetzelfde als de modus", "Het is altijd het hoogste"],
        answer: 0,
        wrongHints: [null, "Niet altijd — een gemiddelde kan ook 6,5 zijn.", "Modus en gemiddelde zijn vaak verschillend.", "Het ligt tussen laagste en hoogste, niet automatisch het hoogste."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk zinnetje gaat over een **gemiddelde**?",
        options: [
          "In juli was het hier per dag ongeveer 22 graden",
          "Op maandag was het 25 graden",
          "De warmste dag van juli was 31 graden",
          "In juli kwam 20 graden het vaakst voor",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dit gaat over één dag. Gaat een gemiddelde over één dag of over een hele groep dagen?",
          null,
          "Het getal dat het vaakst voorkomt heeft een andere naam.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eén getal of een groep?",
              tekst: "Een gemiddelde gaat over een hele groep getallen, hier alle dagen van juli.",
            },
            {
              titel: "Ongeveer",
              tekst: "'Per dag ongeveer 22 graden' zegt hoe warm het in die maand meestal was. Dat is een gemiddelde.",
            },
          ],
          woorden: [
            {
              woord: "gemiddelde",
              uitleg: "Alle getallen opgeteld en dan gedeeld door hoeveel getallen het zijn.",
            },
          ],
          theorie: "Een gemiddelde zegt iets over een hele groep, zoals alle dagen van een maand.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Het weerbericht noemt vaak de gemiddelde temperatuur van een maand.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Warmste ≠ gemiddeld",
              uitleg: "De warmste dag is het hoogste getal. Het vaakst is de modus. Het gemiddelde is iets anders.",
            },
          ],
          niveaus: {
            basis: "'Per dag ongeveer 22 graden' gaat over alle dagen samen.",
            simpeler: "Een gemiddelde gaat over veel dagen samen, niet over één dag. Dat past bij 'per dag ongeveer 22 graden'.",
            nogSimpeler: "Ongeveer 22 graden per dag",
          },
        },
      },
      {
        q: "Over wie zegt het **gemiddelde** rapportcijfer van een klas iets?",
        options: [
          "Over de hele klas samen",
          "Over het kind met het hoogste cijfer",
          "Over het kind met het laagste cijfer",
          "Over het kind dat als eerste klaar was",
        ],
        answer: 0,
        wrongHints: [null, "Telt alleen dat ene kind mee als je een gemiddelde uitrekent?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Iedereen telt mee",
              tekst: "Bij een gemiddelde tel je de cijfers van álle kinderen op en deel je door het aantal kinderen.",
            },
            {
              titel: "De groep",
              tekst: "Daarom zegt het gemiddelde iets over de hele klas samen.",
            },
          ],
          woorden: [
            {
              woord: "gemiddelde",
              uitleg: "Alle getallen opgeteld en dan gedeeld door hoeveel getallen het zijn.",
            },
          ],
          theorie: "Een gemiddelde zegt hoe een groep er ongeveer uitziet.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Cijfers 6, 8 en 7 → (6 + 8 + 7) ÷ 3 = 7. Alle drie de kinderen tellen mee.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Groep, niet één kind",
              uitleg: "Het gemiddelde hoort bij de groep. Het hoogste of laagste cijfer hoort bij één kind.",
            },
          ],
          niveaus: {
            basis: "Over de hele klas samen.",
            simpeler: "Alle cijfers tellen mee. Dus het gemiddelde zegt iets over de hele klas.",
            nogSimpeler: "De hele klas",
          },
        },
      },
    ],
  },

  // STAP 2: Gemiddelde uitrekenen
  {
    title: "Gemiddelde uitrekenen — som ÷ aantal",
    explanation:
      "**Formule** *(uit je hoofd leren!)*:\n\n**Gemiddelde = som van alle getallen ÷ aantal getallen**\n\n**Stappenplan**:\n1. **Tel alle getallen op** (de som).\n2. **Tel hoeveel getallen** je hebt (het aantal).\n3. **Deel** de som door het aantal.\n\n**Voorbeeld 1 — toets-cijfers**:\nLisa heeft 4 toetsen: **6, 7, 8, 7**.\n• Stap 1: som = 6 + 7 + 8 + 7 = **28**.\n• Stap 2: aantal = **4 toetsen**.\n• Stap 3: gemiddelde = 28 ÷ 4 = **7**.\n→ Gemiddeld cijfer Lisa = **7**.\n\n**Voorbeeld 2 — temperatuur**:\nWeek temperaturen: 18°C, 20°C, 22°C, 19°C, 21°C *(5 dagen)*.\n• Som = 18 + 20 + 22 + 19 + 21 = **100 °C**.\n• Aantal = **5**.\n• Gemiddelde = 100 ÷ 5 = **20 °C**.\n\n**Voorbeeld 3 — zakgeld**:\n4 vrienden krijgen €5, €4, €6, €5 per week.\n• Som = €5 + €4 + €6 + €5 = **€20**.\n• Aantal = **4**.\n• Gemiddelde = €20 ÷ 4 = **€5 per persoon**.\n\n**Toets-truc — check je antwoord**:\nJe gemiddelde **moet tussen het laagste en hoogste getal liggen**. Als je 6/7/8/7 hebt en je antwoord is 12 → fout, want 12 is hoger dan alle getallen.",
    svg: getalRijSvg([6, 7, 8, 7], 7, "Cijfers Lisa — gem 7"),
    checks: [
      {
        q: "Cijfers: **6, 7, 8, 7**. Wat is het **gemiddelde**?",
        options: ["7", "6", "8", "28"],
        answer: 0,
        wrongHints: [null, "Te weinig — controleer je optelling én je deling.", "Te veel — controleer de optelling.", "Dat is de som, niet het gemiddelde. Nog door 4 delen."],
        uitlegPad: {
          stappen: [
            { titel: "Som / aantal", tekst: "Som = 6+7+8+7 = 28. Aantal = 4 cijfers. Gemiddelde = 28 ÷ 4 = 7." },
          ],
          woorden: [{ woord: "som", uitleg: "Alles bij elkaar opgeteld." }, { woord: "aantal", uitleg: "Hoeveel getallen je hebt." }],
          theorie: "Gemiddelde = som ÷ aantal. Werkt altijd.",
          voorbeelden: [{ type: "stap", tekst: "Stap 1: 6+7+8+7 = 28. Stap 2: 4 cijfers. Stap 3: 28 ÷ 4 = 7." }],
          basiskennis: [{ onderwerp: "Niet alleen optellen", uitleg: "Som is pas de eerste stap. Daarna nog delen." }],
          niveaus: {
            basis: "(6+7+8+7) ÷ 4 = 28 ÷ 4 = 7.",
            simpeler: "Tel cijfers op: 6+7+8+7 = 28. Deel door aantal: 28 ÷ 4 = 7. Gemiddeld een 7.",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "Temperaturen: **18, 20, 22, 19, 21 °C**. Gemiddelde temperatuur?",
        options: ["20 °C", "18 °C", "100 °C", "22 °C"],
        answer: 0,
        wrongHints: [null, "Dat is de laagste, niet het gemiddelde.", "Dat is de som — nog ÷ 5 doen.", "Dat is de hoogste, niet het gemiddelde."],
        uitlegPad: {
          stappen: [
            { titel: "Som", tekst: "18 + 20 + 22 + 19 + 21 = **100 °C**." },
            { titel: "Aantal", tekst: "**5** dagen." },
            { titel: "Delen", tekst: "Gemiddelde = 100 ÷ 5 = **20 °C**." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Som van alle waarden gedeeld door aantal waarden." }],
          theorie: "Toets-check: gemiddelde 20 ligt tussen laagste 18 en hoogste 22 → klopt qua range.",
          voorbeelden: [{ type: "schatten", tekst: "Snelle schatting: alle waarden liggen rond 20. Gemiddelde moet dan ook ~20 zijn." }],
          basiskennis: [{ onderwerp: "Eenheid meenemen", uitleg: "Het antwoord is een temperatuur, dus '°C' erbij." }],
          niveaus: {
            basis: "(18+20+22+19+21) ÷ 5 = 100 ÷ 5 = 20 °C.",
            simpeler: "Som 100, gedeeld door 5 dagen = 20 °C gemiddeld.",
            nogSimpeler: "20 °C",
          },
        },
      },
      {
        q: "Zakgeld 4 vrienden: **€5, €4, €6, €5**. Gemiddeld zakgeld?",
        options: ["€5", "€20", "€4", "€6"],
        answer: 0,
        wrongHints: [null, "Te veel — dat is de som. Nog ÷ 4.", "Dat is de laagste.", "Dat is de hoogste."],
        uitlegPad: {
          stappen: [
            { titel: "Som", tekst: "€5 + €4 + €6 + €5 = **€20**." },
            { titel: "Delen", tekst: "Gemiddelde = €20 ÷ 4 = **€5 per persoon**." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Som ÷ aantal." }],
          theorie: "Tip: vergeet de euro-eenheid niet — het antwoord is in geld.",
          voorbeelden: [{ type: "check", tekst: "Check: 4 × €5 = €20 ✓ (de oorspronkelijke som). Klopt." }],
          basiskennis: [{ onderwerp: "Tussen min en max", uitleg: "€5 ligt tussen €4 en €6 → range klopt." }],
          niveaus: {
            basis: "(5+4+6+5) ÷ 4 = 20 ÷ 4 = €5.",
            simpeler: "Som €20 ÷ 4 vrienden = €5 elk.",
            nogSimpeler: "€5",
          },
        },
      },
      {
        q: "Een loper rent **5 keer**: 8, 9, 10, 9, 9 km. **Gemiddeld km per keer**?",
        options: ["9 km", "10 km", "45 km", "8 km"],
        answer: 0,
        wrongHints: [null, "Te veel — dat is alleen de hoogste keer.", "Dat is de som — nog ÷ 5.", "Dat is de laagste."],
        uitlegPad: {
          stappen: [
            { titel: "Som", tekst: "8 + 9 + 10 + 9 + 9 = **45 km** in totaal." },
            { titel: "Delen", tekst: "Gemiddelde = 45 ÷ 5 = **9 km per keer**." },
          ],
          woorden: [{ woord: "per keer", uitleg: "Per gerend rondje — dus we delen door aantal rondjes." }],
          theorie: "Toets-truc: schatten. Meeste waarden zijn rond 9. Gemiddelde moet ook ~9 zijn.",
          voorbeelden: [{ type: "check", tekst: "5 × 9 = 45 ✓ — de som klopt." }],
          basiskennis: [{ onderwerp: "Tussen min en max", uitleg: "9 ligt tussen 8 (laagst) en 10 (hoogst) → klopt." }],
          niveaus: {
            basis: "(8+9+10+9+9) ÷ 5 = 45 ÷ 5 = 9 km.",
            simpeler: "Som 45 km ÷ 5 keer = 9 km gemiddeld per keer.",
            nogSimpeler: "9 km",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Noor gooit **3 keer** een bal weg: **12, 15 en 18 meter**. Hoe ver gooit ze **gemiddeld**?",
        options: ["15 meter", "45 meter", "12 meter", "18 meter"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de som. Wat moet je daarna nog doen?",
          "Dat is haar kortste worp, niet het gemiddelde.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Som",
              tekst: "12 + 15 + 18 = **45 meter**.",
            },
            {
              titel: "Aantal",
              tekst: "**3** worpen.",
            },
            {
              titel: "Delen",
              tekst: "45 ÷ 3 = **15 meter**.",
            },
          ],
          woorden: [
            {
              woord: "som",
              uitleg: "Alles bij elkaar opgeteld.",
            },
            {
              woord: "aantal",
              uitleg: "Hoeveel getallen je hebt.",
            },
          ],
          theorie: "Gemiddelde = som ÷ aantal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Check: 15 ligt tussen 12 en 18. Dat klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet alleen optellen",
              uitleg: "Na het optellen moet je nog delen door het aantal.",
            },
          ],
          niveaus: {
            basis: "(12 + 15 + 18) ÷ 3 = 45 ÷ 3 = 15 meter.",
            simpeler: "Tel op: 12 + 15 + 18 = 45. Er zijn 3 worpen. 45 ÷ 3 = 15. Gemiddeld 15 meter.",
            nogSimpeler: "15 meter",
          },
        },
      },
      {
        q: "Drie boeken kosten **€6, €9 en €15**. Wat is de **gemiddelde** prijs?",
        options: ["€10", "€30", "€9", "€15"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is wat de drie boeken samen kosten. Hoeveel boeken zijn het?",
          "Dat is het middelste getal van de rij, niet som ÷ aantal.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Som",
              tekst: "€6 + €9 + €15 = **€30**.",
            },
            {
              titel: "Aantal",
              tekst: "**3** boeken.",
            },
            {
              titel: "Delen",
              tekst: "€30 ÷ 3 = **€10**.",
            },
          ],
          woorden: [
            {
              woord: "som",
              uitleg: "Alles bij elkaar opgeteld.",
            },
            {
              woord: "aantal",
              uitleg: "Hoeveel getallen je hebt.",
            },
          ],
          theorie: "Gemiddelde = som ÷ aantal. Het gemiddelde hoeft geen prijs te zijn die echt voorkomt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Check: €10 ligt tussen €6 en €15. Dat klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Middelste ≠ gemiddelde",
              uitleg: "Het middelste getal (€9) is niet hetzelfde als het gemiddelde (€10).",
            },
          ],
          niveaus: {
            basis: "(€6 + €9 + €15) ÷ 3 = €30 ÷ 3 = €10.",
            simpeler: "Alle prijzen samen: €30. Drie boeken. €30 ÷ 3 = €10 per boek gemiddeld.",
            nogSimpeler: "€10",
          },
        },
      },
      {
        q: "Een voetbalteam scoort in **4 wedstrijden**: 2, 5, 3 en 6 doelpunten. Hoeveel doelpunten is dat **gemiddeld** per wedstrijd?",
        options: ["4", "16", "5", "6"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn alle doelpunten samen. Over hoeveel wedstrijden moet je dat verdelen?",
          null,
          "Dat is de beste wedstrijd, niet het gemiddelde.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Som",
              tekst: "2 + 5 + 3 + 6 = **16** doelpunten.",
            },
            {
              titel: "Aantal",
              tekst: "**4** wedstrijden.",
            },
            {
              titel: "Delen",
              tekst: "16 ÷ 4 = **4** doelpunten per wedstrijd.",
            },
          ],
          woorden: [
            {
              woord: "som",
              uitleg: "Alles bij elkaar opgeteld.",
            },
            {
              woord: "aantal",
              uitleg: "Hoeveel getallen je hebt.",
            },
          ],
          theorie: "Gemiddelde = som ÷ aantal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Check: 4 ligt tussen 2 en 6. Dat klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Per wedstrijd",
              uitleg: "'Gemiddeld per wedstrijd' betekent: alles samen gedeeld door het aantal wedstrijden.",
            },
          ],
          niveaus: {
            basis: "(2 + 5 + 3 + 6) ÷ 4 = 16 ÷ 4 = 4.",
            simpeler: "Alle doelpunten samen: 16. Er waren 4 wedstrijden. 16 ÷ 4 = 4.",
            nogSimpeler: "4",
          },
        },
      },
      {
        q: "Vijf kinderen lezen elk een stukje voor. Ze lezen **6, 9, 13, 8 en 14** bladzijden. Hoeveel bladzijden is dat **gemiddeld**?",
        options: ["10", "50", "9", "12,5"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de som. Je bent er nog niet.",
          "Dat is het middelste getal als je ze op volgorde zet. Het gemiddelde reken je anders uit.",
          "Hoeveel kinderen zijn het? Deel je door het goede aantal?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Som",
              tekst: "6 + 9 + 13 + 8 + 14 = **50**.",
            },
            {
              titel: "Aantal",
              tekst: "**5** kinderen.",
            },
            {
              titel: "Delen",
              tekst: "50 ÷ 5 = **10**.",
            },
          ],
          woorden: [
            {
              woord: "som",
              uitleg: "Alles bij elkaar opgeteld.",
            },
            {
              woord: "aantal",
              uitleg: "Hoeveel getallen je hebt.",
            },
          ],
          theorie: "Gemiddelde = som ÷ aantal. Tel goed hoeveel getallen er zijn.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Check: 10 ligt tussen 6 en 14. Dat klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Goed tellen",
              uitleg: "Er staan 5 getallen. Deel dus door 5, niet door 4.",
            },
          ],
          niveaus: {
            basis: "(6 + 9 + 13 + 8 + 14) ÷ 5 = 50 ÷ 5 = 10.",
            simpeler: "Tel op: 50. Er zijn 5 kinderen. 50 ÷ 5 = 10.",
            nogSimpeler: "10",
          },
        },
      },
      {
        q: "Drie vriendinnen sparen per week **€3, €4 en €8**. Hoeveel sparen ze **gemiddeld**?",
        options: ["€5", "€15", "€4", "€7,50"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het totaal van de drie. Wat doe je daarna?",
          null,
          "Door hoeveel heb je gedeeld? Tel de vriendinnen nog eens.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Som",
              tekst: "€3 + €4 + €8 = **€15**.",
            },
            {
              titel: "Aantal",
              tekst: "**3** vriendinnen.",
            },
            {
              titel: "Delen",
              tekst: "€15 ÷ 3 = **€5**.",
            },
          ],
          woorden: [
            {
              woord: "som",
              uitleg: "Alles bij elkaar opgeteld.",
            },
            {
              woord: "aantal",
              uitleg: "Hoeveel getallen je hebt.",
            },
          ],
          theorie: "Gemiddelde = som ÷ aantal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Check: €5 ligt tussen €3 en €8. Dat klopt.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Door het aantal",
              uitleg: "Deel door het aantal personen: 3 vriendinnen, dus ÷ 3.",
            },
          ],
          niveaus: {
            basis: "(€3 + €4 + €8) ÷ 3 = €15 ÷ 3 = €5.",
            simpeler: "Samen sparen ze €15. Het zijn 3 vriendinnen. €15 ÷ 3 = €5 per persoon.",
            nogSimpeler: "€5",
          },
        },
      },
      {
        q: "Tim haalt **5 cijfers**: 5, 7, 8, 8 en 9. Wat is zijn **gemiddelde** cijfer?",
        options: ["7,4", "8", "37", "9,25"],
        answer: 0,
        wrongHints: [
          null,
          "Dat cijfer komt het vaakst voor. Het gemiddelde reken je uit met som ÷ aantal.",
          "Dat is de som. Je moet nog delen.",
          "Door hoeveel heb je gedeeld? Tel de cijfers nog eens.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Som",
              tekst: "5 + 7 + 8 + 8 + 9 = **37**.",
            },
            {
              titel: "Aantal",
              tekst: "**5** cijfers.",
            },
            {
              titel: "Delen",
              tekst: "37 ÷ 5 = **7,4**.",
            },
          ],
          woorden: [
            {
              woord: "som",
              uitleg: "Alles bij elkaar opgeteld.",
            },
            {
              woord: "aantal",
              uitleg: "Hoeveel getallen je hebt.",
            },
          ],
          theorie: "Gemiddelde = som ÷ aantal. Het antwoord hoeft geen heel getal te zijn.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "35 ÷ 5 = 7, en er blijft 2 over. 2 ÷ 5 = 0,4. Samen 7,4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Kommagetal",
              uitleg: "Een gemiddelde is een berekening, dus het kan een kommagetal zijn, zoals 7,4.",
            },
          ],
          niveaus: {
            basis: "(5 + 7 + 8 + 8 + 9) ÷ 5 = 37 ÷ 5 = 7,4.",
            simpeler: "Tel op: 37. Er zijn 5 cijfers. 37 ÷ 5 = 7,4. Gemiddeld een 7,4.",
            nogSimpeler: "7,4",
          },
        },
      },
    ],
  },

  // STAP 3: Modus
  {
    title: "Modus — het getal dat het meest voorkomt",
    explanation:
      "De **modus** is het **getal dat het vaakst voorkomt** in een rijtje.\n\n**Voorbeeld**: 3, 5, 4, 5, 6, 5, 7.\n• Hoe vaak komt elk getal voor?\n  - 3 → 1×\n  - 4 → 1×\n  - 5 → **3×** ← winnaar!\n  - 6 → 1×\n  - 7 → 1×\n• Modus = **5**.\n\n**Toets-truc — tellen met streepjes**:\nLeg een streepje per getal. De rij met de meeste streepjes = modus.\n\nVoorbeeld kleur-stemmen klas:\n• rood ||| (3)\n• blauw |||||||| (8)\n• groen || (2)\n• geel ||| (3)\n\n→ Modus = **blauw** *(meest gestemd)*.\n\n**Speciale gevallen**:\n• **2 modussen**: als 2 getallen even vaak voorkomen, zijn beide modussen.\n• **Geen modus**: als elk getal maar 1× voorkomt, is er geen modus.\n\n**Wanneer is modus handig?**\nBij **categorieën** zoals favoriete sport, kleur, dier. Bij **vaak voorkomende getallen** zoals schoenmaat (welke maat verkoopt het meest?).\n\nGemiddelde werkt niet voor categorieën — je kunt geen 'gemiddelde kleur' uitrekenen. Maar je kunt wel een **modus** (de meeste-gekozen kleur) bepalen.",
    svg: modusSvg(),
    checks: [
      {
        q: "Wat is de **modus** van: **3, 5, 4, 5, 6, 5, 7**?",
        options: ["5", "4", "6", "Geen modus"],
        answer: 0,
        wrongHints: [null, "Tel hoe vaak elk getal voorkomt — komt 4 echt het vaakst voor?", "Tel opnieuw — komt 6 vaker voor dan de andere getallen?", "Er is wél een modus. Welk getal komt het vaakst voor?"],
        uitlegPad: {
          stappen: [
            { titel: "Tel hoe vaak", tekst: "3: 1×. 4: 1×. **5: 3×**. 6: 1×. 7: 1×. → De 5 komt het vaakst voor." },
            { titel: "Modus = vaakst", tekst: "De **modus** is de waarde die het vaakst voorkomt. Hier dus **5**." },
          ],
          woorden: [{ woord: "modus", uitleg: "Het vaakst voorkomende getal in een rijtje." }],
          theorie: "Modus ≠ hoogste of laagste. Modus = vaakste. Belangrijk om uit elkaar te houden.",
          voorbeelden: [{ type: "streepjes", tekst: "Toets-truc: zet een streepje per keer dat een getal voorkomt. Het getal met de meeste streepjes = modus." }],
          basiskennis: [{ onderwerp: "Speciale gevallen", uitleg: "Soms zijn er twee modussen (twee getallen even vaak). Soms is er géén modus (alles 1×)." }],
          niveaus: {
            basis: "5 (komt 3× voor).",
            simpeler: "Tel: 5 komt 3× voor, alle andere maar 1×. Modus = 5.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Stemmen kleur: rood 3, blauw 8, groen 2, geel 3. **Modus**?",
        options: ["Blauw", "Rood", "Groen", "Geel"],
        answer: 0,
        wrongHints: [null, "Rood is 3× — er is een kleur die nog vaker voorkomt.", "Groen is maar 2× — dat is juist de minste.", "Geel is 3× — er is een kleur met meer stemmen."],
        uitlegPad: {
          stappen: [
            { titel: "Modus = vaakst", tekst: "Tel: rood 3, blauw 8, groen 2, geel 3. Blauw heeft 8 stemmen — het meest. Modus = blauw." },
          ],
          woorden: [{ woord: "modus", uitleg: "De waarde die het vaakst voorkomt." }],
          theorie: "Modus = vaakst, niet hoogste getal. Werkt ook voor kleuren/woorden/categorieën.",
          voorbeelden: [{ type: "stap", tekst: "Voor kleuren werkt geen gemiddelde — alleen modus." }],
          basiskennis: [{ onderwerp: "Vaakst ≠ hoogst", uitleg: "Modus = vaakst voorkomend. Niet altijd het grootste getal." }],
          niveaus: {
            basis: "Blauw (8 stemmen).",
            simpeler: "Tel hoe vaak elke kleur is gestemd. Blauw is 8×, meeste. Dus modus = blauw.",
            nogSimpeler: "Blauw",
          },
        },
      },
      {
        q: "Cijfers klas: 6, 7, 8, 7, 6, 7, 5. **Modus**?",
        options: ["7", "6", "8", "5"],
        answer: 0,
        wrongHints: [null, "6 komt 2× voor — is er een cijfer dat nog vaker voorkomt?", "Dat is maar 1×.", "Dat is maar 1× — minst."],
        uitlegPad: {
          stappen: [
            { titel: "Tel hoe vaak", tekst: "5: 1×. 6: 2×. **7: 3×**. 8: 1×. → 7 wint." },
            { titel: "Modus = 7", tekst: "Het cijfer dat het vaakst voorkomt = de modus. Hier: een 7." },
          ],
          woorden: [{ woord: "modus", uitleg: "Het vaakst voorkomende getal." }],
          theorie: "Bij ongesorteerde rijtjes: maak een tellijst met streepjes.",
          voorbeelden: [{ type: "stap", tekst: "Toets-truc: streep weg wat je hebt geteld. 6, 7, 8, 7, 6, 7, 5 → 5:1, 6:2, 7:3, 8:1." }],
          basiskennis: [{ onderwerp: "Niet hoogste", uitleg: "8 is hoogste maar slechts 1×. Modus is vaakste, niet hoogste." }],
          niveaus: {
            basis: "7 (3×).",
            simpeler: "Tel elk cijfer. 7 komt 3 keer voor. Modus = 7.",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "Wanneer **kun je geen gemiddelde** uitrekenen maar wel een **modus**?",
        options: ["Bij kleuren / woorden / categorieën", "Bij hele getallen", "Bij decimale getallen", "Bij negatieve getallen"],
        answer: 0,
        wrongHints: [null, "Bij hele getallen werkt gemiddelde gewoon.", "Bij decimale getallen werkt gemiddelde ook.", "Bij negatieve getallen werkt gemiddelde ook."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Acht kinderen vertellen hoeveel huisdieren ze hebben: **1, 0, 2, 1, 3, 1, 0, 2**. Wat is de **modus**?",
        options: ["1", "0", "2", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Tel hoe vaak 0 voorkomt. Komt een ander getal vaker voor?",
          null,
          "3 is het grootste getal. Is de modus het grootste getal?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel hoe vaak",
              tekst: "0: 2×. **1: 3×**. 2: 2×. 3: 1×.",
            },
            {
              titel: "Modus = vaakst",
              tekst: "De 1 komt het vaakst voor. Modus = **1**.",
            },
          ],
          woorden: [
            {
              woord: "modus",
              uitleg: "Het getal (of de keuze) dat het vaakst voorkomt.",
            },
          ],
          theorie: "Modus = vaakst, niet het grootste getal.",
          voorbeelden: [
            {
              type: "streepjes",
              tekst: "Zet bij elk getal een streepje: 0 ||, 1 |||, 2 ||, 3 |. De 1 heeft de meeste streepjes.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vaakst ≠ hoogst",
              uitleg: "De modus is het getal dat het vaakst voorkomt, niet het grootste.",
            },
          ],
          niveaus: {
            basis: "1 (komt 3× voor).",
            simpeler: "Tel: de 1 komt 3× voor, de 0 en de 2 maar 2×, de 3 maar 1×. Modus = 1.",
            nogSimpeler: "1",
          },
        },
      },
      {
        q: "Wat is de **modus** van: **2, 4, 4, 6, 8, 8, 9**?",
        options: ["4 en 8", "6 en 9", "8", "Geen modus"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe vaak komen 6 en 9 voor? Kijk welke getallen dubbel staan.",
          "Tel goed: komt er nog een getal net zo vaak voor als 8?",
          "Er staan wel getallen dubbel. Dan is er ook een modus.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel hoe vaak",
              tekst: "2: 1×. **4: 2×**. 6: 1×. **8: 2×**. 9: 1×.",
            },
            {
              titel: "Twee winnaars",
              tekst: "4 en 8 komen allebei 2× voor. Dan zijn er **2 modussen**: 4 en 8.",
            },
          ],
          woorden: [
            {
              woord: "modus",
              uitleg: "Het getal (of de keuze) dat het vaakst voorkomt.",
            },
          ],
          theorie: "Komen twee getallen even vaak voor (en het vaakst)? Dan zijn ze allebei de modus.",
          voorbeelden: [
            {
              type: "streepjes",
              tekst: "4 || en 8 || hebben de meeste streepjes, en evenveel.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Speciale gevallen",
              uitleg: "Soms zijn er 2 modussen. Is elk getal maar 1×? Dan is er geen modus.",
            },
          ],
          niveaus: {
            basis: "4 en 8 (allebei 2×).",
            simpeler: "4 komt 2× voor en 8 ook 2×. De rest maar 1×. Dus twee modussen: 4 en 8.",
            nogSimpeler: "4 en 8",
          },
        },
      },
      {
        q: "Kinderen kiezen hun lievelingsfruit: **appel, banaan, appel, peer, banaan, appel, kiwi**. Wat is de **modus**?",
        options: ["Appel", "Banaan", "Peer", "Kiwi"],
        answer: 0,
        wrongHints: [null, "Tel hoe vaak banaan voorkomt. Is er fruit dat vaker gekozen is?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel hoe vaak",
              tekst: "Appel 3×. Banaan 2×. Peer 1×. Kiwi 1×.",
            },
            {
              titel: "Modus = vaakst",
              tekst: "Appel is het vaakst gekozen. Modus = **appel**.",
            },
          ],
          woorden: [
            {
              woord: "modus",
              uitleg: "Het getal (of de keuze) dat het vaakst voorkomt.",
            },
          ],
          theorie: "Bij woorden en keuzes kun je geen gemiddelde uitrekenen, maar wel een modus.",
          voorbeelden: [
            {
              type: "streepjes",
              tekst: "Appel |||, banaan ||, peer |, kiwi |.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Categorieën",
              uitleg: "Fruit, kleuren en dieren zijn categorieën. Daarbij gebruik je de modus.",
            },
          ],
          niveaus: {
            basis: "Appel (3× gekozen).",
            simpeler: "Tel per fruit: appel 3, banaan 2, peer 1, kiwi 1. Appel wint. Modus = appel.",
            nogSimpeler: "Appel",
          },
        },
      },
      {
        q: "Je gooit **10 keer** met een dobbelsteen: **6, 2, 3, 2, 6, 2, 5, 1, 2, 4**. Wat is de **modus**?",
        options: ["2", "6", "4", "1"],
        answer: 0,
        wrongHints: [
          null,
          "6 is het hoogste getal en komt 2× voor. Tel ook hoe vaak de andere getallen voorkomen.",
          null,
          "Tel hoe vaak 1 voorkomt.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel hoe vaak",
              tekst: "1: 1×. **2: 4×**. 3: 1×. 4: 1×. 5: 1×. 6: 2×.",
            },
            {
              titel: "Modus = vaakst",
              tekst: "De 2 komt het vaakst voor. Modus = **2**.",
            },
          ],
          woorden: [
            {
              woord: "modus",
              uitleg: "Het getal (of de keuze) dat het vaakst voorkomt.",
            },
          ],
          theorie: "Modus ≠ hoogste getal. De 6 is het hoogst, maar de 2 komt het vaakst voor.",
          voorbeelden: [
            {
              type: "streepjes",
              tekst: "1 |, 2 ||||, 3 |, 4 |, 5 |, 6 ||.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vaakst ≠ hoogst",
              uitleg: "Kijk niet naar hoe groot een getal is, maar naar hoe vaak het voorkomt.",
            },
          ],
          niveaus: {
            basis: "2 (komt 4× voor).",
            simpeler: "Tel: de 2 komt 4× voor, de 6 maar 2×, de rest 1×. Modus = 2.",
            nogSimpeler: "2",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een schoenenwinkel verkoopt op zaterdag deze maten: **36, 38, 37, 38, 39, 36, 38, 40**. Welke maat is de **modus**?",
        options: ["38", "36", "40", "37"],
        answer: 0,
        wrongHints: [
          null,
          "Tel hoe vaak 36 voorkomt. Is er een maat die nog vaker voorkomt?",
          "40 is de grootste maat. Is de modus altijd het grootste getal?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel hoe vaak",
              tekst: "36: 2×. 37: 1×. 38: 3×. 39: 1×. 40: 1×.",
            },
            {
              titel: "Modus = vaakst",
              tekst: "Maat 38 komt het vaakst voor. De modus is dus 38.",
            },
          ],
          woorden: [
            {
              woord: "modus",
              uitleg: "Het getal dat het vaakst voorkomt in een rijtje.",
            },
          ],
          theorie: "Modus ≠ hoogste of laagste. Modus = vaakste.",
          voorbeelden: [
            {
              type: "streepjes",
              tekst: "Zet een streepje per verkochte maat. De maat met de meeste streepjes is de modus.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Handig bij schoenmaten",
              uitleg: "Een winkel wil weten welke maat het meest verkocht wordt. Daarvoor gebruik je de modus.",
            },
          ],
          niveaus: {
            basis: "38 (komt 3× voor).",
            simpeler: "Tel: 38 komt 3× voor, 36 maar 2×, de rest 1×. Modus = 38.",
            nogSimpeler: "38",
          },
        },
      },
      {
        q: "Vijf kinderen gooien elk één keer met een dobbelsteen: **4, 6, 1, 5, 3**. Wat is de **modus**?",
        options: ["Geen modus", "6", "4", "1 en 3"],
        answer: 0,
        wrongHints: [null, "6 is het hoogste getal. Komt 6 vaker voor dan de andere getallen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel hoe vaak",
              tekst: "4: 1×. 6: 1×. 1: 1×. 5: 1×. 3: 1×. Elk getal komt maar één keer voor.",
            },
            {
              titel: "Speciaal geval",
              tekst: "Komt elk getal maar 1× voor, dan is er geen modus.",
            },
          ],
          woorden: [
            {
              woord: "modus",
              uitleg: "Het getal dat het vaakst voorkomt in een rijtje.",
            },
          ],
          theorie: "Er is alleen een modus als een getal vaker voorkomt dan andere getallen.",
          voorbeelden: [
            {
              type: "streepjes",
              tekst: "Bij 2, 4, 4, 6 komt 4 twee keer voor. Dan is de modus 4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Speciale gevallen",
              uitleg: "Twee getallen even vaak = twee modussen. Alles maar 1× = geen modus.",
            },
          ],
          niveaus: {
            basis: "Geen modus (alles komt 1× voor).",
            simpeler: "Elk getal staat er maar één keer. Geen enkel getal komt het vaakst voor. Dus: geen modus.",
            nogSimpeler: "Geen",
          },
        },
      },
    ],
  },

  // STAP 4: Mediaan
  {
    title: "Mediaan — het middelste getal",
    explanation:
      "De **mediaan** is het **middelste getal** als je alles op volgorde zet — van klein naar groot.\n\n**Stappenplan**:\n1. Zet de getallen op **volgorde** *(klein → groot)*.\n2. Pak het **middelste** getal.\n\n**Voorbeeld 1 — oneven aantal**:\nGetallen: 3, 8, 5, 9, 7.\n• Op volgorde: 3, 5, **7**, 8, 9.\n• Middelste *(positie 3 van 5)*: **7**.\n• Mediaan = **7**.\n\n**Voorbeeld 2 — even aantal**:\nGetallen: 4, 6, 8, 10 *(4 getallen)*.\n• Op volgorde: 4, 6, 8, 10.\n• Geen ÉÉN middelste — pak de **2 middelste** en neem hun gemiddelde.\n• Middelste 2: 6 en 8. Gemiddelde = (6+8) ÷ 2 = **7**.\n• Mediaan = **7**.\n\n**Toets-truc**:\n• **Oneven** aantal getallen (3, 5, 7, ...) → er is 1 middelste getal.\n• **Even** aantal getallen (2, 4, 6, ...) → neem gemiddelde van de 2 middelste.\n\n**Mediaan vs gemiddelde — wat is het verschil?**:\n• Gemiddelde gebruikt **alle getallen** (en kan beïnvloed worden door extreme uitschieters).\n• Mediaan kijkt alleen naar het **midden**. Een rare uitschieter heeft minder effect.\n\nVoorbeeld: cijfers 6, 7, 7, 7, **2** *(2 = iemand was ziek)*.\n• Gemiddelde = (6+7+7+7+2) ÷ 5 = 29 ÷ 5 = **5,8**.\n• Mediaan: op volgorde 2, 6, **7**, 7, 7 → 7.\n• Mediaan (7) geeft een beter beeld van 'normale' klas dan gemiddelde (5,8).",
    svg: mediaanSvg(),
    checks: [
      {
        q: "**Mediaan** van: 3, 5, 7, 8, 9?",
        options: ["7", "3", "9", "6"],
        answer: 0,
        wrongHints: [null, "Dat is de laagste.", "Dat is de hoogste.", "Niet het middelste — kijk goed naar volgorde."],
      },
      {
        q: "**Mediaan** van: 4, 8, 6, 10 (op volgorde zetten!)?",
        options: ["7", "6", "8", "28"],
        answer: 0,
        wrongHints: [null, "Dat is één van de 2 middelste; bij een even aantal pak je het gemiddelde van die twee.", "Dat is het andere middelste getal — wat doe je bij een even aantal met de twee middelste?", "Dat is de som, niet de mediaan."],
        uitlegPad: {
          stappen: [
            { titel: "Op volgorde", tekst: "4, 6, 8, 10. Op volgorde gezet." },
            { titel: "Even aantal", tekst: "4 getallen = even. Pak de 2 middelste: 6 en 8. Gemiddelde = (6+8) ÷ 2 = 7." },
          ],
          woorden: [{ woord: "mediaan", uitleg: "Het middelste getal als je alles op volgorde zet." }],
          theorie: "Bij even aantal: gemiddelde van de 2 middelste.",
          voorbeelden: [{ type: "stap", tekst: "4, 6, 8, 10 → middelste 2 = 6 en 8 → mediaan = 7." }],
          basiskennis: [{ onderwerp: "Sorteren", uitleg: "Altijd eerst op volgorde zetten!" }],
          niveaus: {
            basis: "(6+8) ÷ 2 = 7.",
            simpeler: "Op volgorde: 4, 6, 8, 10. 4 getallen = even. Pak 6 en 8 (middelste). Gemiddelde = 7.",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "**Mediaan** van: 12, 5, 8, 3, 10, 7, 9 (7 getallen)?",
        options: ["8", "7", "9", "5"],
        answer: 0,
        wrongHints: [null, "Te weinig — vergeet niet eerst te sorteren en daarna het middelste getal te pakken.", "Te veel — controleer je sortering.", "Te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Sorteer eerst", tekst: "3, 5, 7, **8**, 9, 10, 12 (op volgorde van klein naar groot)." },
            { titel: "Tel middelste", tekst: "7 getallen → middelste is positie 4 (3 links + middelste + 3 rechts). Op positie 4 staat: **8**." },
          ],
          woorden: [{ woord: "mediaan", uitleg: "Middelste getal als alles op volgorde staat." }],
          theorie: "Bij oneven aantal: er is altijd 1 middelste getal. Bij 7 getallen → 4e positie.",
          voorbeelden: [{ type: "stap", tekst: "3 (1e) - 5 (2e) - 7 (3e) - **8 (4e = midden)** - 9 (5e) - 10 (6e) - 12 (7e)." }],
          basiskennis: [{ onderwerp: "Volgorde-truc", uitleg: "Schrijf altijd de gesorteerde rij op. Dan zie je het middelste direct." }],
          niveaus: {
            basis: "Gesorteerd: 3,5,7,8,9,10,12. Middelste = 8.",
            simpeler: "Op volgorde zetten, dan 4e positie pakken (van 7 getallen). = 8.",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "Cijfers: 7, 7, 7, 7, **2** (iemand was ziek). Welk getal geeft een **eerlijker beeld** van de klas?",
        options: ["Mediaan (7)", "Gemiddelde (6)", "Het laagste cijfer (2)", "Niet uit te leggen"],
        answer: 0,
        wrongHints: [null, "Gemiddelde is verlaagd door 1 uitschieter (2). Mediaan filtert dat eruit.", "Juist die 2 is de uitschieter — die zegt weinig over de rest van de klas.", "Wél — een uitschieter beïnvloedt gemiddelde maar niet mediaan."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is de **mediaan** van: **15, 9, 24, 11, 18**?",
        options: ["15", "24", "15,4", "11"],
        answer: 0,
        wrongHints: [
          null,
          "Dat getal staat in het midden van de rij zoals hij nu is. Heb je de getallen eerst op volgorde gezet?",
          "Dat is het gemiddelde (som ÷ aantal). De mediaan vind je anders.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Op volgorde",
              tekst: "9, 11, **15**, 18, 24.",
            },
            {
              titel: "Middelste",
              tekst: "5 getallen = oneven. Het middelste (plek 3) is **15**.",
            },
          ],
          woorden: [
            {
              woord: "mediaan",
              uitleg: "Het middelste getal als je alles op volgorde zet.",
            },
          ],
          theorie: "Altijd eerst op volgorde zetten, dan pas het middelste getal pakken.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Zonder sorteren zou je 24 pakken. Dat is fout: 24 is juist het grootste getal.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Mediaan ≠ gemiddelde",
              uitleg: "Het gemiddelde is 77 ÷ 5 = 15,4. De mediaan is 15. Dat zijn twee verschillende dingen.",
            },
          ],
          niveaus: {
            basis: "Op volgorde: 9, 11, 15, 18, 24. Mediaan = 15.",
            simpeler: "Zet de getallen van klein naar groot: 9, 11, 15, 18, 24. Het middelste getal is 15.",
            nogSimpeler: "15",
          },
        },
      },
      {
        q: "Zes plantjes zijn **12, 7, 15, 9, 20 en 10 cm** hoog. Wat is de **mediaan**?",
        options: ["11 cm", "10 cm", "12 cm", "22 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is één van de twee middelste. Wat doe je bij een even aantal met die twee?",
          "Heb je bij een even aantal het gemiddelde van de 2 middelste genomen?",
          "Je hebt de twee middelste opgeteld. Wat moet er daarna nog gebeuren?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Op volgorde",
              tekst: "7, 9, **10**, **12**, 15, 20.",
            },
            {
              titel: "Even aantal",
              tekst: "6 getallen = even. De 2 middelste zijn 10 en 12. (10 + 12) ÷ 2 = **11**.",
            },
          ],
          woorden: [
            {
              woord: "mediaan",
              uitleg: "Het middelste getal als je alles op volgorde zet.",
            },
          ],
          theorie: "Bij een even aantal: neem het gemiddelde van de 2 middelste getallen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10 + 12 = 22. 22 ÷ 2 = 11. Mediaan = 11 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Sorteren",
              uitleg: "Altijd eerst op volgorde zetten! Anders pak je de verkeerde middelste getallen.",
            },
          ],
          niveaus: {
            basis: "Op volgorde: 7, 9, 10, 12, 15, 20. (10 + 12) ÷ 2 = 11 cm.",
            simpeler: "Zet ze op volgorde. De twee middelste zijn 10 en 12. Precies daartussen ligt 11. Mediaan = 11 cm.",
            nogSimpeler: "11 cm",
          },
        },
      },
      {
        q: "Wat is de **mediaan** van: **9, 2, 6, 3**?",
        options: ["4,5", "5", "4", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het gemiddelde van alle vier de getallen. De mediaan kijkt alleen naar het midden.",
          "Heb je de getallen eerst op volgorde gezet voordat je de middelste pakte?",
          "Dat is één van de twee middelste. Wat doe je bij een even aantal?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Op volgorde",
              tekst: "2, **3**, **6**, 9.",
            },
            {
              titel: "Even aantal",
              tekst: "4 getallen = even. De 2 middelste zijn 3 en 6. (3 + 6) ÷ 2 = **4,5**.",
            },
          ],
          woorden: [
            {
              woord: "mediaan",
              uitleg: "Het middelste getal als je alles op volgorde zet.",
            },
          ],
          theorie: "Bij een even aantal: gemiddelde van de 2 middelste. Dat kan een kommagetal zijn.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 + 6 = 9. 9 ÷ 2 = 4,5. Mediaan = 4,5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Sorteren",
              uitleg: "Eerst op volgorde zetten. Zonder sorteren zou je 2 en 6 pakken, en dat is fout.",
            },
          ],
          niveaus: {
            basis: "Op volgorde: 2, 3, 6, 9. (3 + 6) ÷ 2 = 4,5.",
            simpeler: "Zet op volgorde: 2, 3, 6, 9. De middelste twee zijn 3 en 6. Het getal precies daartussen is 4,5.",
            nogSimpeler: "4,5",
          },
        },
      },
      {
        q: "Wat doe je **als eerste** als je de **mediaan** zoekt?",
        options: [
          "De getallen op volgorde zetten",
          "Alle getallen bij elkaar optellen",
          "Tellen welk getal het vaakst voorkomt",
          "Delen door het aantal getallen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Optellen doe je bij het gemiddelde. Wat is de eerste stap bij de mediaan?",
          "Dat doe je bij de modus, niet bij de mediaan.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Stap 1",
              tekst: "Zet de getallen op **volgorde**, van klein naar groot.",
            },
            {
              titel: "Stap 2",
              tekst: "Pak het **middelste** getal.",
            },
          ],
          woorden: [
            {
              woord: "mediaan",
              uitleg: "Het middelste getal als je alles op volgorde zet.",
            },
          ],
          theorie: "Mediaan = middelste getal na sorteren. Zonder sorteren klopt het niet.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3, 8, 5 → op volgorde 3, 5, 8 → mediaan = 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Drie begrippen",
              uitleg: "Gemiddelde: optellen en delen. Modus: tellen wat het vaakst is. Mediaan: sorteren en het midden pakken.",
            },
          ],
          niveaus: {
            basis: "Eerst op volgorde zetten.",
            simpeler: "Bij de mediaan zet je de getallen eerst van klein naar groot. Daarna pak je het middelste.",
            nogSimpeler: "Op volgorde zetten",
          },
        },
      },
      {
        q: "Bij welk aantal getallen neem je voor de mediaan het **gemiddelde van de 2 middelste**?",
        options: ["Bij 6 getallen", "Bij 5 getallen", "Bij 7 getallen", "Bij 3 getallen"],
        answer: 0,
        wrongHints: [
          null,
          "Is 5 een even of een oneven aantal?",
          null,
          "Bij een oneven aantal is er precies één middelste getal. Is 3 even of oneven?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Even of oneven?",
              tekst: "Bij een **oneven** aantal (3, 5, 7) is er één middelste getal.",
            },
            {
              titel: "Even aantal",
              tekst: "Bij een **even** aantal (2, 4, 6) zijn er 2 middelste. Daar neem je het gemiddelde van.",
            },
          ],
          woorden: [
            {
              woord: "mediaan",
              uitleg: "Het middelste getal als je alles op volgorde zet.",
            },
            {
              woord: "even",
              uitleg: "Een getal dat je eerlijk in 2 groepjes kunt verdelen: 2, 4, 6, 8, ...",
            },
          ],
          theorie: "Even aantal → gemiddelde van de 2 middelste. Oneven aantal → het middelste getal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 getallen: plek 3 en plek 4 zijn de middelste. Bij 5 getallen is plek 3 het middelste.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Toets-truc",
              uitleg: "Kijk eerst of het aantal even of oneven is.",
            },
          ],
          niveaus: {
            basis: "Bij 6 getallen (even aantal).",
            simpeler: "6 is even. Dan zijn er 2 getallen in het midden, en neem je daar het gemiddelde van.",
            nogSimpeler: "Bij 6",
          },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Zeven kinderen rennen 60 meter. Hun tijden in seconden zijn: **11, 9, 14, 10, 12, 9, 13**. Wat is de **mediaan**?",
        options: ["11 seconden", "10 seconden", "9 seconden", "14 seconden"],
        answer: 0,
        wrongHints: [
          null,
          "Dat getal staat in het midden van de rij zoals hij er nu staat. Heb je de tijden eerst op volgorde gezet?",
          "Dat getal komt het vaakst voor. Hoe heet dat begrip?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Op volgorde",
              tekst: "9, 9, 10, 11, 12, 13, 14.",
            },
            {
              titel: "Middelste",
              tekst: "7 getallen = oneven. Het middelste is het 4e getal: 11.",
            },
          ],
          woorden: [
            {
              woord: "mediaan",
              uitleg: "Het middelste getal als je alles op volgorde zet.",
            },
          ],
          theorie: "Bij een oneven aantal is er precies één middelste getal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9, 9, 10, **11**, 12, 13, 14 → 3 getallen links, 3 getallen rechts.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Sorteren",
              uitleg: "Altijd eerst op volgorde zetten!",
            },
          ],
          niveaus: {
            basis: "11 seconden.",
            simpeler: "Op volgorde: 9, 9, 10, 11, 12, 13, 14. Het middelste getal is 11.",
            nogSimpeler: "11",
          },
        },
      },
    ],
  },

  // STAP 5: Wanneer wat gebruiken?
  {
    title: "Wanneer wat gebruiken? — keuzehulp",
    explanation:
      "Drie begrippen, drie situaties. **Welke gebruik je waarvoor?**\n\n**1. Gemiddelde** = som ÷ aantal.\n• Gebruik bij: cijfers, lengtes, gewichten, prijzen, temperaturen.\n• Voordeel: gebruikt alle getallen.\n• Nadeel: gevoelig voor uitschieters (extreem hoge of lage waardes).\n\n**2. Modus** = vaakst.\n• Gebruik bij: kleuren, schoenmaten, favoriete dieren, sport-keuzes.\n• Voordeel: werkt ook voor woorden/categorieën.\n• Nadeel: zegt niets over hoe verspreid de groep is.\n\n**3. Mediaan** = middelste op volgorde.\n• Gebruik bij: inkomens, huizenprijzen — overal waar uitschieters zijn.\n• Voordeel: minder gevoelig voor uitschieters.\n• Nadeel: een beetje meer werk (sorteren).\n\n**Toets-tip — herken de woorden in een vraag**:\n• *'gemiddeld'* → bereken gemiddelde.\n• *'meest', 'vaakst'* → modus.\n• *'middelste', 'mediaan'* → mediaan.\n\n**Voorbeeld** *'In een klas van 25 leerlingen is de gemiddelde leeftijd 11 jaar. De meest voorkomende leeftijd (modus) is 12.'*\n• Sommigen zijn dus jonger (lager dan 12) — daarom is gemiddelde 11 en modus 12.\n• Beide kloppen — verschillende dingen meten.",
    checks: [
      {
        q: "Vraag: *'Welke schoenmaat verkoopt het **meest** in onze winkel?'* Welk begrip?",
        options: ["Modus", "Gemiddelde", "Mediaan", "Som"],
        answer: 0,
        wrongHints: [null, "Gemiddelde geeft een uitkomst zoals 'maat 38,5'. Niemand draagt dat. We willen weten welke maat het VAAKST verkocht is.", "Mediaan zou het middelste zijn van alle verkopen. Geeft niet aan welke maat 'het populairst' is.", "Som is alleen het totaal aantal verkopen."],
      },
      {
        q: "Vraag: *'Je telt alle rapportcijfers van de klas op en deelt door het aantal leerlingen.'* Welk begrip reken je dan uit?",
        options: ["Gemiddelde", "Modus", "Mediaan", "Maximum"],
        answer: 0,
        wrongHints: [null, "Modus is het cijfer dat het vaakst voorkomt — daarvoor hoef je niet op te tellen en te delen.", "Mediaan is het middelste getal, niet wat de vraag vraagt.", "Maximum is het hoogste, niet wat de vraag vraagt."],
      },
      {
        q: "Bij **inkomens** met 1 superrijk persoon — welk getal geeft het **eerlijkst beeld** van een 'gewone' inwoner?",
        options: ["Mediaan", "Gemiddelde", "Modus", "Som"],
        answer: 0,
        wrongHints: [null, "Gemiddelde wordt opgedreven door de superrijke — geeft scheef beeld.", "Modus is wat het VAAKST voorkomt — bij inkomens vaak niet handig.", "Som is totaal van alle inkomens, niet 'per persoon'."],
      },
      {
        q: "Wat heeft een **kleur-stemming** wel maar geen gemiddelde?",
        options: ["Modus", "Gemiddelde", "Mediaan", "Geen van deze"],
        answer: 0,
        wrongHints: [null, "Probeer 'gemiddelde kleur' uit te rekenen — werkt dat?", "Mediaan werkt niet — kleuren hebben geen volgorde.", "Eén van deze drie werkt wél bij kleuren."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is een **nadeel** van de **mediaan**?",
        options: [
          "Je moet de getallen eerst op volgorde zetten",
          "Hij werkt alleen bij kleuren en woorden",
          "Eén uitschieter verandert hem heel veel",
          "Hij gebruikt nooit het middelste getal",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij welk begrip gebruik je kleuren en woorden?",
          "Is de mediaan juist gevoelig of juist niet zo gevoelig voor uitschieters?",
          null,
        ],
      },
      {
        q: "Wat is een **nadeel** van de **modus**?",
        options: [
          "Hij zegt niets over hoe verspreid de groep is",
          "Hij werkt niet bij kleuren en woorden",
          "Je moet altijd delen door het aantal",
          "Je moet de getallen eerst optellen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Juist bij kleuren en woorden is de modus handig. Wat is dan het nadeel?",
          "Delen doe je bij een ander begrip.",
          null,
        ],
      },
      {
        q: "In een vraag staat: '*Wat is de **middelste** lengte van de klas?*' Welk begrip heb je nodig?",
        options: ["Mediaan", "Gemiddelde", "Modus", "Som"],
        answer: 0,
        wrongHints: [
          null,
          "Bij het gemiddelde tel je op en deel je. Vraagt de vraag daarom?",
          "Dat begrip hoort bij 'meest' of 'vaakst'.",
          null,
        ],
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Wat is een **voordeel** van het **gemiddelde**?",
        options: [
          "Het gebruikt alle getallen",
          "Het werkt ook bij kleuren",
          "Een uitschieter verandert het niet",
          "Je hoeft er niet voor te rekenen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij welk begrip kun je met kleuren werken?",
          "Is het gemiddelde gevoelig voor uitschieters of juist niet?",
          null,
        ],
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — statistiek-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Verschillende sommen door elkaar — gemiddelde, modus, mediaan.\n\n**Tip**: lees rustig en kijk welk woord in de vraag staat (*gemiddeld* / *meest* / *middelste*). Daar zit de hint.\n\nVeel succes!",
    checks: [
      {
        q: "Cijfers: 7, 8, 9, 6, 5 *(5 toetsen)*. **Gemiddeld**?",
        options: ["7", "8", "35", "5"],
        answer: 0,
        wrongHints: [null, "Te veel — 8 is maar één van de cijfers. Reken som ÷ aantal.", "Dat is de som — nog ÷ 5.", "Dat is de laagste."],
      },
      {
        q: "Schoenen verkocht: maat 38, 39, 38, 40, 38, 41, 39. **Modus**?",
        options: ["38", "39", "40", "41"],
        answer: 0,
        wrongHints: [null, "39 komt 2× voor — tel nog eens welke maat het vaakst voorkomt.", "40 komt maar 1×.", "41 komt maar 1×."],
      },
      {
        q: "Leeftijden: 8, 10, 12, 9, 11. **Mediaan**?",
        options: ["10", "8", "12", "11"],
        answer: 0,
        wrongHints: [null, "Dat is de laagste, niet de middelste — sorteer eerst.", "Dat is de hoogste, niet de middelste.", "Dat is positie 4 — niet de middelste van 5."],
      },
      {
        q: "Temperaturen 4 dagen: 18, 20, 22, 20 °C. **Gemiddelde temperatuur**?",
        options: ["20 °C", "18 °C", "80 °C", "22 °C"],
        answer: 0,
        wrongHints: [null, "Te weinig — tel alle temperaturen bij elkaar op en deel dan door het aantal dagen.", "Dat is de som — je moet nog door het aantal metingen delen.", "Dat is de hoogste."],
      },
      {
        q: "Klas-test: 6, 6, 6, 7, 8. **Modus** EN **mediaan** zijn allebei ... ?",
        options: ["6", "7", "8", "Ze verschillen — modus=6, mediaan=7"],
        answer: 0,
        wrongHints: [null, "Controleer welk getal het vaakst voorkomt (modus) en welk getal in het midden staat na sortering (mediaan).", "Niet beide 8 — 8 komt maar 1× voor.", "Ze zijn hier toch gelijk — bereken modus (meest voorkomend) en mediaan (midden na sortering) nog eens."],
      },
      {
        q: "Kan een gemiddelde een **kommagetal** zijn (dus geen heel getal)?",
        options: ["Ja, bijvoorbeeld bij 6 en 7", "Nooit", "Alleen bij negatieve getallen", "Alleen bij heel veel getallen"],
        answer: 0,
        wrongHints: [null, "Wél — probeer twee cijfers bij elkaar op te tellen en te delen, kan het uitkomen op een kommagetal?", "Dat is niet de regel — gemiddeldes met decimalen komen super vaak voor.", "Ook bij weinig getallen kan een gemiddelde decimaal zijn."],
      },
      { q: "Gem van 3, 5, 7?", options: ["5","15","3","7"], answer: 0, wrongHints: [null, "Dat is som.", "Min.", "Max."] },
      { q: "Modus van 4, 7, 4, 9, 4, 7, 2?", options: ["4","7","9","2"], answer: 0, wrongHints: [null, "2 keer.", "1 keer.", "1 keer."] },
      { q: "Mediaan van 5, 2, 8, 1, 4?", options: ["4","2","8","5"], answer: 0, wrongHints: [null, "Niet zonder sorteren.", "Niet.", "Niet zonder sorteren."] },
      { q: "Mediaan van 4, 6, 8, 10?", options: ["7","6","8","9"], answer: 0, wrongHints: [null, "Een midden.", "Een midden.", "Niet."] },
      { q: "Gem van 10, 20, 30, 40?", options: ["25","30","100","40"], answer: 0, wrongHints: [null, "Te veel — 30 is maar één van de getallen. Reken som ÷ aantal.", "Som.", "Max."] },
      { q: "5 toetsen, gemiddelde 7. Som?", options: ["35","12","7","75"], answer: 0, wrongHints: [null, "Niet — som = aantal × gem.", "Gem.", "Te veel."] },
      { q: "Bereik (grootste min kleinste getal) van 12, 5, 18, 9, 3?", options: ["15","18","12","3"], answer: 0, wrongHints: [null, "Max alleen.", "Niet.", "Min alleen."] },
      { q: "Modus van 1,2,3,4,5 (alle 1×)?", options: ["Geen modus","1","5","3"], answer: 0, wrongHints: [null, "Niet — vaakst is niemand.", "Niet.", "Niet."] },
      { q: "Welk getal in een rij komt **vaakst** voor: 3, 5, 5, 5, 7, 7, 9?", options: ["5","7","3","9"], answer: 0, wrongHints: [null, "2 keer.", "1 keer.", "1 keer."] },
      { q: "Wanneer is mediaan zinvoller dan gemiddelde?", options: ["Bij uitschieters","Bij weinig getallen","Nooit","Altijd"], answer: 0, wrongHints: [null, "Niet.", "Wel soms.", "Niet altijd."] },
      { q: "Een **uitschieter** is?", options: ["Een getal dat ver van de rest afligt","Het getal dat het vaakst voorkomt","Het middelste getal na sorteren","Het gemiddelde van alle getallen"], answer: 0, wrongHints: [null, "Dat is de modus.", "Dat is de mediaan.", "Dat is het gemiddelde zelf."] },
      { q: "Welke maat verandert het meest als je 1 grote uitschieter toevoegt?", options: ["Gemiddelde","Mediaan","Modus","Geen"], answer: 0, wrongHints: [null, "Mediaan verschuift maar weinig — de middelste blijft bijna gelijk.", "Modus blijft meestal hetzelfde — vaakste-getal verandert niet vlug.", "Eén van deze maten reageert wél sterk op een uitschieter."] },
      { q: "5 keer gegooid: 3, 5, 5, 6, 6. Mediaan?", options: ["5","6","4","3"], answer: 0, wrongHints: [null, "Te hoog — welk getal staat precies in het midden van de 5? (Ze staan al op volgorde.)", "Te laag.", "Te laag."] },
      { q: "Gem van 4 en 8?", options: ["6","12","4","2"], answer: 0, wrongHints: [null, "Niet — dat is som.", "Klein.", "Niet."] },
      { q: "Gemiddelde 5, modus 5 én mediaan 5 — kan dat?", options: ["Ja, dat kan","Nooit","Alleen bij 1 getal","Alleen bij 2 getallen"], answer: 0, wrongHints: [null, "Wel.", "Niet.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const gemiddeldenStatistiekPo = {
  id: "gemiddelden-statistiek-po",
  title: "Gemiddelde, modus, mediaan (groep 7-8)",
  emoji: "⚖️",
  level: "groep7-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Verwerken van informatie — gemiddelde en spreiding",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "tabellen-grafieken", title: "Tabellen en grafieken", niveau: "po-1F" },
  ],
  intro:
    "Statistiek voor groep 7-8 — gemiddelde uitrekenen, modus (vaakst voorkomend), mediaan (middelste). Met praktijksommen over cijfers, temperatuur, zakgeld, schoenmaat. ~15 min.",
  triggerKeywords: [
    "gemiddelde", "modus", "mediaan", "statistiek",
    "som", "deel door", "middelste", "vaakst", "meest voorkomend",
  ],
  chapters,
  steps,
};

export default gemiddeldenStatistiekPo;

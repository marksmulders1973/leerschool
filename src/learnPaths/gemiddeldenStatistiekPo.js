// Leerpad: Gemiddelde / modus / mediaan — groep 7-8 PO.
// Cito-onderdeel statistiek/verwerken informatie. Referentieniveau 1F.
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
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏁", from: 5, to: 5 },
];

function getalRijSvg(getallen, gemiddelde, label) {
  const w = 320, h = 130, padL = 30, padR = 30;
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
        options: ["Een berekening die laat zien wat 'in het midden' ligt", "Het hoogste getal in een groep", "Het laagste getal", "Het getal dat het meest voorkomt"],
        answer: 0,
        wrongHints: [null, "Dat is het maximum, niet het gemiddelde.", "Dat is het minimum.", "Dat is de modus, niet het gemiddelde."],
      },
      {
        q: "Het gemiddelde van **5, 7, 9** kan NIET zijn ... ?",
        options: ["3", "6", "7", "8"],
        answer: 0,
        wrongHints: [null, "Klopt wel — 6 kan tussen 5 en 9 liggen.", "Klopt wel — 7 is precies tussen 5 en 9.", "Klopt wel — 8 kan tussen 5 en 9 liggen."],
        uitlegPad: {
          stappen: [
            { titel: "Tussen min en max", tekst: "Gemiddelde ligt altijd tussen het laagste (5) en het hoogste (9) getal. 3 ligt eronder. 6/7/8 liggen ertussen, dus die kunnen wél." },
          ],
          woorden: [{ woord: "gemiddelde", uitleg: "Het 'middel-getal' van een groep — niet het kleinste, niet het grootste." }],
          theorie: "Een gemiddelde ligt nooit onder de minimum-waarde of boven de maximum-waarde.",
          voorbeelden: [{ type: "stap", tekst: "5, 7, 9 → gem = 21/3 = 7. Inderdaad tussen 5 en 9." }],
          basiskennis: [{ onderwerp: "Check je antwoord", uitleg: "Als je gemiddelde lager dan het laagste of hoger dan het hoogste is — fout!" }],
          niveaus: {
            basis: "3 ligt onder de minimum (5). Dus 3 kan niet. A.",
            simpeler: "Laagste = 5, hoogste = 9. Gemiddelde moet daar tussenin liggen. 3 ligt eronder, dus 3 kan niet. = A.",
            nogSimpeler: "3 = A.",
          },
        },
      },
      {
        q: "Welke zin **klopt** over een gemiddelde?",
        options: ["Het is een berekening, geen 'echt' cijfer", "Het is altijd een rond getal", "Het is altijd hetzelfde als de modus", "Het is altijd het hoogste"],
        answer: 0,
        wrongHints: [null, "Niet altijd — een gemiddelde kan ook 6,5 zijn.", "Modus en gemiddelde zijn vaak verschillend.", "Het ligt tussen laagste en hoogste, niet automatisch het hoogste."],
      },
    ],
  },

  // STAP 2: Gemiddelde uitrekenen
  {
    title: "Gemiddelde uitrekenen — som ÷ aantal",
    explanation:
      "**Formule** *(uit je hoofd leren!)*:\n\n**Gemiddelde = som van alle getallen ÷ aantal getallen**\n\n**Stappenplan**:\n1. **Tel alle getallen op** (de som).\n2. **Tel hoeveel getallen** je hebt (het aantal).\n3. **Deel** de som door het aantal.\n\n**Voorbeeld 1 — toets-cijfers**:\nLisa heeft 4 toetsen: **6, 7, 8, 7**.\n• Stap 1: som = 6 + 7 + 8 + 7 = **28**.\n• Stap 2: aantal = **4 toetsen**.\n• Stap 3: gemiddelde = 28 ÷ 4 = **7**.\n→ Gemiddeld cijfer Lisa = **7**.\n\n**Voorbeeld 2 — temperatuur**:\nWeek temperaturen: 18°C, 20°C, 22°C, 19°C, 21°C *(5 dagen)*.\n• Som = 18 + 20 + 22 + 19 + 21 = **100 °C**.\n• Aantal = **5**.\n• Gemiddelde = 100 ÷ 5 = **20 °C**.\n\n**Voorbeeld 3 — zakgeld**:\n4 vrienden krijgen €5, €4, €6, €5 per week.\n• Som = €5 + €4 + €6 + €5 = **€20**.\n• Aantal = **4**.\n• Gemiddelde = €20 ÷ 4 = **€5 per persoon**.\n\n**Cito-truc — check je antwoord**:\nJe gemiddelde **moet tussen het laagste en hoogste getal liggen**. Als je 6/7/8/7 hebt en je antwoord is 12 → fout, want 12 is hoger dan alle getallen.",
    svg: getalRijSvg([6, 7, 8, 7], 7, "Cijfers Lisa — gem 7"),
    checks: [
      {
        q: "Cijfers: **6, 7, 8, 7**. Wat is het **gemiddelde**?",
        options: ["7", "6", "8", "28"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je goed gedeeld? 28 ÷ 4.", "Te veel — controleer de optelling.", "Dat is de som, niet het gemiddelde. Nog door 4 delen."],
        uitlegPad: {
          stappen: [
            { titel: "Som / aantal", tekst: "Som = 6+7+8+7 = 28. Aantal = 4 cijfers. Gemiddelde = 28 ÷ 4 = 7." },
          ],
          woorden: [{ woord: "som", uitleg: "Alles bij elkaar opgeteld." }, { woord: "aantal", uitleg: "Hoeveel getallen je hebt." }],
          theorie: "Gemiddelde = som ÷ aantal. Werkt altijd.",
          voorbeelden: [{ type: "stap", tekst: "Stap 1: 6+7+8+7 = 28. Stap 2: 4 cijfers. Stap 3: 28 ÷ 4 = 7." }],
          basiskennis: [{ onderwerp: "Niet alleen optellen", uitleg: "Som is pas de eerste stap. Daarna nog delen." }],
          niveaus: {
            basis: "(6+7+8+7) ÷ 4 = 28 ÷ 4 = 7. A.",
            simpeler: "Tel cijfers op: 6+7+8+7 = 28. Deel door aantal: 28 ÷ 4 = 7. Gemiddeld een 7. = A.",
            nogSimpeler: "7 = A.",
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
          theorie: "Cito-check: gemiddelde 20 ligt tussen laagste 18 en hoogste 22 → klopt qua range.",
          voorbeelden: [{ type: "schatten", tekst: "Snelle schatting: alle waarden liggen rond 20. Gemiddelde moet dan ook ~20 zijn." }],
          basiskennis: [{ onderwerp: "Eenheid meenemen", uitleg: "Het antwoord is een temperatuur, dus '°C' erbij." }],
          niveaus: {
            basis: "(18+20+22+19+21) ÷ 5 = 100 ÷ 5 = 20 °C. = A.",
            simpeler: "Som 100, gedeeld door 5 dagen = 20 °C gemiddeld. = A.",
            nogSimpeler: "20 °C = A.",
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
            basis: "(5+4+6+5) ÷ 4 = 20 ÷ 4 = €5. = A.",
            simpeler: "Som €20 ÷ 4 vrienden = €5 elk. = A.",
            nogSimpeler: "€5 = A.",
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
          theorie: "Cito-truc: schatten. Meeste waarden zijn rond 9. Gemiddelde moet ook ~9 zijn.",
          voorbeelden: [{ type: "check", tekst: "5 × 9 = 45 ✓ — de som klopt." }],
          basiskennis: [{ onderwerp: "Tussen min en max", uitleg: "9 ligt tussen 8 (laagst) en 10 (hoogst) → klopt." }],
          niveaus: {
            basis: "(8+9+10+9+9) ÷ 5 = 45 ÷ 5 = 9 km. = A.",
            simpeler: "Som 45 km ÷ 5 keer = 9 km gemiddeld per keer. = A.",
            nogSimpeler: "9 km = A.",
          },
        },
      },
    ],
  },

  // STAP 3: Modus
  {
    title: "Modus — het getal dat het meest voorkomt",
    explanation:
      "De **modus** is het **getal dat het vaakst voorkomt** in een rijtje.\n\n**Voorbeeld**: 3, 5, 4, 5, 6, 5, 7.\n• Hoe vaak komt elk getal voor?\n  - 3 → 1×\n  - 4 → 1×\n  - 5 → **3×** ← winnaar!\n  - 6 → 1×\n  - 7 → 1×\n• Modus = **5**.\n\n**Cito-truc — tellen met streepjes**:\nLeg een streepje per getal. De rij met de meeste streepjes = modus.\n\nVoorbeeld kleur-stemmen klas:\n• rood ||| (3)\n• blauw |||||||| (8)\n• groen || (2)\n• geel ||| (3)\n\n→ Modus = **blauw** *(meest gestemd)*.\n\n**Speciale gevallen**:\n• **2 modussen**: als 2 getallen even vaak voorkomen, zijn beide modussen.\n• **Geen modus**: als elk getal maar 1× voorkomt, is er geen modus.\n\n**Wanneer is modus handig?**\nBij **categorieën** zoals favoriete sport, kleur, dier. Bij **vaak voorkomende getallen** zoals schoenmaat (welke maat verkoopt het meest?).\n\nGemiddelde werkt niet voor categorieën — je kunt geen 'gemiddelde kleur' uitrekenen. Maar je kunt wel een **modus** (de meeste-gekozen kleur) bepalen.",
    svg: modusSvg(),
    checks: [
      {
        q: "Wat is de **modus** van: **3, 5, 4, 5, 6, 5, 7**?",
        options: ["5", "4", "6", "Geen modus"],
        answer: 0,
        wrongHints: [null, "Tel hoe vaak elk getal voorkomt. 5 komt 3× voor, 4 maar 1×.", "Tel opnieuw — 5 komt het vaakst.", "Er is wél een modus. Welk getal komt het vaakst voor?"],
        uitlegPad: {
          stappen: [
            { titel: "Tel hoe vaak", tekst: "3: 1×. 4: 1×. **5: 3×**. 6: 1×. 7: 1×. → De 5 komt het vaakst voor." },
            { titel: "Modus = vaakst", tekst: "De **modus** is de waarde die het vaakst voorkomt. Hier dus **5**." },
          ],
          woorden: [{ woord: "modus", uitleg: "Het vaakst voorkomende getal in een rijtje." }],
          theorie: "Modus ≠ hoogste of laagste. Modus = vaakste. Belangrijk om uit elkaar te houden.",
          voorbeelden: [{ type: "streepjes", tekst: "Cito-truc: zet een streepje per keer dat een getal voorkomt. Het getal met de meeste streepjes = modus." }],
          basiskennis: [{ onderwerp: "Speciale gevallen", uitleg: "Soms zijn er twee modussen (twee getallen even vaak). Soms is er géén modus (alles 1×)." }],
          niveaus: {
            basis: "5 (komt 3× voor). = A.",
            simpeler: "Tel: 5 komt 3× voor, alle andere maar 1×. Modus = 5. = A.",
            nogSimpeler: "5 = A.",
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
            basis: "Blauw (8 stemmen). A.",
            simpeler: "Tel hoe vaak elke kleur is gestemd. Blauw is 8×, meeste. Dus modus = blauw. = A.",
            nogSimpeler: "Blauw = A.",
          },
        },
      },
      {
        q: "Cijfers klas: 6, 7, 8, 7, 6, 7, 5. **Modus**?",
        options: ["7", "6", "8", "5"],
        answer: 0,
        wrongHints: [null, "6 komt 2× voor — 7 komt 3× voor. Meer.", "Dat is maar 1×.", "Dat is maar 1× — minst."],
        uitlegPad: {
          stappen: [
            { titel: "Tel hoe vaak", tekst: "5: 1×. 6: 2×. **7: 3×**. 8: 1×. → 7 wint." },
            { titel: "Modus = 7", tekst: "Het cijfer dat het vaakst voorkomt = de modus. Hier: een 7." },
          ],
          woorden: [{ woord: "modus", uitleg: "Het vaakst voorkomende getal." }],
          theorie: "Bij ongesorteerde rijtjes: maak een tellijst met streepjes.",
          voorbeelden: [{ type: "stap", tekst: "Cito-truc: streep weg wat je hebt geteld. 6, 7, 8, 7, 6, 7, 5 → 5:1, 6:2, 7:3, 8:1." }],
          basiskennis: [{ onderwerp: "Niet hoogste", uitleg: "8 is hoogste maar slechts 1×. Modus is vaakste, niet hoogste." }],
          niveaus: {
            basis: "7 (3×). = A.",
            simpeler: "Tel elk cijfer. 7 komt 3 keer voor. Modus = 7. = A.",
            nogSimpeler: "7 = A.",
          },
        },
      },
      {
        q: "Wanneer **kun je geen gemiddelde** uitrekenen maar wel een **modus**?",
        options: ["Bij kleuren / woorden / categorieën", "Bij hele getallen", "Bij decimale getallen", "Bij negatieve getallen"],
        answer: 0,
        wrongHints: [null, "Bij hele getallen werkt gemiddelde gewoon.", "Bij decimale getallen werkt gemiddelde ook.", "Bij negatieve getallen werkt gemiddelde ook."],
      },
    ],
  },

  // STAP 4: Mediaan
  {
    title: "Mediaan — het middelste getal",
    explanation:
      "De **mediaan** is het **middelste getal** als je alles op volgorde zet — van klein naar groot.\n\n**Stappenplan**:\n1. Zet de getallen op **volgorde** *(klein → groot)*.\n2. Pak het **middelste** getal.\n\n**Voorbeeld 1 — oneven aantal**:\nGetallen: 3, 8, 5, 9, 7.\n• Op volgorde: 3, 5, **7**, 8, 9.\n• Middelste *(positie 3 van 5)*: **7**.\n• Mediaan = **7**.\n\n**Voorbeeld 2 — even aantal**:\nGetallen: 4, 6, 8, 10 *(4 getallen)*.\n• Op volgorde: 4, 6, 8, 10.\n• Geen ÉÉN middelste — pak de **2 middelste** en neem hun gemiddelde.\n• Middelste 2: 6 en 8. Gemiddelde = (6+8) ÷ 2 = **7**.\n• Mediaan = **7**.\n\n**Cito-truc**:\n• **Oneven** aantal getallen (3, 5, 7, ...) → er is 1 middelste getal.\n• **Even** aantal getallen (2, 4, 6, ...) → neem gemiddelde van de 2 middelste.\n\n**Mediaan vs gemiddelde — wat is het verschil?**:\n• Gemiddelde gebruikt **alle getallen** (en kan beïnvloed worden door extreme uitschieters).\n• Mediaan kijkt alleen naar het **midden**. Een rare uitschieter heeft minder effect.\n\nVoorbeeld: cijfers 6, 7, 7, 7, **2** *(2 = iemand was ziek)*.\n• Gemiddelde = (6+7+7+7+2) ÷ 5 = 29 ÷ 5 = **5,8**.\n• Mediaan = 6 op volgorde = 2, 6, **7**, 7, 7 → 7.\n• Mediaan (7) geeft een beter beeld van 'normale' klas dan gemiddelde (5,8).",
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
        wrongHints: [null, "Te weinig — 4 getallen = even aantal. Middelste 2 zijn 6 en 8, gemiddelde = 7.", "Klopt qua middelste links, maar bij even aantal pak je gemiddelde van de 2 middelste.", "Klopt qua middelste rechts, maar pak gemiddelde 6+8.", "Dat is de som."],
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
            basis: "(6+8) ÷ 2 = 7. A.",
            simpeler: "Op volgorde: 4, 6, 8, 10. 4 getallen = even. Pak 6 en 8 (middelste). Gemiddelde = 7. = A.",
            nogSimpeler: "7 = A.",
          },
        },
      },
      {
        q: "**Mediaan** van: 12, 5, 8, 3, 10, 7, 9 (7 getallen)?",
        options: ["8", "7", "9", "5"],
        answer: 0,
        wrongHints: [null, "Te weinig — sorteer en pak middelste. 3, 5, 7, 8, 9, 10, 12 → middelste = 8.", "Te veel — controleer sortering.", "Te weinig."],
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
            basis: "Gesorteerd: 3,5,7,8,9,10,12. Middelste = 8. = A.",
            simpeler: "Op volgorde zetten, dan 4e positie pakken (van 7 getallen). = 8. = A.",
            nogSimpeler: "8 = A.",
          },
        },
      },
      {
        q: "Cijfers: 7, 7, 7, 7, **2** (iemand was ziek). Welk getal geeft een **eerlijker beeld** van de klas?",
        options: ["Mediaan (7)", "Gemiddelde (6)", "Modus (7)", "Niet uit te leggen"],
        answer: 0,
        wrongHints: [null, "Gemiddelde is verlaagd door 1 uitschieter (2). Mediaan filtert dat eruit.", "Modus is ook 7 — maar de vraag is wat 'eerlijker' is. Bij 1 uitschieter is mediaan beter.", "Wél — een uitschieter beïnvloedt gemiddelde maar niet mediaan."],
      },
    ],
  },

  // STAP 5: Wanneer wat gebruiken?
  {
    title: "Wanneer wat gebruiken? — keuzehulp",
    explanation:
      "Drie begrippen, drie situaties. **Welke gebruik je waarvoor?**\n\n**1. Gemiddelde** = som ÷ aantal.\n• Gebruik bij: cijfers, lengtes, gewichten, prijzen, temperaturen.\n• Voordeel: gebruikt alle getallen.\n• Nadeel: gevoelig voor uitschieters (extreem hoge of lage waardes).\n\n**2. Modus** = vaakst.\n• Gebruik bij: kleuren, schoenmaten, favoriete dieren, sport-keuzes.\n• Voordeel: werkt ook voor woorden/categorieën.\n• Nadeel: zegt niets over hoe verspreid de groep is.\n\n**3. Mediaan** = middelste op volgorde.\n• Gebruik bij: inkomens, huizenprijzen — overal waar uitschieters zijn.\n• Voordeel: minder gevoelig voor uitschieters.\n• Nadeel: een beetje meer werk (sorteren).\n\n**Cito-tip — herken de woorden in een vraag**:\n• *'gemiddeld'* → bereken gemiddelde.\n• *'meest', 'vaakst'* → modus.\n• *'middelste', 'mediaan'* → mediaan.\n\n**Voorbeeld** *'In een klas van 25 leerlingen is de gemiddelde leeftijd 11 jaar. De meest voorkomende leeftijd (modus) is 12.'*\n• Sommigen zijn dus jonger (lager dan 12) — daarom is gemiddelde 11 en modus 12.\n• Beide kloppen — verschillende dingen meten.",
    checks: [
      {
        q: "Vraag: *'Welke schoenmaat verkoopt het **meest** in onze winkel?'* Welk begrip?",
        options: ["Modus", "Gemiddelde", "Mediaan", "Som"],
        answer: 0,
        wrongHints: [null, "Gemiddelde geeft een uitkomst zoals 'maat 38,5'. Niemand draagt dat. We willen weten welke maat het VAAKST verkocht is.", "Mediaan zou het middelste zijn van alle verkopen. Geeft niet aan welke maat 'het populairst' is.", "Som is alleen het totaal aantal verkopen."],
      },
      {
        q: "Vraag: *'Wat is het **gemiddelde** rapportcijfer van de klas?'* Welk begrip?",
        options: ["Gemiddelde", "Modus", "Mediaan", "Maximum"],
        answer: 0,
        wrongHints: [null, "De vraag zegt letterlijk 'gemiddeld' — er is een specifieke maat met die naam.", "Mediaan is het middelste getal, niet wat de vraag vraagt.", "Maximum is het hoogste, niet wat de vraag vraagt."],
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
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — statistiek-mix",
    explanation:
      "Mix-toets in Cito-stijl. Verschillende sommen door elkaar — gemiddelde, modus, mediaan.\n\n**Tip**: lees rustig en kijk welk woord in de vraag staat (*gemiddeld* / *meest* / *middelste*). Daar zit de hint.\n\nVeel succes!",
    checks: [
      {
        q: "Cijfers: 7, 8, 9, 6, 5 *(5 toetsen)*. **Gemiddeld**?",
        options: ["7", "8", "35", "5"],
        answer: 0,
        wrongHints: [null, "Te veel — controleer (7+8+9+6+5) ÷ 5.", "Dat is de som — nog ÷ 5.", "Dat is de laagste."],
      },
      {
        q: "Schoenen verkocht: maat 38, 39, 38, 40, 38, 41, 39. **Modus**?",
        options: ["38", "39", "40", "41"],
        answer: 0,
        wrongHints: [null, "Tel: 38 komt 3× voor, 39 komt 2× voor.", "39 komt 2× — minder dan 38.", "40 komt maar 1×.", "41 komt maar 1×."],
      },
      {
        q: "Leeftijden: 8, 10, 12, 9, 11. **Mediaan**?",
        options: ["10", "8", "12", "11"],
        answer: 0,
        wrongHints: [null, "Sorteer eerst: 8, 9, 10, 11, 12. Middelste = 10.", "Dat is de laagste.", "Dat is de hoogste.", "Dat is op positie 4 — niet middelste."],
      },
      {
        q: "Temperaturen 4 dagen: 18, 20, 22, 20 °C. **Gemiddelde temperatuur**?",
        options: ["20 °C", "18 °C", "80 °C", "22 °C"],
        answer: 0,
        wrongHints: [null, "Te weinig — controleer (18+20+22+20) ÷ 4 = 80 ÷ 4 = 20.", "Dat is de som — nog ÷ 4.", "Dat is de hoogste."],
      },
      {
        q: "Klas-test: 6, 6, 6, 7, 8. **Modus** EN **mediaan** zijn allebei ... ?",
        options: ["6", "7", "8", "Ze verschillen — modus=6, mediaan=7"],
        answer: 0,
        wrongHints: [null, "Niet beide 7 — modus is 6 (komt 3× voor). Mediaan na sortering = middelste van 5 = positie 3 = 6.", "Niet beide 8 — 8 komt maar 1× voor.", "Toch wél hetzelfde hier: modus = 6 (3× voor) en mediaan na sortering = middelste = 6."],
      },
      {
        q: "**Wanneer kan een gemiddelde geen geheel getal zijn**?",
        options: ["Vrijwel altijd kan dat — bv. cijfers 6 en 7 → gem 6,5", "Nooit", "Alleen bij negatieve getallen", "Alleen bij heel veel getallen"],
        answer: 0,
        wrongHints: [null, "Wél — 2 cijfers (6+7)/2 = 6,5 is een normaal gemiddelde.", "Dat is niet de regel — gemiddeldes met decimalen komen super vaak voor.", "Ook bij weinig getallen kan een gemiddelde decimaal zijn."],
      },
      { q: "Gem van 3, 5, 7?", options: ["5","15","3","7"], answer: 0, wrongHints: [null, "Dat is som.", "Min.", "Max."] },
      { q: "Modus van 4, 7, 4, 9, 4, 7, 2?", options: ["4","7","9","2"], answer: 0, wrongHints: [null, "2 keer.", "1 keer.", "1 keer."] },
      { q: "Mediaan van 5, 2, 8, 1, 4?", options: ["4","2","8","5"], answer: 0, wrongHints: [null, "Niet zonder sorteren.", "Niet.", "Niet zonder sorteren."] },
      { q: "Mediaan van 4, 6, 8, 10?", options: ["7","6","8","9"], answer: 0, wrongHints: [null, "Een midden.", "Een midden.", "Niet."] },
      { q: "Gem van 10, 20, 30, 40?", options: ["25","30","100","40"], answer: 0, wrongHints: [null, "Niet — middelpunt klopt.", "Som.", "Max."] },
      { q: "5 toetsen, gemiddelde 7. Som?", options: ["35","12","7","75"], answer: 0, wrongHints: [null, "Niet — som = aantal × gem.", "Gem.", "Te veel."] },
      { q: "Bereik van 12, 5, 18, 9, 3?", options: ["15","18","12","3"], answer: 0, wrongHints: [null, "Max alleen.", "Niet.", "Min alleen."] },
      { q: "Modus van 1,2,3,4,5 (alle 1×)?", options: ["Geen modus","1","5","3"], answer: 0, wrongHints: [null, "Niet — vaakst is niemand.", "Niet.", "Niet."] },
      { q: "Welk getal in een rij komt **vaakst** voor: 3, 5, 5, 5, 7, 7, 9?", options: ["5","7","3","9"], answer: 0, wrongHints: [null, "2 keer.", "1 keer.", "1 keer."] },
      { q: "Wanneer is mediaan zinvoller dan gemiddelde?", options: ["Bij uitschieters","Bij weinig getallen","Nooit","Altijd"], answer: 0, wrongHints: [null, "Niet.", "Wel soms.", "Niet altijd."] },
      { q: "Een **uitschieter** is?", options: ["Extreem hoog/laag getal dat van rest afwijkt","Een wedstrijd","Een spel","Niet relevant"], answer: 0, wrongHints: [null, "Niet relevant.", "Niet.", "Wel."] },
      { q: "Welke maat verandert het meest als je 1 grote uitschieter toevoegt?", options: ["Gemiddelde","Mediaan","Modus","Geen"], answer: 0, wrongHints: [null, "Mediaan verschuift maar weinig — de middelste blijft bijna gelijk.", "Modus blijft meestal hetzelfde — vaakste-getal verandert niet vlug.", "Eén van deze maten reageert wél sterk op een uitschieter."] },
      { q: "5 keer gegooid: 3, 5, 5, 6, 6. Mediaan?", options: ["5","6","4","3"], answer: 0, wrongHints: [null, "2 middelste.", "Te laag.", "Te laag."] },
      { q: "Gem van 4 en 8?", options: ["6","12","4","2"], answer: 0, wrongHints: [null, "Niet — dat is som.", "Klein.", "Niet."] },
      { q: "Welke verschilt: gem 5, modus 5, mediaan 5 — kan dat?", options: ["Ja — vooral bij symmetrische data","Nooit","Alleen bij 1 getal","Alleen bij 2 getallen"], answer: 0, wrongHints: [null, "Wel.", "Niet.", "Niet."] },
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

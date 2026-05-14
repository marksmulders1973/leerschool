// Leerpad: Vermenigvuldigingstafels (1 t/m 10) — groep 4-5 PO.
// Cito-onderdeel rekenen-basis. Referentieniveau 1F.
// 6 stappen met uitlegPad. Belangrijk fundament voor groep 6-8.

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

const stepEmojis = ["✖️", "🟢", "🟡", "🔴", "💡", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een tafel?", emoji: "✖️", from: 0, to: 0 },
  { letter: "B", title: "Makkelijke tafels (2, 5, 10)", emoji: "🟢", from: 1, to: 1 },
  { letter: "C", title: "Basis-tafels (3, 4)", emoji: "🟡", from: 2, to: 2 },
  { letter: "D", title: "Lastige tafels (6, 7, 8, 9)", emoji: "🔴", from: 3, to: 3 },
  { letter: "E", title: "Slimme tafel-trucs", emoji: "💡", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function tafelRijSvg(getallen, tafel) {
  const w = 320, h = 90;
  const cellW = 30, startX = 30;
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

function gridSvg(rijen, kolommen, label) {
  const w = 320, h = 160;
  const cellW = 22;
  const startX = (w - kolommen * cellW) / 2;
  const startY = 45;
  let cells = "";
  for (let r = 0; r < rijen; r++) {
    for (let c = 0; c < kolommen; c++) {
      const x = startX + c * cellW;
      const y = startY + r * cellW;
      cells += `<rect x="${x}" y="${y}" width="${cellW - 2}" height="${cellW - 2}" fill="rgba(105,240,174,0.4)" stroke="${COLORS.curve}" stroke-width="0.5"/>`;
    }
  }
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">${label}</text>
${cells}
<text x="${w / 2}" y="${h - 5}" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">${rijen} rijen × ${kolommen} kolommen = ${rijen * kolommen} vakjes</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is een tafel?
  {
    title: "Wat is een tafel (vermenigvuldigen)?",
    explanation:
      "Een **tafel** is een **rijtje vermenigvuldigingen** met hetzelfde getal.\n\n**Voorbeeld — tafel van 3**:\n• 1 × 3 = 3\n• 2 × 3 = 6\n• 3 × 3 = 9\n• 4 × 3 = 12\n• 5 × 3 = 15\n• ...tot 10 × 3 = 30.\n\nElk antwoord is **3 meer** dan de vorige *(stappen van 3)*.\n\n**Wat betekent 'keer'?**\n• **3 × 4** = **3 keer 4** = 4 + 4 + 4 = 12.\n• **5 × 2** = 5 keer 2 = 2 + 2 + 2 + 2 + 2 = 10.\n\nDus 'keer' is **hetzelfde optellen, maar korter**.\n\n**Waarom tafels leren?**\nBij **redactiesommen** *(verhaaltjes-sommen)* en **rekenen op grote getallen** heb je tafels nodig:\n• 4 zakjes met 6 koekjes = 4 × 6 = 24 koekjes.\n• 1 boek kost €7, 5 boeken kosten 5 × €7 = €35.\n\n**Belangrijke regel**:\nDe volgorde **maakt niet uit**:\n• 3 × 4 = 12.\n• 4 × 3 = 12.\nDit heet de **wisselregel** (of 'commutatief').\n\n**Cito-truc — 'rooster' tekenen**:\nBij 4 × 6 stel je voor: 4 rijen van 6 vakjes. Totaal = 4 × 6 = 24 vakjes. Helpt om 'keer' te visualiseren.",
    svg: gridSvg(4, 6, "4 × 6 = 24 vakjes"),
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
        options: ["Ja, wisselregel", "Nee", "Soms", "Hangt af"],
        answer: 0,
        wrongHints: [null, "Wel waar — controleer: beide = 12.", "Altijd, niet soms.", "Eenduidig — altijd."],
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
          theorie: "Cito-truc — gebruik de wisselregel om makkelijker te rekenen. **7 × 3** voelt soms lastig, maar **3 × 7** ('drie keer zeven') is iets vertrouwder. Beide = 21. Kies de versie die voor jou snelste werkt.",
          voorbeelden: [
            { type: "stap", tekst: "8 × 2 = 2 × 8 = 16. Vaak weet je '2 keer 8' sneller dan '8 keer 2'." },
            { type: "stap", tekst: "Let op: wisselregel werkt NIET bij delen of aftrekken! 10 − 3 ≠ 3 − 10." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij elke ×-som mag je de getallen omdraaien. Pak de makkelijkere kant." }],
          niveaus: {
            basis: "Ja — wisselregel. = A.",
            simpeler: "3 × 4 = 12 én 4 × 3 = 12. Allebei 12. Volgorde maakt niets uit. = A.",
            nogSimpeler: "Ja = A.",
          },
        },
      },
      {
        q: "Hoeveel is **2 × 6**?",
        options: ["12", "8", "26", "10"],
        answer: 0,
        wrongHints: [null, "Optelling 2+6.", "Plak-getal.", "Te weinig."],
      },
    ],
  },

  // STAP 2: Makkelijke tafels (2, 5, 10)
  {
    title: "Makkelijke tafels — 2, 5 en 10",
    explanation:
      "**Sommige tafels zijn extra makkelijk**. Begin hiermee!\n\n**Tafel van 10** — gewoon 0 erbij plakken:\n• 1 × 10 = 10\n• 2 × 10 = 20\n• 3 × 10 = 30\n• 4 × 10 = 40\n• ...tot 10 × 10 = 100.\n\n**Tafel van 5** — eindigt op 5 of 0:\n• 1 × 5 = 5\n• 2 × 5 = 10\n• 3 × 5 = 15\n• 4 × 5 = 20\n• 5 × 5 = 25\n• 6 × 5 = 30\n• 7 × 5 = 35\n• 8 × 5 = 40\n• 9 × 5 = 45\n• 10 × 5 = 50.\n\n**Tafel van 2** — gewoon verdubbelen:\n• 1 × 2 = 2\n• 2 × 2 = 4\n• 3 × 2 = 6\n• 4 × 2 = 8\n• 5 × 2 = 10\n• ...tot 10 × 2 = 20.\n\n**Cito-truc**:\n• Tafel van 10 → cijfer + 0 erachter.\n• Tafel van 5 → cijfer × 10, dan ÷ 2. *(Of: 5, 10, 15, 20... stappen van 5.)*\n• Tafel van 2 → cijfer + cijfer (verdubbelen).\n\n**Slimme trucs**:\n• **5 × 8** = 5 × 10 ÷ 2 = 50 ÷ 2 = **40**.\n• **2 × 7** = 7 + 7 = **14**.\n• **10 × 12** = 120 (gewoon 0 erbij).",
    svg: tafelRijSvg([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], "10"),
    checks: [
      {
        q: "**7 × 10** = ?",
        options: ["70", "17", "100", "7"],
        answer: 0,
        wrongHints: [null, "Optelling 7+10.", "Te veel.", "Geen vermenigvuldiging."],
      },
      {
        q: "**6 × 5** = ?",
        options: ["30", "25", "11", "35"],
        answer: 0,
        wrongHints: [null, "Dat is 5 × 5.", "Optelling.", "Dat is 7 × 5."],
      },
      {
        q: "**9 × 2** = ?",
        options: ["18", "11", "20", "16"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Dat is 10 × 2.", "Dat is 8 × 2."],
      },
      {
        q: "**3 × 5** = ?",
        options: ["15", "8", "35", "13"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Optelling met 10."],
      },
    ],
  },

  // STAP 3: Basis tafels (3 en 4)
  {
    title: "Basis-tafels — 3 en 4",
    explanation:
      "Na de makkelijke tafels komen 3 en 4.\n\n**Tafel van 3** — stappen van 3:\n• 1 × 3 = 3\n• 2 × 3 = 6\n• 3 × 3 = 9\n• 4 × 3 = 12\n• 5 × 3 = 15\n• 6 × 3 = 18\n• 7 × 3 = 21\n• 8 × 3 = 24\n• 9 × 3 = 27\n• 10 × 3 = 30.\n\n**Tafel van 4** — stappen van 4 (= 2 × van tafel 2):\n• 1 × 4 = 4\n• 2 × 4 = 8\n• 3 × 4 = 12\n• 4 × 4 = 16\n• 5 × 4 = 20\n• 6 × 4 = 24\n• 7 × 4 = 28\n• 8 × 4 = 32\n• 9 × 4 = 36\n• 10 × 4 = 40.\n\n**Cito-truc — tafel van 4 via 2**:\nElk antwoord in tafel-4 is **dubbel** van tafel-2.\n• Tafel-2: 2, 4, 6, 8, 10, ...\n• Tafel-4: 4, 8, 12, 16, 20, ... *(dubbele)*.\n\n**Oefen-tip**:\nLeer eerst tafel-3 en tafel-4 als rij op (3, 6, 9, 12, 15...) en (4, 8, 12, 16, 20...). Net als versjes. Dan kun je je rij opzeggen en vinden waar het antwoord staat.",
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
            basis: "27. A.",
            simpeler: "Tafel van 3 op: 3, 6, 9, 12, 15, 18, 21, 24, 27. Negende stap = 27. Of: 10×3=30, dan -3 = 27. = A.",
            nogSimpeler: "27 = A.",
          },
        },
      },
      {
        q: "**6 × 4** = ?",
        options: ["24", "10", "64", "20"],
        answer: 0,
        wrongHints: [null, "Optelling.", "Plak-getal.", "Dat is 5 × 4."],
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
          theorie: "Cito-onthoud-tip: '8 × 7 = 56' — zeg het hardop, als een rijmpje. Of: **'56 = 7 × 8'** (5-6 in volgorde komt na 7-8). Sommige juffen leren dit als 'mooie reeks': 5-6-7-8.",
          voorbeelden: [
            { type: "stap", tekst: "Met wisselregel: 8 × 7 = 7 × 8. Zeg het zoals jij het makkelijkst onthoudt." },
            { type: "stap", tekst: "Niet 48 (= 6 × 8 of 8 × 6). Niet 64 (= 8 × 8). Goed: **56**." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Top-3 lastige tafel-sommen: 7×8=56, 7×9=63, 8×9=72. Leer deze 3 expliciet — ze komen op Cito vaak terug." }],
          niveaus: {
            basis: "56. = A.",
            simpeler: "8 × 7 = (8 × 10) − (8 × 3) = 80 − 24 = 56. = A.",
            nogSimpeler: "56 = A.",
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
    ],
  },

  // STAP 5: Slimme trucs
  {
    title: "Slimme tafel-trucs",
    explanation:
      "Je hoeft tafels niet **uit het hoofd te kennen** als je **trucjes** kunt gebruiken.\n\n**Truc 1 — Wisselregel** *(volgorde wisselen)*:\n3 × 7 = 7 × 3. Kies de versie die jij makkelijker vindt.\n\n**Truc 2 — Splitsen**:\nGroot getal splitsen in kleinere delen.\n• **7 × 12** = 7 × (10 + 2) = (7 × 10) + (7 × 2) = 70 + 14 = **84**.\n• **8 × 13** = (8 × 10) + (8 × 3) = 80 + 24 = **104**.\n• **6 × 25** = (6 × 20) + (6 × 5) = 120 + 30 = **150**.\n\n**Truc 3 — Via tafel-10**:\nTafel-10 is makkelijkst. Werk daar omheen.\n• **9 × n** = (10 × n) − n.\n• **11 × n** = (10 × n) + n.\n• **15 × n** = (10 × n) + (5 × n).\n\n**Truc 4 — Verdubbelen**:\n• 4 × n = (2 × n) × 2.\n• 8 × n = (4 × n) × 2 = ((2 × n) × 2) × 2.\n\n**Truc 5 — Helft + helft**:\n• 5 × n = (10 × n) ÷ 2.\n• Bv: 5 × 24 = (10 × 24) ÷ 2 = 240 ÷ 2 = **120**.\n\n**Truc 6 — Bekende dingen herkennen**:\n• 9 × 9 = **81**.\n• 8 × 8 = **64**.\n• 7 × 7 = **49**.\n• 6 × 6 = **36**.\n• 5 × 5 = **25**.\n• 12 × 12 = 144.\n\n**Cito-tip — vertrouwen op trucs**:\nAls je een tafel echt niet weet, gebruik een truc. Schrijf op kladpapier wat je deed. Sneller dan blind gokken.",
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
          theorie: "Cito-truc voor ×25: er is ook een **trucje** — × 25 = ÷ 4 × 100. Bv: 6 × 25 = 6 ÷ 4 × 100 = 1,5 × 100 = 150. Maar splitsen werkt altijd, ook bij rare getallen. Begin met splitsen.",
          voorbeelden: [
            { type: "stap", tekst: "**8 × 25** via splitsen: (8 × 20) + (8 × 5) = 160 + 40 = 200." },
            { type: "stap", tekst: "**4 × 15** via splitsen: (4 × 10) + (4 × 5) = 40 + 20 = 60." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Splits het lastige getal in een **tien-deel** (× 10, 20, 30...) + een **rest-deel** (× 1, 2, 3, 5...). Tel apart, dan optellen." }],
          niveaus: {
            basis: "150. = A.",
            simpeler: "6 × 25 = 6 × 20 + 6 × 5 = 120 + 30 = 150. = A.",
            nogSimpeler: "150 = A.",
          },
        },
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — tafel-mix",
    explanation:
      "Mix-toets in Cito-stijl. Alle tafels door elkaar + redactiesommen.\n\nVeel succes!",
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
        wrongHints: [null, "Klopt qua som.", "Klopt qua som.", "Klopt qua som."],
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
      { q: "Welke truc helpt bij **9-tafel**?", options: ["Stappen van −1 in tientallen, +1 in eenheden","Tafel optellen","Niet relevant","Per stuk leren"], answer: 0, wrongHints: [null, "Niet specifiek.", "Wel handig.", "Werkt traag."] },
      { q: "6 × 8 = ?", options: ["48","14","56","42"], answer: 0, wrongHints: [null, "Som.", "7×8.", "6×7."] },
      { q: "11 × 11 = ?", options: ["121","111","112","144"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "12×12."] },
      { q: "12 × 4 = ?", options: ["48","16","44","36"], answer: 0, wrongHints: [null, "Som.", "Niet.", "12×3."] },
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

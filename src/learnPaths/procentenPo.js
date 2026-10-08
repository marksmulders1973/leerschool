// Leerpad: Procenten — voor groep 5-8 (PO-versie)
// 7 stappen in 5 hoofdstukken (A t/m E).
// Doelgroep: groep 5-8 basisschool.
// Sprint-5+ S4 audit-3 (2026-05-08): tweede S4-content-pad voor Cito-ICP.
// Eenvoudigere taal en context dan procenten.js (klas1-vwo).

const COLORS = {
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["💯","➗","🛒","🍕","🎒","💸","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een procent?", emoji: "💯", from: 0, to: 1 },
  { letter: "B", title: "Hoeveel is X% van iets?", emoji: "🛒", from: 2, to: 3 },
  { letter: "C", title: "Welk % is dit van het totaal?", emoji: "🎒", from: 4, to: 4 },
  { letter: "D", title: "Korting in de winkel", emoji: "💸", from: 5, to: 5 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 6, to: 6 },
];

// Visualisatie: 10×10 grid met X cellen ingekleurd voor procentvoorstelling.
function gridSvg(percentage, label) {
  const cellen = [];
  const rij = 10, col = 10, totaal = 100;
  const cellSize = 18;
  const startX = 60, startY = 30;
  for (let i = 0; i < totaal; i++) {
    const r = Math.floor(i / col);
    const c = i % col;
    const x = startX + c * cellSize;
    const y = startY + r * cellSize;
    const fill = i < percentage ? COLORS.point : "rgba(255,255,255,0.06)";
    cellen.push(`<rect x="${x}" y="${y}" width="${cellSize - 1}" height="${cellSize - 1}" fill="${fill}" stroke="${COLORS.curve}" stroke-width="0.5"/>`);
  }
  return `<svg viewBox="0 0 300 270">
<rect x="0" y="0" width="300" height="270" fill="${COLORS.paper}"/>
<text x="150" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="14" font-family="Arial" font-weight="bold">${percentage}% — ${label}</text>
${cellen.join("")}
<text x="150" y="240" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">${percentage} van de 100 vakjes</text>
<text x="150" y="258" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">(per honderd)</text>
</svg>`;
}

// Tabel: % ↔ breuk ↔ kommagetal voor de meest gebruikte percentages.
function tabelSvg() {
  const rijen = [
    { p: "10%", b: "1/10", k: "0,1" },
    { p: "25%", b: "1/4",  k: "0,25" },
    { p: "50%", b: "1/2",  k: "0,5" },
    { p: "75%", b: "3/4",  k: "0,75" },
    { p: "100%", b: "1",   k: "1" },
  ];
  let svg = `<svg viewBox="0 0 320 230">
<rect x="0" y="0" width="320" height="230" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="14" font-family="Arial" font-weight="bold">3 manieren om hetzelfde te zeggen</text>
<rect x="20" y="35" width="280" height="180" fill="rgba(0,200,83,0.05)" stroke="${COLORS.curve}" stroke-width="1.2" rx="6"/>
<text x="65" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">%</text>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">breuk</text>
<text x="255" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">komma</text>
<line x1="20" y1="68" x2="300" y2="68" stroke="${COLORS.curve}" stroke-width="0.8"/>
<line x1="110" y1="35" x2="110" y2="215" stroke="${COLORS.curve}" stroke-width="0.5"/>
<line x1="210" y1="35" x2="210" y2="215" stroke="${COLORS.curve}" stroke-width="0.5"/>`;
  rijen.forEach((r, i) => {
    const y = 90 + i * 26;
    svg += `<text x="65" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">${r.p}</text>`;
    svg += `<text x="160" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">${r.b}</text>`;
    svg += `<text x="255" y="${y}" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">${r.k}</text>`;
  });
  svg += `</svg>`;
  return svg;
}

const steps = [
  // STAP 1: Wat is %?
  {
    title: "% betekent 'per honderd'",
    explanation: "Het teken **%** spreek je uit als 'procent'. Het betekent altijd hetzelfde: **per 100**.\n\nDus:\n• **30%** = 30 per 100\n• **50%** = 50 per 100 = de helft\n• **100%** = 100 per 100 = alles\n• **10%** = 10 per 100 = een tiende\n\n**Plaatje om te onthouden**:\nStel je hebt **100 snoepjes**. Je geeft er 30 weg. Dan heb je **30%** weggegeven.\n\n**Waarom % handig is**:\nMet procenten kun je **vergelijken** tussen dingen die verschillend groot zijn. Stel: \n• Klas A heeft 5 mensen met dieren — totaal 25 leerlingen.\n• Klas B heeft 4 mensen met dieren — totaal 20 leerlingen.\n\nWelke klas heeft *naar verhouding* meer dieren-bezitters? Met procenten is dat makkelijk: beide hebben **20%**. Dus gelijk!\n\n**Procent in het echt**:\n• 50% korting in de winkel\n• 80% van de klas slaagde\n• 25% kans op regen\n• ongeveer 5% van de wereldbevolking spreekt Engels als moedertaal",
    svg: gridSvg(30, "30 van de 100 vakjes"),
    checks: [
      {
        q: "Wat betekent **40%**?",
        options: ["40 per 100","40 keer iets","40 + 100","40 jaar"],
        answer: 0,
        wrongHints: [null,"Procent betekent niet 'keer'. Wat zou 'per' betekenen?","Niet optellen. Procent is een verhouding.","Procent gaat niet over leeftijd of jaren."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent procent?", tekst: "Het woord **procent** komt van het Latijnse 'per centum' = 'per honderd'. Dus 40% betekent letterlijk: **40 per 100**." },
            { titel: "Voorbeeld", tekst: "Als 40% van de klas een meisje is, dan zou je in een klas van 100 leerlingen 40 meisjes hebben. In een klas van 20: ook 40% = 8 meisjes (40 per 100 = 8 per 20)." },
            { titel: "Verhouding, geen aantal", tekst: "% is een **verhouding**, geen vast aantal. 40% van 10 = 4. 40% van 1.000 = 400. Het GETAL verandert, de VERHOUDING blijft." },
          ],
          woorden: [
            { woord: "procent (%)", uitleg: "Per honderd (per centum, Latijns)." },
            { woord: "verhouding", uitleg: "Hoeveel van het ene tegenover hoeveel van het andere." },
          ],
          theorie: "Toets-tip: lees het symbool % als 'per 100' of 'van 100'. Dan begrijp je elk procent-vraagstuk. 25% = 25 per 100 = een kwart.",
          voorbeelden: [
            { type: "stap", tekst: "100% = 100 per 100 = ALLES." },
            { type: "stap", tekst: "50% = 50 per 100 = de HELFT." },
            { type: "stap", tekst: "10% = 10 per 100 = een TIENDE." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "% = per 100. Onthoud dat en je begrijpt elke procent-vraag." }],
          niveaus: {
            basis: "Procent (%) = per 100. 40% = 40 per 100.",
            simpeler: "Als je 100 dingen hebt en 40 zijn rood = 40%.",
            nogSimpeler: "% = per 100.",
          },
        },
      },
      {
        q: "**100%** — wat betekent dat?",
        options: ["Alles","De helft","Honderd dingen","Niets"],
        answer: 0,
        wrongHints: [null, "De helft is niet hetzelfde als alles — welk percentage hoort bij de helft?", "Niet 'honderd dingen' — het hangt af van waarvan je 100% hebt. 100% van 5 is bijvoorbeeld 5.", "Niets is het tegenovergestelde van alles — welk percentage hoort daarbij?"],
        uitlegPad: {
          stappen: [
            { titel: "100% = het hele ding", tekst: "**100%** betekent **ALLES** — het hele geheel waar je het over hebt. Het is niet altijd 100 dingen!" },
            { titel: "Voorbeelden", tekst: "• 100% van een **pizza** = de hele pizza (8 stukken bv.)\n• 100% van een **klas van 25** kinderen = alle 25\n• 100% van een **fles van €5** = €5\n• 100% van **jouw zakgeld** = je hele bedrag." },
            { titel: "Tegenovergesteld: 0%", tekst: "**0% = niets**. En **50% = de helft**. **100% staat altijd voor het geheel** — wat dat geheel ook is.\n→ 100% van iets = dat hele iets." },
          ],
          woorden: [
            { woord: "100%", uitleg: "Alles, het geheel." },
            { woord: "0%", uitleg: "Niets." },
            { woord: "50%", uitleg: "De helft." },
          ],
          theorie: "Toets-truc 100% denken: 'het geheel' = wat je telt. 100% van 30 leerlingen = alle 30. 100% van een meter = 1 meter (= 100 cm). 100% past altijd bij ALLES — niet '100 stuks'.",
          voorbeelden: [
            { type: "stap", tekst: "Spaarpot bevat €40. 100% van je spaargeld = €40 (alles)." },
            { type: "stap", tekst: "Beker met 200 ml water. 100% vol = 200 ml." },
            { type: "stap", tekst: "Lege batterij = 0%, vol = 100%. Tussenin: 50% = halve lading." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "100% = ALLES (zonder uitzondering). 0% = NIETS. 50% = HELFT. Onthoud deze 3." }],
          niveaus: {
            basis: "100% = alles (het hele ding).",
            simpeler: "100% van een pizza = de hele pizza. Niet 100 stuks.",
            nogSimpeler: "Alles",
          },
        },
      },
      {
        q: "Stel: 100 leerlingen op school — **45** zijn meisjes. Welk percentage is dat?",
        options: ["45%","50%","55%","4,5%"],
        answer: 0,
        wrongHints: [null,"Niet automatisch de helft — tel rustig.","Te veel — als 45 meisjes en 55 jongens, hoeveel meisjes is dat?","Dat is tien keer te weinig — hoeveel per 100 zijn het?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Hoe spreek je het teken **%** uit?",
        options: ["procent", "honderd", "keer", "plus"],
        answer: 0,
        wrongHints: [
          null,
          "Het teken betekent wel 'per 100', maar je zegt een ander woord.",
          "'Keer' heeft een eigen teken: ×.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Het teken %",
              tekst: "Het teken **%** spreek je uit als **procent**.",
            },
            {
              titel: "Wat betekent het?",
              tekst: "Procent betekent **per 100**. 30% zeg je als 'dertig procent' en het betekent 30 per 100.",
            },
          ],
          woorden: [
            {
              woord: "procent (%)",
              uitleg: "Per 100.",
            },
          ],
          theorie: "% = procent = per 100.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "25% = 'vijfentwintig procent'.",
            },
            {
              type: "stap",
              tekst: "100% = 'honderd procent' = alles.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Onthoud",
              uitleg: "Het teken % lees je als 'procent'.",
            },
          ],
          niveaus: {
            basis: "% spreek je uit als 'procent'.",
            simpeler: "30% zeg je: dertig procent.",
            nogSimpeler: "% = procent.",
          },
        },
      },
      {
        q: "Waarom zijn procenten handig?",
        options: [
          "Je kunt groepen van verschillende grootte vergelijken",
          "Je hoeft er dan helemaal nooit meer bij te rekenen",
          "Je kunt er alleen bedragen in euro's mee uitrekenen",
          "Grote getallen worden er altijd nog groter van",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Ook met procenten moet je vaak nog rekenen.",
          "Denk aan '80% van de klas slaagde'. Gaat dat over geld?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Verschillende groepen",
              tekst: "Klas A heeft 25 leerlingen, klas B heeft 20. Je kunt aantallen dan lastig eerlijk vergelijken.",
            },
            {
              titel: "Procent helpt",
              tekst: "Met procenten reken je alles om naar **per 100**. Klas A: 5 van 25 = 20%. Klas B: 4 van 20 = 20%. Nu zie je: **naar verhouding gelijk**.",
            },
          ],
          woorden: [
            {
              woord: "vergelijken",
              uitleg: "Kijken wat meer, minder of gelijk is.",
            },
            {
              woord: "naar verhouding",
              uitleg: "Eerlijk vergeleken, rekening houdend met hoe groot de groep is.",
            },
          ],
          theorie: "Procenten maken groepen van verschillende grootte eerlijk vergelijkbaar, omdat alles 'per 100' wordt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "50% korting in de winkel.",
            },
            {
              type: "stap",
              tekst: "80% van de klas slaagde.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Procent = per 100. Dan is elke groep even groot gemaakt.",
            },
          ],
          niveaus: {
            basis: "Met procenten kun je groepen van verschillende grootte vergelijken.",
            simpeler: "Alles wordt 'per 100'. Dan kun je eerlijk vergelijken.",
            nogSimpeler: "Procent = eerlijk vergelijken.",
          },
        },
      },
      {
        q: "In een zak zitten **100 snoepjes**. Je geeft er **30** weg. Hoeveel procent heb je **nog over**?",
        options: ["70%", "30%", "100%", "130%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat deel heb je weggegeven. De vraag gaat over wat er over is.",
          null,
          "Kan er meer over zijn dan je had?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Lees de vraag",
              tekst: "Je geeft **30** weg. De vraag is: hoeveel heb je **nog over**?",
            },
            {
              titel: "Reken het uit",
              tekst: "100 − 30 = **70** snoepjes over. 70 van de 100 = **70%**.",
            },
          ],
          woorden: [
            {
              woord: "over",
              uitleg: "Wat er nog is nadat je iets weggaf.",
            },
          ],
          theorie: "Alles samen is 100%. Weggegeven + over = 100%.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Je eet 20 van de 100 koekjes: 80% is over.",
            },
            {
              type: "stap",
              tekst: "Je geeft 50 van de 100 weg: 50% is over.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Over = 100% − weggegeven.",
            },
          ],
          niveaus: {
            basis: "100 − 30 = 70 over, dus 70%.",
            simpeler: "30% weg, dan is 70% over.",
            nogSimpeler: "70%",
          },
        },
      },
      {
        q: "'**80%** van de klas slaagde.' Wat betekent dat?",
        options: [
          "Van elke 100 kinderen slaagden er 80",
          "Van elke 100 kinderen zakten er 80",
          "Van elke 10 kinderen slaagden er 80",
          "Van elke 80 kinderen slaagde er 1",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Kijk goed: gaat het over slagen of zakken?",
          "Kunnen er van 10 kinderen 80 slagen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "% = per 100",
              tekst: "**80%** betekent **80 per 100**.",
            },
            {
              titel: "In de zin",
              tekst: "80% van de klas slaagde = van elke 100 kinderen slaagden er 80. Dat is bijna iedereen.",
            },
          ],
          woorden: [
            {
              woord: "procent (%)",
              uitleg: "Per 100.",
            },
            {
              woord: "slagen",
              uitleg: "Een toets of examen halen.",
            },
          ],
          theorie: "Lees een percentage altijd als 'zoveel van elke 100'.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "25% kans op regen = 25 van elke 100 keer.",
            },
            {
              type: "stap",
              tekst: "50% korting = de helft van de prijs eraf.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "X% = X van elke 100.",
            },
          ],
          niveaus: {
            basis: "80% = 80 van elke 100 kinderen slaagden.",
            simpeler: "80 per 100 slaagden.",
            nogSimpeler: "80% = 80 van de 100.",
          },
        },
      },
    ],
  },

  // STAP 2: % ↔ breuk ↔ komma
  {
    title: "Procent, breuk en kommagetal",
    explanation: "Een procent is **3 manieren om hetzelfde te zeggen**. Procent — breuk — kommagetal.\n\nVoorbeeld:\n• **50%** = **½** = **0,5**\n• **25%** = **¼** = **0,25**\n• **75%** = **¾** = **0,75**\n• **10%** = **¹⁄₁₀** = **0,1**\n\n**Truc 1: van % naar kommagetal**\nDeel door 100 (= komma 2 plekken naar links).\n\n• 35% → 0,35\n• 8% → 0,08\n• 60% → 0,6\n\n**Truc 2: van kommagetal naar %**\nMaal 100 (= komma 2 plekken naar rechts).\n\n• 0,72 → 72%\n• 0,9 → 90%\n• 0,05 → 5%\n\n**Vier sleutel-percentages om vast uit je hoofd te leren**:\n\n| % | breuk | wat het betekent |\n|---|-------|-------|\n| **25%** | ¼ | een vierde |\n| **50%** | ½ | de helft |\n| **75%** | ¾ | drie kwart |\n| **100%** | 1 | alles |\n\nMet alleen deze 4 kun je heel veel toetsvragen al doen!",
    svg: tabelSvg(),
    checks: [
      {
        q: "**75%** = ?",
        options: ["¾","½","⅓","⅖"],
        answer: 0,
        wrongHints: [null,"De helft is minder dan 75% — welke breuk staat voor meer dan de helft?","Een derde is kleiner dan de helft — maar 75% is juist groter dan de helft.","Past niet bij de standaard-percentages."],
        uitlegPad: {
          stappen: [
            { titel: "% omzetten naar breuk", tekst: "75% = 75 per 100 = breuk 75/100. Vereenvoudig: deel teller en noemer door 25. 75÷25 = 3, 100÷25 = 4. Dus 75/100 = **3/4** = ¾." },
            { titel: "4 sleutel-percentages onthouden", tekst: "Onthoud deze 4: 25% = ¼. 50% = ½. **75% = ¾**. 100% = 1 (alles). Met deze 4 kun je heel veel doen!" },
            { titel: "Visueel", tekst: "Stel je een pizza voor in 4 stukken. 1 stuk = ¼ = 25%. 2 stukken = ½ = 50%. 3 stukken = ¾ = 75%. 4 stukken = 100%." },
          ],
          woorden: [
            { woord: "breuk", uitleg: "Teller / noemer (3/4 = 3 boven, 4 onder)." },
            { woord: "vereenvoudigen", uitleg: "Delen door gemeenschappelijke deler." },
          ],
          theorie: "Toets-vuistregel: 25% = ¼. 50% = ½. 75% = ¾. Dit zijn de meest gebruikte. Onthoud ze uit het hoofd!",
          voorbeelden: [
            { type: "stap", tekst: "75% van 20 = ¾ van 20 = 20÷4×3 = 5×3 = 15." },
            { type: "stap", tekst: "75% van 100 = 75. Hele klas? 75 van 100 leerlingen — 3 op de 4." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "25-50-75: trapje van 3 stappen, breuken ¼-½-¾." }],
          niveaus: {
            basis: "75% = ¾ (drie kwart).",
            simpeler: "Pizza van 4 stukken: 3 stukken op = 75%.",
            nogSimpeler: "75% = ¾.",
          },
        },
      },
      {
        q: "**0,25** als percentage?",
        options: ["25%","2,5%","250%","0,25%"],
        answer: 0,
        wrongHints: [null,"Je hebt de komma maar 1 plek verschoven — keer 100 betekent 2 plaatsen naar rechts.","Veel te veel — dat zou meer dan het geheel zijn.","Je moet de komma nog verschuiven: keer 100 = hoeveel plaatsen?"],
      },
      {
        q: "**60%** als kommagetal?",
        options: ["0,6","0,06","6","60"],
        answer: 0,
        wrongHints: [null,"Komma 1 plek te ver — je had 2 plekken moeten verschuiven, niet 3.","Je deelde door 10 — procent betekent per 100.","Geen kommagetal — eerst delen door 100."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**45%** als kommagetal?",
        options: ["0,45", "4,5", "0,045", "45"],
        answer: 0,
        wrongHints: [
          null,
          "Je schoof de komma maar 1 plek. Hoeveel plekken moet het bij ÷ 100?",
          "Dat is 3 plekken. Tel nog eens.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Truc 1",
              tekst: "Van % naar kommagetal: **deel door 100**. De komma gaat **2 plekken naar links**.",
            },
            {
              titel: "Doe het",
              tekst: "45 → 4,5 (1 plek) → **0,45** (2 plekken).",
            },
          ],
          woorden: [
            {
              woord: "kommagetal",
              uitleg: "Getal met een komma, zoals 0,45.",
            },
          ],
          theorie: "% → kommagetal: ÷ 100 = komma 2 plekken naar links.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "35% → 0,35.",
            },
            {
              type: "stap",
              tekst: "60% → 0,6.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Twee plekken naar links.",
            },
          ],
          niveaus: {
            basis: "45% = 0,45.",
            simpeler: "45 ÷ 100 = 0,45.",
            nogSimpeler: "0,45",
          },
        },
      },
      {
        q: "**4%** als kommagetal?",
        options: ["0,04", "0,4", "40", "0,004"],
        answer: 0,
        wrongHints: [
          null,
          "0,4 is 40%. Hoeveel plekken schoof je de komma?",
          null,
          "Dat is 3 plekken naar links. Het moeten er 2 zijn.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Truc 1",
              tekst: "Deel door 100: komma **2 plekken naar links**.",
            },
            {
              titel: "Let op de nul",
              tekst: "4 → 0,4 (1 plek) → **0,04** (2 plekken). Er komt een nul voor de 4.",
            },
          ],
          woorden: [
            {
              woord: "kommagetal",
              uitleg: "Getal met een komma, zoals 0,04.",
            },
          ],
          theorie: "Bij een percentage onder de 10 krijg je een nul na de komma: 8% = 0,08.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "8% → 0,08.",
            },
            {
              type: "stap",
              tekst: "5% → 0,05.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Onder de 10%? Dan 0,0…",
            },
          ],
          niveaus: {
            basis: "4% = 0,04.",
            simpeler: "4 ÷ 100 = 0,04.",
            nogSimpeler: "0,04",
          },
        },
      },
      {
        q: "**0,3** als percentage?",
        options: ["30%", "3%", "0,3%", "300%"],
        answer: 0,
        wrongHints: [
          null,
          "Je schoof de komma maar 1 plek. Keer 100 is 2 plekken.",
          "Je hebt de komma nog niet verschoven.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Truc 2",
              tekst: "Van kommagetal naar %: **maal 100**. De komma gaat **2 plekken naar rechts**.",
            },
            {
              titel: "Doe het",
              tekst: "0,3 → 3 (1 plek) → **30** (2 plekken). Dus 30%.",
            },
          ],
          woorden: [
            {
              woord: "percentage",
              uitleg: "Hoeveel per 100.",
            },
          ],
          theorie: "Kommagetal → %: × 100 = komma 2 plekken naar rechts.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "0,9 → 90%.",
            },
            {
              type: "stap",
              tekst: "0,72 → 72%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Twee plekken naar rechts.",
            },
          ],
          niveaus: {
            basis: "0,3 = 30%.",
            simpeler: "0,3 × 100 = 30%.",
            nogSimpeler: "30%",
          },
        },
      },
      {
        q: "**0,07** als percentage?",
        options: ["7%", "70%", "0,7%", "700%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou 0,7 zijn. Kijk naar de nul na de komma.",
          null,
          "Veel te veel: dat is meer dan alles.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Truc 2",
              tekst: "Maal 100: komma **2 plekken naar rechts**.",
            },
            {
              titel: "Doe het",
              tekst: "0,07 → 0,7 (1 plek) → **7** (2 plekken). Dus 7%.",
            },
          ],
          woorden: [
            {
              woord: "percentage",
              uitleg: "Hoeveel per 100.",
            },
          ],
          theorie: "0,07 = 7 honderdsten = 7 per 100 = 7%.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "0,05 → 5%.",
            },
            {
              type: "stap",
              tekst: "0,08 → 8%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Twee plekken naar rechts.",
            },
          ],
          niveaus: {
            basis: "0,07 = 7%.",
            simpeler: "0,07 × 100 = 7.",
            nogSimpeler: "7%",
          },
        },
      },
    ],
  },

  // STAP 3: Hoeveel is X% van Y?
  {
    title: "Hoeveel is X% van een getal?",
    explanation: "Veel toetsvragen vragen: *'Hoeveel is X% van Y?'*\n\nVoorbeeld: *'Hoeveel is 20% van 60?'*\n\n**Aanpak 1 — via 1%** *(handig voor lastige getallen)*:\n• 1% van 60 = 60 ÷ 100 = 0,6\n• 20% = 20 × 0,6 = **12**\n\n**Aanpak 2 — via kommagetal**:\n• 20% = 0,20\n• 0,20 × 60 = **12**\n\n**Aanpak 3 — slim met breuken** *(snelst voor 25/50/75/10/20%)*:\n• 50% van 60 = 60 ÷ 2 = **30** (de helft)\n• 25% van 60 = 60 ÷ 4 = **15** (een vierde)\n• 10% van 60 = 60 ÷ 10 = **6**\n• 20% van 60 = 2 × (10% van 60) = 2 × 6 = **12**\n\n**De 10%-truc** *(super-handig)*:\n10% is altijd **÷ 10**. Daarna kun je elke 10%-stap optellen.\n\nVoorbeelden:\n• 10% van 80 = 8\n• 30% van 80 = 3 × 8 = 24\n• 70% van 80 = 7 × 8 = 56\n\n**Hint bij de Doorstroomtoets**:\nKijk eerst of het een 'mooi' percentage is (10, 25, 50, 75, 100). Zo ja → gebruik de breuken-truc. Zo niet → eerst 1% of 10% berekenen, dan vermenigvuldigen.",
    checks: [
      {
        q: "**50% van 80** = ?",
        options: ["40","20","60","8"],
        answer: 0,
        wrongHints: [null,"Te weinig — 50% is de helft. Wat is de helft van 80?","Te veel — 50% is precies de helft, niet meer.","Veel te weinig — dat is 10% van 80."],
      },
      {
        q: "**10% van 250** = ?",
        options: ["25","2,5","250","100"],
        answer: 0,
        wrongHints: [null,"Komma verkeerd — heb je per ongeluk × 0,01 ipv ÷ 10 gedaan?","Geen verandering — heb je überhaupt iets gedaan? 10% is ÷ 10.","Te veel — dat zou 40% zijn."],
      },
      {
        q: "Een fiets kost **€ 200**. **25% korting**. Hoeveel **bespaar je**?",
        options: ["€ 50","€ 25","€ 75","€ 175"],
        answer: 0,
        wrongHints: [null,"Te weinig — 25% is een vierde. Wat is een vierde van € 200?","Te veel — dat zou 37,5% zijn.","Klopt niet — dat is wat de fiets nu KOST, niet wat je bespaart. Lees de vraag."],
        uitlegPad: {
          stappen: [
            { titel: "Lees de vraag goed", tekst: "Wat wordt gevraagd? **Hoeveel bespaar je?** (= hoeveel KORTING). Niet: 'wat is de nieuwe prijs?' Pas op — die staat ook tussen de antwoorden om je te misleiden!" },
            { titel: "Bereken 25% van €200", tekst: "25% = ¼ (een kwart). Een kwart van €200 = 200 ÷ 4 = **€50**." },
            { titel: "Of via 10%-truc", tekst: "10% van €200 = €20. 25% = 2×10% + ½×10% = €20 + €20 + €10 = **€50**. Zelfde antwoord, langer rekenwerk." },
          ],
          woorden: [
            { woord: "korting", uitleg: "Bedrag dat van de prijs af gaat." },
            { woord: "besparing", uitleg: "Synoniem van korting — wat je niet hoeft te betalen." },
          ],
          theorie: "Toets-strik: vraag naar 'bespaar' of 'korting' = je rekent het kortings-BEDRAG. Bij 'nieuwe prijs' reken je het bedrag NA aftrek (€200 − €50 = €150).",
          voorbeelden: [
            { type: "stap", tekst: "Korting €50 = bespaar je. Nieuwe prijs = €200 − €50 = €150." },
            { type: "stap", tekst: "20% korting op €80? → 20% van €80 = €16 bespaard, betaal €64." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Lees of vraag is: KORTING (=besparing) OF NIEUWE PRIJS. Anders verkeerd antwoord." }],
          niveaus: {
            basis: "25% korting van €200 = €50 besparing.",
            simpeler: "¼ van €200 = €50 = de korting.",
            nogSimpeler: "€200 ÷ 4 = €50.",
          },
        },
      },
      {
        q: "Op een toets van **40 vragen** maakt Lisa er **75% goed**. Hoeveel zijn dat?",
        options: ["30","25","35","20"],
        answer: 0,
        wrongHints: [null,"Te weinig — 75% is meer dan de helft.","Te veel — 75% is driekwart. Hoeveel is een kwart van 40?","Te weinig — 75% is bijna alles, 50% is 20."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**10% van 70** = ?",
        options: ["7", "70", "0,7", "10"],
        answer: 0,
        wrongHints: [
          null,
          "Dan heb je niets uitgerekend. 10% is maar een klein deel.",
          "Dat is 1% van 70. Hoe reken je 10%?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "De 10%-truc",
              tekst: "10% is altijd **÷ 10**.",
            },
            {
              titel: "Reken",
              tekst: "70 ÷ 10 = **7**.",
            },
          ],
          woorden: [
            {
              woord: "10%",
              uitleg: "Een tiende: delen door 10.",
            },
          ],
          theorie: "10% = ÷ 10. Daarna kun je elke 10%-stap optellen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10% van 80 = 8.",
            },
            {
              type: "stap",
              tekst: "10% van 250 = 25.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "10% = ÷ 10.",
            },
          ],
          niveaus: {
            basis: "10% van 70 = 7.",
            simpeler: "70 ÷ 10 = 7.",
            nogSimpeler: "7",
          },
        },
      },
      {
        q: "**25% van 40** = ?",
        options: ["10", "25", "20", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het percentage zelf, niet het deel van 40.",
          "Dat is de helft van 40. Is 25% de helft?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Breuken-truc",
              tekst: "25% = **¼** (een vierde).",
            },
            {
              titel: "Reken",
              tekst: "¼ van 40 = 40 ÷ 4 = **10**.",
            },
          ],
          woorden: [
            {
              woord: "een vierde",
              uitleg: "Eén van vier gelijke delen.",
            },
          ],
          theorie: "Mooie percentages: 25% = ÷ 4, 50% = ÷ 2, 10% = ÷ 10.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "25% van 60 = 15.",
            },
            {
              type: "stap",
              tekst: "25% van 80 = 20.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "25% = ÷ 4.",
            },
          ],
          niveaus: {
            basis: "25% van 40 = 10.",
            simpeler: "40 ÷ 4 = 10.",
            nogSimpeler: "10",
          },
        },
      },
      {
        q: "**30% van 50** = ?",
        options: ["15", "30", "5", "20"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het percentage, geen antwoord op 'hoeveel'.",
          "Dat is 10% van 50. Hoeveel keer 10% heb je nodig?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst 10%",
              tekst: "10% van 50 = 50 ÷ 10 = **5**.",
            },
            {
              titel: "Dan 30%",
              tekst: "30% = 3 × 10%. 3 × 5 = **15**.",
            },
          ],
          woorden: [
            {
              woord: "10%-truc",
              uitleg: "Eerst 10% uitrekenen, dan keer het aantal tientjes.",
            },
          ],
          theorie: "Geen mooi percentage? Reken eerst 10% uit en vermenigvuldig dan.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "30% van 80 = 3 × 8 = 24.",
            },
            {
              type: "stap",
              tekst: "70% van 80 = 7 × 8 = 56.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "30% = 3 × 10%.",
            },
          ],
          niveaus: {
            basis: "30% van 50 = 15.",
            simpeler: "10% = 5, dus 30% = 3 × 5 = 15.",
            nogSimpeler: "15",
          },
        },
      },
      {
        q: "**70% van 30** = ?",
        options: ["21", "7", "3", "27"],
        answer: 0,
        wrongHints: [
          null,
          null,
          "Dat is 10% van 30. Hoeveel keer 10% is 70%?",
          "Dat is 90% van 30. Hoeveel keer 10% heb je nodig?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst 10%",
              tekst: "10% van 30 = 30 ÷ 10 = **3**.",
            },
            {
              titel: "Dan 70%",
              tekst: "70% = 7 × 10%. 7 × 3 = **21**.",
            },
          ],
          woorden: [
            {
              woord: "10%-truc",
              uitleg: "Eerst 10% uitrekenen, dan keer het aantal tientjes.",
            },
          ],
          theorie: "Elke 10%-stap is even groot. Tel ze op of vermenigvuldig.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "70% van 80 = 7 × 8 = 56.",
            },
            {
              type: "stap",
              tekst: "70% van 50 = 7 × 5 = 35.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "70% = 7 × 10%.",
            },
          ],
          niveaus: {
            basis: "70% van 30 = 21.",
            simpeler: "10% = 3, dus 70% = 7 × 3 = 21.",
            nogSimpeler: "21",
          },
        },
      },
      {
        q: "**75% van 12** = ?",
        options: ["9", "3", "6", "12"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is een kwart van 12. 75% is meer dan de helft.",
          "Dat is de helft. 75% is meer dan de helft.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Breuken-truc",
              tekst: "75% = **¾** (drie kwart).",
            },
            {
              titel: "Reken",
              tekst: "¼ van 12 = 12 ÷ 4 = 3. Drie kwart = 3 × 3 = **9**.",
            },
          ],
          woorden: [
            {
              woord: "drie kwart",
              uitleg: "Drie van de vier gelijke delen.",
            },
          ],
          theorie: "75% = eerst ÷ 4, dan × 3.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "75% van 40 = 30.",
            },
            {
              type: "stap",
              tekst: "75% van 20 = 15.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "75% = ¾ = ÷ 4 en dan × 3.",
            },
          ],
          niveaus: {
            basis: "75% van 12 = 9.",
            simpeler: "12 ÷ 4 = 3, en 3 × 3 = 9.",
            nogSimpeler: "9",
          },
        },
      },
      {
        q: "Op een camping staan **200 tenten**. **20%** is groen. Hoeveel tenten zijn **groen**?",
        options: ["40", "20", "10", "160"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het percentage, niet het aantal tenten.",
          "Dat is 5% van 200. Bereken eerst 10%.",
          "Dat zijn de tenten die níét groen zijn.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst 10%",
              tekst: "10% van 200 = 200 ÷ 10 = **20**.",
            },
            {
              titel: "Dan 20%",
              tekst: "20% = 2 × 10%. 2 × 20 = **40** groene tenten.",
            },
          ],
          woorden: [
            {
              woord: "10%-truc",
              uitleg: "Eerst 10% uitrekenen, dan verdubbelen voor 20%.",
            },
          ],
          theorie: "20% = 2 × 10%. Handig en snel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "20% van 60 = 2 × 6 = 12.",
            },
            {
              type: "stap",
              tekst: "20% van 80 = 2 × 8 = 16.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "20% = 10% + 10%.",
            },
          ],
          niveaus: {
            basis: "20% van 200 = 40 tenten.",
            simpeler: "10% = 20, dus 20% = 40.",
            nogSimpeler: "40",
          },
        },
      },
    ],
  },

  // STAP 4: Vier-stap-sommen winkel
  {
    title: "% in de winkel — slimme tactiek",
    explanation: "In de winkel zie je vaak korting-bordjes. Bijvoorbeeld:\n\n*'Spijkerbroek normaal € 60. Nu 25% korting.'*\n\n**Vraag**: hoeveel betaal je nu?\n\n**Slimme aanpak — 2 manieren**:\n\n**Manier 1 — bereken korting, trek af**:\n• Korting = 25% van €60 = ¼ × €60 = **€15**\n• Nieuwe prijs = €60 − €15 = **€45**\n\n**Manier 2 — direct het overgebleven deel** *(sneller!)*:\n• Als je 25% korting krijgt, betaal je nog **75%** *(want 100% − 25% = 75%)*.\n• 75% van €60 = ¾ × €60 = **€45**.\n\nManier 2 is **één stap sneller** — je hoeft niet eerst korting te berekenen + dan af te trekken.\n\n**Toets-trucs voor populaire kortingen**:\n• **50% korting** → betaal je de helft\n• **25% korting** → betaal je 75% (drie kwart)\n• **10% korting** → betaal je 90%\n• **75% korting** → betaal je 25% (een kwart)\n\n**Voorbeeldsom**:\n*'Een telefoon van € 400 heeft 30% korting. Wat betaal je?'*\n\n**Manier 2 (snelst)**:\n• Je betaalt 100% − 30% = **70%** van de prijs.\n• 10% van €400 = €40.\n• 70% van €400 = 7 × €40 = **€280**.",
    checks: [
      {
        q: "Een schoen normaal **€ 80**, met **25% korting**. Hoeveel **betaal je**?",
        options: ["€ 60","€ 20","€ 40","€ 75"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is wat je BESPAART, niet wat je betaalt. Trek af van €80.", "Te weinig — €40 is de halve prijs; bij 25% korting gaat er minder af.", "Te veel — heb je überhaupt korting gepakt?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is de vraag?", tekst: "**Hoeveel BETAAL je?** Niet 'hoeveel bespaar je'. Lees rustig — de toets test of je dit verschil herkent." },
            { titel: "Manier 1: bereken korting, trek af", tekst: "Stap 1: 25% van €80. 25% = ¼. €80 ÷ 4 = **€20** korting.\nStap 2: nieuwe prijs = €80 − €20 = **€60**." },
            { titel: "Manier 2: direct 75% berekenen (snelste!)", tekst: "Als je 25% korting krijgt, betaal je nog **75%** (100% − 25%).\n75% van €80 = ¾ × €80 = €80 ÷ 4 × 3 = €20 × 3 = **€60**.\nZelfde antwoord, één stap minder!" },
          ],
          woorden: [
            { woord: "korting", uitleg: "Hoeveel wordt afgetrokken van de oude prijs." },
            { woord: "nieuwe prijs", uitleg: "Wat je nu écht betaalt = oude prijs − korting." },
          ],
          theorie: "Toets-truc winkel:\n• 25% korting → je betaalt 75%\n• 50% korting → je betaalt 50%\n• 10% korting → je betaalt 90%\n• 75% korting → je betaalt 25%\nDirect rekenen wat je BETAALT is meestal sneller dan eerst korting + dan aftrekken.",
          voorbeelden: [
            { type: "stap", tekst: "€100 met 25% korting = je betaalt €75. €40 met 25% korting = je betaalt €30." },
            { type: "stap", tekst: "Bedenk: 'is dit de korting of de nieuwe prijs?' = belangrijkste vraag bij %." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Betaal je = oud bedrag − korting. Of: betaal je = (100% − korting%) van oude prijs. Beide werken." },
          ],
          niveaus: {
            basis: "€60 (€80 − €20 korting).",
            simpeler: "25% korting = ¼ aftrek. ¼ van €80 = €20. €80 − €20 = €60.",
            nogSimpeler: "€60",
          },
        },
      },
      {
        q: "Een tas van **€ 50** heeft **50% korting**. Wat **betaal** je?",
        options: ["€ 25","€ 50","€ 0","€ 75"],
        answer: 0,
        wrongHints: [null,"Geen korting toegepast — heb je 50% wel gerekend?","Niet alles gratis — 50% korting betekent halve prijs.","Hoger dan de oorspronkelijke prijs — kan niet bij korting."],
      },
      {
        q: "Een t-shirt van **€ 30** heeft **10% korting**. Wat is de **nieuwe prijs**?",
        options: ["€ 27","€ 3","€ 33","€ 20"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is alleen het korting-bedrag, niet de nieuwe prijs.","Hoger dan oorspronkelijk — bij korting wordt 't goedkoper.","Te weinig — 10% korting is maar een klein beetje lager."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een jas kost **€ 100**. Nu **30% korting**. Wat **betaal** je?",
        options: ["€ 70", "€ 30", "€ 130", "€ 97"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de korting. Wat moet je nog betalen?",
          "Korting maakt iets goedkoper, niet duurder.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Manier 2",
              tekst: "Bij 30% korting betaal je nog **70%** (100% − 30%).",
            },
            {
              titel: "Reken",
              tekst: "70% van € 100 = **€ 70**.",
            },
          ],
          woorden: [
            {
              woord: "korting",
              uitleg: "Het bedrag dat van de prijs af gaat.",
            },
          ],
          theorie: "Korting% eraf → wat je betaalt = (100% − korting%) van de prijs.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "30% korting op € 400 → je betaalt 70% = € 280.",
            },
            {
              type: "stap",
              tekst: "10% korting op € 30 → je betaalt € 27.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Betaal = 100% − korting%.",
            },
          ],
          niveaus: {
            basis: "Je betaalt € 70.",
            simpeler: "€ 100 − € 30 korting = € 70.",
            nogSimpeler: "€ 70",
          },
        },
      },
      {
        q: "Een spel kost **€ 40**. Er is **75% korting**. Wat **betaal** je?",
        options: ["€ 10", "€ 30", "€ 20", "€ 40"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de korting. Je moet weten wat je nog betaalt.",
          "Dat zou 50% korting zijn.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Manier 2",
              tekst: "Bij 75% korting betaal je nog **25%** (een kwart).",
            },
            {
              titel: "Reken",
              tekst: "¼ van € 40 = 40 ÷ 4 = **€ 10**.",
            },
          ],
          woorden: [
            {
              woord: "korting",
              uitleg: "Het bedrag dat van de prijs af gaat.",
            },
          ],
          theorie: "75% korting → je betaalt 25% (een kwart).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "75% korting op € 80 → je betaalt € 20.",
            },
            {
              type: "stap",
              tekst: "75% korting op € 100 → je betaalt € 25.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "75% korting = je betaalt een kwart.",
            },
          ],
          niveaus: {
            basis: "Je betaalt € 10.",
            simpeler: "Een kwart van € 40 = € 10.",
            nogSimpeler: "€ 10",
          },
        },
      },
      {
        q: "Bij **10% korting** betaal je nog…",
        options: ["90% van de prijs", "10% van de prijs", "100% van de prijs", "110% van de prijs"],
        answer: 0,
        wrongHints: [null, "Dat deel gaat er juist af.", null, "Wordt iets duurder als er korting is?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Alles = 100%",
              tekst: "De hele prijs is **100%**.",
            },
            {
              titel: "Korting eraf",
              tekst: "100% − 10% = **90%**. Dat betaal je nog.",
            },
          ],
          woorden: [
            {
              woord: "korting",
              uitleg: "Het deel van de prijs dat eraf gaat.",
            },
          ],
          theorie: "50% korting → 50%. 25% korting → 75%. 10% korting → 90%. 75% korting → 25%.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "20% korting → je betaalt 80%.",
            },
            {
              type: "stap",
              tekst: "40% korting → je betaalt 60%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Betaal% = 100% − korting%.",
            },
          ],
          niveaus: {
            basis: "Je betaalt 90% van de prijs.",
            simpeler: "100% − 10% = 90%.",
            nogSimpeler: "90%",
          },
        },
      },
      {
        q: "Een pet kost **€ 16**. Er is **50% korting**. Wat **betaal** je?",
        options: ["€ 8", "€ 16", "€ 4", "€ 12"],
        answer: 0,
        wrongHints: [
          null,
          "Dan heb je geen korting gehad.",
          "Dat is een kwart van de prijs. Wat is de helft?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "50% korting",
              tekst: "50% korting = je betaalt **de helft**.",
            },
            {
              titel: "Reken",
              tekst: "€ 16 ÷ 2 = **€ 8**.",
            },
          ],
          woorden: [
            {
              woord: "de helft",
              uitleg: "Delen door 2.",
            },
          ],
          theorie: "50% korting → betaal je de helft.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "50% korting op € 50 → € 25.",
            },
            {
              type: "stap",
              tekst: "50% korting op € 30 → € 15.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "50% = ÷ 2.",
            },
          ],
          niveaus: {
            basis: "Je betaalt € 8.",
            simpeler: "De helft van € 16 = € 8.",
            nogSimpeler: "€ 8",
          },
        },
      },
      {
        q: "Een lamp kost **€ 90**. Er is **20% korting**. Hoeveel **bespaar** je?",
        options: ["€ 18", "€ 72", "€ 9", "€ 20"],
        answer: 0,
        wrongHints: [
          null,
          "Dat betaal je. De vraag is hoeveel je bespaart.",
          "Dat is 10%. Hoeveel keer 10% is 20%?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Lees de vraag",
              tekst: "**Bespaar** = hoeveel korting. Niet wat je betaalt.",
            },
            {
              titel: "Reken",
              tekst: "10% van € 90 = € 9. 20% = 2 × € 9 = **€ 18**.",
            },
          ],
          woorden: [
            {
              woord: "besparen",
              uitleg: "Geld dat je niet hoeft te betalen.",
            },
          ],
          theorie: "Bespaar = de korting. Betaal = prijs − korting.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 90 − € 18 = € 72: dat betaal je.",
            },
            {
              type: "stap",
              tekst: "20% van € 50 = € 10 korting.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Lees goed: bespaar of betaal?",
            },
          ],
          niveaus: {
            basis: "Je bespaart € 18.",
            simpeler: "10% = € 9, dus 20% = € 18.",
            nogSimpeler: "€ 18",
          },
        },
      },
      {
        q: "Een skateboard van **€ 120** heeft **25% korting**. Wat is de **nieuwe prijs**?",
        options: ["€ 90", "€ 30", "€ 95", "€ 60"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de korting. De vraag is de nieuwe prijs.",
          "Je haalde 25 euro eraf. Maar het is 25 procent.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Manier 2",
              tekst: "Bij 25% korting betaal je nog **75%** (¾).",
            },
            {
              titel: "Reken",
              tekst: "¼ van € 120 = 120 ÷ 4 = € 30. ¾ = 3 × € 30 = **€ 90**.",
            },
          ],
          woorden: [
            {
              woord: "nieuwe prijs",
              uitleg: "Wat je nu betaalt = oude prijs − korting.",
            },
          ],
          theorie: "25% korting → je betaalt 75% (drie kwart).",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 60 met 25% korting → € 45.",
            },
            {
              type: "stap",
              tekst: "€ 80 met 25% korting → € 60.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "25% korting = je betaalt ¾.",
            },
          ],
          niveaus: {
            basis: "De nieuwe prijs is € 90.",
            simpeler: "€ 120 − € 30 = € 90.",
            nogSimpeler: "€ 90",
          },
        },
      },
      {
        q: "Welke trui is het **goedkoopst**?",
        options: [
          "€ 40 met 50% korting",
          "€ 30 met 10% korting",
          "€ 24 zonder korting",
          "€ 28 met 25% korting",
        ],
        answer: 0,
        wrongHints: [
          null,
          "10% van € 30 is € 3. Wat betaal je dan?",
          null,
          "Reken eerst een kwart van € 28 uit. Wat blijft er over?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Reken elke prijs uit",
              tekst: "€ 40 met 50% korting = € 20. € 30 met 10% korting = € 27. € 24 zonder korting = € 24. € 28 met 25% korting = € 21.",
            },
            {
              titel: "Vergelijk",
              tekst: "De laagste prijs is **€ 20**: de trui van € 40 met 50% korting.",
            },
          ],
          woorden: [
            {
              woord: "goedkoopst",
              uitleg: "Het minste geld.",
            },
          ],
          theorie: "Kijk niet alleen naar de korting of de oude prijs: reken uit wat je echt betaalt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 30 met 10% korting: 10% = € 3, je betaalt € 27.",
            },
            {
              type: "stap",
              tekst: "€ 28 met 25% korting: ¼ = € 7, je betaalt € 21.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Vergelijk altijd de nieuwe prijzen.",
            },
          ],
          niveaus: {
            basis: "€ 40 met 50% korting = € 20. Dat is het goedkoopst.",
            simpeler: "Reken elke prijs uit. € 20 is het laagst.",
            nogSimpeler: "€ 20 is het minst.",
          },
        },
      },
    ],
  },

  // STAP 5: Welk % is X van Y?
  {
    title: "Welk percentage is dit van het totaal?",
    explanation: "De omgekeerde toetsvraag: *'X van Y — welk percentage is dat?'*\n\nVoorbeeld: *'In een klas van 25 leerlingen zijn 5 meisjes. Welk percentage meisjes is dat?'*\n\n**Aanpak — de gouden regel**:\n• % = (deel ÷ totaal) × 100\n• Hier: 5 ÷ 25 = 0,20 → × 100 = **20%**\n\n**Slimme aanpak voor kleine breuken** *(sneller)*:\n• 5 op 25 = 1 op 5 *(beide ÷ 5)* = 1/5 = **20%**\n• Hoofd: 1/5 = 20%, 1/4 = 25%, 1/2 = 50%, 1/10 = 10%.\n\n**Voorbeelden uit de toets**:\n*'Op een toets van 40 vragen heeft Tim 30 goed. Welk percentage is dat?'*\n• 30/40 = 3/4 = **75%**.\n\n*'Van de 200 leerlingen op school spelen er 40 voetbal. Welk percentage?'*\n• 40/200 = 1/5 = **20%**.\n\n**Truc**: probeer eerst te delen tot je een 'mooie' breuk krijgt (1/2, 1/4, 1/5, 1/10).\n\n**Veel-voorkomende fout**:\nVergeten te × 100. Dan krijg je 0,2 ipv 20%. Beide kloppen wiskundig, maar de vraag vraagt een **percentage**.",
    checks: [
      {
        q: "Op een toets van **20 vragen** heeft Sven **15 goed**. Welk **percentage**?",
        options: ["75%","15%","85%","60%"],
        answer: 0,
        wrongHints: [null, "Niet het aantal goed-antwoorden — dat is je teller, niet het percentage.", "Dat zou 17 goed zijn — niet hier.", "Te weinig — 15 van 20 is meer dan de helft."],
        uitlegPad: {
          stappen: [
            { titel: "Omgekeerde percentage-vraag", tekst: "Bij 'welk percentage is X van Y?' bereken je: (deel / totaal) × 100. Hier: deel = 15 (goede vragen), totaal = 20 (alle vragen)." },
            { titel: "Reken: 15/20 → procent", tekst: "**Manier 1**: 15 ÷ 20 = 0,75. × 100 = **75%**.\n**Manier 2 (slim)**: 15/20 = 3/4 (deel beide door 5). 3/4 = **75%** (uit het hoofd!).\nBeide geven hetzelfde antwoord." },
            { titel: "Mooie breuken uit het hoofd", tekst: "Onthoud deze breuk→% omzettingen:\n• 1/2 = 50%\n• 1/4 = 25%, 3/4 = 75%\n• 1/5 = 20%, 2/5 = 40%, 3/5 = 60%, 4/5 = 80%\n• 1/10 = 10%, 2/10 = 20%, etc.\nDan ga je supersnel." },
          ],
          woorden: [
            { woord: "percentage uit deel + totaal", uitleg: "(deel / totaal) × 100 = procent." },
            { woord: "vereenvoudigen", uitleg: "Teller + noemer door zelfde getal delen → 'mooie' breuk." },
          ],
          theorie: "Toets-truc 'welk %?' vragen:\n1. Reken **deel / totaal** als breuk.\n2. Vereenvoudig naar bekende breuk (½, ¼, ¾, ⅕, ...).\n3. Zet om naar %.\nSneller dan elke keer × 100 doen.",
          voorbeelden: [
            { type: "stap", tekst: "30 van 40 = 30/40 = 3/4 = 75%." },
            { type: "stap", tekst: "10 van 50 = 10/50 = 1/5 = 20%." },
            { type: "stap", tekst: "8 van 10 = 8/10 = 4/5 = 80%." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Vereenvoudig je breuk eerst naar 1/2, 1/4, 3/4, 1/5, etc. Dan ken je het % zo." }],
          niveaus: {
            basis: "75% (15/20 = 3/4 = 75%).",
            simpeler: "15 van 20 = 3 van 4 = 3/4 = 75%.",
            nogSimpeler: "75%",
          },
        },
      },
      {
        q: "In een klas van **25 leerlingen** spelen **5 voetbal**. Welk **percentage**?",
        options: ["20%","5%","25%","10%"],
        answer: 0,
        wrongHints: [null,"Niet het aantal voetballers — dat is alleen de teller.","Te veel — 5 op 25 is niet 1 op 4.","Te weinig — 1 op 25 zou 4% zijn, hier 5 op 25."],
      },
      {
        q: "Van **50 vogels** zijn **30 mussen**. Welk **percentage** is geen mus?",
        options: ["40%","60%","30%","20%"],
        answer: 0,
        wrongHints: [null,"Dat is het percentage WEL-mussen. De vraag is juist het tegenovergestelde.","Dat is het aantal mussen, niet het percentage — deel eerst door het totaal × 100.","Te weinig — hoeveel vogels zijn er géén mus?"],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "In een klas van **20 kinderen** hebben **10** een fiets. Welk **percentage**?",
        options: ["50%", "10%", "20%", "5%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal kinderen, nog geen percentage.",
          "Dat is het totaal. Welk deel heeft een fiets?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gouden regel",
              tekst: "% = (deel ÷ totaal) × 100.",
            },
            {
              titel: "Reken",
              tekst: "10 van 20 = 10/20 = **½** = **50%**.",
            },
          ],
          woorden: [
            {
              woord: "deel",
              uitleg: "Het stuk waar de vraag over gaat.",
            },
            {
              woord: "totaal",
              uitleg: "Alles samen.",
            },
          ],
          theorie: "Maak een mooie breuk: 1/2 = 50%, 1/4 = 25%, 1/5 = 20%, 1/10 = 10%.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5 van 10 = ½ = 50%.",
            },
            {
              type: "stap",
              tekst: "20 van 40 = ½ = 50%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Deel ÷ totaal → mooie breuk → %.",
            },
          ],
          niveaus: {
            basis: "10 van 20 = 50%.",
            simpeler: "10/20 = de helft = 50%.",
            nogSimpeler: "50%",
          },
        },
      },
      {
        q: "Van de **40 kinderen** spelen er **10** hockey. Welk **percentage**?",
        options: ["25%", "10%", "40%", "4%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal hockeyers, nog geen percentage.",
          "Dat is het totaal, niet het deel.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gouden regel",
              tekst: "% = (deel ÷ totaal) × 100.",
            },
            {
              titel: "Reken",
              tekst: "10 van 40 = 10/40 = **¼** (beide ÷ 10) = **25%**.",
            },
          ],
          woorden: [
            {
              woord: "vereenvoudigen",
              uitleg: "Boven en onder door hetzelfde getal delen.",
            },
          ],
          theorie: "1/4 = 25%. Probeer eerst te delen tot een mooie breuk.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5 van 20 = ¼ = 25%.",
            },
            {
              type: "stap",
              tekst: "50 van 200 = ¼ = 25%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "10/40 → 1/4 → 25%.",
            },
          ],
          niveaus: {
            basis: "10 van 40 = 25%.",
            simpeler: "10/40 = ¼ = 25%.",
            nogSimpeler: "25%",
          },
        },
      },
      {
        q: "Je hebt **8 van de 10** sommen goed. Welk **percentage** heb je **goed**?",
        options: ["80%", "8%", "20%", "10%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal goede sommen, nog geen percentage.",
          "Dat zijn de sommen die fout waren.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gouden regel",
              tekst: "% = (deel ÷ totaal) × 100.",
            },
            {
              titel: "Reken",
              tekst: "8 ÷ 10 = 0,8. × 100 = **80%**.",
            },
          ],
          woorden: [
            {
              woord: "percentage",
              uitleg: "Hoeveel per 100.",
            },
          ],
          theorie: "Veel-voorkomende fout: vergeten × 100 te doen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7 van 10 = 70%.",
            },
            {
              type: "stap",
              tekst: "3 van 10 = 30%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Van 10 naar 100: × 10. 8 van 10 = 80 van 100.",
            },
          ],
          niveaus: {
            basis: "8 van 10 = 80%.",
            simpeler: "8/10 = 80/100 = 80%.",
            nogSimpeler: "80%",
          },
        },
      },
      {
        q: "Op een school zijn **300 leerlingen**. **30** komen lopend. Welk **percentage**?",
        options: ["10%", "30%", "3%", "33%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal lopers, nog geen percentage.",
          "Deel 30 door 300. Kijk goed naar de nullen.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gouden regel",
              tekst: "% = (deel ÷ totaal) × 100.",
            },
            {
              titel: "Reken",
              tekst: "30 van 300 = 30/300 = **1/10** (beide ÷ 30) = **10%**.",
            },
          ],
          woorden: [
            {
              woord: "totaal",
              uitleg: "Alle leerlingen samen.",
            },
          ],
          theorie: "1/10 = 10%.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "40 van 200 = 1/5 = 20%.",
            },
            {
              type: "stap",
              tekst: "20 van 200 = 1/10 = 10%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "30/300 → 1/10 → 10%.",
            },
          ],
          niveaus: {
            basis: "30 van 300 = 10%.",
            simpeler: "30/300 = 1/10 = 10%.",
            nogSimpeler: "10%",
          },
        },
      },
      {
        q: "Van **50 ballonnen** zijn er **20 rood**. Welk **percentage** is **rood**?",
        options: ["40%", "20%", "60%", "50%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal rode ballonnen, nog geen percentage.",
          "Dat is het deel dat níét rood is.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gouden regel",
              tekst: "% = (deel ÷ totaal) × 100.",
            },
            {
              titel: "Reken",
              tekst: "20 van 50 = 20/50 = **2/5** (beide ÷ 10). 1/5 = 20%, dus 2/5 = **40%**.",
            },
          ],
          woorden: [
            {
              woord: "deel",
              uitleg: "Hier: de rode ballonnen.",
            },
          ],
          theorie: "1/5 = 20%, 2/5 = 40%, 3/5 = 60%, 4/5 = 80%.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10 van 50 = 1/5 = 20%.",
            },
            {
              type: "stap",
              tekst: "30 van 50 = 3/5 = 60%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Bij 50: × 2 en je hebt het percentage. 20 × 2 = 40.",
            },
          ],
          niveaus: {
            basis: "20 van 50 = 40%.",
            simpeler: "20/50 = 40/100 = 40%.",
            nogSimpeler: "40%",
          },
        },
      },
      {
        q: "Een film duurt **60 minuten**. Je hebt **15 minuten** gezien. Welk **percentage** heb je **gezien**?",
        options: ["25%", "15%", "75%", "4%"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het aantal minuten, nog geen percentage.",
          "Dat deel heb je nog níét gezien.",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Gouden regel",
              tekst: "% = (deel ÷ totaal) × 100.",
            },
            {
              titel: "Reken",
              tekst: "15 van 60 = 15/60 = **¼** (beide ÷ 15) = **25%**.",
            },
          ],
          woorden: [
            {
              woord: "totaal",
              uitleg: "De hele film: 60 minuten.",
            },
          ],
          theorie: "¼ = 25%. Een kwartier is een kwart van een uur.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "30 van 60 minuten = ½ = 50%.",
            },
            {
              type: "stap",
              tekst: "45 van 60 minuten = ¾ = 75%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "15 van 60 = 1 van 4 = 25%.",
            },
          ],
          niveaus: {
            basis: "15 van 60 = 25%.",
            simpeler: "15/60 = ¼ = 25%.",
            nogSimpeler: "25%",
          },
        },
      },
      {
        q: "Lotte rekent: **6 van de 30** = 6 ÷ 30 = **0,2**. Welk **percentage** is dat?",
        options: ["20%", "2%", "0,2%", "6%"],
        answer: 0,
        wrongHints: [null, "0,2 × 100 = ? Tel de plekken van de komma.", "Je moet nog × 100 doen.", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Bijna klaar",
              tekst: "6 ÷ 30 = 0,2. Dat is nog geen percentage.",
            },
            {
              titel: "× 100",
              tekst: "0,2 × 100 = **20%**.",
            },
          ],
          woorden: [
            {
              woord: "percentage",
              uitleg: "Hoeveel per 100.",
            },
          ],
          theorie: "Veel-voorkomende fout: vergeten × 100. Dan krijg je 0,2 in plaats van 20%.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5 ÷ 25 = 0,2 → 20%.",
            },
            {
              type: "stap",
              tekst: "3 ÷ 4 = 0,75 → 75%.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Truc",
              uitleg: "Kommagetal → % = komma 2 plekken naar rechts.",
            },
          ],
          niveaus: {
            basis: "6 van 30 = 0,2 = 20%.",
            simpeler: "0,2 × 100 = 20%.",
            nogSimpeler: "20%",
          },
        },
      },
    ],
  },

  // STAP 6: Korting in de winkel - meer praktijk
  {
    title: "Praktijk-sommen — winkel + sport",
    explanation: "Tijd voor mix-sommen in Doorstroomtoets-stijl. **Lees rustig en onderstreep getallen + percentages**.\n\n**Stappenplan voor elke %-som**:\n1. **Wat ken ik?** Het totaal of het deel?\n2. **Wat zoek ik?** Het andere deel, of het percentage?\n3. **Welke aanpak?** 1%-truc, 10%-truc, of breuken-truc?\n4. **Schrijf op** en reken in stapjes.\n\n**Voorbeeld — sport**:\n*'Marc speelt 50 wedstrijden basketbal. Hij won 30. Welk percentage gewonnen?'*\n• 30/50 = 3/5 = 60%.\n\n**Voorbeeld — winkel**:\n*'Een bagagetas was € 60. Met 40% korting?'*\n• Snel: je betaalt 100% − 40% = **60%** van de prijs.\n• 10% van €60 = €6, dus 60% = 6 × €6 = **€36**.\n\n**Voorbeeld — combinatie**:\n*'Anna bespaart € 15 op een truitje van € 60. Welk korting-percentage?'*\n• €15 van €60 = 15/60 = 1/4 = **25% korting**.\n\n**Veel-voorkomende val**:\n• 'Welk percentage MEER?' vraagt iets anders dan 'Welk percentage IS het?'. Lees rustig.\n• 'Korting' = aftrek. 'Toename' = optel.",
    checks: [
      {
        q: "Een hoodie van **€ 80** heeft **40% korting**. Wat **betaal** je?",
        options: ["€ 48","€ 32","€ 40","€ 24"],
        answer: 0,
        wrongHints: [null,"Te weinig — dat is wat je BESPAART, niet wat je betaalt.","Te weinig — 40% korting betekent betalen van 60%, niet 50%.","Veel te weinig."],
      },
      {
        q: "**Op 30 voetbalwedstrijden won Tom er 18.** Welk **percentage gewonnen**?",
        options: ["60%","30%","40%","18%"],
        answer: 0,
        wrongHints: [null,"Niet het aantal wedstrijden — dat is totaal.","Te weinig — 18 is meer dan de helft van 30.","Niet het aantal gewonnen — eerst delen door totaal × 100."],
      },
      {
        q: "Een laptop kost **€ 800**. Anna betaalt **€ 720**. Welk **kortings-percentage**?",
        options: ["10%","20%","80%","8%"],
        answer: 0,
        wrongHints: [null,"Te veel — hoeveel euro korting is het precies? Vergelijk dat met €800.","Klopt niet — dat verwart het betaalde bedrag met de korting.","Klopt niet — vergelijk het kortingsbedrag met de oude prijs van €800."],
      },
      {
        q: "In een doos zitten **40 chocoladekoekjes**. **30% van de koekjes is van melkchocolade**. Hoeveel zijn dat?",
        options: ["12","30","10","8"],
        answer: 0,
        wrongHints: [null,"Dat is het percentage zelf — je moet het toepassen op het aantal koekjes.","Te weinig — 30% is flink meer dan een tiende.","Te weinig — bereken eerst 10% en gebruik dat als stapje."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een rugzak van **€ 50** heeft **30% korting**. Wat **betaal** je?",
        options: ["€ 35", "€ 15", "€ 25", "€ 50"],
        answer: 0,
        wrongHints: [null, "Dat is wat je bespaart, niet wat je betaalt.", "Dat zou 50% korting zijn.", null],
      },
      {
        q: "Je bespaart **€ 16** op een spel van **€ 80**. Welk **kortingspercentage** is dat?",
        options: ["20%", "16%", "80%", "25%"],
        answer: 0,
        wrongHints: [null, "Dat is het bedrag in euro's, nog geen percentage.", "Dat deel betaal je nog.", null],
      },
      {
        q: "In een bak liggen **60 appels**. **20%** is rot. Hoeveel appels zijn **niet rot**?",
        options: ["48", "12", "40", "20"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn de rotte appels. Lees de vraag nog eens.",
          "Je haalde 20 appels eraf. Maar het is 20 procent.",
          null,
        ],
      },
      {
        q: "Een fiets van **€ 250** krijgt **20% korting**. Wat **betaal** je?",
        options: ["€ 200", "€ 50", "€ 230", "€ 225"],
        answer: 0,
        wrongHints: [null, "Dat is de korting zelf.", "Je haalde 20 euro eraf. Maar het is 20 procent.", null],
      },
    ],
  },

  // STAP 7: Eindopdracht — Doorstroomtoets-mix
  {
    title: "Eindopdracht — mix",
    explanation: "Mix-toets in echte Doorstroomtoets-stijl. Verschillende sommen door elkaar — winkel, sport, school, korting, gewoon-percentage. **Lees rustig** en gebruik de aanpak uit stap 6.\n\n**Tip**: bij twijfel — vul je antwoord even in en check terug. Klopt het verhaal? Dan zit je goed.\n\nVeel succes!",
    checks: [
      {
        q: "**40% van 90** = ?",
        options: ["36","32","45","30"],
        answer: 0,
        wrongHints: [null,"Te weinig — bereken eerst 10% en vermenigvuldig dat dan met het juiste getal.","Te veel — dat is meer dan 40%.","Te weinig — heb je het juiste percentage gebruikt?"],
      },
      {
        q: "Een trui kost **€ 50**, **20% korting**. Wat **betaal** je?",
        options: ["€ 40","€ 30","€ 10","€ 45"],
        answer: 0,
        wrongHints: [null,"Te weinig — 20% korting is niet halveren.","Veel te weinig — dat is alleen het korting-bedrag.","Te veel — 20% korting is meer dan 10%."],
      },
      {
        q: "Op school halen **80% van 50 leerlingen** een voldoende. Hoeveel leerlingen zijn dat?",
        options: ["40 leerlingen","30 leerlingen","45 leerlingen","8 leerlingen"],
        answer: 0,
        wrongHints: [null,"Te weinig — 80% is veel meer dan de helft.","Te veel — dat zou 90% zijn.","Veel te weinig — heb je per ongeluk 80% genomen als '8 leerlingen op 50'?"],
      },
      {
        q: "Eline scoorde **15 op een toets van 20**. Welk **percentage**?",
        options: ["75%","60%","85%","50%"],
        answer: 0,
        wrongHints: [null,"Te weinig — 15 op 20 is meer dan 60%. Probeer 15/20 te vereenvoudigen.","Te veel — 15 op 20 is niet zo hoog.","Te weinig — 15 op 20 is meer dan de helft."],
      },
      {
        q: "Een fiets van **€ 300** heeft **50% korting**. Wat **bespaar** je?",
        options: ["€ 150","€ 50","€ 300","€ 100"],
        answer: 0,
        wrongHints: [null,"Te weinig — 50% korting is de halve prijs.","Klopt niet — dat is alles, je krijgt geen 100% korting.","Te weinig — 50% van 300 is meer dan 100."],
      },
      {
        q: "Een waterfles bevat **2 liter**. Je drinkt **75%**. Hoeveel **liter** drink je?",
        options: ["1,5 liter","0,5 liter","2 liter","1 liter"],
        answer: 0,
        wrongHints: [null,"Te weinig — 75% is meer dan de helft.","Klopt niet — heb je 75% gedronken? Dan blijft maar weinig over.","Te weinig — dat is 50%, niet 75%."],
      },
      { q: "10% van 50 = ?", options: ["5","10","50","0,5"], answer: 0, wrongHints: [null, "Niet — % zelf.", "Niet.", "Niet."] },
      { q: "25% van 80 = ?", options: ["20","25","40","2"], answer: 0, wrongHints: [null, "Dat is %.", "Helft.", "Niet."] },
      { q: "Trui van €40 met 20% korting = ?", options: ["€32","€20","€8","€40"], answer: 0, wrongHints: [null, "Niet — korting niet 50%.", "Dat is de korting.", "Geen korting?"] },
      { q: "Welk percentage is **0,5**?", options: ["50%","5%","½%","500%"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Veel meer."] },
      { q: "5% van 200 = ?", options: ["10","5","20","100"], answer: 0, wrongHints: [null, "Niet — % zelf.", "Niet.", "Helft."] },
      { q: "**Stijging** 50 → 75 is welk percentage?", options: ["50%","25%","20%","75%"], answer: 0, wrongHints: [null, "Stijging absoluut, niet %.", "Niet.", "Niet relevant."] },
      { q: "Welk percentage is **¼**?", options: ["25%","20%","½%","75%"], answer: 0, wrongHints: [null, "Vijfde.", "Niet.", "Drie kwart."] },
      { q: "100% van 60 = ?", options: ["60","100","0","6"], answer: 0, wrongHints: [null, "Niet getal zelf.", "Niet — alles.", "Tiende."] },
      { q: "30% van 200 = ?", options: ["60","30","20","6"], answer: 0, wrongHints: [null, "Dat is %.", "Niet.", "10% van 60."] },
      { q: "Welk percentage past bij **½**?", options: ["50%","25%","75%","100%"], answer: 0, wrongHints: [null, "Niet — kwart.", "Niet — driekwart.", "Heel."] },
      { q: "Een fles van €5 wordt 10% goedkoper. Nieuwe prijs?", options: ["€4,50","€4,00","€5,50","€10"], answer: 0, wrongHints: [null, "Te veel korting.", "Niet — eraf, niet erbij.", "Niet."] },
      { q: "Hoeveel % is 1 op 10?", options: ["10%","1%","100%","0,1%"], answer: 0, wrongHints: [null, "Niet.", "Geheel.", "Te klein."] },
      { q: "Hoeveel % is 50 op 200?", options: ["25%","50%","100%","75%"], answer: 0, wrongHints: [null, "Niet — helft van 200 is 100.", "Niet.", "Niet."] },
      { q: "**150%** van 20 = ?", options: ["30","20","15","150"], answer: 0, wrongHints: [null, "Origineel.", "Niet — minder.", "Veel te veel."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const procentenPo = {
  id: "procenten-po",
  title: "Procenten — Doorstroomtoets groep 5-8",
  emoji: "💯",
  level: "groep5-8",
  subject: "rekenen",
  // SLO-niveau (S4 audit-3 2026-05-08): 1F einde-basisschool. Toets-onderdeel
  // verhoudingen + procenten in praktijkcontext.
  referentieNiveau: "1F",
  sloThema: "Verhoudingen — procenten",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "breuken-po", title: "Breuken", niveau: "po-1F" },
  ],
  intro:
    "Procenten voor groep 5-8 — wat % betekent, hoe je ermee rekent, korting in de winkel, hoeveel % is X van Y. Met Doorstroomtoets-stijl praktijksommen. ~15 min.",
  triggerKeywords: [
    "procent","procenten","%","korting","percentage",
    "uitverkoop","goedkoper","duurder","verhouding",
  ],
  chapters,
  steps,
};

export default procentenPo;

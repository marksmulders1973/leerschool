// Leerpad: Negatieve getallen — voor groep 5-8
// 5 stappen. Cito-stijl praktijksommen.
// Sprint A (2026-05-08).

const COLORS = {
  curve: "#00c853",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  cold: "#5d9cec",
  warm: "#ef6c00",
};

const stepEmojis = ["🌡️","➡️","➕","💸","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een negatief getal?", emoji: "🌡️", from: 0, to: 0 },
  { letter: "B", title: "Getalslijn — optellen + aftrekken", emoji: "➡️", from: 1, to: 2 },
  { letter: "C", title: "Praktijk — temperatuur en geld", emoji: "💸", from: 3, to: 3 },
  { letter: "D", title: "Cito-eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

function thermometerSvg(temp, label) {
  const breedte = 240, hoogte = 200;
  const cx = breedte / 2;
  return `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<line x1="${cx}" y1="20" x2="${cx}" y2="170" stroke="${COLORS.muted}" stroke-width="3"/>
${[20, 10, 0, -10, -20].map((t, i) => `
<line x1="${cx - 6}" y1="${30 + i * 30}" x2="${cx + 6}" y2="${30 + i * 30}" stroke="${COLORS.muted}"/>
<text x="${cx + 12}" y="${34 + i * 30}" fill="${COLORS.text}" font-size="13" font-family="Arial">${t > 0 ? '+' : ''}${t}°C</text>
`).join("")}
<circle cx="${cx}" cy="${30 + ((20 - temp) / 10) * 30}" r="6" fill="${temp >= 0 ? COLORS.warm : COLORS.cold}"/>
<text x="${cx - 12}" y="${34 + ((20 - temp) / 10) * 30}" text-anchor="end" fill="${temp >= 0 ? COLORS.warm : COLORS.cold}" font-size="13" font-family="Arial" font-weight="bold">${temp > 0 ? '+' : ''}${temp}°C</text>
<text x="${cx}" y="${hoogte - 8}" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">${label}</text>
</svg>`;
}

function getalslijnSvg(start, eind, marker) {
  const breedte = 320, hoogte = 100;
  const startX = 30, eindX = breedte - 30, plotW = eindX - startX;
  const range = eind - start;
  const stap = plotW / range;
  return `<svg viewBox="0 0 ${breedte} ${hoogte}">
<rect x="0" y="0" width="${breedte}" height="${hoogte}" fill="${COLORS.paper}"/>
<line x1="${startX}" y1="50" x2="${eindX}" y2="50" stroke="${COLORS.text}" stroke-width="2"/>
<polygon points="${eindX},50 ${eindX - 8},45 ${eindX - 8},55" fill="${COLORS.text}"/>
${Array.from({ length: range + 1 }).map((_, i) => {
  const x = startX + i * stap;
  const v = start + i;
  return `<line x1="${x}" y1="46" x2="${x}" y2="54" stroke="${COLORS.muted}"/><text x="${x}" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">${v}</text>`;
}).join("")}
<circle cx="${startX + (marker - start) * stap}" cy="50" r="6" fill="${COLORS.point}"/>
<text x="${startX + (marker - start) * stap}" y="38" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">${marker > 0 ? '+' : ''}${marker}</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is een negatief getal?",
    explanation: "**Negatieve getallen** zijn getallen **kleiner dan 0**. Ze zien er uit met een **min-teken**: −1, −2, −3, etc.\n\n**Echte voorbeelden**:\n• **Temperatuur**: in de winter daalt 't onder nul. −5 °C = vijf graden onder nul.\n• **Geld**: een **schuld** is negatief. Je hebt −€ 50 = je moet 50 euro betalen.\n• **Verlies**: een **kelder** is onder grondniveau. -2 verdieping = 2 onder nul.\n\n**Op de getalslijn**:\nGetallen gaan in beide richtingen vanaf nul:\n```\n← ... -5  -4  -3  -2  -1   0   +1  +2  +3  +4  +5 ...→\n```\n\n**Hoe lees je**:\n• 'Min vier' = −4.\n• 'Min twaalf' = −12.\n• 'Plus drie' = +3 *(of gewoon 3)*.\n\n**Welk getal is groter?**\n• −1 is **groter** dan −5. *(Op de getalslijn ligt −1 rechts van −5.)*\n• 0 is groter dan elke negatieve. \n• Elke positieve is groter dan elke negatieve.\n\n**Cito-tip**:\nDenk aan een thermometer. **Hoger** = warmer = groter. **Lager** = kouder = kleiner.",
    svg: thermometerSvg(-5, "Vijf graden onder nul"),
    checks: [
      {
        q: "Welk getal is **groter**: −3 of −7?",
        options: ["−3","−7","Hetzelfde","Niet vergelijkbaar"],
        answer: 0,
        wrongHints: [null,"Andersom — −7 is verder van nul aan de min-kant.","Ze zijn niet hetzelfde.","Wel vergelijkbaar — denk aan thermometer."],
        uitlegPad: {
          stappen: [{ titel: "Dichter bij 0 = groter", tekst: "Bij negatieve getallen: dichter bij 0 = groter. −3 ligt dichter bij 0 dan −7." }],
          woorden: [{ woord: "groter (negatief)", uitleg: "Hoger op getalslijn = groter (ook bij negatief)." }],
          theorie: "Getalslijn-regel: rechts = groter. −3 ligt rechts van −7.",
          voorbeelden: [{ type: "thermometer", tekst: "−3°C is warmer dan −7°C. Warmer = hoger = groter." }],
          basiskennis: [{ onderwerp: "Min-teken misleidt", uitleg: "7 > 3, maar −7 < −3 (omdat verder van 0 aan min-kant)." }],
          niveaus: { basis: "−3. A.", simpeler: "Op thermometer: −3°C is warmer dan −7°C. Warmer = groter. = A.", nogSimpeler: "−3 = A." },
        },
      },
      {
        q: "**−12 °C** — wat is dat?",
        options: ["12 graden onder nul","12 graden boven nul","Niets — bestaat niet","12 graden warm"],
        answer: 0,
        wrongHints: [null,"Andersom — min-teken = onder nul.","Wel — denk aan winter.","Andersom — boven nul = positief."],
        uitlegPad: {
          stappen: [{ titel: "Min = onder nul", tekst: "−12 °C = 12 graden ONDER nul. Min-teken = onder/min." }],
          woorden: [{ woord: "−X °C", uitleg: "X graden onder nul (vriespunt)." }],
          theorie: "Temperatuur: positief = boven 0 (warm). Negatief = onder 0 (vries).",
          voorbeelden: [{ type: "tabel", tekst: "+20°C zomer. 0°C vriespunt. −5°C lichte vorst. −12°C hard vriest." }],
          basiskennis: [{ onderwerp: "Bestaat zeker", uitleg: "Bij ons in winter, of bij Pool/Siberië nog veel kouder (−40°C)." }],
          niveaus: { basis: "12 graden onder nul. A.", simpeler: "Min-teken voor 12 = onder nul. Dus −12°C = 12 graden onder vriespunt. = A.", nogSimpeler: "Onder nul = A." },
        },
      },
      {
        q: "Welk getal is het **kleinst**: 0, −1, +5, −10?",
        options: ["−10","−1","0","+5"],
        answer: 0,
        wrongHints: [null,"Niet de kleinste — −10 is verder van nul aan min-kant.","Niet de kleinste.","De grootste."],
        uitlegPad: {
          stappen: [{ titel: "Verste links", tekst: "Op getalslijn: verste links = kleinst. −10 ligt het verst links." }],
          woorden: [{ woord: "kleinst", uitleg: "Verste naar links op getalslijn (= meest negatief)." }],
          theorie: "Volgorde groot→klein: +5 > 0 > −1 > −10.",
          voorbeelden: [{ type: "lijn", tekst: "−10 ← −1 ← 0 ← +5. Hoe verder links, hoe kleiner." }],
          basiskennis: [{ onderwerp: "Min-getallen omgekeerd", uitleg: "Bij positieven: groter getal = groter. Bij negatieven: groter cijfer = kleiner." }],
          niveaus: { basis: "−10. A.", simpeler: "Op getalslijn: −10 ← −1 ← 0 ← +5. Kleinst = verste links = −10. = A.", nogSimpeler: "−10 = A." },
        },
      },
    ],
  },

  {
    title: "Getalslijn — stappen tellen",
    explanation: "Op de getalslijn kun je **lopen** *(stappen tellen)* om sommen te maken.\n\n**Optellen** = naar **rechts** lopen.\n**Aftrekken** = naar **links** lopen.\n\n**Voorbeeld 1**: 3 − 5 = ?\n• Begin op 3.\n• 5 stappen naar links: 3 → 2 → 1 → 0 → −1 → **−2**.\n• Antwoord: **−2**.\n\n**Voorbeeld 2**: −4 + 6 = ?\n• Begin op −4.\n• 6 stappen naar rechts: −4 → −3 → −2 → −1 → 0 → 1 → **2**.\n• Antwoord: **+2**.\n\n**Voorbeeld 3**: −2 − 3 = ?\n• Begin op −2.\n• 3 stappen naar links: −2 → −3 → −4 → **−5**.\n• Antwoord: **−5**.\n\n**Cito-truc — denken in 'stappen op de getalslijn'**:\nVooral handig bij sommen waar het mis gaat in je hoofd. Teken de getalslijn op kladpapier en wandel.\n\n**Sneltrucs voor optellen**:\n• Plus een positief = naar rechts.\n• Plus een negatief = naar links.\n• Min een positief = naar links.\n• Min een negatief = naar **rechts** *(min een minus = plus)*.",
    svg: getalslijnSvg(-7, 7, -2),
    checks: [
      {
        q: "**4 − 6** = ?",
        options: ["−2","2","10","−10"],
        answer: 0,
        wrongHints: [null,"Andersom — 4 < 6, dus negatief.","Veel te veel — heb je optellen gedaan?","Te veel."],
        uitlegPad: {
          stappen: [{ titel: "Onder nul gaan", tekst: "Begin op 4. 6 stappen links: 4→3→2→1→0→−1→−2." }],
          woorden: [{ woord: "stappen tellen", uitleg: "Aftrekken = naar links lopen op getalslijn." }],
          theorie: "Wanneer aftrekker > beginwaarde: ga onder nul (negatief antwoord).",
          voorbeelden: [{ type: "stap", tekst: "4 − 6 = 4 − 4 − 2 = 0 − 2 = −2." }],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Splits: 4−4=0, dan nog 2 verder naar links → −2." }],
          niveaus: { basis: "−2. A.", simpeler: "4 − 6: vanaf 4 zes stappen links → −2 (onder nul). = A.", nogSimpeler: "−2 = A." },
        },
      },
      {
        q: "**−3 + 5** = ?",
        options: ["+2","−2","−8","+8"],
        answer: 0,
        wrongHints: [null,"Andersom — 5 stappen rechts vanaf −3 brengt je op +2.","Te ver naar links — controleer richting.","Te ver naar rechts."],
        uitlegPad: {
          stappen: [{ titel: "Naar rechts", tekst: "Begin op −3. 5 stappen rechts: −3→−2→−1→0→1→2." }],
          woorden: [{ woord: "optellen vanaf negatief", uitleg: "Plus = naar rechts. Vanaf −3 + 5 → +2." }],
          theorie: "−3+5: eerst 3 stappen tot 0 (gebruikt 3 van de 5), dan nog 2 → +2.",
          voorbeelden: [{ type: "stap", tekst: "−3 + 3 = 0. 0 + 2 = 2. Dus −3 + 5 = 2." }],
          basiskennis: [{ onderwerp: "Splits-truc", uitleg: "Splits 5 in 3+2. Eerst 3 om bij 0 te komen, dan rest." }],
          niveaus: { basis: "+2. A.", simpeler: "−3 + 5: eerst 3 omhoog naar 0, dan 2 verder = +2. = A.", nogSimpeler: "+2 = A." },
        },
      },
      {
        q: "**−5 − 4** = ?",
        options: ["−9","−1","+9","+1"],
        answer: 0,
        wrongHints: [null,"Te dichtbij — controleer: 4 stappen LINKS vanaf −5.","Andersom — verder van nul.","Andersom — links, niet rechts."],
        uitlegPad: {
          stappen: [{ titel: "Verder onder nul", tekst: "Begin op −5. 4 stappen links: −5→−6→−7→−8→−9." }],
          woorden: [{ woord: "negatief - positief", uitleg: "Min van negatief: nog dieper onder nul." }],
          theorie: "Bij negatief getal aftrekken: tel gewoon op wat er afgaat. −5 − 4 = −(5+4) = −9.",
          voorbeelden: [{ type: "truc", tekst: "Beide negatief denken: −5 + (−4) = −9. Of: schuld 5 + schuld 4 = schuld 9." }],
          basiskennis: [{ onderwerp: "Schuld-truc", uitleg: "Schuld €5 + schuld €4 = schuld €9 = saldo −€9." }],
          niveaus: { basis: "−9. A.", simpeler: "−5 − 4: vanaf −5 vier stappen links = −9. = A.", nogSimpeler: "−9 = A." },
        },
      },
    ],
  },

  {
    title: "Min een minus = plus",
    explanation: "Een **lastige** maar belangrijke regel:\n\n**Twee min-tekens op rij worden plus**.\n\n**Voorbeeld**: 5 − (−3) = ?\n\nDe '−(−3)' betekent: je trekt een negatief getal af. Dat is hetzelfde als **er drie bij optellen**.\n\nDus: 5 − (−3) = 5 + 3 = **8**.\n\n**Waarom?**\nStel je hebt geld: € 5. Een 'schuld' van € 3 betekent dat je in totaal € 5 − € 3 = € 2 hebt. Maar als die schuld **wegvalt** *(wordt afgetrokken)*, krijg je € 3 erbij. Dus 5 − (−3) = 8.\n\n**Andere voorbeelden**:\n• −2 − (−5) = −2 + 5 = **+3**.\n• 4 + (−6) = 4 − 6 = **−2** *(plus een negatief = aftrekken)*.\n• −7 + (−3) = −7 − 3 = **−10**.\n\n**Cito-truc — telkens-tekens-regel**:\nKijk naar de **2 tekens op rij**:\n• + + = **plus**\n• + − = **min**\n• − + = **min**\n• − − = **plus**\n\nVoorbeeld: 8 − − 5 = 8 + 5 = **13** *(want −− = +)*.\n\n**Cito-vraag-vorm**:\n*'In een spel kun je punten verliezen. Sven had +12 en verliest dan −5 (dus krijgt 5 erbij). Wat is zijn nieuwe score?'*\n• Niet aftrekken want 'verliest' van negatief = krijgt erbij.\n• 12 − (−5) = 12 + 5 = **17**.",
    checks: [
      {
        q: "**8 − (−3)** = ?",
        options: ["11","5","−11","−5"],
        answer: 0,
        wrongHints: [null,"Twee minnen achter elkaar — wat doen die samen? Optellen of aftrekken?","Niet 8 − 3 — let goed op het minteken in de haakjes.","Andersom — twee minnen heffen elkaar op.","Niet aftrekken — twee minnen heffen elkaar op."],
        uitlegPad: {
          stappen: [{ titel: "−− = +", tekst: "8 − (−3) → twee minnen worden plus → 8 + 3 = 11." }],
          woorden: [{ woord: "min een minus", uitleg: "Twee minnen achter elkaar = plus." }],
          theorie: "Tekens-regel: −− = +, ++ = +, +− = −, −+ = −.",
          voorbeelden: [{ type: "stap", tekst: "8 − (−3) = 8 + 3 = 11." }],
          basiskennis: [{ onderwerp: "Schuld-truc", uitleg: "Saldo €8, schuld van €3 valt weg → €8 + €3 erbij = €11." }],
          niveaus: { basis: "11. A.", simpeler: "Twee minnen worden plus: 8 − (−3) = 8 + 3 = 11. = A.", nogSimpeler: "11 = A." },
        },
      },
      {
        q: "**−4 + (−6)** = ?",
        options: ["−10","+10","−2","+2"],
        answer: 0,
        wrongHints: [null,"Plus een minus = aftrekken: −4 − 6.","Niet plus — hoe twee tekens samen.","Te dichtbij — heb je 4 − 6 gedaan ipv −4−6?","Andersom."],
        uitlegPad: {
          stappen: [{ titel: "+− = −", tekst: "+(−6) wordt −6. Dus −4 + (−6) = −4 − 6 = −10." }],
          woorden: [{ woord: "plus een minus", uitleg: "Plus voor minus-getal = aftrekken." }],
          theorie: "Tekens-regel: +− = −. Dus +(−6) = −6.",
          voorbeelden: [{ type: "stap", tekst: "−4 + (−6) = −4 − 6 = −10." }],
          basiskennis: [{ onderwerp: "Schuld-stapelen", uitleg: "Schuld €4 + schuld €6 = schuld €10 = saldo −€10." }],
          niveaus: { basis: "−10. A.", simpeler: "+(−6) wordt −6. Dus −4 − 6 = −10. = A.", nogSimpeler: "−10 = A." },
        },
      },
      {
        q: "**5 + (−2)** = ?",
        options: ["+3","+7","−3","−7"],
        answer: 0,
        wrongHints: [null,"Plus een minus = aftrekken: 5 − 2 = 3.","Niet optellen — er is een min in de haakjes.","Andersom — 5 > 2, dus positief.","Veel te ver."],
        uitlegPad: {
          stappen: [{ titel: "+− = −", tekst: "5 + (−2) → +(−) = − → 5 − 2 = 3." }],
          woorden: [{ woord: "plus een negatief", uitleg: "+(−X) = −X (gewoon aftrekken)." }],
          theorie: "Tekens-regel: +− = −.",
          voorbeelden: [{ type: "stap", tekst: "5 + (−2) = 5 − 2 = 3." }],
          basiskennis: [{ onderwerp: "Schuld erbij", uitleg: "Saldo €5 + schuld van €2 = €5 − €2 = €3 over." }],
          niveaus: { basis: "+3. A.", simpeler: "5 + (−2) = 5 − 2 = 3 (plus een min wordt min). = A.", nogSimpeler: "+3 = A." },
        },
      },
    ],
  },

  {
    title: "Praktijk — temperatuur en geld",
    explanation: "Negatieve getallen zie je vooral in:\n\n**Temperatuur**:\n*'In de winter daalde de temperatuur van +3 °C overdag naar −7 °C 's nachts. Hoeveel graden was 't gedaald?'*\n\n• Verschil = +3 − (−7) = 3 + 7 = **10 graden**.\n\nOf op de thermometer: van +3 → 0 = 3 omlaag. Van 0 → −7 = 7 omlaag. Totaal **10 omlaag**.\n\n**Geld** *(schuld + saldo)*:\n*'Mark heeft saldo van € 25 op rekening. Hij betaalt € 40 boodschappen. Wat is zijn saldo nu?'*\n\n• 25 − 40 = **−€ 15** *(roodstand)*.\n\n*'Hij krijgt zijn loon van € 100. Wat is zijn saldo?'*\n• −15 + 100 = **+€ 85**.\n\n**Diepte / hoogte** *(zeespiegel)*:\nNederland ligt deels onder zeespiegel.\n• Schiphol: −4 m *(4 meter onder zeespiegel)*.\n• Mont Blanc: +4810 m *(boven zeespiegel)*.\n\n**Cito-tip — verschil van temperaturen**:\nVerschil = grotere getal − kleinere getal *(altijd positief uitkomst)*.\n• Tussen +5 en −3: verschil = 5 − (−3) = 5 + 3 = **8**.\n• Tussen +20 en −10: verschil = 20 − (−10) = 20 + 10 = **30**.\n\n**Slimme aanpak**: tel apart het 'positieve deel' (tot 0) en het 'negatieve deel' (van 0 omlaag). Dan tel je beide samen.",
    checks: [
      {
        q: "Temperatuur is **+5 °C**, daalt **8 graden**. **Nieuwe temperatuur**?",
        options: ["−3 °C","+3 °C","−13 °C","+13 °C"],
        answer: 0,
        wrongHints: [null,"Andersom — daalt naar onder nul.","Te ver — 5 − 8 = −3, niet −13.","Andersom — daalt, niet stijgt."],
        uitlegPad: {
          stappen: [{ titel: "5 − 8 = −3", tekst: "Dalen = aftrekken. 5 − 8 = −3 (3 onder nul)." }],
          woorden: [{ woord: "dalen", uitleg: "Temperatuur omlaag = aftrekken." }],
          theorie: "Stijgen = +. Dalen = −. Bij dalen onder 5 → onder nul.",
          voorbeelden: [{ type: "stap", tekst: "5 − 5 = 0. Nog 3 verder omlaag = −3." }],
          basiskennis: [{ onderwerp: "Thermometer", uitleg: "Kwik daalt 8 streepjes vanaf +5 → komt op −3." }],
          niveaus: { basis: "−3 °C. A.", simpeler: "Dalen 8 graden van +5: 5 − 8 = −3 (3 graden onder nul). = A.", nogSimpeler: "−3 = A." },
        },
      },
      {
        q: "Verschil tussen **+12 °C en −5 °C**?",
        options: ["17","7","−17","−7"],
        answer: 0,
        wrongHints: [null,"Te weinig — 12 − (−5) = 12 + 5 = 17.","Andersom — verschil is altijd positief.","Andersom."],
        uitlegPad: {
          stappen: [{ titel: "Tel beide stukken", tekst: "+12 → 0 = 12 graden. 0 → −5 = 5 graden. Totaal 12+5 = 17." }],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel graden tussen twee waarden. Altijd positief." }],
          theorie: "Verschil bij negatief: tel positieve deel + negatieve deel. Of: groter − kleiner.",
          voorbeelden: [{ type: "stap", tekst: "+12 − (−5) = 12 + 5 = 17 graden." }],
          basiskennis: [{ onderwerp: "Altijd positief", uitleg: "Verschil = afstand op getalslijn = altijd ≥0." }],
          niveaus: { basis: "17. A.", simpeler: "Van +12 naar 0 = 12 stappen. Van 0 naar −5 = 5 stappen. Totaal 17. = A.", nogSimpeler: "17 = A." },
        },
      },
      {
        q: "Anna had **−€ 30 saldo** *(rood)*. Krijgt **€ 80 zakgeld**. Nieuw saldo?",
        options: ["+€ 50","+€ 110","−€ 50","−€ 110"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je rood vergeten?","Andersom — krijgt erbij, dus stijgt naar plus.","Veel te ver."],
        uitlegPad: {
          stappen: [{ titel: "Schuld eerst weg", tekst: "−30 + 80: eerst 30 om bij 0 te komen, dan nog 50 over. → +50." }],
          woorden: [{ woord: "rood saldo", uitleg: "Negatief saldo = schuld bij bank." }],
          theorie: "Negatief + positief: positief eet eerst de schuld op, rest is plus.",
          voorbeelden: [{ type: "stap", tekst: "−30 + 30 = 0 (schuld weg). +50 over. Totaal +€50." }],
          basiskennis: [{ onderwerp: "Echt geld", uitleg: "Eerst schuld terugbetalen, dan kun je nog €50 uitgeven." }],
          niveaus: { basis: "+€50. A.", simpeler: "Schuld €30 + zakgeld €80 = €30 schuld weg + €50 over = +€50. = A.", nogSimpeler: "+€50 = A." },
        },
      },
    ],
  },

  {
    title: "Cito-eindopdracht — negatieve getallen mix",
    explanation: "Mix-toets in Cito-stijl met negatieve getallen — temperatuur, saldo, sommen.\n\nVeel succes!",
    checks: [
      {
        q: "**−8 + 5** = ?",
        options: ["−3","+3","−13","+13"],
        answer: 0,
        wrongHints: [null,"Andersom — 5 stappen rechts vanaf −8.","Te ver naar links — kijk richting.","Veel te ver."],
        uitlegPad: {
          stappen: [{ titel: "Naar rechts", tekst: "Begin op −8. 5 stappen rechts: −8 + 5 = −3 (nog onder nul)." }],
          woorden: [{ woord: "splits", uitleg: "Optellen vanaf negatief: gebruik deel om bij 0 te komen, rest erna." }],
          theorie: "5 niet genoeg om bij 0 te komen vanaf −8 (zou 8 nodig hebben). Antwoord blijft negatief.",
          voorbeelden: [{ type: "stap", tekst: "−8 + 5 = −(8−5) = −3." }],
          basiskennis: [{ onderwerp: "Schuld-truc", uitleg: "Schuld €8 − €5 betalen = nog €3 schuld over." }],
          niveaus: { basis: "−3. A.", simpeler: "−8 + 5: 5 stappen rechts vanaf −8 → −3 (nog onder nul). = A.", nogSimpeler: "−3 = A." },
        },
      },
      {
        q: "Temperatuur **−4 °C**, stijgt **9 graden**. Nieuwe temperatuur?",
        options: ["+5 °C","+13 °C","−5 °C","−13 °C"],
        answer: 0,
        wrongHints: [null,"Te veel — controleer: −4 + 9 = 5.","Andersom — gaat omhoog, niet omlaag.","Veel te laag."],
        uitlegPad: {
          stappen: [{ titel: "Stijgen vanaf −4", tekst: "−4 + 9: 4 omhoog naar 0, dan nog 5 = +5." }],
          woorden: [{ woord: "stijgen", uitleg: "Temperatuur omhoog = optellen." }],
          theorie: "Eerst tot 0 (4 stappen), dan rest (5 stappen) erna.",
          voorbeelden: [{ type: "stap", tekst: "−4 → 0 (4 stappen). 0 → +5 (5 stappen). Totaal 9 stappen = +5." }],
          basiskennis: [{ onderwerp: "Splits in stukken", uitleg: "Negatief naar positief: splits 9 in 4+5." }],
          niveaus: { basis: "+5 °C. A.", simpeler: "−4 + 9: vanaf −4 negen omhoog. 4 om bij 0 te komen, dan nog 5 → +5°C. = A.", nogSimpeler: "+5 = A." },
        },
      },
      {
        q: "Welk getal is het **grootst**: −8, −2, 0, −15?",
        options: ["0","−2","−8","−15"],
        answer: 0,
        wrongHints: [null,"Tweede — 0 is groter.","Niet — 0 en −2 zijn beide groter.","Kleinste."],
        uitlegPad: {
          stappen: [{ titel: "Verste rechts", tekst: "Op getalslijn: rechts = groter. 0 ligt rechts van alle negatieven." }],
          woorden: [{ woord: "grootst", uitleg: "Verste rechts op getalslijn." }],
          theorie: "0 > elke negatieve. Bij negatieven: dichter bij 0 = groter.",
          voorbeelden: [{ type: "lijn", tekst: "−15 < −8 < −2 < 0. Volgorde links naar rechts." }],
          basiskennis: [{ onderwerp: "Niet alleen negatief", uitleg: "0 > alle drie negatieven, dus 0 is de grootste." }],
          niveaus: { basis: "0. A.", simpeler: "0 is groter dan elke negatieve. Op lijn ligt 0 het meest rechts. = A.", nogSimpeler: "0 = A." },
        },
      },
      {
        q: "**3 − (−7)** = ?",
        options: ["+10","−10","−4","+4"],
        answer: 0,
        wrongHints: [null,"Andersom — min een minus = plus.","Niet aftrekken.","Niet aftrekken — twee minnen heffen op."],
        uitlegPad: {
          stappen: [{ titel: "−− = +", tekst: "3 − (−7) = 3 + 7 = 10." }],
          woorden: [{ woord: "min een minus", uitleg: "−− = +" }],
          theorie: "Twee minnen achter elkaar = plus.",
          voorbeelden: [{ type: "stap", tekst: "3 − (−7) = 3 + 7 = 10." }],
          basiskennis: [{ onderwerp: "Schuld-truc", uitleg: "Saldo €3, schuld €7 valt weg → €10 over." }],
          niveaus: { basis: "+10. A.", simpeler: "Twee minnen worden plus: 3 − (−7) = 3 + 7 = 10. = A.", nogSimpeler: "+10 = A." },
        },
      },
      {
        q: "Marc had **+€ 15** zakgeld. Hij geeft **€ 22 uit**. Saldo?",
        options: ["−€ 7","+€ 7","−€ 37","+€ 37"],
        answer: 0,
        wrongHints: [null,"Andersom — gaat onder nul (rood).","Te veel — heb je optellen gedaan?","Te veel — heb je 15 + 22 ipv 15−22?"],
        uitlegPad: {
          stappen: [{ titel: "15 − 22 = −7", tekst: "Hij geeft meer uit dan hij heeft. Saldo onder nul: 15 − 22 = −7." }],
          woorden: [{ woord: "uitgeven", uitleg: "Aftrekken van saldo." }],
          theorie: "Wanneer uitgaven > saldo: saldo wordt rood (negatief).",
          voorbeelden: [{ type: "stap", tekst: "15 − 15 = 0 (schoon). 0 − 7 = −7 (rood)." }],
          basiskennis: [{ onderwerp: "Roodstand", uitleg: "−€7 = €7 schuld bij bank/ouders." }],
          niveaus: { basis: "−€7. A.", simpeler: "Marc heeft €15, geeft €22 uit (€7 te veel) → saldo −€7 (rood). = A.", nogSimpeler: "−€7 = A." },
        },
      },
      {
        q: "**Verschil tussen +12 °C en −5 °C** = ?",
        options: ["17 °C","7 °C","−7 °C","−17 °C"],
        answer: 0,
        wrongHints: [null, "Te weinig — vergeet de stappen onder nul niet.", "Verschil is altijd positief (afstand).", "Verschil is altijd positief — geen min ervoor."],
        uitlegPad: {
          stappen: [
            { titel: "Verschil = afstand op getalslijn", tekst: "Van −5 °C naar +12 °C: tel stappen. Stappen tot 0: **5**. Stappen van 0 tot 12: **12**. Samen: 5 + 12 = **17**." },
            { titel: "Truc: hoog − laag", tekst: "Verschil = grootste min kleinste. **+12 − (−5)** = 12 + 5 = 17. Twee minnen worden plus." },
            { titel: "Cito-instinker", tekst: "Verschil is ALTIJD positief. Hoeveel graden ertussen, ongeacht richting. Veelgemaakte fout: −7 of −17 invullen omdat de laagste temperatuur negatief is. Verschil = afstand, en afstand is altijd ≥ 0." },
          ],
          woorden: [
            { woord: "verschil", uitleg: "Hoeveel ertussen zit. Altijd positief getal." },
            { woord: "getalslijn", uitleg: "Visualisatie: negatieve getallen links, positief rechts van 0." },
          ],
          theorie: "Verschil-berekenen-stappen:\n1. Bepaal grootste en kleinste\n2. Trek af: grootste − kleinste\n3. Als kleinste negatief: −(−X) = +X (min-min = plus)\n4. Antwoord positief\n\nOf: tel stappen op getalslijn van kleinste naar grootste.",
          voorbeelden: [
            { type: "stap", tekst: "Verschil tussen +5 en −3: 5 + 3 = 8." },
            { type: "stap", tekst: "Verschil tussen −10 en −2: 10 − 2 = 8 (allebei negatief, kleinere afstand)." },
          ],
          basiskennis: [{ onderwerp: "Weer-vraag", uitleg: "Cito veel met temperatuur: −5°C 's nachts vs +12°C overdag → verschil 17 graden." }],
          niveaus: { basis: "17 °C. = A.", simpeler: "Van −5 naar 0 = 5. Van 0 naar +12 = 12. Samen: 17 graden verschil. = A.", nogSimpeler: "17 = A." },
        },
      },
      {
        q: "Een duiker zwemt op **−12 m** *(diepte)*. Hij stijgt **8 meter**. Waar **nu**?",
        options: ["−4 m","−20 m","+4 m","−8 m"],
        answer: 0,
        wrongHints: [null, "Andersom — stijgen is omhoog (richting 0), niet omlaag.", "Te veel — niet genoeg gestegen om boven water te zijn.", "Te weinig — controleer."],
        uitlegPad: {
          stappen: [
            { titel: "Diepte = negatief", tekst: "Onder zeespiegel: getallen negatief. −12 m = 12 meter onder water." },
            { titel: "Stijgen = optellen", tekst: "Stijgen = richting 0 (omhoog). −12 + 8 = **−4**. Hij is nog 4 m onder de zeespiegel." },
            { titel: "Cito-context: hoogte vs diepte", tekst: "• Boven zeespiegel: positief (+150 m berg)\n• Onder zeespiegel: negatief (−12 m duiker)\n• Zeespiegel zelf: 0 m\nStijgen = + (omhoog). Dalen = − (omlaag)." },
          ],
          woorden: [
            { woord: "zeespiegel", uitleg: "Niveau van de zee = 0 m. Boven = +, onder = −." },
            { woord: "stijgen / dalen", uitleg: "Stijgen = optellen (richting 0/+). Dalen = aftrekken (richting −)." },
          ],
          theorie: "Diepte / hoogte met negatieve getallen:\n• Vliegtuig +10.000 m\n• Berg +800 m\n• Zeespiegel 0\n• Duiker −12 m\n• Onderzeeer −80 m\nBij beweging: pas op of getal positief of negatief is — context bepaalt.",
          voorbeelden: [
            { type: "stap", tekst: "Berg +500 m, daalt 200 m → +300 m." },
            { type: "stap", tekst: "Onderzeeer −80 m, stijgt 30 m → −50 m." },
          ],
          basiskennis: [{ onderwerp: "Onder zeespiegel NL", uitleg: "Nederland heeft delen onder zeespiegel (−6 m bv. in Zuidplaspolder). Vandaar dijken." }],
          niveaus: { basis: "−12 + 8 = −4. = A.", simpeler: "Duiker op −12 m. 8 omhoog = −12 + 8 = −4 m. Nog 4 m onder water. = A.", nogSimpeler: "−4 m = A." },
        },
      },
      {
        q: "Welke rij is **op volgorde van klein naar groot**?",
        options: ["−9, −3, 0, +4","0, −3, +4, −9","−3, −9, 0, +4","+4, 0, −3, −9"],
        answer: 0,
        wrongHints: [null, "Niet op volgorde — 0 hoort tussen negatieven en positieven.", "Niet — −9 < −3, dus −9 hoort eerst.", "Andersom — dat is groot naar klein."],
        uitlegPad: {
          stappen: [
            { titel: "Negatieven: groter cijfer = kleiner getal", tekst: "Bij negatieve getallen is het tegenovergesteld dan bij positieven. **−9 < −3** (omdat −9 verder van 0 ligt, dus kleiner)." },
            { titel: "Volgorde op getalslijn", tekst: "Links naar rechts: kleinste naar grootste.\n←  −9    −3    0    +4  →\nDus de juiste volgorde: **−9, −3, 0, +4**." },
            { titel: "Cito-instinker", tekst: "Veelgemaakte fout: −9 plaatsen NA −3 omdat '9 > 3'. Bij negatieven werkt het andersom — '−9 ligt verder onder nul dan −3'." },
          ],
          woorden: [
            { woord: "klein naar groot", uitleg: "Van links naar rechts op getalslijn." },
            { woord: "negatief vergelijken", uitleg: "Hoe groter het cijfer achter de min, hoe kleiner het getal." },
          ],
          theorie: "Negatieve-getallen-vergelijk-regel:\n• Verder weg van 0 (groter cijfer) = kleiner getal\n• −100 < −10 < −1 < 0 < +1 < +10\n• Truc: trek streep door min — kleinste 'gewone' getal in min = grootste in absoluut, dus kleinst overall.",
          voorbeelden: [
            { type: "stap", tekst: "Sorteer −5, +2, −1, 0: −5 < −1 < 0 < +2." },
            { type: "stap", tekst: "Wat is groter: −7 of −20? −7 (ligt dichter bij 0)." },
          ],
          basiskennis: [{ onderwerp: "Temperatuur-vergelijking", uitleg: "Het is kouder bij −15°C dan bij −5°C. −15 < −5." }],
          niveaus: { basis: "−9, −3, 0, +4. = A.", simpeler: "Negatieven: −9 verder van 0 = kleiner. Dus volgorde links→rechts: −9, −3, 0, +4. = A.", nogSimpeler: "−9, −3, 0, +4 = A." },
        },
      },
      {
        q: "**(−5) × 3** = ?",
        options: ["−15","+15","−8","+8"],
        answer: 0,
        wrongHints: [null, "Niet — bij min×plus blijft het minteken.", "Niet vermenigvuldigen genoeg.", "Andersom."],
        uitlegPad: {
          stappen: [
            { titel: "Min × plus = min", tekst: "Regel: bij vermenigvuldigen tellen we de minnen.\n• min × plus → **min**\n• plus × min → **min**\n• min × min → **plus**\n• plus × plus → **plus**\nHier: (−5) × 3 → één min → **negatief antwoord**." },
            { titel: "Reken het getal", tekst: "5 × 3 = 15. Met minteken (één minus): **−15**." },
            { titel: "Cito-truc: tel de minnen", tekst: "Vermenigvuldig de getallen normaal. Tel daarna hoeveel minnen er totaal staan. **Oneven** aantal minnen → eindantwoord min. **Even** aantal minnen → plus.\n• (−2) × (−3) = 6 (twee min = even = plus)\n• (−2) × 3 = −6 (een min = oneven = min)" },
          ],
          woorden: [
            { woord: "vermenigvuldigen met negatief", uitleg: "Reken getal normaal, kijk minnen-aantal voor teken." },
            { woord: "min × min = plus", uitleg: "Twee minnen heffen elkaar op bij vermenigvuldigen." },
          ],
          theorie: "Negatief-vermenigvuldig-regels:\n1. Tel het aantal minnen in de som\n2. Reken de getallen normaal\n3. Oneven aantal minnen → uitkomst is negatief\n4. Even aantal minnen (incl. 0) → uitkomst is positief\n\nGeldt ook bij delen.",
          voorbeelden: [
            { type: "stap", tekst: "(−4) × 5 = −20 (1 min = oneven = −)." },
            { type: "stap", tekst: "(−2) × (−7) = +14 (2 min = even = +)." },
            { type: "stap", tekst: "(−1) × (−1) × (−1) = −1 (3 min = oneven = −)." },
          ],
          basiskennis: [{ onderwerp: "Examen-stof", uitleg: "Dit is brugklas-VO-stof, maar Cito-eindtoets test het ook." }],
          niveaus: { basis: "−15. = A.", simpeler: "Min × plus = min. 5 × 3 = 15. Met minteken: −15. = A.", nogSimpeler: "−15 = A." },
        },
      },
      { q: "Het is −3°C. De temperatuur stijgt 8°. Hoe warm is het nu?", options: ["5°C","11°C","−11°C","−5°C"], answer: 0, wrongHints: [null, "Niet — niet bij elkaar optellen zonder min.", "Niet — getal is gestegen.", "Niet — je telt erbij op, daalt niet."] },
      { q: "Op een rekening staat −€20. Er komt €35 bij. Saldo nu?", options: ["+€15","+€55","−€55","−€15"], answer: 0, wrongHints: [null, "Niet — niet −20 omgedraaid bij +35.", "Niet — je VOEGT TOE.", "Niet — kleiner schuld? Klopt niet."] },
      { q: "−6 − 4 = ?", options: ["−10","−2","2","10"], answer: 0, wrongHints: [null, "Niet — schuld wordt groter, niet kleiner.", "Niet — antwoord is negatief.", "Niet — beide min, getal wordt min."] },
      { q: "Welke is het kleinst?", options: ["−8","−3","0","5"], answer: 0, wrongHints: [null, "Niet — dichter bij nul = groter.", "Niet — er zijn nog kleinere.", "Niet — dat is de grootste."] },
      { q: "**5 − 8** = ?", options: ["−3","3","−13","13"], answer: 0, wrongHints: [null, "Verkeerd teken.", "Te ver.", "Niet."] },
      { q: "Welke is **grootst**?", options: ["3","0","−1","−5"], answer: 0, wrongHints: [null, "Niet.", "Negatief is kleiner.", "Veel kleiner."] },
      { q: "Van −10 naar −3, hoeveel **opgewarmd**?", options: ["7°","−7°","13°","3°"], answer: 0, wrongHints: [null, "Niet — opwarming positief.", "Te veel.", "Niet."] },
      { q: "0 − 4 = ?", options: ["−4","4","0","−40"], answer: 0, wrongHints: [null, "Niet — onder nul.", "Niet — eraf.", "Te ver."] },
      { q: "Wat is **tegengestelde** van −7?", options: ["7","−7","0","14"], answer: 0, wrongHints: [null, "Niet — zichzelf.", "Niet.", "Niet."] },
      { q: "Hoogte mens: 1,5 m boven zee. Duiker −3 m. Verschil?", options: ["4,5 m","1,5 m","−4,5 m","−1,5 m"], answer: 0, wrongHints: [null, "Maar 1 zijde.", "Verkeerd teken voor verschil.", "Niet."] },
      { q: "Welke getallenrij is **kleinst → grootst**?", options: ["−5, −2, 0, 3","3, 0, −2, −5","0, −2, −5, 3","−2, −5, 0, 3"], answer: 0, wrongHints: [null, "Andersom.", "Niet sorteer.", "Niet."] },
      { q: "Beneden zee-niveau is meestal?", options: ["Negatief","Positief","Nul","Niet relevant"], answer: 0, wrongHints: [null, "Boven.", "Op niveau.", "Wel."] },
      { q: "**−7 + 7** = ?", options: ["0","−14","14","7"], answer: 0, wrongHints: [null, "Niet — tegengestelde.", "Niet — tegengestelde.", "Niet."] },
      { q: "**−3 × 2** = ?", options: ["−6","6","−1","−5"], answer: 0, wrongHints: [null, "Verkeerd teken.", "Niet zo.", "Niet."] },
      { q: "**−2 × −3** = ?", options: ["6","−6","−5","5"], answer: 0, wrongHints: [null, "Verkeerd teken.", "Niet.", "Verkeerd teken."] },
      { q: "Welk getal ligt **2 onder −5**?", options: ["−7","−3","2","7"], answer: 0, wrongHints: [null, "Andersom.", "Niet.", "Niet."] },
      { q: "**Verschil** tussen −4 en 6?", options: ["10","2","−10","−2"], answer: 0, wrongHints: [null, "Niet.", "Niet — verschil positief.", "Niet."] },
      { q: "Op getallenlijn: welke ligt **rechts** van −3?", options: ["0","−5","−10","−4"], answer: 0, wrongHints: [null, "Links.", "Verder links.", "Verder links."] },
      { q: "**−1 − (−4)** = ?", options: ["3","−5","5","−3"], answer: 0, wrongHints: [null, "Niet — twee min = plus.", "Verkeerd teken.", "Niet."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const negatieveGetallenPo = {
  id: "negatieve-getallen-po",
  title: "Negatieve getallen — Cito groep 5-8",
  emoji: "🌡️",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — negatieve getallen",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Negatieve getallen voor groep 5-8: wat is een negatief getal, getalslijn lopen, min-een-minus = plus, praktijk met temperatuur en geld. ~12 min.",
  triggerKeywords: [
    "negatief","negatieve getallen","min","onder nul","temperatuur",
    "thermometer","getalslijn","schuld","rood",
  ],
  chapters,
  steps,
};

export default negatieveGetallenPo;

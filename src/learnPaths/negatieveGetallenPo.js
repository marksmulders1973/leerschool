// Leerpad: Negatieve getallen — voor groep 5-8
// 5 stappen. Doorstroomtoets-stijl praktijksommen.
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
  { letter: "D", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
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
    explanation: "**Negatieve getallen** zijn getallen **kleiner dan 0**. Ze hebben een **min-teken**: −1, −2, −3, etc.\n\n**Echte voorbeelden**:\n• **Temperatuur**: in de winter daalt 't onder nul. −5 °C = vijf graden onder nul.\n• **Geld**: een **schuld** is negatief. Je hebt −€ 50 = je moet 50 euro betalen.\n• **Hoogte**: een **kelder** is onder de grond. Verdieping −2 = 2 onder nul.\n\n**Op de getalslijn**:\nGetallen gaan in beide richtingen vanaf nul:\n```\n← ... -5  -4  -3  -2  -1   0   +1  +2  +3  +4  +5 ...→\n```\n\n**Hoe lees je**:\n• 'Min vier' = −4.\n• 'Min twaalf' = −12.\n• 'Plus drie' = +3 *(of gewoon 3)*.\n\n**Welk getal is groter?**\n• −1 is **groter** dan −5. *(Op de getalslijn ligt −1 rechts van −5.)*\n• 0 is groter dan elke negatieve. \n• Elke positieve is groter dan elke negatieve.\n\n**Toets-tip**:\nDenk aan een thermometer. **Hoger** = warmer = groter. **Lager** = kouder = kleiner.",
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
          niveaus: { basis: "−3.", simpeler: "Op thermometer: −3°C is warmer dan −7°C. Warmer = groter.", nogSimpeler: "−3" },
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
          voorbeelden: [{ type: "tabel", tekst: "+20°C zomer. 0°C vriespunt. −5°C lichte vorst. −12°C strenge vorst." }],
          basiskennis: [{ onderwerp: "Bestaat zeker", uitleg: "Bij ons in de winter, en op de Noordpool of in Siberië nog veel kouder (−40°C)." }],
          niveaus: { basis: "12 graden onder nul.", simpeler: "Min-teken voor 12 = onder nul. Dus −12°C = 12 graden onder vriespunt.", nogSimpeler: "Onder nul" },
        },
      },
      {
        q: "Welk getal is het **kleinst**: 0, −1, +5, −10?",
        options: ["−10","−1","0","+5"],
        answer: 0,
        wrongHints: [null,"Niet de kleinste — er is een getal dat nog verder van nul aan de min-kant ligt.","Niet de kleinste.","De grootste."],
        uitlegPad: {
          stappen: [{ titel: "Verste links", tekst: "Op getalslijn: verste links = kleinst. −10 ligt het verst links." }],
          woorden: [{ woord: "kleinst", uitleg: "Verste naar links op getalslijn (= meest negatief)." }],
          theorie: "Volgorde groot→klein: +5 > 0 > −1 > −10.",
          voorbeelden: [{ type: "lijn", tekst: "−10 ← −1 ← 0 ← +5. Hoe verder links, hoe kleiner." }],
          basiskennis: [{ onderwerp: "Min-getallen omgekeerd", uitleg: "Bij positieven: groter getal = groter. Bij negatieven: groter cijfer = kleiner." }],
          niveaus: { basis: "−10.", simpeler: "Op getalslijn: −10 ← −1 ← 0 ← +5. Kleinst = verste links = −10.", nogSimpeler: "−10" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welke zin **klopt**?",
        options: ["−4 is groter dan −9", "−9 is groter dan −4", "−4 is kleiner dan −9", "−9 is groter dan 0"],
        answer: 0,
        wrongHints: [
          null,
          "Welk van de twee ligt dichter bij 0?",
          null,
          "Kan een getal onder nul groter zijn dan 0?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Dichter bij 0 = groter",
              tekst: "−4 ligt dichter bij 0 dan −9. Dus −4 is groter.",
            },
          ],
          woorden: [
            {
              woord: "groter",
              uitleg: "Op de getalslijn ligt het grotere getal rechts.",
            },
          ],
          theorie: "Op de getalslijn ligt −4 rechts van −9. Rechts = groter.",
          voorbeelden: [
            {
              type: "thermometer",
              tekst: "−4 °C is warmer dan −9 °C. Warmer = groter.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Elke negatieve is kleiner dan 0",
              uitleg: "Een getal onder nul is altijd kleiner dan 0.",
            },
          ],
          niveaus: {
            basis: "−4 is groter dan −9.",
            simpeler: "Denk aan de thermometer: −4 °C is minder koud dan −9 °C. Dus −4 is groter.",
            nogSimpeler: "−4 is groter dan −9",
          },
        },
      },
      {
        q: "Hoe schrijf je **'min vijftien'** als getal?",
        options: ["−15", "+15", "−50", "−5"],
        answer: 0,
        wrongHints: [null, "'Min' hoort bij een getal onder nul.", "Luister goed: vijftien of vijftig?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Min = onder nul",
              tekst: "'Min' betekent: onder nul. 'Vijftien' = 15. Samen: −15.",
            },
          ],
          woorden: [
            {
              woord: "min",
              uitleg: "Het teken − voor een getal: het getal ligt onder nul.",
            },
          ],
          theorie: "Je schrijft een min-teken en dan het getal: 'min vijftien' = −15.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "'Min vier' = −4. 'Min vijftien' = −15.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Plus of min",
              uitleg: "'Plus' = boven nul, 'min' = onder nul.",
            },
          ],
          niveaus: {
            basis: "−15.",
            simpeler: "Eerst het min-teken, dan 15. Dus −15.",
            nogSimpeler: "−15",
          },
        },
      },
      {
        q: "Je stapt in de lift en drukt op **−1**. Waar kom je uit?",
        options: ["Onder de grond", "Op de begane grond", "Op de eerste verdieping", "Op het dak"],
        answer: 0,
        wrongHints: [null, "Ligt −1 boven of onder nul?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Onder nul = onder de grond",
              tekst: "De begane grond is 0. Alles met een min-teken ligt daaronder.",
            },
          ],
          woorden: [
            {
              woord: "kelder",
              uitleg: "Een ruimte onder de grond.",
            },
          ],
          theorie: "Verdieping 0 is de begane grond. −1 is één verdieping lager: onder de grond.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Verdieping −2 = twee verdiepingen onder de grond.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Hoogte en min",
              uitleg: "Min bij hoogte = onder de grond (of onder de zee).",
            },
          ],
          niveaus: {
            basis: "Onder de grond.",
            simpeler: "0 is de begane grond. −1 is één verdieping lager: onder de grond.",
            nogSimpeler: "Onder de grond",
          },
        },
      },
      {
        q: "Tim houdt bij hoeveel geld hij heeft. Hij schrijft op: **−€ 10**. Wat betekent dat?",
        options: [
          "Tim moet nog 10 euro betalen",
          "Tim heeft 10 euro in zijn portemonnee",
          "Tim heeft precies 0 euro",
          "Tim krijgt nog 10 euro",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Wat betekent het min-teken bij geld?",
          null,
          "Denk aan een schuld: krijg je dan geld of moet je betalen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Min bij geld = schuld",
              tekst: "−€ 10 betekent: een schuld van 10 euro. Tim moet 10 euro betalen.",
            },
          ],
          woorden: [
            {
              woord: "schuld",
              uitleg: "Geld dat je nog moet betalen.",
            },
          ],
          theorie: "Bij geld is een negatief getal een schuld.",
          voorbeelden: [
            {
              type: "geld",
              tekst: "−€ 50 = je moet 50 euro betalen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Geld en min",
              uitleg: "Plus = geld dat je hebt. Min = geld dat je moet betalen.",
            },
          ],
          niveaus: {
            basis: "Tim moet 10 euro betalen.",
            simpeler: "Een min-teken bij geld = een schuld. Tim moet dus nog 10 euro betalen.",
            nogSimpeler: "Tim moet 10 euro betalen",
          },
        },
      },
      {
        q: "Welk getal is **niet negatief**?",
        options: ["+2", "−2", "−20", "−1"],
        answer: 0,
        wrongHints: [null, "Kijk naar het teken voor het getal.", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk naar het teken",
              tekst: "Negatief = met een min-teken. +2 heeft een plus-teken.",
            },
          ],
          woorden: [
            {
              woord: "negatief",
              uitleg: "Kleiner dan 0, met een min-teken.",
            },
          ],
          theorie: "Negatieve getallen hebben een min-teken. +2 ligt boven nul.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "−1, −2 en −20 liggen links van 0. +2 ligt rechts van 0.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Plus-teken",
              uitleg: "+3 is hetzelfde als gewoon 3: een positief getal.",
            },
          ],
          niveaus: {
            basis: "+2.",
            simpeler: "Alleen +2 heeft geen min-teken. Het ligt boven nul.",
            nogSimpeler: "+2",
          },
        },
      },
      {
        q: "Welk getal ligt op de getalslijn precies **tussen −3 en −1**?",
        options: ["−2", "+2", "0", "−4"],
        answer: 0,
        wrongHints: [
          null,
          "Zoek tussen de twee getallen, aan de min-kant.",
          null,
          "Ligt dat getal tussen −3 en −1, of ernaast?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk op de getalslijn",
              tekst: "… −4  −3  −2  −1  0 … Tussen −3 en −1 staat −2.",
            },
          ],
          woorden: [
            {
              woord: "getalslijn",
              uitleg: "Een lijn met alle getallen op volgorde, met 0 in het midden.",
            },
          ],
          theorie: "Op de getalslijn staan de negatieve getallen links van 0: −3, −2, −1, 0.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Tussen −5 en −3 ligt −4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Volgorde",
              uitleg: "Links van 0: −1, dan −2, dan −3, steeds verder weg.",
            },
          ],
          niveaus: {
            basis: "−2.",
            simpeler: "Tel van −3 naar −1: −3, −2, −1. In het midden staat −2.",
            nogSimpeler: "−2",
          },
        },
      },
    ],
  },

  {
    title: "Getalslijn — stappen tellen",
    explanation: "Op de getalslijn kun je **lopen** *(stappen tellen)* om sommen te maken.\n\n**Optellen** = naar **rechts** lopen.\n**Aftrekken** = naar **links** lopen.\n\n**Voorbeeld 1**: 3 − 5 = ?\n• Begin op 3.\n• 5 stappen naar links: 3 → 2 → 1 → 0 → −1 → **−2**.\n• Antwoord: **−2**.\n\n**Voorbeeld 2**: −4 + 6 = ?\n• Begin op −4.\n• 6 stappen naar rechts: −4 → −3 → −2 → −1 → 0 → 1 → **2**.\n• Antwoord: **+2**.\n\n**Voorbeeld 3**: −2 − 3 = ?\n• Begin op −2.\n• 3 stappen naar links: −2 → −3 → −4 → **−5**.\n• Antwoord: **−5**.\n\n**Toets-truc — denken in 'stappen op de getalslijn'**:\nVooral handig bij sommen waar het mis gaat in je hoofd. Teken de getalslijn op kladpapier en wandel.\n\n**Sneltrucs voor optellen**:\n• Plus een positief = naar rechts.\n• Plus een negatief = naar links.\n• Min een positief = naar links.\n• Min een negatief = naar **rechts** *(min een minus = plus)*.",
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
          niveaus: { basis: "−2.", simpeler: "4 − 6: vanaf 4 zes stappen links → −2 (onder nul).", nogSimpeler: "−2" },
        },
      },
      {
        q: "**−3 + 5** = ?",
        options: ["+2","−2","−8","+8"],
        answer: 0,
        wrongHints: [null,"Andersom — loop 5 stappen naar rechts vanaf −3: kom je onder of boven nul uit?","Te ver naar links — controleer richting.","Te ver naar rechts."],
        uitlegPad: {
          stappen: [{ titel: "Naar rechts", tekst: "Begin op −3. 5 stappen rechts: −3→−2→−1→0→1→2." }],
          woorden: [{ woord: "optellen vanaf negatief", uitleg: "Plus = naar rechts. Vanaf −3 + 5 → +2." }],
          theorie: "−3+5: eerst 3 stappen tot 0 (gebruikt 3 van de 5), dan nog 2 → +2.",
          voorbeelden: [{ type: "stap", tekst: "−3 + 3 = 0. 0 + 2 = 2. Dus −3 + 5 = 2." }],
          basiskennis: [{ onderwerp: "Splits-truc", uitleg: "Splits 5 in 3+2. Eerst 3 om bij 0 te komen, dan rest." }],
          niveaus: { basis: "+2.", simpeler: "−3 + 5: eerst 3 omhoog naar 0, dan 2 verder = +2.", nogSimpeler: "+2" },
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
          theorie: "Vanaf een negatief getal aftrekken: tel op wat er afgaat. −5 − 4 = −(5+4) = −9.",
          voorbeelden: [{ type: "truc", tekst: "Beide negatief denken: −5 + (−4) = −9. Of: schuld 5 + schuld 4 = schuld 9." }],
          basiskennis: [{ onderwerp: "Schuld-truc", uitleg: "Schuld €5 + schuld €4 = schuld €9 = saldo −€9." }],
          niveaus: { basis: "−9.", simpeler: "−5 − 4: vanaf −5 vier stappen links = −9.", nogSimpeler: "−9" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**2 − 7** = ?",
        options: ["−5", "+5", "+9", "−9"],
        answer: 0,
        wrongHints: [
          null,
          "7 is meer dan 2: kom je boven of onder nul uit?",
          null,
          "Ga je 7 stappen naar links vanaf 2, of vanaf −2?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Naar links",
              tekst: "Begin op 2. 7 stappen links: 2→1→0→−1→−2→−3→−4→−5.",
            },
          ],
          woorden: [
            {
              woord: "aftrekken",
              uitleg: "Min = naar links lopen op de getalslijn.",
            },
          ],
          theorie: "2 − 7: eerst 2 stappen tot 0, dan nog 5 stappen onder nul → −5.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 − 2 = 0. 0 − 5 = −5. Dus 2 − 7 = −5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Splits-truc",
              uitleg: "Splits 7 in 2 + 5. Eerst 2 naar 0, dan de rest.",
            },
          ],
          niveaus: {
            basis: "−5.",
            simpeler: "Van 2 naar 0 zijn 2 stappen. Nog 5 stappen verder: −5.",
            nogSimpeler: "−5",
          },
        },
      },
      {
        q: "**−6 + 4** = ?",
        options: ["−2", "+2", "−10", "+10"],
        answer: 0,
        wrongHints: [
          null,
          "Kom je met 4 stappen naar rechts vanaf −6 al voorbij 0?",
          "Plus = welke kant op?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Naar rechts",
              tekst: "Begin op −6. 4 stappen rechts: −6→−5→−4→−3→−2.",
            },
          ],
          woorden: [
            {
              woord: "optellen",
              uitleg: "Plus = naar rechts lopen op de getalslijn.",
            },
          ],
          theorie: "Van −6 naar 0 zijn 6 stappen. Je loopt er maar 4, dus je blijft onder nul: −2.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "−6 + 6 = 0. Met 4 stappen kom je 2 tekort: −2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Nog onder nul?",
              uitleg: "Is het getal na de plus kleiner dan de afstand tot 0, dan blijf je negatief.",
            },
          ],
          niveaus: {
            basis: "−2.",
            simpeler: "Vanaf −6 vier stappen naar rechts: −5, −4, −3, −2.",
            nogSimpeler: "−2",
          },
        },
      },
      {
        q: "**−1 − 6** = ?",
        options: ["−7", "−5", "+7", "+5"],
        answer: 0,
        wrongHints: [
          null,
          "Ga je bij min naar links of naar rechts?",
          null,
          "Kom je ooit boven nul als je naar links loopt vanaf −1?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Verder naar links",
              tekst: "Begin op −1. 6 stappen links: −1→−2→−3→−4→−5→−6→−7.",
            },
          ],
          woorden: [
            {
              woord: "aftrekken vanaf negatief",
              uitleg: "Min vanaf een negatief getal = nog verder van 0.",
            },
          ],
          theorie: "Je begint al onder nul en gaat nog verder omlaag: −1 − 6 = −7.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Schuld van 1 euro, nog 6 euro schuld erbij = schuld van 7 euro.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verder van 0",
              uitleg: "Twee keer omlaag: het getal na de min wordt groter.",
            },
          ],
          niveaus: {
            basis: "−7.",
            simpeler: "Vanaf −1 zes stappen naar links: je komt op −7.",
            nogSimpeler: "−7",
          },
        },
      },
      {
        q: "**−2 + 8** = ?",
        options: ["+6", "−6", "+10", "−10"],
        answer: 0,
        wrongHints: [null, "Na 2 stappen ben je al bij 0. Hoeveel stappen heb je dan nog over?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Naar rechts, over 0 heen",
              tekst: "Begin op −2. 8 stappen rechts: −2→−1→0→1→2→3→4→5→6.",
            },
          ],
          woorden: [
            {
              woord: "optellen",
              uitleg: "Plus = naar rechts lopen op de getalslijn.",
            },
          ],
          theorie: "−2 + 8: eerst 2 stappen tot 0, dan nog 6 → +6.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "−2 + 2 = 0. 0 + 6 = 6. Dus −2 + 8 = 6.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Splits-truc",
              uitleg: "Splits 8 in 2 + 6. Eerst 2 naar 0, dan de rest.",
            },
          ],
          niveaus: {
            basis: "+6.",
            simpeler: "Van −2 naar 0 zijn 2 stappen. Nog 6 stappen verder: +6.",
            nogSimpeler: "+6",
          },
        },
      },
      {
        q: "Je staat op **−4** op de getalslijn. Je loopt **3 stappen naar links**. Waar kom je uit?",
        options: ["−7", "−1", "+1", "+7"],
        answer: 0,
        wrongHints: [
          null,
          "Links is de kant van de kleinere getallen.",
          null,
          "Je begint onder nul en gaat naar links. Kom je dan boven nul?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel de stappen",
              tekst: "−4 → −5 → −6 → −7. Na 3 stappen sta je op −7.",
            },
          ],
          woorden: [
            {
              woord: "naar links",
              uitleg: "Op de getalslijn: richting de kleinere getallen.",
            },
          ],
          theorie: "3 stappen naar links vanaf −4 is hetzelfde als −4 − 3 = −7.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Vanaf −2 drie stappen naar links: −3, −4, −5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Links = kleiner",
              uitleg: "Hoe verder naar links, hoe kleiner het getal.",
            },
          ],
          niveaus: {
            basis: "−7.",
            simpeler: "Vanaf −4 tellen: −5, −6, −7.",
            nogSimpeler: "−7",
          },
        },
      },
      {
        q: "Je staat op **2** op de getalslijn. Hoeveel stappen naar links moet je lopen om op **−3** te komen?",
        options: ["5", "1", "3", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Tel eerst de stappen tot 0, en dan de stappen onder nul.",
          null,
          "Vergeet je de stap van 0 naar −1 niet?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tot 0 en dan verder",
              tekst: "Van 2 naar 0 = 2 stappen. Van 0 naar −3 = 3 stappen. Samen 5.",
            },
          ],
          woorden: [
            {
              woord: "stappen tellen",
              uitleg: "Elke stap op de getalslijn is 1.",
            },
          ],
          theorie: "Splits het in twee stukken: het stuk boven nul en het stuk onder nul. Tel ze op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 → 1 → 0 → −1 → −2 → −3: dat zijn 5 stappen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Over 0 heen",
              uitleg: "Tel 0 niet als stap: je stapt van 1 naar 0, en van 0 naar −1.",
            },
          ],
          niveaus: {
            basis: "5 stappen.",
            simpeler: "2 stappen naar 0, dan 3 stappen naar −3. 2 + 3 = 5.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Welke som hoort bij: **begin op 1 en loop 4 stappen naar links**?",
        options: ["1 − 4", "1 + 4", "4 − 1", "−1 + 4"],
        answer: 0,
        wrongHints: [null, "Naar links lopen hoort bij plus of bij min?", null, "Bij welk getal begin je?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Begin + richting",
              tekst: "Het eerste getal is waar je begint (1). Naar links = min. Dus 1 − 4.",
            },
          ],
          woorden: [
            {
              woord: "naar links",
              uitleg: "Op de getalslijn naar links lopen = aftrekken.",
            },
          ],
          theorie: "Optellen = naar rechts. Aftrekken = naar links. Het startgetal staat vooraan.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Begin op 5 en loop 2 stappen naar rechts = 5 + 2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Startgetal vooraan",
              uitleg: "In een som staat het getal waar je begint altijd eerst.",
            },
          ],
          niveaus: {
            basis: "1 − 4.",
            simpeler: "Je begint op 1 en gaat naar links. Naar links = min. Dus 1 − 4.",
            nogSimpeler: "1 − 4",
          },
        },
      },
    ],
  },

  {
    title: "Min een minus = plus",
    explanation: "Een **lastige** maar belangrijke regel:\n\n**Twee min-tekens op rij worden plus**.\n\n**Voorbeeld**: 5 − (−3) = ?\n\nDe '−(−3)' betekent: je trekt een negatief getal af. Dat is hetzelfde als **er drie bij optellen**.\n\nDus: 5 − (−3) = 5 + 3 = **8**.\n\n**Waarom?**\nStel je hebt geld: € 5. Een 'schuld' van € 3 betekent dat je in totaal € 5 − € 3 = € 2 hebt. Maar als die schuld **wegvalt** *(wordt afgetrokken)*, krijg je € 3 erbij. Dus 5 − (−3) = 8.\n\n**Andere voorbeelden**:\n• −2 − (−5) = −2 + 5 = **+3**.\n• 4 + (−6) = 4 − 6 = **−2** *(plus een negatief = aftrekken)*.\n• −7 + (−3) = −7 − 3 = **−10**.\n\n**Toets-truc — tekens-regel**:\nKijk naar de **2 tekens op rij**:\n• + + = **plus**\n• + − = **min**\n• − + = **min**\n• − − = **plus**\n\nVoorbeeld: 8 − − 5 = 8 + 5 = **13** *(want −− = +)*.\n\n**Toetsvraag-vorm**:\n*'In een spel kun je punten verliezen. Sven had +12 en verliest dan −5 (dus krijgt 5 erbij). Wat is zijn nieuwe score?'*\n• Niet aftrekken want 'verliest' van negatief = krijgt erbij.\n• 12 − (−5) = 12 + 5 = **17**.",
    checks: [
      {
        q: "**8 − (−3)** = ?",
        options: ["11","5","−11","−5"],
        answer: 0,
        wrongHints: [null,"Niet 8 − 3 — let goed op het minteken in de haakjes.","Andersom — twee minnen heffen elkaar op.","Niet aftrekken — twee minnen heffen elkaar op."],
        uitlegPad: {
          stappen: [{ titel: "−− = +", tekst: "8 − (−3) → twee minnen worden plus → 8 + 3 = 11." }],
          woorden: [{ woord: "min een minus", uitleg: "Twee minnen achter elkaar = plus." }],
          theorie: "Tekens-regel: −− = +, ++ = +, +− = −, −+ = −.",
          voorbeelden: [{ type: "stap", tekst: "8 − (−3) = 8 + 3 = 11." }],
          basiskennis: [{ onderwerp: "Schuld-truc", uitleg: "Saldo €8, schuld van €3 valt weg → €8 + €3 erbij = €11." }],
          niveaus: { basis: "11.", simpeler: "Twee minnen worden plus: 8 − (−3) = 8 + 3 = 11.", nogSimpeler: "11" },
        },
      },
      {
        q: "**−4 + (−6)** = ?",
        options: ["−10","+10","−2","+2"],
        answer: 0,
        wrongHints: [null,"Niet plus — kijk hoe de twee tekens samen werken.","Te dichtbij — heb je 4 − 6 gedaan in plaats van −4 − 6?","Andersom — het antwoord is negatief."],
        uitlegPad: {
          stappen: [{ titel: "+− = −", tekst: "+(−6) wordt −6. Dus −4 + (−6) = −4 − 6 = −10." }],
          woorden: [{ woord: "plus een minus", uitleg: "Plus voor minus-getal = aftrekken." }],
          theorie: "Tekens-regel: +− = −. Dus +(−6) = −6.",
          voorbeelden: [{ type: "stap", tekst: "−4 + (−6) = −4 − 6 = −10." }],
          basiskennis: [{ onderwerp: "Schuld-stapelen", uitleg: "Schuld €4 + schuld €6 = schuld €10 = saldo −€10." }],
          niveaus: { basis: "−10.", simpeler: "+(−6) wordt −6. Dus −4 − 6 = −10.", nogSimpeler: "−10" },
        },
      },
      {
        q: "**5 + (−2)** = ?",
        options: ["+3","+7","−3","−7"],
        answer: 0,
        wrongHints: [null,"Niet optellen — er staat een min in de haakjes.","Andersom — 5 > 2, dus het antwoord is positief.","Veel te ver."],
        uitlegPad: {
          stappen: [{ titel: "+− = −", tekst: "5 + (−2) → +(−) = − → 5 − 2 = 3." }],
          woorden: [{ woord: "plus een negatief", uitleg: "+(−X) = −X (gewoon aftrekken)." }],
          theorie: "Tekens-regel: +− = −.",
          voorbeelden: [{ type: "stap", tekst: "5 + (−2) = 5 − 2 = 3." }],
          basiskennis: [{ onderwerp: "Schuld erbij", uitleg: "Saldo €5 + schuld van €2 = €5 − €2 = €3 over." }],
          niveaus: { basis: "+3.", simpeler: "5 + (−2) = 5 − 2 = 3 (plus een min wordt min).", nogSimpeler: "+3" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**6 − (−2)** = ?",
        options: ["8", "4", "−8", "−4"],
        answer: 0,
        wrongHints: [null, "Kijk naar de twee min-tekens op rij.", null, "Twee min-tekens samen worden…?"],
        uitlegPad: {
          stappen: [
            {
              titel: "− − = +",
              tekst: "−(−2) wordt +2. Dus 6 − (−2) = 6 + 2 = 8.",
            },
          ],
          woorden: [
            {
              woord: "min een minus",
              uitleg: "Twee min-tekens op rij worden plus.",
            },
          ],
          theorie: "Tekens-regel: − − = +. Je trekt een negatief getal af, dus je telt erbij op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 − (−2) = 6 + 2 = 8.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schuld weg",
              uitleg: "Valt een schuld van € 2 weg, dan heb je € 2 méér.",
            },
          ],
          niveaus: {
            basis: "8.",
            simpeler: "Twee minnen worden plus: 6 + 2 = 8.",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "**2 + (−5)** = ?",
        options: ["−3", "+7", "+3", "−7"],
        answer: 0,
        wrongHints: [null, "Plus en min op rij worden samen…?", null, "Begin je op 2 of op −2?"],
        uitlegPad: {
          stappen: [
            {
              titel: "+ − = −",
              tekst: "+(−5) wordt −5. Dus 2 + (−5) = 2 − 5 = −3.",
            },
          ],
          woorden: [
            {
              woord: "plus een minus",
              uitleg: "Plus voor een negatief getal = aftrekken.",
            },
          ],
          theorie: "Tekens-regel: + − = −. Dan wordt het 2 − 5.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 − 5: van 2 naar 0 zijn 2 stappen, nog 3 verder → −3.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Aftrekken voorbij 0",
              uitleg: "Trek je meer af dan je hebt, dan kom je onder nul.",
            },
          ],
          niveaus: {
            basis: "−3.",
            simpeler: "+(−5) wordt −5. 2 − 5 = −3.",
            nogSimpeler: "−3",
          },
        },
      },
      {
        q: "**−3 − (−1)** = ?",
        options: ["−2", "−4", "+2", "+4"],
        answer: 0,
        wrongHints: [null, "Wat gebeurt er met de twee min-tekens in het midden?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "− − = +",
              tekst: "−(−1) wordt +1. Dus −3 − (−1) = −3 + 1 = −2.",
            },
          ],
          woorden: [
            {
              woord: "min een minus",
              uitleg: "Twee min-tekens op rij worden plus.",
            },
          ],
          theorie: "Tekens-regel: − − = +. Je loopt 1 stap naar rechts vanaf −3.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "−3 + 1: vanaf −3 één stap naar rechts → −2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schuld wordt kleiner",
              uitleg: "Schuld van € 3, € 1 schuld valt weg: nog € 2 schuld.",
            },
          ],
          niveaus: {
            basis: "−2.",
            simpeler: "Twee minnen worden plus: −3 + 1 = −2.",
            nogSimpeler: "−2",
          },
        },
      },
      {
        q: "**−5 + (−2)** = ?",
        options: ["−7", "−3", "+7", "+3"],
        answer: 0,
        wrongHints: [null, "Wordt + − samen plus of min?", null, "Je begint op −5. Kom je dan boven nul?"],
        uitlegPad: {
          stappen: [
            {
              titel: "+ − = −",
              tekst: "+(−2) wordt −2. Dus −5 + (−2) = −5 − 2 = −7.",
            },
          ],
          woorden: [
            {
              woord: "plus een minus",
              uitleg: "Plus voor een negatief getal = aftrekken.",
            },
          ],
          theorie: "Tekens-regel: + − = −. Vanaf −5 nog 2 stappen naar links.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "−5 − 2 = −7.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schuld-stapelen",
              uitleg: "Schuld € 5 + schuld € 2 = schuld € 7 = saldo −€ 7.",
            },
          ],
          niveaus: {
            basis: "−7.",
            simpeler: "+(−2) wordt −2. −5 − 2 = −7.",
            nogSimpeler: "−7",
          },
        },
      },
      {
        q: "**9 − (−1)** = ?",
        options: ["10", "8", "−10", "−8"],
        answer: 0,
        wrongHints: [null, "Er staan twee min-tekens op rij. Wat worden die samen?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "− − = +",
              tekst: "−(−1) wordt +1. Dus 9 − (−1) = 9 + 1 = 10.",
            },
          ],
          woorden: [
            {
              woord: "min een minus",
              uitleg: "Twee min-tekens op rij worden plus.",
            },
          ],
          theorie: "Tekens-regel: − − = +. Je telt er 1 bij op.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9 − (−1) = 9 + 1 = 10.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schuld weg",
              uitleg: "Valt een schuld van € 1 weg, dan heb je € 1 méér.",
            },
          ],
          niveaus: {
            basis: "10.",
            simpeler: "Twee minnen worden plus: 9 + 1 = 10.",
            nogSimpeler: "10",
          },
        },
      },
      {
        q: "**10 − (−6)** kun je ook schrijven als…",
        options: ["10 + 6", "10 − 6", "−10 + 6", "−10 − 6"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar de twee tekens tussen 10 en 6.",
          null,
          "Verandert het eerste getal, de 10?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "− − = +",
              tekst: "De twee min-tekens tussen 10 en 6 worden samen plus: 10 + 6.",
            },
          ],
          woorden: [
            {
              woord: "tekens-regel",
              uitleg: "Twee tekens op rij worden één teken.",
            },
          ],
          theorie: "− − = +. Het eerste getal (10) blijft hetzelfde.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "8 − (−5) = 8 + 5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alleen het middelste",
              uitleg: "De regel gaat over de twee tekens op rij in het midden, niet over het eerste getal.",
            },
          ],
          niveaus: {
            basis: "10 + 6.",
            simpeler: "Min een minus = plus. Dus 10 − (−6) = 10 + 6.",
            nogSimpeler: "10 + 6",
          },
        },
      },
    ],
  },

  {
    title: "Praktijk — temperatuur en geld",
    explanation: "Negatieve getallen zie je vooral in:\n\n**Temperatuur**:\n*'In de winter daalde de temperatuur van +3 °C overdag naar −7 °C 's nachts. Hoeveel graden was 't gedaald?'*\n\n• Verschil = +3 − (−7) = 3 + 7 = **10 graden**.\n\nOf op de thermometer: van +3 → 0 = 3 omlaag. Van 0 → −7 = 7 omlaag. Totaal **10 omlaag**.\n\n**Geld** *(schuld + saldo)*:\n*'Mark heeft € 25 op zijn rekening. Hij betaalt € 40 boodschappen. Wat is zijn saldo nu?'*\n\n• 25 − 40 = **−€ 15** *(roodstand)*.\n\n*'Hij krijgt zijn loon van € 100. Wat is zijn saldo?'*\n• −15 + 100 = **+€ 85**.\n\n**Diepte / hoogte** *(zeespiegel)*:\nNederland ligt deels onder zeespiegel.\n• Schiphol: −3 m *(3 meter onder zeespiegel)*.\n• Mont Blanc: ongeveer +4.800 m *(boven zeespiegel)*.\n\n**Toets-tip — verschil van temperaturen**:\nVerschil = grootste − kleinste *(uitkomst altijd positief)*.\n• Tussen +5 en −3: verschil = 5 − (−3) = 5 + 3 = **8**.\n• Tussen +20 en −10: verschil = 20 − (−10) = 20 + 10 = **30**.\n\n**Slimme aanpak**: tel apart het 'positieve deel' (tot 0) en het 'negatieve deel' (van 0 omlaag). Dan tel je beide samen.",
    checks: [
      {
        q: "Temperatuur is **+5 °C**, daalt **8 graden**. **Nieuwe temperatuur**?",
        options: ["−3 °C","+3 °C","−13 °C","+13 °C"],
        answer: 0,
        wrongHints: [null,"Andersom — daalt naar onder nul, niet erboven.","Te ver — dalen met 8 graden vanaf 5 gaat minder ver dan je denkt.","Andersom — de temperatuur daalt, gaat omlaag, niet omhoog."],
        uitlegPad: {
          stappen: [{ titel: "5 − 8 = −3", tekst: "Dalen = aftrekken. 5 − 8 = −3 (3 onder nul)." }],
          woorden: [{ woord: "dalen", uitleg: "Temperatuur omlaag = aftrekken." }],
          theorie: "Stijgen = +. Dalen = −. Daal je meer dan 5 → onder nul.",
          voorbeelden: [{ type: "stap", tekst: "5 − 5 = 0. Nog 3 verder omlaag = −3." }],
          basiskennis: [{ onderwerp: "Thermometer", uitleg: "Kwik daalt 8 streepjes vanaf +5 → komt op −3." }],
          niveaus: { basis: "−3 °C.", simpeler: "Dalen 8 graden van +5: 5 − 8 = −3 (3 graden onder nul).", nogSimpeler: "−3" },
        },
      },
      {
        q: "Verschil tussen **+12 °C en −5 °C**?",
        options: ["17","7","−17","−7"],
        answer: 0,
        wrongHints: [null,"Te weinig — min een negatief getal wordt optellen. Tel het positieve deel én het negatieve deel apart.","Andersom — verschil is altijd positief.","Andersom."],
        uitlegPad: {
          stappen: [{ titel: "Tel beide stukken", tekst: "+12 → 0 = 12 graden. 0 → −5 = 5 graden. Totaal 12+5 = 17." }],
          woorden: [{ woord: "verschil", uitleg: "Hoeveel graden tussen twee waarden. Altijd positief." }],
          theorie: "Verschil bij negatief: tel positieve deel + negatieve deel. Of: groter − kleiner.",
          voorbeelden: [{ type: "stap", tekst: "+12 − (−5) = 12 + 5 = 17 graden." }],
          basiskennis: [{ onderwerp: "Altijd positief", uitleg: "Verschil = afstand op getalslijn = altijd ≥0." }],
          niveaus: { basis: "17.", simpeler: "Van +12 naar 0 = 12 stappen. Van 0 naar −5 = 5 stappen. Totaal 17.", nogSimpeler: "17" },
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
          niveaus: { basis: "+€50.", simpeler: "Schuld €30 + zakgeld €80 = €30 schuld weg + €50 over = +€50.", nogSimpeler: "+€50" },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Overdag is het **+4 °C**. 's Nachts is het **−5 °C**. Hoeveel graden is de temperatuur **gedaald**?",
        options: ["9 graden", "1 graad", "−1 graad", "−9 graden"],
        answer: 0,
        wrongHints: [
          null,
          "Tel het stuk boven nul en het stuk onder nul allebei mee.",
          null,
          "Kan het aantal graden dat het daalt negatief zijn?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel beide stukken",
              tekst: "+4 → 0 = 4 graden. 0 → −5 = 5 graden. Samen 4 + 5 = 9.",
            },
          ],
          woorden: [
            {
              woord: "dalen",
              uitleg: "De temperatuur gaat omlaag.",
            },
          ],
          theorie: "Verschil = grootste − kleinste: 4 − (−5) = 4 + 5 = 9.",
          voorbeelden: [
            {
              type: "thermometer",
              tekst: "4 − (−5) = 4 + 5 = 9 graden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Altijd positief",
              uitleg: "Hoeveel graden het daalt is een afstand: altijd een positief getal.",
            },
          ],
          niveaus: {
            basis: "9 graden.",
            simpeler: "Eerst 4 graden omlaag naar 0, dan nog 5 graden omlaag naar −5. Samen 9.",
            nogSimpeler: "9 graden",
          },
        },
      },
      {
        q: "Sanne heeft **€ 10** op haar rekening. Ze betaalt **€ 18**. Wat is haar saldo nu?",
        options: ["−€ 8", "+€ 8", "−€ 28", "+€ 28"],
        answer: 0,
        wrongHints: [
          null,
          "Ze betaalt meer dan ze heeft. Staat ze dan rood of niet?",
          null,
          "Gaat er geld bij of af?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Onder nul",
              tekst: "10 − 18: eerst 10 eraf tot 0, nog 8 eraf → −€ 8.",
            },
          ],
          woorden: [
            {
              woord: "saldo",
              uitleg: "Hoeveel geld er op je rekening staat.",
            },
          ],
          theorie: "Betaal je meer dan je hebt, dan wordt je saldo negatief (rood staan).",
          voorbeelden: [
            {
              type: "geld",
              tekst: "10 − 10 = 0. 0 − 8 = −8.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Rood staan",
              uitleg: "Een saldo onder nul = je moet de bank geld terugbetalen.",
            },
          ],
          niveaus: {
            basis: "−€ 8.",
            simpeler: "€ 10 is op na € 10 betalen. Er moet nog € 8 betaald worden: −€ 8.",
            nogSimpeler: "−€ 8",
          },
        },
      },
      {
        q: "Op de rekening van Joris staat **−€ 12**. Hij krijgt **€ 25**. Wat is zijn saldo nu?",
        options: ["+€ 13", "−€ 13", "+€ 37", "−€ 37"],
        answer: 0,
        wrongHints: [null, "Met de eerste € 12 is zijn schuld weg. Hoeveel blijft er dan over?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst de schuld weg",
              tekst: "−12 + 25: eerst 12 tot 0, dan nog 13 → +€ 13.",
            },
          ],
          woorden: [
            {
              woord: "saldo",
              uitleg: "Hoeveel geld er op je rekening staat.",
            },
          ],
          theorie: "Geld erbij = naar rechts op de getalslijn. Eerst tot 0, dan verder.",
          voorbeelden: [
            {
              type: "geld",
              tekst: "−12 + 12 = 0. 0 + 13 = 13.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Splits-truc",
              uitleg: "Splits 25 in 12 + 13. Met 12 is de schuld weg.",
            },
          ],
          niveaus: {
            basis: "+€ 13.",
            simpeler: "€ 12 gaat naar de schuld. Er blijft € 13 over: +€ 13.",
            nogSimpeler: "+€ 13",
          },
        },
      },
      {
        q: "Een meeuw vliegt **7 m boven** de zeespiegel. Een vis zwemt **5 m onder** de zeespiegel. Hoeveel meter zit er **tussen** de meeuw en de vis?",
        options: ["12 m", "2 m", "−2 m", "−12 m"],
        answer: 0,
        wrongHints: [
          null,
          "De zeespiegel is 0. Tel het stuk erboven en het stuk eronder.",
          null,
          "Kan een afstand negatief zijn?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Boven + onder",
              tekst: "Meeuw: +7 m. Vis: −5 m. Van +7 naar 0 = 7 m, van 0 naar −5 = 5 m. Samen 12 m.",
            },
          ],
          woorden: [
            {
              woord: "zeespiegel",
              uitleg: "De hoogte van het zeewater: dat is 0.",
            },
          ],
          theorie: "Verschil = grootste − kleinste: 7 − (−5) = 7 + 5 = 12.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7 − (−5) = 7 + 5 = 12 m.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Boven en onder",
              uitleg: "Boven de zeespiegel = plus, onder de zeespiegel = min.",
            },
          ],
          niveaus: {
            basis: "12 m.",
            simpeler: "7 m tot het water, en nog 5 m onder water. 7 + 5 = 12 m.",
            nogSimpeler: "12 m",
          },
        },
      },
      {
        q: "'s Ochtends is het **−6 °C**. 's Middags is het **5 graden warmer**. Hoe warm is het dan?",
        options: ["−1 °C", "+1 °C", "−11 °C", "+11 °C"],
        answer: 0,
        wrongHints: [
          null,
          "Kom je met 5 graden omhoog vanaf −6 al boven nul?",
          null,
          "Warmer = omhoog of omlaag op de thermometer?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Omhoog vanaf −6",
              tekst: "−6 + 5: −6→−5→−4→−3→−2→−1.",
            },
          ],
          woorden: [
            {
              woord: "warmer",
              uitleg: "Hoger op de thermometer = optellen.",
            },
          ],
          theorie: "Van −6 naar 0 zijn 6 graden. 5 graden omhoog is net te weinig: −1.",
          voorbeelden: [
            {
              type: "thermometer",
              tekst: "−6 + 6 = 0. Met 5 kom je 1 tekort: −1.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Nog onder nul?",
              uitleg: "Stijgt het minder dan de afstand tot 0, dan blijft het vriezen.",
            },
          ],
          niveaus: {
            basis: "−1 °C.",
            simpeler: "Vanaf −6 vijf graden omhoog: −5, −4, −3, −2, −1.",
            nogSimpeler: "−1 °C",
          },
        },
      },
      {
        q: "Het is **−2 °C**. Het wordt **6 graden kouder**. Hoe koud is het dan?",
        options: ["−8 °C", "+4 °C", "−4 °C", "+8 °C"],
        answer: 0,
        wrongHints: [null, "Kouder = omhoog of omlaag op de thermometer?", null, null],
        uitlegPad: {
          stappen: [
            {
              titel: "Omlaag vanaf −2",
              tekst: "−2 − 6: nog 6 graden verder onder nul → −8.",
            },
          ],
          woorden: [
            {
              woord: "kouder",
              uitleg: "Lager op de thermometer = aftrekken.",
            },
          ],
          theorie: "Je begint al onder nul. Kouder = nog verder omlaag: −2 − 6 = −8.",
          voorbeelden: [
            {
              type: "thermometer",
              tekst: "−2 − 6 = −8.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Verder van 0",
              uitleg: "Twee keer onder nul: de graden onder nul tel je op (2 + 6 = 8).",
            },
          ],
          niveaus: {
            basis: "−8 °C.",
            simpeler: "Al 2 graden onder nul, nog 6 erbij onder nul: 8 graden onder nul.",
            nogSimpeler: "−8 °C",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — negatieve getallen mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl met negatieve getallen — temperatuur, saldo, sommen.\n\nVeel succes!",
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
          niveaus: { basis: "−3.", simpeler: "−8 + 5: 5 stappen rechts vanaf −8 → −3 (nog onder nul).", nogSimpeler: "−3" },
        },
      },
      {
        q: "Temperatuur **−4 °C**, stijgt **9 graden**. Nieuwe temperatuur?",
        options: ["+5 °C","+13 °C","−5 °C","−13 °C"],
        answer: 0,
        wrongHints: [null,"Te veel — hoeveel stappen gaan er omhoog vóór je nul passeert, en hoeveel erna?","Andersom — stijgen betekent optellen, de temperatuur gaat omhóóg.","Veel te laag — stijgen gaat richting hogere getallen."],
        uitlegPad: {
          stappen: [{ titel: "Stijgen vanaf −4", tekst: "−4 + 9: 4 omhoog naar 0, dan nog 5 = +5." }],
          woorden: [{ woord: "stijgen", uitleg: "Temperatuur omhoog = optellen." }],
          theorie: "Eerst tot 0 (4 stappen), dan rest (5 stappen) erna.",
          voorbeelden: [{ type: "stap", tekst: "−4 → 0 (4 stappen). 0 → +5 (5 stappen). Totaal 9 stappen = +5." }],
          basiskennis: [{ onderwerp: "Splits in stukken", uitleg: "Negatief naar positief: splits 9 in 4+5." }],
          niveaus: { basis: "+5 °C.", simpeler: "−4 + 9: vanaf −4 negen omhoog. 4 om bij 0 te komen, dan nog 5 → +5°C.", nogSimpeler: "+5" },
        },
      },
      {
        q: "Welk getal is het **grootst**: −8, −2, 0, −15?",
        options: ["0","−2","−8","−15"],
        answer: 0,
        wrongHints: [null,"Er ligt nog een getal rechts van −2 op de getalslijn.","Er liggen nog getallen rechts van −8.","Kleinste."],
        uitlegPad: {
          stappen: [{ titel: "Verste rechts", tekst: "Op getalslijn: rechts = groter. 0 ligt rechts van alle negatieven." }],
          woorden: [{ woord: "grootst", uitleg: "Verste rechts op getalslijn." }],
          theorie: "0 > elke negatieve. Bij negatieven: dichter bij 0 = groter.",
          voorbeelden: [{ type: "lijn", tekst: "−15 < −8 < −2 < 0. Volgorde links naar rechts." }],
          basiskennis: [{ onderwerp: "Niet alleen negatief", uitleg: "0 > alle drie negatieven, dus 0 is de grootste." }],
          niveaus: { basis: "0.", simpeler: "0 is groter dan elke negatieve. Op lijn ligt 0 het meest rechts.", nogSimpeler: "0" },
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
          niveaus: { basis: "+10.", simpeler: "Twee minnen worden plus: 3 − (−7) = 3 + 7 = 10.", nogSimpeler: "+10" },
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
          niveaus: { basis: "−€7.", simpeler: "Marc heeft €15, geeft €22 uit (€7 te veel) → saldo −€7 (rood).", nogSimpeler: "−€7" },
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
            { titel: "Toets-instinker", tekst: "Verschil is ALTIJD positief. Hoeveel graden ertussen, ongeacht richting. Veelgemaakte fout: −7 of −17 invullen omdat de laagste temperatuur negatief is. Verschil = afstand, en afstand is altijd ≥ 0." },
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
          basiskennis: [{ onderwerp: "Weer-vraag", uitleg: "De toets vraagt vaak naar temperatuur: −5°C 's nachts vs +12°C overdag → verschil 17 graden." }],
          niveaus: { basis: "17 °C.", simpeler: "Van −5 naar 0 = 5. Van 0 naar +12 = 12. Samen: 17 graden verschil.", nogSimpeler: "17" },
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
            { titel: "Toets-context: hoogte vs diepte", tekst: "• Boven zeespiegel: positief (+150 m berg)\n• Onder zeespiegel: negatief (−12 m duiker)\n• Zeespiegel zelf: 0 m\nStijgen = + (omhoog). Dalen = − (omlaag)." },
          ],
          woorden: [
            { woord: "zeespiegel", uitleg: "Niveau van de zee = 0 m. Boven = +, onder = −." },
            { woord: "stijgen / dalen", uitleg: "Stijgen = optellen (richting 0/+). Dalen = aftrekken (richting −)." },
          ],
          theorie: "Diepte / hoogte met negatieve getallen:\n• Vliegtuig +10.000 m\n• Berg +800 m\n• Zeespiegel 0\n• Duiker −12 m\n• Onderzeeër −80 m\nBij beweging: pas op of getal positief of negatief is — context bepaalt.",
          voorbeelden: [
            { type: "stap", tekst: "Berg +500 m, daalt 200 m → +300 m." },
            { type: "stap", tekst: "Onderzeeër −80 m, stijgt 30 m → −50 m." },
          ],
          basiskennis: [{ onderwerp: "Onder zeespiegel NL", uitleg: "Nederland heeft delen onder zeespiegel (−6 m bv. in Zuidplaspolder). Vandaar dijken." }],
          niveaus: { basis: "−12 + 8 = −4.", simpeler: "Duiker op −12 m. 8 omhoog = −12 + 8 = −4 m. Nog 4 m onder water.", nogSimpeler: "−4 m" },
        },
      },
      {
        q: "Welke rij is **op volgorde van klein naar groot**?",
        options: ["−9, −3, 0, +4","0, −3, +4, −9","−3, −9, 0, +4","+4, 0, −3, −9"],
        answer: 0,
        wrongHints: [null, "Niet op volgorde — 0 hoort tussen negatieven en positieven.", "Niet — −9 < −3, dus −9 hoort eerst.", "Andersom — dat is groot naar klein."],
        uitlegPad: {
          stappen: [
            { titel: "Negatieven: groter cijfer = kleiner getal", tekst: "Bij negatieve getallen is het andersom dan bij positieven. **−9 < −3** (omdat −9 verder van 0 ligt, dus kleiner)." },
            { titel: "Volgorde op getalslijn", tekst: "Links naar rechts: kleinste naar grootste.\n←  −9    −3    0    +4  →\nDus de juiste volgorde: **−9, −3, 0, +4**." },
            { titel: "Toets-instinker", tekst: "Veelgemaakte fout: −9 plaatsen NA −3 omdat '9 > 3'. Bij negatieven werkt het andersom — '−9 ligt verder onder nul dan −3'." },
          ],
          woorden: [
            { woord: "klein naar groot", uitleg: "Van links naar rechts op getalslijn." },
            { woord: "negatief vergelijken", uitleg: "Hoe groter het cijfer achter de min, hoe kleiner het getal." },
          ],
          theorie: "Negatieve-getallen-vergelijk-regel:\n• Verder weg van 0 (groter cijfer) = kleiner getal\n• −100 < −10 < −1 < 0 < +1 < +10\n• Truc: zonder min is 9 groter dan 3, maar mét min is −9 juist kleiner dan −3.",
          voorbeelden: [
            { type: "stap", tekst: "Sorteer −5, +2, −1, 0: −5 < −1 < 0 < +2." },
            { type: "stap", tekst: "Wat is groter: −7 of −20? −7 (ligt dichter bij 0)." },
          ],
          basiskennis: [{ onderwerp: "Temperatuur-vergelijking", uitleg: "Het is kouder bij −15°C dan bij −5°C. −15 < −5." }],
          niveaus: { basis: "−9, −3, 0, +4.", simpeler: "Negatieven: −9 verder van 0 = kleiner. Dus volgorde links→rechts: −9, −3, 0, +4.", nogSimpeler: "−9, −3, 0, +4" },
        },
      },
      {
        q: "**(−5) × 3** = ?",
        options: ["−15","+15","−8","+8"],
        answer: 0,
        wrongHints: [null, "Niet — bij min×plus blijft het minteken.", "Niet aftrekken — vermenigvuldigen.", "Andersom."],
        uitlegPad: {
          stappen: [
            { titel: "Min × plus = min", tekst: "Regel: bij vermenigvuldigen tellen we de minnen.\n• min × plus → **min**\n• plus × min → **min**\n• min × min → **plus**\n• plus × plus → **plus**\nHier: (−5) × 3 → één min → **negatief antwoord**." },
            { titel: "Reken het getal", tekst: "5 × 3 = 15. Met minteken (één minus): **−15**." },
            { titel: "Toets-truc: tel de minnen", tekst: "Vermenigvuldig de getallen normaal. Tel daarna hoeveel minnen er totaal staan. **Oneven** aantal minnen → eindantwoord min. **Even** aantal minnen → plus.\n• (−2) × (−3) = 6 (twee min = even = plus)\n• (−2) × 3 = −6 (een min = oneven = min)" },
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
          basiskennis: [{ onderwerp: "Examen-stof", uitleg: "Dit is eigenlijk brugklas-stof. Handig om alvast te kennen." }],
          niveaus: { basis: "−15.", simpeler: "Min × plus = min. 5 × 3 = 15. Met minteken: −15.", nogSimpeler: "−15" },
        },
      },
      { q: "Het is −3°C. De temperatuur stijgt 8°. Hoe warm is het nu?", options: ["5°C","11°C","−11°C","−5°C"], answer: 0, wrongHints: [null, "Niet — niet bij elkaar optellen zonder min.", "Niet — getal is gestegen.", "Niet — je telt erbij op, daalt niet."] },
      { q: "Op een rekening staat −€20. Er komt €35 bij. Saldo nu?", options: ["+€15","+€55","−€55","−€15"], answer: 0, wrongHints: [null, "Niet — de schuld van €20 gaat er eerst af.", "Niet — je VOEGT TOE.", "Niet — €35 is meer dan de schuld, dus je komt boven nul."] },
      { q: "−6 − 4 = ?", options: ["−10","−2","2","10"], answer: 0, wrongHints: [null, "Niet — schuld wordt groter, niet kleiner.", "Niet — antwoord is negatief.", "Niet — beide min, getal wordt min."] },
      { q: "Welke is het kleinst?", options: ["−8","−3","0","5"], answer: 0, wrongHints: [null, "Niet — dichter bij nul = groter.", "Niet — er zijn nog kleinere.", "Niet — dat is de grootste."] },
      { q: "**5 − 8** = ?", options: ["−3","3","−13","13"], answer: 0, wrongHints: [null, "Verkeerd teken.", "Te ver.", "Niet."] },
      { q: "Welke is **grootst**?", options: ["3","0","−1","−5"], answer: 0, wrongHints: [null, "Niet.", "Negatief is kleiner.", "Veel kleiner."] },
      { q: "Van −10 naar −3, hoeveel **opgewarmd**?", options: ["7°","−7°","13°","3°"], answer: 0, wrongHints: [null, "Niet — opwarming positief.", "Te veel.", "Niet."] },
      { q: "0 − 4 = ?", options: ["−4","4","0","−40"], answer: 0, wrongHints: [null, "Niet — onder nul.", "Niet — eraf.", "Te ver."] },
      { q: "Wat is **tegengestelde** van −7?", options: ["7","−7","0","14"], answer: 0, wrongHints: [null, "Niet — zichzelf.", "Niet.", "Niet."] },
      { q: "Hoogte mens: 1,5 m boven zee. Duiker −3 m. Verschil?", options: ["4,5 m","1,5 m","−4,5 m","−1,5 m"], answer: 0, wrongHints: [null, "Maar 1 zijde.", "Verkeerd teken voor verschil.", "Niet."] },
      { q: "Welke getallenrij is **kleinst → grootst**?", options: ["−5, −2, 0, 3","3, 0, −2, −5","0, −2, −5, 3","−2, −5, 0, 3"], answer: 0, wrongHints: [null, "Andersom.", "Niet gesorteerd.", "Niet."] },
      { q: "Een hoogte onder zeeniveau is…", options: ["Negatief","Positief","Nul","Niet relevant"], answer: 0, wrongHints: [null, "Boven.", "Op niveau.", "Wel."] },
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
  title: "Negatieve getallen — Doorstroomtoets groep 5-8",
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

// Leerpad: Kommagetallen — groep 6-8 PO.
// Toets-onderdeel decimalen + geld + meten. Referentieniveau 1F.
// 6 stappen met uitlegPad. Eenheden expliciet (€, m, kg) per Mark's regel.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  accent: "#ff8a65",
  digit: "#80cbc4",
  komma: "#ff5252",
};

const stepEmojis = ["🔢", "➕", "✖️", "➗", "🛒", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is een kommagetal?", emoji: "🔢", from: 0, to: 0 },
  { letter: "B", title: "Optellen & aftrekken", emoji: "➕", from: 1, to: 1 },
  { letter: "C", title: "Vermenigvuldigen", emoji: "✖️", from: 2, to: 2 },
  { letter: "D", title: "Delen", emoji: "➗", from: 3, to: 3 },
  { letter: "E", title: "Praktijk — geld + meten", emoji: "🛒", from: 4, to: 4 },
  { letter: "F", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function plaatswaardenSvg() {
  const w = 320, h = 170;
  const cellW = 36;
  const cells = [
    { d: "1", l: "honderden", x: 30 },
    { d: "2", l: "tientallen", x: 30 + cellW },
    { d: "3", l: "eenheden", x: 30 + cellW * 2 },
    { d: ",", l: "komma", x: 30 + cellW * 3 - 18, special: true },
    { d: "4", l: "tienden", x: 30 + cellW * 3 + 18 },
    { d: "5", l: "honderdsten", x: 30 + cellW * 4 + 18 },
  ];
  let svg = `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Plaats van elk cijfer: 123,45</text>`;
  cells.forEach((c, i) => {
    const fill = c.special ? "transparent" : COLORS.paper;
    const txtFill = c.special ? COLORS.komma : COLORS.digit;
    const labelFill = c.special ? COLORS.komma : COLORS.muted;
    if (!c.special) {
      svg += `<rect x="${c.x}" y="50" width="${cellW - 4}" height="36" fill="${fill}" stroke="${COLORS.curve}" stroke-width="1.2"/>`;
    }
    svg += `<text x="${c.x + cellW / 2 - 2}" y="76" text-anchor="middle" fill="${txtFill}" font-size="20" font-family="Arial" font-weight="bold">${c.d}</text>`;
    // Labels om-en-om op twee hoogtes, anders overlappen ze elkaar (cellen zijn smaller dan de woorden)
    const labelY = i % 2 === 0 ? 104 : 122;
    svg += `<text x="${c.x + cellW / 2 - 2}" y="${labelY}" text-anchor="middle" fill="${labelFill}" font-size="10" font-family="Arial">${c.l}</text>`;
  });
  svg += `<text x="${w / 2}" y="148" text-anchor="middle" fill="${COLORS.highlight}" font-size="11" font-family="Arial" font-style="italic">vóór de komma = hele getallen · ná de komma = stukjes van 1</text>`;
  svg += `</svg>`;
  return svg;
}

function optellenSvg() {
  const w = 320, h = 170;
  return `<svg viewBox="0 0 ${w} ${h}">
<rect x="0" y="0" width="${w}" height="${h}" fill="${COLORS.paper}"/>
<text x="${w / 2}" y="20" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">Komma's onder elkaar zetten!</text>
<text x="120" y="60" text-anchor="end" fill="${COLORS.digit}" font-size="20" font-family="Courier New, monospace" font-weight="bold">3,50</text>
<text x="120" y="88" text-anchor="end" fill="${COLORS.digit}" font-size="20" font-family="Courier New, monospace" font-weight="bold">+ 2,70</text>
<line x1="60" y1="98" x2="125" y2="98" stroke="${COLORS.curve}" stroke-width="1.5"/>
<text x="120" y="124" text-anchor="end" fill="${COLORS.highlight}" font-size="20" font-family="Courier New, monospace" font-weight="bold">6,20</text>
<rect x="105" y="42" width="3" height="92" fill="${COLORS.komma}" opacity="0.4"/>
<text x="180" y="80" fill="${COLORS.text}" font-size="12" font-family="Arial">↑</text>
<text x="190" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">komma's</text>
<text x="190" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">staan recht</text>
<text x="190" y="104" fill="${COLORS.text}" font-size="11" font-family="Arial">onder elkaar</text>
<text x="${w / 2}" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">Antwoord komma op zelfde plek!</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is een kommagetal?
  {
    title: "Wat is een kommagetal?",
    explanation:
      "Een **kommagetal** *(ook wel decimaal genoemd)* is een getal met een **komma** erin. De komma scheidt het **hele** deel van de **stukjes**.\n\n**Voorbeeld**: **3,5** *(spreek uit: drie-komma-vijf)*.\n• **3** is het hele deel.\n• **5** ná de komma = vijf-tienden = 5/10 = een half.\n• Dus 3,5 = drie-en-een-half.\n\n**Wat staat op welke plek?**\nVoor het getal **123,45**:\n• **1** = honderden *(100)*.\n• **2** = tientallen *(20)*.\n• **3** = eenheden *(3)*.\n• Komma.\n• **4** = tienden *(4 stukjes van 1/10)* = 0,4.\n• **5** = honderdsten *(5 stukjes van 1/100)* = 0,05.\n\nAlles bij elkaar: 100 + 20 + 3 + 0,4 + 0,05 = **123,45**.\n\n**Toets-truc — een kommagetal lezen**:\nLees het vóór de komma als gewoon getal. Lees de komma als 'komma'. Lees ná de komma de cijfers één voor één.\n• 12,5 = 'twaalf-komma-vijf'.\n• 7,03 = 'zeven-komma-nul-drie'.\n• 0,8 = 'nul-komma-acht'.\n\n**Kommagetallen ↔ breuken**:\n• 0,5 = ½ *(de helft)*.\n• 0,25 = ¼ *(een kwart)*.\n• 0,75 = ¾ *(drie kwart)*.\n• 0,1 = 1/10 *(een tiende)*.\n\n**Wanneer kom je kommagetallen tegen?**\n• Geld: € 4,25.\n• Lengte: 1,80 m.\n• Gewicht: 0,5 kg = een halve kilo.\n• Temperatuur: 36,7 °C.\n• Tijd: 3,5 uur = 3 uur en een half.",
    svg: plaatswaardenSvg(),
    checks: [
      {
        q: "**3,5** is hetzelfde als ... ?",
        options: ["3 + ½", "35", "3 × 5", "0,35"],
        answer: 0,
        wrongHints: [null, "Te veel — geen komma meer.", "Komma is geen vermenigvuldiging.", "Te weinig — komma verkeerd geplaatst."],
      },
      {
        q: "Wat betekent de **2** in 4,**2**?",
        options: ["2 tienden", "2 honderden", "2 eenheden", "2 tientallen"],
        answer: 0,
        wrongHints: [null, "Cijfers ná komma zijn juist 'stukjes' — niet honderden.", "Eenheden staan vóór de komma — de 2 staat erachter.", "Te groot — ná de komma worden cijfers kleiner."],
        uitlegPad: {
          stappen: [
            { titel: "Eerste plek ná komma = tienden", tekst: "In 4,2 staat de 2 op de eerste plek ná de komma. Dat is de tienden-plek. Dus 2/10 = 0,2." },
          ],
          woorden: [{ woord: "tiende", uitleg: "Een tiende deel van 1. 10 tienden samen = 1." }],
          theorie: "Plaatswaarden gaan voor komma: eenheden/tientallen/honderden. Ná de komma: tienden/honderdsten.",
          voorbeelden: [{ type: "stap", tekst: "4,2 = 4 hele + 2 tienden = 4 en 2/10." }],
          basiskennis: [{ onderwerp: "Kleiner ná komma", uitleg: "Hoe verder rechts ná de komma, hoe kleiner het stukje." }],
          niveaus: {
            basis: "2 tienden = 0,2.",
            simpeler: "Achter de komma staat 2 op de eerste plek. Dat is tienden. 2 tienden = 2/10 = 0,2.",
            nogSimpeler: "Tienden",
          },
        },
      },
      {
        q: "Welk kommagetal is **gelijk aan ¼**?",
        options: ["0,25", "0,4", "0,5", "0,75"],
        answer: 0,
        wrongHints: [null, "0,4 zijn 4 tienden — is dat hetzelfde als ¼? Hoeveel tienden heeft een kwart?", "0,5 is de helft (½), niet een kwart.", "0,75 is ¾, niet ¼."],
      },
      {
        q: "Welk getal is **groter**: 0,9 of 0,12?",
        options: ["0,9", "0,12", "Even groot", "Kan je niet zeggen"],
        answer: 0,
        wrongHints: [null, "Meer cijfers betekent niet automatisch groter — vergelijk de tienden-positie na de komma.", "Niet hetzelfde — vergelijk per plek.", "Wél te zeggen: zet beide getallen op gelijk aantal decimalen en vergelijk."],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk per plek", tekst: "Schrijf gelijk aantal cijfers: 0,90 vs 0,12. Eerste plek: 9 > 1. Dus 0,9 > 0,12." },
          ],
          woorden: [{ woord: "tienden", uitleg: "Eerste cijfer ná de komma." }],
          theorie: "Vergelijk kommagetallen door eerst gelijk aantal cijfers ná komma te zetten.",
          voorbeelden: [{ type: "stap", tekst: "0,9 = 0,90. 0,90 vs 0,12 → 90 > 12. Dus 0,9 groter." }],
          basiskennis: [{ onderwerp: "Niet aantal cijfers tellen", uitleg: "Meer cijfers betekent niet automatisch groter — kijk per plek." }],
          niveaus: {
            basis: "0,9 = 0,90 > 0,12.",
            simpeler: "Schrijf gelijk: 0,90 en 0,12. 90 honderdsten vs 12 honderdsten. 90 > 12. Dus 0,9 groter.",
            nogSimpeler: "0,9",
          },
        },
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Welk cijfer staat op de **honderdsten**-plek in 36,18?",
        options: ["8", "1", "6", "3"],
        answer: 0,
        wrongHints: [
          null,
          "Dat cijfer staat direct ná de komma. Is dat de eerste of de tweede plek?",
          null,
          "Kijk naar de cijfers ná de komma, niet ervoor.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Zoek de komma",
              tekst: "In 36,18 staan ná de komma de cijfers 1 en 8.",
            },
            {
              titel: "Tel de plekken",
              tekst: "Eerste plek ná de komma = tienden (1). Tweede plek = honderdsten (8).",
            },
          ],
          woorden: [
            {
              woord: "honderdsten",
              uitleg: "De tweede plek ná de komma. 100 honderdsten samen = 1.",
            },
          ],
          theorie: "Ná de komma: eerst de tienden, dan de honderdsten. Hoe verder naar rechts, hoe kleiner.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "36,18 = 30 + 6 + 0,1 + 0,08. De 8 is 8 honderdsten.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Plekken ná de komma",
              uitleg: "1e plek = tienden, 2e plek = honderdsten.",
            },
          ],
          niveaus: {
            basis: "De 8 staat op de honderdsten-plek.",
            simpeler: "Ná de komma staan 1 en 8. De 1 is de eerste plek (tienden). De 8 is de tweede plek (honderdsten).",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "Hoe spreek je **6,04** uit?",
        options: ["zes-komma-nul-vier", "zes-komma-vier", "zes-komma-veertig", "zestig-komma-vier"],
        answer: 0,
        wrongHints: [
          null,
          "Vergeet je niet een cijfer ná de komma?",
          null,
          "Kijk nog eens naar het cijfer vóór de komma.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vóór de komma",
              tekst: "Vóór de komma staat 6: 'zes'.",
            },
            {
              titel: "De komma",
              tekst: "Zeg 'komma'.",
            },
            {
              titel: "Ná de komma",
              tekst: "Lees de cijfers één voor één: 0 en 4 → 'nul-vier'.",
            },
          ],
          woorden: [
            {
              woord: "kommagetal",
              uitleg: "Een getal met een komma erin, zoals 6,04.",
            },
          ],
          theorie: "Lees vóór de komma als gewoon getal, zeg 'komma', en lees ná de komma elk cijfer apart.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9,07 lees je als 'negen-komma-nul-zeven'.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "De nul telt mee",
              uitleg: "De 0 ná de komma moet je ook uitspreken. 6,04 is iets anders dan 6,4.",
            },
          ],
          niveaus: {
            basis: "6,04 = zes-komma-nul-vier.",
            simpeler: "Eerst 'zes', dan 'komma', dan de cijfers ná de komma één voor één: 'nul-vier'.",
            nogSimpeler: "zes-komma-nul-vier",
          },
        },
      },
      {
        q: "**4,1** is hetzelfde als ... ?",
        options: ["4 en een tiende", "4 en een honderdste", "4 en een kwart", "4 en een half"],
        answer: 0,
        wrongHints: [
          null,
          "Op welke plek ná de komma staat de 1: de eerste of de tweede?",
          null,
          "Een half is 0,5. Is 0,1 even groot?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Splits het getal",
              tekst: "4,1 = 4 hele + 0,1.",
            },
            {
              titel: "Wat is 0,1?",
              tekst: "De 1 staat op de eerste plek ná de komma: dat is 1 tiende.",
            },
          ],
          woorden: [
            {
              woord: "tiende",
              uitleg: "Eén van de 10 gelijke stukjes van 1. 0,1 = 1/10.",
            },
          ],
          theorie: "De eerste plek ná de komma zijn de tienden.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2,3 = 2 en drie tienden.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tienden",
              uitleg: "0,1 = een tiende, 0,5 = vijf tienden = een half.",
            },
          ],
          niveaus: {
            basis: "4,1 = 4 en een tiende.",
            simpeler: "Vóór de komma: 4 hele. Ná de komma op de eerste plek een 1: dat is 1 tiende. Samen: 4 en een tiende.",
            nogSimpeler: "4 en een tiende",
          },
        },
      },
      {
        q: "Welk getal is het **grootst**?",
        options: ["3,6", "3,58", "3,55", "3,09"],
        answer: 0,
        wrongHints: [
          null,
          "Meer cijfers betekent niet automatisch groter. Vergelijk eerst de tienden.",
          null,
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vóór de komma",
              tekst: "Alle getallen hebben 3 hele. Dat is gelijk.",
            },
            {
              titel: "Vergelijk de tienden",
              tekst: "3,6 heeft 6 tienden, 3,58 en 3,55 hebben 5 tienden, 3,09 heeft 0 tienden. 6 is het meest.",
            },
          ],
          woorden: [
            {
              woord: "tienden",
              uitleg: "De eerste plek ná de komma.",
            },
          ],
          theorie: "Vergelijk kommagetallen plek voor plek, van links naar rechts.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3,6 = 3,60. Nu zie je: 3,60 is meer dan 3,58.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Nullen aanvullen",
              uitleg: "Maak alle getallen even lang: 3,60 · 3,58 · 3,55 · 3,09.",
            },
          ],
          niveaus: {
            basis: "3,6 is het grootst.",
            simpeler: "Schrijf 3,6 als 3,60. Vergelijk dan: 3,60 is meer dan 3,58, 3,55 en 3,09.",
            nogSimpeler: "3,6",
          },
        },
      },
      {
        q: "Welke som hoort bij **52,36**?",
        options: ["50 + 2 + 0,3 + 0,06", "50 + 2 + 3 + 6", "50 + 2 + 0,3 + 0,6", "5 + 2 + 0,3 + 0,06"],
        answer: 0,
        wrongHints: [
          null,
          "De cijfers ná de komma zijn stukjes, geen hele getallen.",
          null,
          "Wat is de waarde van de 5 vóór de komma: eenheden of tientallen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vóór de komma",
              tekst: "5 = tientallen (50), 2 = eenheden (2).",
            },
            {
              titel: "Ná de komma",
              tekst: "3 = tienden (0,3), 6 = honderdsten (0,06).",
            },
            {
              titel: "Samen",
              tekst: "50 + 2 + 0,3 + 0,06 = 52,36.",
            },
          ],
          woorden: [
            {
              woord: "plaatswaarde",
              uitleg: "Hoeveel een cijfer waard is door de plek waar het staat.",
            },
          ],
          theorie: "Elk cijfer is iets anders waard door zijn plek: tientallen, eenheden, tienden, honderdsten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "41,27 = 40 + 1 + 0,2 + 0,07.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Plekken ná de komma",
              uitleg: "1e plek = tienden (0,…), 2e plek = honderdsten (0,0…).",
            },
          ],
          niveaus: {
            basis: "52,36 = 50 + 2 + 0,3 + 0,06.",
            simpeler: "De 5 is 50, de 2 is 2, de 3 ná de komma is 0,3 en de 6 is 0,06. Tel op: 52,36.",
            nogSimpeler: "50 + 2 + 0,3 + 0,06",
          },
        },
      },
      {
        q: "Welk getal heeft een **3** op de **tienden**-plek?",
        options: ["8,31", "3,18", "8,13", "81,03"],
        answer: 0,
        wrongHints: [
          null,
          "Staat de 3 bij dit getal vóór of ná de komma?",
          null,
          "De tienden-plek is de eerste plek ná de komma. Welk cijfer staat daar hier?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Waar zijn de tienden?",
              tekst: "De tienden-plek is de eerste plek ná de komma.",
            },
            {
              titel: "Kijk per getal",
              tekst: "8,31 → 3 · 3,18 → 1 · 8,13 → 1 · 81,03 → 0.",
            },
          ],
          woorden: [
            {
              woord: "tienden-plek",
              uitleg: "De eerste plek direct ná de komma.",
            },
          ],
          theorie: "Vóór de komma: eenheden, tientallen. Ná de komma: tienden, honderdsten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "In 5,72 staat een 7 op de tienden-plek.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Direct ná de komma",
              uitleg: "Kijk alleen naar het cijfer dat direct ná de komma staat.",
            },
          ],
          niveaus: {
            basis: "8,31 heeft een 3 op de tienden-plek.",
            simpeler: "Kijk bij elk getal naar het cijfer direct ná de komma. Alleen bij 8,31 is dat een 3.",
            nogSimpeler: "8,31",
          },
        },
      },
    ],
  },

  // STAP 2: Optellen + aftrekken
  {
    title: "Optellen & aftrekken — komma's onder elkaar!",
    explanation:
      "Bij optellen en aftrekken met kommagetallen geldt **één belangrijke regel**:\n\n**De komma's moeten recht onder elkaar staan.**\n\nDat is alles. Verder doe je het net als gewoon optellen/aftrekken.\n\n**Voorbeeld optellen**:\n```\n  3,50\n+ 2,70\n─────\n  6,20\n```\nKomma's staan recht. Antwoord-komma op dezelfde plek. Dus **3,50 + 2,70 = 6,20**.\n\n**Voorbeeld aftrekken**:\n```\n  8,25\n− 3,40\n─────\n  4,85\n```\nKomma op dezelfde plek. **8,25 − 3,40 = 4,85**.\n\n**Toets-truc — verschillende aantallen cijfers**:\nAls de getallen niet evenveel cijfers ná de komma hebben, **vul aan met nullen**:\n• 5,2 + 3,75 → schrijf als **5,20** + 3,75.\n• 4,5 + 2 → schrijf als 4,5 + 2,0 (of 4,50 + 2,00).\n\nNullen aan het eind veranderen niets aan de waarde, maar maken het optellen makkelijker.\n\n**Aandachtspunt — gehele getallen**:\nEen getal zonder komma (zoals 5) is gelijk aan 5,0 of 5,00 of 5,000. Allemaal hetzelfde getal!\n\n**Veel-voorkomende fout**:\nKomma's NIET recht onder elkaar zetten. Dan reken je bij **0,5 + 2** per ongeluk 5 tienden + 2 tienden = **0,7** in plaats van **2,5**.",
    svg: optellenSvg(),
    checks: [
      {
        q: "**3,5 + 2,4** = ?",
        options: ["5,9", "5,11", "59", "0,59"],
        answer: 0,
        wrongHints: [null, "Let op de komma — heb je tienden en honderdsten door elkaar gehaald?", "Komma vergeten.", "Komma te ver naar links."],
      },
      {
        q: "**7,80 − 3,25** = ?",
        options: ["4,55", "4,65", "10,05", "5,45"],
        answer: 0,
        wrongHints: [null, "Net niet — reken de cijfers ná de komma nog eens na.", "Niet 10 — dat is opgeteld i.p.v. afgetrokken.", "Te veel — kijk goed naar het verschil tussen 7 en 3."],
        uitlegPad: {
          stappen: [
            { titel: "Komma's uitlijnen", tekst: "7,80 - 3,25. Komma's recht onder elkaar. 80 - 25 = 55 (cijfers ná komma). 7 - 3 = 4. Antwoord: 4,55." },
          ],
          woorden: [{ woord: "uitlijnen", uitleg: "Komma's recht boven elkaar zetten zoals in een kolom." }],
          theorie: "Aftrekken met kommagetallen werkt zoals gewoon aftrekken, mits komma's uitgelijnd zijn.",
          voorbeelden: [{ type: "stap", tekst: "7,80 - 3,25 = 4,55." }],
          basiskennis: [{ onderwerp: "Vul aan met nullen", uitleg: "Als getallen niet gelijk aantal decimalen hebben, vul aan met 0." }],
          niveaus: {
            basis: "7,80 - 3,25 = 4,55.",
            simpeler: "Schrijf onder elkaar met komma's uitgelijnd. Trek af: 80-25=55, 7-3=4. Dus 4,55.",
            nogSimpeler: "4,55",
          },
        },
      },
      {
        q: "**4,5 + 1,75** = ?",
        options: ["6,25", "6,2", "5,75", "62,5"],
        answer: 0,
        wrongHints: [null, "Net niet — schrijf 4,5 als 4,50 zodat je 2 decimalen onder elkaar hebt, en tel dan op.", "Te weinig — controleer of je 4,5 als 4,50 noteert.", "Komma verkeerd geplaatst — werk met 2 decimalen."],
      },
      {
        q: "**10 − 2,75** = ?",
        options: ["7,25", "7,75", "8,25", "12,75"],
        answer: 0,
        wrongHints: [null, "Net niet — schrijf 10 als 10,00 zodat je decimalen onder elkaar hebt en trek dan af.", "Te veel — controleer de aftrekking nog eens.", "Niet 12,75 — dat is optellen, niet aftrekken."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**6,3 + 2,45** = ?",
        options: ["8,75", "8,48", "3,08", "9,75"],
        answer: 0,
        wrongHints: [
          null,
          "Staan de komma's recht onder elkaar? Schrijf 6,3 eerst als 6,30.",
          null,
          "Tel de hele getallen vóór de komma nog eens na.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Nullen aanvullen",
              tekst: "6,3 heeft 1 cijfer ná de komma, 2,45 heeft er 2. Schrijf 6,3 als 6,30.",
            },
            {
              titel: "Komma's onder elkaar",
              tekst: "6,30 + 2,45: 30 + 45 = 75 en 6 + 2 = 8. Antwoord: 8,75.",
            },
          ],
          woorden: [
            {
              woord: "uitlijnen",
              uitleg: "Komma's recht onder elkaar zetten, zoals in een kolom.",
            },
          ],
          theorie: "Bij optellen staan de komma's recht onder elkaar. Vul aan met nullen als dat makkelijker is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "5,4 + 1,25 → 5,40 + 1,25 = 6,65.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Vul aan met nullen",
              uitleg: "6,3 = 6,30. Een nul aan het eind verandert niets.",
            },
          ],
          niveaus: {
            basis: "6,3 + 2,45 = 8,75.",
            simpeler: "Schrijf 6,30 + 2,45 onder elkaar. 30 + 45 = 75, 6 + 2 = 8. Dus 8,75.",
            nogSimpeler: "8,75",
          },
        },
      },
      {
        q: "**9,4 − 3,6** = ?",
        options: ["5,8", "6,2", "13", "4,8"],
        answer: 0,
        wrongHints: [
          null,
          "Je kunt 6 niet zomaar van 4 afhalen. Wat doe je dan bij gewoon aftrekken?",
          "Moet je erbij doen of eraf halen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Komma's onder elkaar",
              tekst: "9,4 − 3,6. De komma's staan recht.",
            },
            {
              titel: "Tienden",
              tekst: "4 − 6 lukt niet. Leen 1 hele: 14 − 6 = 8 tienden.",
            },
            {
              titel: "Hele",
              tekst: "Er is nog 8 over: 8 − 3 = 5. Antwoord: 5,8.",
            },
          ],
          woorden: [
            {
              woord: "lenen",
              uitleg: "Bij aftrekken één van de plek links ernaast pakken als het cijfer te klein is.",
            },
          ],
          theorie: "Aftrekken met kommagetallen gaat net als gewoon aftrekken, met de komma's onder elkaar.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7,2 − 2,5 = 4,7.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "Controleer: 5,8 + 3,6 = 9,4.",
            },
          ],
          niveaus: {
            basis: "9,4 − 3,6 = 5,8.",
            simpeler: "Reken 94 − 36 = 58 en zet de komma terug: 5,8.",
            nogSimpeler: "5,8",
          },
        },
      },
      {
        q: "**3 + 0,6** = ?",
        options: ["3,6", "0,9", "3,06", "9"],
        answer: 0,
        wrongHints: [
          null,
          "Is 3 een heel getal of drie tienden? Schrijf 3 als 3,0.",
          null,
          "Waar is de komma gebleven?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Heel getal met komma",
              tekst: "3 = 3,0.",
            },
            {
              titel: "Onder elkaar",
              tekst: "3,0 + 0,6 = 3,6.",
            },
          ],
          woorden: [
            {
              woord: "heel getal",
              uitleg: "Een getal zonder komma, zoals 3. Het is hetzelfde als 3,0.",
            },
          ],
          theorie: "Een heel getal krijgt ,0 erachter. Dan kun je de komma's recht onder elkaar zetten.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 + 0,2 → 4,0 + 0,2 = 4,2.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Veelgemaakte fout",
              uitleg: "3 + 0,6 is géén 0,9: de 3 zijn hele, geen tienden.",
            },
          ],
          niveaus: {
            basis: "3 + 0,6 = 3,6.",
            simpeler: "Schrijf 3 als 3,0. Zet onder 0,6. Tel op: 3,6.",
            nogSimpeler: "3,6",
          },
        },
      },
      {
        q: "Een pen kost **€ 1,35** en een schrift **€ 2,40**. Wat kost het **samen**?",
        options: ["€ 3,75", "€ 3,65", "€ 1,05", "€ 4,75"],
        answer: 0,
        wrongHints: [
          null,
          "Reken de centen nog eens na: 35 + 40.",
          "Samen betekent optellen. Heb je dat gedaan?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Onder elkaar",
              tekst: "€ 1,35 + € 2,40, met de komma's recht onder elkaar.",
            },
            {
              titel: "Optellen",
              tekst: "35 + 40 = 75 cent en 1 + 2 = 3 euro. Samen € 3,75.",
            },
          ],
          woorden: [
            {
              woord: "samen",
              uitleg: "Alles bij elkaar opgeteld.",
            },
          ],
          theorie: "Bij geld staan er altijd 2 cijfers ná de komma: de centen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 2,15 + € 1,20 = € 3,35.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Euro en cent",
              uitleg: "Ná de komma staan de centen. 100 cent = 1 euro.",
            },
          ],
          niveaus: {
            basis: "€ 1,35 + € 2,40 = € 3,75.",
            simpeler: "Tel de centen: 35 + 40 = 75. Tel de euro's: 1 + 2 = 3. Samen € 3,75.",
            nogSimpeler: "€ 3,75",
          },
        },
      },
      {
        q: "Welk getal is **even groot** als **7,3**?",
        options: ["7,30", "7,03", "7,003", "0,73"],
        answer: 0,
        wrongHints: [
          null,
          "Een nul direct ná de komma verschuift de 3. Verandert het getal dan?",
          null,
          "Kijk naar het hele deel vóór de komma.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Nul aan het eind",
              tekst: "Een nul áchteraan ná de komma verandert niets: 7,3 = 7,30.",
            },
            {
              titel: "Nul ertussen",
              tekst: "7,03 is iets anders: daar staat de 3 op de honderdsten-plek.",
            },
          ],
          woorden: [
            {
              woord: "aanvullen",
              uitleg: "Een nul achteraan het getal zetten om evenveel cijfers ná de komma te krijgen.",
            },
          ],
          theorie: "Nullen áán het eind ná de komma veranderen de waarde niet. Nullen ertussen wel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2,5 = 2,50 = 2,500.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Waar staat de nul?",
              uitleg: "Achteraan: zelfde getal. Direct ná de komma: ander getal.",
            },
          ],
          niveaus: {
            basis: "7,3 = 7,30.",
            simpeler: "Een nul achteraan verandert niets. Dus 7,3 en 7,30 zijn even groot.",
            nogSimpeler: "7,30",
          },
        },
      },
      {
        q: "**8,5 − 2,25** = ?",
        options: ["6,25", "5,8", "10,75", "6,35"],
        answer: 0,
        wrongHints: [
          null,
          "Schrijf 8,5 als 8,50 en zet de komma's recht onder elkaar.",
          "Moet je erbij doen of eraf halen?",
          null,
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Nullen aanvullen",
              tekst: "8,5 heeft 1 cijfer ná de komma, 2,25 heeft er 2. Schrijf 8,5 als 8,50.",
            },
            {
              titel: "Aftrekken",
              tekst: "8,50 − 2,25: 50 − 25 = 25 en 8 − 2 = 6. Antwoord: 6,25.",
            },
          ],
          woorden: [
            {
              woord: "uitlijnen",
              uitleg: "Komma's recht onder elkaar zetten.",
            },
          ],
          theorie: "Vul aan met nullen zodat beide getallen evenveel cijfers ná de komma hebben.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6,5 − 1,25 → 6,50 − 1,25 = 5,25.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "Controleer: 6,25 + 2,25 = 8,50.",
            },
          ],
          niveaus: {
            basis: "8,5 − 2,25 = 6,25.",
            simpeler: "Schrijf 8,50 − 2,25. 50 − 25 = 25, 8 − 2 = 6. Dus 6,25.",
            nogSimpeler: "6,25",
          },
        },
      },
    ],
  },

  // STAP 3: Vermenigvuldigen
  {
    title: "Vermenigvuldigen met kommagetallen",
    explanation:
      "Vermenigvuldigen met kommagetallen heeft een **trucje** *(uit je hoofd!)*:\n\n**Stap 1**: doe alsof de komma er **niet staat** (gewone vermenigvuldiging).\n**Stap 2**: tel de cijfers **ná** de komma — in beide getallen samen.\n**Stap 3**: zet die komma in het antwoord, geteld vanaf rechts.\n\n**Voorbeeld 1**: 0,5 × 0,3 = ?\n• Stap 1: 5 × 3 = 15.\n• Stap 2: cijfers ná komma: 0,5 heeft 1, 0,3 heeft 1 → totaal 2.\n• Stap 3: 2 plaatsen vanaf rechts → 0,15.\n• Dus 0,5 × 0,3 = **0,15**.\n\n**Voorbeeld 2**: 2,4 × 3 = ?\n• Stap 1: 24 × 3 = 72.\n• Stap 2: cijfers ná komma: 2,4 heeft 1, 3 heeft 0 → totaal 1.\n• Stap 3: 1 plaats vanaf rechts → 7,2.\n• Dus 2,4 × 3 = **7,2**.\n\n**Voorbeeld 3**: 1,5 × 1,2 = ?\n• Stap 1: 15 × 12 = 180.\n• Stap 2: 1 + 1 = 2 cijfers ná komma.\n• Stap 3: 2 plaatsen vanaf rechts → 1,80 = 1,8.\n• Dus 1,5 × 1,2 = **1,8**.\n\n**Toets-truc — schatten als check**:\n• 2,4 × 3 → ongeveer 2 × 3 = 6. Antwoord 7,2 klopt qua grootte.\n• 0,5 × 0,3 → 0,5 is de helft, dus de helft van 0,3 = 0,15. Klopt.\n\n**Belangrijke regel**:\nAls je een kommagetal vermenigvuldigt met een gewoon getal: alleen het kommagetal heeft cijfers ná de komma.",
    checks: [
      {
        q: "**0,4 × 0,2** = ?",
        options: ["0,08", "0,8", "8", "0,008"],
        answer: 0,
        wrongHints: [null, "Te veel — hoeveel decimalen heeft elk getal? Tel ze op.", "Komma vergeten — er moet er één in.", "Te ver naar links — 1 decimaal te veel."],
      },
      {
        q: "**3,2 × 5** = ?",
        options: ["16", "1,6", "8,2", "1,5"],
        answer: 0,
        wrongHints: [null, "Komma te ver — tel hoeveel decimalen er in totaal zijn en zet de komma op de juiste plek.", "Dat is een optelling (3,2 + 5). We zoeken vermenigvuldiging.", "Te weinig — reken eerst 32 × 5 en bedenk dan hoeveel decimalen het antwoord moet hebben."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldig zonder komma", tekst: "Doe 32 × 5 = 160." },
            { titel: "Tel cijfers ná komma", tekst: "3,2 heeft 1 cijfer ná komma. 5 heeft er 0. Totaal: 1." },
            { titel: "Zet komma terug", tekst: "160 met 1 plaats vanaf rechts = 16,0 = 16." },
          ],
          woorden: [{ woord: "decimaalplaats", uitleg: "Cijfer ná de komma." }],
          theorie: "Vermenigvuldig zonder komma's, tel decimaalplaatsen op, zet komma in antwoord.",
          voorbeelden: [{ type: "stap", tekst: "3,2 × 5: 32 × 5 = 160. 1 decimaal → 16,0 = 16." }],
          basiskennis: [{ onderwerp: "Tellen decimalen", uitleg: "Tel decimaalplaatsen van beide getallen samen." }],
          niveaus: {
            basis: "32 × 5 = 160 → 16.",
            simpeler: "Stap 1: zonder komma 32 × 5 = 160. Stap 2: 1 cijfer ná komma (in 3,2). Stap 3: komma 1 plaats van rechts → 16,0 = 16.",
            nogSimpeler: "16",
          },
        },
      },
      {
        q: "**1,2 × 1,2** = ?",
        options: ["1,44", "1,4", "1,2", "2,4"],
        answer: 0,
        wrongHints: [null, "Net niet — hoeveel decimalen krijg je bij 1,2 × 1,2 samen?", "Te weinig — vergeet de decimalen niet.", "Dat is een optelling (1,2 + 1,2), geen vermenigvuldiging."],
      },
      {
        q: "Bij **0,5 × 0,2** tel je hoeveel **decimalen** op om de komma in het antwoord te plaatsen?",
        options: ["2", "1", "0", "3"],
        answer: 0,
        wrongHints: [null, "Te weinig — kijk naar beide getallen, niet maar naar één.", "Allebei wél een komma — niet 0.", "Te veel — tel per getal hoeveel cijfers er ná de komma staan."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**0,7 × 0,3** = ?",
        options: ["0,21", "2,1", "0,021", "1"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel cijfers ná de komma hebben de twee getallen samen?",
          null,
          "Heb je vermenigvuldigd of opgeteld?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vermenigvuldig zonder komma",
              tekst: "Doe 7 × 3 = 21.",
            },
            {
              titel: "Tel cijfers ná komma",
              tekst: "0,7 heeft 1 cijfer ná de komma, 0,3 ook 1. Totaal: 2.",
            },
            {
              titel: "Zet komma terug",
              tekst: "21 met 2 plaatsen vanaf rechts = 0,21.",
            },
          ],
          woorden: [
            {
              woord: "decimaalplaats",
              uitleg: "Cijfer ná de komma.",
            },
          ],
          theorie: "Vermenigvuldig zonder komma's, tel de cijfers ná de komma van beide getallen samen, zet de komma in het antwoord.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "0,7 × 0,3: 7 × 3 = 21. 2 decimalen → 0,21.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tellen decimalen",
              uitleg: "Tel de cijfers ná de komma van beide getallen samen.",
            },
          ],
          niveaus: {
            basis: "7 × 3 = 21 → 0,21.",
            simpeler: "Stap 1: zonder komma 7 × 3 = 21. Stap 2: samen 2 cijfers ná de komma. Stap 3: komma 2 plaatsen van rechts → 0,21.",
            nogSimpeler: "0,21",
          },
        },
      },
      {
        q: "**1,6 × 4** = ?",
        options: ["6,4", "64", "0,64", "5,6"],
        answer: 0,
        wrongHints: [null, "Waar is de komma gebleven?", null, "Is dit een plus-som of een keer-som?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Vermenigvuldig zonder komma",
              tekst: "Doe 16 × 4 = 64.",
            },
            {
              titel: "Tel cijfers ná komma",
              tekst: "1,6 heeft 1 cijfer ná de komma, 4 heeft er 0. Totaal: 1.",
            },
            {
              titel: "Zet komma terug",
              tekst: "64 met 1 plaats vanaf rechts = 6,4.",
            },
          ],
          woorden: [
            {
              woord: "decimaalplaats",
              uitleg: "Cijfer ná de komma.",
            },
          ],
          theorie: "Vermenigvuldig zonder komma's, tel de cijfers ná de komma van beide getallen samen, zet de komma in het antwoord.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1,6 × 4: 16 × 4 = 64. 1 decimaal → 6,4.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tellen decimalen",
              uitleg: "Tel de cijfers ná de komma van beide getallen samen.",
            },
          ],
          niveaus: {
            basis: "16 × 4 = 64 → 6,4.",
            simpeler: "Stap 1: zonder komma 16 × 4 = 64. Stap 2: 1 cijfer ná de komma (in 1,6). Stap 3: komma 1 plaats van rechts → 6,4.",
            nogSimpeler: "6,4",
          },
        },
      },
      {
        q: "**2,5 × 0,4** = ?",
        options: ["1", "10", "0,1", "2,9"],
        answer: 0,
        wrongHints: [
          null,
          "Tel de cijfers ná de komma in beide getallen samen.",
          null,
          "Je moet vermenigvuldigen, niet optellen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vermenigvuldig zonder komma",
              tekst: "Doe 25 × 4 = 100.",
            },
            {
              titel: "Tel cijfers ná komma",
              tekst: "2,5 heeft 1 cijfer ná de komma, 0,4 ook 1. Totaal: 2.",
            },
            {
              titel: "Zet komma terug",
              tekst: "100 met 2 plaatsen vanaf rechts = 1,00 = 1.",
            },
          ],
          woorden: [
            {
              woord: "decimaalplaats",
              uitleg: "Cijfer ná de komma.",
            },
          ],
          theorie: "Vermenigvuldig zonder komma's, tel de cijfers ná de komma van beide getallen samen, zet de komma in het antwoord.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2,5 × 0,4: 25 × 4 = 100. 2 decimalen → 1,00 = 1.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tellen decimalen",
              uitleg: "Tel de cijfers ná de komma van beide getallen samen.",
            },
          ],
          niveaus: {
            basis: "25 × 4 = 100 → 1,00 = 1.",
            simpeler: "Stap 1: zonder komma 25 × 4 = 100. Stap 2: samen 2 cijfers ná de komma. Stap 3: komma 2 plaatsen van rechts → 1,00. Dat is 1.",
            nogSimpeler: "1",
          },
        },
      },
      {
        q: "Bij **1,25 × 0,3** reken je eerst 125 × 3 = 375. Wat is het **antwoord**?",
        options: ["0,375", "3,75", "37,5", "0,0375"],
        answer: 0,
        wrongHints: [
          null,
          "Tel de cijfers ná de komma in 1,25 én in 0,3.",
          null,
          "Tel nog eens: hoeveel cijfers staan er samen ná de komma?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vermenigvuldig zonder komma",
              tekst: "Doe 125 × 3 = 375.",
            },
            {
              titel: "Tel cijfers ná komma",
              tekst: "1,25 heeft 2 cijfers ná de komma, 0,3 heeft er 1. Totaal: 3.",
            },
            {
              titel: "Zet komma terug",
              tekst: "375 met 3 plaatsen vanaf rechts = 0,375.",
            },
          ],
          woorden: [
            {
              woord: "decimaalplaats",
              uitleg: "Cijfer ná de komma.",
            },
          ],
          theorie: "Vermenigvuldig zonder komma's, tel de cijfers ná de komma van beide getallen samen, zet de komma in het antwoord.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1,25 × 0,3: 125 × 3 = 375. 3 decimalen → 0,375.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tellen decimalen",
              uitleg: "Tel de cijfers ná de komma van beide getallen samen.",
            },
          ],
          niveaus: {
            basis: "375 met 3 decimalen = 0,375.",
            simpeler: "Stap 1: 125 × 3 = 375. Stap 2: 1,25 heeft 2 cijfers ná de komma en 0,3 heeft er 1, samen 3. Stap 3: komma 3 plaatsen van rechts → 0,375.",
            nogSimpeler: "0,375",
          },
        },
      },
      {
        q: "**3,9 × 5** = ?",
        options: ["19,5", "1,95", "195", "8,9"],
        answer: 0,
        wrongHints: [null, "Schat eerst: 3,9 is bijna 4. Hoeveel is 4 × 5?", "Komma vergeten?", null],
        uitlegPad: {
          stappen: [
            {
              titel: "Vermenigvuldig zonder komma",
              tekst: "Doe 39 × 5 = 195.",
            },
            {
              titel: "Tel cijfers ná komma",
              tekst: "3,9 heeft 1 cijfer ná de komma, 5 heeft er 0. Totaal: 1.",
            },
            {
              titel: "Zet komma terug",
              tekst: "195 met 1 plaats vanaf rechts = 19,5.",
            },
          ],
          woorden: [
            {
              woord: "decimaalplaats",
              uitleg: "Cijfer ná de komma.",
            },
          ],
          theorie: "Vermenigvuldig zonder komma's, tel de cijfers ná de komma van beide getallen samen, zet de komma in het antwoord.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3,9 × 5: 39 × 5 = 195. 1 decimaal → 19,5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tellen decimalen",
              uitleg: "Tel de cijfers ná de komma van beide getallen samen.",
            },
          ],
          niveaus: {
            basis: "39 × 5 = 195 → 19,5.",
            simpeler: "Stap 1: zonder komma 39 × 5 = 195. Stap 2: 1 cijfer ná de komma. Stap 3: komma 1 plaats van rechts → 19,5. Schat: 4 × 5 = 20, dat klopt.",
            nogSimpeler: "19,5",
          },
        },
      },
      {
        q: "**1,3 × 1,1** = ?",
        options: ["1,43", "14,3", "0,143", "2,4"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel cijfers ná de komma hebben de twee getallen samen?",
          null,
          "Is dit een plus-som of een keer-som?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Vermenigvuldig zonder komma",
              tekst: "Doe 13 × 11 = 143.",
            },
            {
              titel: "Tel cijfers ná komma",
              tekst: "1,3 heeft 1 cijfer ná de komma, 1,1 ook 1. Totaal: 2.",
            },
            {
              titel: "Zet komma terug",
              tekst: "143 met 2 plaatsen vanaf rechts = 1,43.",
            },
          ],
          woorden: [
            {
              woord: "decimaalplaats",
              uitleg: "Cijfer ná de komma.",
            },
          ],
          theorie: "Vermenigvuldig zonder komma's, tel de cijfers ná de komma van beide getallen samen, zet de komma in het antwoord.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1,3 × 1,1: 13 × 11 = 143. 2 decimalen → 1,43.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tellen decimalen",
              uitleg: "Tel de cijfers ná de komma van beide getallen samen.",
            },
          ],
          niveaus: {
            basis: "13 × 11 = 143 → 1,43.",
            simpeler: "Stap 1: zonder komma 13 × 11 = 143. Stap 2: samen 2 cijfers ná de komma. Stap 3: komma 2 plaatsen van rechts → 1,43.",
            nogSimpeler: "1,43",
          },
        },
      },
    ],
  },

  // STAP 4: Delen
  {
    title: "Delen met kommagetallen",
    explanation:
      "Delen met een kommagetal kent **2 hoofdgevallen**:\n\n**Geval 1 — Delen door een geheel getal**:\nDoe gewoon staartdeling. De komma in het antwoord komt op dezelfde plek als in het deeltal.\n\n**Voorbeeld**: 4,8 ÷ 2 = ?\n• 4 ÷ 2 = 2 → komma → 8 ÷ 2 = 4.\n• Dus 4,8 ÷ 2 = **2,4**.\n\n**Geval 2 — Delen door een kommagetal**:\n**Verschuif de komma** in beide getallen totdat de deler een **geheel getal** wordt.\n\n**Voorbeeld**: 6,4 ÷ 0,2 = ?\n• 0,2 heeft 1 cijfer ná komma — schuif beide komma's 1 plaats naar rechts.\n• Wordt: 64 ÷ 2 = **32**.\n• Dus 6,4 ÷ 0,2 = **32**.\n\n**Voorbeeld 2**: 1,5 ÷ 0,3 = ?\n• Verschuif komma 1 plaats: wordt 15 ÷ 3 = 5.\n• Dus 1,5 ÷ 0,3 = **5**.\n\n**Toets-truc — schatten**:\n• 4,8 ÷ 2 → ongeveer 5 ÷ 2 = 2,5. Antwoord 2,4 klopt qua grootte.\n• 6,4 ÷ 0,2 → 0,2 is een vijfde, dus 6,4 × 5 = 32. Klopt.\n\n**Belangrijk**:\nDelen door een kommagetal **kleiner dan 1** geeft een **groter** antwoord. Bv. 6,4 ÷ 0,2 = 32 *(veel groter dan 6,4!)*. Dat lijkt vreemd maar klopt — je kijkt hoe vaak 0,2 in 6,4 past.\n\n**Veel-voorkomende fout**:\nKomma vergeten of verkeerd verschuiven. Controleer met een schatting.",
    checks: [
      {
        q: "**6,8 ÷ 2** = ?",
        options: ["3,4", "3,8", "13,6", "0,34"],
        answer: 0,
        wrongHints: [null, "Te veel — deel elk deel los: 6 ÷ 2 en 8 ÷ 2.", "Te veel — dat zou 6,8 × 2 zijn, niet ÷.", "Komma verkeerd geplaatst."],
      },
      {
        q: "**2,4 ÷ 0,3** = ?",
        options: ["8", "0,8", "80", "0,08"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je de komma's wel verschoven? (24 ÷ 3)", "Te veel — komma 1 plaats te ver.", "Veel te weinig."],
        uitlegPad: {
          stappen: [
            { titel: "Verschuif komma", tekst: "0,3 heeft 1 cijfer ná komma. Schuif komma in beide getallen 1 plaats: 2,4 → 24, 0,3 → 3." },
            { titel: "Deel als gewone getallen", tekst: "24 ÷ 3 = 8." },
          ],
          woorden: [{ woord: "komma verschuiven", uitleg: "Komma rechts opschuiven (= × 10) in beide getallen tegelijk." }],
          theorie: "Bij delen door kommagetal: maak deler heel door komma's te schuiven.",
          voorbeelden: [{ type: "stap", tekst: "2,4 ÷ 0,3 → 24 ÷ 3 = 8." }],
          basiskennis: [{ onderwerp: "Beide getallen", uitleg: "Schuif in BEIDE getallen evenveel plaatsen — anders verandert je som." }],
          niveaus: {
            basis: "24 ÷ 3 = 8.",
            simpeler: "Stap 1: schuif komma 1 plaats in beide (2,4 → 24, 0,3 → 3). Stap 2: 24 ÷ 3 = 8.",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "**3,6 ÷ 0,4** = ?",
        options: ["9", "0,9", "14,4", "0,09"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je de komma's wel verschoven? (36 ÷ 4)", "Dat is 3,6 × 4 — je moet juist delen.", "Veel te weinig."],
      },
      {
        q: "Een lint van **9,6 m** wordt in stukjes van **0,8 m** geknipt. **Hoeveel stukjes**?",
        options: ["12 stukjes", "8 stukjes", "120 stukjes", "1,2 stukjes"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je goed gedeeld? (96 ÷ 8)", "Te veel — komma 1 plaats te ver.", "Aantal moet een heel getal zijn — je kunt geen 1,2 stukjes hebben."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**9,3 ÷ 3** = ?",
        options: ["3,1", "31", "0,31", "27,9"],
        answer: 0,
        wrongHints: [
          null,
          "Waar komt de komma in het antwoord? Op dezelfde plek als in 9,3.",
          null,
          "Moet je delen of keer doen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Deel het hele deel",
              tekst: "9 ÷ 3 = 3.",
            },
            {
              titel: "Komma en tienden",
              tekst: "Zet de komma. 3 tienden ÷ 3 = 1 tiende.",
            },
          ],
          woorden: [
            {
              woord: "komma verschuiven",
              uitleg: "Komma rechts opschuiven (= × 10) in beide getallen tegelijk.",
            },
          ],
          theorie: "Delen door een heel getal: komma blijft op dezelfde plek. Delen door een kommagetal: schuif de komma's tot de deler heel is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "9,3 ÷ 3 = 3,1.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schatten",
              uitleg: "9 ÷ 3 = 3. Het antwoord ligt dus vlak bij 3.",
            },
          ],
          niveaus: {
            basis: "9 ÷ 3 = 3, 3 ÷ 3 = 1 → 3,1.",
            simpeler: "Deel eerst 9 ÷ 3 = 3. Zet de komma. Dan 3 ÷ 3 = 1. Antwoord: 3,1.",
            nogSimpeler: "3,1",
          },
        },
      },
      {
        q: "**4,5 ÷ 0,5** = ?",
        options: ["9", "0,9", "90", "2,25"],
        answer: 0,
        wrongHints: [
          null,
          "Heb je de komma's in beide getallen verschoven? (45 ÷ 5)",
          null,
          "Delen door 0,5 is niet hetzelfde als delen door 2. Hoe vaak past 0,5 in 4,5?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Verschuif komma",
              tekst: "0,5 heeft 1 cijfer ná de komma. Schuif in beide 1 plaats: 4,5 → 45, 0,5 → 5.",
            },
            {
              titel: "Deel als gewone getallen",
              tekst: "45 ÷ 5 = 9.",
            },
          ],
          woorden: [
            {
              woord: "komma verschuiven",
              uitleg: "Komma rechts opschuiven (= × 10) in beide getallen tegelijk.",
            },
          ],
          theorie: "Delen door een heel getal: komma blijft op dezelfde plek. Delen door een kommagetal: schuif de komma's tot de deler heel is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4,5 ÷ 0,5 → 45 ÷ 5 = 9.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Groter antwoord",
              uitleg: "Delen door een getal kleiner dan 1 geeft een groter antwoord.",
            },
          ],
          niveaus: {
            basis: "45 ÷ 5 = 9.",
            simpeler: "Stap 1: schuif de komma 1 plaats in beide (4,5 → 45, 0,5 → 5). Stap 2: 45 ÷ 5 = 9.",
            nogSimpeler: "9",
          },
        },
      },
      {
        q: "**7,2 ÷ 0,9** = ?",
        options: ["8", "0,8", "80", "6,48"],
        answer: 0,
        wrongHints: [
          null,
          "Heb je de komma's wel verschoven? (72 ÷ 9)",
          null,
          "Dat is 7,2 × 0,9. Je moet juist delen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Verschuif komma",
              tekst: "0,9 heeft 1 cijfer ná de komma. Schuif in beide 1 plaats: 7,2 → 72, 0,9 → 9.",
            },
            {
              titel: "Deel als gewone getallen",
              tekst: "72 ÷ 9 = 8.",
            },
          ],
          woorden: [
            {
              woord: "komma verschuiven",
              uitleg: "Komma rechts opschuiven (= × 10) in beide getallen tegelijk.",
            },
          ],
          theorie: "Delen door een heel getal: komma blijft op dezelfde plek. Delen door een kommagetal: schuif de komma's tot de deler heel is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "7,2 ÷ 0,9 → 72 ÷ 9 = 8.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Beide getallen",
              uitleg: "Schuif in BEIDE getallen evenveel plaatsen — anders verandert je som.",
            },
          ],
          niveaus: {
            basis: "72 ÷ 9 = 8.",
            simpeler: "Stap 1: schuif de komma 1 plaats in beide (7,2 → 72, 0,9 → 9). Stap 2: 72 ÷ 9 = 8.",
            nogSimpeler: "8",
          },
        },
      },
      {
        q: "Bij **1,8 ÷ 0,6** verschuif je de komma's. Welke som reken je dan uit?",
        options: ["18 ÷ 6", "1,8 ÷ 6", "18 ÷ 0,6", "180 ÷ 6"],
        answer: 0,
        wrongHints: [
          null,
          "Schuif je de komma in béide getallen?",
          null,
          "Hoeveel plaatsen moet je schuiven om van 0,6 een heel getal te maken?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Kijk naar de deler",
              tekst: "0,6 heeft 1 cijfer ná de komma. Schuif 1 plaats: 0,6 → 6.",
            },
            {
              titel: "Schuif ook het deeltal",
              tekst: "1,8 → 18. De som wordt 18 ÷ 6 = 3.",
            },
          ],
          woorden: [
            {
              woord: "komma verschuiven",
              uitleg: "Komma rechts opschuiven (= × 10) in beide getallen tegelijk.",
            },
          ],
          theorie: "Delen door een heel getal: komma blijft op dezelfde plek. Delen door een kommagetal: schuif de komma's tot de deler heel is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2,1 ÷ 0,7 → 21 ÷ 7 = 3.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Beide getallen",
              uitleg: "Schuif in BEIDE getallen evenveel plaatsen — anders verandert je som.",
            },
          ],
          niveaus: {
            basis: "1,8 ÷ 0,6 wordt 18 ÷ 6.",
            simpeler: "0,6 wordt een heel getal als je de komma 1 plaats schuift: 6. Doe dat ook bij 1,8: 18. Je rekent 18 ÷ 6.",
            nogSimpeler: "18 ÷ 6",
          },
        },
      },
      {
        q: "Een fles van **1,2 liter** limonade wordt eerlijk verdeeld over **4 glazen**. Hoeveel liter per glas?",
        options: ["0,3 liter", "3 liter", "4,8 liter", "0,03 liter"],
        answer: 0,
        wrongHints: [
          null,
          "Kan er in één glas meer zitten dan in de hele fles?",
          null,
          "Waar komt de komma? 12 ÷ 4 = 3, dus 1,2 ÷ 4 = …",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Delen door een heel getal",
              tekst: "1,2 ÷ 4. Doe 12 ÷ 4 = 3.",
            },
            {
              titel: "Komma terug",
              tekst: "1,2 heeft 1 cijfer ná de komma, dus het antwoord ook: 0,3.",
            },
          ],
          woorden: [
            {
              woord: "komma verschuiven",
              uitleg: "Komma rechts opschuiven (= × 10) in beide getallen tegelijk.",
            },
          ],
          theorie: "Delen door een heel getal: komma blijft op dezelfde plek. Delen door een kommagetal: schuif de komma's tot de deler heel is.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2,4 ÷ 4 = 0,6.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Schatten",
              uitleg: "4 glazen samen = 1,2 liter. Elk glas krijgt dus minder dan 1 liter.",
            },
          ],
          niveaus: {
            basis: "1,2 ÷ 4 = 0,3 liter.",
            simpeler: "12 ÷ 4 = 3. Zet de komma op dezelfde plek als in 1,2: 0,3 liter per glas.",
            nogSimpeler: "0,3 liter",
          },
        },
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk-sommen — geld & meten",
    explanation:
      "Toets-praktijksommen draaien vaak om **geld** *(euro's)* of **meten** *(meters/kilo's)*. Beide gebruiken kommagetallen.\n\n**Voorbeeld 1 — geld**:\n*'3 boeken van € 4,75. Hoeveel **totaal**?'*\n• 3 × €4,75 → 3 × 475 = 1425 → 2 decimalen → **€14,25**.\n\n**Voorbeeld 2 — wisselgeld**:\n*'Boodschappen kosten €7,80. Je betaalt met €10. Wisselgeld?'*\n• €10,00 − €7,80 = **€2,20**.\n\n**Voorbeeld 3 — meten**:\n*'Een touw van 5,4 m wordt in stukjes van 0,6 m geknipt. Aantal stukjes?'*\n• 5,4 ÷ 0,6 → 54 ÷ 6 = **9 stukjes**.\n\n**Voorbeeld 4 — gewicht delen**:\n*'4 kinderen delen 2,8 kg snoep gelijk. Per kind?'*\n• 2,8 kg ÷ 4 = **0,7 kg per kind** = **700 gram**.\n\n**Toets-tip — altijd eenheid mee**:\nSchrijf '€', 'kg', 'm' bij je antwoord. Veel punten worden gemist door eenheid weg te laten.\n\n**Eenheden-truc**:\n• 1 kg = 1000 gram. Dus 0,5 kg = 500 g.\n• 1 m = 100 cm. Dus 1,5 m = 150 cm.\n• 1 liter = 1000 mL. Dus 0,75 L = 750 mL.",
    checks: [
      {
        q: "Een tas van **€ 24,75** met een **€ 50-biljet**. Wisselgeld?",
        options: ["€ 25,25", "€ 25,75", "€ 24,25", "€ 74,75"],
        answer: 0,
        wrongHints: [null, "Te veel — schrijf €50 als €50,00 en trek dan af.", "Te weinig — controleer de aftrekking.", "Te veel — dat is opgeteld, niet afgetrokken."],
      },
      {
        q: "**3 boeken** van **€ 4,75** kosten samen?",
        options: ["€ 14,25", "€ 12,25", "€ 14,75", "€ 7,75"],
        answer: 0,
        wrongHints: [null, "Te weinig — je moet 3 × €4,75 doen.", "Te veel — reken 3 × €0,75 nog eens na.", "Veel te weinig — dat is alleen 1 boek + €3."],
        uitlegPad: {
          stappen: [
            { titel: "Vermenigvuldigen", tekst: "3 × €4,75. Doe 3 × 475 = 1425. 2 decimalen ná komma in 4,75. Dus €14,25." },
          ],
          woorden: [{ woord: "totaal", uitleg: "Som van alle items samen." }],
          theorie: "Geld-vermenigvuldiging: net als gewone kommagetal-vermenigvuldiging, met € erbij.",
          voorbeelden: [{ type: "stap", tekst: "3 × €4,75 = 3 × €4 + 3 × €0,75 = €12 + €2,25 = €14,25." }],
          basiskennis: [{ onderwerp: "Eenheid", uitleg: "Schrijf altijd € bij geld-antwoord." }],
          niveaus: {
            basis: "3 × €4,75 = €14,25.",
            simpeler: "3 boeken × €4,75 per boek. 3 × 475 = 1425 cent = €14,25.",
            nogSimpeler: "€14,25",
          },
        },
      },
      {
        q: "Een touw van **5,4 m** in stukken van **0,6 m**. **Aantal stukken**?",
        options: ["9 stukken", "8 stukken", "6 stukken", "0,9 stukken"],
        answer: 0,
        wrongHints: [null, "Te weinig — schuif de komma's: 54 ÷ 6.", "Te weinig — 5,4 ÷ 0,6 is meer dan 6.", "Stukken moet een heel getal zijn."],
      },
      {
        q: "**1,5 kg** suiker = **... gram**?",
        options: ["1500 gram", "150 gram", "15 gram", "15.000 gram"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel gram zit er in 1 kg? Vermenigvuldig dat met 1,5.", "Veel te weinig — kijk naar de komma.", "Te veel — komma 1 plaats te ver."],
      },
      {
        q: "**4 kinderen** delen **2,8 kg snoep** gelijk. **Per kind**?",
        options: ["0,7 kg per kind", "7 kg per kind", "11,2 kg per kind", "0,07 kg per kind"],
        answer: 0,
        wrongHints: [null, "Te veel — verdeel je 2,8 kg over 4 kinderen, dan krijgt iedereen minder dan 2,8 kg.", "Te veel — heb je gedeeld of juist vermenigvuldigd?", "Komma 1 plaats verkeerd."],
      },
      // Q12a (8 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Je koopt een ijsje van **€ 2,35** en betaalt met **€ 5**. Hoeveel krijg je **terug**?",
        options: ["€ 2,65", "€ 3,65", "€ 2,75", "€ 7,35"],
        answer: 0,
        wrongHints: [
          null,
          "Schrijf € 5 als € 5,00 en trek dan af.",
          null,
          "Terugkrijgen betekent aftrekken, niet optellen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Aftrekken",
              tekst: "€ 5,00 − € 2,35.",
            },
            {
              titel: "Uitrekenen",
              tekst: "500 − 235 = 265 cent = € 2,65.",
            },
          ],
          woorden: [
            {
              woord: "eenheid",
              uitleg: "Wat er bij het getal hoort, zoals €, kg, m of liter.",
            },
          ],
          theorie: "Wisselgeld = wat je betaalt min wat het kost.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "€ 5,00 − € 2,35 = € 2,65.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eenheid",
              uitleg: "Schrijf altijd de eenheid (€, kg, m, mL) bij je antwoord.",
            },
          ],
          niveaus: {
            basis: "€ 5,00 − € 2,35 = € 2,65.",
            simpeler: "Schrijf € 5 als € 5,00. Trek af: 500 − 235 = 265 cent. Dat is € 2,65.",
            nogSimpeler: "€ 2,65",
          },
        },
      },
      {
        q: "**0,25 liter** melk = **... mL**?",
        options: ["250 mL", "25 mL", "2500 mL", "2,5 mL"],
        answer: 0,
        wrongHints: [
          null,
          "Hoeveel mL zit er in 1 liter?",
          null,
          "Is 0,25 liter meer of minder dan 1 liter? En hoeveel mL is 1 liter?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Hoeveel mL in 1 liter?",
              tekst: "1 liter = 1000 mL.",
            },
            {
              titel: "Keer 1000",
              tekst: "0,25 × 1000 = 250 mL.",
            },
          ],
          woorden: [
            {
              woord: "eenheid",
              uitleg: "Wat er bij het getal hoort, zoals €, kg, m of liter.",
            },
          ],
          theorie: "Van liter naar mL: keer 1000.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "0,25 liter = 0,25 × 1000 mL = 250 mL.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eenheid",
              uitleg: "Schrijf altijd de eenheid (€, kg, m, mL) bij je antwoord.",
            },
          ],
          niveaus: {
            basis: "0,25 × 1000 = 250 mL.",
            simpeler: "1 liter = 1000 mL. Een kwart liter is een kwart van 1000: 250 mL.",
            nogSimpeler: "250 mL",
          },
        },
      },
      {
        q: "**1 kg** appels kost **€ 2,40**. Wat kost **0,5 kg**?",
        options: ["€ 1,20", "€ 4,80", "€ 0,24", "€ 2,90"],
        answer: 0,
        wrongHints: [
          null,
          "Is een halve kilo duurder of goedkoper dan een hele kilo?",
          null,
          "Moet je de prijs en het gewicht optellen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Wat is 0,5 kg?",
              tekst: "0,5 kg = een halve kilo.",
            },
            {
              titel: "Helft van de prijs",
              tekst: "€ 2,40 ÷ 2 = € 1,20.",
            },
          ],
          woorden: [
            {
              woord: "eenheid",
              uitleg: "Wat er bij het getal hoort, zoals €, kg, m of liter.",
            },
          ],
          theorie: "0,5 kg is de helft van 1 kg, dus het kost ook de helft.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "0,5 kg kaas van € 6,00 per kg kost € 3,00.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eenheid",
              uitleg: "Schrijf altijd de eenheid (€, kg, m, mL) bij je antwoord.",
            },
          ],
          niveaus: {
            basis: "€ 2,40 ÷ 2 = € 1,20.",
            simpeler: "0,5 kg is een halve kilo. Een halve kilo kost de helft van € 2,40. Dat is € 1,20.",
            nogSimpeler: "€ 1,20",
          },
        },
      },
      {
        q: "Mira springt **1,35 m** ver. Tom springt **1,2 m**. Hoeveel meter **verder** springt Mira?",
        options: ["0,15 m", "1,23 m", "0,33 m", "2,55 m"],
        answer: 0,
        wrongHints: [
          null,
          "Staan de komma's recht onder elkaar? Schrijf 1,2 als 1,20.",
          null,
          "Hoeveel verder vraagt om het verschil, niet om de twee sprongen samen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Komma's onder elkaar",
              tekst: "Schrijf 1,2 als 1,20.",
            },
            {
              titel: "Aftrekken",
              tekst: "1,35 − 1,20 = 0,15 m.",
            },
          ],
          woorden: [
            {
              woord: "eenheid",
              uitleg: "Wat er bij het getal hoort, zoals €, kg, m of liter.",
            },
          ],
          theorie: "Verschil = groot getal min klein getal, met de komma's recht onder elkaar.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2,45 m − 2,3 m → 2,45 − 2,30 = 0,15 m.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eenheid",
              uitleg: "Schrijf altijd de eenheid (€, kg, m, mL) bij je antwoord.",
            },
          ],
          niveaus: {
            basis: "1,35 − 1,20 = 0,15 m.",
            simpeler: "Schrijf 1,2 als 1,20. Trek af: 1,35 − 1,20 = 0,15 m. Dat is 15 cm.",
            nogSimpeler: "0,15 m",
          },
        },
      },
      {
        q: "Een pakje sap kost **€ 0,85**. Je koopt er **4**. Wat betaal je **samen**?",
        options: ["€ 3,40", "€ 3,20", "€ 4,85", "€ 34,00"],
        answer: 0,
        wrongHints: [null, "Reken 4 × 85 cent nog eens na.", null, "Moet je 4 keer € 0,85 doen, of € 0,85 + 4?"],
        uitlegPad: {
          stappen: [
            {
              titel: "Vermenigvuldigen",
              tekst: "4 × € 0,85. Doe 4 × 85 = 340 cent.",
            },
            {
              titel: "Naar euro",
              tekst: "340 cent = € 3,40.",
            },
          ],
          woorden: [
            {
              woord: "eenheid",
              uitleg: "Wat er bij het getal hoort, zoals €, kg, m of liter.",
            },
          ],
          theorie: "Geld vermenigvuldigen: reken in centen, zet daarna de komma terug.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 × € 0,65 = 195 cent = € 1,95.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eenheid",
              uitleg: "Schrijf altijd de eenheid (€, kg, m, mL) bij je antwoord.",
            },
          ],
          niveaus: {
            basis: "4 × € 0,85 = € 3,40.",
            simpeler: "Reken in centen: 4 × 85 = 340 cent. Dat is € 3,40.",
            nogSimpeler: "€ 3,40",
          },
        },
      },
    ],
  },

  // STAP 6: Doorstroomtoets-mix
  {
    title: "Eindopdracht — kommagetallen-mix",
    explanation:
      "Mix-toets in Doorstroomtoets-stijl. Door elkaar: optellen, aftrekken, vermenigvuldigen, delen + praktijk.\n\n**Tip**: zet komma's altijd recht onder elkaar bij optellen/aftrekken. Tel decimalen bij vermenigvuldigen. Verschuif komma's bij delen door een kommagetal.\n\nVeel succes!",
    checks: [
      {
        q: "**4,7 + 2,8** = ?",
        options: ["7,5", "7,15", "6,5", "75"],
        answer: 0,
        wrongHints: [null, "Komma verkeerd — reken 47 + 28, zet dan de komma terug.", "Te weinig — tel beide delen op.", "Komma vergeten."],
      },
      {
        q: "**€ 12,50 − € 3,75** = ?",
        options: ["€ 8,75", "€ 9,25", "€ 16,25", "€ 8,25"],
        answer: 0,
        wrongHints: [null, "Te veel — controleer de aftrekking.", "Dat is opgeteld, niet afgetrokken.", "Net niet — schrijf de bedragen onder elkaar."],
      },
      {
        q: "**0,6 × 0,4** = ?",
        options: ["0,24", "2,4", "0,024", "0,1"],
        answer: 0,
        wrongHints: [null, "Komma te ver naar rechts — tel hoeveel decimalen beide getallen samen hebben.", "Komma 1 plaats te ver naar links.", "Veel te weinig — reken eerst 6 × 4, dan de komma."],
      },
      {
        q: "**8,4 ÷ 0,7** = ?",
        options: ["12", "1,2", "120", "0,12"],
        answer: 0,
        wrongHints: [null, "Te weinig — heb je de komma's verschoven? (84 ÷ 7)", "Komma te ver naar rechts.", "Veel te weinig."],
      },
      {
        q: "Een doos met **0,25 kg** koekjes. **4 dozen** wegen samen?",
        options: ["1 kg", "0,5 kg", "100 kg", "0,1 kg"],
        answer: 0,
        wrongHints: [null, "Te weinig — dat is pas 2 dozen.", "Komma weg — dat is 100× te veel.", "Te weinig — tel 0,25 vier keer bij elkaar op."],
      },
      {
        q: "**2,4 m** stof = **... cm**?",
        options: ["240 cm", "24 cm", "2400 cm", "2,4 cm"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoeveel cm zit er in 1 m? Komma 1 plaats verkeerd.", "Te veel — komma 1 plaats te ver.", "Dat is hetzelfde getal — heb je wel omgerekend?"],
        uitlegPad: {
          stappen: [
            { titel: "1 m = 100 cm", tekst: "Vermenigvuldig met 100: 2,4 × 100 = 240. Dus 2,4 m = 240 cm." },
          ],
          woorden: [{ woord: "m / cm", uitleg: "Meter / centimeter. 1 m = 100 cm." }],
          theorie: "Van m naar cm = × 100. Van cm naar m = ÷ 100.",
          voorbeelden: [{ type: "stap", tekst: "2,4 m × 100 = 240 cm." }],
          basiskennis: [{ onderwerp: "Komma verschuift", uitleg: "× 100 = komma 2 plaatsen naar rechts." }],
          niveaus: {
            basis: "2,4 × 100 = 240 cm.",
            simpeler: "1 meter = 100 cm. 2,4 m = 2,4 × 100 = 240 cm.",
            nogSimpeler: "240 cm",
          },
        },
      },
      { q: "0,3 + 0,4 = ?", options: ["0,7","0,07","7","0,1"], answer: 0, wrongHints: [null, "Komma fout.", "Niet — komma vergeten.", "Niet."] },
      { q: "1,5 + 2,7 = ?", options: ["4,2","3,2","4,12","42"], answer: 0, wrongHints: [null, "Niet.", "Niet zo schrijven.", "Komma weg."] },
      { q: "5 − 0,3 = ?", options: ["4,7","4,3","5,3","53"], answer: 0, wrongHints: [null, "Niet.", "Niet — eraf, niet erbij.", "Niet."] },
      { q: "0,2 × 5 = ?", options: ["1","10","0,1","0,7"], answer: 0, wrongHints: [null, "Komma vergeten.", "Niet.", "Niet."] },
      { q: "Welke is groter: 0,5 of 0,15?", options: ["0,5","0,15","Gelijk","Niet te zeggen"], answer: 0, wrongHints: [null, "Niet — 'meer cijfers' ≠ groter.", "Niet.", "Wel — vergelijken."] },
      { q: "Schrijf ½ als kommagetal", options: ["0,5","0,2","0,1","0,05"], answer: 0, wrongHints: [null, "Dat is ⅕.", "Dat is ¹⁄₁₀.", "Dat is ¹⁄₂₀."] },
      { q: "€ 1,25 + € 0,75 = ?", options: ["€ 2,00","€ 1,50","€ 2,25","€ 20,00"], answer: 0, wrongHints: [null, "Niet.", "Niet.", "Komma weg."] },
      { q: "Rond 7,38 af op één decimaal", options: ["7,4","7,3","7,0","8,0"], answer: 0, wrongHints: [null, "Niet — 8 ≥ 5.", "Te ver.", "Te ver."] },
      { q: "0,8 × 10 = ?", options: ["8","80","0,08","0,8"], answer: 0, wrongHints: [null, "Te veel.", "Andersom.", "Niet veranderd."] },
      { q: "Welke is het kleinst: 0,4 / 0,04 / 0,44?", options: ["0,04","0,4","0,44","Gelijk"], answer: 0, wrongHints: [null, "Tiende.", "Groter.", "Niet — andere getallen."] },
      { q: "1,75 = welke breuk?", options: ["1¾","1¼","1⅓","1⅖"], answer: 0, wrongHints: [null, "Dat is 1,25.", "≈ 1,33.", "≈ 1,4."] },
      { q: "10,5 ÷ 5 = ?", options: ["2,1","2,5","21","5,5"], answer: 0, wrongHints: [null, "Niet.", "Komma weg.", "Niet."] },
      { q: "Welke is **gelijk** aan 0,25?", options: ["¼","½","⅛","⅓"], answer: 0, wrongHints: [null, "Dat is 0,5.", "Dat is 0,125.", "≈ 0,33."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const kommagetallenPo = {
  id: "kommagetallen-po",
  title: "Kommagetallen / decimalen (groep 6-8)",
  emoji: "🔢",
  level: "groep6-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Getallen — kommagetallen / decimalen",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "breuken-po", title: "Breuken", niveau: "po-1F" },
  ],
  intro:
    "Kommagetallen voor groep 6-8 — wat ze zijn, optellen/aftrekken met komma's uitgelijnd, vermenigvuldigen, delen, en Toets-praktijksommen met geld/meten. ~15 min.",
  triggerKeywords: [
    "kommagetal", "decimaal", "decimalen", "komma",
    "tienden", "honderdsten", "wisselgeld", "totaal",
  ],
  chapters,
  steps,
};

export default kommagetallenPo;

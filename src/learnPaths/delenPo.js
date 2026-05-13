// Leerpad: Delen — groep 5-6 PO.
// Cito-onderdeel rekenen. Referentieniveau 1F.
// 6 stappen met uitlegPad.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  highlight: "#ffd54f",
  groep1: "#69f0ae",
  groep2: "#80cbc4",
  groep3: "#ffd54f",
  rest: "#ff7043",
};

const stepEmojis = ["➗", "🟢", "🟡", "🔴", "🛒", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is delen?", emoji: "➗", from: 0, to: 0 },
  { letter: "B", title: "Delen door 2, 5, 10", emoji: "🟢", from: 1, to: 1 },
  { letter: "C", title: "Delen door 3, 4, 6, 7, 8, 9", emoji: "🟡", from: 2, to: 2 },
  { letter: "D", title: "Delen met rest", emoji: "🔴", from: 3, to: 3 },
  { letter: "E", title: "Praktijk — verdelen", emoji: "🛒", from: 4, to: 4 },
  { letter: "F", title: "Cito-eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function delenSvg() {
  return `<svg viewBox="0 0 320 170">
<rect x="0" y="0" width="320" height="170" fill="${COLORS.paper}"/>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.curve2}" font-size="13" font-family="Arial" font-weight="bold">12 ÷ 3 = 4 — verdelen in 3 gelijke groepen</text>
<!-- 12 stippen verdeeld in 3 groepen van 4 -->
${[0, 1, 2].map((g) => {
    let stippen = "";
    for (let i = 0; i < 4; i++) {
      const x = 35 + g * 100 + (i % 2) * 22;
      const y = 60 + Math.floor(i / 2) * 22;
      const fill = g === 0 ? COLORS.groep1 : (g === 1 ? COLORS.groep2 : COLORS.groep3);
      stippen += `<circle cx="${x}" cy="${y}" r="8" fill="${fill}" stroke="${COLORS.curve}" stroke-width="0.8"/>`;
    }
    const labelX = 60 + g * 100;
    stippen += `<text x="${labelX}" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial" font-weight="bold">groep ${g + 1}</text>`;
    stippen += `<text x="${labelX}" y="138" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">4 stuks</text>`;
    return stippen;
  }).join("")}
<text x="160" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">12 stippen ÷ 3 groepen = 4 stippen per groep</text>
</svg>`;
}

const steps = [
  // STAP 1: Wat is delen?
  {
    title: "Wat is delen?",
    explanation:
      "**Delen** is het tegenovergestelde van **vermenigvuldigen**.\n\n**Voorbeeld 1 — verdelen in groepen**:\n*'12 snoepjes verdeel je over 3 kinderen.'*\n• 12 ÷ 3 = **4 snoepjes per kind**.\n\n**Voorbeeld 2 — hoeveel groepen passen erin?**:\n*'Een doos met 24 koekjes; 6 koekjes per zakje. Hoeveel zakjes?'*\n• 24 ÷ 6 = **4 zakjes**.\n\n**Symbool**: **÷** of **/** of **:**\n• 20 ÷ 4 = 5.\n• 20 / 4 = 5.\n• 20 : 4 = 5.\nAllemaal hetzelfde.\n\n**Verschil tussen × en ÷**:\n• 3 × 4 = 12 *(samenvoegen)*.\n• 12 ÷ 4 = 3 *(opdelen)*.\n• 12 ÷ 3 = 4 *(opdelen anders)*.\n\nDelen is de **omgekeerde** van keer. Als 4 × 3 = 12, dan 12 ÷ 3 = 4 en 12 ÷ 4 = 3.\n\n**Cito-truc — gebruik tafel terug**:\nVoor 18 ÷ 3: denk *'wat keer 3 is 18?'*. Antwoord: **6 keer**. Dus 18 ÷ 3 = **6**.\n\n**Belangrijke termen**:\n• **Deeltal** = wat je deelt *(in 12 ÷ 3 is dat 12)*.\n• **Deler** = waardoor je deelt *(de 3)*.\n• **Quotiënt** = uitkomst *(de 4)*.\n\nMaar je hoeft die termen niet uit het hoofd te leren — Cito vraagt het zelden.\n\n**Pas op — delen door 1 en door zichzelf**:\n• 7 ÷ 1 = **7** *(elk getal blijft hetzelfde gedeeld door 1)*.\n• 7 ÷ 7 = **1** *(elk getal door zichzelf = 1)*.\n• 0 ÷ 7 = **0** *(0 verdeeld geeft 0)*.\n• 7 ÷ 0 = **mag niet!** *(delen door 0 bestaat niet)*.",
    svg: delenSvg(),
    checks: [
      {
        q: "Wat is **12 ÷ 4**?",
        options: ["3", "8", "16", "48"],
        answer: 0,
        wrongHints: [null, "Klopt — 4 × 3 = 12.", "Optelling? 12-4 = 8.", "Optelling 12+4.", "Vermenigvuldiging."],
        uitlegPad: {
          stappen: [
            { titel: "Wat betekent 12 ÷ 4?", tekst: "**12 ÷ 4** = '**12 verdelen over 4**'. Bijvoorbeeld: je hebt 12 snoepjes en 4 vriendjes. Elk vriendje krijgt evenveel. Hoeveel per vriendje?" },
            { titel: "Tafel-truc terugzoeken", tekst: "Denk: '**wat keer 4 is 12?**'. Antwoord uit de tafel van 4: **3 × 4 = 12**. Dus 12 ÷ 4 = **3**. Elke deling is een tafel-som omgekeerd." },
            { titel: "Visueel - leg 12 dingen neer", tekst: "Stel je 12 fiches voor. Leg ze in 4 gelijke rijtjes. Hoeveel per rijtje? 3. Dus: 12 ÷ 4 = 3. Of: 4 rijtjes van 3 = 12 (omgekeerd: 4 × 3 = 12)." },
          ],
          woorden: [
            { woord: "delen", uitleg: "Iets eerlijk verdelen in evenveel-grote groepen." },
            { woord: "÷", uitleg: "Deelteken — kan ook : of / zijn." },
          ],
          theorie: "Cito-truc voor delen: zoek de **tafel terug**. 12 ÷ 4 → wat × 4 = 12? → 3. 20 ÷ 5 → wat × 5 = 20? → 4. Werk altijd via de bekende tafel-rij.",
          voorbeelden: [
            { type: "stap", tekst: "**15 ÷ 3** → wat × 3 = 15? → 5. Antwoord: 5." },
            { type: "stap", tekst: "**24 ÷ 6** → wat × 6 = 24? → 4. Antwoord: 4." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Delen = tafel terug. Vermenigvuldigen + delen zijn elkaars tegen-bewerking. Eén oefenen helpt ook de andere." }],
          niveaus: {
            basis: "12 ÷ 4 = 3. = A.",
            simpeler: "12 verdeeld over 4 gelijke groepen = 3 per groep. = A.",
            nogSimpeler: "3 = A.",
          },
        },
      },
      {
        q: "Wat is **20 ÷ 5**?",
        options: ["4", "15", "25", "100"],
        answer: 0,
        wrongHints: [null, "Klopt — 5 × 4 = 20.", "Aftrekking.", "Optelling.", "Vermenigvuldiging."],
      },
      {
        q: "Wat is **9 ÷ 1**?",
        options: ["9", "1", "0", "10"],
        answer: 0,
        wrongHints: [null, "Klopt — delen door 1 verandert niets.", "9 ÷ 9, niet 9 ÷ 1.", "Niet nul.", "Optelling."],
      },
      {
        q: "Wat is **8 ÷ 8**?",
        options: ["1", "0", "8", "16"],
        answer: 0,
        wrongHints: [null, "Klopt — elk getal door zichzelf = 1.", "Niet nul — pas op.", "Geen verandering = 1.", "Vermenigvuldiging."],
      },
    ],
  },

  // STAP 2: Delen door 2, 5, 10
  {
    title: "Makkelijke delingen — door 2, 5 en 10",
    explanation:
      "**Delen door 10** — 0 weghalen / komma 1 plek naar links:\n• 30 ÷ 10 = 3\n• 70 ÷ 10 = 7\n• 100 ÷ 10 = 10\n• 250 ÷ 10 = 25\n\n**Delen door 5** — verdubbelen en dan ÷ 10:\n• 35 ÷ 5 = (35 × 2) ÷ 10 = 70 ÷ 10 = **7**.\n• 50 ÷ 5 = 10.\n• Of gewoon tafel-5 terug: 'wat × 5 = 35?' → 7.\n\n**Delen door 2** — gewoon halveren:\n• 8 ÷ 2 = 4\n• 14 ÷ 2 = 7\n• 30 ÷ 2 = 15\n• 18 ÷ 2 = 9\n\n**Cito-truc**:\n• Delen door 10 → cijfer komma 1 plek naar links *(of een 0 weg)*.\n• Delen door 5 → ÷ 10 en × 2.\n• Delen door 2 → halveren (helft pakken).\n\n**Voorbeelden**:\n• 60 ÷ 10 = **6**.\n• 60 ÷ 5 = **12** *(60 ÷ 10 × 2 = 6 × 2)*.\n• 60 ÷ 2 = **30**.\n\n**Slim — combinatie van trucs**:\n*'40 ÷ 2 = ?'* — halveren: 40/2 = 20.\n*'80 ÷ 10 = ?'* — 0 eraf: 8.\n*'45 ÷ 5 = ?'* — tafel-5 terug: 9 × 5 = 45 → antwoord 9.",
    checks: [
      {
        q: "**24 ÷ 2** = ?",
        options: ["12", "22", "48", "26"],
        answer: 0,
        wrongHints: [null, "Klopt — helft van 24.", "Aftrekking.", "Vermenigvuldiging.", "Optelling."],
      },
      {
        q: "**40 ÷ 10** = ?",
        options: ["4", "30", "400", "50"],
        answer: 0,
        wrongHints: [null, "Klopt — 0 eraf.", "Aftrekking.", "Vermenigvuldiging.", "Optelling."],
      },
      {
        q: "**35 ÷ 5** = ?",
        options: ["7", "30", "40", "175"],
        answer: 0,
        wrongHints: [null, "Klopt — 7 × 5 = 35.", "Aftrekking.", "Optelling.", "Vermenigvuldiging."],
      },
      {
        q: "**100 ÷ 10** = ?",
        options: ["10", "1", "1000", "110"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te weinig.", "Vermenigvuldiging.", "Optelling."],
      },
    ],
  },

  // STAP 3: Delen door 3 t/m 9
  {
    title: "Delen door 3 t/m 9",
    explanation:
      "De **tafel terugzoeken** is bij delen door 3-9 essentieel.\n\n**Voorbeeld**: 28 ÷ 7 = ?\n→ Denk: 'wat × 7 = 28?' → 4 × 7 = 28. Dus 28 ÷ 7 = **4**.\n\n**Delingen die je vaak ziet** *(uit je hoofd handig)*:\n\n**Door 3**:\n• 9 ÷ 3 = 3\n• 12 ÷ 3 = 4\n• 15 ÷ 3 = 5\n• 18 ÷ 3 = 6\n• 21 ÷ 3 = 7\n• 24 ÷ 3 = 8\n• 27 ÷ 3 = 9\n• 30 ÷ 3 = 10\n\n**Door 4**:\n• 16 ÷ 4 = 4\n• 20 ÷ 4 = 5\n• 24 ÷ 4 = 6\n• 28 ÷ 4 = 7\n• 32 ÷ 4 = 8\n• 36 ÷ 4 = 9\n\n**Door 6**:\n• 24 ÷ 6 = 4\n• 30 ÷ 6 = 5\n• 36 ÷ 6 = 6\n• 42 ÷ 6 = 7\n• 48 ÷ 6 = 8\n• 54 ÷ 6 = 9\n\n**Door 7**:\n• 21 ÷ 7 = 3\n• 28 ÷ 7 = 4\n• 35 ÷ 7 = 5\n• 42 ÷ 7 = 6\n• 49 ÷ 7 = 7\n• 56 ÷ 7 = 8\n• 63 ÷ 7 = 9\n\n**Door 8**:\n• 32 ÷ 8 = 4\n• 40 ÷ 8 = 5\n• 48 ÷ 8 = 6\n• 56 ÷ 8 = 7\n• 64 ÷ 8 = 8\n• 72 ÷ 8 = 9\n\n**Door 9**:\n• 27 ÷ 9 = 3\n• 36 ÷ 9 = 4\n• 45 ÷ 9 = 5\n• 54 ÷ 9 = 6\n• 63 ÷ 9 = 7\n• 72 ÷ 9 = 8\n• 81 ÷ 9 = 9\n\n**Cito-truc — schatten**:\nBij grote getallen — schat eerst.\n*'63 ÷ 7 = ?'* Schatting: 70/7 = 10. Dus iets onder 10. Inderdaad: 9.",
    checks: [
      {
        q: "**24 ÷ 3** = ?",
        options: ["8", "27", "21", "72"],
        answer: 0,
        wrongHints: [null, "Klopt — 3 × 8 = 24.", "Optelling.", "Aftrekking.", "Vermenigvuldiging."],
        uitlegPad: {
          stappen: [
            { titel: "Tafel van 3 opzeggen", tekst: "Zeg de tafel van 3 op tot je 24 hoort: **3, 6, 9, 12, 15, 18, 21, 24**. Welke stap? Tel mee: 1-2-3-4-5-6-7-**8**. De **8e stap** levert 24. Dus 24 ÷ 3 = **8**." },
            { titel: "Andersom check", tekst: "Check: 3 × 8 = 24 ✓. Dus 24 ÷ 3 = 8 klopt. Bij elke deling moet de tafel-controle uitkomen op het oorspronkelijke deeltal." },
            { titel: "Wat als je vastloopt?", tekst: "Tafel-3 niet helemaal uit je hoofd? Bouw stappen van 3: 3+3=6, +3=9, +3=12, +3=15, +3=18, +3=21, +3=24. **8 stappen** = 8 keer 3 = 24. Antwoord: 8." },
          ],
          woorden: [
            { woord: "tafel terugzoeken", tekst: "Bij delen: welke factor maakt het deeltal? = antwoord." },
          ],
          theorie: "Cito-truc voor delen door 3: tafel-3 is een veel-voorkomende. Leer hem **uit het hoofd**: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Bij elke ÷3 vraag → tel waar het getal staat.",
          voorbeelden: [
            { type: "stap", tekst: "**18 ÷ 3** = 6 (18 is 6e stap: 3, 6, 9, 12, 15, **18**)." },
            { type: "stap", tekst: "**27 ÷ 3** = 9 (27 is 9e stap)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Tafel-3 reciteren: 3, 6, 9, 12, 15, 18, 21, 24, 27, 30. Voor ÷3 zoek je gewoon de positie van het getal in deze rij." }],
          niveaus: {
            basis: "24 ÷ 3 = 8. = A.",
            simpeler: "Tel tafel-3: 3, 6, 9, 12, 15, 18, 21, 24. 24 is de 8e. = A.",
            nogSimpeler: "8 = A.",
          },
        },
      },
      {
        q: "**56 ÷ 7** = ?",
        options: ["8", "49", "63", "9"],
        answer: 0,
        wrongHints: [null, "Klopt — 7 × 8 = 56.", "Aftrekking.", "Optelling.", "Net niet — controleer."],
      },
      {
        q: "**63 ÷ 9** = ?",
        options: ["7", "54", "72", "8"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Aftrekking.", "Optelling.", "Net niet."],
        uitlegPad: {
          stappen: [
            { titel: "Tafel terug", tekst: "Denk: 9 × ? = 63. Tafel-9: 9, 18, 27, 36, 45, 54, 63. 63 is de 7e. Dus 63 ÷ 9 = 7." },
          ],
          woorden: [{ woord: "tafel terug", uitleg: "Voor delen: zoek welke vermenigvuldiging hetzelfde getal geeft." }],
          theorie: "Delen = omgekeerde van vermenigvuldigen.",
          voorbeelden: [{ type: "stap", tekst: "63 ÷ 9: zoek wat × 9 = 63. Antwoord: 7." }],
          basiskennis: [{ onderwerp: "Tafels kennen", uitleg: "Vlot delen vereist vlot tafels." }],
          niveaus: {
            basis: "7. A.",
            simpeler: "Wat keer 9 is 63? Tafel-9 op: 9, 18, 27, 36, 45, 54, 63. Dat is de 7e. Dus 63 ÷ 9 = 7. = A.",
            nogSimpeler: "7 = A.",
          },
        },
      },
      {
        q: "**48 ÷ 6** = ?",
        options: ["8", "42", "54", "9"],
        answer: 0,
        wrongHints: [null, "Klopt — 6 × 8 = 48.", "Aftrekking.", "Optelling.", "Net niet."],
      },
    ],
  },

  // STAP 4: Delen met rest
  {
    title: "Delen met rest",
    explanation:
      "Soms gaat een deling **niet precies op**. Dan blijft er een **rest** over.\n\n**Voorbeeld**: 11 ÷ 3 = ?\n• 3 × 3 = 9 *(net niet 11)*.\n• 3 × 4 = 12 *(te veel)*.\n• Dus 11 ÷ 3 = **3 rest 2**.\n\nWaarom rest 2? 11 − 9 = 2. *(11 = 3 × 3 + 2.)*\n\n**Schrijfwijze**:\n• 11 ÷ 3 = **3 rest 2** *(meeste Cito)*.\n• 11 ÷ 3 = **3 r 2** *(verkort)*.\n• 11 ÷ 3 = **3⅔** *(met breuk: rest÷deler = 2/3)*.\n\n**Stappenplan**:\n1. Zoek de **grootste tafel-keer** die NIET groter is dan het deeltal.\n2. **Trek af** om de rest te vinden.\n3. Schrijf 'rest X'.\n\n**Cito-voorbeelden**:\n• 17 ÷ 5 = 3 rest 2 *(want 5×3=15, 17-15=2)*.\n• 22 ÷ 4 = 5 rest 2 *(want 4×5=20, 22-20=2)*.\n• 30 ÷ 7 = 4 rest 2 *(want 7×4=28, 30-28=2)*.\n• 50 ÷ 8 = 6 rest 2 *(want 8×6=48)*.\n\n**Cito-truc — rest 0**:\nAls het precies opgaat: rest = 0.\n• 20 ÷ 4 = 5 rest 0.\nMeestal schrijf je dan gewoon 'rest 0' niet — gewoon 'precies 5'.\n\n**Praktijk-vraag — wat doe je met rest?**:\nSoms moet je **afronden naar boven** *(want de rest moet ook ergens heen)*:\n• 'In 1 doos passen 6 ballen. Hoeveel dozen voor 20 ballen?'\n• 20 ÷ 6 = 3 rest 2 → je hebt **4 dozen nodig** *(3 vol + 1 extra voor de rest)*.\n\nSoms **afronden naar beneden** *(want rest hou je over)*:\n• 'Per fles 5 glazen. Hoeveel glazen uit 23 flessen?'\n• 23 × 5 = 115 → dan 115 ÷ niet relevant. Toch gewoon: 23 ÷ 5 = 4 rest 3. Maar hier vraag is anders. Skip dit voorbeeld voor nu.\n\nDe **Cito-strikvraag** test of je weet **wanneer je naar boven afrondt** (dozen, dragen).",
    checks: [
      {
        q: "**11 ÷ 3** = ?",
        options: ["3 rest 2", "4 rest 1", "3 rest 1", "Onmogelijk"],
        answer: 0,
        wrongHints: [null, "Klopt — 3×3=9, 11-9=2.", "4×3=12 (te veel).", "11-9=2, niet 1.", "Wel mogelijk."],
      },
      {
        q: "**17 ÷ 5** = ?",
        options: ["3 rest 2", "4 rest 0", "2 rest 7", "5 rest 0"],
        answer: 0,
        wrongHints: [null, "Klopt — 5×3=15.", "4×5=20 (te veel).", "Klopt qua getallen maar 5×2=10, 17-10=7 is meer dan 5 = nog 1 ÷ erbij.", "Onmogelijk — 17÷5 niet 5."],
      },
      {
        q: "Een kind krijgt **20 snoepjes**. Hij verdeelt over **3 vriendjes**. Hoeveel per vriendje, hoeveel rest?",
        options: ["6 rest 2", "7 rest 0", "5 rest 5", "6 rest 1"],
        answer: 0,
        wrongHints: [null, "Klopt — 3×6=18, 20-18=2.", "Niet — 7×3=21 (te veel).", "Klopt qua getallen 5×3=15, maar 20-15=5 is meer dan 3 = nog 1 ÷.", "Net niet — controleer 3×6=18, 20-18=2."],
      },
      {
        q: "In 1 doos passen **6 eieren**. Je hebt **20 eieren**. Hoeveel dozen heb je nodig?",
        options: ["4 dozen", "3 dozen", "20 dozen", "6 dozen"],
        answer: 0,
        wrongHints: [null, "Klopt — 20÷6 = 3 rest 2. De 2 extra moeten OOK in een doos = 4 totaal.", "Te weinig — 3 dozen = 18 eieren, dan 2 over.", "Veel te veel.", "Te veel — meer dan nodig."],
        uitlegPad: {
          stappen: [
            { titel: "Verdeel + rest", tekst: "20 ÷ 6 = 3 rest 2. In 3 dozen passen 18 eieren. 2 eieren blijven over." },
            { titel: "Naar boven afronden", tekst: "Die 2 extra eieren moeten ook in een doos. Dus 3 vol + 1 doos met 2 = 4 dozen nodig." },
          ],
          woorden: [{ woord: "afronden naar boven", uitleg: "Bij 'hoeveel dozen' altijd naar boven afronden, want rest moet ook in een doos." }],
          theorie: "Bij Cito-doos-vragen: rest > 0 → +1 doos.",
          voorbeelden: [{ type: "stap", tekst: "Bij 'aantal containers/dozen': rest = extra container nodig." }],
          basiskennis: [{ onderwerp: "Niet afsnijden", uitleg: "Je kunt geen halve doos hebben." }],
          niveaus: {
            basis: "4 dozen. A.",
            simpeler: "20 eieren ÷ 6 per doos = 3 dozen vol + 2 eieren over. Die 2 ook in een doos = 4 dozen totaal. = A.",
            nogSimpeler: "4 dozen = A.",
          },
        },
      },
    ],
  },

  // STAP 5: Praktijk
  {
    title: "Praktijk — verdelen en prijs-per-stuk",
    explanation:
      "Cito-praktijksommen draaien vaak om **eerlijk verdelen** of **prijs per stuk**.\n\n**Voorbeeld 1 — verdelen**:\n*'Een zak van 24 dropjes verdeel je over 4 kinderen. Hoeveel krijgen ze elk?'*\n• 24 ÷ 4 = **6 dropjes per kind**.\n\n**Voorbeeld 2 — prijs per stuk**:\n*'5 boeken kosten samen €25. Hoe duur is 1 boek?'*\n• €25 ÷ 5 = **€5 per boek**.\n\n**Voorbeeld 3 — hoeveel passen erin?**:\n*'In 1 bus passen 50 mensen. Voor schoolreis zijn er 200 kinderen. Hoeveel bussen?'*\n• 200 ÷ 50 = **4 bussen**.\n\n**Voorbeeld 4 — met rest (afronden naar boven)**:\n*'In 1 doos passen 8 ballen. Hoeveel dozen voor 50 ballen?'*\n• 50 ÷ 8 = 6 rest 2.\n• Dus **7 dozen** nodig (rest moet ook ergens heen).\n\n**Voorbeeld 5 — geld delen**:\n*'4 kinderen verdelen €36 gelijk. Hoeveel per kind?'*\n• €36 ÷ 4 = **€9 per kind**.\n\n**Voorbeeld 6 — tafels in actie**:\n*'Een leerkracht maakt groepjes van 4. De klas heeft 28 kinderen. Hoeveel groepjes?'*\n• 28 ÷ 4 = **7 groepjes**.\n\n**Cito-tip**:\n• 'Hoeveel **per** stuk?' → delen.\n• 'Hoeveel **groepjes** van X?' → delen.\n• 'Hoeveel **dozen/zakjes** nodig?' → delen + naar boven afronden.\n• 'Hoeveel **passen erin**?' → delen + naar **beneden** afronden *(want te veel past niet)*.",
    checks: [
      {
        q: "**32 koekjes** over **8 kinderen** eerlijk. **Per kind**?",
        options: ["4 koekjes", "3 koekjes", "5 koekjes", "8 koekjes"],
        answer: 0,
        wrongHints: [null, "Klopt — 32 ÷ 8 = 4.", "Te weinig — 3×8=24, niet 32.", "Te veel — 5×8=40.", "Te veel — dan alle koekjes per kind."],
        uitlegPad: {
          stappen: [
            { titel: "Welk teken gebruik je?", tekst: "**32 koekjes verdelen over 8 kinderen** = delen. Symbool **÷**. De som: **32 ÷ 8 = ?**" },
            { titel: "Reken: 32 ÷ 8", tekst: "Tafel terug: wat × 8 = 32? Tafel-8: 8, 16, 24, **32**. De 4e stap. Dus **32 ÷ 8 = 4**. Elk kind krijgt 4 koekjes." },
            { titel: "Check je antwoord", tekst: "Klopt het? **8 kinderen × 4 koekjes = 32 koekjes** totaal ✓. Som is rond — geen koekjes blijven over." },
          ],
          woorden: [
            { woord: "eerlijk verdelen", uitleg: "Iedereen krijgt evenveel = delen." },
            { woord: "per kind", uitleg: "Signaalwoord 'per' = delen." },
          ],
          theorie: "Cito-truc redactiesommen — signaalwoorden:\n• **'per'** / **'elk'** / **'iedere'** / **'eerlijk verdelen'** → DELEN\n• **'totaal'** / **'samen'** → meestal × of +\n• **'over X groepen'** → delen door X.",
          voorbeelden: [
            { type: "stap", tekst: "**'48 appels in dozen van 6'** → 48 ÷ 6 = 8 dozen." },
            { type: "stap", tekst: "**'€60 over 5 kinderen'** → 60 ÷ 5 = €12 per kind." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "'PER' = deel-teken. Schrijf elke redactiesom om naar een gewone som met getallen + ÷." }],
          niveaus: {
            basis: "32 ÷ 8 = 4 koekjes per kind. = A.",
            simpeler: "32 koekjes verdelen over 8 kinderen = 32 ÷ 8 = 4. = A.",
            nogSimpeler: "4 = A.",
          },
        },
      },
      {
        q: "**5 appels** voor **€2,50** totaal. Prijs **per appel**?",
        options: ["€0,50", "€2,50", "€5,00", "€1,25"],
        answer: 0,
        wrongHints: [null, "Klopt — €2,50 ÷ 5 = €0,50.", "Dat is alle samen.", "Te veel.", "Net niet."],
      },
      {
        q: "**56 kinderen** in **groepjes van 7**. Hoeveel **groepjes**?",
        options: ["8 groepjes", "7 groepjes", "9 groepjes", "56 groepjes"],
        answer: 0,
        wrongHints: [null, "Klopt — 56 ÷ 7 = 8.", "Niet — 7×7=49, 7×8=56.", "Te veel.", "Te veel — dat is iedereen apart."],
      },
      {
        q: "Een doos heeft **6 chocolaatjes**. Hoeveel **dozen** voor **40 chocolaatjes**?",
        options: ["7 dozen", "6 dozen", "5 dozen", "8 dozen"],
        answer: 0,
        wrongHints: [null, "Klopt — 40÷6 = 6 rest 4. Rest naar boven = 7 dozen.", "6 dozen = 36 chocolaatjes (te weinig).", "Te weinig.", "Te veel — 7 is genoeg."],
      },
    ],
  },

  // STAP 6: Cito-mix
  {
    title: "Cito-eindopdracht — delen-mix",
    explanation:
      "Mix-toets in Cito-stijl. Door elkaar: gewone delingen, rest, verdelen, prijs-per-stuk.\n\nVeel succes!",
    checks: [
      {
        q: "**45 ÷ 9** = ?",
        options: ["5", "36", "54", "9"],
        answer: 0,
        wrongHints: [null, "Klopt — 9 × 5 = 45.", "Aftrekking.", "Optelling.", "Net niet."],
      },
      {
        q: "**72 ÷ 8** = ?",
        options: ["9", "64", "80", "8"],
        answer: 0,
        wrongHints: [null, "Klopt — 8 × 9 = 72.", "Aftrekking.", "Optelling.", "Net niet."],
      },
      {
        q: "**25 ÷ 4** = ?",
        options: ["6 rest 1", "7 rest 0", "5 rest 5", "6 rest 0"],
        answer: 0,
        wrongHints: [null, "Klopt — 4×6=24, 25-24=1.", "4×7=28 (te veel).", "Geen rest > deler.", "25-24=1, niet 0."],
      },
      {
        q: "**8 kinderen** verdelen **€40** eerlijk. **Per kind**?",
        options: ["€5", "€40", "€8", "€48"],
        answer: 0,
        wrongHints: [null, "Klopt — €40 ÷ 8 = €5.", "Alle samen.", "Niet zo veel per kind.", "Optelling."],
      },
      {
        q: "**63 ÷ 7** = ?",
        options: ["9", "56", "70", "8"],
        answer: 0,
        wrongHints: [null, "Klopt — 7 × 9 = 63.", "Aftrekking.", "Optelling.", "Net niet."],
      },
      {
        q: "**1 box per 6 boeken**. **50 boeken** in totaal. Hoeveel **boxen**?",
        options: ["9 boxen", "8 boxen", "10 boxen", "6 boxen"],
        answer: 0,
        wrongHints: [null, "Klopt — 50÷6 = 8 rest 2. Rest naar boven = 9 boxen.", "8 = 48 boeken (te weinig).", "Te veel.", "Veel te weinig."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const delenPo = {
  id: "delen-po",
  title: "Delen (groep 5-6)",
  emoji: "➗",
  level: "groep5-6",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Rekenen — delen",
  prerequisites: [
    { id: "tafels-po", title: "Vermenigvuldigingstafels", niveau: "po-1F" },
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
  ],
  intro:
    "Delen voor groep 5-6 — wat is delen, makkelijke (÷2/5/10), tafel-terug (÷3-9), delen met rest, praktijksommen. Bouwt voort op tafelsPo. ~15 min.",
  triggerKeywords: [
    "delen", "deling", "verdelen",
    "per stuk", "per kind", "groepjes",
    "rest", "tafel terug",
  ],
  chapters,
  steps,
};

export default delenPo;

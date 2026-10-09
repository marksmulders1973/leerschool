// Leerpad: Verhoudingen — voor groep 5-8 (PO-versie)
// 6 stappen in 5 hoofdstukken. Doorstroomtoets-stijl praktijksommen.
// Sprint-5+ S4 (2026-05-08).

const COLORS = {
  curve: "#00c853",
  curveAlt: "#ff7043",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = ["⚖️","🍋","📋","🍪","🗺️","🏆"];

const chapters = [
  { letter: "A", title: "Wat is een verhouding?", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Recepten — siroop en water", emoji: "🍋", from: 1, to: 1 },
  { letter: "C", title: "Verhoudingstabel", emoji: "📋", from: 2, to: 2 },
  { letter: "D", title: "Recepten omrekenen + schaal", emoji: "🍪", from: 3, to: 4 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 5, to: 5 },
];

function siroopSvg() {
  return `<svg viewBox="0 0 300 200">
<rect x="0" y="0" width="300" height="200" fill="${COLORS.paper}"/>
<text x="150" y="22" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">Limonade-recept: 1 : 4</text>
<rect x="40" y="60" width="50" height="80" fill="rgba(255,213,79,0.55)" stroke="${COLORS.point}" stroke-width="2"/>
<text x="65" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">1</text>
<text x="65" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">siroop</text>
<text x="105" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial" font-weight="bold">:</text>
<rect x="120" y="60" width="140" height="80" fill="rgba(105,178,255,0.3)" stroke="#69b2ff" stroke-width="2"/>
<text x="190" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">4</text>
<text x="190" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">water</text>
<text x="150" y="188" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">5 delen totaal: 1 deel siroop + 4 delen water</text>
</svg>`;
}

function tabelSvg() {
  return `<svg viewBox="0 0 320 180">
<rect x="0" y="0" width="320" height="180" fill="${COLORS.paper}"/>
<text x="160" y="20" text-anchor="middle" fill="${COLORS.curve}" font-size="14" font-family="Arial" font-weight="bold">Verhoudingstabel — limonade</text>
<rect x="20" y="35" width="280" height="120" fill="rgba(0,200,83,0.05)" stroke="${COLORS.curve}" stroke-width="1.2" rx="6"/>
<text x="80" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">siroop (mL)</text>
<text x="240" y="58" text-anchor="middle" fill="${COLORS.text}" font-weight="bold" font-size="13" font-family="Arial">water (mL)</text>
<line x1="20" y1="68" x2="300" y2="68" stroke="${COLORS.curve}" stroke-width="0.8"/>
<line x1="160" y1="35" x2="160" y2="155" stroke="${COLORS.curve}" stroke-width="0.5"/>
<text x="80" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">100</text>
<text x="240" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">400</text>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">200</text>
<text x="240" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">800</text>
<text x="80" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">300</text>
<text x="240" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial">1200</text>
</svg>`;
}

const steps = [
  {
    title: "Wat is een verhouding?",
    explanation: "Een **verhouding** zegt hoe twee dingen zich tot elkaar **verhouden**. Niet de losse getallen, maar de **verhouding** ertussen.\n\n**Voorbeelden**:\n• In een klas zitten 8 jongens en 12 meisjes. Verhouding **jongens : meisjes = 8 : 12 = 2 : 3**.\n• Een limonade-recept: 1 deel siroop op 4 delen water. Verhouding **1 : 4**.\n• Op een schoolplein 50 fietsen en 25 steps. Verhouding **2 : 1**.\n\n**Notatie**: we schrijven het met een **dubbelpunt** ':' (lees: 'tot').\n\n**Vereenvoudigen**: net als breuken kun je verhoudingen kleiner maken door beide getallen door hetzelfde te delen.\n• 8 : 12 → ÷4 → **2 : 3**\n• 50 : 25 → ÷25 → **2 : 1**\n• 100 : 400 → ÷100 → **1 : 4**\n\n**Verschil met breuk**:\n• 2/5 betekent: 2 delen van een totaal van 5.\n• 2 : 3 betekent: 2 delen naast 3 delen — totaal 5 delen.\n\n**Toets-tip**: kijk altijd of je een verhouding kunt **vereenvoudigen** voordat je verder rekent. Dat scheelt!",
    svg: siroopSvg(),
    checks: [
      {
        q: "**12 jongens en 18 meisjes** — vereenvoudigde verhouding?",
        options: ["2 : 3","12 : 18","3 : 2","1 : 1"],
        answer: 0,
        wrongHints: [null,"Klopt in aantal, maar niet vereenvoudigd. Welk getal deelt 12 én 18?","Volgorde klopt niet — vraag begint met jongens.","Past dat bij meer meisjes dan jongens?"],
        uitlegPad: {
          stappen: [{ titel: "Beide ÷6", tekst: "12÷6=2. 18÷6=3. → 2 : 3." }],
          woorden: [{ woord: "vereenvoudigen verhouding", uitleg: "Beide kanten door zelfde getal delen (zoals breuken)." }],
          theorie: "GGD van 12 en 18 = 6. Beide ÷6 → 2:3.",
          voorbeelden: [{ type: "stap", tekst: "12:18 → ÷6 → 2:3. Of stap-voor-stap: ÷2 → 6:9, ÷3 → 2:3." }],
          basiskennis: [{ onderwerp: "Volgorde behouden", uitleg: "Jongens blijft eerst (12 → 2). Meisjes blijft tweede (18 → 3)." }],
          niveaus: { basis: "2 : 3.", simpeler: "12 en 18 beide ÷6: 12÷6=2, 18÷6=3 → 2:3 (jongens : meisjes).", nogSimpeler: "2:3" },
        },
      },
      {
        q: "Een verhouding **6 : 9** — vereenvoudigd?",
        options: ["2 : 3","3 : 2","6 : 9","1 : 1"],
        answer: 0,
        wrongHints: [null,"Andersom — kijk naar de volgorde.","Niet vereenvoudigd. Beide getallen kun je door iets delen.","Is 6 hetzelfde als 9?"],
        uitlegPad: {
          stappen: [{ titel: "Beide ÷3", tekst: "6÷3=2. 9÷3=3. → 2 : 3." }],
          woorden: [{ woord: "GGD 3", uitleg: "Grootste gemene deler van 6 en 9 = 3." }],
          theorie: "Verhouding-vereenvoudigen: zoek grootste deler waar beide door deelbaar zijn.",
          voorbeelden: [{ type: "stap", tekst: "6:9 → ÷3 → 2:3." }],
          basiskennis: [{ onderwerp: "Volgorde behouden", uitleg: "6 blijft eerste, 9 blijft tweede (verhouding behoudt richting)." }],
          niveaus: { basis: "2 : 3.", simpeler: "6 en 9 beide ÷3: 6÷3=2, 9÷3=3 → 2:3.", nogSimpeler: "2:3" },
        },
      },
      {
        q: "Op het strand staan **20 fietsen en 5 brommers**. Verhouding fietsen:brommers vereenvoudigd?",
        options: ["4 : 1","20 : 5","1 : 4","5 : 20"],
        answer: 0,
        wrongHints: [null,"Niet vereenvoudigd — beide door 5 delen.","Andersom — fietsen staan eerst.","Niet vereenvoudigd, en andersom."],
        uitlegPad: {
          stappen: [{ titel: "Beide ÷5", tekst: "20÷5=4. 5÷5=1. → 4 : 1 (fietsen : brommers)." }],
          woorden: [{ woord: "verhouding-volgorde", uitleg: "Eerst genoemde categorie staat links." }],
          theorie: "Vraag-volgorde bepaalt: 'fietsen:brommers' → 20:5 → 4:1.",
          voorbeelden: [{ type: "stap", tekst: "20:5 → ÷5 → 4:1." }],
          basiskennis: [{ onderwerp: "Niet omdraaien", uitleg: "1:4 zou brommers:fietsen zijn. Vraag = fietsen:brommers." }],
          niveaus: { basis: "4 : 1.", simpeler: "Fietsen:brommers = 20:5. Beide ÷5 → 4:1. (4 fietsen op elke 1 brommer).", nogSimpeler: "4:1" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "In een vaas staan **4 rode** en **8 gele** tulpen. Wat is de verhouding rood : geel, zo eenvoudig mogelijk?",
        options: ["1 : 2", "2 : 1", "4 : 8", "1 : 3"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk goed naar de volgorde in de vraag: welke kleur komt eerst?",
          "Dit klopt wel, maar het kan nog eenvoudiger. Door welk getal kun je 4 én 8 delen?",
          "Vergelijk je rood met álle tulpen? De vraag gaat over rood naast geel.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Beide ÷4",
              tekst: "Rood : geel = 4 : 8. 4÷4=1. 8÷4=2. → 1 : 2.",
            },
          ],
          woorden: [
            {
              woord: "vereenvoudigen",
              uitleg: "Beide getallen door hetzelfde getal delen.",
            },
          ],
          theorie: "4 en 8 kun je allebei door 4 delen. 4 : 8 wordt 1 : 2.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 : 8 → ÷4 → 1 : 2. Op elke rode tulp komen 2 gele.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Volgorde",
              uitleg: "Rood staat eerst in de vraag, dus rood staat links: 1 : 2, niet 2 : 1.",
            },
          ],
          niveaus: {
            basis: "1 : 2.",
            simpeler: "4 rood en 8 geel. Beide ÷4: 1 rood op 2 geel → 1 : 2.",
            nogSimpeler: "1 : 2",
          },
        },
      },
      {
        q: "Een verhouding is **2 : 3**. Hoeveel **delen** zijn dat samen?",
        options: ["5", "6", "3", "1"],
        answer: 0,
        wrongHints: [
          null,
          "Doe je hier keer? Je zet de delen naast elkaar.",
          "Tel je alleen de delen van één kant?",
          "Kijk niet naar het verschil, maar naar alle delen samen.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Delen optellen",
              tekst: "2 delen naast 3 delen. 2 + 3 = 5 delen samen.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "De stukjes waaruit een verhouding bestaat.",
            },
          ],
          theorie: "Bij een verhouding A : B zijn er samen A + B delen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 : 4 → 1 + 4 = 5 delen. 3 : 7 → 3 + 7 = 10 delen.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Breuk",
              uitleg: "Daarom is het eerste stuk 2 van de 5 delen = 2/5.",
            },
          ],
          niveaus: {
            basis: "5.",
            simpeler: "2 delen en 3 delen. Samen 2 + 3 = 5.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Welke verhouding kun je **niet** nog eenvoudiger maken?",
        options: ["3 : 5", "4 : 6", "5 : 10", "9 : 3"],
        answer: 0,
        wrongHints: [
          null,
          "Zoek een getal waardoor je beide kanten kunt delen. Lukt dat hier?",
          "Zoek een getal waardoor je beide kanten kunt delen. Lukt dat hier?",
          "Zoek een getal waardoor je beide kanten kunt delen. Lukt dat hier?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Probeer te delen",
              tekst: "4 : 6 → ÷2 → 2 : 3. 5 : 10 → ÷5 → 1 : 2. 9 : 3 → ÷3 → 3 : 1. Bij 3 : 5 is er geen getal (behalve 1) waardoor je 3 én 5 kunt delen.",
            },
          ],
          woorden: [
            {
              woord: "eenvoudigste vorm",
              uitleg: "Een verhouding die je niet meer kleiner kunt maken.",
            },
          ],
          theorie: "Een verhouding is zo eenvoudig mogelijk als je beide getallen niet meer door hetzelfde getal kunt delen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "8 : 12 → ÷4 → 2 : 3. Verder kan niet.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Tip",
              uitleg: "Probeer ÷2, ÷3, ÷5. Past het bij beide getallen? Dan kan het nog eenvoudiger.",
            },
          ],
          niveaus: {
            basis: "3 : 5.",
            simpeler: "3 en 5 kun je niet allebei door 2, 3 of 5 delen. De andere wel.",
            nogSimpeler: "3 : 5",
          },
        },
      },
      {
        q: "In een klas is de verhouding jongens : meisjes **2 : 3**. Welk deel van de klas is **jongen**?",
        options: ["2/5", "2/3", "3/5", "1/2"],
        answer: 0,
        wrongHints: [
          null,
          "Een breuk gaat over een deel van het geheel. Hoeveel delen is de hele klas?",
          "Dit gaat over de meisjes. Welke kant van de verhouding zijn de jongens?",
          "Zijn er evenveel jongens als meisjes?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Geheel = 5 delen",
              tekst: "2 delen jongens + 3 delen meisjes = 5 delen. Jongens = 2 van de 5 = 2/5.",
            },
          ],
          woorden: [
            {
              woord: "breuk en verhouding",
              uitleg: "2 : 3 = 2 delen naast 3 delen. 2/5 = 2 delen van het totaal 5.",
            },
          ],
          theorie: "Van verhouding naar breuk: tel alle delen op. Dat getal komt onder de streep.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 : 4 → siroop is 1/5 van het glas.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 2/3",
              uitleg: "2/3 vergelijkt jongens met meisjes. Een breuk vergelijkt met de hele klas.",
            },
          ],
          niveaus: {
            basis: "2/5.",
            simpeler: "2 + 3 = 5 delen. Jongens zijn 2 delen van 5 → 2/5.",
            nogSimpeler: "2/5",
          },
        },
      },
      {
        q: "Op een parkeerplaats staan **30 auto's** en **10 busjes**. Wat is de verhouding busjes : auto's, zo eenvoudig mogelijk?",
        options: ["1 : 3", "3 : 1", "10 : 30", "1 : 4"],
        answer: 0,
        wrongHints: [
          null,
          "Lees de vraag nog eens: wat staat er eerst, busjes of auto's?",
          "Dit klopt wel, maar het kan nog eenvoudiger. Door welk getal kun je 10 én 30 delen?",
          "Vergelijk je busjes met álle voertuigen? De vraag gaat over busjes naast auto's.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Eerst de volgorde, dan delen",
              tekst: "Busjes : auto's = 10 : 30. Beide ÷10 → 1 : 3.",
            },
          ],
          woorden: [
            {
              woord: "volgorde",
              uitleg: "Wat het eerst genoemd wordt, staat links.",
            },
          ],
          theorie: "Kijk welke volgorde de vraag wil. Zet de getallen zo neer en vereenvoudig dan.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "10 : 30 → ÷10 → 1 : 3. Op elk busje 3 auto's.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Let op",
              uitleg: "In de zin staan de auto's eerst, maar de vraag wil busjes : auto's.",
            },
          ],
          niveaus: {
            basis: "1 : 3.",
            simpeler: "Busjes 10, auto's 30. 10 : 30, beide ÷10 → 1 : 3.",
            nogSimpeler: "1 : 3",
          },
        },
      },
    ],
  },

  {
    title: "Recept — siroop en water",
    explanation: "Verhoudingen kom je vaak tegen bij **recepten**.\n\n**Voorbeeld**: limonade-recept zegt 1 : 4 (1 deel siroop op 4 delen water).\n\nAls je een **glas vult van 200 mL**:\n• 1 + 4 = **5 delen totaal** in één glas.\n• Elk deel = 200 ÷ 5 = **40 mL**.\n• Dus: **40 mL siroop + 160 mL water**.\n\n**Slimme aanpak — denk in 'delen'**:\n• Bij 1 : 4 zit 1 deel van 5 = **1/5** in siroop.\n• Bij 2 : 3 zit 2 delen van 5 = **2/5** in het eerste.\n• Bij 3 : 7 zit 3 delen van 10 = **3/10** in het eerste.\n\n**Voorbeeld 2**: een schip-bemanning is 1 : 5 (officieren : matrozen). Als er 24 mensen zijn:\n• 1 + 5 = 6 delen.\n• Elk deel = 24 ÷ 6 = 4.\n• Officieren: 1 × 4 = **4**.\n• Matrozen: 5 × 4 = **20**.\n• Check: 4 + 20 = 24 ✓.\n\n**Toets-truc**: tel eerst **alle delen samen** (1 + 4 = 5, 2 + 3 = 5, etc.). Verdeel dan het totaal door dat getal — en je kent de waarde van **één deel**.",
    checks: [
      {
        q: "Een recept zegt **1 : 3 (siroop : water)**. Voor een glas van **400 mL** — hoeveel **siroop**?",
        options: ["100 mL","200 mL","133 mL","300 mL"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is de helft. 1 : 3 betekent 1 deel van 4.","Dat is 400 ÷ 3 — maar 1 : 3 betekent 4 delen totaal.","Te veel — dat is het water-deel."],
        uitlegPad: {
          stappen: [{ titel: "Tel delen + verdeel", tekst: "1+3 = 4 delen. 400÷4 = 100 per deel. Siroop = 1 × 100 = 100 mL." }],
          woorden: [{ woord: "delen tellen", uitleg: "Bij verhouding A:B → totaal = A+B delen. Eerst opdelen." }],
          theorie: "Verhoudingsdelen: A+B = aantal totaal-delen. Totaal ÷ delen = waarde per deel.",
          voorbeelden: [{ type: "stap", tekst: "1:3 in 400 mL: 1+3=4 delen. 400÷4=100 per deel. Siroop=100, water=300." }],
          basiskennis: [{ onderwerp: "Check: 100+300=400 ✓", uitleg: "Altijd checken: som delen = totaal." }],
          niveaus: { basis: "100 mL.", simpeler: "1:3 = 4 delen. 400÷4=100 per deel. Siroop=1 deel=100 mL.", nogSimpeler: "100" },
        },
      },
      {
        q: "Verhouding **2 : 5** in een klas van **28 leerlingen**. Hoeveel leerlingen zitten in de eerste groep?",
        options: ["8","10","20","14"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je per ongeluk 5 delen genomen?","Veel te veel — dat is de tweede groep.","Te veel — dat is de helft."],
        uitlegPad: {
          stappen: [{ titel: "Tel + verdeel", tekst: "2+5=7 delen. 28÷7=4 per deel. Eerste groep = 2 × 4 = 8." }],
          woorden: [{ woord: "verdelen via delen", uitleg: "Totaal ÷ aantal-delen × eigen aantal-delen." }],
          theorie: "Stappen: 1) tel delen op. 2) deel totaal. 3) keer eigen aantal delen.",
          voorbeelden: [{ type: "stap", tekst: "2:5 in 28: 7 delen. 28÷7=4. Eerste=2×4=8. Tweede=5×4=20." }],
          basiskennis: [{ onderwerp: "Check 8+20=28 ✓", uitleg: "Som controleren." }],
          niveaus: { basis: "8.", simpeler: "2+5=7 delen. 28÷7=4 per deel. Eerste groep = 2 × 4 = 8 leerlingen.", nogSimpeler: "8" },
        },
      },
      {
        q: "Een mengsel **3 : 1 (zand : cement)**. Bij **20 kg totaal** — hoeveel **cement**?",
        options: ["5 kg","15 kg","4 kg","6 kg"],
        answer: 0,
        wrongHints: [null,"Te veel — dat is het zand-deel.","Te weinig — denk: 4 delen totaal van 20.","Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Tel + verdeel", tekst: "3+1=4 delen. 20÷4=5 per deel. Cement = 1 × 5 = 5 kg." }],
          woorden: [{ woord: "1-deel cement", uitleg: "Cement is 1 deel van 4 totaal." }],
          theorie: "Verhouding 3:1 = 3 delen zand + 1 deel cement = 4 totaal.",
          voorbeelden: [{ type: "stap", tekst: "3:1 in 20kg: 4 delen. 20÷4=5 per deel. Zand=3×5=15. Cement=1×5=5." }],
          basiskennis: [{ onderwerp: "Check 15+5=20 ✓", uitleg: "Som controleren." }],
          niveaus: { basis: "5 kg.", simpeler: "3+1=4 delen. 20÷4=5 per deel. Cement = 1 deel = 5 kg.", nogSimpeler: "5" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Limonade is **1 : 4** (siroop : water). Je maakt een glas van **250 mL**. Hoeveel **water** doe je erin?",
        options: ["200 mL", "50 mL", "62,5 mL", "250 mL"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is één deel. Hoeveel delen is het water?",
          "Hoeveel delen zijn er samen? Deel 250 door dat getal.",
          "Er moet ook nog siroop in het glas.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel delen + verdeel",
              tekst: "1 + 4 = 5 delen. 250 ÷ 5 = 50 mL per deel. Water = 4 × 50 = 200 mL.",
            },
          ],
          woorden: [
            {
              woord: "delen tellen",
              uitleg: "Bij A : B zijn er samen A + B delen.",
            },
          ],
          theorie: "Totaal ÷ aantal delen = 1 deel. Dan keer het aantal delen dat je zoekt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Siroop = 1 × 50 = 50 mL. Water = 200 mL. 50 + 200 = 250 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "Siroop + water moet weer 250 mL zijn.",
            },
          ],
          niveaus: {
            basis: "200 mL.",
            simpeler: "5 delen. 250 ÷ 5 = 50. Water is 4 delen: 4 × 50 = 200 mL.",
            nogSimpeler: "200",
          },
        },
      },
      {
        q: "In een zak zitten **36 snoepjes**. Rood : groen = **5 : 4**. Hoeveel snoepjes zijn **groen**?",
        options: ["16", "20", "9", "4"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zijn de rode. Welke kant van de verhouding is groen?",
          "Dat is het aantal delen. Hoeveel snoepjes is één deel?",
          "Dat is één deel. Hoeveel delen zijn groen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel delen + verdeel",
              tekst: "5 + 4 = 9 delen. 36 ÷ 9 = 4 per deel. Groen = 4 × 4 = 16.",
            },
          ],
          woorden: [
            {
              woord: "één deel",
              uitleg: "Totaal gedeeld door alle delen samen.",
            },
          ],
          theorie: "Stappen: 1) delen optellen, 2) totaal delen, 3) keer de delen die je zoekt.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Rood = 5 × 4 = 20. Groen = 16. 20 + 16 = 36 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "Rood + groen = 36.",
            },
          ],
          niveaus: {
            basis: "16.",
            simpeler: "9 delen. 36 ÷ 9 = 4. Groen = 4 delen = 16.",
            nogSimpeler: "16",
          },
        },
      },
      {
        q: "Ali en Sem verdelen **€ 24** in de verhouding **3 : 1** (Ali : Sem). Hoeveel krijgt **Ali**?",
        options: ["€ 18", "€ 6", "€ 8", "€ 12"],
        answer: 0,
        wrongHints: [
          null,
          "Dat krijgt Sem. Hoeveel delen krijgt Ali?",
          "Hoeveel delen zijn er samen? Deel € 24 door dat getal.",
          "Krijgen ze evenveel? Kijk naar de verhouding.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel delen + verdeel",
              tekst: "3 + 1 = 4 delen. € 24 ÷ 4 = € 6 per deel. Ali = 3 × € 6 = € 18.",
            },
          ],
          woorden: [
            {
              woord: "verdelen",
              uitleg: "Een bedrag in stukken geven volgens de verhouding.",
            },
          ],
          theorie: "Totaal ÷ alle delen = 1 deel. Ali heeft 3 delen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Sem = 1 × € 6 = € 6. € 18 + € 6 = € 24 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "Samen moet het weer € 24 zijn.",
            },
          ],
          niveaus: {
            basis: "€ 18.",
            simpeler: "4 delen. € 24 ÷ 4 = € 6. Ali krijgt 3 delen: € 18.",
            nogSimpeler: "€ 18",
          },
        },
      },
      {
        q: "Op schoolreis is het **1 : 6** (begeleiders : kinderen). Er gaan **35 mensen** mee. Hoeveel zijn **begeleiders**?",
        options: ["5", "6", "7", "30"],
        answer: 0,
        wrongHints: [
          null,
          "Dat getal staat in de verhouding. Hoeveel mensen is één deel?",
          "Dat is het aantal delen. Hoeveel mensen is één deel?",
          "Dat zijn de kinderen. Welke kant zijn de begeleiders?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel delen + verdeel",
              tekst: "1 + 6 = 7 delen. 35 ÷ 7 = 5 per deel. Begeleiders = 1 × 5 = 5.",
            },
          ],
          woorden: [
            {
              woord: "delen",
              uitleg: "De stukjes van de verhouding: hier 1 + 6 = 7.",
            },
          ],
          theorie: "Totaal ÷ delen = 1 deel. Begeleiders zijn 1 deel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Kinderen = 6 × 5 = 30. 5 + 30 = 35 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "Begeleiders + kinderen = 35.",
            },
          ],
          niveaus: {
            basis: "5.",
            simpeler: "7 delen. 35 ÷ 7 = 5. Begeleiders = 1 deel = 5.",
            nogSimpeler: "5",
          },
        },
      },
      {
        q: "Verf wordt gemengd in de verhouding **4 : 1** (wit : blauw). Welk deel van de verf is **blauw**?",
        options: ["1/5", "1/4", "4/5", "1/3"],
        answer: 0,
        wrongHints: [
          null,
          "Kijk naar alle delen samen. Hoeveel zijn dat?",
          "Dat is het deel wit. Welk deel is blauw?",
          "Kijk naar alle delen samen. Hoeveel zijn dat?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Alle delen samen",
              tekst: "4 + 1 = 5 delen. Blauw is 1 deel van 5 = 1/5.",
            },
          ],
          woorden: [
            {
              woord: "deel van het geheel",
              uitleg: "Het aantal delen boven de streep, alle delen onder de streep.",
            },
          ],
          theorie: "Bij A : B is het tweede stuk B/(A+B) van het geheel.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 : 4 → siroop = 1/5. 2 : 3 → eerste = 2/5.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet 1/4",
              uitleg: "1/4 vergelijkt blauw alleen met wit. Je moet vergelijken met alle verf.",
            },
          ],
          niveaus: {
            basis: "1/5.",
            simpeler: "4 + 1 = 5 delen. Blauw is 1 van de 5 → 1/5.",
            nogSimpeler: "1/5",
          },
        },
      },
      {
        q: "Een mengsel van zand en grind is **2 : 3** (zand : grind). Het weegt **50 kg**. Hoeveel kg is **grind**?",
        options: ["30 kg", "20 kg", "25 kg", "15 kg"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het zand. Hoeveel delen is het grind?",
          "Zijn zand en grind evenveel? Kijk naar de verhouding.",
          "Hoeveel delen zijn er samen? Deel 50 door dat getal.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Tel delen + verdeel",
              tekst: "2 + 3 = 5 delen. 50 ÷ 5 = 10 kg per deel. Grind = 3 × 10 = 30 kg.",
            },
          ],
          woorden: [
            {
              woord: "mengsel",
              uitleg: "Twee stoffen door elkaar in een vaste verhouding.",
            },
          ],
          theorie: "Totaal ÷ delen = 1 deel. Grind heeft 3 delen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Zand = 2 × 10 = 20 kg. 20 + 30 = 50 ✓.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "Zand + grind = 50 kg.",
            },
          ],
          niveaus: {
            basis: "30 kg.",
            simpeler: "5 delen. 50 ÷ 5 = 10. Grind = 3 delen = 30 kg.",
            nogSimpeler: "30",
          },
        },
      },
    ],
  },

  {
    title: "Verhoudingstabel — denk in stapjes",
    explanation: "De **verhoudingstabel** is de Toets-favoriet. Je vult getallen in een tabel die de verhouding vasthoudt.\n\n**Voorbeeld**: limonade 1 : 4. Bij 100 mL siroop hoort 400 mL water.\n\n| siroop | water |\n|--------|-------|\n| 100 mL | 400 mL |\n| 200 mL | 800 mL |\n| 300 mL | 1200 mL |\n\n**Regel**: wat je met 1 kant doet, doe je ook met de **andere kant** (× of ÷ met hetzelfde getal).\n\n• 100 → 200 = × 2 → ook water: 400 → 800.\n• 100 → 50 = ÷ 2 → ook water: 400 → 200.\n• 100 → 250 = × 2,5 → ook water: 400 → 1000.\n\n**Stappen voor moeilijke vragen**:\n*'4 broden kosten € 12. Wat kosten 7 broden?'*\n\n| broden | euro |\n|--------|------|\n| 4 | 12 |\n| 1 | 3 *(deel door 4)* |\n| 7 | 21 *(maal 7)* |\n\nDus 7 broden kosten **€ 21**.\n\n**Toets-truc — 'tussenstap via 1'**:\nAls de getallen niet handig delen, ga eerst naar **1** *(eenheid-prijs)* en dan naar het gewenste aantal.",
    svg: tabelSvg(),
    checks: [
      {
        q: "**3 broden = € 6**. Wat kosten **5 broden**?",
        options: ["€ 10","€ 9","€ 12","€ 8"],
        answer: 0,
        wrongHints: [null,"Te weinig — reken eerst uit wat 1 brood kost en neem dat 5 keer.","Te veel — dat is de prijs van 6 broden.","Te weinig."],
        uitlegPad: {
          stappen: [{ titel: "Via 1 brood", tekst: "1 brood: €6÷3 = €2. 5 broden: 5 × €2 = €10." }],
          woorden: [{ woord: "stuksprijs", uitleg: "Prijs per 1 stuk = totaal ÷ aantal." }],
          theorie: "Verhoudingstabel: deel naar 1 (stuksprijs), keer naar nieuw aantal.",
          voorbeelden: [{ type: "tabel", tekst: "3 broden=€6. 1 brood=€2. 5 broden=€10." }],
          basiskennis: [{ onderwerp: "Snelheid", uitleg: "Tussenstap '1 stuk' is bijna altijd handig bij verhoudingen." }],
          niveaus: { basis: "€10.", simpeler: "Per brood: €6÷3 = €2. 5 broden = 5×€2 = €10.", nogSimpeler: "€10" },
        },
      },
      {
        q: "**Verhouding 2 : 5**. Bij **40** voor de eerste — hoeveel voor de tweede?",
        options: ["100","20","8","16"],
        answer: 0,
        wrongHints: [null,"Te weinig — bereken eerst met welke factor 2 naar 40 gaat, dan pas je die factor op 5 toe.","Te weinig — dat is alleen voor 1 deel.","Te weinig — vermenigvuldig 5 met dezelfde factor."],
        uitlegPad: {
          stappen: [{ titel: "Factor + ander", tekst: "Eerste: 2 → 40 = ×20. Tweede: 5 × 20 = 100." }],
          woorden: [{ woord: "schaal-factor", uitleg: "Met welk getal vermenigvuldigd: 40÷2=20." }],
          theorie: "Verhoudingstabel: zelfde × of ÷ aan beide kanten. Hier ×20 op beide.",
          voorbeelden: [{ type: "tabel", tekst: "2:5. ×20 → 40:100. Beide ×20." }],
          basiskennis: [{ onderwerp: "Check verhouding", uitleg: "40:100 ÷ 20 = 2:5 ✓." }],
          niveaus: { basis: "100.", simpeler: "2 → 40 = ×20 (40÷2). Andere kant ook ×20: 5×20=100.", nogSimpeler: "100" },
        },
      },
      {
        q: "**Recept 4 : 3 (meel : suiker) bij 200 g meel** — hoeveel **suiker**?",
        options: ["150 g","250 g","100 g","75 g"],
        answer: 0,
        wrongHints: [null,"Te veel — kijk: meel is groter (4) dan suiker (3), dus suiker is minder.","Te weinig — denk via 1 deel.","Te weinig — heb je halveren ipv evenredig?"],
        uitlegPad: {
          stappen: [{ titel: "Via 1 deel", tekst: "1 deel meel: 200÷4 = 50 g. Suiker = 3 × 50 = 150 g." }],
          woorden: [{ woord: "1-deel-truc", uitleg: "Totaal ÷ aantal delen = waarde per deel." }],
          theorie: "Verhouding 4:3. Eerst 1 deel uitrekenen (200÷4=50). Dan keer ander aantal delen (3×50)." ,
          voorbeelden: [{ type: "stap", tekst: "4 delen meel = 200g. 1 deel = 50g. 3 delen suiker = 150g." }],
          basiskennis: [{ onderwerp: "Check verhouding", uitleg: "200:150 ÷ 50 = 4:3 ✓." }],
          niveaus: { basis: "150 g.", simpeler: "1 deel meel = 200÷4 = 50g. Suiker = 3 delen × 50 = 150g.", nogSimpeler: "150" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "**4 schriften** kosten **€ 6**. Wat kosten **10 schriften**?",
        options: ["€ 15", "€ 12", "€ 24", "€ 10"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de prijs van 8 schriften. Reken eerst uit wat 1 schrift kost.",
          "Reken eerst uit wat 1 schrift kost en neem dat 10 keer.",
          "Reken eerst uit wat 1 schrift kost en neem dat 10 keer.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Via 1 schrift",
              tekst: "1 schrift: € 6 ÷ 4 = € 1,50. 10 schriften: 10 × € 1,50 = € 15.",
            },
          ],
          woorden: [
            {
              woord: "stuksprijs",
              uitleg: "Prijs van 1 stuk = totaal ÷ aantal.",
            },
          ],
          theorie: "Verhoudingstabel: deel naar 1, keer naar het nieuwe aantal.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "4 → € 6. 1 → € 1,50. 10 → € 15.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Andere route",
              uitleg: "4 → 2 schriften = € 3. 10 schriften = 5 × € 3 = € 15.",
            },
          ],
          niveaus: {
            basis: "€ 15.",
            simpeler: "Per schrift € 1,50. 10 × € 1,50 = € 15.",
            nogSimpeler: "€ 15",
          },
        },
      },
      {
        q: "**8 pakken** melk kosten **€ 10**. Wat kosten **4 pakken**?",
        options: ["€ 5", "€ 6", "€ 2,50", "€ 20"],
        answer: 0,
        wrongHints: [
          null,
          "Hoe kom je van 8 naar 4? Doe hetzelfde met het geld.",
          "Dat is wat 2 pakken kosten. Hoe kom je van 8 naar 4?",
          "Worden het meer of minder pakken? Dan wordt het geld ook…",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Beide ÷2",
              tekst: "8 → 4 is ÷ 2. Dus € 10 ÷ 2 = € 5.",
            },
          ],
          woorden: [
            {
              woord: "verhoudingstabel",
              uitleg: "Wat je met de ene kant doet, doe je ook met de andere kant.",
            },
          ],
          theorie: "Halveer je het aantal, dan halveer je ook de prijs.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "8 → € 10. 4 → € 5. 2 → € 2,50.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "€ 5 + € 5 = € 10 voor 8 pakken ✓.",
            },
          ],
          niveaus: {
            basis: "€ 5.",
            simpeler: "4 is de helft van 8. De helft van € 10 is € 5.",
            nogSimpeler: "€ 5",
          },
        },
      },
      {
        q: "Limonade is **1 : 4** (siroop : water). Je gebruikt **150 mL siroop**. Hoeveel **water** hoort erbij?",
        options: ["600 mL", "200 mL", "450 mL", "750 mL"],
        answer: 0,
        wrongHints: [
          null,
          "Water is 4 keer zoveel als siroop. Is dit 4 keer 150?",
          "Water is 4 keer zoveel als siroop. Is dit 4 keer 150?",
          "Dat is siroop en water samen. De vraag is alleen het water.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Beide ×150",
              tekst: "Siroop 1 → 150 is × 150. Water 4 × 150 = 600 mL.",
            },
          ],
          woorden: [
            {
              woord: "factor",
              uitleg: "Het getal waarmee je beide kanten keer doet.",
            },
          ],
          theorie: "Verhoudingstabel: zelfde × aan beide kanten.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "1 : 4 → 100 : 400 → 150 : 600.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "600 ÷ 150 = 4. Verhouding 1 : 4 ✓.",
            },
          ],
          niveaus: {
            basis: "600 mL.",
            simpeler: "Water is 4 × zoveel. 4 × 150 = 600 mL.",
            nogSimpeler: "600",
          },
        },
      },
      {
        q: "Een printer maakt **12 bladzijden** in **3 minuten**. Hoeveel bladzijden in **5 minuten**?",
        options: ["20", "15", "17", "60"],
        answer: 0,
        wrongHints: [
          null,
          "Reken eerst uit hoeveel bladzijden in 1 minuut.",
          "Je mag niet zomaar optellen. Reken eerst uit hoeveel bladzijden in 1 minuut.",
          "Dat is 12 keer 5. Reken eerst uit hoeveel bladzijden in 1 minuut.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Via 1 minuut",
              tekst: "1 minuut: 12 ÷ 3 = 4 bladzijden. 5 minuten: 5 × 4 = 20.",
            },
          ],
          woorden: [
            {
              woord: "tussenstap via 1",
              uitleg: "Eerst uitrekenen hoeveel bij 1 hoort.",
            },
          ],
          theorie: "Verhoudingstabel: deel naar 1, keer naar het nieuwe getal.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "3 min → 12. 1 min → 4. 5 min → 20.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "20 ÷ 5 = 4 per minuut, net als 12 ÷ 3 = 4 ✓.",
            },
          ],
          niveaus: {
            basis: "20.",
            simpeler: "In 1 minuut 4 bladzijden. In 5 minuten 5 × 4 = 20.",
            nogSimpeler: "20",
          },
        },
      },
      {
        q: "In een verhoudingstabel staan **2** en **7** naast elkaar. Welk paar past **ook** in die tabel?",
        options: ["6 en 21", "4 en 9", "7 en 2", "3 en 8"],
        answer: 0,
        wrongHints: [
          null,
          "Doe je aan beide kanten hetzelfde keer of gedeeld door? Of heb je er iets bij gedaan?",
          "Kijk naar de volgorde: welk getal hoort links?",
          "Doe je aan beide kanten hetzelfde keer of gedeeld door? Of heb je er iets bij gedaan?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Beide ×3",
              tekst: "2 × 3 = 6. 7 × 3 = 21. Dus 6 en 21 past.",
            },
          ],
          woorden: [
            {
              woord: "verhoudingstabel",
              uitleg: "Een tabel waarin elke rij dezelfde verhouding heeft.",
            },
          ],
          theorie: "Regel: wat je met de ene kant doet (× of ÷), doe je ook met de andere kant.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "2 → 7. 4 → 14. 6 → 21. 10 → 35.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Niet erbij",
              uitleg: "4 en 9 is 2+2 en 7+2. Optellen houdt de verhouding niet vast.",
            },
          ],
          niveaus: {
            basis: "6 en 21.",
            simpeler: "2 × 3 = 6 en 7 × 3 = 21. Beide × 3.",
            nogSimpeler: "6 en 21",
          },
        },
      },
      {
        q: "**5 kaartjes** voor de dierentuin kosten **€ 35**. Wat kosten **2 kaartjes**?",
        options: ["€ 14", "€ 7", "€ 70", "€ 32"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de prijs van 1 kaartje. Hoeveel kaartjes wil je?",
          "Worden het meer of minder kaartjes? Dan wordt het geld ook…",
          "Je mag niet zomaar aftrekken. Reken eerst uit wat 1 kaartje kost.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Via 1 kaartje",
              tekst: "1 kaartje: € 35 ÷ 5 = € 7. 2 kaartjes: 2 × € 7 = € 14.",
            },
          ],
          woorden: [
            {
              woord: "stuksprijs",
              uitleg: "Prijs van 1 stuk = totaal ÷ aantal.",
            },
          ],
          theorie: "Verhoudingstabel: deel naar 1, keer naar het nieuwe aantal.",
          voorbeelden: [
            {
              type: "tabel",
              tekst: "5 → € 35. 1 → € 7. 2 → € 14.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "€ 14 ÷ 2 = € 7 per kaartje ✓.",
            },
          ],
          niveaus: {
            basis: "€ 14.",
            simpeler: "1 kaartje € 7. 2 kaartjes € 14.",
            nogSimpeler: "€ 14",
          },
        },
      },
    ],
  },

  {
    title: "Recepten omrekenen — voor meer of minder mensen",
    explanation: "Een recept is meestal voor **een vast aantal mensen**. Bij meer of minder mensen reken je het hele recept om.\n\n**Voorbeeld**: pannenkoek-recept voor **4 personen**:\n• 200 g meel\n• 400 mL melk\n• 2 eieren\n\n**Voor 6 personen** *(× 1,5)*:\n• 200 × 1,5 = **300 g meel**\n• 400 × 1,5 = **600 mL melk**\n• 2 × 1,5 = **3 eieren**\n\n**Voor 1 persoon** *(÷ 4)*:\n• 200 ÷ 4 = 50 g meel\n• 400 ÷ 4 = 100 mL melk\n• 2 ÷ 4 = ½ ei (in praktijk: 1 ei voor 2 mensen)\n\n**Toets-aanpak**:\n1. **Welke factor?** Aantal nieuwe mensen ÷ aantal oude mensen.\n2. **Vermenigvuldig** alle ingrediënten met die factor.\n\n**Voorbeeld 2 — recept voor 8, jij maakt voor 6**:\n• Factor = 6/8 = 0,75 *(ofwel ÷ 8 × 6)*.\n• Alle ingrediënten × 0,75.\n\n**Toets-truc voor mooie getallen**:\nGa via 1 persoon. Als recept voor 8 = 200g, dan 1 persoon = 25g. Voor 6 = 6 × 25 = 150g. Sneller dan met komma-factor rekenen.",
    checks: [
      {
        q: "Recept voor **4 personen** gebruikt **300 g pasta**. Voor **6 personen**?",
        options: ["450 g","400 g","500 g","600 g"],
        answer: 0,
        wrongHints: [null,"Te weinig — ga via 1 persoon: deel 300 door 4, dan vermenigvuldig met 6.","Te veel — reken via 1 persoon: 300 ÷ 4 = 75 g.","Veel te veel — dat zou voor 8 zijn."],
        uitlegPad: {
          stappen: [{ titel: "Via 1 persoon", tekst: "1 persoon: 300÷4 = 75g. 6 personen: 6×75 = 450g." }],
          woorden: [{ woord: "per-persoon-truc", uitleg: "Totaal ÷ aantal personen = per-persoon hoeveelheid." }],
          theorie: "Recept omrekenen: per-persoon (÷oude aantal) × nieuwe aantal.",
          voorbeelden: [{ type: "stap", tekst: "4 personen=300g. 1 persoon=75g. 6 personen=450g." }],
          basiskennis: [{ onderwerp: "Niet ×2", uitleg: "6/4 = 1,5 (niet 2). Per-persoon-truc voorkomt fouten." }],
          niveaus: { basis: "450 g.", simpeler: "Per persoon: 300÷4 = 75g. 6 mensen: 6×75 = 450g.", nogSimpeler: "450" },
        },
      },
      {
        q: "Limonade voor **8 mensen** = **1 L water**. Voor **3 mensen**?",
        options: ["375 mL","300 mL","250 mL","500 mL"],
        answer: 0,
        wrongHints: [null,"Te weinig — ga via 1 persoon: hoeveel mL is dat? Vermenigvuldig daarna met 3.","Te weinig — dat is voor 2 personen.","Te veel — dat is voor 4 personen."],
        uitlegPad: {
          stappen: [{ titel: "Via 1 persoon", tekst: "1L=1000mL. Per persoon: 1000÷8=125mL. 3 personen: 3×125=375mL." }],
          woorden: [{ woord: "per-persoon", uitleg: "Eerste stap: deel door aantal personen." }],
          theorie: "Recept-aanpassen: L→mL, dan ÷oud aantal × nieuw.",
          voorbeelden: [{ type: "stap", tekst: "8 mensen=1000mL. 1=125mL. 3=375mL." }],
          basiskennis: [{ onderwerp: "L → mL eerst", uitleg: "Werk in mL voor delen — 1L÷8 wordt 0,125L = lastiger." }],
          niveaus: { basis: "375 mL.", simpeler: "1L = 1000mL. Per persoon: 1000÷8 = 125mL. 3 personen: 3×125 = 375mL.", nogSimpeler: "375" },
        },
      },
      {
        q: "Een **schaal van 1 : 100.000** op een kaart. **Werkelijke afstand 5 km** — hoeveel **cm op de kaart**?",
        options: ["5 cm","50 cm","500 cm","0,5 cm"],
        answer: 0,
        wrongHints: [null,"Te veel — hoeveel cm is 5 km? Deel dat door 100.000.","Veel te veel.","Te weinig — reken 5 km om naar cm en deel door 100.000."],
        uitlegPad: {
          stappen: [{ titel: "Schaal-truc 1:100.000", tekst: "Bij schaal 1:100.000 geldt: 1 cm op kaart = 1 km werkelijk. Dus 5 km = 5 cm op kaart." }],
          woorden: [{ woord: "schaal", uitleg: "Verhouding kaart-afstand : werkelijke afstand." }],
          theorie: "Bij kaart-schaal: werkelijke km direct als cm op kaart (bij 1:100.000-stijl).",
          voorbeelden: [{ type: "stap", tekst: "5 km werkelijk → 5 cm op kaart (kaart-schaal)." }],
          basiskennis: [{ onderwerp: "Eenheid let op", uitleg: "Werk in dezelfde eenheid (cm met cm, km met km)." }],
          niveaus: { basis: "5 cm.", simpeler: "Op kaart wordt werkelijke afstand veel kleiner. 5 km in werkelijkheid → 5 cm op kaart.", nogSimpeler: "5" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Een cake voor **6 personen** gebruikt **3 eieren**. Hoeveel eieren voor **12 personen**?",
        options: ["6", "9", "4", "12"],
        answer: 0,
        wrongHints: [
          null,
          "Je mag niet zomaar optellen. Hoe vaak past 6 personen in 12 personen?",
          "Hoe vaak past 6 personen in 12 personen? Doe de eieren ook zoveel keer.",
          "Dat is het aantal personen. De vraag gaat over eieren.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Factor",
              tekst: "12 ÷ 6 = 2. Alles × 2. Eieren: 3 × 2 = 6.",
            },
          ],
          woorden: [
            {
              woord: "factor",
              uitleg: "Nieuw aantal personen ÷ oud aantal personen.",
            },
          ],
          theorie: "Recept omrekenen: zoek de factor, doe alle ingrediënten keer die factor.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "6 personen → 3 eieren. 12 personen → 6 eieren.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Alles keer 2",
              uitleg: "Ook de rest van het recept gaat × 2.",
            },
          ],
          niveaus: {
            basis: "6.",
            simpeler: "12 is 2 × 6. Dus 2 × 3 eieren = 6.",
            nogSimpeler: "6",
          },
        },
      },
      {
        q: "Soep voor **4 personen** gebruikt **800 mL** water. Hoeveel water voor **2 personen**?",
        options: ["400 mL", "200 mL", "600 mL", "1600 mL"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is voor 1 persoon. Hoeveel personen eten er mee?",
          "Je mag niet zomaar aftrekken. Hoe kom je van 4 naar 2 personen?",
          "Worden het meer of minder personen? Dan wordt het water ook…",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Factor ÷2",
              tekst: "4 → 2 personen is ÷ 2. 800 ÷ 2 = 400 mL.",
            },
          ],
          woorden: [
            {
              woord: "halveren",
              uitleg: "Door 2 delen.",
            },
          ],
          theorie: "Minder mensen: alle ingrediënten door dezelfde factor delen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 personen → 800 mL. 2 personen → 400 mL. 1 persoon → 200 mL.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "400 × 2 = 800 ✓.",
            },
          ],
          niveaus: {
            basis: "400 mL.",
            simpeler: "2 is de helft van 4. De helft van 800 is 400 mL.",
            nogSimpeler: "400",
          },
        },
      },
      {
        q: "Een recept voor **8 personen** gebruikt **400 g** rijst. Hoeveel rijst voor **6 personen**?",
        options: ["300 g", "350 g", "200 g", "450 g"],
        answer: 0,
        wrongHints: [
          null,
          "Reken eerst uit hoeveel rijst 1 persoon krijgt.",
          "Dat is voor 4 personen. Reken eerst uit hoeveel rijst 1 persoon krijgt.",
          "Worden het meer of minder personen? Reken eerst uit hoeveel 1 persoon krijgt.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Via 1 persoon",
              tekst: "1 persoon: 400 ÷ 8 = 50 g. 6 personen: 6 × 50 = 300 g.",
            },
          ],
          woorden: [
            {
              woord: "per-persoon-truc",
              uitleg: "Totaal ÷ aantal personen = per persoon.",
            },
          ],
          theorie: "Recept omrekenen: ÷ oud aantal, × nieuw aantal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "8 → 400 g. 1 → 50 g. 6 → 300 g.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Ook goed",
              uitleg: "Factor 6/8 = 0,75. 400 × 0,75 = 300 g.",
            },
          ],
          niveaus: {
            basis: "300 g.",
            simpeler: "Per persoon 50 g. 6 × 50 = 300 g.",
            nogSimpeler: "300",
          },
        },
      },
      {
        q: "Wraps voor **4 personen** gebruiken **200 g kaas**. Je maakt ze voor **3 personen**. Hoeveel **kaas**?",
        options: ["150 g", "100 g", "250 g", "50 g"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is voor 2 personen. Reken eerst uit hoeveel kaas 1 persoon krijgt.",
          "Worden het meer of minder personen? Reken eerst uit hoeveel 1 persoon krijgt.",
          "Dat is voor 1 persoon. Hoeveel personen eten er mee?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Via 1 persoon",
              tekst: "1 persoon: 200 ÷ 4 = 50 g. 3 personen: 3 × 50 = 150 g.",
            },
          ],
          woorden: [
            {
              woord: "per-persoon-truc",
              uitleg: "Totaal ÷ aantal personen = per persoon.",
            },
          ],
          theorie: "Recept omrekenen: ÷ oud aantal, × nieuw aantal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 → 200 g. 1 → 50 g. 3 → 150 g.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "150 ÷ 3 = 50 g per persoon ✓.",
            },
          ],
          niveaus: {
            basis: "150 g.",
            simpeler: "Per persoon 50 g. 3 × 50 = 150 g.",
            nogSimpeler: "150",
          },
        },
      },
      {
        q: "Een recept voor **6 personen** gebruikt **300 g** gehakt. Hoeveel is dat **per persoon**?",
        options: ["50 g", "60 g", "30 g", "100 g"],
        answer: 0,
        wrongHints: [
          null,
          "Door hoeveel personen moet je delen?",
          "Door hoeveel personen moet je delen?",
          "Door hoeveel personen moet je delen?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Delen door personen",
              tekst: "300 ÷ 6 = 50 g per persoon.",
            },
          ],
          woorden: [
            {
              woord: "per persoon",
              uitleg: "Hoeveel 1 persoon krijgt.",
            },
          ],
          theorie: "Per persoon = totaal ÷ aantal personen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "Voor 4 personen: 4 × 50 = 200 g.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "6 × 50 = 300 ✓.",
            },
          ],
          niveaus: {
            basis: "50 g.",
            simpeler: "300 g verdelen over 6 personen: 300 ÷ 6 = 50 g.",
            nogSimpeler: "50",
          },
        },
      },
    ],
  },

  {
    title: "Schaal op de kaart",
    explanation: "Een **schaal** is een **verhouding** tussen kaart-afstand en werkelijke afstand.\n\n**Voorbeeld**: schaal **1 : 100.000** betekent: 1 cm op de kaart = 100.000 cm in het echt = **1 km**.\n\n**Belangrijke schalen** (schoolse kaarten):\n• 1 : 100 → 1 cm = 1 m (plattegrond kamer)\n• 1 : 1.000 → 1 cm = 10 m (school-plattegrond)\n• 1 : 10.000 → 1 cm = 100 m (klein gebied)\n• 1 : 100.000 → 1 cm = 1 km (regio-kaart)\n• 1 : 1.000.000 → 1 cm = 10 km (provincie-kaart)\n\n**Aanpak — twee soorten vragen**:\n\n**A. Kaart → werkelijk** *(meten naar werkelijkheid)*:\n• Op kaart staat 5 cm + schaal 1 : 100.000.\n• 5 × 100.000 = 500.000 cm = 5.000 m = **5 km**.\n\n**B. Werkelijk → kaart** *(plannen op kaart)*:\n• Werkelijke afstand 8 km = 800.000 cm.\n• Bij schaal 1 : 100.000: 800.000 ÷ 100.000 = **8 cm op kaart**.\n\n**Truc voor schaal 1 : 100.000** *(meest gebruikt)*:\n• 1 cm op kaart = 1 km in echt. Heel simpel.\n• Werkelijke km = direct cm op kaart.\n\n**Toets-tip**:\nLet op **eenheden**! Schaal-getallen werken in cm. Reken alles eerst naar cm voor je deelt of vermenigvuldigt.",
    checks: [
      {
        q: "Schaal **1 : 100.000**. Op kaart **3 cm** — werkelijk?",
        options: ["3 km","30 km","300 m","30 m"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je per ongeluk × 1 miljoen gedaan?","Te weinig — zoek op hoeveel km 1 cm op een 1:100.000-kaart vertegenwoordigt.","Veel te weinig."],
        uitlegPad: {
          stappen: [{ titel: "1 cm = 1 km", tekst: "Bij 1:100.000 geldt: 1 cm op kaart = 1 km werkelijk. Dus 3 cm = 3 km." }],
          woorden: [{ woord: "1:100.000", uitleg: "Standaard kaart-schaal. 100.000 cm = 1000 m = 1 km." }],
          theorie: "Schaal 1:100.000: cm op kaart = km in werkelijkheid (handige truc).",
          voorbeelden: [{ type: "tabel", tekst: "1 cm = 1 km. 5 cm = 5 km. 12 cm = 12 km." }],
          basiskennis: [{ onderwerp: "Eenheidstruc", uitleg: "100.000 cm = 1000 m = 1 km. Bij 1:100k schaal valt het samen." }],
          niveaus: { basis: "3 km.", simpeler: "Bij 1:100.000 is 1 cm op kaart = 1 km werkelijk. 3 cm op kaart = 3 km.", nogSimpeler: "3 km" },
        },
      },
      {
        q: "Een tuin is **15 m breed**. Op een schaal **1 : 100** kaart — hoeveel **cm**?",
        options: ["15 cm","1,5 cm","150 cm","1500 cm"],
        answer: 0,
        wrongHints: [null,"Te weinig — bij 1:100 stelt 1 cm werkelijk 100 cm voor. Hoeveel cm op de kaart is 15 m?","Te veel — dat is werkelijk 150 m.","Veel te veel."],
        uitlegPad: {
          stappen: [{ titel: "1 m = 1 cm", tekst: "Bij 1:100 is 100 cm (= 1 m) werkelijk 1 cm op de kaart. Dus 15 m = 15 cm." }],
          woorden: [{ woord: "1:100", uitleg: "Plattegrond-schaal. 100 cm = 1 m. Dus 1 m werkelijk = 1 cm op kaart." }],
          theorie: "Schaal 1:100 (plattegrond): meters in werkelijkheid = cm op kaart.",
          voorbeelden: [{ type: "tabel", tekst: "1 m = 1 cm. 5 m = 5 cm. 15 m = 15 cm. 100 m = 100 cm = 1 m papier." }],
          basiskennis: [{ onderwerp: "Plattegrond-truc", uitleg: "Bij 1:100 valt meter ↔ cm samen. Eenvoudige conversie." }],
          niveaus: { basis: "15 cm.", simpeler: "Bij 1:100 schaal: 1 m werkelijk = 1 cm op kaart. 15 m = 15 cm.", nogSimpeler: "15" },
        },
      },
      {
        q: "Schaal **1 : 50**. Op kaart staat **8 cm**. **Werkelijke afstand**?",
        options: ["4 m","400 m","80 m","8 m"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je × 5000 ipv × 50 gedaan?","Te veel — heb je × 1000 gedaan?","Te veel — heb je × 100 gedaan in plaats van × 50?"],
        uitlegPad: {
          stappen: [{ titel: "8 × 50", tekst: "Kaart × schaal = werkelijk. 8 cm × 50 = 400 cm = 4 m." }],
          woorden: [{ woord: "1:50", uitleg: "1 cm op kaart = 50 cm werkelijk = 0,5 m." }],
          theorie: "Kaart → werkelijk: cm × schaal-getal = werkelijke cm. Dan omrekenen naar m.",
          voorbeelden: [{ type: "stap", tekst: "8 cm × 50 = 400 cm = 4 m." }],
          basiskennis: [{ onderwerp: "cm → m", uitleg: "100 cm = 1 m. Dus 400 cm = 4 m." }],
          niveaus: { basis: "4 m.", simpeler: "8 cm × 50 (schaal) = 400 cm = 4 m werkelijk.", nogSimpeler: "4 m" },
        },
      },
      // Q12a (9 okt 2026): extra vragen, elk door twee nakijkers goedgekeurd.
      {
        q: "Op een kaart met schaal **1 : 1.000.000** liggen twee steden **4 cm** uit elkaar. Hoe ver is dat **in het echt**?",
        options: ["40 km", "4 km", "400 km", "400 m"],
        answer: 0,
        wrongHints: [
          null,
          "Te kort. Bij deze schaal is 1 cm op de kaart meer dan 1 km.",
          "Te ver. Hoeveel km is 1 cm op deze kaart?",
          "Veel te kort. Reken 4 × 1.000.000 cm om naar km.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "1 cm = 10 km",
              tekst: "Bij 1 : 1.000.000 is 1 cm = 1.000.000 cm = 10 km. 4 cm = 40 km.",
            },
          ],
          woorden: [
            {
              woord: "1 : 1.000.000",
              uitleg: "Provinciekaart: 1 cm = 10 km.",
            },
          ],
          theorie: "Kaart → echt: × het schaalgetal. 100.000 cm = 1 km.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "4 × 1.000.000 = 4.000.000 cm = 40.000 m = 40 km.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Eenheden",
              uitleg: "cm ÷ 100 = m. m ÷ 1.000 = km.",
            },
          ],
          niveaus: {
            basis: "40 km.",
            simpeler: "1 cm = 10 km. 4 cm = 4 × 10 = 40 km.",
            nogSimpeler: "40 km",
          },
        },
      },
      {
        q: "Schaal **1 : 10.000**. Op de kaart is een park **3 cm** breed. Hoe breed is het park **in het echt**?",
        options: ["300 m", "30 m", "3 km", "3 m"],
        answer: 0,
        wrongHints: [
          null,
          "Te smal. Hoeveel meter is 1 cm op deze kaart?",
          "Te breed. Hoeveel meter is 1 cm op deze kaart?",
          "Veel te smal. Reken 3 × 10.000 cm om naar meter.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "1 cm = 100 m",
              tekst: "Bij 1 : 10.000 is 1 cm = 10.000 cm = 100 m. 3 cm = 300 m.",
            },
          ],
          woorden: [
            {
              woord: "1 : 10.000",
              uitleg: "1 cm op de kaart = 100 m echt.",
            },
          ],
          theorie: "Kaart → echt: × het schaalgetal, daarna omrekenen.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "3 × 10.000 = 30.000 cm = 300 m.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "cm → m",
              uitleg: "100 cm = 1 m. 30.000 cm = 300 m.",
            },
          ],
          niveaus: {
            basis: "300 m.",
            simpeler: "1 cm = 100 m. 3 cm = 300 m.",
            nogSimpeler: "300 m",
          },
        },
      },
      {
        q: "Wat betekent schaal **1 : 100**?",
        options: [
          "1 cm op de tekening is 1 m echt",
          "1 cm op de tekening is 100 m echt",
          "1 m op de tekening is 1 cm echt",
          "1 cm op de tekening is 10 m echt",
        ],
        answer: 0,
        wrongHints: [
          null,
          "100 wat? Een schaalgetal werkt in centimeters.",
          "Kijk welke kant de tekening is en welke kant het echte ding.",
          "Een schaalgetal werkt in centimeters. Hoeveel meter is 100 cm?",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Lees de schaal",
              tekst: "1 : 100 → 1 cm op de tekening = 100 cm echt = 1 m.",
            },
          ],
          woorden: [
            {
              woord: "schaal",
              uitleg: "Verhouding tekening : echt.",
            },
          ],
          theorie: "Het eerste getal is de tekening, het tweede getal het echte ding, allebei in cm.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "1 : 1.000 → 1 cm = 10 m.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Plattegrond",
              uitleg: "1 : 100 wordt vaak gebruikt voor een plattegrond van een kamer.",
            },
          ],
          niveaus: {
            basis: "1 cm = 1 m.",
            simpeler: "1 cm op papier = 100 cm echt. 100 cm = 1 m.",
            nogSimpeler: "1 cm = 1 m",
          },
        },
      },
      {
        q: "Een kamer is **4 m** lang. Je tekent hem op schaal **1 : 50**. Hoe lang wordt hij op papier?",
        options: ["8 cm", "4 cm", "20 cm", "80 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Dat zou bij schaal 1 : 100 horen. Reken 4 m eerst om naar cm.",
          "Reken 4 m eerst om naar cm en deel dan door 50.",
          "Te lang. Reken 4 m eerst om naar cm en deel dan door 50.",
        ],
        uitlegPad: {
          stappen: [
            {
              titel: "Echt → tekening",
              tekst: "4 m = 400 cm. 400 ÷ 50 = 8 cm.",
            },
          ],
          woorden: [
            {
              woord: "1 : 50",
              uitleg: "1 cm op papier = 50 cm echt.",
            },
          ],
          theorie: "Echt → tekening: eerst naar cm, dan ÷ het schaalgetal.",
          voorbeelden: [
            {
              type: "stap",
              tekst: "2 m = 200 cm. 200 ÷ 50 = 4 cm.",
            },
          ],
          basiskennis: [
            {
              onderwerp: "Check",
              uitleg: "8 cm × 50 = 400 cm = 4 m ✓.",
            },
          ],
          niveaus: {
            basis: "8 cm.",
            simpeler: "400 cm ÷ 50 = 8 cm.",
            nogSimpeler: "8 cm",
          },
        },
      },
    ],
  },

  {
    title: "Eindopdracht — verhoudingen mix",
    explanation: "Mix-toets in echte Doorstroomtoets-stijl. Verschillende verhoudings-vragen door elkaar — recept, schaal, klas, kostprijs.\n\n**Hint**: maak voor lastige vragen een **tabel** op kladpapier en vul in stapjes in.\n\nVeel succes!",
    checks: [
      {
        q: "Een fles van **750 mL** kost **€ 3,75**. Wat is de **prijs per 100 mL**?",
        options: ["€ 0,50","€ 5,00","€ 0,75","€ 0,30"],
        answer: 0,
        wrongHints: [null,"Te veel — heb je × 100 ipv ÷ gedaan?","Te veel — 7,5 × €0,75 is meer dan €3,75.","Te weinig — hoeveel keer past 100 mL in 750 mL? Deel de prijs door dat aantal."],
        uitlegPad: {
          stappen: [{ titel: "Per mL → per 100", tekst: "€3,75 ÷ 750 = €0,005 per mL. Per 100 mL = €0,005 × 100 = €0,50." }],
          woorden: [{ woord: "stuksprijs", uitleg: "Prijs per eenheid. Hier: per mL of per 100 mL." }],
          theorie: "Of via 100-stappen: 750 mL = 7,5 × 100 mL. €3,75 ÷ 7,5 = €0,50 per 100 mL.",
          voorbeelden: [{ type: "stap", tekst: "€3,75 ÷ 7,5 = €0,50 per 100 mL." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "€0,50 × 7,5 = €3,75 ✓." }],
          niveaus: { basis: "€0,50.", simpeler: "750 mL = 7,5 × 100 mL. Prijs per 100 mL = €3,75 ÷ 7,5 = €0,50.", nogSimpeler: "€0,50" },
        },
      },
      {
        q: "Verhouding **3 : 5 (rood : blauw)**. **24 rode** ballonnen — hoeveel **blauwe**?",
        options: ["40","16","30","8"],
        answer: 0,
        wrongHints: [null,"Te weinig — bereken eerst met welke factor 3 naar 24 gaat, dan pas je die factor op 5 toe.","Te weinig — heb je verhouding goed?","Te weinig — klopt jouw berekening van 5 × die factor?"],
        uitlegPad: {
          stappen: [{ titel: "Factor + ander", tekst: "Rood: 3 → 24 = ×8. Blauw: 5 × 8 = 40." }],
          woorden: [{ woord: "schaal-factor", uitleg: "Met welk getal vermenigvuldigd: 24÷3 = 8." }],
          theorie: "Verhoudingstabel: zelfde × aan beide kanten.",
          voorbeelden: [{ type: "tabel", tekst: "3:5. ×8 → 24:40. Beide ×8." }],
          basiskennis: [{ onderwerp: "Check", uitleg: "24:40 ÷ 8 = 3:5 ✓." }],
          niveaus: { basis: "40.", simpeler: "Rood: 3 → 24 = ×8 (24÷3). Blauw: 5×8=40.", nogSimpeler: "40" },
        },
      },
      {
        q: "Pannenkoek-recept voor **4 mensen** = **300 g meel**. Voor **10 mensen**?",
        options: ["750 g","600 g","800 g","450 g"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je × 2 gedaan ipv × 2,5?","Te veel — dat zou voor meer dan 10 zijn.","Te weinig — dat is voor 6 mensen."],
        uitlegPad: {
          stappen: [{ titel: "Via 1 persoon", tekst: "Per persoon: 300÷4 = 75g. 10 personen: 10×75 = 750g." }],
          woorden: [{ woord: "per-persoon-truc", uitleg: "Eerst per 1, dan keer aantal." }],
          theorie: "Recept omrekenen: ÷oude aantal × nieuwe aantal.",
          voorbeelden: [{ type: "stap", tekst: "4=300g. 1=75g. 10=750g." }],
          basiskennis: [{ onderwerp: "Niet ×2", uitleg: "10/4 = 2,5 (niet 2). Per-persoon-truc voorkomt dit." }],
          niveaus: { basis: "750 g.", simpeler: "Per persoon: 300÷4 = 75g. 10 mensen: 10×75 = 750g.", nogSimpeler: "750" },
        },
      },
      {
        q: "Schaal **1 : 200**. Op kaart staat **9 cm** — werkelijk?",
        options: ["18 m","9 m","180 m","1,8 m"],
        answer: 0,
        wrongHints: [null,"Te weinig — heb je × 100 ipv × 200 gedaan?","Te veel — heb je × 2000 gedaan?","Te weinig — heb je × 20 gedaan?"],
        uitlegPad: {
          stappen: [{ titel: "9 × 200", tekst: "9 cm × 200 = 1800 cm = 18 m." }],
          woorden: [{ woord: "1:200", uitleg: "1 cm op kaart = 200 cm werkelijk = 2 m." }],
          theorie: "Kaart → werkelijk: × schaal-getal, dan eenheid omzetten.",
          voorbeelden: [{ type: "stap", tekst: "9 cm × 200 = 1800 cm. 1800÷100 = 18 m." }],
          basiskennis: [{ onderwerp: "cm → m", uitleg: "100 cm = 1 m. 1800 cm = 18 m." }],
          niveaus: { basis: "18 m.", simpeler: "9 cm × 200 (schaal) = 1800 cm = 18 m werkelijk.", nogSimpeler: "18 m" },
        },
      },
      {
        q: "**Klas A: 12 jongens, 16 meisjes. Klas B: 9 jongens, 12 meisjes**. Welke klas heeft **dezelfde verhouding** jongens:meisjes?",
        options: ["Beide hetzelfde","Klas A heeft naar verhouding meer jongens","Klas B heeft naar verhouding meer jongens","Niet te zeggen"],
        answer: 0,
        wrongHints: [null,"Vereenvoudig beide verhoudingen zo ver mogelijk — zijn ze dan gelijk?","Vereenvoudig beide verhoudingen en vergelijk ze dan.","Wel te zeggen — vereenvoudig de verhoudingen."],
        uitlegPad: {
          stappen: [{ titel: "Vereenvoudig beide", tekst: "Klas A: 12:16 ÷4 = 3:4. Klas B: 9:12 ÷3 = 3:4. Zelfde verhouding!" }],
          woorden: [{ woord: "vergelijken", uitleg: "Vereenvoudig beide naar simpelste vorm en vergelijk." }],
          theorie: "Twee verhoudingen vergelijken: vereenvoudig beide → kijk of identiek.",
          voorbeelden: [{ type: "stap", tekst: "Klas A: 12:16 → ÷4 → 3:4. Klas B: 9:12 → ÷3 → 3:4. Beide 3:4." }],
          basiskennis: [{ onderwerp: "Aantal ≠ verhouding", uitleg: "A heeft meer leerlingen, maar B heeft DEZELFDE verhouding." }],
          niveaus: { basis: "Beide 3:4.", simpeler: "Klas A: 12:16 = 3:4 (÷4). Klas B: 9:12 = 3:4 (÷3). Verhouding identiek.", nogSimpeler: "3:4 beide" },
        },
      },
      {
        q: "**Recept** voor 4 pannenkoeken: 200 g meel, 1 ei, 300 ml melk. Hoeveel **meel** voor **12 pannenkoeken**?",
        options: ["600 g","300 g","800 g","200 g"],
        answer: 0,
        wrongHints: [null, "Te weinig — hoe vaak past recept van 4 in 12 pannenkoeken? Gebruik die factor voor het meel.", "Te veel — geen × 4 nodig.", "Onveranderd — heb je vermenigvuldigen overgeslagen?"],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: vergrotingsfactor", tekst: "Hoeveel keer GROTER is recept B? 12 pannenkoeken ÷ 4 pannenkoeken = **3 keer groter**. Alle ingrediënten moeten dus × 3." },
            { titel: "Stap 2: ingrediënten × 3", tekst: "• Meel: 200 g × 3 = **600 g**\n• Ei: 1 × 3 = **3 eieren**\n• Melk: 300 ml × 3 = **900 ml**\n\nAlle 3 ingrediënten in dezelfde verhouding aanpassen — anders verandert de smaak." },
            { titel: "Toets-truc: recept-rekenen", tekst: "Bij recept-vragen:\n1. **Bereken factor**: gewenst aantal ÷ oorspronkelijk aantal\n2. **Vermenigvuldig** ALLE ingrediënten met die factor\n3. **Check** met andere ingrediënt of factor klopt\n\nLet op: factor kan ook **kleiner dan 1** zijn (bv. recept voor 6 → 4 pannenkoeken = 4÷6 = 2/3 × alles)." },
          ],
          woorden: [
            { woord: "verhoudingsfactor", uitleg: "Getal waarmee je alles vermenigvuldigt om naar nieuwe verhouding te komen." },
            { woord: "recept", uitleg: "Lijst van ingrediënten + hoeveelheden voor een gerecht." },
          ],
          theorie: "Recept-omrekenen-stappenplan:\n1. Wat is de **factor**? Nieuw-aantal ÷ oud-aantal.\n2. **Alle** ingrediënten × factor.\n3. Klopt het? Controleer met een ander ingrediënt.\n\nWerkt ook voor:\n• Verf voor groter oppervlak\n• Drank voor meer mensen\n• Geld voor meer dagen vakantie",
          voorbeelden: [
            { type: "stap", tekst: "Cake voor 6: 250 g suiker. Voor 9 personen: 9÷6 = 1,5. 250 × 1,5 = 375 g suiker." },
            { type: "stap", tekst: "Limonade voor 4 glazen: 100 ml siroop. Voor 10 glazen: 10÷4 = 2,5. 100 × 2,5 = 250 ml." },
          ],
          basiskennis: [{ onderwerp: "Alles aanpassen", uitleg: "Niet ALLEEN meel × 3. Ook ei + melk × 3. Anders verandert smaak/textuur." }],
          niveaus: { basis: "600 g.", simpeler: "12 ÷ 4 = 3 (factor). Meel: 200 × 3 = 600 g.", nogSimpeler: "600 g" },
        },
      },
      {
        q: "Op een **kaart 1:25.000** is een weg **8 cm**. Hoe **lang** is de weg in werkelijkheid?",
        options: ["2 km","200 m","20 km","2 m"],
        answer: 0,
        wrongHints: [null, "Te kort — heb je wel het juiste schaal-getal gebruikt?", "Te lang — reken de cm om naar km: hoeveel meter is 8 × 25.000 cm?", "Veel te kort — eenheid omrekenen vergeten?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is schaal 1:25.000?", tekst: "**Schaal 1:25.000** = **1 cm op kaart komt overeen met 25.000 cm werkelijk**. Of: kaart is 25.000× kleiner dan werkelijkheid." },
            { titel: "Stap 1: × schaal-getal", tekst: "8 cm op kaart × 25.000 = **200.000 cm** werkelijk." },
            { titel: "Stap 2: eenheden omrekenen", tekst: "200.000 cm = 2.000 m (÷ 100) = **2 km** (÷ 1.000). Antwoord: weg is 2 km lang.\n\n**Toets-tip schaal-conversie**:\n• 1:25.000 → 1 cm = 250 m = 0,25 km\n• 1:50.000 → 1 cm = 500 m = 0,5 km\n• 1:100.000 → 1 cm = 1 km\n• 1:200.000 → 1 cm = 2 km" },
          ],
          woorden: [
            { woord: "schaal", uitleg: "Verhouding kaart vs werkelijkheid. 1:25.000 = kaart is 25.000× kleiner." },
            { woord: "topografische kaart", uitleg: "Detail-kaart met landschap, wegen, gebouwen. Vaak schaal 1:25.000 of 1:50.000." },
          ],
          theorie: "Schaal-rekenen-aanpak:\n1. **Kaart → werkelijkheid**: × schaal-getal (vermenigvuldig)\n2. **Werkelijkheid → kaart**: ÷ schaal-getal (deel)\n3. **Eenheid omrekenen** (meestal cm → m → km)\n\nHandige cm-m-km conversie:\n• 100 cm = 1 m\n• 1.000 m = 1 km\n• 100.000 cm = 1 km",
          voorbeelden: [
            { type: "stap", tekst: "Plattegrond 1:100. Tafel 5 cm = 5×100 = 500 cm = 5 m." },
            { type: "stap", tekst: "Stad-kaart 1:10.000. Park 12 cm = 12×10.000 = 120.000 cm = 1,2 km." },
          ],
          basiskennis: [{ onderwerp: "Eenheid in antwoord", uitleg: "Veel Toets-fouten = vergeten cm naar m of km om te zetten. Antwoord 200.000 cm = 2 km — gewone weg-lengte." },],
          niveaus: { basis: "2 km.", simpeler: "8 cm × 25.000 = 200.000 cm. ÷100 = 2.000 m. ÷1.000 = 2 km.", nogSimpeler: "2 km" },
        },
      },
      {
        q: "Een **muur van 4 m²** kost **€ 12** verf. Hoeveel verf nodig voor **muur van 10 m²**?",
        options: ["€ 30","€ 20","€ 25","€ 40"],
        answer: 0,
        wrongHints: [null, "Te weinig — controleer prijs per m².", "Te weinig — bereken eerst de prijs per m² en vermenigvuldig dan met 10.", "Te veel — controleer hoeveelheid per m²."],
        uitlegPad: {
          stappen: [
            { titel: "Stap 1: prijs per m²", tekst: "€ 12 voor 4 m² → 12 ÷ 4 = **€ 3 per m²**. Dit is de **eenheidsprijs**." },
            { titel: "Stap 2: vermenigvuldig", tekst: "10 m² × € 3/m² = **€ 30**.\n\nOf: directe verhouding 4:12 = 10:?\n→ Vermenigvuldigingsfactor: 10 ÷ 4 = 2,5.\n→ 12 × 2,5 = € 30. Beide methoden geven hetzelfde." },
            { titel: "Toets-tip: prijs-per-eenheid", tekst: "Bij verhoudings-vragen met geld/oppervlakte/inhoud: bereken **prijs per eenheid** eerst.\n• Aantal × prijs per eenheid = totaal\n• Totaal ÷ aantal = prijs per eenheid\n\nGebruikt bij:\n• Schilderen (€/m²)\n• Eten kopen (€/kg)\n• Reisplan (km/uur of €/km)" },
          ],
          woorden: [
            { woord: "eenheidsprijs", uitleg: "Prijs per 1 eenheid (per m², per kg, per stuk)." },
            { woord: "evenredig", uitleg: "Twee groottes die samen op- of afnemen in vaste verhouding." },
          ],
          theorie: "Wanneer is iets EVENREDIG?\n• Meer m² muur → meer verf nodig (evenredig)\n• Meer kinderen op feestje → meer taart (evenredig)\n• Meer afstand → meer benzine (evenredig, ongeveer)\n\n**Niet evenredig**:\n• Lengte vs gewicht persoon (groei is anders)\n• Studie-uren vs cijfers (afnemende meeropbrengst)",
          voorbeelden: [
            { type: "stap", tekst: "5 liter benzine = €10. 12 liter? €10÷5 = €2/L. 12 × €2 = €24." },
            { type: "stap", tekst: "3 boeken kosten €18. 1 boek = €6. 7 boeken = €42." },
          ],
          basiskennis: [{ onderwerp: "Niet alleen vermenigvuldigen", uitleg: "Belangrijke stap: EERST prijs per eenheid berekenen, DAN vermenigvuldigen. Niet vergeten." }],
          niveaus: { basis: "€30.", simpeler: "€12 voor 4 m² = €3/m². Voor 10 m²: 10 × €3 = €30.", nogSimpeler: "€30" },
        },
      },
      { q: "In een klas van 28 leerlingen zijn 12 jongens. Verhouding jongens : meisjes?", options: ["12 : 16","16 : 12","12 : 28","28 : 12"], answer: 0, wrongHints: [null, "Andersom — jongens eerst.", "Tweede getal moet meisjes zijn, niet totaal.", "Andersom."] },
      { q: "Schaal 1 : 1.000 — een straat is 5 cm op de kaart. Echt?", options: ["50 m","5 m","500 m","5 km"], answer: 0, wrongHints: [null, "Te weinig — vermenigvuldig met 1.000 en reken de cm om naar m.", "Te veel — controleer je omrekening van cm naar m.", "Veel te groot."] },
      { q: "Recept voor 4 personen wil je voor 8 — vermenigvuldig met?", options: ["2","4","½","8"], answer: 0, wrongHints: [null, "Niet — alles ×4 = te veel.", "Halveren = minder.", "Niet zo."] },
      { q: "1 fles cola = €1,50. 6 flessen = ?", options: ["€9","€6","€1,50","€15"], answer: 0, wrongHints: [null, "Niet vermenigvuldigd.", "1 fles.", "Te veel."] },
      { q: "Verhouding 2:3. Bij 2 = 10, bij 3 = ?", options: ["15","13","20","30"], answer: 0, wrongHints: [null, "Niet — verhouding behouden.", "Niet.", "Niet."] },
      { q: "Schaal 1:100 — 3 cm op tekening = echt?", options: ["3 m","30 cm","30 m","3 km"], answer: 0, wrongHints: [null, "Te klein.", "Te groot.", "Veel te groot."] },
      { q: "Sap : water = 1 : 3. 200 mL sap → hoeveel water?", options: ["600 mL","200 mL","100 mL","300 mL"], answer: 0, wrongHints: [null, "Gelijk = 1:1.", "Te weinig.", "1,5×."] },
      { q: "120 km in 2 uur = welke snelheid?", options: ["60 km/u","120 km/u","240 km/u","30 km/u"], answer: 0, wrongHints: [null, "Dat is afstand.", "Te hoog.", "Niet."] },
      { q: "Schaal 1:5 op een tekening. 2 cm op de tekening = hoeveel in het echt?", options: ["10 cm","5 cm","½ cm","20 cm"], answer: 0, wrongHints: [null, "Niet vermenigvuldigd.", "Andersom.", "Niet."] },
      { q: "8 m² muur kost 12 euro verf. 24 m²?", options: ["€36","€18","€48","€12"], answer: 0, wrongHints: [null, "Te weinig.", "Te veel.", "Geen vermenigvuldiging."] },
      { q: "Op kaart 1:50.000 is 4 cm = welke afstand?", options: ["2 km","20 m","200 m","20 km"], answer: 0, wrongHints: [null, "Te weinig.", "Niet.", "Te veel."] },
      { q: "Wat is een **verhouding**?", options: ["Een vergelijking tussen getallen, zoals 2 : 3","De uitkomst van een plussom","De uitkomst van een minsom","De uitkomst van een keersom"], answer: 0, wrongHints: [null, "Optellen.", "Aftrekken.", "Vermenigvuldigen."] },
      { q: "5 leerlingen in 3 banken — gemiddeld?", options: ["~1,7","3","5","~2,5"], answer: 0, wrongHints: [null, "Aantal banken.", "Aantal leerlingen.", "Dat zou bij 2 banken horen."] },
      { q: "Recept 2 eieren voor 4 personen. Voor 6 personen?", options: ["3 eieren","2 eieren","4 eieren","6 eieren"], answer: 0, wrongHints: [null, "Niet meer.", "Te veel.", "Niet zo."] },
      { q: "Plant groeit 5 cm in 2 weken. Per week?", options: ["2,5 cm","5 cm","7 cm","10 cm"], answer: 0, wrongHints: [null, "Dat is 2 weken.", "Niet — niet plus.", "Te veel."] },
      { q: "Schaal 1:25 — model van 8 cm = echt?", options: ["2 m","25 m","2 cm","20 cm"], answer: 0, wrongHints: [null, "Te veel.", "Te weinig.", "Niet."] },
      { q: "Mix: 3 deel zout + 1 deel peper. 12 g totaal. Hoeveel zout?", options: ["9 g","3 g","6 g","12 g"], answer: 0, wrongHints: [null, "Dat is peper.", "Helft.", "Hele."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const verhoudingenPo = {
  id: "verhoudingen-po",
  title: "Verhoudingen — Doorstroomtoets groep 5-8",
  emoji: "⚖️",
  level: "groep5-8",
  subject: "rekenen",
  referentieNiveau: "1F",
  sloThema: "Verhoudingen — recepten en schaal",
  prerequisites: [
    { id: "cijferend-rekenen", title: "Cijferend rekenen", niveau: "po-1F" },
    { id: "breuken-po", title: "Breuken", niveau: "po-1F" },
  ],
  intro:
    "Verhoudingen voor groep 5-8: wat is een verhouding, recepten omrekenen, verhoudingstabellen, schaal op de kaart. Doorstroomtoets-stijl praktijksommen. ~15 min.",
  triggerKeywords: [
    "verhouding","verhoudingen","recept","schaal","kaart",
    "vereenvoudigen","verhoudingstabel","mengsel","omrekenen",
  ],
  chapters,
  steps,
};

export default verhoudingenPo;

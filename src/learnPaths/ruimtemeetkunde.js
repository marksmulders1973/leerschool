// Leerpad: Ruimtemeetkunde — vanaf de basis
// Hoofdstuk 8 uit Getal & Ruimte FLEX deel 2 (havo/vwo klas 2)
// Onderwerpen: oppervlakte, omtrek, inhoud, vergrotingsfactor (k, k², k³)
// Niveau: alsof tegen iemand die net kan rekenen.

// Interactieve 3D-componenten — per check ID (RM-Sx-Qy). Vervangen de standaard
// multiple-choice check in LearnPath.jsx als step.interactiveComponent gezet is.
// RM-S8 + RM-S12 lopen via Shape3D-registry (questions3d.js). RM-S6 is een
// speciaal geval (vergelijking 4 figuren) en blijft een dedicated component.
import RmS6Q1 from "../components/learn/3d/RM-S6-Q1.jsx";
import { make3DInteractiveComponent } from "../components/learn/3d/Question3DRenderer.jsx";
const RmS7Q1 = make3DInteractiveComponent("RM-S7-Q1");
const RmS8Q1 = make3DInteractiveComponent("RM-S8-Q1");
const RmS9Q1 = make3DInteractiveComponent("RM-S9-Q1");
const RmS10Q1 = make3DInteractiveComponent("RM-S10-Q1");
const RmS12Q1 = make3DInteractiveComponent("RM-S12-Q1");

const COLORS = {
  axis: "#e0e6f0",
  grid: "#2a3f5f",
  curve: "#00c853",
  curve2: "#69f0ae",
  curveAlt: "#ff7043",
  curveAlt2: "#ffab91",
  point: "#ffd54f",
  text: "#e0e6f0",
  muted: "#8899aa",
};

// Mini-emoji per stap (zelfde volgorde als steps[])
const stepEmojis = [
  "🟩", "▭", "🔺",                    // A. Oppervlakte
  "📏", "🤔", "⭕",                    // B. Omtrek
  "🎲", "🧊", "⬜", "📦",              // C. Inhoud balk/kubus
  "🥫", "🔵", "🔻", "🍦",              // D. Cilinder/piramide/kegel
  "🔍", "✖️", "🔢",                    // E. Vergrotingsfactor
  "↔️", "🔁", "🟦", "🟫", "📋",        // F. k/k²/k³ regel
  "🧱", "🏛️", "🐠",                    // G. Eindopdrachten
  "📝",                                // H. Examenstijl
];

const chapters = [
  { letter: "A", title: "Oppervlakte (2D)", emoji: "🟩", from: 0, to: 2 },
  { letter: "B", title: "Omtrek (2D)", emoji: "📏", from: 3, to: 5 },
  { letter: "C", title: "Inhoud van een balk en kubus (3D)", emoji: "📦", from: 6, to: 9 },
  { letter: "D", title: "Cilinder, piramide en kegel", emoji: "🥫", from: 10, to: 13 },
  { letter: "E", title: "De vergrotingsfactor", emoji: "🔍", from: 14, to: 16 },
  { letter: "F", title: "Wat doet vergroten met omtrek/oppervlakte/inhoud?", emoji: "📐", from: 17, to: 21 },
  { letter: "G", title: "Eindopdrachten", emoji: "🏁", from: 22, to: 24 },
  { letter: "H", title: "Examenstijl — VMBO-GT CSE", emoji: "📝", from: 25, to: 25 },
];

const steps = [
  // ─── A. Oppervlakte ────────────────────────────
  {
    title: "Wat is oppervlakte?",
    explanation: "**Oppervlakte** is hoeveel **plat** vlak iets bedekt. Denk aan: hoeveel verf je nodig hebt om een muur te schilderen, of hoeveel tegels er op een vloer liggen.\n\nEen handige manier om over oppervlakte te denken: tel het aantal **vierkantjes** dat in de figuur past.\n\nIn het plaatje hieronder zie je een rechthoek van **4 vakjes lang** en **3 vakjes breed**. Tellen: 4 × 3 = **12 vakjes**. Oppervlakte = **12**.\n\nWe geven oppervlakte vaak in vierkante eenheden:\n• cm² (vierkante centimeter)\n• m² (vierkante meter)\n\nHet kleine 2-tje slaat op het feit dat je in **twee richtingen** meet: lengte én breedte.",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="opp-cell" width="20" height="20" patternUnits="userSpaceOnUse">
<rect width="20" height="20" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="1.2"/>
</pattern>
</defs>
<rect x="60" y="60" width="80" height="60" fill="url(#opp-cell)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="100" y="40" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4 vakjes lang</text>
<text x="35" y="93" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">3 hoog</text>
<text x="100" y="150" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">4 × 3 = 12 vakjes</text>
<text x="100" y="170" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial">oppervlakte = 12</text>
<g transform="translate(180, 65)">
<text x="40" y="0" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">één vakje:</text>
<rect x="20" y="10" width="20" height="20" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="1.2"/>
<text x="60" y="25" fill="${COLORS.text}" font-size="11" font-family="Arial">= 1 cm²</text>
<text x="40" y="65" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">(als zijde 1 cm is)</text>
</g>
</svg>`,
    checks: [
      {
        q: "Een rechthoek is 5 vakjes lang en 4 vakjes breed. Wat is de oppervlakte?",
        options: ["20 vakjes", "9 vakjes", "54 vakjes", "20 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 5 + 4 gedaan. Maar bij oppervlakte tel je het aantal vakjes — dat krijg je door **vermenigvuldigen**, niet optellen.",
          "Niet de cijfers naast elkaar zetten. Reken 5 keer 4.",
          "Het getal klopt, maar de eenheid niet: oppervlakte is in vierkante eenheden (cm² of vakjes), geen gewone cm.",
        ],
      },
    ],
  },
  {
    title: "Oppervlakte van een rechthoek",
    explanation: "De vuistregel voor een rechthoek:\n\n**oppervlakte = lengte × breedte**\n\nHet maakt niet uit welke je eerst neemt — vermenigvuldigen mag in elke volgorde.\n\nVoorbeelden:\n• Rechthoek van 7 cm bij 3 cm: oppervlakte = 7 × 3 = **21 cm²**\n• Vierkant van 5 cm bij 5 cm: oppervlakte = 5 × 5 = **25 cm²**\n• Rechthoek van 10 m bij 4 m: oppervlakte = 10 × 4 = **40 m²**\n\nLet op de eenheid: als je beide zijden in **cm** geeft, is het antwoord in **cm²**. In **m**? Dan **m²**.\n\nEen **vierkant** is een speciale rechthoek waarbij lengte = breedte. Dus oppervlakte = zijde × zijde = **zijde²** (denk terug aan de kwadraat-uitleg).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="60" width="100" height="50" fill="rgba(0,200,83,0.18)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="90" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">10 cm</text>
<text x="25" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4 cm</text>
<text x="90" y="92" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">40 cm²</text>
<text x="90" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">10 × 4 = 40</text>
<rect x="200" y="50" width="60" height="60" fill="rgba(255,112,67,0.18)" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="230" y="40" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5 cm</text>
<text x="195" y="83" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5 cm</text>
<text x="230" y="85" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">25 cm²</text>
<text x="230" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5 × 5 = 25</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">rechthoek                                  vierkant</text>
</svg>`,
    checks: [
      {
        q: "Wat is de oppervlakte van een rechthoek van 8 m bij 6 m?",
        options: ["48 m²", "14 m²", "48 m", "36 m²"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 8 + 6 gedaan (optellen). Bij oppervlakte moet je vermenigvuldigen.",
          "Het getal klopt, maar de eenheid is m² (vierkante meter), niet m.",
          "Hoe kom je aan 36? Reken nog eens: 8 × 6 = ?",
        ],
      },
      {
        q: "Wat is de oppervlakte van een vierkant met zijde 9 cm?",
        options: ["81 cm²", "18 cm²", "36 cm²", "9 cm²"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 9 + 9 gedaan. Maar bij vierkant is oppervlakte = zijde × zijde.",
          "Hoe kom je aan 36? Reken nog: 9 × 9 = ?",
          "Je hebt alleen één zijde gepakt. Bij vierkant moet je 2 zijdes vermenigvuldigen.",
        ],
      },
    ],
  },
  {
    title: "Andere figuren: driehoek",
    explanation: "Niet alle figuren zijn rechthoeken. Een **driehoek** heeft een eigen formule:\n\n**oppervlakte driehoek = ½ × basis × hoogte**\n\nDe **basis** is een van de zijden (meestal de onderkant). De **hoogte** is de afstand van de basis recht omhoog naar de tegenoverliggende top — en dat moet **loodrecht** (dus haaks) op de basis.\n\nWaarom de ½? Omdat een driehoek precies de **helft** is van een rechthoek met dezelfde basis en hoogte. Kijk maar naar het plaatje: je kunt een rechthoek altijd diagonaal in tweeën knippen — twee gelijke driehoeken.\n\nVoorbeeld: een driehoek met basis 10 cm en hoogte 6 cm:\noppervlakte = ½ × 10 × 6 = ½ × 60 = **30 cm²**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="60" width="100" height="60" fill="rgba(255,112,67,0.10)" stroke="${COLORS.curveAlt}" stroke-width="1" stroke-dasharray="4 3"/>
<polygon points="40,120 140,120 40,60" fill="rgba(0,200,83,0.25)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="90" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">basis = 10</text>
<text x="25" y="93" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">hoogte</text>
<text x="25" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">= 6</text>
<line x1="40" y1="60" x2="46" y2="60" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="46" y1="60" x2="46" y2="66" stroke="${COLORS.text}" stroke-width="1"/>
<line x1="46" y1="66" x2="40" y2="66" stroke="${COLORS.text}" stroke-width="1"/>
<text x="190" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">helft van rechthoek:</text>
<text x="190" y="105" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">½ × 10 × 6</text>
<text x="190" y="130" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">= 30 cm²</text>
<text x="80" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">de driehoek (groen) is de helft van de rechthoek (oranje gestippeld)</text>
</svg>`,
    checks: [
      {
        q: "Wat is de oppervlakte van een driehoek met basis 8 cm en hoogte 5 cm?",
        options: ["20 cm²", "40 cm²", "13 cm²", "20 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de **½** vergeten. Een driehoek is de helft van een rechthoek met dezelfde maten.",
          "Je hebt 8 + 5 gedaan. Maar bij oppervlakte vermenigvuldig je (en hier ook nog door 2 delen).",
          "Het getal klopt, maar het is een **oppervlakte** — eenheid moet cm² zijn.",
        ],
      },
    ],
  },

  // ─── B. Omtrek ────────────────────────────
  {
    title: "Wat is omtrek?",
    explanation: "**Omtrek** is iets heel anders dan oppervlakte. Het is **hoe ver je moet lopen rondom** een figuur — alle zijden bij elkaar opgeteld.\n\nDenk aan: hoeveel hek je nodig hebt om een tuin af te rasteren. Dat is omtrek.\n\nEen rechthoek heeft **4 zijden**: 2 lange (lengte) en 2 korte (breedte). De omtrek is dus:\n\n**omtrek rechthoek = lengte + breedte + lengte + breedte = 2 × lengte + 2 × breedte**\n\nVoorbeeld: een rechthoek van 7 cm bij 3 cm:\nomtrek = 7 + 3 + 7 + 3 = **20 cm**\nOf: 2 × 7 + 2 × 3 = 14 + 6 = **20 cm**\n\nLet op: omtrek meet je in **gewone cm of m** (geen cm² of m²) — want je meet één lijn-rondje, niet een oppervlak.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="80" y="60" width="140" height="60" fill="none" stroke="${COLORS.curve}" stroke-width="3"/>
<line x1="80" y1="60" x2="220" y2="60" stroke="${COLORS.curveAlt}" stroke-width="4"/>
<line x1="220" y1="60" x2="220" y2="120" stroke="${COLORS.curve2}" stroke-width="4"/>
<line x1="220" y1="120" x2="80" y2="120" stroke="${COLORS.curveAlt}" stroke-width="4"/>
<line x1="80" y1="120" x2="80" y2="60" stroke="${COLORS.curve2}" stroke-width="4"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="12" font-family="Arial">7 cm</text>
<text x="60" y="93" text-anchor="middle" fill="${COLORS.curve2}" font-size="12" font-family="Arial">3 cm</text>
<text x="150" y="138" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="12" font-family="Arial">7 cm</text>
<text x="240" y="93" text-anchor="middle" fill="${COLORS.curve2}" font-size="12" font-family="Arial">3 cm</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">7 + 3 + 7 + 3 = 20 cm</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">helemaal rondom: alle zijden samen</text>
</svg>`,
    checks: [
      {
        q: "Wat is de omtrek van een rechthoek van 6 m bij 4 m?",
        options: ["20 m", "24 m²", "10 m", "24 m"],
        answer: 0,
        wrongHints: [
          null,
          "24 zou de **oppervlakte** zijn (6 × 4). Maar omtrek is alle zijden bij elkaar: 6 + 4 + 6 + 4.",
          "Je hebt alleen één lange en één korte zijde geteld. Maar elke rechthoek heeft **2 lange** en **2 korte** zijden.",
          "Het getal lijkt op de oppervlakte, niet de omtrek. Reken: 2 × 6 + 2 × 4 = ?",
        ],
      },
    ],
  },
  {
    title: "Oppervlakte vs omtrek — niet door elkaar halen!",
    explanation: "Veel leerlingen halen **oppervlakte** en **omtrek** door elkaar. Houd dit vast:\n\n• **Oppervlakte** = hoeveel **vlak** de figuur bedekt → tel **vierkantjes** binnenin → eenheid **cm²** of **m²**\n• **Omtrek** = hoe ver het is **rondom** de figuur → tel **alle zijden** op → eenheid gewone **cm** of **m**\n\nVergelijk:\n\n| | Oppervlakte | Omtrek |\n|--|-------------|--------|\n| Vraag | Hoeveel ruimte erin? | Hoe ver eromheen? |\n| Reken | lengte × breedte | 2 × l + 2 × b |\n| Eenheid | cm² | cm |\n| Voorbeeld 4×3 | 12 cm² | 14 cm |\n\nKijk goed naar het plaatje: dezelfde rechthoek (4 bij 3 cm) heeft oppervlakte **12 cm²** maar omtrek **14 cm**. Heel andere getallen, heel ander concept.",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="opp-cell2" width="20" height="20" patternUnits="userSpaceOnUse">
<rect width="20" height="20" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="1"/>
</pattern>
</defs>
<rect x="30" y="50" width="80" height="60" fill="url(#opp-cell2)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="70" y="40" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">4 cm</text>
<text x="20" y="83" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">3 cm</text>
<text x="70" y="135" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">oppervlakte</text>
<text x="70" y="150" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">= 4 × 3 = 12 cm²</text>
<text x="70" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(tel de vakjes)</text>
<rect x="170" y="50" width="80" height="60" fill="none" stroke="${COLORS.curveAlt}" stroke-width="3"/>
<text x="210" y="40" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">4</text>
<text x="160" y="83" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">3</text>
<text x="210" y="125" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">4</text>
<text x="260" y="83" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">3</text>
<text x="210" y="150" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">omtrek</text>
<text x="210" y="165" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">= 4+3+4+3 = 14 cm</text>
<text x="210" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(loop rondom)</text>
</svg>`,
    checks: [
      {
        q: "Een rechthoek is 10 cm bij 5 cm. Wat is de oppervlakte?",
        options: ["50 cm²", "30 cm²", "30 cm", "50 cm"],
        answer: 0,
        wrongHints: [
          null,
          "30 zou de omtrek zijn (10+5+10+5). Voor oppervlakte: lengte × breedte.",
          "Het getal is verkeerd én de eenheid: oppervlakte = 10 × 5 = 50 cm² (in cm-kwadraat).",
          "Het getal klopt, maar de eenheid niet: oppervlakte gebruikt cm² (vierkante cm).",
        ],
      },
      {
        q: "Een rechthoek is 10 cm bij 5 cm. Wat is de omtrek?",
        options: ["30 cm", "50 cm", "30 cm²", "15 cm"],
        answer: 0,
        wrongHints: [
          null,
          "50 zou de oppervlakte zijn (10 × 5). Voor omtrek: alle zijden bij elkaar.",
          "Het getal lijkt OK, maar de eenheid niet — omtrek is in **gewone** cm, geen cm².",
          "Je hebt alleen één lange + één korte zijde gedaan. Een rechthoek heeft er **vier**.",
        ],
      },
    ],
  },
  {
    title: "Omtrek van een cirkel",
    explanation: "Bij een **cirkel** werkt het anders, want er is geen 'zijde' om op te tellen. De omtrek hangt af van de **straal** of **diameter**.\n\n• **straal (r)** = afstand van het midden naar de rand\n• **diameter (d)** = de hele lijn dwars door het midden = **2 × straal**\n\nDe omtrek van een cirkel is:\n\n**omtrek cirkel = 2 × π × r** (of: **π × d**)\n\nWat is **π** (uitspraak: pi)? Het is een speciaal getal: ongeveer **3,14**. Het komt op de wereld in elke cirkel die je kunt tekenen — heel bijzonder.\n\nVoorbeeld: een cirkel met straal 5 cm:\nomtrek = 2 × π × 5 = 10 × π ≈ 10 × 3,14 = **31,4 cm**\n\nMet een rekenmachine kun je de exacte π-knop gebruiken voor preciezer antwoord.",
    svg: `<svg viewBox="0 0 300 200">
<circle cx="100" cy="100" r="55" fill="rgba(0,200,83,0.15)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<line x1="100" y1="100" x2="155" y2="100" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="125" y="93" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">r = 5</text>
<line x1="45" y1="100" x2="155" y2="100" stroke="${COLORS.point}" stroke-width="1" stroke-dasharray="4 3"/>
<text x="100" y="125" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial">d = 10</text>
<circle cx="100" cy="100" r="2.5" fill="${COLORS.text}"/>
<text x="200" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">π ≈ 3,14</text>
<text x="200" y="105" fill="${COLORS.text}" font-size="11" font-family="Arial">omtrek = 2 × π × r</text>
<text x="200" y="125" fill="${COLORS.text}" font-size="11" font-family="Arial">         = 2 × 3,14 × 5</text>
<text x="200" y="145" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">         ≈ 31,4 cm</text>
</svg>`,
    checks: [
      {
        q: "Wat is de omtrek van een cirkel met straal 4 cm? (gebruik π ≈ 3,14)",
        options: [
          "ongeveer 25,1 cm",
          "ongeveer 12,6 cm",
          "ongeveer 50,2 cm",
          "ongeveer 16 cm",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt π × r gedaan. Maar de formule is **2 × π × r** — vergeet de 2 niet.",
          "Je hebt 2 × 2 × π × r gedaan (dus dubbel). De formule is gewoon 2 × π × r = 2 × 3,14 × 4.",
          "Je bent de π vergeten en hebt alleen 2 × 2 × r of zoiets gedaan. Probeer: 2 × 3,14 × 4 = ?",
        ],
      },
    ],
  },

  // ─── C. Inhoud van een balk en kubus (3D) ────────────────────────────
  {
    title: "Van 2D naar 3D",
    interactiveComponent: RmS6Q1, // RM-S6-Q1 — interactieve 3D-dobbelsteen ipv multiple-choice
    explanation: "Tot nu praatten we over **platte** figuren: rechthoeken, vierkanten, cirkels. Die zijn **2D** (twee dimensies: lengte en breedte). Ze hebben oppervlakte en omtrek.\n\nNu gaan we naar **3D**-figuren: figuren die ook **diepte** of **hoogte** hebben. Denk aan:\n• Een **kubus** (zoals een dobbelsteen)\n• Een **balk** (zoals een schoenendoos)\n• Een **cilinder** (zoals een blikje)\n• Een **piramide** (zoals in Egypte)\n• Een **kegel** (zoals een ijshoorntje)\n\n3D-figuren hebben naast oppervlakte ook iets nieuws: **inhoud** — hoeveel ruimte er **in** past.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="30" y="80" width="60" height="40" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="60" y="145" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">2D rechthoek</text>
<text x="60" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(plat)</text>
<g transform="translate(160, 65)">
<polygon points="0,30 60,30 60,70 0,70" fill="rgba(0,200,83,0.30)" stroke="${COLORS.curve}" stroke-width="2"/>
<polygon points="0,30 25,5 85,5 60,30" fill="rgba(0,200,83,0.50)" stroke="${COLORS.curve}" stroke-width="2"/>
<polygon points="60,30 85,5 85,45 60,70" fill="rgba(0,200,83,0.40)" stroke="${COLORS.curve}" stroke-width="2"/>
</g>
<text x="200" y="145" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">3D balk</text>
<text x="200" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">(heeft diepte)</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.point}" font-size="10" font-family="Arial" font-style="italic">2D = oppervlakte · 3D = oppervlakte + inhoud</text>
</svg>`,
    checks: [
      {
        q: "Welke figuur heeft inhoud?",
        options: ["Een dobbelsteen", "Een geverfde rechthoek op een muur", "Een driehoek getekend op papier", "Een lijntje van 5 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Een geverfde rechthoek is plat (2D) — je kunt er niets in stoppen. Een dobbelsteen wel.",
          "Een driehoek op papier is 2D — heeft alleen oppervlakte, geen inhoud.",
          "Een lijntje is 1D (alleen lengte). Heeft niet eens oppervlakte, laat staan inhoud.",
        ],
      },
    ],
  },
  {
    title: "Wat is inhoud?",
    interactiveComponent: RmS7Q1, // RM-S7-Q1 — 4×2×1 balk met "Tel de blokjes" (8 stuks)
    explanation: "**Inhoud** is hoeveel ruimte er **in** een 3D-figuur past. Denk aan:\n• Hoeveel water er in een fles past\n• Hoeveel zand er in een doos past\n• Hoeveel suikerklontjes er in een kistje passen\n\nEenheden voor inhoud:\n• **cm³** (kubieke centimeter)\n• **m³** (kubieke meter)\n• **liter** (1 liter = 1000 cm³ = 1 dm³)\n\nHet kleine **3-tje** slaat op het feit dat je nu in **drie** richtingen meet: lengte, breedte én hoogte.\n\nEen handige manier om over inhoud te denken: tel het aantal **kleine kubusjes** (blokjes) dat in de figuur past. Dat is precies de inhoud.",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(50, 50)">
<g stroke="${COLORS.curve}" stroke-width="1.2" fill="rgba(0,200,83,0.18)">
<polygon points="0,40 80,40 80,80 0,80"/>
<polygon points="0,40 20,20 100,20 80,40"/>
<polygon points="80,40 100,20 100,60 80,80"/>
</g>
<line x1="20" y1="40" x2="20" y2="80" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="40" y1="40" x2="40" y2="80" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="60" y1="40" x2="60" y2="80" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="0" y1="60" x2="80" y2="60" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="40" y1="20" x2="40" y2="40" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="60" y1="20" x2="60" y2="40" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="20" y1="20" x2="20" y2="40" stroke="${COLORS.curve}" stroke-width="0.7"/>
<line x1="80" y1="60" x2="100" y2="40" stroke="${COLORS.curve}" stroke-width="0.7"/>
</g>
<text x="170" y="70" fill="${COLORS.text}" font-size="11" font-family="Arial">4 lang</text>
<text x="170" y="90" fill="${COLORS.text}" font-size="11" font-family="Arial">1 breed</text>
<text x="170" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">2 hoog</text>
<text x="170" y="135" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">= 8 blokjes</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">inhoud = aantal blokjes dat erin past</text>
</svg>`,
    checks: [
      {
        q: "Wat meet 'inhoud'?",
        options: [
          "Hoeveel ruimte er in een 3D-figuur past",
          "Hoe ver de buitenkant rond gaat",
          "Hoeveel oppervlakte een figuur heeft",
          "Hoe lang een lijn is",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is **omtrek**, niet inhoud.",
          "Dat is **oppervlakte**, niet inhoud. Inhoud heeft te maken met 3D — wat erin past.",
          "Dat is gewoon **lengte**. Inhoud meet ruimte in 3D.",
        ],
      },
    ],
  },
  {
    title: "Inhoud van een kubus",
    interactiveComponent: RmS8Q1, // RM-S8-Q1 — draaibare 5×5×5 kubus met "Tel de blokjes"-animatie
    explanation: "Een **kubus** is een speciale balk waarbij **alle zijden even lang** zijn (zoals een dobbelsteen).\n\nAls de zijde **z** lang is, dan past in de kubus:\n• z langs de lengte\n• z langs de breedte\n• z langs de hoogte\n\nDus het aantal blokjes is **z × z × z = z³**.\n\n**inhoud kubus = z³**\n\nKlinkt bekend? z² is een vierkant in 2D (oppervlakte). z³ is een **kubus** in 3D (inhoud). Daarom heet **'kwadraat'** een vierkant en **'derdemacht'** of **'kubiek'** een kubus.\n\nVoorbeeld: kubus met zijde 4 cm:\ninhoud = 4 × 4 × 4 = **64 cm³**\n\nLet op: zijde 4 cm geeft inhoud in cm³ — drie keer cm vermenigvuldigd.",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(80, 40)">
<g stroke="${COLORS.curve}" stroke-width="2" fill="rgba(0,200,83,0.20)">
<polygon points="0,30 60,30 60,90 0,90"/>
<polygon points="0,30 25,5 85,5 60,30"/>
<polygon points="60,30 85,5 85,65 60,90"/>
</g>
</g>
<text x="110" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">z = 4 cm</text>
<text x="180" y="55" fill="${COLORS.text}" font-size="11" font-family="Arial">inhoud = z × z × z</text>
<text x="180" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">         = z³</text>
<text x="180" y="100" fill="${COLORS.text}" font-size="11" font-family="Arial">         = 4 × 4 × 4</text>
<text x="180" y="125" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">         = 64 cm³</text>
</svg>`,
    checks: [
      {
        q: "Wat is de inhoud van een kubus met zijde 5 cm?",
        options: ["125 cm³", "25 cm³", "15 cm³", "125 cm²"],
        answer: 0,
        wrongHints: [
          null,
          "25 zou de oppervlakte zijn van één **vlak** (5 × 5). Maar inhoud is 3D: 5 × 5 × 5.",
          "Je hebt 5 + 5 + 5 gedaan (optellen). Bij inhoud moet je vermenigvuldigen.",
          "Het getal klopt, maar de eenheid niet: cm³ (kubiek), niet cm² (vierkant). 3D = 3 keer cm.",
        ],
      },
    ],
  },
  {
    title: "Inhoud van een balk",
    interactiveComponent: RmS9Q1, // RM-S9-Q1 — balk 8×5×2 met blokjes-teller en formule-overlay
    explanation: "Een **balk** is een 3D-figuur met (meestal) drie verschillende zijden: **lengte**, **breedte** en **hoogte**. Denk aan een schoenendoos.\n\n**inhoud balk = lengte × breedte × hoogte**\n\nDe volgorde maakt niet uit — vermenigvuldigen mag in elke volgorde.\n\nVoorbeeld 1: balk van 6 cm × 4 cm × 3 cm:\ninhoud = 6 × 4 × 3 = 24 × 3 = **72 cm³**\n\nVoorbeeld 2: balk van 10 m × 2 m × 5 m (een container?):\ninhoud = 10 × 2 × 5 = **100 m³**\n\n**Tip**: een **kubus** is gewoon een balk waarvan lengte = breedte = hoogte. Die formule (z³) is dus eigenlijk een speciaal geval van 'lengte × breedte × hoogte'.",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(50, 50)">
<g stroke="${COLORS.curve}" stroke-width="2" fill="rgba(0,200,83,0.20)">
<polygon points="0,30 100,30 100,80 0,80"/>
<polygon points="0,30 25,10 125,10 100,30"/>
<polygon points="100,30 125,10 125,60 100,80"/>
</g>
</g>
<text x="100" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">lengte = 6</text>
<text x="35" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">breedte = 4</text>
<text x="195" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">hoogte = 3</text>
<text x="100" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">6 × 4 × 3</text>
<text x="100" y="160" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">= 72 cm³</text>
</svg>`,
    checks: [
      {
        q: "Een balk is 8 cm lang, 5 cm breed en 2 cm hoog. Wat is de inhoud?",
        options: ["80 cm³", "15 cm³", "40 cm³", "80 cm²"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 8 + 5 + 2 gedaan. Bij inhoud moet je vermenigvuldigen, niet optellen.",
          "Je hebt alleen 8 × 5 = 40 gedaan (oppervlakte van één vlak). Maar je moet ook nog × hoogte (× 2) doen.",
          "Het getal klopt, maar de eenheid niet: inhoud is in cm³ (3D), niet cm² (2D).",
        ],
      },
    ],
  },

  // ─── D. Cilinder, piramide, kegel ────────────────────────────
  {
    title: "Inhoud van een cilinder",
    interactiveComponent: RmS10Q1, // RM-S10-Q1 — draaibare cilinder r=2, h=5 met formule-overlay
    explanation: "Een **cilinder** ziet eruit als een blikje of een buis. Het heeft:\n• Een ronde **bodem** (een cirkel met straal r)\n• Een ronde **bovenkant** (zelfde cirkel)\n• Een **hoogte** h\n\nDe formule:\n\n**inhoud cilinder = π × r² × h**\n\nWaarom? De bodem is een cirkel met oppervlakte π × r² (komt straks terug bij oppervlakte cirkel). Die oppervlakte vermenigvuldig je met de hoogte — net als bij een balk: grondvlak × hoogte.\n\nVoorbeeld: cilinder met straal 3 cm en hoogte 10 cm (gebruik π ≈ 3,14):\ninhoud = 3,14 × 3² × 10 = 3,14 × 9 × 10 = **282,6 cm³**\n\nVolgorde: eerst r² uitrekenen, dan keer π, dan keer h.",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(80, 40)">
<ellipse cx="40" cy="20" rx="40" ry="12" fill="rgba(0,200,83,0.30)" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="0" y1="20" x2="0" y2="100" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="80" y1="20" x2="80" y2="100" stroke="${COLORS.curve}" stroke-width="2"/>
<path d="M 0 100 A 40 12 0 0 0 80 100" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<path d="M 0 100 A 40 12 0 0 1 80 100" fill="none" stroke="${COLORS.curve}" stroke-width="1" stroke-dasharray="3 2"/>
<line x1="40" y1="20" x2="80" y2="20" stroke="${COLORS.curveAlt}" stroke-width="1.5"/>
<text x="60" y="14" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">r</text>
</g>
<text x="120" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">straal r = 3</text>
<text x="190" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">↕ h</text>
<text x="190" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">= 10</text>
<text x="180" y="125" fill="${COLORS.text}" font-size="10" font-family="Arial">π × r² × h</text>
<text x="180" y="143" fill="${COLORS.text}" font-size="10" font-family="Arial">= 3,14 × 9 × 10</text>
<text x="180" y="165" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">= 282,6 cm³</text>
</svg>`,
    checks: [
      {
        q: "Inhoud van een cilinder met straal 2 cm en hoogte 5 cm? (π ≈ 3,14)",
        options: [
          "ongeveer 62,8 cm³",
          "ongeveer 31,4 cm³",
          "ongeveer 20 cm³",
          "ongeveer 125,6 cm³",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt π × r × h gedaan. Maar de formule is π × **r²** × h — vergeet het kwadraat niet.",
          "Je bent de π vergeten. Of je hebt alleen r × h gedaan zonder cirkel-oppervlakte.",
          "Je hebt π × r² × h × 2 gedaan (dubbel). De formule is gewoon π × r² × h = 3,14 × 4 × 5.",
        ],
      },
    ],
  },
  {
    title: "Oppervlakte van een cirkel",
    explanation: "Even een tussenstap: de **oppervlakte** van een cirkel.\n\n**oppervlakte cirkel = π × r²**\n\nWeer met die geheimzinnige π (≈ 3,14). Het kleine 2-tje slaat op het kwadraat van de straal.\n\nVoorbeeld: cirkel met straal 5 cm:\noppervlakte = π × 5² = 3,14 × 25 = **78,5 cm²**\n\nLet op: bij oppervlakte krijg je cm² (vierkant), bij omtrek cm (gewoon).\n\n**Samenvatting cirkel:**\n\n| Wat | Formule | Eenheid |\n|-----|---------|---------|\n| omtrek | 2 × π × r | cm |\n| oppervlakte | π × r² | cm² |\n\nVerschil: bij omtrek vermenigvuldig je r één keer, bij oppervlakte twee keer (kwadraat).",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="circ-cell" width="14" height="14" patternUnits="userSpaceOnUse">
<rect width="14" height="14" fill="rgba(0,200,83,0.18)" stroke="${COLORS.curve}" stroke-width="0.6"/>
</pattern>
</defs>
<circle cx="100" cy="100" r="55" fill="url(#circ-cell)" stroke="${COLORS.curve}" stroke-width="2.5"/>
<line x1="100" y1="100" x2="155" y2="100" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="125" y="93" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">r = 5</text>
<circle cx="100" cy="100" r="2.5" fill="${COLORS.text}"/>
<text x="200" y="80" fill="${COLORS.text}" font-size="11" font-family="Arial">oppervlakte = π × r²</text>
<text x="200" y="105" fill="${COLORS.text}" font-size="11" font-family="Arial">              = 3,14 × 25</text>
<text x="200" y="130" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">              ≈ 78,5 cm²</text>
</svg>`,
    checks: [
      {
        q: "Oppervlakte van een cirkel met straal 3 cm? (π ≈ 3,14)",
        options: [
          "ongeveer 28,3 cm²",
          "ongeveer 18,8 cm²",
          "ongeveer 9,4 cm²",
          "ongeveer 6 cm²",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 2 × π × r gedaan — dat is **omtrek**. Voor oppervlakte: π × r² (zonder de 2).",
          "Je hebt π × r gedaan. Maar je moet r eerst kwadrateren (r²) voor oppervlakte.",
          "Je bent de π vergeten en hebt alleen 2 × r gedaan. Probeer 3,14 × 3².",
        ],
      },
    ],
  },
  {
    title: "Inhoud van een piramide",
    interactiveComponent: RmS12Q1, // RM-S12-Q1 — draaibare piramide met toggle "toon omsluitende balk"
    explanation: "Een **piramide** is 3D-figuur met een **plat grondvlak** (vaak een vierkant of rechthoek) en alle zijden lopen omhoog naar één **toppunt**.\n\n**inhoud piramide = ⅓ × oppervlakte grondvlak × hoogte**\n\nWaarom de **⅓**? Een piramide is precies **een derde** van een balk met dezelfde grond en hoogte. Drie piramides passen samen in één balk — bijzonder maar waar.\n\nVoorbeeld: piramide met vierkant grondvlak van 6 × 6 cm en hoogte 9 cm:\n• grondvlak = 6 × 6 = 36 cm²\n• inhoud = ⅓ × 36 × 9 = ⅓ × 324 = **108 cm³**\n\nLet op: 'hoogte' is de **rechte** hoogte van het grondvlak naar de top — niet de schuine zijde van de piramide.",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(60, 30)">
<polygon points="0,90 80,90 100,110 20,110" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<polygon points="0,90 60,10 80,90" fill="rgba(0,200,83,0.30)" stroke="${COLORS.curve}" stroke-width="2"/>
<polygon points="80,90 60,10 100,110" fill="rgba(0,200,83,0.40)" stroke="${COLORS.curve}" stroke-width="2"/>
<line x1="60" y1="10" x2="60" y2="100" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="3 3"/>
<text x="65" y="60" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">h = 9</text>
</g>
<text x="120" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">grondvlak 6 × 6 = 36</text>
<text x="180" y="50" fill="${COLORS.text}" font-size="10" font-family="Arial">⅓ × grondvlak × h</text>
<text x="180" y="75" fill="${COLORS.text}" font-size="10" font-family="Arial">= ⅓ × 36 × 9</text>
<text x="180" y="100" fill="${COLORS.text}" font-size="10" font-family="Arial">= ⅓ × 324</text>
<text x="180" y="125" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">= 108 cm³</text>
</svg>`,
    checks: [
      {
        q: "Piramide met vierkant grondvlak 4 × 4 cm en hoogte 6 cm. Inhoud?",
        options: ["32 cm³", "96 cm³", "24 cm³", "48 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de **⅓** vergeten. Een piramide is 3 keer kleiner dan een balk met zelfde grond+hoogte.",
          "Je hebt ⅓ × oppervlakte zónder × hoogte gedaan. De formule is ⅓ × grondvlak × hoogte = ⅓ × 16 × 6.",
          "Je hebt ½ in plaats van ⅓ gebruikt. De factor voor een piramide is **⅓** (delen door 3), niet door 2.",
        ],
      },
    ],
  },
  {
    title: "Inhoud van een kegel",
    explanation: "Een **kegel** is als een ijshoorntje of een verkeerskegel: een **rond** grondvlak met een **toppunt**.\n\nDe formule lijkt op die van een piramide:\n\n**inhoud kegel = ⅓ × π × r² × h**\n\nUitleg:\n• π × r² is de oppervlakte van het ronde grondvlak (zoals bij een cilinder)\n• Maal de hoogte h\n• En weer dat ⅓ — net als piramide is een kegel een derde van een cilinder met zelfde grond+hoogte\n\nVoorbeeld: kegel met straal 3 cm en hoogte 7 cm (π ≈ 3,14):\ninhoud = ⅓ × 3,14 × 3² × 7\n        = ⅓ × 3,14 × 9 × 7\n        = ⅓ × 197,82\n        ≈ **65,9 cm³**\n\n**Vergelijk:**\n• Cilinder met zelfde maten: π × r² × h ≈ 197,8 cm³\n• Kegel: een **derde** daarvan ≈ 65,9 cm³",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(70, 30)">
<polygon points="0,110 80,110 40,10" fill="rgba(0,200,83,0.30)" stroke="${COLORS.curve}" stroke-width="2"/>
<ellipse cx="40" cy="110" rx="40" ry="12" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<path d="M 0 110 A 40 12 0 0 1 80 110" fill="none" stroke="${COLORS.curve}" stroke-width="1.5"/>
<line x1="40" y1="10" x2="40" y2="110" stroke="${COLORS.curveAlt}" stroke-width="1.5" stroke-dasharray="3 3"/>
<text x="45" y="60" fill="${COLORS.curveAlt}" font-size="10" font-family="Arial">h = 7</text>
<line x1="40" y1="110" x2="80" y2="110" stroke="${COLORS.point}" stroke-width="1.5"/>
<text x="62" y="123" fill="${COLORS.point}" font-size="10" font-family="Arial">r = 3</text>
</g>
<text x="180" y="50" fill="${COLORS.text}" font-size="10" font-family="Arial">⅓ × π × r² × h</text>
<text x="180" y="75" fill="${COLORS.text}" font-size="10" font-family="Arial">= ⅓ × 3,14 × 9 × 7</text>
<text x="180" y="100" fill="${COLORS.text}" font-size="10" font-family="Arial">= ⅓ × 197,82</text>
<text x="180" y="125" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">≈ 65,9 cm³</text>
</svg>`,
    checks: [
      {
        q: "Kegel met straal 6 cm en hoogte 4 cm (π ≈ 3,14). Inhoud?",
        options: [
          "ongeveer 150,7 cm³",
          "ongeveer 452,2 cm³",
          "ongeveer 75,4 cm³",
          "ongeveer 24 cm³",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Je bent de **⅓** vergeten. Dat geeft de cilinder-inhoud, niet de kegel-inhoud. Deel nog door 3.",
          "Je hebt ⅓ × π × r × h gedaan. Maar het is **r²** — dus 6² = 36, niet 6.",
          "Te klein. Reken nog: ⅓ × 3,14 × 6² × 4 = ⅓ × 3,14 × 36 × 4.",
        ],
      },
    ],
  },

  // ─── E. De vergrotingsfactor ────────────────────────────
  {
    title: "Wat is vergroten?",
    explanation: "**Vergroten** of **verkleinen** is iets uniform groter (of kleiner) maken. Alle afmetingen veranderen met **dezelfde factor**.\n\nDenk aan een foto: als je 'm 2× zo groot maakt op je computer, wordt:\n• De breedte 2× zo breed\n• De hoogte 2× zo hoog\n• Maar de **vorm** blijft gelijk (geen vervorming)\n\nIn wiskunde noemen we dat getal de **vergrotingsfactor**. Vaak gebruiken we de letter **k** ervoor.\n\n• **k = 2** → twee keer zo groot\n• **k = 3** → drie keer zo groot\n• **k = ½** → de helft (verkleinen)\n• **k = 1** → niets verandert\n\nLet op: dezelfde k voor **alle** afmetingen. Anders zou je de figuur uitrekken of platslaan.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="80" width="40" height="30" fill="rgba(0,200,83,0.25)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="60" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">origineel</text>
<text x="60" y="150" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">4 × 3</text>
<line x1="100" y1="95" x2="135" y2="95" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="135,90 145,95 135,100" fill="${COLORS.point}"/>
<text x="117" y="85" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">k = 2</text>
<rect x="160" y="65" width="80" height="60" fill="rgba(255,112,67,0.20)" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="200" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vergroting</text>
<text x="200" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">8 × 6</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">elke afmeting × 2</text>
</svg>`,
    checks: [
      {
        q: "Een foto wordt vergroot met factor k = 3. Wat gebeurt er met de breedte?",
        options: [
          "Wordt 3 keer zo breed",
          "Blijft hetzelfde",
          "Wordt 3 cm breder",
          "Wordt 9 keer zo breed",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Bij vergroten verandert juist alles. Met factor 3 wordt elke afmeting 3 keer zo groot.",
          "Vergrotingsfactor is een **maal**-getal, geen plus-getal. k = 3 betekent **maal** 3.",
          "9 zou kloppen voor oppervlakte (3²), niet voor breedte zelf. De breedte gaat gewoon × 3.",
        ],
      },
    ],
  },
  {
    title: "De vergrotingsfactor uitrekenen",
    explanation: "Hoe vind je de **vergrotingsfactor k** als je een origineel en een vergroting hebt?\n\n**k = afmeting beeld ÷ afmeting origineel**\n\nIn woorden: deel een afmeting van het vergrote door dezelfde afmeting van het origineel.\n\nVoorbeelden:\n• Origineel 4 cm, beeld 12 cm → k = 12 ÷ 4 = **3** (3 keer zo groot)\n• Origineel 10 m, beeld 5 m → k = 5 ÷ 10 = **½** (verkleining tot helft)\n• Origineel 8 cm, beeld 8 cm → k = 8 ÷ 8 = **1** (niet veranderd)\n\n**Belangrijk**: het maakt niet uit welke afmeting je gebruikt — k is voor alle afmetingen hetzelfde. Of je nu de lengte of de breedte deelt, het zelfde getal komt eruit.\n\nAls de getallen niet kloppen voor verschillende afmetingen, is het **geen** echte vergroting (de figuur is dan vervormd).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="30" y="100" width="40" height="30" fill="rgba(0,200,83,0.25)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="50" y="148" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4 × 3</text>
<text x="50" y="93" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">origineel</text>
<rect x="120" y="50" width="120" height="90" fill="rgba(255,112,67,0.20)" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="180" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">12 × 9</text>
<text x="180" y="42" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">beeld</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">k = 12 ÷ 4 = 3   (of: 9 ÷ 3 = 3)</text>
</svg>`,
    checks: [
      {
        q: "Origineel is 5 cm, beeld is 20 cm. Wat is de vergrotingsfactor k?",
        options: ["k = 4", "k = 25", "k = 15", "k = ¼"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 5 × 5 gedaan, of zoiets. De formule is k = beeld ÷ origineel = 20 ÷ 5.",
          "Je hebt 20 − 5 gedaan (aftrekken). Maar k werkt met **delen**, niet aftrekken.",
          "Je hebt origineel ÷ beeld gedaan. Andersom: beeld ÷ origineel.",
        ],
      },
      {
        q: "Origineel 8 cm, beeld 4 cm. Wat is k?",
        options: ["k = ½", "k = 2", "k = 4", "k = -4"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt origineel ÷ beeld gedaan. Het is andersom: beeld ÷ origineel = 4 ÷ 8 = ½.",
          "Je hebt 8 ÷ 4 ÷ 2 gedaan. Of beeld − origineel. Beide klopt niet — k = beeld ÷ origineel.",
          "k is altijd positief — een 'verkleining' is gewoon een k tussen 0 en 1, niet negatief.",
        ],
      },
    ],
  },
  {
    title: "Vergrotingsfactor toepassen",
    explanation: "Als je k weet, kun je elke afmeting van een origineel **omrekenen** naar de bijbehorende afmeting in het beeld:\n\n**afmeting beeld = afmeting origineel × k**\n\nEn andersom:\n\n**afmeting origineel = afmeting beeld ÷ k**\n\nVoorbeeld: een foto van 6 cm bij 4 cm wordt vergroot met k = 2,5.\n• nieuwe lengte = 6 × 2,5 = **15 cm**\n• nieuwe breedte = 4 × 2,5 = **10 cm**\n\nVoorbeeld: een grote tekening (30 cm) wordt verkleind tot 12 cm. Verkleining-factor?\n• k = 12 ÷ 30 = **0,4** (oftewel ⅖)\n\nMet k = 0,4 kun je nu elke andere afmeting omrekenen naar de verkleinde versie.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="80" width="50" height="35" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="45" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">6 × 4 cm</text>
<text x="45" y="68" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">origineel</text>
<text x="115" y="98" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">× k</text>
<text x="115" y="115" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial">(= × 2,5)</text>
<line x1="90" y1="100" x2="140" y2="100" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="140,95 150,100 140,105" fill="${COLORS.point}"/>
<rect x="160" y="50" width="125" height="88" fill="rgba(255,112,67,0.18)" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="222" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">15 × 10 cm</text>
<text x="222" y="40" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">beeld</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">6 × 2,5 = 15  ·  4 × 2,5 = 10</text>
</svg>`,
    checks: [
      {
        q: "Een rechthoek van 7 cm wordt vergroot met k = 4. Hoe lang wordt het beeld?",
        options: ["28 cm", "11 cm", "1,75 cm", "3 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld: 7 + 4. Maar k is een **maal**-factor. Reken: 7 × 4.",
          "Je hebt origineel ÷ k gedaan. Bij vergroten doe je origineel **×** k.",
          "Je hebt origineel − k gedaan. Maar k werkt met vermenigvuldigen, niet aftrekken.",
        ],
      },
    ],
  },

  // ─── F. Wat doet vergroten met omtrek/oppervlakte/inhoud? ────────────────────────────
  {
    title: "Lengtes vergroten met factor k",
    explanation: "We zagen al: bij vergroting met factor k worden **alle lengtes** k× zo groot.\n\nDus als je een figuur vergroot met k = 3:\n• elke zijde wordt 3× zo lang\n• elke straal wordt 3× zo lang\n• elke hoogte wordt 3× zo hoog\n\n**Eenvoudig**: lengte → k × lengte\n\nMaar wat doet dat met **omtrek**, **oppervlakte** en **inhoud**? Dat gaan we de volgende drie stappen uitzoeken. Het antwoord is verrassend — vooral voor oppervlakte en inhoud.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="60" x2="100" y2="60" stroke="${COLORS.curve}" stroke-width="4"/>
<text x="70" y="50" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5 cm</text>
<text x="70" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">origineel</text>
<text x="180" y="65" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">× k = × 3</text>
<line x1="40" y1="135" x2="220" y2="135" stroke="${COLORS.curveAlt}" stroke-width="4"/>
<text x="130" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">15 cm</text>
<text x="130" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">na vergroten</text>
<text x="150" y="185" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">5 × 3 = 15</text>
</svg>`,
    checks: [
      {
        q: "Een lijntje is 7 cm. Bij vergroting met k = 5 wordt het ...",
        options: ["35 cm", "12 cm", "2 cm", "70 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld. Bij k = 5 vermenigvuldig je: 7 × 5.",
          "Je hebt 7 ÷ 5 gedaan. Maar bij vergroten doe je × (vermenigvuldigen).",
          "Te groot. Reken nog: 7 × 5 = ?",
        ],
      },
    ],
  },
  {
    title: "Omtrek bij vergroten",
    explanation: "Omtrek is **één** afstand (gewoon rondom). Net als gewone lengtes vergroot ook de omtrek met factor k:\n\n**omtrek beeld = k × omtrek origineel**\n\nKijk: als alle zijden k× zo lang worden, dan is hun **som** ook k× zo groot. Logisch.\n\nVoorbeeld: rechthoek 4 × 3 cm, omtrek = 14 cm.\nVergroot met k = 2 → rechthoek wordt 8 × 6 cm, omtrek = 8 + 6 + 8 + 6 = **28 cm**.\nDat is precies 14 × 2 = 28. ✓\n\n**Onthoud**: omtrek schaalt **net als gewone lengte**. Eenvoudig.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="30" y="80" width="60" height="40" fill="none" stroke="${COLORS.curve}" stroke-width="2.5"/>
<text x="60" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">4 × 3</text>
<text x="60" y="150" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">omtrek 14</text>
<text x="60" y="68" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">origineel</text>
<line x1="105" y1="100" x2="135" y2="100" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="135,95 145,100 135,105" fill="${COLORS.point}"/>
<text x="120" y="90" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">k=2</text>
<rect x="160" y="60" width="120" height="80" fill="none" stroke="${COLORS.curveAlt}" stroke-width="2.5"/>
<text x="220" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">8 × 6</text>
<text x="220" y="170" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">omtrek 28 (= 2 × 14) ✓</text>
<text x="220" y="48" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">beeld</text>
</svg>`,
    checks: [
      {
        q: "Een driehoek heeft omtrek 12 cm. Vergroot met k = 4. Wat is de nieuwe omtrek?",
        options: ["48 cm", "16 cm", "12 cm", "3 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt opgeteld: 12 + 4. Bij vergroten vermenigvuldig je: 12 × 4.",
          "Bij k = 4 verandert de omtrek wel — vier keer zo groot. Niet hetzelfde.",
          "Je hebt 12 ÷ 4 gedaan. Bij **ver**groten doe je vermenigvuldigen, niet delen.",
        ],
      },
    ],
  },
  {
    title: "Oppervlakte bij vergroten — k² !",
    explanation: "Hier wordt het interessant. Bij vergroting met factor k wordt de **oppervlakte** **niet** k× zo groot, maar **k²** (k kwadraat) zo groot:\n\n**oppervlakte beeld = k² × oppervlakte origineel**\n\nWaarom? Een oppervlakte ontstaat uit **twee** lengtes (lengte × breedte). Beide worden k× — dus samen worden ze **k × k = k²** keer.\n\nVoorbeeld: vierkant van 3 × 3 cm, oppervlakte 9 cm².\nVergroot met k = 2 → vierkant wordt 6 × 6, oppervlakte 36 cm².\n9 × 4 = 36 ✓ (dus k² = 2² = 4)\n\nVoorbeeld 2: rechthoek 4 × 5 cm, oppervlakte 20 cm². k = 3.\nNieuwe oppervlakte = 20 × 9 = **180 cm²** (k² = 3² = 9)\n\n**Verdubbel je een figuur** (k=2)? Dan wordt de **oppervlakte 4 × zo groot**. Niet 2×! Dat gokken veel mensen mis.",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="opp-cell-c" width="20" height="20" patternUnits="userSpaceOnUse">
<rect width="20" height="20" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="0.7"/>
</pattern>
</defs>
<rect x="20" y="100" width="40" height="40" fill="url(#opp-cell-c)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="40" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">2 × 2</text>
<text x="40" y="175" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">opp = 4</text>
<line x1="75" y1="120" x2="105" y2="120" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="105,115 115,120 105,125" fill="${COLORS.point}"/>
<text x="90" y="110" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">k=2</text>
<rect x="125" y="60" width="80" height="80" fill="url(#opp-cell-c)" stroke="${COLORS.curveAlt}" stroke-width="2"/>
<text x="165" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">4 × 4</text>
<text x="165" y="175" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">opp = 16</text>
<text x="265" y="100" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">× 4 (= k²)</text>
<text x="265" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">niet × 2</text>
</svg>`,
    checks: [
      {
        q: "Een figuur heeft oppervlakte 5 cm². Vergroot met k = 3. Nieuwe oppervlakte?",
        options: ["45 cm²", "15 cm²", "8 cm²", "5 cm²"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt × k gedaan. Maar oppervlakte gaat met **k²**. k = 3 → k² = 9. Dan 5 × 9 = ?",
          "Je hebt 5 + 3 gedaan. Maar oppervlakte vermenigvuldig je met k², niet plus.",
          "Bij vergroten verandert oppervlakte wél — en zelfs sterker dan je denkt: × k², niet × k.",
        ],
      },
    ],
  },
  {
    title: "Inhoud bij vergroten — k³ !",
    explanation: "En bij **inhoud** (3D) gaat het nog verder. Vergroot je een 3D-figuur met factor k? Dan wordt de inhoud **k³** (k tot de derde) keer zo groot:\n\n**inhoud beeld = k³ × inhoud origineel**\n\nWaarom k³? Inhoud ontstaat uit **drie** lengtes (lengte × breedte × hoogte). Alle drie worden k× → k × k × k = **k³**.\n\nVoorbeeld: kubus zijde 2 cm, inhoud 8 cm³. Vergroot met k = 2.\n• Nieuwe zijde = 4 cm\n• Nieuwe inhoud = 4 × 4 × 4 = 64 cm³\n• Of via k³ = 2³ = 8: 8 × 8 = 64 ✓\n\n**Belangrijk inzicht**: een kubus 2× zo groot maken geeft een inhoud **8× zo groot**! Dat is waarom een 'iets grotere' fles ineens veel meer water bevat dan je denkt.\n\nDe reden waarom een baby zo licht is en een volwassene zoveel zwaarder: bij dubbele lengte word je 8× zo zwaar (volume × 8).",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(20, 80)">
<g stroke="${COLORS.curve}" stroke-width="1.5" fill="rgba(0,200,83,0.20)">
<polygon points="0,20 30,20 30,50 0,50"/>
<polygon points="0,20 12,8 42,8 30,20"/>
<polygon points="30,20 42,8 42,38 30,50"/>
</g>
</g>
<text x="35" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">2 × 2 × 2</text>
<text x="35" y="170" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">inh = 8</text>
<line x1="80" y1="100" x2="115" y2="100" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="115,95 125,100 115,105" fill="${COLORS.point}"/>
<text x="98" y="90" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">k=2</text>
<g transform="translate(140, 50)">
<g stroke="${COLORS.curveAlt}" stroke-width="1.5" fill="rgba(255,112,67,0.20)">
<polygon points="0,40 60,40 60,100 0,100"/>
<polygon points="0,40 25,15 85,15 60,40"/>
<polygon points="60,40 85,15 85,75 60,100"/>
</g>
</g>
<text x="200" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">4 × 4 × 4</text>
<text x="200" y="185" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">inh = 64</text>
<text x="265" y="100" text-anchor="middle" fill="${COLORS.curveAlt}" font-size="11" font-family="Arial" font-weight="bold">× 8 (= k³)</text>
<text x="265" y="118" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">niet × 2</text>
</svg>`,
    checks: [
      {
        q: "Een fles heeft inhoud 100 cm³. Vergroot met k = 2. Nieuwe inhoud?",
        options: ["800 cm³", "200 cm³", "400 cm³", "100 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt × k gedaan. Maar inhoud gaat met **k³**. k = 2 → k³ = 8. Dan 100 × 8 = ?",
          "Je hebt × k² gedaan (dat is voor oppervlakte). Voor inhoud is het **k³** = 8.",
          "Bij vergroten verandert inhoud wél — en heel sterk: × k³, dus 8× zo groot bij k=2.",
        ],
      },
    ],
  },
  {
    title: "Samenvatting — de regel van k, k², k³",
    explanation: "Even alles op een rij. Bij vergroting met factor **k**:\n\n| Wat | Factor | Bij k = 2 | Bij k = 3 |\n|-----|--------|-----------|-----------|\n| Lengte (1D) | × **k** | 2× | 3× |\n| Omtrek (1D) | × **k** | 2× | 3× |\n| Oppervlakte (2D) | × **k²** | 4× | 9× |\n| Inhoud (3D) | × **k³** | 8× | 27× |\n\n**Geheugentruc**: kijk naar het kleine cijfertje achter cm:\n• cm (1D) → factor k¹ = k\n• cm² (2D) → factor k²\n• cm³ (3D) → factor k³\n\nDe **macht** in de eenheid is precies de macht van k. Best handig.\n\n**Welk getal bij welke vraag?** Stel je iets vergroot met k = 4. Dan:\n• Lengte 4× zo groot\n• Oppervlakte 16× zo groot (4²)\n• Inhoud 64× zo groot (4³)\n\nKlinkt veel — en dat klopt. Daarom bevat een dubbel zo grote ballon ineens 8× zoveel lucht.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="40" x2="110" y2="40" stroke="${COLORS.curve2}" stroke-width="4"/>
<text x="135" y="44" fill="${COLORS.text}" font-size="12" font-family="Arial">lengte</text>
<text x="200" y="44" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">× k</text>
<text x="240" y="44" fill="${COLORS.muted}" font-size="11" font-family="Arial">(1D)</text>
<rect x="50" y="75" width="50" height="35" fill="rgba(0,200,83,0.20)" stroke="${COLORS.curve}" stroke-width="2"/>
<text x="135" y="98" fill="${COLORS.text}" font-size="12" font-family="Arial">oppervlakte</text>
<text x="220" y="98" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">× k²</text>
<text x="252" y="98" fill="${COLORS.muted}" font-size="11" font-family="Arial">(2D)</text>
<g transform="translate(50, 140)" stroke="${COLORS.curveAlt}" stroke-width="2" fill="rgba(255,112,67,0.20)">
<polygon points="0,15 50,15 50,45 0,45"/>
<polygon points="0,15 12,3 62,3 50,15"/>
<polygon points="50,15 62,3 62,33 50,45"/>
</g>
<text x="135" y="170" fill="${COLORS.text}" font-size="12" font-family="Arial">inhoud</text>
<text x="200" y="170" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">× k³</text>
<text x="240" y="170" fill="${COLORS.muted}" font-size="11" font-family="Arial">(3D)</text>
</svg>`,
    checks: [
      {
        q: "Vergroting met k = 5. Hoeveel keer zo groot wordt de oppervlakte?",
        options: ["25×", "5×", "125×", "10×"],
        answer: 0,
        wrongHints: [
          null,
          "5 zou de **lengte**-factor zijn. Voor oppervlakte gebruik je k² = 5² = ?",
          "125 = 5³ is voor **inhoud**. Voor oppervlakte (2D) is het k² = 25.",
          "Je hebt 5 × 2 gedaan. Voor oppervlakte: k², dus 5 × 5 = 25.",
        ],
      },
      {
        q: "Vergroting met k = 5. Hoeveel keer zo groot wordt de inhoud?",
        options: ["125×", "25×", "5×", "15×"],
        answer: 0,
        wrongHints: [
          null,
          "25 = k² is voor **oppervlakte** (2D). Voor inhoud (3D) gebruik je k³ = 5×5×5.",
          "5 zou alleen lengte zijn. Inhoud schaalt met k³.",
          "Je hebt 5 × 3 gedaan. Voor inhoud: k³ = 5 × 5 × 5 = 125.",
        ],
      },
    ],
  },

  // ─── G. Eindopdrachten ────────────────────────────
  {
    title: "Eindopdracht 1: tegels op een vloer",
    explanation: "Praktisch voorbeeld. Een vloer is **5 m bij 4 m**. Hij wordt betegeld met vierkante tegels van **20 cm bij 20 cm**.\n\n**Vraag 1**: Wat is de oppervlakte van de vloer?\n→ 5 × 4 = **20 m²**\n\n**Vraag 2**: Wat is de oppervlakte van één tegel?\n→ 20 × 20 = **400 cm²** = **0,04 m²** (let op de eenheid!)\n\n**Vraag 3**: Hoeveel tegels heb je nodig?\n→ 20 m² ÷ 0,04 m² = **500 tegels**\n\n**Tip**: bij dit soort vraagstukken altijd opletten dat alle eenheden hetzelfde zijn. Reken cm en m **niet** door elkaar.\n\nDe eindopdracht hieronder gaat over hetzelfde idee.",
    svg: `<svg viewBox="0 0 300 200">
<defs>
<pattern id="tegels" width="20" height="20" patternUnits="userSpaceOnUse">
<rect width="20" height="20" fill="rgba(255,112,67,0.15)" stroke="${COLORS.curveAlt}" stroke-width="1"/>
</pattern>
</defs>
<rect x="40" y="40" width="200" height="120" fill="url(#tegels)" stroke="${COLORS.curve}" stroke-width="3"/>
<text x="140" y="30" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">5 m</text>
<text x="28" y="105" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">4 m</text>
<text x="140" y="98" text-anchor="middle" fill="${COLORS.point}" font-size="14" font-family="Arial" font-weight="bold">vloer 20 m²</text>
<text x="140" y="115" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">tegels 20 × 20 cm</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">20 ÷ 0,04 = 500 tegels</text>
</svg>`,
    checks: [
      {
        q: "Vloer 6 m bij 5 m. Tegels 50 cm bij 50 cm (= ½ m bij ½ m). Hoeveel tegels?",
        options: ["120 tegels", "30 tegels", "60 tegels", "240 tegels"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt alleen 6 × 5 = 30 gedaan (vloer-oppervlakte in m²). Maar je moet nog delen door tegel-oppervlakte (¼ m²): 30 ÷ ¼ = 120.",
          "Je hebt vloer ÷ tegel-zijde gedaan. Maar tegels zijn 2D — gebruik tegel-**oppervlakte**: ½ × ½ = ¼ m².",
          "Te veel. Tegel-oppervlakte = ½ × ½ = ¼ m². Vloer = 30 m². 30 ÷ ¼ = 120 — niet 240.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 2: maquette van een gebouw",
    explanation: "Een architect maakt een **maquette** (kleine 3D-versie) van een gebouw met **schaal 1 : 50** — dat betekent: 1 cm in de maquette = 50 cm in het echt. De vergrotingsfactor van **maquette → echt gebouw** is dus **k = 50**.\n\nDe maquette is een blokvormig gebouw van 20 cm × 10 cm × 8 cm.\n\n**Vraag 1**: Wat is de inhoud van de maquette?\n→ 20 × 10 × 8 = **1600 cm³**\n\n**Vraag 2**: Wat is de inhoud van het echte gebouw (in m³)?\n→ Inhoud schaalt met k³ = 50³ = 125 000\n→ Echt = 1600 × 125 000 = 200 000 000 cm³\n→ = **200 m³** (delen door 1 000 000 want 1 m³ = 1 000 000 cm³)\n\n**Vraag 3**: Hoeveel keer zo groot is de oppervlakte van het echte gebouw?\n→ k² = 50² = **2500 keer** (gevels van het gebouw zijn 2500× zo groot als die op de maquette)",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(20, 95)" stroke="${COLORS.curve}" stroke-width="2" fill="rgba(0,200,83,0.20)">
<polygon points="0,30 50,30 50,75 0,75"/>
<polygon points="0,30 15,15 65,15 50,30"/>
<polygon points="50,30 65,15 65,60 50,75"/>
</g>
<text x="50" y="190" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">maquette</text>
<text x="50" y="80" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">20×10×8 cm</text>
<text x="125" y="100" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">× k = × 50</text>
<line x1="100" y1="105" x2="145" y2="105" stroke="${COLORS.point}" stroke-width="2"/>
<polygon points="145,100 155,105 145,110" fill="${COLORS.point}"/>
<g transform="translate(170, 25)" stroke="${COLORS.curveAlt}" stroke-width="2" fill="rgba(255,112,67,0.18)">
<polygon points="0,40 75,40 75,140 0,140"/>
<polygon points="0,40 25,15 100,15 75,40"/>
<polygon points="75,40 100,15 100,115 75,140"/>
</g>
<text x="225" y="190" text-anchor="middle" fill="${COLORS.point}" font-size="11" font-family="Arial" font-weight="bold">echt: inhoud × 50³</text>
<text x="225" y="178" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">= 125 000 × 1600 cm³</text>
</svg>`,
    checks: [
      {
        q: "Maquette inhoud 100 cm³, schaal 1 : 20. Inhoud echt gebouw?",
        options: ["800 000 cm³", "2000 cm³", "40 000 cm³", "100 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 100 × 20 gedaan (× k). Maar inhoud gaat met **k³** = 20³ = 8000. Dan 100 × 8000 = ?",
          "Je hebt × k² gedaan (dat is voor oppervlakte). Voor inhoud: × k³.",
          "Bij vergroten verandert inhoud wél — en sterk: × k³ = 8000 keer.",
        ],
      },
    ],
  },
  {
    title: "Eindopdracht 3: een aquarium",
    explanation: "Tijd voor een gemengde opgave die alles samenbrengt. Een **aquarium** heeft de vorm van een balk: **80 cm lang, 40 cm breed, 50 cm hoog**.\n\n**Vraag 1: Hoeveel water past erin (in liter)?**\n• Inhoud = 80 × 40 × 50 = **160 000 cm³**\n• 1 liter = 1000 cm³\n• Dus 160 000 ÷ 1000 = **160 liter**\n\n**Vraag 2: De winkelier verkoopt ook een groter aquarium met k = 1,5 (alle zijden 1,5× zo groot). Wat is de inhoud?**\n• k³ = 1,5 × 1,5 × 1,5 = 3,375\n• Nieuwe inhoud = 160 × 3,375 = **540 liter**\n\n**Vraag 3: Hoeveel keer meer water past in dat grotere aquarium?**\n• 540 ÷ 160 = 3,375 — exact k³ ✓\n\nMet k = 1,5 lijkt het 'maar' anderhalf keer groter, maar het bevat al **3,375 keer** zoveel water. Dat is de kracht van de k³-regel.",
    svg: `<svg viewBox="0 0 300 200">
<g transform="translate(80, 40)" stroke="${COLORS.curve}" stroke-width="2.5">
<polygon points="0,30 100,30 100,100 0,100" fill="rgba(0,168,200,0.20)"/>
<polygon points="0,30 25,10 125,10 100,30" fill="rgba(0,168,200,0.10)"/>
<polygon points="100,30 125,10 125,80 100,100" fill="rgba(0,168,200,0.15)"/>
<line x1="0" y1="50" x2="100" y2="50" stroke="#00a8c8" stroke-width="2"/>
<line x1="0" y1="50" x2="25" y2="30" stroke="#00a8c8" stroke-width="1.5"/>
<line x1="100" y1="50" x2="125" y2="30" stroke="#00a8c8" stroke-width="1.5"/>
</g>
<text x="220" y="55" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">↕ 50</text>
<text x="130" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">l 80 · b 40 cm</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.point}" font-size="13" font-family="Arial" font-weight="bold">80 × 40 × 50 = 160 000 cm³</text>
<text x="150" y="194" text-anchor="middle" fill="${COLORS.point}" font-size="12" font-family="Arial" font-weight="bold">= 160 liter</text>
</svg>`,
    checks: [
      {
        q: "Aquarium van 50 × 30 × 40 cm. Hoeveel liter past erin? (1 L = 1000 cm³)",
        options: ["60 liter", "120 liter", "60 000 liter", "6 liter"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt 50 + 30 + 40 = 120 gedaan (optellen). Bij inhoud vermenigvuldig je: 50 × 30 × 40.",
          "Je bent vergeten te delen door 1000 om naar liter om te rekenen. 60 000 cm³ ÷ 1000 = 60 L.",
          "Te weinig. Reken: 50 × 30 = 1500. 1500 × 40 = 60 000 cm³. Dan ÷ 1000 = 60 L.",
        ],
      },
    ],
  },
  // ─── H. Examenstijl — VMBO-GT CSE ─────────────────────────
  {
    title: "CSE-vraag — cilindrische watertank",
    explanation: "Klassieke CSE-context: een **cilindrische tank** of **container** waar je inhoud (in liter) van moet berekenen.\n\n> **Een waterton is een cilinder met een diameter van 60 cm en een hoogte van 80 cm.**\n\n**Aanpak in 3 stappen:**\n1. **Inhoud van een cilinder** = π · r² · h.\n   Diameter 60 → straal r = **30 cm**.\n   Inhoud = π × 30² × 80 = π × 900 × 80 = π × 72.000 ≈ **226.195 cm³**.\n2. **Omrekenen naar liter**: 1 liter = 1000 cm³. Dus 226.195 cm³ ≈ **226 liter**.\n3. **Halve tank**: hoeveel liter zit erin als de ton tot de helft is gevuld? 226 / 2 ≈ **113 liter**.\n\n**Examen-tips**:\n• `r = d / 2` — let op of er diameter of straal staat.\n• 1 dm³ = 1 liter; 1000 cm³ = 1 dm³ = 1 liter.\n• Rond af zoals het examen aangeeft (vaak hele liters of 1 decimaal).",
    svg: `<svg viewBox="0 0 300 200">
<ellipse cx="150" cy="50" rx="50" ry="14" fill="rgba(66,165,245,0.5)" stroke="#42a5f5" stroke-width="2"/>
<line x1="100" y1="50" x2="100" y2="160" stroke="#42a5f5" stroke-width="2"/>
<line x1="200" y1="50" x2="200" y2="160" stroke="#42a5f5" stroke-width="2"/>
<path d="M 100 160 A 50 14 0 0 0 200 160" fill="rgba(66,165,245,0.7)" stroke="#42a5f5" stroke-width="2"/>
<path d="M 100 160 A 50 14 0 0 1 200 160" fill="none" stroke="#42a5f5" stroke-width="2" stroke-dasharray="3 2"/>
<line x1="100" y1="50" x2="200" y2="50" stroke="#ffd54f" stroke-width="2"/>
<text x="150" y="42" text-anchor="middle" fill="#ffd54f" font-size="11" font-family="Arial" font-weight="bold">Ø 60 cm</text>
<line x1="220" y1="50" x2="220" y2="160" stroke="#ffd54f" stroke-width="2"/>
<text x="240" y="110" fill="#ffd54f" font-size="11" font-family="Arial" font-weight="bold">h = 80 cm</text>
<text x="150" y="190" text-anchor="middle" fill="#e0e6f0" font-size="11" font-family="Arial">Inhoud = π · r² · h</text>
</svg>`,
    checks: [
      {
        q: "Wat is de **straal** r van de waterton?",
        options: ["30 cm", "60 cm", "120 cm", "15 cm"],
        answer: 0,
        wrongHints: [
          null,
          "Dat is de diameter — de doorsnee. Straal = halve diameter.",
          "Te groot. Reken: r = d / 2 = 60 / 2 = 30.",
          "Niet — je hebt door 4 gedeeld. r = d / 2 = 30.",
        ],
      },
      {
        q: "Wat is de **inhoud** in cm³? (gebruik π ≈ 3,14)",
        options: ["≈ 226.080 cm³", "≈ 7.536 cm³", "≈ 11.304 cm³", "≈ 4.800 cm³"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt waarschijnlijk r in plaats van r² gebruikt. Inhoud = π × 30² × 80.",
          "Je hebt diameter gebruikt: π × 60 × 60. Maar er is r² nodig (= 30²) voor de oppervlakte van de cirkel.",
          "Te klein. Reken: π × 900 × 80 ≈ 226.000.",
        ],
      },
      {
        q: "Hoeveel **liter** kan er in de ton?",
        options: ["≈ 226 L", "≈ 22,6 L", "≈ 2.260 L", "≈ 22.600 L"],
        answer: 0,
        wrongHints: [
          null,
          "Je hebt door 10.000 gedeeld in plaats van 1000. 1 L = 1000 cm³.",
          "Je hebt de inhoud niet door 1000 gedeeld.",
          "Helemaal niet door 1000 gedeeld.",
        ],
      },
    ],
  },
];

// Koppel emoji aan elke stap
steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const ruimtemeetkunde = {
  id: "ruimtemeetkunde",
  title: "Ruimtemeetkunde",
  emoji: "📦",
  level: "klas1-vwo",
  subject: "wiskunde",
  topics: ["WI.meetkunde.ruimte"],
  intro: "Ruimtemeetkunde gaat over 2D- en 3D-figuren. We beginnen bij het begin (oppervlakte van een rechthoek) en bouwen op naar inhoud van balken, cilinders, piramides en kegels — en eindigen met de vergrotingsfactor (de magische k, k², k³ regel). Past bij H8 'Inhoud en vergroten' uit Getal & Ruimte FLEX deel 2.",
  triggerKeywords: ["inhoud", "vergrotingsfactor", "oppervlakte", "omtrek", "kubus", "balk", "cilinder", "kegel", "piramide", "ruimtemeetkunde", "vergroten"],
  chapters,
  steps,
};

export default ruimtemeetkunde;

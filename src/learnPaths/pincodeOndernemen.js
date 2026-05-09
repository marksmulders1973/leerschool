// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk C
// Gesplitst uit pincodeEconomieVmboGt4.js (2026-05-09): 1 hoofdstuk = 1 leerpad,
// past bij Leerkwartier 15-min-chunks en de UI-logica "1 pad = 1 thema".

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  geld: "#69f0ae",
  warm: "#ffd54f",
  alt: "#ff7043",
  vraag: "#42a5f5",
  aanbod: "#ef5350",
  rood: "#ff5252",
  oranje: "#ffa040",
  grijs: "#90a4ae",
};

const stepEmojis = ["🚀", "📊", "🏪"];

const chapters = [
  { letter: "C", title: "Ben jij ondernemend?", emoji: "🚀", from: 0, to: 2 },
];

const steps = [

  {
    title: "Wat is ondernemen?",
    explanation: "**Ondernemen** = met eigen middelen en risico iets produceren of verkopen om **winst** te maken.\n\nKenmerken van een ondernemer:\n• Ziet **kansen** in de markt\n• Neemt **risico** (kan ook verlies maken)\n• Is **zelfstandig** (geen baas)\n• Investeert eigen geld of leent\n\n**Idee → plan → uitvoering**:\n1. **Marktonderzoek**: is er vraag naar?\n2. **Ondernemingsplan**: wat ga je doen, wat kost het, wat verdien je?\n3. **Inschrijven** bij KvK (Kamer van Koophandel)\n4. **Starten**: producten kopen, marketing, klanten werven\n\n**Soorten ondernemingen**:\n• **Productie**: maakt iets (bakker, fabriek)\n• **Handel**: koopt en verkoopt door (winkel)\n• **Diensten**: levert iets onstoffelijks (kapper, IT-bedrijf)",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">ONDERNEMEN</text>
<text x="60" y="55" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">💡</text>
<text x="60" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">idee</text>
<text x="100" y="60" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">📋</text>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">plan</text>
<text x="190" y="60" fill="${COLORS.muted}" font-size="14" font-family="Arial">→</text>
<text x="240" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial">🚀</text>
<text x="240" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">starten</text>
<text x="150" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">eigen risico → kans op winst of verlies</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">productie · handel · diensten</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **dienst**?",
        options: ["Iets wat je levert zonder dat het tastbaar is, zoals een kapper-knipbeurt", "Een product in een fabriek", "Een gratis goed", "Een lening van de bank"],
        answer: 0,
        wrongHints: [null, "Dat is productie.", "Diensten zijn niet gratis — je betaalt voor de arbeid.", "Een lening is een financieel product, geen dienst in deze context."],
      },
      {
        q: "Welke instantie schrijft je in als nieuwe ondernemer?",
        options: ["Kamer van Koophandel (KvK)", "De gemeente", "De Belastingdienst alleen", "DUO"],
        answer: 0,
        wrongHints: [null, "De gemeente niet — daar regel je eventueel een vergunning.", "De KvK schrijft in; de Belastingdienst krijgt vanuit daar info.", "DUO regelt studie-zaken."],
      },
    ],
  },
  {
    title: "Omzet, kosten en winst",
    explanation: "Drie kernbegrippen voor elke ondernemer:\n\n**Omzet** = aantal × prijs.\nVoorbeeld: 500 broden × €3 = **€1500 omzet** per dag.\n\n**Kosten** = wat het de ondernemer kost om te produceren.\n• **Constante kosten (vaste kosten)**: blijven hetzelfde bij meer of minder productie (huur, verzekering)\n• **Variabele kosten**: hangen af van hoeveel je maakt (grondstoffen, energie)\n• **Totale kosten** = constante + variabele\n\n**Winst** = omzet − totale kosten.\n• Omzet > kosten → **winst** ✓\n• Omzet < kosten → **verlies** ✗\n\nVoorbeeld bakker:\n• Omzet €1500\n• Constante kosten €400 (huur)\n• Variabele kosten €700 (meel, energie)\n• Winst = 1500 − 400 − 700 = **€400**\n\n**Break-even-punt**: hoeveel moet je verkopen om quitte te draaien (omzet = kosten)?",
    svg: `<svg viewBox="0 0 300 180">
<rect x="30" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="60" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">OMZET</text>
<text x="60" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€1500</text>
<text x="105" y="75" fill="${COLORS.muted}" font-size="20" font-family="Arial">−</text>
<rect x="125" y="40" width="80" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="165" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial" font-weight="bold">KOSTEN</text>
<text x="165" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€400 vast</text>
<text x="165" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">€700 var.</text>
<text x="220" y="75" fill="${COLORS.muted}" font-size="20" font-family="Arial">=</text>
<rect x="240" y="40" width="50" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="265" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial" font-weight="bold">WINST</text>
<text x="265" y="84" text-anchor="middle" fill="${COLORS.geld}" font-size="13" font-family="Arial" font-weight="bold">€400</text>
<text x="150" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">break-even = omzet = totale kosten</text>
</svg>`,
    checks: [
      {
        q: "Een ondernemer heeft omzet **€2000**, vaste kosten **€500**, variabele kosten **€800**. Wat is de winst?",
        options: ["€700", "€1500", "€1200", "€500"],
        answer: 0,
        wrongHints: [null, "Vergeet niet ALLE kosten af te trekken.", "Variabele kosten ook aftrekken.", "Niet alle vaste kosten zijn afgetrokken."],
      },
      {
        q: "Welk type kosten verandert NIET als je meer produceert?",
        options: ["Constante kosten (huur)", "Variabele kosten (grondstoffen)", "Totale kosten", "Inkoopkosten"],
        answer: 0,
        wrongHints: [null, "Variabel verandert juist — meer produceren = meer grondstof.", "Totale kosten = constante + variabele, dus die wijzigen wel.", "Inkoopkosten zijn variabel."],
      },
    ],
  },
  {
    title: "Rechtsvormen — eenmanszaak, vof, bv",
    explanation: "**Rechtsvorm** = de juridische opzet van een bedrijf. Belangrijk voor:\n• Wie is **aansprakelijk** voor schulden?\n• Hoeveel **belasting** betaal je?\n• Heb je **kapitaal** nodig om te starten?\n\n**Eenmanszaak** (1 ondernemer):\n• Makkelijk te starten, weinig kapitaal nodig\n• Eigenaar is **privé aansprakelijk** — als het bedrijf failliet gaat, zijn ook je huis/spaargeld in gevaar\n• Betaalt **inkomstenbelasting**\n\n**VOF — Vennootschap onder Firma** (2+ ondernemers samen):\n• Net als eenmanszaak, maar met meerdere eigenaars (vennoten)\n• Iedereen privé aansprakelijk — ook voor schulden van de andere vennoot!\n\n**BV — Besloten Vennootschap**:\n• Apart juridisch lichaam (rechtspersoon)\n• Eigenaars zijn **niet privé aansprakelijk** (alleen tot ingelegd kapitaal)\n• Notaris nodig om op te richten\n• Betaalt **vennootschapsbelasting**",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="80" height="120" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="60" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">EENMANSZAAK</text>
<text x="60" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">1 eigenaar</text>
<text x="60" y="92" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">privé aansprak.</text>
<text x="60" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">IB-belasting</text>
<rect x="110" y="40" width="80" height="120" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="150" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">VOF</text>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2+ vennoten</text>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.aanbod}" font-size="9" font-family="Arial">privé aansprak.</text>
<text x="150" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">IB per persoon</text>
<rect x="200" y="40" width="80" height="120" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="240" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">BV</text>
<text x="240" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">rechtspersoon</text>
<text x="240" y="92" text-anchor="middle" fill="${COLORS.geld}" font-size="9" font-family="Arial">NIET privé</text>
<text x="240" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">VPB-belasting</text>
<text x="150" y="185" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">aansprakelijkheid + belasting verschillen</text>
</svg>`,
    checks: [
      {
        q: "Bij welke rechtsvorm is de eigenaar **NIET privé aansprakelijk** voor schulden?",
        options: ["BV", "Eenmanszaak", "VOF", "Stichting (in deze context)"],
        answer: 0,
        wrongHints: [null, "Eenmanszaak: eigenaar wel privé aansprakelijk.", "VOF: alle vennoten privé aansprakelijk.", "Stichting heeft een ander doel — niet primair winst."],
      },
      {
        q: "Welke belasting betaalt een **BV**?",
        options: ["Vennootschapsbelasting (VPB)", "Inkomstenbelasting", "BTW alleen", "Loonbelasting"],
        answer: 0,
        wrongHints: [null, "Eigenaars BV betalen IB over hun loon, maar de BV zelf VPB.", "BTW betalen alle ondernemingen, niet alleen BV.", "Loonbelasting wordt afgedragen door werkgever, niet specifiek BV-belasting."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeOndernemen = {
  id: "pincode-ondernemen",
  title: "Ondernemen",
  emoji: "🚀",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk C",
  intro:
    "Wat is een ondernemer, omzet/kosten/winst en de rechtsvormen eenmanszaak, VOF en BV. Hoofdstuk C van Pincode VMBO-GT klas 4.",
  triggerKeywords: [
    "ondernemen",
    "ondernemer",
    "kvk",
    "kamer van koophandel",
    "marktonderzoek",
    "ondernemingsplan",
    "productie",
    "handel",
    "diensten",
    "omzet",
    "kosten",
    "winst",
    "verlies",
    "vaste kosten",
    "constante kosten",
    "variabele kosten",
    "totale kosten",
    "break-even",
    "rechtsvorm",
    "eenmanszaak",
    "vof",
    "vennootschap onder firma",
    "bv",
    "besloten vennootschap",
    "aansprakelijk",
    "vpb",
    "vennootschapsbelasting",
    "pincode hoofdstuk c",
  ],
  chapters,
  steps,
};

export default pincodeOndernemen;

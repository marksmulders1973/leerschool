// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk A
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

const stepEmojis = ["🍞", "💼", "📈"];

const chapters = [
  { letter: "A", title: "Inkomen en welvaart", emoji: "🍞", from: 0, to: 2 },
];

const steps = [

  {
    title: "Schaarste, behoeften en goederen",
    explanation: "**Economie** gaat over keuzes maken bij **schaarste** — er is altijd meer gewenst dan beschikbaar.\n\n**Behoeften**: dingen die je nodig hebt of wil. Verdeling:\n• **Primaire behoeften**: noodzakelijk om te leven (eten, drinken, onderdak)\n• **Secundaire behoeften**: aangenaam maar niet noodzakelijk (smartphone, vakantie)\n\n**Goederen** vervullen behoeften:\n• **Vrije goederen**: gratis, in overvloed (lucht, zonlicht)\n• **Schaarse goederen**: kosten geld (alles in de winkel)\n• **Consumptiegoederen**: voor direct gebruik (brood)\n• **Kapitaalgoederen**: om mee te produceren (oven van een bakker)\n\n**Productiefactoren** zijn nodig om iets te maken: **arbeid**, **natuur**, **kapitaal** en **ondernemerschap**.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">SCHAARSTE</text>
<rect x="40" y="42" width="100" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="90" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">behoeften</text>
<text x="90" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">groot</text>
<text x="155" y="68" text-anchor="middle" fill="${COLORS.warm}" font-size="18" font-family="Arial" font-weight="bold">&gt;</text>
<rect x="170" y="42" width="100" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="220" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">middelen</text>
<text x="220" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">beperkt</text>
<text x="150" y="115" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">→ je moet kiezen</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">arbeid · natuur · kapitaal · ondernemerschap</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **vrij goed**?",
        options: ["Een goed dat gratis is en in overvloed beschikbaar", "Een goed in de winkel zonder prijskaartje", "Een goed dat je weggeeft", "Een geschenk"],
        answer: 0,
        wrongHints: [null, "Geen prijskaartje betekent niet dat het vrij is.", "Cadeau geven verandert het type goed niet.", "Een geschenk is iets sociaals; vrij goed is een economische term."],
      },
      {
        q: "Welke productiefactor is **arbeid**?",
        options: ["Werk dat mensen verrichten", "Het geld om te produceren", "Grondstoffen", "De ondernemer die risico neemt"],
        answer: 0,
        wrongHints: [null, "Dat is kapitaal.", "Dat valt onder natuur.", "Dat is ondernemerschap — een aparte productiefactor."],
      },
    ],
  },
  {
    title: "Soorten inkomen — bruto, netto, primair, secundair",
    explanation: "**Inkomen** = geld dat je ontvangt. Vier belangrijke termen:\n\n**Brutoloon**: wat de werkgever betaalt — vóór belasting en premies.\n**Nettoloon**: wat er op je rekening komt — ná aftrek van loonheffing en sociale premies.\n\nVoorbeeld: bruto €2.500 → werkgever houdt €600 in → netto €1.900.\n\n**Primair inkomen**: verdiend door een productiefactor te leveren:\n• Loon (arbeid)\n• Huur (natuur — verhuren van land of pand)\n• Rente (kapitaal — geld uitlenen)\n• Winst (ondernemerschap)\n\n**Secundair inkomen**: ontvangen ZONDER te werken:\n• Uitkeringen (AOW, bijstand, WW)\n• Toeslagen (huurtoeslag, zorgtoeslag, kinderbijslag)\n\n**Besteedbaar inkomen** = nettoloon + ontvangen toeslagen − betaalde lasten.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="30" y="30" width="240" height="32" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="150" y="50" text-anchor="middle" fill="${COLORS.vraag}" font-size="13" font-family="Arial" font-weight="bold">BRUTO €2500</text>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">− €600 (loonheffing + premies)</text>
<rect x="60" y="92" width="180" height="32" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="150" y="112" text-anchor="middle" fill="${COLORS.geld}" font-size="13" font-family="Arial" font-weight="bold">NETTO €1900</text>
<text x="150" y="146" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">+ toeslagen / huur / rente / winst</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">= besteedbaar inkomen</text>
</svg>`,
    checks: [
      {
        q: "Wat is het **nettoloon**?",
        options: ["Het bedrag dat overblijft na belasting en premies", "Het totaalbedrag dat de werkgever betaalt", "Loon + alle toeslagen", "Loon zonder rekening te houden met vakantiegeld"],
        answer: 0,
        wrongHints: [null, "Dat is bruto.", "Toeslagen zijn extra (secundair inkomen), niet onderdeel van netto.", "Vakantiegeld zit ook in bruto/netto, niet apart."],
      },
      {
        q: "Een AOW-uitkering is een **secundair inkomen**. Waarom?",
        options: ["Je hoeft geen productiefactor te leveren om het te ontvangen", "Het is minder belangrijk", "Het wordt later betaald", "Het is een vorm van loon"],
        answer: 0,
        wrongHints: [null, "Niet 'minder belangrijk' — secundair betekent technisch iets anders.", "Tijdsorde is niet de definitie.", "Loon is primair (verdiend met arbeid)."],
      },
    ],
  },
  {
    title: "Welvaart, inflatie en koopkracht",
    explanation: "**Welvaart**: in hoeverre kun je behoeften vervullen met je inkomen.\n• **Welvaart in enge zin**: alleen materiële zaken (geld, spullen).\n• **Welvaart in ruime zin**: ook gezondheid, milieu, vrije tijd, veiligheid.\n\n**Inflatie**: prijzen stijgen gemiddeld. Het CBS meet dit met het **Consumentenprijsindex (CPI)**:\n• 2023 = basisjaar → CPI = 100\n• 2024: CPI = 104 → 4% inflatie\n\n**Koopkracht**: hoeveel je kunt kopen voor je inkomen.\n• Loon stijgt 2%, prijzen stijgen 4% → koopkracht **daalt** met ~2%.\n• Loon stijgt 5%, prijzen stijgen 2% → koopkracht **stijgt** met ~3%.\n\n**Lorenz-curve**: laat zien hoe inkomen verdeeld is in een land. Hoe verder de curve van de diagonaal afwijkt, hoe **schever** de inkomensverdeling.",
    svg: `<svg viewBox="0 0 300 200">
<line x1="40" y1="20" x2="40" y2="170" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="170" x2="280" y2="170" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="30" fill="${COLORS.text}" font-size="10" font-family="Arial">CPI</text>
<text x="260" y="185" fill="${COLORS.text}" font-size="10" font-family="Arial">jaar</text>
<line x1="60" y1="140" x2="120" y2="120" stroke="${COLORS.geld}" stroke-width="2"/>
<line x1="120" y1="120" x2="180" y2="90" stroke="${COLORS.geld}" stroke-width="2"/>
<line x1="180" y1="90" x2="240" y2="50" stroke="${COLORS.geld}" stroke-width="2"/>
<circle cx="60" cy="140" r="3" fill="${COLORS.warm}"/>
<text x="65" y="155" fill="${COLORS.text}" font-size="9" font-family="Arial">100</text>
<circle cx="240" cy="50" r="3" fill="${COLORS.warm}"/>
<text x="240" y="42" fill="${COLORS.warm}" font-size="10" font-family="Arial">112</text>
<text x="150" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">stijgende prijzen = inflatie</text>
</svg>`,
    checks: [
      {
        q: "Je inkomen stijgt met **3%**, prijzen stijgen met **5%**. Wat gebeurt er met je koopkracht?",
        options: ["Daalt met ongeveer 2%", "Stijgt met 3%", "Stijgt met 8%", "Blijft gelijk"],
        answer: 0,
        wrongHints: [null, "Loon stijgt wel maar prijzen sneller — netto verlies.", "Niet optellen — koopkracht vergelijkt twee groei-percentages.", "Alleen gelijk als beide percentages gelijk zijn."],
      },
      {
        q: "Wat meet het **CPI**?",
        options: ["De gemiddelde prijsstijging van consumentengoederen", "De koopkracht per persoon", "Het totaal inkomen in Nederland", "Hoeveel mensen werk hebben"],
        answer: 0,
        wrongHints: [null, "Koopkracht is een gevolg van CPI + inkomen, niet wat CPI zelf meet.", "Dat is het BBP / nationaal inkomen.", "Dat is werkloosheidscijfer, andere statistiek."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeInkomenWelvaart = {
  id: "pincode-inkomen-welvaart",
  title: "Inkomen en welvaart",
  emoji: "🍞",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk A",
  intro:
    "Over schaarste, behoeften, productiefactoren, soorten inkomen, welvaart en koopkracht. Hoofdstuk A van Pincode VMBO-GT klas 4.",
  triggerKeywords: [
    "inkomen",
    "welvaart",
    "schaarste",
    "behoeften",
    "primaire behoefte",
    "secundaire behoefte",
    "vrije goederen",
    "schaarse goederen",
    "consumptiegoederen",
    "kapitaalgoederen",
    "productiefactoren",
    "arbeid",
    "natuur",
    "kapitaal",
    "ondernemerschap",
    "bruto",
    "netto",
    "loon",
    "primair inkomen",
    "secundair inkomen",
    "besteedbaar inkomen",
    "inflatie",
    "koopkracht",
    "cpi",
    "consumentenprijsindex",
    "lorenz",
    "pincode hoofdstuk a",
  ],
  chapters,
  steps,
};

export default pincodeInkomenWelvaart;

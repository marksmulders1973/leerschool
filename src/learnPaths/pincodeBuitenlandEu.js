// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk G
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

const stepEmojis = ["🌍", "🇪🇺", "💶"];

const chapters = [
  { letter: "G", title: "Nederland en het buitenland", emoji: "🌍", from: 0, to: 2 },
];

const steps = [

  {
    title: "Internationale handel — import en export",
    explanation: "**Internationale handel**: landen kopen en verkopen aan elkaar.\n\n**Export**: NL verkoopt iets aan het buitenland (bv. paprika's, machines, kaas).\n**Import**: NL koopt iets uit het buitenland (bv. olie, koffie, smartphones).\n\n**Handelsbalans** = export − import.\n• **Overschot**: meer export dan import (NL heeft dit meestal — handelsland).\n• **Tekort**: meer import dan export.\n\nWaarom handelen?\n• **Comparatief voordeel**: elk land is goed in iets anders. Wij kunnen kaas maken, Saoedi-Arabië olie pompen. Handel maakt ons allebei rijker.\n• **Schaalvoordelen**: meer afzet = lagere kosten per stuk.\n• **Variatie**: zonder import geen koffie of bananen in NL.\n\nNederland is een **handelsland**:\n• Rotterdam = grootste haven van Europa.\n• Schiphol = belangrijke vrachtluchthaven.\n• Veel re-export: spullen komen binnen, gaan via NL door naar Duitsland of UK.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="100" y="60" width="100" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">🇳🇱 NL</text>
<text x="40" y="60" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">IMPORT</text>
<text x="40" y="80" fill="${COLORS.text}" font-size="9" font-family="Arial">olie · koffie</text>
<line x1="60" y1="85" x2="100" y2="85" stroke="${COLORS.geld}" stroke-width="2" marker-end="url(#a)"/>
<defs><marker id="a" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${COLORS.geld}"/></marker></defs>
<text x="220" y="60" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">EXPORT</text>
<text x="220" y="80" fill="${COLORS.text}" font-size="9" font-family="Arial">kaas · paprika</text>
<line x1="200" y1="85" x2="240" y2="85" stroke="${COLORS.aanbod}" stroke-width="2" marker-end="url(#b)"/>
<defs><marker id="b" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="${COLORS.aanbod}"/></marker></defs>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">handelsbalans = export − import</text>
</svg>`,
    checks: [
      {
        q: "Wat is **export** voor Nederland?",
        options: ["NL verkoopt iets aan het buitenland", "NL koopt iets uit het buitenland", "Toeristen die naar NL komen", "Een Nederlands bedrijf in Duitsland"],
        answer: 0,
        wrongHints: [null, "Dat is import — andersom.", "Toerisme is wel een vorm van export van diensten, maar de basisbetekenis is breder.", "Vestiging in andere land = directe investering, geen 'export' in standaardzin."],
      },
      {
        q: "Wat is een **comparatief voordeel**?",
        options: ["Elk land is relatief goed in iets anders, dus handel loont", "Een land heeft meer mensen", "Een land heeft de goedkoopste producten", "Een land heeft de beste hoogleraren"],
        answer: 0,
        wrongHints: [null, "Bevolking is geen comparatief voordeel — productiviteit per persoon wel.", "Goedkoopste = absoluut voordeel; comparatief is relatief.", "Onderwijsniveau is een factor, maar geen definitie van comparatief voordeel."],
      },
    ],
  },
  {
    title: "De Europese Unie",
    explanation: "**Europese Unie (EU)**: 27 Europese landen die samenwerken op gebied van handel, wetgeving en politiek.\n\n**Belangrijkste afspraken**:\n• **Vrije handel**: geen invoerheffingen tussen lidstaten — een Belgische pizza in NL kost niet meer dan in België.\n• **Vrij verkeer**: mensen, goederen, diensten en kapitaal mogen vrij over grenzen.\n• **Eén markt**: alsof EU-landen één land zijn voor handel.\n• **Gezamenlijke wetten**: bv. milieu, voedselveiligheid, consumentenbescherming.\n\n**De Eurozone**: 20 landen die de **euro** gebruiken (NL, DE, FR, IT, ES, ...). Niet alle EU-landen hebben euro (bv. Polen, Zweden, Denemarken).\n\n**Voordelen voor NL**:\n• 60-70% van NL-export gaat naar EU-landen.\n• Geen wisselkosten of -risico binnen eurozone.\n• Nederlands bedrijf kan in heel Europa verkopen.\n\n**Nadelen**:\n• Minder eigen zeggenschap (Brussels-regels).\n• Bijdrage aan de EU-begroting (~€8 mrd/jaar).\n• Bij crisis in andere landen (Griekenland) draagt NL mee.",
    svg: `<svg viewBox="0 0 300 180">
<circle cx="150" cy="90" r="60" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="2"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.vraag}" font-size="14" font-family="Arial" font-weight="bold">EU</text>
<text x="150" y="98" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">27 landen</text>
<text x="150" y="111" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vrije handel</text>
<circle cx="150" cy="90" r="30" fill="none" stroke="${COLORS.warm}" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">€ eurozone (20)</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vrij verkeer mensen · goederen · diensten · kapitaal</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel landen zitten er in de EU?",
        options: ["27", "20", "50", "12"],
        answer: 0,
        wrongHints: [null, "20 = aantal eurozone-landen, niet alle EU-leden.", "Te veel — het zijn 27, niet 50.", "Begin van de EEG was rond dat aantal, nu veel meer."],
      },
      {
        q: "Welk land gebruikt de **euro** NIET?",
        options: ["Polen", "Frankrijk", "Spanje", "Duitsland"],
        answer: 0,
        wrongHints: [null, "Frankrijk gebruikt wel de euro.", "Spanje gebruikt de euro.", "Duitsland is een van de grootste eurolanden."],
      },
    ],
  },
  {
    title: "Wisselkoersen en de euro",
    explanation: "**Wisselkoers**: de prijs van de ene valuta in de andere. Voorbeeld: €1 = $1,10.\n\nWisselkoersen veranderen elke dag op de **valutamarkt**. Door:\n• Vraag en aanbod naar valuta\n• Rente-verschillen tussen landen\n• Politieke onzekerheid\n• Economische groei\n\n**Sterke euro** (€1 = $1,30):\n• **Importeren wordt goedkoper** (een Amerikaanse iPhone betaal je in dollar — minder euro nodig).\n• **Exporteren wordt duurder** (Amerikaanse klanten moeten meer dollar betalen voor onze kaas).\n\n**Zwakke euro** (€1 = $1,00):\n• Andersom: import duur, export aantrekkelijk.\n\n**Voordeel van de euro** voor NL:\n• Geen wisselkosten in eurozone (Belgisch bier kost in NL gewoon de Belgische prijs in euro).\n• Geen wisselkoersrisico tussen euro-landen.\n• Prijzen makkelijk vergelijkbaar tussen landen.\n\n**ECB (Europese Centrale Bank)** in Frankfurt regelt de euro: bepaalt rente, drukt geld bij, houdt inflatie laag (doel ~2%).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="40" y="40" width="80" height="50" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="20" font-family="Arial">€1</text>
<text x="80" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">euro</text>
<text x="135" y="68" fill="${COLORS.muted}" font-size="14" font-family="Arial">↔</text>
<rect x="180" y="40" width="80" height="50" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="220" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="20" font-family="Arial">$1.10</text>
<text x="220" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">dollar</text>
<text x="150" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">sterke € → goedkoop importeren</text>
<text x="150" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">zwakke € → goedkoop exporteren</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">ECB Frankfurt — doel inflatie ~2%</text>
</svg>`,
    checks: [
      {
        q: "De euro is **sterk** geworden tegenover de dollar. Wat is het effect voor een NL-exporteur?",
        options: ["Exporteren naar de VS wordt duurder voor Amerikaanse klanten", "Exporteren wordt goedkoper", "Geen effect", "De fabriek moet sluiten"],
        answer: 0,
        wrongHints: [null, "Andersom — sterke euro maakt exporteren juist lastiger.", "Wisselkoers heeft wel degelijk invloed op handel.", "Fabriek sluiten is een te extreme conclusie van een wisselkoers-verandering."],
      },
      {
        q: "Wat doet de **ECB**?",
        options: ["Beheert de euro: rente, geldhoeveelheid, inflatie", "Int belasting", "Schrijft Nederlandse wetten", "Helpt arme landen"],
        answer: 0,
        wrongHints: [null, "Belasting innen doet de Belastingdienst, niet de centrale bank.", "Wetten worden in NL gemaakt door regering + parlement.", "Ontwikkelingshulp komt vooral via aparte organisaties (Wereldbank, ngo's)."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeBuitenlandEu = {
  id: "pincode-buitenland-eu",
  title: "Nederland en het buitenland",
  emoji: "🌍",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk G",
  intro:
    "Internationale handel (import/export), de Europese Unie en wisselkoersen + de rol van de ECB. Hoofdstuk G van Pincode VMBO-GT klas 4.",
  triggerKeywords: [
    "import",
    "export",
    "handelsbalans",
    "comparatief voordeel",
    "schaalvoordelen",
    "rotterdam",
    "schiphol",
    "re-export",
    "handelsland",
    "europese unie",
    "eu",
    "vrije handel",
    "vrij verkeer",
    "eurozone",
    "euro",
    "ecb",
    "europese centrale bank",
    "wisselkoers",
    "valutamarkt",
    "sterke euro",
    "zwakke euro",
    "pincode hoofdstuk g",
  ],
  chapters,
  steps,
};

export default pincodeBuitenlandEu;

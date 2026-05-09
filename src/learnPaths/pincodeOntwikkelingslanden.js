// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk H
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

const stepEmojis = ["🌏", "🌱", "🤲"];

const chapters = [
  { letter: "H", title: "Ontwikkelingslanden", emoji: "🌏", from: 0, to: 2 },
];

const steps = [

  {
    title: "Verschillen tussen rijke en arme landen",
    explanation: "**Ontwikkelingslanden**: landen met laag inkomen per inwoner, vaak onvoldoende basisvoorzieningen.\n\n**Indicatoren** voor welvaart van een land:\n• **BBP per hoofd**: totaal nationaal inkomen / aantal inwoners. Hoger = rijker.\n• **HDI (Human Development Index)**: combinatie van inkomen, levensverwachting en onderwijs. 0-1 schaal.\n• **Levensverwachting**: rijke landen ~80, arme landen ~60.\n• **Kindersterfte**: in rijke landen <5 per 1000, in armste >50.\n• **Toegang tot schoon water, elektriciteit, internet**.\n\n**Globale verdeling**:\n• **Hoge-inkomenslanden** (bv. NL, Duitsland, VS, Japan)\n• **Middeninkomen** (bv. China, Brazilië, Mexico)\n• **Lage inkomen** (veel landen in Afrika, deel van Azië)\n\n**Welvaart in ruime zin**: niet alleen inkomen, ook gezondheid, onderwijs, vrije tijd, milieu, veiligheid.\n\nEen rijk land kan slecht scoren op milieu of gelijkheid; een minder rijk land kan goed scoren op gemeenschapszin of geluk.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="20" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="60" y="58" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">RIJK</text>
<text x="60" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BBP/hoofd hoog</text>
<text x="60" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI 0,9+</text>
<text x="60" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~80jr</text>
<rect x="110" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">MIDDEN</text>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">groeiend</text>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI 0,7</text>
<text x="150" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~70jr</text>
<rect x="200" y="40" width="80" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="240" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">ARM</text>
<text x="240" y="78" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BBP/hoofd laag</text>
<text x="240" y="92" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">HDI &lt;0,5</text>
<text x="240" y="106" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">leef ~60jr</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">welvaart in ruime zin: ook gezondheid, milieu, geluk</text>
</svg>`,
    checks: [
      {
        q: "Wat meet de **HDI** (Human Development Index)?",
        options: ["Combinatie van inkomen, levensverwachting en onderwijs", "Alleen het inkomen per hoofd", "Aantal toeristen", "Hoeveel auto's er rijden"],
        answer: 0,
        wrongHints: [null, "BBP per hoofd is alleen inkomen — HDI kijkt breder.", "Toerisme is een aparte indicator.", "Auto's per 1000 inwoners is ook welvaartsindicator, maar niet HDI."],
      },
      {
        q: "Wat is **welvaart in ruime zin**?",
        options: ["Niet alleen inkomen, ook gezondheid, milieu, vrije tijd", "Alleen rijkdom", "Alleen geluk", "Hoeveel tv-zenders je hebt"],
        answer: 0,
        wrongHints: [null, "Alleen rijkdom = welvaart in enge zin.", "Geluk is wel een onderdeel maar niet de hele definitie.", "Tv-zenders zijn niet relevant voor welvaarts-statistieken."],
      },
    
      {
        q: "Welk land scoort verwacht het **hoogst** op HDI?",
        options: ["Nederland", "Mali", "Bangladesh", "Niger"],
        answer: 0,
        wrongHints: [null, "Mali heeft een lage HDI (lage levensverwachting + onderwijs).", "Bangladesh middeninkomen, lager dan NL.", "Niger staat heel laag op HDI-lijsten."],
      },
      {
        q: "**Levensverwachting** in een arm land ligt vaak rond:",
        options: ["~60 jaar", "~80 jaar", "~100 jaar", "~40 jaar"],
        answer: 0,
        wrongHints: [null, "~80 is het rijke-landen-niveau (NL).", "100 jaar is erg uitzonderlijk — geen gemiddelde.", "~40 is extreem laag, dat is meer middeleeuws."],
      },
      {
        q: "**Welvaart in enge zin** = ?",
        options: ["Alleen materiële zaken (geld, spullen)", "Alleen geluk", "Alleen gezondheid", "Alles wat met natuur te maken heeft"],
        answer: 0,
        wrongHints: [null, "Geluk valt onder welvaart in ruime zin.", "Gezondheid valt onder welvaart in ruime zin.", "Natuur is een element van ruime zin, geen aparte definitie."],
      },
    ],
  },
  {
    title: "Oorzaken van armoede",
    explanation: "Waarom blijven sommige landen arm? Geen enkel antwoord — het is een combinatie:\n\n**1. Slechte landbouw**\n• Droogte / klimaatverandering\n• Geen meststoffen / ouderwetse technieken\n• Resultaat: lage opbrengst per hectare\n\n**2. Weinig industrie**\n• Land exporteert vooral grondstoffen (cacao, koffie, olie)\n• Verwerking gebeurt elders → buitenland verdient meer\n\n**3. Onderwijs en gezondheid**\n• Slechte scholen → laag opgeleide bevolking\n• Geen goede zorg → mensen worden ziek, kunnen niet werken\n\n**4. Politiek**\n• Corruptie: geld verdwijnt in zakken van leiders\n• Oorlog en conflicten → onveiligheid voor bedrijven\n• Slecht bestuur, onvoorspelbare wetten\n\n**5. Schulden**\n• Land leende veel in het verleden\n• Rente eet inkomen op — niet meer over voor scholen / wegen\n\n**6. Kolonisatie-erfenis**\n• Grenzen getrokken zonder oog voor volkeren → conflicten\n• Economie afhankelijk gemaakt van 1 product\n\n**Vicieuze cirkel**: arm zijn maakt het moeilijk uit armoede te komen — geen geld voor scholen → geen opgeleide werkers → geen industrie → geen geld.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">OORZAKEN ARMOEDE</text>
<rect x="20" y="40" width="125" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="82" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">slechte landbouw</text>
<rect x="155" y="40" width="125" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="217" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="10" font-family="Arial">weinig industrie</text>
<rect x="20" y="80" width="125" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="82" y="100" text-anchor="middle" fill="${COLORS.oranje}" font-size="10" font-family="Arial">slecht onderwijs</text>
<rect x="155" y="80" width="125" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="217" y="100" text-anchor="middle" fill="${COLORS.oranje}" font-size="10" font-family="Arial">corruptie · oorlog</text>
<rect x="20" y="120" width="125" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="82" y="140" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">schulden</text>
<rect x="155" y="120" width="125" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="217" y="140" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">kolonisatie-erfenis</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vicieuze cirkel: arm → geen scholen → geen industrie → arm</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent een **vicieuze cirkel** van armoede?",
        options: ["Armoede veroorzaakt zichzelf — bv. geen geld voor scholen, dus geen opgeleide werkers", "Het is een willekeurige situatie", "Alleen externe oorzaken spelen", "Iedereen is gelijk arm"],
        answer: 0,
        wrongHints: [null, "Vicieuze cirkel is juist niet willekeurig — er zit een patroon in.", "Vicieuze cirkel benadrukt INTERNE feedback-loop, niet alleen externe oorzaken.", "Niemand zegt iets over gelijkheid — het gaat over zichzelf-versterkende oorzaken."],
      },
      {
        q: "Waarom kan **export van alleen grondstoffen** een land arm houden?",
        options: ["Verwerking (waar geld in zit) gebeurt elders", "Grondstoffen zijn altijd schaars", "Het land heeft geen havens", "Grondstoffen vervuilen het milieu"],
        answer: 0,
        wrongHints: [null, "Sommige grondstoffen zijn juist overvloedig — schaarste wisselt.", "Veel grondstof-exporterende landen hebben goed havens.", "Vervuiling kan een issue zijn, maar dat is niet de hoofdreden voor armoede."],
      },
    
      {
        q: "Waarom is een **vicieuze cirkel van armoede** moeilijk te doorbreken?",
        options: ["Elk probleem versterkt het volgende — geen geld voor scholen, geen opgeleid personeel, geen industrie", "Mensen willen niet werken", "Het is altijd kortstondig", "De cirkel breekt vanzelf"],
        answer: 0,
        wrongHints: [null, "Wil om te werken is meestal aanwezig — kansen ontbreken.", "Vicieuze cirkels duren juist lang.", "Vanzelf breken is het tegendeel — daarom heet het vicieus."],
      },
      {
        q: "**Kolonisatie-erfenis** als oorzaak van armoede betekent:",
        options: ["Grenzen door koloniale machten getrokken zonder oog voor volkeren → conflicten + economie afhankelijk van 1 product", "Te veel kolonies", "Een soort belasting", "Niet relevant in de moderne tijd"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om aantal, maar om de gevolgen voor latere staten.", "Geen belasting — historisch erfgoed.", "Wel relevant — sommige conflicten zijn nog steeds koloniaal-historisch."],
      },
      {
        q: "Waarom zijn **schulden** zo slecht voor arme landen?",
        options: ["Rente eet jaarlijks geld op dat anders naar onderwijs/zorg kon", "Schulden zijn altijd te groot om af te lossen", "De rente is altijd 0%", "Schulden komen nooit voor"],
        answer: 0,
        wrongHints: [null, "Soms zijn schulden wel haalbaar — het probleem is welke uitgave je opoffert.", "Rente is juist hoog voor arme landen (hoger risico).", "Veel arme landen hebben juist hoge schulden."],
      },
    ],
  },
  {
    title: "Duurzame ontwikkeling en hulp",
    explanation: "**Ontwikkelingshulp**: rijkere landen helpen armere landen vooruit.\n\n**Soorten hulp**:\n• **Bilaterale hulp**: rechtstreeks van NL naar bv. Mali.\n• **Multilaterale hulp**: via VN, EU, Wereldbank — meerdere landen samen.\n• **Particuliere hulp**: NGO's zoals Oxfam Novib, Cordaid, Artsen zonder Grenzen.\n• **Noodhulp**: bij rampen — voedsel, medicijnen, tenten.\n• **Structurele hulp**: lange termijn — scholen, ziekenhuizen, watervoorzieningen.\n\n**Voor en tegen hulp**:\n• ✓ Helpt bij rampen, vermindert directe nood.\n• ✓ Investeringen in onderwijs/zorg leveren lange termijn winst op.\n• ✗ Soms verdwijnt het in corruptie.\n• ✗ Kan **afhankelijkheid** creëren — locale producent kan niet concurreren met gratis hulp.\n\n**Eerlijke handel (Fair Trade)**: kopers betalen een eerlijke prijs aan boeren, niet de laagst mogelijke. Logo's: Max Havelaar, UTZ.\n\n**Sustainable Development Goals (SDG's)**: 17 VN-doelen voor 2030 — geen armoede, geen honger, kwaliteitsonderwijs, klimaat, gendergelijkheid, etc. Voor ÉLK land — ook NL heeft hier nog werk aan.\n\n**Microkrediet**: kleine leningen voor ondernemers in arme landen (Yunus, Bangladesh). Werkt vaak: kleine investering → eigen bedrijfje → uit armoede.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">DUURZAAM HELPEN</text>
<rect x="30" y="40" width="110" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="85" y="63" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial">noodhulp</text>
<rect x="160" y="40" width="110" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="215" y="63" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial">structurele hulp</text>
<rect x="30" y="85" width="110" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="85" y="108" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">fair trade</text>
<rect x="160" y="85" width="110" height="35" rx="6" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.5"/>
<text x="215" y="108" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial">microkrediet</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">17 SDG's — VN-doelen voor 2030</text>
</svg>`,
    checks: [
      {
        q: "Wat is **microkrediet**?",
        options: ["Een kleine lening voor ondernemers in arme landen", "Een kleine fout in een banktransactie", "Een korting in een buurtwinkel", "Een soort spaarrekening"],
        answer: 0,
        wrongHints: [null, "Niets met fouten — micro slaat op de kleine grootte van de lening.", "Niets met winkelacties.", "Spaarrekening is een ander product."],
      },
      {
        q: "Waarom kan **gratis hulp** soms slecht zijn?",
        options: ["Lokale producenten kunnen niet concurreren met gratis goederen", "Gratis dingen zijn altijd nutteloos", "Mensen zijn ondankbaar", "Het is niet duurzaam voor het klimaat"],
        answer: 0,
        wrongHints: [null, "Soms is gratis hulp essentieel (noodhulp). Het probleem is structurele afhankelijkheid.", "Dankbaarheid heeft niets met economie te maken.", "Klimaat is een aparte zorg, niet de hoofdkritiek op gratis hulp."],
      },
    
      {
        q: "**Fair Trade** zorgt ervoor dat:",
        options: ["Boeren in arme landen een eerlijke prijs krijgen, niet de laagst mogelijke", "Producten gratis worden", "Geen handel meer plaatsvindt", "Alleen rijke landen erbij verdienen"],
        answer: 0,
        wrongHints: [null, "Producten worden juist iets duurder in de winkel.", "Fair Trade is JUIST handel — eerlijker.", "Tegenovergesteld — boeren in arme landen krijgen meer."],
      },
      {
        q: "**SDG** staat voor:",
        options: ["Sustainable Development Goals — 17 VN-doelen voor 2030", "Sociale Druk Geld", "Schoolse Doelen Groep", "Specifieke Donatie Geld"],
        answer: 0,
        wrongHints: [null, "SDG is een internationale afkorting (Engels).", "Niet onderwijs-specifiek — de 17 doelen zijn breed.", "Geen donaties — het zijn doelstellingen voor landen."],
      },
      {
        q: "**Microkrediet** werkt vooral goed voor:",
        options: ["Beginnende kleine ondernemers in arme landen", "Internationale grote bedrijven", "Studenten in NL", "Hele dorpen tegelijk"],
        answer: 0,
        wrongHints: [null, "Grote bedrijven hebben gewone bankleningen, geen 'micro'.", "Studenten in NL gaan naar DUO.", "Microkrediet is per persoon, niet per dorp."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeOntwikkelingslanden = {
  id: "pincode-ontwikkelingslanden",
  title: "Ontwikkelingslanden",
  emoji: "🌏",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk H",
  intro:
    "Verschillen rijk/arm, oorzaken van armoede, en duurzame ontwikkeling met fair trade en microkrediet. Hoofdstuk H van Pincode VMBO-GT klas 4.",
  triggerKeywords: [
    "ontwikkelingsland",
    "hdi",
    "human development index",
    "bbp per hoofd",
    "levensverwachting",
    "kindersterfte",
    "welvaart in ruime zin",
    "welvaart in enge zin",
    "vicieuze cirkel",
    "armoede",
    "kolonisatie",
    "corruptie",
    "ontwikkelingshulp",
    "bilaterale hulp",
    "multilaterale hulp",
    "noodhulp",
    "structurele hulp",
    "fair trade",
    "max havelaar",
    "utz",
    "sdg",
    "sustainable development goals",
    "microkrediet",
    "yunus",
    "pincode hoofdstuk h",
  ],
  chapters,
  steps,
};

export default pincodeOntwikkelingslanden;

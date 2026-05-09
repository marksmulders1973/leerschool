// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk E
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

const stepEmojis = ["🏛️", "📑", "💰"];

const chapters = [
  { letter: "E", title: "Hoe werkt de overheid?", emoji: "🏛️", from: 0, to: 2 },
];

const steps = [

  {
    title: "Taken van de overheid",
    explanation: "De **overheid** doet dingen die de markt niet (goed) doet:\n\n**1. Wetten en orde**: politie, rechters, defensie. Veiligheid voor iedereen.\n\n**2. Openbare voorzieningen**: wegen, openbaar vervoer, parken. Iedereen profiteert ervan, niemand wil het privé betalen.\n\n**3. Onderwijs en zorg**: betaalbaar voor iedereen, niet alleen voor rijken.\n\n**4. Sociale zekerheid**: uitkeringen voor mensen die (tijdelijk) niet kunnen werken.\n\n**5. Inkomensverdeling**: belasting heffen om verschillen tussen arm en rijk te verkleinen.\n\n**6. Marktregels**: concurrentie eerlijk houden, consumenten beschermen, milieu bewaken.\n\n**Verschillende lagen**:\n• **Rijksoverheid**: nationaal (wetten, defensie, AOW)\n• **Provincie**: regionaal (wegen, natuur)\n• **Gemeente**: lokaal (vuilnis, bibliotheken, bijstand)",
    svg: `<svg viewBox="0 0 300 180">
<rect x="40" y="40" width="220" height="40" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="64" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">RIJKSOVERHEID</text>
<rect x="60" y="90" width="80" height="32" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="100" y="110" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial">provincie</text>
<rect x="160" y="90" width="80" height="32" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="200" y="110" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial">gemeente</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">orde · openbaar · onderwijs · zorg · sociaal</text>
</svg>`,
    checks: [
      {
        q: "Wie regelt het ophalen van **vuilnis**?",
        options: ["De gemeente", "Het Rijk", "De provincie", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Het Rijk maakt landelijke wetten; vuilnis is lokaal.", "Provincie regelt grotere zaken zoals provinciale wegen en natuur.", "De Belastingdienst int belasting, niet vuilnis."],
      },
      {
        q: "Welke taak van de overheid is **inkomensverdeling**?",
        options: ["Belasting heffen om verschil arm/rijk te verkleinen", "Loon verhogen voor iedereen", "Alle banen verdelen", "Spaargeld verdelen"],
        answer: 0,
        wrongHints: [null, "Loon wordt op de markt bepaald, niet door overheid (behalve minimumloon).", "Banen verdelen doet de markt — overheid stimuleert hooguit.", "Spaargeld blijft van jou; overheid verdeelt geen spaargeld."],
      },
    
      {
        q: "**Politie** valt onder welke overheidstaak?",
        options: ["Wetten en orde (veiligheid)", "Onderwijs", "Sociale zekerheid", "Inkomensverdeling"],
        answer: 0,
        wrongHints: [null, "Onderwijs gaat over scholen.", "Sociale zekerheid = uitkeringen.", "Inkomensverdeling = belasting heffen om verschillen te verkleinen."],
      },
      {
        q: "**Subsidie voor een hogeschool** — onder welke overheidstaak?",
        options: ["Onderwijs en zorg betaalbaar maken voor iedereen", "Marktregels", "Wetten en orde", "Defensie"],
        answer: 0,
        wrongHints: [null, "Marktregels = eerlijke concurrentie bewaken.", "Wetten en orde = politie/rechters.", "Defensie = leger, niet onderwijs."],
      },
      {
        q: "Wat doet de **provincie** vooral?",
        options: ["Regionale zaken zoals provinciale wegen en natuur", "Wetten maken voor heel Nederland", "Vuilnis ophalen", "Belasting innen"],
        answer: 0,
        wrongHints: [null, "Landelijke wetten maakt het Rijk.", "Vuilnis is een gemeente-taak.", "Belasting innen doet vooral de Belastingdienst."],
      },
    ],
  },
  {
    title: "De Rijksbegroting",
    explanation: "De **Rijksbegroting** is het 'huishoudboekje' van de overheid: hoeveel geld komt er binnen, hoeveel gaat eruit?\n\nWordt elk jaar op **Prinsjesdag** (3e dinsdag van september) gepresenteerd in de **Miljoenennota**.\n\n**Inkomsten** van de Rijksoverheid (~€350-400 miljard/jaar):\n• Belastingen (inkomstenbel, BTW, vennootschapsbel — verreweg het grootste deel)\n• Sociale premies (AOW, WW)\n• Aardgasbaten (steeds minder belangrijk)\n\n**Uitgaven**:\n• Sociale zekerheid (AOW, WW, bijstand)\n• Zorg\n• Onderwijs\n• Defensie\n• Infrastructuur\n• Rente op de staatsschuld\n\n**Begrotingsoverschot**: meer inkomsten dan uitgaven → schuld kan af.\n**Begrotingstekort**: meer uitgaven dan inkomsten → er moet bij geleend worden → staatsschuld groeit.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">RIJKSBEGROTING</text>
<rect x="30" y="42" width="110" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="85" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">INKOMSTEN</text>
<text x="85" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">belastingen</text>
<text x="85" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">sociale premies</text>
<text x="85" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">aardgas</text>
<rect x="160" y="42" width="110" height="100" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="215" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">UITGAVEN</text>
<text x="215" y="80" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">sociale zekerheid</text>
<text x="215" y="94" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">zorg · onderwijs</text>
<text x="215" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">defensie · rente</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Prinsjesdag — 3e dinsdag van september</text>
</svg>`,
    checks: [
      {
        q: "Wanneer wordt de Rijksbegroting gepresenteerd?",
        options: ["Op Prinsjesdag — 3e dinsdag van september", "Op Koningsdag", "1 januari", "Elke maand"],
        answer: 0,
        wrongHints: [null, "Koningsdag is een feestdag, geen begrotingsdag.", "Het begrotingsjaar start wel rond 1 januari maar de presentatie is daarvoor.", "Begroting is jaarlijks, niet maandelijks."],
      },
      {
        q: "Wat gebeurt er bij een **begrotingstekort**?",
        options: ["Er moet bij geleend worden, staatsschuld groeit", "Belasting wordt teruggegeven", "Iedereen krijgt een toeslag", "De begroting wordt afgeschaft"],
        answer: 0,
        wrongHints: [null, "Bij overschot kan de overheid soms teruggeven, niet bij tekort.", "Toeslagen zijn geen oplossing voor tekort.", "De begroting blijft bestaan — er moet alleen extra geld bij."],
      },
    
      {
        q: "Wat is verreweg de **grootste inkomstenbron** van de Rijksoverheid?",
        options: ["Belastingen", "Aardgasbaten", "Gemeenten", "Loterijen"],
        answer: 0,
        wrongHints: [null, "Aardgasbaten worden steeds kleiner.", "Gemeenten krijgen juist GELD van het Rijk, geven het niet.", "Loterijen leveren wat op, maar niet veel in vergelijking."],
      },
      {
        q: "Wat is de **Miljoenennota**?",
        options: ["Het document met de plannen voor de Rijksbegroting van het komende jaar", "Een toespraak van de koning", "Een rekening voor 1 miljoen", "Een Europese richtlijn"],
        answer: 0,
        wrongHints: [null, "De Troonrede is de toespraak; de Miljoenennota is het cijferdocument.", "De NAAM komt van de bedragen, het is geen rekening.", "Het is puur Nederlands, geen Europees stuk."],
      },
      {
        q: "Een **begrotingsoverschot** — wat kan de overheid daarmee?",
        options: ["De staatsschuld aflossen of geld reserveren", "Niets — geld is niet van de overheid", "Verplicht uitgeven", "Aan inwoners terugbetalen elke maand"],
        answer: 0,
        wrongHints: [null, "Een overschot is wel beschikbaar — daar kan iets mee gebeuren.", "Verplicht uitgeven is geen regel — het kan ook gespaard.", "Maandelijks terugbetalen is geen praktijk in NL."],
      },
    ],
  },
  {
    title: "Staatsschuld",
    explanation: "**Staatsschuld**: alle schulden die de overheid in de loop der jaren heeft opgebouwd.\n\nNederland heeft een schuld van honderden miljarden euro. Geleend bij banken, pensioenfondsen en investeerders (via staatsobligaties).\n\nWaarom is staatsschuld een probleem?\n• **Rente** moet elk jaar betaald worden — dat geld kan niet aan onderwijs of zorg besteed worden.\n• Schuld stijgt jaar op jaar als er begrotingstekort blijft.\n• **EMU-norm**: EU-landen mogen schuld max 60% van het BBP zijn (afspraak in het Stabiliteits- en Groeipact).\n\nWaarom is sommige schuld OK?\n• Als de overheid leent voor **investeringen** die later geld opleveren (bv. snelweg, hoger onderwijs).\n• Tijdens **crisissen** (corona, financiële crisis) is bijlenen normaal om de economie draaiende te houden.\n\n**BBP (Bruto Binnenlands Product)** = alles wat in NL in 1 jaar wordt geproduceerd. Maatstaf voor de welvaart van een land.\n\nSchuld als % van BBP zegt meer dan absoluut bedrag — een arm land met €100 miljard schuld is erger dan een rijk land met €500 miljard schuld.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="40" y1="20" x2="40" y2="155" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="155" x2="280" y2="155" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="30" fill="${COLORS.text}" font-size="10" font-family="Arial">% BBP</text>
<text x="240" y="170" fill="${COLORS.text}" font-size="10" font-family="Arial">jaar</text>
<line x1="40" y1="80" x2="280" y2="80" stroke="${COLORS.aanbod}" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="240" y="74" fill="${COLORS.aanbod}" font-size="10" font-family="Arial" font-weight="bold">EMU-norm 60%</text>
<polyline points="60,100 100,90 140,95 180,75 220,85 260,90" fill="none" stroke="${COLORS.geld}" stroke-width="2.5"/>
<text x="60" y="125" fill="${COLORS.geld}" font-size="10" font-family="Arial">staatsschuld NL</text>
</svg>`,
    checks: [
      {
        q: "Wat is de **EMU-norm** voor staatsschuld?",
        options: ["Maximaal 60% van het BBP", "Altijd onder €100 miljard", "Geen schuld toegestaan", "Maximaal 100% van het BBP"],
        answer: 0,
        wrongHints: [null, "Bedragen verschillen per land — daarom is een percentage logischer.", "Schuld is wel toegestaan; het is een limiet.", "Dat is te hoog — economen zouden alarm slaan."],
      },
      {
        q: "Waarom kan **lenen** soms zinvol zijn voor de overheid?",
        options: ["Voor investeringen die later geld opleveren (bv. infrastructuur)", "Om belasting te kunnen verlagen", "Om uitkeringen extra hoog te maken", "Lenen is altijd slecht"],
        answer: 0,
        wrongHints: [null, "Belasting verlagen via lenen verschuift het probleem alleen naar later.", "Uitkeringen extra hoog maken via lenen is niet duurzaam.", "Lenen is niet altijd slecht — voor investeringen kan het rendement opleveren."],
      },
    
      {
        q: "Wat is **BBP**?",
        options: ["De totale productie in Nederland in 1 jaar", "Belasting op binnenlandse producten", "Bonus voor parttime werkers", "Beroepsbevolking als percentage"],
        answer: 0,
        wrongHints: [null, "Niet specifiek belasting — het is alle productie samen.", "Geen werknemer-bonus — pure economische maatstaf.", "Beroepsbevolking is iets anders (= mensen die werken/willen werken)."],
      },
      {
        q: "Een land heeft staatsschuld van **80% van het BBP**. Wat zegt de EMU-norm?",
        options: ["Het is hoger dan de afgesproken 60%-grens", "Het is precies goed", "Het is veel te laag", "EMU-norm bestaat niet"],
        answer: 0,
        wrongHints: [null, "60% is de grens, 80% zit erboven.", "Schuld kan altijd lager — 0% is geen norm.", "EMU-norm bestaat — afspraak in Stabiliteits- en Groeipact."],
      },
      {
        q: "Waarom kost staatsschuld geld?",
        options: ["Er moet jaarlijks rente betaald worden", "De schuld vermindert vanzelf", "Er wordt belasting over geheven", "De schuld groeit door erfenissen"],
        answer: 0,
        wrongHints: [null, "Een schuld lost niet vanzelf op — moet juist afgelost.", "Belasting over schuld bestaat niet — wel rente.", "Erfenissen hebben hier niets mee te maken."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeOverheid = {
  id: "pincode-overheid",
  title: "De overheid",
  emoji: "🏛️",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk E",
  intro:
    "Taken van de overheid, de Rijksbegroting (Prinsjesdag) en de staatsschuld + EMU-norm. Hoofdstuk E van Pincode VMBO-GT klas 4.",
  triggerKeywords: [
    "overheid",
    "rijksoverheid",
    "provincie",
    "gemeente",
    "openbare voorzieningen",
    "sociale zekerheid",
    "inkomensverdeling",
    "rijksbegroting",
    "miljoenennota",
    "prinsjesdag",
    "begrotingstekort",
    "begrotingsoverschot",
    "staatsschuld",
    "emu-norm",
    "stabiliteits- en groeipact",
    "bbp",
    "bruto binnenlands product",
    "staatsobligatie",
    "pincode hoofdstuk e",
  ],
  chapters,
  steps,
};

export default pincodeOverheid;

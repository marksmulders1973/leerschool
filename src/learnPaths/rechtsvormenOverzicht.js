// Leerpad: de vier rechtsvormen — eenmanszaak, VOF, BV en NV. Wat ze zijn,
// wie aansprakelijk is, welke belasting, en wanneer je welke kiest.
// Kwartier-pad (5 stappen). Economie VMBO-GT / havo-vwo onderbouw.
// Mark-verzoek 2026-06-16 (eerst NV vs BV, daarna VOF + eenmanszaak erbij).

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

const stepEmojis = ["⚖️", "🤝", "🔒", "🌐", "✅"];

const chapters = [
  { letter: "A", title: "Aansprakelijkheid", emoji: "⚖️", from: 0, to: 0 },
  { letter: "B", title: "Eenmanszaak & VOF", emoji: "🤝", from: 1, to: 1 },
  { letter: "C", title: "De BV", emoji: "🔒", from: 2, to: 2 },
  { letter: "D", title: "De NV", emoji: "🌐", from: 3, to: 3 },
  { letter: "E", title: "Kiezen", emoji: "✅", from: 4, to: 4 },
];

const steps = [
  // ─── Stap 1: Rechtsvorm & aansprakelijkheid ──────────────────
  {
    title: "Rechtsvormen — wie is aansprakelijk?",
    explanation: "Als je een bedrijf start, kies je een **rechtsvorm**: de juridische opzet van je onderneming. De vier bekendste zijn: **eenmanszaak**, **VOF**, **BV** en **NV**.\n\nDe belangrijkste vraag bij elke rechtsvorm: **wie is aansprakelijk voor de schulden?** Daarvoor splitsen we ze in twee groepen.\n\n**Groep 1 — géén rechtspersoon** (eenmanszaak & VOF)\n• Jij en het bedrijf zijn juridisch **hetzelfde**.\n• Je bent **privé aansprakelijk**: gaat het bedrijf failliet, dan kunnen schuldeisers ook aan je huis en spaargeld komen.\n• Je betaalt **inkomstenbelasting (IB)** over de winst.\n\n**Groep 2 — wél een rechtspersoon** (BV & NV)\n• Het bedrijf is een **aparte 'persoon'**, los van jou.\n• Je bent **beperkt aansprakelijk**: je verliest alleen je **inleg**, niet je privé-vermogen.\n• Het bedrijf betaalt zelf **vennootschapsbelasting (VPB)**.\n\nDit is het grote onderscheid. Een **rechtspersoon** (BV/NV) beschermt je privé-vermogen, maar is duurder en ingewikkelder om op te richten (notaris nodig). Een eenmanszaak of VOF is makkelijk en goedkoop, maar je loopt privé risico.\n\nIn de volgende stappen bekijken we de vier vormen één voor één, en daarna kies je de juiste.",
    svg: `<svg viewBox="0 0 320 210">
<text x="160" y="20" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">2 groepen rechtsvormen</text>
<rect x="16" y="32" width="142" height="160" rx="8" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="87" y="52" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">GEEN rechtspersoon</text>
<text x="87" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">eenmanszaak</text>
<text x="87" y="93" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">VOF</text>
<line x1="34" y1="104" x2="140" y2="104" stroke="${COLORS.muted}" stroke-width="0.6"/>
<text x="87" y="124" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">privé aansprakelijk</text>
<text x="87" y="143" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">betaalt IB</text>
<text x="87" y="168" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">makkelijk + goedkoop</text>
<text x="87" y="184" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">huis loopt risico</text>
<rect x="162" y="32" width="142" height="160" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="233" y="52" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">WEL rechtspersoon</text>
<text x="233" y="74" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">BV</text>
<text x="233" y="93" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">NV</text>
<line x1="180" y1="104" x2="286" y2="104" stroke="${COLORS.muted}" stroke-width="0.6"/>
<text x="233" y="124" text-anchor="middle" fill="${COLORS.geld}" font-size="10" font-family="Arial">beperkt aansprakelijk</text>
<text x="233" y="143" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">betaalt VPB</text>
<text x="233" y="168" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">notaris nodig</text>
<text x="233" y="184" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">privé beschermd</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **rechtsvorm**?",
        options: ["De juridische opzet van een onderneming", "De winst van een bedrijf", "Een soort belasting", "Het logo van een bedrijf"],
        answer: 0,
        wrongHints: [null, "Winst is iets anders dan de juridische vorm.", "Belasting hángt af van de rechtsvorm, maar is het niet.", "Een logo is de huisstijl, niet de juridische opzet."],
        uitlegPad: {
          stappen: [{ titel: "De juridische opzet", tekst: "Een rechtsvorm is de juridische 'jas' van je bedrijf: eenmanszaak, VOF, BV of NV. Die bepaalt aansprakelijkheid, belasting en oprichting." }],
          woorden: [{ woord: "rechtsvorm", uitleg: "De juridische opzet van een onderneming." }, { woord: "onderneming", uitleg: "Een bedrijf dat producten of diensten levert om winst te maken." }],
          theorie: "De rechtsvorm bepaalt drie dingen: wie aansprakelijk is voor schulden, welke belasting je betaalt, en hoe je opricht (KvK of notaris).",
          voorbeelden: [{ type: "keuze", tekst: "Een zzp'er kiest meestal een eenmanszaak; een groot beursbedrijf is een NV." }],
          basiskennis: [{ onderwerp: "Niet de winst", uitleg: "Rechtsvorm gaat over de juridische vorm, niet over hoeveel je verdient." }],
          niveaus: { basis: "De juridische opzet van een bedrijf.", simpeler: "Een rechtsvorm is de juridische vorm die je voor je bedrijf kiest: eenmanszaak, VOF, BV of NV.", nogSimpeler: "Juridische opzet" },
        },
      },
      {
        q: "Bij welke groep ben je **privé aansprakelijk** voor de schulden?",
        options: ["Eenmanszaak en VOF (geen rechtspersoon)", "BV en NV (rechtspersoon)", "Alleen de NV", "Bij geen enkele rechtsvorm"],
        answer: 0,
        wrongHints: [null, "Bij een rechtspersoon ben je juist beperkt aansprakelijk.", "De NV beschermt je privé-vermogen juist.", "Bij eenmanszaak en VOF loop je wél privé risico."],
        uitlegPad: {
          stappen: [{ titel: "Geen rechtspersoon = privé risico", tekst: "Bij een eenmanszaak en VOF ben jij juridisch hetzelfde als het bedrijf. Schuldeisers kunnen daarom aan je privé-vermogen komen." }],
          woorden: [{ woord: "privé aansprakelijk", uitleg: "Met je eigen huis, auto en spaargeld verantwoordelijk voor de bedrijfsschulden." }, { woord: "rechtspersoon", uitleg: "Een bedrijf dat juridisch los staat van de eigenaar (BV, NV). Beschermt je privé-vermogen." }],
          theorie: "Het grote verschil: BV/NV (rechtspersoon) = beperkt aansprakelijk. Eenmanszaak/VOF (geen rechtspersoon) = privé aansprakelijk.",
          voorbeelden: [{ type: "privé risico", tekst: "Een eenmanszaak gaat failliet met €40.000 schuld → de eigenaar moet dat uit zijn privé-vermogen betalen." }],
          basiskennis: [{ onderwerp: "Beschermd bij BV/NV", uitleg: "Bij een BV of NV verlies je alleen je inleg, niet je huis." }],
          niveaus: { basis: "Eenmanszaak en VOF.", simpeler: "Bij een eenmanszaak en VOF (geen rechtspersoon) ben je privé aansprakelijk. Bij een BV en NV niet.", nogSimpeler: "Eenmanszaak + VOF" },
        },
      },
      {
        q: "Welke belasting betaalt een **rechtspersoon** (BV of NV) over de winst?",
        options: ["Vennootschapsbelasting (VPB)", "Inkomstenbelasting (IB)", "Alleen BTW", "Geen enkele belasting"],
        answer: 0,
        wrongHints: [null, "IB hoort bij eenmanszaak en VOF.", "BTW betalen alle ondernemingen — dat is geen winstbelasting.", "Een rechtspersoon betaalt juist zelf belasting."],
        uitlegPad: {
          stappen: [{ titel: "Aparte persoon, eigen belasting", tekst: "Omdat een BV/NV een aparte 'persoon' is, betaalt het bedrijf zelf belasting over de winst: vennootschapsbelasting (VPB)." }],
          woorden: [{ woord: "VPB", uitleg: "Vennootschapsbelasting — winstbelasting voor rechtspersonen (BV, NV)." }, { woord: "IB", uitleg: "Inkomstenbelasting — winstbelasting voor natuurlijke personen (eenmanszaak, VOF-vennoot)." }],
          theorie: "Eenmanszaak/VOF: de eigenaar betaalt IB over de winst. BV/NV: het bedrijf betaalt VPB; haalt de eigenaar er loon of dividend uit, dan betaalt hij daarover apart IB.",
          voorbeelden: [{ type: "VPB", tekst: "Een BV maakt €100.000 winst → de BV betaalt daarover VPB." }, { type: "IB", tekst: "Een eenmanszaak maakt €40.000 winst → de eigenaar betaalt daarover IB." }],
          basiskennis: [{ onderwerp: "Welke groep?", uitleg: "Rechtspersoon → VPB. Geen rechtspersoon → IB." }],
          niveaus: { basis: "VPB.", simpeler: "Een BV of NV is een rechtspersoon en betaalt zelf vennootschapsbelasting (VPB) over de winst.", nogSimpeler: "VPB" },
        },
      },
    ],
  },
  // ─── Stap 2: Eenmanszaak & VOF ───────────────────────────────
  {
    title: "Eenmanszaak & VOF — jij bént het bedrijf",
    explanation: "De twee makkelijkste rechtsvormen zijn de **eenmanszaak** en de **VOF**. Allebei zijn ze **geen rechtspersoon**: jij en het bedrijf zijn juridisch hetzelfde.\n\n**Eenmanszaak — één eigenaar**\n• Snel en goedkoop: je schrijft je in bij de **Kamer van Koophandel (KvK)**, geen notaris nodig.\n• **Geen minimumkapitaal**.\n• Je betaalt **inkomstenbelasting (IB)** over de winst, met fijne startersvoordelen (zelfstandigenaftrek).\n• ✗ **Privé aansprakelijk**: bedrijf failliet = je huis en spaargeld in gevaar.\n• De populairste vorm voor zzp'ers: kapper, fietsenmaker, freelancer.\n\n**VOF — Vennootschap onder firma (2 of meer eigenaren)**\n• Net als een eenmanszaak, maar met meerdere eigenaren: de **vennoten**.\n• Je richt 'm op met een (onderhands) **vennootschapscontract** + KvK — ook hier geen notaris verplicht.\n• Elke vennoot betaalt apart **IB** over zijn eigen winstdeel.\n• ✗ Iedere vennoot is **privé én hoofdelijk aansprakelijk**.\n\n**Let op die 'hoofdelijke' aansprakelijkheid**: maakt jouw mede-vennoot een grote schuld, dan kunnen schuldeisers de **hele** schuld bij **jou** komen halen — ook al was het niet jouw fout. Daarom werkt een VOF alleen met veel onderling vertrouwen.\n\n**Kort**: eenmanszaak = alleen, VOF = samen. Allebei makkelijk en goedkoop, maar je loopt **privé risico**.",
    svg: `<svg viewBox="0 0 320 200">
<rect x="16" y="34" width="140" height="150" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="86" y="54" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">EENMANSZAAK</text>
<text x="86" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="24">👤</text>
<text x="86" y="108" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">1 eigenaar</text>
<text x="86" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">KvK · geen notaris</text>
<text x="86" y="148" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">betaalt IB</text>
<text x="86" y="170" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">privé aansprakelijk</text>
<rect x="164" y="34" width="140" height="150" rx="8" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="234" y="54" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">VOF</text>
<text x="218" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="22">👤</text>
<text x="250" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="22">👤</text>
<text x="234" y="108" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">2+ vennoten</text>
<text x="234" y="130" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">contract · KvK</text>
<text x="234" y="148" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">elk betaalt IB</text>
<text x="234" y="170" text-anchor="middle" fill="${COLORS.rood}" font-size="10" font-family="Arial">privé + hoofdelijk</text>
<text x="160" y="22" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">geen rechtspersoon — jij bent het bedrijf</text>
</svg>`,
    checks: [
      {
        q: "Wat is het verschil tussen een **eenmanszaak** en een **VOF**?",
        options: ["Een eenmanszaak heeft één eigenaar, een VOF twee of meer", "Een VOF is een rechtspersoon, een eenmanszaak niet", "Een eenmanszaak betaalt VPB, een VOF IB", "Een VOF heeft een notaris nodig, een eenmanszaak niet"],
        answer: 0,
        wrongHints: [null, "Allebei zijn ze géén rechtspersoon.", "Allebei betalen ze IB, geen VPB.", "Voor allebei is geen notaris verplicht."],
        uitlegPad: {
          stappen: [{ titel: "Alleen of samen", tekst: "Het verschil zit in het aantal eigenaren: een eenmanszaak heeft er één, een VOF heeft twee of meer vennoten. Verder lijken ze sterk op elkaar." }],
          woorden: [{ woord: "eenmanszaak", uitleg: "Onderneming met één eigenaar, geen rechtspersoon." }, { woord: "VOF", uitleg: "Vennootschap onder firma: onderneming met twee of meer vennoten, geen rechtspersoon." }],
          theorie: "Beide zijn geen rechtspersoon, betalen IB en zijn privé aansprakelijk. Het enige grote verschil: één eigenaar (eenmanszaak) of meerdere (VOF).",
          voorbeelden: [{ type: "eenmanszaak", tekst: "Een freelance fotograaf werkt alleen → eenmanszaak." }, { type: "VOF", tekst: "Twee vriendinnen openen samen een kapsalon → VOF." }],
          basiskennis: [{ onderwerp: "Verder gelijk", uitleg: "Aansprakelijkheid (privé) en belasting (IB) zijn bij allebei hetzelfde." }],
          niveaus: { basis: "Eenmanszaak = 1, VOF = 2 of meer.", simpeler: "Een eenmanszaak heeft één eigenaar; een VOF heeft twee of meer vennoten. Verder zijn ze bijna gelijk.", nogSimpeler: "Aantal eigenaren" },
        },
      },
      {
        q: "Twee vennoten hebben een VOF. Eén maakt een grote schuld. Wat betekent **hoofdelijk aansprakelijk**?",
        options: ["De schuldeisers kunnen de hele schuld bij de andere vennoot halen", "Elke vennoot betaalt alleen zijn eigen helft", "Alleen het bedrijf betaalt, niet de vennoten", "De vennoten betalen niets, want het is een rechtspersoon"],
        answer: 0,
        wrongHints: [null, "Bij hoofdelijke aansprakelijkheid is het niet netjes 'ieder zijn deel'.", "Een VOF is geen rechtspersoon, dus de vennoten betalen zelf.", "Een VOF beschermt je privé-vermogen juist niet."],
        uitlegPad: {
          stappen: [{ titel: "Voor de hele schuld", tekst: "Hoofdelijk aansprakelijk betekent: een schuldeiser mag voor het GEHELE bedrag bij één vennoot aankloppen — ook voor schulden die de andere vennoot maakte." }],
          woorden: [{ woord: "hoofdelijk aansprakelijk", uitleg: "Elke vennoot kan voor de volledige schuld worden aangesproken, niet alleen voor zijn eigen deel." }, { woord: "vennoot", uitleg: "Een mede-eigenaar van een VOF." }],
          theorie: "Dit maakt een VOF risicovol: je kunt opdraaien voor fouten van je partner. Daarom werkt een VOF alleen met sterk onderling vertrouwen en een goed contract.",
          voorbeelden: [{ type: "risico", tekst: "Jouw vennoot bestelt voor €30.000 voorraad en kan niet betalen → de leverancier mag dat hele bedrag bij jou opeisen." }],
          basiskennis: [{ onderwerp: "Privé + hoofdelijk", uitleg: "Bij een VOF ben je niet alleen privé aansprakelijk, maar ook voor de schuld van je mede-vennoot." }],
          niveaus: { basis: "De hele schuld kan bij jou.", simpeler: "Hoofdelijk aansprakelijk: een schuldeiser mag de volledige schuld bij één vennoot halen, ook voor wat de ander deed.", nogSimpeler: "Hele schuld bij jou" },
        },
      },
      {
        q: "Waarom kiezen veel **zzp'ers** voor een eenmanszaak?",
        options: ["Snel, goedkoop op te richten (KvK, geen notaris) en startersvoordelen", "Omdat het hun privé-vermogen het best beschermt", "Omdat ze dan naar de beurs kunnen", "Omdat een eenmanszaak geen belasting betaalt"],
        answer: 0,
        wrongHints: [null, "Een eenmanszaak beschermt je privé-vermogen juist niet.", "Naar de beurs kan alleen een NV.", "Een eenmanszaak betaalt wél belasting (IB)."],
        uitlegPad: {
          stappen: [{ titel: "Lage drempel", tekst: "Een eenmanszaak richt je snel en goedkoop op: alleen inschrijven bij de KvK, geen notaris, geen startkapitaal. Plus belastingvoordelen voor starters." }],
          woorden: [{ woord: "zzp'er", uitleg: "Zelfstandige zonder personeel — werkt vaak via een eenmanszaak." }, { woord: "zelfstandigenaftrek", uitleg: "Belastingvoordeel voor ondernemers: een deel van de winst is onbelast." }],
          theorie: "De prijs van dat gemak: je bent privé aansprakelijk. Voor kleine, risicoarme bedrijfjes is dat acceptabel; bij groei of risico stap je over naar een BV.",
          voorbeelden: [{ type: "zzp", tekst: "Een freelance tekstschrijver start een eenmanszaak voor ~€80 KvK-kosten en factureert dezelfde week." }],
          basiskennis: [{ onderwerp: "Nadeel", uitleg: "Het nadeel is en blijft de privé-aansprakelijkheid." }],
          niveaus: { basis: "Snel, goedkoop, startersvoordelen.", simpeler: "Een eenmanszaak is snel en goedkoop op te richten (KvK, geen notaris) met belastingvoordelen voor starters. Ideaal voor zzp'ers.", nogSimpeler: "Snel + goedkoop" },
        },
      },
    ],
  },
  // ─── Stap 3: De BV ───────────────────────────────────────────
  {
    title: "De BV — 'besloten': aandelen op naam",
    explanation: "De **BV** (Besloten Vennootschap) is wél een **rechtspersoon**: het bedrijf staat juridisch los van de eigenaren. Daardoor ben je **beperkt aansprakelijk** — bij faillissement verlies je alleen je inleg, niet je huis.\n\nDe **B** staat voor **Besloten**. Dat slaat op de aandelen:\n\n• **Aandelen op naam**: van elk aandeel is bekend wíé de eigenaar is.\n• **Niet vrij verhandelbaar**: je kunt je aandeel niet zomaar aan een vreemde verkopen. Vaak moet je het eerst aan de mede-aandeelhouders aanbieden (de **blokkeringsregeling**). Een BV kan dus **niet naar de beurs**.\n• **Kleine kring eigenaren**: vaak één of een paar aandeelhouders die elkaar kennen — soms één **directeur-grootaandeelhouder (DGA)** die zowel eigenaar als baas is.\n\n**Oprichten**:\n• Via een **notaris** (oprichtingsakte) — dat kost geld.\n• **Geen minimumkapitaal** sinds 2012: een BV mag starten met €0,01. Daarom is de BV de meest gekozen rechtspersoon van Nederland.\n• Belasting: **vennootschapsbelasting (VPB)** over de winst.\n\n**Wanneer een BV?**\nAls je zelfstandig of met een klein groepje onderneemt, je privé-vermogen wilt beschermen, maar géén grote menigte aandeelhouders of beursnotering nodig hebt. Denk aan een groeiend MKB-bedrijf, een tandartspraktijk of een startend techbedrijf.\n\n**Onthoud**: BV = **besloten** = aandelen op naam, kleine kring, niet op de beurs, maar wél beperkte aansprakelijkheid.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.vraag}" font-size="14" font-family="Arial" font-weight="bold">BV — BESLOTEN 🔒</text>
<circle cx="160" cy="110" r="62" fill="none" stroke="${COLORS.vraag}" stroke-width="1.5" stroke-dasharray="4 3"/>
<text x="160" y="48" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">besloten kring — elkaar kennen</text>
<circle cx="135" cy="95" r="15" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="135" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="13">👤</text>
<circle cx="185" cy="95" r="15" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="185" y="100" text-anchor="middle" fill="${COLORS.text}" font-size="13">👤</text>
<circle cx="160" cy="135" r="15" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="160" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="13">👤</text>
<text x="160" y="185" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">aandelen op naam · niet naar de beurs</text>
</svg>`,
    checks: [
      {
        q: "Waar staat de **B** van BV voor?",
        options: ["Besloten — aandelen staan op naam, in een kleine kring", "Bedrijf — elk bedrijf is een BV", "Beurs — een BV staat op de beurs", "Belasting — een BV betaalt geen belasting"],
        answer: 0,
        wrongHints: [null, "Niet elk bedrijf is een BV; denk aan eenmanszaak of NV.", "Een BV kan juist NIET naar de beurs.", "Een BV betaalt wél belasting (VPB)."],
        uitlegPad: {
          stappen: [{ titel: "Besloten kring", tekst: "Besloten betekent: de aandelen staan op naam en blijven in een kleine, gesloten kring. Je verkoopt ze niet zomaar aan een vreemde." }],
          woorden: [{ woord: "besloten", uitleg: "Gesloten kring: bekend wie de aandeelhouders zijn, aandelen niet vrij verhandelbaar." }, { woord: "aandeel op naam", uitleg: "Een aandeel waarvan vastligt wie de eigenaar is." }],
          theorie: "Omdat de aandelen op naam staan en niet vrij verhandelbaar zijn, kan een BV niet naar de beurs. De eigenaren kennen elkaar meestal.",
          voorbeelden: [{ type: "besloten", tekst: "Twee broers hebben samen een BV. Wil de één eruit, dan biedt hij zijn aandelen eerst aan de ander aan." }],
          basiskennis: [{ onderwerp: "B = besloten", uitleg: "Onthoud: B van BV = Besloten = beperkte, bekende kring eigenaren." }],
          niveaus: { basis: "Besloten.", simpeler: "De B van BV staat voor Besloten: de aandelen staan op naam en blijven in een kleine kring.", nogSimpeler: "Besloten" },
        },
      },
      {
        q: "Een aandeelhouder van een BV wil zijn aandelen verkopen. Wat geldt meestal?",
        options: ["Hij moet ze eerst aan de andere aandeelhouders aanbieden (blokkeringsregeling)", "Hij verkoopt ze direct op de beurs", "Hij mag ze aan een willekeurige vreemde verkopen zonder regels", "Hij mag ze nooit verkopen"],
        answer: 0,
        wrongHints: [null, "Een BV staat niet op de beurs.", "Bij een BV zijn aandelen juist niet vrij verhandelbaar.", "Verkopen mag wel — maar met regels."],
        uitlegPad: {
          stappen: [{ titel: "Eerst intern aanbieden", tekst: "Bij een BV zijn de aandelen niet vrij verhandelbaar. Vaak geldt een blokkeringsregeling: je biedt je aandelen eerst aan de mede-aandeelhouders aan." }],
          woorden: [{ woord: "blokkeringsregeling", uitleg: "Afspraak dat je aandelen eerst aan de andere aandeelhouders moet aanbieden voor je ze aan een ander verkoopt." }, { woord: "vrij verhandelbaar", uitleg: "Zomaar kunnen kopen en verkopen aan iedereen — dat is bij een BV juist NIET zo." }],
          theorie: "Zo houdt een BV de kring eigenaren gesloten: er komt niet zomaar een vreemde binnen. Dat is precies wat 'besloten' betekent.",
          voorbeelden: [{ type: "blokkering", tekst: "Een vennoot wil eruit. Hij moet zijn aandelen eerst aan zijn compagnon aanbieden voordat een buitenstaander mag instappen." }],
          basiskennis: [{ onderwerp: "Niet de beurs", uitleg: "Omdat aandelen op naam staan en niet vrij verhandelbaar zijn, kan een BV niet naar de beurs." }],
          niveaus: { basis: "Eerst aan de anderen aanbieden.", simpeler: "Aandelen van een BV zijn niet vrij verhandelbaar. Je moet ze meestal eerst aan de mede-eigenaren aanbieden.", nogSimpeler: "Eerst intern aanbieden" },
        },
      },
      {
        q: "Hoeveel **minimumkapitaal** heb je nodig om een BV op te richten?",
        options: ["Geen minimum — het mag met €0,01", "€45.000", "€100.000", "€1 miljoen"],
        answer: 0,
        wrongHints: [null, "Dat bedrag hoort bij een ándere rechtspersoon.", "Zo'n hoog bedrag is sinds 2012 niet meer nodig voor een BV.", "Veel te hoog voor een BV."],
        uitlegPad: {
          stappen: [{ titel: "Geen minimum sinds 2012", tekst: "Sinds de invoering van de 'flex-BV' in 2012 is er geen minimumkapitaal meer. Een BV mag starten met één eurocent." }],
          woorden: [{ woord: "minimumkapitaal", uitleg: "Het bedrag dat je verplicht moet inbrengen bij de oprichting." }, { woord: "flex-BV", uitleg: "Versoepelde BV-regels sinds 2012, onder andere: geen minimumkapitaal meer." }],
          theorie: "Omdat een BV goedkoop en zonder startkapitaal op te richten is, is het de populairste rechtspersoon van Nederland. Een NV vraagt juist een fors minimumkapitaal — zie de volgende stap.",
          voorbeelden: [{ type: "lage drempel", tekst: "Een startende ondernemer richt een BV op met €1 startkapitaal en betaalt verder alleen de notariskosten." }],
          basiskennis: [{ onderwerp: "Wel notariskosten", uitleg: "Geen minimumkapitaal, maar de notaris-akte kost wél geld." }],
          niveaus: { basis: "Geen minimum.", simpeler: "Voor een BV heb je geen minimumkapitaal nodig — sinds 2012 mag het met één cent.", nogSimpeler: "Geen minimum" },
        },
      },
    ],
  },
  // ─── Stap 4: De NV ───────────────────────────────────────────
  {
    title: "De NV — 'naamloos': aandelen vrij verhandelbaar",
    explanation: "De **NV** (Naamloze Vennootschap) is óók een **rechtspersoon** met beperkte aansprakelijkheid, maar bedoeld voor **grote** bedrijven.\n\nDe **N** staat voor **Naamloze**. Dat klinkt gek, maar slaat — net als bij de BV — op de aandelen, alleen precies andersom.\n\nBij een NV kunnen de aandelen **aan toonder** zijn: wie het aandeel 'in handen' heeft, is de eigenaar. De **naam** van de aandeelhouder hoeft niet vast te liggen — vandaar 'naamloos'.\n\nDaardoor:\n\n• **Vrij verhandelbaar**: je kunt aandelen van een NV vrij kopen en verkopen, ook aan vreemden.\n• **Naar de beurs**: een NV kan beursgenoteerd zijn. Iedereen kan dan een aandeel kopen — ook jij. Bekende Nederlandse NV's: **Heineken NV, ASML, Ahold Delhaize, Shell, Philips**.\n• **Veel aandeelhouders**: een NV kan duizenden eigenaren hebben die elkaar niet kennen.\n\n**Oprichten**:\n• Ook via een **notaris**.\n• **Minimumkapitaal €45.000**. Een NV is bedoeld voor grotere bedrijven die veel geld willen ophalen.\n• Belasting: ook **VPB** over de winst.\n\n**Waarom een NV?**\nOm **veel kapitaal** op te halen. Door aandelen te verkopen aan een groot publiek (of via de beurs) kan een groot bedrijf miljoenen of miljarden ophalen om te groeien. Dat lukt een BV niet — die houdt de kring juist klein.\n\n**Onthoud**: NV = **naamloos** = aandelen (vaak) aan toonder, vrij verhandelbaar, kan naar de beurs, voor grote bedrijven.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.geld}" font-size="14" font-family="Arial" font-weight="bold">NV — NAAMLOOS 🌐</text>
<rect x="120" y="38" width="80" height="34" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="160" y="60" text-anchor="middle" fill="${COLORS.geld}" font-size="12" font-family="Arial" font-weight="bold">📈 BEURS</text>
<text x="50" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="18">👤</text>
<text x="100" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="18">👤</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="18">👤</text>
<text x="220" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="18">👤</text>
<text x="270" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="18">👤</text>
<line x1="50" y1="105" x2="145" y2="72" stroke="${COLORS.muted}" stroke-width="0.8"/>
<line x1="100" y1="120" x2="150" y2="72" stroke="${COLORS.muted}" stroke-width="0.8"/>
<line x1="160" y1="110" x2="160" y2="72" stroke="${COLORS.muted}" stroke-width="0.8"/>
<line x1="220" y1="120" x2="170" y2="72" stroke="${COLORS.muted}" stroke-width="0.8"/>
<line x1="270" y1="105" x2="175" y2="72" stroke="${COLORS.muted}" stroke-width="0.8"/>
<text x="160" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">veel eigenaren — kennen elkaar niet</text>
<text x="160" y="186" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">vrij verhandelbaar · min. €45.000</text>
</svg>`,
    checks: [
      {
        q: "Waarom heet een NV een **Naamloze** Vennootschap?",
        options: ["De aandelen kunnen aan toonder zijn — de naam van de eigenaar hoeft niet vast te liggen", "Het bedrijf heeft geen naam", "Er werkt niemand met een naam", "De eigenaar blijft altijd geheim voor de Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Een NV heeft natuurlijk gewoon een bedrijfsnaam (Heineken NV).", "Het gaat om de aandelen, niet om het personeel.", "Het slaat op de verhandelbaarheid van aandelen, niet op belasting ontwijken."],
        uitlegPad: {
          stappen: [{ titel: "Naam van de aandeelhouder", tekst: "'Naamloos' slaat op de aandelen: ze kunnen aan toonder zijn. Wie het aandeel heeft, is de eigenaar — de naam hoeft niet vast te liggen." }],
          woorden: [{ woord: "aandeel aan toonder", uitleg: "Een aandeel waarbij de bezitter de eigenaar is; de naam van de eigenaar staat niet geregistreerd." }, { woord: "naamloos", uitleg: "Slaat op de aandelen: de naam van de aandeelhouder hoeft niet bekend te zijn." }],
          theorie: "Omdat de naam niet vastligt, zijn de aandelen makkelijk door te verkopen aan iedereen. Daarom kan een NV naar de beurs. Bij een BV staan aandelen juist op naam.",
          voorbeelden: [{ type: "naamloos", tekst: "Jij koopt via je bank een aandeel Heineken NV. Je naam hoeft niet in een aandeelhoudersregister van Heineken te staan." }],
          basiskennis: [{ onderwerp: "Niet 'geen naam'", uitleg: "Het bedrijf heeft wél een naam. 'Naamloos' gaat over de aandeel-eigenaar." }],
          niveaus: { basis: "De naam van de eigenaar ligt niet vast.", simpeler: "Naamloos betekent dat de aandelen aan toonder kunnen zijn: wie het aandeel heeft, is eigenaar — een naam is niet nodig.", nogSimpeler: "Aandeel zonder naam" },
        },
      },
      {
        q: "Welk bedrijf is een typische **NV**?",
        options: ["Een groot beursgenoteerd bedrijf zoals Heineken of ASML", "De plaatselijke tandartspraktijk", "Een eenmanszaak van een fietsenmaker", "Een marktkraam"],
        answer: 0,
        wrongHints: [null, "Een kleine praktijk is meestal een BV of eenmanszaak, niet beursgenoteerd.", "Een eenmanszaak is geen rechtspersoon met vrij verhandelbare aandelen.", "Een marktkraam is veel te klein voor een NV."],
        uitlegPad: {
          stappen: [{ titel: "Groot en op de beurs", tekst: "Een NV is bedoeld voor grote bedrijven die veel kapitaal ophalen, vaak via de beurs. Heineken NV en ASML zijn voorbeelden." }],
          woorden: [{ woord: "beursgenoteerd", uitleg: "Het bedrijf staat op de aandelenbeurs; iedereen kan aandelen kopen." }, { woord: "kapitaal ophalen", uitleg: "Geld verzamelen door aandelen te verkopen aan investeerders." }],
          theorie: "Kleine bedrijven (praktijk, webshop, MKB) kiezen meestal een BV. De NV-vorm hoort bij grote ondernemingen die geld van veel investeerders willen aantrekken.",
          voorbeelden: [{ type: "NV", tekst: "ASML is een NV: aandelen worden dagelijks op de beurs verhandeld door duizenden beleggers." }],
          basiskennis: [{ onderwerp: "Schaal", uitleg: "Hoe groter en kapitaal-intensiever, hoe vaker je een NV ziet." }],
          niveaus: { basis: "Een groot beursbedrijf.", simpeler: "Een NV is typisch een groot, beursgenoteerd bedrijf zoals Heineken of ASML. Kleine bedrijven zijn meestal een BV.", nogSimpeler: "Groot beursbedrijf" },
        },
      },
      {
        q: "Wat is de belangrijkste reden om voor een **NV** te kiezen in plaats van een BV?",
        options: ["Veel kapitaal ophalen door aandelen aan een groot publiek te verkopen", "Geen belasting hoeven betalen", "Geen notaris nodig hebben", "De eigenaar privé aansprakelijk maken"],
        answer: 0,
        wrongHints: [null, "Een NV betaalt net als een BV gewoon VPB.", "Ook een NV wordt via de notaris opgericht.", "Bij een NV is de aandeelhouder juist beperkt aansprakelijk, niet privé."],
        uitlegPad: {
          stappen: [{ titel: "Geld ophalen bij velen", tekst: "De kracht van een NV is dat de aandelen vrij verhandelbaar zijn. Zo kun je aandelen verkopen aan een groot publiek en veel kapitaal ophalen om te groeien." }],
          woorden: [{ woord: "vrij verhandelbaar", uitleg: "Aandelen die iedereen mag kopen en verkopen, ook via de beurs." }, { woord: "kapitaal", uitleg: "Geld om mee te ondernemen en te groeien." }],
          theorie: "Een BV houdt de kring eigenaren klein en kan dus minder makkelijk groot kapitaal ophalen. Wil een bedrijf miljoenen ophalen bij veel investeerders, dan past de NV-vorm beter.",
          voorbeelden: [{ type: "kapitaal", tekst: "Een bedrijf wil een nieuwe fabriek bouwen voor €500 miljoen. Als NV verkoopt het aandelen op de beurs om dat geld op te halen." }],
          basiskennis: [{ onderwerp: "Belasting/notaris gelijk", uitleg: "VPB en notaris gelden voor BV én NV — dat is geen onderscheid." }],
          niveaus: { basis: "Veel kapitaal ophalen.", simpeler: "Je kiest een NV om veel geld op te halen: de vrij verhandelbare aandelen kun je aan een groot publiek verkopen.", nogSimpeler: "Veel geld ophalen" },
        },
      },
    ],
  },
  // ─── Stap 5: Alles vergelijken + kiezen ──────────────────────
  {
    title: "Welke rechtsvorm past? — alles op een rij",
    explanation: "Tijd om de vier rechtsvormen naast elkaar te zetten. Het hangt steeds af van: **wie is aansprakelijk**, **welke belasting**, **hoe richt je op**, en **hoe groot** ben je.\n\n| | Eenmanszaak | VOF | BV | NV |\n|---|---|---|---|---|\n| Rechtspersoon? | nee | nee | ja | ja |\n| Aansprakelijk | privé | privé + hoofdelijk | beperkt (inleg) | beperkt (inleg) |\n| Belasting | IB | IB (per vennoot) | VPB | VPB |\n| Oprichten | KvK | contract + KvK | notaris | notaris, €45.000 |\n| Eigenaren | 1 | 2 of meer | weinig, op naam | (heel) veel, vrij |\n| Naar de beurs? | nee | nee | nee | ja |\n\n**De rode draad**:\n• **Eenmanszaak / VOF** → geen rechtspersoon → **privé aansprakelijk**, IB, makkelijk & goedkoop.\n• **BV / NV** → rechtspersoon → **beperkt aansprakelijk**, VPB, notaris nodig.\n• **BV vs NV** → BV = besloten (op naam, klein), NV = naamloos (vrij verhandelbaar, groot, beurs).\n\n**Hoe kies je?**\n• Klein, alleen, weinig risico → **eenmanszaak**.\n• Samen met vennoten, veel vertrouwen → **VOF**.\n• Privé-vermogen beschermen, zelfstandig of klein groepje → **BV**.\n• Groot bedrijf, veel kapitaal ophalen, eventueel beurs → **NV**.\n\n**Ezelsbruggetje**: geen-rechtspersoon = **I**nkomstenbelasting (eenmanszaak/VOF), rechtspersoon = **V**PB (BV/NV). En: **B**esloten = op naam, **N**aamloos = vrij verhandelbaar.",
    svg: `<svg viewBox="0 0 320 210">
<text x="160" y="18" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">4 rechtsvormen — klein naar groot</text>
<rect x="12" y="30" width="70" height="160" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.3"/>
<text x="47" y="48" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial" font-weight="bold">EENMANS-</text>
<text x="47" y="60" text-anchor="middle" fill="${COLORS.warm}" font-size="10" font-family="Arial" font-weight="bold">ZAAK</text>
<text x="47" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">1 eigenaar</text>
<text x="47" y="100" text-anchor="middle" fill="${COLORS.rood}" font-size="8" font-family="Arial">privé</text>
<text x="47" y="116" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">IB</text>
<text x="47" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">KvK</text>
<rect x="86" y="30" width="70" height="160" rx="6" fill="${COLORS.paper}" stroke="${COLORS.alt}" stroke-width="1.3"/>
<text x="121" y="48" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">VOF</text>
<text x="121" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">2+ vennoten</text>
<text x="121" y="100" text-anchor="middle" fill="${COLORS.rood}" font-size="8" font-family="Arial">privé+hoofd.</text>
<text x="121" y="116" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">IB</text>
<text x="121" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">contract</text>
<rect x="160" y="30" width="70" height="160" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.3"/>
<text x="195" y="48" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">BV 🔒</text>
<text x="195" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">op naam</text>
<text x="195" y="100" text-anchor="middle" fill="${COLORS.geld}" font-size="8" font-family="Arial">beperkt</text>
<text x="195" y="116" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">VPB</text>
<text x="195" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">notaris</text>
<rect x="234" y="30" width="74" height="160" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.3"/>
<text x="271" y="48" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">NV 🌐</text>
<text x="271" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vrij/beurs</text>
<text x="271" y="100" text-anchor="middle" fill="${COLORS.geld}" font-size="8" font-family="Arial">beperkt</text>
<text x="271" y="116" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">VPB</text>
<text x="271" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="8" font-family="Arial">€45.000</text>
<text x="160" y="204" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">links privé aansprakelijk · rechts beperkt (rechtspersoon)</text>
</svg>`,
    checks: [
      {
        q: "Welke twee rechtsvormen zijn een **rechtspersoon** met beperkte aansprakelijkheid?",
        options: ["BV en NV", "Eenmanszaak en VOF", "Eenmanszaak en BV", "VOF en NV"],
        answer: 0,
        wrongHints: [null, "Eenmanszaak en VOF zijn juist géén rechtspersoon.", "De eenmanszaak is geen rechtspersoon.", "De VOF is geen rechtspersoon."],
        uitlegPad: {
          stappen: [{ titel: "De rechtspersonen", tekst: "Alleen de BV en de NV zijn een rechtspersoon. Daardoor zijn de eigenaren beperkt aansprakelijk — ze verliezen alleen hun inleg." }],
          woorden: [{ woord: "rechtspersoon", uitleg: "Bedrijf dat juridisch los staat van de eigenaar: BV en NV." }, { woord: "beperkte aansprakelijkheid", uitleg: "Je verliest alleen je inleg, niet je privé-vermogen." }],
          theorie: "Eenmanszaak en VOF zijn geen rechtspersoon → privé aansprakelijk. BV en NV zijn wél rechtspersoon → beperkt aansprakelijk.",
          voorbeelden: [{ type: "rechtspersoon", tekst: "Een BV en een NV beschermen allebei het privé-vermogen van de eigenaren." }],
          basiskennis: [{ onderwerp: "De tweedeling", uitleg: "Onthoud de splitsing: eenmanszaak/VOF (privé) vs BV/NV (beperkt)." }],
          niveaus: { basis: "BV en NV.", simpeler: "De BV en de NV zijn rechtspersonen met beperkte aansprakelijkheid. Eenmanszaak en VOF niet.", nogSimpeler: "BV + NV" },
        },
      },
      {
        q: "Een vriendengroep wil **samen** een bedrijfje beginnen, weinig kosten, en vertrouwt elkaar volledig. Wat past het beste?",
        options: ["Een VOF", "Een NV met beursnotering", "Een eenmanszaak", "Een BV met €45.000 startkapitaal"],
        answer: 0,
        wrongHints: [null, "Een NV met beurs is voor grote bedrijven, niet voor een vriendengroep.", "Een eenmanszaak heeft maar één eigenaar — zij willen samen.", "€45.000 startkapitaal hoort bij een NV, niet bij een BV."],
        uitlegPad: {
          stappen: [{ titel: "Samen + goedkoop + vertrouwen", tekst: "Meerdere eigenaren, lage kosten, geen notaris nodig en veel onderling vertrouwen → dat past bij een VOF." }],
          woorden: [{ woord: "VOF", uitleg: "Vennootschap onder firma: 2 of meer vennoten, geen rechtspersoon, privé + hoofdelijk aansprakelijk." }],
          theorie: "Een VOF is goedkoop en snel (contract + KvK), maar vraagt vertrouwen door de hoofdelijke aansprakelijkheid. Een eenmanszaak kan niet (meerdere eigenaren), een NV is veel te groot/duur.",
          voorbeelden: [{ type: "VOF", tekst: "Drie vrienden starten samen een klusbedrijf als VOF met een onderling contract." }],
          basiskennis: [{ onderwerp: "Let op het risico", uitleg: "Door hoofdelijke aansprakelijkheid is vertrouwen bij een VOF essentieel." }],
          niveaus: { basis: "Een VOF.", simpeler: "Samen ondernemen, lage kosten en veel vertrouwen → een VOF. Een eenmanszaak kan niet want zij zijn met meerdere.", nogSimpeler: "VOF" },
        },
      },
      {
        q: "Welk kenmerk hebben **alle vier** de rechtsvormen gemeen?",
        options: ["Het zijn allemaal ondernemingen die winst willen maken", "Ze zijn allemaal een rechtspersoon", "Ze betalen allemaal vennootschapsbelasting", "Ze kunnen allemaal naar de beurs"],
        answer: 0,
        wrongHints: [null, "Alleen BV en NV zijn een rechtspersoon.", "Eenmanszaak en VOF betalen IB, geen VPB.", "Alleen een NV kan naar de beurs."],
        uitlegPad: {
          stappen: [{ titel: "Allemaal ondernemingen", tekst: "Eenmanszaak, VOF, BV en NV zijn allemaal ondernemingen: ze leveren producten of diensten om winst te maken. Daarin verschillen ze niet." }],
          woorden: [{ woord: "onderneming", uitleg: "Een bedrijf dat met eigen risico winst probeert te maken." }],
          theorie: "Bij een 'alle vier'-vraag zoek je de overeenkomst. Rechtspersoon, VPB en beurs gelden maar voor een deel — ondernemen-om-winst geldt voor alle vier.",
          voorbeelden: [{ type: "overeenkomst", tekst: "Of je nu een eenmanszaak of een NV bent: je wilt winst maken met je producten of diensten." }],
          basiskennis: [{ onderwerp: "Let op de vraag", uitleg: "'Alle vier' = zoek wat ze delen, niet wat ze onderscheidt." }],
          niveaus: { basis: "Het zijn allemaal ondernemingen.", simpeler: "Alle vier zijn ze ondernemingen die winst willen maken. De rest (rechtspersoon, VPB, beurs) geldt maar voor een deel.", nogSimpeler: "Allemaal ondernemingen" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const rechtsvormenOverzicht = {
  id: "rechtsvormen-overzicht",
  title: "Rechtsvormen: eenmanszaak, VOF, BV & NV",
  emoji: "⚖️",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT / havo-vwo onderbouw economie",
  sloThema: "Economie - rechtsvormen: eenmanszaak, VOF, BV, NV",
  prerequisites: [
    { id: "pincode-ondernemen", title: "Ondernemen", niveau: "vmbo-gt-4" },
  ],
  intro:
    "Wat is het verschil tussen een eenmanszaak, een VOF, een BV en een NV? In een kwartier leer je wie aansprakelijk is, welke belasting elke vorm betaalt, hoe je opricht en wanneer je welke kiest. Met voorbeelden van de zzp'er tot Heineken NV.",
  triggerKeywords: [
    "rechtsvorm", "rechtsvormen",
    "eenmanszaak",
    "vof", "v.o.f.",
    "vennootschap onder firma",
    "nv", "n.v.",
    "bv", "b.v.",
    "naamloze vennootschap",
    "besloten vennootschap",
    "verschil nv bv", "verschil nv en bv",
    "verschil bv en nv",
    "nv of bv",
    "verschil eenmanszaak vof",
    "rechtspersoon",
    "aandeel", "aandelen", "aandeelhouder",
    "aandeel op naam",
    "aandeel aan toonder",
    "vrij verhandelbaar",
    "blokkeringsregeling",
    "beperkte aansprakelijkheid",
    "privé aansprakelijk",
    "hoofdelijk aansprakelijk",
    "aansprakelijk", "aansprakelijkheid",
    "vennoot", "vennoten",
    "minimumkapitaal",
    "flex-bv",
    "beurs", "beursgenoteerd",
    "vpb", "vennootschapsbelasting",
    "ib", "inkomstenbelasting",
    "notaris",
    "kvk", "kamer van koophandel",
    "dga", "directeur-grootaandeelhouder",
    "zzp", "zelfstandige",
    "kapitaal ophalen",
    "economie rechtsvorm",
  ],
  chapters,
  steps,
};

export default rechtsvormenOverzicht;

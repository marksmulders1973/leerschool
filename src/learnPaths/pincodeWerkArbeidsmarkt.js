// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk D
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

const stepEmojis = ["👷", "🤝", "📉"];

const chapters = [
  { letter: "D", title: "Werk aan de winkel!", emoji: "👷", from: 0, to: 2 },
];

const steps = [

  {
    title: "Werkgevers en werknemers",
    explanation: "**Werknemer**: werkt in dienst van een werkgever en krijgt loon.\n**Werkgever**: betaalt loon, geeft opdracht, draagt risico van het bedrijf.\n\n**Arbeidsovereenkomst**: contract tussen werkgever en werknemer. Bevat:\n• Functie en werkuren\n• Salaris en vakantiedagen\n• Begin- en einddatum (bepaalde of onbepaalde tijd)\n• Proeftijd (max 1 of 2 maanden)\n\n**Soorten contracten**:\n• **Vast (onbepaalde tijd)**: zekerheid; ontslag is moeilijker\n• **Tijdelijk (bepaalde tijd)**: voor X maanden of een project\n• **Oproepcontract**: alleen werken als werkgever je oproept\n• **Uitzendcontract**: via een uitzendbureau\n• **Zelfstandige (zzp)**: geen werknemer, doet klussen voor opdrachtgevers\n\n**Rechten van werknemers**: minimumloon, vakantiegeld (8% v/h jaarloon), vakantiedagen, ziektewet.",
    svg: `<svg viewBox="0 0 300 180">
<rect x="30" y="40" width="100" height="60" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🏢</text>
<text x="80" y="86" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">werkgever</text>
<line x1="135" y1="70" x2="165" y2="70" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="60" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial">contract</text>
<rect x="170" y="40" width="100" height="60" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="220" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">👷</text>
<text x="220" y="86" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">werknemer</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vast · tijdelijk · oproep · uitzend · zzp</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">minimumloon · vakantiegeld 8% · ziektewet</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel vakantiegeld krijg je standaard in Nederland?",
        options: ["8% van het jaarloon", "10% van het maandloon", "Een vast bedrag van €500", "Niets — dat is afgeschaft"],
        answer: 0,
        wrongHints: [null, "Het is wel een percentage, maar over het JAARloon — niet maandloon.", "Het is een percentage, geen vast bedrag.", "Vakantiegeld bestaat nog steeds — wettelijk geregeld."],
      },
      {
        q: "Wat is een **zzp'er**?",
        options: ["Een zelfstandige zonder personeel — werkt voor opdrachtgevers", "Een werknemer in vast dienstverband", "Iemand die uitzendwerk doet", "Een werknemer met een nuluren-contract"],
        answer: 0,
        wrongHints: [null, "Vast dienstverband = werknemer.", "Uitzendwerk valt onder uitzendbureau, niet zzp.", "Nuluren-contract is wel een werknemer-vorm, ander dan zzp."],
      },
    
      {
        q: "Hoe lang mag een **proeftijd** maximaal duren?",
        options: ["1 of 2 maanden, afhankelijk van het contract", "1 jaar", "Onbeperkt", "1 week"],
        answer: 0,
        wrongHints: [null, "Proeftijd is bewust kort.", "Onbeperkt zou werknemers geen zekerheid geven.", "Te kort om elkaar te leren kennen."],
      },
      {
        q: "Welk contract geeft een werknemer de **meeste zekerheid**?",
        options: ["Vast contract (onbepaalde tijd)", "Oproepcontract", "Uitzendcontract", "Tijdelijk contract van 6 maanden"],
        answer: 0,
        wrongHints: [null, "Oproep = werken alleen als baas je belt — onzeker.", "Uitzend = werk via bureau, snel klaar.", "Tijdelijk eindigt na 6 maanden — minder zeker dan vast."],
      },
      {
        q: "Belangrijk verschil **zzp'er vs werknemer**?",
        options: ["Zzp'er werkt voor opdrachtgevers, regelt zelf belasting + verzekeringen", "Zzp'er hoeft niet te werken", "Zzp'er heeft altijd een vast loon", "Werknemer regelt zelf zijn belasting"],
        answer: 0,
        wrongHints: [null, "Zzp'er moet juist hard werken om opdrachten te vinden.", "Zzp-inkomen is wisselend, niet vast.", "Voor werknemers houdt de werkgever loonheffing in."],
      },
    ],
  },
  {
    title: "De arbeidsmarkt en CAO",
    explanation: "De **arbeidsmarkt** is waar werkgevers (vraag) en werknemers (aanbod) elkaar ontmoeten.\n\n**Vraag naar arbeid**: hoeveel mensen wil de werkgever in dienst nemen?\n• Bij **hogere lonen** wil de werkgever **minder** mensen.\n\n**Aanbod van arbeid**: hoeveel mensen willen er werken?\n• Bij **hogere lonen** willen **meer** mensen werken.\n\n**Krapte op de arbeidsmarkt**: meer vraag dan aanbod → werkgever moet hoger loon bieden om mensen te vinden.\n**Ruime arbeidsmarkt**: meer aanbod dan vraag → werkgever heeft keuze, lonen kunnen lager.\n\n**CAO — Collectieve Arbeidsovereenkomst**:\n• Afspraken tussen vakbonden (kant van werknemers) en werkgeversorganisaties.\n• Geldt voor een hele sector (bv. alle horecamedewerkers).\n• Regelt loon, werktijden, overwerktoeslag, vakantie, pensioen.\n• Voordeel: één set regels voor iedereen, geen onderhandeling per persoon.",
    svg: `<svg viewBox="0 0 300 180">
<line x1="40" y1="20" x2="40" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<line x1="40" y1="160" x2="280" y2="160" stroke="${COLORS.text}" stroke-width="1.5"/>
<text x="20" y="90" fill="${COLORS.text}" font-size="11" font-family="Arial">loon</text>
<text x="240" y="175" fill="${COLORS.text}" font-size="11" font-family="Arial">aantal</text>
<line x1="60" y1="40" x2="270" y2="155" stroke="${COLORS.aanbod}" stroke-width="2.5"/>
<line x1="60" y1="155" x2="270" y2="40" stroke="${COLORS.vraag}" stroke-width="2.5"/>
<text x="240" y="55" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">aanbod</text>
<text x="240" y="135" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">vraag</text>
<circle cx="165" cy="98" r="5" fill="${COLORS.geld}"/>
<text x="170" y="92" fill="${COLORS.geld}" font-size="10" font-family="Arial" font-weight="bold">evenwicht</text>
</svg>`,
    checks: [
      {
        q: "Wie ondertekent samen een **CAO**?",
        options: ["Vakbonden en werkgeversorganisaties", "De overheid en bedrijven", "Werknemer en werkgever individueel", "De Belastingdienst"],
        answer: 0,
        wrongHints: [null, "De overheid is meestal niet ondertekenaar; soms wel verklaarbaar bindend.", "Dat is een individuele arbeidsovereenkomst — niet collectief.", "Belastingdienst houdt zich bezig met belasting, niet CAO."],
      },
      {
        q: "Wat is **krapte** op de arbeidsmarkt?",
        options: ["Meer vraag naar arbeid dan aanbod", "Iedereen heeft werk", "Lonen dalen", "Veel mensen werkloos"],
        answer: 0,
        wrongHints: [null, "Bijna iedereen werk = volledige werkgelegenheid; krapte gaat om de vraag/aanbod-verhouding.", "Bij krapte stijgen lonen meestal.", "Dat is een ruime arbeidsmarkt, niet krap."],
      },
    
      {
        q: "Veel openstaande vacatures, weinig werklozen. Wat noem je deze situatie?",
        options: ["Krapte op de arbeidsmarkt", "Ruime arbeidsmarkt", "Recessie", "Evenwicht"],
        answer: 0,
        wrongHints: [null, "Ruim = juist veel zoekers, weinig werk.", "Recessie = slechte economie; veel werkloosheid.", "Evenwicht is precies passend, niet 'tekort aan werkers'."],
      },
      {
        q: "Voor wie geldt een CAO?",
        options: ["Voor iedereen in een hele sector (bv. alle horecamedewerkers)", "Alleen voor leden van een vakbond", "Alleen voor werkgevers", "Alleen voor parttimers"],
        answer: 0,
        wrongHints: [null, "Niet alleen leden — geldt sector-breed.", "Werkgevers zitten erbij, maar werknemers ook.", "Geen onderscheid parttime/fulltime."],
      },
      {
        q: "Wat is een **vakbond**?",
        options: ["Organisatie die opkomt voor de belangen van werknemers", "Een groep werkgevers", "Een uitzendbureau", "Een afdeling van de Belastingdienst"],
        answer: 0,
        wrongHints: [null, "Werkgevers hebben hun eigen organisaties (VNO-NCW etc).", "Uitzendbureau zoekt mensen voor werk, geen belangenbehartiger.", "Vakbonden zijn los van de overheid."],
      },
    ],
  },
  {
    title: "Werkloosheid en productiviteit",
    explanation: "**Werkloos**: je hebt geen werk maar zou wel willen werken.\n\n**Soorten werkloosheid**:\n• **Frictiewerkloosheid**: tussen twee banen — kort, normaal in een gezonde economie.\n• **Conjuncturele werkloosheid**: bij recessie zijn er minder banen.\n• **Structurele werkloosheid**: je vaardigheden passen niet meer bij wat de markt vraagt (bv. typist in een digitaal kantoor).\n• **Seizoenswerkloosheid**: ijscoman in de winter, skileraar in de zomer.\n\n**Werkloosheidspercentage** = (werklozen / beroepsbevolking) × 100%.\n\n**Beroepsbevolking** = mensen van 15-75 jaar die kunnen + willen werken (werkenden + werklozen die zoeken).\n\n**Productiviteit**: hoeveel produceert één werknemer per uur?\n• Stijgt door: betere machines, automatisering, betere opleiding.\n• Hogere productiviteit = bedrijf kan goedkoper produceren of hogere lonen betalen.",
    svg: `<svg viewBox="0 0 300 180">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">SOORTEN WERKLOOSHEID</text>
<rect x="20" y="40" width="130" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="85" y="60" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial">frictie</text>
<rect x="160" y="40" width="130" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="225" y="60" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial">conjunctureel</text>
<rect x="20" y="80" width="130" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="85" y="100" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial">structureel</text>
<rect x="160" y="80" width="130" height="30" rx="4" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="225" y="100" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial">seizoens</text>
<text x="150" y="145" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">% = werklozen / beroepsbevolking × 100</text>
</svg>`,
    checks: [
      {
        q: "Een typist verliest haar baan omdat alle bedrijven over zijn op typeren via computers met spraakherkenning. Welke werkloosheid is dit?",
        options: ["Structureel", "Frictie", "Conjunctureel", "Seizoens"],
        answer: 0,
        wrongHints: [null, "Frictie is kort, tussen twee banen — niet door technologische verandering.", "Conjunctureel is door slechte economie, niet door techniek.", "Seizoens hangt af van het jaargetijde."],
      },
      {
        q: "Wat is de **beroepsbevolking**?",
        options: ["Mensen van 15-75 die willen + kunnen werken (werkend + werkloos zoekend)", "Alle inwoners van Nederland", "Alleen mensen met een baan", "Alleen werklozen"],
        answer: 0,
        wrongHints: [null, "Niet alle inwoners — kinderen en wie niet wil/kan werken vallen erbuiten.", "Werklozen die zoeken horen er ook bij.", "Werkenden horen er ook bij — sterker zelfs, dat is de meerderheid."],
      },
    
      {
        q: "Door een recessie zijn er minder banen. Welke werkloosheid?",
        options: ["Conjuncturele werkloosheid", "Frictie", "Structureel", "Seizoens"],
        answer: 0,
        wrongHints: [null, "Frictie = kort, tussen twee banen — niet door recessie.", "Structureel = vaardigheden mismatch met markt.", "Seizoens = afhankelijk van het jaar (ijscoman)."],
      },
      {
        q: "**100.000 werklozen**, beroepsbevolking **5.000.000**. Wat is het werkloosheidspercentage?",
        options: ["2%", "20%", "0,2%", "5%"],
        answer: 0,
        wrongHints: [null, "Veel te hoog — controleer 100.000 / 5.000.000.", "Te laag met factor 10.", "Reken: 100.000 / 5.000.000 = 0,02 = 2%."],
      },
      {
        q: "Wat verhoogt de **productiviteit**?",
        options: ["Betere machines en betere opleiding", "Minder vakantiedagen", "Hogere belasting", "Meer werknemers in dienst"],
        answer: 0,
        wrongHints: [null, "Minder vakantie = meer uren, niet productiever per uur.", "Belasting heeft niets met productie per uur te maken.", "Meer werknemers = totaal meer output, niet per persoon."],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const pincodeWerkArbeidsmarkt = {
  id: "pincode-werk-arbeidsmarkt",
  title: "Werk en arbeidsmarkt",
  emoji: "👷",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk D",
  intro:
    "Werkgever en werknemer, soorten contracten, CAO, vraag en aanbod op de arbeidsmarkt en werkloosheid. Hoofdstuk D van Pincode VMBO-GT klas 4.",
  triggerKeywords: [
    "werkgever",
    "werknemer",
    "arbeidsovereenkomst",
    "vast contract",
    "tijdelijk contract",
    "oproepcontract",
    "uitzendcontract",
    "zzp",
    "zzp'er",
    "zelfstandige zonder personeel",
    "vakantiegeld",
    "minimumloon",
    "ziektewet",
    "arbeidsmarkt",
    "vraag naar arbeid",
    "aanbod van arbeid",
    "krapte",
    "ruime arbeidsmarkt",
    "cao",
    "vakbond",
    "werkgeversorganisatie",
    "werkloosheid",
    "frictiewerkloosheid",
    "conjuncturele werkloosheid",
    "structurele werkloosheid",
    "seizoenswerkloosheid",
    "beroepsbevolking",
    "productiviteit",
    "pincode hoofdstuk d",
  ],
  chapters,
  steps,
};

export default pincodeWerkArbeidsmarkt;

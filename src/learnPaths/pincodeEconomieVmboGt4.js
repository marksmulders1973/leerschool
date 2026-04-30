// Leerpad: Pincode 7e editie vmbo-gt 4 (Economie)
// 24 stappen verdeeld over 8 hoofdstukken (A t/m H), één per boek-hoofdstuk.
// Hoofdstukken volgen de inhoudsopgave van Pincode 7e ed. vmbo-gt 4 (Noordhoff).

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

const stepEmojis = [
  "🍞", "💼", "📈",                  // A. Inkomen & welvaart
  "💱", "🏦", "💳",                  // B. Geld genoeg?
  "🚀", "📊", "🏪",                  // C. Ondernemen
  "👷", "🤝", "📉",                  // D. Werk
  "🏛️", "📑", "💰",                  // E. Overheid
  "🧾", "🛒", "💼",                  // F. Belasting
  "🌍", "🇪🇺", "💶",                  // G. Buitenland
  "🌏", "🌱", "🤲",                  // H. Ontwikkelingslanden
];

const chapters = [
  { letter: "A", title: "Inkomen en welvaart", emoji: "🍞", from: 0, to: 2 },
  { letter: "B", title: "Geld genoeg?", emoji: "💱", from: 3, to: 5 },
  { letter: "C", title: "Ben jij ondernemend?", emoji: "🚀", from: 6, to: 8 },
  { letter: "D", title: "Werk aan de winkel!", emoji: "👷", from: 9, to: 11 },
  { letter: "E", title: "Hoe werkt de overheid?", emoji: "🏛️", from: 12, to: 14 },
  { letter: "F", title: "Iedereen betaalt belasting", emoji: "🧾", from: 15, to: 17 },
  { letter: "G", title: "Nederland en het buitenland", emoji: "🌍", from: 18, to: 20 },
  { letter: "H", title: "Ontwikkelingslanden", emoji: "🌏", from: 21, to: 23 },
];

const steps = [
  // ─── A. Inkomen en welvaart ───────────────────────────
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
  // ─── B. Geld genoeg? ──────────────────────────────────
  {
    title: "Functies van geld",
    explanation: "Vroeger ruilden mensen direct (**ruilhandel**): jij geeft een schaap, ik geef brood. Nadelen: misschien wil ik geen schaap, en hoeveel brood is een schaap waard?\n\nGeld lost dit op. Het heeft **drie functies**:\n\n**1. Ruilmiddel**: je betaalt met geld, geen ingewikkelde ruil meer nodig.\n\n**2. Rekenmiddel**: alles heeft een prijs in euro's, dus je kunt makkelijk vergelijken (€20 vs €15).\n\n**3. Spaarmiddel (oppotmiddel)**: je kunt geld bewaren voor later — een schaap zou doodgaan, geld niet.\n\n**Soorten geld**:\n• **Chartaal geld**: munten en bankbiljetten\n• **Giraal geld**: tegoed op een rekening (bijna alle betalingen tegenwoordig)",
    svg: `<svg viewBox="0 0 300 180">
<rect x="30" y="40" width="80" height="60" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="70" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="22" font-family="Arial">💱</text>
<text x="70" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">ruilmiddel</text>
<rect x="115" y="40" width="80" height="60" rx="8" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="155" y="62" text-anchor="middle" fill="${COLORS.warm}" font-size="22" font-family="Arial">🧮</text>
<text x="155" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">rekenmiddel</text>
<rect x="200" y="40" width="80" height="60" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="240" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🐷</text>
<text x="240" y="85" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">spaarmiddel</text>
<text x="150" y="140" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">chartaal: munten/biljetten · giraal: op de bank</text>
</svg>`,
    checks: [
      {
        q: "Welke functie van geld gebruik je als je een prijs in een folder vergelijkt?",
        options: ["Rekenmiddel", "Ruilmiddel", "Spaarmiddel", "Productiemiddel"],
        answer: 0,
        wrongHints: [null, "Ruilmiddel gebruik je tijdens het betalen, niet bij vergelijken.", "Sparen is iets opzijzetten — niet vergelijken.", "Productiemiddel is geen geldfunctie."],
      },
      {
        q: "Wat is **giraal geld**?",
        options: ["Geld op je bankrekening", "Munten in je portemonnee", "Gouden baren", "Geld dat je hebt verdiend met werken"],
        answer: 0,
        wrongHints: [null, "Dat is chartaal.", "Goud is een waardeobject, geen modern betaalmiddel.", "Dat zegt iets over hoe je het kreeg, niet over de soort geld."],
      },
    ],
  },
  {
    title: "Banken — sparen en rente",
    explanation: "**Banken** doen drie dingen:\n1. **Geld bewaren** (betaal- en spaarrekening)\n2. **Geld lenen** (hypotheek, persoonlijke lening)\n3. **Betalingen regelen** (overschrijvingen, pinnen)\n\n**Sparen**: je geeft de bank tijdelijk je geld. De bank betaalt je **rente** als beloning.\n\nVoorbeeld: je zet €1000 op een spaarrekening met 2% rente per jaar.\n• Na 1 jaar: €1000 × 1,02 = **€1020**\n• Na 2 jaar: €1020 × 1,02 = **€1040,40**\n\nDe rente over rente heet **samengestelde rente** — het wordt elk jaar groter.\n\n**Reden om te sparen**: voor onverwachte uitgaven, een doel (auto, vakantie), of voor later (pensioen).",
    svg: `<svg viewBox="0 0 300 180">
<rect x="50" y="40" width="200" height="40" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="150" y="64" text-anchor="middle" fill="${COLORS.geld}" font-size="14" font-family="Arial" font-weight="bold">€1000 op spaarrekening</text>
<text x="150" y="100" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">+ 2% rente per jaar</text>
<text x="150" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="13" font-family="Arial" font-weight="bold">€1020 → €1040,40 → €1061,20</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">samengestelde rente — groeit ieder jaar</text>
</svg>`,
    checks: [
      {
        q: "Je zet €500 op een spaarrekening met **3% rente** per jaar. Hoeveel staat er na 1 jaar?",
        options: ["€515", "€503", "€530", "€553"],
        answer: 0,
        wrongHints: [null, "3% van €500 is geen 3 euro — dat is 0,6%.", "Dat zou 6% rente zijn, niet 3%.", "Dat is ongeveer 10% — veel te veel."],
      },
      {
        q: "Wat is **samengestelde rente**?",
        options: ["Rente die je ook over de eerder ontvangen rente krijgt", "Een speciaal soort lening", "Hogere rente bij een zakelijke rekening", "Belasting op spaargeld"],
        answer: 0,
        wrongHints: [null, "Lening en spaarrekening zijn verschillende producten.", "Niet specifiek aan zakelijk gebonden.", "Dat is vermogensbelasting, een ander concept."],
      },
    ],
  },
  {
    title: "Lenen — kredietvormen en risico",
    explanation: "**Lenen** is geld krijgen dat je **later moet terugbetalen**, vaak met **rente**.\n\n**Soorten leningen**:\n\n**Hypotheek**: lange lening om een huis te kopen. Looptijd vaak 20-30 jaar. Rente lager omdat het huis als onderpand dient.\n\n**Persoonlijke lening**: vast bedrag, vaste maandlasten over een paar jaar (bv. €5000 over 4 jaar).\n\n**Doorlopend krediet**: kredietruimte tot een limiet — flexibel, maar vaak hoge rente.\n\n**Rood staan**: tijdelijk negatief op je betaalrekening. Hoge rente.\n\n**Risico**: kun je het terugbetalen? Banken kijken naar:\n• Inkomen (kun je de maandlasten betalen?)\n• Bestaande schulden (BKR-toets)\n• Onderpand bij grote leningen\n\n**Vuistregel**: leen niet meer dan ~30% van je netto-inkomen aan vaste maandlasten.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">LENEN — soorten</text>
<rect x="20" y="40" width="120" height="34" rx="5" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="80" y="61" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">hypotheek</text>
<rect x="160" y="40" width="120" height="34" rx="5" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="220" y="61" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">persoonlijke lening</text>
<rect x="20" y="84" width="120" height="34" rx="5" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="80" y="105" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">doorlopend krediet</text>
<rect x="160" y="84" width="120" height="34" rx="5" fill="${COLORS.paper}" stroke="${COLORS.rood}" stroke-width="1.2"/>
<text x="220" y="105" text-anchor="middle" fill="${COLORS.rood}" font-size="11" font-family="Arial" font-weight="bold">rood staan</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">vuistregel: max ~30% netto-inkomen</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">aan vaste maandlasten</text>
</svg>`,
    checks: [
      {
        q: "Welke leenvorm heeft een huis als **onderpand**?",
        options: ["Hypotheek", "Persoonlijke lening", "Rood staan", "Studielening"],
        answer: 0,
        wrongHints: [null, "Persoonlijke lening heeft meestal geen onderpand — daarom hogere rente.", "Rood staan is voor kortdurend tekort op je rekening.", "Studielening is bij DUO; geen huis als onderpand."],
      },
      {
        q: "Waarom heeft **rood staan** vaak een hoge rente?",
        options: ["Het is geen lange-termijn-lening en de bank loopt risico", "Banken willen klanten straffen", "Het is illegaal", "Omdat de overheid dat verplicht"],
        answer: 0,
        wrongHints: [null, "Niet om te 'straffen' — het is gewoon prijszetting voor risico.", "Rood staan is wel legaal (binnen je limiet).", "De rente wordt door de bank bepaald, niet door de overheid."],
      },
    ],
  },
  // ─── C. Ben jij ondernemend? ───────────────────────────
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
  // ─── D. Werk aan de winkel! ────────────────────────────
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
    ],
  },
  // ─── E. Hoe werkt de overheid? ─────────────────────────
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
    ],
  },
  // ─── F. Iedereen betaalt belasting ─────────────────────
  {
    title: "Soorten belastingen",
    explanation: "**Belasting**: verplichte betaling aan de overheid, zonder dat je daar direct iets voor terugkrijgt.\n\nTwee hoofdsoorten:\n\n**Directe belastingen**: betaald op basis van wie je bent / wat je verdient.\n• **Inkomstenbelasting (IB)**: over je inkomen.\n• **Vennootschapsbelasting (VPB)**: over winst van BV's.\n• **Erfbelasting**: bij erven.\n\n**Indirecte belastingen**: zit verstopt in de prijs van iets.\n• **BTW (omzetbelasting)**: bij elke aankoop.\n• **Accijns**: op alcohol, tabak, brandstof.\n\n**Premies**: lijkt op belasting maar bedoeld voor iets specifieks.\n• **AOW-premie** voor latere ouderdomsuitkering.\n• **Zorgverzekeringspremie** voor zorg.\n• **WW-premie** voor werkloosheidsuitkering.\n\nVerschil belasting vs premie:\n• Belasting → algemene pot van de overheid.\n• Premie → specifiek doel, je krijgt later iets terug.",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">BELASTINGEN</text>
<rect x="20" y="40" width="130" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="85" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">DIRECT</text>
<text x="85" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">inkomstenbelasting</text>
<text x="85" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vennootschap (VPB)</text>
<text x="85" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">erfbelasting</text>
<rect x="160" y="40" width="130" height="80" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.5"/>
<text x="225" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">INDIRECT</text>
<text x="225" y="76" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">BTW (in elke prijs)</text>
<text x="225" y="90" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">accijns alcohol/tabak</text>
<text x="225" y="104" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">brandstof</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">premies = specifiek doel · belasting = algemene pot</text>
</svg>`,
    checks: [
      {
        q: "Welke belasting zit verstopt in de prijs van een glas frisdrank?",
        options: ["BTW (indirect)", "Inkomstenbelasting", "Vennootschapsbelasting", "Erfbelasting"],
        answer: 0,
        wrongHints: [null, "Inkomstenbelasting betaal je over je loon, niet bij een drankje.", "VPB is voor BV's over winst.", "Erfbelasting betaal je alleen bij een erfenis."],
      },
      {
        q: "Wat is het verschil tussen **belasting** en **premie**?",
        options: ["Premie heeft een specifiek doel; belasting gaat naar de algemene pot", "Premie is altijd hoger", "Belasting is alleen voor rijke mensen", "Er is geen verschil"],
        answer: 0,
        wrongHints: [null, "Hoogte verschilt per regeling, geen vaste verhouding.", "Iedereen betaalt belasting (BTW bij aankoop bijvoorbeeld).", "Er is wel verschil — qua doel en wat je terugkrijgt."],
      },
    ],
  },
  {
    title: "BTW en accijns",
    explanation: "**BTW (Belasting Toegevoegde Waarde / omzetbelasting)** wordt geheven op bijna alle verkopen.\n\nNederland heeft 3 tarieven:\n• **21%** — algemeen tarief (kleding, elektronica, restaurant)\n• **9%** — laag tarief (boodschappen, water, boeken, kapper)\n• **0%** — voor specifieke gevallen (export, sommige zorg)\n\nVoorbeeld: een spelcomputer staat in de winkel voor €484.\n• Prijs zonder BTW: €400\n• BTW 21%: €84\n• Totaal: €484\n\n**Accijns**: extra belasting bovenop de BTW op specifieke producten.\n• Tabak\n• Alcohol\n• Brandstof (benzine, diesel)\n• Suikerhoudende dranken (vanaf 2024)\n\nWaarom accijns?\n1. Geld voor de overheid\n2. **Ontmoediging**: hoge accijns op tabak om roken minder aantrekkelijk te maken\n3. **Milieu**: hoge accijns op fossiele brandstof",
    svg: `<svg viewBox="0 0 300 180">
<rect x="40" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="70" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="14" font-family="Arial" font-weight="bold">21%</text>
<text x="70" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">algemeen</text>
<rect x="120" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="150" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="14" font-family="Arial" font-weight="bold">9%</text>
<text x="150" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">laag</text>
<rect x="200" y="40" width="60" height="60" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="230" y="62" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">0%</text>
<text x="230" y="84" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">export/zorg</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">+ accijns op tabak · alcohol · brandstof</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">ontmoediging + extra inkomsten</text>
</svg>`,
    checks: [
      {
        q: "Een fiets kost €330 inclusief 21% BTW. Wat is de prijs **zonder BTW**?",
        options: ["€272,73", "€260,70", "€309,30", "€110"],
        answer: 0,
        wrongHints: [null, "Niet 21% van €330 aftrekken — je moet delen door 1,21.", "Net niet — €330 / 1,21.", "Dat is alleen het BTW-bedrag, niet de prijs zonder BTW."],
      },
      {
        q: "Waarom heft de overheid hoge accijns op **tabak**?",
        options: ["Om roken te ontmoedigen + extra inkomsten", "Om mensen te belonen voor roken", "Omdat tabak duur is om te maken", "Om buitenlandse merken te helpen"],
        answer: 0,
        wrongHints: [null, "Belonen voor schadelijk gedrag is onlogisch — accijns is ontmoediging.", "Productiekosten zijn relatief laag; accijns is een politieke keuze.", "Accijns geldt voor alle merken in NL, ongeacht herkomst."],
      },
    ],
  },
  {
    title: "Inkomstenbelasting en premies",
    explanation: "**Inkomstenbelasting (IB)** betaal je over je inkomen — loon, winst uit eigen bedrijf, AOW, etc.\n\nNederland heeft **schijven**: hoe hoger je inkomen, hoe hoger het tarief over het bedrag in die schijf.\n\nVoorbeeld 2024 (vereenvoudigd):\n• Schijf 1: tot ~€38.000 → 36,93%\n• Schijf 2: vanaf ~€75.000 → 49,5%\n\nDit heet **progressieve belasting** — sterke schouders dragen zwaardere lasten.\n\n**Heffingskortingen** verlagen de belasting:\n• **Algemene heffingskorting**: voor iedereen.\n• **Arbeidskorting**: voor mensen die werken.\n\nVoorbeeld: bruto loon €30.000.\n• Belasting in schijf 1: ~€11.000\n• Min heffingskortingen: ~€4.500\n• Te betalen: ~€6.500\n• Netto inkomen: ~€23.500\n\nVerder betaal je ook **sociale premies**: AOW, ZVW (zorg), WW.\n\nDe werkgever houdt belasting + premies meteen in op je loonstrookje (loonheffing).",
    svg: `<svg viewBox="0 0 300 200">
<text x="150" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PROGRESSIEVE BELASTING</text>
<rect x="40" y="50" width="200" height="22" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1"/>
<text x="140" y="65" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial">schijf 1 — 36,93%</text>
<rect x="40" y="78" width="160" height="22" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1"/>
<text x="120" y="93" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">schijf 2 — 49,5%</text>
<text x="40" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€0</text>
<text x="140" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€38.000</text>
<text x="195" y="115" fill="${COLORS.text}" font-size="9" font-family="Arial">€75.000+</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">– heffingskortingen = lagere belasting</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">+ sociale premies (AOW, zorgverzekering, WW)</text>
</svg>`,
    checks: [
      {
        q: "Wat betekent **progressief** in inkomstenbelasting?",
        options: ["Hoger inkomen → hoger percentage belasting in de hoogste schijf", "Belasting wordt elk jaar hoger", "Iedereen betaalt evenveel", "Belasting daalt met inkomen"],
        answer: 0,
        wrongHints: [null, "Progressief = stijgende schaal binnen 1 jaar, niet 'elk jaar duurder'.", "Dat is een vlaktaks — Nederland heeft schijven.", "Tegenovergesteld — dat zou degressief zijn."],
      },
      {
        q: "Wat is een **heffingskorting**?",
        options: ["Bedrag dat van je te betalen belasting wordt afgehaald", "Korting in de winkel met een speciale pas", "Een soort spaarrekening", "De rente die je krijgt op spaargeld"],
        answer: 0,
        wrongHints: [null, "Niets met winkels — pure belastingterm.", "Spaarrekening is bankproduct, geen belasting.", "Rente is iets anders dan een korting op belasting."],
      },
    ],
  },
  // ─── G. Nederland en het buitenland ────────────────────
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
  // ─── H. Ontwikkelingslanden ────────────────────────────
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
    ],
  },
];

const pincodeEconomieVmboGt4 = {
  id: "pincode-economie-vmbo-gt-4",
  title: "Pincode VMBO-GT 4 — Economie",
  emoji: "💶",
  level: "vmbo-gt-4",
  subject: "economie",
  intro:
    "Compleet leerpad voor Pincode 7e editie vmbo-gt klas 4. 8 hoofdstukken: van inkomen en welvaart, geld, ondernemen en werk, tot overheid, belasting, internationale handel en ontwikkelingslanden. Per hoofdstuk drie kernstappen.",
  triggerKeywords: [
    "pincode", "vmbo-gt 4", "vmbo gt 4", "mavo 4 economie",
    "inkomen", "welvaart", "schaarste", "behoeften", "primair", "secundair", "bruto", "netto",
    "geld", "sparen", "rente", "lenen", "hypotheek", "krediet",
    "ondernemen", "omzet", "kosten", "winst", "rechtsvorm", "bv", "vof", "eenmanszaak",
    "arbeidsmarkt", "cao", "werkloosheid", "productiviteit",
    "overheid", "rijksbegroting", "miljoenennota", "staatsschuld",
    "belasting", "btw", "accijns", "inkomstenbelasting", "vpb", "heffingskorting",
    "import", "export", "handelsbalans", "europese unie", "eu", "euro", "wisselkoers", "ecb",
    "ontwikkelingsland", "hdi", "armoede", "fair trade", "microkrediet", "sdg",
  ],
  chapters,
  steps,
};

export default pincodeEconomieVmboGt4;

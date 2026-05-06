// Leerpad: Argumentatieleer — Nederlands havo 4
// 14 stappen in 5 hoofdstukken (A t/m E).
// Niveau: havo 4, examenstof centraal eindexamen leesvaardigheid.
// Tone: zakelijker dan onderbouw — uitleggen + analyseren + drogredenen herkennen.

const COLORS = {
  axis: "#e0e6f0",
  good: "#00c853",
  goodSoft: "#69f0ae",
  warm: "#ffd54f",
  warmSoft: "#fff59d",
  alt: "#ff7043",
  altSoft: "#ffab91",
  blue: "#5b86b8",
  blueSoft: "#90caf9",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = [
  "💬", "🎯", "🧱",                // A. Standpunt en argument
  "⚖️", "🔗", "🏷️", "🔄", "🎓",    // B. Argumentatieschema's
  "1️⃣", "🤝", "🔻",                // C. Argumentatiestructuur
  "🚫", "👤", "📊",                 // D. Drogredenen
  "🏆",                              // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Standpunt en argument", emoji: "💬", from: 0, to: 2 },
  { letter: "B", title: "Argumentatieschema's", emoji: "🧰", from: 3, to: 7 },
  { letter: "C", title: "Argumentatiestructuur", emoji: "🌳", from: 8, to: 10 },
  { letter: "D", title: "Drogredenen", emoji: "🚫", from: 11, to: 13 },
];

const steps = [
  // ─── A. Standpunt en argument ─────────────────────────
  {
    title: "Wat is een standpunt?",
    explanation: "Een **standpunt** (ook wel: stelling) is een **mening** die iemand verdedigt. Het is geen feit, maar een **bewering** die de schrijver waar wil maken.\n\n**Kenmerken van een standpunt**:\n• Het is **subjectief** — er is over te discussiëren.\n• Vaak herkenbaar aan **modale woorden**: *moet, zou moeten, is nodig, is wenselijk, is onverstandig*.\n• Vaak in **één zin** samen te vatten.\n\n**Voorbeelden**:\n• \"De maximumsnelheid moet omlaag naar 100 km/u.\" *(standpunt)*\n• \"Op snelwegen mag je 130 km/u rijden.\" *(feit, géén standpunt)*\n• \"Sociale media zijn schadelijk voor jongeren.\" *(standpunt — kun je over discussiëren)*\n\n**Soorten standpunten**:\n• **Beschrijvend** — over hoe iets is. *\"De zorg in Nederland is van hoge kwaliteit.\"*\n• **Voorschrijvend** — over hoe iets zou moeten zijn. *\"De zorgpremie moet verlaagd worden.\"*\n• **Waarderend** — over hoe waardevol iets is. *\"Klassieke muziek is mooier dan popmuziek.\"*",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="50" rx="8" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="48" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">standpunt = mening, geen feit</text>
<text x="150" y="64" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">je kunt erover discussiëren</text>
<text x="35" y="100" fill="${COLORS.text}" font-size="12" font-family="Arial">"Maximumsnelheid moet omlaag."</text>
<text x="35" y="118" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">→ standpunt (modaal woord: moet)</text>
<text x="35" y="143" fill="${COLORS.text}" font-size="12" font-family="Arial">"Op snelwegen mag je 130 km/u."</text>
<text x="35" y="161" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">→ feit (toetsbaar, geen mening)</text>
</svg>`,
    checks: [
      {
        q: "Welke zin is een **standpunt**?",
        options: [
          "Jongeren zouden minder schermtijd moeten hebben.",
          "Gemiddeld kijken Nederlandse jongeren 4 uur per dag op hun telefoon.",
          "Smartphones zijn ontwikkeld in de jaren 90.",
          "Tiktok is een sociaal medium.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is een meetbare uitspraak — kun je controleren via cijfers. Welk kenmerk maakt iets een standpunt?",
          "Dat is een historisch feit. Geen mening waarover je kunt discussiëren.",
          "Dat is een definitie / feit. Een standpunt bevat een waardeoordeel.",
        ],
      },
      {
        q: "Welk type standpunt is: *\"De gemeente moet meer geld vrijmaken voor jeugdzorg.\"*?",
        options: ["voorschrijvend", "beschrijvend", "waarderend", "feit"],
        answer: 0,
        wrongHints: [
          null,
          "Beschrijvend zegt hoe iets *is*. Hier wordt gezegd hoe iets *zou moeten* zijn.",
          "Waarderend gaat over hoe goed/mooi iets is. Hier gaat het over een actie die ondernomen moet worden.",
          "Het bevat een mening (\"moet\") — geen toetsbaar feit. Wat zegt deze zin over wat er zou moeten gebeuren?",
        ],
      },
    ],
  },
  {
    title: "Wat is een argument?",
    explanation: "Een **argument** is de **reden** die iemand geeft om een standpunt te ondersteunen. Het antwoord op de vraag: *\"Waarom vind je dat?\"*\n\n**Standpunt + Argument(en)** = argumentatie.\n\n**Voorbeeld**:\n• Standpunt: De maximumsnelheid moet omlaag naar 100 km/u.\n• Argument 1: Een lagere snelheid leidt tot minder uitstoot van CO2.\n• Argument 2: Het aantal verkeersdoden daalt aantoonbaar bij 100 km/u.\n• Argument 3: De rij-tijd neemt nauwelijks toe (gemiddeld 2-3 minuten extra).\n\n**Signaalwoorden voor argumenten**: *omdat, want, namelijk, doordat, daardoor, immers, ten eerste, bovendien, daarnaast, ook*.\n\n**Belangrijk onderscheid**:\n• Het standpunt is wat de schrijver **vindt**.\n• Het argument is **waarom** hij dat vindt.\n\n**Test**: zet \"want\" of \"omdat\" tussen twee zinnen. Werkt het? → Tweede zin is argument bij de eerste.\n*\"De maximumsnelheid moet omlaag, **want** een lagere snelheid leidt tot minder CO2.\"* ✓",
    svg: `<svg viewBox="0 0 300 200">
<rect x="80" y="20" width="140" height="36" rx="8" fill="rgba(255,213,79,0.20)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="43" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">STANDPUNT</text>
<line x1="100" y1="58" x2="80" y2="92" stroke="${COLORS.muted}" stroke-width="1"/>
<line x1="150" y1="58" x2="150" y2="92" stroke="${COLORS.muted}" stroke-width="1"/>
<line x1="200" y1="58" x2="220" y2="92" stroke="${COLORS.muted}" stroke-width="1"/>
<rect x="30" y="95" width="100" height="32" rx="6" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="80" y="115" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">argument 1</text>
<rect x="100" y="95" width="100" height="32" rx="6" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2" transform="translate(0 0)"/>
<text x="150" y="115" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">argument 2</text>
<rect x="170" y="95" width="100" height="32" rx="6" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="220" y="115" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">argument 3</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">argument = waarom?</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">signaalwoord: omdat, want, doordat</text>
</svg>`,
    checks: [
      {
        q: "*\"Het schoolplein zou groener moeten worden, want planten verbeteren de luchtkwaliteit.\"* — Wat is hier het argument?",
        options: [
          "Planten verbeteren de luchtkwaliteit.",
          "Het schoolplein zou groener moeten worden.",
          "Schoolplein.",
          "Dit is geen argumentatie.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Dat is het standpunt — wat de schrijver *vindt*. Het argument is de **reden**.",
          "Dat is een woord uit de zin, geen volledige bewering.",
          "Er staat een signaalwoord (want). Dat duidt op argumentatie.",
        ],
      },
      {
        q: "Welk woord is **geen** signaalwoord voor een argument?",
        options: ["maar", "want", "omdat", "doordat"],
        answer: 0,
        wrongHints: [
          null,
          "Want is juist een klassiek signaal voor een argument.",
          "Omdat is een klassiek signaal voor een argument.",
          "Doordat geeft een oorzaak — dat is een argument.",
        ],
      },
    ],
  },
  {
    title: "Standpunt en argument herkennen in tekst",
    explanation: "In examenteksten staat het standpunt zelden zo expliciet als \"Ik vind dat...\". Je moet er **achter komen** door de tekst goed te lezen.\n\n**Stappenplan om het standpunt te vinden**:\n1. **Wat wil de schrijver dat de lezer denkt of doet** na het lezen?\n2. Zoek in de **inleiding** (vraag, probleemstelling) en het **slot** (samenvattende conclusie).\n3. Vat het samen in **één zin** met een werkwoord van mening: *vindt, stelt, beweert, pleit voor*.\n\n**Stappenplan om argumenten te vinden**:\n1. Zoek **signaalwoorden**: omdat, want, doordat, immers, ten eerste, daarnaast, bovendien.\n2. Vraag bij elke alinea: **Waarom voert de schrijver dit aan?** Ondersteunt het de hoofdgedachte?\n3. Onderscheid **hoofdargumenten** (dragen het standpunt) van **subargumenten** (ondersteunen een hoofdargument).\n\n**Veelgemaakte fout**: een **voorbeeld** is geen argument op zich. Een voorbeeld **illustreert** een argument. Het argument is de algemene uitspraak waar het voorbeeld bij past.\n\n**Voorbeeld**:\n• Standpunt: *\"Jongeren bewegen te weinig.\"*\n• Argument: *\"Schermgebruik verdringt fysieke activiteit.\"*\n• Voorbeeld bij argument: *\"Mijn neefje zit elke avond 3 uur op zijn telefoon.\"* — illustreert, maar bewijst niets.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">stappenplan: standpunt vinden</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">1. Wat wil schrijver dat lezer denkt?</text>
<text x="35" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">2. Inleiding + slot lezen</text>
<text x="35" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">3. Samenvatten in één zin</text>
<text x="35" y="145" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">let op: voorbeeld ≠ argument</text>
<text x="35" y="163" fill="${COLORS.muted}" font-size="10" font-family="Arial">voorbeeld illustreert; argument onderbouwt</text>
</svg>`,
    checks: [
      {
        q: "*\"Jongeren bewegen te weinig. Mijn buurjongen zit elke avond achter zijn PlayStation.\"* — Is de tweede zin een argument?",
        options: [
          "Nee, het is een voorbeeld dat een argument zou kunnen illustreren.",
          "Ja, want het bewijst dat jongeren niet bewegen.",
          "Ja, het is een hoofdargument.",
          "Nee, het is een drogreden.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Eén buurjongen bewijst niets over alle jongeren. Wat is het verschil tussen een algemene uitspraak en een individueel voorbeeld?",
          "Een hoofdargument is een algemene reden. Hier wordt één concreet geval genoemd.",
          "Een drogreden is een onjuist *type* argument. Maar dit is gewoon een voorbeeld, geen argument.",
        ],
      },
    ],
  },

  // ─── B. Argumentatieschema's ──────────────────────────
  {
    title: "Argumentatieschema 1 — voor- en nadelen",
    explanation: "Een **argumentatieschema** is het *type* argument dat gebruikt wordt. In havo 4 leer je vijf hoofdtypen.\n\n**Type 1: voor- en nadelen** (ook: pragmatische argumentatie).\n\nDe schrijver onderbouwt het standpunt door **voordelen** of **nadelen** te noemen die voortkomen uit de voorgestelde maatregel of situatie.\n\n**Vorm**:\n• *X moet (niet) gedaan worden, want X heeft als voordeel dat... / nadeel dat...*\n\n**Voorbeelden**:\n• Standpunt: *\"Scholen moeten gratis schoolfruit aanbieden.\"*\n  Argument (voordeel): *\"Het verlaagt het risico op overgewicht.\"*\n  Argument (voordeel): *\"Het maakt gezond eten gewoon.\"*\n\n• Standpunt: *\"Auto's mogen niet meer in de binnenstad.\"*\n  Argument (nadeel auto's): *\"Ze veroorzaken fijnstof en geluidsoverlast.\"*\n\n**Signaalwoorden**: *het voordeel hiervan is..., dit leidt tot..., dit zorgt voor..., met als gevolg dat..., het nadeel is dat...*\n\n**Kritische vraag** (om dit type te beoordelen): *Wegen de voordelen wel op tegen de nadelen?* Worden er ook nadelen genoemd, of alleen het positieve?",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="40" rx="8" fill="rgba(255,213,79,0.20)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="46" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">standpunt: actie X</text>
<line x1="100" y1="62" x2="80" y2="92" stroke="${COLORS.muted}" stroke-width="1"/>
<line x1="200" y1="62" x2="220" y2="92" stroke="${COLORS.muted}" stroke-width="1"/>
<rect x="20" y="95" width="120" height="40" rx="6" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="80" y="117" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">+ voordeel</text>
<text x="80" y="131" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">leidt tot...</text>
<rect x="160" y="95" width="120" height="40" rx="6" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="220" y="117" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">− nadeel</text>
<text x="220" y="131" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">heeft als gevolg...</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">kritische vraag: weegt + op tegen − ?</text>
</svg>`,
    checks: [
      {
        q: "*Standpunt: \"Examens moeten op de computer.\" Argument: \"Dat scheelt jaarlijks duizenden bomen aan papier.\"* — Welk type argument?",
        options: [
          "Voor-/nadelen-argument",
          "Autoriteitsargument",
          "Vergelijkingsargument",
          "Kenmerk-argument",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een autoriteit is een persoon/instantie. Hier wordt geen autoriteit aangehaald.",
          "Een vergelijking trekt parallel met iets anders. Hier wordt geen vergelijking gemaakt.",
          "Een kenmerk-argument zegt: *omdat X de eigenschap Y heeft*. Hier wordt een gevolg/voordeel genoemd.",
        ],
      },
    ],
  },
  {
    title: "Argumentatieschema 2 — oorzaak en gevolg",
    explanation: "**Type 2: oorzaak-gevolg-argumentatie** (ook: causale argumentatie).\n\nDe schrijver legt een **oorzakelijk verband** tussen twee dingen. Vaak om te onderbouwen dat iets ergens **toe leidt** — positief of negatief.\n\n**Vorm**:\n• *Door X komt Y. / X leidt tot Y. / Het gevolg van X is Y.*\n\n**Voorbeelden**:\n• Standpunt: *\"De zelfmoordcijfers onder jongeren stijgen.\"*\n  Argument: *\"Doordat sociale media een vertekend ideaalbeeld geven, neemt de druk op jongeren toe.\"* (oorzaak → gevolg)\n\n• Standpunt: *\"Zwemles moet verplicht.\"*\n  Argument: *\"Door geen zwemdiploma te halen, lopen kinderen een groter risico op verdrinking.\"*\n\n**Signaalwoorden**: *doordat, daardoor, leidt tot, veroorzaakt, brengt met zich mee, heeft als gevolg dat, zorgt voor, het komt door...*\n\n**Verschil met voor-/nadelen**:\n• Voor-/nadelen: *X heeft een wenselijk/onwenselijk effect op de afweging.*\n• Oorzaak-gevolg: *Er bestaat een feitelijke causale relatie tussen X en Y.*\n\n**Kritische vraag**: *Is er werkelijk een oorzakelijk verband, of is er alleen een toevallige samenhang?* (Veel kinderen die ijs eten, gaan zwemmen — maar ijs veroorzaakt geen zwemmen.)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="100" height="50" rx="8" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="70" y="65" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">oorzaak</text>
<text x="70" y="82" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">X</text>
<line x1="125" y1="65" x2="175" y2="65" stroke="${COLORS.alt}" stroke-width="2.5" marker-end="url(#arrhead)"/>
<defs><marker id="arrhead" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><polygon points="0 0, 8 4, 0 8" fill="${COLORS.alt}"/></marker></defs>
<rect x="180" y="40" width="100" height="50" rx="8" fill="rgba(255,112,67,0.18)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="230" y="65" text-anchor="middle" fill="${COLORS.alt}" font-size="14" font-family="Arial" font-weight="bold">gevolg</text>
<text x="230" y="82" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">Y</text>
<text x="150" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">"X leidt tot Y"</text>
<text x="150" y="145" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">signaal: doordat, leidt tot, daardoor</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">kritisch: is het écht oorzaak, of toeval?</text>
</svg>`,
    checks: [
      {
        q: "*Standpunt: \"De examenresultaten dalen.\" Argument: \"Doordat docenten te weinig nakijktijd krijgen, zijn ze minder zorgvuldig.\"* — Welk type?",
        options: [
          "Oorzaak-gevolg-argument",
          "Voor-/nadelen-argument",
          "Autoriteitsargument",
          "Kenmerk-argument",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Voor-/nadelen weegt af tussen voordelen en nadelen. Hier wordt een verband uitgelegd: *door X komt Y*.",
          "Een autoriteit is een persoon/bron. Hier wordt geen bron aangehaald.",
          "Kenmerk-argument zegt *iets is zo omdat het de eigenschap X heeft*. Hier gaat het over een keten: oorzaak → gevolg.",
        ],
      },
    ],
  },
  {
    title: "Argumentatieschema 3 — kenmerk",
    explanation: "**Type 3: kenmerk-argumentatie** (ook: argumentatie op basis van eigenschappen).\n\nDe schrijver onderbouwt het standpunt door een **eigenschap** (kenmerk) van iets aan te wijzen, en daaruit een conclusie te trekken.\n\n**Vorm**:\n• *X is/heeft de eigenschap Y, en daarom geldt Z.*\n• *X behoort tot de categorie Y, dus heeft de eigenschappen van Y.*\n\n**Voorbeelden**:\n• Standpunt: *\"Het roken van shisha is ongezond.\"*\n  Argument: *\"Shisha-rook bevat dezelfde teer en koolmonoxide als sigarettenrook.\"* *(kenmerk: bevat schadelijke stoffen → ongezond)*\n\n• Standpunt: *\"Een hond is een goede gezelschapsdier voor ouderen.\"*\n  Argument: *\"Honden zijn loyaal, vragen om beweging en geven structuur aan de dag.\"* *(kenmerken van het dier)*\n\n• Standpunt: *\"Deze auto is veilig.\"*\n  Argument: *\"Hij heeft 5 sterren bij de NCAP-crashtest.\"* *(kenmerk: hoge crash-score)*\n\n**Signaalwoorden**: *kenmerkend, typisch, omdat het ..., behoort tot, heeft de eigenschap, is een voorbeeld van...*\n\n**Kritische vraag**: *Klopt het kenmerk, en hangt de conclusie er logisch mee samen?* (Een hond is loyaal, maar maakt dat hem automatisch geschikt voor élke oudere?)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="40" y="20" width="220" height="36" rx="8" fill="rgba(255,213,79,0.20)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="44" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">conclusie over X</text>
<line x1="150" y1="56" x2="150" y2="78" stroke="${COLORS.muted}" stroke-width="1"/>
<rect x="40" y="80" width="220" height="36" rx="8" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="104" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">X heeft eigenschap Y</text>
<text x="150" y="150" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">"shisha bevat teer → ongezond"</text>
<text x="150" y="175" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">kritisch: klopt kenmerk + volgt conclusie?</text>
</svg>`,
    checks: [
      {
        q: "*Standpunt: \"Deze film is geschikt voor kinderen.\" Argument: \"Er komen geen scenes met geweld in voor.\"* — Welk type?",
        options: [
          "Kenmerk-argument",
          "Vergelijkingsargument",
          "Oorzaak-gevolg",
          "Autoriteit",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een vergelijking trekt parallel met iets anders. Hier wordt een eigenschap van de film genoemd.",
          "Oorzaak-gevolg legt een keten uit. Hier wordt een eigenschap (afwezigheid van geweld) genoemd waaruit de conclusie volgt.",
          "Een autoriteit is een persoon/instantie. Hier wordt geen autoriteit aangehaald.",
        ],
      },
    ],
  },
  {
    title: "Argumentatieschema 4 — vergelijking",
    explanation: "**Type 4: vergelijkingsargumentatie** (ook: argumentatie op basis van analogie).\n\nDe schrijver onderbouwt het standpunt door iets te **vergelijken** met iets anders dat erop lijkt. Als het ene zo werkt, dan zal het andere ook zo werken.\n\n**Vorm**:\n• *X lijkt op Y. Voor Y geldt A. Dus voor X geldt waarschijnlijk ook A.*\n\n**Voorbeelden**:\n• Standpunt: *\"E-sigaretten moeten ook verboden worden in horeca.\"*\n  Argument: *\"Ze veroorzaken net als gewone sigaretten ongezonde meeroken-situaties.\"* *(vergelijking met sigaretten)*\n\n• Standpunt: *\"Suikerhoudende dranken moeten extra belast worden.\"*\n  Argument: *\"In Mexico is dit gedaan en de consumptie daalde met 12%. Hetzelfde zou hier kunnen gebeuren.\"* *(vergelijking met ander land)*\n\n• Standpunt: *\"De universiteit moet meer praktijklessen geven.\"*\n  Argument: *\"Op de hbo-opleidingen waar dat wel gebeurt, zijn studenten beter voorbereid op de arbeidsmarkt.\"*\n\n**Signaalwoorden**: *net als, vergelijkbaar met, zoals ook bij..., op dezelfde manier, denk aan..., elders blijkt..., het voorbeeld van...*\n\n**Kritische vraag**: *Zijn de twee gevallen wel echt vergelijkbaar? Welke verschillen zijn relevant?* (Mexico is geen Nederland — culturele/economische context kan verschillen.)",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="40" width="110" height="60" rx="8" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="75" y="68" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">geval Y</text>
<text x="75" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">A geldt</text>
<text x="148" y="65" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial" font-weight="bold">≈</text>
<text x="148" y="82" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">lijkt op</text>
<rect x="170" y="40" width="110" height="60" rx="8" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="225" y="68" text-anchor="middle" fill="${COLORS.good}" font-size="14" font-family="Arial" font-weight="bold">geval X</text>
<text x="225" y="86" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">dus ook A</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">"als Mexico het deed, kan Nederland het ook"</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">kritisch: zijn ze écht vergelijkbaar?</text>
</svg>`,
    checks: [
      {
        q: "*Standpunt: \"Schoolboeken moeten gratis blijven.\" Argument: \"In Duitsland is dit ingevoerd en daar steeg het leesniveau aantoonbaar.\"* — Welk type?",
        options: [
          "Vergelijkingsargument",
          "Autoriteitsargument",
          "Oorzaak-gevolg",
          "Kenmerk-argument",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er wordt geen autoriteit (persoon, instantie) genoemd. Wel wordt iets uit een ander land aangehaald.",
          "Oorzaak-gevolg verbindt twee dingen direct. Hier wordt een parallel met een ander land gebruikt om te onderbouwen.",
          "Kenmerk-argument noemt een eigenschap van het ding zelf. Hier wordt verwezen naar wat elders is gebeurd.",
        ],
      },
    ],
  },
  {
    title: "Argumentatieschema 5 — autoriteit",
    explanation: "**Type 5: autoriteitsargumentatie** (ook: argumentatie op basis van gezag).\n\nDe schrijver onderbouwt het standpunt door te verwijzen naar een **deskundige bron**: een wetenschapper, een instituut, een onderzoek of een veelvuldig erkende autoriteit.\n\n**Vorm**:\n• *Volgens X (bron) is Z het geval. Daarom moeten we Z aannemen.*\n\n**Voorbeelden**:\n• Standpunt: *\"De zeespiegel stijgt sneller dan eerder gedacht.\"*\n  Argument: *\"Het IPCC concludeert dat de stijging in 2050 al 30 cm kan bedragen.\"* *(autoriteit: IPCC)*\n\n• Standpunt: *\"Roken in nabijheid van kinderen moet strafbaar zijn.\"*\n  Argument: *\"De Wereldgezondheidsorganisatie WHO bestempelt meeroken als bewezen schadelijk.\"*\n\n• Standpunt: *\"Vroeg opstaan is goed voor de prestaties.\"*\n  Argument: *\"Onderzoek van Harvard University toont dit aan.\"*\n\n**Signaalwoorden**: *volgens..., uit onderzoek blijkt..., experts zeggen dat..., de WHO/het CBS/het RIVM stelt..., volgens deskundigen...*\n\n**Kritische vraag**:\n• *Is de aangehaalde autoriteit werkelijk deskundig op dit gebied?* (Een Nobelprijswinnaar in scheikunde is geen autoriteit op het gebied van klimaatpolitiek.)\n• *Is de bron actueel en betrouwbaar?*\n• *Wordt de bron correct geciteerd, of selectief?*\n\nLet op: dit type wordt vaak misbruikt — als je een vage bron aanhaalt zonder details, is het al snel een **drogreden** (hoofdstuk D).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="80" y="22" width="140" height="40" rx="8" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="47" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">expert / bron</text>
<line x1="150" y1="62" x2="150" y2="88" stroke="${COLORS.muted}" stroke-width="1" stroke-dasharray="3 2"/>
<text x="150" y="82" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">zegt:</text>
<rect x="80" y="92" width="140" height="40" rx="8" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="117" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">conclusie / standpunt</text>
<text x="150" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">"volgens IPCC stijgt de zeespiegel..."</text>
<text x="150" y="182" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">kritisch: deskundig op dit thema?</text>
</svg>`,
    checks: [
      {
        q: "*Standpunt: \"We moeten meer slapen.\" Argument: \"Onderzoek van het slaaponderzoeksinstituut UMC Utrecht laat zien dat tieners 9 uur nodig hebben.\"* — Welk type?",
        options: [
          "Autoriteitsargument",
          "Kenmerk-argument",
          "Vergelijkingsargument",
          "Oorzaak-gevolg",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een kenmerk-argument benoemt een eigenschap van iets. Hier wordt een onderzoeksinstituut aangehaald — wat is dat?",
          "Een vergelijking trekt parallel tussen twee dingen. Hier wordt een bron aangehaald.",
          "Oorzaak-gevolg legt een directe relatie tussen X en Y. Hier wordt een bron aangehaald die iets stelt.",
        ],
      },
    ],
  },

  // ─── C. Argumentatiestructuur ─────────────────────────
  {
    title: "Enkelvoudige argumentatie",
    explanation: "Naast het *type* argument is ook de **structuur** belangrijk: hoe staan de argumenten in **verhouding** tot het standpunt?\n\n**Structuur 1: enkelvoudige argumentatie**.\n\n**Eén standpunt** + **één argument**. Verder niets. Het simpelste geval.\n\n**Voorbeeld**:\n*\"Je moet je tanden poetsen, want anders krijg je gaatjes.\"*\n• Standpunt: tanden poetsen\n• Argument (1): anders krijg je gaatjes\n\n**Schematisch**:\n```\n  [Standpunt]\n      |\n  [Argument]\n```\n\n**Wanneer voldoende?** Als de lezer het argument **direct accepteert**. Voor controversiële standpunten heb je vaak meer nodig — dan kom je bij meervoudige of onderschikkende argumentatie (volgende stappen).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="80" y="30" width="140" height="40" rx="8" fill="rgba(255,213,79,0.20)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="55" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">standpunt</text>
<line x1="150" y1="70" x2="150" y2="110" stroke="${COLORS.muted}" stroke-width="1.5"/>
<rect x="80" y="115" width="140" height="40" rx="8" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="140" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">argument 1</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">enkelvoudig: 1 standpunt + 1 argument</text>
</svg>`,
    checks: [
      {
        q: "*\"Je moet de regen-jas meenemen, want het gaat regenen.\"* — Welke structuur?",
        options: [
          "Enkelvoudig",
          "Nevenschikkend",
          "Onderschikkend",
          "Geen argumentatie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Nevenschikkend = meerdere onafhankelijke argumenten. Hier staat er maar één.",
          "Onderschikkend = argument dat een ander argument ondersteunt. Er is geen ondersteunende laag hier.",
          "Er is wel argumentatie: standpunt (jas mee) + reden (regen).",
        ],
      },
    ],
  },
  {
    title: "Nevenschikkende argumentatie",
    explanation: "**Structuur 2: nevenschikkende argumentatie** (ook: meervoudige argumentatie).\n\n**Eén standpunt** + **meerdere onafhankelijke argumenten** die elk op zichzelf het standpunt ondersteunen.\n\nElk argument zou ook **alleen** kunnen overtuigen — samen versterken ze elkaar.\n\n**Voorbeeld**:\n*\"De maximumsnelheid moet omlaag naar 100 km/u. Ten eerste vermindert het de CO2-uitstoot. Ten tweede daalt het aantal verkeersdoden. Ten derde is de tijdwinst minimaal.\"*\n\n• Standpunt: max-snelheid omlaag\n• Argument 1: minder CO2\n• Argument 2: minder doden\n• Argument 3: minimale tijdwinst\n\n**Schematisch**:\n```\n     [Standpunt]\n     /    |    \\\n   [A1] [A2] [A3]\n```\n\n**Signaalwoorden**: *ten eerste / ten tweede, daarnaast, bovendien, ook, verder, een ander argument is...*\n\n**Sterk omdat**: als één argument wordt weerlegd, blijven de andere staan.\n\n**Verschil met onderschikkend** (volgende stap): bij nevenschikkend zijn de argumenten **gelijkwaardig**. Bij onderschikkend ondersteunt het ene argument het andere.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="100" y="22" width="100" height="36" rx="8" fill="rgba(255,213,79,0.20)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="45" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">standpunt</text>
<line x1="120" y1="58" x2="60" y2="92" stroke="${COLORS.muted}" stroke-width="1.5"/>
<line x1="150" y1="58" x2="150" y2="92" stroke="${COLORS.muted}" stroke-width="1.5"/>
<line x1="180" y1="58" x2="240" y2="92" stroke="${COLORS.muted}" stroke-width="1.5"/>
<rect x="20" y="95" width="80" height="36" rx="6" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="60" y="118" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">arg 1</text>
<rect x="110" y="95" width="80" height="36" rx="6" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="118" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">arg 2</text>
<rect x="200" y="95" width="80" height="36" rx="6" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="240" y="118" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">arg 3</text>
<text x="150" y="165" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">nevenschikkend: gelijkwaardige argumenten</text>
</svg>`,
    checks: [
      {
        q: "*\"Studenten moeten een gratis OV-kaart krijgen. Dat is goed voor het milieu, het bespaart studenten geld én het zorgt dat ze breder kunnen studeren.\"* — Welke structuur?",
        options: [
          "Nevenschikkend (3 gelijkwaardige argumenten)",
          "Enkelvoudig",
          "Onderschikkend",
          "Geen argumentatie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Enkelvoudig = één argument. Tel de argumenten in de zin.",
          "Onderschikkend = argument ondersteunt een ander argument. Hier staan ze los van elkaar.",
          "Er staat duidelijk argumentatie in: standpunt + drie redenen.",
        ],
      },
    ],
  },
  {
    title: "Onderschikkende argumentatie",
    explanation: "**Structuur 3: onderschikkende argumentatie** (ook: getrapte / dragende argumentatie).\n\nHet **argument** wordt zelf onderbouwd door een **subargument**. Een keten van argumentatie.\n\n**Voorbeeld**:\n*\"De maximumsnelheid moet omlaag naar 100 km/u, want dat verlaagt de CO2-uitstoot. CO2-uitstoot moet omlaag, want het is de belangrijkste oorzaak van klimaatverandering.\"*\n\n• Standpunt: max-snelheid omlaag\n• Argument 1: verlaagt CO2-uitstoot\n  • Subargument 1.1: CO2 is hoofdoorzaak klimaatverandering\n\n**Schematisch**:\n```\n  [Standpunt]\n      |\n  [Argument 1]\n      |\n  [Subargument 1.1]\n```\n\n**Wanneer gebruik je dit?** Als de lezer een argument **niet zomaar accepteert**. Je moet eerst het argument zelf nog overtuigend maken voordat het je standpunt onderbouwt.\n\n**Signaalwoorden voor subargumenten**: *namelijk, immers, want zelf is..., dat komt doordat...*\n\n**Combinaties**: in praktijkteksten zie je vaak een **mix**: enkele hoofdargumenten naast elkaar (nevenschikkend), waarvan elk weer eigen subargumenten heeft (onderschikkend).",
    svg: `<svg viewBox="0 0 300 200">
<rect x="80" y="15" width="140" height="32" rx="8" fill="rgba(255,213,79,0.20)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="36" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">standpunt</text>
<line x1="150" y1="47" x2="150" y2="73" stroke="${COLORS.muted}" stroke-width="1.5"/>
<rect x="80" y="75" width="140" height="32" rx="8" fill="rgba(0,200,83,0.18)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="150" y="96" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">argument 1</text>
<line x1="150" y1="107" x2="150" y2="133" stroke="${COLORS.muted}" stroke-width="1.5"/>
<rect x="80" y="135" width="140" height="32" rx="8" fill="rgba(0,200,83,0.10)" stroke="${COLORS.goodSoft}" stroke-width="2" stroke-dasharray="3 2"/>
<text x="150" y="156" text-anchor="middle" fill="${COLORS.goodSoft}" font-size="11" font-family="Arial" font-weight="bold">subargument 1.1</text>
<text x="150" y="188" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">onderschikkend: keten</text>
</svg>`,
    checks: [
      {
        q: "*\"Vaccinatie moet verplicht zijn, want het beschermt kwetsbare mensen. Kwetsbare mensen lopen extra risico, want hun afweersysteem is zwakker.\"* — Welke structuur?",
        options: [
          "Onderschikkend (subargument ondersteunt argument)",
          "Nevenschikkend",
          "Enkelvoudig",
          "Geen argumentatie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Nevenschikkend = meerdere onafhankelijke argumenten. Hier wordt het argument verder onderbouwd, niet aangevuld met een tweede.",
          "Enkelvoudig = standpunt + één argument zonder verdere onderbouwing. Hier zit nog een laag dieper.",
          "Er is wel degelijk argumentatie: standpunt (verplicht) + argument (bescherming) + subargument (waarom kwetsbaar).",
        ],
      },
    ],
  },

  // ─── D. Drogredenen ───────────────────────────────────
  {
    title: "Wat is een drogreden?",
    explanation: "Een **drogreden** is een argument dat **lijkt** te kloppen maar bij goed kijken **niet houdbaar** is. De redenering klopt niet, of is irrelevant, of misleidt.\n\n**Belangrijk onderscheid**:\n• Een **zwak argument** is wel een argument, maar weinig overtuigend.\n• Een **drogreden** is geen geldig argument — de redenering deugt niet.\n\n**Waarom moet je drogredenen herkennen?**\n• Bij **leesvaardigheid** havo/vwo: examenvraag is vaak \"welke drogreden gebruikt de schrijver?\".\n• Bij **schrijfvaardigheid**: zelf vermijden.\n• Bij **mediawijsheid**: politici, reclame en sociale media zitten er vol mee.\n\n**Vier veelvoorkomende soorten** (komende stappen):\n1. **Persoonlijke aanval** (man-op-de-man, *ad hominem*)\n2. **Vals beroep op autoriteit**\n3. **Overhaaste generalisatie**\n4. **Vals dilemma** (zwart-wit-denken)\n\nEr zijn er nog veel meer (cirkelredenering, hellend vlak, stroman...), maar deze vier zijn voor havo de belangrijkste om te kunnen herkennen op het examen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="50" rx="8" fill="rgba(255,112,67,0.18)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="150" y="48" text-anchor="middle" fill="${COLORS.alt}" font-size="14" font-family="Arial" font-weight="bold">drogreden = onjuist argument</text>
<text x="150" y="64" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">lijkt te kloppen, maar deugt niet</text>
<text x="35" y="100" fill="${COLORS.text}" font-size="12" font-family="Arial">vier types in dit hoofdstuk:</text>
<text x="50" y="120" fill="${COLORS.text}" font-size="11" font-family="Arial">1. persoonlijke aanval (ad hominem)</text>
<text x="50" y="138" fill="${COLORS.text}" font-size="11" font-family="Arial">2. vals beroep op autoriteit</text>
<text x="50" y="156" fill="${COLORS.text}" font-size="11" font-family="Arial">3. overhaaste generalisatie</text>
<text x="50" y="174" fill="${COLORS.text}" font-size="11" font-family="Arial">4. vals dilemma (zwart-wit)</text>
</svg>`,
    checks: [
      {
        q: "Wat is het verschil tussen een drogreden en een zwak argument?",
        options: [
          "Een zwak argument is wél een argument, een drogreden niet (de redenering deugt niet).",
          "Een drogreden is altijd een leugen.",
          "Er is geen verschil.",
          "Een drogreden komt alleen voor in reclames.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een drogreden hoeft geen leugen te zijn — soms gelooft de spreker het zelf. Het gaat om de logica.",
          "Het verschil is wel degelijk relevant. Lees de uitleg: zwak vs onlogisch.",
          "Drogredenen komen overal voor: politiek, sociale media, kranten, schoolopstellen.",
        ],
      },
    ],
  },
  {
    title: "Persoonlijke aanval & vals autoriteitsberoep",
    explanation: "**Drogreden 1: persoonlijke aanval** (ad hominem).\n\nIn plaats van het **argument** te bekritiseren, valt de spreker de **persoon** aan.\n\n**Voorbeelden**:\n• *\"Jij hebt geen verstand van klimaat — jij hebt zelf nog nooit een fiets aangeraakt.\"*\n• *\"Hoe kan zij over onderwijs praten? Ze is vroeger zelf gezakt voor haar vwo-examen!\"*\n\nWat de persoon ooit heeft gedaan, zegt **niets** over de geldigheid van haar argument *nu*. Dat is de drogreden.\n\n**Variant: cirkel-aanval** — \"Natuurlijk vind jij dat, want jij bent X.\" Het standpunt wordt afgewezen om wie iemand *is*, niet om wat hij *zegt*.\n\n---\n\n**Drogreden 2: vals beroep op autoriteit**.\n\nDe spreker beroept zich op een autoriteit die **niet deskundig is** op het betreffende onderwerp, of **niet bestaat / niet specifiek is**.\n\n**Voorbeelden**:\n• *\"Volgens een Nobelprijswinnaar moet de zorgpremie omlaag.\"* — Die Nobelprijs ging over scheikunde, niet zorgbeleid.\n• *\"Wetenschappers zijn het erover eens dat...\"* — Welke wetenschappers? In welk vakgebied?\n• *\"Iedereen weet toch dat...\"* — \"Iedereen\" is geen autoriteit, het is een vaag beroep.\n\n**Verschil met geldig autoriteitsargument** (uit hoofdstuk B): bij een geldig argument is de **bron** specifiek én **deskundig op het onderwerp**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="125" height="80" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="82" y="42" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">ad hominem</text>
<text x="82" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">aanval op persoon</text>
<text x="82" y="78" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"jij hebt geen verstand"</text>
<text x="82" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"jij bent ook X"</text>
<rect x="155" y="20" width="125" height="80" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="217" y="42" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">vals autoriteit</text>
<text x="217" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">verkeerde bron</text>
<text x="217" y="78" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"iedereen weet"</text>
<text x="217" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"experts zeggen"</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">argumenten gaan over de zaak</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">niet over de persoon of vage bron</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">examenstof havo: herkennen!</text>
</svg>`,
    checks: [
      {
        q: "*\"Mevrouw De Vries pleit voor strengere milieuregels, maar zij vliegt zelf elk jaar naar Bali. Daar kun je dus niet serieus naar luisteren.\"* — Welke drogreden?",
        options: [
          "Persoonlijke aanval (ad hominem)",
          "Vals beroep op autoriteit",
          "Overhaaste generalisatie",
          "Vals dilemma",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er wordt geen autoriteit aangehaald. De spreker valt de persoon van mevrouw De Vries aan.",
          "Er wordt geen onterechte conclusie getrokken uit een paar voorbeelden. De drogreden zit in *wie* wordt aangevallen.",
          "Een vals dilemma stelt twee opties tegenover elkaar. Hier wordt iemand persoonlijk gediskwalificeerd.",
        ],
      },
      {
        q: "*\"Mensen denken dat het belangrijk is om gezond te eten.\"* — Welke drogreden?",
        options: [
          "Vals beroep op autoriteit (vage bron: 'mensen')",
          "Overhaaste generalisatie",
          "Persoonlijke aanval",
          "Geen drogreden",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er wordt geen overhaaste conclusie getrokken uit te weinig gevallen. De drogreden zit in de vage bron.",
          "Er wordt niemand persoonlijk aangevallen. De drogreden zit in een vaag autoriteitsberoep.",
          "Er is wel degelijk iets mis: \"mensen\" is geen specifieke, deskundige bron. Dat maakt het een vals autoriteitsberoep.",
        ],
      },
    ],
  },
  {
    title: "Overhaaste generalisatie & vals dilemma",
    explanation: "**Drogreden 3: overhaaste generalisatie**.\n\nDe spreker trekt een **algemene** conclusie op basis van **te weinig** of **niet-representatieve** voorbeelden.\n\n**Voorbeelden**:\n• *\"Mijn buurman zit elke dag op zijn telefoon en haalt slechte cijfers. Smartphones verpesten dus de schoolprestaties van alle jongeren.\"* — Eén buurman = geen bewijs voor alle jongeren.\n• *\"Ik heb twee Italianen ontmoet die altijd te laat waren. Italianen zijn dus onbetrouwbaar.\"* — Twee personen = geen 60 miljoen Italianen.\n• *\"Vorige zomer was extreem warm. Het klimaat is dus écht aan het opwarmen.\"* — Eén zomer is geen klimaattrend.\n\n**Wat moet je hebben om wel een geldige generalisatie te maken?**\n• Een **representatieve** steekproef (genoeg gevallen, en eerlijk verdeeld).\n• **Bevestigend onderzoek** of officiële cijfers (CBS, RIVM).\n\n---\n\n**Drogreden 4: vals dilemma** (zwart-wit-denken).\n\nDe spreker stelt het voor alsof er maar **twee** mogelijkheden zijn — terwijl er in werkelijkheid meer (of betere) opties zijn.\n\n**Voorbeelden**:\n• *\"Of we sluiten onze grenzen volledig, of we worden overspoeld door immigratie.\"* — Alsof er geen tussenwegen of nuances zijn.\n• *\"Je bent voor of tegen de regering.\"* — Alsof een genuanceerde mening niet bestaat.\n• *\"Ofwel ben je vegetariër, ofwel laat je de wereld in de steek.\"*\n\n**Signaal**: *of...of...*, *je bent voor of tegen*, *er zijn twee mogelijkheden*.\n\nEen vals dilemma laat de echte complexiteit van een vraagstuk weg, en dwingt de luisteraar in een onmogelijke keuze.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="20" width="125" height="80" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="82" y="42" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">generalisatie</text>
<text x="82" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">te weinig bewijs</text>
<text x="82" y="78" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"alle jongeren..."</text>
<text x="82" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"die zomer was warm"</text>
<rect x="155" y="20" width="125" height="80" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="217" y="42" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">vals dilemma</text>
<text x="217" y="60" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">slechts 2 opties</text>
<text x="217" y="78" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"of A, of B"</text>
<text x="217" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">"voor of tegen"</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">conclusie zonder genoeg bewijs</text>
<text x="150" y="155" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">of fake-keuze tussen 2 opties</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">altijd vragen: zijn er andere opties?</text>
</svg>`,
    checks: [
      {
        q: "*\"Of je gaat studeren, of je belandt in de bijstand.\"* — Welke drogreden?",
        options: [
          "Vals dilemma",
          "Overhaaste generalisatie",
          "Persoonlijke aanval",
          "Vals beroep op autoriteit",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er wordt geen conclusie getrokken uit te weinig voorbeelden. Er worden twee uitersten tegenover elkaar gezet.",
          "Niemand wordt persoonlijk aangevallen. Het gaat om de manier waarop een keuze wordt voorgesteld.",
          "Er wordt geen autoriteit aangehaald. De drogreden zit in de structuur \"of A, of B\".",
        ],
      },
      {
        q: "*\"Ik kreeg griep nadat ik de griepprik had gehad. Die prik veroorzaakt dus griep.\"* — Welke drogreden?",
        options: [
          "Overhaaste generalisatie (één geval, geen oorzakelijk verband)",
          "Vals dilemma",
          "Vals beroep op autoriteit",
          "Persoonlijke aanval",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er worden geen twee opties tegenover elkaar gezet. Er wordt een algemene conclusie getrokken uit één geval.",
          "Er wordt geen bron aangehaald. De drogreden zit in de stap van één geval naar een algemene conclusie.",
          "Er wordt niemand aangevallen. De drogreden zit in de logica: één persoonlijke ervaring → algemene uitspraak.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Eindopdracht — alles toepassen",
    explanation: "Vier vragen op examenniveau havo 4. Alles wat je geleerd hebt komt langs: standpunt herkennen, argumenten herkennen, schema bepalen, drogreden herkennen.\n\n**Tip voor het examen**:\n1. **Lees eerst de vraag**, dan de tekst — dan weet je waar je op moet letten.\n2. **Streep signaalwoorden** aan: *want, omdat, doordat, ten eerste, daarnaast, volgens...*\n3. Bij een argumentatieschema-vraag: vraag jezelf af *welk type onderbouwing dit is* (voor/nadeel, oorzaak, kenmerk, vergelijking, autoriteit).\n4. Bij een drogreden-vraag: vraag jezelf af *waar de redenering rammelt* (persoon ipv argument, te weinig bewijs, fake keuze, vage bron).\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">argumentatie</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde havo 4</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">examenstof leesvaardigheid 🏆</text>
</svg>`,
    checks: [
      {
        q: "*\"Het is bewezen dat een latere starttijd op school beter is voor tieners. De Nederlandse Vereniging voor Slaaponderzoek concludeerde in 2024 dat tieners een biologische klok hebben die later opstaat dan volwassenen.\"* — Welk type argument?",
        options: [
          "Autoriteitsargument",
          "Vergelijkingsargument",
          "Oorzaak-gevolg",
          "Vals beroep op autoriteit",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er wordt geen vergelijking met iets anders gemaakt. Wel wordt een specifieke bron aangehaald.",
          "Oorzaak-gevolg verbindt twee dingen direct. Hier wordt een onderzoeksuitspraak aangehaald — wat is dat?",
          "De bron is specifiek (Nederlandse Vereniging voor Slaaponderzoek) en deskundig op het onderwerp. Dat maakt het een geldig autoriteitsargument, geen drogreden.",
        ],
      },
      {
        q: "*\"Kunst-onderwijs moet behouden blijven. Het stimuleert creativiteit, het bevordert culturele vorming, én het biedt scholieren een uitlaatklep voor stress.\"* — Welke argumentatiestructuur?",
        options: [
          "Nevenschikkend (drie gelijkwaardige argumenten)",
          "Onderschikkend",
          "Enkelvoudig",
          "Geen argumentatie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Onderschikkend = subargument ondersteunt argument. Hier staan drie argumenten naast elkaar — niet boven/onder elkaar.",
          "Enkelvoudig = één argument. Tel de redenen die genoemd worden.",
          "Het standpunt is duidelijk (kunst-onderwijs behouden), met drie redenen (creativiteit, vorming, stress). Dat is wel argumentatie.",
        ],
      },
      {
        q: "*\"Mensen die voor windmolens zijn, hebben er natuurlijk zelf geen in hun achtertuin staan. Anders zouden ze wel anders piepen.\"* — Welke drogreden?",
        options: [
          "Persoonlijke aanval (ad hominem)",
          "Overhaaste generalisatie",
          "Vals dilemma",
          "Geen drogreden — geldig argument",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Er worden geen voorbeelden gegeven waaruit overhaast wordt geconcludeerd. De drogreden zit in de manier waarop tegenstanders worden afgeschilderd.",
          "Er worden geen twee opties tegenover elkaar gezet. De aanval gaat over wie de tegenstanders zíjn.",
          "Het is wel degelijk een drogreden: het argument *voor* windmolens wordt niet beoordeeld, maar de motieven van voorstanders worden gediskwalificeerd.",
        ],
      },
      {
        q: "*\"Het schoolbestuur moet meer geld vrijmaken voor schoolboeken. Dure boeken zijn een drempel voor kinderen uit gezinnen met weinig geld, en die drempel moet weg om gelijke kansen te garanderen.\"* — Welke argumentatiestructuur?",
        options: [
          "Onderschikkend (subargument ondersteunt het hoofdargument)",
          "Nevenschikkend",
          "Enkelvoudig",
          "Geen argumentatie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Nevenschikkend = meerdere onafhankelijke argumenten. Hier staat één hoofdargument, dat verder wordt onderbouwd.",
          "Enkelvoudig = standpunt + één argument zonder verdere onderbouwing. Hier wordt het argument *waarom dat een drempel is* nog uitgelegd.",
          "Er is duidelijk argumentatie: standpunt (meer geld) → argument (drempel) → subargument (gelijke kansen).",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const argumentatieleer = {
  id: "argumentatieleer",
  title: "Argumentatieleer",
  emoji: "💬",
  level: "havo4-5",
  subject: "taal",
  intro:
    "Examenstof havo 4-5 leesvaardigheid: standpunt en argumenten herkennen, vijf argumentatieschema's toepassen, structuur van argumentatie analyseren, en de vier veelvoorkomende drogredenen herkennen. Met eigen oefenvragen — geen tekst uit een specifieke methode.",
  triggerKeywords: [
    "standpunt", "argument", "argumentatie", "argumentatieschema",
    "drogreden", "drogredenen", "ad hominem", "vals dilemma",
    "autoriteit", "kenmerk", "vergelijking", "oorzaak gevolg",
    "nevenschikkend", "onderschikkend", "enkelvoudig",
    "examen leesvaardigheid", "betoog", "beschouwing",
  ],
  chapters,
  steps,
};

export default argumentatieleer;

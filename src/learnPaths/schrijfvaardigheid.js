// Leerpad: Schrijfvaardigheid — Nederlands havo 4
// 14 stappen in 5 hoofdstukken (A t/m E).
// Niveau: havo 4-5, examenstof centraal eindexamen schrijfvaardigheid.
// Counterpart van argumentatieleer (= leesvaardigheid). Tone: zakelijk, met
// concrete voorbeeldzinnen en multi-choice checks die schrijfprincipes toetsen.

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
  paars: "#a060ff",
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
};

const stepEmojis = [
  "📝", "🎯", "👥",                // A. Drie tekstsoorten
  "📥", "🧱", "📤",                // B. Bouwstenen
  "⚖️", "🔄", "ℹ️",                // C. Per tekstsoort
  "🔗", "🎨", "✂️",                 // D. Verfijning
  "🚀", "🏆",                       // E. Eindopdracht
];

const chapters = [
  { letter: "A", title: "Drie tekstsoorten", emoji: "📝", from: 0, to: 2 },
  { letter: "B", title: "Bouwstenen van een tekst", emoji: "🧱", from: 3, to: 5 },
  { letter: "C", title: "Per tekstsoort uitgewerkt", emoji: "⚖️", from: 6, to: 8 },
  { letter: "D", title: "Verfijning", emoji: "🎨", from: 9, to: 11 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 12, to: 13 },
];

const steps = [
  // ─── A. Drie tekstsoorten ─────────────────────────────
  {
    title: "Drie tekstsoorten — verschillen in doel",
    explanation: "Op het examen Nederlands moet je kunnen herkennen én zelf schrijven in **drie tekstsoorten**:\n\n**1. Betoog** — *je probeert de lezer te overtuigen*.\n• De schrijver heeft een duidelijk **standpunt** en geeft argumenten.\n• Subjectief, doel = beïnvloeden.\n• Voorbeeld: *\"De maximumsnelheid moet omlaag naar 100 km/u.\"*\n\n**2. Beschouwing** — *je belicht een onderwerp van meerdere kanten*.\n• Verschillende standpunten naast elkaar gezet, vaak zonder zelf positie te kiezen.\n• Wel-niet-misschien-toon. Doel = lezer informeren én zelf laten oordelen.\n• Voorbeeld: *\"Voor en tegen van een 100-km-snelheid: er valt iets te zeggen voor beide kanten.\"*\n\n**3. Uiteenzetting** — *je legt een onderwerp uit*.\n• Neutrale, informatieve toon. Geen mening.\n• Doel = uitleggen hoe iets werkt of in elkaar zit.\n• Voorbeeld: *\"Hoe werkt een hybride-motor? Stap voor stap.\"*\n\n**Vuistregel**: kijk naar het **doel** van de schrijver:\n• Overtuigen → betoog\n• Afwegen → beschouwing\n• Uitleggen → uiteenzetting",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="80" height="80" rx="8" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="2"/>
<text x="60" y="48" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">betoog</text>
<text x="60" y="68" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial">⚖️</text>
<text x="60" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">overtuigen</text>
<rect x="110" y="22" width="80" height="80" rx="8" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="2"/>
<text x="150" y="48" text-anchor="middle" fill="${COLORS.paars}" font-size="13" font-family="Arial" font-weight="bold">beschouwing</text>
<text x="150" y="68" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial">🔄</text>
<text x="150" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">afwegen</text>
<rect x="200" y="22" width="80" height="80" rx="8" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="240" y="48" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">uiteenzetting</text>
<text x="240" y="68" text-anchor="middle" fill="${COLORS.text}" font-size="22" font-family="Arial">ℹ️</text>
<text x="240" y="92" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">uitleggen</text>
<text x="150" y="135" text-anchor="middle" fill="${COLORS.text}" font-size="12" font-family="Arial">vuistregel: kijk naar het doel</text>
<text x="150" y="158" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial">subjectief vs neutraal vs informatief</text>
<text x="150" y="182" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-style="italic">examenvraag: welke tekstsoort?</text>
</svg>`,
    checks: [
      {
        q: "*Een tekst legt stap voor stap uit hoe een hybride-motor werkt, zonder oordeel of voorkeur.* — Welke tekstsoort?",
        options: ["Uiteenzetting", "Betoog", "Beschouwing", "Reportage"],
        answer: 0,
        wrongHints: [
          null,
          "Een betoog probeert te overtuigen. Hier is geen mening of voorkeur.",
          "Een beschouwing zet meerdere standpunten naast elkaar. Hier wordt iets uitgelegd, niet afgewogen.",
          "Reportage is een journalistiek genre. Bij examenstof gaat het om de drie schrijfsoorten — welke past bij neutraal uitleggen?",
        ],
      },
      {
        q: "*Een tekst noemt drie standpunten over werken-tot-67, weegt ze af, en eindigt zonder eigen positie.* — Welke tekstsoort?",
        options: ["Beschouwing", "Betoog", "Uiteenzetting", "Argumentatie"],
        answer: 0,
        wrongHints: [
          null,
          "Een betoog kiest één standpunt en verdedigt dat. Hier wordt afgewogen zonder positie.",
          "Een uiteenzetting legt iets uit zonder mening. Hier worden wel meningen vergeleken.",
          "Argumentatie is een onderdeel binnen een betoog of beschouwing — niet een aparte tekstsoort op het examen.",
        ],
      },
    ],
  },
  {
    title: "Welke tekstsoort kies je?",
    explanation: "Bij het examen krijg je vaak een **schrijfopdracht** waarin de tekstsoort niet expliciet staat. Je moet 'm afleiden uit het **doel** van de opdracht en uit signaalwoorden in de opdrachttekst.\n\n**Signaalwoorden in opdrachten**:\n\n**Betoog** (je moet overtuigen):\n• *\"Pleit voor of tegen...\"*\n• *\"Schrijf een artikel waarin je verdedigt dat...\"*\n• *\"Geef je mening en onderbouw die.\"*\n\n**Beschouwing** (je moet afwegen):\n• *\"Belicht het onderwerp van meerdere kanten.\"*\n• *\"Bespreek voor- en nadelen.\"*\n• *\"Laat verschillende perspectieven zien.\"*\n\n**Uiteenzetting** (je moet uitleggen):\n• *\"Leg uit hoe... werkt.\"*\n• *\"Beschrijf wat... inhoudt.\"*\n• *\"Geef een overzicht van...\"*\n\n**Verkeerde tekstsoort = directe puntenaftrek**. Lees de opdracht twee keer voor je begint.\n\n**Combinaties komen voor**: een uiteenzetting kan eindigen met een mini-betoog (\"Persoonlijk vind ik...\") als de opdracht dat vraagt — maar de **hoofdtoon** moet kloppen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">signaalwoorden in opdracht</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="76" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">betoog:</text>
<text x="105" y="76" fill="${COLORS.text}" font-size="11" font-family="Arial">pleit, verdedig, mening</text>
<text x="35" y="105" fill="${COLORS.paars}" font-size="11" font-family="Arial" font-weight="bold">beschouwing:</text>
<text x="125" y="105" fill="${COLORS.text}" font-size="11" font-family="Arial">belicht, voor/nadelen</text>
<text x="35" y="134" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">uiteenzetting:</text>
<text x="125" y="134" fill="${COLORS.text}" font-size="11" font-family="Arial">leg uit, beschrijf, overzicht</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">verkeerde tekstsoort = directe puntenaftrek</text>
</svg>`,
    checks: [
      {
        q: "*Opdracht: \"Pleit in een ingezonden brief vóór of tegen de invoering van een suikertaks.\"* — Welke tekstsoort?",
        options: ["Betoog", "Beschouwing", "Uiteenzetting", "Reactie"],
        answer: 0,
        wrongHints: [
          null,
          "Een beschouwing weegt af zonder positie. Hier vraagt de opdracht juist om een keuze (vóór of tegen).",
          "Een uiteenzetting legt uit zonder mening. Hier moet je een mening kiezen en verdedigen.",
          "\"Reactie\" is geen aparte examentekstsoort. Welk woord in de opdracht (\"pleit\") wijst op de juiste keuze?",
        ],
      },
    ],
  },
  {
    title: "Doelgroep en toon",
    explanation: "Voordat je begint te schrijven moet je weten **voor wie** je schrijft. Doelgroep bepaalt:\n• **Woordkeus** (formeel vs informeel)\n• **Voorkennis** die je mag aannemen\n• **Voorbeelden** die aansluiten\n• **Toon** (zakelijk, persoonlijk, geëngageerd)\n\n**Voorbeelden** van doelgroep + bijpassende toon:\n• Lezers van *NRC* (volwassenen, hoog opgeleid) → formele woordkeus, geen jongerentaal, mag complexere zinsbouw, voorbeelden uit politiek/wetenschap.\n• Klasgenoten in een schoolblad → informeler, mag spreektaal-elementen, voorbeelden uit hun eigen leefwereld (gaming, sport, school).\n• Ouderen-magazine → langzamer tempo, geen sms-taal, voorbeelden uit hun generatie.\n\n**Te vermijden bij elke doelgroep**:\n• Spreektaal in een formeel betoog (\"super gaaf\", \"echt waar\")\n• Vakjargon zonder uitleg (\"epistemologie\", \"hegemoniaal\")\n• Onnodig dure woorden (\"bewerkstelligen\" wanneer \"doen\" volstaat)\n\n**Tip**: schrijf één oefenzin in twee stijlen om het verschil te voelen.\n• Formeel: *\"De maatregel zou tot een aanzienlijke daling van de verkeersongevallen kunnen leiden.\"*\n• Informeel: *\"Met deze regel zouden er een stuk minder ongelukken gebeuren.\"*",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">doelgroep bepaalt:</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="75" fill="${COLORS.text}" font-size="11" font-family="Arial">• woordkeus (formeel ↔ informeel)</text>
<text x="35" y="95" fill="${COLORS.text}" font-size="11" font-family="Arial">• voorkennis (mag je veel aannemen?)</text>
<text x="35" y="115" fill="${COLORS.text}" font-size="11" font-family="Arial">• voorbeelden (uit hun leefwereld)</text>
<text x="35" y="135" fill="${COLORS.text}" font-size="11" font-family="Arial">• toon (zakelijk, persoonlijk, geëngageerd)</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vermijd: spreektaal in formele tekst, jargon zonder uitleg</text>
</svg>`,
    checks: [
      {
        q: "*Doelgroep: lezers van een serieuze landelijke krant. Welke zinsformulering past het best?*",
        options: [
          "De maatregel zou de verkeersveiligheid aanzienlijk verbeteren.",
          "Met dat plan zou het super veiliger worden op de weg, echt waar.",
          "Yo, dit plan = veiliger rijden voor iedereen.",
          "Iedereen zou superblij zijn met deze coole nieuwe regel.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Spreektaal-elementen (\"super veiliger\", \"echt waar\") horen niet in een formele krant.",
          "Sms-stijl past niet in een landelijke krant. Welke optie heeft een neutrale, formele toon?",
          "\"Coole\", \"superblij\" is informeel. Een landelijke krant verwacht een zakelijker register.",
        ],
      },
    ],
  },

  // ─── B. Bouwstenen ────────────────────────────────────
  {
    title: "Inleiding — drie taken",
    explanation: "Een goede **inleiding** doet drie dingen, in deze volgorde:\n\n**1. Aanleiding** — *waarom schrijf je nu over dit onderwerp?*\nVerwijs naar een actuele gebeurtenis, een recent debat, een nieuw onderzoek. Maakt je tekst relevant.\n\n**2. Onderwerp + vraagstelling** — *waar gaat dit precies over?*\nKom snel ter zake. Vermeld het onderwerp en — bij een betoog/beschouwing — de hoofdvraag of het standpunt.\n\n**3. Opbouw aankondigen** — *wat kan de lezer verwachten?*\nKort: \"Ik zal eerst X bespreken, dan Y, en eindig met een conclusie/advies.\"\n\n**Voorbeeld-inleiding (betoog over 100 km/u)**:\n*\"Sinds het kabinet vorig jaar de maximumsnelheid op snelwegen verlaagde, woedt er een felle discussie over deze maatregel. (= aanleiding) Ondanks de kritiek meen ik dat de 100-km-grens definitief moet blijven. (= standpunt) In dit betoog bespreek ik eerst de milieuargumenten, vervolgens de verkeersveiligheid, en sluit ik af met een advies aan de regering. (= opbouw)\"*\n\n**Veelgemaakte fout**: te veel achtergrond geven in de inleiding. Houd het op 4-6 zinnen. Diepgang komt in het middenstuk.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">inleiding — 3 taken</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="78" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">1. aanleiding</text>
<text x="135" y="78" fill="${COLORS.muted}" font-size="11" font-family="Arial">(waarom nu?)</text>
<text x="35" y="105" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">2. onderwerp + vraag</text>
<text x="170" y="105" fill="${COLORS.muted}" font-size="11" font-family="Arial">(waar over?)</text>
<text x="35" y="132" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">3. opbouw</text>
<text x="135" y="132" fill="${COLORS.muted}" font-size="11" font-family="Arial">(wat komt eraan?)</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">4-6 zinnen — diepgang in middenstuk</text>
</svg>`,
    checks: [
      {
        q: "*Welk element ontbreekt in deze inleiding?*  \"Sociale media zijn niet meer weg te denken uit het leven van jongeren. In dit artikel bespreek ik eerst de risico's en daarna de voordelen.\"",
        options: [
          "Aanleiding (waarom schrijf je hier nu over?)",
          "Onderwerp",
          "Opbouw",
          "Slot",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Het onderwerp staat er wel: sociale media + jongeren.",
          "De opbouw wordt aangekondigd: eerst risico's, dan voordelen.",
          "Een slot hoort niet in de inleiding — dat staat aan het eind van de tekst.",
        ],
      },
    ],
  },
  {
    title: "Alinea-opbouw — topic sentence eerst",
    explanation: "Een **alinea** is een blok zinnen dat **één gedachte** behandelt. Goede alinea's volgen meestal dit patroon:\n\n**1. Topic sentence** — eerste zin vat de kern van de alinea samen.\n**2. Uitwerking** — toelichting, voorbeelden, cijfers, citaten.\n**3. (Optioneel) Mini-conclusie** — laatste zin koppelt terug aan de hoofdvraag.\n\n**Voorbeeld**:\n> *(topic)* **Een lagere maximumsnelheid bespaart aanzienlijk op CO2-uitstoot.** *(uitwerking)* Onderzoek van het CBS toont dat een verlaging van 130 naar 100 km/u de uitstoot per voertuig met circa 15% reduceert. *(uitwerking)* Voor heel Nederland betekent dit jaarlijks ruim 1,5 miljoen ton minder CO2. *(mini-conclusie)* Dat alleen al rechtvaardigt de maatregel.\n\n**Tip**: lees alleen de **eerste zin** van elke alinea van je tekst. Vormen die samen een logische redeneerlijn? Zo ja → goede structuur.\n\n**Lengte**: ~3-7 zinnen per alinea. Te kort = stiltes. Te lang = lezer raakt de draad kwijt.\n\n**Veelgemaakte fout**: alinea begint met een vraag of voorbeeld in plaats van een claim. Werkt soms voor variatie, maar niet als standaardpatroon — examen-correctoren waarderen de **topic sentence eerst**.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">alinea-structuur</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="230" height="28" rx="6" fill="rgba(255,213,79,0.18)" stroke="${COLORS.warm}" stroke-width="2"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">topic sentence (kern)</text>
<line x1="150" y1="92" x2="150" y2="106" stroke="${COLORS.muted}" stroke-width="1"/>
<rect x="35" y="108" width="230" height="50" rx="6" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="150" y="130" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">uitwerking</text>
<text x="150" y="146" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">cijfers, voorbeelden, citaten</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">~3-7 zinnen · 1 gedachte</text>
</svg>`,
    checks: [
      {
        q: "*Welke zin past het best als topic sentence van een alinea over jongeren en slaaptekort?*",
        options: [
          "Veel jongeren krijgen structureel te weinig slaap, met merkbare gevolgen voor hun schoolprestaties.",
          "Mijn neefje gaat altijd om half twee naar bed.",
          "Slapen is leuk.",
          "Hoeveel uur slaap heb je eigenlijk nodig?",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een individueel anekdote werkt als voorbeeld in de uitwerking, maar niet als topic sentence. Wat is de kern-claim?",
          "Te kort en te vrijblijvend — geen claim die de lezer ankert in de alinea-thema.",
          "Een vraag kan een aandachttrekker zijn maar geen topic sentence. Welke optie geeft de hoofdgedachte van de alinea?",
        ],
      },
    ],
  },
  {
    title: "Slot — samenvatten en vooruitkijken",
    explanation: "Een goed **slot** doet drie dingen:\n\n**1. Vat de hoofdpunten kort samen** (zonder ze letterlijk te herhalen).\n**2. Trek een conclusie** of geef een advies/oproep.\n**3. (Optioneel) Open een bredere blik** — een toekomstverwachting, een vervolgvraag.\n\n**Voorbeeld-slot (betoog 100 km/u)**:\n*\"De milieueffecten zijn onmiskenbaar, het aantal verkeersdoden daalt aantoonbaar, en de tijdwinst door 130 km/u is verwaarloosbaar. (= samenvatting) De 100-km-grens moet daarom definitief blijven. (= advies) Pas wanneer er volwaardige duurzame alternatieven zijn — een fijnmazig openbaar vervoer, betaalbare elektrische auto's — kan deze maatregel heroverwogen worden. (= bredere blik)\"*\n\n**Per tekstsoort**:\n• **Betoog**: slot is een krachtig advies of oproep.\n• **Beschouwing**: slot weegt af, eindigt met een open vraag of een persoonlijke noot.\n• **Uiteenzetting**: slot vat de uitleg samen, verwijst eventueel naar verder onderzoek.\n\n**Veelgemaakte fout**:\n• Nieuw argument introduceren in het slot (hoort in middenstuk).\n• Letterlijk herhalen wat al stond (lezer voelt zich dom geadresseerd).\n• Slappe zinnen als \"Al met al is dit een interessant onderwerp.\" — zegt niets.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">slot — 3 elementen</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="78" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">1. samenvatting</text>
<text x="155" y="78" fill="${COLORS.muted}" font-size="11" font-family="Arial">(kort, niet herhalen)</text>
<text x="35" y="105" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">2. advies / conclusie</text>
<text x="180" y="105" fill="${COLORS.muted}" font-size="11" font-family="Arial">(krachtig)</text>
<text x="35" y="132" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">3. bredere blik</text>
<text x="155" y="132" fill="${COLORS.muted}" font-size="11" font-family="Arial">(optioneel)</text>
<text x="150" y="172" text-anchor="middle" fill="${COLORS.alt}" font-size="10" font-family="Arial" font-style="italic">geen nieuwe argumenten in het slot!</text>
</svg>`,
    checks: [
      {
        q: "Welke fout zit in dit slot? — *\"Concluderend: er is veel te zeggen voor lagere snelheden. Daarnaast is uit recent onderzoek gebleken dat 80 km/u nog veiliger zou zijn dan 100 km/u, wat de maatregel verder rechtvaardigt.\"*",
        options: [
          "Er wordt een nieuw argument geïntroduceerd dat in het middenstuk hoort.",
          "Het slot is te kort.",
          "Er staat geen advies in.",
          "De toon is te informeel.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "De lengte is acceptabel. De fout zit niet in lengte maar in *wat* er staat.",
          "Er staat wél een advies (\"de maatregel rechtvaardigen\"). Het probleem zit ergens anders.",
          "De toon is gewoon zakelijk. Zoek naar wat er in een slot *niet* hoort.",
        ],
      },
    ],
  },

  // ─── C. Per tekstsoort uitgewerkt ─────────────────────
  {
    title: "Betoog — opbouw met argumenten",
    explanation: "Een **betoog** heeft een vaste structuur die je examen-correctoren herkennen:\n\n**Inleiding**\n• Aanleiding\n• **Standpunt** (één duidelijke zin)\n• Aankondiging argumenten\n\n**Middenstuk**\n• 2-4 alinea's, één argument per alinea\n• **Sterkste argument als laatste** (lezer onthoudt het beste het laatste)\n• Optioneel: één alinea waarin je een **tegenargument** noemt en weerlegt\n\n**Slot**\n• Samenvatting + krachtig advies of oproep\n\n**Tip — argumentvolgorde**:\n• Eerste argument: redelijk sterk, om snel grip te krijgen.\n• Middelste argumenten: ondersteunend.\n• Laatste argument: jouw allerbeste — laat het knallen.\n\n**Tegenargument weerleggen** (= sterk):\n*\"Tegenstanders stellen dat een 100-km-snelheid de economie schaadt door langere reistijden voor vrachtverkeer. Dit argument gaat echter niet op: vrachtwagens reden al voor de invoering met maximaal 80 km/u. Voor het vrachtvervoer verandert er dus niets.\"*\n\nDoor zelf een tegenargument te noemen toon je dat je het hele debat kent — én neem je de wind uit de zeilen van een mogelijke criticus.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.alt}" font-size="13" font-family="Arial" font-weight="bold">betoog — structuur</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="230" height="22" rx="4" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">inleiding + standpunt</text>
<rect x="35" y="90" width="68" height="22" rx="4" fill="rgba(0,200,83,0.12)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="69" y="106" text-anchor="middle" fill="${COLORS.good}" font-size="10" font-family="Arial">arg 1</text>
<rect x="116" y="90" width="68" height="22" rx="4" fill="rgba(0,200,83,0.12)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="150" y="106" text-anchor="middle" fill="${COLORS.good}" font-size="10" font-family="Arial">arg 2</text>
<rect x="197" y="90" width="68" height="22" rx="4" fill="rgba(0,200,83,0.20)" stroke="${COLORS.good}" stroke-width="2"/>
<text x="231" y="106" text-anchor="middle" fill="${COLORS.good}" font-size="10" font-family="Arial" font-weight="bold">arg 3 ★</text>
<rect x="35" y="120" width="230" height="22" rx="4" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="136" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial">weerlegging tegenargument</text>
<rect x="35" y="148" width="230" height="22" rx="4" fill="rgba(255,112,67,0.15)" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="150" y="164" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">slot + advies</text>
<text x="150" y="186" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">★ sterkste argument als laatste</text>
</svg>`,
    checks: [
      {
        q: "*Je schrijft een betoog met drie argumenten. In welke volgorde plaats je ze?*",
        options: [
          "Redelijk sterk → ondersteunend → allersterkste",
          "Allersterkste → ondersteunend → zwakste",
          "Willekeurig — volgorde maakt niet uit",
          "Eerst alle pro-argumenten, dan alle contra",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Het sterkste argument helemaal vooraan zetten betekent dat het slot anti-climactisch wordt. Wat blijft het meest hangen bij de lezer?",
          "Volgorde maakt wel degelijk uit voor overtuigingskracht.  Welke positie krijgt het beste argument?",
          "Een betoog verdedigt één standpunt — pro/contra-structuur is meer iets voor een beschouwing.",
        ],
      },
    ],
  },
  {
    title: "Beschouwing — perspectieven afwegen",
    explanation: "Een **beschouwing** zet **meerdere standpunten** naast elkaar zonder zelf direct positie te kiezen. De lezer moet uiteindelijk zelf oordelen.\n\n**Vaste opbouw**:\n\n**Inleiding**\n• Aanleiding\n• Het thema + de centrale **vraag** (geen standpunt)\n• Aankondiging: \"Ik bekijk dit van drie kanten...\"\n\n**Middenstuk**\n• Per alinea één perspectief / standpunt\n• Wees **eerlijk** — geef ook de sterkste kant van elk standpunt\n• Mag uitlopen met: \"Voor X pleit dat...\", \"Anderzijds zeggen voorstanders van Y dat...\"\n\n**Slot**\n• Samenvatting van de spanningen tussen perspectieven\n• Optioneel: een persoonlijke nuance (\"Persoonlijk leun ik naar...\") — maar pas in laatste alinea, voorzichtig\n\n**Voorbeeld-zinsformuleringen**:\n• *\"Vanuit milieu-oogpunt is de maatregel verdedigbaar...\"*\n• *\"Voor de economie kan het echter problematisch uitpakken...\"*\n• *\"Wie naar de cijfers kijkt, ziet dat beide kanten een punt hebben.\"*\n\n**Verschil met een betoog**:\n• Betoog: één standpunt, alle argumenten ter ondersteuning.\n• Beschouwing: meerdere standpunten, evenwichtige weergave.\n\n**Veelgemaakte fout**: per ongeluk een betoog schrijven onder het mom van beschouwing — verraden door een te eenzijdige toon. Lees je tekst kritisch terug: behandel je beide kanten **even diepgaand**?",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.paars}" font-size="13" font-family="Arial" font-weight="bold">beschouwing — afweging</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="230" height="22" rx="4" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="1.5"/>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.paars}" font-size="11" font-family="Arial" font-weight="bold">inleiding + vraag</text>
<rect x="35" y="92" width="105" height="36" rx="4" fill="rgba(0,200,83,0.12)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="87" y="113" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">perspectief A</text>
<rect x="160" y="92" width="105" height="36" rx="4" fill="rgba(255,112,67,0.12)" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="212" y="113" text-anchor="middle" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">perspectief B</text>
<rect x="35" y="135" width="230" height="22" rx="4" fill="rgba(160,96,255,0.15)" stroke="${COLORS.paars}" stroke-width="1.5"/>
<text x="150" y="151" text-anchor="middle" fill="${COLORS.paars}" font-size="11" font-family="Arial" font-weight="bold">slot — afweging</text>
<text x="150" y="178" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">behandel beide kanten even diepgaand</text>
</svg>`,
    checks: [
      {
        q: "*Een leerling schrijft een beschouwing over werken-tot-67. Welke openingszin van een alinea past het best?*",
        options: [
          "Wie kijkt naar het standpunt van vakbonden, ziet dat zij vooral wijzen op de fysieke belasting van zware beroepen.",
          "Werken tot 67 is gewoon belachelijk en moet onmiddellijk worden afgeschaft.",
          "Daarom is werken tot 67 de enige juiste oplossing.",
          "Het is duidelijk dat alleen aso's nog tegen deze maatregel zijn.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Een beschouwing kiest geen kant. Deze zin is veel te uitgesproken — past bij een betoog, niet bij een beschouwing.",
          "\"De enige juiste oplossing\" is een standpunt-conclusie. In een beschouwing weeg je af, je kiest niet.",
          "Naast dat de toon respectloos is: dit is een eenzijdige aanval — past niet bij een neutrale afwegende toon.",
        ],
      },
    ],
  },
  {
    title: "Uiteenzetting — uitleggen, geen mening",
    explanation: "Een **uiteenzetting** legt een onderwerp neutraal uit. Geen mening, geen overtuigen — alleen helder informeren.\n\n**Vaste opbouw**:\n\n**Inleiding**\n• Wat is het onderwerp?\n• Waarom is het relevant om te weten? (= aanleiding, kort)\n• Wat ga je uitleggen? (= structuur)\n\n**Middenstuk**\n• Logische volgorde: chronologisch (proces stap voor stap), thematisch (per onderdeel), of oorzaak-gevolg.\n• Voorbeelden om abstractie concreet te maken.\n• Vakwoorden uitleggen bij eerste gebruik.\n\n**Slot**\n• Samenvatting van de hoofdpunten\n• Optioneel: een vooruitblik (\"Onderzoek hiernaar gaat momenteel in de richting van...\")\n\n**Voorbeeld-onderwerpen**:\n• *\"Hoe werkt een hybride-motor?\"* (chronologisch)\n• *\"Wat is een ecosysteem?\"* (thematisch: organismes, omgeving, balans)\n• *\"Waarom stijgt de zeespiegel?\"* (oorzaak-gevolg)\n\n**Toon**:\n• Zakelijk, bijna neutraal-leerboekachtig.\n• Geen \"ik vind\" of \"helaas\" of \"gelukkig\".\n• Vermijd retorische vragen zoals \"Maar wist je dat...?\" — past beter in een journalistiek artikel.\n\n**Truc**: schrijf alsof je een Wikipedia-artikel maakt. Helder, feitelijk, hiërarchisch.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.good}" font-size="13" font-family="Arial" font-weight="bold">uiteenzetting — neutraal</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="230" height="22" rx="4" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="150" y="78" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">wat + waarom relevant</text>
<rect x="35" y="92" width="230" height="48" rx="4" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="150" y="113" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">uitleg in logische volgorde</text>
<text x="150" y="130" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial">chronologisch · thematisch · oorzaak-gevolg</text>
<rect x="35" y="146" width="230" height="22" rx="4" fill="rgba(0,200,83,0.15)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="150" y="162" text-anchor="middle" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">samenvatting</text>
<text x="150" y="186" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial" font-style="italic">toon: Wikipedia-achtig — geen "ik vind"</text>
</svg>`,
    checks: [
      {
        q: "*In een uiteenzetting over hoe vaccinatie werkt, staat: \"Vaccinaties zijn echt geweldig en iedereen zou er een moeten halen.\" — Wat is de fout?*",
        options: [
          "Een uiteenzetting hoort neutraal te zijn — geen mening of oproep.",
          "De zin is grammaticaal incorrect.",
          "De zin is te kort.",
          "Er ontbreekt een vakterm.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Grammaticaal klopt de zin gewoon. De fout zit in iets anders.",
          "Niet de lengte is het probleem. Een uiteenzetting heeft een specifieke toon — denk daaraan.",
          "Vaktermen zijn welkom in een uiteenzetting, maar ontbreken hier is niet de hoofdfout. De fout is principieler.",
        ],
      },
    ],
  },

  // ─── D. Verfijning ────────────────────────────────────
  {
    title: "Verbindingswoorden — alinea's aan elkaar lijmen",
    explanation: "**Verbindingswoorden** (ook: signaalwoorden, connectives) maken het verband tussen zinnen en alinea's expliciet. Goede verbindingen = vloeiende tekst.\n\n**Per relatie de juiste woorden**:\n\n**Toevoegen** (extra punt erbij):\n*ook, daarnaast, bovendien, verder, eveneens, nog een argument is...*\n\n**Tegenstellen** (oppositie tonen):\n*echter, daarentegen, hoewel, toch, niettemin, in tegenstelling tot, anderzijds*\n\n**Oorzaak-gevolg**:\n*daardoor, dus, daarom, doordat, immers, vandaar, met als gevolg dat*\n\n**Voorbeeld geven**:\n*bijvoorbeeld, zo, om dit te illustreren, neem het geval van, denk aan*\n\n**Conclusie**:\n*kortom, samenvattend, al met al, concluderend, ten slotte*\n\n**Volgorde aangeven**:\n*ten eerste, vervolgens, daarna, tot slot*\n\n**Veelgemaakte fout**:\n• Hetzelfde woord steeds opnieuw gebruiken (\"Ook... ook... ook...\"). Wissel af.\n• Verkeerd verband leggen (\"echter\" gebruiken waar je eigenlijk \"daarnaast\" bedoelt).\n• Te veel verbindingswoorden — als elke zin met \"daarom\" begint wordt het mechanisch. Gebruik ze waar nodig.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">verbindingswoorden per relatie</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.good}" font-size="11" font-family="Arial" font-weight="bold">+ toevoegen:</text>
<text x="135" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">ook, daarnaast, bovendien</text>
<text x="35" y="92" fill="${COLORS.alt}" font-size="11" font-family="Arial" font-weight="bold">↔ tegenstellen:</text>
<text x="155" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">echter, hoewel, toch</text>
<text x="35" y="110" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">→ gevolg:</text>
<text x="115" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">daardoor, dus, daarom</text>
<text x="35" y="128" fill="${COLORS.paars}" font-size="11" font-family="Arial" font-weight="bold">ex voorbeeld:</text>
<text x="135" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">bijvoorbeeld, zo, denk aan</text>
<text x="35" y="146" fill="${COLORS.blue}" font-size="11" font-family="Arial" font-weight="bold">∑ conclusie:</text>
<text x="135" y="146" fill="${COLORS.text}" font-size="11" font-family="Arial">kortom, al met al, dus</text>
<text x="150" y="174" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">wissel af — niet steeds hetzelfde woord</text>
</svg>`,
    checks: [
      {
        q: "*\"De maatregel zou tijdverlies veroorzaken. ___ blijkt uit cijfers dat de extra reistijd minimaal is.\"* — Welk verbindingswoord past hier?",
        options: [
          "Echter",
          "Daarom",
          "Bijvoorbeeld",
          "Kortom",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Daarom legt een gevolg-relatie. Maar de twee zinnen zijn juist tegengesteld aan elkaar — wat past dan?",
          "Bijvoorbeeld leidt een illustratie in. Hier wordt geen voorbeeld gegeven, maar een tegenstelling.",
          "Kortom hoort aan het eind van een betoog, als conclusie. Hier zitten we midden in een redeneerlijn.",
        ],
      },
      {
        q: "*\"Het schoolbestuur wil meer geld voor sport. ___ pleit het voor uitbreiding van de gymzaal.\"* — Welk verbindingswoord past?",
        options: [
          "Daarom",
          "Echter",
          "Hoewel",
          "Daarentegen",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Echter signaleert een tegenstelling. Hier vloeit de tweede zin juist *logisch voort* uit de eerste.",
          "Hoewel introduceert een tegenstelling. De zinnen liggen in dezelfde lijn, geen contrast.",
          "Daarentegen zet iets juist tegenóver. De tweede zin is een gevolg van de eerste, geen contrast.",
        ],
      },
    ],
  },
  {
    title: "Toon en formuleren — de juiste woordkeus",
    explanation: "**Formuleren** is de kunst van *de juiste woorden in de juiste volgorde*. Een paar examen-aandachtspunten:\n\n**1. Concreet boven abstract**\n• ❌ \"Er moeten dingen veranderen.\"\n• ✓ \"De maximumsnelheid moet omlaag naar 100 km/u.\"\n\n**2. Actief boven passief** (in een betoog)\n• ❌ \"Er werd door de regering besloten.\"\n• ✓ \"De regering besloot.\"\n\n**3. Vermijd vaag taalgebruik**\n• ❌ *\"Er zijn veel mensen die hier last van hebben.\"*\n• ✓ *\"Volgens een GGD-rapport ondervindt 1 op de 4 omwonenden geluidsoverlast.\"*\n\n**4. Geen versterkers strooien**\n• ❌ \"De maatregel is super belangrijk en echt heel erg goed.\"\n• ✓ \"De maatregel is belangrijk.\"\n*(\"Super\", \"echt\", \"heel erg\" verzwakken juist je betoog.)*\n\n**5. Geen platte woorden in formele tekst**\n• ❌ \"De regering heeft het flink verkloot.\"\n• ✓ \"De regering heeft op dit punt ernstig gefaald.\"\n\n**6. Cijfers zijn krachtig — gebruik ze**\n• ❌ \"Veel jongeren krijgen te weinig slaap.\"\n• ✓ \"Volgens het CBS slaapt 38% van de havo-leerlingen minder dan 7 uur per nacht.\"\n\n**Tip**: lees je tekst hardop. Struikel je over een zin? Te lang of te ingewikkeld → opsplitsen.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">formuleer-checklist</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<text x="35" y="74" fill="${COLORS.text}" font-size="11" font-family="Arial">✓ concreet boven abstract</text>
<text x="35" y="92" fill="${COLORS.text}" font-size="11" font-family="Arial">✓ actief boven passief</text>
<text x="35" y="110" fill="${COLORS.text}" font-size="11" font-family="Arial">✓ cijfers en bronnen erbij</text>
<text x="35" y="128" fill="${COLORS.text}" font-size="11" font-family="Arial">✗ vaag ("veel", "dingen", "men")</text>
<text x="35" y="146" fill="${COLORS.text}" font-size="11" font-family="Arial">✗ versterkers ("super", "echt", "heel erg")</text>
<text x="150" y="176" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">lees hardop — struikelen = opsplitsen</text>
</svg>`,
    checks: [
      {
        q: "*Welke formulering is het sterkst voor een betoog?*",
        options: [
          "Volgens het RIVM stierven in 2024 in Nederland 4.300 mensen vroegtijdig door luchtvervuiling.",
          "Heel erg veel mensen sterven super vroeg door slechte lucht.",
          "Er zijn dingen die wijzen op gezondheidsschade door lucht.",
          "Mensen kunnen ziek worden van vieze lucht, dat weet iedereen.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "\"Heel erg veel\", \"super vroeg\" zijn versterkers die juist verzwakken. Welke optie is concreet en bronvol?",
          "Vaag (\"er zijn dingen die wijzen op\") en zonder cijfers. Welke optie is concreet?",
          "\"Dat weet iedereen\" is een appel op vanzelfsprekendheid, geen onderbouwing. Welke zin geeft cijfers + bron?",
        ],
      },
    ],
  },
  {
    title: "Reviseren — de tweede ronde",
    explanation: "**Goed schrijven = herschrijven.** Veel havo-leerlingen leveren hun eerste versie in. Wie reviseert haalt vaak een hele schaalpunt hoger.\n\n**Revisie-checklist** (3 rondes):\n\n**Ronde 1 — structuur**\n• Heb je een duidelijke inleiding-middenstuk-slot?\n• Komen de hoofdpunten in de juiste volgorde?\n• Zijn er alinea's die elkaar overlappen?\n• Mist er nog een belangrijk argument of perspectief?\n\n**Ronde 2 — alinea-niveau**\n• Heeft elke alinea één duidelijke topic sentence?\n• Zit er voldoende uitwerking bij (cijfers, voorbeelden)?\n• Zijn er goede verbindingswoorden tussen alinea's?\n\n**Ronde 3 — zin-niveau**\n• Te lange zinnen? Opsplitsen.\n• Vage formuleringen (\"dingen\", \"veel\", \"men\")? Concreet maken.\n• Spelfouten + d/t-fouten? Uitkammen.\n\n**Truc — lees achterstevoren**:\nLees de **laatste zin eerst**, dan de op-één-na-laatste, enzovoort. Je merkt zo veel makkelijker spelfouten op (je hersenen leiden niet meer af door de inhoud).\n\n**Andere truc — leg het opzij**:\nMin. 30 minuten weg, dan opnieuw lezen. Frisse blik = veel meer fouten zichtbaar.\n\n**Examen-tijd**: plan altijd 10 min revisie-tijd in de 70 min die je krijgt voor de schrijfopdracht.",
    svg: `<svg viewBox="0 0 300 200">
<rect x="20" y="22" width="260" height="160" rx="10" fill="${COLORS.paper}" stroke="${COLORS.axis}" stroke-width="1"/>
<text x="150" y="42" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">revisie — 3 rondes</text>
<line x1="30" y1="52" x2="270" y2="52" stroke="${COLORS.axis}" stroke-width="0.5"/>
<rect x="35" y="62" width="230" height="30" rx="6" fill="rgba(0,200,83,0.10)" stroke="${COLORS.good}" stroke-width="1.5"/>
<text x="150" y="82" text-anchor="middle" fill="${COLORS.good}" font-size="12" font-family="Arial" font-weight="bold">1. structuur (inl/mid/slot)</text>
<rect x="35" y="98" width="230" height="30" rx="6" fill="rgba(255,213,79,0.12)" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="150" y="118" text-anchor="middle" fill="${COLORS.warm}" font-size="12" font-family="Arial" font-weight="bold">2. alinea (topic + uitwerking)</text>
<rect x="35" y="134" width="230" height="30" rx="6" fill="rgba(255,112,67,0.12)" stroke="${COLORS.alt}" stroke-width="1.5"/>
<text x="150" y="154" text-anchor="middle" fill="${COLORS.alt}" font-size="12" font-family="Arial" font-weight="bold">3. zin (concreet, geen fouten)</text>
<text x="150" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">truc: lees achterstevoren · plan 10 min op examen</text>
</svg>`,
    checks: [
      {
        q: "*Op het examen heb je 70 minuten voor de schrijfopdracht. Hoe verdeel je de tijd het beste?*",
        options: [
          "10 min plan + 50 min schrijven + 10 min revisie",
          "70 min schrijven, geen revisie nodig",
          "5 min plan + 65 min schrijven",
          "30 min plan + 30 min schrijven + 10 min revisie",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Geen revisie betekent gegarandeerd taal- en structuurfouten die makkelijk te vermijden waren. Wat is dan zonde van de punten?",
          "Te krap planning = chaos in middenstuk. En geen revisie-tijd = onnodige fouten.",
          "30 min planning is overdreven. Voor een havo 4-betoog van ~500 woorden moet je in ~10 min een opzet hebben — anders kom je niet aan schrijven toe.",
        ],
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────
  {
    title: "Eindopdracht — schrijfprincipes toepassen",
    explanation: "Vier vragen op examenniveau havo 4. Geen echte schrijfopdracht (dat moet je in de klas doen), maar herken-vragen die alle geleerde principes toetsen.\n\n**Tip voor het examen-moment zelf**:\n1. Lees de opdracht **twee keer**. Welke tekstsoort? Welke doelgroep? Welk maximaal aantal woorden?\n2. Maak een **mini-plan** in 5 minuten: standpunt + 3 argumenten + conclusie (bij betoog) of 2-3 perspectieven (bij beschouwing) of 3-4 hoofdkopjes (bij uiteenzetting).\n3. Schrijf de **inleiding als laatste**, als je tijd hebt — of in elk geval na het middenstuk. Dan weet je beter wat je gaat aankondigen.\n4. Reviseer minstens één keer.\n\nVeel succes!",
    svg: `<svg viewBox="0 0 300 200">
<rect x="60" y="40" width="180" height="100" rx="14" fill="rgba(255,213,79,0.15)" stroke="${COLORS.warm}" stroke-width="3"/>
<text x="150" y="80" text-anchor="middle" fill="${COLORS.warm}" font-size="32" font-family="Arial" font-weight="bold">schrijven</text>
<text x="150" y="108" text-anchor="middle" fill="${COLORS.text}" font-size="14" font-family="Arial" font-weight="bold">eindronde havo 4</text>
<text x="150" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="11" font-family="Arial" font-style="italic">examenstof schrijfvaardigheid 🏆</text>
</svg>`,
    checks: [
      {
        q: "*Opdracht: \"Geef een overzicht van de oorzaken van de prijsstijgingen op de woningmarkt sinds 2010.\"* — Welke tekstsoort?",
        options: [
          "Uiteenzetting",
          "Betoog",
          "Beschouwing",
          "Reportage",
        ],
        answer: 0,
        wrongHints: [
          null,
          "\"Geef een overzicht\" vraagt geen mening of overtuigingsactie. Welke tekstsoort hoort bij neutraal informeren?",
          "Een beschouwing zet meningen tegenover elkaar. Hier wordt om een feitelijk overzicht gevraagd.",
          "Reportage is geen examen-tekstsoort. Welke past bij \"overzicht geven\"?",
        ],
      },
      {
        q: "*Welke alinea-volgorde is het sterkst voor een betoog vóór gratis kinderopvang?*",
        options: [
          "Argument: gelijke kansen → argument: economische winst → argument: minder armoede onder kinderen (sterkste laatst)",
          "Argument: sterkste eerst, dan zwakste",
          "Tegenargumenten eerst, eigen argumenten daarna",
          "Willekeurig — volgorde maakt geen verschil",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Sterkste eerst betekent dat je slot anti-climactisch wordt. Wat blijft het beste hangen bij de lezer?",
          "Tegenargumenten kunnen, maar dan beknopt en weerlegd — niet als hoofdstructuur. De eigen argumenten verdienen de hoofdpositie.",
          "Volgorde maakt wel degelijk uit voor overtuigingskracht. Welke positie krijgt het beste argument?",
        ],
      },
      {
        q: "*Welk verbindingswoord past in deze zin? — \"De plannen zijn ambitieus. ___ ontbreekt het aan financiering om ze uit te voeren.\"*",
        options: [
          "Echter",
          "Daarom",
          "Bijvoorbeeld",
          "Bovendien",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Daarom legt een gevolg-relatie. Hier liggen de twee zinnen juist tegenover elkaar.",
          "Bijvoorbeeld leidt een illustratie in. Geen voorbeeld hier, wel een tegenstelling.",
          "Bovendien voegt iets toe in dezelfde richting. Hier is juist sprake van een tegenstelling.",
        ],
      },
      {
        q: "*Een leerling schrijft in een uiteenzetting: \"Persoonlijk vind ik dat gemeenten meer geld zouden moeten krijgen voor jeugdzorg.\" Wat klopt er niet?*",
        options: [
          "Een uiteenzetting hoort neutraal te zijn — geen \"ik vind\".",
          "De zin is grammaticaal incorrect.",
          "De zin is te lang.",
          "Er ontbreekt een cijfer.",
        ],
        answer: 0,
        wrongHints: [
          null,
          "Grammaticaal is er niets mis. De fout zit in de toon van de zin in deze tekstsoort.",
          "De zin is normale lengte. Het probleem is niet structureel maar inhoudelijk.",
          "Cijfers zijn welkom maar het ontbreken is niet de hoofdfout. Denk aan welke tekstsoort dit was.",
        ],
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const schrijfvaardigheid = {
  id: "schrijfvaardigheid",
  title: "Schrijfvaardigheid",
  emoji: "✍️",
  level: "havo4-5",
  subject: "taal",
  intro:
    "Examenstof havo 4-5 schrijfvaardigheid: drie tekstsoorten (betoog, beschouwing, uiteenzetting) met hun specifieke opbouw, alinea-structuur, verbindingswoorden, formuleer-checklist en revisie-aanpak. Counterpart van argumentatieleer (= leesvaardigheid).",
  triggerKeywords: [
    "schrijven", "schrijfvaardigheid", "betoog", "beschouwing",
    "uiteenzetting", "alinea", "topic sentence", "verbindingswoorden",
    "signaalwoorden", "inleiding", "slot", "conclusie", "tone of voice",
    "doelgroep", "formuleren", "reviseren", "examen schrijven",
  ],
  chapters,
  steps,
};

export default schrijfvaardigheid;

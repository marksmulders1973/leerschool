// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk 7 (Nederland en het buitenland)
// Uitgebreide versie 2026-05-09: 7 stappen voor compleet examen-blok.

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

const stepEmojis = ["🚢", "🤝", "🇪🇺", "💶", "🌐", "🛡️", "🏦"];

const chapters = [
  { letter: "A", title: "Internationale handel", emoji: "🚢", from: 0, to: 1 },
  { letter: "B", title: "Europese Unie", emoji: "🇪🇺", from: 2, to: 3 },
  { letter: "C", title: "Globalisering", emoji: "🌐", from: 4, to: 5 },
  { letter: "D", title: "Centrale bank", emoji: "🏦", from: 6, to: 6 },
];

const steps = [
  // ─── Stap 1: Internationale handel ───────────────────────
  {
    title: "Internationale handel — import en export",
    explanation: "**Internationale handel**: landen kopen en verkopen aan elkaar.\n\n**Export**: NL verkoopt iets aan het buitenland (paprika's, machines, kaas, ASML-chips, Heineken)\n**Import**: NL koopt iets uit het buitenland (olie, koffie, smartphones, fruit uit Spanje)\n\n**Handelsbalans** = export − import\n• **Overschot**: meer export dan import (NL heeft dit meestal)\n• **Tekort**: meer import dan export\n\n**Cijfers NL 2023**:\n• Export: ~€700 miljard\n• Import: ~€650 miljard\n• Handelsoverschot ~€50 miljard\n• 60-70% van export gaat naar EU-landen\n\n**Waarom handelen?**\n\n**Comparatief voordeel** (kern-economie!): elk land is goed in iets anders. Wij kunnen kaas maken, Saoedi-Arabië olie pompen. **Door te ruilen worden we ALLEBEI rijker** — zelfs als 1 land 'beter' is in alles (Ricardo, 1817).\n\n**Schaalvoordelen**: meer afzet = lagere kosten per stuk. Een ASML-machine van €200 mln is alleen rendabel met wereldwijde markt.\n\n**Variatie**: zonder import geen koffie, banaan, avocado in NL. Onze keuken is dankzij import.\n\n**Specialisatie**: NL is super in zuivel, hightech, agro-tech, water-management.\n\n**Nederland als handelsland**:\n• **Rotterdam** = grootste haven van Europa (~470 mln ton goederen/jaar)\n• **Schiphol** = belangrijke vrachtluchthaven (Europa's #4)\n• **Re-export**: spullen komen NL binnen, gaan via NL door naar Duitsland of UK (~50% van NL-export!)\n• Geografisch midden Europa = logistiek voordeel\n\n**Voor- en nadelen handel**:\n• ✓ Goedkopere producten voor consumenten\n• ✓ Meer keuze\n• ✓ Banen in export-sectoren\n• ✗ Banen verloren in sectoren die niet kunnen concurreren\n• ✗ Afhankelijkheid (corona toonde aan: medicijnen uit India, chips uit Taiwan)\n• ✗ Milieu-impact transport\n\n**Belangrijk recent**:\n• China werd grote producent → veel westerse banen verdwenen\n• Nu: 'reshoring' (productie terughalen) wegens afhankelijkheid\n• Geopolitiek (China, Rusland, USA) verstoort handel",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">NL HANDEL</text>
<rect x="100" y="50" width="120" height="50" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="82" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">🇳🇱 NL</text>
<text x="40" y="60" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">IMPORT</text>
<text x="40" y="78" fill="${COLORS.text}" font-size="9" font-family="Arial">olie · koffie</text>
<text x="40" y="90" fill="${COLORS.text}" font-size="9" font-family="Arial">~€650 mrd</text>
<text x="60" y="105" fill="${COLORS.geld}" font-size="14" font-family="Arial">→</text>
<text x="240" y="60" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">EXPORT</text>
<text x="240" y="78" fill="${COLORS.text}" font-size="9" font-family="Arial">kaas · chips</text>
<text x="240" y="90" fill="${COLORS.text}" font-size="9" font-family="Arial">~€700 mrd</text>
<text x="220" y="105" fill="${COLORS.aanbod}" font-size="14" font-family="Arial">→</text>
<text x="160" y="135" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">handelsoverschot ~€50 mrd</text>
<text x="160" y="158" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">Rotterdam · Schiphol · re-export</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">comparatief voordeel maakt iedereen rijker</text>
</svg>`,
    checks: [
      {
        q: "Wat is **export** voor Nederland?",
        options: ["NL verkoopt iets aan het buitenland", "NL koopt iets uit het buitenland", "Toeristen die naar NL komen", "Een NL bedrijf in Duitsland"],
        answer: 0,
        wrongHints: [null, "Dat is import.", "Toerisme is wel een vorm export van diensten.", "Vestiging = directe investering."],
      },
      {
        q: "Wat is een **comparatief voordeel**?",
        options: ["Elk land is RELATIEF goed in iets — handel loont", "Een land heeft meer mensen", "Goedkoopste producten", "Beste hoogleraren"],
        answer: 0,
        wrongHints: [null, "Bevolking ≠ comparatief voordeel.", "Goedkoopste = absoluut voordeel.", "Onderwijs is factor, geen definitie."],
      },
      {
        q: "Een land heeft een **handelsoverschot**. Wat betekent dat?",
        options: ["Export is groter dan import", "Import groter dan export", "Schulden afgelost", "Recessie"],
        answer: 0,
        wrongHints: [null, "Dat is tekort.", "Niet hetzelfde.", "Recessie is iets anders."],
      },
      {
        q: "Waarom is NL een uitgesproken **handelsland**?",
        options: ["Grote havens (Rotterdam) + Schiphol + ligging Europa", "Veel goud", "Laagste belasting wereldwijd", "Geen import nodig"],
        answer: 0,
        wrongHints: [null, "Geen goud van betekenis.", "Belasting is normaal.", "NL importeert juist heel veel (olie!)."],
      },
      {
        q: "Wat is **re-export**?",
        options: ["Goederen komen NL binnen + gaan door naar ander land", "2x exporteren hetzelfde", "Export buiten Europa", "Belastingvoordeel"],
        answer: 0,
        wrongHints: [null, "Niet '2x' — wel doorvoer.", "Niet beperkt buiten EU.", "Geen belasting — handelsstroom."],
      },
      {
        q: "Welk **risico** brengt internationale afhankelijkheid?",
        options: ["Bij verstoring (corona, oorlog): tekort aan essentiële goederen (medicijnen, chips)", "Geen risico", "Lagere prijzen", "Meer toeristen"],
        answer: 0,
        wrongHints: [null, "Wel reëel risico.", "Onzeker.", "Niet relevant voor handel."],
      },
    
      {
        q: "Waartoe behoren de uitgaven van de toeristen, die een souvenir kopen op Sint-Maarten?",
        options: ["Tot de export van diensten door Sint-Maarten.", "Tot de export van goederen door Sint-Maarten.", "Tot de import van diensten door Sint-Maarten.", "Tot de import van goederen door Sint-Maarten. Gebruik informatiebron 1."],
        answer: 1,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 4",
      },
    
      {
        q: "De import van agrarische producten is procentueel sterker gegroeid dan de export. Toch is het Nederlandse handelsoverschot van de handel toegenomen. Wat kan daarvan de reden zijn?",
        options: ["Het prijspeil van de export is minder gestegen dan het prijspeil van de import.", "Het prijspeil van de export is meer gestegen dan het prijspeil van de import.", "De ge'xporteerde hoeveelheid is minder gestegen dan de ge'mporteerde hoeveelheid. Duitsland, Belgi' en het Verenigd Koninkrijk (VK) zijn de belangrijkste exportlanden voor Nederland. De export naar Du"],
        answer: 1,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 29",
      },
    
      {
        q: "Volgens Bram kunnen Nederlandse zuivelboeren door de melkrobot de concurrentie met buitenlandse zuivelboeren beter aan. De melkrobot kan leiden tot een hogere afzet. Hier staan drie economische verschijnselen: 1 hogere arbeidsproductiviteit 2 lagere kosten per product 3 betere concurrentiepositie van Nederlandse zuivelboeren In welke regel staan de verschijnselen zo, dat er een logische gedachtegang ontstaat?",
        options: ["inzet melkrobot  1  2  3  hogere afzet", "inzet melkrobot  1  3  2  hogere afzet", "inzet melkrobot  2  1  3  hogere afzet", "inzet melkrobot  2  3  1  hogere afzet", "inzet melkrobot  3  1  2  hogere afzet F inzet melkrobot  3  2  1  hogere afzet Een huis zonder gas Bij de beantwoording van de vragen in deze opgave moet je soms gebruikmaken van informatiebron 9 en "],
        answer: 0,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1, vraag 32",
      },
    ],
  },
  // ─── Stap 2: Beschermingsmaatregelen ────────────────────
  {
    title: "Beschermingsmaatregelen — protectionisme",
    explanation: "Niet alle handel is volledig vrij. Landen gebruiken **beschermingsmaatregelen** om eigen industrie te beschermen.\n\n**Vier hoofdvormen**:\n\n**1. Invoerheffing (importheffing/-tarief)**\n• Belasting bij grens op importproducten\n• Maakt buitenlandse producten duurder → eigen producten relatief goedkoper\n• Bv. EU-heffing op Chinese elektrische auto's (45%, 2024)\n\n**2. Quotum**\n• Maximum AANTAL dat je mag importeren\n• Bv. 'max 10.000 Chinese kledingstukken/jaar'\n• Boven dat: niet toegestaan of veel duurder\n\n**3. Subsidies**\n• Eigen bedrijven krijgen geld van overheid\n• Maakt hun producten goedkoper, internationaal concurrerender\n• Bv. EU geeft veel subsidies aan boeren (GLB)\n\n**4. Niet-tarifaire belemmeringen**\n• Strenge regels (technisch, milieu, gezondheid) die buitenlandse producten moeilijk maken\n• Bv. EU verbiedt importchemicaliën die in EU verboden zijn\n• Etikettering, productveiligheid, dier-welzijn\n\n**Voor- en nadelen protectionisme**:\n• ✓ Eigen industrie beschermd → banen behouden\n• ✓ Strategische sectoren niet afhankelijk van buitenland\n• ✓ Reactie op oneerlijke concurrentie (kinderarbeid, dumping)\n• ✗ Duurder voor consument\n• ✗ Verlies efficiëntie (geen comparatief voordeel)\n• ✗ Ander land kan terugslag (handelsoorlog)\n\n**Vrijhandel** vs **protectionisme**:\n• **Vrijhandel** (Adam Smith, Ricardo): geen barrières, iedereen wint\n• **Protectionisme**: bescherming, eigen industrie eerst\n• EU = vrijhandel intern, protectionisme extern\n\n**Internationaal**:\n• **WTO** (World Trade Organization): regelt globale handel, beslecht geschillen\n• **Vrijhandelsverdragen**: bijvoorbeeld EU-Canada (CETA), EU-Japan\n• **Sancties**: bewuste handelsbeperking als straf (bv. Rusland 2022)\n\n**Recente trends**:\n• Trump (2018-2020): forse importheffingen op China, EU-staal\n• China-EU spanning over EV's (2024)\n• 'Reshoring': productie terug naar eigen continent\n• Klimaat: import-CO2-heffing (CBAM) op koolstof-intensieve producten",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">PROTECTIONISME</text>
<rect x="20" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="87" y="58" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">INVOERHEFFING</text>
<text x="87" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">belasting aan grens</text>
<rect x="165" y="40" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.oranje}" stroke-width="1.2"/>
<text x="232" y="58" text-anchor="middle" fill="${COLORS.oranje}" font-size="11" font-family="Arial" font-weight="bold">QUOTUM</text>
<text x="232" y="72" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">max aantal toegestaan</text>
<rect x="20" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">SUBSIDIE</text>
<text x="87" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">eigen bedrijf goedkoper</text>
<rect x="165" y="90" width="135" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.2"/>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">REGELS</text>
<text x="232" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">technisch · milieu</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">WTO regelt globaal</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vrijhandel ↔ protectionisme</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **invoerheffing**?",
        options: ["Belasting op importproducten aan de grens", "Een soort BTW", "Loonbelasting", "Subsidie"],
        answer: 0,
        wrongHints: [null, "Vergelijkbaar maar specifiek voor import.", "Niets met loon.", "Tegendeel."],
      },
      {
        q: "Wat is een **quotum**?",
        options: ["Maximum aantal dat geïmporteerd mag worden", "Importbelasting", "Kwaliteitslabel", "Een handelsverdrag"],
        answer: 0,
        wrongHints: [null, "Quotum = aantal, heffing = geld.", "Niet kwaliteit.", "Niet verdrag."],
      },
      {
        q: "Een **subsidie** voor eigen bedrijven:",
        options: ["Maakt hun producten goedkoper, internationaal concurrerender", "Maakt ze duurder", "Heeft geen effect", "Verboden door WTO altijd"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel groot effect.", "Niet altijd verboden — vaak geregeld."],
      },
      {
        q: "Welke organisatie regelt globale handelsregels?",
        options: ["WTO (World Trade Organization)", "EU", "VN", "ECB"],
        answer: 0,
        wrongHints: [null, "EU = regionaal.", "VN = breder, niet handel-specifiek.", "ECB = euro."],
      },
      {
        q: "**Reshoring** is:",
        options: ["Productie terughalen naar eigen continent", "Toerisme stimuleren", "Belasting verlagen", "Vrijhandel uitbreiden"],
        answer: 0,
        wrongHints: [null, "Geen toerisme.", "Niet belasting.", "Tegendeel — minder vrijhandel."],
      },
      {
        q: "Voor- en nadeel protectionisme:",
        options: ["VOORDEEL: eigen banen beschermd. NADEEL: duurder voor consument", "Alleen voordelen", "Alleen nadelen", "Geen effect"],
        answer: 0,
        wrongHints: [null, "Beide kanten zijn er.", "Beide kanten zijn er.", "Wel groot effect."],
      },
    
      {
        q: "Wie betaalde de importheffing eerst en aan wie werd de importheffing uiteindelijk doorberekend?",
        options: ["De importheffing werd eerst betaald door de Nederlandse overheid, daarna werd de heffing doorberekend aan de Nederlandse consumenten.", "De importheffing werd eerst betaald door de Nederlandse overheid, daarna werd de heffing doorberekend aan de Belgische consumenten.", "De importheffing werd eerst betaald door de Belgische importeurs, daarna werd de heffing doorberekend aan de Nederlandse consumenten.", "De importheffing werd eerst betaald door de Belgische importeurs, daarna werd de heffing doorberekend aan de Belgische consumenten. Met de oprichting van de Europese Economische Gemeenschap (EEG) in 1"],
        answer: 3,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 1, vraag 13",
      },
    
      {
        q: "Wat is een gevolg voor bedrijven in de VS als er invoerrechten geheven worden op Chinees staal?",
        options: ["Bedrijven in de VS kopen meer staal uit eigen land, omdat de importprijzen van Chinees staal dalen.", "Bedrijven in de VS kopen meer staal uit eigen land, omdat de importprijzen van Chinees staal stijgen.", "Bedrijven in de VS kopen minder staal uit eigen land, omdat de importprijzen van Chinees staal dalen.", "Bedrijven in de VS kopen minder staal uit eigen land, omdat de importprijzen van Chinees staal stijgen."],
        answer: 1,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 28",
      },
    ],
  },
  // ─── Stap 3: Europese Unie ──────────────────────────────
  {
    title: "De Europese Unie — 27 landen, 1 markt",
    explanation: "**EU** = 27 Europese landen die samenwerken op handel, wetgeving en politiek.\n\n**Belangrijkste afspraken**:\n\n**1. Vrije handel**: geen invoerheffingen tussen lidstaten — een Belgische pizza in NL kost niet meer dan in België.\n\n**2. Vrij verkeer (4 vrijheden)**:\n• **Goederen** — geen grenscontrole\n• **Personen** — werken/wonen waar je wilt\n• **Diensten** — bedrijf in andere EU-land openen\n• **Kapitaal** — geld vrij verplaatsen\n\n**3. Eén markt**: alsof EU-landen 1 land zijn voor handel.\n\n**4. Gezamenlijke wetten**: milieu, voedselveiligheid, consumentenbescherming, mededinging.\n\n**De Eurozone** (= subset van EU):\n• 20 landen die de euro gebruiken (NL, DE, FR, IT, ES, BE, etc.)\n• NIET alle EU-landen: Polen, Zweden, Denemarken hebben eigen valuta\n• UK was lid → Brexit 2020\n\n**Structuur EU**:\n• **Europees Parlement**: direct gekozen, 705 leden\n• **Raad van de EU**: ministers uit lidstaten\n• **Europese Commissie**: 'regering', maakt voorstellen\n• **Hof van Justitie EU**: rechtspraak\n• **ECB** (zie stap 7)\n\n**Voordelen voor NL**:\n• 60-70% van NL-export gaat naar EU-landen\n• Geen wisselkosten of -risico binnen eurozone\n• NL bedrijf kan in heel EU verkopen zonder grenzen\n• EU onderhandelt sterker dan 27 losse landen\n\n**Nadelen**:\n• Minder eigen zeggenschap (Brusselse regels)\n• Bijdrage aan EU-begroting (~€8 mrd/jaar netto bijdrager)\n• Bij crisis in andere landen draagt NL mee (Griekse staatsschuld)\n• Snel groeiende regelgeving (regulering uit Brussel)\n\n**Brexit (2016-2020)**:\n• UK wilde controle terug over wetten + grenzen\n• Resultaat: minder handel met EU, problemen logistiek (Noord-Ierland), economie geleden\n• Lessen: vertrek-uit-EU is complex, dure\n\n**Recente discussies**:\n• Migratie (asielbeleid)\n• Klimaatbeleid (Green Deal)\n• China-strategie\n• Uitbreiding (Oekraïne, Westelijke Balkan)\n• Macht ECB",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">EUROPESE UNIE</text>
<circle cx="160" cy="105" r="65" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="2"/>
<text x="160" y="92" text-anchor="middle" fill="${COLORS.vraag}" font-size="14" font-family="Arial" font-weight="bold">EU</text>
<text x="160" y="110" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">27 landen</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">1 markt</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vrij verkeer</text>
<circle cx="160" cy="105" r="32" fill="none" stroke="${COLORS.warm}" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="160" y="65" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">€ eurozone (20)</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vrije: goederen · personen · diensten · kapitaal</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel landen zitten in de EU?",
        options: ["27", "20", "50", "12"],
        answer: 0,
        wrongHints: [null, "20 = eurozone-landen.", "Te veel.", "Begin EEG, nu 27."],
      },
      {
        q: "Welk land gebruikt de **euro NIET**?",
        options: ["Polen", "Frankrijk", "Spanje", "Duitsland"],
        answer: 0,
        wrongHints: [null, "Wel.", "Wel.", "Wel — grootste eurozone-economie."],
      },
      {
        q: "Wat zijn de **4 vrijheden** EU?",
        options: ["Goederen, personen, diensten, kapitaal", "Eten, drinken, slapen, werken", "Lucht, water, vuur, aarde", "Stem, religie, pers, vereniging"],
        answer: 0,
        wrongHints: [null, "Onzin.", "Niet economische termen.", "Mensenrechten — andere context."],
      },
      {
        q: "Wat is de **Europese Commissie**?",
        options: ["'Regering' van de EU — maakt voorstellen, voert beleid uit", "Het parlement", "De rechter", "De centrale bank"],
        answer: 0,
        wrongHints: [null, "Parlement is iets anders.", "Hof van Justitie.", "ECB is centrale bank."],
      },
      {
        q: "Wat was **Brexit**?",
        options: ["UK verliet de EU (2020)", "UK trad toe", "Een nieuw land in EU", "Een handelsverdrag"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Niet nieuw land.", "Geen verdrag — vertrek."],
      },
      {
        q: "Voordeel **euro voor toerist**:",
        options: ["Geen wisselkosten of -koersrisico in eurozone", "Hogere prijzen in andere landen", "Lagere belasting", "Gratis hotelkamer"],
        answer: 0,
        wrongHints: [null, "Niet door euro.", "Niet door munteenheid.", "Vakantie kost geld."],
      },
    
      {
        q: "Is Zweden ook lid van de Europese Monetaire Unie (EMU)?",
        options: ["Ja, er wordt betaald met de euro.", "Ja, naast de Zweedse kroon is ook de euro een wettig betaalmiddel.", "Nee, er wordt betaald met de Zweedse kroon.", "Nee, naast de euro is ook de Zweedse kroon een wettig betaalmiddel. In landen buiten de EU zijn de prijzen van dezelfde artikelen per land verschillend. Gebruik informatiebron 1 en 2."],
        answer: 2,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 Echt examen VMBO-GL/TL 2024 tijdvak 1, vraag 2",
      },
    ],
  },
  // ─── Stap 4: Wisselkoersen en de euro ─────────────────
  {
    title: "Wisselkoersen — wat is jouw euro waard?",
    explanation: "**Wisselkoers** = de prijs van de ene valuta in de andere. Voorbeeld: €1 = $1,10 = ¥160.\n\nWisselkoersen veranderen elke dag (en seconde) op de **valutamarkt**. Door:\n• Vraag en aanbod naar valuta\n• Rente-verschillen tussen landen (hogere rente trekt geld aan)\n• Politieke onzekerheid (oorlog, verkiezingen)\n• Economische groei\n• Inflatieverschillen\n\n**Sterke euro** (€1 = $1,30):\n• **Importeren wordt goedkoper** (Amerikaanse iPhone kost minder euro)\n• **Exporteren wordt duurder** (Amerikaanse klanten moeten meer dollar)\n• Toerisme NL → VS goedkoper\n\n**Zwakke euro** (€1 = $1,00):\n• Andersom: import duur, export aantrekkelijk\n• Toerisme NL → VS duur\n\n**Voor jou als toerist**:\n• Vlucht naar Bangkok: blijf op huidige koers letten\n• Geld wisselen op luchthaven = duur (slechte koers + commissie)\n• Beter: pinnen ter plaatse met je gewone bankpas\n\n**Waarom euro voor 20 landen één is**:\n• Geen wisselkoersrisico binnen eurozone\n• Geen wisselkosten\n• Prijzen makkelijk vergelijkbaar\n• ECB bewaakt euro-koers (zie stap 7)\n\n**Belangrijke valuta**:\n• **USD** (US dollar) — wereldreservevaluta\n• **EUR** (euro) — 20 landen\n• **GBP** (Brits pond) — UK\n• **JPY** (Japanse yen) — Japan\n• **CNY** (Chinese yuan) — China, deels gereguleerd\n• **CHF** (Zwitserse frank) — Zwitserland, 'safe haven'\n\n**Wisselkoers-systemen**:\n• **Vrije zwevende koers**: markt bepaalt (USD, EUR, JPY)\n• **Gereguleerde koers**: overheid controleert (CNY deels)\n• **Vaste koers**: overheid garandeert (Hong Kong dollar aan USD)\n\n**Effect inflatie op wisselkoers**:\n• Hoge inflatie in NL → euro daalt vs valuta met lage inflatie\n• Mensen verkiezen sterke valuta\n\n**Speculatie**:\n• Grote handelaren (banken, hedge funds) verdienen aan kleine bewegingen\n• Soms aanvallen op zwakke valuta (Soros vs Brits pond, 1992)\n\n**Voorbeeld vakantie**:\n• Reis Bali, kost 5 mln Indonesische rupiah\n• Bij koers 16.000 IDR per euro = €312\n• Bij koers 18.000 IDR per euro = €278\n→ Verschil €34, soms verschil zit gewoon in 'wanneer je gaat'.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">WISSELKOERS € ↔ $</text>
<rect x="40" y="40" width="80" height="50" rx="8" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.5"/>
<text x="80" y="62" text-anchor="middle" fill="${COLORS.vraag}" font-size="20" font-family="Arial">€1</text>
<text x="80" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">euro</text>
<text x="135" y="68" fill="${COLORS.muted}" font-size="14" font-family="Arial">↔</text>
<rect x="180" y="40" width="80" height="50" rx="8" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.5"/>
<text x="220" y="62" text-anchor="middle" fill="${COLORS.geld}" font-size="20" font-family="Arial">$1.10</text>
<text x="220" y="82" text-anchor="middle" fill="${COLORS.text}" font-size="10" font-family="Arial">dollar</text>
<text x="160" y="120" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">sterke € → goedkoop importeren</text>
<text x="160" y="140" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">zwakke € → goedkoop exporteren</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">USD · EUR · GBP · JPY · CNY · CHF</text>
</svg>`,
    checks: [
      {
        q: "Koers **€1 = $1,10**. Je wilt **$220** kopen. Hoeveel euro nodig?",
        options: ["€200", "€220", "€242", "€110"],
        answer: 0,
        wrongHints: [null, "1 euro = $1,10. Reken $220 / 1,10.", "Te veel.", "Onjuist."],
      },
      {
        q: "De euro is **sterk** geworden. Effect voor NL-exporteur?",
        options: ["Exporteren naar VS wordt duurder voor Amerikanen", "Goedkoper", "Geen effect", "Fabriek sluiten"],
        answer: 0,
        wrongHints: [null, "Andersom.", "Wel effect.", "Te extreme conclusie."],
      },
      {
        q: "Wat veroorzaakt **wisselkoers-verandering**?",
        options: ["Vraag/aanbod, rente, politiek, inflatie", "Alleen het weer", "Alleen verkiezingen", "Alleen toerisme"],
        answer: 0,
        wrongHints: [null, "Geen factor.", "Te beperkt.", "Te beperkt."],
      },
      {
        q: "Wat is een **'safe haven'-valuta**?",
        options: ["Valuta waar mensen naar vluchten in onzekere tijden (CHF, USD)", "Goedkoopste valuta", "Nieuwste valuta", "Crypto-valuta"],
        answer: 0,
        wrongHints: [null, "Niet over prijs.", "Niet over leeftijd.", "Crypto is iets anders."],
      },
      {
        q: "Voor een **toerist**: waar wisselen meestal slechtste koers?",
        options: ["Op de luchthaven (commissie + slechte koers)", "Bij pinnen ter plaatse", "Bij eigen bank vooraf", "Online"],
        answer: 0,
        wrongHints: [null, "Pinnen geeft betere koers.", "Eigen bank ook redelijk.", "Online vaak goed."],
      },
      {
        q: "Wat is een **vrije zwevende koers**?",
        options: ["Markt bepaalt — overheid grijpt niet in", "Overheid bepaalt vast", "Geen koers", "Crypto"],
        answer: 0,
        wrongHints: [null, "Dat is gereguleerd.", "Wel een koers.", "Iets anders."],
      },
    
      {
        q: "Wat gebeurt er met de koers van de dollar als China in grote hoeveelheden dollars opkoopt?",
        options: ["Door de grote Chinese vraag naar dollars daalt de koers van de dollar.", "Door de grote Chinese vraag naar dollars stijgt de koers van de dollar.", "Door het grote Chinese aanbod van dollars daalt de koers van de dollar.", "Door het grote Chinese aanbod van dollars stijgt de koers van de dollar."],
        answer: 1,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 30",
      },
    ],
  },
  // ─── Stap 5: Globalisering ──────────────────────────────
  {
    title: "Globalisering — de wereld als één markt",
    explanation: "**Globalisering** = wereld wordt steeds meer verbonden — handel, communicatie, reizen.\n\n**Hoe is het zo gekomen?**\n• Goedkoper transport (vrachtschepen, vliegtuigen)\n• Internet (snel info uitwisselen, online winkelen)\n• Containers (gestandaardiseerd → veel goederen tegelijk)\n• Vrijhandelsverdragen\n• Engels als wereldtaal\n• Gevallen muren (Berlijn 1989, China economisch open)\n\n**Multinationals** (mondiale bedrijven):\n• **Hollands** voorbeeld: Shell (olie/energie), ASML (chipmachines), Heineken (bier), Unilever (consumentengoederen)\n• **Wereldwijd**: Apple, Amazon, Google, Toyota, Samsung, McDonald's\n• Hebben vestigingen in 10+ landen, kunnen winst verschuiven (belastingontwijking)\n\n**Voor- en nadelen globalisering**:\n\n**Winnaars**:\n• Consumenten (goedkope producten, meer keuze)\n• Multinationals\n• Productie-arbeiders in arme landen (banen)\n• Westerse hoogopgeleiden (kunnen wereldwijd werken)\n\n**Verliezers**:\n• Westerse fabrieksarbeiders (banen weg naar lage-loon-landen)\n• Lokaal MKB (concurrentie wereldwijd)\n• Milieu (transport CO2, vervuiling)\n\n**Anti-globalisering**:\n• Mensen voelen zich vergeten\n• Politieke groei van protectionisme (Trump, Brexit, RN)\n• Zorgen over identiteit, cultuur\n\n**Globalisering en arme landen**:\n• Veel banen in textiel, elektronica gemaakt in China, Bangladesh, Vietnam\n• Lonen daar zijn laag (per westerse standaard) maar hoger dan landbouw\n• Bv. Bangladesh-textielfabriek: $200/maand vs landbouw $50\n• → Mensen trekken naar steden, ontwikkeling\n• Risico's: slechte arbeidsomstandigheden (Rana Plaza-ramp 2013, 1.134 doden)\n\n**Klimaat en globalisering**:\n• Productie verplaatst → CO2 in productiegebied (China)\n• Consumptie blijft in westen — wie 'verantwoordelijk'?\n• Transport zelf veel CO2 (containerschepen, luchtvracht)\n• Opkomende beweging: 'koop lokaal'\n\n**Nieuwe trends**:\n• **Digitale globalisering**: Netflix, Spotify, social media wereldwijd\n• **Reshoring/nearshoring**: kritieke productie terug naar eigen continent\n• **Supply chain risico** (corona toonde aan)\n• **Geopolitieke spanningen** (China-VS, Rusland)",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">GLOBALISERING</text>
<circle cx="160" cy="100" r="55" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="2"/>
<text x="160" y="105" text-anchor="middle" fill="${COLORS.vraag}" font-size="22" font-family="Arial">🌐</text>
<text x="60" y="60" fill="${COLORS.geld}" font-size="10" font-family="Arial" font-weight="bold">+ winnaars</text>
<text x="60" y="74" fill="${COLORS.muted}" font-size="9" font-family="Arial">consumenten</text>
<text x="60" y="86" fill="${COLORS.muted}" font-size="9" font-family="Arial">multinationals</text>
<text x="60" y="98" fill="${COLORS.muted}" font-size="9" font-family="Arial">arme landen werk</text>
<text x="245" y="60" fill="${COLORS.aanbod}" font-size="10" font-family="Arial" font-weight="bold">− verliezers</text>
<text x="245" y="74" fill="${COLORS.muted}" font-size="9" font-family="Arial">fabrieksarbeiders</text>
<text x="245" y="86" fill="${COLORS.muted}" font-size="9" font-family="Arial">lokaal MKB</text>
<text x="245" y="98" fill="${COLORS.muted}" font-size="9" font-family="Arial">milieu</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">multinationals · containers · internet · reshoring</text>
</svg>`,
    checks: [
      {
        q: "Wat is **globalisering**?",
        options: ["Wereld wordt steeds meer verbonden — handel, communicatie, reizen", "Een handelsverdrag", "Belasting wereldwijd", "Eén regering"],
        answer: 0,
        wrongHints: [null, "Specifieker dan dat.", "Niet specifiek belasting.", "Niet 1 regering."],
      },
      {
        q: "Een Nederlandse **multinational** is bv:",
        options: ["Shell, ASML, Heineken, Unilever", "Albert Heijn alleen", "Bakker bij jou op de hoek", "Provinciale overheid"],
        answer: 0,
        wrongHints: [null, "AH is binnenlands.", "Niet internationaal.", "Geen bedrijf."],
      },
      {
        q: "Wie is een **verliezer** van globalisering?",
        options: ["Westerse fabrieksarbeider — banen weg naar lage-loon-landen", "Multinationals", "Consument", "Hoogopgeleide werkers"],
        answer: 0,
        wrongHints: [null, "Winnaar.", "Winnaar (goedkope producten).", "Vaak winnaar."],
      },
      {
        q: "**Reshoring** is:",
        options: ["Productie terug naar eigen continent halen", "Buitenland uitbreiden", "Toerisme bevorderen", "Importtarief"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Niet toerisme.", "Niet hetzelfde."],
      },
      {
        q: "**Containers** waren cruciaal voor globalisering omdat:",
        options: ["Gestandaardiseerd → veel goederen snel + goedkoop transporteren", "Mooi", "Goedkoop", "Verboden"],
        answer: 0,
        wrongHints: [null, "Standaardisatie is de sleutel.", "Te beperkt.", "Niet verboden."],
      },
      {
        q: "Klimaat en globalisering:",
        options: ["Veel CO2 door transport + productie verplaatst naar landen met lakse regels", "Geen effect", "Globalisering helpt klimaat altijd", "Klimaat is geen issue"],
        answer: 0,
        wrongHints: [null, "Wel groot effect.", "Vaak negatief.", "Wel issue."],
      },
    ],
  },
  // ─── Stap 6: Multinationals + arme landen ─────────────
  {
    title: "Multinationals en hun impact",
    explanation: "**Multinational** = bedrijf met vestigingen in meerdere landen. Vaak groot — Apple is meer waard dan veel landen-BBPs samen.\n\n**Wereld-multinationals**:\n• **USA**: Apple, Amazon, Google, Microsoft, Coca-Cola\n• **NL**: Shell, ASML, Unilever, Heineken, ING, Philips\n• **DE**: Volkswagen, BMW, SAP, Siemens, Bayer\n• **CN**: Alibaba, Tencent, Huawei\n• **JP**: Toyota, Sony, Honda\n• **KR**: Samsung, Hyundai\n\n**Hoe wordt een bedrijf multinational?**\n• Begint vaak in 1 land\n• Groeit, opent kantoren in andere landen\n• Bv. McDonald's: 1955 1e restaurant USA → nu 40.000 in 100+ landen\n\n**Voor- en nadelen multinationals**:\n\n**Voordelen voor Nederland**:\n• Banen (Shell heeft duizenden NL-medewerkers)\n• Belastingopbrengst\n• Innovatie + R&D\n• Trots ('Made in Holland')\n\n**Nadelen voor Nederland**:\n• Belastingontwijking via internationale structuren (vroeger 'Dutch sandwich')\n• Macht over politiek (lobby)\n• Bij vertrek: veel banen weg\n\n**Voor arme landen**:\n• Banen + loon vaak hoger dan lokale alternatieven\n• Technologietransfer\n• Maar: slechte arbeidsomstandigheden, milieuvervuiling\n• Cultuurverandering ('McDonaldisering')\n\n**Beroemde voorbeelden goed/slecht**:\n• ✓ Apple in China: hoge eisen, betere fabrieken dan lokaal\n• ✗ Shell in Nigeria: olielekken, decennia rechtszaken\n• ✗ Foxconn in China: zelfmoorden bij iPhone-fabriek (2010)\n• ✓ Unilever 'Sustainable Living Plan' (klimaat-doelen)\n\n**Macht van multinationals**:\n• Apple-marktwaarde > NL-BBP\n• Lobby in Washington, Brussel, Den Haag\n• Kunnen landen 'tegen elkaar uitspelen' (waar laagste belasting?)\n\n**Hoe bewaak je ze?**\n• EU-mededingingsbeleid (boetes Google, Apple)\n• Internationale belastingafspraken (OESO BEPS, minimumtarief 15% VPB)\n• ESG-criteria (Environmental, Social, Governance)\n• Activisten + media\n\n**Nederlandse 'kampioenen'**:\n• **ASML** (Veldhoven) — chipmachines, monopolie op EUV-techniek\n• **Shell** — energie, hoofdkantoor naar UK 2022 (politieke kwestie)\n• **Heineken** — wereldwijd bier, #2 brouwer ter wereld\n• **Unilever** — Knorr, Magnum, Lipton, Dove\n\n**Is groot altijd slecht?**\nNee, soms efficiënt. Maar zonder check ontstaat oligopolie of monopolie. Daarom toezicht.",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">MULTINATIONALS</text>
<rect x="20" y="40" width="280" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="1.2"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.vraag}" font-size="11" font-family="Arial" font-weight="bold">NL: Shell · ASML · Heineken · Unilever</text>
<text x="160" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">vestigingen in 10+ landen</text>
<rect x="20" y="90" width="135" height="40" rx="6" fill="rgba(105,240,174,0.10)" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">+ VOORDELEN</text>
<text x="87" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">banen · belasting · innovatie</text>
<rect x="165" y="90" width="135" height="40" rx="6" fill="rgba(255,82,82,0.10)" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">− NADELEN</text>
<text x="232" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">ontwijking · macht · vervuiling</text>
<text x="160" y="160" text-anchor="middle" fill="${COLORS.warm}" font-size="11" font-family="Arial" font-weight="bold">toezicht: EU + OESO + ESG</text>
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">ASML &gt; NL-BBP qua waarde</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **multinational**?",
        options: ["Bedrijf met vestigingen in meerdere landen", "Een soort belasting", "Een land", "Een vakbond"],
        answer: 0,
        wrongHints: [null, "Niet belasting.", "Niet land.", "Niet vakbond."],
      },
      {
        q: "Welke is een **Nederlandse multinational**?",
        options: ["Shell", "Apple", "Toyota", "McDonald's"],
        answer: 0,
        wrongHints: [null, "Amerikaans.", "Japans.", "Amerikaans."],
      },
      {
        q: "Een **voordeel** van multinationals voor NL:",
        options: ["Banen + belastingopbrengst + innovatie", "Geen voordeel", "Alleen voor rijken", "Alleen voor arme landen"],
        answer: 0,
        wrongHints: [null, "Wel voordelen.", "Banen voor iedereen.", "Voor NL ook."],
      },
      {
        q: "Een **nadeel** van multinationals:",
        options: ["Belastingontwijking via internationale structuren", "Te veel banen", "Te veel innovatie", "Geen nadeel"],
        answer: 0,
        wrongHints: [null, "Banen zijn goed.", "Innovatie is goed.", "Wel nadelen."],
      },
      {
        q: "**ASML** is bekend om:",
        options: ["Chipmachines (monopolie EUV-technologie)", "Auto's", "Bier", "Voedsel"],
        answer: 0,
        wrongHints: [null, "Niet auto's.", "Heineken = bier.", "Unilever = voedsel."],
      },
      {
        q: "Internationaal **toezicht** op multinationals via:",
        options: ["EU + OESO + ESG-criteria", "Niemand", "Alleen vakbonden", "Alleen consumenten"],
        answer: 0,
        wrongHints: [null, "Wel toezicht.", "Vakbonden zijn 1 partij.", "Consumenten zijn 1 partij."],
      },
    ],
  },
  // ─── Stap 7: ECB en monetair beleid ──────────────────
  {
    title: "ECB en monetair beleid — beheerder van de euro",
    explanation: "De **ECB (Europese Centrale Bank)** in Frankfurt regelt de euro voor 20 eurozone-landen.\n\n**Belangrijkste taak**: stabiele prijzen — inflatiedoel ~2%/jaar.\n\n**Wat doet de ECB?**\n\n**1. Rente bepalen**\n• 'Rente van de centrale bank' = wat banken moeten betalen om geld te lenen van ECB\n• Beïnvloedt alle andere rentes (hypotheek, spaarrente)\n\n**2. Geld in omloop reguleren**\n• Ze drukken/maken digitaal geld bij of verkleinen geldhoeveelheid\n• 'Quantitative Easing' (QE) = veel geld bijdrukken om economie te helpen\n\n**3. Banken-toezicht**\n• Op grote eurozone-banken\n• Voorkomen bank-faillissementen\n\n**4. Wisselkoers bewaken**\n• Niet 'vastleggen', maar wel monitoren\n\n**Hoe werkt rentebeleid?**\n\n**Rente VERHOGEN** (bij hoge inflatie):\n• Lenen wordt duurder\n• Mensen geven minder uit\n• Bedrijven investeren minder\n• Vraag daalt → prijzen dalen → inflatie omlaag\n• MAAR: ook minder economische groei, soms recessie\n\n**Rente VERLAGEN** (bij recessie):\n• Lenen goedkoper\n• Mensen geven meer uit\n• Bedrijven investeren meer\n• Economie groeit\n• MAAR: kan inflatie veroorzaken\n\n**Recente geschiedenis**:\n• 2008-2022: rente bijna 0% (om economie te helpen)\n• 2022-2024: rente snel omhoog (om hoge inflatie te bestrijden)\n• 2024-2025: rente weer naar beneden\n\n**Voor jouw spaarrekening**:\n• ECB-rente hoog → bank betaalt jou meer rente op spaargeld\n• ECB-rente laag → ook jij weinig rente\n\n**Voor jouw hypotheek**:\n• Variabele hypotheek: maandlast verandert mee\n• Vaste hypotheek (10-30 jr): pas bij vernieuwing\n\n**Onafhankelijkheid ECB**:\n• ECB beslist zelfstandig, niet door politici\n• Idee: politici willen graag rente verlagen voor verkiezingen, ten koste van inflatie\n• Daarom onafhankelijke instelling (zoals de NL DNB voor euro-tijdperk)\n\n**Spanning**:\n• Sommige landen willen lage rente (Italië, Spanje — hoge schuld)\n• Andere willen hoge rente (DE, NL — bang voor inflatie)\n• ECB kiest 1 beleid voor allen\n\n**Andere centrale banken**:\n• **Federal Reserve (Fed)** — VS\n• **Bank of England** — UK\n• **Bank of Japan** — Japan\n• **People's Bank of China** — China\n\n**Toekomst**:\n• Digitale euro (CBDC) — ECB-uitgegeven digitaal geld\n• Klimaat-criteria in monetair beleid\n• Reactie op crypto",
    svg: `<svg viewBox="0 0 320 220">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">ECB MONETAIR BELEID</text>
<rect x="40" y="40" width="240" height="40" rx="6" fill="${COLORS.paper}" stroke="${COLORS.warm}" stroke-width="1.5"/>
<text x="160" y="58" text-anchor="middle" fill="${COLORS.warm}" font-size="14" font-family="Arial" font-weight="bold">ECB Frankfurt</text>
<text x="160" y="72" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">doel inflatie ~2%</text>
<rect x="20" y="90" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.aanbod}" stroke-width="1.2"/>
<text x="87" y="108" text-anchor="middle" fill="${COLORS.aanbod}" font-size="11" font-family="Arial" font-weight="bold">RENTE ↑</text>
<text x="87" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">bij hoge inflatie</text>
<text x="87" y="135" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">→ minder vraag</text>
<rect x="165" y="90" width="135" height="55" rx="6" fill="${COLORS.paper}" stroke="${COLORS.geld}" stroke-width="1.2"/>
<text x="232" y="108" text-anchor="middle" fill="${COLORS.geld}" font-size="11" font-family="Arial" font-weight="bold">RENTE ↓</text>
<text x="232" y="122" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">bij recessie</text>
<text x="232" y="135" text-anchor="middle" fill="${COLORS.muted}" font-size="9" font-family="Arial">→ economie helpen</text>
<text x="160" y="170" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">QE: geld bijdrukken</text>
<text x="160" y="195" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Fed (USA) · BoE (UK) · BoJ (Japan)</text>
</svg>`,
    checks: [
      {
        q: "Wat doet de **ECB**?",
        options: ["Beheert de euro: rente, geldhoeveelheid, inflatie", "Belasting innen", "Wetten maken", "Ontwikkelingshulp"],
        answer: 0,
        wrongHints: [null, "Belastingdienst.", "Parlement.", "Andere organisaties."],
      },
      {
        q: "Wat is het **inflatiedoel** van de ECB?",
        options: ["~2%", "0%", "5%", "10%"],
        answer: 0,
        wrongHints: [null, "Te krap.", "Te hoog.", "Hyperinflatie-niveau."],
      },
      {
        q: "ECB **verhoogt rente**. Wat is meestal de reden?",
        options: ["Hoge inflatie bestrijden", "Recessie", "Toerisme bevorderen", "Verkiezingen"],
        answer: 0,
        wrongHints: [null, "Tegendeel — bij recessie verlaagt.", "Niets met toerisme.", "ECB is onafhankelijk van verkiezingen."],
      },
      {
        q: "Wat is **QE (Quantitative Easing)**?",
        options: ["Veel geld bijdrukken om economie te helpen", "Belasting verhogen", "Banken sluiten", "Spaargeld in beslag"],
        answer: 0,
        wrongHints: [null, "Geen belasting.", "Tegendeel.", "Niet wat het is."],
      },
      {
        q: "Effect ECB-rente OMHOOG voor jouw **spaarrekening**:",
        options: ["Bank betaalt jou meestal meer rente", "Minder rente", "Geen effect", "Spaargeld weg"],
        answer: 0,
        wrongHints: [null, "Tegendeel.", "Wel effect.", "Niet 'weg'."],
      },
      {
        q: "Waarom is de ECB **onafhankelijk** van politici?",
        options: ["Politici willen rente vaak verlagen voor verkiezingen, ten koste van inflatie", "ECB hoort dat zo", "Toeval", "Politici weten te veel"],
        answer: 0,
        wrongHints: [null, "Wel een reden.", "Geen toeval.", "Onzin."],
      },
    
      {
        q: "De ECB is niet van plan om het rentebeleid aan te passen. Er zijn echter nog andere maatregelen om de koopkracht van burgers op peil te houden. Met welk van onderstaande maatregelen kan de koopkracht op peil gehouden worden?",
        options: ["vergroting van de winstmarges door bedrijven", "verhoging van de btw", "verlaging van de heffingskortingen", "volledige prijscompensatie in de lonen Handelsoorlog Bij de beantwoording van de vragen in deze opgave moet je soms gebruikmaken van informatiebron 9 in de bijlage. In de Verenigde Staten (VS) worden "],
        answer: 3,
        wrongHints: [null, null, null, null],
        examenBron: "🎓 Echt examen VMBO-GL/TL 2023 tijdvak 2, vraag 27",
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
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk 7",
  intro:
    "Hoofdstuk 7 van Pincode 7e ed. VMBO-GT 4: import/export, comparatief voordeel, beschermingsmaatregelen, Europese Unie + 4 vrijheden, wisselkoersen, globalisering + multinationals, ECB monetair beleid. 7 stappen examenvoorbereiding.",
  triggerKeywords: [
    "import", "export", "handelsbalans", "handelsoverschot", "handelstekort",
    "comparatief voordeel", "schaalvoordelen", "specialisatie",
    "rotterdam", "schiphol", "re-export", "handelsland",
    "protectionisme", "vrijhandel", "invoerheffing", "importtarief", "quotum",
    "subsidie", "wto", "vrijhandelsverdrag", "ceta", "sancties", "reshoring",
    "europese unie", "eu", "vrije handel", "vrij verkeer",
    "4 vrijheden", "eurozone", "euro",
    "europees parlement", "europese commissie", "raad van de eu", "hof van justitie",
    "brexit", "uk", "uitbreiding eu",
    "wisselkoers", "valutamarkt", "sterke euro", "zwakke euro",
    "usd", "dollar", "gbp", "pond", "jpy", "yen", "cny", "yuan", "chf", "frank",
    "vrije zwevende koers", "gereguleerde koers", "vaste koers",
    "globalisering", "containers", "supply chain",
    "multinational", "shell", "asml", "heineken", "unilever", "philips",
    "apple", "google", "amazon", "samsung", "toyota",
    "esg", "oeso", "beps",
    "ecb", "europese centrale bank", "monetair beleid", "rente", "qe",
    "fed", "federal reserve", "boe", "boj",
    "digitale euro", "cbdc",
    "pincode hoofdstuk 7", "pincode hoofdstuk g",
  ],
  chapters,
  steps,
};

export default pincodeBuitenlandEu;

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
    explanation: "**Internationale handel**: landen kopen en verkopen aan elkaar.\n\n**Export**: NL verkoopt iets aan het buitenland (paprika's, machines, kaas, ASML-chips, Heineken)\n**Import**: NL koopt iets uit het buitenland (olie, koffie, smartphones, fruit uit Spanje)\n\n**Handelsbalans** = export − import\n• **Overschot**: meer export dan import (NL heeft dit meestal)\n• **Tekort**: meer import dan export\n\n**Cijfers NL 2023**:\n• Export: ~€700 miljard\n• Import: ~€650 miljard\n• Handelsoverschot ~€50 miljard\n• 60-70% van export gaat naar EU-landen\n\n**Waarom handelen?**\n\n**Comparatief voordeel** (kern-economie!): elk land is goed in iets anders. Wij kunnen kaas maken, Saoedi-Arabië olie pompen. **Door te ruilen worden we ALLEBEI rijker** — zelfs als 1 land 'beter' is in alles (Ricardo, 1817).\n\n**Schaalvoordelen**: meer afzet = lagere kosten per stuk. Een ASML-machine van €200 mln is alleen rendabel met wereldwijde markt.\n\n**Variatie**: zonder import geen koffie, banaan, avocado in NL. Onze keuken is dankzij import.\n\n**Specialisatie**: NL is super in zuivel, hightech, agro-tech, water-management.\n\n**Nederland als handelsland**:\n• **Rotterdam** = grootste haven van Europa (~440 mln ton goederen/jaar)\n• **Schiphol** = belangrijke vrachtluchthaven (Europa's #4)\n• **Re-export**: spullen komen NL binnen, gaan via NL door naar Duitsland of UK (~50% van NL-export!)\n• Geografisch midden Europa = logistiek voordeel\n\n**Voor- en nadelen handel**:\n• ✓ Goedkopere producten voor consumenten\n• ✓ Meer keuze\n• ✓ Banen in export-sectoren\n• ✗ Banen verloren in sectoren die niet kunnen concurreren\n• ✗ Afhankelijkheid (corona toonde aan: medicijnen uit India, chips uit Taiwan)\n• ✗ Milieu-impact transport\n\n**Belangrijk recent**:\n• China werd grote producent → veel westerse banen verdwenen\n• Nu: 'reshoring' (productie terughalen) wegens afhankelijkheid\n• Geopolitiek (China, Rusland, USA) verstoort handel",
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
        options: ["NL verkoopt iets aan het buitenland", "NL koopt iets uit het buitenland", "Nederlanders die in het buitenland op vakantie gaan", "Een NL bedrijf opent een fabriek in Duitsland"],
        answer: 0,
        wrongHints: [null, "Kopen uit het buitenland heet import. Wat is het omgekeerde?", "Vakantie in het buitenland is juist import (van diensten).", "Een eigen fabriek in het buitenland is een investering daar. Wordt er dan iets aan het buitenland verkocht?"],
        uitlegPad: {
          stappen: [{ titel: "Export = uit-voer", tekst: "Export = NL verkoopt iets aan buitenland (kaas naar DE, ASML-machines naar TW)." }],
          woorden: [{ woord: "export", uitleg: "Verkopen aan ander land. Tegenovergestelde van import." }, { woord: "import", uitleg: "Kopen uit ander land." }],
          theorie: "NL exporteert ~€700 mrd/jaar — kaas, machines, chemie, hightech. Importeert ~€650 mrd — olie, koffie, smartphones.",
          voorbeelden: [{ type: "lijst", tekst: "Heineken-bier naar 200 landen = export. Saudi-olie naar NL = import." }],
          basiskennis: [{ onderwerp: "Ezelsbruggetje", uitleg: "Ex- = uit (zoals 'exit'). Im- = in (zoals 'import' = naar binnen)." }],
          niveaus: { basis: "NL verkoopt aan buitenland.", simpeler: "Export = NL verkoopt aan ander land. Import = NL koopt uit ander land.", nogSimpeler: "Verkopen" },
        },
      },
      {
        q: "Wat is een **comparatief voordeel**?",
        options: ["Je specialiseert je in wat je relatief het best kunt", "Een land kan iets goedkoper maken dan alle anderen", "Een land verkoopt meer aan het buitenland dan het koopt", "Een land heeft goedkope grondstoffen in de bodem"],
        answer: 0,
        wrongHints: [null, "Goedkoper dan alle anderen heet een absoluut voordeel. Waarmee vergelijk je bij 'comparatief'?", "Dat is een handelsoverschot. 'Comparatief' betekent vergelijkend — wat vergelijk je?", "Grondstoffen kunnen helpen, maar zijn niet de definitie. Wat vergelijk je bij een comparatief voordeel?"],
        uitlegPad: {
          stappen: [{ titel: "Relatief beter", tekst: "Elk land is RELATIEF goed in iets. Door te ruilen worden ALLEBEI rijker." }],
          woorden: [{ woord: "comparatief voordeel", uitleg: "Voordeel ten opzichte van iets anders maken. Zelfs als 1 land 'beter' is in alles, loont ruilen (Ricardo 1817)." }],
          theorie: "Land A maakt 100 brood OF 50 wijn. Land B maakt 80 brood OF 60 wijn. A heeft VOORDEEL in brood, B in wijn. Allebei specialiseren + ruilen = meer totaal.",
          voorbeelden: [{ type: "praktijk", tekst: "NL maakt zuivel + chips. Saudi-Arabië pompt olie. Allebei goed in eigen specialiteit → ruilen." }],
          basiskennis: [{ onderwerp: "Niet absoluut", uitleg: "Goedkoopste = absoluut voordeel. Comparatief = waar je RELATIEF beste bent." }],
          niveaus: { basis: "Relatief sterk + ruilen.", simpeler: "Land A is goed in kaas, land B in wijn. Ruilen = beide rijker. Dat is comparatief voordeel.", nogSimpeler: "Specialiseren" },
        },
      },
      {
        q: "Een land heeft een **handelsoverschot**. Wat betekent dat?",
        options: ["Export is groter dan import", "Import is groter dan export", "De overheid houdt geld over op de begroting", "Economie krimpt (recessie)"],
        answer: 0,
        wrongHints: [null, "Dat heet een handelstekort.", "Dat is een begrotingsoverschot. Bij een handelsoverschot gaat het om wat er over de grens gaat.", "Een recessie gaat over krimp van de hele economie. Waar gaat een 'handels'-overschot over?"],
        uitlegPad: {
          stappen: [{ titel: "Over = export > import", tekst: "Overschot = OVER. Land verkoopt MEER dan het koopt." }],
          woorden: [{ woord: "handelsbalans", uitleg: "Export minus import. Plus = overschot, min = tekort." }],
          theorie: "NL heeft meestal handelsoverschot (~€50 mrd/jaar). VS heeft tekort.",
          voorbeelden: [{ type: "rekening", tekst: "Als jij meer verdient dan uitgeeft = overschot in jouw geld-balans." }],
          basiskennis: [{ onderwerp: "Tegenovergesteld", uitleg: "Tekort = import > export." }],
          niveaus: { basis: "Export > import.", simpeler: "Overschot = OVER (te veel). Land verkoopt meer aan buitenland dan het koopt = export groter dan import.", nogSimpeler: "Verkopen > kopen" },
        },
      },
      {
        q: "Waarom is NL een uitgesproken **handelsland**?",
        options: ["Grote havens, Schiphol en centrale ligging", "Lage lonen, dus goedkope exportproducten", "Veel inwoners, dus een grote thuismarkt", "Veel eigen grondstoffen, zoals ijzererts en olie"],
        answer: 0,
        wrongHints: [null, "Nederland heeft juist hoge lonen. Waar verdient NL dan aan als handelsland?", "Nederland is juist klein. Waarom moet een klein land veel handelen, en wat helpt daarbij?", "Nederland heeft weinig eigen grondstoffen; die worden juist ingevoerd. Wat maakt NL dan bijzonder voor handel?"],
        uitlegPad: {
          stappen: [{ titel: "Logistiek = sleutel", tekst: "Rotterdam = grootste haven Europa. Schiphol = een van de grootste vrachtluchthavens van Europa. NL ligt midden in Europa." }],
          woorden: [{ woord: "handelsland", uitleg: "Land waar veel handel doorheen gaat — niet per se eigen productie." }],
          theorie: "Geografie + infrastructuur maken NL aantrekkelijk als doorvoerland. ~50% van export = re-export (binnen-uit doorgevoerd).",
          voorbeelden: [{ type: "feit", tekst: "Rotterdam ~440 mln ton goederen/jaar. Bloemen Aalsmeer = wereldhandel." }],
          basiskennis: [{ onderwerp: "Niet eigen productie", uitleg: "NL is geen 'productie-gigant' maar wel 'handels-hub'." }],
          niveaus: { basis: "Havens + ligging.", simpeler: "NL heeft Rotterdam (grootste haven EU) + Schiphol + ligt midden in Europa = ideaal voor handel.", nogSimpeler: "Havens" },
        },
      },
      {
        q: "Wat is **re-export**?",
        options: ["Goederen komen NL binnen en gaan door naar een ander land", "Grondstoffen die NL invoert, verwerkt en weer uitvoert", "Producten die retour komen en opnieuw verkocht worden", "Nederlandse producten die naar het buitenland gaan"],
        answer: 0,
        wrongHints: [null, "Als NL er een nieuw product van maakt, is het gewone Nederlandse export. Wat is het verschil bij re-export?", "'Re' betekent hier niet 'retour van de klant'. Waar gaan de goederen bij re-export naartoe?", "Dat is gewone export van eigen producten. Waar komen de goederen bij re-export vandaan?"],
        uitlegPad: {
          stappen: [{ titel: "Doorvoer", tekst: "Re-export = goederen komen NL binnen, gaan via NL naar Duitsland of UK. NL is doorgangshuis." }],
          woorden: [{ woord: "re-export", uitleg: "Goederen die NL binnenkomen en weer uitgaan, zonder veel bewerking." }],
          theorie: "~50% van NL-export is re-export (Chinese spullen via Rotterdam → Duitsland). NL = logistiek knooppunt.",
          voorbeelden: [{ type: "praktijk", tekst: "Chinese kleding komt aan in Rotterdam → vrachtwagen naar Berlijn. Re-export." }],
          basiskennis: [{ onderwerp: "Niet 2× verkopen", uitleg: "Re- = opnieuw (heen). Niet hetzelfde 2× verkopen, wel doorvoeren." }],
          niveaus: { basis: "Doorvoer NL → ander land.", simpeler: "Goederen komen NL binnen (uit China) + gaan door naar Duitsland = re-export (doorvoer).", nogSimpeler: "Doorvoer" },
        },
      },
      {
        q: "Welk **risico** brengt internationale afhankelijkheid?",
        options: ["Tekorten bij een verstoring, zoals oorlog", "NL-producten worden te duur in het buitenland", "Buitenlandse bedrijven nemen NL-bedrijven over", "Meer concurrentie voor Nederlandse bedrijven"],
        answer: 0,
        wrongHints: [null, "Afhankelijk zijn gaat over wat je zelf nodig hebt van anderen. Wat gebeurt er als dat ineens niet komt?", "Overnames gaan over wie de eigenaar is. Waarvoor ben je afhankelijk van andere landen?", "Concurrentie komt door vrije handel. Waarvoor ben je afhankelijk van andere landen?"],
        uitlegPad: {
          stappen: [{ titel: "Afhankelijkheid = risico", tekst: "Als je medicijnen uit India komen + India sluit grenzen = tekort hier. Corona toonde dit." }],
          woorden: [{ woord: "supply chain", uitleg: "Toeleverketen — alle stappen van grondstof tot eindproduct, vaak verspreid wereldwijd." }],
          theorie: "Wereldwijde productie = goedkoper, maar kwetsbaar voor verstoring (oorlog, pandemie, sancties).",
          voorbeelden: [{ type: "feit", tekst: "Corona 2020: tekort mondkapjes (uit China). Oorlog Oekraïne: tekort gas (Rusland)." }],
          basiskennis: [{ onderwerp: "Reshoring", uitleg: "Antwoord: kritieke productie terughalen naar EU = minder afhankelijk." }],
          niveaus: { basis: "Tekorten bij verstoring.", simpeler: "Afhankelijk van buitenland = bij oorlog/pandemie geen toegang tot essentiële goederen (medicijnen, chips).", nogSimpeler: "Tekort" },
        },
      },
    ],
  },
  // ─── Stap 2: Beschermingsmaatregelen ────────────────────
  {
    title: "Beschermingsmaatregelen — protectionisme",
    explanation: "Niet alle handel is volledig vrij. Landen gebruiken **beschermingsmaatregelen** om eigen industrie te beschermen.\n\n**Vier hoofdvormen**:\n\n**1. Invoerheffing (importheffing/-tarief)**\n• Belasting bij grens op importproducten\n• Maakt buitenlandse producten duurder → eigen producten relatief goedkoper\n• Bv. EU-heffing op Chinese elektrische auto's (tot ~45%, 2024)\n\n**2. Quotum**\n• Maximum AANTAL dat je mag importeren\n• Bv. 'max 10.000 Chinese kledingstukken/jaar'\n• Boven dat: niet toegestaan of veel duurder\n\n**3. Subsidies**\n• Eigen bedrijven krijgen geld van overheid\n• Maakt hun producten goedkoper, internationaal concurrerender\n• Bv. EU geeft veel subsidies aan boeren (GLB)\n\n**4. Niet-tarifaire belemmeringen**\n• Strenge regels (technisch, milieu, gezondheid) die buitenlandse producten moeilijk maken\n• Bv. EU weert producten met stoffen die in de EU verboden zijn\n• Etikettering, productveiligheid, dier-welzijn\n\n**Voor- en nadelen protectionisme**:\n• ✓ Eigen industrie beschermd → banen behouden\n• ✓ Strategische sectoren niet afhankelijk van buitenland\n• ✓ Reactie op oneerlijke concurrentie (kinderarbeid, dumping)\n• ✗ Duurder voor consument\n• ✗ Verlies efficiëntie (geen comparatief voordeel)\n• ✗ Ander land kan terugslaan (handelsoorlog)\n\n**Vrijhandel** vs **protectionisme**:\n• **Vrijhandel** (Adam Smith, Ricardo): geen barrières, iedereen wint\n• **Protectionisme**: bescherming, eigen industrie eerst\n• EU = vrijhandel intern, protectionisme extern\n\n**Internationaal**:\n• **WTO** (World Trade Organization): regelt globale handel, beslecht geschillen\n• **Vrijhandelsverdragen**: bijvoorbeeld EU-Canada (CETA), EU-Japan\n• **Sancties**: bewuste handelsbeperking als straf (bv. Rusland 2022)\n\n**Recente trends**:\n• Trump (2018-2020 en opnieuw vanaf 2025): forse importheffingen op China, EU-staal\n• China-EU spanning over EV's (2024)\n• 'Reshoring': productie terug naar eigen continent\n• Klimaat: import-CO2-heffing (CBAM) op koolstof-intensieve producten",
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
        options: ["Belasting op importproducten aan de grens", "Een soort BTW op alle producten", "Belasting op producten die je exporteert", "Een maximum op de invoer van een product"],
        answer: 0,
        wrongHints: [null, "Btw betaal je op bijna alles, ook op Nederlandse producten. Waarvoor geldt een invoerheffing alleen?", "Kijk naar het woord: gaat het om invoer of om uitvoer?", "Dat is een quotum: een grens aan de hoeveelheid. Bij een heffing betaal je iets — over wat?"],
        uitlegPad: {
          stappen: [{ titel: "Belasting bij grens", tekst: "Invoerheffing = belasting die je moet betalen bij invoer van goederen. Maakt buitenlandse producten duurder." }],
          woorden: [{ woord: "invoerheffing", uitleg: "Belasting bij grens op import. Ook: importtarief." }],
          theorie: "Doel: eigen producenten beschermen tegen goedkope import. Bv. EU-heffing op Chinese EVs (tot ~45%, 2024).",
          voorbeelden: [{ type: "praktijk", tekst: "Chinese fiets €100 → na 30% heffing = €130 → EU-fiets van €120 lijkt aantrekkelijker." }],
          basiskennis: [{ onderwerp: "Niet BTW", uitleg: "BTW = op alle producten (binnen+buiten). Invoerheffing = alleen import." }],
          niveaus: { basis: "Belasting op import.", simpeler: "Invoerheffing = belasting aan de grens, alleen op spullen uit het buitenland.", nogSimpeler: "Grens-belasting" },
        },
      },
      {
        q: "Wat is een **quotum**?",
        options: ["Maximum aantal dat je mag importeren", "Een belasting op importproducten", "Een minimumprijs voor importproducten", "Een verdrag tussen twee landen"],
        answer: 0,
        wrongHints: [null, "Een belasting op import heet een invoerheffing. Een quotum werkt anders — hoe?", "Een quotum gaat niet over de prijs. Wat beperkt het dan wel?", "Een quotum kan in een verdrag staan, maar is zelf een maatregel. Wat beperkt het?"],
        uitlegPad: {
          stappen: [{ titel: "Maximum-aantal", tekst: "Quotum = maximaal X stuks/jaar. Boven dat = niet toegestaan of veel duurder." }],
          woorden: [{ woord: "quotum", uitleg: "Vaste limiet op aantal of hoeveelheid." }],
          theorie: "Quotum vs heffing: quotum = aantal, heffing = geld. Beide beschermen eigen markt.",
          voorbeelden: [{ type: "praktijk", tekst: "Stel: de EU laat max 10.000 ton Chinese kleding per jaar binnen. Boven dat = extra belast." }],
          basiskennis: [{ onderwerp: "Strikt", uitleg: "Quotum is harde grens, geen onderhandeling." }],
          niveaus: { basis: "Maximum aantal.", simpeler: "Quotum = max aantal dat je mag importeren. Bv. max 10.000 stuks. Boven dat: niet binnen.", nogSimpeler: "Max" },
        },
      },
      {
        q: "Een **subsidie** voor eigen bedrijven:",
        options: ["Maakt hun producten goedkoper op de wereldmarkt", "Maakt buitenlandse producten in NL goedkoper", "Heeft geen effect, want de markt bepaalt de prijs", "Werkt als een invoerheffing op buitenlandse producten"],
        answer: 0,
        wrongHints: [null, "De subsidie gaat naar je éígen bedrijven. Wiens kosten dalen dan?", "Als de overheid meebetaalt, veranderen je kosten dan echt niet?", "Een heffing maakt buitenlandse producten duurder; bij een subsidie betaalt de overheid juist mee. Aan wie?"],
        uitlegPad: {
          stappen: [{ titel: "Geld erbij = goedkoper produceren", tekst: "Eigen bedrijf krijgt geld van overheid → kan goedkoper produceren → meer concurrerend." }],
          woorden: [{ woord: "subsidie", uitleg: "Geld van overheid om iets te stimuleren (bv. zonnepanelen, eigen industrie)." }],
          theorie: "EU geeft veel subsidies aan boeren (GLB) en innovatieve sectoren (chips).",
          voorbeelden: [{ type: "feit", tekst: "Overheden (NL/EU) steunen chip-onderzoek met subsidies, o.a. via de EU Chips Act." }],
          basiskennis: [{ onderwerp: "Niet altijd toegestaan", uitleg: "WTO heeft regels — bepaalde subsidies mogen, andere niet (concurrentievervalsing)." }],
          niveaus: { basis: "Goedkoper produceren.", simpeler: "Subsidie = geld erbij van overheid → eigen bedrijf produceert goedkoper → kan beter concurreren.", nogSimpeler: "Goedkoper" },
        },
      },
      {
        q: "Welke organisatie regelt globale handelsregels?",
        options: ["WTO (Wereldhandelsorganisatie)", "EU (Europese Unie)", "VN (Verenigde Naties)", "IMF (Internationaal Monetair Fonds)"],
        answer: 0,
        wrongHints: [null, "De EU maakt handelsregels voor Europa. De vraag gaat over de hele wereld.", "De VN gaat vooral over vrede en mensenrechten. Is er een aparte wereldorganisatie voor handel?", "Het IMF leent geld aan landen in geldnood, maar maakt geen handelsregels. Welke organisatie doet dat wel?"],
        uitlegPad: {
          stappen: [{ titel: "WTO = wereld-handel", tekst: "WTO = World Trade Organization. Regelt handel tussen landen + beslecht geschillen." }],
          woorden: [{ woord: "WTO", uitleg: "Wereldhandelsorganisatie. Hoofdkwartier Genève. ~166 leden." }],
          theorie: "WTO maakt handelsverdragen + regelt klachten (bv. EU klaagt China aan voor dumping).",
          voorbeelden: [{ type: "feit", tekst: "WTO 1995 opgericht (opvolger GATT). Bepaalt wat wel/niet mag bij invoerheffingen." }],
          basiskennis: [{ onderwerp: "Niet hetzelfde als VN", uitleg: "VN = vredesorganisatie. WTO = handelsspecifiek." }],
          niveaus: { basis: "WTO.", simpeler: "World Trade Organization (WTO) regelt globale handel. EU is regionaal, ECB is over euro.", nogSimpeler: "WTO" },
        },
      },
      {
        q: "**Reshoring** is:",
        options: ["Productie terughalen naar eigen regio", "Productie verplaatsen naar lagelonenlanden", "Productie uitbesteden aan een ander bedrijf", "Vrijhandel met meer landen uitbreiden"],
        answer: 0,
        wrongHints: [null, "Dat heet offshoring. Wat betekent 're-' in reshoring?", "Uitbesteden heet outsourcing. Waar gaat de productie bij reshoring naartoe?", "Reshoring gaat over wáár je produceert, niet over handelsverdragen."],
        uitlegPad: {
          stappen: [{ titel: "Re- = terug", tekst: "Reshoring = productie terughalen die eerder naar lage-loon-landen ging (China, India)." }],
          woorden: [{ woord: "reshoring", uitleg: "Productie terughalen naar eigen land/continent. Tegenovergestelde van offshoring." }],
          theorie: "Trend na corona/oorlog: bedrijven willen minder afhankelijk van verre productie. Chips, medicijnen terug naar EU/VS.",
          voorbeelden: [{ type: "feit", tekst: "Intel plande een chipfabriek in Duitsland (€30 mrd), maar zette dat plan in 2025 stop. TSMC bouwt wel een fabriek in Dresden. EU CHIPS Act stimuleert reshoring." }],
          basiskennis: [{ onderwerp: "Tegenovergestelde", uitleg: "Offshoring = naar buitenland. Reshoring = terug." }],
          niveaus: { basis: "Productie terug naar eigen continent.", simpeler: "Reshoring = productie weer in eigen land/EU doen, ipv China. Vooral kritieke sectoren (chips, medicijnen).", nogSimpeler: "Terug" },
        },
      },
      {
        q: "Voor- en nadeel protectionisme:",
        options: ["VOORDEEL: eigen banen beschermd. NADEEL: duurder voor consument", "VOORDEEL: eigen banen beschermd. NADEEL: minder belastinggeld", "VOORDEEL: meer keus in de winkel. NADEEL: eigen banen verdwijnen", "VOORDEEL: meer keus in de winkel. NADEEL: duurder voor consument"],
        answer: 0,
        wrongHints: [null, "Invoerheffingen brengen de overheid juist geld op. Welk nadeel hoort er dan wel bij?", "Protectionisme houdt buitenlandse producten tegen. Krijg je dan meer of minder keus?", "Protectionisme houdt buitenlandse producten tegen. Krijg je dan meer of minder keus?"],
        uitlegPad: {
          stappen: [{ titel: "Trade-off", tekst: "Protectionisme = eigen banen beschermen MAAR consument betaalt meer voor producten." }],
          woorden: [{ woord: "trade-off", uitleg: "Voordeel kost iets — niet alleen plus." }],
          theorie: "Bescherming = minder import = minder concurrentie = duurdere prijzen voor consument. Maar wel meer banen in eigen land.",
          voorbeelden: [{ type: "feit", tekst: "EU heffing Chinese auto's = goed voor EU-fabriek, slecht voor EU-koper (duurdere auto)." }],
          basiskennis: [{ onderwerp: "Geen 'gratis' beleid", uitleg: "Alle handelsbeleid heeft winnaars + verliezers." }],
          niveaus: { basis: "Voor + nadeel.", simpeler: "Protectionisme: voordeel = banen beschermd; nadeel = duurder voor consument. Beide kanten.", nogSimpeler: "Trade-off" },
        },
      },
    ],
  },
  // ─── Stap 3: Europese Unie ──────────────────────────────
  {
    title: "De Europese Unie — 27 landen, 1 markt",
    explanation: "**EU** = 27 Europese landen die samenwerken op handel, wetgeving en politiek.\n\n**Belangrijkste afspraken**:\n\n**1. Vrije handel**: geen invoerheffingen tussen lidstaten — een Belgische pizza in NL kost niet meer dan in België.\n\n**2. Vrij verkeer (4 vrijheden)**:\n• **Goederen** — geen grenscontrole\n• **Personen** — werken/wonen waar je wilt\n• **Diensten** — bedrijf in een ander EU-land openen\n• **Kapitaal** — geld vrij verplaatsen\n\n**3. Eén markt**: alsof EU-landen 1 land zijn voor handel.\n\n**4. Gezamenlijke wetten**: milieu, voedselveiligheid, consumentenbescherming, mededinging.\n\n**De Eurozone** (= subset van EU):\n• 21 landen die de euro gebruiken (NL, DE, FR, IT, ES, BE, etc. — sinds 1 januari 2026 ook Bulgarije)\n• NIET alle EU-landen: Polen, Zweden, Denemarken hebben eigen valuta\n• UK was lid → Brexit 2020\n\n**Structuur EU**:\n• **Europees Parlement**: direct gekozen, 720 leden\n• **Raad van de EU**: ministers uit lidstaten\n• **Europese Commissie**: 'regering', maakt voorstellen\n• **Hof van Justitie EU**: rechtspraak\n• **ECB** (zie stap 7)\n\n**Voordelen voor NL**:\n• 60-70% van NL-export gaat naar EU-landen\n• Geen wisselkosten of -risico binnen eurozone\n• NL bedrijf kan in heel EU verkopen zonder grenzen\n• EU onderhandelt sterker dan 27 losse landen\n\n**Nadelen**:\n• Minder eigen zeggenschap (Brusselse regels)\n• Bijdrage aan EU-begroting (NL is netto betaler: enkele miljarden per jaar)\n• Bij crisis in andere landen draagt NL mee (Griekse staatsschuld)\n• Snel groeiende regelgeving (regulering uit Brussel)\n\n**Brexit (2016-2020)**:\n• UK wilde controle terug over wetten + grenzen\n• Resultaat: minder handel met EU, problemen logistiek (Noord-Ierland), economie geleden\n• Lessen: vertrek uit de EU is complex en duur\n\n**Recente discussies**:\n• Migratie (asielbeleid)\n• Klimaatbeleid (Green Deal)\n• China-strategie\n• Uitbreiding (Oekraïne, Westelijke Balkan)\n• Macht ECB",
    svg: `<svg viewBox="0 0 320 200">
<text x="160" y="22" text-anchor="middle" fill="${COLORS.warm}" font-size="13" font-family="Arial" font-weight="bold">EUROPESE UNIE</text>
<circle cx="160" cy="105" r="65" fill="${COLORS.paper}" stroke="${COLORS.vraag}" stroke-width="2"/>
<text x="160" y="92" text-anchor="middle" fill="${COLORS.vraag}" font-size="14" font-family="Arial" font-weight="bold">EU</text>
<text x="160" y="110" text-anchor="middle" fill="${COLORS.text}" font-size="11" font-family="Arial">27 landen</text>
<text x="160" y="125" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">1 markt</text>
<text x="160" y="138" text-anchor="middle" fill="${COLORS.text}" font-size="9" font-family="Arial">vrij verkeer</text>
<circle cx="160" cy="105" r="32" fill="none" stroke="${COLORS.warm}" stroke-width="1.5" stroke-dasharray="3 2"/>
<text x="160" y="65" text-anchor="middle" fill="${COLORS.warm}" font-size="9" font-family="Arial" font-weight="bold">€ eurozone (21)</text>
<text x="160" y="190" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">vrije: goederen · personen · diensten · kapitaal</text>
</svg>`,
    checks: [
      {
        q: "Hoeveel landen zitten in de EU?",
        options: ["27", "20", "50", "12"],
        answer: 0,
        wrongHints: [null, "Dat lijkt op de eurozone (nu 21 landen), niet de EU.", "Zoveel landen telt bijna heel Europa — maar landen als Noorwegen, Zwitserland en het Verenigd Koninkrijk zitten er niet in.", "Zo groot was de EEG rond 1986; sindsdien zijn er veel landen bijgekomen."],
        uitlegPad: {
          stappen: [{ titel: "27 sinds Brexit", tekst: "EU = 27 landen. Was 28 met UK, na Brexit (2020) = 27." }],
          woorden: [{ woord: "EU", uitleg: "Europese Unie. Politieke + economische samenwerking 27 Europese landen." }],
          theorie: "Geschiedenis: 1957 EEG (6 landen) → 2007 EU 27 → 2013 28 (Kroatië) → 2020 27 (Brexit).",
          voorbeelden: [{ type: "groei", tekst: "Begon klein (NL/BE/LUX/DE/FR/IT) → uitgebreid naar Oost-Europa 2004." }],
          basiskennis: [{ onderwerp: "Niet hetzelfde als eurozone", uitleg: "Eurozone = 21 landen die EURO gebruiken (subset EU)." }],
          niveaus: { basis: "27.", simpeler: "EU heeft 27 lidstaten (sinds Brexit 2020). Eurozone is 21.", nogSimpeler: "27" },
        },
      },
      {
        q: "Welk land gebruikt de **euro NIET**?",
        options: ["Polen", "Frankrijk", "Spanje", "Duitsland"],
        answer: 0,
        wrongHints: [null, "In Frankrijk betaal je al sinds 2002 met de euro.", "In Spanje betaal je al sinds 2002 met de euro.", "Duitsland betaalt sinds 2002 met de euro; de ECB zit zelfs in Frankfurt."],
        uitlegPad: {
          stappen: [{ titel: "Polen = złoty", tekst: "Polen is EU-lid maar gebruikt eigen valuta (złoty). Geen euro." }],
          woorden: [{ woord: "eurozone", uitleg: "21 EU-landen die euro hebben (sinds 2026 ook Bulgarije). Subset EU." }],
          theorie: "EU-landen ZONDER euro: Polen, Tsjechië, Hongarije, Zweden, Denemarken, Roemenië. Bulgarije doet sinds 1 januari 2026 wél mee.",
          voorbeelden: [{ type: "lijst", tekst: "Wel euro: NL, FR, DE, ES, IT, PT, IE, BE, AT, FI..." }],
          basiskennis: [{ onderwerp: "Vrijwillig", uitleg: "EU-lidmaatschap ≠ euro verplicht. Sommige landen kiezen ervoor weg te blijven." }],
          niveaus: { basis: "Polen.", simpeler: "Polen heeft eigen valuta (złoty), geen euro. FR/ES/DE wel.", nogSimpeler: "Polen" },
        },
      },
      {
        q: "Wat zijn de **4 vrijheden** EU?",
        options: ["Goederen, personen, diensten, kapitaal", "Handel, landbouw, visserij, energie", "Vrede, veiligheid, welvaart, democratie", "Meningsuiting, religie, pers, vereniging"],
        answer: 0,
        wrongHints: [null, "Dat zijn onderwerpen waar de EU beleid op maakt, geen vrijheden. Wat mag er vrij over de grens?", "Dat zijn doelen en waarden van de EU. Bij de vier vrijheden gaat het om economie.", "Dat zijn grondrechten van burgers. De vier vrijheden gaan over wat er vrij over de grens mag."],
        uitlegPad: {
          stappen: [{ titel: "4 = G-P-D-K", tekst: "Goederen, Personen, Diensten, Kapitaal — vrij verkeer binnen EU." }],
          woorden: [{ woord: "4 vrijheden", uitleg: "Kern van EU-binnenmarkt sinds 1993." }],
          theorie: "Goederen=geen grenscontrole. Personen=werken/wonen waar je wilt. Diensten=bedrijf openen overal. Kapitaal=geld vrij verplaatsen.",
          voorbeelden: [{ type: "praktijk", tekst: "Pool werkt in NL bouw (personen). NL-kaas naar FR zonder heffing (goederen)." }],
          basiskennis: [{ onderwerp: "Onthouden", uitleg: "G-P-D-K. 4 letters voor 4 vrijheden." }],
          niveaus: { basis: "G+P+D+K.", simpeler: "EU 4 vrijheden = vrij verkeer van Goederen, Personen, Diensten, Kapitaal binnen alle EU-landen.", nogSimpeler: "GPDK" },
        },
      },
      {
        q: "Wat is de **Europese Commissie**?",
        options: ["Dagelijks bestuur van de EU, doet wetsvoorstellen", "Het parlement dat door burgers gekozen wordt", "Het hof dat rechtspreekt over EU-wetten", "De centrale bank die over de euro en de rente gaat"],
        answer: 0,
        wrongHints: [null, "Dat is het Europees Parlement, dat over wetten stemt. Wie bedenkt die wetten eerst?", "Dat is het Hof van Justitie.", "Dat is de ECB (Europese Centrale Bank)."],
        uitlegPad: {
          stappen: [{ titel: "Commissie = regering", tekst: "Europese Commissie = uitvoerende macht EU. Maakt wetsvoorstellen + voert uit." }],
          woorden: [{ woord: "Europese Commissie", uitleg: "EU-regering, 27 commissarissen (1 per land). Voorzitter: Ursula von der Leyen (2024)." }],
          theorie: "EU-instellingen: Commissie (regering), Parlement (wetgever, 720 leden gekozen), Raad (ministers lidstaten), Hof van Justitie (rechter), ECB (bank).",
          voorbeelden: [{ type: "feit", tekst: "Commissie stelt voor: 'geen nieuwe benzine- en dieselauto's meer vanaf 2035'. Parlement + Raad keuren goed." }],
          basiskennis: [{ onderwerp: "Niet gekozen", uitleg: "Commissarissen worden voorgedragen door regeringen, niet direct gekozen." }],
          niveaus: { basis: "Regering.", simpeler: "Europese Commissie = 'regering' van EU — maakt voorstellen + voert beleid uit. Parlement = wetgever.", nogSimpeler: "Regering" },
        },
      },
      {
        q: "Wat was **Brexit**?",
        options: ["UK verliet de EU", "UK trad toe tot de EU", "UK stopte met de euro", "Schotland verliet de UK"],
        answer: 0,
        wrongHints: [null, "De UK was al sinds 1973 lid. Wat betekent 'exit'?", "De UK heeft nooit met de euro betaald. Waaruit stapte het land dan?", "Schotland stemde in 2014 juist om bij de UK te blijven. Over welk vertrek ging Brexit?"],
        uitlegPad: {
          stappen: [{ titel: "Britain + Exit", tekst: "Brexit = Britain Exit. UK verliet officieel EU op 31 januari 2020." }],
          woorden: [{ woord: "Brexit", uitleg: "Vertrek UK uit EU. Referendum 2016 → exit 2020." }],
          theorie: "Reden: UK wilde controle over wetten + grenzen. Resultaat: minder handel met EU, problemen Noord-Ierland.",
          voorbeelden: [{ type: "feit", tekst: "UK is het enige land dat de EU ooit verlaten heeft." }],
          basiskennis: [{ onderwerp: "Lessen", uitleg: "Brexit liet zien dat EU-vertrek complex en duur is — afschrikwekkend voor andere landen." }],
          niveaus: { basis: "UK weg.", simpeler: "Brexit (Britain + Exit) = UK verliet EU in 2020 na referendum 2016.", nogSimpeler: "Vertrek UK" },
        },
      },
      {
        q: "Voordeel **euro voor toerist**:",
        options: ["Geen wisselkosten binnen de eurozone", "Overal in Europa dezelfde prijzen", "Geen paspoortcontrole bij de grens", "Een vaste koers met de Amerikaanse dollar"],
        answer: 0,
        wrongHints: [null, "Een kop koffie kost in Italië nog steeds iets anders dan in Nederland. Wat scheelt de euro je dan wel?", "Dat komt door het Schengenverdrag, niet door de euro. Wat merk je van de euro in je portemonnee?", "De koers van de euro tegenover de dollar schommelt gewoon. Wat merk je binnen de eurozone?"],
        uitlegPad: {
          stappen: [{ titel: "Geen wissel = geen kosten", tekst: "Met euro hoef je in 21 landen niets te wisselen — geen kosten, geen koersrisico." }],
          woorden: [{ woord: "wisselkosten", uitleg: "Bank/wisselkantoor neemt commissie + slechtere koers." }],
          theorie: "Vóór de euro (tot 2002): toerist NL→IT moest guldens → lires wisselen, kostte 5-10%. Nu: zelfde euro overal in eurozone.",
          voorbeelden: [{ type: "praktijk", tekst: "Vakantie Spanje: euro in portemonnee werkt direct, geen extra kosten." }],
          basiskennis: [{ onderwerp: "Buiten eurozone", uitleg: "Buiten eurozone (UK, Polen, US, Thailand) wel wisselen nodig." }],
          niveaus: { basis: "Geen wisselkosten.", simpeler: "Met euro hoef je in 21 EU-landen niet te wisselen — bespaart kosten + koersrisico.", nogSimpeler: "Geen wissel" },
        },
      },
    ],
  },
  // ─── Stap 4: Wisselkoersen en de euro ─────────────────
  {
    title: "Wisselkoersen — wat is jouw euro waard?",
    explanation: "**Wisselkoers** = de prijs van de ene valuta in de andere. Voorbeeld: €1 = $1,10 = ¥160.\n\nWisselkoersen veranderen elke dag (en seconde) op de **valutamarkt**. Door:\n• Vraag en aanbod naar valuta\n• Rente-verschillen tussen landen (hogere rente trekt geld aan)\n• Politieke onzekerheid (oorlog, verkiezingen)\n• Economische groei\n• Inflatieverschillen\n\n**Sterke euro** (€1 = $1,30):\n• **Importeren wordt goedkoper** (Amerikaanse iPhone kost minder euro)\n• **Exporteren wordt duurder** (Amerikaanse klanten moeten meer dollar)\n• Toerisme NL → VS goedkoper\n\n**Zwakke euro** (€1 = $1,00):\n• Andersom: import duur, export aantrekkelijk\n• Toerisme NL → VS duur\n\n**Voor jou als toerist**:\n• Vlucht naar Bangkok: blijf op huidige koers letten\n• Geld wisselen op luchthaven = duur (slechte koers + commissie)\n• Beter: pinnen ter plaatse met je gewone bankpas\n\n**Waarom euro voor 21 landen één is**:\n• Geen wisselkoersrisico binnen eurozone\n• Geen wisselkosten\n• Prijzen makkelijk vergelijkbaar\n• ECB bewaakt de waarde van de euro (zie stap 7)\n\n**Belangrijke valuta**:\n• **USD** (US dollar) — wereldreservevaluta\n• **EUR** (euro) — 21 landen\n• **GBP** (Brits pond) — UK\n• **JPY** (Japanse yen) — Japan\n• **CNY** (Chinese yuan) — China, deels gereguleerd\n• **CHF** (Zwitserse frank) — Zwitserland, 'safe haven'\n\n**Wisselkoers-systemen**:\n• **Vrije zwevende koers**: markt bepaalt (USD, EUR, JPY)\n• **Gereguleerde koers**: overheid controleert (CNY deels)\n• **Vaste koers**: overheid garandeert (Hong Kong dollar aan USD)\n\n**Effect inflatie op wisselkoers**:\n• Hoge inflatie in de eurozone → euro daalt vs valuta met lage inflatie\n• Mensen verkiezen sterke valuta\n\n**Speculatie**:\n• Grote handelaren (banken, hedge funds) verdienen aan kleine bewegingen\n• Soms aanvallen op zwakke valuta (Soros vs Brits pond, 1992)\n\n**Voorbeeld vakantie**:\n• Reis Bali, kost 5 mln Indonesische rupiah\n• Bij koers 16.000 IDR per euro = €312\n• Bij koers 18.000 IDR per euro = €278\n→ Verschil €34. Het verschil zit soms gewoon in 'wanneer je gaat'.",
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
        wrongHints: [null, "Een euro is méér waard dan een dollar. Heb je dan meer of minder euro's nodig dan dollars?", "Je hebt 220 met 1,10 vermenigvuldigd. Krijg je voor één euro meer of minder dan één dollar?", "Dat is precies de helft van 220. Hoeveel dollar krijg je eigenlijk voor €110?"],
        uitlegPad: {
          stappen: [{ titel: "Delen door koers", tekst: "$220 ÷ $1,10 per euro = €200." }],
          woorden: [{ woord: "wisselkoers", uitleg: "Prijs van valuta in andere valuta. €1 = $1,10 betekent: voor 1 euro krijg je $1,10." }],
          theorie: "Van vreemde valuta naar euro: deel door koers. $220 / 1,10 = €200.",
          voorbeelden: [{ type: "stap", tekst: "$220 / $1,10 = €200. Check: €200 × 1,10 = $220 ✓." }],
          basiskennis: [{ onderwerp: "Niet vermenigvuldigen", uitleg: "$220 × 1,10 = $242 (fout). We willen euro, niet meer dollar." }],
          niveaus: { basis: "€200.", simpeler: "$220 ÷ 1,10 (euro-koers) = €200 nodig.", nogSimpeler: "€200" },
        },
      },
      {
        q: "De euro is **sterk** geworden. Effect voor NL-exporteur?",
        options: ["Exporteren naar VS wordt duurder voor Amerikanen", "Exporteren naar VS wordt goedkoper voor Amerikanen", "De dollarprijs voor Amerikanen blijft gelijk", "Importeren uit de VS wordt duurder voor NL"],
        answer: 0,
        wrongHints: [null, "Moeten Amerikanen voor één euro nu méér of minder dollars betalen?", "Een sterke euro kost meer dollars. Merken Amerikaanse klanten dat niet?", "Met een sterke euro krijg je meer dollars voor je geld. Wordt importeren dan duurder of goedkoper?"],
        uitlegPad: {
          stappen: [{ titel: "Sterke euro = duurder export", tekst: "Sterke euro = $1 koopt minder euro = Amerikaan moet meer dollars geven voor NL-product." }],
          woorden: [{ woord: "sterke valuta", uitleg: "Valuta is meer waard t.o.v. andere. Bv. €1 = $1,30 i.p.v. $1,10." }],
          theorie: "NL-exporteur: prijs in euro blijft, maar Amerikaan betaalt meer dollar = duurder voor hem = minder verkoop.",
          voorbeelden: [{ type: "stap", tekst: "Kaas €100. Bij €1=$1,10 → US-koper betaalt $110. Bij €1=$1,30 → US-koper betaalt $130 (duurder)." }],
          basiskennis: [{ onderwerp: "Andersom voor import", uitleg: "Sterke euro = goedkoop importeren (Amerikaanse iPhone wordt minder euro)." }],
          niveaus: { basis: "Duurder voor US-koper.", simpeler: "Sterke euro: Amerikaan moet meer dollars geven voor NL-product → duurder → minder verkoop.", nogSimpeler: "Duurder" },
        },
      },
      {
        q: "Wat veroorzaakt **wisselkoers-verandering**?",
        options: ["Vraag en aanbod, gestuurd door rente en inflatie", "Een besluit van de regering of de ECB", "De goudvoorraad en de hoeveelheid munten", "Het aantal inwoners en de grootte van het land"],
        answer: 0,
        wrongHints: [null, "Bij een vrij zwevende koers zet niemand de koers vast. Hoe komt de prijs van een munt dan tot stand?", "Vroeger was geld gekoppeld aan goud, nu niet meer. Wat bepaalt de koers nu?", "Vroeger was geld gekoppeld aan goud, nu niet meer. Wat bepaalt de koers nu?"],
        uitlegPad: {
          stappen: [{ titel: "4 hoofdfactoren", tekst: "Wisselkoers verandert door: vraag/aanbod, renteverschil, politiek, inflatie." }],
          woorden: [{ woord: "valutamarkt", uitleg: "Wereldwijde markt waar valuta verhandeld worden. 24/7." }],
          theorie: "Hogere rente = meer kapitaal stroomt naar dat land = valuta sterker. Hoge inflatie = valuta zwakker.",
          voorbeelden: [{ type: "feit", tekst: "ECB verhoogt rente → euro sterker. Brexit → pond zwakker (politieke onzekerheid)." }],
          basiskennis: [{ onderwerp: "Veel factoren", uitleg: "Geen enkelvoudige oorzaak — combinatie." }],
          niveaus: { basis: "4 factoren.", simpeler: "Wisselkoers verandert door vraag/aanbod, rente, politiek (oorlog/verkiezingen), inflatie.", nogSimpeler: "Meerdere" },
        },
      },
      {
        q: "Wat is een **'safe haven'-valuta**?",
        options: ["Valuta waar beleggers in een crisis naartoe vluchten", "Valuta met de hoogste rente ter wereld", "Valuta die stijgt als de wereldeconomie groeit", "Een cryptovaluta zoals bitcoin of ether"],
        answer: 0,
        wrongHints: [null, "Een hoge rente trekt beleggers als het goed gaat, maar is vaak risicovol. Wat zoeken beleggers als het onrustig is?", "Zulke munten heten juist 'risicovaluta'. Welke rol speelt een safe haven?", "Bitcoin schommelt juist enorm in waarde. Is dat veilig in een crisis?"],
        uitlegPad: {
          stappen: [{ titel: "Veilige haven", tekst: "Safe haven = veilige plek bij storm. Bij economische crisis/oorlog vluchten beleggers naar stabiele valuta." }],
          woorden: [{ woord: "safe haven", uitleg: "Engels voor veilige haven. Asset waar mensen naar vluchten bij onzekerheid." }],
          theorie: "Klassieke safe havens: USD (dollar), CHF (Zwitserse frank), goud, JPY. Stabiele economieën + politiek.",
          voorbeelden: [{ type: "feit", tekst: "Oorlog Oekraïne 2022: dollar + CHF werden sterker, terwijl rubel kelderde." }],
          basiskennis: [{ onderwerp: "Niet crypto", uitleg: "Crypto is volatiel = tegenovergestelde van safe haven." }],
          niveaus: { basis: "Vluchthaven valuta.", simpeler: "Safe haven = valuta waar beleggers naar vluchten bij crisis (CHF, USD). Stabiele landen.", nogSimpeler: "Veilig" },
        },
      },
      {
        q: "Voor een **toerist**: waar wisselen meestal slechtste koers?",
        options: ["Bij een wisselkantoor op de luchthaven", "Door ter plaatse te pinnen met je pas", "Bij je eigen bank, vooraf in NL", "Online via de app van je bank"],
        answer: 0,
        wrongHints: [null, "Pinnen ter plaatse is meestal juist goedkoop. Waar betaal je extra voor het gemak?", "Je eigen bank rekent meestal een redelijke koers. Waar is het duurst, omdat je daar weinig keus hebt?", "Via de app vergelijk je makkelijk en is het vaak gunstig. Waar betaal je het meest voor gemak?"],
        uitlegPad: {
          stappen: [{ titel: "Vliegveld = duur", tekst: "Wisselkantoor luchthaven heeft hoge commissie + slechtere koers (gevangen klanten)." }],
          woorden: [{ woord: "commissie", uitleg: "Bedrag dat wisselkantoor inhoudt voor de service." }],
          theorie: "Beter: pinnen ter plaatse met gewone bankpas (kleinste marges) of vooraf bij eigen bank.",
          voorbeelden: [{ type: "feit", tekst: "Wisselkantoren op luchthavens zitten vaak een paar procent onder de marktkoers." }],
          basiskennis: [{ onderwerp: "Tip", uitleg: "Pin op je vakantie alleen voor cash dat je echt nodig hebt." }],
          niveaus: { basis: "Luchthaven.", simpeler: "Wisselkantoor luchthaven = slechtste koers + hoge commissie. Pinnen ter plaatse beter.", nogSimpeler: "Vliegveld" },
        },
      },
      {
        q: "Wat is een **vrije zwevende koers**?",
        options: ["Vraag en aanbod op de markt bepalen de koers", "Koers die binnen een vaste bandbreedte mag schommelen", "Koers die de centrale bank elke maand vaststelt", "Koers die vrij is van wisselkosten voor toeristen"],
        answer: 0,
        wrongHints: [null, "Een bandbreedte is een tussenvorm: de overheid grijpt in bij de grenzen. Zweeft de koers dan vrij?", "Als een bank de koers vaststelt, zweeft hij dan nog vrij?", "Wisselkosten rekent de bank. 'Vrij zwevend' gaat over hoe de koers zelf tot stand komt."],
        uitlegPad: {
          stappen: [{ titel: "Markt bepaalt", tekst: "Vrije zwevende koers = vraag/aanbod bepaalt prijs. Overheid grijpt niet in." }],
          woorden: [{ woord: "zwevende koers", uitleg: "Koers beweegt vrij op markt — geen vaste waarde." }],
          theorie: "3 systemen: vrij zwevend (USD, EUR), gereguleerd (CNY deels), vast (HKD aan USD).",
          voorbeelden: [{ type: "lijst", tekst: "USD/EUR/JPY zweven vrij. China stuurt yuan deels. Hong Kong dollar = vast aan USD." }],
          basiskennis: [{ onderwerp: "Voor- en nadeel", uitleg: "Vrij = flexibel maar onvoorspelbaar. Vast = stabiel maar moeilijk te handhaven." }],
          niveaus: { basis: "Markt bepaalt.", simpeler: "Vrije zwevende koers = vraag + aanbod op valutamarkt bepaalt prijs. Overheid blijft erbuiten.", nogSimpeler: "Markt" },
        },
      },
    ],
  },
  // ─── Stap 5: Globalisering ──────────────────────────────
  {
    title: "Globalisering — de wereld als één markt",
    explanation: "**Globalisering** = wereld wordt steeds meer verbonden — handel, communicatie, reizen.\n\n**Hoe is het zo gekomen?**\n• Goedkoper transport (vrachtschepen, vliegtuigen)\n• Internet (snel info uitwisselen, online winkelen)\n• Containers (gestandaardiseerd → veel goederen tegelijk)\n• Vrijhandelsverdragen\n• Engels als wereldtaal\n• Gevallen muren (Berlijn 1989, China economisch open)\n\n**Multinationals** (mondiale bedrijven):\n• **Hollands** voorbeeld: Shell (olie/energie), ASML (chipmachines), Heineken (bier), Unilever (consumentengoederen)\n• **Wereldwijd**: Apple, Amazon, Google, Toyota, Samsung, McDonald's\n• Hebben vestigingen in 10+ landen, kunnen winst verschuiven (belastingontwijking)\n\n**Voor- en nadelen globalisering**:\n\n**Winnaars**:\n• Consumenten (goedkope producten, meer keuze)\n• Multinationals\n• Productie-arbeiders in arme landen (banen)\n• Westerse hoogopgeleiden (kunnen wereldwijd werken)\n\n**Verliezers**:\n• Westerse fabrieksarbeiders (banen weg naar lage-loon-landen)\n• Lokaal MKB (concurrentie wereldwijd)\n• Milieu (transport CO2, vervuiling)\n\n**Anti-globalisering**:\n• Mensen voelen zich vergeten\n• Politieke groei van protectionisme (Trump, Brexit, RN)\n• Zorgen over identiteit, cultuur\n\n**Globalisering en arme landen**:\n• Veel banen in textiel, elektronica gemaakt in China, Bangladesh, Vietnam\n• Lonen daar zijn laag (per westerse standaard) maar hoger dan landbouw\n• Bv. in een textielfabriek in Bangladesh verdien je vaak meer dan op het land\n• → Mensen trekken naar steden, ontwikkeling\n• Risico's: slechte arbeidsomstandigheden (Rana Plaza-ramp 2013, 1.134 doden)\n\n**Klimaat en globalisering**:\n• Productie verplaatst → CO2 in productiegebied (China)\n• Consumptie blijft in westen — wie 'verantwoordelijk'?\n• Transport zelf veel CO2 (containerschepen, luchtvracht)\n• Opkomende beweging: 'koop lokaal'\n\n**Nieuwe trends**:\n• **Digitale globalisering**: Netflix, Spotify, social media wereldwijd\n• **Reshoring/nearshoring**: kritieke productie terug naar eigen continent\n• **Supply chain risico** (corona toonde aan)\n• **Geopolitieke spanningen** (China-VS, Rusland)",
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
        options: ["De wereld raakt steeds meer met elkaar verbonden", "Handel tussen landen binnen één werelddeel", "Steeds meer mensen gaan in grote steden wonen", "Overheden nemen bedrijven over in belangrijke sectoren"],
        answer: 0,
        wrongHints: [null, "Dat is handel binnen een regio, zoals de EU. Hoe ver reikt globalisering?", "Dat heet verstedelijking. Waar gaat globalisering over?", "Dat heet nationaliseren: de staat wordt eigenaar. Waar gaat globalisering over?"],
        uitlegPad: {
          stappen: [{ titel: "Globe = wereld", tekst: "Globalisering = wereld wordt steeds meer verbonden door handel, communicatie, reizen, internet." }],
          woorden: [{ woord: "globalisering", uitleg: "Proces waarbij de wereld dichterbij elkaar komt economisch + cultureel." }],
          theorie: "Drijvers: goedkoop transport (containers), internet, vrijhandel, Engelse wereldtaal.",
          voorbeelden: [{ type: "feit", tekst: "Smartphone in NL: chips Taiwan, batterij Korea, assemblage China, design California." }],
          basiskennis: [{ onderwerp: "Niet 1 regering", uitleg: "Globalisering is economisch/cultureel proces, geen politieke unie." }],
          niveaus: { basis: "Wereld verbonden.", simpeler: "Globalisering = wereld wordt steeds meer verbonden via handel + internet + reizen.", nogSimpeler: "Verbonden" },
        },
      },
      {
        q: "Een Nederlandse **multinational** is bv:",
        options: ["Shell, ASML, Heineken, Unilever", "Nestlé, Siemens, Volvo, Nokia", "Toyota, Samsung, Apple, Google", "Een NL webwinkel die ook naar België verstuurt"],
        answer: 0,
        wrongHints: [null, "Dit zijn wel multinationals, maar uit Zwitserland, Duitsland, Zweden en Finland. Welke komen uit Nederland?", "Dat zijn wel multinationals, maar komen ze uit Nederland?", "Spullen naar het buitenland sturen is export. Wat heeft een multinational nog meer in andere landen?"],
        uitlegPad: {
          stappen: [{ titel: "Vestigingen wereldwijd", tekst: "NL multinationals: Shell (energie), ASML (chips), Heineken (bier), Unilever (voedsel/huishouden)." }],
          woorden: [{ woord: "multinational", uitleg: "Bedrijf met vestigingen in meerdere landen." }],
          theorie: "NL is groot in multinationals voor zo'n klein land. Top: Shell, ASML, Heineken, Unilever, ING, Philips.",
          voorbeelden: [{ type: "feit", tekst: "ASML in Veldhoven, klanten: TSMC (Taiwan), Samsung (Korea), Intel (US)." }],
          basiskennis: [{ onderwerp: "AH = binnenlands", uitleg: "Albert Heijn is groot in NL/BE, geen wereldwijde multinational." }],
          niveaus: { basis: "Shell/ASML/Heineken.", simpeler: "NL multinationals = Shell, ASML, Heineken, Unilever — werken wereldwijd. AH alleen NL/BE.", nogSimpeler: "Shell etc" },
        },
      },
      {
        q: "Wie is een **verliezer** van globalisering?",
        options: ["Fabrieksarbeider in een westers land", "Multinationals die wereldwijd verkopen", "Consumenten die goedkoper kunnen kopen", "Hoogopgeleiden die wereldwijd kunnen werken"],
        answer: 0,
        wrongHints: [null, "Kunnen zij door globalisering meer of minder klanten bereiken?", "Betalen consumenten door globalisering meer of minder voor spullen?", "Hoogopgeleiden kunnen overal werken — worden hun kansen groter of kleiner?"],
        uitlegPad: {
          stappen: [{ titel: "Banen verplaatst", tekst: "Westerse fabrieksbanen verdwenen naar China/Vietnam (goedkoper). Lokale arbeiders verloren werk." }],
          woorden: [{ woord: "offshoring", uitleg: "Productie naar buitenland verplaatsen voor lagere kosten." }],
          theorie: "Globalisering heeft winnaars + verliezers. Verliezers: arbeiders in sectoren die niet kunnen concurreren met lage-loon-landen.",
          voorbeelden: [{ type: "feit", tekst: "NL textielfabrieken (bv. in Twente) sloten vooral in de jaren 60-80. Banen gingen naar lagelonenlanden." }],
          basiskennis: [{ onderwerp: "Politieke gevolgen", uitleg: "Verliezers stemmen anti-globalisering (Trump, Brexit, populisten)." }],
          niveaus: { basis: "Westerse arbeiders.", simpeler: "Westerse fabrieksarbeider = verliezer. Banen verdwenen naar China = werkloos.", nogSimpeler: "Arbeider" },
        },
      },
      {
        q: "**Reshoring** is:",
        options: ["Fabrieken terug naar eigen land halen", "Meer fabrieken in het buitenland bouwen", "Productie uitbesteden aan een ander bedrijf", "Een extra heffing op importproducten"],
        answer: 0,
        wrongHints: [null, "Dat is juist wat bedrijven de afgelopen decennia deden. Wat betekent 're-' in reshoring?", "Uitbesteden heet outsourcing. Waar gaat de productie bij reshoring naartoe?", "Een heffing is een belasting. Is reshoring een belasting?"],
        uitlegPad: {
          stappen: [{ titel: "Re- = terug", tekst: "Reshoring = productie terughalen naar eigen continent. Tegenovergesteld van offshoring." }],
          woorden: [{ woord: "reshoring", uitleg: "Productie terug naar eigen land/EU. Reactie op afhankelijkheid + supply chain risico." }],
          theorie: "Sinds corona + oorlog Oekraïne: trend van offshoring → reshoring. Vooral chips, medicijnen, energie.",
          voorbeelden: [{ type: "feit", tekst: "EU CHIPS Act 2023: €43 mrd om chipproductie naar EU te halen." }],
          basiskennis: [{ onderwerp: "Reden", uitleg: "Bedrijven willen minder kwetsbaar voor verre verstoringen." }],
          niveaus: { basis: "Productie terug.", simpeler: "Reshoring = productie weer in eigen continent doen. Sinds corona populair.", nogSimpeler: "Terug" },
        },
      },
      {
        q: "**Containers** waren cruciaal voor globalisering omdat:",
        options: ["Standaardmaat: snel en goedkoop overladen", "Sneller varen: schepen werden er lichter door", "Lagere belasting: geen invoerheffing op containers", "Eigen formaat: elk land kon zijn maat kiezen"],
        answer: 0,
        wrongHints: [null, "Een schip vaart niet harder door containers. Waar won je dan tijd: op zee of in de haven?", "Containers veranderden het vervoer, niet de belastingregels. Wat ging er sneller en goedkoper?", "Zou een eigen maat per land het overladen makkelijker of juist moeilijker maken?"],
        uitlegPad: {
          stappen: [{ titel: "Standaard maat", tekst: "Container = standaard maat (20ft/40ft). Past op schip, trein, vrachtwagen — geen overpakken nodig." }],
          woorden: [{ woord: "containerisatie", uitleg: "Gebruik van gestandaardiseerde containers voor transport. Begin: 1956." }],
          theorie: "Voor containers: arbeiders pakten elk pakje los in/uit schip. Met containers: kraan tilt 1 ding = tientallen keren goedkoper.",
          voorbeelden: [{ type: "feit", tekst: "Vóór: 5 dollar per ton lossen. Na: 16 cent. Globalisering werd betaalbaar." }],
          basiskennis: [{ onderwerp: "Onzichtbare revolutie", uitleg: "Container is misschien belangrijkste uitvinding voor globalisering." }],
          niveaus: { basis: "Gestandaardiseerd.", simpeler: "Container = standaard maat → snel + goedkoop transporteren tussen schip/trein/truck. Geen overpakken.", nogSimpeler: "Standaard" },
        },
      },
      {
        q: "Klimaat en globalisering:",
        options: ["Meer CO2-uitstoot door al het transport", "Minder uitstoot, want productie is efficiënter", "Vooral meer ontbossing door de bouw van havens", "Vooral meer afval door verpakkingen"],
        answer: 0,
        wrongHints: [null, "Productie kan efficiënter worden, maar al die schepen en vliegtuigen stoten ook uit. Wat weegt zwaarder?", "Er is wel natuur verdwenen voor havens, maar wat zorgt bij globalisering voor de meeste uitstoot?", "Verpakkingen zijn een probleem, maar wat zorgt bij globalisering voor de meeste uitstoot?"],
        uitlegPad: {
          stappen: [{ titel: "Twee CO2-problemen", tekst: "1) Transport (containerschepen, vliegen) = veel CO2. 2) Productie naar landen met lakse milieuregels = meer vervuiling totaal." }],
          woorden: [{ woord: "carbon leakage", uitleg: "Vervuiling die 'lekt' naar landen met lakse regels — totale vervuiling stijgt." }],
          theorie: "EU CBAM (CO2-importheffing) probeert dit te bestrijden — koolstof-intensief import wordt belast.",
          voorbeelden: [{ type: "feit", tekst: "Een groot containerschip verbruikt tientallen tonnen brandstof per dag (per vervoerd product is dat wel relatief weinig). Cement uit China = vaak meer CO2 dan EU-cement." }],
          basiskennis: [{ onderwerp: "Discussie", uitleg: "Wie 'verantwoordelijk' voor productie-CO2 — productieland of consumentland?" }],
          niveaus: { basis: "CO2 transport + lakse regels.", simpeler: "Globalisering = veel transport-CO2 + productie verhuist naar landen met minder strenge milieu-regels.", nogSimpeler: "CO2 + vervuiling" },
        },
      },
    ],
  },
  // ─── Stap 6: Multinationals + arme landen ─────────────
  {
    title: "Multinationals en hun impact",
    explanation: "**Multinational** = bedrijf met vestigingen in meerdere landen. Vaak groot — Apple is meer waard dan veel landen-BBPs samen.\n\n**Wereld-multinationals**:\n• **USA**: Apple, Amazon, Google, Microsoft, Coca-Cola\n• **NL**: Shell, ASML, Unilever, Heineken, ING, Philips\n• **DE**: Volkswagen, BMW, SAP, Siemens, Bayer\n• **CN**: Alibaba, Tencent, Huawei\n• **JP**: Toyota, Sony, Honda\n• **KR**: Samsung, Hyundai\n\n**Hoe wordt een bedrijf multinational?**\n• Begint vaak in 1 land\n• Groeit, opent kantoren in andere landen\n• Bv. McDonald's: 1955 1e restaurant USA → nu 40.000 in 100+ landen\n\n**Voor- en nadelen multinationals**:\n\n**Voordelen voor Nederland**:\n• Banen (Shell heeft duizenden NL-medewerkers)\n• Belastingopbrengst\n• Innovatie + R&D\n• Trots ('Made in Holland')\n\n**Nadelen voor Nederland**:\n• Belastingontwijking via internationale structuren (vroeger 'Dutch sandwich')\n• Macht over politiek (lobby)\n• Bij vertrek: veel banen weg\n\n**Voor arme landen**:\n• Banen + loon vaak hoger dan lokale alternatieven\n• Technologietransfer\n• Maar: slechte arbeidsomstandigheden, milieuvervuiling\n• Cultuurverandering ('McDonaldisering')\n\n**Beroemde voorbeelden goed/slecht**:\n• ✓ Apple in China: hoge eisen, betere fabrieken dan lokaal\n• ✗ Shell in Nigeria: olielekken, decennia rechtszaken\n• ✗ Foxconn in China: zelfmoorden bij iPhone-fabriek (2010)\n• ✓ Unilever 'Sustainable Living Plan' (klimaat-doelen)\n\n**Macht van multinationals**:\n• Apple-marktwaarde > NL-BBP\n• Lobby in Washington, Brussel, Den Haag\n• Kunnen landen 'tegen elkaar uitspelen' (waar laagste belasting?)\n\n**Hoe bewaak je ze?**\n• EU-mededingingsbeleid (boetes Google, Apple)\n• Internationale belastingafspraken (OESO BEPS, minimumtarief 15% VPB)\n• ESG-criteria (Environmental, Social, Governance)\n• Activisten + media\n\n**Nederlandse 'kampioenen'**:\n• **ASML** (Veldhoven) — chipmachines, monopolie op EUV-techniek\n• **Shell** — energie, hoofdkantoor naar UK 2022 (politieke kwestie)\n• **Heineken** — wereldwijd bier, #2 brouwer ter wereld\n• **Unilever** — Knorr, Dove, Axe, Hellmann's\n\n**Is groot altijd slecht?**\nNee, soms efficiënt. Maar zonder check ontstaat oligopolie of monopolie. Daarom toezicht.",
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
<text x="160" y="180" text-anchor="middle" fill="${COLORS.muted}" font-size="10" font-family="Arial" font-style="italic">Apple &gt; NL-BBP qua waarde</text>
</svg>`,
    checks: [
      {
        q: "Wat is een **multinational**?",
        options: ["Bedrijf met vestigingen in meerdere landen", "Bedrijf met werknemers van veel nationaliteiten", "Bedrijf dat veel naar het buitenland exporteert", "Bedrijf dat eigendom is van meerdere landen"],
        answer: 0,
        wrongHints: [null, "Werknemers uit veel landen kan ook bij een bedrijf in één stad. Waar gaat 'multinational' over?", "Exporteren kan ook vanuit één land. Wat heeft een multinational nog meer in het buitenland?", "Een multinational is meestal van aandeelhouders, niet van landen. Wat betekent 'multi-national' dan?"],
        uitlegPad: {
          stappen: [{ titel: "Multi + nationaal", tekst: "Multi = meerdere, nationaal = land. Multinational = bedrijf in meerdere landen tegelijk." }],
          woorden: [{ woord: "multinational", uitleg: "Bedrijf met vestigingen in 10+ landen." }],
          theorie: "Soms ook 'transnational corporation' (TNC). Macht groot — Apple is meer waard dan veel landen-BBPs samen.",
          voorbeelden: [{ type: "lijst", tekst: "Apple, Shell, Toyota, Samsung, McDonald's, Unilever, Nestlé." }],
          basiskennis: [{ onderwerp: "Niet land", uitleg: "Land en bedrijf zijn fundamenteel verschillend." }],
          niveaus: { basis: "Bedrijf in meerdere landen.", simpeler: "Multi (meerdere) + nationaal (land) = bedrijf in meerdere landen tegelijk.", nogSimpeler: "Meerdere landen" },
        },
      },
      {
        q: "Welke is een **Nederlandse multinational**?",
        options: ["Shell", "Siemens", "Nestlé", "Volvo"],
        answer: 0,
        wrongHints: [null, "Siemens is een Duits technologiebedrijf uit München.", "Nestlé is een voedingsbedrijf uit Zwitserland.", "Volvo is een automerk uit Zweden."],
        uitlegPad: {
          stappen: [{ titel: "Shell = oorsprong NL", tekst: "Shell ontstond in NL (Den Haag). Wereldwijde olie/energie-multinational." }],
          woorden: [{ woord: "Shell", uitleg: "Royal Dutch Shell. Sinds 1907. Olie/energie. Hoofdkantoor verhuisde 2022 naar UK." }],
          theorie: "NL multinationals: Shell, ASML, Heineken, Unilever, Philips, ING. Apple/Toyota/McD = niet NL.",
          voorbeelden: [{ type: "lijst", tekst: "Apple = US (Cupertino). Toyota = Japan. McDonald's = US. Shell = NL/UK." }],
          basiskennis: [{ onderwerp: "Hoofdkantoor wisselt", uitleg: "Shell verplaatste 2022 hoofdkantoor naar UK voor fiscale redenen." }],
          niveaus: { basis: "Shell.", simpeler: "Shell = NL multinational (olie/energie). Apple/Toyota/McDonald's = niet NL.", nogSimpeler: "Shell" },
        },
      },
      {
        q: "Een **voordeel** van multinationals voor NL:",
        options: ["Banen, belastinggeld en nieuwe kennis", "Lagere prijzen en geen btw op hun producten", "Minder import en minder afhankelijkheid", "Minder concurrentie en meer eigen bedrijven"],
        answer: 0,
        wrongHints: [null, "Ook multinationals rekenen gewoon btw. Wat brengen ze dan naar Nederland?", "Multinationals handelen juist veel met het buitenland. Wat levert hun komst Nederland op?", "Komen er door grote buitenlandse bedrijven meer of minder concurrenten bij?"],
        uitlegPad: {
          stappen: [{ titel: "Drie voordelen", tekst: "1) Banen (Shell ~10.000 in NL). 2) Belasting (vennootschapsbelasting). 3) Innovatie (R&D-investeringen)." }],
          woorden: [{ woord: "vennootschapsbelasting", uitleg: "Belasting die bedrijven betalen over winst." }],
          theorie: "Land probeert multinationals aan te trekken voor banen + belastinginkomsten. NL was lang aantrekkelijk door fiscale regels.",
          voorbeelden: [{ type: "feit", tekst: "ASML draagt jaarlijks miljarden bij via belasting + duizenden hooggeschoolde banen." }],
          basiskennis: [{ onderwerp: "Voor iedereen", uitleg: "Banen zijn voor allerlei opleidingsniveaus, niet alleen rijken." }],
          niveaus: { basis: "Banen + belasting + innovatie.", simpeler: "Multinationals geven NL: banen, belastinginkomsten en innovatie (R&D). Veel voordelen.", nogSimpeler: "Banen+geld" },
        },
      },
      {
        q: "Een **nadeel** van multinationals:",
        options: ["Ze ontwijken belasting via andere landen", "Ze werken vooral met personeel uit het buitenland", "Ze mogen geen winst naar het buitenland sturen", "Ze betalen hogere lonen dan kleine bedrijven"],
        answer: 0,
        wrongHints: [null, "Multinationals hebben veel Nederlandse werknemers in dienst. Welk nadeel speelt er wél bij grote internationale bedrijven?", "Dat mogen ze juist vaak wel. Wat betekent het voor de Nederlandse schatkist als winst naar een ander land verschuift?", "Hogere lonen zijn fijn voor werknemers — is dat een nadeel voor Nederland?"],
        uitlegPad: {
          stappen: [{ titel: "Belasting ontwijken", tekst: "Multinationals verschuiven winst naar landen met lage belasting. NL betaalt minder." }],
          woorden: [{ woord: "belastingontwijking", uitleg: "Legaal minder belasting betalen via slimme structuren. NB: ontwijking ≠ ontduiking (illegaal)." }],
          theorie: "Voorbeelden van structuren: Dutch sandwich (vroeger), Ierland-tussenholding, Caribische postbus.",
          voorbeelden: [{ type: "feit", tekst: "Apple betaalde in Ierland 0,005% belasting via Ierse structuur (EU-rechtbank dwong terugbetaling 2024)." }],
          basiskennis: [{ onderwerp: "Internationale aanpak", uitleg: "OESO BEPS: minimum-tarief 15% VPB wereldwijd (2023+)." }],
          niveaus: { basis: "Belastingontwijking.", simpeler: "Multinationals ontwijken belasting via internationale structuren — landen krijgen minder geld.", nogSimpeler: "Belasting ontwijken" },
        },
      },
      {
        q: "**ASML** is bekend om:",
        options: ["Chipmachines", "Auto's", "Bier", "Voedsel"],
        answer: 0,
        wrongHints: [null, "Auto's maakt ASML niet. ASML levert machines aan fabrieken die iets heel kleins maken.", "Bier is van Heineken, niet van ASML.", "Voedsel is meer iets voor Unilever, niet voor ASML."],
        uitlegPad: {
          stappen: [{ titel: "Chip-machines", tekst: "ASML maakt machines om chips mee te maken. ENIGE bedrijf wereldwijd dat EUV-techniek heeft." }],
          woorden: [{ woord: "ASML", uitleg: "Advanced Semiconductor Materials Lithography. NL chipmachine-fabrikant in Veldhoven." }],
          theorie: "EUV-machines kosten €200 mln/stuk. Klanten: TSMC, Samsung, Intel. Zonder ASML geen geavanceerde chips wereldwijd.",
          voorbeelden: [{ type: "feit", tekst: "ASML beurswaarde >€300 mrd (2024). Een van de grootste techbedrijven van de EU." }],
          basiskennis: [{ onderwerp: "Strategisch", uitleg: "ASML staat midden in geopolitiek (US-China chip-oorlog) — mag niet alle machines aan China verkopen." }],
          niveaus: { basis: "Chipmachines.", simpeler: "ASML = NL bedrijf dat chipmachines maakt (EUV-monopolie). Klanten: chipfabrikanten wereldwijd.", nogSimpeler: "Chips" },
        },
      },
      {
        q: "Internationaal **toezicht** op multinationals via:",
        options: ["EU-boetes, afspraken tussen landen en beleggers", "Een wereldpolitie van de VN die bedrijven controleert", "Het land waar het hoofdkantoor staat", "Vakbonden en consumentenorganisaties"],
        answer: 0,
        wrongHints: [null, "Bestaat er een wereldpolitie voor bedrijven? Denk aan wie echt boetes kan geven of regels kan maken.", "Een multinational werkt in veel landen tegelijk. Kan één land dan alles regelen?", "Vakbonden en consumenten kunnen druk zetten, maar kunnen zij boetes geven of belastingregels maken?"],
        uitlegPad: {
          stappen: [{ titel: "Drie lagen", tekst: "Toezicht en regels via drie lagen: de EU houdt toezicht op eerlijke concurrentie en geeft boetes. In de OESO maken landen samen afspraken, bijvoorbeeld over belasting (de OESO is zelf geen toezichthouder). ESG is ook geen toezichthouder: het zijn eisen van beleggers en banken dat bedrijven duurzaam en eerlijk werken." }],
          woorden: [{ woord: "ESG", uitleg: "Environmental, Social, Governance — duurzaamheidscriteria voor bedrijven." }, { woord: "OESO", uitleg: "Organisatie voor Economische Samenwerking en Ontwikkeling. 38 rijke landen." }],
          theorie: "EU = boetes (Google €2,4 mrd 2017 voor mededingingsovertredingen). OESO = belastingafspraken (BEPS). ESG = beleggers eisen duurzaamheid.",
          voorbeelden: [{ type: "feit", tekst: "OESO-afspraak (2021, in de EU ingegaan in 2024): grote multinationals betalen minimaal 15% winstbelasting." }],
          basiskennis: [{ onderwerp: "Niet 1 partij", uitleg: "Internationaal toezicht is samenwerking, niet enkele organisatie." }],
          niveaus: { basis: "EU + OESO + ESG.", simpeler: "Toezicht via 3 lagen: EU (boetes), OESO (belasting-afspraken), ESG (duurzaamheid).", nogSimpeler: "Drie" },
        },
      },
    ],
  },
  // ─── Stap 7: ECB en monetair beleid ──────────────────
  {
    title: "ECB en monetair beleid — beheerder van de euro",
    explanation: "De **ECB (Europese Centrale Bank)** in Frankfurt regelt de euro voor 21 eurozone-landen.\n\n**Belangrijkste taak**: stabiele prijzen — inflatiedoel ~2%/jaar.\n\n**Wat doet de ECB?**\n\n**1. Rente bepalen**\n• 'Rente van de centrale bank' = wat banken moeten betalen om geld te lenen van ECB\n• Beïnvloedt alle andere rentes (hypotheek, spaarrente)\n\n**2. Geld in omloop reguleren**\n• Ze drukken/maken digitaal geld bij of verkleinen geldhoeveelheid\n• 'Quantitative Easing' (QE) = veel geld bijdrukken om economie te helpen\n\n**3. Banken-toezicht**\n• Op grote eurozone-banken\n• Voorkomen bank-faillissementen\n\n**4. Wisselkoers bewaken**\n• Niet 'vastleggen', maar wel monitoren\n\n**Hoe werkt rentebeleid?**\n\n**Rente VERHOGEN** (bij hoge inflatie):\n• Lenen wordt duurder\n• Mensen geven minder uit\n• Bedrijven investeren minder\n• Vraag daalt → prijzen dalen → inflatie omlaag\n• MAAR: ook minder economische groei, soms recessie\n\n**Rente VERLAGEN** (bij recessie):\n• Lenen goedkoper\n• Mensen geven meer uit\n• Bedrijven investeren meer\n• Economie groeit\n• MAAR: kan inflatie veroorzaken\n\n**Recente geschiedenis**:\n• 2008-2022: rente bijna 0% (om economie te helpen)\n• 2022-2024: rente snel omhoog (om hoge inflatie te bestrijden)\n• 2024-2025: rente weer naar beneden\n\n**Voor jouw spaarrekening**:\n• ECB-rente hoog → bank betaalt jou meer rente op spaargeld\n• ECB-rente laag → ook jij weinig rente\n\n**Voor jouw hypotheek**:\n• Variabele hypotheek: maandlast verandert mee\n• Vaste hypotheek (10-30 jr): pas bij vernieuwing\n\n**Onafhankelijkheid ECB**:\n• ECB beslist zelfstandig, niet door politici\n• Idee: politici willen graag rente verlagen voor verkiezingen, ten koste van inflatie\n• Daarom onafhankelijke instelling (zoals de NL DNB voor euro-tijdperk)\n\n**Spanning**:\n• Sommige landen willen lage rente (Italië, Spanje — hoge schuld)\n• Andere willen hoge rente (DE, NL — bang voor inflatie)\n• ECB kiest 1 beleid voor allen\n\n**Andere centrale banken**:\n• **Federal Reserve (Fed)** — VS\n• **Bank of England** — UK\n• **Bank of Japan** — Japan\n• **People's Bank of China** — China\n\n**Toekomst**:\n• Digitale euro (CBDC) — ECB-uitgegeven digitaal geld\n• Klimaat-criteria in monetair beleid\n• Reactie op crypto",
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
        options: ["Beheert de euro: rente en inflatie", "Belasting innen in de eurolanden", "Wetten maken voor alle EU-landen", "Ontwikkelingshulp geven aan arme landen"],
        answer: 0,
        wrongHints: [null, "Belasting innen doet in elk land de eigen belastingdienst. Waar gaat een centrale bank over?", "Wetten maken het Europees Parlement en de EU-landen samen. Waar gaat een bank over?", "Dat doen andere organisaties, zoals de Wereldbank. Waar gaat de Europese Centrale Bank over?"],
        uitlegPad: {
          stappen: [{ titel: "Centrale bank", tekst: "ECB = Europese Centrale Bank. Beheert euro: bepaalt rente, regelt geldhoeveelheid, bewaakt inflatie." }],
          woorden: [{ woord: "ECB", uitleg: "European Central Bank. Frankfurt. Sinds 1998. Voorzitter Christine Lagarde (2024)." }],
          theorie: "Centrale bank = bank van banken. Geeft niet aan jou direct geld, maar aan banken die het doorlenen.",
          voorbeelden: [{ type: "taken", tekst: "Rente vaststellen, euro-biljetten uitgeven, banken-toezicht (samen met DNB)." }],
          basiskennis: [{ onderwerp: "Niet belasting", uitleg: "Belasting innen = Belastingdienst (lidstaat). ECB regelt monetair beleid." }],
          niveaus: { basis: "Beheer euro.", simpeler: "ECB beheert de euro: bepaalt rente, geldhoeveelheid + bestrijdt inflatie.", nogSimpeler: "Euro-beheer" },
        },
      },
      {
        q: "Wat is het **inflatiedoel** van de ECB?",
        options: ["2%", "0%", "5%", "1%"],
        answer: 0,
        wrongHints: [null, "Bij 0% is de kans op dalende prijzen (deflatie) te groot. De ECB wil een klein beetje inflatie — hoeveel?", "Bij 5% wordt je geld te snel minder waard. De ECB mikt lager.", "De ECB mikt iets hoger, zodat er meer ruimte blijft boven nul."],
        uitlegPad: {
          stappen: [{ titel: "2% = stabiel", tekst: "ECB streeft naar inflatie van ongeveer 2% per jaar — stabiele groei zonder ontsporen." }],
          woorden: [{ woord: "inflatie", uitleg: "Stijging van prijzen — geld wordt minder waard." }],
          theorie: "0% inflatie = risico deflatie (prijzen dalen, mensen wachten kopen, economie stopt). Veel hoger dan 2% = geld verliest snel waarde.",
          voorbeelden: [{ type: "tabel", tekst: "2022: NL inflatie ~10% (gas-crisis). 2024: ~3%. ECB doel: ~2%." }],
          basiskennis: [{ onderwerp: "Niet alleen ECB", uitleg: "Andere centrale banken (Fed, Bank of England) hebben ook ~2% doel." }],
          niveaus: { basis: "~2%.", simpeler: "ECB-doel: inflatie ongeveer 2% per jaar — stabiel niveau. Niet 0% (deflatie-risico) of 5% (te hoog).", nogSimpeler: "2%" },
        },
      },
      {
        q: "ECB **verhoogt rente**. Wat is meestal de reden?",
        options: ["Hoge inflatie bestrijden", "Een recessie bestrijden", "Export goedkoper maken", "Lenen voor een huis stimuleren"],
        answer: 0,
        wrongHints: [null, "Bij een recessie wil je juist dat mensen méér lenen en uitgeven. Helpt een hogere rente daarbij?", "Een hogere rente maakt de euro aantrekkelijker en dus duurder. Wat wil de ECB met een hogere rente afremmen?", "Een hogere rente maakt lenen juist duurder. Wat wil de ECB dan afremmen?"],
        uitlegPad: {
          stappen: [{ titel: "Rente ↑ remt economie", tekst: "Hoge rente = lenen duurder = minder uitgeven = vraag daalt = prijzen dalen = inflatie omlaag." }],
          woorden: [{ woord: "monetair beleid", uitleg: "Beleid van centrale bank rond rente + geldhoeveelheid." }],
          theorie: "Mechanisme: hoge rente → mensen sparen meer + lenen minder → bedrijven investeren minder → minder vraag → prijsdruk weg.",
          voorbeelden: [{ type: "feit", tekst: "2022-2024: ECB-rente van 0% naar 4,5% om hoge inflatie (10%) te bestrijden. Werkte: 2024 inflatie ~2,5%." }],
          basiskennis: [{ onderwerp: "Bijwerking", uitleg: "Hoge rente = ook minder economische groei, soms recessie." }],
          niveaus: { basis: "Inflatie bestrijden.", simpeler: "ECB verhoogt rente om hoge inflatie te bestrijden — duurder lenen → minder vraag → prijzen omlaag.", nogSimpeler: "Inflatie ↓" },
        },
      },
      {
        q: "Wat is **QE (Quantitative Easing)**?",
        options: ["Extra geld bijdrukken voor de economie", "De rente flink verhogen tegen inflatie", "Leningen aan arme landen kwijtschelden", "Een nieuwe munt invoeren naast de euro"],
        answer: 0,
        wrongHints: [null, "'Easing' betekent verruimen: geld makkelijker beschikbaar maken. Doet een hogere rente dat?", "Schulden kwijtschelden doen regeringen, niet de ECB. Wat doet een centrale bank met de hoeveelheid geld?", "Bij QE blijft de euro gewoon de munt. Wat verandert er dan wel?"],
        uitlegPad: {
          stappen: [{ titel: "Geld bij maken", tekst: "QE = ECB koopt staatsobligaties + maakt digitaal geld bij. Pompt economie op." }],
          woorden: [{ woord: "QE", uitleg: "Quantitative Easing — kwantitatieve verruiming. Centrale-bank-instrument om geldhoeveelheid te vergroten." }],
          theorie: "Wanneer rente al 0% is en economie nog stagneert → QE als laatste redmiddel. ECB deed €5+ biljoen QE 2015-2022.",
          voorbeelden: [{ type: "feit", tekst: "Corona 2020: ECB kocht massaal obligaties om economie te steunen." }],
          basiskennis: [{ onderwerp: "Tegenovergesteld", uitleg: "QT = Quantitative Tightening = geld terug uit economie halen." }],
          niveaus: { basis: "Geld bijdrukken.", simpeler: "QE = ECB drukt veel digitaal geld bij om economie te helpen (vooral bij crisis).", nogSimpeler: "Geld bij" },
        },
      },
      {
        q: "Effect ECB-rente OMHOOG voor jouw **spaarrekening**:",
        options: ["Bank betaalt jou meestal meer rente", "Bank betaalt jou meestal minder rente", "Geen effect op je spaarrente", "Je spaargeld wordt automatisch belegd"],
        answer: 0,
        wrongHints: [null, "Als lenen bij de ECB duurder wordt, wordt jouw spaargeld voor de bank meer of minder waard?", "Banken lenen zelf geld bij de ECB. Als dat duurder wordt, wat doen ze dan met de spaarrente?", "Je bank belegt je spaargeld niet zomaar. Wat verandert er aan de rente op je spaarrekening?"],
        uitlegPad: {
          stappen: [{ titel: "Doorgegeven aan klant", tekst: "ECB-rente hoog → banken betalen meer aan ECB → vragen meer rente van leners → bieden meer rente aan spaarders." }],
          woorden: [{ woord: "spaarrente", uitleg: "Rente die bank jou betaalt over spaargeld." }],
          theorie: "Spaarrente volgt ECB-rente met vertraging + altijd minder. ECB 4% → spaarrente meestal 2-3%.",
          voorbeelden: [{ type: "tabel", tekst: "2022 (ECB 0%): spaarrente 0,01%. 2024 (ECB 4%): spaarrente ~2,5%." }],
          basiskennis: [{ onderwerp: "Vertraging", uitleg: "Banken passen niet meteen aan — duurt maanden." }],
          niveaus: { basis: "Meer rente.", simpeler: "ECB-rente omhoog → bank betaalt jou meer rente op spaargeld (volgt mee).", nogSimpeler: "Meer" },
        },
      },
      {
        q: "Waarom is de ECB **onafhankelijk** van politici?",
        options: ["Zodat politici de rente niet vlak voor verkiezingen verlagen", "Zodat de ECB de koers van de euro kan vastzetten", "Omdat de grote banken eigenaar zijn van de ECB", "Zodat de ECB geen uitleg hoeft te geven aan het parlement"],
        answer: 0,
        wrongHints: [null, "De koers van de euro zweeft vrij. Waarom mogen politici niet over de rente beslissen?", "Wie heeft de ECB opgericht: de banken, of de EU-landen samen?", "Klopt dat? De ECB-baas moet wél uitleg geven aan het Europees Parlement. Waarom mogen politici dan toch niet over de rente beslissen?"],
        uitlegPad: {
          stappen: [{ titel: "Politiek-belang ≠ economisch", tekst: "Politici willen herkozen worden → liever lage rente (mensen voelen zich rijker). Maar lage rente = inflatie. Dus ECB onafhankelijk." }],
          woorden: [{ woord: "onafhankelijkheid", uitleg: "Centrale bank niet door politici aangestuurd. Beslist zelf." }],
          theorie: "Geschiedenis: landen waar centrale bank politiek-aangestuurd was (Argentinië, Turkije) hebben hoge inflatie + zwakke valuta.",
          voorbeelden: [{ type: "feit", tekst: "ECB statuten: politici MOGEN ECB niet beïnvloeden. Lagarde antwoordt aan Europees Parlement maar volgt eigen beleid." }],
          basiskennis: [{ onderwerp: "Vergelijk Fed", uitleg: "Trump probeerde Fed-rente te beïnvloeden 2018-2020 → Fed weigerde. Onafhankelijkheid in praktijk." }],
          niveaus: { basis: "Politiek-bias.", simpeler: "Politici willen rente verlagen voor verkiezingen (= populair, maar slecht voor inflatie). Daarom ECB onafhankelijk.", nogSimpeler: "Politiek-bias" },
        },
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
  prerequisites: [
    { id: "woordenschat-po", title: "Woordenschat", niveau: "po-1F" },
    { id: "kaartlezen-po", title: "Kaartlezen", niveau: "po-1F" },
    { id: "pincode-overheid", title: "Taken van de overheid", niveau: "vmbo-3" },
  ],
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

// Leerpad: Klimaatverandering — klas 2-3 aardrijkskunde.
// Bouwt op klimaten-aardrijkskunde + ecosystemen-biologie.
// Referentieniveau 2F. 6 stappen.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  curve: "#00c853",
  curve2: "#69f0ae",
  warm: "#ff7043",
  ijs: "#42a5f5",
  groen: "#66bb6a",
  rood: "#ef5350",
  highlight: "#ffd54f",
};

const stepEmojis = ["🌡️", "🌫️", "🌊", "🇳🇱", "🌱", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is klimaatverandering?", emoji: "🌡️", from: 0, to: 0 },
  { letter: "B", title: "Broeikaseffect + CO₂", emoji: "🌫️", from: 1, to: 1 },
  { letter: "C", title: "Gevolgen wereldwijd", emoji: "🌊", from: 2, to: 2 },
  { letter: "D", title: "Nederland + klimaat", emoji: "🇳🇱", from: 3, to: 3 },
  { letter: "E", title: "Wat doen we eraan?", emoji: "🌱", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  {
    title: "Wat is klimaatverandering?",
    explanation:
      "**Klimaatverandering** = het **klimaat van de aarde verandert** — meestal **warmer**.\n\n**Klimaat vs weer**:\n• **Weer** = wat er **nu** gebeurt *(regent het vandaag?)*.\n• **Klimaat** = gemiddelde **over jaren** *(is NL meestal nat?)*.\n\n**Wat is er aan de hand?**\n• Aarde is sinds **1880 ongeveer 1,1 °C warmer** *(IPCC 2023)*.\n• Lijkt weinig, maar voor klimaat is dit veel.\n• Belangrijkste oorzaak: **mens** *(menselijke activiteit, vooral fossiele brandstoffen)*.\n\n**Verschil**: natuurlijke vs menselijke klimaatverandering.\n• **Natuurlijk**: ijstijden, vulkanen, zonneactiviteit. Werkt over **duizenden** jaren.\n• **Menselijk**: sinds industriële revolutie *(1850+)*, snelle opwarming in **150 jaar**.\n\n**Hoe weten we het?**\nWetenschappers meten:\n• **Temperatuur** wereldwijd *(meetstations + satellieten)*.\n• **CO₂-concentratie** in lucht *(in 1850: ~280 ppm, nu: ~420 ppm)*.\n• **IJskernen** *(boring in poolijs — luchtbellen tot 800.000 jr oud)*.\n• **Boomringen** *(toont temperatuur per jaar)*.\n• **Koraalriffen** *(jaarlijkse groei zegt iets over zee-temp)*.\n\n**IPCC** *(Intergovernmental Panel on Climate Change)*:\n• Klimaatpanel van **VN**.\n• Duizenden wetenschappers uit 195 landen.\n• Conclusie: 'extremely likely' *(>95% zeker)* dat mens hoofdoorzaak is.\n\n**Cito-feitje**:\n2023 + 2024 waren de **warmste jaren** ooit gemeten. Trend gaat door — niet onderbroken.",
    checks: [
      {
        q: "Verschil **weer** en **klimaat**?",
        options: ["Weer = nu, klimaat = gemiddelde over jaren", "Geen verschil", "Weer is in NL, klimaat wereldwijd", "Weer is wetenschap"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel verschil.", "Niet primair.", "Beide wetenschap."],
      },
      {
        q: "Hoeveel **warmer** is aarde sinds 1880?",
        options: ["~1,1 °C", "10 °C", "0,1 °C", "Niet"],
        answer: 0,
        wrongHints: [null, "Klopt — IPCC 2023.", "Veel te veel.", "Te weinig.", "Wel."],
      },
      {
        q: "Wat is **IPCC**?",
        options: ["VN-klimaatpanel met wetenschappers", "Politiek partij", "Bedrijf", "Ster"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Hoe weten we **historisch klimaat**?",
        options: ["IJskernen + boomringen + koraal", "Gokken", "Romeinse teksten", "Internet"],
        answer: 0,
        wrongHints: [null, "Klopt — meetbare data.", "Niet wetenschap.", "Te recent.", "Niet wetenschappelijk."],
      },
    ],
  },
  {
    title: "Broeikaseffect + CO₂",
    explanation:
      "Het **broeikaseffect** is **natuurlijk** + **noodzakelijk** — maar door mens **versterkt**.\n\n**Hoe werkt het?**\n\n1. **Zonlicht** komt op aarde.\n2. Aarde **verwarmt** + straalt warmte terug.\n3. **Broeikasgassen in atmosfeer** *(CO₂, methaan, waterdamp)* houden warmte vast.\n4. Aarde blijft warm genoeg *(zonder dit: -18°C, met dit: +15°C gemiddeld)*.\n\n**Probleem**: door mens komt er **veel meer broeikasgas** bij.\n→ **Meer warmte vastgehouden** → opwarming.\n\n**Belangrijkste broeikasgassen**:\n\n**1. Koolstofdioxide (CO₂)** 💨 — meest bekend.\n• Komt uit: **fossiele brandstoffen** *(olie, gas, kolen)*, ontbossing.\n• Concentratie in lucht: van 280 ppm (1850) → **420 ppm (2024)**.\n\n**2. Methaan (CH₄)** 🐄 — 25× sterker dan CO₂.\n• Komt uit: **vee** *(koeien-boeren-windjes)*, **rijstvelden**, gas-lekken, **moerassen**.\n• Veel in NL omdat veel koeien.\n\n**3. Lachgas (N₂O)** 🌾 — 265× sterker dan CO₂.\n• Komt uit: **mest** + kunstmest landbouw, verbranding.\n\n**4. F-gassen** — kunstmatig.\n• In koelkasten, airco's, schuim.\n• Worden uitgefaseerd.\n\n**5. Waterdamp** — meest in lucht.\n• Werkt als 'versterker' — warmere lucht houdt meer waterdamp = nog warmer.\n\n**Verdeling NL CO₂-uitstoot** *(globaal)*:\n• Energie (elektriciteit, gas-verwarming): ~30%.\n• Vervoer (auto's, vliegen): ~20%.\n• Industrie: ~25%.\n• Landbouw + voedsel: ~15%.\n• Huishoudens direct: ~10%.\n\n**Per persoon**:\nGemiddelde Nederlander: **~10 ton CO₂ per jaar**.\nGemiddelde wereldburger: ~5 ton.\nDoel Parijs-akkoord: < 2 ton per persoon tegen 2050.\n\n**Cito-feitje**:\nMethaan is **25x sterker** dan CO₂ maar **blijft korter** in atmosfeer. Reductie methaan = snelle winst voor klimaat. Daarom is veehouderij-beperking in NL discussie.",
    checks: [
      {
        q: "Wat is het **broeikaseffect**?",
        options: ["Gassen houden zonne-warmte vast in atmosfeer", "Vervuiling", "Stoom", "Vulkaan"],
        answer: 0,
        wrongHints: [null, "Klopt — natuurlijk + noodzakelijk.", "Wel relatie maar specifiek dit.", "Niet primair.", "Niet."],
      },
      {
        q: "Welk gas is **belangrijkste menselijke broeikasgas**?",
        options: ["CO₂", "Stikstof", "Zuurstof", "Helium"],
        answer: 0,
        wrongHints: [null, "Klopt.", "78% lucht maar geen broeikas.", "21% lucht.", "Edelgas."],
      },
      {
        q: "Hoeveel **CO₂ per jaar** stoot gemiddelde Nederlander uit?",
        options: ["~10 ton", "~100 kg", "~100 ton", "~1 kg"],
        answer: 0,
        wrongHints: [null, "Klopt — boven wereldgemiddelde.", "Veel meer.", "Te veel.", "Onmogelijk."],
      },
      {
        q: "Wat is **sterker per molecuul** dan CO₂?",
        options: ["Methaan (25× sterker)", "Stikstof", "Zuurstof", "Edelgas"],
        answer: 0,
        wrongHints: [null, "Klopt — uit veeteelt.", "Geen broeikas.", "Geen.", "Geen."],
      },
    ],
  },
  {
    title: "Gevolgen wereldwijd",
    explanation:
      "Opwarming heeft **al** + krijgt **veel** gevolgen.\n\n**1. IJs smelt** 🧊\n• **Poolijs**: Arctische zomer-ijs gehalveerd sinds 1980.\n• **Gletsjers** wereldwijd krimpen.\n• **Antarctica** verliest 150 miljard ton ijs/jaar.\n• Gevolg: **zeespiegel stijgt**.\n\n**2. Zeespiegelstijging** 🌊\n• Sinds 1900: **~20 cm** wereldwijd.\n• Bij +2°C: nog +30-60 cm tegen 2100.\n• Bij +4°C: tot +1 meter.\n• Risico: **kuststeden onder water** *(Jakarta, Miami, Amsterdam-laag)*.\n\n**3. Weersextremen** 🌪️\n• **Meer hittegolven** *(40+°C in NL al)*.\n• **Vaker bosbranden** *(Australië, Canada, Griekenland)*.\n• **Hevigere stormen** *(orkanen worden krachtiger)*.\n• **Droogte** in sommige gebieden, **overstromingen** in andere.\n\n**4. Biodiversiteit** 🐧\n• Soorten kunnen niet snel genoeg verhuizen.\n• **Koraalriffen** sterven door warmer zeewater *(Great Barrier Reef)*.\n• **IJsbeer** + pinguïns verliezen leefgebied.\n• Insecten + bijen-populaties dalen.\n• **6e massa-uitsterving** bezig.\n\n**5. Voedsel + water** 🌾\n• Oogsten in droge gebieden mislukken.\n• Watergebrek in sommige regio's.\n• Voedselprijzen stijgen.\n\n**6. Migratie + conflict** 🚶\n• **Klimaatvluchtelingen** — mensen die wegmoeten door droogte/overstroming.\n• Naar schatting 200 miljoen in 2050.\n• Conflict over water + grond.\n\n**7. Gezondheid** 🦟\n• Hittegolven → meer doden bij ouderen.\n• Tropische ziekten *(malaria, dengue)* breiden uit naar Europa.\n• Vervuilende lucht → astma, longziekte.\n\n**Kantelpunten** *(tipping points)*:\nPunten waar veranderingen **onomkeerbaar** worden:\n• **Smelten permafrost** *(Siberische bodem)*: extra methaan vrij.\n• **Smelten Antarctisch ijs**: lange zeespiegelstijging.\n• **Uitsterven Amazone-bos**: minder CO₂-opslag.\n• **Verstoring Golfstroom**: Europa veel kouder.\n\n**1,5 vs 2 °C**:\nParijs-akkoord doel: **onder 1,5°C** opwarming houden.\nVerschil 1,5 vs 2°C:\n• Bij 1,5°C: 6% insecten verlies. Bij 2°C: 18%.\n• Bij 1,5°C: koraalrif 70% weg. Bij 2°C: 99% weg.\n• Bij 1,5°C: 350 miljoen mensen blootgesteld aan zeespiegel. Bij 2°C: 410 miljoen.\n\nDus elke graad maakt **enorm** verschil.\n\n**Cito-feitje**:\nKlimaatverandering raakt **arme landen vaak hardst** — minder middelen om aan te passen. Klimaatonrechtvaardigheid.",
    checks: [
      {
        q: "Wat is **kantelpunt** in klimaat?",
        options: ["Punt waar verandering onomkeerbaar wordt", "Tijd op klok", "Berg", "Eind van klimaat"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Hoeveel is **zeespiegel** sinds 1900 gestegen?",
        options: ["~20 cm", "1 m", "2 cm", "5 m"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te veel.", "Te weinig.", "Veel te veel."],
      },
      {
        q: "Wat doet **smelten permafrost**?",
        options: ["Geeft extra methaan vrij", "Niets", "Verkoelt aarde", "Maakt water schoon"],
        answer: 0,
        wrongHints: [null, "Klopt — kantelpunt.", "Wel iets.", "Tegenovergesteld.", "Niet."],
      },
      {
        q: "**Parijs-akkoord** doel?",
        options: ["Onder 1,5 °C opwarming", "Geen doel", "5 °C", "Verkoelen"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel doel.", "Te veel.", "Niet realistisch."],
      },
    ],
  },
  {
    title: "Nederland + klimaatverandering",
    explanation:
      "**Nederland** is extra kwetsbaar voor klimaatverandering.\n\n**Waarom kwetsbaar?**\n\n**1. Zeespiegel** 🌊\n• Een kwart NL **onder zeeniveau**.\n• Bij +1m zeespiegel: zonder dijken zou groot deel onder water staan.\n• Dijken moeten **versterkt + verhoogd**.\n\n**2. Rivieren** 🌊\n• Rijn + Maas hebben meer water *(door regenval bovenstrooms)*.\n• Overstromingsrisico's *(2021: Limburg overstromingen)*.\n\n**3. Hittegolven** ☀️\n• 2003, 2018, 2019, 2022 — recordwarme zomers.\n• 40°C bereikt in NL *(2019: Gilze-Rijen 40,7°C)*.\n• Stedelijke hitte-eilanden *(Rotterdam, Amsterdam centrum tot 8°C warmer)*.\n\n**4. Droogte** 🌵\n• Zomers worden droger.\n• Boeren + natuur lijden.\n• Drinkwater in gevaar.\n\n**Klimaatmaatregelen NL**:\n\n**1. Klimaatakkoord NL** *(2019)*:\n• Doel: **49% minder CO₂** in 2030 t.o.v. 1990.\n• **95% minder** in 2050.\n\n**2. Energietransitie** ⚡\n• Van gas **af** in huizen *(warmtepomp, all-electric)*.\n• Meer zonnepanelen + windmolens.\n• Sluiting Groningen-gasveld (2024).\n• Sluiting kolencentrales (2030).\n\n**3. Vervoer** 🚗\n• Stimulering elektrische auto *(geen MRB, lage bijtelling)*.\n• Investeringen in fietsen + OV.\n• Tegen 2050: alleen nog elektrische nieuwe auto's.\n\n**4. Industrie**:\n• Grote vervuilers moeten verminderen.\n• CO₂-opslag onder Noordzee.\n\n**5. Landbouw + veeteelt**:\n• Minder vee *(stikstof-crisis)*.\n• Plantaardige alternatieven aanmoedigen.\n\n**6. Klimaatadaptatie** *(aanpassen)*:\n• Dijken hoger + breder.\n• Klimaatbestendige steden *(meer groen, waterberging)*.\n• Andere gewassen *(droogte-bestendig)*.\n\n**Politieke discussie**:\n• Snel vs langzaam? Welke kosten?\n• Boeren-protesten *(stikstof-beleid)*.\n• Energie-armoede *(arme gezinnen kunnen warmtepomp niet betalen)*.\n• Vliegtuigvervoer beperken?\n\n**Cito-feitje**:\nNederland is **een van de meest dichtbevolkte + laaglig­gende** landen ter wereld. We hebben **veel ervaring met water beheersen** *(Deltawerken, dijken)* — voordeel bij klimaat-aanpassing.",
    checks: [
      {
        q: "Waarom is **NL kwetsbaar**?",
        options: ["Veel onder zeeniveau + dichtbevolkt", "Berg-land", "Tropisch", "Verre noord"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Geen bergen.", "Gematigd.", "Niet zo extreem."],
      },
      {
        q: "**NL klimaatakkoord** doel 2030?",
        options: ["49% minder CO₂", "Geen vermindering", "Compleet emissieloos", "10%"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Wel doel.", "Onmogelijk in 2030.", "Te weinig."],
      },
      {
        q: "Wanneer **stopt NL gas** uit Groningen?",
        options: ["2024", "2050", "Nooit", "1980"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Te laat.", "Wel stop.", "Begon toen juist."],
      },
      {
        q: "Wat is **klimaatadaptatie**?",
        options: ["Aanpassen aan verandering", "Veroorzaken", "Negeren", "Voorspellen"],
        answer: 0,
        wrongHints: [null, "Klopt — dijken hoger, etc.", "Tegenovergesteld.", "Niet.", "Voorspellen apart."],
      },
    ],
  },
  {
    title: "Wat doen we eraan? — oplossingen",
    explanation:
      "Aanpak klimaat = **mitigatie** *(minder uitstoot)* + **adaptatie** *(aanpassen)*.\n\n**MITIGATIE — wereldwijd**:\n\n**1. Hernieuwbare energie** 🌞\n• Zon, wind, waterkracht, geothermisch.\n• Steeds **goedkoper** dan fossiel.\n• Doel EU: 42,5% in 2030.\n\n**2. Elektrificatie** ⚡\n• Vervoer elektrisch.\n• Warmtepompen in huis.\n• Industrie op elektriciteit.\n\n**3. Energiebesparing** 💡\n• Isolatie huizen.\n• LED-lampen.\n• Slimme thermostaten.\n• Minder reizen.\n\n**4. CO₂-opslag (CCS)** 💉\n• CO₂ afvangen + opslaan onder de grond.\n• In NL: **Porthos**-project Noordzee.\n• Niet zonder kritiek — verbergt probleem.\n\n**5. Bossen aanleggen** 🌳\n• Bomen halen CO₂ uit lucht.\n• 1 grote boom: ~20 kg CO₂/jaar.\n• Ontbossing tegengaan.\n\n**6. Voedsel** 🥦\n• Minder vlees *(vooral rund)*.\n• Plantaardig eten.\n• Voedselverspilling tegengaan *(~30% wordt weggegooid)*.\n\n**Internationale akkoorden**:\n\n**1. Kyoto-protocol (1997)**:\n• Eerste serieuze klimaatverdrag.\n• Beperkte resultaten.\n\n**2. Parijs-akkoord (2015)**:\n• **196 landen** ondertekend.\n• Doel: **<2°C** opwarming, liefst <1,5°C.\n• Elk land eigen nationale plannen *(NDC's)*.\n• Hernieuwd elke 5 jaar.\n\n**3. COP-conferenties**:\n• Jaarlijkse top *(Conference of Parties)*.\n• 2024: COP29 in Baku.\n• Discussies over financiering arme landen.\n\n**Wat kun JIJ doen?**\n\n**Grote impact**:\n• Minder vliegen.\n• Minder vlees + zuivel.\n• Elektrische auto / fiets / OV.\n• Huis isoleren.\n• Hernieuwbare energie kopen.\n• Bewuste consumptie *(2e hands, repareren)*.\n\n**Kleinere impact**:\n• Korter douchen.\n• LED-lampen.\n• Niet thermostaat op 23°C.\n• Recycleren.\n\n**Politieke impact**:\n• **Stemmen** op partijen met klimaatambitie.\n• Petities tekenen.\n• Demonstreren *(Fridays for Future, Greta Thunberg)*.\n• Brieven aan politici.\n\n**Cito-debat**:\nIs klimaatactie genoeg? Critici zeggen:\n• Te traag.\n• Rijke landen doen te weinig.\n• Greenwashing *(bedrijven doen alsof — niet echt)*.\n• Politiek te bang voor kiezers.\n\nVoorstanders zeggen:\n• Snel meer hernieuwbare energie.\n• Technologie verbetert exponentieel.\n• Mensen worden bewust.\n• Bedrijven schakelen over.\n\n**Cito-feitje**:\nGreta Thunberg *(Zweeds tienermeisje, 2003)* startte in 2018 schoolstaking voor klimaat. Werd wereldwijd symbool. Op haar 16e sprak ze de VN toe.",
    checks: [
      {
        q: "Wat is **mitigatie**?",
        options: ["Minder uitstoot", "Aanpassen", "Negeren", "Veroorzaken"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Adaptatie.", "Niet.", "Tegenovergesteld."],
      },
      {
        q: "Wanneer **Parijs-akkoord**?",
        options: ["2015", "1997", "2024", "1990"],
        answer: 0,
        wrongHints: [null, "Klopt.", "Kyoto.", "Te recent.", "Te vroeg."],
      },
      {
        q: "Wat is een **NDC**?",
        options: ["Nationaal klimaatplan per land", "Speciale auto", "App", "Belasting"],
        answer: 0,
        wrongHints: [null, "Klopt — Nationally Determined Contribution.", "Niet.", "Niet.", "Niet."],
      },
      {
        q: "Wie startte **'Fridays for Future'**?",
        options: ["Greta Thunberg (2018)", "Mark Rutte", "Boris Johnson", "Bill Gates"],
        answer: 0,
        wrongHints: [null, "Klopt — Zweeds tiener.", "Niet.", "Niet.", "Niet."],
      },
    ],
  },
  {
    title: "Eind-toets — klimaat mix",
    explanation: "Mix-toets in Cito-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Klimaat** vs **weer**?", options: ["Klimaat = gemiddelde jaren, weer = nu", "Geen verschil", "Beide hetzelfde", "Andersom"], answer: 0, wrongHints: [null, "Klopt.", "Wel.", "Niet.", "Niet."] },
      { q: "Wat is **CO₂**?", options: ["Belangrijkste broeikasgas", "Zuurstof", "Stikstof", "Water"], answer: 0, wrongHints: [null, "Klopt.", "Geen broeikas.", "Geen broeikas.", "Wel maar niet primair."] },
      { q: "**1,5 °C** doel komt uit?", options: ["Parijs-akkoord 2015", "Kyoto", "EU-wet", "Nasa"], answer: 0, wrongHints: [null, "Klopt.", "Eerder.", "Volgt op Parijs.", "Niet."] },
      { q: "Wat is **kantelpunt** in klimaat?", options: ["Onomkeerbare verandering", "Tijdmeter", "Berg", "Klok"], answer: 0, wrongHints: [null, "Klopt.", "Niet.", "Niet.", "Niet."] },
      { q: "Welke is **hernieuwbare energie**?", options: ["Zonnepaneel + windmolen", "Kolen", "Olie", "Gas"], answer: 0, wrongHints: [null, "Klopt.", "Fossiel.", "Fossiel.", "Fossiel."] },
      { q: "Wat doet **smelten poolijs**?", options: ["Zeespiegel stijgt", "Niets", "Verkoelt aarde", "Maakt zoetwater"], answer: 0, wrongHints: [null, "Klopt.", "Wel.", "Niet.", "Wel maar primair stijging."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const klimaatveranderingAardrijkskunde = {
  id: "klimaatverandering-aardrijkskunde",
  title: "Klimaatverandering (klas 2-3)",
  emoji: "🌡️",
  level: "klas2-3",
  subject: "aardrijkskunde",
  referentieNiveau: "2F",
  sloThema: "Aardrijkskunde — klimaatverandering",
  prerequisites: [
    { id: "klimaten-aardrijkskunde", title: "Klimaten", niveau: "2F" },
    { id: "ecosystemen-biologie", title: "Ecosystemen", niveau: "2F" },
  ],
  intro:
    "Klimaatverandering voor klas 2-3 — 1,1°C opwarming sinds 1880, broeikaseffect + CO₂+methaan, gevolgen (zeespiegel, weersextremen, biodiversiteit, kantelpunten), NL (dijken+stikstof+gas-uit-2024), Parijs-akkoord 2015 + Greta Thunberg, mitigatie + adaptatie. ~15 min.",
  triggerKeywords: [
    "klimaatverandering", "global warming", "opwarming",
    "broeikaseffect", "CO2", "methaan",
    "Parijs-akkoord", "Greta Thunberg",
    "zeespiegel", "kantelpunt",
    "mitigatie", "adaptatie",
  ],
  chapters,
  steps,
};

export default klimaatveranderingAardrijkskunde;

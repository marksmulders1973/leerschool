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
      "**Klimaatverandering** = het **klimaat van de aarde verandert** — meestal **warmer**.\n\n**Klimaat vs weer**:\n• **Weer** = wat er **nu** gebeurt *(regent het vandaag?)*.\n• **Klimaat** = gemiddelde **over jaren** *(is NL meestal nat?)*.\n\n**Wat is er aan de hand?**\n• Aarde is sinds **1880 ongeveer 1,1 °C warmer** *(IPCC 2023)*.\n• Lijkt weinig, maar voor klimaat is dit veel.\n• Belangrijkste oorzaak: **mens** *(menselijke activiteit, vooral fossiele brandstoffen)*.\n\n**Verschil**: natuurlijke vs menselijke klimaatverandering.\n• **Natuurlijk**: ijstijden, vulkanen, zonneactiviteit. Werkt over **duizenden** jaren.\n• **Menselijk**: sinds industriële revolutie *(1850+)*, snelle opwarming in **150 jaar**.\n\n**Hoe weten we het?**\nWetenschappers meten:\n• **Temperatuur** wereldwijd *(meetstations + satellieten)*.\n• **CO₂-concentratie** in lucht *(in 1850: ~280 ppm, nu: ~420 ppm)*.\n• **IJskernen** *(boring in poolijs — luchtbellen tot 800.000 jr oud)*.\n• **Boomringen** *(toont temperatuur per jaar)*.\n• **Koraalriffen** *(jaarlijkse groei zegt iets over zee-temp)*.\n\n**IPCC** *(Intergovernmental Panel on Climate Change)*:\n• Klimaatpanel van **VN**.\n• Duizenden wetenschappers uit 195 landen.\n• Conclusie: 'extremely likely' *(>95% zeker)* dat mens hoofdoorzaak is.\n\n**Toets-feitje**:\n2023 + 2024 waren de **warmste jaren** ooit gemeten. Trend gaat door — niet onderbroken.",
    checks: [
      {
        q: "Verschil **weer** en **klimaat**?",
        options: ["Weer = nu, klimaat = gemiddelde over jaren", "Weer = temperatuur, klimaat = neerslag", "Weer = in Nederland, klimaat = wereldwijd", "Weer = voorspelling, klimaat = meting"],
        answer: 0,
        wrongHints: [null, "Weer en klimaat gaan allebei over temperatuur én neerslag. Waarin verschillen ze dan?", "Ook Nederland heeft een eigen klimaat. Klopt het dan dat klimaat alleen wereldwijd is?", "Weerstations meten het weer elke dag, en ook klimaat wordt voorspeld. Klopt deze tegenstelling dan?"],
        uitlegPad: {
          stappen: [
            { titel: "Weer = nu, vandaag", tekst: "Het **weer** is wat er **vandaag** of **deze week** gebeurt: regent het? Is het warm? Waait het hard? Weer kan elke dag anders zijn." },
            { titel: "Klimaat = gemiddelde over lange tijd", tekst: "Het **klimaat** is het GEMIDDELDE weer over een LANGE periode (10-30+ jaar). Bv: 'Nederland heeft een gematigd klimaat met natte winters en milde zomers.'" },
            { titel: "Belangrijk verschil bij debat", tekst: "Een koude dag in winter zegt NIETS over klimaatverandering. Klimaatverandering gaat over GEMIDDELDEN over decennia. Eén koude winter ≠ einde opwarming." },
          ],
          woorden: [
            { woord: "weer", uitleg: "Atmosferische toestand NU/vandaag." },
            { woord: "klimaat", uitleg: "Gemiddelde weer over 10-30+ jaar." },
          ],
          theorie: "Toets-tip: kledij is voor weer (regenjas vandaag), klimaat is voor architectuur (huizen-isolatie in NL voor koude winters).",
          voorbeelden: [
            { type: "stap", tekst: "'Het regent vandaag in Amsterdam' = weer." },
            { type: "stap", tekst: "'Amsterdam heeft ~850 mm regen per jaar gemiddeld' = klimaat." },
            { type: "stap", tekst: "Sahara: weer per dag wisselt, maar KLIMAAT is altijd droog en heet." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Weer = kort. Klimaat = lang. 'Het weer is wat je ziet, klimaat is wat je verwacht.'" }],
          niveaus: {
            basis: "Weer = nu (vandaag). Klimaat = gemiddelde over jaren.",
            simpeler: "Vandaag regen = weer. Nederland natte winters = klimaat.",
            nogSimpeler: "Weer = nu. Klimaat = altijd.",
          },
        },
      },
      {
        q: "Hoeveel **warmer** is aarde sinds 1880?",
        options: ["~1,1 °C", "~2 °C", "~0,3 °C", "~3 °C"],
        answer: 0,
        wrongHints: [null, "2 °C is de grens uit het Parijs-akkoord die landen juist níét willen overschrijden. Zitten we daar nu al?", "Zou je van een paar tienden graad al zulke grote gevolgen zien, zoals overal smeltende gletsjers?", "Ongeveer 3 °C is wat klimaatmodellen rond 2100 verwachten als de uitstoot doorgaat. Zitten we nu al zo ver?"],
      },
      {
        q: "Wat is **IPCC**?",
        options: ["VN-panel dat klimaatonderzoek samenvat", "VN-top waar landen klimaatafspraken maken", "EU-dienst die het klimaat meet met satellieten", "Milieuclub die klimaatacties organiseert"],
        answer: 0,
        wrongHints: [null, "Zo'n jaarlijkse top heet een COP. Maakt het IPCC zelf afspraken tussen landen, of levert het de kennis?", "Dat is Copernicus, van de EU. Het IPCC hoort bij de VN: wat staat er in zijn grote rapporten?", "Actiegroepen zoals Greenpeace voeren campagne. Wie schrijven de rapporten van het IPCC?"],
        uitlegPad: {
          stappen: [
            { titel: "Wat is IPCC?", tekst: "**IPCC** staat voor **Intergovernmental Panel on Climate Change** = Intergouvernementeel Panel voor Klimaatverandering. Het is een wetenschappelijk orgaan van de **Verenigde Naties** (VN)." },
            { titel: "Wie zit erin?", tekst: "Duizenden wetenschappers uit **195 landen** werken samen. Ze verzamelen + analyseren ALLE klimaatonderzoek wereldwijd. Publiceert elke 5-7 jaar een groot rapport." },
            { titel: "Wat zegt IPCC?", tekst: "Belangrijkste conclusie: 'extremely likely' (>95% zeker) dat MENS de hoofdoorzaak is van klimaatverandering. Niet meer een mening — wetenschappelijke consensus." },
          ],
          woorden: [
            { woord: "IPCC", uitleg: "VN-klimaatpanel met wetenschappers uit 195 landen." },
            { woord: "VN", uitleg: "Verenigde Naties — internationale samenwerking sinds 1945." },
          ],
          theorie: "Toets-feit: IPCC won in 2007 de Nobelprijs voor de Vrede (samen met Al Gore). Hun rapporten worden door politici gebruikt om klimaatbeleid te maken (Parijs-akkoord 2015).",
          voorbeelden: [
            { type: "stap", tekst: "IPCC-rapport 2023: aarde 1,1°C warmer sinds 1880. Doel: onder 1,5°C blijven." },
            { type: "stap", tekst: "Als 195 landen + duizenden wetenschappers eens zijn, is dat een sterke consensus." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "IPCC = klimaat-experts wereldwijd, georganiseerd door VN." }],
          niveaus: {
            basis: "IPCC = VN-klimaatpanel met duizenden wetenschappers.",
            simpeler: "Wereld-experts die samen klimaatkennis verzamelen.",
            nogSimpeler: "VN-klimaatpanel.",
          },
        },
      },
      {
        q: "Hoe weten we **historisch klimaat**?",
        options: ["IJskernen, boomringen en koraal", "Weerberichten uit oude kranten", "Rotstekeningen en grotschilderingen", "Thermometers op elke plek ter wereld"],
        answer: 0,
        wrongHints: [null, "Kranten bestaan pas een paar eeuwen — hoe kijk je honderdduizenden jaren terug?", "Tekeningen laten zien welke dieren er leefden, maar geen temperatuur per jaar. Welke natuurlijke 'archieven' groeien elk jaar een laagje aan?", "Thermometers meten pas zo'n 150 tot 300 jaar. Hoe kijk je nog verder terug?"],
      },
    ],
  },
  {
    title: "Broeikaseffect + CO₂",
    explanation:
      "Het **broeikaseffect** is **natuurlijk** + **noodzakelijk** — maar door mens **versterkt**.\n\n**Hoe werkt het?**\n\n1. **Zonlicht** komt op aarde.\n2. Aarde **verwarmt** + straalt warmte terug.\n3. **Broeikasgassen in atmosfeer** *(CO₂, methaan, waterdamp)* houden warmte vast.\n4. Aarde blijft warm genoeg *(zonder dit: -18°C, met dit: +15°C gemiddeld)*.\n\n**Probleem**: door mens komt er **veel meer broeikasgas** bij.\n→ **Meer warmte vastgehouden** → opwarming.\n\n**Belangrijkste broeikasgassen**:\n\n**1. Koolstofdioxide (CO₂)** 💨 — meest bekend.\n• Komt uit: **fossiele brandstoffen** *(olie, gas, kolen)*, ontbossing.\n• Concentratie in lucht: van 280 ppm (1850) → **420 ppm (2024)**.\n\n**2. Methaan (CH₄)** 🐄 — 25× sterker dan CO₂.\n• Komt uit: **vee** *(koeien-boeren-windjes)*, **rijstvelden**, gas-lekken, **moerassen**.\n• Veel in NL omdat veel koeien.\n\n**3. Lachgas (N₂O)** 🌾 — 265× sterker dan CO₂.\n• Komt uit: **mest** + kunstmest landbouw, verbranding.\n\n**4. F-gassen** — kunstmatig.\n• In koelkasten, airco's, schuim.\n• Worden uitgefaseerd.\n\n**5. Waterdamp** — meest in lucht.\n• Werkt als 'versterker' — warmere lucht houdt meer waterdamp = nog warmer.\n\n**Verdeling NL CO₂-uitstoot** *(globaal)*:\n• Energie (elektriciteit, gas-verwarming): ~30%.\n• Vervoer (auto's, vliegen): ~20%.\n• Industrie: ~25%.\n• Landbouw + voedsel: ~15%.\n• Huishoudens direct: ~10%.\n\n**Per persoon**:\nGemiddelde Nederlander: **~10 ton CO₂ per jaar**.\nGemiddelde wereldburger: ~5 ton.\nOm de doelen van het Parijs-akkoord te halen: < 2 ton per persoon rond 2050.\n\n**Toets-feitje**:\nMethaan is **25x sterker** dan CO₂ maar **blijft korter** in atmosfeer. Reductie methaan = snelle winst voor klimaat. Daarom is veehouderij-beperking in NL discussie.",
    checks: [
      {
        q: "Wat is het **broeikaseffect**?",
        options: ["Gassen houden warmte vast in de atmosfeer", "Gat in de ozonlaag door vervuiling", "Wolken die zonlicht tegenhouden", "Warmte uit vulkanen in de aarde"],
        answer: 0,
        wrongHints: [null, "Dat is een ander probleem — wat houdt de warmte vast?", "Wolken kaatsen zonlicht terug de ruimte in. Wordt het daar warmer of koeler van?", "Warmte uit de aarde zelf is maar heel weinig. Waar komt bijna alle warmte op aarde vandaan?"],
        uitlegPad: {
          stappen: [
            { titel: "Vergelijk met broeikas in tuin", tekst: "Een **broeikas** (glashuis voor planten) houdt **warmte vast** vanwege de ramen. Zonlicht komt erin, maar de warmte kan minder makkelijk eruit. Daarom is het binnen veel warmer dan buiten." },
            { titel: "Aarde werkt net zo", tekst: "Bepaalde gassen in de atmosfeer (CO₂, methaan, waterdamp) **werken als glaswanden**. Ze laten zonnewarmte binnen maar houden uitgestraalde warmte vast. Daarom heet dit het 'broeikaseffect'." },
            { titel: "Natuurlijk + nodig!", tekst: "ZONDER broeikaseffect zou aarde -18°C zijn (te koud voor leven). MET broeikaseffect = +15°C gemiddeld = leefbaar. Probleem is alleen dat MEER gassen = TE veel warmte = klimaatverandering." },
          ],
          woorden: [
            { woord: "broeikaseffect", uitleg: "Atmosferische gassen houden zonnewarmte vast." },
            { woord: "broeikasgas", uitleg: "Gas dat warmte vasthoudt: CO₂, methaan, lachgas, waterdamp." },
          ],
          theorie: "Toets-tip: broeikaseffect ZELF is goed! Zonder dit geen leven. Het PROBLEEM is dat mens MEER broeikasgassen maakt door fossiele brandstoffen, en daardoor extra warmte vasthoudt.",
          voorbeelden: [
            { type: "stap", tekst: "Glazen broeikas in tuin: 's middags 35°C binnen, 22°C buiten. Zelfde principe." },
            { type: "stap", tekst: "Mars heeft bijna geen atmosfeer = bijna geen broeikaseffect = -60°C gemiddeld. Venus = TE veel broeikaseffect = +460°C." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Broeikaseffect = warmte-deken om aarde. Natuurlijk goed. Door mens TE dik geworden." }],
          niveaus: {
            basis: "Broeikaseffect = atmosfeer houdt zonnewarmte vast.",
            simpeler: "Als een broeikas in de tuin: warmte erin, weinig eruit.",
            nogSimpeler: "Warmte-deken om aarde.",
          },
        },
      },
      {
        q: "Welk gas is **belangrijkste menselijke broeikasgas**?",
        options: ["CO₂", "Methaan", "Waterdamp", "Lachgas"],
        answer: 0,
        wrongHints: [null, "Methaan houdt per kilo meer warmte vast, maar er komt veel minder van vrij. Welk gas stoten auto's en fabrieken in enorme hoeveelheden uit?", "Waterdamp is het grootste natuurlijke broeikasgas, maar komt vooral uit verdamping. Welk gas komt vrij bij het verbranden van fossiele brandstof?", "Lachgas komt vooral uit mest en kunstmest, in kleine hoeveelheden. Welk gas komt vrij bij het verbranden van olie, kolen en gas?"],
      },
      {
        q: "Hoeveel **CO₂ per jaar** stoot gemiddelde Nederlander uit?",
        options: ["~10 ton", "~100 kg", "~100 ton", "~1 ton"],
        answer: 0,
        wrongHints: [null, "Eén autorit van 500 km stoot al zo'n 60 kg CO₂ uit. Hoeveel kom je dan in een heel jaar?", "Nederland stoot in totaal zo'n 150 miljoen ton per jaar uit. Klopt 100 ton per persoon dan bij 18 miljoen inwoners?", "1 ton per jaar is wat iemand in een arm land als Kenia uitstoot. Rijdt, stookt en vliegt een Nederlander meer of minder?"],
      },
      {
        q: "Welk gas houdt **per kilo** veel méér warmte vast dan CO₂?",
        options: ["Methaan", "Stikstof", "Zuurstof", "Argon"],
        answer: 0,
        wrongHints: [null, "Stikstof is 78% van de lucht, maar houdt geen warmte vast. Welk gas komt uit koeienmagen en moerassen?", "Zuurstof is geen broeikasgas.", "Argon is een edelgas, geen broeikasgas."],
      },
    ],
  },
  {
    title: "Gevolgen wereldwijd",
    explanation:
      "Opwarming heeft **al** + krijgt **veel** gevolgen.\n\n**1. IJs smelt** 🧊\n• **Poolijs**: Arctische zomer-ijs gehalveerd sinds 1980.\n• **Gletsjers** wereldwijd krimpen.\n• **Antarctica** verliest 150 miljard ton ijs/jaar.\n• Gevolg: **zeespiegel stijgt**.\n\n**2. Zeespiegelstijging** 🌊\n• Sinds 1900: **~20 cm** wereldwijd.\n• Bij +2°C: nog +30-60 cm tegen 2100.\n• Bij +4°C: tot +1 meter.\n• Risico: **kuststeden onder water** *(Jakarta, Miami, Amsterdam-laag)*.\n\n**3. Weersextremen** 🌪️\n• **Meer hittegolven** *(40+°C in NL al)*.\n• **Vaker bosbranden** *(Australië, Canada, Griekenland)*.\n• **Hevigere stormen** *(orkanen worden krachtiger)*.\n• **Droogte** in sommige gebieden, **overstromingen** in andere.\n\n**4. Biodiversiteit** 🐧\n• Soorten kunnen niet snel genoeg verhuizen.\n• **Koraalriffen** sterven door warmer zeewater *(Great Barrier Reef)*.\n• **IJsbeer** + pinguïns verliezen leefgebied.\n• Insecten + bijen-populaties dalen.\n• **6e massa-uitsterving** bezig.\n\n**5. Voedsel + water** 🌾\n• Oogsten in droge gebieden mislukken.\n• Watergebrek in sommige regio's.\n• Voedselprijzen stijgen.\n\n**6. Migratie + conflict** 🚶\n• **Klimaatvluchtelingen** — mensen die wegmoeten door droogte/overstroming.\n• Naar schatting 200 miljoen in 2050.\n• Conflict over water + grond.\n\n**7. Gezondheid** 🦟\n• Hittegolven → meer doden bij ouderen.\n• Tropische ziekten *(malaria, dengue)* breiden uit naar Europa.\n• Vervuilende lucht → astma, longziekte.\n\n**Kantelpunten** *(tipping points)*:\nPunten waar veranderingen **onomkeerbaar** worden:\n• **Smelten permafrost** *(Siberische bodem)*: extra methaan vrij.\n• **Smelten Antarctisch ijs**: lange zeespiegelstijging.\n• **Uitsterven Amazone-bos**: minder CO₂-opslag.\n• **Verstoring Golfstroom**: Europa veel kouder.\n\n**1,5 vs 2 °C**:\nParijs-akkoord doel: **onder 1,5°C** opwarming houden.\nVerschil 1,5 vs 2°C:\n• Bij 1,5°C: 6% insecten verlies. Bij 2°C: 18%.\n• Bij 1,5°C: koraalrif 70% weg. Bij 2°C: 99% weg.\n• Bij 1,5°C: 350 miljoen stadsbewoners blootgesteld aan ernstige droogte. Bij 2°C: 410 miljoen.\n\nDus elke graad maakt **enorm** verschil.\n\n**Toets-feitje**:\nKlimaatverandering raakt **arme landen vaak het hardst** — minder middelen om aan te passen. Klimaatonrechtvaardigheid.",
    checks: [
      {
        q: "Wat is **kantelpunt** in klimaat?",
        options: ["Punt waar verandering onomkeerbaar wordt", "Moment waarop het weer omslaat van zon naar regen", "Hoogste temperatuur ooit gemeten", "Moment dat de opwarming vanzelf stopt"],
        answer: 0,
        wrongHints: [null, "Dat is weer, en dat draait vanzelf weer terug.", "Een record is geen drempel waarna alles anders blijft.", "Een kantelpunt versterkt de opwarming juist. Wat gebeurt er als een ijskap eenmaal ver genoeg is gesmolten?"],
      },
      {
        q: "Hoeveel is **zeespiegel** sinds 1900 gestegen?",
        options: ["~20 cm", "~60 cm", "~5 cm", "~1 m"],
        answer: 0,
        wrongHints: [null, "60 cm is wat er rond 2100 verwacht wordt als de uitstoot hoog blijft. Zitten we nu al zo ver?", "Nu stijgt de zee zo'n 3 à 4 mm per jaar, eerder iets minder. Hoeveel is dat bij elkaar in ruim 100 jaar?", "Een meter hoger water zou kades en stranden flink hebben veranderd. Zie je dat op foto's van rond 1900?"],
      },
      {
        q: "Wat doet **smelten permafrost**?",
        options: ["Geeft extra methaan vrij", "Laat de zee flink stijgen", "Maakt het ozongat groter", "Slaat juist meer CO₂ op"],
        answer: 0,
        wrongHints: [null, "Permafrost is bevroren bodem, geen ijskap. Wat zit er opgesloten in die bodem dat vrijkomt als hij ontdooit?", "Het ozongat komt door cfk's uit oude spuitbussen. Welk gas uit rottend plantenmateriaal komt vrij als de bodem ontdooit?", "Er groeien wel wat meer planten, maar wat gebeurt er met al het dode materiaal dat duizenden jaren bevroren lag?"],
      },
      {
        q: "**Parijs-akkoord** doel?",
        options: ["Ruim onder 2 °C, liefst 1,5 °C", "Ruim onder 3 °C, liefst 2 °C", "Ruim onder 1 °C, liefst 0,5 °C", "Ruim onder 4 °C, liefst 3 °C"],
        answer: 0,
        wrongHints: [null, "In Parijs werd 2 °C juist de bovengrens die je niet wilt halen. Ligt het doel dan bij 3 °C?", "De aarde is al ruim 1 °C warmer dan rond 1850. Kun je dan nog onder 1 °C blijven?", "Bij 3 à 4 °C verwachten wetenschappers rampzalige gevolgen. Zou een klimaatakkoord dat als doel nemen?"],
      },
    ],
  },
  {
    title: "Nederland + klimaatverandering",
    explanation:
      "**Nederland** is extra kwetsbaar voor klimaatverandering.\n\n**Waarom kwetsbaar?**\n\n**1. Zeespiegel** 🌊\n• Een kwart NL **onder zeeniveau**.\n• Bij +1m zeespiegel: zonder dijken zou groot deel onder water staan.\n• Dijken moeten **versterkt + verhoogd**.\n\n**2. Rivieren** 🌊\n• Rijn + Maas hebben meer water *(door regenval bovenstrooms)*.\n• Overstromingsrisico's *(2021: Limburg overstromingen)*.\n\n**3. Hittegolven** ☀️\n• 2003, 2018, 2019, 2022 — recordwarme zomers.\n• 40°C bereikt in NL *(2019: Gilze-Rijen 40,7°C)*.\n• Stedelijke hitte-eilanden *(Rotterdam, Amsterdam centrum tot 8°C warmer)*.\n\n**4. Droogte** 🌵\n• Zomers worden droger.\n• Boeren + natuur lijden.\n• Drinkwater in gevaar.\n\n**Klimaatmaatregelen NL**:\n\n**1. Klimaatakkoord NL** *(2019)*:\n• Doel: **49% minder CO₂** in 2030 t.o.v. 1990.\n• **95% minder** in 2050.\n\n**2. Energietransitie** ⚡\n• Van gas **af** in huizen *(warmtepomp, all-electric)*.\n• Meer zonnepanelen + windmolens.\n• Sluiting Groningen-gasveld (2024).\n• Sluiting kolencentrales (2030).\n\n**3. Vervoer** 🚗\n• Stimulering elektrische auto *(geen MRB, lage bijtelling)*.\n• Investeringen in fietsen + OV.\n• Vanaf 2035: in de EU alleen nog uitstootvrije nieuwe auto's.\n\n**4. Industrie**:\n• Grote vervuilers moeten verminderen.\n• CO₂-opslag onder Noordzee.\n\n**5. Landbouw + veeteelt**:\n• Minder vee *(stikstof-crisis)*.\n• Plantaardige alternatieven aanmoedigen.\n\n**6. Klimaatadaptatie** *(aanpassen)*:\n• Dijken hoger + breder.\n• Klimaatbestendige steden *(meer groen, waterberging)*.\n• Andere gewassen *(droogte-bestendig)*.\n\n**Politieke discussie**:\n• Snel vs langzaam? Welke kosten?\n• Boeren-protesten *(stikstof-beleid)*.\n• Energie-armoede *(arme gezinnen kunnen warmtepomp niet betalen)*.\n• Vliegtuigvervoer beperken?\n\n**Toets-feitje**:\nNederland is **een van de meest dichtbevolkte + laagliggende** landen ter wereld. We hebben **veel ervaring met water beheersen** *(Deltawerken, dijken)* — voordeel bij klimaat-aanpassing.",
    checks: [
      {
        q: "Waarom is **NL kwetsbaar**?",
        options: ["Een groot deel ligt onder zeeniveau en er wonen veel mensen", "Er is weinig bos dat CO₂ uit de lucht kan opnemen", "Nederland stoot per inwoner veel broeikasgassen uit", "Het ligt zo ver noordelijk dat de bevroren bodem ontdooit"],
        answer: 0,
        wrongHints: [null, "Bos neemt CO₂ op, maar dat telt voor de hele wereld samen. Wat maakt Nederland zelf extra kwetsbaar als het water stijgt?", "Veel uitstoot maakt je medeverantwoordelijk, niet kwetsbaar. Wat gebeurt er met een laag land als de zee stijgt?", "Permafrost vind je veel noordelijker, in Siberië en Canada. Wat maakt Nederland dan kwetsbaar?"],
      },
      {
        q: "**NL klimaatakkoord** doel 2030?",
        options: ["49% minder CO₂", "10% minder CO₂", "95% minder CO₂", "25% minder CO₂"],
        answer: 0,
        wrongHints: [null, "Het akkoord moet helpen om in 2050 bijna klimaatneutraal te zijn. Kom je daar met maar 10% in 2030?", "95% minder is het doel voor 2050. Wat is de tussenstap voor 2030?", "Tussen nu en 2050 zit 2030 ongeveer op de helft. Is een kwart minder dan genoeg?"],
      },
      {
        q: "Wanneer **stopt NL gas** uit Groningen?",
        options: ["2024", "2050", "2030", "2018"],
        answer: 0,
        wrongHints: [null, "Door de aardbevingen wilde de overheid zo snel mogelijk stoppen. Past 2050 daarbij?", "Na alle aardbevingen wilde het kabinet zo snel mogelijk stoppen. Past 2030 daar goed bij?", "In 2018 besloot het kabinet te stoppen. Was de gaskraan toen ook meteen dicht?"],
      },
      {
        q: "Wat is **klimaatadaptatie**?",
        options: ["Aanpassen aan de gevolgen van opwarming", "Uitstoot verminderen om opwarming te remmen", "Landen helpen die al schade hebben", "Opwarming voorspellen met klimaatmodellen"],
        answer: 0,
        wrongHints: [null, "Dat heet mitigatie: de oorzaak aanpakken. Gaat adaptatie over de oorzaak of over de gevolgen?", "Betalen voor schade achteraf heet 'loss and damage'. Adaptatie gebeurt vooraf: hoe dan?", "Voorspellen hoort bij klimaatonderzoek. Adaptatie is een soort maatregel — welke?"],
      },
    ],
  },
  {
    title: "Wat doen we eraan? — oplossingen",
    explanation:
      "Aanpak klimaat = **mitigatie** *(minder uitstoot)* + **adaptatie** *(aanpassen)*.\n\n**MITIGATIE — wereldwijd**:\n\n**1. Hernieuwbare energie** 🌞\n• Zon, wind, waterkracht, geothermisch.\n• Steeds **goedkoper** dan fossiel.\n• Doel EU: 42,5% in 2030.\n\n**2. Elektrificatie** ⚡\n• Vervoer elektrisch.\n• Warmtepompen in huis.\n• Industrie op elektriciteit.\n\n**3. Energiebesparing** 💡\n• Isolatie huizen.\n• LED-lampen.\n• Slimme thermostaten.\n• Minder reizen.\n\n**4. CO₂-opslag (CCS)** 💉\n• CO₂ afvangen + opslaan onder de grond.\n• In NL: **Porthos**-project Noordzee.\n• Niet zonder kritiek — verbergt probleem.\n\n**5. Bossen aanleggen** 🌳\n• Bomen halen CO₂ uit lucht.\n• 1 grote boom: ~20 kg CO₂/jaar.\n• Ontbossing tegengaan.\n\n**6. Voedsel** 🥦\n• Minder vlees *(vooral rund)*.\n• Plantaardig eten.\n• Voedselverspilling tegengaan *(~30% wordt weggegooid)*.\n\n**Internationale akkoorden**:\n\n**1. Kyoto-protocol (1997)**:\n• Eerste serieuze klimaatverdrag.\n• Beperkte resultaten.\n\n**2. Parijs-akkoord (2015)**:\n• **196 landen** ondertekend.\n• Doel: **<2°C** opwarming, liefst <1,5°C.\n• Elk land eigen nationale plannen *(NDC's)*.\n• Hernieuwd elke 5 jaar.\n\n**3. COP-conferenties**:\n• Jaarlijkse top *(Conference of Parties)*.\n• 2024: COP29 in Baku.\n• Discussies over financiering arme landen.\n\n**Wat kun JIJ doen?**\n\n**Grote impact**:\n• Minder vliegen.\n• Minder vlees + zuivel.\n• Elektrische auto / fiets / OV.\n• Huis isoleren.\n• Hernieuwbare energie kopen.\n• Bewuste consumptie *(2e hands, repareren)*.\n\n**Kleinere impact**:\n• Korter douchen.\n• LED-lampen.\n• Thermostaat niet op 23°C.\n• Recycleren.\n\n**Politieke impact**:\n• **Stemmen** op partijen met klimaatambitie.\n• Petities tekenen.\n• Demonstreren *(Fridays for Future, Greta Thunberg)*.\n• Brieven aan politici.\n\n**Toets-debat**:\nIs klimaatactie genoeg? Critici zeggen:\n• Te traag.\n• Rijke landen doen te weinig.\n• Greenwashing *(bedrijven doen alsof — niet echt)*.\n• Politiek te bang voor kiezers.\n\nVoorstanders zeggen:\n• Snel meer hernieuwbare energie.\n• Technologie verbetert exponentieel.\n• Mensen worden bewust.\n• Bedrijven schakelen over.\n\n**Toets-feitje**:\nGreta Thunberg *(Zweeds tienermeisje, geboren 2003)* startte in 2018 schoolstaking voor klimaat. Werd wereldwijd symbool. Op haar 16e sprak ze de VN toe.",
    checks: [
      {
        q: "Wat is **mitigatie**?",
        options: ["Uitstoot van broeikasgassen verminderen", "Aanpassen aan de gevolgen van opwarming", "Opwarming voorspellen met klimaatmodellen", "Schade door extreem weer vergoeden"],
        answer: 0,
        wrongHints: [null, "Dat is adaptatie. Pakt mitigatie de gevolgen of de oorzaak aan?", "Voorspellen verandert niets aan de opwarming zelf. Wat doet een mitigatie-maatregel?", "Dat helpt mensen achteraf. Pakt het de oorzaak van het probleem aan?"],
      },
      {
        q: "Wanneer **Parijs-akkoord**?",
        options: ["2015", "1997", "2009", "1990"],
        answer: 0,
        wrongHints: [null, "1997 is het jaar van het Kyoto-protocol, de voorganger van Parijs. Kwam Parijs daarna of daarvoor?", "In 2009 mislukte de klimaattop in Kopenhagen. Wanneer lukte het wel om een akkoord te sluiten?", "In 1990 verscheen het eerste IPCC-rapport; een wereldwijd akkoord kwam pas veel later. Hoeveel later?"],
      },
      {
        q: "Wat is een **NDC**?",
        options: ["Nationaal klimaatplan per land", "Internationale klimaatconferentie", "Wereldwijd klimaatverdrag", "Klimaatfonds voor arme landen"],
        answer: 0,
        wrongHints: [null, "Een jaarlijkse klimaattop heet een COP. Waar staat de N van NDC voor?", "Het wereldwijde verdrag is het Parijs-akkoord zelf. Waar staat de N van NDC voor?", "Arme landen krijgen wel klimaatgeld, maar NDC staat voor 'Nationally Determined Contribution'. Wat legt elk land zelf vast?"],
      },
      {
        q: "Wie startte **'Fridays for Future'**?",
        options: ["Greta Thunberg", "Al Gore", "David Attenborough", "Malala Yousafzai"],
        answer: 0,
        wrongHints: [null, "Al Gore maakte de klimaatfilm 'An Inconvenient Truth' (2006). Was hij een scholier die ging staken?", "Attenborough maakt natuurfilms. Fridays for Future begon met een schoolstaking: wie staakte?", "Malala strijdt voor onderwijs voor meisjes. Wie begon in 2018 met schoolstaken voor het klimaat?"],
      },
    ],
  },
  {
    title: "Eind-toets — klimaat mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "**Klimaat** vs **weer**?", options: ["Klimaat = gemiddelde over jaren, weer = nu", "Klimaat = wereldwijd, weer = in Nederland", "Klimaat = temperatuur, weer = regen", "Klimaat = nu, weer = gemiddelde over jaren"], answer: 0, wrongHints: [null, "Ook Nederland heeft een eigen klimaat. Gaat het verschil over plaats?", "Klimaat en weer gaan allebei over temperatuur én regen. Waarin verschillen ze dan?", "Kijk welke van de twee bij een kort moment hoort en welke bij een lange periode."] },
      { q: "Wat is **CO₂**?", options: ["Belangrijkste broeikasgas door de mens", "Het gas dat wij inademen om te leven", "Het gas dat het gat in de ozonlaag maakt", "Waterdamp die uit de schoorsteen komt"], answer: 0, wrongHints: [null, "Wij ademen zuurstof (O₂) in. Welke letters staan er in CO₂?", "Het ozongat komt door andere stoffen (cfk's uit oude spuitbussen). Waarom staat CO₂ dan in het nieuws?", "Water is H₂O — welke letters staan er in CO₂?"] },
      { q: "**1,5 °C** doel komt uit?", options: ["Parijs-akkoord 2015", "Kyoto-protocol 1997", "Europese Klimaatwet 2021", "Eerste VN-klimaatrapport 1990"], answer: 0, wrongHints: [null, "Kyoto ging over uitstootdoelen voor rijke landen. Stond daar al een temperatuurgrens in?", "Die EU-wet bouwt voort op een eerder wereldwijd akkoord. Welk?", "Een rapport geeft kennis, maar legt geen afspraken tussen landen vast. Waar gebeurde dat wel?"] },
      { q: "Wat is **kantelpunt** in klimaat?", options: ["Onomkeerbare verandering", "Omslag van zon naar regen", "Hoogste temperatuur ooit gemeten", "Wisseling van de seizoenen"], answer: 0, wrongHints: [null, "Dat is weer, en dat draait vanzelf weer terug.", "Een record is geen drempel waarna alles anders blijft.", "Seizoenen keren elk jaar terug — een kantelpunt niet."] },
      { q: "Welke is **hernieuwbare energie**?", options: ["Zonnepanelen en windmolens", "Kernenergie uit uranium", "Waterstof gemaakt van aardgas", "Aardgas uit Groningen"], answer: 0, wrongHints: [null, "Kernenergie stoot weinig CO₂ uit, maar is de voorraad uranium onuitputtelijk?", "Waterstof klinkt schoon, maar deze waterstof wordt gemaakt van aardgas. Raakt die bron op?", "Aardgas komt uit de ondergrond en de voorraad raakt op. Welke bron vult zichzelf steeds aan?"] },
      { q: "Wat doet **smelten van landijs** (Groenland + Antarctica)?", options: ["Zeespiegel stijgt", "Zeespiegel blijft gelijk", "Aarde koelt af", "Zeespiegel daalt"], answer: 0, wrongHints: [null, "Bij drijvend zee-ijs klopt dit. Maar ligt dit ijs in het water of op land?", "Er verdwijnt wit ijs dat zonlicht weerkaatst. Wordt het dan koeler?", "Waar blijft al dat smeltwater?"] },
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

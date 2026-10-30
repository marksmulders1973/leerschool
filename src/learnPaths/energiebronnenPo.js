// Leerpad: Energiebronnen — groep 6-8 wereldoriëntatie + klas 1-2 aardrijkskunde.
// Past op klimaatverandering-aardrijkskunde + bevolking-migratie. 1F.
// 6 stappen. toets-relevant wereldoriëntatie.

const stepEmojis = ["💡", "🛢️", "☀️", "⚛️", "🇳🇱", "🏆"];

const chapters = [
  { letter: "A", title: "Wat is energie?", emoji: "💡", from: 0, to: 0 },
  { letter: "B", title: "Fossiele brandstoffen", emoji: "🛢️", from: 1, to: 1 },
  { letter: "C", title: "Duurzame energie", emoji: "☀️", from: 2, to: 2 },
  { letter: "D", title: "Kernenergie", emoji: "⚛️", from: 3, to: 3 },
  { letter: "E", title: "NL en energie", emoji: "🇳🇱", from: 4, to: 4 },
  { letter: "F", title: "Eind-toets", emoji: "🏆", from: 5, to: 5 },
];

const steps = [
  {
    title: "Wat is energie?",
    explanation:
      "**Energie** = wat je nodig hebt om iets te **laten werken**.\n\n**Voorbeelden van energie thuis**:\n• Lamp brandt → **elektrische energie**.\n• Verwarming aan → **warmte-energie**.\n• Auto rijdt → **bewegings-energie**.\n• Telefoon werkt → **elektrische energie** (uit accu).\n• Eten koken → **warmte-energie** (uit gas of elektriciteit).\n\n**Waar komt energie vandaan?**\nEnergie moet ergens uit komen — uit **energiebronnen**.\n\n**Soorten energiebronnen**:\n\n**1. Fossiele brandstoffen** *(ouderwets)*:\n• **Aardolie** *(benzine, diesel, kerosine)*.\n• **Aardgas** *(verwarming, koken)*.\n• **Steenkool** *(elektriciteits-centrales)*.\n• Heten 'fossiel' omdat ze ontstaan uit dode planten + dieren van **miljoenen jaren** geleden.\n• **Probleem**: raken op + verontreinigen *(CO₂)*.\n\n**2. Duurzame / hernieuwbare energie** *(modern)*:\n• **Zon** → zonnepanelen.\n• **Wind** → windmolens.\n• **Water** → waterkracht-centrales.\n• **Aardwarmte** → geothermisch.\n• **Biomassa** → houtige planten / mest.\n• Worden **niet op** + veroorzaken weinig CO₂.\n\n**3. Kernenergie** *(omstreden)*:\n• Uit splijten van **uranium**.\n• Geen CO₂, maar wel **radioactief afval**.\n\n**Energie kun je niet maken**:\nEnergie 'maken' bestaat eigenlijk niet — je kunt het alleen **omzetten** van de ene vorm in de andere. Een windmolen zet bewegings-energie van wind om in elektrische energie.\n\n**Toets-feitje**:\nEen mens heeft per dag **ongeveer 2000-2500 kcal** aan voedings-energie nodig. Dat is veel minder dan een huishouden aan elektriciteit gebruikt *(een gemiddeld huishouden gebruikt per jaar evenveel elektrische energie als ongeveer 1000 mensen-dagen aan eten)*.",
    checks: [
      {
        q: "Wat is **energie**?",
        options: ["Wat nodig is om iets te laten werken", "Het eten dat je elke dag opeet", "Een stof die je kunt vastpakken", "Het licht dat uit een lamp komt"],
        answer: 0,
        wrongHints: [null, "Voedsel bevat energie, maar is het zelf niet.", "Energie kun je niet vastpakken.", "Licht is maar één vorm van energie."],
      },
      {
        q: "Welke is **fossiel**?",
        options: ["Aardolie", "Zon", "Wind", "Water"],
        answer: 0,
        wrongHints: [null, "Komt van een ster — geen brandstof.", "Lucht in beweging — niets te verbranden.", "Stroomt op aarde — niet diep onder de grond gegraven."],
        uitlegPad: {
          stappen: [
            { titel: "Twee soorten energie", tekst: "Energiebronnen splitsen we in: FOSSIEL (op-rakend) en DUURZAAM (niet-op-rakend)." },
            { titel: "Fossiele brandstoffen", tekst: "Fossiel = ontstaan uit dode planten en dieren van miljoenen jaren geleden. **Aardolie + aardgas + steenkool** zijn de 3 fossiele brandstoffen." },
            { titel: "Duurzame bronnen", tekst: "Zon, wind, water = duurzame bronnen. Ze raken niet op. De zon blijft schijnen, de wind blijft waaien." },
          ],
          woorden: [
            { woord: "fossiel", uitleg: "Uit oude tijd, eindig (raakt op): olie, gas, kool." },
            { woord: "duurzaam", uitleg: "Hernieuwbaar, raakt niet op: zon, wind, water." },
          ],
          theorie: "Toets-truc energie: 3 fossielen onthouden: olie, gas, kool. Alles ANDERS (zon, wind, water, biomassa) = duurzaam. Atomair (kernenergie) is geen van beide categorieën.",
          voorbeelden: [
            { type: "stap", tekst: "Tankstation = aardolie (benzine, diesel) = fossiel." },
            { type: "stap", tekst: "Zonnepanelen op dak = duurzaam (zon)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Fossiel = OUD (uit oude tijd). Duurzaam = NIEUW (kan elk moment weer komen)." }],
          niveaus: {
            basis: "Fossiel = aardolie, aardgas, steenkool. Duurzaam = zon, wind, water.",
            simpeler: "Olie/gas/kool = uit oude planten = fossiel.",
            nogSimpeler: "Olie/gas/kool = fossiel.",
          },
        },
      },
      {
        q: "Waarom heten ze **fossiele** brandstoffen?",
        options: ["Komen uit dode planten/dieren van lang geleden", "Ze worden gemaakt van stenen en zand", "Ze zijn pas kort geleden uitgevonden", "Niemand weet waar ze vandaan komen"],
        answer: 0,
        wrongHints: [null, "Stenen en zand branden niet. Waar komen ze dan wél vandaan?", "Tegenovergesteld — ze zijn juist heel oud.", "Wetenschappers weten het wél."],
      },
      {
        q: "Kun je **energie maken**?",
        options: ["Nee, alleen omzetten", "Ja, uit niets", "Ja, in een centrale", "Ja, met een batterij"],
        answer: 0,
        wrongHints: [null, "Iets uit niets? Dat kan niet volgens de natuurwet.", "Een centrale zet kolen, wind of zon om in stroom. Maakt ze dan iets nieuws?", "Een batterij slaat energie op die er al was. Maakt hij nieuwe energie?"],
        uitlegPad: {
          stappen: [
            { titel: "Natuurwet: behoud van energie", tekst: "Energie kun je NIET maken en NIET vernietigen. Je kunt het alleen OMZETTEN van de ene vorm in de andere. Dit heet de wet van behoud van energie." },
            { titel: "Energie zit overal", tekst: "Een windmolen ZET wind-energie om in elektrische energie. Een zonnepaneel ZET zonne-licht om in stroom. Een batterij ZET chemische energie om in elektriciteit." },
            { titel: "Verlies = warmte", tekst: "Bij omzetten gaat ALTIJD een beetje verloren als warmte. Daarom worden lampen warm, motoren warm, etc. Niets is 100% efficiënt." },
          ],
          woorden: [
            { woord: "omzetten", uitleg: "Van de ene energievorm naar de andere." },
            { woord: "wet van behoud van energie", uitleg: "Energie verdwijnt of ontstaat nooit — verandert alleen van vorm." },
          ],
          theorie: "Toets-tip: energie 'maken' is GEEN goede woordkeuze, ook al gebruiken mensen het zo. Officieel: energie OPWEKKEN of OMZETTEN. Een centrale ZET fossiele/wind/zon-energie om in elektriciteit.",
          voorbeelden: [
            { type: "stap", tekst: "Eten geeft je energie. Niet 'jij maakt energie', maar: voedsel-energie wordt omgezet in spier-energie." },
            { type: "stap", tekst: "Auto: benzine (chemisch) → ontploft in motor (warmte+beweging) → wielen draaien (kinetisch)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Bij elke vraag 'maakt het energie?' is het antwoord: nee, omzetten. Ook in een kernreactor wordt niets 'gemaakt': daar wordt massa omgezet in energie (Einstein E=mc²)." }],
          niveaus: {
            basis: "Energie wordt niet gemaakt, alleen omgezet (wet van behoud).",
            simpeler: "Windmolen ZET wind om in stroom. Niet 'maken'.",
            nogSimpeler: "Alleen omzetten.",
          },
        },
      },
    ],
  },
  {
    title: "Fossiele brandstoffen",
    explanation:
      "**Fossiele brandstoffen** = aardolie + gas + steenkool.\n\n**Hoe zijn ze ontstaan?**\n• **300 miljoen jaar** geleden leefden er veel planten en dieren.\n• Toen ze stierven kwamen ze diep onder de grond *(of zee-bodem)*.\n• **Druk + warmte** veranderden ze in olie, gas of kool.\n• Daarom heten ze **fossiel** *(uit oude tijd)*.\n\n**1. Aardolie** 🛢️\n• Vloeibaar.\n• In NL: voorraad bij Schoonebeek + Noordzee.\n• Wereld: vooral **Midden-Oosten** *(Saoedi-Arabië)*, Rusland, VS, Venezuela.\n• Wordt **geraffineerd** in raffinaderij → benzine, diesel, kerosine, plastic.\n\n**2. Aardgas** 🔥\n• Gas.\n• In NL: **Groningen-gasveld** — een van de grootste ter wereld.\n• Sinds 1959 → bracht NL veel geld op.\n• **Probleem**: gasboring → aardbevingen in Groningen.\n• Productie afgebouwd → **gestopt in 2024**.\n• Wereld: Rusland (Gazprom), VS, Iran, Qatar.\n\n**3. Steenkool** ⛏️\n• Vaste stof.\n• In NL: vroeger in **Limburg** *(mijnen gesloten 1965-1974)*.\n• Wereld: China, India, VS, Australië.\n• Meest CO₂ van alle fossiele brandstoffen.\n• In NL: laatste kolencentrales sluiten in **2030**.\n\n**Voordelen fossiel**:\n• **Goedkoop** *(infrastructuur bestaat al)*.\n• **Veel energie** per kg.\n• **Makkelijk te transporteren** *(pijpleidingen, tankschepen)*.\n• **Altijd beschikbaar** *(weer-onafhankelijk)*.\n\n**Nadelen fossiel**:\n• **Raken op** *(eindig)*.\n• **CO₂-uitstoot** → klimaatverandering.\n• **Luchtvervuiling** → smog, fijnstof.\n• **Olie-rampen** *(Exxon Valdez 1989, Deepwater Horizon 2010)*.\n• **Politieke afhankelijkheid** *(Rusland-gas voor EU)*.\n• **Aardbevingen** *(NL Groningen)*.\n\n**Hoe lang nog?**\nGeschatte voorraad:\n• **Aardolie**: ~50 jaar.\n• **Aardgas**: ~50 jaar.\n• **Steenkool**: ~150 jaar.\n\nDaarna moet alles op andere bronnen draaien — daarom is energietransitie nodig.\n\n**Toets-feitje**:\nEen **vat olie** = 159 liter. Prijs varieert tussen $20-$140. Lager dan ~$30 = veel olielanden verliezen geld; hoger dan ~$100 = wereldeconomie krijgt klap.",
    checks: [
      {
        q: "Welke fossiele brandstof is **vloeibaar**?",
        options: ["Aardolie", "Aardgas", "Steenkool", "Uranium"],
        answer: 0,
        wrongHints: [null, "Aardgas is een gas — denk aan de vlam op het fornuis.", "Steenkool is een vaste, zwarte steen.", "Uranium is een metaal en geen fossiele brandstof."],
      },
      {
        q: "In welk jaar ging het **Groningen-gasveld** definitief dicht?",
        options: ["2024", "2018", "1959", "2050"],
        answer: 0,
        wrongHints: [null, "In 2018 besloot de regering te stoppen, maar de kraan ging toen nog niet dicht.", "In 1959 werd het gas juist ontdekt.", "2050 is het klimaatdoel voor heel Nederland, niet het jaar dat het veld sloot."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is het Groningen-gasveld?", tekst: "Het **Groningen-gasveld** (vooral onder Slochteren) is een van de **grootste aardgasvelden ter wereld**. Ontdekt in 1959, bracht NL miljarden euro's op. Veel huizen kookten + verwarmden op Gronings gas." },
            { titel: "Probleem: aardbevingen", tekst: "Door het wegpompen van gas zakt de bodem en ontstaan **aardbevingen**. Tienduizenden Groningse huizen kregen scheuren. Mensen werden bang, sommigen moesten verhuizen. Grote schade + protest." },
            { titel: "Sluiting 2024", tekst: "Na jarenlange afbouw heeft de NL-regering besloten het veld **per 1 oktober 2023 dicht** te draaien (definitief gesloten in april 2024). NL moet nu gas importeren uit andere landen (Noorwegen, VS, Qatar)." },
          ],
          woorden: [
            { woord: "Slochteren", uitleg: "Plaats in Groningen waar gas in 1959 werd ontdekt." },
            { woord: "aardbevingen", uitleg: "Beving van de bodem; in Groningen veroorzaakt door gaswinning." },
          ],
          theorie: "Toets-feit Groningen-gas-tijdlijn:\n• **1959** ontdekt bij Slochteren.\n• **1963-2010s** miljarden m³ gas per jaar.\n• **1986** eerste aardbeving toegeschreven.\n• **2012** Huizinge-beving 3,6 (zwaarste ooit).\n• **2018** kabinet besluit te stoppen.\n• **2023-2024** dichtgedraaid.",
          voorbeelden: [
            { type: "stap", tekst: "Veel NL-huizen draaiden op Gronings gas. Nu moeten ze geleidelijk **van het gas af** (warmtepompen, all-electric)." },
            { type: "stap", tekst: "1959 = ontdekking, niet sluiting. 2050 = klimaatdoel, niet datum dichtdraaien. Het gasveld sloot eerder af dan oorspronkelijk gepland, vooral door aardbevingen." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Groningen-gas: ontdekt 1959, gestopt 2024 wegens aardbevingen. Politiek en ethisch issue — 'energie vs. veiligheid bewoners'." }],
          niveaus: {
            basis: "In 2024 ging het Groningen-gasveld voorgoed dicht, omdat de gaswinning aardbevingen veroorzaakte.",
            simpeler: "De gaskraan ging in oktober 2023 dicht. In 2024 besloot de regering dat het veld nooit meer opengaat.",
            nogSimpeler: "In 2024.",
          },
        },
      },
      {
        q: "Wat veroorzaakte **aardbevingen** in Groningen?",
        options: ["Gaswinning uit de bodem", "Een vulkaan onder de grond", "Zware stormen op zee", "Het heien voor windmolens"],
        answer: 0,
        wrongHints: [null, "Nederland heeft geen vulkanen. Wat haalde men uit de Groningse bodem?", "Stormen schudden de grond niet. Wat gebeurde er diep onder Groningen?", "Heien geeft trillingen, maar geen aardbevingen. Wat werd er uit de bodem gepompt?"],
      },
      {
        q: "Hoeveel jaar is er naar schatting nog **aardolie**?",
        options: ["~50 jaar", "~100 jaar", "~1000 jaar", "Oneindig"],
        answer: 0,
        wrongHints: [null, "Minder — de voorraad raakt sneller op dan dat.", "Veel minder — zo lang gaat het niet mee.", "Olie is fossiel: ooit raakt het op."],
      },
    ],
  },
  {
    title: "Duurzame energie",
    explanation:
      "**Duurzame energie** = bronnen die **niet opraken**.\nOok wel **hernieuwbare** of **groene** energie.\n\n**1. Zonne-energie** ☀️\n• **Zonnepanelen** vangen zonlicht op.\n• Maken er **elektriciteit** van *(fotovoltaïsch)*.\n• Werkt ook bij bewolkt weer *(minder)*.\n• Wereld-leider: China *(80% van panelen-productie)*.\n• In NL: 1 op de 4 huizen heeft panelen *(2024)*.\n• **Probleem**: 's nachts geen stroom → opslag nodig.\n\n**2. Windenergie** 🌬️\n• **Windmolens** zetten wind om in stroom.\n• Op land **of** op zee *(offshore — meer wind)*.\n• In NL: **Noordzee** heeft enorme windparken *(Borssele, Hollandse Kust)*.\n• Eén grote windmolen kan ~1500 huishoudens van stroom voorzien.\n• **Probleem**: wind is niet altijd, mensen klagen over geluid + horizonvervuiling.\n\n**3. Waterkracht** 💧\n• **Stuwdammen** of getijdencentrales.\n• In NL: weinig *(plat land, geen bergen)*.\n• Wereld: China *(Drie-Klovendam)*, Brazilië *(Itaipu)*, Noorwegen.\n• Voordeel: stabiel.\n\n**4. Biomassa** 🌳\n• Verbranden van planten / hout / mest.\n• **Houtsnippers** in centrales *(omstreden — bossen kappen tegenstrijdig met klimaatdoel)*.\n• **Biogas** uit koeienmest.\n• Niet 100% CO₂-vrij maar uit hernieuwbare bron.\n\n**5. Geothermie** 🔥\n• Warmte uit de **aarde**.\n• In NL: bij tuinders + voor verwarmen woonwijken.\n• Boren tot 2-3 km diep waar het 80-90°C is.\n\n**6. Getijde + golven** 🌊\n• Energie uit eb + vloed of golfslag.\n• In NL: getijdencentrale Brouwersdam test.\n• Nog kleine schaal wereldwijd.\n\n**Voordelen duurzaam**:\n• **Raken niet op**.\n• **Geen of weinig CO₂**.\n• **Minder afhankelijk** van andere landen.\n• Steeds **goedkoper** *(zonnepaneel kost nu 90% minder dan in 2010)*.\n\n**Nadelen duurzaam**:\n• **Weer-afhankelijk** *(geen zon, geen wind)*.\n• **Opslag nodig** *(grote batterijen)*.\n• **Ruimte nodig** *(landschap)*.\n• **Hoge investering** vooraf.\n• Sommige materialen schaars *(lithium, kobalt voor batterijen)*.\n\n**NL transitie**:\nDoel 2030: 70% van NL-elektriciteit uit duurzaam.\nIn 2023: ~46% al duurzaam — snelle groei.\n\n**Toets-feitje**:\nDe **grootste windmolen ter wereld** *(China)* heeft wieken van **131 meter** — bijna 3x het Vrijheidsbeeld. Eén zo'n molen kan duizenden huishoudens van stroom voorzien.",
    checks: [
      {
        q: "Wat is **duurzame** energie?",
        options: ["Energie die niet opraakt", "Goedkope energie", "Energie uit olie", "Alleen elektriciteit"],
        answer: 0,
        wrongHints: [null, "Duurzaam gaat niet over de prijs. Waar gaat het wel over?", "Olie raakt op — is dat duurzaam?", "Ook warmte kan duurzaam zijn. Het gaat om de bron, niet om de vorm."],
        uitlegPad: {
          stappen: [
            { titel: "Wat is duurzaam?", tekst: "DUURZAAM betekent: blijft lang bestaan, raakt niet op. Duurzame energie komt uit bronnen die zichzelf 'vernieuwen' — daarom heet het ook HERNIEUWBARE energie." },
            { titel: "5 bronnen", tekst: "Duurzame energiebronnen: zon, wind, water (rivier of getij), biomassa (planten), aardwarmte (geothermie)." },
            { titel: "Waarom belangrijk?", tekst: "Omdat fossiele brandstoffen 1) opraken (over 50-150 jaar weg) en 2) klimaatverandering veroorzaken (CO₂). Duurzaam = geen van beide problemen." },
          ],
          woorden: [
            { woord: "duurzaam", uitleg: "Raakt niet op, kan eindeloos." },
            { woord: "hernieuwbaar", uitleg: "Synoniem van duurzaam." },
            { woord: "groene energie", uitleg: "Andere naam, vooral marketing-term." },
          ],
          theorie: "Toets-feit: 'duurzaam' wordt ook gebruikt voor producten of acties die het milieu sparen. Maar bij energie betekent het specifiek: hernieuwbare bron (zon/wind/water/etc).",
          voorbeelden: [
            { type: "stap", tekst: "Zonnepanelen, windmolens, waterkracht-centrales = duurzame energie-opwekking." },
            { type: "stap", tekst: "Aardolie, aardgas, steenkool = NIET duurzaam (raken op + CO₂)." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Duurzaam = blijft. Fossiel = op een dag OP." }],
          niveaus: {
            basis: "Duurzame energie = uit bronnen die niet opraken (zon, wind, water).",
            simpeler: "Duurzaam = blijft komen. Fossiel = raakt op.",
            nogSimpeler: "Duurzaam = oneindig.",
          },
        },
      },
      {
        q: "Hoeveel **waterkracht** gebruikt Nederland voor stroom?",
        options: ["Weinig", "Veel", "Het is de hoofdbron", "Helemaal geen"],
        answer: 0,
        wrongHints: [null, "Voor waterkracht heb je hoogteverschil nodig. Heeft Nederland bergen?", "Nee — de meeste stroom komt uit andere bronnen.", "Er zijn wel een paar kleine waterkrachtcentrales, bijvoorbeeld in de Maas."],
      },
      {
        q: "Waar staat een **offshore** windpark?",
        options: ["Op zee", "Op een berg", "In een stad", "Op het land"],
        answer: 0,
        wrongHints: [null, "'Offshore' betekent 'van de kust af'. Ligt een berg bij de kust?", "Windmolens tussen de huizen? Denk aan het Engelse woord 'shore' (kust).", "Op het land heet het juist 'onshore'."],
        uitlegPad: {
          stappen: [
            { titel: "Offshore = op zee", tekst: "**Offshore** is Engels voor 'van de kust af'. Een **offshore windpark** is een groep windmolens die in **zee** staan, ver van de kust. Het tegenovergestelde is **onshore** (op land)." },
            { titel: "Waarom op zee?", tekst: "Op zee waait het:\n• **Harder** (geen heuvels of bomen die wind tegenhouden)\n• **Vaker** (consistente wind, niet stop-start)\n• **Geen overlast** voor bewoners (slagschaduw, geluid)\n→ Daarom meer stroom per molen + minder klachten." },
            { titel: "NL is wereld-top", tekst: "Nederland heeft **enorme offshore windparken** in de **Noordzee**: Borssele, Hollandse Kust Zuid + Noord, Gemini. Samen leveren ze stroom voor miljoenen huishoudens. Ondiepe Noordzee = ideaal." },
          ],
          woorden: [
            { woord: "offshore", uitleg: "Op zee, van kust af." },
            { woord: "onshore", uitleg: "Op land." },
            { woord: "windpark", uitleg: "Groep windmolens samen." },
          ],
          theorie: "Toets-feit offshore: ondiepe Noordzee + harde wind = perfect voor NL. Nieuwe offshore-projecten: 'Hollandse Kust West' opent in 2026. Doel NL: in 2030 70% duurzame stroom — offshore is de motor.",
          voorbeelden: [
            { type: "stap", tekst: "Op zee staat een grote windmolen makkelijk 200 meter hoog, wieken van 100 meter. Veel groter dan op land mogelijk is." },
            { type: "stap", tekst: "1 grote offshore-molen = ~1500-4000 huishoudens. Een park van 100 molens = stad-omvang." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "OFFshore = OFF-kust = op zee. ON-shore = ON-land. Engelse termen, ook NL gebruikt." }],
          niveaus: {
            basis: "Op zee.",
            simpeler: "Windpark in zee (offshore = 'van de kust'), waar wind harder waait.",
            nogSimpeler: "Op zee",
          },
        },
      },
      {
        q: "Wat is een **nadeel** van zonne-energie?",
        options: ["'s Nachts geen stroom", "Maakt veel lawaai", "Werkt alleen in de zomer", "Kost heel veel brandstof"],
        answer: 0,
        wrongHints: [null, "Zonnepanelen maken geen geluid.", "Ook in de winter en bij bewolking werken ze (wel minder).", "Zonnepanelen gebruiken geen brandstof — alleen licht."],
      },
    ],
  },
  {
    title: "Kernenergie",
    explanation:
      "**Kernenergie** = energie uit het **splijten van atomen**.\nOmstreden — voor- en tegenstanders.\n\n**Hoe werkt het?**\n• In een **kernreactor** wordt **uranium** *(zwaar metaal)* gesplitst.\n• Bij splijting komt **enorm veel warmte** vrij.\n• Die warmte verwarmt water → stoom → drijft turbine → elektriciteit.\n• Eén kerncentrale: **1000 MW** = 1 miljoen huishoudens.\n\n**Voordelen**:\n• **Geen CO₂** *(klimaatvriendelijk)*.\n• **Veel energie** per gram brandstof *(1 kg uranium = 2,7 miljoen kg kolen)*.\n• **Stabiel** *(24/7, onafhankelijk van weer)*.\n• **Klein land-gebruik** *(kleine centrale = veel stroom)*.\n\n**Nadelen**:\n• **Radioactief afval** *(blijft 1000+ jaar gevaarlijk)*.\n• **Ongelukken** *(zeldzaam maar erg)*:\n  - **Tsjernobyl 1986** *(Oekraïne, ex-Sovjet)*.\n  - **Fukushima 2011** *(Japan, na tsunami)*.\n• **Kernwapens-risico** *(zelfde technologie)*.\n• **Hoge bouwkosten** *(€10+ miljard per centrale)*.\n• **Lange bouwtijd** *(10-15 jaar)*.\n\n**In Nederland**:\n• 1 werkende kerncentrale: **Borssele** *(Zeeland, sinds 1973)*.\n• Levert ~3% van NL-elektriciteit.\n• Politiek: kabinet plant **2 nieuwe** kerncentrales *(Borssele 2 + 3)*.\n• Discussie: voorstanders = klimaat-oplossing; tegenstanders = afval-probleem + duur.\n\n**Internationale verschillen**:\n• **Frankrijk**: 70% kernenergie — meest van EU.\n• **Duitsland**: alle kerncentrales **uit** *(2023, na Fukushima-paniek)*.\n• **China**: bouwt heel veel nieuwe centrales.\n• **VS**: ~20% kernenergie.\n\n**Toekomst: kernfusie**:\n• **Splijting** *(huidige reactors)*: atoom uit elkaar halen.\n• **Fusie** *(toekomst)*: atomen samenvoegen *(zoals in de zon)*.\n• Fusie zou **veel veiliger** + **veel minder afval** geven.\n• Test-reactor **ITER** in Frankrijk — werkt 2035.\n• Commercieel pas vanaf **2050+**.\n\n**Toets-feitje**:\nDe **kernramp in Tsjernobyl** *(26 april 1986)* maakte een gebied groter dan de hele provincie Utrecht voor lange tijd onbewoonbaar. De 'verboden zone' (30 km rondom) is er nog steeds.",
    checks: [
      {
        q: "Hoe werkt **kernenergie**?",
        options: ["Splijten van uranium-atomen", "Verbranden van olie en kolen", "Invangen van wind met wieken", "Opvangen van zonlicht met panelen"],
        answer: 0,
        wrongHints: [null, "Dat is fossiele energie.", "Dat is windenergie.", "Dat is zonne-energie."],
        uitlegPad: {
          stappen: [
            { titel: "Kernsplijting = atomen breken", tekst: "**Kernenergie** komt uit het **splijten van uranium-atomen**. Wetenschappers schieten een mini-deeltje (neutron) op een uranium-atoom → het atoom **breekt in tweeën** + er komt **enorm veel warmte** vrij." },
            { titel: "Van warmte naar stroom", tekst: "Die warmte verwarmt water → water wordt **stoom** → stoom drijft een **turbine** (soort grote ventilator) → turbine draait een **generator** → generator maakt **elektriciteit**. Dezelfde laatste stappen als bij een kolencentrale." },
            { titel: "Waarom enorm veel energie", tekst: "**1 kilo uranium** geeft evenveel energie als **2,7 miljoen kilo steenkool**. Daarom kan 1 kerncentrale een hele stad voeden. Maar... het maakt **radioactief afval** dat 1000+ jaar gevaarlijk blijft." },
          ],
          woorden: [
            { woord: "uranium", uitleg: "Zwaar metaal dat radioactief is en gespleten kan worden." },
            { woord: "kernsplijting", uitleg: "Atoom breken in 2 stukken; geeft veel energie." },
            { woord: "neutron", uitleg: "Klein deeltje dat geen lading heeft." },
          ],
          theorie: "Toets-feit kernenergie:\n• NL heeft 1 kerncentrale: **Borssele** (Zeeland, sinds 1973).\n• Levert ~3% NL-stroom.\n• Geen CO₂ uitstoot (klimaatvriendelijk).\n• MAAR: radioactief afval + risico ongelukken (Tsjernobyl 1986, Fukushima 2011).\n• Toekomst kernfusie (zoals zon, veiliger, nog niet commercieel).",
          voorbeelden: [
            { type: "stap", tekst: "Frankrijk: 70% van stroom uit kernenergie. Duitsland: alles uit (sinds 2023, paniek na Fukushima)." },
            { type: "stap", tekst: "Olie verbranden = chemische reactie. Kernenergie = atoom breken. **Totaal anders proces** maar uiteindelijk allebei: warmte → stoom → stroom." },
          ],
          basiskennis: [{ onderwerp: "Truc", uitleg: "Kernenergie = URANIUM + SPLIJTEN + WARMTE. Niet verbranden (dat is fossiel). Niet weer-afhankelijk (zoals wind/zon)." }],
          niveaus: {
            basis: "Splijten van uranium-atomen.",
            simpeler: "Uranium-atomen breken → veel warmte → water kookt → stoom → stroom.",
            nogSimpeler: "Uranium splijten",
          },
        },
      },
      {
        q: "Waar staat de **kerncentrale** van Nederland?",
        options: ["Borssele", "Amsterdam", "Groningen", "Nederland heeft er geen"],
        answer: 0,
        wrongHints: [null, "Niet in de hoofdstad — zoek een plaats in Zeeland.", "Groningen is bekend van gas, niet van kernenergie.", "Nederland heeft er wél één, sinds 1973."],
      },
      {
        q: "Welk land haalt het **grootste deel van zijn stroom** uit kernenergie?",
        options: ["Frankrijk", "Nederland", "België", "Duitsland"],
        answer: 0,
        wrongHints: [null, "Nederland heeft maar één kerncentrale (~3% van de stroom).", "België haalt een flink deel van zijn stroom uit kerncentrales, maar er is een land dat nog veel meer kernstroom gebruikt.", "Duitsland heeft al zijn kerncentrales juist gesloten (2023)."],
      },
      {
        q: "Wat is een groot **nadeel** van kernenergie?",
        options: ["Radioactief afval", "Veel CO₂-uitstoot", "Werkt alleen bij zon", "Maakt heel weinig stroom"],
        answer: 0,
        wrongHints: [null, "Een kerncentrale stoot juist bijna geen CO₂ uit.", "Kernenergie werkt dag en nacht, bij elk weer.", "Eén centrale levert juist heel veel stroom — het probleem zit ergens anders."],
      },
    ],
  },
  {
    title: "Nederland en energie",
    explanation:
      "**NL energiemix** *(2024 ongeveer)*:\n• **Aardgas**: ~30% *(verwarming, industrie)*.\n• **Aardolie**: ~30% *(vervoer)*.\n• **Steenkool**: ~5%.\n• **Duurzaam** *(zon+wind+biomassa)*: ~25%.\n• **Kern**: ~3%.\n• **Import**: ~7%.\n\n**Belangrijke NL-bedrijven**:\n• **Shell** *(oliemaatschappij, van oorsprong Nederlands; hoofdkantoor sinds 2022 in Londen, daarvoor Den Haag)*.\n• **Eneco, Vattenfall, Essent** *(energieleveranciers)*.\n• **Gasunie, TenneT** *(netwerken)*.\n• **NAM** *(gas Groningen — Shell + ExxonMobil)*.\n\n**Energietransitie NL**:\nDoel: **klimaatneutraal in 2050**.\n\n**1. Huizen van gas af** 🏠\n• Sinds 2018 **geen nieuwbouw** meer met gasaansluiting.\n• Bestaande huizen → **warmtepomp** of warmtenet.\n• Subsidie ISDE voor warmtepomp + isolatie.\n• Doel: 7 miljoen huizen + gebouwen verduurzamen.\n\n**2. Wind op zee** 🌊\n• Noordzee: massa-aanleg windparken.\n• 2030 doel: **21 GW** op zee *(genoeg voor ~17 miljoen huishoudens)*.\n• Bestaande parken: Borssele, Hollandse Kust Zuid + Noord.\n\n**3. Zonneparken** ☀️\n• Op daken + op land *(grasland, water)*.\n• Discussie: ruimte voor landbouw vs zon?\n• 'Zon op dak eerst'-principe.\n\n**4. Waterstof** 💨\n• **Toekomst-energie**: groene waterstof uit windstroom.\n• Gebruik: zware industrie, transport, opslag.\n• NL leider met haven Rotterdam.\n\n**5. Industrie verduurzamen** 🏭\n• Grootste vervuilers *(Tata Steel, Shell, Yara, BP)* moeten CO₂ omlaag.\n• Maatwerkafspraken met overheid.\n• Carbon Capture and Storage *(CCS)* — opslaan CO₂ onder zee.\n\n**Politieke discussies**:\n\n**Pro energietransitie**:\n• Klimaat dwingt.\n• Onafhankelijk van Rusland *(na 2022 Oekraïne-oorlog)*.\n• Werkgelegenheid duurzame sector.\n\n**Contra / nuances**:\n• **Energiearmoede** — arme gezinnen kunnen warmtepomp niet betalen.\n• **Hoge gasprijzen** sinds 2022 → stookkostenstijging.\n• **Net-congestie** — elektriciteitsnet vol *(slim opladen nodig)*.\n• **Landschapsvervuiling** *(windmolens, zonneparken)*.\n• **Stikstof-crisis** raakt boeren *(parallel probleem)*.\n\n**Wat kun JIJ doen?**\n• **Isoleer je huis** *(dak, ramen, gevel)* — minst sexy maar grootste impact.\n• **Zet thermostaat op 19°C** *(niet 22)*.\n• **LED-lampen** + zuinige apparaten.\n• **Korter douchen** *(scheelt veel gas)*.\n• **OV/fiets ipv auto**.\n• **Bewust eten** *(minder vlees)*.\n• **Stem op partij** met goed klimaatplan.\n• Steun **buurt-energiecoöperaties** *(eigen windmolen of zonneveld)*.\n\n**Toets-feitje**:\n80% van de energie in een huishouden gaat naar **verwarming + warm water** — alleen 20% is voor apparaten + licht. **Isoleren** is daarom de belangrijkste energiebesparende maatregel.",
    checks: [
      {
        q: "Welke energiebronnen zijn de **grootste** in de energiemix van Nederland?",
        options: ["Aardgas en aardolie", "Zon en wind", "Kernenergie", "Steenkool"],
        answer: 0,
        wrongHints: [null, "Groeit snel, maar is nog veel kleiner.", "Slechts ~3%.", "Nog maar een klein deel."],
      },
      {
        q: "Sinds welk jaar **geen gasaansluiting** in nieuwbouw NL?",
        options: ["2018", "2024", "1990", "2030"],
        answer: 0,
        wrongHints: [null, "In dat jaar sloot het Groningen-veld; de regel voor nieuwbouw kwam eerder.", "Toen kookte en stookte bijna iedereen nog op gas.", "Dat is een klimaatdoel-jaar; de regel voor nieuwbouw geldt al."],
      },
      {
        q: "Wat bedoelen we met **energiearmoede**?",
        options: ["Gezinnen die energie niet kunnen betalen", "Huizen zonder aansluiting op het stroomnet", "Gezinnen die heel veel energie besparen", "Gratis energie voor alle gezinnen"],
        answer: 0,
        wrongHints: [null, "In Nederland heeft bijna elk huis stroom. Waar gaat 'armoede' over?", "Besparen is een keuze — armoede niet.", "Dat is juist het omgekeerde van armoede."],
      },
      {
        q: "Waar gaat in een huis de **meeste energie** naartoe?",
        options: ["Verwarming en warm water", "Lampen en verlichting", "Wifi en de computer", "Tv en spelcomputer"],
        answer: 0,
        wrongHints: [null, "Lampen gebruiken maar een paar procent, zeker met LED.", "Wifi en computer zijn maar een klein deel van het totaal.", "Tv en spelcomputer zijn maar een klein deel van het totaal."],
      },
    ],
  },
  {
    title: "Eind-toets — energie mix",
    explanation: "Mix-toets in Doorstroomtoets-stijl.\n\nVeel succes!",
    checks: [
      { q: "Welke energiebron is **fossiel**?", options: ["Aardgas", "Zon", "Wind", "Water"], answer: 0, wrongHints: [null, "Zonlicht komt elke dag opnieuw; je graaft het niet op uit de grond.", "Wind is bewegende lucht; daar valt niets aan te verbranden.", "Water stroomt op aarde; het is niet diep uit de grond gehaald."] },
      { q: "Welke energiebron is **duurzaam**?", options: ["Zonne-energie", "Steenkool", "Aardolie", "Aardgas"], answer: 0, wrongHints: [null, "Steenkool haal je uit een mijn, en de voorraad raakt op.", "Aardolie pomp je op uit putten, en de voorraad raakt op.", "Aardgas raakt op: het Groningen-gasveld is al dicht."] },
      { q: "Waarvoor wordt **uranium** gebruikt?", options: ["Kernenergie", "Benzine maken", "Gas voor het fornuis", "Zonnepanelen maken"], answer: 0, wrongHints: [null, "Benzine komt uit aardolie, niet uit een metaal.", "Fornuisgas is aardgas, dat komt uit de grond.", "Zonnepanelen maken stroom uit licht, niet uit een zwaar metaal."] },
      { q: "Wat gebeurt er bij **CCS**?", options: ["CO₂ opvangen en diep onder de grond opslaan", "Stroom bewaren in hele grote batterijen", "Warmte diep uit de grond omhoog halen", "Aardgas uit de grond oppompen en verkopen"], answer: 0, wrongHints: [null, "Grote batterijen bewaren stroom. CCS is bedoeld om fabrieken schoner te maken.", "Warmte uit de grond halen heet aardwarmte (geothermie). CCS is iets anders.", "Gas oppompen maakt het klimaatprobleem niet kleiner. CCS is juist bedoeld om fabrieken schoner te maken."] },
      { q: "Waar is **Borssele** in Zeeland bekend om?", options: ["Een kerncentrale die stroom maakt", "Een stuwdam die stroom maakt", "Een groot veld met aardgas", "Een fabriek die zonnepanelen maakt"], answer: 0, wrongHints: [null, "Voor een stuwdam heb je bergen en een snelle rivier nodig. Zeeland is plat.", "Het grote gasveld van Nederland ligt in een andere provincie, in het noorden.", "De meeste zonnepanelen worden in China gemaakt."] },
      { q: "Kun je **nieuwe energie** maken?", options: ["Nee, je kunt energie alleen omzetten", "Ja, je kunt energie uit het niets maken", "Ja, wetenschappers maken nieuwe energie", "Ja, een computer maakt nieuwe energie"], answer: 0, wrongHints: [null, "Denk aan een fietsdynamo: waar komt zijn stroom vandaan?", "Ook wetenschappers beginnen altijd met energie die er al is, bijvoorbeeld uit wind of gas.", "Een computer verbruikt juist energie."] },
      { q: "Welke energiebron is **hernieuwbaar**?", options: ["Zon","Aardolie","Aardgas","Steenkool"], answer: 0, wrongHints: [null, "Aardolie pomp je op uit de grond, en wat op is, komt niet terug.", "Aardgas raakt op: het Groningen-gasveld is al dicht.", "Steenkool uit oude mijnen groeit niet bij."] },
      { q: "Welke energie levert een **windturbine**?", options: ["Elektriciteit","Olie","Aardgas","Kolen"], answer: 0, wrongHints: [null, "Olie pomp je op — geen wind.", "Gas komt uit de grond, niet uit de lucht.", "Kolen graaf je — een windmolen graaft niet."] },
      { q: "Wat zit er in **zonnepanelen**?", options: ["Cellen die licht omzetten in stroom", "Olie die door de zon verbrandt", "Kolen die warm worden in de zon", "Batterijen die stroom bewaren"], answer: 0, wrongHints: [null, "Een zonnepaneel verbrandt niets.", "In een zonnepaneel zit geen brandstof.", "Batterijen bewaren stroom, maar wat maakt die stroom?"] },
      { q: "Wat voor stroom komt er in Nederland uit het **stopcontact**?", options: ["230 V wisselstroom", "12 V gelijkstroom", "230 V gelijkstroom", "12 V wisselstroom"], answer: 0, wrongHints: [null, "Dat is ongeveer de stroom van een auto-accu.", "Gelijkstroom ken je van batterijen. Werkt het stopcontact ook zo?", "Dat is veel te weinig spanning voor een stopcontact."] },
      { q: "Wat is een **kerncentrale**?", options: ["Een centrale die stroom maakt met kernsplijting", "Een centrale die stroom maakt met windmolens", "Een centrale die stroom maakt met zonnepanelen", "Een centrale die stroom maakt met steenkool"], answer: 0, wrongHints: [null, "Dat is een windpark.", "Dat is een zonnepark.", "Steenkool verbrand je in een kolencentrale."] },
      { q: "Wat doet een **batterij**?", options: ["Slaat energie op", "Maakt stroom uit niets", "Maakt warmte", "Maakt licht"], answer: 0, wrongHints: [null, "Uit niets? Dat kan niet. Waar komt de stroom in een batterij vandaan?", "Een batterij wordt soms warm, maar dat is niet zijn taak.", "Een lamp maakt licht; de batterij levert de energie."] },
      { q: "Welke energie krijg je vooral uit een **gasfornuis**?", options: ["Warmte", "Elektriciteit", "Beweging", "Magnetisme"], answer: 0, wrongHints: [null, "Er gaat geen stroom door de gasvlam.", "Er beweegt niets dat iets aandrijft.", "Er zit geen magneet in een gasfornuis."] },
      { q: "Wat is **isolatie** thuis?", options: ["Materiaal dat de warmte binnenhoudt", "Apparaat dat je huis verwarmt", "Paneel dat stroom maakt uit zon", "Meter die je verbruik bijhoudt"], answer: 0, wrongHints: [null, "Dat is de verwarming — isolatie maakt zelf geen warmte.", "Isolatie maakt geen energie.", "Dat is een energiemeter."] },
      { q: "Welke energie heeft **stromend water** (rivier)?", options: ["Bewegingsenergie", "Warmte", "Licht", "Elektrische energie"], answer: 0, wrongHints: [null, "Water kan warm zijn, maar het stromen zelf is iets anders.", "Water geeft zelf geen licht.", "Pas in een waterkrachtcentrale wordt het stroom."] },
      { q: "Wat is een **kWh**?", options: ["Eenheid voor elektrisch verbruik", "Eenheid voor gewicht van spullen", "Eenheid voor hoe lang iets duurt", "Eenheid voor hoe warm het is"], answer: 0, wrongHints: [null, "Gewicht meet je in kilogram.", "Tijd alleen meet je in uren of seconden.", "Temperatuur meet je in graden."] },
      { q: "Welke energiebronnen kosten geen brandstof, maar hangen wel af van het **weer**?", options: ["Zon en wind","Olie en gas","Kolen en olie","Gas en kolen"], answer: 0, wrongHints: [null, "Olie en gas moet je oppompen en kopen: dat is brandstof.", "Kolen graaf je uit de grond en olie pomp je op: allebei brandstof.", "Gas en kolen verbrand je in een centrale: dat is brandstof."] },
      { q: "Welk deel van de **stroom** in Nederland komt uit duurzame bronnen (2024)?", options: ["Ongeveer 50%","Ongeveer 5%","Precies 100%","Ongeveer 20%"], answer: 0, wrongHints: [null, "Veel meer — kijk naar alle windmolens op zee en zonnepanelen op daken.", "Nog niet — er draaien nog gas- en kolencentrales.", "Meer — dat was het rond 2019, sindsdien is het flink gegroeid."] },
      { q: "Welke energiebron heeft de **laagste CO₂-uitstoot**?", options: ["Windenergie", "Steenkool", "Aardolie", "Aardgas"], answer: 0, wrongHints: [null, "Steenkool stoot juist het meeste CO₂ uit.", "Olie verbranden geeft veel CO₂.", "Gas is schoner dan kolen, maar nog steeds fossiel."] },
      { q: "Welke energievorm **zit in voedsel**?", options: ["Chemische energie", "Elektrische energie", "Magnetische energie", "Geluidsenergie"], answer: 0, wrongHints: [null, "Er loopt geen stroom door je boterham.", "Voedsel is geen magneet.", "Voedsel geeft geen geluid af."] },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const energiebronnenPo = {
  id: "energiebronnen-po",
  title: "Energiebronnen (PO + klas 1-2)",
  emoji: "💡",
  level: "groep6-8",
  subject: "natuur",
  referentieNiveau: "1F",
  sloThema: "Wereldoriëntatie — natuur & techniek + aardrijkskunde",
  prerequisites: [],
  intro:
    "Energiebronnen voor groep 6-8 + klas 1-2 — wat is energie + fossiel (olie/gas/kool) + duurzaam (zon/wind/water/biomassa/geothermie) + kernenergie (uranium/Tsjernobyl/Borssele) + NL energiemix + energietransitie. Sluit aan op klimaatverandering. ~15 min.",
  triggerKeywords: [
    "energie", "energiebron",
    "fossiel", "aardolie", "aardgas", "steenkool",
    "duurzaam", "groen", "hernieuwbaar",
    "zonnepaneel", "zonne-energie", "windmolen", "windenergie",
    "kernenergie", "uranium", "Borssele", "Tsjernobyl",
    "biomassa", "waterstof", "geothermie",
    "energietransitie", "klimaatneutraal",
  ],
  chapters,
  steps,
};

export default energiebronnenPo;

// Leerpad: Aardobservatie + risicogebieden — HAVO/VWO Aardrijkskunde
// Eindexamen-CSE-thema HAVO. Tektoniek, klimaat-risico, GIS.
// 5 stappen × ~5 checks.

const COLORS = {
  text: "#e0e6f0",
  muted: "#8899aa",
  paper: "rgba(255,255,255,0.04)",
  risico: "#ef5350",
  klimaat: "#ff8a65",
  tektoniek: "#8d6e63",
  data: "#42a5f5",
  groen: "#66bb6a",
};

const stepEmojis = ["🌋", "🌊", "🛰️", "🚨", "🏆"];

const chapters = [
  { letter: "A", title: "Tektonische risico's", emoji: "🌋", from: 0, to: 0 },
  { letter: "B", title: "Klimaat- + waterrisico's", emoji: "🌊", from: 1, to: 1 },
  { letter: "C", title: "GIS + aardobservatie", emoji: "🛰️", from: 2, to: 2 },
  { letter: "D", title: "Risico-management + kwetsbaarheid", emoji: "🚨", from: 3, to: 3 },
  { letter: "E", title: "Eindopdracht", emoji: "🏆", from: 4, to: 4 },
];

const steps = [
  // ─── A. Tektonische risico's ──────────────────────────────
  {
    title: "Tektonische risico's — aardbevingen + vulkanen",
    explanation:
      "**Tektoniek** komt door beweging van **lithosfeer-platen** op de taai-vloeibare mantel. Plaatgrenzen = risicogebieden.\n\n**Drie soorten plaatgrenzen**:\n\n**1. Divergent** (uit-elkaar):\n• Platen drijven uit elkaar.\n• Magma stroomt op → nieuwe oceaankorst (mid-Atlantische rug).\n• IJsland zit erop — wereld-bezienswaardigheid: 'breuk te zien'.\n• Vulkanisme: vaak rustig, basaltische lava.\n• Aardbevingen: relatief licht.\n\n**2. Convergent** (op-elkaar):\n• Platen botsen.\n• **Subductie**: zware (oceaankorst) duikt onder lichtere (continentale).\n  - Onder bv. Zuid-Amerika (Andes), Indonesië, Japan.\n  - Diep onder oppervlakte → smelt → magma stijgt → **strato-vulkanen** (steil, explosief).\n  - Diepe + zware **aardbevingen** mogelijk.\n  - **Tsunami's** bij grote bevingen onder zee.\n• **Continentale botsing**: beide licht → opheffen.\n  - Himalaya (India tegen Azië).\n  - Hoge bergen + aardbevingen, geen vulkanen.\n\n**3. Transform** (langs-elkaar):\n• Platen schuiven horizontaal langs.\n• San Andreas-breuk (Californië).\n• Geen vulkanen, wel zware aardbevingen.\n• Schoksgewijs (jarenlang spanning opbouwen → 1 grote schok).\n\n**Ring van Vuur** (Pacific Ring of Fire):\n• Pacifische Oceaan-rand: zone met 75% wereldvulkanen + 90% wereld-aardbevingen.\n• Japan, Indonesië, Filipijnen, Alaska, west-VS, west-Zuid-Amerika.\n• Toeristisch + economisch belangrijk, maar zeer risicovol.\n\n**Aardbevingen meten**:\n• **Richter-schaal**: logaritmisch — 5 is 10× sterker dan 4 (en 32× meer energie).\n• Moderne maat: **Moment-magnitudo (Mw)** — preciezer.\n• Tot M2: niet gevoeld.\n• M5: kleine schade.\n• M7: zware schade.\n• M9: catastrofaal (Japan 2011, Sumatra 2004, Chili 1960 was M9,5).\n• **Mercalli-schaal**: schade aan oppervlak (12 graden).\n\n**Vulkaan-soorten**:\n• **Schildvulkaan**: vloeibare lava, lage hellingen, rustig (Hawaï, IJsland).\n• **Stratovulkaan**: viskeuze lava, steile flanken, explosief (Vesuvius, Pinatubo, Fuji).\n• **Caldeira**: na enorme uitbarsting ingestort.\n• **Lahar**: vulkanische modderstroom.\n• **Pyroclastische stroom**: heet gas + as op enorme snelheid — dodelijkst.\n\n**Tsunami's**:\n• Door onderzeese aardbeving / vulkaan / aardverschuiving.\n• In diep water snel + laag.\n• Bij kust opbouw → meters tot tientallen meters hoog.\n• Voorbeeld: Sumatra 2004 → 230.000 doden in 14 landen. Japan 2011 → 18.000 doden + Fukushima kernramp.\n\n**Vroegtijdige waarschuwing**:\n• Aardbevingen: secondes-minuten voor schadelijke S-golven (P-golven sneller, vangen op).\n• Tsunami's: minuten-uren afhankelijk afstand.\n• Vulkanen: dagen-maanden via seismografen, vervormen oppervlak (GPS), gas-emissies.",
    checks: [
      {
        q: "Welke plaatgrens veroorzaakt **stratovulkanen + tsunami's**?",
        options: ["Convergent met subductie", "Divergent met riftvorming", "Transform met zijschuiving", "Convergent zonder subductie"],
        answer: 0,
        wrongHints: [null, "Bij uit elkaar schuivende platen ontstaan rustige basaltvulkanen. Zijn die explosief?", "Langs elkaar schuivende platen geven bevingen, maar waar zou daar magma vandaan komen?", "Als twee continenten botsen, duikt er geen plaat de diepte in. Ontstaat er dan genoeg magma voor vulkanen?"],
        uitlegPad: {
          stappen: [{ titel: "Subductie = explosief", tekst: "**Convergente plaatgrens met subductie** (zware oceaan-korst duikt onder continentaal): smeltend gesteente → strato-vulkanen + zware bevingen → tsunami's bij onderzeese bevingen. Voorbeeld: Indonesië, Japan, Chili." }],
          niveaus: { basis: "Convergent.", simpeler: "Subductie = stratovulkaan", nogSimpeler: "Subductie" },
        },
      },
      {
        q: "**Richter-schaal** is **logaritmisch** — hoeveel keer zo groot is de uitslag (amplitude) op de seismograaf bij magnitude 7 als bij magnitude 5?",
        options: ["100×","2×","10×","1000×"],
        answer: 0,
        wrongHints: [null, "Niet — de schaal is logaritmisch, niet lineair.", "Niet — hoeveel stappen verschil is er, en wat betekent elke stap op een logaritmische schaal?", "Dat klopt ongeveer voor de vrijgekomen energie — maar hier wordt naar de uitslag gevraagd."],
        uitlegPad: {
          stappen: [{ titel: "10× per stap", tekst: "Richter is logaritmisch: **elke stap = 10× sterker amplitude**. M5 → M7 = 2 stappen = **10² = 100×** sterker (amplitude). Energie ~32× per stap → 32² = ~1000× meer energie.\n\nDaarom: M9 verwoest hele kuststreken, M6 voelbaar maar beperkt." }],
          niveaus: { basis: "100×.", simpeler: "2 stappen = 10²=100×", nogSimpeler: "100" },
        },
      },
      {
        q: "Waar ligt de **Ring van Vuur**?",
        options: ["Rond Pacifische Oceaan", "Rond Atlantische Oceaan", "Langs de Middellandse Zee", "Rond Indische Oceaan"],
        answer: 0,
        wrongHints: [null, "Midden in de Atlantische Oceaan schuiven platen rustig uit elkaar, maar de kusten eromheen zijn kalm. Waar duiken platen onder elkaar?", "Rond de Middellandse Zee liggen wel vulkanen (Etna, Vesuvius). Maar is dat een ring van vulkanen rond een oceaan?", "Indonesië ligt wel op de Ring van Vuur. Maar liggen Japan, Alaska en Chili ook aan de Indische Oceaan?"],
        uitlegPad: {
          stappen: [{ titel: "Pacific Ring of Fire", tekst: "**Ring van Vuur** = ring van plaatgrenzen rond Pacifische Oceaan. 75% van wereld-vulkanen + 90% van wereld-aardbevingen. Japan, Indonesië, Filipijnen, Alaska, west-VS, Mexico, Centraal+Zuid-Amerika." }],
          niveaus: { basis: "Pacifisch.", simpeler: "Ring of Fire = Pacific", nogSimpeler: "Pacific" },
        },
      },
      {
        q: "Welk type vulkaan heeft **vloeibare lava + lage hellingen** (geleidelijk)?",
        options: ["Schildvulkaan", "Stratovulkaan", "Caldeira", "Slakkenkegel"],
        answer: 0,
        wrongHints: [null, "Een stratovulkaan heeft taaie, stroperige lava die zich ophoopt. Worden de hellingen dan laag of steil?", "Een caldeira is de grote kom die overblijft als een vulkaan instort. Zegt dat iets over vloeibare lava?", "Een slakkenkegel is opgebouwd uit losse brokken die rond de krater neervallen. Geeft dat een vlakke of een steile kegel?"],
        uitlegPad: {
          stappen: [{ titel: "Schild = breed + plat", tekst: "**Schildvulkaan**: basaltische lava, vloeibaar, stroomt ver → vormt grote brede koepel met lage hellingen. **Mauna Loa** (Hawaï) — grootste vulkaan op aarde, 9 km hoog vanaf oceaanbodem. Relatief rustig." }],
          theorie: "Tegenstelling: stratovulkaan = viskeuze lava → steile flanken + explosief. Pyroclastische stromen.",
          niveaus: { basis: "Schildvulkaan.", simpeler: "Vloeibaar = schild", nogSimpeler: "Schild" },
        },
      },
      {
        q: "Wat veroorzaakte de **2004 Sumatra-tsunami**?",
        options: ["Een onderzeese aardbeving", "Een meteorietinslag in zee", "Een ingestort vulkaaneiland", "Een onderzeese aardverschuiving"],
        answer: 0,
        wrongHints: [null, "Een meteorietinslag kan een tsunami geven, maar die van 2004 kwam niet uit de ruimte. Wat gebeurde er op de plaatgrens bij Sumatra?", "Zo ontstond de tsunami van Krakatau in 1883. In 2004 stortte er bij Sumatra geen vulkaan in. Wat gebeurde er toen wel?", "Een aardverschuiving onder water geeft vooral een golf in de buurt. Hoe kon deze golf dan de hele Indische Oceaan oversteken?"],
        uitlegPad: {
          stappen: [{ titel: "Megathrust-aardbeving", tekst: "**26 dec 2004**: M9,1 aardbeving voor kust Sumatra → zeebodem enkele meters omhoog → tsunami → 230.000 doden in 14 landen. Subductie-grens Indische plaat onder Eurazische. Een van de dodelijkste natuurrampen van de 21e eeuw." }],
          theorie: "Vergelijkbare gebeurtenissen: Chili 1960 (M9,5, sterkste ooit gemeten), Japan 2011 (M9,0 + Fukushima), Alaska 1964.",
          niveaus: { basis: "Onderzeese aardbeving.", simpeler: "M9 = onderzeese beving", nogSimpeler: "Beving" },
        },
      },
    ],
  },

  // ─── B. Klimaat + waterrisico's ────────────────────────────
  {
    title: "Klimaat- + waterrisico's",
    explanation:
      "**Klimaatverandering** vergroot risico's wereldwijd via meerdere mechanismen.\n\n**Zeespiegelstijging**:\n• Thermische uitzetting oceanen + smelten landijs (Antarctica + Groenland).\n• IPCC-projectie 2100: +0,3 tot +1 m (bij CO₂-reductie) of meer.\n• **NL-risico**: ~26% land onder NAP. Zonder dijken zou groot deel onder water staan.\n• Eilanden in Stille Oceaan (Tuvalu, Kiribati) bedreigd in voortbestaan.\n\n**Overstroming-risico**:\n\n**Rivieren** (binnenlands):\n• Hoge piekafvoer bij plotselinge regen + smelt.\n• Versterkt door verstedelijking (verharding, geen infiltratie).\n• NL: Maas, Rijn, IJssel. Rivierdijken + overlopen + 'Ruimte voor de Rivier'-programma.\n• 2021 Limburg-watersnood: extreme zomerneerslag → Geul/Maas → schade.\n\n**Kust** (overstroming + erosie):\n• Bij storm + springtij + zeespiegelstijging.\n• NL: Watersnoodramp 1953 (1836 doden, vooral in Zeeland) → Deltawerken.\n• Wereldwijd: Bangladesh, mondingen Mekong/Mississippi.\n\n**Tropisch land**:\n• Moessons + cyclonen → overstroming.\n• Hurricanes (Atlantische cycloon): Caribië, Golf van Mexico.\n• Typhoons (Pacifisch): Filipijnen, Japan.\n\n**Droogte + watertekort**:\n• Klimaatverandering verschuift neerslag-patronen.\n• Mediterrane gebieden + Sahel: meer droogte.\n• Gevolgen: misoogst, brand, conflict over water, klimaatmigratie.\n• Sahel: woestijn-uitbreiding (desertificatie).\n• 2018 Kaapstad bijna 'Day Zero' (water op).\n\n**Hittegolven**:\n• Aaneengesloten dagen met extreme T.\n• Europa 2003: ~70.000 extra doden.\n• NL 2022: 3 hittegolven.\n• Stedelijk hitte-eiland (UHI): beton + asfalt 5-10°C warmer dan landelijk.\n• Verminderen door bomen, groene daken, lichte oppervlakken.\n\n**Bosbranden**:\n• Versterkt door droogte + hitte.\n• Australië 2019-2020 'black summer': 18 mln ha verbrand.\n• Californië, Portugal, Griekenland jaarlijks.\n• Negatieve cyclus: brand → CO₂ → klimaat → meer brand.\n\n**El Niño + La Niña** (ENSO):\n• Natuurlijke schommeling Pacifische zeetemperatuur.\n• El Niño: warmer Oost-Pacific → droogte Indonesië/Aus, regen Z-Amerika.\n• La Niña: omgekeerd.\n• Cyclus 2-7 jaar.\n• Gevolgen voor wereld-weer + landbouw + visserij (wisselende visstand).\n\n**NL-specifiek waterbeheer**:\n• Deltawerken (1958-1997): o.a. Haringvlietdam + Oosterscheldekering + Maeslantkering.\n• Waterschappen: oudst nog bestaande democratische organisatie NL (sinds 13e eeuw).\n• 'Ruimte voor de Rivier': dijken verleggen, uiterwaarden geven aan rivier.\n• Toekomst: zeespiegel + meer regen → meer ingrepen nodig.",
    checks: [
      {
        q: "Wat veroorzaakt **zeespiegelstijging** primair?",
        options: ["Smeltend landijs en warmer zeewater", "Smeltend zee-ijs en meer neerslag", "Meer regen en rivieren die meer afvoeren", "Minder verdamping en smeltend pakijs"],
        answer: 0,
        wrongHints: [null, "Drijvend ijs verplaatst al evenveel water als het weegt (Archimedes). Wat verandert er als het smelt?", "Regen komt uit verdampt zeewater. Komt er dan netto water bij in de oceaan?", "Pakijs drijft al op zee, en verdamping verandert weinig aan de totale hoeveelheid water. Waar komt extra water dan vandaan?"],
        uitlegPad: {
          stappen: [{ titel: "Twee mechanismen", tekst: "**Zeespiegelstijging**: (1) **smeltend landijs** (Groenland, Antarctica, gletsjers) voegt nieuw water toe. (2) **Thermische uitzetting**: warm water heeft groter volume. Zee-ijs heeft geen effect (zit al in water — Archimedes-principe)." }],
          theorie: "Toets-favoriet: 'Waarom heeft smelten van Arctisch zee-ijs nauwelijks invloed op zeespiegel?' Antwoord: drijft al, geen volume-toename.",
          niveaus: { basis: "Landijs + uitzetting.", simpeler: "Smelten landijs + warm zeewater", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel % NL ligt onder NAP?",
        options: ["~26%","~10%","~50%","~70%"],
        answer: 0,
        wrongHints: [null, "Denk aan heel West-Nederland: Holland, Flevoland en alle polders. Is dat maar een tiende van het land?", "Ongeveer de helft van Nederland kan overstromen. Maar ligt al dat land ook echt ónder NAP?", "Het oosten en zuiden (Veluwe, Limburg) liggen ruim boven NAP. Kan het dan 70% zijn?"],
        uitlegPad: {
          stappen: [{ titel: "Een kwart onder zeeniveau", tekst: "Ongeveer **26%** NL ligt onder NAP. Vooral west-NL (Holland, Flevoland, Zeeland). Zonder dijken zou groot deel onder water staan. Daarom NL-investeringen in waterveiligheid extreem hoog vergeleken andere landen." }],
          theorie: "NAP = Normaal Amsterdams Peil. Referentie sinds 17e eeuw, gebaseerd op het gemiddelde hoogwater (zomervloed) van het IJ.",
          niveaus: { basis: "26%.", simpeler: "~kwart NL onder NAP", nogSimpeler: "26" },
        },
      },
      {
        q: "Wanneer + waar was de **Watersnoodramp** die Deltawerken triggerde?",
        options: ["1953 Zeeland", "1995 Limburg", "1916 Zuiderzee", "1953 Waddenkust"],
        answer: 0,
        wrongHints: [null, "In 1995 traden de rivieren buiten hun oevers. Werden daarna dammen in de zeearmen gebouwd?", "De ramp van 1916 leidde tot de Afsluitdijk. Waar in Nederland liggen de Deltawerken?", "De Afsluitdijk en de Waddenkust liggen in het noorden. Waar kwam het water in 1953 binnen?"],
        uitlegPad: {
          stappen: [{ titel: "1 feb 1953", tekst: "**Watersnoodramp 1 feb 1953**: storm + springtij → dijken Zeeland + Z-Holland breken → 1836 doden + 200.000 dieren + 47.000 huizen weg. Politieke schok → **Deltaplan** + Deltawerken-uitvoering 1958-1997." }],
          theorie: "Andere overstromings-rampen: 1916 Zuiderzee (aanleiding Afsluitdijk), 1995 Maas/Rijn/Waal (~250.000 geëvacueerd), 2021 Limburg-watersnood (relatief lichte schade).",
          niveaus: { basis: "1953 Zeeland.", simpeler: "Deltawerken na 1953", nogSimpeler: "1953" },
        },
      },
      {
        q: "Wat is een **stedelijk hitte-eiland (UHI)**?",
        options: ["Steden zijn warmer dan platteland", "Warme plek rond een fabriek in de stad", "Hittegolf die een hele stad treft", "Stad op een eiland in een warme zee"],
        answer: 0,
        wrongHints: [null, "Het gaat niet om één warmtebron: de hele bebouwde stad is warmer. Waardoor zou dat komen?", "Een hittegolf geldt voor de stad én het platteland eromheen. Wat is het verschil tússen die twee?", "Het 'eiland' is geen echt stuk land. Wat steekt er warm uit boven het koelere platteland?"],
        uitlegPad: {
          stappen: [{ titel: "Beton + asfalt = warmer", tekst: "**Urban Heat Island (UHI)** = steden zijn 5-10°C warmer dan omliggend platteland door beton/asfalt-warmte-absorptie + minder verkoeling door planten/water + airco-uitlaat. Bij hittegolf extra dodelijk in steden. Tegengaan: bomen, parken, groene daken, witte oppervlakken." }],
          niveaus: { basis: "Steden warmer.", simpeler: "UHI = steden warmer", nogSimpeler: "Warmer" },
        },
      },
      {
        q: "Wat is **El Niño**?",
        options: ["Opwarming van de Grote Oceaan die het weer verandert", "Afkoeling van de Grote Oceaan die het weer verandert", "Warme zeestroom die het klimaat van West-Europa verzacht", "Regenseizoen dat elk jaar boven Zuid-Azië valt"],
        answer: 0,
        wrongHints: [null, "Dat verschijnsel heet La Niña. Wat gebeurt er bij El Niño met het zeewater voor de kust van Peru?", "Dat is de Golfstroom, in de Atlantische Oceaan. In welke oceaan speelt El Niño?", "Dat is de moesson, en die komt elk jaar. El Niño komt maar eens in de paar jaar. Wat verandert er dan?"],
        uitlegPad: {
          stappen: [{ titel: "ENSO-cyclus", tekst: "**El Niño** = periodieke (2-7 jaar) opwarming oostelijke Stille Oceaan → minder regen Indonesië/Australië (droogte/brand) + meer regen Z-Amerika kust + minder visstand Peru. **La Niña** = tegenovergesteld. Beïnvloedt wereld-weer voor 1-2 jaar." }],
          theorie: "Toets-actueel: 2023-24 was sterk El Niño-jaar → extreme bosbranden Canada/Amazone, hittegolven.",
          niveaus: { basis: "Pacific-opwarming.", simpeler: "El Niño = warm Pacific", nogSimpeler: "El Niño" },
        },
      },
    ],
  },

  // ─── C. GIS + aardobservatie ──────────────────────────────
  {
    title: "GIS + aardobservatie — satellieten + data",
    explanation:
      "**Aardobservatie** = waarnemen van aarde vanaf satellieten + sensoren.\n\n**Geografisch Informatie Systeem (GIS)** = software om geo-data te verwerken + visualiseren. ArcGIS, QGIS, Google Earth.\n\n**Lagen-principe** (vakwoord cartografie):\n• Topografie (hoogte, water).\n• Wegen.\n• Bevolkingsdichtheid.\n• Landgebruik.\n• Risico-zones.\nMeerdere lagen combineren → analyse.\n\n**Satelliet-soorten**:\n\n**Geostationair** (~36.000 km):\n• Blijft boven zelfde plek aarde.\n• Snel-update weersatelliet (Meteosat).\n• Communicatie.\n• Nadeel: ver weg → minder detail.\n\n**Polaire baan** (laag, ~700 km):\n• Cirkelt 14× per dag rond.\n• Bedekt hele aarde elke paar dagen.\n• Hoge resolutie.\n• Voorbeelden: Sentinel (ESA), Landsat (NASA).\n\n**Spectrale banden**:\n• **Zichtbaar licht** (rood/groen/blauw): foto's.\n• **Infrarood**: hitte-emissies → bosbrand-detectie, vulkanische activiteit.\n• **Thermisch**: temperatuur-meting oppervlak.\n• **Microgolf/SAR (radar)**: door wolken heen, dag/nacht. Vervormingen meten (mm-niveau!).\n• **Combinaties**: false-color images om vegetatie, water, bebouwing te onderscheiden.\n\n**NDVI (Normalized Difference Vegetation Index)**:\n• Gezondheid vegetatie meten.\n• Range −1 tot +1, gezonde planten ~0,4-0,9.\n• Detecteert oogst-mislukking, ontbossing, droogte.\n\n**Voorbeelden toepassingen**:\n\n**Klimaat-monitoring**:\n• Antarctica-/Groenland-ijsmassa via zwaartekracht-satellieten (GRACE).\n• CO₂-concentratie atmosfeer (OCO-2 NASA).\n• Zeespiegel via radar-altimetrie (Jason-3).\n\n**Rampen-monitoring**:\n• Voor + na satellietbeelden: schade in beeld brengen (aardbeving, tsunami, overstroming).\n• Sentinel-1 SAR: detecteert vervorming aardkorst vóór vulkaan-uitbarsting.\n• Brand-detectie (MODIS, VIIRS): vrijwel real-time.\n\n**Landbouw**:\n• Drones + satellieten voor precisielandbouw.\n• Optimaal moment voor irrigatie, bemesting, oogst.\n\n**Stedelijke planning**:\n• Hoogte-data (LiDAR-laser-scanning) voor 3D-modellen.\n• Verkeer-monitoring via tijdseries.\n\n**Defensie + grenswacht**:\n• Boot-detectie op zee.\n• Bewegingen aan grenzen.\n• Internationaal verdrag-toezicht (kernproef-detectie).\n\n**Nadelen + privacy**:\n• Wie ziet wat? Commerciële satellieten (Maxar, Planet) verkopen sub-meter beelden.\n• Surveillance-overheden.\n• Burgers minder anoniem.\n\n**Open data**:\n• Sentinel + Landsat: gratis voor iedereen.\n• OpenStreetMap: door vrijwilligers samengesteld kaartwerk.\n• Gebruik voor research, ngo's, ramp-respons.\n\n**Citizen science**:\n• OpenStreetMap: NL volledig in detail door vrijwilligers.\n• iNaturalist: biodiversiteit in beeld brengen.\n• Crowd-sourcing voor data-verzameling.",
    checks: [
      {
        q: "Wat doet **GIS**?",
        options: ["Geo-data verwerken en op kaarten tonen", "Je plaats bepalen via satellietsignalen", "Satellieten in een baan om de aarde brengen", "Het weer van morgen voorspellen"],
        answer: 0,
        wrongHints: [null, "Dat doet gps. Wat doe je daarna met al die gegevens over plaatsen?", "GIS is software, geen raket. Wat doe je ermee op een computer?", "Weersverwachtingen maak je met weermodellen. Waar staat de G in GIS voor?"],
        uitlegPad: {
          stappen: [{ titel: "GIS = Geographic Info System", tekst: "**GIS** = software om geo-locatie-data (kaarten, satellietbeelden, statistieken) samen te brengen, analyseren + visualiseren. Voorbeelden: ArcGIS (commercieel), QGIS (open source), Google Earth (voor consumenten)." }],
          niveaus: { basis: "Geo-data verwerken.", simpeler: "GIS = kaart-software", nogSimpeler: "Software" },
        },
      },
      {
        q: "**Polaire baan**-satelliet bedekt hele aarde in:",
        options: ["Een paar dagen", "Ongeveer 1 uur", "Ongeveer 1 jaar", "Een paar maanden"],
        answer: 0,
        wrongHints: [null, "Eén rondje duurt ongeveer anderhalf uur, maar dan zie je alleen een smalle strook. Hoeveel rondjes heb je nodig?", "De aarde draait elke dag onder de baan door. Duurt het dan echt een jaar?", "Er komen elke dag ruim tien rondjes bij, steeds boven een andere strook. Is dat maanden werk?"],
        uitlegPad: {
          stappen: [{ titel: "14× per dag", tekst: "Polaire-baan-satelliet (~700 km) cirkelt 14× per dag van pool-naar-pool. Aarde draait onder hem door, dus elke baan bedekt nieuwe strook. **Hele aarde** wordt in **paar dagen** bedekt. Sentinel-2 heeft een herhalingstijd van 5 dagen." }],
          niveaus: { basis: "Paar dagen.", simpeler: "Polair = paar dagen", nogSimpeler: "Paar dagen" },
        },
      },
      {
        q: "Welk soort straling werkt **door wolken heen**?",
        options: ["Radar (microgolf / SAR)", "Zichtbaar licht (camera)", "Infrarood (warmtebeeld)", "Ultraviolet (UV-licht)"],
        answer: 0,
        wrongHints: [null, "Vanuit een vliegtuig zie je op een bewolkte dag de grond niet. Wat betekent dat voor een gewone camera?", "Waterdamp in wolken houdt veel infrarood tegen. Kijkt een warmtebeeld dan door dikke wolken?", "UV wordt hoog in de atmosfeer al grotendeels tegengehouden. Is dat handig om de grond te bekijken?"],
        uitlegPad: {
          stappen: [{ titel: "SAR = wolken-onafhankelijk", tekst: "**SAR** (Synthetic Aperture Radar): zendt zelf microgolven uit en meet reflectie. **Dringt door wolken heen + werkt 24/7**. Ideaal voor permanente monitoring + vervormings-detectie (mm-precisie!) na bevingen of vulkaan-opheffing." }],
          theorie: "Sentinel-1 (ESA, gratis) levert SAR-data. Cruciaal voor: vroegtijdige vulkaan-detectie, overstroming-mapping bij bewolking, scheep-monitoring.",
          niveaus: { basis: "Radar.", simpeler: "SAR door wolk", nogSimpeler: "Radar" },
        },
      },
      {
        q: "**NDVI** meet:",
        options: ["Hoe gezond en groen planten zijn", "Hoogte van bomen en struiken", "Vochtgehalte van de bodem", "Aantal plantensoorten in een gebied"],
        answer: 0,
        wrongHints: [null, "Hoogte meet je met laserpulsen (lidar). NDVI vergelijkt alleen rood en nabij-infrarood licht: wat verraadt die verhouding?", "Bodemvocht meet je vooral met radar. Wat weerkaatst juist sterk nabij-infrarood licht en slokt rood licht op?", "Van honderden kilometers hoog zie je geen losse plantensoorten. Wat zegt de kleur van het weerkaatste licht wél?"],
        uitlegPad: {
          stappen: [{ titel: "Vegetation Index", tekst: "**NDVI** (Normalized Difference Vegetation Index) = (NIR − Rood) / (NIR + Rood). Gezonde planten reflecteren veel infrarood + absorberen rood → hoge NDVI (0,4-0,9). Bruin/dood → laag. Gebruikt voor: oogst-monitoring, droogte-detectie, ontbossings-tracking." }],
          niveaus: { basis: "Vegetatie.", simpeler: "NDVI = plant-gezond", nogSimpeler: "Planten" },
        },
      },
      {
        q: "Wat is **OpenStreetMap**?",
        options: ["Gratis kaart, gemaakt door vrijwilligers", "Gratis kaartdienst, eigendom van Google", "Open archief van NASA-satellietfoto's", "Gratis kaart, gemaakt door het Kadaster"],
        answer: 0,
        wrongHints: [null, "Google Maps is gratis te gebruiken, maar Google bezit de kaart. Wie tekent en bezit OpenStreetMap?", "NASA deelt wel satellietbeelden, maar OSM is een getekende kaart met straten en paden. Wie tekent die?", "Het Kadaster maakt officiële kaarten voor de overheid. Wie voegt bij OSM de straten, paden en gebouwen toe?"],
        uitlegPad: {
          stappen: [{ titel: "OSM = Wikipedia van kaarten", tekst: "**OpenStreetMap** (OSM) = wereld-wijde kaart gebouwd door vrijwilligers. Iedereen kan toevoegen/corrigeren. Gratis te gebruiken (open licentie). NL is volledig + zeer gedetailleerd. Gebruik: GPS-apps (Maps.me, OsmAnd), ramp-respons, planning." }],
          theorie: "Bij rampen: Humanitarian OSM Team mobiliseert vrijwilligers wereldwijd om gebied snel te karteren na aardbeving/tsunami, voor hulpverleners.",
          niveaus: { basis: "Vrijwilligers-kaart.", simpeler: "OSM = vrije kaart", nogSimpeler: "OSM" },
        },
      },
    ],
  },

  // ─── D. Risico-management ─────────────────────────────────
  {
    title: "Risico-management — kwetsbaarheid + adaptatie",
    explanation:
      "**Risico** = kans × gevolgen × kwetsbaarheid.\n\nNiet alle gebieden zijn even kwetsbaar — armere landen lopen vaak grotere risico's bij gelijke fysieke kans.\n\n**Kwetsbaarheid (vulnerability)**:\n• **Sociaal-economisch**: armoede → slechte huizen, geen verzekering, geen reserves.\n• **Institutioneel**: zwakke overheid → geen vroegtijdige waarschuwing, geen evacuatie-plannen.\n• **Demografisch**: oude bevolking, kinderen → minder mobiel.\n• **Geografisch**: dicht bij water/breuk/vulkaan + geen vluchtroutes.\n• **Educatief**: weet niet wat te doen bij dreiging.\n\n**Voorbeeld vergelijking**:\n• Aardbeving M7 Iran: tienduizenden doden, slecht-gebouwde huizen.\n• Aardbeving M7 Japan: weinig doden, aardbeving-bestendige bouw.\n• Gelijke fysieke kracht — heel verschillende uitkomsten.\n\n**Risico-management-cyclus** (4 fases):\n\n**1. Preventie / mitigatie** (vóór):\n• Bouwvoorschriften: aardbevingsbestendig, hoog-water-niveau.\n• Land-gebruiks-zonering: niet bouwen in overstromings-vlaktes.\n• Bossen aanleggen voor bodem-stabilisatie.\n• Dijken + Deltawerken.\n\n**2. Voorbereiding (preparedness)**:\n• Vroegtijdige waarschuwings-systemen.\n• Evacuatie-plannen + oefeningen.\n• Noodvoorraden voedsel + medicijnen.\n• Communicatie-protocollen.\n\n**3. Respons (tijdens / direct na)**:\n• Hulpverlening: brandweer, leger, rode kruis.\n• Evacuatie.\n• Medische hulp.\n• Tijdelijk onderdak.\n\n**4. Herstel (recovery)**:\n• Wederopbouw infrastructuur.\n• Economisch herstel.\n• Psychosociale steun.\n• Lessen leren → terug naar preventie.\n\n**Adaptatie aan klimaatverandering**:\n\n**Hard** (techniek):\n• Hogere dijken.\n• Stormvloed-keringen.\n• Verkoeling-systemen.\n• Erosiebarrières langs de kust.\n\n**Zacht** (gedrag + planning):\n• Verhuis uit risico-zone.\n• Verzekering verplicht stellen.\n• Bewustwording-campagnes.\n• Internationale samenwerking.\n\n**Nature-based solutions**:\n• Mangroves planten voor kust-bescherming (golven dempen).\n• Rivieren-meanders herstellen voor overstroming-buffer.\n• Stedelijke parken voor hitte-vermindering.\n• Vaak goedkoper + duurzamer dan techniek.\n\n**Internationaal**:\n• **Sendai Framework** (UN): wereld-akkoord risicoreductie 2015-2030.\n• Doelen: minder doden, minder economische schade, meer ontwikkelingslanden geholpen.\n• Annual Global Assessment Report door UNDRR.\n\n**Klimaatmigratie**:\n• Door zeespiegelstijging + droogte verlaten mensen huis.\n• Voorbeeld: Tuvalu-bewoners naar Nieuw-Zeeland.\n• Sahel-bewoners naar steden + Europa.\n• Toekomst (2050): 100-300 mln klimaatmigranten geschat.\n• Geen formele 'klimaat-vluchteling'-status in het Vluchtelingenverdrag (Genève, 1951).\n\n**Verzekerings-industrie**:\n• Premies stijgen voor risico-gebieden.\n• Sommige plekken niet meer verzekerbaar (kust Florida, sommige delen Australië).\n• 'Climate redlining' = banken/verzekeraars trekken zich terug.\n\n**Wereldwijde ongelijkheid**:\n• 10% rijkste = ~50% emissies. 50% armste = ~10% emissies.\n• Maar arme landen lopen meeste klimaat-risico.\n• 'Loss + damage'-fonds (COP27 2022): rijke landen vergoeden klimaat-schade arme landen. Praktische uitvoering moeizaam.",
    checks: [
      {
        q: "Wat bepaalt risico volgens **risico-formule**?",
        options: ["Kans × gevolg × kwetsbaarheid", "Kans × gevolg ÷ kwetsbaarheid", "Kans × magnitude × afstand", "Gevolg × kwetsbaarheid × bevolking"],
        answer: 0,
        wrongHints: [null, "Als mensen kwetsbaarder zijn, wordt het risico dan kleiner? Wat doet delen met de uitkomst?", "Magnitude en afstand bepalen hoe hard het gevaar toeslaat. Waar zit hoe goed mensen voorbereid zijn?", "Hoe vaak een ramp voorkomt telt ook mee. Welk deel van de formule mis je?"],
        uitlegPad: {
          stappen: [{ titel: "Drievoudige formule", tekst: "**Risico = kans × gevolg × kwetsbaarheid**. Hoge kans + lage kwetsbaarheid (Japan: vaak bevingen, maar bevingsbestendige bouw) = beperkt risico. Hoge kans + hoge kwetsbaarheid (Bangladesh moesson + dichte bevolking) = zeer hoog risico." }],
          theorie: "Toets-favoriet: vergelijk landen met gelijke fysieke dreiging maar verschillende kwetsbaarheid → verschil in uitkomst.",
          niveaus: { basis: "Kans × gevolg × kwetsbaarheid.", simpeler: "3-componenten", nogSimpeler: "Drie" },
        },
      },
      {
        q: "Wat is een **mitigatie-maatregel** bij overstroming-risico?",
        options: ["Dijken bouwen","Burgers waarschuwen","Schade vergoeden","Mensen opvangen"],
        answer: 0,
        wrongHints: [null, "Dat is voorbereiding — verklein je hiermee het risico zelf?", "Gebeurt dit vóór de overstroming, of los je iets op achteraf?", "Doe je dit om de ramp te voorkómen, of tijdens/na de ramp?"],
        uitlegPad: {
          stappen: [{ titel: "Mitigatie = voorkomen", tekst: "**Mitigatie** = maatregelen die het risico zelf verkleinen. **Dijken bouwen, water-vlaktes vrij houden, hoge gebouw-eisen**. Tegenover: voorbereiding (waarschuwen, plannen), respons (evacueren), herstel (heropbouwen)." }],
          niveaus: { basis: "Dijken.", simpeler: "Mitigatie = preventie", nogSimpeler: "Dijken" },
        },
      },
      {
        q: "Welke is een **nature-based solution**?",
        options: ["Mangrovebossen planten langs de kust", "Hoge betonnen dijk langs de kust bouwen", "Kunstmatig rif van betonblokken aanleggen", "Stormvloedkering in de monding van een rivier"],
        answer: 0,
        wrongHints: [null, "Een dijk houdt golven tegen, maar is door mensen van beton gebouwd. Welke kustverdediging groeit en herstelt zichzelf?", "Een rif dempt golven, maar dit is gestort beton. Bij welke oplossing doen levende planten of dieren het werk?", "Een stormvloedkering is grijze, technische bescherming. Wat is het verschil met groene bescherming?"],
        uitlegPad: {
          stappen: [{ titel: "Natuur helpt zelf", tekst: "**Nature-based solutions** = oplossingen die natuur inschakelen: mangroves (golven dempen), wadlanden (bufferen vloed), bomen (hitte verminderen), meanders herstellen. Vaak goedkoper + bio-divers + duurzaam dan beton-bouw." }],
          theorie: "Voorbeeld: Vietnam plant mangroves langs kust — kost veel minder dan zee-wering bouwen + biedt ook visserij.",
          niveaus: { basis: "Mangroves.", simpeler: "Natuur-oplossing", nogSimpeler: "Natuur" },
        },
      },
      {
        q: "Iran en Japan worden allebei door M7-bevingen getroffen. Waarom verschilt **dodental** enorm?",
        options: ["Kwetsbaarheid en bouwvoorschriften", "Japan heeft een beter tsunami-alarm", "In Iran liggen de haarden dieper", "Iran krijgt vaker zware bevingen"],
        answer: 0,
        wrongHints: [null, "Een tsunami-alarm helpt aan de kust, maar de zware bevingen in Iran (zoals in Bam, 2003) waren landinwaarts. Wat ging daar mis?", "Ondiepe bevingen doen juist de meeste schade, en in Iran liggen de haarden vaak ondiep. Waarom vallen er dan toch meer doden?", "Japan krijgt juist meer zware bevingen per jaar. Waarom vallen daar toch minder doden?"],
        uitlegPad: {
          stappen: [{ titel: "Bouwvoorschriften beslissen", tekst: "**Japan**: strikte aardbevings-bestendige bouw + early-warning + oefeningen → weinig doden bij M7. **Iran**: oudere lemen huizen + corruptie bij vergunningen + weinig voorbereiding → tienduizenden doden bij M7. Zelfde fysieke kracht, **enorm verschil in kwetsbaarheid**." }],
          theorie: "Toets-patroon: 'leg verschil in uitkomst uit ondanks gelijke magnitude'. Bouwvoorschriften + economie + cultuur.",
          niveaus: { basis: "Kwetsbaarheid.", simpeler: "Bouw + voorbereiding", nogSimpeler: "Bouw" },
        },
      },
      {
        q: "Wat is **klimaatmigratie**?",
        options: ["Mensen verhuizen door klimaatgevolgen", "Klimaatzones die naar de polen opschuiven", "Ouderen die naar zonnige landen verhuizen", "Mensen die voor werk naar de stad trekken"],
        answer: 0,
        wrongHints: [null, "Klimaatzones schuiven inderdaad op, maar in de aardrijkskunde gaat migratie over mensen. Wie verhuist er?", "Zon is hier een pull-factor waar mensen vrijwillig voor kiezen. Wat dwingt mensen bij klimaatmigratie om te vertrekken?", "Werk is een bekende pull-factor. Wat is bij klimaatmigratie de reden om te vertrekken?"],
        uitlegPad: {
          stappen: [{ titel: "Vluchten voor klimaat", tekst: "**Klimaatmigratie** = mensen verlaten woonplaats door klimaat-impact: zeespiegelstijging (Pacific-eilanden), droogte (Sahel), bosbranden, extreme hitte. Schatting 2050: 100-300 miljoen klimaatmigranten. **Niet** formeel beschermd als 'vluchteling' onder het Vluchtelingenverdrag — juridisch grijs gebied." }],
          theorie: "Voorbeelden: Tuvalu-bewoners naar Nieuw-Zeeland en Australië (Australië biedt sinds het verdrag van 2023 als eerste een klimaatvisum). Sahel-bewoners naar Sahel-steden of Europa.",
          niveaus: { basis: "Verhuizen door klimaat.", simpeler: "Klimaat → mensen vluchten", nogSimpeler: "A." },
        },
      },
    ],
  },

  // ─── E. Eindopdracht ──────────────────────────────────────
  {
    title: "Eindopdracht — aardobservatie + risico mix",
    explanation:
      "Mix van tektoniek + klimaat + GIS + risico-management.\n\nVeel succes!",
    checks: [
      {
        q: "Bij **welke plaatgrens** ontstaan hoge bergen + zware aardbevingen, maar geen vulkanen?",
        options: ["Continentale botsing (Himalaya)", "Subductie onder continent (Andes)", "Divergente grens (IJsland)", "Transformbreuk (San Andreas)"],
        answer: 0,
        wrongHints: [null, "In de Andes liggen veel vulkanen. Past dat bij 'geen vulkanen'?", "Op IJsland spuwen vulkanen lava. Past dat bij de vraag?", "Wel zware bevingen zonder vulkanen — maar duwen platen die langs elkaar schuiven bergen omhoog?"],
        uitlegPad: {
          stappen: [{ titel: "Continent vs continent", tekst: "Bij **continentale botsing** (India tegen Azië → Himalaya): beide platen licht → opheffen tot bergen + zware bevingen. Geen subductie diep genoeg voor smelten → geen vulkanen. Tsunami's vooral subductie-grenzen (onderzeese verstoring)." }],
          niveaus: { basis: "Continentale botsing.", simpeler: "Cont. botsing = berg+beving", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **Day Zero**-scenario?",
        options: ["Dag dat een stad zonder kraanwater komt", "Dag dat de waterrekening onbetaalbaar wordt", "Dag dat de rivier buiten haar oevers treedt", "Dag dat zeewater het grondwater verzilt"],
        answer: 0,
        wrongHints: [null, "Een hoge waterrekening speelt in veel steden. Wat maakte Day Zero in Kaapstad zo bijzonder?", "Een overstroming is te véél water. Waar had Kaapstad in 2018 last van?", "Verzilting speelt in kustgebieden, ook in Nederland. Maar wat dreigde er in Kaapstad op Day Zero?"],
        uitlegPad: {
          stappen: [{ titel: "Water op", tekst: "**Kaapstad 2018**: na 3 jaar droogte dreigden de stuwmeren van de stad leeg te raken op een 'Day Zero' → 4 mln mensen zonder kraanwater. Met rantsoenering (50 L per dag per persoon) net vermeden. Toekomst: meer steden risico (Mexico City, Lima)." }],
          theorie: "Toets-actueel: klimaatverandering verschuift neerslag-patronen → meer steden risico op water-tekort.",
          niveaus: { basis: "Stad zonder water.", simpeler: "Day Zero = water-op", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is het verschil tussen **adaptatie** en **mitigatie** bij klimaat?",
        options: ["Adaptatie = hogere dijken; mitigatie = CO₂-reductie", "Adaptatie = CO₂-reductie; mitigatie = hogere dijken", "Adaptatie = minder olie; mitigatie = zonnepanelen", "Adaptatie = evacuatie; mitigatie = hogere dijken"],
        answer: 0,
        wrongHints: [null, "Draai het eens om: welke aanpak past zich aan aan de gevolgen, zoals hoger water?", "Minder olie en meer zonnepanelen pakken allebei de uitstoot aan. Zijn dat dan twee verschillende begrippen?", "Evacueren en dijken ophogen gaan allebei over omgaan met gevolgen. Waar blijft dan de aanpak van de oorzaak?"],
        uitlegPad: {
          stappen: [{ titel: "Verschillende benaderingen", tekst: "**Mitigatie** = klimaatverandering **voorkomen/verminderen** (CO₂-uitstoot omlaag). **Adaptatie** = je aanpassen aan onvermijdelijke veranderingen (dijken, koeltere steden, droogte-bestendig gewas). Beide nodig — geen of-of." }],
          niveaus: { basis: "Verschillende.", simpeler: "Adapt = aanpassen, Mit = voorkomen", nogSimpeler: "A." },
        },
      },
      {
        q: "**Sentinel-satellieten** (ESA) hebben welke eigenschap?",
        options: ["Gratis open data voor de hele wereld", "Geostationaire baan boven Europa", "Scherpe beelden voor betalende klanten", "Geheime beelden voor defensie"],
        answer: 0,
        wrongHints: [null, "Sentinels vliegen in een polaire baan, steeds over de polen heen. Hangen ze dan stil boven Europa?", "Het Copernicus-programma wil dat zoveel mogelijk mensen de beelden gebruiken. Past een prijs daarbij?", "ESA is een organisatie voor wetenschap, geen leger. Wie mag de beelden gebruiken?"],
        uitlegPad: {
          stappen: [{ titel: "Open access", tekst: "**Sentinel** (ESA Copernicus-programma) levert gratis satelliet-data wereldwijd voor iedereen. Sentinel-1 (SAR), Sentinel-2 (optisch), Sentinel-3 (oceaan), Sentinel-5P (atmosfeer). Gebruik door wetenschappers, ngo's, journalisten, burgers." }],
          theorie: "Tegenstelling: Maxar (VS) levert sub-meter beelden maar betaald + selectief. Sentinel democratiseert aardobservatie.",
          niveaus: { basis: "Gratis open.", simpeler: "Sentinel = gratis", nogSimpeler: "Gratis" },
        },
      },
      {
        q: "**Sendai Framework** is:",
        options: ["VN-akkoord rampreductie 2015-2030", "Stadsplan van Sendai na de tsunami", "VN-klimaatverdrag over CO₂-uitstoot", "Japanse satelliet voor aardbevingen"],
        answer: 0,
        wrongHints: [null, "Sendai is een Japanse stad, maar 'framework' betekent kader. Voor wie geldt dat kader?", "Afspraken over CO₂ staan in het Parijs-akkoord. Waar gaat Sendai over?", "Een framework is geen apparaat. Wat voor soort document is het?"],
        uitlegPad: {
          stappen: [{ titel: "VN-akkoord 2015", tekst: "**Sendai Framework for Disaster Risk Reduction 2015-2030** = VN-akkoord (in Sendai Japan getekend) voor wereld-wijde risicoreductie. Doel: minder doden, minder schade, vooral arme landen helpen. Opvolger van Hyogo Framework (2005-2015)." }],
          niveaus: { basis: "VN-akkoord.", simpeler: "Sendai = VN-rampen-akkoord", nogSimpeler: "VN" },
        },
      },
    ],
  },
];

steps.forEach((s, i) => { s.emoji = stepEmojis[i]; });

const aardobservatieHavoVwo = {
  id: "aardobservatie-risico-havo-vwo",
  title: "Aardobservatie + risicogebieden (HAVO/VWO aardrijkskunde)",
  emoji: "🛰️",
  level: "havo4-5-vwo",
  subject: "aardrijkskunde",
  referentieNiveau: "havo-vwo-CSE-aardrijkskunde",
  sloThema: "Aardrijkskunde HAVO/VWO — aardobservatie + natuurlijke risico's eindexamen",
  prerequisites: [
    { id: "platentektoniek-aardrijkskunde", title: "Platentektoniek", niveau: "klas2-3" },
    { id: "klimaten-aardrijkskunde", title: "Klimaten", niveau: "klas2" },
    { id: "klimaatverandering-aardrijkskunde", title: "Klimaatverandering", niveau: "klas3-4" },
    { id: "nederland-water-vo", title: "NL waterhuishouding", niveau: "vmbo-gt" },
  ],
  intro:
    "Aardrijkskunde HAVO/VWO CSE — natuurlijke risico's + aardobservatie. Tektonische risico's (plaatgrenzen, Ring van Vuur, tsunami's), klimaat- + waterrisico's (zeespiegel, overstroming, droogte, hittegolven, El Niño), GIS + satellieten (Sentinel, NDVI, SAR), risico-management + kwetsbaarheid + adaptatie. ~15-20 min.",
  triggerKeywords: [
    "platentektoniek", "subductie",
    "divergent", "convergent", "transform",
    "Ring van Vuur", "Pacific",
    "aardbeving", "Richter", "magnitude",
    "vulkaan", "stratovulkaan", "schildvulkaan",
    "tsunami",
    "zeespiegelstijging",
    "watersnoodramp", "Deltawerken", "NAP",
    "overstroming",
    "droogte",
    "hittegolf", "UHI", "hitte-eiland",
    "bosbrand",
    "El Niño", "La Niña", "ENSO",
    "GIS", "Geografisch Informatie Systeem",
    "ArcGIS", "QGIS",
    "satelliet", "Sentinel", "Landsat",
    "polaire baan", "geostationair",
    "NDVI",
    "SAR", "radar",
    "infrarood",
    "OpenStreetMap", "OSM",
    "kwetsbaarheid",
    "mitigatie", "adaptatie",
    "nature-based solutions",
    "mangrove",
    "Sendai Framework",
    "klimaatmigratie",
    "Day Zero",
  ],
  chapters,
  steps,
};

export default aardobservatieHavoVwo;

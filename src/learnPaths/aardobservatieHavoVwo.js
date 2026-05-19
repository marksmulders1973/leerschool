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
      "**Tektoniek** komt door beweging van **lithosfeer-platen** op de vloeibare mantel. Plaatgrenzen = risicogebieden.\n\n**Drie soorten plaatgrenzen**:\n\n**1. Divergent** (uit-elkaar):\n• Platen drijven uit elkaar.\n• Magma stroomt op → nieuwe oceaankorst (mid-Atlantische rug).\n• IJsland zit erop — wereld-bezienswaardigheid: 'breuk te zien'.\n• Vulkanisme: vaak rustig, basaltisch lava.\n• Aardbevingen: relatief licht.\n\n**2. Convergent** (op-elkaar):\n• Platen botsen.\n• **Subductie**: zware (oceaankorst) duikt onder lichtere (continentale).\n  - Onder bv. Zuid-Amerika (Andes), Indonesië, Japan.\n  - Diep onder oppervlakte → smelt → magma stijgt → **strato-vulkanen** (steil, explosief).\n  - Diepe + zware **aardbevingen** mogelijk.\n  - **Tsunami's** bij grote bevingen onder zee.\n• **Continentale botsing**: beide licht → opheffen.\n  - Himalaya (India tegen Azië).\n  - Hoge bergen + aardbevingen, geen vulkanen.\n\n**3. Transform** (langs-elkaar):\n• Platen schuiven horizontaal langs.\n• San Andreas-breuk (Californië).\n• Geen vulkanen, wel zware aardbevingen.\n• Schoksgewijs (jaren stuw → 1 grote schok).\n\n**Ring van Vuur** (Pacific Ring of Fire):\n• Pacifische Oceaan-rand: zone met 75% wereldvulkanen + 90% wereld-aardbevingen.\n• Japan, Indonesië, Filipijnen, Alaska, west-VS, west-Zuid-Amerika.\n• Toeristisch + economisch belangrijk, maar zeer risicovol.\n\n**Aardbevingen meten**:\n• **Richter-schaal**: logaritmisch — 5 is 10× sterker dan 4 (en 32× meer energie).\n• Moderne maat: **Moment-magnitudo (Mw)** — preciezer.\n• Tot M2: niet gevoeld.\n• M5: kleine schade.\n• M7: zware schade.\n• M9: catastrofaal (Japan 2011, Sumatra 2004, Chili 1960 was M9,5).\n• **Mercalli-schaal**: schade aan oppervlak (12 graden).\n\n**Vulkaan-soorten**:\n• **Schildvulkaan**: vloeibare lava, lage hellingen, rustig (Hawaï, IJsland).\n• **Stratovulkaan**: visceuze lava, steile flanken, explosief (Vesuvius, Pinatubo, Fuji).\n• **Caldeira**: na enorme uitbarsting ingestort.\n• **Lahar**: vulkanische modderstroom.\n• **Pyroclastische stroom**: heet gas + as op enorme snelheid — dodelijkst.\n\n**Tsunami's**:\n• Door onderzeese aardbeving / vulkaan / aardverschuiving.\n• In diep water snel + laag.\n• Bij kust opbouw → meters tot tientallen meters hoog.\n• Voorbeeld: Sumatra 2004 → 230.000 doden in 14 landen. Japan 2011 → 18.000 doden + Fukushima kernramp.\n\n**Vroegtijdige waarschuwing**:\n• Aardbevingen: secondes-minuten voor schadelijke S-golven (P-golven sneller, vangen op).\n• Tsunami's: minuten-uren afhankelijk afstand.\n• Vulkanen: dagen-maanden via seismografen, vervormen oppervlak (GPS), gas-emissies.",
    checks: [
      {
        q: "Welke plaatgrens veroorzaakt **stratovulkanen + tsunami's**?",
        options: ["Convergent met subductie","Divergent","Transform","Stationair"],
        answer: 0,
        wrongHints: [null, "Niet — geeft rustige basalt-vulkaan.", "Niet — geen vulkanen.", "Bestaat niet zo."],
        uitlegPad: {
          stappen: [{ titel: "Subductie = explosief", tekst: "**Convergente plaatgrens met subductie** (zware oceaan-korst duikt onder continentaal): smeltend gesteente → strato-vulkanen + zware bevingen → tsunami's bij onderzeese bevingen. Voorbeeld: Indonesië, Japan, Chili." }],
          niveaus: { basis: "Convergent. A.", simpeler: "Subductie = stratovulkaan = A.", nogSimpeler: "Subductie = A." },
        },
      },
      {
        q: "**Richter-schaal** is **logaritmisch** — Magnitude 7 is hoeveel sterker dan 5?",
        options: ["100×","2×","10×","1000×"],
        answer: 0,
        wrongHints: [null, "Niet — niet lineair.", "Niet — 1 stap = 10×, 2 stappen = 100×.", "Niet correct."],
        uitlegPad: {
          stappen: [{ titel: "10× per stap", tekst: "Richter is logaritmisch: **elke stap = 10× sterker amplitude**. M5 → M7 = 2 stappen = **10² = 100×** sterker (amplitude). Energie ~32× per stap → 32² = ~1000× meer energie.\n\nDaarom: M9 verwoest hele kuststreken, M6 voelbaar maar beperkt." }],
          niveaus: { basis: "100×. A.", simpeler: "2 stappen = 10²=100× = A.", nogSimpeler: "100 = A." },
        },
      },
      {
        q: "Waar ligt de **Ring van Vuur**?",
        options: ["Rond Pacifische Oceaan","Rond Atlantische Oceaan","Midden-Afrika","Antarctica"],
        answer: 0,
        wrongHints: [null, "Niet — ander gebied.", "Niet — wel kleine afdoeling.", "Niet — relatief stabiel."],
        uitlegPad: {
          stappen: [{ titel: "Pacific Ring of Fire", tekst: "**Ring van Vuur** = ring van plaatgrenzen rond Pacifische Oceaan. 75% van wereld-vulkanen + 90% van wereld-aardbevingen. Japan, Indonesië, Filipijnen, Alaska, west-VS, Mexico, Centraal+Zuid-Amerika." }],
          niveaus: { basis: "Pacifisch. A.", simpeler: "Ring of Fire = Pacific = A.", nogSimpeler: "Pacific = A." },
        },
      },
      {
        q: "Welk type vulkaan heeft **vloeibare lava + lage hellingen** (geleidelijk)?",
        options: ["Schildvulkaan","Stratovulkaan","Caldeira","Lahar"],
        answer: 0,
        wrongHints: [null, "Niet — steil + explosief.", "Niet — ingestort.", "Niet — modderstroom."],
        uitlegPad: {
          stappen: [{ titel: "Schild = breed + plat", tekst: "**Schildvulkaan**: basaltische lava, vloeibaar, stroomt ver → vormt grote brede koepel met lage hellingen. **Mauna Loa** (Hawaï) — grootste vulkaan op aarde, 9 km hoog vanaf oceaanbodem. Relatief rustig." }],
          theorie: "Tegenstelling: stratovulkaan = viscose lava → steile flanken + explosief. Pyroclastische stromen.",
          niveaus: { basis: "Schildvulkaan. A.", simpeler: "Vloeibaar = schild = A.", nogSimpeler: "Schild = A." },
        },
      },
      {
        q: "Wat veroorzaakte de **2004 Sumatra-tsunami**?",
        options: ["Onderzeese aardbeving (M9,1)","Vulkaan-uitbarsting","Storm","Aardverschuiving op land"],
        answer: 0,
        wrongHints: [null, "Niet — geen vulkaan-tsunami.", "Niet — storm geen tsunami.", "Niet — verkeerde locatie."],
        uitlegPad: {
          stappen: [{ titel: "Megathrust-aardbeving", tekst: "**26 dec 2004**: M9,1 aardbeving voor kust Sumatra → zeebodem 30 m omhoog → tsunami → 230.000 doden in 14 landen. Subductie-grens Indische plaat onder Eurazische. Slechtste natuurramp 21e eeuw." }],
          theorie: "Vergelijkbare gebeurtenissen: Chili 1960 (M9,5, sterkste ooit gemeten), Japan 2011 (M9,0 + Fukushima), Alaska 1964.",
          niveaus: { basis: "Onderzeese aardbeving. A.", simpeler: "M9 = onderzeese beving = A.", nogSimpeler: "Beving = A." },
        },
      },
    ],
  },

  // ─── B. Klimaat + waterrisico's ────────────────────────────
  {
    title: "Klimaat- + waterrisico's",
    explanation:
      "**Klimaatverandering** vergroot risico's wereldwijd via meerdere mechanismen.\n\n**Zeespiegelstijging**:\n• Thermische uitzetting oceanen + smelten landijs (Antarctica + Groenland).\n• IPCC-projectie 2100: +0,3 tot +1 m (bij CO₂-reductie) of meer.\n• **NL-risico**: ~26% land onder NAP. Zonder dijken zou groot deel onder water staan.\n• Eilanden in Stille Oceaan (Tuvalu, Kiribati) bedreigd in voortbestaan.\n\n**Overstroming-risico**:\n\n**Rivieren** (binnenlands):\n• Hoge piekafvoer bij plotselinge regen + smelt.\n• Versterkt door verstedelijking (verharding, geen infiltratie).\n• NL: Maas, Rijn, IJssel. Rivierdijken + overlopen + 'Ruimte voor de Rivier'-programma.\n• 2021 limburg-watersnood: extreme zomerneerslag → Geul/Maas → schade.\n\n**Kust** (overstroming + erosie):\n• Bij storm + springtij + zeespiegelstijging.\n• NL: Watersnoodramp 1953 (1836 doden Zeeland) → Deltawerken.\n• Wereldwijd: Bangladesh, mondingen Mekong/Mississippi.\n\n**Tropisch land**:\n• Moessons + cyclonen → overstroming.\n• Hurricanes (Atlantische cycloon): Caribië, golf van Mexico.\n• Typhoons (Pacifisch): Filipijnen, Japan.\n\n**Droogte + watertekort**:\n• Klimaatverandering verschuift neerslag-patronen.\n• Mediterrane gebieden + Sahel: meer droogte.\n• Gevolgen: misoogst, brand, conflict over water, klimaatmigratie.\n• Sahel: woestijn-uitbreiding (desertificatie).\n• 2018 Kaapstad bijna 'Day Zero' (water op).\n\n**Hittegolven**:\n• Aaneengesloten dagen met extreme T.\n• Europa 2003: ~70.000 extra doden.\n• NL 2022: 3 hittegolven.\n• Stedelijk hitte-eiland (UHI): beton + asfalt 5-10°C warmer dan landelijk.\n• Verminderen door bomen, groene daken, lichte oppervlakken.\n\n**Bosbranden**:\n• Versterkt door droogte + hitte.\n• Australië 2019-2020 'black summer': 18 mln ha verbrand.\n• Californië, Portugal, Griekenland jaarlijks.\n• Negatieve cyclus: brand → CO₂ → klimaat → meer brand.\n\n**El Niño + La Niña** (ENSO):\n• Natuurlijke schommeling Pacifische zeetemperatuur.\n• El Niño: warmer Oost-Pacific → droogte Indonesië/Aus, regen Z-Amerika.\n• La Niña: omgekeerd.\n• Cyclus 2-7 jaar.\n• Gevolgen voor wereld-weer + landbouw + visserij (verschillen vis-stocks).\n\n**NL-specifiek waterbeheer**:\n• Deltawerken (1953-1997): Oosterscheldekering + Maeslantkering + Stormvloedkering.\n• Waterschappen: oudst nog bestaande democratische organisatie NL (sinds 13e eeuw).\n• 'Ruimte voor de Rivier': dijken verleggen, uiterwaarden geven aan rivier.\n• Toekomst: zeespiegel + meer regen → meer ingrepen nodig.",
    checks: [
      {
        q: "Wat veroorzaakt **zeespiegelstijging** primair?",
        options: ["Smeltend landijs + thermische uitzetting","Smeltend zee-ijs","Meer regen","Verdamping minder"],
        answer: 0,
        wrongHints: [null, "Niet — zee-ijs heeft geen effect (Archimedes).", "Marginaal effect.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Twee mechanismen", tekst: "**Zeespiegelstijging**: (1) **smeltend landijs** (Groenland, Antarctica, gletsjers) voegt nieuw water toe. (2) **Thermische uitzetting**: warm water heeft groter volume. Zee-ijs heeft geen effect (zit al in water — Archimedes-principe)." }],
          theorie: "Cito-favoriet: 'Waarom heeft smelten van Arctisch zee-ijs nauwelijks invloed op zeespiegel?' Antwoord: drijft al, geen volume-toename.",
          niveaus: { basis: "Landijs + uitzetting. A.", simpeler: "Smelten landijs + warm zeewater = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Hoeveel % NL ligt onder NAP?",
        options: ["~26%","~10%","~50%","~70%"],
        answer: 0,
        wrongHints: [null, "Te laag.", "Te hoog.", "Veel te hoog."],
        uitlegPad: {
          stappen: [{ titel: "Een kwart onder zeeniveau", tekst: "Ongeveer **26%** NL ligt onder NAP. Vooral west-NL (Holland, Flevoland, Zeeland). Zonder dijken zou groot deel onder water staan. Daarom NL-investeringen in waterveiligheid extreem hoog vergeleken andere landen." }],
          theorie: "NAP = Nieuw Amsterdams Peil. Referentie sinds 17e eeuw, gebaseerd op zeespiegel-gemiddelde IJ.",
          niveaus: { basis: "26%. A.", simpeler: "~kwart NL onder NAP = A.", nogSimpeler: "26 = A." },
        },
      },
      {
        q: "Wanneer + waar was de **Watersnoodramp** die Deltawerken triggerde?",
        options: ["1953 Zeeland","1995 Limburg","1916 Markermeer","2021 Limburg"],
        answer: 0,
        wrongHints: [null, "Niet — andere ramp.", "Niet — andere ramp.", "Niet — recent maar geen Deltawerken-trigger."],
        uitlegPad: {
          stappen: [{ titel: "1 feb 1953", tekst: "**Watersnoodramp 1 feb 1953**: storm + springtij → dijken Zeeland + Z-Holland breken → 1836 doden + 200.000 dieren + 47.000 huizen weg. Politieke schok → **Deltaplan** + Deltawerken-uitvoering 1958-1997." }],
          theorie: "Andere overstromings-rampen: 1916 Markermeer (start Afsluitdijk), 1995 Maas/IJssel (200.000 geëvacueerd), 2021 Limburg-watersnood (relatief lichte schade).",
          niveaus: { basis: "1953 Zeeland. A.", simpeler: "Deltawerken na 1953 = A.", nogSimpeler: "1953 = A." },
        },
      },
      {
        q: "Wat is een **stedelijk hitte-eiland (UHI)**?",
        options: ["Steden zijn warmer dan platteland","Hitte-bestendige plant","Kunstmatig eiland tegen hitte","Hitte-wering-systeem"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet — niet systeem maar effect."],
        uitlegPad: {
          stappen: [{ titel: "Beton + asfalt = warmer", tekst: "**Urban Heat Island (UHI)** = steden zijn 5-10°C warmer dan omliggend platteland door beton/asfalt-warmte-absorptie + minder verkoeling door planten/water + airco-uitlaat. Bij hittegolf extra dodelijk in steden. Tegengaan: bomen, parken, groene daken, witte oppervlakken." }],
          niveaus: { basis: "Steden warmer. A.", simpeler: "UHI = steden warmer = A.", nogSimpeler: "Warmer = A." },
        },
      },
      {
        q: "Wat is **El Niño**?",
        options: ["Verwarmend Pacific-water → mondiale weers-effecten","Spaanse vulkaan","Hurricane-naam","Klimaatmodel"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "ENSO-cyclus", tekst: "**El Niño** = periodiek (2-7 jaar) opwarming oostelijke Stille Oceaan → minder regen Indonesië/Australië (droogte/brand) + meer regen Z-Amerika kust + minder visstand Peru. **La Niña** = tegenovergesteld. Beïnvloedt wereld-weer voor 1-2 jaar." }],
          theorie: "Cito-actueel: 2023-24 was sterk El Niño-jaar → extreme bosbranden Canada/Amazone, hittegolven.",
          niveaus: { basis: "Pacific-opwarming. A.", simpeler: "El Niño = warm Pacific = A.", nogSimpeler: "El Niño = A." },
        },
      },
    ],
  },

  // ─── C. GIS + aardobservatie ──────────────────────────────
  {
    title: "GIS + aardobservatie — satellieten + data",
    explanation:
      "**Aardobservatie** = waarnemen van aarde vanaf satellieten + sensoren.\n\n**Geografisch Informatie Systeem (GIS)** = software om geo-data te verwerken + visualiseren. ArcGIS, QGIS, Google Earth.\n\n**Lagen-principe** (vakerwoord cartografie):\n• Topografie (hoogte, water).\n• Wegen.\n• Bevolkingsdichtheid.\n• Landgebruik.\n• Risico-zones.\nMeerdere lagen combineren → analyse.\n\n**Satelliet-soorten**:\n\n**Geostationair** (~36.000 km):\n• Blijft boven zelfde plek aarde.\n• Snel-update weersatelliet (Meteosat).\n• Communicatie.\n• Nadeel: ver weg → minder detail.\n\n**Polaire baan** (laag, ~700 km):\n• Cirkelt 14× per dag rond.\n• Bedekt hele aarde elke paar dagen.\n• Hoge resolutie.\n• Voorbeelden: Sentinel (ESA), Landsat (NASA).\n\n**Spectrale banden**:\n• **Zichtbaar licht** (rood/groen/blauw): foto's.\n• **Infrarood**: hitte-emissies → bosbrand-detectie, vulkanische activiteit.\n• **Thermisch**: temperatuur-meting oppervlak.\n• **Microgolf/SAR (radar)**: door wolken heen, dag/nacht. Vervormingen meten (mm-niveau!).\n• **Combinaties**: false-color images om vegetatie, water, urbaan te onderscheiden.\n\n**NDVI (Normalized Difference Vegetation Index)**:\n• Gezondheid vegetatie meten.\n• Range −1 tot +1, gezonde planten ~0,4-0,9.\n• Detecteert oogst-mislukking, ontbossing, droogte.\n\n**Voorbeelden toepassingen**:\n\n**Klimaat-monitoring**:\n• Antarctica-/Groenland-ijsmassa via gravity-satellites (GRACE).\n• CO₂-concentratie atmosfeer (OCO-2 NASA).\n• Zeespiegel via radar-altimetrie (Jason-3).\n\n**Rampen-monitoring**:\n• Voor + na satellite-beelden: schade in beeld brengen (aardbeving, tsunami, overstroming).\n• Sentinel-1 SAR: detect vervorming aardkorst vóór vulkaan-uitbarsting.\n• Brand-detectie (MODIS, VIIRS): vrijwel real-time.\n\n**Landbouw**:\n• Drones + satellieten voor precisielandbouw.\n• Optimaal moment voor irrigatie, bemesting, oogst.\n\n**Stedelijke planning**:\n• Hoogte-data (LiDAR-laser-scanning) voor 3D-modellen.\n• Verkeer-monitoring via tijdseries.\n\n**Defensie + grenswacht**:\n• Boot-detectie op zee.\n• Bewegingen aan grenzen.\n• Internationaal verdrag-toezicht (kernproef-detectie).\n\n**Nadelen + privacy**:\n• Wie ziet wat? Commerciële satellieten (Maxar, Planet) verkopen sub-meter beelden.\n• Surveillance-overheden.\n• Burgers minder anoniem.\n\n**Open data**:\n• Sentinel + Landsat: gratis voor iedereen.\n• OpenStreetMap: door vrijwilligers samengesteld kaartwerk.\n• Gebruik voor research, ngo's, ramp-respons.\n\n**Citizen science**:\n• OpenStreetMap: NL volledig in detail door vrijwilligers.\n• iNaturalist: biodiversiteit in beeld brengen.\n• Crowd-sourcing voor data-verzameling.",
    checks: [
      {
        q: "Wat doet **GIS**?",
        options: ["Geo-data verwerken + visualiseren","Stroom opwekken","Satellieten lanceren","Klimaat berekenen"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet — beheer software.", "Wel mogelijk via GIS, maar definitie breder."],
        uitlegPad: {
          stappen: [{ titel: "GIS = Geographic Info System", tekst: "**GIS** = software om geo-locatie-data (kaarten, satellietbeelden, statistieken) samen te brengen, analyseren + visualiseren. Voorbeelden: ArcGIS (commercial), QGIS (open source), Google Earth (consumer)." }],
          niveaus: { basis: "Geo-data verwerken. A.", simpeler: "GIS = kaart-software = A.", nogSimpeler: "Software = A." },
        },
      },
      {
        q: "**Polaire baan**-satelliet bedekt hele aarde in:",
        options: ["Paar dagen","1 uur","1 jaar","Nooit"],
        answer: 0,
        wrongHints: [null, "Te kort — kringt wel maar bedekt niet alles.", "Te lang.", "Wel."],
        uitlegPad: {
          stappen: [{ titel: "14× per dag", tekst: "Polaire-baan-satelliet (~700 km) cirkelt 14× per dag van pool-naar-pool. Aarde draait onder hem door, dus elke baan bedekt nieuwe strook. **Hele aarde** wordt in **paar dagen** bedekt. Sentinel-2 doet 5 dagen herzieningstijd." }],
          niveaus: { basis: "Paar dagen. A.", simpeler: "Polair = paar dagen = A.", nogSimpeler: "Paar dagen = A." },
        },
      },
      {
        q: "Welk soort straling werkt **door wolken heen**?",
        options: ["Radar (microgolf / SAR)","Zichtbaar licht","Infrarood","Ultraviolet"],
        answer: 0,
        wrongHints: [null, "Niet — wordt geblokkeerd.", "Niet helemaal.", "Niet."],
        uitlegPad: {
          stappen: [{ titel: "SAR = wolken-onafhankelijk", tekst: "**SAR** (Synthetic Aperture Radar): zendt zelf microgolven uit en meet reflectie. **Doordringt wolken + werkt 24/7**. Ideaal voor permanente monitoring + vervormings-detectie (mm-precisie!) na bevingen of vulkaan-opheffing." }],
          theorie: "Sentinel-1 (ESA, gratis) levert SAR-data. Cruciaal voor: vroegtijdige vulkaan-detectie, overstroming-mapping bij bewolking, scheep-monitoring.",
          niveaus: { basis: "Radar. A.", simpeler: "SAR door wolk = A.", nogSimpeler: "Radar = A." },
        },
      },
      {
        q: "**NDVI** meet:",
        options: ["Vegetatie-gezondheid","Aardbeving","Zeetemperatuur","Bevolkingsdichtheid"],
        answer: 0,
        wrongHints: [null, "Niet — andere meting.", "Niet primair.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Vegetation Index", tekst: "**NDVI** (Normalized Difference Vegetation Index) = (NIR − Rood) / (NIR + Rood). Gezonde planten reflecteren veel infrarood + absorberen rood → hoge NDVI (0,4-0,9). Bruin/dood → laag. Gebruikt voor: oogst-monitoring, droogte-detectie, ontbossings-tracking." }],
          niveaus: { basis: "Vegetatie. A.", simpeler: "NDVI = plant-gezond = A.", nogSimpeler: "Planten = A." },
        },
      },
      {
        q: "Wat is **OpenStreetMap**?",
        options: ["Door vrijwilligers gemaakt open-kaartwerk","Google-bezit","Alleen satellieten","Sluit-tegen-betaling"],
        answer: 0,
        wrongHints: [null, "Niet — onafhankelijk.", "Niet — gewone kaarten.", "Niet — gratis."],
        uitlegPad: {
          stappen: [{ titel: "OSM = Wikipedia van kaarten", tekst: "**OpenStreetMap** (OSM) = wereld-wijde kaart gebouwd door vrijwilligers. Iedereen kan toevoegen/corrigeren. Gratis te gebruiken (open licence). NL is volledig + zeer gedetailleerd. Gebruik: GPS-apps (Maps.me, OsmAnd), ramp-respons, planning." }],
          theorie: "Bij rampen: Humanitarian OSM Team mobiliseert vrijwilligers wereldwijd om gebied snel te karteren na aardbeving/tsunami, voor hulpverleners.",
          niveaus: { basis: "Vrijwilligers-kaart. A.", simpeler: "OSM = vrije kaart = A.", nogSimpeler: "OSM = A." },
        },
      },
    ],
  },

  // ─── D. Risico-management ─────────────────────────────────
  {
    title: "Risico-management — kwetsbaarheid + adaptatie",
    explanation:
      "**Risico** = kans × gevolgen × kwetsbaarheid.\n\nNiet alle gebieden zijn even kwetsbaar — armere landen lopen vaak grotere risico's bij gelijke fysieke kans.\n\n**Kwetsbaarheid (vulnerability)**:\n• **Sociaal-economisch**: armoede → slechte huizen, geen verzekering, geen reserves.\n• **Institutioneel**: zwakke overheid → geen vroegtijdige waarschuwing, geen evacuatie-plannen.\n• **Demografisch**: oude bevolking, kinderen → minder mobiel.\n• **Geografisch**: dicht bij water/breuk/vulkaan + geen vluchtroutes.\n• **Educatief**: weet niet wat te doen bij dreiging.\n\n**Voorbeeld vergelijking**:\n• Aardbeving M7 Iran: tienduizenden doden, slecht-gebouwde huizen.\n• Aardbeving M7 Japan: weinig doden, aardbeving-bestendige bouw.\n• Gelijke fysieke kracht — heel verschillende uitkomsten.\n\n**Risico-management-cyclus** (4 fases):\n\n**1. Preventie / mitigatie** (vóór):\n• Bouwvoorschriften: aardbevingsbestendig, hoog-water-niveau.\n• Land-gebruiks-zonering: niet bouwen in overstromings-vlaktes.\n• Bossen aanleggen voor bodem-stabilisatie.\n• Dijken + Deltawerken.\n\n**2. Voorbereiding (preparedness)**:\n• Vroegtijdige waarschuwings-systemen.\n• Evacuatie-plannen + oefenoefeningen.\n• Noodvoorraden voedsel + medicijnen.\n• Communicatie-protocollen.\n\n**3. Respons (tijdens / direct na)**:\n• Hulpverlening: brandweer, leger, rode kruis.\n• Evacuatie.\n• Medische hulp.\n• Tijdelijke onderdak.\n\n**4. Herstel (recovery)**:\n• Wederopbouw infrastructuur.\n• Economisch herstel.\n• Psychosociale steun.\n• Lessen leren → terug naar preventie.\n\n**Adaptatie aan klimaatverandering**:\n\n**Hard** (techniek):\n• Hogere dijken.\n• Stormvloed-keringen.\n• Verkoeling-systemen.\n• Erosion barriers kustlijn.\n\n**Zacht** (gedrag + planning):\n• Verhuis uit risico-zone.\n• Verzekering verplicht stellen.\n• Bewustwording-campagnes.\n• Internationale samenwerking.\n\n**Nature-based solutions**:\n• Mangroves planten voor kust-bescherming (golven dempen).\n• Rivieren-meanders herstellen voor overstroming-buffer.\n• Stedelijke parken voor hitte-vermindering.\n• Vaak goedkoper + duurzamer dan techniek.\n\n**Internationaal**:\n• **Sendai Framework** (UN): wereld-akkoord risicoreductie 2015-2030.\n• Doelen: minder doden, minder economische schade, meer ontwikkelingslanden geholpen.\n• Annual Global Assessment Report door UNDRR.\n\n**Klimaatmigratie**:\n• Door zeespiegelstijging + droogte verlaten mensen huis.\n• Voorbeeld: Tuvalu-bewoners naar Nieuw-Zeeland.\n• Sahel-bewoners naar steden + Europa.\n• Toekomst (2050): 100-300 mln klimaatmigranten geschat.\n• Geen formele 'klimaat-vluchteling'-status in Geneefse Verdrag (1951).\n\n**Verzekerings-industrie**:\n• Premies stijgen voor risico-gebieden.\n• Sommige plekken niet meer verzekerbaar (kust Florida, sommige delen Australië).\n• 'Climate redlining' = banken/verzekeraars trekken zich terug.\n\n**Wereldwijde ongelijkheid**:\n• 10% rijkste = ~50% emissies. 50% armste = ~10% emissies.\n• Maar arme landen lopen meeste klimaat-risico.\n• 'Loss + damage'-fonds (COP27 2022): rijke landen vergoeden klimaat-schade arme landen. Praktische uitvoering moeizaam.",
    checks: [
      {
        q: "Wat bepaalt risico volgens **risico-formule**?",
        options: ["Kans × gevolg × kwetsbaarheid","Alleen kans","Alleen gevolg","Geluk"],
        answer: 0,
        wrongHints: [null, "Niet voldoende — gevolg ook nodig.", "Niet alleen — ook kans.", "Niet — wel berekenbaar."],
        uitlegPad: {
          stappen: [{ titel: "Drievoudige formule", tekst: "**Risico = kans × gevolg × kwetsbaarheid**. Hoge kans + lage kwetsbaarheid (NL aardbeving via gas-winning, lichte huizen) = matig risico. Hoge kans + hoge kwetsbaarheid (Bangladesh moesson + dichte bevolking) = zeer hoog risico." }],
          theorie: "Cito-favoriet: vergelijk landen met gelijke fysieke dreiging maar verschillende kwetsbaarheid → verschil in uitkomst.",
          niveaus: { basis: "Kans × gevolg × kwetsbaarheid. A.", simpeler: "3-componenten = A.", nogSimpeler: "Drie = A." },
        },
      },
      {
        q: "Wat is een **mitigatie-maatregel** bij overstroming-risico?",
        options: ["Dijken bouwen","Burgers waarschuwen","Schade vergoeden","Mensen opvangen"],
        answer: 0,
        wrongHints: [null, "Dat is voorbereiding.", "Dat is herstel.", "Dat is respons."],
        uitlegPad: {
          stappen: [{ titel: "Mitigatie = voorkomen", tekst: "**Mitigatie** = maatregelen die het risico zelf verkleinen. **Dijken bouwen, water-vlaktes vrij houden, hoge gebouw-eisen**. Tegenover: voorbereiding (waarschuwen, plannen), respons (evacueren), herstel (heropbouwen)." }],
          niveaus: { basis: "Dijken. A.", simpeler: "Mitigatie = preventie = A.", nogSimpeler: "Dijken = A." },
        },
      },
      {
        q: "Welke is een **nature-based solution**?",
        options: ["Mangrove-bossen planten tegen kust-erosie","Hoge betonnen dijk","Diepe pomp-systemen","Stormvloedkering"],
        answer: 0,
        wrongHints: [null, "Niet — harde-techniek.", "Niet — harde-techniek.", "Niet — harde-techniek."],
        uitlegPad: {
          stappen: [{ titel: "Natuur helpt zelf", tekst: "**Nature-based solutions** = oplossingen die natuur inschakelen: mangroves (golven dempen), wadlanden (bufferen vloed), bomen (hitte verminderen), meanders herstellen. Vaak goedkoper + bio-divers + duurzaam dan beton-bouw." }],
          theorie: "Voorbeeld: Vietnam plant mangroves langs kust — kost veel minder dan zee-wering bouwen + biedt ook visserij.",
          niveaus: { basis: "Mangroves. A.", simpeler: "Natuur-oplossing = A.", nogSimpeler: "Natuur = A." },
        },
      },
      {
        q: "Iran en Japan worden allebei door M7-bevingen getroffen. Waarom verschilt **dodental** enorm?",
        options: ["Kwetsbaarheid + bouwvoorschriften","Andere magnitude","Andere bevolking-dichtheid alleen","Geluk"],
        answer: 0,
        wrongHints: [null, "Niet — gelijke magnitude.", "Speelt mee maar niet primair.", "Niet — structureel verschil."],
        uitlegPad: {
          stappen: [{ titel: "Bouwvoorschriften beslissen", tekst: "**Japan**: strikte aardbevings-bestendige bouw + early-warning + oefeningen → weinig doden bij M7. **Iran**: oudere lemen huizen + corruptie bij vergunningen + weinig voorbereiding → tienduizenden doden bij M7. Zelfde fysieke kracht, **enorm verschil in kwetsbaarheid**." }],
          theorie: "Cito-pattern: 'leg verschil in uitkomst uit ondanks gelijke magnitude'. Bouwvoorschriften + economie + cultuur.",
          niveaus: { basis: "Kwetsbaarheid. A.", simpeler: "Bouw + voorbereiding = A.", nogSimpeler: "Bouw = A." },
        },
      },
      {
        q: "Wat is **klimaatmigratie**?",
        options: ["Mensen verhuizen door klimaat-impact","Trekvogels seizoens-trek","Toeristen naar warme landen","Plant-verspreiding"],
        answer: 0,
        wrongHints: [null, "Niet bedoeld in geo-context.", "Niet — andere reden.", "Niet menselijk."],
        uitlegPad: {
          stappen: [{ titel: "Vluchten voor klimaat", tekst: "**Klimaatmigratie** = mensen verlaten woonplaats door klimaat-impact: zeespiegelstijging (Pacific-eilanden), droogte (Sahel), bosbranden, extreme hitte. Schatting 2050: 100-300 miljoen klimaatmigranten. **Niet** formeel beschermd als 'vluchteling' onder Geneefse Verdrag — juridisch grijs gebied." }],
          theorie: "Voorbeelden: Tuvalu-bewoners naar Nieuw-Zeeland (eerste land met klimaat-visum). Sahel-bewoners naar Sahel-steden of Europa.",
          niveaus: { basis: "Verhuizen door klimaat. A.", simpeler: "Klimaat → mensen vluchten = A.", nogSimpeler: "A." },
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
        q: "Bij **welke plaatgrens** zijn aardbevingen + tsunami's risico maar geen vulkanen?",
        options: ["Continentale botsing (Himalaya)","Subductie","Divergent","Transform"],
        answer: 0,
        wrongHints: [null, "Niet — wel vulkanen.", "Niet — wel vulkanen.", "Niet — geen tsunami's primair."],
        uitlegPad: {
          stappen: [{ titel: "Continent vs continent", tekst: "Bij **continentale botsing** (India tegen Azië → Himalaya): beide platen licht → opheffen tot bergen + zware bevingen. Geen subductie diep genoeg voor smelten → geen vulkanen. Tsunami's vooral subductie-grenzen (onderzeese verstoring)." }],
          niveaus: { basis: "Continentale botsing. A.", simpeler: "Cont. botsing = berg+beving = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Wat is een **Day Zero**-scenario?",
        options: ["Stad zonder drinkwater (Kaapstad 2018)","Eerste dag warming","Begin oorlog","Aardbeving"],
        answer: 0,
        wrongHints: [null, "Niet relevant.", "Niet relevant.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "Water op", tekst: "**Kaapstad 2018**: na 3 jaar droogte dreigde stad-reservoirs leeg op een 'Day Zero' → 4 mln mensen zonder kraanwater. Met rantsoenering (50 L per dag per persoon) net vermeden. Toekomst: meer steden risico (Mexico City, Lima)." }],
          theorie: "Cito-actueel: klimaatverandering verschuift neerslag-patronen → meer steden risico op water-tekort.",
          niveaus: { basis: "Stad zonder water. A.", simpeler: "Day Zero = water-op = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "Welke is een **adaptatie-maatregel** vs een **mitigatie-klimaat**?",
        options: ["Adaptatie = hogere dijken; mitigatie = CO₂-reductie","Beide hetzelfde","Adaptatie = stoppen olie","Mitigatie = evacuatie"],
        answer: 0,
        wrongHints: [null, "Niet — verschillende doelen.", "Niet — dat is mitigatie.", "Niet — dat is respons."],
        uitlegPad: {
          stappen: [{ titel: "Verschillende benaderingen", tekst: "**Mitigatie** = klimaatverandering **voorkomen/verminderen** (CO₂-uitstoot omlaag). **Adaptatie** = je aanpassen aan onvermijdelijke veranderingen (dijken, koeltere steden, droogte-bestendig gewas). Beide nodig — geen of-of." }],
          niveaus: { basis: "Verschillende. A.", simpeler: "Adapt = aanpassen, Mit = voorkomen = A.", nogSimpeler: "A." },
        },
      },
      {
        q: "**Sentinel-satellieten** (ESA) hebben welke eigenschap?",
        options: ["Gratis open-data wereldwijd","Alleen voor militair","Commercieel duur","Werken alleen in EU"],
        answer: 0,
        wrongHints: [null, "Niet — civiel.", "Niet — gratis.", "Niet — wereldwijd."],
        uitlegPad: {
          stappen: [{ titel: "Open access", tekst: "**Sentinel** (ESA Copernicus-programma) levert gratis satelliet-data wereldwijd voor iedereen. Sentinel-1 (SAR), Sentinel-2 (optisch), Sentinel-3 (oceaan), Sentinel-5P (atmosfeer). Gebruik door wetenschappers, ngo's, journalisten, burgers." }],
          theorie: "Tegenstelling: Maxar (VS) levert sub-meter beelden maar betaald + selectief. Sentinel democratiseert aardobservatie.",
          niveaus: { basis: "Gratis open. A.", simpeler: "Sentinel = gratis = A.", nogSimpeler: "Gratis = A." },
        },
      },
      {
        q: "**Sendai Framework** is:",
        options: ["VN-akkoord rampreductie 2015-2030","Stad in Japan","Klimaatverdrag CO₂","Satelliet"],
        answer: 0,
        wrongHints: [null, "Wel stad maar niet bedoeld hier.", "Niet — andere doel.", "Niet relevant."],
        uitlegPad: {
          stappen: [{ titel: "VN-akkoord 2015", tekst: "**Sendai Framework for Disaster Risk Reduction 2015-2030** = VN-akkoord (in Sendai Japan getekend) voor wereld-wijde risicoreductie. Doel: minder doden, minder schade, vooral arme landen helpen. Opvolger van Hyogo Framework (2005-2015)." }],
          niveaus: { basis: "VN-akkoord. A.", simpeler: "Sendai = VN-rampen-akkoord = A.", nogSimpeler: "VN = A." },
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

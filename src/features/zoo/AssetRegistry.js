// AssetRegistry — centrale lijst van alle 3D-modellen in Zookwartier.
//
// Eén plek die zegt WELKE modellen bestaan en hoe ze in de wereld horen
// (schaal-normalisatie naar targetHeight = hoogte in meters). De scene/loader
// leest hieruit; nergens anders staan harde model-paden.
//
// Bronnen (CC0): dieren = Quaternius "Ultimate Animated Animals"; natuur =
// Kenney "Nature Kit"; figuurtje = Kenney "Blocky Characters". Zie CREDITS.md.

export const ASSET_KINDS = {
  ANIMAL: "animal",
  NATURE: "nature",
  CHARACTER: "character",
};

// Kraampjes-soorten: elk een "behoefte" die bezoekers kunnen krijgen. `voorziet`
// op een gebouw-asset koppelt het kraampje aan een soort. fair = "eerlijke prijs"
// (tot hier koopt vrijwel iedereen; daarboven haken er steeds meer af). start =
// standaard-instelprijs. craving = denkwolkje-tekst boven een bezoeker.
export const KRAAM_SOORTEN = {
  food: { label: "Patatkraam", emoji: "🍟", craving: "Ik heb honger", cravingEmoji: "🍔", fair: 5, start: 5 },
  drink: { label: "Drankkraam", emoji: "🥤", craving: "Ik heb dorst", cravingEmoji: "🥤", fair: 4, start: 4 },
  ice: { label: "IJscokraam", emoji: "🍦", craving: "Ik wil een ijsje", cravingEmoji: "🍦", fair: 4, start: 4 },
  popcorn: { label: "Popcornkraam", emoji: "🍿", craving: "Zin in popcorn", cravingEmoji: "🍿", fair: 4, start: 4 },
};
export const KRAAM_KEYS = Object.keys(KRAAM_SOORTEN);

// Producten per kraam: je kiest er één om te verkopen. `inkoop` = wat het jou kost
// (vast). De speler bepaalt zelf de verkoopprijs → winst = verkoop − inkoop. Zo
// oefent het kind rekenen (winst/marge) terwijl het muntjes verdient. "fair" voor
// de koopkans leiden we af van de inkoop (≈ 2× inkoop = nog steeds aantrekkelijk).
export const KRAAM_PRODUCTEN = {
  food: [
    { id: "patat", label: "Patat", emoji: "🍟", inkoop: 3 },
    { id: "hotdog", label: "Hotdog", emoji: "🌭", inkoop: 4 },
    { id: "hamburger", label: "Hamburger", emoji: "🍔", inkoop: 5 },
  ],
  drink: [
    { id: "frisdrank", label: "Frisdrank", emoji: "🥤", inkoop: 2 },
    { id: "koffie", label: "Koffie", emoji: "☕", inkoop: 3 },
    { id: "milkshake", label: "Milkshake", emoji: "🥛", inkoop: 4 },
  ],
  ice: [
    { id: "waterijs", label: "Waterijsje", emoji: "🍧", inkoop: 2 },
    { id: "softijs", label: "Softijs", emoji: "🍦", inkoop: 3 },
    { id: "sundae", label: "IJscoupe", emoji: "🍨", inkoop: 4 },
  ],
  popcorn: [
    { id: "popcorn", label: "Popcorn", emoji: "🍿", inkoop: 2 },
    { id: "suikerspin", label: "Suikerspin", emoji: "🍭", inkoop: 3 },
    { id: "snoep", label: "Snoepzak", emoji: "🍬", inkoop: 3 },
  ],
};

export const ZOO_ASSETS = {
  // ---- Dieren (Quaternius, vertex-colored → nooit "wit") ----
  fox: { id: "fox", kind: "animal", name: "Vos", emoji: "🦊", url: "/models/zoo/animals/Fox.glb", targetHeight: 0.8, price: 10 },
  deer: { id: "deer", kind: "animal", name: "Hert", emoji: "🦌", url: "/models/zoo/animals/Deer.glb", targetHeight: 1.3, price: 14 },
  stag: { id: "stag", kind: "animal", name: "Edelhert", emoji: "🦌", url: "/models/zoo/animals/Stag.glb", targetHeight: 1.5, price: 18 },
  alpaca: { id: "alpaca", kind: "animal", name: "Alpaca", emoji: "🦙", url: "/models/zoo/animals/Alpaca.glb", targetHeight: 1.35, price: 16 },
  cow: { id: "cow", kind: "animal", name: "Koe", emoji: "🐄", url: "/models/zoo/animals/Cow.glb", targetHeight: 1.3, price: 15 },
  donkey: { id: "donkey", kind: "animal", name: "Ezel", emoji: "🫏", url: "/models/zoo/animals/Donkey.glb", targetHeight: 1.35, price: 15 },
  horse: { id: "horse", kind: "animal", name: "Paard", emoji: "🐴", url: "/models/zoo/animals/Horse.glb", targetHeight: 1.6, price: 20 },
  husky: { id: "husky", kind: "animal", name: "Husky", emoji: "🐕", url: "/models/zoo/animals/Husky.glb", targetHeight: 0.85, price: 12 },
  shibaInu: { id: "shibaInu", kind: "animal", name: "Shiba", emoji: "🐕", url: "/models/zoo/animals/ShibaInu.glb", targetHeight: 0.8, price: 12 },
  wolf: { id: "wolf", kind: "animal", name: "Wolf", emoji: "🐺", url: "/models/zoo/animals/Wolf.glb", targetHeight: 0.95, price: 16 },

  // ---- Boerderijdieren (Quaternius "Farm Animal Pack", FBX→GLB). ----
  pig: { id: "pig", kind: "animal", name: "Varken", emoji: "🐷", url: "/models/zoo/animals/Pig.glb", targetHeight: 0.9, price: 14 },
  // Vrijspeel-dier (niet te koop, prijs 0): verdien je door het spaar-leerpad
  // 100% af te ronden. Gouden tint maakt 'm bijzonder. Zie features/zoo/unlocks.js.
  spaarvarken: { id: "spaarvarken", kind: "animal", name: "Spaarvarken", emoji: "🐷", url: "/models/zoo/animals/Pig.glb", targetHeight: 0.95, tint: "#f6c84c", price: 0, unlock: "financiele-vorming-po" },
  // Souvenirs van de uitvinders-kabouters (P1 cirkel-is-rond): mini-monumenten
  // op een sokkel, vrijspelen door het gekoppelde leerpad af te ronden.
  souvenirPiramide: { id: "souvenirPiramide", kind: "decor", name: "Mini-piramide", emoji: "🔺", procedural: "souvenir", souvenir: "piramide", cells: 1, price: 0, unlock: "verhoudingen-po" },
  souvenirBoom: { id: "souvenirBoom", kind: "decor", name: "Newtons boompje", emoji: "🍎", procedural: "souvenir", souvenir: "newton", cells: 1, price: 0, unlock: "krachten-natuurkunde" },
  souvenirTesla: { id: "souvenirTesla", kind: "decor", name: "Mini-bliksemtoren", emoji: "⚡", procedural: "souvenir", souvenir: "tesla", cells: 1, price: 0, unlock: "elektriciteit-natuurkunde" },
  // Souvenirs van de PARK-leermomenten (cirkel-is-rond fase 2, 17 jul): rond het
  // leerpad af dat bij een park-object hoort → mini-monument voor in je park.
  souvenirLoc: { id: "souvenirLoc", kind: "decor", name: "Mini-stoomloc", emoji: "🚂", procedural: "souvenir", souvenir: "stoomloc", cells: 1, price: 0, unlock: "industriele-revolutie-po" },
  souvenirGoudboom: { id: "souvenirGoudboom", kind: "decor", name: "Gouden boompje", emoji: "🌳", procedural: "souvenir", souvenir: "goudboom", cells: 1, price: 0, unlock: "fotosynthese-biologie" },
  souvenirRad: { id: "souvenirRad", kind: "decor", name: "Mini-reuzenrad", emoji: "🎡", procedural: "souvenir", souvenir: "reuzenrad", cells: 1, price: 0, unlock: "oppervlakte-omtrek-po" },
  souvenirMolen: { id: "souvenirMolen", kind: "decor", name: "Mini-draaimolen", emoji: "🎠", procedural: "souvenir", souvenir: "draaimolen", cells: 1, price: 0, unlock: "tijd-snelheid-afstand-po" },
  souvenirKlok: { id: "souvenirKlok", kind: "decor", name: "Stationsklok", emoji: "🕐", procedural: "souvenir", souvenir: "klok", cells: 1, price: 0, unlock: "dienstregeling-roosters-po" },
  souvenirFontein: { id: "souvenirFontein", kind: "decor", name: "Wens-fonteintje", emoji: "⛲", procedural: "souvenir", souvenir: "fontein", cells: 1, price: 0, unlock: "waterkringloop-po" },
  // 🥇 Gouden kubus (Mark 17 aug): verdien je door het inhoud/ruimtemeetkunde-pad
  // af te ronden — waar je leert een kubus-inhoud te berekenen (n·n·n). Gouden
  // versie van de leer-kubus als trofee. Eerste van een geplande gouden-vormen-
  // familie (piramide/bol/kegel volgen). Zie unlocks.js + Ideeën-tracker #46.
  souvenirGoudkubus: { id: "souvenirGoudkubus", kind: "decor", name: "Gouden kubus", emoji: "🥇", procedural: "souvenir", souvenir: "goudkubus", cells: 1, price: 0, unlock: "ruimtemeetkunde" },
  sheep: { id: "sheep", kind: "animal", name: "Schaap", emoji: "🐑", url: "/models/zoo/animals/Sheep.glb", targetHeight: 1.0, price: 14 },
  zebra: { id: "zebra", kind: "animal", name: "Zebra", emoji: "🦓", url: "/models/zoo/animals/Zebra.glb", targetHeight: 1.6, price: 22 },
  pug: { id: "pug", kind: "animal", name: "Hondje", emoji: "🐶", url: "/models/zoo/animals/Pug.glb", targetHeight: 0.6, price: 12 },

  // ---- Vissen (Quaternius "Animated Fish Pack", FBX→GLB). Zet ze in een
  // meertje (graaf een dal, doe er water in) → ze zwemmen onder water. ----
  fishClown: { id: "fishClown", kind: "animal", name: "Visje", emoji: "🐠", url: "/models/zoo/fish/Fish1.glb", targetHeight: 0.45, price: 8 },
  fishBlue: { id: "fishBlue", kind: "animal", name: "Blauw visje", emoji: "🐟", url: "/models/zoo/fish/Fish2.glb", targetHeight: 0.45, price: 8 },
  fishYellow: { id: "fishYellow", kind: "animal", name: "Geel visje", emoji: "🐠", url: "/models/zoo/fish/Fish3.glb", targetHeight: 0.45, price: 8 },
  dolphin: { id: "dolphin", kind: "animal", name: "Dolfijn", emoji: "🐬", url: "/models/zoo/fish/Dolphin.glb", targetHeight: 0.9, price: 25 },
  shark: { id: "shark", kind: "animal", name: "Haai", emoji: "🦈", url: "/models/zoo/fish/Shark.glb", targetHeight: 1.0, price: 30 },
  whale: { id: "whale", kind: "animal", name: "Walvis", emoji: "🐋", url: "/models/zoo/fish/Whale.glb", targetHeight: 1.6, price: 40 },
  mantaray: { id: "mantaray", kind: "animal", name: "Manta", emoji: "🐡", url: "/models/zoo/fish/Mantaray.glb", targetHeight: 0.5, price: 22 },

  // ---- Dino's (Quaternius "Animated Dinosaurs", CC0). FBX→GLB gaf een
  // armature-schaal 300 → vaste schaal i.p.v. bbox-normalisatie. ----
  velociraptor: { id: "velociraptor", kind: "animal", name: "Raptor", emoji: "🦖", url: "/models/zoo/dinos/Velociraptor.glb", fixedScale: 0.22, price: 30 },
  triceratops: { id: "triceratops", kind: "animal", name: "Triceratops", emoji: "🦕", url: "/models/zoo/dinos/Triceratops.glb", fixedScale: 0.26, price: 40 },
  stegosaurus: { id: "stegosaurus", kind: "animal", name: "Stegosaurus", emoji: "🦕", url: "/models/zoo/dinos/Stegosaurus.glb", fixedScale: 0.26, price: 45 },
  parasaurolophus: { id: "parasaurolophus", kind: "animal", name: "Parasaurus", emoji: "🦕", url: "/models/zoo/dinos/Parasaurolophus.glb", fixedScale: 0.30, price: 50 },
  trex: { id: "trex", kind: "animal", name: "T-Rex", emoji: "🦖", url: "/models/zoo/dinos/Trex.glb", fixedScale: 0.32, price: 60 },
  apatosaurus: { id: "apatosaurus", kind: "animal", name: "Apatosaurus", emoji: "🦕", url: "/models/zoo/dinos/Apatosaurus.glb", fixedScale: 0.38, price: 70 },

  // ---- Gebouwen & kraampjes (Kenney Fantasy Town + City Kit, CC0). Textuur
  // ingebakken met gltf-transform → zelfstandig/CSP-proof. ----
  stallRed: { id: "stallRed", kind: "building", name: "Kraampje", emoji: "🏪", url: "/models/zoo/build/stall-red.glb", targetHeight: 2.2, price: 25 },
  stallGreen: { id: "stallGreen", kind: "building", name: "Groen kraampje", emoji: "🏪", url: "/models/zoo/build/stall-green.glb", targetHeight: 2.2, price: 25 },
  cart: { id: "cart", kind: "building", name: "Marktkar", emoji: "🛒", url: "/models/zoo/build/cart-high.glb", targetHeight: 1.9, price: 20 },
  patatkraam: { id: "patatkraam", kind: "building", name: "Patatkraam", emoji: "🍟", procedural: "patatkraam", price: 35, voorziet: "food" },
  drankkraam: { id: "drankkraam", kind: "building", name: "Drankkraam", emoji: "🥤", procedural: "drankkraam", price: 35, voorziet: "drink" },
  ijscokraam: { id: "ijscokraam", kind: "building", name: "IJscokraam", emoji: "🍦", procedural: "ijscokraam", price: 35, voorziet: "ice" },
  popcornkraam: { id: "popcornkraam", kind: "building", name: "Popcornkraam", emoji: "🍿", procedural: "popcornkraam", price: 35, voorziet: "popcorn" },
  fountain: { id: "fountain", kind: "building", name: "Fontein", emoji: "⛲", url: "/models/zoo/build/fountain.glb", targetHeight: 1.4, price: 35 },
  // Gast-voorzieningen (procedureel, klein). Donatiebox levert passief muntjes op.
  bankje: { id: "bankje", kind: "decor", name: "Bankje", emoji: "🪑", procedural: "bench", cells: 1, price: 5 },
  prullenbak: { id: "prullenbak", kind: "decor", name: "Prullenbak", emoji: "🗑️", procedural: "trash", cells: 1, price: 3 },
  donatiebox: { id: "donatiebox", kind: "decor", name: "Donatiebox", emoji: "💰", procedural: "donation", cells: 1, price: 20, inkomst: 4 },
  // Echte Kenney-huizen met hun natuurlijke (realistische) kleuren — elk een
  // ander dak/muur-schema. Géén monochrome tint.
  houseA: { id: "houseA", kind: "building", name: "Huis 1", emoji: "🏠", url: "/models/zoo/build/house-a.glb", targetHeight: 3.4, price: 60 },
  houseB: { id: "houseB", kind: "building", name: "Huis 2", emoji: "🏠", url: "/models/zoo/build/house-b.glb", targetHeight: 3.4, price: 60 },
  houseC: { id: "houseC", kind: "building", name: "Huis 3", emoji: "🏠", url: "/models/zoo/build/house-c.glb", targetHeight: 3.4, price: 60 },
  houseD: { id: "houseD", kind: "building", name: "Huis 4", emoji: "🏠", url: "/models/zoo/build/house-d.glb", targetHeight: 3.5, price: 65 },
  houseE: { id: "houseE", kind: "building", name: "Villa", emoji: "🏡", url: "/models/zoo/build/house-e.glb", targetHeight: 3.6, price: 75 },
  houseF: { id: "houseF", kind: "building", name: "Huis 5", emoji: "🏠", url: "/models/zoo/build/house-f.glb", targetHeight: 3.5, price: 65 },
  houseG: { id: "houseG", kind: "building", name: "Huis 6", emoji: "🏠", url: "/models/zoo/build/house-g.glb", targetHeight: 3.5, price: 65 },
  houseH: { id: "houseH", kind: "building", name: "Stadshuis", emoji: "🏘️", url: "/models/zoo/build/house-h.glb", targetHeight: 3.8, price: 75 },
  // Vrolijk gekleurde huisjes (zelfde modellen, lichte kleur-tint over het wit).
  huisRood: { id: "huisRood", kind: "building", name: "Rood huisje", emoji: "🏠", url: "/models/zoo/build/house-a.glb", targetHeight: 3.4, tint: "#f3a89c", price: 60 },
  huisBlauw: { id: "huisBlauw", kind: "building", name: "Blauw huisje", emoji: "🏠", url: "/models/zoo/build/house-a.glb", targetHeight: 3.4, tint: "#a9cdf5", price: 60 },
  huisGroen: { id: "huisGroen", kind: "building", name: "Groen huisje", emoji: "🏠", url: "/models/zoo/build/house-a.glb", targetHeight: 3.4, tint: "#b3e09a", price: 60 },
  huisGeel: { id: "huisGeel", kind: "building", name: "Geel huisje", emoji: "🏠", url: "/models/zoo/build/house-a.glb", targetHeight: 3.4, tint: "#f5dd8e", price: 60 },
  villaRoze: { id: "villaRoze", kind: "building", name: "Roze villa", emoji: "🏡", url: "/models/zoo/build/house-e.glb", targetHeight: 3.6, tint: "#f3b6d2", price: 75 },
  stadshuisPaars: { id: "stadshuisPaars", kind: "building", name: "Paars stadshuis", emoji: "🏘️", url: "/models/zoo/build/house-h.glb", targetHeight: 3.8, tint: "#c5b1e8", price: 75 },

  // ---- Attractie (zelf-gebouwd, procedureel) ----
  carousel: { id: "carousel", kind: "attraction", name: "Draaimolen", emoji: "🎠", procedural: "carousel", price: 60 },
  ferris: { id: "ferris", kind: "attraction", name: "Reuzenrad", emoji: "🎡", procedural: "ferris", price: 90 },
  swing: { id: "swing", kind: "attraction", name: "Zweefmolen", emoji: "🎪", procedural: "swing", price: 70 },
  // 🔺 Egyptische piramide (Mark 16 aug): grote blikvanger + wiskunde-leermoment
  // (inhoud berekenen + stelling van Pythagoras). Aantikbaar → de gids/maatje
  // vertelt erover, met leer-knoppen naar ruimtemeetkunde + pythagoras.
  // cells:7 reserveert de footprint van de MAX-grootte (Mark 17 aug): de piramide
  // schaalt visueel mee met "maat" (tot ~2,5×), dus hij moet ook méér raster-
  // vakjes vrijhouden — anders verdringt hij bij uitzetten de buur-vormen.
  // 3× zo groot (Mark 17 aug) → footprint 3× ruimer (cells:21 = ~40 m reserveren)
  // en botsing rond de echte kegelvoet (botsCells:13 ≈ ±12 m) zodat je er niet
  // doorheen loopt maar wél tot aan de voet kunt komen om de som te lezen.
  piramide: { id: "piramide", kind: "attraction", name: "Egyptische piramide", emoji: "🔺", procedural: "piramide", price: 70, cells: 21, botsCells: 13, camTop: 12, maatMin: 4, maatMax: 11, maatDefault: 8, maatLeerpad: "ruimtemeetkunde", goudPad: "ruimtemeetkunde", goudDrempel: 4 },
  // 🧊 Rubik-kubus kunstwerk (Mark 16 aug): blikvanger + inhoud-van-een-kubus-
  // leermoment (ribbe³), met de schuif-speeltuin en de voorlees-stem.
  kubus: { id: "kubus", kind: "attraction", name: "Kleuren-kubus", emoji: "🧊", procedural: "rubik", price: 55, cells: 5, botsCells: 3, maatMin: 2, maatMax: 6, maatDefault: 3, maatLeerpad: "ruimtemeetkunde", goudPad: "ruimtemeetkunde", goudDrempel: 2 },
  // 🔻 Glazen kegel (was Reuze-ijsje; 17 aug didactisch opgeschoond — Mark:
  // "lerend > leuk"): doorzichtige kegel met straal/hoogte-maatlijnen (⅓·π·r²·h).
  kegel: { id: "kegel", kind: "attraction", name: "Glazen kegel", emoji: "🔻", procedural: "ijsje", price: 50, cells: 5, botsCells: 3, maatMin: 2, maatMax: 6, maatDefault: 3, maatLeerpad: "ruimtemeetkunde", goudPad: "ruimtemeetkunde", goudDrempel: 6 },
  // 🔮 Glazen bal (was Reuze-voetbal) + 🥅 halve bol: doorzichtig met straal/
  // diameter-maatlijnen — inhoud van een bol (⁴⁄₃πr³) en halve bol (⅔πr³).
  bol: { id: "bol", kind: "attraction", name: "Glazen bal", emoji: "🔮", procedural: "bol", price: 45, cells: 5, botsCells: 3, maatMin: 2, maatMax: 6, maatDefault: 3, maatLeerpad: "ruimtemeetkunde", goudPad: "ruimtemeetkunde", goudDrempel: 8 },
  halvebol: { id: "halvebol", kind: "attraction", name: "Koepel (halve bal)", emoji: "🥅", procedural: "halvebol", price: 45, cells: 5, botsCells: 3, maatMin: 2, maatMax: 6, maatDefault: 3, maatLeerpad: "ruimtemeetkunde", goudPad: "ruimtemeetkunde", goudDrempel: 10 },
  // 🛢️ Glazen cilinder (18 aug): het "blikje" dat de kegel-formule compleet
  // maakt — zelfde bodem + hoogte-verhouding als de kegel; inhoud π·r²·h, de
  // kegel is er precies ⅓ van.
  cilinder: { id: "cilinder", kind: "attraction", name: "Glazen cilinder", emoji: "🛢️", procedural: "cilinder", price: 50, cells: 5, botsCells: 3, maatMin: 2, maatMax: 6, maatDefault: 3, maatLeerpad: "ruimtemeetkunde", goudPad: "ruimtemeetkunde", goudDrempel: 12 },

  // 🎡 Interactieve leerobjecten (Mark 16-17 aug): het interactief-park-masterplan.
  // cells = footprint die de MAX-grootte reserveert, zodat een object nooit zijn
  // buren verdringt (Mark: "bij plaatsing hou rekening met maximale grootte").
  // Componenten in ParkLeerobjecten.jsx; leermomenten in parkLeermomenten.js.
  // ── Tier A: manipuleerbaar / levend ──
  klok: { id: "klok", kind: "attraction", name: "Klokkentoren", emoji: "🕐", procedural: "klok", price: 55, cells: 3, botsCells: 1 },
  weegschaal: { id: "weegschaal", kind: "attraction", name: "Weegschaal", emoji: "⚖️", procedural: "weegschaal", price: 45, cells: 3, botsCells: 1 },
  breukentaart: { id: "breukentaart", kind: "attraction", name: "Breuken-taart", emoji: "🍰", procedural: "breukentaart", price: 40, cells: 3, botsCells: 1 },
  moestuin: { id: "moestuin", kind: "attraction", name: "Oppervlakte-moestuin", emoji: "🥕", procedural: "moestuin", price: 40, cells: 3, botsCells: 1 },
  telraam: { id: "telraam", kind: "attraction", name: "Telraam", emoji: "🧮", procedural: "telraam", price: 40, cells: 3, botsCells: 1 },
  parkkaart: { id: "parkkaart", kind: "attraction", name: "Park-plattegrond", emoji: "🗺️", procedural: "parkkaart", price: 35, cells: 3, botsCells: 1 },
  // ── Tier B: landmark + magische poort ──
  kompas: { id: "kompas", kind: "attraction", name: "Kompas", emoji: "🧭", procedural: "kompas", price: 45, cells: 3 },
  eiffeltoren: { id: "eiffeltoren", kind: "attraction", name: "Eiffeltoren", emoji: "🗼", procedural: "eiffeltoren", price: 90, cells: 3 },
  tempel: { id: "tempel", kind: "attraction", name: "Griekse tempel", emoji: "🏛️", procedural: "tempel", price: 85, cells: 5 },
  wereldbol: { id: "wereldbol", kind: "attraction", name: "Wereldbol", emoji: "🌍", procedural: "wereldbol", price: 55, cells: 3 },
  telescoop: { id: "telescoop", kind: "attraction", name: "Sterrenwacht", emoji: "🔭", procedural: "telescoop", price: 70, cells: 3 },
  standbeeld: { id: "standbeeld", kind: "attraction", name: "Standbeeld", emoji: "🗿", procedural: "standbeeld", price: 60, cells: 3 },
  molen: { id: "molen", kind: "attraction", name: "Hollandse molen", emoji: "🌾", procedural: "molen", price: 80, cells: 3 },
  raket: { id: "raket", kind: "attraction", name: "Raket", emoji: "🚀", procedural: "raket", price: 85, cells: 3 },
  vulkaan: { id: "vulkaan", kind: "attraction", name: "Vulkaan", emoji: "🌋", procedural: "vulkaan", price: 75, cells: 5 },
  kas: { id: "kas", kind: "attraction", name: "Kas met groenten", emoji: "🥬", procedural: "kas", price: 50, cells: 3 },
  weerstation: { id: "weerstation", kind: "attraction", name: "Weerstation", emoji: "🌦️", procedural: "weerstation", price: 45, cells: 3 },
  spaarpot: { id: "spaarpot", kind: "attraction", name: "Spaarpot", emoji: "🐷", procedural: "spaarpot", price: 50, cells: 3 },
  // 🎢 Achtbaan (Mark 2 jul, naar Roblox-voorbeeld): grote baan met lift,
  // mega-drop en station — instapbaar. Groot footprint: echt een blikvanger.
  // botsCells klein: de baan is een brug op poten — alleen het midden houdt
  // tegen, zodat je (en de wandelroute) onder de achtbaan door kunt lopen
  // (Mark 20 aug: "pad loopt onder de achtbaan maar eronderdoor lopen lukt niet").
  achtbaan: { id: "achtbaan", kind: "attraction", name: "Achtbaan", emoji: "🎢", procedural: "coaster", baan: "groot", cells: 7, botsCells: 1, price: 150 },
  achtbaanKlein: { id: "achtbaanKlein", kind: "attraction", name: "Kleine achtbaan", emoji: "🎢", procedural: "coaster", baan: "klein", cells: 5, botsCells: 1, price: 80 },
  achtbaanSpiraal: { id: "achtbaanSpiraal", kind: "attraction", name: "Spiraal-achtbaan", emoji: "🌀", procedural: "coaster", baan: "spiraal", cells: 7, botsCells: 1, price: 220 },
  trein: { id: "trein", kind: "attraction", name: "Treintje", emoji: "🚂", procedural: "train", price: 65 },
  // ---- TREIN-op-rails (Mark 2026-06-27): leg losse rails neer → de trein rijdt
  // jouw route. Rails = klein, niet-blokkerend decor (snapt op het raster). Het
  // station is een gebouw met instapprijs (passieve muntjes per dag). ----
  rail: { id: "rail", kind: "decor", name: "Rails", emoji: "🛤️", procedural: "rail", cells: 1, price: 6, beloopbaar: true },
  station: { id: "station", kind: "building", name: "Treinstation", emoji: "🚉", procedural: "station", price: 80, inkomst: 8 },

  // ---- Natuur & bouwen (Kenney Nature Kit + procedureel pad). cells:1 = klein.
  // Decor levert geen muntjes op; je gebruikt het om je park in te richten. ----
  heuvel: { id: "heuvel", kind: "decor", name: "Heuveltje", emoji: "⛰️", procedural: "hill", color: "#83bd54", hillSize: 1.3, cells: 1, price: 5 },
  groteHeuvel: { id: "groteHeuvel", kind: "decor", name: "Grote heuvel", emoji: "⛰️", procedural: "hill", color: "#77ad4b", hillSize: 2.3, cells: 1, price: 8 },
  path: { id: "path", kind: "decor", name: "Pad zand", emoji: "🟫", procedural: "path", color: "#dcc48f", cells: 1, price: 3 },
  pathStone: { id: "pathStone", kind: "decor", name: "Pad steen", emoji: "⬜", procedural: "path", color: "#b9b6ab", cells: 1, price: 3 },
  pathRed: { id: "pathRed", kind: "decor", name: "Pad rood", emoji: "🟥", procedural: "path", color: "#cf6a5a", cells: 1, price: 3 },
  pathGreen: { id: "pathGreen", kind: "decor", name: "Pad groen", emoji: "🟩", procedural: "path", color: "#7bbf5a", cells: 1, price: 3 },
  pathBlue: { id: "pathBlue", kind: "decor", name: "Pad blauw", emoji: "🟦", procedural: "path", color: "#6aa3d8", cells: 1, price: 3 },
  pathDark: { id: "pathDark", kind: "decor", name: "Pad donker", emoji: "🟪", procedural: "path", color: "#7a6a8a", cells: 1, price: 3 },
  // Losse hekpanelen (procedureel, houten rail-stijl) — vul één rastervakje en
  // klik ze aan elkaar tot een kooi in elke vorm (T, L, vierkant). Draaibaar,
  // los te kopen/weghalen. Solide → de speler kan er niet doorheen.
  hekPaneel: { id: "hekPaneel", kind: "decor", name: "Recht hek", emoji: "🚧", procedural: "fencePanel", cells: 1, price: 4 },
  hekHoek: { id: "hekHoek", kind: "decor", name: "Hoek-hek", emoji: "📐", procedural: "fenceCorner", cells: 1, price: 4 },
  hekPoort: { id: "hekPoort", kind: "decor", name: "Hek-poort", emoji: "🚪", procedural: "fenceGate", cells: 1, price: 6 },
  // Legacy GLB-hekken (niet meer in de winkel, blijven bestaande parken renderen).
  fence: { id: "fence", kind: "decor", name: "Hek", emoji: "🚧", url: "/models/zoo/nature/fence_simple.glb", targetHeight: 0.85, cells: 1, price: 5 },
  fenceCorner: { id: "fenceCorner", kind: "decor", name: "Hoek-hek", emoji: "🚧", url: "/models/zoo/nature/fence_corner.glb", targetHeight: 0.85, cells: 1, price: 5 },
  fenceGate: { id: "fenceGate", kind: "decor", name: "Hek-poort", emoji: "🚪", url: "/models/zoo/nature/fence_gate.glb", targetHeight: 0.85, cells: 1, price: 6 },
  tree: { id: "tree", kind: "decor", name: "Boom", emoji: "🌳", procedural: "tree", variant: "round", cells: 1, price: 8 },
  treeOak: { id: "treeOak", kind: "decor", name: "Eik", emoji: "🌳", procedural: "tree", variant: "oak", cells: 1, price: 8 },
  treePalm: { id: "treePalm", kind: "decor", name: "Palm", emoji: "🌴", procedural: "tree", variant: "palm", cells: 1, price: 10 },
  flowerRed: { id: "flowerRed", kind: "decor", name: "Rode bloem", emoji: "🌹", url: "/models/zoo/nature/flower_redA.glb", targetHeight: 0.45, cells: 1, price: 2 },
  flowerYellow: { id: "flowerYellow", kind: "decor", name: "Gele bloem", emoji: "🌼", url: "/models/zoo/nature/flower_yellowA.glb", targetHeight: 0.45, cells: 1, price: 2 },
  flowerPurple: { id: "flowerPurple", kind: "decor", name: "Paarse bloem", emoji: "🌸", url: "/models/zoo/nature/flower_purpleA.glb", targetHeight: 0.45, cells: 1, price: 2 },
  mushroom: { id: "mushroom", kind: "decor", name: "Paddenstoel", emoji: "🍄", url: "/models/zoo/nature/mushroom_redGroup.glb", targetHeight: 0.5, cells: 1, price: 2 },
  grasplukje: { id: "grasplukje", kind: "decor", name: "Graspol", emoji: "🌾", url: "/models/zoo/nature/grass.glb", targetHeight: 0.4, cells: 1, price: 2 },
  struik: { id: "struik", kind: "decor", name: "Struik", emoji: "🌿", procedural: "bush", cells: 1, price: 3 },
  varen: { id: "varen", kind: "decor", name: "Varen", emoji: "🌱", procedural: "fern", cells: 1, price: 2 },
  boomstronk: { id: "boomstronk", kind: "decor", name: "Boomstronk", emoji: "🪵", procedural: "stump", cells: 1, price: 3 },
  // Rotsen/keien (procedureel, low-poly grijs) — passen bij de rotsige bergen.
  kei: { id: "kei", kind: "decor", name: "Rots", emoji: "🪨", procedural: "rock", variant: "single", cells: 1, price: 4 },
  keien: { id: "keien", kind: "decor", name: "Keitjes", emoji: "🪨", procedural: "rock", variant: "group", cells: 1, price: 3 },
  // 🧱 Bouwblokken (Mark 2 jul): stapelbare blokken — bouw je eigen huis, hok
  // of toren. Tik op een blok terwijl je plaatst = erbovenop stapelen.
  blokHout: { id: "blokHout", kind: "decor", name: "Houtblok", emoji: "🪵", procedural: "blok", blokKleur: "#a97e4e", cells: 1, price: 0 },
  blokSteen: { id: "blokSteen", kind: "decor", name: "Steenblok", emoji: "🪨", procedural: "blok", blokKleur: "#a3a8ae", cells: 1, price: 0 },
  blokBaksteen: { id: "blokBaksteen", kind: "decor", name: "Baksteenblok", emoji: "🧱", procedural: "blok", blokKleur: "#b5563f", cells: 1, price: 0 },
  blokZand: { id: "blokZand", kind: "decor", name: "Zandblok", emoji: "🟨", procedural: "blok", blokKleur: "#e3cf94", cells: 1, price: 0 },
  blokGras: { id: "blokGras", kind: "decor", name: "Grasblok", emoji: "🟩", procedural: "blok", blokKleur: "#7cbf5a", cells: 1, price: 0 },
  blokSneeuw: { id: "blokSneeuw", kind: "decor", name: "Sneeuwblok", emoji: "⬜", procedural: "blok", blokKleur: "#eef2f4", cells: 1, price: 0 },
  blokGlas: { id: "blokGlas", kind: "decor", name: "Glasblok", emoji: "🔷", procedural: "blok", blokKleur: "#bfe3f2", doorzichtig: true, cells: 1, price: 0 },
  blokDak: { id: "blokDak", kind: "decor", name: "Dak-punt", emoji: "🔺", procedural: "blokdak", blokKleur: "#c0463c", cells: 1, price: 0 },
  // ✨ Verdien-blokken (12-agent-review 2 jul): speciale blokken die je alleen
  // vrijspeelt door te leren — bouwen wordt zo óók een leer-beloning.
  blokGoud: { id: "blokGoud", kind: "decor", name: "Goudblok", emoji: "🟡", procedural: "blok", blokKleur: "#f2c14e", cells: 1, price: 0, verdienStappen: 60 },
  blokDiamant: { id: "blokDiamant", kind: "decor", name: "Diamantblok", emoji: "💎", procedural: "blok", blokKleur: "#7fe3e0", cells: 1, price: 0, verdienStappen: 100 },
  // ✨ Fabelwezens (Mark 2 jul): niet te koop — alleen te SPAREN door te leren
  // (mijlpalen in unlocks.js). Draak/feniks vliegen echt rond, eenhoorn en elf
  // wandelen door je park.
  fabelElf: { id: "fabelElf", kind: "fabel", name: "Elf", emoji: "🧝", procedural: "fabel", fabelSoort: "elf", cells: 1, price: 0 },
  fabelEenhoorn: { id: "fabelEenhoorn", kind: "fabel", name: "Eenhoorn", emoji: "🦄", procedural: "fabel", fabelSoort: "eenhoorn", cells: 1, price: 0 },
  fabelFeniks: { id: "fabelFeniks", kind: "fabel", name: "Feniks", emoji: "🔥", procedural: "fabel", fabelSoort: "fenix", cells: 1, price: 0 },
  fabelDraak: { id: "fabelDraak", kind: "fabel", name: "Draak", emoji: "🐉", procedural: "fabel", fabelSoort: "draak", cells: 1, price: 0 },
};

// Is dit een stapelbaar bouwblok?
export function isBlok(id) {
  const p = ZOO_ASSETS[id]?.procedural || "";
  return p === "blok" || p === "blokdak";
}

// Winkel-categorieën (volgorde = winkel-volgorde).
// De GROTE dino's (triceratops, stegosaurus, parasaurolophus, trex, apatosaurus)
// staan bewust NIET in de koop-winkel: die "speel je vrij" door te leren — zie
// VRIJSPEEL_DIEREN in unlocks.js (Mark 2026-07-01: grootste dino's achterhouden).
// De velociraptor blijft koopbaar als intro-dino zodat de dino-plek niet leeg is.
export const PLAATSBARE_DIEREN = ["fox", "husky", "shibaInu", "pug", "deer", "alpaca", "cow", "donkey", "pig", "sheep", "wolf", "stag", "horse", "zebra", "velociraptor", "fishClown", "fishBlue", "fishYellow", "mantaray", "dolphin", "shark", "whale"];
export const PLAATSBARE_BOUWWERKEN = ["station", "donatiebox", "bankje", "prullenbak", "patatkraam", "drankkraam", "ijscokraam", "popcornkraam", "houseA", "houseB", "houseC", "houseD", "houseE", "houseF", "houseG", "houseH", "stallRed", "stallGreen", "cart", "fountain"];
export const PLAATSBARE_ATTRACTIES = ["trein", "rail", "carousel", "ferris", "swing", "piramide", "kubus", "kegel", "cilinder", "bol", "halvebol", "achtbaanKlein", "achtbaan", "achtbaanSpiraal"];
// 🎡 Leerplein-objecten (Mark 16-17 aug) — eigen winkel-categorie zodat kinderen
// de leerobjecten los van de kermis-attracties vinden. Tier A eerst, dan de
// landmark-poorten. Elk linkt (via parkLeermomenten) naar een bestaand leerpad.
export const PLAATSBARE_LEERPLEIN = ["klok", "weegschaal", "breukentaart", "moestuin", "telraam", "parkkaart", "kompas", "eiffeltoren", "tempel", "wereldbol", "telescoop", "standbeeld", "molen", "raket", "vulkaan", "kas", "weerstation", "spaarpot"];
export const PLAATSBARE_HEKKEN = ["hekPaneel", "hekHoek", "hekPoort"];
export const PLAATSBARE_BLOKKEN = ["blokHout", "blokSteen", "blokBaksteen", "blokZand", "blokGras", "blokSneeuw", "blokGlas", "blokDak", "blokGoud", "blokDiamant"];
export const PLAATSBARE_NATUUR = ["heuvel", "groteHeuvel", "kei", "keien", "path", "pathStone", "pathRed", "pathGreen", "pathBlue", "pathDark", "tree", "treeOak", "treePalm", "struik", "varen", "boomstronk", "grasplukje", "flowerRed", "flowerYellow", "flowerPurple", "mushroom"];

// Footprint (aantal vakjes) van een item; klein decor = 1, dieren lopen vrij
// rond → ook 1 vakje (je bouwt zelf een hek eromheen), rest = 3.
export function cellsVan(id) {
  const a = ZOO_ASSETS[id];
  if (!a) return 3;
  if (a.cells) return a.cells;
  if (a.kind === "animal") return 1;
  return 3;
}

// Botsing-footprint = waar de speler écht tegenaan loopt. Meestal = cellsVan,
// maar de grote leerobjecten reserveren bij PLAATSING veel ruimte (cellsVan,
// zodat ze elkaar niet overlappen) terwijl hun échte body veel kleiner is. Dan
// zou de speler op een enorm onzichtbaar vlak botsen (Mark 17 aug: "alles voelt
// krap, ik loop tegen de bal"). `botsCells` maakt de botsing klein zodat je er
// dichtbij kunt komen om de som op de vlakken te lezen. Placement blijft ruim.
export function botsCellsVan(id) {
  const a = ZOO_ASSETS[id];
  if (a && a.botsCells != null) return a.botsCells;
  return cellsVan(id);
}

export function getAsset(id) {
  return ZOO_ASSETS[id] || null;
}

// 🔺🧊 Manipuleerbare leerobjecten (Mark 16-17 aug): vormen die je met +/- groter
// en kleiner maakt (de piramide-mechaniek, nu ook de kleuren-kubus). Config per
// asset: maat-bereik + het leerpad achter de "inhoud oefenen"-knop.
export function isManipuleerbaar(id) {
  return ZOO_ASSETS[id]?.maatMin != null;
}
export function maatConfig(id) {
  const a = ZOO_ASSETS[id];
  if (!a || a.maatMin == null) return null;
  return { min: a.maatMin, max: a.maatMax, standaard: a.maatDefault ?? a.maatMin, leerpad: a.maatLeerpad };
}
// 🥇 Goud-doel per vorm (Mark 17 aug): beheers een klein stukje van het gekoppelde
// inhoud-pad → de vorm krijgt goud. Elke vorm een eigen (oplopende) drempel, zodat
// je park stukje-bij-beetje gouder wordt naarmate je meer leert. Aantal telt in
// voltooide leer-stappen van `pad` (zie unlocks.telPadStappen).
export function goudConfig(id) {
  const a = ZOO_ASSETS[id];
  if (!a || !a.goudPad) return null;
  return { pad: a.goudPad, drempel: a.goudDrempel || 3 };
}

// Kiesbare speler-karakters (Quaternius "Animated Men/Women", CC0, gekleurde
// materialen + loop-animatie). Niet in de winkel — kies je eigen poppetje.
export const CHARACTERS = [
  // 🧱 Blok-poppetjes (Mark 2 jul, blok-wereld): 100% procedureel — passen bij
  // de Minecraft-look. url "blocky:<id>" → CharacterModel rendert BlockyCharacter.
  { id: "blokSem", name: "Sem (blok)", emoji: "🟥", url: "blocky:blokSem", blocky: { huid: "#f0c8a0", haar: "#1c1c1e", shirt: "#e2574c", broek: "#26292e", schoen: "#17181a", pet: true } },
  { id: "blokMila", name: "Mila (blok)", emoji: "🟪", url: "blocky:blokMila", blocky: { huid: "#f2d2b0", haar: "#7a4a20", shirt: "#b06ad8", broek: "#37474f", schoen: "#3a2a25" } },
  { id: "blokJoep", name: "Joep (blok)", emoji: "🟩", url: "blocky:blokJoep", blocky: { huid: "#e8bd93", haar: "#4a3320", shirt: "#3ba55d", broek: "#35485c", schoen: "#26292c" } },
  { id: "blokNora", name: "Nora (blok)", emoji: "🟨", url: "blocky:blokNora", blocky: { huid: "#8d5a3a", haar: "#101418", shirt: "#f2b134", broek: "#3f3a55", schoen: "#2a2a2a" } },
  { id: "blokKai", name: "Kai (blok)", emoji: "🟦", url: "blocky:blokKai", blocky: { huid: "#c98d5f", haar: "#26160a", shirt: "#4a90d9", broek: "#2e3d33", schoen: "#1f2022" } },
  { id: "blokLuna", name: "Luna (blok)", emoji: "🩵", url: "blocky:blokLuna", blocky: { huid: "#f5d9c4", haar: "#b8452c", shirt: "#3cb5a8", broek: "#57424e", schoen: "#332f2c" } },
  // Extra hoofdpersonen (Mark 2 jul): meer meiden + jongens zodat elk kind
  // een poppetje vindt dat bij zich past.
  { id: "blokFleur", name: "Fleur (blok)", emoji: "🌸", url: "blocky:blokFleur", blocky: { huid: "#f2d2b0", haar: "#e8b830", shirt: "#f06292", broek: "#4a3f6b", schoen: "#2a2a2e" } },
  { id: "blokZoe", name: "Zoë (blok)", emoji: "🐚", url: "blocky:blokZoe", blocky: { huid: "#b07248", haar: "#3a2415", shirt: "#26c6da", broek: "#37474f", schoen: "#1f2022", pet: true } },
  { id: "blokFinn", name: "Finn (blok)", emoji: "🦖", url: "blocky:blokFinn", blocky: { huid: "#e8bd93", haar: "#c2452d", shirt: "#66bb6a", broek: "#263238", schoen: "#17181a" } },
  { id: "blokTess", name: "Tess (blok)", emoji: "🍀", url: "blocky:blokTess", blocky: { huid: "#f0c8a0", haar: "#6a4228", shirt: "#9575cd", broek: "#2e4638", schoen: "#3a2a25" } },
  // Held (Mark 1 jul): eigen figuur uit een tekening → 3D via Stable Fast 3D,
  // gerigd via Mixamo (Walk + Idle). Blijft — Mark's eigen creatie.
  { id: "heldMj", name: "Held", emoji: "🎩", url: "/models/zoo/people/held-mj.glb" },
  // De Quaternius "echte" mens-modellen (girl1-4/boy1-4) zijn 2 jul verwijderd
  // (Mark: alles blok-stijl). Oude keuzes vallen automatisch terug op blok-Sem.
];
export const CHARACTER_BY_ID = Object.fromEntries(CHARACTERS.map((c) => [c.id, c]));
// Blok-Sem (rood shirt + pet, knipoog naar de held) = nieuwe standaard in de
// blok-wereld; de held + Quaternius-poppetjes blijven gewoon kiesbaar.
export const DEFAULT_AVATAR = "blokSem";
export const BLOCKY_BY_ID = Object.fromEntries(CHARACTERS.filter((c) => c.blocky).map((c) => [c.id, c.blocky]));

export function allModelUrls() {
  return [...new Set(Object.values(ZOO_ASSETS).map((a) => a.url))];
}

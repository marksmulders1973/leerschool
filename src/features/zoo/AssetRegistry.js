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
  fountain: { id: "fountain", kind: "building", name: "Fontein", emoji: "⛲", url: "/models/zoo/build/fountain.glb", targetHeight: 1.4, price: 35 },
  houseA: { id: "houseA", kind: "building", name: "Huisje", emoji: "🏠", url: "/models/zoo/build/house-a.glb", targetHeight: 3.4, price: 60 },
  houseE: { id: "houseE", kind: "building", name: "Villa", emoji: "🏡", url: "/models/zoo/build/house-e.glb", targetHeight: 3.6, price: 75 },
  houseH: { id: "houseH", kind: "building", name: "Stadshuis", emoji: "🏘️", url: "/models/zoo/build/house-h.glb", targetHeight: 3.8, price: 75 },

  // ---- Attractie (zelf-gebouwd, procedureel) ----
  carousel: { id: "carousel", kind: "attraction", name: "Draaimolen", emoji: "🎠", procedural: "carousel", price: 60 },

  // ---- Natuur & bouwen (Kenney Nature Kit + procedureel pad). cells:1 = klein.
  // Decor levert geen muntjes op; je gebruikt het om je park in te richten. ----
  path: { id: "path", kind: "decor", name: "Pad", emoji: "🟫", procedural: "path", cells: 1, price: 3 },
  fence: { id: "fence", kind: "decor", name: "Hek", emoji: "🚧", url: "/models/zoo/nature/fence_simple.glb", targetHeight: 0.85, cells: 1, price: 5 },
  fenceCorner: { id: "fenceCorner", kind: "decor", name: "Hoek-hek", emoji: "🚧", url: "/models/zoo/nature/fence_corner.glb", targetHeight: 0.85, cells: 1, price: 5 },
  fenceGate: { id: "fenceGate", kind: "decor", name: "Hek-poort", emoji: "🚪", url: "/models/zoo/nature/fence_gate.glb", targetHeight: 0.85, cells: 1, price: 6 },
  tree: { id: "tree", kind: "decor", name: "Boom", emoji: "🌳", url: "/models/zoo/nature/tree_default.glb", targetHeight: 2.8, cells: 1, price: 8 },
  treeOak: { id: "treeOak", kind: "decor", name: "Eik", emoji: "🌳", url: "/models/zoo/nature/tree_oak.glb", targetHeight: 3.0, cells: 1, price: 8 },
  treePalm: { id: "treePalm", kind: "decor", name: "Palm", emoji: "🌴", url: "/models/zoo/nature/tree_palm.glb", targetHeight: 3.2, cells: 1, price: 10 },
  flowerRed: { id: "flowerRed", kind: "decor", name: "Rode bloem", emoji: "🌹", url: "/models/zoo/nature/flower_redA.glb", targetHeight: 0.45, cells: 1, price: 2 },
  flowerYellow: { id: "flowerYellow", kind: "decor", name: "Gele bloem", emoji: "🌼", url: "/models/zoo/nature/flower_yellowA.glb", targetHeight: 0.45, cells: 1, price: 2 },
  flowerPurple: { id: "flowerPurple", kind: "decor", name: "Paarse bloem", emoji: "🌸", url: "/models/zoo/nature/flower_purpleA.glb", targetHeight: 0.45, cells: 1, price: 2 },
  mushroom: { id: "mushroom", kind: "decor", name: "Paddenstoel", emoji: "🍄", url: "/models/zoo/nature/mushroom_redGroup.glb", targetHeight: 0.5, cells: 1, price: 2 },
};

// Winkel-categorieën (volgorde = winkel-volgorde).
export const PLAATSBARE_DIEREN = ["fox", "husky", "shibaInu", "deer", "alpaca", "cow", "donkey", "wolf", "stag", "horse", "velociraptor", "triceratops", "stegosaurus", "parasaurolophus", "trex", "apatosaurus"];
export const PLAATSBARE_BOUWWERKEN = ["houseA", "houseE", "houseH", "stallRed", "stallGreen", "cart", "fountain"];
export const PLAATSBARE_ATTRACTIES = ["carousel"];
export const PLAATSBARE_NATUUR = ["path", "fence", "fenceCorner", "fenceGate", "tree", "treeOak", "treePalm", "flowerRed", "flowerYellow", "flowerPurple", "mushroom"];

// Footprint (aantal vakjes) van een item; klein decor = 1, rest = 3.
export function cellsVan(id) {
  return ZOO_ASSETS[id]?.cells || 3;
}

export function getAsset(id) {
  return ZOO_ASSETS[id] || null;
}

export function allModelUrls() {
  return [...new Set(Object.values(ZOO_ASSETS).map((a) => a.url))];
}

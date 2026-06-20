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

  // ---- Natuur (Kenney Nature Kit) ----
  tree: { id: "tree", kind: "nature", name: "Boom", url: "/models/zoo/nature/tree_default.glb", targetHeight: 2.8 },
  treeOak: { id: "treeOak", kind: "nature", name: "Eik", url: "/models/zoo/nature/tree_oak.glb", targetHeight: 3.0 },
  treePalm: { id: "treePalm", kind: "nature", name: "Palm", url: "/models/zoo/nature/tree_palm.glb", targetHeight: 3.2 },
  flowerRed: { id: "flowerRed", kind: "nature", name: "Bloem", url: "/models/zoo/nature/flower_redA.glb", targetHeight: 0.45 },
  flowerYellow: { id: "flowerYellow", kind: "nature", name: "Bloem", url: "/models/zoo/nature/flower_yellowA.glb", targetHeight: 0.45 },
  flowerPurple: { id: "flowerPurple", kind: "nature", name: "Bloem", url: "/models/zoo/nature/flower_purpleA.glb", targetHeight: 0.45 },
  mushroom: { id: "mushroom", kind: "nature", name: "Paddenstoel", url: "/models/zoo/nature/mushroom_redGroup.glb", targetHeight: 0.5 },
};

// Dieren die de speler kan kopen/plaatsen (volgorde = winkel-volgorde).
export const PLAATSBARE_DIEREN = ["fox", "husky", "shibaInu", "deer", "alpaca", "cow", "donkey", "wolf", "stag", "horse"];

export function getAsset(id) {
  return ZOO_ASSETS[id] || null;
}

export function allModelUrls() {
  return [...new Set(Object.values(ZOO_ASSETS).map((a) => a.url))];
}

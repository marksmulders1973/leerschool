// AssetRegistry — centrale lijst van alle 3D-modellen in Zookwartier.
//
// Eén plek die zegt WELKE modellen bestaan en hoe ze in de wereld horen
// (schaal-normalisatie, op-de-grond-zetten, welke animatie standaard speelt).
// De scene/loader leest hieruit; nergens anders staan harde model-paden.
//
// Modellen zijn ingeladen glTF/GLB-bestanden (geen BoxGeometry). Bron + licentie
// staan in public/models/zoo/CREDITS.md. Stap 1 bewijst de pijplijn met één dier;
// later komen Kenney-packs (dieren + Nature Kit + Carnival/attracties) erbij.

export const ASSET_KINDS = {
  ANIMAL: "animal",
  FENCE: "fence",
  BUILDING: "building",
  ATTRACTION: "attraction",
  DECOR: "decor",
};

// targetHeight = gewenste hoogte in wereld-units (1 unit ≈ 1 meter), zodat
// modellen uit verschillende bronnen tóch op één schaal in de zoo staan.
export const ZOO_ASSETS = {
  fox: {
    id: "fox",
    kind: ASSET_KINDS.ANIMAL,
    name: "Vos",
    url: "/models/zoo/fox/Fox.glb",
    targetHeight: 1.1,
    // Terugvalkleur als de textuur onverhoopt niet laadt (voorkomt "witte vos").
    fallbackColor: "#e08a3c",
    // De Khronos-vos heeft 3 animaties: "Survey", "Walk", "Run".
    defaultClip: "Survey",
    credit: "Fox by PixelMannen (CC0) + rig/animatie tomkranis (CC-BY 4.0)",
  },
};

export function getAsset(id) {
  return ZOO_ASSETS[id] || null;
}

// Alle unieke model-URLs — handig om te preloaden (useGLTF.preload).
export function allModelUrls() {
  return [...new Set(Object.values(ZOO_ASSETS).map((a) => a.url))];
}

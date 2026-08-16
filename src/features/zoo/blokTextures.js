// blokTextures.js — procedurele 16×16 pixel-textures voor de blok-wereld
// (Minecraft-look, idee van Brian's "Blokwereld ∞"): elk canvas-textuurtje
// wordt met NearestFilter scherp-pixelig op de kubussen geplakt. Twee smaken:
//  1. GEKLEURDE textures per bouwblok-soort (gras/steen/baksteen/...).
//  2. GRIJSWAARDE-maps die met een kleur vermenigvuldigen (terrein-verf en
//     huis-muren houden zo hun eigen kleur, maar krijgen pixel-structuur).
import { CanvasTexture, NearestFilter, SRGBColorSpace, MeshStandardMaterial } from "three";

function mkTex(draw, size = 16) {
  const c = document.createElement("canvas");
  c.width = c.height = size;
  draw(c.getContext("2d"), size);
  const t = new CanvasTexture(c);
  t.magFilter = NearestFilter;
  t.minFilter = NearestFilter;
  t.colorSpace = SRGBColorSpace;
  return t;
}

// Deterministische "ruis" (geen Math.random — zelfde look elke sessie/frame).
function rnd(seedRef) {
  seedRef.s = (seedRef.s * 1103515245 + 12345) & 0x7fffffff;
  return seedRef.s / 0x7fffffff;
}
function noiseFill(ctx, shades, size = 16, seed = 7) {
  const r = { s: seed };
  for (let y = 0; y < size; y++)
    for (let x = 0; x < size; x++) {
      ctx.fillStyle = shades[(rnd(r) * shades.length) | 0];
      ctx.fillRect(x, y, 1, 1);
    }
}

// ---------- gekleurde textures per bouwblok-soort ----------
function grasTop() {
  return mkTex((c) => {
    noiseFill(c, ["#6fb054", "#7cbf5a", "#74b857", "#68a94e"]);
    const r = { s: 3 };
    for (let i = 0; i < 10; i++) c.fillRect((rnd(r) * 16) | 0, (rnd(r) * 16) | 0, 1, 1, (c.fillStyle = "#8ecf6c"));
  });
}
function aarde() {
  return mkTex((c) => noiseFill(c, ["#8a6a44", "#7d5f3c", "#93714b", "#856541"], 16, 11));
}
function grasZijkant() {
  return mkTex((c) => {
    noiseFill(c, ["#8a6a44", "#7d5f3c", "#93714b"], 16, 5);
    const r = { s: 9 };
    for (let x = 0; x < 16; x++) {
      const h = 2 + ((rnd(r) * 3) | 0);
      for (let y = 0; y < h; y++) { c.fillStyle = ["#7cbf5a", "#6fb054"][(rnd(r) * 2) | 0]; c.fillRect(x, y, 1, 1); }
    }
  });
}
function steen() {
  return mkTex((c) => {
    noiseFill(c, ["#a3a8ae", "#999ea5", "#adb2b8", "#8f949b"], 16, 13);
    const r = { s: 4 };
    c.fillStyle = "#83888f";
    for (let i = 0; i < 7; i++) c.fillRect((rnd(r) * 16) | 0, (rnd(r) * 16) | 0, 2, 1);
  });
}
function baksteen() {
  return mkTex((c) => {
    noiseFill(c, ["#b5563f", "#a84e39", "#bd5e46"], 16, 17);
    c.fillStyle = "#cabbb0";
    for (let y = 0; y < 16; y += 4) {
      const off = (y / 4) % 2 ? 2 : 6;
      c.fillRect(0, y, 16, 1);
      for (let x = off; x < 16; x += 8) c.fillRect(x, y, 1, 4);
    }
  });
}
function zand() {
  return mkTex((c) => noiseFill(c, ["#e3cf94", "#dbc688", "#ecd9a2", "#e0cb8e"], 16, 19));
}
function sneeuw() {
  return mkTex((c) => noiseFill(c, ["#eef2f4", "#e4ebf0", "#f8fbfd", "#eaf0f3"], 16, 23));
}
function houtZijkant() {
  return mkTex((c) => {
    const r = { s: 29 };
    for (let x = 0; x < 16; x++) {
      const base = x % 5 === 0 ? "#8f6a3e" : "#a97e4e";
      for (let y = 0; y < 16; y++) { c.fillStyle = rnd(r) < 0.2 ? "#b78a58" : base; c.fillRect(x, y, 1, 1); }
    }
  });
}
function houtTop() {
  return mkTex((c) => {
    noiseFill(c, ["#c09a62", "#b48d56"], 16, 31);
    c.strokeStyle = "#8f6a3e";
    for (let ring = 6; ring > 0; ring -= 2) { c.beginPath(); c.arc(8, 8, ring, 0, 7); c.stroke(); }
  });
}
function goud() {
  return mkTex((c) => {
    noiseFill(c, ["#f2c14e", "#e9b644", "#f8cc60"], 16, 37);
    c.fillStyle = "#ffe08a"; c.fillRect(2, 2, 3, 3); c.fillRect(10, 9, 3, 3);
    c.fillStyle = "#d9a63a"; c.fillRect(0, 0, 16, 1); c.fillRect(0, 15, 16, 1); c.fillRect(0, 0, 1, 16); c.fillRect(15, 0, 1, 16);
  });
}
function diamant() {
  return mkTex((c) => {
    noiseFill(c, ["#7fe3e0", "#74d8d5", "#8ceeeb"], 16, 41);
    c.fillStyle = "#b6f7f4"; c.fillRect(3, 3, 3, 3); c.fillRect(9, 10, 3, 3);
    c.fillStyle = "#5fc9c6"; c.fillRect(0, 0, 16, 1); c.fillRect(0, 15, 16, 1); c.fillRect(0, 0, 1, 16); c.fillRect(15, 0, 1, 16);
  });
}
function glas() {
  return mkTex((c) => {
    c.clearRect(0, 0, 16, 16);
    c.strokeStyle = "rgba(215,240,250,.95)";
    c.strokeRect(0.5, 0.5, 15, 15);
    c.fillStyle = "rgba(255,255,255,.45)";
    c.fillRect(3, 3, 2, 2); c.fillRect(5, 5, 1, 1);
  });
}

// ---------- grijswaarde-maps (vermenigvuldigen met een kleur) ----------
function grijsRuis(shades, seed) {
  return mkTex((c) => noiseFill(c, shades, 16, seed));
}
// Terrein-bovenkant: iets meer contrast + een paar donkere sprietjes/vlekjes,
// zodat gras (na multiply met groen) blad-korrel krijgt i.p.v. plastic-vlak.
// Blijft grijswaarde/generiek → zand/steen/sneeuw houden hun eigen kleur.
function terreinTopMap() {
  return mkTex((c) => {
    noiseFill(c, ["#ffffff", "#f0f0f0", "#e6e6e6", "#f8f8f8", "#ededed", "#dedede"], 16, 61);
    const r = { s: 71 };
    for (let i = 0; i < 14; i++) {
      c.fillStyle = ["#cfcfcf", "#d6d6d6"][(rnd(r) * 2) | 0];
      c.fillRect((rnd(r) * 16) | 0, (rnd(r) * 16) | 0, 1, 1 + ((rnd(r) * 2) | 0));
    }
  });
}
// 🌿 Pixel-grasspriet (transparante achtergrond, alphaTest): een paar dunne
// halmpjes, donker bij de wortel → lichter aan de top. NearestFilter houdt 'm
// scherp-pixelig, in stijl met de blok-wereld.
function grasSprietMap() {
  return mkTex((c, size) => {
    c.clearRect(0, 0, size, size);
    const r = { s: 91 };
    const greens = ["#4e9a3d", "#5fae48", "#72c157", "#86cf6a"];
    const blades = 5 + ((rnd(r) * 3) | 0);
    for (let b = 0; b < blades; b++) {
      const x0 = 2 + ((rnd(r) * (size - 4)) | 0);
      const h = (size * (0.5 + rnd(r) * 0.45)) | 0;
      const lean = (rnd(r) - 0.5) * 4;
      for (let y = 0; y < h; y++) {
        const t = y / h; // 0 wortel → 1 top
        const px = Math.round(x0 + lean * t);
        const yy = size - 1 - y;
        if (px >= 0 && px < size) { c.fillStyle = greens[Math.min(greens.length - 1, (t * greens.length) | 0)]; c.fillRect(px, yy, 1, 1); }
        if (t < 0.35 && px - 1 >= 0) c.fillRect(px - 1, yy, 1, 1); // dikkere voet
      }
    }
  }, 16);
}
export const grasSprietTex = () => get("grasSpriet", grasSprietMap);
// Terrein-kolom: horizontale "aardlagen" — blijven banden, ook als de kolom
// in de hoogte wordt uitgerekt (scale.y per instance).
function strataMap() {
  return mkTex((c) => {
    const r = { s: 43 };
    for (let y = 0; y < 16; y++) {
      const band = 0.86 + rnd(r) * 0.14;
      for (let x = 0; x < 16; x++) {
        const v = Math.round(255 * Math.min(1, band + (rnd(r) - 0.5) * 0.08));
        c.fillStyle = `rgb(${v},${v},${v})`;
        c.fillRect(x, y, 1, 1);
      }
    }
  });
}
// Huis-muur: grote "blok-voegen" (grid van 8px) zodat de muur uit blokken
// lijkt te bestaan; kleurvariant + verf blijven werken (multiply).
function muurMapMk() {
  return mkTex((c, size) => {
    noiseFill(c, ["#ffffff", "#f4f4f4", "#ececec"], size, 47);
    c.fillStyle = "#d2d2d2";
    for (let y = 0; y < size; y += 8) {
      c.fillRect(0, y, size, 1);
      const off = (y / 8) % 2 ? 4 : 12;
      for (let x = off; x < size; x += 16) c.fillRect(x, y, 1, 8);
    }
  }, 32);
}
// Dak: horizontale pannen-rijen.
function dakMapMk() {
  return mkTex((c, size) => {
    noiseFill(c, ["#ffffff", "#f1f1f1", "#e8e8e8"], size, 53);
    c.fillStyle = "#cfcfcf";
    for (let y = 3; y < size; y += 4) c.fillRect(0, y, size, 1);
  }, 32);
}
// Deur/planken: verticale planken met naden.
function plankMapMk() {
  return mkTex((c) => {
    noiseFill(c, ["#ffffff", "#f2f2f2", "#eaeaea"], 16, 59);
    c.fillStyle = "#d6d6d6";
    for (let x = 0; x < 16; x += 4) c.fillRect(x, 0, 1, 16);
  });
}

// ---------- lazy cache — textures pas maken zodra de 3D-wereld ze vraagt ----------
const cache = {};
function get(name, maker) {
  if (!cache[name]) cache[name] = maker();
  return cache[name];
}

// Grijswaarde-maps voor terrein, buitenwereld en huizen (multiply met kleur).
export const grijsMaps = {
  terreinTop: () => get("terreinTop", terreinTopMap),
  terreinKolom: () => get("terreinKolom", strataMap),
  buiten: () => get("buiten", () => grijsRuis(["#ffffff", "#f5f5f5", "#ededed"], 67)),
  muur: () => get("muur", muurMapMk),
  dak: () => get("dak", dakMapMk),
  plank: () => get("plank", plankMapMk),
};

// Materiaal (of 6-vlakken-array) per bouwblok-soort, gecachet.
// Volgorde box-vlakken: +x, -x, +y (boven), -y (onder), +z, -z.
export function getBlokMaterial(a) {
  return get(`mat_${a.id}`, () => {
    const std = (map, opts = {}) => new MeshStandardMaterial({ map, roughness: 1, metalness: 0, ...opts });
    switch (a.id) {
      case "blokGras": {
        const zij = std(grasZijkant());
        return [zij, zij, std(grasTop()), std(aarde()), zij, zij];
      }
      case "blokHout": {
        const zij = std(houtZijkant());
        const top = std(houtTop());
        return [zij, zij, top, top, zij, zij];
      }
      case "blokSteen": return std(steen());
      case "blokBaksteen": return std(baksteen());
      case "blokZand": return std(zand());
      case "blokSneeuw": return std(sneeuw());
      case "blokGoud": return std(goud());
      case "blokDiamant": return std(diamant());
      case "blokGlas": return std(glas(), { transparent: true, opacity: 0.55, roughness: 0.3 });
      default:
        // Onbekende soort: pixel-ruis in de eigen blokKleur.
        return std(grijsMaps.buiten(), { color: a.blokKleur || "#a97e4e" });
    }
  });
}

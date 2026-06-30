// unlocks — vrijspeel-dieren: zeldzame dieren die je NIET kunt kopen maar
// VERDIENT door een leerpad 100% af te ronden. Het dier verwijst thematisch
// terug naar de stof (spaarvarken ← geld/sparen), zodat het park het leren
// VOEDT i.p.v. opeet (zie STOPLIST §2-guardrails). Bezit staat in
// owned.unlocked (vrij jsonb → geen Supabase-migratie nodig).
//
// "100% af" lezen we uit learn_progress (1 rij per voltooide stap, sleutel
// player_name = (userName||"Speler")). Het aantal stappen per pad komt uit het
// build-time manifest, zodat we het zware leerpad-bundle niet hoeven te laden.
import supabase from "../../supabase";
import pathManifest from "../../learnPaths/pathManifest.generated.json";

export const VRIJSPEEL_DIEREN = [
  {
    assetId: "spaarvarken",
    emoji: "🐷",
    naam: "Spaarvarken",
    pad: "financiele-vorming-po",
    padTitel: "Geldwijsheid + sparen",
    waarom: "Je hebt het hele spaar-leerpad uitgespeeld — knap! Dit spaarvarken kun je nergens kopen: je verdient 'm alleen door te leren.",
  },
  // ── GROTE DINO'S (Mark 2026-07-01): de grootste dino's hou je achter als
  // beloning — je "speelt ze vrij" door te leren. Niet aan één pad gekoppeld
  // maar aan een mijlpaal: hoe meer leer-stappen je af hebt, hoe groter de dino
  // die je ontgrendelt. `stappen` = aantal unieke voltooide leer-stappen nodig.
  { assetId: "triceratops",    emoji: "🦕", naam: "Triceratops",   stappen: 10, waarom: "Je hebt al 10 leer-stappen af — de Triceratops is van jou! Deze dino kun je niet kopen, alleen vrij spelen door te leren." },
  { assetId: "stegosaurus",    emoji: "🦕", naam: "Stegosaurus",   stappen: 18, waarom: "18 leer-stappen! De Stegosaurus stampt je park binnen. Vrijgespeeld door te leren — niet te koop." },
  { assetId: "parasaurolophus", emoji: "🦕", naam: "Parasaurus",   stappen: 28, waarom: "28 leer-stappen — knap volgehouden! De Parasaurus is je beloning. Alleen te verdienen door te leren." },
  { assetId: "trex",           emoji: "🦖", naam: "T-Rex",         stappen: 40, waarom: "40 leer-stappen! De machtige T-Rex brult in jouw dierentuin. De koning van de vrijspeel-dino's." },
  { assetId: "apatosaurus",    emoji: "🦕", naam: "Apatosaurus",   stappen: 55, waarom: "55 leer-stappen — wauw! De gigantische Apatosaurus is de allergrootste, alleen voor échte doorzetters." },
];

// De grote dino's, oplopend op mijlpaal — gebruikt voor de winkel-volgorde + de
// "volgende dino"-hint. (Spaarvarken hangt aan een pad, niet aan een mijlpaal.)
export const DINO_MIJLPALEN = VRIJSPEEL_DIEREN
  .filter((v) => typeof v.stappen === "number")
  .sort((a, b) => a.stappen - b.stappen);

export function vrijspeelDier(assetId) {
  return VRIJSPEEL_DIEREN.find((v) => v.assetId === assetId) || null;
}

// Totaal aantal unieke voltooide leer-stappen — de "munt" voor mijlpaal-dieren.
// Zelfde sleutel/aanpak als buddies.telGeleerdeStappen.
async function telGeleerdeStappen(playerName) {
  if (!playerName) return 0;
  try {
    const { data, error } = await supabase
      .from("learn_progress")
      .select("learn_path_id, step_idx")
      .eq("player_name", playerName);
    if (error || !Array.isArray(data)) return 0;
    return new Set(data.map((r) => `${r.learn_path_id}:${r.step_idx}`)).size;
  } catch {
    return 0;
  }
}

function stappenVanPad(padId) {
  const p = pathManifest.find((x) => x.id === padId);
  return p?.stepCount || 0;
}

// Heeft de speler dit pad 100% afgerond? (unieke voltooide stappen ≥ totaal)
async function padVoltooid(playerName, padId) {
  const totaal = stappenVanPad(padId);
  if (!playerName || !totaal) return false;
  try {
    const { data, error } = await supabase
      .from("learn_progress")
      .select("step_idx")
      .eq("player_name", playerName)
      .eq("learn_path_id", padId);
    if (error || !Array.isArray(data)) return false;
    return new Set(data.map((r) => r.step_idx)).size >= totaal;
  } catch {
    return false;
  }
}

// Welke vrijspeel-dieren heeft de speler NU verdiend maar nog niet in bezit?
// Geeft een lijst assetId's terug. Twee soorten ontgrendeling:
//  - pad-dieren (spaarvarken): één leerpad 100% af.
//  - mijlpaal-dieren (grote dino's): genoeg totale leer-stappen gehaald.
export async function nieuweVrijspeelDieren(playerName, alGehad = []) {
  const had = new Set(alGehad || []);
  const nieuw = [];
  // Stappen-totaal één keer ophalen als er een mijlpaal-dier nog te halen is.
  const heeftMijlpaalOpen = VRIJSPEEL_DIEREN.some((v) => typeof v.stappen === "number" && !had.has(v.assetId));
  const stappen = heeftMijlpaalOpen ? await telGeleerdeStappen(playerName) : 0;
  for (const v of VRIJSPEEL_DIEREN) {
    if (had.has(v.assetId)) continue;
    if (typeof v.stappen === "number") {
      if (stappen >= v.stappen) nieuw.push(v.assetId);
    } else if (v.pad) {
      // eslint-disable-next-line no-await-in-loop
      if (await padVoltooid(playerName, v.pad)) nieuw.push(v.assetId);
    }
  }
  return nieuw;
}

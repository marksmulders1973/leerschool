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
];

export function vrijspeelDier(assetId) {
  return VRIJSPEEL_DIEREN.find((v) => v.assetId === assetId) || null;
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
// Geeft een lijst assetId's terug (meestal leeg of één).
export async function nieuweVrijspeelDieren(playerName, alGehad = []) {
  const had = new Set(alGehad || []);
  const nieuw = [];
  for (const v of VRIJSPEEL_DIEREN) {
    if (had.has(v.assetId)) continue;
    // eslint-disable-next-line no-await-in-loop
    if (await padVoltooid(playerName, v.pad)) nieuw.push(v.assetId);
  }
  return nieuw;
}

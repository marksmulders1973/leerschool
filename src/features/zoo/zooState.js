// zooState — laden/opslaan van het park van dit kind in Supabase (tabel
// zoo_state, RLS: alleen je eigen rij). layout = geplaatste objecten,
// owned = bezit dat nog niet geplaatst is (voor de winkel in stap 4).
import supabase from "../../supabase";
import { START_COINS } from "./zooEconomy";

// Beginindeling: twee ruime starter-verblijven (hert + alpaca) zodat een nieuw
// park nooit leeg is. price 0 → bij weghalen geen "gratis" muntjes. Het vaste
// decor (draaimolen, paden, poppetje, bomen) staat daarnaast altijd.
export const STARTER_LAYOUT = [
  { assetId: "carousel", cell: [0, 0], rotation: 0, price: 0 },
  { assetId: "deer", cell: [-4, -1], rotation: 0, price: 0 },
  { assetId: "alpaca", cell: [4, -1], rotation: 0, price: 0 },
  { assetId: "tree", cell: [-6, 4], rotation: 0, price: 0 },
  { assetId: "treeOak", cell: [6, 4], rotation: 0, price: 0 },
];

export function defaultState() {
  return {
    coins: START_COINS,
    streak: 0,
    last_login: null,
    last_kwartier_date: null,
    layout: STARTER_LAYOUT,
    owned: [],
  };
}

// Haalt de rij op. Geeft null als er nog geen park bestaat (nieuw kind).
export async function loadZooState(userId) {
  if (!userId) return null;
  try {
    const { data, error } = await supabase
      .from("zoo_state")
      .select("coins, streak, last_login, last_kwartier_date, layout, owned")
      .eq("user_id", userId)
      .maybeSingle();
    if (error) {
      console.warn("[zoo] laden mislukt:", error.message);
      return null;
    }
    return data || null;
  } catch (e) {
    console.warn("[zoo] laden exception:", e?.message);
    return null;
  }
}

// Schrijft de (gedeeltelijke) staat weg. Upsert op user_id.
export async function saveZooState(userId, patch) {
  if (!userId) return;
  try {
    const row = { user_id: userId, ...patch, updated_at: new Date().toISOString() };
    const { error } = await supabase.from("zoo_state").upsert(row, { onConflict: "user_id" });
    if (error) console.warn("[zoo] opslaan mislukt:", error.message);
  } catch (e) {
    console.warn("[zoo] opslaan exception:", e?.message);
  }
}

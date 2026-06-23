// zooState — laden/opslaan van het park van dit kind in Supabase (tabel
// zoo_state, RLS: alleen je eigen rij). layout = geplaatste objecten,
// owned = bezit dat nog niet geplaatst is (voor de winkel in stap 4).
import supabase from "../../supabase";
import { START_COINS } from "./zooEconomy";

// Beginindeling: twee ruime starter-verblijven (hert + alpaca) zodat een nieuw
// park nooit leeg is. price 0 → bij weghalen geen "gratis" muntjes. Het vaste
// decor (draaimolen, paden, poppetje, bomen) staat daarnaast altijd.
// Pad van de ingang-poort (voorrand, ~cel z=18) naar het midden (draaimolen op
// [0,0], die de cellen z=-1..1 vult → pad stopt bij z=2). Eén tegel breed langs
// de middenlijn (x=0). Bedraagt het "hoofdpad" waar het poppetje binnenkomt.
const ENTRANCE_PATH = [];
for (let gz = 2; gz <= 18; gz++) ENTRANCE_PATH.push({ assetId: "path", cell: [0, gz], rotation: 0, price: 0 });

export const STARTER_LAYOUT = [
  { assetId: "carousel", cell: [0, 0], rotation: 0, price: 0 },   // draaimolen in het midden
  { assetId: "houseA", cell: [-5, 7], rotation: 0, price: 0 },    // een huisje
  { assetId: "deer", cell: [5, 6], rotation: 0, price: 0 },       // een dier
  { assetId: "alpaca", cell: [-6, -3], rotation: 0, price: 0 },   // nog een dier
  { assetId: "tree", cell: [-8, 3], rotation: 0, price: 0 },
  { assetId: "treeOak", cell: [8, 3], rotation: 0, price: 0 },
  { assetId: "treePalm", cell: [8, 11], rotation: 0, price: 0 },
  { assetId: "flowerRed", cell: [-2, 15], rotation: 0, price: 0 },
  { assetId: "flowerYellow", cell: [2, 15], rotation: 0, price: 0 },
  ...ENTRANCE_PATH,
];

export function defaultState() {
  return {
    coins: START_COINS,
    streak: 0,
    last_login: null,
    last_kwartier_date: null,
    layout: STARTER_LAYOUT,
    // owned (jsonb) bewaart o.a. de kraampjes-prijzen per soort + vrijgespeelde
    // dieren (unlocked: assetId's verdiend door leerpaden af te ronden).
    owned: { foodPrice: 5, drinkPrice: 4, icePrice: 4, popcornPrice: 4, econLevel: "po", unlocked: [] },
  };
}

// Haalt de rij op. Geeft null als er nog geen park bestaat (nieuw kind).
export async function loadZooState(userId) {
  if (!userId) return null;
  try {
    const { data, error } = await supabase
      .from("zoo_state")
      .select("coins, streak, last_login, last_kwartier_date, layout, owned, terrain")
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

// Onraadbare deel-code (8 tekens). Per park, zodat je je park read-only kunt
// delen via een link. Geen PII in de code.
function randomShareCode() {
  return Math.random().toString(36).slice(2, 6) + Math.random().toString(36).slice(2, 6);
}

// Haalt de deel-code van dit park op; maakt er een aan als die er nog niet is.
export async function getShareCode(userId) {
  if (!userId) return null;
  try {
    let { data } = await supabase.from("zoo_state").select("share_code").eq("user_id", userId).maybeSingle();
    if (data?.share_code) return data.share_code;
    const code = randomShareCode();
    const { error } = await supabase.from("zoo_state").upsert({ user_id: userId, share_code: code }, { onConflict: "user_id" });
    if (error) { console.warn("[zoo] deel-code maken mislukt:", error.message); return null; }
    return code;
  } catch (e) {
    console.warn("[zoo] deel-code exception:", e?.message);
    return null;
  }
}

// Laadt een gedeeld park (alleen-lezen) op basis van de deel-code. Gebruikt de
// veilige RPC die enkel de indeling teruggeeft (geen naam/user-id/muntjes).
export async function loadSharedPark(code) {
  if (!code) return null;
  try {
    const { data, error } = await supabase.rpc("get_shared_park", { code });
    if (error) { console.warn("[zoo] bezoek laden mislukt:", error.message); return null; }
    const row = Array.isArray(data) ? data[0] : data;
    return row || null;
  } catch (e) {
    console.warn("[zoo] bezoek exception:", e?.message);
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

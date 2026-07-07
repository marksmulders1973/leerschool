// zooState — laden/opslaan van het park van dit kind in Supabase (tabel
// zoo_state, RLS: alleen je eigen rij). layout = geplaatste objecten,
// owned = bezit dat nog niet geplaatst is (voor de winkel in stap 4).
import supabase from "../../supabase";
import { START_COINS } from "./zooEconomy";

// 🎨 Voorbeeld-park (Mark 2026-06-27): een mooi, symmetrisch ingericht park dat
// nieuwe spelers als voorbeeld krijgen én dat je kunt delen. Opgebouwd met kleine
// generators zodat het overzichtelijk blijft. Footprints: dieren + decor = 1×1,
// gebouwen + attracties = 3×3 (zie cellsVan). Raster loopt van -20..20.
// price 0 → bij weghalen geen "gratis" muntjes.
function bouwVoorbeeldPark() {
  const L = [];
  const add = (assetId, x, z, rotation = 0) => L.push({ assetId, cell: [x, z], rotation, price: 0 });
  const rij = (asset, z, x1, x2) => { for (let x = x1; x <= x2; x++) add(asset, x, z); };
  const kolom = (asset, x, z1, z2) => { for (let z = z1; z <= z2; z++) add(asset, x, z); };
  const vlak = (asset, x1, x2, z1, z2) => { for (let x = x1; x <= x2; x++) for (let z = z1; z <= z2; z++) add(asset, x, z); };
  // Hek-rechthoek die NETJES aansluit: rechte panelen langs X = rotatie 0, langs Z
  // = 90° gedraaid, en op de 4 hoeken een hoek-stuk met de juiste stand. Poort
  // midden-voor (z2-wand).
  const hek = (x1, z1, x2, z2, poortX) => {
    add("hekHoek", x1, z1, 0);
    add("hekHoek", x2, z1, -Math.PI / 2);
    add("hekHoek", x1, z2, Math.PI / 2);
    add("hekHoek", x2, z2, Math.PI);
    for (let x = x1 + 1; x < x2; x++) {
      add("hekPaneel", x, z1, 0);
      add(x === poortX ? "hekPoort" : "hekPaneel", x, z2, 0);
    }
    for (let z = z1 + 1; z < z2; z++) {
      add("hekPaneel", x1, z, Math.PI / 2);
      add("hekPaneel", x2, z, Math.PI / 2);
    }
  };
  const verblijf = (x1, z1, x2, z2, poortX, dieren) => {
    hek(x1, z1, x2, z2, poortX);
    dieren.forEach((a, i) => add(a, x1 + 1 + (i % (x2 - x1 - 1)), z1 + 1 + Math.floor(i / (x2 - x1 - 1))));
  };

  // ── PADEN ── hoofdboulevard (steen) van de ingang naar achteren + kruispaden
  kolom("pathStone", 0, -14, 17);
  rij("pathStone", 17, -2, 2); rij("pathStone", 16, -2, 2); // brede ingang
  rij("pathStone", 6, -9, 9); rij("pathStone", -6, -9, 9);  // kruispaden
  vlak("pathRed", -3, 3, -3, 3);                            // plein rond de draaimolen

  // ── INGANG ──
  add("hekPoort", 0, 18);
  add("treePalm", -3, 18); add("treePalm", 3, 18);
  rij("flowerRed", 17, -5, -4); rij("flowerYellow", 17, 4, 5);
  add("bankje", -2, 15); add("bankje", 2, 15);
  add("prullenbak", -2, 13); add("donatiebox", 2, 13);

  // ── MIDDEN: draaimolen + fontein ──
  add("carousel", 0, 0);
  add("fountain", 0, 10);
  rij("flowerPurple", 13, -1, 1);

  // ── ATTRACTIES achterin ──
  add("ferris", 0, -12);
  add("swing", -8, -12);
  // 🚂 Trein-rondje door het hele park (Mark 5 jul): één grote lus met rails die
  // tussen het centrum en de dier-verblijven doorloopt. De trein rijdt hier
  // vloeiend overheen (Catmull-Rom-bochten). Ring x[-9..9] × z[-5..5] — bewust
  // net binnen de verblijven en langs de bomenrijen (z±6) langs, niet erdoorheen.
  const railRing = (x1, z1, x2, z2) => {
    for (let x = x1; x <= x2; x++) { add("rail", x, z1, 0); add("rail", x, z2, 0); }
    for (let z = z1 + 1; z < z2; z++) { add("rail", x1, z, Math.PI / 2); add("rail", x2, z, Math.PI / 2); }
  };
  railRing(-9, -5, 9, 5);
  add("station", 0, -7);
  // 🎢 Kleine achtbaan standaard in het park (Mark 5 jul): blikvanger in de open
  // strook op de rechter-flank, tussen het hertenkamp (z3..9) en de dino-plek
  // (z-11..-3). Footprint 5×5 rond (14,0) → geen overlap met de hekken.
  add("achtbaanKlein", 14, 0);

  // ── ETEN bij de ingang (kraampjes, 3×3) ──
  add("patatkraam", -7, 12); add("drankkraam", 7, 12);
  add("ijscokraam", -7, 7);  add("popcornkraam", 7, 7);
  add("bankje", -10, 12); add("bankje", 10, 12);

  // ── DIER-VERBLIJVEN (4 stuks, met hek + poort) ──
  verblijf(-17, 3, -11, 9, -14, ["cow", "sheep", "pig", "alpaca", "donkey"]);   // boerderij (links-voor)
  verblijf(-17, -9, -11, -3, -14, ["husky", "shibaInu", "pug", "wolf"]);        // honden (links-achter)
  verblijf(11, 3, 17, 9, 14, ["deer", "stag", "horse", "zebra"]);               // hertenkamp (rechts-voor)
  // Dino-plek (rechts-achter): start NIET vol (Mark 2026-07-01). Alleen de kleine
  // velociraptor staat er — de grote dino's (T-Rex, Triceratops, …) "speel je
  // vrij" door te leren (zie unlocks.js). Ruim, leeg hek = duidelijke groei-plek.
  verblijf(10, -11, 18, -3, 14, ["velociraptor"]);

  // ── HUIZEN-DORPje helemaal achterin ──
  ["huisRood", "huisGeel", "huisGroen", "huisBlauw"].forEach((h, i) => add(h, -9 + i * 6, -17));

  // ── GROEN & DECOR: bomenlaan langs het hoofdpad + bloemen + rotsen ──
  for (let z = -10; z <= 14; z += 4) { add("tree", -5, z); add("treeOak", 5, z); }
  add("struik", -4, 8); add("struik", 4, 8); add("struik", -4, -8); add("struik", 4, -8);
  add("kei", -19, 0); add("kei", 19, 0);
  add("mushroom", -18, -18); add("mushroom", 18, -18);
  add("grasplukje", -2, -10); add("grasplukje", 2, -10);

  return L;
}

export const STARTER_LAYOUT = bouwVoorbeeldPark();

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

// Haalt de rij op. Bug-jacht 7/7 (HOOG): een laad-FOUT (netwerk-blip, 5xx,
// verlopen token) gaf hetzelfde `null` terug als "geen rij" (nieuw kind),
// waarna de game het echte park overschreef met het starter-park →
// onomkeerbaar data-verlies. Nu: intern 3× proberen met backoff, en de
// uitkomst maakt expliciet onderscheid: { row, loadError }.
//   - row=null + loadError=false → écht een nieuw kind, starter-park mag.
//   - loadError=true             → NIETS initialiseren of wegschrijven.
export async function loadZooState(userId) {
  if (!userId) return { row: null, loadError: false };
  for (let poging = 0; poging < 3; poging++) {
    try {
      const { data, error } = await supabase
        .from("zoo_state")
        .select("coins, streak, last_login, last_kwartier_date, layout, owned, terrain")
        .eq("user_id", userId)
        .maybeSingle();
      if (!error) return { row: data || null, loadError: false };
      console.warn(`[zoo] laden mislukt (poging ${poging + 1}):`, error.message);
    } catch (e) {
      console.warn(`[zoo] laden exception (poging ${poging + 1}):`, e?.message);
    }
    await new Promise((r) => setTimeout(r, 500 + poging * 1000));
  }
  return { row: null, loadError: true };
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

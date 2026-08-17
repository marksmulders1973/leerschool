// zooState — laden/opslaan van het park van dit kind in Supabase (tabel
// zoo_state, RLS: alleen je eigen rij). layout = geplaatste objecten,
// owned = bezit dat nog niet geplaatst is (voor de winkel in stap 4).
import supabase from "../../supabase";
import { START_COINS } from "./zooEconomy";
import { isBlok, getAsset } from "./AssetRegistry";
import { cellToWorld } from "./grid";

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
  add("kei", 19, 0); add("kei", 16, -16); // (2e kei verplaatst: lag op het piramide-plein)
  add("mushroom", -18, -18); add("mushroom", 18, -18);
  add("grasplukje", -2, -10); add("grasplukje", 2, -10);

  // ── 📐 PIRAMIDE-PLEIN + MEETKUNDE-TUIN (Mark 17 aug 2026: "rondom de piramide
  //    echt een flink pad, het is er veel te druk"). De piramide staat nu ALLEEN
  //    op een ruim geplaveid plein met veel lucht/pad rondom (zodat je er los
  //    omheen loopt en hem tot maat 11 kunt laten groeien). De vormen + de
  //    meet-objecten staan overzichtelijk in een aparte tuin er ten noorden van,
  //    in twee ruime rijen ver uit elkaar. ──
  // het RUIME piramide-plein — de piramide is nu 3× zo groot (Mark 17 aug), dus
  // ook 3× zoveel pad eromheen: hij staat in z'n eentje op een groot open plein,
  // helemaal op de westflank (de meetkunde-tuin schuift naar het noorden).
  vlak("pathStone", -40, -19, -18, 2);
  add("piramide", -29, -8);
  add("treePalm", -40, -18); add("treePalm", -20, -18);
  add("bankje", -39, 1); add("bankje", -20, 1);
  add("flowerPurple", -40, 2); add("flowerYellow", -20, 2);
  // verbindingspad door de opening tussen de twee linker-verblijven naar het centrum
  rij("pathStone", 0, -26, -3);
  // de meetkunde-tuin ten NOORDEN van het plein: vormen-rij + meet-rij, ver uit elkaar
  vlak("pathStone", -40, -20, 4, 15);
  add("kubus", -38, 7); add("kegel", -33, 7); add("bol", -28, 7); add("halvebol", -23, 7);
  add("klok", -38, 11); add("weegschaal", -33, 11); add("breukentaart", -28, 11); add("moestuin", -23, 11);
  add("telraam", -35, 15); add("parkkaart", -28, 15);
  add("bankje", -22, 14); add("flowerRed", -40, 15);

  // ── 🎡 ONTDEK-LAAN (Mark 16-17 aug 2026): de landmark-blikvangers met magische
  //    poorten uit het masterplan. Loop je door zo'n poort → het leerpad opent.
  //    Een eigen laan op de open oostflank, ruim naast de bestaande attracties. ──
  vlak("pathStone", 22, 37, -15, 15);            // de laan
  kolom("pathRed", 29, -14, 14);                 // middenpad
  rij("pathStone", 0, 9, 22);                    // aftakking vanaf het centrum (z0) naar de laan
  // twee kolommen landmarks, ruim gespreid (poort wijst naar het noorden/pad)
  add("eiffeltoren", 25, 12); add("raket", 33, 12);
  add("tempel", 25, 6);       add("vulkaan", 33, 6);
  add("wereldbol", 25, 0);    add("standbeeld", 33, 0);
  add("telescoop", 25, -6);   add("kas", 33, -6);
  add("molen", 25, -12);      add("weerstation", 33, -12);
  add("kompas", 29, 13);      add("spaarpot", 29, -13);
  // sfeer langs de laan
  add("treeOak", 22, 3); add("treeOak", 22, -3); add("tree", 37, 3); add("tree", 37, -3);
  add("flowerRed", 29, 8); add("flowerYellow", 29, -8);
  add("bankje", 29, 4); add("bankje", 29, -4);

  return L;
}

export const STARTER_LAYOUT = bouwVoorbeeldPark();

// Migratie (2 jul, kleinere blokken): oude "grote" blokken (2×2 m plaat op
// cel+h) worden bij het laden omgezet naar 4 kubussen van 1×1×1 m per laag —
// alles blijft staan, maar nu fijn verbouwbaar. Gedeeld met ParkBezoek zodat
// ook het park van een vriend zijn oude blokken toont.
export function migreerBlokken(layout) {
  if (!Array.isArray(layout)) return layout;
  return layout.flatMap((it) => {
    if (!isBlok(it.assetId) || it.kx != null || !it.cell) return [it];
    const [wx, wz] = cellToWorld(it.cell[0], it.cell[1]);
    const kubs = [];
    for (const dx of [-0.5, 0.5]) {
      for (const dz of [-0.5, 0.5]) {
        kubs.push({ assetId: it.assetId, kx: Math.floor(wx + dx), kz: Math.floor(wz + dz), kh: it.h || 0, price: 0 });
      }
    }
    return kubs;
  });
}

// Maakt een ingelezen layout veilig vóór hij de scene in gaat: blok-migratie +
// corrupte items eruit. Eén item zonder bekende asset of zonder positie (geen
// cell én geen kx) gooide anders een TypeError in de render → ErrorBoundary,
// en "Opnieuw proberen" crashte opnieuw omdat de data blijft staan.
export function saneerLayout(layout) {
  const gemigreerd = migreerBlokken(layout);
  if (!Array.isArray(gemigreerd)) return [];
  return gemigreerd.filter((it) => it && getAsset(it.assetId) && (Array.isArray(it.cell) || it.kx != null));
}

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
export async function loadZooState(userId, profiel = "") {
  if (!userId) return { row: null, loadError: false };
  const p = (profiel || "").trim();
  for (let poging = 0; poging < 3; poging++) {
    try {
      const { data, error } = await supabase
        .from("zoo_state")
        .select("coins, streak, last_login, last_kwartier_date, layout, owned, terrain")
        .eq("user_id", userId)
        .eq("profiel", p)
        .maybeSingle();
      if (!error) {
        if (data) return { row: data, loadError: false };
        // Nog geen eigen park voor dit profiel. Eén account = meerdere kinderen
        // (naam-wissel op /mijn). Het éérste genoemde kind erft het bestaande
        // (lege-profiel) park, zodat een zelfgebouwd park niet verweest raakt.
        if (p !== "") {
          const geadopteerd = await adopteerLegacyPark(userId, p);
          if (geadopteerd) return { row: geadopteerd, loadError: false };
        }
        return { row: null, loadError: false };
      }
      console.warn(`[zoo] laden mislukt (poging ${poging + 1}):`, error.message);
    } catch (e) {
      console.warn(`[zoo] laden exception (poging ${poging + 1}):`, e?.message);
    }
    await new Promise((r) => setTimeout(r, 500 + poging * 1000));
  }
  return { row: null, loadError: true };
}

// Het lege-profiel-park (van vóór "eigen park per kind") toewijzen aan het
// éérste genoemde kind dat het opent — maar alléén als er nog geen ander genoemd
// park onder dit account bestaat (anders is het lege-profiel het gedeelde/ouder-
// park en krijgt dit kind een vers park). Niet-destructief: het park verhuist
// alleen van naam, er gaat niets verloren.
async function adopteerLegacyPark(userId, p) {
  try {
    const { data: rows, error } = await supabase
      .from("zoo_state")
      .select("profiel, coins, streak, last_login, last_kwartier_date, layout, owned, terrain")
      .eq("user_id", userId);
    if (error || !Array.isArray(rows)) return null;
    const legacy = rows.find((r) => (r.profiel || "") === "");
    const genoemdParkBestaat = rows.some((r) => r.profiel && r.profiel.trim() !== "");
    if (!legacy || genoemdParkBestaat) return null;
    const { error: upErr } = await supabase
      .from("zoo_state").update({ profiel: p }).eq("user_id", userId).eq("profiel", "");
    if (upErr) { console.warn("[zoo] adoptie mislukt:", upErr.message); return null; }
    const { profiel: _p, ...parkData } = legacy;
    return parkData;
  } catch (e) {
    console.warn("[zoo] adoptie exception:", e?.message);
    return null;
  }
}

// Onraadbare deel-code (8 tekens). Per park, zodat je je park read-only kunt
// delen via een link. Geen PII in de code.
function randomShareCode() {
  return Math.random().toString(36).slice(2, 6) + Math.random().toString(36).slice(2, 6);
}

// Haalt de deel-code van dit park op; maakt er een aan als die er nog niet is.
export async function getShareCode(userId, profiel = "") {
  if (!userId) return null;
  const p = (profiel || "").trim();
  try {
    let { data } = await supabase.from("zoo_state").select("share_code").eq("user_id", userId).eq("profiel", p).maybeSingle();
    if (data?.share_code) return data.share_code;
    const code = randomShareCode();
    const { error } = await supabase.from("zoo_state").upsert({ user_id: userId, profiel: p, share_code: code }, { onConflict: "user_id,profiel" });
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

// Schrijft de (gedeeltelijke) staat weg. Upsert op (user_id, profiel), zodat
// elk kind (naam-wissel op /mijn) zijn eigen park heeft onder dezelfde login.
export async function saveZooState(userId, profiel, patch) {
  if (!userId) return;
  const p = (profiel || "").trim();
  try {
    const row = { user_id: userId, profiel: p, ...patch, updated_at: new Date().toISOString() };
    const { error } = await supabase.from("zoo_state").upsert(row, { onConflict: "user_id,profiel" });
    if (error) console.warn("[zoo] opslaan mislukt:", error.message);
  } catch (e) {
    console.warn("[zoo] opslaan exception:", e?.message);
  }
}

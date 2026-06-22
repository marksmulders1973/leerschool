// ZookwartierGame — pagina-wrapper voor "Mijn Park" (3D verzamel-dierentuin).
// Vast mini-park (paden/draaimolen/poppetje/verblijven) + zelf dieren plaatsen
// (kost muntjes), verplaatsen, of weghalen (muntjes terug). Indeling + muntjes
// bewaard in Supabase. Muntjes verdien je met dagelijks inloggen + kwartier leren.
//
// De zware three.js-scene laadt lazy, zodat de leer-app snel blijft.
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { getDailyGoal } from "../shared/dailyGoal";
import { loadZooState, saveZooState, defaultState, STARTER_LAYOUT } from "../features/zoo/zooState";
import { applyDailyLogin, applyKwartierReward, inkomstenPerDag, groeiBabies, dagenVerschil, vandaag, BABY_BONUS, MAX_DAGEN_INKOMST } from "../features/zoo/zooEconomy";
import { PLAATSBARE_DIEREN, PLAATSBARE_BOUWWERKEN, PLAATSBARE_ATTRACTIES, PLAATSBARE_HEKKEN, PLAATSBARE_NATUUR, getAsset, KRAAM_SOORTEN, KRAAM_KEYS } from "../features/zoo/AssetRegistry";
import { serialize as serTerrain, deserialize as deserTerrain } from "../features/zoo/terrain";
import { track } from "../utils.js";

const ZooScene = lazy(() => import("../features/zoo/ZooScene"));

// Touch-joystick (telefoon) om het poppetje te laten lopen. Schrijft naar
// inputRef.current.joy (genormaliseerd -1..1). Werkt ook met de muis.
function Joystick({ inputRef }) {
  const base = useRef(null);
  const active = useRef(false);
  const [knob, setKnob] = useState({ x: 0, y: 0 });
  const R = 44;
  const naar = (cx, cy) => {
    const r = base.current.getBoundingClientRect();
    let dx = cx - (r.left + r.width / 2);
    let dy = cy - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy);
    if (d > R) { dx = (dx / d) * R; dy = (dy / d) * R; }
    setKnob({ x: dx, y: dy });
    inputRef.current.joy = { x: dx / R, y: dy / R };
  };
  const stop = () => { active.current = false; setKnob({ x: 0, y: 0 }); inputRef.current.joy = { x: 0, y: 0 }; };
  return (
    <div
      ref={base}
      onPointerDown={(e) => { active.current = true; try { e.currentTarget.setPointerCapture(e.pointerId); } catch {} naar(e.clientX, e.clientY); }}
      onPointerMove={(e) => { if (active.current) naar(e.clientX, e.clientY); }}
      onPointerUp={stop}
      onPointerCancel={stop}
      style={{ position: "absolute", left: 16, bottom: 92, width: 104, height: 104, borderRadius: "50%", background: "rgba(255,255,255,0.26)", border: "2px solid rgba(255,255,255,0.55)", zIndex: 12, touchAction: "none", boxShadow: "0 3px 10px rgba(0,0,0,.2)" }}
    >
      <div style={{ position: "absolute", left: "50%", top: "50%", width: 44, height: 44, marginLeft: -22, marginTop: -22, transform: `translate(${knob.x}px, ${knob.y}px)`, borderRadius: "50%", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 6px rgba(0,0,0,.3)" }} />
    </div>
  );
}

// Winkel: alles plaatsbaar, opgebouwd uit de AssetRegistry, per categorie.
const mkItem = (id) => { const a = getAsset(id); return { assetId: id, emoji: a.emoji, label: a.name, price: a.price, kind: a.kind }; };
const DIEREN_SHOP = PLAATSBARE_DIEREN.map(mkItem);
const BOUW_SHOP = PLAATSBARE_BOUWWERKEN.map(mkItem);
const ATTRACTIE_SHOP = PLAATSBARE_ATTRACTIES.map(mkItem);
const HEK_SHOP = PLAATSBARE_HEKKEN.map(mkItem);
const NATUUR_SHOP = PLAATSBARE_NATUUR.map(mkItem);
const SHOP_CATS = [
  { key: "dier", label: "🦊 Dieren", items: DIEREN_SHOP },
  { key: "hek", label: "🚧 Hekken", items: HEK_SHOP },
  { key: "gebouw", label: "🏠 Gebouwen", items: BOUW_SHOP },
  { key: "attractie", label: "🎠 Attracties", items: ATTRACTIE_SHOP },
  { key: "natuur", label: "🌳 Natuur & bouwen", items: NATUUR_SHOP },
];
const isDier = (assetId) => getAsset(assetId)?.kind === "animal";
const kindVan = (assetId) => getAsset(assetId)?.kind;
const prijsVan = (assetId) => getAsset(assetId)?.price ?? 0;

export default function ZookwartierGame({ onHome, userName, authUser, onPlayObliterator }) {
  const naam = (userName || "").trim();
  const parkNaam = naam ? `${naam}'s Park` : "Mijn Park";
  const userId = authUser?.id || null;

  const [meta, setMeta] = useState(null);
  const [placedItems, setPlacedItems] = useState(STARTER_LAYOUT);
  const [placing, setPlacing] = useState(null); // { assetId, price, moveIdx? }
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [reward, setReward] = useState(null);
  const [melding, setMelding] = useState(null);
  const [panel, setPanel] = useState(null); // 'uitleg' | 'gids' | null
  const [shopCat, setShopCat] = useState("dier");
  const [colorMode, setColorMode] = useState(false);   // huis-onderdelen inkleuren
  const [brushColor, setBrushColor] = useState("#e2574c"); // gekozen verfkleur
  const [houseParts, setHouseParts] = useState(null);   // gevonden onderdelen (basiskleuren) van het gekozen huis
  const [activePart, setActivePart] = useState(0);      // welk onderdeel je nu kleurt
  const [followCam, setFollowCam] = useState(false);    // camera volgt het poppetje
  const [terrain, setTerrain] = useState(null);          // hoogteveld van de vloer
  const [sculptMode, setSculptMode] = useState(false);   // vloer boetseren
  const [sculptDir, setSculptDir] = useState(1);         // +1 omhoog, -1 omlaag
  const rewardTimer = useRef(null);
  const meldingTimer = useRef(null);
  const inputRef = useRef({ keys: {}, joy: { x: 0, y: 0 } }); // besturing poppetje

  // Bezoekers kopen bij je kraampjes (patat/drinken) → jij verdient de prijs in
  // muntjes. Gelimiteerd per bezoek-sessie zodat het niet eindeloos te farmen is.
  // setMeta is stabiel → ref is veilig.
  const saleCountRef = useRef(0);
  const buyApi = useRef({
    onBuy: (kind, price = 1) => {
      if (saleCountRef.current >= 400) return;             // session-cap op verdienste
      if (saleCountRef.current === 0) { try { track("park_sale"); } catch { /* niet laten breken */ } }
      saleCountRef.current += price;
      setMeta((m) => (m ? { ...m, coins: m.coins + price } : m));
    },
  }).current;

  // Meten hoeveel mensen het park spelen: één event per keer openen.
  useEffect(() => { try { track("park_open"); } catch { /* nooit laten breken */ } }, []);

  // Toetsenbord-besturing (laptop): pijltjes / WASD.
  useEffect(() => {
    const codes = new Set(["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "KeyW", "KeyA", "KeyS", "KeyD"]);
    const down = (e) => { if (codes.has(e.code)) { inputRef.current.keys[e.code] = true; if (e.code.startsWith("Arrow")) e.preventDefault(); } };
    const up = (e) => { if (codes.has(e.code)) inputRef.current.keys[e.code] = false; };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  const flits = (tekst) => {
    setMelding(tekst);
    clearTimeout(meldingTimer.current);
    meldingTimer.current = setTimeout(() => setMelding(null), 2200);
  };

  // Laden + dagbeloningen bij binnenkomst.
  useEffect(() => {
    let cancel = false;
    (async () => {
      const row = await loadZooState(userId);
      const d = defaultState();
      // owned (jsonb) bewaart de kraampjes-prijzen als object; oude rijen hadden
      // hier een lege array → val terug op de standaardprijzen.
      const ownedObj = row && row.owned && !Array.isArray(row.owned) ? row.owned : d.owned;
      const base = row
        ? { coins: row.coins, streak: row.streak, last_login: row.last_login, last_kwartier_date: row.last_kwartier_date, owned: ownedObj }
        : { coins: d.coins, streak: d.streak, last_login: d.last_login, last_kwartier_date: d.last_kwartier_date, owned: d.owned };
      const layout = row && Array.isArray(row.layout) && row.layout.length ? row.layout : STARTER_LAYOUT;

      const prevLogin = base.last_login;          // vóór de login-update
      const isNieuweDag = prevLogin !== vandaag();
      const login = applyDailyLogin(base);
      const kw = applyKwartierReward(login.state, !!getDailyGoal().completed);
      let finalMeta = kw.state;
      let finalLayout = layout;
      let parkGain = 0, births = 0;

      // Park-groei: op een nieuwe dag levert je park muntjes op (meer verblijven/
      // jonkies = meer) en kunnen dieren een jonkie krijgen.
      if (isNieuweDag) {
        const dagen = Math.min(MAX_DAGEN_INKOMST, Math.max(1, dagenVerschil(prevLogin)));
        parkGain = inkomstenPerDag(layout, kindVan) * dagen;
        const g = groeiBabies(layout, isDier);
        finalLayout = g.layout;
        births = g.births;
        finalMeta = { ...finalMeta, coins: finalMeta.coins + parkGain + births * BABY_BONUS };
      }
      const gained = login.gained + kw.gained + parkGain + births * BABY_BONUS;

      if (cancel) return;
      setMeta(finalMeta);
      setPlacedItems(finalLayout);
      setTerrain(deserTerrain(row?.terrain));
      setLoaded(true);
      if (gained > 0) {
        setReward({ total: gained, login: login.gained, kwartier: kw.gained, park: parkGain, births });
        clearTimeout(rewardTimer.current);
        rewardTimer.current = setTimeout(() => setReward(null), 6000);
      }
      if (userId) saveZooState(userId, { ...finalMeta, layout: finalLayout });
    })();
    return () => { cancel = true; clearTimeout(rewardTimer.current); clearTimeout(meldingTimer.current); };
  }, [userId]);

  // Debounced opslaan na wijzigingen (incl. het geboetseerde terrein).
  useEffect(() => {
    if (!loaded || !userId || !meta) return;
    const t = setTimeout(() => saveZooState(userId, { ...meta, layout: placedItems, terrain: serTerrain(terrain) }), 2000);
    return () => clearTimeout(t);
  }, [placedItems, meta, terrain, loaded, userId]);

  const coins = meta?.coins ?? 0;
  const streak = meta?.streak ?? 0;

  const startKopen = (p) => {
    if (coins < p.price) { flits("Niet genoeg muntjes — leer een kwartier om te sparen!"); return; }
    setSelectedIdx(null);
    setPlacing({ assetId: p.assetId, price: p.price, rot: 0 });
  };

  const draai = () => setPlacing((p) => (p ? { ...p, rot: (p.rot || 0) + Math.PI / 2 } : p));

  const plaatsOpVakje = (cell) => {
    if (!placing) return;
    const rot = placing.rot || 0;
    // Verplaatsen: bestaand item naar nieuw vakje (met huidige draaihoek).
    if (placing.moveIdx != null) {
      setPlacedItems((items) => items.map((it, i) => (i === placing.moveIdx ? { ...it, cell, rotation: rot } : it)));
      setPlacing(null);
      return;
    }
    // Kopen + plaatsen.
    if (coins < placing.price) { flits("Niet genoeg muntjes."); setPlacing(null); return; }
    setMeta((m) => ({ ...m, coins: m.coins - placing.price }));
    setPlacedItems((items) => [...items, { assetId: placing.assetId, cell, rotation: rot, price: placing.price }]);
    // Blijf in koop-modus zolang er muntjes zijn (handig om er meerdere te zetten).
    if (coins - placing.price < placing.price) setPlacing(null);
  };

  const verplaatsGeselecteerde = () => {
    if (selectedIdx == null) return;
    const it = placedItems[selectedIdx];
    setPlacing({ assetId: it.assetId, price: it.price ?? prijsVan(it.assetId), moveIdx: selectedIdx, rot: it.rotation || 0 });
    setSelectedIdx(null);
  };

  const weghaalGeselecteerde = () => {
    if (selectedIdx == null) return;
    const it = placedItems[selectedIdx];
    const terug = it.price ?? prijsVan(it.assetId);
    setMeta((m) => ({ ...m, coins: m.coins + terug }));
    setPlacedItems((items) => items.filter((_, i) => i !== selectedIdx));
    setSelectedIdx(null);
    if (terug > 0) flits(`Weggehaald — +${terug} 🪙 terug`);
  };

  const selKind = selectedIdx != null ? kindVan(placedItems[selectedIdx]?.assetId) : null;
  const selIsHuis = selKind === "building" && String(placedItems[selectedIdx]?.assetId || "").startsWith("house");
  // Kraampje geselecteerd? Dan kun je de prijs van patat/drinken instellen.
  const selVoorziet = selectedIdx != null ? getAsset(placedItems[selectedIdx]?.assetId)?.voorziet : null;

  // Kraampjes-prijzen (in muntjes) per soort. Bewaard in meta.owned als
  // `<soort>Price` → opgeslagen in Supabase. Valt terug op de standaardprijs.
  const prijsVanKraam = (kind) => meta?.owned?.[`${kind}Price`] ?? (KRAAM_SOORTEN[kind]?.start ?? 4);
  const prices = Object.fromEntries(KRAAM_KEYS.map((k) => [k, prijsVanKraam(k)]));
  const setPrice = (kind, val) => {
    const v = Math.max(1, Math.min(15, val));
    setMeta((m) => {
      if (!m) return m;
      const o = m.owned && !Array.isArray(m.owned) ? m.owned : {};
      return { ...m, owned: { ...o, [`${kind}Price`]: v } };
    });
  };

  const HUIS_KLEUREN = ["#e2574c", "#e8833c", "#f2cd4a", "#7bbf5a", "#3cb5a8", "#4a90d9", "#8a6ad8", "#e58fb0", "#8a5a3c", "#f5f0e2", "#b9b6ab", "#3a3f47"];
  const setHuisKleur = (idx, grp, hex) => {
    setPlacedItems((items) => items.map((it, i) => (i === idx ? { ...it, colors: { ...(it.colors || {}), [grp]: hex } } : it)));
  };
  // [r,g,b] in 0..1 → #rrggbb (voor de onderdeel-chips).
  const rgbHex = (c) => "#" + c.map((v) => Math.round(Math.max(0, Math.min(1, v)) * 255).toString(16).padStart(2, "0")).join("");
  // Een "verf-cursor" in de gekozen kleur, zodat je op de laptop ziet welke kleur
  // actief is: klik dan op een huis-onderdeel om het te verven (paint-bucket).
  const verfCursor = (hex) => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30'><circle cx='15' cy='15' r='9' fill='${hex}' stroke='#ffffff' stroke-width='3'/><circle cx='15' cy='15' r='10.5' fill='none' stroke='#000000' stroke-width='1'/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}") 15 15, crosshair`;
  };
  // Huidige kleur van een onderdeel: jouw keuze, anders de basiskleur uit de textuur.
  const huidigeDeelKleur = (i) => {
    const ov = placedItems[selectedIdx]?.colors?.[i];
    if (ov) return ov;
    return houseParts && houseParts[i] ? rgbHex(houseParts[i]) : "#cccccc";
  };
  const sluitSelectie = () => { setSelectedIdx(null); setColorMode(false); setHouseParts(null); setActivePart(0); };

  // Handmatig opslaan (naast het automatische opslaan).
  const opslaan = async () => {
    if (!userId || !meta) { flits("Nog niet ingelogd — opslaan lukt zo niet"); return; }
    await saveZooState(userId, { ...meta, layout: placedItems, terrain: serTerrain(terrain) });
    flits("Park opgeslagen ✓");
  };

  return (
    <div style={{ position: "fixed", inset: 0, background: "#aaddff", overflow: "hidden" }}>
      {/* Header. */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8, padding: "10px 12px", background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0))", pointerEvents: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ color: "#fff", font: "800 18px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.35)" }}>🐾 {parkNaam}</div>
          <span style={{ font: "800 11px system-ui", color: "#5b3d00", background: "#ffd54a", padding: "3px 9px", borderRadius: 999, boxShadow: "0 2px 6px rgba(0,0,0,.2)", whiteSpace: "nowrap" }}>🚧 In opbouw</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setPanel("uitleg")} title="Uitleg" style={{ pointerEvents: "auto", border: "none", borderRadius: 999, width: 38, height: 38, font: "700 16px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>ℹ️</button>
          <button onClick={() => setPanel("gids")} title="Diergids" style={{ pointerEvents: "auto", border: "none", borderRadius: 999, width: 38, height: 38, font: "700 16px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>📖</button>
          <button onClick={opslaan} title="Opslaan" style={{ pointerEvents: "auto", border: "none", borderRadius: 999, width: 38, height: 38, font: "700 16px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>💾</button>
          <button onClick={() => setFollowCam((v) => !v)} title="Camera volgt je poppetje" style={{ pointerEvents: "auto", border: followCam ? "2px solid #2e7d32" : "none", borderRadius: 999, width: 38, height: 38, font: "700 16px system-ui", color: "#234", background: followCam ? "#cdeccb" : "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>🎥</button>
          <button onClick={() => { setSculptMode((v) => !v); setPlacing(null); setSelectedIdx(null); }} title="Vloer boetseren (heuvels)" style={{ pointerEvents: "auto", border: sculptMode ? "2px solid #2e7d32" : "none", borderRadius: 999, width: 38, height: 38, font: "700 16px system-ui", color: "#234", background: sculptMode ? "#cdeccb" : "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>⛰️</button>
          {onPlayObliterator && (
            <button onClick={onPlayObliterator} title="OBLITERATOR — extra spel" style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "0 13px", height: 38, font: "800 13px system-ui", color: "#fff", background: "linear-gradient(135deg,#6a3df0,#b13df0)", boxShadow: "0 2px 8px rgba(0,0,0,.22)", cursor: "pointer", whiteSpace: "nowrap" }}>🎮 Extra spel</button>
          )}
          <span style={{ font: "800 14px system-ui", color: "#5b3d00", background: "#ffe08a", padding: "7px 12px", borderRadius: 999, boxShadow: "0 2px 6px rgba(0,0,0,.2)", whiteSpace: "nowrap" }}>
            🪙 {coins}{streak > 1 ? `  ·  🔥${streak}` : ""}
          </span>
          <button onClick={onHome} style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "8px 16px", font: "700 14px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}>← Terug</button>
        </div>
      </div>

      {/* Beloning-melding bij binnenkomst. */}
      {reward && (
        <div style={{ position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", zIndex: 11, background: "rgba(255,255,255,0.96)", color: "#234", borderRadius: 14, padding: "10px 16px", boxShadow: "0 6px 20px rgba(0,0,0,.25)", font: "700 14px system-ui", textAlign: "center", maxWidth: "90%" }}>
          🎉 +{reward.total} muntjes!
          <div style={{ font: "600 12px system-ui", opacity: 0.78, marginTop: 2 }}>
            {[
              reward.login > 0 && `Inloggen +${reward.login}`,
              reward.kwartier > 0 && `Kwartier +${reward.kwartier}`,
              reward.park > 0 && `Je park +${reward.park}`,
              reward.births > 0 && `🐣 ${reward.births} jonkie${reward.births > 1 ? "s" : ""} geboren! +${reward.births * BABY_BONUS}`,
            ].filter(Boolean).join("  ·  ")}
          </div>
        </div>
      )}
      {/* Korte info-melding. */}
      {melding && (
        <div style={{ position: "absolute", top: 110, left: "50%", transform: "translateX(-50%)", zIndex: 11, background: "rgba(20,30,20,0.86)", color: "#fff", borderRadius: 12, padding: "8px 14px", font: "700 13px system-ui", textAlign: "center", maxWidth: "90%" }}>
          {melding}
        </div>
      )}

      <Suspense fallback={<div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#3a5a2a", font: "600 15px system-ui" }}>Park laden…</div>}>
        <ZooScene
          placingAsset={placing?.assetId || null}
          placingRot={placing?.rot || 0}
          placedItems={placedItems}
          onPlace={plaatsOpVakje}
          onSelectPlaced={(idx) => { setPlacing(null); setColorMode(false); setSelectedIdx(idx); }}
          onClearSelection={sluitSelectie}
          onBuy={buyApi.onBuy}
          prices={prices}
          onPickPart={(idx, grp) => { setActivePart(grp); setHuisKleur(idx, grp, brushColor); flits("Onderdeel gekleurd ✓"); }}
          onHouseParts={setHouseParts}
          paintCursor={colorMode && selIsHuis ? verfCursor(brushColor) : null}
          colorEditIdx={colorMode && selIsHuis ? selectedIdx : -1}
          followCam={followCam}
          terrain={terrain}
          onTerrainChange={setTerrain}
          sculptMode={sculptMode}
          sculptDir={sculptDir}
          selectedIdx={selectedIdx}
          moveIdx={placing?.moveIdx ?? -1}
          inputRef={inputRef}
        />
      </Suspense>

      {/* Touch-joystick om te lopen (verborgen tijdens plaatsen/selecteren/boetseren). */}
      {!placing && !sculptMode && selectedIdx == null && <Joystick inputRef={inputRef} />}

      {/* Onderbalk: contextueel. */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10, padding: "12px 14px calc(12px + env(safe-area-inset-bottom))", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "linear-gradient(0deg, rgba(0,0,0,0.22), rgba(0,0,0,0))", flexWrap: "wrap" }}>
        {sculptMode ? (
          <>
            <div style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              ⛰️ Tik op de grond om de vloer {sculptDir > 0 ? "omhoog" : "omlaag"} te boetseren
            </div>
            <button onClick={() => setSculptDir(1)} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 14px system-ui", color: sculptDir > 0 ? "#fff" : "#234", background: sculptDir > 0 ? "#2e7d32" : "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>⬆️ Omhoog</button>
            <button onClick={() => setSculptDir(-1)} style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 14px system-ui", color: sculptDir < 0 ? "#fff" : "#234", background: sculptDir < 0 ? "#2e7d32" : "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>⬇️ Omlaag</button>
            <button onClick={() => setSculptMode(false)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
          </>
        ) : placing ? (
          <>
            <div style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              {`Tik op een groen vak om neer te ${placing.moveIdx != null ? "verplaatsen" : "zetten"}`}
            </div>
            <button onClick={draai} title="Draaien" style={{ border: "none", borderRadius: 999, padding: "10px 16px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>↻ Draai</button>
            <button onClick={() => setPlacing(null)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
          </>
        ) : selectedIdx != null && colorMode ? (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)", textAlign: "center" }}>
              🎨 Kies een <b>kleur</b> (je muis wordt die kleur) → <b>klik op een deel van het huis</b> om het te verven. Of tik een onderdeel-chip hieronder.
            </span>
            {/* Onderdelen van dit huis — elk chip toont de huidige kleur. */}
            {houseParts && houseParts.length > 0 ? (
              <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
                {houseParts.map((_, i) => (
                  <button key={i} onClick={() => setActivePart(i)} title={`Onderdeel ${i + 1}`} style={{ width: 40, height: 40, borderRadius: 12, border: activePart === i ? "3px solid #2e7d32" : "2px solid rgba(255,255,255,0.85)", background: huidigeDeelKleur(i), cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,.3)", transform: activePart === i ? "scale(1.12)" : "none" }} />
                ))}
              </div>
            ) : (
              <span style={{ color: "#fff", font: "600 12px system-ui", opacity: 0.85 }}>Onderdelen laden… (of tik een deel op het huis aan)</span>
            )}
            {/* Kleurenpalet — past meteen toe op het gekozen onderdeel. */}
            <div style={{ display: "flex", gap: 7, alignItems: "center", flexWrap: "wrap", justifyContent: "center" }}>
              {HUIS_KLEUREN.map((c) => (
                <button key={c} onClick={() => { setBrushColor(c); setHuisKleur(selectedIdx, activePart, c); }} title="Kies deze kleur" style={{ width: 32, height: 32, borderRadius: "50%", border: brushColor === c ? "3px solid #2e7d32" : "2px solid rgba(255,255,255,0.85)", background: c, cursor: "pointer", boxShadow: "0 2px 6px rgba(0,0,0,.25)", transform: brushColor === c ? "scale(1.12)" : "none" }} />
              ))}
              <button onClick={() => { setColorMode(false); setHouseParts(null); }} style={{ border: "none", borderRadius: 999, padding: "8px 16px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
            </div>
          </div>
        ) : selectedIdx != null && selVoorziet ? (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 7 }}>
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)", textAlign: "center" }}>
              {KRAAM_SOORTEN[selVoorziet]?.emoji} {KRAAM_SOORTEN[selVoorziet]?.label} — zet de prijs. Goedkoop = meer kopers, duur = meer per stuk (te duur → bezoekers haken af).
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.96)", borderRadius: 999, padding: "6px 10px", boxShadow: "0 3px 10px rgba(0,0,0,.22)" }}>
              <button onClick={() => setPrice(selVoorziet, prices[selVoorziet] - 1)} style={{ border: "none", borderRadius: "50%", width: 36, height: 36, font: "900 20px system-ui", color: "#fff", background: "#d9534f", cursor: "pointer" }}>−</button>
              <span style={{ font: "900 18px system-ui", color: "#234", minWidth: 78, textAlign: "center" }}>{prices[selVoorziet]} 🪙</span>
              <button onClick={() => setPrice(selVoorziet, prices[selVoorziet] + 1)} style={{ border: "none", borderRadius: "50%", width: 36, height: 36, font: "900 20px system-ui", color: "#fff", background: "#2e7d32", cursor: "pointer" }}>+</button>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "center" }}>
              <button onClick={verplaatsGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>↔ Verplaatsen</button>
              <button onClick={weghaalGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "9px 16px", font: "800 13px system-ui", color: "#fff", background: "#d9534f", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🗑 Weghalen (+{placedItems[selectedIdx]?.price ?? prijsVan(placedItems[selectedIdx]?.assetId)} 🪙)</button>
              <button onClick={sluitSelectie} style={{ border: "none", borderRadius: 999, padding: "9px 14px", font: "700 13px system-ui", color: "#234", background: "rgba(255,255,255,0.7)", cursor: "pointer" }}>✕</button>
            </div>
          </div>
        ) : selectedIdx != null ? (
          <>
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              {selKind === "animal" ? "🦊 Dier loopt vrij rond — bouw er zelf een hek omheen met 🚧 Hekken:" : "Gekozen:"}
            </span>
            <button onClick={verplaatsGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>↔ Verplaatsen</button>
            {selIsHuis && <button onClick={() => { setColorMode(true); setActivePart(0); }} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🎨 Kleuren</button>}
            <button onClick={weghaalGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#d9534f", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🗑 Weghalen (+{placedItems[selectedIdx]?.price ?? prijsVan(placedItems[selectedIdx]?.assetId)} 🪙)</button>
            <button onClick={sluitSelectie} style={{ border: "none", borderRadius: 999, padding: "10px 14px", font: "700 13px system-ui", color: "#234", background: "rgba(255,255,255,0.7)", cursor: "pointer" }}>✕</button>
          </>
        ) : (
          <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: 5 }}>
            <span style={{ color: "#fff", font: "700 12px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              📈 Je park verdient 🪙{inkomstenPerDag(placedItems, kindVan)} per dag · kies iets en zet het neer · tik iets aan om te verplaatsen of weg te halen
            </span>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "center" }}>
              {SHOP_CATS.map((c) => (
                <button key={c.key} onClick={() => setShopCat(c.key)} style={{ border: "none", borderRadius: 999, padding: "5px 11px", font: "800 12px system-ui", color: shopCat === c.key ? "#fff" : "#234", background: shopCat === c.key ? "#2e7d32" : "rgba(255,255,255,0.9)", boxShadow: "0 2px 6px rgba(0,0,0,.18)", cursor: "pointer", whiteSpace: "nowrap" }}>{c.label}</button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, overflowX: "auto", maxWidth: "100%", padding: "2px 4px 4px", WebkitOverflowScrolling: "touch" }}>
              {(SHOP_CATS.find((c) => c.key === shopCat)?.items || []).map((p) => {
                const kan = coins >= p.price;
                return (
                  <button key={p.assetId} onClick={() => startKopen(p)} title={`${p.label} plaatsen`} style={{ flex: "0 0 auto", border: "none", borderRadius: 14, padding: "8px 12px", font: "800 13px system-ui", color: kan ? "#234" : "#999", background: kan ? "rgba(255,255,255,0.96)" : "rgba(255,255,255,0.5)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: kan ? "pointer" : "not-allowed", whiteSpace: "nowrap", textAlign: "center" }}>
                    <span style={{ fontSize: 18 }}>{p.emoji}</span> {p.label}<br />
                    <span style={{ fontSize: 11, opacity: 0.85 }}>{p.price} 🪙</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Overlays: uitleg + diergids. */}
      {panel && (
        <div
          onClick={() => setPanel(null)}
          style={{ position: "absolute", inset: 0, zIndex: 20, background: "rgba(10,20,10,0.55)", display: "grid", placeItems: "center", padding: 16 }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "min(560px, 96vw)", maxHeight: "86vh", overflowY: "auto", background: "#fffef8", borderRadius: 18, boxShadow: "0 12px 40px rgba(0,0,0,.35)", padding: "18px 20px" }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
              <h2 style={{ margin: 0, font: "800 20px system-ui", color: "#234" }}>
                {panel === "uitleg" ? "ℹ️ Hoe werkt je park?" : "📖 Diergids"}
              </h2>
              <button onClick={() => setPanel(null)} style={{ border: "none", borderRadius: 999, width: 34, height: 34, font: "700 16px system-ui", background: "#eee", cursor: "pointer" }}>✕</button>
            </div>

            {panel === "uitleg" ? (
              <div style={{ font: "500 14.5px/1.5 system-ui", color: "#333" }}>
                <p style={{ marginTop: 0 }}>In <b>{parkNaam}</b> verzamel je dieren en laat je je eigen dierentuin groeien.</p>
                <p><b>🪙 Muntjes verdien je zo:</b></p>
                <ul style={{ paddingLeft: 20, margin: "6px 0" }}>
                  <li>Elke dag <b>inloggen</b> (+5, met streak-bonus 🔥 die oploopt).</li>
                  <li>Elke dag je <b>kwartier leren</b> afronden (+8).</li>
                  <li>Je <b>park zelf</b> levert muntjes op: hoe meer verblijven en jonkies, hoe meer per dag.</li>
                  <li><b>Kraampjes</b> 🍟🥤🍦🍿: bezoekers krijgen honger, dorst of zin in iets lekkers. Zet een <b>patat-</b>, <b>drank-</b>, <b>ijsco-</b> of <b>popcornkraam</b> neer en kies de prijs — elke verkoop levert muntjes op. Bezoekers verlangen naar wat jij aanbiedt; te duur? Dan haken ze af, dus zoek de juiste prijs!</li>
                </ul>
                <p><b>🦊 Dieren:</b> koop een dier — het <b>loopt vrij rond</b> in je park. Tik een dier aan om het te <b>verplaatsen</b> of <b>weg te halen</b> (je krijgt de muntjes terug).</p>
                <p><b>🚧 Hekken:</b> wil je een dier insluiten? Koop <b>losse hekpanelen</b> en zet ze aan elkaar — in een vierkant, T- of L-vorm, wat je wilt. Elk paneel kun je los weghalen of er een gelijke bij kopen. Een <b>hek-poort</b> maakt een nette ingang.</p>
                <p><b>🐣 Jonkies:</b> dieren kunnen er met de tijd een jonkie bij krijgen — dat levert extra muntjes op.</p>
                <p><b>🕹️ Rondkijken:</b> sleep om te draaien, scroll of knijp om in/uit te zoomen.</p>
                <p style={{ color: "#777", fontSize: 12.5 }}>Het park is nog volop in opbouw 🚧 — er komt steeds meer bij (attracties, paden en meer).</p>
              </div>
            ) : (
              <div>
                <p style={{ font: "500 13.5px system-ui", color: "#555", marginTop: 0 }}>Alles wat je kunt kopen. Dieren lopen vrij rond; met losse hekpanelen bouw je zelf een kooi.</p>
                {[{ titel: "🦊 Dieren", lijst: DIEREN_SHOP }, { titel: "🚧 Hekken", lijst: HEK_SHOP }, { titel: "🏠 Gebouwen & kraampjes", lijst: BOUW_SHOP }, { titel: "🎠 Attracties", lijst: ATTRACTIE_SHOP }, { titel: "🌳 Natuur & bouwen", lijst: NATUUR_SHOP }].map((sec) => (
                  <div key={sec.titel} style={{ marginBottom: 12 }}>
                    <div style={{ font: "800 14px system-ui", color: "#234", margin: "4px 0 6px" }}>{sec.titel}</div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 8 }}>
                      {sec.lijst.map((p) => (
                        <div key={p.assetId} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", background: "#f5f3ea", borderRadius: 12 }}>
                          <span style={{ fontSize: 24 }}>{p.emoji}</span>
                          <div style={{ lineHeight: 1.2 }}>
                            <div style={{ font: "800 13.5px system-ui", color: "#234" }}>{p.label}</div>
                            <div style={{ font: "600 12px system-ui", color: "#7a5b00" }}>{p.price} 🪙</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
                <p style={{ color: "#777", fontSize: 12.5, marginBottom: 0 }}>🚧 Binnenkort: nog meer attracties en paden.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

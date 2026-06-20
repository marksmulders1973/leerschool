// ZookwartierGame — pagina-wrapper voor "Mijn Park" (3D verzamel-dierentuin).
// Vast mini-park (paden/draaimolen/poppetje/verblijven) + zelf dieren plaatsen
// (kost muntjes), verplaatsen, of weghalen (muntjes terug). Indeling + muntjes
// bewaard in Supabase. Muntjes verdien je met dagelijks inloggen + kwartier leren.
//
// De zware three.js-scene laadt lazy, zodat de leer-app snel blijft.
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { getDailyGoal } from "../shared/dailyGoal";
import { loadZooState, saveZooState, defaultState, STARTER_LAYOUT } from "../features/zoo/zooState";
import { applyDailyLogin, applyKwartierReward } from "../features/zoo/zooEconomy";

const ZooScene = lazy(() => import("../features/zoo/ZooScene"));

// Wat je kunt plaatsen + de prijs in muntjes. Groeit later met Kenney-dieren/attracties.
const PLAATSBAAR = [{ assetId: "fox", emoji: "🦊", label: "Vos", price: 10 }];
const prijsVan = (assetId) => PLAATSBAAR.find((p) => p.assetId === assetId)?.price ?? 0;

export default function ZookwartierGame({ onHome, userName, authUser }) {
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
  const rewardTimer = useRef(null);
  const meldingTimer = useRef(null);

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
      const base = row
        ? { coins: row.coins, streak: row.streak, last_login: row.last_login, last_kwartier_date: row.last_kwartier_date, owned: row.owned || [] }
        : { coins: d.coins, streak: d.streak, last_login: d.last_login, last_kwartier_date: d.last_kwartier_date, owned: d.owned };
      const layout = Array.isArray(row?.layout) ? row.layout : STARTER_LAYOUT;

      const login = applyDailyLogin(base);
      const kw = applyKwartierReward(login.state, !!getDailyGoal().completed);
      const finalMeta = kw.state;
      const gained = login.gained + kw.gained;

      if (cancel) return;
      setMeta(finalMeta);
      setPlacedItems(layout);
      setLoaded(true);
      if (gained > 0) {
        setReward({ total: gained, login: login.gained, kwartier: kw.gained });
        clearTimeout(rewardTimer.current);
        rewardTimer.current = setTimeout(() => setReward(null), 5000);
      }
      if (userId) saveZooState(userId, { ...finalMeta, layout });
    })();
    return () => { cancel = true; clearTimeout(rewardTimer.current); clearTimeout(meldingTimer.current); };
  }, [userId]);

  // Debounced opslaan na wijzigingen.
  useEffect(() => {
    if (!loaded || !userId || !meta) return;
    const t = setTimeout(() => saveZooState(userId, { ...meta, layout: placedItems }), 2000);
    return () => clearTimeout(t);
  }, [placedItems, meta, loaded, userId]);

  const coins = meta?.coins ?? 0;
  const streak = meta?.streak ?? 0;

  const startKopen = (p) => {
    if (coins < p.price) { flits("Niet genoeg muntjes — leer een kwartier om te sparen!"); return; }
    setSelectedIdx(null);
    setPlacing({ assetId: p.assetId, price: p.price });
  };

  const plaatsOpVakje = (cell) => {
    if (!placing) return;
    // Verplaatsen: bestaand dier naar nieuw vakje.
    if (placing.moveIdx != null) {
      setPlacedItems((items) => items.map((it, i) => (i === placing.moveIdx ? { ...it, cell } : it)));
      setPlacing(null);
      return;
    }
    // Kopen + plaatsen.
    if (coins < placing.price) { flits("Niet genoeg muntjes."); setPlacing(null); return; }
    setMeta((m) => ({ ...m, coins: m.coins - placing.price }));
    setPlacedItems((items) => [...items, { assetId: placing.assetId, cell, rotation: 0, price: placing.price }]);
    // Blijf in koop-modus zolang er muntjes zijn.
    if (coins - placing.price < placing.price) setPlacing(null);
  };

  const verplaatsGeselecteerde = () => {
    if (selectedIdx == null) return;
    const it = placedItems[selectedIdx];
    setPlacing({ assetId: it.assetId, price: it.price ?? prijsVan(it.assetId), moveIdx: selectedIdx });
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

  return (
    <div style={{ position: "fixed", inset: 0, background: "#aaddff", overflow: "hidden" }}>
      {/* Header. */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 10, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px", background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0))", pointerEvents: "none" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ color: "#fff", font: "800 18px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.35)" }}>🐾 {parkNaam}</div>
          <span style={{ font: "800 11px system-ui", color: "#5b3d00", background: "#ffd54a", padding: "3px 9px", borderRadius: 999, boxShadow: "0 2px 6px rgba(0,0,0,.2)", whiteSpace: "nowrap" }}>🚧 In opbouw</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
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
          <div style={{ font: "600 12px system-ui", opacity: 0.75, marginTop: 2 }}>
            {reward.login > 0 ? `Inloggen +${reward.login}` : ""}{reward.login > 0 && reward.kwartier > 0 ? " · " : ""}{reward.kwartier > 0 ? `Kwartier geleerd +${reward.kwartier}` : ""}
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
          placedItems={placedItems}
          onPlace={plaatsOpVakje}
          onSelectPlaced={(idx) => { setPlacing(null); setSelectedIdx(idx); }}
          onClearSelection={() => setSelectedIdx(null)}
          selectedIdx={selectedIdx}
        />
      </Suspense>

      {/* Onderbalk: contextueel. */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10, padding: "12px 14px calc(12px + env(safe-area-inset-bottom))", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, background: "linear-gradient(0deg, rgba(0,0,0,0.22), rgba(0,0,0,0))", flexWrap: "wrap" }}>
        {placing ? (
          <>
            <div style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              {placing.moveIdx != null ? "Tik op een groen vakje om te verplaatsen" : "Tik op een groen vakje om je dier neer te zetten"}
            </div>
            <button onClick={() => setPlacing(null)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}>✓ Klaar</button>
          </>
        ) : selectedIdx != null ? (
          <>
            <span style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>Dier gekozen:</span>
            <button onClick={verplaatsGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>↔ Verplaatsen</button>
            <button onClick={weghaalGeselecteerde} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#d9534f", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}>🗑 Weghalen (+{placedItems[selectedIdx]?.price ?? prijsVan(placedItems[selectedIdx]?.assetId)} 🪙)</button>
            <button onClick={() => setSelectedIdx(null)} style={{ border: "none", borderRadius: 999, padding: "10px 14px", font: "700 13px system-ui", color: "#234", background: "rgba(255,255,255,0.7)", cursor: "pointer" }}>✕</button>
          </>
        ) : (
          <>
            {PLAATSBAAR.map((p) => {
              const kan = coins >= p.price;
              return (
                <button key={p.assetId} onClick={() => startKopen(p)} style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: kan ? "#234" : "#888", background: kan ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.55)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: kan ? "pointer" : "not-allowed" }}>
                  {p.emoji} {p.label} plaatsen ({p.price} 🪙)
                </button>
              );
            })}
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              {placedItems.length} zelf geplaatst · tik een dier aan om te verplaatsen of weg te halen
            </span>
          </>
        )}
      </div>
    </div>
  );
}

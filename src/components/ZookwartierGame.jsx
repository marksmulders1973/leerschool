// ZookwartierGame — pagina-wrapper voor "Mijn Park" (3D verzamel-dierentuin).
// STAP 3 (opslaan + muntjes): de indeling + muntjes worden bewaard in Supabase
// (tabel zoo_state). Je verdient muntjes door dagelijks in te loggen (met
// streak-bonus) en door je kwartier leren af te ronden. Geen gok-mechaniek.
//
// De zware three.js-scene laadt lazy, zodat de leer-app snel blijft.
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { getDailyGoal } from "../shared/dailyGoal";
import { loadZooState, saveZooState, defaultState, STARTER_LAYOUT } from "../features/zoo/zooState";
import { applyDailyLogin, applyKwartierReward } from "../features/zoo/zooEconomy";

const ZooScene = lazy(() => import("../features/zoo/ZooScene"));

// Wat je (voorlopig) kunt plaatsen. Groeit later met Kenney-dieren/attracties.
const PLAATSBAAR = [{ assetId: "fox", emoji: "🦊", label: "Vos" }];

export default function ZookwartierGame({ onHome, userName, authUser }) {
  const naam = (userName || "").trim();
  const parkNaam = naam ? `${naam}'s Park` : "Mijn Park";
  const userId = authUser?.id || null;

  const [meta, setMeta] = useState(null);          // coins, streak, last_login, ...
  const [placedItems, setPlacedItems] = useState(STARTER_LAYOUT);
  const [placingAsset, setPlacingAsset] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [reward, setReward] = useState(null);      // beloning-melding bij binnenkomst
  const rewardTimer = useRef(null);

  // Laden + dagbeloningen bij binnenkomst (één keer per gebruiker-id).
  useEffect(() => {
    let cancel = false;
    (async () => {
      const row = await loadZooState(userId);
      const base = row
        ? { coins: row.coins, streak: row.streak, last_login: row.last_login, last_kwartier_date: row.last_kwartier_date, owned: row.owned || [] }
        : (() => { const d = defaultState(); return { coins: d.coins, streak: d.streak, last_login: d.last_login, last_kwartier_date: d.last_kwartier_date, owned: d.owned }; })();
      const layout = row?.layout?.length ? row.layout : STARTER_LAYOUT;

      // Beloningen toekennen: dagelijks inloggen + (indien behaald) kwartier.
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
      // Direct wegschrijven (zorgt dat de rij bestaat + beloningen vast staan).
      if (userId) saveZooState(userId, { ...finalMeta, layout });
    })();
    return () => { cancel = true; clearTimeout(rewardTimer.current); };
  }, [userId]);

  // Debounced opslaan na wijzigingen (plaatsen).
  useEffect(() => {
    if (!loaded || !userId || !meta) return;
    const t = setTimeout(() => saveZooState(userId, { ...meta, layout: placedItems }), 2000);
    return () => clearTimeout(t);
  }, [placedItems, meta, loaded, userId]);

  const plaatsDier = (cell) => {
    setPlacedItems((items) => [...items, { assetId: placingAsset, cell, rotation: 0 }]);
  };

  const coins = meta?.coins ?? 0;
  const streak = meta?.streak ?? 0;

  return (
    <div style={{ position: "fixed", inset: 0, background: "#aaddff", overflow: "hidden" }}>
      {/* Header: parknaam + in opbouw, en rechts muntjes + terug. */}
      <div
        style={{
          position: "absolute", top: 0, left: 0, right: 0, zIndex: 10,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "12px 16px",
          background: "linear-gradient(180deg, rgba(0,0,0,0.18), rgba(0,0,0,0))",
          pointerEvents: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ color: "#fff", font: "800 18px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.35)" }}>
            🐾 {parkNaam}
          </div>
          <span style={{ font: "800 11px system-ui", color: "#5b3d00", background: "#ffd54a", padding: "3px 9px", borderRadius: 999, boxShadow: "0 2px 6px rgba(0,0,0,.2)", whiteSpace: "nowrap" }}>
            🚧 In opbouw
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ font: "800 14px system-ui", color: "#5b3d00", background: "#ffe08a", padding: "7px 12px", borderRadius: 999, boxShadow: "0 2px 6px rgba(0,0,0,.2)", whiteSpace: "nowrap" }}>
            🪙 {coins}{streak > 1 ? `  ·  🔥${streak}` : ""}
          </span>
          <button
            onClick={onHome}
            style={{ pointerEvents: "auto", border: "none", borderRadius: 999, padding: "8px 16px", font: "700 14px system-ui", color: "#234", background: "rgba(255,255,255,0.92)", boxShadow: "0 2px 8px rgba(0,0,0,.18)", cursor: "pointer" }}
          >
            ← Terug
          </button>
        </div>
      </div>

      {/* Beloning-melding bij binnenkomst. */}
      {reward && (
        <div
          style={{
            position: "absolute", top: 64, left: "50%", transform: "translateX(-50%)", zIndex: 11,
            background: "rgba(255,255,255,0.96)", color: "#234", borderRadius: 14,
            padding: "10px 16px", boxShadow: "0 6px 20px rgba(0,0,0,.25)",
            font: "700 14px system-ui", textAlign: "center", maxWidth: "90%",
          }}
        >
          🎉 +{reward.total} muntjes!
          <div style={{ font: "600 12px system-ui", opacity: 0.75, marginTop: 2 }}>
            {reward.login > 0 ? `Inloggen +${reward.login}` : ""}
            {reward.login > 0 && reward.kwartier > 0 ? " · " : ""}
            {reward.kwartier > 0 ? `Kwartier geleerd +${reward.kwartier}` : ""}
          </div>
        </div>
      )}

      <Suspense
        fallback={
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", color: "#3a5a2a", font: "600 15px system-ui" }}>
            Park laden…
          </div>
        }
      >
        <ZooScene placingAsset={placingAsset} placedItems={placedItems} onPlace={plaatsDier} />
      </Suspense>

      {/* Onderbalk: plaatsen. */}
      <div
        style={{
          position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 10,
          padding: "12px 14px calc(12px + env(safe-area-inset-bottom))",
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
          background: "linear-gradient(0deg, rgba(0,0,0,0.22), rgba(0,0,0,0))",
          flexWrap: "wrap",
        }}
      >
        {placingAsset ? (
          <>
            <div style={{ color: "#fff", font: "700 14px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              Tik op een groen vakje om je dier neer te zetten
            </div>
            <button
              onClick={() => setPlacingAsset(null)}
              style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#fff", background: "#2e7d32", boxShadow: "0 3px 10px rgba(0,0,0,.25)", cursor: "pointer" }}
            >
              ✓ Klaar
            </button>
          </>
        ) : (
          <>
            {PLAATSBAAR.map((p) => (
              <button
                key={p.assetId}
                onClick={() => setPlacingAsset(p.assetId)}
                style={{ border: "none", borderRadius: 999, padding: "10px 18px", font: "800 14px system-ui", color: "#234", background: "rgba(255,255,255,0.95)", boxShadow: "0 3px 10px rgba(0,0,0,.22)", cursor: "pointer" }}
              >
                {p.emoji} {p.label} plaatsen
              </button>
            ))}
            <span style={{ color: "#fff", font: "700 13px system-ui", textShadow: "0 1px 4px rgba(0,0,0,.4)" }}>
              {placedItems.length} {placedItems.length === 1 ? "dier" : "dieren"} in je park
            </span>
          </>
        )}
      </div>
    </div>
  );
}

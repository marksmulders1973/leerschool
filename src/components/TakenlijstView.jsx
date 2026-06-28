import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { taakStatus, takenlijstVoortgang } from "../data/takenlijst.js";

// TakenlijstView — leerling-kant van Brian's takenlijst-idee (2026-06-28).
// Toont het lijstje taken dat de leerkracht klaarzette: "Welkom <naam>! Kies de
// taak die je wilt doen." Elke taak opent een leerpad; afgeronde taken krijgen
// een ✓. Als de hele lijst af is volgt de beloning (naar je park).
//
// "Afgemaakt" komt uit de bestaande learn_progress-tabel (geen vals afvinken).
//
// Props:
//   takenlijst    — { title, intro?, taken:[{id,title,pathId,stepCount}] }
//   userName      — naam van de leerling (key voor learn_progress)
//   onOpenLeerpad — (pathId) => void  (opent het leerpad, met terugkeer hierheen)
//   onPlayReward  — () => void        (naar het park / beloning)
//   onHome        — () => void
export default function TakenlijstView({ takenlijst, userName, onOpenLeerpad, onPlayReward, onHome }) {
  const [progressByPath, setProgressByPath] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (!userName) { setLoaded(true); return; }
      try {
        const { data } = await supabase
          .from("learn_progress")
          .select("learn_path_id, step_idx")
          .eq("player_name", userName);
        if (cancelled) return;
        const grouped = {};
        if (Array.isArray(data)) {
          data.forEach((r) => {
            if (!grouped[r.learn_path_id]) grouped[r.learn_path_id] = new Set();
            grouped[r.learn_path_id].add(r.step_idx);
          });
        }
        setProgressByPath(grouped);
      } catch { /* stil falen — dan staat alles op 'open' */ }
      finally { if (!cancelled) setLoaded(true); }
    })();
    return () => { cancelled = true; };
  }, [userName]);

  const taken = takenlijst?.taken || [];
  const { klaar, totaal, allesAf } = takenlijstVoortgang(takenlijst, progressByPath);

  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg,#0f1729,#162033)", color: "#fff", padding: "24px 16px 96px" }}>
      <div style={{ maxWidth: 560, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "#69f0ae", fontWeight: 700 }}>📋 Taken van de juf/meester</span>
          <button onClick={onHome} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 13, cursor: "pointer" }}>✕ sluiten</button>
        </div>

        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, margin: "6px 0 2px" }}>
          {takenlijst?.title || "Jouw taken"}
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.8)", margin: "0 0 6px" }}>
          {takenlijst?.intro || (userName ? `Hoi ${userName}! Kies een taak om te doen.` : "Kies een taak om te doen.")}
        </p>

        {/* Voortgangsbalk */}
        <div style={{ margin: "10px 0 18px" }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.7)", marginBottom: 5 }}>
            {klaar} van {totaal} taken af
          </div>
          <div style={{ height: 8, borderRadius: 999, background: "rgba(255,255,255,0.12)", overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${totaal ? (klaar / totaal) * 100 : 0}%`, background: "linear-gradient(90deg,#00c853,#69f0ae)", transition: "width 300ms ease" }} />
          </div>
        </div>

        {/* Beloning bij volledige lijst */}
        {loaded && allesAf && (
          <div style={{ background: "linear-gradient(135deg,#00c853,#00897b)", borderRadius: 16, padding: "16px 18px", marginBottom: 16, color: "#06211a" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800 }}>🎉 Alles af — knap gedaan!</div>
            <div style={{ fontSize: 13.5, margin: "4px 0 12px" }}>Je hebt alle taken van het lijstje gedaan. Tijd voor je beloning.</div>
            {onPlayReward && (
              <button onClick={onPlayReward} style={{ background: "#0d1b2e", color: "#fff", border: "none", borderRadius: 10, padding: "10px 18px", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
                🐾 Naar je park →
              </button>
            )}
          </div>
        )}

        {/* Taken */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {taken.map((taak, i) => {
            const status = taakStatus(taak, progressByPath[taak.pathId]);
            const klaarTaak = status === "klaar";
            const bezig = status === "bezig";
            return (
              <button
                key={taak.id || taak.pathId || i}
                onClick={() => onOpenLeerpad?.(taak.pathId)}
                style={{
                  textAlign: "left", cursor: "pointer", width: "100%",
                  background: klaarTaak ? "rgba(0,200,83,0.10)" : "rgba(255,255,255,0.05)",
                  border: `1.5px solid ${klaarTaak ? "rgba(0,200,83,0.45)" : "rgba(255,255,255,0.14)"}`,
                  borderRadius: 14, padding: "14px 16px",
                  display: "flex", alignItems: "center", gap: 12,
                }}
              >
                <span aria-hidden="true" style={{ fontSize: 24, flexShrink: 0 }}>
                  {klaarTaak ? "✅" : bezig ? "⏳" : "📝"}
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 16, color: "#fff" }}>{taak.title}</span>
                  <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 13, color: klaarTaak ? "#69f0ae" : "rgba(255,255,255,0.7)", marginTop: 2 }}>
                    {klaarTaak ? "Afgemaakt — goed bezig!" : bezig ? "Je bent al begonnen — maak 'm af" : "Nog te doen — tik om te starten"}
                  </span>
                </span>
                <span aria-hidden="true" style={{ fontSize: 18, color: klaarTaak ? "#69f0ae" : "rgba(255,255,255,0.55)", flexShrink: 0 }}>
                  {klaarTaak ? "↻" : "→"}
                </span>
              </button>
            );
          })}
          {taken.length === 0 && (
            <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.6)", padding: "20px 0", textAlign: "center" }}>
              Deze takenlijst is nog leeg.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

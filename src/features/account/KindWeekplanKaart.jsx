// 📅 "Vandaag staat klaar" (weekplanner, idee 66, Mark 9 nov 2026). Het kind ziet alleen het kwartier
// van vandaag dat thuis is klaargezet, plus een strookje met de week (groen = gedaan). Geen takenlijst.
// Les → opent het leerpad; "eerste 20 vragen" → een kwartier met die vragen; "Charley kiest" → het gewone
// dagkwartier (de vandaag-motor kiest). Bij het openen haalt de kaart een gemist vinkje in: is het
// kwartier van dit kind vandaag vol, of het klaargezette vragenrondje af, dan gaat de dag op gedaan.
import { useEffect, useState } from "react";
import { track } from "../../utils.js";
import { kwartierStand } from "../vandaag/kwartier.js";
import {
  haalWeekplanVoorKind, vandaagUitPlan, markeerPlanGedaan, maandagVan, weekDagen, vandaagIso, WEEKPLAN_EVENT,
  perDagUitPlan, startsetUit, werkPlanBij,
} from "../../shared/weekplan.js";

/** De startset waarvan dit kind vandaag het klaargezette rondje afmaakte (of null). */
function startsetVanPlanKlaar(player) {
  try {
    const k = kwartierStand();
    const b = k?.klaar ? (k.blokjes || []).find((x) => x?.vanPlan && x.startset) : null;
    return b && String(b.voor || "") === String(player || "") ? b.startset : null;
  } catch { return null; }
}

export default function KindWeekplanKaart({ player, onPickPath, onVandaagKwartier, onStartset }) {
  const [rijen, setRijen] = useState(null);
  useEffect(() => {
    if (!player) return undefined;
    let weg = false;
    const laad = () => haalWeekplanVoorKind(player).then((r) => {
      if (weg) return;
      setRijen(r);
      // Inhalen: werkPlanBij meldt zelf (WEEKPLAN_EVENT) als er iets op gedaan ging → de kaart laadt opnieuw.
      werkPlanBij(player, r, { startsetKlaar: startsetVanPlanKlaar(player) }).catch(() => {});
    }).catch(() => {});
    laad();
    window.addEventListener(WEEKPLAN_EVENT, laad);
    return () => { weg = true; window.removeEventListener(WEEKPLAN_EVENT, laad); };
  }, [player]);

  const dagen = weekDagen(maandagVan(new Date()));
  const perDag = perDagUitPlan(rijen || []);
  const dezeWeek = dagen.some((d) => perDag[d.iso]);
  const item = vandaagUitPlan(rijen || []);
  useEffect(() => {
    if (!dezeWeek) return;
    try { track("planner_kind_toon", { vandaag: item ? item.soort : "vrij", gedaan: item?.gedaan ? 1 : 0 }); } catch { /* */ }
  }, [dezeWeek, item?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!rijen || !dezeWeek) return null;
  const vandaag = vandaagIso();

  const start = () => {
    try { track("planner_kind_start", { soort: item.soort }); } catch { /* */ }
    const set = item.soort === "les" ? startsetUit(item.path_id) : null;
    if (set && onStartset) onStartset(set);
    else if (item.soort === "les" && item.path_id && !String(item.path_id).startsWith("startset:") && onPickPath) onPickPath(item.path_id);
    else if (onVandaagKwartier) onVandaagKwartier();
  };

  return (
    <div style={{
      borderRadius: 18, padding: "14px 14px 12px", marginBottom: "var(--space-4)",
      background: item && !item.gedaan ? "linear-gradient(135deg, #123d2a, #163352)" : "rgba(255,255,255,0.04)",
      border: item && !item.gedaan ? "1.5px solid rgba(105,240,174,0.4)" : "1px solid rgba(255,255,255,0.1)",
      fontFamily: "var(--font-body)", color: "var(--color-text, #e8edf5)",
    }}>
      {item ? (
        <>
          <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase", color: "#69f0ae" }}>
            {item.gedaan ? "Klaar voor vandaag" : "Vandaag staat klaar · van thuis"}
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, color: "#fff", margin: "4px 0 3px" }}>
            {item.soort === "charley" ? "Charley kiest wat je oefent" : item.titel}
          </div>
          <div style={{ fontSize: 13, color: "#a9b6c8", marginBottom: item.gedaan ? 4 : 12 }}>
            {item.gedaan ? "Goed gedaan! Thuis zien ze het vinkje." : "Een kwartier. Daarna ben je klaar voor vandaag."}
          </div>
          {!item.gedaan && (
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <button type="button" onClick={start} style={{
                flex: 1, padding: "12px", borderRadius: 13, border: "none", cursor: "pointer",
                background: "#00c853", color: "#06351f", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800,
              }}>▶ Begin</button>
              {item.soort === "les" && (
                <button type="button" onClick={() => markeerPlanGedaan(item.id, "vinkje", "les").then(() => haalWeekplanVoorKind(player).then(setRijen))}
                  title="Ik heb deze les af" style={{
                    padding: "12px 14px", borderRadius: 13, border: "1.5px solid rgba(255,255,255,0.2)", background: "transparent",
                    color: "#e8edf5", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer",
                  }}>✓ af</button>
              )}
            </div>
          )}
        </>
      ) : (
        <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 2 }}>Vandaag is een vrije dag</div>
      )}
      <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase", color: "#8fa0bb", margin: "12px 0 6px" }}>Jouw week</div>
      <div style={{ display: "flex", gap: 5 }}>
        {dagen.map((d) => {
          const r = perDag[d.iso];
          const nu = d.iso === vandaag;
          return (
            <span key={d.iso} title={r ? (r.soort === "charley" ? "Charley kiest" : r.titel) : "vrij"} style={{
              flex: 1, height: 28, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10.5, fontWeight: 800,
              background: r?.gedaan ? "#00c853" : r ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.03)",
              color: r?.gedaan ? "#06351f" : r ? "#e8edf5" : "#5d6b85",
              outline: nu ? "2px solid #69f0ae" : "none",
            }}>{d.kort}</span>
          );
        })}
      </div>
    </div>
  );
}

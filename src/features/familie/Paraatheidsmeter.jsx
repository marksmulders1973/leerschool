// ══════════════════════════════════════════════════════════════════════
// Doorstroomtoets-paraatheidsmeter — ouder-scherm (Familie-laag, geheim).
// Toont per onderdeel (rekenen/taal/studievaardigheden) een groen/oranje/rood-
// signaal op basis van de mastery-records van het kind. Zie paraatheid.js.
// ══════════════════════════════════════════════════════════════════════
import { useState, useEffect, useMemo } from "react";
import { loadMasteryForPlayer } from "../mastery/mastery.js";
import { berekenParaatheid, STATUS, DEMO_RECORDS } from "./paraatheid.js";
import { FamilieMeer } from "./familieUi.jsx";

function huidigeSpeler() {
  try {
    const u = JSON.parse(localStorage.getItem("ls_user") || "{}");
    return { naam: (u.name || "").trim(), userId: null };
  } catch {
    return { naam: "", userId: null };
  }
}

export default function Paraatheidsmeter({ setPage, playerName = null, userId = null }) {
  const speler = useMemo(() => {
    if (playerName) return { naam: playerName.trim(), userId };
    return huidigeSpeler();
  }, [playerName, userId]);

  const [records, setRecords] = useState(null); // null = laden
  const [demo, setDemo] = useState(false);
  const [geladen, setGeladen] = useState(false);

  useEffect(() => {
    let alive = true;
    if (!speler.naam) {
      // Geen speler bekend → meteen demo tonen zodat de preview iets laat zien.
      setRecords([]);
      setDemo(true);
      setGeladen(true);
      return;
    }
    loadMasteryForPlayer(speler.naam, speler.userId)
      .then((recs) => {
        if (!alive) return;
        setRecords(recs || []);
        // Weinig eigen data → standaard de voorbeeld-modus tonen (preview).
        const totaal = (recs || []).reduce((s, r) => s + (r.attempts || 0), 0);
        if (totaal < 8) setDemo(true);
        setGeladen(true);
      })
      .catch(() => {
        if (!alive) return;
        setRecords([]);
        setDemo(true);
        setGeladen(true);
      });
    return () => { alive = false; };
  }, [speler]);

  const bron = demo ? DEMO_RECORDS : records || [];
  const { onderdelen, samenvatting } = useMemo(() => berekenParaatheid(bron), [bron]);

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "18px 16px 60px" }}>
        <button onClick={() => setPage && setPage(demoBackTarget())} style={linkBtn}>← terug</button>

        <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, margin: 0 }}>
            🚦 Doorstroomtoets-paraatheid
          </h1>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>
            bèta
          </span>
        </div>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.55, marginTop: 6 }}>
          In één blik zien hoe {speler.naam ? speler.naam : "je kind"} ervoor staat per onderdeel. Dit is een
          <b> indicatie</b> op basis van wat er tot nu toe geoefend is — geen voorspelling.
        </p>

        {/* Demo-schakelaar (alleen in preview relevant) */}
        <div style={{ display: "flex", gap: 8, alignItems: "center", margin: "10px 0 6px", fontSize: 13 }}>
          <span style={{ color: "var(--color-text-muted, #8899aa)" }}>Toon:</span>
          <button onClick={() => setDemo(false)} style={pill(!demo)}>eigen gegevens</button>
          <button onClick={() => setDemo(true)} style={pill(demo)}>voorbeeld</button>
        </div>

        {!geladen ? (
          <div style={{ color: "var(--color-text-muted, #8899aa)", marginTop: 20 }}>Meter wordt geladen…</div>
        ) : (
          <>
            {/* Samenvatting */}
            <div style={{ marginTop: 8, padding: "12px 14px", borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", fontSize: 14.5, lineHeight: 1.5 }}>
              {demo && <span style={{ color: "#ffd54f", fontWeight: 700 }}>Voorbeeld · </span>}
              {samenvatting}
            </div>

            {/* Onderdeel-kaarten */}
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 12 }}>
              {onderdelen.map((o) => {
                const st = STATUS[o.status];
                const breedte = o.pct == null ? 0 : Math.max(4, o.pct);
                return (
                  <div key={o.key} style={{ padding: "14px 16px", borderRadius: 14, background: "rgba(255,255,255,0.03)", border: `1px solid ${st.kleur}44` }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800 }}>
                        {o.emoji} {o.label}
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 800, color: st.kleur }}>
                        {st.stip} {st.label}
                      </div>
                    </div>

                    {/* Balk */}
                    <div style={{ marginTop: 10, height: 10, borderRadius: 6, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                      <div style={{ width: `${breedte}%`, height: "100%", background: st.kleur, borderRadius: 6, transition: "width .4s" }} />
                    </div>

                    <div style={{ marginTop: 8, fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.5 }}>
                      {o.zin}
                      {o.status !== "inopbouw" && (
                        <span style={{ color: "rgba(255,255,255,0.4)" }}> · {o.onderwerpen} onderwerp{o.onderwerpen === 1 ? "" : "en"} · {o.pogingen} vragen{o.pct != null ? ` · ${o.pct}% goed` : ""}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actie */}
            <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={() => setPage && setPage("learn-paths-hub")} style={primaryBtn}>📚 Ga oefenen</button>
              <button onClick={() => setPage && setPage("oefenboekje")} style={secondaryBtn}>📄 Maak een oefenboekje</button>
            </div>

            <div style={{ marginTop: 18, fontSize: 12, color: "var(--color-text-muted, #8899aa)", lineHeight: 1.5 }}>
              💛 Bedoeld om je gerust te stellen en te laten zien waar oefenen het meeste helpt — niet om druk te
              zetten. Groen betekent niet "klaar", en rood niet "achter": het is een momentopname van de oefening.
            </div>
          </>
        )}
      </div>
      <FamilieMeer setPage={setPage} huidig="paraatheid" />
    </div>
  );
}

function demoBackTarget() {
  // Terug naar de Familie-hub als die de herkomst was, anders home.
  return "familie";
}

const linkBtn = { background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 };
const primaryBtn = { padding: "12px 22px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#ff6b35,#ff8c42)", color: "#fff", fontSize: 15, fontWeight: 800, cursor: "pointer" };
const secondaryBtn = { padding: "12px 20px", borderRadius: 12, background: "rgba(255,255,255,0.07)", border: "1.5px solid rgba(255,255,255,0.22)", color: "var(--color-text, #e8edf5)", fontSize: 15, fontWeight: 700, cursor: "pointer" };
function pill(aan) {
  return {
    padding: "5px 12px", borderRadius: 20, cursor: "pointer", fontSize: 12.5, fontWeight: 700,
    border: aan ? "1.5px solid #ffd54f" : "1.5px solid rgba(255,255,255,0.18)",
    background: aan ? "rgba(255,213,79,0.14)" : "rgba(255,255,255,0.05)",
    color: aan ? "#ffd54f" : "var(--color-text, #e8edf5)",
  };
}

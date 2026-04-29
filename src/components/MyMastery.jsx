import { useEffect, useState } from "react";
import Header from "./Header.jsx";
import styles from "../styles.js";
import { loadMasteryForPlayer, recommendNextTopic, MASTERY_LABELS } from "../mastery.js";
import { SUBJECTS as SUBJECT_LABELS } from "../shared/subjects.js";

/**
 * MyMastery — voortgangs-pagina.
 *
 * Twee modi:
 *   1. Eigen leerling-zicht: gebruikt `userName` uit App-state.
 *   2. Ouder-zicht (P1.10 deel 2b): als `viewedPlayer` is doorgegeven,
 *      toont het de mastery van die naam met een 'ouder-modus'-banner.
 *      Onderwerpen zijn niet klikbaar — read-only voor de ouder.
 */
export default function MyMastery({ userName, viewedPlayer, onPickPath, onBack, onHome }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const isParentView = !!viewedPlayer;
  const player = (viewedPlayer || userName || "").trim();

  useEffect(() => {
    let cancelled = false;
    if (!player) { setLoading(false); return; }
    (async () => {
      const r = await loadMasteryForPlayer(player);
      if (!cancelled) { setRecords(r); setLoading(false); }
    })();
    return () => { cancelled = true; };
  }, [player]);

  // Groepeer per vak
  const grouped = {};
  records.forEach((r) => {
    const subj = r.path?.subject || "anders";
    if (!grouped[subj]) grouped[subj] = [];
    grouped[subj].push(r);
  });

  const totals = records.reduce((s, r) => {
    s[r.level] = (s[r.level] || 0) + 1;
    return s;
  }, {});
  const recommended = recommendNextTopic(records);

  return (
    <div style={styles.page}>
      <Header
        title={isParentView ? "👨‍👩‍👧 Voortgang" : "📈 Mijn voortgang"}
        subtitle={isParentView ? `Voortgang van ${player}` : (player ? `Hi ${player}` : "Voer eerst een naam in")}
        onBack={onBack}
        onHome={onHome}
      />
      <div style={styles.content}>
        {isParentView && (
          <div
            style={{
              padding: "10px 14px",
              borderRadius: 12,
              background: "rgba(0, 212, 255, 0.10)",
              border: "1px solid rgba(0, 212, 255, 0.40)",
              color: "#80deea",
              fontFamily: "var(--font-body, 'Nunito')",
              fontSize: 13,
              marginBottom: 14,
              textAlign: "center",
            }}
          >
            👀 <strong>Ouder-zicht</strong> — alleen lezen, je kunt zelf geen oefening starten.
          </div>
        )}
        {!player && (
          <div style={info()}>
            {isParentView
              ? "Geen leerling-naam in URL. Geef bv. ?leerling=Sara mee."
              : "Vul eerst je naam in (op de startpagina) om je voortgang bij te houden."}
          </div>
        )}

        {player && loading && (
          <div style={info()}>Voortgang laden…</div>
        )}

        {player && !loading && records.length === 0 && (
          <div style={info()}>
            Nog geen voortgang. Maak eerst een paar toetsvragen — daarna verschijnt
            hier per onderwerp je niveau (🥉 brons → 🥈 zilver → 🥇 goud).
          </div>
        )}

        {player && !loading && records.length > 0 && (
          <>
            {/* Totalen */}
            <div style={{
              display: "flex", gap: 8, marginBottom: 18,
              padding: "12px 14px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.10)",
            }}>
              {["gold", "silver", "bronze", "unmeasured"].map((lvl) => {
                const meta = MASTERY_LABELS[lvl];
                const n = totals[lvl] || 0;
                return (
                  <div key={lvl} style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ fontSize: 22 }}>{meta.emoji}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: meta.color, fontFamily: "Fredoka" }}>{n}</div>
                    <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>{meta.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Aanbeveling */}
            {recommended && onPickPath && !isParentView && (
              <button
                onClick={() => onPickPath(recommended.pathId)}
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  marginBottom: 18,
                  borderRadius: 14,
                  border: "none",
                  cursor: "pointer",
                  background: "linear-gradient(135deg, #00c853, #00a040)",
                  color: "#fff",
                  fontFamily: "Fredoka",
                  fontSize: 14,
                  fontWeight: 700,
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  boxShadow: "0 4px 16px rgba(0,200,83,0.30)",
                }}
              >
                <span style={{ fontSize: 28 }}>{recommended.path.emoji || "📚"}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 11, opacity: 0.85 }}>Voortbouwen op:</div>
                  <div style={{ fontSize: 16 }}>{recommended.path.title}</div>
                  <div style={{ fontSize: 11, opacity: 0.9, marginTop: 2 }}>
                    {MASTERY_LABELS[recommended.level].emoji} {MASTERY_LABELS[recommended.level].label} —
                    {recommended.attempts > 0 ? ` ${recommended.correct}/${recommended.attempts} (${Math.round(recommended.correct / recommended.attempts * 100)}%)` : ""}
                  </div>
                </div>
                <span style={{ fontSize: 18 }}>›</span>
              </button>
            )}

            {/* Per vak */}
            {Object.entries(grouped).map(([subj, list]) => {
              const meta = SUBJECT_LABELS[subj] || { title: subj, emoji: "📘" };
              return (
                <div key={subj} style={{ marginBottom: 18 }}>
                  <div style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "8px 4px 10px",
                    fontFamily: "Fredoka", fontSize: 16, fontWeight: 700, color: "#e0e6f0",
                  }}>
                    <span style={{ fontSize: 20 }}>{meta.emoji}</span>
                    <span>{meta.title}</span>
                    <span style={{ color: "#8899aa", fontSize: 12, fontWeight: 500 }}>
                      · {list.length} {list.length === 1 ? "onderwerp" : "onderwerpen"}
                    </span>
                  </div>

                  {list.map((r) => {
                    const meta = MASTERY_LABELS[r.level];
                    const pct = r.attempts > 0 ? Math.round((r.correct / r.attempts) * 100) : 0;
                    return (
                      <button
                        key={r.pathId}
                        onClick={() => !isParentView && onPickPath && onPickPath(r.pathId)}
                        disabled={isParentView}
                        style={{
                          width: "100%",
                          marginBottom: 8,
                          padding: "12px 14px",
                          borderRadius: 12,
                          border: `1px solid ${meta.color}40`,
                          background: "rgba(30,45,70,0.55)",
                          color: "#e0e6f0",
                          fontFamily: "Nunito",
                          cursor: "pointer",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                        }}
                      >
                        <span style={{ fontSize: 22 }}>{meta.emoji}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 14, fontWeight: 700 }}>{r.path.title}</div>
                          <div style={{ fontSize: 11, color: "#8899aa", marginTop: 2 }}>
                            {meta.label} — {r.correct}/{r.attempts} ({pct}%)
                          </div>
                        </div>
                        <span style={{ color: "#8899aa", fontSize: 16 }}>›</span>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

function info() {
  return {
    padding: "16px 18px",
    borderRadius: 14,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.10)",
    fontSize: 13,
    color: "rgba(255,255,255,0.78)",
    lineHeight: 1.5,
  };
}

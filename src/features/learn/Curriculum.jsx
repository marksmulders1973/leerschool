import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { ALL_LEARN_PATHS } from "../../learnPaths";
import { CURRICULA, curriculumNextStep, curriculumTotalSteps } from "../../curricula";

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  good: "#00c853",
  warm: "#ffd54f",
  accent: "#5b86b8",
};

export default function Curriculum({ curriculumId, userName, onPickStep, onHome, onBack }) {
  const player = (userName || "Speler").trim() || "Speler";
  const curriculum = CURRICULA[curriculumId];
  const [progressByPath, setProgressByPath] = useState({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase
          .from("learn_progress")
          .select("learn_path_id, step_idx")
          .eq("player_name", player);
        if (cancelled) return;
        const grouped = {};
        if (Array.isArray(data)) {
          data.forEach((r) => {
            if (!grouped[r.learn_path_id]) grouped[r.learn_path_id] = new Set();
            grouped[r.learn_path_id].add(r.step_idx);
          });
        }
        setProgressByPath(grouped);
      } catch (e) {
        // stil falen
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [player]);

  if (!curriculum) {
    return (
      <div style={pageStyle()}>
        <Header onBack={onBack} onHome={onHome} title="Curriculum" emoji="📚" />
        <div style={{ padding: 24, color: C.text }}>
          <p>Curriculum niet gevonden.</p>
          <button onClick={onHome} style={btnSecondary()}>Terug naar home</button>
        </div>
      </div>
    );
  }

  const totalSteps = curriculumTotalSteps(curriculumId);
  const totalDone = curriculum.phases
    .flatMap((p) => p.pathIds)
    .reduce((sum, pid) => sum + (progressByPath[pid]?.size || 0), 0);
  const totalPct = totalSteps ? Math.round((totalDone / totalSteps) * 100) : 0;
  const next = curriculumNextStep(curriculumId, progressByPath);
  const allDone = next === null && totalDone > 0;

  return (
    <div style={pageStyle()}>
      <Header onBack={onBack} onHome={onHome} title={curriculum.title} emoji={curriculum.emoji} />

      <div style={{ padding: "16px 18px 8px" }}>
        <p style={{ color: C.text, fontSize: 14, lineHeight: 1.5, margin: "4px 0 14px" }}>
          {curriculum.intro}
        </p>

        {loaded && totalDone > 0 && (
          <div style={{ ...cardBase(), marginBottom: 14, padding: "10px 14px" }}>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>
              Voortgang in dit curriculum
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: C.text }}>
              <span>{totalDone} van {totalSteps} stappen voltooid</span>
              <span>{totalPct}%</span>
            </div>
            <div style={{ height: 8, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${totalPct}%`,
                  background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
                  transition: "width 0.4s",
                }}
              />
            </div>
          </div>
        )}

        {loaded && next && (
          <button
            onClick={() => onPickStep(next.pathId, next.stepIdx)}
            style={continueBtn()}
          >
            <span style={{ fontSize: 22, marginRight: 8 }}>▶</span>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={{ fontSize: 12, opacity: 0.85 }}>
                {totalDone === 0 ? "Begin met" : "Doorgaan met"}
              </div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>
                {ALL_LEARN_PATHS[next.pathId]?.emoji} {ALL_LEARN_PATHS[next.pathId]?.title}
                <span style={{ opacity: 0.85, fontWeight: 500 }}> · stap {next.stepIdx + 1}</span>
              </div>
            </div>
            <span style={{ fontSize: 18 }}>›</span>
          </button>
        )}

        {loaded && allDone && (
          <div style={{ ...cardBase(), border: `2px solid ${C.good}`, padding: 16, marginBottom: 14, textAlign: "center" }}>
            <div style={{ fontSize: 38, marginBottom: 4 }}>🏆</div>
            <div style={{ fontWeight: 700, color: C.good, fontSize: 16, marginBottom: 4 }}>
              Curriculum voltooid!
            </div>
            <div style={{ fontSize: 13, color: C.muted }}>
              Knap gedaan — alle {totalSteps} stappen achter de rug.
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: "0 14px 32px" }}>
        {curriculum.phases.map((phase, phaseIdx) => {
          const phasePathIds = phase.pathIds;
          const phaseTotal = phasePathIds.reduce(
            (sum, pid) => sum + (ALL_LEARN_PATHS[pid]?.steps.length || 0),
            0
          );
          const phaseDone = phasePathIds.reduce(
            (sum, pid) => sum + (progressByPath[pid]?.size || 0),
            0
          );
          const phasePct = phaseTotal ? Math.round((phaseDone / phaseTotal) * 100) : 0;
          const phaseComplete = phaseTotal > 0 && phaseDone === phaseTotal;

          return (
            <div key={phaseIdx} style={{ marginBottom: 22 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 6px 12px",
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: 16,
                  color: C.text,
                  fontWeight: 700,
                }}
              >
                <span style={{ fontSize: 22 }}>{phase.emoji}</span>
                <span style={{ flex: 1 }}>
                  Fase {phaseIdx + 1}: {phase.title}
                  {phaseComplete && <span style={{ fontSize: 14, marginLeft: 8 }}>✅</span>}
                </span>
                <span style={{ color: C.muted, fontSize: 12, fontWeight: 500 }}>
                  {phaseDone}/{phaseTotal} · {phasePct}%
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 10, position: "relative" }}>
                {phasePathIds.map((pid, pi) => {
                  const path = ALL_LEARN_PATHS[pid];
                  if (!path) {
                    return (
                      <div key={pid} style={{ ...cardBase(), padding: 12, color: C.muted, fontSize: 13 }}>
                        ⚠ Leerpad "{pid}" niet gevonden
                      </div>
                    );
                  }
                  const done = progressByPath[pid]?.size || 0;
                  const total = path.steps.length;
                  const pct = total ? Math.round((done / total) * 100) : 0;
                  const isStarted = done > 0;
                  const isComplete = done >= total;
                  const isNext = next?.pathId === pid;

                  return (
                    <div key={pid} style={{ position: "relative" }}>
                      {/* Connector-lijn naar vorige */}
                      {pi > 0 && (
                        <div
                          style={{
                            position: "absolute",
                            top: -10,
                            left: 32,
                            width: 2,
                            height: 10,
                            background: isComplete || isStarted ? C.good : C.border,
                          }}
                        />
                      )}
                      <button
                        onClick={() => onPickStep(pid, isStarted && !isComplete ? findFirstUnfinished(path, progressByPath[pid]) : 0)}
                        style={pathRow(isNext, isComplete)}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 12,
                            background: isComplete ? C.good : isStarted ? C.warm : C.accent,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 22,
                            flexShrink: 0,
                            boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          {isComplete ? "✅" : path.emoji}
                        </div>
                        <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                            <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, color: "#fff", fontWeight: 700 }}>
                              {path.title}
                            </span>
                            {isNext && (
                              <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 6px", background: C.warm, color: "#1a0008", borderRadius: 999 }}>
                                NU
                              </span>
                            )}
                          </div>
                          <div style={{ fontSize: 11, color: C.muted, marginBottom: isStarted ? 5 : 0 }}>
                            {total} stappen · {path.chapters?.length || 0} hoofdstukken
                          </div>
                          {isStarted && (
                            <div>
                              <div style={{ height: 4, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
                                <div
                                  style={{
                                    height: "100%",
                                    width: `${pct}%`,
                                    background: isComplete ? C.good : `linear-gradient(90deg, ${C.warm}, ${C.good})`,
                                    transition: "width 0.4s",
                                  }}
                                />
                              </div>
                              <div style={{ fontSize: 10, color: isComplete ? C.good : C.warm, marginTop: 2, fontWeight: 700 }}>
                                {done}/{total} · {pct}%
                              </div>
                            </div>
                          )}
                        </div>
                        <span style={{ color: C.muted, fontSize: 18 }}>›</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <button onClick={onBack || onHome} style={{ ...btnSecondary(), marginTop: 8 }}>
          ← Terug naar leerpaden
        </button>
      </div>
    </div>
  );
}

function findFirstUnfinished(path, doneSet) {
  if (!doneSet) return 0;
  for (let i = 0; i < path.steps.length; i++) {
    if (!doneSet.has(i)) return i;
  }
  return 0;
}

function Header({ onBack, onHome, title, emoji }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 18px",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <button
        onClick={onBack || onHome}
        style={{ border: "none", background: "transparent", color: C.text, fontSize: 22, cursor: "pointer", padding: 6 }}
      >
        ←
      </button>
      <div style={{ fontSize: 22 }}>{emoji}</div>
      <div style={{ flex: 1, fontFamily: "'Fredoka', sans-serif", fontSize: 18, color: "#fff" }}>{title}</div>
      <button
        onClick={onHome}
        style={{ border: "none", background: "transparent", color: C.text, fontSize: 22, cursor: "pointer", padding: 6 }}
      >
        🏠
      </button>
    </div>
  );
}

// ─── stijlen ─────────────────────────────────────────
function pageStyle() {
  return {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #0f1729 0%, #162033 50%, #1a2744 100%)",
    color: C.text,
    fontFamily: "'Nunito', sans-serif",
  };
}

function cardBase() {
  return {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    padding: 12,
  };
}

function continueBtn() {
  return {
    width: "100%",
    display: "flex",
    alignItems: "center",
    border: "none",
    borderRadius: 14,
    padding: "14px 16px",
    color: "#fff",
    fontFamily: "'Nunito', sans-serif",
    cursor: "pointer",
    marginBottom: 14,
    background: `linear-gradient(135deg, ${C.good}, #00a040)`,
    boxShadow: "0 4px 16px rgba(0,200,83,0.3)",
  };
}

function pathRow(isNext, isComplete) {
  return {
    background: isNext ? "rgba(255,213,79,0.08)" : C.card,
    border: `1px solid ${isNext ? C.warm : isComplete ? C.good : C.border}`,
    borderRadius: 14,
    padding: 12,
    cursor: "pointer",
    transition: "transform 0.2s, border-color 0.2s",
    fontFamily: "'Nunito', sans-serif",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
  };
}

function btnSecondary() {
  return {
    width: "100%",
    padding: "12px 18px",
    border: `2px solid ${C.border}`,
    borderRadius: 14,
    background: "transparent",
    color: C.text,
    fontWeight: 700,
    fontSize: 15,
    fontFamily: "'Fredoka', sans-serif",
    cursor: "pointer",
  };
}

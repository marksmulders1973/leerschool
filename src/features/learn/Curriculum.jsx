import { useState, useEffect } from "react";
import supabase from "../../supabase";
import { ALL_LEARN_PATHS } from "../../learnPaths";
import { CURRICULA, curriculumNextStep, curriculumTotalSteps } from "../../curricula";
import HeaderShared from "../../components/Header.jsx";
import Button from "../../shared/ui/Button.jsx";
import Card from "../../shared/ui/Card.jsx";

// Curriculum-runner: toont fasen → leerpaden → volgende-stap-CTA.
// Design-system v1: tokens + Card/Button + gedeelde Header.

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
      } catch {
        // stil falen
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => { cancelled = true; };
  }, [player]);

  if (!curriculum) {
    return (
      <div style={pageStyle}>
        <HeaderShared title="Curriculum" subtitle="Niet gevonden" onBack={onBack} onHome={onHome} />
        <div style={{ padding: "var(--space-5)" }}>
          <p style={{ color: "var(--color-text)", marginBottom: "var(--space-3)" }}>
            Curriculum niet gevonden.
          </p>
          <Button variant="ghost" fullWidth onClick={onHome}>
            Terug naar home
          </Button>
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
    <div style={pageStyle}>
      <HeaderShared
        title={`${curriculum.emoji || "📚"} ${curriculum.title}`}
        subtitle={curriculum.intro}
        onBack={onBack}
        onHome={onHome}
      />

      <div style={{ padding: "var(--space-3) var(--space-4) var(--space-2)" }}>
        {loaded && totalDone > 0 && (
          <Card variant="ghost" padding="sm" style={{ marginBottom: "var(--space-4)" }}>
            <div
              style={{
                fontSize: "var(--font-size-xs)",
                color: "var(--color-text-muted)",
                marginBottom: 4,
              }}
            >
              Voortgang in dit curriculum
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 6,
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text)",
              }}
            >
              <span>{totalDone} van {totalSteps} stappen voltooid</span>
              <span>{totalPct}%</span>
            </div>
            <div style={progressTrack}>
              <div
                style={{
                  ...progressFill,
                  width: `${totalPct}%`,
                  background:
                    "linear-gradient(90deg, var(--color-brand-primary), var(--color-warning))",
                }}
              />
            </div>
          </Card>
        )}

        {loaded && next && (
          <button
            type="button"
            onClick={() => onPickStep(next.pathId, next.stepIdx)}
            style={continueBtn}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
          >
            <span style={{ fontSize: 22, marginRight: 8 }} aria-hidden="true">▶</span>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.85 }}>
                {totalDone === 0 ? "Begin met" : "Doorgaan met"}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "var(--font-weight-bold)",
                  fontSize: "var(--font-size-md)",
                }}
              >
                {ALL_LEARN_PATHS[next.pathId]?.emoji} {ALL_LEARN_PATHS[next.pathId]?.title}
                <span style={{ opacity: 0.85, fontWeight: 500 }}> · stap {next.stepIdx + 1}</span>
              </div>
            </div>
            <span style={{ fontSize: 18 }} aria-hidden="true">›</span>
          </button>
        )}

        {loaded && allDone && (
          <Card
            variant="exercise"
            padding="md"
            style={{
              borderColor: "var(--color-brand-primary)",
              marginBottom: "var(--space-4)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 38, marginBottom: 4 }} aria-hidden="true">🏆</div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--color-brand-primary)",
                fontSize: "var(--font-size-lg)",
                marginBottom: 4,
              }}
            >
              Curriculum voltooid!
            </div>
            <div style={{ fontSize: "var(--font-size-sm)", color: "var(--color-text-muted)" }}>
              Knap gedaan — alle {totalSteps} stappen achter de rug.
            </div>
          </Card>
        )}
      </div>

      <div style={{ padding: "0 var(--space-3) var(--space-6)" }}>
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
            <div key={phaseIdx} style={{ marginBottom: "var(--space-5)" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-2)",
                  padding: "var(--space-2) var(--space-1) var(--space-3)",
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--font-size-lg)",
                  color: "var(--color-text)",
                  fontWeight: "var(--font-weight-bold)",
                }}
              >
                <span style={{ fontSize: 22 }} aria-hidden="true">{phase.emoji}</span>
                <span style={{ flex: 1 }}>
                  Fase {phaseIdx + 1}: {phase.title}
                  {phaseComplete && <span style={{ fontSize: 14, marginLeft: 8 }}>✅</span>}
                </span>
                <span
                  style={{
                    color: "var(--color-text-muted)",
                    fontSize: "var(--font-size-xs)",
                    fontWeight: 500,
                  }}
                >
                  {phaseDone}/{phaseTotal} · {phasePct}%
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)", position: "relative" }}>
                {phasePathIds.map((pid, pi) => {
                  const path = ALL_LEARN_PATHS[pid];
                  if (!path) {
                    return (
                      <Card key={pid} variant="ghost" padding="sm" style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>
                        ⚠ Leerpad "{pid}" niet gevonden
                      </Card>
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
                          aria-hidden="true"
                          style={{
                            position: "absolute",
                            top: -10,
                            left: 32,
                            width: 2,
                            height: 10,
                            background:
                              isComplete || isStarted
                                ? "var(--color-brand-primary)"
                                : "var(--color-border)",
                          }}
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => onPickStep(pid, isStarted && !isComplete ? findFirstUnfinished(path, progressByPath[pid]) : 0)}
                        style={pathRow(isNext, isComplete)}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: "var(--radius-md)",
                            background: isComplete
                              ? "var(--color-brand-primary)"
                              : isStarted
                                ? "var(--color-warning)"
                                : "var(--color-brand-secondary)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 22,
                            flexShrink: 0,
                            boxShadow: "var(--shadow-sm)",
                          }}
                          aria-hidden="true"
                        >
                          {isComplete ? "✅" : path.emoji}
                        </div>
                        <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                            <span
                              style={{
                                fontFamily: "var(--font-display)",
                                fontSize: "var(--font-size-md)",
                                color: "var(--color-text-strong)",
                                fontWeight: "var(--font-weight-bold)",
                              }}
                            >
                              {path.title}
                            </span>
                            {isNext && (
                              <span
                                style={{
                                  fontSize: 10,
                                  fontWeight: "var(--font-weight-bold)",
                                  padding: "2px 6px",
                                  background: "var(--color-warning)",
                                  color: "var(--color-bg-base)",
                                  borderRadius: "var(--radius-pill)",
                                }}
                              >
                                NU
                              </span>
                            )}
                          </div>
                          <div
                            style={{
                              fontSize: "var(--font-size-xs)",
                              color: "var(--color-text-muted)",
                              marginBottom: isStarted ? 5 : 0,
                            }}
                          >
                            {total} stappen · {path.chapters?.length || 0} hoofdstukken
                          </div>
                          {isStarted && (
                            <div>
                              <div style={{ ...progressTrack, height: 4 }}>
                                <div
                                  style={{
                                    ...progressFill,
                                    width: `${pct}%`,
                                    background: isComplete
                                      ? "var(--color-brand-primary)"
                                      : "linear-gradient(90deg, var(--color-warning), var(--color-brand-primary))",
                                  }}
                                />
                              </div>
                              <div
                                style={{
                                  fontSize: 10,
                                  color: isComplete
                                    ? "var(--color-brand-primary)"
                                    : "var(--color-warning)",
                                  marginTop: 2,
                                  fontWeight: "var(--font-weight-bold)",
                                }}
                              >
                                {done}/{total} · {pct}%
                              </div>
                            </div>
                          )}
                        </div>
                        <span
                          style={{ color: "var(--color-text-muted)", fontSize: 18 }}
                          aria-hidden="true"
                        >
                          ›
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        <Button variant="ghost" fullWidth onClick={onBack || onHome} style={{ marginTop: "var(--space-2)" }}>
          ← Terug naar leerpaden
        </Button>
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

// ─── styling ──────────────────────────────────────────
const pageStyle = {
  minHeight: "100vh",
  background:
    "linear-gradient(160deg, var(--color-bg-base), var(--color-bg-surface) 50%, var(--color-bg-elevated))",
  color: "var(--color-text)",
  fontFamily: "var(--font-body)",
};

const progressTrack = {
  height: 8,
  background: "var(--color-bg-elevated)",
  borderRadius: "var(--radius-pill)",
  overflow: "hidden",
};

const progressFill = {
  height: "100%",
  transition: "width var(--motion-slow) var(--ease-out)",
};

const continueBtn = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  border: "1px solid var(--color-brand-primary-700)",
  borderRadius: "var(--radius-md)",
  padding: "var(--space-3) var(--space-4)",
  color: "var(--color-text-strong)",
  fontFamily: "var(--font-body)",
  cursor: "pointer",
  marginBottom: "var(--space-4)",
  background:
    "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-700))",
  boxShadow: "var(--shadow-md)",
  transition: "transform var(--motion-fast) var(--ease-out)",
};

function pathRow(isNext, isComplete) {
  return {
    background: isNext ? "rgba(255, 183, 77, 0.08)" : "var(--color-bg-glass)",
    border: `1px solid ${
      isNext
        ? "var(--color-warning)"
        : isComplete
          ? "var(--color-brand-primary)"
          : "var(--color-border)"
    }`,
    borderRadius: "var(--radius-md)",
    padding: "var(--space-3)",
    cursor: "pointer",
    transition: "transform var(--motion-fast), border-color var(--motion-fast)",
    fontFamily: "var(--font-body)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "var(--space-3)",
    minHeight: "var(--tap-target-min)",
  };
}

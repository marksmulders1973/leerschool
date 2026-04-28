import { useState, useEffect } from "react";
import supabase from "../supabase";
import { ALL_LEARN_PATHS } from "../learnPaths";
import { CURRICULA, curriculumTotalSteps } from "../curricula";

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  cardHover: "rgba(40,60,90,0.8)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  good: "#00c853",
  warm: "#ffd54f",
  accent: "#5b86b8",
};

// Per pad een gradient + accent-kleur (voor visuele herkenning)
const PATH_THEMES = {
  breuken: { gradient: "linear-gradient(135deg, #ff8a65, #d84315)", accent: "#ffccbc" },
  procenten: { gradient: "linear-gradient(135deg, #66bb6a, #2e7d32)", accent: "#a5d6a7" },
  "negatieve-getallen": { gradient: "linear-gradient(135deg, #455a64, #263238)", accent: "#90a4ae" },
  verhoudingen: { gradient: "linear-gradient(135deg, #ab47bc, #6a1b9a)", accent: "#ce93d8" },
  parabolen: { gradient: "linear-gradient(135deg, #00c853, #00a040)", accent: "#69f0ae" },
  ruimtemeetkunde: { gradient: "linear-gradient(135deg, #00a8c8, #007a96)", accent: "#80deea" },
  "kwadraten-wortels": { gradient: "linear-gradient(135deg, #9c27b0, #6a1b9a)", accent: "#ce93d8" },
  pythagoras: { gradient: "linear-gradient(135deg, #ff7043, #d84315)", accent: "#ffab91" },
  "kwadratische-vergelijkingen": { gradient: "linear-gradient(135deg, #ffd54f, #f9a825)", accent: "#fff59d" },
  "lineaire-formules": { gradient: "linear-gradient(135deg, #1976d2, #0d47a1)", accent: "#90caf9" },
  "rekenen-met-letters": { gradient: "linear-gradient(135deg, #00897b, #00695c)", accent: "#80cbc4" },
  "vlakke-figuren": { gradient: "linear-gradient(135deg, #ec407a, #ad1457)", accent: "#f48fb1" },
  goniometrie: { gradient: "linear-gradient(135deg, #c62828, #7f0000)", accent: "#ef9a9a" },
  statistiek: { gradient: "linear-gradient(135deg, #00bcd4, #006064)", accent: "#80deea" },
  werkwoordsvervoeging: { gradient: "linear-gradient(135deg, #00e676, #00a040)", accent: "#b9f6ca" },
  argumentatieleer: { gradient: "linear-gradient(135deg, #5e35b1, #311b92)", accent: "#b39ddb" },
  schrijfvaardigheid: { gradient: "linear-gradient(135deg, #1976d2, #0d47a1)", accent: "#90caf9" },
  tekstanalyse: { gradient: "linear-gradient(135deg, #00897b, #004d40)", accent: "#80cbc4" },
  literatuurgeschiedenis: { gradient: "linear-gradient(135deg, #bf8f30, #6d4c1d)", accent: "#ffd54f" },
  spelling: { gradient: "linear-gradient(135deg, #26a69a, #00695c)", accent: "#80cbc4" },
  zinsontleding: { gradient: "linear-gradient(135deg, #7e57c2, #4527a0)", accent: "#b39ddb" },
  coordinatenstelsel: { gradient: "linear-gradient(135deg, #43a047, #1b5e20)", accent: "#a5d6a7" },
  "vergelijkingen-oplossen": { gradient: "linear-gradient(135deg, #ffb300, #e65100)", accent: "#ffe082" },
  machten: { gradient: "linear-gradient(135deg, #5e35b1, #311b92)", accent: "#b39ddb" },
  stelsels: { gradient: "linear-gradient(135deg, #d81b60, #880e4f)", accent: "#f48fb1" },
};

const SUBJECT_LABELS = {
  wiskunde: { title: "Wiskunde", emoji: "🧮" },
  taal: { title: "Nederlands", emoji: "📖" },
  engels: { title: "Engels", emoji: "🇬🇧" },
  natuur: { title: "Natuur & Techniek", emoji: "🔬" },
};

export default function LearnPathsHub({ userName, authUser, onPickPath, onPickCurriculum, onHome, onBack }) {
  const player = (userName || "Speler").trim() || "Speler";
  const [progressByPath, setProgressByPath] = useState({});
  const [loaded, setLoaded] = useState(false);

  // Voortgang voor alle paden in één query
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

  const paths = Object.values(ALL_LEARN_PATHS);

  // Groepeer per vak
  const grouped = {};
  paths.forEach((p) => {
    const subj = p.subject || "wiskunde";
    if (!grouped[subj]) grouped[subj] = [];
    grouped[subj].push(p);
  });

  // Vind onafgemaakt pad voor "doorgaan"-banner
  const continuePath = (() => {
    for (const path of paths) {
      const done = progressByPath[path.id];
      if (done && done.size > 0 && done.size < path.steps.length) {
        return path;
      }
    }
    return null;
  })();

  const totalCompleted = Object.values(progressByPath).reduce((sum, s) => sum + s.size, 0);
  const totalSteps = paths.reduce((sum, p) => sum + p.steps.length, 0);

  return (
    <div style={pageStyle()}>
      <Header onBack={onBack || onHome} onHome={onHome} title="Leerpaden" emoji="📚" />

      <div style={{ padding: "16px 18px 8px" }}>
        <p style={{ color: C.muted, fontSize: 14, lineHeight: 1.5, margin: "4px 0 14px" }}>
          Kies een onderwerp om vanaf de basis op te bouwen — uitleg, plaatjes en mini-toetsen per stap. Je voortgang blijft bewaard.
        </p>

        {loaded && totalCompleted > 0 && (
          <div style={{ ...cardBase(), marginBottom: 14, padding: "10px 14px" }}>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>
              Totaal voortgang
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: C.text }}>
              <span>{totalCompleted} van {totalSteps} stappen voltooid</span>
              <span>{Math.round((totalCompleted / totalSteps) * 100)}%</span>
            </div>
            <div style={{ height: 6, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
              <div
                style={{
                  height: "100%",
                  width: `${(totalCompleted / totalSteps) * 100}%`,
                  background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
                  transition: "width 0.4s",
                }}
              />
            </div>
          </div>
        )}

        {loaded && continuePath && (
          <button
            onClick={() => onPickPath(continuePath.id)}
            style={{
              ...continueBtn(),
              background: PATH_THEMES[continuePath.id]?.gradient || `linear-gradient(135deg, ${C.good}, #00a040)`,
            }}
          >
            <span style={{ fontSize: 22, marginRight: 8 }}>▶</span>
            <div style={{ textAlign: "left", flex: 1 }}>
              <div style={{ fontSize: 12, opacity: 0.85 }}>Doorgaan waar je was</div>
              <div style={{ fontWeight: 700, fontSize: 15 }}>{continuePath.emoji} {continuePath.title}</div>
            </div>
            <span style={{ fontSize: 18 }}>›</span>
          </button>
        )}
      </div>

      {onPickCurriculum && Object.keys(CURRICULA).length > 0 && (
        <div style={{ padding: "4px 14px 8px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 4px 12px",
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 16,
              color: C.text,
              fontWeight: 700,
            }}
          >
            <span style={{ fontSize: 20 }}>🎓</span>
            <span>Hele leerlijn — per klas</span>
          </div>
          <div className="lp-grid" style={{ marginBottom: 18 }}>
            {Object.values(CURRICULA).map((cur) => {
              const allPathIds = cur.phases.flatMap((p) => p.pathIds);
              const total = curriculumTotalSteps(cur.id);
              const done = allPathIds.reduce(
                (s, pid) => s + (progressByPath[pid]?.size || 0),
                0
              );
              const pct = total ? Math.round((done / total) * 100) : 0;
              const isStarted = done > 0;
              const isComplete = done >= total && total > 0;
              return (
                <button
                  key={cur.id}
                  onClick={() => onPickCurriculum(cur.id)}
                  style={curriculumCard(isComplete)}
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      background: isComplete
                        ? `linear-gradient(135deg, ${C.good}, #00a040)`
                        : `linear-gradient(135deg, ${C.warm}, #f9a825)`,
                      color: isComplete ? "#fff" : "#1a0008",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                      flexShrink: 0,
                      boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    {cur.emoji}
                  </div>
                  <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                      <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: "#fff", fontWeight: 700 }}>
                        {cur.title}
                      </span>
                      {isComplete && <span style={{ fontSize: 14 }}>✅</span>}
                    </div>
                    <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.4, marginBottom: isStarted ? 5 : 0 }}>
                      {allPathIds.length} leerpaden · {total} stappen totaal
                    </div>
                    {isStarted && (
                      <div>
                        <div style={{ height: 4, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
                          <div
                            style={{
                              height: "100%",
                              width: `${pct}%`,
                              background: `linear-gradient(90deg, ${C.warm}, ${C.good})`,
                              transition: "width 0.4s",
                            }}
                          />
                        </div>
                        <div style={{ fontSize: 11, color: C.warm, marginTop: 3, fontWeight: 700 }}>
                          {done}/{total} · {pct}%
                        </div>
                      </div>
                    )}
                  </div>
                  <span style={{ color: C.muted, fontSize: 18 }}>›</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ padding: "0 14px 32px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 4px 12px",
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 16,
            color: C.text,
            fontWeight: 700,
          }}
        >
          <span style={{ fontSize: 20 }}>🎯</span>
          <span>Of kies een los onderwerp</span>
        </div>
        {Object.entries(grouped).map(([subject, pathList]) => {
          const meta = SUBJECT_LABELS[subject] || { title: subject, emoji: "📘" };
          return (
            <div key={subject} style={{ marginBottom: 20 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "8px 6px 14px",
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: 16,
                  color: C.text,
                  fontWeight: 700,
                }}
              >
                <span style={{ fontSize: 20 }}>{meta.emoji}</span>
                <span>{meta.title}</span>
                <span style={{ color: C.muted, fontSize: 12, fontWeight: 500 }}>· {pathList.length} paden</span>
              </div>
              <div className="lp-grid">
                {pathList.map((p) => {
                  const done = progressByPath[p.id]?.size || 0;
                  const total = p.steps.length;
                  const pct = total ? Math.round((done / total) * 100) : 0;
                  const isStarted = done > 0;
                  const isComplete = done >= total;
                  const theme = PATH_THEMES[p.id] || { gradient: `linear-gradient(135deg, ${C.accent}, #2c4d77)`, accent: "#90caf9" };
                  return (
                    <button
                      key={p.id}
                      onClick={() => onPickPath(p.id)}
                      style={pathCard(theme, isComplete)}
                      onMouseOver={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
                      onMouseOut={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: 12,
                            background: theme.gradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 24,
                            flexShrink: 0,
                            boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
                          }}
                        >
                          {p.emoji}
                        </div>
                        <div style={{ flex: 1, textAlign: "left", minWidth: 0 }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 3 }}>
                            <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: "#fff", fontWeight: 700 }}>
                              {p.title}
                            </span>
                            {isComplete && <span style={{ fontSize: 14 }}>✅</span>}
                          </div>
                          <div style={{ fontSize: 12, color: C.muted, lineHeight: 1.4, marginBottom: isStarted ? 6 : 0 }}>
                            {total} stappen · {p.chapters?.length || 0} hoofdstukken
                          </div>
                          {isStarted && (
                            <div>
                              <div style={{ height: 4, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
                                <div
                                  style={{
                                    height: "100%",
                                    width: `${pct}%`,
                                    background: theme.gradient,
                                    transition: "width 0.4s",
                                  }}
                                />
                              </div>
                              <div style={{ fontSize: 11, color: theme.accent, marginTop: 3, fontWeight: 700 }}>
                                {done}/{total} · {pct}%
                              </div>
                            </div>
                          )}
                        </div>
                        <span style={{ color: C.muted, fontSize: 18 }}>›</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        <div style={{ marginTop: 18, padding: "14px 14px", background: "rgba(255,255,255,0.02)", borderRadius: 12, border: `1px dashed ${C.border}`, textAlign: "center" }}>
          <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>
            Meer onderwerpen volgen.<br />
            <span style={{ fontSize: 11 }}>Mis je iets? Geef het door via "Tip aan de maker" op de homepage.</span>
          </div>
        </div>
      </div>
    </div>
  );
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
    boxShadow: "0 4px 16px rgba(0,200,83,0.25)",
  };
}

function pathCard(theme, isComplete) {
  return {
    background: C.card,
    border: `1px solid ${isComplete ? theme.accent : C.border}`,
    borderRadius: 14,
    padding: 14,
    cursor: "pointer",
    transition: "transform 0.2s, border-color 0.2s",
    fontFamily: "'Nunito', sans-serif",
    width: "100%",
  };
}

function curriculumCard(isComplete) {
  return {
    background: "rgba(40,55,85,0.7)",
    border: `2px solid ${isComplete ? C.good : C.warm}`,
    borderRadius: 14,
    padding: 12,
    cursor: "pointer",
    transition: "transform 0.2s, border-color 0.2s",
    fontFamily: "'Nunito', sans-serif",
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 12,
    boxShadow: "0 3px 12px rgba(255,213,79,0.10)",
  };
}

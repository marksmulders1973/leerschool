import { useState, useEffect } from "react";
import supabase from "../supabase";
import { ALL_LEARN_PATHS } from "../learnPaths/parabolen";

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  good: "#00c853",
  bad: "#ff5252",
  accent: "#5b86b8",
  warm: "#ffd54f",
};

function renderParagraph(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i} style={{ color: "#ffffff" }}>{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

function Explanation({ text }) {
  const blocks = text.split("\n\n");
  return (
    <div style={{ lineHeight: 1.65, fontSize: 15, color: C.text }}>
      {blocks.map((block, bi) => {
        const lines = block.split("\n");
        const isList = lines.every((l) => l.trim().startsWith("•"));
        if (isList) {
          return (
            <ul key={bi} style={{ paddingLeft: 22, margin: "10px 0" }}>
              {lines.map((l, li) => (
                <li key={li} style={{ marginBottom: 6 }}>{renderParagraph(l.replace(/^•\s*/, ""))}</li>
              ))}
            </ul>
          );
        }
        return <p key={bi} style={{ margin: "10px 0" }}>{renderParagraph(block)}</p>;
      })}
    </div>
  );
}

function SvgFigure({ svg }) {
  if (!svg) return null;
  const sized = svg.replace(
    /<svg\b([^>]*)>/i,
    (m, attrs) => {
      const cleaned = attrs.replace(/\s(width|height)="[^"]*"/g, "");
      return `<svg${cleaned} style="width:100%;max-width:460px;height:auto;display:block;margin:0 auto;">`;
    }
  );
  return (
    <div
      style={{
        background: "#0a1424",
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: 14,
        margin: "16px 0",
      }}
      dangerouslySetInnerHTML={{ __html: sized }}
    />
  );
}

export default function LearnPath({ pathId, userName, authUser, onBack, onHome }) {
  const path = ALL_LEARN_PATHS[pathId];
  const player = (userName || "Speler").trim() || "Speler";

  const [stepIdx, setStepIdx] = useState(0);
  const [mode, setMode] = useState("reading"); // reading | checking | wrong | stepDone | allDone
  const [checkIdx, setCheckIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [attempts, setAttempts] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [loaded, setLoaded] = useState(false);

  // Voortgang ophalen bij start
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase
          .from("learn_progress")
          .select("step_idx")
          .eq("player_name", player)
          .eq("learn_path_id", pathId);
        if (cancelled) return;
        if (Array.isArray(data) && data.length > 0) {
          const done = new Set(data.map((r) => r.step_idx));
          setCompletedSteps(done);
          // Spring naar eerste niet-voltooide stap
          let next = 0;
          while (done.has(next) && next < path.steps.length) next++;
          setStepIdx(Math.min(next, path.steps.length - 1));
          if (next >= path.steps.length) setMode("allDone");
        }
      } catch (e) {
        // stil falen — gebruiker begint gewoon bij stap 0
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pathId, player]);

  if (!path) {
    return (
      <div style={{ padding: 24, color: C.text }}>
        <p>Leerpad niet gevonden.</p>
        <button onClick={onHome} style={btnSecondary()}>Terug naar home</button>
      </div>
    );
  }

  const totalSteps = path.steps.length;
  const step = path.steps[stepIdx];
  const checks = step?.checks || [];
  const currentCheck = checks[checkIdx];

  const startCheck = () => {
    setMode("checking");
    setCheckIdx(0);
    setSelected(null);
    setAttempts(1);
  };

  const handlePick = (i) => {
    if (mode !== "checking") return;
    setSelected(i);
    if (i === currentCheck.answer) {
      // Goed — ga naar volgende check of voltooi stap
      setTimeout(() => {
        if (checkIdx + 1 < checks.length) {
          setCheckIdx(checkIdx + 1);
          setSelected(null);
          setAttempts(1);
        } else {
          completeStep();
        }
      }, 900);
    } else {
      setMode("wrong");
    }
  };

  const tryAgain = () => {
    setSelected(null);
    setAttempts(attempts + 1);
    setMode("checking");
  };

  const completeStep = async () => {
    const newDone = new Set(completedSteps);
    newDone.add(stepIdx);
    setCompletedSteps(newDone);
    setMode("stepDone");
    // Opslaan in Supabase (silent)
    try {
      await supabase.from("learn_progress").upsert(
        {
          player_name: player,
          user_id: authUser?.id || null,
          learn_path_id: pathId,
          step_idx: stepIdx,
          attempts,
        },
        { onConflict: "player_name,learn_path_id,step_idx" }
      );
    } catch (e) {
      // niet kritiek
    }
  };

  const goNext = () => {
    if (stepIdx + 1 >= totalSteps) {
      setMode("allDone");
    } else {
      setStepIdx(stepIdx + 1);
      setCheckIdx(0);
      setSelected(null);
      setAttempts(1);
      setMode("reading");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const progressPct = Math.round((completedSteps.size / totalSteps) * 100);

  return (
    <div style={pageStyle()}>
      <Header onBack={onBack} onHome={onHome} title={path.title} emoji={path.emoji} />

      {/* Voortgangsbalk */}
      <div style={{ padding: "12px 18px 6px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: C.muted }}>
          <span>Stap {stepIdx + 1} van {totalSteps}</span>
          <span>{progressPct}% voltooid</span>
        </div>
        <div style={{ height: 8, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${progressPct}%`,
              background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
              transition: "width 0.4s",
            }}
          />
        </div>
      </div>

      <div style={{ padding: "10px 18px 28px" }}>
        {mode === "allDone" ? (
          <AllDone path={path} onHome={onHome} />
        ) : (
          <>
            <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, color: "#fff", margin: "10px 0 6px" }}>
              {stepIdx + 1}. {step.title}
            </h2>

            {(mode === "reading" || mode === "stepDone") && (
              <>
                <SvgFigure svg={step.svg} />
                <Explanation text={step.explanation} />
              </>
            )}

            {mode === "reading" && (
              <button onClick={startCheck} style={btnPrimary()}>
                {checks.length > 0 ? "Naar de check ▶" : "Volgende stap ▶"}
              </button>
            )}

            {mode === "checking" && currentCheck && (
              <div style={cardStyle()}>
                <div style={{ fontSize: 13, color: C.muted, marginBottom: 6 }}>
                  Check {checkIdx + 1} van {checks.length} {attempts > 1 ? `· poging ${attempts}` : ""}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginBottom: 14 }}>
                  {currentCheck.q}
                </div>
                {currentCheck.options.map((opt, i) => {
                  const isSelected = selected === i;
                  const isCorrect = selected !== null && i === currentCheck.answer;
                  return (
                    <button
                      key={i}
                      onClick={() => handlePick(i)}
                      disabled={selected !== null}
                      style={optionStyle(isSelected, isCorrect, selected !== null)}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            )}

            {mode === "wrong" && currentCheck && (
              <div style={cardStyle(C.bad)}>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.bad, marginBottom: 8 }}>
                  ❌ Nog niet helemaal
                </div>
                <div style={{ fontSize: 14, color: C.text, marginBottom: 14, lineHeight: 1.5 }}>
                  {currentCheck.wrongHints?.[selected] || "Probeer het nog eens, kijk goed naar de uitleg hierboven."}
                </div>
                <button onClick={() => setMode("reading")} style={btnSecondary()}>
                  📖 Lees uitleg opnieuw
                </button>
                <button onClick={tryAgain} style={{ ...btnPrimary(), marginTop: 8 }}>
                  🔁 Probeer opnieuw
                </button>
              </div>
            )}

            {mode === "stepDone" && (
              <div style={cardStyle(C.good)}>
                <div style={{ fontSize: 18, fontWeight: 700, color: C.good, marginBottom: 8 }}>
                  ✅ Stap {stepIdx + 1} voltooid!
                </div>
                <div style={{ fontSize: 14, color: C.text, marginBottom: 14 }}>
                  {stepIdx + 1 < totalSteps
                    ? `Goed bezig. Nu door naar stap ${stepIdx + 2}.`
                    : "Helemaal klaar — laatste stap geweest!"}
                </div>
                <button onClick={goNext} style={btnPrimary()}>
                  {stepIdx + 1 < totalSteps ? "Volgende stap ▶" : "Bekijk eindresultaat ▶"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function AllDone({ path, onHome }) {
  return (
    <div style={{ textAlign: "center", padding: "30px 12px" }}>
      <div style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 26, color: "#fff", marginBottom: 8 }}>
        Knap gedaan!
      </h2>
      <div style={{ color: C.text, fontSize: 16, marginBottom: 24, lineHeight: 1.5 }}>
        Je hebt het hele leerpad <strong>{path.title}</strong> doorlopen. Probeer nu de toets om te zien of het is blijven hangen.
      </div>
      <button onClick={onHome} style={btnPrimary()}>
        Terug naar home
      </button>
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
      <button onClick={onBack || onHome} style={iconBtn()}>←</button>
      <div style={{ fontSize: 22 }}>{emoji}</div>
      <div style={{ flex: 1, fontFamily: "'Fredoka', sans-serif", fontSize: 18, color: "#fff" }}>{title}</div>
      <button onClick={onHome} style={iconBtn()}>🏠</button>
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

function cardStyle(borderColor) {
  return {
    background: C.card,
    border: `2px solid ${borderColor || C.border}`,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  };
}

function btnPrimary() {
  return {
    width: "100%",
    padding: "14px 18px",
    border: "none",
    borderRadius: 14,
    background: `linear-gradient(135deg, ${C.good}, #00a040)`,
    color: "#fff",
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "'Fredoka', sans-serif",
    cursor: "pointer",
    marginTop: 16,
    boxShadow: "0 4px 16px rgba(0,200,83,0.3)",
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

function iconBtn() {
  return {
    border: "none",
    background: "transparent",
    color: C.text,
    fontSize: 22,
    cursor: "pointer",
    padding: 6,
  };
}

function optionStyle(selected, isCorrectChoice, locked) {
  let bg = "#1e2d45";
  let border = C.border;
  if (selected) {
    if (isCorrectChoice) {
      bg = "rgba(0,200,83,0.18)";
      border = C.good;
    } else {
      bg = "rgba(255,82,82,0.18)";
      border = C.bad;
    }
  }
  return {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "12px 14px",
    border: `2px solid ${border}`,
    borderRadius: 12,
    background: bg,
    color: C.text,
    fontFamily: "'Nunito', sans-serif",
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 8,
    cursor: locked ? "default" : "pointer",
    opacity: locked && !selected ? 0.55 : 1,
    transition: "all 0.2s",
  };
}

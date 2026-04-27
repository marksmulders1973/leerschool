import { useState, useEffect } from "react";
import supabase from "../supabase";
import { ALL_LEARN_PATHS } from "../learnPaths";
import MiniQuiz from "./MiniQuiz.jsx";

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

function renderInline(text) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i} style={{ color: "#ffffff" }}>{p.slice(2, -2)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

function isTableBlock(block) {
  const lines = block.split("\n").filter((l) => l.trim());
  return lines.length >= 2 && lines.every((l) => l.trim().startsWith("|"));
}

function renderTable(block, key) {
  const rows = block
    .split("\n")
    .filter((l) => l.trim().startsWith("|"))
    .map((line) => line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
  if (rows.length < 2) return null;
  // Detecteer separator (---) en verwijder
  const headers = rows[0];
  const isSeparator = (row) => row.every((c) => /^[-:]+$/.test(c));
  const dataRows = rows.slice(1).filter((r) => !isSeparator(r));
  return (
    <div key={key} style={{ overflowX: "auto", margin: "12px 0" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          fontFamily: "'Nunito', sans-serif",
          fontSize: 14,
          color: C.text,
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: "8px 12px",
                  borderBottom: `2px solid ${C.good}`,
                  background: "rgba(0,200,83,0.08)",
                  textAlign: "left",
                  fontWeight: 700,
                  color: "#fff",
                }}
              >
                {renderInline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
              {row.map((c, ci) => (
                <td key={ci} style={{ padding: "7px 12px", borderBottom: `1px solid ${C.border}` }}>
                  {renderInline(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Explanation({ text }) {
  const blocks = text.split("\n\n");
  return (
    <div style={{ lineHeight: 1.65, fontSize: 15, color: C.text }}>
      {blocks.map((block, bi) => {
        if (isTableBlock(block)) return renderTable(block, bi);
        const lines = block.split("\n");
        const isList = lines.length > 0 && lines.every((l) => l.trim().startsWith("•"));
        if (isList) {
          return (
            <ul key={bi} style={{ paddingLeft: 22, margin: "10px 0" }}>
              {lines.map((l, li) => (
                <li key={li} style={{ marginBottom: 6 }}>{renderInline(l.replace(/^•\s*/, ""))}</li>
              ))}
            </ul>
          );
        }
        return <p key={bi} style={{ margin: "10px 0" }}>{renderInline(block)}</p>;
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

export default function LearnPath({ pathId, initialStepIdx, userName, authUser, onBack, onHome }) {
  const path = ALL_LEARN_PATHS[pathId];
  const player = (userName || "Speler").trim() || "Speler";

  // Als initialStepIdx meegegeven is (vanuit toets-vraag), spring direct naar die stap.
  const startMode = typeof initialStepIdx === "number" ? "reading" : "overview";
  const startStep = typeof initialStepIdx === "number" ? initialStepIdx : 0;

  // mode: overview | reading | checking | wrong | stepDone | allDone
  const [mode, setMode] = useState(startMode);
  const [stepIdx, setStepIdx] = useState(startStep);
  const [checkIdx, setCheckIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [attempts, setAttempts] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [loaded, setLoaded] = useState(false);
  const [showMiniQuiz, setShowMiniQuiz] = useState(false);

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
          setCompletedSteps(new Set(data.map((r) => r.step_idx)));
        }
      } catch (e) {
        // stil falen
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

  // Volgende-stap-suggestie bij overview: eerste niet-voltooide
  const firstUnfinishedIdx = (() => {
    for (let i = 0; i < totalSteps; i++) {
      if (!completedSteps.has(i)) return i;
    }
    return null;
  })();

  const goToStep = (idx) => {
    setStepIdx(idx);
    setCheckIdx(0);
    setSelected(null);
    setAttempts(1);
    setMode("reading");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      goToStep(stepIdx + 1);
    }
  };

  const progressPct = Math.round((completedSteps.size / totalSteps) * 100);

  // ─── Render ────────────────────────────
  if (mode === "overview") {
    return (
      <Overview
        path={path}
        completedSteps={completedSteps}
        firstUnfinishedIdx={firstUnfinishedIdx}
        progressPct={progressPct}
        onPickStep={goToStep}
        onBack={onBack}
        onHome={onHome}
        loaded={loaded}
      />
    );
  }

  if (mode === "allDone") {
    return (
      <div style={pageStyle()}>
        <Header onBack={() => setMode("overview")} onHome={onHome} title={path.title} emoji={path.emoji} />
        <div style={{ padding: "10px 18px 28px" }}>
          <AllDone path={path} onHome={onHome} onBackToOverview={() => setMode("overview")} />
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle()}>
      <Header onBack={() => setMode("overview")} onHome={onHome} title={path.title} emoji={path.emoji} backLabel="Overzicht" />

      {/* Mini-info: stap nummer + voortgangsbalk */}
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
                ? `Goed bezig. Door naar stap ${stepIdx + 2}, of test eerst even of het echt is blijven hangen.`
                : "Helemaal klaar — laatste stap geweest!"}
            </div>
            {!showMiniQuiz && (
              <button
                onClick={() => setShowMiniQuiz(true)}
                style={{ ...btnPrimary(), background: `linear-gradient(135deg, ${C.warm}, #f9a825)`, color: "#1a0008", boxShadow: "0 4px 16px rgba(255,213,79,0.35)" }}
              >
                📝 Test wat je net leerde
              </button>
            )}
            {stepIdx + 1 < totalSteps && (
              <button onClick={goNext} style={{ ...btnPrimary(), marginTop: 8 }}>
                Volgende stap ▶
              </button>
            )}
            <button onClick={() => setMode("overview")} style={{ ...btnSecondary(), marginTop: 8 }}>
              📋 Terug naar overzicht
            </button>

            {showMiniQuiz && (
              <MiniQuiz
                subject={path.subject || "wiskunde"}
                level={path.level || "klas1-vwo"}
                topicLabel={`${path.title} — ${step.title}`}
                count={3}
                onClose={() => setShowMiniQuiz(false)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Overview({ path, completedSteps, firstUnfinishedIdx, progressPct, onPickStep, onBack, onHome, loaded }) {
  return (
    <div style={pageStyle()}>
      <Header onBack={onBack} onHome={onHome} title={path.title} emoji={path.emoji} />

      <div style={{ padding: "16px 18px 8px" }}>
        <p style={{ color: C.text, fontSize: 14, lineHeight: 1.5, margin: "4px 0 14px" }}>
          {path.intro}
        </p>

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: C.muted }}>
          <span>{completedSteps.size} van {path.steps.length} stappen voltooid</span>
          <span>{progressPct}%</span>
        </div>
        <div style={{ height: 10, background: "#1a2744", borderRadius: 999, overflow: "hidden", marginBottom: 16 }}>
          <div
            style={{
              height: "100%",
              width: `${progressPct}%`,
              background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
              transition: "width 0.4s",
            }}
          />
        </div>

        {loaded && firstUnfinishedIdx !== null && (
          <button
            onClick={() => onPickStep(firstUnfinishedIdx)}
            style={{
              ...btnPrimary(),
              marginTop: 0,
              marginBottom: 18,
              padding: "16px 18px",
              fontSize: 15,
            }}
          >
            {completedSteps.size === 0
              ? `🚀 Begin bij stap 1`
              : `▶ Doorgaan: stap ${firstUnfinishedIdx + 1} — ${path.steps[firstUnfinishedIdx].title}`}
          </button>
        )}
        {loaded && firstUnfinishedIdx === null && (
          <div style={{ ...cardStyle(C.good), marginTop: 0, marginBottom: 18, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 6 }}>🎉</div>
            <div style={{ fontWeight: 700, color: C.good, marginBottom: 4 }}>Alles voltooid!</div>
            <div style={{ fontSize: 13, color: C.muted }}>
              Je kunt elke stap nog eens herhalen door erop te klikken hieronder.
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: "0 14px 32px" }}>
        {path.chapters.map((ch) => {
          const stepsInCh = [];
          for (let i = ch.from; i <= ch.to; i++) stepsInCh.push(i);
          const doneCount = stepsInCh.filter((i) => completedSteps.has(i)).length;
          const allDone = doneCount === stepsInCh.length;
          return (
            <div
              key={ch.letter}
              style={{
                marginBottom: 16,
                background: "rgba(20,30,50,0.5)",
                borderRadius: 14,
                border: `1px solid ${allDone ? C.good : C.border}`,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: allDone ? "rgba(0,200,83,0.06)" : "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: allDone ? C.good : C.accent,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {ch.letter}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: "#fff" }}>
                    {ch.emoji} {ch.title}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted }}>
                    {doneCount}/{stepsInCh.length} stappen{allDone ? " — voltooid" : ""}
                  </div>
                </div>
              </div>
              <div style={{ padding: "8px 8px" }}>
                {stepsInCh.map((idx) => {
                  const s = path.steps[idx];
                  const done = completedSteps.has(idx);
                  const isNext = idx === firstUnfinishedIdx;
                  return (
                    <button
                      key={idx}
                      onClick={() => onPickStep(idx)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        width: "100%",
                        textAlign: "left",
                        padding: "10px 12px",
                        background: isNext ? "rgba(0,200,83,0.10)" : "transparent",
                        border: "none",
                        borderRadius: 10,
                        color: C.text,
                        fontFamily: "'Nunito', sans-serif",
                        fontSize: 14,
                        cursor: "pointer",
                        marginBottom: 3,
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                      onMouseOut={(e) => (e.currentTarget.style.background = isNext ? "rgba(0,200,83,0.10)" : "transparent")}
                    >
                      <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>
                        {done ? "✅" : isNext ? "🔵" : "⚪"}
                      </span>
                      <span style={{ color: C.muted, minWidth: 22, fontSize: 12, fontWeight: 700 }}>
                        {idx + 1}.
                      </span>
                      <span style={{ flex: 1, color: done ? C.muted : "#fff", fontWeight: isNext ? 700 : 500 }}>
                        {s.title}
                      </span>
                      <span style={{ color: C.muted, fontSize: 14 }}>›</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AllDone({ path, onHome, onBackToOverview }) {
  return (
    <div style={{ textAlign: "center", padding: "30px 12px" }}>
      <div style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 26, color: "#fff", marginBottom: 8 }}>
        Knap gedaan!
      </h2>
      <div style={{ color: C.text, fontSize: 16, marginBottom: 24, lineHeight: 1.5 }}>
        Je hebt het hele leerpad <strong>{path.title}</strong> doorlopen.
      </div>
      <button onClick={onBackToOverview} style={btnSecondary()}>
        📋 Terug naar overzicht
      </button>
      <button onClick={onHome} style={{ ...btnPrimary(), marginTop: 8 }}>
        Terug naar home
      </button>
    </div>
  );
}

function Header({ onBack, onHome, title, emoji, backLabel }) {
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
      <button onClick={onBack || onHome} style={iconBtn()} title={backLabel || "Terug"}>
        ←{backLabel ? <span style={{ fontSize: 12, marginLeft: 4 }}>{backLabel}</span> : null}
      </button>
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
    fontSize: 18,
    cursor: "pointer",
    padding: "6px 8px",
    fontFamily: "'Nunito', sans-serif",
    display: "inline-flex",
    alignItems: "center",
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

import { useState, useEffect, useMemo } from "react";
import supabase from "../../supabase";
import { ALL_LEARN_PATHS } from "../../learnPaths";
import MiniQuiz from "../practice/MiniQuiz.jsx";
import MdInline from "../../shared/ui/MdInline.jsx";
import { SUBJECTS } from "../../shared/subjects.js";
import AITutor from "./AITutor.jsx";

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "var(--color-text)",
  muted: "var(--color-text-muted)",
  good: "var(--color-brand-primary)",
  bad: "#ff5252",
  accent: "#5b86b8",
  warm: "#ffd54f",
};

function renderInline(text) {
  // Ondersteunt zowel **bold** (dubbele asterisks) als *bold* (enkele
  // asterisks). Voor *...* moeten de asterisks niet-spatie raken zodat
  // math-uitdrukkingen als "2 * 3" of "n * x" niet per ongeluk vet worden.
  const parts = text.split(/(\*\*[^*]+\*\*|\*\S[^*]*\S\*|\*\S\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i} style={{ color: "#ffffff" }}>{p.slice(2, -2)}</strong>;
    }
    if (p.startsWith("*") && p.endsWith("*") && p.length >= 3 && !p.startsWith("**")) {
      return <strong key={i} style={{ color: "#ffffff" }}>{p.slice(1, -1)}</strong>;
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
          fontFamily: "var(--font-body)",
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
                  color: "var(--color-text-strong)",
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

// Knop die een YouTube-zoekopdracht opent voor de huidige stap.
// Gebruik bewust een search-URL ipv vaste video-URL: dan is de
// inhoud altijd actueel en is er geen onderhoud aan dode links.
function YoutubeZoekKnop({ pathTitle, stepTitle, subject }) {
  const vakLabel = subject === "taal" ? "Nederlands"
    : subject === "wiskunde" ? "wiskunde"
    : subject || "uitleg";
  const query = `${stepTitle} ${pathTitle} ${vakLabel} uitleg`;
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        marginTop: 12, marginBottom: 6,
        padding: "9px 14px",
        background: "linear-gradient(135deg, #ff0000, #c4302b)",
        border: "none", borderRadius: 12,
        color: "var(--color-text-strong)",
        fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
        textDecoration: "none",
        boxShadow: "0 3px 12px rgba(255,0,0,0.25)",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: 18 }}>🎥</span>
      Bekijk uitleg op YouTube
    </a>
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
  // AI-tutor drawer-state. Sluit niet automatisch bij stap-wissel; tutor leest
  // pathId+stepIdx zelf uit en herlaadt history.
  const [showTutor, setShowTutor] = useState(false);
  // Onthoud laatste fout-poging zodat de tutor weet wat er net mis ging.
  const [lastWrongAnswer, setLastWrongAnswer] = useState(null);

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

  // Hooks (incl. useMemo) MOETEN vóór elke conditional early-return staan,
  // anders breekt de rules-of-hooks zodra `path` van null naar geladen gaat.
  const step = path ? path.steps[stepIdx] : null;
  const checks = step?.checks || [];
  const rawCheck = checks[checkIdx];

  // Veel leerpaden hebben de juiste optie op index 0 staan; door per check
  // de opties (en bijhorende wrongHints) te schudden voorkomen we dat de
  // speler altijd 'A' kan kiezen. Stabiel binnen één check (memo op
  // pathId+stepIdx+checkIdx), reshuffle bij volgende check of stap.
  const currentCheck = useMemo(() => {
    if (!rawCheck) return null;
    const opts = rawCheck.options || [];
    const hints = rawCheck.wrongHints || [];
    const order = opts.map((_, i) => i);
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return {
      ...rawCheck,
      options: order.map((idx) => opts[idx]),
      answer: order.indexOf(rawCheck.answer),
      wrongHints: order.map((idx) => hints[idx] ?? null),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathId, stepIdx, checkIdx, rawCheck]);

  if (!path) {
    return (
      <div style={{ padding: 24, color: C.text }}>
        <p>Leerpad niet gevonden.</p>
        <button onClick={onHome} style={btnSecondary()}>Terug naar home</button>
      </div>
    );
  }

  const totalSteps = path.steps.length;

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
      setLastWrongAnswer(null);
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
      // Onthoud welke optie de leerling fout koos zodat de AI-tutor erop
      // kan reageren als de leerling om hulp vraagt.
      setLastWrongAnswer(currentCheck.options?.[i] || null);
      setMode("wrong");
    }
  };

  // Voor interactieve 3D-componenten (step.interactiveComponent). Component
  // toont eigen feedback en roept onAnswer(correct, optionId). We mappen
  // dat op dezelfde flow als handlePick: bij correct → completeStep, bij
  // fout → attempts ophogen (component houdt de visuele feedback aan).
  const handleInteractiveAnswer = (correct /*, optionId */) => {
    if (mode !== "checking") return;
    if (correct) {
      setTimeout(() => completeStep(), 1200);
    } else {
      setAttempts((a) => a + 1);
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

      {/* Mini-info: stap nummer + voortgangsbalk + prev/next-navigatie */}
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
        {/* Vrije navigatie tussen stappen — werkt alleen in reading/stepDone, niet midden in een check */}
        {(mode === "reading" || mode === "stepDone") && (
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 10 }}>
            <button
              onClick={() => stepIdx > 0 && goToStep(stepIdx - 1)}
              disabled={stepIdx === 0}
              style={{
                flex: 1, padding: "8px 12px",
                background: stepIdx === 0 ? "rgba(255,255,255,0.04)" : "rgba(91,134,184,0.18)",
                border: `1px solid ${stepIdx === 0 ? "rgba(255,255,255,0.06)" : "rgba(91,134,184,0.4)"}`,
                borderRadius: 10,
                color: stepIdx === 0 ? "rgba(255,255,255,0.25)" : C.text,
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                cursor: stepIdx === 0 ? "not-allowed" : "pointer",
                transition: "background 0.15s",
              }}
            >
              ← Vorige stap
            </button>
            <button
              onClick={() => stepIdx + 1 < totalSteps && goToStep(stepIdx + 1)}
              disabled={stepIdx + 1 >= totalSteps}
              style={{
                flex: 1, padding: "8px 12px",
                background: stepIdx + 1 >= totalSteps ? "rgba(255,255,255,0.04)" : "rgba(91,134,184,0.18)",
                border: `1px solid ${stepIdx + 1 >= totalSteps ? "rgba(255,255,255,0.06)" : "rgba(91,134,184,0.4)"}`,
                borderRadius: 10,
                color: stepIdx + 1 >= totalSteps ? "rgba(255,255,255,0.25)" : C.text,
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                cursor: stepIdx + 1 >= totalSteps ? "not-allowed" : "pointer",
                transition: "background 0.15s",
              }}
            >
              Volgende stap →
            </button>
          </div>
        )}
      </div>

      <div style={{ padding: "10px 18px 28px" }}>
        {/* Eyebrow — geeft context (vak · stap-info) zonder lawaai. Patroon
            geleerd van Khan/BBC Bitesize/Brilliant: kleine caps boven titel. */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          marginTop: 8,
          marginBottom: 4,
        }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: 11,
            fontWeight: 700,
            color: C.good,
            letterSpacing: 1.6,
            textTransform: "uppercase",
          }}>
            {(SUBJECTS[path.subject]?.title || path.subject || "Studiebol")} · stap {stepIdx + 1} van {totalSteps}
          </div>
          {/* Markeer voltooid — agency voor leerling (les leersnel). Alleen
              tijdens lezen, niet midden in een check. Stap blijft natuurlijk
              ook automatisch voltooid bij correct antwoord. */}
          {mode === "reading" && !completedSteps.has(stepIdx) && (
            <button
              onClick={completeStep}
              style={{
                background: "transparent",
                border: `1px solid ${C.border}`,
                color: C.muted,
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 150ms ease, border-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.good;
                e.currentTarget.style.borderColor = C.good;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = C.muted;
                e.currentTarget.style.borderColor = C.border;
              }}
              aria-label="Markeer deze stap als voltooid"
            >
              ✓ Markeer voltooid
            </button>
          )}
          {mode === "reading" && completedSteps.has(stepIdx) && (
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 600,
              color: C.good,
              padding: "4px 10px",
              borderRadius: 999,
              background: "rgba(0,200,83,0.12)",
              border: `1px solid rgba(0,200,83,0.30)`,
              whiteSpace: "nowrap",
            }}>
              ✓ Voltooid
            </span>
          )}
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--color-text-strong)", margin: "4px 0 6px" }}>
          {stepIdx + 1}. {step.title}
        </h2>

        {(mode === "reading" || mode === "stepDone") && (
          <>
            {step.illustrationComponent
              ? <step.illustrationComponent />
              : <SvgFigure svg={step.svg} />}
            <Explanation text={step.explanation} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
              <YoutubeZoekKnop pathTitle={path.title} stepTitle={step.title} subject={path.subject} />
              <button
                type="button"
                onClick={() => setShowTutor(true)}
                style={tutorButtonStyle()}
                aria-label="Vraag aan de AI-tutor"
              >
                <span style={{ fontSize: 16 }}>💬</span>
                Vraag aan de tutor
              </button>
            </div>
          </>
        )}

        {mode === "reading" && (
          <button onClick={startCheck} style={btnPrimary()}>
            {checks.length > 0 ? "Naar de check ▶" : "Volgende stap ▶"}
          </button>
        )}

        {mode === "checking" && step.interactiveComponent && (
          <div style={cardStyle()}>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 6 }}>
              Interactieve check {attempts > 1 ? `· poging ${attempts}` : ""}
            </div>
            <step.interactiveComponent onAnswer={handleInteractiveAnswer} />
          </div>
        )}

        {mode === "checking" && !step.interactiveComponent && currentCheck && (
          <div style={cardStyle()}>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 6 }}>
              Check {checkIdx + 1} van {checks.length} {attempts > 1 ? `· poging ${attempts}` : ""}
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 14 }}>
              <MdInline text={currentCheck.q} />
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
            <button
              onClick={() => setShowTutor(true)}
              style={{ ...btnSecondary(), marginTop: 8 }}
            >
              💬 Vraag aan de tutor
            </button>
            <button onClick={tryAgain} style={{ ...btnPrimary(), marginTop: 8 }}>
              🔁 Probeer opnieuw
            </button>
          </div>
        )}

        {mode === "stepDone" && !showMiniQuiz && (
          <>
            {/* Sucess-banner — kort, links uitgelijnd zonder kader-stress */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 12,
              background: "rgba(0,200,83,0.10)",
              border: `1px solid rgba(0,200,83,0.30)`,
              marginTop: 16,
              marginBottom: 14,
            }}>
              <span style={{ fontSize: 18 }}>✅</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.good }}>
                  Stap {stepIdx + 1} voltooid!
                </div>
                <div style={{ fontSize: 13, color: C.text, marginTop: 2 }}>
                  {stepIdx + 1 < totalSteps
                    ? "Goed bezig. Wat wil je nu?"
                    : "Helemaal klaar — laatste stap geweest!"}
                </div>
              </div>
            </div>

            {/* Stof begrepen?-eindblok (les van Leersnel) — 3 kaarten met
                eyebrow-tags ipv 3 stacked buttons. Visuele rolverdeling. */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 10,
            }}>
              <NextStepCard
                eyebrow="Zelf testen"
                title="Mini-toets"
                hint="3 vragen over deze stap"
                accent={C.warm}
                onClick={() => setShowMiniQuiz(true)}
              />
              {stepIdx + 1 < totalSteps && (
                <NextStepCard
                  eyebrow="Volgende stap"
                  title={`${stepIdx + 2}. ${path.steps[stepIdx + 1]?.title || "Verder"}`}
                  hint="Doorgaan met dit onderwerp"
                  accent={C.good}
                  primary
                  onClick={goNext}
                />
              )}
              <NextStepCard
                eyebrow="Overzicht"
                title="Terug naar paden"
                hint="Andere stap kiezen"
                accent={C.muted}
                onClick={() => setMode("overview")}
              />
            </div>
          </>
        )}

        <AITutor
          open={showTutor}
          onClose={() => setShowTutor(false)}
          pathTitle={path.title}
          pathId={pathId}
          stepTitle={step.title}
          stepIdx={stepIdx}
          stepExplanation={step.explanation}
          currentCheck={currentCheck}
          lastWrongAnswer={lastWrongAnswer}
        />

        {mode === "stepDone" && showMiniQuiz && (
          <div style={cardStyle(C.good)}>
            <MiniQuiz
              subject={path.subject || "wiskunde"}
              level={path.level || "klas1-vwo"}
              topicLabel={`${path.title} — ${step.title}`}
              count={3}
              onClose={() => setShowMiniQuiz(false)}
              pathId={path.id}
              playerName={userName}
              onLessonReturn={() => {
                setShowMiniQuiz(false);
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            />
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
                    color: "var(--color-text-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {ch.letter}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--color-text-strong)" }}>
                    {ch.emoji} {ch.title}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted }}>
                    {doneCount}/{stepsInCh.length} stappen{allDone ? " — voltooid" : ""}
                  </div>
                </div>
              </div>
              {(() => {
                const repSvg = stepsInCh.map((i) => path.steps[i]?.svg).find((s) => s);
                if (!repSvg) return null;
                const sizedSvg = repSvg.replace(
                  /<svg\b([^>]*)>/i,
                  (m, attrs) => {
                    const cleaned = attrs.replace(/\s(width|height|style)="[^"]*"/g, "");
                    return `<svg${cleaned} style="height:100%;width:auto;display:block;">`;
                  }
                );
                return (
                  <div
                    style={{
                      margin: "10px 12px 4px",
                      padding: 6,
                      background: "#0a1424",
                      border: `1px solid ${C.border}`,
                      borderRadius: 10,
                      height: 96,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      opacity: allDone ? 0.55 : 1,
                    }}
                  >
                    <div
                      style={{ height: "100%", display: "flex", alignItems: "center" }}
                      dangerouslySetInnerHTML={{ __html: sizedSvg }}
                    />
                  </div>
                );
              })()}
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
                        fontFamily: "var(--font-body)",
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
                      <span style={{ flex: 1, color: done ? C.muted : "var(--color-text-strong)", fontWeight: isNext ? 700 : 500 }}>
                        {s.title}
                      </span>
                      {s.emoji && (
                        <span style={{ fontSize: 16, marginLeft: 4, opacity: done ? 0.55 : 0.95 }}>
                          {s.emoji}
                        </span>
                      )}
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
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--color-text-strong)", marginBottom: 8 }}>
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

/** Kaart voor het "Stof begrepen?"-eindblok na een voltooide stap. Drie
 *  varianten worden naast elkaar getoond met eyebrow-tags zodat de
 *  rolverdeling (testen / doorgaan / overzicht) meteen zichtbaar is. */
function NextStepCard({ eyebrow, title, hint, accent, primary = false, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: primary ? "rgba(0,200,83,0.10)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${primary ? "rgba(0,200,83,0.40)" : C.border}`,
        borderRadius: 12,
        padding: "12px 14px",
        textAlign: "left",
        cursor: "pointer",
        color: C.text,
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        transition: "border-color 150ms ease, transform 150ms ease, background 150ms ease",
        minHeight: 96,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.style.transform = "translateY(-1px)";
        if (!primary) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = primary ? "rgba(0,200,83,0.40)" : C.border;
        e.currentTarget.style.transform = "translateY(0)";
        if (!primary) e.currentTarget.style.background = "rgba(255,255,255,0.03)";
      }}
    >
      <span style={{
        fontFamily: "var(--font-display)",
        fontSize: 10,
        fontWeight: 700,
        color: accent,
        letterSpacing: 1.4,
        textTransform: "uppercase",
      }}>
        {eyebrow}
      </span>
      <span style={{
        fontFamily: "var(--font-display)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--color-text-strong)",
        lineHeight: 1.25,
        // Lange volgende-stap-titels niet over heel de pagina laten lopen
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
      }}>
        {title}
      </span>
      <span style={{
        fontSize: 11,
        color: C.muted,
      }}>
        {hint}
      </span>
    </button>
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
      <div style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: 18, color: "var(--color-text-strong)" }}>{title}</div>
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
    fontFamily: "var(--font-body)",
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
    color: "var(--color-text-strong)",
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "var(--font-display)",
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
    fontFamily: "var(--font-display)",
    cursor: "pointer",
  };
}

/** Knop "Vraag aan de tutor" — naast de YouTube-knop op de step-pagina.
 *  Visueel onderscheidend (groen-getinte chat-uitstraling) zonder de
 *  primary-CTA te zijn. */
function tutorButtonStyle() {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    marginBottom: 6,
    padding: "9px 14px",
    background: "linear-gradient(135deg, rgba(0,200,83,0.18), rgba(0,200,83,0.10))",
    border: "1px solid rgba(0,200,83,0.45)",
    borderRadius: 12,
    color: "#69F0AE",
    fontFamily: "var(--font-display)",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(0,200,83,0.15)",
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
    fontFamily: "var(--font-body)",
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
    fontFamily: "var(--font-body)",
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 8,
    cursor: locked ? "default" : "pointer",
    opacity: locked && !selected ? 0.55 : 1,
    transition: "all 0.2s",
  };
}

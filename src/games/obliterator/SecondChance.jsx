// SecondChance — modal die verschijnt als de speler in OBLITERATOR alle levens
// kwijt is, maar nog tweede-kansen heeft (max 3 per run).
//
// Flow:
//   1. loading  — pakt due-onderwerp via mastery (fallback random wiskunde-pad)
//   2. lesson   — toont stap-uitleg + SVG. "Begin met vragen"-knop locked 10s.
//   3. quiz     — 5 vragen uit step.checks. Per goed antwoord +1 leven.
//   4. result   — toont eindscore + "Doorspelen"-knop met X levens.
//
// Per goed antwoord wordt mastery geregistreerd via recordAnswerForPath —
// lost meteen de "78 toetsen, 2 mastery records"-bug deels op.
//
// Game-stijl: oranje glow, donker, hoog contrast (zelfde shell als de
// rest van OBLITERATOR — niet pure leer-stijl).

import { useEffect, useMemo, useRef, useState } from "react";
import { ALL_LEARN_PATHS } from "../../learnPaths/index.js";
import { loadDueTopics, recordAnswerForPath } from "../../features/mastery/mastery.js";

// Kandidaat-leerpaden voor random pick. Beginnersvriendelijk, breed wiskunde.
const FALLBACK_PATHS = [
  "breuken",
  "procenten",
  "negatieve-getallen",
  "verhoudingen",
  "rekenen-met-letters",
  "kwadraten-wortels",
];

const LESSON_LOCK_SEC = 10; // hoe lang moet je op de uitleg kijken

// Markdown light: **bold** in tekst.
function renderInline(text) {
  const parts = (text || "").split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} style={{ color: "var(--color-text-strong)" }}>
          {p.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

function renderExplanation(text) {
  if (!text) return null;
  return text.split("\n\n").map((para, i) => (
    <p key={i} style={paraStyle}>
      {para.split("\n").map((line, j) => (
        <span key={j}>
          {renderInline(line)}
          {j < para.split("\n").length - 1 && <br />}
        </span>
      ))}
    </p>
  ));
}

export default function SecondChance({ playerName, chancesUsed, maxChances, onContinue, onGiveUp }) {
  const [phase, setPhase] = useState("loading"); // loading | lesson | quiz | result
  const [topic, setTopic] = useState(null); // { pathId, path, step, questions }
  const [error, setError] = useState(null);

  // Quiz-state
  const [qIdx, setQIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);

  // Lesson-lock countdown
  const [secondsLeft, setSecondsLeft] = useState(LESSON_LOCK_SEC);
  const tickRef = useRef(null);

  // ── Onderwerp ophalen ────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        // 1. Due-onderwerpen (spaced-rep) — eerst proberen
        const due = await loadDueTopics(playerName);
        let pathId = null;
        if (Array.isArray(due) && due.length > 0) {
          pathId = due[0].pathId;
        }
        // 2. Fallback — random uit basis-set
        if (!pathId || !ALL_LEARN_PATHS[pathId]) {
          pathId = FALLBACK_PATHS[Math.floor(Math.random() * FALLBACK_PATHS.length)];
        }
        const path = ALL_LEARN_PATHS[pathId];
        if (!path || !Array.isArray(path.steps) || path.steps.length === 0) {
          throw new Error("Geen geldig leerpad gevonden");
        }
        // Pak een willekeurige stap met checks
        const stepsWithChecks = path.steps
          .map((s, i) => ({ ...s, idx: i }))
          .filter((s) => Array.isArray(s.checks) && s.checks.length > 0);
        if (stepsWithChecks.length === 0) {
          throw new Error("Stap heeft geen vragen");
        }
        const step = stepsWithChecks[Math.floor(Math.random() * stepsWithChecks.length)];
        // Verzamel max 5 vragen (uit deze stap; uitbreiden naar buurstappen indien nodig)
        let questions = [...step.checks];
        if (questions.length < 5) {
          for (const other of stepsWithChecks) {
            if (other.idx === step.idx) continue;
            questions = questions.concat(other.checks);
            if (questions.length >= 5) break;
          }
        }
        questions = questions.slice(0, 5);

        if (!cancelled) {
          setTopic({ pathId, path, step, questions });
          setPhase("lesson");
        }
      } catch (e) {
        if (!cancelled) setError(e.message || "Kon onderwerp niet laden");
      }
    })();
    return () => { cancelled = true; };
  }, [playerName]);

  // ── Lesson countdown ─────────────────────────────────
  useEffect(() => {
    if (phase !== "lesson") return;
    setSecondsLeft(LESSON_LOCK_SEC);
    tickRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(tickRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(tickRef.current);
  }, [phase]);

  // ── Handlers ─────────────────────────────────────────
  const handlePick = (i) => {
    if (revealed) return;
    setPicked(i);
    setRevealed(true);
    const q = topic.questions[qIdx];
    const isCorrect = i === q.answer;
    if (isCorrect) setScore((s) => s + 1);
    // Mastery-registratie (fire-and-forget) — lost deels het mastery-bug-issue op
    if (playerName && topic?.pathId) {
      recordAnswerForPath({ playerName, pathId: topic.pathId, isCorrect }).catch(() => {});
    }
  };

  const handleNext = () => {
    if (qIdx + 1 < topic.questions.length) {
      setQIdx((i) => i + 1);
      setPicked(null);
      setRevealed(false);
    } else {
      setPhase("result");
    }
  };

  // ── Render ───────────────────────────────────────────
  return (
    <div style={overlayStyle}>
      <div style={cardStyle}>
        <div style={headerRowStyle}>
          <span style={eyebrowStyle}>
            💡 TWEEDE KANS{" "}
            <span style={chanceBadgeStyle}>
              {chancesUsed + 1} / {maxChances}
            </span>
          </span>
          <button type="button" onClick={onGiveUp} style={closeBtnStyle} aria-label="Stoppen">
            ✕
          </button>
        </div>

        {phase === "loading" && (
          <div style={centerStyle}>
            <div style={{ fontSize: 36, marginBottom: 8 }} aria-hidden="true">⏳</div>
            <div style={mutedStyle}>Onderwerp zoeken…</div>
          </div>
        )}

        {error && (
          <div style={centerStyle}>
            <div style={{ ...mutedStyle, color: "var(--color-danger)", marginBottom: 12 }}>
              {error}
            </div>
            <button type="button" onClick={onGiveUp} style={ghostBtnStyle}>
              Sluiten
            </button>
          </div>
        )}

        {phase === "lesson" && topic && (
          <LessonPanel
            path={topic.path}
            step={topic.step}
            secondsLeft={secondsLeft}
            onStart={() => setPhase("quiz")}
          />
        )}

        {phase === "quiz" && topic && (
          <QuizPanel
            question={topic.questions[qIdx]}
            qIdx={qIdx}
            total={topic.questions.length}
            score={score}
            picked={picked}
            revealed={revealed}
            onPick={handlePick}
            onNext={handleNext}
          />
        )}

        {phase === "result" && topic && (
          <ResultPanel
            score={score}
            total={topic.questions.length}
            onContinue={() => onContinue(score)}
            onGiveUp={onGiveUp}
          />
        )}
      </div>
    </div>
  );
}

// ─── Sub-panels ───────────────────────────────────────────
function LessonPanel({ path, step, secondsLeft, onStart }) {
  const locked = secondsLeft > 0;
  return (
    <div>
      <div style={lessonTitleRowStyle}>
        <span style={{ fontSize: 28 }} aria-hidden="true">{path.emoji || "📚"}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={pathBadgeStyle}>{path.title}</div>
          <div style={lessonTitleStyle}>{step.title}</div>
        </div>
      </div>
      <div style={contentScrollStyle}>
        {step.svg && (
          <div
            style={svgWrapStyle}
            dangerouslySetInnerHTML={{ __html: step.svg }}
          />
        )}
        <div style={lessonBodyStyle}>{renderExplanation(step.explanation)}</div>
      </div>
      <button
        type="button"
        onClick={onStart}
        disabled={locked}
        style={{
          ...primaryBtnStyle,
          opacity: locked ? 0.6 : 1,
          cursor: locked ? "not-allowed" : "pointer",
        }}
      >
        {locked ? `Lezen… (${secondsLeft}s)` : "Begin met vragen ▶"}
      </button>
    </div>
  );
}

function QuizPanel({ question, qIdx, total, score, picked, revealed, onPick, onNext }) {
  const isCorrect = revealed && picked === question.answer;
  return (
    <div>
      <div style={progressRowStyle}>
        <span>Vraag {qIdx + 1} / {total}</span>
        <span style={{ color: "var(--color-game-power)" }}>
          ❤️ {score} {score === 1 ? "leven" : "levens"} verdiend
        </span>
      </div>
      <div style={questionStyle}>{question.q}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {question.options.map((opt, i) => {
          const isSelected = picked === i;
          const isAnswer = i === question.answer;
          const showAsCorrect = revealed && isAnswer;
          const showAsWrong = revealed && isSelected && !isAnswer;
          return (
            <button
              key={i}
              type="button"
              onClick={() => onPick(i)}
              disabled={revealed}
              style={optionStyle(showAsCorrect, showAsWrong, revealed)}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {revealed && (
        <div
          style={{
            marginTop: 12,
            padding: 10,
            borderRadius: 10,
            background: isCorrect ? "var(--color-success-soft)" : "var(--color-danger-soft)",
            border: `1px solid ${isCorrect ? "var(--color-success)" : "var(--color-danger)"}`,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: "var(--font-weight-bold)",
              color: isCorrect ? "var(--color-success)" : "var(--color-danger)",
              marginBottom: 4,
            }}
          >
            {isCorrect ? "✅ +1 leven verdiend!" : "❌ Geen leven verdiend"}
          </div>
          {question.explanation && (
            <div style={{ fontSize: 13, color: "var(--color-text)", lineHeight: 1.5 }}>
              {question.explanation}
            </div>
          )}
          <button type="button" onClick={onNext} style={{ ...primaryBtnStyle, marginTop: 10 }}>
            {qIdx + 1 < total ? "Volgende vraag ▶" : "Bekijk resultaat ▶"}
          </button>
        </div>
      )}
    </div>
  );
}

function ResultPanel({ score, total, onContinue, onGiveUp }) {
  const earned = score; // 1 leven per correct
  const message =
    earned === 0
      ? "Geen levens verdiend. Volgende keer beter!"
      : earned === total
        ? `Perfect! ${earned} levens verdiend.`
        : earned >= total / 2
          ? `Goed bezig! ${earned} ${earned === 1 ? "leven" : "levens"} verdiend.`
          : `${earned} ${earned === 1 ? "leven" : "levens"} verdiend.`;

  return (
    <div style={centerStyle}>
      <div style={{ fontSize: 48, marginBottom: 4 }} aria-hidden="true">
        {earned === total ? "🎉" : earned > 0 ? "💪" : "😅"}
      </div>
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 24,
          fontWeight: "var(--font-weight-bold)",
          color: "var(--color-game-power)",
          marginBottom: 4,
        }}
      >
        {Array(earned).fill("❤️").join("")}
        {earned === 0 && "💔"}
      </div>
      <div
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: "var(--color-text)",
          marginBottom: 16,
        }}
      >
        {message}
      </div>
      {earned > 0 ? (
        <button type="button" onClick={onContinue} style={primaryBtnStyle}>
          ▶ Doorspelen met {earned} {earned === 1 ? "leven" : "levens"}
        </button>
      ) : (
        <button type="button" onClick={onGiveUp} style={primaryBtnStyle}>
          Naar score-overzicht
        </button>
      )}
      {earned > 0 && (
        <button
          type="button"
          onClick={onGiveUp}
          style={{ ...ghostBtnStyle, marginTop: 8 }}
        >
          Nee, stoppen
        </button>
      )}
    </div>
  );
}

// ─── Styles ───────────────────────────────────────────────
const overlayStyle = {
  position: "absolute",
  inset: 0,
  background: "rgba(0, 0, 0, 0.78)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 12,
  zIndex: 50,
  animation: "fadeIn 200ms ease-out",
};

const cardStyle = {
  width: "100%",
  maxWidth: 440,
  maxHeight: "92%",
  display: "flex",
  flexDirection: "column",
  background: "var(--color-bg-overlay)",
  border: "2px solid var(--color-game-energy)",
  borderRadius: "var(--radius-lg)",
  padding: "var(--space-4)",
  boxShadow: "var(--shadow-glow-game), var(--shadow-lg)",
  fontFamily: "var(--font-body)",
  color: "var(--color-text)",
  overflow: "hidden",
};

const headerRowStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: 12,
};

const eyebrowStyle = {
  fontFamily: "var(--font-display)",
  fontSize: 13,
  fontWeight: "var(--font-weight-bold)",
  color: "var(--color-game-energy)",
  letterSpacing: 0.5,
  display: "inline-flex",
  alignItems: "center",
  gap: 6,
};

const chanceBadgeStyle = {
  background: "var(--color-game-energy)",
  color: "var(--color-bg-base)",
  padding: "1px 8px",
  borderRadius: 999,
  fontSize: 11,
  fontFamily: "var(--font-mono)",
};

const closeBtnStyle = {
  width: 32,
  height: 32,
  border: "none",
  background: "transparent",
  color: "var(--color-text-muted)",
  fontSize: 18,
  cursor: "pointer",
  borderRadius: 999,
};

const centerStyle = {
  textAlign: "center",
  padding: "20px 0",
};

const mutedStyle = {
  color: "var(--color-text-muted)",
  fontSize: 14,
};

const lessonTitleRowStyle = {
  display: "flex",
  alignItems: "center",
  gap: 10,
  marginBottom: 10,
};

const pathBadgeStyle = {
  fontSize: 11,
  color: "var(--color-game-power)",
  fontFamily: "var(--font-display)",
  fontWeight: "var(--font-weight-bold)",
  letterSpacing: 0.4,
};

const lessonTitleStyle = {
  fontFamily: "var(--font-display)",
  fontSize: 18,
  fontWeight: "var(--font-weight-bold)",
  color: "var(--color-text-strong)",
  lineHeight: 1.2,
};

const contentScrollStyle = {
  overflowY: "auto",
  padding: "8px 4px",
  maxHeight: 320,
  marginBottom: 12,
  background: "rgba(0,0,0,0.25)",
  borderRadius: 12,
};

const svgWrapStyle = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 8,
  padding: 6,
};

const lessonBodyStyle = {
  fontSize: 14,
  lineHeight: 1.6,
  padding: "0 8px",
  color: "var(--color-text)",
};

const paraStyle = {
  margin: "0 0 10px 0",
};

const progressRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  fontSize: 12,
  color: "var(--color-text-muted)",
  fontFamily: "var(--font-display)",
  fontWeight: "var(--font-weight-bold)",
  marginBottom: 8,
};

const questionStyle = {
  fontSize: 16,
  fontFamily: "var(--font-body)",
  fontWeight: "var(--font-weight-bold)",
  color: "var(--color-text-strong)",
  marginBottom: 12,
  lineHeight: 1.4,
};

function optionStyle(showAsCorrect, showAsWrong, locked) {
  let bg = "var(--color-bg-elevated)";
  let border = "var(--color-border)";
  if (showAsCorrect) {
    bg = "var(--color-success-soft)";
    border = "var(--color-success)";
  } else if (showAsWrong) {
    bg = "var(--color-danger-soft)";
    border = "var(--color-danger)";
  }
  return {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "10px 14px",
    border: `2px solid ${border}`,
    borderRadius: 10,
    background: bg,
    color: "var(--color-text)",
    fontFamily: "var(--font-body)",
    fontSize: 14,
    fontWeight: "var(--font-weight-medium)",
    cursor: locked ? "default" : "pointer",
    opacity: locked && !showAsCorrect && !showAsWrong ? 0.55 : 1,
    minHeight: 44,
    transition: "background var(--motion-fast) var(--ease-out)",
  };
}

const primaryBtnStyle = {
  width: "100%",
  padding: "12px 16px",
  border: "1px solid #d84315",
  borderRadius: 12,
  background: "var(--color-game-energy)",
  color: "var(--color-text-strong)",
  fontFamily: "var(--font-display)",
  fontSize: 15,
  fontWeight: "var(--font-weight-bold)",
  cursor: "pointer",
  boxShadow: "var(--shadow-glow-game)",
  letterSpacing: 0.4,
  minHeight: 44,
};

const ghostBtnStyle = {
  width: "100%",
  padding: "10px 16px",
  border: "1px solid var(--color-border)",
  borderRadius: 12,
  background: "transparent",
  color: "var(--color-text-muted)",
  fontFamily: "var(--font-display)",
  fontSize: 14,
  fontWeight: "var(--font-weight-bold)",
  cursor: "pointer",
  minHeight: 44,
};

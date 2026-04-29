import { useState, useEffect } from "react";
import { recordAnswerForPath } from "../mastery/mastery.js";
import Button from "../../shared/ui/Button.jsx";

// Drempel voor "voldoende beheersing" — 2/3 of meer → mag verder.
// Dit is bewust niet 100%: één foutje moet niet verlammend werken.
const PASS_RATIO = 2 / 3;

/**
 * MiniQuiz na een leerpad-stap (P1.7 adaptief).
 *
 * Props sinds P1.7:
 *   - pathId, playerName: voor mastery-registratie via recordAnswer.
 *   - onLessonReturn: callback om de leerling terug te sturen naar de
 *     bijbehorende leerpad-stap als ze de drempel niet halen.
 *
 * Design-system v1: tokens + Button. Gele warm-accent border (warning-tone)
 * markeert visueel dat dit een tussen-quiz is, niet de hoofdtoets.
 */
export default function MiniQuiz({
  subject,
  level,
  topicLabel,
  count = 3,
  onClose,
  pathId = null,
  playerName = null,
  onLessonReturn = null,
}) {
  const [questions, setQuestions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [idx, setIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/generate-questions", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            subject: subject || "wiskunde",
            level: level || "klas1-vwo",
            topic: topicLabel,
            count,
          }),
        });
        const data = await res.json();
        if (cancelled) return;
        if (data?.questions && Array.isArray(data.questions) && data.questions.length > 0) {
          setQuestions(data.questions);
        } else {
          setError(data?.error || "Geen vragen ontvangen");
        }
      } catch (e) {
        if (!cancelled) setError(e.message || "Fout bij laden");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [subject, level, topicLabel, count]);

  const current = questions?.[idx];

  const handlePick = (i) => {
    if (showResult) return;
    setSelected(i);
    setShowResult(true);
    const isCorrect = i === current.answer;
    if (isCorrect) setScore(score + 1);

    if (playerName && pathId) {
      recordAnswerForPath({ playerName, pathId, isCorrect }).catch(() => {});
    }
  };

  const handleNext = () => {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setIdx(idx + 1);
    }
  };

  const allDone = questions && idx >= questions.length;
  const isCorrectChoice = showResult && selected === current?.answer;

  return (
    <div style={containerStyle}>
      <div style={headerRowStyle}>
        <div style={eyebrowStyle}>📝 Test wat je net leerde</div>
        <button type="button" aria-label="Sluiten" onClick={onClose} style={iconBtnStyle}>
          ✕
        </button>
      </div>

      {loading && (
        <div style={{ textAlign: "center", padding: "var(--space-5) 0" }}>
          <div style={{ fontSize: 32, marginBottom: "var(--space-2)" }} aria-hidden="true">⏳</div>
          <div style={{ color: "var(--color-text-muted)", fontSize: "var(--font-size-sm)" }}>
            Even wachten — vragen worden gemaakt door AI…
          </div>
        </div>
      )}

      {error && !loading && (
        <div style={{ textAlign: "center", padding: "var(--space-3) 0" }}>
          <div
            style={{
              color: "var(--color-danger)",
              fontSize: "var(--font-size-md)",
              marginBottom: "var(--space-3)",
            }}
          >
            Kon geen vragen laden: {error}
          </div>
          <Button variant="ghost" fullWidth onClick={onClose}>
            Sluiten
          </Button>
        </div>
      )}

      {questions && !allDone && current && (
        <>
          <div
            style={{
              fontSize: "var(--font-size-xs)",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-1)",
            }}
          >
            Vraag {idx + 1} van {questions.length} · score: {score}
          </div>
          <div
            style={{
              fontSize: "var(--font-size-md)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-text-strong)",
              marginBottom: "var(--space-3)",
              lineHeight: "var(--line-height-snug)",
            }}
          >
            {current.q}
          </div>
          {current.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = i === current.answer;
            const showAsCorrect = showResult && isCorrect;
            const showAsWrong = showResult && isSelected && !isCorrect;
            return (
              <button
                key={i}
                type="button"
                onClick={() => handlePick(i)}
                disabled={showResult}
                style={optionStyle(showAsCorrect, showAsWrong, showResult)}
              >
                {opt}
              </button>
            );
          })}
          {showResult && (
            <div
              style={{
                marginTop: "var(--space-3)",
                padding: "var(--space-3)",
                borderRadius: "var(--radius-sm)",
                background: isCorrectChoice
                  ? "var(--color-success-soft)"
                  : "var(--color-danger-soft)",
                border: `1px solid ${
                  isCorrectChoice ? "var(--color-success)" : "var(--color-danger)"
                }`,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: "var(--font-weight-bold)",
                  color: isCorrectChoice ? "var(--color-success)" : "var(--color-danger)",
                  marginBottom: "var(--space-1)",
                }}
              >
                {isCorrectChoice ? "✅ Goed!" : "❌ Niet helemaal"}
              </div>
              {current.explanation && (
                <div
                  style={{
                    fontSize: "var(--font-size-sm)",
                    color: "var(--color-text)",
                    lineHeight: "var(--line-height-normal)",
                  }}
                >
                  {current.explanation}
                </div>
              )}
              <Button
                variant="primary"
                fullWidth
                onClick={handleNext}
                style={{ marginTop: "var(--space-3)" }}
              >
                {idx + 1 < questions.length ? "Volgende vraag ▶" : "Bekijk eindscore ▶"}
              </Button>
            </div>
          )}
        </>
      )}

      {allDone && questions && (() => {
        const ratio = score / questions.length;
        const isPerfect = score === questions.length;
        const isPassing = ratio >= PASS_RATIO;
        return (
          <div style={{ textAlign: "center", padding: "var(--space-3) 0" }}>
            <div style={{ fontSize: 36, marginBottom: "var(--space-1)" }} aria-hidden="true">
              {isPerfect ? "🎉" : isPassing ? "👍" : "💪"}
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-lg)",
                fontWeight: "var(--font-weight-bold)",
                color: "var(--color-text-strong)",
                marginBottom: "var(--space-1)",
              }}
            >
              {score} van {questions.length} goed
            </div>
            <div
              style={{
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text-muted)",
                marginBottom: "var(--space-4)",
                lineHeight: "var(--line-height-normal)",
              }}
            >
              {isPerfect
                ? "Helemaal vlekkeloos! Klaar voor de volgende stap."
                : isPassing
                ? "Goede start — je beheerst de stof voldoende."
                : "Nog niet sterk genoeg. Lees de uitleg eerst opnieuw, daarna nog een ronde."}
            </div>
            {isPassing ? (
              <Button variant="primary" fullWidth onClick={onClose}>
                Door naar de volgende stap ▶
              </Button>
            ) : (
              <>
                <Button
                  variant="primary"
                  fullWidth
                  onClick={() => {
                    if (onLessonReturn) onLessonReturn();
                    else onClose();
                  }}
                >
                  📖 Lees de uitleg opnieuw
                </Button>
                <Button
                  variant="ghost"
                  fullWidth
                  onClick={onClose}
                  style={{ marginTop: "var(--space-2)" }}
                >
                  Sluiten
                </Button>
              </>
            )}
          </div>
        );
      })()}
    </div>
  );
}

const containerStyle = {
  background: "var(--color-bg-glass)",
  border: "2px solid var(--color-warning)",
  borderRadius: "var(--radius-lg)",
  padding: "var(--space-4)",
  marginTop: "var(--space-4)",
  fontFamily: "var(--font-body)",
};

const headerRowStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "var(--space-3)",
};

const eyebrowStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--font-size-sm)",
  fontWeight: "var(--font-weight-bold)",
  color: "var(--color-warning)",
};

const iconBtnStyle = {
  border: "none",
  background: "transparent",
  color: "var(--color-text-muted)",
  fontSize: 18,
  cursor: "pointer",
  padding: 4,
  width: 32,
  height: 32,
  borderRadius: "var(--radius-pill)",
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
    padding: "var(--space-3) var(--space-4)",
    border: `2px solid ${border}`,
    borderRadius: "var(--radius-sm)",
    background: bg,
    color: "var(--color-text)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--font-size-md)",
    fontWeight: "var(--font-weight-medium)",
    marginBottom: "var(--space-2)",
    cursor: locked ? "default" : "pointer",
    opacity: locked && !showAsCorrect && !showAsWrong ? 0.6 : 1,
    minHeight: "var(--tap-target-min)",
    transition: "background var(--motion-fast) var(--ease-out)",
  };
}

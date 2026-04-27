import { useState, useEffect } from "react";

const C = {
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  good: "#00c853",
  bad: "#ff5252",
  warm: "#ffd54f",
};

export default function MiniQuiz({ subject, level, topicLabel, count = 3, onClose }) {
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
    if (i === current.answer) setScore(score + 1);
  };

  const handleNext = () => {
    if (idx + 1 < questions.length) {
      setIdx(idx + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setIdx(idx + 1); // triggered einde-scherm
    }
  };

  const allDone = questions && idx >= questions.length;

  return (
    <div style={cardStyle()}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.warm }}>
          📝 Test wat je net leerde
        </div>
        <button onClick={onClose} style={iconBtn()}>✕</button>
      </div>

      {loading && (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>⏳</div>
          <div style={{ color: C.muted, fontSize: 13 }}>
            Even wachten — vragen worden gemaakt door AI...
          </div>
        </div>
      )}

      {error && !loading && (
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ color: C.bad, fontSize: 14, marginBottom: 10 }}>
            Kon geen vragen laden: {error}
          </div>
          <button onClick={onClose} style={btnSecondary()}>Sluiten</button>
        </div>
      )}

      {questions && !allDone && current && (
        <>
          <div style={{ fontSize: 12, color: C.muted, marginBottom: 6 }}>
            Vraag {idx + 1} van {questions.length} · score: {score}
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
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
                marginTop: 10,
                padding: 10,
                borderRadius: 10,
                background: selected === current.answer ? "rgba(0,200,83,0.10)" : "rgba(255,82,82,0.10)",
                border: `1px solid ${selected === current.answer ? C.good : C.bad}`,
              }}
            >
              <div style={{ fontWeight: 700, color: selected === current.answer ? C.good : C.bad, marginBottom: 4 }}>
                {selected === current.answer ? "✅ Goed!" : "❌ Niet helemaal"}
              </div>
              {current.explanation && (
                <div style={{ fontSize: 13, color: C.text, lineHeight: 1.5 }}>{current.explanation}</div>
              )}
              <button onClick={handleNext} style={{ ...btnPrimary(), marginTop: 10 }}>
                {idx + 1 < questions.length ? "Volgende vraag ▶" : "Bekijk eindscore ▶"}
              </button>
            </div>
          )}
        </>
      )}

      {allDone && questions && (
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ fontSize: 36, marginBottom: 4 }}>
            {score === questions.length ? "🎉" : score >= questions.length / 2 ? "👍" : "💪"}
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#fff", marginBottom: 4 }}>
            {score} van {questions.length} goed
          </div>
          <div style={{ fontSize: 13, color: C.muted, marginBottom: 14 }}>
            {score === questions.length
              ? "Helemaal vlekkeloos! Klaar voor de volgende stap."
              : score >= questions.length / 2
              ? "Goede start. Lees de uitleg nog eens als je wil."
              : "Nog niet helemaal — lees de uitleg even opnieuw door."}
          </div>
          <button onClick={onClose} style={btnPrimary()}>
            Terug naar het leerpad
          </button>
        </div>
      )}
    </div>
  );
}

function cardStyle() {
  return {
    background: C.card,
    border: `2px solid ${C.warm}`,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  };
}

function btnPrimary() {
  return {
    width: "100%",
    padding: "12px 16px",
    border: "none",
    borderRadius: 12,
    background: `linear-gradient(135deg, ${C.good}, #00a040)`,
    color: "#fff",
    fontWeight: 700,
    fontSize: 15,
    fontFamily: "'Fredoka', sans-serif",
    cursor: "pointer",
    boxShadow: "0 3px 12px rgba(0,200,83,0.25)",
  };
}

function btnSecondary() {
  return {
    width: "100%",
    padding: "10px 16px",
    border: `2px solid ${C.border}`,
    borderRadius: 12,
    background: "transparent",
    color: C.text,
    fontWeight: 700,
    fontSize: 14,
    fontFamily: "'Fredoka', sans-serif",
    cursor: "pointer",
  };
}

function iconBtn() {
  return {
    border: "none",
    background: "transparent",
    color: C.muted,
    fontSize: 18,
    cursor: "pointer",
    padding: 4,
  };
}

function optionStyle(showAsCorrect, showAsWrong, locked) {
  let bg = "#1e2d45";
  let border = C.border;
  if (showAsCorrect) {
    bg = "rgba(0,200,83,0.18)";
    border = C.good;
  } else if (showAsWrong) {
    bg = "rgba(255,82,82,0.18)";
    border = C.bad;
  }
  return {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "11px 14px",
    border: `2px solid ${border}`,
    borderRadius: 10,
    background: bg,
    color: C.text,
    fontFamily: "'Nunito', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 7,
    cursor: locked ? "default" : "pointer",
    opacity: locked && !showAsCorrect && !showAsWrong ? 0.55 : 1,
  };
}

import { useState, useMemo, useEffect, useRef } from "react";
import Header from "./Header.jsx";
import { sampleCitoMix, scoreCitoMix } from "../shared/citoMixVragen.js";

// Sprint C v1 (2026-05-08): oefen-Cito op basis van onze eigen leerpad-checks.
// 30 vragen · 30 min countdown · score per onderdeel.
// Beoogd voor groep 7-8 die zich voorbereidt op de eindtoets.

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  good: "#00c853",
  bad: "#ff5252",
  warm: "#ffd54f",
  accent: "#ff6b35",
};

const PIJLER_LABEL = {
  rekenen: "Rekenen",
  taal: "Taal",
  studievaardigheden: "Studievaardigheden",
};

const PIJLER_COLOR = {
  rekenen: "#00c853",
  taal: "#00b0ff",
  studievaardigheden: "#e040fb",
};

function formatTime(secs) {
  const m = Math.floor(secs / 60);
  const s = secs % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

export default function CitoLeerpadToets({ onBack, onHome, onPickPath }) {
  // mode: "intro" | "running" | "done"
  const [mode, setMode] = useState("intro");
  const [config, setConfig] = useState({ count: 30, minutes: 30 });
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [idx, setIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const tickRef = useRef(null);

  // Countdown
  useEffect(() => {
    if (mode !== "running") return;
    tickRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(tickRef.current);
          setMode("done");
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(tickRef.current);
  }, [mode]);

  const start = () => {
    const qs = sampleCitoMix(config.count);
    // Schud opties per vraag zodat antwoord 0 niet altijd correct is.
    const shuffled = qs.map((q) => {
      const order = q.options.map((_, i) => i);
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      return {
        ...q,
        options: order.map((i) => q.options[i]),
        answer: order.indexOf(q.answer),
        wrongHints: order.map((i) => q.wrongHints?.[i] ?? null),
      };
    });
    setQuestions(shuffled);
    setAnswers(new Array(shuffled.length).fill(null));
    setIdx(0);
    setSecondsLeft(config.minutes * 60);
    setMode("running");
  };

  const score = useMemo(() => {
    if (mode !== "done") return null;
    return scoreCitoMix(questions, answers);
  }, [mode, questions, answers]);

  const pickAnswer = (a) => {
    setAnswers((prev) => {
      const next = prev.slice();
      next[idx] = a;
      return next;
    });
  };

  const goNext = () => {
    if (idx + 1 < questions.length) setIdx(idx + 1);
    else setMode("done");
  };
  const goPrev = () => {
    if (idx > 0) setIdx(idx - 1);
  };
  const finishEarly = () => {
    if (window.confirm("Weet je zeker dat je nu wilt stoppen? Niet-beantwoorde vragen tellen als fout.")) {
      setMode("done");
    }
  };

  // ── Intro ────────────────────────────────
  if (mode === "intro") {
    return (
      <div style={pageStyle()}>
        <Header title="Oefen-Cito 🎯" subtitle="30 vragen uit Leerkwartier-paden" onBack={onBack} onHome={onHome} />
        <div style={{ padding: "16px 18px 32px", color: C.text }}>
          <p style={{ fontSize: 14, lineHeight: 1.55, marginBottom: 18 }}>
            Een echte oefen-toets met vragen uit de leerpaden die je hier op Leerkwartier hebt gedaan.
            Mix van <strong style={{ color: PIJLER_COLOR.rekenen }}>rekenen</strong>,{" "}
            <strong style={{ color: PIJLER_COLOR.taal }}>taal</strong> en{" "}
            <strong style={{ color: PIJLER_COLOR.studievaardigheden }}>studievaardigheden</strong>.
          </p>

          <div style={{ ...cardStyle(), marginBottom: 14 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: C.warm, marginBottom: 6 }}>
              ⏱️ Hoe het werkt
            </div>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, lineHeight: 1.6 }}>
              <li>{config.count} meerkeuze-vragen</li>
              <li>{config.minutes} minuten countdown</li>
              <li>Je kunt vooruit en terug navigeren</li>
              <li>Aan het einde: score per onderdeel + hints</li>
            </ul>
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={{ fontSize: 13, color: C.muted, fontWeight: 700, marginBottom: 8 }}>Aantal vragen</div>
            <div style={{ display: "flex", gap: 8 }}>
              {[15, 30, 50].map((n) => (
                <button
                  key={n}
                  onClick={() => setConfig((c) => ({ ...c, count: n, minutes: Math.round(n) }))}
                  style={pillStyle(config.count === n)}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 22 }}>
            <div style={{ fontSize: 13, color: C.muted, fontWeight: 700, marginBottom: 8 }}>Minuten</div>
            <div style={{ display: "flex", gap: 8 }}>
              {[15, 30, 60].map((m) => (
                <button
                  key={m}
                  onClick={() => setConfig((c) => ({ ...c, minutes: m }))}
                  style={pillStyle(config.minutes === m)}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          <button onClick={start} style={btnPrimary()}>
            🚀 Start oefen-Cito
          </button>
        </div>
      </div>
    );
  }

  // ── Done ─────────────────────────────────
  if (mode === "done") {
    const answered = answers.filter((a) => a !== null).length;
    return (
      <div style={pageStyle()}>
        <Header title="Klaar! 🎉" subtitle="Je oefen-Cito-uitslag" onBack={onBack} onHome={onHome} />
        <div style={{ padding: "16px 18px 40px", color: C.text }}>
          <div style={{ ...cardStyle(), textAlign: "center", marginBottom: 18 }}>
            <div style={{ fontSize: 56, fontFamily: "var(--font-display)", fontWeight: 800, color: scoreColor(score?.total?.pct) }}>
              {score?.total?.pct}%
            </div>
            <div style={{ fontSize: 14, color: C.muted, marginTop: 4 }}>
              {score?.total?.correct} van {score?.total?.total} goed
              {answered < questions.length && ` · ${questions.length - answered} niet beantwoord`}
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, marginBottom: 10 }}>
              Per onderdeel
            </div>
            {Object.entries(score?.perPijler || {}).map(([pij, s]) => (
              <div
                key={pij}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "10px 14px",
                  marginBottom: 6,
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${C.border}`,
                  borderRadius: 10,
                }}
              >
                <span style={{ width: 8, height: 28, background: PIJLER_COLOR[pij] || C.muted, borderRadius: 4 }} />
                <span style={{ flex: 1, fontWeight: 600 }}>{PIJLER_LABEL[pij] || pij}</span>
                <span style={{ color: C.muted, fontSize: 12 }}>
                  {s.correct}/{s.total}
                </span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: scoreColor(s.pct), minWidth: 56, textAlign: "right" }}>
                  {s.pct}%
                </span>
              </div>
            ))}
          </div>

          <div style={{ ...cardStyle(), marginBottom: 14 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: C.warm, marginBottom: 6 }}>
              📚 Vragen die fout gingen
            </div>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 10 }}>
              Klik op een vraag om naar het bijbehorende leerpad te springen.
            </div>
            {questions.map((q, i) => {
              const wrong = answers[i] !== q.answer;
              if (!wrong) return null;
              return (
                <button
                  key={q.id}
                  onClick={() => onPickPath && onPickPath(q.pathId, q.stepIdx)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "10px 12px",
                    marginBottom: 6,
                    background: "rgba(255,82,82,0.06)",
                    border: "1px solid rgba(255,82,82,0.2)",
                    borderRadius: 10,
                    color: C.text,
                    cursor: onPickPath ? "pointer" : "default",
                  }}
                >
                  <div style={{ fontSize: 13, marginBottom: 4 }}>
                    {q.question.length > 100 ? q.question.slice(0, 100) + "…" : q.question}
                  </div>
                  <div style={{ fontSize: 11, color: C.muted }}>
                    📖 {q.pathTitle} · stap {q.stepIdx + 1} ›
                  </div>
                </button>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setMode("intro")} style={btnSecondary()}>
              🔄 Nieuwe oefen-Cito
            </button>
            <button onClick={onHome} style={btnPrimary()}>
              🏠 Naar home
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Running ──────────────────────────────
  const q = questions[idx];
  const answered = answers[idx];
  return (
    <div style={pageStyle()}>
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: C.bg,
          borderBottom: `1px solid ${C.border}`,
          padding: "12px 18px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
          <span style={{ fontSize: 13, color: C.muted }}>
            Vraag {idx + 1} van {questions.length}
          </span>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 20,
              fontWeight: 800,
              color: secondsLeft < 60 ? C.bad : C.warm,
            }}
          >
            ⏱️ {formatTime(secondsLeft)}
          </span>
        </div>
        <div style={{ height: 6, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
          <div
            style={{
              width: `${((idx + 1) / questions.length) * 100}%`,
              height: "100%",
              background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
              transition: "width 0.3s",
            }}
          />
        </div>
      </div>

      <div style={{ padding: "16px 18px 100px", color: C.text }}>
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: PIJLER_COLOR[q.subject] || C.muted,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            marginBottom: 6,
          }}
        >
          {PIJLER_LABEL[q.subject] || q.subject}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            lineHeight: 1.4,
            marginBottom: 18,
            color: "var(--color-text-strong)",
          }}
        >
          {q.question}
        </div>

        {q.options.map((opt, i) => {
          const isSelected = answered === i;
          return (
            <button
              key={i}
              onClick={() => pickAnswer(i)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "14px 16px",
                marginBottom: 10,
                background: isSelected ? "rgba(0,200,83,0.18)" : "rgba(255,255,255,0.04)",
                border: `2px solid ${isSelected ? C.good : C.border}`,
                borderRadius: 12,
                color: C.text,
                fontFamily: "var(--font-body)",
                fontSize: 15,
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontWeight: 700, color: isSelected ? C.good : C.muted, marginRight: 10 }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          padding: 12,
          background: C.bg,
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          gap: 10,
        }}
      >
        <button onClick={goPrev} disabled={idx === 0} style={btnSecondary(idx === 0)}>
          ← Vorige
        </button>
        <button onClick={finishEarly} style={btnSecondary()}>
          🛑 Stop
        </button>
        <button onClick={goNext} style={btnPrimary()}>
          {idx + 1 === questions.length ? "✓ Klaar" : "Volgende →"}
        </button>
      </div>
    </div>
  );
}

// ── styles ──
function pageStyle() {
  return {
    minHeight: "100vh",
    background: C.bg,
    fontFamily: "var(--font-body)",
    color: C.text,
  };
}
function cardStyle() {
  return {
    background: C.card,
    border: `1px solid ${C.border}`,
    borderRadius: 14,
    padding: "14px 16px",
  };
}
function btnPrimary() {
  return {
    flex: 1,
    padding: "14px 16px",
    background: `linear-gradient(135deg, ${C.accent}, #ff8c42)`,
    border: "none",
    borderRadius: 12,
    color: "#fff",
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
  };
}
function btnSecondary(disabled) {
  return {
    flex: 1,
    padding: "12px 16px",
    background: disabled ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.06)",
    border: `1px solid ${C.border}`,
    borderRadius: 12,
    color: disabled ? "rgba(255,255,255,0.25)" : C.text,
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: 14,
    cursor: disabled ? "not-allowed" : "pointer",
  };
}
function pillStyle(active) {
  return {
    padding: "10px 18px",
    background: active ? "rgba(255,107,53,0.18)" : "rgba(255,255,255,0.05)",
    border: active ? `2px solid ${C.accent}` : `1px solid ${C.border}`,
    borderRadius: 10,
    color: active ? C.accent : C.muted,
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
  };
}
function scoreColor(pct) {
  if (pct >= 80) return C.good;
  if (pct >= 60) return C.warm;
  return C.bad;
}

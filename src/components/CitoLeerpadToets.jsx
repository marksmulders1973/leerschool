import { useState, useMemo, useEffect, useRef } from "react";
import Header from "./Header.jsx";
import DoorstroomtoetsLogo from "./DoorstroomtoetsLogo.jsx";
import { sampleCitoMix, scoreCitoMix } from "../shared/citoMixVragen.js";
import MdInline from "../shared/ui/MdInline.jsx";
import { shuffleOptions } from "../shared/shuffleOptions.js";
import { formatTime, scoreColor as fmtScoreColor } from "../shared/format.js";
import VraagUitlegPad from "../features/learn/VraagUitlegPad.jsx";

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

export default function CitoLeerpadToets({ onBack, onHome, onPickPath, subjectFilter, subjectLabel }) {
  // mode: "intro" | "running" | "done"
  const [mode, setMode] = useState("intro");
  const [config, setConfig] = useState({ count: 15, minutes: 15 });
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [idx, setIdx] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const tickRef = useRef(null);
  // Per foute vraag: uitklap-staat van het uitleg-blok + uitlegPad-staat.
  // Twee aparte sets zodat de gebruiker eerst de korte uitleg ziet en pas
  // dan het volledige uitlegPad opent (consistent met LearnPath-flow).
  const [expandedWrong, setExpandedWrong] = useState(() => new Set());
  const [showUitlegFor, setShowUitlegFor] = useState(() => new Set());
  const toggleSet = (setter, id) => setter((prev) => {
    const next = new Set(prev);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });

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
    const qs = sampleCitoMix(config.count, null, Math.random, { subjectFilter });
    // Shuffle opties per vraag zodat antwoord 0 niet altijd correct is.
    const shuffled = qs.map((q) => shuffleOptions(q));
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
        <Header
          title={<span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>{subjectFilter ? `Doorstroomtoets ${subjectLabel || subjectFilter}` : "Oefen-Doorstroomtoets"} <DoorstroomtoetsLogo size={22} /></span>}
          subtitle={`${config.count} vragen uit Leerkwartier-paden`}
          onBack={onBack}
          onHome={onHome}
        />
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
            🚀 Start oefen-Doorstroomtoets
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
        <Header title="Klaar! 🎉" subtitle="Je oefen-Doorstroomtoets-uitslag" onBack={onBack} onHome={onHome} />
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
              Per fout zie je de hint. Klik op <strong style={{ color: "#5db3ff" }}>"▼ Meer uitleg & leerpad"</strong> voor de volledige uitleg + naar het leerpad.
            </div>
            {questions.map((q, i) => {
              const wrong = answers[i] !== q.answer;
              if (!wrong) return null;
              const givenIdx = answers[i];
              const givenLabel = givenIdx !== null && givenIdx !== undefined
                ? q.options[givenIdx]
                : null;
              const correctLabel = q.options[q.answer];
              const hint = givenIdx !== null && givenIdx !== undefined
                ? q.wrongHints?.[givenIdx]
                : null;
              const isExpanded = expandedWrong.has(q.id);
              const isUitlegOpen = showUitlegFor.has(q.id);
              const hasUitlegPad = !!q.uitlegPad;
              const hasExplanation = !!q.explanation;
              const hasMore = hasUitlegPad || hasExplanation || !!onPickPath;
              return (
                <div
                  key={q.id}
                  style={{
                    padding: "12px 14px",
                    marginBottom: 8,
                    background: "rgba(255,82,82,0.06)",
                    border: "1px solid rgba(255,82,82,0.2)",
                    borderRadius: 10,
                    color: C.text,
                  }}
                >
                  <div style={{ fontSize: 13, marginBottom: 6, lineHeight: 1.4 }}>
                    <MdInline text={q.question} />
                  </div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>
                    {givenLabel === null ? (
                      <span style={{ color: "#ffb74d" }}>Niet beantwoord</span>
                    ) : (
                      <>Jouw antwoord: <span style={{ color: C.bad }}><MdInline text={givenLabel} /></span></>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted, marginBottom: hint ? 6 : 4 }}>
                    Goede antwoord: <span style={{ color: C.good, fontWeight: 700 }}><MdInline text={correctLabel} /></span>
                  </div>
                  {hint && (
                    <div
                      style={{
                        fontSize: 12,
                        background: "rgba(255,213,79,0.08)",
                        border: "1px solid rgba(255,213,79,0.25)",
                        borderRadius: 8,
                        padding: "8px 10px",
                        marginBottom: 6,
                        color: "#ffd54f",
                        lineHeight: 1.5,
                      }}
                    >
                      💡 <MdInline text={hint} />
                    </div>
                  )}
                  {hasMore && (
                    <button
                      onClick={() => toggleSet(setExpandedWrong, q.id)}
                      style={{
                        background: "rgba(66,165,245,0.10)",
                        border: "1px solid rgba(66,165,245,0.35)",
                        color: "#5db3ff",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        fontSize: 12,
                        cursor: "pointer",
                        padding: "8px 12px",
                        borderRadius: 8,
                        minHeight: 36,
                        width: "100%",
                        textAlign: "left",
                        marginTop: 4,
                      }}
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? "▲ Verberg uitleg" : "▼ Meer uitleg & leerpad"}
                    </button>
                  )}
                  {isExpanded && (
                    <div style={{ marginTop: 10 }}>
                      {hasExplanation && (
                        <div
                          style={{
                            fontSize: 13,
                            lineHeight: 1.55,
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 8,
                            padding: "10px 12px",
                            marginBottom: 10,
                            color: C.text,
                          }}
                        >
                          <div style={{ fontWeight: 700, color: "#5db3ff", marginBottom: 4, fontSize: 12 }}>📘 Uitleg</div>
                          <MdInline text={q.explanation} />
                        </div>
                      )}
                      {hasUitlegPad && !isUitlegOpen && (
                        <button
                          onClick={() => toggleSet(setShowUitlegFor, q.id)}
                          style={{
                            background: "linear-gradient(135deg, #42a5f5, #5db3ff)",
                            border: "none",
                            color: "#fff",
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: 13,
                            cursor: "pointer",
                            padding: "10px 14px",
                            borderRadius: 10,
                            minHeight: 44,
                            width: "100%",
                            marginBottom: 8,
                          }}
                        >
                          📚 Bekijk het uitlegpad
                        </button>
                      )}
                      {hasUitlegPad && isUitlegOpen && (
                        <VraagUitlegPad
                          uitlegPad={q.uitlegPad}
                          vraagId={`${q.pathId}__${q.stepIdx}__${q.checkIdx ?? 0}`}
                          onClose={() => toggleSet(setShowUitlegFor, q.id)}
                        />
                      )}
                      {onPickPath && (
                        <button
                          onClick={() => onPickPath(q.pathId, q.stepIdx)}
                          style={{
                            background: "rgba(255,255,255,0.06)",
                            border: `1px solid ${C.border}`,
                            color: C.text,
                            fontFamily: "var(--font-display)",
                            fontWeight: 600,
                            fontSize: 13,
                            cursor: "pointer",
                            padding: "10px 14px",
                            borderRadius: 10,
                            minHeight: 44,
                            width: "100%",
                            marginTop: hasUitlegPad ? 0 : 0,
                            textAlign: "left",
                          }}
                        >
                          📖 Naar het leerpad: <strong>{q.pathTitle}</strong> · stap {q.stepIdx + 1} ›
                        </button>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <button onClick={() => setMode("intro")} style={btnSecondary()}>
              🔄 Nieuwe oefen-Doorstroomtoets
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
          <MdInline text={q.question} />
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
              <MdInline text={opt} />
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
    minHeight: "100dvh",
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
  return fmtScoreColor(pct, { good: C.good, warm: C.warm, bad: C.bad });
}

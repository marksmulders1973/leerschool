import { useState, useEffect } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS } from "../constants.js";
import { SoundEngine, daysUntil, formatDate } from "../utils.js";
import Header from "./Header.jsx";

export default function StudentHome({ userName, quizzes, progress, onJoinQuiz, onSelfStudy, onBack, onHome, onViewProgress, onLeaderboard, onTextbook, pendingCode, streak, onViewResult }) {
  const [code, setCode] = useState(pendingCode || "");
  const [error, setError] = useState("");
  const [showCode, setShowCode] = useState(!!pendingCode);

  // Als er een pendingCode is, direct joinen
  useEffect(() => {
    if (pendingCode) {
      const quiz = quizzes.find((q) => q.code.toUpperCase() === pendingCode.toUpperCase());
      if (quiz) { onJoinQuiz(pendingCode); }
    }
  }, [pendingCode, quizzes]);

  const handleJoin = async () => {
    if (code.trim().length < 3) { setError("Vul een geldige code in"); return; }
    const upper = code.trim().toUpperCase();
    const local = quizzes.find((q) => q.code.toUpperCase() === upper);
    if (local?.deadline && new Date(local.deadline) < new Date()) {
      setError(`Deze quiz is verlopen op ${new Date(local.deadline).toLocaleDateString("nl-NL")} 📅`);
      return;
    }
    setError("");
    const result = await onJoinQuiz(upper);
    if (result === "not_found") setError("Quiz niet gevonden 😕");
  };

  const recentProgress = progress.slice(-5).reverse();

  // Streak protection: check if today has been played
  const streakWarning = (() => {
    if (!streak || streak <= 0) return null;
    try {
      const s = JSON.parse(localStorage.getItem("ls_streak") || '{"streak":0,"last":""}');
      const today = new Date().toISOString().split("T")[0];
      if (s.last !== today) return streak;
    } catch {}
    return null;
  })();

  // Weakest subject: min 2 attempts, lowest average percentage
  const weakestSubject = (() => {
    if (!progress || progress.length === 0) return null;
    const bySubject = {};
    progress.forEach((p) => {
      if (!bySubject[p.subject]) bySubject[p.subject] = [];
      bySubject[p.subject].push(p.percentage);
    });
    let weakId = null, weakAvg = Infinity;
    Object.entries(bySubject).forEach(([id, percs]) => {
      if (percs.length < 2) return;
      const avg = Math.round(percs.reduce((a, b) => a + b, 0) / percs.length);
      if (avg < weakAvg) { weakAvg = avg; weakId = id; }
    });
    if (!weakId) return null;
    const subj = SUBJECTS.find(s => s.id === weakId);
    return subj ? { ...subj, avg: weakAvg } : null;
  })();

  return (
    <div style={styles.page}>
      <Header title={`Hey ${userName}! 🌟`} subtitle="Klaar om te leren?" onBack={onBack} onHome={onHome} />

      <div style={styles.content}>
        {streakWarning && (
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, rgba(255,152,0,0.18), rgba(255,193,7,0.1))",
            border: "1px solid rgba(255,152,0,0.45)",
            borderRadius: 14, padding: "12px 16px", marginBottom: 4,
          }}>
            <span style={{ fontSize: 24 }}>⚠️</span>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "#ffb74d", lineHeight: 1.4 }}>
              Speel vandaag om je streak van <strong style={{ color: "#ff9800" }}>{streakWarning} {streakWarning === 1 ? "dag" : "dagen"}</strong> te bewaren!
            </div>
          </div>
        )}
        {streak >= 2 && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, rgba(255,111,0,0.15), rgba(255,160,0,0.1))", border: "1px solid rgba(255,111,0,0.3)", borderRadius: 14, padding: "12px 16px", marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>🔥</span>
            <div>
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700, color: "#ff9800" }}>{streak} dagen op rij!</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Blijf zo doorgaan, je bent op dreef!</div>
            </div>
          </div>
        )}
        {weakestSubject && (
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "linear-gradient(135deg, rgba(33,150,243,0.12), rgba(30,136,229,0.07))",
            border: "1px solid rgba(33,150,243,0.3)",
            borderRadius: 14, padding: "12px 16px", marginBottom: 4,
          }}>
            <span style={{ fontSize: 26 }}>{weakestSubject.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, color: "#64b5f6" }}>
                💪 {weakestSubject.label} heeft aandacht nodig
              </div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                Gemiddeld {weakestSubject.avg}%
              </div>
            </div>
            <button
              onClick={() => { SoundEngine.play("click"); onSelfStudy(); }}
              style={{
                padding: "8px 14px", border: "none", borderRadius: 10,
                background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                color: "#fff", fontFamily: "'Fredoka', sans-serif",
                fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0,
              }}
            >
              Oefen nu
            </button>
          </div>
        )}
        <div style={styles.joinSection}>
          <button
            onClick={() => { setShowCode(v => !v); setError(""); setCode(""); }}
            style={{
              width: "100%", padding: "12px 16px", borderRadius: 12, cursor: "pointer",
              background: showCode ? "#0a2a18" : "#1e2d45",
              border: `2px solid ${showCode ? "#00c853" : "#2a3f5f"}`,
              color: showCode ? "#00e676" : "#8eaadb",
              fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14,
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            🔑 Ik heb een quizcode {showCode ? "▲" : "▼"}
          </button>
          {showCode && (
            <div style={{ marginTop: 10 }}>
              <div style={styles.codeInputRow}>
                <input
                  style={{ ...styles.textInput, flex: 1, textTransform: "uppercase", letterSpacing: 3, fontWeight: 700, textAlign: "center" }}
                  value={code}
                  onChange={(e) => { setCode(e.target.value.toUpperCase()); setError(""); }}
                  placeholder="QUIZCODE"
                  maxLength={6}
                  autoFocus
                />
                <button style={styles.joinButton} onClick={handleJoin}>Meedoen</button>
              </div>
              {error && <p style={styles.errorText}>{error}</p>}
            </div>
          )}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00a844)" }} onClick={() => { SoundEngine.play("click"); onSelfStudy(); }}>
            <span style={{ fontSize: 24 }}>📖</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Zelf oefenen</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #FF6B35, #e55039)" }} onClick={() => { SoundEngine.play("click"); onTextbook(); }}>
            <span style={{ fontSize: 24 }}>📕</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Uit je boek</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00b84d, #36537e)" }} onClick={onViewProgress}>
            <span style={{ fontSize: 24 }}>📊</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Voortgang</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #69f0ae, #00c853)" }} onClick={onLeaderboard}>
            <span style={{ fontSize: 24 }}>🏆</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Scorebord</span>
          </button>
        </div>

        {/* Urgente deadline banner */}
        {quizzes.filter((q) => q.deadline && daysUntil(q.deadline) >= 0 && daysUntil(q.deadline) <= 1 && !progress.some((p) => p.quizId === q.id)).map((q) => {
          const subj = SUBJECTS.find((s) => s.id === q.subject);
          return (
            <div key={"banner-" + q.id} style={{ background: "linear-gradient(135deg, #b71c1c, #e53935)", borderRadius: 14, padding: "14px 16px", marginBottom: 12, display: "flex", alignItems: "center", gap: 12, animation: "pulse 2s infinite" }}>
              <span style={{ fontSize: 28 }}>🚨</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: "#fff" }}>Deadline bijna! {subj?.icon} {q.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{daysUntil(q.deadline) === 0 ? "Vandaag de laatste dag!" : "Nog 1 dag — doe het nu!"}</div>
              </div>
            </div>
          );
        })}

        {/* Assigned quizzes */}
        {quizzes.filter((q) => q.deadline).length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>📋 Opdrachten</h3>
            {quizzes.filter((q) => q.deadline).map((q) => {
              const subj = SUBJECTS.find((s) => s.id === q.subject);
              const remaining = daysUntil(q.deadline);
              const done = progress.some((p) => p.quizId === q.id);
              return (
                <div key={q.id} style={{ ...styles.assignmentCard, opacity: done ? 0.6 : 1 }}>
                  <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#e0e6f0" }}>{q.title}</div>
                    <div style={{ fontSize: 12, color: "#8899aa" }}>
                      Deadline: {formatDate(q.deadline)} · {remaining <= 0 ? "Verlopen!" : `Nog ${remaining} dag${remaining !== 1 ? "en" : ""}`}
                    </div>
                  </div>
                  {done ? (
                    <span style={styles.doneBadge}>✅ Klaar</span>
                  ) : (
                    <span style={{
                      ...styles.deadlineBadge,
                      background: remaining <= 1 ? "#ff6b6b" : remaining <= 3 ? "#ffa726" : "#66bb6a",
                    }}>
                      {remaining <= 0 ? "!" : `${remaining}d`}
                    </span>
                  )}
                </div>
              );
            })}
          </>
        )}

        {/* Recent activity */}
        {recentProgress.length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>Laatst geoefend</h3>
            {recentProgress.map((r) => {
              const subj = SUBJECTS.find((s) => s.id === r.subject);
              return (
                <div key={r.id} style={{ ...styles.recentCard, cursor: onViewResult ? "pointer" : "default" }}
                  onClick={() => onViewResult?.(r)}>
                  <span style={{ fontSize: 20 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600 }}>{subj?.label}</span>
                    <span style={{ fontSize: 12, color: "#8899aa", marginLeft: 8 }}>{LEVELS.find((l) => l.id === r.level)?.label}</span>
                    {r.completedAt && (
                      <div style={{ fontSize: 11, color: "#8899aa", marginTop: 2 }}>
                        {new Date(r.completedAt).toLocaleDateString("nl-NL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                      </div>
                    )}
                  </div>
                  <div style={{
                    ...styles.scoreBadge,
                    background: r.percentage >= 80 ? "#d4edda" : r.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                    color: r.percentage >= 80 ? "#155724" : r.percentage >= 50 ? "#856404" : "#721c24",
                  }}>
                    {r.percentage}%
                  </div>
                  <span style={{ color: "#8899aa", fontSize: 16, marginLeft: 6 }}>›</span>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

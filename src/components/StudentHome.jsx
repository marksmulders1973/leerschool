import { useState, useEffect } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS } from "../constants.js";
import { SoundEngine, daysUntil, formatDate } from "../utils.js";
import Header from "./Header.jsx";

export default function StudentHome({ userName, quizzes, progress, onJoinQuiz, onSelfStudy, onBack, onHome, onViewProgress, onLeaderboard, onTextbook, pendingCode, streak }) {
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

  return (
    <div style={styles.page}>
      <Header title={`Hey ${userName}! 🌟`} subtitle="Klaar om te leren?" onBack={onBack} onHome={onHome} />

      <div style={styles.content}>
        {streak >= 2 && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, rgba(255,111,0,0.15), rgba(255,160,0,0.1))", border: "1px solid rgba(255,111,0,0.3)", borderRadius: 14, padding: "12px 16px", marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>🔥</span>
            <div>
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700, color: "#ff9800" }}>{streak} dagen op rij!</div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Blijf zo doorgaan, je bent op dreef!</div>
            </div>
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
                <div key={r.id} style={styles.recentCard}>
                  <span style={{ fontSize: 20 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600 }}>{subj?.label}</span>
                    <span style={{ fontSize: 12, color: "#8899aa", marginLeft: 8 }}>{LEVELS.find((l) => l.id === r.level)?.label}</span>
                  </div>
                  <div style={{
                    ...styles.scoreBadge,
                    background: r.percentage >= 80 ? "#d4edda" : r.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                    color: r.percentage >= 80 ? "#155724" : r.percentage >= 50 ? "#856404" : "#721c24",
                  }}>
                    {r.percentage}%
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
}

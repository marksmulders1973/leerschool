import { useState, useEffect } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS } from "../constants.js";
import { SoundEngine, daysUntil, formatDate } from "../utils.js";
import Header from "./Header.jsx";

export default function StudentHome({ userName, userLevel, userSchoolType, quizzes, progress, onJoinQuiz, onSelfStudy, onBack, onHome, onViewProgress, onLeaderboard, onTextbook, pendingCode, streak, onViewResult, onDeleteResult }) {
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
      setError(`Deze toets is verlopen op ${new Date(local.deadline).toLocaleDateString("nl-NL")} 📅`);
      return;
    }
    setError("");
    const result = await onJoinQuiz(upper);
    if (result === "not_found") setError("Toets niet gevonden 😕");
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

  const schoolTypeLabel = { mavo: "VMBO-TL", havo: "HAVO", vwo: "VWO", gym: "Gymnasium" }[userSchoolType] || "";
  const schoolTypeColor = { mavo: "#f59e0b", havo: "#3b82f6", vwo: "#8b5cf6", gym: "#ec4899" }[userSchoolType] || "#00d4ff";
  // PO (basisschool) gebruikt "Groep", VO (met schoolType) gebruikt "Klas".
  const niveauWoord = schoolTypeLabel ? "Klas" : "Groep";
  const profileBadge = userLevel && schoolTypeLabel
    ? `Klas ${userLevel} · ${schoolTypeLabel}`
    : userLevel
    ? `${niveauWoord} ${userLevel}`
    : schoolTypeLabel || null;

  return (
    <div style={styles.page}>
      <Header title={`Hey ${userName}! 🌟`} subtitle="Klaar om te leren?" onBack={onBack} onHome={onHome} />

      <div style={styles.content}>
        {profileBadge && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: `${schoolTypeColor}18`,
            border: `1px solid ${schoolTypeColor}55`,
            borderRadius: 20, padding: "5px 14px",
            marginBottom: 8, alignSelf: "flex-start",
          }}>
            <span style={{ fontSize: 14 }}>🎓</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: schoolTypeColor }}>
              {profileBadge}
            </span>
          </div>
        )}
        {streakWarning && (
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, rgba(255,152,0,0.18), rgba(255,193,7,0.1))",
            border: "1px solid rgba(255,152,0,0.45)",
            borderRadius: 14, padding: "12px 16px", marginBottom: 4,
          }}>
            <span style={{ fontSize: 24 }}>⚠️</span>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#ffb74d", lineHeight: 1.4 }}>
              Speel vandaag om je streak van <strong style={{ color: "#ff9800" }}>{streakWarning} {streakWarning === 1 ? "dag" : "dagen"}</strong> te bewaren!
            </div>
          </div>
        )}
        {streak >= 2 && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, rgba(255,111,0,0.15), rgba(255,160,0,0.1))", border: "1px solid rgba(255,111,0,0.3)", borderRadius: 14, padding: "12px 16px", marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>🔥</span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#ff9800" }}>{streak} dagen op rij!</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Blijf zo doorgaan, je bent op dreef!</div>
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
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#64b5f6" }}>
                💪 {weakestSubject.label} heeft aandacht nodig
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                Gemiddeld {weakestSubject.avg}%
              </div>
            </div>
            <button
              onClick={() => { SoundEngine.play("click"); onSelfStudy(); }}
              style={{
                padding: "8px 14px", border: "none", borderRadius: 10,
                background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                color: "var(--color-text-strong)", fontFamily: "var(--font-display)",
                fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0,
              }}
            >
              Oefen nu
            </button>
          </div>
        )}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <button
            onClick={() => { setShowCode(v => !v); setError(""); setCode(""); }}
            style={{ background: "none", border: "none", color: "#4a6080", fontSize: 12, cursor: "pointer", padding: "4px 8px", textDecoration: "underline" }}
          >
            🔑 Code van leerkracht ontvangen?
          </button>
          {showCode && (
            <div style={{ marginTop: 8 }}>
              <div style={styles.codeInputRow}>
                <input
                  style={{ ...styles.textInput, flex: 1, textTransform: "uppercase", letterSpacing: 3, fontWeight: 700, textAlign: "center" }}
                  value={code}
                  onChange={(e) => { setCode(e.target.value.toUpperCase()); setError(""); }}
                  placeholder="TOETSCODE"
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
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, var(--color-brand-primary), #00a844)" }} onClick={() => { SoundEngine.play("click"); onSelfStudy(); }}>
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
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #69f0ae, var(--color-brand-primary))" }} onClick={onLeaderboard}>
            <span style={{ fontSize: 24 }}>🏆</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Scorebord</span>
          </button>
        </div>

        {/* Urgente deadline banner */}
        {quizzes.filter((q) => q.deadline && daysUntil(q.deadline) >= 0 && daysUntil(q.deadline) <= 1 && !progress.some((p) => p.quizId === q.id)).map((q) => {
          const subj = SUBJECTS.find((s) => s.id === q.subject);
          return (
            <div key={"banner-" + q.id} onClick={() => { SoundEngine.play("click"); onJoinQuiz(q.code); }} style={{ background: "linear-gradient(135deg, #b71c1c, #e53935)", borderRadius: 14, padding: "14px 16px", marginBottom: 12, display: "flex", alignItems: "center", gap: 12, animation: "pulse 2s infinite", cursor: "pointer" }}>
              <span style={{ fontSize: 28 }}>🚨</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--color-text-strong)" }}>Deadline bijna! {subj?.icon} {q.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{daysUntil(q.deadline) === 0 ? "Vandaag de laatste dag!" : "Nog 1 dag — doe het nu!"}</div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-strong)", background: "rgba(0,0,0,0.25)", borderRadius: 8, padding: "6px 10px" }}>Start ›</span>
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
                <div key={q.id} onClick={() => { if (!done) { SoundEngine.play("click"); onJoinQuiz(q.code); } }} style={{ ...styles.assignmentCard, opacity: done ? 0.6 : 1, cursor: done ? "default" : "pointer" }}>
                  <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "var(--color-text)" }}>{q.title}</div>
                    <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
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
                    <span style={{ fontSize: 12, color: "#aabbcc", marginLeft: 8 }}>{LEVELS.find((l) => l.id === r.level)?.label}</span>
                    {r.completedAt && (
                      <div style={{ fontSize: 11, color: "#aabbcc", marginTop: 2 }}>
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
                  <span style={{ color: "var(--color-text-muted)", fontSize: 16, marginLeft: 6 }}>›</span>
                  {onDeleteResult && (
                    <button
                      onClick={(e) => { e.stopPropagation(); onDeleteResult(r.id); }}
                      style={{ marginLeft: 6, background: "none", border: "none", color: "#ff6b6b", fontSize: 16, cursor: "pointer", padding: "2px 4px", lineHeight: 1, borderRadius: 6, flexShrink: 0 }}
                      title="Verwijder"
                    >×</button>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

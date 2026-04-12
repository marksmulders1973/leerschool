import { useState } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS } from "../constants.js";
import { SoundEngine } from "../utils.js";
import { BreakoutGame } from "./PlayQuiz.jsx";

export default function ResultsPage({ results, quiz, userName, onBack, onHome, onRetry, onLeaderboard }) {
  const latest = results[results.length - 1];
  if (!latest) return null;

  const grade = latest.percentage >= 90 ? "🏆 Fantastisch!" : latest.percentage >= 70 ? "🌟 Goed gedaan!" : latest.percentage >= 50 ? "💪 Ga zo door!" : "📚 Blijven oefenen!";
  const emoji = latest.percentage >= 90 ? "🎉" : latest.percentage >= 70 ? "😊" : latest.percentage >= 50 ? "🙂" : "💪";
  const [sent, setSent] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const subjLabel = SUBJECTS.find((s) => s.id === latest.subject)?.label || latest.subject;
  const wrongCount = latest.answers.filter(a => !a.isCorrect).length;
  const resultText = `📊 studiebol Resultaat\n\n👤 Leerling: ${userName || "Onbekend"}\n📚 Vak: ${subjLabel}\n${quiz?.title ? `📝 Toets: ${quiz.title}\n` : ""}✅ Score: ${latest.score}/${latest.total} (${latest.percentage}%)\n❌ Fout: ${wrongCount} ${wrongCount === 1 ? "vraag" : "vragen"}\n⭐ Beoordeling: ${grade}`;

  const shareText = `📊 Studiebol resultaat\n\n👤 ${userName || "Leerling"}\n📚 ${subjLabel}${quiz?.topic ? ` · ${quiz.topic}` : ""}\n✅ Score: ${latest.score}/${latest.total} (${latest.percentage}%)\n❌ Fout: ${wrongCount} ${wrongCount === 1 ? "vraag" : "vragen"}\n⭐ ${grade}`;

  const sendViaWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");
    setSent(true);
  };

  const sendViaEmail = () => {
    const email = quiz?.teacherEmail || "";
    const subject = `Studiebol resultaat: ${userName} — ${subjLabel} ${latest.percentage}%`;
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(shareText)}`, "_blank");
    setSent(true);
  };

  return (
    <div style={styles.page}>
      {showGame && <BreakoutGame onClose={() => setShowGame(false)} />}
      <div style={{ ...styles.resultsCard, animation: "slideUp 0.4s ease" }}>
        {latest.percentage >= 80 && (
          <div style={{ position: "relative", height: 0, overflow: "visible" }}>
            {["🎉","⭐","🌟","✨","🎊","💫","🌈","🔥","💥","⚡"].map((e, i) => (
              <span key={i} style={{ position: "absolute", fontSize: 18, left: `${8+i*9}%`, top: -20, animation: `confetti ${1.2+i*0.1}s ease ${i*0.12}s both` }}>{e}</span>
            ))}
          </div>
        )}
        <div style={{ fontSize: 64, textAlign: "center", animation: "popIn 0.5s ease" }}>{emoji}</div>
        <h2 style={{ fontFamily: "Fredoka", fontSize: 28, textAlign: "center", color: "#e0e6f0", margin: "12px 0 4px" }}>{grade}</h2>
        <p style={{ textAlign: "center", color: "#8899aa", marginBottom: 24 }}>
          {subjLabel} · {LEVELS.find((l) => l.id === latest.level)?.label}
        </p>

        <div style={styles.scoreCircle}>
          <div style={styles.scoreNumber}>{latest.percentage}%</div>
          <div style={styles.scoreDetail}>{latest.score} van {latest.total} goed</div>
        </div>

        <div style={styles.resultDetails}>
          {latest.answers.map((a, i) => {
            const q = latest.questions?.[a.questionIndex ?? i];
            return (
              <div key={i} style={{ ...styles.resultRow, flexDirection: "column", alignItems: "flex-start", gap: 4 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 8, width: "100%" }}>
                  <span style={{ width: 24, flexShrink: 0, textAlign: "center", marginTop: 1 }}>{a.isCorrect ? "✅" : "❌"}</span>
                  <span style={{ flex: 1, fontSize: 13, color: "#c0d0e0", lineHeight: 1.4 }}>{q?.q || `Vraag ${i + 1}`}</span>
                </div>
                {!a.isCorrect && q && (
                  <div style={{ marginLeft: 32, fontSize: 12, color: "#69f0ae" }}>
                    ✔ Goed antwoord: <strong>{q.options?.[q.answer]}</strong>
                    {a.selected >= 0 && <span style={{ color: "#ff7070" }}> · Jij: {q.options?.[a.selected]}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Deel resultaat */}
        <div style={{ marginTop: 20, padding: 16, background: "#0a1f30", borderRadius: 16, border: "1px solid rgba(0,212,255,0.2)" }}>
          <p style={{ fontSize: 13, color: "#8899aa", fontWeight: 700, marginBottom: 10, textAlign: "center", margin: "0 0 10px" }}>
            📬 Deel je resultaat
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={sendViaWhatsApp} style={{ flex: 1, padding: "12px 8px", border: "none", borderRadius: 12, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              💬 WhatsApp
            </button>
            <button onClick={sendViaEmail} style={{ flex: 1, padding: "12px 8px", border: "none", borderRadius: 12, background: "#1a73e8", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              ✉️ E-mail
            </button>
          </div>
          {sent && <p style={{ fontSize: 12, color: "#69f0ae", textAlign: "center", marginTop: 8, marginBottom: 0 }}>✅ Verstuurd!</p>}
        </div>

        {latest.percentage < 60 && (
          <div style={{ marginTop: 20, padding: 18, background: "#2a1500", borderRadius: 16, border: "2px solid #ff9800", animation: "slideUp 0.4s ease" }}>
            <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 17, color: "#ffb74d", fontWeight: 700, marginBottom: 4 }}>😕 Hier heb ik moeite mee</div>
            <div style={{ fontSize: 13, color: "#8899aa", marginBottom: 14 }}>Vraag hulp aan je leerkracht of ouder — niemand hoeft het te weten, jij stuurt het zelf!</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => {
                const msg = `Hoi! 👋\n\nIk ben ${userName} en ik heb geoefend op Studiebol.\n\nIk heb moeite met: ${subjLabel}\nMijn score was: ${latest.score}/${latest.total} (${latest.percentage}%)\n\nKun je me helpen? 🙏`;
                window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
              }} style={{ flex: 1, padding: "13px 8px", border: "none", borderRadius: 12, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                💬 WhatsApp
              </button>
              <button onClick={() => {
                const msg = `Hoi!\n\nIk ben ${userName} en ik heb geoefend op Studiebol.\n\nIk heb moeite met: ${subjLabel}\nMijn score was: ${latest.score}/${latest.total} (${latest.percentage}%)\n\nKun je me helpen?`;
                window.open(`mailto:?subject=${encodeURIComponent("Studiebol - " + userName + " heeft hulp nodig bij " + subjLabel)}&body=${encodeURIComponent(msg)}`, "_blank");
              }} style={{ flex: 1, padding: "13px 8px", border: "none", borderRadius: 12, background: "#1a73e8", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                ✉️ E-mail
              </button>
            </div>
          </div>
        )}

        {latest.percentage >= 80 && (
          <div style={{ marginTop: 20, animation: "popIn 0.6s ease 0.3s both" }}>
            <button
              onClick={() => setShowGame(true)}
              style={{
                width: "100%", padding: "16px 20px", border: "none", borderRadius: 16,
                background: "linear-gradient(135deg, #7c3aed, #a855f7)",
                color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 18,
                fontWeight: 700, cursor: "pointer",
                boxShadow: "0 4px 20px rgba(168,85,247,0.4)",
                animation: "pulse 2s infinite",
              }}
            >
              🎮 Verdien je beloning!
            </button>
            <p style={{ textAlign: "center", fontSize: 12, color: "#8899aa", marginTop: 6 }}>
              Jij hebt 80% of meer — speel een mini-spelletje als beloning!
            </p>
          </div>
        )}

        {/* Smart suggestion banner */}
        {(() => {
          const pct = latest.percentage;
          const currentLevelIndex = LEVELS.findIndex(l => l.id === latest.level);
          const nextLevel = currentLevelIndex >= 0 && currentLevelIndex < LEVELS.length - 1 ? LEVELS[currentLevelIndex + 1] : null;
          const isHighest = currentLevelIndex === LEVELS.length - 1;

          if (pct >= 85) {
            return (
              <div style={{
                marginTop: 20, padding: "16px 18px", borderRadius: 16,
                background: "linear-gradient(135deg, rgba(0,200,83,0.15), rgba(0,230,118,0.08))",
                border: "1px solid rgba(0,200,83,0.35)",
              }}>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700, color: "#00e676", marginBottom: 6 }}>
                  🚀 Goed bezig! Klaar voor een moeilijker niveau?
                </div>
                {isHighest ? (
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.6)" }}>
                    Je zit al op het hoogste niveau! 🏆
                  </div>
                ) : (
                  <button onClick={onRetry} style={{
                    marginTop: 8, padding: "10px 18px", borderRadius: 12, border: "none",
                    background: "linear-gradient(135deg, #00c853, #00a844)",
                    color: "#fff", fontFamily: "'Fredoka', sans-serif",
                    fontSize: 14, fontWeight: 700, cursor: "pointer",
                  }}>
                    Probeer {nextLevel?.label}
                  </button>
                )}
              </div>
            );
          } else if (pct < 50) {
            return (
              <div style={{
                marginTop: 20, padding: "16px 18px", borderRadius: 16,
                background: "linear-gradient(135deg, rgba(244,67,54,0.15), rgba(229,57,53,0.08))",
                border: "1px solid rgba(244,67,54,0.35)",
              }}>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700, color: "#ff7043", marginBottom: 6 }}>
                  💪 Nog even oefenen! Dit vak verdient meer aandacht.
                </div>
                <button onClick={onRetry} style={{
                  marginTop: 8, padding: "10px 18px", borderRadius: 12, border: "none",
                  background: "linear-gradient(135deg, #e53935, #c62828)",
                  color: "#fff", fontFamily: "'Fredoka', sans-serif",
                  fontSize: 14, fontWeight: 700, cursor: "pointer",
                }}>
                  Nog een keer
                </button>
              </div>
            );
          } else {
            return (
              <div style={{
                marginTop: 20, padding: "16px 18px", borderRadius: 16,
                background: "linear-gradient(135deg, rgba(255,152,0,0.15), rgba(255,193,7,0.08))",
                border: "1px solid rgba(255,152,0,0.35)",
              }}>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700, color: "#ffb74d", marginBottom: 6 }}>
                  ⭐ Netjes! Speel nog een ronde om het vast te zetten.
                </div>
                <button onClick={onRetry} style={{
                  marginTop: 8, padding: "10px 18px", borderRadius: 12, border: "none",
                  background: "linear-gradient(135deg, #ff9800, #f57c00)",
                  color: "#fff", fontFamily: "'Fredoka', sans-serif",
                  fontSize: 14, fontWeight: 700, cursor: "pointer",
                }}>
                  Nog een keer
                </button>
              </div>
            );
          }
        })()}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 24 }}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00a844)" }} onClick={() => { SoundEngine.play("click"); onRetry(); }}>🔄 Opnieuw</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #69f0ae, #00c853)" }} onClick={onLeaderboard}>🏆 Scorebord</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #2a3f5f, #1e2d45)" }} onClick={onBack}>← Terug</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #1e2d45, #162033)" }} onClick={onHome}>🏠 Home</button>
        </div>
      </div>
    </div>
  );
}

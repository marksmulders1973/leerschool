import { useState } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS } from "../constants.js";
import { SoundEngine } from "../utils.js";
import { BreakoutGame } from "./PlayQuiz.jsx";

export default function ResultsPage({ results, quiz, userName, authUser, onLogin, onBack, onHome, onRetry, onReplay, onLeaderboard, onNextTafel }) {
  const latest = results[results.length - 1];
  if (!latest) return null;

  const grade = latest.percentage >= 90 ? "🏆 Fantastisch!" : latest.percentage >= 70 ? "🌟 Goed gedaan!" : latest.percentage >= 50 ? "💪 Ga zo door!" : "📚 Blijven oefenen!";
  const emoji = latest.percentage >= 90 ? "🎉" : latest.percentage >= 70 ? "😊" : latest.percentage >= 50 ? "🙂" : "💪";
  const [sent, setSent] = useState(false);
  const [showGame, setShowGame] = useState(false);

  const subjLabel = latest.topic || SUBJECTS.find((s) => s.id === latest.subject)?.label || latest.subject;
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

        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 38, fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
            {latest.score} <span style={{ fontSize: 22, color: "#8899aa" }}>van de</span> {latest.total}
          </div>
          <div style={{ fontSize: 14, color: "#8899aa", marginTop: 2 }}>vragen goed</div>
        </div>
        <div style={styles.scoreCircle}>
          <div style={styles.scoreNumber}>{latest.percentage}%</div>
          <div style={styles.scoreDetail}>{grade}</div>
        </div>
        {latest.timeTaken > 0 && (
          <div style={{ textAlign: "center", fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: "#8899aa", marginBottom: 8 }}>
            ⏱ {latest.timeTaken < 60 ? `${latest.timeTaken}s` : `${Math.floor(latest.timeTaken / 60)}m ${latest.timeTaken % 60}s`}
          </div>
        )}
        {latest.percentage === 100 && onReplay && (
          <div style={{ marginBottom: 8, animation: "popIn 0.5s ease 0.2s both" }}>
            <button
              onClick={onReplay}
              style={{
                width: "100%", padding: "14px 20px", border: "2px solid #00d4ff", borderRadius: 16,
                background: "linear-gradient(135deg, #003a4f, #001e2e)",
                color: "#00d4ff", fontFamily: "'Fredoka', sans-serif", fontSize: 17,
                fontWeight: 700, cursor: "pointer",
                boxShadow: "0 4px 16px rgba(0,212,255,0.2)",
              }}
            >
              🔄 Ik kan dit beter! Zelfde vragen, sneller?
            </button>
            <p style={{ textAlign: "center", fontSize: 11, color: "#8899aa", marginTop: 4 }}>
              Exact dezelfde vragen — probeer het nog sneller te doen
            </p>
          </div>
        )}

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

        {/* Deel de app */}
        <div style={{ marginTop: 12, padding: 16, background: "linear-gradient(135deg, #0d1f3c, #0a1525)", borderRadius: 16, border: "1px solid rgba(24,119,242,0.35)" }}>
          <p style={{ fontSize: 13, color: "#8899aa", fontWeight: 700, margin: "0 0 10px", textAlign: "center" }}>
            📣 Ken jij ook kinderen die dit leuk vinden?
          </p>
          <button
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://studiebol.online")}`, "_blank")}
            style={{ width: "100%", padding: "13px 8px", border: "none", borderRadius: 12, background: "#1877F2", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}
          >
            <span style={{ fontSize: 18 }}>📘</span> Deel Studiebol op Facebook
          </button>
          <p style={{ fontSize: 11, color: "#556677", textAlign: "center", margin: "8px 0 0" }}>
            Gratis oefenplatform — help andere ouders het te ontdekken!
          </p>
        </div>

        {(
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

        {/* Cito smart aanbeveling */}
        {quiz?.citoId && (() => {
          const pct = latest.percentage;
          const onderdelen = { gemengd: "Alles gemengd", rekenen: "Rekenen & Wiskunde", taal: "Taal", "begrijpend-lezen": "Begrijpend Lezen", wereldorientatie: "Wereld Oriëntatie" };
          const label = onderdelen[quiz.citoId] || "Cito";
          const nextSuggestions = { rekenen: "Taal", taal: "Begrijpend Lezen", "begrijpend-lezen": "Wereld Oriëntatie", wereldorientatie: "Alles gemengd", gemengd: null };
          const next = nextSuggestions[quiz.citoId];
          return (
            <div style={{ marginTop: 20, padding: "16px 18px", borderRadius: 16, background: pct >= 70 ? "rgba(0,200,83,0.1)" : "rgba(255,152,0,0.12)", border: `1px solid ${pct >= 70 ? "rgba(0,200,83,0.3)" : "rgba(255,152,0,0.35)"}` }}>
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: pct >= 70 ? "#69f0ae" : "#ffb74d", marginBottom: 4 }}>
                {pct >= 80 ? `🏆 Geweldig bij ${label}!` : pct >= 60 ? `👍 Goed bezig bij ${label}` : `💪 ${label} verdient meer oefening`}
              </div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                {pct >= 80 && next ? `Je scoort goed hier! Ga nu ${next} oefenen.` : pct < 60 ? `Oefen dit onderdeel vaker om je eindtoets score te verhogen.` : `Nog een rondje om het vast te zetten, dan verder naar het volgende onderdeel.`}
              </div>
              <button onClick={onBack} style={{ marginTop: 10, padding: "9px 16px", borderRadius: 12, border: "none", background: pct >= 70 ? "#00c853" : "#ff9800", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                {pct >= 80 && next ? `Probeer ${next} →` : `Nog een keer ${label}`}
              </button>
            </div>
          );
        })()}

        {/* Smart suggestion banner */}
        {!quiz?.citoId && (() => {
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

        {!authUser && (
          <div style={{
            marginTop: 20,
            padding: "14px 16px",
            background: "linear-gradient(135deg, rgba(66,133,244,0.15), rgba(66,133,244,0.08))",
            border: "1px solid rgba(66,133,244,0.35)",
            borderRadius: 16,
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: "#7ab3ff", marginBottom: 2 }}>
                🏆 Bewaar je score
              </div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.4 }}>
                Log in om je voortgang en streak bij te houden
              </div>
            </div>
            <button onClick={onLogin} style={{
              flexShrink: 0,
              padding: "9px 14px",
              border: "none",
              borderRadius: 12,
              background: "#4285f4",
              color: "#fff",
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}>
              G Inloggen
            </button>
          </div>
        )}

        {onNextTafel && (
          <button
            onClick={onNextTafel}
            style={{ width: "100%", marginTop: 20, padding: "16px 0", borderRadius: 14, border: "none", cursor: "pointer", background: "linear-gradient(135deg, #00c853, #00a844)", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 18, fontWeight: 700, boxShadow: "0 4px 16px rgba(0,200,83,0.3)" }}
          >
            Volgende tafel →
          </button>
        )}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: onNextTafel ? 10 : 24 }}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00a844)" }} onClick={() => { SoundEngine.play("click"); onRetry(); }}>🔄 Opnieuw</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #69f0ae, #00c853)" }} onClick={onLeaderboard}>🏆 Scorebord</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #2a3f5f, #1e2d45)" }} onClick={onBack}>← Tafels</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #1e2d45, #162033)" }} onClick={onHome}>🏠 Home</button>
        </div>
      </div>
    </div>
  );
}

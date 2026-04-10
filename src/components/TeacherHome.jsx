import styles from "../styles.js";
import { SUBJECTS, LEVELS } from "../constants.js";
import { formatDate, daysUntil } from "../utils.js";
import Header from "./Header.jsx";

export default function TeacherHome({ userName, quizzes, classes, onCreateQuiz, onViewProgress, onManageClasses, onBack, onHome, onStartQuiz, onDeleteQuiz }) {
  return (
    <div style={styles.page}>
      <Header title={`Hoi ${userName}! 👋`} subtitle="Leerkracht Dashboard" onBack={onBack} onHome={onHome} />

      <div style={styles.content}>
        <div style={styles.actionRow}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00e676)" }} onClick={onCreateQuiz}>
            <span style={{ fontSize: 28 }}>📝</span>
            <span style={{ fontWeight: 700 }}>Nieuwe Quiz</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00a844)" }} onClick={onViewProgress}>
            <span style={{ fontSize: 28 }}>📊</span>
            <span style={{ fontWeight: 700 }}>Voortgang</span>
          </button>
        </div>
        <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #1565c0, #1e88e5)", width: "100%", marginBottom: 16 }} onClick={onManageClasses}>
          <span style={{ fontSize: 28 }}>👥</span>
          <span style={{ fontWeight: 700 }}>Mijn Klassen{classes.length > 0 ? ` (${classes.length})` : ""}</span>
        </button>

        {/* ── QR code sectie ── */}
        <div style={{ marginBottom: 20, padding: "16px", background: "#0d1b2a", borderRadius: 16, border: "1px solid #2a3f5f", textAlign: "center" }}>
          <div style={{ fontSize: 13, color: "#8eaadb", fontWeight: 700, marginBottom: 10 }}>📱 Deel de app met je klas</div>
          <img src="/qrcode.png" alt="QR code studiebol.online" style={{ width: 140, height: 140, borderRadius: 10, display: "block", margin: "0 auto 8px" }} />
          <div style={{ fontSize: 11, color: "#556677" }}>Laat leerlingen scannen om de app te openen</div>
          <div style={{ fontSize: 12, color: "#00e676", fontWeight: 700, marginTop: 4 }}>www.studiebol.online</div>
        </div>

        {quizzes.length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>Jouw quizzen</h3>
            <div style={styles.quizList}>
              {quizzes.map((q) => {
                const subj = SUBJECTS.find((s) => s.id === q.subject);
                const remaining = q.deadline ? daysUntil(q.deadline) : null;
                return (
                  <div key={q.id} style={styles.quizCard}>
                    <div style={styles.quizCardHeader}>
                      <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={styles.quizTitle}>{q.title || subj?.label}</div>
                        <div style={styles.quizMeta}>
                          Code: <strong>{q.code}</strong> · {LEVELS.find((l) => l.id === q.level)?.label}
                        </div>
                      </div>
                      {remaining !== null && (
                        <div style={{
                          ...styles.deadlineBadge,
                          background: remaining <= 1 ? "#ff6b6b" : remaining <= 3 ? "#ffa726" : "#66bb6a",
                        }}>
                          {remaining <= 0 ? "Verlopen" : `${remaining}d`}
                        </div>
                      )}
                    </div>
                    <div style={{ ...styles.quizCardActions, flexWrap: "wrap" }}>
                      <button style={styles.smallButton} onClick={() => onStartQuiz(q)}>▶️ Start</button>
                      <button style={styles.smallButtonAlt} onClick={() => navigator.clipboard?.writeText(q.code)}>📋 Code</button>
                      <button style={{
                        ...styles.smallButton,
                        background: "#25D366",
                        boxShadow: "0 2px 8px rgba(37,211,102,0.3)",
                      }} onClick={() => {
                        const text = `studiebol Quiz!\n\n📚 ${q.topic || subj?.label || "Vrij onderwerp"}\n🎯 Code: ${q.code}\n⏰ ${q.deadline ? `Deadline: ${formatDate(q.deadline)}` : "Geen deadline"}\n\n👉 Direct meedoen: https://www.studiebol.online?code=${q.code}`;
                        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
                      }}>💬 Deel</button>
                      {q.classId && (() => {
                        const klas = classes.find(c => c.id === q.classId);
                        if (!klas || klas.students.length === 0) return null;
                        return (
                          <button style={{
                            ...styles.smallButton,
                            background: "#1565c0",
                            boxShadow: "0 2px 8px rgba(21,101,192,0.3)",
                          }} onClick={() => {
                            const emails = klas.students.map(s => s.email).filter(Boolean).join(",");
                            const subject = encodeURIComponent(`Studiebol quiz: ${q.title || subj?.label || "Quiz"}`);
                            const body = encodeURIComponent(`Hallo,\n\nDoe mee met de Studiebol quiz!\n\n📚 ${q.topic || subj?.label || "Quiz"}\n🎯 Code: ${q.code}\n\n👉 Direct meedoen: https://www.studiebol.online?code=${q.code}\n\nGroetjes`);
                            window.open(`mailto:${emails}?subject=${subject}&body=${body}`, "_blank");
                          }}>📧 Mail klas</button>
                        );
                      })()}
                      <button style={{
                        ...styles.smallButton,
                        background: "#c62828",
                        boxShadow: "0 2px 8px rgba(198,40,40,0.3)",
                      }} onClick={() => {
                        if (window.confirm(`Quiz "${q.title || subj?.label}" verwijderen?`)) onDeleteQuiz(q.id);
                      }}>🗑️ Verwijder</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

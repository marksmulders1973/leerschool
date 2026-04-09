import { useState, useEffect } from "react";
import supabase from "../supabase.js";
import styles from "../styles.js";
import { SUBJECTS, LEVELS } from "../constants.js";
import Header from "./Header.jsx";

export function TeacherProgress({ quizzes, progress, onBack, onHome }) {
  return (
    <div style={styles.page}>
      <Header title="Voortgang 📊" subtitle="Bekijk hoe je klas het doet" onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {progress.length === 0 ? (
          <div style={styles.emptyState}>
            <span style={{ fontSize: 48 }}>📭</span>
            <p>Nog geen resultaten. Maak een quiz en deel de code!</p>
          </div>
        ) : (
          <>
            <div style={styles.statsRow}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{progress.length}</div>
                <div style={styles.statLabel}>Pogingen</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{Math.round(progress.reduce((a, b) => a + b.percentage, 0) / progress.length)}%</div>
                <div style={styles.statLabel}>Gemiddeld</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{new Set(progress.map((p) => p.player)).size}</div>
                <div style={styles.statLabel}>Leerlingen</div>
              </div>
            </div>

            {progress.slice().reverse().map((r) => {
              const subj = SUBJECTS.find((s) => s.id === r.subject);
              return (
                <div key={r.id} style={styles.recentCard}>
                  <span style={{ fontSize: 20 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{r.player}</div>
                    <div style={{ fontSize: 12, color: "#8899aa" }}>{subj?.label} · {LEVELS.find((l) => l.id === r.level)?.label}</div>
                  </div>
                  <div style={{
                    ...styles.scoreBadge,
                    background: r.percentage >= 80 ? "#d4edda" : r.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                    color: r.percentage >= 80 ? "#155724" : r.percentage >= 50 ? "#856404" : "#721c24",
                  }}>
                    {r.score}/{r.total} ({r.percentage}%)
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

export function StudentProgressView({ progress, userName, onBack, onHome }) {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const bySubject = {};
  progress.forEach((p) => {
    if (!bySubject[p.subject]) bySubject[p.subject] = [];
    bySubject[p.subject].push(p);
  });

  if (selectedSubject) {
    const subj = SUBJECTS.find((s) => s.id === selectedSubject);
    const results = bySubject[selectedSubject] || [];
    // Collect all wrong questions across all attempts
    const wrongQuestions = [];
    results.forEach((r) => {
      if (!r.questions) return;
      r.answers.forEach((a, i) => {
        if (!a.isCorrect && r.questions[a.questionIndex ?? i]) {
          const q = r.questions[a.questionIndex ?? i];
          wrongQuestions.push({ q, selectedOption: a.selected, date: r.completedAt });
        }
      });
    });
    // Deduplicate by question text
    const seen = new Set();
    const uniqueWrong = wrongQuestions.filter(({ q }) => {
      if (seen.has(q.q)) return false;
      seen.add(q.q);
      return true;
    });

    return (
      <div style={styles.page}>
        <Header title={`${subj?.icon} ${subj?.label}`} subtitle="Foute vragen" onBack={() => setSelectedSubject(null)} onHome={onHome} />
        <div style={styles.content}>
          {uniqueWrong.length === 0 ? (
            <div style={styles.emptyState}>
              <span style={{ fontSize: 48 }}>🎉</span>
              <p>Geen foute vragen gevonden! Goed gedaan!</p>
            </div>
          ) : (
            <>
              <div style={{ fontSize: 13, color: "#8899aa", marginBottom: 16 }}>
                {uniqueWrong.length} vraag{uniqueWrong.length !== 1 ? "en" : ""} die je fout had — klik op de hulpknop als je er moeite mee hebt.
              </div>
              {uniqueWrong.map(({ q, selectedOption }, i) => (
                <div key={i} style={{ background: "#1e2d45", borderRadius: 16, padding: 16, marginBottom: 14, borderLeft: "4px solid #ff5252" }}>
                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, color: "#e0e6f0", marginBottom: 10, lineHeight: 1.4 }}>
                    {i + 1}. {q.q}
                  </div>
                  {selectedOption >= 0 && q.options?.[selectedOption] && (
                    <div style={{ fontSize: 12, color: "#ff8a80", marginBottom: 4 }}>
                      ❌ Jouw antwoord: <strong>{q.options[selectedOption]}</strong>
                    </div>
                  )}
                  <div style={{ fontSize: 12, color: "#69f0ae", marginBottom: q.explanation ? 10 : 14 }}>
                    ✅ Goed antwoord: <strong>{q.options?.[q.answer]}</strong>
                  </div>
                  {q.explanation && (
                    <div style={{ fontSize: 13, color: "#b0c8e0", background: "#162033", borderRadius: 10, padding: "10px 12px", marginBottom: 12, lineHeight: 1.5 }}>
                      💡 {q.explanation}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => {
                      const msg = `Hoi! 👋\n\nIk ben ${userName} en ik snap deze vraag niet:\n\n"${q.q}"\n\nHet goede antwoord is: ${q.options?.[q.answer]}\nMaar ik snap nog niet waarom. Kun je het uitleggen? 🙏`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
                    }} style={{ flex: 1, padding: "10px 8px", border: "none", borderRadius: 10, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                      💬 WhatsApp
                    </button>
                    <button onClick={() => {
                      const msg = `Hoi!\n\nIk ben ${userName} en ik snap deze vraag niet:\n\n"${q.q}"\n\nHet goede antwoord is: ${q.options?.[q.answer]}\nMaar ik snap nog niet waarom. Kun je het uitleggen?`;
                      window.open(`mailto:?subject=${encodeURIComponent("Studiebol - " + userName + " heeft een vraag over " + subj?.label)}&body=${encodeURIComponent(msg)}`, "_blank");
                    }} style={{ flex: 1, padding: "10px 8px", border: "none", borderRadius: 10, background: "#1a73e8", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                      ✉️ E-mail
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <Header title="Mijn Voortgang 📊" subtitle="Tik op een vak voor details" onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {progress.length === 0 ? (
          <div style={styles.emptyState}>
            <span style={{ fontSize: 48 }}>🌱</span>
            <p>Je bent nog niet begonnen. Ga oefenen!</p>
          </div>
        ) : (
          <>
            <div style={styles.statsRow}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{progress.length}</div>
                <div style={styles.statLabel}>Quizzen</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{Math.round(progress.reduce((a, b) => a + b.percentage, 0) / progress.length)}%</div>
                <div style={styles.statLabel}>Gemiddeld</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{progress.filter((p) => p.percentage >= 80).length}</div>
                <div style={styles.statLabel}>Voldoendes</div>
              </div>
            </div>

            {Object.entries(bySubject).map(([subId, results]) => {
              const subj = SUBJECTS.find((s) => s.id === subId);
              const avg = Math.round(results.reduce((a, b) => a + b.percentage, 0) / results.length);
              const wrongCount = results.reduce((n, r) => n + (r.answers?.filter(a => !a.isCorrect).length || 0), 0);
              return (
                <button key={subId} onClick={() => setSelectedSubject(subId)} style={{ ...styles.subjectProgress, width: "100%", textAlign: "left", cursor: "pointer", border: "none", display: "block" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                    <strong style={{ color: "#e0e6f0" }}>{subj?.label}</strong>
                    <span style={{ marginLeft: "auto", fontWeight: 700, color: avg >= 80 ? "#28a745" : avg >= 50 ? "#f39c12" : "#e74c3c" }}>{avg}%</span>
                    <span style={{ fontSize: 18, color: "#8899aa" }}>›</span>
                  </div>
                  <div style={styles.progressBarSmall}>
                    <div style={{ ...styles.progressFillSmall, width: `${avg}%`, background: avg >= 80 ? "#28a745" : avg >= 50 ? "#f39c12" : "#e74c3c" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                    <span style={{ fontSize: 12, color: "#8899aa" }}>{results.length} poging{results.length !== 1 ? "en" : ""}</span>
                    {wrongCount > 0 && <span style={{ fontSize: 11, color: "#ff8a80" }}>· {wrongCount} fout</span>}
                    {avg < 60 && <span style={{ fontSize: 11, background: "#ff980020", color: "#ffb74d", padding: "2px 8px", borderRadius: 8, fontWeight: 700 }}>💪 aandacht nodig</span>}
                  </div>
                </button>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}
}

export function Leaderboard({ data, currentUser, onBack, onHome }) {
  const medals = ["🥇", "🥈", "🥉"];
  const [globalData, setGlobalData] = useState(null);

  useEffect(() => {
    supabase.from("leaderboard").select("player_name, subject, level, score, total, percentage, completed_at").order("percentage", { ascending: false }).order("score", { ascending: false }).limit(50)
      .then(({ data: rows }) => { if (rows?.length) setGlobalData(rows); })
      .catch(() => {});
  }, []);

  const entries = (globalData || data).map(e => ({
    player: e.player_name || e.player,
    subject: e.subject,
    level: e.level,
    score: e.score,
    total: e.total,
    percentage: e.percentage,
  }));

  return (
    <div style={styles.page}>
      <Header title="Scorebord 🏆" subtitle={globalData ? "🌍 Globaal · Top 50" : "Top scores"} onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {entries.length === 0 ? (
          <div style={styles.emptyState}><span style={{ fontSize: 48 }}>🏆</span><p>Nog geen scores! Speel een quiz om op het scorebord te komen.</p></div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {entries.slice(0, 50).map((entry, i) => {
              const subj = SUBJECTS.find((s) => s.id === entry.subject);
              const isMe = entry.player === currentUser;
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 14,
                  background: isMe ? "linear-gradient(135deg, #fff9e6, #fff3cd)" : "#fff",
                  border: isMe ? "2px solid #ffc107" : "1px solid #e8eef5",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  animation: `slideIn 0.3s ease ${i * 0.03}s both`,
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#162033", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {i < 3 ? <span style={{ fontSize: 22 }}>{medals[i]}</span> : <span style={{ fontWeight: 800, color: "#8899aa" }}>{i + 1}</span>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#e0e6f0" }}>
                      {entry.player} {isMe && <span style={{ fontSize: 11, color: "#8899aa" }}>(jij)</span>}
                    </div>
                    <div style={{ fontSize: 11, color: "#8899aa" }}>
                      {subj?.icon} {subj?.label} · {LEVELS.find((l) => l.id === entry.level)?.label}
                    </div>
                  </div>
                  <div style={{
                    padding: "4px 12px", borderRadius: 10, fontWeight: 800, fontSize: 15,
                    background: entry.percentage >= 80 ? "#d4edda" : entry.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                    color: entry.percentage >= 80 ? "#155724" : entry.percentage >= 50 ? "#856404" : "#721c24",
                  }}>
                    {entry.percentage}%
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
}

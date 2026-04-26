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

            {/* ── Tafels overzicht per leerling ── */}
            {(() => {
              const tafelResults = progress.filter(p => p.topic?.startsWith("tafel van "));
              if (tafelResults.length === 0) return null;
              const players = [...new Set(tafelResults.map(p => p.player))];
              const getBest = (player, n) => {
                const rows = tafelResults.filter(p => p.player === player && p.topic === `tafel van ${n}`);
                if (rows.length === 0) return null;
                return Math.max(...rows.map(r => r.percentage));
              };
              return (
                <div style={{ marginBottom: 20 }}>
                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: "#e0e6f0", fontWeight: 700, marginBottom: 10 }}>
                    ✖️ Tafels per leerling
                  </div>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                      <thead>
                        <tr>
                          <th style={{ textAlign: "left", color: "#8899aa", paddingBottom: 6, paddingRight: 8, whiteSpace: "nowrap" }}>Leerling</th>
                          {Array.from({ length: 12 }, (_, i) => (
                            <th key={i+1} style={{ color: "#8899aa", paddingBottom: 6, width: 28, textAlign: "center" }}>{i+1}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {players.map(player => (
                          <tr key={player}>
                            <td style={{ color: "#e0e6f0", fontWeight: 700, paddingRight: 8, paddingBottom: 4, whiteSpace: "nowrap" }}>{player}</td>
                            {Array.from({ length: 12 }, (_, i) => {
                              const best = getBest(player, i + 1);
                              const bg = best === null ? "rgba(255,255,255,0.05)" : best >= 70 ? "rgba(0,200,83,0.3)" : "rgba(255,152,0,0.3)";
                              const color = best === null ? "#556677" : best >= 70 ? "#69f0ae" : "#ffb74d";
                              return (
                                <td key={i+1} style={{ textAlign: "center", paddingBottom: 4 }}>
                                  <div style={{ width: 26, height: 26, borderRadius: 6, background: bg, color, fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                                    {best !== null ? `${best}%` : "–"}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ display: "flex", gap: 12, marginTop: 8, fontSize: 11, color: "#8899aa" }}>
                    <span style={{ color: "#69f0ae" }}>🟩 ≥70% beheerst</span>
                    <span style={{ color: "#ffb74d" }}>🟧 &lt;70% bezig</span>
                    <span>⬜ nog niet</span>
                  </div>
                </div>
              );
            })()}

            {progress.slice().reverse().map((r) => {
              const subj = SUBJECTS.find((s) => s.id === r.subject);
              return (
                <div key={r.id} style={styles.recentCard}>
                  <span style={{ fontSize: 20 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{r.player}</div>
                    <div style={{ fontSize: 12, color: "#8899aa" }}>{r.topic || subj?.label} · {LEVELS.find((l) => l.id === r.level)?.label}</div>
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
            {/* Summary stats row */}
            {(() => {
              const avgScore = Math.round(progress.reduce((a, b) => a + b.percentage, 0) / progress.length);
              // Find best subject (most attempts, highest avg)
              let bestSubjId = null, bestAvg = -1;
              Object.entries(bySubject).forEach(([id, results]) => {
                const avg = Math.round(results.reduce((a, b) => a + b.percentage, 0) / results.length);
                if (avg > bestAvg) { bestAvg = avg; bestSubjId = id; }
              });
              const bestSubj = SUBJECTS.find(s => s.id === bestSubjId);
              return (
                <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
                  <div style={{
                    flex: 1, background: "#1e2d45", borderRadius: 14,
                    padding: "14px 10px", textAlign: "center",
                    border: "1px solid rgba(0,212,255,0.15)",
                  }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>🎯</div>
                    <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 20, fontWeight: 700, color: "#00d4ff" }}>{progress.length}</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Totaal gespeeld</div>
                  </div>
                  <div style={{
                    flex: 1, background: "#1e2d45", borderRadius: 14,
                    padding: "14px 10px", textAlign: "center",
                    border: "1px solid rgba(0,230,118,0.15)",
                  }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>✅</div>
                    <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 20, fontWeight: 700, color: "#00e676" }}>{avgScore}%</div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>Gemiddelde score</div>
                  </div>
                  <div style={{
                    flex: 1, background: "#1e2d45", borderRadius: 14,
                    padding: "14px 10px", textAlign: "center",
                    border: "1px solid rgba(255,193,7,0.15)",
                  }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>🔥</div>
                    <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 20, fontWeight: 700, color: "#ffb74d" }}>
                      {bestSubj ? bestSubj.icon : "—"}
                    </div>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                      {bestSubj ? bestSubj.label : "Beste vak"}
                    </div>
                  </div>
                </div>
              );
            })()}

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

export function Leaderboard({ data, hallOfFame, currentUser, onBack, onHome, onChallenge, onKampioenen }) {
  const medals = ["🥇", "🥈", "🥉"];
  const [globalData, setGlobalData] = useState(null);
  const [globalHof, setGlobalHof] = useState({});
  const [hofOpen, setHofOpen] = useState(false);
  const [openHofKeys, setOpenHofKeys] = useState(new Set());
  const [challenged, setChallenged] = useState(() => {
    try { return JSON.parse(localStorage.getItem("ls_challenged") || "{}"); } catch { return {}; }
  });

  const fmtDate = (iso) => {
    if (!iso) return null;
    const d = new Date(iso);
    return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" }) + " " + d.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
  };

  useEffect(() => {
    supabase.from("leaderboard").select("player_name, subject, level, topic, title, score, total, percentage, time_taken, completed_at").order("percentage", { ascending: false }).order("time_taken", { ascending: true, nullsFirst: false }).order("score", { ascending: false }).limit(50)
      .then(({ data: rows }) => { setGlobalData(rows || []); })
      .catch(() => {});
    // Hall of Fame van Supabase laden (top 5 per vak/niveau met vragen)
    supabase.from("hall_of_fame").select("subject, level, player_name, time_taken, completed_at, questions").order("time_taken", { ascending: true })
      .then(({ data: rows }) => {
        if (!rows?.length) return;
        const hof = {};
        rows.forEach(r => {
          const key = `${r.subject}-${r.level}`;
          if (!hof[key]) hof[key] = [];
          if (hof[key].length < 5) hof[key].push({ player: r.player_name, timeTaken: r.time_taken, completedAt: r.completed_at, questions: r.questions });
        });
        setGlobalHof(hof);
      }).catch(() => {});
  }, []);

  const entries = (globalData || data).map(e => ({
    player: e.player_name || e.player,
    subject: e.subject,
    level: e.level,
    score: e.score,
    total: e.total,
    percentage: e.percentage,
    timeTaken: e.time_taken ?? e.timeTaken ?? null,
    completedAt: e.completed_at || e.date || null,
    topic: e.topic || null,
    title: e.title || null,
  }));

  return (
    <div style={styles.page}>
      <style>{`@keyframes tickerScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
      <Header title="Scorebord 🏆" subtitle={globalData ? "🌍 Globaal · Top 50" : "Top scores"} onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {onKampioenen && (
          <>
            <button onClick={onKampioenen} style={{
              width: "100%", padding: "14px", borderRadius: 14, border: "2px solid #ffd700",
              background: "linear-gradient(135deg, #2a1f00, #3a2c00)", color: "#ffd700",
              fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 15, cursor: "pointer",
              marginBottom: 0, display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            }}>
              <span style={{ fontSize: 22 }}>👑</span>
              Kampioenen — dag · week · maand · jaar
              <span style={{ fontSize: 22 }}>👑</span>
            </button>
            {/* Mini-lichtkrant onder de gele balk */}
            {entries.length > 0 && (() => {
              const tickerEntries = entries.slice(0, 10);
              const tickerText = tickerEntries.map(e => {
                const subj = SUBJECTS.find(s => s.id === e.subject);
                const label = e.title || e.topic?.split('\n')[0].slice(0, 25) || subj?.label || e.subject;
                return `${subj?.icon || "🎯"} ${e.player} · ${label} · ${e.percentage}%`;
              }).join("  ·  ");
              const doubled = tickerText + "  ·  " + tickerText;
              return (
                <div style={{ overflow: "hidden", borderRadius: "0 0 10px 10px", background: "rgba(255,215,0,0.08)", borderLeft: "2px solid #ffd70044", borderRight: "2px solid #ffd70044", borderBottom: "2px solid #ffd70044", marginBottom: 14, padding: "8px 0" }}>
                  <div style={{ display: "flex", animation: "tickerScroll 40s linear infinite", width: "max-content" }}>
                    {[0, 1].map(i => (
                      <span key={i} style={{ fontSize: 14, color: "#f0c830", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, whiteSpace: "nowrap", padding: "0 16px" }}>
                        {tickerText}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })()}
          </>
        )}
        {/* ── Hall of Fame sectie ── */}
        {(() => {
          const mergedHof = { ...hallOfFame };
          Object.entries(globalHof).forEach(([key, entries]) => { mergedHof[key] = entries; });
          const hofKeys = Object.keys(mergedHof).filter(k => mergedHof[k]?.length > 0);
          if (hofKeys.length === 0) return null;
          const hofMedals = ["👑", "🥈", "🥉", "4️⃣", "5️⃣"];
          const fmtTime = (s) => !s ? "—" : s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;

          return (
            <div style={{ marginBottom: 14 }}>
              <button onClick={() => setHofOpen(o => !o)} style={{
                width: "100%", padding: "12px 16px", borderRadius: 14,
                border: "2px solid #c0a030", background: hofOpen ? "linear-gradient(135deg, #1a1200, #2a2000)" : "linear-gradient(135deg, #111800, #1e2500)",
                color: "#e8c840", fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 15,
                cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <span>🏅 Hall of Fame — snelste 100% per vak</span>
                <span style={{ fontSize: 18 }}>{hofOpen ? "▲" : "▼"}</span>
              </button>

              {hofOpen && (
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
                  {hofKeys.sort().map(key => {
                    const parts = key.split("-");
                    const subjectId = parts[0];
                    const levelId = parts.slice(1).join("-");
                    const subj = SUBJECTS.find(s => s.id === subjectId);
                    const levelLabel = LEVELS.find(l => l.id === levelId)?.label || levelId;
                    const hofEntries = mergedHof[key];
                    const isKeyOpen = openHofKeys.has(key);

                    return (
                      <div key={key} style={{ borderRadius: 12, overflow: "hidden", border: "1px solid #2a3520", background: "#0e1a0e" }}>
                        {/* Vak-header */}
                        <button onClick={() => setOpenHofKeys(prev => {
                          const next = new Set(prev);
                          next.has(key) ? next.delete(key) : next.add(key);
                          return next;
                        })} style={{
                          width: "100%", padding: "10px 14px", background: "transparent", border: "none",
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          cursor: "pointer", fontFamily: "'Fredoka', sans-serif",
                        }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span style={{ fontSize: 20 }}>{subj?.icon || "🎯"}</span>
                            <div style={{ textAlign: "left" }}>
                              <div style={{ fontWeight: 800, fontSize: 13, color: "#e8c840" }}>{subj?.label || subjectId}</div>
                              <div style={{ fontSize: 11, color: "#6a8a6a" }}>{levelLabel} · {hofEntries.length} record{hofEntries.length !== 1 ? "s" : ""}</div>
                            </div>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span style={{ fontSize: 20 }}>👑</span>
                            <span style={{ fontSize: 13, color: "#e8c840", fontWeight: 700 }}>{hofEntries[0]?.player}</span>
                            <span style={{ color: "#6a8a6a", fontSize: 12 }}>{isKeyOpen ? "▲" : "▼"}</span>
                          </div>
                        </button>

                        {/* Top 5 lijst */}
                        {isKeyOpen && (
                          <div style={{ borderTop: "1px solid #1a2a1a" }}>
                            {hofEntries.map((e, rank) => {
                              const isMe = e.player === currentUser;
                              const canChallenge = onChallenge && e.questions?.length;
                              const myShareText = `Ik sta in de Studiebol Hall of Fame!\n\n${subj?.label || subjectId} - ${levelLabel} - 100% in ${fmtTime(e.timeTaken)}\n\nKun jij mij verslaan?\nhttps://studiebol.online`;
                              const challengeText = `Kun jij ${e.player} verslaan op Studiebol?\n\n${e.player} staat in de Hall of Fame:\n${subj?.label || subjectId} - ${levelLabel} - 100% in ${fmtTime(e.timeTaken)}\n\nDoe de uitdaging!\nhttps://studiebol.online`;
                              return (
                                <div key={rank} style={{
                                  padding: "10px 14px",
                                  background: rank === 0 ? "rgba(255,215,0,0.06)" : isMe ? "rgba(0,212,255,0.06)" : "transparent",
                                  borderTop: rank > 0 ? "1px solid #111e11" : "none",
                                }}>
                                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                                    <span style={{ fontSize: rank === 0 ? 22 : 18, width: 28, textAlign: "center", flexShrink: 0 }}>{hofMedals[rank]}</span>
                                    <div style={{ flex: 1 }}>
                                      <div style={{ fontWeight: 700, fontSize: 13, color: rank === 0 ? "#ffd700" : isMe ? "#00d4ff" : "#c0d0c0" }}>
                                        {e.player} {isMe && <span style={{ fontSize: 10, color: "#556677" }}>(jij)</span>}
                                      </div>
                                      <div style={{ fontSize: 11, color: "#556677", marginTop: 1 }}>
                                        ⏱ {fmtTime(e.timeTaken)}
                                        {e.completedAt && <span style={{ marginLeft: 8 }}>📅 {fmtDate(e.completedAt)}</span>}
                                      </div>
                                    </div>
                                    {canChallenge && (
                                      <button onClick={() => onChallenge({ subject: subjectId, level: levelId, topic: null }, e.questions)}
                                        style={{ padding: "3px 10px", border: "1px solid #00d4ff", borderRadius: 8, background: "transparent", color: "#00d4ff", fontFamily: "'Fredoka', sans-serif", fontSize: 11, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
                                        💪 Ik kan dit beter!
                                      </button>
                                    )}
                                  </div>
                                  {/* Deel-knoppen: alleen voor eigen entry */}
                                  {isMe && (
                                    <div style={{ marginTop: 8 }}>
                                      <div style={{ fontSize: 10, fontWeight: 800, color: "#ffd700", fontFamily: "'Fredoka', sans-serif", marginBottom: 4, textAlign: "center" }}>
                                        🎉 Deel je super resultaat!
                                      </div>
                                      <div style={{ display: "flex", gap: 5 }}>
                                        <a href={`https://wa.me/?text=${encodeURIComponent(myShareText)}`} target="_blank" rel="noopener noreferrer"
                                          style={{ flex: 1, padding: "5px 4px", borderRadius: 7, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 11, textDecoration: "none", textAlign: "center", display: "block" }}>
                                          📱 WhatsApp
                                        </a>
                                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://studiebol.online")}`} target="_blank" rel="noopener noreferrer"
                                          style={{ flex: 1, padding: "5px 4px", borderRadius: 7, background: "#1877F2", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 11, textDecoration: "none", textAlign: "center", display: "block" }}>
                                          👍 Facebook
                                        </a>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })()}

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
                    <div style={{ fontSize: 12, color: "#c0cfe0", fontWeight: 700 }}>
                      {entry.title
                        ? <span>📝 {entry.title}</span>
                        : subj
                          ? <span>{subj.icon} {subj.label} · {LEVELS.find((l) => l.id === entry.level)?.label}</span>
                          : <span>🎯 {entry.topic || entry.subject}</span>
                      }
                      {entry.timeTaken ? <span style={{ marginLeft: 6, color: "#00d4ff" }}>⏱ {entry.timeTaken < 60 ? `${entry.timeTaken}s` : `${Math.floor(entry.timeTaken / 60)}m ${entry.timeTaken % 60}s`}</span> : null}
                    </div>
                    {entry.topic && !entry.title && <div style={{ fontSize: 10, color: "#7a9a7a", marginTop: 1 }}>📖 {entry.topic.split('\n')[0].slice(0, 60)}</div>}
                    {entry.completedAt && <div style={{ fontSize: 10, color: "#556677", marginTop: 2 }}>📅 {fmtDate(entry.completedAt)}</div>}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                    <div style={{
                      padding: "4px 12px", borderRadius: 10, fontWeight: 800, fontSize: 15,
                      background: entry.percentage >= 80 ? "#d4edda" : entry.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                      color: entry.percentage >= 80 ? "#155724" : entry.percentage >= 50 ? "#856404" : "#721c24",
                    }}>
                      {entry.percentage}%
                    </div>
                    {(() => {
                      const hofKey = `${entry.subject}-${entry.level}`;
                      const hofEntry = globalHof?.[hofKey]?.[0] || hallOfFame?.[hofKey]?.[0];
                      const hasHof = hofEntry?.questions?.length && onChallenge;
                      const isMyScore = isMe && entry.timeTaken === hofEntry?.timeTaken;
                      const alreadyChallenged = !!challenged[hofKey];
                      const subjectLabel = subj?.label || entry.subject;
                      const levelLabel = LEVELS.find((l) => l.id === entry.level)?.label || entry.level;
                      const timeTxt = entry.timeTaken ? ` in ${entry.timeTaken < 60 ? entry.timeTaken + "s" : Math.floor(entry.timeTaken / 60) + "m " + (entry.timeTaken % 60) + "s"}` : "";
                      const myShareText = `🏆 Kijk mijn super resultaat op Studiebol!\n\n${i === 0 ? "Ik sta op #1!" : `Ik sta op #${i + 1}`} — ${subjectLabel} - ${levelLabel} - ${entry.percentage}%${timeTxt}\n\nKun jij mij verslaan? 💪\nhttps://studiebol.online`;
                      const challengeShareText = `Kun jij ${entry.player} verslaan op Studiebol?\n\n${entry.player} staat #${i + 1}: ${subjectLabel} - ${levelLabel} - ${entry.percentage}%${timeTxt}\n\nDoe de uitdaging!\nhttps://studiebol.online`;
                      const shareText = isMe ? myShareText : challengeShareText;
                      return (
                        <>
                          {hasHof && (
                            alreadyChallenged && !isMyScore ? (
                              <div style={{ fontSize: 10, color: "#556677", textAlign: "center", padding: "4px 8px", border: "1px solid #334", borderRadius: 8 }}>✓ Geprobeerd</div>
                            ) : (
                              <>
                                <button
                                  onClick={() => {
                                    if (!isMyScore) {
                                      const updated = { ...challenged, [hofKey]: true };
                                      localStorage.setItem("ls_challenged", JSON.stringify(updated));
                                      setChallenged(updated);
                                    }
                                    onChallenge(entry, hofEntry.questions);
                                  }}
                                  style={{ padding: "4px 10px", border: `1px solid ${isMyScore ? "#ffd700" : "#00d4ff"}`, borderRadius: 8, background: isMyScore ? "rgba(255,215,0,0.15)" : "transparent", color: isMyScore ? "#ffd700" : "#00d4ff", fontFamily: "'Fredoka', sans-serif", fontSize: 11, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}
                                  title="Exact dezelfde vragen — eerlijke wedstrijd!"
                                >
                                  {isMyScore ? "🔄 Beter!" : "💪 Ik kan dit beter!"}
                                </button>
                                <div style={{ fontSize: 9, color: "#8899aa", textAlign: "center", marginTop: 1 }}>zelfde vragen</div>
                              </>
                            )
                          )}
                          {isMe && (
                            <div style={{ marginTop: 4 }}>
                              <div style={{ fontSize: 9, fontWeight: 800, color: "#ffd700", fontFamily: "'Fredoka', sans-serif", marginBottom: 3, textAlign: "center" }}>
                                🎉 Deel je super resultaat!
                              </div>
                              <div style={{ display: "flex", gap: 4 }}>
                                <a href={`https://wa.me/?text=${encodeURIComponent(myShareText)}`} target="_blank" rel="noopener noreferrer"
                                  style={{ padding: "4px 8px", borderRadius: 7, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 10, textDecoration: "none", whiteSpace: "nowrap" }}>
                                  📱 WhatsApp
                                </a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://studiebol.online")}`} target="_blank" rel="noopener noreferrer"
                                  style={{ padding: "4px 8px", borderRadius: 7, background: "#1877F2", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 10, textDecoration: "none", whiteSpace: "nowrap" }}>
                                  👍 Facebook
                                </a>
                              </div>
                            </div>
                          )}
                        </>
                      );
                    })()}
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

async function deelKampioenKaart({ playerName, subjectIcon, subjectLabel, levelLabel, percentage, timeTaken, periodTitle, shareText }) {
  return new Promise((resolve) => {
    const W = 1080, H = 1080;
    const canvas = document.createElement("canvas");
    canvas.width = W; canvas.height = H;
    const ctx = canvas.getContext("2d");

    // Achtergrond
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, "#0f1729");
    grad.addColorStop(1, "#1a2744");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Gouden rand
    ctx.strokeStyle = "#ffd700";
    ctx.lineWidth = 10;
    ctx.strokeRect(18, 18, W - 36, H - 36);

    // Gouden gloed in hoeken
    const glow = ctx.createRadialGradient(W/2, 0, 0, W/2, 0, 500);
    glow.addColorStop(0, "rgba(255,215,0,0.12)");
    glow.addColorStop(1, "transparent");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, W, H);

    ctx.textAlign = "center";

    // Gouden kroon — getekend met canvas shapes (geen emoji)
    const cx = W / 2, cy = 160, cw = 180, ch = 110;
    ctx.fillStyle = "#ffd700";
    // Basis van de kroon
    ctx.fillRect(cx - cw/2, cy, cw, ch * 0.45);
    // Drie punten
    [[cx - cw/2, cy], [cx, cy - ch * 0.6], [cx + cw/2, cy]].forEach(([px, py]) => {
      ctx.beginPath(); ctx.arc(px, py, 18, 0, Math.PI * 2); ctx.fill();
    });
    // Driehoeken omhoog
    ctx.beginPath();
    ctx.moveTo(cx - cw/2, cy); ctx.lineTo(cx - cw/4, cy - ch * 0.55); ctx.lineTo(cx - cw/10, cy); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx, cy - ch * 0.6); ctx.lineTo(cx - cw/10, cy); ctx.lineTo(cx + cw/10, cy); ctx.fill();
    ctx.beginPath();
    ctx.moveTo(cx + cw/2, cy); ctx.lineTo(cx + cw/4, cy - ch * 0.55); ctx.lineTo(cx + cw/10, cy); ctx.fill();
    // Robijnen op de punten
    ctx.fillStyle = "#ff4444";
    [[cx - cw/2, cy], [cx, cy - ch * 0.6], [cx + cw/2, cy]].forEach(([px, py]) => {
      ctx.beginPath(); ctx.arc(px, py, 10, 0, Math.PI * 2); ctx.fill();
    });

    // KAMPIOEN titel
    ctx.font = "bold 56px Arial, sans-serif";
    ctx.fillStyle = "#ffd700";
    ctx.fillText("STUDIEBOL KAMPIOEN", W / 2, 310);

    // Periode
    ctx.font = "34px Arial, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    ctx.fillText(periodTitle.toUpperCase(), W / 2, 362);

    // Lijn
    ctx.strokeStyle = "rgba(255,215,0,0.3)";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(80, 392); ctx.lineTo(W - 80, 392); ctx.stroke();

    // Naam
    ctx.font = "bold 88px Arial, sans-serif";
    ctx.fillStyle = "#ffffff";
    const nameText = playerName.length > 14 ? playerName.slice(0, 13) + "…" : playerName;
    ctx.fillText(nameText, W / 2, 500);

    // Vak (geen emoji — alleen tekst)
    ctx.font = "38px Arial, sans-serif";
    ctx.fillStyle = "#00d4ff";
    ctx.fillText(`${subjectLabel} \u00b7 ${levelLabel}`, W / 2, 562);

    // Score
    ctx.font = "bold 140px Arial, sans-serif";
    ctx.fillStyle = percentage >= 80 ? "#00e676" : "#ffd700";
    ctx.fillText(`${percentage}%`, W / 2, 720);

    // Tijd
    if (timeTaken) {
      ctx.font = "34px Arial, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.45)";
      const fmtT = (s) => s < 60 ? `${s}s` : `${Math.floor(s/60)}m ${s%60}s`;
      ctx.fillText(`Tijd: ${fmtT(timeTaken)}`, W / 2, 780);
    }

    // Lijn
    ctx.strokeStyle = "rgba(0,212,255,0.25)";
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(80, 820); ctx.lineTo(W - 80, 820); ctx.stroke();

    // Uitdaging
    ctx.font = "34px Arial, sans-serif";
    ctx.fillStyle = "rgba(255,255,255,0.65)";
    ctx.fillText("Kun jij dit verslaan?", W / 2, 880);

    // URL
    ctx.font = "bold 40px Arial, sans-serif";
    ctx.fillStyle = "#00d4ff";
    ctx.fillText("studiebol.online", W / 2, 940);

    canvas.toBlob(async (blob) => {
      const file = new File([blob], "studiebol-kampioen.png", { type: "image/png" });
      try {
        if (navigator.share && navigator.canShare?.({ files: [file] })) {
          await navigator.share({ files: [file], text: shareText, title: "Studiebol Kampioen 👑" });
        } else {
          // Desktop: download afbeelding + open Facebook
          const url = URL.createObjectURL(blob);
          const a = document.createElement("a"); a.href = url; a.download = "studiebol-kampioen.png"; a.click();
          setTimeout(() => URL.revokeObjectURL(url), 1000);
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://studiebol.online")}&quote=${encodeURIComponent(shareText)}`, "_blank");
        }
      } catch {
        // Fallback: alleen download
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a"); a.href = url; a.download = "studiebol-kampioen.png"; a.click();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
      }
      resolve();
    }, "image/png");
  });
}

export function Kampioenen({ currentUser, onBack, onHome, onChallenge, hallOfFame }) {
  const periods = [
    { id: "dag",   label: "Vandaag",  icon: "☀️",  title: "Studiebol van de dag" },
    { id: "week",  label: "Week",     icon: "📅",  title: "Studiebol van de week" },
    { id: "maand", label: "Maand",    icon: "🗓️",  title: "Studiebol van de maand" },
    { id: "jaar",  label: "Jaar",     icon: "👑",  title: "Studiebol van het jaar" },
    { id: "obliterator", label: "Obliterator", icon: "💀", title: "OBLITERATOR Top 25" },
  ];
  const medals = ["👑", "🥈", "🥉"];
  const medalColors = ["#ffd700", "#c0c0c0", "#cd7f32"];

  const [activePeriod, setActivePeriod] = useState("dag");
  const [winners, setWinners] = useState({ dag: [], week: [], maand: [], jaar: [] });
  const [loading, setLoading] = useState(true);
  const [globalHof, setGlobalHof] = useState({});
  const [awards, setAwards] = useState({});
  const [awardsLoading, setAwardsLoading] = useState({});
  const [obliteratorScores, setObliteratorScores] = useState(null); // null = nog niet geladen
  const [obliteratorLoading, setObliteratorLoading] = useState(false);

  const periodRanges = (() => {
    const now = new Date();
    const startOfDay = new Date(now); startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(now); endOfDay.setHours(23, 59, 59, 999);
    const startOfWeek = new Date(now);
    const d = now.getDay();
    startOfWeek.setDate(now.getDate() - (d === 0 ? 6 : d - 1)); startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek); endOfWeek.setDate(startOfWeek.getDate() + 6); endOfWeek.setHours(23, 59, 59, 999);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);
    return {
      dag:   { from: startOfDay,   to: endOfDay   },
      week:  { from: startOfWeek,  to: endOfWeek  },
      maand: { from: startOfMonth, to: endOfMonth },
      jaar:  { from: startOfYear,  to: endOfYear  },
    };
  })();

  const calcAwards = (entries) => {
    if (!entries.length) return {};
    const byPlayer = {};
    entries.forEach(e => {
      const name = e.player_name;
      if (!byPlayer[name]) byPlayer[name] = [];
      byPlayer[name].push(e);
    });
    const players = Object.entries(byPlayer);
    const sorted = (fn) => [...players].sort(fn)[0];

    const [doorzName, doorzE] = sorted((a, b) => b[1].length - a[1].length) || [];
    const [hardName, hardE] = sorted((a, b) => b[1].reduce((s, e) => s + (e.score || 0), 0) - a[1].reduce((s, e) => s + (e.score || 0), 0)) || [];
    const verbPlayers = players
      .filter(([, e]) => e.length >= 2)
      .map(([name, e]) => ({ name, imp: e[e.length - 1].percentage - e[0].percentage }))
      .filter(p => p.imp > 0).sort((a, b) => b.imp - a.imp);
    const [actiefName, actiefE] = sorted((a, b) => new Set(b[1].map(e => e.completed_at?.slice(0, 10))).size - new Set(a[1].map(e => e.completed_at?.slice(0, 10))).size) || [];

    return {
      doorzetter: doorzName ? { name: doorzName, value: doorzE.length, unit: "toetsen gemaakt" } : null,
      hardwerker: hardName ? { name: hardName, value: hardE.reduce((s, e) => s + (e.score || 0), 0), unit: "vragen goed" } : null,
      verbeteraar: verbPlayers[0] ? { name: verbPlayers[0].name, value: verbPlayers[0].imp, unit: "% verbeterd" } : null,
      actiefste: actiefName ? { name: actiefName, value: new Set(actiefE.map(e => e.completed_at?.slice(0, 10))).size, unit: "dagen actief" } : null,
    };
  };

  // OBLITERATOR top 25 fetchen wanneer tab voor het eerst geopend wordt
  useEffect(() => {
    if (activePeriod !== "obliterator" || obliteratorScores !== null || obliteratorLoading) return;
    setObliteratorLoading(true);
    supabase.from("obliterator_scores")
      .select("player_name, score, created_at")
      .order("score", { ascending: false })
      .order("created_at", { ascending: true })
      .limit(25)
      .then(({ data }) => {
        setObliteratorScores(data || []);
        setObliteratorLoading(false);
      })
      .catch(() => {
        setObliteratorScores([]);
        setObliteratorLoading(false);
      });
  }, [activePeriod]);

  useEffect(() => {
    if (activePeriod === "obliterator") return; // skip voor obliterator
    if (awards[activePeriod] || awardsLoading[activePeriod]) return;
    setAwardsLoading(prev => ({ ...prev, [activePeriod]: true }));
    const { from, to } = periodRanges[activePeriod];
    Promise.all([
      supabase.from("leaderboard")
        .select("player_name, score, total, percentage, completed_at")
        .gte("completed_at", from.toISOString())
        .lte("completed_at", to.toISOString())
        .order("completed_at", { ascending: true })
        .then(({ data }) => data || []).catch(() => []),
      supabase.from("share_events")
        .select("shared_by, platform, created_at")
        .gte("created_at", from.toISOString())
        .lte("created_at", to.toISOString())
        .then(({ data }) => data || []).catch(() => []),
    ]).then(([lb, shares]) => {
      const baseAwards = calcAwards(lb);
      // Vriendenmaker = persoon met de meeste shares in deze periode
      let vriend = null;
      if (shares.length) {
        const tally = {};
        shares.forEach(s => {
          const n = (s.shared_by || "").trim();
          if (!n) return;
          tally[n] = (tally[n] || 0) + 1;
        });
        const top = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
        if (top) vriend = { name: top[0], value: top[1], unit: top[1] === 1 ? "keer gedeeld" : "keer gedeeld" };
      }
      setAwards(prev => ({ ...prev, [activePeriod]: { ...baseAwards, vriendenmaker: vriend } }));
      setAwardsLoading(prev => ({ ...prev, [activePeriod]: false }));
    }).catch(() => setAwardsLoading(prev => ({ ...prev, [activePeriod]: false })));
  }, [activePeriod]);

  useEffect(() => {
    const { from: startOfDay } = periodRanges.dag;
    const { from: startOfWeek } = periodRanges.week;
    const { from: startOfMonth } = periodRanges.maand;
    const { from: startOfYear } = periodRanges.jaar;

    const fetchTop3 = (since) =>
      supabase.from("leaderboard")
        .select("player_name, subject, level, score, total, percentage, time_taken, completed_at")
        .gte("completed_at", since.toISOString())
        .order("percentage", { ascending: false })
        .order("time_taken", { ascending: true, nullsFirst: false })
        .limit(3)
        .then(({ data }) => data || []);

    Promise.all([
      fetchTop3(startOfDay),
      fetchTop3(startOfWeek),
      fetchTop3(startOfMonth),
      fetchTop3(startOfYear),
    ]).then(([dag, week, maand, jaar]) => {
      setWinners({ dag, week, maand, jaar });
      setLoading(false);
    }).catch(() => setLoading(false));

    supabase.from("hall_of_fame").select("subject, level, player_name, time_taken, questions").order("time_taken", { ascending: true })
      .then(({ data: rows }) => {
        if (!rows?.length) return;
        const hof = {};
        rows.forEach(r => {
          const key = `${r.subject}-${r.level}`;
          if (!hof[key]) hof[key] = [];
          if (hof[key].length < 5) hof[key].push({ player: r.player_name, timeTaken: r.time_taken, questions: r.questions });
        });
        setGlobalHof(hof);
      }).catch(() => {});
  }, []);

  const fmtDate = (iso) => {
    if (!iso) return null;
    const d = new Date(iso);
    return d.toLocaleDateString("nl-NL", { day: "numeric", month: "short" }) + " " + d.toLocaleTimeString("nl-NL", { hour: "2-digit", minute: "2-digit" });
  };

  const fmtTime = (s) => s < 60 ? `${s}s` : `${Math.floor(s / 60)}m ${s % 60}s`;

  const current = periods.find(p => p.id === activePeriod);
  const list = winners[activePeriod] || [];

  return (
    <div style={styles.page}>
      <Header title="Kampioenen 👑" subtitle="De beste spelers per periode" onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {/* Periode tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {periods.map(p => (
            <button key={p.id} onClick={() => setActivePeriod(p.id)} style={{
              flex: 1, padding: "10px 4px", borderRadius: 12, border: "none", cursor: "pointer",
              fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 13,
              background: activePeriod === p.id ? "linear-gradient(135deg, #ffd700, #ffaa00)" : "#1a2a3a",
              color: activePeriod === p.id ? "#1a1a00" : "#8899aa",
              boxShadow: activePeriod === p.id ? "0 2px 12px rgba(255,215,0,0.4)" : "none",
              transition: "all 0.2s",
            }}>
              <div style={{ fontSize: 20 }}>{p.icon}</div>
              <div>{p.label}</div>
            </button>
          ))}
        </div>

        {activePeriod === "obliterator" ? (
          obliteratorLoading || obliteratorScores === null ? (
            <div style={{ textAlign: "center", color: "#8899aa", padding: 40 }}>Scorebord laden…</div>
          ) : obliteratorScores.length === 0 ? (
            <div style={{ textAlign: "center", color: "#8899aa", padding: 40 }}>
              <div style={{ fontSize: 48 }}>💀</div>
              <p>Nog geen OBLITERATOR-scores.<br />Speel het spel na een quiz om de eerste te worden!</p>
            </div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <div style={{
                textAlign: "center", padding: "14px 16px", borderRadius: 14, marginBottom: 4,
                background: "linear-gradient(135deg, #2a0a14, #4a1020)",
                border: "1px solid rgba(255,80,40,0.5)",
                boxShadow: "0 0 20px rgba(255,80,40,0.3)"
              }}>
                <div style={{ fontSize: 28, marginBottom: 2 }}>💀🔥💀</div>
                <div style={{
                  fontFamily: "Impact, 'Arial Black', sans-serif", fontSize: 20, letterSpacing: 3,
                  color: "#ffcc40",
                  textShadow: "0 0 10px rgba(255,150,40,0.8)"
                }}>OBLITERATOR TOP 25</div>
                <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 12, marginTop: 4 }}>
                  Sneller spel · 5 werelden · pittigste highscore-strijd
                </div>
              </div>
              {obliteratorScores.map((entry, i) => {
                const isMe = entry.player_name === currentUser;
                const datum = entry.created_at
                  ? new Date(entry.created_at).toLocaleDateString("nl-NL", { day: "numeric", month: "short", year: "numeric" })
                  : "";
                const medalIcon = i === 0 ? "👑" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`;
                return (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "10px 14px", borderRadius: 10,
                    background: isMe
                      ? "linear-gradient(135deg, rgba(105,240,174,0.15), rgba(105,240,174,0.05))"
                      : i < 3 ? "rgba(255,200,80,0.08)" : "rgba(255,255,255,0.04)",
                    border: isMe
                      ? "1px solid rgba(105,240,174,0.5)"
                      : i < 3 ? "1px solid rgba(255,200,80,0.3)" : "1px solid rgba(255,255,255,0.1)",
                  }}>
                    <div style={{
                      minWidth: 36, textAlign: "center",
                      fontSize: i < 3 ? 22 : 14, fontWeight: 800,
                      color: i < 3 ? "#ffd700" : "#8899aa"
                    }}>
                      {medalIcon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700,
                        color: isMe ? "#69f0ae" : "#fff"
                      }}>
                        {entry.player_name}{isMe ? " (jij)" : ""}
                      </div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
                        {datum}
                      </div>
                    </div>
                    <div style={{
                      fontFamily: "Impact, 'Arial Black', sans-serif",
                      fontSize: 22, color: "#ffcc40",
                      textShadow: "0 0 8px rgba(255,150,40,0.5)",
                      letterSpacing: 1
                    }}>
                      {entry.score}
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : loading ? (
          <div style={{ textAlign: "center", color: "#8899aa", padding: 40 }}>Laden...</div>
        ) : list.length === 0 ? (
          <div style={{ textAlign: "center", color: "#8899aa", padding: 40 }}>
            <div style={{ fontSize: 48 }}>🏆</div>
            <p>Nog geen scores {activePeriod === "dag" ? "vandaag" : `deze ${activePeriod}`}.<br />Speel een quiz om de eerste kampioen te worden!</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ textAlign: "center", color: "#ffd700", fontWeight: 800, fontSize: 16, letterSpacing: 1, marginBottom: 4 }}>
              {current.icon} {current.title.toUpperCase()} {current.icon}
            </div>

            {list.map((entry, i) => {
              const subj = SUBJECTS.find(s => s.id === entry.subject);
              const levelLabel = LEVELS.find(l => l.id === entry.level)?.label || entry.level;
              const isMe = (entry.player_name || entry.player) === currentUser;
              const hofKey = `${entry.subject}-${entry.level}`;
              const hofEntry = globalHof?.[hofKey]?.[0] || hallOfFame?.[hofKey]?.[0];
              const canChallenge = !!hofEntry?.questions?.length && onChallenge;
              const playerName = entry.player_name || entry.player;
              const shareText = `${i === 0 ? `Ik ben de ${current.title}!` : `Ik sta #${i+1} bij de ${current.title}!`}\n${playerName} - ${subj?.label || entry.subject} - ${levelLabel} - ${entry.percentage}%${entry.time_taken ? ` in ${fmtTime(entry.time_taken)}` : ""}\n\nKun jij mij verslaan?\nhttps://studiebol.online`;

              return (
                <div key={i} style={{
                  borderRadius: 16, padding: i === 0 ? "20px 18px" : "14px 16px",
                  background: i === 0
                    ? "linear-gradient(135deg, #2a1f00, #3a2c00)"
                    : "#111d2b",
                  border: `2px solid ${medalColors[i] || "#334455"}`,
                  boxShadow: i === 0 ? `0 4px 20px rgba(255,215,0,0.25)` : "0 1px 4px rgba(0,0,0,0.3)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    {/* Medaille */}
                    <div style={{
                      width: i === 0 ? 52 : 40, height: i === 0 ? 52 : 40,
                      borderRadius: 14, background: "#162033",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      fontSize: i === 0 ? 28 : 22,
                    }}>
                      {medals[i] || `#${i+1}`}
                    </div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 800, fontSize: i === 0 ? 18 : 15, color: medalColors[i] || "#e0e6f0" }}>
                        {playerName} {isMe && <span style={{ fontSize: 11, color: "#8899aa" }}>(jij)</span>}
                      </div>
                      <div style={{ fontSize: 12, color: "#c0cfe0", fontWeight: 700, marginTop: 2 }}>
                        {subj?.icon} {subj?.label} · {levelLabel}
                        {entry.time_taken ? <span style={{ marginLeft: 6, color: "#00d4ff" }}>⏱ {fmtTime(entry.time_taken)}</span> : null}
                      </div>
                      {entry.completed_at && <div style={{ fontSize: 10, color: "#556677", marginTop: 2 }}>📅 {fmtDate(entry.completed_at)}</div>}
                    </div>

                    {/* Score badge */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
                      <div style={{
                        padding: i === 0 ? "6px 14px" : "4px 10px",
                        borderRadius: 10, fontWeight: 800, fontSize: i === 0 ? 18 : 14,
                        background: entry.percentage >= 80 ? "#1a3a1a" : "#3a2a0a",
                        color: entry.percentage >= 80 ? "#6fcf87" : "#ffd700",
                        border: `1px solid ${entry.percentage >= 80 ? "#28a745" : "#ffa000"}`,
                      }}>
                        {entry.percentage}%
                      </div>
                      {/* Acties (voor #2 en hoger) */}
                      {i > 0 && (() => {
                        return (
                          <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
                            {canChallenge && (
                              <button onClick={() => onChallenge({ subject: entry.subject, level: entry.level, topic: null }, hofEntry.questions)}
                                style={{ padding: "3px 8px", border: "1px solid #00d4ff", borderRadius: 8, background: "transparent", color: "#00d4ff", fontFamily: "'Fredoka', sans-serif", fontSize: 10, fontWeight: 700, cursor: "pointer" }}>
                                💪 Ik kan dit beter!
                              </button>
                            )}
                            {isMe && (
                              <div style={{ display: "flex", gap: 4 }}>
                                <a href={`https://wa.me/?text=${encodeURIComponent(shareText)}`} target="_blank" rel="noopener noreferrer"
                                  style={{ padding: "3px 8px", borderRadius: 7, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 10, textDecoration: "none" }}>
                                  📱 Deel
                                </a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://studiebol.online")}`} target="_blank" rel="noopener noreferrer"
                                  style={{ padding: "3px 8px", borderRadius: 7, background: "#1877F2", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 10, textDecoration: "none" }}>
                                  👍 Deel
                                </a>
                              </div>
                            )}
                          </div>
                        );
                      })()}
                    </div>
                  </div>

                  {/* Kampioen-banner voor #1 */}
                  {i === 0 && !isMe && canChallenge && (
                    <div style={{ marginTop: 12, padding: "12px 14px", borderRadius: 10, background: "rgba(255,215,0,0.08)", border: "1px solid rgba(255,215,0,0.2)" }}>
                      <div style={{ fontSize: 11, color: "#aaa", marginBottom: 8 }}>
                        {activePeriod === "jaar" ? "👑 Kroon dit jaar — kan jij dit verslaan?" : `🔥 Toppositie ${current.label.toLowerCase()} — kan jij dit verslaan?`}
                      </div>
                      <button onClick={() => onChallenge({ subject: entry.subject, level: entry.level, topic: null }, hofEntry.questions)}
                        style={{ width: "100%", padding: "7px 10px", border: "1px solid #00d4ff", borderRadius: 8, background: "transparent", color: "#00d4ff", fontFamily: "'Fredoka', sans-serif", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                        💪 Ik kan dit beter!
                      </button>
                    </div>
                  )}

                  {/* Deel-sectie voor #1 als het jij bent */}
                  {i === 0 && isMe && (() => {
                    const waText = `Jippie! Ik ben ${current.title}!\n\n${playerName} - ${subj?.label || entry.subject} - ${levelLabel} - ${entry.percentage}%${entry.time_taken ? ` in ${fmtTime(entry.time_taken)}` : ""}\n\nKun jij dit verslaan?\nhttps://studiebol.online`;
                    const cardData = {
                      playerName,
                      subjectIcon: subj?.icon || "📚",
                      subjectLabel: subj?.label || entry.subject,
                      levelLabel,
                      percentage: entry.percentage,
                      timeTaken: entry.time_taken,
                      periodTitle: current.title,
                      shareText: waText,
                    };
                    return (
                      <div style={{ marginTop: 14, padding: "14px", borderRadius: 12, background: "rgba(255,215,0,0.06)", border: "1px solid rgba(255,215,0,0.25)" }}>
                        <div style={{ fontSize: 12, color: "#ffd700", fontWeight: 800, textAlign: "center", marginBottom: 10 }}>
                          🎉 Jippie! Jij bent {current.title}! Deel het!
                        </div>
                        <div style={{ display: "flex", gap: 8 }}>
                          <a href={`https://wa.me/?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" style={{
                            flex: 1, padding: "10px 8px", borderRadius: 10, background: "#25D366",
                            color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 13,
                            textDecoration: "none", textAlign: "center", display: "block",
                          }}>
                            📱 WhatsApp
                          </a>
                          <button onClick={() => deelKampioenKaart(cardData)} style={{
                            flex: 1, padding: "10px 8px", borderRadius: 10, background: "#1877F2",
                            color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 13,
                            border: "none", cursor: "pointer", textAlign: "center",
                          }}>
                            👍 Facebook
                          </button>
                        </div>
                      </div>
                    );
                  })()}
                </div>
              );
            })}

            {/* ── Aanmoedigingsprijzen ── */}
            {(() => {
              const periodLabel = current.label.toLowerCase();
              const periodAwards = awards[activePeriod];
              const awardDefs = [
                { key: "doorzetter",   icon: "💪", title: "Doorzetter",    color: "#00c853", bg: "#001a08", border: "#00c853", msg: (a) => `${a.value} ${a.unit} ${periodLabel}` },
                { key: "hardwerker",   icon: "🧠", title: "Hardwerker",    color: "#1a73e8", bg: "#000d1a", border: "#1a73e8", msg: (a) => `${a.value} ${a.unit} ${periodLabel}` },
                { key: "verbeteraar",  icon: "📈", title: "Verbeteraar",   color: "#ff9800", bg: "#1a0d00", border: "#ff9800", msg: (a) => `+${a.value}% verbeterd ${periodLabel}` },
                { key: "actiefste",    icon: "🔥", title: "Meest actief",  color: "#e91e63", bg: "#1a0010", border: "#e91e63", msg: (a) => `${a.value} ${a.unit} ${periodLabel}` },
                { key: "vriendenmaker",icon: "🌟", title: "Vriendenmaker", color: "#ffd700", bg: "#1a1500", border: "#ffd700", msg: (a) => `${a.value} ${a.unit} ${periodLabel}` },
              ];
              const hasAny = periodAwards && Object.values(periodAwards).some(Boolean);
              if (!hasAny && !awardsLoading[activePeriod]) return null;
              return (
                <div style={{ marginTop: 8 }}>
                  <div style={{ textAlign: "center", color: "#8899aa", fontSize: 12, fontWeight: 700, marginBottom: 10, letterSpacing: 1 }}>
                    — AANMOEDIGINGSPRIJZEN —
                  </div>
                  {awardsLoading[activePeriod] ? (
                    <div style={{ textAlign: "center", color: "#8899aa", fontSize: 12 }}>Laden...</div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {awardDefs.map(({ key, icon, title, color, bg, border, msg }) => {
                        const a = periodAwards?.[key];
                        if (!a) return null;
                        const isMe = a.name === currentUser;
                        return (
                          <div key={key} style={{
                            display: "flex", alignItems: "center", gap: 12, padding: "12px 14px",
                            borderRadius: 14, background: bg, border: `1.5px solid ${border}22`,
                            boxShadow: isMe ? `0 0 12px ${color}33` : "none",
                          }}>
                            <div style={{ fontSize: 28, flexShrink: 0 }}>{icon}</div>
                            <div style={{ flex: 1 }}>
                              <div style={{ fontSize: 11, color, fontWeight: 800, letterSpacing: 0.5 }}>{title.toUpperCase()}</div>
                              <div style={{ fontSize: 14, fontWeight: 800, color: isMe ? color : "#e0e6f0", marginTop: 2 }}>
                                {a.name} {isMe && <span style={{ fontSize: 10, color: "#8899aa" }}>(jij!)</span>}
                              </div>
                              <div style={{ fontSize: 11, color: "#8899aa", marginTop: 1 }}>{msg(a)}</div>
                            </div>
                            {isMe && (
                              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                                <a href={`https://wa.me/?text=${encodeURIComponent(`${icon} Ik ben de ${title} van de ${periodLabel} op Studiebol!\n${a.value} ${a.unit} — zo doe ik dat! 💪\nKun jij dit ook? 👉 https://studiebol.online`)}`}
                                  target="_blank" rel="noopener noreferrer"
                                  style={{ padding: "4px 10px", borderRadius: 8, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 10, textDecoration: "none", whiteSpace: "nowrap", textAlign: "center" }}>
                                  📱 WhatsApp
                                </a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("https://studiebol.online")}`} target="_blank" rel="noopener noreferrer"
                                  style={{ padding: "4px 10px", borderRadius: 8, background: "#1877F2", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 10, textDecoration: "none", whiteSpace: "nowrap", textAlign: "center" }}>
                                  👍 Facebook
                                </a>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        )}
      </div>
    </div>
  );
}

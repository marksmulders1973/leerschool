import { useState, useEffect } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS, SAMPLE_QUESTIONS } from "../constants.js";
import { formatDate, daysUntil, shuffle } from "../utils.js";
import Header from "./Header.jsx";
import supabase from "../supabase.js";

export default function TeacherHome({ userName, quizzes, classes, onCreateQuiz, onViewProgress, onManageClasses, onBack, onHome, onStartQuiz, onDeleteQuiz, onDuplicateQuiz }) {
  const [completions, setCompletions] = useState({});
  const [expandedQuiz, setExpandedQuiz] = useState(null);

  const exportCSV = (q) => {
    const done = completions[q.id] || [];
    const subj = SUBJECTS.find((s) => s.id === q.subject);
    const rows = [["Naam", "Score", "Totaal", "Percentage", "Datum"]];
    done.forEach((r) => rows.push([
      r.player_name, r.score, r.total, r.percentage + "%",
      new Date(r.completed_at).toLocaleDateString("nl-NL"),
    ]));
    const csv = rows.map((r) => r.join(";")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `studiebol_${q.title || subj?.label || "quiz"}_${q.code}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const printToets = (q) => {
    const subj = SUBJECTS.find((s) => s.id === q.subject);
    const level = LEVELS.find((l) => l.id === q.level);
    const questions = (q.preGeneratedQuestions?.length > 0)
      ? q.preGeneratedQuestions.slice(0, q.questionCount || 10)
      : shuffle(SAMPLE_QUESTIONS[q.subject]?.[q.level] || []).slice(0, q.questionCount || 10);

    if (questions.length === 0) {
      alert("Geen vragen beschikbaar voor deze toets.");
      return;
    }

    const letters = ["A", "B", "C", "D"];
    const datum = new Date().toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

    const studentVragen = questions.map((vraag, i) => `
      <div class="vraag">
        <div class="vraag-tekst">${i + 1}. ${vraag.q}</div>
        ${vraag.options.map((opt, j) => `
          <div class="optie">
            <span class="bol"></span>
            <span><strong>${letters[j]}.</strong> ${opt}</span>
          </div>`).join("")}
      </div>`).join("");

    const antwoordVragen = questions.map((vraag, i) => `
      <div class="vraag">
        <div class="vraag-tekst">${i + 1}. ${vraag.q}</div>
        <div class="antwoord">✓ ${letters[vraag.answer]}. ${vraag.options[vraag.answer]}</div>
        ${vraag.explanation ? `<div class="uitleg">💡 ${vraag.explanation}</div>` : ""}
      </div>`).join("");

    const html = `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="utf-8">
  <title>Toets – ${subj?.label || q.title}</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: Arial, sans-serif; font-size: 12pt; color: #000; background: #fff; padding: 30px 40px; }
    .kop { border-bottom: 2.5px solid #000; padding-bottom: 12px; margin-bottom: 22px; }
    .kop h1 { font-size: 17pt; margin-bottom: 6px; }
    .kop .invul { font-size: 11pt; margin-top: 8px; display: flex; gap: 30px; }
    .invul-veld { border-bottom: 1.5px solid #000; min-width: 180px; display: inline-block; }
    .vraag { margin-bottom: 20px; page-break-inside: avoid; }
    .vraag-tekst { font-weight: bold; margin-bottom: 7px; line-height: 1.4; }
    .optie { display: flex; align-items: center; gap: 8px; margin: 5px 0 5px 8px; font-size: 11pt; }
    .bol { width: 14px; height: 14px; border: 1.8px solid #000; border-radius: 50%; flex-shrink: 0; display: inline-block; }
    .pagina-wissel { page-break-before: always; }
    .label-leerkracht { background: #eee; border: 1px solid #bbb; border-radius: 4px; padding: 4px 12px; font-size: 10pt; font-style: italic; display: inline-block; margin-bottom: 16px; }
    .antwoord { font-size: 11pt; margin: 4px 0 4px 8px; padding: 4px 10px; background: #e8f5e9; border-left: 3px solid #2e7d32; border-radius: 0 4px 4px 0; display: inline-block; font-weight: bold; color: #1b5e20; }
    .uitleg { font-size: 10pt; color: #444; margin: 5px 0 0 8px; line-height: 1.4; }
    @media print {
      body { padding: 15px 20px; }
      .pagina-wissel { page-break-before: always; }
    }
  </style>
</head>
<body>
  <div class="kop">
    <h1>${subj?.icon || ""} ${q.title || subj?.label || "Toets"}</h1>
    <div style="font-size:10pt;color:#555;">${level?.label || ""} · ${datum}</div>
    <div class="invul">
      <span>Naam: <span class="invul-veld">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
      <span>Klas: <span class="invul-veld">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
    </div>
  </div>
  ${studentVragen}

  <div class="pagina-wissel"></div>

  <div class="kop">
    <h1>${subj?.icon || ""} Antwoordenblad – ${q.title || subj?.label || "Toets"}</h1>
    <div class="label-leerkracht">🔒 Alleen voor de leerkracht</div>
  </div>
  ${antwoordVragen}
</body>
</html>`;

    const win = window.open("", "_blank");
    win.document.write(html);
    win.document.close();
    setTimeout(() => win.print(), 400);
  };

  useEffect(() => {
    if (quizzes.length === 0) return;
    const ids = quizzes.map((q) => q.id);
    supabase.from("leaderboard").select("quiz_id, player_name, score, total, percentage, completed_at")
      .in("quiz_id", ids)
      .then(({ data }) => {
        if (!data) return;
        const grouped = {};
        data.forEach((r) => {
          if (!grouped[r.quiz_id]) grouped[r.quiz_id] = [];
          grouped[r.quiz_id].push(r);
        });
        setCompletions(grouped);
      });
  }, [quizzes]);
  return (
    <div style={styles.page}>
      <Header title={`Hoi ${userName}! 👋`} subtitle="Leerkracht Dashboard" onBack={onBack} onHome={onHome} />

      <div style={styles.content}>
        <div style={styles.actionRow}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00e676)" }} onClick={onCreateQuiz}>
            <span style={{ fontSize: 28 }}>📝</span>
            <span style={{ fontWeight: 700 }}>Nieuwe Toets</span>
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
                    {/* Completions teller */}
                    {(() => {
                      const done = completions[q.id] || [];
                      return (
                        <div>
                          <button onClick={() => setExpandedQuiz(expandedQuiz === q.id ? null : q.id)}
                            style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0 8px", display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 13, color: done.length > 0 ? "#00e676" : "#8899aa", fontWeight: 700 }}>
                              👥 {done.length} leerling{done.length !== 1 ? "en" : ""} gemaakt
                            </span>
                            {done.length > 0 && <span style={{ fontSize: 11, color: "#8899aa" }}>{expandedQuiz === q.id ? "▲" : "▼"}</span>}
                          </button>
                          {expandedQuiz === q.id && done.length > 0 && (
                            <div style={{ marginBottom: 10, background: "#0a1f30", borderRadius: 10, padding: "8px 12px", border: "1px solid rgba(0,212,255,0.15)" }}>
                              {done.map((r, i) => (
                                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0", borderBottom: i < done.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                                  <span style={{ fontSize: 13, color: "#e0e6f0" }}>👤 {r.player_name}</span>
                                  <span style={{ fontSize: 13, fontWeight: 700, color: r.percentage >= 80 ? "#00e676" : r.percentage >= 50 ? "#ffa726" : "#ff5252" }}>
                                    {r.score}/{r.total} ({r.percentage}%)
                                  </span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })()}
                    <div style={{ ...styles.quizCardActions, flexWrap: "wrap" }}>
                      <button style={styles.smallButton} onClick={() => onStartQuiz(q)}>▶️ Start</button>
                      <button style={styles.smallButtonAlt} onClick={() => navigator.clipboard?.writeText(q.code)}>📋 Code</button>
                      <button style={{ ...styles.smallButton, background: "#5c6bc0", boxShadow: "0 2px 8px rgba(92,107,192,0.3)" }} onClick={() => printToets(q)}>🖨️ Print</button>
                      <button style={{
                        ...styles.smallButton,
                        background: "#25D366",
                        boxShadow: "0 2px 8px rgba(37,211,102,0.3)",
                      }} onClick={() => {
                        const text = `Studiebol Toets!\n\n📚 ${q.topic || subj?.label || "Vrij onderwerp"}\n🎯 Code: ${q.code}\n⏰ ${q.deadline ? `Deadline: ${formatDate(q.deadline)}` : "Geen deadline"}\n\n👉 Direct meedoen: https://www.studiebol.online?code=${q.code}`;
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
                            const subject = encodeURIComponent(`Studiebol toets: ${q.title || subj?.label || "Toets"}`);
                            const body = encodeURIComponent(`Hallo,\n\nDoe mee met de Studiebol toets!\n\n📚 ${q.topic || subj?.label || "Toets"}\n🎯 Code: ${q.code}\n\n👉 Direct meedoen: https://www.studiebol.online?code=${q.code}\n\nGroetjes`);
                            window.open(`mailto:${emails}?subject=${subject}&body=${body}`, "_blank");
                          }}>📧 Mail klas</button>
                        );
                      })()}
                      <button style={{ ...styles.smallButtonAlt }} onClick={() => onDuplicateQuiz(q)}>📋 Kopieer</button>
                      {(completions[q.id]?.length > 0) && (
                        <button style={{ ...styles.smallButtonAlt }} onClick={() => exportCSV(q)}>📥 Export</button>
                      )}
                      {q.deadline && daysUntil(q.deadline) >= 0 && daysUntil(q.deadline) <= 3 && (() => {
                        const klas = classes.find(c => c.id === q.classId);
                        const msg = `⏰ Herinnering!\n\nDe deadline voor de Studiebol toets nadert!\n\n📚 ${q.title || subj?.label || "Toets"}\n🎯 Code: ${q.code}\n📅 Deadline: ${formatDate(q.deadline)}\n\n👉 Doe mee via: https://www.studiebol.online?code=${q.code}`;
                        const phones = klas?.students?.map(s => s.phone).filter(Boolean) || [];
                        return (
                          <button style={{ ...styles.smallButton, background: "#f57c00", boxShadow: "0 2px 8px rgba(245,124,0,0.3)" }}
                            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank")}>
                            ⏰ Herinnering
                          </button>
                        );
                      })()}
                      <button style={{
                        ...styles.smallButton,
                        background: "#c62828",
                        boxShadow: "0 2px 8px rgba(198,40,40,0.3)",
                      }} onClick={() => {
                        if (window.confirm(`Toets "${q.title || subj?.label}" verwijderen?`)) onDeleteQuiz(q.id);
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

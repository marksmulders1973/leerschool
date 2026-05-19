import { useState, useEffect } from "react";
import styles from "../../styles.js";
import { SUBJECTS, LEVELS, SAMPLE_QUESTIONS } from "../../constants.js";
import { BRAND } from "../../brand.js";
import { formatDate, daysUntil, shuffle } from "../../utils.js";
import Header from "../../components/Header.jsx";
import supabase from "../../supabase.js";

export default function TeacherHome({ userName, quizzes, classes, onCreateQuiz, onViewProgress, onManageClasses, onBack, onHome, onStartQuiz, onDeleteQuiz, onDuplicateQuiz, quizLimitReached, quizCount, quizLimit, isTeacherPro, onUpgrade, schoolLogoUrl, onLogoUpdate, trialDaysLeft, onRondleiding }) {
  const [completions, setCompletions] = useState({});
  const [expandedQuiz, setExpandedQuiz] = useState(null);
  // Welkom-paneel — toont nieuwe leerkrachten wat de app voor hun klas kan.
  // Default open zonder toetsen (eerste bezoek), daarna in te klappen.
  const [welcomeCollapsed, setWelcomeCollapsed] = useState(() => {
    try {
      const stored = localStorage.getItem("lk-teacher-welcome-collapsed");
      if (stored === "1") return true;
    } catch { /* ignore */ }
    // Default ingeklapt zodra leerkracht ≥1 toets heeft gemaakt
    return quizzes.length > 0;
  });
  const toggleWelcome = () => {
    setWelcomeCollapsed((prev) => {
      const next = !prev;
      try { localStorage.setItem("lk-teacher-welcome-collapsed", next ? "1" : "0"); } catch { /* ignore */ }
      return next;
    });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 500 * 1024) { alert("Logo mag maximaal 500 KB zijn."); return; }
    const reader = new FileReader();
    reader.onload = (ev) => onLogoUpdate?.(ev.target.result);
    reader.readAsDataURL(file);
  };

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
    a.download = `${BRAND.shortName}_${q.title || subj?.label || "quiz"}_${q.code}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const printToets = (q) => {
    const subj = SUBJECTS.find((s) => s.id === q.subject);
    const baseLevelId = q.level?.split("-")[0] || q.level;
    const schoolTypePart = q.level?.includes("-") ? q.level.split("-").slice(1).join("-") : "";
    const schoolTypeNames = { mavo: "VMBO-TL", havo: "HAVO", vwo: "VWO", gym: "Gymnasium" };
    const level = LEVELS.find((l) => l.id === baseLevelId);
    const levelDisplayLabel = level?.label
      ? `${level.label}${schoolTypePart ? ` · ${schoolTypeNames[schoolTypePart] || schoolTypePart.toUpperCase()}` : ""}`
      : q.level || "";
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
    .kop { border-bottom: 2.5px solid #000; padding-bottom: 12px; margin-bottom: 22px; display: flex; align-items: flex-start; justify-content: space-between; gap: 20px; }
    .kop-tekst { flex: 1; min-width: 0; }
    .kop-logo { height: 90px; max-width: 220px; object-fit: contain; flex-shrink: 0; }
    .kop h1 { font-size: 17pt; margin-bottom: 6px; }
    .kop .invul { font-size: 11pt; margin-top: 8px; display: flex; gap: 30px; flex-wrap: wrap; }
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
    <div class="kop-tekst">
      <h1>${subj?.icon || ""} ${q.title || subj?.label || "Toets"}</h1>
      <div style="font-size:10pt;color:#555;">${levelDisplayLabel}${levelDisplayLabel ? " · " : ""}${datum}</div>
      <div class="invul">
        <span>Naam: <span class="invul-veld">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
        <span>Klas: <span class="invul-veld">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span>
      </div>
    </div>
    ${schoolLogoUrl ? `<img class="kop-logo" src="${schoolLogoUrl}" alt="Schoollogo" />` : ""}
  </div>
  ${studentVragen}

  <div class="pagina-wissel"></div>

  <div class="kop">
    <div class="kop-tekst">
      <h1>${subj?.icon || ""} Antwoordenblad – ${q.title || subj?.label || "Toets"}</h1>
      <div class="label-leerkracht">🔒 Alleen voor de leerkracht</div>
    </div>
    ${schoolLogoUrl ? `<img class="kop-logo" src="${schoolLogoUrl}" alt="Schoollogo" />` : ""}
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
        {/* Welkom-paneel — wat kan Leerkwartier voor jouw klas */}
        <div style={{
          marginBottom: 16,
          padding: welcomeCollapsed ? "10px 14px" : "16px 18px",
          borderRadius: 14,
          background: welcomeCollapsed ? "rgba(255,255,255,0.04)" : "rgba(0,212,255,0.07)",
          border: `1px solid ${welcomeCollapsed ? "rgba(255,255,255,0.08)" : "rgba(0,212,255,0.25)"}`,
        }}>
          <button
            type="button"
            onClick={toggleWelcome}
            aria-expanded={!welcomeCollapsed}
            style={{
              background: "none",
              border: "none",
              color: welcomeCollapsed ? "rgba(255,255,255,0.55)" : "#00d4ff",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: 8,
              width: "100%",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <span>🏫 {welcomeCollapsed ? "Wat kan Leerkwartier voor mijn klas?" : "Welkom bij Leerkwartier"}</span>
            <span style={{ fontSize: 12, opacity: 0.7 }}>{welcomeCollapsed ? "▼ Open" : "▲ Klap in"}</span>
          </button>
          {!welcomeCollapsed && (
            <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "#00d4ff", fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>VOOR JOU ALS LEERKRACHT</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                  <li>📝 Toetsen maken + delen via code</li>
                  <li>📊 Klas-voortgang in één blik</li>
                  <li>👥 Klassen + leerlinglijst beheren</li>
                  <li>🖨️ Toetsen printen (met antwoordblad)</li>
                  <li>💬 Toets delen via WhatsApp / mail</li>
                </ul>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "#00e676", fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>VOOR JE LEERLINGEN</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                  <li>📚 249 onderwerpen zelf doorlopen</li>
                  <li>🎯 Doorstroomtoets-voorbereiding (groep 6-8)</li>
                  <li>🎓 Echte VMBO/HAVO/VWO-examenvragen</li>
                  <li>💡 Uitleg op 3 niveaus bij elke fout</li>
                  <li>🏆 Hall of Fame + scorebord</li>
                  <li>⏱️ Max 15 min per sessie — daarna pauze of kort spel</li>
                </ul>
              </div>
              <div style={{ gridColumn: "1 / -1", padding: "10px 12px", background: "rgba(255,213,79,0.08)", border: "1px solid rgba(255,213,79,0.25)", borderRadius: 8, fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
                <strong style={{ color: "#ffd54f" }}>✨ Anders dan Squla / Junior Einstein:</strong> bij een fout krijgt je leerling geen "fout!" + door, maar uitleg op 3 niveaus om zelf op door te klikken — als een bijlesdocent in de broekzak. En het is gratis. Plus complete leerpaden waar elk onderwerp van A tot Z wordt uitgelegd.
              </div>
              {onRondleiding && (
                <div style={{ gridColumn: "1 / -1", marginTop: 4, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                  <button
                    type="button"
                    onClick={onRondleiding}
                    style={{
                      padding: "8px 14px",
                      background: "rgba(0,212,255,0.15)",
                      border: "1px solid rgba(0,212,255,0.4)",
                      color: "#00d4ff",
                      borderRadius: 8,
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Bekijk de rondleiding →
                  </button>
                  <button
                    type="button"
                    onClick={toggleWelcome}
                    style={{
                      padding: "8px 14px",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.55)",
                      borderRadius: 8,
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                  >
                    Ik snap het, klap in
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quiz limiet banner */}
        {!isTeacherPro && (
          <div style={{ marginBottom: 12, padding: "10px 14px", borderRadius: 12, background: quizLimitReached ? "rgba(255,107,53,0.15)" : "rgba(255,255,255,0.04)", border: `1px solid ${quizLimitReached ? "rgba(255,107,53,0.4)" : "rgba(255,255,255,0.1)"}`, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: quizLimitReached ? "#ff8c42" : "rgba(255,255,255,0.5)", fontWeight: 700 }}>
                {quizLimitReached ? "⚠️ Limiet bereikt" : `📝 ${quizCount}/${quizLimit} toetsen`}
              </span>
              {!quizLimitReached && <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>Gratis tot {quizLimit} toetsen</div>}
            </div>
            <button onClick={onUpgrade} style={{ padding: "6px 12px", borderRadius: 8, border: "none", background: quizLimitReached ? "#ff6b35" : "rgba(255,107,53,0.2)", color: quizLimitReached ? "var(--color-text-strong)" : "#ff8c42", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              {quizLimitReached ? "Upgrade →" : "Pro: onbeperkt"}
            </button>
          </div>
        )}
        {isTeacherPro && trialDaysLeft !== null && trialDaysLeft > 0 && (
          <div style={{ marginBottom: 12, padding: "10px 14px", borderRadius: 10, background: "rgba(0,200,83,0.08)", border: "1px solid rgba(0,200,83,0.25)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
            <div>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-brand-primary-100)", fontWeight: 700 }}>🎁 Gratis proefperiode actief</span>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 1 }}>
                Nog {trialDaysLeft} {trialDaysLeft === 1 ? "dag" : "dagen"} resterend
              </div>
            </div>
            <button onClick={onUpgrade} style={{ padding: "5px 10px", borderRadius: 8, border: "none", background: "rgba(0,200,83,0.2)", color: "var(--color-brand-primary-100)", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              Abonnement →
            </button>
          </div>
        )}
        {isTeacherPro && (trialDaysLeft === null || trialDaysLeft === 0) && (
          <div style={{ marginBottom: 12, padding: "8px 14px", borderRadius: 10, background: "rgba(255,107,53,0.08)", border: "1px solid rgba(255,107,53,0.2)", display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "#ff8c42", fontWeight: 700 }}>✨ Pro — onbeperkt toetsen</span>
          </div>
        )}

        {/* Schoollogo blok */}
        {isTeacherPro ? (
          <div style={{ marginBottom: 16, padding: "12px 14px", borderRadius: 14, background: "rgba(168,85,247,0.07)", border: "1px solid rgba(168,85,247,0.25)", display: "flex", alignItems: "center", gap: 12 }}>
            {schoolLogoUrl ? (
              <img src={schoolLogoUrl} alt="Schoollogo" style={{ height: 44, maxWidth: 100, objectFit: "contain", borderRadius: 6, background: "var(--color-text-strong)", padding: 4 }} />
            ) : (
              <div style={{ width: 48, height: 44, borderRadius: 8, background: "rgba(168,85,247,0.15)", border: "1.5px dashed rgba(168,85,247,0.4)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>🏫</div>
            )}
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#c084fc", marginBottom: 2 }}>
                {schoolLogoUrl ? "Schoollogo actief" : "Nog geen schoollogo"}
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                {schoolLogoUrl ? "Verschijnt op toetsen en in de app" : "Upload een logo — verschijnt op alle toetsen"}
              </div>
            </div>
            <label style={{ padding: "7px 12px", borderRadius: 10, background: "rgba(168,85,247,0.2)", border: "1px solid rgba(168,85,247,0.4)", color: "#c084fc", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              {schoolLogoUrl ? "Wijzig" : "Upload"}
              <input type="file" accept="image/*" onChange={handleLogoUpload} style={{ display: "none" }} />
            </label>
            {schoolLogoUrl && (
              <button onClick={() => onLogoUpdate?.("")} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.3)", fontSize: 18, cursor: "pointer", padding: 0, lineHeight: 1 }}>×</button>
            )}
          </div>
        ) : (
          <div style={{ marginBottom: 16, padding: "10px 14px", borderRadius: 12, background: "rgba(168,85,247,0.05)", border: "1px dashed rgba(168,85,247,0.2)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.35)" }}>🏫 Eigen schoollogo op toetsen — Pro</span>
            <button onClick={onUpgrade} style={{ padding: "5px 10px", borderRadius: 8, border: "none", background: "rgba(168,85,247,0.2)", color: "#c084fc", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>Upgrade →</button>
          </div>
        )}

        <div style={styles.actionRow}>
          <button style={{ ...styles.bigButton, background: quizLimitReached ? "rgba(255,255,255,0.06)" : "linear-gradient(135deg, var(--color-brand-primary), #00e676)", opacity: quizLimitReached ? 0.7 : 1 }} onClick={onCreateQuiz}>
            <span style={{ fontSize: 28 }}>📝</span>
            <span style={{ fontWeight: 700 }}>{quizLimitReached ? "🔒 Nieuwe Toets" : "Nieuwe Toets"}</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, var(--color-brand-primary), #00a844)" }} onClick={onViewProgress}>
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
          <img src="/qrcode.png" alt={`QR code ${BRAND.domain}`} style={{ width: 140, height: 140, borderRadius: 10, display: "block", margin: "0 auto 8px" }} />
          <div style={{ fontSize: 11, color: "#556677" }}>Laat leerlingen scannen om de app te openen</div>
          <div style={{ fontSize: 12, color: "#00e676", fontWeight: 700, marginTop: 4 }}>www.{BRAND.domain}</div>
        </div>

        {quizzes.length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>Jouw toetsen</h3>
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
                            <span style={{ fontSize: 13, color: done.length > 0 ? "#00e676" : "var(--color-text-muted)", fontWeight: 700 }}>
                              👥 {done.length} leerling{done.length !== 1 ? "en" : ""} gemaakt
                            </span>
                            {done.length > 0 && <span style={{ fontSize: 11, color: "var(--color-text-muted)" }}>{expandedQuiz === q.id ? "▲" : "▼"}</span>}
                          </button>
                          {expandedQuiz === q.id && done.length > 0 && (
                            <div style={{ marginBottom: 10, background: "#0a1f30", borderRadius: 10, padding: "8px 12px", border: "1px solid rgba(0,212,255,0.15)" }}>
                              {done.map((r, i) => (
                                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "4px 0", borderBottom: i < done.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                                  <span style={{ fontSize: 13, color: "var(--color-text)" }}>👤 {r.player_name}</span>
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
                        const vak = q.topic || subj?.label || "Vrij onderwerp";
                        const niveau = LEVELS.find(l => l.id === q.level)?.label || "";
                        const deadline = q.deadline ? `\n📅 Deadline: ${formatDate(q.deadline)}` : "";
                        const text = `🎓 *${BRAND.name}* — Toets klaarstaan!\n\n📚 ${vak}${niveau ? ` · ${niveau}` : ""}${deadline}\n\nKlik op de link en start direct:\n👉 https://www.${BRAND.domain}?code=${q.code}`;
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
                            const vak2 = q.topic || subj?.label || "Toets";
                            const niveau2 = LEVELS.find(l => l.id === q.level)?.label || "";
                            const subject = encodeURIComponent(`${BRAND.name} toets: ${vak2}`);
                            const body = encodeURIComponent(`Hallo,\n\nEr staat een toets voor je klaar op ${BRAND.name}!\n\n📚 ${vak2}${niveau2 ? ` · ${niveau2}` : ""}\n\nKlik op de link en start direct:\n👉 https://www.${BRAND.domain}?code=${q.code}\n\nGroetjes`);
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
                        const vak3 = q.topic || subj?.label || "Toets";
                        const msg = `⏰ *Herinnering* — ${BRAND.name}\n\n📚 ${vak3}\n📅 Deadline: ${formatDate(q.deadline)}\n\nHeb je al geoefend? Klik en start:\n👉 https://www.${BRAND.domain}?code=${q.code}`;
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
        {onRondleiding && (
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <button
              type="button"
              onClick={onRondleiding}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-text-muted, #99a3b4)",
                fontSize: 13,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Hoe werkt Leerkwartier?
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

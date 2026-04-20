import { useState } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS, SUBJECT_FOR_LEVEL, TEACHER_TOPIC_SUGGESTIONS, EIGEN_TOPIC_SUGGESTIONS } from "../constants.js";
import { daysUntil, fetchAIQuestions } from "../utils.js";
import Header from "./Header.jsx";

export function ClassManager({ classes, onSave, onBack, onHome }) {
  const [editingClassId, setEditingClassId] = useState(null);
  const [newClassName, setNewClassName] = useState("");
  const [showNewClass, setShowNewClass] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editPhone, setEditPhone] = useState("");
  const [newStudentClassId, setNewStudentClassId] = useState(null);
  const [newStudentName, setNewStudentName] = useState("");
  const [newStudentEmail, setNewStudentEmail] = useState("");
  const [newStudentPhone, setNewStudentPhone] = useState("");

  const addClass = () => {
    if (!newClassName.trim()) return;
    const newClass = { id: Date.now().toString(), name: newClassName.trim(), students: [] };
    onSave([...classes, newClass]);
    setNewClassName("");
    setShowNewClass(false);
  };

  const deleteClass = (classId) => {
    if (!window.confirm("Klas verwijderen?")) return;
    onSave(classes.filter(c => c.id !== classId));
  };

  const renameClass = (classId, name) => {
    onSave(classes.map(c => c.id === classId ? { ...c, name } : c));
    setEditingClassId(null);
  };

  const addStudent = (classId) => {
    if (!newStudentName.trim() && !newStudentEmail.trim()) return;
    const student = { id: Date.now().toString(), name: newStudentName.trim(), email: newStudentEmail.trim(), phone: newStudentPhone.trim() };
    onSave(classes.map(c => c.id === classId ? { ...c, students: [...c.students, student] } : c));
    setNewStudentName(""); setNewStudentEmail(""); setNewStudentPhone("");
    setNewStudentClassId(null);
  };

  const saveStudent = (classId, studentId) => {
    onSave(classes.map(c => c.id === classId ? {
      ...c,
      students: c.students.map(s => s.id === studentId ? { ...s, name: editName, email: editEmail, phone: editPhone } : s)
    } : c));
    setEditingStudent(null);
  };

  const deleteStudent = (classId, studentId) => {
    onSave(classes.map(c => c.id === classId ? { ...c, students: c.students.filter(s => s.id !== studentId) } : c));
  };

  return (
    <div style={styles.page}>
      <Header title="👥 Mijn Klassen" subtitle="Leerlingen beheren" onBack={onBack} onHome={onHome} />
      <div style={styles.content}>

        {classes.map(klas => (
          <div key={klas.id} style={{ background: "#1e2d45", borderRadius: 18, padding: 16, marginBottom: 16, boxShadow: "0 2px 12px rgba(0,0,0,0.3)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
              {editingClassId === klas.id ? (
                <>
                  <input
                    style={{ ...styles.textInput, flex: 1, margin: 0 }}
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    onKeyDown={e => e.key === "Enter" && renameClass(klas.id, editName)}
                    autoFocus
                  />
                  <button style={styles.smallButton} onClick={() => renameClass(klas.id, editName)}>✓</button>
                  <button style={styles.smallButtonAlt} onClick={() => setEditingClassId(null)}>✕</button>
                </>
              ) : (
                <>
                  <span style={{ fontWeight: 700, fontSize: 16, color: "#e0e6f0", flex: 1 }}>{klas.name}</span>
                  <span style={{ fontSize: 12, color: "#8899aa" }}>{klas.students.length} leerling{klas.students.length !== 1 ? "en" : ""}</span>
                  <button style={styles.smallButtonAlt} onClick={() => { setEditingClassId(klas.id); setEditName(klas.name); }}>✏️</button>
                  <button style={{ ...styles.smallButton, background: "#c62828" }} onClick={() => deleteClass(klas.id)}>🗑️</button>
                </>
              )}
            </div>

            {klas.students.map(student => (
              <div key={student.id} style={{ background: "#162033", borderRadius: 10, padding: "10px 12px", marginBottom: 8 }}>
                {editingStudent?.classId === klas.id && editingStudent?.studentId === student.id ? (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <input style={{ ...styles.textInput, margin: 0 }} placeholder="Naam" value={editName} onChange={e => setEditName(e.target.value)} />
                    <input style={{ ...styles.textInput, margin: 0 }} placeholder="E-mailadres" type="email" value={editEmail} onChange={e => setEditEmail(e.target.value)} />
                    <input style={{ ...styles.textInput, margin: 0 }} placeholder="WhatsApp nummer (bijv. 0612345678)" type="tel" value={editPhone} onChange={e => setEditPhone(e.target.value)} />
                    <div style={{ display: "flex", gap: 6 }}>
                      <button style={styles.smallButton} onClick={() => saveStudent(klas.id, student.id)}>✓ Opslaan</button>
                      <button style={styles.smallButtonAlt} onClick={() => setEditingStudent(null)}>✕ Annuleer</button>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 700, fontSize: 13, color: "#e0e6f0" }}>{student.name || "—"}</div>
                      <div style={{ fontSize: 11, color: "#8899aa" }}>{student.email || "Geen e-mail"}</div>
                      {student.phone && <div style={{ fontSize: 11, color: "#25D366" }}>💬 {student.phone}</div>}
                    </div>
                    {student.phone && (
                      <button style={{ ...styles.smallButton, background: "#25D366", padding: "6px 10px", boxShadow: "0 2px 8px rgba(37,211,102,0.3)" }}
                        onClick={() => window.open(`https://wa.me/${student.phone.replace(/\D/g, "").replace(/^0/, "31")}`, "_blank")}>
                        💬
                      </button>
                    )}
                    <button style={styles.smallButtonAlt} onClick={() => { setEditingStudent({ classId: klas.id, studentId: student.id }); setEditName(student.name); setEditEmail(student.email); setEditPhone(student.phone || ""); }}>✏️</button>
                    <button style={{ ...styles.smallButton, background: "#c62828", padding: "6px 10px" }} onClick={() => deleteStudent(klas.id, student.id)}>🗑️</button>
                  </div>
                )}
              </div>
            ))}

            {newStudentClassId === klas.id ? (
              <div style={{ background: "#162033", borderRadius: 10, padding: "10px 12px", marginTop: 4 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <input style={{ ...styles.textInput, margin: 0 }} placeholder="Naam leerling" value={newStudentName} onChange={e => setNewStudentName(e.target.value)} />
                  <input style={{ ...styles.textInput, margin: 0 }} placeholder="E-mailadres leerling" type="email" value={newStudentEmail} onChange={e => setNewStudentEmail(e.target.value)} />
                  <input style={{ ...styles.textInput, margin: 0 }} placeholder="WhatsApp nummer (bijv. 0612345678)" type="tel" value={newStudentPhone} onChange={e => setNewStudentPhone(e.target.value)} />
                  <div style={{ display: "flex", gap: 6 }}>
                    <button style={styles.smallButton} onClick={() => addStudent(klas.id)}>+ Toevoegen</button>
                    <button style={styles.smallButtonAlt} onClick={() => setNewStudentClassId(null)}>✕</button>
                  </div>
                </div>
              </div>
            ) : (
              <button style={{ ...styles.smallButtonAlt, width: "100%", marginTop: 4, padding: "8px", borderRadius: 10, textAlign: "center" }} onClick={() => setNewStudentClassId(klas.id)}>
                + Leerling toevoegen
              </button>
            )}
          </div>
        ))}

        {showNewClass ? (
          <div style={{ background: "#1e2d45", borderRadius: 18, padding: 16, marginBottom: 16 }}>
            <label style={styles.settingLabel}>Naam nieuwe klas</label>
            <input style={styles.textInput} placeholder="bijv. Groep 5A" value={newClassName} onChange={e => setNewClassName(e.target.value)} onKeyDown={e => e.key === "Enter" && addClass()} autoFocus />
            <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
              <button style={styles.smallButton} onClick={addClass}>✓ Aanmaken</button>
              <button style={styles.smallButtonAlt} onClick={() => { setShowNewClass(false); setNewClassName(""); }}>✕ Annuleer</button>
            </div>
          </div>
        ) : (
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #1565c0, #1e88e5)", width: "100%" }} onClick={() => setShowNewClass(true)}>
            <span style={{ fontSize: 24 }}>+</span>
            <span style={{ fontWeight: 700 }}>Nieuwe klas aanmaken</span>
          </button>
        )}
      </div>
    </div>
  );
}

export function QuizPreview({ quizConfig, onConfirm, onBack, onHome }) {
  const [questions, setQuestions] = useState(() =>
    quizConfig.preGeneratedQuestions.map((q, i) => ({ ...q, id: i }))
  );
  const [editingId, setEditingId] = useState(null);
  const [regenLoading, setRegenLoading] = useState(null);

  const updateQuestion = (id, field, value) => {
    setQuestions((prev) => prev.map((q) => q.id === id ? { ...q, [field]: value } : q));
  };

  const updateOption = (id, optIdx, value) => {
    setQuestions((prev) => prev.map((q) => {
      if (q.id !== id) return q;
      const newOpts = [...q.options];
      newOpts[optIdx] = value;
      return { ...q, options: newOpts };
    }));
  };

  const deleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const regenQuestion = async (id) => {
    setRegenLoading(id);
    const fresh = await fetchAIQuestions(quizConfig.subject, quizConfig.level, 1, null, null, null);
    setRegenLoading(null);
    if (fresh.length > 0) {
      setQuestions((prev) => prev.map((q) => q.id === id ? { ...fresh[0], id } : q));
    }
  };

  const subj = SUBJECTS.find((s) => s.id === quizConfig.subject);
  const levelLabel = LEVELS.find((l) => l.id === quizConfig.level)?.label || quizConfig.level;

  return (
    <div style={styles.page}>
      <Header title="Vragen bekijken" subtitle={`${questions.length} vragen — ${subj?.icon} ${subj?.label} · ${levelLabel}`} onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        <div style={{ marginBottom: 12, padding: "10px 14px", background: "#0a1f35", borderRadius: 10, border: "1px solid #1e3a5a", fontSize: 13, color: "#8eaadb" }}>
          ✏️ Tik op een vraag om hem te bewerken. Verwijder of regenereer vragen waar nodig.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {questions.map((q, idx) => {
            const isEditing = editingId === q.id;
            const isRegen = regenLoading === q.id;
            return (
              <div key={q.id} style={{
                background: isEditing ? "#0d2a45" : "#152032",
                border: `1px solid ${isEditing ? "#00c853" : "#1e3a5a"}`,
                borderRadius: 14,
                padding: "14px 16px",
                position: "relative",
              }}>
                {/* Header rij */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontFamily: "Fredoka", fontWeight: 700, fontSize: 14, color: "#00c853", minWidth: 32 }}>
                    #{idx + 1}
                  </span>
                  <div style={{ flex: 1 }} />
                  <button
                    onClick={() => regenQuestion(q.id)}
                    disabled={isRegen}
                    title="Nieuwe vraag genereren"
                    style={{ background: "none", border: "1px solid #2a5080", borderRadius: 8, padding: "4px 10px", cursor: "pointer", color: "#8eaadb", fontSize: 12, fontFamily: "'Nunito', sans-serif" }}
                  >
                    {isRegen ? "⏳" : "🔄 Nieuwe vraag"}
                  </button>
                  <button
                    onClick={() => setEditingId(isEditing ? null : q.id)}
                    style={{ background: isEditing ? "#00c85320" : "none", border: `1px solid ${isEditing ? "#00c853" : "#2a5080"}`, borderRadius: 8, padding: "4px 10px", cursor: "pointer", color: isEditing ? "#00c853" : "#8eaadb", fontSize: 12, fontFamily: "'Nunito', sans-serif" }}
                  >
                    {isEditing ? "✅ Klaar" : "✏️ Bewerken"}
                  </button>
                  <button
                    onClick={() => deleteQuestion(q.id)}
                    title="Vraag verwijderen"
                    style={{ background: "none", border: "1px solid #5a1a1a", borderRadius: 8, padding: "4px 10px", cursor: "pointer", color: "#ff5252", fontSize: 12, fontFamily: "'Nunito', sans-serif" }}
                  >
                    🗑️
                  </button>
                </div>

                {/* Vraagtekst */}
                {isEditing ? (
                  <textarea
                    value={q.q}
                    onChange={(e) => updateQuestion(q.id, "q", e.target.value)}
                    style={{ ...styles.textInput, width: "100%", minHeight: 70, resize: "vertical", fontSize: 14, marginBottom: 10, boxSizing: "border-box" }}
                  />
                ) : (
                  <p style={{ color: "#e0e6f0", fontSize: 15, fontWeight: 700, margin: "0 0 10px", lineHeight: 1.4 }}>{q.q}</p>
                )}

                {/* Antwoordopties */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {(q.options || []).map((opt, oi) => {
                    const isCorrect = q.answer === oi;
                    return (
                      <div key={oi} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button
                          onClick={() => isEditing && updateQuestion(q.id, "answer", oi)}
                          style={{
                            width: 24, height: 24, borderRadius: "50%", border: `2px solid ${isCorrect ? "#00c853" : "#2a5080"}`,
                            background: isCorrect ? "#00c853" : "transparent", cursor: isEditing ? "pointer" : "default",
                            flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                          }}
                          title={isEditing ? "Markeer als correct antwoord" : ""}
                        >
                          {isCorrect && <span style={{ color: "#fff", fontSize: 11, fontWeight: 900 }}>✓</span>}
                        </button>
                        {isEditing ? (
                          <input
                            value={opt}
                            onChange={(e) => updateOption(q.id, oi, e.target.value)}
                            style={{ ...styles.textInput, flex: 1, fontSize: 13, padding: "6px 10px" }}
                          />
                        ) : (
                          <span style={{ color: isCorrect ? "#00e676" : "#8eaadb", fontSize: 13, fontWeight: isCorrect ? 700 : 400 }}>
                            {["A","B","C","D"][oi]}. {opt}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {isEditing && (
                  <p style={{ fontSize: 11, color: "#556677", marginTop: 8 }}>
                    Klik op het bolletje naast een antwoord om het als correct te markeren.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {questions.length === 0 && (
          <div style={{ textAlign: "center", padding: 32, color: "#556677" }}>
            Geen vragen meer. Ga terug en maak een nieuwe toets.
          </div>
        )}

        <div style={{ ...styles.navRow, marginTop: 20 }}>
          <button style={styles.backBtn} onClick={onBack}>← Terug</button>
          <div style={{ flex: 1 }} />
          <button
            style={{ ...styles.nextBtn, opacity: questions.length > 0 ? 1 : 0.4 }}
            disabled={questions.length === 0}
            onClick={() => onConfirm(questions.map(({ id, ...rest }) => rest))}
          >
            🚀 Toets starten ({questions.length} vragen)
          </button>
        </div>
      </div>
    </div>
  );
}

export function CreateQuiz({ onSave, onBack, onHome, classes = [] }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [eigenMode, setEigenMode] = useState(false);
  const [level, setLevel] = useState("");
  const [groepSelect, setGroepSelect] = useState("");
  const [klasSelect, setKlasSelect] = useState("");
  const [schoolTypeSelect, setSchoolTypeSelect] = useState("");
  const [selectedClassId, setSelectedClassId] = useState("");
  const [deadline, setDeadline] = useState("");
  const [questionCount, setQuestionCount] = useState(8);
  const [timePerQuestion, setTimePerQuestion] = useState(0);
  const [resultMethod, setResultMethod] = useState("whatsapp");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [step, setStep] = useState(1);

  const schoolTypeLabel = { mavo: "VMBO-TL", havo: "HAVO", vwo: "VWO", gym: "Gymnasium" }[schoolTypeSelect] || "";
  const levelLabel = groepSelect
    ? `Groep ${groepSelect.replace("g","")}`
    : klasSelect
    ? `Klas ${klasSelect.replace("k","")}${schoolTypeLabel ? ` · ${schoolTypeLabel}` : ""}`
    : "";
  const isVO = level.startsWith("klas");
  const suggestions = subject ? (TEACHER_TOPIC_SUGGESTIONS[subject]?.[isVO ? "vo" : "basisschool"] || []) : [];
  const totalSteps = eigenMode ? 3 : 4;
  // eigenMode: stap 1 → 2 → 4 (stap 3 overgeslagen); visueel genummerd als 1/2/3
  const displayStep = eigenMode && step === 4 ? 3 : step;

  const canNext = () => {
    if (step === 1) return eigenMode ? topic.trim() !== "" : subject !== "";
    if (step === 2) return level !== "";
    if (step === 3) return true; // onderwerp is optioneel
    if (step === 4) return resultMethod === "whatsapp" || (resultMethod === "email" && teacherEmail.includes("@"));
    return true;
  };

  const goNext = () => {
    if (!canNext()) return;
    // eigenMode: na stap 2 direct naar stap 4 (instellingen), sla stap 3 over
    if (step === 2 && eigenMode) { setStep(4); return; }
    setStep(step + 1);
  };

  const goBack = () => {
    // eigenMode: vanuit stap 4 terug naar stap 2
    if (step === 4 && eigenMode) { setStep(2); return; }
    setStep(step - 1);
  };

  const handleSave = () => {
    const subjectId = eigenMode ? "vrij" : subject;
    const defaultTitle = eigenMode
      ? (topic ? `${topic} Toets` : "Vrij onderwerp Toets")
      : (SUBJECTS.find((s) => s.id === subject)?.label + " Toets");
    onSave({ title: title || defaultTitle, subject: subjectId, level, topic: topic || null, deadline: deadline || null, questionCount, timePerQuestion, resultMethod, teacherEmail: resultMethod === "email" ? teacherEmail : null, classId: selectedClassId || null });
  };

  return (
    <div style={styles.page}>
      <Header title="Nieuwe Toets" subtitle={`Stap ${displayStep} van ${totalSteps}`} onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${(displayStep / totalSteps) * 100}%` }} />
        </div>

        {(subject || eigenMode || levelLabel) && (
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            {eigenMode && !subject && (
              <span style={{ fontSize: 12, background: "#2a1e3a", color: "#c07fff", padding: "4px 10px", borderRadius: 8, border: "1px solid #7c3aed40" }}>
                🎯 Vrij onderwerp
              </span>
            )}
            {subject && !eigenMode && (
              <span style={{ fontSize: 12, background: "#1e2d45", color: "#8eaadb", padding: "4px 10px", borderRadius: 8, border: "1px solid #2a3f5f" }}>
                📚 {SUBJECTS.find(s => s.id === subject)?.label}
              </span>
            )}
            {levelLabel && (
              <span style={{ fontSize: 12, background: "#1e3a2a", color: "#00e676", padding: "4px 10px", borderRadius: 8, border: "1px solid #00c85340" }}>
                🎒 {levelLabel}
              </span>
            )}
            {topic && (
              <span style={{ fontSize: 12, background: "#2a1e3a", color: "#c07fff", padding: "4px 10px", borderRadius: 8, border: "1px solid #7c3aed40" }}>
                ✨ {topic}
              </span>
            )}
          </div>
        )}

        {step === 1 && (
          <div style={styles.stepContent}>
            {/* ── Eigen onderwerp kaart ── */}
            <button
              onClick={() => { const next = !eigenMode; setEigenMode(next); if (next) { setSubject(""); } else { setTopic(""); } }}
              style={{
                width: "100%", marginBottom: 12, padding: "14px 18px",
                background: eigenMode ? "linear-gradient(135deg, #1e1a3a, #2a1e4a)" : "linear-gradient(135deg, #1a2a3a, #1e3050)",
                border: `2px solid ${eigenMode ? "#7c3aed" : "#3a5f8a"}`,
                borderRadius: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, textAlign: "left",
                boxShadow: eigenMode ? "0 0 0 3px #7c3aed30" : "0 2px 12px rgba(0,0,0,0.2)",
              }}
            >
              <span style={{ fontSize: 26 }}>🎯</span>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700 }}>
                    Zelf een onderwerp kiezen
                  </span>
                  <span style={{ background: "#7c3aed", color: "#fff", fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 20 }}>AI</span>
                </div>
                <div style={{ color: "#8899bb", fontSize: 12, marginTop: 3 }}>
                  Elk onderwerp — ook buiten de standaard vakken
                </div>
              </div>
              <span style={{ fontSize: 18 }}>{eigenMode ? "✅" : "→"}</span>
            </button>

            {eigenMode && (
              <div style={{ marginBottom: 14, padding: 16, background: "#1a1530", borderRadius: 14, border: "2px solid #7c3aed" }}>
                <label style={{ ...styles.settingLabel, marginBottom: 8 }}>Waar gaan de vragen over?</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginBottom: 12 }}>
                  {EIGEN_TOPIC_SUGGESTIONS.map(s => (
                    <button key={s} onClick={() => setTopic(topic === s ? "" : s)}
                      style={{
                        padding: "6px 13px", borderRadius: 20, cursor: "pointer",
                        background: topic === s ? "#7c3aed" : "#1e1a30",
                        border: `1px solid ${topic === s ? "#7c3aed" : "#3a2a5f"}`,
                        color: topic === s ? "#fff" : "#a07fcc", fontSize: 12,
                        fontFamily: "'Nunito', sans-serif", fontWeight: topic === s ? 700 : 400,
                      }}>
                      {s}
                    </button>
                  ))}
                </div>
                <input
                  style={styles.textInput}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Of typ zelf een onderwerp..."
                  maxLength={80}
                />
                {topic && <div style={{ fontSize: 12, color: "#c07fff", fontWeight: 700, marginTop: 8 }}>✨ AI maakt vragen over: <span style={{ color: "#fff" }}>{topic}</span></div>}
              </div>
            )}

            {/* ── Scheidingslijn ── */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "10px 0 12px" }}>
              <div style={{ flex: 1, height: 1, background: "#2a3f5f" }} />
              <span style={{ color: "#556677", fontSize: 12, whiteSpace: "nowrap" }}>of kies een standaard vak</span>
              <div style={{ flex: 1, height: 1, background: "#2a3f5f" }} />
            </div>

            <div style={styles.subjectGrid}>
              {(level ? (SUBJECT_FOR_LEVEL[level] || SUBJECT_FOR_LEVEL[level.split("-")[0]] || []).map(id => SUBJECTS.find(s => s.id === id)).filter(Boolean) : SUBJECTS).map((s) => (
                <button
                  key={s.id}
                  style={{
                    ...styles.subjectCard,
                    borderColor: subject === s.id ? s.color : "transparent",
                    background: subject === s.id ? `${s.color}15` : eigenMode ? "#111820" : "#fff",
                    boxShadow: subject === s.id ? `0 0 0 3px ${s.color}40` : "0 2px 8px rgba(0,0,0,0.06)",
                    opacity: eigenMode ? 0.45 : 1,
                  }}
                  onClick={() => { setSubject(s.id); setEigenMode(false); setTopic(""); }}
                >
                  <span style={{ fontSize: 32 }}>{s.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#e0e6f0" }}>{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Kies het niveau</h3>
            <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <label style={{ ...styles.settingLabel, marginBottom: 6 }}>🎒 Basisschool</label>
                <select
                  style={{ ...styles.textInput, fontSize: 14, cursor: "pointer" }}
                  value={groepSelect}
                  onChange={(e) => {
                    const v = e.target.value;
                    setGroepSelect(v);
                    setKlasSelect("");
                    const bucket = {"g1":"groep12","g2":"groep12","g3":"groep3","g4":"groep3","g5":"groep5","g6":"groep5","g7":"groep7","g8":"groep7"}[v];
                    if (bucket) { setLevel(bucket); if (subject && !(SUBJECT_FOR_LEVEL[bucket] || []).includes(subject)) setSubject(""); }
                  }}
                >
                  <option value="">-- Groep --</option>
                  <option value="g1">Groep 1</option>
                  <option value="g2">Groep 2</option>
                  <option value="g3">Groep 3</option>
                  <option value="g4">Groep 4</option>
                  <option value="g5">Groep 5</option>
                  <option value="g6">Groep 6</option>
                  <option value="g7">Groep 7</option>
                  <option value="g8">Groep 8</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ ...styles.settingLabel, marginBottom: 6 }}>🎓 Voortgezet onderwijs</label>
                <select
                  style={{ ...styles.textInput, fontSize: 14, cursor: "pointer" }}
                  value={klasSelect}
                  onChange={(e) => {
                    const v = e.target.value;
                    setKlasSelect(v);
                    setGroepSelect("");
                    setSchoolTypeSelect("");
                    const bucket = {"k1":"klas1","k2":"klas1","k3":"klas3","k4":"klas3","k5":"klas5","k6":"klas6"}[v];
                    if (bucket) setLevel(bucket);
                  }}
                >
                  <option value="">-- Klas --</option>
                  <option value="k1">Klas 1</option>
                  <option value="k2">Klas 2</option>
                  <option value="k3">Klas 3</option>
                  <option value="k4">Klas 4</option>
                  <option value="k5">Klas 5</option>
                  <option value="k6">Klas 6</option>
                </select>
              </div>
            </div>
            {klasSelect && (
              <div style={{ marginTop: 10 }}>
                <label style={{ ...styles.settingLabel, marginBottom: 6 }}>🏫 Schooltype (optioneel)</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    { id: "mavo", label: "VMBO-TL",   color: "#f59e0b" },
                    { id: "havo", label: "HAVO",      color: "#3b82f6" },
                    { id: "vwo",  label: "VWO",       color: "#8b5cf6" },
                    { id: "gym",  label: "Gymnasium", color: "#ec4899" },
                  ].map(({ id, label, color }) => {
                    const sel = schoolTypeSelect === id;
                    return (
                      <button key={id} onClick={() => { setSchoolTypeSelect(sel ? "" : id); const bucket = {"k1":"klas1","k2":"klas1","k3":"klas3","k4":"klas3","k5":"klas5","k6":"klas6"}[klasSelect]; if (bucket) setLevel(`${bucket}${sel ? "" : `-${id}`}`); }} style={{
                        padding: "6px 14px", borderRadius: 10, cursor: "pointer",
                        border: sel ? `2px solid ${color}` : "1px solid rgba(255,255,255,0.15)",
                        background: sel ? `${color}22` : "rgba(255,255,255,0.05)",
                        color: sel ? color : "rgba(255,255,255,0.6)",
                        fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700,
                      }}>{label}</button>
                    );
                  })}
                </div>
              </div>
            )}
            {level && (
              <div style={{ fontSize: 13, color: "#00e676", fontWeight: 700, marginBottom: 12, marginTop: 12, padding: "8px 12px", background: "#0a2a18", borderRadius: 10, border: "1px solid #00c85340" }}>
                ✅ Niveau gekozen: <span style={{ color: "#fff" }}>{levelLabel}</span>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Kies een onderwerp</h3>
            <p style={{ fontSize: 13, color: "#8899aa", marginBottom: 14, marginTop: -4 }}>
              De AI maakt gerichte vragen over dit onderwerp. Je kunt ook overslaan voor algemene vragen.
            </p>
            {suggestions.length > 0 && (
              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, color: "#667788", marginBottom: 8 }}>Suggesties voor {SUBJECTS.find(s => s.id === subject)?.label}:</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {suggestions.map(s => (
                    <button
                      key={s}
                      onClick={() => setTopic(topic === s ? "" : s)}
                      style={{
                        padding: "7px 14px", borderRadius: 20, cursor: "pointer",
                        background: topic === s ? "#7c3aed" : "#1e2d45",
                        border: `1px solid ${topic === s ? "#7c3aed" : "#2a3f5f"}`,
                        color: topic === s ? "#fff" : "#8eaadb",
                        fontSize: 13, fontWeight: topic === s ? 700 : 400,
                        fontFamily: "'Nunito', sans-serif",
                        transition: "all 0.15s",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div style={{ marginBottom: 8 }}>
              <label style={{ ...styles.settingLabel, marginBottom: 6 }}>Of typ zelf een onderwerp:</label>
              <input
                style={styles.textInput}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Bijv. Breuken met gelijke noemers, WOII..."
                maxLength={80}
              />
            </div>
            {topic ? (
              <div style={{ fontSize: 12, color: "#c07fff", fontWeight: 700, padding: "8px 12px", background: "#1e0a2e", borderRadius: 10, border: "1px solid #7c3aed40" }}>
                ✨ AI maakt vragen over: <span style={{ color: "#fff" }}>{topic}</span>
              </div>
            ) : (
              <div style={{ fontSize: 12, color: "#667788", padding: "8px 12px", background: "#1a2030", borderRadius: 10, border: "1px solid #2a3f5f" }}>
                ⚡ Geen onderwerp? Dan krijg je algemene {SUBJECTS.find(s => s.id === subject)?.label}-vragen.
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Instellingen</h3>
            <div style={styles.settingsGroup}>
              <label style={styles.settingLabel}>Titel (optioneel)</label>
              <input style={styles.textInput} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bijv. Week 12 - Breuken" />

              <label style={styles.settingLabel}>Deadline</label>
              <input style={styles.textInput} type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

              <label style={styles.settingLabel}>Aantal vragen: {questionCount}</label>
              <input type="range" min={3} max={15} value={questionCount} onChange={(e) => setQuestionCount(+e.target.value)} style={styles.slider} />

              <label style={styles.settingLabel}>Tijd per vraag: {timePerQuestion === 0 ? "♾️ Geen limiet" : `${timePerQuestion}s`}</label>
              <input type="range" min={0} max={60} step={5} value={timePerQuestion} onChange={(e) => setTimePerQuestion(+e.target.value)} style={styles.slider} />
              {timePerQuestion === 0 && <div style={{ fontSize: 12, color: "#00e676", fontWeight: 600, marginTop: 4 }}>Sleep naar rechts voor een tijdslimiet</div>}

              <label style={styles.settingLabel}>📬 Hoe wil je resultaten ontvangen?</label>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => setResultMethod("whatsapp")} style={{
                  flex: 1, padding: "14px 10px", borderRadius: 12, border: resultMethod === "whatsapp" ? "2px solid #25D366" : "2px solid #2a3f5f",
                  background: resultMethod === "whatsapp" ? "#0a2a1a" : "#1e2d45", cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: "#e0e6f0", textAlign: "center",
                }}>
                  💬 WhatsApp
                </button>
                <button onClick={() => setResultMethod("email")} style={{
                  flex: 1, padding: "14px 10px", borderRadius: 12, border: resultMethod === "email" ? "2px solid #00c853" : "2px solid #2a3f5f",
                  background: resultMethod === "email" ? "#0a2a1a" : "#1e2d45", cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: "#e0e6f0", textAlign: "center",
                }}>
                  📧 E-mail
                </button>
              </div>
              {resultMethod === "email" && (
                <div style={{ marginTop: 10 }}>
                  <label style={styles.settingLabel}>Je e-mailadres</label>
                  <input style={styles.textInput} type="email" value={teacherEmail} onChange={(e) => setTeacherEmail(e.target.value)} placeholder="bijv. docent@school.nl" />
                </div>
              )}
              <p style={{ fontSize: 11, color: "#667788", marginTop: 8 }}>
                {resultMethod === "whatsapp" ? "Leerlingen sturen hun score naar je via WhatsApp na de toets." : "Leerlingen sturen hun score naar je e-mail na de toets."}
              </p>

              {classes.length > 0 && (
                <div style={{ marginTop: 14 }}>
                  <label style={styles.settingLabel}>👥 Koppel een klas (optioneel)</label>
                  <select
                    style={{ ...styles.textInput, marginTop: 6 }}
                    value={selectedClassId}
                    onChange={(e) => setSelectedClassId(e.target.value)}
                  >
                    <option value="">— Geen klas —</option>
                    {classes.map(c => (
                      <option key={c.id} value={c.id}>{c.name} ({c.students.length} leerlingen)</option>
                    ))}
                  </select>
                  {selectedClassId && (
                    <p style={{ fontSize: 11, color: "#00e676", marginTop: 6 }}>
                      ✅ Na aanmaken verschijnt "📧 Mail klas" knop in je dashboard.
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        <div style={styles.navRow}>
          {step > 1 && <button style={styles.backBtn} onClick={goBack}>← Vorige</button>}
          <div style={{ flex: 1 }} />
          {step < 4 ? (
            <button style={{ ...styles.nextBtn, opacity: canNext() ? 1 : 0.4 }} onClick={goNext} disabled={!canNext()}>
              {step === 3 && !topic ? "Overslaan →" : "Volgende →"}
            </button>
          ) : (
            <button style={styles.nextBtn} onClick={handleSave}>🚀 Toets aanmaken</button>
          )}
        </div>
      </div>
    </div>
  );
}

export function Lobby({ quiz, players, isHost, onStart, onBack, onHome }) {
  const subj = SUBJECTS.find((s) => s.id === quiz?.subject);

  return (
    <div style={styles.page}>
      <div style={styles.lobbyCard}>
        <div style={styles.lobbyLogo}>🎯</div>
        <h2 style={styles.lobbyTitle}>{isHost ? "Toets klaar!" : "Wachtkamer"}</h2>
        <p style={styles.lobbySubtitle}>{isHost ? `Code: ${quiz?.code}` : "Wachten tot de leerkracht start..."}</p>

        {/* QR code + WhatsApp alleen voor leerkracht */}
        {isHost && (<>
        <div style={{ margin: "12px 0", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: "#667788", marginBottom: 6 }}>App nog niet? Laat leerlingen scannen:</div>
          <img src="/qrcode.png" alt="QR code studiebol.online" style={{ width: 100, height: 100, borderRadius: 8, display: "block", margin: "0 auto" }} />
        </div>

        <button
          style={styles.whatsappButton}
          onClick={() => {
            const vakOfOnderwerp = quiz?.topic || subj?.label || "Studiebol";
            const niveau = LEVELS.find(l => l.id === quiz?.level)?.label || "";
            const text = `🎓 *Studiebol* — Toets gestart!\n\n📚 ${vakOfOnderwerp}${niveau ? ` · ${niveau}` : ""}\n\nKlik op de link en doe mee:\n👉 https://www.studiebol.online?code=${quiz?.code}`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
            onStart();
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          💬 Deel & Start
        </button>
        </>)}

        <div style={styles.lobbyInfo}>
          <span>{players.length} speler{players.length !== 1 ? "s" : ""}</span>
          <span style={styles.badge}>{subj?.icon} {subj?.label}</span>
          <span style={styles.badge}>{LEVELS.find((l) => l.id === quiz?.level)?.label}</span>
        </div>

        {quiz?.preGeneratedQuestions?.length > 0 && (
          <div style={{ margin: "12px 0", padding: 10, background: "#0a2a1a", borderRadius: 10, borderLeft: "3px solid #00c853", textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "#69f0ae" }}>✅ {quiz.preGeneratedQuestions.length} vragen klaar — iedereen krijgt dezelfde vragen!</div>
          </div>
        )}

        <div style={styles.playersSection}>
          <h4 style={{ fontFamily: "Fredoka", color: "#8899aa", fontSize: 13, letterSpacing: 1 }}>SPELERS</h4>
          <div style={styles.playersList}>
            {players.map((p, i) => (
              <span key={i} style={{ ...styles.playerChip, background: i === 0 ? "#00c853" : "#f0f0f0", color: i === 0 ? "#fff" : "#2d3436" }}>
                {i === 0 && "👑 "}{p} {i === players.length - 1 && players.length > 1 ? "" : ""}
              </span>
            ))}
          </div>
        </div>

        {isHost && (
          <button style={{ ...styles.startButton, background: "linear-gradient(135deg, #1a237e, #283593)", fontSize: 14, padding: "10px 20px" }} onClick={onStart}>🚀 Start zonder delen</button>
        )}
        {!isHost && (
          <div style={styles.waitingBox}>
            <span style={{ fontSize: 32 }}>⏳</span>
            <p>Wachten tot de leerkracht start...</p>
          </div>
        )}

        <p style={styles.lobbyTip}>💡 Tip: Deel je scherm naar de TV zodat iedereen de vragen kan zien</p>
        <div style={{ display: "flex", gap: 10 }}>
          <button style={styles.linkBtn} onClick={onBack}>← Terug</button>
          {onHome && <button style={styles.linkBtn} onClick={onHome}>🏠 Home</button>}
        </div>
      </div>
    </div>
  );
}

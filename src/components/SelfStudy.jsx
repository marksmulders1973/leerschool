import { useState, useEffect } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS, SUBJECT_FOR_LEVEL } from "../constants.js";
import { SoundEngine } from "../utils.js";
import Header from "./Header.jsx";

export default function SelfStudy({ onStart, onBack, onHome, userLevel, userRole, initialSubject }) {
  const groepBuckets = {"g1":"groep12","g2":"groep12","g3":"groep3","g4":"groep3","g5":"groep5","g6":"groep5","g7":"groep7","g8":"groep7"};
  const klasBuckets  = {"k1":"klas1","k2":"klas1","k3":"klas3","k4":"klas3","k5":"klas5","k6":"klas6"};
  const initGroep = userRole === "leerling" && userLevel ? `g${userLevel}` : "";
  const initKlas  = userRole === "student"  && userLevel ? `k${userLevel}` : "";
  // Cito, begrijpend-lezen zijn groep 7 vakken — gebruik groep7 als default level
  const citoSubjects = ["cito", "begrijpend-lezen"];
  const initLevel = groepBuckets[initGroep] || klasBuckets[initKlas]
    || (initialSubject && citoSubjects.includes(initialSubject) ? "groep7" : "")
    || (["tafels","spelling","woordenschat","redactiesommen"].includes(initialSubject) ? "groep5" : "")
    || (initialSubject === "eindexamen" ? "klas3" : "")
    || (initialSubject === "ai-vragen" ? "nvt" : "");

  const [subject, setSubject] = useState(initialSubject || "");
  const [level, setLevel] = useState(initLevel);
  const [groepSelect, setGroepSelect] = useState(initGroep);
  const [klasSelect, setKlasSelect] = useState(initKlas);
  const [topic, setTopic] = useState("");
  const [eigenMode, setEigenMode] = useState(initialSubject === "ai-vragen");
  const [topicPreview, setTopicPreview] = useState(null); // null | { found, title, description, image }
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewConfirmed, setPreviewConfirmed] = useState(false);
  const [extraContext, setExtraContext] = useState("");
  const [showHoeWerkt, setShowHoeWerkt] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(0);
  const [useAI, setUseAI] = useState(true);

  // Direct starten als subject + level al bekend zijn via feature card
  useEffect(() => {
    if (initialSubject && initLevel && !["cito", "vrij", "eindexamen"].includes(initialSubject)) {
      const topicMap = {
        tafels:         ["rekenen",        "tafels (vermenigvuldiging)"],
        spelling:       ["spelling",       "spelling, dt-regels en werkwoorden"],
        woordenschat:   ["woordenschat",   "woordenschat, synoniemen en betekenissen"],
        redactiesommen: ["redactiesommen", "redactiesommen"],
      };
      const [subject, topic] = topicMap[initialSubject] || [initialSubject, null];
      onStart({ subject, level: initLevel, questionCount: 10, timePerQuestion: 0, useAI: true, topic });
    }
  }, []);

  const fetchTopicPreview = async () => {
    if (!topic.trim()) return;
    setPreviewLoading(true);
    setTopicPreview(null);
    setPreviewConfirmed(false);
    setExtraContext("");
    try {
      const resp = await fetch("/api/preview-topic", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim() }),
      });
      const d = await resp.json();
      setTopicPreview(d.found ? { found: true, title: d.title, description: d.description } : { found: false });
    } catch {
      setTopicPreview({ found: false });
    }
    setPreviewLoading(false);
  };

  const topicForAI = previewConfirmed && topicPreview?.found && topicPreview.description
    ? `${topic.trim()}\n\nAchtergrond: ${topicPreview.description}`
    : topic.trim() || null;

  return (
    <div style={styles.page}>
      <Header title="Zelf oefenen 📖" subtitle="Kies je vak en niveau" onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {!initLevel && (
          <>
            <h3 style={styles.sectionTitle}>Welk niveau?</h3>
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
            {level && level !== "nvt" && (
              <div style={{ fontSize: 12, color: "#00e676", fontWeight: 600, marginBottom: 12 }}>
                ✅ Niveau gekozen!
              </div>
            )}
            {eigenMode && !groepSelect && !klasSelect && (
              <button
                onClick={() => setLevel(level === "nvt" ? "" : "nvt")}
                style={{
                  width: "100%", marginTop: 8, marginBottom: 12, padding: "10px 14px", borderRadius: 12, cursor: "pointer",
                  border: level === "nvt" ? "2px solid #8899aa" : "1px solid rgba(255,255,255,0.1)",
                  background: level === "nvt" ? "rgba(136,153,170,0.15)" : "rgba(255,255,255,0.04)",
                  color: level === "nvt" ? "#c0cfe0" : "#8899aa",
                  fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 14,
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                <span>🚫 Niet van toepassing — ik zit niet op school</span>
                <span>{level === "nvt" ? "✅" : "→"}</span>
              </button>
            )}
          </>
        )}

        {/* ── Eigen onderwerp — featured bovenaan ───────── */}
        <button
          onClick={() => { SoundEngine.play("click"); const next = !eigenMode; setEigenMode(next); setSubject(""); setTopic(""); }}
          style={{
            width: "100%", marginBottom: 8, padding: "14px 18px",
            background: eigenMode ? "linear-gradient(135deg, #1e3a2a, #1a3325)" : "linear-gradient(135deg, #1a2a3a, #1e3050)",
            border: `2px solid ${eigenMode ? "#00c853" : "#3a5f8a"}`,
            borderRadius: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, textAlign: "left",
            boxShadow: eigenMode ? "0 0 0 3px #00c85330" : "0 2px 12px rgba(0,0,0,0.2)",
          }}
        >
          <span style={{ fontSize: 26 }}>🎯</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700 }}>
                Zelf een onderwerp kiezen
              </span>
              <span style={{ background: "#00c853", color: "#000", fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 20 }}>AI</span>
            </div>
            <div style={{ color: "#7aaabb", fontSize: 12, marginTop: 3 }}>
              Elk onderwerp — ook voor MBO &amp; HBO
            </div>
          </div>
          <span style={{ fontSize: 18 }}>{eigenMode ? "✅" : "→"}</span>
        </button>

        {/* Hoe werkt dit? */}
        <button
          onClick={() => setShowHoeWerkt(v => !v)}
          style={{ background: "none", border: "none", color: "#5588aa", fontSize: 12, cursor: "pointer", padding: "2px 4px", marginBottom: 8, textAlign: "left" }}
        >
          {showHoeWerkt ? "▲" : "▼"} Hoe werkt dit?
        </button>
        {showHoeWerkt && (
          <div style={{ marginBottom: 12, padding: "12px 14px", background: "#111e2e", borderRadius: 12, border: "1px solid #2a3f5f", fontSize: 12, color: "#99bbcc", lineHeight: 1.7 }}>
            De AI maakt <strong style={{ color: "#fff" }}>vragen op maat</strong> over elk onderwerp dat je typt — van zout en fotosynthese tot bedrijfseconomie of JavaScript.<br />
            Handig voor basisschool en VO, maar ook voor <strong style={{ color: "#00c853" }}>MBO- en HBO-studenten</strong> die willen oefenen voor een tentamen of toets.
          </div>
        )}

        {eigenMode && (
          <div style={{ marginBottom: 16, padding: 16, background: "#1e2d45", borderRadius: 16, border: "2px solid #00c853" }}>
            <label style={{ ...styles.settingLabel, marginBottom: 4 }}>Waar wil je over leren?</label>
            <div style={{ fontSize: 11, color: "#7aaa88", marginBottom: 10, lineHeight: 1.5 }}>
              💡 <strong>Tip:</strong> omschrijf het onderwerp zo duidelijk mogelijk. Bijv. <em>"De Franse Revolutie"</em> of <em>"fotosynthese bij planten"</em> of <em>"mijn fabriek: wij verwerken dierlijk vet tot veevoer"</em>. Hoe meer context, hoe beter de vragen!
            </div>
            <div style={{ color: "#556677", fontSize: 11, marginBottom: 8 }}>Basisschool &amp; VO</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {["Seksuele voorlichting", "Puberteit", "Roken & drugs", "EHBO & eerste hulp", "Klimaatverandering", "Pesten", "Gezonde voeding", "Media & internet"].map(s => (
                <button key={s} onClick={() => { SoundEngine.play("click"); setTopic(s); }}
                  style={{ padding: "4px 12px", background: topic === s ? "#00c853" : "#162a1e", border: `1px solid ${topic === s ? "#00c853" : "#2a4a3a"}`, borderRadius: 20, color: topic === s ? "#000" : "#69f0ae", fontSize: 12, cursor: "pointer", fontWeight: topic === s ? 700 : 400 }}>
                  {s}
                </button>
              ))}
            </div>
            <div style={{ color: "#556677", fontSize: 11, marginBottom: 8 }}>MBO &amp; HBO</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
              {["Bedrijfseconomie", "Boekhouden", "Anatomie", "Recht & wetgeving", "Marketing", "ICT & netwerken", "Statistiek", "Verpleegkunde"].map(s => (
                <button key={s} onClick={() => { SoundEngine.play("click"); setTopic(s); }}
                  style={{ padding: "4px 12px", background: topic === s ? "#1a73e8" : "#121e30", border: `1px solid ${topic === s ? "#1a73e8" : "#2a3f5f"}`, borderRadius: 20, color: topic === s ? "#fff" : "#7aaabb", fontSize: 12, cursor: "pointer", fontWeight: topic === s ? 700 : 400 }}>
                  {s}
                </button>
              ))}
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
              <div style={{ flex: 1 }}>
                <textarea
                  style={{ ...styles.textInput, fontSize: 14, resize: "none", minHeight: 48, marginBottom: 0 }}
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey && topic.trim().length > 2 && !previewConfirmed && !topicPreview && !previewLoading) {
                      e.preventDefault();
                      SoundEngine.play("click");
                      fetchTopicPreview();
                    }
                  }}
                  placeholder="Bijv. 'de Franse Revolutie' of 'fotosynthese bij planten'..."
                  maxLength={200}
                  rows={2}
                />
                <div style={{ fontSize: 10, color: "#445566", textAlign: "right", marginTop: 2 }}>{topic.length}/200</div>
              </div>
              {!previewConfirmed && !topicPreview && (
                <button
                  onClick={() => { if (topic.trim().length > 2 && !previewLoading) { SoundEngine.play("click"); fetchTopicPreview(); } }}
                  disabled={topic.trim().length <= 2 || previewLoading}
                  style={{ padding: "12px 14px", borderRadius: 12, border: "none", background: topic.trim().length > 2 && !previewLoading ? "#00c853" : "#1a3a2a", color: topic.trim().length > 2 && !previewLoading ? "#000" : "#446644", fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 13, cursor: topic.trim().length > 2 && !previewLoading ? "pointer" : "default", whiteSpace: "nowrap", flexShrink: 0, marginBottom: 18 }}
                >
                  {previewLoading ? "⏳" : "🔍 Zoeken →"}
                </button>
              )}
            </div>

            {/* Preview laad-indicator */}
            {previewLoading && (
              <div style={{ marginTop: 4, fontSize: 13, color: "#7aaa88" }}>⏳ Even zoeken wat dit is...</div>
            )}

            {/* Preview kaart */}
            {topicPreview && !previewConfirmed && (
              <div style={{ marginTop: 10, borderRadius: 14, overflow: "hidden", border: `2px solid ${topicPreview.found ? "#00c853" : "#556677"}`, background: "#0f1e2e" }}>
                {topicPreview.found ? (
                  <>
                    {topicPreview.image && (
                      <img src={topicPreview.image} alt={topicPreview.title} style={{ width: "100%", maxHeight: 160, objectFit: "cover" }} />
                    )}
                    <div style={{ padding: 12 }}>
                      <div style={{ fontWeight: 800, color: "#00e676", fontSize: 14, marginBottom: 6 }}>📖 {topicPreview.title}</div>
                      <div style={{ fontSize: 12, color: "#aabbcc", lineHeight: 1.5, marginBottom: 10 }}>{topicPreview.description}</div>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button
                          onClick={() => {
                            const enrichedTopic = topicPreview.description
                              ? `${topic.trim()}\n\nAchtergrond: ${topicPreview.description}`
                              : topic.trim() || null;
                            setPreviewConfirmed(true);
                            SoundEngine.play("click");
                            onStart({ subject: "vrij", level, questionCount, timePerQuestion, useAI, topic: enrichedTopic });
                          }}
                          style={{ flex: 1, padding: "8px", borderRadius: 10, border: "none", background: "#00c853", color: "#000", fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 13, cursor: "pointer" }}
                        >
                          ✅ Ja! Start de toets →
                        </button>
                        <button onClick={() => { setTopicPreview(null); setTopic(""); }} style={{ flex: 1, padding: "8px", borderRadius: 10, border: "1px solid #556677", background: "transparent", color: "#aabbcc", fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
                          ❌ Nee, aanpassen
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <div style={{ padding: 14 }}>
                    <div style={{ color: "#aabbcc", fontSize: 13, marginBottom: 12 }}>
                      ❓ Kon geen informatie vinden over <strong>"{topic.trim()}"</strong>.<br />
                      Geef een korte omschrijving — dan maakt de AI goede vragen!
                    </div>
                    <textarea
                      style={{ ...styles.textInput, fontSize: 13, resize: "vertical", minHeight: 64, marginBottom: 10 }}
                      value={extraContext}
                      onChange={(e) => setExtraContext(e.target.value)}
                      placeholder={`bijv. "een fabriek in Vuren die dierlijke bijproducten verwerkt tot veevoer en industrieel vet"`}
                      maxLength={300}
                      rows={3}
                      autoFocus
                    />
                    <button
                      onClick={() => {
                        const enriched = extraContext.trim()
                          ? `${topic.trim()}\n\nOmschrijving: ${extraContext.trim()}`
                          : topic.trim() || null;
                        setPreviewConfirmed(true);
                        SoundEngine.play("click");
                        onStart({ subject: "vrij", level, questionCount, timePerQuestion, useAI, topic: enriched });
                      }}
                      disabled={!extraContext.trim()}
                      style={{ width: "100%", padding: "10px", borderRadius: 10, border: "none", background: extraContext.trim() ? "#1a73e8" : "#334455", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontWeight: 800, fontSize: 13, cursor: extraContext.trim() ? "pointer" : "default", opacity: extraContext.trim() ? 1 : 0.5 }}
                    >
                      🚀 Start de toets →
                    </button>
                  </div>
                )}
              </div>
            )}

            {previewConfirmed && (
              <div style={{ marginTop: 8, fontSize: 12, color: "#00e676", fontWeight: 700 }}>
                ✅ Bevestigd! Je krijgt vragen over: <em>{topicPreview?.title || topic.trim().split(/[:—\n]/)[0].trim()}</em>
              </div>
            )}
          </div>
        )}

        {/* ── Standaard schoolvakken ───────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "10px 0 10px" }}>
          <div style={{ flex: 1, height: 1, background: "#2a3f5f" }} />
          <span style={{ color: "#667788", fontSize: 12, whiteSpace: "nowrap" }}>of kies een standaard schoolvak</span>
          <div style={{ flex: 1, height: 1, background: "#2a3f5f" }} />
        </div>
        <div style={styles.subjectGrid}>
          {(level ? (SUBJECT_FOR_LEVEL[level] || []).map(id => SUBJECTS.find(s => s.id === id)).filter(Boolean) : SUBJECTS).map((s) => (
            <button
              key={s.id}
              style={{
                ...styles.subjectCard,
                borderColor: subject === s.id ? s.color : "transparent",
                background: subject === s.id ? `${s.color}15` : "#fff",
                boxShadow: subject === s.id ? `0 0 0 3px ${s.color}40` : "0 2px 8px rgba(0,0,0,0.06)",
              }}
              onClick={() => { setSubject(s.id); setEigenMode(false); setTopic(""); }}
            >
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{s.label}</span>
            </button>
          ))}
        </div>

        {((subject && level) || (eigenMode && level)) && (
          <>
            <div style={styles.settingsGroup}>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 700, marginBottom: 8 }}>Aantal vragen: <span style={{ color: "#fff" }}>{questionCount}</span></div>
              <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                {[5, 10, 15, 20].map(n => (
                  <button key={n} onClick={() => setQuestionCount(n)} style={{ flex: 1, padding: "8px 0", borderRadius: 10, cursor: "pointer", border: questionCount === n ? "2px solid #ff6b35" : "1px solid rgba(255,255,255,0.15)", background: questionCount === n ? "rgba(255,107,53,0.15)" : "rgba(255,255,255,0.05)", color: questionCount === n ? "#ff6b35" : "rgba(255,255,255,0.55)", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700 }}>{n}</button>
                ))}
              </div>
              <label style={styles.settingLabel}>Tijd per vraag: {timePerQuestion === 0 ? "♾️ Geen limiet" : `${timePerQuestion}s`}</label>
              <input type="range" min={0} max={60} step={5} value={timePerQuestion} onChange={(e) => setTimePerQuestion(+e.target.value)} style={styles.slider} />
              {timePerQuestion === 0 && <div style={{ fontSize: 12, color: "#00e676", fontWeight: 600, marginTop: 4 }}>Sleep naar rechts voor een tijdslimiet</div>}
            </div>
            {!eigenMode && !topic && (
              <div style={{ fontSize: 12, color: "#aabbcc", background: "#1a2a3a", borderRadius: 10, padding: "8px 14px", marginBottom: 10 }}>
                ⚡ Geen onderwerp? Dan starten we <strong>direct</strong> met kant-en-klare vragen — geen wachttijd!
              </div>
            )}
            <button
              style={{ ...styles.startButton, opacity: eigenMode && !topic.trim() ? 0.45 : 1 }}
              disabled={eigenMode && !topic.trim() || previewLoading}
              onClick={() => {
                if (eigenMode && !topic.trim()) return;
                if (eigenMode && topic.trim().length > 2 && !previewConfirmed && !topicPreview) {
                  fetchTopicPreview();
                  return;
                }
                SoundEngine.play("click");
                onStart({ subject: eigenMode ? "vrij" : subject, level, questionCount, timePerQuestion, useAI, topic: eigenMode ? topicForAI : (topic.trim() || null) });
              }}
            >
              {previewLoading ? "⏳ Onderwerp controleren..." : "🚀 Start met oefenen!"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

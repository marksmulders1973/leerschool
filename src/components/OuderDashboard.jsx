import { useState, useEffect } from "react";
import supabase from "../supabase.js";
import Header from "./Header.jsx";

const SUBJECT_LABELS = {
  rekenen: "Rekenen", taal: "Taal", aardrijkskunde: "Aardrijkskunde",
  geschiedenis: "Geschiedenis", natuur: "Natuur", engels: "Engels",
  spelling: "Spelling", "begrijpend-lezen": "Begrijpend Lezen",
  cito: "Cito", wiskunde: "Wiskunde", biologie: "Biologie",
};

function ScoreBadge({ pct }) {
  const color = pct >= 80 ? "#69f0ae" : pct >= 60 ? "#ffb74d" : "#ff7043";
  const bg = pct >= 80 ? "rgba(105,240,174,0.12)" : pct >= 60 ? "rgba(255,183,77,0.12)" : "rgba(255,112,67,0.12)";
  return (
    <span style={{ padding: "2px 8px", borderRadius: 8, background: bg, color, fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700 }}>
      {pct}%
    </span>
  );
}

export default function OuderDashboard({ onBack, onHome, authUser, subscription, onUpgrade }) {
  const isPro = subscription?.tier === "parent_pro";
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [childScores, setChildScores] = useState([]);
  const [citoScores, setCitoScores] = useState([]);
  const [newChildName, setNewChildName] = useState("");
  const [loading, setLoading] = useState(false);
  const [scoresLoading, setScoresLoading] = useState(false);

  // Laad gekoppelde kinderen
  useEffect(() => {
    if (!authUser) return;
    supabase.from("parent_child_links")
      .select("*")
      .eq("parent_user_id", authUser.id)
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        setChildren(data || []);
        if (data?.length && !selectedChild) setSelectedChild(data[0].child_name);
      });
  }, [authUser]);

  // Laad scores voor geselecteerd kind
  useEffect(() => {
    if (!selectedChild) return;
    setScoresLoading(true);
    supabase.from("leaderboard")
      .select("subject, level, score, total, percentage, time_taken, created_at")
      .eq("player_name", selectedChild)
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        setChildScores(data || []);
        setScoresLoading(false);
      });
  }, [selectedChild]);

  // Cito scores apart
  useEffect(() => {
    if (!selectedChild) return;
    supabase.from("leaderboard")
      .select("subject, level, percentage, created_at")
      .eq("player_name", selectedChild)
      .eq("subject", "cito")
      .order("created_at", { ascending: false })
      .then(({ data }) => setCitoScores(data || []));
  }, [selectedChild]);

  const addChild = async () => {
    if (!newChildName.trim() || !authUser) return;
    setLoading(true);
    const { data } = await supabase.from("parent_child_links")
      .insert({ parent_user_id: authUser.id, child_name: newChildName.trim() })
      .select().single();
    if (data) {
      setChildren(prev => [...prev, data]);
      setSelectedChild(data.child_name);
      setNewChildName("");
    }
    setLoading(false);
  };

  const removeChild = async (id) => {
    await supabase.from("parent_child_links").delete().eq("id", id);
    setChildren(prev => prev.filter(c => c.id !== id));
    setSelectedChild(prev => children.find(c => c.id !== id)?.child_name || null);
  };

  // Statistieken berekenen
  const subjectStats = childScores.reduce((acc, r) => {
    const key = r.subject;
    if (!acc[key]) acc[key] = { scores: [], label: SUBJECT_LABELS[key] || key };
    acc[key].scores.push(r.percentage);
    return acc;
  }, {});

  const recentScores = childScores.slice(0, 10);
  const avgScore = childScores.length ? Math.round(childScores.reduce((s, r) => s + r.percentage, 0) / childScores.length) : null;
  const strongSubjects = Object.entries(subjectStats).filter(([, v]) => Math.max(...v.scores) >= 80).map(([, v]) => v.label);
  const weakSubjects = Object.entries(subjectStats).filter(([, v]) => Math.max(...v.scores) < 60 && v.scores.length >= 2).map(([, v]) => v.label);

  if (!authUser) {
    return (
      <div style={{ minHeight: "100vh", background: "#0a0f1e" }}>
        <Header title="Ouder Dashboard 👨‍👩‍👧" onBack={onBack} onHome={onHome} />
        <div style={{ padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 12 }}>🔒</div>
          <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 20, color: "#fff", marginBottom: 8 }}>Log in om verder te gaan</div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Je hebt een Google-account nodig om het ouder-dashboard te gebruiken.</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 100%)" }}>
      <Header title="Ouder Dashboard 👨‍👩‍👧" subtitle="Volg de voortgang van je kind" onBack={onBack} onHome={onHome} />

      <div style={{ padding: "16px 20px 48px", maxWidth: 480, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Pro gate */}
        {!isPro && (
          <div style={{ borderRadius: 16, border: "2px solid rgba(0,176,255,0.4)", background: "rgba(0,176,255,0.08)", padding: "16px 18px" }}>
            <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700, color: "#00b0ff", marginBottom: 4 }}>
              ✨ Ouder Pro — €1,95/maand
            </div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12, lineHeight: 1.5 }}>
              Volg de voortgang van je kind, zie scores per vak en bereid de Cito-toets voor. Je kunt het nu al instellen — betaling volgt binnenkort.
            </div>
            <button onClick={onUpgrade} style={{ padding: "10px 18px", borderRadius: 10, border: "none", background: "#00b0ff", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Meer info & aanmelden →
            </button>
          </div>
        )}

        {/* Kinderen koppelen */}
        <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "16px" }}>
          <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 10 }}>
            👶 Mijn kinderen
          </div>

          {/* Bestaande kinderen */}
          {children.map(c => (
            <div key={c.id} onClick={() => setSelectedChild(c.child_name)} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "9px 12px", borderRadius: 10, marginBottom: 6, cursor: "pointer",
              background: selectedChild === c.child_name ? "rgba(0,176,255,0.15)" : "rgba(255,255,255,0.04)",
              border: selectedChild === c.child_name ? "1px solid rgba(0,176,255,0.35)" : "1px solid rgba(255,255,255,0.07)",
            }}>
              <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, color: selectedChild === c.child_name ? "#00b0ff" : "rgba(255,255,255,0.7)" }}>
                👦 {c.child_name}
              </span>
              <button onClick={e => { e.stopPropagation(); removeChild(c.id); }} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.2)", cursor: "pointer", fontSize: 16, padding: 4 }}>×</button>
            </div>
          ))}

          {/* Voeg kind toe */}
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <input
              value={newChildName}
              onChange={e => setNewChildName(e.target.value)}
              onKeyDown={e => e.key === "Enter" && addChild()}
              placeholder="Naam van je kind (zoals in de app)"
              style={{ flex: 1, padding: "9px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "'Nunito', sans-serif", fontSize: 13, outline: "none" }}
            />
            <button onClick={addChild} disabled={loading || !newChildName.trim()} style={{ padding: "9px 14px", borderRadius: 10, border: "none", background: newChildName.trim() ? "#00b0ff" : "rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              {loading ? "..." : "+ Voeg toe"}
            </button>
          </div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 6 }}>
            Vul dezelfde naam in als je kind gebruikt in de app
          </div>
        </div>

        {/* Dashboard inhoud — alleen als kind geselecteerd */}
        {selectedChild && (
          <>
            {scoresLoading ? (
              <div style={{ textAlign: "center", padding: 24, color: "rgba(255,255,255,0.4)", fontFamily: "'Fredoka', sans-serif" }}>Laden...</div>
            ) : childScores.length === 0 ? (
              <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>🎮</div>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Nog geen scores voor {selectedChild}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Zodra je kind oefent, zie je hier de resultaten.</div>
              </div>
            ) : (
              <>
                {/* Overzicht stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[
                    { label: "Gemiddeld", value: avgScore !== null ? `${avgScore}%` : "—", color: avgScore >= 70 ? "#69f0ae" : "#ffb74d" },
                    { label: "Quizzes", value: childScores.length, color: "#00b0ff" },
                    { label: "Vakken", value: Object.keys(subjectStats).length, color: "#ff6b35" },
                  ].map(({ label, value, color }) => (
                    <div key={label} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "12px 10px", textAlign: "center" }}>
                      <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, fontWeight: 700, color }}>{value}</div>
                      <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Sterk en zwak */}
                {(strongSubjects.length > 0 || weakSubjects.length > 0) && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {strongSubjects.length > 0 && (
                      <div style={{ borderRadius: 12, border: "1px solid rgba(105,240,174,0.2)", background: "rgba(105,240,174,0.06)", padding: "12px 14px" }}>
                        <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 13, color: "#69f0ae", fontWeight: 700, marginBottom: 6 }}>💪 Goed in</div>
                        {strongSubjects.slice(0, 3).map(s => (
                          <div key={s} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>• {s}</div>
                        ))}
                      </div>
                    )}
                    {weakSubjects.length > 0 && (
                      <div style={{ borderRadius: 12, border: "1px solid rgba(255,152,0,0.2)", background: "rgba(255,152,0,0.06)", padding: "12px 14px" }}>
                        <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 13, color: "#ffb74d", fontWeight: 700, marginBottom: 6 }}>📚 Meer oefenen</div>
                        {weakSubjects.slice(0, 3).map(s => (
                          <div key={s} style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>• {s}</div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Scores per vak */}
                <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
                  <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
                    📚 Per vak
                  </div>
                  {Object.entries(subjectStats).map(([subj, { scores, label }]) => {
                    const best = Math.max(...scores);
                    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
                    return (
                      <div key={subj} style={{ display: "flex", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)", gap: 12 }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{label}</div>
                          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>{scores.length}× geoefend · gem. {avg}%</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>beste</div>
                          <ScoreBadge pct={best} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cito sectie */}
                {citoScores.length > 0 && (
                  <div style={{ borderRadius: 16, border: "1px solid rgba(255,107,53,0.25)", background: "rgba(255,107,53,0.06)", padding: "14px 16px" }}>
                    <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: "#ff8c42", marginBottom: 10 }}>🎯 Cito voortgang</div>
                    {citoScores.slice(0, 5).map((s, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                          {s.level} — {new Date(s.created_at).toLocaleDateString("nl-NL", { day: "numeric", month: "short" })}
                        </span>
                        <ScoreBadge pct={s.percentage} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Recente activiteit */}
                <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
                  <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
                    🕐 Recente activiteit
                  </div>
                  {recentScores.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", padding: "9px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
                          {SUBJECT_LABELS[s.subject] || s.subject} · {s.level}
                        </div>
                        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>
                          {new Date(s.created_at).toLocaleDateString("nl-NL", { weekday: "short", day: "numeric", month: "short" })}
                          {s.time_taken ? ` · ⏱ ${s.time_taken < 60 ? `${s.time_taken}s` : `${Math.floor(s.time_taken / 60)}m ${s.time_taken % 60}s`}` : ""}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <ScoreBadge pct={s.percentage} />
                        <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 2 }}>{s.score}/{s.total}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

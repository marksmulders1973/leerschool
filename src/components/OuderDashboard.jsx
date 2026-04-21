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

function generateCode() {
  return Math.random().toString(36).substring(2, 8).toUpperCase();
}

export default function OuderDashboard({ onBack, onHome, authUser, subscription, onUpgrade, onLogin }) {
  const isPro = subscription?.tier === "parent_pro";
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [childScores, setChildScores] = useState([]);
  const [citoScores, setCitoScores] = useState([]);
  const [newChildName, setNewChildName] = useState("");
  const [loading, setLoading] = useState(false);
  const [scoresLoading, setScoresLoading] = useState(false);
  const [linkMethod, setLinkMethod] = useState("whatsapp"); // "whatsapp" | "naam"
  const [inviteCode, setInviteCode] = useState("");
  const [inviteSent, setInviteSent] = useState(false);

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

  const generateInvite = async () => {
    if (!authUser) return;
    setLoading(true);
    const code = generateCode();
    const expires = new Date(Date.now() + 48 * 3600 * 1000).toISOString();
    await supabase.from("link_codes").insert({ code, parent_user_id: authUser.id, expires_at: expires }).catch(() => {});
    setInviteCode(code);
    setInviteSent(false);
    setLoading(false);
  };

  const sendWhatsApp = () => {
    const msg = encodeURIComponent(`Hoi! Open Studiebol (studiebol.online) en voer de koppelcode *${inviteCode}* in bij 'Koppel met ouder'. Dan kan ik jouw voortgang zien 😊 (code is 48 uur geldig)`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
    setInviteSent(true);
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
        <div style={{ padding: 32, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 56 }}>👨‍👩‍👧</div>
          <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, color: "#fff" }}>Volg je kind</div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 280, lineHeight: 1.6 }}>
            Log in met Google om de voortgang van je kind te bekijken en te koppelen.
          </div>
          <button
            onClick={onLogin}
            style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, padding: "13px 22px", borderRadius: 14, border: "none", background: "#fff", color: "#333", fontFamily: "'Nunito', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Inloggen met Google
          </button>
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
          <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>
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

          {/* Methode tabs */}
          <div style={{ display: "flex", gap: 6, marginBottom: 12, marginTop: children.length ? 10 : 0 }}>
            {[
              { id: "whatsapp", label: "📱 Via WhatsApp", desc: "Kind op telefoon" },
              { id: "naam",     label: "✏️ Naam invullen", desc: "Zit naast je" },
            ].map(m => (
              <button key={m.id} onClick={() => setLinkMethod(m.id)} style={{
                flex: 1, padding: "9px 6px", borderRadius: 10, cursor: "pointer",
                border: linkMethod === m.id ? "1.5px solid rgba(0,176,255,0.5)" : "1px solid rgba(255,255,255,0.1)",
                background: linkMethod === m.id ? "rgba(0,176,255,0.1)" : "rgba(255,255,255,0.03)",
              }}>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, color: linkMethod === m.id ? "#00b0ff" : "rgba(255,255,255,0.5)" }}>{m.label}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>{m.desc}</div>
              </button>
            ))}
          </div>

          {/* WhatsApp flow */}
          {linkMethod === "whatsapp" && (
            <div>
              {!inviteCode ? (
                <>
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 10, lineHeight: 1.5 }}>
                    Je kind opent de app op zijn/haar telefoon en voert de code in. Je ontvangt daarna automatisch de voortgang.
                  </div>
                  <button onClick={generateInvite} disabled={loading} style={{ width: "100%", padding: "11px", borderRadius: 10, border: "none", background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                    {loading ? "Genereren..." : "📲 Genereer uitnodigingscode"}
                  </button>
                </>
              ) : (
                <div>
                  <div style={{ textAlign: "center", padding: "12px 0 8px" }}>
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>Koppelcode (48 uur geldig)</div>
                    <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 36, fontWeight: 700, color: "#00b0ff", letterSpacing: 6 }}>{inviteCode}</div>
                  </div>
                  <button onClick={sendWhatsApp} style={{ width: "100%", padding: "12px", borderRadius: 10, border: "none", background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>💬</span> Stuur via WhatsApp
                  </button>
                  {inviteSent && (
                    <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "#69f0ae", textAlign: "center", marginTop: 8 }}>
                      ✓ Verstuurd! Je kind voert de code in bij 'Koppel met ouder'.
                    </div>
                  )}
                  <button onClick={() => { setInviteCode(""); setInviteSent(false); }} style={{ width: "100%", marginTop: 8, padding: "7px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "none", color: "rgba(255,255,255,0.35)", fontFamily: "'Nunito', sans-serif", fontSize: 12, cursor: "pointer" }}>
                    Nieuwe code genereren
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Naam invullen flow */}
          {linkMethod === "naam" && (
            <div>
              <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>
                Vul de naam in zoals je kind die gebruikt in de app.
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  value={newChildName}
                  onChange={e => setNewChildName(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && addChild()}
                  placeholder="Naam van je kind"
                  style={{ flex: 1, padding: "9px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.06)", color: "#fff", fontFamily: "'Nunito', sans-serif", fontSize: 13, outline: "none" }}
                />
                <button onClick={addChild} disabled={loading || !newChildName.trim()} style={{ padding: "9px 14px", borderRadius: 10, border: "none", background: newChildName.trim() ? "#00b0ff" : "rgba(255,255,255,0.1)", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
                  {loading ? "..." : "Voeg toe"}
                </button>
              </div>
            </div>
          )}
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

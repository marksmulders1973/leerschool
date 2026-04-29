import Header from "./Header.jsx";

const CATEGORIES = [
  { id: "werkwoorden", label: "Werkwoorden & dt", icon: "✍️",  color: "#ef5350", desc: "Dt-regels, werkwoordvormen" },
  { id: "meervoud",    label: "Meervoud",         icon: "📚", color: "#42a5f5", desc: "Meervoudsvorming (katten, rozen, muizen)" },
  { id: "woorden",     label: "Spelling & woorden", icon: "🔡", color: "#66bb6a", desc: "Hoofdletters, moeilijke woorden" },
];

export default function SpellingPage({ userName, studentProgress = [], onStart, onBack, onHome }) {
  const getStatus = (cat) => {
    const results = studentProgress.filter(
      (p) => p.player === userName && p.topic === `spelling ${cat}`
    );
    if (results.length === 0) return "new";
    const best = Math.max(...results.map((r) => r.percentage));
    if (best >= 70) return "green";
    return "orange";
  };

  const getLastScore = (cat) => {
    const results = studentProgress.filter(
      (p) => p.player === userName && p.topic === `spelling ${cat}`
    );
    if (results.length === 0) return null;
    return results.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0].percentage;
  };

  const total = CATEGORIES.length;
  const done  = CATEGORIES.filter(c => getStatus(c.id) === "green").length;

  return (
    <div style={{ minHeight: "100vh", background: "#0d1f3c", fontFamily: "var(--font-body)" }}>
      <Header title="Spelling" subtitle="Groep 3–8" onBack={onBack} onHome={onHome} />
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 16px 32px" }}>

        {/* Voortgangsbalk */}
        <div style={{ marginBottom: 20, padding: "14px 16px", background: "#1a2a3a", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>Voortgang</span>
            <span style={{ fontSize: 13, color: "var(--color-brand-primary-100)", fontWeight: 700 }}>{done} / {total} beheerst</span>
          </div>
          <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(done / total) * 100}%`, background: "linear-gradient(90deg, var(--color-brand-primary), #69f0ae)", borderRadius: 4, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {/* Legenda */}
        <div style={{ display: "flex", gap: 12, marginBottom: 16, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          <span>⬜ Nog niet geoefend</span>
          <span style={{ color: "#ffb74d" }}>🟧 Bezig</span>
          <span style={{ color: "var(--color-brand-primary-100)" }}>🟩 Beheerst ≥70%</span>
        </div>

        {/* Categorieën */}
        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
          {CATEGORIES.map(cat => {
            const st = getStatus(cat.id);
            const score = getLastScore(cat.id);
            const borderColor = st === "green" ? "rgba(0,200,83,0.5)"
                              : st === "orange" ? "rgba(255,152,0,0.5)"
                              : "rgba(255,255,255,0.12)";
            const bgColor = st === "green" ? "rgba(0,200,83,0.1)"
                          : st === "orange" ? "rgba(255,152,0,0.08)"
                          : "rgba(255,255,255,0.04)";
            return (
              <button
                key={cat.id}
                onClick={() => onStart(cat.id)}
                style={{
                  padding: "16px 20px",
                  borderRadius: 16,
                  cursor: "pointer",
                  background: bgColor,
                  border: `2px solid ${borderColor}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  transition: "transform 0.1s",
                  textAlign: "left",
                }}
              >
                <span style={{ fontSize: 32, flexShrink: 0 }}>{cat.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--color-text-strong)" }}>
                    {cat.label}
                  </div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>
                    {cat.desc}
                  </div>
                </div>
                {score !== null && (
                  <span style={{ fontSize: 13, fontFamily: "var(--font-body)", fontWeight: 700, color: st === "green" ? "var(--color-brand-primary-100)" : "#ffb74d", flexShrink: 0 }}>
                    {score}%
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Mix knop */}
        <button
          onClick={() => onStart("mix")}
          style={{
            width: "100%", padding: "16px 0", borderRadius: 14, cursor: "pointer",
            background: "linear-gradient(135deg, rgba(244,63,94,0.15), rgba(239,68,68,0.1))",
            border: "2px solid rgba(244,63,94,0.4)", color: "#fb7185",
            fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
          }}
        >
          🔀 Mix — alle categorieën door elkaar
        </button>

        {done === total && (
          <div style={{ marginTop: 16, padding: "14px 16px", background: "rgba(0,200,83,0.1)", borderRadius: 14, border: "1px solid rgba(0,200,83,0.3)", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--color-brand-primary-100)", fontWeight: 700 }}>
              🏆 Alle categorieën beheerst!
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
              Probeer de mix om scherp te blijven
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

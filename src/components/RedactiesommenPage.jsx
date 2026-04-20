import Header from "./Header.jsx";

const CATEGORIES = [
  { id: "optellen",           label: "Optellen",           icon: "➕", color: "#42a5f5" },
  { id: "aftrekken",          label: "Aftrekken",          icon: "➖", color: "#ef5350" },
  { id: "vermenigvuldigen",   label: "Vermenigvuldigen",   icon: "✖️",  color: "#ab47bc" },
  { id: "delen",              label: "Delen",              icon: "➗", color: "#ff7043" },
  { id: "geld",               label: "Geld",               icon: "💶", color: "#26a69a" },
  { id: "tijd",               label: "Tijd",               icon: "🕐", color: "#66bb6a" },
  { id: "meten",              label: "Meten",              icon: "📏", color: "#ffa726" },
  { id: "gemengd",            label: "Gemengd",            icon: "🔢", color: "#8d6e63" },
];

export default function RedactiesommenPage({ userName, studentProgress = [], onStart, onBack, onHome }) {
  const getStatus = (cat) => {
    const results = studentProgress.filter(
      (p) => p.player === userName && p.topic === `redactiesommen ${cat}`
    );
    if (results.length === 0) return "new";
    const best = Math.max(...results.map((r) => r.percentage));
    if (best >= 70) return "green";
    return "orange";
  };

  const getLastScore = (cat) => {
    const results = studentProgress.filter(
      (p) => p.player === userName && p.topic === `redactiesommen ${cat}`
    );
    if (results.length === 0) return null;
    return results.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0].percentage;
  };

  const total = CATEGORIES.length;
  const done  = CATEGORIES.filter(c => getStatus(c.id) === "green").length;

  return (
    <div style={{ minHeight: "100vh", background: "#0d1f3c", fontFamily: "'Nunito', sans-serif" }}>
      <Header title="Redactiesommen" subtitle="Groep 4 t/m 8" onBack={onBack} onHome={onHome} />
      <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 16px 32px" }}>

        {/* Voortgangsbalk */}
        <div style={{ marginBottom: 20, padding: "14px 16px", background: "#1a2a3a", borderRadius: 14, border: "1px solid rgba(255,255,255,0.08)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontWeight: 700 }}>Voortgang</span>
            <span style={{ fontSize: 13, color: "#69f0ae", fontWeight: 700 }}>{done} / {total} beheerst</span>
          </div>
          <div style={{ height: 8, background: "rgba(255,255,255,0.1)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(done / total) * 100}%`, background: "linear-gradient(90deg, #00c853, #69f0ae)", borderRadius: 4, transition: "width 0.4s ease" }} />
          </div>
        </div>

        {/* Legenda */}
        <div style={{ display: "flex", gap: 12, marginBottom: 16, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
          <span>⬜ Nog niet geoefend</span>
          <span style={{ color: "#ffb74d" }}>🟧 Bezig</span>
          <span style={{ color: "#69f0ae" }}>🟩 Beheerst ≥70%</span>
        </div>

        {/* Categorieën grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12, marginBottom: 16 }}>
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
                  padding: "18px 12px",
                  borderRadius: 16,
                  cursor: "pointer",
                  background: bgColor,
                  border: `2px solid ${borderColor}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                  transition: "transform 0.1s",
                }}
              >
                <span style={{ fontSize: 30 }}>{cat.icon}</span>
                <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700, color: "#fff" }}>
                  {cat.label}
                </span>
                {score !== null && (
                  <span style={{ fontSize: 11, fontFamily: "'Nunito', sans-serif", fontWeight: 700, color: st === "green" ? "#69f0ae" : "#ffb74d" }}>
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
            background: "linear-gradient(135deg, rgba(255,107,53,0.15), rgba(255,152,0,0.1))",
            border: "2px solid rgba(255,107,53,0.4)", color: "#ff9800",
            fontFamily: "'Fredoka', sans-serif", fontSize: 18, fontWeight: 700,
          }}
        >
          🔀 Mix — alle categorieën door elkaar
        </button>

        {done === total && (
          <div style={{ marginTop: 16, padding: "14px 16px", background: "rgba(0,200,83,0.1)", borderRadius: 14, border: "1px solid rgba(0,200,83,0.3)", textAlign: "center" }}>
            <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, color: "#69f0ae", fontWeight: 700 }}>
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

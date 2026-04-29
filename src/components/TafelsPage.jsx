import Header from "./Header.jsx";

export default function TafelsPage({ userName, studentProgress = [], onStart, onBack, onHome }) {
  // Bereken voortgang per tafel voor deze leerling
  const getTafelStatus = (n) => {
    const results = studentProgress.filter(
      (p) => p.player === userName && p.topic === `tafel van ${n}`
    );
    if (results.length === 0) return "new";
    const best = Math.max(...results.map((r) => r.percentage));
    if (best >= 70) return "green";
    return "orange";
  };

  const statusColor = {
    new:    { bg: "rgba(255,255,255,0.05)", border: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.5)", label: null },
    orange: { bg: "rgba(255,152,0,0.12)",   border: "rgba(255,152,0,0.4)",   color: "#ffb74d",               label: "bezig" },
    green:  { bg: "rgba(0,200,83,0.12)",    border: "rgba(0,200,83,0.4)",    color: "var(--color-brand-primary-100)",               label: "✓" },
  };

  const getLastScore = (n) => {
    const results = studentProgress.filter(
      (p) => p.player === userName && p.topic === `tafel van ${n}`
    );
    if (results.length === 0) return null;
    return results.sort((a, b) => new Date(b.completedAt) - new Date(a.completedAt))[0].percentage;
  };

  const total = 12;
  const done  = Array.from({ length: total }, (_, i) => getTafelStatus(i + 1)).filter(s => s === "green").length;

  return (
    <div style={{ minHeight: "100vh", background: "#0d1f3c", fontFamily: "var(--font-body)" }}>
      <Header title="Tafels oefenen" subtitle="Groep 3 t/m 6" onBack={onBack} onHome={onHome} />
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

        {/* Tafels grid 1-12 */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, marginBottom: 16 }}>
          {Array.from({ length: 12 }, (_, i) => i + 1).map(n => {
            const st = getTafelStatus(n);
            const { bg, border, color } = statusColor[st];
            const score = getLastScore(n);
            return (
              <button
                key={n}
                onClick={() => onStart(n)}
                style={{
                  padding: "10px 0", borderRadius: 14, cursor: "pointer",
                  background: bg, border: `2px solid ${border}`,
                  fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700,
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 1,
                  transition: "transform 0.1s",
                }}
              >
                <span style={{ fontSize: 9, fontFamily: "var(--font-body)", fontWeight: 600, color, opacity: 0.7, letterSpacing: 0.2 }}>tafel van</span>
                <span style={{ color: "var(--color-text-strong)" }}>{n}</span>
                {score !== null && (
                  <span style={{ fontSize: 9, fontFamily: "var(--font-body)", fontWeight: 700, opacity: 0.8 }}>
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
            fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
          }}
        >
          🔀 Mix — alle tafels door elkaar
        </button>

        {done === total && (
          <div style={{ marginTop: 16, padding: "14px 16px", background: "rgba(0,200,83,0.1)", borderRadius: 14, border: "1px solid rgba(0,200,83,0.3)", textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--color-brand-primary-100)", fontWeight: 700 }}>
              🏆 Alle tafels beheerst!
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

// SpellenHub — keuzescherm voor de twee spellen (OBLITERATOR + Kikker Oversteek).
// De bottom-nav "🎮 Spel"-tab en /spel komen hier uit, zodat je kunt kiezen
// i.p.v. direct in één spel te belanden. "Kikker Oversteek" is tijdelijk
// (spel van de maand) — als die weg is, toont deze hub alleen OBLITERATOR.
const NAVY = "#0f1f4d";
const GOLD = "#e8a317";

export default function SpellenHub({ onHome, onObliterator, onFrogger, showFrogger = true }) {
  return (
    <div style={{ minHeight: "100dvh", background: NAVY, color: "#fff7ec", padding: "20px 16px 90px", display: "flex", flexDirection: "column", alignItems: "center", fontFamily: "-apple-system,Segoe UI,Roboto,Arial,sans-serif" }}>
      <div style={{ width: "100%", maxWidth: 720, display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
        <button onClick={onHome} style={btnGhost}>← Home</button>
        <div style={{ fontWeight: 800, letterSpacing: ".5px" }}>🌊 Leerkwartier</div>
      </div>

      <h1 style={{ fontSize: 26, fontWeight: 800, margin: "8px 0 4px", textAlign: "center" }}>Kies een spel 🎮</h1>
      <p style={{ opacity: .8, marginBottom: 24, textAlign: "center", fontSize: 14 }}>Even ontladen tussen het leren door.</p>

      <div style={{ width: "100%", maxWidth: 720, display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
        <button onClick={onObliterator} style={card}>
          <div style={{ fontSize: 52 }}>👽🛸</div>
          <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>OBLITERATOR</div>
          <div style={{ fontSize: 13, opacity: .8, marginTop: 4 }}>Ruimte-shooter — versla je highscore!</div>
          <span style={pill}>▶ Spelen</span>
        </button>

        {showFrogger && (
          <button onClick={onFrogger} style={card}>
            <div style={{ position: "absolute", top: 12, right: 12, background: GOLD, color: NAVY, fontWeight: 800, fontSize: 11, padding: "3px 9px", borderRadius: 999 }}>NIEUW</div>
            <div style={{ fontSize: 52 }}>🐸</div>
            <div style={{ fontSize: 20, fontWeight: 800, marginTop: 8 }}>Kikker Oversteek</div>
            <div style={{ fontSize: 13, opacity: .8, marginTop: 4 }}>Spel van de maand — steek veilig de weg over!</div>
            <span style={pill}>▶ Spelen</span>
          </button>
        )}
      </div>
    </div>
  );
}

const btnGhost = { background: "transparent", color: "#fff7ec", border: "1px solid rgba(255,255,255,.3)", borderRadius: 999, padding: "6px 14px", fontWeight: 600, cursor: "pointer" };
const card = { position: "relative", flex: "1 1 280px", maxWidth: 340, minHeight: 220, background: "linear-gradient(160deg,#15306a,#0c1838)", color: "#fff7ec", border: "1px solid rgba(255,255,255,.15)", borderRadius: 18, padding: "28px 20px", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", boxShadow: "0 10px 28px rgba(0,0,0,.35)" };
const pill = { marginTop: 16, background: GOLD, color: NAVY, fontWeight: 800, fontSize: 15, padding: "9px 22px", borderRadius: 999 };

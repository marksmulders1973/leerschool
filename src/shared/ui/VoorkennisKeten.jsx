// VoorkennisKeten — visualiseert de "basis → top"-leerlijn die naar
// een examenvraag toe leidt. POC voor de Leerkwartier-USP: examen-vraag
// → keten van vereiste basiskennis (laagste niveau eerst) → terug naar
// examen.
//
// Mark 2026-05-14: pilot op economie 2023-T1 vraag 4 (zonnepanelen-subsidie).
// Adaptive routing (zwakste-pad-detectie) komt fase 3 — hier alleen visueel.
//
// Schema (gedefinieerd in src/learnPaths/<examenPad>.js per check):
//   voorkennisKeten: [
//     { id, title, niveau, why },  // basis (laagste)
//     ...,                          // intermediate
//     { id, title, niveau, why },  // top (kern-pad van examenvraag)
//   ]

const NIVEAU_KLEUR = {
  "po-1F": "#69b2ff",
  "po-1S": "#69b2ff",
  "po-2F": "#69b2ff",
  "vmbo-2F": "#ffd54f",
  "vmbo-2": "#ffd54f",
  "vmbo-3": "#ffd54f",
  "vmbo-4": "#ff8c42",
  "vmbo-3F": "#ff8c42",
  "havo-3F": "#ff5252",
  "havo-3S": "#ff5252",
};

function niveauStyle(niveau) {
  const color = NIVEAU_KLEUR[niveau] || "#cdd6e2";
  return {
    background: color + "20",
    border: `1px solid ${color}66`,
    color,
    fontFamily: "var(--font-body)",
    fontSize: 10,
    fontWeight: 700,
    padding: "1px 6px",
    borderRadius: 999,
    letterSpacing: 0.3,
    whiteSpace: "nowrap",
  };
}

export default function VoorkennisKeten({ keten, onJumpToPath }) {
  if (!Array.isArray(keten) || keten.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Voorkennis-keten naar deze examenvraag"
      style={{
        marginBottom: 14,
        padding: "12px 14px",
        borderRadius: 12,
        background: "linear-gradient(135deg, rgba(91,134,184,0.10), rgba(91,134,184,0.04))",
        border: "1px solid rgba(91,134,184,0.30)",
      }}
    >
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 12,
        fontWeight: 700,
        color: "#69b2ff",
        marginBottom: 8,
        letterSpacing: 0.3,
        textTransform: "uppercase",
      }}>
        🧭 Leerlijn naar deze vraag
      </div>

      <ol style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        margin: 0,
        padding: 0,
        listStyle: "none",
      }}>
        {keten.map((stap, i) => {
          const isLast = i === keten.length - 1;
          return (
            <li key={stap.id + "_" + i} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
              <div style={{
                flexShrink: 0,
                width: 22,
                height: 22,
                borderRadius: 999,
                background: isLast ? "linear-gradient(135deg, #00c853, #00a040)" : "rgba(91,134,184,0.30)",
                border: `1px solid ${isLast ? "#00e676" : "rgba(91,134,184,0.55)"}`,
                color: isLast ? "#fff" : "#69b2ff",
                fontFamily: "var(--font-display)",
                fontSize: 11,
                fontWeight: 800,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                {i + 1}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <button
                  type="button"
                  onClick={() => { if (onJumpToPath) onJumpToPath(stap.id); }}
                  disabled={!onJumpToPath}
                  style={{
                    appearance: "none",
                    background: "transparent",
                    border: "none",
                    padding: 0,
                    cursor: onJumpToPath ? "pointer" : "default",
                    textAlign: "left",
                    width: "100%",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" }}>
                    <span style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 13,
                      fontWeight: 700,
                      color: onJumpToPath ? "#cdd6e2" : "#8899aa",
                      textDecoration: onJumpToPath ? "underline" : "none",
                      textDecorationColor: "rgba(105,178,255,0.40)",
                      textUnderlineOffset: 3,
                    }}>
                      {stap.title}
                    </span>
                    {stap.niveau && <span style={niveauStyle(stap.niveau)}>{stap.niveau}</span>}
                    {isLast && <span style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 10,
                      fontWeight: 700,
                      padding: "1px 6px",
                      borderRadius: 999,
                      background: "rgba(0,200,83,0.18)",
                      color: "#00e676",
                      letterSpacing: 0.3,
                    }}>kern</span>}
                  </div>
                  {stap.why && (
                    <div style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.55)",
                      marginTop: 2,
                      lineHeight: 1.4,
                    }}>
                      {stap.why}
                    </div>
                  )}
                </button>
              </div>
            </li>
          );
        })}
      </ol>

      <div style={{
        fontFamily: "var(--font-body)",
        fontSize: 10,
        color: "rgba(255,255,255,0.45)",
        marginTop: 8,
        fontStyle: "italic",
      }}>
        Tik op een stap om naar dat onderwerp te oefenen — daarna terug naar deze vraag.
      </div>
    </div>
  );
}

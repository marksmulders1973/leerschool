import { useMemo } from "react";
import Header from "./Header.jsx";
import pathManifest from "../learnPaths/pathManifest.generated.json";

// Herkansing-landing "/herkansing" (Mark 2026-06-12, uitslag-week):
// gezakte examenkandidaten weten al WELK vak het probleem is — die hebben
// geen niveau-meting nodig maar direct gericht oefenmateriaal. Deze pagina
// bundelt de bestaande examen-oefenpaden per vak, met warme toon (geen
// "helaas gezakt"-taal die op de uitslag-dag zout in de wond wrijft).
// Social-reacties (Threads/FB) linken hierheen in de herkansings-week.

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "#e0e6f0",
  muted: "#8899aa",
  warm: "#ffd54f",
  accent: "#ff6b35",
  oefen: "#00b0ff",
};

const VAK_INFO = {
  nederlands: { label: "Nederlands", emoji: "📖" },
  engels: { label: "Engels", emoji: "🇬🇧" },
  economie: { label: "Economie", emoji: "💶" },
  biologie: { label: "Biologie", emoji: "🌱" },
  geschiedenis: { label: "Geschiedenis", emoji: "🏛️" },
  maatschappijleer: { label: "Maatschappijkunde", emoji: "🗳️" },
};

export default function HerkansingPage({ onBack, onHome, onPickPath, onGoExamens }) {
  // Examen-oefenpaden per vak, nieuwste examen eerst (dat lijkt het meest
  // op wat de herkanser straks voor zich krijgt).
  const padenPerVak = useMemo(() => {
    const out = {};
    for (const p of pathManifest) {
      if (!p.id || !p.id.startsWith("examen-")) continue;
      const vak = p.subject;
      if (!out[vak]) out[vak] = [];
      out[vak].push(p);
    }
    for (const vak of Object.keys(out)) {
      out[vak].sort((a, b) => (a.id < b.id ? 1 : -1)); // id bevat jaar-tijdvak → desc
    }
    return out;
  }, []);

  const vakken = Object.keys(VAK_INFO).filter((v) => padenPerVak[v]?.length);

  // "2025-t1" uit "examen-biologie-2025-t1" → "2025 · tijdvak 1"
  const slotLabel = (id) => {
    const m = id.match(/(\d{4})-t(\d)$/);
    return m ? `${m[1]} · tijdvak ${m[2]}` : id;
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bg, color: C.text }}>
      <Header title="Herkansing 💪" subtitle="" onBack={onBack} onHome={onHome} />
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "24px 16px 60px" }}>

        {/* Hero — warm, geen "gezakt"-stempel */}
        <div
          style={{
            padding: "28px 22px",
            background: "rgba(255,213,79,0.08)",
            border: "1px solid rgba(255,213,79,0.30)",
            borderRadius: 16,
            textAlign: "center",
            marginBottom: 24,
          }}
        >
          <div style={{ fontSize: 44, marginBottom: 8 }}>💪</div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              color: C.warm,
              marginBottom: 10,
              lineHeight: 1.3,
            }}
          >
            Herkansing? Je hoeft niet álles opnieuw te leren.
          </h1>
          <p style={{ fontSize: 15, color: C.text, lineHeight: 1.6, maxWidth: 540, margin: "0 auto" }}>
            Pak alleen het vak dat net niet lukte. Hier oefen je met{" "}
            <strong>echte examenvragen van de afgelopen jaren</strong> — en bij elke
            fout krijg je uitleg in drie niveaus, net zolang tot je het snapt.
            In 2026 helemaal gratis, zonder account.
          </p>
        </div>

        {/* Zo werkt het — 3 stappen */}
        <div
          style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
            marginBottom: 28,
          }}
        >
          {[
            ["1️⃣", "Kies hieronder je vak"],
            ["2️⃣", "Oefen echte examens van vorige jaren"],
            ["3️⃣", "Fout? Dan krijg je uitleg tot je het snapt"],
          ].map(([emoji, txt]) => (
            <div
              key={txt}
              style={{
                flex: "1 1 180px",
                padding: "12px 14px",
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 12,
                fontSize: 13,
                lineHeight: 1.45,
                color: C.text,
              }}
            >
              <span style={{ marginRight: 6 }}>{emoji}</span>
              {txt}
            </div>
          ))}
        </div>

        {/* Per vak: examens om te oefenen */}
        {vakken.map((vak) => {
          const info = VAK_INFO[vak];
          const paden = padenPerVak[vak];
          return (
            <div
              key={vak}
              style={{
                marginBottom: 18,
                padding: "16px 16px 14px",
                background: C.card,
                border: `1px solid ${C.border}`,
                borderRadius: 14,
              }}
            >
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 17,
                  color: C.text,
                  margin: "0 0 10px",
                }}
              >
                {info.emoji} {info.label}
              </h2>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {paden.map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => onPickPath && onPickPath(p.id)}
                    style={{
                      padding: "9px 14px",
                      background: "rgba(0,176,255,0.12)",
                      border: "1px solid rgba(0,176,255,0.45)",
                      borderRadius: 9,
                      color: C.oefen,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    🎓 {slotLabel(p.id)}
                  </button>
                ))}
              </div>
            </div>
          );
        })}

        {/* Doorverwijzing naar volledig examen-overzicht (incl. PDF's) */}
        {onGoExamens && (
          <div style={{ textAlign: "center", marginTop: 26 }}>
            <p style={{ fontSize: 13, color: C.muted, marginBottom: 10 }}>
              Liever het hele examen als PDF erbij, mét correctievoorschrift?
            </p>
            <button
              type="button"
              onClick={onGoExamens}
              style={{
                padding: "12px 22px",
                background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                border: "none",
                borderRadius: 10,
                color: "#fff",
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 700,
                cursor: "pointer",
              }}
            >
              📜 Alle examens bekijken
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

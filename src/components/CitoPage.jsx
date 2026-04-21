import { useState } from "react";
import styles from "../styles.js";
import { SoundEngine } from "../utils.js";
import Header from "./Header.jsx";

const ONDERDELEN = [
  {
    id: "gemengd",
    icon: "🎲",
    label: "Alles gemengd",
    sub: "Rekenen · Taal · Lezen · Wereld",
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.13)",
    border: "rgba(255,107,53,0.3)",
    featured: true,
    subject: "cito",
    topic: "Cito eindtoets: gemengde vragen over rekenen, taal, begrijpend lezen en wereld oriëntatie (aardrijkskunde, geschiedenis, natuur)",
  },
  {
    id: "rekenen",
    icon: "🔢",
    label: "Rekenen & Wiskunde",
    sub: "Breuken, meten, verbanden",
    color: "#00c853",
    bg: "rgba(0,200,83,0.1)",
    border: "rgba(0,200,83,0.25)",
    subject: "rekenen",
    topic: "Cito eindtoets rekenen en wiskunde groep 7-8: breuken, decimalen, meten, verbanden, meetkunde",
  },
  {
    id: "taal",
    icon: "📝",
    label: "Taal",
    sub: "Spelling, grammatica, woordenschat",
    color: "#00b0ff",
    bg: "rgba(0,176,255,0.1)",
    border: "rgba(0,176,255,0.25)",
    subject: "taal",
    topic: "Cito eindtoets taal groep 7-8: spelling, werkwoorden, grammatica, woordenschat",
  },
  {
    id: "begrijpend-lezen",
    icon: "📖",
    label: "Begrijpend Lezen",
    sub: "Teksten begrijpen & analyseren",
    color: "#f59e0b",
    bg: "rgba(245,158,11,0.1)",
    border: "rgba(245,158,11,0.25)",
    subject: "begrijpend-lezen",
    topic: "Cito eindtoets begrijpend lezen groep 7-8: informatie opzoeken, hoofdgedachte, samenvatten",
  },
  {
    id: "wereldorientatie",
    icon: "🌍",
    label: "Wereld Oriëntatie",
    sub: "Aardrijkskunde, geschiedenis, natuur",
    color: "#2bbd7e",
    bg: "rgba(43,189,126,0.1)",
    border: "rgba(43,189,126,0.25)",
    subject: "aardrijkskunde",
    topic: "Cito eindtoets wereld oriëntatie groep 7-8: aardrijkskunde, geschiedenis, natuur & techniek",
  },
];

export default function CitoPage({ onStart, onBack, onHome, citoProgress = [] }) {
  const [groep, setGroep] = useState("8");
  const [selected, setSelected] = useState(null);
  const [questionCount, setQuestionCount] = useState(10);

  const getBestScore = (id) => {
    const matches = citoProgress.filter(r => r.citoId === id && r.citoGroep === groep);
    if (!matches.length) return null;
    return Math.max(...matches.map(r => r.percentage));
  };

  const handleStart = () => {
    if (!selected) return;
    SoundEngine.play("click");
    onStart({
      citoId: selected.id,
      groep,
      subject: selected.subject,
      level: `groep${groep}`,
      questionCount,
      timePerQuestion: 0,
      topic: selected.topic,
    });
  };

  return (
    <div style={styles.page}>
      <Header title="Cito Oefenen 🎯" subtitle={`Voorbereiding eindtoets groep ${groep}`} onBack={onBack} onHome={onHome} />

      <div style={{ padding: "16px 20px 40px", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Groep selector */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>
            Welke groep?
          </span>
          {["7", "8"].map(g => (
            <button key={g} onClick={() => setGroep(g)} style={{
              padding: "6px 18px", borderRadius: 10, cursor: "pointer",
              border: groep === g ? "2px solid #ff6b35" : "1px solid rgba(255,255,255,0.15)",
              background: groep === g ? "rgba(255,107,53,0.15)" : "rgba(255,255,255,0.05)",
              color: groep === g ? "#ff6b35" : "rgba(255,255,255,0.55)",
              fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700,
            }}>
              Groep {g}
            </button>
          ))}
        </div>

        {/* Featured card: gemengd */}
        {(() => {
          const f = ONDERDELEN[0];
          const sel = selected?.id === f.id;
          const best = getBestScore(f.id);
          return (
            <div onClick={() => { setSelected(sel ? null : f); SoundEngine.play("click"); }}
              style={{
                borderRadius: 18,
                border: `2px solid ${sel ? f.color : f.border}`,
                background: sel ? f.bg : "rgba(255,255,255,0.03)",
                padding: "18px 20px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 16,
                transition: "all 0.15s ease",
                boxShadow: sel ? `0 0 20px ${f.bg}` : "none",
              }}
              onMouseEnter={e => { if (!sel) e.currentTarget.style.background = f.bg; }}
              onMouseLeave={e => { if (!sel) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
            >
              <span style={{ fontSize: 36 }}>{f.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 19, fontWeight: 700, color: f.color }}>{f.label}</div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{f.sub}</div>
                {best !== null && (
                  <div style={{ marginTop: 4, display: "inline-block", padding: "2px 8px", borderRadius: 8, background: best >= 80 ? "rgba(0,200,83,0.2)" : "rgba(255,152,0,0.2)", border: `1px solid ${best >= 80 ? "rgba(0,200,83,0.4)" : "rgba(255,152,0,0.4)"}`, fontFamily: "'Fredoka', sans-serif", fontSize: 12, color: best >= 80 ? "#69f0ae" : "#ffb74d", fontWeight: 700 }}>
                    beste score: {best}%
                  </div>
                )}
              </div>
              <div style={{
                width: 24, height: 24, borderRadius: "50%",
                border: `2px solid ${sel ? f.color : "rgba(255,255,255,0.2)"}`,
                background: sel ? f.color : "transparent",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 14, color: "#fff", flexShrink: 0,
              }}>
                {sel ? "✓" : ""}
              </div>
            </div>
          );
        })()}

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
          <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
            of kies een onderdeel
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
        </div>

        {/* 4 onderdelen grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
          {ONDERDELEN.slice(1).map(f => {
            const sel = selected?.id === f.id;
            const best = getBestScore(f.id);
            return (
              <div key={f.id}
                onClick={() => { setSelected(sel ? null : f); SoundEngine.play("click"); }}
                style={{
                  borderRadius: 16,
                  border: `2px solid ${sel ? f.color : f.border}`,
                  background: sel ? f.bg : "rgba(255,255,255,0.03)",
                  padding: "14px 14px 12px",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  boxShadow: sel ? `0 0 16px ${f.bg}` : "none",
                }}
                onMouseEnter={e => { if (!sel) e.currentTarget.style.background = f.bg; }}
                onMouseLeave={e => { if (!sel) e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                  <span style={{ fontSize: 28 }}>{f.icon}</span>
                  {sel && (
                    <div style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: f.color,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, color: "#fff",
                    }}>✓</div>
                  )}
                </div>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, color: f.color, lineHeight: 1.2 }}>
                  {f.label}
                </div>
                <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>
                  {f.sub}
                </div>
                {best !== null && (
                  <div style={{ marginTop: 5, padding: "2px 6px", borderRadius: 6, background: best >= 80 ? "rgba(0,200,83,0.18)" : "rgba(255,152,0,0.18)", fontFamily: "'Fredoka', sans-serif", fontSize: 11, color: best >= 80 ? "#69f0ae" : "#ffb74d", fontWeight: 700, display: "inline-block" }}>
                    {best >= 80 ? "✓" : "⚠"} {best}%
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Aantal vragen */}
        <div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 700, marginBottom: 8 }}>
            Aantal vragen: <span style={{ color: "#fff" }}>{questionCount}</span>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            {[5, 10, 15, 20].map(n => (
              <button key={n} onClick={() => setQuestionCount(n)} style={{
                flex: 1, padding: "8px 0", borderRadius: 10, cursor: "pointer",
                border: questionCount === n ? "2px solid #ff6b35" : "1px solid rgba(255,255,255,0.15)",
                background: questionCount === n ? "rgba(255,107,53,0.15)" : "rgba(255,255,255,0.05)",
                color: questionCount === n ? "#ff6b35" : "rgba(255,255,255,0.55)",
                fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700,
              }}>{n}</button>
            ))}
          </div>
        </div>

        {/* Start knop */}
        <button
          onClick={handleStart}
          disabled={!selected}
          style={{
            width: "100%", padding: "16px", borderRadius: 16, border: "none",
            background: selected
              ? "linear-gradient(135deg, #ff6b35, #ff8c42)"
              : "rgba(255,255,255,0.08)",
            color: selected ? "#fff" : "rgba(255,255,255,0.3)",
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 18, fontWeight: 700, cursor: selected ? "pointer" : "default",
            boxShadow: selected ? "0 4px 20px rgba(255,107,53,0.4)" : "none",
            transition: "all 0.2s ease",
          }}
        >
          {selected ? `🚀 Start ${selected.label}` : "Kies een onderdeel om te starten"}
        </button>

        {/* Info */}
        <div style={{
          background: "rgba(255,107,53,0.07)",
          border: "1px solid rgba(255,107,53,0.15)",
          borderRadius: 12,
          padding: "12px 16px",
        }}>
          <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 14, color: "rgba(255,107,53,0.9)", marginBottom: 4 }}>
            💡 Over de Cito eindtoets
          </div>
          <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            De eindtoets wordt gemaakt in groep 8. De vragen zijn op IEP/Cito-stijl:
            meerkeuze over rekenen, taal, begrijpend lezen en wereld oriëntatie.
            Vragen komen uit een vaste vragenbank — geen AI nodig.
          </div>
        </div>

      </div>
    </div>
  );
}

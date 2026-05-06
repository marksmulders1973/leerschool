import { useState } from "react";
import styles from "../styles.js";
import { SoundEngine } from "../utils.js";
import Header from "./Header.jsx";

// 3-staps flow voor Cito-voorbereiding (audit 2026-05-06):
//   1. Leer de aanpak  → opent het strategieën-leerpad
//   2. Oefen per onderdeel → onderdeel + aantal-vragen-kiezer (huidige flow)
//   3. Doe een eindtoets-simulatie → direct 50 vragen "alles gemengd"
// Voorheen was alles op één scherm, waardoor leerlingen "Alles gemengd"
// kozen zonder ooit de strategieën te zien.

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
    color: "var(--color-brand-primary)",
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
    leerpadId: "begrijpend-lezen-strategie",
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
  {
    id: "studievaardigheden",
    icon: "📊",
    label: "Studievaardigheden",
    sub: "Tabellen, grafieken, tijdlijnen, kaarten",
    color: "#e040fb",
    bg: "rgba(224,64,251,0.08)",
    border: "rgba(224,64,251,0.25)",
    subject: "studievaardigheden",
    topic: "Cito eindtoets studievaardigheden groep 7-8: tabellen lezen, grafieken interpreteren, tijdlijnen, kaarten",
  },
];

export default function CitoPage({ onStart, onBack, onHome, citoProgress = [], onPickPath }) {
  const [groep, setGroep] = useState("8");
  const [mode, setMode] = useState("kies"); // "kies" | "oefenen"
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

  const startSimulatie = () => {
    SoundEngine.play("click");
    const f = ONDERDELEN[0];
    onStart({
      citoId: f.id,
      groep,
      subject: f.subject,
      level: `groep${groep}`,
      questionCount: 50,
      timePerQuestion: 0,
      topic: f.topic,
    });
  };

  const startStrategie = () => {
    SoundEngine.play("click");
    if (onPickPath) onPickPath("cito-strategieen-groep8");
  };

  return (
    <div style={styles.page}>
      <Header
        title="Cito Oefenen 🎯"
        subtitle={mode === "oefenen" ? `Voorbereiding eindtoets groep ${groep}` : "Kies hoe je wilt oefenen"}
        onBack={mode === "oefenen" ? () => setMode("kies") : onBack}
        onHome={onHome}
      />

      <div style={{ padding: "16px 20px 40px", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Groep selector — altijd zichtbaar */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>
            Welke groep?
          </span>
          {["7", "8"].map(g => (
            <button key={g} onClick={() => setGroep(g)} style={{
              padding: "6px 18px", borderRadius: 10, cursor: "pointer",
              border: groep === g ? "2px solid #ff6b35" : "1px solid rgba(255,255,255,0.15)",
              background: groep === g ? "rgba(255,107,53,0.15)" : "rgba(255,255,255,0.05)",
              color: groep === g ? "#ff6b35" : "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
            }}>
              Groep {g}
            </button>
          ))}
        </div>

        {/* Stap 1: kies wat je wilt doen */}
        {mode === "kies" && (
          <>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginTop: 4 }}>
              Doe deze drie stappen op volgorde voor de beste voorbereiding op de Cito-eindtoets.
            </div>

            {/* Optie 1: leer de aanpak */}
            <button
              onClick={startStrategie}
              disabled={!onPickPath}
              style={{
                textAlign: "left",
                borderRadius: 18,
                border: "2px solid rgba(124,77,255,0.35)",
                background: "linear-gradient(135deg, rgba(124,77,255,0.13), rgba(124,77,255,0.06))",
                padding: "18px 20px",
                cursor: onPickPath ? "pointer" : "default",
                color: "var(--color-text)",
                display: "flex",
                alignItems: "center",
                gap: 16,
                opacity: onPickPath ? 1 : 0.6,
              }}
            >
              <span style={{ fontSize: 36 }}>📚</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(124,77,255,0.85)", fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase" }}>
                  Stap 1
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#a78bfa" }}>
                  Leer eerst de aanpak
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
                  7 korte uitleg-stappen: pacing, eliminatie, skim&scan — ~15 min
                </div>
              </div>
              <span style={{ fontSize: 20, color: "rgba(124,77,255,0.6)" }}>›</span>
            </button>

            {/* Optie 2: oefen per onderdeel */}
            <button
              onClick={() => { SoundEngine.play("click"); setMode("oefenen"); }}
              style={{
                textAlign: "left",
                borderRadius: 18,
                border: "2px solid rgba(0,200,83,0.35)",
                background: "linear-gradient(135deg, rgba(0,200,83,0.13), rgba(0,200,83,0.06))",
                padding: "18px 20px",
                cursor: "pointer",
                color: "var(--color-text)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 36 }}>🎯</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(0,200,83,0.85)", fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase" }}>
                  Stap 2
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--color-brand-primary-100)" }}>
                  Oefen per onderdeel
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
                  Rekenen, taal, begrijpend lezen, wereldoriëntatie — kies zelf hoe veel vragen
                </div>
              </div>
              <span style={{ fontSize: 20, color: "rgba(0,200,83,0.6)" }}>›</span>
            </button>

            {/* Optie 3: eindtoets-simulatie */}
            <button
              onClick={startSimulatie}
              style={{
                textAlign: "left",
                borderRadius: 18,
                border: "2px solid rgba(255,107,53,0.4)",
                background: "linear-gradient(135deg, rgba(255,107,53,0.18), rgba(255,140,66,0.08))",
                padding: "18px 20px",
                cursor: "pointer",
                color: "var(--color-text)",
                display: "flex",
                alignItems: "center",
                gap: 16,
              }}
            >
              <span style={{ fontSize: 36 }}>⏱️</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,107,53,0.95)", fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase" }}>
                  Stap 3
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#ff8c42" }}>
                  Doe een eindtoets-simulatie
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
                  50 vragen alles gemengd · 60 minuten countdown · advies-indicatie
                </div>
              </div>
              <span style={{ fontSize: 20, color: "rgba(255,107,53,0.6)" }}>›</span>
            </button>

            {/* Info-blokje */}
            <div style={{
              background: "rgba(255,107,53,0.07)",
              border: "1px solid rgba(255,107,53,0.15)",
              borderRadius: 12,
              padding: "12px 16px",
              marginTop: 4,
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "rgba(255,107,53,0.9)", marginBottom: 4 }}>
                💡 Over de Cito-eindtoets
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                De eindtoets wordt gemaakt in groep 8. De vragen zijn op IEP/Cito-stijl: meerkeuze over rekenen, taal, begrijpend lezen en wereldoriëntatie. Vragen komen uit een vaste vragenbank van 141+ items.
              </div>
            </div>
          </>
        )}

        {/* Stap 2-content: oefen per onderdeel */}
        {mode === "oefenen" && (
          <>
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
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, color: f.color }}>{f.label}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>{f.sub}</div>
                    {best !== null && (
                      <div style={{ marginTop: 4, display: "inline-block", padding: "2px 8px", borderRadius: 8, background: best >= 80 ? "rgba(0,200,83,0.2)" : "rgba(255,152,0,0.2)", border: `1px solid ${best >= 80 ? "rgba(0,200,83,0.4)" : "rgba(255,152,0,0.4)"}`, fontFamily: "var(--font-display)", fontSize: 12, color: best >= 80 ? "var(--color-brand-primary-100)" : "#ffb74d", fontWeight: 700 }}>
                        beste score: {best}%
                      </div>
                    )}
                  </div>
                  <div style={{
                    width: 24, height: 24, borderRadius: "50%",
                    border: `2px solid ${sel ? f.color : "rgba(255,255,255,0.2)"}`,
                    background: sel ? f.color : "transparent",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 14, color: "var(--color-text-strong)", flexShrink: 0,
                  }}>
                    {sel ? "✓" : ""}
                  </div>
                </div>
              );
            })()}

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.3)", fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5 }}>
                of kies een onderdeel
              </span>
              <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
            </div>

            {/* Onderdelen-grid */}
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
                          fontSize: 12, color: "var(--color-text-strong)",
                        }}>✓</div>
                      )}
                    </div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: f.color, lineHeight: 1.2 }}>
                      {f.label}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.45)", marginTop: 3 }}>
                      {f.sub}
                    </div>
                    {best !== null && (
                      <div style={{ marginTop: 5, padding: "2px 6px", borderRadius: 6, background: best >= 80 ? "rgba(0,200,83,0.18)" : "rgba(255,152,0,0.18)", fontFamily: "var(--font-display)", fontSize: 11, color: best >= 80 ? "var(--color-brand-primary-100)" : "#ffb74d", fontWeight: 700, display: "inline-block" }}>
                        {best >= 80 ? "✓" : "⚠"} {best}%
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Tip-link naar begrijpend-lezen-leerpad als dat onderdeel is gekozen */}
            {selected?.leerpadId && onPickPath && (
              <button
                onClick={() => { SoundEngine.play("click"); onPickPath(selected.leerpadId); }}
                style={{
                  borderRadius: 12,
                  border: "1px dashed rgba(245,158,11,0.4)",
                  background: "rgba(245,158,11,0.07)",
                  padding: "10px 14px",
                  cursor: "pointer",
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "#fbbf24",
                  textAlign: "left",
                }}
              >
                💡 Tip: leer eerst de <strong>aanpak voor begrijpend lezen</strong> (5 min)
              </button>
            )}

            {/* Aantal vragen — alleen als geen 50, want simulatie zit in Stap 3 */}
            <div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 700, marginBottom: 8 }}>
                Aantal vragen: <span style={{ color: "var(--color-text-strong)" }}>{questionCount}</span>
              </div>
              <div style={{ display: "flex", gap: 6 }}>
                {[5, 10, 15, 20].map(n => (
                  <button key={n} onClick={() => setQuestionCount(n)} style={{
                    flex: 1,
                    padding: "8px 0", borderRadius: 10, cursor: "pointer",
                    border: questionCount === n ? "2px solid #ff6b35" : "1px solid rgba(255,255,255,0.15)",
                    background: questionCount === n ? "rgba(255,107,53,0.15)" : "rgba(255,255,255,0.05)",
                    color: questionCount === n ? "#ff6b35" : "rgba(255,255,255,0.55)",
                    fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                  }}>
                    {n}
                  </button>
                ))}
              </div>
              <div style={{ marginTop: 6, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)", lineHeight: 1.4 }}>
                Voor de echte 50-vragen-simulatie met countdown: ga terug naar het hoofdscherm en kies <strong style={{ color: "#ff6b35" }}>Stap 3</strong>.
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
                color: selected ? "var(--color-text-strong)" : "rgba(255,255,255,0.3)",
                fontFamily: "var(--font-display)",
                fontSize: 18, fontWeight: 700, cursor: selected ? "pointer" : "default",
                boxShadow: selected ? "0 4px 20px rgba(255,107,53,0.4)" : "none",
                transition: "all 0.2s ease",
              }}
            >
              {selected ? `🚀 Start ${selected.label}` : "Kies een onderdeel om te starten"}
            </button>
          </>
        )}

      </div>
    </div>
  );
}

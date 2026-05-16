import { useState } from "react";
import styles from "../styles.js";
import { SoundEngine } from "../utils.js";
import Header from "./Header.jsx";
import DoorstroomtoetsLogo from "./DoorstroomtoetsLogo.jsx";

// Doorstroomtoets-voorbereidingsflow (gecombineerd 2026-05-16, idem ExamensPage):
//   Boven: 3 grote banners — Stap 1 (aanpak) / Stap 3 (50-simulatie) / Bonus
//   Midden: per onderdeel ÉÉN accordion-rij met dual-view:
//     - Links groen 📚 Leren-leerpaden
//     - Rechts paars 🎯 Proef-toets / oefenen-vragen
//   Geen mode-switch meer — alles op één scherm zichtbaar.

const ONDERDELEN = [
  {
    id: "rekenen",
    icon: "🔢",
    label: "Rekenen & Wiskunde",
    sub: "Breuken, meten, verbanden",
    color: "#00c853",
    subject: "rekenen",
    topic: "Doorstroomtoets rekenen en wiskunde groep 7-8: breuken, decimalen, meten, verbanden, meetkunde",
    leerpaden: [
      { id: "redactiesommen-pad", label: "🧮 Redactiesommen — Cito-stijl", dur: "~15 min" },
      { id: "procenten-po", label: "% Procenten", dur: "~12 min" },
      { id: "breuken-po", label: "🍕 Breuken", dur: "~12 min" },
      { id: "verhoudingen-po", label: "⚖️ Verhoudingen", dur: "~12 min" },
      { id: "maten-eenheden", label: "📏 Maten & eenheden", dur: "~15 min" },
      { id: "cijferend-rekenen", label: "✏️ Cijferend rekenen", dur: "~12 min" },
    ],
    proefToetsId: "doorstroomtoets-rekenen-g8",
  },
  {
    id: "taal",
    icon: "📝",
    label: "Taal",
    sub: "Spelling, grammatica, woordenschat",
    color: "#00b0ff",
    subject: "taal",
    topic: "Doorstroomtoets taal groep 7-8: spelling, werkwoorden, grammatica, woordenschat",
    leerpaden: [
      { id: "werkwoord-tijden-po", label: "🕐 Werkwoord-tijden", dur: "~12 min" },
      { id: "spelling-overige-po", label: "✒️ Spelling — leestekens & samenstellingen", dur: "~12 min" },
      { id: "woordsoorten-po", label: "🔤 Woordsoorten herkennen", dur: "~12 min" },
      { id: "woordenschat-po", label: "📚 Woordenschat", dur: "~12 min" },
    ],
    proefToetsId: "doorstroomtoets-taal-g8",
  },
  {
    id: "begrijpend-lezen",
    icon: "📖",
    label: "Begrijpend Lezen",
    sub: "Teksten begrijpen & analyseren",
    color: "#f59e0b",
    subject: "begrijpend-lezen",
    topic: "Doorstroomtoets begrijpend lezen groep 7-8: informatie opzoeken, hoofdgedachte, samenvatten",
    leerpaden: [
      { id: "begrijpend-lezen-teksten-po", label: "📚 Oefen met 4 echte teksten", dur: "~15 min" },
      { id: "begrijpend-lezen-strategie", label: "🧠 Leer eerst de aanpak", dur: "~5 min" },
    ],
    // Lezen valt onder Studievaardigheden in officiële Cito — geen aparte pool.
    proefToetsId: null,
  },
  {
    id: "wereldorientatie",
    icon: "🌍",
    label: "Wereld Oriëntatie",
    sub: "Aardrijkskunde, geschiedenis, natuur",
    color: "#2bbd7e",
    subject: "aardrijkskunde",
    topic: "Doorstroomtoets wereld oriëntatie groep 7-8: aardrijkskunde, geschiedenis, natuur & techniek",
    leerpaden: [
      { id: "topografie-nederland", label: "🇳🇱 Topografie Nederland", dur: "~15 min" },
      { id: "sterren-planeten", label: "🪐 Zonnestelsel & planeten", dur: "~12 min" },
      { id: "dieren-seizoenen-natuur", label: "🌿 Dieren & seizoenen", dur: "~15 min" },
    ],
    proefToetsId: null,
  },
  {
    id: "studievaardigheden",
    icon: "📊",
    label: "Studievaardigheden",
    sub: "Tabellen, grafieken, tijdlijnen, kaarten",
    color: "#e040fb",
    subject: "studievaardigheden",
    topic: "Doorstroomtoets studievaardigheden groep 7-8: tabellen lezen, grafieken interpreteren, tijdlijnen, kaarten",
    leerpaden: [
      { id: "samenvatten-hoofdgedachte-po", label: "💭 Samenvatten & hoofdgedachte", dur: "~12 min" },
      { id: "kaartlezen-po", label: "🗺️ Kaartlezen — kompas, schaal, legenda", dur: "~12 min" },
      { id: "schemas-stappenplannen-po", label: "📋 Schema's & stappenplannen", dur: "~12 min" },
      { id: "tabellen-grafieken", label: "📊 Tabellen & grafieken", dur: "~12 min" },
    ],
    proefToetsId: "doorstroomtoets-studievaardigheden-g8",
  },
];

export default function CitoPage({ onStart, onBack, onHome, citoProgress = [], onPickPath, onStartLeerpadToets, onStartProefToets }) {
  const [groep, setGroep] = useState("8");
  const [openOnderdelen, setOpenOnderdelen] = useState(() => new Set());
  const [vragenAantal, setVragenAantal] = useState({}); // per onderdeel-id

  const getBestScore = (id) => {
    const matches = citoProgress.filter((r) => r.citoId === id && r.citoGroep === groep);
    if (!matches.length) return null;
    return Math.max(...matches.map((r) => r.percentage));
  };

  const toggleOnderdeel = (id) => {
    setOpenOnderdelen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  const startOefenen = (onderdeel, count) => {
    SoundEngine.play("click");
    onStart({
      citoId: onderdeel.id,
      groep,
      subject: onderdeel.subject,
      level: `groep${groep}`,
      questionCount: count,
      timePerQuestion: 0,
      topic: onderdeel.topic,
    });
  };

  const startSimulatie = () => {
    SoundEngine.play("click");
    onStart({
      citoId: "gemengd",
      groep,
      subject: "cito",
      level: `groep${groep}`,
      questionCount: 50,
      timePerQuestion: 0,
      topic: "Doorstroomtoets: gemengde vragen over rekenen, taal, begrijpend lezen en wereld oriëntatie",
    });
  };

  const startStrategie = () => {
    SoundEngine.play("click");
    if (onPickPath) onPickPath("cito-strategieen-groep8");
  };

  return (
    <div style={styles.page}>
      <Header
        title={<span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>Doorstroomtoets oefenen <DoorstroomtoetsLogo size={32} /></span>}
        subtitle="Per onderdeel: leerpaden mét uitleg of een proef-toets"
        onBack={onBack}
        onHome={onHome}
      />

      <div style={{ padding: "16px 20px 40px", display: "flex", flexDirection: "column", gap: 16 }}>
        {/* Groep selector */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.5)", fontWeight: 700 }}>
              Welke groep?
            </span>
            {["7", "8"].map((g) => (
              <button
                key={g}
                onClick={() => setGroep(g)}
                style={{
                  padding: "6px 18px", borderRadius: 10, cursor: "pointer",
                  border: groep === g ? "2px solid #ff6b35" : "1px solid rgba(255,255,255,0.15)",
                  background: groep === g ? "rgba(255,107,53,0.15)" : "rgba(255,255,255,0.05)",
                  color: groep === g ? "#ff6b35" : "rgba(255,255,255,0.55)",
                  fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                }}
              >Groep {g}</button>
            ))}
          </div>
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 11.5,
            color: "rgba(255,255,255,0.45)", lineHeight: 1.4, paddingLeft: 2,
          }}>
            {groep === "7"
              ? "📅 Groep 7 = vroege voorbereiding. Je gaat de Doorstroomtoets pas in groep 8 maken — nu vast oefenen helpt."
              : "📅 Groep 8 = dit jaar Doorstroomtoets, begin februari. Je vooruitgang per groep wordt apart bijgehouden."}
          </div>
        </div>

        {/* ── Stap 1 + Stap 3 + Bonus banners ───────────────────────── */}
        <button
          onClick={startStrategie}
          disabled={!onPickPath}
          style={{
            textAlign: "left", borderRadius: 18,
            border: "2px solid rgba(124,77,255,0.35)",
            background: "linear-gradient(135deg, rgba(124,77,255,0.13), rgba(124,77,255,0.06))",
            padding: "16px 20px", cursor: onPickPath ? "pointer" : "default",
            color: "var(--color-text)",
            display: "flex", alignItems: "center", gap: 16,
            opacity: onPickPath ? 1 : 0.6,
          }}
        >
          <span style={{ fontSize: 34 }}>📚</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(124,77,255,0.85)", fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase" }}>Stap 1</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#a78bfa" }}>Leer eerst de aanpak</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
              7 korte uitleg-stappen: pacing, eliminatie, skim&scan — ~15 min
            </div>
          </div>
          <span style={{ fontSize: 20, color: "rgba(124,77,255,0.6)" }}>›</span>
        </button>

        <button
          onClick={startSimulatie}
          style={{
            textAlign: "left", borderRadius: 18,
            border: "2px solid rgba(255,107,53,0.4)",
            background: "linear-gradient(135deg, rgba(255,107,53,0.18), rgba(255,140,66,0.08))",
            padding: "16px 20px", cursor: "pointer", color: "var(--color-text)",
            display: "flex", alignItems: "center", gap: 16,
          }}
        >
          <span style={{ fontSize: 34 }}>⏱️</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,107,53,0.95)", fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase" }}>Stap 3</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#ff8c42" }}>Eindtoets-simulatie</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
              50 vragen alles gemengd · 60 minuten countdown · advies-indicatie
            </div>
          </div>
          <span style={{ fontSize: 20, color: "rgba(255,107,53,0.6)" }}>›</span>
        </button>

        {onStartLeerpadToets && (
          <button
            onClick={() => { SoundEngine.play("click"); onStartLeerpadToets(); }}
            style={{
              textAlign: "left", borderRadius: 18,
              border: "2px solid rgba(255,213,79,0.4)",
              background: "linear-gradient(135deg, rgba(255,213,79,0.15), rgba(255,179,0,0.06))",
              padding: "16px 20px", cursor: "pointer", color: "var(--color-text)",
              display: "flex", alignItems: "center", gap: 16,
            }}
          >
            <span style={{ fontSize: 34 }}>✨</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,213,79,0.95)", fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase" }}>Bonus</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "#ffd54f" }}>Mini-eindtoets uit leerpaden</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
                30 vragen uit Leerkwartier-paden · countdown · score per onderdeel
              </div>
            </div>
            <span style={{ fontSize: 20, color: "rgba(255,213,79,0.7)" }}>›</span>
          </button>
        )}

        {/* ── Stap 2: Per onderdeel — dual-view (📚 Leren | 🎯 Oefenen) ─── */}
        <div style={{ marginTop: 4 }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            padding: "12px 4px 8px",
            borderBottom: "1px solid rgba(0,200,83,0.4)",
            marginBottom: 12,
          }}>
            <span style={{ fontSize: 24 }}>🎯</span>
            <div>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: 11,
                color: "rgba(0,200,83,0.85)", fontWeight: 800,
                letterSpacing: 0.5, textTransform: "uppercase",
              }}>Stap 2</div>
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700,
                color: "var(--color-brand-primary-100)", margin: 0,
              }}>Oefen per onderdeel</h3>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2, lineHeight: 1.4 }}>
                Klap een onderdeel uit voor leerpaden mét uitleg óf een proef-toets.
              </div>
            </div>
          </div>

          {/* Legenda */}
          <div style={{
            display: "flex", flexWrap: "wrap", gap: 14, fontSize: 12,
            color: "rgba(255,255,255,0.55)", marginBottom: 12,
          }}>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: "rgba(245,158,11,0.25)", border: "1.5px solid #fbbf24" }} />
              <strong style={{ color: "#fbbf24" }}>📚 Leren</strong> — leerpaden mét uitleg
            </span>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: "rgba(0,176,255,0.25)", border: "1.5px solid #00b0ff" }} />
              <strong style={{ color: "#00b0ff" }}>🎯 Oefenen</strong> — Cito-stijl + proef-toets
            </span>
          </div>

          {ONDERDELEN.map((o) => {
            const isOpen = openOnderdelen.has(o.id);
            const best = getBestScore(o.id);
            const aantalLeerpaden = o.leerpaden?.length || 0;
            const heeftProef = !!(o.proefToetsId && onStartProefToets);
            return (
              <div key={o.id} style={{ marginBottom: 10 }}>
                <button
                  onClick={() => toggleOnderdeel(o.id)}
                  aria-expanded={isOpen}
                  style={{
                    display: "flex", alignItems: "center", gap: 10, width: "100%",
                    padding: "12px 14px",
                    marginBottom: isOpen ? 10 : 0,
                    background: isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                    border: `1px solid ${o.color}40`,
                    borderRadius: 10,
                    cursor: "pointer", color: "var(--color-text)", fontFamily: "var(--font-body)",
                    textAlign: "left", minHeight: 44,
                    transition: "background 0.15s",
                  }}
                  onMouseOver={(ev) => { ev.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
                  onMouseOut={(ev) => { ev.currentTarget.style.background = isOpen ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)"; }}
                >
                  <span style={{ fontSize: 22 }} aria-hidden="true">{o.icon}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                      color: o.color,
                    }}>{o.label}</div>
                    <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{o.sub}</div>
                  </div>
                  {best !== null && (
                    <span style={{
                      padding: "2px 8px", borderRadius: 999, fontSize: 11, fontWeight: 700,
                      background: best >= 80 ? "rgba(0,200,83,0.18)" : "rgba(255,152,0,0.18)",
                      color: best >= 80 ? "var(--color-brand-primary-100)" : "#ffb74d",
                    }}>{best >= 80 ? "✓" : "⚠"} {best}%</span>
                  )}
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: 11, fontWeight: 700,
                    color: aantalLeerpaden === 0 ? "rgba(255,255,255,0.4)" : "#fbbf24",
                    padding: "3px 8px", borderRadius: 999,
                    border: `1px solid ${aantalLeerpaden === 0 ? "rgba(255,255,255,0.15)" : "rgba(245,158,11,0.4)"}`,
                    background: aantalLeerpaden === 0 ? "transparent" : "rgba(245,158,11,0.10)",
                  }} title="Leerpaden mét uitleg">
                    📚 {aantalLeerpaden}
                  </span>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 4,
                    fontSize: 11, fontWeight: 700,
                    color: heeftProef ? "#00b0ff" : "rgba(255,255,255,0.4)",
                    padding: "3px 8px", borderRadius: 999,
                    border: `1px solid ${heeftProef ? "rgba(0,176,255,0.4)" : "rgba(255,255,255,0.15)"}`,
                    background: heeftProef ? "rgba(0,176,255,0.10)" : "transparent",
                  }} title={heeftProef ? "Proef-toets beschikbaar" : "Oefen-vragen beschikbaar"}>
                    🎯 {heeftProef ? "Proef" : "Vragen"}
                  </span>
                  <span style={{
                    fontSize: 14, color: "rgba(255,255,255,0.5)", marginLeft: 4,
                    transition: "transform 0.15s", display: "inline-block",
                    transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
                  }} aria-hidden="true">›</span>
                </button>
                {isOpen && (
                  <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                    gap: 10,
                  }}>
                    {/* Linker kolom: 📚 Leren */}
                    <div style={{
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: "1.5px solid rgba(245,158,11,0.4)",
                      background: "linear-gradient(135deg, rgba(245,158,11,0.12), rgba(245,158,11,0.04))",
                      display: "flex", flexDirection: "column", gap: 8,
                    }}>
                      <div style={{
                        fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                        color: "#fbbf24", textTransform: "uppercase", letterSpacing: 0.6,
                        display: "flex", alignItems: "center", gap: 6,
                      }}>
                        <span style={{ fontSize: 16 }}>📚</span>
                        Leren — kies een leerpad
                      </div>
                      {o.leerpaden && o.leerpaden.length > 0 ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                          {o.leerpaden.map((p, idx) => (
                            <button
                              key={p.id}
                              onClick={() => { SoundEngine.play("click"); if (onPickPath) onPickPath(p.id); }}
                              disabled={!onPickPath}
                              style={{
                                borderRadius: 10,
                                border: idx === 0 ? "2px solid rgba(245,158,11,0.55)" : "1px solid rgba(245,158,11,0.25)",
                                background: idx === 0 ? "rgba(245,158,11,0.14)" : "rgba(245,158,11,0.04)",
                                padding: "10px 12px",
                                cursor: onPickPath ? "pointer" : "default",
                                fontFamily: "var(--font-body)", fontSize: 13,
                                color: "#fbbf24",
                                textAlign: "left",
                                display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
                                minHeight: 40,
                              }}
                            >
                              <span style={{ fontWeight: idx === 0 ? 700 : 500 }}>{p.label}</span>
                              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{p.dur} ›</span>
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)" }}>
                          Geen leerpaden gekoppeld.
                        </div>
                      )}
                    </div>

                    {/* Rechter kolom: 🎯 Oefenen */}
                    <div style={{
                      padding: "12px 14px",
                      borderRadius: 12,
                      border: "1.5px solid rgba(0,176,255,0.4)",
                      background: "linear-gradient(135deg, rgba(0,176,255,0.12), rgba(0,176,255,0.04))",
                      display: "flex", flexDirection: "column", gap: 8,
                    }}>
                      <div style={{
                        fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                        color: "#00b0ff", textTransform: "uppercase", letterSpacing: 0.6,
                        display: "flex", alignItems: "center", gap: 6,
                      }}>
                        <span style={{ fontSize: 16 }}>🎯</span>
                        Oefenen — test je kennis
                      </div>

                      {/* Snel oefenen — aantal-kiezer */}
                      <div>
                        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", marginBottom: 4, fontFamily: "var(--font-body)" }}>
                          Snel oefenen — kies aantal:
                        </div>
                        <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
                          {[5, 10, 15, 20].map((n) => {
                            const active = (vragenAantal[o.id] || 10) === n;
                            return (
                              <button
                                key={n}
                                onClick={() => setVragenAantal((prev) => ({ ...prev, [o.id]: n }))}
                                style={{
                                  flex: 1,
                                  padding: "6px 0", borderRadius: 8, cursor: "pointer",
                                  border: active ? "1.5px solid #00b0ff" : "1px solid rgba(255,255,255,0.15)",
                                  background: active ? "rgba(0,176,255,0.18)" : "rgba(255,255,255,0.04)",
                                  color: active ? "#00b0ff" : "rgba(255,255,255,0.55)",
                                  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                                }}
                              >{n}</button>
                            );
                          })}
                        </div>
                        <button
                          onClick={() => startOefenen(o, vragenAantal[o.id] || 10)}
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: 10,
                            border: "1.5px solid rgba(0,176,255,0.55)",
                            background: "linear-gradient(135deg, rgba(0,176,255,0.22), rgba(0,176,255,0.08))",
                            color: "#00b0ff",
                            fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                            cursor: "pointer", minHeight: 40,
                            display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                          }}
                        >
                          🚀 Start {vragenAantal[o.id] || 10} vragen
                        </button>
                      </div>

                      {/* Proef-toets (alleen waar pool bestaat) */}
                      {heeftProef && (
                        <button
                          onClick={() => { SoundEngine.play("click"); onStartProefToets(o.proefToetsId); }}
                          style={{
                            width: "100%",
                            padding: "10px 14px",
                            borderRadius: 10,
                            border: "1.5px solid rgba(124,77,255,0.55)",
                            background: "linear-gradient(135deg, rgba(124,77,255,0.20), rgba(124,77,255,0.06))",
                            color: "#a78bfa",
                            fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                            cursor: "pointer", minHeight: 40,
                            display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                          }}
                          title="Proef-toets: 30 vragen, geen hints, examen-realisme"
                        >
                          <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            <span style={{ fontSize: 14 }}>🧪</span>
                            <span>Proef-toets — 30 vragen</span>
                          </span>
                          <span style={{
                            fontSize: 10, fontWeight: 600,
                            color: "rgba(167,139,250,0.85)",
                            textTransform: "uppercase", letterSpacing: 0.4,
                          }}>geen hints · examen-realisme</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Info-blokje */}
        <div style={{
          background: "rgba(255,107,53,0.07)",
          border: "1px solid rgba(255,107,53,0.15)",
          borderRadius: 12,
          padding: "12px 16px",
          marginTop: 4,
        }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "rgba(255,107,53,0.9)", marginBottom: 4 }}>
            💡 Over de Doorstroomtoets
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
            De Doorstroomtoets (sinds 2024 — vroeger Cito-eindtoets) wordt gemaakt in groep 8 (begin februari).
            Vragen zijn in Cito/IEP/Route 8-stijl: meerkeuze over rekenen, taal, begrijpend lezen en wereldoriëntatie.
            Vragen komen uit een vaste vragenbank van 450+ items.
          </div>
        </div>
      </div>
    </div>
  );
}

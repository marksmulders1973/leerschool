import { useState } from "react";
import styles from "../styles.js";
import { SoundEngine } from "../utils.js";
import Header from "./Header.jsx";
import DoorstroomtoetsLogo from "./DoorstroomtoetsLogo.jsx";

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
    topic: "Doorstroomtoets: gemengde vragen over rekenen, taal, begrijpend lezen en wereld oriëntatie (aardrijkskunde, geschiedenis, natuur)",
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
    topic: "Doorstroomtoets rekenen en wiskunde groep 7-8: breuken, decimalen, meten, verbanden, meetkunde",
    leerpaden: [
      { id: "redactiesommen-pad", label: "🧮 Redactiesommen — Cito-stijl", dur: "~15 min" },
      { id: "procenten-po", label: "% Procenten", dur: "~12 min" },
      { id: "breuken-po", label: "🍕 Breuken", dur: "~12 min" },
      { id: "verhoudingen-po", label: "⚖️ Verhoudingen", dur: "~12 min" },
      { id: "maten-eenheden", label: "📏 Maten & eenheden", dur: "~15 min" },
      { id: "cijferend-rekenen", label: "✏️ Cijferend rekenen", dur: "~12 min" },
    ],
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
    topic: "Doorstroomtoets taal groep 7-8: spelling, werkwoorden, grammatica, woordenschat",
    leerpaden: [
      { id: "werkwoord-tijden-po", label: "🕐 Werkwoord-tijden", dur: "~12 min" },
      { id: "spelling-overige-po", label: "✒️ Spelling — leestekens & samenstellingen", dur: "~12 min" },
      { id: "woordsoorten-po", label: "🔤 Woordsoorten herkennen", dur: "~12 min" },
      { id: "woordenschat-po", label: "📚 Woordenschat", dur: "~12 min" },
    ],
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
    topic: "Doorstroomtoets begrijpend lezen groep 7-8: informatie opzoeken, hoofdgedachte, samenvatten",
    // Twee leerpaden voor begrijpend lezen: oefenteksten (primair, ~12 min)
    // en strategie-pad (secundair, ~5 min). Audit-2 v2 cito-content-agent
    // wees uit dat alleen strategie te dun was voor Cito-prep.
    leerpaden: [
      { id: "begrijpend-lezen-teksten-po", label: "📚 Oefen met 4 echte teksten", dur: "~15 min" },
      { id: "begrijpend-lezen-strategie", label: "🧠 Leer eerst de aanpak", dur: "~5 min" },
    ],
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
    topic: "Doorstroomtoets wereld oriëntatie groep 7-8: aardrijkskunde, geschiedenis, natuur & techniek",
    leerpaden: [
      { id: "topografie-nederland", label: "🇳🇱 Topografie Nederland", dur: "~15 min" },
      { id: "sterren-planeten", label: "🪐 Zonnestelsel & planeten", dur: "~12 min" },
      { id: "dieren-seizoenen-natuur", label: "🌿 Dieren & seizoenen", dur: "~15 min" },
    ],
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
    topic: "Doorstroomtoets studievaardigheden groep 7-8: tabellen lezen, grafieken interpreteren, tijdlijnen, kaarten",
    leerpaden: [
      { id: "samenvatten-hoofdgedachte-po", label: "💭 Samenvatten & hoofdgedachte", dur: "~12 min" },
      { id: "kaartlezen-po", label: "🗺️ Kaartlezen — kompas, schaal, legenda", dur: "~12 min" },
      { id: "schemas-stappenplannen-po", label: "📋 Schema's & stappenplannen", dur: "~12 min" },
      { id: "tabellen-grafieken", label: "📊 Tabellen & grafieken", dur: "~12 min" },
    ],
  },
];

export default function CitoPage({ onStart, onBack, onHome, citoProgress = [], onPickPath, onStartLeerpadToets, onStartProefToets }) {
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
        title={<span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>Doorstroomtoets oefenen <DoorstroomtoetsLogo size={32} /></span>}
        subtitle={mode === "oefenen" ? `Voorbereiding eindtoets groep ${groep}` : "Kies hoe je wilt oefenen"}
        onBack={mode === "oefenen" ? () => setMode("kies") : onBack}
        onHome={onHome}
      />

      <div style={{ padding: "16px 20px 40px", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Groep selector — altijd zichtbaar. Mark 2026-05-12: hint-zin
            erbij omdat onduidelijk was wat groep 7 vs groep 8 voor
            verschil maakt. De Doorstroomtoets is officieel in groep 8;
            groep 7 = vroege voorbereiding (een jaar vooruit oefenen). */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
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
          <div style={{
            fontFamily: "var(--font-body)",
            fontSize: 11.5,
            color: "rgba(255,255,255,0.45)",
            lineHeight: 1.4,
            paddingLeft: 2,
          }}>
            {groep === "7"
              ? "📅 Groep 7 = vroege voorbereiding. Je gaat de Doorstroomtoets pas in groep 8 maken — nu vast oefenen helpt."
              : "📅 Groep 8 = dit jaar Doorstroomtoets, begin februari. Je vooruitgang per groep wordt apart bijgehouden."}
          </div>
        </div>

        {/* Stap 1: kies wat je wilt doen */}
        {mode === "kies" && (
          <>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginTop: 4 }}>
              Doe deze drie stappen op volgorde voor de beste voorbereiding op de Doorstroomtoets (voorheen Cito-eindtoets).
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
              <DoorstroomtoetsLogo size={40} />
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

            {/* Bonus: oefen-Cito uit eigen leerpad-checks (sprint C 2026-05-08) */}
            {onStartLeerpadToets && (
              <button
                onClick={() => { SoundEngine.play("click"); onStartLeerpadToets(); }}
                style={{
                  textAlign: "left",
                  borderRadius: 18,
                  border: "2px solid rgba(255,213,79,0.4)",
                  background: "linear-gradient(135deg, rgba(255,213,79,0.15), rgba(255,179,0,0.06))",
                  padding: "18px 20px",
                  cursor: "pointer",
                  color: "var(--color-text)",
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <span style={{ fontSize: 36 }}>✨</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,213,79,0.95)", fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase" }}>
                    Bonus
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#ffd54f" }}>
                    Mini-eindtoets uit leerpaden
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
                    30 vragen uit Leerkwartier-paden · countdown · score per onderdeel
                  </div>
                </div>
                <span style={{ fontSize: 20, color: "rgba(255,213,79,0.7)" }}>›</span>
              </button>
            )}

            {/* Proef-toets per onderdeel — uit Doorstroomtoets G8-pools */}
            {onStartProefToets && (
              <div style={{ marginTop: 4 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "rgba(0,176,255,0.85)", marginBottom: 8, marginLeft: 2 }}>
                  🎯 Proef-toets per onderdeel — 30 vragen, geen hulp
                </div>
                <div style={{ display: "grid", gap: 8 }}>
                  {[
                    { id: "doorstroomtoets-taal-g8", label: "Taal", icon: "📝", color: "#00b0ff" },
                    { id: "doorstroomtoets-rekenen-g8", label: "Rekenen", icon: "🔢", color: "#00c853" },
                    { id: "doorstroomtoets-studievaardigheden-g8", label: "Studievaardigheden", icon: "🗺️", color: "#ba68c8" },
                  ].map((o) => (
                    <button
                      key={o.id}
                      onClick={() => { SoundEngine.play("click"); onStartProefToets(o.id); }}
                      style={{
                        textAlign: "left",
                        borderRadius: 14,
                        border: `1.5px solid ${o.color}40`,
                        background: `${o.color}12`,
                        padding: "12px 16px",
                        cursor: "pointer",
                        color: "var(--color-text)",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span style={{ fontSize: 22 }}>{o.icon}</span>
                      <div style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: o.color }}>
                        Proef-toets {o.label}
                      </div>
                      <span style={{ fontSize: 16, color: `${o.color}aa` }}>›</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

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
                De Doorstroomtoets (sinds 2024 — vroeger Cito-eindtoets) wordt gemaakt in groep 8 (begin februari). De vragen zijn op Cito/IEP/Route 8-stijl: meerkeuze over rekenen, taal, begrijpend lezen en wereldoriëntatie. Vragen komen uit een vaste vragenbank van 141+ items.
              </div>
            </div>
          </>
        )}

        {/* Stap 2-content: oefen per onderdeel */}
        {mode === "oefenen" && (
          <>
            {/* "Alles gemengd"-featured-tegel verwijderd uit Stap 2 (audit 2,
                leerkracht-feedback): ondermijnde de 3-staps-logica omdat
                ongeduldige leerlingen direct doorklikten zonder een specifiek
                onderdeel te oefenen. Mengen kan nu via Stap 3 (eindtoets-
                simulatie) — link onderaan deze sectie. */}

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

            {/* Hint zodra geen onderdeel gekozen is */}
            {!selected && (
              <div style={{
                padding: "16px 18px",
                background: "rgba(255,255,255,0.03)",
                border: "1px dashed rgba(255,255,255,0.12)",
                borderRadius: 14,
                textAlign: "center",
                color: "rgba(255,255,255,0.5)",
                fontFamily: "var(--font-body)",
                fontSize: 13,
                lineHeight: 1.5,
              }}>
                👆 Tik een onderdeel hierboven aan — dan zie je per onderdeel<br/>
                <strong style={{ color: "#fbbf24" }}>📚 leren</strong> en <strong style={{ color: "#ff8c42" }}>🎯 oefenen</strong>.
              </div>
            )}

            {/* ── 📚 LEREN-blok ─────────────────────────────────────
                Alleen wanneer onderdeel geselecteerd én leerpaden beschikbaar.
                Audit-2 v2 + Mark's UX-feedback (2026-05-08): consistente
                leren↔oefenen-splitsing zoals in StudentHome. */}
            {selected && (selected.leerpaden || selected.leerpadId) && onPickPath && (
              <div style={{
                padding: "14px 16px",
                borderRadius: 16,
                background: "linear-gradient(135deg, rgba(245,158,11,0.10), rgba(245,158,11,0.04))",
                border: "1px solid rgba(245,158,11,0.3)",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 13, fontWeight: 700,
                  color: "#fbbf24",
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                  marginBottom: 4,
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{ fontSize: 16 }}>📚</span> Leren — Kies een leerpad
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginBottom: 10, fontFamily: "var(--font-body)" }}>
                  Eerst de stof oppakken voor je gaat oefenen.
                </div>

                {selected.leerpaden && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {selected.leerpaden.map((p, idx) => (
                      <button
                        key={p.id}
                        onClick={() => { SoundEngine.play("click"); onPickPath(p.id); }}
                        style={{
                          borderRadius: 10,
                          border: idx === 0 ? "2px solid rgba(245,158,11,0.55)" : "1px solid rgba(245,158,11,0.25)",
                          background: idx === 0 ? "rgba(245,158,11,0.14)" : "rgba(245,158,11,0.04)",
                          padding: "10px 12px",
                          cursor: "pointer",
                          fontFamily: "var(--font-body)",
                          fontSize: 13,
                          color: "#fbbf24",
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 10,
                        }}
                      >
                        <span style={{ fontWeight: idx === 0 ? 700 : 500 }}>{p.label}</span>
                        <span style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{p.dur} ›</span>
                      </button>
                    ))}
                  </div>
                )}

                {/* Backwards-compat: single leerpadId */}
                {selected.leerpadId && !selected.leerpaden && (
                  <button
                    onClick={() => { SoundEngine.play("click"); onPickPath(selected.leerpadId); }}
                    style={{
                      width: "100%",
                      borderRadius: 10,
                      border: "1px solid rgba(245,158,11,0.35)",
                      background: "rgba(245,158,11,0.08)",
                      padding: "10px 12px",
                      cursor: "pointer",
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "#fbbf24",
                      textAlign: "left",
                    }}
                  >
                    Open leerpad ›
                  </button>
                )}
              </div>
            )}

            {/* ── 🎯 OEFENEN-blok ─────────────────────────────────── */}
            {selected && (
              <div style={{
                padding: "14px 16px",
                borderRadius: 16,
                background: "linear-gradient(135deg, rgba(255,107,53,0.12), rgba(255,107,53,0.04))",
                border: "1px solid rgba(255,107,53,0.35)",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 13, fontWeight: 700,
                  color: "#ff8c42",
                  textTransform: "uppercase",
                  letterSpacing: 0.8,
                  marginBottom: 4,
                  display: "flex", alignItems: "center", gap: 8,
                }}>
                  <span style={{ fontSize: 16 }}>🎯</span> Oefenen — Test je kennis
                </div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", marginBottom: 10, fontFamily: "var(--font-body)" }}>
                  Cito-stijl meerkeuzevragen voor {selected.label.toLowerCase()}.
                </div>

                <div style={{ marginBottom: 10 }}>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", fontWeight: 700, marginBottom: 6 }}>
                    Aantal vragen: <span style={{ color: "var(--color-text-strong)" }}>{questionCount}</span>
                  </div>
                  <div style={{ display: "flex", gap: 6 }}>
                    {[5, 10, 15, 20].map(n => (
                      <button key={n} onClick={() => setQuestionCount(n)} style={{
                        flex: 1,
                        padding: "8px 0", borderRadius: 10, cursor: "pointer",
                        border: questionCount === n ? "2px solid #ff6b35" : "1px solid rgba(255,255,255,0.15)",
                        background: questionCount === n ? "rgba(255,107,53,0.18)" : "rgba(255,255,255,0.04)",
                        color: questionCount === n ? "#ff6b35" : "rgba(255,255,255,0.55)",
                        fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                      }}>
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleStart}
                  style={{
                    width: "100%", padding: "14px", borderRadius: 12, border: "none",
                    background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                    color: "var(--color-text-strong)",
                    fontFamily: "var(--font-display)",
                    fontSize: 16, fontWeight: 700, cursor: "pointer",
                    boxShadow: "0 4px 16px rgba(255,107,53,0.35)",
                  }}
                >
                  🚀 Start {questionCount} vragen
                </button>

                <div style={{ marginTop: 8, fontSize: 11, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-body)", lineHeight: 1.4, textAlign: "center" }}>
                  Voor de 50-vragen-simulatie met countdown: ga terug en kies <strong style={{ color: "#ff6b35" }}>Stap 3</strong>.
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

import { useState, useMemo } from "react";
import Header from "./Header.jsx";
import MdInline from "../shared/ui/MdInline.jsx";
import { track } from "../utils.js";
import { LADDER_THEMES, LADDER_NIVEAUS, LADDER_CONTENT } from "../data/begrijpendLezenOpbouwend.js";

// Begrijpend lezen — OPBOUWEND. Keuzescherm vooraf (onderwerp + startlengte),
// daarna een leesflow die per stap langer wordt. Voor wie gewone teksten te lang
// vindt (collega-wens 18 jun 2026). Zelfstandig scherm; teruglink naar de
// begrijpend-lezen-keuzepagina. Sober, geen sfeer-art (Cito-regel).

const C = {
  bg: "#0d1f3c",
  card: "#1a2a3a",
  border: "rgba(255,255,255,0.12)",
  text: "#e0e6f0",
  muted: "#8899aa",
  good: "#00c853",
  bad: "#ff5252",
  warm: "#ffd54f",
  accent: "#69f0ae",
};

export default function BegrijpendLezenLadder({ onBack, onHome, onNaarTeksten }) {
  const [mode, setMode] = useState("intro"); // intro | lezen | klaar
  const [theme, setTheme] = useState(LADDER_THEMES[0].id);
  const [startNiveau, setStartNiveau] = useState(0);

  // De treden die we deze ronde doorlopen: vanaf de gekozen startlengte t/m lang.
  const rungs = useMemo(() => {
    const all = LADDER_CONTENT[theme] || [];
    return all.map((r, i) => ({ ...r, niveau: i })).slice(startNiveau);
  }, [theme, startNiveau]);

  const [rungIdx, setRungIdx] = useState(0);
  const [qIdx, setQIdx] = useState(0);
  const [gekozen, setGekozen] = useState(null); // index van gekozen optie
  const [goedTeller, setGoedTeller] = useState(0);
  const [totaalTeller, setTotaalTeller] = useState(0);

  const themeMeta = LADDER_THEMES.find((t) => t.id === theme);
  const rung = rungs[rungIdx];
  const vraag = rung?.vragen[qIdx];
  const niveauMeta = rung ? LADDER_NIVEAUS[rung.niveau] : null;

  function start() {
    setRungIdx(0); setQIdx(0); setGekozen(null);
    setGoedTeller(0); setTotaalTeller(0);
    setMode("lezen");
    track("begrijpend_opbouwend_start", { onderwerp: theme, startlengte: startNiveau });
  }

  function kies(i) {
    if (gekozen !== null) return; // al beantwoord
    setGekozen(i);
    setTotaalTeller((n) => n + 1);
    if (i === vraag.antwoord) setGoedTeller((n) => n + 1);
  }

  function volgende() {
    setGekozen(null);
    if (qIdx + 1 < rung.vragen.length) {
      setQIdx(qIdx + 1);
    } else if (rungIdx + 1 < rungs.length) {
      setRungIdx(rungIdx + 1);
      setQIdx(0);
    } else {
      setMode("klaar");
      track("begrijpend_opbouwend_klaar", { onderwerp: theme, goed: goedTeller, totaal: totaalTeller });
    }
  }

  // ── Intro: keuzescherm met 2 dropdowns ──────────────────────────────
  if (mode === "intro") {
    return (
      <div style={pageStyle()}>
        <Header title="Begrijpend lezen — stap voor stap" subtitle="Begin kort, word steeds beter" onBack={onBack} onHome={onHome} />
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "4px 16px 36px", color: C.text }}>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.8)", marginBottom: 20 }}>
            Hier begin je met <strong>heel weinig tekst</strong>. Elke stap wordt het stukje
            een beetje langer, tot je een echte tekst leest. Kies eerst waar je over wilt lezen
            en hoe kort je wilt beginnen.
          </p>

          <label style={labelStyle}>Waar wil je over lezen?</label>
          <div style={{ position: "relative", marginBottom: 18 }}>
            <select value={theme} onChange={(e) => setTheme(e.target.value)} style={selectStyle} aria-label="Onderwerp">
              {LADDER_THEMES.map((t) => (
                <option key={t.id} value={t.id}>{t.icon} {t.label}</option>
              ))}
            </select>
            <span style={caretStyle} aria-hidden="true">▼</span>
          </div>

          <label style={labelStyle}>Hoe lang wil je beginnen?</label>
          <div style={{ position: "relative", marginBottom: 8 }}>
            <select value={startNiveau} onChange={(e) => setStartNiveau(Number(e.target.value))} style={selectStyle} aria-label="Startlengte">
              {LADDER_NIVEAUS.map((n) => (
                <option key={n.id} value={n.id}>{n.label} ({n.hint})</option>
              ))}
            </select>
            <span style={caretStyle} aria-hidden="true">▼</span>
          </div>
          <p style={{ fontSize: 12.5, color: C.muted, margin: "0 0 24px" }}>
            Tip: niet zeker? Begin gewoon bij <strong>Heel kort</strong> — het wordt vanzelf langer.
          </p>

          <button onClick={start} style={btnPrimary()}>📖 Start met lezen</button>
        </div>
      </div>
    );
  }

  // ── Klaar ───────────────────────────────────────────────────────────
  if (mode === "klaar") {
    const pct = totaalTeller ? Math.round((goedTeller / totaalTeller) * 100) : 0;
    return (
      <div style={pageStyle()}>
        <Header title="Knap gedaan! 🎉" subtitle="Je hebt de hele ladder gelezen" onBack={onBack} onHome={onHome} />
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "8px 16px 36px", color: C.text }}>
          <div style={{ ...cardStyle(), textAlign: "center", marginBottom: 18 }}>
            <div style={{ fontSize: 48, fontFamily: "var(--font-display)", fontWeight: 800, color: pct >= 70 ? C.good : C.warm }}>
              {goedTeller} / {totaalTeller}
            </div>
            <div style={{ fontSize: 14, color: C.muted, marginTop: 4 }}>vragen goed</div>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.82)", marginBottom: 22 }}>
            Je bent van een paar zinnen naar een echte tekst gegaan — zo word je steeds beter in
            langere teksten lezen. Klaar voor de echte oefenteksten?
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {onNaarTeksten && (
              <button onClick={onNaarTeksten} style={btnPrimary()}>📖 Nu een echte oefentekst proberen →</button>
            )}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button onClick={() => setMode("intro")} style={btnSecondary()}>🔄 Ander onderwerp</button>
              <button onClick={onBack} style={btnSecondary()}>← Terug</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Lezen ───────────────────────────────────────────────────────────
  const isGoed = gekozen !== null && gekozen === vraag.antwoord;
  return (
    <div style={pageStyle()}>
      <Header
        title={<span>{themeMeta?.icon} {themeMeta?.label}</span>}
        subtitle={`Stap ${rungIdx + 1} van ${rungs.length}`}
        onBack={onBack}
        onHome={onHome}
      />
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "4px 16px 40px", color: C.text }}>

        {/* Lengte-badge + voortgangsbalk */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
          <span style={{
            fontSize: 12, fontWeight: 700, color: C.accent,
            background: "rgba(105,240,174,0.12)", border: "1px solid rgba(105,240,174,0.3)",
            borderRadius: 999, padding: "4px 11px",
          }}>
            📏 {niveauMeta?.label} <span style={{ color: C.muted, fontWeight: 400 }}>· {niveauMeta?.hint}</span>
          </span>
          <span style={{ fontSize: 12, color: C.muted }}>Vraag {qIdx + 1} van {rung.vragen.length}</span>
        </div>
        <div style={{ height: 6, background: "rgba(255,255,255,0.1)", borderRadius: 999, overflow: "hidden", marginBottom: 18 }}>
          <div style={{
            width: `${((rungIdx + (qIdx + (gekozen !== null ? 1 : 0)) / rung.vragen.length) / rungs.length) * 100}%`,
            height: "100%", background: `linear-gradient(90deg, ${C.good}, ${C.accent})`, transition: "width 0.3s",
          }} />
        </div>

        {/* De leestekst (blijft staan tijdens het beantwoorden, zodat je kunt teruglezen) */}
        <div style={{
          ...cardStyle(),
          marginBottom: 16,
          fontSize: 15.5,
          lineHeight: 1.7,
          background: "rgba(255,255,255,0.05)",
        }}>
          {rung.tekst.split(/\n\n+/).map((para, i) => (
            <p key={i} style={{ marginBottom: i < rung.tekst.split(/\n\n+/).length - 1 ? 12 : 0 }}>
              <MdInline text={para} />
            </p>
          ))}
        </div>

        {/* De vraag */}
        <div style={{ fontFamily: "var(--font-display)", fontSize: 16.5, fontWeight: 700, marginBottom: 12, lineHeight: 1.4, color: "var(--color-text-strong)" }}>
          {vraag.vraag}
        </div>

        {vraag.opties.map((opt, i) => {
          const isCorrect = i === vraag.antwoord;
          const isPicked = i === gekozen;
          let bg = "rgba(255,255,255,0.04)", border = C.border, kleur = C.text;
          if (gekozen !== null) {
            if (isCorrect) { bg = "rgba(0,200,83,0.16)"; border = C.good; }
            else if (isPicked) { bg = "rgba(255,82,82,0.14)"; border = C.bad; }
            else { kleur = "rgba(255,255,255,0.5)"; }
          }
          return (
            <button
              key={i}
              onClick={() => kies(i)}
              disabled={gekozen !== null}
              style={{
                display: "flex", alignItems: "flex-start", gap: 10, width: "100%", textAlign: "left",
                padding: "13px 15px", marginBottom: 9, borderRadius: 12,
                background: bg, border: `2px solid ${border}`, color: kleur,
                fontFamily: "var(--font-body)", fontSize: 15,
                cursor: gekozen !== null ? "default" : "pointer", transition: "all 0.15s",
              }}
            >
              <span style={{ fontWeight: 700, color: gekozen !== null && isCorrect ? C.good : C.muted }}>
                {String.fromCharCode(65 + i)}.
              </span>
              <span style={{ flex: 1 }}><MdInline text={opt} /></span>
              {gekozen !== null && isCorrect && <span aria-hidden="true">✓</span>}
              {gekozen !== null && isPicked && !isCorrect && <span aria-hidden="true">✗</span>}
            </button>
          );
        })}

        {/* Feedback na antwoord */}
        {gekozen !== null && (
          <div style={{ marginTop: 6 }}>
            {!isGoed && vraag.hints?.[gekozen] && (
              <div style={{
                fontSize: 13.5, lineHeight: 1.5, color: C.warm,
                background: "rgba(255,213,79,0.08)", border: "1px solid rgba(255,213,79,0.25)",
                borderRadius: 10, padding: "10px 12px", marginBottom: 10,
              }}>
                💡 <MdInline text={vraag.hints[gekozen]} />
              </div>
            )}
            <div style={{
              fontSize: 13.5, lineHeight: 1.55, color: C.text,
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 10, padding: "10px 12px", marginBottom: 14,
            }}>
              <strong style={{ color: isGoed ? C.good : "#5db3ff" }}>{isGoed ? "Goed! " : "Uitleg: "}</strong>
              <MdInline text={vraag.uitleg} />
            </div>
            <button onClick={volgende} style={btnPrimary()}>
              {rungIdx + 1 === rungs.length && qIdx + 1 === rung.vragen.length ? "✓ Klaar" : "Volgende →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── styles ──
const labelStyle = { display: "block", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: C.text, marginBottom: 8 };
const selectStyle = {
  width: "100%", appearance: "none", WebkitAppearance: "none", MozAppearance: "none",
  padding: "13px 38px 13px 14px", borderRadius: 12, border: `1px solid ${C.border}`,
  background: C.card, color: C.text, fontFamily: "var(--font-body)", fontSize: 15, cursor: "pointer",
};
const caretStyle = { position: "absolute", right: 15, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: C.muted, fontSize: 12 };
function pageStyle() { return { minHeight: "100dvh", background: C.bg, fontFamily: "var(--font-body)", color: C.text }; }
function cardStyle() { return { background: C.card, border: `1px solid ${C.border}`, borderRadius: 14, padding: "14px 16px" }; }
function btnPrimary() {
  return {
    flex: "1 1 auto", padding: "14px 20px", borderRadius: 12, border: "none",
    background: "linear-gradient(135deg, #00c853, #69f0ae)", color: "#0a1525",
    fontFamily: "var(--font-display)", fontSize: 15.5, fontWeight: 800, cursor: "pointer",
  };
}
function btnSecondary() {
  return {
    flex: "0 0 auto", padding: "14px 20px", borderRadius: 12, border: `1px solid ${C.border}`,
    background: "rgba(255,255,255,0.06)", color: C.text,
    fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, cursor: "pointer",
  };
}

// ============================================================================
// HomeV2 — Design-direction proof voor Studiebol homepage.
//
// Doel: A/B-vergelijking met live HomePage.jsx zodat Mark de direction kan
// voelen ("tech/blueprint/Linear-stijl") zonder dat de live home iets verliest.
// Niet productie-klaar; alle styling is bewust inline + scoped tot deze view.
// Als richting raakt: tokens migreren naar shared/tokens.css en uitrollen.
//
// Direction:
//   - Mono-base (deep midnight) + één signaalkleur (cyan)
//   - Space Grotesk (display) + Inter (body) — geen Fredoka
//   - SVG line-icons — geen emoji op functionele knoppen
//   - 8-12px radii, dunnere borders, minder gradient/glow
//   - Eén primaire CTA per scherm; rest is monochroom + typografisch hiërarchisch
// ============================================================================

import { useNavigate } from "react-router-dom";
import { BRAND } from "../brand.js";

const FONTS_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
`;

const T = {
  bg: "#06080F",
  bgElevated: "#0F1320",
  bgCard: "rgba(255,255,255,0.025)",
  bgCardHover: "rgba(255,255,255,0.05)",
  border: "rgba(255,255,255,0.08)",
  borderStrong: "rgba(255,255,255,0.14)",
  borderAccent: "rgba(0,229,255,0.45)",
  text: "#E8EAED",
  textMuted: "#7A8090",
  textDim: "#525866",
  accent: "#00E5FF",
  accentDim: "#0099B0",
  accentSoft: "rgba(0,229,255,0.08)",
  fontDisplay: "'Space Grotesk', system-ui, sans-serif",
  fontBody: "'Inter', system-ui, sans-serif",
};

// ─── SVG line icons (Phosphor-stijl, één gewicht) ──────────────────────────
const Icon = {
  arrow: (size = 18) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  ),
  book: (size = 20) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5V4.5Z" />
      <line x1="8" y1="7" x2="16" y2="7" />
      <line x1="8" y1="11" x2="16" y2="11" />
    </svg>
  ),
  target: (size = 20) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  spark: (size = 20) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  ),
  cube: (size = 20) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5" />
      <line x1="12" y1="12" x2="12" y2="22" />
    </svg>
  ),
  letters: (size = 20) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18 8 6l5 12M5 14h6M14 18l4-12 4 12M16 14h4" />
    </svg>
  ),
  globe: (size = 20) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
    </svg>
  ),
  function: (size = 20) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4v0a3 3 0 0 0-3 3v3H3M6 10v7a3 3 0 0 1-3 3" />
      <line x1="11" y1="9" x2="20" y2="9" />
      <line x1="11" y1="15" x2="20" y2="15" />
    </svg>
  ),
  game: (size = 20) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 12h4M8 10v4" />
      <circle cx="16" cy="11" r="0.8" fill="currentColor" />
      <circle cx="14" cy="13" r="0.8" fill="currentColor" />
      <rect x="2" y="6" width="20" height="12" rx="6" />
    </svg>
  ),
  trophy: (size = 18) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h12v4a6 6 0 0 1-12 0V4Z" />
      <path d="M6 6H4a3 3 0 0 0 4 4M18 6h2a3 3 0 0 1-4 4" />
      <line x1="12" y1="14" x2="12" y2="18" />
      <path d="M9 21h6" />
            <line x1="12" y1="18" x2="12" y2="21" />
    </svg>
  ),
};

const VAKKEN = [
  { id: "leren",     label: "Leren",      sub: "uitleg + vraagje per onderwerp", icon: Icon.book,     primary: true },
  { id: "oefenen",   label: "Oefenen",    sub: "uit je schoolboek",         icon: Icon.target,   primary: true },
  { id: "ai",        label: "AI-vragen",  sub: "elk onderwerp, telkens anders", icon: Icon.spark, badge: "Nieuw" },
  { id: "cito",      label: "Cito",       sub: "rekenen · taal · wereld",   icon: Icon.target },
  { id: "wiskunde",  label: "Wiskunde",   sub: "klas 1 t/m 4",              icon: Icon.function },
  { id: "tafels",    label: "Tafels",     sub: "groep 3 t/m 6",             icon: Icon.cube },
  { id: "taal",      label: "Taal",       sub: "spelling · woordenschat",   icon: Icon.letters },
  { id: "wereld",    label: "Aardrijkskunde", sub: "klimaten · topografie", icon: Icon.globe },
];

export default function HomeV2() {
  const navigate = useNavigate();
  return (
    <>
      <style>{FONTS_CSS}</style>
      <div style={{
        minHeight: "100vh",
        background: T.bg,
        color: T.text,
        fontFamily: T.fontBody,
        fontSize: 15,
        lineHeight: 1.55,
        // Subtiele grid-overlay voor "blueprint"-feel
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)
        `,
        backgroundSize: "32px 32px",
      }}>

        {/* ─── Top bar ─── */}
        <header style={{
          padding: "20px 20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <div style={{
            fontFamily: T.fontDisplay,
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: -0.5,
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: 2,
              background: T.accent,
              boxShadow: `0 0 8px ${T.accent}`,
            }} />
            {BRAND.shortName}
          </div>
          <button
            onClick={() => navigate("/")}
            style={{
              background: "transparent",
              border: `1px solid ${T.border}`,
              color: T.textMuted,
              fontFamily: T.fontBody,
              fontSize: 12,
              padding: "6px 12px",
              borderRadius: 6,
              cursor: "pointer",
              letterSpacing: 0.3,
            }}
          >
            ← terug naar v1
          </button>
        </header>

        {/* ─── Hero ─── */}
        <section style={{
          padding: "56px 20px 32px",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <div style={{
            fontFamily: T.fontBody,
            fontSize: 11,
            fontWeight: 500,
            color: T.accent,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            v2 · design preview
          </div>
          <h1 style={{
            fontFamily: T.fontDisplay,
            fontSize: 44,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            margin: 0,
            color: T.text,
          }}>
            Leer de stof.<br />
            <span style={{ color: T.textMuted }}>Test het echt.</span>
          </h1>
          <p style={{
            fontFamily: T.fontBody,
            fontSize: 15,
            color: T.textMuted,
            margin: "20px 0 32px",
            maxWidth: 480,
            lineHeight: 1.6,
          }}>
            Per onderwerp eerst uitleg, dan een vraagje om te checken
            of het zit. Geen gokwerk, geen punten-jagen — gewoon zien
            of je het snapt.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              onClick={() => navigate("/leren")}
              style={{
                background: T.accent,
                color: "#001218",
                border: "none",
                padding: "14px 22px",
                borderRadius: 8,
                fontFamily: T.fontBody,
                fontSize: 15,
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                letterSpacing: -0.2,
                boxShadow: `0 0 24px ${T.accentSoft}`,
              }}
            >
              Begin met leren {Icon.arrow(16)}
            </button>
            <button
              onClick={() => navigate("/oefenen")}
              style={{
                background: "transparent",
                color: T.text,
                border: `1px solid ${T.borderStrong}`,
                padding: "14px 22px",
                borderRadius: 8,
                fontFamily: T.fontBody,
                fontSize: 15,
                fontWeight: 500,
                cursor: "pointer",
                letterSpacing: -0.2,
              }}
            >
              Oefenen uit je boek
            </button>
          </div>
        </section>

        {/* ─── Stats-strip ─── */}
        <section style={{
          padding: "0 20px 40px",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: T.border,
            border: `1px solid ${T.border}`,
            borderRadius: 8,
            overflow: "hidden",
          }}>
            {[
              { v: "12",    l: "vakken" },
              { v: "100+",  l: "schoolboeken" },
              { v: "po+vo", l: "tot examen" },
            ].map((s) => (
              <div key={s.l} style={{
                background: T.bgElevated,
                padding: "20px 12px",
                textAlign: "center",
              }}>
                <div style={{
                  fontFamily: T.fontDisplay,
                  fontSize: 28,
                  fontWeight: 600,
                  color: T.text,
                  letterSpacing: -0.5,
                  lineHeight: 1,
                }}>
                  {s.v}
                </div>
                <div style={{
                  fontFamily: T.fontBody,
                  fontSize: 11,
                  color: T.textMuted,
                  marginTop: 6,
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Vakken-grid ─── */}
        <section style={{
          padding: "0 20px 32px",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <div style={{
            fontFamily: T.fontBody,
            fontSize: 11,
            color: T.textMuted,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 16,
            fontWeight: 500,
          }}>
            Wat wil je doen
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
            gap: 10,
          }}>
            {VAKKEN.map((v) => (
              <button
                key={v.id}
                onClick={() => navigate(v.id === "leren" ? "/leren" : v.id === "oefenen" ? "/oefenen" : "/leren")}
                style={{
                  background: v.primary ? T.accentSoft : T.bgCard,
                  border: `1px solid ${v.primary ? T.borderAccent : T.border}`,
                  borderRadius: 10,
                  padding: "18px 16px",
                  textAlign: "left",
                  cursor: "pointer",
                  color: T.text,
                  fontFamily: T.fontBody,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "border-color 150ms ease, background 150ms ease",
                  position: "relative",
                  minHeight: 110,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.borderAccent;
                  e.currentTarget.style.background = v.primary ? T.accentSoft : T.bgCardHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = v.primary ? T.borderAccent : T.border;
                  e.currentTarget.style.background = v.primary ? T.accentSoft : T.bgCard;
                }}
              >
                {v.badge && (
                  <span style={{
                    position: "absolute",
                    top: 12, right: 12,
                    fontSize: 10,
                    fontFamily: T.fontBody,
                    color: T.accent,
                    background: T.accentSoft,
                    border: `1px solid ${T.borderAccent}`,
                    padding: "2px 8px",
                    borderRadius: 4,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}>
                    {v.badge}
                  </span>
                )}
                <span style={{
                  color: v.primary ? T.accent : T.textMuted,
                  display: "inline-flex",
                }}>
                  {v.icon(22)}
                </span>
                <div>
                  <div style={{
                    fontFamily: T.fontDisplay,
                    fontSize: 16,
                    fontWeight: 600,
                    color: T.text,
                    letterSpacing: -0.3,
                  }}>
                    {v.label}
                  </div>
                  <div style={{
                    fontSize: 12,
                    color: T.textMuted,
                    marginTop: 4,
                  }}>
                    {v.sub}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ─── Secondary actions ─── */}
        <section style={{
          padding: "0 20px 56px",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <div style={{
            display: "flex",
            gap: 10,
            flexWrap: "wrap",
          }}>
            <button
              onClick={() => navigate("/scorebord")}
              style={chipStyle()}
            >
              {Icon.trophy(14)} Scorebord
            </button>
            <button
              onClick={() => navigate("/voortgang")}
              style={chipStyle()}
            >
              {Icon.spark(14)} Mijn voortgang
            </button>
            <button
              onClick={() => navigate("/obliterator")}
              style={chipStyle({ accent: true })}
            >
              {Icon.game(14)} OBLITERATOR
            </button>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer style={{
          padding: "24px 20px 40px",
          maxWidth: 720,
          margin: "0 auto",
          borderTop: `1px solid ${T.border}`,
          textAlign: "center",
        }}>
          <div style={{
            fontFamily: T.fontBody,
            fontSize: 11,
            color: T.textDim,
            letterSpacing: 0.5,
          }}>
            {BRAND.shortName} · gratis · open · in ontwikkeling
          </div>
        </footer>
      </div>
    </>
  );
}

function chipStyle({ accent = false } = {}) {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: accent ? T.accentSoft : T.bgCard,
    border: `1px solid ${accent ? T.borderAccent : T.border}`,
    borderRadius: 999,
    padding: "8px 14px",
    color: accent ? T.accent : T.text,
    fontFamily: T.fontBody,
    fontSize: 13,
    fontWeight: 500,
    cursor: "pointer",
    letterSpacing: -0.1,
  };
}

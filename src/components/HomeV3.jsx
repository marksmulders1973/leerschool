// ============================================================================
// HomeV3 — Design-direction proof v3 (light + green + pill CTAs).
//
// Gedistilleerd uit research van Khan Academy, BBC Bitesize en Brilliant.org
// (top 3 self-study sites internationaal). Gemeenschappelijke patronen:
// lichte achtergrond, één brand-accent, eyebrow-text, pill-CTAs, witte cards
// met subtiele shadow ipv glassmorphism, mature maar niet kid-achtig.
//
// V3 vs V2:
//   - cream basis ipv deep-midnight
//   - Studiebol-groen brand-accent ipv cyan
//   - witte kaarten met box-shadow ipv transparante
//   - black pill primary-CTA ipv kleur-fill
//   - eyebrow-pattern boven elke titel
//
// Niet productie-klaar; alleen visuele proof voor A/B/C-vergelijking.
// ============================================================================

import { useNavigate } from "react-router-dom";
import { BRAND } from "../brand.js";

const FONTS_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap');
`;

const T = {
  bg: "#FAF8F3",          // warme cream — schoolboek-feel, geen pure wit (te steriel)
  bgElevated: "#FFFFFF",
  bgCard: "#FFFFFF",
  bgCardSubtle: "#F5F2EA",
  border: "rgba(15,22,35,0.08)",
  borderStrong: "rgba(15,22,35,0.14)",
  borderAccent: "#00C853",
  text: "#0F1623",
  textMuted: "#5C6573",
  textDim: "#8C95A3",
  accent: "#00C853",       // Studiebol-groen
  accentDark: "#00A040",
  accentSoft: "rgba(0,200,83,0.08)",
  ink: "#0F1623",          // donker voor pill CTAs
  fontDisplay: "'Space Grotesk', system-ui, sans-serif",
  fontBody: "'Inter', system-ui, sans-serif",
};

const Icon = {
  arrow: (size = 18) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="13 6 19 12 13 18" />
    </svg>
  ),
  book: (size = 22, fill = false) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v18H6.5A2.5 2.5 0 0 0 4 22.5V4.5Z" />
      {!fill && <line x1="8" y1="7" x2="16" y2="7" />}
      {!fill && <line x1="8" y1="11" x2="16" y2="11" />}
    </svg>
  ),
  target: (size = 22, fill = false) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.8" fill={fill ? "currentColor" : undefined} />
    </svg>
  ),
  spark: (size = 22) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  ),
  cube: (size = 22) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2 3 7v10l9 5 9-5V7l-9-5Z" />
      <path d="M3 7l9 5 9-5" />
      <line x1="12" y1="12" x2="12" y2="22" />
    </svg>
  ),
  letters: (size = 22) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18 8 6l5 12M5 14h6M14 18l4-12 4 12M16 14h4" />
    </svg>
  ),
  globe: (size = 22) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" />
    </svg>
  ),
  function: (size = 22) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4v0a3 3 0 0 0-3 3v3H3M6 10v7a3 3 0 0 1-3 3" />
      <line x1="11" y1="9" x2="20" y2="9" />
      <line x1="11" y1="15" x2="20" y2="15" />
    </svg>
  ),
  game: (size = 18) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 12h4M8 10v4" />
      <circle cx="16" cy="11" r="0.9" fill="currentColor" />
      <circle cx="14" cy="13" r="0.9" fill="currentColor" />
      <rect x="2" y="6" width="20" height="12" rx="6" />
    </svg>
  ),
  trophy: (size = 18) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h12v4a6 6 0 0 1-12 0V4Z" />
      <path d="M6 6H4a3 3 0 0 0 4 4M18 6h2a3 3 0 0 1-4 4" />
      <line x1="12" y1="14" x2="12" y2="18" />
      <path d="M9 21h6" />
    </svg>
  ),
  whatsapp: (size = 18) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1.1-.2.1-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.2-.5.1-.2 0-.3 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.5 4 1.6.7 2.2.7 3 .6.5-.1 1.6-.7 1.8-1.3.2-.6.2-1.2.1-1.3-.1-.1-.2-.2-.5-.3ZM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.6 1.4 5.1L2 22l5.1-1.3c1.5.8 3.2 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
    </svg>
  ),
};

// Vak-kleurpalet — elk onderwerp eigen accent (BBC-Bitesize-stijl). Lichte
// tints (#xxxxxx + 8% alpha) voor icon-tiles op wit, vol-kleur voor borders
// en hover. Studiebol-groen blijft brand-CTA en zit alleen op Leren/Oefenen.
const VAKKEN = [
  { id: "leren",     label: "Leren",      sub: "uitleg + vraagje per onderwerp", icon: Icon.book,     accent: "#00C853", primary: true, target: "/leren" },
  { id: "oefenen",   label: "Oefenen",    sub: "uit je schoolboek",         icon: Icon.target,   accent: "#00C853", primary: true, target: "/oefenen" },
  { id: "ai",        label: "AI-vragen",  sub: "elk onderwerp, telkens anders", icon: Icon.spark, accent: "#EC4899", badge: "Nieuw", target: "/leren" },
  { id: "cito",      label: "Cito",       sub: "rekenen · taal · wereld",   icon: Icon.target,   accent: "#8B5CF6", target: "/cito" },
  { id: "wiskunde",  label: "Wiskunde",   sub: "klas 1 t/m 4",              icon: Icon.function, accent: "#F97316", target: "/leren" },
  { id: "tafels",    label: "Tafels",     sub: "groep 3 t/m 6",             icon: Icon.cube,     accent: "#FB7185", target: "/tafels" },
  { id: "taal",      label: "Taal",       sub: "spelling · woordenschat",   icon: Icon.letters,  accent: "#3B82F6", target: "/leren" },
  { id: "wereld",    label: "Aardrijkskunde", sub: "klimaten · topografie", icon: Icon.globe,    accent: "#14B8A6", target: "/leren" },
];

/** Bouw een rgba(...) string uit een hex-kleur + alpha 0..1. */
function tint(hex, alpha) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function HomeV3() {
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
            color: T.text,
          }}>
            <span style={{
              width: 10, height: 10, borderRadius: 3,
              background: T.accent,
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
              borderRadius: 999,
              cursor: "pointer",
              letterSpacing: 0.3,
            }}
          >
            ← v1 / v2
          </button>
        </header>

        {/* ─── Hero ─── */}
        <section style={{
          padding: "48px 20px 24px",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <div style={{
            fontFamily: T.fontBody,
            fontSize: 11,
            fontWeight: 600,
            color: T.accent,
            letterSpacing: 2.5,
            textTransform: "uppercase",
            marginBottom: 16,
          }}>
            {BRAND.shortName} · v3 design
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
            margin: "20px 0 28px",
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
                background: T.ink,
                color: "#FFFFFF",
                border: "none",
                padding: "13px 22px",
                borderRadius: 999,
                fontFamily: T.fontBody,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                letterSpacing: -0.1,
              }}
            >
              Begin met leren {Icon.arrow(15)}
            </button>
            <button
              onClick={() => navigate("/oefenen")}
              style={{
                background: "transparent",
                color: T.text,
                border: `1.5px solid ${T.borderStrong}`,
                padding: "13px 22px",
                borderRadius: 999,
                fontFamily: T.fontBody,
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                letterSpacing: -0.1,
              }}
            >
              Oefenen uit je boek
            </button>
          </div>
        </section>

        {/* ─── Stats-strip ─── */}
        <section style={{
          padding: "0 20px 36px",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            background: T.bgCard,
            border: `1px solid ${T.border}`,
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 1px 3px rgba(15,22,35,0.04), 0 4px 16px rgba(15,22,35,0.04)",
          }}>
            {[
              { v: "12",    l: "vakken" },
              { v: "100+",  l: "schoolboeken" },
              { v: "po+vo", l: "tot examen" },
            ].map((s, i) => (
              <div key={s.l} style={{
                padding: "20px 12px",
                textAlign: "center",
                borderLeft: i > 0 ? `1px solid ${T.border}` : "none",
              }}>
                <div style={{
                  fontFamily: T.fontDisplay,
                  fontSize: 28,
                  fontWeight: 700,
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
                  fontWeight: 600,
                }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── Vakken-grid ─── */}
        <section style={{
          padding: "0 20px 28px",
          maxWidth: 720,
          margin: "0 auto",
        }}>
          <div style={{
            fontFamily: T.fontBody,
            fontSize: 11,
            color: T.textMuted,
            letterSpacing: 2,
            textTransform: "uppercase",
            marginBottom: 14,
            fontWeight: 600,
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
                onClick={() => navigate(v.target)}
                style={{
                  background: T.bgCard,
                  border: `1px solid ${v.primary ? tint(v.accent, 0.45) : T.border}`,
                  borderRadius: 14,
                  padding: "18px 16px",
                  textAlign: "left",
                  cursor: "pointer",
                  color: T.text,
                  fontFamily: T.fontBody,
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  transition: "border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease",
                  position: "relative",
                  minHeight: 110,
                  boxShadow: v.primary
                    ? `0 1px 2px ${tint(v.accent, 0.06)}, 0 4px 14px ${tint(v.accent, 0.12)}`
                    : "0 1px 2px rgba(15,22,35,0.04), 0 4px 14px rgba(15,22,35,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = v.accent;
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = `0 2px 4px ${tint(v.accent, 0.10)}, 0 8px 20px ${tint(v.accent, 0.18)}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = v.primary ? tint(v.accent, 0.45) : T.border;
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = v.primary
                    ? `0 1px 2px ${tint(v.accent, 0.06)}, 0 4px 14px ${tint(v.accent, 0.12)}`
                    : "0 1px 2px rgba(15,22,35,0.04), 0 4px 14px rgba(15,22,35,0.04)";
                }}
              >
                {v.badge && (
                  <span style={{
                    position: "absolute",
                    top: 12, right: 12,
                    fontSize: 10,
                    fontFamily: T.fontBody,
                    color: "#FFFFFF",
                    background: v.accent,
                    padding: "3px 9px",
                    borderRadius: 999,
                    letterSpacing: 0.5,
                    textTransform: "uppercase",
                    fontWeight: 700,
                  }}>
                    {v.badge}
                  </span>
                )}
                <span style={{
                  color: v.accent,
                  display: "inline-flex",
                  background: tint(v.accent, 0.10),
                  padding: 9,
                  borderRadius: 10,
                  width: "fit-content",
                }}>
                  {v.icon(20, true)}
                </span>
                <div>
                  <div style={{
                    fontFamily: T.fontDisplay,
                    fontSize: 16,
                    fontWeight: 700,
                    color: T.text,
                    letterSpacing: -0.3,
                  }}>
                    {v.label}
                  </div>
                  <div style={{
                    fontSize: 12.5,
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
            <button onClick={() => navigate("/scorebord")} style={chipStyle()}>
              {Icon.trophy(14)} Scorebord
            </button>
            <button onClick={() => navigate("/voortgang")} style={chipStyle()}>
              {Icon.spark(14)} Mijn voortgang
            </button>
            <button onClick={() => navigate("/obliterator")} style={chipStyle({ accent: true })}>
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
            fontSize: 12,
            color: T.textDim,
            letterSpacing: 0.3,
          }}>
            {BRAND.shortName} · gratis · open · in ontwikkeling
          </div>
        </footer>

        {/* ─── Floating WhatsApp helper (les van leersnel) ─── */}
        <a
          href={`https://wa.me/31000000000?text=${encodeURIComponent(`Hoi ${BRAND.name}, ik heb een vraag`)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Vraag via WhatsApp"
          style={{
            position: "fixed",
            bottom: 24,
            right: 20,
            width: 52,
            height: 52,
            borderRadius: "50%",
            background: "#25D366",
            color: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(37,211,102,0.40)",
            textDecoration: "none",
            zIndex: 50,
          }}
        >
          {Icon.whatsapp(24)}
        </a>
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
    padding: "9px 14px",
    color: accent ? T.accentDark : T.text,
    fontFamily: T.fontBody,
    fontSize: 13,
    fontWeight: 600,
    cursor: "pointer",
    letterSpacing: -0.1,
    boxShadow: "0 1px 2px rgba(15,22,35,0.04)",
  };
}

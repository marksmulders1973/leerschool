import { track } from "../utils.js";

// Bottom-tabs nav (Duolingo-style). Vier tabs: Home, Leren, Oefenen, OBLITERATOR.
// Design-system v1: tokens, tap-target ≥ 44px, glow-indicator op brand-primary.
// OBLITERATOR-tab krijgt altijd de oranje-gold gradient (matcht de
// START-knop in het spel) zodat 'ie er als feature-tab uitspringt.

const TABS = [
  { id: "home",    label: "Home",        emoji: "🏠", target: "home" },
  { id: "leren",   label: "Leren",       emoji: "📚", target: "learn-paths-hub" },
  { id: "oefenen", label: "Oefenen",     emoji: "🎯", target: "_oefenen" },
  { id: "spel",    label: "OBLITERATOR", emoji: "🛸", target: "obliteratorPlay", brand: true },
];

function bepaalActieveTab(page) {
  if (page === "home") return "home";
  if (page === "learn-paths-hub" || page === "learn-path" || page === "curriculum") return "leren";
  if (page === "obliteratorPlay" || page === "obliteratorDirect") return "spel";
  if ([
    "student-home", "teacher-home", "self-study",
    "textbook", "cito", "tafels", "redactiesommen",
    "spelling", "woordenschat", "begrijpend-lezen",
    "create-quiz", "quiz-preview", "class-manager", "lobby",
  ].includes(page)) return "oefenen";
  return null;
}

export default function BottomNav({ currentPage, onNavigate }) {
  const actief = bepaalActieveTab(currentPage);
  return (
    <nav
      aria-label="Hoofdnavigatie"
      style={{
        position: "fixed",
        bottom: 0, left: 0, right: 0,
        background: "rgba(11, 18, 36, 0.92)",
        borderTop: "1px solid var(--color-border-soft)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        zIndex: 100,
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div
        className="app-shell"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "stretch",
          minHeight: "var(--bottom-nav-height)",
        }}
      >
        {TABS.map((tab) => {
          const isActief = actief === tab.id;
          const isBrand = !!tab.brand;
          // Brand-tab krijgt altijd oranje look (matcht OBLITERATOR
          // start-knop). Andere tabs gebruiken normale design-system kleuren.
          const tabKleur = isBrand
            ? "#ff8030"
            : (isActief ? "var(--color-brand-primary-100)" : "var(--color-text-muted)");
          return (
            <button
              key={tab.id}
              type="button"
              aria-current={isActief ? "page" : undefined}
              onClick={() => { track("bottomnav_click", { tab: tab.id }); onNavigate(tab.target); }}
              style={{
                flex: 1,
                minWidth: "var(--tap-target-min)",
                padding: "var(--space-2) var(--space-1) var(--space-1)",
                border: "none",
                background: "transparent",
                color: tabKleur,
                fontFamily: "var(--font-display)",
                fontSize: isBrand ? "11px" : "var(--font-size-xs)",
                fontWeight: "var(--font-weight-bold)",
                letterSpacing: isBrand ? "1.2px" : "normal",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "color var(--motion-fast) var(--ease-out)",
                position: "relative",
                textShadow: isBrand ? "0 0 8px rgba(255, 100, 40, 0.6)" : "none",
              }}
            >
              {isActief && !isBrand && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0, left: "20%", right: "20%",
                    height: 3,
                    borderRadius: "0 0 3px 3px",
                    background:
                      "linear-gradient(90deg, var(--color-brand-primary), var(--color-brand-primary-100))",
                    boxShadow: "var(--shadow-glow-success)",
                  }}
                />
              )}
              {isActief && isBrand && (
                <span
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: 0, left: "20%", right: "20%",
                    height: 3,
                    borderRadius: "0 0 3px 3px",
                    background: "linear-gradient(90deg, #ffcc40, #ff5030)",
                    boxShadow: "0 0 12px rgba(255, 100, 40, 0.8)",
                  }}
                />
              )}
              <span
                aria-hidden="true"
                style={{
                  fontSize: 22,
                  opacity: isActief ? 1 : (isBrand ? 1 : 0.78),
                  transition: "opacity var(--motion-fast), transform var(--motion-fast) var(--ease-bounce)",
                  transform: isActief ? "scale(1.08)" : "scale(1)",
                  filter: isBrand ? "drop-shadow(0 0 6px rgba(255, 100, 40, 0.7))" : "none",
                }}
              >
                {tab.emoji}
              </span>
              <span style={isBrand ? {
                background: "linear-gradient(180deg, #fff 0%, #ffcc40 50%, #ff5030 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              } : undefined}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

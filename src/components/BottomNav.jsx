import { track } from "../utils.js";

// Bottom-tabs nav (Duolingo-style). Vier tabs: Home, Leren, Oefenen, Spel.
// Design-system v1: tokens, tap-target ≥ 44px, glow-indicator op brand-primary.

const TABS = [
  { id: "home",    label: "Home",    emoji: "🏠", target: "home" },
  { id: "leren",   label: "Leren",   emoji: "📚", target: "learn-paths-hub" },
  { id: "oefenen", label: "Oefenen", emoji: "🎯", target: "_oefenen" },
  { id: "spel",    label: "Spel",    emoji: "👾", target: "obliteratorPlay" },
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
                color: isActief ? "var(--color-brand-primary-100)" : "var(--color-text-muted)",
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-xs)",
                fontWeight: "var(--font-weight-bold)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "color var(--motion-fast) var(--ease-out)",
                position: "relative",
              }}
            >
              {isActief && (
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
              <span
                aria-hidden="true"
                style={{
                  fontSize: 22,
                  opacity: isActief ? 1 : 0.78,
                  transition: "opacity var(--motion-fast), transform var(--motion-fast) var(--ease-bounce)",
                  transform: isActief ? "scale(1.08)" : "scale(1)",
                }}
              >
                {tab.emoji}
              </span>
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

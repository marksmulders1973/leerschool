import { track } from "../utils.js";
import DoorstroomtoetsLogo from "./DoorstroomtoetsLogo.jsx";
import { gameVisibleForUser, urlHasGameDeepLink } from "../shared/featureFlags.js";

// Bottom-tabs nav (Duolingo-style). Maand 1 snoei (visie-bewaker 2026-05-10):
// alleen 3 tabs zichtbaar. UX-fix 2026-05-17: tabs heroverwogen na user-feedback.
// - "Home" wees naar marketing-pagina ipv eigen dashboard → nu sentinel "_home"
//   routeert ingelogden naar student-home, anon naar marketing-HomePage.
// - "Toets"-label opende eigenlijk student-home (verwarrend) → vervangen door
//   directe Doorstroomtoets-ingang (USP + ICP-focus uit CLAUDE.md).
//
// Reden Scorebord (Hall of Fame) eerder weggehaald: Cito-doelgroep is
// faalangst-gevoelig; vergelijking met klasgenoten = anti-leren. Component+route
// blijven bestaan (`leaderboard` page rendert nog), maar geen entry-point in nav.
//
// 2026-05-17 (Mark wens): OBLITERATOR weer als 4e tab — discoverability
// terug, beloning-spel naast leren. Niet meer alleen via /spel-deeplink.

const ALL_TABS = [
  { id: "home",            label: "Home",           emoji: "🏠", target: "_home" },
  { id: "leren",           label: "Leren",          emoji: "📚", target: "learn-paths-hub" },
  { id: "doorstroomtoets", label: "Doorstroomtoets", target: "cito", iconNode: <DoorstroomtoetsLogo size={24} /> },
  { id: "spel",            label: "Spel",           emoji: "🎮", target: "obliteratorPlay" },
];

function bepaalActieveTab(page) {
  if (page === "home" || page === "student-home" || page === "teacher-home") return "home";
  if (page === "learn-paths-hub" || page === "learn-path" || page === "curriculum") return "leren";
  if (page === "cito" || page === "cito-leerpad-toets") return "doorstroomtoets";
  if (page === "obliteratorPlay" || page === "obliteratorDirect" || page === "pvp-lobby") return "spel";
  return null;
}

export default function BottomNav({ currentPage, onNavigate, authUser }) {
  const actief = bepaalActieveTab(currentPage);
  // Filter game-related tabs voor niet-ingelogden als feature-flag aanstaat
  const gameZichtbaar = gameVisibleForUser(authUser, urlHasGameDeepLink());
  const TABS = gameZichtbaar ? ALL_TABS : ALL_TABS.filter((t) => !t.gameRelated);
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
          const heeftLangLabel = tab.label.length > 8;
          return (
            <button
              key={tab.id}
              type="button"
              aria-current={isActief ? "page" : undefined}
              onClick={() => { track("bottomnav_click", { tab: tab.id }); onNavigate(tab.target); }}
              style={{
                flex: 1,
                minWidth: 0,
                padding: "var(--space-2) 2px var(--space-1)",
                border: "none",
                background: "transparent",
                color: isActief ? "var(--color-brand-primary-100)" : "var(--color-text-muted)",
                fontFamily: "var(--font-display)",
                fontSize: heeftLangLabel ? "10px" : "var(--font-size-xs)",
                fontWeight: "var(--font-weight-bold)",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "color var(--motion-fast) var(--ease-out)",
                position: "relative",
                overflow: "hidden",
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
                  width: tab.iconNode ? 24 : "auto",
                  height: tab.iconNode ? 24 : "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: isActief ? 1 : 0.78,
                  transition: "opacity var(--motion-fast), transform var(--motion-fast) var(--ease-bounce)",
                  transform: isActief ? "scale(1.08)" : "scale(1)",
                }}
              >
                {tab.iconNode || tab.emoji}
              </span>
              <span style={{ whiteSpace: "nowrap" }}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

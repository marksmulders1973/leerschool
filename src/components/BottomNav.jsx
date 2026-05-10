import { track } from "../utils.js";
import QuizCardIcon from "../shared/ui/QuizCardIcon.jsx";
import { gameVisibleForUser, urlHasGameDeepLink } from "../shared/featureFlags.js";

// Bottom-tabs nav (Duolingo-style). Maand 1 snoei (visie-bewaker 2026-05-10):
// alleen 3 tabs zichtbaar — Home, Leren, Test. Scorebord en OBLITERATOR
// zijn weggehaald uit de standaard-flow.
//
// Reden Scorebord (Hall of Fame): Cito-doelgroep is faalangst-gevoelig;
// vergelijking met klasgenoten = anti-leren. Component+route blijven
// bestaan (`leaderboard` page rendert nog), maar geen entry-point in nav.
//
// Reden OBLITERATOR: niet onderdeel van Leerkwartier-product-flow.
// Eigen route `/spel` (obliteratorPlay) blijft werken voor Mark's zoon
// die er met AI aan bouwt. Geen tab in hoofd-nav.

const ALL_TABS = [
  { id: "home",    label: "Home",        emoji: "🏠", target: "home" },
  { id: "leren",   label: "Leren",       emoji: "📚", target: "learn-paths-hub" },
  { id: "oefenen", label: "Test",        emoji: "🎯", target: "_oefenen", iconSvg: <QuizCardIcon size={24} accent="#ff8030" /> },
];

function bepaalActieveTab(page) {
  if (page === "home") return "home";
  if (page === "learn-paths-hub" || page === "learn-path" || page === "curriculum") return "leren";
  if (page === "leaderboard") return "score";
  if (page === "obliteratorPlay" || page === "obliteratorDirect") return "spel";
  if ([
    "student-home", "teacher-home", "self-study",
    "textbook", "cito", "tafels", "redactiesommen",
    "spelling", "woordenschat", "begrijpend-lezen",
    "create-quiz", "quiz-preview", "class-manager", "lobby",
  ].includes(page)) return "oefenen";
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
                minWidth: 0,
                padding: "var(--space-2) 2px var(--space-1)",
                border: "none",
                background: "transparent",
                color: tabKleur,
                fontFamily: "var(--font-display)",
                fontSize: isBrand ? "10px" : "var(--font-size-xs)",
                fontWeight: "var(--font-weight-bold)",
                letterSpacing: isBrand ? "0.5px" : "normal",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "color var(--motion-fast) var(--ease-out)",
                position: "relative",
                textShadow: isBrand ? "0 0 8px rgba(255, 100, 40, 0.6)" : "none",
                overflow: "hidden",
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
                  width: tab.iconSvg ? 24 : "auto",
                  height: tab.iconSvg ? 24 : "auto",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: isActief ? 1 : (isBrand ? 1 : 0.78),
                  transition: "opacity var(--motion-fast), transform var(--motion-fast) var(--ease-bounce)",
                  transform: isActief ? "scale(1.08)" : "scale(1)",
                  filter: isBrand ? "drop-shadow(0 0 6px rgba(255, 100, 40, 0.7))" : "none",
                }}
              >
                {tab.iconSvg || tab.emoji}
              </span>
              <span style={{
                whiteSpace: "nowrap",
                ...(isBrand ? {
                  background: "linear-gradient(180deg, #fff 0%, #ffcc40 50%, #ff5030 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                } : {}),
              }}>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

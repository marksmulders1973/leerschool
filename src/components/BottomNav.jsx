import { track } from "../utils.js";

// Bottom-tabs nav (Duolingo-style). Vier tabs: Home, Leren, Oefenen, Kampioenen.
// Profiel-tab nog niet — pas toevoegen als er een echte profielpagina is.

const TABS = [
  { id: "home",       label: "Home",       emoji: "🏠", target: "home" },
  { id: "leren",      label: "Leren",      emoji: "📚", target: "learn-paths-hub" },
  { id: "oefenen",    label: "Oefenen",    emoji: "🎯", target: "_oefenen" }, // special: gaat naar leerling/teacher-home via App-handler
  { id: "kampioenen", label: "Kampioenen", emoji: "🏆", target: "kampioenen" },
];

// Map current page → welke tab visueel actief is.
function bepaalActieveTab(page) {
  if (page === "home") return "home";
  if (page === "learn-paths-hub" || page === "learn-path" || page === "curriculum") return "leren";
  if (page === "kampioenen" || page === "leaderboard" || page === "student-progress" || page === "teacher-progress") return "kampioenen";
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
      style={{
        position: "fixed",
        bottom: 0, left: 0, right: 0,
        background: "rgba(15,23,41,0.96)",
        borderTop: "1px solid rgba(255,255,255,0.10)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 100,
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="app-shell" style={{ width: "100%", display: "flex", justifyContent: "space-around", alignItems: "stretch" }}>
        {TABS.map((tab) => {
          const isActief = actief === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => { track("bottomnav_click", { tab: tab.id }); onNavigate(tab.target); }}
              style={{
                flex: 1,
                padding: "9px 4px 7px",
                border: "none",
                background: "transparent",
                color: isActief ? "#69f0ae" : "rgba(255,255,255,0.62)",
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                transition: "color 0.15s",
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
                    background: "linear-gradient(90deg, #00c853, #69f0ae)",
                    boxShadow: "0 0 8px rgba(105,240,174,0.6)",
                  }}
                />
              )}
              <span style={{ fontSize: 22, opacity: isActief ? 1 : 0.78, transition: "opacity 0.15s, transform 0.15s", transform: isActief ? "scale(1.05)" : "scale(1)" }}>
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

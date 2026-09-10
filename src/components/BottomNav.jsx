import { useState } from "react";
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
// Reden Scorebord (Hall of Fame) eerder weggehaald: Toets-doelgroep is
// faalangst-gevoelig; vergelijking met klasgenoten = anti-leren. Component+route
// blijven bestaan (`leaderboard` page rendert nog), maar geen entry-point in nav.
//
// 2026-05-17 (Mark wens): OBLITERATOR weer als 4e tab — discoverability
// terug, beloning-spel naast leren. Niet meer alleen via /spel-deeplink.
//
// 2026-05-20 (Mark feedback): Doorstroomtoets-tab weg uit bottom-nav. Reden:
// stond al onder leerling-tegel + CTA-balk op homepage → drie ingangen naar
// hetzelfde was verwarrend. Vervangen door "Toets maken" (leerkracht-route)
// als ontdekbare ingang naar de Pro-kritische leerkracht-flow.

// Rol-bewuste tabs (browsertest 2026-06-18: een LEERLING die op "Toets maken"
// klikte landde op het leerkracht-dashboard — verwarrend). Nu: alleen een
// leerkracht ziet "Toets maken" (→ teacher-home); leerling/ouder/onbekend krijgt
// "Toets" → de Doorstroomtoets-ingang (USP + ICP). Zelfde tab-id zodat de
// actief-markering simpel blijft.
function maakTabs(isTeacher) {
  return [
    { id: "home",        label: "Home",  emoji: "🏠", target: "_home" },
    { id: "leren",       label: "Leren", emoji: "📚", target: "learn-paths-hub" },
    isTeacher
      ? { id: "toets-maken", label: "Toets maken", emoji: "📝", target: "teacher-home" }
      : { id: "toets-maken", label: "Toets",       emoji: "📝", iconNode: <DoorstroomtoetsLogo size={24} />, target: "cito" },
    // 2026-05-17 review: gameRelated:true zodat tab verbergt voor anon-bezoeker
    // wanneer VITE_HIDE_GAME_FOR_GUESTS=true. Ingelogde leerling ziet 'm altijd.
    // 2026-07-25: parkKeuze-keuzescherm weg — OBLITERATOR is easter egg, tab gaat direct naar het park.
    { id: "park",        label: "Park",  emoji: "🐾", target: "zoo", gameRelated: true },
    // Mark 9 sep 2026: "kan daarbij printbaar en dictee?" — vijf knoppen is het
    // maximum op een telefoon, dus de vijfde is "Meer": een paneel met Dictee,
    // Printbaar, Tips (het wensenbord, sinds 5 jun een vaste ingang), Thuis,
    // Leerkracht en Zoeken. Tips blijft zo één tik verder bereikbaar.
    { id: "meer",        label: "Meer",  emoji: "➕", target: "_meer" },
  ];
}

const MEER_TEGELS = [
  { id: "dictee",     label: "Dictee",     emoji: "✍️", sub: "Charley zegt de zin, jij typt het woord", target: "dictee" },
  { id: "werkwoorden", label: "Werkwoorden", emoji: "🔤", sub: "werkwoordspellingtest zoals op school", target: "werkwoorden" },
  { id: "printen",    label: "Printbaar",  emoji: "🖨️", sub: "werkbladen, tafels, dictees, leesladder", target: "printen" },
  { id: "tips",       label: "Tips",       emoji: "💬", sub: "wens of tip voor de maker", target: "wishes" },
  { id: "ouder",      label: "Thuis",      emoji: "👪", sub: "voor ouder of verzorger", target: "ouder-dashboard" },
  { id: "leerkracht", label: "Leerkracht", emoji: "🧑‍🏫", sub: "klas, toets maken, parkcode", target: "teacher-home" },
  { id: "zoeken",     label: "Zoeken",     emoji: "🔎", sub: "vind een onderwerp of pagina", target: "learn-paths-hub" },
];

function bepaalActieveTab(page) {
  // student-home telt NIET als "Home" (Mark 7 aug 2026): de Home-tab lichtte
  // daar op alsof je al op de homepage stond — niemand tikte er dus nog op
  // en er leek geen weg naar de echte home. Nu is de tab daar gewoon tikbaar.
  if (page === "home") return "home";
  if (page === "learn-paths-hub" || page === "learn-path" || page === "curriculum") return "leren";
  if (page === "teacher-home" || page === "create-quiz" || page === "quiz-preview" || page === "cito") return "toets-maken";
  if (page === "zoo" || page === "spellen" || page === "supporterGame" || page === "obliteratorPlay" || page === "obliteratorDirect" || page === "pvp-lobby") return "park";
  if (["wishes", "dictee", "werkwoorden", "printen", "tafelbladen", "redactiebladen", "dictees", "ouder-dashboard"].includes(page)) return "meer";
  return null;
}

export default function BottomNav({ currentPage, onNavigate, authUser, role }) {
  const actief = bepaalActieveTab(currentPage);
  const [meerOpen, setMeerOpen] = useState(false);
  const kies = (tab) => {
    track("bottomnav_click", { tab: tab.id });
    if (tab.target === "_meer") { setMeerOpen((v) => !v); return; }
    setMeerOpen(false);
    onNavigate(tab.target);
  };
  // Rol-bewuste tabs: alleen leerkracht ziet "Toets maken" (→ teacher-home).
  const isTeacher = role === "teacher" || role === "leerkracht";
  const ALL_TABS = maakTabs(isTeacher);
  // Filter game-related tabs voor niet-ingelogden als feature-flag aanstaat
  const gameZichtbaar = gameVisibleForUser(authUser, urlHasGameDeepLink());
  const TABS = gameZichtbaar ? ALL_TABS : ALL_TABS.filter((t) => !t.gameRelated);
  return (
    <>
    {meerOpen && (
      <div onClick={() => setMeerOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(0,0,0,.45)" }}>
        <div onClick={(e) => e.stopPropagation()} className="app-shell" style={{ position: "absolute", left: 0, right: 0, bottom: "calc(var(--bottom-nav-height) + env(safe-area-inset-bottom))", margin: "0 auto", background: "rgba(11, 18, 36, 0.97)", borderTop: "1px solid var(--color-border-soft)", borderRadius: "18px 18px 0 0", padding: "14px 14px 16px", boxShadow: "0 -8px 24px rgba(0,0,0,.4)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
            {MEER_TEGELS.map((t) => (
              <button key={t.id} type="button" onClick={() => { track("bottomnav_meer", { tegel: t.id }); setMeerOpen(false); onNavigate(t.target); }}
                style={{ border: "1px solid rgba(255,255,255,0.14)", background: "rgba(255,255,255,0.06)", borderRadius: 14, padding: "12px 6px 10px", color: "#fff", cursor: "pointer", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, minHeight: 84 }}>
                <span aria-hidden="true" style={{ fontSize: 26, lineHeight: 1 }}>{t.emoji}</span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 800 }}>{t.label}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 10.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.25, textAlign: "center" }}>{t.sub}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    )}
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
              onClick={() => kies(tab)}
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
    </>
  );
}

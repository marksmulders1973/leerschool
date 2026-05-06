// DailyChallengeBanner — homepage-banner die streak + dagelijkse 5-min
// challenge toont. Brilliant/Duolingo-pattern: dagelijks contact-moment dat
// retentie aanjaagt. Onder de motorkap hergebruikt het bestaande mastery
// `recommendNextTopic` (spaced-repetition / due topics) — dus geen nieuwe
// content-laag, alleen een motivationeel framing.
//
// Drie states (op volgorde van prioriteit):
//   - "GEDAAN"  — vandaag al actief geweest, streak veilig
//   - "ACTIEF"  — heeft streak van >0, vandaag nog niet gedaan, "Niet verbreken!"
//   - "NIEUW"   — geen streak nog, "Begin je eerste 15 minuten"
//
// Klik → onStart() (HomePage routeert naar topic of leerpaden-hub).

import { useEffect, useState } from "react";
import { loadMasteryForPlayer, recommendNextTopic, loadDueTopics } from "./mastery.js";
import { ALL_LEARN_PATHS } from "../../learnPaths/index.js";
import { track } from "../../utils.js";

const TODAY_KEY = () => new Date().toISOString().split("T")[0];
const YESTERDAY_KEY = () => new Date(Date.now() - 86400000).toISOString().split("T")[0];

function readLocalStreak() {
  try {
    const s = JSON.parse(localStorage.getItem("ls_streak") || '{"streak":0,"last":""}');
    return { streak: Number(s.streak || 0), last: String(s.last || "") };
  } catch {
    return { streak: 0, last: "" };
  }
}

function deriveState({ streak, last }) {
  const today = TODAY_KEY();
  const yesterday = YESTERDAY_KEY();
  if (last === today) return "GEDAAN";          // vandaag al gedaan
  if (last === yesterday && streak > 0) return "ACTIEF"; // gisteren actief, vandaag nog niet
  if (streak === 0) return "NIEUW";             // nog nooit
  // streak > 0 maar last < gisteren = streak gebroken — toon als NIEUW (laat 'm
  // niet zeuren over een verloren streak).
  return "NIEUW";
}

export default function DailyChallengeBanner({ userName, onStart }) {
  const player = (userName || "").trim();
  const [streakInfo, setStreakInfo] = useState(() => readLocalStreak());
  const [recommended, setRecommended] = useState(null);
  const [dueCount, setDueCount] = useState(0);

  // Mastery-aanbeveling + aantal due topics laden. dueCount maakt voor de
  // leerling expliciet zichtbaar dat de app onthoudt wat herhaald moet worden
  // (audit 2026-05-06: spaced-rep was niet zichtbaar voor de gebruiker).
  useEffect(() => {
    let cancelled = false;
    if (!player) return;
    (async () => {
      try {
        const [masteryData, dueData] = await Promise.all([
          loadMasteryForPlayer(player),
          loadDueTopics(player),
        ]);
        if (cancelled) return;
        setRecommended(recommendNextTopic(masteryData) || null);
        setDueCount(dueData.length);
      } catch {
        if (!cancelled) {
          setRecommended(null);
          setDueCount(0);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [player]);

  // localStorage kan tussen tabs/sessies wijzigen; refresh bij focus.
  useEffect(() => {
    const refresh = () => setStreakInfo(readLocalStreak());
    window.addEventListener("focus", refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener("focus", refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  if (!player) return null;

  const state = deriveState(streakInfo);
  const recommendedPath = recommended ? ALL_LEARN_PATHS[recommended.pathId] : null;

  // Visuele states
  const variants = {
    GEDAAN: {
      bg: "linear-gradient(135deg, rgba(0,200,83,0.18), rgba(0,200,83,0.10))",
      border: "rgba(0,200,83,0.45)",
      flame: "rgba(255,213,79,0.65)",
      eyebrow: "VANDAAG ✓ GEDAAN",
      eyebrowColor: "#69F0AE",
      title: streakInfo.streak === 1
        ? "Streak gestart 🎉"
        : `${streakInfo.streak} dagen op rij`,
      sub: "Mooi — je hebt je 15 minuten van vandaag al gedaan.",
      cta: null,
    },
    ACTIEF: {
      bg: "linear-gradient(135deg, #ff6b35, #ef6c00)",
      border: "#ef6c00",
      flame: "#ffd54f",
      eyebrow: "STREAK NIET VERBREKEN",
      eyebrowColor: "#fff",
      title: `${streakInfo.streak} dagen 🔥 — doe je 15 min`,
      sub: dueCount > 0
        ? `${dueCount} ${dueCount === 1 ? "onderwerp" : "onderwerpen"} klaar om te herhalen${recommendedPath ? ` — start met ${recommendedPath.title}` : ""}`
        : (recommendedPath
          ? `Vandaag: ${recommendedPath.title}`
          : "Een paar vragen om de streak te houden"),
      cta: "Start nu",
    },
    NIEUW: {
      bg: "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-700))",
      border: "var(--color-brand-primary-700)",
      flame: "#ffd54f",
      eyebrow: "DAGELIJKSE UITDAGING",
      eyebrowColor: "rgba(255,255,255,0.85)",
      title: "15 minuten per dag",
      sub: "Begin je streak — een paar vragen, klein en concreet.",
      cta: "Start vandaag",
    },
  };
  const v = variants[state];

  const handleClick = () => {
    if (state === "GEDAAN") return; // niet-klikbaar in done-state
    track("home_daily_challenge_click", {
      state,
      streak: streakInfo.streak,
      pathId: recommended?.pathId || null,
    });
    onStart?.(recommended?.pathId || null);
  };

  const isClickable = state !== "GEDAAN";

  return (
    <button
      type="button"
      onClick={isClickable ? handleClick : undefined}
      aria-disabled={!isClickable}
      style={{
        width: "100%",
        maxWidth: 560,
        marginBottom: "var(--space-3)",
        padding: "12px 16px",
        borderRadius: "var(--radius-md)",
        border: `1px solid ${v.border}`,
        background: v.bg,
        color: "var(--color-text-strong)",
        cursor: isClickable ? "pointer" : "default",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: 14,
        fontFamily: "var(--font-body)",
        boxShadow: state === "GEDAAN" ? "none" : "var(--shadow-md)",
        transition: "transform var(--motion-fast) var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        if (isClickable) e.currentTarget.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Flame + streak number */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 48,
      }}>
        <span style={{
          fontSize: 28,
          lineHeight: 1,
          filter: state === "GEDAAN" ? "saturate(0.6)" : "none",
        }} aria-hidden="true">
          🔥
        </span>
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: 18,
          fontWeight: 700,
          marginTop: 2,
          color: v.flame,
        }}>
          {streakInfo.streak}
        </span>
      </div>

      {/* Tekst */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{
          fontSize: 10,
          fontWeight: 700,
          color: v.eyebrowColor,
          letterSpacing: 1.5,
          marginBottom: 2,
        }}>
          {v.eyebrow}
        </div>
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: 16,
          fontWeight: 700,
          lineHeight: 1.2,
        }}>
          {v.title}
        </div>
        <div style={{
          fontSize: 12,
          opacity: 0.92,
          marginTop: 3,
          lineHeight: 1.35,
        }}>
          {v.sub}
        </div>
      </div>

      {/* CTA-pijl alleen wanneer klikbaar */}
      {v.cta && (
        <span style={{
          fontFamily: "var(--font-display)",
          fontSize: 12,
          fontWeight: 700,
          padding: "6px 10px",
          borderRadius: 999,
          background: "rgba(255,255,255,0.18)",
          border: "1px solid rgba(255,255,255,0.28)",
          whiteSpace: "nowrap",
        }}>
          {v.cta} →
        </span>
      )}
    </button>
  );
}

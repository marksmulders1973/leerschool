import { useEffect, useState } from "react";
import { loadMasteryForPlayer, recommendNextTopic, MASTERY_LABELS } from "./mastery.js";
import { ALL_LEARN_PATHS } from "../../learnPaths/index.js";
import { track } from "../../utils.js";
import { subjectMeta } from "../../shared/subjects.js";

/**
 * MasteryCTABanner — éérste primaire CTA op homepage voor terugkerende
 * leerlingen (P1.6 uit rebuild-roadmap).
 *
 * Gedraagt zich als volgt:
 *   - Geen player-naam? → niets renderen (nieuwe bezoeker, andere flow).
 *   - Mastery-records leeg? → "Begin met..." (kleine nudge, geen verplichting).
 *   - Heeft records? → "Vandaag werken aan: [pad]" met % en niveau.
 *
 * Klik → onPickPath(pathId) — App.jsx routeert naar leerpad-stap.
 *
 * Design-system v1: gebruikt brand-tokens. Refresher-CTA krijgt warning-tone
 * (oranje warning, niet game-energy — dit blijft een leer-component).
 */
export default function MasteryCTABanner({ userName, onPickPath, onStartFirst }) {
  const player = (userName || "").trim();
  const [records, setRecords] = useState(null); // null = nog niet geladen
  const [recommended, setRecommended] = useState(null);

  useEffect(() => {
    let cancelled = false;
    if (!player) {
      setRecords([]);
      setRecommended(null);
      return;
    }
    (async () => {
      const data = await loadMasteryForPlayer(player);
      if (cancelled) return;
      setRecords(data);
      setRecommended(recommendNextTopic(data));
    })();
    return () => {
      cancelled = true;
    };
  }, [player]);

  if (!player) return null;
  if (records === null) return null;
  // Empty-state ("Hoi X — maak je eerste toets") niet meer tonen — voelde leeg
  // voor terugkerende admin/test-users. Banner verschijnt alleen als er echte
  // mastery-data is om over te raden.
  if (!recommended) return null;

  return <RecommendedCard player={player} record={recommended} onPickPath={onPickPath} />;
}

function FirstTimeNudge({ userName, onStart }) {
  return (
    <button
      type="button"
      onClick={onStart}
      style={{
        width: "100%",
        maxWidth: 360,
        marginBottom: "var(--space-4)",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-lg)",
        background: "var(--color-success-soft)",
        border: "1px solid var(--color-brand-primary)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--font-size-sm)",
        textAlign: "center",
        cursor: onStart ? "pointer" : "default",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: "var(--font-weight-bold)",
          fontSize: "var(--font-size-md)",
          color: "var(--color-text-strong)",
          marginBottom: 4,
        }}
      >
        Hoi {userName} 👋
      </div>
      <div>Maak je eerste toets — je voortgang verschijnt hier.</div>
    </button>
  );
}

function RecommendedCard({ player, record, onPickPath }) {
  const path = record.path || ALL_LEARN_PATHS[record.pathId];
  if (!path) return null;
  const meta = MASTERY_LABELS[record.level];
  const subj = subjectMeta(path.subject);
  const pct = record.attempts > 0 ? Math.round((record.correct / record.attempts) * 100) : 0;
  const isRefresher = record.reason === "due";

  const handleClick = () => {
    track("home_mastery_cta_click", {
      pathId: record.pathId,
      level: record.level,
      reason: record.reason || "level",
    });
    onPickPath?.(record.pathId);
  };

  // Refresher (spaced-rep due) krijgt warning-tone als visuele variatie.
  // Bewust niet game-energy — dit blijft een leer-CTA.
  const background = isRefresher
    ? "linear-gradient(135deg, var(--color-warning), #ef6c00)"
    : "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-700))";
  const borderColor = isRefresher ? "#ef6c00" : "var(--color-brand-primary-700)";

  const eyebrow = isRefresher
    ? `🔁 Tijd voor refresher, ${player}:`
    : `Vandaag, ${player}:`;
  const subText = isRefresher
    ? `Eerder ${meta.emoji} ${meta.label}${record.attempts > 0 ? ` — ${pct}% goed` : ""} · opnieuw oefenen`
    : `${meta.emoji} ${meta.label}${record.attempts > 0 ? ` — ${record.correct}/${record.attempts} (${pct}%)` : ""}`;

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{
        width: "100%",
        maxWidth: 360,
        marginBottom: "var(--space-4)",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-lg)",
        border: `1px solid ${borderColor}`,
        background,
        color: "var(--color-text-strong)",
        cursor: "pointer",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        boxShadow: "var(--shadow-md)",
        fontFamily: "var(--font-body)",
        transition: "transform var(--motion-fast) var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <span style={{ fontSize: 36 }} aria-hidden="true">{path.emoji || subj.emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "var(--font-size-xs)",
            opacity: 0.9,
            marginBottom: 2,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-lg)",
            fontWeight: "var(--font-weight-bold)",
            lineHeight: "var(--line-height-tight)",
          }}
        >
          {path.title}
        </div>
        <div
          style={{
            fontSize: "var(--font-size-xs)",
            marginTop: 4,
            opacity: 0.92,
          }}
        >
          {subText}
        </div>
      </div>
      <span style={{ fontSize: 22, opacity: 0.85 }} aria-hidden="true">›</span>
    </button>
  );
}

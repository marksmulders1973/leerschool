import { useEffect, useState } from "react";
import { loadMasteryForPlayer, recommendNextTopic, MASTERY_LABELS } from "../mastery.js";
import { ALL_LEARN_PATHS } from "../learnPaths/index.js";
import { track } from "../utils.js";
import { subjectMeta } from "../shared/subjects.js";

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
 * Doel: één duidelijk volgende-stap-beslissing in plaats van het huidige
 * versplinterde knoppen-veld op de homepage.
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

  // Niet renderen voor: geen naam, of nog laden, of geen aanbeveling EN geen records
  if (!player) return null;
  if (records === null) return null; // wachten op laden
  if (!recommended && records.length === 0) {
    // Eerste keer — kleine nudge ipv niets
    return (
      <FirstTimeNudge userName={player} onStart={onStartFirst} />
    );
  }
  if (!recommended) return null; // alles op goud — geen CTA

  return <RecommendedCard player={player} record={recommended} onPickPath={onPickPath} />;
}

function FirstTimeNudge({ userName, onStart }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 360,
        marginBottom: "var(--space-4)",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-lg)",
        background: "rgba(0, 200, 83, 0.10)",
        border: "1px solid rgba(0, 200, 83, 0.35)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        fontSize: "var(--font-size-sm)",
        textAlign: "center",
      }}
    >
      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: 4 }}>
        Hoi {userName} 👋
      </div>
      <div>Maak je eerste toets — je voortgang verschijnt hier.</div>
    </div>
  );
}

function RecommendedCard({ player, record, onPickPath }) {
  const path = record.path || ALL_LEARN_PATHS[record.pathId];
  if (!path) return null;
  const meta = MASTERY_LABELS[record.level];
  const subj = subjectMeta(path.subject);
  const pct = record.attempts > 0 ? Math.round((record.correct / record.attempts) * 100) : 0;

  const handleClick = () => {
    track("home_mastery_cta_click", { pathId: record.pathId, level: record.level });
    onPickPath?.(record.pathId);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: "100%",
        maxWidth: 360,
        marginBottom: "var(--space-4)",
        padding: "var(--space-4)",
        borderRadius: "var(--radius-xl)",
        border: "1px solid var(--color-primary-dark)",
        background:
          "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
        color: "var(--color-text-strong)",
        cursor: "pointer",
        textAlign: "left",
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        boxShadow: "var(--shadow-md)",
        fontFamily: "var(--font-body)",
        transition: "transform 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <span style={{ fontSize: 36 }}>{path.emoji || subj.emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontSize: "var(--font-size-xs)",
            opacity: 0.85,
            marginBottom: 2,
          }}
        >
          Vandaag, {player}:
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--font-size-lg)",
            fontWeight: 700,
            lineHeight: 1.15,
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
          {meta.emoji} {meta.label}
          {record.attempts > 0 && ` — ${record.correct}/${record.attempts} (${pct}%)`}
        </div>
      </div>
      <span style={{ fontSize: 22, opacity: 0.85 }}>›</span>
    </button>
  );
}

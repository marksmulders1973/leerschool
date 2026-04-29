import { useEffect, useState } from "react";
import Header from "../../components/Header.jsx";
import styles from "../../styles.js";
import Card from "../../shared/ui/Card.jsx";
import Badge from "../../shared/ui/Badge.jsx";
import { loadMasteryForPlayer, recommendNextTopic, MASTERY_LABELS } from "./mastery.js";
import { SUBJECTS as SUBJECT_LABELS } from "../../shared/subjects.js";

/**
 * MyMastery — voortgangs-pagina.
 *
 * Twee modi:
 *   1. Eigen leerling-zicht: gebruikt `userName` uit App-state.
 *   2. Ouder-zicht (P1.10 deel 2b): als `viewedPlayer` is doorgegeven,
 *      toont het de mastery van die naam met een 'ouder-modus'-banner.
 *      Onderwerpen zijn niet klikbaar — read-only voor de ouder.
 *
 * Design-system v1: Card + Badge components, brand-tokens voor kleur.
 */

const LEVEL_TONE = {
  gold: "gold",
  silver: "silver",
  bronze: "bronze",
  unmeasured: "unmeasured",
};

export default function MyMastery({ userName, viewedPlayer, onPickPath, onBack, onHome }) {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const isParentView = !!viewedPlayer;
  const player = (viewedPlayer || userName || "").trim();

  useEffect(() => {
    let cancelled = false;
    if (!player) { setLoading(false); return; }
    (async () => {
      const r = await loadMasteryForPlayer(player);
      if (!cancelled) { setRecords(r); setLoading(false); }
    })();
    return () => { cancelled = true; };
  }, [player]);

  const grouped = {};
  records.forEach((r) => {
    const subj = r.path?.subject || "anders";
    if (!grouped[subj]) grouped[subj] = [];
    grouped[subj].push(r);
  });

  const totals = records.reduce((s, r) => {
    s[r.level] = (s[r.level] || 0) + 1;
    return s;
  }, {});
  const recommended = recommendNextTopic(records);

  return (
    <div style={styles.page}>
      <Header
        title={isParentView ? "👨‍👩‍👧 Voortgang" : "📈 Mijn voortgang"}
        subtitle={isParentView ? `Voortgang van ${player}` : (player ? `Hi ${player}` : "Voer eerst een naam in")}
        onBack={onBack}
        onHome={onHome}
      />
      <div style={styles.content}>
        {isParentView && (
          <Card
            variant="ghost"
            padding="sm"
            style={{
              background: "var(--color-info-soft)",
              borderColor: "var(--color-info)",
              color: "var(--color-info)",
              fontSize: "var(--font-size-sm)",
              marginBottom: "var(--space-4)",
              textAlign: "center",
            }}
          >
            👀 <strong>Ouder-zicht</strong> — alleen lezen, je kunt zelf geen oefening starten.
          </Card>
        )}

        {!player && (
          <InfoCard>
            {isParentView
              ? "Geen leerling-naam in URL. Geef bv. ?leerling=Sara mee."
              : "Vul eerst je naam in (op de startpagina) om je voortgang bij te houden."}
          </InfoCard>
        )}

        {player && loading && (
          <InfoCard>Voortgang laden…</InfoCard>
        )}

        {player && !loading && records.length === 0 && (
          <InfoCard>
            Nog geen voortgang. Maak eerst een paar toetsvragen — daarna verschijnt
            hier per onderwerp je niveau (🥉 brons → 🥈 zilver → 🥇 goud).
          </InfoCard>
        )}

        {player && !loading && records.length > 0 && (
          <>
            {/* Totalen */}
            <Card
              variant="ghost"
              style={{
                display: "flex",
                gap: "var(--space-2)",
                marginBottom: "var(--space-5)",
              }}
            >
              {["gold", "silver", "bronze", "unmeasured"].map((lvl) => {
                const meta = MASTERY_LABELS[lvl];
                const n = totals[lvl] || 0;
                return (
                  <div key={lvl} style={{ flex: 1, textAlign: "center" }}>
                    <div style={{ fontSize: 22 }} aria-hidden="true">{meta.emoji}</div>
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "var(--font-size-md)",
                        fontWeight: "var(--font-weight-bold)",
                        color: meta.color,
                      }}
                    >
                      {n}
                    </div>
                    <div
                      style={{
                        fontSize: "var(--font-size-xs)",
                        color: "var(--color-text-subtle)",
                      }}
                    >
                      {meta.label}
                    </div>
                  </div>
                );
              })}
            </Card>

            {/* Aanbeveling */}
            {recommended && onPickPath && !isParentView && (
              <button
                type="button"
                onClick={() => onPickPath(recommended.pathId)}
                style={{
                  width: "100%",
                  padding: "var(--space-4)",
                  marginBottom: "var(--space-5)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-brand-primary-700)",
                  cursor: "pointer",
                  background:
                    "linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-primary-700))",
                  color: "var(--color-text-strong)",
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--font-size-md)",
                  fontWeight: "var(--font-weight-bold)",
                  textAlign: "left",
                  display: "flex",
                  alignItems: "center",
                  gap: "var(--space-3)",
                  boxShadow: "var(--shadow-md)",
                  transition: "transform var(--motion-fast) var(--ease-out)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: 28 }} aria-hidden="true">{recommended.path.emoji || "📚"}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.85 }}>Voortbouwen op:</div>
                  <div style={{ fontSize: "var(--font-size-lg)" }}>{recommended.path.title}</div>
                  <div style={{ fontSize: "var(--font-size-xs)", opacity: 0.9, marginTop: 2 }}>
                    {MASTERY_LABELS[recommended.level].emoji} {MASTERY_LABELS[recommended.level].label} —
                    {recommended.attempts > 0 ? ` ${recommended.correct}/${recommended.attempts} (${Math.round(recommended.correct / recommended.attempts * 100)}%)` : ""}
                  </div>
                </div>
                <span style={{ fontSize: 18 }} aria-hidden="true">›</span>
              </button>
            )}

            {/* Per vak */}
            {Object.entries(grouped).map(([subj, list]) => {
              const meta = SUBJECT_LABELS[subj] || { title: subj, emoji: "📘" };
              return (
                <div key={subj} style={{ marginBottom: "var(--space-5)" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "var(--space-2)",
                      padding: "var(--space-2) var(--space-1) var(--space-3)",
                      fontFamily: "var(--font-display)",
                      fontSize: "var(--font-size-lg)",
                      fontWeight: "var(--font-weight-bold)",
                      color: "var(--color-text)",
                    }}
                  >
                    <span style={{ fontSize: 20 }} aria-hidden="true">{meta.emoji}</span>
                    <span>{meta.title}</span>
                    <span
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "var(--font-size-sm)",
                        fontWeight: "var(--font-weight-medium)",
                      }}
                    >
                      · {list.length} {list.length === 1 ? "onderwerp" : "onderwerpen"}
                    </span>
                  </div>

                  {list.map((r) => {
                    const lvlMeta = MASTERY_LABELS[r.level];
                    const pct = r.attempts > 0 ? Math.round((r.correct / r.attempts) * 100) : 0;
                    return (
                      <button
                        key={r.pathId}
                        type="button"
                        onClick={() => !isParentView && onPickPath && onPickPath(r.pathId)}
                        disabled={isParentView}
                        style={{
                          width: "100%",
                          marginBottom: "var(--space-2)",
                          padding: "var(--space-3) var(--space-4)",
                          borderRadius: "var(--radius-md)",
                          border: `1px solid ${lvlMeta.color}40`,
                          background: "var(--color-bg-elevated)",
                          color: "var(--color-text)",
                          fontFamily: "var(--font-body)",
                          cursor: isParentView ? "default" : "pointer",
                          opacity: isParentView ? 0.85 : 1,
                          textAlign: "left",
                          display: "flex",
                          alignItems: "center",
                          gap: "var(--space-3)",
                          transition: "background var(--motion-fast) var(--ease-out)",
                        }}
                      >
                        <span style={{ fontSize: 22 }} aria-hidden="true">{lvlMeta.emoji}</span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div
                            style={{
                              fontSize: "var(--font-size-md)",
                              fontWeight: "var(--font-weight-bold)",
                              color: "var(--color-text-strong)",
                            }}
                          >
                            {r.path.title}
                          </div>
                          <div
                            style={{
                              fontSize: "var(--font-size-xs)",
                              color: "var(--color-text-muted)",
                              marginTop: 2,
                              display: "flex",
                              alignItems: "center",
                              gap: "var(--space-2)",
                            }}
                          >
                            <Badge tone={LEVEL_TONE[r.level] || "neutral"} size="sm">
                              {lvlMeta.label}
                            </Badge>
                            <span>{r.correct}/{r.attempts} ({pct}%)</span>
                          </div>
                        </div>
                        <span
                          style={{
                            color: "var(--color-text-muted)",
                            fontSize: "var(--font-size-lg)",
                          }}
                          aria-hidden="true"
                        >
                          ›
                        </span>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

function InfoCard({ children }) {
  return (
    <Card
      variant="ghost"
      style={{
        fontSize: "var(--font-size-sm)",
        color: "var(--color-text-muted)",
        lineHeight: "var(--line-height-normal)",
      }}
    >
      {children}
    </Card>
  );
}

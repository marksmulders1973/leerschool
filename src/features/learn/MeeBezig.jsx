import { useEffect, useState } from "react";
import supabase from "../../supabase.js";
import styles from "../../styles.js";
import Header from "../../components/Header.jsx";
import Card from "../../shared/ui/Card.jsx";
import Button from "../../shared/ui/Button.jsx";
import { track } from "../../utils.js";

// Pagina voor vakken die wél in 'Oefenen' bestaan, maar nog géén leerpaden hebben.
// "We zijn ermee bezig!" + opt-in voor wachtlijst (learn_path_waitlist tabel).
//
// Design-system v1: Card + Button, brand-tokens.

export default function MeeBezig({
  subjectId,
  subjectLabel,
  subjectIcon,
  userName,
  onBack,
  onHome,
  onGoOefenen,
  relatedHubCount = 0,
  relatedHubLabel = null,
  onViewRelated = null,
}) {
  const [waitCount, setWaitCount] = useState(null);
  const [signedUp, setSignedUp] = useState(false);
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  const player = (userName || "").trim() || "Anonieme bezoeker";

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { count } = await supabase
          .from("learn_path_waitlist")
          .select("id", { count: "exact", head: true })
          .eq("subject_id", subjectId);
        if (!cancelled) setWaitCount(typeof count === "number" ? count : 0);

        if (player !== "Anonieme bezoeker") {
          const { data } = await supabase
            .from("learn_path_waitlist")
            .select("id")
            .eq("subject_id", subjectId)
            .eq("player_name", player)
            .maybeSingle();
          if (!cancelled && data) setSignedUp(true);
        }
      } catch {
        if (!cancelled) setWaitCount(0);
      }
    })();
    return () => { cancelled = true; };
  }, [subjectId, player]);

  const onSignup = async () => {
    if (signedUp || busy) return;
    setBusy(true); setErr("");
    try {
      const { error } = await supabase.from("learn_path_waitlist").insert({
        player_name: player,
        subject_id: subjectId,
      });
      if (error && error.code !== "23505") {
        setErr("Opslaan lukte niet, probeer het zo nog eens.");
      } else {
        setSignedUp(true);
        setWaitCount((c) => (typeof c === "number" ? c + 1 : 1));
        track("waitlist_signup", { subject: subjectId });
      }
    } catch {
      setErr("Opslaan lukte niet, probeer het zo nog eens.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={styles.page}>
      <Header
        title={`${subjectIcon || "📚"} ${subjectLabel || subjectId}`}
        subtitle="Leren — komt eraan!"
        onBack={onBack}
        onHome={onHome}
      />
      <div style={styles.content}>
        <Card
          variant="ghost"
          padding="lg"
          style={{
            background:
              "linear-gradient(135deg, var(--color-success-soft), var(--color-info-soft))",
            borderColor: "var(--color-brand-primary)",
            borderRadius: "var(--radius-lg)",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 48, marginBottom: "var(--space-2)" }} aria-hidden="true">🛠️</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--font-size-xl)",
              fontWeight: "var(--font-weight-bold)",
              color: "var(--color-text-strong)",
              margin: "0 0 6px 0",
            }}
          >
            We zijn ermee bezig!
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text)",
              margin: 0,
              lineHeight: "var(--line-height-normal)",
            }}
          >
            Voor <strong>{subjectLabel || subjectId}</strong> bouwen we op dit moment de leerpaden — van begin tot eind, met uitleg per stap.
          </p>
        </Card>

        <Card variant="ghost" style={{ marginTop: "var(--space-3)" }}>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-muted)",
              marginBottom: "var(--space-2)",
            }}
          >
            {waitCount === null
              ? "Anderen die hierop wachten worden geteld…"
              : waitCount === 0
                ? "Jij kan de eerste zijn die zich aanmeldt."
                : waitCount === 1
                  ? "1 andere leerling wacht hier ook op."
                  : `${waitCount} andere leerlingen wachten hier ook op.`}
          </div>

          {!signedUp ? (
            <Button
              variant="primary"
              fullWidth
              size="lg"
              disabled={busy}
              onClick={onSignup}
            >
              {busy ? "Bezig…" : "🔔 Hou me op de hoogte"}
            </Button>
          ) : (
            <div
              style={{
                padding: "var(--space-3) var(--space-4)",
                borderRadius: "var(--radius-md)",
                background: "var(--color-success-soft)",
                border: "1px solid var(--color-success)",
                color: "var(--color-brand-primary-100)",
                fontFamily: "var(--font-display)",
                fontSize: "var(--font-size-md)",
                fontWeight: "var(--font-weight-bold)",
                textAlign: "center",
              }}
            >
              ✅ Bedankt! We laten je weten zodra het klaarstaat.
            </div>
          )}

          {err && (
            <div
              style={{
                marginTop: "var(--space-2)",
                fontSize: "var(--font-size-xs)",
                color: "var(--color-danger)",
              }}
            >
              {err}
            </div>
          )}
        </Card>

        {relatedHubCount > 0 && onViewRelated && (
          <div style={{ marginTop: "var(--space-5)" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "var(--font-size-sm)",
                color: "var(--color-text-subtle)",
                textAlign: "center",
                marginBottom: "var(--space-3)",
              }}
            >
              Voor jouw specifieke onderwerp werken we nog aan uitleg.
              Intussen kun je wél andere onderwerpen leren:
            </p>
            <Button
              variant="ghost"
              fullWidth
              size="lg"
              onClick={onViewRelated}
              style={{
                background: "var(--color-success-soft)",
                borderColor: "var(--color-brand-primary)",
                color: "var(--color-brand-primary-100)",
              }}
            >
              📚 Bekijk {relatedHubCount} {relatedHubCount === 1 ? "leerpad" : "leerpaden"} voor {relatedHubLabel || subjectLabel || subjectId}
            </Button>
          </div>
        )}

        <div style={{ marginTop: "var(--space-5)" }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "var(--font-size-sm)",
              color: "var(--color-text-subtle)",
              textAlign: "center",
              marginBottom: "var(--space-3)",
            }}
          >
            Of maak alvast een toets:
          </p>
          {onGoOefenen && (
            <Button
              variant="secondary"
              fullWidth
              size="lg"
              onClick={onGoOefenen}
            >
              🎯 Naar oefenen — {subjectLabel || subjectId}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

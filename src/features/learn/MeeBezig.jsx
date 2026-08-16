import { useEffect, useState } from "react";
import supabase from "../../supabase.js";
import styles from "../../styles.js";
import Header from "../../components/Header.jsx";
import Card from "../../shared/ui/Card.jsx";
import Button from "../../shared/ui/Button.jsx";
import DoorstroomtoetsLogo from "../../components/DoorstroomtoetsLogo.jsx";
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
  const [metMail, setMetMail] = useState(false); // is er een e-mail meegegeven?
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [email, setEmail] = useState("");

  const player = (userName || "").trim() || "Anonieme bezoeker";
  const emailGeldig = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

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
        // Optioneel e-mailadres → op de e-maillijst zetten zodat we écht kunnen
        // laten weten zodra dit vak klaarstaat (learn_path_waitlist bewaart geen
        // adres). Faalt dit, dan blijft de aanmelding gewoon geslaagd.
        const mail = email.trim();
        const heeftMail = emailGeldig(mail);
        if (heeftMail) {
          try {
            await supabase.from("upgrade_waitlist").insert({
              email: mail.toLowerCase(),
              plan: `leerpad-${subjectId}`,
              source: "meebezig-waitlist",
              consent_at: new Date().toISOString(),
            });
          } catch { /* aanmelding blijft geslaagd, mail is bonus */ }
        }
        setMetMail(heeftMail);
        setSignedUp(true);
        setWaitCount((c) => (typeof c === "number" ? c + 1 : 1));
        track("waitlist_signup", { subject: subjectId, met_mail: heeftMail });
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
        title={subjectId === "cito" ? (
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            <DoorstroomtoetsLogo size={28} />
            {subjectLabel || subjectId}
          </span>
        ) : `${subjectIcon || "📚"} ${subjectLabel || subjectId}`}
        subtitle={relatedHubCount > 0
          ? "Dit onderwerp is in de maak — andere onderwerpen staan al klaar"
          : "Voor dit vak werken we aan de leerpaden — start nu met toets oefenen"}
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
            {relatedHubCount > 0 ? (
              <>Voor <strong>dit onderwerp</strong> bouwen we nog aan het leerpad — van begin
              tot eind, met uitleg per stap. Voor {subjectLabel || subjectId} staan er
              al {relatedHubCount} andere leerpaden klaar (zie hieronder).</>
            ) : (
              <>Voor <strong>{subjectLabel || subjectId}</strong> bouwen we op dit moment de
              leerpaden — van begin tot eind, met uitleg per stap.</>
            )}
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
            <>
              <label
                htmlFor="waitlist-email"
                style={{
                  display: "block",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-xs)",
                  color: "var(--color-text-muted)",
                  marginBottom: "var(--space-1)",
                }}
              >
                📧 E-mail van je ouder of verzorger — dan mailen we zodra het klaarstaat <span style={{ opacity: 0.7 }}>(niet verplicht)</span>
              </label>
              <input
                id="waitlist-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="naam@voorbeeld.nl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: "100%",
                  padding: "var(--space-3) var(--space-4)",
                  marginBottom: "var(--space-2)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid var(--color-border)",
                  fontFamily: "var(--font-body)",
                  fontSize: "var(--font-size-md)",
                  minHeight: "var(--tap-target-min)",
                }}
              />
              <Button
                variant="primary"
                fullWidth
                size="lg"
                disabled={busy}
                onClick={onSignup}
              >
                {busy ? "Bezig…" : "🔔 Hou me op de hoogte"}
              </Button>
            </>
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
              {metMail
                ? "✅ Bedankt! We mailen je zodra het klaarstaat."
                : "✅ Bedankt! We laten het je in de app weten zodra het klaarstaat."}
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

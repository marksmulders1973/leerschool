import { useEffect, useState } from "react";
import supabase from "../../supabase.js";
import styles from "../../styles.js";
import Header from "../../components/Header.jsx";
import { track } from "../../utils.js";

// Pagina voor vakken die wél in 'Oefenen' bestaan, maar nog géén leerpaden hebben.
// "We zijn ermee bezig!" + opt-in voor wachtlijst (learn_path_waitlist tabel).

export default function MeeBezig({ subjectId, subjectLabel, subjectIcon, userName, onBack, onHome, onGoOefenen, relatedHubCount = 0, relatedHubLabel = null, onViewRelated = null }) {
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
        <div style={{
          background: "linear-gradient(135deg, rgba(0,200,83,0.10), rgba(0,212,255,0.06))",
          border: "1px solid rgba(0,200,83,0.30)",
          borderRadius: 18, padding: "22px 18px",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🛠️</div>
          <h2 style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 22, fontWeight: 700, color: "#fff",
            margin: "0 0 6px 0",
          }}>
            We zijn ermee bezig!
          </h2>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 14, color: "rgba(255,255,255,0.78)",
            margin: 0, lineHeight: 1.5,
          }}>
            Voor <strong>{subjectLabel || subjectId}</strong> bouwen we op dit moment de leerpaden — van begin tot eind, met uitleg per stap.
          </p>
        </div>

        <div style={{
          marginTop: 14,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.10)",
          borderRadius: 14, padding: "14px 14px",
        }}>
          <div style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 13, color: "rgba(255,255,255,0.7)", marginBottom: 8,
          }}>
            {waitCount === null
              ? "Anderen die hierop wachten worden geteld…"
              : waitCount === 0
                ? "Jij kan de eerste zijn die zich aanmeldt."
                : waitCount === 1
                  ? "1 andere leerling wacht hier ook op."
                  : `${waitCount} andere leerlingen wachten hier ook op.`}
          </div>

          {!signedUp ? (
            <button
              onClick={onSignup}
              disabled={busy}
              style={{
                width: "100%", padding: "12px 14px",
                borderRadius: 12, border: "none", cursor: busy ? "wait" : "pointer",
                background: "linear-gradient(135deg, #00c853, #00a040)",
                color: "#fff",
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 15, fontWeight: 700,
                boxShadow: "0 4px 14px rgba(0,200,83,0.35)",
                opacity: busy ? 0.7 : 1,
              }}
            >
              {busy ? "Bezig…" : "🔔 Hou me op de hoogte"}
            </button>
          ) : (
            <div style={{
              padding: "11px 14px",
              borderRadius: 12,
              background: "rgba(0,200,83,0.15)",
              border: "1px solid rgba(0,200,83,0.45)",
              color: "#69f0ae",
              fontFamily: "'Fredoka', sans-serif",
              fontSize: 14, fontWeight: 700,
              textAlign: "center",
            }}>
              ✅ Bedankt! We laten je weten zodra het klaarstaat.
            </div>
          )}

          {err && (
            <div style={{ marginTop: 8, fontSize: 12, color: "#ff8a80" }}>{err}</div>
          )}
        </div>

        {relatedHubCount > 0 && onViewRelated && (
          <div style={{ marginTop: 18 }}>
            <p style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: 13, color: "rgba(255,255,255,0.55)",
              textAlign: "center", marginBottom: 10,
            }}>
              Voor jouw specifieke onderwerp werken we nog aan uitleg.
              Intussen kun je wél andere onderwerpen leren:
            </p>
            <button
              onClick={onViewRelated}
              style={{
                width: "100%", padding: "12px 14px",
                borderRadius: 12, cursor: "pointer",
                border: "1px solid rgba(0,200,83,0.45)",
                background: "rgba(0,200,83,0.10)",
                color: "#69f0ae",
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 15, fontWeight: 700,
              }}
            >
              📚 Bekijk {relatedHubCount} {relatedHubCount === 1 ? "leerpad" : "leerpaden"} voor {relatedHubLabel || subjectLabel || subjectId}
            </button>
          </div>
        )}

        <div style={{ marginTop: 18 }}>
          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: 13, color: "rgba(255,255,255,0.55)",
            textAlign: "center", marginBottom: 10,
          }}>
            Of maak alvast een toets:
          </p>
          {onGoOefenen && (
            <button
              onClick={onGoOefenen}
              style={{
                width: "100%", padding: "12px 14px",
                borderRadius: 12, cursor: "pointer",
                border: "1px solid rgba(0,212,255,0.45)",
                background: "rgba(0,212,255,0.10)",
                color: "#00d4ff",
                fontFamily: "'Fredoka', sans-serif",
                fontSize: 15, fontWeight: 700,
              }}
            >
              🎯 Naar oefenen — {subjectLabel || subjectId}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

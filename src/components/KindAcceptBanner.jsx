import { useEffect, useState } from "react";
import supabase from "../supabase.js";

// AVG art. 8 + 7: leerling moet expliciet bevestigen dat een ouder de
// scores mag inzien wanneer die ouder een koppeling via "Naam invullen"
// heeft aangemaakt (zonder dat het kind erbij was). Bij de WhatsApp-
// koppelcode-flow voert het kind zelf de code in — geen extra accept
// nodig daar.
//
// Banner laadt onbevestigde parent_child_links waar child_name === userName
// en biedt accepteren of weigeren. Sprint C+ (2026-05-08).

export default function KindAcceptBanner({ userName }) {
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [doneMsg, setDoneMsg] = useState(null);

  useEffect(() => {
    if (!userName) return;
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase
          .from("parent_child_links")
          .select("id, parent_user_id, child_name, created_at")
          .eq("child_name", userName)
          .eq("verified", false);
        if (cancelled) return;
        if (Array.isArray(data)) setPending(data);
      } catch {
        // RLS kan blokkeren — banner verschijnt dan niet, dat is acceptabel
        // voor deze v1.
      }
    })();
    return () => { cancelled = true; };
  }, [userName]);

  const accept = async (id) => {
    setLoading(true);
    try {
      await supabase
        .from("parent_child_links")
        .update({ verified: true })
        .eq("id", id);
      setPending((prev) => prev.filter((p) => p.id !== id));
      setDoneMsg("✓ Bevestigd. Je ouder kan nu je scores zien.");
    } catch {
      setDoneMsg("Er ging iets mis. Probeer later opnieuw.");
    }
    setLoading(false);
  };

  const reject = async (id) => {
    if (!window.confirm("Weet je zeker dat je deze koppeling wilt weigeren? De ouder kan opnieuw vragen.")) return;
    setLoading(true);
    try {
      await supabase
        .from("parent_child_links")
        .delete()
        .eq("id", id);
      setPending((prev) => prev.filter((p) => p.id !== id));
      setDoneMsg("Koppeling geweigerd en verwijderd.");
    } catch {
      setDoneMsg("Verwijderen lukte niet. Probeer later opnieuw.");
    }
    setLoading(false);
  };

  if (doneMsg) {
    return (
      <div
        style={{
          marginBottom: 10,
          padding: "10px 14px",
          background: "rgba(0,200,83,0.14)",
          border: "1px solid rgba(0,200,83,0.4)",
          borderRadius: 12,
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "var(--color-brand-primary-100)",
        }}
      >
        {doneMsg}
      </div>
    );
  }

  if (pending.length === 0) return null;

  return (
    <div style={{ marginBottom: 12 }}>
      {pending.map((row) => (
        <div
          key={row.id}
          style={{
            padding: "14px 16px",
            marginBottom: 8,
            background: "linear-gradient(135deg, rgba(255,213,79,0.14), rgba(255,179,0,0.06))",
            border: "1px solid rgba(255,213,79,0.45)",
            borderRadius: 14,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
            <span style={{ fontSize: 26 }} aria-hidden="true">🔐</span>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#ffd54f",
                  lineHeight: 1.3,
                }}
              >
                Een ouder wil je voortgang volgen
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.5,
                  marginTop: 4,
                }}
              >
                Iemand heeft jouw naam ingevoerd in een ouder-account. Wil je
                dat hij of zij je oefenscores in Leerkwartier kan zien?
                Je kunt dit later altijd weer intrekken.
              </div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={() => accept(row.id)}
              disabled={loading}
              style={{
                flex: 1,
                padding: "10px 14px",
                background: "linear-gradient(135deg, #00c853, #69f0ae)",
                border: "none",
                borderRadius: 10,
                color: "#0f1729",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
              }}
            >
              ✓ Ja, accepteren
            </button>
            <button
              onClick={() => reject(row.id)}
              disabled={loading}
              style={{
                flex: 1,
                padding: "10px 14px",
                background: "rgba(255,82,82,0.12)",
                border: "1px solid rgba(255,82,82,0.4)",
                borderRadius: 10,
                color: "#ff7676",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 14,
                cursor: loading ? "not-allowed" : "pointer",
                opacity: loading ? 0.6 : 1,
              }}
            >
              ✗ Nee, weigeren
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

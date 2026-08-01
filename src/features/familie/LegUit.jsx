// ══════════════════════════════════════════════════════════════════════
// "Leg het uit" — Feynman voor kinderen (Familie-feature, ideeën-dossier #6).
//
// Op het KLAAR-scherm van een leerpad daagt dit het kind uit om het net-
// geoefende concept IN EIGEN WOORDEN uit te leggen. Een MILDE AI (api/leg-uit,
// Haiku) checkt of de kernpunten erin zitten en moedigt aan — nooit streng,
// geen cijfer (STOPLIST: geen prestatiedruk). "Als je het kunt uitleggen, snap
// je het echt" — de diepste vorm van begrijpen.
//
// Typen-only (spraak/STT komt later, sluit aan op de Buddy-tutor-STT-stap).
// Achter de Familie-preview-poort omdat elke beurt een (goedkope) AI-call kost;
// het endpoint heeft daarbovenop een dag-quota. Zichtbaar voor preview/admin.
// ══════════════════════════════════════════════════════════════════════
import { useState } from "react";
import { familiePreviewVisible } from "../../shared/featureFlags.js";
import { track } from "../../utils.js";

export default function LegUit({ conceptTitel, kernpunten = "", authUser = null }) {
  // Kosten-poort: alleen achter de Familie-preview (of admin/env). Echte
  // gebruikers zien dit pas als de laag live gaat.
  if (!conceptTitel || !familiePreviewVisible(authUser)) return null;
  return <LegUitInner conceptTitel={conceptTitel} kernpunten={kernpunten} />;
}

function LegUitInner({ conceptTitel, kernpunten }) {
  const [open, setOpen] = useState(false);
  const [tekst, setTekst] = useState("");
  const [status, setStatus] = useState("idle"); // idle | laden | klaar | fout
  const [feedback, setFeedback] = useState(null);

  const titel = String(conceptTitel).split(/\s[—·]\s/)[0].trim() || "dit onderwerp";

  async function verstuur() {
    if (tekst.trim().length < 3 || status === "laden") return;
    setStatus("laden");
    try { track("leg_uit_verstuurd", { concept: titel, lengte: tekst.trim().length }); } catch { /* */ }
    try {
      const r = await fetch("/api/leg-uit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ onderwerp: conceptTitel, kernpunten, uitleg: tekst.slice(0, 1200) }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data?.error || "fout");
      setFeedback({ knap: Array.isArray(data.knap) ? data.knap : [], tip: data.tip || "" });
      setStatus("klaar");
    } catch {
      setStatus("fout");
    }
  }

  function opnieuw() {
    setTekst("");
    setFeedback(null);
    setStatus("idle");
  }

  // Ingeklapte uitnodiging
  if (!open) {
    return (
      <button
        onClick={() => { setOpen(true); try { track("leg_uit_open", { concept: titel }); } catch { /* */ } }}
        style={{
          display: "block", width: "100%", textAlign: "left", cursor: "pointer", marginTop: 12,
          background: "rgba(126,240,162,0.09)", border: "1px solid rgba(126,240,162,0.42)",
          borderRadius: 14, padding: "14px 16px", color: "inherit",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ fontSize: 26, lineHeight: 1 }}>🧠</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: 15 }}>Snap je 't écht? Leg het uit!</div>
            <div style={{ fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.5, marginTop: 2 }}>
              Kun jij <b>{titel.toLowerCase()}</b> in je eigen woorden uitleggen? Als je iets kunt uitleggen, snap je het pas echt.
            </div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 800, color: "#69f0ae", whiteSpace: "nowrap" }}>Probeer →</div>
        </div>
      </button>
    );
  }

  return (
    <div style={{
      marginTop: 12, background: "rgba(126,240,162,0.07)", border: "1px solid rgba(126,240,162,0.42)",
      borderRadius: 14, padding: "16px 16px 14px", color: "inherit",
    }}>
      <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>🧠 Leg <span style={{ color: "#69f0ae" }}>{titel.toLowerCase()}</span> uit in je eigen woorden</div>
      <div style={{ fontSize: 13, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.5, marginBottom: 10 }}>
        Doe alsof je het aan een vriend uitlegt die het nog niet snapt. Er is geen goed of fout — gewoon proberen!
      </div>

      {status !== "klaar" && (
        <>
          <textarea
            value={tekst}
            onChange={(e) => setTekst(e.target.value.slice(0, 1200))}
            placeholder="Bijvoorbeeld: 'Een breuk is een deel van iets heels. De onderste helft zegt in hoeveel stukjes je het verdeelt…'"
            rows={4}
            style={{
              width: "100%", boxSizing: "border-box", resize: "vertical", minHeight: 84,
              padding: "10px 12px", borderRadius: 10, fontSize: 14.5, lineHeight: 1.5,
              border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "inherit",
            }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10, flexWrap: "wrap" }}>
            <button
              onClick={verstuur}
              disabled={tekst.trim().length < 3 || status === "laden"}
              style={{
                padding: "10px 20px", borderRadius: 12, border: "none", cursor: tekst.trim().length < 3 ? "default" : "pointer",
                background: tekst.trim().length < 3 ? "rgba(255,255,255,0.12)" : "linear-gradient(135deg,#00c853,#69f0ae)",
                color: tekst.trim().length < 3 ? "#8899aa" : "#04210f", fontSize: 15, fontWeight: 800,
              }}
            >
              {status === "laden" ? "Ik lees mee…" : "Klaar! ✅"}
            </button>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "var(--color-text-muted, #8899aa)", cursor: "pointer", fontSize: 13.5, fontWeight: 700 }}>
              sluiten
            </button>
          </div>
          {status === "fout" && (
            <div style={{ marginTop: 10, fontSize: 13.5, color: "#ffb74d" }}>
              Even niet gelukt om mee te lezen — maar knap dat je het probeerde! Probeer het zo nog eens.
            </div>
          )}
        </>
      )}

      {status === "klaar" && feedback && (
        <div>
          {feedback.knap.map((k, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 8, fontSize: 14.5, lineHeight: 1.5 }}>
              <span style={{ color: "#69f0ae" }}>✅</span>
              <span>{k}</span>
            </div>
          ))}
          {feedback.tip && (
            <div style={{ display: "flex", gap: 8, alignItems: "flex-start", marginTop: 4, fontSize: 14.5, lineHeight: 1.5, color: "var(--color-text-soft, #cdd6e2)" }}>
              <span>💡</span>
              <span>{feedback.tip}</span>
            </div>
          )}
          <div style={{ display: "flex", gap: 12, marginTop: 12, flexWrap: "wrap" }}>
            <button onClick={opnieuw} style={{ padding: "9px 18px", borderRadius: 12, border: "1.5px solid rgba(126,240,162,0.5)", background: "rgba(126,240,162,0.10)", color: "#69f0ae", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
              Nog eens proberen
            </button>
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "var(--color-text-muted, #8899aa)", cursor: "pointer", fontSize: 13.5, fontWeight: 700 }}>
              klaar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

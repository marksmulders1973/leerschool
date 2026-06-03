import { useState, useEffect } from "react";
import supabase from "../supabase.js";
import { track } from "../utils.js";

// Herbruikbaar e-mail-capture-blokje (Mark 2026-06-03): bouwt de e-maillijst
// ("het bestand"). Magneet = "elke week 15 minuten gratis extra lesmateriaal
// per mail" — past bij het kwartier-merk. Schrijft naar `upgrade_waitlist`
// met een `source`-label zodat we per plek kunnen meten + later segmenteren.
//
// AVG: bewust ouder-gericht, alleen plaatsen op ouder-/Doorstroomtoets-pagina's,
// NIET in de kinder-/spel-flow. Dubbele opt-in-belofte + "uitschrijven kan altijd".
//
// Props:
//   - source: string  → waar de inschrijving vandaan komt ("cito", "na-toets", ...)
//   - onPrintPakket?: () => void → optionele secundaire link naar het oefenpakket
//   - compact?: boolean → kleinere variant (minder marge)
export default function GratisLesmateriaal({ source = "onbekend", onPrintPakket, compact = false }) {
  const doneKey = `lk_lesmateriaal_aangemeld`;
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | busy | done | error

  useEffect(() => {
    try { if (localStorage.getItem(doneKey)) setStatus("done"); } catch {}
  }, []);

  async function meldAan(e) {
    e?.preventDefault?.();
    const adres = email.trim();
    if (!adres.includes("@") || adres.length < 5) { setStatus("error"); return; }
    setStatus("busy");
    try {
      const { error } = await supabase
        .from("upgrade_waitlist")
        .insert({ email: adres, plan: "gratis-lesmateriaal", source });
      // Dubbele inschrijving (unique-constraint) telt als succes.
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { localStorage.setItem(doneKey, "1"); } catch {}
      track("lesmateriaal_signup", { source });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(0,200,83,0.12), rgba(0,200,83,0.04))",
      border: "1.5px solid rgba(0,200,83,0.35)",
      borderRadius: 16,
      padding: compact ? "16px 16px" : "18px 20px",
      marginTop: 4,
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: compact ? 16 : 18,
        fontWeight: 800,
        color: "#69f0ae",
        display: "flex", alignItems: "center", gap: 8,
        marginBottom: 6,
      }}>
        <span aria-hidden="true">📩</span> Elke week 15 minuten gratis extra lesmateriaal
      </div>

      {status === "done" ? (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
          ✅ Gelukt — je staat op de lijst! Je ontvangt binnenkort je eerste gratis oefenkwartiertje.
          {onPrintPakket && (
            <>
              {" "}
              <button onClick={onPrintPakket} style={linkBtn}>Nu al oefenen? Print het gratis oefenpakket →</button>
            </>
          )}
        </div>
      ) : (
        <>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 12 }}>
            Laat je e-mail achter en ontvang elke week een nieuw oefenkwartiertje voor de
            Doorstroomtoets — gratis in je mail. Geen spam, uitschrijven kan altijd.
          </div>

          <form onSubmit={meldAan} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status === "error") setStatus("idle"); }}
              placeholder="jouw@email.nl"
              aria-label="Je e-mailadres"
              style={{
                flex: "1 1 180px",
                minWidth: 0,
                padding: "11px 14px",
                borderRadius: 10,
                border: status === "error" ? "1.5px solid #ff5252" : "1px solid rgba(255,255,255,0.18)",
                background: "rgba(255,255,255,0.06)",
                color: "var(--color-text, #e8edf5)",
                fontFamily: "var(--font-body)",
                fontSize: 14,
              }}
            />
            <button
              type="submit"
              disabled={status === "busy"}
              style={{
                flex: "0 0 auto",
                padding: "11px 20px",
                borderRadius: 10,
                border: "none",
                background: "linear-gradient(135deg, #00C853, #00e676)",
                color: "#0a1525",
                fontFamily: "var(--font-display)",
                fontSize: 14,
                fontWeight: 800,
                cursor: status === "busy" ? "default" : "pointer",
                opacity: status === "busy" ? 0.7 : 1,
              }}
            >
              {status === "busy" ? "Bezig…" : "Gratis ontvangen"}
            </button>
          </form>

          {status === "error" && (
            <div style={{ marginTop: 8, fontSize: 12.5, color: "#ff8a80", fontFamily: "var(--font-body)" }}>
              Vul even een geldig e-mailadres in (bv. naam@voorbeeld.nl).
            </div>
          )}
        </>
      )}
    </div>
  );
}

const linkBtn = {
  background: "none",
  border: "none",
  padding: 0,
  color: "#69f0ae",
  fontFamily: "inherit",
  fontSize: 13,
  fontWeight: 700,
  cursor: "pointer",
  textDecoration: "underline",
};

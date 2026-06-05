import { useState, useEffect } from "react";
import supabase from "../supabase.js";
import { track, getIncomingRef } from "../utils.js";

// Herbruikbaar e-mail-capture-blokje (Mark 2026-06-03). Bouwt de e-maillijst
// ("het bestand"). Magneet = "elke week 15 minuten gratis extra lesmateriaal".
//
// V0-flow (2 stappen, 1 insert):
//   1. E-mail + VERPLICHTE consent-checkbox (AVG: losse, niet-voorgevinkte
//      toestemming van de OUDER) → "Verder".
//   2. Skipbaar mini-profiel: voornaam kind (optioneel) + groep (6/7/8) +
//      max 3 vakken (Cito-kern voorgevinkt). "Klaar" of "Sla over" → één
//      insert naar upgrade_waitlist (plan='gratis-lesmateriaal' + source +
//      consent_at + kind_voornaam + kind_groep + vakken).
//
// AVG: ouder-gericht, GEEN leeftijd/geboortedatum (groep = scherper + minder
// data), GEEN kind-account. Alleen op ouder-/Doorstroomtoets-pagina's plaatsen.
// Versturen zelf is nog niet gebouwd — dit verzamelt alleen profielen.
//
// Props: source (string), onPrintPakket? (() => void), compact? (bool)
const VAKKEN = [
  { id: "rekenen", label: "Rekenen", kern: true },
  { id: "taal", label: "Taal & begrijpend lezen", kern: true },
  { id: "studievaardigheden", label: "Studievaardigheden", kern: true },
  { id: "spelling", label: "Spelling" },
  { id: "wereldorientatie", label: "Wereldoriëntatie" },
];
const GROEPEN = [
  { id: "groep6", label: "Groep 6" },
  { id: "groep7", label: "Groep 7" },
  { id: "groep8", label: "Groep 8" },
  { id: "anders", label: "Anders" },
];
const MAX_VAKKEN = 3;

export default function GratisLesmateriaal({ source = "onbekend", onPrintPakket, compact = false }) {
  const doneKey = "lk_lesmateriaal_aangemeld";
  const [step, setStep] = useState("email"); // email | profiel | done
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [voornaam, setVoornaam] = useState("");
  const [groep, setGroep] = useState("");
  const [vakken, setVakken] = useState(VAKKEN.filter((v) => v.kern).map((v) => v.id));
  const [status, setStatus] = useState("idle"); // idle | busy | error
  const [fout, setFout] = useState("");

  useEffect(() => {
    try { if (localStorage.getItem(doneKey)) setStep("done"); } catch {}
  }, []);

  function naarProfiel(e) {
    e?.preventDefault?.();
    if (!email.trim().includes("@") || email.trim().length < 5) {
      setFout("Vul even een geldig e-mailadres in (bv. naam@voorbeeld.nl)."); return;
    }
    if (!consent) {
      setFout("Vink even aan dat je ouder/verzorger bent en akkoord gaat."); return;
    }
    setFout("");
    setStep("profiel");
  }

  function toggleVak(id) {
    setVakken((cur) => {
      if (cur.includes(id)) return cur.filter((x) => x !== id);
      if (cur.length >= MAX_VAKKEN) return cur; // max 3
      return [...cur, id];
    });
  }

  async function meldAan() {
    setStatus("busy"); setFout("");
    try {
      const { error } = await supabase.from("upgrade_waitlist").insert({
        email: email.trim(),
        plan: "gratis-lesmateriaal",
        source,
        consent_at: new Date().toISOString(),
        kind_voornaam: voornaam.trim() || null,
        kind_groep: groep || null,
        vakken: vakken.length ? vakken : null,
        ref: getIncomingRef(),
      });
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { localStorage.setItem(doneKey, "1"); } catch {}
      track("lesmateriaal_signup", { source, groep: groep || "", vakken: vakken.length });
      setStep("done");
    } catch {
      setStatus("error");
      setFout("Kon je niet aanmelden. Probeer het zo nog eens.");
    }
  }

  const wrap = {
    background: "linear-gradient(135deg, rgba(0,200,83,0.12), rgba(0,200,83,0.04))",
    border: "1.5px solid rgba(0,200,83,0.35)",
    borderRadius: 16,
    padding: compact ? "16px 16px" : "18px 20px",
    marginTop: 4,
  };
  const titel = {
    fontFamily: "var(--font-display)", fontSize: compact ? 16 : 18, fontWeight: 800,
    color: "#69f0ae", display: "flex", alignItems: "center", gap: 8, marginBottom: 6,
  };

  if (step === "done") {
    return (
      <div style={wrap}>
        <div style={titel}><span aria-hidden="true">📩</span> Elke week 15 minuten gratis extra lesmateriaal</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
          ✅ Gelukt — je staat op de lijst! Je ontvangt binnenkort je eerste gratis oefenkwartiertje.
          {onPrintPakket && (
            <> {" "}<button onClick={onPrintPakket} style={linkBtn}>Nu al oefenen? Print het gratis oefenpakket →</button></>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={wrap}>
      <div style={titel}><span aria-hidden="true">📩</span> Elke week 15 minuten gratis extra lesmateriaal</div>

      {step === "email" && (
        <>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, marginBottom: 12 }}>
            Laat je e-mail achter en ontvang elke week een nieuw oefenkwartiertje voor de
            Doorstroomtoets — gratis in je mail. Geen spam, uitschrijven kan altijd.
          </div>

          <form onSubmit={naarProfiel}>
            <input
              type="email" value={email}
              onChange={(e) => { setEmail(e.target.value); if (fout) setFout(""); }}
              placeholder="jouw@email.nl" aria-label="Je e-mailadres"
              style={inputStyle(!!fout && !email.includes("@"))}
            />

            <label style={{ display: "flex", gap: 10, alignItems: "flex-start", margin: "12px 0 14px", cursor: "pointer" }}>
              <input
                type="checkbox" checked={consent}
                onChange={(e) => { setConsent(e.target.checked); if (fout) setFout(""); }}
                style={{ marginTop: 3, width: 18, height: 18, flexShrink: 0, accentColor: "#00C853" }}
              />
              <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.7)", lineHeight: 1.45 }}>
                Ik ben de ouder/verzorger en geef toestemming om wekelijks gratis lesmateriaal op
                dit adres te ontvangen.{" "}
                <a href="/privacy.html" target="_blank" rel="noreferrer" style={{ color: "#69f0ae" }}>Privacybeleid</a>.
              </span>
            </label>

            <button type="submit" style={primaryBtn}>Verder →</button>
          </form>
        </>
      )}

      {step === "profiel" && (
        <>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.78)", lineHeight: 1.5, marginBottom: 14 }}>
            Nog 2 snelle vraagjes (10 sec) zodat we het op maat maken. Of sla over — dan sturen we de algemene Cito-mix.
          </div>

          <div style={{ marginBottom: 14 }}>
            <div style={labelStyle}>Voor wie is het? <span style={{ opacity: 0.55, fontWeight: 400 }}>(voornaam, mag leeg)</span></div>
            <input
              type="text" value={voornaam}
              onChange={(e) => setVoornaam(e.target.value)}
              placeholder="bijv. Sara" aria-label="Voornaam van je kind"
              style={{ ...inputStyle(false), marginBottom: 10 }}
            />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {GROEPEN.map((g) => (
                <button key={g.id} type="button" onClick={() => setGroep(groep === g.id ? "" : g.id)} style={tegel(groep === g.id)}>
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 16 }}>
            <div style={labelStyle}>Waar wil je vragen over ontvangen? <span style={{ opacity: 0.55, fontWeight: 400 }}>(max 3)</span></div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {VAKKEN.map((v) => (
                <button key={v.id} type="button" onClick={() => toggleVak(v.id)} style={tegel(vakken.includes(v.id))}>
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <button type="button" onClick={meldAan} disabled={status === "busy"} style={{ ...primaryBtn, width: "auto", opacity: status === "busy" ? 0.7 : 1 }}>
              {status === "busy" ? "Bezig…" : "Klaar, stuur maar →"}
            </button>
            <button type="button" onClick={meldAan} disabled={status === "busy"} style={linkBtn}>Sla over</button>
          </div>
        </>
      )}

      {fout && (
        <div style={{ marginTop: 10, fontSize: 12.5, color: "#ff8a80", fontFamily: "var(--font-body)" }}>{fout}</div>
      )}
    </div>
  );
}

function inputStyle(error) {
  return {
    width: "100%", boxSizing: "border-box", padding: "11px 14px", borderRadius: 10,
    border: error ? "1.5px solid #ff5252" : "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)", color: "var(--color-text, #e8edf5)",
    fontFamily: "var(--font-body)", fontSize: 14,
  };
}
const primaryBtn = {
  width: "100%", padding: "11px 20px", borderRadius: 10, border: "none",
  background: "linear-gradient(135deg, #00C853, #00e676)", color: "#0a1525",
  fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, cursor: "pointer",
};
const labelStyle = {
  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
  color: "rgba(255,255,255,0.8)", marginBottom: 8,
};
function tegel(active) {
  return {
    padding: "8px 14px", borderRadius: 10, cursor: "pointer",
    border: active ? "1.5px solid #00C853" : "1px solid rgba(255,255,255,0.18)",
    background: active ? "rgba(0,200,83,0.18)" : "rgba(255,255,255,0.05)",
    color: active ? "#69f0ae" : "rgba(255,255,255,0.7)",
    fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
  };
}
const linkBtn = {
  background: "none", border: "none", padding: 0, color: "#69f0ae",
  fontFamily: "inherit", fontSize: 13, fontWeight: 700, cursor: "pointer", textDecoration: "underline",
};

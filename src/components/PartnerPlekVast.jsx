// 📮 "Je plek is vast" — het kaartje dat om een e-mailadres vraagt (12 sep 2026).
//
// Waarom dit bestaat: een partner-claim (voedselbank, Leergeld, bibliotheek,
// de Kinderhulp-nieuwsbrief) gebeurt stil na drie antwoorden en vraagt nergens
// om een adres. Van de 27 gezinnen die deze week een plek claimden staat er
// daarom niet één met een adres in de database. Toen bleek dat er maar 11%
// terugkwam op een tweede dag, was er geen enkele manier om ze iets te sturen.
// Dit kaartje is die manier — en het verschijnt op het enige eerlijke moment:
// vlak nadat het gezin echt iets gekregen heeft.
//
// Regels die hier gelden:
//   - Eén keer. Wie wegklikt wordt nooit opnieuw gevraagd (KEY_ADRESVRAAG).
//   - Overslaan moet net zo makkelijk zijn als invullen. Geen drempel voor het
//     gratis aanbod: de plek is al van hen, met of zonder adres.
//   - Het adres is van de ouder of verzorger, nooit van het kind.
//   - plan 'gratis-lesmateriaal' — dat staat in PLANNEN van de weekmail, dus
//     deze mensen krijgen ook echt post. (Zie de dictee/weekrapport-les.)
import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { track } from "../utils.js";
import { adresvraagOpen, adresvraagAfronden, actievePartnerCode, partnerFamilieTot } from "../features/referral/partnerCode.js";

const geldigEmail = (s) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s);

export default function PartnerPlekVast({ userName }) {
  const [open, setOpen] = useState(false);
  const [stap, setStap] = useState("vraag"); // vraag | klaar
  const [email, setEmail] = useState("");
  const [bezig, setBezig] = useState(false);
  const [foutje, setFoutje] = useState("");

  useEffect(() => {
    // Even wachten: de claim valt midden in een vraag. Het kind maakt eerst af.
    if (!adresvraagOpen()) return;
    const t = setTimeout(() => {
      if (adresvraagOpen()) {
        setOpen(true);
        try { track("partner_adresvraag_zichtbaar", { code: actievePartnerCode() || "?" }); } catch { /* */ }
      }
    }, 6000);
    return () => clearTimeout(t);
  }, []);

  if (!open) return null;

  const sluit = () => { adresvraagAfronden(); setOpen(false); };

  const overslaan = () => {
    try { track("partner_adresvraag_overgeslagen"); } catch { /* */ }
    sluit();
  };

  const opslaan = async () => {
    const adres = email.trim().toLowerCase();
    if (!geldigEmail(adres)) { setFoutje("Dat e-mailadres klopt nog niet helemaal."); return; }
    setFoutje(""); setBezig(true);
    const code = actievePartnerCode() || null;
    try {
      const { error } = await supabase.from("upgrade_waitlist").insert({
        email: adres,
        plan: "gratis-lesmateriaal",
        source: "partner-claim",
        ref: code,
        consent_at: new Date().toISOString(),
        kind_voornaam: (userName || "").trim().slice(0, 40) || null,
      });
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      try { track("partner_adresvraag_gelukt", { code: code || "?" }); } catch { /* */ }
      adresvraagAfronden();
      setStap("klaar");
      setTimeout(() => setOpen(false), 4000);
    } catch {
      setFoutje("Even geen verbinding. Probeer het zo nog eens.");
    }
    setBezig(false);
  };

  const tot = partnerFamilieTot();
  const totTekst = tot ? `tot ${tot}` : "";

  return (
    <div style={{
      position: "fixed", left: 12, right: 12, bottom: 12, zIndex: 9000,
      maxWidth: 420, margin: "0 auto",
      background: "var(--color-bg-surface, #101a2e)",
      border: "1.5px solid #ffd54f", borderRadius: 14,
      boxShadow: "0 10px 30px rgba(0,0,0,0.35)", padding: "14px 16px",
    }}>
      {stap === "klaar" ? (
        <div style={{ textAlign: "center", padding: "6px 0" }}>
          <div style={{ fontSize: 30, marginBottom: 4 }}>📬</div>
          <div style={{ fontWeight: 800, fontSize: 15 }}>Gelukt — we houden je op de hoogte.</div>
          <div style={{ fontSize: 13.5, color: "var(--color-text-muted)", marginTop: 4 }}>
            In de eerste mail staat een knop om het te bevestigen. Zonder die tik sturen we niets meer.
          </div>
        </div>
      ) : (
        <>
          <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 4 }}>🎟️ Je plek is vast</div>
          <div style={{ fontSize: 13.5, lineHeight: 1.45, color: "var(--color-text-muted)", marginBottom: 10 }}>
            Het Familie-pakket is voor jullie gratis{totTekst ? ` ${totTekst}` : ""}. Daar hoef je niets meer voor te doen,
            ook niet als je hieronder niets invult.
            <br /><br />
            <strong>Helemaal vrijblijvend:</strong> wil je een berichtje als er nieuw oefenmateriaal klaarstaat?
            Vul dan het e-mailadres van je ouder of verzorger in.
          </div>
          <input
            type="email"
            inputMode="email"
            autoComplete="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (foutje) setFoutje(""); }}
            onKeyDown={(e) => { if (e.key === "Enter") opslaan(); }}
            placeholder="e-mail van ouder of verzorger"
            style={{
              width: "100%", boxSizing: "border-box", padding: "10px 12px",
              borderRadius: 10, border: "1px solid var(--color-border-soft, #2a3a55)",
              background: "var(--color-bg-base, #0a0f1e)", color: "inherit",
              fontSize: 15, marginBottom: foutje ? 4 : 10, minHeight: 42,
            }}
          />
          {foutje && <div style={{ color: "#ff8a80", fontSize: 13, marginBottom: 8 }}>{foutje}</div>}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button
              type="button"
              onClick={opslaan}
              disabled={bezig}
              style={{
                flex: 1, background: "linear-gradient(135deg,#ffd54f,#ffaa00)", color: "#0c1526",
                border: "none", borderRadius: 10, padding: "10px 16px", fontSize: 14,
                fontWeight: 800, cursor: bezig ? "default" : "pointer", minHeight: 42,
                fontFamily: "var(--font-display)", opacity: bezig ? 0.7 : 1,
              }}
            >{bezig ? "Even opslaan…" : "Houd me op de hoogte"}</button>
            <button
              type="button"
              onClick={overslaan}
              style={{
                background: "none", border: "none", color: "var(--color-text-muted)",
                fontSize: 13.5, cursor: "pointer", padding: "10px 6px", minHeight: 42,
              }}
            >Nee, hoeft niet</button>
          </div>
        </>
      )}
    </div>
  );
}

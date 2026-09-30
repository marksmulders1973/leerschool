// EmailLogin — "Inloggen met e-mail" (magic link, geen wachtwoord) voor ouders,
// verzorgers en leerkrachten. Staat naast de Google-knop.
//
// ── Anonieme sessie → e-mailaccount: waarom signInWithOtp en níét updateUser ──
// Élke bezoeker heeft al een anonieme Supabase-sessie (auth.js → ensureSession).
// Supabase kent twee wegen om daar een e-mail aan te hangen:
//
//  1. `supabase.auth.updateUser({ email })` — "Convert an anonymous user to a
//     permanent user" (docs: /guides/auth/auth-anonymous#convert-an-anonymous-
//     user-to-a-permanent-user). Koppelt het e-mailadres aan de HUIDIGE anonieme
//     user. Nadelen: vereist "manual linking" in het dashboard, verstuurt de
//     "Change Email Address"-template (niet de Magic Link-template) en faalt met
//     `email_exists` zodra het adres al bij een bestaand account hoort. Een ouder
//     die op een tweede toestel (verse anonieme sessie) wil inloggen, zou dan
//     nooit meer bij haar bestaande account komen. Dat is precies het geval dat
//     "Inloggen" moet oplossen.
//
//  2. `supabase.auth.signInWithOtp({ email })` — "Passwordless email sign-in"
//     (docs: /guides/auth/auth-email-passwordless#with-magic-link). Kijkt niet
//     naar de huidige sessie: bestaat de user → magic link naar dat account;
//     bestaat 'ie niet → wordt aangemaakt (shouldCreateUser). Na het tikken op
//     de link zet supabase-js de nieuwe sessie in localStorage over de anonieme
//     heen (implicit flow: tokens in de URL-hash, werkt óók als de mail in een
//     andere browser opent — PKCE zou daar stuklopen op de ontbrekende
//     code_verifier). Resultaat: precies ÉÉN user die het e-mailadres draagt,
//     zelfde gedrag als de Google-login via signInWithIdToken nu al heeft.
//
// Keuze: (2). De anonieme user blijft als weesrecord achter (net als bij
// Google); voortgang van dit toestel zit in localStorage en gaat gewoon mee.
//
// Terugkeer: emailRedirectTo = origin + terug (bv. /ouder). App.jsx zet via
// pageForPath("/ouder") direct het ouder-dashboard open en zet rol "ouder" als
// er nog geen rol is (App.jsx, effect "Wie op het ouder-dashboard inlogt").
// Als vangnet zetten we óók lk_login_terug (zelfde sleutel als de Google-
// redirect) voor het geval Supabase op de Site URL "/" landt.
//
// AVG art. 8: zelfde poort als Google — géén consent (hasConsent) → eerst de
// AgeGate-modal, daarna pas de mail versturen.

import { useEffect, useRef, useState } from "react";
import supabase from "../supabase.js";
import AgeGate, { hasConsent } from "../components/AgeGate.jsx";
import { track } from "../utils.js";

// Verlopen/al-gebruikte link: Supabase stuurt dan terug met
// #error=access_denied&error_code=otp_expired. supabase-js wist de hash kort
// na het laden — daarom hier al bij module-evaluatie vastleggen.
const LINK_FOUT_BIJ_START = (() => {
  try { return /error_code=otp_expired|error_code=otp_disabled/.test(window.location.hash || ""); } catch { return false; }
})();

const HERSTUUR_WACHT_S = 30;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function foutTekst(error) {
  const code = error?.code || "";
  const status = error?.status || 0;
  const msg = (error?.message || "").toLowerCase();
  if (code === "over_email_send_rate_limit" || code === "over_request_rate_limit" || status === 429 || msg.includes("rate limit") || msg.includes("security purposes")) {
    return "Even te vaak geprobeerd, probeer het over een minuut.";
  }
  if (code === "validation_failed" || code === "email_address_invalid" || msg.includes("invalid format") || msg.includes("validate email")) {
    return "Dat lijkt geen geldig e-mailadres.";
  }
  if (code === "signup_disabled" || code === "otp_disabled" || code === "email_provider_disabled" || msg.includes("signups not allowed")) {
    return "Inloggen met e-mail staat op dit moment uit. Probeer het met Google of stuur een mailtje naar hallo@leerkwartier.app.";
  }
  if (code === "email_address_not_authorized") {
    return "Dit e-mailadres kan nu geen mail van ons ontvangen. Probeer het met Google of mail naar hallo@leerkwartier.app.";
  }
  return "Het versturen lukte niet. Probeer het nog een keer.";
}

export default function EmailLogin({ terug = "/ouder", compact = false, onVerstuurd = null }) {
  const [email, setEmail] = useState("");
  const [bezig, setBezig] = useState(false);
  const [verstuurdNaar, setVerstuurdNaar] = useState("");
  const [fout, setFout] = useState("");
  const [wacht, setWacht] = useState(0);
  const [consentOpen, setConsentOpen] = useState(false);
  const [linkFout, setLinkFout] = useState(LINK_FOUT_BIJ_START);
  const timerRef = useRef(null);

  useEffect(() => {
    if (wacht <= 0) return undefined;
    timerRef.current = setTimeout(() => setWacht((w) => w - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [wacht]);

  const verstuur = async (adres) => {
    setBezig(true);
    setFout("");
    try {
      const redirect = window.location.origin + (terug.startsWith("/") ? terug : "/" + terug);
      // Vangnet-sleutel, zelfde als de Google-redirect (useAuth/App.jsx).
      try { localStorage.setItem("lk_login_terug", JSON.stringify({ p: terug, t: Date.now() })); } catch { /* niet fataal */ }
      const { error } = await supabase.auth.signInWithOtp({
        email: adres,
        options: { emailRedirectTo: redirect, shouldCreateUser: true },
      });
      if (error) {
        setFout(foutTekst(error));
        try { track("email_login_fout", { code: error.code || "", status: error.status || 0 }); } catch { /* */ }
        return;
      }
      setVerstuurdNaar(adres);
      setLinkFout(false);
      setWacht(HERSTUUR_WACHT_S);
      try { track("email_login_verstuurd", { terug, opnieuw: !!verstuurdNaar }); } catch { /* */ }
      try { onVerstuurd?.(adres); } catch { /* */ }
    } catch (e) {
      setFout(foutTekst(e));
    } finally {
      setBezig(false);
    }
  };

  const onSubmit = (e) => {
    e?.preventDefault?.();
    const adres = email.trim().toLowerCase();
    if (!EMAIL_RE.test(adres)) { setFout("Dat lijkt geen geldig e-mailadres."); return; }
    if (!hasConsent()) { setConsentOpen(true); return; }
    verstuur(adres);
  };

  const pad = compact ? "11px 13px" : "13px 15px";
  const fs = compact ? 14 : 15;
  const inputStijl = {
    flex: 1, minWidth: 0, width: "100%", boxSizing: "border-box",
    padding: pad, borderRadius: 12,
    border: fout ? "1px solid rgba(255,112,67,0.7)" : "1px solid rgba(255,255,255,0.18)",
    background: "rgba(255,255,255,0.06)", color: "#fff",
    fontFamily: "var(--font-body, sans-serif)", fontSize: fs,
  };
  const knopStijl = {
    padding: pad, borderRadius: 12, border: "none", cursor: bezig ? "wait" : "pointer",
    background: "linear-gradient(135deg, var(--color-brand-primary, #00C853), #00897b)",
    color: "#fff", fontFamily: "var(--font-display, sans-serif)", fontSize: fs, fontWeight: 700,
    whiteSpace: "nowrap", opacity: bezig ? 0.7 : 1,
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: compact ? 6 : 8 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body, sans-serif)", fontSize: compact ? 12 : 13 }}>
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
        <span>Of log in met je e-mailadres</span>
        <span style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.12)" }} />
      </div>

      {linkFout && !verstuurdNaar && (
        <div role="status" style={{ padding: "10px 12px", borderRadius: 12, background: "rgba(255,183,77,0.10)", border: "1px solid rgba(255,183,77,0.35)", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-body, sans-serif)", fontSize: 13, lineHeight: 1.45 }}>
          Die inloglink is verlopen of al gebruikt. Vraag hieronder een nieuwe aan.
        </div>
      )}

      {verstuurdNaar ? (
        <div role="status" style={{ padding: "12px 14px", borderRadius: 14, background: "rgba(0,200,83,0.10)", border: "1px solid rgba(0,200,83,0.35)", fontFamily: "var(--font-body, sans-serif)", color: "rgba(255,255,255,0.9)", fontSize: compact ? 13 : 14, lineHeight: 1.5 }}>
          <div style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, color: "#00e676", marginBottom: 4 }}>Mail is onderweg naar {verstuurdNaar}</div>
          Kijk in je mail (ook in spam). Tik op de link, dan ben je ingelogd.
          <div style={{ marginTop: 8, display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <button
              type="button"
              disabled={wacht > 0 || bezig}
              onClick={() => verstuur(verstuurdNaar)}
              style={{ background: "none", border: "none", padding: 0, cursor: wacht > 0 ? "default" : "pointer", color: wacht > 0 ? "rgba(255,255,255,0.4)" : "#00d4ff", fontFamily: "var(--font-body, sans-serif)", fontSize: 13, textDecoration: wacht > 0 ? "none" : "underline" }}
            >
              {wacht > 0 ? `Geen mail? Opnieuw sturen kan over ${wacht} s` : "Geen mail? Stuur opnieuw"}
            </button>
            <button
              type="button"
              onClick={() => { setVerstuurdNaar(""); setFout(""); setWacht(0); }}
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body, sans-serif)", fontSize: 13 }}
            >
              Ander adres
            </button>
          </div>
          {fout && <div style={{ color: "#ff7043", fontSize: 12, marginTop: 6 }}>{fout}</div>}
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate style={{ display: "flex", flexDirection: compact ? "column" : "row", gap: 8, width: "100%" }}>
          <label htmlFor="lk-email-login" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>E-mailadres</label>
          <input
            id="lk-email-login"
            type="email"
            name="email"
            autoComplete="email"
            inputMode="email"
            placeholder="naam@voorbeeld.nl"
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (fout) setFout(""); }}
            disabled={bezig}
            aria-invalid={!!fout}
            aria-describedby={fout ? "lk-email-login-fout" : undefined}
            style={inputStijl}
          />
          <button type="submit" disabled={bezig} style={knopStijl}>
            {bezig ? "Bezig…" : "Stuur mij een inloglink"}
          </button>
        </form>
      )}

      {fout && !verstuurdNaar && (
        <div id="lk-email-login-fout" role="alert" style={{ color: "#ff7043", fontFamily: "var(--font-body, sans-serif)", fontSize: 12.5 }}>{fout}</div>
      )}

      {!verstuurdNaar && !compact && (
        <div style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-body, sans-serif)", fontSize: 12, lineHeight: 1.45 }}>
          Geen wachtwoord nodig: je krijgt een link in je mail waarmee je meteen bent ingelogd.
        </div>
      )}

      {/* Zelfde AVG-poort als de Google-knop (App.jsx loginWithConsent): eerst
          leeftijd/ouder-toestemming, daarna pas de mail versturen. */}
      <AgeGate
        open={consentOpen}
        onConsent={() => { setConsentOpen(false); verstuur(email.trim().toLowerCase()); }}
        onClose={() => setConsentOpen(false)}
      />
    </div>
  );
}

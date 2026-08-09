// ProBadge — klein tier-label ("● Familie · nu gratis") naast een betaalde extra.
//
// Doet vier dingen (Mark 2026-06-06, kleuren + kind-modus + wachtlijst 2026-08-09):
//  1. Toont met een kleur-stip + woord bij welke laag de feature hoort
//     (Familie goud · Pro blauw · Kwartier-tegoed paars — LAAG_KLEUREN in
//     proPlan.js), met de eerlijke "nu gratis"-framing.
//  2. Klik → kort pop-overtje met uitleg (wat het is + het prijsmodel).
//  3. `kind`-modus: in schermen waar het kind zit (AI-buddy, leerpaden) géén
//     prijzen of koopdruk — alleen wat het is + "vraag je ouder of verzorger".
//  4. Volwassen pop-over: "Houd me op de hoogte"-veldje → upgrade_waitlist,
//     zodat zichtbaarheid ook e-mailadressen oplevert (reclame → e-mail-regel).
//
// Het effectieve "gebruikt"-signaal zet je apart op het punt-van-gebruik met
// trackProUse() uit proPlan.js (bv. als iemand echt een AI-vraag stelt).

import { useState, useEffect, useRef } from "react";
import { getProFeature, getLaag, PRO_MODEL, LAAG_KLEUREN, trackProSeen, trackProUse } from "./proPlan.js";
import supabase from "../supabase.js";
import { track } from "../utils.js";

// Kleine groene "● Gratis"-tegenhanger: zet 'm naast gratis onderdelen die in
// hetzelfde scherm staan als betaalde extra's, zodat het verschil zichtbaar is.
// Copy bewust gekwalificeerd (feedback_gratis_belofte_gekwalificeerd).
export function GratisBadge({ size = "sm", style }) {
  const k = LAAG_KLEUREN.gratis;
  const pad = size === "md" ? "4px 10px" : "2px 8px";
  const fontSize = size === "md" ? 12 : 10.5;
  return (
    <span
      title="Hoort bij de gratis leer-basis"
      style={{
        display: "inline-flex", alignItems: "center", gap: 5, padding: pad, borderRadius: 20,
        border: `1px solid ${k.rand}`, background: k.vlak, color: k.tekst,
        fontFamily: "var(--font-display)", fontSize, fontWeight: 800,
        whiteSpace: "nowrap", lineHeight: 1.4, verticalAlign: "middle", ...style,
      }}
    >
      <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: k.dot }} />
      Gratis
    </span>
  );
}

export default function ProBadge({ feature, showFree = true, size = "sm", kind = false, onInfo, style }) {
  const f = getProFeature(feature);
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [mailStatus, setMailStatus] = useState("idle"); // idle | busy | done | error
  const ref = useRef(null);

  useEffect(() => { trackProSeen(feature); }, [feature]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  if (!f) return null;

  // De laag bepaalt woord én kleur: Familie (goud), Pro (blauw) of
  // Kwartier-tegoed (paars). Fallback op Familie-goud voor oude features.
  const laag = getLaag(f.laag);
  const laagNaam = laag ? laag.naam : "Pro";
  const kleur = LAAG_KLEUREN[f.laag] || LAAG_KLEUREN.familie;

  const pad = size === "md" ? "4px 10px" : "2px 8px";
  const fontSize = size === "md" ? 12 : 10.5;

  const stuurWachtlijst = async () => {
    const adres = email.trim();
    if (!adres.includes("@") || adres.length < 5) { setMailStatus("error"); return; }
    setMailStatus("busy");
    try {
      const { error } = await supabase.from("upgrade_waitlist").insert({
        email: adres, plan: `interesse-${f.laag}`, source: `tier_badge:${feature}`,
      });
      if (error && !/duplicate|unique/i.test(error.message || "")) throw error;
      track("tier_waitlist_signup", { feature, laag: f.laag });
      setMailStatus("done");
    } catch { setMailStatus("error"); }
  };

  return (
    <span ref={ref} style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 6, verticalAlign: "middle", ...style }}>
      <button
        type="button"
        onClick={() => { setOpen((o) => !o); if (!open) trackProUse(feature, { via: "badge_klik" }); }}
        title={`${f.label} — ${laagNaam}-extra · ${PRO_MODEL.kort}`}
        aria-label={kind
          ? `${f.label} hoort straks bij ${laagNaam}. Nu gratis om uit te proberen.`
          : `${f.label} is straks een ${laagNaam}-extra. ${PRO_MODEL.uitleg}`}
        style={{
          display: "inline-flex", alignItems: "center", gap: 5, padding: pad, borderRadius: 20,
          border: `1px solid ${kleur.rand}`,
          background: kleur.vlak,
          color: kleur.tekst, fontFamily: "var(--font-display)", fontSize, fontWeight: 800,
          cursor: "pointer", whiteSpace: "nowrap", lineHeight: 1.4,
        }}
      >
        <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: "50%", background: kleur.dot }} />
        {laagNaam}
      </button>
      {showFree && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: fontSize - 0.5, fontWeight: 700, color: "#69f0ae", whiteSpace: "nowrap" }}>
          nu gratis
        </span>
      )}

      {open && (
        <span
          role="tooltip"
          style={{
            position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 50, width: 270,
            background: "#0e1a2b", border: `1px solid ${kleur.rand}`, borderRadius: 14,
            padding: "12px 14px", boxShadow: "0 10px 32px rgba(0,0,0,0.5)", textAlign: "left",
            fontFamily: "var(--font-body)", cursor: "default",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: kleur.tekst, marginBottom: 6 }}>
            <span aria-hidden="true" style={{ fontSize: 16 }}>{f.icon}</span> {f.label}
            <span style={{ fontSize: 10, fontWeight: 700, color: "#69f0ae", marginLeft: "auto" }}>
              {f.status === "live" ? "✓ nu gratis" : "binnenkort"}
            </span>
          </span>
          <span style={{ display: "block", fontSize: 12.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.5, marginBottom: 8 }}>
            {f.blurb}
          </span>

          {kind ? (
            // Kind-modus: geen prijzen, geen wachtlijst, geen koopdruk.
            <span style={{ display: "block", fontSize: 11.5, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
              Dit is nu gratis om uit te proberen. Wil je er meer over weten?
              Vraag je ouder of verzorger.
            </span>
          ) : (
            <>
              <span style={{ display: "block", fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: 10 }}>
                {PRO_MODEL.uitleg}
              </span>
              {mailStatus === "done" ? (
                <span style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#69f0ae", marginBottom: onInfo ? 10 : 0 }}>
                  ✓ Gelukt — je hoort van ons vóór er iets verandert.
                </span>
              ) : (
                <span style={{ display: "flex", gap: 6, marginBottom: onInfo ? 10 : 0 }}>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (mailStatus === "error") setMailStatus("idle"); }}
                    onKeyDown={(e) => { if (e.key === "Enter") stuurWachtlijst(); }}
                    placeholder="jouw@mailadres.nl"
                    aria-label="E-mailadres om op de hoogte te blijven"
                    style={{
                      flex: 1, minWidth: 0, padding: "7px 9px", borderRadius: 8, fontSize: 12,
                      border: mailStatus === "error" ? "1px solid #ef5350" : "1px solid rgba(255,255,255,0.2)",
                      background: "rgba(255,255,255,0.06)", color: "#fff",
                    }}
                  />
                  <button
                    type="button"
                    onClick={stuurWachtlijst}
                    disabled={mailStatus === "busy"}
                    style={{
                      padding: "7px 10px", borderRadius: 8, border: "none", cursor: "pointer",
                      background: kleur.vlak, color: kleur.tekst, outline: `1px solid ${kleur.rand}`,
                      fontFamily: "var(--font-display)", fontSize: 11.5, fontWeight: 800, whiteSpace: "nowrap",
                    }}
                  >
                    {mailStatus === "busy" ? "…" : "📬 Houd me op de hoogte"}
                  </button>
                </span>
              )}
            </>
          )}

          {onInfo && (
            <button
              type="button"
              onClick={() => { setOpen(false); onInfo(); }}
              style={{ background: "none", border: "none", padding: 0, color: kleur.tekst, fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 800, cursor: "pointer", textDecoration: "underline" }}
            >
              Bekijk alle extra's →
            </button>
          )}
        </span>
      )}
    </span>
  );
}

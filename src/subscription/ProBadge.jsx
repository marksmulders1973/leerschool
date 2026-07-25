// ProBadge — klein "✨ Pro"-label dat je naast een Pro-feature zet.
//
// Doet drie dingen (Mark 2026-06-06):
//  1. Toont dat dit straks een Pro-extra is — met de eerlijke "nu nog gratis"-
//     framing, zodat mensen zien wat ze winnen.
//  2. Klik → kort pop-overtje met uitleg (wat het is + het per-kwartier-model).
//  3. Logt 1× per sessie dat de feature gezien is (trackProSeen), zodat we
//     meten hoe vaak elke Pro-feature in beeld komt.
//
// Het effectieve "gebruikt"-signaal zet je apart op het punt-van-gebruik met
// trackProUse() uit proPlan.js (bv. als iemand echt een AI-vraag stelt).

import { useState, useEffect, useRef } from "react";
import { getProFeature, getLaag, PRO_MODEL, trackProSeen, trackProUse } from "./proPlan.js";

export default function ProBadge({ feature, showFree = true, size = "sm", onInfo, style }) {
  const f = getProFeature(feature);
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => { trackProSeen(feature); }, [feature]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  if (!f) return null;

  // De laag bepaalt wat de badge zegt: Familie (ouders), Pro (leerkrachten)
  // of Kwartier-tegoed (losse extra's). Fallback op "Pro" voor oude features.
  const laag = getLaag(f.laag);
  const laagNaam = laag ? laag.naam : "Pro";

  const pad = size === "md" ? "4px 10px" : "2px 8px";
  const fontSize = size === "md" ? 12 : 10.5;

  return (
    <span ref={ref} style={{ position: "relative", display: "inline-flex", alignItems: "center", gap: 6, verticalAlign: "middle", ...style }}>
      <button
        type="button"
        onClick={() => { setOpen((o) => !o); if (!open) trackProUse(feature, { via: "badge_klik" }); }}
        title={`${f.label} — ${laagNaam}-extra · ${PRO_MODEL.kort}`}
        aria-label={`${f.label} is straks een ${laagNaam}-extra. ${PRO_MODEL.uitleg}`}
        style={{
          display: "inline-flex", alignItems: "center", gap: 5, padding: pad, borderRadius: 20,
          border: "1px solid rgba(255,183,77,0.5)",
          background: "linear-gradient(135deg, rgba(255,183,77,0.22), rgba(255,138,0,0.14))",
          color: "#ffce80", fontFamily: "var(--font-display)", fontSize, fontWeight: 800,
          cursor: "pointer", whiteSpace: "nowrap", lineHeight: 1.4,
        }}
      >
        <span aria-hidden="true">✨</span> {laagNaam}
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
            position: "absolute", top: "calc(100% + 8px)", left: 0, zIndex: 50, width: 260,
            background: "#0e1a2b", border: "1px solid rgba(255,183,77,0.35)", borderRadius: 14,
            padding: "12px 14px", boxShadow: "0 10px 32px rgba(0,0,0,0.5)", textAlign: "left",
            fontFamily: "var(--font-body)", cursor: "default",
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 7, fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "#ffce80", marginBottom: 6 }}>
            <span aria-hidden="true" style={{ fontSize: 16 }}>{f.icon}</span> {f.label}
            <span style={{ fontSize: 10, fontWeight: 700, color: "#69f0ae", marginLeft: "auto" }}>
              {f.status === "live" ? "✓ nu gratis" : "binnenkort"}
            </span>
          </span>
          <span style={{ display: "block", fontSize: 12.5, color: "rgba(255,255,255,0.8)", lineHeight: 1.5, marginBottom: 8 }}>
            {f.blurb}
          </span>
          <span style={{ display: "block", fontSize: 11.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: onInfo ? 10 : 0 }}>
            {PRO_MODEL.uitleg}
          </span>
          {onInfo && (
            <button
              type="button"
              onClick={() => { setOpen(false); onInfo(); }}
              style={{ background: "none", border: "none", padding: 0, color: "#ffce80", fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 800, cursor: "pointer", textDecoration: "underline" }}
            >
              Bekijk alle extra's →
            </button>
          )}
        </span>
      )}
    </span>
  );
}

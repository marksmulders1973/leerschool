// 💛 FamilieAfsluiten — één slimme "Familie"-link voor overal (Mark 30 sep 2026:
// "op zoveel als mogelijk plekken het Familie-pakket klikbaar maken om te kunnen
// afsluiten"). Kiest zelf wat het toont:
//   · kind-scherm (prop kind)         → niets (kinderen krijgen geen koopdruk)
//   · gezin met partnercode           → "Je hebt Familie al — gratis via je code"
//   · al betaald (subscriptions/stripe) → "Familie actief t/m …"
//   · anders                          → link naar het afsluiten (abonnement.html#familie)
// Vroege vogel: wie vóór 1 jan 2027 afsluit, betaalt pas vanaf 1 jan 2027
// (api/checkout-session.js FAMILIE_START) — dat staat er eerlijk bij.
// Meten: event familie_klik { plek } + ?van=<plek> op de link.

import { useEffect, useState } from "react";
import supabase from "../supabase.js";
import { track } from "../utils.js";
import { partnerRechtCache, haalPartnerRecht } from "../features/referral/partnerCode.js";
import { PAYWALL_ACTIVE } from "./config.js";
import ProefweekKnop from "./ProefweekKnop.jsx";

export const FAMILIE_URL = "/abonnement.html";
export const FAMILIE_START = "2027-01-01T00:00:00+01:00";
export const FAMILIE_PRIJS = "€ 39 voor 12 maanden";

// 6 nov 2026: staat de poort aan, dan is de "vroege vogel"-periode voorbij, ook vóór 1 januari.
export const voorLancering = () => !PAYWALL_ACTIVE && Date.now() < Date.parse(FAMILIE_START);
export const poortAan = () => PAYWALL_ACTIVE;
export const familieHref = (plek) => `${FAMILIE_URL}?van=${encodeURIComponent(plek || "app")}#familie`;

const datumNL = (d) => new Date(d).toLocaleDateString("nl-NL", { day: "numeric", month: "long", year: "numeric" });

function partnerStatus(recht) {
  if (!recht || !recht.recht) return null;
  const tot = recht.blijvend ? null : recht.familie_tot || null;
  if (tot && new Date(tot) < new Date()) return null;
  return { soort: "partner", tot };
}

// Status van dit gezin: "open" | {soort:"partner",tot} | {soort:"betaald",tot}
export function useFamilieStatus() {
  const [status, setStatus] = useState(() => {
    try { return partnerStatus(partnerRechtCache()) || "open"; } catch { return "open"; }
  });
  useEffect(() => {
    let weg = false;
    (async () => {
      try {
        const p = partnerStatus(await haalPartnerRecht());
        if (p) { if (!weg) setStatus(p); return; }
      } catch {}
      try {
        const { data: s } = await supabase.auth.getSession();
        const uid = s?.session?.user?.id;
        if (!uid) return;
        const { data } = await supabase.from("subscriptions")
          .select("valid_until,bron,status,plan").eq("user_id", uid).maybeSingle();
        if (data && data.status === "active" && data.valid_until && new Date(data.valid_until) > new Date()) {
          // 6 nov 2026: proefweek apart — die mag wél een koopknop erbij krijgen.
          if (!weg) setStatus({ soort: data.plan === "proefweek" ? "proef" : "betaald", tot: data.valid_until });
        }
      } catch {}
    })();
    return () => { weg = true; };
  }, []);
  return status;
}

// Nooit mee afdrukken (Weekschema/Diploma e.d. zijn printpagina's).
const GEEN_PRINT = <style>{"@media print{[data-lk-familie]{display:none!important}}"}</style>;

export default function FamilieAfsluiten(props) {
  const inhoud = <FamilieAfsluitenInhoud {...props} />;
  return <span data-lk-familie="" style={{ display: "contents" }}>{GEEN_PRINT}{inhoud}</span>;
}

// variant: "link" (inline tekstlink) · "knop" (opvallende knop) · "regel" (kaartje met uitleg)
function FamilieAfsluitenInhoud({ plek, variant = "link", kind = false, tekst, style }) {
  const status = useFamilieStatus();
  if (kind) return null;

  const goud = "#ffd54f";
  const href = familieHref(plek);
  const klik = () => track("familie_klik", { plek: plek || "app", variant });
  if (status !== "open") {
    // Proefweek loopt: zeg het, en bied het jaar aan (één keer, stopt vanzelf).
    if (status.soort === "proef") {
      if (variant === "link") {
        return (
          <a href={href} onClick={klik} style={{ color: goud, fontWeight: 800, textDecoration: "underline", textUnderlineOffset: 3, ...style }}>
            Proefweek loopt t/m {datumNL(status.tot)} · Kies Familie ({FAMILIE_PRIJS}) →
          </a>
        );
      }
      return (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.8)", ...style }}>
          <div style={{ color: "#69f0ae", fontWeight: 700, marginBottom: 6 }}>✓ Je proefweek loopt t/m {datumNL(status.tot)}.</div>
          <a href={href} onClick={klik} style={{ display: "inline-block", padding: "9px 16px", borderRadius: 10, background: goud, color: "#0b1224", fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 800, textDecoration: "none" }}>
            Kies Familie — {FAMILIE_PRIJS}
          </a>
        </div>
      );
    }
    if (variant === "link") return null; // inline: niets verkopen aan wie het al heeft
    const zin = status.soort === "partner"
      ? `Je hebt Familie al — gratis via je code${status.tot ? ` t/m ${datumNL(status.tot)}` : ""}.`
      : `Familie is actief${status.tot ? ` t/m ${datumNL(status.tot)}` : ""}. Fijn dat je meedoet!`;
    return (
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#69f0ae", fontWeight: 700, ...style }}>✓ {zin}</div>
    );
  }

  const label = tekst || (variant === "link" ? `Kies Familie (${FAMILIE_PRIJS}) →` : `Kies Familie — ${FAMILIE_PRIJS}`);
  const vroeg = voorLancering()
    ? "Tot 1 januari is alles gratis. Sluit je nu af, dan gaan je 12 maanden pas in op 1 januari 2027."
    : poortAan()
      ? "Eerst een week gratis proberen, zonder betaalgegevens. Daarna € 39 voor 12 maanden: één keer betalen, stopt vanzelf. Per gezin, niet per kind."
      : "Eén keer betalen, stopt vanzelf. Per gezin, niet per kind.";

  if (variant === "link") {
    return (
      <a href={href} onClick={klik} style={{ color: goud, fontWeight: 800, textDecoration: "underline", textUnderlineOffset: 3, ...style }}>
        {label}
      </a>
    );
  }
  if (variant === "knop") {
    return (
      <span style={{ display: "inline-flex", gap: 10, flexWrap: "wrap", alignItems: "flex-start" }}>
        <ProefweekKnop plek={plek || "app"} />
        <a href={href} onClick={klik} style={{
          display: "inline-block", padding: "10px 18px", borderRadius: 10, background: poortAan() ? "transparent" : goud, color: poortAan() ? goud : "#0b1224",
          border: poortAan() ? `2px solid ${goud}` : "none",
          fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, textDecoration: "none", ...style,
        }}>{label}</a>
      </span>
    );
  }
  return (
    <div style={{ borderRadius: 14, border: "1.5px solid rgba(255,213,79,0.45)", background: "rgba(255,213,79,0.08)", padding: "12px 14px", ...style }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "#ffce80", marginBottom: 4 }}>
        Dit hoort bij Familie
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, marginBottom: 10 }}>
        {vroeg}
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-start" }}>
        <ProefweekKnop plek={plek || "app"} />
        <a href={href} onClick={klik} style={{
          display: "inline-block", padding: "9px 16px", borderRadius: 10, background: poortAan() ? "transparent" : goud, color: poortAan() ? goud : "#0b1224",
          border: poortAan() ? `2px solid ${goud}` : "none",
          fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 800, textDecoration: "none",
        }}>{label}</a>
      </div>
    </div>
  );
}

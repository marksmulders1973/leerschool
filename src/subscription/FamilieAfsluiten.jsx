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
import { ACTIE, actieLoopt, actieDagen, familiePrijs, familiePrijsZin } from "./actie.js";

export const FAMILIE_URL = "/abonnement.html";
export const FAMILIE_START = "2027-01-01T00:00:00+01:00";
// 25 nov 2026: tijdens de Doorstroomtoets-actie "€ 19,50 voor 12 maanden" (zie actie.js).
export const FAMILIE_PRIJS = familiePrijs();

// 🎯 Eén regel die de actie laat zien, boven elke koopknop. Buiten de actie: niets.
// Echte einddatum voor iedereen; "nog N dagen" pas in de laatste twee weken.
export function ActieRegel({ style }) {
  if (!actieLoopt()) return null;
  const dagen = actieDagen();
  return (
    <span data-lk-actie="" style={{ display: "block", flexBasis: "100%", fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.45, color: "#fff", ...style }}>
      <span style={{ display: "inline-block", padding: "1px 8px", marginRight: 6, borderRadius: 20, background: "#ffd54f", color: "#0b1224", fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 900, letterSpacing: 0.3, textTransform: "uppercase" }}>{ACTIE.naam}</span>
      Nu <strong>{ACTIE.prijs}</strong> in plaats van <s style={{ opacity: 0.7 }}>{ACTIE.normaal}</s> voor 12 maanden, t/m {ACTIE.eindKort}.{dagen <= 14 ? ` Nog ${dagen} ${dagen === 1 ? "dag" : "dagen"}.` : ""}
    </span>
  );
}

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

// 🎯 Eén rustige regel voor de ouder op de startpagina (Mark 25 nov 2026: "probeer maar, ik heb nu 0").
// De startpagina is het kinderscherm: daarom geen prijs en geen knop, alleen één zin die de ouder
// aanspreekt en naar de prijspagina wijst. Alleen tijdens de actie, en niet voor gezinnen die het
// Familie-pakket al hebben (code of betaald). Meten: actie_regel_toon { plek } en familie_klik.
export function ActieOuderRegel({ plek = "home", style }) {
  const status = useFamilieStatus();
  const toon = actieLoopt() && status === "open";
  useEffect(() => {
    if (!toon) return;
    try { track("actie_regel_toon", { plek }); } catch { /* meting mag nooit breken */ }
  }, [toon, plek]);
  if (!toon) return null;
  return (
    <p data-lk-familie="" style={{ margin: "14px auto 10px", maxWidth: 520, padding: "0 12px", textAlign: "center", fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5, color: "rgba(255,255,255,0.7)", ...style }}>
      Ouder of verzorger?{" "}
      <a href={familieHref(`${plek}-actie`)} onClick={() => track("familie_klik", { plek: `${plek}-actie`, variant: "regel" })} style={{ color: "#ffd54f", fontWeight: 700, textDecoration: "underline", textUnderlineOffset: 3 }}>
        Het Familie-pakket is t/m {ACTIE.eindKort} half geld
      </a>.
    </p>
  );
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
          <ActieRegel style={{ marginBottom: 8 }} />
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
      ? "Eerst een week gratis proberen, zonder betaalgegevens. Daarna " + familiePrijsZin() + ": één pakket voor het hele gezin, tot 3 kinderen. Eén keer betalen, stopt vanzelf."
      : "Eén pakket voor het hele gezin, tot 3 kinderen. Eén keer betalen, stopt vanzelf.";

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
        <ActieRegel />
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
        Dit hoort bij het Familie-pakket
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

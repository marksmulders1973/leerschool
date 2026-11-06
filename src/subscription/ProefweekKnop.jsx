// 🧪 "Probeer een week gratis" — de knop die bij elke Familie-poort staat (6 nov 2026).
// Toont zichzelf alleen als de poort aan staat (PAYWALL_ACTIVE); daarvoor is alles al gratis.
// Na succes: korte bevestiging en de pagina herladen, zodat alle poorten meteen open staan.
import { useState } from "react";
import { PAYWALL_ACTIVE } from "./config.js";
import { startProefweek, datumNL } from "./proefweek.js";

export default function ProefweekKnop({ plek = "app", stijl = "knop", style, naLogin = "/mijn" }) {
  const [stand, setStand] = useState({ bezig: false, melding: null, link: null });
  if (!PAYWALL_ACTIVE) return null;

  const klik = async () => {
    if (stand.bezig) return;
    setStand({ bezig: true, melding: "Even bezig…", link: null });
    const r = await startProefweek(plek);
    if (r.ok) {
      setStand({ bezig: true, melding: `Je proefweek staat aan t/m ${datumNL(r.validUntil)}. Een moment…`, link: null });
      setTimeout(() => { try { window.location.reload(); } catch { /* */ } }, 900);
      return;
    }
    setStand({
      bezig: false,
      melding: r.tekst,
      link: r.login ? { href: naLogin, tekst: "Naar Mijn pagina →" } : r.gebruikt ? { href: "/abonnement.html#familie", tekst: "Bekijk Familie →" } : null,
    });
  };

  const basis = stijl === "link"
    ? { background: "none", border: "none", padding: 0, color: "#ffd54f", fontWeight: 800, textDecoration: "underline", textUnderlineOffset: 3, cursor: "pointer", font: "inherit" }
    : { display: "inline-block", padding: "10px 18px", borderRadius: 10, border: "none", background: "#ffd54f", color: "#0b1224", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, cursor: "pointer" };

  return (
    <span style={{ display: "inline-flex", flexDirection: "column", gap: 6, alignItems: stijl === "link" ? "flex-start" : "center", ...style }}>
      <button type="button" onClick={klik} disabled={stand.bezig} style={{ ...basis, opacity: stand.bezig ? 0.7 : 1 }}>
        Probeer een week gratis
      </button>
      {stand.melding && (
        <span role="status" style={{ fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.45, color: "rgba(255,255,255,0.85)", maxWidth: 360 }}>
          {stand.melding}{" "}
          {stand.link && <a href={stand.link.href} style={{ color: "#ffd54f", fontWeight: 800 }}>{stand.link.tekst}</a>}
        </span>
      )}
    </span>
  );
}

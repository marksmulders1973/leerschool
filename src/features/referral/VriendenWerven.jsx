// 🤝 Deel-actie 2027 (Mark 28 jul 2026): deel je persoonlijke link en zodra
// iemand via jouw link oefent, krijgen JULLIE BEIDEN Familie gratis tot aug
// 2027. Maximaal 50 plekken totaal — teller zichtbaar als urgentie-prikkel.
// Receiver: claim via claim_partner_plek('DEELACTIE2027') in referral.js.
// Sharer:   claim via claim_sharer_deel_beloning() (schrijft naar subscriptions).
// Alleen voor volwassenen: NIET in kinder-schermen (STOPLIST).

import { useState, useEffect } from "react";
import supabase from "../../supabase.js";
import { BRAND } from "../../brand.js";
import { track } from "../../utils.js";

const TOTAAL_PLEKKEN = 50;

export default function VriendenWerven({ authUser }) {
  const [code, setCode]           = useState(null);
  const [geworven, setGeworven]   = useState(0);
  const [resterend, setResterend] = useState(null); // null = laden
  const [beloond, setBeloond]     = useState(false);
  const [gekopieerd, setGekopieerd] = useState(false);
  const [fout, setFout]           = useState(false);

  useEffect(() => {
    if (!authUser) return;
    let weg = false;

    (async () => {
      try {
        // Code aanmaken/ophalen + stand
        await supabase.rpc("mijn_vriendencode");
        const [{ data: stand }, { data: slots }] = await Promise.all([
          supabase.rpc("vrienden_stand"),
          supabase.rpc("deel_actie_stand"),
        ]);
        if (weg) return;

        const s = Array.isArray(stand) ? stand[0] : stand;
        setCode(s?.code || null);
        const gew = s?.geworven || 0;
        setGeworven(gew);
        setResterend(typeof slots === "number" ? slots : TOTAAL_PLEKKEN);

        // Sharer-beloning claimen als geworven >= 1
        if (gew >= 1) {
          const { data: uitslag } = await supabase.rpc("claim_sharer_deel_beloning");
          if (!weg && (uitslag === "geclaimd" || uitslag === "geen_code")) {
            // 'geen_code' = al eerder geclaimd via andere weg; toon badge hoe dan ook
            setBeloond(true);
            // Lokaal direct honoreren zodat paywall het pikt zonder herstart
            try { localStorage.setItem("lk_partner_status", "pro2027"); } catch { /* */ }
            try { track("deel_actie_sharer_beloond", {}); } catch { /* */ }
          } else if (!weg && uitslag === "geclaimd") {
            setBeloond(true);
          } else if (!weg && gew >= 1) {
            // vrienden aanwezig maar RPC zegt geen_vrienden kan bij oude data — toon toch
            setBeloond(false);
          }
        }
      } catch {
        if (!weg) setFout(true);
      }
    })();

    return () => { weg = true; };
  }, [authUser]);

  if (!authUser || fout) return null;

  const link = code ? `https://${BRAND.domain}/?vriend=${code}` : null;
  const actieVoorbij = resterend !== null && resterend <= 0;

  const kopieer = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(
        `Wij oefenen gratis voor de Doorstroomtoets op ${BRAND.name}. Elke dag een kwartiertje — met uitleg op 3 niveaus. Via mijn link krijg jij ook gratis Familie-toegang tot 2027: ${link}`
      );
      setGekopieerd(true);
      setTimeout(() => setGekopieerd(false), 2500);
      try { track("deel_actie_link_gekopieerd"); } catch { /* */ }
    } catch { /* clipboard geweigerd */ }
  };

  return (
    <div style={{
      borderRadius: 14,
      border: "1px solid rgba(105,240,174,0.25)",
      background: "rgba(105,240,174,0.05)",
      padding: "16px 18px",
    }}>
      {/* Header */}
      <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "var(--color-brand-primary-100)", marginBottom: 4 }}>
        Geef Familie gratis weg
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
        Deel jouw link met een ouder. Zodra iemand via jouw link écht oefent (3 vragen), krijgen
        <strong style={{ color: "rgba(255,255,255,0.85)" }}> jullie beiden</strong> Leerkwartier Familie gratis tot augustus 2027 (straks ± € 39 per jaar).{" "}
        <a href="/abonnement.html#familie" style={{ color: "#ffd54f", fontWeight: 700, textDecorationColor: "rgba(255,213,79,0.5)" }}>Wat is Familie? →</a>
      </div>

      {/* Teller */}
      {resterend !== null && (
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          borderRadius: 8, background: actieVoorbij ? "rgba(255,100,100,0.1)" : "rgba(105,240,174,0.1)",
          border: `1px solid ${actieVoorbij ? "rgba(255,100,100,0.3)" : "rgba(105,240,174,0.3)"}`,
          padding: "5px 10px", marginBottom: 12,
          fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700,
          color: actieVoorbij ? "rgba(255,130,130,0.9)" : "var(--color-brand-primary-100)",
        }}>
          {actieVoorbij
            ? "Alle plekken zijn vergeven"
            : `Nog ${resterend} van de ${TOTAAL_PLEKKEN} plekken beschikbaar`}
        </div>
      )}

      {/* Sharer-beloning badge */}
      {beloond && (
        <div style={{
          borderRadius: 10, background: "rgba(105,240,174,0.12)",
          border: "1px solid rgba(105,240,174,0.4)",
          padding: "10px 12px", marginBottom: 12,
          fontFamily: "var(--font-body)", fontSize: 13,
          color: "var(--color-brand-primary-100)", fontWeight: 700,
        }}>
          Jouw plek is geclaimd — Familie gratis tot augustus 2027.
        </div>
      )}

      {/* Geworven teller (subtiel, als motivatie) */}
      {geworven > 0 && (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 10 }}>
          {geworven === 1 ? "1 gezin oefent al via jouw link." : `${geworven} gezinnen oefenen al via jouw link.`}
        </div>
      )}

      {/* Link + kopieer */}
      {link && (
        <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
          <div style={{
            flex: 1, minWidth: 0, borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(0,0,0,0.25)", padding: "10px 12px",
            fontFamily: "var(--font-body)", fontSize: 12.5,
            color: "rgba(255,255,255,0.75)",
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            alignSelf: "center",
          }}>
            {link}
          </div>
          <button
            onClick={kopieer}
            style={{
              border: "none", borderRadius: 10, padding: "10px 16px",
              fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13,
              color: "#0a2a12",
              background: actieVoorbij
                ? "rgba(255,255,255,0.15)"
                : "linear-gradient(135deg, #00C853, #69f0ae)",
              cursor: "pointer", whiteSpace: "nowrap",
            }}
          >
            {gekopieerd ? "✓ Gekopieerd" : "Kopieer bericht"}
          </button>
        </div>
      )}

      {!link && (
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
          Laden…
        </div>
      )}
    </div>
  );
}

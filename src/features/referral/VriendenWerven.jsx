// 🤝 Vrienden-werven-kaart in het ouder-dashboard (Mark 8 jul 2026).
// Persoonlijke deel-link + teller: 5 geworven vrienden = 6 maanden Familie
// klaargezet voor de betaal-lancering (jan 2027). Een vriend telt pas na écht
// oefenen (3 beantwoorde vragen) — deel-kliks tellen niet. Alleen voor
// volwassenen: dit blok staat bewust NIET in kinder-schermen (STOPLIST).

import { useState, useEffect } from "react";
import supabase from "../../supabase.js";
import { BRAND } from "../../brand.js";
import { track } from "../../utils.js";
import { VRIENDEN_DOEL } from "./referral.js";

export default function VriendenWerven({ authUser }) {
  const [stand, setStand] = useState(null); // { code, geworven, doel, pro_verdiend }
  const [laden, setLaden] = useState(false);
  const [gekopieerd, setGekopieerd] = useState(false);
  const [fout, setFout] = useState(false);

  useEffect(() => {
    if (!authUser) return;
    let weg = false;
    (async () => {
      setLaden(true);
      try {
        // Code aanmaken (of ophalen) + stand lezen. vrienden_stand kent bij
        // 5+ automatisch de Pro-beloning toe (idempotent).
        await supabase.rpc("mijn_vriendencode");
        const { data, error } = await supabase.rpc("vrienden_stand");
        if (error) throw error;
        if (!weg) setStand(Array.isArray(data) ? data[0] : data);
      } catch {
        if (!weg) setFout(true);
      } finally {
        if (!weg) setLaden(false);
      }
    })();
    return () => { weg = true; };
  }, [authUser]);

  if (!authUser || fout) return null;

  const doel = stand?.doel || VRIENDEN_DOEL;
  const geworven = Math.min(stand?.geworven || 0, doel);
  const link = stand?.code ? `https://${BRAND.domain}/?vriend=${stand.code}` : null;

  const kopieer = async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(
        `Wij oefenen gratis voor de Doorstroomtoets op ${BRAND.name} — elke dag een kwartiertje, met uitleg op 3 niveaus. Kijk eens: ${link}`
      );
      setGekopieerd(true);
      setTimeout(() => setGekopieerd(false), 2500);
      try { track("vriend_link_gekopieerd"); } catch { /* */ }
    } catch { /* clipboard geweigerd — link staat in beeld, overtypen kan */ }
  };

  return (
    <div style={{ borderRadius: 14, border: "1px solid rgba(105,240,174,0.25)", background: "rgba(105,240,174,0.05)", padding: "16px 18px" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "var(--color-brand-primary-100)", marginBottom: 4 }}>
        🤝 Vrienden werven — verdien 6 maanden Familie
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.55, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>
        Deel je persoonlijke link met andere ouders. Zodra {doel} nieuwe gezinnen via jouw link écht oefenen
        (minstens 3 vragen), staat er 6 maanden Leerkwartier Familie voor je klaar bij de lancering (januari 2027).
        Klikken telt niet — oefenen wel.
      </div>

      {laden && <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Laden…</div>}

      {!laden && stand?.pro_verdiend && (
        <div style={{ borderRadius: 10, background: "rgba(105,240,174,0.12)", border: "1px solid rgba(105,240,174,0.4)", padding: "10px 12px", marginBottom: 10, fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-brand-primary-100)", fontWeight: 700 }}>
          🎉 Gelukt! Je hebt {doel} vrienden geworven — 6 maanden Familie staat voor je klaar.
        </div>
      )}

      {!laden && link && (
        <>
          {/* Voortgang */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ flex: 1, height: 10, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <div style={{ width: `${(geworven / doel) * 100}%`, height: "100%", background: "linear-gradient(90deg, #00C853, #69f0ae)", borderRadius: 999, transition: "width 0.3s" }} />
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "#fff", whiteSpace: "nowrap" }}>
              {geworven} van {doel}
            </div>
          </div>

          <div style={{ display: "flex", gap: 8, alignItems: "stretch" }}>
            <div style={{ flex: 1, minWidth: 0, borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(0,0,0,0.25)", padding: "10px 12px", fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.75)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", alignSelf: "center" }}>
            {link}
            </div>
            <button
              onClick={kopieer}
              style={{ border: "none", borderRadius: 10, padding: "10px 16px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13, color: "#0a2a12", background: "linear-gradient(135deg, #00C853, #69f0ae)", cursor: "pointer", whiteSpace: "nowrap" }}
            >
              {gekopieerd ? "✓ Gekopieerd" : "📋 Kopieer bericht"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

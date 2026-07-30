import { useState } from "react";
import { SoundEngine } from "../utils.js";

// Aankondigings-banner: drie nieuwe interactieve topografie-leerpaden.
// Mark 2026-06-07: "maak Update klikbaar zodat iedereen de verbetering kan
// vinden." Elke knop is een /?pad=<id>-deeplink — werkt in-app (reload opent het
// pad via getInitialLeerpadId) én is deelbaar als losse link. Dismissible via
// localStorage zodat de banner na wegklikken niet terugkomt.
// BUG-FIX 31 jul (Mark: "kan niet drukken op Nederland/Europa"): de link was
// relatief (`?pad=`), dus op /leerling werd het /leerling?pad=x — en de
// ?pad-deeplink-afhandeling werkt alléén vanaf de root / (op /leerling
// overschrijft de router-sync de pagina meteen terug naar student-home). Nu
// absoluut `/?pad=` zodat het pad vanaf élk scherm opent.

const DISMISS_KEY = "lk_nieuw_topografie_v1_dismissed";

const PADEN = [
  { emoji: "🇳🇱", label: "Nederland", sub: "provincies & hoofdsteden", id: "topografie-nederland-provincies-po" },
  { emoji: "🌍", label: "Europa", sub: "landen & hoofdsteden", id: "topografie-europa-landen-po" },
  { emoji: "🗺️", label: "Wereld", sub: "de werelddelen", id: "topografie-wereld-werelddelen-po" },
];

export default function NieuwTopografieBanner() {
  const [weg, setWeg] = useState(() => {
    try { return localStorage.getItem(DISMISS_KEY) === "1"; } catch { return false; }
  });

  if (weg) return null;

  const sluit = () => {
    try { localStorage.setItem(DISMISS_KEY, "1"); } catch {}
    setWeg(true);
  };

  return (
    <div
      aria-label="Nieuw: interactieve topografie-leerpaden"
      style={{
        position: "relative",
        marginBottom: 12,
        padding: "12px 14px",
        background: "linear-gradient(135deg, rgba(38,166,154,0.16), rgba(66,133,244,0.06))",
        border: "1px solid rgba(38,166,154,0.40)",
        borderRadius: 12,
        color: "var(--color-text)",
      }}
    >
      <button
        type="button"
        onClick={sluit}
        aria-label="Sluit melding"
        style={{
          position: "absolute",
          top: 6,
          right: 8,
          background: "transparent",
          border: "none",
          color: "var(--color-text-subtle)",
          fontSize: 18,
          lineHeight: 1,
          cursor: "pointer",
          padding: 4,
          minWidth: 32,
          minHeight: 32,
        }}
      >
        ×
      </button>

      <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#26a69a", marginBottom: 4, paddingRight: 24 }}>
        🌍 Nieuw: aardrijkskunde flink uitgebreid!
      </div>
      <div style={{ fontSize: 13, opacity: 0.9, marginBottom: 10 }}>
        Drie interactieve topografie-leerpaden. Je klikt de provincies, landen en werelddelen op echte kaarten aan.
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {PADEN.map((p) => (
          <a
            key={p.id}
            href={`/?pad=${p.id}`}
            onClick={() => SoundEngine.play("click")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flex: "1 1 160px",
              minWidth: 0,
              padding: "8px 12px",
              background: "var(--color-bg-base)",
              border: "1px solid rgba(38,166,154,0.35)",
              borderRadius: 10,
              textDecoration: "none",
              color: "var(--color-text)",
              minHeight: "var(--tap-target-min)",
            }}
          >
            <span style={{ fontSize: 20 }} aria-hidden="true">{p.emoji}</span>
            <span style={{ minWidth: 0 }}>
              <span style={{ display: "block", fontWeight: 700, fontSize: 13 }}>{p.label}</span>
              <span style={{ display: "block", fontSize: 11, opacity: 0.7, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.sub}</span>
            </span>
          </a>
        ))}
      </div>

      <div style={{ fontSize: 11, opacity: 0.65, marginTop: 8 }}>
        Bedankt dat je dit voorstelde — top opgepakt! 💛
      </div>
    </div>
  );
}

import { PAYWALL_ACTIVE } from "../subscription/config.js";

// Pakket-uitleg (Mark 31 jul, na 5-agent-panel): kraakhelder + eerlijk laten
// zien wat gratis is en wat de betaalde extra's zijn. Kernbesluiten:
// - Naam "Pro" (niet Premium): niveaus zijn op DOELGROEP genoemd (Gratis =
//   iedereen, Familie = ouders, Pro = juf/meester) → consistenter + eerlijker
//   dan een waarde-ladder waarbij "Premium" suggereert dat gratis "minder" is.
// - Geen kale "altijd gratis": "Oefenen en uitleg zijn gratis — en dat blijft
//   zo", gebonden aan de basis (eerlijk + verdedigbaar).
// - Grootste verschil met betaalde concurrenten (Squla e.a.): geen creditcard,
//   geen proefperiode die stiekem doorloopt.
// De gratis-kaart staat los BOVENAAN (groot, groen); Familie/Pro zijn kleiner
// en grijzer = "optioneel, niet iets waar je nu iets mee moet".

const G = "#00c853"; // gratis-groen — in dit blok exclusief voor de basis

function TierKaart({ emoji, naam, voorWie, prijs, items, huidig }) {
  return (
    <div style={{
      flex: "1 1 200px", background: "rgba(255,255,255,0.03)",
      border: `1px solid ${huidig ? "rgba(0,200,83,0.45)" : "rgba(255,255,255,0.10)"}`,
      borderRadius: 14, padding: "14px 16px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
        <span style={{ fontSize: 18 }} aria-hidden="true">{emoji}</span>
        <span style={{ fontWeight: 800, fontSize: 15, color: "var(--color-text-strong)" }}>{naam}</span>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.55)" }}>· {voorWie}</span>
      </div>
      <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>{prijs}</div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {items.map((t) => (
          <li key={t} style={{ fontSize: 12.5, color: "rgba(255,255,255,0.8)", padding: "2px 0 2px 16px", position: "relative", lineHeight: 1.4 }}>
            <span style={{ position: "absolute", left: 0, color: "rgba(255,255,255,0.4)" }}>·</span>{t}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PakketUitleg({ open, onClose }) {
  if (!open) return null;
  // Zolang de betaalmuur uit staat heeft IEDEREEN gewoon alles gratis — dan is
  // "Gratis" het eerlijke huidige pakket. Zodra de muur live gaat toont dit het
  // echte betaalde niveau (later te koppelen aan useSubscription).
  const huidigLabel = PAYWALL_ACTIVE ? "je betaalde pakket" : "Gratis";

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 1000,
        background: "rgba(6,14,26,0.72)", display: "flex",
        alignItems: "flex-start", justifyContent: "center",
        padding: "24px 12px", overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-label="Wat is gratis en wat kost het?"
        style={{
          width: "100%", maxWidth: 560, background: "#0d1b2e",
          border: "1px solid rgba(255,255,255,0.10)", borderRadius: 18,
          padding: "18px 18px 20px", color: "var(--color-text)",
          fontFamily: "var(--font-body)",
        }}
      >
        {/* Kop + sluit */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <h2 style={{ margin: 0, fontSize: 18, fontFamily: "var(--font-display)", color: "var(--color-text-strong)" }}>
            Wat kost Leerkwartier?
          </h2>
          <button onClick={onClose} aria-label="Sluiten" style={{
            background: "transparent", border: "1px solid rgba(255,255,255,0.14)",
            color: "rgba(255,255,255,0.7)", borderRadius: 8, padding: "4px 10px",
            cursor: "pointer", fontSize: 14,
          }}>✕</button>
        </div>
        <p style={{ margin: "0 0 4px", fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
          <strong style={{ color: "var(--color-text-strong)" }}>Oefenen en uitleg zijn gratis — en dat blijft zo.</strong> Wil je meer, dan kún je kiezen.
        </p>

        {/* Jouw pakket nu */}
        <div style={{ display: "inline-flex", alignItems: "center", gap: 7, margin: "8px 0 14px", background: "rgba(0,200,83,0.12)", border: "1px solid rgba(0,200,83,0.4)", borderRadius: 999, padding: "5px 12px" }}>
          <span style={{ fontSize: 13, color: "rgba(255,255,255,0.75)" }}>Jouw pakket nu:</span>
          <span style={{ fontSize: 13, fontWeight: 800, color: G }}>{huidigLabel}</span>
        </div>

        {/* GRATIS — grote groene kaart bovenaan */}
        <div style={{
          background: "linear-gradient(135deg, rgba(0,200,83,0.16), rgba(0,200,83,0.05))",
          border: `1.5px solid ${G}`, borderRadius: 16, padding: "16px 18px", marginBottom: 14,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
            <span style={{ fontSize: 22 }} aria-hidden="true">✅</span>
            <span style={{ fontSize: 17, fontWeight: 800, color: "var(--color-text-strong)" }}>Gratis</span>
            <span style={{ fontSize: 12, color: "rgba(255,255,255,0.6)" }}>· voor iedereen</span>
            <span style={{ marginLeft: "auto", background: G, color: "#06211a", fontWeight: 800, fontSize: 11, letterSpacing: 0.5, borderRadius: 999, padding: "3px 10px" }}>BLIJFT GRATIS</span>
          </div>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {["Oefenen met alle onderwerpen", "Uitleg op 3 niveaus: makkelijk, gewoon en uitgebreid", "Echte examens oefenen én inzien als PDF", "Printbare oefenbladen mee naar huis", "Geen account nodig, geen creditcard"].map((t) => (
              <li key={t} style={{ fontSize: 13.5, color: "rgba(255,255,255,0.88)", padding: "3px 0 3px 20px", position: "relative", lineHeight: 1.45 }}>
                <span style={{ position: "absolute", left: 0, color: G }}>✓</span>{t}
              </li>
            ))}
          </ul>
        </div>

        {/* Optionele extra's */}
        <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.55)", margin: "0 0 8px" }}>
          Wil je meer? Deze extra's zijn optioneel:
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
          <TierKaart
            emoji="💛" naam="Familie" voorWie="voor thuis" prijs="± € 4,95 per maand, per gezin"
            items={["Ouder-overzicht", "Weekrapport", "Hele toets oefenen met de klok", "Je eigen Kwartierplan"]}
          />
          <TierKaart
            emoji="🏫" naam="Pro" voorWie="voor de juf of meester" prijs="± € 6,95 per maand"
            items={["Onbeperkt toetsen", "Je eigen logo op de toets", "Overzicht per klas"]}
          />
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
          Los bij te nemen: <strong style={{ color: "rgba(255,255,255,0.7)" }}>Kwartier-tegoed</strong> voor extra AI-bijles.
        </div>

        {/* Eerlijke voetregel */}
        <div style={{
          fontSize: 12.5, color: "rgba(255,255,255,0.75)", lineHeight: 1.5,
          background: "rgba(0,200,83,0.06)", border: "1px solid rgba(0,200,83,0.2)",
          borderRadius: 10, padding: "10px 12px",
        }}>
          ✅ <strong style={{ color: "var(--color-text-strong)" }}>De basis blijft gratis. Betalen is nooit verplicht.</strong> Geen proefperiode die stiekem doorloopt, geen verrassing op je rekening. {PAYWALL_ACTIVE ? "" : "Betalen kan pas vanaf begin 2027 — nu is alles nog gratis."}
        </div>
      </div>
    </div>
  );
}

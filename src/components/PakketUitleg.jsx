import { useState } from "react";
import { PAYWALL_ACTIVE } from "../subscription/config.js";
import { LAAG_KLEUREN } from "../subscription/proPlan.js";
import { actievePartnerCode, partnerFamilieTot, zetPartnerCodeHandmatig } from "../features/referral/partnerCode.js";

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

function TierKaart({ emoji, naam, voorWie, prijs, items, huidig, kleur }) {
  return (
    <div style={{
      flex: "1 1 200px", background: kleur ? kleur.vlak : "rgba(255,255,255,0.03)",
      border: `1px solid ${huidig ? "rgba(0,200,83,0.45)" : kleur ? kleur.rand : "rgba(255,255,255,0.10)"}`,
      borderRadius: 14, padding: "14px 16px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
        {kleur && <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: kleur.dot, display: "inline-block", flexShrink: 0 }} />}
        <span style={{ fontSize: 18 }} aria-hidden="true">{emoji}</span>
        <span style={{ fontWeight: 800, fontSize: 15, color: kleur ? kleur.tekst : "var(--color-text-strong)" }}>{naam}</span>
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

// "Ik heb een code" (Mark 11 aug 15:23): gezinnen met een partner-code van
// bv. de voedselbank of Stichting Leergeld kunnen hem hier intypen — zelfde
// effect als de QR-scan op de flyer (Familie-niveau gratis).
function CodeInvoer() {
  const [invoer, setInvoer] = useState("");
  const [status, setStatus] = useState(null); // { ok, reden?, code?, familieTot? }
  const [bezig, setBezig] = useState(false);
  const actief = actievePartnerCode();

  const totTekst = (tot) => tot === null ? "blijvend" : "t/m de zomer van 2027";

  if (actief && !status?.ok) {
    return (
      <div style={{ background: "rgba(255,213,79,0.08)", border: "1px solid rgba(255,213,79,0.35)", borderRadius: 10, padding: "10px 12px", marginBottom: 14, fontSize: 12.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>
        🎟️ Er is al een code actief op dit apparaat: <strong>{actief}</strong> — Familie-niveau gratis {totTekst(partnerFamilieTot())}.
      </div>
    );
  }

  const verstuur = async () => {
    if (bezig || !invoer.trim()) return;
    setBezig(true);
    const r = await zetPartnerCodeHandmatig(invoer);
    setStatus(r);
    setBezig(false);
  };

  return (
    <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "10px 12px", marginBottom: 14 }}>
      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 6 }}>
        🎟️ Ik heb een code
      </div>
      {status?.ok ? (
        <div style={{ fontSize: 12.5, color: "#69f0ae", lineHeight: 1.5 }}>
          ✅ Code <strong>{status.code}</strong> staat aan — jullie gezin gebruikt het Familie-niveau gratis {totTekst(status.familieTot)}.
        </div>
      ) : (
        <>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 8, lineHeight: 1.45 }}>
            Kreeg je een code via bijvoorbeeld de voedselbank, Stichting Leergeld, de bibliotheek of school? Typ hem hier in — dan is het Familie-niveau voor jullie gezin gratis.
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input
              value={invoer}
              onChange={(e) => { setInvoer(e.target.value.toUpperCase()); setStatus(null); }}
              onKeyDown={(e) => { if (e.key === "Enter") verstuur(); }}
              placeholder="bv. ALKMAAR2027"
              maxLength={20}
              style={{
                flex: 1, minWidth: 0, padding: "9px 12px", borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)",
                color: "var(--color-text-strong)", fontSize: 13, fontFamily: "var(--font-body)",
                letterSpacing: 1, textTransform: "uppercase",
              }}
            />
            <button
              onClick={verstuur}
              disabled={bezig || !invoer.trim()}
              style={{
                padding: "9px 16px", borderRadius: 8, border: "none",
                background: invoer.trim() ? "rgba(0,200,83,0.85)" : "rgba(255,255,255,0.1)",
                color: invoer.trim() ? "#00320f" : "rgba(255,255,255,0.4)",
                fontWeight: 800, fontSize: 13, cursor: invoer.trim() ? "pointer" : "default",
                fontFamily: "var(--font-display)",
              }}
            >
              {bezig ? "..." : "Gebruik code"}
            </button>
          </div>
          {status && !status.ok && (
            <div style={{ fontSize: 12, color: "#ff8a80", marginTop: 6 }}>
              {status.reden === "vorm" && "Dat lijkt geen geldige code — check letters en cijfers (geen spaties)."}
              {status.reden === "onbekend" && "Deze code kennen we niet. Kijk of hij precies zo op je flyer of brief staat."}
              {status.reden === "al-actief" && `Er is al een code actief op dit apparaat (${status.code}).`}
            </div>
          )}
        </>
      )}
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
        {/* Voordelen uitgebreid (Mark 11 aug 15:24 "lijkt weinig, zet er evt
            de voordelen bij") + Pro school-first zichtbaar (16:05: "staat
            niets over per school"). Bron: proPlan.js / docs/PRIJSPLAN.md. */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
          <TierKaart
            emoji="💛" naam="Familie" voorWie="voor thuis"
            prijs="± € 4,95 p/mnd · 🎟️ Seizoenspas € 24,95 éénmalig (hele toetsjaar, stopt vanzelf) · € 39 p/jaar — per gezín, niet per kind"
            items={[
              "AI-bijles Vonk onbeperkt (gratis = kleine dagportie)",
              "Ouder-overzicht: voortgang per vak + toets-verwachting",
              "Elke week een weekrapport in je mail",
              "Hele toets oefenen met de klok + eindrapport",
              "Persoonlijk Kwartierplan (waar staan we, wat nu?)",
              "Eén prijs voor het hele gezin",
            ]}
            kleur={LAAG_KLEUREN.familie}
          />
          <TierKaart
            emoji="🏫" naam="Pro" voorWie="voor scholen & bijlesdocenten"
            prijs="school € 99 per klas p/jaar (factuur) · bijlesdocent ± € 6,95 p/mnd of € 59 p/jaar"
            items={[
              "Lesgeven met je klas blijft gratis (deelcode)",
              "Schooldashboard: overzicht per klas + export",
              "Je eigen (school)logo op toetsen en werkbladen",
              "Onbeperkt toetsen maken en werkbladen printen",
              "Voor scholen: licentie per klas met factuur en verwerkersovereenkomst",
            ]}
            kleur={LAAG_KLEUREN.leerkracht}
          />
        </div>
        <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12 }}>
          Los bij te nemen: <strong style={{ color: "rgba(255,255,255,0.7)" }}>Kwartier-tegoed</strong> voor extra AI-bijles — geen abonnement, ook als cadeautje.
        </div>

        <CodeInvoer />

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

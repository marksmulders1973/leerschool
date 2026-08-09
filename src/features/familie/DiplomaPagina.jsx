// ══════════════════════════════════════════════════════════════════════
// Printbaar diploma — Familie-feature 8 (Mark 1 aug 2026), publieke bèta.
//
// Bij het afronden van een onderwerp krijgt het kind een certificaat om te
// printen/op te hangen — kind blij, ouder trots, en de ouder deelt het (gratis
// marketing met het Leerkwartier-logo erop). Kosten €0: printen/PDF via de
// browser (window.print), geen server, geen AI. Liggend A4.
//
// Zichtbaarheid: publiek sinds 1 aug (bèta-label; route ongegate in App.jsx).
// Later — zodra de paywall live gaat — achter PaywallGate (Familie).
//
// Prefill via URL zodat de latere trigger (klaar-scherm van een pad) kan
// deeplinken: /diploma?naam=Sophie&onderwerp=Breuken  (beide optioneel).
// Zie memory project_studiebol_familie_tier_features (feature 8).
// ══════════════════════════════════════════════════════════════════════
import { useState } from "react";
import PrintKnoppen from "../../shared/ui/PrintKnoppen.jsx";
import { FamilieMeer } from "./familieUi.jsx";

// Snel-kiezers zodat Mark kan spelen zonder te typen. De chip-tekst (zonder
// emoji) wordt het onderwerp op het diploma. De echte trigger stuurt ?onderwerp=.
const ONDERWERPEN = [
  { emoji: "➗", naam: "Delen" },
  { emoji: "✖️", naam: "De tafels" },
  { emoji: "🍕", naam: "Breuken" },
  { emoji: "📝", naam: "Spelling ei / ij" },
  { emoji: "🌍", naam: "Topografie van Europa" },
  { emoji: "📖", naam: "Begrijpend lezen" },
];

function initParam(key, fallback) {
  try {
    return new URLSearchParams(window.location.search || "").get(key) || fallback;
  } catch {
    return fallback;
  }
}

export default function DiplomaPagina({ setPage }) {
  const [naam, setNaam] = useState(() => initParam("naam", ""));
  const [onderwerp, setOnderwerp] = useState(() => initParam("onderwerp", "Breuken"));

  const naamNet = (naam || "").trim();
  const ondNet = (onderwerp || "").trim() || "dit onderwerp";

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .diploma-print, .diploma-print * { visibility: visible !important; }
          .diploma-print { position: absolute; left: 0; top: 0; width: 100%; }
          .diploma-noprint { display: none !important; }
          @page { size: A4 landscape; margin: 10mm; }
        }
      `}</style>

      {/* ── Bediening (niet mee-printen) ── */}
      <div className="diploma-noprint" style={{ maxWidth: 760, margin: "0 auto", padding: "18px 16px 8px" }}>
        <button onClick={() => setPage && setPage("familie")} style={linkBtn}>← terug</button>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, margin: 0 }}>
            🏅 Printbaar diploma
          </h1>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>
bèta
          </span>
        </div>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.55, marginTop: 6 }}>
          Een certificaat om te printen of op te hangen zodra je kind een onderwerp heeft afgerond.
          Vul de naam en het onderwerp in en klik op printen.
        </p>

        {/* Naam */}
        <div style={{ marginTop: 12 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)" }}>
            Naam van je kind:{" "}
            <input
              value={naam}
              onChange={(e) => setNaam(e.target.value.slice(0, 34))}
              placeholder="bijv. Sophie"
              style={inputStyle}
            />
          </label>
        </div>

        {/* Onderwerp */}
        <div style={{ marginTop: 12 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)" }}>
            Onderwerp:{" "}
            <input
              value={onderwerp}
              onChange={(e) => setOnderwerp(e.target.value.slice(0, 44))}
              placeholder="bijv. Breuken"
              style={inputStyle}
            />
          </label>
        </div>

        {/* Snel-kiezers voor het onderwerp */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", margin: "12px 0 6px" }}>Of kies snel een onderwerp</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {ONDERWERPEN.map((o) => {
            const aan = o.naam === onderwerp;
            return (
              <button
                key={o.naam}
                onClick={() => setOnderwerp(o.naam)}
                style={{
                  padding: "9px 14px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700,
                  border: aan ? "1.5px solid #ffd54f" : "1.5px solid rgba(255,255,255,0.18)",
                  background: aan ? "rgba(255,213,79,0.14)" : "rgba(255,255,255,0.05)",
                  color: aan ? "#ffd54f" : "var(--color-text, #e8edf5)",
                }}
              >
                {o.emoji} {o.naam}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          <PrintKnoppen trackPrefix="diploma" trackProps={{ onderwerp: ondNet }} />
        </div>
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "18px 0" }} />
        <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)" }}>
          👇 Voorbeeld van het diploma. Tip: kies bij printen liggend (landschap) papier voor het mooiste resultaat.
        </div>
      </div>

      {/* ── Het printbare diploma ── */}
      <div className="diploma-print" style={{ maxWidth: 900, margin: "0 auto", padding: "0 16px 40px" }}>
        <div style={{
          position: "relative", background: "#fffdf6", color: "#1a1206",
          border: "3px solid #c9a227", borderRadius: 10, padding: 10,
          boxShadow: "0 4px 18px rgba(0,0,0,0.25)",
        }}>
          {/* dubbele sierrand */}
          <div style={{
            border: "1.5px solid #c8102e", borderRadius: 6,
            padding: "34px 46px 28px", textAlign: "center",
          }}>
            <div style={{ letterSpacing: 4, fontSize: 13, fontWeight: 700, color: "#c8102e" }}>LEERKWARTIER</div>
            <div style={{ fontSize: 44, marginTop: 8 }}>🏅</div>
            <h2 style={{ fontFamily: "var(--font-display, Georgia, serif)", fontSize: 40, fontWeight: 900, letterSpacing: 2, margin: "6px 0 2px", color: "#111" }}>
              DIPLOMA
            </h2>
            <div style={{ width: 90, height: 3, background: "#c9a227", margin: "6px auto 20px", borderRadius: 2 }} />

            <div style={{ fontSize: 16, color: "#5a4a2a" }}>Dit diploma is met trots uitgereikt aan</div>
            <div style={{
              fontFamily: "var(--font-display, Georgia, serif)", fontSize: 34, fontWeight: 900,
              color: "#c8102e", margin: "10px auto 4px", padding: "0 10px 6px",
              borderBottom: "2px solid #d9c48a", display: "inline-block", minWidth: 320,
            }}>
              {naamNet || " "}
            </div>

            <div style={{ fontSize: 16, color: "#5a4a2a", marginTop: 16 }}>voor het met succes afronden van</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#1a1206", marginTop: 6 }}>{ondNet}</div>

            <div style={{ fontSize: 14, color: "#6a5a3a", lineHeight: 1.6, maxWidth: 520, margin: "16px auto 0" }}>
              Goed gedaan! Je hebt hard geoefend en dit onderwerp onder de knie gekregen.
              Ga zo door — een kwartier per dag maakt je slimmer dan je denkt.
            </div>

            {/* handtekening + zegel + datum */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 30, gap: 20 }}>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ borderTop: "1.5px solid #999", paddingTop: 4, fontSize: 13, color: "#444", maxWidth: 190, margin: "0 auto" }}>
                  Datum
                </div>
              </div>
              <div style={{
                width: 78, height: 78, borderRadius: "50%", border: "2px solid #c9a227",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                color: "#c9a227", flexShrink: 0, transform: "rotate(-8deg)",
              }}>
                <div style={{ fontSize: 20, lineHeight: 1 }}>★</div>
                <div style={{ fontSize: 8.5, fontWeight: 800, letterSpacing: 1, marginTop: 2 }}>GESLAAGD</div>
                <div style={{ fontSize: 8, marginTop: 1 }}>2026</div>
              </div>
              <div style={{ textAlign: "center", flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display, Georgia, serif)", fontStyle: "italic", fontSize: 17, color: "#c8102e", marginBottom: 2 }}>
                  Leerkwartier
                </div>
                <div style={{ borderTop: "1.5px solid #999", paddingTop: 4, fontSize: 13, color: "#444", maxWidth: 190, margin: "0 auto" }}>
                  Team Leerkwartier
                </div>
              </div>
            </div>

            <div style={{ marginTop: 18, fontSize: 11.5, color: "#a08a55" }}>leerkwartier.app · een kwartier per dag, écht begrijpen wat je leert</div>
          </div>
        </div>
      </div>
      <FamilieMeer setPage={setPage} huidig="diploma" />
    </div>
  );
}

const linkBtn = { background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 };
const inputStyle = { marginLeft: 6, padding: "7px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "inherit", fontSize: 14 };

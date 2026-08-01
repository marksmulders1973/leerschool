// ══════════════════════════════════════════════════════════════════════
// Ouderkaart "Zo leg je 't uit" — Familie-feature 3 (Mark 1 aug 2026), GEHEIM.
//
// De ouder is de kóper én vaak de blokkade ("ik snap breuken zelf niet meer").
// Deze kaart geeft de ouder in 1 pagina: waar het over gaat · zó leg je het uit
// (stappen) · een zin die je letterlijk kunt zeggen · de veelgemaakte fout · een
// voorbeeld om samen te doen. Bron = het bestaande uitlegPad van een leerpad —
// dus €0, geen AI. Printbaar + deelbaar (window.print). Deelbaar = gratis bereik.
//
// Zichtbaarheid: achter familiePreviewVisible() (?familie=1 of admin). Later
// achter PaywallGate (Familie). Prefill via ?pad=<id> voor de latere trigger
// (bij 2x fout op een concept → "zo help je thuis"). Zie memory
// idea_studiebol_premium_printbare_hulp + project_studiebol_familie_tier_features.
// ══════════════════════════════════════════════════════════════════════
import { useState, useEffect, useRef, useMemo } from "react";
import { getLearnPath } from "../../learnPaths/pathLoaders.js";
import PrintKnoppen from "../../shared/ui/PrintKnoppen.jsx";

// Concepten die ouders het lastigst vinden om zélf uit te leggen.
const PRESETS = [
  { id: "breuken-po", label: "🍕 Breuken" },
  { id: "delen-po", label: "➗ Delen" },
  { id: "tafels-po", label: "✖️ Tafels" },
  { id: "spelling-ei-ij-au-ou", label: "📝 Spelling ei/ij" },
  { id: "kommagetallen-po", label: "🔢 Kommagetallen" },
];

function schoon(s) {
  return String(s ?? "")
    .replace(/\*\*/g, "")
    .replace(/(^|[^\w])[*_]([^*_]+)[*_]/g, "$1$2")
    .replace(/\$/g, "")
    .trim();
}

// Score een uitlegPad op volledigheid — de rijkste check voedt de kaart.
function scoreUitleg(u) {
  if (!u) return -1;
  let s = 0;
  if (Array.isArray(u.stappen) && u.stappen.length) s += 3;
  if (Array.isArray(u.voorbeelden) && u.voorbeelden.length) s += 1;
  if (Array.isArray(u.basiskennis) && u.basiskennis.length) s += 1;
  if (Array.isArray(u.woorden) && u.woorden.length) s += 1;
  if (u.theorie) s += 1;
  if (u.niveaus?.simpeler) s += 1;
  return s;
}

// Kies uit een 'valkuil'-achtige basiskennis-entry de meest fout-gerichte.
function kiesValkuil(basiskennis) {
  if (!Array.isArray(basiskennis) || !basiskennis.length) return null;
  const fout = basiskennis.find((b) =>
    /val|fout|let op|vergis|tegenovergesteld|verwar|pas op/i.test(`${b.onderwerp} ${b.uitleg}`)
  );
  return fout || basiskennis[0];
}

function bouwOuderkaart(path) {
  if (!path || !Array.isArray(path.steps)) return null;
  let best = null, bestScore = -1;
  for (const step of path.steps) {
    const checks = step.checks || (step.check ? [step.check] : []);
    for (const c of checks) {
      const sc = scoreUitleg(c?.uitlegPad);
      if (sc > bestScore) { bestScore = sc; best = c.uitlegPad; }
    }
  }
  if (!best) return null;
  const valkuil = kiesValkuil(best.basiskennis);
  return {
    intro: schoon(best.theorie || best.niveaus?.basis || ""),
    stappen: (best.stappen || []).map((s) => ({ titel: schoon(s.titel), tekst: schoon(s.tekst) })).filter((s) => s.tekst),
    zegDit: schoon(best.niveaus?.simpeler || ""),
    woorden: (best.woorden || []).slice(0, 2).map((w) => ({ woord: schoon(w.woord), uitleg: schoon(w.uitleg) })),
    valkuil: valkuil ? schoon(valkuil.uitleg || valkuil.onderwerp) : "",
    voorbeeld: schoon(Array.isArray(best.voorbeelden) && best.voorbeelden[0] ? best.voorbeelden[0].tekst : ""),
  };
}

export default function OuderkaartPagina({ setPage }) {
  const initId = (() => {
    // Eigen param 'kaart' i.p.v. 'pad' — '?pad=' botst met de globale
    // leerpad-deeplink en zou naar /leren/pad springen.
    try { return new URLSearchParams(window.location.search || "").get("kaart") || "breuken-po"; }
    catch { return "breuken-po"; }
  })();
  const [pathId, setPathId] = useState(initId);
  const [path, setPath] = useState(null);
  const [laadFout, setLaadFout] = useState(false);
  const reqRef = useRef(0);

  useEffect(() => {
    const my = ++reqRef.current;
    setPath(null); setLaadFout(false);
    getLearnPath(pathId)
      .then((p) => { if (my !== reqRef.current) return; if (!p) setLaadFout(true); else setPath(p); })
      .catch(() => { if (my === reqRef.current) setLaadFout(true); });
  }, [pathId]);

  const kaart = useMemo(() => bouwOuderkaart(path), [path]);
  const conceptTitel = path?.title ? schoon(path.title) : "";
  // Kort de titel in tot alleen het onderwerp ("Breuken — cito groep 5-8" → "Breuken").
  const titelKort = conceptTitel.split(/\s[—·]\s/)[0].trim() || conceptTitel;
  const conceptEmoji = path?.emoji || "👪";

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .kaart-print, .kaart-print * { visibility: visible !important; }
          .kaart-print { position: absolute; left: 0; top: 0; width: 100%; }
          .kaart-noprint { display: none !important; }
          @page { size: A4; margin: 14mm; }
        }
      `}</style>

      {/* ── Bediening (niet mee-printen) ── */}
      <div className="kaart-noprint" style={{ maxWidth: 760, margin: "0 auto", padding: "18px 16px 8px" }}>
        <button onClick={() => setPage && setPage("familie")} style={linkBtn}>← terug</button>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, margin: 0 }}>
            👪 Ouderkaart — zo leg je 't uit
          </h1>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>
            prototype · geheim
          </span>
        </div>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.55, marginTop: 6 }}>
          Een spiekbriefje voor jóu als ouder: hoe je dit onderwerp in gewone woorden uitlegt aan je kind.
          Print het of hang het op de koelkast.
        </p>

        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", margin: "10px 0 6px" }}>Kies een onderwerp</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {PRESETS.map((p) => {
            const aan = p.id === pathId;
            return (
              <button key={p.id} onClick={() => setPathId(p.id)}
                style={{ padding: "9px 14px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700,
                  border: aan ? "1.5px solid #ffd54f" : "1.5px solid rgba(255,255,255,0.18)",
                  background: aan ? "rgba(255,213,79,0.14)" : "rgba(255,255,255,0.05)",
                  color: aan ? "#ffd54f" : "var(--color-text, #e8edf5)" }}>
                {p.label}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          {kaart && kaart.stappen.length > 0 ? (
            <PrintKnoppen trackPrefix="ouderkaart" trackProps={{ pad: pathId }} />
          ) : (
            <div style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14 }}>
              {laadFout ? "Dit onderwerp kon niet geladen worden." : "Kaart wordt samengesteld…"}
            </div>
          )}
        </div>
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "18px 0" }} />
        <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)" }}>
          👇 Voorbeeld van de kaart. Klik op <b>Printen</b> of <b>Opslaan als PDF</b>.
        </div>
      </div>

      {/* ── De printbare ouderkaart ── */}
      {kaart && kaart.stappen.length > 0 && (
        <div className="kaart-print" style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px 40px" }}>
          <div style={{ background: "#fffdf6", color: "#1a1206", border: "2px solid #c9a227", borderRadius: 12, padding: "28px 32px", boxShadow: "0 3px 14px rgba(0,0,0,0.22)" }}>
            <div style={{ fontSize: 12, letterSpacing: 2, fontWeight: 700, color: "#c8102e" }}>OUDERKAART · LEERKWARTIER</div>
            <h2 style={{ fontSize: 26, fontWeight: 900, margin: "4px 0 2px", color: "#111" }}>
              {conceptEmoji} Zo leg je <span style={{ color: "#c8102e" }}>{titelKort.toLowerCase()}</span> uit
            </h2>
            <div style={{ fontSize: 13, color: "#6a5a3a", marginBottom: 16 }}>Een spiekbriefje voor thuis — in gewone woorden.</div>

            {kaart.intro && (
              <div style={{ fontSize: 15, lineHeight: 1.6, color: "#222", background: "#faf7ee", border: "1px solid #ece3c8", borderRadius: 8, padding: "12px 14px", marginBottom: 16 }}>
                <b>Waar het over gaat:</b> {kaart.intro}
              </div>
            )}

            <h3 style={kop}>📣 Zo leg je het uit</h3>
            <ol style={{ margin: "0 0 16px", paddingLeft: 22 }}>
              {kaart.stappen.map((s, i) => (
                <li key={i} style={{ marginBottom: 8, fontSize: 15, lineHeight: 1.55, color: "#1a1206" }}>
                  {s.titel && <b>{s.titel}. </b>}{s.tekst}
                </li>
              ))}
            </ol>

            {kaart.zegDit && (
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#0b3d2e", background: "#eafaf1", border: "1px solid #b7e4c7", borderRadius: 8, padding: "12px 14px", marginBottom: 16 }}>
                <b>💬 Zeg bijvoorbeeld:</b> "{kaart.zegDit}"
              </div>
            )}

            {kaart.valkuil && (
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#7a1f1f", background: "#fdecec", border: "1px solid #f5c2c2", borderRadius: 8, padding: "12px 14px", marginBottom: 16 }}>
                <b>⚠️ Let op deze veelgemaakte fout:</b> {kaart.valkuil}
              </div>
            )}

            {kaart.voorbeeld && (
              <div style={{ fontSize: 15, lineHeight: 1.55, color: "#222", marginBottom: 8 }}>
                <b>🤝 Doe samen dit voorbeeld:</b> {kaart.voorbeeld}
              </div>
            )}

            {kaart.woorden.length > 0 && (
              <div style={{ fontSize: 13.5, color: "#555", marginTop: 12, borderTop: "1px dashed #ddd", paddingTop: 10 }}>
                <b>Woorden die helpen:</b>{" "}
                {kaart.woorden.map((w, i) => (
                  <span key={i}>{i > 0 ? " · " : ""}<b>{w.woord}</b> = {w.uitleg}</span>
                ))}
              </div>
            )}

            <div style={{ marginTop: 18, fontSize: 11.5, color: "#a08a55", textAlign: "center" }}>
              Gemaakt met Leerkwartier · leerkwartier.app — een kwartier per dag, écht begrijpen wat je leert
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

const linkBtn = { background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 };
const kop = { fontSize: 18, fontWeight: 900, color: "#111", margin: "0 0 8px" };

// EconomieUitleg — het loonstrookje van Mijn Park, met aanklikbare posten.
//
// Verschijnt opt-in nadat je een kwartier hebt geleerd: het laat zien dat je
// "loon" eigenlijk bruto → belasting → netto is. Elke regel is aanklikbaar →
// een mini-uitlegje (bottom-sheet) → knop "Leer hier meer" naar het leerpad.
//
// Breekt de speelflow nooit: het is een overlay over het park; sluiten = terug.
// Meet-trechter (zoals park_*): econ_open → econ_post_klik → econ_naar_leren.
import { useState } from "react";
import { maakLoonstrook } from "../features/zoo/loonstrook";
import { leermoment } from "../features/zoo/economieLeermomenten";

export default function Loonstrook({ netto, niveau = "po", onOpenLeerpad, onClose, track }) {
  const [sheetKey, setSheetKey] = useState(null);
  const strook = maakLoonstrook(netto, niveau);
  const lm = sheetKey ? leermoment(sheetKey, niveau) : null;

  const openPost = (key) => {
    if (!leermoment(key, niveau)) return;
    setSheetKey(key);
    try { track && track("econ_post_klik", { scherm: "loonstrook", post: key, niveau }); } catch { /* nooit laten breken */ }
  };
  const naarLeren = () => {
    if (!lm) return;
    try { track && track("econ_naar_leren", { scherm: "loonstrook", post: lm.key, pad: lm.leerpad }); } catch { /* nooit laten breken */ }
    onOpenLeerpad && onOpenLeerpad(lm.leerpad);
  };

  return (
    <div
      onClick={onClose}
      style={{ position: "absolute", inset: 0, zIndex: 30, background: "rgba(8,14,28,0.55)", display: "grid", placeItems: "center", padding: 16 }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{ width: "100%", maxWidth: 360, background: "#fff", borderRadius: 18, boxShadow: "0 14px 40px rgba(0,0,0,.35)", overflow: "hidden", font: "system-ui" }}
      >
        {/* Kop */}
        <div style={{ background: "linear-gradient(135deg,#1c7d3c,#0a9d4a)", color: "#fff", padding: "14px 18px" }}>
          <div style={{ font: "800 16px system-ui" }}>📄 Je loonstrookje</div>
          <div style={{ font: "600 12px system-ui", opacity: 0.9, marginTop: 2 }}>Je leerde een kwartier — dit is je loon. Tik op een regel om te zien wat het betekent.</div>
        </div>

        {/* Posten */}
        <div style={{ padding: "10px 14px 4px" }}>
          {strook.posten.map((p) => {
            const klikbaar = !!leermoment(p.key, niveau);
            return (
              <button
                key={p.key}
                onClick={() => openPost(p.key)}
                disabled={!klikbaar}
                style={{
                  width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10,
                  border: "none", background: p.netto ? "#eafaf0" : "transparent",
                  borderTop: p.netto ? "2px solid #cdeccb" : "1px solid #f0f2f5",
                  borderRadius: p.netto ? 12 : 0, padding: "12px 10px", margin: p.netto ? "6px 0 2px" : 0,
                  cursor: klikbaar ? "pointer" : "default", textAlign: "left",
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: 6, font: p.netto ? "800 15px system-ui" : "600 14px system-ui", color: p.netto ? "#0a7d3c" : "#33404f" }}>
                  {p.label}
                  {klikbaar && <span style={{ font: "12px system-ui", opacity: 0.6 }}>🔎</span>}
                </span>
                <span style={{ font: p.netto ? "800 16px system-ui" : "700 14px system-ui", color: p.teken === "−" ? "#c0392b" : (p.netto ? "#0a7d3c" : "#1c2840"), whiteSpace: "nowrap" }}>
                  {p.teken === "−" ? "− " : (p.teken === "=" ? "" : "")}{p.bedrag} 🪙
                </span>
              </button>
            );
          })}
        </div>

        {/* Mini-som onderaan */}
        <div style={{ padding: "2px 18px 14px", font: "600 12px system-ui", color: "#8a939c" }}>
          {strook.bruto} 🪙 brutoloon − {strook.bruto - strook.netto} 🪙 belasting = <strong style={{ color: "#0a7d3c" }}>{strook.netto} 🪙 netto</strong> in je spaarpot.
        </div>

        {/* Knop sluiten */}
        <div style={{ padding: "0 14px 14px" }}>
          <button onClick={onClose} style={{ width: "100%", border: "none", background: "#eef1f5", color: "#33404f", font: "800 14px system-ui", padding: "12px", borderRadius: 12, cursor: "pointer" }}>
            Top, naar mijn park →
          </button>
        </div>
      </div>

      {/* Bottom-sheet met uitleg + doorklik naar het leerpad */}
      {lm && (
        <div
          onClick={(e) => { e.stopPropagation(); setSheetKey(null); }}
          style={{ position: "absolute", inset: 0, zIndex: 31, background: "rgba(8,14,28,0.45)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ width: "100%", maxWidth: 420, background: "#fff", borderRadius: "18px 18px 0 0", boxShadow: "0 -10px 30px rgba(0,0,0,.3)", padding: "18px 18px 22px" }}
          >
            <div style={{ font: "800 17px system-ui", color: "#1c2840", marginBottom: 6 }}>{lm.titel}</div>
            <div style={{ font: "600 14px system-ui", color: "#56627a", lineHeight: 1.5, marginBottom: 16 }}>{lm.uitleg}</div>
            <button onClick={naarLeren} style={{ width: "100%", border: "none", background: "linear-gradient(135deg,#00C853,#00a846)", color: "#fff", font: "800 15px system-ui", padding: "13px", borderRadius: 12, cursor: "pointer", marginBottom: 8 }}>
              💡 Leer hier meer →
            </button>
            <button onClick={() => setSheetKey(null)} style={{ width: "100%", border: "none", background: "transparent", color: "#8a939c", font: "700 13px system-ui", padding: "8px", cursor: "pointer" }}>
              Terug
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// 🖨️ "Print dit leerpad" — idee 60 (Mark 6 nov 2026: "goed idee"). Miguel vroeg via Charley om
// papier, Brian oefent op werkbladen van school. Eén regel op elk leerpad (overzicht + klaar-
// scherm) naar het werkblad /print/pad?werkblad=<id>: uitleg per deel, vragen, antwoordblad.
// Niet bij examen-paden (authentieke examens horen niet als los werkblad rond te slingeren).
import { track } from "../../utils.js";

export default function PrintPadLink({ pathId, plek = "klaar", klein = false }) {
  if (!pathId || String(pathId).startsWith("examen-")) return null;
  const href = `/print/pad?werkblad=${encodeURIComponent(pathId)}`;
  const meet = () => { try { track("padprint_link", { pad: pathId, plek }); } catch { /* */ } };
  if (klein) {
    return (
      <div style={{ textAlign: "center", margin: "0 0 14px" }}>
        <a href={href} onClick={meet} style={{ color: "var(--color-text-muted, #9aa4c7)", fontSize: 13, fontWeight: 700, textDecoration: "underline" }}>
          🖨️ Print dit leerpad als werkblad
        </a>
      </div>
    );
  }
  return (
    <a href={href} onClick={meet} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginTop: 12, background: "rgba(255,255,255,0.05)", border: "1px solid var(--color-border-soft, rgba(255,255,255,0.14))", borderRadius: 14, padding: "12px 16px", color: "inherit" }}>
      <span style={{ fontSize: 24, lineHeight: 1 }} aria-hidden="true">🖨️</span>
      <span style={{ flex: 1 }}>
        <span style={{ display: "block", fontWeight: 800, fontSize: 15 }}>Print dit leerpad</span>
        <span style={{ display: "block", fontSize: 13.5, color: "var(--color-text-muted, #9aa4c7)", lineHeight: 1.45, marginTop: 2 }}>Werkblad met de uitleg, de vragen en een antwoordblad. Gratis.</span>
      </span>
      <span style={{ fontSize: 13, fontWeight: 800, whiteSpace: "nowrap" }}>Maak →</span>
    </a>
  );
}

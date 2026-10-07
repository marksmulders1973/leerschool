// Gedeelde stijl voor het ouderadvies-prototype (zelfde taal als Gezinsstart).
export const F = {
  pagina: { maxWidth: 520, margin: "0 auto", padding: "16px 16px 48px", boxSizing: "border-box", color: "var(--color-text-strong, #fff)" },
  kaart: { borderRadius: 16, border: "1px solid rgba(105,240,174,0.35)", background: "rgba(105,240,174,0.06)", padding: 16, marginBottom: 14 },
  kaartRustig: { borderRadius: 16, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", padding: 16, marginBottom: 14 },
  kop: { fontFamily: "var(--font-display)", fontSize: 19, fontWeight: 700, lineHeight: 1.3, margin: "2px 0 8px" },
  kopKlein: { fontFamily: "var(--font-display)", fontSize: 15.5, fontWeight: 700, lineHeight: 1.3, margin: "0 0 6px" },
  tekst: { fontFamily: "var(--font-body)", fontSize: 14.5, color: "rgba(255,255,255,0.85)", lineHeight: 1.55, margin: "0 0 10px" },
  sub: { fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: "0 0 10px" },
  stapje: { fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, color: "#69f0ae", textTransform: "uppercase" },
  input: { width: "100%", padding: "11px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text-strong, #fff)", fontFamily: "var(--font-body)", fontSize: 16, outline: "none", boxSizing: "border-box" },
  primair: (uit) => ({ width: "100%", padding: 13, borderRadius: 12, border: "none", background: uit ? "rgba(105,240,174,0.3)" : "#69f0ae", color: "#08121f", fontFamily: "var(--font-display)", fontSize: 15.5, fontWeight: 700, cursor: uit ? "not-allowed" : "pointer", marginTop: 10, minHeight: 48 }),
  secundair: { width: "100%", padding: 12, borderRadius: 12, border: "1px solid rgba(255,255,255,0.25)", background: "transparent", color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 700, cursor: "pointer", marginTop: 8, minHeight: 46 },
  link: { background: "none", border: "none", padding: "10px 4px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", fontSize: 13, cursor: "pointer", textDecoration: "underline" },
  chip: (aan) => ({ padding: "8px 13px", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, border: aan ? "2px solid #69f0ae" : "1px solid rgba(255,255,255,0.18)", background: aan ? "rgba(105,240,174,0.16)" : "rgba(255,255,255,0.05)", color: aan ? "#69f0ae" : "rgba(255,255,255,0.75)" }),
  optie: { width: "100%", textAlign: "left", padding: "13px 14px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.05)", color: "var(--color-text-strong, #fff)", fontFamily: "var(--font-body)", fontSize: 15.5, cursor: "pointer", marginTop: 8, minHeight: 48 },
  fout: { fontFamily: "var(--font-body)", fontSize: 13, color: "#ff8a65", marginTop: 8, lineHeight: 1.45 },
  ok: { fontFamily: "var(--font-body)", fontSize: 13, color: "#69f0ae", marginTop: 8, lineHeight: 1.45 },
  prototype: { fontFamily: "var(--font-body)", fontSize: 11.5, color: "#ffd54f", border: "1px dashed rgba(255,213,79,0.5)", borderRadius: 10, padding: "6px 10px", marginBottom: 12, lineHeight: 1.45 },
};

const KLEUR = { goed: "#69f0ae", wankel: "#ffd54f", "nog-niet": "#ff8a65", onbekend: "rgba(255,255,255,0.45)" };

export function UitslagLabel({ uitslag, tekst }) {
  return (
    <span data-uitslag={uitslag} style={{ display: "inline-block", padding: "2px 9px", borderRadius: 999, fontFamily: "var(--font-display)", fontSize: 12.5, fontWeight: 700, color: "#08121f", background: KLEUR[uitslag] || KLEUR.onbekend }}>
      {tekst}
    </span>
  );
}

/** Drie treden (5 · 10 · 15 minuten), zoals de kwartierteller. */
export function BlokTreden({ klaar = [], bezig = null }) {
  return (
    <div style={{ display: "flex", gap: 6, margin: "6px 0 12px" }} aria-label={`${klaar.length} van 3 blokjes klaar`}>
      {[1, 2, 3].map((nr) => {
        const af = klaar.includes(nr);
        return (
          <div key={nr} style={{ flex: 1 }}>
            <div style={{ height: 7, borderRadius: 4, background: af ? "#69f0ae" : nr === bezig ? "rgba(105,240,174,0.45)" : "rgba(255,255,255,0.12)" }} />
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.5)", marginTop: 3, textAlign: "center" }}>{nr * 5} min</div>
          </div>
        );
      })}
    </div>
  );
}

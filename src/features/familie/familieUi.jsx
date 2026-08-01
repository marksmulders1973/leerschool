// ══════════════════════════════════════════════════════════════════════
// Gedeelde bouwstenen Familie-laag (Fable-pass, 1 aug 2026).
//
// De 9 Familie-onderdelen zijn los van elkaar gebouwd (deel-voor-deel, ~80%
// live). Deze module trekt ze tot één geheel: één kop met bèta-badge, één
// terug-gedrag (altijd naar de hub), één chip/input-stijl, en een
// "meer extra's"-voetrij zodat de tools naar elkaar verwijzen in plaats van
// losse eilandjes te zijn. Zie memory project_studiebol_familie_tier_features.
// ══════════════════════════════════════════════════════════════════════

// Kop van elke Familie-pagina: ← terug (naar de hub) · titel · bèta-badge · intro.
export function FamilieKop({ setPage, titel, intro, terug = "familie" }) {
  return (
    <>
      <button onClick={() => setPage && setPage(terug)} style={familieLinkBtn}>← terug</button>
      <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, margin: 0 }}>{titel}</h1>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>bèta</span>
      </div>
      {intro && (
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.6, marginTop: 6 }}>{intro}</p>
      )}
    </>
  );
}

// Voetrij: verwijs vanaf elk onderdeel naar de andere Familie-extra's.
const MEER_ITEMS = [
  { page: "paraatheid", label: "🚦 Paraatheid" },
  { page: "oefenboekje", label: "📄 Oefenboekje" },
  { page: "ouderkaart", label: "👪 Kaart voor thuis" },
  { page: "weekschema", label: "📅 Weekschema" },
  { page: "trots", label: "🎉 Trots-momenten" },
  { page: "diploma", label: "🏅 Diploma" },
  { page: "vonk", label: "🐉 Vonk" },
];

export function FamilieMeer({ setPage, huidig }) {
  const items = MEER_ITEMS.filter((i) => i.page !== huidig);
  return (
    <div style={{ maxWidth: 760, margin: "0 auto", padding: "6px 16px 40px" }}>
      <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "4px 0 14px" }} />
      <div style={{ fontSize: 12.5, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginBottom: 8 }}>
        ✨ Meer Familie-extra's
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {items.map((i) => (
          <button key={i.page} onClick={() => setPage && setPage(i.page)} style={familieChip(false)}>
            {i.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export const familieLinkBtn = { background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 };

export function familieChip(aan) {
  return {
    padding: "9px 14px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700,
    border: aan ? "1.5px solid #ffd54f" : "1.5px solid rgba(255,255,255,0.18)",
    background: aan ? "rgba(255,213,79,0.14)" : "rgba(255,255,255,0.05)",
    color: aan ? "#ffd54f" : "var(--color-text, #e8edf5)",
  };
}

export const familieInput = { marginLeft: 6, padding: "7px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "inherit", fontSize: 14 };

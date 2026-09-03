// Examen-pad-intro-banner — gouden markeerstift-look voor de
// algemene intro van een examen-leerpad.
//
// Verschil met <ExamenBronBanner>:
// - ExamenBronBanner = per check (1 vraag uit een examen)
// - ExamenPadBanner  = bovenaan een examen-leerpad (alle vragen zijn echt)
//
// Mark feedback 2026-05-12: 'geel markeer stift look' — de intro van een
// examen-leerpad moet direct opvallen zodat ouder/leerling weet dat
// ze met echte authentieke examenvragen werken.

const COLORS = {
  goudLicht: "rgba(255,213,79,0.28)",
  goudDonker: "rgba(255,193,7,0.16)",
  goudRand: "rgba(255,213,79,0.65)",
  goudShadow: "rgba(255,213,79,0.18)",
  tekst: "#fff3c4",
  tekstSub: "#fff8c2",
  tekstStrong: "#fffbe5",
  link: "#ffd54f",
};

export default function ExamenPadBanner({ intro, padTitle }) {
  if (!intro) return null;
  return (
    <div
      style={{
        padding: "16px 18px",
        marginBottom: 16,
        background: `linear-gradient(135deg, ${COLORS.goudLicht}, ${COLORS.goudDonker})`,
        border: `2px solid ${COLORS.goudRand}`,
        borderRadius: 14,
        fontFamily: "var(--font-body)",
        color: COLORS.tekst,
        boxShadow: `0 2px 14px ${COLORS.goudShadow}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
        <span aria-hidden="true" style={{ fontSize: 30, lineHeight: 1 }}>🎓</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              opacity: 0.9,
              color: COLORS.tekstSub,
            }}
          >
            Authentieke examen-vragen
          </div>
          {padTitle && (
            <div style={{ fontSize: 16, fontWeight: 800, marginTop: 3, lineHeight: 1.3, color: COLORS.tekstStrong }}>
              {padTitle}
            </div>
          )}
        </div>
      </div>
      <div
        style={{
          fontSize: 14,
          lineHeight: 1.55,
          background: "rgba(255,213,79,0.10)",
          padding: "10px 12px",
          borderRadius: 8,
          color: COLORS.tekst,
        }}
      >
        {intro}
      </div>
      <div style={{ fontSize: 11.5, marginTop: 10, opacity: 0.85, lineHeight: 1.5 }}>
        Letterlijk overgenomen uit het Cito-examenboekje. Gratis te downloaden bij{" "}
        <a
          href="https://www.examenblad.nl"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: COLORS.link, textDecoration: "underline", fontWeight: 700 }}
        >
          examenblad.nl
        </a>
        .
      </div>
    </div>
  );
}

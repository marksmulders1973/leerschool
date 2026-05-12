// Gouden examenvraag-banner — toont prominent dat een vraag uit een
// echt examen komt + linkt naar examenblad.nl.
//
// Mark feedback 2026-05-12: deze markering moet OVERAL gelijk werken
// (LearnPath, CitoLeerpadToets foutuitleg, ResultsPage, etc.). Daarom
// 1 shared component zodat 1 wijziging overal doorwerkt.
//
// Inputformaat van `examenBron`-string (in elke check):
//   "🎓 Echt examen VMBO-GL/TL economie 2023 tijdvak 1, vraag 4"
//   "VMBO-GT geschiedenis 2024 tijdvak 1, vraag 12"
//   (emoji + "Echt examen " prefix wordt automatisch gestript)
//
// Props:
//   examenBron : string (verplicht) — de bron-aanduiding.
//   compact    : boolean (optioneel) — kleinere variant voor lijsten
//                (bv. CitoLeerpadToets fout-vragen).

import { useMemo } from "react";

const COLORS = {
  goudLicht: "rgba(255,213,79,0.30)",
  goudDonker: "rgba(255,193,7,0.18)",
  goudRand: "rgba(255,213,79,0.65)",
  goudShadow: "rgba(255,213,79,0.18)",
  tekst: "#ffe082",
  tekstSub: "#fff8c2",
  link: "#ffd54f",
};

// Probeer bron-info in herkenbare delen te knippen voor (optioneel) deep-link
// naar examenblad.nl. Voor nu: alleen de algemene link, omdat ieder vak/jaar
// een eigen URL heeft die we niet altijd kunnen voorspellen.
function parseExamenBron(raw) {
  if (!raw) return null;
  // Strip emoji + "Echt examen" prefix.
  return String(raw)
    .replace(/^🎓\s*Echt examen\s*/i, "")
    .replace(/^🎓\s*/, "")
    .trim();
}

export default function ExamenBronBanner({ examenBron, compact = false }) {
  const label = useMemo(() => parseExamenBron(examenBron), [examenBron]);
  if (!label) return null;

  if (compact) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "8px 12px",
          background: `linear-gradient(135deg, ${COLORS.goudLicht}, ${COLORS.goudDonker})`,
          border: `1.5px solid ${COLORS.goudRand}`,
          borderRadius: 10,
          color: COLORS.tekst,
          fontFamily: "var(--font-body)",
          marginBottom: 8,
        }}
      >
        <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1 }}>🎓</span>
        <div style={{ flex: 1, minWidth: 0, fontSize: 12, lineHeight: 1.3 }}>
          <div style={{
            fontSize: 9.5,
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: "uppercase",
            opacity: 0.9,
            color: COLORS.tekstSub,
          }}>
            Officiële examen-vraag
          </div>
          <div style={{ fontWeight: 700, marginTop: 2 }}>{label}</div>
          <a
            href="https://www.examenblad.nl"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: COLORS.link, textDecoration: "underline", fontSize: 11, fontWeight: 600 }}
          >
            examenblad.nl ›
          </a>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "block",
        padding: "14px 16px",
        marginBottom: 14,
        background: `linear-gradient(135deg, ${COLORS.goudLicht}, ${COLORS.goudDonker})`,
        border: `2px solid ${COLORS.goudRand}`,
        borderRadius: 12,
        fontFamily: "var(--font-body)",
        color: COLORS.tekst,
        boxShadow: `0 2px 12px ${COLORS.goudShadow}`,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span aria-hidden="true" style={{ fontSize: 28, lineHeight: 1 }}>🎓</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            opacity: 0.9,
            color: COLORS.tekstSub,
          }}>
            Officiële examen-vraag
          </div>
          <div style={{ fontSize: 15, fontWeight: 800, marginTop: 3, lineHeight: 1.3 }}>
            {label}
          </div>
        </div>
      </div>
      <div style={{ fontSize: 11.5, marginTop: 8, opacity: 0.85, lineHeight: 1.5 }}>
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

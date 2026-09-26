// Plaatje of kleurvlak vóór een antwoord (Nieuwkomer-pakket, zie learnPaths/nieuwkomersPicto.js).
// `bron` = "/picto/x.svg" of een kleur "#rrggbb". Wit vlak zodat de lijnplaatjes ook
// in de donkere app goed zichtbaar zijn. alt leeg: het woord staat er al naast.
export default function Picto({ bron, maat = 44 }) {
  if (!bron) return null;
  const basis = { width: maat, height: maat, borderRadius: 10, flexShrink: 0, border: "1px solid rgba(0,0,0,0.15)" };
  if (bron.startsWith("#")) return <span aria-hidden="true" style={{ ...basis, display: "inline-block", background: bron }} />;
  return <img src={bron} alt="" loading="lazy" style={{ ...basis, background: "#fff", objectFit: "contain", padding: 3 }} />;
}

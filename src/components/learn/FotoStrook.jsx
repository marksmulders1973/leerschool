// 📷 FotoStrook — rij echte foto's/portretten met eerlijke bronvermelding.
// Mark 11 aug 2026: "kunnen hier echte foto's/portretten bij historische
// figuren?" — ja, mits rechtenvrij (regel 9 aug). Foto's komen uit
// src/data/fotoData.js (Wikimedia Commons, credit per foto).
// Gebruik in een leerpad (.js, geen JSX nodig):
//   illustrationComponent: maakFotoStrook([
//     { naam: "Erasmus", onderschrift: "Denker uit Rotterdam (±1466-1536)" },
//   ], FIGUUR_FOTOS)

export function maakFotoStrook(items, fotoMap) {
  return function FotoStrook() {
    const metFoto = items.filter((it) => fotoMap[it.naam]);
    if (!metFoto.length) return null;
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", padding: "6px 0" }}>
        {metFoto.map((it) => {
          const f = fotoMap[it.naam];
          return (
            <figure key={it.naam} style={{ margin: 0, width: 148, textAlign: "center" }}>
              <img
                src={f.src}
                alt={`Portret van ${it.naam}`}
                loading="lazy"
                style={{ width: 148, height: 178, objectFit: "cover", objectPosition: "top", borderRadius: 12, border: "1px solid rgba(255,255,255,0.15)" }}
              />
              <figcaption style={{ fontSize: 13, fontWeight: 700, color: "#e7edf6", marginTop: 6, lineHeight: 1.25 }}>
                {it.naam}
                {it.onderschrift && (
                  <div style={{ fontSize: 11, fontWeight: 400, color: "rgba(231,237,246,0.65)" }}>{it.onderschrift}</div>
                )}
              </figcaption>
              <div style={{ fontSize: 8.5, color: "rgba(231,237,246,0.4)", marginTop: 2, lineHeight: 1.2 }}>📷 {f.credit}</div>
            </figure>
          );
        })}
      </div>
    );
  };
}

export default maakFotoStrook;

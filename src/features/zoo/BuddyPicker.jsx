// BuddyPicker — vriendelijk keuze-scherm voor je droom-maatje. Je kiest er één
// gratis aan het begin; de rest "verdien" je door te leren (voltooide stappen).
// Vergrendelde maatjes tonen hoeveel je nog moet leren. Keuze gaat naar
// localStorage via buddies.js (geen Supabase-migratie nodig).
import { BUDDIES, buddyBeschikbaar, bezitBuddies, heeftGekozen, kiesBuddy } from "./buddies";

export default function BuddyPicker({ open, onClose, geleerdeStappen = 0, currentId = "", onChoose }) {
  if (!open) return null;
  const eerste = !heeftGekozen();
  const bezit = new Set(bezitBuddies());

  const kies = (b) => {
    kiesBuddy(b.id);
    if (onChoose) onChoose(b.id);
    onClose && onClose();
  };

  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 30, background: "rgba(10,20,30,0.55)", display: "grid", placeItems: "center", padding: 16 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: "#fffef8", borderRadius: 20, boxShadow: "0 16px 48px rgba(0,0,0,.4)", padding: "18px 18px 20px", width: "min(460px, 96vw)", maxHeight: "88vh", overflowY: "auto" }}>
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <div style={{ fontSize: 34 }}>🐾</div>
          <h2 style={{ font: "900 21px system-ui", color: "#234", margin: "4px 0 2px" }}>{eerste ? "Kies je droom-maatje" : "Jouw maatjes"}</h2>
          <p style={{ font: "600 13px/1.45 system-ui", color: "#667", margin: "0 6px" }}>
            {eerste
              ? "Eentje mag je gratis uitkiezen. Hij loopt met je mee door het park en praat met je. De andere maatjes verdien je door te leren!"
              : "Tik op een maatje om hem mee te nemen. Vergrendelde maatjes verdien je door meer te leren."}
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 12 }}>
          {BUDDIES.map((b) => {
            const beschikbaar = buddyBeschikbaar(b, geleerdeStappen);
            const inBezit = bezit.has(b.id);
            const actief = currentId === b.id;
            const nogNodig = Math.max(0, (b.verdien || 0) - geleerdeStappen);
            return (
              <button
                key={b.id}
                onClick={() => beschikbaar && kies(b)}
                disabled={!beschikbaar}
                style={{
                  position: "relative", textAlign: "center", cursor: beschikbaar ? "pointer" : "not-allowed",
                  border: actief ? "3px solid #2e7d32" : "2px solid #e7e2d4",
                  borderRadius: 16, padding: "14px 10px 12px",
                  background: beschikbaar ? `linear-gradient(160deg, #ffffff, ${b.kleur2}22)` : "#f1efe8",
                  opacity: beschikbaar ? 1 : 0.72,
                }}
              >
                {actief && <span style={{ position: "absolute", top: 8, right: 8, font: "800 10px system-ui", color: "#fff", background: "#2e7d32", borderRadius: 999, padding: "2px 7px" }}>actief</span>}
                <div style={{ fontSize: 44, lineHeight: 1, filter: beschikbaar ? "none" : "grayscale(1)" }}>{b.emoji}</div>
                <div style={{ font: "900 16px system-ui", color: "#234", marginTop: 6 }}>{b.naam}</div>
                <div style={{ font: "600 11.5px system-ui", color: "#778", marginTop: 1 }}>{b.karakter}</div>
                {beschikbaar ? (
                  <div style={{ marginTop: 8, font: "800 12px system-ui", color: "#2e7d32" }}>
                    {actief ? "✓ jouw maatje" : inBezit ? "Kies mij" : eerste ? "Gratis kiezen" : "Verdiend! Kies mij"}
                  </div>
                ) : (
                  <div style={{ marginTop: 8, font: "800 11.5px system-ui", color: "#a06a00", background: "#fff3d6", borderRadius: 999, padding: "4px 8px", display: "inline-block" }}>
                    🔒 nog {nogNodig} {nogNodig === 1 ? "stap" : "stappen"} leren
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div style={{ textAlign: "center", marginTop: 14 }}>
          <div style={{ font: "700 12px system-ui", color: "#8a93a0", marginBottom: 10 }}>📚 Jij hebt al <b>{geleerdeStappen}</b> {geleerdeStappen === 1 ? "stap" : "stappen"} geleerd</div>
          <button onClick={onClose} style={{ border: "none", borderRadius: 999, padding: "9px 20px", font: "800 13px system-ui", color: "#33404f", background: "#eef1f5", cursor: "pointer" }}>Sluiten</button>
        </div>
      </div>
    </div>
  );
}

// 🌍 Park-galerij (Mark 17 aug 2026): openbare showcase van parken die kinderen
// zelf hebben aangemeld. Anoniem — je ziet alleen "Park 1/2/3…", geen namen.
// Klik = het park read-only bekijken (/dierentuin?bezoek=<code>). Meldt een kind
// zijn park aan, dan komt het eerst in de wachtrij; alleen de maker (Mark) ziet
// die wachtrij hieronder en keurt goed/verbergt.
import { useEffect, useState } from "react";
import { listApprovedParken, listPendingParken, modereerPark } from "../data/repos/galerijRepo";

const ADMIN = "mark-smulders@hotmail.com";
const S = {
  wrap: { minHeight: "100vh", background: "linear-gradient(160deg,#0f1729,#162033 50%,#1a2744)", color: "#fff", padding: "24px 16px 64px" },
  card: { textDecoration: "none", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "18px 12px", textAlign: "center", color: "#fff", display: "block" },
};

export default function ParkGalerij({ authUser, onHome }) {
  const isAdmin = String(authUser?.email || "").toLowerCase() === ADMIN;
  const [approved, setApproved] = useState([]);
  const [pending, setPending] = useState([]);
  const [loading, setLoading] = useState(true);

  const laad = async () => {
    setLoading(true);
    setApproved(await listApprovedParken());
    if (isAdmin) setPending(await listPendingParken());
    setLoading(false);
  };
  useEffect(() => { laad(); /* eslint-disable-next-line react-hooks/exhaustive-deps */ }, [isAdmin]);

  const keur = async (id, status) => { await modereerPark(id, status); laad(); };

  return (
    <div style={S.wrap}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <h1 style={{ margin: 0, font: "800 24px system-ui" }}>🌍 Park-galerij</h1>
          <button onClick={onHome} style={{ border: "none", borderRadius: 999, padding: "8px 14px", font: "700 13px system-ui", background: "rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer" }}>← Terug</button>
        </div>
        <p style={{ color: "rgba(255,255,255,0.72)", font: "500 14px/1.6 system-ui", marginTop: 0 }}>
          Bekijk de parken die andere kinderen hebben gebouwd — klik erop om erin rond te lopen (alleen kijken).
          Wil je jouw park hier ook? Ga naar je eigen park → <b>📤 Deel</b> → "Zet mijn park in de galerij".
        </p>

        {isAdmin && pending.length > 0 && (
          <div style={{ background: "rgba(255,224,138,0.1)", border: "1px solid rgba(255,224,138,0.4)", borderRadius: 14, padding: 14, margin: "14px 0" }}>
            <div style={{ font: "800 15px system-ui", marginBottom: 8 }}>🔒 Wachtrij — alleen jij ({pending.length})</div>
            {pending.map((p) => (
              <div key={p.id} style={{ display: "flex", gap: 8, alignItems: "center", padding: "8px 0", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <a href={`/dierentuin?bezoek=${p.share_code}`} style={{ flex: 1, color: "#7bc6ff", textDecoration: "none", font: "700 13.5px system-ui", minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>👀 Bekijk park ({p.share_code})</a>
                <button onClick={() => keur(p.id, "approved")} style={{ flexShrink: 0, border: "none", borderRadius: 999, padding: "7px 12px", font: "800 12.5px system-ui", background: "#2e9e4f", color: "#fff", cursor: "pointer" }}>✅ Goedkeuren</button>
                <button onClick={() => keur(p.id, "hidden")} title="Afwijzen/verbergen" style={{ flexShrink: 0, border: "none", borderRadius: 999, padding: "7px 10px", font: "700 12.5px system-ui", background: "rgba(255,255,255,0.12)", color: "#fff", cursor: "pointer" }}>✕</button>
              </div>
            ))}
          </div>
        )}

        {loading ? (
          <p style={{ color: "rgba(255,255,255,0.6)" }}>Laden…</p>
        ) : approved.length === 0 ? (
          <p style={{ color: "rgba(255,255,255,0.6)" }}>Nog geen parken in de galerij. Wees de eerste — meld je park aan in het deel-scherm! 🌱</p>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginTop: 8 }}>
            {approved.map((p, i) => (
              <div key={p.id} style={{ position: "relative" }}>
                <a href={`/dierentuin?bezoek=${p.share_code}`} style={S.card}>
                  <div style={{ fontSize: 34 }}>🏞️</div>
                  <div style={{ font: "800 14px system-ui", marginTop: 6 }}>Park {i + 1}</div>
                  <div style={{ font: "700 12px system-ui", color: "#7bc6ff", marginTop: 4 }}>👀 Bekijk →</div>
                </a>
                {isAdmin && (
                  <button onClick={() => keur(p.id, "hidden")} title="Verbergen" style={{ position: "absolute", top: 6, right: 6, border: "none", borderRadius: 999, width: 24, height: 24, font: "700 12px system-ui", background: "rgba(0,0,0,0.45)", color: "#fff", cursor: "pointer" }}>✕</button>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

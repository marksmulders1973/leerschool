// ❓ CharleyHulp — "Vraag Charley over de app" (Mark 1 sep 2026, laag 2+3).
// Laag 2: de APP-GIDS-vragen als tik-knoppen met vaste antwoorden (€0).
// Laag 3: staat je vraag er niet bij → vrije vraag naar /api/charley-hulp
// (AI met de gids als kennis; dagcap per apparaat, eerlijk "weet ik niet").
// Overlay in dezelfde stijl als de chat-laag van MaatjePocket.

import { useState } from "react";
import APP_GIDS from "../data/appGids.js";
import { track } from "../utils.js";

const AI_CAP = 6; // vrije vragen per apparaat per dag — hulp, geen chat
const VANDAAG = () => new Date().toISOString().slice(0, 10);
function aiCapBereikt() {
  try {
    const raw = JSON.parse(localStorage.getItem("lk_charley_hulp_ai") || "null");
    return raw && raw.datum === VANDAAG() && raw.n >= AI_CAP;
  } catch { return false; }
}
function aiCapTel() {
  try {
    const raw = JSON.parse(localStorage.getItem("lk_charley_hulp_ai") || "null");
    const n = raw && raw.datum === VANDAAG() ? raw.n + 1 : 1;
    localStorage.setItem("lk_charley_hulp_ai", JSON.stringify({ datum: VANDAAG(), n }));
  } catch { /* */ }
}

export default function CharleyHulp({ open, onClose }) {
  const [openVraag, setOpenVraag] = useState(null);
  const [invoer, setInvoer] = useState("");
  const [aiAntwoord, setAiAntwoord] = useState(null); // {vraag, antwoord}
  const [busy, setBusy] = useState(false);

  if (!open) return null;

  const kindVragen = APP_GIDS.filter((v) => v.rol !== "ouder");
  const ouderVragen = APP_GIDS.filter((v) => v.rol === "ouder");

  const kies = (v) => {
    setOpenVraag(openVraag === v.id ? null : v.id);
    if (openVraag !== v.id) track("charley_hulp_vraag", { id: v.id });
  };

  const vraagAI = async (e) => {
    e.preventDefault();
    const t = invoer.trim();
    if (!t || busy) return;
    if (aiCapBereikt()) {
      setAiAntwoord({ vraag: t, antwoord: "Je hebt vandaag al veel gevraagd — morgen kan ik weer meedenken! Kijk anders bij de vragen hierboven, of op leerkwartier.app/over. 🐾" });
      setInvoer("");
      return;
    }
    setBusy(true); setAiAntwoord(null);
    track("charley_hulp_ai", {});
    try {
      aiCapTel();
      const r = await fetch("/api/charley-hulp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vraag: t }),
      });
      const data = await r.json().catch(() => ({}));
      setAiAntwoord({ vraag: t, antwoord: data?.reply || "Hm, dat weet ik zo niet — kijk eens bij de vragen hierboven, of op leerkwartier.app/over. 🐾" });
      setInvoer("");
    } catch {
      setAiAntwoord({ vraag: t, antwoord: "Ik kan even niet nadenken — probeer het zo nog eens. 🙏" });
    } finally { setBusy(false); }
  };

  const vraagStijl = (isOpen) => ({
    width: "100%", textAlign: "left", border: "none", cursor: "pointer",
    background: isOpen ? "#fff" : "transparent", borderRadius: 12,
    padding: "10px 12px", font: "700 13.5px system-ui", color: "#243",
    display: "flex", justifyContent: "space-between", gap: 8, alignItems: "center",
  });

  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 6, background: "rgba(8,14,22,0.55)", display: "flex", alignItems: "flex-end" }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxHeight: "82vh", display: "flex", flexDirection: "column", background: "#fffef9", borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: "linear-gradient(135deg,#b8860b,#ffd54f)", color: "#243" }}>
          <img src="/maatjes/charley-echt.jpg" alt="Charley" width={30} height={30} style={{ borderRadius: "50%", objectFit: "cover" }} />
          <div style={{ flex: 1, font: "900 15px system-ui" }}>Vraag Charley over de app</div>
          <button onClick={onClose} style={{ border: "none", background: "rgba(255,255,255,0.4)", color: "#243", width: 32, height: 32, borderRadius: 999, fontSize: 15, fontWeight: 800, cursor: "pointer" }}>✕</button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "10px 13px", background: "#f7f9f4" }}>
          {[{ kop: null, lijst: kindVragen }, { kop: "Voor ouders of verzorgers", lijst: ouderVragen }].map((groep, gi) => (
            <div key={gi}>
              {groep.kop && <div style={{ font: "800 11.5px system-ui", color: "#8a93a0", textTransform: "uppercase", letterSpacing: 0.5, margin: "12px 4px 4px" }}>{groep.kop}</div>}
              {groep.lijst.map((v) => (
                <div key={v.id} style={{ borderBottom: "1px solid #ececec" }}>
                  <button onClick={() => kies(v)} style={vraagStijl(openVraag === v.id)}>
                    <span>{v.vraag}</span>
                    <span style={{ color: "#8a93a0", fontSize: 11 }}>{openVraag === v.id ? "▲" : "▼"}</span>
                  </button>
                  {openVraag === v.id && (
                    <div style={{ padding: "2px 12px 12px", font: "600 13px/1.55 system-ui", color: "#40506a" }}>
                      🐕 {v.antwoord}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}

          {aiAntwoord && (
            <div style={{ marginTop: 12, borderRadius: 12, background: "#fff", padding: "10px 12px", boxShadow: "0 1px 4px rgba(0,0,0,.08)" }}>
              <div style={{ font: "700 12.5px system-ui", color: "#8a93a0", marginBottom: 4 }}>Jij vroeg: {aiAntwoord.vraag}</div>
              <div style={{ font: "600 13.5px/1.55 system-ui", color: "#243" }}>🐕 {aiAntwoord.antwoord}</div>
            </div>
          )}
          {busy && <div style={{ marginTop: 10, color: "#8a93a0", font: "600 13px system-ui" }}>🐕 Charley denkt na <span style={{ letterSpacing: 2 }}>···</span></div>}
        </div>

        <form onSubmit={vraagAI} style={{ padding: "10px 12px calc(10px + env(safe-area-inset-bottom))", borderTop: "1px solid #ececec", background: "#fffef9" }}>
          <div style={{ font: "700 11.5px system-ui", color: "#8a93a0", margin: "0 4px 6px" }}>Staat je vraag er niet bij? Vraag het Charley:</div>
          <div style={{ display: "flex", gap: 8 }}>
            <input value={invoer} onChange={(e) => setInvoer(e.target.value)} maxLength={200} placeholder="Typ je vraag over de app…"
              style={{ flex: 1, minWidth: 0, border: "2px solid #dfe6da", borderRadius: 999, padding: "10px 15px", font: "600 13.5px system-ui", color: "#243", outline: "none" }} />
            <button type="submit" disabled={busy || !invoer.trim()} style={{ border: "none", borderRadius: 999, width: 44, height: 44, flexShrink: 0, color: "#fff", fontSize: 17,
              background: invoer.trim() && !busy ? "linear-gradient(135deg,#b8860b,#ffd54f)" : "#cfd6cc", cursor: invoer.trim() && !busy ? "pointer" : "default" }}>➤</button>
          </div>
        </form>
      </div>
    </div>
  );
}

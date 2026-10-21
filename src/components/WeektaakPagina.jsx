import { useEffect, useMemo, useState } from "react";
import TakenlijstView from "./TakenlijstView.jsx";
import { maakWeektaak, WEEKTAAK_GROEPEN } from "../data/weektaak.js";
import { track } from "../utils.js";

// 📅 Weektaak — leerkwartier.app/weektaak?g=6 (groeiplan punt 2, 21 okt 2026).
// Eén vast adres per groep dat elke maandag vanzelf nieuwe taken toont. De juf of
// meester deelt het één keer (digibord, ouder-app, klassenpagina); kinderen doen
// thuis een taak per dag. Geen account, geen code, niets klaarzetten.
// Uitleg voor leerkrachten (crawlbaar): public/weektaak-leerkracht.html.

const KEY_GROEP = "lk_weektaak_groep";

function leesGroep() {
  try {
    const g = Number(new URLSearchParams(window.location.search).get("g"));
    if (WEEKTAAK_GROEPEN.includes(g)) return g;
  } catch { /* */ }
  try {
    const g = Number(localStorage.getItem(KEY_GROEP));
    if (WEEKTAAK_GROEPEN.includes(g)) return g;
  } catch { /* */ }
  return null;
}

function zetGroepInUrl(g) {
  try {
    const u = new URL(window.location.href);
    if (g) u.searchParams.set("g", String(g)); else u.searchParams.delete("g");
    window.history.replaceState(window.history.state, "", u.pathname + u.search);
  } catch { /* */ }
}

export default function WeektaakPagina({ userName, onOpenLeerpad, onPlayReward, onHome }) {
  const [groep, setGroep] = useState(leesGroep);
  const [gekopieerd, setGekopieerd] = useState(false);
  const weektaak = useMemo(() => (groep ? maakWeektaak(groep) : null), [groep]);

  useEffect(() => {
    if (!weektaak) return;
    try { localStorage.setItem(KEY_GROEP, String(groep)); } catch { /* */ }
    zetGroepInUrl(groep);
    let via = "";
    try { via = new URLSearchParams(window.location.search).get("utm_source") || ""; } catch { /* */ }
    track("weektaak_open", { g: groep, week: weektaak.weektaak.week, via });
  }, [weektaak, groep]);

  const adres = groep ? `leerkwartier.app/weektaak?g=${groep}` : "";
  const kopieer = async () => {
    const tekst = `https://${adres}`;
    try { await navigator.clipboard.writeText(tekst); }
    catch {
      try { const t = document.createElement("textarea"); t.value = tekst; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); } catch { /* */ }
    }
    setGekopieerd(true);
    setTimeout(() => setGekopieerd(false), 1800);
    track("weektaak_kopieer", { g: groep });
  };

  if (!weektaak) {
    return (
      <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg,#0f1729,#162033)", color: "#fff", padding: "24px 16px 96px" }}>
        <div style={{ maxWidth: 560, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "#69f0ae", fontWeight: 700 }}>📅 Weektaak</span>
            <button onClick={onHome} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: 13, cursor: "pointer" }}>✕ sluiten</button>
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, margin: "10px 0 6px" }}>In welke groep zit je?</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.8)", margin: "0 0 16px" }}>Elke week drie taken: rekenen, taal en lezen. Doe er elke dag een.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {WEEKTAAK_GROEPEN.map((g) => (
              <button key={g} onClick={() => setGroep(g)} style={{ background: "rgba(255,255,255,0.08)", border: "1.5px solid rgba(255,255,255,0.18)", borderRadius: 14, padding: "16px 8px", color: "#fff", fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, cursor: "pointer" }}>
                Groep {g}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const jufStrook = (
    <div style={{ marginTop: 22, padding: "14px 16px", borderRadius: 14, background: "rgba(255,255,255,0.05)", border: "1px dashed rgba(255,255,255,0.22)" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "#ffd166" }}>🍎 Juf of meester?</div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "rgba(255,255,255,0.8)", margin: "4px 0 10px" }}>
        Deel dit adres één keer met je klas, bijvoorbeeld in de ouder-app. Elke maandag staan er vanzelf nieuwe taken. Geen account nodig.
      </p>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <code style={{ background: "rgba(0,0,0,0.3)", padding: "8px 10px", borderRadius: 8, fontSize: 14, color: "#fff", wordBreak: "break-all" }}>{adres}</code>
        <button onClick={kopieer} style={{ background: "#00c853", color: "#06211a", border: "none", borderRadius: 8, padding: "8px 12px", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 13.5, cursor: "pointer" }}>
          {gekopieerd ? "Gekopieerd ✓" : "Kopieer adres"}
        </button>
        <a href="/weektaak-leerkracht.html" style={{ color: "#69f0ae", fontSize: 13, fontFamily: "var(--font-body)" }}>Meer uitleg</a>
      </div>
      <button onClick={() => { setGroep(null); zetGroepInUrl(null); try { localStorage.removeItem(KEY_GROEP); } catch { /* */ } }} style={{ marginTop: 10, background: "none", border: "none", color: "rgba(255,255,255,0.55)", fontSize: 12.5, cursor: "pointer", padding: 0, textDecoration: "underline" }}>
        Andere groep kiezen
      </button>
    </div>
  );

  return (
    <TakenlijstView
      takenlijst={weektaak}
      userName={userName || ""}
      kop="📅 Weektaak"
      onOpenLeerpad={(pathId) => { track("weektaak_taak", { g: groep, pad: pathId }); onOpenLeerpad?.(pathId); }}
      onPlayReward={onPlayReward}
      onHome={onHome}
      onderaan={jufStrook}
    />
  );
}

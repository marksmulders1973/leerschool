// 📱 Play Store-kaart (11 nov 2026, Mark: "zet de play store link op de site"). De app
// "Leerkwartier: leren in 15 min" (app.leerkwartier.play) staat sinds 11 nov 2026 in de winkel.
// Dit blok was van 14 okt t/m 10 nov de tester-oproep (Google eiste 12 testers voor de oude
// app.leerkwartier.twa); bestandsnaam en functienamen zijn gebleven om de imports heel te laten.
// Het blok verschijnt alleen bij wie de app kán installeren: een Android-telefoon, niet al in de
// Play-app zelf, en niet eerder weggetikt. Wie de oude oproep wegtikte, ziet deze kaart wel.
import { useEffect, useState } from "react";
import { track } from "../utils.js";

export const PLAY_URL = "https://play.google.com/store/apps/details?id=app.leerkwartier.play";
const KEY_DICHT = "lk_play_kaart_dicht";

export function toonTesterOproep() {
  try {
    if (typeof navigator === "undefined") return false;
    if (!/Android/i.test(navigator.userAgent)) return false;
    if (localStorage.getItem(KEY_DICHT) === "1") return false;
    // Al in de Play-app (TWA): niets vragen.
    if (document.referrer.startsWith("android-app://")) return false;
    if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) return false;
    const bron = JSON.parse(localStorage.getItem("lk_bron") || "null");
    if (bron && typeof bron.bron === "string" && bron.bron.includes("app.leerkwartier.")) return false;
    return true;
  } catch { return false; }
}

export default function TesterOproep({ plek = "mijn" }) {
  const [toon, setToon] = useState(() => toonTesterOproep());
  useEffect(() => { if (toon) { try { track("play_kaart_toon", { plek }); } catch { /* */ } } }, [toon, plek]);
  if (!toon) return null;
  const klik = () => { try { track("play_kaart_klik", { plek }); } catch { /* */ } };
  const dicht = () => { try { localStorage.setItem(KEY_DICHT, "1"); track("play_kaart_dicht", { plek }); } catch { /* */ } setToon(false); };
  return (
    <div style={{ position: "relative", margin: "0 0 var(--space-4)", padding: "14px 16px", borderRadius: 16, background: "rgba(255,213,79,0.10)", border: "1.5px solid rgba(255,213,79,0.4)" }}>
      <button type="button" onClick={dicht} aria-label="Sluiten" style={{ position: "absolute", top: 6, right: 8, border: "none", background: "none", color: "rgba(255,255,255,0.6)", fontSize: 18, cursor: "pointer", padding: 4 }}>✕</button>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 4, paddingRight: 24 }}>
        Leerkwartier staat in de Play Store
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5, color: "rgba(255,255,255,0.85)", marginBottom: 10 }}>
        Zet de app op je telefoon, dan open je Leerkwartier met één tik. Gratis.
      </div>
      <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" onClick={klik} style={{ display: "block", padding: "11px 12px", borderRadius: 12, textDecoration: "none", textAlign: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, background: "#ffd54f", color: "#1a1a00" }}>
        Open in de Play Store
      </a>
    </div>
  );
}

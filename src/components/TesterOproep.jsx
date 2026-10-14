// 📱 Tester-oproep voor de Play Store (Mark 14 okt 2026: "kunnen we mensen in de app vragen
// tester te worden?" → "ja bouw maar"). Google eist ≥12 aangemelde testers gedurende 14 dagen
// vóór de app in de winkel mag; stand 14 okt: 9. Dit blok vraagt het alleen aan wie het kán
// helpen: een Android-telefoon (tester moet een Google-account hebben en de app installeren),
// niet al in de Play-app zelf, en niet eerder weggetikt. Twee stappen: lid worden van de
// openbare Google Groep (de testersbron in de Console) en de testlink openen.
import { useEffect, useState } from "react";
import { track } from "../utils.js";

export const TEST_URL = "https://play.google.com/apps/testing/app.leerkwartier.twa";
export const MAIL_URL = "mailto:hallo@leerkwartier.app?subject=" + encodeURIComponent("Tester Play Store") + "&body=" + encodeURIComponent("Hoi, ik wil tester worden. Mijn Gmail-adres is: \n\n(Het adres waarmee je in de Play Store bent ingelogd.)");
const KEY_DICHT = "lk_tester_oproep_dicht";

export function toonTesterOproep() {
  try {
    if (typeof navigator === "undefined") return false;
    if (!/Android/i.test(navigator.userAgent)) return false;
    if (localStorage.getItem(KEY_DICHT) === "1") return false;
    // Al in de Play-app (TWA): niets vragen.
    if (document.referrer.startsWith("android-app://")) return false;
    if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) return false;
    const bron = JSON.parse(localStorage.getItem("lk_bron") || "null");
    if (bron && typeof bron.bron === "string" && bron.bron.includes("leerkwartier.twa")) return false;
    return true;
  } catch { return false; }
}

export default function TesterOproep({ plek = "mijn" }) {
  const [toon, setToon] = useState(() => toonTesterOproep());
  useEffect(() => { if (toon) { try { track("tester_oproep_toon", { plek }); } catch { /* */ } } }, [toon, plek]);
  if (!toon) return null;
  const klik = (stap) => { try { track("tester_oproep_klik", { plek, stap }); } catch { /* */ } };
  const dicht = () => { try { localStorage.setItem(KEY_DICHT, "1"); track("tester_oproep_dicht", { plek }); } catch { /* */ } setToon(false); };
  const knop = (primair) => ({
    display: "block", padding: "11px 12px", borderRadius: 12, textDecoration: "none", textAlign: "center",
    fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800,
    background: primair ? "#ffd54f" : "rgba(255,255,255,0.06)", color: primair ? "#1a1a00" : "#fff",
    border: primair ? "none" : "1.5px solid rgba(255,255,255,0.25)",
  });
  return (
    <div style={{ position: "relative", margin: "0 0 var(--space-4)", padding: "14px 16px", borderRadius: 16, background: "rgba(255,213,79,0.10)", border: "1.5px solid rgba(255,213,79,0.4)" }}>
      <button type="button" onClick={dicht} aria-label="Oproep sluiten" style={{ position: "absolute", top: 6, right: 8, border: "none", background: "none", color: "rgba(255,255,255,0.6)", fontSize: 18, cursor: "pointer", padding: 4 }}>✕</button>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, color: "#fff", marginBottom: 4, paddingRight: 24 }}>
        Help Leerkwartier in de Play Store te komen
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, lineHeight: 1.5, color: "rgba(255,255,255,0.85)", marginBottom: 10 }}>
        Google wil eerst 12 testers zien. Jij hebt een Android-telefoon, dus jij kunt helpen. Twee minuten, twee stappen, en de app 14 dagen laten staan.
      </div>
      <div style={{ display: "grid", gap: 8 }}>
        {/* De Console kent één testersbron (mailinglijst óf Google Groep); de lijst houdt de 9 bestaande
            aanmeldingen, dus nieuwe testers komen via hun Gmail-adres op die lijst (hallo@ → Console). */}
        <a href={MAIL_URL} onClick={() => klik("mail")} style={knop(true)}>1. Stuur ons je Gmail-adres (één tik)</a>
        <a href={TEST_URL} target="_blank" rel="noopener noreferrer" onClick={() => klik("test")} style={knop(false)}>2. Daarna: tik op "Tester worden" en installeer de app</a>
      </div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.6)", marginTop: 8, lineHeight: 1.4 }}>
        Je Gmail-adres is nodig omdat Google testers daarop herkent. Wij zetten het alleen op de testerslijst; je krijgt geen nieuwsbrief.
      </div>
    </div>
  );
}

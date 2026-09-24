// 🌍 Nieuwkomer-pakket — losse pagina (Mark 24 sep 2026, na de mail van een
// nieuwkomersleerkracht: "de meeste kinderen zitten op het niveau van groep 3/4").
// Regels van Mark: los van al het andere (geen Familiepakket, geen partnercode),
// "minder maar beter passend", iedereen die de code NIEUWKOMER intikt komt hier.
// Alle teksten staan in T, zodat Engels en Arabisch er later zo bij kunnen.
import { useEffect } from "react";
import { track } from "../utils.js";
import VoorleesBlok from "../shared/ui/VoorleesBlok.jsx";

const T = {
  nl: {
    kop: "Nieuwkomer-pakket",
    sub: "Gratis. Geen account. Korte zinnen. Elke som met uitleg.",
    intro: "Dit is voor kinderen die nog Nederlands leren. Begin bij 1. Doe elke dag een beetje.",
    tegels: [
      { id: "rekenen-tot-20-nieuwkomers", soort: "pad", emoji: "🔢", titel: "Rekenen tot 20", uitleg: "Tellen, erbij en eraf. Met je vingers mag." },
      { id: "rekenen-tot-100-nieuwkomers", soort: "pad", emoji: "🧮", titel: "Rekenen tot 100", uitleg: "Tientallen en eenheden. Sprongen van 10." },
      { id: "leesladder", soort: "pagina", emoji: "📖", titel: "Lezen", uitleg: "Begin met vijf korte zinnen. De knop leest voor." },
      { id: "tafels", soort: "pagina", emoji: "✖️", titel: "Tafels", uitleg: "De tafel van 1, 2, 5 en 10. Steeds een stukje." },
    ],
    voorlees: "Overal staat een luidspreker. Druk erop. Dan hoor je de tekst.",
    juf: "Voor de leerkracht: alles op deze pagina is gratis, ook op het digibord. Zet de code NIEUWKOMER op het bord; ieder kind komt dan hier.",
    terug: "← Terug",
  },
};

export default function NieuwkomersPage({ onLeerpad, onPagina, onHome, taal = "nl" }) {
  const t = T[taal] || T.nl;
  useEffect(() => { try { track("nieuwkomers_open", { taal }); } catch { /* */ } }, [taal]);

  const open = (tegel) => {
    try { track("nieuwkomers_tegel", { id: tegel.id }); } catch { /* */ }
    if (tegel.soort === "pad") onLeerpad && onLeerpad(tegel.id);
    else onPagina && onPagina(tegel.id);
  };

  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg,#0f2a44,#173a5e 60%,#1e4a73)", color: "#fff", fontFamily: "system-ui", padding: "18px 16px 40px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <button type="button" onClick={onHome} style={{ background: "rgba(255,255,255,.12)", color: "#fff", border: "none", borderRadius: 999, padding: "8px 14px", fontWeight: 800, cursor: "pointer" }}>{t.terug}</button>
        <h1 style={{ fontSize: "clamp(28px, 7vw, 40px)", margin: "18px 0 4px", fontWeight: 900 }}>{t.kop}</h1>
        <div style={{ fontSize: 15, opacity: .85, fontWeight: 600 }}>{t.sub}</div>
        <div style={{ margin: "14px 0 18px", fontSize: "clamp(18px, 4.5vw, 22px)", lineHeight: 1.45, fontWeight: 700 }}>
          <div style={{ marginBottom: 8 }}>{t.intro}</div>
          <div style={{ fontSize: 14, fontWeight: 600 }}><VoorleesBlok tekst={`${t.kop}. ${t.sub} ${t.intro}`} /></div>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {t.tegels.map((tegel, i) => (
            <button key={tegel.id} type="button" onClick={() => open(tegel)} style={{
              display: "flex", alignItems: "center", gap: 16, textAlign: "left", width: "100%",
              background: "rgba(255,255,255,.96)", color: "#0f2a44", border: "none", borderRadius: 18, padding: "16px 18px",
              cursor: "pointer", boxShadow: "0 8px 22px rgba(0,0,0,.25)",
            }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "#0f2a44", color: "#fff", display: "grid", placeItems: "center", fontWeight: 900, fontSize: 20, flex: "none" }}>{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "clamp(20px, 5vw, 24px)", fontWeight: 900 }}>{tegel.titel}</div>
                <div style={{ fontSize: 15, fontWeight: 600, opacity: .8, marginTop: 2 }}>{tegel.uitleg}</div>
              </div>
              <div style={{ fontSize: 26, fontWeight: 900, opacity: .5 }}>›</div>
            </button>
          ))}
        </div>

        <div style={{ marginTop: 20, background: "rgba(255,255,255,.1)", borderRadius: 14, padding: "12px 14px", fontSize: 15, fontWeight: 600, lineHeight: 1.5 }}>{t.voorlees}</div>
        <div style={{ marginTop: 12, fontSize: 13.5, opacity: .75, lineHeight: 1.5 }}>{t.juf}</div>
      </div>
    </div>
  );
}

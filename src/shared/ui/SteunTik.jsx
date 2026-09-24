// 🌍 Steun-tik (Nieuwkomer-pakket, Mark 24 sep 2026): "als je op die zin klikt,
// vertaalt de zin". Nederlands blijft de hoofdtaal en staat altijd; de eigen taal
// verschijnt pas ná een tik en verdwijnt weer bij een tweede tik. Zo blijft het
// Nederlands-leren hoog, maar bij onbegrip is er meteen een sterk hulpmiddel.
// - <SteunVraag steun={...}>…</SteunVraag>  → de hele vraagzin is tikbaar.
// - <SteunOptie steun={check.steunOpties} opt={tekst}>…</SteunOptie> → antwoordknop
//   krijgt een klein taalknopje rechts (de knop zelf kiest het antwoord, dus de tik
//   zit ernaast). `steunOpties` is een map Nederlandse optie → {en,ar,uk,tr}: op tekst,
//   niet op positie, want LearnPath schudt de opties (les 24 sep: verkeerde vertaling).
// Taal uit localStorage lk_steuntaal (gekozen op /nieuwkomers); "nl" of geen
// steun-veld → niets extra's. Zonder keuze: Engels. Arabisch van rechts naar links.
import { useState } from "react";
import { track } from "../../utils.js";

export const STEUNTAAL_KEY = "lk_steuntaal";
const LABEL = { en: "EN", ar: "AR", uk: "UK", tr: "TR" };

export function leesSteuntaal() {
  try { return localStorage.getItem(STEUNTAAL_KEY) || "en"; } catch { return "en"; }
}

function steunTekst(steun, taal) {
  if (!steun || taal === "nl") return null;
  return steun[taal] || steun.en || null;
}

function Regel({ tekst, taal, klein }) {
  return (
    <div dir={taal === "ar" ? "rtl" : "ltr"} lang={taal} style={{
      marginTop: 6, padding: "6px 10px", borderRadius: 8,
      background: "rgba(255,213,79,0.14)", border: "1px solid rgba(255,213,79,0.45)",
      fontSize: klein ? 14 : 15, fontWeight: 600, lineHeight: 1.4, color: "inherit",
    }}>{tekst}</div>
  );
}

function pilStijl(open) {
  return {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    minWidth: 34, height: 24, padding: "0 8px", borderRadius: 999,
    border: "1px solid rgba(255,213,79,0.6)", background: open ? "#ffd54f" : "rgba(255,213,79,0.14)",
    color: open ? "#3a2600" : "inherit", fontSize: 12, fontWeight: 800, letterSpacing: 0.5,
    cursor: "pointer", fontFamily: "inherit", lineHeight: 1,
  };
}

// Hele vraagzin tikbaar. `children` = de Nederlandse vraag zoals de ouder hem al toont.
export function SteunVraag({ steun, altijd, children }) {
  const [open, setOpen] = useState(false);
  const taal = leesSteuntaal();
  const tekst = steunTekst(steun, taal);
  if (!tekst) return children;
  // `altijd` (check.steunAltijd): de eigen taal is hier de OPGAVE, niet hulp
  // (Woorden-pad: "welk Nederlands woord is 'masa'?") → altijd zichtbaar, geen tik.
  if (altijd) return <div>{children}<Regel tekst={tekst} taal={taal} /></div>;
  const toggle = () => {
    setOpen((o) => !o);
    if (!open) { try { track("steun_tik", { soort: "vraag", taal }); } catch { /* */ } }
  };
  return (
    <div role="button" tabIndex={0} onClick={toggle} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } }}
      aria-pressed={open} title="Tik voor jouw taal" style={{ cursor: "pointer" }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
        <span aria-hidden="true" style={{ ...pilStijl(open), marginTop: 2, flexShrink: 0 }}>{LABEL[taal] || taal.toUpperCase()}</span>
      </div>
      {open && <Regel tekst={tekst} taal={taal} />}
    </div>
  );
}

// Antwoordknop + klein taalknopje ernaast. `children` = de bestaande <button>.
export function SteunOptie({ steun, opt, children }) {
  const [open, setOpen] = useState(false);
  const taal = leesSteuntaal();
  const tekst = steunTekst(steun && typeof opt === "string" ? steun[opt] : null, taal);
  if (!tekst) return children;
  const toggle = (e) => {
    e.stopPropagation();
    setOpen((o) => !o);
    if (!open) { try { track("steun_tik", { soort: "optie", taal }); } catch { /* */ } }
  };
  return (
    <div style={{ position: "relative" }}>
      <div style={{ display: "flex", alignItems: "stretch", gap: 6 }}>
        <div style={{ flex: 1, minWidth: 0 }}>{children}</div>
        <button type="button" onClick={toggle} aria-pressed={open} aria-label="Vertaal dit antwoord" title="Tik voor jouw taal"
          style={{ ...pilStijl(open), alignSelf: "center", flexShrink: 0 }}>{LABEL[taal] || taal.toUpperCase()}</button>
      </div>
      {open && <Regel tekst={tekst} taal={taal} klein />}
    </div>
  );
}

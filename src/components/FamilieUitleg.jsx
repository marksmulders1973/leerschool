// FamilieUitleg (Mark 26 sep 2026: "Familie-pakket klikbaar maken en beschrijven
// wat er allemaal gratis bij zit"). Een gezin dat een partnercode intikt leest
// "het Familie-pakket is gratis" — zonder te weten wat dat is. Het woord wordt
// een knopje (▾) dat op dezelfde plek een kort lijstje openklapt, zodat de
// "Begin met oefenen"-knop in beeld blijft. Eén lijst voor alle plekken
// (ere-scherm na de code, welkomstblok, "Je plek is vast"), zodat ze nooit
// iets anders zeggen. Alleen wat nu écht werkt — zelfde bron als FamilieHub.
import VoorleesBlok from "../shared/ui/VoorleesBlok.jsx";
import { track } from "../utils.js";

export const FAMILIE_ONDERDELEN = [
  { emoji: "🚦", nl: ["Komt het goed?", "in één blik groen, oranje of rood per onderdeel van de Doorstroomtoets"], en: ["Ready for the test?", "green, orange or red per subject, at a glance"] },
  { emoji: "📄", nl: ["Oefenboekje op maat", "printbaar, met precies waar je kind moeite mee heeft"], en: ["Custom practice booklet", "printable, with exactly what your child finds hard"] },
  { emoji: "👪", nl: ["Kaart voor thuis", "zo leg je een onderwerp uit in gewone woorden"], en: ["Card for home", "how to explain a topic in everyday words"] },
  { emoji: "✉️", nl: ["Weekmail op maandag", "wat je kind deed en waar je deze week op let"], en: ["Monday e-mail", "what your child did and what to focus on this week"] },
  { emoji: "📅", nl: ["Weekschema voor de koelkast", "een kwartier per dag, om af te vinken"], en: ["Fridge schedule", "fifteen minutes a day, to tick off"] },
  { emoji: "📋", nl: ["Dictee met de woorden van school", "Charley leest ze voor"], en: ["Spelling test with the school words", "Charley reads them aloud"] },
  { emoji: "🐉", nl: ["AI-bijlesdocent onbeperkt", "uitleg op jouw manier, zo vaak als je wilt"], en: ["Unlimited AI tutor", "explanations your way, as often as you like"] },
  { emoji: "👨‍👩‍👧", nl: ["Tot 3 kinderen", "op één gezins-account, elk een eigen overzicht"], en: ["Up to 3 children", "on one family account, each with their own overview"] },
  { emoji: "🏅", nl: ["Printbaar diploma", "bij elk afgerond onderwerp"], en: ["Printable certificate", "for every finished topic"] },
];

// Het aantikbare woord zelf. Staat midden in een zin, dus inline en in de
// tekstkleur, onderstreept met een pijltje — herkenbaar als "hier kun je op tikken".
export function FamilieKnop({ open, onToggle, plek, kleur = "inherit", children = "Familie-pakket" }) {
  return (
    <button
      type="button"
      aria-expanded={open}
      onClick={() => {
        if (!open) { try { track("familie_uitleg_open", { plek }); } catch { /* meting mag nooit breken */ } }
        onToggle();
      }}
      style={{
        border: "none", background: "none", padding: 0, margin: 0, cursor: "pointer",
        font: "inherit", fontWeight: 800, color: kleur,
        textDecoration: "underline", textDecorationStyle: "dotted", textUnderlineOffset: 3,
      }}
    >
      {children} {open ? "▴" : "▾"}
    </button>
  );
}

// Het uitgeklapte lijstje. `donker` = op een donkere achtergrond (app, Ooievaarspas).
// `voorNavigeren` wordt aangeroepen vóór "Alles bekijken" (bv. ere-scherm als gezien markeren).
export function FamilieLijst({ open, en = false, donker = false, voorNavigeren }) {
  if (!open) return null;
  const tekstKleur = donker ? "rgba(255,255,255,0.9)" : "#3a4658";
  const kop = en ? "This is what the Family package includes:" : "Dit zit er in het Familie-pakket:";
  const voorlees = kop + " " + FAMILIE_ONDERDELEN.map((o) => (en ? o.en : o.nl).join(": ")).join(". ") + ".";
  return (
    <div
      style={{
        margin: "10px 0 2px", padding: "12px 14px", borderRadius: 12, textAlign: "left",
        background: donker ? "rgba(255,213,79,0.10)" : "#fffaf0",
        border: `1.5px solid ${donker ? "rgba(255,213,79,0.45)" : "#f1d58a"}`,
      }}
    >
      <VoorleesBlok tekst={voorlees} accent="#ffb300" licht={!donker}>
        <div style={{ font: "800 14px/1.4 system-ui", color: donker ? "#ffe082" : "#8a5a00", marginBottom: 8 }}>{kop}</div>
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gap: 7 }}>
          {FAMILIE_ONDERDELEN.map((o) => {
            const [titel, uitleg] = en ? o.en : o.nl;
            return (
              <li key={titel} style={{ display: "flex", gap: 9, font: "500 14px/1.45 system-ui", color: tekstKleur }}>
                <span aria-hidden="true" style={{ flexShrink: 0 }}>{o.emoji}</span>
                <span><strong>{titel}</strong>: {uitleg}</span>
              </li>
            );
          })}
        </ul>
      </VoorleesBlok>
      <a
        href="/familie"
        onClick={() => { try { track("familie_uitleg_alles", {}); voorNavigeren?.(); } catch { /* */ } }}
        style={{ display: "inline-block", marginTop: 10, font: "800 13.5px system-ui", color: donker ? "#ffd54f" : "#a86b00" }}
      >
        {en ? "See everything →" : "Alles bekijken →"}
      </a>
    </div>
  );
}

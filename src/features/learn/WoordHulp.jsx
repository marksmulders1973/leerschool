// 🔤 WoordHulp (Mark 11 jul, kernfusie-idee): moeilijke woorden in de vraag/
// antwoordopties zijn tikbaar. Tik → hulp-kaartje onderin met:
//   1. de korte uitleg uit uitlegPad.woorden (gratis, geen AI-call),
//   2. "Vraag het aan je maatje" → buddy-tutor met de vraag vooringevuld
//      (kind drukt zelf op versturen — bewuste keuze, scheelt AI-kosten),
//   3. als er een hele les over het woord bestaat: "Volg de les" (pad-match
//      via het manifest — kernfusie → ruimte-pad, mooi meegenomen).
// Alleen bij LEREN (leerpaden/oefenen), nooit in toets-modus — zelfde grens
// als de buddy-tutor.
import { useMemo } from "react";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import { track } from "../../utils.js";

// Woord → leerpad. Alleen zelfverzekerde matches: het woord staat letterlijk
// in de titel óf in de triggerKeywords van een pad. Korte woordjes (<4) slaan
// we over — "som" zou anders half de app matchen.
export function vindLesVoorWoord(woord, huidigPathId = null) {
  const w = String(woord || "").trim().toLowerCase();
  if (w.length < 4) return null;
  let fallback = null;
  for (const p of pathManifest) {
    if (p.id === huidigPathId) continue; // niet naar de les wijzen waar je al bent
    const titel = String(p.title || "").toLowerCase();
    if (titel.includes(w)) return { id: p.id, title: p.title, emoji: p.emoji || "" };
    if (!fallback && p.triggerKeywords?.some((kw) => String(kw).toLowerCase() === w)) {
      fallback = { id: p.id, title: p.title, emoji: p.emoji || "" };
    }
  }
  return fallback;
}

// Tekst renderen waarin de moeilijke woorden (uit uitlegPad.woorden) tikbaar
// zijn. Werkt op platte tekst (antwoordopties). Matching: heel woord,
// hoofdletter-ongevoelig. stopPropagation zodat een tik op het woord niet
// meteen het antwoord kiest.
export function TekstMetWoordHulp({ tekst, woorden, onWoord }) {
  const delen = useMemo(() => {
    const t = String(tekst ?? "");
    const lijst = (woorden || []).filter((w) => w?.woord && String(w.woord).trim().length >= 3);
    if (!t || lijst.length === 0 || typeof onWoord !== "function") return null;
    try {
      const escaped = lijst
        .map((w) => String(w.woord).trim())
        .sort((a, b) => b.length - a.length) // langste eerst: "kernfusie" vóór "kern"
        .map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
      // Heel-woord-grens die ook bij accenten werkt (é, ë): geen letter/cijfer
      // direct vóór of ná de match.
      const re = new RegExp(`(?<![\\p{L}\\p{N}])(${escaped.join("|")})(?![\\p{L}\\p{N}])`, "giu");
      const parts = t.split(re);
      if (parts.length === 1) return null;
      const zoek = new Map(lijst.map((w) => [String(w.woord).trim().toLowerCase(), w]));
      return parts.map((deel, i) => {
        const item = zoek.get(String(deel).toLowerCase());
        if (!item) return deel;
        return (
          <span
            key={i}
            role="button"
            tabIndex={-1}
            aria-label={`Wat betekent ${deel}? Tik voor uitleg`}
            onClick={(e) => { e.stopPropagation(); e.preventDefault(); onWoord(item); }}
            style={{
              textDecoration: "underline dotted",
              textDecorationColor: "#5db3ff",
              textUnderlineOffset: 3,
              color: "inherit",
              cursor: "help",
            }}
          >
            {deel}
          </span>
        );
      });
    } catch {
      // Oudere browser zonder lookbehind-regex → gewoon platte tekst tonen.
      return null;
    }
  }, [tekst, woorden, onWoord]);
  return delen ?? <>{String(tekst ?? "")}</>;
}

// Het hulp-kaartje onderin het scherm. Copy zonder dev-jargon: "les", niet
// "leerpad".
export default function WoordHulpSheet({ item, les, buddy, onLes, onBuddy, onClose }) {
  if (!item) return null;
  return (
    <div
      onClick={onClose}
      style={{ position: "fixed", inset: 0, background: "rgba(5,10,25,0.55)", zIndex: 1200, display: "flex", alignItems: "flex-end" }}
    >
      <div
        role="dialog"
        aria-label={`Uitleg van het woord ${item.woord}`}
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%", maxWidth: 560, margin: "0 auto",
          background: "#16223a", borderRadius: "18px 18px 0 0",
          border: "1px solid rgba(93,179,255,0.35)", borderBottom: 0,
          padding: "18px 18px 22px", animation: "slideUp 0.22s ease",
          boxShadow: "0 -8px 30px rgba(0,0,0,0.45)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
          <span aria-hidden="true" style={{ fontSize: 18 }}>🔤</span>
          <strong style={{ fontSize: 17, color: "var(--color-text-strong, #fff)", flex: 1 }}>{item.woord}</strong>
          <button
            onClick={onClose}
            aria-label="Sluit woord-uitleg"
            style={{ background: "rgba(255,255,255,0.08)", border: 0, borderRadius: 8, color: "var(--color-text, #cdd6e5)", padding: "6px 12px", cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 13 }}
          >
            sluit
          </button>
        </div>
        <p style={{ margin: "0 0 14px", fontSize: 14.5, lineHeight: 1.6, color: "var(--color-text, #cdd6e5)" }}>
          {item.uitleg}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {les && typeof onLes === "function" && (
            <button
              onClick={() => { track("woordhulp_les", { woord: item.woord, les: les.id }); onLes(les); }}
              style={{
                padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(0,200,83,0.5)",
                background: "rgba(0,200,83,0.12)", color: "#69f0ae", fontWeight: 800, fontSize: 14,
                fontFamily: "var(--font-display)", cursor: "pointer", textAlign: "left",
              }}
            >
              📚 Er is een hele les over dit! → {les.emoji ? `${les.emoji} ` : ""}{les.title}
            </button>
          )}
          {typeof onBuddy === "function" && (
            <button
              onClick={() => { track("woordhulp_buddy", { woord: item.woord }); onBuddy(item); }}
              style={{
                padding: "12px 14px", borderRadius: 12, border: "1px solid rgba(93,179,255,0.45)",
                background: "rgba(93,179,255,0.10)", color: "#5db3ff", fontWeight: 800, fontSize: 14,
                fontFamily: "var(--font-display)", cursor: "pointer", textAlign: "left",
              }}
            >
              {buddy?.emoji || "💬"} Vraag {buddy?.naam || "je maatje"} er meer over
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// 🧒 "Jouw groep 5" — de eenvoudige bovenkant van het kinderscherm (Mark 26 okt 2026:
// "een kind zit in groep 5, daar horen vakken bij. dat moet hij direct zien, en beginnen,
// een rapport krijgen en dan werken aan verbeterpunten … een kind hoeft niet alles te zien").
// Klikbaar voorbeeld goedgekeurd ("ja heel veel beter"): docs/ontwerp/groep5-voorbeeld.html.
// Mark 26 okt (vervolg): "groep 5 als dropdown, en bij de vakken 'Rekenen · groep 5' —
// echt duidelijk dat dat voor dat kind, die groep is."
//
// Drie onderdelen, in deze volgorde op Mijn pagina: de groep-dropdown in de kop,
// de vak-tegels mét rapportcijfer (de tegels zíjn het rapport) en "Werk aan"
// (hooguit twee verbeterpunten). De Begin-knop blijft de bestaande vandaag-motor.

import { track } from "../../utils.js";
import { rapportRijen, cijferKleur, MIN_VRAGEN, VAST_VRAGEN } from "./Rapport.jsx";

const HAND = "'Segoe Print', 'Bradley Hand', 'Comic Neue', cursive";
const toonCijfer = (c) => (Number.isInteger(c) ? String(c) : `${Math.floor(c)}½`);

/** Groep kiezen als dropdown (basisschool). De middelbare school houdt de eigen kiezer. */
export function GroepDropdown({ nr, onKies }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, color: "var(--color-text-muted, #8899aa)" }}>
      <span className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>Je groep</span>
      <select
        value={nr || ""}
        onChange={(e) => { const n = Number(e.target.value); if (n) { try { track("mijn_groep_dropdown", { van: nr, naar: n }); } catch { /* */ } onKies(n); } }}
        aria-label="Je groep"
        style={{
          appearance: "auto", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.22)", borderRadius: 999,
          padding: "5px 10px", color: "var(--color-text-strong, #fff)", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer",
        }}
      >
        {!nr && <option value="">Kies je groep</option>}
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => <option key={n} value={n}>groep {n}</option>)}
      </select>
    </label>
  );
}

/**
 * De vakken van deze groep als tegels met rapportcijfer.
 * vakken: dezelfde lijst als het rapport ([{ subj, titel, attempts, correct, recentAantal, recentGoed }]).
 */
export function VakTegels({ vakken, niveauLabel, vakMeta, onVak, startsetStand = {}, groep = null }) {
  const rijen = rapportRijen(vakken);
  if (rijen.length === 0) return null;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
      {rijen.map((v) => {
        const meta = vakMeta(v.subj);
        const vast = v.cijfer !== null && (v.attempts || 0) >= VAST_VRAGEN;
        const nog = MIN_VRAGEN - (v.attempts || 0);
        // 🎯 Startset (26 okt 2026): zolang de eerste 20 vragen van dit vak niet af zijn, zegt de tegel dat.
        const ss = groep ? startsetStand[`${groep}|${v.subj === "wiskunde" ? "rekenen" : v.subj}`] : null;
        const ssOpen = ss && !ss.klaar;
        return (
          <button key={v.subj} type="button"
            onClick={() => { try { track("mijn_vaktegel", { vak: v.subj, cijfer: v.cijfer }); } catch { /* */ } onVak(v.subj); }}
            title={`Oefen ${v.titel}`}
            style={{
              display: "flex", flexDirection: "column", gap: 5, minHeight: 96, padding: "12px 12px 10px", textAlign: "left", cursor: "pointer",
              borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "var(--color-bg-elevated, #1A2541)", color: "var(--color-text)",
              fontFamily: "var(--font-body)",
            }}>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 600, color: "var(--color-text-strong, #fff)", lineHeight: 1.2 }}>
              <span aria-hidden="true">{meta.emoji} </span>{v.titel}
            </span>
            <span style={{ fontSize: 11.5, fontWeight: 700, color: "var(--color-text-subtle, #828FAC)" }}>{niveauLabel}</span>
            {v.cijfer !== null ? (
              <span style={{ fontFamily: HAND, fontSize: 30, lineHeight: 1, fontWeight: 700, color: cijferKleur(v.cijfer, "scherm"), opacity: vast ? 1 : 0.8, fontVariantNumeric: "tabular-nums" }}>
                {toonCijfer(v.cijfer)}
              </span>
            ) : (
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--color-text-subtle, #828FAC)" }}>nog geen cijfer</span>
            )}
            <span style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "auto", fontSize: 11.5, fontWeight: 700, color: "var(--color-text-subtle, #828FAC)" }}>
              {ssOpen ? (
                <span style={{ color: "#69f0ae" }}>{ss.gedaan > 0 ? `startset: ${ss.gedaan} van ${ss.totaal} →` : `Begin: de eerste ${ss.totaal} vragen →`}</span>
              ) : v.cijfer !== null ? (
                <>
                  <span aria-hidden="true" style={{ flex: 1, height: 5, borderRadius: 3, background: "rgba(255,255,255,0.1)", overflow: "hidden" }}>
                    <span style={{ display: "block", height: "100%", width: `${Math.min(100, Math.round(((v.attempts || 0) / VAST_VRAGEN) * 100))}%`, background: "#00c853" }} />
                  </span>
                  <span>{vast ? "vast" : `${v.attempts}/${VAST_VRAGEN}`}</span>
                </>
              ) : (
                <span style={{ color: "#69f0ae" }}>{(v.attempts || 0) > 0 ? `nog ${nog} ${nog === 1 ? "vraag" : "vragen"} tot je cijfer` : "Begin →"}</span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}

/** Hooguit twee verbeterpunten: [{ emoji, titel, sub, doe }]. */
export function WerkAan({ punten }) {
  if (!punten || punten.length === 0) return null;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {punten.slice(0, 2).map((p, i) => (
        <button key={i} type="button" onClick={() => { try { track("mijn_werk_aan", { soort: p.soort, wat: p.id }); } catch { /* */ } p.doe(); }}
          style={{
            display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left", cursor: "pointer", padding: "12px 14px",
            borderRadius: 14, border: "1px solid var(--color-border, #2D3F5F)", borderLeft: "4px solid #ffb74d", background: "var(--color-bg-surface, #131C33)", color: "var(--color-text)", fontFamily: "var(--font-body)",
          }}>
          <span aria-hidden="true" style={{ fontSize: 22, flexShrink: 0 }}>{p.emoji}</span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span style={{ display: "block", fontWeight: 800, color: "var(--color-text-strong, #fff)", fontSize: 14.5, lineHeight: 1.25 }}>{p.titel}</span>
            <span style={{ display: "block", fontSize: 12.5, color: "var(--color-text-muted, #8899aa)" }}>{p.sub}</span>
          </span>
          <span aria-hidden="true" style={{ color: "#ffb74d", fontWeight: 900, fontSize: 20 }}>›</span>
        </button>
      ))}
    </div>
  );
}

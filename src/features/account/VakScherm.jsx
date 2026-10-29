// 🧒 Vakscherm (ontwerp-stap 3 van docs/PLAN-EENVOUD-KIND.md, 27 okt 2026): tik op een
// vak-tegel → één scherm "Rekenen · groep 5" met het grote cijfer, één knop "Oefen nu"
// en alleen de onderwerpen van díe groep. Geen Leren-hub meer voor het kind (die toont
// ook paden van andere groepen). Puur presentatie: alle keuzes komen als props binnen.
//
// "Oefen nu" = dezelfde ladder als de tegel-tik (Nu op school → startset → ladder van dit
// vak), dus het kind komt altijd in een kwartier van dit vak, nooit in een lijst.

import { track } from "../../utils.js";
import { cijferKleur, MIN_VRAGEN, VAST_VRAGEN } from "./Rapport.jsx";
import { startsetOmvang } from "../learn/startsetsData.js";

const HAND = "'Segoe Print', 'Bradley Hand', 'Comic Neue', cursive";
const toonCijfer = (c) => (Number.isInteger(c) ? String(c) : `${Math.floor(c)}½`);

/**
 * @param {object} p
 * @param {string} p.vak           vak-id (rekenen, taal, …)
 * @param {object} p.meta          { titel, emoji } uit vakMeta
 * @param {number|null} p.groep    1-8
 * @param {string} p.niveauLabel   "groep 5"
 * @param {object|null} p.rij      rapport-rij { cijfer, attempts, correct } of null
 * @param {object|null} p.startset { gedaan, totaal, klaar } of null
 * @param {object|null} p.school   Nu-op-school-keuze { label } of null
 * @param {Array} p.onderwerpen    [{ id, label, emoji, pathId }] — alleen deze groep
 * @param {Function} p.onOefenNu
 * @param {Function} p.onPad       (pathId) → leerpad openen
 * @param {Function} p.onTerug
 */
export default function VakScherm({ vak, meta, groep, niveauLabel, rij, startset, school, onderwerpen, onOefenNu, onPad, onTerug }) {
  const cijfer = rij && rij.cijfer !== null && rij.cijfer !== undefined ? rij.cijfer : null;
  const attempts = (rij && rij.attempts) || 0;
  const vast = cijfer !== null && attempts >= VAST_VRAGEN;
  const nog = Math.max(0, MIN_VRAGEN - attempts);
  const ssOpen = startset && !startset.klaar;
  // Wat de knop gaat doen, in gewone woorden (zelfde volgorde als naarVak in MijnPagina).
  const knopSub = school?.label
    ? `eerst wat jullie nu op school doen: ${school.label}`
    : ssOpen
      ? (startset.gedaan > 0 ? `verder: nog ${Math.max(0, startset.totaal - startset.gedaan)} van ${startsetOmvang(startset.totaal)}` : startsetOmvang(startset.totaal))
      : "een kwartier met vragen van jouw groep";

  return (
    <div data-vakscherm style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <button type="button" onClick={onTerug}
        style={{ alignSelf: "flex-start", background: "none", border: "none", cursor: "pointer", color: "var(--color-text-muted, #8899aa)", fontFamily: "var(--font-body)", fontSize: 13.5, fontWeight: 700, padding: "4px 0" }}>
        ← je vakken
      </button>

      {/* Kop + cijfer, als één tegel-op-groot. */}
      <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px 16px 14px", borderRadius: 18, border: "1px solid rgba(255,255,255,0.08)", background: "var(--color-bg-elevated, #1A2541)" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h2 style={{ margin: 0, fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 800, color: "var(--color-text-strong, #fff)", lineHeight: 1.15 }}>
            <span aria-hidden="true">{meta.emoji} </span>{meta.titel}{niveauLabel ? <span style={{ color: "var(--color-text-subtle, #828FAC)", fontWeight: 600 }}> · {niveauLabel}</span> : null}
          </h2>
          <div style={{ marginTop: 6, fontSize: 12.5, fontWeight: 700, color: "var(--color-text-subtle, #828FAC)", fontFamily: "var(--font-body)" }}>
            {cijfer !== null
              ? (vast ? `vast cijfer · laatste ${VAST_VRAGEN} vragen` : `voorlopig cijfer · ${attempts} van ${VAST_VRAGEN} vragen`)
              : (attempts > 0 ? `nog ${nog} ${nog === 1 ? "vraag" : "vragen"} tot je eerste cijfer` : `na ${MIN_VRAGEN} vragen krijg je een cijfer`)}
          </div>
        </div>
        <div aria-label={cijfer !== null ? `cijfer ${toonCijfer(cijfer)}` : "nog geen cijfer"}
          style={{ fontFamily: HAND, fontSize: 52, lineHeight: 1, fontWeight: 700, color: cijferKleur(cijfer, "scherm"), opacity: cijfer !== null && !vast ? 0.85 : 1, fontVariantNumeric: "tabular-nums", flexShrink: 0 }}>
          {cijfer !== null ? toonCijfer(cijfer) : "–"}
        </div>
      </div>

      {/* Eén knop. */}
      <button type="button"
        onClick={() => { try { track("mijn_vakscherm_oefen", { vak, groep, cijfer, school: !!school, startset: !!ssOpen }); } catch { /* */ } onOefenNu(); }}
        style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 3, width: "100%", padding: "15px 16px", borderRadius: 999, border: "none", cursor: "pointer",
          background: "linear-gradient(135deg, #00c853, #00e676)", color: "#0a1525", fontFamily: "var(--font-display)", boxShadow: "0 6px 22px rgba(0,200,83,0.3)",
        }}>
        <span style={{ fontSize: 18, fontWeight: 800 }}>Oefen nu →</span>
        <span style={{ fontSize: 12.5, fontWeight: 700, opacity: 0.8, fontFamily: "var(--font-body)" }}>{knopSub}</span>
      </button>

      {/* Alleen de onderwerpen van deze groep. */}
      {onderwerpen.length > 0 && (
        <div>
          <div style={{ fontSize: 11.5, fontWeight: 800, letterSpacing: 0.6, textTransform: "uppercase", color: "var(--color-text-subtle, #828FAC)", margin: "4px 0 8px", fontFamily: "var(--font-body)" }}>
            Onderwerpen van {niveauLabel || "jouw groep"}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {onderwerpen.map((o) => (
              <button key={o.id} type="button"
                onClick={() => { try { track("mijn_vakscherm_onderwerp", { vak, groep, pad: o.pathId }); } catch { /* */ } onPad(o.pathId, o); }}
                style={{
                  display: "flex", alignItems: "center", gap: 10, width: "100%", textAlign: "left", cursor: "pointer", padding: "11px 12px",
                  borderRadius: 12, border: "1px solid var(--color-border, #2D3F5F)", background: "var(--color-bg-surface, #131C33)", color: "var(--color-text)", fontFamily: "var(--font-body)",
                }}>
                <span aria-hidden="true" style={{ fontSize: 18, flexShrink: 0 }}>{o.emoji}</span>
                <span style={{ flex: 1, minWidth: 0, fontSize: 14, fontWeight: 700, color: "var(--color-text-strong, #fff)" }}>{o.label}</span>
                <span aria-hidden="true" style={{ color: "var(--color-text-subtle, #828FAC)", fontWeight: 900 }}>›</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {onderwerpen.length === 0 && (
        <div style={{ fontSize: 13, color: "var(--color-text-muted, #8899aa)", fontFamily: "var(--font-body)" }}>
          Voor {niveauLabel || "jouw groep"} zijn er bij dit vak nog geen losse onderwerpen. Oefen nu werkt wel.
        </div>
      )}
    </div>
  );
}

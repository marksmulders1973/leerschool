// ══════════════════════════════════════════════════════════════════════
// Koelkast-weekschema — Familie-feature 5 (Mark 1 aug 2026), bèta-live.
//
// Een printbare koelkast-poster: een afvinkbaar weekschema van "een kwartier
// per dag" richting de Doorstroomtoets, opgebouwd rond de kern-onderwerpen. De
// ouder of verzorger kiest een focus (gemengd / rekenen / taal / lezen); het
// schema verdeelt de onderwerpen over de week. Kosten €0: window.print, geen
// server, geen AI. Zie memory project_studiebol_familie_tier_features (feat. 5).
//
// v1 (~80%): curatie-gebaseerd (vaste kern-onderwerpen per vak, focus weegt de
// dagen). De volledige "automatisch uit de zwakke plekken"-variant (echte
// mastery uit paraatheid/adaptiveStore) is de resterende ~20% → later / Fable.
// ══════════════════════════════════════════════════════════════════════
import { useState, useMemo } from "react";
import PrintKnoppen from "../../shared/ui/PrintKnoppen.jsx";
import { FamilieMeer } from "./familieUi.jsx";

const VAKKEN = {
  rekenen: { emoji: "🔢", label: "Rekenen", onderwerpen: ["Breuken", "Procenten", "Verhoudingen", "Meten & schaal", "Kommagetallen", "Tafels"] },
  taal: { emoji: "✍️", label: "Taal", onderwerpen: ["Werkwoordspelling", "Spelling ei/ij", "Woordenschat", "Leestekens", "Zinsontleding"] },
  lezen: { emoji: "📖", label: "Begrijpend lezen", onderwerpen: ["Hoofdgedachte", "Verwijswoorden", "Tekstdoel", "Oorzaak & gevolg", "Feit of mening"] },
};

const DAGEN = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

// Welke vakken op welke dag (index 0-5); dag 7 = vrije keuze/rust.
const PATRONEN = {
  gemengd: ["rekenen", "lezen", "taal", "rekenen", "lezen", "taal"],
  rekenen: ["rekenen", "rekenen", "lezen", "rekenen", "taal", "rekenen"],
  taal: ["taal", "taal", "lezen", "taal", "rekenen", "taal"],
  lezen: ["lezen", "lezen", "taal", "lezen", "rekenen", "lezen"],
};

const FOCUS_OPTIES = [
  { id: "gemengd", label: "⚖️ Gemengd" },
  { id: "rekenen", label: "🔢 Meer rekenen" },
  { id: "taal", label: "✍️ Meer taal" },
  { id: "lezen", label: "📖 Meer lezen" },
];

function bouwWeek(focus) {
  const patroon = PATRONEN[focus] || PATRONEN.gemengd;
  // Per vak een teller zodat we door de onderwerpen heen roteren (geen dubbel).
  const tellers = { rekenen: 0, taal: 0, lezen: 0 };
  const dagen = patroon.map((vakKey, i) => {
    const vak = VAKKEN[vakKey];
    const ond = vak.onderwerpen[tellers[vakKey] % vak.onderwerpen.length];
    tellers[vakKey]++;
    return { dag: DAGEN[i], emoji: vak.emoji, vak: vak.label, onderwerp: ond };
  });
  // Zondag = rust/vrije keuze.
  dagen.push({ dag: DAGEN[6], emoji: "🌟", vak: "Vrije keuze", onderwerp: "Herhaal je lastigste onderwerp (of rust!)" });
  return dagen;
}

export default function WeekschemaPagina({ setPage }) {
  const [naam, setNaam] = useState("");
  const [focus, setFocus] = useState("gemengd");
  const week = useMemo(() => bouwWeek(focus), [focus]);
  const naamNet = (naam || "").trim();

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg, #0b1020)", color: "var(--color-text, #e8edf5)" }}>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .week-print, .week-print * { visibility: visible !important; }
          .week-print { position: absolute; left: 0; top: 0; width: 100%; }
          .week-noprint { display: none !important; }
          @page { size: A4 portrait; margin: 12mm; }
        }
      `}</style>

      {/* ── Bediening (niet mee-printen) ── */}
      <div className="week-noprint" style={{ maxWidth: 760, margin: "0 auto", padding: "18px 16px 8px" }}>
        <button onClick={() => setPage && setPage("familie")} style={linkBtn}>← terug</button>
        <div style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 900, margin: 0 }}>
            📅 Koelkast-weekschema
          </h1>
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>
            bèta
          </span>
        </div>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.55, marginTop: 6 }}>
          Een afvinkbaar weekschema van een kwartier per dag richting de Doorstroomtoets. Print het en hang het op de
          koelkast — elke dag één onderwerp afvinken.
        </p>

        {/* Naam */}
        <div style={{ marginTop: 12 }}>
          <label style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)" }}>
            Naam van je kind (mag leeg):{" "}
            <input
              value={naam}
              onChange={(e) => setNaam(e.target.value.slice(0, 30))}
              placeholder="bijv. Sophie"
              style={inputStyle}
            />
          </label>
        </div>

        {/* Focus */}
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", margin: "12px 0 6px" }}>Waar ligt de nadruk?</div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {FOCUS_OPTIES.map((f) => {
            const aan = f.id === focus;
            return (
              <button key={f.id} onClick={() => setFocus(f.id)}
                style={{ padding: "9px 14px", borderRadius: 10, cursor: "pointer", fontSize: 14, fontWeight: 700,
                  border: aan ? "1.5px solid #ffd54f" : "1.5px solid rgba(255,255,255,0.18)",
                  background: aan ? "rgba(255,213,79,0.14)" : "rgba(255,255,255,0.05)",
                  color: aan ? "#ffd54f" : "var(--color-text, #e8edf5)" }}>
                {f.label}
              </button>
            );
          })}
        </div>

        <div style={{ marginTop: 16 }}>
          <PrintKnoppen trackPrefix="weekschema" trackProps={{ focus }} />
        </div>
        <div style={{ height: 1, background: "rgba(255,255,255,0.08)", margin: "18px 0" }} />
        <div style={{ fontSize: 12, color: "var(--color-text-muted, #8899aa)" }}>
          👇 Voorbeeld van de poster. Klik op <b>Printen</b> of <b>Opslaan als PDF</b>.
        </div>
      </div>

      {/* ── De printbare poster ── */}
      <div className="week-print" style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px 40px" }}>
        <div style={{ background: "#fffdf6", color: "#1a1206", border: "2px solid #c9a227", borderRadius: 12, padding: "26px 28px", boxShadow: "0 3px 14px rgba(0,0,0,0.22)" }}>
          <div style={{ fontSize: 12, letterSpacing: 2, fontWeight: 700, color: "#c8102e" }}>WEEKSCHEMA · LEERKWARTIER</div>
          <h2 style={{ fontSize: 26, fontWeight: 900, margin: "4px 0 2px", color: "#111" }}>
            📅 Weekschema{naamNet ? ` voor ${naamNet}` : ""}
          </h2>
          <div style={{ fontSize: 14, color: "#6a5a3a", marginBottom: 18 }}>Een kwartier per dag richting de Doorstroomtoets — vink af wat je deed.</div>

          {week.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 4px", borderBottom: i < week.length - 1 ? "1px solid #eee" : "none" }}>
              <div style={{ width: 26, height: 26, border: "2px solid #c9a227", borderRadius: 6, flexShrink: 0 }} />
              <div style={{ width: 92, fontWeight: 800, fontSize: 14.5, color: "#c8102e", flexShrink: 0 }}>{d.dag}</div>
              <div style={{ flex: 1, fontSize: 15, color: "#1a1206" }}>
                <span style={{ marginRight: 6 }}>{d.emoji}</span>
                <b>{d.vak}</b> — {d.onderwerp}
              </div>
              <div style={{ fontSize: 12.5, color: "#8a7a55", whiteSpace: "nowrap", flexShrink: 0 }}>± 15 min</div>
            </div>
          ))}

          <div style={{ marginTop: 18, fontSize: 12.5, color: "#6a5a3a", background: "#faf7ee", border: "1px solid #ece3c8", borderRadius: 8, padding: "10px 12px" }}>
            💡 Tip: oefen elk onderwerp in de app onder <b>Leren</b>. Zeven dagen vol? Trots-moment — begin gewoon opnieuw.
          </div>
          <div style={{ marginTop: 12, fontSize: 11.5, color: "#a08a55", textAlign: "center" }}>
            Gemaakt met Leerkwartier · leerkwartier.app — een kwartier per dag, écht begrijpen wat je leert
          </div>
        </div>
      </div>
      <FamilieMeer setPage={setPage} huidig="weekschema" />
    </div>
  );
}

const linkBtn = { background: "none", border: "none", color: "var(--color-accent, #42a5f5)", cursor: "pointer", fontSize: 14, fontWeight: 700, padding: 0 };
const inputStyle = { marginLeft: 6, padding: "7px 10px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.2)", background: "rgba(255,255,255,0.06)", color: "inherit", fontSize: 14 };

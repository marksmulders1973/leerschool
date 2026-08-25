// ══════════════════════════════════════════════════════════════════════
// Koelkast-weekschema — Familie-feature 5 (Mark 1 aug 2026), bèta-live.
//
// Een printbare koelkast-poster: een afvinkbaar weekschema van "een kwartier
// per dag" richting de Doorstroomtoets. Kosten €0: window.print, geen server,
// geen AI. Zie memory project_studiebol_familie_tier_features (feat. 5).
//
// v2 (Mark 25 aug 2026): OP MAAT uit de oefen-geschiedenis. Zodra er genoeg
// geoefend is (mastery-records via dezelfde bron als het oefenboekje) bouwt het
// schema zichzelf: het lastigste onderwerp krijgt twee dagen (ma + do, herhaling
// na een paar dagen beklijft), de rest vult de week af, vrijdag sluit af met
// iets dat al goed gaat. BEWUST GEEN PERCENTAGES op de poster (Mark: "berg de
// percentages maar") — die hangen op de koelkast waar het kind ze ziet; in
// plaats daarvan vriendelijke chips: 🌱 groeien · 🔁 herhalen · ⭐ bijhouden.
// Percentages blijven wél zichtbaar in de Paraatheidsmeter (ouder-detail).
// Zonder genoeg data: het v1-curatie-schema + tip om de Kwartiercheck te doen.
// ══════════════════════════════════════════════════════════════════════
import { useState, useMemo, useEffect } from "react";
import PrintKnoppen from "../../shared/ui/PrintKnoppen.jsx";
import { FamilieMeer, FamiliePill } from "./familieUi.jsx";
import { loadMasteryForPlayer } from "../mastery/mastery.js";
import { kiesZwakkeConcepten } from "../oefenboekje/opMaat.js";
import { track } from "../../utils.js";

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

// Vriendelijke chips i.p.v. percentages (kind ziet de koelkast!).
const CHIPS = {
  groei: { emoji: "🌱", tekst: "hier valt de meeste winst", kleur: "#0a7d3c" },
  herhaal: { emoji: "🔁", tekst: "even herhalen", kleur: "#8a6d1a" },
  top: { emoji: "⭐", tekst: "bijhouden — gaat al goed", kleur: "#1e4fa3" },
};
function chipVoor(pct) {
  if (pct < 60) return CHIPS.groei;
  if (pct < 85) return CHIPS.herhaal;
  return CHIPS.top;
}

// Vak-emoji uit het subject van een leerpad; fallback = boek.
const SUBJECT_EMOJI = {
  rekenen: "🔢", wiskunde: "🔢", taal: "✍️", nederlands: "✍️", spelling: "✍️",
  lezen: "📖", "begrijpend-lezen": "📖", begrijpendlezen: "📖",
  studievaardigheden: "🧭", wereld: "🌍", engels: "🇬🇧",
};
function vakEmoji(subject) {
  const s = String(subject || "").toLowerCase();
  for (const [k, e] of Object.entries(SUBJECT_EMOJI)) if (s.includes(k)) return e;
  return "📘";
}

// Huidige speler-naam uit localStorage (zelfde bron als Paraatheidsmeter/oefenboekje).
function huidigeSpelerNaam() {
  try {
    const u = JSON.parse(localStorage.getItem("ls_user") || "{}");
    return (u.name || "").trim();
  } catch {
    return "";
  }
}

function korteTitel(t) {
  return String(t || "").replace(/^Doorstroomtoets\s*/i, "").replace(/\s*—.*$/, "").slice(0, 40) || t;
}

// v1: het algemene curatie-schema (blijft de fallback + de "liever algemeen"-keuze).
function bouwWeekAlgemeen(focus) {
  const patroon = PATRONEN[focus] || PATRONEN.gemengd;
  const tellers = { rekenen: 0, taal: 0, lezen: 0 };
  const dagen = patroon.map((vakKey, i) => {
    const vak = VAKKEN[vakKey];
    const ond = vak.onderwerpen[tellers[vakKey] % vak.onderwerpen.length];
    tellers[vakKey]++;
    return { dag: DAGEN[i], emoji: vak.emoji, vak: vak.label, onderwerp: ond, chip: null };
  });
  dagen.push({ dag: DAGEN[6], emoji: "🌟", vak: "Vrije keuze", onderwerp: "Herhaal je lastigste onderwerp (of rust!)", chip: null });
  return dagen;
}

// v2: op maat uit mastery. Concepten komen zwakste-eerst binnen (incl. pct,
// alleen intern gebruikt voor de chip-keuze — nooit op de poster).
function bouwWeekOpMaat(concepten) {
  const c = concepten.map((z) => ({
    emoji: vakEmoji(z.subject),
    onderwerp: korteTitel(z.title),
    chip: chipVoor(z.pct),
  }));
  const dag = (i, item, extra) => ({ dag: DAGEN[i], emoji: item.emoji, vak: "", onderwerp: item.onderwerp, chip: item.chip, extra });
  const week = [];
  const sterkste = c[c.length - 1];
  // Ma + do: het lastigste onderwerp (herhaling na een paar dagen beklijft).
  week.push(dag(0, c[0]));
  week.push(dag(1, c[1] || c[0]));
  week.push(dag(2, c[2] || sterkste));
  week.push(dag(3, c[0], "nog een keer — herhalen werkt"));
  // Vrijdag: lekker afsluiten met iets dat al goed gaat (of het op-één-na-zwakste).
  week.push(dag(4, c.length > 1 ? sterkste : c[0]));
  week.push(dag(5, c[3] || c[1] || c[0]));
  week.push({ dag: DAGEN[6], emoji: "🌟", vak: "", onderwerp: "Vrije keuze in de app (of rust!)", chip: null });
  return week;
}

export default function WeekschemaPagina({ setPage }) {
  const [naam, setNaam] = useState(huidigeSpelerNaam());
  const [focus, setFocus] = useState("gemengd");
  const [opMaatData, setOpMaatData] = useState(null); // null=laden/geen, [] nooit, array=concepten
  const [wilAlgemeen, setWilAlgemeen] = useState(false);

  // Oefen-geschiedenis laden; genoeg data = ≥2 concepten met ≥3 pogingen.
  useEffect(() => {
    let alive = true;
    const speler = huidigeSpelerNaam();
    if (!speler) { setOpMaatData([]); return; }
    loadMasteryForPlayer(speler)
      .then((recs) => {
        if (!alive) return;
        const alles = kiesZwakkeConcepten(recs, { maxConcepten: 8, minPogingen: 3, drempelPct: 101 });
        if (alles.length >= 2) {
          setOpMaatData(alles);
          track("weekschema_opmaat_toon", { concepten: alles.length });
        } else {
          setOpMaatData([]);
        }
      })
      .catch(() => { if (alive) setOpMaatData([]); });
    return () => { alive = false; };
  }, []);

  const opMaatKan = Array.isArray(opMaatData) && opMaatData.length >= 2;
  const toonOpMaat = opMaatKan && !wilAlgemeen;
  const week = useMemo(
    () => (toonOpMaat ? bouwWeekOpMaat(opMaatData) : bouwWeekAlgemeen(focus)),
    [toonOpMaat, opMaatData, focus]
  );
  const naamNet = (naam || "").trim();
  const gebruikteChips = useMemo(() => {
    const set = new Map();
    week.forEach((d) => { if (d.chip) set.set(d.chip.emoji, d.chip); });
    return [...set.values()];
  }, [week]);

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
          <FamiliePill />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0b1224", background: "#ffd54f", padding: "3px 8px", borderRadius: 8 }}>
            bèta
          </span>
          {toonOpMaat && (
            <span style={{ fontSize: 12, fontWeight: 800, color: "#69f0ae", border: "1px solid rgba(105,240,174,0.5)", padding: "3px 9px", borderRadius: 999 }}>
              ✨ op maat uit de oefen-geschiedenis
            </span>
          )}
        </div>
        <p style={{ color: "var(--color-text-muted, #8899aa)", fontSize: 14, lineHeight: 1.55, marginTop: 6 }}>
          Een afvinkbaar weekschema van een kwartier per dag richting de Doorstroomtoets. Print het en hang het op de
          koelkast — elke dag één onderwerp afvinken.
          {toonOpMaat && " Dit schema is gebouwd op wat er geoefend is: het lastigste onderwerp krijgt twee dagen, en vrijdag sluit af met iets dat al goed gaat."}
        </p>

        {/* Geen data (nog): vriendelijke uitleg hoe het op maat wordt. */}
        {Array.isArray(opMaatData) && !opMaatKan && (
          <div style={{ marginTop: 10, fontSize: 13.5, lineHeight: 1.55, color: "var(--color-text-muted, #8899aa)", background: "rgba(105,240,174,0.06)", border: "1px dashed rgba(105,240,174,0.35)", borderRadius: 10, padding: "10px 14px" }}>
            💡 Nog even algemeen: zodra je kind een paar onderwerpen geoefend heeft (of de{" "}
            <a href="/kwartiercheck" style={{ color: "#69f0ae", fontWeight: 700 }}>Kwartiercheck</a> doet), bouwt dit
            schema zichzelf op maat — met de lastigste onderwerpen vooraan in de week.
          </div>
        )}

        {/* Op-maat beschikbaar: keuze tussen op maat en algemeen. */}
        {opMaatKan && (
          <div style={{ marginTop: 10 }}>
            <button onClick={() => setWilAlgemeen(!wilAlgemeen)} style={{ ...linkBtn, fontSize: 13 }}>
              {wilAlgemeen ? "✨ Terug naar het schema op maat" : "Liever het algemene schema? →"}
            </button>
          </div>
        )}

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

        {/* Focus — alleen relevant voor het algemene schema */}
        {!toonOpMaat && (
          <>
            <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-muted, #8899aa)", marginTop: 12, marginBottom: 6 }}>Waar ligt de nadruk?</div>
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
          </>
        )}

        <div style={{ marginTop: 16 }}>
          <PrintKnoppen trackPrefix="weekschema" trackProps={{ focus, opMaat: toonOpMaat }} />
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
          <div style={{ fontSize: 14, color: "#6a5a3a", marginBottom: 18 }}>
            Een kwartier per dag richting de Doorstroomtoets — vink af wat je deed.
            {toonOpMaat ? " Dit schema is op maat gemaakt. ✨" : ""}
          </div>

          {week.map((d, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "11px 4px", borderBottom: i < week.length - 1 ? "1px solid #eee" : "none" }}>
              <div style={{ width: 26, height: 26, border: "2px solid #c9a227", borderRadius: 6, flexShrink: 0 }} />
              <div style={{ width: 92, fontWeight: 800, fontSize: 14.5, color: "#c8102e", flexShrink: 0 }}>{d.dag}</div>
              <div style={{ flex: 1, fontSize: 15, color: "#1a1206" }}>
                <span style={{ marginRight: 6 }}>{d.emoji}</span>
                {d.vak ? <><b>{d.vak}</b> — </> : null}
                <b>{d.onderwerp}</b>
                {d.extra ? <span style={{ color: "#8a7a55", fontSize: 12.5 }}> · {d.extra}</span> : null}
                {d.chip ? (
                  <span style={{ marginLeft: 8, fontSize: 11.5, fontWeight: 700, color: d.chip.kleur, border: `1px solid ${d.chip.kleur}55`, borderRadius: 999, padding: "1px 8px", whiteSpace: "nowrap" }}>
                    {d.chip.emoji} {d.chip.tekst}
                  </span>
                ) : null}
              </div>
              <div style={{ fontSize: 12.5, color: "#8a7a55", whiteSpace: "nowrap", flexShrink: 0 }}>± 15 min</div>
            </div>
          ))}

          <div style={{ marginTop: 18, fontSize: 12.5, color: "#6a5a3a", background: "#faf7ee", border: "1px solid #ece3c8", borderRadius: 8, padding: "10px 12px" }}>
            💡 Tip: oefen elk onderwerp in de app onder <b>Leren</b>. Zeven dagen vol? Trots-moment — begin gewoon opnieuw.
            {gebruikteChips.length > 0 && (
              <span> {gebruikteChips.map((c) => `${c.emoji} = ${c.tekst}`).join(" · ")}.</span>
            )}
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

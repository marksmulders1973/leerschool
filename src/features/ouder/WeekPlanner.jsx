// 📅 Weekplanner voor ouders (idee 66, Mark 9 nov 2026: "leuk, bouw maar"; ontwerp
// Desktop\dagrapport\weekplanner-ontwerp). Zeven dagen op een rij; tik op een dag → Charley kiest,
// een les per vak, of een vrije dag. Hoort bij het Familie-pakket: zonder pakket een voorbeeld met
// de proefweek-knop. Logica en opslag: src/shared/weekplan.js.
import { useCallback, useEffect, useMemo, useState } from "react";
import { track } from "../../utils.js";
import FamilieAfsluiten from "../../subscription/FamilieAfsluiten.jsx";
import {
  maandagVan, weekDagen, vandaagIso, haalWeekplan, zetDag, wisDag, kopieerNaarVolgendeWeek,
  lessenVoor, PLANNER_VAKKEN, WEEKPLAN_EVENT, groepNr, lesVak,
} from "../../shared/weekplan.js";

const VAK_KLEUR = { rekenen: "#00c853", taal: "#5aa9ff", spelling: "#b39dff", "begrijpend-lezen": "#ff9f5a" };
const kleurVoor = (r) => (r?.soort === "charley" ? "#ffd54f" : VAK_KLEUR[lesVak(r?.path_id)] || "#5aa9ff");

const S = {
  kaart: { borderRadius: 16, border: "1px solid rgba(105,240,174,0.3)", background: "linear-gradient(160deg, rgba(0,200,83,0.07), rgba(255,255,255,0.02))", padding: "14px 14px 12px", color: "var(--color-text, #e8edf5)", fontFamily: "var(--font-body)" },
  kop: { fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800, color: "#fff", margin: 0 },
  sub: { fontSize: 12.5, color: "var(--color-text-muted, #a9b6c8)", margin: "2px 0 10px" },
  dag: (aan, leeg, verleden) => ({
    display: "grid", gridTemplateColumns: "42px 1fr auto", alignItems: "center", gap: 10, width: "100%", textAlign: "left",
    padding: "8px 10px", marginBottom: 6, borderRadius: 13, cursor: verleden ? "default" : "pointer", color: "inherit", fontFamily: "inherit",
    border: aan ? "1.5px solid rgba(105,240,174,0.6)" : leeg ? "1.5px dashed rgba(255,255,255,0.18)" : "1px solid rgba(255,255,255,0.08)",
    background: aan ? "rgba(0,200,83,0.08)" : leeg ? "transparent" : "var(--color-bg-elevated, #1A2541)", opacity: verleden && leeg ? 0.45 : 1,
  }),
  knop: { padding: "9px 14px", borderRadius: 12, border: "1.5px solid rgba(255,255,255,0.2)", background: "transparent", color: "#e8edf5", fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, cursor: "pointer" },
  keuze: (charley) => ({
    display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, width: "100%", textAlign: "left", padding: "10px 12px", marginBottom: 6,
    borderRadius: 12, cursor: "pointer", color: "#fff", fontFamily: "inherit", fontSize: 13.5, fontWeight: 700,
    border: charley ? "1.5px solid rgba(255,213,79,0.5)" : "1px solid rgba(255,255,255,0.08)",
    background: charley ? "linear-gradient(135deg, rgba(255,213,79,0.12), #1A2541)" : "var(--color-bg-elevated, #1A2541)",
  }),
  tab: (aan) => ({ padding: "6px 11px", borderRadius: 14, border: "none", cursor: "pointer", fontSize: 12, fontWeight: 800, fontFamily: "inherit", background: aan ? "#5aa9ff" : "rgba(255,255,255,0.07)", color: aan ? "#0b1224" : "#a9b6c8" }),
};

export default function WeekPlanner({ linkId, childName, groep, isPro }) {
  const naam = childName || "je kind";
  const [weekOffset, setWeekOffset] = useState(0);
  const maandag = useMemo(() => { const m = maandagVan(new Date()); m.setDate(m.getDate() + 7 * weekOffset); return m; }, [weekOffset]);
  const dagen = useMemo(() => weekDagen(maandag), [maandag]);
  const vandaag = vandaagIso();
  const [rijen, setRijen] = useState([]);
  const [open, setOpen] = useState(null); // iso van de dag waarvoor gekozen wordt
  const [vak, setVak] = useState("rekenen");
  const [bezig, setBezig] = useState(false);
  const [melding, setMelding] = useState("");
  const [kopieMis, setKopieMis] = useState(false);
  const g = groepNr(groep);

  const laad = useCallback(async () => {
    if (!linkId || !isPro) return;
    setRijen(await haalWeekplan(linkId, dagen[0].iso, dagen[6].iso));
  }, [linkId, isPro, dagen]);
  useEffect(() => { laad(); }, [laad]);
  useEffect(() => {
    const h = () => laad();
    window.addEventListener(WEEKPLAN_EVENT, h);
    return () => window.removeEventListener(WEEKPLAN_EVENT, h);
  }, [laad]);
  useEffect(() => { try { track("planner_open", { pro: !!isPro }); } catch { /* */ } }, [isPro]);

  const perDag = useMemo(() => Object.fromEntries(rijen.map((r) => [r.dag, r])), [rijen]);
  const lessen = useMemo(() => lessenVoor(vak, g), [vak, g]);

  const kies = async (dagIso, keuze) => {
    setBezig(true); setMelding("");
    const r = keuze ? await zetDag(linkId, dagIso, keuze, keuze.soort === "les" ? vak : null) : await wisDag(linkId, dagIso);
    setBezig(false);
    if (!r.ok) { setMelding("Dat lukte even niet. Probeer het nog eens."); return; }
    setOpen(null);
    laad();
  };

  if (!isPro) {
    return (
      <div style={S.kaart} id="weekplanner">
        <h3 style={S.kop}>Weekplanner voor {naam}</h3>
        <p style={S.sub}>Zet per dag één kwartier klaar, maandag tot en met zondag. {naam} ziet alleen wat er vandaag klaarstaat.</p>
        <div style={{ display: "flex", gap: 5, margin: "0 0 12px", opacity: 0.6 }} aria-hidden="true">
          {["ma", "di", "wo", "do", "vr", "za", "zo"].map((d, i) => (
            <span key={d} style={{ flex: 1, textAlign: "center", padding: "8px 0", borderRadius: 9, fontSize: 11, fontWeight: 800, background: i < 3 ? "rgba(0,200,83,0.25)" : "rgba(255,255,255,0.07)" }}>{d}</span>
          ))}
        </div>
        <FamilieAfsluiten plek="weekplanner" variant="regel" />
      </div>
    );
  }

  return (
    <div style={S.kaart} id="weekplanner">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
        <h3 style={S.kop}>Week van {naam}</h3>
        <button type="button" onClick={() => { setWeekOffset(weekOffset === 0 ? 1 : 0); setOpen(null); }}
          style={{ background: "none", border: "none", color: "#5aa9ff", fontWeight: 800, fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>
          {weekOffset === 0 ? "volgende week →" : "← deze week"}
        </button>
      </div>
      <p style={S.sub}>
        {g ? `groep ${g} · ` : ""}{dagen[0].nr} t/m {dagen[6].lang.split(" ").slice(1).join(" ")} · tik op een dag om een kwartier klaar te zetten
      </p>

      {dagen.map((d) => {
        const r = perDag[d.iso];
        const verleden = d.iso < vandaag;
        const isVandaag = d.iso === vandaag;
        return (
          <div key={d.iso}>
            <button type="button" disabled={verleden} onClick={() => { if (verleden) return; setOpen(open === d.iso ? null : d.iso); }}
              style={S.dag(isVandaag, !r, verleden)} aria-expanded={open === d.iso}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14, textAlign: "center", lineHeight: 1.05 }}>
                {d.kort}<span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 10.5, color: "#8fa0bb", fontWeight: 700 }}>{d.nr}</span>
              </span>
              <span style={{ minWidth: 0 }}>
                {r ? (
                  <>
                    <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14, color: "#fff", lineHeight: 1.2 }}>
                      <span aria-hidden="true" style={{ display: "inline-block", width: 9, height: 9, borderRadius: "50%", marginRight: 6, background: kleurVoor(r) }} />
                      {r.soort === "charley" ? "Charley kiest" : r.titel}
                    </span>
                    <span style={{ display: "block", fontSize: 11, color: "#8fa0bb", fontWeight: 700 }}>
                      {r.soort === "charley" ? "wat het lastigst ging" : isVandaag ? "vandaag" : "door jou gekozen"}
                    </span>
                  </>
                ) : (
                  <span style={{ fontSize: 13, color: "#8fa0bb", fontWeight: 700 }}>{verleden ? "—" : "vrije dag"}</span>
                )}
              </span>
              <span style={{ fontSize: 12, fontWeight: 800, color: r?.gedaan ? "#69f0ae" : verleden ? "#8fa0bb" : r ? "#8fa0bb" : "#69f0ae" }}>
                {r?.gedaan ? "✓ gedaan" : verleden ? (r ? "niet gedaan" : "") : r ? "✎" : "+ kies"}
              </span>
            </button>

            {open === d.iso && (
              <div style={{ margin: "-2px 0 10px", padding: "12px", borderRadius: 14, background: "#13213a", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 8 }}>{d.lang.charAt(0).toUpperCase() + d.lang.slice(1)}</div>
                <button type="button" disabled={bezig} onClick={() => kies(d.iso, { soort: "charley" })} style={S.keuze(true)}>
                  <span>Laat Charley kiezen<span style={{ display: "block", fontSize: 11, color: "#8fa0bb" }}>pakt wat het lastigst ging</span></span>
                  <span style={{ color: "#69f0ae", fontFamily: "var(--font-display)" }}>kies</span>
                </button>
                <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: 0.5, textTransform: "uppercase", color: "#8fa0bb", margin: "10px 0 6px" }}>Of kies zelf een les</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 8 }}>
                  {PLANNER_VAKKEN.map((v) => (
                    <button key={v.key} type="button" onClick={() => setVak(v.key)} style={S.tab(vak === v.key)}>{v.label}</button>
                  ))}
                </div>
                {lessen.length === 0 && <div style={{ fontSize: 12.5, color: "#8fa0bb", margin: "4px 0 8px" }}>Voor deze groep staat hier nog niets; kies een ander vak of laat Charley kiezen.</div>}
                {lessen.map((l) => (
                  <button key={l.id} type="button" disabled={bezig} onClick={() => kies(d.iso, { soort: "les", id: l.id, titel: l.titel, emoji: l.emoji })} style={S.keuze(false)}>
                    <span style={{ minWidth: 0 }}>{l.titel}<span style={{ display: "block", fontSize: 11, color: "#8fa0bb" }}>{l.regel || `${l.minuten} min`}</span></span>
                    <span style={{ color: "#69f0ae", fontFamily: "var(--font-display)" }}>kies</span>
                  </button>
                ))}
                {perDag[d.iso] && (
                  <button type="button" disabled={bezig} onClick={() => kies(d.iso, null)} style={{ ...S.keuze(false), background: "transparent", justifyContent: "center", color: "#a9b6c8" }}>
                    Vrije dag maken
                  </button>
                )}
                {melding && <div role="status" style={{ fontSize: 12.5, color: "#ffb74d", marginTop: 6 }}>{melding}</div>}
              </div>
            )}
          </div>
        );
      })}

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 6 }}>
        {rijen.length > 0 && weekOffset === 0 && (
          <button type="button" disabled={bezig} style={S.knop} onClick={async () => {
            setBezig(true); const r = await kopieerNaarVolgendeWeek(linkId, rijen); setBezig(false);
            setKopieMis(!r.ok);
            setMelding(r.ok ? "Volgende week staat er hetzelfde in. Je kunt elke dag nog aanpassen." : "Dat lukte even niet. Probeer het nog eens.");
          }}>Zelfde week ook volgende week</button>
        )}
      </div>
      {melding && !open && <div role="status" style={{ fontSize: 12.5, color: kopieMis ? "#ffb74d" : "#69f0ae", marginTop: 8 }}>{melding}</div>}
      <p style={{ fontSize: 11.5, color: "#8fa0bb", margin: "10px 0 0", lineHeight: 1.5 }}>
        {naam} ziet op de eigen pagina alleen wat er vandaag klaarstaat. Een dag telt als gedaan zodra {naam} die dag een kwartier heeft geoefend of de les af heeft.
      </p>
    </div>
  );
}

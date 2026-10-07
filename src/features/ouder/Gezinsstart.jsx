import { useState, useRef, useEffect } from "react";
import supabase from "../../supabase.js";
import { bewaarKoppeling } from "../../shared/koppeling.js";
import { bewaarVoorkeur, standaardTot, VOORKEUR_VAKKEN } from "../vandaag/voorkeur.js";
import { track } from "../../utils.js";

// 🏠 Gezinsstart (Mark 30 sep 2026): een ouder of verzorger zet in vier
// stappen het gezin klaar. Verschijnt vanzelf bij een ingelogd account zonder
// kinderen, en via "Nog een kind". Het kind ziet hier niets van.
//   1. voornaam + groep (meerdere kinderen mogelijk, max 3 per gezin)
//   2. nadruk voor de eerste twee maanden (per kind)
//   3. oefent het kind op dít apparaat (geen code) of op een ander (code)
//   4. klaar: weekrapport-adres + optioneel tweede ouder of verzorger
// Elke stap heeft één primaire knop en een "Later"-uitweg.

export const MAX_KINDEREN = 3;
const GROEPEN = ["3", "4", "5", "6", "7", "8", "brugklas"];

const F = {
  kaart: { borderRadius: 16, border: "1px solid rgba(105,240,174,0.35)", background: "rgba(105,240,174,0.06)", padding: "16px" },
  kop: { fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--color-text-strong, #fff)", lineHeight: 1.3, margin: "4px 0 6px" },
  sub: { fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, marginBottom: 14 },
  stapje: { fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 700, letterSpacing: 0.6, color: "#69f0ae", textTransform: "uppercase" },
  input: { width: "100%", padding: "11px 12px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)", color: "var(--color-text-strong, #fff)", fontFamily: "var(--font-body)", fontSize: 15, outline: "none", boxSizing: "border-box" },
  primair: (uit) => ({ width: "100%", padding: "13px", borderRadius: 12, border: "none", background: uit ? "rgba(105,240,174,0.3)" : "#69f0ae", color: "#08121f", fontFamily: "var(--font-display)", fontSize: 15.5, fontWeight: 700, cursor: uit ? "not-allowed" : "pointer", marginTop: 14 }),
  link: { background: "none", border: "none", padding: "10px 4px", color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-body)", fontSize: 13, cursor: "pointer", textDecoration: "underline" },
  chip: (aan) => ({ padding: "8px 13px", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 13.5, fontWeight: 700, border: aan ? "2px solid #69f0ae" : "1px solid rgba(255,255,255,0.18)", background: aan ? "rgba(105,240,174,0.16)" : "rgba(255,255,255,0.05)", color: aan ? "#69f0ae" : "rgba(255,255,255,0.75)" }),
  keuze: (aan) => ({ flex: "1 1 140px", padding: "13px 12px", borderRadius: 12, cursor: "pointer", textAlign: "left", border: aan ? "2px solid #69f0ae" : "1px solid rgba(255,255,255,0.18)", background: aan ? "rgba(105,240,174,0.14)" : "rgba(255,255,255,0.04)", color: "var(--color-text-strong, #fff)", fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 700 }),
  fout: { fontFamily: "var(--font-body)", fontSize: 12.5, color: "#ff8a65", marginTop: 8 },
};

function Voortgang({ stap }) {
  return (
    <div style={{ display: "flex", gap: 4, margin: "8px 0 14px" }} aria-hidden="true">
      {[1, 2, 3, 4].map((n) => <div key={n} style={{ flex: 1, height: 5, borderRadius: 3, background: n <= stap ? "#69f0ae" : "rgba(255,255,255,0.12)" }} />)}
    </div>
  );
}

function Vinkje({ kleur = "#69f0ae", size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" stroke={kleur} strokeWidth="2" />
      <path d="M7.5 12.5l3 3 6-6" stroke={kleur} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function groepNaarProfiel(groep) {
  // "brugklas" = klas 1 met een neutraal schooltype; de leerling stelt dat later zelf bij.
  if (groep === "brugklas") return { level: "1", role: "student", schoolType: "havo-vwo" };
  return { level: String(groep || ""), role: "leerling", schoolType: "" };
}

/** Het kind op dít apparaat klaarzetten: profiel + koppeling + voorkeur. ls_user
 *  (wie er nu op het scherm staat) wisselt pas bij "Laat <naam> nu oefenen"
 *  via App.hierOefenen, zodat de ouder de wizard nog rustig af kan maken. */
export function zetKindOpDitApparaat({ naam, groep, linkId, voorkeur, vanWie = "" }) {
  const n = String(naam || "").trim();
  if (!n) return;
  const p = groepNaarProfiel(groep);
  try {
    localStorage.setItem(`lk_profiel:${n}`, JSON.stringify(p));
    const lijst = JSON.parse(localStorage.getItem("lk_namen") || "[]").filter((x) => x !== n);
    lijst.unshift(n);
    localStorage.setItem("lk_namen", JSON.stringify(lijst.slice(0, 8)));
  } catch { /* */ }
  if (linkId) bewaarKoppeling({ naam: n, linkId, rol: "ouder", vanWie });
  bewaarVoorkeur(n, { groep: groep || null, voorkeur: voorkeur || null });
}

/** Inline-bewerker voor de nadruk op de kind-kaart ("aanpassen"). */
export function VoorkeurEditor({ groep, voorkeur, onOpslaan, onAnnuleer, bezig = false }) {
  const [v, setV] = useState(() => ({ vakken: [], vrij: "", tot: standaardTot(), app_kiest: false, ...(voorkeur || {}) }));
  const toggle = (id) => setV((p) => ({ ...p, app_kiest: false, vakken: p.vakken.includes(id) ? p.vakken.filter((x) => x !== id) : [...p.vakken, id] }));
  const ok = v.app_kiest || v.vakken.length > 0 || String(v.vrij || "").trim();
  return (
    <div onClick={(e) => e.stopPropagation()} style={{ marginTop: 10, padding: "12px", borderRadius: 12, border: "1px solid rgba(105,240,174,0.3)", background: "rgba(105,240,174,0.05)" }}>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Waar moet de nadruk op liggen?</div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {VOORKEUR_VAKKEN.filter((x) => !x.alleenGroep || x.alleenGroep.includes(+groep)).map((x) => (
          <button key={x.id} type="button" onClick={() => toggle(x.id)} aria-pressed={v.vakken.includes(x.id)} style={{ ...F.chip(v.vakken.includes(x.id)), fontSize: 12.5, padding: "6px 11px" }}>{x.label}</button>
        ))}
        <button type="button" onClick={() => setV((p) => ({ ...p, app_kiest: !p.app_kiest, vakken: [], vrij: "" }))} aria-pressed={v.app_kiest} style={{ ...F.chip(v.app_kiest), fontSize: 12.5, padding: "6px 11px" }}>Laat de app kiezen</button>
      </div>
      {!v.app_kiest && (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          <input value={v.vrij || ""} maxLength={40} onChange={(e) => setV((p) => ({ ...p, vrij: e.target.value }))} placeholder="Iets specifieks? bv. klokkijken" style={{ ...F.input, flex: "2 1 160px", width: "auto", fontSize: 14 }} />
          <label style={{ flex: "1 1 120px", fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)" }}>
            Tot<br />
            <input type="date" value={v.tot || ""} onChange={(e) => setV((p) => ({ ...p, tot: e.target.value }))} style={{ ...F.input, fontSize: 14, marginTop: 3 }} />
          </label>
        </div>
      )}
      <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
        <button type="button" disabled={!ok || bezig} onClick={() => onOpslaan({ vakken: v.app_kiest ? [] : v.vakken, vrij: v.app_kiest ? "" : String(v.vrij || "").trim(), tot: v.tot || standaardTot(), app_kiest: !!v.app_kiest })} style={{ ...F.primair(!ok || bezig), marginTop: 0, flex: 1, padding: "10px" }}>{bezig ? "Opslaan…" : "Opslaan"}</button>
        <button type="button" onClick={onAnnuleer} style={F.link}>Annuleer</button>
      </div>
    </div>
  );
}

export function nieuwKind() {
  return { naam: "", groep: "", voorkeur: { vakken: [], vrij: "", tot: standaardTot(), app_kiest: false }, apparaat: null, linkId: null, code: null, fout: "" };
}

/**
 * @param {object} p
 * @param {object} p.authUser
 * @param {number} [p.bestaandAantal]       kinderen die al gekoppeld zijn (cap 3)
 * @param {string[]} [p.bestaandeNamen]     lowercase namen die al bestaan
 * @param {(naam:string)=>Promise<string|null>} p.maakCode  koppelcode aanmaken (link_codes)
 * @param {(code:string, naam:string)=>void} p.sendWhatsApp
 * @param {(linkId:string, naam:string)=>void} [p.onHierOefenen]
 * @param {()=>void} p.onLater              wizard sluiten
 * @param {()=>void} p.onKlaar              wizard klaar → overzicht verversen
 * @param {import('react').ReactNode} [p.partnerSlot]  bestaand partner-invoerveld
 * @param {string} p.weekrapportMoment      bv. "Elke vrijdag om 16:00"
 */
export default function Gezinsstart({ authUser, bestaandAantal = 0, bestaandeNamen = [], maakCode, sendWhatsApp, onHierOefenen, onLater, onKlaar, partnerSlot = null, weekrapportMoment = "Elke week" }) {
  const [stap, setStap] = useState(1);
  const [kinderen, setKinderen] = useState([nieuwKind()]);
  const [idx, setIdx] = useState(0); // welk kind in stap 2/3
  const [bezig, setBezig] = useState(false);
  const [fout, setFout] = useState("");
  const naamRef = useRef(null);
  useEffect(() => { if (stap === 1) { try { naamRef.current?.focus(); } catch { /* */ } } }, [stap]);
  useEffect(() => { try { track("gezinsstart_open", { bestaand: bestaandAantal }); } catch { /* */ } }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const email = authUser?.email || "";
  const ruimte = Math.max(0, MAX_KINDEREN - bestaandAantal);
  const kind = kinderen[idx] || kinderen[0];
  const zetKind = (i, patch) => setKinderen((prev) => prev.map((k, j) => (j === i ? { ...k, ...patch } : k)));

  const later = () => { try { track("gezinsstart_later", { stap }); } catch { /* */ } onLater?.(); };

  // ── Stap 1: namen + groep ────────────────────────────────────────────────
  const stap1Ok = kinderen.every((k) => k.naam.trim() && k.groep);
  const naarStap2 = () => {
    setFout("");
    const namen = kinderen.map((k) => k.naam.trim().toLowerCase());
    if (new Set(namen).size !== namen.length) { setFout("Twee kinderen met dezelfde voornaam — voeg bijvoorbeeld een letter toe."); return; }
    const botst = namen.find((n) => bestaandeNamen.includes(n));
    if (botst) { setFout(`${botst.charAt(0).toUpperCase() + botst.slice(1)} staat al in je gezin. Kies een andere naam of ga terug naar het overzicht.`); return; }
    // Doorstroomtoets-chip alleen voor groep 7/8: haal 'm weg als die niet past.
    setKinderen((prev) => prev.map((k) => ({ ...k, naam: k.naam.trim(), voorkeur: { ...k.voorkeur, vakken: k.voorkeur.vakken.filter((v) => v !== "doorstroomtoets" || ["7", "8"].includes(k.groep)) } })));
    setIdx(0); setStap(2);
    try { track("gezinsstart_stap1", { kinderen: kinderen.length }); } catch { /* */ }
  };

  // ── Stap 2: nadruk ───────────────────────────────────────────────────────
  const toggleVak = (id) => {
    const v = kind.voorkeur;
    const vakken = v.vakken.includes(id) ? v.vakken.filter((x) => x !== id) : [...v.vakken, id];
    zetKind(idx, { voorkeur: { ...v, vakken, app_kiest: false } });
  };
  const appKiest = () => zetKind(idx, { voorkeur: { ...kind.voorkeur, vakken: [], vrij: "", app_kiest: !kind.voorkeur.app_kiest } });
  const stap2Ok = kind.voorkeur.app_kiest || kind.voorkeur.vakken.length > 0 || kind.voorkeur.vrij.trim();
  const naarStap3 = () => {
    try { track("gezinsstart_stap2", { vakken: kind.voorkeur.vakken.length, vrij: kind.voorkeur.vrij.trim() ? 1 : 0, app_kiest: kind.voorkeur.app_kiest ? 1 : 0 }); } catch { /* */ }
    if (idx + 1 < kinderen.length) { setIdx(idx + 1); return; }
    setIdx(0); setStap(3);
  };

  // ── Stap 3: apparaat ─────────────────────────────────────────────────────
  const koppel = async (verified) => {
    const v = kind.voorkeur;
    const voorkeur = v.app_kiest ? { vakken: [], vrij: "", tot: v.tot, app_kiest: true } : { vakken: v.vakken, vrij: v.vrij.trim(), tot: v.tot, app_kiest: false };
    const { data, error } = await supabase.rpc("gezin_koppel_zelfde_apparaat", { p_child_name: kind.naam, p_groep: kind.groep, p_voorkeur: voorkeur, p_verified: verified });
    if (error || !data) {
      const msg = /maximaal 3/i.test(error?.message || "") ? "Je gezin heeft al het maximum van 3 kinderen." : "Opslaan lukte niet. Probeer het zo nog eens.";
      throw new Error(msg);
    }
    return { linkId: data, voorkeur };
  };
  const kiesHier = async () => {
    if (bezig) return;
    setBezig(true); setFout("");
    try {
      const { linkId, voorkeur } = await koppel(true);
      zetKindOpDitApparaat({ naam: kind.naam, groep: kind.groep, linkId, voorkeur });
      zetKind(idx, { apparaat: "hier", linkId, fout: "" });
      try { track("gezinsstart_apparaat", { hier: 1 }); } catch { /* */ }
    } catch (e) { setFout(e.message || "Er ging iets mis."); }
    setBezig(false);
  };
  const kiesAnder = async () => {
    if (bezig) return;
    setBezig(true); setFout("");
    try {
      const { linkId } = await koppel(false);
      const code = await maakCode?.(kind.naam);
      if (!code) throw new Error("De code kon niet gemaakt worden. Probeer het zo nog eens.");
      zetKind(idx, { apparaat: "ander", linkId, code, fout: "" });
      try { track("gezinsstart_apparaat", { hier: 0 }); } catch { /* */ }
    } catch (e) { setFout(e.message || "Er ging iets mis."); }
    setBezig(false);
  };
  const naarStap4 = () => {
    if (idx + 1 < kinderen.length) { setIdx(idx + 1); setFout(""); return; }
    setStap(4);
    try { track("gezinsstart_klaar", { kinderen: kinderen.length, hier: kinderen.filter((k) => k.apparaat === "hier").length }); } catch { /* */ }
    onKlaar?.();
  };

  const hierKinderen = kinderen.filter((k) => k.apparaat === "hier" && k.linkId);
  const meerdere = kinderen.length > 1;
  const kindLabel = meerdere ? ` (${idx + 1} van ${kinderen.length})` : "";

  return (
    <div style={F.kaart} data-gezinsstart={stap}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 8 }}>
        <span style={F.stapje}>Gezinsstart · stap {stap} van 4</span>
        {stap < 4 && <button type="button" onClick={later} style={{ ...F.link, padding: "4px 2px" }}>Later</button>}
      </div>
      <Voortgang stap={stap} />

      {stap === 1 && (
        <div>
          <div style={F.kop}>Wie gaat er oefenen?</div>
          <div style={F.sub}>Alleen een voornaam en de groep. Dat is genoeg om het kwartier op maat te maken.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {kinderen.map((k, i) => (
              <div key={i} style={{ padding: "12px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)" }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input ref={i === 0 ? naamRef : null} value={k.naam} maxLength={30} onChange={(e) => zetKind(i, { naam: e.target.value })} placeholder={i === 0 ? "Voornaam" : "Voornaam van je volgende kind"} aria-label="Voornaam" style={F.input} />
                  {kinderen.length > 1 && (
                    <button type="button" onClick={() => setKinderen((prev) => prev.filter((_, j) => j !== i))} aria-label="Dit kind weghalen" style={{ background: "none", border: "none", color: "rgba(255,255,255,0.35)", fontSize: 20, cursor: "pointer", padding: "0 4px" }}>×</button>
                  )}
                </div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "10px 0 6px" }}>In welke groep?</div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {GROEPEN.map((g) => (
                    <button key={g} type="button" onClick={() => zetKind(i, { groep: g })} aria-pressed={k.groep === g} style={F.chip(k.groep === g)}>{g === "brugklas" ? "Brugklas" : `Groep ${g}`}</button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {kinderen.length < ruimte && (
            <button type="button" onClick={() => setKinderen((prev) => [...prev, nieuwKind()])} style={{ ...F.link, color: "#69f0ae", padding: "10px 2px 0" }}>+ Nog een kind</button>
          )}
          {fout && <div style={F.fout}>{fout}</div>}
          <button type="button" onClick={naarStap2} disabled={!stap1Ok} style={F.primair(!stap1Ok)}>Verder</button>
        </div>
      )}

      {stap === 2 && (
        <div>
          <div style={F.kop}>Waar wil je bij {kind.naam} de eerste twee maanden de nadruk op leggen?{kindLabel}</div>
          <div style={F.sub}>Kies één of meer. Het dagelijkse kwartier haalt er dan minstens twee van de drie onderdelen uit — tot {new Date(kind.voorkeur.tot).toLocaleDateString("nl-NL", { day: "numeric", month: "long" })}. Daarna kiest de app weer zelf.</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {VOORKEUR_VAKKEN.filter((v) => !v.alleenGroep || v.alleenGroep.includes(+kind.groep)).map((v) => (
              <button key={v.id} type="button" onClick={() => toggleVak(v.id)} aria-pressed={kind.voorkeur.vakken.includes(v.id)} style={F.chip(kind.voorkeur.vakken.includes(v.id))}>{v.label}</button>
            ))}
            <button type="button" onClick={appKiest} aria-pressed={kind.voorkeur.app_kiest} style={F.chip(kind.voorkeur.app_kiest)}>Laat de app kiezen</button>
          </div>
          {!kind.voorkeur.app_kiest && (
            <div style={{ marginTop: 12 }}>
              <label style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.55)", display: "block", marginBottom: 5 }}>Iets specifieks? (bv. klokkijken)</label>
              <input value={kind.voorkeur.vrij} maxLength={40} onChange={(e) => zetKind(idx, { voorkeur: { ...kind.voorkeur, vrij: e.target.value } })} placeholder="bv. klokkijken, breuken, tafels" style={F.input} />
            </div>
          )}
          <button type="button" onClick={naarStap3} disabled={!stap2Ok} style={F.primair(!stap2Ok)}>Verder</button>
        </div>
      )}

      {stap === 3 && (
        <div>
          <div style={F.kop}>Oefent {kind.naam} op dit apparaat?{kindLabel}</div>
          {!kind.apparaat && (
            <>
              <div style={F.sub}>Op dit apparaat is geen code nodig: jij bent hier al ingelogd. Op een ander apparaat (eigen tablet of telefoon) stuur je een korte code.</div>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button type="button" onClick={kiesHier} disabled={bezig} style={F.keuze(false)}>Ja, op dit apparaat<div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>Geen code nodig</div></button>
                <button type="button" onClick={kiesAnder} disabled={bezig} style={F.keuze(false)}>Nee, op een ander apparaat<div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 400, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>Je krijgt een code om te sturen</div></button>
              </div>
              {bezig && <div style={{ ...F.sub, marginTop: 10 }}>Even geduld…</div>}
              {fout && <div style={F.fout}>{fout}</div>}
            </>
          )}
          {kind.apparaat === "hier" && (
            <>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-body)", fontSize: 14, color: "#69f0ae", fontWeight: 700, margin: "6px 0 8px" }}><Vinkje /> {kind.naam} staat klaar op dit apparaat</div>
              <div style={F.sub}>Alles wat {kind.naam} hier oefent, zie jij in je overzicht en in het weekrapport. Straks kun je met één tik wisselen naar {kind.naam}.</div>
              <button type="button" onClick={naarStap4} style={F.primair(false)}>Verder</button>
            </>
          )}
          {kind.apparaat === "ander" && (
            <>
              <div style={F.sub}>Stuur deze code naar {kind.naam}. In de app: <strong>Code gekregen?</strong>, code invoeren, klaar. De code is 48 uur geldig.</div>
              <div style={{ textAlign: "center", padding: "6px 0 10px" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 700, color: "#00b0ff", letterSpacing: 6 }}>{kind.code}</div>
              </div>
              <button type="button" onClick={() => sendWhatsApp?.(kind.code, kind.naam)} style={{ ...F.primair(false), marginTop: 4, background: "#25D366" }}>Stuur via WhatsApp</button>
              <div style={{ textAlign: "center", marginTop: 6 }}>
                <button type="button" onClick={naarStap4} style={F.link}>{idx + 1 < kinderen.length ? "Verder met het volgende kind" : "Verder"}</button>
              </div>
            </>
          )}
        </div>
      )}

      {stap === 4 && (
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}><Vinkje size={20} /><div style={{ ...F.kop, margin: 0 }}>Je gezin staat klaar</div></div>
          <div style={{ ...F.sub, marginTop: 8 }}>
            {weekrapportMoment} krijg je het weekrapport op <strong style={{ color: "rgba(255,255,255,0.85)" }}>{email || "je e-mailadres"}</strong>: kort en eerlijk hoe het ging.
          </div>
          {partnerSlot && (
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.6)", marginBottom: 6 }}>Leest een tweede ouder of verzorger mee? (kan ook later)</div>
              {partnerSlot}
            </div>
          )}
          {hierKinderen.length > 0 && onHierOefenen ? (
            <>
              {hierKinderen.map((k, i) => (
                <button key={k.linkId} type="button" onClick={() => onHierOefenen(k.linkId, k.naam)} style={i === 0 ? F.primair(false) : { ...F.link, color: "#69f0ae", display: "block", width: "100%", textAlign: "center" }}>
                  Laat {k.naam} nu oefenen
                </button>
              ))}
              <div style={{ textAlign: "center", marginTop: 4 }}><button type="button" onClick={onLater} style={F.link}>Naar mijn overzicht</button></div>
            </>
          ) : (
            <button type="button" onClick={onLater} style={F.primair(false)}>Naar mijn overzicht</button>
          )}
        </div>
      )}
    </div>
  );
}

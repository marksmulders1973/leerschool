// 👨‍👩‍👧 "Wie oefent er?" — profielen op dit apparaat (Mark 1 okt 2026: "5 profielen met
// dropdown en blanks of voorbeeld; ik ben leerling, ouder etc., net als Netflix; naam,
// leeftijd, groep, wat je liefst doet; zo overzichtelijk en duidelijk mogelijk").
// Plan: docs/PLAN-MIJN-PAGINA-PROFIELEN.md (fase 1).
//
// - Raster met max 5 grote tegels (poppetje + naam + rol in woorden) + "Profiel toevoegen".
// - Aanmaken op één kaart: rol (3 knoppen), naam (blank met voorbeeld), leeftijd (lijst)
//   → groep voorgesteld (lijst), wat je het liefst oefent (tot 3 knopjes). Alleen rol +
//   naam verplicht. Geen achternaam, geen geboortedatum.
// - Opslag zoals de rest van de app: lk_namen + lk_profiel:<naam>; voorkeur via voorkeur.js
//   (de vandaag-motor gebruikt die al).

import { useMemo, useState } from "react";
import { AvatarSvg, loadAvatarConfig } from "./avatar.jsx";
import { VOORKEUR_VAKKEN, bewaarVoorkeur, standaardTot } from "../vandaag/voorkeur.js";
import { track } from "../../utils.js";

// 6 vaste plekken (Mark 1 okt 2026, middag): 3 kinderen, 2 ouders of verzorgers, 1 leerkracht.
// Lege plekken staan lichtgrijs klaar ("Kind 2 · naam · groep") en worden ingevuld bij aantikken.
export const PLEKKEN = [
  { groep: "kind", rol: "leerling", label: "Kind 1", hint: "naam · groep" },
  { groep: "kind", rol: "leerling", label: "Kind 2", hint: "naam · groep" },
  { groep: "kind", rol: "leerling", label: "Kind 3", hint: "naam · groep" },
  { groep: "ouder", rol: "ouder", label: "Ouder 1", hint: "ouder of verzorger" },
  { groep: "ouder", rol: "ouder", label: "Ouder 2", hint: "ouder of verzorger" },
  { groep: "leraar", rol: "teacher", label: "Leerkracht", hint: "juf of meester" },
];
export const MAX_PROFIELEN = PLEKKEN.length;
const groepVanRol = (role) => (role === "ouder" ? "ouder" : role === "teacher" ? "leraar" : "kind");

const ROL_KNOPPEN = [
  { key: "leerling", label: "Leerling", uitleg: "Ik oefen zelf" },
  { key: "ouder", label: "Ouder of verzorger", uitleg: "Ik volg mijn kind" },
  { key: "teacher", label: "Leerkracht", uitleg: "Ik heb een klas" },
];

const NIVEAUS = [
  { level: "groep12", label: "Groep 1-2" },
  ...[3, 4, 5, 6, 7, 8].map((g) => ({ level: `groep${g}`, label: `Groep ${g}` })),
  ...[1, 2, 3, 4, 5, 6].map((k) => ({ level: `klas${k}`, label: k === 1 ? "Klas 1 (brugklas)" : `Klas ${k}` })),
];

// Leeftijd → gebruikelijke groep/klas (voorstel, aan te passen).
function niveauBijLeeftijd(l) {
  const n = Number(l);
  if (!n) return "";
  if (n <= 5) return "groep12";
  if (n <= 11) return `groep${n - 3}`;
  return `klas${Math.min(6, n - 11)}`;
}

// Kliktocht 1 okt 2026: de app bewaart het niveau als los cijfer ("6") + schoolType voor
// de middelbare school (zoals HomePage/Gezinsstart); "groep6" gaf op StudentHome "Groep groep6".
function naarAppNiveau(level) {
  if (level === "groep12") return { level: "2", schoolType: "" };
  const g = (level || "").match(/^groep(\d)$/);
  if (g) return { level: g[1], schoolType: "" };
  const k = (level || "").match(/^klas(\d)$/);
  if (k) return { level: k[1], schoolType: "havo-vwo" };
  return { level: "", schoolType: "" };
}

const rolWoord = (p) => {
  if (p.role === "ouder") return "ouder of verzorger";
  if (p.role === "teacher") return "leerkracht";
  const niv = NIVEAUS.find((x) => x.level === p.level);
  if (niv) return `leerling · ${niv.label.toLowerCase()}`;
  if (/^\d+$/.test(String(p.level || ""))) return `leerling · ${p.role === "student" || p.schoolType ? "klas" : "groep"} ${p.level}`;
  return "leerling";
};

export function leesProfielen() {
  try {
    const namen = JSON.parse(localStorage.getItem("lk_namen") || "[]").filter((n) => n && n.toLowerCase() !== "speler");
    return namen.map((naam) => {
      let p = {};
      try { p = JSON.parse(localStorage.getItem(`lk_profiel:${naam}`) || "{}") || {}; } catch { /* */ }
      return { naam, role: p.role || "leerling", level: p.level || "", schoolType: p.schoolType || "", leeftijd: p.leeftijd || "" };
    });
  } catch { return []; }
}

const knopBasis = {
  cursor: "pointer", borderRadius: 14, fontFamily: "var(--font-display)", fontWeight: 800,
};

function Tegel({ p, actief, onKies }) {
  const config = loadAvatarConfig(p.naam);
  return (
    <button
      type="button"
      onClick={onKies}
      style={{
        ...knopBasis, display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        padding: "12px 6px", width: "100%", minHeight: 138,
        border: actief ? "2px solid #00e676" : "1px solid rgba(255,255,255,0.15)",
        background: actief ? "rgba(0,230,118,0.08)" : "rgba(255,255,255,0.04)", color: "#fff",
      }}
    >
      <span style={{ width: 56, height: 56, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <AvatarSvg config={config} size={56} />
      </span>
      <span style={{ fontSize: 15, lineHeight: 1.2, wordBreak: "break-word" }}>{p.naam}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>{rolWoord(p)}</span>
    </button>
  );
}

function ProfielKaart({ bestaand, onKlaar, onTerug, vasteRol = null }) {
  const [role, setRole] = useState(vasteRol || "leerling");
  const [naam, setNaam] = useState("");
  const [leeftijd, setLeeftijd] = useState("");
  const [level, setLevel] = useState("");
  const [vakken, setVakken] = useState([]);
  const [fout, setFout] = useState("");

  const groepNr = (() => { const m = level.match(/groep(\d)/); return m ? Number(m[1] === "1" ? 2 : m[1]) : null; })();
  const vakOpties = VOORKEUR_VAKKEN.filter((v) => !v.alleenGroep || (groepNr && v.alleenGroep.includes(groepNr)));

  const kiesLeeftijd = (v) => { setLeeftijd(v); if (!level || level === niveauBijLeeftijd(leeftijd)) setLevel(niveauBijLeeftijd(v)); };
  const wisselVak = (id) => setVakken((cur) => cur.includes(id) ? cur.filter((x) => x !== id) : cur.length >= 3 ? cur : [...cur, id]);

  const klaar = () => {
    const n = naam.trim().replace(/\s+/g, " ");
    if (!n) { setFout("Vul een naam in."); return; }
    if (n.length > 20) { setFout("Kies een kortere naam (max 20 tekens)."); return; }
    if (n.toLowerCase() === "speler") { setFout("Kies een eigen naam."); return; }
    if (bestaand.some((p) => p.naam.toLowerCase() === n.toLowerCase())) { setFout("Die naam bestaat al op dit apparaat."); return; }
    const isKlas = /^klas/.test(level);
    const echteRol = role === "leerling" && isKlas ? "student" : role;
    onKlaar({ naam: n, role: echteRol, level: role === "teacher" || role === "ouder" ? (role === "teacher" ? level : "") : level, leeftijd: role === "leerling" ? leeftijd : "", vakken });
  };

  const veld = { width: "100%", padding: "11px 12px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.2)", background: "#1e2d45", color: "#fff", colorScheme: "dark", fontSize: 16, fontFamily: "var(--font-body)" };
  // colorScheme + dichte achtergrond (Mark 5 okt 2026): met een doorzichtige achtergrond tekende o.a. een
  // werk-pc (Remote Browser Isolation) de uitklaplijst wit-op-wit → de leeftijden waren onzichtbaar.
  const label = { display: "block", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.75)", margin: "14px 0 6px" };

  return (
    <div style={{ maxWidth: 460, margin: "0 auto", textAlign: "left" }}>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 24, margin: "0 0 4px", color: "#fff" }}>
        {vasteRol === "ouder" ? "Nieuw profiel: ouder of verzorger" : vasteRol === "teacher" ? "Nieuw profiel: leerkracht" : vasteRol ? "Nieuw profiel: kind" : "Nieuw profiel"}
      </h2>
      <p style={{ margin: 0, fontSize: 13.5, color: "rgba(255,255,255,0.6)" }}>Alleen een naam is nodig. De rest kan later.</p>

      {!vasteRol && <span style={label}>Wie ben je?</span>}
      {!vasteRol && <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
        {ROL_KNOPPEN.map((r) => (
          <button key={r.key} type="button" onClick={() => setRole(r.key)} style={{
            ...knopBasis, padding: "12px 6px", fontSize: 14,
            border: role === r.key ? "2px solid #00e676" : "1px solid rgba(255,255,255,0.18)",
            background: role === r.key ? "rgba(0,230,118,0.12)" : "rgba(255,255,255,0.04)", color: "#fff",
          }}>
            {r.label}
            <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginTop: 3 }}>{r.uitleg}</span>
          </button>
        ))}
      </div>}

      <label style={label} htmlFor="wie-naam">Naam</label>
      <input id="wie-naam" style={veld} value={naam} onChange={(e) => { setNaam(e.target.value); setFout(""); }}
        placeholder={role === "ouder" ? "bv. Mama, Papa of je voornaam" : role === "teacher" ? "bv. Juf Anna" : "bv. Sam"} maxLength={24} autoComplete="off" />
      <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>Alleen een voornaam of bijnaam, geen achternaam.</div>

      {role === "leerling" && (
        <>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div>
              <label style={label} htmlFor="wie-leeftijd">Leeftijd</label>
              <select id="wie-leeftijd" style={veld} value={leeftijd} onChange={(e) => kiesLeeftijd(e.target.value)}>
                <option value="">Kies…</option>
                {Array.from({ length: 15 }, (_, i) => i + 4).map((l) => <option key={l} value={l}>{l} jaar</option>)}
              </select>
            </div>
            <div>
              <label style={label} htmlFor="wie-groep">Groep of klas</label>
              <select id="wie-groep" style={veld} value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="">Kies…</option>
                {NIVEAUS.map((n) => <option key={n.level} value={n.level}>{n.label}</option>)}
              </select>
            </div>
          </div>
          {leeftijd && level === niveauBijLeeftijd(leeftijd) && (
            <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>We stelden de groep voor bij deze leeftijd; klopt het niet, kies dan een andere.</div>
          )}

          <span style={label}>Wat oefen je het liefst? <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.45)" }}>(kies er tot 3)</span></span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {vakOpties.map((v) => {
              const aan = vakken.includes(v.id);
              return (
                <button key={v.id} type="button" onClick={() => wisselVak(v.id)} style={{
                  ...knopBasis, padding: "9px 14px", fontSize: 14, borderRadius: 999,
                  border: aan ? "2px solid #00e676" : "1px solid rgba(255,255,255,0.18)",
                  background: aan ? "rgba(0,230,118,0.12)" : "rgba(255,255,255,0.04)", color: "#fff",
                }}>{aan ? "✓ " : ""}{v.label}</button>
              );
            })}
          </div>
        </>
      )}

      {role === "teacher" && (
        <>
          <label style={label} htmlFor="wie-klas">Welke groep geef je les? <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.45)" }}>(mag leeg)</span></label>
          <select id="wie-klas" style={veld} value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">Kies…</option>
            {NIVEAUS.map((n) => <option key={n.level} value={n.level}>{n.label}</option>)}
          </select>
        </>
      )}

      {role === "ouder" && (
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: 12, lineHeight: 1.5 }}>
          Na het aanmaken zie je je kinderen en kun je ze koppelen, zodat je hun voortgang en het weekrapport ziet.
        </p>
      )}

      {fout && <div role="alert" style={{ marginTop: 12, color: "#ff8a80", fontSize: 14, fontWeight: 700 }}>{fout}</div>}

      <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
        <button type="button" onClick={onTerug} style={{ ...knopBasis, flex: "0 0 auto", padding: "13px 18px", fontSize: 15, border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff" }}>Terug</button>
        <button type="button" onClick={klaar} style={{ ...knopBasis, flex: 1, padding: "13px 18px", fontSize: 16, border: "none", background: "#00c853", color: "#06211a" }}>Klaar</button>
      </div>
    </div>
  );
}

function LegePlek({ plek, onKlik }) {
  return (
    <button type="button" onClick={onKlik} aria-label={`${plek.label}: nog invullen`} style={{
      ...knopBasis, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 6px", width: "100%", minHeight: 138,
      border: "2px dashed rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.02)", color: "rgba(255,255,255,0.38)",
    }}>
      <span aria-hidden="true" style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "flex-end", justifyContent: "center", overflow: "hidden" }}>
        <svg width="40" height="44" viewBox="0 0 40 44"><circle cx="20" cy="14" r="9" fill="rgba(255,255,255,0.22)" /><path d="M2 44c0-11 8-18 18-18s18 7 18 18z" fill="rgba(255,255,255,0.22)" /></svg>
      </span>
      <span style={{ fontSize: 14.5, lineHeight: 1.2 }}>{plek.label}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 600, fontStyle: "italic" }}>{plek.hint}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 700, color: "rgba(105,240,174,0.75)" }}>+ invullen</span>
    </button>
  );
}

export default function WieOefentEr({ huidigeNaam, onKies, onSluit, onVerwijder, startNieuw = false, startRol = null }) {
  const [versie, setVersie] = useState(0);
  const profielen = useMemo(() => leesProfielen(), [versie]); // eslint-disable-line react-hooks/exhaustive-deps
  // Profielen verdelen over de vaste plekken; wat niet past (oude apparaten) komt onder "Andere profielen".
  const verdeling = useMemo(() => {
    const per = { kind: [], ouder: [], leraar: [] };
    profielen.forEach((p) => per[groepVanRol(p.role)].push(p));
    const tel = { kind: 0, ouder: 0, leraar: 0 };
    const plekken = PLEKKEN.map((pl) => ({ plek: pl, profiel: per[pl.groep][tel[pl.groep]++] || null }));
    const geplaatst = new Set(plekken.filter((x) => x.profiel).map((x) => x.profiel.naam));
    return { plekken, extra: profielen.filter((p) => !geplaatst.has(p.naam)) };
  }, [profielen]);
  const [nieuwRol, setNieuwRol] = useState(startNieuw ? (startRol || "leerling") : null);
  const [beheren, setBeheren] = useState(false);
  const [weg, setWeg] = useState(null);

  const maak = ({ naam, role, level, leeftijd, vakken }) => {
    try {
      const app = naarAppNiveau(level);
      localStorage.setItem(`lk_profiel:${naam}`, JSON.stringify({ role, level: app.level, schoolType: app.schoolType, leeftijd: leeftijd || "", aangemaakt: Date.now() }));
      const lijst = JSON.parse(localStorage.getItem("lk_namen") || "[]").filter((x) => x !== naam);
      lijst.unshift(naam);
      localStorage.setItem("lk_namen", JSON.stringify(lijst.slice(0, 8)));
      // Zelfde groep-vorm als Gezinsstart: "6" (getal als tekst), brugklas voor klas 1.
      const groepVoorkeur = /^groep12$/.test(level) ? "2" : (level.match(/^groep(\d)$/) || [])[1] || (level === "klas1" ? "brugklas" : null);
      if (vakken.length) bewaarVoorkeur(naam, { groep: groepVoorkeur, voorkeur: { vakken, vrij: "", tot: standaardTot(), app_kiest: false } });
    } catch { /* */ }
    try { track("profiel_aangemaakt", { rol: role, leeftijd: !!leeftijd, groep: !!level, vakken: vakken.length, aantal: profielen.length + 1 }); } catch { /* */ }
    onKies(naam);
  };

  const kies = (naam) => {
    try { track("profiel_wissel", { via: "wie_oefent_er" }); } catch { /* */ }
    onKies(naam);
  };

  const sectie = (titel, groep) => {
    const items = verdeling.plekken.filter((x) => x.plek.groep === groep);
    return (
      <div style={{ marginBottom: 18 }}>
        <div style={{ textAlign: "left", fontSize: 12, fontWeight: 800, letterSpacing: 0.6, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", margin: "0 0 8px 2px" }}>{titel}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {items.map(({ plek, profiel }, i) => (
            <div key={plek.label + i} style={{ position: "relative" }}>
              {profiel
                ? <Tegel p={profiel} actief={profiel.naam === huidigeNaam} onKies={() => (beheren ? setWeg(profiel.naam) : kies(profiel.naam))} />
                : (!beheren && <LegePlek plek={plek} onKlik={() => { try { track("profiel_plek_invullen", { groep }); } catch { /* */ } setNieuwRol(plek.rol); }} />)}
              {beheren && profiel && <span aria-hidden="true" style={{ position: "absolute", top: 6, right: 8, fontSize: 12, fontWeight: 800, color: "#ff8a80" }}>weghalen</span>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div role="dialog" aria-modal="true" aria-label="Wie oefent er?" style={{
      position: "fixed", inset: 0, zIndex: 1000, overflowY: "auto",
      background: "radial-gradient(circle at 50% 0%, #16264a, #0b1224 70%)", padding: "24px 14px 40px",
    }}>
      {nieuwRol ? (
        <ProfielKaart bestaand={profielen} vasteRol={nieuwRol} onKlaar={maak} onTerug={() => setNieuwRol(null)} />
      ) : (
        <div style={{ maxWidth: 520, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: 28, margin: "4px 0 4px", color: "#fff" }}>Wie oefent er?</h2>
          <p style={{ margin: "0 0 18px", fontSize: 14, color: "rgba(255,255,255,0.6)" }}>Tik op je eigen profiel, of vul een lege plek in.</p>
          {sectie("Kinderen", "kind")}
          {sectie("Ouders of verzorgers", "ouder")}
          {sectie("Leerkracht", "leraar")}

          {verdeling.extra.length > 0 && (
            <div style={{ textAlign: "left", marginTop: 4 }}>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "0 0 6px 2px" }}>Andere profielen op dit apparaat</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {verdeling.extra.map((p) => (
                  <button key={p.naam} type="button" onClick={() => (beheren ? setWeg(p.naam) : kies(p.naam))} style={{ ...knopBasis, padding: "7px 12px", fontSize: 13, borderRadius: 999, border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff" }}>
                    {p.naam}{beheren ? " · weghalen" : ""}
                  </button>
                ))}
              </div>
            </div>
          )}

          {weg && (
            <div role="alertdialog" style={{ marginTop: 16, padding: 14, borderRadius: 14, border: "1px solid rgba(255,138,128,0.5)", background: "rgba(255,138,128,0.08)", color: "#fff", textAlign: "left" }}>
              <b>{weg}</b> weghalen? De voortgang van dit profiel op dit apparaat gaat dan verloren.
              <div style={{ display: "flex", gap: 8, marginTop: 10 }}>
                <button type="button" onClick={() => setWeg(null)} style={{ ...knopBasis, padding: "9px 14px", border: "1px solid rgba(255,255,255,0.2)", background: "transparent", color: "#fff" }}>Nee</button>
                <button type="button" onClick={() => { onVerwijder?.(weg); setWeg(null); setVersie((v) => v + 1); try { track("profiel_weg", {}); } catch { /* */ } }} style={{ ...knopBasis, padding: "9px 14px", border: "none", background: "#ff5252", color: "#fff" }}>Ja, weghalen</button>
              </div>
            </div>
          )}

          <div style={{ display: "flex", justifyContent: "center", gap: 18, marginTop: 18 }}>
            {profielen.length > 0 && (
              <button type="button" onClick={() => { setBeheren((b) => !b); setWeg(null); }} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.65)", textDecoration: "underline", cursor: "pointer", fontSize: 14 }}>
                {beheren ? "Klaar met beheren" : "Profielen beheren"}
              </button>
            )}
            {onSluit && (
              <button type="button" onClick={onSluit} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.65)", textDecoration: "underline", cursor: "pointer", fontSize: 14 }}>Terug</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

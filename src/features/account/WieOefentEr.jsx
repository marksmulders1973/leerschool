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

import { voKeuzes, voLabel, isVoType } from "../../shared/voNiveau.js";
import { useMemo, useState, useEffect, useLayoutEffect, useRef } from "react";
import { AvatarSvg, loadAvatarConfig } from "./avatar.jsx";
import { vakOptiesVoor, wisselVakKeuze, MAX_FAVORIET, MAX_VAKKEN, bewaarVoorkeur, standaardTot } from "../vandaag/voorkeur.js";
import { track } from "../../utils.js";
import { koppelingVoor, bewaarKoppeling, KOPPELING_EVENT } from "../../shared/koppeling.js";
import { koppelGraaf, groepUitNiveau } from "./profielKoppeling.js";
import { leesVoorkeur } from "../vandaag/voorkeur.js";
import supabase from "../../supabase.js";

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

// Basisschool = groep; middelbare school = niveau + leerjaar (Noa 8 okt 2026: "mavo heeft 4 leerjaren,
// havo 5, vwo en gymnasium 6"). Waarde "klas4|havo" → app-niveau "4" + schoolType "havo".
const GROEPEN = [
  { level: "groep12", label: "Groep 1-2" },
  ...[3, 4, 5, 6, 7, 8].map((g) => ({ level: `groep${g}`, label: `Groep ${g}` })),
];
const VO_OPTIES = voKeuzes().flatMap(({ opties }) => opties.map((o) => ({ level: o.value, label: o.label })));
const NIVEAUS = [...GROEPEN, ...VO_OPTIES];
function NiveauOpties() {
  return (
    <>
      <optgroup label="Basisschool">
        {GROEPEN.map((n) => <option key={n.level} value={n.level}>{n.label}</option>)}
      </optgroup>
      {voKeuzes().map(({ type, opties }) => (
        <optgroup key={type.key} label={`Middelbare school: ${type.label}`}>
          {opties.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </optgroup>
      ))}
    </>
  );
}

// Leeftijd → gebruikelijke groep/klas (voorstel, aan te passen).
function niveauBijLeeftijd(l) {
  const n = Number(l);
  if (!n) return "";
  if (n <= 5) return "groep12";
  if (n <= 11) return `groep${n - 3}`;
  return ""; // middelbare school: niveau kiest het kind zelf (mavo, havo, vwo…)
}

// Kliktocht 1 okt 2026: de app bewaart het niveau als los cijfer ("6") + schoolType voor
// de middelbare school (zoals HomePage/Gezinsstart); "groep6" gaf op StudentHome "Groep groep6".
function naarAppNiveau(level) {
  if (level === "groep12") return { level: "2", schoolType: "" };
  const g = (level || "").match(/^groep(\d)$/);
  if (g) return { level: g[1], schoolType: "" };
  const vo = (level || "").match(/^klas(\d)\|([a-z-]+)$/);
  if (vo) return { level: vo[1], schoolType: vo[2] };
  const k = (level || "").match(/^klas(\d)$/);
  if (k) return { level: k[1], schoolType: "havo-vwo" };
  return { level: "", schoolType: "" };
}

const rolWoord = (p) => {
  if (p.role === "ouder") return "ouder of verzorger";
  if (p.role === "teacher") return "leerkracht";
  const niv = NIVEAUS.find((x) => x.level === p.level);
  if (niv) return `leerling · ${niv.label.toLowerCase()}`;
  if (/^\d+$/.test(String(p.level || "")) && isVoType(p.schoolType)) return `leerling · ${voLabel(p.schoolType, p.level).toLowerCase()}`;
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

// `lijntje` (14 okt 2026): "gekoppeld met …" → gekleurde rand + regeltje onder de rol.
// 21 okt 2026: `kleur` = de kleur van de koppeling (ouder 1 oranje, ouder 2 blauw, leerkracht
// paars), dezelfde als de lijntjes. Het actieve profiel houdt zijn groene rand.
function Tegel({ p, actief, onKies, lijntje = "", kleur = "#ffb74d" }) {
  const config = loadAvatarConfig(p.naam);
  return (
    <button
      type="button"
      onClick={onKies}
      data-gekoppeld={lijntje ? "1" : undefined}
      style={{
        ...knopBasis, display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        padding: "12px 6px", width: "100%", minHeight: 138, height: "100%", boxSizing: "border-box",
        border: actief ? "2px solid #00e676" : lijntje ? `2px solid ${kleur}` : "1px solid rgba(255,255,255,0.15)",
        background: actief ? "rgba(0,230,118,0.08)" : lijntje ? `${kleur}14` : "rgba(255,255,255,0.04)", color: "#fff",
      }}
    >
      <span style={{ width: 56, height: 56, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        <AvatarSvg config={config} size={56} />
      </span>
      <span style={{ fontSize: 15, lineHeight: 1.2, wordBreak: "break-word" }}>{p.naam}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 600, color: "rgba(255,255,255,0.6)" }}>{rolWoord(p)}</span>
      {lijntje && (
        <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: kleur, lineHeight: 1.25, wordBreak: "break-word" }}>🔗 {lijntje}</span>
      )}
    </button>
  );
}

function ProfielKaart({ bestaand, onKlaar, onTerug, vasteRol = null }) {
  const [role, setRole] = useState(vasteRol || "leerling");
  const [naam, setNaam] = useState("");
  const [leeftijd, setLeeftijd] = useState("");
  const [level, setLevel] = useState("");
  const [vakken, setVakken] = useState([]);
  const [favoriet, setFavoriet] = useState([]);
  const [meerVakken, setMeerVakken] = useState(false);
  const [fout, setFout] = useState("");

  // 14 okt 2026: alle vakken van de app, passend bij groep of klas; eerst de vijf meest gekozen,
  // "meer vakken" klapt de rest open. Tik = gekozen, nog een tik = ★ favoriet, derde tik = weg.
  const vakOpties = vakOptiesVoor(level);
  const zichtbareVakken = meerVakken ? vakOpties : vakOpties.filter((v) => v.top || vakken.includes(v.id));

  const kiesLeeftijd = (v) => { setLeeftijd(v); if (!level || level === niveauBijLeeftijd(leeftijd)) setLevel(niveauBijLeeftijd(v)); };
  const wisselVak = (id) => { const n = wisselVakKeuze({ vakken, favoriet }, id); setVakken(n.vakken); setFavoriet(n.favoriet); };
  // Andere groep of klas gekozen → vakken die daar niet bij horen vallen weg.
  useEffect(() => {
    const toegestaan = new Set(vakOptiesVoor(level).map((v) => v.id));
    setVakken((cur) => cur.filter((id) => toegestaan.has(id)));
    setFavoriet((cur) => cur.filter((id) => toegestaan.has(id)));
  }, [level]);

  const klaar = () => {
    const n = naam.trim().replace(/\s+/g, " ");
    if (!n) { setFout("Vul een naam in."); return; }
    if (n.length > 20) { setFout("Kies een kortere naam (max 20 tekens)."); return; }
    if (n.toLowerCase() === "speler") { setFout("Kies een eigen naam."); return; }
    if (bestaand.some((p) => p.naam.toLowerCase() === n.toLowerCase())) { setFout("Die naam bestaat al op dit apparaat."); return; }
    const isKlas = /^klas/.test(level);
    const echteRol = role === "leerling" && isKlas ? "student" : role;
    onKlaar({ naam: n, role: echteRol, level: role === "teacher" || role === "ouder" ? (role === "teacher" ? level : "") : level, leeftijd: role === "leerling" ? leeftijd : "", vakken, favoriet });
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
                <NiveauOpties />
              </select>
            </div>
          </div>
          {leeftijd && level === niveauBijLeeftijd(leeftijd) && (
            <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginTop: 4 }}>We stelden de groep voor bij deze leeftijd; klopt het niet, kies dan een andere.</div>
          )}

          <span style={label}>Wat wil je oefenen? <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.45)" }}>(tik = kiezen, nog eens tikken = ★ favoriet)</span></span>
          <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
            ★ {favoriet.length} van {MAX_FAVORIET} favorieten · {vakken.length} van {MAX_VAKKEN} gekozen
            {favoriet.length >= MAX_FAVORIET ? " · sterren vol: tik op een ster om die weg te halen" : ""}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {zichtbareVakken.map((v) => {
              const fav = favoriet.includes(v.id);
              const aan = vakken.includes(v.id);
              return (
                <button key={v.id} type="button" onClick={() => wisselVak(v.id)} aria-pressed={aan} style={{
                  ...knopBasis, padding: "9px 14px", fontSize: 14, borderRadius: 999,
                  border: fav ? "2px solid #ffd54f" : aan ? "2px solid #00e676" : "1px solid rgba(255,255,255,0.18)",
                  background: fav ? "rgba(255,213,79,0.16)" : aan ? "rgba(0,230,118,0.12)" : "rgba(255,255,255,0.04)", color: "#fff",
                }}>{fav ? "★ " : aan ? "✓ " : ""}{v.label}</button>
              );
            })}
            {!meerVakken && zichtbareVakken.length < vakOpties.length && (
              <button type="button" onClick={() => setMeerVakken(true)} style={{ ...knopBasis, padding: "9px 14px", fontSize: 14, borderRadius: 999, border: "1px dashed rgba(255,255,255,0.35)", background: "transparent", color: "rgba(255,255,255,0.85)" }}>
                + meer vakken ({vakOpties.length - zichtbareVakken.length})
              </button>
            )}
          </div>
        </>
      )}

      {role === "teacher" && (
        <>
          <label style={label} htmlFor="wie-klas">Welke groep geef je les? <span style={{ fontWeight: 500, color: "rgba(255,255,255,0.45)" }}>(mag leeg)</span></label>
          <select id="wie-klas" style={veld} value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">Kies…</option>
            <NiveauOpties />
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

// 〰️ Koppel-lijntjes tussen de tegels (Mark 21 okt 2026: "kunnen er lijntjes lopen tussen de
// mensen wie met wie gekoppeld is"). Gebogen lijn van de onderkant van de volwassene naar de
// bovenkant van het kind, in de kleur van die volwassene. Start- en eindpunt liggen op de
// tegelranden en de controlepunten in de tussenruimte, dus de lijn loopt nooit door een tegel.
// Gekoppeld met iemand die hier geen profiel heeft ("thuis", "school"): een kort stippellijntje
// boven het kind met een open rondje; de tekst op de tegel zegt met wie.
// Alles wordt gemeten na het tekenen en opnieuw bij elke maatverandering (draaien, lettertype).
const LIJN_AFSTAND = 12; // px tussen lijnen die uit dezelfde tegel komen of erin aankomen
function spreid(i, n) { return (i - (n - 1) / 2) * LIJN_AFSTAND; }
function KoppelLijnen({ boxRef, lijnen, extern, kleur }) {
  const [geo, setGeo] = useState(null);
  useLayoutEffect(() => {
    const box = boxRef.current;
    if (!box) return undefined;
    const meet = () => {
      const b = box.getBoundingClientRect();
      const r = {};
      box.querySelectorAll("[data-tegel]").forEach((el) => {
        // De kaart zelf meten (eerste kind), niet de rastercel: die kan hoger zijn dan de kaart.
        const q = (el.firstElementChild || el).getBoundingClientRect();
        r[el.getAttribute("data-tegel")] = { x: q.left - b.left, y: q.top - b.top, w: q.width, h: q.height };
      });
      const nieuw = { w: Math.round(b.width), h: Math.round(b.height), r };
      setGeo((oud) => (JSON.stringify(oud) === JSON.stringify(nieuw) ? oud : nieuw));
    };
    meet();
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(meet) : null;
    if (ro) ro.observe(box);
    window.addEventListener("resize", meet);
    const t = setTimeout(meet, 400); // na het laden van lettertype en poppetjes
    return () => { if (ro) ro.disconnect(); window.removeEventListener("resize", meet); clearTimeout(t); };
  }, [boxRef, lijnen, extern]);
  if (!geo || (!lijnen.length && !extern.length)) return null;
  const k = (n) => String(n || "").trim().toLowerCase();
  const R = geo.r;
  // Volgorde van de lijnen per tegel op x-positie, zodat ze elkaar zo min mogelijk kruisen.
  const zichtbaar = lijnen.filter((l) => R[k(l.van)] && R[k(l.naar)] && R[k(l.van)].y + R[k(l.van)].h <= R[k(l.naar)].y);
  const uit = new Map(), aan = new Map();
  for (const l of zichtbaar) {
    (uit.get(k(l.van)) || uit.set(k(l.van), []).get(k(l.van))).push(l);
    (aan.get(k(l.naar)) || aan.set(k(l.naar), []).get(k(l.naar))).push({ l });
  }
  for (const e of extern) if (R[k(e.kind)]) (aan.get(k(e.kind)) || aan.set(k(e.kind), []).get(k(e.kind))).push({ e });
  for (const [, lijst] of uit) lijst.sort((a, b2) => R[k(a.naar)].x - R[k(b2.naar)].x);
  for (const [, lijst] of aan) lijst.sort((a, b2) => (a.e ? 1 : 0) - (b2.e ? 1 : 0) || (a.l && b2.l ? R[k(a.l.van)].x - R[k(b2.l.van)].x : 0));
  const paden = [];
  for (const l of zichtbaar) {
    const A = R[k(l.van)], K = R[k(l.naar)];
    const ul = uit.get(k(l.van)), al = aan.get(k(l.naar));
    const x1 = A.x + A.w / 2 + spreid(ul.indexOf(l), ul.length), y1 = A.y + A.h;
    const x2 = K.x + K.w / 2 + spreid(al.findIndex((x) => x.l === l), al.length), y2 = K.y;
    const ym = (y1 + y2) / 2;
    paden.push({ sleutel: `${k(l.van)}>${k(l.naar)}`, d: `M ${x1} ${y1} C ${x1} ${ym}, ${x2} ${ym}, ${x2} ${y2}`, x1, y1, x2, y2, kleur: kleur.get(k(l.van)) || "#ffb74d" });
  }
  const stompjes = [];
  for (const e of extern) {
    const K = R[k(e.kind)];
    if (!K) continue;
    const al = aan.get(k(e.kind));
    const x = K.x + K.w / 2 + spreid(al.findIndex((x2) => x2.e === e), al.length);
    stompjes.push({ sleutel: `${k(e.kind)}~${e.soort}`, x, y1: K.y - 10, y2: K.y, kleur: e.soort === "leraar" ? "#ce93d8" : "#ffb74d" });
  }
  return (
    <svg aria-hidden="true" data-koppel-lijnen={paden.length} width={geo.w} height={geo.h}
      style={{ position: "absolute", left: 0, top: 0, zIndex: 1, pointerEvents: "none", overflow: "visible" }}>
      {paden.map((p) => (
        <g key={p.sleutel}>
          <path d={p.d} fill="none" stroke={p.kleur} strokeWidth={2.5} strokeLinecap="round" opacity={0.9} />
          <circle cx={p.x1} cy={p.y1} r={3.5} fill={p.kleur} />
          <circle cx={p.x2} cy={p.y2} r={3.5} fill={p.kleur} />
        </g>
      ))}
      {stompjes.map((s) => (
        <g key={s.sleutel}>
          <line x1={s.x} y1={s.y1} x2={s.x} y2={s.y2} stroke={s.kleur} strokeWidth={2} strokeDasharray="3 3" opacity={0.85} />
          <circle cx={s.x} cy={s.y1} r={4} fill="#0f1a33" stroke={s.kleur} strokeWidth={2} />
        </g>
      ))}
    </svg>
  );
}

function LegePlek({ plek, onKlik }) {
  return (
    <button type="button" onClick={onKlik} aria-label={`${plek.label}: nog invullen`} style={{
      ...knopBasis, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, padding: "12px 6px", width: "100%", minHeight: 138, height: "100%", boxSizing: "border-box",
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

// 🔗 Dik blok "Koppelen" onder de profielen (Mark 14 okt 2026: "nu zie ik mijn
// naam en die van Brian, maar niet dat ik kan koppelen — maak dat jip-en-janneke").
// 1) Staan ouder én kind op dít toestel en is de ouder ingelogd: één tik
//    "Koppel Brian aan Mark" (gezin_koppel_zelfde_apparaat, verified) → lijntje.
//    Niet ingelogd: dezelfde knop legt uit dat je eenmalig inlogt (knop → /ouder).
// 2) Altijd: twee grote knoppen — ik ben de ouder / ik ben het kind → /koppelen.
function KoppelBlok({ kandidaten, authUser, iemandGekoppeld, onGekoppeld }) {
  const [bezig, setBezig] = useState(null);
  const [melding, setMelding] = useState(null); // { tekst, soort: "ok" | "login" | "fout" }
  const ingelogd = !!authUser?.id && !authUser.is_anonymous;
  const groot = (extra) => ({ ...knopBasis, display: "block", width: "100%", padding: "14px 12px", fontSize: 16, border: "none", color: "#08121f", textAlign: "left", ...extra });
  const tikKoppel = async ({ kind, ouder }) => {
    try { track("koppel_blok_klik", { wat: "zelfde_toestel", ingelogd }); } catch { /* */ }
    if (!ingelogd) { setMelding({ soort: "login", tekst: `Log eerst één keer in als ouder (Google of e-mail). Daarna koppel je ${kind} met één tik.` }); return; }
    setBezig(kind); setMelding(null);
    try {
      let v = {}; try { v = leesVoorkeur(kind) || {}; } catch { /* */ }
      let level = ""; try { level = (JSON.parse(localStorage.getItem(`lk_profiel:${kind}`) || "{}") || {}).level || ""; } catch { /* */ }
      const { data, error } = await supabase.rpc("gezin_koppel_zelfde_apparaat", { p_child_name: kind, p_groep: v.groep || groepUitNiveau(level), p_voorkeur: v.voorkeur || null, p_verified: true });
      if (error || !data) throw error || new Error("geen link");
      bewaarKoppeling({ naam: kind, linkId: data, rol: "ouder", vanWie: ouder });
      try { track("koppel_blok_ok", { via: "zelfde_toestel" }); } catch { /* */ }
      setMelding({ soort: "ok", tekst: `Gelukt! ${kind} is gekoppeld aan ${ouder}.` });
      onGekoppeld?.();
    } catch {
      setMelding({ soort: "fout", tekst: "Dat lukte niet. Probeer het zo nog eens, of ga via de knop hieronder." });
    }
    setBezig(null);
  };
  const ga = (wat, pad) => { try { track("koppel_blok_klik", { wat }); } catch { /* */ } window.location.href = pad; };
  return (
    <div data-koppel-blok style={{ textAlign: "left", marginTop: 6, marginBottom: 18, padding: "14px 14px 12px", borderRadius: 16, border: "2px solid #ffb74d", background: "rgba(255,183,77,0.10)" }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 2 }}>🔗 {iemandGekoppeld ? "Nog iemand koppelen?" : "Koppelen"}</div>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.45, marginBottom: 10 }}>Gekoppeld = de ouder ziet hoe het gaat en kan werk klaarzetten.</div>
      {kandidaten.map((k) => (
        <button key={k.kind + "|" + k.ouder} type="button" disabled={bezig === k.kind} onClick={() => tikKoppel(k)} data-koppel-tik={k.kind}
          style={groot({ background: "#ffb74d", marginBottom: 8, opacity: bezig === k.kind ? 0.6 : 1 })}>
          {bezig === k.kind ? "Even…" : <>Koppel <b>{k.kind}</b> aan <b>{k.ouder}</b> →</>}
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "rgba(0,0,0,0.6)", marginTop: 2 }}>{ingelogd ? "Allebei op deze telefoon: één tik, geen code nodig." : "Allebei op deze telefoon — na één keer inloggen als ouder is dit één tik."}</div>
        </button>
      ))}
      {melding && (
        <div role={melding.soort === "fout" ? "alert" : "status"} data-koppel-melding style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.45, padding: "9px 12px", borderRadius: 10, marginBottom: 8, color: "#fff", background: melding.soort === "ok" ? "rgba(0,230,118,0.15)" : "rgba(255,255,255,0.08)", border: `1px solid ${melding.soort === "ok" ? "rgba(0,230,118,0.5)" : "rgba(255,255,255,0.2)"}` }}>
          {melding.tekst}
          {melding.soort === "login" && <div style={{ marginTop: 6 }}><button type="button" onClick={() => ga("login", "/ouder")} style={{ ...knopBasis, padding: "9px 14px", border: "none", background: "#00b0ff", color: "#08121f", fontSize: 14 }}>Inloggen als ouder →</button></div>}
        </div>
      )}
      <div style={{ display: "grid", gap: 8 }}>
        <button type="button" onClick={() => ga("ouder", "/koppelen?rol=ouder")} data-koppel-ouder style={groot({ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.25)" })}>
          👪 Ik ben de ouder — mijn kind oefent op een ander toestel
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Je krijgt een code die je kind intypt.</div>
        </button>
        <button type="button" onClick={() => ga("kind", "/koppelen")} data-koppel-kind style={groot({ background: "rgba(255,255,255,0.08)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.25)" })}>
          🧒 Ik ben het kind — ik heb een code van thuis
          <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginTop: 2 }}>Code intypen, naam kiezen, klaar.</div>
        </button>
      </div>
    </div>
  );
}

export default function WieOefentEr({ huidigeNaam, onKies, onSluit, onVerwijder, startNieuw = false, startRol = null, authUser = null }) {
  const [versie, setVersie] = useState(0);
  const profielen = useMemo(() => leesProfielen(), [versie]); // eslint-disable-line react-hooks/exhaustive-deps
  // 🔗 Koppelingen (14 okt, herbouwd 21 okt 2026): één bron van waarheid, koppelGraaf
  // (profielKoppeling.js, met tests). Wat dit toestel weet + voor een ingelogde ouder de
  // bevestigde kinderen van het account (met link-id, voor de sync hieronder).
  const ingelogd = !!authUser?.id && !authUser.is_anonymous;
  const [accountKinderen, setAccountKinderen] = useState([]);
  useEffect(() => {
    if (!ingelogd) { setAccountKinderen([]); return; }
    let cancel = false;
    supabase.from("parent_child_links").select("id, child_name, verified").eq("parent_user_id", authUser.id)
      .then(({ data }) => { if (!cancel) setAccountKinderen((data || []).filter((c) => c.verified === true && (c.child_name || "").trim()).map((c) => ({ naam: c.child_name.trim(), linkId: c.id }))); })
      .catch(() => { if (!cancel) setAccountKinderen([]); });
    return () => { cancel = true; };
  }, [authUser, ingelogd]);
  // Toestel-koppelingen veranderen (één-tik, sync, /koppelen) → opnieuw rekenen.
  useEffect(() => {
    const opnieuw = () => setVersie((v) => v + 1);
    window.addEventListener(KOPPELING_EVENT, opnieuw);
    return () => window.removeEventListener(KOPPELING_EVENT, opnieuw);
  }, []);
  const graaf = useMemo(
    () => koppelGraaf(profielen, koppelingVoor, { ingelogd, accountKinderen, huidigeNaam }),
    [profielen, accountKinderen, ingelogd, huidigeNaam, versie], // eslint-disable-line react-hooks/exhaustive-deps
  );
  // Account kent een koppeling die dit toestel nog niet kent → vastleggen op het toestel
  // (precies wat de één-tik-knop doet; de server geeft dan hetzelfde link-id). Daarna draagt
  // het oefenwerk van dit kind het link-id mee en ziet de ouder het in het dashboard.
  const gesynct = useRef(new Set());
  useEffect(() => {
    for (const s of graaf.sync) {
      const sleutel = `${s.kind.toLowerCase()}|${s.linkId}`;
      if (gesynct.current.has(sleutel)) continue;
      gesynct.current.add(sleutel);
      bewaarKoppeling({ naam: s.kind, linkId: s.linkId, rol: "ouder", vanWie: s.vanWie });
      try { track("koppeling_sync_account", { aantal: graaf.sync.length }); } catch { /* */ }
    }
  }, [graaf.sync]);
  const lijntjes = graaf.labels;
  const rasterRef = useRef(null);
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

  const maak = ({ naam, role, level, leeftijd, vakken, favoriet = [] }) => {
    try {
      const app = naarAppNiveau(level);
      localStorage.setItem(`lk_profiel:${naam}`, JSON.stringify({ role, level: app.level, schoolType: app.schoolType, leeftijd: leeftijd || "", aangemaakt: Date.now() }));
      const lijst = JSON.parse(localStorage.getItem("lk_namen") || "[]").filter((x) => x !== naam);
      lijst.unshift(naam);
      localStorage.setItem("lk_namen", JSON.stringify(lijst.slice(0, 8)));
      // Zelfde groep-vorm als Gezinsstart: "6" (getal als tekst), brugklas voor klas 1.
      const groepVoorkeur = /^groep12$/.test(level) ? "2" : (level.match(/^groep(\d)$/) || [])[1] || (/^klas1(\||$)/.test(level) ? "brugklas" : null);
      if (vakken.length) bewaarVoorkeur(naam, { groep: groepVoorkeur, voorkeur: { vakken, favoriet, vrij: "", tot: standaardTot(), app_kiest: false } });
    } catch { /* */ }
    try { track("profiel_aangemaakt", { rol: role, leeftijd: !!leeftijd, groep: !!level, vakken: vakken.length, favoriet: favoriet.length, aantal: profielen.length + 1 }); } catch { /* */ }
    onKies(naam);
  };

  const kies = (naam) => {
    try { track("profiel_wissel", { via: "wie_oefent_er" }); } catch { /* */ }
    onKies(naam);
  };

  const sectie = (titel, groepen) => {
    const items = verdeling.plekken.filter((x) => groepen.includes(x.plek.groep));
    const onderLijnen = groepen.includes("kind") && (graaf.lijnen.length > 0 || graaf.extern.length > 0);
    return (
      <div style={{ marginBottom: 18 }}>
        <div style={{ textAlign: "left", margin: `0 0 ${onderLijnen ? 20 : 8}px 2px` }}>
          {/* Kop boven de kinderen: pilletje met achtergrond, de koppel-lijntjes lopen erachter langs;
              met lijnen wat meer ruimte, zodat een stippellijntje ("thuis", "school") niet wegvalt. */}
          <span style={{ position: "relative", zIndex: 2, display: "inline-block", fontSize: 12, fontWeight: 800, letterSpacing: 0.6, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", ...(onderLijnen ? { padding: "2px 10px", marginLeft: -4, borderRadius: 999, background: "#16233f", border: "1px solid rgba(255,255,255,0.10)" } : {}) }}>{titel}</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {items.map(({ plek, profiel }, i) => (
            <div key={plek.label + i} data-tegel={profiel ? profiel.naam.trim().toLowerCase() : undefined} style={{ position: "relative", zIndex: 2 }}>
              {profiel
                ? <Tegel p={profiel} actief={profiel.naam === huidigeNaam} lijntje={lijntjes.get(profiel.naam.trim().toLowerCase()) || ""} kleur={graaf.kleur.get(profiel.naam.trim().toLowerCase())} onKies={() => (beheren ? setWeg(profiel.naam) : kies(profiel.naam))} />
                : (!beheren && <LegePlek plek={plek} onKlik={() => { try { track("profiel_plek_invullen", { groep: plek.groep }); } catch { /* */ } setNieuwRol(plek.rol); }} />)}
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
          {/* Mark 14 okt 2026: ouders + leerkracht bovenaan in één rij, kinderen eronder. */}
          <div ref={rasterRef} style={{ position: "relative" }}>
            <KoppelLijnen boxRef={rasterRef} lijnen={graaf.lijnen} extern={graaf.extern} kleur={graaf.kleur} />
            {sectie("Ouders, verzorgers en leerkracht", ["ouder", "leraar"])}
            {sectie("Kinderen", ["kind"])}
          </div>
          {!beheren && profielen.length > 0 && (
            <KoppelBlok kandidaten={graaf.kandidaten} authUser={authUser} iemandGekoppeld={lijntjes.size > 0} onGekoppeld={() => setVersie((v) => v + 1)} />
          )}

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

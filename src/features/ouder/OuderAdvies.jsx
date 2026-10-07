// 🧭 Ouderadvies — PROTOTYPE (7 okt 2026), alleen via /ouderadvies?proto=1.
//
// Doel: de ouder-kind-koppeling en wat de ouder of verzorger ziet het beste
// onderdeel van de app maken. Geen chat: de app doet korte voorstellen.
// Werkt in drie gezinssituaties:
//  (a) ZELFDE APPARAAT — kinderprofielen, wisselen zonder inloggen; het
//      ouderdeel zit achter een drempel (som of pincode).
//  (b) KOPPELCODE — kind op eigen telefoon tikt de code in, klaar.
//  (c) SCHOOL — kind tikt de kind-sleutel in op een schoolcomputer en gaat
//      verder waar het thuis bleef; "vergeet mij" haalt het weer van die computer.
// Niets hiervan staat in de navigatie. Teksten: docs/audit/OUDERADVIES-TEKSTEN.md.
import { useEffect, useState } from "react";
import supabase from "../../supabase.js";
import { linkIdVoor } from "../../shared/koppeling.js";
import { claimKoppelcode, normaliseerKoppelcode } from "../../shared/koppelcode.js";
import { haalLeerpadVoortgangVoorKind } from "./kindData.js";
import { zetKindOpDitApparaat } from "./Gezinsstart.jsx";
import NulmetingFlow from "./ouderadvies/NulmetingFlow.jsx";
import OuderVoorstellen from "./ouderadvies/OuderVoorstellen.jsx";
import { haalStand, haalStandOuder, leesKeuzes, leesLokaal } from "./ouderadvies/opslag.js";
import { teksten } from "./ouderadvies/teksten.js";
import { GROEPEN } from "./ouderadvies/nulmeting.js";
import { maakSom, heeftPin, zetPin, pinKlopt, markeerOpen, isOpen, sluit } from "./ouderadvies/drempel.js";
import { koppelMetSleutel, lijktKindSleutel, haalKindSleutel } from "./ouderadvies/kindsleutel.js";
import { F } from "./ouderadvies/ui.jsx";
import { track } from "../../utils.js";

export { ouderadviesZichtbaar } from "./ouderadvies/vlag.js";

function profielGroep(naam) {
  try {
    const p = JSON.parse(localStorage.getItem(`lk_profiel:${naam}`) || "{}");
    if (p.role === "ouder" || p.role === "teacher" || p.role === "leerkracht") return null;
    if (p.role === "student" && String(p.level) === "1") return "brugklas";
    return GROEPEN.includes(String(p.level)) ? String(p.level) : null;
  } catch { return null; }
}

function profielenOpApparaat() {
  try {
    const namen = JSON.parse(localStorage.getItem("lk_namen") || "[]");
    return namen.map((n) => ({ naam: n, groep: profielGroep(n) })).filter((p) => p.groep);
  } catch { return []; }
}

/** learn_progress-rijen → voortgang per gekozen pad, alleen stappen ná het voorstel. */
function naarWeekVoortgang(perPad, keuzes) {
  const uit = {};
  for (const k of keuzes) {
    const p = perPad?.[k.padId];
    if (!p) continue;
    const sinds = k.at || 0;
    let stappen = 0; let goed = 0; let fout = 0;
    for (const s of Object.values(p.perStap || {})) {
      if (s.wanneer && s.wanneer.getTime() < sinds) continue;
      stappen += 1;
      if (Array.isArray(s.fouten)) s.fouten.forEach((f) => (f > 0 ? fout++ : goed++));
      else if ((s.pogingen || 1) > 1) fout++; else goed++;
    }
    if (stappen) uit[k.padId] = { stappenGedaan: stappen, goed, fout };
  }
  return uit;
}

async function lokaleVoortgang(naam) {
  // Zelfde apparaat: het kind oefent met dezelfde (anonieme) sessie; RLS laat
  // die sessie z'n eigen learn_progress-rijen lezen.
  try {
    const { data } = await supabase.from("learn_progress").select("learn_path_id, step_idx, attempts, completed_at, check_fouten").eq("player_name", naam).limit(400);
    const perPad = {};
    for (const r of data || []) {
      const p = (perPad[r.learn_path_id] ||= { perStap: {} });
      p.perStap[r.step_idx] = { wanneer: r.completed_at ? new Date(r.completed_at) : null, pogingen: r.attempts || 1, fouten: Array.isArray(r.check_fouten) ? r.check_fouten : null };
    }
    return perPad;
  } catch { return {}; }
}

// ── Drempel ──────────────────────────────────────────────────────────────
function Drempel({ T, onOpen, onTerug }) {
  const [som] = useState(() => maakSom());
  const [pin] = useState(() => heeftPin());
  const [invoer, setInvoer] = useState("");
  const [fout, setFout] = useState(false);
  const check = async (e) => {
    e?.preventDefault?.();
    const ok = pin ? await pinKlopt(invoer) : Number(invoer) === som.antwoord;
    if (ok) { markeerOpen(); onOpen(); try { track("ouderadvies_drempel", { ok: 1, pin: pin ? 1 : 0 }); } catch { /* */ } }
    else { setFout(true); setInvoer(""); try { track("ouderadvies_drempel", { ok: 0, pin: pin ? 1 : 0 }); } catch { /* */ } }
  };
  return (
    <form onSubmit={check} style={F.kaart} data-drempel={pin ? "pin" : "som"}>
      <div style={F.kop}>{T.profielen.drempelKop}</div>
      <div style={F.tekst}>{pin ? T.profielen.drempelPinUitleg : T.profielen.drempelUitleg}</div>
      {!pin && <div style={{ ...F.kop, fontSize: 26, textAlign: "center" }} data-som>{som.vraag} = ?</div>}
      <input value={invoer} onChange={(e) => setInvoer(e.target.value.replace(/\D/g, ""))} inputMode="numeric" autoComplete="off" type={pin ? "password" : "text"} maxLength={pin ? 4 : 5} style={{ ...F.input, textAlign: "center", fontSize: 20, letterSpacing: 4 }} aria-label={pin ? "Pincode" : "Antwoord"} />
      {fout && <div style={F.fout}>{T.profielen.drempelFout}</div>}
      <button type="submit" style={F.primair(!invoer)} disabled={!invoer}>Verder</button>
      <button type="button" onClick={onTerug} style={F.secundair}>{T.profielen.terugNaarKind}</button>
      <div style={{ ...F.sub, marginTop: 10 }}>{T.profielen.pinNoot}</div>
    </form>
  );
}

function PinInstellen({ T }) {
  const [pin, setPin] = useState("");
  const [klaar, setKlaar] = useState(false);
  if (klaar) return <div style={F.ok}>✓ Pincode bewaard op dit apparaat.</div>;
  return (
    <div style={F.kaartRustig}>
      <div style={F.sub}>{T.profielen.pinInstellen}</div>
      <div style={{ display: "flex", gap: 8 }}>
        <input value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, "").slice(0, 4))} inputMode="numeric" type="password" placeholder="4 cijfers" style={{ ...F.input, flex: 1 }} aria-label="Nieuwe pincode" />
        <button type="button" disabled={pin.length !== 4} onClick={async () => setKlaar(await zetPin(pin))} style={{ ...F.primair(pin.length !== 4), width: "auto", marginTop: 0, padding: "0 14px" }}>{T.profielen.pinOpslaan}</button>
      </div>
    </div>
  );
}

// 🏫 Mark 7 okt 2026: "voor school nog nee" — de kind-sleutel (situatie c) staat UIT.
// De code blijft staan voor later; alleen de knoppen/teksten zijn verborgen.
const SCHOOL_AAN = false;

// ── Kind-sleutel (ouder, situatie c) ────────────────────────────────────
function KindSleutelBlok({ naam, linkId }) {
  const T = teksten("7", naam);
  const [s, setS] = useState(null);
  const haal = async (nieuw) => setS(await haalKindSleutel(linkId, { nieuw }));
  return (
    <div style={F.kaartRustig} data-kindsleutel>
      <div style={F.kopKlein}>{T.koppelen.schoolKop}</div>
      <div style={F.sub}>{T.koppelen.schoolUitleg}</div>
      {!s && <button type="button" onClick={() => haal(false)} style={F.secundair}>Toon de kind-sleutel</button>}
      {s?.ok && (
        <>
          <div style={{ ...F.kop, textAlign: "center", letterSpacing: 5, color: "#00b0ff" }}>{s.sleutel}</div>
          <button type="button" onClick={() => haal(true)} style={F.link}>Vervang door een nieuwe sleutel (de oude werkt dan niet meer)</button>
        </>
      )}
      {s && !s.ok && <div style={F.fout}>{s.fout === "niet-beschikbaar" ? "De kind-sleutel is een voorstel en staat nog niet live (zie het verslag)." : "Het lukte nu niet. Probeer het zo nog eens."}</div>}
    </div>
  );
}

// ── Startscherm: wie oefent er? ─────────────────────────────────────────
function WieOefent({ profielen, onKies, onOuder, onToegevoegd }) {
  const T = teksten("7", "");
  const [nieuw, setNieuw] = useState(false);
  const [naam, setNaam] = useState("");
  const [groep, setGroep] = useState("");
  const [codeOpen, setCodeOpen] = useState(false);
  const [code, setCode] = useState("");
  const [codeNaam, setCodeNaam] = useState("");
  const [openbaar, setOpenbaar] = useState(false);
  const [bezig, setBezig] = useState(false);
  const [melding, setMelding] = useState(null);

  const voegToe = () => {
    const n = naam.trim();
    if (!n || !groep) return;
    zetKindOpDitApparaat({ naam: n, groep, linkId: null, voorkeur: null });
    setNieuw(false); setNaam(""); setGroep("");
    onToegevoegd?.();
    try { track("ouderadvies_profiel_toegevoegd", { groep }); } catch { /* */ }
  };

  const koppel = async (e) => {
    e?.preventDefault?.();
    setBezig(true); setMelding(null);
    const kind = codeNaam.trim();
    const r = lijktKindSleutel(code)
      ? await koppelMetSleutel(code, kind, { openbaar })
      : await claimKoppelcode(code, kind);
    setBezig(false);
    if (r.ok) {
      const n = r.naam || r.childName || kind;
      const g = r.groep || profielGroep(n) || groep || "7";
      zetKindOpDitApparaat({ naam: n, groep: g, linkId: null });
      setMelding({ ok: true, tekst: `Gelukt! ${n} is gekoppeld.` });
      onToegevoegd?.();
      try { track("ouderadvies_gekoppeld", { soort: lijktKindSleutel(code) ? "sleutel" : "code", openbaar: openbaar ? 1 : 0 }); } catch { /* */ }
    } else {
      const map = { leeg: T.koppelen.fout.leeg, verlopen: T.koppelen.fout.verlopen, alGekoppeld: T.koppelen.fout.alGekoppeld, geenVerbinding: T.koppelen.fout.geenVerbinding, "niet-beschikbaar": "Deze soort code (8 tekens, kind-sleutel) is een voorstel en werkt nog niet." };
      setMelding({ ok: false, tekst: map[r.fout] || T.koppelen.fout.geenVerbinding });
    }
  };

  return (
    <div>
      <div style={F.kop}>{T.profielen.kop}</div>
      <div style={F.sub}>{T.profielen.sub}</div>
      {profielen.map((p) => (
        <button key={p.naam} type="button" onClick={() => onKies(p)} style={{ ...F.optie, display: "flex", justifyContent: "space-between", alignItems: "center" }} data-profiel={p.naam}>
          <span style={{ fontWeight: 700 }}>{p.naam}</span>
          <span style={{ ...F.sub, margin: 0 }}>{p.groep === "brugklas" ? "brugklas" : `groep ${p.groep}`}</span>
        </button>
      ))}
      {!nieuw ? (
        <button type="button" onClick={() => setNieuw(true)} style={F.secundair} data-kind-toevoegen>+ {T.profielen.kindToevoegen}</button>
      ) : (
        <div style={{ ...F.kaartRustig, marginTop: 10 }}>
          <input value={naam} onChange={(e) => setNaam(e.target.value)} maxLength={30} placeholder={T.profielen.naamLabel} aria-label={T.profielen.naamLabel} style={F.input} />
          <div style={{ ...F.sub, margin: "10px 0 6px" }}>{T.profielen.groepLabel}</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {GROEPEN.map((g) => <button key={g} type="button" onClick={() => setGroep(g)} aria-pressed={groep === g} style={F.chip(groep === g)}>{g === "brugklas" ? "Brugklas" : `Groep ${g}`}</button>)}
          </div>
          <button type="button" onClick={voegToe} disabled={!naam.trim() || !groep} style={F.primair(!naam.trim() || !groep)}>{T.profielen.opslaan}</button>
        </div>
      )}

      {!codeOpen ? (
        <button type="button" onClick={() => setCodeOpen(true)} style={F.link} data-code-open>{SCHOOL_AAN ? "Code gekregen van thuis? (eigen telefoon of schoolcomputer)" : "Code gekregen van thuis? (eigen telefoon)"}</button>
      ) : (
        <form onSubmit={koppel} style={{ ...F.kaartRustig, marginTop: 10 }} data-code-form>
          <input value={codeNaam} onChange={(e) => setCodeNaam(e.target.value)} placeholder="Jouw voornaam" aria-label="Jouw voornaam" style={F.input} />
          <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="CODE" aria-label="Code" maxLength={11} autoComplete="off" spellCheck={false} style={{ ...F.input, marginTop: 8, letterSpacing: 3, textAlign: "center" }} />
          {SCHOOL_AAN && (
            <label style={{ ...F.sub, display: "flex", gap: 8, alignItems: "center", marginTop: 8 }}>
              <input type="checkbox" checked={openbaar} onChange={(e) => setOpenbaar(e.target.checked)} /> Dit is een computer van school (niet van mij)
            </label>
          )}
          <button type="submit" disabled={bezig || normaliseerKoppelcode(code).length < 4 || !codeNaam.trim()} style={F.primair(bezig || normaliseerKoppelcode(code).length < 4 || !codeNaam.trim())}>{bezig ? "Even…" : "Koppel"}</button>
          {melding && <div style={melding.ok ? F.ok : F.fout} data-koppel-melding={melding.ok ? "ok" : "fout"}>{melding.tekst}</div>}
        </form>
      )}

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 18, paddingTop: 12 }}>
        <button type="button" onClick={onOuder} style={F.secundair} data-ouder-knop>🔒 {T.profielen.ouderKnop}</button>
      </div>
    </div>
  );
}

// ── Ouderweergave ───────────────────────────────────────────────────────
function OuderWeergave({ authUser, profielen, onLaatBeginnen, demo }) {
  const ouderAccount = !!authUser && !authUser.is_anonymous;
  const [kinderen, setKinderen] = useState(null);
  const T = teksten("7", "");

  useEffect(() => {
    let weg = false;
    (async () => {
      const lijst = [];
      // Kinderen van het ouder-account (situatie b en c).
      if (ouderAccount) {
        const { data } = await supabase.rpc("gezin_overzicht").then((r) => r).catch(() => ({ data: null }));
        for (const k of data?.kinderen || []) {
          if (!k.gekoppeld) continue;
          const st = await haalStandOuder(k.link_id);
          const lok = leesLokaal(k.naam);
          const blokken = { ...lok.blokken, ...st.blokken };
          const keuzes = leesKeuzes(k.naam);
          const perPad = keuzes.length ? await haalLeerpadVoortgangVoorKind({ id: k.link_id, child_name: k.naam }) : {};
          lijst.push({ naam: k.naam, groep: k.groep || profielGroep(k.naam) || "7", linkId: k.link_id, blokken, server: st.server, voortgang: keuzes.length ? naarWeekVoortgang(perPad, keuzes) : null, opDitApparaat: !!profielGroep(k.naam) });
        }
      }
      // Kinderprofielen op dit apparaat (situatie a), zonder dubbele.
      for (const p of profielen) {
        if (lijst.some((x) => x.naam.toLowerCase() === p.naam.toLowerCase())) continue;
        const st = await haalStand(p.naam);
        const keuzes = leesKeuzes(p.naam);
        const voortgang = keuzes.length ? naarWeekVoortgang(await lokaleVoortgang(p.naam), keuzes) : null;
        lijst.push({ naam: p.naam, groep: p.groep, linkId: linkIdVoor(p.naam), blokken: st.blokken, server: st.server, voortgang, opDitApparaat: true });
      }
      if (!weg) setKinderen(lijst);
    })();
    return () => { weg = true; };
  }, [ouderAccount, profielen.length]); // eslint-disable-line react-hooks/exhaustive-deps

  if (demo) return demo;
  if (!kinderen) return <div style={F.sub}>Even laden…</div>;
  return (
    <div>
      <div style={F.kop}>{T.ouder.paginaTitel}</div>
      <div style={F.tekst}>{T.ouder.intro}</div>
      {!kinderen.length && <div style={F.kaartRustig}><div style={F.tekst}>Er staat nog geen kind op dit apparaat. Ga terug en tik op "Kind toevoegen".</div></div>}
      {kinderen.map((k) => (
        <div key={k.naam} style={{ marginBottom: 22 }} data-ouder-kind={k.naam}>
          <div style={{ ...F.stapje, marginBottom: 6 }}>{k.naam} · {k.groep === "brugklas" ? "brugklas" : `groep ${k.groep}`}</div>
          <OuderVoorstellen naam={k.naam} groep={k.groep} blokken={k.blokken} linkId={k.linkId} ouderAccount={ouderAccount} voortgang={k.voortgang} opDitApparaat={k.opDitApparaat} onLaatBeginnen={k.opDitApparaat ? () => onLaatBeginnen({ naam: k.naam, groep: k.groep }) : null} />
          {SCHOOL_AAN && ouderAccount && k.linkId && <KindSleutelBlok naam={k.naam} linkId={k.linkId} />}
        </div>
      ))}
      <PinInstellen T={T} />
    </div>
  );
}

// ── Voorbeeld (alleen ?demo=week): het wekelijkse vervolg met nepdata ──
function demoWeek() {
  const nu = Date.now() - 6 * 86400000;
  const blokken = {
    1: { blok: 1, vak: "rekenen", uitslag: "wankel", concepten: [{ id: "g7-breuken", oordeel: "goed" }, { id: "g7-kommagetallen", oordeel: "wankel" }, { id: "g7-procenten", oordeel: "nog-niet" }] },
    2: { blok: 2, vak: "begrijpend-lezen", uitslag: "goed", concepten: [{ id: "g7-hoofdgedachte-verbanden", oordeel: "goed" }] },
    3: { blok: 3, vak: "studievaardigheden", uitslag: "wankel", concepten: [{ id: "g8-tabellen-grafieken", oordeel: "goed" }, { id: "sv-alfabet-woordenboek", oordeel: "wankel" }, { id: "sv-kaartlezen", oordeel: "onbekend" }] },
  };
  try {
    localStorage.setItem("lk_ouderadvies_keuzes", JSON.stringify({ testkind: [
      { padId: "procenten-po", titel: "Procenten", emoji: "💯", blok: 1, vak: "rekenen", at: nu },
      { padId: "feiten-details-opzoeken-po", titel: "Feiten en details opzoeken", emoji: "🔎", blok: 2, vak: "begrijpend-lezen", at: nu },
      { padId: "alfabet-woordenboek-po", titel: "Alfabetisch opzoeken & woordenboek", emoji: "🔤", blok: 3, vak: "studievaardigheden", at: nu },
    ] }));
  } catch { /* */ }
  const voortgang = { "procenten-po": { stappenGedaan: 2, goed: 3, fout: 4 }, "feiten-details-opzoeken-po": { stappenGedaan: 4, goed: 9, fout: 1 } };
  return (
    <div>
      <div style={F.prototype}>Voorbeeld met verzonnen gegevens van "Testkind" — zo ziet het wekelijkse vervolg eruit.</div>
      <OuderVoorstellen naam="Testkind" groep="7" blokken={blokken} voortgang={voortgang} />
    </div>
  );
}

export default function OuderAdvies({ authUser, onTerug, onOefenen }) {
  const [view, setView] = useState("start"); // start | kind | drempel | ouder
  const [kind, setKind] = useState(null);
  const [profielen, setProfielen] = useState(() => profielenOpApparaat());
  const demo = (() => { try { return new URLSearchParams(window.location.search).get("demo") === "week"; } catch { return false; } })();
  useEffect(() => { try { track("ouderadvies_open", {}); } catch { /* */ } }, []);
  useEffect(() => { if (demo) setView("ouder"); }, [demo]);

  // Drempel alleen als er kinderprofielen op dit apparaat staan (gedeeld apparaat).
  // Op de eigen telefoon van de ouder of verzorger is er niets af te schermen.
  const naarOuder = () => { if (isOpen() || profielen.length === 0) setView("ouder"); else setView("drempel"); };
  const kiesKind = (p) => { setKind(p); setView("kind"); };
  const T = teksten(kind?.groep || "7", kind?.naam || "");

  return (
    <div style={F.pagina} data-ouderadvies={view}>
      <div style={F.prototype}>Prototype — nog niet live. Alleen zichtbaar via /ouderadvies?proto=1.</div>
      {view !== "start" && (
        <button type="button" onClick={() => { setView("start"); setProfielen(profielenOpApparaat()); if (view === "ouder") sluit(); }} style={{ ...F.link, paddingLeft: 0 }} data-terug>← {T.profielen.kop}</button>
      )}
      {view === "start" && (
        <WieOefent profielen={profielen} onKies={kiesKind} onOuder={naarOuder} onToegevoegd={() => setProfielen(profielenOpApparaat())} />
      )}
      {view === "kind" && kind && (
        <>
          <div style={{ ...F.stapje, marginBottom: 4 }}>{kind.naam}</div>
          <NulmetingFlow naam={kind.naam} groep={kind.groep} keuzes={leesKeuzes(kind.naam)} onOefenen={(padId) => onOefenen?.(kind.naam, padId)} />
        </>
      )}
      {view === "drempel" && <Drempel T={T} onOpen={() => setView("ouder")} onTerug={() => setView("start")} />}
      {view === "ouder" && (
        <OuderWeergave authUser={authUser} profielen={profielen} demo={demo ? demoWeek() : null} onLaatBeginnen={(p) => { sluit(); kiesKind(p); }} />
      )}
      {onTerug && view === "start" && <button type="button" onClick={onTerug} style={F.link}>Terug naar de app</button>}
      <div style={{ ...F.sub, textAlign: "center", marginTop: 24 }}>{teksten("7").ouder.slogan}</div>
    </div>
  );
}

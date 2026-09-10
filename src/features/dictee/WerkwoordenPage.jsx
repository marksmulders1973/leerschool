// 🔤 Werkwoordspellingtest (Mark 10 sep 2026, via het schoolblad van Brian, groep 8):
// "zoals op school — dit kan net zo werken als het dictee". Een zin met een gat,
// tussen haakjes het hele werkwoord en de tijd-hint, het kind typt de vorm.
// Bouwt op de dictee-motor: typveld, letter-voor-letter vergelijking, regel bij
// een fout, score per werkwoordsvorm (○ □ △ ▢ zoals onderaan het schoolblad),
// weekrapport voor thuis, werkwoorden van school plakken (automatisch vervoegd,
// zelf aan te passen) en klaarzetten met een code voor kind of klas.
import { useEffect, useMemo, useRef, useState } from "react";
import supabase from "../../supabase";
import { spreekMetMeelezen } from "../../shared/spraakTekst.js";
import { track } from "../../utils.js";
import { recordAnswerForPath, recordRefAnswer } from "../mastery/mastery.js";
import { vergelijk } from "./dicteeData.js";
import { VORMEN, REGELS, kiesTest, vervoeg, parseWerkwoorden } from "./werkwoordenData.js";
import { kwartierBlokVan, blokKlaar } from "../vandaag/kwartier.js";

const PAD_ID = "werkwoordspelling-test";
const W = { maxWidth: 560, margin: "0 auto", padding: "16px 16px 40px", fontFamily: "system-ui, Segoe UI, sans-serif", color: "#1c2840", background: "#f6f9fc", minHeight: "100vh", colorScheme: "light", boxSizing: "border-box" };
const KNOP = { border: "none", borderRadius: 999, padding: "12px 20px", font: "800 16px system-ui", color: "#fff", background: "linear-gradient(135deg,#2e9e4f,#1f7a3a)", cursor: "pointer" };
const KNOP2 = { ...KNOP, color: "#1c2840", background: "#eef2f7" };
const KLEIN = { ...KNOP2, padding: "8px 14px", font: "800 13.5px system-ui" };
const KAART = { background: "#fff", border: "2px solid #cde3d6", borderRadius: 14, padding: "14px 16px", margin: "14px 0", color: "#1c2840" };
const kanSpreken = () => typeof window !== "undefined" && !!window.speechSynthesis;
const ALLE_VORMEN = Object.keys(VORMEN);

function hintTekst(item) {
  const v = VORMEN[item.tijd];
  return v.hint ? `(${item.inf} – ${v.hint})` : `(${item.inf})`;
}
function spreekbaarZin(item) {
  const zin = item.zin.replace("___", "… ");
  return `${zin} Het werkwoord is ${item.inf}, ${VORMEN[item.tijd].naam}.`;
}

// 📬 Weekrapport-haakje (zelfde patroon als het dictee)
function MailHaakje({ score, totaal }) {
  const [email, setEmail] = useState("");
  const [stand, setStand] = useState("");
  const stuur = async (e) => {
    e.preventDefault();
    const m = email.trim(); if (!m.includes("@")) { setStand("Vul een geldig e-mailadres in."); return; }
    setStand("Even bezig…");
    try {
      const { error } = await supabase.from("upgrade_waitlist").insert({ email: m, plan: "dictee", source: "werkwoorden-eindscherm", consent_at: new Date().toISOString() });
      if (error) throw error;
      setStand("✓ Gelukt! Het eerste weekrapport komt maandag."); setEmail("");
      try { track("ww_email", { score, totaal }); } catch { /* */ }
    } catch { setStand("Ging niet door — probeer het later nog eens."); }
  };
  return (
    <form onSubmit={stuur} style={{ background: "#fff8e1", border: "1px solid #f3d27a", borderRadius: 14, padding: "12px 14px", margin: "12px 0", color: "#1c2840" }}>
      <div style={{ font: "800 14px system-ui" }}>📬 Elke maandag dit resultaat in de mail van je ouder of verzorger?</div>
      <div style={{ fontSize: 13, color: "#556", margin: "4px 0 8px" }}>Gratis weekrapport: welke werkwoordsvormen goed gaan en welke nog oefenen vragen. Uitschrijven kan altijd.</div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="e-mail van ouder of verzorger" style={{ flex: "1 1 180px", padding: "10px 12px", borderRadius: 10, border: "1px solid #cbd5e1", background: "#fff", color: "#1c2840", font: "500 15px system-ui" }} />
        <button type="submit" style={{ ...KNOP, padding: "10px 14px", font: "800 14px system-ui", borderRadius: 10 }}>Ja, graag</button>
      </div>
      {stand && <div style={{ fontSize: 13, marginTop: 6, color: stand.startsWith("✓") ? "#146c43" : "#7a5a00" }}>{stand}</div>}
    </form>
  );
}

// ── klaarzetten met code (zelfde tabel als het dictee: dictee_lijsten, naam met voorvoegsel) ──
const CODE_TEKENS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const PREFIX = "Werkwoorden: ";
function maakCode() { let c = ""; for (let i = 0; i < 6; i++) c += CODE_TEKENS[Math.floor(Math.random() * CODE_TEKENS.length)]; return c; }
async function zetLijstKlaar({ naam, woorden, rol }) {
  const { data: { user } = {} } = await supabase.auth.getUser();
  if (!user) throw new Error("geen sessie");
  for (let poging = 0; poging < 4; poging++) {
    const code = maakCode();
    const { error } = await supabase.from("dictee_lijsten").insert({ code, naam: PREFIX + naam, woorden, door: user.id, rol });
    if (!error) return code;
    if (!/duplicate|unique/i.test(error.message)) throw error;
  }
  throw new Error("code maken lukte niet");
}
async function haalLijst(code) {
  const c = String(code || "").trim().toUpperCase();
  if (!/^[A-Z0-9]{6}$/.test(c)) return null;
  const { data } = await supabase.from("dictee_lijsten").select("code,naam,woorden").eq("code", c).maybeSingle();
  if (data) { try { supabase.rpc("dictee_lijst_geopend", { p_code: c }); } catch { /* */ } }
  return data || null;
}

// werkwoorden → items met eigen (aanpasbare) vormen
const FRAMES = {
  tt: ["Hij ___ elke dag.", "Zij ___ altijd heel snel.", "Mijn buurman ___ iedere ochtend.", "Het kind ___ graag."],
  vt: ["Gisteren ___ hij de hele middag.", "Vorige week ___ zij twee keer.", "Mijn opa ___ vroeger elke dag.", "Toen ___ het meisje opeens."],
  vd: ["Hij heeft gisteren lang ___.", "Wij hebben het al ___.", "Zij heeft het vanmorgen ___.", "Heb jij ook ___?"],
};
function itemsUitVormen(vormen) {
  const uit = [];
  vormen.forEach((v, i) => {
    ["tt", "vt", "vd"].forEach((tijd, j) => {
      const vorm = String(v[tijd] || "").trim();
      if (!vorm) return;
      uit.push({ zin: FRAMES[tijd][(i + j) % FRAMES[tijd].length], inf: v.inf, tijd, vorm, eigen: true });
    });
  });
  for (let i = uit.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [uit[i], uit[j]] = [uit[j], uit[i]]; }
  return uit;
}
function vormenVoor(infs) { return infs.map((inf) => { const v = vervoeg(inf); return v ? { inf, tt: v.tt, vt: v.vt, vd: v.vd, sterk: v.sterk } : null; }).filter(Boolean); }

function LijstCode({ onGeladen }) {
  const [code, setCode] = useState("");
  const [stand, setStand] = useState("");
  const laad = async (c) => {
    setStand("Even zoeken…");
    try { const l = await haalLijst(c); if (!l) { setStand("Geen lijst met deze code."); return; } setStand(""); onGeladen(l); }
    catch { setStand("Ophalen lukte niet. Probeer het nog eens."); }
  };
  useEffect(() => {
    try { const c = new URLSearchParams(window.location.search).get("lijst"); if (c) { setCode(c.toUpperCase()); laad(c); } } catch { /* */ }
  }, []); // eslint-disable-line
  return (
    <div style={{ ...KAART, margin: "14px 0 0" }}>
      <div style={{ font: "900 15px system-ui" }}>🔑 Code gekregen van je ouder of juf?</div>
      <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <input value={code} onChange={(e) => setCode(e.target.value.toUpperCase())} placeholder="bijv. K7PX2M" maxLength={6} autoCapitalize="characters" autoCorrect="off" spellCheck={false} style={{ flex: "1 1 120px", padding: "10px 12px", borderRadius: 10, border: "2px solid #9fb0c6", font: "800 18px system-ui", letterSpacing: 2, background: "#fff", color: "#1c2840", minWidth: 0 }} />
        <button onClick={() => laad(code)} disabled={code.length !== 6} style={{ ...KNOP, opacity: code.length !== 6 ? .5 : 1 }}>▶ Start</button>
      </div>
      {stand && <div style={{ fontSize: 13, marginTop: 6, color: "#7a5a00" }}>{stand}</div>}
    </div>
  );
}

function SchoolWerkwoorden({ onStart }) {
  const [bewaard, setBewaard] = useState(() => { try { return JSON.parse(localStorage.getItem("lk_ww_school") || "null"); } catch { return null; } });
  const [open, setOpen] = useState(!bewaard);
  const [tekst, setTekst] = useState(bewaard ? bewaard.vormen.map((v) => v.inf).join("\n") : "");
  const [naam, setNaam] = useState(bewaard?.naam || "");
  const [vormen, setVormen] = useState(() => (bewaard ? bewaard.vormen : []));
  const infs = parseWerkwoorden(tekst);
  useEffect(() => { if (open) setVormen((oud) => vormenVoor(infs).map((v) => oud.find((o) => o.inf === v.inf) || v)); }, [tekst, open]); // eslint-disable-line
  const zetVorm = (inf, tijd, waarde) => setVormen((vs) => vs.map((v) => (v.inf === inf ? { ...v, [tijd]: waarde } : v)));
  const bewaar = () => {
    if (vormen.length < 2) return;
    const lijst = { naam: naam.trim() || "Werkwoorden van school", vormen, datum: new Date().toISOString().slice(0, 10) };
    try { localStorage.setItem("lk_ww_school", JSON.stringify(lijst)); } catch { /* */ }
    setBewaard(lijst); setOpen(false);
    try { track("ww_school_bewaard", { n: vormen.length }); } catch { /* */ }
  };
  const [klaar, setKlaar] = useState(() => { try { return JSON.parse(localStorage.getItem("lk_ww_school_code") || "null"); } catch { return null; } });
  const [bezig, setBezig] = useState(false);
  const [melding, setMelding] = useState("");
  const zetKlaar = async (rol) => {
    if (!bewaard || bezig) return;
    setBezig(true); setMelding("");
    try {
      const code = await zetLijstKlaar({ naam: bewaard.naam, woorden: bewaard.vormen.map((v) => `${v.inf}|${v.tt}|${v.vt}|${v.vd}`), rol });
      const info = { code, rol, naam: bewaard.naam, n: bewaard.vormen.length };
      setKlaar(info); try { localStorage.setItem("lk_ww_school_code", JSON.stringify(info)); } catch { /* */ }
      try { track("ww_klaargezet", { rol, n: bewaard.vormen.length }); } catch { /* */ }
    } catch { setMelding("Klaarzetten lukte niet. Log in en probeer het nog eens."); }
    setBezig(false);
  };
  const link = klaar ? `https://leerkwartier.app/werkwoorden?lijst=${klaar.code}` : "";
  const waTekst = klaar ? (klaar.rol === "leerkracht"
    ? `De werkwoorden van deze week staan klaar als test in Leerkwartier. Open deze link, of typ code ${klaar.code} op leerkwartier.app/werkwoorden: ${link}`
    : `Je werkwoordentest staat klaar! Open deze link en oefen de vormen: ${link}`) : "";
  const pil = <span style={{ display: "inline-block", padding: "2px 9px", borderRadius: 20, background: "#fff3c4", border: "1px solid #e6c65a", color: "#7a5a00", font: "800 11px system-ui", marginLeft: 6, verticalAlign: "middle" }}>Familie · nu gratis</span>;
  const cel = { width: "100%", boxSizing: "border-box", padding: "6px 8px", borderRadius: 8, border: "1px solid #cbd5e1", background: "#fff", color: "#1c2840", font: "600 14px system-ui" };
  return (
    <div style={KAART}>
      <div style={{ font: "900 16px system-ui" }}>📋 Werkwoorden van school {pil}</div>
      <div style={{ fontSize: 13.5, color: "#556", margin: "4px 0 10px" }}>Plak de werkwoorden van deze week (hele werkwoord, bijvoorbeeld <b>informeren, bewijzen, proeven</b>). De app maakt er de tegenwoordige tijd, verleden tijd en het voltooid deelwoord van; klopt een vorm niet, dan pas je hem zelf aan.</div>
      {bewaard && !open && (
        <div>
          <div style={{ fontSize: 14 }}><b>{bewaard.naam}</b> · {bewaard.vormen.length} werkwoorden · bewaard {bewaard.datum}</div>
          <div style={{ fontSize: 13, color: "#556", margin: "4px 0 10px" }}>{bewaard.vormen.map((v) => v.inf).join(" · ")}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button onClick={() => { try { track("ww_school_start", { n: bewaard.vormen.length }); } catch { /* */ } onStart(itemsUitVormen(bewaard.vormen), "school"); }} style={KNOP}>▶ Test met deze werkwoorden</button>
            <button onClick={() => setOpen(true)} style={KNOP2}>✏️ Wijzigen</button>
          </div>
          <div style={{ marginTop: 12, paddingTop: 10, borderTop: "1px dashed #cde3d6" }}>
            <div style={{ font: "800 14px system-ui" }}>📬 Klaarzetten voor je kind of je klas</div>
            <div style={{ fontSize: 13, color: "#556", margin: "4px 0 8px" }}>Je krijgt een code en een link. Op het apparaat van je kind (of op het bord) staat de test dan klaar.</div>
            {!klaar || klaar.naam !== bewaard.naam || klaar.n !== bewaard.vormen.length ? (
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                <button onClick={() => zetKlaar("ouder")} disabled={bezig} style={{ ...KNOP, padding: "9px 14px", font: "800 13.5px system-ui", opacity: bezig ? .6 : 1 }}>👪 Zet klaar voor mijn kind</button>
                <button onClick={() => zetKlaar("leerkracht")} disabled={bezig} style={KLEIN}>🧑‍🏫 Zet klaar voor mijn klas</button>
              </div>
            ) : (
              <div style={{ background: "#eef6ff", border: "1px solid #bcd6f5", borderRadius: 12, padding: "10px 12px" }}>
                <div style={{ font: "900 22px system-ui", letterSpacing: 3, color: "#1f4fa8" }}>{klaar.code}</div>
                <div style={{ fontSize: 13, color: "#556", margin: "2px 0 8px" }}>{klaar.rol === "leerkracht" ? "Zet deze code op het bord: leerlingen typen hem op leerkwartier.app/werkwoorden. Of deel de link." : "Deel de link met je kind, of laat de code intypen op leerkwartier.app/werkwoorden."}</div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  <a href={`https://wa.me/?text=${encodeURIComponent(waTekst)}`} target="_blank" rel="noopener noreferrer" onClick={() => { try { track("ww_klaargezet_deel", { via: "whatsapp" }); } catch { /* */ } }} style={{ ...KNOP, background: "linear-gradient(135deg,#25d366,#128c7e)", textDecoration: "none", padding: "9px 14px", font: "800 13.5px system-ui" }}>📲 Deel via WhatsApp</a>
                  <button onClick={async () => { try { await navigator.clipboard.writeText(link); setMelding("Link gekopieerd ✓"); } catch { setMelding("Kopiëren lukte niet"); } setTimeout(() => setMelding(""), 2500); }} style={KLEIN}>🔗 Kopieer link</button>
                  <button onClick={() => { setKlaar(null); try { localStorage.removeItem("lk_ww_school_code"); } catch { /* */ } }} style={KLEIN}>Nieuwe code</button>
                </div>
              </div>
            )}
            {melding && <div style={{ fontSize: 13, marginTop: 6, color: melding.includes("✓") ? "#146c43" : "#b42318" }}>{melding}</div>}
          </div>
        </div>
      )}
      {open && (
        <div>
          <input value={naam} onChange={(e) => setNaam(e.target.value)} placeholder="naam van de lijst, bv. week 37" style={{ width: "100%", boxSizing: "border-box", padding: "9px 12px", borderRadius: 10, border: "1px solid #cbd5e1", background: "#fff", color: "#1c2840", font: "600 14px system-ui", marginBottom: 8 }} />
          <textarea value={tekst} onChange={(e) => setTekst(e.target.value)} rows={4} placeholder={"één werkwoord per regel, of met komma's:\ninformeren, bewijzen, proeven, …"} style={{ width: "100%", boxSizing: "border-box", padding: "10px 12px", borderRadius: 10, border: "2px solid #9fb0c6", background: "#fff", color: "#1c2840", font: "600 15px system-ui" }} />
          <div style={{ fontSize: 12.5, color: vormen.length >= 2 ? "#146c43" : "#7a5a00", margin: "6px 0 8px" }}>{vormen.length} {vormen.length === 1 ? "werkwoord" : "werkwoorden"} herkend{vormen.length < 2 ? " · minstens 2 nodig (hele werkwoord op -en)" : ""}</div>
          {vormen.length > 0 && (
            <div style={{ overflowX: "auto", margin: "0 0 10px" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead><tr style={{ color: "#556" }}><th style={{ textAlign: "left", padding: "4px 6px" }}>werkwoord</th><th style={{ textAlign: "left", padding: "4px 6px" }}>○ hij/zij (t.t.)</th><th style={{ textAlign: "left", padding: "4px 6px" }}>□ v.t.</th><th style={{ textAlign: "left", padding: "4px 6px" }}>△ vd</th></tr></thead>
                <tbody>
                  {vormen.map((v) => (
                    <tr key={v.inf}>
                      <td style={{ padding: "3px 6px", fontWeight: 800 }}>{v.inf}{v.sterk ? " ★" : ""}</td>
                      {["tt", "vt", "vd"].map((t) => <td key={t} style={{ padding: "3px 6px" }}><input value={v[t]} onChange={(e) => zetVorm(v.inf, t, e.target.value)} autoCapitalize="none" autoCorrect="off" spellCheck={false} style={cel} /></td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div style={{ fontSize: 12, color: "#778", marginTop: 4 }}>★ = sterk werkwoord uit onze lijst. Controleer de vormen even; onbekende sterke werkwoorden worden als regelmatig vervoegd — pas ze dan aan.</div>
            </div>
          )}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button onClick={bewaar} disabled={vormen.length < 2} style={{ ...KNOP, opacity: vormen.length < 2 ? .5 : 1 }}>Bewaar de lijst</button>
            {bewaard && <button onClick={() => setOpen(false)} style={KNOP2}>Annuleer</button>}
          </div>
        </div>
      )}
    </div>
  );
}

export default function WerkwoordenPage({ userName = "", userLevel = "", onTerug, onVolgendBlok }) {
  // ⭐ Kwartier-modus (Vandaag-motor, 10 sep 2026): 5 zinnen (werkwoorden van school als die er zijn), daarna "Volgende blokje".
  const kwartierBlok = useMemo(() => kwartierBlokVan("werkwoorden"), []);
  const [fase, setFase] = useState("kies");
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);
  const [invoer, setInvoer] = useState("");
  const [status, setStatus] = useState("typen"); // typen | goed | fout
  const [uitkomst, setUitkomst] = useState([]);
  const [aantal, setAantal] = useState(20);
  const [vormenKeuze, setVormenKeuze] = useState(ALLE_VORMEN);
  const [bron, setBron] = useState("bank");
  const [spreekt, setSpreekt] = useState(false);
  const inputRef = useRef(null);
  const stopRef = useRef(null);
  const item = items[idx];
  const delen = useMemo(() => (item ? item.zin.split("___") : ["", ""]), [item]);

  const stopAlles = () => { if (stopRef.current) { try { stopRef.current(); } catch { /* */ } stopRef.current = null; } setSpreekt(false); };
  useEffect(() => () => stopAlles(), []);
  const zeg = (tekst) => { stopAlles(); if (!kanSpreken()) return; setSpreekt(true); stopRef.current = spreekMetMeelezen(tekst, { rate: 0.92, onEnd: () => setSpreekt(false) }); };

  useEffect(() => { if (fase === "test" && item) { setInvoer(""); setStatus("typen"); setTimeout(() => inputRef.current?.focus(), 60); } }, [fase, idx, item]);

  const start = (lijst, b = "bank") => {
    const gekozen = lijst || kiesTest(aantal, vormenKeuze);
    setBron(b); setItems(gekozen); setIdx(0); setUitkomst([]); setFase("test");
    try { track("ww_start", { n: gekozen.length, bron: b, vormen: vormenKeuze.join(",") }); } catch { /* */ }
  };
  const controleer = () => {
    if (!item || !invoer.trim() || status !== "typen") return;
    const r = vergelijk(invoer, item.vorm, item.ook);
    setStatus(r.goed ? "goed" : "fout");
    setUitkomst((u) => [...u.slice(0, idx), { goed: r.goed, getypt: invoer.trim(), letters: r.letters }]);
    try { track("ww_antwoord", { tijd: item.tijd, goed: r.goed ? 1 : 0, eigen: item.eigen ? 1 : 0 }); track("question_answered", { bron: "werkwoorden", subject: "spelling", is_correct: r.goed }); } catch { /* */ }
    try { if (userName) recordAnswerForPath({ playerName: userName, pathId: PAD_ID, isCorrect: r.goed }); } catch { /* */ }
    if (r.goed) zeg("Goed zo!");
  };
  const volgende = () => {
    stopAlles();
    if (idx + 1 < items.length) { setIdx(idx + 1); return; }
    const score = uitkomst.filter((u) => u?.goed).length;
    setFase("klaar");
    const perVorm = {}; ALLE_VORMEN.forEach((v) => { perVorm[v] = items.filter((it, i) => it.tijd === v && uitkomst[i]?.goed).length + "/" + items.filter((it) => it.tijd === v).length; });
    try { track("ww_klaar", { score, n: items.length, bron, ...perVorm }); } catch { /* */ }
    try { if (userName) recordRefAnswer({ playerName: userName, onderdeel: "taalverzorging", ref: "1F", isCorrect: false, attemptsDelta: items.length, correctDelta: score }); } catch { /* */ }
  };
  const fouten = items.filter((_, i) => uitkomst[i] && !uitkomst[i].goed);
  useEffect(() => {
    if (!kwartierBlok || fase !== "kies" || items.length) return;
    let lijst = null;
    if (kwartierBlok.school) { try { const b = JSON.parse(localStorage.getItem("lk_ww_school") || "null"); if (b?.vormen?.length) lijst = itemsUitVormen(b.vormen).slice(0, kwartierBlok.n || 5); } catch { /* */ } }
    start(lijst || kiesTest(kwartierBlok.n || 5, ALLE_VORMEN), lijst ? "school" : "kwartier");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kwartierBlok]);

  if (fase === "kies") {
    const toggle = (v) => setVormenKeuze((k) => (k.includes(v) ? (k.length > 1 ? k.filter((x) => x !== v) : k) : [...k, v]));
    return (
      <div style={W}>
        <button onClick={onTerug} style={{ ...KNOP2, padding: "8px 14px", font: "700 14px system-ui", marginBottom: 12 }}>← Terug</button>
        <h1 style={{ font: "900 26px system-ui", margin: "0 0 4px" }}>🔤 Werkwoordspellingtest</h1>
        <p style={{ color: "#556", margin: "0 0 12px", fontSize: 15 }}>Zoals op school: een zin met een gat, tussen haakjes het hele werkwoord en de tijd. Jij typt de goede vorm. Fout? Dan zie je meteen de regel.</p>
        <div style={KAART}>
          <div style={{ font: "800 14px system-ui", marginBottom: 6 }}>Welke vormen?</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {ALLE_VORMEN.map((v) => <button key={v} onClick={() => toggle(v)} style={{ ...KLEIN, background: vormenKeuze.includes(v) ? "linear-gradient(135deg,#2f6fd6,#1f4fa8)" : "#eef2f7", color: vormenKeuze.includes(v) ? "#fff" : "#1c2840" }}>{VORMEN[v].symbool} {VORMEN[v].naam}</button>)}
          </div>
          <div style={{ font: "800 14px system-ui", margin: "12px 0 6px" }}>Hoeveel zinnen?</div>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 12 }}>
            {[10, 20].map((n) => <button key={n} onClick={() => setAantal(n)} style={{ ...KLEIN, background: aantal === n ? "linear-gradient(135deg,#2f6fd6,#1f4fa8)" : "#eef2f7", color: aantal === n ? "#fff" : "#1c2840" }}>{n}{n === 20 ? " (zoals de test op school)" : " (kort)"}</button>)}
          </div>
          <button onClick={() => start()} style={{ ...KNOP, fontSize: 18, padding: "14px 22px" }}>▶ Start de test</button>
          <div style={{ fontSize: 12.5, color: "#778", marginTop: 8 }}>Groep 6 t/m 8 · gratis · geen account nodig · de score telt mee in het weekrapport voor thuis.</div>
        </div>
        <div style={{ ...KAART, background: "#f4faf6" }}>
          <div style={{ font: "800 14px system-ui", marginBottom: 4 }}>De vier vormen</div>
          <div style={{ fontSize: 13.5, lineHeight: 1.55 }}>
            <b>○ Tegenwoordige tijd:</b> hij <i>vindt</i>, ik <i>vind</i> (stam + t bij hij/zij/het).<br />
            <b>□ Verleden tijd:</b> hij <i>praatte</i>, zij <i>redde</i> ('t kofschip: -te of -de).<br />
            <b>△ Voltooid deelwoord:</b> heeft <i>gemaakt</i>, is <i>verhuisd</i> (ge- + stam + t/d).<br />
            <b>▢ Bijvoeglijk gebruikt:</b> de <i>gebakken</i> aardappels, de <i>verbrande</i> koekjes (voltooid deelwoord + e).
          </div>
        </div>
        <SchoolWerkwoorden onStart={(lijst, b) => start(lijst, b)} />
        <LijstCode onGeladen={(l) => {
          const vormen = (l.woorden || []).map((w) => { const [inf, tt, vt, vd] = String(w).split("|"); return inf && tt ? { inf, tt, vt, vd } : null; }).filter(Boolean);
          try { track("ww_lijst_geopend", { code: l.code, n: vormen.length }); } catch { /* */ }
          if (vormen.length) start(itemsUitVormen(vormen), "code");
        }} />
        <p style={{ color: "#778", fontSize: 13, marginTop: 14 }}>Liever losse woorden horen en schrijven? Probeer het <a href="/dictee" style={{ color: "#146c43", fontWeight: 800 }}>dictee met Charley</a>. Uitleg bij de regels: <a href="/leren/pad?id=werkwoordsspelling-dt" style={{ color: "#146c43", fontWeight: 800 }}>werkwoorden en d/t</a>.</p>
      </div>
    );
  }

  if (fase === "klaar") {
    const score = uitkomst.filter((u) => u?.goed).length;
    return (
      <div style={W}>
        <div style={{ textAlign: "center", padding: "10px 0" }}>
          <div style={{ fontSize: 54 }}>{score === items.length ? "🏆" : score >= items.length / 2 ? "🎉" : "💪"}</div>
          <div style={{ font: "900 28px system-ui" }}>{score} van de {items.length} goed</div>
          <div style={{ color: "#556", marginTop: 4 }}>{score === items.length ? "Alles goed, wat een kanjer!" : score >= items.length * 0.7 ? "Goed gedaan!" : "Oefenen helpt, morgen nog een keer?"}</div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, margin: "12px 0" }}>
          {ALLE_VORMEN.map((v) => {
            const n = items.filter((it) => it.tijd === v).length; if (!n) return null;
            const g = items.filter((it, i) => it.tijd === v && uitkomst[i]?.goed).length;
            return (
              <div key={v} style={{ background: "#fff", border: "2px solid " + (g === n ? "#146c43" : g >= n / 2 ? "#e6c65a" : "#f3c9c9"), borderRadius: 12, padding: "8px 6px", textAlign: "center" }}>
                <div style={{ fontSize: 22 }}>{VORMEN[v].symbool}</div>
                <div style={{ font: "900 18px system-ui" }}>{g}/{n}</div>
                <div style={{ fontSize: 11, color: "#556", lineHeight: 1.2 }}>{VORMEN[v].kort}</div>
              </div>
            );
          })}
        </div>
        {fouten.length > 0 && (
          <div style={{ background: "#fff5f5", border: "1px solid #f3c9c9", borderRadius: 14, padding: "12px 14px", margin: "12px 0" }}>
            <div style={{ font: "800 15px system-ui", marginBottom: 6 }}>Nog even kijken:</div>
            {fouten.map((f, i) => (
              <div key={i} style={{ padding: "6px 0", borderTop: i ? "1px solid #f0dcdc" : "none", fontSize: 14.5, lineHeight: 1.45 }}>
                <span style={{ color: "#778" }}>{VORMEN[f.tijd].symbool}</span> <b style={{ color: "#146c43" }}>{f.vorm}</b> <span style={{ color: "#888" }}>({f.inf} · jij schreef: {uitkomst[items.indexOf(f)]?.getypt})</span><br />
                <span style={{ color: "#445" }}>{f.tip || REGELS[f.tijd]}</span>
              </div>
            ))}
            <a href={`/leren/pad?id=werkwoordsspelling-dt&utm_source=werkwoorden&utm_campaign=brug`} onClick={() => { try { track("ww_naar_pad", { fouten: fouten.length }); } catch { /* */ } }} style={{ display: "inline-block", marginTop: 8, padding: "6px 12px", borderRadius: 999, background: "#e6f4ea", color: "#146c43", font: "800 13px system-ui", textDecoration: "none" }}>✏️ Oefen de regels: werkwoorden en d/t →</a>
          </div>
        )}
        {kwartierBlok && onVolgendBlok ? (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
            <button onClick={() => { blokKlaar({ goed: score, totaal: items.length }); onVolgendBlok(); }} style={{ ...KNOP, fontSize: 18, padding: "14px 22px" }}>Volgende blokje →</button>
            {fouten.length > 0 && <button onClick={() => start(fouten, bron)} style={KNOP2}>🔁 Fouten nog een keer</button>}
          </div>
        ) : (
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 10 }}>
          {fouten.length > 0 && <button onClick={() => start(fouten, bron)} style={KNOP}>🔁 Fouten nog een keer</button>}
          <button onClick={() => { setFase("kies"); }} style={fouten.length ? KNOP2 : KNOP}>🔤 Nieuwe test</button>
          <button onClick={onTerug} style={KNOP2}>Klaar</button>
        </div>
        )}
        <MailHaakje score={score} totaal={items.length} />
        <p style={{ color: "#778", fontSize: 12.5, marginTop: 14 }}>Je score telt mee in het weekrapport voor thuis (spelling).</p>
      </div>
    );
  }

  const u = uitkomst[idx];
  return (
    <div style={W}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
        <button onClick={() => { stopAlles(); setFase("kies"); }} style={{ ...KNOP2, padding: "8px 14px", font: "700 14px system-ui" }}>← Stop</button>
        <div style={{ font: "800 14px system-ui", color: "#556" }}>Zin {idx + 1} van {items.length} · {VORMEN[item.tijd].symbool} {VORMEN[item.tijd].naam}</div>
      </div>
      <div style={{ font: "700 21px/1.6 system-ui", background: "#f4faf6", border: "1px solid #cde3d6", borderRadius: 14, padding: "14px 16px", margin: "6px 0 12px", minHeight: 64, color: "#1c2840" }}>
        {delen[0]}
        {status !== "typen" ? (
          <span style={{ display: "inline-block", borderBottom: "3px solid", borderColor: status === "goed" ? "#146c43" : "#b42318", padding: "0 4px" }}>
            {(u?.letters || []).map((l, i) => <span key={i} style={{ color: l.ok ? "#146c43" : "#b42318" }}>{l.d || ""}</span>)}
          </span>
        ) : (
          <span style={{ display: "inline-block", minWidth: Math.max(90, item.vorm.length * 15), borderBottom: "3px solid #8a939c", padding: "0 4px", color: "#8a939c" }}>{invoer || " "}</span>
        )}
        {delen[1]}
        <span style={{ display: "inline-block", marginLeft: 8, color: "#1f4fa8", font: "600 15px system-ui", whiteSpace: "nowrap" }}>{hintTekst(item)}</span>
      </div>
      {status === "goed" && <div style={{ color: "#146c43", fontWeight: 800, margin: "-4px 0 10px" }}>✅ Goed zo!</div>}
      {status === "fout" && (
        <div style={{ background: "#fff5f5", border: "1px solid #f3c9c9", borderRadius: 12, padding: "10px 12px", margin: "-4px 0 10px", fontSize: 14.5, lineHeight: 1.5 }}>
          <span style={{ color: "#b42318", fontWeight: 800 }}>Bijna!</span> Het is <b>{item.vorm}</b>. Jij schreef: <span style={{ textDecoration: "line-through" }}>{u?.getypt}</span>.<br />
          <span style={{ color: "#445" }}>{item.tip ? item.tip + " " : ""}{REGELS[item.tijd]}</span>
        </div>
      )}
      <form onSubmit={(e) => { e.preventDefault(); controleer(); }} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input ref={inputRef} value={invoer} onChange={(e) => setInvoer(e.target.value)} disabled={status !== "typen"}
          placeholder="typ de goede vorm" autoComplete="off" autoCapitalize="none" autoCorrect="off" spellCheck={false} inputMode="text" enterKeyHint="done" name="lk_ww_vorm_zonder_correctie" data-gramm="false"
          style={{ flex: "1 1 200px", border: "2px solid #9fb0c6", borderRadius: 12, padding: "12px 14px", font: "800 20px system-ui", color: "#1c2840", background: "#fff", colorScheme: "light", minWidth: 0 }} />
        {status !== "typen" ? (
          <button type="button" onClick={volgende} style={KNOP}>{idx + 1 < items.length ? "Volgende →" : "Klaar →"}</button>
        ) : (
          <button type="submit" disabled={!invoer.trim()} style={{ ...KNOP, opacity: invoer.trim() ? 1 : .5 }}>✓ Controleer</button>
        )}
        {kanSpreken() && <button type="button" onClick={() => zeg(spreekbaarZin(item))} style={KNOP2}>{spreekt ? "🔊 …" : "🔊 Lees voor"}</button>}
      </form>
      <div style={{ display: "flex", gap: 4, marginTop: 14 }}>
        {items.map((_, i) => <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: uitkomst[i] ? (uitkomst[i].goed ? "#146c43" : "#b42318") : i === idx ? "#8a939c" : "#e3e8ee" }} />)}
      </div>
      <p style={{ color: "#778", fontSize: 12.5, marginTop: 12 }}>Tip: zeg de zin in je hoofd met 'lopen' erin. Hoor je 'loopt'? Dan krijgt het werkwoord een t.</p>
    </div>
  );
}

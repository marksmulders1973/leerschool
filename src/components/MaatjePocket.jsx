// MaatjePocket — "je maatje in je broekzak". Je droom-maatje is hier altijd:
// je praat ermee (lokaal-eerst, dan AI), het GROEIT en wordt mooier door te
// LEREN in Leerkwartier, en er is altijd een knop terug naar de leer-app.
//
// Ontworpen met 5-agent-review (2026-06-30). Bewuste keuzes:
// - Licht 2D (emoji + CSS), geen three.js → snel als "altijd open" pocket-app.
// - Groei 100% gekoppeld aan leren (geleerde stappen) → maatje voedt de kernlus.
// - GEEN schuldgevoel/"ik mis je"/verval (kindveilig, geen donkere patronen).
// - Zichtbaar "verzonnen maatje". Nood-signalen worden door /api/buddy-chat
//   afgevangen (verwijst naar een vertrouwde volwassene).
// - AI-kosten: korte groet lokaal, dagcap op AI-calls, daarna lieve canned-zin.
// Push-notificaties = stap 2 (vereisen VAPID-setup + ouder-toestemming).
import { useState, useEffect, useRef } from "react";
import { BUDDY_BY_ID, buddyNaam as buddyNaamVan, gekozenBuddy, telGeleerdeStappen } from "../features/zoo/buddies";
import { track } from "../utils.js";
import { verwerkMakerTip } from "../shared/makerTip.js";
import { makerAntwoordMelding } from "../shared/makerAntwoord.js";
import { spreekMetMeelezen } from "../shared/spraakTekst.js";
import MeeleesTekst from "../shared/ui/MeeleesTekst.jsx";

const VANDAAG = () => new Date().toISOString().slice(0, 10);

// Groei-stadia op basis van geleerde stappen (agent-2 drempels).
const STADIA = [
  { key: "ei", label: "Net uit het ei", min: 0, scale: 0.72 },
  { key: "vonkje", label: "Klein", min: 10, scale: 0.9 },
  { key: "maatje", label: "Maatje", min: 35, scale: 1.08 },
  { key: "gloeier", label: "Groot", min: 80, scale: 1.22 },
  { key: "magisch", label: "Magisch ✨", min: 150, scale: 1.38 },
];
function stadiumVoor(stappen) {
  let idx = 0;
  for (let i = 0; i < STADIA.length; i++) if (stappen >= STADIA[i].min) idx = i;
  const huidig = STADIA[idx];
  const volgende = STADIA[idx + 1] || null;
  const onder = huidig.min;
  const boven = volgende ? volgende.min : huidig.min;
  const pct = volgende ? Math.min(100, Math.round(((stappen - onder) / (boven - onder)) * 100)) : 100;
  return { idx, huidig, volgende, pct, naarVolgend: volgende ? Math.max(0, boven - stappen) : 0 };
}

// Accessoire per stadium (eenvoudige v1-versiering; Grok-art komt later).
const ACCESSOIRE = ["", "", "🎀", "👑", "🌟"];

// Echte Grok-tekeningen per maatje (vervangen de emoji als ze bestaan).
const MAATJE_ART = {
  draakje: "/maatjes/vonk.jpg",
};

// Lieve, NIET-manipulatieve praatjes (geen schuldgevoel). Roteren zacht.
const MOODS = [
  { e: "✨", t: "Als jij leert, word ik groter en mooier!", actie: "leren" },
  { e: "🧮", t: "Zin om samen een paar sommen te maken?", actie: "leren" },
  { e: "🎡", t: "Zullen we naar het park gaan?", actie: "park" },
  { e: "📚", t: "Een kwartiertje leren maakt mij blij!", actie: "leren" },
  { e: "😄", t: "Wat leuk dat je er bent!", actie: null },
];

function speak(text, callbacks = {}) {
  spreekMetMeelezen(text, { rate: 1.0, pitch: 1.2, ...callbacks });
}

export default function MaatjePocket({ onHome, onOpenLeren, onOpenPark, userName = "" }) {
  const buddy = BUDDY_BY_ID[gekozenBuddy() || "draakje"] || BUDDY_BY_ID.draakje;
  const naam = buddyNaamVan(buddy.id, buddy.naam);
  const kind = (userName || "").trim();
  const [stappen, setStappen] = useState(0);
  const [vandaagGeleerd, setVandaagGeleerd] = useState(0);
  const [geluid, setGeluid] = useState(true);
  const [leest, setLeest] = useState(false);      // meelezen: wordt er voorgelezen?
  const [leesWoord, setLeesWoord] = useState(-1); // welk woord klinkt nu
  const [moodIdx, setMoodIdx] = useState(0);
  // voorlezen mét meelezen — gebruikt bij elk gesproken maatje-antwoord
  const spreekVoor = (tekst) => {
    setLeest(true); setLeesWoord(-1);
    speak(tekst, { onWoord: setLeesWoord, onEnd: () => { setLeest(false); setLeesWoord(-1); } });
  };
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [invoer, setInvoer] = useState("");
  const [busy, setBusy] = useState(false);
  const lijstRef = useRef(null);

  // Geleerde stappen laden + dagelijkse "behoeftes" bepalen (hoeveel vandaag geleerd).
  useEffect(() => {
    track("maatje_open", { buddy: buddy.id });
    let cancel = false;
    (async () => {
      const n = await telGeleerdeStappen(kind);
      if (cancel) return;
      setStappen(n);
      try {
        const raw = JSON.parse(localStorage.getItem("lk_maatje_dag") || "null");
        const vd = VANDAAG();
        if (!raw || raw.datum !== vd) {
          localStorage.setItem("lk_maatje_dag", JSON.stringify({ datum: vd, startStappen: n }));
          setVandaagGeleerd(0);
        } else {
          setVandaagGeleerd(Math.max(0, n - (raw.startStappen || 0)));
        }
      } catch { /* */ }
    })();
    return () => { cancel = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kind]);

  // Bug-jacht 7/7: stem stoppen bij chat-dicht en bij het verlaten van de
  // pagina — anders praat het maatje door over het volgende scherm heen.
  useEffect(() => {
    if (!chatOpen) { try { window.speechSynthesis?.cancel(); } catch { /* */ } }
    return () => { try { window.speechSynthesis?.cancel(); } catch { /* */ } };
  }, [chatOpen]);

  // 💛→🐾 Idee #36: maker-antwoord op een tip van dit kind? Eén keer melden.
  useEffect(() => {
    if (!chatOpen) return;
    makerAntwoordMelding([kind], "pocket").then((m) => {
      if (m) setMessages((prev) => [...prev, { role: "assistant", content: m }].slice(-30));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatOpen]);

  // Mood zacht laten roteren.
  useEffect(() => {
    const id = setInterval(() => setMoodIdx((i) => (i + 1) % MOODS.length), 9000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => { const el = lijstRef.current; if (el) el.scrollTop = el.scrollHeight; }, [messages, busy]);

  const st = stadiumVoor(stappen);
  const mood = MOODS[moodIdx];
  const groet = kind
    ? `${vandaagGeleerd > 0 ? "Goed bezig" : "Hoi"}, ${kind}!`
    : "Hoi!";

  const naarLeren = () => { track("maatje_naar_leren", { buddy: buddy.id }); onOpenLeren && onOpenLeren(); };
  const naarPark = () => { track("maatje_naar_park", { buddy: buddy.id }); onOpenPark && onOpenPark(); };
  const doeMood = () => { if (mood.actie === "leren") naarLeren(); else if (mood.actie === "park") naarPark(); };

  // Delen — agent-3 groei-hefboom: laat je maatje aan papa/mama/vriendje zien.
  const deel = async () => {
    track("maatje_gedeeld", { buddy: buddy.id, stadium: st.huidig.key });
    const tekst = `Kijk, dit is ${naam} ${buddy.emoji} — mijn maatje in Leerkwartier! Hij groeit als ik leer. Maak ook een maatje:`;
    const url = "https://leerkwartier.app/?utm_source=maatje&utm_medium=share";
    const art = MAATJE_ART[buddy.id];
    try {
      // Stuur de tekening mee, zodat je Vonk echt in WhatsApp ziet (op telefoon).
      if (art && navigator.canShare) {
        try {
          const resp = await fetch(art);
          const blob = await resp.blob();
          const file = new File([blob], `${naam}.jpg`, { type: blob.type || "image/jpeg" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], text: `${tekst} ${url}` });
            return;
          }
        } catch { /* val terug op tekst+link */ }
      }
      if (navigator.share) { await navigator.share({ title: "Mijn maatje", text: tekst, url }); return; }
      await navigator.clipboard.writeText(`${tekst} ${url}`);
      alert("Linkje gekopieerd — plak 'm maar in WhatsApp! 💛");
    } catch { /* gebruiker annuleerde */ }
  };

  // ── Praten: lokaal-eerst, dan AI met dagcap, anders lieve canned-zin. ──
  function lokaalAntwoord(t) {
    const l = t.toLowerCase().trim();
    if (/^(hoi|hallo|hey|hai|dag|yo|hee)\b/.test(l)) return `Hoi ${kind || "vriend"}! Wat leuk dat je er bent. ${buddy.emoji}`;
    if (/(doei|tot ziens|later|bye)\b/.test(l)) return "Tot snel! Kom je gauw weer? 👋";
    if (/(hoe gaat het|alles goed|gaat het)/.test(l)) return "Met mij gaat het super! En als jij leert, word ik nog blijer. 🌟";
    return null;
  }
  function aiCapBereikt() {
    try {
      const raw = JSON.parse(localStorage.getItem("lk_maatje_ai") || "null");
      const vd = VANDAAG();
      const c = raw && raw.datum === vd ? raw.n : 0;
      return c >= 14;
    } catch { return false; }
  }
  function aiCapTel() {
    try {
      const vd = VANDAAG();
      const raw = JSON.parse(localStorage.getItem("lk_maatje_ai") || "null");
      const n = raw && raw.datum === vd ? raw.n + 1 : 1;
      localStorage.setItem("lk_maatje_ai", JSON.stringify({ datum: vd, n }));
    } catch { /* */ }
  }

  async function stuur(tekst) {
    const t = String(tekst || "").trim();
    if (!t || busy) return;
    const next = [...messages, { role: "user", content: t.slice(0, 200) }].slice(-30);
    setMessages(next); setInvoer("");

    const lok = lokaalAntwoord(t);
    if (lok) { setMessages((m) => [...m, { role: "assistant", content: lok }].slice(-30)); if (geluid) spreekVoor(lok); return; }
    if (aiCapBereikt()) {
      const canned = "Wat leuk dat je met me praat! Zullen we samen een kwartiertje leren? Dan word ik groter. 🌟";
      setMessages((m) => [...m, { role: "assistant", content: canned }].slice(-30)); if (geluid) spreekVoor(canned); return;
    }
    setBusy(true); track("maatje_chat", { buddy: buddy.id });
    try {
      aiCapTel();
      const res = await fetch("/api/buddy-chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.slice(-8).map((m) => ({ role: m.role, content: m.content })),
          context: { buddyNaam: naam, soort: buddy.soort, kindNaam: kind, zwakVak: "" },
        }),
      });
      const data = await res.json().catch(() => ({}));
      const rauw = data?.reply || "Hihi, ik ben even de draad kwijt. Zullen we iets leuks doen? 🌟";
      // Wens/tip voor de maker? Eruit plukken → Mark's /tips-wachtrij (Mark 12 aug).
      const reply = verwerkMakerTip(rauw, { kindNaam: kind, buddyNaam: naam, bron: "pocket" });
      setMessages((m) => [...m, { role: "assistant", content: reply }].slice(-30));
      if (geluid) spreekVoor(reply);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Oeps, ik kan even niet praten. Probeer zo nog eens! 🙏" }].slice(-30));
    } finally { setBusy(false); }
  }

  const accent = buddy.kleur2 || "#2e7d32";
  const magisch = st.huidig.key === "magisch";

  return (
    <div style={{ position: "fixed", inset: 0, display: "flex", flexDirection: "column", overflow: "hidden",
      background: `radial-gradient(circle at 50% 28%, ${buddy.kleur}33, transparent 60%), linear-gradient(180deg, #0e1726, #0a1019)` }}>
      <style>{`
        @keyframes lkbob { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes lkglow { 0%,100%{opacity:.55;transform:scale(1)} 50%{opacity:.85;transform:scale(1.08)} }
        @keyframes lkspark { 0%{transform:translateY(0) scale(.7);opacity:0} 30%{opacity:1} 100%{transform:translateY(-46px) scale(1);opacity:0} }
        @keyframes lkpop { from{transform:scale(.8);opacity:0} to{transform:scale(1);opacity:1} }
      `}</style>

      {/* kop */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", color: "#fff" }}>
        <button onClick={onHome} style={hdrBtn}>←</button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ font: "900 17px system-ui" }}>{naam} {buddy.emoji}</div>
          <div style={{ font: "700 11px system-ui", opacity: .8 }}>{st.huidig.label}{ACCESSOIRE[st.idx] ? ` · ${ACCESSOIRE[st.idx]}` : ""}</div>
        </div>
        <button onClick={() => setGeluid((g) => { if (g) { try { window.speechSynthesis?.cancel(); } catch { /* */ } } return !g; })} title="Geluid" style={hdrBtn}>{geluid ? "🔊" : "🔇"}</button>
      </div>

      {/* maatje-podium */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", padding: "4px 16px" }}>
        {/* mood-wolkje */}
        <button onClick={doeMood} style={{ cursor: mood.actie ? "pointer" : "default", border: "none", background: "#fff", color: "#243",
          borderRadius: 16, padding: "9px 14px", font: "800 13.5px system-ui", boxShadow: "0 4px 14px rgba(0,0,0,.3)", marginBottom: 18, maxWidth: 320, animation: "lkpop .3s ease" }}>
          <span style={{ marginRight: 6 }}>{mood.e}</span>{mood.t}
        </button>

        <div style={{ position: "relative", width: 220, height: 220, display: "grid", placeItems: "center" }}>
          {/* gloed */}
          <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%",
            background: `radial-gradient(circle, ${buddy.kleur}cc, ${accent}55 55%, transparent 72%)`, animation: "lkglow 3.2s ease-in-out infinite", filter: "blur(2px)" }} />
          {/* sparkles bij hogere stadia */}
          {st.idx >= 2 && [0, 1, 2, 3].map((i) => (
            <span key={i} style={{ position: "absolute", left: `${20 + i * 20}%`, bottom: 30, fontSize: 18,
              animation: `lkspark ${2.2 + i * 0.4}s ease-in-out ${i * 0.5}s infinite` }}>✨</span>
          ))}
          {/* het maatje — echte tekening als die bestaat, anders de emoji */}
          {MAATJE_ART[buddy.id] ? (
            <img src={MAATJE_ART[buddy.id]} alt={naam}
              style={{
                width: 230, maxWidth: "64vw", height: "auto", position: "relative",
                transform: `scale(${st.huidig.scale})`, animation: "lkbob 3s ease-in-out infinite",
                WebkitMaskImage: "radial-gradient(circle at 50% 44%, #000 56%, transparent 76%)",
                maskImage: "radial-gradient(circle at 50% 44%, #000 56%, transparent 76%)",
                filter: magisch ? "drop-shadow(0 0 18px gold)" : "drop-shadow(0 8px 16px rgba(0,0,0,.45))",
              }} />
          ) : (
            <div style={{ fontSize: 128, lineHeight: 1, transform: `scale(${st.huidig.scale})`, animation: "lkbob 3s ease-in-out infinite", filter: magisch ? "drop-shadow(0 0 14px gold)" : "none", position: "relative" }}>
              {buddy.emoji}
              {ACCESSOIRE[st.idx] && <span style={{ position: "absolute", top: -6, left: "50%", transform: "translateX(-50%)", fontSize: 40 }}>{ACCESSOIRE[st.idx]}</span>}
            </div>
          )}
        </div>

        <div style={{ color: "#fff", textAlign: "center", marginTop: 10 }}>
          <div style={{ font: "900 19px system-ui" }}>{groet}</div>
          {/* groei-balk */}
          <div style={{ width: 260, maxWidth: "80vw", margin: "12px auto 4px" }}>
            <div style={{ height: 12, borderRadius: 999, background: "rgba(255,255,255,0.14)", overflow: "hidden" }}>
              <div style={{ width: `${st.pct}%`, height: "100%", borderRadius: 999, background: `linear-gradient(90deg, ${buddy.kleur}, ${accent})`, transition: "width .6s" }} />
            </div>
            <div style={{ font: "700 12px system-ui", opacity: .85, marginTop: 6 }}>
              {st.volgende ? `Nog ${st.naarVolgend} keer leren tot "${st.volgende.label}"` : "Helemaal volgroeid — magisch! ✨"}
            </div>
          </div>
          {/* dagelijkse behoeftes (3 bolletjes, geen verval) */}
          <div style={{ display: "flex", gap: 8, justifyContent: "center", alignItems: "center", marginTop: 8 }}>
            <span style={{ font: "700 12px system-ui", opacity: .8 }}>Vandaag:</span>
            {[0, 1, 2].map((i) => (
              <span key={i} style={{ fontSize: 18, opacity: vandaagGeleerd > i ? 1 : 0.3 }}>{vandaagGeleerd > i ? "💛" : "🤍"}</span>
            ))}
          </div>
        </div>
      </div>

      {/* knoppen */}
      <div style={{ padding: "8px 14px 6px", display: "flex", flexDirection: "column", gap: 9 }}>
        <button onClick={naarLeren} style={{ ...bigBtn, background: "linear-gradient(135deg,#00C853,#00a846)" }}>▶ Kom leren in Leerkwartier</button>
        <div style={{ display: "flex", gap: 9 }}>
          <button onClick={naarPark} style={{ ...subBtn }}>🎡 Naar het park</button>
          <button onClick={() => setChatOpen(true)} style={{ ...subBtn }}>💬 Praat met {naam}</button>
        </div>
        <button onClick={deel} style={{ ...subBtn, background: "rgba(255,255,255,0.08)" }}>💛 Laat {naam} aan papa/mama zien</button>
      </div>

      {/* verzonnen-maatje transparantie (agent-5) */}
      <div style={{ textAlign: "center", padding: "2px 14px calc(8px + env(safe-area-inset-bottom))", color: "rgba(255,255,255,0.5)", font: "600 10.5px system-ui" }}>
        ✨ {naam} is een verzonnen maatje — geen echt dier.
      </div>

      {/* chat-laag */}
      {chatOpen && (
        <div onClick={() => setChatOpen(false)} style={{ position: "absolute", inset: 0, zIndex: 5, background: "rgba(8,14,22,0.55)", display: "flex", alignItems: "flex-end" }}>
          <div onClick={(e) => e.stopPropagation()} style={{ width: "100%", maxHeight: "76vh", display: "flex", flexDirection: "column", background: "#fffef9", borderRadius: "20px 20px 0 0", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "11px 14px", background: `linear-gradient(135deg,${buddy.kleur},${accent})`, color: "#fff" }}>
              <span style={{ fontSize: 24 }}>{buddy.emoji}</span>
              <div style={{ flex: 1, font: "900 15px system-ui" }}>{naam}</div>
              <button onClick={() => setChatOpen(false)} style={{ ...hdrBtn, background: "rgba(255,255,255,0.22)" }}>✕</button>
            </div>
            <div ref={lijstRef} style={{ flex: 1, overflowY: "auto", padding: 13, display: "flex", flexDirection: "column", gap: 8, background: "#f7f9f4" }}>
              {messages.length === 0 && <div style={{ color: "#8a93a0", font: "600 13.5px system-ui", textAlign: "center", marginTop: 16 }}>Zeg eens hoi tegen {naam}! 👋</div>}
              {(() => {
                // meelezen: alleen de nieuwste maatje-bubble wordt voorgelezen
                let laatsteAi = -1;
                messages.forEach((m, i) => { if (m.role === "assistant") laatsteAi = i; });
                return messages.map((m, i) => {
                const ai = m.role === "assistant";
                return (
                  <div key={i} style={{ display: "flex", justifyContent: ai ? "flex-start" : "flex-end" }}>
                    <div style={{ maxWidth: "80%", padding: "9px 13px", borderRadius: 15, background: ai ? "#fff" : `linear-gradient(135deg,${buddy.kleur},${accent})`, color: ai ? "#243" : "#fff", font: "600 14px/1.4 system-ui", boxShadow: "0 1px 4px rgba(0,0,0,.1)", whiteSpace: "pre-wrap" }}>
                      {ai && <span style={{ marginRight: 5 }}>{buddy.emoji}</span>}
                      {ai && leest && i === laatsteAi
                        ? <MeeleesTekst tekst={m.content} actief={leesWoord} accent={buddy.kleur} />
                        : m.content}
                    </div>
                  </div>
                );
                });
              })()}
              {busy && <div style={{ color: "#8a93a0", font: "600 14px system-ui" }}>{buddy.emoji} <span style={{ letterSpacing: 2 }}>···</span></div>}
            </div>
            <form onSubmit={(e) => { e.preventDefault(); stuur(invoer); }} style={{ display: "flex", gap: 8, padding: "10px 12px calc(10px + env(safe-area-inset-bottom))", borderTop: "1px solid #ececec" }}>
              <input value={invoer} onChange={(e) => setInvoer(e.target.value)} maxLength={200} placeholder={`Praat met ${naam}…`}
                style={{ flex: 1, minWidth: 0, border: "2px solid #dfe6da", borderRadius: 999, padding: "11px 16px", font: "600 14px system-ui", color: "#243", outline: "none" }} />
              <button type="submit" disabled={busy || !invoer.trim()} style={{ border: "none", borderRadius: 999, width: 46, height: 46, flexShrink: 0, color: "#fff", fontSize: 18,
                background: invoer.trim() && !busy ? `linear-gradient(135deg,${buddy.kleur},${accent})` : "#cfd6cc", cursor: invoer.trim() && !busy ? "pointer" : "default" }}>➤</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

const hdrBtn = { border: "none", background: "rgba(255,255,255,0.16)", color: "#fff", width: 36, height: 36, borderRadius: 999, fontSize: 16, fontWeight: 800, cursor: "pointer", flexShrink: 0 };
const bigBtn = { width: "100%", border: "none", borderRadius: 14, padding: "14px", color: "#fff", font: "900 15px system-ui", cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,.3)" };
const subBtn = { flex: 1, border: "none", borderRadius: 12, padding: "12px", color: "#fff", font: "800 13.5px system-ui", cursor: "pointer", background: "rgba(255,255,255,0.12)" };

// BuddyChat — praat-venster met je droom-maatje. Het kind typt iets, het maatje
// antwoordt in karakter via de AI (api/buddy-chat, kindveilig + kosten-cap). Het
// maatje kan ook hardop praten via de gratis browserstem (TTS). Het maatje is
// tevens parkgids: uitleg, tips, advies en mening over je park.
//
// Veilig: gesprek wordt NIET opgeslagen (alleen in beeld), invoer is begrensd,
// en de server doet het echte contentfilter + de kindveilige system-prompt.
import { useState, useRef, useEffect } from "react";
import { BUDDY_BY_ID, buddyWeetjes } from "./buddies";
import { track } from "../../utils.js";

const STARTERS = [
  "Hoe verdien ik muntjes?",
  "Wat vind jij van mijn park?",
  "Geef me een tip!",
  "Vertel iets leuks",
  "Ik ben zenuwachtig voor de toets",
];

// Hardop laten praten met de gratis browserstem (Nederlands), iets hoger = liever.
function speak(text) {
  try {
    if (!window.speechSynthesis) return;
    const schoon = String(text).replace(/[*_#`>]/g, "");
    const u = new SpeechSynthesisUtterance(schoon);
    u.lang = "nl-NL";
    const stem = window.speechSynthesis.getVoices().find((v) => (v.lang || "").toLowerCase().startsWith("nl"));
    if (stem) u.voice = stem;
    u.rate = 1.0; u.pitch = 1.2;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch { /* stem niet beschikbaar → stil */ }
}

export default function BuddyChat({ open, onClose, buddyId, buddyNaam, facts = {}, park = null }) {
  const b = BUDDY_BY_ID[buddyId];
  const naam = (buddyNaam || b?.naam || "Maatje").trim();
  const [messages, setMessages] = useState([]);
  const [invoer, setInvoer] = useState("");
  const [busy, setBusy] = useState(false);
  const [geluid, setGeluid] = useState(true);
  const lijstRef = useRef(null);
  const inputRef = useRef(null);

  // Eerste begroeting (lokaal, geen AI nodig) + tracking bij openen.
  useEffect(() => {
    if (!open) return;
    const hoi = facts?.naam ? `Hoi ${String(facts.naam).trim()}! ` : "Hoi! ";
    setMessages([{ role: "assistant", content: `${hoi}Ik ben ${naam}. Vraag me iets over het park, of vertel me gewoon iets! ${b?.emoji || "🐾"}` }]);
    try { track("buddy_chat_open", { id: buddyId }); } catch { /* */ }
    setTimeout(() => { try { inputRef.current?.focus(); } catch {} }, 60);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, buddyId]);

  useEffect(() => {
    const el = lijstRef.current; if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy]);

  async function stuur(tekst) {
    const t = String(tekst || "").trim();
    if (!t || busy) return;
    const next = [...messages, { role: "user", content: t.slice(0, 200) }];
    setMessages(next);
    setInvoer("");
    setBusy(true);
    try { track("buddy_chat_message", { id: buddyId }); } catch { /* */ }
    try {
      const res = await fetch("/api/buddy-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.slice(-8).map((m) => ({ role: m.role, content: m.content })),
          context: {
            buddyNaam: naam,
            soort: b?.soort,
            kindNaam: facts?.naam || "",
            zwakVak: facts?.zwakVak || "",
            park: park || undefined,
            weetjes: buddyWeetjes(),
          },
        }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = data?.reply || "Hihi, ik ben even de draad kwijt. Zullen we iets leuks in het park doen? 🌟";
      setMessages((m) => [...m, { role: "assistant", content: reply }]);
      if (geluid) speak(reply);
    } catch {
      setMessages((m) => [...m, { role: "assistant", content: "Oeps, ik kan even niet praten. Probeer het zo nog eens! 🙏" }]);
    } finally {
      setBusy(false);
      setTimeout(() => { try { inputRef.current?.focus(); } catch {} }, 30);
    }
  }

  if (!open || !b) return null;
  const accent = b.kleur2 || "#2e7d32";

  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: 32, background: "rgba(8,16,26,0.55)", display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        width: "min(460px, 100%)", maxHeight: "82vh", display: "flex", flexDirection: "column",
        background: "#fffef9", borderRadius: "20px 20px 0 0", boxShadow: "0 -8px 40px rgba(0,0,0,.4)", overflow: "hidden",
      }}>
        {/* kop */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 14px", background: `linear-gradient(135deg, ${b.kleur}, ${accent})`, color: "#fff" }}>
          <span style={{ fontSize: 26 }}>{b.emoji}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ font: "900 16px system-ui", lineHeight: 1.1 }}>{naam}</div>
            <div style={{ font: "600 11px system-ui", opacity: 0.9 }}>jouw maatje · {b.karakter}</div>
          </div>
          <button onClick={() => setGeluid((g) => !g)} title={geluid ? "Geluid uit" : "Geluid aan"}
            style={{ border: "none", background: "rgba(255,255,255,0.22)", color: "#fff", width: 34, height: 34, borderRadius: 999, fontSize: 16, cursor: "pointer" }}>
            {geluid ? "🔊" : "🔇"}
          </button>
          <button onClick={onClose} title="Sluiten"
            style={{ border: "none", background: "rgba(255,255,255,0.22)", color: "#fff", width: 34, height: 34, borderRadius: 999, fontSize: 16, fontWeight: 800, cursor: "pointer" }}>
            ✕
          </button>
        </div>

        {/* berichten */}
        <div ref={lijstRef} style={{ flex: 1, overflowY: "auto", padding: "14px", display: "flex", flexDirection: "column", gap: 9, background: "#f7f9f4" }}>
          {messages.map((m, i) => {
            const ai = m.role === "assistant";
            return (
              <div key={i} style={{ display: "flex", justifyContent: ai ? "flex-start" : "flex-end" }}>
                <div style={{
                  maxWidth: "80%", padding: "9px 13px", borderRadius: 16,
                  borderBottomLeftRadius: ai ? 4 : 16, borderBottomRightRadius: ai ? 16 : 4,
                  background: ai ? "#fff" : `linear-gradient(135deg, ${b.kleur}, ${accent})`,
                  color: ai ? "#243" : "#fff", font: "600 14px/1.4 system-ui",
                  boxShadow: "0 1px 4px rgba(0,0,0,.1)", whiteSpace: "pre-wrap",
                }}>
                  {ai && <span style={{ marginRight: 5 }}>{b.emoji}</span>}{m.content}
                </div>
              </div>
            );
          })}
          {busy && (
            <div style={{ display: "flex", justifyContent: "flex-start" }}>
              <div style={{ padding: "9px 14px", borderRadius: 16, background: "#fff", color: "#8a93a0", font: "600 14px system-ui", boxShadow: "0 1px 4px rgba(0,0,0,.1)" }}>
                {b.emoji} <span style={{ letterSpacing: 2 }}>···</span>
              </div>
            </div>
          )}
        </div>

        {/* starters (alleen aan het begin) */}
        {messages.length <= 1 && !busy && (
          <div style={{ display: "flex", gap: 7, flexWrap: "wrap", padding: "10px 12px 0" }}>
            {STARTERS.map((s) => (
              <button key={s} onClick={() => stuur(s)} style={{
                border: `1.5px solid ${accent}`, background: "#fff", color: accent,
                borderRadius: 999, padding: "7px 12px", font: "700 12.5px system-ui", cursor: "pointer",
              }}>{s}</button>
            ))}
          </div>
        )}

        {/* invoer */}
        <form onSubmit={(e) => { e.preventDefault(); stuur(invoer); }} style={{ display: "flex", gap: 8, padding: "10px 12px calc(10px + env(safe-area-inset-bottom))", borderTop: "1px solid #ececec", background: "#fffef9" }}>
          <input
            ref={inputRef}
            value={invoer}
            onChange={(e) => setInvoer(e.target.value)}
            maxLength={200}
            placeholder={`Praat met ${naam}…`}
            aria-label={`Bericht aan ${naam}`}
            style={{ flex: 1, minWidth: 0, border: "2px solid #dfe6da", borderRadius: 999, padding: "11px 16px", font: "600 14px system-ui", color: "#243", background: "#fff", outline: "none" }}
          />
          <button type="submit" disabled={busy || !invoer.trim()} style={{
            border: "none", borderRadius: 999, width: 46, height: 46, flexShrink: 0,
            background: invoer.trim() && !busy ? `linear-gradient(135deg, ${b.kleur}, ${accent})` : "#cfd6cc",
            color: "#fff", fontSize: 18, cursor: invoer.trim() && !busy ? "pointer" : "default",
          }}>➤</button>
        </form>
      </div>
    </div>
  );
}

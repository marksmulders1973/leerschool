// AITutor — drawer-style chat-interface die de leerling helpt bij de huidige
// uitleg-stap. Context (pad-titel, stap-titel, uitleg, evt. check + fout-poging)
// gaat naar /api/tutor-chat als system-prompt.
//
// Phase 1 (deze versie): request-response. localStorage chat-history per stap.
// Phase 2 (volgt): streaming, suggested-question chips, voice-input.
//
// MVP scope: niet meer dan ~150 regels, geen dependencies buiten React.

import { useState, useEffect, useRef, lazy, Suspense } from "react";
import useFocusTrap from "../../shared/hooks/useFocusTrap.js";
import MdInline from "../../shared/ui/MdInline.jsx";
import ProBadge from "../../subscription/ProBadge.jsx";
import { trackProUse } from "../../subscription/proPlan.js";
import { actieveBuddyPersona, buddyWeetjes } from "../zoo/buddies.js";
import { maakMeeleesPlan, woordIndexBijChar } from "../../shared/spraakTekst.js";
import { track } from "../../utils.js";

// Maatje-portret (medaillon; Charley = geanimeerde 3D-kop) — lazy zodat
// three.js pas laadt als het venster opent.
const BuddyKop = lazy(() => import("../zoo/BuddyKop.jsx"));

const STORAGE_PREFIX = "studiebol_tutor_chat_";

function storageKey(pathId, stepIdx) {
  return `${STORAGE_PREFIX}${pathId}_${stepIdx}`;
}

const SUGGESTIES = [
  "Leg het anders uit",
  "Geef een voorbeeld",
  "Waarom is dit belangrijk?",
];

// Hardop voorlezen met de gratis browserstem (Nederlands), iets hoger = liever
// (zelfde aanpak als BuddyChat). Geen kosten, geen kinderdata verlaat het toestel.
// onStart/onEnd sturen de mond-animatie van Charley's kop aan.
function speak(text, { onStart, onEnd, onWoord } = {}) {
  try {
    if (!window.speechSynthesis) { onEnd && onEnd(); return; }
    // Meelezen (Mark 15 jul): het plan koppelt de gesproken tekst (zonder
    // emoji's/markdown) terug aan de getoonde woord-indexen.
    const plan = maakMeeleesPlan(text);
    if (!plan.gesproken) { onEnd && onEnd(); return; }
    const u = new SpeechSynthesisUtterance(plan.gesproken);
    u.lang = "nl-NL";
    const stem = window.speechSynthesis.getVoices().find((v) => (v.lang || "").toLowerCase().startsWith("nl"));
    if (stem) u.voice = stem;
    u.rate = 1.0; u.pitch = 1.3;
    // onboundary vuurt per uitgesproken woord — maar niet elke stem doet dat
    // (sommige online stemmen zwijgen). Dan neemt na 1,2s een tempo-schatter
    // het over zodat het meelezen tóch meeloopt.
    let boundaryGezien = false;
    let timer = null;
    const stopTimer = () => { if (timer) { clearTimeout(timer); timer = null; } };
    if (onWoord) {
      u.onboundary = (e) => {
        boundaryGezien = true;
        stopTimer();
        onWoord(woordIndexBijChar(plan, e.charIndex || 0));
      };
    }
    u.onstart = () => {
      onStart && onStart();
      if (!onWoord || !plan.grenzen.length) return;
      setTimeout(() => {
        if (boundaryGezien || !window.speechSynthesis.speaking) return;
        let g = 0;
        const stap = () => {
          if (boundaryGezien || g >= plan.grenzen.length || !window.speechSynthesis.speaking) return;
          const grens = plan.grenzen[g];
          onWoord(grens.woordIdx);
          timer = setTimeout(() => { g += 1; stap(); }, 190 + 55 * (grens.eind - grens.start));
        };
        stap();
      }, 1200);
    };
    const klaar = () => { stopTimer(); onEnd && onEnd(); };
    u.onend = klaar;
    u.onerror = klaar;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch { onEnd && onEnd(); }
}

function stopSpeak() {
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch { /* */ }
}

// Meelees-weergave (Mark 15 jul): tijdens het voorlezen licht het woord op dat
// de stem nú uitspreekt — karaoke-stijl. Rendert alleen **vet** (meer markdown
// gebruikt de tutor zelden); zodra het voorlezen klaar is neemt MdInline het
// weer over. Woord-telling MOET gelijk lopen met maakMeeleesPlan: beide tellen
// elk niet-witruimte-token.
function MeeleesTekst({ tekst, actief, accent }) {
  const stukken = String(tekst ?? "").split(/(\s+)/);
  let woordIdx = -1;
  let vet = false;
  return (
    <>
      {stukken.map((stuk, i) => {
        if (!stuk) return null;
        if (/^\s+$/.test(stuk)) return stuk; // pre-wrap bewaart enters
        woordIdx += 1;
        const dit = woordIdx;
        const delen = stuk.split("**");
        const inhoud = delen.map((d, j) => {
          const stijl = vet ? { fontWeight: 700 } : undefined;
          if (j < delen.length - 1) vet = !vet;
          return d ? <span key={j} style={stijl}>{d}</span> : null;
        });
        return (
          <span
            key={i}
            style={dit === actief ? {
              background: accent,
              color: "#04121f",
              borderRadius: 4,
              padding: "0 3px",
              margin: "0 -3px",
              transition: "background 0.1s",
            } : undefined}
          >
            {inhoud}
          </span>
        );
      })}
    </>
  );
}

export default function AITutor({ open, onClose, pathTitle, pathId, stepTitle, stepIdx, stepExplanation, currentCheck, lastWrongAnswer, startVraag = null }) {
  const [messages, setMessages] = useState(() => {
    if (typeof window === "undefined") return [];
    try {
      const raw = localStorage.getItem(storageKey(pathId, stepIdx));
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [geluid, setGeluid] = useState(true);
  const [praat, setPraat] = useState(false);   // Charley's mond beweegt terwijl hij voorleest
  const [leesMsg, setLeesMsg] = useState(-1);  // welke bubble wordt voorgelezen (meelezen)
  const [leesWoord, setLeesWoord] = useState(-1); // welk woord de stem nú uitspreekt
  const scrollRef = useRef(null);

  // Persona = het maatje dat de leerling koos (of Vonk als vlaggenschip). Zo is
  // het écht "Vonk helpt je", geen anonieme AI. Eén keer lezen bij open.
  const [buddy] = useState(() => actieveBuddyPersona());
  const naam = buddy.naam || "Vonk";
  const emoji = buddy.emoji || "🐉";
  const accent = buddy.kleur || "#5bbf5a";

  // Meten of leerlingen Vonk leuk vinden: open-event (venster geopend) los van
  // het vraag-event (echt iets gevraagd) → trechter open→vraag. Stop met praten
  // zodra het venster sluit.
  useEffect(() => {
    if (open) {
      try { track("vonk_hulp_open", { pathId, buddy: buddy.id }); } catch { /* */ }
    } else {
      stopSpeak();
      setPraat(false);
      setLeesMsg(-1); setLeesWoord(-1);
    }
    return () => { stopSpeak(); setPraat(false); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // WoordHulp (Mark 11 jul): geopend via een tik op een moeilijk woord →
  // vraag vooringevuld ("Wat betekent kernfusie?"). Kind drukt zelf op
  // versturen — bewuste AI-call, geen automatische kosten.
  useEffect(() => {
    if (open && startVraag) setInput(startVraag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, startVraag]);

  // Reload history bij wisseling van stap (component blijft mounted, alleen
  // pathId/stepIdx veranderen).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey(pathId, stepIdx));
      setMessages(raw ? JSON.parse(raw) : []);
      setError(null);
    } catch {
      setMessages([]);
    }
  }, [pathId, stepIdx]);

  // Auto-scroll naar onderkant bij nieuw bericht
  useEffect(() => {
    if (open && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const persist = (next) => {
    try {
      // Bug-jacht 7/7: cap per gesprek — de volledige history groeide anders
      // onbegrensd mee in localStorage (key per pad × stap, nooit opgeschoond).
      localStorage.setItem(storageKey(pathId, stepIdx), JSON.stringify(next.slice(-30)));
    } catch {}
  };

  const send = async (text) => {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    const next = [...messages, { role: "user", content }];
    setMessages(next);
    persist(next);
    setInput("");
    setBusy(true);
    setError(null);
    // Pro-meting (Mark 2026-06-06): elke échte AI-vraag = 1 gebruik.
    trackProUse("ai-tutor", { pathId });
    // Buddy-tutor-meting (Mark 2026-07-01): hoe vaak roepen leerlingen Vonk op?
    try { track("vonk_hulp_vraag", { pathId, buddy: buddy.id }); } catch { /* */ }

    // Audit fix 2026-05-14: correctOption NIET meer in payload. AI moet uit
    // uitleg + opties zelf afleiden welke optie correct is, anders kan een
    // doorgewinterde leerling het antwoord uit de prompt-context lekken.

    try {
      const resp = await fetch("/api/tutor-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.slice(-12),
          context: {
            pathId,
            pathTitle,
            stepTitle,
            stepExplanation,
            currentCheckQuestion: currentCheck?.q,
            checkOptions: currentCheck?.options,
            lastWrongAnswer,
            // Park-weetjes (Mark 2 jul): het maatje kent het kind — de tutor
            // spreekt met roepnaam en mag er warm op inhaken.
            weetjes: buddyWeetjes(),
            // Bug-jacht 7/7: de UI zegt "{naam} helpt je" maar de AI wist zelf
            // niet wie hij was — persona meesturen zodat "ben jij Vonk?" klopt.
            buddyNaam: naam,
            buddySoort: buddy.soort,
          },
        }),
      });
      const data = await resp.json();
      if (!resp.ok || data.error) {
        throw new Error(data.error || `HTTP ${resp.status}`);
      }
      const after = [...next, { role: "assistant", content: data.reply }];
      setMessages(after);
      persist(after);
      if (geluid) {
        const msgIdx = after.length - 1;
        setLeesMsg(msgIdx);
        setLeesWoord(-1);
        speak(data.reply, {
          onStart: () => setPraat(true),
          onWoord: (w) => setLeesWoord(w),
          onEnd: () => { setPraat(false); setLeesMsg(-1); setLeesWoord(-1); },
        });
      }
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  // B5.3 (7-bots-review a11y): focus-trap + Escape sluit de drawer.
  const trapRef = useFocusTrap(open, { onEsc: onClose });

  if (!open) return null;

  return (
    <div
      ref={trapRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Hulp van ${naam}`}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(8, 14, 28, 0.55)",
        zIndex: 200,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 640,
          maxHeight: "82vh",
          background: "#0f1729",
          borderTop: "1px solid rgba(255,255,255,0.10)",
          borderTopLeftRadius: 18,
          borderTopRightRadius: 18,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          boxShadow: "0 -16px 40px rgba(0,0,0,0.5)",
        }}
      >
        {/* Header */}
        <header style={{
          padding: "14px 16px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
            <Suspense fallback={<span style={{ fontSize: 24, lineHeight: 1 }}>{emoji}</span>}>
              <BuddyKop buddy={buddy} size={60} praat={praat} />
            </Suspense>
            <div style={{ minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#fff" }}>
                {naam} helpt je
                <ProBadge feature="ai-tutor" />
              </div>
              <div style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.55)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                Bij: {stepTitle}
              </div>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <button
              onClick={() => { setGeluid((g) => { if (g) { stopSpeak(); setPraat(false); setLeesMsg(-1); setLeesWoord(-1); } return !g; }); }}
              aria-label={geluid ? `${naam} stil zetten` : `${naam} hardop laten praten`}
              title={geluid ? "Geluid uit" : "Geluid aan"}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
                borderRadius: 8,
                padding: "4px 10px",
                cursor: "pointer",
                fontSize: 15,
              }}
            >
              {geluid ? "🔊" : "🔇"}
            </button>
            <button
              onClick={onClose}
              aria-label={`Sluit ${naam}`}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "rgba(255,255,255,0.7)",
                borderRadius: 8,
                padding: "4px 10px",
                cursor: "pointer",
                fontSize: 13,
              }}
            >
              ✕
            </button>
          </div>
        </header>

        {/* Chat-bubbles */}
        <div ref={scrollRef} style={{
          flex: 1,
          overflowY: "auto",
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          minHeight: 200,
        }}>
          {messages.length === 0 && (
            <div style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.55)",
              padding: "8px 4px 4px",
              lineHeight: 1.55,
            }}>
              {emoji} Hoi! Ik ben {naam} en ik weet aan welke vraag je werkt. Vertel
              wat je lastig vindt, of tik op een knopje hieronder — we komen er samen uit.
            </div>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "85%",
                background: m.role === "user" ? "rgba(0,200,83,0.18)" : "rgba(255,255,255,0.05)",
                border: `1px solid ${m.role === "user" ? "rgba(0,200,83,0.40)" : "rgba(255,255,255,0.08)"}`,
                color: "#E6EBF5",
                padding: "9px 12px",
                borderRadius: 14,
                borderBottomRightRadius: m.role === "user" ? 4 : 14,
                borderBottomLeftRadius: m.role === "user" ? 14 : 4,
                fontSize: 14,
                lineHeight: 1.5,
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {m.role === "assistant" && i === leesMsg
                ? <MeeleesTekst tekst={m.content} actief={leesWoord} accent={accent} />
                : <MdInline text={m.content} />}
            </div>
          ))}
          {busy && (
            <div style={{
              alignSelf: "flex-start",
              fontSize: 12,
              color: "rgba(255,255,255,0.55)",
              padding: "6px 12px",
            }}>
              {naam} denkt na…
            </div>
          )}
          {error && (
            <div style={{
              alignSelf: "stretch",
              fontSize: 12,
              color: "#ff8a8a",
              background: "rgba(226,75,74,0.10)",
              border: "1px solid rgba(226,75,74,0.35)",
              padding: "8px 10px",
              borderRadius: 10,
            }}>
              Iets ging mis: {error}. Probeer het zo nog eens.
            </div>
          )}
        </div>

        {/* Suggested-question chips (alleen bij lege chat) */}
        {messages.length === 0 && (
          <div style={{
            padding: "0 14px 8px",
            display: "flex",
            gap: 6,
            flexWrap: "wrap",
          }}>
            {SUGGESTIES.map((s) => (
              <button
                key={s}
                onClick={() => send(s)}
                disabled={busy}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  color: "rgba(230,235,245,0.85)",
                  fontSize: 12,
                  padding: "6px 10px",
                  borderRadius: 999,
                  cursor: busy ? "not-allowed" : "pointer",
                  fontFamily: "var(--font-body)",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <form
          onSubmit={(e) => { e.preventDefault(); send(); }}
          style={{
            padding: "10px 12px 12px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            gap: 8,
            alignItems: "flex-end",
          }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            placeholder={`Vraag ${naam} iets…`}
            rows={1}
            disabled={busy}
            style={{
              flex: 1,
              resize: "none",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: 12,
              padding: "10px 12px",
              color: "#E6EBF5",
              fontSize: 14,
              fontFamily: "var(--font-body)",
              lineHeight: 1.4,
              maxHeight: 120,
              outline: "none",
            }}
          />
          <button
            type="submit"
            disabled={busy || !input.trim()}
            style={{
              background: input.trim() && !busy ? "#00C853" : "rgba(255,255,255,0.06)",
              color: input.trim() && !busy ? "#001218" : "rgba(255,255,255,0.4)",
              border: "none",
              borderRadius: 12,
              padding: "10px 16px",
              fontFamily: "var(--font-display)",
              fontSize: 13,
              fontWeight: 700,
              cursor: input.trim() && !busy ? "pointer" : "not-allowed",
              minHeight: 40,
            }}
          >
            ↑
          </button>
        </form>
      </div>
    </div>
  );
}

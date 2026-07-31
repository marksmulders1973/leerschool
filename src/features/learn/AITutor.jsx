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
import { spreekMetMeelezen } from "../../shared/spraakTekst.js";
import MeeleesTekst from "../../shared/ui/MeeleesTekst.jsx";
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
function speak(text, callbacks = {}) {
  spreekMetMeelezen(text, { rate: 1.0, pitch: 1.3, ...callbacks });
}

function stopSpeak() {
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch { /* */ }
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
  // Spiegelt `open` zodat een laat binnenkomend AI-antwoord niet begint voor te
  // lezen nadat het kind het venster al sloot (Vonk praat anders door over het
  // volgende scherm heen). (bug-jacht 2026-07-31)
  const openRef = useRef(open);

  // Persona = het maatje dat de leerling koos (of Vonk als vlaggenschip). Zo is
  // het écht "Vonk helpt je", geen anonieme AI. Eén keer lezen bij open.
  const [buddy] = useState(() => actieveBuddyPersona());
  const naam = buddy.naam || "Vonk";
  const emoji = buddy.emoji || "🐉";
  const accent = buddy.kleur || "#5bbf5a";
  const groet = `Hoi! Ik ben ${naam} en ik weet aan welke vraag je werkt. Vertel wat je lastig vindt, of tik op een knopje hieronder — we komen er samen uit.`;

  // Meten of leerlingen Vonk leuk vinden: open-event (venster geopend) los van
  // het vraag-event (echt iets gevraagd) → trechter open→vraag. Stop met praten
  // zodra het venster sluit.
  useEffect(() => {
    openRef.current = open;
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

  // "Lees voor"-knop (Mark 31 jul): een tik op de luidspreker leest DIE bubble
  // hardop voor. De speak() zit synchroon in de tik → werkt op mobiel én
  // ontgrendelt de spraak op de iPhone (het automatische voorlezen ná een
  // antwoord werd daar anders geblokkeerd omdat het buiten een tik viel).
  // msgIdx = -2 is het welkomstzinnetje; nogmaals tikken = stoppen.
  const leesVoor = (tekst, msgIdx) => {
    if (leesMsg === msgIdx) {
      stopSpeak(); setPraat(false); setLeesMsg(-1); setLeesWoord(-1);
      return;
    }
    stopSpeak();
    setLeesMsg(msgIdx); setLeesWoord(-1);
    speak(tekst, {
      onStart: () => setPraat(true),
      onWoord: (w) => setLeesWoord(w),
      onEnd: () => { setPraat(false); setLeesMsg(-1); setLeesWoord(-1); },
    });
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
      const data = await resp.json().catch(() => ({}));
      if (!resp.ok || data.error) {
        throw new Error(data.error || `HTTP ${resp.status}`);
      }
      // Vangnet: een 200 zonder `reply` (leeg model-antwoord of iets ander schema)
      // gaf een lege bubble + speak(undefined). Zelfde guard als BuddyChat/Maatje.
      // (bug-jacht 2026-07-31)
      const reply = data?.reply || "Sorry, ik kon even geen goed antwoord bedenken. Probeer je vraag nog eens? 🙂";
      const after = [...next, { role: "assistant", content: reply }];
      setMessages(after);
      persist(after);
      // Niet voorlezen als het venster intussen gesloten is (late-antwoord-race).
      if (geluid && openRef.current) {
        const msgIdx = after.length - 1;
        setLeesMsg(msgIdx);
        setLeesWoord(-1);
        speak(reply, {
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
            {/* Mark 16 jul: Charley is gebaseerd op onze échte hond — de foto
                ernaast maakt het maatje geloofwaardig en persoonlijk ("dit
                hondje bestaat echt"). Alleen bij Charley, 18KB thumb. */}
            {buddy.id === "charley" && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, flexShrink: 0 }}>
                <img
                  src="/maatjes/charley-echt.jpg"
                  alt="De echte hond Charley, waar dit hulphondje op gebaseerd is"
                  style={{ width: 42, height: 42, borderRadius: "50%", objectFit: "cover", border: "2px solid #00C853" }}
                />
                <span style={{ fontSize: 9, color: "rgba(255,255,255,0.65)", whiteSpace: "nowrap" }}>in het écht 🐾</span>
              </div>
            )}
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
              aria-label={geluid ? "Antwoorden automatisch voorlezen: aan" : "Antwoorden automatisch voorlezen: uit"}
              title={geluid ? "Antwoorden worden automatisch voorgelezen (tik = uit)" : "Automatisch voorlezen staat uit (tik = aan)"}
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
              <div style={{ marginBottom: 8 }}>
                {emoji} {groet}
              </div>
              <button
                onClick={() => leesVoor(groet, -2)}
                aria-label={leesMsg === -2 ? "Stop met voorlezen" : `${naam} dit laten voorlezen`}
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  color: "rgba(255,255,255,0.85)", borderRadius: 999,
                  padding: "5px 13px", cursor: "pointer", fontSize: 12.5,
                  fontFamily: "inherit",
                }}
              >
                {leesMsg === -2 ? "⏹ Stop" : "🔊 Lees voor"}
              </button>
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
              {m.role === "assistant" && (
                <button
                  onClick={() => leesVoor(m.content, i)}
                  aria-label={leesMsg === i ? "Stop met voorlezen" : "Lees dit voor"}
                  title={leesMsg === i ? "Stop" : "Lees voor"}
                  style={{
                    display: "block", marginTop: 6, padding: 0, lineHeight: 1,
                    background: "transparent", border: "none",
                    color: leesMsg === i ? accent : "rgba(255,255,255,0.55)",
                    cursor: "pointer", fontSize: 15,
                  }}
                >
                  {leesMsg === i ? "⏹" : "🔊"}
                </button>
              )}
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

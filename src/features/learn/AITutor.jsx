// AITutor — drawer-style chat-interface die de leerling helpt bij de huidige
// uitleg-stap. Context (pad-titel, stap-titel, uitleg, evt. check + fout-poging)
// gaat naar /api/tutor-chat als system-prompt.
//
// Phase 1 (deze versie): request-response. localStorage chat-history per stap.
// Phase 2 (volgt): streaming, suggested-question chips, voice-input.
//
// MVP scope: niet meer dan ~150 regels, geen dependencies buiten React.

import { useState, useEffect, useRef } from "react";
import MdInline from "../../shared/ui/MdInline.jsx";

const STORAGE_PREFIX = "studiebol_tutor_chat_";

function storageKey(pathId, stepIdx) {
  return `${STORAGE_PREFIX}${pathId}_${stepIdx}`;
}

const SUGGESTIES = [
  "Leg het anders uit",
  "Geef een voorbeeld",
  "Waarom is dit belangrijk?",
];

export default function AITutor({ open, onClose, pathTitle, pathId, stepTitle, stepIdx, stepExplanation, currentCheck, lastWrongAnswer }) {
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
  const scrollRef = useRef(null);

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
      localStorage.setItem(storageKey(pathId, stepIdx), JSON.stringify(next));
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

    const correctOption =
      currentCheck && Number.isInteger(currentCheck.answer) && Array.isArray(currentCheck.options)
        ? currentCheck.options[currentCheck.answer]
        : undefined;

    try {
      const resp = await fetch("/api/tutor-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next,
          context: {
            pathTitle,
            stepTitle,
            stepExplanation,
            currentCheckQuestion: currentCheck?.q,
            checkOptions: currentCheck?.options,
            correctOption,
            lastWrongAnswer,
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
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(false);
    }
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="AI-tutor"
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
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              background: "#00C853",
              boxShadow: "0 0 8px rgba(0,200,83,0.7)",
            }} />
            <div style={{ minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#fff" }}>
                AI-tutor
              </div>
              <div style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.55)",
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}>
                Helpt met: {stepTitle}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Sluit tutor"
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
              Hoi! Ik weet over welke stap je bezig bent. Stel een vraag, of klik
              op een suggestie hieronder.
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
              <MdInline text={m.content} />
            </div>
          ))}
          {busy && (
            <div style={{
              alignSelf: "flex-start",
              fontSize: 12,
              color: "rgba(255,255,255,0.55)",
              padding: "6px 12px",
            }}>
              Tutor denkt na…
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
            placeholder="Stel je vraag…"
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

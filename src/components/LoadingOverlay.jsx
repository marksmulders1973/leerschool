import { useState, useEffect } from "react";
import { BRAND } from "../brand.js";

// Fullscreen loading-overlay voor lange AI-calls (toetsvraag-generatie).
// Niet voor route-overgangen — daar gebruiken we PageLoader (3px shimmer).

export default function LoadingOverlay({ mode, onCancel }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const textbookMessages = [
    "📚 Inhoudsopgave van je boek opzoeken...",
    "🔍 Echte toetsvragen zoeken op het internet...",
    "🧠 Dit duurt even — echte vragen zijn het waard!",
    "⏳ Nog even geduld, we willen dat de vragen écht kloppen...",
    "📝 Vragen samenstellen uit echte bronnen...",
    "✨ Bijna klaar! Kwaliteit kost een paar seconden extra...",
  ];
  const selfMessages = [
    "🧠 De AI denkt na over jouw onderwerp...",
    "📝 Vragen opstellen op het juiste niveau...",
    "✅ Elk antwoord wordt gecontroleerd op juistheid...",
    "🎯 Foute antwoorden worden bewust slim gemaakt...",
    "✨ Bijna klaar — goede vragen maken kost even tijd!",
  ];
  const messages = mode === "textbook" ? textbookMessages : selfMessages;

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % messages.length);
    }, mode === "textbook" ? 4000 : 5000);
    return () => clearInterval(interval);
  }, [mode, messages.length]);

  return (
    <div
      role="status"
      aria-live="polite"
      style={{
        position: "fixed",
        inset: 0,
        background:
          "linear-gradient(135deg, var(--color-bg-base), var(--color-bg-surface))",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 200,
        padding: "var(--space-5)",
      }}
    >
      <img
        src="/logo.jpg"
        alt={BRAND.shortName}
        style={{
          width: "80%",
          maxWidth: 300,
          marginBottom: "var(--space-5)",
          borderRadius: "var(--radius-xl)",
          animation: "pulse 2s ease infinite",
        }}
      />
      <h2
        style={{
          fontFamily: "var(--font-display)",
          color: "var(--color-text-strong)",
          fontSize: "var(--font-size-xl)",
          fontWeight: "var(--font-weight-bold)",
          marginBottom: "var(--space-3)",
        }}
      >
        {mode === "textbook" ? "Echte vragen zoeken..." : "Vragen op maat maken..."}
      </h2>
      <div
        aria-hidden="true"
        style={{ display: "flex", gap: 6, marginBottom: "var(--space-5)" }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              width: 12,
              height: 12,
              borderRadius: "var(--radius-pill)",
              background: "var(--color-brand-primary)",
              animation: `loadDot 1.2s ease ${i * 0.15}s infinite`,
            }}
          />
        ))}
      </div>
      <p
        key={msgIndex}
        style={{
          color: "var(--color-brand-primary-100)",
          fontSize: "var(--font-size-md)",
          fontFamily: "var(--font-body)",
          textAlign: "center",
          padding: "0 var(--space-5)",
          lineHeight: "var(--line-height-normal)",
          fontWeight: "var(--font-weight-bold)",
          minHeight: 42,
          animation: "fadeIn 0.5s ease",
        }}
      >
        {messages[msgIndex]}
      </p>
      <p
        style={{
          color: "var(--color-text-subtle)",
          fontSize: "var(--font-size-xs)",
          fontFamily: "var(--font-body)",
          textAlign: "center",
          marginTop: "var(--space-2)",
          padding: "0 var(--space-5)",
        }}
      >
        {mode === "textbook"
          ? "Echte vragen zoeken kost ~20 seconden — maar dan heb je ook wat!"
          : "⏱️ Duurt ongeveer 20-30 seconden — kwaliteit kost even tijd!"}
      </p>
      {onCancel && (
        <button
          type="button"
          onClick={onCancel}
          style={{
            marginTop: "var(--space-5)",
            padding: "var(--space-3) var(--space-5)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border)",
            background: "transparent",
            color: "var(--color-text-muted)",
            fontFamily: "var(--font-body)",
            fontWeight: "var(--font-weight-bold)",
            fontSize: "var(--font-size-sm)",
            cursor: "pointer",
            minHeight: "var(--tap-target-min)",
          }}
        >
          Annuleren
        </button>
      )}
      <style>{`
        @keyframes loadDot {
          0%, 80%, 100% { transform: scale(0.5); opacity: 0.3; }
          40% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

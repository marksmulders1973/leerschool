import { useState, useEffect } from "react";

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
      setMsgIndex(prev => (prev + 1) % messages.length);
    }, mode === "textbook" ? 4000 : 5000);
    return () => clearInterval(interval);
  }, [mode, messages.length]);

  return (
    <div style={{ position: "fixed", inset: 0, background: "linear-gradient(135deg, #1a1a2e, #16213e)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 200 }}>
      <img src="/logo.jpg" alt="studiebol" style={{ width: "80%", maxWidth: 300, marginBottom: 24, borderRadius: 20, animation: "pulse 2s ease infinite" }} />
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", color: "#fff", fontSize: 22, marginBottom: 12 }}>{mode === "textbook" ? "Echte vragen zoeken..." : "Vragen op maat maken..."}</h2>
      <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: 6, background: "#00e676", animation: `loadDot 1.2s ease ${i * 0.15}s infinite` }} />
        ))}
      </div>
      <p style={{ color: "#69f0ae", fontSize: 14, fontFamily: "'Nunito', sans-serif", textAlign: "center", padding: "0 20px", lineHeight: 1.5, fontWeight: 700, minHeight: 42, animation: "fadeIn 0.5s ease" }} key={msgIndex}>{messages[msgIndex]}</p>
      <p style={{ color: "#556677", fontSize: 11, fontFamily: "'Nunito', sans-serif", textAlign: "center", marginTop: 8, padding: "0 20px" }}>
        {mode === "textbook" ? "Echte vragen zoeken kost ~20 seconden — maar dan heb je ook wat!" : "⏱️ Duurt ongeveer 20-30 seconden — kwaliteit kost even tijd!"}
      </p>
      {onCancel && (
        <button onClick={onCancel} style={{ marginTop: 24, padding: "10px 24px", borderRadius: 12, border: "1px solid #2a3f5f", background: "transparent", color: "#556677", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
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

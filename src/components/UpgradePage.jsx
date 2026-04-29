import { useState } from "react";
import supabase from "../supabase.js";
import Header from "./Header.jsx";

export default function UpgradePage({ onBack, onHome, authUser, plan: defaultPlan = null }) {
  const [plan, setPlan] = useState(defaultPlan || "parent_pro");
  const [email, setEmail] = useState(authUser?.email || "");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const plans = [
    {
      id: "parent_pro",
      icon: "👨‍👩‍👧",
      label: "Ouder Pro",
      price: "€1,95",
      period: "/maand",
      color: "#00b0ff",
      bg: "rgba(0,176,255,0.12)",
      border: "rgba(0,176,255,0.35)",
      features: [
        "📊 Voortgang van je kind volgen",
        "📚 Scores per vak & niveau",
        "🎯 Cito-voorbereiding per onderdeel",
        "📅 Wekelijks overzicht",
        "🔔 Melding bij nieuwe scores",
      ],
    },
    {
      id: "teacher_pro",
      icon: "🏫",
      label: "Leerkracht Pro",
      price: "€9,95",
      period: "/maand",
      color: "#ff6b35",
      bg: "rgba(255,107,53,0.12)",
      border: "rgba(255,107,53,0.35)",
      features: [
        "♾️ Onbeperkt toetsen aanmaken",
        "👥 Meerdere klassen beheren",
        "📈 Voortgang per leerling exporteren",
        "🎯 Toetsen delen met collega's",
        "⚡ Prioriteit support",
      ],
    },
  ];

  const selected = plans.find(p => p.id === plan);

  const handleWaitlist = async () => {
    if (!email || !email.includes("@")) return;
    setLoading(true);
    try {
      await supabase.from("upgrade_waitlist").insert({ email, plan });
      setSent(true);
    } catch {}
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 100%)" }}>
      <Header title="Studiebol Pro ✨" subtitle="Meer uit Studiebol halen" onBack={onBack} onHome={onHome} />

      <div style={{ padding: "20px 20px 48px", maxWidth: 480, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Hero */}
        <div style={{ textAlign: "center", padding: "8px 0 4px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.2 }}>
            Kies jouw plan
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4 }}>
            Studiebol blijft gratis voor leerlingen — altijd
          </div>
        </div>

        {/* Plan tabs */}
        <div style={{ display: "flex", gap: 8 }}>
          {plans.map(p => (
            <button key={p.id} onClick={() => setPlan(p.id)} style={{
              flex: 1, padding: "10px 8px", borderRadius: 12, cursor: "pointer", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
              border: plan === p.id ? `2px solid ${p.color}` : "1px solid rgba(255,255,255,0.1)",
              background: plan === p.id ? p.bg : "rgba(255,255,255,0.04)",
              color: plan === p.id ? p.color : "rgba(255,255,255,0.45)",
              transition: "all 0.15s",
            }}>
              {p.icon} {p.label}
            </button>
          ))}
        </div>

        {/* Plan card */}
        {selected && (
          <div style={{ borderRadius: 20, border: `2px solid ${selected.color}`, background: selected.bg, padding: "22px 20px", boxShadow: `0 0 30px ${selected.bg}` }}>
            {/* Prijs */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 4, marginBottom: 16 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 42, fontWeight: 700, color: "var(--color-text-strong)" }}>{selected.price}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.5)" }}>{selected.period}</span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 11, color: selected.color, background: `${selected.color}22`, padding: "3px 8px", borderRadius: 8, fontWeight: 700 }}>
                BINNENKORT
              </span>
            </div>

            {/* Features */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {selected.features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${selected.color}33`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 11, color: selected.color }}>✓</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.8)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vergelijking gratis vs pro */}
        <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: "rgba(255,255,255,0.05)" }}>
            {["", "Gratis", "Pro"].map((h, i) => (
              <div key={i} style={{ padding: "8px 12px", fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: i === 2 ? selected?.color : "rgba(255,255,255,0.5)", textAlign: i > 0 ? "center" : "left" }}>{h}</div>
            ))}
          </div>
          {(plan === "teacher_pro" ? [
            ["Toetsen aanmaken", "max 20", "Onbeperkt"],
            ["Klassen beheren", "1", "Meerdere"],
            ["Voortgang exporteren", "✗", "✓"],
            ["Toetsen delen", "✗", "✓"],
          ] : [
            ["Kind volgen", "✗", "✓"],
            ["Scores per vak", "✗", "✓"],
            ["Cito overzicht", "✗", "✓"],
            ["Wekelijks rapport", "✗", "✓"],
          ]).map(([feat, free, pro], i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <div style={{ padding: "9px 12px", fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{feat}</div>
              <div style={{ padding: "9px 12px", fontFamily: "var(--font-display)", fontSize: 13, color: free === "✗" ? "rgba(255,255,255,0.2)" : "var(--color-brand-primary-100)", textAlign: "center" }}>{free}</div>
              <div style={{ padding: "9px 12px", fontFamily: "var(--font-display)", fontSize: 13, color: selected?.color, textAlign: "center", fontWeight: 700 }}>{pro}</div>
            </div>
          ))}
        </div>

        {/* Waitlist / notificeer mij */}
        {!sent ? (
          <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", padding: "18px 16px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 4 }}>
              🔔 Notificeer mij bij lancering
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 12 }}>
              Betaling via iDEAL of creditcard — binnenkort beschikbaar. Laat je e-mail achter en we sturen je een berichtje.
            </div>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="jouw@email.nl"
              style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.07)", color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 14, boxSizing: "border-box", outline: "none", marginBottom: 10 }}
            />
            <button
              onClick={handleWaitlist}
              disabled={loading || !email.includes("@")}
              style={{ width: "100%", padding: "13px", borderRadius: 12, border: "none", background: selected ? `linear-gradient(135deg, ${selected.color}, ${selected.color}cc)` : "#555", color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, cursor: "pointer", opacity: email.includes("@") ? 1 : 0.5 }}
            >
              {loading ? "Even geduld..." : "✉️ Houd me op de hoogte"}
            </button>
          </div>
        ) : (
          <div style={{ borderRadius: 16, border: "1px solid rgba(0,200,83,0.3)", background: "rgba(0,200,83,0.1)", padding: "20px", textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🎉</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "var(--color-brand-primary-100)", marginBottom: 4 }}>Je staat op de lijst!</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>We sturen je een mail zodra je kunt betalen.</div>
          </div>
        )}

        {/* Terug */}
        <button onClick={onBack} style={{ padding: "12px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-display)", fontSize: 15, cursor: "pointer" }}>
          ← Terug
        </button>
      </div>
    </div>
  );
}

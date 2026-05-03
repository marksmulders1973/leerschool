import { useState } from "react";
import supabase from "../supabase.js";
import Header from "./Header.jsx";
import { isLaunchPromoActive } from "../constants.js";
import { BRAND } from "../brand.js";

const PLANS = [
  {
    id: "parent_pro",
    icon: "👨‍👩‍👧",
    label: "Ouder",
    price: "€1,95",
    period: "/maand",
    color: "#00b0ff",
    bg: "rgba(0,176,255,0.12)",
    border: "rgba(0,176,255,0.35)",
    tag: null,
    features: [
      { text: "Kind koppelen via veilige code", pro: true },
      { text: "Scores & voortgang per vak", pro: true },
      { text: "Cito-verwachting op basis van scores", pro: true },
      { text: "Wekelijks rapport per e-mail", pro: true },
      { text: "Meerdere kinderen volgen", pro: true },
      { text: "AI-vragen onbeperkt", pro: true },
    ],
  },
  {
    id: "teacher_pro",
    icon: "🏫",
    label: "Leerkracht",
    price: "€9,95",
    period: "/maand",
    color: "#ff6b35",
    bg: "rgba(255,107,53,0.12)",
    border: "rgba(255,107,53,0.35)",
    tag: "Populair",
    features: [
      { text: "Onbeperkt toetsen aanmaken", pro: true },
      { text: "Voortgang per leerling inzien", pro: true },
      { text: "Resultaten exporteren (CSV)", pro: true },
      { text: "Meerdere klassen beheren", pro: true },
      { text: "AI-vragen onbeperkt", pro: true },
      { text: "Toetsen delen met collega's", pro: true },
    ],
  },
  {
    id: "school_s",
    icon: "🏡",
    label: "School S",
    price: "€29",
    period: "/maand",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.10)",
    border: "rgba(168,85,247,0.3)",
    tag: null,
    limit: 150,
    features: [
      { text: "Alle leerkrachten onbeperkt", pro: true },
      { text: "Ouder-toegang via schoolcode (max 150 leerlingen)", pro: true },
      { text: "Schoolbrede voortgang dashboard", pro: true },
      { text: "Eigen schoollogo in de app", pro: true },
      { text: "Jaarfactuur beschikbaar", pro: true },
    ],
  },
  {
    id: "school_m",
    icon: "🎓",
    label: "School M",
    price: "€49",
    period: "/maand",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.12)",
    border: "rgba(168,85,247,0.35)",
    tag: "Meest gekozen",
    limit: 450,
    features: [
      { text: "Alle leerkrachten onbeperkt", pro: true },
      { text: "Ouder-toegang via schoolcode (max 450 leerlingen)", pro: true },
      { text: "Schoolbrede voortgang dashboard", pro: true },
      { text: "Eigen schoollogo in de app", pro: true },
      { text: "Jaarfactuur beschikbaar", pro: true },
      { text: "Prioriteit ondersteuning", pro: true },
    ],
  },
  {
    id: "school_l",
    icon: "🏛️",
    label: "School L",
    price: "€79",
    period: "/maand",
    color: "#a855f7",
    bg: "rgba(168,85,247,0.14)",
    border: "rgba(168,85,247,0.4)",
    tag: null,
    limit: 800,
    features: [
      { text: "Alle leerkrachten onbeperkt", pro: true },
      { text: "Ouder-toegang via schoolcode (max 800 leerlingen)", pro: true },
      { text: "Schoolbrede voortgang dashboard", pro: true },
      { text: "Eigen schoollogo in de app", pro: true },
      { text: "Jaarfactuur beschikbaar", pro: true },
      { text: "Prioriteit ondersteuning", pro: true },
    ],
  },
];

const FREE_FEATURES = [
  "✓ Onbeperkt oefenen voor leerlingen",
  "✓ Alle vakken & niveaus",
  "✓ Scorebord & Hall of Fame",
  `✓ 5 AI-quizzes per dag`,
  "✓ Cito oefenen (groep 7 & 8)",
  "✓ Tot 20 toetsen aanmaken (leerkracht)",
];

export default function ProPage({ onBack, onHome, authUser, defaultPlan, onLogin, onTrialStarted, subscription }) {
  const [selected, setSelected] = useState(defaultPlan || "teacher_pro");
  const [email, setEmail] = useState(authUser?.email || "");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trialDone, setTrialDone] = useState(false);
  const [trialError, setTrialError] = useState("");

  const plan = PLANS.find(p => p.id === selected);

  const handleStartTrial = async () => {
    if (!authUser) { onLogin?.(); return; }
    setLoading(true);
    setTrialError("");
    const { error } = await supabase.from("subscriptions").upsert({
      user_id: authUser.id,
      tier: selected,
      trial_started_at: new Date().toISOString(),
    }, { onConflict: "user_id" });
    setLoading(false);
    if (error) { setTrialError("Er ging iets mis. Probeer opnieuw."); return; }
    setTrialDone(true);
    onTrialStarted?.({ tier: selected, trial_started_at: new Date().toISOString() });
  };

  const handleWaitlist = async () => {
    if (!email.includes("@")) return;
    setLoading(true);
    await supabase.from("upgrade_waitlist").insert({ email, plan: selected }).catch(() => {});
    setSent(true);
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(160deg, #08101e 0%, #0d1a2e 60%, #120820 100%)" }}>
      <Header title={`${BRAND.name} Pro ✨`} subtitle="Meer voor jou, beter voor je kind" onBack={onBack} onHome={onHome} />

      <div style={{ padding: "16px 20px 60px", maxWidth: 500, margin: "0 auto" }}>

        {/* Hero banner */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 20, background: isLaunchPromoActive() ? "rgba(124,58,237,0.18)" : "rgba(0,200,83,0.15)", border: isLaunchPromoActive() ? "1px solid rgba(167,139,250,0.5)" : "1px solid rgba(0,200,83,0.3)", fontFamily: "var(--font-body)", fontSize: 12, color: isLaunchPromoActive() ? "#c4b5fd" : "var(--color-brand-primary-100)", fontWeight: 700, marginBottom: 10 }}>
            {isLaunchPromoActive() ? "🎉 LANCERING — ALLES GRATIS IN 2026" : "1 MAAND GRATIS PROBEREN"}
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.2, marginBottom: 6 }}>
            {isLaunchPromoActive() ? <>Alle Pro-functies<br />gratis t/m 31 dec 2026</> : <>{BRAND.name} is gratis.<br />Pro maakt het krachtig.</>}
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
            {isLaunchPromoActive()
              ? "Geen betaling, geen creditcard. Prijzen hieronder starten pas in 2027."
              : "Leerlingen oefenen altijd gratis — Pro is voor ouders en leerkrachten"}
          </div>
        </div>

        {/* Gratis overzicht */}
        <div style={{ borderRadius: 16, border: "1px solid rgba(105,240,174,0.2)", background: "rgba(105,240,174,0.04)", padding: "14px 16px", marginBottom: 20 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "var(--color-brand-primary-100)", marginBottom: 10 }}>
            🆓 Gratis — altijd, voor iedereen
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
            {FREE_FEATURES.map((f, i) => (
              <div key={i} style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)" }}>{f}</div>
            ))}
          </div>
        </div>

        {/* Plan selector */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
          {/* Rij 1: Ouder + Leerkracht */}
          <div style={{ display: "flex", gap: 6 }}>
            {PLANS.filter(p => ["parent_pro", "teacher_pro"].includes(p.id)).map(p => (
              <button key={p.id} onClick={() => setSelected(p.id)} style={{
                flex: 1, padding: "9px 4px", borderRadius: 12, cursor: "pointer",
                border: selected === p.id ? `2px solid ${p.color}` : "1px solid rgba(255,255,255,0.08)",
                background: selected === p.id ? p.bg : "rgba(255,255,255,0.03)",
                transition: "all 0.15s", position: "relative",
              }}>
                {p.tag && <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", background: p.color, color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, whiteSpace: "nowrap" }}>{p.tag}</div>}
                <div style={{ fontSize: 18 }}>{p.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: selected === p.id ? p.color : "rgba(255,255,255,0.4)", marginTop: 2 }}>{p.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: selected === p.id ? "var(--color-text-strong)" : "rgba(255,255,255,0.3)", marginTop: 1 }}>{p.price}</div>
              </button>
            ))}
          </div>
          {/* Rij 2: School S/M/L */}
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.3)", display: "flex", alignItems: "center", paddingLeft: 2, whiteSpace: "nowrap" }}>School:</div>
            {PLANS.filter(p => p.id.startsWith("school_")).map(p => (
              <button key={p.id} onClick={() => setSelected(p.id)} style={{
                flex: 1, padding: "9px 4px", borderRadius: 12, cursor: "pointer",
                border: selected === p.id ? `2px solid ${p.color}` : "1px solid rgba(255,255,255,0.08)",
                background: selected === p.id ? p.bg : "rgba(255,255,255,0.03)",
                transition: "all 0.15s", position: "relative",
              }}>
                {p.tag && <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", background: p.color, color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, whiteSpace: "nowrap" }}>{p.tag}</div>}
                <div style={{ fontSize: 16 }}>{p.icon}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 11, fontWeight: 700, color: selected === p.id ? p.color : "rgba(255,255,255,0.4)", marginTop: 2 }}>{p.label}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: selected === p.id ? "var(--color-text-strong)" : "rgba(255,255,255,0.3)", marginTop: 1 }}>{p.price}</div>
                {p.limit && <div style={{ fontFamily: "var(--font-body)", fontSize: 9, color: selected === p.id ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)", marginTop: 1 }}>t/m {p.limit}</div>}
              </button>
            ))}
          </div>
        </div>

        {/* Plan detail kaart */}
        {plan && (
          <div style={{ borderRadius: 20, border: `2px solid ${plan.color}`, background: plan.bg, padding: "20px 18px", marginBottom: 20, boxShadow: `0 8px 32px ${plan.bg}` }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: plan.limit ? 4 : 16 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 700, color: "var(--color-text-strong)" }}>{plan.price}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{plan.period}</span>
            </div>
            {plan.limit && (
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 14, display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ background: `${plan.color}22`, border: `1px solid ${plan.color}44`, borderRadius: 6, padding: "2px 8px", color: plan.color, fontWeight: 700, fontSize: 11 }}>Max {plan.limit} leerlingen</span>
                <span>Meer leerlingen? Kies een groter plan.</span>
              </div>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              {plan.features.map((f, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 20, height: 20, borderRadius: "50%", background: `${plan.color}25`, border: `1px solid ${plan.color}55`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <span style={{ fontSize: 10, color: plan.color }}>✓</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.85)" }}>{f.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Exclusief Pro blok */}
        <div style={{ borderRadius: 14, border: "1px solid rgba(255,183,77,0.25)", background: "rgba(255,183,77,0.06)", padding: "14px 16px", marginBottom: 20 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#ffb74d", marginBottom: 8 }}>
            ⭐ Exclusief voor Pro-gebruikers
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {[
              "🤖 AI-vragen onbeperkt (gratis: 5 per dag)",
              "📧 Wekelijks voortgangsrapport per e-mail",
              "🔐 Kind koppelen via veilige koppelcode",
              "📊 Voortgang over tijd — grafiek per vak",
            ].map((f, i) => (
              <div key={i} style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{f}</div>
            ))}
          </div>
        </div>

        {/* Trial CTA */}
        {subscription?.trial_started_at && !trialDone ? (
          <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.04)", padding: "14px 16px", marginBottom: 16, display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 22 }}>ℹ️</span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.7)", marginBottom: 2 }}>Proefperiode al gebruikt</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.4)" }}>Je hebt eerder al een gratis proefperiode gehad. Neem een abonnement om door te gaan.</div>
            </div>
          </div>
        ) : trialDone ? (
          <div style={{ borderRadius: 16, border: "1px solid rgba(0,200,83,0.3)", background: "rgba(0,200,83,0.08)", padding: "24px", textAlign: "center", marginBottom: 16 }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🎉</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--color-brand-primary-100)", marginBottom: 4 }}>Proefperiode gestart!</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.55)" }}>
              Je hebt 30 dagen gratis toegang tot {plan?.label} Pro. Geen creditcard nodig.
            </div>
          </div>
        ) : (
          <div style={{ borderRadius: 16, border: `1px solid ${plan?.color || "#a855f7"}55`, background: plan ? `${plan.bg}` : "rgba(168,85,247,0.08)", padding: "18px 16px", marginBottom: 16 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 4 }}>
              🎁 Probeer {plan?.label} Pro gratis
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
              30 dagen alle Pro-functies — geen creditcard, geen verplichtingen.
            </div>
            {trialError && <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#ff6b6b", marginBottom: 10 }}>{trialError}</div>}
            <button
              onClick={handleStartTrial}
              disabled={loading}
              style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: plan ? `linear-gradient(135deg, ${plan.color}dd, ${plan.color}99)` : "#a855f7", color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, cursor: "pointer" }}
            >
              {loading ? "Bezig..." : authUser ? `🚀 Start gratis proefperiode` : `🔑 Inloggen om te starten`}
            </button>
            {!authUser && (
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.3)", textAlign: "center", marginTop: 8 }}>
                Je hebt een account nodig om de proefperiode te activeren
              </div>
            )}
          </div>
        )}

        {/* Waitlist */}
        {!sent ? (
          <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "18px 16px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 4 }}>
              🔔 Ontvang een berichtje bij lancering
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
              Betaling via iDEAL of creditcard — binnenkort. Geen spam, alleen één mail als het klaar is.
            </div>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleWaitlist()}
              placeholder="jouw@email.nl"
              style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.07)", color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 14, boxSizing: "border-box", outline: "none", marginBottom: 10 }}
            />
            <button
              onClick={handleWaitlist}
              disabled={loading || !email.includes("@")}
              style={{ width: "100%", padding: "13px", borderRadius: 12, border: "none", background: plan ? `linear-gradient(135deg, ${plan.color}dd, ${plan.color}99)` : "#555", color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, cursor: "pointer", opacity: email.includes("@") ? 1 : 0.5, transition: "opacity 0.2s" }}
            >
              {loading ? "Opslaan..." : "✉️ Ja, houd me op de hoogte"}
            </button>
          </div>
        ) : (
          <div style={{ borderRadius: 16, border: "1px solid rgba(0,200,83,0.3)", background: "rgba(0,200,83,0.08)", padding: "24px", textAlign: "center" }}>
            <div style={{ fontSize: 40, marginBottom: 10 }}>🎉</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, color: "var(--color-brand-primary-100)", marginBottom: 4 }}>Je staat op de lijst!</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
              Eén mailtje als het beschikbaar is. Meer niet.
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

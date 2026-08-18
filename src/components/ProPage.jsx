import { useState, useEffect } from "react";
import supabase from "../supabase.js";
import Header from "./Header.jsx";
import { isLaunchPromoActive } from "../constants.js";
import { BRAND } from "../brand.js";
import { track } from "../utils.js";
import { PAYWALL_ACTIVE } from "../subscription/config.js";
import { PRO_FEATURES, PRO_GRATIS_BASIS, PRO_MODEL, LAGEN, LAAG_KLEUREN } from "../subscription/proPlan.js";

// T1-sync 10 aug 2026: dit (dormant, achter PAYWALL_ACTIVE) blok toonde nog
// het oude model (Ouder €5,99 / Leerkracht €9,95 / School S-M-L €29-79 met
// eigen oranje/paarse kleuren). Nu gelijk aan het besloten model — bron van
// waarheid: config.PRICING + proPlan LAGEN/LAAG_KLEUREN (familie = goud,
// Pro/school = blauw). Richtprijzen — definitief vóór Stripe jan 2027.
// `tier` = de waarde voor subscriptions.tier (school valt onder teacher_pro).
const PLANS = [
  {
    id: "parent_pro",
    tier: "parent_pro",
    icon: "👨‍👩‍👧",
    label: "Familie",
    price: "v.a. €4,95",
    period: "per gezín",
    color: LAAG_KLEUREN.familie.dot,
    bg: LAAG_KLEUREN.familie.vlak,
    border: LAAG_KLEUREN.familie.rand,
    tag: "Voor thuis",
    smaken: [
      { label: "Per maand", prijs: "€ 4,95", sub: "flexibel, elk moment opzegbaar" },
      { label: "🎟️ Seizoenspas", prijs: "€ 24,95", sub: "één keer betalen · het hele toetsjaar (t/m 31 juli 2027) · stopt vanzelf", tag: "Meest gekozen" },
      { label: "Per jaar", prijs: "€ 39", sub: "goedkoopst op lange termijn — ook voor jongere kinderen" },
    ],
    features: [
      { text: "Eén prijs voor het hele gezin (max 3 kinderen) — niet per kind" },
      { text: "Ouder-dashboard: scores en voortgang per vak" },
      { text: "Wekelijks rapport per e-mail" },
      { text: "Hele toets oefenen met de klok + eindrapport" },
      { text: "Kwartierplan: diagnose → stappenplan" },
      { text: "AI-bijles onbeperkt" },
    ],
  },
  {
    id: "teacher_pro",
    tier: "teacher_pro",
    icon: "🧑‍🏫",
    label: "Pro",
    price: "€6,95",
    period: "/maand · €59/jaar",
    color: LAAG_KLEUREN.leerkracht.dot,
    bg: LAAG_KLEUREN.leerkracht.vlak,
    border: LAAG_KLEUREN.leerkracht.rand,
    tag: "Bijlesdocent",
    features: [
      { text: "Eigen logo op toetsen en oefenbladen" },
      { text: "Onbeperkt toetsen aanmaken" },
      { text: "Voortgang per leerling + rapportage" },
      { text: "Resultaten exporteren" },
      { text: "Verdient zichzelf in één lesuur terug — aftrekbaar" },
    ],
  },
  {
    id: "school",
    tier: "teacher_pro",
    icon: "🏫",
    label: "School",
    price: "€99",
    period: "per klas /jaar",
    color: LAAG_KLEUREN.leerkracht.dot,
    bg: LAAG_KLEUREN.leerkracht.vlak,
    border: LAAG_KLEUREN.leerkracht.rand,
    tag: "Op factuur",
    features: [
      { text: "Alle leerkrachten van de school onder één beheer" },
      { text: "Schooldashboard over alle groepen (directie/IB'er)" },
      { text: "School-logo op toetsen en oefenbladen" },
      { text: "Klasrapportage + export" },
      { text: "Verwerkersovereenkomst, factuur-betaling en support" },
    ],
  },
];

export default function ProPage({ onBack, onHome, authUser, defaultPlan, onLogin, onTrialStarted, subscription }) {
  const [selected, setSelected] = useState(defaultPlan || "teacher_pro");
  const [email, setEmail] = useState(authUser?.email || "");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [trialDone, setTrialDone] = useState(false);
  const [trialError, setTrialError] = useState("");

  const plan = PLANS.find(p => p.id === selected);

  useEffect(() => { try { track("pro_page_view"); } catch {} }, []);

  const handleStartTrial = async () => {
    if (!authUser) { onLogin?.(); return; }
    setLoading(true);
    setTrialError("");
    const { error } = await supabase.from("subscriptions").upsert({
      user_id: authUser.id,
      // subscriptions.tier kent alleen parent_pro/teacher_pro — het School-plan
      // valt onder teacher_pro (de schools-tabel regelt de licentie zelf).
      tier: PLANS.find(p => p.id === selected)?.tier || selected,
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
    // Label "pro-kwartier" was het oude verdienmodel; "pro-interesse" = de
    // algemene lanceer-lijst zolang de paywall uit staat (T1-sync 10 aug).
    await supabase.from("upgrade_waitlist").insert({ email, plan: PAYWALL_ACTIVE ? selected : "pro-interesse" }).catch(() => {});
    setSent(true);
    setLoading(false);
  };

  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(160deg, #08101e 0%, #0d1a2e 60%, #120820 100%)" }}>
      <Header title={`${BRAND.name} extra's ✨`} subtitle="Wat je nu gratis hebt — en wat er vanaf 2027 bij komt" onBack={onBack} onHome={onHome} />

      <div style={{ padding: "16px 20px 60px", maxWidth: 500, margin: "0 auto" }}>

        {/* Hero banner — drie-lagen-model (Mark akkoord 2026-07-25, zie docs/PRIJSPLAN.md) */}
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", borderRadius: 20, background: "rgba(0,200,83,0.15)", border: "1px solid rgba(0,200,83,0.3)", fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-brand-primary-100)", fontWeight: 700, marginBottom: 10 }}>
            🎉 Nu gratis &amp; onbeperkt — t/m 2026
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 700, color: "var(--color-text-strong)", lineHeight: 1.2, marginBottom: 6 }}>
            Alles is nu gratis.<br />Dit komt er vanaf 2027 bij.
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.5)", lineHeight: 1.5 }}>
            {/* Elk laag-woord in z'n eigen tier-kleur — hier leert de bezoeker de kleurtaal */}
            De basis blijft gratis t/m zeker 2031. Daarnaast komen er twee extra's: <strong style={{ color: LAAG_KLEUREN.familie.tekst }}>Familie</strong> (één
            klein bedrag per gezín) en <strong style={{ color: LAAG_KLEUREN.leerkracht.tekst }}>Pro</strong> voor scholen en bijlesdocenten.
          </div>
        </div>

        {/* Gratis-basis */}
        <div style={{ borderRadius: 16, border: "1px solid rgba(105,240,174,0.2)", background: "rgba(105,240,174,0.04)", padding: "14px 16px", marginBottom: 16 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "var(--color-brand-primary-100)", marginBottom: 10 }}>
            🆓 De basis — gratis
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {PRO_GRATIS_BASIS.map((f, i) => (
              <div key={i} style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.6)", display: "flex", gap: 8 }}>
                <span style={{ color: "#69f0ae" }}>✓</span> {f}
              </div>
            ))}
          </div>
        </div>

        {/* De extra's, gegroepeerd per laag (Familie / Pro) — elke laag in z'n
            eigen tier-kleur + stip. Kwartier-tegoed is ON-HOLD (proPlan.js). */}
        {Object.values(LAGEN).map((laag) => { const kleur = LAAG_KLEUREN[laag.id] || LAAG_KLEUREN.familie; return (
          <div key={laag.id} style={{ marginBottom: 16 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: kleur.tekst, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
              <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: "50%", background: kleur.dot, display: "inline-block", flexShrink: 0 }} />
              {laag.icon} {laag.naam}
              <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.45)" }}>{laag.wie}</span>
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 11.5, fontWeight: 700, color: "#69f0ae" }}>nu nog gratis</span>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginBottom: 8 }}>{laag.prijs}</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {Object.values(PRO_FEATURES).filter((f) => f.laag === laag.id).map((f) => (
                <div key={f.id} style={{ borderRadius: 14, border: `1px solid ${kleur.rand}`, background: kleur.vlak, padding: "12px 14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                    <span aria-hidden="true" style={{ fontSize: 17 }}>{f.icon}</span>
                    <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "var(--color-text-strong)" }}>{f.label}</span>
                    <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 10.5, fontWeight: 700, color: f.status === "live" ? "#69f0ae" : "rgba(255,255,255,0.4)" }}>
                      {f.status === "live" ? "✓ nu gratis" : "binnenkort"}
                    </span>
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{f.blurb}</div>
                </div>
              ))}
            </div>
          </div>
        ); })}

        {/* (Kwartier-tegoed-uitleg verwijderd 13 aug — tegoed is ON-HOLD,
            zie proPlan.js. Terugzetten kan uit git-historie bij bewezen vraag.) */}

        {/* Abonnement-keuzemenu + proef — alleen tonen als de paywall live is.
            Nu (per-kwartier-model, paywall uit) verbergen we de oude
            maand/jaar-prijzen om geen tegenstrijdige belofte te doen. */}
        {PAYWALL_ACTIVE && (<>
        {/* Plan selector — één rij: Familie / Pro (bijlesdocent) / School */}
        <div style={{ display: "flex", gap: 6, marginBottom: 8 }}>
          {PLANS.map(p => (
            <button key={p.id} onClick={() => setSelected(p.id)} style={{
              flex: 1, padding: "11px 4px 9px", borderRadius: 12, cursor: "pointer",
              border: selected === p.id ? `2px solid ${p.color}` : "1px solid rgba(255,255,255,0.08)",
              background: selected === p.id ? p.bg : "rgba(255,255,255,0.03)",
              transition: "all 0.15s", position: "relative",
            }}>
              {p.tag && <div style={{ position: "absolute", top: -8, left: "50%", transform: "translateX(-50%)", background: p.color, color: "#10141f", fontFamily: "var(--font-display)", fontSize: 9, fontWeight: 700, padding: "2px 7px", borderRadius: 10, whiteSpace: "nowrap" }}>{p.tag}</div>}
              <div style={{ fontSize: 18 }}>{p.icon}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: selected === p.id ? p.color : "rgba(255,255,255,0.4)", marginTop: 2 }}>{p.label}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: selected === p.id ? "var(--color-text-strong)" : "rgba(255,255,255,0.3)", marginTop: 1 }}>{p.price}</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 9, color: selected === p.id ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.25)", marginTop: 1 }}>{p.period}</div>
            </button>
          ))}
        </div>
        {/* School-first-regel (PRIJSPLAN §3): de juf zelf betaalt nooit. */}
        <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.45)", marginBottom: 16, lineHeight: 1.5 }}>
          Leerkracht met je eigen klas? Lesgeven met {BRAND.name} blijft gratis t/m zeker 2031 — Pro is voor bijlesdocenten, de schoollicentie voor scholen.
        </div>

        {/* Plan detail kaart */}
        {plan && (
          <div style={{ borderRadius: 20, border: `2px solid ${plan.color}`, background: plan.bg, padding: "20px 18px", marginBottom: 20, boxShadow: `0 8px 32px ${plan.bg}` }}>
            {plan.smaken ? (
              /* Familie: drie smaken — Seizoenspas als anker in het midden */
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {plan.smaken.map((s, i) => (
                  <div key={i} style={{
                    borderRadius: 12, padding: "10px 12px",
                    border: s.tag ? `1.5px solid ${plan.color}` : "1px solid rgba(255,255,255,0.12)",
                    background: s.tag ? `${plan.bg}` : "rgba(255,255,255,0.03)",
                  }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 800, color: "var(--color-text-strong)" }}>{s.label}</span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 800, color: plan.color }}>{s.prijs}</span>
                      {s.tag && <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, color: "#10141f", background: plan.color, borderRadius: 10, padding: "2px 8px" }}>{s.tag}</span>}
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 16 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 38, fontWeight: 700, color: "var(--color-text-strong)" }}>{plan.price}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{plan.period}</span>
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
              "🤖 AI-bijles onbeperkt (gratis: een kleine portie per dag)",
              "📧 Wekelijks voortgangsrapport per e-mail",
              "🔐 Kind koppelen via veilige gezinscode",
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
              Je hebt 30 dagen gratis toegang tot alle {plan?.label}-extra's. Geen creditcard nodig.
            </div>
          </div>
        ) : (
          <div style={{ borderRadius: 16, border: `1px solid ${plan?.color || "#a855f7"}55`, background: plan ? `${plan.bg}` : "rgba(168,85,247,0.08)", padding: "18px 16px", marginBottom: 16 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 4 }}>
              🎁 Probeer {plan?.label} gratis
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 14 }}>
              30 dagen alle {plan?.label}-extra's — geen creditcard, geen verplichtingen.
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
        </>)}

        {/* Waitlist */}
        {!sent ? (
          <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "18px 16px" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 4 }}>
              🔔 Ontvang een berichtje bij lancering
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>
              Leerkwartier is gratis &amp; onbeperkt t/m 2026. Vanaf 2027 blijft de basis gratis; daarnaast komt er een Familie-abonnement per gezín (met een Seizoenspas die vanzelf stopt — nooit stiekem doorlopen) en Pro voor scholen en bijlesdocenten. We sturen je één berichtje als het zover is.
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

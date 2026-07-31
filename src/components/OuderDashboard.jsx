import { useState, useEffect } from "react";
import supabase from "../supabase.js";
import Header from "./Header.jsx";
import { isLaunchPromoActive } from "../constants.js";
import { BRAND } from "../brand.js";
import { clearAll as clearAdaptive } from "../shared/adaptiveStore.js";
import DoorstroomtoetsLogo from "./DoorstroomtoetsLogo.jsx";
import ProBadge from "../subscription/ProBadge.jsx";
import { trackProUse } from "../subscription/proPlan.js";
import KwartierplanSectie from "../features/kwartierplan/KwartierplanSectie.jsx";
import VriendenWerven from "../features/referral/VriendenWerven.jsx";

const SUBJECT_LABELS = {
  rekenen: "Rekenen", taal: "Taal", aardrijkskunde: "Aardrijkskunde",
  geschiedenis: "Geschiedenis", natuur: "Natuur", engels: "Engels",
  spelling: "Spelling", "begrijpend-lezen": "Begrijpend Lezen",
  cito: "Doorstroomtoets", wiskunde: "Wiskunde", biologie: "Biologie",
};

function ScoreBadge({ pct }) {
  // Robuust bij een nullable/corrupte scorebord-rij: toon "—" i.p.v. "null%".
  const n = Number(pct);
  const geldig = Number.isFinite(n);
  const color = !geldig ? "rgba(255,255,255,0.4)" : n >= 80 ? "var(--color-brand-primary-100)" : n >= 60 ? "#ffb74d" : "#ff7043";
  const bg = !geldig ? "rgba(255,255,255,0.06)" : n >= 80 ? "rgba(105,240,174,0.12)" : n >= 60 ? "rgba(255,183,77,0.12)" : "rgba(255,112,67,0.12)";
  return (
    <span style={{ padding: "2px 8px", borderRadius: 8, background: bg, color, fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700 }}>
      {geldig ? `${n}%` : "—"}
    </span>
  );
}

// Datum-helper: nullable/ongeldige completed_at gaf "Invalid Date" in de UI.
function fmtDatum(x, opts) {
  if (!x) return "";
  const d = new Date(x);
  return isNaN(d.getTime()) ? "" : d.toLocaleDateString("nl-NL", opts);
}

function generateCode() {
  // Audit 16-07: crypto-random i.p.v. Math.random — koppelcodes zijn een
  // beveiligingsmiddel (toegang tot kind-voortgang), geen visueel gimmickje.
  // Alfabet zonder verwarrende tekens (0/O, 1/I/L) voor overtypen vanaf WhatsApp.
  const alphabet = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
  const bytes = new Uint8Array(6);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => alphabet[b % alphabet.length]).join("");
}

export default function OuderDashboard({ onBack, onHome, authUser, subscription, onUpgrade, onLogin, onRondleiding }) {
  // Welkom-paneel — toont ouders de voordelen + gratis-USP vs Squla/Junior Einstein.
  // Default open zonder gekoppeld kind, daarna in te klappen.
  const [welcomeCollapsed, setWelcomeCollapsed] = useState(() => {
    try {
      const stored = localStorage.getItem("lk-ouder-welcome-collapsed");
      if (stored === "1") return true;
    } catch { /* ignore */ }
    return false; // default open — ouder oriënteert zich vaak vooraf
  });
  const toggleWelcome = () => {
    setWelcomeCollapsed((prev) => {
      const next = !prev;
      try { localStorage.setItem("lk-ouder-welcome-collapsed", next ? "1" : "0"); } catch { /* ignore */ }
      return next;
    });
  };
  const isPro = isLaunchPromoActive() || subscription?.tier === "parent_pro";
  const [children, setChildren] = useState([]);
  const [selectedChild, setSelectedChild] = useState(null);
  const [childScores, setChildScores] = useState([]);
  const [citoScores, setCitoScores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scoresLoading, setScoresLoading] = useState(false);
  const [inviteCode, setInviteCode] = useState("");
  const [inviteSent, setInviteSent] = useState(false);
  // Bug-fix 2026-05-18: link_codes.child_name is NOT NULL. Ouder moet
  // naam-in-app van kind opgeven vóór code-generatie.
  const [inviteChildName, setInviteChildName] = useState("");

  // Pro-meting (Mark 2026-06-06): ouder opent het inzicht-dashboard.
  useEffect(() => { trackProUse("parent-dashboard"); }, []);

  // Laad gekoppelde kinderen
  useEffect(() => {
    if (!authUser) return;
    supabase.from("parent_child_links")
      .select("*")
      .eq("parent_user_id", authUser.id)
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        setChildren(data || []);
        if (data?.length && !selectedChild) setSelectedChild(data[0].child_name);
      });
  }, [authUser]);

  // Privacy: alleen scores tonen voor kinderen waarvan de koppeling
  // bevestigd is. parent_child_links.verified moet expliciet TRUE zijn —
  // anders kan elke ouder via naam-rade willekeurig kind volgen
  // (audit-3 K6 / 2026-05-08).
  const selectedChildVerified = children.find(
    (c) => c.child_name === selectedChild && c.verified === true
  );

  // Laad scores voor geselecteerd kind — alleen bij verified link
  useEffect(() => {
    if (!selectedChild || !selectedChildVerified) {
      setChildScores([]);
      setScoresLoading(false);
      return;
    }
    setScoresLoading(true);
    // Naamgenoten-lek (audit 16-07): alleen op voornaam matchen mengt scores
    // van élke "Sophie" in het land. Zelfde fix als de ouder-mail (migratie
    // 20260711): scope op child_user_id waar de koppeling die heeft;
    // legacy-links zonder uid houden naam-match.
    let scoresQuery = supabase.from("leaderboard")
      // Bug-fix 2026-07-07: leaderboard heeft completed_at, geen created_at —
      // deze query gaf 400 en het dashboard bleef leeg voor élke ouder.
      .select("subject, level, score, total, percentage, time_taken, completed_at")
      .eq("player_name", selectedChild);
    if (selectedChildVerified?.child_user_id) scoresQuery = scoresQuery.eq("user_id", selectedChildVerified.child_user_id);
    scoresQuery
      .order("completed_at", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        setChildScores(data || []);
        setScoresLoading(false);
      });
  }, [selectedChild, selectedChildVerified]);

  // Cito scores apart — alleen bij verified link
  useEffect(() => {
    if (!selectedChild || !selectedChildVerified) {
      setCitoScores([]);
      return;
    }
    let citoQuery = supabase.from("leaderboard")
      .select("subject, level, percentage, completed_at")
      .eq("player_name", selectedChild)
      .eq("subject", "cito");
    if (selectedChildVerified?.child_user_id) citoQuery = citoQuery.eq("user_id", selectedChildVerified.child_user_id);
    citoQuery
      .order("completed_at", { ascending: false })
      .then(({ data }) => setCitoScores(data || []));
  }, [selectedChild, selectedChildVerified]);

  const removeChild = async (id) => {
    await supabase.from("parent_child_links").delete().eq("id", id);
    setChildren(prev => prev.filter(c => c.id !== id));
    setSelectedChild(prev => children.find(c => c.id !== id)?.child_name || null);
  };

  // K6/AVG art. 17 (sprint-2 2026-05-08): self-service "Verwijder al mijn data".
  // Werkt op alle tabellen waar user_id = auth.uid OF parent_user_id = auth.uid.
  // Anonieme rijen op player_name laat dit ongemoeid (kan niet veilig matchen
  // zonder eigenaar-bewijs). Voor volledige verwijdering moet leerling-account
  // ook ingelogd zijn — toekomstige feature.
  const [deletingMyData, setDeletingMyData] = useState(false);
  const [deleteDone, setDeleteDone] = useState(false);
  const deleteAllMyData = async () => {
    if (!authUser) return;
    if (!window.confirm(
      "Weet je het zeker?\n\nDit verwijdert al je gekoppelde data:\n" +
      "• je gekoppelde kinderen\n" +
      "• je voortgang en scores (waar je ingelogd was)\n" +
      "• je feedback-berichten\n\n" +
      "Anonieme spelers-data (zonder login) blijft staan tot je 'm via e-mail verwijdert.\n\n" +
      "Doorgaan?"
    )) return;
    setDeletingMyData(true);
    // Audit 16-07: de oude client-side deletes verwijderden door ontbrekende
    // DELETE-policies stilletjes 0 rijen (RLS), maar toonden wél "✅ Verwijderd".
    // Nu via de server-side RPC delete_my_data() die als eigenaar écht
    // verwijdert (incl. e-maillijst op accountadres) en tellingen teruggeeft.
    const { data, error } = await supabase.rpc("delete_my_data");
    if (error || !data?.ok) {
      // eslint-disable-next-line no-console
      console.error("[OuderDashboard] delete_my_data faalde:", error?.message || data?.error);
      alert("Het verwijderen is niet gelukt. Probeer het later opnieuw, of mail ons — dan doen wij het handmatig.");
      setDeletingMyData(false);
      return;
    }
    // Adaptieve leer-state (per-vraag fout-tracker, browser-only).
    try { clearAdaptive(); } catch {}
    setDeletingMyData(false);
    setDeleteDone(true);
    setChildren([]);
    setSelectedChild(null);
  };

  const generateInvite = async () => {
    if (!authUser) return;
    const childName = inviteChildName.trim();
    if (!childName) return;
    setLoading(true);
    const code = generateCode();
    const expires = new Date(Date.now() + 48 * 3600 * 1000).toISOString();
    // Bug-fix 2026-05-18: link_codes.child_name is NOT NULL. Silent .catch
    // verving door explicit-log zodat insert-fails niet meer onzichtbaar zijn.
    const { error } = await supabase.from("link_codes").insert({
      code, parent_user_id: authUser.id, child_name: childName, expires_at: expires,
    });
    if (error) {
      // eslint-disable-next-line no-console
      console.error("[OuderDashboard] generateInvite failed:", error.message);
      alert("Kon code niet opslaan. Probeer later opnieuw.");
      setLoading(false);
      return;
    }
    setInviteCode(code);
    setInviteSent(false);
    setLoading(false);
  };

  const sendWhatsApp = () => {
    const msg = encodeURIComponent(`Hoi! Open ${BRAND.name} (${BRAND.domain}) en voer de koppelcode *${inviteCode}* in bij 'Koppel met ouder'. Dan kan ik jouw voortgang zien 😊 (code is 48 uur geldig)`);
    window.open(`https://wa.me/?text=${msg}`, "_blank");
    setInviteSent(true);
  };

  // Statistieken berekenen. Alleen rijen met een geldig (eindig) percentage
  // tellen mee: één nullable/corrupte scorebord-rij maakte de som anders NaN,
  // waardoor de ouder "gem. NaN%" te zien kreeg (bug-jacht 2026-07-31).
  const geldigeScores = childScores.filter((r) => Number.isFinite(Number(r.percentage)));
  const subjectStats = geldigeScores.reduce((acc, r) => {
    const key = r.subject;
    if (!acc[key]) acc[key] = { scores: [], label: SUBJECT_LABELS[key] || key };
    acc[key].scores.push(Number(r.percentage));
    return acc;
  }, {});

  const recentScores = childScores.slice(0, 10);
  const avgScore = geldigeScores.length ? Math.round(geldigeScores.reduce((s, r) => s + Number(r.percentage), 0) / geldigeScores.length) : null;
  const strongSubjects = Object.entries(subjectStats).filter(([, v]) => Math.max(...v.scores) >= 80).map(([, v]) => v.label);
  const weakSubjects = Object.entries(subjectStats).filter(([, v]) => Math.max(...v.scores) < 60 && v.scores.length >= 2).map(([, v]) => v.label);

  // Bug-jacht 7/7: anonieme park-sessies tellen óók als authUser, waardoor een
  // ouder koppelingen/doelen aan een wegwerp-anon-account kon hangen die na
  // een echte Google-login onbereikbaar zijn. Ouder-dashboard = altijd met
  // echt account.
  if (!authUser || authUser.is_anonymous) {
    return (
      <div style={{ minHeight: "100dvh", background: "#0a0f1e" }}>
        <Header title="Ouder Dashboard 👨‍👩‍👧" onBack={onBack} onHome={onHome} />
        <div style={{ padding: 32, textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <div style={{ fontSize: 56 }}>👨‍👩‍👧</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--color-text-strong)" }}>Volg je kind</div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "rgba(255,255,255,0.5)", maxWidth: 280, lineHeight: 1.6 }}>
            Log in met Google om de voortgang van je kind te bekijken en te koppelen.
          </div>
          <button
            onClick={onLogin}
            style={{ marginTop: 8, display: "flex", alignItems: "center", gap: 10, padding: "13px 22px", borderRadius: 14, border: "none", background: "var(--color-text-strong)", color: "#333", fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(0,0,0,0.3)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Inloggen met Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100dvh", background: "linear-gradient(135deg, #0a0f1e 0%, #0d1a2e 100%)" }}>
      <Header title="Ouder Dashboard 👨‍👩‍👧" subtitle="Volg de voortgang van je kind" onBack={onBack} onHome={onHome} />

      <div style={{ padding: "16px 20px 48px", maxWidth: 480, margin: "0 auto", display: "flex", flexDirection: "column", gap: 16 }}>

        {/* Pro-label (Mark 2026-06-06): ouder-inzicht is straks een Pro-extra,
            nu nog gratis. Badge laat de waarde zien + meet het gebruik. */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", padding: "10px 14px", borderRadius: 12, background: "rgba(255,183,77,0.06)", border: "1px solid rgba(255,183,77,0.22)" }}>
          <ProBadge feature="parent-dashboard" size="md" onInfo={onUpgrade} />
          <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>
            Dit ouder-inzicht is straks een Pro-extra — <strong style={{ color: "#69f0ae" }}>nu nog helemaal gratis</strong>.
          </span>
        </div>

        {/* Welkom-paneel — voordelen voor ouder + kind */}
        <div style={{
          padding: welcomeCollapsed ? "10px 14px" : "16px 18px",
          borderRadius: 14,
          background: welcomeCollapsed ? "rgba(255,255,255,0.04)" : "rgba(0,200,83,0.07)",
          border: `1px solid ${welcomeCollapsed ? "rgba(255,255,255,0.08)" : "rgba(0,200,83,0.25)"}`,
        }}>
          <button
            type="button"
            onClick={toggleWelcome}
            aria-expanded={!welcomeCollapsed}
            style={{
              background: "none",
              border: "none",
              color: welcomeCollapsed ? "rgba(255,255,255,0.55)" : "#69f0ae",
              fontFamily: "var(--font-display)",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: 8,
              width: "100%",
              justifyContent: "space-between",
              textAlign: "left",
            }}
          >
            <span>👨‍👩‍👧 {welcomeCollapsed ? "Wat krijg ik en mijn kind?" : "Welkom — wat krijg je hier?"}</span>
            <span style={{ fontSize: 12, opacity: 0.7 }}>{welcomeCollapsed ? "▼ Open" : "▲ Klap in"}</span>
          </button>
          {!welcomeCollapsed && (
            <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 14 }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "#69f0ae", fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>VOOR JOU ALS OUDER</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                  <li>🔑 Koppel je kind met één korte code</li>
                  <li>📊 Voortgang in één oogopslag</li>
                  <li>🆓 In 2026 helemaal gratis · daarna basis-functies vrij</li>
                  <li>🔒 Geen reclame, AVG-veilig</li>
                  <li>📵 Werkt ook offline (PWA)</li>
                </ul>
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "#ffd54f", fontWeight: 700, marginBottom: 6, letterSpacing: 0.5 }}>VOOR JE KIND</div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 13, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                  <li>📚 300+ onderwerpen op niveau</li>
                  <li>🎯 Doorstroomtoets-voorbereiding (groep 6-8)</li>
                  <li>💡 Uitleg op 3 niveaus bij elke fout</li>
                  <li>🎓 Echte VMBO/HAVO/VWO-examenvragen</li>
                  <li>⏱️ Max 15 min per sessie — daarna pauze of kort spel</li>
                </ul>
              </div>
              <div style={{ gridColumn: "1 / -1", padding: "10px 12px", background: "rgba(255,213,79,0.08)", border: "1px solid rgba(255,213,79,0.25)", borderRadius: 8, fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.8)" }}>
                <strong style={{ color: "#ffd54f" }}>✨ Anders dan Squla / Junior Einstein:</strong> bij een fout krijgt je kind geen "fout!" + door, maar uitleg op 3 niveaus om zelf op door te klikken — als een bijlesdocent in de broekzak. En in 2026 is alles gratis (basis blijft daarna ook gratis). Plus complete leerpaden waar elk onderwerp van A tot Z wordt uitgelegd.
              </div>
              {onRondleiding && (
                <div style={{ gridColumn: "1 / -1", display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                  <button
                    type="button"
                    onClick={onRondleiding}
                    style={{
                      padding: "8px 14px",
                      background: "rgba(0,200,83,0.15)",
                      border: "1px solid rgba(0,200,83,0.4)",
                      color: "#69f0ae",
                      borderRadius: 8,
                      fontFamily: "var(--font-display)",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Bekijk de rondleiding →
                  </button>
                  <button
                    type="button"
                    onClick={toggleWelcome}
                    style={{
                      padding: "8px 14px",
                      background: "transparent",
                      border: "1px solid rgba(255,255,255,0.15)",
                      color: "rgba(255,255,255,0.55)",
                      borderRadius: 8,
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      cursor: "pointer",
                    }}
                  >
                    Ik snap het, klap in
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Pro gate */}
        {!isPro && (
          <div style={{ borderRadius: 16, border: "2px solid rgba(0,176,255,0.4)", background: "rgba(0,176,255,0.08)", padding: "16px 18px" }}>
            {/* B1.1 (7-bots-review): hier stond "€1,95/maand" — een abonnement,
                in tegenspraak met het per-kwartier-model dat overal elders
                beloofd wordt. Eén bron van waarheid: proPlan.js. */}
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#00b0ff", marginBottom: 4 }}>
              ✨ Ouder Pro — nu gratis · vanaf 2027 per kwartier
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 12, lineHeight: 1.5 }}>
              Volg de voortgang van je kind, zie scores per vak en bereid de Doorstroomtoets voor.
              Geen abonnement — niks op te zeggen.
            </div>
            <button onClick={onUpgrade} style={{ padding: "10px 18px", borderRadius: 10, border: "none", background: "#00b0ff", color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
              Meer info & aanmelden →
            </button>
          </div>
        )}

        {/* Kinderen koppelen */}
        <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", padding: "16px" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.8)", marginBottom: 12 }}>
            👶 Mijn kinderen
          </div>

          {/* Bestaande kinderen */}
          {children.map(c => (
            <div key={c.id} onClick={() => setSelectedChild(c.child_name)} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "9px 12px", borderRadius: 10, marginBottom: 6, cursor: "pointer",
              background: selectedChild === c.child_name ? "rgba(0,176,255,0.15)" : "rgba(255,255,255,0.04)",
              border: selectedChild === c.child_name ? "1px solid rgba(0,176,255,0.35)" : "1px solid rgba(255,255,255,0.07)",
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: 15, color: selectedChild === c.child_name ? "#00b0ff" : "rgba(255,255,255,0.7)", display: "flex", alignItems: "center", gap: 8 }}>
                👦 {c.child_name}
                {!c.verified && (
                  <span title="Wacht op bevestiging van je kind in de app" style={{ fontSize: 11, color: "#ffb74d", fontWeight: 700 }}>
                    🔐 niet bevestigd
                  </span>
                )}
              </span>
              <button onClick={e => { e.stopPropagation(); removeChild(c.id); }} aria-label={`Verwijder ${c.child_name || "kind"}`} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.2)", cursor: "pointer", fontSize: 16, padding: 4 }}>×</button>
            </div>
          ))}

          {/* Koppel je kind — alléén de veilige WhatsApp-koppelcode-route.
              De oude "naam invullen"-route is verwijderd: door de RLS-policy
              (auth.uid() = parent_user_id) kon het kind die koppeling nooit
              bevestigen → 100% dode flow (diagnose 2026-06-24). */}
          {children.length === 0 && (
            <div style={{ borderRadius: 12, border: "1px solid rgba(0,176,255,0.4)", background: "rgba(0,176,255,0.10)", padding: "13px 15px", marginBottom: 12, marginTop: 4 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 800, color: "#00b0ff", marginBottom: 4 }}>
                📊 Koppel je kind en zie de voortgang
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
                Maak een koppelcode aan en stuur 'm via WhatsApp. Je kind voert 'm
                één keer in — daarna zie je per vak hoe het gaat richting de Doorstroomtoets.
              </div>
            </div>
          )}

          {/* WhatsApp-koppelcode-flow (de enige route) */}
          <div style={{ marginTop: children.length ? 10 : 0 }}>
              {!inviteCode ? (
                <>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.45)", marginBottom: 10, lineHeight: 1.5 }}>
                    Je kind opent de app op zijn/haar telefoon en voert de code in. Je ontvangt daarna automatisch de voortgang.
                  </div>
                  {/* Naam-veld toegevoegd 2026-05-18 (bug-fix): link_codes.child_name
                      is NOT NULL — ouder geeft hier de naam-in-app van het kind. */}
                  <input
                    value={inviteChildName}
                    onChange={(e) => setInviteChildName(e.target.value)}
                    placeholder="Naam van je kind (zoals in de app)"
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      marginBottom: 10,
                      borderRadius: 10,
                      border: "1px solid rgba(255,255,255,0.18)",
                      background: "rgba(255,255,255,0.06)",
                      color: "var(--color-text-strong)",
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      outline: "none",
                    }}
                  />
                  <button
                    onClick={generateInvite}
                    disabled={loading || !inviteChildName.trim()}
                    style={{
                      width: "100%",
                      padding: "11px",
                      borderRadius: 10,
                      border: "none",
                      background: loading || !inviteChildName.trim() ? "rgba(37,211,102,0.30)" : "#25D366",
                      color: "var(--color-text-strong)",
                      fontFamily: "var(--font-display)",
                      fontSize: 15,
                      fontWeight: 700,
                      cursor: loading || !inviteChildName.trim() ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? "Genereren..." : "📲 Genereer uitnodigingscode"}
                  </button>
                </>
              ) : (
                <div>
                  <div style={{ textAlign: "center", padding: "12px 0 8px" }}>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", marginBottom: 4 }}>Koppelcode (48 uur geldig)</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 700, color: "#00b0ff", letterSpacing: 6 }}>{inviteCode}</div>
                  </div>
                  <button onClick={sendWhatsApp} style={{ width: "100%", padding: "12px", borderRadius: 10, border: "none", background: "#25D366", color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 8, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                    <span style={{ fontSize: 18 }}>💬</span> Stuur via WhatsApp
                  </button>
                  {inviteSent && (
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--color-brand-primary-100)", textAlign: "center", marginTop: 8 }}>
                      ✓ Verstuurd! Je kind voert de code in bij 'Koppel met ouder'.
                    </div>
                  )}
                  <button onClick={() => { setInviteCode(""); setInviteSent(false); setInviteChildName(""); }} style={{ width: "100%", marginTop: 8, padding: "7px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)", background: "none", color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)", fontSize: 12, cursor: "pointer" }}>
                    Nieuwe code genereren
                  </button>
                </div>
              )}
            </div>
        </div>

        {/* Dashboard inhoud — alleen als kind geselecteerd */}
        {selectedChild && !selectedChildVerified && (
          <div style={{ borderRadius: 14, border: "1px solid #ffb74d", background: "rgba(255,183,77,0.10)", padding: 20, textAlign: "center" }}>
            <div style={{ fontSize: 36, marginBottom: 8 }}>🔐</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "#ffb74d", marginBottom: 6, fontWeight: 700 }}>
              Nog niet bevestigd door {selectedChild}
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.5, maxWidth: 320, margin: "0 auto" }}>
              Voor de privacy van je kind zie je pas scores zodra je kind de
              koppeling bevestigt. Stuur de koppelcode (hieronder) en laat 'm
              die in de app invoeren bij <strong>Instellingen → Koppel met ouder</strong>.
            </div>
          </div>
        )}
        {/* 🤝 Vrienden werven (Mark 8 jul): volwassenen-programma — 5 geworven
            gezinnen = 6 maanden Pro. Bewust hier (ouder-context) en nergens
            in kinder-schermen. */}
        <VriendenWerven authUser={authUser} />

        {selectedChild && selectedChildVerified && (
          <>
            {/* Kwartierplan (sessie 1, 2026-07-07): doel + startfoto. Bewust
                BOVEN de scores — juist bij een vers gekoppeld kind zonder
                scores is dit de logische eerste actie voor de ouder. */}
            <KwartierplanSectie authUser={authUser} childName={selectedChild} />
            {scoresLoading ? (
              <div style={{ textAlign: "center", padding: 24, color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-display)" }}>Laden...</div>
            ) : childScores.length === 0 ? (
              <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)", padding: 20, textAlign: "center" }}>
                <div style={{ fontSize: 36, marginBottom: 8 }}>🎮</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>Nog geen scores voor {selectedChild}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.3)" }}>Zodra je kind oefent, zie je hier de resultaten.</div>
              </div>
            ) : (
              <>
                {/* Overzicht stats */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
                  {[
                    { label: "Gemiddeld", value: avgScore !== null ? `${avgScore}%` : "—", color: avgScore >= 70 ? "var(--color-brand-primary-100)" : "#ffb74d" },
                    { label: "Toetsen", value: childScores.length, color: "#00b0ff" },
                    { label: "Vakken", value: Object.keys(subjectStats).length, color: "#ff6b35" },
                  ].map(({ label, value, color }) => (
                    <div key={label} style={{ borderRadius: 12, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", padding: "12px 10px", textAlign: "center" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color }}>{value}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 2 }}>{label}</div>
                    </div>
                  ))}
                </div>

                {/* Sterk en zwak */}
                {(strongSubjects.length > 0 || weakSubjects.length > 0) && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                    {strongSubjects.length > 0 && (
                      <div style={{ borderRadius: 12, border: "1px solid rgba(105,240,174,0.2)", background: "rgba(105,240,174,0.06)", padding: "12px 14px" }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "var(--color-brand-primary-100)", fontWeight: 700, marginBottom: 6 }}>💪 Goed in</div>
                        {strongSubjects.slice(0, 3).map(s => (
                          <div key={s} style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>• {s}</div>
                        ))}
                      </div>
                    )}
                    {weakSubjects.length > 0 && (
                      <div style={{ borderRadius: 12, border: "1px solid rgba(255,152,0,0.2)", background: "rgba(255,152,0,0.06)", padding: "12px 14px" }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "#ffb74d", fontWeight: 700, marginBottom: 6 }}>📚 Meer oefenen</div>
                        {weakSubjects.slice(0, 3).map(s => (
                          <div key={s} style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)", marginBottom: 2 }}>• {s}</div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Scores per vak */}
                <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
                  <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
                    📚 Per vak
                  </div>
                  {Object.entries(subjectStats).map(([subj, { scores, label }]) => {
                    const best = Math.max(...scores);
                    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
                    return (
                      <div key={subj} style={{ display: "flex", alignItems: "center", padding: "10px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)", gap: 12 }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "rgba(255,255,255,0.8)" }}>{label}</div>
                          <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.35)", marginTop: 1 }}>{scores.length}× geoefend · gem. {avg}%</div>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.3)", marginBottom: 2 }}>beste</div>
                          <ScoreBadge pct={best} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Cito sectie */}
                {citoScores.length > 0 && (
                  <div style={{ borderRadius: 16, border: "1px solid rgba(255,107,53,0.25)", background: "rgba(255,107,53,0.06)", padding: "14px 16px" }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "#ff8c42", marginBottom: 10, display: "flex", alignItems: "center", gap: 6 }}><DoorstroomtoetsLogo size={18} /> Doorstroomtoets voortgang</div>
                    {citoScores.slice(0, 5).map((s, i) => (
                      <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>
                          {s.level} — {fmtDatum(s.completed_at, { day: "numeric", month: "short" })}
                        </span>
                        <ScoreBadge pct={s.percentage} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Recente activiteit */}
                <div style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.02)", overflow: "hidden" }}>
                  <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "rgba(255,255,255,0.7)" }}>
                    🕐 Recente activiteit
                  </div>
                  {recentScores.map((s, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", padding: "9px 16px", borderBottom: "1px solid rgba(255,255,255,0.04)", gap: 12 }}>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "rgba(255,255,255,0.75)" }}>
                          {SUBJECT_LABELS[s.subject] || s.subject} · {s.level}
                        </div>
                        <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.3)", marginTop: 1 }}>
                          {fmtDatum(s.completed_at, { weekday: "short", day: "numeric", month: "short" })}
                          {s.time_taken ? ` · ⏱ ${s.time_taken < 60 ? `${s.time_taken}s` : `${Math.floor(s.time_taken / 60)}m ${s.time_taken % 60}s`}` : ""}
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <ScoreBadge pct={s.percentage} />
                        <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.25)", marginTop: 2 }}>{s.score}/{s.total}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}

        {/* AVG art. 17 — recht op verwijdering. Self-service, alleen voor
            ingelogde gebruikers (anders kunnen we eigenaar niet verifiëren). */}
        {authUser && (
          <div style={{ marginTop: 24, padding: 16, borderRadius: 14, border: "1px solid rgba(255,82,82,0.25)", background: "rgba(255,82,82,0.04)" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#ff8a80", marginBottom: 6 }}>
              🗑️ Mijn data verwijderen
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.55)", marginBottom: 12, lineHeight: 1.5 }}>
              Onder de AVG (art. 17) heb je recht op vergetelheid. Met deze knop
              wis je alle data die aan je Google-account gekoppeld is.
            </div>
            {deleteDone ? (
              <div style={{ padding: "10px 12px", borderRadius: 10, background: "rgba(105,240,174,0.12)", border: "1px solid rgba(105,240,174,0.4)", color: "var(--color-brand-primary-100)", fontSize: 12, fontWeight: 700 }}>
                ✅ Verwijderd. Log uit om de browser-state te wissen.
              </div>
            ) : (
              <button
                onClick={deleteAllMyData}
                disabled={deletingMyData}
                style={{
                  padding: "9px 14px", borderRadius: 10, border: "1px solid rgba(255,82,82,0.6)",
                  background: deletingMyData ? "rgba(255,82,82,0.15)" : "transparent",
                  color: "#ff8a80", fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700,
                  cursor: deletingMyData ? "default" : "pointer",
                }}
              >
                {deletingMyData ? "Bezig met wissen…" : "Verwijder al mijn data"}
              </button>
            )}
          </div>
        )}
        {onRondleiding && (
          <div style={{ marginTop: 24, textAlign: "center" }}>
            <button
              type="button"
              onClick={onRondleiding}
              style={{
                background: "transparent",
                border: "none",
                color: "var(--color-text-muted, #99a3b4)",
                fontSize: 13,
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Hoe werkt Leerkwartier?
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

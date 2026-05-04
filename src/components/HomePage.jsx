import { useState, useEffect, lazy, Suspense } from "react";
import styles from "../styles.js";
import { LEVELS, SUBJECTS, isLaunchPromoActive, LAUNCH_PROMO_SHORT, LAUNCH_PROMO_LONG } from "../constants.js";
import { BRAND } from "../brand.js";
import supabase from "../supabase.js";
import { track } from "../utils.js";
import MasteryCTABanner from "../features/mastery/MasteryCTABanner.jsx";
import DailyChallengeBanner from "../features/mastery/DailyChallengeBanner.jsx";

// Three.js zit in een aparte chunk — alleen geladen voor nieuwe bezoekers die
// de homepage in beeld krijgen. Houdt initial-bundle klein voor snelle conversie.
const Mini3DTeaser = lazy(() => import("./learn/3d/Mini3DTeaser.jsx"));

const TICKER_ITEMS = [
  { icon: "⏱", text: "Elk kwartier slimmer" },
  { icon: "🎯", text: "Cito eindtoets oefenen" },
  { icon: "📅", text: "15 minuten per dag is voldoende" },
  { icon: "📚", text: "100+ schoolmethodes" },
  { icon: "🤖", text: "AI-vragen over elk onderwerp" },
  { icon: "🎮", text: "Eerst leren, dan spelen" },
  { icon: "✖️", text: "Tafels oefenen: groep 3 t/m 6" },
  { icon: "📖", text: "Begrijpend lezen groep 5–8" },
  { icon: "🎒", text: "Groep 1 t/m 8" },
  { icon: "🎓", text: "VMBO-TL · HAVO · VWO · Gymnasium" },
  { icon: "🏆", text: "Scorebord — strijd om de top" },
  { icon: "📋", text: "Leerkrachten: maak een kennistest voor uw klas" },
  { icon: "🔢", text: "Rekenen, taal, wiskunde en meer" },
  { icon: "⚡", text: "Vragen altijd anders door AI" },
];

function TickerBanner() {
  const [winners, setWinners] = useState([]);
  const [awardItems, setAwardItems] = useState([]);
  const [shareItems, setShareItems] = useState([]);
  const [obliteratorItems, setObliteratorItems] = useState([]);
  const [vriendenmakerItem, setVriendenmakerItem] = useState(null);

  useEffect(() => {
    // Vriendenmaker van de week (meeste shares)
    const now = new Date();
    const startOfWeek = new Date(now);
    const d = now.getDay();
    startOfWeek.setDate(now.getDate() - (d === 0 ? 6 : d - 1)); startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek); endOfWeek.setDate(startOfWeek.getDate() + 6); endOfWeek.setHours(23, 59, 59, 999);
    supabase.from("share_events")
      .select("shared_by, created_at")
      .gte("created_at", startOfWeek.toISOString())
      .lte("created_at", endOfWeek.toISOString())
      .then(({ data }) => {
        if (!data?.length) return;
        const tally = {};
        data.forEach(e => {
          const n = (e.shared_by || "").trim();
          if (!n) return;
          tally[n] = (tally[n] || 0) + 1;
        });
        const top = Object.entries(tally).sort((a, b) => b[1] - a[1])[0];
        if (top && top[1] >= 2) {
          setVriendenmakerItem({
            icon: "🌟",
            text: `Top! ${top[0]} is Vriendenmaker van de week — ${top[1]} keer gedeeld!`,
            special: true,
          });
        }
      }).catch(() => {});
  }, []);

  useEffect(() => {
    supabase.from("obliterator_scores")
      .select("player_name, score")
      .order("score", { ascending: false })
      .order("created_at", { ascending: true })
      .limit(2)
      .then(({ data }) => {
        if (!data?.length) return;
        setObliteratorItems(data.map((h, i) => ({
          icon: i === 0 ? "👽" : "🛸",
          text: i === 0
            ? `OBLITERATOR-kampioen: ${h.player_name} — ${h.score} punten!`
            : `OBLITERATOR top: ${h.player_name} kraakte ${h.score} punten!`,
          special: true,
        })));
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString();
    supabase.from("share_events")
      .select("shared_by, created_at")
      .gte("created_at", twoDaysAgo)
      .order("created_at", { ascending: false })
      .limit(50)
      .then(({ data }) => {
        if (!data?.length) return;
        // Dedupe per naam — één bedankje per persoon in de rotatie
        const seen = new Set();
        const unique = [];
        for (const e of data) {
          const n = (e.shared_by || "").trim();
          if (!n || seen.has(n.toLowerCase())) continue;
          seen.add(n.toLowerCase());
          unique.push(n);
          if (unique.length >= 8) break;
        }
        setShareItems(unique.map(name => ({
          icon: "💙",
          text: `${BRAND.name} bedankt ${name} voor het delen van de app!`,
          special: true,
        })));
      }).catch(() => {});
  }, []);

  useEffect(() => {
    // Fetch week-awards voor lichtkrant (Doorzetter + Hardwerker)
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - (now.getDay() === 0 ? 6 : now.getDay() - 1));
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek); endOfWeek.setDate(startOfWeek.getDate() + 6); endOfWeek.setHours(23, 59, 59, 999);

    supabase.from("leaderboard")
      .select("player_name, score, percentage, completed_at")
      .gte("completed_at", startOfWeek.toISOString())
      .lte("completed_at", endOfWeek.toISOString())
      .order("completed_at", { ascending: true })
      .then(({ data }) => {
        if (!data?.length) return;
        const byPlayer = {};
        data.forEach(e => {
          if (!byPlayer[e.player_name]) byPlayer[e.player_name] = [];
          byPlayer[e.player_name].push(e);
        });
        const players = Object.entries(byPlayer);
        const [doorzName, doorzE] = [...players].sort((a, b) => b[1].length - a[1].length)[0] || [];
        const [hardName, hardE] = [...players].sort((a, b) => b[1].reduce((s, e) => s + (e.score || 0), 0) - a[1].reduce((s, e) => s + (e.score || 0), 0))[0] || [];
        const verbPlayers = players.filter(([, e]) => e.length >= 2).map(([name, e]) => ({ name, imp: e[e.length - 1].percentage - e[0].percentage })).filter(p => p.imp > 0).sort((a, b) => b.imp - a.imp);
        const items = [];
        if (doorzName) items.push({ icon: "💪", text: `Knap! ${doorzName} is Doorzetter van de week — ${doorzE.length} toetsen gemaakt!`, special: true });
        if (hardName && hardName !== doorzName) items.push({ icon: "🧠", text: `Wauw! ${hardName} is Hardwerker van de week — ${hardE.reduce((s, e) => s + (e.score || 0), 0)} vragen goed!`, special: true });
        if (verbPlayers[0] && verbPlayers[0].name !== doorzName && verbPlayers[0].name !== hardName) items.push({ icon: "📈", text: `Super! ${verbPlayers[0].name} is Verbeteraar van de week — +${verbPlayers[0].imp}% verbeterd!`, special: true });
        setAwardItems(items);
      }).catch(() => {});
  }, []);

  useEffect(() => {
    const now = new Date();
    const fmtShort = (d) => d.toLocaleDateString("nl-NL", { day: "numeric", month: "short" });

    const startOfDay = new Date(now); startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(now); endOfDay.setHours(23, 59, 59, 999);

    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - (now.getDay() === 0 ? 6 : now.getDay() - 1));
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek); endOfWeek.setDate(startOfWeek.getDate() + 6); endOfWeek.setHours(23, 59, 59, 999);

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999);

    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59, 999);

    const periods = [
      { icon: "☀️", label: "dag",   periode: fmtShort(startOfDay),                                    from: startOfDay,   to: endOfDay   },
      { icon: "📅", label: "week",  periode: `${fmtShort(startOfWeek)}–${fmtShort(endOfWeek)}`,        from: startOfWeek,  to: endOfWeek  },
      { icon: "🗓️", label: "maand", periode: now.toLocaleDateString("nl-NL", { month: "long" }),        from: startOfMonth, to: endOfMonth },
      { icon: "👑", label: "jaar",  periode: String(now.getFullYear()),                                  from: startOfYear,  to: endOfYear  },
    ];

    Promise.all(periods.map(p =>
      supabase.from("leaderboard")
        .select("player_name, subject, level, title, topic, percentage, time_taken")
        .gte("completed_at", p.from.toISOString())
        .lte("completed_at", p.to.toISOString())
        .order("percentage", { ascending: false })
        .order("time_taken", { ascending: true, nullsFirst: false })
        .limit(1)
        .then(({ data }) => data?.[0] ? { ...p, winner: data[0] } : null)
        .catch(() => null)
    )).then(results => setWinners(results.filter(Boolean)));
  }, []);

  const winnerItems = winners.map(({ icon, label, periode, winner }) => {
    const subj = SUBJECTS.find(s => s.id === winner.subject);
    const vakLabel = winner.title || winner.topic?.split('\n')[0].slice(0, 35) || (subj ? subj.label : winner.subject);
    return { icon, text: `Gefeliciteerd ${winner.player_name}! 🎉 ${BRAND.name} van de ${label} (${periode}) — ${vakLabel} · ${winner.percentage}%`, special: true };
  });

  // Verspreid alle speciale items (kampioenen + awards + share-bedankjes + OBLITERATOR + Vriendenmaker) tussen gewone items
  const allSpecial = [...winnerItems, ...awardItems, ...shareItems, ...obliteratorItems, ...(vriendenmakerItem ? [vriendenmakerItem] : [])];
  const half = Math.ceil(TICKER_ITEMS.length / Math.max(allSpecial.length, 1));
  const combined = [];
  TICKER_ITEMS.forEach((item, i) => {
    combined.push(item);
    const si = allSpecial[Math.floor(i / half)];
    if (si && i % half === half - 1) combined.push(si);
  });
  allSpecial.forEach(si => { if (!combined.includes(si)) combined.push(si); });
  const items = [...combined, ...combined];

  return (
    <>
      <style>{`
        @keyframes tickerScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="lk-content-wide" style={{
        overflow: "hidden",
        marginBottom: 18,
        padding: "8px 0",
        borderTop: "1px solid rgba(0,212,255,0.12)",
        borderBottom: "1px solid rgba(0,212,255,0.12)",
        position: "relative",
      }}>
        <div style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 32,
          background: "linear-gradient(to right, #0f1729, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", right: 0, top: 0, bottom: 0, width: 32,
          background: "linear-gradient(to left, #0f1729, transparent)",
          zIndex: 2, pointerEvents: "none",
        }} />
        <div style={{
          display: "flex",
          animation: `tickerScroll ${30 + allSpecial.length * 5}s linear infinite`,
          width: "max-content",
        }}>
          {items.map((item, i) => (
            <span key={i} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "0 18px",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-body)",
              fontSize: item.special ? 14 : 13,
              fontWeight: 700,
              color: item.special ? "#ffd700" : "rgba(255,255,255,0.65)",
              textShadow: item.special ? "0 0 12px rgba(255,215,0,0.5)" : "none",
            }}>
              <span style={{ fontSize: item.special ? 17 : 15 }}>{item.icon}</span>
              {item.text}
              <span style={{ color: item.special ? "rgba(255,215,0,0.3)" : "rgba(0,212,255,0.35)", marginLeft: 8 }}>·</span>
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

const FEATURES_LEFT = [
  { id: "cito",      icon: "🎯", label: "Cito oefenen", sub: "Oefen de eindtoets",  color: "#ff6b35", bg: "rgba(255,107,53,0.12)", border: "rgba(255,107,53,0.25)", badge: null, vakken: ["🔢 Rekenen", "📝 Taal", "📖 Lezen", "🌍 Wereld", "📊 Studievaardigh."] },
  { id: "eindexamen",icon: "🎓", label: "Eindexamen",   sub: "VMBO · HAVO · VWO",   color: "#7c4dff", bg: "rgba(124,77,255,0.12)", border: "rgba(124,77,255,0.2)",  badge: null },
];
const FEATURES_RIGHT = [
  { id: "schoolboeken",    label: "Schoolboeken",    sub: "100+ echte boeken",          color: "#0072ff", bg: "rgba(0,114,255,0.12)",   border: "rgba(0,114,255,0.2)",   badge: null },
  { id: "ai-vragen",       label: "AI-vragen",       sub: "Elk onderwerp",              color: "#7c3aed", bg: "rgba(124,58,237,0.12)",  border: "rgba(124,58,237,0.2)",  badge: "Nieuw" },
  { id: "tafels",           label: "Tafels oefenen",  sub: "Groep 3 t/m 6",             color: "#059669", bg: "rgba(5,150,105,0.12)",   border: "rgba(5,150,105,0.2)",   badge: null },
  { id: "begrijpend-lezen",label: "Begrijpend lezen",sub: "Groep 5–8",                  color: "#d97706", bg: "rgba(217,119,6,0.12)",   border: "rgba(217,119,6,0.2)",   badge: null },
  { id: "spelling",        label: "Spelling",        sub: "dt-regels & werkwoorden",    color: "#f43f5e", bg: "rgba(244,63,94,0.12)",   border: "rgba(244,63,94,0.2)",   badge: null },
  { id: "woordenschat",    label: "Woordenschat",    sub: "Synoniemen & betekenissen",  color: "#0891b2", bg: "rgba(8,145,178,0.12)",   border: "rgba(8,145,178,0.2)",   badge: null },
  { id: "redactiesommen",  label: "Redactiesommen",  sub: "Rekenen met tekst",          color: "#ea580c", bg: "rgba(234,88,12,0.12)",   border: "rgba(234,88,12,0.2)",   badge: null },
  { id: "scorebord",       label: "Scorebord",       sub: "Strijd om de top",           color: "#e11d48", bg: "rgba(225,29,72,0.12)",   border: "rgba(225,29,72,0.2)",   badge: null },
  { id: "leerkrachten",    label: "Leerkrachten",    sub: "Kennistest voor uw klas",    color: "#00897b", bg: "rgba(0,137,123,0.12)",   border: "rgba(0,137,123,0.2)",   badge: null },
  { id: "pro",             label: `${BRAND.name} Pro`,   sub: "Voor ouders & leerkrachten", color: "#a855f7", bg: "rgba(168,85,247,0.10)",  border: "rgba(168,85,247,0.35)", badge: null },
];

function FeatureShowcase({ onFeatureClick }) {
  const cardBase = {
    borderRadius: 14,
    border: "1px solid",
    cursor: "pointer",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
    position: "relative",
    overflow: "hidden",
  };

  const hover = (color) => ({
    onMouseEnter: e => { e.currentTarget.style.transform = "scale(1.03)"; e.currentTarget.style.boxShadow = `0 4px 18px ${color}55`; },
    onMouseLeave: e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; },
  });

  const renderBadge = (badge, color) => badge ? (
    <div style={{
      position: "absolute", top: 6, right: 6,
      background: color, color: "var(--color-text-strong)",
      fontSize: 9, fontWeight: 800,
      fontFamily: "var(--font-display)",
      padding: "2px 6px", borderRadius: 20,
    }}>{badge}</div>
  ) : null;

  return (
    <div style={{ width: "100%", maxWidth: 360, marginBottom: 24 }}>
      <div style={{
        fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
        color: "rgba(255,255,255,0.4)", letterSpacing: 1,
        textTransform: "uppercase", marginBottom: 10, textAlign: "center",
      }}>Ontdek wat je allemaal kunt oefenen!</div>

      <div style={{ display: "flex", gap: 8 }}>

        {/* Linkerkolom: Cito + Eindexamen */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: "1.15 0 0" }}>
          {FEATURES_LEFT.map(f => (
            <div key={f.id}
              onClick={() => onFeatureClick?.(f.id)}
              {...hover(f.color)}
              style={{
                ...cardBase,
                flex: 1,
                background: f.bg,
                borderColor: f.border,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                padding: "12px 12px 14px",
                minHeight: 90,
              }}>
              {renderBadge(f.badge, f.color)}
              <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: f.color, lineHeight: 1.2, marginBottom: f.vakken ? 6 : 2 }}>{f.label}</div>
              {f.vakken ? (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
                  {f.vakken.map(v => (
                    <span key={v} style={{ fontFamily: "var(--font-body)", fontSize: 9, color: "rgba(255,255,255,0.6)", background: "rgba(255,255,255,0.07)", borderRadius: 4, padding: "2px 5px", whiteSpace: "nowrap" }}>{v}</span>
                  ))}
                </div>
              ) : (
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.5)" }}>{f.sub}</div>
              )}
            </div>
          ))}
        </div>

        {/* Rechterkolom: 6 blokken zonder icoon, 2×3 grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, flex: "2 0 0" }}>
          {FEATURES_RIGHT.map(f => (
            <div key={f.id}
              onClick={() => onFeatureClick?.(f.id)}
              {...hover(f.color)}
              style={{
                ...cardBase,
                background: f.bg,
                borderColor: f.border,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "10px 10px",
                minHeight: 58,
              }}>
              {renderBadge(f.badge, f.color)}
              {f.id === "pro" ? (
                <div style={{ lineHeight: 1.2, marginBottom: 2 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "rgba(255,255,255,0.75)" }}>{BRAND.name}</span>
                  <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 900, color: f.color, background: `${f.color}22`, borderRadius: 4, padding: "0 4px", marginLeft: 2 }}>PRO</span>
                </div>
              ) : (
                <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: f.color, lineHeight: 1.2, marginBottom: 2 }}>{f.label}</div>
              )}
              <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.45)" }}>{f.sub}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

const ONBOARDING_STEPS = [
  { emoji: "📚", title: "Echte examenvragen, echte boeken", desc: "Echte voorbereiding voor je examen. Geen giswerk, gewoon oefenen wat telt." },
  { emoji: "🤖", title: `${BRAND.name} maakt vragen voor jou`, desc: "Elke quiz is anders, ook over jouw eigen schoolboek" },
  { emoji: "🏆", title: "Verdien je plek op het scorebord", desc: "Speel elke dag voor een langere streak" },
];

export default function HomePage({ onSelectRole, onBack, userName, setUserName, setUserLevel, setUserSchoolType, pendingCode, authUser, onGoogleLogin, onLogout, onSaveProfile, onOnboardingStart, onOuderDashboard, onAdminFeedback, onPlayObliterator, onPro, onLearnPath, onLearnPathsHub, onMyMastery, onPickPath }) {
  const isAdmin = (authUser?.email || "").toLowerCase() === "mark-smulders@hotmail.com";
  const [name, setName] = useState(userName);
  const [shake, setShake] = useState(false);
  const [step, setStep] = useState(pendingCode ? "name" : "role");
  const [pendingRole, setPendingRole] = useState(pendingCode ? "leerling" : null);
  const [pendingFeature, setPendingFeature] = useState(null);
  const [level, setLevel] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [showOnboarding, setShowOnboarding] = useState(() => {
    try { return !localStorage.getItem("ls_onboarded"); } catch { return false; }
  });
  const [installPrompt, setInstallPrompt] = useState(null);
  const [showInstallHelp, setShowInstallHelp] = useState(false);
  const [shareToast, setShareToast] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [feedbackBusy, setFeedbackBusy] = useState(false);
  const [feedbackImage, setFeedbackImage] = useState(null);
  const [feedbackImagePreview, setFeedbackImagePreview] = useState(null);

  const FEEDBACK_LIMIT_KEY = "feedback_today";
  const feedbackQuotaReached = () => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const raw = JSON.parse(localStorage.getItem(FEEDBACK_LIMIT_KEY) || "{}");
      return raw.date === today && (raw.count || 0) >= 3;
    } catch { return false; }
  };
  const incrementFeedbackQuota = () => {
    try {
      const today = new Date().toISOString().slice(0, 10);
      const raw = JSON.parse(localStorage.getItem(FEEDBACK_LIMIT_KEY) || "{}");
      const count = raw.date === today ? (raw.count || 0) + 1 : 1;
      localStorage.setItem(FEEDBACK_LIMIT_KEY, JSON.stringify({ date: today, count }));
    } catch {}
  };
  const handleImageKies = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) { setFeedbackError("Alleen afbeeldingen (.png/.jpg/.webp)."); return; }
    if (file.size > 2 * 1024 * 1024) { setFeedbackError("Afbeelding is te groot (max 2 MB)."); return; }
    setFeedbackError("");
    setFeedbackImage(file);
    const url = URL.createObjectURL(file);
    setFeedbackImagePreview(url);
  };
  const verwijderImage = () => {
    if (feedbackImagePreview) URL.revokeObjectURL(feedbackImagePreview);
    setFeedbackImage(null);
    setFeedbackImagePreview(null);
  };
  const sluitFeedback = () => {
    verwijderImage();
    setFeedbackText(""); setFeedbackError(""); setFeedbackSent(false); setShowFeedback(false);
  };
  const verstuurFeedback = async () => {
    const tekst = feedbackText.trim();
    if (tekst.length < 15) { setFeedbackError("Schrijf even iets meer (minimaal 15 tekens)."); return; }
    if (feedbackQuotaReached()) { setFeedbackError("Je hebt vandaag al 3 berichten gestuurd. Probeer morgen weer."); return; }
    setFeedbackBusy(true); setFeedbackError("");
    try {
      let screenshotUrl = null;
      if (feedbackImage) {
        const ext = (feedbackImage.name.split(".").pop() || "png").toLowerCase().slice(0, 5);
        const path = `${new Date().toISOString().slice(0, 10)}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
        const { error: upErr } = await supabase.storage.from("feedback-screenshots").upload(path, feedbackImage, { contentType: feedbackImage.type, upsert: false });
        if (upErr) throw upErr;
        const { data } = supabase.storage.from("feedback-screenshots").getPublicUrl(path);
        screenshotUrl = data?.publicUrl || null;
      }
      const { error } = await supabase.from("feedback").insert({
        message: tekst.slice(0, 2000),
        player_name: (name || userName || "").trim().slice(0, 60) || null,
        user_id: authUser?.id || null,
        page_url: typeof window !== "undefined" ? window.location.href.slice(0, 500) : null,
        user_agent: typeof navigator !== "undefined" ? (navigator.userAgent || "").slice(0, 300) : null,
        screenshot_url: screenshotUrl,
      });
      if (error) throw error;
      incrementFeedbackQuota();
      setFeedbackSent(true);
      setFeedbackText("");
      verwijderImage();
      setTimeout(() => { setShowFeedback(false); setFeedbackSent(false); }, 2000);
    } catch (e) {
      setFeedbackError("Kon je tip niet versturen. Probeer het zo nog eens.");
    } finally {
      setFeedbackBusy(false);
    }
  };

  // log share-event + toon "bedankt" toast (Hall of Fame voor delers)
  const trackShare = (platform) => {
    const naam = (name || userName || "").trim().slice(0, 60);
    if (naam) {
      try { supabase.from("share_events").insert({ shared_by: naam, platform }).then(() => {}).catch(() => {}); } catch {}
    }
    setShareToast(naam ? "🌟 Bedankt! Je staat in de Hall of Fame voor delers" : "🌟 Bedankt voor het delen!");
    setTimeout(() => setShareToast(null), 3500);
  };
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone;

  useEffect(() => {
    if (window.__pwaInstallPrompt) setInstallPrompt(window.__pwaInstallPrompt);
    const handler = (e) => { e.preventDefault(); setInstallPrompt(e); };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const finishOnboarding = () => {
    try { localStorage.setItem("ls_onboarded", "1"); } catch {}
    setShowOnboarding(false);
  };

  const roleLabels = { leerling: "leerling", student: "student", teacher: "leerkracht" };
  const levelOptions = { leerling: [1,2,3,4,5,6,7,8], student: [1,2,3,4,5,6], teacher: [] };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ls_user");
      if (saved) {
        const d = JSON.parse(saved);
        if (d.name) setName(d.name);
        if (d.level) setLevel(d.level);
      }
    } catch {}
  }, []);

  // Naam automatisch invullen vanuit Google profiel
  useEffect(() => {
    if (authUser && !name.trim()) {
      const googleName = authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email?.split("@")[0] || "";
      if (googleName) setName(googleName);
    }
  }, [authUser]);

  const handleRoleClick = (role) => {
    onOnboardingStart?.();
    setPendingRole(role);
    setLevel("");
    setSchoolType("");
    setStep("name");
  };

  // Primaire CTA "Oefenen": leerling-flow zonder featureId (geen specifieke feature kiezen).
  // Skipt naam-prompt voor terugkerende gebruikers (zelfde patroon als handleFeatureClick).
  const handleOefenenClick = () => {
    track("home_cta_oefenen");
    try {
      const saved = JSON.parse(localStorage.getItem("ls_user") || "{}");
      if (saved.name) {
        setUserName(saved.name);
        if (saved.level) setUserLevel(saved.level);
        if (saved.schoolType) setUserSchoolType?.(saved.schoolType);
        onSelectRole(saved.role || "leerling");
        return;
      }
    } catch {}
    handleRoleClick("leerling");
  };

  const handleLerenClick = () => {
    track("home_cta_leren");
    onLearnPathsHub?.();
  };

  const handleFeatureClick = (featureId) => {
    if (featureId === "pro") { onPro?.(); return; }
    const role = featureId === "leerkrachten" ? "teacher" : "leerling";
    setPendingFeature(featureId);
    // Terugkerende gebruiker: naam al opgeslagen → direct doorgaan
    try {
      const saved = JSON.parse(localStorage.getItem("ls_user") || "{}");
      if (saved.name) {
        setUserName(saved.name);
        if (saved.level) setUserLevel(saved.level);
        if (saved.schoolType) setUserSchoolType?.(saved.schoolType);
        onSelectRole(saved.role || role, featureId);
        return;
      }
    } catch {}
    // Nieuwe gebruiker: direct doorgaan zonder naam (gast), niet de naamstap tonen
    onSelectRole(role, featureId);
  };

  const handleConfirm = () => {
    const effectiveName = name.trim() ||
      (authUser && (authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email?.split("@")[0])) ||
      "";
    if (!effectiveName) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    if (!name.trim()) setName(effectiveName);
    setUserName(effectiveName);
    setUserLevel(level);
    setUserSchoolType?.(schoolType);
    try { localStorage.setItem("ls_user", JSON.stringify({ name: effectiveName, level, role: pendingRole, schoolType })); } catch {}
    try { onSaveProfile?.({ name: effectiveName, level, role: pendingRole, schoolType }); } catch {}
    track("name_entered", { name_length: effectiveName.length, level, role: pendingRole, school_type: schoolType || "" });
    onSelectRole(pendingRole, pendingFeature);
  };

  return (
    <div style={styles.page}>
      {/* Bedankt-toast na delen */}
      {shareToast && (
        <div style={{
          position: "fixed", left: "50%", bottom: 20, transform: "translateX(-50%)",
          zIndex: 100001, padding: "12px 18px", borderRadius: 14,
          background: "linear-gradient(135deg, #ffd700, #ffaa00)",
          color: "#1a1a00", fontFamily: "var(--font-display)",
          fontSize: 14, fontWeight: 700, letterSpacing: 0.3,
          boxShadow: "0 4px 20px rgba(255,215,0,0.5)",
          maxWidth: "calc(100vw - 24px)", textAlign: "center",
          animation: "popIn 0.35s ease",
        }}>
          {shareToast}
        </div>
      )}
      {showOnboarding && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 9999,
          background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 20,
        }}>
          <div style={{
            background: "#0d1b2e",
            border: "1px solid rgba(0,212,255,0.25)",
            borderRadius: 24,
            padding: "36px 28px",
            maxWidth: 360,
            width: "100%",
            textAlign: "center",
            boxShadow: "0 8px 48px rgba(0,0,0,0.7)",
          }}>
            {/* Step dots */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 28 }}>
              {ONBOARDING_STEPS.map((_, i) => (
                <div key={i} style={{
                  width: i === onboardingStep ? 24 : 8,
                  height: 8,
                  borderRadius: 4,
                  background: i === onboardingStep ? "#00d4ff" : "rgba(0,212,255,0.25)",
                  transition: "all 0.3s ease",
                }} />
              ))}
            </div>

            <div style={{ fontSize: 56, marginBottom: 16 }}>{ONBOARDING_STEPS[onboardingStep].emoji}</div>
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: 22,
              fontWeight: 700,
              color: "#00d4ff",
              marginBottom: 10,
              lineHeight: 1.2,
            }}>{ONBOARDING_STEPS[onboardingStep].title}</div>
            <div style={{
              fontFamily: "var(--font-body)",
              fontSize: 15,
              color: "rgba(255,255,255,0.7)",
              marginBottom: 32,
              lineHeight: 1.5,
            }}>{ONBOARDING_STEPS[onboardingStep].desc}</div>

            {onboardingStep < ONBOARDING_STEPS.length - 1 ? (
              <button
                onClick={() => setOnboardingStep(s => s + 1)}
                style={{
                  width: "100%", padding: "15px", borderRadius: 16, border: "none",
                  background: "linear-gradient(135deg, #0072ff, #00d4ff)",
                  color: "var(--color-text-strong)", fontFamily: "var(--font-display)",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,212,255,0.35)",
                }}
              >
                Volgende →
              </button>
            ) : (
              <button
                onClick={finishOnboarding}
                style={{
                  width: "100%", padding: "15px", borderRadius: 16, border: "none",
                  background: "linear-gradient(135deg, var(--color-brand-primary), #00e676)",
                  color: "var(--color-text-strong)", fontFamily: "var(--font-display)",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,200,83,0.4)",
                }}
              >
                Beginnen! 🚀
              </button>
            )}
          </div>
        </div>
      )}
      <div style={styles.heroSection}>

        {/* 3D-kubus teaser óók voor returning users — visueel speelse
            interactie die zelfde "wow"-effect geeft als bij nieuwe bezoekers. */}
        {step === "role" && (() => {
          let savedName = null;
          try {
            savedName = (JSON.parse(localStorage.getItem("ls_user") || "{}")?.name || "").trim();
          } catch {}
          if (!savedName) return null;
          return (
            <div style={{ width: "100%", maxWidth: 320, marginBottom: 16 }}>
              <Suspense fallback={null}>
                <Mini3DTeaser onCTA={() => {
                  if (onPickPath) onPickPath("ruimtemeetkunde");
                  else if (onLearnPathsHub) onLearnPathsHub();
                }} />
              </Suspense>
            </div>
          );
        })()}

        {/* Daily challenge + Hero-Mastery-CTA voor terugkerende leerlingen
            (Prio 2 + Prio 3 uit competitor-research). Daily-banner staat
            BOVEN de mastery-CTA: streak/dagelijks-signaal eerst (Duolingo/
            Brilliant-pattern), dan "Doorgaan waar je was" als secondary. */}
        {step === "role" && onPickPath && (() => {
          let savedName = null;
          try {
            savedName = (JSON.parse(localStorage.getItem("ls_user") || "{}")?.name || "").trim();
          } catch {}
          if (!savedName) return null;
          return (
            <div style={{ width: "100%", maxWidth: 560, marginBottom: 12 }}>
              <DailyChallengeBanner
                userName={savedName}
                onStart={(pathId) => {
                  if (pathId && onPickPath) onPickPath(pathId);
                  else if (onLearnPathsHub) onLearnPathsHub();
                }}
              />
              <MasteryCTABanner
                userName={savedName}
                onPickPath={onPickPath}
                onStartFirst={onLearnPathsHub}
                variant="hero"
              />
            </div>
          );
        })()}

        {/* Brand-mark linksboven (compact, 2-regels): pictogram + wordmark op regel 1,
            slogan op regel 2. Speelt 1× bij open en blijft in eindframe staan. */}
        {(() => {
          let hasName = false;
          try {
            hasName = !!(JSON.parse(localStorage.getItem("ls_user") || "{}")?.name || "").trim();
          } catch {}
          if (hasName) return null;
          return (
            <div style={{
              alignSelf: "flex-start",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 1,
              marginBottom: 14,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <svg viewBox="0 0 100 100" style={{
                  width: 24,
                  height: 24,
                  flexShrink: 0,
                  opacity: 0,
                  transformOrigin: "50% 50%",
                  animation: "lk-mark-circle 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards",
                }} aria-hidden="true">
                  <path d="M50,8 A42,42 0 0,1 92,50 L50,50 Z" fill="#00C853" />
                </svg>
                <span style={{
                  fontFamily: "var(--font-display, -apple-system, sans-serif)",
                  fontSize: 17,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.92)",
                  letterSpacing: "-0.01em",
                  opacity: 0,
                  animation: "lk-mark-word 0.7s ease-out 0.55s forwards",
                }}>
                  {BRAND.name}
                </span>
              </div>
              <span style={{
                fontFamily: "var(--font-body, -apple-system, sans-serif)",
                fontSize: 11,
                fontWeight: 500,
                color: "rgba(255,255,255,0.45)",
                letterSpacing: "0.02em",
                marginLeft: 32,
                opacity: 0,
                animation: "lk-mark-slogan 0.7s ease-out 1.05s forwards",
              }}>
                {BRAND.slogan}
              </span>
            </div>
          );
        })()}

        {/* Hero voor nieuwe bezoekers: 6 even grote vierkante tegels in
            responsive grid (2×3 op telefoon, 3×2 op tablet/laptop). 1e tegel
            bevat de echte Mini3DTeaser slider (kubus-z³-berekening); de
            andere 5 zijn reguliere actie-buttons. Daaronder lichtkrant. */}
        {step === "role" && (() => {
          let hasName = false;
          try {
            hasName = !!(JSON.parse(localStorage.getItem("ls_user") || "{}")?.name || "").trim();
          } catch {}
          if (hasName) return null;
          const tiles = [
            ...(onLearnPathsHub ? [{
              key: "leren",
              emoji: "📚",
              label: "Leren",
              sub: "uitleg + checks",
              color: "#00C853",
              onClick: handleLerenClick,
            }] : []),
            {
              key: "oefenen",
              emoji: "🎯",
              label: "Oefenen",
              sub: "toetsen · cito",
              color: "#ff8030",
              onClick: handleOefenenClick,
            },
            { key: "leerling", emoji: "🎒", label: "Leerling", sub: "groep 1–8", color: "#0072ff", onClick: () => handleRoleClick("leerling") },
            { key: "student",  emoji: "🎓", label: "Student",  sub: "klas 1–6",  color: "#7c3aed", onClick: () => handleRoleClick("student") },
            { key: "teacher",  emoji: "📋", label: "Leerkracht", sub: "kennistest", color: "#00897b", onClick: () => handleRoleClick("teacher") },
          ];
          return (
            <>
              <div className="lk-hero-tiles">
                {/* 1e tegel: interactieve 3D-kubus slider, vult exact één vierkant */}
                <div className="lk-tile lk-tile-teaser" style={{
                  background: "rgba(255,213,79,0.06)",
                  border: "1.5px solid rgba(255,213,79,0.25)",
                  cursor: "default",
                  padding: 0,
                  overflow: "hidden",
                }}>
                  <Suspense fallback={
                    <div style={{
                      width: "100%", height: "100%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 11, color: "rgba(224,230,240,0.55)",
                    }}>
                      3D laadt…
                    </div>
                  }>
                    <Mini3DTeaser onCTA={() => {
                      if (onPickPath) onPickPath("ruimtemeetkunde");
                      else if (onLearnPathsHub) onLearnPathsHub();
                    }} />
                  </Suspense>
                </div>
                {/* 5 reguliere tegels */}
                {tiles.map(({ key, emoji, label, sub, color, onClick }) => (
                  <button
                    key={key}
                    onClick={onClick}
                    className="lk-tile"
                    style={{
                      background: `${color}14`,
                      border: `1.5px solid ${color}55`,
                      color: "#fff",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.transform = "translateY(-2px)";
                      e.currentTarget.style.background = `${color}28`;
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.transform = "translateY(0)";
                      e.currentTarget.style.background = `${color}14`;
                    }}
                  >
                    <span style={{ fontSize: 30, lineHeight: 1 }}>{emoji}</span>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color }}>{label}</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.55)" }}>{sub}</div>
                  </button>
                ))}
              </div>
              <TickerBanner />
            </>
          );
        })()}

        {step === "role" && isLaunchPromoActive() && (() => {
          // LaunchPromo verbergen voor ingelogde users — banner is een groei-
          // hook voor nieuwe bezoekers, voor terugkerende leerlingen ruis.
          let hasName = false;
          try {
            hasName = !!(JSON.parse(localStorage.getItem("ls_user") || "{}")?.name || "").trim();
          } catch {}
          if (hasName) return null;
          return (
            <div className="lk-content-wide" style={{
              marginBottom: 12,
              padding: "10px 14px",
              background: "linear-gradient(135deg, rgba(0,200,83,0.14), rgba(124,58,237,0.12))",
              border: "1px solid rgba(105,240,174,0.35)",
              borderRadius: 14,
              fontFamily: "var(--font-body)",
              textAlign: "center"
            }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "var(--color-brand-primary-100)", marginBottom: 2 }}>
                {LAUNCH_PROMO_SHORT}
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.55)", lineHeight: 1.4 }}>
                {LAUNCH_PROMO_LONG}
              </div>
            </div>
          );
        })()}

        {/* (verplaatst naar boven de hero — Prio 2 uit competitor-research) */}

        {/* Primaire CTA's: Leren vs Oefenen — alleen voor terugkerende leerlingen.
            Nieuwe bezoekers zien deze knoppen al gestapeld in de 2-kolom hero
            naast de 3D-kubus, dus zonder herhaling. */}
        {step === "role" && (() => {
          let hasName = false;
          try {
            hasName = !!(JSON.parse(localStorage.getItem("ls_user") || "{}")?.name || "").trim();
          } catch {}
          return hasName;
        })() && (
          <div style={{ width: "100%", maxWidth: 360, marginBottom: 16, marginTop: 4 }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "rgba(255,255,255,0.85)", marginBottom: 10, textAlign: "center", letterSpacing: 0.3 }}>
              Wat wil je doen?
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              {onLearnPathsHub && (
                <button
                  onClick={handleLerenClick}
                  style={{
                    flex: 1,
                    background: "linear-gradient(135deg, var(--color-brand-primary), #00897b)",
                    border: "none", borderRadius: 18, padding: "18px 10px",
                    color: "var(--color-text-strong)", cursor: "pointer",
                    display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                    boxShadow: "0 6px 20px rgba(0,200,83,0.35)",
                    transition: "transform 0.15s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <span style={{ fontSize: 34 }}>📚</span>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700 }}>Leren</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 11, opacity: 0.92 }}>uitleg + checks per stap</div>
                </button>
              )}
              <button
                onClick={handleOefenenClick}
                style={{
                  flex: 1,
                  background: "linear-gradient(135deg, #ff8030, #ffaa00)",
                  border: "none", borderRadius: 18, padding: "18px 10px",
                  color: "#1a0a00", cursor: "pointer",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                  boxShadow: "0 6px 20px rgba(255,140,40,0.35)",
                  transition: "transform 0.15s",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <span style={{ fontSize: 34 }}>🎯</span>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700 }}>Oefenen</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 11, opacity: 0.92 }}>toetsen, tafels, cito</div>
              </button>
            </div>
            {onMyMastery && (() => {
              // Toon de "Mijn voortgang"-knop alleen voor terugkerende leerlingen
              // (= naam in localStorage). Voor nieuwe bezoekers heeft het geen
              // betekenis nog en zou het de keuze versnipperen.
              let savedName = null;
              try { savedName = (JSON.parse(localStorage.getItem("ls_user") || "{}")?.name || "").trim(); } catch {}
              if (!savedName) return null;
              return (
                <button
                  onClick={() => { track("home_cta_mastery"); onMyMastery(); }}
                  style={{
                    width: "100%", marginTop: 12,
                    padding: "12px 14px",
                    borderRadius: 14,
                    border: "1px solid rgba(0,200,83,0.40)",
                    background: "rgba(0,200,83,0.10)",
                    color: "var(--color-brand-primary-100)",
                    fontFamily: "var(--font-display)",
                    fontSize: 14, fontWeight: 700,
                    cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  }}
                >
                  <span style={{ fontSize: 18 }}>📈</span>
                  <span>Mijn voortgang — {savedName}</span>
                </button>
              );
            })()}
            <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)", marginTop: 14, textAlign: "center" }}>
              of kies hieronder een rol ↓
            </div>
          </div>
        )}

        {/* Role-buttons (Leerling / Student / Leerkracht) zijn voor nieuwe
            bezoekers verplaatst naar de 6-tegel hero hierboven. Voor
            terugkerende leerlingen blijven ze hier, op smalle 3-knops rij. */}
        {step === "role" && (() => {
          let hasName = false;
          try {
            hasName = !!(JSON.parse(localStorage.getItem("ls_user") || "{}")?.name || "").trim();
          } catch {}
          return hasName;
        })() && (
          <div style={{ width: "100%", maxWidth: 360, marginBottom: 4 }}>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { role: "leerling", emoji: "🎒", label: "Leerling", sub: "groep 1–8", color: "#0072ff" },
                { role: "student",  emoji: "🎓", label: "Student",  sub: "klas 1–6",  color: "#7c3aed" },
                { role: "teacher",  emoji: "📋", label: "Leerkracht", sub: "kennistest", color: "#00897b" },
              ].map(({ role, emoji, label, sub, color }) => (
                <button key={role} onClick={() => handleRoleClick(role)} style={{
                  flex: 1,
                  border: `1.5px solid ${color}55`,
                  padding: "13px 6px",
                  cursor: "pointer",
                  borderRadius: 16,
                  background: `${color}14`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 5,
                  transition: "transform 0.15s ease, background 0.15s ease",
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.background = `${color}28`; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = `${color}14`; }}
                >
                  <span style={{ fontSize: 26 }}>{emoji}</span>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color }}>{label}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 10, color: "rgba(255,255,255,0.45)" }}>{sub}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* FeatureShowcase verwijderd — die kaarten horen onder Oefenen-tab,
            niet op de homepage. Hero-tegels zijn al de toegangspoort. */}

        {/* PWA install banner — altijd zichtbaar tot app geïnstalleerd is */}
        {step === "role" && !isStandalone && (
          <button
            onClick={async () => {
              if (installPrompt) {
                installPrompt.prompt();
                const { outcome } = await installPrompt.userChoice;
                if (outcome === "accepted") setInstallPrompt(null);
                return;
              }
              setShowInstallHelp(true);
            }}
            className="lk-content-wide"
            style={{
              background: "linear-gradient(135deg, rgba(0,72,200,0.18), rgba(0,212,255,0.10))",
              border: "1px solid rgba(0,212,255,0.3)",
              borderRadius: 14,
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 16,
              cursor: "pointer",
              fontFamily: "var(--font-body)",
              textAlign: "left",
            }}>
            <span style={{ fontSize: 26, flexShrink: 0 }}>📲</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#00d4ff", lineHeight: 1.2 }}>
                Zet {BRAND.name} op je telefoon of laptop
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
                Gratis · werkt ook offline · sneller dan de browser
              </div>
            </div>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#00d4ff", flexShrink: 0 }}>Installeer →</span>
          </button>
        )}

        {showInstallHelp && (
          <div onClick={() => setShowInstallHelp(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
            <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 380, width: "100%", background: "#162033", border: "1px solid rgba(0,212,255,0.3)", borderRadius: 18, padding: 22, color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#00d4ff", marginBottom: 10 }}>📲 {BRAND.name} installeren</div>
              {isIOS ? (
                <>
                  <p style={{ fontSize: 14, lineHeight: 1.45, margin: "0 0 10px" }}>Op iPhone/iPad:</p>
                  <ol style={{ fontSize: 14, lineHeight: 1.6, paddingLeft: 20, margin: "0 0 12px" }}>
                    <li>Open <strong>{BRAND.domain}</strong> in Safari</li>
                    <li>Tik op het <strong>Deel-icoontje</strong> (vierkant met pijl omhoog)</li>
                    <li>Kies <strong>"Zet op beginscherm"</strong></li>
                  </ol>
                </>
              ) : (
                <>
                  <p style={{ fontSize: 14, lineHeight: 1.45, margin: "0 0 10px" }}>Installeer {BRAND.name} als app:</p>
                  <ul style={{ fontSize: 14, lineHeight: 1.6, paddingLeft: 20, margin: "0 0 12px" }}>
                    <li><strong>Android/Chrome</strong>: menu (⋮) → "App installeren"</li>
                    <li><strong>Windows/Mac</strong>: klik op het installatie-icoon in de adresbalk</li>
                    <li><strong>Edge</strong>: menu → "Apps" → "Deze site installeren"</li>
                  </ul>
                </>
              )}
              <p style={{ fontSize: 12, color: "var(--color-text-muted)", margin: "0 0 14px" }}>Daarna kun je {BRAND.name} openen als een echte app, ook offline.</p>
              <button onClick={() => setShowInstallHelp(false)} style={{ width: "100%", padding: 10, border: "none", borderRadius: 10, background: "#00d4ff", color: "#0a1525", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Oké, duidelijk</button>
            </div>
          </div>
        )}

        {step === "name" && (
          <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
            {pendingCode ? (
              <div style={{
                background: "rgba(0,200,83,0.15)", borderRadius: 16,
                padding: "12px 16px", textAlign: "center",
                border: "1px solid rgba(0,200,83,0.3)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "#00e676" }}>🎯 Quiz gevonden!</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#aabbcc", marginTop: 4 }}>Vul je naam in en de quiz start meteen</div>
              </div>
            ) : (
              <div style={{
                background: "rgba(255,255,255,0.06)", borderRadius: 16,
                padding: "10px 14px", display: "flex", alignItems: "center", gap: 10,
              }}>
                <img src="/bol.jpg" alt="" style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover" }} />
                <div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Je koos:</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, color: "var(--color-text-strong)" }}>{roleLabels[pendingRole]}</div>
                </div>
                <button onClick={() => setStep("role")} style={{
                  marginLeft: "auto", background: "none", border: "none",
                  color: "rgba(255,255,255,0.75)", fontSize: 13, cursor: "pointer",
                  fontFamily: "var(--font-body)",
                }}>← terug</button>
              </div>
            )}

            <div style={{ ...styles.nameInput, animation: shake ? "shake 0.5s ease" : "none" }}>
              <label style={styles.inputLabel}>Wat is je naam?</label>
              <input
                style={styles.textInput}
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
                placeholder="Vul je naam in..."
                onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
              />
            </div>

            {levelOptions[pendingRole]?.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <label style={{ ...styles.inputLabel, marginBottom: 0 }}>
                    {pendingRole === "leerling" ? "Welke groep zit je in?" : "Welke klas zit je in?"}
                  </label>
                  <button onClick={() => setLevel("")} style={{
                    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 8, padding: "4px 10px",
                    color: "rgba(255,255,255,0.85)", fontSize: 12, cursor: "pointer",
                    fontFamily: "var(--font-body)",
                  }}>sla over →</button>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {levelOptions[pendingRole].map(n => (
                    <button key={n} onClick={() => setLevel(String(n))} style={{
                      width: 38, height: 38, borderRadius: 10,
                      border: level === String(n) ? "2px solid #00d4ff" : "1px solid rgba(255,255,255,0.15)",
                      background: level === String(n) ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.05)",
                      color: level === String(n) ? "#00d4ff" : "rgba(255,255,255,0.6)",
                      fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                      cursor: "pointer",
                    }}>{n}</button>
                  ))}
                </div>
              </div>
            )}

            {pendingRole === "student" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ ...styles.inputLabel, marginBottom: 0 }}>Welk type onderwijs volg je?</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    { id: "mavo", label: "VMBO-TL",   color: "#f59e0b" },
                    { id: "havo", label: "HAVO",      color: "#3b82f6" },
                    { id: "vwo",  label: "VWO",       color: "#8b5cf6" },
                    { id: "gym",  label: "Gymnasium", color: "#ec4899" },
                  ].map(({ id, label, color }) => {
                    const sel = schoolType === id;
                    return (
                      <button key={id} onClick={() => setSchoolType(sel ? "" : id)} style={{
                        padding: "7px 14px", borderRadius: 10, cursor: "pointer",
                        border: sel ? `2px solid ${color}` : "1px solid rgba(255,255,255,0.15)",
                        background: sel ? `${color}22` : "rgba(255,255,255,0.05)",
                        color: sel ? color : "rgba(255,255,255,0.6)",
                        fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700,
                      }}>{label}</button>
                    );
                  })}
                </div>
              </div>
            )}

            {authUser ? (
              <>
                <div style={{ display: "flex", alignItems: "center", gap: 10, background: "rgba(0,200,83,0.12)", border: "1px solid rgba(0,200,83,0.3)", borderRadius: 16, padding: "12px 16px" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(0,200,83,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✓</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 14, color: "#00e676" }}>Ingelogd</div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.6)" }}>{authUser.email}</div>
                  </div>
                  <button onClick={onLogout} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", fontSize: 12, cursor: "pointer", fontFamily: "var(--font-body)" }}>Uitloggen</button>
                </div>
                <button onClick={handleConfirm} style={{
                  width: "100%", padding: "15px", borderRadius: 16, border: "none",
                  background: "linear-gradient(135deg, var(--color-brand-primary), #00897b)",
                  color: "var(--color-text-strong)", fontFamily: "var(--font-display)",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(0,200,83,0.4)",
                }}>
                  Doorgaan →
                </button>
              </>
            ) : (
              <>
                <button onClick={handleConfirm} style={{
                  width: "100%", padding: "15px", borderRadius: 16, border: "none",
                  background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                  color: "var(--color-text-strong)", fontFamily: "var(--font-display)",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  boxShadow: "0 4px 20px rgba(13,71,161,0.5)",
                }}>
                  Doorgaan als gast
                </button>
                <button onClick={onGoogleLogin} style={{
                  width: "100%", padding: "15px", borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.15)",
                  background: "#ffffff",
                  color: "#333", fontFamily: "var(--font-display)",
                  fontSize: 17, fontWeight: 700, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                }}>
                  <svg width="20" height="20" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.08 17.74 9.5 24 9.5z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/><path fill="none" d="M0 0h48v48H0z"/></svg>
                  Inloggen met Google
                </button>
              </>
            )}
          </div>
        )}

        {/* Compacte footer-rij: deel-links + tip. Vervangt de 5 grote knoppen
            (WhatsApp, Facebook, Deel-OBLI, Speel-OBLI, Tip-aan-maker) die de
            homepage rommelig maakten. Speel OBLITERATOR zit al in bottom-nav. */}
        {step === "role" && (
          <div className="lk-content-wide" style={{
            marginTop: 20,
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14,
            fontFamily: "var(--font-body)", fontSize: 12,
          }}>
            <button
              type="button"
              style={{ background: "none", border: "none", color: "#25D366", cursor: "pointer", padding: "4px 6px", display: "inline-flex", alignItems: "center", gap: 5 }}
              onClick={() => {
                const text = `Ken je ${BRAND.shortName} al?\n\nSamen slim worden met leuke vragen! Oefenen voor school was nog nooit zo leuk.\n\n👉 Open de app: https://www.${BRAND.domain}`;
                window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
                trackShare("whatsapp");
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Deel via WhatsApp
            </button>
            <button
              type="button"
              style={{ background: "none", border: "none", color: "#1877F2", cursor: "pointer", padding: "4px 6px", display: "inline-flex", alignItems: "center", gap: 5 }}
              onClick={() => {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://${BRAND.domain}`)}`, "_blank");
                trackShare("facebook");
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Deel via Facebook
            </button>
            <button
              type="button"
              style={{ background: "none", border: "none", color: "#ffcc40", cursor: "pointer", padding: "4px 6px", display: "inline-flex", alignItems: "center", gap: 5 }}
              onClick={() => { setShowFeedback(true); setFeedbackError(""); setFeedbackSent(false); }}
            >
              <span>💡</span>
              Tip aan de maker
            </button>
            {isAdmin && onAdminFeedback && (
              <button
                type="button"
                style={{ background: "none", border: "none", color: "var(--color-brand-primary-100)", cursor: "pointer", padding: "4px 6px", display: "inline-flex", alignItems: "center", gap: 5 }}
                onClick={onAdminFeedback}
              >
                <span>📬</span>
                Tips lezen (admin)
              </button>
            )}
          </div>
        )}

        {showFeedback && (
          <div
            onClick={(e) => { if (e.target === e.currentTarget) sluitFeedback(); }}
            style={{
              position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 10000,
              display: "flex", alignItems: "center", justifyContent: "center", padding: 16,
            }}
          >
            <div style={{
              background: "linear-gradient(135deg, #1a2238, #0f1626)",
              border: "1px solid rgba(255,204,64,0.4)", borderRadius: 16,
              padding: "20px 18px", maxWidth: 440, width: "100%",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#ffcc40", fontFamily: "var(--font-display)" }}>
                  💡 Tip aan de maker
                </div>
                <button onClick={sluitFeedback} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 22, cursor: "pointer" }}>×</button>
              </div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, marginBottom: 10, lineHeight: 1.4 }}>
                Heb je een idee, een fout gevonden of werkt iets niet? Schrijf het hier — Mark leest alle tips zelf.
              </p>
              <div style={{
                background: "rgba(255,152,0,0.1)", border: "1px solid rgba(255,152,0,0.35)",
                borderRadius: 10, padding: "8px 12px", marginBottom: 10,
                color: "#ffb74d", fontSize: 11, lineHeight: 1.4,
              }}>
                ⚠️ <strong>Belangrijk:</strong> deel geen foto's van jezelf, je naam, adres of andere persoonlijke gegevens. Een screenshot van een vraag of fout in de app is wél prima.
              </div>
              {feedbackSent ? (
                <div style={{ textAlign: "center", padding: "20px 0", color: "var(--color-brand-primary-100)", fontSize: 15, fontWeight: 700 }}>
                  ✅ Bedankt! Je tip is binnen.
                </div>
              ) : (
                <>
                  <textarea
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    placeholder="Wat wil je melden?"
                    maxLength={2000}
                    rows={5}
                    disabled={feedbackBusy}
                    style={{
                      width: "100%", padding: "10px 12px", borderRadius: 10,
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)",
                      color: "var(--color-text-strong)", fontFamily: "var(--font-body)", fontSize: 14,
                      resize: "vertical", boxSizing: "border-box", outline: "none",
                    }}
                  />
                  <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                    <span>{feedbackText.trim().length < 15 ? `Nog ${Math.max(0, 15 - feedbackText.trim().length)} tekens nodig` : "OK"}</span>
                    <span>{feedbackText.length}/2000</span>
                  </div>

                  {/* Screenshot uploader */}
                  <div style={{ marginTop: 10 }}>
                    {!feedbackImage ? (
                      <label style={{
                        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                        padding: "8px 12px", border: "1px dashed rgba(255,255,255,0.25)",
                        borderRadius: 10, color: "rgba(255,255,255,0.7)",
                        fontSize: 12, cursor: "pointer", fontFamily: "var(--font-body)",
                      }}>
                        📷 Screenshot toevoegen (optioneel, max 2 MB)
                        <input type="file" accept="image/*" onChange={handleImageKies} disabled={feedbackBusy} style={{ display: "none" }} />
                      </label>
                    ) : (
                      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: 8, background: "rgba(255,255,255,0.05)", borderRadius: 10 }}>
                        <img src={feedbackImagePreview} alt="screenshot" style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 6 }} />
                        <div style={{ flex: 1, fontSize: 12, color: "rgba(255,255,255,0.7)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {feedbackImage.name}
                        </div>
                        <button onClick={verwijderImage} disabled={feedbackBusy} style={{ background: "none", border: "1px solid rgba(255,255,255,0.2)", borderRadius: 6, color: "rgba(255,255,255,0.7)", padding: "4px 8px", fontSize: 11, cursor: "pointer" }}>
                          verwijder
                        </button>
                      </div>
                    )}
                  </div>

                  {feedbackError && (
                    <div style={{ marginTop: 8, color: "#ff7043", fontSize: 12 }}>{feedbackError}</div>
                  )}

                  <button
                    onClick={verstuurFeedback}
                    disabled={feedbackBusy || feedbackText.trim().length < 15}
                    style={{
                      marginTop: 12, width: "100%", padding: "11px 16px", borderRadius: 10,
                      background: feedbackText.trim().length >= 15 && !feedbackBusy
                        ? "linear-gradient(135deg, #ffcc40, #ffaa00)"
                        : "rgba(255,255,255,0.1)",
                      color: feedbackText.trim().length >= 15 && !feedbackBusy ? "#1a1a00" : "rgba(255,255,255,0.4)",
                      border: "none", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                      cursor: feedbackBusy || feedbackText.trim().length < 15 ? "not-allowed" : "pointer",
                    }}
                  >
                    {feedbackBusy ? "Versturen…" : "Verstuur tip"}
                  </button>
                </>
              )}
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{
          marginTop: 32,
          paddingTop: 16,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
          width: "100%",
          maxWidth: 360,
        }}>
          <p style={{ fontFamily: "var(--font-body)", color: "#445566", fontSize: 11, margin: "0 0 4px" }}>
            © Smulsoft &nbsp;·&nbsp;
            <a href="/over.html" style={{ color: "#445566" }}>Over</a>
            &nbsp;·&nbsp;
            <a href="/privacy.html" style={{ color: "#445566" }}>Privacybeleid</a>
          </p>
          <p style={{ fontFamily: "var(--font-body)", color: "#334455", fontSize: 10, margin: 0 }}>
            Deze app is in ontwikkeling en kan fouten bevatten.
          </p>
        </div>
      </div>

      <style>{`
        input, select, textarea { color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; }
        input::placeholder { color: #667788 !important; -webkit-text-fill-color: #667788 !important; }
        select option { background: #1e2d45; color: #ffffff; }
        @keyframes correctGlow { 0% { box-shadow: 0 0 0 0 rgba(40,167,69,0.4); } 70% { box-shadow: 0 0 0 15px rgba(40,167,69,0); } 100% { box-shadow: 0 0 0 0 rgba(40,167,69,0); } }
        @keyframes wrongShake { 0%,100% { transform: translateX(0); } 15%,45%,75% { transform: translateX(-6px); } 30%,60%,90% { transform: translateX(6px); } }
        @keyframes timerPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes scoreFloat { 0% { opacity:1; transform:translateY(0) scale(1); } 100% { opacity:0; transform:translateY(-40px) scale(1.5); } }
        @keyframes popIn { 0% { transform:scale(0.5); opacity:0; } 70% { transform:scale(1.1); } 100% { transform:scale(1); opacity:1; } }
        @keyframes confetti { 0% { transform:translateY(0) rotate(0deg); opacity:1; } 100% { transform:translateY(-200px) rotate(720deg); opacity:0; } }
        @keyframes slideIn { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeBg { from { opacity:0; } to { opacity:1; } }
        @keyframes roleGlowBlue {
          0%, 100% { text-shadow: 0 0 8px rgba(0,114,255,0.4), 0 0 20px rgba(0,114,255,0.2); }
          50% { text-shadow: 0 0 16px rgba(0,180,255,0.9), 0 0 40px rgba(0,114,255,0.5); }
        }
        @keyframes roleGlowPurple {
          0%, 100% { text-shadow: 0 0 8px rgba(124,58,237,0.4), 0 0 20px rgba(124,58,237,0.2); }
          50% { text-shadow: 0 0 16px rgba(160,100,255,0.9), 0 0 40px rgba(124,58,237,0.5); }
        }
        @keyframes roleGlowGreen {
          0%, 100% { text-shadow: 0 0 8px rgba(0,137,123,0.4), 0 0 20px rgba(0,137,123,0.2); }
          50% { text-shadow: 0 0 16px rgba(0,200,160,0.9), 0 0 40px rgba(0,137,123,0.5); }
        }
        @keyframes pulseDown {
          0%, 100% { opacity: 0.5; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(4px); }
        }
        @keyframes arrowBounce {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes countDown {
          from { transform: scale(1.5); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes correctFlash {
          0% { background: #d4edda; }
          100% { background: transparent; }
        }
        @keyframes wrongFlash {
          0% { background: #f8d7da; }
          100% { background: transparent; }
        }
      `}</style>
    </div>
  );
}

import { useState, useEffect, useRef, lazy, Suspense, Component } from "react";
import { Presentation } from "lucide-react";
import styles from "../styles.js";
import { LEVELS, SUBJECTS, isLaunchPromoActive, LAUNCH_PROMO_SHORT, LAUNCH_PROMO_LONG } from "../constants.js";
import QuizCardIcon from "../shared/ui/QuizCardIcon.jsx";
import DoorstroomtoetsLogo from "./DoorstroomtoetsLogo.jsx";
import { BRAND } from "../brand.js";
import supabase from "../supabase.js";
import { track } from "../utils.js";
import usePwaInstall from "../shared/usePwaInstall.js";

// Three.js zit in een aparte chunk — alleen geladen voor nieuwe bezoekers die
// de homepage in beeld krijgen. Houdt initial-bundle klein voor snelle conversie.
const Mini3DTeaser = lazy(() => import("./learn/3d/Mini3DTeaser.jsx"));
const EchteCijfers = lazy(() => import("./EchteCijfers.jsx"));

// Error-boundary specifiek rond de 3D-tegel. Als WebGL faalt of three.js
// crasht (kan voorkomen op zwakkere mobiele GPU's of bij 216 unit-cubes
// op slechte drivers), valt 'ie terug op een statisch fallback-tile zodat
// de rest van de home niet zwart wordt.
class TeaserErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    try { track("home_3d_teaser_error", { message: String(error?.message || error).slice(0, 200) }); } catch {}
    // eslint-disable-next-line no-console
    console.warn("[3D-teaser] crash, fallback geactiveerd:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 12,
          textAlign: "center",
          gap: 6,
        }}>
          <div style={{ fontSize: 32 }} aria-hidden="true">📦</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#ffd54f" }}>
            Ruimtemeetkunde
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.55)" }}>
            3D-voorbeeld kon niet laden
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// Mini-illustratie voor de "Leren"-tegel: stapeltje van drie boeken in
// brand-groen / goud-geel / licht-blauw, met titel-regeltjes op de spines.
// QuizCardIcon — gedeeld in src/shared/ui/QuizCardIcon.jsx (gebruikt in de
// bottom-nav "Test"-tab; uit hero-tegels gehaald bij de homepage-snoei).

// Maand 1 snoei (visie-bewaker 2026-05-10): ticker rustig + Cito-vriendelijk.
// Verwijderd: "scorebord — strijd om de top" (faalangst-trigger), "eerst leren
// dan spelen" (game-suggestie), "leerkrachten" (niet ICP), VMBO-jargon (niet
// primaire doelgroep). Behouden + uitgebreid: 15-min belofte, Cito, rustig
// leren, rekenen/taal-onderwerpen die Cito-ouder herkent.
const TICKER_ITEMS = [
  { icon: "⏱", text: "Elk kwartier slimmer" },
  { icon: <DoorstroomtoetsLogo size={15} />, text: "Doorstroomtoets oefenen (voorheen Cito-eindtoets)" },
  { icon: "📅", text: "15 minuten per dag is genoeg" },
  { icon: "🧠", text: "Een rustige bijlesdocent in je broekzak" },
  { icon: "📖", text: "Begrijpend lezen groep 5 t/m 8" },
  { icon: "✖️", text: "Tafels oefenen groep 3 t/m 6" },
  { icon: "📐", text: "Rekenen, taal, spelling" },
  { icon: "💬", text: "Uitleg op jouw niveau — bij elke vraag" },
  { icon: "🎒", text: "Groep 1 t/m 8" },
  { icon: "✨", text: "Snap je iets niet? Wij leggen het anders uit" },
];

function TickerBanner() {
  // Maand-1 snoei follow-up (2026-05-11): HoF-winners ("Leerkwartier van de
  // maand/jaar — Sahasra") en obliteratorItems ("OBLITERATOR-kampioen Brian")
  // uit ticker gehaald — game/scorebord-jargon past niet bij Cito-ouder-ICP.
  // awardItems (Doorzetter/Hardwerker) en shoutouts blijven: leerinspanning,
  // niet rangorde.
  const [awardItems, setAwardItems] = useState([]);
  const [shareItems, setShareItems] = useState([]);
  const [vriendenmakerItem, setVriendenmakerItem] = useState(null);
  // Algemene shoutouts voor élke speler die deze week actief was — niet alleen
  // de winnaars. Doel: iedereen voelt zich gezien op de homepage, vergroot de
  // kans dat ze de app delen ('hé, mijn naam staat erop, kijk!').
  const [shoutoutItems, setShoutoutItems] = useState([]);

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
    // Algemene shoutouts: voor élke speler die deze week >= 1 toets deed,
    // toon een persoonlijke ticker-regel. Sluit Mark zelf uit (meet 'm niet
    // omdat hij de bouwer is en eigen tests doet). Random rotatie van
    // berichten zodat het niet altijd hetzelfde voelt.
    const now = new Date();
    const startOfWeek = new Date(now);
    startOfWeek.setDate(now.getDate() - (now.getDay() === 0 ? 6 : now.getDay() - 1));
    startOfWeek.setHours(0, 0, 0, 0);
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    supabase.from("leaderboard")
      .select("player_name, subject, percentage, completed_at")
      .gte("completed_at", startOfWeek.toISOString())
      .lte("completed_at", endOfWeek.toISOString())
      .then(({ data }) => {
        if (!data?.length) return;
        // Groepeer per speler, sluit Mark + lege namen uit
        const stats = {};
        const skipNames = new Set(["mark", "mark smulders", "audit", "test", "tester", ""]);
        for (const e of data) {
          const n = (e.player_name || "").trim();
          if (!n || skipNames.has(n.toLowerCase())) continue;
          if (!stats[n]) stats[n] = { name: n, count: 0, subjects: new Set(), avgPct: 0, scores: [] };
          stats[n].count += 1;
          stats[n].subjects.add(e.subject);
          stats[n].scores.push(e.percentage || 0);
        }
        const players = Object.values(stats).map((p) => ({
          ...p,
          uniqueSubjects: p.subjects.size,
          avgPct: Math.round(p.scores.reduce((s, x) => s + x, 0) / p.scores.length),
        }));
        // Pak top 8 op aantal toetsen, varieer berichten per persoon
        const top = players.sort((a, b) => b.count - a.count).slice(0, 8);
        const items = top.map((p, i) => {
          const variants = [
            { icon: "🌟", text: `${p.name} is bezig — ${p.count} ${p.count === 1 ? "toets" : "toetsen"} deze week!` },
            { icon: "🚀", text: `${p.name} pakt ${p.uniqueSubjects} ${p.uniqueSubjects === 1 ? "vak" : "vakken"} aan deze week!` },
            { icon: "💫", text: `${p.name} scoort gemiddeld ${p.avgPct}% — knap!` },
            { icon: "🎯", text: `${p.name} oefent door — ${p.count} ${p.count === 1 ? "toets" : "toetsen"} gedaan!` },
            { icon: "👏", text: `Goed bezig ${p.name}! Al ${p.count} ${p.count === 1 ? "toets" : "toetsen"} gemaakt deze week.` },
          ];
          // Kies variant op basis van eigenschappen — gepersonaliseerd
          let variant;
          if (p.avgPct >= 80) variant = variants[2];
          else if (p.uniqueSubjects >= 3) variant = variants[1];
          else if (p.count >= 3) variant = variants[0];
          else variant = variants[i % variants.length];
          return { icon: variant.icon, text: variant.text, special: true };
        });
        setShoutoutItems(items);
      })
      .catch(() => {});
  }, []);

  // Filter shoutouts: namen die al als award-winnaar genoemd zijn slaan we
  // over om dubbele aandacht te voorkomen — die hebben al hun moment.
  const namesAlreadyMentioned = new Set();
  awardItems.forEach((a) => {
    const m = a.text.match(/(?:Knap!|Wauw!|Super!)\s+([^\s]+)/);
    if (m) namesAlreadyMentioned.add(m[1].trim().toLowerCase());
  });
  const filteredShoutouts = shoutoutItems.filter((s) => {
    const m = s.text.match(/^(?:[^a-zA-Z]+)?([A-Za-zÀ-ž][A-Za-zÀ-ž\-]*)/) || s.text.match(/Goed bezig\s+([^!]+)!/);
    if (!m) return true;
    return !namesAlreadyMentioned.has(m[1].trim().toLowerCase());
  });

  // Verspreid alle speciale items (awards + share-bedankjes + Vriendenmaker + shoutouts) tussen gewone items
  const allSpecial = [...awardItems, ...shareItems, ...(vriendenmakerItem ? [vriendenmakerItem] : []), ...filteredShoutouts];
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

// Maand 1 snoei (visie-bewaker 2026-05-10): onboarding-modal is uitgezet
// (showOnboarding default false). Examen/scorebord-jargon paste niet bij Cito-ouder ICP.
// Stappen behouden voor mogelijke toekomstige rondleiding-knop.
const ONBOARDING_STEPS = [
  { emoji: "📚", title: "Welkom bij Leerkwartier", desc: "Een rustige bijlesdocent in je broekzak. 15 minuten per dag, écht begrijpen wat je leert." },
];

export default function HomePage({ onSelectRole, onBack, userName, setUserName, setUserLevel, setUserSchoolType, pendingCode, authUser, onGoogleLogin, onLogout, onSaveProfile, onOnboardingStart, onOuderDashboard, onAdminFeedback, onPlayObliterator, onPro, onLearnPath, onLearnPathsHub, onMyMastery, onPickPath }) {
  const isAdmin = (authUser?.email || "").toLowerCase() === "mark-smulders@hotmail.com";
  const [name, setName] = useState(userName);
  const [shake, setShake] = useState(false);
  const [nameError, setNameError] = useState("");
  const [step, setStep] = useState(pendingCode ? "name" : "role");
  const [pendingRole, setPendingRole] = useState(pendingCode ? "leerling" : null);
  const [pendingFeature, setPendingFeature] = useState(null);
  const [level, setLevel] = useState("");
  const [schoolType, setSchoolType] = useState("");
  const [onboardingStep, setOnboardingStep] = useState(0);
  // Maand 1 snoei (visie-bewaker 2026-05-10): onboarding-modal UIT.
  // Welkom-video TERUG (Mark wens) — alleen 1× bij allereerste bezoek
  // via localStorage `lk_zag_intro_video`. Daarna nooit meer.
  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showWelcomeVideo, setShowWelcomeVideo] = useState(() => {
    try { return !localStorage.getItem("lk_zag_intro_video"); } catch { return false; }
  });
  // Mark wens 2026-05-11: standaard geluid AAN.
  // Browser kan autoplay-met-geluid blokkeren — dan vangen we via videoRef
  // de play()-rejection af en schakelen alsnog muted in.
  const [welcomeVideoMuted, setWelcomeVideoMuted] = useState(false);
  const welcomeVideoRef = useRef(null);
  useEffect(() => {
    if (!showWelcomeVideo || !welcomeVideoRef.current) return;
    const el = welcomeVideoRef.current;
    const tryPlay = el.play();
    if (tryPlay && typeof tryPlay.catch === "function") {
      tryPlay.catch(() => {
        // Autoplay-met-geluid geblokkeerd → fallback naar muted + retry.
        setWelcomeVideoMuted(true);
        setTimeout(() => { try { el.play(); } catch {} }, 50);
      });
    }
  }, [showWelcomeVideo]);
  const closeWelcomeVideo = () => {
    try { localStorage.setItem("lk_zag_intro_video", "1"); } catch {}
    try { track("welcome_video_closed"); } catch {}
    setShowWelcomeVideo(false);
  };
  // PWA-install via gedeelde hook (audit-2 v2 + Mark feedback 2026-05-08).
  const pwa = usePwaInstall();
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
      // Sprint-2 privacy-fix (G2a): bewaar OOK het path zodat admin signed URL
      // kan gebruiken zodra bucket privatified is. publicUrl blijft als fallback
      // voor backwards-compat met bestaande rijen.
      let screenshotUrl = null;
      let screenshotPath = null;
      if (feedbackImage) {
        const ext = (feedbackImage.name.split(".").pop() || "png").toLowerCase().slice(0, 5);
        const path = `${new Date().toISOString().slice(0, 10)}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
        const { error: upErr } = await supabase.storage.from("feedback-screenshots").upload(path, feedbackImage, { contentType: feedbackImage.type, upsert: false });
        if (upErr) throw upErr;
        screenshotPath = path;
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
        screenshot_path: screenshotPath,
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
  // isIOS / isStandalone komen nu uit de hook (`pwa.platform`, `pwa.standalone`).

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

  // Helper voor inline link-knoppen in hero-zin (Mark 2026-05-15): doorklikbare
  // 'Doorstroomtoets' / 'Cito-toetsen' / 'VMBO/HAVO/VWO-examens' spans die
  // visueel als link voelen (kleur + onderlijn-op-hover) maar buttons zijn.
  const linkSpanStyle = (kleur) => ({
    background: "transparent",
    border: "none",
    padding: 0,
    margin: 0,
    color: kleur,
    fontFamily: "inherit",
    fontSize: "inherit",
    fontWeight: 700,
    cursor: "pointer",
    textDecoration: "underline",
    textDecorationStyle: "dotted",
    textUnderlineOffset: 3,
    textDecorationColor: "rgba(255,255,255,0.35)",
  });

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

  const handleConfirm = (opts = {}) => {
    const asGuest = opts === true || opts?.asGuest === true;
    let effectiveName = name.trim() ||
      (authUser && (authUser.user_metadata?.full_name || authUser.user_metadata?.name || authUser.email?.split("@")[0])) ||
      "";
    // Guest-knop: nooit blokkeren op ontbrekende naam — gebruik "Speler" default.
    if (!effectiveName && asGuest) effectiveName = "Speler";
    if (!effectiveName) {
      setShake(true);
      setNameError("Vul eerst je naam in (of klik 'Doorgaan als gast').");
      setTimeout(() => setShake(false), 500);
      return;
    }
    setNameError("");
    if (!name.trim()) setName(effectiveName);
    setUserName(effectiveName);
    setUserLevel(level);
    setUserSchoolType?.(schoolType);
    try { localStorage.setItem("ls_user", JSON.stringify({ name: effectiveName, level, role: pendingRole, schoolType })); } catch {}
    try { onSaveProfile?.({ name: effectiveName, level, role: pendingRole, schoolType }); } catch {}
    track("name_entered", { name_length: effectiveName.length, level, role: pendingRole, school_type: schoolType || "", guest: asGuest });
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
      {showWelcomeVideo && (
        <div
          onClick={closeWelcomeVideo}
          style={{
            position: "fixed", inset: 0, zIndex: 10000,
            background: "rgba(0,0,0,0.92)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 16,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 480,
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 12px 60px rgba(0,0,0,0.7)",
              background: "#000",
            }}
          >
            <video
              ref={welcomeVideoRef}
              src="/reclame.mp4"
              autoPlay
              loop
              muted={welcomeVideoMuted}
              playsInline
              onClick={() => setWelcomeVideoMuted((m) => !m)}
              style={{ width: "100%", display: "block", cursor: "pointer" }}
            />
            <button
              onClick={closeWelcomeVideo}
              aria-label="Sluiten"
              style={{
                position: "absolute", top: 10, right: 10,
                width: 36, height: 36, borderRadius: "50%",
                border: "none", background: "rgba(0,0,0,0.7)",
                color: "#fff", fontSize: 18, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                lineHeight: 1,
              }}
            >
              ✕
            </button>
            <button
              onClick={() => setWelcomeVideoMuted((m) => !m)}
              aria-label={welcomeVideoMuted ? "Geluid aan" : "Geluid uit"}
              style={{
                position: "absolute", top: 10, left: 10,
                padding: "8px 14px", borderRadius: 999,
                border: "none", background: "rgba(0,0,0,0.7)",
                color: "#fff", fontSize: 13, fontWeight: 700, cursor: "pointer",
                fontFamily: "var(--font-display, sans-serif)",
              }}
            >
              {welcomeVideoMuted ? "🔇 Geluid aan" : "🔊 Geluid uit"}
            </button>
            <div style={{
              padding: "16px 20px 20px",
              background: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.85) 30%)",
              position: "absolute", left: 0, right: 0, bottom: 0,
              display: "flex", flexDirection: "column", alignItems: "center", gap: 10,
            }}>
              <button
                onClick={closeWelcomeVideo}
                style={{
                  padding: "13px 32px", borderRadius: 999,
                  border: "none",
                  background: "linear-gradient(135deg, #00C853, #00e676)",
                  color: "#fff", fontFamily: "var(--font-display, sans-serif)",
                  fontSize: 16, fontWeight: 800, cursor: "pointer",
                  boxShadow: "0 6px 20px rgba(0,200,83,0.45)",
                  letterSpacing: "0.01em",
                }}
              >
                Probeer gratis →
              </button>
            </div>
          </div>
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

        {/* Brand-mark linksboven (compact, 2-regels): pictogram + wordmark op regel 1,
            slogan op regel 2. Speelt 1× bij open en blijft in eindframe staan.
            Toonbaar voor iedereen — herkenning van de home-pagina. */}
        {(() => {
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
                fontSize: 12,
                fontWeight: 500,
                color: "rgba(255,255,255,0.80)",
                letterSpacing: "0.02em",
                marginLeft: 32,
                opacity: 0,
                fontStyle: "italic",
                animation: "lk-mark-slogan 0.7s ease-out 1.05s forwards",
              }}>
                {"„"}
                <strong style={{
                  fontWeight: 800,
                  color: "#69f0ae",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}>Één</strong>
                {" kwartier per dag — een "}
                <strong style={{
                  fontWeight: 800,
                  color: "#69f0ae",
                  fontStyle: "normal",
                  textTransform: "uppercase",
                  letterSpacing: "0.04em",
                }}>léven</strong>
                {" lang slimmer”"}
              </span>
            </div>
          );
        })()}

        {/* Hero-doelgroep-zin direct boven de tegels. Drie doorklikbare spans
            (Mark feedback 2026-05-15): Doorstroomtoets + Cito-toetsen → /cito,
            VMBO/HAVO/VWO-examens → /examens. Geen icoon (was 🎯 — weg). */}
        {step === "role" && (
          <div className="lk-content-wide" style={{
            textAlign: "center",
            marginBottom: 14,
            fontFamily: "var(--font-display)",
            fontSize: 14,
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: "0.01em",
            lineHeight: 1.5,
          }}>
            Voor de{" "}
            <button
              type="button"
              onClick={() => handleFeatureClick("cito")}
              style={linkSpanStyle("#69f0ae")}
            >Doorstroomtoets</button>
            ,{" "}
            <button
              type="button"
              onClick={() => handleFeatureClick("cito")}
              style={linkSpanStyle("rgba(255,255,255,0.95)")}
            >Cito-toetsen</button>
            {" "}en{" "}
            <button
              type="button"
              onClick={() => handleFeatureClick("examens")}
              style={linkSpanStyle("rgba(255,255,255,0.95)")}
            >VMBO/HAVO/VWO-examens</button>
          </div>
        )}

        {/* Hero — 4 even grote vierkante tegels in responsive grid: 3D-teaser
            als blikvanger en 3 rol-tegels (Leerling / Student / Leerkracht).
            Bewust géén "Leren" / "Test" tegels: die concurreerden met de rol-
            keuze en gaven first-time-users keuze-paralyse (audit 2026-05-06).
            Na rolkeuze verschijnen Leren + Test vanzelf in de bottom-nav. */}
        {step === "role" && (() => {
          const tiles = [
            // ⚠️ LOCKED-CONFIG: Cito-CTA onder Leerling-tegel (Mark akkoord
            // 2026-05-07). Rationale: bezorgde-Cito-ouder ICP — ouder die
            // specifiek voor Cito komt klikt direct naar /cito ipv via rol →
            // vakkenkeuze → cito. NIET aanpassen aan deze CTA-config zonder
            // Mark's expliciete vraag (label, kleur via gradient #ff6b35→#ff8c42,
            // onClick → handleFeatureClick("cito")).
            //
            // Iconen + copy upgrade 2026-05-07 (4-agents review, optie B):
            //   - Lucide line-icons ipv emoji's (OS-onafhankelijk, brand-consistent)
            //   - "Leerling" → "Basisschool" (parallel met "Student / vmbo · havo · vwo")
            //   - "groep 1–8" → "groep 1 t/m 8" (geen en-dash-ambiguïteit)
            //   - sub fontSize 10→11, opacity 0.55→0.7 (leesbaarheid)
            {
              key: "leerling",
              // Brand-foto (jongen + meisje met Leerkwartier-shirt) ipv line-icon —
              // Mark's wens 2026-05-07: "menselijke poot" voor de Basisschool-tegel.
              // Vervangen 2026-05-07 (avond): nieuwe brand-foto in klaslokaal-setting.
              // objectFit cover + center crop houdt gezichten + shirt-logo zichtbaar.
              icon: (
                <img
                  src="/model-leerling.png"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 22%",
                    borderRadius: 10,
                    display: "block",
                  }}
                />
              ),
              label: "Ik ben leerling", sub: "basisschool · groep 1 t/m 8",
              color: "#0072ff", onClick: () => handleRoleClick("leerling"),
              cta: {
                label: (
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
                    <DoorstroomtoetsLogo size={26} /> Doorstroomtoets oefenen
                  </span>
                ),
                onClick: () => handleFeatureClick("cito"),
              },
            },
            // Student-tegel met brand-foto (Mark akkoord 2026-05-07).
            // objectPosition "center 25%" houdt het gezicht + shirtlogo zichtbaar
            // in de vierkante tegel. Label/sub naar first-person op 2026-05-07
            // (avond) — parallel met Leerling/Leerkracht.
            {
              key: "student",
              icon: (
                <img
                  src="/model-student.jpg"
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 25%",
                    borderRadius: 10,
                    display: "block",
                  }}
                />
              ),
              label: "Ik ben student", sub: "vmbo · havo · vwo",
              color: "#7c3aed", onClick: () => handleRoleClick("student"),
              cta: { label: "🎓 Examen oefenen", onClick: () => handleFeatureClick("examens") },
            },
            // Maand 1 snoei (visie-bewaker 2026-05-10): leerkracht-tegel UIT hero.
            // Niet ICP. Code/route bestaat nog — link nu in footer-section onderaan.
            // Origineel object-blok behouden in git history voor toekomstige rollback.
          ];
          return (
            <>
              <div className="lk-hero-tiles">
                {/* Maand 1 snoei (visie-bewaker 2026-05-10): 3D-kubus teaser
                    UIT hero. Reden: flits-feature, geen direct begripsdoel.
                    Past niet bij identiteit "rustige bijlesdocent". 3D-modellen
                    blijven beschikbaar BINNEN wiskunde-leerpaden waar het
                    didactisch past (Ruimtemeetkunde stap 6 etc.) — alleen
                    geen marketing-teaser meer op homepage.
                    Mini3DTeaser-import + TeaserErrorBoundary blijven bestaan
                    voor in-pad gebruik. */}
                {/* 5 reguliere tegels. Tegels met `icon` (SVG) gebruiken een
                    layout waarbij de illustratie de bovenkant vult en de tekst
                    eronder zit; tegels met emoji houden de compacte centrale layout.
                    Tegels met `cta` worden gerenderd als <div> met embedded CTA-knop
                    onderaan (button-in-button is invalid HTML). */}
                {tiles.map(({ key, emoji, icon, label, sub, color, onClick, cta }) => {
                  const tileBackground = `${color}14`;
                  const tileBackgroundHover = `${color}28`;
                  // "Alle vakken →"-hint alleen bij tegels mét cta-knop (= rol-tegels).
                  // Zonder hint zien bezoekers de oranje cta als enige actie en
                  // klikken nooit op de foto/label-zone die juist naar het
                  // rol-overzicht (alle vakken) leidt. Mark UX-feedback 2026-05-13.
                  const innerContent = (
                    <>
                      {icon ? (
                        <div style={{
                          width: "100%",
                          flex: "1 1 0",
                          minHeight: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: 4,
                        }}>{icon}</div>
                      ) : (
                        <span style={{ fontSize: cta ? 26 : 30, lineHeight: 1 }}>{emoji}</span>
                      )}
                      <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color }}>{label}</div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.7)" }}>{sub}</div>
                    </>
                  );
                  if (cta) {
                    return (
                      <div
                        key={key}
                        onClick={onClick}
                        className="lk-tile"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
                        style={{
                          background: tileBackground,
                          border: `1.5px solid ${color}55`,
                          color: "#fff",
                          paddingBottom: 4, // ruimte voor cta-strip
                          justifyContent: "flex-start",
                          paddingTop: 12,
                          gap: 4,
                        }}
                        onMouseEnter={e => {
                          e.currentTarget.style.transform = "translateY(-2px)";
                          e.currentTarget.style.background = tileBackgroundHover;
                        }}
                        onMouseLeave={e => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.background = tileBackground;
                        }}
                      >
                        {innerContent}
                        {/* "Alle vakken →"-sub-button verwijderd (5-agents review 2026-05-15):
                            6 klikzones boven de fold = keuze-paralyse. Klik op de
                            tegel-foto zelf gaat al naar rol-overzicht (alle vakken);
                            oranje CTA blijft als directe Doorstroomtoets/Examen-shortcut. */}
                        <button
                          onClick={(e) => { e.stopPropagation(); cta.onClick(); }}
                          style={{
                            width: "100%",
                            // Vaste min-height + flex-center → CTA's altijd
                            // gelijke hoogte, ongeacht of inhoud een <img> van
                            // 26px (DoorstroomtoetsLogo) of een emoji is.
                            // Mark UX-feedback 2026-05-13.
                            minHeight: 34,
                            padding: "5px 6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 8,
                            border: "none",
                            background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                            color: "#fff",
                            fontFamily: "var(--font-display)",
                            fontSize: 11,
                            fontWeight: 700,
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            lineHeight: 1,
                          }}
                        >
                          {cta.label}
                        </button>
                      </div>
                    );
                  }
                  return (
                    <button
                      key={key}
                      onClick={onClick}
                      className="lk-tile"
                      style={{
                        background: tileBackground,
                        border: `1.5px solid ${color}55`,
                        color: "#fff",
                        ...(icon ? { justifyContent: "flex-start", paddingTop: 8 } : {}),
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-2px)";
                        e.currentTarget.style.background = tileBackgroundHover;
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.background = tileBackground;
                      }}
                    >
                      {innerContent}
                    </button>
                  );
                })}
              </div>
              {/* 5-agents review 2026-05-15: "Nieuw hier?"-link, "Voor ouders"-knop,
                  EchteCijfers (verplaatst naar boven tegels) en TickerBanner weg.
                  Zes elementen tussen tegels en de fold-vouw verdunden de focus
                  en concurreerden met de rol-tegel-CTR. Privacy + uitleg blijven
                  toegankelijk via footer-links onderaan. */}
            </>
          );
        })()}

        {/* 5-agents review 2026-05-15: launch-promo bar + install-knop weg uit
            first-visit-flow. Reden: concurreerden met rol-tegel-CTR. PWA-best
            practice = install-prompt pas tonen ná eerste sessie (niet bij eerste
            bezoek). Install-prompt + launch-promo blijven beschikbaar via andere
            triggers (bv. /abonnement-pagina, settings, na X sessies). */}

        {/* (verplaatst naar boven de hero — Prio 2 uit competitor-research) */}

        {/* 'Mijn voortgang'-knop verwijderd 2026-05-15 op Mark's verzoek.
            Voortgang blijft toegankelijk via bottom-nav (Voortgang-tab in
            StudentHome) — homepage hoeft 'm niet apart te tonen. */}

        {/* Rol-tegels (Leerling / Student / Leerkracht) zijn voor nieuwe
            bezoekers IN de 6-tegel hero. Voor returning users tonen we ze
            niet — die hebben al een rol gekozen, anders gerichte navigatie
            via Daily-Challenge → Leren/Oefenen → Mijn voortgang. */}

        {/* FeatureShowcase verwijderd — die kaarten horen onder Oefenen-tab,
            niet op de homepage. Hero-tegels zijn al de toegangspoort. */}

        {/* (Install-knop verplaatst naar de promo-rij hierboven; valt 25%
            naast de promo-banner of vult de hele rij als de promo niet
            zichtbaar is voor returning users.) */}

        {showInstallHelp && (() => {
          const ins = pwa.getManualInstructions();
          return (
            <div onClick={() => setShowInstallHelp(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.75)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
              <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: 380, width: "100%", background: "#162033", border: "1px solid rgba(0,212,255,0.3)", borderRadius: 18, padding: 22, color: "var(--color-text)", fontFamily: "var(--font-body)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, color: "#00d4ff", marginBottom: 10 }}>📲 {BRAND.name} installeren</div>
                <p style={{ fontSize: 14, lineHeight: 1.45, margin: "0 0 10px", color: "var(--color-text-muted)" }}>{ins.title}</p>
                <ol style={{ fontSize: 14, lineHeight: 1.6, paddingLeft: 20, margin: "0 0 12px" }}>
                  {ins.steps.map((s, i) => <li key={i} style={{ marginBottom: 4 }}>{s}</li>)}
                </ol>
                <p style={{ fontSize: 12, color: "var(--color-text-muted)", margin: "0 0 14px" }}>
                  Daarna kun je {BRAND.name} openen als een echte app, ook offline. Browser detected: <strong style={{ color: "#00d4ff" }}>{pwa.browser}</strong> op <strong style={{ color: "#00d4ff" }}>{pwa.platform}</strong>.
                </p>
                <div style={{ display: "flex", gap: 10 }}>
                  {pwa.canPromptNatively && (
                    <button
                      onClick={async () => {
                        await pwa.promptInstall();
                        setShowInstallHelp(false);
                      }}
                      style={{ flex: 2, padding: 10, border: "none", borderRadius: 10, background: "linear-gradient(135deg,#00c853,#69f0ae)", color: "#0a1525", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
                    >
                      🚀 Nu installeren
                    </button>
                  )}
                  <button
                    onClick={() => setShowInstallHelp(false)}
                    style={{ flex: 1, padding: 10, border: pwa.canPromptNatively ? "1px solid rgba(255,255,255,0.20)" : "none", borderRadius: 10, background: pwa.canPromptNatively ? "transparent" : "#00d4ff", color: pwa.canPromptNatively ? "var(--color-text)" : "#0a1525", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
                  >
                    {pwa.canPromptNatively ? "Sluit" : "Oké, duidelijk"}
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {step === "name" && (
          <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
            {pendingCode ? (
              <div style={{
                background: "rgba(0,200,83,0.15)", borderRadius: 16,
                padding: "12px 16px", textAlign: "center",
                border: "1px solid rgba(0,200,83,0.3)",
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "#00e676" }}>🎯 Toets gevonden!</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#aabbcc", marginTop: 4 }}>Vul je naam in en de toets start meteen</div>
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
                style={{
                  ...styles.textInput,
                  border: nameError ? "1.5px solid #ff5252" : undefined,
                }}
                value={name}
                autoFocus
                onChange={(e) => { setName(e.target.value); if (nameError) setNameError(""); }}
                placeholder="Vul je naam in..."
                onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
              />
              {nameError && (
                <div style={{ marginTop: 6, fontSize: 12, color: "#ff5252", fontFamily: "var(--font-body)" }}>
                  {nameError}
                </div>
              )}
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
                <button onClick={() => handleConfirm({ asGuest: true })} style={{
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
                const text = `Ken je ${BRAND.shortName} al?\n\nSamen slim worden met leuke vragen! Oefenen voor school was nog nooit zo leuk.\n\n👉 Bekijk de intro: https://${BRAND.domain}/welkom.html`;
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
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://${BRAND.domain}/welkom.html`)}`, "_blank");
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
            {/* Maand 1 snoei (visie-bewaker 2026-05-10): leerkracht-link verplaatst
                van hero-tegel naar footer. Niet ICP, maar route blijft bereikbaar. */}
            <button
              type="button"
              style={{ background: "none", border: "none", color: "#00897b", cursor: "pointer", padding: "4px 6px", display: "inline-flex", alignItems: "center", gap: 5 }}
              onClick={() => handleRoleClick("teacher")}
            >
              <span>👩‍🏫</span>
              Voor leerkrachten
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

        {/* Footer-blokje verwijderd 2026-05-15 — App.jsx heeft al een globale
            <footer> onderaan met "Over Leerkwartier · Privacybeleid · © Smulsoft".
            HomePage rendert die dus niet meer apart om dubbeling te voorkomen. */}
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

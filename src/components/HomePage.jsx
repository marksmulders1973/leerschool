import { useState, useEffect, useRef, lazy, Suspense, Component } from "react";
import { Presentation } from "lucide-react";
import styles from "../styles.js";
import { LEVELS, SUBJECTS, isLaunchPromoActive, LAUNCH_PROMO_SHORT, LAUNCH_PROMO_LONG } from "../constants.js";
import QuizCardIcon from "../shared/ui/QuizCardIcon.jsx";
import VoorleesBlok from "../shared/ui/VoorleesBlok.jsx";
import PartnerWelkom from "./PartnerWelkom.jsx";
import CodeBalk from "./CodeBalk.jsx";
import DoorstroomtoetsLogo from "./DoorstroomtoetsLogo.jsx";
import { BRAND } from "../brand.js";
import supabase from "../supabase.js";
import { track } from "../utils.js";
import { OUDER_QUOTES } from "../data/ouderQuotes.js";
import { AvatarSvg, loadAvatarConfig } from "../features/account/avatar.jsx";
import usePwaInstall from "../shared/usePwaInstall.js";
import useFocusTrap from "../shared/hooks/useFocusTrap.js";
import EmailLogin from "../auth/EmailLogin.jsx";

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

// Maand 1 snoei (visie-bewaker 2026-05-10): ticker rustig + Toets-vriendelijk.
// Verwijderd: "scorebord — strijd om de top" (faalangst-trigger), "eerst leren
// dan spelen" (game-suggestie), "leerkrachten" (niet ICP), VMBO-jargon (niet
// primaire doelgroep). Behouden + uitgebreid: 15-min belofte, Cito, rustig
// leren, rekenen/taal-onderwerpen die Toets-ouder herkent.
const TICKER_ITEMS = [
  { icon: "⏱", text: "Elk kwartier slimmer" },
  { icon: <DoorstroomtoetsLogo size={15} />, text: "Oefenen voor de eindtoets (groep 6-8)" },
  { icon: "📅", text: "15 minuten per dag is genoeg" },
  { icon: "🧠", text: "Een rustige bijlesdocent in je broekzak" },
  { icon: "📖", text: "Begrijpend lezen groep 5 t/m 8" },
  { icon: "✖️", text: "Tafels oefenen groep 3 t/m 6" },
  { icon: "📐", text: "Rekenen, taal, spelling" },
  { icon: "💬", text: "Uitleg op jouw niveau — bij elke vraag" },
  { icon: "🎒", text: "Groep 3 t/m 8" },
  { icon: "✨", text: "Snap je iets niet? Wij leggen het anders uit" },
];


// Maand 1 snoei (visie-bewaker 2026-05-10): onboarding-modal is uitgezet
// (showOnboarding default false). Examen/scorebord-jargon paste niet bij Toets-ouder ICP.
// Stappen behouden voor mogelijke toekomstige rondleiding-knop.
const ONBOARDING_STEPS = [
  { emoji: "📚", title: "Welkom bij Leerkwartier", desc: "Een rustige bijlesdocent in je broekzak. 15 minuten per dag leren, een leven lang slimmer." },
];

// Probeer-meteen-een-vraag-kaart op de home (Mark 2026-06-14, voorstel 3 uit
// dagrapport, aangepast: de welkomstvideo was al weg sinds 10-6). Nieuwe bezoeker
// ervaart direct een Doorstroomtoets-vraag i.p.v. eerst een keuzescherm; na het
// antwoord een nudge de gratis-trechter in. Rol/niveau + leeftijdscheck blijven
// gewoon bestaan (gebeuren bij Start gratis / account).
// (De gele Deel-actie-knop "nog X van 50 plekken" stond hier tot 6 sep 2026 — Mark: "dat kan ook wel weg".)

export default function HomePage({ onSelectRole, onBack, userName, setUserName, setUserLevel, setUserSchoolType, pendingCode, authUser, onGoogleLogin, onLogout, onSaveProfile, onOnboardingStart, onOuderDashboard, onAdminFeedback, onAdminStats, onActie, onOefenpakket, onPrinten, onKwartiercheck, onDagvraag, onPlayObliterator, onPro, onFamilie, onLearnPath, onLearnPathsHub, onMyMastery, onPickPath, onSearchPaths, onMijnPagina, onKlas, onNieuwkomers }) {
  // Idee AR (23 sep 2026): klasgolf-schakelaar. Ziet de server ≥15 nieuwe apparaten
  // binnen 10 minuten op een schooldag (RPC klasgolf_actief), dan toont home het
  // volgende uur bovenaan de klas-strook → /klas. Geen nieuwe voordeur; het blokje
  // verschijnt als er een klas is en verdwijnt daarna vanzelf.
  const [klasgolf, setKlasgolf] = useState(false);
  useEffect(() => {
    let stop = false;
    const check = async () => {
      try {
        const { data } = await supabase.rpc("klasgolf_actief");
        if (!stop && data && typeof data === "object") { setKlasgolf(!!data.actief); if (data.actief) track("klasgolf_strook_getoond", { max_blok: data.max_blok }); }
      } catch { /* stil */ }
    };
    check();
    const t = setInterval(check, 5 * 60 * 1000);
    return () => { stop = true; clearInterval(t); };
  }, []);
  const isAdmin = (authUser?.email || "").toLowerCase() === "hallo@leerkwartier.app";
  const [name, setName] = useState(userName);
  const [visitorCount, setVisitorCount] = useState(null);
  // (Park-tokens-haak in de voet weg 30 sep 2026 — zie de voet-links onderaan.)
  const [shake, setShake] = useState(false);
  const [nameError, setNameError] = useState("");
  const [homeSearch, setHomeSearch] = useState("");
  // Rol al bekend op dit apparaat? (naam in de app óf naam+rol in ls_user) →
  // dan geen "Ik ben: leerling · student · …"-regel meer (home-herschikking 30 sep 2026).
  const [opgeslagenRol] = useState(() => {
    try { const d = JSON.parse(localStorage.getItem("ls_user") || "{}"); return d.name && d.role ? d.role : null; } catch { return null; }
  });
  const rolBekend = !!(userName || "").trim() || !!opgeslagenRol;
  const rolLinkStijl = {
    background: "none", border: "none", padding: "2px 3px", cursor: "pointer",
    fontFamily: "inherit", fontSize: "inherit", color: "rgba(255,255,255,0.85)",
    textDecoration: "underline", textUnderlineOffset: 3, textDecorationColor: "rgba(255,255,255,0.35)",
  };
  const [step, setStep] = useState(pendingCode ? "name" : "role");
  const [pendingRole, setPendingRole] = useState(pendingCode ? "leerling" : null);
  const [pendingFeature, setPendingFeature] = useState(null);
  const [level, setLevel] = useState("");
  const [levelSkipped, setLevelSkipped] = useState(false);
  const [schoolType, setSchoolType] = useState("");
  const [onboardingStep, setOnboardingStep] = useState(0);
  // Maand 1 snoei (visie-bewaker 2026-05-10): onboarding-modal UIT.
  // Intro-video definitief verwijderd 2026-06-10 (Mark-besluit).
  const [showOnboarding, setShowOnboarding] = useState(false);
  // Intro-video verwijderd 2026-06-10 — zie comment bij de voormalige modal.
  // Terugkerende bezoeker? Sla de rolkeuze-muur over en ga direct verder waar je
  // was — alléén bij de EERSTE home-load van deze sessie (de Home-tab blijft
  // daarna gewoon de homepage tonen). Dicht de grootste funnel-lek uit de
  // 8-juni-audit: ~3/4 van wie de welkomstvideo sluit, koos anders geen rol.
  useEffect(() => {
    try {
      if (pendingCode) return; // PvP-uitnodiging heeft eigen flow
      if (sessionStorage.getItem("lk_home_autoskip")) return;
      sessionStorage.setItem("lk_home_autoskip", "1");
      const saved = JSON.parse(localStorage.getItem("ls_user") || "{}");
      if (saved && saved.name && saved.role) {
        setUserName(saved.name);
        if (saved.level) setUserLevel(saved.level);
        if (saved.schoolType) setUserSchoolType?.(saved.schoolType);
        track("home_autoskip_returning", { role: saved.role });
        onSelectRole(saved.role);
      }
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  // B5.3 (7-bots-review a11y): focus-trap + Escape sluit de tip-modal.
  const feedbackTrapRef = useFocusTrap(showFeedback, { onEsc: sluitFeedback });
  const verstuurFeedback = async () => {
    const tekst = feedbackText.trim();
    if (tekst.length < 15) { setFeedbackError("Schrijf even iets meer (minimaal 15 tekens)."); return; }
    if (feedbackQuotaReached()) { setFeedbackError("Je hebt vandaag al 3 berichten gestuurd. Probeer morgen weer."); return; }
    setFeedbackBusy(true); setFeedbackError("");
    try {
      // Privacy (G2a): bucket is privé — alleen het path opslaan; admin haalt
      // er een signed URL bij op. Geen publicUrl meer (werkt toch niet op een
      // privébucket en hoort niet in de tabel).
      let screenshotPath = null;
      if (feedbackImage) {
        const ext = (feedbackImage.name.split(".").pop() || "png").toLowerCase().slice(0, 5);
        const path = `${new Date().toISOString().slice(0, 10)}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
        const { error: upErr } = await supabase.storage.from("feedback-screenshots").upload(path, feedbackImage, { contentType: feedbackImage.type, upsert: false });
        if (upErr) throw upErr;
        screenshotPath = path;
      }
      const { error } = await supabase.from("feedback").insert({
        message: tekst.slice(0, 2000),
        player_name: (name || userName || "").trim().slice(0, 60) || null,
        user_id: authUser?.id || null,
        page_url: typeof window !== "undefined" ? window.location.href.slice(0, 500) : null,
        user_agent: typeof navigator !== "undefined" ? (navigator.userAgent || "").slice(0, 300) : null,
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

  // Compacte icoon-knop-stijl voor de deel/volg-rij (Mark 11 aug 2026:
  // "home moet rust uitstralen" — geen grote knoppen met tekstlabels meer).
  const socialIconStyle = {
    width: 32, height: 32, borderRadius: "50%", padding: 0,
    background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.14)",
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    cursor: "pointer", textDecoration: "none", flexShrink: 0,
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

  // Eerlijke bezoekersteller (sociale bewijskracht): echt basisgetal +
  // live nieuwe unieke bezoekers via de anonieme events-log. Geen verzonnen getal.
  useEffect(() => {
    supabase.rpc("get_visitor_count")
      .then(({ data }) => { if (typeof data === "number") setVisitorCount(data); })
      .catch(() => {});
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

  // Lead-magnet CTA (Mark 2026-06-07): de /oefenpakket-pagina had geen enkele
  // ingang vanaf de homepage — 302 home-bezoekers zagen 'm niet. We zetten een
  // bron-vlag zodat we in upgrade_waitlist.source zien dat de lead via de
  // homepage-CTA kwam (i.p.v. social-bio/direct).
  const handlePrintenClick = () => {
    try { sessionStorage.setItem("lk_lead_src", "home_cta"); } catch {}
    track("home_cta_printen");
    if (onPrinten) { onPrinten(); return; }
    onOefenpakket?.();
  };
  const handleOefenpakketClick = () => {
    try { sessionStorage.setItem("lk_lead_src", "home_cta"); } catch {}
    track("home_cta_oefenpakket");
    onOefenpakket?.();
  };

  // Helper voor inline link-knoppen in hero-zin (Mark 2026-05-15): doorklikbare
  // 'Doorstroomtoets' / 'Doorstroomtoetsen' / 'VMBO/HAVO/VWO-examens' spans die
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
    // Mark feedback 2026-05-20: 'direct naar examens'-knop stuurde naar
    // Doorstroomtoets/Cito. Oorzaak: role default "leerling" → ExamensPage
    // redirect-of-leeg. Fix: examens = student-rol (VMBO/HAVO/VWO).
    const role = featureId === "leerkrachten" ? "teacher"
               : featureId === "examens" ? "student"
               : "leerling";
    setPendingFeature(featureId);
    // Terugkerende gebruiker: naam al opgeslagen → direct doorgaan
    try {
      const saved = JSON.parse(localStorage.getItem("ls_user") || "{}");
      if (saved.name) {
        setUserName(saved.name);
        if (saved.level) setUserLevel(saved.level);
        if (saved.schoolType) setUserSchoolType?.(saved.schoolType);
        // Feature-specifieke role overschrijft opgeslagen role (examens =
        // altijd student, leerkrachten = altijd teacher), anders behoud.
        const effectiveRole = (featureId === "examens" || featureId === "leerkrachten")
          ? role
          : (saved.role || role);
        onSelectRole(effectiveRole, featureId);
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
      // Bug 4d (UX-review): naam-veld krijgt rode rand + inline foutmelding;
      // tekst aangepast zodat de hint óók klopt als er geen 'gast'-knop is
      // (bv. wanneer user via Google ingelogd is en Doorgaan → klikt).
      setNameError("Vul even je naam in");
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
    onSelectRole(pendingRole, pendingFeature, { nieuw: true });
  };

  return (
    <div style={{ ...styles.page, background: "linear-gradient(160deg, #1a2a4a 0%, #1e3458 50%, #243e6a 100%)" }}>
      {/* Vraag-van-de-dag leeft op /vandaag (Mark 11 aug: home rustig);
          ProefVraagKaart-dode-code opgeruimd 12 aug (agent-restpunt). */}
      {klasgolf && onKlas && (
        <button type="button" onClick={() => { track("klasgolf_strook_klik"); onKlas(); }} style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 10, width: "calc(100% - 24px)", margin: "10px 12px 0",
          padding: "12px 14px", borderRadius: 14, border: "2px solid #ffd700", cursor: "pointer",
          background: "linear-gradient(135deg, rgba(255,215,0,0.18), rgba(255,170,0,0.10))", color: "#fff",
          fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 800, textAlign: "left",
        }}>
          <span style={{ fontSize: 24 }}>🏫</span>
          <span>Zit je in de klas? Start hier<br /><span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, fontWeight: 600, opacity: .85 }}>5 vragen · geen account · samen op het digibord</span></span>
        </button>
      )}
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
      {/* Intro-video verwijderd 2026-06-10 (Mark: "als de intro video niet
          goed is mag het weg") — review wees autoplay-met-geluid aan als grootste
          afhaak-risico voor nieuwe mobiele bezoekers; de nieuwe hero draagt de
          boodschap. Bestand public/ blijft staan voor evt. hergebruik op /over. */}
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

        {/* Partner-welkom (idee #22): QR-scanners van flyers zien meteen dat
            ze goed zitten — mét ouder-voorrang. Boven de hero, want dit is
            hét vertrouwensmoment van papier → telefoon. */}
        {step === "role" && (
          <PartnerWelkom
            onOuder={onOuderDashboard}
            // Mark 7 sep 2026 (QR-lek: 21 flyer-sessies, 0 kwartier): ná de
            // proef-vraagjes niet naar de losse dagvraag, maar de gewone
            // leerling-route in — naam + groep → start-kwartier (nieuw) of
            // eigen pagina (terugkerend). De code blijft gewoon actief.
            onOefenen={handleOefenenClick}
          />
        )}

        {/* ─── RUSTIGE KOP (Mark 30 sep 2026: "home schreeuwt, ~7 voordeuren
            naar oefenen"). Nieuwe volgorde op het eerste scherm (390px):
            1. logo + naam + één slogan + korte intro (voorleesbaar)
            2. code-regel (één gedempte regel, klapt open — flyers rekenen erop)
            3. zoekbalk (van onderaan naar boven verplaatst)
            4. ÉÉN primaire knop: Mijn pagina (terug: "welkom terug", nieuw:
               "begin je eerste kwartier" → /mijn heeft een lege staat met startknop)
            5. rol-regel als tekstlinks, alleen zolang de rol onbekend is.
            Weg: "Start gratis met oefenen", de twee foto-rol-tegels + examen-CTA,
            "Meer dan een toets"-banner, "Dit vind je allemaal"-tegels, ouder-kaart. */}
        {step === "role" && (
          <div style={{
            alignSelf: "center", textAlign: "center", width: "100%", maxWidth: 560,
            margin: "0 auto 4px", padding: "0 12px", boxSizing: "border-box",
          }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 4 }}>
              <svg viewBox="0 0 100 100" style={{
                width: 36, height: 36, flexShrink: 0, opacity: 0,
                transformOrigin: "50% 50%",
                animation: "lk-mark-circle 0.9s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s forwards",
              }} aria-hidden="true">
                <path d="M50,8 A42,42 0 0,1 92,50 L50,50 Z" fill="#00C853" />
              </svg>
              <h1 style={{
                margin: 0,
                fontFamily: "var(--font-display, -apple-system, sans-serif)",
                fontSize: 30, fontWeight: 800, color: "#fff",
                letterSpacing: "-0.01em", opacity: 0,
                animation: "lk-mark-word 0.7s ease-out 0.55s forwards",
              }}>
                {BRAND.name}
              </h1>
            </div>
            <div style={{
              fontFamily: "var(--font-display)", fontSize: 15.5, fontWeight: 700,
              color: "#ffd54f", marginBottom: 6, opacity: 0,
              animation: "lk-mark-slogan 0.7s ease-out 0.9s forwards",
            }}>
              {BRAND.slogan}
            </div>
            {/* Voorlees-oortje (Mark 25 jul): ook de ouder die moeite heeft met
                lezen moet de belofte kunnen hóren. Leest nu alleen slogan + intro. */}
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.5,
              color: "rgba(255,255,255,0.8)", marginBottom: 6,
            }}>
              {/* Alleen het oortje; de uitleg staat lager bij "Wat is Leerkwartier?" (Mark 30 sep: logo, slogan, code, zoekbalk, Mijn pagina). */}
              <VoorleesBlok tekst={`${BRAND.slogan}. Gratis oefenen voor de Doorstroomtoets en de VMBO-examens, met uitleg op drie niveaus. Vul een code in, zoek wat je wilt oefenen, of ga naar Mijn pagina.`} accent="#ffd54f" />
            </div>
          </div>
        )}

        {/* 🎟️ Code-balk (Mark 27 aug): de handmatige code-ingang — afspraak met
            Den Haag — blijft op home. Sinds 30 sep als één rustige regel (`rustig`);
            ná invullen blijft de dikke "code actief"-bevestiging. */}
        {step === "role" && <CodeBalk rustig />}

        {/* Zoekbalk — bovenaan (30 sep): "wat wil je oefenen?" is dé vraag;
            groep-zoekopdrachten ("groep 6") vinden nu ook paden op groep-bereik
            (LearnPathsHub) + de losse pagina's (snelkoppelingen). */}
        {step === "role" && (
          <div className="lk-content-wide" style={{ margin: "6px auto 0", maxWidth: 560 }}>
            <div style={{
              display: "flex", gap: 8, alignItems: "center",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: 999, padding: "6px 6px 6px 16px",
            }}>
              <span aria-hidden="true" style={{ fontSize: 16, opacity: 0.7 }}>🔍</span>
              <input
                type="search"
                value={homeSearch}
                onChange={(e) => setHomeSearch(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") { const q = homeSearch.trim(); if (q.length >= 2) { track("home_zoek", { q: q.slice(0, 40) }); onSearchPaths?.(q); } } }}
                placeholder="Wat wil je oefenen? bv. breuken, werkwoorden, groep 6"
                aria-label="Zoek een onderwerp"
                style={{
                  flex: 1, minWidth: 0, border: "none", outline: "none",
                  background: "transparent", color: "#fff",
                  fontFamily: "var(--font-body)", fontSize: 14,
                }}
              />
              <button
                onClick={() => { const q = homeSearch.trim(); if (q.length >= 2) { track("home_zoek", { q: q.slice(0, 40) }); onSearchPaths?.(q); } }}
                aria-label="Zoeken"
                style={{
                  flexShrink: 0, cursor: "pointer", border: "none", borderRadius: 999,
                  background: "rgba(255,255,255,0.12)", color: "#fff",
                  fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14,
                  padding: "9px 16px",
                }}
              >
                Zoek
              </button>
            </div>
          </div>
        )}

        {/* ÉÉN primaire knop (30 sep): Mijn pagina. Terugkerend = welkom terug
            (Mark 11 aug: "zet mijn persoonlijke pagina zichtbaar op de home");
            nieuw = eerste kwartier — /mijn toont dan de lege staat met startknop
            (v648). Alleen als onMijnPagina ontbreekt: de oude oefen-route. */}
        {step === "role" && (() => {
          const naam = (userName || "").trim();
          const ga = () => {
            track(naam ? "home_cta_mijn_pagina" : "home_cta_eerste_kwartier");
            if (onMijnPagina) onMijnPagina(); else handleOefenenClick();
          };
          return (
            <button
              onClick={ga}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
                width: "100%", maxWidth: 560, margin: `12px auto ${rolBekend ? 22 : 8}px`,
                padding: "14px 18px", borderRadius: 999, border: "none", cursor: "pointer",
                background: "linear-gradient(135deg, #ffd54f, #ffb300)", color: "#1a1a00",
                fontFamily: "var(--font-display)", fontSize: 16.5, fontWeight: 800, lineHeight: 1.25,
                boxShadow: "0 6px 24px rgba(255,213,79,0.35)", textAlign: "center",
              }}
            >
              {naam ? (
                <>
                  <AvatarSvg config={loadAvatarConfig(userName)} size={30} />
                  <span>Welkom terug, {naam} — jouw kwartier staat klaar →</span>
                </>
              ) : (
                <span>Mijn pagina — begin je eerste kwartier →</span>
              )}
            </button>
          );
        })()}

        {/* Kwartiercheck als smalle regel onder Mijn pagina (Mark 1 okt 2026: startpagina rustig;
            de kaart bracht ~6 van de 10 checks binnen, dus wel blijven, maar klein). */}
        {step === "role" && onKwartiercheck && (
          <div style={{ textAlign: "center", margin: "-4px auto 18px", maxWidth: 560 }}>
            <button type="button" onClick={() => { track("home_cta_kwartiercheck"); onKwartiercheck(); }}
              style={{ background: "none", border: "none", cursor: "pointer", color: "#ff8c42", fontFamily: "var(--font-display)", fontSize: 14.5, fontWeight: 800, textDecoration: "underline", textUnderlineOffset: 3 }}>
              🧭 Gratis Kwartiercheck: waar staat je kind? →
            </button>
          </div>
        )}

        {/* Rol-regel als tekstlinks (30 sep): de oude foto-tegels + ouder-kaart +
            footer-leerkracht-knop, nu één gedempte regel. Alleen zolang de rol
            onbekend is (geen naam op dit apparaat / geen opgeslagen rol). */}
        {step === "role" && !rolBekend && (
          <div style={{
            fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.9, whiteSpace: "nowrap", overflowX: "auto",
            color: "rgba(255,255,255,0.55)", textAlign: "center",
            margin: "0 auto 22px", maxWidth: 560, padding: "0 12px",
          }}>
            Ik ben:{" "}
            <button type="button" style={rolLinkStijl} onClick={() => { track("home_rol_link", { rol: "leerling" }); handleRoleClick("leerling"); }}>leerling</button>
            <span aria-hidden="true"> · </span>
            <button type="button" style={rolLinkStijl} onClick={() => { track("home_rol_link", { rol: "student" }); handleRoleClick("student"); }}>student</button>
            {onOuderDashboard && (
              <>
                <span aria-hidden="true"> · </span>
                <button type="button" style={rolLinkStijl} onClick={() => { track("home_cta_ouder"); onOuderDashboard(); }}>ouder of verzorger</button>
              </>
            )}
            <span aria-hidden="true"> · </span>
            <button type="button" style={rolLinkStijl} onClick={() => { track("home_rol_link", { rol: "leerkracht" }); handleFeatureClick("leerkrachten"); }}>leerkracht</button>
          </div>
        )}

        {/* 📸 De twee kinderen (Mark 30 sep 2026: "die kinderfoto's zijn een beetje de identiteit van de app
            geworden") — terug als rustig beeld, niet als schreeuwende knop. Tikken kiest nog wel de rol. */}
        {step === "role" && (
          <div className="lk-content-wide" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, maxWidth: 520, margin: "0 auto 22px" }}>
            {[["leerling", "/model-leerling.png", "Leerling", "basisschool · groep 3 t/m 8"], ["student", "/model-student.jpg", "Student", "vmbo · havo · vwo"]].map(([rol, src, kop, sub]) => (
              <button key={rol} type="button" onClick={() => { track("home_rol_foto", { rol }); handleRoleClick(rol); }} aria-label={`Ik ben ${kop.toLowerCase()} — ${sub}`}
                style={{ padding: 0, border: "1px solid rgba(255,255,255,0.14)", borderRadius: 18, overflow: "hidden", background: "rgba(255,255,255,0.05)", cursor: "pointer", textAlign: "left", fontFamily: "inherit", color: "inherit" }}>
                <img src={src} alt="" loading="lazy" style={{ display: "block", width: "100%", aspectRatio: "4 / 3", objectFit: "cover" }} />
                <div style={{ padding: "8px 10px 10px" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 14, color: "#ffd54f" }}>{kop}</div>
                  <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>{sub}</div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Wat is Leerkwartier — het ouder-/SEO-verhaal, ná het eerste scherm. */}
        {step === "role" && (
          <div className="lk-content-wide" style={{ margin: "0 auto 18px", maxWidth: 520, textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 800, color: "rgba(255,255,255,0.92)", marginBottom: 6 }}>
              Wat is {BRAND.name}?
            </div>
            <p style={{ margin: 0, fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "rgba(255,255,255,0.82)" }}>
              Gratis oefenen voor de <strong style={{ color: "#fff" }}>Doorstroomtoets (groep 6-8)</strong> en de{" "}
              <strong style={{ color: "#fff" }}>VMBO-examens</strong>. Snapt je kind iets niet? Dan leggen we het uit op drie niveaus, tot je kind het écht snapt. Een kwartier per dag is genoeg.
            </p>
            <div style={{
              fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.7,
              color: "rgba(255,255,255,0.72)", marginTop: 10,
            }}>
              ✓ Geen account nodig &nbsp;·&nbsp; ✓ De basis blijft gratis, gegarandeerd t/m 2031 &nbsp;·&nbsp; ✓ Geen abonnement — niks op te zeggen
            </div>
          </div>
        )}

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
                {/* Rol-foto ipv oud Studiebol-bol-logo (Mark 2026-05-18 rebrand
                    Leerkwartier). Foto matcht de gekozen rol — continuïteit
                    met de hero-tegels die dezelfde brand-foto's gebruiken. */}
                <img
                  src={
                    pendingRole === "leerling" ? "/model-leerling.png"
                    : pendingRole === "student" ? "/model-student.jpg"
                    : pendingRole === "teacher" ? "/model-leerkracht.jpg"
                    : "/logo-doorstroomtoets.png"
                  }
                  alt=""
                  style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover", objectPosition: "center 22%" }}
                />
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

            {levelOptions[pendingRole]?.length > 0 && !levelSkipped && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <label style={{ ...styles.inputLabel, marginBottom: 0 }}>
                    {pendingRole === "leerling" ? "Welke groep zit je in?" : "Welke klas zit je in?"}
                  </label>
                  {/* Mark UX 2026-05-18: "sla over" deed setLevel("") wat geen
                      visueel effect had (level was al ""). Nu klapt de sectie
                      écht weg via levelSkipped-state. Knop "terug" verschijnt
                      hieronder zodat de keuze niet permanent verloren is. */}
                  <button onClick={() => { setLevel(""); setLevelSkipped(true); }} style={{
                    background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)",
                    borderRadius: 8, padding: "4px 10px",
                    color: "rgba(255,255,255,0.85)", fontSize: 12, cursor: "pointer",
                    fontFamily: "var(--font-body)",
                  }}>sla over →</button>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {/* Mark 13 aug: verkeerd gekozen of nieuw schooljaar? De groep
                      is voortaan altijd aan te passen op 🏠 Mijn pagina. */}
                  {levelOptions[pendingRole].map(n => (
                    <button key={n} onClick={() => setLevel(String(n))} style={{
                      // B5.5 (7-bots-review a11y): 38px was te klein als tap-target.
                      width: "var(--tap-target-min, 44px)", height: "var(--tap-target-min, 44px)", borderRadius: 10,
                      border: level === String(n) ? "2px solid #00d4ff" : "1px solid rgba(255,255,255,0.15)",
                      background: level === String(n) ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.05)",
                      color: level === String(n) ? "#00d4ff" : "rgba(255,255,255,0.6)",
                      fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                      cursor: "pointer",
                    }}>{n}</button>
                  ))}
                </div>
                <div style={{ fontSize: 11.5, color: "rgba(255,255,255,0.55)" }}>
                  Later aanpassen kan altijd op je eigen pagina.
                </div>
              </div>
            )}
            {levelOptions[pendingRole]?.length > 0 && levelSkipped && (
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "8px 12px",
                background: "rgba(255,255,255,0.04)",
                border: "1px dashed rgba(255,255,255,0.18)",
                borderRadius: 8,
                fontSize: 12, color: "rgba(255,255,255,0.55)",
              }}>
                <span>{pendingRole === "leerling" ? "Groep" : "Klas"} overgeslagen</span>
                <button onClick={() => setLevelSkipped(false)} style={{
                  background: "none", border: "none", cursor: "pointer",
                  color: "#00d4ff", fontSize: 12, fontFamily: "var(--font-body)",
                  textDecoration: "underline",
                }}>← terug</button>
              </div>
            )}

            {pendingRole === "student" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <label style={{ ...styles.inputLabel, marginBottom: 0 }}>Welk type onderwijs volg je?</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[
                    { id: "mavo",     label: "VMBO-TL",   color: "#f59e0b" },
                    { id: "havo",     label: "HAVO",      color: "#3b82f6" },
                    { id: "havo-vwo", label: "HAVO/VWO",  color: "#6366f1" },
                    { id: "vwo",      label: "VWO",       color: "#8b5cf6" },
                    { id: "gym",      label: "Gymnasium", color: "#ec4899" },
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

            {authUser && !authUser.is_anonymous ? (
              <>
                {/* F11 (2 sep 2026): de stille anonieme sessie telde als "ingelogd" — verse bezoeker zag "✓ Ingelogd / Uitloggen" naast "geen account nodig". */}
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
                {/* Inloggen met e-mail (magic link, 30 sep 2026): alleen voor
                    leerkrachten — kinderen (leerling/student) gaan als gast of via
                    Google; ouders/verzorgers krijgen dezelfde form op /ouder.
                    Vóór het versturen ls_user vullen zodat useAuth na de
                    terugkeer rol + naam op het profiel zet. */}
                {pendingRole === "teacher" && (
                  <EmailLogin
                    terug="/leerkracht"
                    compact
                    onVerstuurd={() => {
                      try {
                        const effectiveName = name.trim();
                        if (effectiveName) localStorage.setItem("ls_user", JSON.stringify({ name: effectiveName, level, role: pendingRole, schoolType }));
                      } catch { /* niet fataal */ }
                    }}
                  />
                )}
              </>
            )}
          </div>
        )}


        {/* Ouder-kaart ("Ik ben ouder of verzorger — zo help je thuis") weg
            30 sep 2026: zit nu als tekstlink in de rol-regel bovenaan. */}

        {/* Kwartiercheck-kaart (Fable-review 28 jul, restpunt 1): de check was
            alleen via directe URL vindbaar — grootste conversielek van de
            lead-magnet. Ouder-actie, direct onder "Wat is Leerkwartier". */}

        {/* Vraag-van-de-dag-kaart VAN HOME GEHAALD (Mark 11 aug 20:36: "de home
            wordt onoverzichtelijk; vraag van de dag alleen nog voor de socials").
            De dagvraag leeft door op /vandaag (bio-links + posts, via DeepVraag
            in App.jsx) — alleen de homepage-kaart is weg. */}

        {/* Zoekbalk verplaatst naar ONDER het oefenpakket (Robert-tip 18 jun:
            rustiger eerste scherm). Stond hier direct onder de hero en concurreerde
            met de hoofd-CTA + de "doe één vraag"-kaart. */}

        {/* Onderkant startpagina herschikt (Mark 4 okt 2026: "logischer, nu zijn de
            verhoudingen scheef en gaan ruimtes onbenut"): eerst de nieuwkomer-ingang
            (een kind-actie), dan de eigen cijfers in drie gelijke kolommen, dan drie
            gelijke tegels, dan delen/volgen in twee gelabelde rijen. */}
        {step === "role" && onNieuwkomers && (
          <div className="lk-content-wide" style={{ margin: "0 auto 14px", maxWidth: 520 }}>
            <button
              type="button"
              onClick={() => { track("home_nieuwkomer_knop"); onNieuwkomers(); }}
              style={{
                width: "100%", display: "flex", alignItems: "center", gap: 14,
                padding: "14px 16px", borderRadius: 16, cursor: "pointer", textAlign: "left",
                background: "linear-gradient(135deg, rgba(0,212,255,0.16), rgba(0,200,83,0.12))",
                border: "1.5px solid rgba(0,212,255,0.45)", color: "#fff",
                fontFamily: "var(--font-body)",
              }}
            >
              <span aria-hidden="true" style={{ fontSize: 30, lineHeight: 1 }}>🌍</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span style={{ display: "block", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18 }}>Ik ben nieuwkomer</span>
                <span style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,0.72)", marginTop: 2 }}>Nederlands leren, met voorlezen en hulp in zes talen</span>
              </span>
              <span aria-hidden="true" style={{ fontSize: 20, color: "#00d4ff" }}>→</span>
            </button>
          </div>
        )}

        {/* Eigen-bewijs-strip (verbeterplan 2026-06-10, S7): eigen cijfers + maker-
            verhaal i.p.v. klacht-quotes over concurrenten. 4 okt 2026: drie gelijke
            kolommen (getal boven, woord eronder) — wikkelde eerst 2+1 met gaten. */}
        {step === "role" && (
          <div className="lk-content-wide" style={{
            margin: "0 auto 18px", maxWidth: 520,
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.14)", borderRadius: 16,
            padding: "14px 12px", textAlign: "center",
          }}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 6,
              fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.8)",
              marginBottom: 10, lineHeight: 1.25,
            }}>
              <div><strong style={{ display: "block", color: "#ffd54f", fontSize: 20 }}>500+</strong>bezoekers per maand</div>
              <div><strong style={{ display: "block", color: "#ffd54f", fontSize: 20 }}>7.000+</strong>oefenvragen</div>
              <div><strong style={{ display: "block", color: "#ffd54f", fontSize: 20 }}>48</strong>echte examens</div>
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>
              Gebouwd door één vader met een kind in het examenjaar — geen marketingmachine,
              wél uitleg die werkt.
            </div>
          </div>
        )}

        {/* 💬 Echte-quotes-strip (Mark 4 aug 2026, sociaal-bewijs-plan): rendert
            pas zodra er quotes MET schriftelijke toestemming in
            src/data/ouderQuotes.js staan. Nooit verzonnen quotes — een
            onzichtbare sectie is beter dan een nep-quote. */}
        {/* Partner-uitspraken — klein (Mark 30 sep 2026: "kunnen weg of kleiner"); alleen de organisatie. */}
        {/* Quotes van organisaties staan sinds 1 okt 2026 op voor-organisaties.html (daar beslist een partner);
            de startpagina blijft rustig. Ouder-quotes horen later bij het Familie-pakket (abonnement.html). */}
        {false && step === "role" && OUDER_QUOTES.length > 0 && (
          <div className="lk-content-wide" style={{ margin: "0 auto 18px", maxWidth: 520, fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.5, color: "rgba(255,255,255,0.62)" }}>
            {OUDER_QUOTES.slice(0, 3).map((q, i) => (
              <div key={i} style={{ marginBottom: 6 }}>
                <span style={{ fontStyle: "italic" }}>“{q.tekst}”</span>{" "}
                <span style={{ color: "#ffd54f", fontWeight: 700 }}>— {q.rol || q.naam}</span>
              </div>
            ))}
          </div>
        )}

        {/* "Dit vind je allemaal bij Leerkwartier"-tegels (oefenen/printen/dictee)
            + de zoekbalk-onderaan zijn 30 sep 2026 weg: de zoekbalk staat nu
            bovenaan en vindt dictee/printen/werkwoorden via de snelkoppelingen. */}

        {/* USP-demo (2026-06-04): toont de 3-niveau-uitleg LIVE op de entree —
            show-don't-tell. Alleen op het eerste scherm (rolkeuze), zodat een
            nieuwe ouder binnen 30 sec ziet waarom dit beter is dan YouTube/ChatGPT.
            Zelfstandig, geen backend, geen extra navigatie-knop. */}
        {/* "Zo werkt Leerkwartier"-blok stond hier frontaal — Mark 2026-06-05:
            te overdreven bovenaan. Verplaatst naar onderaan (boven de deel-rij). */}

        {/* Hero-doelgroep-zin verwijderd 2026-05-20 (Mark): tegels + CTA-balken
            verwijzen zelf al naar Doorstroomtoets/Cito + examens — een extra
            tekst-balk maakt 3-4 ingangen naar hetzelfde, verwarrend. */}

        {/* "Zo werkt Leerkwartier" (UspDemo) verwijderd van de home (Mark 2026-06-14):
            de proefvraag bovenaan laat het al zien; component bewaard in UspDemo.jsx. */}

        {/* Tegels + delen/volgen (4 okt 2026 herschikt). Voorheen één rij "Deel of volg
            ons" met 7 rondjes waarin WhatsApp en Facebook dubbel leken; nu twee
            gelabelde rijen: delen (stuurt een link door) en volgen (onze kanalen). */}
        {step === "role" && (
          <div className="lk-content-wide" style={{
            margin: "0 auto", maxWidth: 520,
            display: "flex", flexDirection: "column", alignItems: "stretch", gap: 18,
            fontFamily: "var(--font-body)", fontSize: 12,
          }}>
            <style>{`
              .lk-voet-tegel { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px;
                min-height: 64px; padding: 10px 6px; border-radius: 14px; cursor: pointer; text-decoration: none;
                background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.14);
                color: rgba(255,255,255,0.9); font-family: var(--font-body); font-size: 13px; font-weight: 600; line-height: 1.2; text-align: center; }
              .lk-voet-tegel:hover { background: rgba(255,255,255,0.09); }
              .lk-voet-icoon { font-size: 20px; line-height: 1; }
              .lk-voet-rij { display: flex; flex-direction: column; align-items: center; gap: 6px; }
              .lk-voet-rij > div { display: flex; justify-content: center; flex-wrap: wrap; gap: 8px; }
              .lk-voet-kop { color: rgba(255,255,255,0.55); font-size: 12px; }
            `}</style>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8 }}>
            <button
              type="button"
              className="lk-voet-tegel"
              onClick={() => handleFeatureClick("leerkrachten")}
            >
              <span aria-hidden="true" className="lk-voet-icoon">👩‍🏫</span>
              Voor leerkrachten
            </button>
            {/* Prijs-ingang op de home (Mark 31 jul): eerlijk + vindbaar dat de
                basis gratis is en wat de optionele extra's kosten. Opent ProPage. */}
            {onPro && (
              <button
                type="button"
                className="lk-voet-tegel"
                onClick={() => { track("home_cta_prijzen"); onPro(); }}
              >
                <span aria-hidden="true" className="lk-voet-icoon">💶</span>
                Wat kost het?
              </button>
            )}
            {/* "Familie-extra's (bèta)" + "Mijn Park / Ga naar je park" weg uit de
                voet (30 sep 2026, rust): bereikbaar via Mijn pagina, de balk
                (Spelletje) en de zoekbalk (snelkoppelingen "park", "familie"). */}
            {/* Bedank-pagina (Mark 16 jul 2026): organisaties die gezinnen op
                Leerkwartier wijzen — eerste vermelding (VB Rotterdam) live,
                dus nu vindbaar vanaf de home. Statische pagina → gewone <a>. */}
            <a
              href="/bedankt.html"
              className="lk-voet-tegel"
            >
              <span aria-hidden="true" className="lk-voet-icoon">🤝</span>
              Zij helpen mee
            </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div className="lk-voet-rij">
              <span className="lk-voet-kop">Deel met een ander</span>
              <div>
            <button
              type="button"
              aria-label="Deel via WhatsApp"
              title="Deel via WhatsApp"
              style={socialIconStyle}
              onClick={() => {
                const text = `Ken je ${BRAND.shortName} al?\n\nSamen slim worden met leuke vragen! Oefenen voor school was nog nooit zo leuk.\n\n👉 Bekijk de intro: https://${BRAND.domain}/welkom.html`;
                window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
                trackShare("whatsapp");
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </button>
            <button
              type="button"
              aria-label="Deel via Facebook"
              title="Deel via Facebook"
              style={socialIconStyle}
              onClick={() => {
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://${BRAND.domain}/welkom.html`)}`, "_blank");
                trackShare("facebook");
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
              </div>
            </div>
            <div className="lk-voet-rij">
              <span className="lk-voet-kop">Volg ons</span>
              <div>
            <a
              href="https://www.facebook.com/leerkwartier"
              target="_blank" rel="noopener noreferrer"
              aria-label="Onze Facebook"
              title="Onze Facebook"
              style={socialIconStyle}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a
              href="https://www.instagram.com/leerkwartier"
              target="_blank" rel="noopener noreferrer"
              aria-label="Onze Instagram"
              title="Onze Instagram"
              style={socialIconStyle}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#E1306C"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a
              href="https://www.threads.com/@leerkwartier"
              target="_blank" rel="noopener noreferrer"
              aria-label="Onze Threads"
              title="Onze Threads"
              style={socialIconStyle}
            >
              <svg width="14" height="14" viewBox="0 0 192 192" fill="#ffffff"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.7766 140.011C80.8242 144.663 89.9044 146.938 99.3409 146.423C111.79 145.74 121.563 140.987 128.391 132.296C133.579 125.696 136.859 117.143 138.301 106.366C144.221 109.939 148.607 114.639 151.031 120.291C155.151 129.896 155.391 145.681 142.503 158.557C131.213 169.835 117.644 174.713 97.1 174.864C74.3164 174.694 57.0834 167.4 45.8055 153.213C35.2452 139.933 29.7841 120.762 29.5789 96C29.7841 71.2375 35.2452 52.0669 45.8055 38.7866C57.0834 24.5997 74.316 17.3059 97.0996 17.1357C120.049 17.3072 137.582 24.6928 149.171 38.9577C154.852 45.9501 159.143 54.7536 161.973 65.0162L177.527 60.8678C174.146 48.2398 168.804 37.3447 161.514 28.3097C146.65 9.89569 124.831 0.443556 96.9216 0.319336H96.8064C68.9519 0.443556 47.3666 9.93162 32.6433 28.5407C19.5384 45.0995 12.7806 68.1322 12.5099 96.9554L12.5098 96.9558L12.5099 97.0561C12.7806 125.879 19.5384 148.913 32.6433 165.472C47.3666 184.081 68.9519 193.569 96.8064 193.693H96.9216C121.671 193.583 139.111 187.094 153.482 172.685C172.295 153.838 171.713 130.124 165.531 115.475C161.093 105.018 152.585 96.5288 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/></svg>
            </a>
            {/* LinkedIn (29 jul): verwijst naar de BEDRIJFSPAGINA — ouders en
                organisaties komen bij het merk uit, niet bij Mark's profiel. */}
            <a
              href="https://www.linkedin.com/company/leerkwartier"
              target="_blank" rel="noopener noreferrer"
              aria-label="Onze LinkedIn"
              title="Onze LinkedIn"
              style={socialIconStyle}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a
              href="https://whatsapp.com/channel/0029VbDLUD1KGGG8InddOM3q"
              target="_blank" rel="noopener noreferrer"
              aria-label="Ons WhatsApp-kanaal"
              title="Ons WhatsApp-kanaal"
              style={socialIconStyle}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#25D366"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.043 1.45.886zm9.882-5.747c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
            </a>
              </div>
            </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 14 }}>
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
            {isAdmin && onAdminStats && (
              <button
                type="button"
                style={{ background: "none", border: "none", color: "var(--color-brand-primary-100)", cursor: "pointer", padding: "4px 6px", display: "inline-flex", alignItems: "center", gap: 5 }}
                onClick={onAdminStats}
              >
                <span>📊</span>
                Statistieken (admin)
              </button>
            )}
            </div>
          </div>
        )}

        {showFeedback && (
          <div
            ref={feedbackTrapRef}
            role="dialog"
            aria-modal="true"
            aria-label="Tip aan de maker"
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
                <button onClick={sluitFeedback} aria-label="Sluiten" style={{ background: "none", border: "none", color: "rgba(255,255,255,0.5)", fontSize: 22, cursor: "pointer" }}>×</button>
              </div>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12, marginBottom: 10, lineHeight: 1.4 }}>
                Heb je een idee, een fout gevonden of werkt iets niet? Schrijf het hier — we lezen alle tips zelf.
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
            <footer> onderaan met "Over Leerkwartier · Privacybeleid · © Leerkwartier".
            HomePage rendert die dus niet meer apart om dubbeling te voorkomen. */}
      </div>

      <style>{`
        input, select, textarea { color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; }
        input::placeholder { color: #667788 !important; -webkit-text-fill-color: #667788 !important; }
        /* Uitzondering (27 aug): het code-invulveld staat op een LICHTE balk —
           zonder deze regel typte je wit-op-wit (Mark zag z'n code niet). */
        input.lk-codebalk-input { color: #1a2233 !important; -webkit-text-fill-color: #1a2233 !important; background: #ffffff !important; }
        input.lk-codebalk-input::placeholder { color: #9aa5b1 !important; -webkit-text-fill-color: #9aa5b1 !important; }
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

import { useState, useEffect, useMemo } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS } from "../constants.js";
import { SoundEngine, daysUntil, formatDate } from "../utils.js";
import { loadDueTopics } from "../features/mastery/mastery.js";
import pathManifest from "../learnPaths/pathManifest.generated.json";
// QW7 lazy-load STAP 2: ALL_LEARN_PATHS-import is verwijderd; alle metadata
// komt nu uit pathManifest.generated.json (~130 kB ipv 5,8 MB).
const pathManifestById = Object.fromEntries(pathManifest.map(p => [p.id, p]));
import Header from "./Header.jsx";
import KindAcceptBanner from "./KindAcceptBanner.jsx";
import DoorstroomtoetsLogo from "./DoorstroomtoetsLogo.jsx";
import { loadResume, clearResume } from "../features/learn/KwartierPauze.jsx";
import { getDailyGoal, percentDone as dailyPercent, minutesDone as dailyMinutesDone, minutesLeft as dailyMinutesLeft, markCelebrated, getDayStreak } from "../shared/dailyGoal.js";

// Vakken-set per modus (audit 2 M2 — Mark's screenshot 2):
// 8 PO-vakken (groep 1-8) en ~10 VO-vakken (klas 1-6) als eerste landing
// voor het kind. Subject-id verwijst naar SUBJECTS in constants.js.
const VAKKEN_PO = [
  { id: "rekenen" },
  { id: "taal" },
  { id: "spelling" },
  { id: "begrijpend-lezen" },
  { id: "natuur", labelOverride: "Wereld & Natuur" },
  { id: "engels" },
  { id: "geschiedenis" },
  { id: "aardrijkskunde" },
];

// PO-vakken die op Cito-eindtoets / doorstroomtoets voorkomen — krijgen
// een derde knop "Cito oefenen" naast Leren + Oefenen. Mark UX-keuze
// 2026-05-08: cirkel-rond per onderdeel + ICP-prominentie.
const CITO_VAKKEN_PO = new Set(["rekenen", "taal", "spelling", "begrijpend-lezen", "natuur"]);

// Vak-id → Cito-pijler voor sampleCitoMix subjectFilter.
// Spelling/begrijpend-lezen zitten in pijler "taal", natuur in
// "studievaardigheden" (zie shared/citoMixVragen.js).
const VAK_TO_CITO_PIJLER = {
  "rekenen": "rekenen",
  "taal": "taal",
  "spelling": "taal",
  "begrijpend-lezen": "taal",
  "natuur": "studievaardigheden",
};
const VAKKEN_VO = [
  { id: "wiskunde" },
  { id: "nederlands" },
  { id: "engels" },
  { id: "aardrijkskunde" },
  { id: "geschiedenis" },
  { id: "biologie" },
  { id: "natuurkunde" },
  { id: "scheikunde" },
  { id: "economie" },
  { id: "frans" },
];

export default function StudentHome({ userName, userLevel, userSchoolType, quizzes, progress, sessionMin = 0, kwartierTarget = 15, onJoinQuiz, onSelfStudy, onBack, onHome, onViewProgress, onLeaderboard, onTextbook, onHerhaalQuiz, onPickPathsForSubject, pendingCode, streak, onViewResult, onDeleteResult, entryContext, onCitoOefenenSubject, onExamens, onResumeLearnPath }) {
  // PO/VO-toggle: default afgeleid van userSchoolType (mavo/havo/vwo/gym = VO),
  // anders PO. Gebruiker kan handmatig switchen.
  // Detecteer of de leerling al een niveau heeft gekozen — dan is de
  // PO/VO-toggle dubbel werk en verbergen we 'm. Ouders met meerdere
  // kinderen kunnen via Instellingen alsnog wisselen.
  const isVoLevel = (lvl) => /^(klas|vmbo|mavo|havo|vwo)/.test(String(lvl || "").toLowerCase());
  const isPoLevel = (lvl) => /^groep/.test(String(lvl || "").toLowerCase());
  const niveauVastgelegd = !!(userSchoolType || isVoLevel(userLevel) || isPoLevel(userLevel));
  const initieleVakModus = userSchoolType || isVoLevel(userLevel) ? "vo" : "po";
  const [vakModus, setVakModus] = useState(initieleVakModus);
  const vakkenLijst = vakModus === "vo" ? VAKKEN_VO : VAKKEN_PO;
  // Tel paden per subject voor het juiste niveau.
  // PO = level start met "groep".
  // VO = level start met "klas", "vmbo", "havo", "vwo" of "mavo" — zo vallen
  // paden als "vmbo-gt-4" (Pincode-hoofdstukken) en "havo4-5" ook in de
  // VO-telling, niet alleen "klas3-havo4"-stijl labels.
  // QW7 lazy-load STAP 2 (2026-05-14): tellen via pathManifest.generated.json
  // (~130 kB) ipv ALL_LEARN_PATHS-import (~5,8 MB). Output identiek.
  const padenPerVak = useMemo(() => {
    const isPo = vakModus === "po";
    const isVoLevel = (lvl) => /^(klas|vmbo|mavo|havo|vwo)/.test(lvl);
    const counts = {};
    for (const p of pathManifest) {
      if (!p?.subject) continue;
      const lvl = (p.level || "").toLowerCase();
      const matches = isPo ? lvl.startsWith("groep") : isVoLevel(lvl);
      if (!matches) continue;
      counts[p.subject] = (counts[p.subject] || 0) + 1;
    }
    return counts;
  }, [vakModus]);
  // Daily-goal-tick: dwingt re-render elke 30s zodat de leerkwartier-banner
  // zijn voortgangs-balk en minuten-teller bijwerkt zonder reload.
  const [, setDailyTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setDailyTick((n) => n + 1), 30_000);
    return () => clearInterval(id);
  }, []);

  // Due-onderwerpen voor de mixed-herhaal-quiz (P3a deel 2). Laden in
  // achtergrond — als 0 toont de card niet, en de Self-Study + Boek + Voortgang
  // + Scorebord-grid neemt de hele bovenste rij in.
  const [dueCount, setDueCount] = useState(0);
  useEffect(() => {
    let cancelled = false;
    if (!userName) return;
    loadDueTopics(userName)
      .then(list => { if (!cancelled) setDueCount(Array.isArray(list) ? list.length : 0); })
      .catch(() => {});
    return () => { cancelled = true; };
  }, [userName]);
  const [code, setCode] = useState(pendingCode || "");
  const [error, setError] = useState("");
  const [showCode, setShowCode] = useState(!!pendingCode);

  // Kwartier-pauze resume: bij mount lezen of gebruiker is gestopt na 15 min.
  const [kwartierResume, setKwartierResume] = useState(() => loadResume(userName));
  useEffect(() => { setKwartierResume(loadResume(userName)); }, [userName]);

  // Als er een pendingCode is, direct joinen
  useEffect(() => {
    if (pendingCode) {
      const quiz = quizzes.find((q) => q.code.toUpperCase() === pendingCode.toUpperCase());
      if (quiz) { onJoinQuiz(pendingCode); }
    }
  }, [pendingCode, quizzes]);

  const handleJoin = async () => {
    if (code.trim().length < 3) { setError("Vul een geldige code in"); return; }
    const upper = code.trim().toUpperCase();
    const local = quizzes.find((q) => q.code.toUpperCase() === upper);
    if (local?.deadline && new Date(local.deadline) < new Date()) {
      setError(`Deze toets is verlopen op ${new Date(local.deadline).toLocaleDateString("nl-NL")} 📅`);
      return;
    }
    setError("");
    const result = await onJoinQuiz(upper);
    if (result === "not_found") setError("Toets niet gevonden 😕");
  };

  const recentProgress = progress.slice(-5).reverse();
  // A8 (10-agent circulariteit-review 2026-05-10): laatste activiteit voor "verder waar je was"-card.
  const lastActivity = recentProgress[0] || null;
  // A10: examen-trainer alleen voor VMBO-mavo klas 4 (Mark's primaire dochter-use-case).
  const isVmboGt4 = userSchoolType === "mavo" && String(userLevel || "") === "4";
  // A11-snoei (visie-bewaker maand 1): srDueCount banner verwijderd.
  // Bestaande topic-niveau dueCount + DailyChallengeBanner-flow heeft al
  // echte quiz-trigger (onHerhaalQuiz). Twee banners = verwarring (STOPLIST §5).
  // spacedRepetition.js store BLIJFT achter de schermen — toekomst-ready.

  // A12 (10-agent circulariteit-review 2026-05-10): web push opt-in.
  // permState: "unsupported" | "default" | "granted" | "denied"
  // hasSub: of er actieve subscription is.
  const [pushPerm, setPushPerm] = useState("default");
  const [hasPushSub, setHasPushSub] = useState(false);
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { getPermissionState, hasActiveSubscription } = await import("../shared/pushSubscription.js");
        if (!cancelled) {
          setPushPerm(getPermissionState());
          setHasPushSub(await hasActiveSubscription());
        }
      } catch {}
    })();
    return () => { cancelled = true; };
  }, []);
  const handleEnablePush = async () => {
    try {
      const { enablePush } = await import("../shared/pushSubscription.js");
      const r = await enablePush({ playerName: userName });
      if (r.ok) {
        setPushPerm("granted");
        setHasPushSub(true);
      } else if (r.reason === "no-vapid-key") {
        alert("Herinneringen zijn nog niet ingesteld door de beheerder. Probeer later opnieuw.");
      } else if (r.reason === "denied") {
        setPushPerm("denied");
        alert("Geen toestemming gegeven. Je kunt dit later wijzigen via je browser-instellingen.");
      }
    } catch {}
  };
  const handleDisablePush = async () => {
    try {
      const { disablePush } = await import("../shared/pushSubscription.js");
      await disablePush({ playerName: userName });
      setHasPushSub(false);
    } catch {}
  };

  // Streak protection: check if today has been played
  const streakWarning = (() => {
    if (!streak || streak <= 0) return null;
    try {
      const s = JSON.parse(localStorage.getItem("ls_streak") || '{"streak":0,"last":""}');
      const today = new Date().toISOString().split("T")[0];
      if (s.last !== today) return streak;
    } catch {}
    return null;
  })();

  // Weakest subject: min 2 attempts, lowest average percentage
  const weakestSubject = (() => {
    if (!progress || progress.length === 0) return null;
    const bySubject = {};
    progress.forEach((p) => {
      if (!bySubject[p.subject]) bySubject[p.subject] = [];
      bySubject[p.subject].push(p.percentage);
    });
    let weakId = null, weakAvg = Infinity;
    Object.entries(bySubject).forEach(([id, percs]) => {
      if (percs.length < 2) return;
      const avg = Math.round(percs.reduce((a, b) => a + b, 0) / percs.length);
      if (avg < weakAvg) { weakAvg = avg; weakId = id; }
    });
    if (!weakId) return null;
    const subj = SUBJECTS.find(s => s.id === weakId);
    return subj ? { ...subj, avg: weakAvg } : null;
  })();

  const schoolTypeLabel = { mavo: "VMBO-TL", havo: "HAVO", vwo: "VWO", gym: "Gymnasium" }[userSchoolType] || "";
  // Fallback hier expliciet hex (niet de token) want elders worden
  // template-suffixen gebruikt zoals `${schoolTypeColor}18` voor opacity —
  // CSS-variables ondersteunen dat niet.
  const schoolTypeColor = { mavo: "#f59e0b", havo: "#3b82f6", vwo: "#8b5cf6", gym: "#ec4899" }[userSchoolType] || "#3B82F6";
  // PO (basisschool) gebruikt "Groep", VO (met schoolType) gebruikt "Klas".
  const niveauWoord = schoolTypeLabel ? "Klas" : "Groep";
  const profileBadge = userLevel && schoolTypeLabel
    ? `Klas ${userLevel} · ${schoolTypeLabel}`
    : userLevel
    ? `${niveauWoord} ${userLevel}`
    : schoolTypeLabel || null;

  return (
    <div style={styles.page}>
      <Header title={`Hoi ${userName}`} subtitle="Welk kwartier wordt het vandaag?" onBack={onBack} onHome={onHome} />

      <div style={styles.content}>
        <KindAcceptBanner userName={userName} />

        {/* Daily-goal-banner (Mark's "leerkwartier" hard maken, 2026-05-16).
            Toont voortgangs-balk naar 15-min/dag-doel. Bij voltooiing felicitatie. */}
        {(() => {
          const goal = getDailyGoal();
          const pct = dailyPercent(goal);
          const minDone = dailyMinutesDone(goal);
          const minLeft = dailyMinutesLeft(goal);
          const completed = goal.completed;
          const streak = getDayStreak();
          const containerStyle = {
            marginBottom: 12,
            padding: "10px 14px",
            background: completed
              ? "linear-gradient(135deg, rgba(0,200,83,0.15), rgba(0,200,83,0.04))"
              : "linear-gradient(135deg, rgba(255,213,79,0.10), rgba(255,213,79,0.04))",
            border: `1px solid ${completed ? "rgba(0,200,83,0.45)" : "rgba(255,213,79,0.35)"}`,
            borderRadius: 12,
            color: "var(--color-text)",
          };
          return (
            <div style={containerStyle} aria-label="Dagelijkse leerkwartier-voortgang">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, marginBottom: 6 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: completed ? "#00e676" : "#ffd54f" }}>
                  {completed ? "🎉 Leerkwartier behaald!" : "🕒 Jouw leerkwartier vandaag"}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {streak.current >= 1 && (
                    <span
                      title={streak.best > streak.current ? `Beste streak ooit: ${streak.best} dagen` : ""}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 3,
                        padding: "2px 8px", borderRadius: 999,
                        background: "rgba(255,138,0,0.18)",
                        border: "1px solid rgba(255,138,0,0.45)",
                        color: "#ffa040", fontSize: 11, fontWeight: 800,
                        fontFamily: "var(--font-display)",
                      }}
                    >
                      🔥 {streak.current}
                      {streak.current === 1 ? " dag" : " dagen"}
                    </span>
                  )}
                  <span style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>
                    {minDone} / {Math.round((goal.target || 900) / 60)} min
                  </span>
                </span>
              </div>
              <div style={{ height: 6, borderRadius: 999, background: "rgba(255,255,255,0.08)", overflow: "hidden" }}>
                <div style={{
                  width: `${pct}%`,
                  height: "100%",
                  background: completed ? "linear-gradient(90deg, #00c853, #00e676)" : "linear-gradient(90deg, #ffd54f, #ffaa00)",
                  transition: "width 600ms ease",
                }} />
              </div>
              <div style={{ marginTop: 6, fontSize: 11, lineHeight: 1.4, color: "rgba(255,255,255,0.65)" }}>
                {completed
                  ? "Mooi gedaan — je kunt nu rustig stoppen. Doorgaan mag, maar hoeft niet."
                  : minLeft > 0
                  ? `Nog ${minLeft} ${minLeft === 1 ? "minuut" : "minuten"} tot je dagelijkse leerkwartier.`
                  : "Bijna klaar — nog even doorzetten."}
              </div>
              {/* QW-B (4-agent-audit 2026-05-18): bij 0 min toon een directe
                  CTA zodat een nieuwe gebruiker niet hoeft te zoeken naar
                  een vak. Vouwt vakken-grid open via window scroll. */}
              {minDone === 0 && !completed && (
                <button
                  onClick={() => {
                    const grid = document.querySelector('.vakken-grid');
                    if (grid) grid.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  style={{
                    marginTop: 8,
                    width: "100%",
                    padding: "8px 14px",
                    background: "linear-gradient(135deg, #ff6b35, #ff8c42)",
                    border: "none",
                    borderRadius: 8,
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: 13, fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  ▶ Start je leerkwartier
                </button>
              )}
            </div>
          );
        })()}
        {profileBadge && (
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            background: `${schoolTypeColor}18`,
            border: `1px solid ${schoolTypeColor}55`,
            borderRadius: 20, padding: "5px 14px",
            marginBottom: 8, alignSelf: "flex-start",
          }}>
            <span style={{ fontSize: 14 }}>🎓</span>
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: schoolTypeColor }}>
              {profileBadge}
            </span>
          </div>
        )}

        {/* Kwartier-pauze resume — als gebruiker gisteren stopte na 15 min,
            spring direct terug naar pad+stap waar hij gebleven was. */}
        {kwartierResume && onResumeLearnPath && pathManifestById[kwartierResume.pathId] && (
          <button
            onClick={() => {
              onResumeLearnPath(kwartierResume.pathId, kwartierResume.stepIdx);
              setKwartierResume(null);
            }}
            style={{
              width: "100%",
              padding: "14px 16px",
              borderRadius: 14,
              border: "1px solid rgba(0,200,83,0.45)",
              background: "linear-gradient(135deg, rgba(0,200,83,0.18), rgba(0,200,83,0.06))",
              color: "#cdd6e2",
              textAlign: "left",
              cursor: "pointer",
              marginBottom: 12,
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "var(--font-body)",
            }}
          >
            <span style={{ fontSize: 24 }}>▶️</span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#00e676" }}>
                Verder waar je was
              </span>
              <span style={{ display: "block", fontSize: 12, color: "rgba(255,255,255,0.75)", marginTop: 2 }}>
                {pathManifestById[kwartierResume.pathId].title} · deel {(kwartierResume.stepIdx || 0) + 1}
              </span>
            </span>
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => { e.stopPropagation(); clearResume(userName); setKwartierResume(null); }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.stopPropagation(); clearResume(userName); setKwartierResume(null); } }}
              aria-label="Resume wissen"
              style={{
                fontSize: 18,
                color: "rgba(255,255,255,0.55)",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >×</span>
          </button>
        )}

        {/* A8 (10-agent circulariteit 2026-05-10): "Verder waar je was"-card.
            Toont laatste activiteit met directe knop naar bijbehorend vak. */}
        {lastActivity && onPickPathsForSubject && (
          <button
            onClick={() => onPickPathsForSubject(lastActivity.subject, lastActivity.level)}
            style={{
              width: "100%",
              marginBottom: 12,
              padding: "12px 14px",
              background: "rgba(0,212,255,0.10)",
              border: "1px solid rgba(0,212,255,0.40)",
              borderRadius: 12,
              color: "var(--color-text-strong)",
              cursor: "pointer",
              textAlign: "left",
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 22 }} aria-hidden="true">▶</span>
            <span style={{ flex: 1, fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.3 }}>
              <span style={{ fontWeight: 700, color: "var(--color-brand-secondary)", fontSize: 12, textTransform: "uppercase" }}>Verder waar je was</span>
              <br />
              <span>{(SUBJECTS.find(s => s.id === lastActivity.subject)?.label) || lastActivity.subject} — {lastActivity.percentage != null ? `score ${lastActivity.percentage}%` : "open"}</span>
            </span>
            <span style={{ fontSize: 18, color: "var(--color-brand-secondary)" }}>→</span>
          </button>
        )}

        {/* A12 (10-agent circulariteit 2026-05-10): web push opt-in.
            Toont 1x bij eerste bezoek na minimaal 1 activiteit; verbergt na keuze.
            "denied" verbergt — leerling heeft het al expliciet afgewezen. */}
        {pushPerm === "default" && lastActivity && (
          <button
            onClick={handleEnablePush}
            style={{
              width: "100%",
              marginBottom: 12,
              padding: "12px 14px",
              background: "rgba(155,77,224,0.10)",
              border: "1px solid rgba(155,77,224,0.45)",
              borderRadius: 12,
              color: "var(--color-text-strong)",
              fontSize: 13,
              cursor: "pointer",
              textAlign: "left",
              minHeight: 44,
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <span style={{ fontSize: 22 }}>🔔</span>
            <span style={{ flex: 1, lineHeight: 1.35 }}>
              <strong>Herinneringen aanzetten?</strong>
              <br />
              <span style={{ fontSize: 12, color: "var(--color-text)" }}>
                We sturen elke dag een seintje als je vragen klaar hebt staan.
              </span>
            </span>
          </button>
        )}
        {pushPerm === "granted" && hasPushSub && (
          <div style={{
            display: "flex", alignItems: "center", gap: 6, marginBottom: 8,
            padding: "4px 10px", background: "rgba(0,200,83,0.08)",
            border: "1px solid rgba(0,200,83,0.30)", borderRadius: 8,
            fontSize: 11, color: "#2ecc71",
          }}>
            <span>🔔 herinneringen aan</span>
            <button onClick={handleDisablePush} style={{
              marginLeft: "auto", background: "transparent", border: 0,
              color: "var(--color-text-soft)", fontSize: 11, cursor: "pointer",
              textDecoration: "underline",
            }}>uitzetten</button>
          </div>
        )}

        {/* A10 (10-agent circulariteit 2026-05-10): examen-trainer voor VMBO-GT 4.
            Directe ingang naar de 6 economie-examen-paden met 38 echte vragen. */}
        {isVmboGt4 && onPickPathsForSubject && (
          <button
            onClick={() => onPickPathsForSubject("economie", userLevel)}
            style={{
              width: "100%",
              marginBottom: 12,
              padding: "14px 16px",
              background: "linear-gradient(135deg, rgba(255,213,79,0.15), rgba(255,160,0,0.10))",
              border: "1.5px solid rgba(255,213,79,0.55)",
              borderRadius: 14,
              color: "var(--color-text-strong)",
              cursor: "pointer",
              textAlign: "left",
              minHeight: 60,
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span style={{ fontSize: 28 }} aria-hidden="true">🎓</span>
            <span style={{ flex: 1, fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.35 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#ffd54f" }}>
                Examen-trainer Economie
              </span>
              <br />
              <span style={{ fontSize: 13, color: "var(--color-text)" }}>
                6 echte VMBO-examens · 38 vragen met uitleg · gratis oefenen
              </span>
            </span>
            <span style={{ fontSize: 20, color: "#ffd54f" }}>▶</span>
          </button>
        )}

        {/* PO/VO-toggle + vakkenkeuze-grid (audit 2 M2):
            Toggle is alleen prominent zichtbaar als de leerling nog GEEN
            niveau heeft gekozen. Heeft hij dat wel (userLevel/userSchoolType
            bekend), dan tonen we onderaan een kleine "andere niveau? wissel"
            link voor het edge-geval (broertje/zusje, verkennen). Voorkomt dat
            een leerling die net "Groep 4" koos opnieuw moet beslissen. */}
        {!niveauVastgelegd && (
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            {[
              { id: "po", label: "Basisschool", desc: "groep 1-8", emoji: "🎒" },
              { id: "vo", label: "Middelbaar", desc: "klas 1-6", emoji: "🎓" },
            ].map(t => {
              const sel = vakModus === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => { SoundEngine.play("click"); setVakModus(t.id); }}
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: 12,
                    border: sel ? "2px solid #00d4ff" : "1px solid rgba(255,255,255,0.12)",
                    background: sel ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
                    color: sel ? "var(--color-brand-secondary)" : "rgba(255,255,255,0.6)",
                    fontFamily: "var(--font-display)",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  <span style={{ fontSize: 16 }} aria-hidden="true">{t.emoji}</span>
                  <span>{t.label}</span>
                  <span style={{ opacity: 0.7, fontWeight: 500, fontSize: 11 }}>{t.desc}</span>
                </button>
              );
            })}
          </div>
        )}

        <h3 style={{ ...styles.sectionTitle, marginTop: 0, marginBottom: 10 }}>
          Kies je vak — leren of oefenen?
        </h3>

        <div className="vakken-grid" style={{ marginBottom: 20 }}>
          {vakkenLijst.map((vak) => {
            const subj = SUBJECTS.find(s => s.id === vak.id);
            if (!subj) return null;
            const label = vak.labelOverride || subj.label;
            const aantalPaden = padenPerVak[vak.id] || 0;
            const heeftPaden = aantalPaden > 0;
            return (
              <div
                key={vak.id}
                style={{
                  borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.10)",
                  background: "rgba(255,255,255,0.04)",
                  padding: "12px 12px 10px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 8,
                  minWidth: 0,    // <360px: voorkomt grid-overflow (QA bug #3)
                  overflow: "hidden",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }} aria-hidden="true">{subj.icon}</span>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: subj.color, lineHeight: 1.2, minWidth: 0, wordBreak: "break-word" }}>
                    {label}
                  </div>
                </div>
                {(() => {
                  // Bouw acties-lijst voor deze tegel.
                  const isCitoVak = vakModus === "po" && CITO_VAKKEN_PO.has(vak.id);
                  const acties = [
                    {
                      key: "leren",
                      enabled: heeftPaden && !!onPickPathsForSubject,
                      label: "📚 Leren",
                      sub: heeftPaden ? `${aantalPaden} ${aantalPaden === 1 ? "pad" : "paden"}` : "binnenkort",
                      onClick: () => { if (heeftPaden && onPickPathsForSubject) { SoundEngine.play("click"); onPickPathsForSubject(vak.id); } },
                      colorOn: "#00e676",
                      bgOn: "rgba(0,200,83,0.18)",
                      bgPrimary: "rgba(0,200,83,0.30)",
                    },
                    {
                      key: "oefenen",
                      enabled: !!onTextbook,
                      label: "🎯 Oefenen",
                      sub: "uit je boek",
                      onClick: () => { SoundEngine.play("click"); onTextbook && onTextbook(vak.id); },
                      colorOn: "#ff8c42",
                      bgOn: "rgba(255,107,53,0.15)",
                      bgPrimary: "rgba(255,107,53,0.28)",
                    },
                  ];
                  if (isCitoVak && onCitoOefenenSubject) {
                    acties.push({
                      key: "cito",
                      enabled: true,
                      label: <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><DoorstroomtoetsLogo size={14} /> Doorstroomtoets</span>,
                      sub: "echte stijl",
                      onClick: () => {
                        SoundEngine.play("click");
                        onCitoOefenenSubject(VAK_TO_CITO_PIJLER[vak.id], label);
                      },
                      colorOn: "#ffd54f",
                      bgOn: "rgba(255,213,79,0.15)",
                      bgPrimary: "rgba(255,213,79,0.30)",
                    });
                  }
                  // Volgorde-logica obv entryContext (Mark UX 2026-05-08):
                  // de actie waarmee de gebruiker binnenkwam komt bovenaan
                  // (krijgt 'primair' kleur). Cirkel-rond UX.
                  const orderMap = {
                    cito: ["cito", "leren", "oefenen"],
                    leren: ["leren", "oefenen", "cito"],
                    oefenen: ["oefenen", "leren", "cito"],
                  };
                  const order = orderMap[entryContext] || ["leren", "oefenen", "cito"];
                  const sorted = [...acties].sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
                  const primary = sorted[0]?.key;
                  return (
                    <div style={{ display: "flex", gap: 6 }}>
                      {sorted.map((a) => {
                        const isPrimary = a.key === primary;
                        return (
                          <button
                            key={a.key}
                            disabled={!a.enabled}
                            onClick={a.onClick}
                            style={{
                              flex: 1,
                              padding: "7px 4px",
                              borderRadius: 8,
                              border: isPrimary ? `1px solid ${a.colorOn}` : "none",
                              background: !a.enabled
                                ? "rgba(255,255,255,0.04)"
                                : isPrimary ? a.bgPrimary : a.bgOn,
                              color: a.enabled ? a.colorOn : "rgba(255,255,255,0.35)",
                              fontFamily: "var(--font-display)",
                              fontSize: 11,
                              fontWeight: 700,
                              cursor: a.enabled ? "pointer" : "default",
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 1,
                              lineHeight: 1.2,
                              opacity: a.enabled ? 1 : 0.6,
                            }}
                          >
                            <span>{a.label}</span>
                            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 9, opacity: 0.85 }}>
                              {a.sub}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  );
                })()}
              </div>
            );
          })}
        </div>

        {/* Subtiele wissel-link voor leerlingen waarbij niveau al vast staat
            (broertje/zusje, verkennen). Klik = toon de toggle weer + wissel. */}
        {niveauVastgelegd && (
          <div style={{ textAlign: "center", marginTop: 4, marginBottom: 14 }}>
            <button
              onClick={() => {
                SoundEngine.play("click");
                setVakModus(vakModus === "po" ? "vo" : "po");
              }}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.4)",
                fontSize: 11,
                cursor: "pointer",
                textDecoration: "underline",
                padding: "4px 8px",
              }}
            >
              {vakModus === "po"
                ? "Andere niveau? Bekijk middelbaar →"
                : "Andere niveau? Bekijk basisschool →"}
            </button>
          </div>
        )}

        {/* Mark wens 2026-05-10: rol-specifieke direct-ingang.
            BEIDE balken altijd tonen — leerling kan zelf kiezen.
            (Eerdere vakModus-conditie verborg examens-balk in PO-modus,
            wat Mark niet wilde.) */}
        {onCitoOefenenSubject && (
          <button
            onClick={() => {
              SoundEngine.play("click");
              // Open Cito-toets met alle pijlers gemixt (geen filter)
              onCitoOefenenSubject(null, "Alle Cito-vakken");
            }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
              padding: "12px 14px",
              marginBottom: 16,
              background: "linear-gradient(135deg, rgba(255,213,79,0.15), rgba(255,160,0,0.08))",
              border: "1.5px solid rgba(255,213,79,0.50)",
              borderRadius: 12,
              cursor: "pointer",
              color: "var(--color-text-strong)",
              textAlign: "left",
              fontFamily: "var(--font-body)",
              minHeight: 44,
            }}
          >
            <DoorstroomtoetsLogo size={36} />
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#ffd54f" }}>
                Doorstroomtoets oefenen
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
                Doorstroomtoets-stijl vragen — alle vakken gemixt
              </div>
            </div>
            <span style={{ fontSize: 16, color: "rgba(255,213,79,0.75)" }} aria-hidden="true">›</span>
          </button>
        )}
        {/* Cito-pijler-chips (P0b vindbaarheid 2026-05-12): direct-toegang
            tot één van de 4 Doorstroomtoets-onderdelen ipv eerst 'alles gemixt'.
            Review-fix 2026-05-12: minHeight 44 (a11y) + contrast verhoogd. */}
        {onCitoOefenenSubject && (
          <>
            <div style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.55)",
              marginTop: -8,
              marginBottom: 6,
              fontFamily: "var(--font-body)",
            }}>
              Of kies een onderdeel:
            </div>
            <div style={{
              display: "flex",
              gap: 6,
              marginBottom: 16,
              flexWrap: "wrap",
            }}>
              {[
                { id: "rekenen", icon: "🔢", label: "Rekenen" },
                { id: "taal", icon: "📝", label: "Taal" },
                { id: "begrijpend-lezen", icon: "📖", label: "Begrijpend lezen" },
                { id: "wereldorientatie", icon: "🌍", label: "Wereld" },
              ].map((pijler) => (
                <button
                  key={pijler.id}
                  onClick={() => {
                    SoundEngine.play("click");
                    onCitoOefenenSubject(pijler.id, `Doorstroomtoets — ${pijler.label}`);
                  }}
                  style={{
                    flex: "1 1 calc(50% - 3px)",
                    minWidth: 0,
                    padding: "10px 12px",
                    background: "rgba(255,213,79,0.18)",
                    border: "1px solid rgba(255,213,79,0.55)",
                    borderRadius: 8,
                    cursor: "pointer",
                    color: "var(--color-text-strong)",
                    fontSize: 12,
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    minHeight: 44,
                  }}
                  aria-label={`Doorstroomtoets ${pijler.label} oefenen`}
                >
                  <span aria-hidden="true">{pijler.icon}</span>
                  <span>{pijler.label}</span>
                </button>
              ))}
            </div>
          </>
        )}
        {/* Twee examen-balken (Mark feedback 2026-05-11):
            (1) USP — interactief oefenen mét uitleg waarom (examen-leerpaden).
            (2) Bibliotheek — hele PDF-examens inzien (overal beschikbaar, maar
                in onze app netjes geordend + correctievoorschrift erbij).
            Beide modi zijn gelijkwaardig sterk, niet één boven de ander. */}
        {onExamens && (
          <button
            onClick={() => { SoundEngine.play("click"); onExamens("leren"); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
              padding: "12px 14px",
              marginBottom: 10,
              background: "linear-gradient(135deg, rgba(255,213,79,0.18), rgba(255,107,53,0.08))",
              border: "1.5px solid rgba(255,213,79,0.55)",
              borderRadius: 12,
              cursor: "pointer",
              color: "var(--color-text-strong)",
              textAlign: "left",
              fontFamily: "var(--font-body)",
              minHeight: 44,
            }}
          >
            <span style={{ fontSize: 22 }} aria-hidden="true">🎯</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#ffd54f" }}>
                Examen-vragen oefenen
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
                Echte vragen + uitleg waarom het juiste antwoord klopt
              </div>
            </div>
            <span style={{ fontSize: 16, color: "rgba(255,213,79,0.75)" }} aria-hidden="true">›</span>
          </button>
        )}
        {onExamens && (
          <button
            onClick={() => { SoundEngine.play("click"); onExamens("pdf"); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              width: "100%",
              padding: "12px 14px",
              marginBottom: 16,
              background: "linear-gradient(135deg, rgba(167,139,250,0.13), rgba(167,139,250,0.05))",
              border: "1px solid rgba(167,139,250,0.45)",
              borderRadius: 12,
              cursor: "pointer",
              color: "var(--color-text-strong)",
              textAlign: "left",
              fontFamily: "var(--font-body)",
              minHeight: 44,
            }}
          >
            <span style={{ fontSize: 22 }} aria-hidden="true">📄</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#a78bfa" }}>
                Oude examens inzien (PDF)
              </div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginTop: 2 }}>
                Hele eindexamens + correctievoorschrift — handig op papier
              </div>
            </div>
            <span style={{ fontSize: 16, color: "rgba(167,139,250,0.75)" }} aria-hidden="true">›</span>
          </button>
        )}

        {/* 15-min sessie-indicator — koppeling met "Een kwartier per dag"
            slogan. Vult zich realtime; bij overschrijden van target geeft
            'ie een ✓ en compliment. */}
        {kwartierTarget > 0 && (() => {
          const reached = sessionMin >= kwartierTarget;
          const pct = Math.min(100, Math.round((sessionMin / kwartierTarget) * 100));
          return (
            <div style={{
              marginBottom: 10,
              padding: "8px 12px",
              background: reached
                ? "linear-gradient(135deg, rgba(0,200,83,0.18), rgba(105,240,174,0.10))"
                : "rgba(255,255,255,0.04)",
              border: `1px solid ${reached ? "rgba(105,240,174,0.45)" : "rgba(255,255,255,0.10)"}`,
              borderRadius: 12,
            }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.75)", fontWeight: 600 }}>
                  {reached ? "✓ Vandaag is je kwartier rond" : "Vandaag oefenen"}
                </span>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 12, fontWeight: 700, color: reached ? "var(--color-brand-primary-100)" : "rgba(255,255,255,0.85)" }}>
                  {sessionMin} / {kwartierTarget} min
                </span>
              </div>
              <div style={{ height: 5, background: "rgba(0,0,0,0.30)", borderRadius: 999, overflow: "hidden" }}>
                <div style={{
                  height: "100%",
                  width: `${pct}%`,
                  background: reached
                    ? "linear-gradient(90deg, #00c853, #69f0ae)"
                    : "linear-gradient(90deg, #00d4ff, #00c853)",
                  transition: "width 0.4s ease-out",
                }} />
              </div>
            </div>
          );
        })()}
        {streakWarning && (
          <div style={{
            display: "flex", alignItems: "center", gap: 10,
            background: "linear-gradient(135deg, rgba(255,152,0,0.18), rgba(255,193,7,0.1))",
            border: "1px solid rgba(255,152,0,0.45)",
            borderRadius: 14, padding: "12px 16px", marginBottom: 4,
          }}>
            <span style={{ fontSize: 24 }}>⚠️</span>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "#ffb74d", lineHeight: 1.4 }}>
              Speel vandaag om je streak van <strong style={{ color: "#ff9800" }}>{streakWarning} {streakWarning === 1 ? "dag" : "dagen"}</strong> te bewaren!
            </div>
          </div>
        )}
        {streak >= 2 && (
          <div style={{ display: "flex", alignItems: "center", gap: 10, background: "linear-gradient(135deg, rgba(255,111,0,0.15), rgba(255,160,0,0.1))", border: "1px solid rgba(255,111,0,0.3)", borderRadius: 14, padding: "12px 16px", marginBottom: 4 }}>
            <span style={{ fontSize: 28 }}>🔥</span>
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, color: "#ff9800" }}>{streak} dagen op rij!</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>Blijf zo doorgaan, je bent op dreef!</div>
            </div>
          </div>
        )}
        {weakestSubject && (
          <div style={{
            display: "flex", alignItems: "center", gap: 12,
            background: "linear-gradient(135deg, rgba(33,150,243,0.12), rgba(30,136,229,0.07))",
            border: "1px solid rgba(33,150,243,0.3)",
            borderRadius: 14, padding: "12px 16px", marginBottom: 4,
          }}>
            <span style={{ fontSize: 26 }}>{weakestSubject.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#64b5f6" }}>
                💪 {weakestSubject.label} heeft aandacht nodig
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
                Gemiddeld {weakestSubject.avg}%
              </div>
            </div>
            <button
              onClick={() => { SoundEngine.play("click"); onSelfStudy(); }}
              style={{
                padding: "8px 14px", border: "none", borderRadius: 10,
                background: "linear-gradient(135deg, #1565c0, #0d47a1)",
                color: "var(--color-text-strong)", fontFamily: "var(--font-display)",
                fontSize: 13, fontWeight: 700, cursor: "pointer", flexShrink: 0,
              }}
            >
              Oefen nu
            </button>
          </div>
        )}
        {/* Mixed-herhaal-quiz: alleen tonen als spaced repetition iets klaar
            heeft staan voor vandaag. Maakt het abstracte "due_at" concreet
            voor de leerling — één klik en je oefent precies wat herhaling
            nodig heeft, gemixed over je hele profiel. */}
        {dueCount > 0 && onHerhaalQuiz && (
          <button
            onClick={() => { SoundEngine.play("click"); onHerhaalQuiz(); }}
            style={{
              width: "100%",
              padding: "14px 16px",
              marginBottom: 6,
              borderRadius: 14,
              border: "1px solid rgba(124,77,255,0.5)",
              background: "linear-gradient(135deg, rgba(124,77,255,0.18), rgba(167,139,250,0.10))",
              color: "var(--color-text)",
              fontFamily: "var(--font-body)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textAlign: "left",
            }}
          >
            <span style={{ fontSize: 26 }} aria-hidden="true">🔄</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, color: "#a78bfa" }}>
                Herhaling — {dueCount} {dueCount === 1 ? "onderwerp" : "onderwerpen"} klaar
              </div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.55)", marginTop: 2 }}>
                Vragen gemixed uit alles wat je herhaling nodig heeft (~5 min)
              </div>
            </div>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#a78bfa", background: "rgba(124,77,255,0.25)", borderRadius: 999, padding: "5px 11px", whiteSpace: "nowrap" }}>
              Start →
            </span>
          </button>
        )}

        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <button
            onClick={() => { setShowCode(v => !v); setError(""); setCode(""); }}
            style={{ background: "none", border: "none", color: "#4a6080", fontSize: 12, cursor: "pointer", padding: "4px 8px", textDecoration: "underline" }}
          >
            🔑 Code van leerkracht ontvangen?
          </button>
          {showCode && (
            <div style={{ marginTop: 8 }}>
              <div style={styles.codeInputRow}>
                <input
                  style={{ ...styles.textInput, flex: 1, textTransform: "uppercase", letterSpacing: 3, fontWeight: 700, textAlign: "center" }}
                  value={code}
                  onChange={(e) => { setCode(e.target.value.toUpperCase()); setError(""); }}
                  placeholder="TOETSCODE"
                  maxLength={6}
                  autoFocus
                />
                <button style={styles.joinButton} onClick={handleJoin}>Meedoen</button>
              </div>
              {error && <p style={styles.errorText}>{error}</p>}
            </div>
          )}
        </div>

        {/* Sinds M2 (vakkenkeuze-grid bovenaan) zijn 'Test je kennis' en
            'Uit je boek' dubbelop met de Leren/Oefenen-knoppen per vak.
            Hou alleen de unieke shortcuts: Voortgang + Scorebord. */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 10, marginBottom: 24 }}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00b84d, #36537e)" }} onClick={onViewProgress}>
            <span style={{ fontSize: 24 }}>📊</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Voortgang</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #69f0ae, var(--color-brand-primary))" }} onClick={onLeaderboard}>
            <span style={{ fontSize: 24 }}>🏆</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Scorebord</span>
          </button>
        </div>

        {/* Urgente deadline banner */}
        {quizzes.filter((q) => q.deadline && daysUntil(q.deadline) >= 0 && daysUntil(q.deadline) <= 1 && !progress.some((p) => p.quizId === q.id)).map((q) => {
          const subj = SUBJECTS.find((s) => s.id === q.subject);
          return (
            <div key={"banner-" + q.id} onClick={() => { SoundEngine.play("click"); onJoinQuiz(q.code); }} style={{ background: "linear-gradient(135deg, #b71c1c, #e53935)", borderRadius: 14, padding: "14px 16px", marginBottom: 12, display: "flex", alignItems: "center", gap: 12, animation: "pulse 2s infinite", cursor: "pointer" }}>
              <span style={{ fontSize: 28 }}>🚨</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--color-text-strong)" }}>Deadline bijna! {subj?.icon} {q.title}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.8)" }}>{daysUntil(q.deadline) === 0 ? "Vandaag de laatste dag!" : "Nog 1 dag — doe het nu!"}</div>
              </div>
              <span style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text-strong)", background: "rgba(0,0,0,0.25)", borderRadius: 8, padding: "6px 10px" }}>Start ›</span>
            </div>
          );
        })}

        {/* Assigned quizzes */}
        {quizzes.filter((q) => q.deadline).length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>📋 Opdrachten</h3>
            {quizzes.filter((q) => q.deadline).map((q) => {
              const subj = SUBJECTS.find((s) => s.id === q.subject);
              const remaining = daysUntil(q.deadline);
              const done = progress.some((p) => p.quizId === q.id);
              return (
                <div key={q.id} onClick={() => { if (!done) { SoundEngine.play("click"); onJoinQuiz(q.code); } }} style={{ ...styles.assignmentCard, opacity: done ? 0.6 : 1, cursor: done ? "default" : "pointer" }}>
                  <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "var(--color-text)" }}>{q.title}</div>
                    <div style={{ fontSize: 12, color: "var(--color-text-muted)" }}>
                      Deadline: {formatDate(q.deadline)} · {remaining <= 0 ? "Verlopen!" : `Nog ${remaining} dag${remaining !== 1 ? "en" : ""}`}
                    </div>
                  </div>
                  {done ? (
                    <span style={styles.doneBadge}>✅ Klaar</span>
                  ) : (
                    <span style={{
                      ...styles.deadlineBadge,
                      background: remaining <= 1 ? "#ff6b6b" : remaining <= 3 ? "#ffa726" : "#66bb6a",
                    }}>
                      {remaining <= 0 ? "!" : `${remaining}d`}
                    </span>
                  )}
                </div>
              );
            })}
          </>
        )}

        {/* Empty-state hint wanneer er nog géén voortgang is — vult de witruimte
            onder de 4 tegels met een vriendelijke duw richting Zelf oefenen. */}
        {recentProgress.length === 0 && quizzes.filter((q) => q.deadline).length === 0 && (
          <div style={{
            background: "linear-gradient(135deg, rgba(0,200,83,0.10), rgba(105,240,174,0.06))",
            border: "1px dashed rgba(105,240,174,0.40)",
            borderRadius: 14,
            padding: "16px 18px",
            marginTop: 4,
            textAlign: "center",
          }}>
            <div style={{ fontSize: 28, marginBottom: 6 }}>🌱</div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, color: "var(--color-brand-primary-100)", marginBottom: 4 }}>
              Klaar voor je eerste oefening?
            </div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "rgba(255,255,255,0.65)", lineHeight: 1.4 }}>
              Kies bovenaan een vak en tik <strong>📚 Leren</strong> voor uitleg of <strong>🎯 Oefenen</strong> voor vragen uit je boek.
            </div>
          </div>
        )}

        {/* Recent activity */}
        {recentProgress.length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>Laatst geoefend</h3>
            {recentProgress.map((r) => {
              const subj = SUBJECTS.find((s) => s.id === r.subject);
              return (
                <div key={r.id} style={{ ...styles.recentCard, cursor: onViewResult ? "pointer" : "default" }}
                  onClick={() => onViewResult?.(r)}>
                  <span style={{ fontSize: 20 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600 }}>{subj?.label}</span>
                    <span style={{ fontSize: 12, color: "#aabbcc", marginLeft: 8 }}>{LEVELS.find((l) => l.id === r.level)?.label}</span>
                    {r.completedAt && (
                      <div style={{ fontSize: 11, color: "#aabbcc", marginTop: 2 }}>
                        {new Date(r.completedAt).toLocaleDateString("nl-NL", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                      </div>
                    )}
                  </div>
                  <div style={{
                    ...styles.scoreBadge,
                    background: r.percentage >= 80 ? "#d4edda" : r.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                    color: r.percentage >= 80 ? "#155724" : r.percentage >= 50 ? "#856404" : "#721c24",
                  }}>
                    {r.percentage}%
                  </div>
                  <span style={{ color: "var(--color-text-muted)", fontSize: 16, marginLeft: 6 }}>›</span>
                  {onDeleteResult && (
                    <button
                      onClick={(e) => { e.stopPropagation(); onDeleteResult(r.id); }}
                      style={{ marginLeft: 6, background: "none", border: "none", color: "#ff6b6b", fontSize: 16, cursor: "pointer", padding: "2px 4px", lineHeight: 1, borderRadius: 6, flexShrink: 0 }}
                      title="Verwijder"
                    >×</button>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

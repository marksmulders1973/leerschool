import { useState, useEffect, useMemo } from "react";
import supabase from "../../supabase";
import { getLearnPath as lazyGetLearnPath } from "../../learnPaths/pathLoaders.js";
import pathManifest from "../../learnPaths/pathManifest.generated.json";
import MiniQuiz from "../practice/MiniQuiz.jsx";
import MdInline from "../../shared/ui/MdInline.jsx";
import { SUBJECTS } from "../../shared/subjects.js";
import { BRAND } from "../../brand.js";
import { interactive3DEnabled } from "../../shared/featureFlags.js";
import AITutor from "./AITutor.jsx";
import {
  recordWrong as adaptRecordWrong,
  recordRight as adaptRecordRight,
  buildCheckOrder as adaptBuildOrder,
  pathWrongMap as adaptPathWrongMap,
  markPathSeen,
  getSeenPaths,
} from "../../shared/adaptiveStore.js";
import { recordSeen as srRecordSeen } from "../../shared/spacedRepetition.js";
import { sanitizeSvg } from "../../shared/sanitizeSvg.js";
import { shuffleOptions } from "../../shared/shuffleOptions.js";
import VraagUitlegPad, { bumpVraagFouten } from "./VraagUitlegPad.jsx";
import { getExamRefsForPath } from "../../learnPaths/examenLookup.js";
import ExamenBronBanner from "../../shared/ui/ExamenBronBanner.jsx";
import ExamenPadBanner from "../../shared/ui/ExamenPadBanner.jsx";
import VoorkennisKeten from "../../shared/ui/VoorkennisKeten.jsx";
import KwartierPauze from "./KwartierPauze.jsx";

const C = {
  bg: "#0f1729",
  card: "rgba(30,45,70,0.6)",
  border: "#2a3f5f",
  text: "var(--color-text)",
  muted: "var(--color-text-muted)",
  good: "var(--color-brand-primary)",
  bad: "#ff5252",
  accent: "#5b86b8",
  warm: "#ffd54f",
};

function renderInline(text) {
  // Ondersteunt zowel **bold** (dubbele asterisks) als *bold* (enkele
  // asterisks). Voor *...* moeten de asterisks niet-spatie raken zodat
  // math-uitdrukkingen als "2 * 3" of "n * x" niet per ongeluk vet worden.
  const parts = text.split(/(\*\*[^*]+\*\*|\*\S[^*]*\S\*|\*\S\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return <strong key={i} style={{ color: "#ffffff" }}>{p.slice(2, -2)}</strong>;
    }
    if (p.startsWith("*") && p.endsWith("*") && p.length >= 3 && !p.startsWith("**")) {
      return <strong key={i} style={{ color: "#ffffff" }}>{p.slice(1, -1)}</strong>;
    }
    return <span key={i}>{p}</span>;
  });
}

function isTableBlock(block) {
  const lines = block.split("\n").filter((l) => l.trim());
  return lines.length >= 2 && lines.every((l) => l.trim().startsWith("|"));
}

function renderTable(block, key) {
  const rows = block
    .split("\n")
    .filter((l) => l.trim().startsWith("|"))
    .map((line) => line.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
  if (rows.length < 2) return null;
  // Detecteer separator (---) en verwijder
  const headers = rows[0];
  const isSeparator = (row) => row.every((c) => /^[-:]+$/.test(c));
  const dataRows = rows.slice(1).filter((r) => !isSeparator(r));
  return (
    <div key={key} style={{ overflowX: "auto", margin: "12px 0" }}>
      <table
        style={{
          borderCollapse: "collapse",
          width: "100%",
          fontFamily: "var(--font-body)",
          fontSize: 14,
          color: C.text,
        }}
      >
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th
                key={i}
                style={{
                  padding: "8px 12px",
                  borderBottom: `2px solid ${C.good}`,
                  background: "rgba(0,200,83,0.08)",
                  textAlign: "left",
                  fontWeight: 700,
                  color: "var(--color-text-strong)",
                }}
              >
                {renderInline(h)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataRows.map((row, ri) => (
            <tr key={ri} style={{ background: ri % 2 === 0 ? "rgba(255,255,255,0.02)" : "transparent" }}>
              {row.map((c, ci) => (
                <td key={ci} style={{ padding: "7px 12px", borderBottom: `1px solid ${C.border}` }}>
                  {renderInline(c)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Explanation({ text }) {
  const blocks = text.split("\n\n");
  return (
    <div style={{ lineHeight: 1.65, fontSize: 15, color: C.text }}>
      {blocks.map((block, bi) => {
        if (isTableBlock(block)) return renderTable(block, bi);
        const lines = block.split("\n");
        const isList = lines.length > 0 && lines.every((l) => l.trim().startsWith("•"));
        if (isList) {
          return (
            <ul key={bi} style={{ paddingLeft: 22, margin: "10px 0" }}>
              {lines.map((l, li) => (
                <li key={li} style={{ marginBottom: 6 }}>{renderInline(l.replace(/^•\s*/, ""))}</li>
              ))}
            </ul>
          );
        }
        return <p key={bi} style={{ margin: "10px 0" }}>{renderInline(block)}</p>;
      })}
    </div>
  );
}

function SvgFigure({ svg }) {
  if (!svg) return null;
  const sized = svg.replace(
    /<svg\b([^>]*)>/i,
    (m, attrs) => {
      const cleaned = attrs.replace(/\s(width|height)="[^"]*"/g, "");
      return `<svg${cleaned} style="width:100%;max-width:460px;height:auto;display:block;margin:0 auto;">`;
    }
  );
  return (
    <div
      style={{
        background: "#0a1424",
        border: `1px solid ${C.border}`,
        borderRadius: 14,
        padding: 14,
        margin: "16px 0",
      }}
      dangerouslySetInnerHTML={{ __html: sanitizeSvg(sized) }}
    />
  );
}

// Tussen-scherm na correct antwoord met evidence: auto-advance na ~2.8s
// (flow behouden voor 10-jarige in ritme), skip-knop voor wie sneller wil.
// Visuele progress-bar laat zien dat 't kort is.
function CorrectEvidenceCard({ evidence, isLast, onAdvance }) {
  const AUTO_MS = 2800;
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const start = Date.now();
    let raf;
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(100, (elapsed / AUTO_MS) * 100);
      setProgress(p);
      if (elapsed >= AUTO_MS) {
        onAdvance();
        return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div style={cardStyle(C.good)}>
      <div style={{ fontSize: 18, fontWeight: 700, color: C.good, marginBottom: 8 }}>
        ✅ Goed!
      </div>
      <div style={{ fontSize: 14, color: C.text, marginBottom: 6, lineHeight: 1.5 }}>
        Je vond het juiste antwoord. Hier stond de aanwijzing:
      </div>
      <EvidenceQuote text={evidence} label="📍 Hier vond je het" />
      <div style={{ marginTop: 14 }}>
        <div style={{ height: 4, background: "rgba(0,200,83,0.18)", borderRadius: 2, overflow: "hidden", marginBottom: 8 }}>
          <div style={{
            width: `${progress}%`,
            height: "100%",
            background: C.good,
            transition: "width 60ms linear",
          }} />
        </div>
        <button onClick={onAdvance} style={btnSecondary()}>
          {isLast ? "Klaar met deze stap ✓" : "Sneller door ▶"}
        </button>
      </div>
    </div>
  );
}

// Quote-card met de tekst-passage waar het antwoord op staat.
// Gebruikt door wrong-overlay en correctEvidence-mode bij begrijpend-lezen-
// vragen. Mark feedback 2026-05-08: didactisch waardevol om te tonen WAAR
// in de tekst het antwoord stond, niet alleen WAT het was.
function EvidenceQuote({ text, label = "📍 In de tekst staat" }) {
  if (!text) return null;
  return (
    <div style={{
      padding: "10px 12px 10px 14px",
      marginTop: 10,
      borderRadius: 10,
      background: "rgba(255,213,79,0.10)",
      border: "1px solid rgba(255,213,79,0.35)",
      borderLeft: "4px solid #ffd54f",
    }}>
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: 11,
        fontWeight: 700,
        color: "#ffd54f",
        textTransform: "uppercase",
        letterSpacing: 0.6,
        marginBottom: 6,
      }}>
        {label}
      </div>
      <div style={{ fontSize: 13.5, color: C.text, fontStyle: "italic", lineHeight: 1.5 }}>
        <span aria-hidden="true">"</span>
        <mark style={{
          background: "rgba(255,213,79,0.35)",
          color: C.text,
          padding: "1px 4px",
          borderRadius: 3,
        }}>{text}</mark>
        <span aria-hidden="true">"</span>
      </div>
    </div>
  );
}

// Knop die een YouTube-zoekopdracht opent voor de huidige stap.
// Gebruik bewust een search-URL ipv vaste video-URL: dan is de
// inhoud altijd actueel en is er geen onderhoud aan dode links.
function YoutubeZoekKnop({ pathTitle, stepTitle, subject }) {
  const vakLabel = subject === "taal" ? "Nederlands"
    : subject === "wiskunde" ? "wiskunde"
    : subject || "uitleg";
  const query = `${stepTitle} ${pathTitle} ${vakLabel} uitleg`;
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex", alignItems: "center", gap: 8,
        marginTop: 12, marginBottom: 6,
        padding: "9px 14px",
        background: "linear-gradient(135deg, #ff0000, #c4302b)",
        border: "none", borderRadius: 12,
        color: "var(--color-text-strong)",
        fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
        textDecoration: "none",
        boxShadow: "0 3px 12px rgba(255,0,0,0.25)",
        cursor: "pointer",
      }}
    >
      <span style={{ fontSize: 18 }}>🎥</span>
      Bekijk uitleg op YouTube
    </a>
  );
}

export default function LearnPath({ pathId, initialStepIdx, userName, authUser, onBack, onHome, onPickPath }) {
  // QW7 lazy-load STAP 2 voltooid (2026-05-15): volledig async — geen
  // ALL_LEARN_PATHS-import meer. Pad-data komt uit lazy chunk (~50 kB)
  // ipv 5,8 MB bundle. First paint toont 'Laden…'-state (paar honderd ms).
  const [path, setPath] = useState(null);
  useEffect(() => {
    let cancelled = false;
    if (!pathId) return;
    setPath(null); // reset zodat bij pathId-switch oude pad verdwijnt
    lazyGetLearnPath(pathId).then((loaded) => {
      if (!cancelled) setPath(loaded);
    }).catch((err) => {
      console.warn(`[LearnPath] kon ${pathId} niet laden:`, err.message);
    });
    return () => { cancelled = true; };
  }, [pathId]);
  const player = (userName || "Speler").trim() || "Speler";

  // Als initialStepIdx meegegeven is (vanuit toets-vraag), spring direct naar die stap.
  const startMode = typeof initialStepIdx === "number" ? "reading" : "overview";
  const startStep = typeof initialStepIdx === "number" ? initialStepIdx : 0;

  // mode: overview | reading | checking | wrong | correctEvidence | stepDone | allDone
  // correctEvidence = pauze na correct antwoord op begrijpend-lezen-vraag
  // om de aanwijzing in de tekst te tonen (Mark feedback 2026-05-08).
  const [mode, setMode] = useState(startMode);
  const [stepIdx, setStepIdx] = useState(startStep);
  const [checkIdx, setCheckIdx] = useState(0);
  const [selected, setSelected] = useState(null);
  const [attempts, setAttempts] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());
  const [loaded, setLoaded] = useState(false);
  const [showMiniQuiz, setShowMiniQuiz] = useState(false);
  // AI-tutor drawer-state. Sluit niet automatisch bij stap-wissel; tutor leest
  // pathId+stepIdx zelf uit en herlaadt history.
  const [showTutor, setShowTutor] = useState(false);
  // Onthoud laatste fout-poging zodat de tutor weet wat er net mis ging.
  const [lastWrongAnswer, setLastWrongAnswer] = useState(null);
  // Pilot 2026-05-10: dynamisch uitleg-paneel per vraag (Mark blauwdruk economie).
  const [showUitlegPad, setShowUitlegPad] = useState(false);
  const [showTekstHerlees, setShowTekstHerlees] = useState(false);

  // VoorkennisKeten fase 3 (2026-05-14): markeer pad als 'ooit gezien' bij
  // mount. Verzamel volledige seen-set in state voor mastery-detectie.
  useEffect(() => {
    if (pathId) markPathSeen(pathId);
  }, [pathId]);
  const seenIds = useMemo(() => getSeenPaths(), [pathId, stepIdx]);

  // Voortgang ophalen bij start
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { data } = await supabase
          .from("learn_progress")
          .select("step_idx")
          .eq("player_name", player)
          .eq("learn_path_id", pathId);
        if (cancelled) return;
        if (Array.isArray(data) && data.length > 0) {
          setCompletedSteps(new Set(data.map((r) => r.step_idx)));
        }
      } catch (e) {
        // stil falen
      } finally {
        if (!cancelled) setLoaded(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [pathId, player]);

  // Hooks (incl. useMemo) MOETEN vóór elke conditional early-return staan,
  // anders breekt de rules-of-hooks zodra `path` van null naar geladen gaat.
  const step = path ? path.steps[stepIdx] : null;
  const checks = step?.checks || [];

  // Adaptief: foute checks van vorige bezoek eerst herhalen.
  // checkOrder is een mapping van weergavevolgorde → originele checkIdx.
  const checkOrder = useMemo(
    () => adaptBuildOrder(pathId, stepIdx, checks.length),
    [pathId, stepIdx, checks.length]
  );
  const realCheckIdx = checkOrder[checkIdx] ?? checkIdx;
  const rawCheck = checks[realCheckIdx];

  // Voortgangs-badge per stap voor Overview (vol = geheel beheerst).
  const wrongPerStep = useMemo(() => adaptPathWrongMap(pathId), [pathId, stepIdx, mode, attempts]);

  // Veel leerpaden hebben de juiste optie op index 0 staan; door per check
  // de opties (en bijhorende wrongHints) te schudden voorkomen we dat de
  // speler altijd 'A' kan kiezen. Stabiel binnen één check (memo op
  // pathId+stepIdx+checkIdx), reshuffle bij volgende check of stap.
  const currentCheck = useMemo(() => {
    if (!rawCheck) return null;
    return shuffleOptions(rawCheck);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathId, stepIdx, checkIdx, rawCheck]);

  if (!path) {
    // Onderscheid loading (pad bestaat, nog niet geladen) van niet-gevonden.
    const existsInManifest = pathManifest.some((p) => p.id === pathId);
    if (existsInManifest) {
      return (
        <div style={{ padding: 24, color: C.text, textAlign: "center" }}>
          <p style={{ opacity: 0.7 }}>Leerpad laden…</p>
        </div>
      );
    }
    return (
      <div style={{ padding: 24, color: C.text }}>
        <p>Leerpad niet gevonden.</p>
        <button onClick={onHome} style={btnSecondary()}>Terug naar home</button>
      </div>
    );
  }

  const totalSteps = path.steps.length;

  // Volgende-stap-suggestie bij overview: eerste niet-voltooide
  const firstUnfinishedIdx = (() => {
    for (let i = 0; i < totalSteps; i++) {
      if (!completedSteps.has(i)) return i;
    }
    return null;
  })();

  const goToStep = (idx) => {
    setStepIdx(idx);
    setCheckIdx(0);
    setSelected(null);
    setAttempts(1);
    setShowUitlegPad(false);
    setShowTekstHerlees(false);
    setMode("reading");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const startCheck = () => {
    setMode("checking");
    setCheckIdx(0);
    setSelected(null);
    setAttempts(1);
  };

  const handlePick = (i) => {
    if (mode !== "checking") return;
    setSelected(i);
    if (i === currentCheck.answer) {
      setLastWrongAnswer(null);
      // A2 (10-agent didactiek 2026-05-10): elke correcte poging telt als
      // beheerst — ook ná wrongHint + uitlegpad + retry. Anders straft het
      // systeem leerlingen die wel ECHT bijleren via de uitleg.
      adaptRecordRight(pathId, stepIdx, realCheckIdx);
      // A11: spaced repetition — schuif interval-stap (correct na fout = consolideren).
      srRecordSeen(pathId, stepIdx, realCheckIdx, true, attempts);
      // Bij begrijpend-lezen-vragen met `evidence`: pauzeer en toon aan de
      // leerling waar in de tekst het antwoord stond (didactiek-feedback Mark).
      if (currentCheck.evidence) {
        setMode("correctEvidence");
        return;
      }
      setTimeout(() => {
        if (checkIdx + 1 < checks.length) {
          setCheckIdx(checkIdx + 1);
          setSelected(null);
          setAttempts(1);
          setShowTekstHerlees(false);
        } else {
          completeStep();
        }
      }, 1100);
    } else {
      // Onthoud welke optie de leerling fout koos zodat de AI-tutor erop
      // kan reageren als de leerling om hulp vraagt.
      setLastWrongAnswer(currentCheck.options?.[i] || null);
      adaptRecordWrong(pathId, stepIdx, realCheckIdx);
      // A11: spaced repetition — fout = reset naar morgen.
      srRecordSeen(pathId, stepIdx, realCheckIdx, false, attempts);
      // Tel fout per vraag voor adaptief uitlegpad-niveau (auto-switch naar simpeler bij ≥2).
      // Audit 2026-05-13 QW2: examenBron-conditie verwijderd zodat ALLE 2000+ uitlegPad-checks
      // adaptief werken, niet alleen de 61 examenvragen.
      if (currentCheck.uitlegPad) {
        bumpVraagFouten(`${pathId}__${stepIdx}__${realCheckIdx}`);
      }
      setMode("wrong");
    }
  };

  // Doorgaan-handler na correctEvidence-pauze.
  const advanceAfterEvidence = () => {
    if (checkIdx + 1 < checks.length) {
      setCheckIdx(checkIdx + 1);
      setSelected(null);
      setAttempts(1);
      setShowTekstHerlees(false);
      setMode("checking");
    } else {
      completeStep();
    }
  };

  // Voor interactieve 3D-componenten (step.interactiveComponent). Component
  // toont eigen feedback en roept onAnswer(correct, optionId). We mappen
  // dat op dezelfde flow als handlePick: bij correct → completeStep, bij
  // fout → attempts ophogen (component houdt de visuele feedback aan).
  const handleInteractiveAnswer = (correct /*, optionId */) => {
    if (mode !== "checking") return;
    if (correct) {
      setTimeout(() => completeStep(), 1200);
    } else {
      setAttempts((a) => a + 1);
    }
  };

  const tryAgain = () => {
    setSelected(null);
    setAttempts(attempts + 1);
    setMode("checking");
  };

  const completeStep = async () => {
    const newDone = new Set(completedSteps);
    newDone.add(stepIdx);
    setCompletedSteps(newDone);
    setMode("stepDone");
    try {
      await supabase.from("learn_progress").upsert(
        {
          player_name: player,
          user_id: authUser?.id || null,
          learn_path_id: pathId,
          step_idx: stepIdx,
          attempts,
        },
        { onConflict: "player_name,learn_path_id,step_idx" }
      );
    } catch (e) {
      // niet kritiek
    }
  };

  const goNext = () => {
    if (stepIdx + 1 >= totalSteps) {
      setMode("allDone");
    } else {
      goToStep(stepIdx + 1);
    }
  };

  const progressPct = Math.round((completedSteps.size / totalSteps) * 100);

  // ─── Render ────────────────────────────
  if (mode === "overview") {
    return (
      <Overview
        path={path}
        completedSteps={completedSteps}
        firstUnfinishedIdx={firstUnfinishedIdx}
        progressPct={progressPct}
        onPickStep={goToStep}
        onBack={onBack}
        onHome={onHome}
        loaded={loaded}
        wrongPerStep={wrongPerStep}
      />
    );
  }

  if (mode === "allDone") {
    // A6 (10-agent circulariteit 2026-05-10): score + volgend-pad-suggestie.
    const totalChecks = (path.steps || []).reduce((n, s) => n + (s.checks?.length || 0), 0);
    const wrongCount = Object.values(wrongPerStep || {}).reduce((sum, arr) => sum + (Array.isArray(arr) ? arr.length : 0), 0);
    const correctCount = Math.max(0, totalChecks - wrongCount);
    // Volgende pad: zelfde subject + level, eerstvolgende met hogere id (alfa).
    // QW7 STAP 2: via pathManifest (metadata-only) zodat geen 5,8MB bundle nodig.
    const nextPath = (() => {
      const all = pathManifest
        .filter((p) => p && p.id !== path.id && p.subject === path.subject && p.level === path.level)
        .sort((a, b) => (a.id || "").localeCompare(b.id || ""));
      const idx = all.findIndex((p) => (p.id || "") > (path.id || ""));
      return idx >= 0 ? all[idx] : all[0] || null;
    })();
    // A9: voor Pincode/leer-paden — toon examen-vragen die hiernaar verwijzen.
    const examRefs = (path.id || "").startsWith("examen-") ? [] : getExamRefsForPath(path.id);
    return (
      <div style={pageStyle()}>
        <Header onBack={() => setMode("overview")} onHome={onHome} title={path.title} emoji={path.emoji} />
        <div style={{ padding: "10px 18px 28px" }}>
          <AllDone
            path={path}
            onHome={onHome}
            onBackToOverview={() => setMode("overview")}
            score={{ correct: correctCount, total: totalChecks }}
            nextPath={nextPath}
            onPickPath={onPickPath}
            examRefs={examRefs}
          />
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle()}>
      <KwartierPauze
        player={player}
        pathId={pathId}
        stepIdx={stepIdx}
        onStopForToday={() => { if (onHome) onHome(); }}
      />
      <Header onBack={() => setMode("overview")} onHome={onHome} title={path.title} emoji={path.emoji} backLabel="Overzicht" />

      {/* Mini-info: stap nummer + voortgangsbalk + prev/next-navigatie */}
      <div style={{ padding: "12px 18px 6px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: C.muted }}>
          <span>
            Deel {stepIdx + 1} / {totalSteps}
            <span style={{ marginLeft: 8, color: C.warm, fontWeight: 700 }}>
              ≈ {Math.max(1, Math.round(0.7 + (path.steps[stepIdx]?.checks?.length || 1) * 0.5))} min
            </span>
          </span>
          <span>{progressPct}% voltooid</span>
        </div>
        <div style={{ height: 8, background: "#1a2744", borderRadius: 999, overflow: "hidden" }}>
          <div
            style={{
              height: "100%",
              width: `${progressPct}%`,
              background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
              transition: "width 0.4s",
            }}
          />
        </div>
        {/* Vrije navigatie tussen stappen — werkt alleen in reading/stepDone, niet midden in een check */}
        {(mode === "reading" || mode === "stepDone") && (
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, marginTop: 10 }}>
            <button
              onClick={() => stepIdx > 0 && goToStep(stepIdx - 1)}
              disabled={stepIdx === 0}
              style={{
                flex: 1, padding: "8px 12px",
                background: stepIdx === 0 ? "rgba(255,255,255,0.04)" : "rgba(91,134,184,0.18)",
                border: `1px solid ${stepIdx === 0 ? "rgba(255,255,255,0.06)" : "rgba(91,134,184,0.4)"}`,
                borderRadius: 10,
                color: stepIdx === 0 ? "rgba(255,255,255,0.25)" : C.text,
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                cursor: stepIdx === 0 ? "not-allowed" : "pointer",
                transition: "background 0.15s",
              }}
            >
              ← Vorig deel
            </button>
            <button
              onClick={() => stepIdx + 1 < totalSteps && goToStep(stepIdx + 1)}
              disabled={stepIdx + 1 >= totalSteps}
              style={{
                flex: 1, padding: "8px 12px",
                background: stepIdx + 1 >= totalSteps ? "rgba(255,255,255,0.04)" : "rgba(91,134,184,0.18)",
                border: `1px solid ${stepIdx + 1 >= totalSteps ? "rgba(255,255,255,0.06)" : "rgba(91,134,184,0.4)"}`,
                borderRadius: 10,
                color: stepIdx + 1 >= totalSteps ? "rgba(255,255,255,0.25)" : C.text,
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700,
                cursor: stepIdx + 1 >= totalSteps ? "not-allowed" : "pointer",
                transition: "background 0.15s",
              }}
            >
              Volgend deel →
            </button>
          </div>
        )}
      </div>

      <div style={{ padding: "10px 18px 28px" }}>
        {/* Eyebrow — geeft context (vak · stap-info) zonder lawaai. Patroon
            geleerd van Khan/BBC Bitesize/Brilliant: kleine caps boven titel. */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 8,
          marginTop: 8,
          marginBottom: 4,
        }}>
          <div style={{
            fontFamily: "var(--font-display)",
            fontSize: 11,
            fontWeight: 700,
            color: C.good,
            letterSpacing: 1.6,
            textTransform: "uppercase",
          }}>
            {(SUBJECTS[path.subject]?.title || path.subject || BRAND.name)} · deel {stepIdx + 1} / {totalSteps}
          </div>
          {/* Markeer voltooid — agency voor leerling (les leersnel). Alleen
              tijdens lezen, niet midden in een check. Stap blijft natuurlijk
              ook automatisch voltooid bij correct antwoord. */}
          {mode === "reading" && !completedSteps.has(stepIdx) && (
            <button
              onClick={completeStep}
              style={{
                background: "transparent",
                border: `1px solid ${C.border}`,
                color: C.muted,
                fontFamily: "var(--font-body)",
                fontSize: 11,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "color 150ms ease, border-color 150ms ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.good;
                e.currentTarget.style.borderColor = C.good;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = C.muted;
                e.currentTarget.style.borderColor = C.border;
              }}
              aria-label="Markeer deze stap als voltooid"
            >
              ✓ Markeer voltooid
            </button>
          )}
          {mode === "reading" && completedSteps.has(stepIdx) && (
            <span style={{
              fontFamily: "var(--font-body)",
              fontSize: 11,
              fontWeight: 600,
              color: C.good,
              padding: "4px 10px",
              borderRadius: 999,
              background: "rgba(0,200,83,0.12)",
              border: `1px solid rgba(0,200,83,0.30)`,
              whiteSpace: "nowrap",
            }}>
              ✓ Voltooid
            </span>
          )}
        </div>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--color-text-strong)", margin: "4px 0 6px" }}>
          {stepIdx + 1}. {step.title}
        </h2>

        {(mode === "reading" || mode === "stepDone") && (
          <>
            {step.illustrationComponent
              ? <step.illustrationComponent />
              : <SvgFigure svg={step.svg} />}
            <Explanation text={step.explanation} />
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
              <YoutubeZoekKnop pathTitle={path.title} stepTitle={step.title} subject={path.subject} />
              <button
                type="button"
                onClick={() => setShowTutor(true)}
                style={tutorButtonStyle()}
                aria-label="Vraag aan de AI-leerbegeleider"
              >
                <span style={{ fontSize: 16 }}>💬</span>
                Vraag aan de leerbegeleider
              </button>
            </div>
          </>
        )}

        {mode === "reading" && (
          <button onClick={startCheck} style={btnPrimary()}>
            {checks.length > 0 ? "Naar de check ▶" : "Volgend deel ▶"}
          </button>
        )}

        {mode === "checking" && step.interactiveComponent && interactive3DEnabled() && (
          <div style={cardStyle()}>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 6 }}>
              Interactieve check {attempts > 1 ? `· poging ${attempts}` : ""}
            </div>
            <step.interactiveComponent onAnswer={handleInteractiveAnswer} />
          </div>
        )}

        {/* S3 audit-3: bij flag VITE_HIDE_3D_IN_PATHS=true skipt 3D-render
            naar de standaard-check (currentCheck). Bestaande modellen blijven
            in code maar renderen niet — bespaart Three.js-bundle voor PO. */}
        {mode === "checking" && step.interactiveComponent && !interactive3DEnabled() && !currentCheck && (
          <div style={cardStyle()}>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 6 }}>
              Interactieve 3D-check
            </div>
            <div style={{ padding: "12px 14px", borderRadius: 10, background: "rgba(255,213,79,0.08)", border: "1px solid rgba(255,213,79,0.30)", color: "rgba(255,255,255,0.7)", fontSize: 13, lineHeight: 1.5 }}>
              ⏸ De interactieve 3D-versie van deze check staat tijdelijk uit.
              Lees de uitleg van de stap nog eens en klik dan 'Stap voltooid' onderin.
            </div>
            <button
              onClick={() => handleInteractiveAnswer(true)}
              style={{ marginTop: 12, padding: "10px 16px", borderRadius: 10, border: "none", background: C.good, color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer" }}
            >
              ✓ Stap voltooid
            </button>
          </div>
        )}

        {mode === "checking" && !step.interactiveComponent && currentCheck && (
          <div style={cardStyle()}>
            <div style={{ fontSize: 13, color: C.muted, marginBottom: 6 }}>
              Check {checkIdx + 1} van {checks.length} {attempts > 1 ? `· poging ${attempts}` : ""}
            </div>
            <ExamenBronBanner examenBron={currentCheck.examenBron} />
            {/* VoorkennisKeten POC (Mark 2026-05-14): toont leerlijn naar examenvraag.
                Alleen tonen in oefen-modus (LearnPath = oefen, PlayQuiz examen-mode
                verbergt hints elders). */}
            {Array.isArray(currentCheck.voorkennisKeten) && currentCheck.voorkennisKeten.length > 0 && (
              <VoorkennisKeten keten={currentCheck.voorkennisKeten} onJumpToPath={onPickPath} everSeenIds={seenIds} />
            )}

            {currentCheck.bronTekst && (
              <div style={{
                background: "rgba(255,107,53,0.06)",
                border: "1px solid rgba(255,107,53,0.30)",
                borderRadius: 10,
                marginBottom: 12,
                padding: "10px 12px",
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#ff8c5a", marginBottom: 6 }}>
                  📑 Bron — {currentCheck.bronTekst.titel || "informatiebron"}
                </div>
                {currentCheck.bronTekst.tableData?.rows && (
                  <div style={{ overflowX: "auto", marginBottom: 8 }}>
                    <table style={{
                      borderCollapse: "collapse",
                      width: "100%",
                      fontSize: 12,
                      color: "var(--color-text)",
                    }}>
                      {currentCheck.bronTekst.tableData.headers && (
                        <thead>
                          <tr>
                            {currentCheck.bronTekst.tableData.headers.map((h, i) => (
                              <th key={i} style={{
                                border: "1px solid rgba(255,107,53,0.35)",
                                padding: "6px 10px",
                                background: "rgba(255,107,53,0.12)",
                                fontWeight: 700,
                                textAlign: i === 0 ? "left" : "right",
                              }}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                      )}
                      <tbody>
                        {currentCheck.bronTekst.tableData.rows.map((row, ri) => (
                          <tr key={ri}>
                            {row.map((cell, ci) => (
                              <td key={ci} style={{
                                border: "1px solid rgba(255,107,53,0.25)",
                                padding: "5px 10px",
                                textAlign: ci === 0 ? "left" : "right",
                                fontWeight: ci === 0 ? 600 : 400,
                                background: ri % 2 ? "rgba(255,107,53,0.03)" : "transparent",
                              }}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {currentCheck.bronTekst.body && (
                  <div style={{
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: "var(--color-text)",
                    whiteSpace: "pre-wrap",
                    maxHeight: "30vh",
                    overflowY: "auto",
                  }}>
                    {currentCheck.bronTekst.body}
                  </div>
                )}
              </div>
            )}
            {step.explanation && (
              <div style={{ marginBottom: 12 }}>
                <button
                  onClick={() => setShowTekstHerlees((v) => !v)}
                  style={{
                    padding: "8px 12px",
                    background: "rgba(91,134,184,0.10)",
                    border: "1px dashed rgba(91,134,184,0.40)",
                    borderRadius: 8,
                    color: "#5b86b8",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "left",
                  }}
                  aria-expanded={showTekstHerlees}
                >
                  {showTekstHerlees ? "▼ Verberg tekst" : "📖 Terug naar de tekst"}
                </button>
                {showTekstHerlees && (
                  <div
                    style={{
                      marginTop: 8,
                      padding: "12px 14px",
                      background: "rgba(91,134,184,0.05)",
                      border: "1px solid rgba(91,134,184,0.25)",
                      borderRadius: 8,
                      fontSize: 13,
                      lineHeight: 1.55,
                      maxHeight: "45vh",
                      overflowY: "auto",
                      color: "var(--color-text)",
                    }}
                  >
                    <MdInline text={step.explanation} />
                  </div>
                )}
              </div>
            )}
            <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-text-strong)", marginBottom: 14 }}>
              <MdInline text={currentCheck.q} />
            </div>
            {selected === null && (currentCheck.uitlegPad || currentCheck.leerpadLink) && (
              <div style={{ marginBottom: 14 }}>
                {!showUitlegPad && (
                  <button
                    onClick={() => setShowUitlegPad(true)}
                    style={{
                      padding: "10px 14px",
                      background: "rgba(66,165,245,0.10)",
                      border: "1px dashed rgba(66,165,245,0.45)",
                      borderRadius: 8,
                      color: "#5db3ff",
                      fontWeight: 600,
                      fontSize: 13,
                      fontFamily: "var(--font-display)",
                      cursor: "pointer",
                      width: "100%",
                      textAlign: "left",
                    }}
                  >
                    ❓ Ik begrijp de vraag niet — help mij
                  </button>
                )}
                {showUitlegPad && currentCheck.uitlegPad && (
                  <VraagUitlegPad
                    uitlegPad={currentCheck.uitlegPad}
                    vraagId={`${pathId}__${stepIdx}__${realCheckIdx}`}
                    onClose={() => setShowUitlegPad(false)}
                  />
                )}
                {showUitlegPad && !currentCheck.uitlegPad && currentCheck.leerpadLink && (
                  <div style={{
                    marginTop: 8,
                    padding: "10px 14px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(66,165,245,0.20)",
                    borderRadius: 8,
                    fontSize: 13,
                    lineHeight: 1.5,
                    color: "var(--color-text)",
                  }}>
                    <div style={{ marginBottom: 10 }}>
                      In het leerpad <strong>{currentCheck.leerpadLink.title}</strong> wordt dit onderwerp uitgelegd.
                    </div>
                    {onPickPath && (
                      <button
                        onClick={() => onPickPath(currentCheck.leerpadLink.id)}
                        style={{
                          padding: "8px 14px",
                          background: "#42a5f5",
                          color: "#0f1729",
                          border: 0,
                          borderRadius: 8,
                          fontWeight: 700,
                          fontFamily: "var(--font-display)",
                          cursor: "pointer",
                          fontSize: 13,
                        }}
                      >
                        📚 Open leerpad: {currentCheck.leerpadLink.title}
                      </button>
                    )}
                  </div>
                )}
              </div>
            )}
            {currentCheck.options.map((opt, i) => {
              const isSelected = selected === i;
              const isCorrect = selected !== null && i === currentCheck.answer;
              return (
                <button
                  key={i}
                  onClick={() => handlePick(i)}
                  disabled={selected !== null}
                  style={optionStyle(isSelected, isCorrect, selected !== null)}
                >
                  {opt}
                </button>
              );
            })}
            {selected !== null && selected === currentCheck.answer && (
              <div style={{
                marginTop: 14,
                padding: "10px 14px",
                borderRadius: 10,
                background: "rgba(0,200,83,0.14)",
                border: "1px solid rgba(0,200,83,0.45)",
                color: "#2ecc71",
                fontWeight: 700,
                fontSize: 15,
                display: "flex",
                alignItems: "center",
                gap: 8,
                animation: "slideUp 0.2s ease",
              }}>
                <span aria-hidden="true">✅</span>
                <span>Dat is juist!</span>
              </div>
            )}
            {selected !== null && currentCheck.examenBron && currentCheck.explanation && (
              <details style={{ marginTop: 10 }}>
                <summary style={{
                  cursor: "pointer",
                  padding: "8px 12px",
                  background: "rgba(255,213,79,0.10)",
                  border: "1px solid rgba(255,213,79,0.35)",
                  borderRadius: 8,
                  color: "#ffd54f",
                  fontWeight: 700,
                  fontSize: 13,
                  fontFamily: "var(--font-display)",
                  listStyle: "none",
                }}>
                  📖 Leg uit (officiële uitleg uit correctievoorschrift)
                </summary>
                <div style={{
                  marginTop: 8,
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,213,79,0.20)",
                  borderRadius: 8,
                  fontSize: 13,
                  lineHeight: 1.5,
                  whiteSpace: "pre-wrap",
                  color: "var(--color-text)",
                }}>
                  {currentCheck.explanation}
                </div>
              </details>
            )}
          </div>
        )}

        {mode === "wrong" && currentCheck && (
          <div style={cardStyle(C.bad)}>
            <div style={{ fontSize: 18, fontWeight: 700, color: C.bad, marginBottom: 8 }}>
              ❌ Nog niet helemaal
            </div>
            <div style={{ fontSize: 14, color: C.text, marginBottom: 6, lineHeight: 1.5 }}>
              {currentCheck.wrongHints?.[selected] || "Probeer het nog eens, kijk goed naar de uitleg hierboven."}
            </div>
            {/* Begrijpend-lezen: laat de plek in de tekst zien waar het
                antwoord vandaan komt (Mark feedback 2026-05-08). */}
            <EvidenceQuote text={currentCheck.evidence} label="💡 Hint — kijk hier in de tekst" />
            {currentCheck.uitlegPad && !showUitlegPad && (
              <button
                onClick={() => setShowUitlegPad(true)}
                style={{ ...btnPrimary(), marginTop: 14 }}
              >
                📚 Hier is de uitleg
              </button>
            )}
            {currentCheck.uitlegPad && showUitlegPad && (
              <VraagUitlegPad
                uitlegPad={currentCheck.uitlegPad}
                vraagId={`${pathId}__${stepIdx}__${realCheckIdx}`}
                onClose={() => setShowUitlegPad(false)}
              />
            )}
            <button onClick={() => setMode("reading")} style={{ ...btnSecondary(), marginTop: 14 }}>
              📖 Lees uitleg opnieuw
            </button>
            <button
              onClick={() => setShowTutor(true)}
              style={{ ...btnSecondary(), marginTop: 8 }}
            >
              💬 Vraag aan de leerbegeleider
            </button>
            {/* Chrome-Claude V2 review 2026-05-15: twee primaire groene CTA's
                concurreerden ("Hier is de uitleg" + "Probeer opnieuw"). Bij
                uitlegPad-vragen is de uitleg het didactische primary —
                "Probeer opnieuw" wordt secondary zodat de leerling EERST leest.
                Bij vragen zonder uitlegPad blijft "Probeer opnieuw" wel
                primary (anders is er geen CTA). */}
            <button
              onClick={tryAgain}
              style={{
                ...(currentCheck.uitlegPad ? btnSecondary() : btnPrimary()),
                marginTop: 8,
              }}
            >
              🔁 Probeer opnieuw
            </button>
            {/* A3 (10-agent circulariteit 2026-05-10): leerpadLink altijd zichtbaar
                in wrong-mode — niet verstopt achter "Ik begrijp niet"-knop. */}
            {currentCheck.leerpadLink && onPickPath && (
              <button
                onClick={() => onPickPath(currentCheck.leerpadLink.id)}
                style={{ ...btnSecondary(), marginTop: 8 }}
              >
                📚 Open leerpad: {currentCheck.leerpadLink.title}
              </button>
            )}
          </div>
        )}

        {mode === "correctEvidence" && currentCheck && (
          <CorrectEvidenceCard
            evidence={currentCheck.evidence}
            isLast={checkIdx + 1 >= checks.length}
            onAdvance={advanceAfterEvidence}
          />
        )}

        {mode === "stepDone" && !showMiniQuiz && (
          <>
            {/* Sucess-banner — kort, links uitgelijnd zonder kader-stress */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "12px 14px",
              borderRadius: 12,
              background: "rgba(0,200,83,0.10)",
              border: `1px solid rgba(0,200,83,0.30)`,
              marginTop: 16,
              marginBottom: 14,
            }}>
              <span style={{ fontSize: 18 }}>✅</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 700, color: C.good }}>
                  Stap {stepIdx + 1} voltooid!
                </div>
                <div style={{ fontSize: 13, color: C.text, marginTop: 2 }}>
                  {stepIdx + 1 < totalSteps
                    ? "Goed bezig. Wat wil je nu?"
                    : "Helemaal klaar — laatste stap geweest!"}
                </div>
              </div>
            </div>

            {/* Stof begrepen?-eindblok (les van Leersnel) — 3 kaarten met
                eyebrow-tags ipv 3 stacked buttons. Visuele rolverdeling. */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: 10,
            }}>
              <NextStepCard
                eyebrow="Zelf testen"
                title="Mini-toets"
                hint="3 vragen over deze stap"
                accent={C.warm}
                onClick={() => setShowMiniQuiz(true)}
              />
              {stepIdx + 1 < totalSteps && (
                <NextStepCard
                  eyebrow="Volgend deel"
                  title={`${stepIdx + 2}. ${path.steps[stepIdx + 1]?.title || "Verder"}`}
                  hint="Doorgaan met dit onderwerp"
                  accent={C.good}
                  primary
                  onClick={goNext}
                />
              )}
              <NextStepCard
                eyebrow="Overzicht"
                title="Terug naar paden"
                hint="Andere stap kiezen"
                accent={C.muted}
                onClick={() => setMode("overview")}
              />
            </div>
          </>
        )}

        <AITutor
          open={showTutor}
          onClose={() => setShowTutor(false)}
          pathTitle={path.title}
          pathId={pathId}
          stepTitle={step.title}
          stepIdx={stepIdx}
          stepExplanation={step.explanation}
          currentCheck={currentCheck}
          lastWrongAnswer={lastWrongAnswer}
        />

        {mode === "stepDone" && showMiniQuiz && (
          <div style={cardStyle(C.good)}>
            <MiniQuiz
              subject={path.subject || "wiskunde"}
              level={path.level || "klas1-vwo"}
              topicLabel={`${path.title} — ${step.title}`}
              count={3}
              onClose={() => setShowMiniQuiz(false)}
              pathId={path.id}
              playerName={userName}
              onLessonReturn={() => {
                setShowMiniQuiz(false);
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

function Overview({ path, completedSteps, firstUnfinishedIdx, progressPct, onPickStep, onBack, onHome, loaded, wrongPerStep }) {
  // Sneltrack: detecteer een examenstijl-stap zodat leerlingen die morgen
  // toets hebben direct naar de kern kunnen springen (audit 2026-05-06,
  // 14-jr-havo-feedback "ik scroll, ik wil niet lezen, ik heb morgen toets").
  const examStepIdx = path.steps.findIndex(s => /examen/i.test(s.title));
  const hasExamShortcut = examStepIdx >= 0;
  const examChecks = hasExamShortcut ? (path.steps[examStepIdx]?.checks?.length || 0) : 0;

  return (
    <div style={pageStyle()}>
      <Header onBack={onBack} onHome={onHome} title={path.title} emoji={path.emoji} />

      <div style={{ padding: "16px 18px 8px" }}>
        {/* Mark feedback 2026-05-12: pad-intro bij examen-paden moet
            'gele-markeerstift-look' krijgen. Detecteer aan id-prefix. */}
        {path.id && path.id.startsWith("examen-") ? (
          <ExamenPadBanner intro={path.intro} padTitle={path.title} />
        ) : (
          <p style={{ color: C.text, fontSize: 14, lineHeight: 1.5, margin: "4px 0 14px" }}>
            {path.intro}
          </p>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 13, color: C.muted }}>
          <span>{completedSteps.size} van {path.steps.length} delen voltooid</span>
          <span>{progressPct}%</span>
        </div>
        <div style={{ height: 10, background: "#1a2744", borderRadius: 999, overflow: "hidden", marginBottom: 16 }}>
          <div
            style={{
              height: "100%",
              width: `${progressPct}%`,
              background: `linear-gradient(90deg, ${C.good}, ${C.warm})`,
              transition: "width 0.4s",
            }}
          />
        </div>

        {/* Sneltrack-knop voor leerlingen met morgen toets — bóven de
            'Doorgaan'-knop omdat de 14-jr-havo-doelgroep daar het eerst
            naar zoekt (audit 2 Q3). Toont concrete vraag-aantal-belofte. */}
        {hasExamShortcut && (
          <button
            onClick={() => onPickStep(examStepIdx)}
            style={{
              width: "100%",
              padding: "14px 16px",
              marginBottom: 12,
              borderRadius: 14,
              border: "2px solid rgba(255,140,66,0.55)",
              background: "linear-gradient(135deg, rgba(255,107,53,0.18), rgba(255,140,66,0.08))",
              color: "#ff8c42",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 12,
              textAlign: "left",
            }}
          >
            <span style={{ fontSize: 22 }} aria-hidden="true">⏱️</span>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 15 }}>Toets morgen? Spring direct naar examenstijl</div>
              <div style={{ fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 600, color: "rgba(255,140,66,0.85)", marginTop: 2 }}>
                {examChecks > 0 ? `${examChecks} ${examChecks === 1 ? "examenvraag" : "examenvragen"} · ~5 min` : "~5 min"}
              </div>
            </div>
            <span style={{ fontSize: 18, color: "rgba(255,140,66,0.7)" }}>›</span>
          </button>
        )}

        {loaded && firstUnfinishedIdx !== null && (
          <button
            onClick={() => onPickStep(firstUnfinishedIdx)}
            style={{
              ...btnPrimary(),
              marginTop: 0,
              marginBottom: 18,
              padding: "16px 18px",
              fontSize: 15,
            }}
          >
            {completedSteps.size === 0
              ? `🚀 Begin bij deel 1`
              : `▶ Doorgaan: deel ${firstUnfinishedIdx + 1} — ${path.steps[firstUnfinishedIdx].title}`}
          </button>
        )}
        {loaded && firstUnfinishedIdx === null && (
          <div style={{ ...cardStyle(C.good), marginTop: 0, marginBottom: 18, textAlign: "center" }}>
            <div style={{ fontSize: 32, marginBottom: 6 }}>🎉</div>
            <div style={{ fontWeight: 700, color: C.good, marginBottom: 4 }}>Alles voltooid!</div>
            <div style={{ fontSize: 13, color: C.muted }}>
              Je kunt elke stap nog eens herhalen door erop te klikken hieronder.
            </div>
          </div>
        )}
      </div>

      <div style={{ padding: "0 14px 32px" }}>
        {path.chapters.map((ch) => {
          const stepsInCh = [];
          for (let i = ch.from; i <= ch.to; i++) stepsInCh.push(i);
          const doneCount = stepsInCh.filter((i) => completedSteps.has(i)).length;
          const allDone = doneCount === stepsInCh.length;
          return (
            <div
              key={ch.letter}
              style={{
                marginBottom: 16,
                background: "rgba(20,30,50,0.5)",
                borderRadius: 14,
                border: `1px solid ${allDone ? C.good : C.border}`,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "12px 16px",
                  borderBottom: `1px solid ${C.border}`,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  background: allDone ? "rgba(0,200,83,0.06)" : "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: allDone ? C.good : C.accent,
                    color: "var(--color-text-strong)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: 16,
                  }}
                >
                  {ch.letter}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 16, color: "var(--color-text-strong)" }}>
                    {ch.emoji} {ch.title}
                  </div>
                  <div style={{ fontSize: 12, color: C.muted }}>
                    {doneCount}/{stepsInCh.length} delen{allDone ? " — voltooid" : ""}
                  </div>
                </div>
              </div>
              {(() => {
                const repSvg = stepsInCh.map((i) => path.steps[i]?.svg).find((s) => s);
                if (!repSvg) return null;
                const sizedSvg = repSvg.replace(
                  /<svg\b([^>]*)>/i,
                  (m, attrs) => {
                    const cleaned = attrs.replace(/\s(width|height|style)="[^"]*"/g, "");
                    return `<svg${cleaned} style="height:100%;width:auto;display:block;">`;
                  }
                );
                return (
                  <div
                    style={{
                      margin: "10px 12px 4px",
                      padding: 6,
                      background: "#0a1424",
                      border: `1px solid ${C.border}`,
                      borderRadius: 10,
                      height: 96,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      opacity: allDone ? 0.55 : 1,
                    }}
                  >
                    <div
                      style={{ height: "100%", display: "flex", alignItems: "center" }}
                      dangerouslySetInnerHTML={{ __html: sanitizeSvg(sizedSvg) }}
                    />
                  </div>
                );
              })()}
              <div style={{ padding: "8px 8px" }}>
                {stepsInCh.map((idx) => {
                  const s = path.steps[idx];
                  const done = completedSteps.has(idx);
                  const isNext = idx === firstUnfinishedIdx;
                  const wrongCount = wrongPerStep?.[idx] || 0;
                  return (
                    <button
                      key={idx}
                      onClick={() => onPickStep(idx)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 10,
                        width: "100%",
                        textAlign: "left",
                        padding: "10px 12px",
                        background: isNext ? "rgba(0,200,83,0.10)" : "transparent",
                        border: "none",
                        borderRadius: 10,
                        color: C.text,
                        fontFamily: "var(--font-body)",
                        fontSize: 14,
                        cursor: "pointer",
                        marginBottom: 3,
                      }}
                      onMouseOver={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                      onMouseOut={(e) => (e.currentTarget.style.background = isNext ? "rgba(0,200,83,0.10)" : "transparent")}
                    >
                      <span style={{ fontSize: 16, width: 20, textAlign: "center" }}>
                        {done ? "✅" : isNext ? "🔵" : "⚪"}
                      </span>
                      <span style={{ color: C.muted, minWidth: 22, fontSize: 12, fontWeight: 700 }}>
                        {idx + 1}.
                      </span>
                      <span style={{ flex: 1, color: done ? C.muted : "var(--color-text-strong)", fontWeight: isNext ? 700 : 500 }}>
                        {s.title}
                      </span>
                      {wrongCount > 0 && (
                        <span
                          title={`${wrongCount} ${wrongCount === 1 ? "vraag" : "vragen"} om te herhalen`}
                          style={{
                            fontSize: 11,
                            fontWeight: 700,
                            padding: "3px 8px",
                            borderRadius: 999,
                            background: "rgba(255,140,66,0.18)",
                            color: "#ffb074",
                            border: "1px solid rgba(255,140,66,0.4)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          🔁 {wrongCount}
                        </span>
                      )}
                      {s.emoji && (
                        <span style={{ fontSize: 16, marginLeft: 4, opacity: done ? 0.55 : 0.95 }}>
                          {s.emoji}
                        </span>
                      )}
                      <span style={{ color: C.muted, fontSize: 14 }}>›</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function AllDone({ path, onHome, onBackToOverview, score, nextPath, onPickPath, examRefs }) {
  // A6: toon score + suggestie volgend examen-/leerpad.
  const pct = score?.total > 0 ? Math.round((score.correct / score.total) * 100) : null;
  const isExamen = (path.id || "").startsWith("examen-");
  return (
    <div style={{ textAlign: "center", padding: "30px 12px" }}>
      <div style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>
      <h2 style={{ fontFamily: "var(--font-display)", fontSize: 26, color: "var(--color-text-strong)", marginBottom: 8 }}>
        Knap gedaan!
      </h2>
      <div style={{ color: C.text, fontSize: 16, marginBottom: 16, lineHeight: 1.5 }}>
        Je hebt het hele leerpad <strong>{path.title}</strong> doorlopen.
      </div>
      {score && score.total > 0 && (
        <div style={{
          marginBottom: 20,
          padding: "12px 16px",
          background: pct >= 70 ? "rgba(0,200,83,0.10)" : "rgba(255,213,79,0.10)",
          border: `1px solid ${pct >= 70 ? "rgba(0,200,83,0.40)" : "rgba(255,213,79,0.40)"}`,
          borderRadius: 12,
          color: "var(--color-text-strong)",
          fontSize: 15,
          fontWeight: 700,
        }}>
          Je had <span style={{ fontSize: 20 }}>{score.correct}</span> van de {score.total} vragen meteen goed
          <span style={{ display: "block", fontSize: 12, fontWeight: 500, marginTop: 2, color: C.muted }}>
            {pct}% — {pct >= 90 ? "uitstekend" : pct >= 70 ? "goed bezig" : "blijf herhalen"}
          </span>
        </div>
      )}
      {nextPath && onPickPath && (
        <button
          onClick={() => onPickPath(nextPath.id)}
          style={{ ...btnPrimary(), marginBottom: 8, width: "100%" }}
        >
          {isExamen ? "🎓 Volgend examen ▶" : "📚 Volgend leerpad ▶"} {nextPath.title}
        </button>
      )}
      {/* A9: voor Pincode/leer-paden — toon examen-vragen die naar dit pad linken. */}
      {Array.isArray(examRefs) && examRefs.length > 0 && onPickPath && (
        <div style={{
          marginTop: 14,
          padding: "12px 14px",
          background: "rgba(255,213,79,0.08)",
          border: "1px solid rgba(255,213,79,0.40)",
          borderRadius: 12,
          textAlign: "left",
        }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: "#ffd54f", marginBottom: 8, fontFamily: "var(--font-display)" }}>
            🎓 {examRefs.length} echte examenvra{examRefs.length === 1 ? "ag" : "gen"} over deze stof
          </div>
          {Array.from(new Set(examRefs.map((r) => r.examPathId))).slice(0, 3).map((examPathId) => {
            const ref = examRefs.find((r) => r.examPathId === examPathId);
            const count = examRefs.filter((r) => r.examPathId === examPathId).length;
            return (
              <button
                key={examPathId}
                onClick={() => onPickPath(examPathId)}
                style={{
                  width: "100%",
                  marginTop: 6,
                  padding: "8px 12px",
                  background: "rgba(255,213,79,0.12)",
                  border: "1px solid rgba(255,213,79,0.30)",
                  borderRadius: 8,
                  color: "var(--color-text-strong)",
                  fontSize: 13,
                  fontWeight: 600,
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                ▶ {ref.examPathTitle} ({count} {count === 1 ? "vraag" : "vragen"})
              </button>
            );
          })}
        </div>
      )}
      <button onClick={onBackToOverview} style={{ ...btnSecondary(), width: "100%" }}>
        📋 Terug naar overzicht
      </button>
      <button onClick={onHome} style={{ ...btnSecondary(), marginTop: 8, width: "100%" }}>
        🏠 Naar mijn hub
      </button>
    </div>
  );
}

/** Kaart voor het "Stof begrepen?"-eindblok na een voltooide stap. Drie
 *  varianten worden naast elkaar getoond met eyebrow-tags zodat de
 *  rolverdeling (testen / doorgaan / overzicht) meteen zichtbaar is. */
function NextStepCard({ eyebrow, title, hint, accent, primary = false, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: primary ? "rgba(0,200,83,0.10)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${primary ? "rgba(0,200,83,0.40)" : C.border}`,
        borderRadius: 12,
        padding: "12px 14px",
        textAlign: "left",
        cursor: "pointer",
        color: C.text,
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        transition: "border-color 150ms ease, transform 150ms ease, background 150ms ease",
        minHeight: 96,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.style.transform = "translateY(-1px)";
        if (!primary) e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = primary ? "rgba(0,200,83,0.40)" : C.border;
        e.currentTarget.style.transform = "translateY(0)";
        if (!primary) e.currentTarget.style.background = "rgba(255,255,255,0.03)";
      }}
    >
      <span style={{
        fontFamily: "var(--font-display)",
        fontSize: 10,
        fontWeight: 700,
        color: accent,
        letterSpacing: 1.4,
        textTransform: "uppercase",
      }}>
        {eyebrow}
      </span>
      <span style={{
        fontFamily: "var(--font-display)",
        fontSize: 14,
        fontWeight: 700,
        color: "var(--color-text-strong)",
        lineHeight: 1.25,
        // Lange volgende-stap-titels niet over heel de pagina laten lopen
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
      }}>
        {title}
      </span>
      <span style={{
        fontSize: 11,
        color: C.muted,
      }}>
        {hint}
      </span>
    </button>
  );
}

function Header({ onBack, onHome, title, emoji, backLabel }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "14px 18px",
        borderBottom: `1px solid ${C.border}`,
      }}
    >
      <button onClick={onBack || onHome} style={iconBtn()} title={backLabel || "Terug"}>
        ←{backLabel ? <span style={{ fontSize: 12, marginLeft: 4 }}>{backLabel}</span> : null}
      </button>
      <div style={{ fontSize: 22 }}>{emoji}</div>
      <div style={{ flex: 1, fontFamily: "var(--font-display)", fontSize: 18, color: "var(--color-text-strong)" }}>{title}</div>
      <button onClick={onHome} style={iconBtn()}>🏠</button>
    </div>
  );
}

// ─── stijlen ─────────────────────────────────────────
function pageStyle() {
  return {
    minHeight: "100dvh",
    background: "linear-gradient(160deg, #0f1729 0%, #162033 50%, #1a2744 100%)",
    color: C.text,
    fontFamily: "var(--font-body)",
  };
}

function cardStyle(borderColor) {
  return {
    background: C.card,
    border: `2px solid ${borderColor || C.border}`,
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
  };
}

function btnPrimary() {
  return {
    width: "100%",
    padding: "14px 18px",
    border: "none",
    borderRadius: 14,
    background: `linear-gradient(135deg, ${C.good}, #00a040)`,
    color: "var(--color-text-strong)",
    fontWeight: 700,
    fontSize: 16,
    fontFamily: "var(--font-display)",
    cursor: "pointer",
    marginTop: 16,
    boxShadow: "0 4px 16px rgba(0,200,83,0.3)",
  };
}

function btnSecondary() {
  return {
    width: "100%",
    padding: "12px 18px",
    border: `2px solid ${C.border}`,
    borderRadius: 14,
    background: "transparent",
    color: C.text,
    fontWeight: 700,
    fontSize: 15,
    fontFamily: "var(--font-display)",
    cursor: "pointer",
    minHeight: 44,  // A5: Apple HIG tap-target floor
  };
}

/** Knop "Vraag aan de tutor" — naast de YouTube-knop op de step-pagina.
 *  Visueel onderscheidend (groen-getinte chat-uitstraling) zonder de
 *  primary-CTA te zijn. */
function tutorButtonStyle() {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
    marginBottom: 6,
    padding: "9px 14px",
    background: "linear-gradient(135deg, rgba(0,200,83,0.18), rgba(0,200,83,0.10))",
    border: "1px solid rgba(0,200,83,0.45)",
    borderRadius: 12,
    color: "#69F0AE",
    fontFamily: "var(--font-display)",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 2px 10px rgba(0,200,83,0.15)",
  };
}

function iconBtn() {
  return {
    border: "none",
    background: "transparent",
    color: C.text,
    fontSize: 18,
    cursor: "pointer",
    padding: "6px 8px",
    fontFamily: "var(--font-body)",
    display: "inline-flex",
    alignItems: "center",
  };
}

function optionStyle(selected, isCorrectChoice, locked) {
  let bg = "#1e2d45";
  let border = C.border;
  if (selected) {
    if (isCorrectChoice) {
      bg = "rgba(0,200,83,0.18)";
      border = C.good;
    } else {
      bg = "rgba(255,82,82,0.18)";
      border = C.bad;
    }
  }
  return {
    display: "block",
    width: "100%",
    textAlign: "left",
    padding: "12px 14px",
    border: `2px solid ${border}`,
    borderRadius: 12,
    background: bg,
    color: C.text,
    fontFamily: "var(--font-body)",
    fontSize: 15,
    fontWeight: 600,
    marginBottom: 8,
    cursor: locked ? "default" : "pointer",
    opacity: locked && !selected ? 0.55 : 1,
    transition: "all 0.2s",
  };
}

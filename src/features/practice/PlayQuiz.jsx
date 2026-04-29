import { useState, useEffect, useRef } from "react";
import styles from "../../styles.js";
import { SUBJECTS } from "../../constants.js";
import { SoundEngine, track } from "../../utils.js";
import { findLearnPathForQuestion } from "../../learnPaths/index.js";
import { categoryToLearnSubjects } from "../../learnPaths/subjectMapping.js";
import { recordAnswer as recordMasteryAnswer } from "../mastery/mastery.js";

// Anti-game: minimaal aantal ms tussen tonen vraag en eerste klik op antwoord.
// Voorkomt zinloos doorklikken voor leaderboard-snelheid; verstoort echt
// nadenken niet (1.5 sec is sneller dan een mens die de vraag echt leest).
const MIN_READ_MS = 1500;

export default function PlayQuiz({ gameState, setGameState, onFinish, onQuit, onHome, onLearnPathRequest, userName = null }) {
  const noTimer = !gameState.timePerQuestion || gameState.timePerQuestion === 0;

  // Drop-off tracking: trigger 'quiz_first_question_seen' bij eerste mount
  useEffect(() => {
    if (gameState.currentQ === 0) {
      track("quiz_first_question_seen", {
        subject: gameState.quiz?.subject,
        level: gameState.quiz?.level,
        total_questions: gameState.questions?.length,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // beforeunload: track als user wegnavigeert tijdens quiz
  useEffect(() => {
    const onUnload = () => {
      if (gameState && gameState.questions && gameState.currentQ < gameState.questions.length) {
        try {
          window.gtag?.("event", "quiz_abandoned_unload", {
            subject: gameState.quiz?.subject,
            level: gameState.quiz?.level,
            at_question: gameState.currentQ + 1,
            total_questions: gameState.questions.length,
            score_so_far: gameState.score,
          });
        } catch {}
      }
    };
    window.addEventListener("beforeunload", onUnload);
    return () => window.removeEventListener("beforeunload", onUnload);
  }, [gameState]);

  const [timeLeft, setTimeLeft] = useState(noTimer ? 0 : gameState.timePerQuestion);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [scoreAnim, setScoreAnim] = useState(false);
  const [showQuitConfirm, setShowQuitConfirm] = useState(false);
  const [waitingForUser, setWaitingForUser] = useState(false);
  const [timedOut, setTimedOut] = useState(false);
  const [showWrongOverlay, setShowWrongOverlay] = useState(false);
  const [questionImage, setQuestionImage] = useState(null);
  const [elapsed, setElapsed] = useState(0);
  // Anti-game: knoppen 1.5 sec disabled na elke nieuwe vraag.
  const [canAnswer, setCanAnswer] = useState(false);
  const nextStateRef = useRef(null);
  const timerRef = useRef(null);
  const wrongOverlayTimerRef = useRef(null);
  const elapsedRef = useRef(null);

  const question = gameState.questions[gameState.currentQ];
  const isLast = gameState.currentQ === gameState.questions.length - 1;
  const isSelfStudy = gameState.mode === "self" || noTimer;

  const SUBJECT_VIDEOS = {
    rekenen:           "https://www.youtube.com/watch?v=3tDBiUBiUQs",
    taal:              "https://www.youtube.com/watch?v=7cQC6l__Olk",
    spelling:          "https://www.youtube.com/watch?v=pkMclCinI8s",
    woordenschat:      "https://www.youtube.com/watch?v=A8-OO2zMz2c",
    topografie:        "https://www.youtube.com/watch?v=CrrRqy9Ftfc",
    cito:              "https://www.youtube.com/watch?v=i1ZNWnN9MnE",
    aardrijkskunde:    "https://www.youtube.com/watch?v=cc6Fb7rOirU",
    geschiedenis:      "https://www.youtube.com/watch?v=Avqi2aVHMr0",
    natuur:            "https://www.youtube.com/watch?v=Jw1PCm5_LD4",
    biologie:          "https://www.youtube.com/watch?v=3tisOnOkwzo",
    natuurkunde:       "https://www.youtube.com/watch?v=lTb8zkMiUBw",
    scheikunde:        "https://www.youtube.com/watch?v=P1AmvFZpdgM",
    nask:              "https://www.youtube.com/watch?v=deMU7ZXHcm0",
    economie:          "https://www.youtube.com/watch?v=7NAe6BDFikA",
    maatschappijleer:  "https://www.youtube.com/watch?v=LLIH4LE4Wqg",
    levensbeschouwing: "https://www.youtube.com/watch?v=t52oYJ_jgrs",
    maw:               "https://www.youtube.com/watch?v=ijC-KGsik4Y",
    nederlands:        "https://www.youtube.com/watch?v=HUTY2M-mTXs",
    engels:            "https://www.youtube.com/watch?v=UBKq1Ta3y9Q",
    duits:             "https://www.youtube.com/watch?v=g1T8_0azyP8",
    frans:             "https://www.youtube.com/watch?v=ij19pZ6b81Q",
    spaans:            "https://www.youtube.com/watch?v=MPRnPAcxbnA",
    latijn:            "https://www.youtube.com/watch?v=BUwkDL_Kn5k",
    grieks:            "https://www.youtube.com/watch?v=FQVruuXGzzY",
    wiskunde:          "https://www.youtube.com/watch?v=IsCM89GWtKI",
  };
  const TOPIC_VIDEOS = {
    breuken:                          "https://www.youtube.com/watch?v=PYVIS91pnEg",
    procenten:                        "https://www.youtube.com/watch?v=LaT5FrD3UUA",
    "dt-regels":                      "https://www.youtube.com/watch?v=pkMclCinI8s",
    "redactiesommen optellen":        "https://www.youtube.com/watch?v=uW01tKJZajc",
    "redactiesommen aftrekken":       "https://www.youtube.com/watch?v=kpgrrmSncrM",
    "redactiesommen vermenigvuldigen":"https://www.youtube.com/watch?v=4c4vB9pitmo",
    "redactiesommen delen":           "https://www.youtube.com/watch?v=tP2AOLTVLz0",
    "redactiesommen geld":            "https://www.youtube.com/watch?v=oEfRZq_3u_c",
    "redactiesommen tijd":            "https://www.youtube.com/watch?v=fUDFm9gY1Zo",
    "redactiesommen meten":           "https://www.youtube.com/watch?v=47j0hom9q6I",
    "redactiesommen gemengd":         "https://www.youtube.com/watch?v=BiHoP_enVEg",
    "redactiesommen":                 "https://www.youtube.com/watch?v=_3Q6uW77qhU",
    "seksuele voorlichting":          "https://www.youtube.com/watch?v=62EoGEXTtCk",
    "puberteit":                      "https://www.youtube.com/watch?v=wg8dqfQv_hc",
    "roken & drugs":                  "https://www.youtube.com/watch?v=9lRa8eSHGoU",
    "ehbo & eerste hulp":             "https://www.youtube.com/watch?v=ri6pABlNu_w",
    "klimaatverandering":             "https://www.youtube.com/watch?v=LnqB44c76rM",
    "pesten":                         "https://www.youtube.com/watch?v=vfKhcgxUxDo",
    "gezonde voeding":                "https://www.youtube.com/watch?v=GynVcOqPmZw",
    "media & internet":               "https://www.youtube.com/watch?v=YRPLkk_p5uc",
    "begrijpend-lezen":               "https://www.youtube.com/watch?v=KuSsC_3uPQQ",
    verkeer:                          "https://www.youtube.com/watch?v=UxXweobM7RI",
    werkwoorden:                      "https://www.youtube.com/watch?v=Xz95VFNMMBM",
    lidwoorden:                       "https://www.youtube.com/watch?v=p7cgl0NA6p8",
    zinsontleding:                    "https://www.youtube.com/watch?v=TLH6Hx-6LCA",
    leestekens:                       "https://www.youtube.com/watch?v=ywLOStVAFu8",
    hoofdletters:                     "https://www.youtube.com/watch?v=OKUUbXBOkZM",
    kommagetallen:                    "https://www.youtube.com/watch?v=kne6KRjlwzo",
    klokkijken:                       "https://www.youtube.com/watch?v=T_uMCTlUALE",
    meervoud:                         "https://www.youtube.com/watch?v=yPcZ_6knQTk",
    "bijvoeglijk naamwoord":          "https://www.youtube.com/watch?v=xuU62E2HVLA",
    meetkunde:                        "https://www.youtube.com/watch?v=tR4JrzNrDw4",
    algebra:                          "https://www.youtube.com/watch?v=1eHCh_c9Zt8",
    statistiek:                       "https://www.youtube.com/watch?v=UqrxnB7UqvU",
    grafieken:                        "https://www.youtube.com/watch?v=xbuLYgtxhag",
    kansen:                           "https://www.youtube.com/watch?v=ERvx0pngqqc",
    kansrekening:                     "https://www.youtube.com/watch?v=ERvx0pngqqc",
    goniometrie:                      "https://www.youtube.com/watch?v=ys4oP_NMozw",
    vergelijkingen:                   "https://www.youtube.com/watch?v=jE2zC2oQMWM",
    oppervlakte:                      "https://www.youtube.com/watch?v=BQa10SkNJqk",
    differentiaalrekening:            "https://www.youtube.com/watch?v=KIz7tfNqfEQ",
    logaritmen:                       "https://www.youtube.com/watch?v=Dz7W0p2pVOk",
  };

  const getYouTubeUrl = (q) => {
    if (q.youtubeUrl) return q.youtubeUrl;
    const topic = (gameState.quiz?.topic || "").toLowerCase();
    const topicKey = Object.keys(TOPIC_VIDEOS).find(k => topic.includes(k));
    if (topicKey) return TOPIC_VIDEOS[topicKey];
    const subjVideo = SUBJECT_VIDEOS[gameState.quiz?.subject];
    if (subjVideo) return subjVideo;
    // Extract the core topic from the question itself
    const questionText = q.q || "";
    // Use explanation keywords if available, otherwise the question
    const explanation = q.explanation || "";
    
    // Try to extract key math/science terms from the question
    const keywords = questionText
      .replace(/[?!.,;:()]/g, " ")
      .replace(/\b(wat|welke|welk|hoe|waarom|bereken|is|de|het|een|van|voor|met|bij|als|dan|niet|wel|geen|dit|dat|die|deze)\b/gi, "")
      .trim()
      .split(/\s+/)
      .filter(w => w.length > 3)
      .slice(0, 5)
      .join(" ");
    
    const subj = SUBJECTS.find((s) => s.id === gameState.quiz.subject);
    const subjLabel = subj?.label || "";
    const searchQuery = (keywords.trim() ? `${keywords} ${subjLabel}` : subjLabel + " uitleg") .trim().slice(0, 80);

    return `https://www.youtube.com/results?search_query=${encodeURIComponent(searchQuery + " uitleg")}`;
  };

  const goToNext = () => {
    setWaitingForUser(false);
    setShowWrongOverlay(false);
    const ns = nextStateRef.current || gameState;
    if (ns.currentQ >= (ns.questions?.length ?? 0) - 1) onFinish(ns);
    else setGameState({ ...ns, currentQ: ns.currentQ + 1 });
  };

  useEffect(() => {
    setTimeLeft(noTimer ? 0 : gameState.timePerQuestion);
    setSelected(null);
    setShowResult(false);
    setShowExplanation(false);
    setWaitingForUser(false);
    setTimedOut(false);
    setShowWrongOverlay(false);
    setQuestionImage(null);
  }, [gameState.currentQ, gameState.timePerQuestion]);

  useEffect(() => {
    // Direct URL heeft prioriteit boven Wikipedia-zoekopdracht
    if (question?.imageUrl) { setQuestionImage(question.imageUrl); return; }
    const term = question?.imageSearch;
    if (!term) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(`https://nl.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`);
        const data = await res.json();
        const url = data.thumbnail?.source;
        if (!cancelled && url) { setQuestionImage(url); return; }
      } catch {}
      try {
        const res2 = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(term)}`);
        const data2 = await res2.json();
        const url2 = data2.thumbnail?.source;
        if (!cancelled && url2) setQuestionImage(url2);
      } catch {}
    })();
    return () => { cancelled = true; };
  }, [gameState.currentQ]);

  useEffect(() => {
    elapsedRef.current = setInterval(() => {
      setElapsed(Math.round((Date.now() - gameState.startedAt) / 1000));
    }, 1000);
    return () => clearInterval(elapsedRef.current);
  }, [gameState.startedAt]);

  useEffect(() => {
    if (showResult || noTimer) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 4 && t > 1) SoundEngine.play("countdown");
        if (t <= 1) { clearInterval(timerRef.current); handleAnswer(-1); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [gameState.currentQ, showResult, noTimer]);

  // Reset anti-game timer bij elke nieuwe vraag
  useEffect(() => {
    setCanAnswer(false);
    const t = setTimeout(() => setCanAnswer(true), MIN_READ_MS);
    return () => clearTimeout(t);
  }, [gameState.currentQ]);

  const handleAnswer = (idx) => {
    if (showResult) return;
    // Anti-game: blokkeer handmatige antwoorden binnen MIN_READ_MS, maar
    // laat timeout-antwoorden (idx === -1) wel door.
    if (!canAnswer && idx !== -1) return;
    clearInterval(timerRef.current);
    if (idx === -1) setTimedOut(true);
    setSelected(idx);
    setShowResult(true);

    const isCorrect = idx === question.answer;
    if (isCorrect) {
      SoundEngine.play("correct");
      setScoreAnim(true);
      setTimeout(() => setScoreAnim(false), 600);
    } else {
      SoundEngine.play("wrong");
    }
    setShowExplanation(true);

    track("question_answered", { subject: gameState.quiz.subject, level: gameState.quiz.level, question_nr: gameState.currentQ + 1, is_correct: isCorrect, timed_out: idx === -1 });

    // Schrijf prestatie weg in topic_mastery — fire-and-forget.
    if (userName && idx !== -1) {
      recordMasteryAnswer({ playerName: userName, questionText: question?.q, isCorrect }).catch(() => {});
    }
    const newState = {
      ...gameState,
      score: gameState.score + (isCorrect ? 1 : 0),
      answers: [...gameState.answers, { questionIndex: gameState.currentQ, selected: idx, correct: question.answer, isCorrect, timeLeft }],
    };
    setGameState(newState);
    nextStateRef.current = newState;

    if (isSelfStudy) {
      if (isCorrect) {
        setWaitingForUser(true);
      } else {
        wrongOverlayTimerRef.current = setTimeout(() => setShowWrongOverlay(true), 700);
      }
    } else {
      const delay = isCorrect ? 1200 : 5000;
      setTimeout(() => {
        if (isLast) onFinish(newState);
        else setGameState({ ...newState, currentQ: newState.currentQ + 1 });
      }, delay);
    }
  };

  const timerPct = noTimer ? 100 : (timeLeft / gameState.timePerQuestion) * 100;
  const timerColor = noTimer ? "var(--color-brand-primary-100)" : timerPct > 60 ? "#66bb6a" : timerPct > 30 ? "#ffa726" : "#ff5252";
  const subj = SUBJECTS.find((s) => s.id === gameState.quiz.subject);
  const quizLabel = (() => {
    const parts = [];
    if (subj) parts.push(`${subj.icon} ${subj.label}`);
    if (gameState.quiz.textbook?.bookName) {
      parts.push(gameState.quiz.textbook.bookName);
      if (gameState.quiz.textbook.chapter) parts.push(gameState.quiz.textbook.chapter);
    } else if (gameState.quiz.topic) {
      parts.push(gameState.quiz.topic);
    }
    return parts.join(" · ");
  })();

  return (
    <div style={{ ...styles.page, background: `linear-gradient(135deg, ${subj?.color || "var(--color-brand-primary)"}10, #0f1729)` }}>
      <div style={styles.quizHeader}>
        <button onClick={() => setShowQuitConfirm(true)} style={{ background: "rgba(0,0,0,0.06)", border: "none", borderRadius: 10, padding: "8px 14px", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 13, color: "var(--color-text-muted)" }}>
          ✕ Stop
        </button>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
          <div style={styles.qCounter}>{gameState.currentQ + 1} / {gameState.questions.length}</div>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 12, color: "var(--color-text-muted)" }}>
            ⏱ {elapsed < 60 ? `${elapsed}s` : `${Math.floor(elapsed / 60)}m ${elapsed % 60}s`}
          </div>
        </div>
        <div style={{ ...styles.scoreDisplay, animation: scoreAnim ? "scoreFloat 0.6s ease" : "none" }}>⭐ {gameState.score}</div>
      </div>

      {quizLabel && (
        <div style={{ textAlign: "center", fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 4, letterSpacing: 0.3 }}>
          {quizLabel}
        </div>
      )}

      {!noTimer && (
        <>
          <div style={styles.timerBar}>
            <div style={{ ...styles.timerFill, width: `${timerPct}%`, background: timerColor, transition: "width 1s linear, background 0.5s" }} />
          </div>
          <div style={{ textAlign: "center", fontFamily: "Fredoka", fontSize: 18, fontWeight: 700, color: timerColor, marginBottom: 12, animation: timeLeft <= 5 ? "timerPulse 0.5s ease infinite" : "none" }}>
            {timeLeft}s
          </div>
        </>
      )}

      {noTimer && (
        <div style={{ textAlign: "center", fontFamily: "Fredoka", fontSize: 14, fontWeight: 600, color: "#00e676", marginBottom: 12 }}>
          ⏸️ Geen tijdslimiet — neem de tijd!
        </div>
      )}

      <div style={{ ...styles.questionCard, animation: "slideUp 0.3s ease" }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
          <h2 style={{ ...styles.questionText, flex: 1, margin: 0 }}>{question.q}</h2>
          {questionImage && !question.imageInExplanation && (
            <img
              src={questionImage}
              alt=""
              style={{ width: question.imageUrl ? 130 : 90, height: question.imageUrl ? 100 : 70, objectFit: "cover", borderRadius: 10, flexShrink: 0, boxShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
            />
          )}
        </div>

        {question.svg && (
          <div
            style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20, marginTop: 16, padding: 16, background: "#162033", borderRadius: 14, minHeight: 220 }}
            dangerouslySetInnerHTML={{
              __html: question.svg.replace(
                /<svg\b([^>]*)>/i,
                (m, attrs) => {
                  const cleaned = attrs
                    .replace(/\s(width|height)=("[^"]*"|'[^']*')/gi, "")
                    .replace(/\sstyle=("[^"]*"|'[^']*')/gi, "");
                  return `<svg${cleaned} style="width:100%;max-width:460px;height:auto;display:block;">`;
                }
              )
            }}
          />
        )}

        <div style={styles.optionsGrid}>
          {question.options.map((opt, i) => {
            const colors = ["var(--color-brand-primary)", "var(--color-brand-primary)", "var(--color-brand-primary)", "var(--color-brand-primary)"];
            let bg = colors[i] + "20";
            let border = colors[i] + "50";
            let textColor = "var(--color-text)";
            let anim = "";

            if (showResult) {
              if (i === question.answer) {
                bg = "#1a3a2a"; border = "#28a745"; textColor = "#6fcf87";
                anim = "correctGlow 0.6s ease";
              } else if (i === selected && !gameState.answers[gameState.answers.length - 1]?.isCorrect) {
                bg = "#3a1a1a"; border = "#dc3545"; textColor = "#f08080";
                anim = "wrongShake 0.5s ease";
              } else { bg = "#162033"; border = "#2a3f5f"; textColor = "#667788"; }
            }

            const dimmed = !showResult && !canAnswer;
            return (
              <button
                key={i}
                disabled={dimmed}
                style={{
                  ...styles.optionButton,
                  background: bg,
                  borderColor: border,
                  color: textColor,
                  cursor: showResult ? "default" : (canAnswer ? "pointer" : "not-allowed"),
                  animation: anim,
                  opacity: dimmed ? 0.5 : 1,
                  transition: "opacity 0.3s ease",
                }}
                onClick={() => !showResult && canAnswer && handleAnswer(i)}
              >
                <span style={styles.optionLetter}>{String.fromCharCode(65 + i)}</span>
                <span style={{ flex: 1 }}>{opt}</span>
                {showResult && i === question.answer && <span style={{ fontSize: 18 }}>✅</span>}
                {showResult && i === selected && i !== question.answer && <span style={{ fontSize: 18 }}>❌</span>}
              </button>
            );
          })}
        </div>

        {!showResult && onLearnPathRequest && (
          <button
            onClick={() => {
              const subject = gameState?.quiz?.subject;
              const allowedSubjects = subject ? categoryToLearnSubjects(subject) : null;
              const matched = findLearnPathForQuestion(question?.q, allowedSubjects);
              track("dont_know_clicked", { subject, has_match: !!matched, at_question: gameState.currentQ + 1 });
              clearInterval(timerRef.current);
              clearTimeout(wrongOverlayTimerRef.current);
              if (matched) {
                onLearnPathRequest(matched);
              } else {
                // Geen specifieke pad-match binnen het vak → toon "Mee bezig"
                onLearnPathRequest({ noMatch: true, fallbackCategory: subject });
              }
            }}
            style={{
              width: "100%",
              marginTop: 14,
              padding: "12px 14px",
              borderRadius: 14,
              border: "1px solid rgba(0,212,255,0.40)",
              background: "rgba(0,212,255,0.08)",
              color: "#80deea",
              fontFamily: "var(--font-body)",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <span style={{ fontSize: 18 }}>🤔</span>
            <span>Ik weet het niet — leg het uit</span>
          </button>
        )}

        {timedOut && showResult && (
          <div style={{ marginTop: 12, textAlign: "center", padding: "10px", background: "#3a1a1a", borderRadius: 12, animation: "popIn 0.3s ease" }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#ff5252", fontFamily: "var(--font-display)" }}>⏰ Tijd is om!</span>
          </div>
        )}

        {showExplanation && question.explanation && (() => {
          const lastAns = gameState.answers[gameState.answers.length - 1];
          const isWrong = lastAns && !lastAns.isCorrect;
          if (isWrong && isSelfStudy) return null; // fout antwoord → overlay
          return (
            <div style={{ marginTop: 16, padding: 16, background: "linear-gradient(135deg, #1a2f4a, #1e3550)", borderRadius: 14, borderLeft: "4px solid #1a73e8", animation: "slideUp 0.3s ease" }}>
              <div style={{ fontWeight: 800, marginBottom: 6, color: "#00e676", fontSize: 14 }}>💡 Uitleg</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "#c0d0e0", marginBottom: (question.source || (question.imageInExplanation && questionImage)) ? 8 : 0, whiteSpace: "pre-line" }}>{question.explanation}</div>
              {question.imageInExplanation && questionImage && (
                <img src={questionImage} alt="" style={{ width: "100%", maxHeight: 140, objectFit: "contain", borderRadius: 10, marginBottom: question.source ? 8 : 0, background: "#0f1729" }} />
              )}
              {question.source && <div style={{ fontSize: 11, color: "var(--color-text-muted)", fontStyle: "italic" }}>📚 {question.source}</div>}
            </div>
          );
        })()}

        {showResult && isLast && !waitingForUser && !showWrongOverlay && (
          <button onClick={goToNext} style={{ width: "100%", marginTop: 16, padding: "14px", border: "none", borderRadius: 12, background: "linear-gradient(135deg, var(--color-brand-primary), #00a844)", color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, cursor: "pointer", animation: "slideUp 0.3s ease" }}>
            📊 Bekijk resultaten
          </button>
        )}

        {waitingForUser && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12, animation: "slideUp 0.3s ease" }}>
            <button onClick={goToNext} style={{
              width: "100%", padding: "14px", border: "none", borderRadius: 12,
              background: "linear-gradient(135deg, var(--color-brand-primary), #00a844)", color: "var(--color-text-strong)",
              fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>
              {isLast ? "📊 Bekijk resultaten" : "👉 Door naar volgende vraag"}
            </button>
            <a href={getYouTubeUrl(question)} target="_blank" rel="noopener noreferrer" style={{
              width: "100%", padding: "14px", border: "1px solid #1a73e8", borderRadius: 12,
              background: "#1a2f4a", color: "var(--color-brand-primary-100)",
              fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
              textDecoration: "none", boxSizing: "border-box",
            }}>
              <span>🎬</span> Uitleg-video op YouTube
            </a>
            <a
              href={`https://docs.google.com/forms/d/e/1FAIpQLScCoM_2aTEgaBY3ssqR7g-ffqLoFZgiPv8l23MDD0nEPvongQ/viewform?entry.879534266=${encodeURIComponent(`Vraag: ${question.q}\nGoede antwoord: ${question.options[question.answer]}\nUitleg: ${question.explanation || ""}\n\nWat klopt er niet:`)}`}
              target="_blank" rel="noopener noreferrer"
              style={{
                width: "100%", padding: "12px", border: "1px solid #445566", borderRadius: 12,
                background: "#111e2e", color: "#556677",
                fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                textDecoration: "none", boxSizing: "border-box",
              }}
            >
              <span>🚩</span> Fout melden
            </a>
            <div style={{ fontSize: 11, color: "#556677", textAlign: "center", marginTop: 6 }}>
              ↩️ Kom terug via de <strong style={{ color: "var(--color-text-muted)" }}>← terug-knop</strong> van je browser
            </div>
          </div>
        )}
      </div>

      {/* ── Fout antwoord: uitleg overlay ─────────────────── */}
      {showWrongOverlay && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.93)", zIndex: 150, overflowY: "auto", animation: "fadeBg 0.3s ease", display: "flex", flexDirection: "column", alignItems: "center", padding: "24px 20px 32px" }}>
          <div style={{ maxWidth: 480, width: "100%" }}>

            {/* Emoji + titel */}
            <div style={{ textAlign: "center", marginBottom: 22 }}>
              <div style={{ fontSize: 56, marginBottom: 6 }}>😕</div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "#ff8a65", margin: 0 }}>
                Waarom had ik dit niet goed?
              </h2>
            </div>

            {/* De vraag */}
            <div style={{ background: "#1e2d45", borderRadius: 14, padding: "14px 16px", marginBottom: 14, border: "1px solid #2a3f5f" }}>
              <div style={{ fontSize: 11, color: "#667788", fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>De vraag</div>
              <div style={{ fontSize: 15, color: "var(--color-text)", fontWeight: 600, lineHeight: 1.5 }}>{question.q}</div>
            </div>

            {/* Jouw antwoord vs goed antwoord */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
              <div style={{ background: "#2a1010", borderRadius: 12, padding: "12px 14px", border: "2px solid #dc3545" }}>
                <div style={{ fontSize: 10, color: "#ff6b6b", fontWeight: 800, marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>❌ Jouw antwoord</div>
                <div style={{ fontSize: 13, color: "#f08080", lineHeight: 1.4 }}>
                  {selected >= 0 ? question.options[selected] : "⏰ Geen antwoord (tijd om)"}
                </div>
              </div>
              <div style={{ background: "#0f2a18", borderRadius: 12, padding: "12px 14px", border: "2px solid #28a745" }}>
                <div style={{ fontSize: 10, color: "var(--color-brand-primary-100)", fontWeight: 800, marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>✅ Goede antwoord</div>
                <div style={{ fontSize: 13, color: "#6fcf87", lineHeight: 1.4 }}>
                  {question.options[question.answer]}
                </div>
              </div>
            </div>

            {/* Uitleg — alleen tonen als er ook echt uitleg is */}
            {question.explanation && String(question.explanation).trim() !== "" && (
              <div style={{ background: "linear-gradient(135deg, #1a2535, #162030)", borderRadius: 16, padding: 20, marginBottom: 14, border: "1px solid #2a4060" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "#69b2ff", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  📖 Zo zit het
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.75, color: "#d0e4f5", whiteSpace: "pre-line" }}>
                  {question.explanation}
                </div>
                {question.source && (
                  <div style={{ fontSize: 11, color: "var(--color-text-muted)", marginTop: 12, fontStyle: "italic", borderTop: "1px solid #2a3f5f", paddingTop: 8 }}>
                    📚 {question.source}
                  </div>
                )}
              </div>
            )}

            {/* Tip */}
            <div style={{ background: "#0f2018", borderRadius: 12, padding: "12px 16px", marginBottom: 20, border: "1px solid #1a4025", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 18 }}>💡</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--color-brand-primary-100)", marginBottom: 4 }}>
                  {(question.explanation && String(question.explanation).trim() !== "") ? "Tip om het te onthouden" : "Geen uitleg beschikbaar"}
                </div>
                <div style={{ fontSize: 13, color: "#90c0a0", lineHeight: 1.5 }}>
                  {(() => {
                    const heeftUitleg = question.explanation && String(question.explanation).trim() !== "";
                    const s = gameState.quiz.subject;
                    const antwoord = <em style={{ color: "#b0d8b8" }}>"{question.options[question.answer]}"</em>;
                    if (!heeftUitleg) {
                      return <>Bij deze vraag staat (nog) geen uitleg in de database. Bekijk de <strong>YouTube-knop</strong> hieronder voor een korte uitleg, of meld de vraag via <strong>Fout melden</strong> zodat we 'm beter kunnen maken. Het goede antwoord is {antwoord}.</>;
                    }
                    if (s === "rekenen" || s === "wiskunde")
                      return <>Schrijf de som nog een keer op en los hem stap voor stap op. Het goede antwoord is {antwoord}.</>;
                    if (s === "taal" || s === "nederlands")
                      return <>Maak zelf een zin met het goede antwoord {antwoord} — zo onthoudt je het beter.</>;
                    if (s === "engels" || s === "duits" || s === "frans")
                      return <>Zeg {antwoord} drie keer hardop en schrijf het op. Taal leer je door herhaling!</>;
                    return <>Herhaal het goede antwoord hardop: {antwoord}. Koppel het aan iets wat je al weet.</>;
                  })()}
                </div>
              </div>
            </div>

            {/* YouTube */}
            <a href={getYouTubeUrl(question)} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 16px", background: "#101c2e", border: "1px solid #1a73e8", borderRadius: 12, color: "#69b2ff", textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, marginBottom: 12 }}>
              🎬 Zoek uitlegvideo op YouTube
            </a>

            {/* Fout melden */}
            <a
              href={`https://docs.google.com/forms/d/e/1FAIpQLScCoM_2aTEgaBY3ssqR7g-ffqLoFZgiPv8l23MDD0nEPvongQ/viewform?entry.879534266=${encodeURIComponent(`Vraag: ${question.q}\nGoede antwoord: ${question.options[question.answer]}\nUitleg: ${question.explanation || ""}\n\nWat klopt er niet:`)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 16px", background: "transparent", border: "1px solid #334455", borderRadius: 12, color: "#556677", textDecoration: "none", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: 13, marginBottom: 12 }}
            >
              🚩 Fout melden
            </a>

            {/* Terug knop */}
            <button
              onClick={() => { setShowWrongOverlay(false); goToNext(); }}
              style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg, var(--color-brand-primary), #00a844)", border: "none", borderRadius: 14, color: "var(--color-text-strong)", fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3 }}
            >
              {isLast ? "📊 Bekijk je resultaten" : "↩️ Keer terug naar vragen"}
            </button>
          </div>
        </div>
      )}

      {/* Quit confirmation overlay */}
      {showQuitConfirm && (() => {
        const stopSubject = gameState?.quiz?.subject;
        const stopAllowed = stopSubject ? categoryToLearnSubjects(stopSubject) : null;
        const matched = onLearnPathRequest ? findLearnPathForQuestion(question?.q, stopAllowed) : null;
        return (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, animation: "fadeBg 0.2s ease" }}>
          <div style={{ background: "#1e2d45", borderRadius: 24, padding: "28px 24px", maxWidth: 340, width: "90%", textAlign: "center", animation: "popIn 0.3s ease" }}>
            <span style={{ fontSize: 48 }}>🛑</span>
            <h3 style={{ fontFamily: "Fredoka", fontSize: 20, margin: "12px 0 8px" }}>Stoppen met oefenen?</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: 14, marginBottom: 20 }}>
              Je hebt {gameState.currentQ} van {gameState.questions.length} vragen beantwoord.
              {gameState.score > 0 && ` Score: ${gameState.score} goed!`}
            </p>
            {matched && (
              <button
                style={{ width: "100%", background: "linear-gradient(135deg, var(--color-brand-primary), #00a040)", color: "var(--color-text-strong)", border: "none", borderRadius: 14, padding: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14, marginBottom: 12, boxShadow: "0 4px 16px rgba(0,200,83,0.3)" }}
                onClick={() => {
                  clearInterval(timerRef.current);
                  clearTimeout(wrongOverlayTimerRef.current);
                  track("learn_path_from_quiz", { path: matched.pathId, step: matched.stepIdx, at_question: gameState.currentQ + 1 });
                  onLearnPathRequest(matched);
                }}
              >
                📐 Snap ik niet — leg stap-voor-stap uit
              </button>
            )}
            <div style={{ display: "flex", gap: 10 }}>
              <button style={{ flex: 1, background: "#162033", border: "none", borderRadius: 14, padding: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14, color: "var(--color-text-strong)" }} onClick={() => setShowQuitConfirm(false)}>
                Doorgaan
              </button>
              <button style={{ flex: 1, background: "linear-gradient(135deg, #ff5252, #c62828)", color: "var(--color-text-strong)", border: "none", borderRadius: 14, padding: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 14 }} onClick={() => {
                clearInterval(timerRef.current);
                clearTimeout(wrongOverlayTimerRef.current);
                onQuit();
              }}>
                Stoppen
              </button>
            </div>
          </div>
        </div>
        );
      })()}
    </div>
  );
}

export function BreakoutGame({ onClose }) {
  const canvasRef = useRef(null);
  const [gameOver, setGameOver] = useState(null); // null = playing, true = won, false = lost
  const [started, setStarted] = useState(false);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    if (!started) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const W = canvas.width;
    const H = canvas.height;

    // Paddle
    const paddle = { w: W * 0.22, h: 10, x: W / 2, y: H - 28, speed: W * 0.012 };
    // Ball
    const ball = { r: 7, x: W / 2, y: H - 60, dx: W * 0.004, dy: -(H * 0.007) };
    // Bricks
    const COLS = 6, ROWS = 4;
    const brickW = (W - 40) / COLS;
    const brickH = 18;
    const colors = ["#ff6b6b","#ffa94d","#ffe066","#69db7c","#4dabf7","#cc5de8"];
    let bricks = [];
    for (let r = 0; r < ROWS; r++)
      for (let c = 0; c < COLS; c++)
        bricks.push({ x: 20 + c * brickW, y: 40 + r * (brickH + 6), w: brickW - 4, h: brickH, alive: true, color: colors[r] });

    let keys = {};
    let touchX = null;
    let running = true;

    const onKeyDown = e => { keys[e.key] = true; };
    const onKeyUp = e => { keys[e.key] = false; };
    const onTouchStart = e => { touchX = e.touches[0].clientX; };
    const onTouchMove = e => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const tx = e.touches[0].clientX - rect.left;
      paddle.x = Math.max(paddle.w / 2, Math.min(W - paddle.w / 2, tx));
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });

    function drawRoundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
    }

    let raf;
    function loop() {
      if (!running) return;

      // Move paddle via keyboard
      if (keys["ArrowLeft"] || keys["a"]) paddle.x = Math.max(paddle.w / 2, paddle.x - paddle.speed);
      if (keys["ArrowRight"] || keys["d"]) paddle.x = Math.min(W - paddle.w / 2, paddle.x + paddle.speed);

      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Wall bounce
      if (ball.x - ball.r < 0) { ball.x = ball.r; ball.dx = Math.abs(ball.dx); }
      if (ball.x + ball.r > W) { ball.x = W - ball.r; ball.dx = -Math.abs(ball.dx); }
      if (ball.y - ball.r < 0) { ball.y = ball.r; ball.dy = Math.abs(ball.dy); }

      // Paddle collision
      if (ball.y + ball.r >= paddle.y && ball.y + ball.r <= paddle.y + paddle.h &&
          ball.x >= paddle.x - paddle.w / 2 && ball.x <= paddle.x + paddle.w / 2) {
        ball.dy = -Math.abs(ball.dy);
        const offset = (ball.x - paddle.x) / (paddle.w / 2);
        ball.dx = offset * W * 0.006;
        ball.y = paddle.y - ball.r;
      }

      // Brick collision
      let anyAlive = false;
      for (const b of bricks) {
        if (!b.alive) continue;
        anyAlive = true;
        if (ball.x + ball.r > b.x && ball.x - ball.r < b.x + b.w &&
            ball.y + ball.r > b.y && ball.y - ball.r < b.y + b.h) {
          b.alive = false;
          const fromLeft = ball.x < b.x + b.w / 2;
          const fromTop = ball.y < b.y + b.h / 2;
          const overlapX = fromLeft ? (ball.x + ball.r - b.x) : (b.x + b.w - (ball.x - ball.r));
          const overlapY = fromTop ? (ball.y + ball.r - b.y) : (b.y + b.h - (ball.y - ball.r));
          if (overlapX < overlapY) ball.dx = fromLeft ? -Math.abs(ball.dx) : Math.abs(ball.dx);
          else ball.dy = fromTop ? -Math.abs(ball.dy) : Math.abs(ball.dy);
        }
      }

      // Win check
      if (!anyAlive) { running = false; setGameOver(true); return; }

      // Fall off bottom
      if (ball.y - ball.r > H) { running = false; setAttempts(a => a + 1); setGameOver(false); return; }

      // Draw
      ctx.fillStyle = "#0d1b2e";
      ctx.fillRect(0, 0, W, H);

      // Bricks
      for (const b of bricks) {
        if (!b.alive) continue;
        ctx.fillStyle = b.color;
        drawRoundRect(ctx, b.x, b.y, b.w, b.h, 4);
        ctx.fill();
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        drawRoundRect(ctx, b.x, b.y, b.w, 5, 4);
        ctx.fill();
      }

      // Paddle
      const grad = ctx.createLinearGradient(paddle.x - paddle.w/2, 0, paddle.x + paddle.w/2, 0);
      grad.addColorStop(0, "var(--color-brand-primary)");
      grad.addColorStop(1, "var(--color-brand-primary-100)");
      ctx.fillStyle = grad;
      drawRoundRect(ctx, paddle.x - paddle.w/2, paddle.y, paddle.w, paddle.h, 5);
      ctx.fill();

      // Ball
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fillStyle = "var(--color-text-strong)";
      ctx.fill();

      raf = requestAnimationFrame(loop);
    }

    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
    };
  }, [started]);

  const canvasSize = Math.min(340, window.innerWidth - 32);

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", zIndex: 9999, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ background: "#0d1b2e", borderRadius: 20, padding: 20, width: canvasSize + 8, boxShadow: "0 8px 40px rgba(0,200,83,0.3)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
          <span style={{ fontFamily: "var(--font-display)", fontSize: 18, color: "var(--color-brand-primary-100)", fontWeight: 700 }}>🎮 Breakout!</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "var(--color-text-muted)", fontSize: 20, cursor: "pointer" }}>✕</button>
        </div>

        {!started ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>🏆</div>
            <p style={{ color: "var(--color-text)", fontFamily: "var(--font-display)", fontSize: 16, marginBottom: 8 }}>Jij hebt het verdiend!</p>
            <p style={{ color: "var(--color-text-muted)", fontSize: 13, marginBottom: 20 }}>Breek alle blokken met de bal.<br/>Stuur de bal met je muisbeweging of pijltjestoetsen.</p>
            <button onClick={() => setStarted(true)} style={{ padding: "14px 32px", background: "linear-gradient(135deg, var(--color-brand-primary), #69f0ae)", border: "none", borderRadius: 14, color: "#0d1b2e", fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, cursor: "pointer" }}>
              🚀 Spelen!
            </button>
          </div>
        ) : gameOver === true ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: 56, marginBottom: 8 }}>🎊</div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 22, color: "var(--color-brand-primary-100)", fontWeight: 700, marginBottom: 8 }}>Geweldig gewonnen!</p>
            <p style={{ color: "var(--color-text-muted)", fontSize: 14, marginBottom: 20 }}>Alle blokken gebroken — jij bent een kampioen!</p>
            <button onClick={onClose} style={{ padding: "14px 28px", background: "linear-gradient(135deg, var(--color-brand-primary), #69f0ae)", border: "none", borderRadius: 14, color: "#0d1b2e", fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              🏠 Terug naar resultaten
            </button>
          </div>
        ) : gameOver === false ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>{attempts >= 2 ? "📚" : "😅"}</div>
            <p style={{ fontFamily: "var(--font-display)", fontSize: 20, color: "#ffb74d", fontWeight: 700, marginBottom: 8 }}>
              {attempts >= 2 ? "Tijd om verder te leren!" : "Helaas!"}
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: 14, marginBottom: 20 }}>
              {attempts >= 2 ? "Je hebt twee keer gespeeld — goed geprobeerd! Ga verder met oefenen." : "De bal viel erdoorheen. Nog één kans!"}
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              {attempts < 2 && (
                <button onClick={() => { setGameOver(null); setStarted(false); }} style={{ padding: "13px 20px", background: "linear-gradient(135deg, var(--color-brand-primary), #69f0ae)", border: "none", borderRadius: 14, color: "#0d1b2e", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                  🔄 Nog één kans!
                </button>
              )}
              <button onClick={onClose} style={{ padding: "13px 20px", background: attempts >= 2 ? "linear-gradient(135deg, var(--color-brand-primary), #69f0ae)" : "#1e2d45", border: "none", borderRadius: 14, color: attempts >= 2 ? "#0d1b2e" : "var(--color-text-muted)", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                {attempts >= 2 ? "🏠 Terug naar resultaten" : "✕ Sluiten"}
              </button>
            </div>
          </div>
        ) : (
          <canvas ref={canvasRef} width={canvasSize} height={canvasSize} style={{ borderRadius: 12, display: "block", touchAction: "none" }} />
        )}
      </div>
    </div>
  );
}

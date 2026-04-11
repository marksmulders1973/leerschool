import { useState, useEffect, useRef } from "react";
import styles from "../styles.js";
import { SUBJECTS } from "../constants.js";
import { SoundEngine, track } from "../utils.js";

export default function PlayQuiz({ gameState, setGameState, onFinish, onQuit, onHome }) {
  const noTimer = !gameState.timePerQuestion || gameState.timePerQuestion === 0;
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
  const nextStateRef = useRef(null);
  const timerRef = useRef(null);
  const wrongOverlayTimerRef = useRef(null);

  const question = gameState.questions[gameState.currentQ];
  const isLast = gameState.currentQ === gameState.questions.length - 1;
  const isSelfStudy = gameState.mode === "self" || noTimer;

  const getYouTubeUrl = (q) => {
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
    const ns = nextStateRef.current || gameState;
    if (isLast) onFinish(ns);
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

  const handleAnswer = (idx) => {
    if (showResult) return;
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
  const timerColor = noTimer ? "#69f0ae" : timerPct > 60 ? "#66bb6a" : timerPct > 30 ? "#ffa726" : "#ff5252";
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
    <div style={{ ...styles.page, background: `linear-gradient(135deg, ${subj?.color || "#00c853"}10, #0f1729)` }}>
      <div style={styles.quizHeader}>
        <button onClick={() => setShowQuitConfirm(true)} style={{ background: "rgba(0,0,0,0.06)", border: "none", borderRadius: 10, padding: "8px 14px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: "#8899aa" }}>
          ✕ Stop
        </button>
        <div style={styles.qCounter}>{gameState.currentQ + 1} / {gameState.questions.length}</div>
        <div style={{ ...styles.scoreDisplay, animation: scoreAnim ? "scoreFloat 0.6s ease" : "none" }}>⭐ {gameState.score}</div>
      </div>

      {quizLabel && (
        <div style={{ textAlign: "center", fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 600, color: "rgba(255,255,255,0.55)", marginBottom: 4, letterSpacing: 0.3 }}>
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
          {questionImage && (
            <img
              src={questionImage}
              alt=""
              style={{ width: 90, height: 70, objectFit: "cover", borderRadius: 10, flexShrink: 0, boxShadow: "0 2px 10px rgba(0,0,0,0.4)" }}
            />
          )}
        </div>

        {question.svg && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20, marginTop: 16, padding: 12, background: "#162033", borderRadius: 14 }} dangerouslySetInnerHTML={{ __html: question.svg }} />
        )}

        <div style={styles.optionsGrid}>
          {question.options.map((opt, i) => {
            const colors = ["#00c853", "#00c853", "#00c853", "#00c853"];
            let bg = colors[i] + "20";
            let border = colors[i] + "50";
            let textColor = "#e0e6f0";
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

            return (
              <button key={i} style={{ ...styles.optionButton, background: bg, borderColor: border, color: textColor, cursor: showResult ? "default" : "pointer", animation: anim }} onClick={() => !showResult && handleAnswer(i)}>
                <span style={styles.optionLetter}>{String.fromCharCode(65 + i)}</span>
                <span style={{ flex: 1 }}>{opt}</span>
                {showResult && i === question.answer && <span style={{ fontSize: 18 }}>✅</span>}
                {showResult && i === selected && i !== question.answer && <span style={{ fontSize: 18 }}>❌</span>}
              </button>
            );
          })}
        </div>

        {timedOut && showResult && (
          <div style={{ marginTop: 12, textAlign: "center", padding: "10px", background: "#3a1a1a", borderRadius: 12, animation: "popIn 0.3s ease" }}>
            <span style={{ fontSize: 22, fontWeight: 800, color: "#ff5252", fontFamily: "'Fredoka', sans-serif" }}>⏰ Tijd is om!</span>
          </div>
        )}

        {showExplanation && question.explanation && (() => {
          const lastAns = gameState.answers[gameState.answers.length - 1];
          const isWrong = lastAns && !lastAns.isCorrect;
          if (isWrong && isSelfStudy) return null; // fout antwoord → overlay
          return (
            <div style={{ marginTop: 16, padding: 16, background: "linear-gradient(135deg, #1a2f4a, #1e3550)", borderRadius: 14, borderLeft: "4px solid #1a73e8", animation: "slideUp 0.3s ease" }}>
              <div style={{ fontWeight: 800, marginBottom: 6, color: "#00e676", fontSize: 14 }}>💡 Uitleg</div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: "#c0d0e0", marginBottom: question.source ? 8 : 0 }}>{question.explanation}</div>
              {question.source && <div style={{ fontSize: 11, color: "#8899aa", fontStyle: "italic" }}>📚 {question.source}</div>}
            </div>
          );
        })()}

        {showResult && isLast && !waitingForUser && !showWrongOverlay && (
          <button onClick={goToNext} style={{ width: "100%", marginTop: 16, padding: "14px", border: "none", borderRadius: 12, background: "linear-gradient(135deg, #00c853, #00a844)", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer", animation: "slideUp 0.3s ease" }}>
            📊 Bekijk resultaten
          </button>
        )}

        {waitingForUser && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12, animation: "slideUp 0.3s ease" }}>
            <button onClick={goToNext} style={{
              width: "100%", padding: "14px", border: "none", borderRadius: 12,
              background: "linear-gradient(135deg, #00c853, #00a844)", color: "#fff",
              fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer",
            }}>
              {isLast ? "📊 Bekijk resultaten" : "👉 Door naar volgende vraag"}
            </button>
            <a href={getYouTubeUrl(question)} target="_blank" rel="noopener noreferrer" style={{
              width: "100%", padding: "14px", border: "1px solid #1a73e8", borderRadius: 12,
              background: "#1a2f4a", color: "#69f0ae",
              fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700, cursor: "pointer",
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
                fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 600, cursor: "pointer",
                display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                textDecoration: "none", boxSizing: "border-box",
              }}
            >
              <span>🚩</span> Fout melden
            </a>
            <div style={{ fontSize: 11, color: "#556677", textAlign: "center", marginTop: 6 }}>
              ↩️ Kom terug via de <strong style={{ color: "#8899aa" }}>← terug-knop</strong> van je browser
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
              <h2 style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, color: "#ff8a65", margin: 0 }}>
                Waarom had ik dit niet goed?
              </h2>
            </div>

            {/* De vraag */}
            <div style={{ background: "#1e2d45", borderRadius: 14, padding: "14px 16px", marginBottom: 14, border: "1px solid #2a3f5f" }}>
              <div style={{ fontSize: 11, color: "#667788", fontWeight: 700, marginBottom: 6, textTransform: "uppercase", letterSpacing: 1 }}>De vraag</div>
              <div style={{ fontSize: 15, color: "#e0e6f0", fontWeight: 600, lineHeight: 1.5 }}>{question.q}</div>
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
                <div style={{ fontSize: 10, color: "#69f0ae", fontWeight: 800, marginBottom: 5, textTransform: "uppercase", letterSpacing: 0.5 }}>✅ Goede antwoord</div>
                <div style={{ fontSize: 13, color: "#6fcf87", lineHeight: 1.4 }}>
                  {question.options[question.answer]}
                </div>
              </div>
            </div>

            {/* Uitleg */}
            <div style={{ background: "linear-gradient(135deg, #1a2535, #162030)", borderRadius: 16, padding: 20, marginBottom: 14, border: "1px solid #2a4060" }}>
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, color: "#69b2ff", marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                📖 Zo zit het
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.75, color: "#d0e4f5" }}>
                {question.explanation}
              </div>
              {question.source && (
                <div style={{ fontSize: 11, color: "#8899aa", marginTop: 12, fontStyle: "italic", borderTop: "1px solid #2a3f5f", paddingTop: 8 }}>
                  📚 {question.source}
                </div>
              )}
            </div>

            {/* Tip */}
            <div style={{ background: "#0f2018", borderRadius: 12, padding: "12px 16px", marginBottom: 20, border: "1px solid #1a4025", display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ fontSize: 18 }}>💡</span>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#69f0ae", marginBottom: 4 }}>Tip om het te onthouden</div>
                <div style={{ fontSize: 13, color: "#90c0a0", lineHeight: 1.5 }}>
                  {(() => {
                    const s = gameState.quiz.subject;
                    const antwoord = <em style={{ color: "#b0d8b8" }}>"{question.options[question.answer]}"</em>;
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
            <a href={getYouTubeUrl(question)} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 16px", background: "#101c2e", border: "1px solid #1a73e8", borderRadius: 12, color: "#69b2ff", textDecoration: "none", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 12 }}>
              🎬 Zoek uitlegvideo op YouTube
            </a>

            {/* Fout melden */}
            <a
              href={`https://docs.google.com/forms/d/e/1FAIpQLScCoM_2aTEgaBY3ssqR7g-ffqLoFZgiPv8l23MDD0nEPvongQ/viewform?entry.879534266=${encodeURIComponent(`Vraag: ${question.q}\nGoede antwoord: ${question.options[question.answer]}\nUitleg: ${question.explanation || ""}\n\nWat klopt er niet:`)}`}
              target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 16px", background: "transparent", border: "1px solid #334455", borderRadius: 12, color: "#556677", textDecoration: "none", fontFamily: "'Nunito', sans-serif", fontWeight: 600, fontSize: 13, marginBottom: 12 }}
            >
              🚩 Fout melden
            </a>

            {/* Terug knop */}
            <button
              onClick={() => { setShowWrongOverlay(false); goToNext(); }}
              style={{ width: "100%", padding: "16px", background: "linear-gradient(135deg, #00c853, #00a844)", border: "none", borderRadius: 14, color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 17, fontWeight: 700, cursor: "pointer", letterSpacing: 0.3 }}
            >
              {isLast ? "📊 Bekijk je resultaten" : "↩️ Keer terug naar vragen"}
            </button>
          </div>
        </div>
      )}

      {/* Quit confirmation overlay */}
      {showQuitConfirm && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 200, animation: "fadeBg 0.2s ease" }}>
          <div style={{ background: "#1e2d45", borderRadius: 24, padding: "28px 24px", maxWidth: 320, width: "90%", textAlign: "center", animation: "popIn 0.3s ease" }}>
            <span style={{ fontSize: 48 }}>🛑</span>
            <h3 style={{ fontFamily: "Fredoka", fontSize: 20, margin: "12px 0 8px" }}>Stoppen met oefenen?</h3>
            <p style={{ color: "#8899aa", fontSize: 14, marginBottom: 20 }}>
              Je hebt {gameState.currentQ} van {gameState.questions.length} vragen beantwoord.
              {gameState.score > 0 && ` Score: ${gameState.score} goed!`}
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              <button style={{ flex: 1, background: "#162033", border: "none", borderRadius: 14, padding: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14 }} onClick={() => setShowQuitConfirm(false)}>
                Doorgaan
              </button>
              <button style={{ flex: 1, background: "linear-gradient(135deg, #ff5252, #c62828)", color: "#fff", border: "none", borderRadius: 14, padding: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14 }} onClick={() => {
                clearInterval(timerRef.current);
                clearTimeout(wrongOverlayTimerRef.current);
                onQuit();
              }}>
                Stoppen
              </button>
            </div>
          </div>
        </div>
      )}
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
      grad.addColorStop(0, "#00c853");
      grad.addColorStop(1, "#69f0ae");
      ctx.fillStyle = grad;
      drawRoundRect(ctx, paddle.x - paddle.w/2, paddle.y, paddle.w, paddle.h, 5);
      ctx.fill();

      // Ball
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
      ctx.fillStyle = "#fff";
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
          <span style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 18, color: "#69f0ae", fontWeight: 700 }}>🎮 Breakout!</span>
          <button onClick={onClose} style={{ background: "none", border: "none", color: "#8899aa", fontSize: 20, cursor: "pointer" }}>✕</button>
        </div>

        {!started ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: 52, marginBottom: 12 }}>🏆</div>
            <p style={{ color: "#e0e6f0", fontFamily: "'Fredoka', sans-serif", fontSize: 16, marginBottom: 8 }}>Jij hebt het verdiend!</p>
            <p style={{ color: "#8899aa", fontSize: 13, marginBottom: 20 }}>Breek alle blokken met de bal.<br/>Stuur de bal met je muisbeweging of pijltjestoetsen.</p>
            <button onClick={() => setStarted(true)} style={{ padding: "14px 32px", background: "linear-gradient(135deg, #00c853, #69f0ae)", border: "none", borderRadius: 14, color: "#0d1b2e", fontFamily: "'Fredoka', sans-serif", fontSize: 17, fontWeight: 700, cursor: "pointer" }}>
              🚀 Spelen!
            </button>
          </div>
        ) : gameOver === true ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: 56, marginBottom: 8 }}>🎊</div>
            <p style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 22, color: "#69f0ae", fontWeight: 700, marginBottom: 8 }}>Geweldig gewonnen!</p>
            <p style={{ color: "#8899aa", fontSize: 14, marginBottom: 20 }}>Alle blokken gebroken — jij bent een kampioen!</p>
            <button onClick={onClose} style={{ padding: "14px 28px", background: "linear-gradient(135deg, #00c853, #69f0ae)", border: "none", borderRadius: 14, color: "#0d1b2e", fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700, cursor: "pointer" }}>
              🏠 Terug naar resultaten
            </button>
          </div>
        ) : gameOver === false ? (
          <div style={{ textAlign: "center", padding: "24px 0" }}>
            <div style={{ fontSize: 48, marginBottom: 8 }}>{attempts >= 2 ? "📚" : "😅"}</div>
            <p style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 20, color: "#ffb74d", fontWeight: 700, marginBottom: 8 }}>
              {attempts >= 2 ? "Tijd om verder te leren!" : "Helaas!"}
            </p>
            <p style={{ color: "#8899aa", fontSize: 14, marginBottom: 20 }}>
              {attempts >= 2 ? "Je hebt twee keer gespeeld — goed geprobeerd! Ga verder met oefenen." : "De bal viel erdoorheen. Nog één kans!"}
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center" }}>
              {attempts < 2 && (
                <button onClick={() => { setGameOver(null); setStarted(false); }} style={{ padding: "13px 20px", background: "linear-gradient(135deg, #00c853, #69f0ae)", border: "none", borderRadius: 14, color: "#0d1b2e", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                  🔄 Nog één kans!
                </button>
              )}
              <button onClick={onClose} style={{ padding: "13px 20px", background: attempts >= 2 ? "linear-gradient(135deg, #00c853, #69f0ae)" : "#1e2d45", border: "none", borderRadius: 14, color: attempts >= 2 ? "#0d1b2e" : "#8899aa", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
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

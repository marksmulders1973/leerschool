import { useState, useEffect, useRef } from "react";
import supabase from "./supabase.js";
import styles from "./styles.js";
import { SUBJECTS, LEVELS, SAMPLE_QUESTIONS, TOPIC_QUESTIONS } from "./constants.js";
import { track, SoundEngine, fetchAIQuestions, generateCode, shuffle, formatDate, daysUntil } from "./utils.js";

import LoadingOverlay from "./components/LoadingOverlay.jsx";
import HomePage from "./components/HomePage.jsx";
import StudentHome from "./components/StudentHome.jsx";
import SelfStudy from "./components/SelfStudy.jsx";
import TextbookQuiz from "./components/TextbookQuiz.jsx";
import PlayQuiz from "./components/PlayQuiz.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import TeacherHome from "./components/TeacherHome.jsx";
import { ClassManager, CreateQuiz, QuizPreview, Lobby } from "./components/TeacherComponents.jsx";
import { TeacherProgress, StudentProgressView, Leaderboard } from "./components/StudentProgress.jsx";

const fonts = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka:wght@400;500;600;700&display=swap');
`;

export default function App() {
  const [page, setPage] = useState("home");
  const [loading, setLoading] = useState(false);
  const [loadingMode, setLoadingMode] = useState("self");
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [classes, setClasses] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);
  const [studentProgress, setStudentProgress] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [pendingQuizData, setPendingQuizData] = useState(null);
  const [pendingCode, setPendingCode] = useState("");
  const abortControllerRef = useRef(null);
  const [authUser, setAuthUser] = useState(null);
  const [streak, setStreak] = useState(0);

  // Auth: laad sessie + luister naar wijzigingen
  useEffect(() => {
    supabase.auth?.getSession?.().then(({ data: { session } = {} } = {}) => {
      if (session?.user) setAuthUser(session.user);
    }).catch(() => {});
    const sub = supabase.auth?.onAuthStateChange?.((_event, session) => {
      const u = session?.user ?? null;
      setAuthUser(u);
      if (u) {
        supabase.from("profiles").select("*").eq("id", u.id).single().then(({ data }) => {
          if (data?.display_name) setUserName(data.display_name);
          if (data?.level) setUserLevel(data.level);
          if (data?.streak_days) setStreak(data.streak_days);
          if (data?.role) {
            setRole(data.role);
            setPage(data.role === "teacher" ? "teacher-home" : "student-home");
          } else {
            const googleName = u.user_metadata?.full_name || u.user_metadata?.name || "";
            if (googleName) setUserName(googleName);
            // Geen Supabase profiel rol — check localStorage (bijv. gebruiker was eerst gast)
            try {
              const saved = JSON.parse(localStorage.getItem("ls_user") || "{}");
              if (saved.role && saved.name) {
                setRole(saved.role);
                if (saved.level) setUserLevel(saved.level);
                setPage(saved.role === "teacher" ? "teacher-home" : "student-home");
                // Sla rol ook op in Supabase profiel voor volgende keer
                supabase.from("profiles").upsert({ id: u.id, display_name: saved.name, level: saved.level || "", role: saved.role }).catch(() => {});
              }
            } catch {}
          }
        }).catch(() => {});
      }
    });
    return () => sub?.data?.subscription?.unsubscribe?.();
  }, []);

  const handleGoogleLogin = () => {
    supabase.auth?.signInWithOAuth?.({ provider: "google", options: { redirectTo: window.location.origin } });
  };

  const handleLogout = () => {
    supabase.auth?.signOut?.();
    setAuthUser(null);
    setUserName("");
    setUserLevel("");
    setRole(null);
    setPage("home");
  };

  // Load stored data + check URL voor directe quiz-code
  useEffect(() => {
    try { const q = localStorage.getItem("ls_quizzes"); if (q) setQuizzes(JSON.parse(q)); } catch {}
    try { const p = localStorage.getItem("ls_progress"); if (p) setStudentProgress(JSON.parse(p)); } catch {}
    try { const l = localStorage.getItem("ls_leaderboard"); if (l) setLeaderboard(JSON.parse(l)); } catch {}
    try { const c = localStorage.getItem("ls_classes"); if (c) setClasses(JSON.parse(c)); } catch {}
    try { const u = localStorage.getItem("ls_user"); if (u) { const d = JSON.parse(u); if (d.name) setUserName(d.name); if (d.level) setUserLevel(d.level); if (d.role) setRole(d.role); } } catch {}
    try { const s = JSON.parse(localStorage.getItem("ls_streak") || '{"streak":0,"last":""}'); const today = new Date().toISOString().split("T")[0]; const yesterday = new Date(Date.now()-86400000).toISOString().split("T")[0]; if (s.last === today || s.last === yesterday) setStreak(s.streak); } catch {}
    // URL parameter ?code=XXXXX (alleen quiz-codes, niet Supabase OAuth codes)
    const urlCode = new URLSearchParams(window.location.search).get("code");
    if (urlCode && urlCode.length <= 8) setPendingCode(urlCode.toUpperCase());
  }, []);

  useEffect(() => { try { localStorage.setItem("ls_quizzes", JSON.stringify(quizzes)); } catch {} }, [quizzes]);
  useEffect(() => { try { localStorage.setItem("ls_progress", JSON.stringify(studentProgress)); } catch {} }, [studentProgress]);
  useEffect(() => { try { localStorage.setItem("ls_leaderboard", JSON.stringify(leaderboard)); } catch {} }, [leaderboard]);
  useEffect(() => { try { localStorage.setItem("ls_classes", JSON.stringify(classes)); } catch {} }, [classes]);

  // Als er een code in de URL staat en die niet lokaal bestaat → haal op uit Supabase en start direct
  useEffect(() => {
    if (!pendingCode) return;
    const localQuiz = quizzes.find((q) => q.code.toUpperCase() === pendingCode.toUpperCase());
    if (localQuiz) return; // al lokaal aanwezig
    supabase
      .from("quizzes")
      .select("data")
      .eq("code", pendingCode.toUpperCase())
      .single()
      .then(({ data, error }) => {
        if (error || !data) {
          alert(`❌ Quiz met code "${pendingCode}" niet gevonden.\n\nVraag de leerkracht om een nieuwe link te sturen.`);
          setPendingCode("");
          return;
        }
        const quiz = data.data;
        setCurrentQuiz(quiz);
        setPendingCode("");
        // Lees naam direct uit localStorage om stale closure te vermijden
        let hasUser = false;
        try { const u = localStorage.getItem("ls_user"); if (u) { const d = JSON.parse(u); hasUser = !!d.name; } } catch {}
        if (!hasUser) {
          setPage("home"); // laat leerling eerst naam invoeren
        } else {
          startGame(quiz, "self");
        }
      });
  }, [pendingCode, quizzes]);

  const createQuiz = (quiz) => {
    const newQuiz = {
      ...quiz,
      id: Date.now().toString(),
      code: generateCode(),
      createdAt: new Date().toISOString(),
      players: [],
    };
    setQuizzes((prev) => [...prev, newQuiz]);
    // Sla op in Supabase zodat leerlingen via de link kunnen joinen
    supabase.from("quizzes").insert({ id: newQuiz.id, code: newQuiz.code, data: newQuiz }).then(({ error }) => {
      if (error) alert(`❌ Quiz opslaan mislukt: ${error.message}\n\nDeel de link nog niet — leerlingen kunnen de quiz dan niet vinden.`);
    });
    return newQuiz;
  };

  const startGame = async (quiz, mode) => {
    let questions = [];

    // Use pre-generated questions if available (teacher quiz → all students get same questions)
    if (quiz.preGeneratedQuestions && quiz.preGeneratedQuestions.length > 0) {
      questions = quiz.preGeneratedQuestions;
    } else {
      const hasTopic = quiz.topic && quiz.topic.trim().length > 0;
      const hasTextbook = !!quiz.textbook?.bookName;

      const hasSampleQuestions = (SAMPLE_QUESTIONS[quiz.subject]?.[quiz.level] || []).length > 0;
      const playedKey = `played_${quiz.subject}_${quiz.level}`;
      const playCount = parseInt(localStorage.getItem(playedKey) || "0", 10);
      const useAIThisRound = hasTopic || hasTextbook || !hasSampleQuestions || (playCount % 2 === 1);
      if (useAIThisRound && quiz.useAI !== false) {
        abortControllerRef.current = new AbortController();
        setLoading(true);
        setLoadingMode(hasTextbook ? "textbook" : "self");
        try {
          questions = await fetchAIQuestions(quiz.subject, quiz.level, quiz.questionCount || 8, quiz.textbook || null, quiz.topic || null, abortControllerRef.current.signal);
        } catch (err) {
          setLoading(false);
          if (abortControllerRef.current?.signal.aborted) return;
          if (hasTopic) {
            alert(`❌ Kon geen vragen maken over "${quiz.topic}".\n\nFoutmelding: ${err.message}\n\nControleer of de API key nog actief is in het Vercel dashboard.`);
            return;
          }
          // bij gewone vakken: stil terugvallen op standaardvragen
          console.warn("AI fout, terugval op standaardvragen:", err.message);
        }
        setLoading(false);
        if (abortControllerRef.current?.signal.aborted) return;
      }

      if (questions.length === 0) {
        const subjectQuestions = SAMPLE_QUESTIONS[quiz.subject]?.[quiz.level]
          || (quiz.topic ? TOPIC_QUESTIONS[quiz.topic.toLowerCase()] : null)
          || [];
        questions = shuffle(subjectQuestions).slice(0, quiz.questionCount || 20);
      }
      if (questions.length === 0) {
        setLoading(false);
        alert("⚠️ Kon geen vragen laden. Controleer je internetverbinding en probeer opnieuw.");
        return;
      }
    }
    const prevCount = parseInt(localStorage.getItem(`played_${quiz.subject}_${quiz.level}`) || "0", 10);
    localStorage.setItem(`played_${quiz.subject}_${quiz.level}`, String(prevCount + 1));
    track("quiz_started", { subject: quiz.subject, level: quiz.level, mode, questions_count: questions.length, has_topic: !!(quiz.topic), has_textbook: !!(quiz.textbook?.bookName) });
    setGameState({ quiz, mode, questions, currentQ: 0, score: 0, answers: [], timePerQuestion: quiz.timePerQuestion != null ? quiz.timePerQuestion : 20, startedAt: Date.now() });
    setPage("play");
  };

  const finishGame = (finalState) => {
    SoundEngine.play("celebrate");
    const result = {
      id: Date.now().toString(), player: userName, quizId: finalState.quiz.id,
      subject: finalState.quiz.subject, level: finalState.quiz.level,
      score: finalState.score, total: finalState.questions.length,
      percentage: Math.round((finalState.score / finalState.questions.length) * 100),
      answers: finalState.answers, questions: finalState.questions, completedAt: new Date().toISOString(),
    };
    setResults((prev) => [...prev, result]);
    setStudentProgress((prev) => [...prev, result]);
    setLeaderboard((prev) => {
      const updated = [...prev, { player: userName, score: result.score, total: result.total, percentage: result.percentage, subject: result.subject, level: result.level, date: result.completedAt }];
      return updated.sort((a, b) => b.percentage - a.percentage || b.total - a.total || b.score - a.score).slice(0, 50);
    });
    track("quiz_completed", { subject: result.subject, level: result.level, score_pct: result.percentage, score: result.score, total: result.total, duration_sec: Math.round((Date.now() - finalState.startedAt) / 1000) });
    // Globaal scorebord (iedereen, ook gasten)
    supabase.from("leaderboard").insert({ player_name: userName, user_id: authUser?.id || null, subject: result.subject, level: result.level, score: result.score, total: result.total, percentage: result.percentage }).catch(() => {});

    // Streak + voortgang opslaan
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    if (authUser) {
      supabase.from("progress").insert({ user_id: authUser.id, subject: result.subject, level: result.level, score: result.score, total: result.total, percentage: result.percentage }).catch(() => {});
      supabase.from("profiles").select("streak_days, last_played_date").eq("id", authUser.id).single().then(({ data: pd }) => {
        const newStreak = pd?.last_played_date === today ? (pd.streak_days || 1) : pd?.last_played_date === yesterday ? (pd.streak_days || 0) + 1 : 1;
        setStreak(newStreak);
        supabase.from("profiles").update({ streak_days: newStreak, last_played_date: today }).eq("id", authUser.id).catch(() => {});
      }).catch(() => {});
    } else {
      try {
        const saved = JSON.parse(localStorage.getItem("ls_streak") || '{"streak":0,"last":""}');
        const newStreak = saved.last === today ? saved.streak : saved.last === yesterday ? saved.streak + 1 : 1;
        setStreak(newStreak);
        localStorage.setItem("ls_streak", JSON.stringify({ streak: newStreak, last: today }));
      } catch {}
    }
    setGameState(null);
    setCurrentQuiz(null);
    setPage("results");
  };

  return (
    <div style={styles.app}>
      <style>{fonts}</style>

      {/* Loading overlay */}
      {loading && (
        <LoadingOverlay mode={loadingMode} onCancel={() => {
          abortControllerRef.current?.abort();
          setLoading(false);
        }} />
      )}
      {page === "home" && (
        <HomePage
          onSaveProfile={({ name, level, role }) => {
            if (authUser) {
              supabase.from("profiles").upsert({ id: authUser.id, display_name: name, level, role }).catch(() => {});
            }
          }}
          authUser={authUser}
          onGoogleLogin={handleGoogleLogin}
          onLogout={handleLogout}
          onSelectRole={(r) => {
            setRole(r);
            track("role_selected", { role: r });
            if (currentQuiz) {
              // Quiz al opgehaald via Supabase-link → direct starten
              startGame(currentQuiz, "self");
            } else {
              setPage(r === "teacher" ? "teacher-home" : "student-home");
            }
          }}
          onBack={role ? () => setPage(role === "teacher" ? "teacher-home" : "student-home") : null}
          userName={userName}
          setUserName={setUserName}
          setUserLevel={setUserLevel}
          pendingCode={pendingCode}
        />
      )}
      {page === "teacher-home" && (
        <TeacherHome
          userName={userName}
          quizzes={quizzes}
          classes={classes}
          onCreateQuiz={() => setPage("create-quiz")}
          onViewProgress={() => setPage("teacher-progress")}
          onManageClasses={() => setPage("class-manager")}
          onBack={() => setPage("home")}
          onHome={() => setPage("home")}
          onStartQuiz={(q) => { setCurrentQuiz(q); startGame(q, "host"); }}
          onDeleteQuiz={(id) => {
            const updated = quizzes.filter((q) => q.id !== id);
            setQuizzes(updated);
            try { localStorage.setItem("ls_quizzes", JSON.stringify(updated)); } catch {}
          }}
        />
      )}
      {page === "class-manager" && (
        <ClassManager
          classes={classes}
          onSave={(updated) => setClasses(updated)}
          onBack={() => setPage("teacher-home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "create-quiz" && (
        <CreateQuiz
          classes={classes}
          onSave={async (q) => {
            abortControllerRef.current = new AbortController();
            setLoading(true);
            setLoadingMode(q.textbook?.bookName ? "textbook" : "self");
            let questions = [];
            if (q.useAI !== false) {
              try {
                questions = await fetchAIQuestions(q.subject, q.level, q.questionCount || 8, q.textbook || null, q.topic || null, abortControllerRef.current.signal);
              } catch (err) {
                setLoading(false);
                if (abortControllerRef.current?.signal.aborted) return;
                alert(`❌ Kon geen vragen genereren.\n\nFoutmelding: ${err.message}\n\nControleer of de API key nog actief is in het Vercel dashboard.`);
                return;
              }
            }
            setLoading(false);
            if (abortControllerRef.current?.signal.aborted) return;
            if (questions.length === 0) {
              const subjectQuestions = SAMPLE_QUESTIONS[q.subject]?.[q.level] || [];
              questions = shuffle(subjectQuestions).slice(0, q.questionCount || 8);
            }
            if (questions.length === 0) {
              alert("Kon geen vragen laden. Controleer je internetverbinding en probeer het opnieuw.");
              return;
            }
            setPendingQuizData({ ...q, preGeneratedQuestions: questions });
            setPage("quiz-preview");
          }}
          onBack={() => setPage("teacher-home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "quiz-preview" && pendingQuizData && (
        <QuizPreview
          quizConfig={pendingQuizData}
          onConfirm={(finalQuestions) => {
            createQuiz({ ...pendingQuizData, preGeneratedQuestions: finalQuestions });
            setPendingQuizData(null);
            setPage("teacher-home");
          }}
          onBack={() => setPage("create-quiz")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "lobby" && (
        <Lobby
          quiz={currentQuiz}
          players={[userName, ...players]}
          isHost={role === "teacher"}
          onStart={() => startGame(currentQuiz, "multi")}
          onBack={() => setPage(role === "teacher" ? "teacher-home" : "student-home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "student-home" && (
        <StudentHome
          userName={userName}
          quizzes={quizzes}
          progress={studentProgress.filter((p) => p.player === userName)}
          onJoinQuiz={async (code) => {
            const upper = code.toUpperCase();
            const local = quizzes.find((q) => q.code.toUpperCase() === upper);
            if (local) { setCurrentQuiz(local); setPendingCode(""); startGame(local, "self"); return; }
            // Niet lokaal → zoek in Supabase
            const { data, error } = await supabase.from("quizzes").select("data").eq("code", upper).single();
            if (error || !data) return "not_found";
            setCurrentQuiz(data.data);
            setPendingCode("");
            startGame(data.data, "self");
          }}
          onSelfStudy={() => setPage("self-study")}
          onTextbook={() => setPage("textbook")}
          onBack={() => setPage("home")}
          onHome={() => setPage("home")}
          onViewProgress={() => setPage("student-progress")}
          onLeaderboard={() => setPage("leaderboard")}
          streak={streak}
          pendingCode={pendingCode}
        />
      )}
      {page === "self-study" && (
        <SelfStudy
          userLevel={userLevel}
          userRole={role}
          onStart={(config) => {
            const topicLabel = config.topic ? ` — ${config.topic}` : "";
            const quiz = {
              id: "self-" + Date.now(),
              subject: config.subject,
              level: config.level,
              questionCount: config.questionCount,
              timePerQuestion: config.timePerQuestion,
              topic: config.topic || null,
              title: `${SUBJECTS.find((s) => s.id === config.subject)?.label}${topicLabel} - Zelf oefenen`,
            };
            setCurrentQuiz(quiz);
            startGame(quiz, "self");
          }}
          onBack={() => setPage("student-home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "textbook" && (
        <TextbookQuiz
          onStart={(config) => {
            const quiz = {
              id: "book-" + Date.now(),
              subject: config.subject || "schoolboek",
              level: config.level,
              questionCount: config.questionCount,
              timePerQuestion: config.timePerQuestion,
              useAI: true,
              textbook: config.textbook,
              title: `${config.textbook.bookName} - ${config.textbook.chapter || "Quiz"}`,
            };
            setCurrentQuiz(quiz);
            startGame(quiz, "self");
          }}
          userRole={role}
          userLevel={userLevel}
          onBack={() => setPage("student-home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "play" && gameState && (
        <PlayQuiz
          gameState={gameState}
          setGameState={setGameState}
          onFinish={finishGame}
          onQuit={() => { track("quiz_quit", { subject: gameState?.quiz?.subject, level: gameState?.quiz?.level, at_question: (gameState?.currentQ ?? 0) + 1, total_questions: gameState?.questions?.length, score_so_far: gameState?.score }); setGameState(null); setPage(role === "teacher" ? "teacher-home" : "student-home"); }}
          onHome={() => { track("quiz_quit", { subject: gameState?.quiz?.subject, level: gameState?.quiz?.level, at_question: (gameState?.currentQ ?? 0) + 1, total_questions: gameState?.questions?.length, score_so_far: gameState?.score, via: "home" }); setGameState(null); setPage("home"); }}
        />
      )}
      {page === "results" && (
        <ResultsPage
          results={results}
          quiz={currentQuiz}
          userName={userName}
          onBack={() => {
            if (currentQuiz?.id?.startsWith("self-")) setPage("self-study");
            else if (currentQuiz?.id?.startsWith("book-")) setPage("textbook");
            else setPage(role === "teacher" ? "teacher-home" : "student-home");
          }}
          onHome={() => setPage("home")}
          onRetry={() => {
            track("quiz_retried", { subject: currentQuiz?.subject, level: currentQuiz?.level });
            if (currentQuiz) startGame(currentQuiz, "self");
            else setPage(role === "teacher" ? "teacher-home" : "student-home");
          }}
          onLeaderboard={() => setPage("leaderboard")}
        />
      )}
      {page === "teacher-progress" && (
        <TeacherProgress
          quizzes={quizzes}
          progress={studentProgress}
          onBack={() => setPage("teacher-home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "student-progress" && (
        <StudentProgressView
          progress={studentProgress.filter((p) => p.player === userName)}
          userName={userName}
          onBack={() => setPage("student-home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "leaderboard" && (
        <Leaderboard
          data={leaderboard}
          currentUser={userName}
          onBack={() => setPage(role === "teacher" ? "teacher-home" : "student-home")}
          onHome={() => setPage("home")}
        />
      )}
    </div>
  );
}


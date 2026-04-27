import { useState, useEffect, useRef } from "react";
import supabase from "./supabase.js";
import styles from "./styles.js";
import { SUBJECTS, LEVELS, SAMPLE_QUESTIONS, TOPIC_QUESTIONS, isLaunchPromoActive } from "./constants.js";
import { track, SoundEngine, fetchAIQuestions, generateCode, shuffle, formatDate, daysUntil } from "./utils.js";

import LoadingOverlay from "./components/LoadingOverlay.jsx";
import HomePage from "./components/HomePage.jsx";
import StudentHome from "./components/StudentHome.jsx";
import SelfStudy from "./components/SelfStudy.jsx";
import TextbookQuiz from "./components/TextbookQuiz.jsx";
import CitoPage from "./components/CitoPage.jsx";
import PlayQuiz from "./components/PlayQuiz.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import TafelsPage from "./components/TafelsPage.jsx";
import RedactiesommenPage from "./components/RedactiesommenPage.jsx";
import BegrijpendLezenPage from "./components/BegrijpendLezenPage.jsx";
import WoordenschatPage from "./components/WoordenschatPage.jsx";
import SpellingPage from "./components/SpellingPage.jsx";
import TeacherHome from "./components/TeacherHome.jsx";
import { ClassManager, CreateQuiz, QuizPreview, Lobby } from "./components/TeacherComponents.jsx";
import { TeacherProgress, StudentProgressView, Leaderboard, Kampioenen } from "./components/StudentProgress.jsx";
import UpgradePage from "./components/UpgradePage.jsx";
import OuderDashboard from "./components/OuderDashboard.jsx";
import ProPage from "./components/ProPage.jsx";
import UpdateBanner from "./components/UpdateBanner.jsx";
import ObliteratorGame from "./components/ObliteratorGame.jsx";
import AdminFeedback from "./components/AdminFeedback.jsx";
import LearnPath from "./components/LearnPath.jsx";
import LearnPathsHub from "./components/LearnPathsHub.jsx";
import Curriculum from "./components/Curriculum.jsx";

const FREE_QUIZ_LIMIT = 20;

// ─── AI question pool helpers ──────────────────────────────────
// Gegenereerde AI-vragen gaan naar Supabase ai_question_pool zodat de
// vragenbank groeit en we bij volgende quizzes AI-calls kunnen vermijden.
const normalizePoolText = (s) => String(s || "").toLowerCase().replace(/\s+/g, " ").trim();
const computeQHash = (question, subject, level) =>
  `${subject}|${level}|${normalizePoolText(question)}`.slice(0, 240);
const buildTextbookKey = (textbook) => {
  if (!textbook?.bookName) return null;
  return [textbook.bookName, textbook.chapter || "", textbook.paragraph || textbook.topic || ""]
    .map(s => String(s || "").trim()).join("|").slice(0, 240);
};
const fetchPoolQuestions = async (subject, level, topic, textbookKey, count) => {
  try {
    let query = supabase.from("ai_question_pool")
      .select("question, options, answer, explanation, svg, youtube_url")
      .eq("subject", subject)
      .eq("level", level);
    query = topic ? query.eq("topic", topic) : query.is("topic", null);
    query = textbookKey ? query.eq("textbook_key", textbookKey) : query.is("textbook_key", null);
    const { data } = await query.limit(Math.max(count * 5, 30));
    return data || [];
  } catch { return []; }
};
const saveQuestionsToPool = (qs, subject, level, topic, textbookKey) => {
  if (!qs?.length) return;
  const rows = qs
    .filter(q => q && q.q && Array.isArray(q.options) && q.options.length >= 2 && typeof q.answer === "number")
    .map(q => ({
      subject, level,
      topic: topic || null,
      textbook_key: textbookKey,
      question: q.q,
      options: q.options,
      answer: q.answer,
      explanation: q.explanation || null,
      svg: q.svg || null,
      youtube_url: q.youtubeUrl || null,
      q_hash: computeQHash(q.q, subject, level),
    }));
  if (!rows.length) return;
  supabase.from("ai_question_pool")
    .upsert(rows, { onConflict: "q_hash", ignoreDuplicates: true })
    .then(() => {})
    .catch(() => {});
};
const poolRowToQuestion = (r) => ({
  q: r.question,
  options: r.options,
  answer: r.answer,
  explanation: r.explanation || undefined,
  svg: r.svg || undefined,
  youtubeUrl: r.youtube_url || undefined,
});

const TAFEL_VIDEOS = {
  1:  "https://www.youtube.com/watch?v=1rXBuNLDuM0",
  2:  "https://www.youtube.com/watch?v=rnHUjxmFYG4",
  3:  "https://www.youtube.com/watch?v=42Qe8ONZfX0",
  4:  "https://www.youtube.com/watch?v=aLV9XC0UtC8",
  5:  "https://www.youtube.com/watch?v=iNaqcwN7cSs",
  6:  "https://www.youtube.com/watch?v=iAHwxUE4ULk",
  7:  "https://www.youtube.com/watch?v=rZZzGFhKcas",
  8:  "https://www.youtube.com/watch?v=10FO_bwGmqE",
  9:  "https://www.youtube.com/watch?v=5bF7n2hXjd0",
  10: "https://www.youtube.com/watch?v=szD6nX6fcHg",
  11: "https://www.youtube.com/results?search_query=tafel+van+11+kinderen",
  12: "https://www.youtube.com/results?search_query=tafel+van+12+kinderen",
};

function generateTafelQuestions(tafel, count) {
  const makePair = (n, t) => {
    const correct = n * t;
    const wrongs = new Set();
    while (wrongs.size < 3) {
      const steps = Math.floor(Math.random() * 4) + 1;
      const candidate = Math.random() < 0.5 ? correct + steps * t : Math.max(t, correct - steps * t);
      if (candidate !== correct && candidate > 0) wrongs.add(candidate);
    }
    const opts = [correct, ...wrongs].sort(() => Math.random() - 0.5);
    return { q: `${n} × ${t} = ?`, options: opts.map(String), answer: opts.indexOf(correct), youtubeUrl: TAFEL_VIDEOS[t] };
  };
  if (tafel === "mix") {
    const pairs = [];
    for (let t = 1; t <= 12; t++) for (let n = 1; n <= 12; n++) pairs.push([n, t]);
    return pairs.sort(() => Math.random() - 0.5).slice(0, count).map(([n, t]) => makePair(n, t));
  }
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return [...nums].sort(() => Math.random() - 0.5).slice(0, Math.min(count, 12)).map(n => makePair(n, tafel));
}

const fonts = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka:wght@400;500;600;700&display=swap');
`;

export default function App() {
  // Deeplinks: ?play=obliterator (mini-game), ?go=X (vak vanaf SEO-landingpage)
  const initialPage = (() => {
    if (typeof window === "undefined") return "home";
    try {
      const sp = new URLSearchParams(window.location.search);
      if (sp.get("play") === "obliterator") return "obliteratorDirect";
      const go = sp.get("go");
      if (go) {
        const map = {
          cito: "cito",
          tafels: "tafels",
          spelling: "spelling",
          woordenschat: "woordenschat",
          "begrijpend-lezen": "begrijpend-lezen",
          redactiesommen: "redactiesommen",
          schoolboeken: "textbook",
          leerkracht: "teacher-home",
          scorebord: "leaderboard",
        };
        if (map[go]) return map[go];
      }
    } catch {}
    return "home";
  })();
  const [page, setPage] = useState(initialPage);
  const [activeLearnPathId, setActiveLearnPathId] = useState(null);
  const [activeLearnStepIdx, setActiveLearnStepIdx] = useState(null);
  const [learnPathReturnPage, setLearnPathReturnPage] = useState("home");
  const [activeCurriculumId, setActiveCurriculumId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  useEffect(() => {
    const on = () => setIsOffline(false);
    const off = () => setIsOffline(true);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => { window.removeEventListener("online", on); window.removeEventListener("offline", off); };
  }, []);
  const [loadingMode, setLoadingMode] = useState("self");
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [userSchoolType, setUserSchoolType] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [classes, setClasses] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);
  const [studentProgress, setStudentProgress] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [hallOfFame, setHallOfFame] = useState({});
  const [pendingQuizData, setPendingQuizData] = useState(null);
  const [pendingCode, setPendingCode] = useState("");
  const [pendingFeature, setPendingFeature] = useState(null);
  const abortControllerRef = useRef(null);
  const [authUser, setAuthUser] = useState(null);
  const [streak, setStreak] = useState(0);
  const [subscription, setSubscription] = useState({ tier: "free" });
  const [schoolLogoUrl, setSchoolLogoUrl] = useState("");
  const pageRef = useRef("home");
  const onboardingActiveRef = useRef(false);

  // Auth: laad sessie + luister naar wijzigingen
  useEffect(() => {
    supabase.auth?.getSession?.().then(({ data: { session } = {} } = {}) => {
      if (session?.user) setAuthUser(session.user);
    }).catch(() => {});
    const sub = supabase.auth?.onAuthStateChange?.((_event, session) => {
      const u = session?.user ?? null;
      setAuthUser(u);
      if (u) {
        supabase.from("subscriptions").select("*").eq("user_id", u.id).single().then(({ data }) => {
          if (data) setSubscription(data);
        }).catch(() => {});
        supabase.from("profiles").select("*").eq("id", u.id).single().then(({ data }) => {
          if (data?.display_name) setUserName(data.display_name);
          if (data?.level) setUserLevel(data.level);
          if (data?.school_type) setUserSchoolType(data.school_type);
          if (data?.streak_days) setStreak(data.streak_days);
          if (data?.school_logo_url) setSchoolLogoUrl(data.school_logo_url);
          // Rol wel laden, maar NIET automatisch wegnavigeren — app blijft op home
          // (gebruiker kiest zelf of-ie naar dashboard wil via de homepage)
          if (data?.role) {
            setRole(data.role);
          } else {
            const googleName = u.user_metadata?.full_name || u.user_metadata?.name || "";
            if (googleName) setUserName(googleName);
            // Geen Supabase profiel rol — check localStorage (bijv. gebruiker was eerst gast)
            try {
              const saved = JSON.parse(localStorage.getItem("ls_user") || "{}");
              if (saved.role && saved.name) {
                setRole(saved.role);
                if (saved.level) setUserLevel(saved.level);
                if (saved.schoolType) setUserSchoolType(saved.schoolType);
                // Sla rol ook op in Supabase profiel voor volgende keer
                supabase.from("profiles").upsert({ id: u.id, display_name: saved.name, level: saved.level || "", role: saved.role }).then(() => {}).catch(() => {});
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
    setUserSchoolType("");
    setRole(null);
    setPage("home");
  };

  // Load stored data + check URL voor directe quiz-code
  useEffect(() => {
    try { const q = localStorage.getItem("ls_quizzes"); if (q) setQuizzes(JSON.parse(q)); } catch {}
    try { const p = localStorage.getItem("ls_progress"); if (p) setStudentProgress(JSON.parse(p)); } catch {}
    // Lokale leaderboard niet meer laden — Supabase is de bron van waarheid
    localStorage.removeItem("ls_leaderboard");
    try { const h = localStorage.getItem("ls_hof"); if (h) setHallOfFame(JSON.parse(h)); } catch {}
    try { const c = localStorage.getItem("ls_classes"); if (c) setClasses(JSON.parse(c)); } catch {}
    try { const u = localStorage.getItem("ls_user"); if (u) { const d = JSON.parse(u); if (d.name) setUserName(d.name); if (d.level) setUserLevel(d.level); if (d.role) setRole(d.role); if (d.schoolType) setUserSchoolType(d.schoolType); } } catch {}
    try { const s = JSON.parse(localStorage.getItem("ls_streak") || '{"streak":0,"last":""}'); const today = new Date().toISOString().split("T")[0]; const yesterday = new Date(Date.now()-86400000).toISOString().split("T")[0]; if (s.last === today || s.last === yesterday) setStreak(s.streak); } catch {}
    // URL parameter ?code=XXXXX (alleen quiz-codes, niet Supabase OAuth codes)
    const urlCode = new URLSearchParams(window.location.search).get("code");
    if (urlCode && urlCode.length <= 8) setPendingCode(urlCode.toUpperCase());
  }, []);

  useEffect(() => { pageRef.current = page; }, [page]);
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
          alert(`❌ Toets met code "${pendingCode}" niet gevonden.\n\nVraag de leerkracht om een nieuwe link te sturen.`);
          setPendingCode("");
          return;
        }
        const quiz = data.data;
        setCurrentQuiz(quiz);
        setPendingCode("");
        // Lees naam direct uit localStorage om stale closure te vermijden
        let hasUser = false;
        try { const u = localStorage.getItem("ls_user"); if (u) { const d = JSON.parse(u); hasUser = !!d.name; } } catch {}
        setPage("home"); // altijd eerst homepage tonen, niet automatisch starten
      });
  }, [pendingCode, quizzes]);

  const trialDaysLeft = (() => {
    if (!subscription?.trial_started_at) return null;
    const started = new Date(subscription.trial_started_at);
    const diff = 30 - Math.floor((Date.now() - started.getTime()) / 86400000);
    return diff > 0 ? diff : 0;
  })();
  const isOnTrial = trialDaysLeft !== null && trialDaysLeft > 0;
  const isTeacherPro = isLaunchPromoActive() || isOnTrial || subscription?.tier === "teacher_pro";
  const quizLimitReached = !isTeacherPro && quizzes.length >= FREE_QUIZ_LIMIT;

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
      const hasPredefinedTopicQuestions = hasTopic && (TOPIC_QUESTIONS[quiz.topic.toLowerCase()] || []).length > 0;

      const hasSampleQuestions = (SAMPLE_QUESTIONS[quiz.subject]?.[quiz.level] || []).length > 0;
      const hasSubjectTopicQuestions = !hasTopic && (TOPIC_QUESTIONS[quiz.subject?.toLowerCase()] || []).length > 0;
      const playedKey = `played_${quiz.subject}_${quiz.level}`;
      const playCount = parseInt(localStorage.getItem(playedKey) || "0", 10);
      const questionsPerRound = quiz.questionCount || 10;
      const standardPoolSize = (SAMPLE_QUESTIONS[quiz.subject]?.[quiz.level] || []).length;
      const hasExhaustedPool = hasSampleQuestions && (playCount * questionsPerRound >= standardPoolSize);
      const useAIThisRound = (hasTopic && !hasPredefinedTopicQuestions) || hasTextbook || (!hasSampleQuestions && !hasSubjectTopicQuestions && !hasPredefinedTopicQuestions) || hasExhaustedPool;
      if (useAIThisRound && quiz.useAI !== false) {
        const poolCount = quiz.questionCount || 8;
        const topicKey = quiz.topic || null;
        const textbookKey = buildTextbookKey(quiz.textbook);
        // Stap 1: probeer eerst de gedeelde vragenbank (eerder gegenereerde
        // AI-vragen). Scheelt een AI-call als er genoeg variatie in pool zit.
        const poolRows = await fetchPoolQuestions(quiz.subject, quiz.level, topicKey, textbookKey, poolCount);
        const MIN_POOL_FOR_REUSE = poolCount * 2; // pas hergebruiken bij voldoende variatie
        if (poolRows.length >= MIN_POOL_FOR_REUSE) {
          questions = shuffle(poolRows.map(poolRowToQuestion)).slice(0, poolCount);
        } else {
          // Stap 2: pool te klein — val terug op AI-generatie
          // AI-limiet check: gratis gebruikers max 5 AI-quiz sessies per dag
          const FREE_AI_DAILY_LIMIT = 5;
          const isProUser = isLaunchPromoActive() || (subscription?.tier && subscription.tier !== "free");
          if (!isProUser) {
            try {
              const today = new Date().toISOString().split("T")[0];
              const aiUsage = JSON.parse(localStorage.getItem("ls_ai_usage") || '{"date":"","count":0}');
              const todayCount = aiUsage.date === today ? aiUsage.count : 0;
              if (todayCount >= FREE_AI_DAILY_LIMIT) {
                setPage("pro");
                return;
              }
              localStorage.setItem("ls_ai_usage", JSON.stringify({ date: today, count: todayCount + 1 }));
            } catch {}
          }
          abortControllerRef.current = new AbortController();
          setLoading(true);
          setLoadingMode(hasTextbook ? "textbook" : "self");
          try {
            questions = await fetchAIQuestions(quiz.subject, quiz.level, poolCount, quiz.textbook || null, quiz.topic || null, abortControllerRef.current.signal);
            // Stap 3: sla verse AI-vragen op in de pool zodat de vragenbank groeit
            if (questions?.length) saveQuestionsToPool(questions, quiz.subject, quiz.level, topicKey, textbookKey);
          } catch (err) {
            setLoading(false);
            if (abortControllerRef.current?.signal.aborted) return;
            const isOffline = !navigator.onLine || err.message?.includes("fetch") || err.message?.includes("network") || err.message?.includes("Failed to fetch");
            // Val eventueel terug op pool-vragen ook al is het onder het minimum — beter dan niks
            if (poolRows.length > 0) {
              questions = shuffle(poolRows.map(poolRowToQuestion)).slice(0, poolCount);
            }
            if (!questions?.length && hasTopic && !isOffline) {
              alert(`❌ Kon geen vragen maken over "${quiz.topic}".\n\nFoutmelding: ${err.message}\n\nControleer of de API key nog actief is in het Vercel dashboard.`);
              return;
            }
            console.warn("AI fout, terugval op standaardvragen:", err.message);
          }
          setLoading(false);
          if (abortControllerRef.current?.signal.aborted) return;
        }
      }

      if (questions.length === 0) {
        const subjectQuestions = SAMPLE_QUESTIONS[quiz.subject]?.[quiz.level]
          || (quiz.topic ? TOPIC_QUESTIONS[quiz.topic.toLowerCase()] : null)
          || TOPIC_QUESTIONS[quiz.subject?.toLowerCase()]
          || [];
        questions = shuffle(subjectQuestions).slice(0, quiz.questionCount || 20);
      }
      if (questions.length === 0) {
        setLoading(false);
        alert("⚠️ Kon geen vragen laden. Controleer je internetverbinding en probeer opnieuw.");
        return;
      }
    }
    // Shuffle antwoordopties zodat het correcte antwoord willekeurig verdeeld is over A/B/C/D
    questions = questions.map((q) => {
      if (!q.options || q.options.length < 2) return q;
      const correctText = q.options[q.answer];
      // Verwijder duplicaten (behoud correct antwoord altijd)
      const seen = new Set();
      const deduped = q.options.filter((opt) => {
        const key = String(opt).trim().toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      const shuffled = [...deduped];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return { ...q, options: shuffled, answer: shuffled.indexOf(correctText) };
    });
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
      topic: finalState.quiz.topic || null,
      title: finalState.quiz.title || null,
      citoId: finalState.quiz.citoId || null, citoGroep: finalState.quiz.citoGroep || null,
      score: finalState.score, total: finalState.questions.length,
      percentage: Math.round((finalState.score / finalState.questions.length) * 100),
      timeTaken: Math.round((Date.now() - finalState.startedAt) / 1000),
      answers: finalState.answers, questions: finalState.questions, completedAt: new Date().toISOString(),
    };
    setResults((prev) => [...prev, result]);
    setStudentProgress((prev) => [...prev, result]);
    setLeaderboard((prev) => {
      const updated = [...prev, { player: userName, score: result.score, total: result.total, percentage: result.percentage, subject: result.subject, level: result.level, topic: result.topic, title: result.title, date: result.completedAt, timeTaken: result.timeTaken }];
      return updated.sort((a, b) => b.percentage - a.percentage || (a.timeTaken || 9999) - (b.timeTaken || 9999) || b.total - a.total || b.score - a.score).slice(0, 50);
    });
    // Hall of Fame: top 5 per vak+niveau opslaan met vragen (lokaal + Supabase)
    if (result.percentage === 100) {
      // Lokaal opslaan
      try {
        const hofKey = `${result.subject}-${result.level}`;
        const hof = JSON.parse(localStorage.getItem("ls_hof") || "{}");
        const entries = hof[hofKey] || [];
        entries.push({ player: userName, percentage: 100, timeTaken: result.timeTaken, completedAt: result.completedAt, questions: result.questions });
        entries.sort((a, b) => (a.timeTaken || 9999) - (b.timeTaken || 9999));
        hof[hofKey] = entries.slice(0, 5);
        localStorage.setItem("ls_hof", JSON.stringify(hof));
        setHallOfFame({ ...hof });
      } catch {}
      // Supabase opslaan + top 5 bewaken
      supabase.from("hall_of_fame").insert({ subject: result.subject, level: result.level, player_name: userName, time_taken: result.timeTaken, percentage: 100, completed_at: result.completedAt, questions: result.questions })
        .then(() => supabase.from("hall_of_fame").select("id, time_taken").eq("subject", result.subject).eq("level", result.level).order("time_taken", { ascending: true }))
        .then(({ data: rows }) => {
          if (rows && rows.length > 5) {
            const toDelete = rows.slice(5).map(r => r.id);
            supabase.from("hall_of_fame").delete().in("id", toDelete).then(() => {}).catch(() => {});
          }
        }).catch(() => {});
    }
    track("quiz_completed", { subject: result.subject, level: result.level, score_pct: result.percentage, score: result.score, total: result.total, duration_sec: result.timeTaken });
    // Globaal scorebord — alleen inserten als er een echte naam is (geen lege/whitespace)
    const naamSchoon = (userName || "").trim();
    if (naamSchoon.length >= 2) {
      supabase.from("leaderboard").insert({ player_name: naamSchoon, user_id: authUser?.id || null, subject: result.subject, level: result.level, topic: result.topic || null, title: result.title || null, score: result.score, total: result.total, percentage: result.percentage, quiz_id: result.quizId || null, time_taken: result.timeTaken }).then(() => {}).catch(() => {});
    } else {
      track("leaderboard_skipped_no_name", { subject: result.subject, level: result.level });
    }

    // Streak + voortgang opslaan
    const today = new Date().toISOString().split("T")[0];
    const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
    if (authUser) {
      supabase.from("progress").insert({ user_id: authUser.id, subject: result.subject, level: result.level, score: result.score, total: result.total, percentage: result.percentage }).then(() => {}).catch(() => {});
      supabase.from("profiles").select("streak_days, last_played_date").eq("id", authUser.id).single().then(({ data: pd }) => {
        const newStreak = pd?.last_played_date === today ? (pd.streak_days || 1) : pd?.last_played_date === yesterday ? (pd.streak_days || 0) + 1 : 1;
        setStreak(newStreak);
        supabase.from("profiles").update({ streak_days: newStreak, last_played_date: today }).eq("id", authUser.id).then(() => {}).catch(() => {});
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
    <div className="app-shell" style={styles.app}>
      <style>{fonts}</style>

      {/* Auto-update banner — toont wanneer nieuwe SW geïnstalleerd is */}
      <UpdateBanner />

      {/* Offline banner */}
      {isOffline && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999, background: "#b71c1c", color: "#fff", textAlign: "center", padding: "8px 16px", fontSize: 13, fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}>
          📵 Geen internet — je kunt nog oefenen met standaardvragen
        </div>
      )}

      {/* Loading overlay */}
      {loading && (
        <LoadingOverlay mode={loadingMode} onCancel={() => {
          abortControllerRef.current?.abort();
          setLoading(false);
        }} />
      )}
      {page === "learn-path" && activeLearnPathId && (
        <LearnPath
          pathId={activeLearnPathId}
          initialStepIdx={activeLearnStepIdx}
          userName={userName || "Speler"}
          authUser={authUser}
          onBack={() => setPage(learnPathReturnPage || "home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "learn-paths-hub" && (
        <LearnPathsHub
          userName={userName || "Speler"}
          authUser={authUser}
          onPickPath={(id) => {
            setActiveLearnPathId(id);
            setActiveLearnStepIdx(null);
            setLearnPathReturnPage("learn-paths-hub");
            setPage("learn-path");
          }}
          onPickCurriculum={(id) => {
            setActiveCurriculumId(id);
            setPage("curriculum");
          }}
          onBack={() => setPage("home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "curriculum" && activeCurriculumId && (
        <Curriculum
          curriculumId={activeCurriculumId}
          userName={userName || "Speler"}
          onPickStep={(pid, stepIdx) => {
            setActiveLearnPathId(pid);
            setActiveLearnStepIdx(stepIdx);
            setLearnPathReturnPage("curriculum");
            setPage("learn-path");
          }}
          onBack={() => setPage("learn-paths-hub")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "obliteratorDirect" && (
        <ObliteratorGame
          userName={userName || "Speler"}
          authUser={authUser}
          wrongQuestions={[]}
          vanDeelLink={true}
          onNaarStudiebol={() => {
            // ruim query-param op zodat refresh in normale flow start
            try { window.history.replaceState({}, document.title, window.location.pathname); } catch {}
            setPage("home");
          }}
          onClose={() => {
            try { window.history.replaceState({}, document.title, window.location.pathname); } catch {}
            setPage("home");
          }}
        />
      )}
      {page === "obliteratorPlay" && (
        <ObliteratorGame
          userName={userName || "Speler"}
          authUser={authUser}
          wrongQuestions={[]}
          vanDeelLink={false}
          onClose={() => setPage("home")}
        />
      )}
      {page === "home" && (
        <HomePage
          onSaveProfile={({ name, level, role, schoolType }) => {
            if (authUser) {
              supabase.from("profiles").upsert({ id: authUser.id, display_name: name, level, role, school_type: schoolType || "" }).then(() => {}).catch(() => {});
            }
          }}
          authUser={authUser}
          onGoogleLogin={handleGoogleLogin}
          onLogout={handleLogout}
          onOnboardingStart={() => { onboardingActiveRef.current = true; }}
          onOuderDashboard={() => setPage("ouder-dashboard")}
          onAdminFeedback={() => setPage("admin-feedback")}
          onPlayObliterator={() => setPage("obliteratorPlay")}
          onPro={() => setPage("pro")}
          onLearnPath={(id) => { setActiveLearnPathId(id); setActiveLearnStepIdx(null); setLearnPathReturnPage("home"); setPage("learn-path"); }}
          onLearnPathsHub={() => setPage("learn-paths-hub")}
          onSelectRole={(r, feature) => {
            onboardingActiveRef.current = false;
            setRole(r);
            track("role_selected", { role: r, feature: feature || null });
            if (currentQuiz) { startGame(currentQuiz, "self"); return; }
            if (feature === "schoolboeken") { setPage("textbook"); return; }
            if (feature === "scorebord") { setPage("leaderboard"); return; }
            if (feature === "leerkrachten") { setPage("teacher-home"); return; }
            if (feature === "cito") { setPage("cito"); return; }
            if (feature === "tafels") { setPage("tafels"); return; }
            if (feature === "redactiesommen") { setPage("redactiesommen"); return; }
            if (feature === "begrijpend-lezen") { setPage("begrijpend-lezen"); return; }
            if (feature === "woordenschat") { setPage("woordenschat"); return; }
            if (feature === "spelling") { setPage("spelling"); return; }
            if (feature === "topografie" || feature === "ai-vragen" || feature === "eindexamen") {
              setPendingFeature(feature);
              setPage("self-study");
              return;
            }
            setPage(r === "teacher" ? "teacher-home" : "student-home");
          }}
          onBack={role ? () => setPage(role === "teacher" ? "teacher-home" : "student-home") : null}
          userName={userName}
          setUserName={setUserName}
          setUserLevel={setUserLevel}
          setUserSchoolType={setUserSchoolType}
          pendingCode={pendingCode}
        />
      )}
      {page === "teacher-home" && (
        <TeacherHome
          userName={userName}
          quizzes={quizzes}
          classes={classes}
          quizLimitReached={quizLimitReached}
          quizCount={quizzes.length}
          quizLimit={FREE_QUIZ_LIMIT}
          isTeacherPro={isTeacherPro}
          trialDaysLeft={trialDaysLeft}
          onCreateQuiz={() => quizLimitReached ? setPage("pro") : setPage("create-quiz")}
          onViewProgress={() => setPage("teacher-progress")}
          onManageClasses={() => setPage("class-manager")}
          onUpgrade={() => setPage("pro")}
          onBack={() => setPage("home")}
          onHome={() => setPage("home")}
          schoolLogoUrl={schoolLogoUrl}
          onLogoUpdate={(url) => {
            setSchoolLogoUrl(url);
            if (authUser) supabase.from("profiles").update({ school_logo_url: url }).eq("id", authUser.id).then(() => {}).catch(() => {});
          }}
          onStartQuiz={(q) => { setCurrentQuiz(q); startGame(q, "host"); }}
          onDeleteQuiz={(id) => {
            const updated = quizzes.filter((q) => q.id !== id);
            setQuizzes(updated);
            try { localStorage.setItem("ls_quizzes", JSON.stringify(updated)); } catch {}
          }}
          onDuplicateQuiz={(q) => {
            const copy = { ...q, id: "quiz-" + Date.now(), code: generateCode(), title: (q.title ? q.title + " (kopie)" : undefined), deadline: null, createdAt: new Date().toISOString() };
            const updated = [...quizzes, copy];
            setQuizzes(updated);
            try { localStorage.setItem("ls_quizzes", JSON.stringify(updated)); } catch {}
            supabase.from("quizzes").insert({ id: copy.id, code: copy.code, data: copy }).then(() => {}).catch(() => {});
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
            // Tafels: genereer vragen lokaal, geen AI nodig
            if (q.tafelNummer) {
              const questions = generateTafelQuestions(q.tafelNummer, q.questionCount || 10);
              setPendingQuizData({ ...q, preGeneratedQuestions: questions });
              setPage("quiz-preview");
              return;
            }
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
          userLevel={userLevel}
          userSchoolType={userSchoolType}
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
          onViewResult={(r) => { setResults([r]); setCurrentQuiz(null); setPage("results"); }}
          onDeleteResult={(id) => setStudentProgress(prev => prev.filter(p => p.id !== id))}
          streak={streak}
          pendingCode={pendingCode}
        />
      )}
      {page === "self-study" && (
        <SelfStudy
          userLevel={userLevel}
          userRole={role}
          initialSubject={pendingFeature}
          onStart={(config) => {
            setPendingFeature(null);
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
          onBack={() => { setPendingFeature(null); setPage("student-home"); }}
          onHome={() => { setPendingFeature(null); setPage("home"); }}
        />
      )}
      {page === "cito" && (
        <CitoPage
          citoProgress={studentProgress.filter(r => r.player === userName && r.citoId)}
          onStart={(config) => {
            const topicKey = config.groep === "8" ? `cito groep8-${config.citoId}` : `cito ${config.citoId}`;
            const pool = TOPIC_QUESTIONS[topicKey] || [];
            const shuffled = [...pool].sort(() => Math.random() - 0.5);
            const label = { gemengd: "Alles gemengd", rekenen: "Rekenen & Wiskunde", taal: "Taal", "begrijpend-lezen": "Begrijpend Lezen", wereldorientatie: "Wereld Oriëntatie", studievaardigheden: "Studievaardigheden" }[config.citoId] || "Cito";
            const quiz = {
              id: "cito-" + Date.now(),
              subject: config.subject,
              level: config.level,
              citoId: config.citoId,
              citoGroep: config.groep,
              questionCount: config.questionCount,
              timePerQuestion: config.timePerQuestion,
              preGeneratedQuestions: shuffled.slice(0, config.questionCount),
              topic: config.topic,
              title: `Cito — ${label}`,
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
          userSchoolType={userSchoolType}
          onBack={() => setPage("student-home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "play" && gameState && (
        <PlayQuiz
          gameState={gameState}
          setGameState={setGameState}
          onFinish={finishGame}
          onQuit={() => { track("quiz_quit", { subject: gameState?.quiz?.subject, level: gameState?.quiz?.level, at_question: (gameState?.currentQ ?? 0) + 1, total_questions: gameState?.questions?.length, score_so_far: gameState?.score }); const wasTafels = gameState?.quiz?.id?.startsWith("self-tafels"); const wasRedactie = gameState?.quiz?.id?.startsWith("self-redactie"); const wasBl = gameState?.quiz?.id?.startsWith("self-bl-"); const wasWs = gameState?.quiz?.id?.startsWith("self-ws-"); const wasSp = gameState?.quiz?.id?.startsWith("self-sp-"); const wasCito = gameState?.quiz?.id?.startsWith("cito-"); setGameState(null); setCurrentQuiz(null); setPage(wasTafels ? "tafels" : wasRedactie ? "redactiesommen" : wasBl ? "begrijpend-lezen" : wasWs ? "woordenschat" : wasSp ? "spelling" : wasCito ? "cito" : role === "teacher" ? "teacher-home" : "student-home"); }}
          onHome={() => { track("quiz_quit", { subject: gameState?.quiz?.subject, level: gameState?.quiz?.level, at_question: (gameState?.currentQ ?? 0) + 1, total_questions: gameState?.questions?.length, score_so_far: gameState?.score, via: "home" }); setGameState(null); setCurrentQuiz(null); setPage("home"); }}
          onLearnPathRequest={(req) => {
            const isObj = req && typeof req === "object";
            setActiveLearnPathId(isObj ? req.pathId : req);
            setActiveLearnStepIdx(isObj && typeof req.stepIdx === "number" ? req.stepIdx : null);
            setLearnPathReturnPage("play");
            setPage("learn-path");
          }}
        />
      )}
      {page === "tafels" && (
        <TafelsPage
          userName={userName}
          studentProgress={studentProgress}
          onStart={(tafelNum) => {
            const questions = generateTafelQuestions(tafelNum, 10);
            const topic = tafelNum === "mix" ? "tafels mix" : `tafel van ${tafelNum}`;
            const quiz = {
              id: "self-tafels-" + Date.now(),
              subject: "rekenen",
              level: userLevel || "groep5",
              topic,
              tafelNummer: tafelNum,
              questionCount: 5,
              timePerQuestion: 0,
              preGeneratedQuestions: questions,
            };
            setCurrentQuiz(quiz);
            startGame(quiz, "self");
          }}
          onBack={() => setPage(role ? "student-home" : "home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "redactiesommen" && (
        <RedactiesommenPage
          userName={userName}
          studentProgress={studentProgress}
          onStart={(catId) => {
            const topic = catId === "mix" ? "redactiesommen mix" : `redactiesommen ${catId}`;
            const pool = TOPIC_QUESTIONS[topic] || [];
            const preGeneratedQuestions = shuffle([...pool]).slice(0, 10);
            const quiz = {
              id: "self-redactie-" + Date.now(),
              subject: "rekenen",
              level: userLevel || "groep6",
              topic,
              questionCount: 5,
              timePerQuestion: 0,
              preGeneratedQuestions,
            };
            setCurrentQuiz(quiz);
            startGame(quiz, "self");
          }}
          onBack={() => setPage(role ? "student-home" : "home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "spelling" && (
        <SpellingPage
          userName={userName}
          studentProgress={studentProgress}
          onStart={(catId) => {
            const topic = catId === "mix" ? "spelling mix" : `spelling ${catId}`;
            const pool = TOPIC_QUESTIONS[topic] || [];
            const preGeneratedQuestions = shuffle([...pool]).slice(0, 10);
            const quiz = {
              id: "self-sp-" + Date.now(),
              subject: "spelling",
              level: userLevel || "groep5",
              topic,
              questionCount: 5,
              timePerQuestion: 0,
              preGeneratedQuestions,
            };
            setCurrentQuiz(quiz);
            startGame(quiz, "self");
          }}
          onBack={() => setPage(role ? "student-home" : "home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "woordenschat" && (
        <WoordenschatPage
          userName={userName}
          studentProgress={studentProgress}
          onStart={(catId) => {
            const topic = catId === "mix" ? "woordenschat mix" : `woordenschat ${catId}`;
            const pool = TOPIC_QUESTIONS[topic] || [];
            const preGeneratedQuestions = shuffle([...pool]).slice(0, 10);
            const quiz = {
              id: "self-ws-" + Date.now(),
              subject: "woordenschat",
              level: userLevel || "groep7",
              topic,
              questionCount: 5,
              timePerQuestion: 0,
              preGeneratedQuestions,
            };
            setCurrentQuiz(quiz);
            startGame(quiz, "self");
          }}
          onBack={() => setPage(role ? "student-home" : "home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "begrijpend-lezen" && (
        <BegrijpendLezenPage
          userName={userName}
          studentProgress={studentProgress}
          onStart={(catId) => {
            const topic = catId === "mix" ? "begrijpend-lezen mix" : `begrijpend-lezen ${catId}`;
            const pool = TOPIC_QUESTIONS[topic] || [];
            const preGeneratedQuestions = shuffle([...pool]).slice(0, 10);
            const quiz = {
              id: "self-bl-" + Date.now(),
              subject: "begrijpend-lezen",
              level: userLevel || "groep7",
              topic,
              questionCount: 5,
              timePerQuestion: 0,
              preGeneratedQuestions,
            };
            setCurrentQuiz(quiz);
            startGame(quiz, "self");
          }}
          onBack={() => setPage(role ? "student-home" : "home")}
          onHome={() => setPage("home")}
        />
      )}
      {page === "results" && (
        <ResultsPage
          results={results}
          quiz={currentQuiz}
          userName={userName}
          authUser={authUser}
          onLogin={handleGoogleLogin}
          onBack={() => {
            if (currentQuiz?.id?.startsWith("self-tafels")) { setPage("tafels"); return; }
            if (currentQuiz?.id?.startsWith("self-redactie")) { setPage("redactiesommen"); return; }
            if (currentQuiz?.id?.startsWith("self-bl-")) { setPage("begrijpend-lezen"); return; }
            if (currentQuiz?.id?.startsWith("self-ws-")) { setPage("woordenschat"); return; }
            if (currentQuiz?.id?.startsWith("self-sp-")) { setPage("spelling"); return; }
            if (currentQuiz?.id?.startsWith("cito-")) { setPage("cito"); return; }
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
          onReplay={() => {
            const latest = results[results.length - 1];
            if (!latest?.questions?.length || !currentQuiz) return;
            startGame({ ...currentQuiz, id: currentQuiz.id + "-replay-" + Date.now(), preGeneratedQuestions: latest.questions }, "self");
          }}
          onLeaderboard={() => setPage("leaderboard")}
          onNextTafel={(() => {
            const topic = currentQuiz?.topic;
            if (!topic?.startsWith("tafel van ")) return undefined;
            const num = parseInt(topic.replace("tafel van ", ""));
            if (num >= 12) return undefined;
            return () => {
              const nextNum = num + 1;
              const questions = generateTafelQuestions(nextNum, 10);
              const quiz = { id: "self-tafels-" + Date.now(), subject: "rekenen", level: userLevel || "groep5", topic: `tafel van ${nextNum}`, tafelNummer: nextNum, questionCount: 5, timePerQuestion: 0, preGeneratedQuestions: questions };
              setCurrentQuiz(quiz);
              startGame(quiz, "self");
            };
          })()}
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
          hallOfFame={hallOfFame}
          currentUser={userName}
          onBack={() => setPage(role === "teacher" ? "teacher-home" : "student-home")}
          onHome={() => setPage("home")}
          onKampioenen={() => setPage("kampioenen")}
          onChallenge={(entry, questions) => {
            const quiz = { id: "self-" + Date.now(), subject: entry.subject, level: entry.level, questionCount: questions.length, timePerQuestion: 0, topic: entry.topic || null, title: null, preGeneratedQuestions: questions };
            startGame(quiz, "self");
          }}
        />
      )}
      {page === "kampioenen" && (
        <Kampioenen
          currentUser={userName}
          hallOfFame={hallOfFame}
          onBack={() => setPage("leaderboard")}
          onHome={() => setPage("home")}
          onChallenge={(entry, questions) => {
            const quiz = { id: "self-" + Date.now(), subject: entry.subject, level: entry.level, questionCount: questions.length, timePerQuestion: 0, topic: entry.topic || null, title: null, preGeneratedQuestions: questions };
            startGame(quiz, "self");
          }}
        />
      )}
      {page === "pro" && (
        <ProPage
          authUser={authUser}
          defaultPlan={role === "teacher" ? "teacher_pro" : "parent_pro"}
          onBack={() => setPage(role === "teacher" ? "teacher-home" : role === "student" ? "student-home" : "home")}
          onHome={() => setPage("home")}
          subscription={subscription}
          onLogin={handleGoogleLogin}
          onTrialStarted={(sub) => {
            setSubscription(sub);
            setPage(role === "teacher" ? "teacher-home" : "home");
          }}
        />
      )}
      {page === "ouder-dashboard" && (
        <OuderDashboard
          authUser={authUser}
          subscription={subscription}
          onBack={() => setPage("home")}
          onHome={() => setPage("home")}
          onUpgrade={() => setPage("pro")}
          onLogin={handleGoogleLogin}
        />
      )}
      {page === "admin-feedback" && (
        <AdminFeedback
          onBack={() => setPage("home")}
          onHome={() => setPage("home")}
        />
      )}
    <footer style={{ textAlign: "center", padding: "16px 0 24px", fontSize: 12, color: "rgba(255,255,255,0.25)" }}>
      <a href="/over.html" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", margin: "0 8px" }}>Over Studiebol</a>
      ·
      <a href="/privacy.html" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", margin: "0 8px" }}>Privacybeleid</a>
      · © Smulsoft
    </footer>
    </div>
  );
}


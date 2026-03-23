import { useState, useEffect, useCallback, useRef } from "react";

// ─── Data ────────────────────────────────────────────────────────
const SUBJECTS = [
  { id: "rekenen", label: "Rekenen", icon: "🔢", color: "#FF6B35" },
  { id: "taal", label: "Taal", icon: "📝", color: "#4ECDC4" },
  { id: "aardrijkskunde", label: "Aardrijkskunde", icon: "🌍", color: "#45B7D1" },
  { id: "geschiedenis", label: "Geschiedenis", icon: "🏛️", color: "#96CEB4" },
  { id: "natuur", label: "Natuur & Techniek", icon: "🔬", color: "#FFEAA7" },
  { id: "engels", label: "Engels", icon: "🇬🇧", color: "#DDA0DD" },
];

const LEVELS = [
  { id: "groep5", label: "Groep 5-6", desc: "Bovenbouw basis", icon: "🎒" },
  { id: "groep7", label: "Groep 7-8", desc: "Bovenbouw verdieping", icon: "📚" },
  { id: "klas1", label: "Klas 1-2", desc: "Brugklas", icon: "🎓" },
  { id: "klas3", label: "Klas 3-4", desc: "Bovenbouw VO", icon: "🏆" },
];

const SAMPLE_QUESTIONS = {
  rekenen: {
    groep5: [
      { q: "Wat is 347 + 258?", options: ["595", "605", "615", "585"], answer: 1 },
      { q: "Hoeveel is 6 × 8?", options: ["42", "46", "48", "54"], answer: 2 },
      { q: "Wat is de helft van 156?", options: ["68", "78", "82", "76"], answer: 1 },
      { q: "Welk getal is het grootst?", options: ["0,9", "0,85", "0,91", "0,89"], answer: 2 },
      { q: "Hoeveel minuten zitten er in 2,5 uur?", options: ["120", "130", "150", "160"], answer: 2 },
      { q: "Wat is 1000 - 367?", options: ["633", "643", "733", "637"], answer: 0 },
      { q: "Hoeveel is ¼ van 200?", options: ["25", "40", "50", "75"], answer: 2 },
      { q: "Wat is 15 × 4?", options: ["45", "55", "60", "65"], answer: 2 },
    ],
    groep7: [
      { q: "Wat is 15% van 240?", options: ["32", "36", "38", "42"], answer: 1 },
      { q: "Los op: 3x + 7 = 22. Wat is x?", options: ["3", "4", "5", "6"], answer: 2 },
      { q: "Wat is de omtrek van een cirkel met straal 7? (π ≈ 3,14)", options: ["21,98", "43,96", "38,46", "49,12"], answer: 1 },
      { q: "Hoeveel is 2³?", options: ["6", "8", "9", "12"], answer: 1 },
      { q: "Wat is 3/5 als percentage?", options: ["50%", "55%", "60%", "65%"], answer: 2 },
      { q: "Een rechthoek is 12 cm lang en 5 cm breed. Wat is de oppervlakte?", options: ["34 cm²", "50 cm²", "60 cm²", "70 cm²"], answer: 2 },
    ],
    klas1: [
      { q: "Vereenvoudig: 12/18", options: ["2/3", "3/4", "4/6", "6/9"], answer: 0 },
      { q: "Wat is √144?", options: ["11", "12", "13", "14"], answer: 1 },
      { q: "Los op: 2(x + 3) = 14", options: ["x = 3", "x = 4", "x = 5", "x = 7"], answer: 1 },
      { q: "Wat is -5 + (-3)?", options: ["-2", "-8", "8", "2"], answer: 1 },
      { q: "Hoeveel is 0,25 × 0,4?", options: ["0,1", "0,01", "1,0", "0,065"], answer: 0 },
    ],
    klas3: [
      { q: "Wat is de afgeleide van f(x) = 3x² + 2x?", options: ["6x + 2", "3x + 2", "6x² + 2", "6x"], answer: 0 },
      { q: "Los op: log₂(8) = ?", options: ["2", "3", "4", "6"], answer: 1 },
      { q: "Wat is sin(30°)?", options: ["0", "0,5", "1", "√2/2"], answer: 1 },
      { q: "Wat is de discriminant van x² + 4x + 4 = 0?", options: ["0", "4", "8", "16"], answer: 0 },
    ],
  },
  taal: {
    groep5: [
      { q: "Welk woord is fout geschreven?", options: ["fiets", "pannenkoek", "gezellig", "helemael"], answer: 3 },
      { q: "Wat is het meervoud van 'stad'?", options: ["stadden", "steden", "stads", "steden"], answer: 1 },
      { q: "Welk woord is een bijvoeglijk naamwoord?", options: ["rennen", "mooi", "tafel", "snel"], answer: 1 },
      { q: "Welke zin is correct?", options: ["Hij word boos", "Hij wordt boos", "Hij wort boos", "Hij wordd boos"], answer: 1 },
      { q: "Wat is een synoniem van 'blij'?", options: ["boos", "verdrietig", "vrolijk", "moe"], answer: 2 },
    ],
    groep7: [
      { q: "Welk woord krijgt -heid?", options: ["mooi", "snel", "vrij", "alle drie"], answer: 3 },
      { q: "Wat is de lijdend voorwerp in: 'Jan gooit de bal'?", options: ["Jan", "gooit", "de bal", "er is geen"], answer: 2 },
      { q: "Welke schrijfwijze is correct?", options: ["pannekoek", "pannenkoek", "panne-koek", "pannékoek"], answer: 1 },
      { q: "Welk woord is een voegwoord?", options: ["maar", "snel", "huis", "lopen"], answer: 0 },
    ],
    klas1: [
      { q: "Wat is een metafoor?", options: ["Vergelijking met 'als'", "Beeldspraak zonder 'als'", "Herhaling", "Overdrijving"], answer: 1 },
      { q: "Welke zin bevat een persoonsvorm?", options: ["Rennend door het bos", "De mooie bloemen", "Zij fietst naar huis", "Al lachend"], answer: 2 },
      { q: "Wat is het onderwerp in: 'De hond van de buurman blaft hard'?", options: ["De hond", "de buurman", "De hond van de buurman", "hard"], answer: 2 },
    ],
    klas3: [
      { q: "Welke literaire stroming hoort bij de 17e eeuw?", options: ["Romantiek", "Barok", "Naturalisme", "Modernisme"], answer: 1 },
      { q: "Wat is een oxymoron?", options: ["Overdrijving", "Tegengestelde begrippen samen", "Herhaling", "Vergelijking"], answer: 1 },
    ],
  },
  aardrijkskunde: {
    groep5: [
      { q: "Wat is de hoofdstad van Nederland?", options: ["Rotterdam", "Den Haag", "Amsterdam", "Utrecht"], answer: 2 },
      { q: "In welke provincie ligt Maastricht?", options: ["Brabant", "Limburg", "Gelderland", "Zeeland"], answer: 1 },
      { q: "Welke rivier stroomt door Nederland?", options: ["Donau", "Rijn", "Seine", "Theems"], answer: 1 },
      { q: "Hoeveel provincies heeft Nederland?", options: ["10", "11", "12", "13"], answer: 2 },
      { q: "Wat is het grootste meer in Nederland?", options: ["Veluwemeer", "IJsselmeer", "Markermeer", "Grevelingenmeer"], answer: 1 },
    ],
    groep7: [
      { q: "Wat is de langste rivier ter wereld?", options: ["Amazone", "Nijl", "Mississippi", "Yangtze"], answer: 1 },
      { q: "Op welk continent ligt Brazilië?", options: ["Afrika", "Azië", "Zuid-Amerika", "Europa"], answer: 2 },
      { q: "Wat is het grootste land ter wereld qua oppervlakte?", options: ["China", "Canada", "VS", "Rusland"], answer: 3 },
      { q: "Welke oceaan ligt tussen Europa en Amerika?", options: ["Indische Oceaan", "Stille Oceaan", "Atlantische Oceaan", "Noordelijke IJszee"], answer: 2 },
    ],
    klas1: [
      { q: "Wat veroorzaakt eb en vloed?", options: ["De wind", "De maan", "De zon", "Aardbevingen"], answer: 1 },
      { q: "Wat is de oorzaak van seizoenen?", options: ["Afstand tot zon", "Kanteling aardas", "Maanstand", "Zonnevlekken"], answer: 1 },
      { q: "Wat is een delta?", options: ["Een berg", "Een riviermonding", "Een woestijn", "Een eiland"], answer: 1 },
    ],
    klas3: [
      { q: "Wat is het broeikaseffect?", options: ["Opwarming door CO2", "Afkoeling atmosfeer", "Ozongat", "Zure regen"], answer: 0 },
      { q: "Wat zijn tektonische platen?", options: ["Wolkenformaties", "Stukken aardkorst", "Oceaanstromen", "Windpatronen"], answer: 1 },
    ],
  },
  geschiedenis: {
    groep5: [
      { q: "Wie was Willem van Oranje?", options: ["Een schilder", "Vader des Vaderlands", "Een ontdekkingsreiziger", "Een wetenschapper"], answer: 1 },
      { q: "Wanneer was de Tweede Wereldoorlog?", options: ["1914-1918", "1939-1945", "1940-1944", "1935-1945"], answer: 1 },
      { q: "Wat is de VOC?", options: ["Een school", "Een handelscompagnie", "Een leger", "Een kerk"], answer: 1 },
      { q: "In welke tijd leefden de Romeinen in Nederland?", options: ["Middeleeuwen", "Oudheid", "Gouden Eeuw", "Steentijd"], answer: 1 },
    ],
    groep7: [
      { q: "Wanneer begon de Gouden Eeuw?", options: ["15e eeuw", "16e eeuw", "17e eeuw", "18e eeuw"], answer: 2 },
      { q: "Wie schilderde De Nachtwacht?", options: ["Vermeer", "Van Gogh", "Rembrandt", "Hals"], answer: 2 },
      { q: "Wat was de Watersnoodramp?", options: ["1950", "1953", "1955", "1960"], answer: 1 },
    ],
    klas1: [
      { q: "Wanneer viel de Berlijnse Muur?", options: ["1985", "1987", "1989", "1991"], answer: 2 },
      { q: "Wie was Anne Frank?", options: ["Verzetsheldin", "Joods meisje dat een dagboek schreef", "Koningin", "Schrijfster"], answer: 1 },
    ],
    klas3: [
      { q: "Wat was de Verlichting?", options: ["Uitvinding elektriciteit", "Filosofische stroming 18e eeuw", "Religieuze beweging", "Industriële revolutie"], answer: 1 },
      { q: "Wanneer was de Franse Revolutie?", options: ["1776", "1789", "1815", "1848"], answer: 1 },
    ],
  },
  natuur: {
    groep5: [
      { q: "Wat hebben planten nodig om te groeien?", options: ["Alleen water", "Water, licht en CO2", "Alleen zonlicht", "Alleen aarde"], answer: 1 },
      { q: "Welk orgaan pompt bloed rond?", options: ["Longen", "Lever", "Hart", "Nieren"], answer: 2 },
      { q: "Wat is fotosynthese?", options: ["Foto's maken", "Energie maken uit licht", "Bloemen plukken", "Water drinken"], answer: 1 },
      { q: "Hoeveel planeten heeft ons zonnestelsel?", options: ["7", "8", "9", "10"], answer: 1 },
    ],
    groep7: [
      { q: "Wat is het verschil tussen weer en klimaat?", options: ["Geen verschil", "Weer is korte termijn, klimaat lange termijn", "Klimaat is korte termijn", "Weer is altijd warm"], answer: 1 },
      { q: "Wat is een ecosysteem?", options: ["Een computer", "Samenhangend geheel van levende organismen", "Een soort dier", "Een type plant"], answer: 1 },
    ],
    klas1: [
      { q: "Wat is DNA?", options: ["Een type cel", "Erfelijk materiaal", "Een vitamina", "Een hormoon"], answer: 1 },
      { q: "Wat is de chemische formule van water?", options: ["CO2", "H2O", "NaCl", "O2"], answer: 1 },
      { q: "Welke deeltjes zitten in een atoomkern?", options: ["Elektronen", "Protonen en neutronen", "Alleen protonen", "Fotonen"], answer: 1 },
    ],
    klas3: [
      { q: "Wat is mitose?", options: ["Celdeling", "Celsterfte", "Eiwitvorming", "Ademhaling"], answer: 0 },
      { q: "Wat is de wet van behoud van energie?", options: ["Energie ontstaat uit niets", "Energie verdwijnt", "Energie verandert van vorm", "Energie neemt toe"], answer: 2 },
    ],
  },
  engels: {
    groep5: [
      { q: "What is the English word for 'hond'?", options: ["Cat", "Dog", "Bird", "Fish"], answer: 1 },
      { q: "How do you say 'goedemorgen' in English?", options: ["Good evening", "Good night", "Good morning", "Good afternoon"], answer: 2 },
      { q: "What color is the sky?", options: ["Green", "Red", "Blue", "Yellow"], answer: 2 },
      { q: "Fill in: I ___ a student.", options: ["is", "am", "are", "be"], answer: 1 },
    ],
    groep7: [
      { q: "What is the past tense of 'go'?", options: ["Goed", "Gone", "Went", "Going"], answer: 2 },
      { q: "Which sentence is correct?", options: ["He don't like it", "He doesn't like it", "He not like it", "He no like it"], answer: 1 },
      { q: "What does 'although' mean?", options: ["Omdat", "Hoewel", "Wanneer", "Totdat"], answer: 1 },
    ],
    klas1: [
      { q: "What is a synonym for 'happy'?", options: ["Sad", "Angry", "Joyful", "Tired"], answer: 2 },
      { q: "Fill in: If I ___ rich, I would travel.", options: ["am", "was", "were", "be"], answer: 2 },
      { q: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Child's"], answer: 1 },
    ],
    klas3: [
      { q: "What literary device is: 'The wind whispered'?", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], answer: 2 },
      { q: "Which word is an adverb?", options: ["Beautiful", "Beautifully", "Beauty", "Beautify"], answer: 1 },
    ],
  },
};

// ─── Utility functions ───────────────────────────────────────────
const generateCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const formatDate = (d) => {
  const date = new Date(d);
  const days = ["zo", "ma", "di", "wo", "do", "vr", "za"];
  const months = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
};

const daysUntil = (d) => {
  const now = new Date();
  const target = new Date(d);
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
};

// ─── Styles ──────────────────────────────────────────────────────
const fonts = `
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Fredoka:wght@400;500;600;700&display=swap');
`;

// ─── App Component ───────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);
  const [studentProgress, setStudentProgress] = useState([]);

  // Load stored data
  useEffect(() => {
    try {
      const q = localStorage.getItem("leerschool_quizzes");
      if (q) setQuizzes(JSON.parse(q));
    } catch {}
    try {
      const p = localStorage.getItem("leerschool_progress");
      if (p) setStudentProgress(JSON.parse(p));
    } catch {}
  }, []);

  // Save quizzes
  useEffect(() => {
    if (quizzes.length > 0) {
      try { localStorage.setItem("leerschool_quizzes", JSON.stringify(quizzes)); } catch {}
    }
  }, [quizzes]);

  useEffect(() => {
    if (studentProgress.length > 0) {
      try { localStorage.setItem("leerschool_progress", JSON.stringify(studentProgress)); } catch {}
    }
  }, [studentProgress]);

  const createQuiz = (quiz) => {
    const newQuiz = {
      ...quiz,
      id: Date.now().toString(),
      code: generateCode(),
      createdAt: new Date().toISOString(),
      players: [],
    };
    setQuizzes((prev) => [...prev, newQuiz]);
    return newQuiz;
  };

  const startGame = (quiz, mode) => {
    const subjectQuestions = SAMPLE_QUESTIONS[quiz.subject]?.[quiz.level] || [];
    const questions = shuffle(subjectQuestions).slice(0, quiz.questionCount || 8);
    setGameState({
      quiz,
      mode,
      questions,
      currentQ: 0,
      score: 0,
      answers: [],
      timePerQuestion: quiz.timePerQuestion || 20,
      startedAt: Date.now(),
    });
    setPage("play");
  };

  const finishGame = (finalState) => {
    const result = {
      id: Date.now().toString(),
      player: userName,
      quizId: finalState.quiz.id,
      subject: finalState.quiz.subject,
      level: finalState.quiz.level,
      score: finalState.score,
      total: finalState.questions.length,
      percentage: Math.round((finalState.score / finalState.questions.length) * 100),
      answers: finalState.answers,
      completedAt: new Date().toISOString(),
    };
    setResults((prev) => [...prev, result]);
    setStudentProgress((prev) => [...prev, result]);
    setGameState(null);
    setCurrentQuiz(null);
    setPage("results");
  };

  return (
    <div style={styles.app}>
      <style>{fonts}</style>
      {page === "home" && (
        <HomePage
          onSelectRole={(r) => { setRole(r); setPage(r === "teacher" ? "teacher-home" : "student-home"); }}
          userName={userName}
          setUserName={setUserName}
        />
      )}
      {page === "teacher-home" && (
        <TeacherHome
          userName={userName}
          quizzes={quizzes}
          onCreateQuiz={() => setPage("create-quiz")}
          onViewProgress={() => setPage("teacher-progress")}
          onBack={() => setPage("home")}
          onStartQuiz={(q) => { setCurrentQuiz(q); startGame(q, "host"); }}
        />
      )}
      {page === "create-quiz" && (
        <CreateQuiz
          onSave={(q) => { const nq = createQuiz(q); setCurrentQuiz(nq); setPage("lobby"); }}
          onBack={() => setPage("teacher-home")}
        />
      )}
      {page === "lobby" && (
        <Lobby
          quiz={currentQuiz}
          players={[userName, ...players]}
          isHost={role === "teacher"}
          onStart={() => startGame(currentQuiz, "multi")}
          onBack={() => setPage(role === "teacher" ? "teacher-home" : "student-home")}
        />
      )}
      {page === "student-home" && (
        <StudentHome
          userName={userName}
          quizzes={quizzes}
          progress={studentProgress.filter((p) => p.player === userName)}
          onJoinQuiz={(code) => {
            const quiz = quizzes.find((q) => q.code === code);
            if (quiz) { setCurrentQuiz(quiz); setPage("lobby"); }
          }}
          onSelfStudy={() => setPage("self-study")}
          onBack={() => setPage("home")}
          onViewProgress={() => setPage("student-progress")}
        />
      )}
      {page === "self-study" && (
        <SelfStudy
          onStart={(config) => {
            const quiz = {
              id: "self-" + Date.now(),
              subject: config.subject,
              level: config.level,
              questionCount: config.questionCount,
              timePerQuestion: config.timePerQuestion,
              title: `${SUBJECTS.find((s) => s.id === config.subject)?.label} - Zelf oefenen`,
            };
            setCurrentQuiz(quiz);
            startGame(quiz, "self");
          }}
          onBack={() => setPage("student-home")}
        />
      )}
      {page === "play" && gameState && (
        <PlayQuiz
          gameState={gameState}
          setGameState={setGameState}
          onFinish={finishGame}
        />
      )}
      {page === "results" && (
        <ResultsPage
          results={results}
          onBack={() => setPage(role === "teacher" ? "teacher-home" : "student-home")}
          onRetry={() => {
            if (currentQuiz) startGame(currentQuiz, "self");
            else setPage(role === "teacher" ? "teacher-home" : "student-home");
          }}
        />
      )}
      {page === "teacher-progress" && (
        <TeacherProgress
          quizzes={quizzes}
          progress={studentProgress}
          onBack={() => setPage("teacher-home")}
        />
      )}
      {page === "student-progress" && (
        <StudentProgressView
          progress={studentProgress.filter((p) => p.player === userName)}
          onBack={() => setPage("student-home")}
        />
      )}
    </div>
  );
}

// ─── Home Page ───────────────────────────────────────────────────
function HomePage({ onSelectRole, userName, setUserName }) {
  const [name, setName] = useState(userName);
  const [shake, setShake] = useState(false);

  const handleSelect = (role) => {
    if (!name.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setUserName(name.trim());
    onSelectRole(role);
  };

  return (
    <div style={styles.page}>
      <div style={styles.heroSection}>
        <div style={styles.logoContainer}>
          <span style={styles.logoIcon}>🧠</span>
          <h1 style={styles.logoText}>
            <span style={{ color: "#FF6B35" }}>Leer</span>
            <span style={{ color: "#4ECDC4" }}>School</span>
          </h1>
        </div>
        <p style={styles.subtitle}>Samen slim worden — op school en thuis!</p>

        <div style={{ ...styles.nameInput, animation: shake ? "shake 0.5s ease" : "none" }}>
          <label style={styles.inputLabel}>Wat is je naam?</label>
          <input
            style={styles.textInput}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Vul je naam in..."
            onKeyDown={(e) => e.key === "Enter" && name.trim() && handleSelect("student")}
          />
        </div>

        <div style={styles.roleCards}>
          <button style={{ ...styles.roleCard, background: "linear-gradient(135deg, #FF6B35, #FF8C42)" }} onClick={() => handleSelect("student")}>
            <span style={styles.roleIcon}>🎒</span>
            <span style={styles.roleLabel}>Ik ben leerling</span>
            <span style={styles.roleDesc}>Oefenen & quizzen spelen</span>
          </button>
          <button style={{ ...styles.roleCard, background: "linear-gradient(135deg, #4ECDC4, #44A08D)" }} onClick={() => handleSelect("teacher")}>
            <span style={styles.roleIcon}>👩‍🏫</span>
            <span style={styles.roleLabel}>Ik ben leerkracht</span>
            <span style={styles.roleDesc}>Quizzen maken & opgeven</span>
          </button>
        </div>

        <button
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            width: "100%", maxWidth: 360, background: "#25D366", color: "#fff", border: "none",
            borderRadius: 16, padding: "16px 20px", fontFamily: "'Fredoka', sans-serif",
            fontSize: 16, fontWeight: 600, cursor: "pointer", marginTop: 24,
            boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
          }}
          onClick={() => {
            const text = `🧠 Ken je LeerSchool al?\n\nSamen slim worden met leuke quizzen! Oefenen voor school was nog nooit zo leuk.\n\n👉 Open de app: ${window.location.origin}`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Deel met je klas via WhatsApp
        </button>
      </div>

      <style>{`
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

// ─── Teacher Home ────────────────────────────────────────────────
function TeacherHome({ userName, quizzes, onCreateQuiz, onViewProgress, onBack, onStartQuiz }) {
  return (
    <div style={styles.page}>
      <Header title={`Hoi ${userName}! 👋`} subtitle="Leerkracht Dashboard" onBack={onBack} />

      <div style={styles.content}>
        <div style={styles.actionRow}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #FF6B35, #FF8C42)" }} onClick={onCreateQuiz}>
            <span style={{ fontSize: 28 }}>📝</span>
            <span style={{ fontWeight: 700 }}>Nieuwe Quiz</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #4ECDC4, #44A08D)" }} onClick={onViewProgress}>
            <span style={{ fontSize: 28 }}>📊</span>
            <span style={{ fontWeight: 700 }}>Voortgang</span>
          </button>
        </div>

        {quizzes.length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>Jouw quizzen</h3>
            <div style={styles.quizList}>
              {quizzes.map((q) => {
                const subj = SUBJECTS.find((s) => s.id === q.subject);
                const remaining = q.deadline ? daysUntil(q.deadline) : null;
                return (
                  <div key={q.id} style={styles.quizCard}>
                    <div style={styles.quizCardHeader}>
                      <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                      <div style={{ flex: 1 }}>
                        <div style={styles.quizTitle}>{q.title || subj?.label}</div>
                        <div style={styles.quizMeta}>
                          Code: <strong>{q.code}</strong> · {LEVELS.find((l) => l.id === q.level)?.label}
                        </div>
                      </div>
                      {remaining !== null && (
                        <div style={{
                          ...styles.deadlineBadge,
                          background: remaining <= 1 ? "#ff6b6b" : remaining <= 3 ? "#ffa726" : "#66bb6a",
                        }}>
                          {remaining <= 0 ? "Verlopen" : `${remaining}d`}
                        </div>
                      )}
                    </div>
                    <div style={styles.quizCardActions}>
                      <button style={styles.smallButton} onClick={() => onStartQuiz(q)}>▶️ Start</button>
                      <button style={styles.smallButtonAlt} onClick={() => navigator.clipboard?.writeText(q.code)}>📋 Code</button>
                      <button style={{
                        ...styles.smallButton,
                        background: "#25D366",
                        boxShadow: "0 2px 8px rgba(37,211,102,0.3)",
                      }} onClick={() => {
                        const text = `🧠 LeerSchool Quiz!\n\n📚 ${subj?.label}\n🎯 Code: ${q.code}\n⏰ ${q.deadline ? `Deadline: ${formatDate(q.deadline)}` : "Geen deadline"}\n\n👉 Open de app: ${window.location.origin}`;
                        window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
                      }}>💬 Deel</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Create Quiz ─────────────────────────────────────────────────
function CreateQuiz({ onSave, onBack }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [deadline, setDeadline] = useState("");
  const [questionCount, setQuestionCount] = useState(8);
  const [timePerQuestion, setTimePerQuestion] = useState(20);
  const [step, setStep] = useState(1);

  const canNext = () => {
    if (step === 1) return subject !== "";
    if (step === 2) return level !== "";
    if (step === 3) return true;
    return true;
  };

  const handleSave = () => {
    onSave({ title: title || SUBJECTS.find((s) => s.id === subject)?.label + " Quiz", subject, level, deadline: deadline || null, questionCount, timePerQuestion });
  };

  return (
    <div style={styles.page}>
      <Header title="Nieuwe Quiz" subtitle={`Stap ${step} van 3`} onBack={onBack} />
      <div style={styles.content}>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${(step / 3) * 100}%` }} />
        </div>

        {step === 1 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Kies een vak</h3>
            <div style={styles.subjectGrid}>
              {SUBJECTS.map((s) => (
                <button
                  key={s.id}
                  style={{
                    ...styles.subjectCard,
                    borderColor: subject === s.id ? s.color : "transparent",
                    background: subject === s.id ? `${s.color}15` : "#fff",
                    boxShadow: subject === s.id ? `0 0 0 3px ${s.color}40` : "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                  onClick={() => setSubject(s.id)}
                >
                  <span style={{ fontSize: 32 }}>{s.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#2d3436" }}>{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Kies het niveau</h3>
            <div style={styles.levelGrid}>
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  style={{
                    ...styles.levelCard,
                    borderColor: level === l.id ? "#4ECDC4" : "transparent",
                    background: level === l.id ? "#4ECDC410" : "#fff",
                    boxShadow: level === l.id ? "0 0 0 3px #4ECDC440" : "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                  onClick={() => setLevel(l.id)}
                >
                  <span style={{ fontSize: 28 }}>{l.icon}</span>
                  <strong>{l.label}</strong>
                  <span style={{ fontSize: 12, color: "#636e72" }}>{l.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Instellingen</h3>
            <div style={styles.settingsGroup}>
              <label style={styles.settingLabel}>Titel (optioneel)</label>
              <input style={styles.textInput} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bijv. Week 12 - Breuken" />

              <label style={styles.settingLabel}>Deadline</label>
              <input style={styles.textInput} type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

              <label style={styles.settingLabel}>Aantal vragen: {questionCount}</label>
              <input type="range" min={3} max={15} value={questionCount} onChange={(e) => setQuestionCount(+e.target.value)} style={styles.slider} />

              <label style={styles.settingLabel}>Tijd per vraag: {timePerQuestion}s</label>
              <input type="range" min={10} max={60} step={5} value={timePerQuestion} onChange={(e) => setTimePerQuestion(+e.target.value)} style={styles.slider} />
            </div>
          </div>
        )}

        <div style={styles.navRow}>
          {step > 1 && <button style={styles.backBtn} onClick={() => setStep(step - 1)}>← Vorige</button>}
          <div style={{ flex: 1 }} />
          {step < 3 ? (
            <button style={{ ...styles.nextBtn, opacity: canNext() ? 1 : 0.4 }} onClick={() => canNext() && setStep(step + 1)} disabled={!canNext()}>
              Volgende →
            </button>
          ) : (
            <button style={styles.nextBtn} onClick={handleSave}>🚀 Quiz aanmaken</button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Lobby ───────────────────────────────────────────────────────
function Lobby({ quiz, players, isHost, onStart, onBack }) {
  const subj = SUBJECTS.find((s) => s.id === quiz?.subject);

  return (
    <div style={styles.page}>
      <div style={styles.lobbyCard}>
        <div style={styles.lobbyLogo}>🎯</div>
        <h2 style={styles.lobbyTitle}>Wachtkamer</h2>
        <p style={styles.lobbySubtitle}>Deel deze code met je klas:</p>

        <div style={styles.codeDisplay}>
          {quiz?.code?.split("").map((c, i) => (
            <span key={i} style={styles.codeLetter}>{c}</span>
          ))}
        </div>

        <button
          style={styles.whatsappButton}
          onClick={() => {
            const text = `🧠 Doe mee met mijn LeerSchool quiz!\n\n📚 Vak: ${subj?.label}\n🎯 Code: ${quiz?.code}\n\n👉 Open de app: ${window.location.origin}`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Nodig vrienden uit via WhatsApp
        </button>

        <div style={styles.lobbyInfo}>
          <span>{players.length} speler{players.length !== 1 ? "s" : ""}</span>
          <span style={styles.badge}>{subj?.icon} {subj?.label}</span>
          <span style={styles.badge}>{LEVELS.find((l) => l.id === quiz?.level)?.label}</span>
        </div>

        <div style={styles.playersSection}>
          <h4 style={{ fontFamily: "Fredoka", color: "#636e72", fontSize: 13, letterSpacing: 1 }}>SPELERS</h4>
          <div style={styles.playersList}>
            {players.map((p, i) => (
              <span key={i} style={{ ...styles.playerChip, background: i === 0 ? "#2d3436" : "#f0f0f0", color: i === 0 ? "#fff" : "#2d3436" }}>
                {i === 0 && "👑 "}{p} {i === players.length - 1 && players.length > 1 ? "" : ""}
              </span>
            ))}
          </div>
        </div>

        {isHost ? (
          <button style={styles.startButton} onClick={onStart}>🚀 Start de Quiz!</button>
        ) : (
          <div style={styles.waitingBox}>
            <span style={{ fontSize: 32 }}>⏳</span>
            <p>Wachten tot de leerkracht start...</p>
          </div>
        )}

        <p style={styles.lobbyTip}>💡 Tip: Deel je scherm naar de TV zodat iedereen de vragen kan zien</p>
        <button style={styles.linkBtn} onClick={onBack}>← Terug</button>
      </div>
    </div>
  );
}

// ─── Student Home ────────────────────────────────────────────────
function StudentHome({ userName, quizzes, progress, onJoinQuiz, onSelfStudy, onBack, onViewProgress }) {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");

  const handleJoin = () => {
    if (code.trim().length < 3) {
      setError("Vul een geldige code in");
      return;
    }
    const quiz = quizzes.find((q) => q.code.toUpperCase() === code.trim().toUpperCase());
    if (!quiz) {
      setError("Quiz niet gevonden 😕");
      return;
    }
    setError("");
    onJoinQuiz(code.trim().toUpperCase());
  };

  const recentProgress = progress.slice(-5).reverse();

  return (
    <div style={styles.page}>
      <Header title={`Hey ${userName}! 🌟`} subtitle="Klaar om te leren?" onBack={onBack} />

      <div style={styles.content}>
        <div style={styles.joinSection}>
          <h3 style={styles.sectionTitle}>Doe mee met een quiz</h3>
          <div style={styles.codeInputRow}>
            <input
              style={{ ...styles.textInput, flex: 1, textTransform: "uppercase", letterSpacing: 3, fontWeight: 700, textAlign: "center" }}
              value={code}
              onChange={(e) => { setCode(e.target.value.toUpperCase()); setError(""); }}
              placeholder="SPELCODE"
              maxLength={6}
            />
            <button style={styles.joinButton} onClick={handleJoin}>Doe mee! 🚀</button>
          </div>
          {error && <p style={styles.errorText}>{error}</p>}
        </div>

        <div style={styles.actionRow}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #a29bfe, #6c5ce7)" }} onClick={onSelfStudy}>
            <span style={{ fontSize: 28 }}>📖</span>
            <span style={{ fontWeight: 700 }}>Zelf oefenen</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #fdcb6e, #f39c12)" }} onClick={onViewProgress}>
            <span style={{ fontSize: 28 }}>📊</span>
            <span style={{ fontWeight: 700 }}>Mijn voortgang</span>
          </button>
        </div>

        {/* Assigned quizzes */}
        {quizzes.filter((q) => q.deadline).length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>📋 Opdrachten</h3>
            {quizzes.filter((q) => q.deadline).map((q) => {
              const subj = SUBJECTS.find((s) => s.id === q.subject);
              const remaining = daysUntil(q.deadline);
              const done = progress.some((p) => p.quizId === q.id);
              return (
                <div key={q.id} style={{ ...styles.assignmentCard, opacity: done ? 0.6 : 1 }}>
                  <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, color: "#2d3436" }}>{q.title}</div>
                    <div style={{ fontSize: 12, color: "#636e72" }}>
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

        {/* Recent activity */}
        {recentProgress.length > 0 && (
          <>
            <h3 style={styles.sectionTitle}>Laatst geoefend</h3>
            {recentProgress.map((r) => {
              const subj = SUBJECTS.find((s) => s.id === r.subject);
              return (
                <div key={r.id} style={styles.recentCard}>
                  <span style={{ fontSize: 20 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontWeight: 600 }}>{subj?.label}</span>
                    <span style={{ fontSize: 12, color: "#636e72", marginLeft: 8 }}>{LEVELS.find((l) => l.id === r.level)?.label}</span>
                  </div>
                  <div style={{
                    ...styles.scoreBadge,
                    background: r.percentage >= 80 ? "#d4edda" : r.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                    color: r.percentage >= 80 ? "#155724" : r.percentage >= 50 ? "#856404" : "#721c24",
                  }}>
                    {r.percentage}%
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Self Study ──────────────────────────────────────────────────
function SelfStudy({ onStart, onBack }) {
  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState("");
  const [questionCount, setQuestionCount] = useState(8);
  const [timePerQuestion, setTimePerQuestion] = useState(25);

  return (
    <div style={styles.page}>
      <Header title="Zelf oefenen 📖" subtitle="Kies je vak en niveau" onBack={onBack} />
      <div style={styles.content}>
        <h3 style={styles.sectionTitle}>Welk vak?</h3>
        <div style={styles.subjectGrid}>
          {SUBJECTS.map((s) => (
            <button
              key={s.id}
              style={{
                ...styles.subjectCard,
                borderColor: subject === s.id ? s.color : "transparent",
                background: subject === s.id ? `${s.color}15` : "#fff",
                boxShadow: subject === s.id ? `0 0 0 3px ${s.color}40` : "0 2px 8px rgba(0,0,0,0.06)",
              }}
              onClick={() => setSubject(s.id)}
            >
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{s.label}</span>
            </button>
          ))}
        </div>

        {subject && (
          <>
            <h3 style={styles.sectionTitle}>Welk niveau?</h3>
            <div style={styles.levelGrid}>
              {LEVELS.map((l) => (
                <button
                  key={l.id}
                  style={{
                    ...styles.levelCard,
                    borderColor: level === l.id ? "#4ECDC4" : "transparent",
                    background: level === l.id ? "#4ECDC410" : "#fff",
                  }}
                  onClick={() => setLevel(l.id)}
                >
                  <span style={{ fontSize: 24 }}>{l.icon}</span>
                  <strong style={{ fontSize: 13 }}>{l.label}</strong>
                </button>
              ))}
            </div>
          </>
        )}

        {subject && level && (
          <>
            <div style={styles.settingsGroup}>
              <label style={styles.settingLabel}>Aantal vragen: {questionCount}</label>
              <input type="range" min={3} max={15} value={questionCount} onChange={(e) => setQuestionCount(+e.target.value)} style={styles.slider} />
              <label style={styles.settingLabel}>Tijd per vraag: {timePerQuestion}s</label>
              <input type="range" min={10} max={60} step={5} value={timePerQuestion} onChange={(e) => setTimePerQuestion(+e.target.value)} style={styles.slider} />
            </div>
            <button style={styles.startButton} onClick={() => onStart({ subject, level, questionCount, timePerQuestion })}>
              🚀 Start met oefenen!
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Play Quiz ───────────────────────────────────────────────────
function PlayQuiz({ gameState, setGameState, onFinish }) {
  const [timeLeft, setTimeLeft] = useState(gameState.timePerQuestion);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const timerRef = useRef(null);

  const question = gameState.questions[gameState.currentQ];
  const isLast = gameState.currentQ === gameState.questions.length - 1;

  useEffect(() => {
    setTimeLeft(gameState.timePerQuestion);
    setSelected(null);
    setShowResult(false);
  }, [gameState.currentQ, gameState.timePerQuestion]);

  useEffect(() => {
    if (showResult) return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current);
          handleAnswer(-1);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [gameState.currentQ, showResult]);

  const handleAnswer = (idx) => {
    if (showResult) return;
    clearInterval(timerRef.current);
    setSelected(idx);
    setShowResult(true);

    const isCorrect = idx === question.answer;
    const newState = {
      ...gameState,
      score: gameState.score + (isCorrect ? 1 : 0),
      answers: [...gameState.answers, { questionIndex: gameState.currentQ, selected: idx, correct: question.answer, isCorrect, timeLeft }],
    };
    setGameState(newState);

    setTimeout(() => {
      if (isLast) {
        onFinish(newState);
      } else {
        setGameState({ ...newState, currentQ: newState.currentQ + 1 });
      }
    }, 1500);
  };

  const timerPct = (timeLeft / gameState.timePerQuestion) * 100;
  const timerColor = timerPct > 60 ? "#66bb6a" : timerPct > 30 ? "#ffa726" : "#ff5252";
  const subj = SUBJECTS.find((s) => s.id === gameState.quiz.subject);

  return (
    <div style={{ ...styles.page, background: `linear-gradient(135deg, ${subj?.color}20, #f8f9fa)` }}>
      <div style={styles.quizHeader}>
        <div style={styles.qCounter}>
          {gameState.currentQ + 1} / {gameState.questions.length}
        </div>
        <div style={styles.scoreDisplay}>
          ⭐ {gameState.score}
        </div>
      </div>

      {/* Timer bar */}
      <div style={styles.timerBar}>
        <div style={{ ...styles.timerFill, width: `${timerPct}%`, background: timerColor, transition: "width 1s linear, background 0.5s" }} />
      </div>
      <div style={{ textAlign: "center", fontFamily: "Fredoka", fontSize: 18, fontWeight: 700, color: timerColor, marginBottom: 12 }}>
        {timeLeft}s
      </div>

      <div style={styles.questionCard}>
        <h2 style={styles.questionText}>{question.q}</h2>

        <div style={styles.optionsGrid}>
          {question.options.map((opt, i) => {
            const colors = ["#FF6B35", "#4ECDC4", "#a29bfe", "#fdcb6e"];
            let bg = colors[i] + "15";
            let border = colors[i] + "40";
            let textColor = "#2d3436";

            if (showResult) {
              if (i === question.answer) {
                bg = "#d4edda";
                border = "#28a745";
                textColor = "#155724";
              } else if (i === selected && !gameState.answers[gameState.answers.length - 1]?.isCorrect) {
                bg = "#f8d7da";
                border = "#dc3545";
                textColor = "#721c24";
              } else {
                bg = "#f5f5f5";
                border = "#ddd";
                textColor = "#999";
              }
            }

            return (
              <button
                key={i}
                style={{
                  ...styles.optionButton,
                  background: bg,
                  borderColor: border,
                  color: textColor,
                  transform: selected === i ? "scale(0.97)" : "scale(1)",
                  cursor: showResult ? "default" : "pointer",
                }}
                onClick={() => !showResult && handleAnswer(i)}
              >
                <span style={styles.optionLetter}>{String.fromCharCode(65 + i)}</span>
                <span style={{ flex: 1 }}>{opt}</span>
                {showResult && i === question.answer && <span>✅</span>}
                {showResult && i === selected && i !== question.answer && <span>❌</span>}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Results Page ────────────────────────────────────────────────
function ResultsPage({ results, onBack, onRetry }) {
  const latest = results[results.length - 1];
  if (!latest) return null;

  const grade = latest.percentage >= 90 ? "🏆 Fantastisch!" : latest.percentage >= 70 ? "🌟 Goed gedaan!" : latest.percentage >= 50 ? "💪 Ga zo door!" : "📚 Blijven oefenen!";
  const emoji = latest.percentage >= 90 ? "🎉" : latest.percentage >= 70 ? "😊" : latest.percentage >= 50 ? "🙂" : "💪";

  return (
    <div style={styles.page}>
      <div style={styles.resultsCard}>
        <div style={{ fontSize: 64, textAlign: "center", animation: "float 2s ease infinite" }}>{emoji}</div>
        <h2 style={{ fontFamily: "Fredoka", fontSize: 28, textAlign: "center", color: "#2d3436", margin: "12px 0 4px" }}>{grade}</h2>
        <p style={{ textAlign: "center", color: "#636e72", marginBottom: 24 }}>
          {SUBJECTS.find((s) => s.id === latest.subject)?.label} · {LEVELS.find((l) => l.id === latest.level)?.label}
        </p>

        <div style={styles.scoreCircle}>
          <div style={styles.scoreNumber}>{latest.percentage}%</div>
          <div style={styles.scoreDetail}>{latest.score} van {latest.total} goed</div>
        </div>

        <div style={styles.resultDetails}>
          {latest.answers.map((a, i) => (
            <div key={i} style={styles.resultRow}>
              <span style={{ width: 24, textAlign: "center" }}>{a.isCorrect ? "✅" : "❌"}</span>
              <span style={{ flex: 1, fontSize: 13 }}>Vraag {i + 1}</span>
              {a.isCorrect && <span style={{ fontSize: 11, color: "#636e72" }}>{a.timeLeft}s over</span>}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
          <button style={{ ...styles.bigButton, flex: 1, background: "linear-gradient(135deg, #a29bfe, #6c5ce7)" }} onClick={onRetry}>
            🔄 Opnieuw
          </button>
          <button style={{ ...styles.bigButton, flex: 1, background: "linear-gradient(135deg, #4ECDC4, #44A08D)" }} onClick={onBack}>
            🏠 Terug
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Teacher Progress ────────────────────────────────────────────
function TeacherProgress({ quizzes, progress, onBack }) {
  return (
    <div style={styles.page}>
      <Header title="Voortgang 📊" subtitle="Bekijk hoe je klas het doet" onBack={onBack} />
      <div style={styles.content}>
        {progress.length === 0 ? (
          <div style={styles.emptyState}>
            <span style={{ fontSize: 48 }}>📭</span>
            <p>Nog geen resultaten. Maak een quiz en deel de code!</p>
          </div>
        ) : (
          <>
            <div style={styles.statsRow}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{progress.length}</div>
                <div style={styles.statLabel}>Pogingen</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{Math.round(progress.reduce((a, b) => a + b.percentage, 0) / progress.length)}%</div>
                <div style={styles.statLabel}>Gemiddeld</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{new Set(progress.map((p) => p.player)).size}</div>
                <div style={styles.statLabel}>Leerlingen</div>
              </div>
            </div>

            {progress.slice().reverse().map((r) => {
              const subj = SUBJECTS.find((s) => s.id === r.subject);
              return (
                <div key={r.id} style={styles.recentCard}>
                  <span style={{ fontSize: 20 }}>{subj?.icon}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700 }}>{r.player}</div>
                    <div style={{ fontSize: 12, color: "#636e72" }}>{subj?.label} · {LEVELS.find((l) => l.id === r.level)?.label}</div>
                  </div>
                  <div style={{
                    ...styles.scoreBadge,
                    background: r.percentage >= 80 ? "#d4edda" : r.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                    color: r.percentage >= 80 ? "#155724" : r.percentage >= 50 ? "#856404" : "#721c24",
                  }}>
                    {r.score}/{r.total} ({r.percentage}%)
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Student Progress View ───────────────────────────────────────
function StudentProgressView({ progress, onBack }) {
  const bySubject = {};
  progress.forEach((p) => {
    if (!bySubject[p.subject]) bySubject[p.subject] = [];
    bySubject[p.subject].push(p);
  });

  return (
    <div style={styles.page}>
      <Header title="Mijn Voortgang 📊" subtitle="Zo doe jij het!" onBack={onBack} />
      <div style={styles.content}>
        {progress.length === 0 ? (
          <div style={styles.emptyState}>
            <span style={{ fontSize: 48 }}>🌱</span>
            <p>Je bent nog niet begonnen. Ga oefenen!</p>
          </div>
        ) : (
          <>
            <div style={styles.statsRow}>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{progress.length}</div>
                <div style={styles.statLabel}>Quizzen</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{Math.round(progress.reduce((a, b) => a + b.percentage, 0) / progress.length)}%</div>
                <div style={styles.statLabel}>Gemiddeld</div>
              </div>
              <div style={styles.statCard}>
                <div style={styles.statValue}>{progress.filter((p) => p.percentage >= 80).length}</div>
                <div style={styles.statLabel}>Voldoendes</div>
              </div>
            </div>

            {Object.entries(bySubject).map(([subId, results]) => {
              const subj = SUBJECTS.find((s) => s.id === subId);
              const avg = Math.round(results.reduce((a, b) => a + b.percentage, 0) / results.length);
              return (
                <div key={subId} style={styles.subjectProgress}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                    <strong>{subj?.label}</strong>
                    <span style={{ marginLeft: "auto", fontWeight: 700, color: avg >= 80 ? "#28a745" : avg >= 50 ? "#f39c12" : "#e74c3c" }}>{avg}%</span>
                  </div>
                  <div style={styles.progressBarSmall}>
                    <div style={{ ...styles.progressFillSmall, width: `${avg}%`, background: avg >= 80 ? "#28a745" : avg >= 50 ? "#f39c12" : "#e74c3c" }} />
                  </div>
                  <div style={{ fontSize: 12, color: "#636e72", marginTop: 4 }}>{results.length} poging{results.length !== 1 ? "en" : ""}</div>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Shared Components ───────────────────────────────────────────
function Header({ title, subtitle, onBack }) {
  return (
    <div style={styles.header}>
      <button style={styles.headerBack} onClick={onBack}>←</button>
      <div>
        <h2 style={styles.headerTitle}>{title}</h2>
        {subtitle && <p style={styles.headerSubtitle}>{subtitle}</p>}
      </div>
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────
const styles = {
  app: {
    fontFamily: "'Nunito', sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(160deg, #f0f4f8 0%, #e8eef5 50%, #f5f0eb 100%)",
    maxWidth: 480,
    margin: "0 auto",
    position: "relative",
  },
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  heroSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 24px 32px",
    flex: 1,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 8,
  },
  logoIcon: {
    fontSize: 48,
    animation: "float 3s ease infinite",
  },
  logoText: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 42,
    fontWeight: 700,
    margin: 0,
    letterSpacing: -1,
  },
  subtitle: {
    fontFamily: "'Nunito', sans-serif",
    color: "#636e72",
    fontSize: 16,
    marginBottom: 32,
    textAlign: "center",
  },
  nameInput: {
    width: "100%",
    maxWidth: 360,
    marginBottom: 32,
  },
  inputLabel: {
    display: "block",
    fontWeight: 700,
    fontSize: 14,
    color: "#2d3436",
    marginBottom: 6,
    fontFamily: "'Fredoka', sans-serif",
  },
  textInput: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    border: "2px solid #e0e6ed",
    fontFamily: "'Nunito', sans-serif",
    fontSize: 16,
    fontWeight: 600,
    outline: "none",
    transition: "border-color 0.2s",
    background: "#fff",
    boxSizing: "border-box",
  },
  roleCards: {
    display: "flex",
    gap: 14,
    width: "100%",
    maxWidth: 360,
  },
  roleCard: {
    flex: 1,
    border: "none",
    borderRadius: 20,
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
    color: "#fff",
  },
  roleIcon: { fontSize: 36 },
  roleLabel: { fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700 },
  roleDesc: { fontSize: 12, opacity: 0.9 },

  // Header
  header: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "16px 20px",
    background: "#fff",
    borderBottom: "1px solid #e8eef5",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  headerBack: {
    background: "#f0f4f8",
    border: "none",
    borderRadius: 12,
    width: 40,
    height: 40,
    fontSize: 18,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: 700,
  },
  headerTitle: { fontFamily: "'Fredoka', sans-serif", fontSize: 22, margin: 0, color: "#2d3436" },
  headerSubtitle: { fontSize: 13, color: "#636e72", margin: 0 },

  // Content
  content: { padding: "20px", flex: 1 },

  // Action buttons
  actionRow: { display: "flex", gap: 12, marginBottom: 24 },
  bigButton: {
    flex: 1,
    border: "none",
    borderRadius: 18,
    padding: "20px 16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    cursor: "pointer",
    color: "#fff",
    fontFamily: "'Nunito', sans-serif",
    fontSize: 14,
    boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
    transition: "transform 0.15s",
  },

  // Section title
  sectionTitle: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 18,
    color: "#2d3436",
    margin: "0 0 14px",
  },

  // Subject grid
  subjectGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: 10,
    marginBottom: 24,
  },
  subjectCard: {
    border: "3px solid transparent",
    borderRadius: 16,
    padding: "16px 8px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "'Nunito', sans-serif",
    background: "#fff",
  },

  // Level grid
  levelGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    marginBottom: 24,
  },
  levelCard: {
    border: "3px solid transparent",
    borderRadius: 16,
    padding: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    cursor: "pointer",
    transition: "all 0.2s",
    fontFamily: "'Nunito', sans-serif",
    background: "#fff",
  },

  // Settings
  settingsGroup: {
    background: "#fff",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  },
  settingLabel: {
    display: "block",
    fontWeight: 700,
    fontSize: 14,
    color: "#2d3436",
    marginBottom: 6,
    marginTop: 16,
    fontFamily: "'Fredoka', sans-serif",
  },
  slider: {
    width: "100%",
    accentColor: "#4ECDC4",
    height: 6,
  },

  // Progress bar
  progressBar: {
    height: 6,
    background: "#e0e6ed",
    borderRadius: 3,
    marginBottom: 24,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    background: "linear-gradient(90deg, #FF6B35, #4ECDC4)",
    borderRadius: 3,
    transition: "width 0.4s ease",
  },

  // Step content
  stepContent: { animation: "slideUp 0.3s ease" },
  stepTitle: { fontFamily: "'Fredoka', sans-serif", fontSize: 20, color: "#2d3436", marginBottom: 16 },

  // Navigation
  navRow: { display: "flex", gap: 12, marginTop: 24, paddingBottom: 24 },
  backBtn: {
    background: "#f0f4f8",
    border: "none",
    borderRadius: 14,
    padding: "14px 24px",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    color: "#636e72",
  },
  nextBtn: {
    background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
    color: "#fff",
    border: "none",
    borderRadius: 14,
    padding: "14px 28px",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(255,107,53,0.3)",
  },

  // Lobby
  lobbyCard: {
    margin: "auto 20px",
    background: "#fff",
    borderRadius: 24,
    padding: "32px 24px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  lobbyLogo: { fontSize: 48, marginBottom: 8 },
  lobbyTitle: { fontFamily: "'Fredoka', sans-serif", fontSize: 28, margin: 0, color: "#2d3436" },
  lobbySubtitle: { color: "#636e72", marginBottom: 16 },
  whatsappButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
    background: "#25D366",
    color: "#fff",
    border: "none",
    borderRadius: 14,
    padding: "14px 20px",
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 16,
    fontWeight: 600,
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
    marginBottom: 16,
    transition: "transform 0.15s",
  },
  codeDisplay: { display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 },
  codeLetter: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 36,
    fontWeight: 700,
    background: "#f0f4f8",
    padding: "10px 16px",
    borderRadius: 12,
    letterSpacing: 2,
  },
  lobbyInfo: { display: "flex", justifyContent: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" },
  badge: {
    background: "#f0f4f8",
    padding: "6px 14px",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 600,
  },
  playersSection: { textAlign: "left", marginBottom: 20 },
  playersList: { display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 },
  playerChip: {
    padding: "8px 16px",
    borderRadius: 20,
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "'Nunito', sans-serif",
  },
  startButton: {
    width: "100%",
    background: "linear-gradient(135deg, #2d3436, #1a1a2e)",
    color: "#fff",
    border: "none",
    borderRadius: 16,
    padding: "18px",
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 18,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    marginBottom: 16,
  },
  waitingBox: { padding: 20, color: "#636e72" },
  lobbyTip: { fontSize: 12, color: "#b2bec3", fontStyle: "italic" },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#636e72",
    fontSize: 14,
    cursor: "pointer",
    marginTop: 8,
    fontWeight: 600,
    fontFamily: "'Nunito', sans-serif",
  },

  // Quiz card
  quizList: { display: "flex", flexDirection: "column", gap: 12 },
  quizCard: {
    background: "#fff",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  },
  quizCardHeader: { display: "flex", alignItems: "center", gap: 12, marginBottom: 10 },
  quizTitle: { fontWeight: 700, fontSize: 15, color: "#2d3436" },
  quizMeta: { fontSize: 12, color: "#636e72" },
  quizCardActions: { display: "flex", gap: 8 },
  smallButton: {
    background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
    color: "#fff",
    border: "none",
    borderRadius: 10,
    padding: "8px 16px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },
  smallButtonAlt: {
    background: "#f0f4f8",
    color: "#636e72",
    border: "none",
    borderRadius: 10,
    padding: "8px 16px",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
  },
  deadlineBadge: {
    padding: "4px 10px",
    borderRadius: 10,
    color: "#fff",
    fontSize: 12,
    fontWeight: 800,
  },

  // Join section
  joinSection: {
    background: "#fff",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
  },
  codeInputRow: { display: "flex", gap: 10 },
  joinButton: {
    background: "linear-gradient(135deg, #FF6B35, #FF8C42)",
    color: "#fff",
    border: "none",
    borderRadius: 14,
    padding: "14px 20px",
    fontWeight: 800,
    cursor: "pointer",
    whiteSpace: "nowrap",
    fontFamily: "'Nunito', sans-serif",
    fontSize: 14,
  },
  errorText: { color: "#e74c3c", fontSize: 13, marginTop: 6, fontWeight: 600 },

  // Assignment card
  assignmentCard: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#fff",
    borderRadius: 14,
    padding: "14px 16px",
    marginBottom: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  doneBadge: { fontSize: 13, fontWeight: 700 },

  // Recent card
  recentCard: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#fff",
    borderRadius: 14,
    padding: "12px 16px",
    marginBottom: 8,
    boxShadow: "0 1px 6px rgba(0,0,0,0.03)",
  },
  scoreBadge: {
    padding: "4px 12px",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 800,
  },

  // Play quiz
  quizHeader: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 20px 8px",
  },
  qCounter: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#636e72",
  },
  scoreDisplay: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#FF6B35",
  },
  timerBar: {
    height: 8,
    background: "#e0e6ed",
    borderRadius: 4,
    margin: "0 20px 4px",
    overflow: "hidden",
  },
  timerFill: {
    height: "100%",
    borderRadius: 4,
  },
  questionCard: {
    margin: "0 20px",
    background: "#fff",
    borderRadius: 24,
    padding: "28px 20px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
    animation: "slideUp 0.3s ease",
  },
  questionText: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 20,
    color: "#2d3436",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 1.4,
  },
  optionsGrid: { display: "flex", flexDirection: "column", gap: 10 },
  optionButton: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "16px",
    borderRadius: 14,
    border: "2px solid",
    background: "#fff",
    cursor: "pointer",
    fontFamily: "'Nunito', sans-serif",
    fontSize: 15,
    fontWeight: 700,
    transition: "all 0.2s",
    textAlign: "left",
  },
  optionLetter: {
    width: 32,
    height: 32,
    borderRadius: 10,
    background: "rgba(0,0,0,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 800,
    flexShrink: 0,
  },

  // Results
  resultsCard: {
    margin: "32px 20px",
    background: "#fff",
    borderRadius: 24,
    padding: "32px 24px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
  },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #4ECDC4, #44A08D)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    boxShadow: "0 8px 24px rgba(78,205,196,0.3)",
  },
  scoreNumber: { fontFamily: "'Fredoka', sans-serif", fontSize: 36, fontWeight: 700, color: "#fff" },
  scoreDetail: { fontSize: 13, color: "rgba(255,255,255,0.85)" },
  resultDetails: {
    background: "#f8f9fa",
    borderRadius: 14,
    padding: 12,
  },
  resultRow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 4px",
    borderBottom: "1px solid #e8eef5",
  },

  // Stats
  statsRow: { display: "flex", gap: 10, marginBottom: 24 },
  statCard: {
    flex: 1,
    background: "#fff",
    borderRadius: 16,
    padding: "16px 12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  statValue: { fontFamily: "'Fredoka', sans-serif", fontSize: 28, fontWeight: 700, color: "#2d3436" },
  statLabel: { fontSize: 12, color: "#636e72", fontWeight: 600 },

  // Empty state
  emptyState: { textAlign: "center", padding: "48px 20px", color: "#636e72" },

  // Subject progress
  subjectProgress: {
    background: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  progressBarSmall: {
    height: 8,
    background: "#e0e6ed",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFillSmall: {
    height: "100%",
    borderRadius: 4,
    transition: "width 0.6s ease",
  },
};

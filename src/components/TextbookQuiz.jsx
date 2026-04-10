import { useState } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS, TEXTBOOKS, CHAPTER_TITLES, PARAGRAPH_TITLES, TEXTBOOK_CATEGORIES_VO, TEXTBOOK_CATEGORIES_PO } from "../constants.js";
import { SoundEngine } from "../utils.js";
import Header from "./Header.jsx";

export default function TextbookQuiz({ onStart, onBack, onHome, userRole, userLevel }) {
  const TEXTBOOK_CATEGORIES = userRole === "leerling" ? TEXTBOOK_CATEGORIES_PO : TEXTBOOK_CATEGORIES_VO;
  const groepBuckets = {"1":"groep12","2":"groep12","3":"groep3","4":"groep3","5":"groep5","6":"groep5","7":"groep7","8":"groep7"};
  const klasBuckets  = {"1":"klas1","2":"klas1","3":"klas3","4":"klas3"};
  const initLevel = userRole === "leerling" ? (groepBuckets[userLevel] || "") : userRole === "student" ? (klasBuckets[userLevel] || "") : "";
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [customBook, setCustomBook] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);
  const [deel, setDeel] = useState("");
  const [chapterNum, setChapterNum] = useState("");
  const [paragraaf, setParagraaf] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState(initLevel);
  const [questionCount, setQuestionCount] = useState(8);
  const [timePerQuestion, setTimePerQuestion] = useState(0);
  const [coverUrl, setCoverUrl] = useState(null);
  const [coverLoading, setCoverLoading] = useState(false);
  const [coverZoom, setCoverZoom] = useState(false);
  const [coverResults, setCoverResults] = useState([]);
  const [coverResultIndex, setCoverResultIndex] = useState(0);
  const [isKnownCover, setIsKnownCover] = useState(false);

  const bookName = selectedBook ? selectedBook.name : customBook;
  const chapter = paragraaf ? `${chapterNum}.${paragraaf}` : (chapterNum ? `Hoofdstuk ${chapterNum}` : "");
  const canNext1 = category !== "";
  const canNext2 = bookName.trim() !== "";
  const canNext3 = chapterNum !== "" && (level !== "" || initLevel !== "");

  // Known cover URLs for popular textbooks
  // Generate SVG covers matching real book colors/styles
  const makeBookCover = (title, subtitle, colors, icon) => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 280">
      <defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${colors[0]}"/><stop offset="100%" stop-color="${colors[1]}"/></linearGradient></defs>
      <rect width="200" height="280" rx="8" fill="url(#bg)"/>
      <circle cx="140" cy="180" r="80" fill="${colors[2]}" opacity="0.3"/>
      <circle cx="60" cy="100" r="50" fill="${colors[2]}" opacity="0.2"/>
      <text x="20" y="50" font-family="Arial" font-weight="900" font-size="22" fill="white">${title}</text>
      <text x="20" y="75" font-family="Arial" font-weight="400" font-size="13" fill="rgba(255,255,255,0.8)">${subtitle}</text>
      <text x="100" y="180" font-family="Arial" font-size="48" text-anchor="middle" fill="rgba(255,255,255,0.15)">${icon}</text>
      <text x="20" y="260" font-family="Arial" font-size="10" fill="rgba(255,255,255,0.5)">Noordhoff</text>
    </svg>`;
    return "data:image/svg+xml," + encodeURIComponent(svg);
  };

  const deelNum = (d) => d ? (parseInt(d.replace(/\D/g, "")) || 0) : 0;
  const BOOK_COVERS = {
    // ── Wiskunde VO ──────────────────────────────────────────────
    "GR Havo/vwo 1 Deel 1":      () => "/covers/gr-13e-hv1-deel1.png",
    "GR Havo/vwo 1 Deel 2":      () => "/covers/gr-13e-hv1-deel2.png",
    "GR VWO 1":                  () => "/covers/gr-13e-vwo1.png",
    "GR VMBO-gt/Havo 1":         () => "/covers/gr-13e-vmbo-havo1.png",
    "GR Havo/vwo 2":             () => "/covers/gr-13e-hv2.png",
    "Moderne Wiskunde Havo/vwo 1a": () => "/covers/mw-13e-hv1a.png",
    "Moderne Wiskunde VWO 1a":   () => "/covers/mw-13e-vwo1a.png",
    "Moderne Wiskunde Havo A1":  () => "/covers/mw-12e-havo-a1.png",
    "Moderne Wiskunde VWO B1":   () => "/covers/mw-12e-vwo-b1.png",
    "KERN Wiskunde Havo/vwo 1A": () => "/covers/kern-wis-hv1a.png",
    "KERN Wiskunde Havo/vwo 1B": () => "/covers/kern-wis-hv1b.jpg",
    "KERN Wiskunde Havo/vwo 2A": () => "/covers/kern-wis-hv2a.jpg",
    "Netwerk Wiskunde":          () => "/covers/netwerk-wiskunde.jpg",
    "MathPlus VWO":              () => "/covers/mathplus-vwo1.jpg",
    // ── Nederlands VO ────────────────────────────────────────────
    "Nieuw Nederlands": (d) => {
      if (!d) return "/covers/nieuw-nederlands-1.jpg";
      if (d.toLowerCase().includes("vmbo")) return "/covers/nieuw-nederlands-vmbo.jpg";
      if (d.includes("7")) return "/covers/nieuw-nederlands-7e.jpg";
      return deelNum(d) >= 4 ? "/covers/nieuw-nederlands-4.jpg" : "/covers/nieuw-nederlands-1.jpg";
    },
    "Nieuw Nederlands Havo/vwo 1": () => "/covers/nieuw-nederlands-1.jpg",
    "Nieuw Nederlands Havo/vwo 2": () => "/covers/nieuw-nederlands-1.jpg",
    "Nieuw Nederlands Havo 3":     () => "/covers/nieuw-nederlands-1.jpg",
    "Nieuw Nederlands VWO 4":      () => "/covers/nieuw-nederlands-4.jpg",
    "Talent":        () => "/covers/talent.jpg",
    "Talent Havo/vwo 1":        () => "/covers/talent-hv1.jpg",
    "Talent MAX Havo/vwo 2B":   () => "/covers/talent-max-hv2b.jpg",
    "Talent MAX VWO/Gym 2B":    () => "/covers/talent-max-vwogym2b.jpg",
    "Talent MAX Bovenbouw 4-6": () => "/covers/talent-max-bovenbouw.jpg",
    "Op Niveau":     () => "/covers/op-niveau.jpg",
    "Op Niveau Havo/vwo 1":  () => "/covers/op-niveau-hv1.jpg",
    "Op Niveau Havo/vwo 2":  () => "/covers/op-niveau-hv2.jpg",
    "Op Niveau Havo 4/5":    () => "/covers/op-niveau-havo45.jpg",
    "Op Niveau VWO 5/6":     () => "/covers/op-niveau-vwo56.jpg",
    "Kern Nederlands":() => "/covers/kern-nederlands.png",
    "KERN Nederlands Havo/vwo 1": () => "/covers/kern-nl-hv1.jpg",
    "KERN Nederlands Havo/vwo 2": () => "/covers/kern-nl-hv2.jpg",
    "KERN Nederlands Havo 3":     () => "/covers/kern-nl-havo3.jpg",
    "KERN Nederlands VWO 3":      () => "/covers/kern-nl-vwo3.jpg",
    // ── Engels VO ────────────────────────────────────────────────
    "Stepping Stones":() => "/covers/stepping-stones.jpg",
    "All Right!":    () => "/covers/all-right.jpg",
    "New Interface": (d) => {
      if (!d) return "/covers/new-interface-hv.jpg";
      if (d.toLowerCase().includes("vwo")) return "/covers/new-interface-vwo.jpg";
      if (d.toLowerCase().includes("vh"))  return "/covers/new-interface-vh.jpg";
      return "/covers/new-interface-hv.jpg";
    },
    "Upload":        () => makeBookCover("Upload",    "Engels", ["#0b5345","#148f77","#1abc9c"], "U"),
    "Keys":          () => makeBookCover("Keys",      "Engels", ["#0e6251","#17a589","#45b39d"], "K"),
    "Kern Engels":   () => makeBookCover("Kern",      "Engels", ["#01579b","#0277bd","#039be5"], "KE"),
    "Neue Kontakte": () => "/covers/neue-kontakte.png",
    // ── Aardrijkskunde VO ────────────────────────────────────────
    "De Geo":        () => "/covers/de-geo.jpg",
    "BuiteNLand":    () => "/covers/buitenland.jpg",
    // ── Geschiedenis VO ──────────────────────────────────────────
    "Feniks":        () => "/covers/feniks.jpg",
    "Sprekend Verleden":() => "/covers/sprekend-verleden.jpg",
    "Geschiedeniswerkplaats":() => "/covers/geschiedeniswerkplaats.jpg",
    "MeMo":          (d) => deelNum(d) <= 2 ? "/covers/memo-onderbouw.jpg" : "/covers/memo.jpg",
    "Historica":     () => makeBookCover("Historica", "Geschiedenis", ["#4e342e","#6d4c41","#795548"], "H"),
    // ── NaSk (onderbouw) ─────────────────────────────────────────
    "Overal NaSk":   () => "/covers/overal-nask.jpg",
    "Newton NaSk":   () => "/covers/newton-nask.jpg",
    "Nova NaSk":     () => "/covers/nova-nask.jpg",
    // ── Biologie VO ──────────────────────────────────────────────
    "BvJ Havo/vwo Deel 1":    () => "/covers/bvj-havo-vwo-1.jpg",
    "BvJ Havo/vwo Deel 2":    () => "/covers/bvj-havo-vwo-2.jpg",
    "BvJ Havo Bovenbouw":     () => "/covers/bvj-havo-bovenbouw.jpg",
    "BvJ VWO Bovenbouw":      () => "/covers/bvj-vwo-bovenbouw.jpg",
    "BvJ VMBO Onderbouw":     () => "/covers/bvj-vmbo-onderbouw.jpg",
    "BvJ VMBO Bovenbouw":     () => "/covers/bvj-vmbo-bovenbouw.jpg",
    "BvJ MAX Onderbouw":      () => "/covers/bvj-max-onderbouw.jpg",
    "BvJ MAX Havo/vwo":       () => "/covers/bvj-max-havo-vwo.jpg",
    "BvJ MAX VMBO":           () => "/covers/bvj-max-vmbo.jpg",
    "BvJ MAX VWO Bovenbouw":  () => "/covers/bvj-max-vwo-bovenbouw.jpg",
    "Vivo":          () => "/covers/vivo.jpg",
    "Nectar":        (d) => deelNum(d) >= 3 ? "/covers/nectar-bovenbouw.jpg" : "/covers/nectar.jpg",
    "Vivo":          () => makeBookCover("Vivo",     "Biologie", ["#1b5e20","#388e3c","#4caf50"], "V"),
    "10 voor Biologie":() => "/covers/10voorbiologie.jpg",
    // ── Natuurkunde VO ───────────────────────────────────────────
    "Systematische Natuurkunde":() => "/covers/sys-natuurkunde.jpg",
    "Pulsar":        () => "/covers/pulsar.jpg",
    "Nova Natuurkunde":() => makeBookCover("Nova",   "Natuurkunde", ["#4a148c","#6a1b9a","#7b1fa2"], "NN"),
    "Overal Natuurkunde":(d) => deelNum(d) >= 4 ? "/covers/natuurkunde-overal-4.jpg" : "/covers/natuurkunde-overal-1.jpg",
    // ── Scheikunde VO ────────────────────────────────────────────
    "Chemie Overal": () => "/covers/scheikunde-overal.jpg",
    "Nova Scheikunde":() => "/covers/nova-scheikunde.jpg",
    "Newton Scheikunde":() => makeBookCover("Newton","Scheikunde", ["#bf360c","#d84315","#e64a19"], "NS"),
    // ── Economie VO ──────────────────────────────────────────────
    "Pincode":       () => "/covers/pincode-new.jpg",
    "Economie Integraal":() => "/covers/economie-integraal.jpg",
    "Kern Economie": () => makeBookCover("Kern",    "Economie", ["#e65100","#ef6c00","#f57c00"], "KE"),
    // ── Duits VO ─────────────────────────────────────────────────
    "Na Klar!":      () => "/covers/na-klar.jpg",
    "TrabiTour":     () => "/covers/trabitour.jpg",
    // ── Frans VO ─────────────────────────────────────────────────
    "Grandes Lignes":() => "/covers/grandes-lignes.jpg",
    "Bravoure":      () => "/covers/bravoure.png",
    "D'accord":      () => "/covers/daccord.jpg",
    // ── Maatschappijleer VO ──────────────────────────────────────
    "Thema's Maatschappijleer":() => "/covers/themas-maatschappijleer.jpg",
    "Memo Maatschappijleer":   () => makeBookCover("Memo","Maatschappijleer", ["#37474f","#455a64","#546e7a"], "MM"),
    "De Basis":      () => makeBookCover("De Basis","Maatschappijleer", ["#263238","#37474f","#455a64"], "DB"),
    // ── Basisschool rekenen ──────────────────────────────────────
    "Pluspunt":      () => "/covers/pluspunt.jpg",
    "De Wereld in Getallen":() => "/covers/wereld-in-getallen.jpg",
    "Getal & Ruimte Junior":() => "/covers/getal-ruimte-junior.jpg",
    "Wizwijs":       () => "/covers/wizwijs.jpg",
    "Alles Telt":    () => makeBookCover("Alles","Telt", ["#1565c0","#1976d2","#1e88e5"], "AT"),
    // ── Basisschool taal ─────────────────────────────────────────
    "Taal Actief":   () => "/covers/taal-actief.jpg",
    "Staal":         () => "/covers/staal.jpg",
    "Nieuw Nederlands Junior":() => makeBookCover("Nieuw NL","Junior", ["#004d40","#00695c","#00796b"], "NNJ"),
    "Veilig Leren Lezen":() => "/covers/veilig-leren-lezen.webp",
    "Lijn 3":        () => "/covers/lijn3.jpg",
    // ── Basisschool wereld & natuur ──────────────────────────────
    "Naut / Meander / Brandaan":() => "/covers/naut-meander-brandaan.jpg",
    "Argus Clou":    () => "/covers/argus-clou.jpg",
    "Blink Wereld":  () => "/covers/blink.jpg",
  };

  // Search for book cover
  useEffect(() => {
    if (!bookName) { setCoverUrl(null); setCoverResults([]); setCoverResultIndex(0); setIsKnownCover(false); return; }
    setCoverResultIndex(0);
    const searchCover = async () => {
      setCoverLoading(true);
      // 1. Check known book covers first
      if (BOOK_COVERS[bookName]) {
        setCoverUrl(BOOK_COVERS[bookName](deel));
        setIsKnownCover(true);
        setCoverResults([]);
        setCoverLoading(false);
        return;
      }
      setIsKnownCover(false);
      // 2. Try Google Books as fallback — collect all results for cycling
      try {
        const query = `${bookName} ${deel || ""} schoolboek`.trim();
        const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&maxResults=8&langRestrict=nl&printType=books`);
        const data = await res.json();
        const covers = [];
        for (const item of (data.items || [])) {
          const links = item.volumeInfo?.imageLinks;
          if (links) {
            let url = links.medium || links.large || links.thumbnail || links.smallThumbnail || "";
            url = url.replace("http:", "https:").replace("&edge=curl", "").replace("zoom=1", "zoom=2");
            if (url) covers.push(url);
          }
        }
        setCoverResults(covers);
        setCoverUrl(covers[0] || null);
      } catch { setCoverResults([]); setCoverUrl(null); }
      setCoverLoading(false);
    };
    const timer = setTimeout(searchCover, 300);
    return () => clearTimeout(timer);
  }, [bookName, deel]);

  const selectStyle = {
    width: "100%", padding: "14px 16px", borderRadius: 14, border: "2px solid #2a3f5f",
    fontFamily: "'Nunito', sans-serif", fontSize: 16, fontWeight: 600, outline: "none",
    background: "#1e2d45", boxSizing: "border-box", appearance: "none", color: "#ffffff",
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238899aa' d='M6 8L1 3h10z'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center",
    cursor: "pointer",
  };

  return (
    <div style={styles.page}>
      <Header title="Uit je boek 📕" subtitle={`Stap ${step} van 3`} onBack={step > 1 ? () => setStep(step - 1) : onBack} onHome={onHome} />
      <div style={styles.content}>
        <div style={styles.progressBar}><div style={{ ...styles.progressFill, width: `${(step / 3) * 100}%` }} /></div>

        {step === 1 && (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <h3 style={styles.stepTitle}>Welk vak?</h3>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 20 }}>
              {TEXTBOOK_CATEGORIES.map((cat) => (
                <button key={cat.id} style={{
                  ...styles.levelCard,
                  borderColor: "transparent",
                  background: "#fff",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }} onClick={() => { SoundEngine.play("click"); setCategory(cat.id); setSelectedBook(null); setStep(2); }}>
                  <span style={{ fontSize: 24 }}>{cat.icon}</span>
                  <strong style={{ fontSize: 13 }}>{cat.label}</strong>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <h3 style={styles.stepTitle}>Kies je boek</h3>

            {TEXTBOOKS[category] && (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 16 }}>
                {[...TEXTBOOKS[category]].sort((a, b) => a.name.localeCompare(b.name, "nl")).map((book) => {
                  const coverPath = BOOK_COVERS[book.name] ? BOOK_COVERS[book.name]("") : null;
                  const isSelected = selectedBook?.id === book.id;
                  return (
                    <button key={book.id} onClick={() => { SoundEngine.play("click"); setSelectedBook(book); setCustomBook(""); setShowCustomInput(false); if (book.defaultLevel) setLevel(book.defaultLevel); else if (!book.autoLevel) setLevel(""); setStep(3); }} style={{
                      background: "transparent", border: "none", padding: 0, cursor: "pointer",
                      display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                    }}>
                      <div style={{
                        width: "100%", aspectRatio: "3/4", borderRadius: 12, overflow: "hidden",
                        border: isSelected ? "3px solid #00e676" : "3px solid transparent",
                        boxShadow: isSelected ? "0 0 0 2px #00c85360, 0 4px 16px rgba(0,200,83,0.3)" : "0 2px 10px rgba(0,0,0,0.4)",
                        position: "relative",
                      }}>
                        {coverPath ? (
                          <img src={coverPath} alt={book.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        ) : (
                          <div style={{ width: "100%", height: "100%", background: "#1e2d45", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 40 }}>
                            {book.icon}
                          </div>
                        )}
                        {isSelected && (
                          <div style={{ position: "absolute", top: 6, right: 6, background: "#00c853", borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15, fontWeight: 700 }}>✓</div>
                        )}
                      </div>
                      <span style={{ fontSize: 12, color: isSelected ? "#00e676" : "#8eaadb", fontWeight: isSelected ? 700 : 500, textAlign: "center", lineHeight: 1.3 }}>{book.name}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {!showCustomInput ? (
              <button onClick={() => { setShowCustomInput(true); setSelectedBook(null); }} style={{
                width: "100%", padding: "13px", borderRadius: 14, border: "2px dashed #2a3f5f",
                background: "transparent", color: "#8899aa", fontSize: 14, fontWeight: 600,
                cursor: "pointer", marginBottom: 16,
              }}>
                📖 Mijn boek staat er niet bij
              </button>
            ) : (
              <div style={{ background: "#1e2d45", borderRadius: 16, padding: 16, marginBottom: 16, border: "2px solid #2a3f5f" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <p style={{ fontSize: 13, color: "#00e676", fontWeight: 700, margin: 0 }}>📖 Typ je boek</p>
                  <button onClick={() => { setShowCustomInput(false); setCustomBook(""); }} style={{ background: "none", border: "none", color: "#8899aa", cursor: "pointer", fontSize: 18 }}>✕</button>
                </div>
                <input style={styles.textInput} value={customBook} onChange={(e) => { setCustomBook(e.target.value); setSelectedBook(null); }} placeholder="Bijv. Wiskunde Flex deel 2" autoFocus />
              </div>
            )}

            <div style={styles.navRow}>
              <button style={styles.backBtn} onClick={() => setStep(1)}>← Vorige</button>
              <div style={{ flex: 1 }} />
              <button style={{ ...styles.nextBtn, opacity: canNext2 ? 1 : 0.4 }} onClick={() => canNext2 && setStep(3)} disabled={!canNext2}>Volgende →</button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <h3 style={styles.stepTitle}>Wat wil je oefenen?</h3>

            <div style={styles.settingsGroup}>

              {/* Welke editie EERST */}
              <label style={styles.settingLabel}>📘 Welke editie?</label>
              <select style={selectStyle} value={deel} onChange={(e) => {
                const val = e.target.value;
                setDeel(val);
                if (selectedBook?.autoLevel && selectedBook?.deelToLevel) {
                  const deelNum = parseInt(val.replace(/\D/g, ""));
                  if (deelNum && selectedBook.deelToLevel[deelNum]) {
                    setLevel(selectedBook.deelToLevel[deelNum]);
                  }
                }
                if (selectedBook?.defaultLevel) {
                  setLevel(selectedBook.defaultLevel);
                }
              }}>
                <option value="">-- Kies editie / deel --</option>
                <optgroup label="Deel">
                  {[1,2,3,4,5,6,7,8].map(n => <option key={`d${n}`} value={`Deel ${n}`}>Deel {n}</option>)}
                </optgroup>
                <optgroup label="Editie">
                  {[10,11,12,13,14,15].map(n => <option key={`e${n}`} value={`Editie ${n}`}>Editie {n}</option>)}
                </optgroup>
                <optgroup label="Combinatie">
                  <option value="Deel 1, Editie 12">Deel 1 · Editie 12</option>
                  <option value="Deel 1, Editie 13">Deel 1 · Editie 13</option>
                  <option value="Deel 2, Editie 12">Deel 2 · Editie 12</option>
                  <option value="Deel 2, Editie 13">Deel 2 · Editie 13</option>
                  <option value="Deel 3, Editie 13">Deel 3 · Editie 13</option>
                  <option value="Deel 4, Editie 13">Deel 4 · Editie 13</option>
                </optgroup>
                <optgroup label="Boek">
                  <option value="Boek A">Boek A</option>
                  <option value="Boek B">Boek B</option>
                  <option value="Boek C">Boek C</option>
                </optgroup>
              </select>

              {/* Cover - GROOT, gecentreerd, klikbaar */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "20px 0", padding: 20, background: "#162033", borderRadius: 16 }}>
                {coverLoading ? (
                  <div style={{ width: 160, height: 210, borderRadius: 10, background: "#2a3f5f", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <div style={{ width: 28, height: 28, border: "3px solid #00c853", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
                  </div>
                ) : coverUrl ? (
                  <div onClick={() => setCoverZoom(true)} style={{ cursor: "pointer", position: "relative" }}>
                    <img src={coverUrl} alt={bookName} style={{ width: 160, height: 210, borderRadius: 10, objectFit: "cover", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }} />
                    <div style={{ position: "absolute", bottom: 8, right: 8, background: "rgba(0,0,0,0.6)", borderRadius: 8, padding: "4px 8px", fontSize: 11, color: "#fff" }}>🔍 Tik om te vergroten</div>
                  </div>
                ) : (
                  <div style={{ width: 160, height: 210, borderRadius: 10, background: "#2a3f5f", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 48 }}>
                    {selectedBook?.icon || "📕"}
                  </div>
                )}
                <div style={{ marginTop: 14, textAlign: "center" }}>
                  <div style={{ fontWeight: 700, fontSize: 17, color: "#e0e6f0" }}>{bookName}</div>
                  <div style={{ fontSize: 13, color: "#8899aa", marginTop: 4 }}>{[...TEXTBOOK_CATEGORIES_VO, ...TEXTBOOK_CATEGORIES_PO].find(c => c.id === category)?.label}{deel ? ` · ${deel}` : ""}</div>
                  {coverUrl && isKnownCover && <div style={{ fontSize: 13, color: "#00c853", marginTop: 8, fontWeight: 700 }}>✅ Cover gevonden</div>}
                  {coverUrl && !isKnownCover && (
                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 13, color: "#8899aa", marginBottom: 6 }}>Is dit je boek?</div>
                      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                        <button style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "#00c853", color: "#fff", fontWeight: 700, cursor: "pointer", fontSize: 13 }} onClick={() => setIsKnownCover(true)}>✅ Ja</button>
                        <button style={{ padding: "6px 14px", borderRadius: 8, border: "none", background: "#2a3f5f", color: "#8899aa", fontWeight: 700, cursor: "pointer", fontSize: 13 }} onClick={() => {
                          const next = coverResultIndex + 1;
                          if (next < coverResults.length) {
                            setCoverResultIndex(next);
                            setCoverUrl(coverResults[next]);
                          } else {
                            setCoverUrl(null);
                            setCoverResults([]);
                          }
                        }}>❌ Nee, andere →</button>
                      </div>
                    </div>
                  )}
                  {!coverUrl && !coverLoading && <div style={{ fontSize: 12, color: "#667788", marginTop: 8 }}>📘 Cover niet gevonden — inhoud klopt wel!</div>}
                </div>
              </div>

              {/* Cover zoom overlay */}
              {coverZoom && coverUrl && (
                <div onClick={() => setCoverZoom(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 200, cursor: "pointer", animation: "fadeBg 0.2s ease" }}>
                  <img src={coverUrl} alt={bookName} style={{ maxWidth: "90%", maxHeight: "75vh", borderRadius: 12, boxShadow: "0 8px 40px rgba(0,0,0,0.6)", objectFit: "contain" }} />
                  <div style={{ marginTop: 16, textAlign: "center" }}>
                    <div style={{ fontWeight: 700, fontSize: 20, color: "#fff" }}>{bookName}</div>
                    <div style={{ fontSize: 14, color: "#8899aa", marginTop: 4 }}>{deel || ""}</div>
                  </div>
                  <div style={{ marginTop: 16, fontSize: 13, color: "#667788" }}>Tik om te sluiten</div>
                </div>
              )}

              <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>

              {/* Hoofdstuk dropdown */}
              <label style={{ ...styles.settingLabel, color: "#ff7b7b" }}>📖 Hoofdstuk *</label>
              <select style={{ ...selectStyle, borderColor: chapterNum ? "#69f0ae" : "#2a3f5f" }} value={chapterNum} onChange={(e) => { SoundEngine.play("click"); setChapterNum(e.target.value); setParagraaf(""); }}>
                <option value="">-- Kies hoofdstuk --</option>
                {(() => {
                  const titles = selectedBook ? (CHAPTER_TITLES[selectedBook.id] || []) : [];
                  const count = titles.length > 0 ? titles.length : 20;
                  return Array.from({length: count}, (_, i) => i + 1).map(n => {
                    const title = titles[n - 1];
                    return <option key={n} value={n}>{title ? `Hoofdstuk ${n} – ${title}` : `Hoofdstuk ${n}`}</option>;
                  });
                })()}
              </select>

              {/* Paragraaf dropdown */}
              {chapterNum && (
                <>
                  <label style={styles.settingLabel}>📄 Paragraaf</label>
                  <select style={selectStyle} value={paragraaf} onChange={(e) => { SoundEngine.play("click"); setParagraaf(e.target.value); }}>
                    <option value="">-- Heel hoofdstuk --</option>
                    {(() => {
                      const _bookParas = selectedBook ? (PARAGRAPH_TITLES[selectedBook.id] || {}) : {};
                      const paraTitles = _bookParas[chapterNum] || _bookParas._default || [];
                      const count = paraTitles.length > 0 ? paraTitles.length : 12;
                      return Array.from({length: count}, (_, i) => i + 1).map(n => {
                        const t = paraTitles[n - 1];
                        return <option key={n} value={n}>{t ? `§${chapterNum}.${n} – ${t}` : `§${chapterNum}.${n}`}</option>;
                      });
                    })()}
                  </select>
                </>
              )}

              {/* Niveau - alleen tonen als het niet automatisch bepaald kan worden */}
              {level ? (
                <div style={{ marginTop: 16, padding: 12, background: "#162033", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
                  <span>🎓</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#69f0ae" }}>Niveau: {LEVELS.find(l => l.id === level)?.label}</span>
                  {(selectedBook?.autoLevel) && <span style={{ fontSize: 11, color: "#667788", marginLeft: "auto" }}>automatisch bepaald</span>}
                </div>
              ) : (
                <>
                  <label style={{ ...styles.settingLabel, color: "#ff7b7b" }}>🎓 Niveau *</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginTop: 8 }}>
                    {LEVELS.map((l) => (
                      <button key={l.id} style={{
                        padding: "10px", borderRadius: 12, border: level === l.id ? "2px solid #69f0ae" : "2px solid #2a3f5f",
                        background: level === l.id ? "#69f0ae20" : "#1e2d45", cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                        fontWeight: 700, fontSize: 12, textAlign: "center", color: "#e0e6f0",
                      }} onClick={() => { SoundEngine.play("click"); setLevel(l.id); }}>
                        {l.icon} {l.label}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Aantal vragen */}
              <label style={styles.settingLabel}>Aantal vragen: {questionCount}</label>
              <input type="range" min={3} max={15} value={questionCount} onChange={(e) => setQuestionCount(+e.target.value)} style={styles.slider} />

              {/* Timer */}
              <label style={styles.settingLabel}>Tijd per vraag: {timePerQuestion === 0 ? "♾️ Geen limiet" : `${timePerQuestion}s`}</label>
              <input type="range" min={0} max={60} step={5} value={timePerQuestion} onChange={(e) => setTimePerQuestion(+e.target.value)} style={styles.slider} />
              {timePerQuestion === 0 && <div style={{ fontSize: 12, color: "#00e676", fontWeight: 600, marginTop: 4 }}>Sleep naar rechts voor een tijdslimiet</div>}
            </div>

            {/* Preview van selectie */}
            {chapterNum && level && (
              <div style={{ padding: 14, background: "#162a1e", borderRadius: 12, borderLeft: "4px solid #00c853", marginBottom: 16 }}>
                <div style={{ fontSize: 13, color: "#69f0ae", lineHeight: 1.6 }}>
                  <strong>Jouw selectie:</strong><br/>
                  📕 {bookName} {deel ? `· ${deel}` : ""}<br/>
                  📖 {chapter}<br/>
                  🎓 {LEVELS.find(l => l.id === level)?.label}
                </div>
              </div>
            )}

            <div style={styles.navRow}>
              <button style={styles.backBtn} onClick={() => setStep(2)}>← Vorige</button>
              <div style={{ flex: 1 }} />
              <button style={{ ...styles.nextBtn, opacity: canNext3 ? 1 : 0.4 }} onClick={() => {
                if (!canNext3) return;
                SoundEngine.play("click");
                onStart({
                  subject: category,
                  level,
                  questionCount,
                  timePerQuestion,
                  textbook: {
                    bookName,
                    edition: deel || null,
                    chapter,
                    topic: null,
                    level,
                  },
                });
              }} disabled={!canNext3}>
                🚀 Genereer vragen!
              </button>
            </div>

            <div style={{ marginTop: 8, padding: 14, background: "#1e2d3a", borderRadius: 12, borderLeft: "4px solid #00c853" }}>
              <div style={{ fontSize: 13, color: "#69f0ae", lineHeight: 1.5 }}>
                💡 <strong>Tip:</strong> Kies een paragraaf voor de beste vragen.
              </div>
            </div>
            <div style={{ marginTop: 8, padding: 14, background: "#162a1e", borderRadius: 12, borderLeft: "4px solid #00c853" }}>
              <div style={{ fontSize: 11, color: "#69f0ae", lineHeight: 1.5 }}>
                ✅ De vragen zijn gebaseerd op echte examen- en toetsvragen die online gevonden worden voor dit vak en niveau. De bron wordt bij de uitleg vermeld.
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

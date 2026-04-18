import { useState, useEffect } from "react";
import styles from "../styles.js";
import { SUBJECTS, LEVELS, TEXTBOOKS, ALL_KNOWN_BOOKS, CHAPTER_TITLES, PARAGRAPH_TITLES, TEXTBOOK_CATEGORIES_VO, TEXTBOOK_CATEGORIES_PO } from "../constants.js";
import { SoundEngine } from "../utils.js";
import Header from "./Header.jsx";

const schoolTypeMatchesBook = (bookName, schoolType) => {
  if (!schoolType || !bookName) return false;
  const n = bookName.toLowerCase();
  // Boek heeft expliciet schooltype in de naam → exacte match
  const hasTypeInName = n.includes("mavo") || n.includes("vmbo") || n.includes("havo") || n.includes("vwo") || n.includes("gym");
  if (!hasTypeInName) return true; // universeel boek: geschikt voor elk niveau
  if (schoolType === "mavo") return n.includes("mavo") || n.includes("vmbo");
  if (schoolType === "havo") return n.includes("havo");
  if (schoolType === "vwo") return n.includes("vwo");
  if (schoolType === "gym") return n.includes("vwo") || n.includes("gym");
  return false;
};

export default function TextbookQuiz({ onStart, onBack, onHome, userRole, userLevel, userSchoolType }) {
  const initType = userRole === "leerling" ? "po" : userRole === "student" ? "vo" : null;
  const [schoolType2, setSchoolType2] = useState(initType); // po | vo | null
  const TEXTBOOK_CATEGORIES = schoolType2 === "po" ? TEXTBOOK_CATEGORIES_PO : schoolType2 === "vo" ? TEXTBOOK_CATEGORIES_VO : [];
  const groepBuckets = {"1":"groep12","2":"groep12","3":"groep3","4":"groep3","5":"groep5","6":"groep5","7":"groep7","8":"groep7"};
  const klasBuckets  = {"1":"klas1","2":"klas1","3":"klas3","4":"klas3","5":"klas5","6":"klas6"};
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
  const chapterTitle = selectedBook ? ((CHAPTER_TITLES[selectedBook.id] || [])[parseInt(chapterNum) - 1] || null) : null;
  const _bookParasData = selectedBook ? (PARAGRAPH_TITLES[selectedBook.id] || {}) : {};
  const hasSpecificParaTitles = Object.keys(_bookParasData).some(k => k !== '_default');
  const useParaFreeText = !!selectedBook && !hasSpecificParaTitles;
  const paraTitle = !useParaFreeText && selectedBook && chapterNum && paragraaf
    ? (((PARAGRAPH_TITLES[selectedBook.id] || {})[chapterNum] || [])[parseInt(paragraaf) - 1] || null)
    : null;
  const chapter = paragraaf
    ? (useParaFreeText
      ? `Hoofdstuk ${chapterNum}, paragraaf: ${paragraaf}`
      : `${chapterNum}.${paragraaf}${paraTitle ? ` – ${paraTitle}` : ""}`)
    : chapterNum
      ? `Hoofdstuk ${chapterNum}${chapterTitle ? ` – ${chapterTitle}` : ""}`
      : "";
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
    "GR Havo/vwo 3":             () => "/covers/getal-ruimte-deel3.jpg",
    "GR Havo/vwo 4":             () => "/covers/getal-ruimte-deel4.jpg",
    "GR VWO 4":                  () => "/covers/getal-ruimte-deel4.jpg",
    "GR VWO 5":                  () => "/covers/getal-ruimte-deel4.jpg",
    "GR VMBO-gt/Havo 3":         () => "/covers/getal-ruimte-deel3.jpg",
    "Delta Wiskunde Havo 4":     () => makeBookCover("Delta","Wiskunde Havo 4",  ["#1b5e20","#2e7d32","#388e3c"], "Δ"),
    "Delta Wiskunde VWO 4":      () => makeBookCover("Delta","Wiskunde VWO 4",   ["#004d40","#00695c","#00796b"], "Δ"),
    "Exact Wiskunde Havo A":     () => makeBookCover("Exact","Wiskunde Havo A",  ["#006064","#00838f","#0097a7"], "E"),
    "Exact Wiskunde VWO B":      () => makeBookCover("Exact","Wiskunde VWO B",   ["#01579b","#0277bd","#0288d1"], "E"),
    "Moderne Wiskunde Havo A2":  () => "/covers/mw-havo-a2.png",
    "Moderne Wiskunde Havo A3":  () => "/covers/mw-havo-a3.png",
    "Moderne Wiskunde VWO B2":   () => "/covers/mw-vwo-b2.png",
    "Moderne Wiskunde VWO B3":   () => "/covers/mw-vwo-b3.png",
    "Moderne Wiskunde VWO B4":   () => "/covers/mw-vwo-b4.png",
    "Moderne Wiskunde VWO C2":   () => "/covers/moderne-wiskunde-bovenbouw.jpg",
    "KERN Wiskunde Havo/vwo 3":  () => makeBookCover("KERN","Wiskunde 3",  ["#311b92","#4527a0","#512da8"], "KW"),
    "KERN Wiskunde Havo/vwo 4":  () => makeBookCover("KERN","Wiskunde 4",  ["#4a148c","#6a1b9a","#7b1fa2"], "KW"),
    "Math4All":                  () => makeBookCover("Math","4All",         ["#0d47a1","#1565c0","#1976d2"], "M4"),
    "Nieuwe Wiskunde Havo/vwo 1":() => makeBookCover("Nieuwe","Wiskunde 1",["#006064","#00838f","#0097a7"], "NW"),
    "Toekomst Wiskunde":         () => makeBookCover("Toekomst","Wiskunde", ["#1a237e","#283593","#3949ab"], "TW"),
    "Wiskunde Flex":             () => "/covers/getal-ruimte-flex-deel1.png",
    "Wiskundelijn Havo/vwo 1":   () => makeBookCover("Wiskunde","lijn 1",   ["#004d40","#00695c","#00796b"], "WL"),
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
    "Nieuw Nederlands Havo 3":     () => "/covers/nn-havo3.jpg",
    "Nieuw Nederlands Havo 4":     () => "/covers/nn-havo3.jpg",
    "Nieuw Nederlands VWO 4":      () => "/covers/nn-vwo4.jpg",
    "Nieuw Nederlands VWO 5":      () => "/covers/nn-vwo4.jpg",
    "Nieuw Nederlands VMBO":       () => "/covers/nieuw-nederlands-vmbo.jpg",
    "KERN Nederlands Havo 4":      () => "/covers/kern-nl-havo3.jpg",
    "KERN Nederlands VWO 4":       () => "/covers/kern-nl-vwo3.jpg",
    "In de Lift":                  () => makeBookCover("In de","Lift NL",    ["#b71c1c","#c62828","#d32f2f"], "IL"),
    "Penvoerder":                  () => makeBookCover("Pen","voerder",      ["#4a148c","#6a1b9a","#7b1fa2"], "PV"),
    "Taal & Stijl":                () => makeBookCover("Taal &","Stijl",    ["#e65100","#ef6c00","#f57c00"], "T&S"),
    "Taalblokken":                 () => makeBookCover("Taal","blokken",     ["#1a237e","#283593","#3949ab"], "TB"),
    "Taalsignaal":                 () => makeBookCover("Taal","signaal",     ["#006064","#00838f","#0097a7"], "TS"),
    "Taalvitaal":                  () => makeBookCover("Taal","vitaal",      ["#004d40","#00695c","#00796b"], "TV"),
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
    "Stepping Stones":() => "/covers/stepping-stones-new.png",
    "All Right!":    () => "/covers/all-right.jpg",
    "Access Engels": () => makeBookCover("Access","Engels",   ["#0d47a1","#1565c0","#1976d2"], "AE"),
    "English in Mind":() => makeBookCover("English","in Mind",["#01579b","#0277bd","#0288d1"], "EM"),
    "Faces":         () => makeBookCover("Faces",  "Engels",  ["#004d40","#00695c","#00796b"], "FA"),
    "Fast Forward":  () => makeBookCover("Fast",   "Forward", ["#b71c1c","#c62828","#d32f2f"], "FF"),
    "Go! Engels":    () => makeBookCover("Go!",    "Engels",  ["#1b5e20","#2e7d32","#388e3c"], "GO"),
    "Insight":       () => makeBookCover("Insight","Engels",  ["#311b92","#4527a0","#512da8"], "IN"),
    "NOVA Engels":   () => makeBookCover("NOVA",   "Engels",  ["#006064","#00838f","#0097a7"], "NE"),
    "Password":      () => makeBookCover("Pass",   "word",    ["#880e4f","#ad1457","#c2185b"], "PW"),
    "Storyline":     () => makeBookCover("Story",  "line",    ["#e65100","#ef6c00","#f57c00"], "SL"),
    "Ticket":        () => makeBookCover("Ticket", "Engels",  ["#4a148c","#6a1b9a","#7b1fa2"], "TI"),
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
    "BuiteNLand":    () => "/covers/buitenland-new.png",
    "Wereldwijs":    () => "/covers/wereldwijs.jpg",
    "Aardrijkskunde in Context": () => makeBookCover("AK","in Context",      ["#33691e","#558b2f","#689f38"], "AiC"),
    "Aardig Wat":                () => makeBookCover("Aardig","Wat",         ["#1b5e20","#2e7d32","#388e3c"], "AW"),
    "Diepzicht":                 () => makeBookCover("Diep","zicht",         ["#006064","#00838f","#0097a7"], "DZ"),
    "Expeditie Aardrijkskunde":  () => makeBookCover("Expeditie","AK",      ["#e65100","#ef6c00","#f57c00"], "EX"),
    "Geo Actief":                () => makeBookCover("Geo","Actief",         ["#004d40","#00695c","#00796b"], "GA"),
    "GEO Havo/vwo":              () => makeBookCover("GEO","Havo/vwo",       ["#01579b","#0277bd","#0288d1"], "GH"),
    "Regio's in Beeld":          () => makeBookCover("Regio's","in Beeld",   ["#880e4f","#ad1457","#c2185b"], "RiB"),
    "Terra Aardrijkskunde":      () => makeBookCover("Terra","AK",           ["#4e342e","#6d4c41","#795548"], "TA"),
    "Wereld in Zicht":           () => makeBookCover("Wereld","in Zicht",    ["#311b92","#4527a0","#512da8"], "WiZ"),
    // ── Geschiedenis VO ──────────────────────────────────────────
    "Feniks":        (d) => deelNum(d) >= 3 ? "/covers/feniks-bovenbouw.jpg" : "/covers/feniks-new.jpg",
    "Sprekend Verleden":() => "/covers/sprekend-verleden.jpg",
    "Geschiedeniswerkplaats":() => "/covers/geschiedeniswerkplaats.jpg",
    "MeMo":          (d) => deelNum(d) <= 2 ? "/covers/memo-onderbouw.jpg" : "/covers/memo.jpg",
    "Historica":     () => makeBookCover("Historica", "Geschiedenis", ["#4e342e","#6d4c41","#795548"], "H"),
    "Historia":             () => makeBookCover("Historia",  "Geschiedenis", ["#5d4037","#6d4c41","#795548"], "HA"),
    "Levende Geschiedenis": () => makeBookCover("Levende",  "Geschiedenis",  ["#bf360c","#d84315","#e64a19"], "LG"),
    "Nieuw Sporen":         () => makeBookCover("Nieuw",    "Sporen",        ["#1a237e","#283593","#3949ab"], "NS"),
    "Spiegel & Venster":    () => makeBookCover("Spiegel &","Venster",       ["#006064","#00838f","#0097a7"], "S&V"),
    "Tijdvak":              () => makeBookCover("Tijd",     "vak",           ["#311b92","#4527a0","#512da8"], "TV"),
    "Van Mensen en Tijden": () => makeBookCover("Van Mensen","en Tijden",    ["#4e342e","#6d4c41","#795548"], "VMT"),
    "Wereldgeschiedenis in Context": () => makeBookCover("WG","in Context",  ["#880e4f","#ad1457","#c2185b"], "WiC"),
    // ── NaSk (onderbouw) ─────────────────────────────────────────
    "Overal NaSk":   () => "/covers/overal-nask.jpg",
    "Newton NaSk":   () => "/covers/newton-nask.jpg",
    "Nova NaSk":     () => "/covers/nova-nask.jpg",
    "Actieve NaSk":  () => makeBookCover("Actieve","NaSk", ["#4a148c","#6a1b9a","#7b1fa2"], "AN"),
    "NaSk in Context":() => makeBookCover("NaSk","in Context", ["#311b92","#4527a0","#512da8"], "NiC"),
    "NaSk Werkplaats":() => makeBookCover("NaSk","Werkplaats", ["#1a237e","#283593","#3949ab"], "NW"),
    "Powersource NaSk":() => makeBookCover("Power","source",   ["#b71c1c","#c62828","#d32f2f"], "PS"),
    // ── Biologie VO ──────────────────────────────────────────────
    "Nectar Bovenbouw":        () => "/covers/nectar-bovenbouw.jpg",
    "Nectar VMBO":             () => makeBookCover("Nectar","VMBO",         ["#1b5e20","#2e7d32","#388e3c"], "NV"),
    "Biologie Actief":         () => makeBookCover("Biologie","Actief",     ["#1b5e20","#2e7d32","#388e3c"], "BA"),
    "Biologie in Context":     () => makeBookCover("Biologie","in Context", ["#004d40","#00695c","#00796b"], "BiC"),
    "Biologie Werkplaats":     () => makeBookCover("Biologie","Werkplaats", ["#33691e","#558b2f","#689f38"], "BW"),
    "Darwin Biologie":         () => makeBookCover("Darwin",  "Biologie",   ["#006064","#00838f","#0097a7"], "DB"),
    "Leefwereld":              () => makeBookCover("Leef",    "wereld",     ["#880e4f","#ad1457","#c2185b"], "LW"),
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
    "Nectar":        (d) => deelNum(d) >= 3 ? "/covers/nectar-bovenbouw.jpg" : "/covers/nectar-new.png",
    "Vivo":          () => makeBookCover("Vivo",     "Biologie", ["#1b5e20","#388e3c","#4caf50"], "V"),
    "10 voor Biologie":() => "/covers/10voorbiologie.jpg",
    // ── Natuurkunde VO ───────────────────────────────────────────
    "Systematische Natuurkunde":() => "/covers/sys-nk-new.png",
    "Pulsar":        () => "/covers/pulsar.jpg",
    "Nova Natuurkunde":() => makeBookCover("Nova",   "Natuurkunde", ["#4a148c","#6a1b9a","#7b1fa2"], "NN"),
    "Overal Natuurkunde":(d) => deelNum(d) >= 4 ? "/covers/natuurkunde-overal-4.jpg" : "/covers/natuurkunde-overal-1.jpg",
    "Kracht & Energie":        () => makeBookCover("Kracht &","Energie",    ["#311b92","#4527a0","#512da8"], "K&E"),
    "Natuurkunde in Context":  () => makeBookCover("Natuur","in Context",   ["#1a237e","#283593","#3949ab"], "NiC"),
    // ── Scheikunde VO ────────────────────────────────────────────
    "Chemie Overal": () => "/covers/chemie-overal-new.png",
    "Nova Scheikunde":() => "/covers/nova-scheikunde.jpg",
    "Newton Scheikunde":() => makeBookCover("Newton","Scheikunde", ["#bf360c","#d84315","#e64a19"], "NS"),
    "Chemie in Context":() => makeBookCover("Chemie","in Context", ["#006064","#00838f","#0097a7"], "CiC"),
    "Molecuul":         () => makeBookCover("Mole",  "cuul",       ["#4a148c","#6a1b9a","#7b1fa2"], "MO"),
    "Scheikunde Actief":() => makeBookCover("Scheikunde","Actief",  ["#880e4f","#ad1457","#c2185b"], "SA"),
    // ── Economie VO ──────────────────────────────────────────────
    "Pincode":       () => "/covers/pincode-new.jpg",
    "Economie Integraal":() => "/covers/economie-integraal.jpg",
    "Kern Economie": () => makeBookCover("Kern",    "Economie", ["#e65100","#ef6c00","#f57c00"], "KE"),
    "Economie en Maatschappij":() => makeBookCover("Eco &","MIJ",          ["#f57f17","#f9a825","#fbc02d"], "E&M"),
    "Economisch Actief":       () => makeBookCover("Economisch","Actief",  ["#e65100","#ef6c00","#f57c00"], "EA"),
    "Markt":                   () => makeBookCover("Markt","Economie",     ["#827717","#9e9d24","#afb42b"], "MK"),
    "PROFIT":                  () => makeBookCover("PROFIT","Economie",    ["#1b5e20","#2e7d32","#388e3c"], "PR"),
    // ── Bedrijfseconomie VO ──────────────────────────────────────
    "Management & Organisatie Havo": () => "/covers/mo-havo.jpg",
    "Management & Organisatie VWO":  () => "/covers/mo-vwo.jpg",
    "Management & Organisatie":      () => "/covers/mo-havo.jpg",
    "KERN Management & Organisatie": () => makeBookCover("KERN","M&O",  ["#006064","#00838f","#0097a7"], "KM"),
    "Bedrijfseconomie Havo":         () => makeBookCover("BeCo","Havo", ["#880e4f","#ad1457","#c2185b"], "BE"),
    "BeCo Havo/vwo":                 () => makeBookCover("BeCo","Havo/vwo", ["#880e4f","#ad1457","#c2185b"], "BE"),
    // ── Duits VO ─────────────────────────────────────────────────
    "Na Klar!":      () => "/covers/na-klar.jpg",
    "Neue Kontakte": () => "/covers/neue-kontakte.png",
    "TrabiTour":     () => "/covers/trabitour.jpg",
    "Das ist gut":   () => makeBookCover("Das ist","gut",       ["#212121","#424242","#616161"], "DG"),
    "Deutsch Plus":  () => makeBookCover("Deutsch","Plus",      ["#f57f17","#f9a825","#fbc02d"], "DP"),
    "Echt Super!":   () => makeBookCover("Echt",   "Super!",    ["#bf360c","#d84315","#e64a19"], "ES"),
    "Fit für Deutsch":() => makeBookCover("Fit für","Deutsch",  ["#1b5e20","#2e7d32","#388e3c"], "FD"),
    "logo! Duits":   () => makeBookCover("logo!",  "Duits",     ["#880e4f","#ad1457","#c2185b"], "LO"),
    "Magnet":        () => makeBookCover("Magnet", "Duits",     ["#4a148c","#6a1b9a","#7b1fa2"], "MA"),
    "Stimmt":        () => makeBookCover("Stimmt", "Duits",     ["#212121","#424242","#616161"], "ST"),
    "Wir":           () => makeBookCover("Wir",    "Duits",     ["#006064","#00838f","#0097a7"], "WI"),
    // ── Frans VO ─────────────────────────────────────────────────
    "Grandes Lignes":() => "/covers/grandes-lignes-new.png",
    "Bravoure":      () => "/covers/bravoure.png",
    "D'accord":      () => "/covers/daccord.jpg",
    "À toi":         () => makeBookCover("À toi", "Frans",    ["#0d47a1","#1565c0","#1976d2"], "ÀT"),
    "C'est parti":   () => makeBookCover("C'est", "parti",   ["#b71c1c","#c62828","#d32f2f"], "CP"),
    "Chouette":      () => makeBookCover("Chou","ette",       ["#4a148c","#6a1b9a","#7b1fa2"], "CH"),
    "En Avant":      () => makeBookCover("En",  "Avant",     ["#1a237e","#283593","#3949ab"], "EA"),
    "Hé bonjour!":   () => makeBookCover("Hé",  "bonjour!",  ["#880e4f","#ad1457","#c2185b"], "HB"),
    "Libre":         () => makeBookCover("Libre","Frans",     ["#004d40","#00695c","#00796b"], "LI"),
    "Tout le monde": () => makeBookCover("Tout","le monde",   ["#006064","#00838f","#0097a7"], "TM"),
    // ── Maatschappijleer VO ──────────────────────────────────────
    "Thema's Maatschappijleer":() => "/covers/themas-maatschappijleer.jpg",
    "Memo Maatschappijleer":   () => makeBookCover("Memo","Maatschappijleer", ["#37474f","#455a64","#546e7a"], "MM"),
    "De Basis":      () => makeBookCover("De Basis","Maatschappijleer", ["#263238","#37474f","#455a64"], "DB"),
    "In de Samenleving":       () => makeBookCover("In de","Samenleving", ["#1a237e","#283593","#3949ab"], "IS"),
    // ── Spaans VO ────────────────────────────────────────────────
    "Paso Adelante 1": () => "https://images.ctfassets.net/huogrpkfou0w/2f9Ittiq7IHArjXLAljE5t/4e5377633263a84b9512980e7b7799ac/9789001788551.png",
    "Paso Adelante 2": () => "https://images.ctfassets.net/huogrpkfou0w/3890sFBdwwp08YXqScM1ki/de87b96f2652c8dbfc4e6858e27ac5c2/9789001788568.png",
    "Paso Adelante 3": () => "https://images.ctfassets.net/huogrpkfou0w/6IZwkxvqpTcIm4Nz19yXRW/cd0dde1772af368aeb7316f37cb2ccaa/9789001796471.png",
    "Paso Adelante 4": () => "https://images.ctfassets.net/huogrpkfou0w/7aXphtMrW9Vb2QHgtXVKGm/940ce4ba49ade6b5d867021f6ba9b5fd/9789001815677.png",
    "Paso Adelante": () => "https://images.ctfassets.net/huogrpkfou0w/2f9Ittiq7IHArjXLAljE5t/4e5377633263a84b9512980e7b7799ac/9789001788551.png",
    "Caminos nieuw": () => makeBookCover("Caminos","nieuw",  ["#e65100","#ef6c00","#f57c00"], "CA"),
    "Reporteros":    () => makeBookCover("Repor","teros",    ["#880e4f","#ad1457","#c2185b"], "RE"),
    "Gente joven":   () => makeBookCover("Gente","joven",    ["#4a148c","#6a1b9a","#7b1fa2"], "GJ"),
    "¡Apúntate!":    () => makeBookCover("¡Apún","tate!",    ["#1b5e20","#2e7d32","#388e3c"], "AP"),
    "Con gusto":     () => makeBookCover("Con","gusto",      ["#006064","#00838f","#0097a7"], "CG"),
    // ── Latijn VO ────────────────────────────────────────────────
    "Prima Nova":    () => makeBookCover("Prima","Nova",     ["#bf360c","#d84315","#e64a19"], "PN"),
    "Index":         () => makeBookCover("Index","Latijn",   ["#1a237e","#283593","#3949ab"], "IX"),
    "Via Nova":      () => makeBookCover("Via","Nova",       ["#4e342e","#5d4037","#6d4c41"], "VN"),
    "Litterae":      () => makeBookCover("Lit","terae",      ["#37474f","#455a64","#546e7a"], "LT"),
    "Nota Bene":     () => makeBookCover("Nota","Bene",      ["#1b5e20","#2e7d32","#388e3c"], "NB"),
    "Ecce Romani":   () => makeBookCover("Ecce","Romani",    ["#b71c1c","#c62828","#d32f2f"], "ER"),
    // ── Grieks VO ────────────────────────────────────────────────
    "Hellas":        () => makeBookCover("Hellas","",        ["#0d47a1","#1565c0","#1976d2"], "HE"),
    "Polis":         () => makeBookCover("Polis","Grieks",   ["#006064","#00838f","#0097a7"], "PO"),
    "Logos":         () => makeBookCover("Logos","Grieks",   ["#4a148c","#6a1b9a","#7b1fa2"], "LG"),
    "Syntaxis":      () => makeBookCover("Syn","taxis",      ["#263238","#37474f","#455a64"], "SX"),
    "Athenaze":      () => makeBookCover("Athe","naze",      ["#e65100","#ef6c00","#f57c00"], "AZ"),
    // ── Wiskunde A & B ────────────────────────────────────────────
    "Getal & Ruimte Havo A4":  () => makeBookCover("GR Havo","A4",  ["#1b5e20","#2e7d32","#388e3c"], "A4"),
    "Getal & Ruimte Havo A5":  () => makeBookCover("GR Havo","A5",  ["#1b5e20","#2e7d32","#388e3c"], "A5"),
    "Getal & Ruimte VWO A4":   () => makeBookCover("GR VWO","A4",   ["#004d40","#00695c","#00796b"], "A4"),
    "Getal & Ruimte VWO B4":   () => makeBookCover("GR VWO","B4",   ["#0d47a1","#1565c0","#1976d2"], "B4"),
    "Getal & Ruimte VWO B5":   () => makeBookCover("GR VWO","B5",   ["#0d47a1","#1565c0","#1976d2"], "B5"),
    "Getal & Ruimte VWO B6":   () => makeBookCover("GR VWO","B6",   ["#0d47a1","#1565c0","#1976d2"], "B6"),
    "Moderne Wiskunde Havo A4":() => makeBookCover("MW Havo","A4",  ["#311b92","#4527a0","#512da8"], "A4"),
    "Moderne Wiskunde Havo A5":() => makeBookCover("MW Havo","A5",  ["#311b92","#4527a0","#512da8"], "A5"),
    "Moderne Wiskunde VWO B4": () => makeBookCover("MW VWO","B4",   ["#4a148c","#6a1b9a","#7b1fa2"], "B4"),
    "Moderne Wiskunde VWO B5": () => makeBookCover("MW VWO","B5",   ["#4a148c","#6a1b9a","#7b1fa2"], "B5"),
    "KERN Wiskunde A Havo 4":  () => makeBookCover("KERN","A Havo 4",["#006064","#00838f","#0097a7"],"KA"),
    "KERN Wiskunde A VWO 4":   () => makeBookCover("KERN","A VWO 4", ["#006064","#00838f","#0097a7"],"KA"),
    "KERN Wiskunde B VWO 4":   () => makeBookCover("KERN","B VWO 4", ["#01579b","#0277bd","#0288d1"],"KB"),
    "KERN Wiskunde B VWO 5":   () => makeBookCover("KERN","B VWO 5", ["#01579b","#0277bd","#0288d1"],"KB"),
    "Wiskunde in Uitvoering A":() => makeBookCover("WiU","A",        ["#1b5e20","#2e7d32","#388e3c"], "WA"),
    "Wiskunde in Uitvoering B":() => makeBookCover("WiU","B",        ["#0d47a1","#1565c0","#1976d2"], "WB"),
    // ── Mens & Maatschappij ──────────────────────────────────────
    "Sprekend":      () => makeBookCover("Spre","kend",      ["#00695c","#00796b","#00897b"], "SP"),
    "Hier & Daar":   () => makeBookCover("Hier &","Daar",    ["#1565c0","#1976d2","#1e88e5"], "HD"),
    "De Geo M&M":    () => makeBookCover("De Geo","M&M",     ["#2e7d32","#388e3c","#43a047"], "GM"),
    "Humane Wetenschappen": () => makeBookCover("Humane","Wet.",["#4e342e","#5d4037","#6d4c41"],"HW"),
    "Memo M&M":      () => makeBookCover("Memo","M&M",       ["#37474f","#455a64","#546e7a"], "MM"),
    // ── Levensbeschouwing ─────────────────────────────────────────
    "Zingeving":     () => makeBookCover("Zin","geving",     ["#4a148c","#6a1b9a","#7b1fa2"], "ZG"),
    "Bezieling":     () => makeBookCover("Bezi","eling",     ["#880e4f","#ad1457","#c2185b"], "BZ"),
    "Reflectie":     () => makeBookCover("Re","flectie",     ["#006064","#00838f","#0097a7"], "RF"),
    "Weten & Bezinnen": () => makeBookCover("Weten &","Bezinnen",["#1a237e","#283593","#3949ab"],"WB"),
    "Levensvragen":  () => makeBookCover("Levens","vragen",  ["#311b92","#4527a0","#512da8"], "LV"),
    // ── MAW ──────────────────────────────────────────────────────
    "In de Samenleving Havo 4":() => makeBookCover("Samenl.","Havo 4",["#1a237e","#283593","#3949ab"],"SH"),
    "In de Samenleving VWO 4": () => makeBookCover("Samenl.","VWO 4", ["#0d47a1","#1565c0","#1976d2"],"SV"),
    "Samenlevingsleer Havo 5": () => makeBookCover("Samenl.","Havo 5",["#1b5e20","#2e7d32","#388e3c"],"SL"),
    "MAW voor jou Havo":       () => makeBookCover("MAW","Havo",      ["#e65100","#ef6c00","#f57c00"],"MH"),
    "MAW voor jou VWO":        () => makeBookCover("MAW","VWO",       ["#bf360c","#d84315","#e64a19"],"MV"),
    "Mens & Maatschappij MAW 4":() => makeBookCover("M&M","MAW 4",    ["#4a148c","#6a1b9a","#7b1fa2"],"MW"),
    "Samenleving Havo 5":      () => makeBookCover("Samen","leving 5", ["#004d40","#00695c","#00796b"],"S5"),
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
            {/* Basisschool / VO toggle — altijd zichtbaar */}
            <div style={{ display: "flex", gap: 8, marginBottom: 18 }}>
              {[
                { id: "po", label: "🎒 Basisschool", sub: "groep 1–8" },
                { id: "vo", label: "🎓 Voortgezet onderwijs", sub: "klas 1–6" },
              ].map(t => (
                <button key={t.id} onClick={() => { setSchoolType2(t.id); setCategory(""); setSelectedBook(null); }} style={{
                  flex: 1, padding: "10px 8px", borderRadius: 12, cursor: "pointer",
                  border: schoolType2 === t.id ? "2px solid #00d4ff" : "1px solid rgba(255,255,255,0.15)",
                  background: schoolType2 === t.id ? "rgba(0,212,255,0.12)" : "rgba(255,255,255,0.04)",
                  color: schoolType2 === t.id ? "#00d4ff" : "rgba(255,255,255,0.55)",
                  fontFamily: "'Fredoka', sans-serif", fontSize: 14, fontWeight: 700,
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                }}>
                  {t.label}
                  <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: 10, fontWeight: 400, opacity: 0.6 }}>{t.sub}</span>
                </button>
              ))}
            </div>

            {schoolType2 && (
              <>
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
              </>
            )}

            {!schoolType2 && (
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: 16 }}>
                Kies hierboven basisschool of voortgezet onderwijs
              </p>
            )}
          </div>
        )}

        {step === 2 && (
          <div style={{ animation: "slideUp 0.3s ease" }}>
            <h3 style={styles.stepTitle}>Kies je boek</h3>

            {TEXTBOOKS[category] && (
              <>
                {userSchoolType && TEXTBOOKS[category].some(b => schoolTypeMatchesBook(b.name, userSchoolType)) && (
                  <p style={{ fontSize: 12, color: "#8eaadb", fontWeight: 600, margin: "0 0 10px 2px" }}>
                    ✨ Boeken voor jouw niveau staan bovenaan
                  </p>
                )}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14, marginBottom: 16 }}>
                  {[...TEXTBOOKS[category]]
                    .sort((a, b) => {
                      const aMatch = schoolTypeMatchesBook(a.name, userSchoolType) ? 1 : 0;
                      const bMatch = schoolTypeMatchesBook(b.name, userSchoolType) ? 1 : 0;
                      if (aMatch !== bMatch) return bMatch - aMatch;
                      return a.name.localeCompare(b.name, "nl");
                    })
                    .map((book) => {
                      const coverPath = BOOK_COVERS[book.name] ? BOOK_COVERS[book.name]("") : null;
                      const isSelected = selectedBook?.id === book.id;
                      const isMatch = schoolTypeMatchesBook(book.name, userSchoolType);
                      const matchColor = { mavo: "#f59e0b", havo: "#3b82f6", vwo: "#8b5cf6", gym: "#ec4899" }[userSchoolType] || "#00d4ff";
                      return (
                        <button key={book.id} onClick={() => { SoundEngine.play("click"); setSelectedBook(book); setCustomBook(""); setShowCustomInput(false); if (book.defaultLevel) setLevel(book.defaultLevel); else if (!book.autoLevel) setLevel(initLevel || ""); setStep(3); }} style={{
                          background: "transparent", border: "none", padding: 0, cursor: "pointer",
                          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                        }}>
                          <div style={{
                            width: "100%", aspectRatio: "3/4", borderRadius: 12, overflow: "hidden",
                            border: isSelected ? "3px solid #00e676" : isMatch ? `2px solid ${matchColor}88` : "3px solid transparent",
                            boxShadow: isSelected ? "0 0 0 2px #00c85360, 0 4px 16px rgba(0,200,83,0.3)" : isMatch ? `0 2px 12px ${matchColor}44` : "0 2px 10px rgba(0,0,0,0.4)",
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
                            {!isSelected && isMatch && (
                              <div style={{ position: "absolute", top: 6, left: 6, background: matchColor, borderRadius: 6, padding: "2px 6px", fontSize: 10, fontWeight: 700, color: "#fff", fontFamily: "'Fredoka', sans-serif" }}>
                                Jouw niveau
                              </div>
                            )}
                          </div>
                          <span style={{ fontSize: 12, color: isSelected ? "#00e676" : isMatch ? matchColor : "#8eaadb", fontWeight: isSelected || isMatch ? 700 : 500, textAlign: "center", lineHeight: 1.3 }}>{book.name}</span>
                        </button>
                      );
                    })}
                </div>
              </>
            )}

            {/* Dropdown: alle bekende boeken op alfabet */}
            {ALL_KNOWN_BOOKS[category]?.length > 0 && (
              <div style={{ marginBottom: 14 }}>
                <p style={{ fontSize: 13, color: "#8eaadb", fontWeight: 600, margin: "0 0 8px 2px" }}>
                  Of zoek in alle bekende boeken:
                </p>
                <select
                  value={customBook && !selectedBook ? customBook : ""}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (!val) { setCustomBook(""); return; }
                    setSelectedBook(null);
                    setShowCustomInput(false);
                    setCustomBook(val);
                    const found = ALL_KNOWN_BOOKS[category]?.find(b => b.name === val);
                    if (found?.level) setLevel(found.level);
                  }}
                  style={selectStyle}
                >
                  <option value="">📚 Alle bekende boeken (alfabetisch)…</option>
                  {[...ALL_KNOWN_BOOKS[category]]
                    .sort((a, b) => (a.label || a.name).localeCompare(b.label || b.name, "nl"))
                    .map(b => (
                      <option key={b.name} value={b.name}>{b.label || b.name}</option>
                    ))
                  }
                </select>
              </div>
            )}

            {!showCustomInput ? (
              <button onClick={() => { setShowCustomInput(true); setSelectedBook(null); setCustomBook(""); }} style={{
                width: "100%", padding: "13px", borderRadius: 14, border: "2px dashed #2a3f5f",
                background: "transparent", color: "#8899aa", fontSize: 14, fontWeight: 600,
                cursor: "pointer", marginBottom: 16,
              }}>
                ✏️ Staat het er echt niet bij? Typ zelf
              </button>
            ) : (
              <div style={{ background: "#1e2d45", borderRadius: 16, padding: 16, marginBottom: 16, border: "2px solid #2a3f5f" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                  <p style={{ fontSize: 13, color: "#00e676", fontWeight: 700, margin: 0 }}>✏️ Typ je boek</p>
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
                  const count = titles.length > 0 ? titles.length : (selectedBook?.chapters || 12);
                  return Array.from({length: count}, (_, i) => i + 1).map(n => {
                    const title = titles[n - 1];
                    return <option key={n} value={n}>{title ? `Hoofdstuk ${n} – ${title}` : `Hoofdstuk ${n}`}</option>;
                  });
                })()}
              </select>

              {/* Paragraaf dropdown of vrij tekstveld */}
              {chapterNum && (
                <>
                  <label style={styles.settingLabel}>📄 Paragraaf</label>
                  {useParaFreeText ? (
                    <input
                      type="text"
                      placeholder="bv. §3.2 of 'Burgerrechten' (optioneel)"
                      value={paragraaf}
                      onChange={(e) => { SoundEngine.play("click"); setParagraaf(e.target.value); }}
                      style={{ ...selectStyle, cursor: "text" }}
                    />
                  ) : (
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
                  )}
                </>
              )}

              {/* Niveau - alleen grid tonen als er geen profiel-niveau bekend is */}
              {level ? (
                <div style={{ marginTop: 16, padding: 12, background: "#162033", borderRadius: 12, display: "flex", alignItems: "center", gap: 10 }}>
                  <span>🎓</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#69f0ae" }}>Niveau: {LEVELS.find(l => l.id === level)?.label}</span>
                  <span style={{ fontSize: 11, color: "#667788", marginLeft: "auto" }}>
                    {selectedBook?.autoLevel ? "automatisch op basis van editie" : initLevel ? "vanuit jouw profiel" : ""}
                  </span>
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

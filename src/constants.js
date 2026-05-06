// ─── Launch promo: alle PRO-functies gratis t/m 31 dec 2026 ──────
// Tijdelijk: we hebben nog geen Stripe-integratie en nog geen echte
// gebruikers, dus open alles zodat vroege testers volledig kunnen
// proberen. Zet LAUNCH_PROMO_END terug naar verleden of maak de
// helper altijd false om de promo te beëindigen.
export const LAUNCH_PROMO_END = new Date("2027-01-01T00:00:00");
export const isLaunchPromoActive = () => Date.now() < LAUNCH_PROMO_END.getTime();
export const LAUNCH_PROMO_SHORT = "🎉 Dit jaar gratis wegens lancering";
export const LAUNCH_PROMO_LONG = "Alle Pro-functies gratis t/m 31 december 2026 — geen betaling, gewoon proberen.";

// ─── Subjects & Levels ──────────────────────────────────────────
export const SUBJECTS = [
  { id: "rekenen", label: "Rekenen", icon: "🔢", color: "#00c853" },
  { id: "taal", label: "Taal", icon: "📝", color: "#00e676" },
  { id: "wiskunde", label: "Wiskunde", icon: "📐", color: "#00c853" },
  { id: "nederlands", label: "Nederlands", icon: "📖", color: "#00e676" },
  { id: "aardrijkskunde", label: "Aardrijkskunde", icon: "🌍", color: "#2bbd7e" },
  { id: "geschiedenis", label: "Geschiedenis", icon: "🏛️", color: "#69f0ae" },
  { id: "natuur", label: "Natuur & Techniek", icon: "🔬", color: "#6b9fd4" },
  { id: "biologie", label: "Biologie", icon: "🧬", color: "#00b84d" },
  { id: "natuurkunde", label: "Natuurkunde", icon: "⚛️", color: "#6b9fd4" },
  { id: "scheikunde", label: "Scheikunde", icon: "🧪", color: "#a0b8d8" },
  { id: "economie", label: "Economie", icon: "💶", color: "#f9a825" },
  { id: "beco", label: "Bedrijfseconomie", icon: "📈", color: "#e65100" },
  { id: "engels", label: "Engels", icon: "📕", color: "#a0b8d8" },
  { id: "duits", label: "Duits", icon: "📘", color: "#2bbd7e" },
  { id: "frans", label: "Frans", icon: "📗", color: "#00b84d" },
  { id: "maatschappijleer", label: "Maatschappijleer", icon: "🏛️", color: "#69f0ae" },
  { id: "nask",            label: "NaSk / Science",   icon: "🔭", color: "#6b9fd4" },
  { id: "spaans",          label: "Spaans",            icon: "📙", color: "#e65100" },
  { id: "grieks",          label: "Grieks",            icon: "🏺", color: "#a0b8d8" },
  { id: "latijn",          label: "Latijn",            icon: "📜", color: "#c8a96e" },
  { id: "wiskunde-a",      label: "Wiskunde A",        icon: "📊", color: "#00c853" },
  { id: "wiskunde-b",      label: "Wiskunde B",        icon: "📐", color: "#0072ff" },
  { id: "mens-maatschappij", label: "Mens & Maatschappij", icon: "🌐", color: "#69f0ae" },
  { id: "levensbeschouwing", label: "Levensbeschouwing",  icon: "🕊️", color: "#a0b8d8" },
  { id: "maw",             label: "MAW",               icon: "📊", color: "#f9a825" },
  // ── Basisschool speerpunten ───────────────────────────────────
  { id: "topografie",        label: "Topografie",        icon: "🗺️", color: "#2bbd7e" },
  { id: "spelling",          label: "Spelling",          icon: "🔡", color: "#00e676" },
  { id: "begrijpend-lezen",  label: "Begrijpend Lezen",  icon: "📖", color: "#69f0ae" },
  { id: "verkeer",           label: "Verkeer",           icon: "🚦", color: "#f9a825" },
  { id: "cito",              label: "Cito Oefenen",      icon: "🎯", color: "#ff6d00", citoMode: true },
];

export const LEVELS = [
  { id: "groep12", label: "Groep 1-2", desc: "Kleuters", icon: "🌱" },
  { id: "groep3",  label: "Groep 3-4", desc: "Onderbouw basisschool", icon: "📗" },
  { id: "groep5",  label: "Groep 5-6", desc: "Bovenbouw basis", icon: "🎒" },
  { id: "groep7",  label: "Groep 7-8", desc: "Bovenbouw verdieping", icon: "📚" },
  { id: "klas1",   label: "Klas 1-2",  desc: "Brugklas", icon: "🎓" },
  { id: "klas3",   label: "Klas 3-4",  desc: "Bovenbouw VO", icon: "🏆" },
  { id: "klas5",   label: "Klas 5",    desc: "HAVO eindexamen / VWO bovenbouw", icon: "🎯" },
  { id: "klas6",   label: "Klas 6",    desc: "VWO/Gymnasium eindexamen", icon: "🏛️" },
];

// Welke vakken zijn beschikbaar per niveau (op basis van officieel NL curriculum)
export const SUBJECT_FOR_LEVEL = {
  groep12: ["rekenen", "taal"],
  groep3:  ["rekenen", "taal", "natuur"],
  groep5:  ["rekenen", "taal", "aardrijkskunde", "geschiedenis", "natuur", "engels", "spelling", "begrijpend-lezen"],
  groep7:  ["rekenen", "taal", "aardrijkskunde", "geschiedenis", "natuur", "engels", "spelling", "begrijpend-lezen", "verkeer", "cito"],
  klas1:   ["wiskunde", "nederlands", "aardrijkskunde", "geschiedenis", "biologie", "nask", "natuurkunde", "scheikunde", "economie", "beco", "engels", "duits", "frans", "spaans", "latijn", "mens-maatschappij", "levensbeschouwing"],
  klas3:   ["wiskunde", "nederlands", "aardrijkskunde", "geschiedenis", "biologie", "nask", "natuurkunde", "scheikunde", "economie", "beco", "engels", "duits", "frans", "spaans", "latijn", "grieks", "maatschappijleer", "levensbeschouwing"],
  klas5:   ["wiskunde", "wiskunde-a", "wiskunde-b", "nederlands", "aardrijkskunde", "geschiedenis", "biologie", "natuurkunde", "scheikunde", "economie", "beco", "engels", "duits", "frans", "spaans", "latijn", "grieks", "maatschappijleer", "maw"],
  klas6:   ["wiskunde", "wiskunde-a", "wiskunde-b", "nederlands", "aardrijkskunde", "geschiedenis", "biologie", "natuurkunde", "scheikunde", "economie", "beco", "engels", "duits", "frans", "spaans", "latijn", "grieks", "maatschappijleer", "maw"],
};


// ─── Schoolboeken-data verplaatst naar src/data/textbooks.js ────────
export { TEXTBOOKS, CHAPTER_TITLES, PARAGRAPH_TITLES, TEXTBOOK_CATEGORIES_VO, TEXTBOOK_CATEGORIES_PO, ALL_KNOWN_BOOKS } from "./data/textbooks.js";




// ─── SAMPLE_QUESTIONS verplaatst naar src/data/sampleQuestions.js ────
// (P3b refactor 2026-05-06: 3838 regels uit constants.js getild,
//  maar import-API blijft hetzelfde via re-export hieronder.)
export { SAMPLE_QUESTIONS } from "./data/sampleQuestions.js";


// ─── Cito Oefenen — onderdelen ──────────────────────────────────
// Gebruikt door het aparte Cito-bakje in de app (citoMode: true in SUBJECTS)
export const CITO_ONDERDELEN = [
  { id: "rekenen",          label: "Rekenen & Wiskunde", icon: "🔢", color: "#00c853" },
  { id: "taal",             label: "Taal",               icon: "📝", color: "#00e676" },
  { id: "begrijpend-lezen", label: "Begrijpend Lezen",   icon: "📖", color: "#69f0ae" },
  { id: "wereldorientatie", label: "Wereld Oriëntatie",  icon: "🌍", color: "#2bbd7e" },
];

// ─── Vragen voor vrije onderwerpen ─────────────────────────────

// ─── Topic-data verplaatst naar src/data/topics.js ──────────────────
export { TOPIC_QUESTIONS, TEACHER_TOPIC_SUGGESTIONS, EIGEN_TOPIC_SUGGESTIONS } from "./data/topics.js";

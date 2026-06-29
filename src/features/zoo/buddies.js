// buddies — droom/fantasie-maatjes die met je poppetje meelopen door het park
// en je af en toe toespreken. Je kiest er één gratis aan het begin; de rest
// "verdien" je door te leren (aantal voltooide leer-stappen). Bezit + keuze
// staan in localStorage (companion-voorkeur → geen Supabase-migratie nodig).
//
// De praatjes zijn bewust ZONDER AI: sjablonen gevuld met echte feiten over de
// speler/park (naam, sterk/zwak vak, een pas geboren jong, parkgrootte). Zo is
// het gratis, werkt offline en verlaat er geen kinderdata het apparaat.

export const BUDDIES = [
  {
    id: "draakje",
    naam: "Vonk",
    emoji: "🐉",
    soort: "draakje",
    kleur: "#5bbf5a",
    kleur2: "#3f8f3a",
    accent: "#ffd23a",
    karakter: "enthousiast & moedig",
    verdien: 6,   // geleerde stappen nodig als dit NIET je gratis startkeuze is
    flavor: "Samen maken we er een vuurtje van! 🔥",
  },
  {
    id: "eenhoorn",
    naam: "Sterre",
    emoji: "🦄",
    soort: "eenhoorn",
    kleur: "#fdfbff",
    kleur2: "#ead7f5",
    accent: "#ff8fcf",
    karakter: "lief & aanmoedigend",
    verdien: 12,
    flavor: "Wat fijn dat je er bent! ✨",
  },
  {
    id: "uil",
    naam: "Pluis",
    emoji: "🦉",
    soort: "uil",
    kleur: "#b98b5e",
    kleur2: "#8a6440",
    accent: "#f2d49b",
    karakter: "wijs, geeft leertips",
    verdien: 20,
    flavor: "Wie elke dag een kwartier leert, wordt knap-uil-slim. 🦉",
  },
  {
    id: "bubbel",
    naam: "Bubbel",
    emoji: "🫧",
    soort: "bubbel",
    kleur: "#4ec9e0",
    kleur2: "#3aa6d8",
    accent: "#bff4ff",
    karakter: "speels & grappig",
    verdien: 30,
    flavor: "Stuiter je mee? 🫧",
  },
];

export const BUDDY_BY_ID = Object.fromEntries(BUDDIES.map((b) => [b.id, b]));

const LS_KEUZE = "lk_buddy";          // gekozen maatje-id
const LS_BEZIT = "lk_buddies";        // JSON-array van ontgrendelde id's
const LS_NAAM = "lk_buddy_naam";      // JSON-map { buddyId: zelfgekozen naam }

// Zelfgekozen naam van een maatje (per soort). Valt terug op de standaardnaam.
export function buddyNaam(id, fallback = "") {
  try {
    const m = JSON.parse(localStorage.getItem(LS_NAAM) || "{}");
    return ((m && m[id]) || "").trim() || fallback;
  } catch { return fallback; }
}
export function zetBuddyNaam(id, naam) {
  try {
    const m = JSON.parse(localStorage.getItem(LS_NAAM) || "{}");
    m[id] = (naam || "").replace(/\s+/g, " ").trim().slice(0, 16);
    localStorage.setItem(LS_NAAM, JSON.stringify(m));
  } catch { /* localStorage geblokkeerd → stil falen */ }
}

export function gekozenBuddy() {
  try { return localStorage.getItem(LS_KEUZE) || ""; } catch { return ""; }
}
export function bezitBuddies() {
  try { return JSON.parse(localStorage.getItem(LS_BEZIT) || "[]"); } catch { return []; }
}
export function heeftGekozen() {
  return !!gekozenBuddy();
}
// Kies een maatje: zet het als actief en voeg toe aan bezit.
export function kiesBuddy(id) {
  try {
    localStorage.setItem(LS_KEUZE, id);
    const bezit = new Set(bezitBuddies());
    bezit.add(id);
    localStorage.setItem(LS_BEZIT, JSON.stringify([...bezit]));
  } catch { /* localStorage kan geblokkeerd zijn → stil falen */ }
}
// Is dit maatje beschikbaar om te kiezen? (al in bezit, óf nog gratis startkeuze
// over, óf genoeg geleerd om 'm te verdienen)
export function buddyBeschikbaar(b, geleerdeStappen = 0) {
  const bezit = new Set(bezitBuddies());
  if (bezit.has(b.id)) return true;
  if (!heeftGekozen()) return true;          // de eerste keuze is gratis
  return geleerdeStappen >= (b.verdien || 0);
}

// Aantal unieke voltooide leer-stappen van de speler — de "munt" waarmee je
// nieuwe maatjes verdient. Leest learn_progress (1 rij per voltooide stap).
import supabase from "../../supabase";
export async function telGeleerdeStappen(playerName) {
  if (!playerName) return 0;
  try {
    const { data, error } = await supabase
      .from("learn_progress")
      .select("learn_path_id, step_idx")
      .eq("player_name", playerName);
    if (error || !Array.isArray(data)) return 0;
    return new Set(data.map((r) => `${r.learn_path_id}:${r.step_idx}`)).size;
  } catch {
    return 0;
  }
}

const low = (s) => (s || "").toLowerCase();
const cap = (s) => { const l = low(s); return l ? l[0].toUpperCase() + l.slice(1) : ""; };

// Eén praatje van het maatje, afgestemd op zijn karakter + echte feiten.
// `facts` = { naam, zwakVak, goedeScore:{vak,pct}, baby, honger, dier, veel }.
export function buddyPraatje(soort, facts) {
  const f = facts || {};
  const naam = (f.naam || "").trim();
  const hoi = naam ? naam : "vriend";
  const o = [];

  // Echte score → trots compliment (alle maatjes, eigen toon).
  if (f.goedeScore && f.goedeScore.vak) {
    const v = low(f.goedeScore.vak), p = f.goedeScore.pct;
    o.push({ e: "🎉", t: `${p}% goed bij ${v} — knap, ${hoi}!` });
  }
  if (f.baby) o.push({ e: "🐣", t: `Een baby${low(f.baby)}! Wat lief, hè ${hoi}?` });
  if (f.veel) o.push({ e: "🎡", t: `Wat een groot park heb jij, ${hoi}!` });

  if (soort === "draakje") {
    o.push(
      { e: "🔥", t: `Kom op ${hoi}, samen dat kwartier!` },
      { e: "💪", t: "Een vraag fout? Dat hoort erbij — wij geven niet op!" },
      { e: "🐉", t: f.zwakVak ? `Zullen we ${low(f.zwakVak)} verslaan vandaag?` : "Klaar voor een nieuw avontuur?" },
      { e: "⚡", t: `Jij bent sterker dan je denkt, ${hoi}!` },
    );
  } else if (soort === "eenhoorn") {
    o.push(
      { e: "✨", t: `Rustig aan ${hoi}, je doet het super.` },
      { e: "🌈", t: "Elke dag een beetje leren — zo groei je vanzelf." },
      { e: "💗", t: f.zwakVak ? `${cap(f.zwakVak)} is lastig? Stap voor stap lukt het.` : "Ik geloof in je!" },
      { e: "🦄", t: `Wat fijn om met jou rond te lopen, ${hoi}.` },
    );
  } else if (soort === "uil") {
    o.push(
      { e: "🦉", t: "Tip: lees de vraag rustig twee keer." },
      { e: "📚", t: "Wie een kwartier leert, onthoudt meer dan wie een uur jacht maakt." },
      { e: "🧠", t: f.zwakVak ? `${cap(f.zwakVak)} oefen je het best in kleine stukjes.` : "Even pauze? Daarna onthoud je beter." },
      { e: "💡", t: `Slimme keuze om hier te zijn, ${hoi}.` },
    );
  } else { // bubbel
    o.push(
      { e: "🫧", t: `Boing boing! Race je met me naar de draaimolen, ${hoi}?` },
      { e: "😄", t: "Weet je wat leuker is dan stuiteren? Een vraag goed hebben!" },
      { e: "🎈", t: f.zwakVak ? `${cap(f.zwakVak)}? Pfff, makkie als we het samen doen!` : "Zin in een spelletje leren?" },
      { e: "🤪", t: `Jij bent mijn favoriete mens, ${hoi}!` },
    );
  }
  if (f.honger) o.push({ e: "🌾", t: `${cap(f.honger)} heeft honger — geef je 'm wat?` });

  return o[Math.floor(Math.random() * o.length)];
}

// Blije reactie als je je maatje aait/aantikt — korter en uitbundiger.
export function buddyAai(soort, facts) {
  const f = facts || {};
  const naam = (f.naam || "").trim();
  const hoi = naam ? naam : "vriend";
  const m = {
    draakje: [{ e: "🔥", t: "Joehoe! Samen onverslaanbaar!" }, { e: "😄", t: `Aai! Jij bent de beste, ${hoi}!` }, { e: "💪", t: "Kom, we gaan knallen!" }],
    eenhoorn: [{ e: "💗", t: `Aaah, wat lief ${hoi}!` }, { e: "✨", t: "Knuffel! Ik vind jou zo lief." }, { e: "🌈", t: "Jij maakt mij blij!" }],
    uil: [{ e: "🦉", t: "Hoehoe! Fijn dat je er bent." }, { e: "📚", t: "Zullen we iets slims leren?" }, { e: "💡", t: `Wijze keuze, ${hoi}.` }],
    bubbel: [{ e: "🫧", t: "Boing! Hihi, dat kietelt!" }, { e: "🤪", t: `Nog een keer, ${hoi}!` }, { e: "🎈", t: "Wheee! Ik stuiter van geluk!" }],
  };
  const o = m[soort] || m.bubbel;
  return o[Math.floor(Math.random() * o.length)];
}

// Hoe groot is het maatje, op basis van het aantal geleerde stappen? Het maatje
// "groeit met je mee": klein als je begint, voller naarmate je meer leert.
export function buddyGrootte(geleerdeStappen = 0) {
  return 0.78 + Math.min(0.42, (geleerdeStappen || 0) * 0.011); // ~0.78 → 1.2
}

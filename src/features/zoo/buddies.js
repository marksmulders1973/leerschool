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
    verdien: 0,   // Vonk krijgt IEDEREEN altijd gratis (vlaggenschip-maatje); de
                  // andere maatjes verdien je door te leren (zie 'verdien' hieronder)
    flavor: "Samen maken we er een vuurtje van! 🔥",
    model: "/maatjes/vonk.glb",   // echt 3D-figuur (park + keuze-kaartje)
    vliegt: true,                  // vliegt rondjes om de speler i.p.v. meelopen
  },
  {
    id: "charley",
    naam: "Charley",
    emoji: "🐶",
    soort: "hond",
    kleur: "#7a5232",   // brindle (gestroomd) bruin
    kleur2: "#2c2118",  // donker boksermasker + hangoren
    accent: "#f1ece1",  // witte bles, befje en sokjes
    karakter: "trouw & vrolijk",
    verdien: 0,         // Charley = Mark's eigen hond → altijd kiesbaar voor iedereen
    flavor: "Woef! Samen leren is het allerleukst! 🐾",
    // Charley = het getekende bokserlijf (procedureel) zodat hij ECHT loopt met
    // bewegende pootjes + kwispelstaart + mond (Mark 1 jul: "charley ook laten
    // lopen"). Een foto-3D-model (glb) kan z'n poten niet bewegen. Het
    // fotomodel /maatjes/charley.glb blijft bestaan; zet `model` weer aan als je
    // liever het statische fotomodel wilt (dan loopt hij niet).
    // model: "/maatjes/charley.glb",
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
  {
    id: "ster",
    naam: "Twinkel",
    emoji: "🌟",
    soort: "ster",
    kleur: "#ffe14d",
    kleur2: "#ffd23a",
    accent: "#fff7c8",
    karakter: "dromerig & kalm",
    verdien: 42,
    flavor: "Ik fonkel als jij leert! 🌟",
  },
  {
    id: "fenix",
    naam: "Gloed",
    emoji: "🔥",
    soort: "fenix",
    kleur: "#ff7a3c",
    kleur2: "#e8451e",
    accent: "#ffd23a",
    karakter: "warm & vrolijk",
    verdien: 55,
    flavor: "Samen vliegen we hoog! 🔥",
  },
  {
    // 🐴 Paard-maatje (Mark 2 jul: "de een wil een paard").
    id: "paard",
    naam: "Fjord",
    emoji: "🐴",
    soort: "paard",
    kleur: "#b98b5e",
    kleur2: "#8a6440",
    accent: "#3a2a1a",
    karakter: "trouw & rustig",
    verdien: 8,
    flavor: "Klim maar op, we gaan ervoor! 🐴",
  },
  {
    // 🦫 Bever-maatje (Mark 2 jul: "of een bever") — past bij het bouwen!
    id: "bever",
    naam: "Bibber",
    emoji: "🦫",
    soort: "bever",
    kleur: "#8a5a3a",
    kleur2: "#6a4228",
    accent: "#e8c9a0",
    karakter: "bouwlustig & grappig",
    verdien: 16,
    flavor: "Bouwen? Daar ben ik góéd in! 🦫",
  },
  {
    // 🧱 Blok-maatje (Mark 2 jul, blok-wereld): past bij de Minecraft-look.
    // Gratis (verdien 0) zodat iedereen 'm meteen kan kiezen.
    id: "blokkie",
    naam: "Blokkie",
    emoji: "🟫",
    soort: "blokhond",
    kleur: "#c98d5f",
    kleur2: "#8a6440",
    accent: "#f2d49b",
    karakter: "blokkig & bouwlustig",
    verdien: 0,
    flavor: "Woef! Bouwen we samen een huis? 🧱",
  },
  {
    // 🤖 Robot-maatje (Mark 8 jul: "een robot, elf, trol etc").
    id: "robot",
    naam: "Bliep",
    emoji: "🤖",
    soort: "robot",
    kleur: "#8fa8c8",   // staalblauw-grijs
    kleur2: "#5a7396",  // donker paneel-blauw
    accent: "#4ec9e0",  // cyaan lampjes
    karakter: "slim & precies",
    verdien: 10,
    flavor: "Bliep-bloep! Samen rekenen we alles uit! 🤖",
  },
  {
    // 🧝 Elf-maatje (Mark 8 jul).
    id: "elf",
    naam: "Elfi",
    emoji: "🧝",
    soort: "elf",
    kleur: "#f2c9a0",   // zachte huid
    kleur2: "#3f9e5a",  // bosgroen mutsje/kraag
    accent: "#ffd23a",  // gouden belletje
    karakter: "vrolijk & vindingrijk",
    verdien: 24,
    flavor: "Elfjes weten overal een slimmigheidje voor! ✨",
  },
  {
    // 🧌 Trol-maatje (Mark 8 jul) — lief-sterke knuffeltrol, niet eng.
    id: "trol",
    naam: "Knoest",
    emoji: "🧌",
    soort: "trol",
    kleur: "#9aa86e",   // mosgroen
    kleur2: "#6e7a4a",  // donker mos
    accent: "#e8b56a",  // hoorntjes/haardot oker
    karakter: "sterk & zachtaardig",
    verdien: 36,
    flavor: "Ik til je zorgen op — hup, leren maar! 🧌",
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

// ── 💬 Buddy-weetjes (Mark 2 jul): het maatje leert je kennen ────────────────
// Eén vraagje per dag (roepnaam, leeftijd, lievelingseten/-kleur/-dier) en die
// weetjes komen terug in park-praatjes én in de "Vraag hulp"-tutor. ALLES
// blijft in localStorage op het eigen apparaat — privacyvriendelijk, geen
// adres/school/achternaam, niets naar de server behalve terloops in de
// AI-hulpvraag-context (net als de spelernaam nu al).
const LS_WEETJES = "lk_buddy_weetjes";
const LS_VRAAG_DATUM = "lk_buddy_vraag_datum";
export const BUDDY_VRAGEN = [
  { key: "naam", vraag: "Hoe mag ik je noemen?", placeholder: "je naam of bijnaam" },
  { key: "leeftijd", vraag: "Hoe oud ben je eigenlijk?", placeholder: "bijv. 10" },
  { key: "eten", vraag: "Wat vind jij het állerlekkerste eten?", placeholder: "bijv. pizza" },
  { key: "kleur", vraag: "Wat is je lievelingskleur?", placeholder: "bijv. blauw" },
  { key: "dier", vraag: "En je lievelingsdier?", placeholder: "bijv. wolf" },
  { key: "sport", vraag: "Welke sport of welk spel vind je het leukst?", placeholder: "bijv. voetbal" },
  { key: "vak", vraag: "Welk vak op school vind je het leukst?", placeholder: "bijv. rekenen" },
  { key: "hobby", vraag: "Wat doe je het liefst als je vrij bent?", placeholder: "bijv. tekenen" },
  { key: "droom", vraag: "Wat wil je later worden?", placeholder: "bijv. dierenarts" },
];
export function buddyWeetjes() {
  try { return JSON.parse(localStorage.getItem(LS_WEETJES) || "{}") || {}; } catch { return {}; }
}
export function volgendeBuddyVraag() {
  try { if (localStorage.getItem(LS_VRAAG_DATUM) === new Date().toDateString()) return null; } catch { /* */ }
  const w = buddyWeetjes();
  return BUDDY_VRAGEN.find((v) => !w[v.key]) || null;
}
export function beantwoordBuddyVraag(key, waarde) {
  try {
    const w = buddyWeetjes();
    const schoon = String(waarde || "").replace(/\s+/g, " ").trim().slice(0, 30);
    if (schoon) { w[key] = schoon; localStorage.setItem(LS_WEETJES, JSON.stringify(w)); }
    localStorage.setItem(LS_VRAAG_DATUM, new Date().toDateString());
  } catch { /* */ }
}
export function stelBuddyVraagUit() {
  try { localStorage.setItem(LS_VRAAG_DATUM, new Date().toDateString()); } catch { /* */ }
}
// "Vergeet alles": kind (of ouder) wist wat het maatje weet — inzage,
// aanpassen en wissen in één (de vragen beginnen daarna gewoon opnieuw).
export function wisBuddyWeetjes() {
  try { localStorage.removeItem(LS_WEETJES); localStorage.removeItem(LS_VRAAG_DATUM); } catch { /* */ }
}

// De buddy die de leerling als maatje koos — of Vonk (het vlaggenschip) als er
// nog niets gekozen is. Gebruikt door de "Vraag hulp aan <maatje>"-tutorknop +
// het tutor-venster, zodat het écht hún eigen maatje is dat meedenkt.
export function actieveBuddyPersona() {
  const id = gekozenBuddy() || "charley";   // Charley = standaard maatje (Mark 1 jul)
  const b = BUDDY_BY_ID[id] || BUDDY_BY_ID.charley;
  return {
    id,
    naam: buddyNaam(id, b.naam),
    emoji: b.emoji,
    kleur: b.kleur,
    kleur2: b.kleur2,
    accent: b.accent,
    soort: b.soort,
  };
}
export function bezitBuddies() {
  // Array.isArray-guard (review 17 jul): geldige-maar-verkeerde JSON (bv. "5")
  // passeerde de try/catch en liet `new Set(5)` verderop crashen in de render.
  try {
    const v = JSON.parse(localStorage.getItem(LS_BEZIT) || "[]");
    return Array.isArray(v) ? v : [];
  } catch { return []; }
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
  // Eerste keuze is gratis, maar alleen uit de start-maatjes — anders is de
  // hele verdien-ladder op dag 1 al omzeild (12-agent-review 2 jul).
  if (!heeftGekozen() && (b.verdien || 0) <= 8) return true;
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

  // 📍 Het maatje weet waar je staat (samenhang-plan 2 sep 2026): sta je bij
  // een leerobject, dan gaat het wolkje dáárover — met de ene vraag van die
  // plek — en niet over de kalender. Tikbaar (momentId) → uitleg-kaart.
  // Meestal (2 op 3) dit, soms nog een gewoon praatje zodat het geen papegaai wordt.
  if (f.nabij && f.nabij.titel && Math.random() < 0.67) {
    const n = f.nabij;
    const t = n.vraag ? `Kijk, ${n.titel.toLowerCase()}! ${n.vraag}` : `Kijk, ${n.titel.toLowerCase()}! Zal ik vertellen hoe dat werkt?`;
    return { e: n.emoji || "📍", t, momentId: n.id };
  }

  // Echte score → trots compliment (alle maatjes, eigen toon).
  if (f.goedeScore && f.goedeScore.vak) {
    const v = low(f.goedeScore.vak), p = f.goedeScore.pct;
    o.push({ e: "🎉", t: `${p}% goed bij ${v} — knap, ${hoi}!` });
  }
  if (f.baby) o.push({ e: "🐣", t: `Een baby${low(f.baby)}! Wat lief, hè ${hoi}?` });
  if (f.veel) o.push({ e: "🎡", t: `Wat een groot park heb jij, ${hoi}!` });

  // 💬 Weetjes die het kind zelf vertelde → het maatje kent je écht.
  const w = buddyWeetjes();
  const roep = w.naam || hoi;
  if (w.eten) o.push({ e: "😋", t: `Zeg ${roep}, is ${low(w.eten)} nog steeds het lekkerst?` }, { e: "🍽️", t: `Na het bouwen lekker ${low(w.eten)} eten?` });
  if (w.dier) o.push({ e: "🐾", t: `Zullen we een ${low(w.dier)} voor je park zoeken, ${roep}?` });
  if (w.kleur) o.push({ e: "🎨", t: `Bouw eens iets met ${low(w.kleur)} blokjes — jouw kleur!` });
  if (w.leeftijd) o.push({ e: "🌟", t: `Voor iemand van ${w.leeftijd} bouw jij echt supermooi, ${roep}!` });
  if (w.sport) o.push({ e: "⚽", t: `Eerst een kwartier leren, daarna ${low(w.sport)}?` });
  if (w.vak) o.push({ e: "📚", t: `Zullen we iets met ${low(w.vak)} doen? Daar ben jij goed in!` });
  if (w.hobby) o.push({ e: "🎨", t: `Na het leren lekker ${low(w.hobby)}, ${roep}?` });
  if (w.droom) o.push({ e: "💭", t: `Een echte ${low(w.droom)} leert elke dag een beetje — jij dus ook!` });

  if (soort === "draakje") {
    o.push(
      { e: "🔥", t: `Kom op ${hoi}, samen dat kwartier!` },
      { e: "💪", t: "Een vraag fout? Dat hoort erbij — wij geven niet op!" },
      { e: "🐉", t: f.zwakVak ? `Zullen we ${low(f.zwakVak)} verslaan vandaag?` : "Klaar voor een nieuw avontuur?" },
      { e: "⚡", t: `Jij bent sterker dan je denkt, ${hoi}!` },
    );
  } else if (soort === "hond") {
    o.push(
      { e: "🐶", t: `Woef! Kom op ${hoi}, samen dat kwartier!` },
      { e: "🦴", t: "Een foutje? Schud het af en probeer opnieuw — net als ik!" },
      { e: "🐾", t: f.zwakVak ? `Zullen we ${low(f.zwakVak)} samen aanpakken?` : "Gaan we wat leuks leren?" },
      { e: "❤️", t: `Ik blijf altijd bij je, ${hoi}.` },
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
  } else if (soort === "ster") {
    o.push(
      { e: "🌟", t: `Elke som die je leert, laat mij fonkelen, ${hoi}.` },
      { e: "✨", t: "Rustig ademen… en dan de vraag. Jij kan dit." },
      { e: "💫", t: f.zwakVak ? `${cap(f.zwakVak)}? Stapje voor stapje, als sterren tellen.` : "Wat wil je vandaag ontdekken?" },
      { e: "🌙", t: `Fijn om met jou te zweven, ${hoi}.` },
    );
  } else if (soort === "fenix") {
    o.push(
      { e: "🔥", t: `Voel je de energie, ${hoi}? Op naar dat kwartier!` },
      { e: "🪶", t: "Fout gemaakt? Een fenix staat altijd weer op. Wij ook!" },
      { e: "☀️", t: f.zwakVak ? `${cap(f.zwakVak)} verbranden we samen!` : "Klaar om te vliegen?" },
      { e: "✨", t: `Jij straalt vandaag, ${hoi}!` },
    );
  } else if (soort === "paard") {
    o.push(
      { e: "🐴", t: `Hinnik! Klim op mijn rug, ${hoi} — op naar dat kwartier!` },
      { e: "🐎", t: "Rustig draven, niet rennen — zo leer je het langst." },
      { e: "🌾", t: f.zwakVak ? `${cap(f.zwakVak)}? Wij galopperen er samen doorheen.` : "Zullen we een rondje door je park draven?" },
      { e: "🍎", t: `Ik loop overal met je mee, ${hoi}. Altijd.` },
    );
  } else if (soort === "bever") {
    o.push(
      { e: "🦫", t: `Knaag knaag! Zullen we samen iets bouwen, ${hoi}?` },
      { e: "🪵", t: "Een goede dam bouw je blokje voor blokje — leren ook!" },
      { e: "🔨", t: f.zwakVak ? `${cap(f.zwakVak)}? Daar timmeren we samen aan!` : "Ik regel het hout, bouw jij mee?" },
      { e: "💪", t: `Jij bent een echte bouwer, ${hoi}!` },
    );
  } else if (soort === "blokhond") {
    o.push(
      { e: "🧱", t: `Woef! Welk blokje bouwen we vandaag, ${hoi}?` },
      { e: "🐶", t: "Hak, bouw, leer — dat is ons plan!" },
      { e: "⛏️", t: f.zwakVak ? `${cap(f.zwakVak)} hakken we in kleine blokjes.` : "Race je mee naar de bouwplaats?" },
      { e: "🟩", t: `Blokje voor blokje worden wij slimmer, ${hoi}!` },
    );
  } else if (soort === "robot") {
    o.push(
      { e: "🤖", t: `Bliep-bloep! Systeem klaar voor een leerkwartier, ${hoi}!` },
      { e: "🔋", t: "Fout antwoord = data. Data = slimmer worden. Herberekenen maar!" },
      { e: "⚙️", t: f.zwakVak ? `${cap(f.zwakVak)}? Ik zet mijn reken-chip op maximaal!` : "Welke opdracht laden we vandaag?" },
      { e: "💡", t: `Mijn sensoren zeggen: ${hoi} kan dit. Betrouwbaarheid: 100%.` },
    );
  } else if (soort === "elf") {
    o.push(
      { e: "✨", t: `Psst ${hoi}, elfjes kennen een geheim: elke dag een beetje is toveren.` },
      { e: "🍀", t: "Een foutje? Daar strooi ik gewoon wat elfenstof overheen — opnieuw!" },
      { e: "🧝", t: f.zwakVak ? `${cap(f.zwakVak)}? Daar weet ik een slimmigheidje voor.` : "Zullen we iets slims verzinnen?" },
      { e: "🔔", t: `Mijn belletje rinkelt als jij iets goed hebt, ${hoi}!` },
    );
  } else if (soort === "trol") {
    o.push(
      { e: "🧌", t: `Hmpf! Knoest draagt de zware dingen — jij hoeft alleen te leren, ${hoi}.` },
      { e: "💪", t: "Moeilijke vraag? Die tillen we samen op. Eén, twee... hup!" },
      { e: "🪨", t: f.zwakVak ? `${cap(f.zwakVak)} is een rotsblok? Ik maak er kiezelsteentjes van.` : "Waar gaan we vandaag aan sjouwen?" },
      { e: "🌿", t: `Onder mijn brug is het gezellig, maar leren met jou is leuker, ${hoi}.` },
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

  return kiesZonderHerhaling(o);
}

// Zelfde praatje twee keer achter elkaar voelt robotachtig — onthoud het
// laatst getoonde en sla het over.
let _laatstePraatje = "";
function kiesZonderHerhaling(o) {
  const anders = o.filter((p) => p.t !== _laatstePraatje);
  const p = (anders.length ? anders : o)[Math.floor(Math.random() * (anders.length ? anders.length : o.length))];
  _laatstePraatje = p.t;
  return p;
}

// Blije reactie als je je maatje aait/aantikt — korter en uitbundiger.
export function buddyAai(soort, facts) {
  const f = facts || {};
  const naam = (f.naam || "").trim();
  const hoi = naam ? naam : "vriend";
  const m = {
    draakje: [{ e: "🔥", t: "Joehoe! Samen onverslaanbaar!" }, { e: "😄", t: `Aai! Jij bent de beste, ${hoi}!` }, { e: "💪", t: "Kom, we gaan knallen!" }],
    hond: [{ e: "🐶", t: "Woef woef! Wat fijn!" }, { e: "🐾", t: `Aai! Ik kwispel helemaal voor jou, ${hoi}!` }, { e: "🦴", t: "Nog een keer? Ik vind je zó lief!" }],
    eenhoorn: [{ e: "💗", t: `Aaah, wat lief ${hoi}!` }, { e: "✨", t: "Knuffel! Ik vind jou zo lief." }, { e: "🌈", t: "Jij maakt mij blij!" }],
    uil: [{ e: "🦉", t: "Hoehoe! Fijn dat je er bent." }, { e: "📚", t: "Zullen we iets slims leren?" }, { e: "💡", t: `Wijze keuze, ${hoi}.` }],
    bubbel: [{ e: "🫧", t: "Boing! Hihi, dat kietelt!" }, { e: "🤪", t: `Nog een keer, ${hoi}!` }, { e: "🎈", t: "Wheee! Ik stuiter van geluk!" }],
    ster: [{ e: "🌟", t: "Twinkel twinkel — dankjewel!" }, { e: "✨", t: `Aai! Ik fonkel voor jou, ${hoi}.` }, { e: "💫", t: "Wat lief van je!" }],
    fenix: [{ e: "🔥", t: "Whoosh! Ik gloei van blijdschap!" }, { e: "🪶", t: `Nog een aai, ${hoi}?` }, { e: "☀️", t: "Samen onverwoestbaar!" }],
    paard: [{ e: "🐴", t: "Brrr! Ik stamp blij met mijn hoef!" }, { e: "🐎", t: `Aai gerust nog eens, ${hoi}!` }, { e: "🍎", t: "Mmm, dat voelt fijn!" }],
    bever: [{ e: "🦫", t: "Hihi! Mijn staart klettert van blijdschap!" }, { e: "🪵", t: `Jij bent mijn bouwmaatje, ${hoi}!` }, { e: "🔨", t: "Klop klop — dat is mijn blije staart!" }],
    blokhond: [{ e: "🧱", t: "Woef! Mijn staart draait als een blokje rond!" }, { e: "🐶", t: `Aai! Jij bent top, ${hoi}!` }, { e: "⛏️", t: "Hihi, dat kietelt door mijn blokjes!" }],
    robot: [{ e: "🤖", t: "Bliep! Aai-sensor geactiveerd — blijheid 100%!" }, { e: "⚡", t: `Zzzt! Mijn lampjes knipperen voor jou, ${hoi}!` }, { e: "🔧", t: "Systeembericht: nog een aai gewenst." }],
    elf: [{ e: "✨", t: "Hihi! Er dwarrelt elfenstof van blijdschap!" }, { e: "🔔", t: `Mijn belletje rinkelt — dankjewel, ${hoi}!` }, { e: "🍀", t: "Dat brengt geluk, wist je dat?" }],
    trol: [{ e: "🧌", t: "Hmpf-hihi! Trollen blozen niet. Echt niet." }, { e: "💚", t: `Jij mag altijd over mijn brug, ${hoi}.` }, { e: "🪨", t: "Zo'n aai voelt als zonnetje op mijn mos!" }],
  };
  const o = m[soort] || m.bubbel;
  return o[Math.floor(Math.random() * o.length)];
}

// Hoe groot is het maatje, op basis van het aantal geleerde stappen? Het maatje
// "groeit met je mee": klein als je begint, voller naarmate je meer leert.
export function buddyGrootte(geleerdeStappen = 0) {
  return 0.78 + Math.min(0.42, (geleerdeStappen || 0) * 0.011); // ~0.78 → 1.2
}

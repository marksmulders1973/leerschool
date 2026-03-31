import { useState, useEffect, useCallback, useRef } from "react";

// ─── Sound Engine ────────────────────────────────────────────────
const SoundEngine = {
  ctx: null,
  getCtx() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  play(type) {
    try {
      const ctx = this.getCtx(), now = ctx.currentTime;
      const make = (freq, t, dur, vol = 0.12, wave = "sine") => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination); o.type = wave; o.frequency.value = freq;
        g.gain.setValueAtTime(vol, now + t); g.gain.exponentialRampToValueAtTime(0.001, now + t + dur);
        o.start(now + t); o.stop(now + t + dur + 0.01);
      };
      if (type === "correct") [523,659,784].forEach((f,i) => make(f, i*0.1, 0.3, 0.15));
      else if (type === "wrong") { const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination);o.type="sawtooth";o.frequency.setValueAtTime(300,now);o.frequency.exponentialRampToValueAtTime(150,now+0.3);g.gain.setValueAtTime(0.1,now);g.gain.exponentialRampToValueAtTime(0.001,now+0.3);o.start(now);o.stop(now+0.35); }
      else if (type === "celebrate") [523,587,659,698,784,880,988,1047].forEach((f,i) => make(f, i*0.08, 0.25));
      else if (type === "countdown") make(600, 0, 0.15, 0.08);
      else if (type === "click") make(1200, 0, 0.03, 0.06);
    } catch(e) {}
  }
};

// ─── AI Question Generator ──────────────────────────────────────
async function fetchAIQuestions(subject, level, count = 5, textbook = null, topic = null, signal = null) {
  const res = await fetch("/api/generate-questions", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject, level, count, textbook, topic }),
    signal,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Server fout (${res.status})`);
  }
  const data = await res.json();
  if (!data.questions || data.questions.length === 0) throw new Error("Geen vragen ontvangen van de AI");
  return data.questions;
}

// ─── Data ────────────────────────────────────────────────────────
const SUBJECTS = [
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
  { id: "engels", label: "Engels", icon: "🇬🇧", color: "#a0b8d8" },
  { id: "duits", label: "Duits", icon: "🇩🇪", color: "#2bbd7e" },
  { id: "frans", label: "Frans", icon: "🇫🇷", color: "#00b84d" },
  { id: "maatschappijleer", label: "Maatschappijleer", icon: "🏛️", color: "#69f0ae" },
];

const LEVELS = [
  { id: "groep12", label: "Groep 1-2", desc: "Kleuters", icon: "🌱" },
  { id: "groep3",  label: "Groep 3-4", desc: "Onderbouw basisschool", icon: "📗" },
  { id: "groep5",  label: "Groep 5-6", desc: "Bovenbouw basis", icon: "🎒" },
  { id: "groep7",  label: "Groep 7-8", desc: "Bovenbouw verdieping", icon: "📚" },
  { id: "klas1",   label: "Klas 1-2",  desc: "Brugklas", icon: "🎓" },
  { id: "klas3",   label: "Klas 3-4",  desc: "Bovenbouw VO", icon: "🏆" },
];

// Welke vakken zijn beschikbaar per niveau (op basis van officieel NL curriculum)
const SUBJECT_FOR_LEVEL = {
  groep12: ["rekenen", "taal"],
  groep3:  ["rekenen", "taal", "natuur"],
  groep5:  ["rekenen", "taal", "aardrijkskunde", "geschiedenis", "natuur", "engels"],
  groep7:  ["rekenen", "taal", "aardrijkskunde", "geschiedenis", "natuur", "engels"],
  klas1:   ["wiskunde", "nederlands", "aardrijkskunde", "geschiedenis", "biologie", "natuurkunde", "scheikunde", "economie", "engels", "duits", "frans"],
  klas3:   ["wiskunde", "nederlands", "aardrijkskunde", "geschiedenis", "biologie", "natuurkunde", "scheikunde", "economie", "engels", "duits", "frans", "maatschappijleer"],
};

const TEXTBOOKS = {
  // ── Voortgezet onderwijs ──────────────────────────────────────
  wiskunde: [
    { id: "gr-hv1-deel1",     name: "GR Havo/vwo 1 Deel 1",      icon: "📐", defaultLevel: "klas1" },
    { id: "gr-hv1-deel2",     name: "GR Havo/vwo 1 Deel 2",      icon: "📐", defaultLevel: "klas1" },
    { id: "gr-vwo1",          name: "GR VWO 1",                   icon: "📐", defaultLevel: "klas1" },
    { id: "gr-vmbo-havo1",    name: "GR VMBO-gt/Havo 1",         icon: "📐", defaultLevel: "klas1" },
    { id: "gr-hv2",           name: "GR Havo/vwo 2",             icon: "📐", defaultLevel: "klas1" },
    { id: "mw-hv1a",          name: "Moderne Wiskunde Havo/vwo 1a", icon: "📊", defaultLevel: "klas1" },
    { id: "mw-vwo1a",         name: "Moderne Wiskunde VWO 1a",   icon: "📊", defaultLevel: "klas1" },
    { id: "mw-havo-a1",       name: "Moderne Wiskunde Havo A1",  icon: "📊", defaultLevel: "klas1" },
    { id: "mw-vwo-b1",        name: "Moderne Wiskunde VWO B1",   icon: "📊", defaultLevel: "klas1" },
    { id: "kern-wis-hv1a",    name: "KERN Wiskunde Havo/vwo 1A", icon: "📏", defaultLevel: "klas1" },
    { id: "kern-wis-hv1b",    name: "KERN Wiskunde Havo/vwo 1B", icon: "📏", defaultLevel: "klas1" },
    { id: "kern-wis-hv2a",    name: "KERN Wiskunde Havo/vwo 2A", icon: "📏", defaultLevel: "klas1" },
    { id: "netwerk-wis",      name: "Netwerk Wiskunde",          icon: "🕸️", defaultLevel: "klas1" },
    { id: "mathplus",         name: "MathPlus VWO",              icon: "🔢", defaultLevel: "klas1" },
  ],
  nederlands: [
    { id: "nn-hv1",            name: "Nieuw Nederlands Havo/vwo 1",     icon: "📖", defaultLevel: "klas1" },
    { id: "nn-hv2",            name: "Nieuw Nederlands Havo/vwo 2",     icon: "📖", defaultLevel: "klas1" },
    { id: "nn-havo3",          name: "Nieuw Nederlands Havo 3",         icon: "📖", defaultLevel: "klas3" },
    { id: "nn-vwo4",           name: "Nieuw Nederlands VWO 4",          icon: "📖", defaultLevel: "klas3" },
    { id: "talent-hv1",        name: "Talent Havo/vwo 1",               icon: "🌟", defaultLevel: "klas1" },
    { id: "talent-max-hv2b",   name: "Talent MAX Havo/vwo 2B",          icon: "🌟", defaultLevel: "klas1" },
    { id: "talent-max-vwo2b",  name: "Talent MAX VWO/Gym 2B",           icon: "🌟", defaultLevel: "klas1" },
    { id: "talent-max-bb",     name: "Talent MAX Bovenbouw 4-6",        icon: "🌟", defaultLevel: "klas3" },
    { id: "op-niveau-hv1",     name: "Op Niveau Havo/vwo 1",            icon: "📚", defaultLevel: "klas1" },
    { id: "op-niveau-hv2",     name: "Op Niveau Havo/vwo 2",            icon: "📚", defaultLevel: "klas1" },
    { id: "op-niveau-havo45",  name: "Op Niveau Havo 4/5",              icon: "📚", defaultLevel: "klas3" },
    { id: "op-niveau-vwo56",   name: "Op Niveau VWO 5/6",               icon: "📚", defaultLevel: "klas3" },
    { id: "kern-nl-hv1",       name: "KERN Nederlands Havo/vwo 1",      icon: "🔤", defaultLevel: "klas1" },
    { id: "kern-nl-hv2",       name: "KERN Nederlands Havo/vwo 2",      icon: "🔤", defaultLevel: "klas1" },
    { id: "kern-nl-havo3",     name: "KERN Nederlands Havo 3",          icon: "🔤", defaultLevel: "klas3" },
    { id: "kern-nl-vwo3",      name: "KERN Nederlands VWO 3",           icon: "🔤", defaultLevel: "klas3" },
  ],
  engels: [
    { id: "stepping-stones",   name: "Stepping Stones",    icon: "🪨", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "all-right",         name: "All Right!",         icon: "✅", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "new-interface",     name: "New Interface",      icon: "🌐", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "kern-engels",       name: "Kern Engels",        icon: "🔑", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "upload",            name: "Upload",             icon: "⬆️", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "keys",              name: "Keys",               icon: "🗝️", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
  ],
  aardrijkskunde: [
    { id: "de-geo",            name: "De Geo",             icon: "🗺️", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "buitenland",        name: "BuiteNLand",         icon: "🌍", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
  ],
  geschiedenis: [
    { id: "feniks",            name: "Feniks",             icon: "🔥", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "sprekend-verleden", name: "Sprekend Verleden",  icon: "🗣️", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "geschiedeniswerkplaats", name: "Geschiedeniswerkplaats", icon: "⚒️", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "memo-geschiedenis", name: "MeMo",               icon: "📜", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "historica",         name: "Historica",          icon: "🏛️", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
  ],
  biologie: [
    { id: "bvj-havo-vwo-1",       name: "BvJ Havo/vwo Deel 1",     icon: "🧬", defaultLevel: "klas1" },
    { id: "bvj-havo-vwo-2",       name: "BvJ Havo/vwo Deel 2",     icon: "🧬", defaultLevel: "klas1" },
    { id: "bvj-havo-bovenbouw",   name: "BvJ Havo Bovenbouw",      icon: "🧬", defaultLevel: "klas3" },
    { id: "bvj-vwo-bovenbouw",    name: "BvJ VWO Bovenbouw",       icon: "🧬", defaultLevel: "klas3" },
    { id: "bvj-vmbo-onderbouw",   name: "BvJ VMBO Onderbouw",      icon: "🧬", defaultLevel: "klas1" },
    { id: "bvj-vmbo-bovenbouw",   name: "BvJ VMBO Bovenbouw",      icon: "🧬", defaultLevel: "klas3" },
    { id: "bvj-max-onderbouw",    name: "BvJ MAX Onderbouw",       icon: "🧬", defaultLevel: "klas1" },
    { id: "bvj-max-havo-vwo",     name: "BvJ MAX Havo/vwo",        icon: "🧬", defaultLevel: "klas1" },
    { id: "bvj-max-vmbo",         name: "BvJ MAX VMBO",            icon: "🧬", defaultLevel: "klas1" },
    { id: "bvj-max-vwo-bovenbouw",name: "BvJ MAX VWO Bovenbouw",   icon: "🧬", defaultLevel: "klas3" },
    { id: "nectar",               name: "Nectar",                  icon: "🌺", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "vivo",                 name: "Vivo",                    icon: "🦋", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "10voorbiologie",       name: "10 voor Biologie",        icon: "🔬", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
  ],
  nask: [
    { id: "overal-nask",       name: "Overal NaSk",        icon: "🔭", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "newton-nask",       name: "Newton NaSk",        icon: "🍎", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "nova-nask",         name: "Nova NaSk",          icon: "💫", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
  ],
  natuurkunde: [
    { id: "sys-natuurkunde",   name: "Systematische Natuurkunde", icon: "⚛️", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "pulsar",            name: "Pulsar",             icon: "💡", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "nova-nat",          name: "Nova Natuurkunde",   icon: "🌠", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "overal-nat",        name: "Overal Natuurkunde", icon: "🌡️", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
  ],
  scheikunde: [
    { id: "chemie-overal",     name: "Chemie Overal",      icon: "🧪", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
    { id: "nova-scheikunde",   name: "Nova Scheikunde",    icon: "🔮", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
    { id: "newton-scheikunde", name: "Newton Scheikunde",  icon: "⚗️", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
  ],
  economie: [
    { id: "pincode",           name: "Pincode",            icon: "💳", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
    { id: "economie-integraal",name: "Economie Integraal", icon: "💶", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
    { id: "kern-economie",     name: "Kern Economie",      icon: "📊", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
  ],
  duits: [
    { id: "na-klar",           name: "Na Klar!",           icon: "🇩🇪", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "trabitour",         name: "TrabiTour",          icon: "🚗", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "neue-kontakte",     name: "Neue Kontakte",      icon: "🤝", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
  ],
  frans: [
    { id: "grandes-lignes",    name: "Grandes Lignes",     icon: "🇫🇷", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "bravoure",          name: "Bravoure",           icon: "🥐", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
    { id: "daccord",           name: "D'accord",           icon: "🗼", autoLevel: true, deelToLevel: { 1: "klas1", 2: "klas1", 3: "klas3", 4: "klas3" } },
  ],
  maatschappijleer: [
    { id: "themas-maatschappijleer", name: "Thema's Maatschappijleer", icon: "👥", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
    { id: "memo-maatschappijleer",   name: "Memo Maatschappijleer",   icon: "📋", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
    { id: "de-basis",                name: "De Basis",                icon: "🏫", autoLevel: true, deelToLevel: { 1: "klas3", 2: "klas3" } },
  ],
  // ── Basisschool ──────────────────────────────────────────────
  rekenen: [
    { id: "pluspunt",          name: "Pluspunt",               icon: "➕", defaultLevel: "groep5" },
    { id: "wereld-in-getallen",name: "De Wereld in Getallen",  icon: "🔢", defaultLevel: "groep5" },
    { id: "gr-junior",         name: "Getal & Ruimte Junior",  icon: "📐", defaultLevel: "groep5" },
    { id: "wizwijs",           name: "Wizwijs",                icon: "🧙", defaultLevel: "groep5" },
    { id: "alles-telt",        name: "Alles Telt",             icon: "🧮", defaultLevel: "groep5" },
  ],
  taal: [
    { id: "taal-actief",       name: "Taal Actief",            icon: "📝", defaultLevel: "groep5" },
    { id: "staal",             name: "Staal",                  icon: "✍️", defaultLevel: "groep5" },
    { id: "nieuw-nl-junior",   name: "Nieuw Nederlands Junior",icon: "📖", defaultLevel: "groep5" },
    { id: "vll",               name: "Veilig Leren Lezen",     icon: "🔤", defaultLevel: "groep3" },
    { id: "lijn3",             name: "Lijn 3",                 icon: "📚", defaultLevel: "groep3" },
  ],
  natuur: [
    { id: "naut-meander-brandaan", name: "Naut / Meander / Brandaan", icon: "🏔️", defaultLevel: "groep5" },
    { id: "argus-clou",        name: "Argus Clou",             icon: "🔍", defaultLevel: "groep5" },
    { id: "blink",             name: "Blink Wereld",           icon: "🌐", defaultLevel: "groep5" },
  ],
};

// Hoofdstuktitels per boek (index 0 = Hoofdstuk 1)
const CHAPTER_TITLES = {
  // ── Biologie voor Jou (BvJ) — thema-indeling ─────────────────
  "bvj-havo-vwo-1": [
    "Planten en dieren",
    "Organen en cellen",
    "Ordening",
    "Stevigheid en beweging",
    "Waarneming, gedrag en regeling",
    "Voortplanting bij planten en dieren",
  ],
  "bvj-havo-vwo-2": [
    "Verbranding en ademhaling",
    "Voeding en vertering",
    "Bloedsomloop",
    "Erfelijkheid en evolutie",
    "Ecologie en duurzaamheid",
  ],
  "bvj-vmbo-onderbouw": [
    "Planten en dieren",
    "Organen en cellen",
    "Ordening",
    "Stevigheid en beweging",
    "Waarneming en regeling",
    "Voortplanting",
  ],
  "bvj-vmbo-bovenbouw": [
    "Verbranding en ademhaling",
    "Voeding en vertering",
    "Bloedsomloop",
    "Erfelijkheid",
    "Ecologie",
  ],
  "bvj-havo-bovenbouw": [
    "Erfelijkheid en genetica",
    "Evolutie",
    "Ecologie en duurzaamheid",
    "Gedrag",
    "Fysiologie",
  ],
  "bvj-vwo-bovenbouw": [
    "Erfelijkheid en genetica",
    "Evolutie",
    "Ecologie en duurzaamheid",
    "Gedrag",
    "Fysiologie en regulatie",
  ],
  "bvj-max-onderbouw": [
    "Planten en dieren",
    "Organen en cellen",
    "Ordening",
    "Stevigheid en beweging",
    "Waarneming, gedrag en regeling",
    "Voortplanting",
  ],
  "bvj-max-havo-vwo": [
    "Planten en dieren",
    "Organen en cellen",
    "Ordening",
    "Stevigheid en beweging",
    "Waarneming, gedrag en regeling",
    "Voortplanting bij planten en dieren",
    "Verbranding en ademhaling",
    "Voeding en vertering",
    "Bloedsomloop",
    "Erfelijkheid en evolutie",
  ],
  "bvj-max-vmbo": [
    "Planten en dieren",
    "Organen en cellen",
    "Ordening",
    "Beweging",
    "Waarneming en regeling",
    "Voortplanting",
  ],
  "bvj-max-vwo-bovenbouw": [
    "Erfelijkheid en genetica",
    "Evolutie",
    "Ecologie",
    "Gedrag",
    "Fysiologie en regulatie",
  ],
  "nectar": [
    "Cellen en weefsels",
    "Voeding en spijsvertering",
    "Transport",
    "Ademhaling",
    "Uitscheiding",
    "Regeling en gedrag",
    "Beweging",
    "Voortplanting",
    "Erfelijkheid",
    "Evolutie",
    "Ecologie",
  ],
  "vivo": [
    "Cellen en weefsels",
    "Organen en stelsels",
    "Voedsel en vertering",
    "Transport",
    "Ademhaling",
    "Zintuigen en hormonen",
    "Voortplanting",
    "Erfelijkheid",
    "Ecologie",
  ],
  // ── Biologie: 10voorbiologie ─────────────────────────────────
  "10voorbiologie": [
    "Cellen",
    "Weefsels en organen",
    "Spijsvertering",
    "Transport",
    "Ademhaling",
    "Uitscheiding",
    "Zintuigen",
    "Hormonen en regeling",
    "Voortplanting",
    "Erfelijkheid",
    "Evolutie",
    "Ecologie",
  ],
  // ── Geschiedenis: Feniks ─────────────────────────────────────
  "feniks": [
    "Tijd van jagers en boeren",
    "Tijd van Grieken en Romeinen",
    "Tijd van monniken en ridders",
    "Tijd van steden en staten",
    "Tijd van ontdekkers en hervormers",
    "Tijd van regenten en vorsten",
    "Tijd van pruiken en revoluties",
    "Tijd van burgers en stoommachines",
    "Tijd van de wereldoorlogen",
    "Tijd van televisie en computers",
  ],
  "sprekend-verleden": [
    "Prehistorie",
    "Grieken en Romeinen",
    "Middeleeuwen",
    "Nieuwe Tijd",
    "Revoluties",
    "Industrialisatie",
    "Wereldoorlogen",
    "Koude Oorlog",
    "Globalisering",
  ],
  "geschiedeniswerkplaats": [
    "Jagers en boeren",
    "Grieken en Romeinen",
    "Monniken en ridders",
    "Steden en staten",
    "Ontdekkers en hervormers",
    "Regenten en vorsten",
    "Pruiken en revoluties",
    "Burgers en stoommachines",
    "Wereldoorlogen",
    "Televisie en computers",
  ],
  "memo-geschiedenis": [
    "De oudste tijden",
    "Grieken en Romeinen",
    "De Middeleeuwen",
    "Reformatie en Renaissance",
    "De Gouden Eeuw",
    "Revoluties",
    "Industrialisatie",
    "De 20e eeuw",
    "Na 1945",
  ],
  "historica": [
    "Jagers en boeren",
    "Grieken en Romeinen",
    "Middeleeuwen",
    "Steden en staten",
    "Reformatie",
    "Gouden Eeuw",
    "Verlichting en revoluties",
    "Industriële revolutie",
    "Wereldoorlogen",
    "Hedendaagse tijd",
  ],
  // ── Aardrijkskunde: De Geo ───────────────────────────────────
  "de-geo": [
    "Kaarten en oriëntatie",
    "Klimaat en weer",
    "Water en rivieren",
    "Bevolking en migratie",
    "Steden en verstedelijking",
    "Landbouw",
    "Industrie en energie",
    "Verkeer en vervoer",
    "Nederland",
    "Europa",
    "Arme en rijke landen",
    "Duurzaamheid",
  ],
  "buitenland": [
    "Kaarten en coördinaten",
    "Klimaat",
    "Bevolking",
    "Steden",
    "Landbouw en voedsel",
    "Industrie",
    "Energie",
    "Duurzaamheid",
    "Nederland in de wereld",
    "Mondiale vraagstukken",
  ],
  // ── Getal en Ruimte ──────────────────────────────────────────
  "gr-hv1-deel1": [
    "Getallen",
    "Verhoudingen en procenten",
    "Meten en meetkunde",
    "Formules en grafieken",
    "Statistiek",
  ],
  "gr-hv1-deel2": [
    "Breuken",
    "Negatieve getallen",
    "Driehoeken en vierhoeken",
    "Functies en grafieken",
    "Kansen en combineren",
  ],
  "gr-hv2": [
    "Procenten en indexcijfers",
    "Lineaire verbanden",
    "Meetkunde",
    "Kwadratische verbanden",
    "Statistiek",
    "Stelsels vergelijkingen",
  ],
  // ── NaSk / Overal ────────────────────────────────────────────
  "overal-nask": [
    "Stoffen en materialen",
    "Kracht en beweging",
    "Warmte en energie",
    "Licht en zien",
    "Geluid",
    "Elektriciteit",
    "Scheikundige reacties",
    "Atomen en moleculen",
  ],
  "newton-nask": [
    "Stoffen",
    "Bewegen",
    "Krachten",
    "Energie",
    "Licht en geluid",
    "Elektriciteit",
    "Scheikundige veranderingen",
    "Atoommodel",
  ],
  "nova-nask": [
    "Onderzoeken",
    "Stoffen en materialen",
    "Krachten en beweging",
    "Energie en warmte",
    "Licht",
    "Geluid",
    "Elektriciteit",
    "Scheikunde",
  ],
  // ── Scheikunde ───────────────────────────────────────────────
  "chemie-overal": [
    "Stoffen en reacties",
    "Bouw van de stof",
    "Reactievergelijkingen",
    "Zuur, base en zout",
    "Metalen",
    "Koolstofverbindingen",
    "Reactiesnelheid en evenwicht",
    "Electrochemie",
  ],
  "nova-scheikunde": [
    "Stoffen en eigenschappen",
    "Atomen en moleculen",
    "Chemische reacties",
    "Zuren en basen",
    "Zouten",
    "Koolwaterstoffen",
    "Polymeren",
    "Reactiekinetiek",
  ],
  "newton-scheikunde": [
    "Stoffen",
    "Atoommodel",
    "Bindingen",
    "Reacties",
    "Zuren en basen",
    "Redoxreacties",
    "Organische chemie",
  ],
  // ── Economie ─────────────────────────────────────────────────
  "pincode": [
    "Wat is economie?",
    "Vraag en aanbod",
    "Geld en betalen",
    "Werken en inkomen",
    "Overheid en beleid",
    "Internationaal",
  ],
  "economie-integraal": [
    "Inleiding economie",
    "Markten en prijzen",
    "Productie en bedrijven",
    "Arbeid en lonen",
    "Overheidseconomie",
    "Geld en banken",
    "Internationale economie",
    "Groei en welvaart",
  ],
  "kern-economie": [
    "Schaarste en keuzes",
    "Vraag en aanbod",
    "Geld en banken",
    "Overheid",
    "Internationaal",
  ],
  // ── Maatschappijleer ─────────────────────────────────────────
  "themas-maatschappijleer": [
    "Democratie",
    "Rechtsstaat",
    "Pluriforme samenleving",
    "Verzorgingsstaat",
    "Grondrechten",
    "Parlementaire democratie",
    "Internationale betrekkingen",
  ],
  "memo-maatschappijleer": [
    "Staat en democratie",
    "Rechten en plichten",
    "Samenleving",
    "Economie en welvaart",
    "Internationaal beleid",
  ],
  "de-basis": [
    "Democratie",
    "Rechtsstaat",
    "Samenleving",
    "Overheid",
    "Internationaal",
  ],
  // ── Natuurkunde ──────────────────────────────────────────────
  "sys-natuurkunde": [
    "Krachten",
    "Beweging",
    "Energie en arbeid",
    "Warmte en temperatuur",
    "Trillingen en golven",
    "Elektriciteit",
    "Magnetisme en inductie",
    "Straling en atoomfysica",
  ],
  "pulsar": [
    "Krachten en beweging",
    "Energie",
    "Warmte",
    "Golven en geluid",
    "Licht en optica",
    "Elektriciteit",
    "Magnetisme",
    "Moderne fysica",
  ],
  "nova-nat": [
    "Krachten",
    "Beweging",
    "Energie",
    "Warmte",
    "Golven",
    "Elektriciteit",
    "Magnetisme",
    "Straling",
  ],
  "overal-nat": [
    "Krachten en beweging",
    "Energie en arbeid",
    "Warmte",
    "Golven en geluid",
    "Elektriciteit",
    "Magnetisme",
    "Licht",
    "Straling",
  ],
  // ── Wiskunde: Moderne Wiskunde ───────────────────────────────
  "mw-hv1a": [
    "Getallen en variabelen",
    "Verhoudingen en procenten",
    "Meten en meetkunde",
    "Formules en grafieken",
    "Statistiek en kansen",
  ],
  "mw-vwo1a": [
    "Getallen en variabelen",
    "Verhoudingen en procenten",
    "Meten en meetkunde",
    "Formules en grafieken",
    "Statistiek en kansen",
  ],
  "mw-havo-a1": [
    "Getallen",
    "Verhoudingen",
    "Algebra",
    "Meetkunde",
    "Statistiek",
  ],
  "mw-vwo-b1": [
    "Getallen",
    "Verhoudingen",
    "Algebra en functies",
    "Meetkunde",
    "Statistiek en kansen",
  ],
  // ── Wiskunde: KERN ───────────────────────────────────────────
  "kern-wis-hv1a": [
    "Getallen en bewerkingen",
    "Verhoudingen",
    "Meetkunde",
    "Algebra",
    "Statistiek",
  ],
  "kern-wis-hv1b": [
    "Breuken en procenten",
    "Algebra",
    "Meetkunde",
    "Functies en grafieken",
    "Kansen",
  ],
  "kern-wis-hv2a": [
    "Lineaire verbanden",
    "Kwadratische verbanden",
    "Meetkunde",
    "Statistiek",
    "Stelsels",
  ],
  "netwerk-wis": [
    "Getallen",
    "Verhoudingen",
    "Meetkunde",
    "Verbanden en grafieken",
    "Statistiek en kansen",
  ],
  "mathplus": [
    "Analyse",
    "Algebra",
    "Meetkunde",
    "Statistiek en kansen",
    "Differentiëren",
  ],
  // ── Basisschool: Rekenen ─────────────────────────────────────
  "pluspunt": [
    "Tellen en getallen",
    "Optellen en aftrekken",
    "Vermenigvuldigen",
    "Delen",
    "Breuken",
    "Meten en tijd",
    "Meetkunde",
    "Statistiek",
  ],
  "wereld-in-getallen": [
    "Tellen en getallen",
    "Optellen en aftrekken",
    "Vermenigvuldigen",
    "Delen",
    "Breuken en kommagetallen",
    "Meten en tijd",
    "Meetkunde",
    "Statistiek",
  ],
  "gr-junior": [
    "Getallen",
    "Optellen en aftrekken",
    "Vermenigvuldigen",
    "Delen",
    "Breuken",
    "Meten",
    "Meetkunde",
  ],
  "wizwijs": [
    "Getallen",
    "Optellen en aftrekken",
    "Vermenigvuldigen en delen",
    "Breuken",
    "Meten en tijd",
    "Meetkunde",
  ],
  "alles-telt": [
    "Getallen",
    "Optellen en aftrekken",
    "Vermenigvuldigen",
    "Delen",
    "Meten en tijd",
    "Meetkunde",
    "Statistiek",
  ],
  // ── Basisschool: Taal ────────────────────────────────────────
  "taal-actief": [
    "Luisteren en spreken",
    "Lezen",
    "Schrijven",
    "Spelling",
    "Woordenschat",
    "Taalbeschouwing",
  ],
  "staal": [
    "Luisteren en spreken",
    "Lezen",
    "Schrijven",
    "Spelling",
    "Woordenschat",
    "Grammatica",
  ],
  "nieuw-nl-junior": [
    "Luisteren",
    "Spreken",
    "Lezen",
    "Schrijven",
    "Spelling",
    "Woordenschat",
  ],
  "vll": [
    "Letters en klanken",
    "Woorden lezen",
    "Zinnen lezen",
    "Teksten lezen",
    "Schrijven",
    "Spelling",
  ],
  "lijn3": [
    "Letters en klanken",
    "Woorden",
    "Zinnen",
    "Teksten",
    "Schrijven",
  ],
  // ── Basisschool: Natuur & Wereld ─────────────────────────────
  "naut-meander-brandaan": [
    "Het menselijk lichaam",
    "Planten en dieren",
    "Natuur en milieu",
    "Weer en seizoenen",
    "Aarde en ruimte",
    "Techniek",
    "Nederland en de wereld",
  ],
  "argus-clou": [
    "Het menselijk lichaam",
    "Planten",
    "Dieren",
    "Natuur en milieu",
    "Weer en klimaat",
    "Aarde en ruimte",
    "Techniek en energie",
  ],
  "blink": [
    "Het menselijk lichaam",
    "Planten en dieren",
    "Natuur en duurzaamheid",
    "Klimaat en weer",
    "Aarde en ruimte",
    "Techniek",
    "Nederland en de wereld",
  ],
};

// Paragraaftitels per boek per hoofdstuk (index 0 = §X.1)
const PARAGRAPH_TITLES = {
  // ── Biologie voor Jou Havo/vwo Deel 1 ───────────────────────
  "bvj-havo-vwo-1": {
    1: ["Levend, dood en levenloos", "Organismen", "Groei en ontwikkeling", "Metamorfose", "Aanpassing aan de omgeving"],
    2: ["Organen benoemen", "Van orgaan naar cel", "Cellen en celonderdelen", "Celwand en celmembraan", "Celdeling"],
    3: ["Indelen en benoemen", "Virussen en bacteriën", "Protisten en schimmels", "Planten", "Dieren zonder ruggengraat", "Dieren met ruggengraat", "Determineren"],
    4: ["Het skelet van de mens", "De bouw van botten", "Beenverbindingen", "Spieren", "Bewegen", "Steun bij planten en dieren"],
    5: ["Zintuigen", "Het zenuwstelsel", "Reflexen en gedrag", "Hormonen", "Regeling"],
    6: ["Bloemen en bestuiving", "Zaad en vrucht", "Ongeslachtelijke voortplanting bij planten", "Geslachtelijke voortplanting bij dieren", "Ontwikkeling van het ei", "Zorg voor nakomelingen"],
  },
  // ── Biologie voor Jou Havo/vwo Deel 2 ───────────────────────
  "bvj-havo-vwo-2": {
    1: ["Verbranding", "Ademhalen", "Longademhaling", "Gasuitwisseling in de longen", "Celademhaling"],
    2: ["Voedingsstoffen", "Vertering in de mond en maag", "Vertering in de dunne darm", "Opname en transport", "Het grote en kleine darmkanaal"],
    3: ["Bloed en bloedcellen", "Het hart", "Bloedvaten", "De bloedsomloop", "Lymfe en afweer"],
    4: ["Erfelijkheid en DNA", "Van DNA naar eiwit", "Genen en allelen", "Overerving", "Mutaties", "Evolutie en natuurlijke selectie"],
    5: ["Ecosystemen", "Voedselrelaties", "Kringlopen", "Populaties", "Milieuproblemen en duurzaamheid"],
  },
  // ── Biologie voor Jou VMBO onderbouw ────────────────────────
  "bvj-vmbo-onderbouw": {
    1: ["Levend, dood en levenloos", "Organismen", "Groei en ontwikkeling", "Aanpassing"],
    2: ["Organen", "Cellen", "Celonderdelen", "Celdeling"],
    3: ["Indelen", "Bacteriën en virussen", "Schimmels", "Planten", "Dieren"],
    4: ["Het skelet", "Botten en gewrichten", "Spieren", "Bewegen"],
    5: ["Zintuigen", "Zenuwstelsel", "Hormonen"],
    6: ["Bloemen", "Bestuiving en zaad", "Voortplanting bij dieren"],
  },
  // ── Biologie voor Jou VMBO bovenbouw ────────────────────────
  "bvj-vmbo-bovenbouw": {
    1: ["Verbranding", "Ademhaling", "Longademhaling"],
    2: ["Voedingsstoffen", "Vertering", "Opname"],
    3: ["Bloed en bloedcellen", "Het hart", "Bloedvaten", "Bloedsomloop"],
    4: ["Erfelijkheid", "Genen", "Overerving"],
    5: ["Ecosystemen", "Voedselketens", "Milieu"],
  },
  // ── Nectar ───────────────────────────────────────────────────
  "nectar": {
    1: ["Cellen", "Celonderdelen", "Weefsels", "Organen"],
    2: ["Voedingsstoffen", "Spijsverteringskanaal", "Vertering", "Opname"],
    3: ["Bloed", "Het hart", "Bloedvaten", "Bloedsomloop", "Lymfe"],
    4: ["Ademhaling", "Longen", "Gasuitwisseling", "Celademhaling"],
    5: ["Nieren", "Urine", "Uitscheiding"],
    6: ["Zintuigen", "Zenuwstelsel", "Hormonen", "Gedrag"],
    7: ["Skelet", "Spieren", "Bewegen"],
    8: ["Voortplanting", "Ontwikkeling"],
    9: ["DNA en genen", "Overerving", "Mutaties"],
    10: ["Evolutie", "Selectie", "Aanpassing"],
    11: ["Ecosystemen", "Voedselketens", "Kringlopen", "Milieu"],
  },
  // ── De Geo ───────────────────────────────────────────────────
  "de-geo": {
    1: ["Kaarten lezen", "Coördinaten", "Schaal en afstand", "Hoogtelijnen"],
    2: ["Klimaatfactoren", "Klimaatzones", "Neerslag en wind", "Weer"],
    3: ["De watercyclus", "Rivieren", "Overstromingen", "Kustvormen"],
    4: ["Wereldbevolking", "Bevolkingsgroei", "Migratie", "Vergrijzing"],
    5: ["Verstedelijking", "Stadsstructuur", "Problemen in steden", "Slums"],
    6: ["Landbouwsystemen", "Voedselproductie", "Landbouw en milieu"],
    7: ["Energie", "Fossiele brandstoffen", "Duurzame energie", "Industrie"],
    8: ["Verkeer en vervoer", "Globalisering", "Havens en luchthavens"],
    9: ["Nederland: landschap", "Nederland: bevolking", "Nederland: economie"],
    10: ["Europa: landen en regio's", "EU", "Europese economie"],
    11: ["Arme en rijke landen", "Ontwikkelingshulp"],
    12: ["Klimaatverandering", "Duurzame ontwikkeling"],
  },
  // ── Feniks (Geschiedenis) ────────────────────────────────────
  "feniks": {
    1: ["De eerste mensen", "Jagers en verzamelaars", "De landbouwrevolutie", "Eerste beschavingen"],
    2: ["Het oude Griekenland", "De Griekse democratie", "Alexander de Grote", "Het Romeinse Rijk", "Romeins bestuur", "Val van Rome"],
    3: ["Het feodale stelsel", "De kerk en het geloof", "Kruistochten", "Kloosters en wetenschap"],
    4: ["Steden en handel", "De zwarte dood", "Opkomst van staten", "Honderdjarige Oorlog"],
    5: ["Humanisme en Renaissance", "De boekdrukkunst", "Reformatie", "De ontdekkingsreizen"],
    6: ["De Republiek der Zeven Provinciën", "De VOC", "De Gouden Eeuw", "Absolutisme in Europa"],
    7: ["De Verlichting", "De Amerikaanse revolutie", "De Franse Revolutie", "Napoleon"],
    8: ["Industrialisatie", "Socialisme en kapitalisme", "Kolonialisme", "Nationalisme"],
    9: ["Eerste Wereldoorlog", "Russische Revolutie", "De jaren 1920-1930", "Tweede Wereldoorlog", "Holocaust"],
    10: ["De Koude Oorlog", "Dekolonisatie", "Welvaartsstaat", "Globalisering", "Hedendaagse conflicten"],
  },
  // ── NaSk: Overal ─────────────────────────────────────────────
  "overal-nask": {
    1: ["Eigenschappen van stoffen", "Mengsels", "Oplossingen", "Scheiden van stoffen"],
    2: ["Kracht en massa", "Snelheid", "Wrijving", "Valbeweging"],
    3: ["Zwaartekracht", "Druk", "Hefbomen", "Drijven en zinken"],
    4: ["Temperatuur en warmte", "Warmteoverdracht", "Energieomzetting"],
    5: ["Licht en schaduw", "Spiegels", "Lenzen en zien"],
    6: ["Geluidsgolven", "Toonhoogte en volume", "Geluid en gezondheid"],
    7: ["Stroomkringen", "Spanning en stroomsterkte", "Schakelingen"],
    8: ["Chemische reacties", "Verbranding", "Roest en corrosie"],
  },
  // ── Getal en Ruimte Havo/vwo 1 Deel 1 ───────────────────────
  "gr-hv1-deel1": {
    1: ["Gehele getallen", "Rekenen met negatieve getallen", "Machten", "Volgorde van bewerkingen"],
    2: ["Breuken", "Procenten", "Verhoudingen", "Schaal"],
    3: ["Omtrek en oppervlakte", "Inhoud", "Pythagoras", "Coördinaten"],
    4: ["Variabelen en formules", "Grafieken lezen", "Grafieken tekenen", "Lineaire formules"],
    5: ["Gegevens verzamelen", "Gemiddelde en mediaan", "Diagrammen", "Kansen"],
  },
  // ── Getal en Ruimte Havo/vwo 1 Deel 2 ───────────────────────
  "gr-hv1-deel2": {
    1: ["Breuken optellen en aftrekken", "Breuken vermenigvuldigen", "Breuken en vergelijkingen"],
    2: ["Negatieve getallen", "Bewerkingen met negatieve getallen"],
    3: ["Driehoeken", "Vierhoeken", "Symmetrie", "Oppervlakte en omtrek"],
    4: ["Functies", "Lineaire functies", "Grafieken", "Snijpunten"],
    5: ["Kansen berekenen", "Boomdiagrammen", "Combinaties"],
  },
  // ── Systematische Natuurkunde ────────────────────────────────
  "sys-natuurkunde": {
    1: ["Kracht en massa", "Gewicht en zwaartekracht", "Krachten samenvoegen", "Evenwicht", "Druk"],
    2: ["Snelheid", "Gemiddelde snelheid", "Versnelling", "Eenparig versnelde beweging", "Vrije val"],
    3: ["Arbeid", "Kinetische energie", "Potentiële energie", "Behoud van energie", "Vermogen"],
    4: ["Temperatuur en warmte", "Soortelijke warmte", "Smelt- en verdampingswarmte", "Warmtegeleiding en convectie", "Stralingsuitwisseling"],
    5: ["Trillingen", "Golven", "Geluid en toonhoogte", "Licht als golf", "Elektromagnetisch spectrum"],
    6: ["Elektrische lading", "Spanning", "Stroomsterkte", "Weerstand (wet van Ohm)", "Serie- en parallelschakeling", "Elektrisch vermogen"],
    7: ["Magneten", "Magnetisch veld", "Kracht op stroomdraad", "Elektromagnetische inductie", "Transformator"],
    8: ["Atoommodel", "Radioactiviteit", "Kernreacties", "Straling en gezondheid"],
  },
  // ── Pulsar, Nova Nat, Overal Nat (_default per hoofdstuk) ───
  "pulsar": {
    _default: ["Begrippen en theorie", "Formules en berekeningen", "Toepassingen", "Opgaven"],
  },
  "nova-nat": {
    _default: ["Introductie en begrippen", "Formules en wetten", "Toepassingen en experimenten", "Opgaven"],
  },
  "overal-nat": {
    _default: ["Begrippen", "Formules en berekeningen", "Experimenten", "Oefeningen"],
  },
  // ── Wiskunde (_default per hoofdstuk) ────────────────────────
  "mw-hv1a":       { _default: ["Begrippen en definitie", "Rekenregels", "Toepassingen", "Gemengde opgaven"] },
  "mw-vwo1a":      { _default: ["Begrippen en definitie", "Rekenregels", "Toepassingen", "Gemengde opgaven"] },
  "mw-havo-a1":    { _default: ["Theorie", "Voorbeelden", "Oefeningen", "Extra uitdaging"] },
  "mw-vwo-b1":     { _default: ["Theorie", "Voorbeelden", "Oefeningen", "Extra uitdaging"] },
  "kern-wis-hv1a": { _default: ["Theorie", "Oefeningen", "Toepassingen", "Herhaling"] },
  "kern-wis-hv1b": { _default: ["Theorie", "Oefeningen", "Toepassingen", "Herhaling"] },
  "kern-wis-hv2a": { _default: ["Theorie", "Oefeningen", "Toepassingen", "Verdieping"] },
  "netwerk-wis":   { _default: ["Oriëntatie", "Theorie", "Oefeningen", "Verrijking"] },
  "mathplus":      { _default: ["Theorie en begrippen", "Standaardmethoden", "Toepassingen", "Bewijzen"] },
  "gr-hv2": {
    _default: ["Begrippen", "Rekenregels", "Toepassingen", "Gemengde opgaven"],
  },
  // ── Economie ─────────────────────────────────────────────────
  "pincode": {
    1: ["Schaarste", "Keuzes maken", "Kosten en baten", "Productiefactoren"],
    2: ["Vraag", "Aanbod", "Marktevenwicht", "Overheid en de markt"],
    3: ["Functies van geld", "Sparen en lenen", "Rente", "Betaalfuncties"],
    4: ["Arbeidsmarkt", "Loon en salaris", "Uitkeringen", "Werkloosheid"],
    5: ["Rol van de overheid", "Belastingen", "Sociale zekerheid", "Overheidsbeleid"],
    6: ["Internationale handel", "Wisselkoersen", "Europese Unie", "Globalisering"],
  },
  "economie-integraal": {
    1: ["Schaarste en keuzes", "Productiefactoren", "Ruil en geld", "Economische sectoren"],
    2: ["Vraag", "Aanbod", "Marktevenwicht", "Prijselasticiteit"],
    3: ["Productiekosten", "Omzet en winst", "Kostensoorten", "Break-even analyse"],
    4: ["Arbeidsmarkt", "Lonen en CAO", "Werkgelegenheid", "Inflatie en loonkosten"],
    5: ["Belastingen", "Overheidsuitgaven", "Begrotingstekort", "Economische politiek"],
    6: ["Geld en betaalfuncties", "Centrale bank", "Krediet en rente", "Inflatie"],
    7: ["Internationale handel", "Comparatieve voordelen", "Wisselkoersen", "Betalingsbalans"],
    8: ["Economische groei", "Conjunctuurcycli", "Welvaart en welzijn", "Duurzame ontwikkeling"],
  },
  "kern-economie": {
    _default: ["Begrippen", "Theorie", "Toepassingen", "Opgaven"],
  },
  // ── Maatschappijleer ─────────────────────────────────────────
  "themas-maatschappijleer": {
    1: ["Vormen van democratie", "Verkiezingen", "Politieke partijen", "Coalitievorming"],
    2: ["Rechtsstatelijke beginselen", "Grondwet en grondrechten", "Strafrecht", "Burgerlijk recht"],
    3: ["Sociale groepen", "Cultuur en identiteit", "Discriminatie", "Multiculturele samenleving"],
    4: ["Sociale zekerheid", "Zorg en welzijn", "Onderwijs", "Hervorming verzorgingsstaat"],
    5: ["Klassieke grondrechten", "Sociale grondrechten", "Internationale mensenrechten"],
    6: ["Het parlement", "De regering", "Wetgeving", "Democratische controle"],
    7: ["Buitenlandse politiek", "Internationale organisaties", "Conflicten en veiligheid"],
  },
  "memo-maatschappijleer": {
    _default: ["Theorie", "Begrippen", "Casussen", "Toetsvragen"],
  },
  "de-basis": {
    _default: ["Begrippen", "Theorie", "Toepassingen", "Vragen"],
  },
  // ── Scheikunde ───────────────────────────────────────────────
  "chemie-overal": {
    1: ["Zuivere stoffen en mengsels", "Eigenschappen van stoffen", "Dichtheid", "Oplossen en kristalliseren"],
    2: ["Atoommodel van Bohr", "Atoommassa", "Moleculen", "Ionen"],
    3: ["Chemische reacties", "Reactievergelijkingen", "Stoichiometrie", "Mol en molmassa"],
    4: ["Zuurgraad en pH", "Zuren en basen", "Neutralisatie", "Buffers"],
    5: ["Metalen en legeringen", "Reductie en oxidatie", "Corrosie", "Elektrolyse"],
    6: ["Koolwaterstoffen", "Alkanen en alkenen", "Functionele groepen", "Plastics"],
    7: ["Reactiesnelheid", "Evenwichtsreacties", "Le Chatelier", "Katalyse"],
    8: ["Galvanische cel", "Elektrolyse", "Accumulatoren", "Brandstofcellen"],
  },
  "nova-scheikunde": {
    _default: ["Begrippen en theorie", "Formules en reacties", "Berekeningen", "Experimenten"],
  },
  "newton-scheikunde": {
    _default: ["Begrippen", "Theorie", "Oefeningen", "Practicum"],
  },
  // ── Engels ───────────────────────────────────────────────────
  "stepping-stones": {
    _default: ["Tekst en begrip", "Woordenschat", "Grammatica", "Luisteren", "Spreken", "Schrijven", "Examentraining"],
  },
  "all-right": {
    _default: ["Tekst en begrip", "Woordenschat", "Grammatica", "Luisteren", "Spreken", "Schrijven"],
  },
  "new-interface": {
    _default: ["Tekst en begrip", "Woordenschat", "Grammatica", "Vaardigheden", "Cultuur"],
  },
  "kern-engels": {
    _default: ["Lezen", "Woordenschat", "Grammatica", "Luisteren", "Spreken", "Schrijven"],
  },
  "upload": {
    _default: ["Tekst en begrip", "Woordenschat", "Grammatica", "Vaardigheden"],
  },
  "keys": {
    _default: ["Lezen", "Woordenschat", "Grammatica", "Luisteren", "Spreken"],
  },
  // ── Duits ────────────────────────────────────────────────────
  "na-klar": {
    _default: ["Sprechen", "Wörter lernen", "Lesen", "Schreiben", "Grammatik", "Examentraining"],
  },
  "trabitour": {
    _default: ["Textverstehen", "Wortschatz", "Grammatik", "Sprechen", "Schreiben"],
  },
  "neue-kontakte": {
    _default: ["Textverstehen", "Wortschatz", "Grammatik", "Kommunikation", "Schreiben"],
  },
  // ── Frans ────────────────────────────────────────────────────
  "grandes-lignes": {
    _default: ["Vocabulaire", "Phrases-clés", "Lire", "Parler", "Écrire", "Grammaire", "Carrousel Culturel"],
  },
  "bravoure": {
    _default: ["Vocabulaire", "Compréhension", "Grammaire", "Expression orale", "Expression écrite"],
  },
  "daccord": {
    _default: ["Vocabulaire", "Compréhension", "Grammaire", "Communication", "Culture"],
  },
  // ── Nederlands ───────────────────────────────────────────────
  "nn-hv1": {
    _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Spreekvaardigheid", "Woordenschat", "Spelling", "Taalbeschouwing"],
  },
  "nn-hv2":         { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Spreekvaardigheid", "Woordenschat", "Spelling", "Grammatica"] },
  "nn-havo3":       { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Woordenschat", "Spelling", "Literatuur"] },
  "nn-vwo4":        { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Woordenschat", "Literatuur", "Examentraining"] },
  "talent-hv1":     { _default: ["Luisteren", "Lezen", "Spreken", "Schrijven", "Woordenschat", "Spelling"] },
  "talent-max-hv2b":{ _default: ["Luisteren", "Lezen", "Spreken", "Schrijven", "Woordenschat", "Grammatica"] },
  "talent-max-vwo2b":{ _default: ["Lezen", "Schrijven", "Spreken", "Woordenschat", "Spelling", "Taalbeschouwing"] },
  "talent-max-bb":  { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Literatuur", "Examentraining"] },
  "op-niveau-hv1":  { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Spreken", "Woordenschat", "Spelling"] },
  "op-niveau-hv2":  { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Woordenschat", "Spelling"] },
  "op-niveau-havo45":{ _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Literatuur", "Examen"] },
  "op-niveau-vwo56": { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Literatuur", "Examen"] },
  "kern-nl-hv1":    { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Spreken", "Spelling", "Woordenschat"] },
  "kern-nl-hv2":    { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Spelling", "Grammatica"] },
  "kern-nl-havo3":  { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Literatuur", "Examen"] },
  "kern-nl-vwo3":   { _default: ["Leesvaardigheid", "Schrijfvaardigheid", "Argumenteren", "Literatuur", "Examen"] },
  // ── Aardrijkskunde ───────────────────────────────────────────
  "buitenland": {
    1: ["Kaarten lezen", "Coördinaten", "Schaal", "Soorten kaarten"],
    2: ["Klimaatfactoren", "Klimaatzones", "Neerslag en temperatuur", "Klimaatverandering"],
    3: ["Bevolkingsgroei", "Bevolkingsspreiding", "Migratie", "Vergrijzing"],
    4: ["Verstedelijking", "Stadsstructuur", "Problemen in steden"],
    5: ["Landbouwsystemen", "Voedselproductie", "Landbouw en milieu"],
    6: ["Grondstoffen", "Industrie", "Energie"],
    7: ["Hernieuwbare energie", "Milieuproblemen", "Duurzame ontwikkeling"],
    8: ["Nederland in Europa", "Internationale handel"],
    9: ["Mondiale problemen", "Arme en rijke landen"],
    10: ["Globalisering", "Duurzame toekomst"],
  },
  // ── Basisschool: Rekenen ─────────────────────────────────────
  "pluspunt":            { _default: ["Begrippen en uitleg", "Oefeningen", "Toepassingen", "Herhaling"] },
  "wereld-in-getallen":  { _default: ["Begrippen en uitleg", "Oefeningen", "Toepassingen", "Extra"] },
  "gr-junior":           { _default: ["Introductie", "Oefeningen", "Toepassingen", "Herhaling"] },
  "wizwijs":             { _default: ["Begrippen", "Oefeningen", "Toepassingen", "Verdieping"] },
  "alles-telt":          { _default: ["Begrippen", "Rekenregels", "Oefeningen", "Herhaling"] },
  // ── Basisschool: Taal ────────────────────────────────────────
  "taal-actief":   { _default: ["Theorie en begrippen", "Oefeningen", "Toepassingen", "Herhaling"] },
  "staal":         { _default: ["Theorie", "Oefeningen", "Schrijfopdrachten", "Herhaling"] },
  "nieuw-nl-junior":{ _default: ["Tekst en begrip", "Woordenschat", "Spelling", "Schrijven"] },
  "vll":           { _default: ["Klanken en letters", "Woorden", "Leesoefeningen", "Schrijven"] },
  "lijn3":         { _default: ["Klanken en letters", "Woorden", "Zinnen", "Schrijven"] },
  // ── Basisschool: Natuur ──────────────────────────────────────
  "naut-meander-brandaan": { _default: ["Introductie", "Begrippen", "Opdrachten", "Samenvatting"] },
  "argus-clou":            { _default: ["Introductie", "Begrippen", "Onderzoek", "Toepassing"] },
  "blink":                 { _default: ["Introductie", "Begrippen", "Opdrachten", "Verdieping"] },
};

const TEXTBOOK_CATEGORIES_VO = [
  { id: "wiskunde",        label: "Wiskunde",         icon: "📐" },
  { id: "nederlands",      label: "Nederlands",       icon: "📖" },
  { id: "engels",          label: "Engels",           icon: "🇬🇧" },
  { id: "aardrijkskunde",  label: "Aardrijkskunde",   icon: "🌍" },
  { id: "geschiedenis",    label: "Geschiedenis",     icon: "🏛️" },
  { id: "nask",            label: "NaSk",             icon: "🔭" },
  { id: "biologie",        label: "Biologie",         icon: "🧬" },
  { id: "natuurkunde",     label: "Natuurkunde",      icon: "⚛️" },
  { id: "scheikunde",      label: "Scheikunde",       icon: "🧪" },
  { id: "economie",        label: "Economie",         icon: "💶" },
  { id: "duits",           label: "Duits",            icon: "🇩🇪" },
  { id: "frans",           label: "Frans",            icon: "🇫🇷" },
  { id: "maatschappijleer",label: "Maatschappijleer", icon: "🏛️" },
];
const TEXTBOOK_CATEGORIES_PO = [
  { id: "rekenen", label: "Rekenen",          icon: "🔢" },
  { id: "taal",    label: "Taal / Nederlands", icon: "📝" },
  { id: "natuur",  label: "Wereld & Natuur",   icon: "🌿" },
];

const SAMPLE_QUESTIONS = {
  rekenen: {
    groep12: [
      { q: "Hoeveel vingers zie je? ✋", options: ["3", "4", "5", "6"], answer: 2, explanation: "Een hand heeft 5 vingers." },
      { q: "Wat komt na 7?", options: ["6", "7", "8", "9"], answer: 2, explanation: "Na 7 komt 8." },
      { q: "Hoeveel is 2 + 3?", options: ["4", "5", "6", "7"], answer: 1, explanation: "2 + 3 = 5." },
      { q: "Welk getal is het grootst?", options: ["3", "7", "5", "2"], answer: 1, explanation: "7 is het grootste getal." },
      { q: "Hoeveel is 1 + 1?", options: ["1", "2", "3", "4"], answer: 1, explanation: "1 + 1 = 2." },
      { q: "Wat is de helft van 4?", options: ["1", "2", "3", "4"], answer: 1, explanation: "De helft van 4 is 2." },
      { q: "Hoeveel is 10 - 3?", options: ["5", "6", "7", "8"], answer: 2, explanation: "10 - 3 = 7." },
      { q: "Welk getal is het kleinst?", options: ["9", "4", "6", "8"], answer: 1, explanation: "4 is het kleinste getal." },
      { q: "Hoeveel is 3 + 4?", options: ["5", "6", "7", "8"], answer: 2, explanation: "3 + 4 = 7." },
      { q: "Hoeveel is 5 - 2?", options: ["1", "2", "3", "4"], answer: 2, explanation: "5 - 2 = 3." },
      { q: "Hoeveel ballen zijn dit: ●●●?", options: ["1", "2", "3", "4"], answer: 2, explanation: "Tel de bollen: 1, 2, 3. Dat zijn er 3." },
      { q: "Wat komt na 4?", options: ["3", "4", "5", "6"], answer: 2, explanation: "Na 4 komt 5." },
      { q: "Hoeveel is 2 + 2?", options: ["3", "4", "5", "6"], answer: 1, explanation: "2 + 2 = 4." },
      { q: "Welk getal is het kleinst?", options: ["10", "8", "15", "12"], answer: 1, explanation: "8 is het kleinste getal." },
      { q: "Hoeveel is 6 + 4?", options: ["8", "9", "10", "11"], answer: 2, explanation: "6 + 4 = 10." },
      { q: "Wat is de helft van 10?", options: ["3", "4", "5", "6"], answer: 2, explanation: "De helft van 10 is 5." },
      { q: "Hoeveel is 8 - 3?", options: ["4", "5", "6", "7"], answer: 1, explanation: "8 - 3 = 5." },
      { q: "Welk getal is groter: 9 of 6?", options: ["6", "9", "Ze zijn gelijk", "Weet ik niet"], answer: 1, explanation: "9 is groter dan 6." },
      { q: "Hoeveel is 4 + 4?", options: ["6", "7", "8", "9"], answer: 2, explanation: "4 + 4 = 8." },
      { q: "Hoeveel is 3 + 3?", options: ["5", "6", "7", "8"], answer: 1, explanation: "3 + 3 = 6." },
    ],
    groep3: [
      { q: "Hoeveel is 24 + 13?", options: ["36", "37", "38", "39"], answer: 1, explanation: "24 + 13 = 37." },
      { q: "Hoeveel is 50 - 18?", options: ["28", "30", "32", "34"], answer: 2, explanation: "50 - 18 = 32." },
      { q: "Wat is 5 × 2?", options: ["7", "8", "10", "12"], answer: 2, explanation: "5 × 2 = 10 (tafel van 2)." },
      { q: "Hoeveel is 10 × 5?", options: ["40", "45", "50", "55"], answer: 2, explanation: "10 × 5 = 50 (tafel van 5)." },
      { q: "Welk getal is even?", options: ["13", "17", "22", "25"], answer: 2, explanation: "22 is deelbaar door 2." },
      { q: "Hoeveel is 36 + 24?", options: ["58", "60", "62", "64"], answer: 1, explanation: "36 + 24 = 60." },
      { q: "Wat is 2 × 10?", options: ["12", "20", "22", "30"], answer: 1, explanation: "2 × 10 = 20 (tafel van 10)." },
      { q: "Hoeveel is 75 - 25?", options: ["40", "45", "50", "55"], answer: 2, explanation: "75 - 25 = 50." },
      { q: "Wat is 5 × 5?", options: ["20", "25", "30", "35"], answer: 1, explanation: "5 × 5 = 25 (tafel van 5)." },
      { q: "Hoeveel is 48 + 12?", options: ["58", "60", "62", "68"], answer: 1, explanation: "48 + 12 = 60." },
      { q: "Wat is 3 × 5?", options: ["12", "15", "18", "20"], answer: 1, explanation: "3 × 5 = 15 (tafel van 5)." },
      { q: "Hoeveel is 20 + 30?", options: ["40", "50", "60", "70"], answer: 1, explanation: "20 + 30 = 50." },
      { q: "Wat is 10 × 10?", options: ["10", "50", "100", "1000"], answer: 2, explanation: "10 × 10 = 100." },
      { q: "Welk getal is oneven?", options: ["12", "18", "23", "30"], answer: 2, explanation: "23 is niet deelbaar door 2, dus oneven." },
      { q: "Hoeveel is 80 - 35?", options: ["35", "40", "45", "55"], answer: 2, explanation: "80 - 35 = 45." },
      { q: "Wat is 2 × 10?", options: ["12", "20", "22", "30"], answer: 1, explanation: "2 × 10 = 20." },
      { q: "Hoeveel is 45 + 15?", options: ["55", "60", "65", "70"], answer: 1, explanation: "45 + 15 = 60." },
      { q: "Wat is 5 × 10?", options: ["15", "50", "55", "500"], answer: 1, explanation: "5 × 10 = 50 (tafel van 10)." },
      { q: "Hoeveel is 90 - 40?", options: ["30", "40", "50", "60"], answer: 2, explanation: "90 - 40 = 50." },
    ],
    groep5: [
      { q: "Wat is 347 + 258?", options: ["595", "605", "615", "585"], answer: 1, explanation: "347 + 258 = 605." },
      { q: "Hoeveel is 6 × 8?", options: ["42", "46", "48", "54"], answer: 2, explanation: "6 × 8 = 48." },
      { q: "Wat is de helft van 156?", options: ["68", "78", "82", "76"], answer: 1, explanation: "156 ÷ 2 = 78." },
      { q: "Welk getal is het grootst?", options: ["0,9", "0,85", "0,91", "0,89"], answer: 2, explanation: "0,91 is het grootst." },
      { q: "Hoeveel minuten zitten er in 2,5 uur?", options: ["120", "130", "150", "160"], answer: 2, explanation: "2,5 uur = 150 minuten." },
      { q: "Wat is 1000 - 367?", options: ["633", "643", "733", "637"], answer: 0, explanation: "1000 - 367 = 633." },
      { q: "Hoeveel is ¼ van 200?", options: ["25", "40", "50", "75"], answer: 2, explanation: "¼ van 200 = 50." },
      { q: "Wat is 15 × 4?", options: ["45", "55", "60", "65"], answer: 2, explanation: "15 × 4 = 60." },
      { q: "Hoeveel is 72 ÷ 9?", options: ["6", "7", "8", "9"], answer: 2, explanation: "72 ÷ 9 = 8." },
      { q: "Wat is 450 + 375?", options: ["715", "725", "815", "825"], answer: 3, explanation: "450 + 375 = 825." },
      { q: "Hoeveel is ¾ van 80?", options: ["40", "50", "60", "70"], answer: 2, explanation: "¾ × 80 = 60." },
      { q: "Wat is 9 × 7?", options: ["54", "56", "63", "72"], answer: 2, explanation: "9 × 7 = 63." },
      { q: "Afronden op tientallen: 347 is ...?", options: ["300", "340", "350", "400"], answer: 2, explanation: "Eenheidscijfer 7 ≥ 5, dus afronden naar boven: 350." },
      { q: "Hoeveel gram is 2,5 kg?", options: ["250", "2500", "25", "2050"], answer: 1, explanation: "1 kg = 1000 g, dus 2,5 × 1000 = 2500 g." },
      { q: "Wat is het dubbele van 48?", options: ["84", "86", "96", "98"], answer: 2, explanation: "2 × 48 = 96." },
      { q: "Welk getal ontbreekt: 5, 10, 15, __, 25?", options: ["18", "19", "20", "22"], answer: 2, explanation: "De rij telt steeds 5 erbij op: 20." },
      { q: "Hoeveel is 500 - 148?", options: ["342", "352", "362", "372"], answer: 1, explanation: "500 - 148 = 352." },
      { q: "Wat is 100 × 23?", options: ["230", "2300", "23000", "2030"], answer: 1, explanation: "100 × 23 = 2300." },
      { q: "Hoeveel seconden zitten in 3 minuten?", options: ["30", "150", "180", "300"], answer: 2, explanation: "3 × 60 = 180 seconden." },
      { q: "Welk getal is even?", options: ["17", "23", "36", "51"], answer: 2, explanation: "36 is deelbaar door 2." },
      { q: "Hoeveel is 3/4 van 120?", options: ["60", "80", "90", "100"], answer: 2, explanation: "3/4 × 120 = 90." },
      { q: "Wat is 125 + 375?", options: ["400", "450", "500", "550"], answer: 2, explanation: "125 + 375 = 500." },
      { q: "Hoeveel is 7 × 9?", options: ["54", "56", "63", "72"], answer: 2, explanation: "7 × 9 = 63." },
      { q: "Afronden op honderden: 648 wordt ...?", options: ["600", "640", "650", "700"], answer: 0, explanation: "Het tientalcijfer is 4, dus afronden naar beneden: 600." },
      { q: "Hoeveel ml is 3,5 liter?", options: ["35", "350", "3500", "35000"], answer: 2, explanation: "1 liter = 1000 ml, dus 3,5 × 1000 = 3500 ml." },
      { q: "Wat is het dubbele van 65?", options: ["120", "125", "130", "135"], answer: 2, explanation: "2 × 65 = 130." },
      { q: "Welk getal ontbreekt: 3, 6, 9, __, 15?", options: ["10", "11", "12", "13"], answer: 2, explanation: "De rij telt steeds 3 erbij op: 12." },
      { q: "Hoeveel is 1/5 van 100?", options: ["5", "10", "15", "20"], answer: 3, explanation: "1/5 van 100 = 100 ÷ 5 = 20." },
      { q: "Wat is 8 × 7?", options: ["48", "54", "56", "64"], answer: 2, explanation: "8 × 7 = 56." },
      { q: "Hoeveel seconden zijn er in 2 minuten?", options: ["60", "90", "120", "180"], answer: 2, explanation: "2 × 60 = 120 seconden." },
    ],
    groep7: [
      { q: "Wat is 15% van 240?", options: ["32", "36", "38", "42"], answer: 1, explanation: "10% = 24, 5% = 12, samen 36." },
      { q: "Los op: 3x + 7 = 22. Wat is x?", options: ["3", "4", "5", "6"], answer: 2, explanation: "3x = 15, x = 5." },
      { q: "Wat is de omtrek van een cirkel met straal 7? (π ≈ 3,14)", options: ["21,98", "43,96", "38,46", "49,12"], answer: 1, explanation: "2 × π × 7 = 43,96." },
      { q: "Hoeveel is 2³?", options: ["6", "8", "9", "12"], answer: 1, explanation: "2³ = 8." },
      { q: "Wat is 3/5 als percentage?", options: ["50%", "55%", "60%", "65%"], answer: 2, explanation: "3÷5 = 0,6 = 60%." },
      { q: "Een rechthoek is 12 cm lang en 5 cm breed. Oppervlakte?", options: ["34 cm²", "50 cm²", "60 cm²", "70 cm²"], answer: 2, explanation: "12 × 5 = 60 cm²." },
      { q: "Wat is 0,3 × 0,4?", options: ["0,12", "0,012", "1,2", "12"], answer: 0, explanation: "0,3 × 0,4 = 0,12." },
      { q: "Hoeveel is 25% van 360?", options: ["72", "80", "90", "100"], answer: 2, explanation: "¼ van 360 = 90." },
      { q: "Wat is het kwadraat van 13?", options: ["119", "159", "169", "189"], answer: 2, explanation: "13² = 169." },
      { q: "Welk getal is een priemgetal?", options: ["21", "27", "29", "33"], answer: 2, explanation: "29 is alleen deelbaar door 1 en 29." },
      { q: "Wat is de oppervlakte van een driehoek met basis 10 en hoogte 6?", options: ["16", "30", "60", "120"], answer: 1, explanation: "½ × 10 × 6 = 30." },
      { q: "Bereken: 7² + 4²", options: ["55", "65", "75", "85"], answer: 1, explanation: "49 + 16 = 65." },
      { q: "Hoeveel is 40% van 150?", options: ["50", "55", "60", "65"], answer: 2, explanation: "0,4 × 150 = 60." },
      { q: "Wat is de ggd van 12 en 18?", options: ["3", "4", "6", "9"], answer: 2, explanation: "Delers van 12: 1,2,3,4,6,12. Van 18: 1,2,3,6,9,18. Grootste gemeen = 6." },
      { q: "Los op: x/4 = 7", options: ["11", "21", "28", "35"], answer: 2, explanation: "x = 7 × 4 = 28." },
      { q: "Wat is de gemiddelde waarde van: 4, 7, 9, 12, 8?", options: ["7", "8", "9", "10"], answer: 1, explanation: "(4+7+9+12+8) ÷ 5 = 40 ÷ 5 = 8." },
      { q: "Bereken: 3/4 + 1/8", options: ["4/12", "7/8", "5/8", "4/8"], answer: 1, explanation: "6/8 + 1/8 = 7/8." },
      { q: "Hoeveel is √81?", options: ["7", "8", "9", "10"], answer: 2, explanation: "9 × 9 = 81." },
      { q: "Een fiets kost €240, korting 20%. Wat betaal je?", options: ["€48", "€172", "€192", "€210"], answer: 2, explanation: "20% van 240 = 48; 240 - 48 = 192." },
      { q: "Wat is de kgv van 4 en 6?", options: ["8", "10", "12", "24"], answer: 2, explanation: "Kleinste getal deelbaar door 4 én 6 = 12." },
      { q: "Bereken: 5/6 - 1/4", options: ["4/12", "7/12", "1/2", "2/3"], answer: 1, explanation: "GGD van 6 en 4 is 12. 10/12 - 3/12 = 7/12." },
      { q: "Hoeveel is 30% van 90?", options: ["25", "27", "30", "32"], answer: 1, explanation: "0,3 × 90 = 27." },
      { q: "Welk getal ontbreekt: 2, 4, 8, 16, __?", options: ["20", "24", "28", "32"], answer: 3, explanation: "Elke stap wordt verdubbeld: 16 × 2 = 32." },
      { q: "Bereken: 4² - 3²", options: ["1", "5", "7", "9"], answer: 2, explanation: "16 - 9 = 7." },
      { q: "Wat is 75% van 200?", options: ["125", "140", "150", "175"], answer: 2, explanation: "3/4 van 200 = 150." },
      { q: "Los op: 2x + 5 = 19", options: ["x = 5", "x = 6", "x = 7", "x = 8"], answer: 2, explanation: "2x = 14, x = 7." },
      { q: "Hoeveel is √36?", options: ["4", "5", "6", "7"], answer: 2, explanation: "6 × 6 = 36." },
      { q: "Een auto rijdt 90 km/u. Hoeveel km rijdt hij in 2,5 uur?", options: ["180 km", "200 km", "210 km", "225 km"], answer: 3, explanation: "90 × 2,5 = 225 km." },
      { q: "Wat is de gemiddelde waarde van: 10, 20, 30, 40?", options: ["20", "25", "30", "35"], answer: 1, explanation: "(10+20+30+40) ÷ 4 = 100 ÷ 4 = 25." },
    ],
    klas1: [
      { q: "Vereenvoudig: 12/18", options: ["2/3", "3/4", "4/6", "6/9"], answer: 0, explanation: "12/18 = 2/3 (deel door 6)." },
      { q: "Wat is √144?", options: ["11", "12", "13", "14"], answer: 1, explanation: "12 × 12 = 144." },
      { q: "Los op: 2(x + 3) = 14", options: ["x = 3", "x = 4", "x = 5", "x = 7"], answer: 1, explanation: "x+3 = 7, x = 4." },
      { q: "Wat is -5 + (-3)?", options: ["-2", "-8", "8", "2"], answer: 1, explanation: "-5 + (-3) = -8." },
      { q: "Hoeveel is 0,25 × 0,4?", options: ["0,1", "0,01", "1,0", "0,065"], answer: 0, explanation: "0,25 × 0,4 = 0,1." },
      { q: "Bereken: (-3)²", options: ["-9", "-6", "6", "9"], answer: 3, explanation: "(-3)² = 9 (negatief × negatief = positief)." },
      { q: "Los op: 5x - 3 = 17", options: ["x = 3", "x = 4", "x = 5", "x = 7"], answer: 1, explanation: "5x = 20, x = 4." },
      { q: "Wat is de oppervlakte van een cirkel met r = 5? (π ≈ 3,14)", options: ["31,4", "78,5", "62,8", "15,7"], answer: 1, explanation: "π × 5² = 3,14 × 25 = 78,5." },
      { q: "Bereken: 2/3 × 3/4", options: ["5/7", "1/2", "6/7", "2/4"], answer: 1, explanation: "(2×3)/(3×4) = 6/12 = 1/2." },
      { q: "Hoeveel is 3⁴?", options: ["12", "27", "64", "81"], answer: 3, explanation: "3⁴ = 3×3×3×3 = 81." },
      { q: "Welke ongelijkheid klopt als x = -2?", options: ["x > 0", "x² < 0", "x + 5 > 0", "-x < 0"], answer: 2, explanation: "-2 + 5 = 3 > 0. ✓" },
      { q: "Bereken: |-7|", options: ["-7", "0", "7", "49"], answer: 2, explanation: "De absolute waarde van -7 is 7." },
      { q: "Hoeveel is 5! (faculteit)?", options: ["25", "60", "120", "720"], answer: 2, explanation: "5! = 5×4×3×2×1 = 120." },
      { q: "Wat is de helling van y = 3x - 2?", options: ["-2", "1", "3", "6"], answer: 2, explanation: "In y = ax + b is a de helling: hier 3." },
      { q: "Bereken: √(25 + 144)", options: ["13", "14", "15", "17"], answer: 0, explanation: "√169 = 13." },
      { q: "Los op: |x| = 4", options: ["x = 4", "x = -4", "x = 4 of x = -4", "geen oplossing"], answer: 2, explanation: "Twee oplossingen: x = 4 of x = -4." },
      { q: "Wat is de y-intercept van y = 2x + 6?", options: ["2", "4", "6", "8"], answer: 2, explanation: "In y = ax + b is b de y-intercept: hier 6." },
      { q: "Bereken: (2/3)²", options: ["2/9", "4/6", "4/9", "2/6"], answer: 2, explanation: "(2/3)² = 4/9." },
      { q: "Hoeveel is -3 × (-4)?", options: ["-12", "-7", "7", "12"], answer: 3, explanation: "Negatief × negatief = positief: 12." },
      { q: "Welke punt ligt op y = 2x + 1?", options: ["(1,2)", "(2,4)", "(3,7)", "(0,2)"], answer: 2, explanation: "y = 2(3) + 1 = 7. ✓" },
      { q: "Bereken: 3/4 ÷ 1/2", options: ["3/8", "3/4", "3/2", "2/3"], answer: 2, explanation: "3/4 ÷ 1/2 = 3/4 × 2/1 = 6/4 = 3/2." },
      { q: "Los op: -2x + 8 = 2", options: ["x = -3", "x = 2", "x = 3", "x = 5"], answer: 2, explanation: "-2x = -6, x = 3." },
      { q: "Wat is 2^5?", options: ["10", "16", "25", "32"], answer: 3, explanation: "2⁵ = 2×2×2×2×2 = 32." },
      { q: "Bereken de omtrek van een rechthoek met lengte 8 cm en breedte 5 cm.", options: ["13 cm", "26 cm", "40 cm", "40 cm²"], answer: 1, explanation: "Omtrek = 2 × (8 + 5) = 2 × 13 = 26 cm." },
      { q: "Hoeveel is -4 + 9?", options: ["-13", "-5", "5", "13"], answer: 2, explanation: "-4 + 9 = 5." },
      { q: "Bereken: (−2)³", options: ["-8", "-6", "6", "8"], answer: 0, explanation: "(-2)³ = -2 × -2 × -2 = -8." },
      { q: "Welke lijn heeft geen helling?", options: ["y = 3x", "y = -x + 2", "y = 5", "x = 3"], answer: 2, explanation: "y = 5 is een horizontale lijn — helling is 0." },
      { q: "Bereken: |-15|", options: ["-15", "0", "15", "225"], answer: 2, explanation: "Absolute waarde van -15 = 15." },
      { q: "Los op: x² = 49", options: ["x = 7", "x = -7", "x = 7 of x = -7", "x = 49"], answer: 2, explanation: "x² = 49 heeft twee oplossingen: x = 7 of x = -7." },
    ],
    klas3: [
      { q: "Wat is de afgeleide van f(x) = 3x² + 2x?", options: ["6x + 2", "3x + 2", "6x² + 2", "6x"], answer: 0, explanation: "f'(x) = 6x + 2." },
      { q: "Los op: log₂(8) = ?", options: ["2", "3", "4", "6"], answer: 1, explanation: "2³ = 8, dus log₂(8) = 3." },
      { q: "Wat is sin(30°)?", options: ["0", "0,5", "1", "√2/2"], answer: 1, explanation: "sin(30°) = 0,5." },
      { q: "Wat is de discriminant van x² + 4x + 4 = 0?", options: ["0", "4", "8", "16"], answer: 0, explanation: "D = 4² - 4(1)(4) = 0." },
      { q: "Bereken: ∫2x dx", options: ["2", "x²", "x² + C", "2x² + C"], answer: 2, explanation: "∫2x dx = x² + C." },
      { q: "Wat is cos(60°)?", options: ["0", "0,5", "√3/2", "1"], answer: 1, explanation: "cos(60°) = 0,5." },
      { q: "Los op: 2^x = 32", options: ["x=4", "x=5", "x=6", "x=8"], answer: 1, explanation: "2⁵ = 32, dus x = 5." },
      { q: "Wat is de afgeleide van sin(x)?", options: ["-cos(x)", "cos(x)", "-sin(x)", "tan(x)"], answer: 1, explanation: "d/dx sin(x) = cos(x)." },
      { q: "Los op: x² - 5x + 6 = 0", options: ["x=1,x=6", "x=2,x=3", "x=-2,x=-3", "x=2,x=-3"], answer: 1, explanation: "(x-2)(x-3)=0 → x=2 of x=3." },
      { q: "Wat is tan(45°)?", options: ["0", "0,5", "1", "√2"], answer: 2, explanation: "tan(45°) = 1." },
      { q: "Bereken: lim(x→0) sin(x)/x", options: ["0", "1", "∞", "onbepaald"], answer: 1, explanation: "Klassieke limiet: lim sin(x)/x = 1." },
      { q: "Wat is de afgeleide van e^x?", options: ["x·e^(x-1)", "e^x", "1/e^x", "ln(x)"], answer: 1, explanation: "e^x is zijn eigen afgeleide." },
      { q: "Los op: ln(x) = 2", options: ["x = 2", "x = e²", "x = 2e", "x = √e"], answer: 1, explanation: "ln(x) = 2 → x = e²." },
      { q: "Wat is ∫cos(x) dx?", options: ["-sin(x)+C", "sin(x)+C", "tan(x)+C", "-cos(x)+C"], answer: 1, explanation: "∫cos(x) dx = sin(x) + C." },
      { q: "Bereken: log(100)", options: ["1", "2", "10", "100"], answer: 1, explanation: "log(100) = log₁₀(10²) = 2." },
      { q: "Wat is de stelling van Pythagoras?", options: ["a+b=c", "a²+b²=c²", "a²-b²=c", "2ab=c²"], answer: 1, explanation: "In een rechthoekige driehoek: a²+b²=c²." },
      { q: "Bereken: d/dx (x³)", options: ["3x²", "x²", "3x", "x⁴/4"], answer: 0, explanation: "Machtsfunctieregel: 3x²." },
      { q: "Los op: sin(x) = 1 voor 0 ≤ x ≤ 360°", options: ["x = 0°", "x = 90°", "x = 180°", "x = 270°"], answer: 1, explanation: "sin(90°) = 1." },
      { q: "Wat is het domein van f(x) = ln(x)?", options: ["x ∈ ℝ", "x > 0", "x ≥ 0", "x > 1"], answer: 1, explanation: "Logaritme is alleen gedefinieerd voor x > 0." },
      { q: "Bereken: ∫₀¹ x² dx", options: ["1/4", "1/3", "1/2", "1"], answer: 1, explanation: "[x³/3]₀¹ = 1/3 - 0 = 1/3." },
      { q: "Wat is de afgeleide van f(x) = x³ - 4x?", options: ["3x² - 4", "x² - 4", "3x - 4", "3x² + 4"], answer: 0, explanation: "f'(x) = 3x² - 4." },
      { q: "Los op: x² - 9 = 0", options: ["x = 3", "x = -3", "x = 3 of x = -3", "x = 9"], answer: 2, explanation: "(x-3)(x+3) = 0 → x = 3 of x = -3." },
      { q: "Bereken: log₂(16)", options: ["2", "3", "4", "8"], answer: 2, explanation: "2⁴ = 16, dus log₂(16) = 4." },
      { q: "Wat is tan(30°)?", options: ["1/2", "√3/3", "√3/2", "√3"], answer: 1, explanation: "tan(30°) = sin(30°)/cos(30°) = (1/2)/(√3/2) = 1/√3 = √3/3." },
      { q: "Bereken: ∫ (3x²) dx", options: ["x³ + C", "6x + C", "x³/3 + C", "3x + C"], answer: 0, explanation: "∫3x² dx = x³ + C (macht + 1, dan delen door nieuwe macht)." },
      { q: "Wat is het maximum van f(x) = -x² + 4x - 1?", options: ["x = 2, f = 3", "x = 2, f = 4", "x = 4, f = 2", "x = -2, f = 3"], answer: 0, explanation: "Top via x = -b/2a = -4/-2 = 2. f(2) = -4 + 8 - 1 = 3." },
      { q: "Wat is e^(ln(5))?", options: ["5", "ln(5)", "e^5", "1/5"], answer: 0, explanation: "e^(ln x) = x, dus e^(ln 5) = 5." },
      { q: "Bereken: lim(x→∞) (2x+1)/(x+3)", options: ["0", "1", "2", "∞"], answer: 2, explanation: "Hoogste macht telt: 2x/x = 2 als x → ∞." },
      { q: "Wat is het domein van f(x) = √(x - 3)?", options: ["x ≥ 0", "x ≥ 3", "x > 3", "x ∈ ℝ"], answer: 1, explanation: "Vierkantswortel vereist x - 3 ≥ 0, dus x ≥ 3." },
    ],
  },
  taal: {
    groep12: [
      { q: "Wat rijmt op 'kat'?", options: ["hond", "mat", "vis", "boom"], answer: 1, explanation: "'Mat' rijmt op 'kat'." },
      { q: "Welke letter hoor je in 'boom'?", options: ["a", "b", "k", "p"], answer: 1, explanation: "'Boom' begint met de letter b." },
      { q: "Wat rijmt op 'beer'?", options: ["bal", "meer", "doos", "pen"], answer: 1, explanation: "'Meer' rijmt op 'beer'." },
      { q: "Welk woord is een dier?", options: ["tafel", "hond", "stoel", "lamp"], answer: 1, explanation: "Een hond is een dier." },
      { q: "Welke letter hoor je in 'zon'?", options: ["z", "s", "p", "m"], answer: 0, explanation: "'Zon' begint met de letter z." },
      { q: "Wat rijmt op 'fiets'?", options: ["auto", "boot", "diets", "trein"], answer: 2, explanation: "'Diets' rijmt op 'fiets'." },
      { q: "Welk woord is een kleur?", options: ["appel", "rood", "rennen", "groot"], answer: 1, explanation: "Rood is een kleur." },
      { q: "Welke letter hoor je in 'maan'?", options: ["n", "m", "b", "p"], answer: 1, explanation: "'Maan' begint met de letter m." },
      { q: "Wat rijmt op 'boot'?", options: ["fiets", "brood", "trein", "auto"], answer: 1, explanation: "'Brood' rijmt op 'boot'." },
      { q: "Welk woord is een vrucht?", options: ["stoep", "appel", "straat", "lamp"], answer: 1, explanation: "Een appel is een vrucht." },
      { q: "Wat rijmt op 'neus'?", options: ["hand", "voet", "reus", "hoofd"], answer: 2, explanation: "'Reus' rijmt op 'neus'." },
      { q: "Welke letter hoor je in 'regen'?", options: ["l", "r", "s", "t"], answer: 1, explanation: "'Regen' begint met de letter r." },
      { q: "Welk woord is een voertuig?", options: ["appel", "stoel", "auto", "boek"], answer: 2, explanation: "Een auto is een voertuig." },
      { q: "Wat rijmt op 'peer'?", options: ["appel", "banaan", "beer", "druif"], answer: 2, explanation: "'Beer' rijmt op 'peer'." },
      { q: "Welk woord beschrijft het weer?", options: ["stoel", "regen", "boek", "pen"], answer: 1, explanation: "Regen is een weersverschijnsel." },
      { q: "Welke letter hoor je in 'vis'?", options: ["p", "b", "v", "f"], answer: 2, explanation: "'Vis' begint met de letter v." },
      { q: "Wat rijmt op 'dag'?", options: ["nacht", "vlag", "ochtend", "week"], answer: 1, explanation: "'Vlag' rijmt op 'dag'." },
      { q: "Welk woord is een lichaamsdeel?", options: ["tafel", "been", "bloem", "auto"], answer: 1, explanation: "Een been is een lichaamsdeel." },
      { q: "Welk woord hoort bij de school?", options: ["schep", "boek", "bad", "kip"], answer: 1, explanation: "Een boek gebruik je op school." },
    ],
    groep3: [
      { q: "Welk woord schrijf je met een hoofdletter?", options: ["fiets", "amsterdam", "appel", "tafel"], answer: 1, explanation: "Steden schrijf je met een hoofdletter: Amsterdam." },
      { q: "Wat is het meervoud van 'boom'?", options: ["booms", "bomen", "boomen", "boomes"], answer: 1, explanation: "'Bomen' is het meervoud van 'boom'." },
      { q: "Welke zin klopt?", options: ["Ik loopt naar school.", "Ik loop naar school.", "Ik loops naar school.", "Ik lopen naar school."], answer: 1, explanation: "Bij 'ik' gebruik je de stam van het werkwoord: loop." },
      { q: "Wat is het verkleinwoord van 'huis'?", options: ["huisje", "huiske", "huistje", "huisie"], answer: 0, explanation: "'Huisje' is het verkleinwoord." },
      { q: "Welk woord rijmt op 'school'?", options: ["stoep", "stoel", "straat", "trein"], answer: 1, explanation: "'Stoel' rijmt op 'school'." },
      { q: "Wat betekent 'vrolijk'?", options: ["verdrietig", "bang", "blij", "moe"], answer: 2, explanation: "'Vrolijk' betekent blij of opgewekt." },
      { q: "Welk woord is fout gespeld?", options: ["bal", "fiest", "boom", "maan"], answer: 1, explanation: "Het is 'fiets', niet 'fiest'." },
      { q: "Wat is het meervoud van 'kind'?", options: ["kinds", "kindes", "kinderen", "kindjes"], answer: 2, explanation: "'Kinderen' is het meervoud van 'kind'." },
      { q: "Welke zin klopt?", options: ["De kat slaap.", "De kat slaapt.", "De kat slaaps.", "De kat slapen."], answer: 1, explanation: "Bij 'de kat' (hij/zij) gebruik je stam + t: slaapt." },
      { q: "Wat is een woord voor water uit de lucht?", options: ["sneeuw", "regen", "wind", "zon"], answer: 1, explanation: "Regen valt uit de lucht als water." },
      { q: "Wat is het meervoud van 'boek'?", options: ["boeks", "boeken", "boekes", "boekjes"], answer: 1, explanation: "'Boeken' is het meervoud van 'boek'." },
      { q: "Welk woord rijmt op 'regen'?", options: ["zon", "storm", "degen", "wind"], answer: 2, explanation: "'Degen' rijmt op 'regen'." },
      { q: "Wat is het verkleinwoord van 'kat'?", options: ["katje", "katse", "katsje", "katietje"], answer: 0, explanation: "'Katje' is het verkleinwoord van 'kat'." },
      { q: "Welke zin klopt?", options: ["Wij lopen morgen.", "Wij loopt morgen.", "Wij loop morgen.", "Wij lopen morgens."], answer: 0, explanation: "'Wij lopen' — bij wij gebruik je de meervoudsvorm." },
      { q: "Wat is het meervoud van 'bal'?", options: ["bals", "ballen", "bales", "balles"], answer: 1, explanation: "'Ballen' is het meervoud van 'bal'." },
      { q: "Welk woord is het langst?", options: ["kat", "fiets", "boterham", "bal"], answer: 2, explanation: "'Boterham' heeft de meeste letters." },
      { q: "Welke zin heeft een fout?", options: ["De hond rent hard.", "De kat slaapt lekker.", "Het kind spelen buiten.", "Zij fietst naar huis."], answer: 2, explanation: "'Het kind speelt', niet 'spelen'." },
      { q: "Wat betekent 'verdrietig'?", options: ["blij", "boos", "bedroefd", "bang"], answer: 2, explanation: "'Verdrietig' betekent bedroefd of droevig." },
      { q: "Welk woord schrijf je met een hoofdletter?", options: ["vrijdag", "avond", "nederland", "winter"], answer: 2, explanation: "Landen schrijf je met een hoofdletter: Nederland." },
    ],
    groep5: [
      { q: "Welk woord is fout geschreven?", options: ["fiets", "pannenkoek", "gezellig", "helemael"], answer: 3, explanation: "Het is 'helemaal', niet 'helemael'." },
      { q: "Wat is het meervoud van 'stad'?", options: ["stadden", "steden", "stads", "stads"], answer: 1, explanation: "'Steden' is het onregelmatige meervoud." },
      { q: "Welk woord is een bijvoeglijk naamwoord?", options: ["rennen", "mooi", "tafel", "snel"], answer: 1, explanation: "'Mooi' beschrijft een zelfstandig naamwoord." },
      { q: "Welke zin is correct?", options: ["Hij word boos", "Hij wordt boos", "Hij wort boos", "Hij wordd boos"], answer: 1, explanation: "Stam (word) + t = wordt." },
      { q: "Wat is een synoniem van 'blij'?", options: ["boos", "verdrietig", "vrolijk", "moe"], answer: 2, explanation: "'Vrolijk' betekent hetzelfde als 'blij'." },
      { q: "Welk woord is een zelfstandig naamwoord?", options: ["lopen", "groot", "huis", "snel"], answer: 2, explanation: "'Huis' is een zelfstandig naamwoord (ding)." },
      { q: "Wat is het tegendeel van 'oud'?", options: ["groot", "jong", "dik", "snel"], answer: 1, explanation: "'Jong' is het antoniem van 'oud'." },
      { q: "Welk woord schrijf je met een hoofdletter?", options: ["fiets", "nederland", "appel", "tafel"], answer: 1, explanation: "Landen schrijf je altijd met een hoofdletter: Nederland." },
      { q: "Wat is het juiste meervoud van 'ei'?", options: ["eis", "eien", "eieren", "eies"], answer: 2, explanation: "'Eieren' is het meervoud van 'ei'." },
      { q: "Welke zin heeft een fout?", options: ["Ik ga morgen zwemmen.", "Hij heeft gisteren gespeeld.", "Wij loopt naar school.", "Zij fietst elke dag."], answer: 2, explanation: "'Wij lopen', niet 'loopt'." },
      { q: "Wat is een werkwoord?", options: ["tafel", "rennen", "groot", "huis"], answer: 1, explanation: "Een werkwoord geeft een actie of toestand aan." },
      { q: "Hoe schrijf je dit woord correct?", options: ["vriendchap", "vriendshap", "vriendschap", "vrendschap"], answer: 2, explanation: "'Vriendschap' = vriend + schap." },
      { q: "Welke letter ontbreekt: sch__p?", options: ["aa", "ee", "oo", "uu"], answer: 0, explanation: "Schaap heeft 'aa' in het midden." },
      { q: "Wat betekent 'grappig'?", options: ["verdrietig", "eng", "leuk/komisch", "saai"], answer: 2, explanation: "'Grappig' betekent leuk of komisch." },
      { q: "Welk woord rijmt op 'boot'?", options: ["bat", "bit", "brood", "best"], answer: 2, explanation: "'Brood' rijmt op 'boot' (lange oo-klank)." },
      { q: "Wat is het verkleinwoord van 'boom'?", options: ["boompie", "boomtje", "boomt", "boompje"], answer: 3, explanation: "'Boompje' is het verkleinwoord." },
      { q: "Welke zin klopt?", options: ["De kat slaapt lekker.", "De kat slaap lekker.", "De kat slaaps lekker.", "De kat slaapit lekker."], answer: 0, explanation: "Bij 'de kat' (hij/zij): stam + t = slaapt." },
      { q: "Wat is een antwoord op 'Hoe gaat het?'", options: ["Ja, graag.", "Prima, dank je.", "Nee, niet goed.", "Dat klopt."], answer: 1, explanation: "'Prima, dank je' is een gepaste reactie." },
      { q: "Wat is het meervoud van 'kind'?", options: ["kinds", "kindes", "kinderen", "kindjes"], answer: 2, explanation: "'Kinderen' is het onregelmatige meervoud." },
      { q: "Welk woord past: 'De ... schijnt vandaag.'?", options: ["maan", "ster", "zon", "regen"], answer: 2, explanation: "De zon schijnt, dat is een bekende uitdrukking." },
      { q: "Wat is een samengesteld woord?", options: ["een werkwoord", "twee woorden die samen één nieuw woord vormen", "een werkwoord + bijvoeglijk naamwoord", "een meervoud"], answer: 1, explanation: "Bv: 'zonnebril' = zon + bril. Twee woorden vormen één nieuw woord." },
      { q: "Welk woord is fout gespeld?", options: ["schrjven", "rijden", "fietsen", "wandelen"], answer: 0, explanation: "'Schrjven' mist een 'i' — correct is 'schrijven'." },
      { q: "Wat is het verschil tussen 'er' en 'daar'?", options: ["Geen verschil", "'Er' is onbepaald, 'daar' wijst naar een specifieke plek", "'Daar' is onbepaald", "'Er' wijst naar een specifieke plek"], answer: 1, explanation: "'Er staat een fiets.' vs. 'De fiets staat daar.' — 'er' is onbepaald." },
      { q: "Welke zin gebruikt een actieve werkwoordsvorm?", options: ["De brief werd geschreven.", "Jan schrijft de brief.", "De les werd gegeven.", "Het huiswerk is gemaakt."], answer: 1, explanation: "Actief: onderwerp voert de handeling uit. Jan (onderwerp) schrijft." },
      { q: "Wat is het verschil tussen een werkwoord en een bijwoord?", options: ["Geen verschil", "Een werkwoord drukt een actie uit; een bijwoord geeft informatie over de actie", "Een bijwoord is een soort werkwoord", "Een werkwoord beschrijft hoe iets gedaan wordt"], answer: 1, explanation: "'Rennen' = werkwoord. 'Snel' (als 'snel rennen') = bijwoord." },
      { q: "Welk woord is een telwoord?", options: ["groot", "rennen", "drie", "huis"], answer: 2, explanation: "'Drie' is een telwoord — het geeft een hoeveelheid aan." },
      { q: "Wat is het meervoud van 'kalf'?", options: ["kalfs", "kalven", "kalvers", "kalveren"], answer: 3, explanation: "'Kalveren' is het onregelmatige meervoud van 'kalf'." },
      { q: "Welke zin heeft een dt-fout?", options: ["Hij rijdt naar huis.", "Zij wordt ziek.", "Jij word morgen beter.", "Hij wordt boos."], answer: 2, explanation: "'Jij wordt' (stam + t bij jij na pers. vnw.) — 'word' zonder t is fout." },
      { q: "Wat is het tegendeel van 'boven'?", options: ["naast", "voor", "achter", "onder"], answer: 3, explanation: "'Onder' is het antoniem van 'boven'." },
    ],
    groep7: [
      { q: "Welk woord krijgt -heid?", options: ["mooi", "snel", "vrij", "alle drie"], answer: 3, explanation: "Alle drie: mooi·heid, snel·heid, vrij·heid." },
      { q: "Wat is de lijdend voorwerp in: 'Jan gooit de bal'?", options: ["Jan", "gooit", "de bal", "er is geen"], answer: 2, explanation: "Wat gooit Jan? → de bal." },
      { q: "Welke schrijfwijze is correct?", options: ["pannekoek", "pannenkoek", "panne-koek", "pannékoek"], answer: 1, explanation: "'Pannenkoek' met tussen-n." },
      { q: "Welk woord is een voegwoord?", options: ["maar", "snel", "huis", "lopen"], answer: 0, explanation: "'Maar' verbindt zinnen of zinsdelen." },
      { q: "Wat is een synoniem van 'moeilijk'?", options: ["eenvoudig", "lastig", "snel", "vrolijk"], answer: 1, explanation: "'Lastig' betekent hetzelfde als 'moeilijk'." },
      { q: "Welke schrijfwijze klopt?", options: ["hij rijdt", "hij rijt", "hij rijd", "hij rjdt"], answer: 0, explanation: "'Rijdt' want verleden tijd is 'reed' (d-werkwoord)." },
      { q: "Wat is het onderwerp in: 'De leraar geeft les'?", options: ["De leraar", "geeft", "les", "De leraar geeft"], answer: 0, explanation: "Wie geeft les? → De leraar." },
      { q: "Welk woord heeft een d aan het einde bij uitspreken?", options: ["hond", "tafel", "fiets", "pen"], answer: 0, explanation: "'Hond' klinkt als 'hont' maar schrijf je met d: honden." },
      { q: "Wat is een antoniem van 'vroeg'?", options: ["snel", "laat", "vrolijk", "oud"], answer: 1, explanation: "Antoniem (tegendeel) van 'vroeg' is 'laat'." },
      { q: "Welke zin klopt qua werkwoordvervoeging?", options: ["Jullie loopt hard.", "Jullie lopen hard.", "Jullie loop hard.", "Jullie loopten hard."], answer: 1, explanation: "Jullie lopen: bij jullie gebruik je de infinitief/meervoudsvorm." },
      { q: "Wat is de persoonsvorm in: 'Zij fietst naar huis'?", options: ["Zij", "fietst", "naar", "huis"], answer: 1, explanation: "'Fietst' is het vervoegde werkwoord." },
      { q: "Welk woord is een bijwoord?", options: ["snel (bnw)", "hij", "snel (bw)", "rennen"], answer: 2, explanation: "'Snel' als bijwoord beschrijft hoe iets gedaan wordt." },
      { q: "Hoeveel zinsdelen zijn er in: 'De hond blaft luid in de tuin'?", options: ["2", "3", "4", "5"], answer: 2, explanation: "Onderwerp, persoonsvorm, bijwoord, bepaling van plaats = 4 delen." },
      { q: "Welk woord past: 'Ik heb de brief al ...'?", options: ["schrijven", "geschreven", "geschrijven", "schrijft"], answer: 1, explanation: "Voltooid deelwoord: 'geschreven'." },
      { q: "Wat is een metoniem?", options: ["Een vergelijking", "Een woord dat staat voor iets anders", "Een rijmvorm", "Herhaling"], answer: 1, explanation: "Bv: 'het Witte Huis besliste' = de Amerikaanse regering." },
      { q: "Welke zin bevat een dubbele ontkenning?", options: ["Ik heb niets.", "Ik heb niet niets.", "Ik heb alles.", "Ik heb iets."], answer: 1, explanation: "'niet niets' = twee ontkenningen, fout in Nederlands." },
      { q: "Wat is het verschil tussen 'haar' en 'hun'?", options: ["Geen verschil", "haar=bezitt. vrouw, hun=bezitt. meervoud", "hun=vrouw, haar=meervoud", "Beide bezittelijk voornaamwoord vrouw"], answer: 1, explanation: "'haar boek' (één vrouw), 'hun boek' (meerdere personen)." },
      { q: "Wat is de stijlfiguur in: 'stille storm'?", options: ["Metafoor", "Alliteratie", "Oxymoron", "Personificatie"], answer: 2, explanation: "Twee tegengestelde woorden samen = oxymoron." },
      { q: "Welke zin gebruikt de actieve vorm?", options: ["De bal wordt gegooid.", "Jan gooit de bal.", "De bal is gegooid door Jan.", "Er wordt gevoetbald."], answer: 1, explanation: "In actief is het onderwerp de handelende persoon." },
      { q: "Wat betekent het prefix 'on-' in 'onmogelijk'?", options: ["Heel erg", "Niet", "Bijna", "Super"], answer: 1, explanation: "'On-' betekent 'niet': onmogelijk = niet mogelijk." },
      { q: "Wat is een enkelvoudige zin?", options: ["Een zin met meerdere persoonsvormen", "Een zin met één persoonsvorm en één onderwerp", "Een zin zonder werkwoord", "Een bijzin"], answer: 1, explanation: "Een enkelvoudige zin heeft één persoonsvorm: 'De kat slaapt.'" },
      { q: "Wat is het verschil tussen een bijzin en een hoofdzin?", options: ["Geen verschil", "Een bijzin is afhankelijk van een andere zin; een hoofdzin staat zelfstandig", "Een hoofdzin is afhankelijk", "Een bijzin heeft geen werkwoord"], answer: 1, explanation: "'Hij weet dat het regent.' — 'dat het regent' is een bijzin (afhankelijk)." },
      { q: "Welke spelling is correct?", options: ["hij rijd", "hij rijdt", "hij rijt", "hij rijde"], answer: 1, explanation: "Rijden → stam 'rijd' + t bij hij/zij/het = rijdt. Het is een d-werkwoord." },
      { q: "Wat is een persoonlijk voornaamwoord?", options: ["'groot', 'klein'", "'ik', 'jij', 'hij', 'wij'", "'rennen', 'lopen'", "'de', 'het'"], answer: 1, explanation: "Persoonlijke voornaamwoorden verwijzen naar personen: ik, jij, hij, zij, wij, jullie, zij." },
      { q: "Wat is een bepaling van tijd?", options: ["Een bijvoeglijk naamwoord", "Een zinsdeel dat aangeeft wanneer iets gebeurt", "Het onderwerp", "Het lijdend voorwerp"], answer: 1, explanation: "Bv: 'Gisteren fietste ik naar school.' — 'gisteren' is de bepaling van tijd." },
      { q: "Welke zin is samengesteld?", options: ["De hond blaft.", "Het regent.", "Ik ga naar huis en hij blijft hier.", "Zij loopt snel."], answer: 2, explanation: "Een samengestelde zin heeft twee of meer persoonsvormen verbonden door een voegwoord." },
      { q: "Wat is een lidwoord?", options: ["'groot', 'klein', 'snel'", "'de', 'het', 'een'", "'rennen', 'lopen'", "'ik', 'jij', 'hij'"], answer: 1, explanation: "Lidwoorden staan voor zelfstandige naamwoorden: de kat, het huis, een auto." },
      { q: "Wat is het suffix '-elijk' in 'duidelijk'?", options: ["Een prefix (voorvoegsel)", "Een suffix (achtervoegsel) dat bijvoeglijke naamwoorden vormt", "Een werkwoordsuitgang", "Een verkleinwoord"], answer: 1, explanation: "'Duid' + '-elijk' = duidelijk. Het suffix '-elijk' vormt bijvoeglijke naamwoorden." },
      { q: "Wat is een afgeleid woord?", options: ["Een samengesteld woord", "Een woord gevormd met voor- of achtervoegsel van een basiswoord", "Een synoniem", "Een leenwoord"], answer: 1, explanation: "'on-' + 'mogelijk' = onmogelijk. 'werk' + '-er' = werker. Afgeleid van een basiswoord." },
    ],
    klas1: [
      { q: "Wat is een metafoor?", options: ["Vergelijking met 'als'", "Beeldspraak zonder 'als'", "Herhaling", "Overdrijving"], answer: 1, explanation: "Beeldspraak zonder 'als'. Bv: 'Hij is een rots.'" },
      { q: "Welke zin bevat een persoonsvorm?", options: ["Rennend door het bos", "De mooie bloemen", "Zij fietst naar huis", "Al lachend"], answer: 2, explanation: "'Fietst' is de persoonsvorm." },
      { q: "Wat is het onderwerp in: 'De hond van de buurman blaft'?", options: ["De hond", "de buurman", "De hond van de buurman", "blaft"], answer: 2, explanation: "Wie/wat blaft? → 'De hond van de buurman'." },
      { q: "Wat is een simile?", options: ["Vergelijking met 'als' of 'zoals'", "Herhaling van klanken", "Overdrijving", "Personificatie"], answer: 0, explanation: "Bv: 'snel als de wind' = simile." },
      { q: "Wat is een argument?", options: ["Een mening", "Een bewering + onderbouwing", "Een conclusie", "Een tegenstelling"], answer: 1, explanation: "Een argument is een reden die een standpunt ondersteunt." },
      { q: "Welk zinsdeel is het meewerkend voorwerp?", options: ["Jan geeft", "de bloemen", "zijn moeder", "vandaag"], answer: 2, explanation: "Aan wie geeft Jan? → zijn moeder." },
      { q: "Wat is alliteratie?", options: ["Rijm aan het einde", "Herhaling van beginletters", "Een vergelijking", "Overdrijving"], answer: 1, explanation: "Bv: 'Peter Piper picked a peck.'" },
      { q: "Wat is het verschil tussen denotatief en connotatief?", options: ["Geen verschil", "Letterlijk vs. bijbetekenis", "Formeel vs. informeel", "Oud vs. nieuw"], answer: 1, explanation: "'Huis' = denotatief (letterlijk), 'thuis' = connotatief (warmte, gevoel)." },
      { q: "Welk teksttype is overtuigend van aard?", options: ["Beschrijvend", "Verhalend", "Argumentatief", "Informatief"], answer: 2, explanation: "Argumentatieve teksten proberen de lezer te overtuigen." },
      { q: "Wat is een hyperbool?", options: ["Personificatie", "Vergelijking", "Overdrijving", "Herhaling"], answer: 2, explanation: "Bv: 'Ik heb je al duizend keer gezegd...' = overdrijving." },
      { q: "Welke zin is passief?", options: ["Hij leest het boek.", "Het boek wordt gelezen.", "Zij schrijft een brief.", "We lopen hard."], answer: 1, explanation: "Passief: het onderwerp ondergaat de handeling." },
      { q: "Wat is een epiloog?", options: ["Inleiding", "Hoogtepunt", "Afsluiting na het verhaal", "Terugblik"], answer: 2, explanation: "Een epiloog komt na het eigenlijke verhaal." },
      { q: "Welke interpunctie gebruik je bij een opsomming?", options: ["Puntkomma", "Komma", "Koppelteken", "Uitroepteken"], answer: 1, explanation: "Een komma scheidt items in een opsomming." },
      { q: "Wat is de connotatie van 'strijden'?", options: ["Neutraal", "Positief gevecht voor iets", "Negatief/geweld", "Beide B en C"], answer: 3, explanation: "'Strijden' kan zowel positief (voor rechtvaardigheid) als negatief (conflict) zijn." },
      { q: "Wat is een anakoloet?", options: ["Zinsbrekende constructie", "Rijmschema", "Vergelijking", "Inversie"], answer: 0, explanation: "Een anakoloet is een zin die grammaticaal niet klopt door een breuklijn." },
      { q: "Wat is inversie in een zin?", options: ["Omgekeerde volgorde onderwerp/werkwoord", "Herhaling", "Vergelijking", "Alliteratie"], answer: 0, explanation: "Bv: 'Gisteren liep ik...' — werkwoord voor onderwerp." },
      { q: "Wat is de functie van een tussenwerps?", options: ["Nadruk op gevoel", "Verbinding van zinnen", "Beschrijving", "Vraagstelling"], answer: 0, explanation: "Bv: 'Wauw!' — drukt gevoel of reactie uit." },
      { q: "Wat is een retoricische vraag?", options: ["Een vraag zonder verwacht antwoord", "Een ja/nee-vraag", "Een examenopgave", "Een open vraag"], answer: 0, explanation: "Gesteld om effect, niet om info: 'Is dat nou zo moeilijk?'" },
      { q: "Wat is het verschil tussen 'ik' en 'mij/me'?", options: ["Geen verschil", "'Ik' = onderwerp, 'mij/me' = object", "'Mij' = formeel, 'me' = informeel", "'Ik' = formeel"], answer: 1, explanation: "'Ik ga.' vs. 'Hij ziet mij.' — onderwerp vs. lijdend voorwerp." },
      { q: "Welke tekstvorm heeft een inleiding, kern en slot?", options: ["Roman", "Gedicht", "Betoog", "Haiku"], answer: 2, explanation: "Een betoog heeft altijd een inleiding, kern (argumenten) en conclusie." },
    ],
    klas3: [
      { q: "Welke literaire stroming hoort bij de 17e eeuw?", options: ["Romantiek", "Barok", "Naturalisme", "Modernisme"], answer: 1, explanation: "De Barok (17e eeuw): overdaad en vergankelijkheid." },
      { q: "Wat is een oxymoron?", options: ["Overdrijving", "Tegengestelde begrippen samen", "Herhaling", "Vergelijking"], answer: 1, explanation: "Bv: 'oorverdovende stilte'." },
      { q: "Welke schrijver schreef 'De aanslag'?", options: ["Multatuli", "Harry Mulisch", "Maarten 't Hart", "Arnon Grunberg"], answer: 1, explanation: "Harry Mulisch schreef 'De aanslag' in 1982." },
      { q: "Wat kenmerkt het Naturalisme?", options: ["Romantiek en gevoel", "Wetenschappelijk, determinisme", "Symboliek en mystiek", "Ironie en satire"], answer: 1, explanation: "Naturalisme: mens bepaald door erfelijkheid en milieu." },
      { q: "Wat is een monologue intérieur?", options: ["Dialoog", "Innerlijke gedachtenstroom", "Brief in roman", "Alwetende verteller"], answer: 1, explanation: "De lezer leest de ongeordende gedachten van een personage." },
      { q: "Welke stroming kenmerkt de 19e eeuw in Nederland?", options: ["Verlichting", "Romantiek", "Modernisme", "Barok"], answer: 1, explanation: "De Romantiek (ca. 1780-1850): gevoel, natuur, verleden." },
      { q: "Wat is een sonnet?", options: ["14-regelig gedicht", "8-regelig gedicht", "Vrij vers", "Episch gedicht"], answer: 0, explanation: "Een sonnet bestaat uit 14 regels (2 kwatrijnen + 2 terzetten)." },
      { q: "Wie schreef 'Max Havelaar'?", options: ["Vondel", "Multatuli", "Couperus", "Hermans"], answer: 1, explanation: "Multatuli (Eduard Douwes Dekker), 1860." },
      { q: "Wat is de Tachtigers-beweging?", options: ["Politieke beweging 1880", "Literaire vernieuwing 1880", "Schildersbeweging", "Wetenschappelijke school"], answer: 1, explanation: "Literaire vernieuwing rond 1880: 'kunst om de kunst'." },
      { q: "Wat is een cliffhanger?", options: ["Terugblik", "Open, spannend einde", "Inleiding", "Conclusie"], answer: 1, explanation: "Een cliffhanger laat de lezer in spanning achter." },
      { q: "Wat is het verschil tussen episch en lyrisch?", options: ["Geen verschil", "Episch = verhalend, lyrisch = gevoelsuitdrukking", "Episch = kort, lyrisch = lang", "Lyrisch = drama"], answer: 1, explanation: "Episch: verhaal vertellen. Lyrisch: gevoelens uiten (gedicht)." },
      { q: "Welke vertelperspectief gebruikt 'ik'?", options: ["Derde persoon", "Eerste persoon", "Tweede persoon", "Alwetend"], answer: 1, explanation: "Ik-perspectief = eerste persoon enkelvoud." },
      { q: "Wat is een proloog?", options: ["Hoofdstuk 1", "Inleiding vóór het verhaal", "Samenvatting", "Afsluiting"], answer: 1, explanation: "Een proloog gaat vooraf aan het eigenlijke verhaal." },
      { q: "Wat kenmerkt het Symbolisme?", options: ["Realisme", "Symbolen en suggestie i.p.v. directheid", "Satire", "Volksvertellingen"], answer: 1, explanation: "Symbolisten gebruiken symbolen om diepere betekenissen op te roepen." },
      { q: "Wat is een rederijker?", options: ["Middeleeuwse dichter/toneelspeler", "Moderne schrijver", "Wetenschapper", "Schilder"], answer: 0, explanation: "Rederijkers: middeleeuwse literaire genootschappen." },
      { q: "Wat is de term voor een verhaal-in-een-verhaal?", options: ["Mise en abyme", "Flashback", "Cliffhanger", "Epiloog"], answer: 0, explanation: "Mise en abyme: een verhaal dat zichzelf weerspiegelt." },
      { q: "Welke schrijver hoort bij het Existentialisme?", options: ["Dickens", "Sartre", "Shakespeare", "Vondel"], answer: 1, explanation: "Jean-Paul Sartre: 'L'existence précède l'essence'." },
      { q: "Wat is een gedachtestreepje voor?", options: ["Einde zin", "Tussenzin of pauze", "Citaat", "Vraag"], answer: 1, explanation: "Een gedachtestreepje zet een tussenzin af." },
      { q: "Wat is polyfonie in literatuur?", options: ["Eén vertelstem", "Meerdere gelijkwaardige stemmen", "Rijmschema", "Dialoog"], answer: 1, explanation: "Polyfonie: meerdere stemmen/perspectieven zonder dominante verteller (Dostojevski)." },
      { q: "Wat is ironie?", options: ["Zeggen wat je meent", "Het tegendeel zeggen van wat je meent", "Overdrijven", "Vergelijken"], answer: 1, explanation: "Ironie: je zegt het tegenovergestelde van wat je bedoelt." },
    ],
  },
  aardrijkskunde: {
    groep5: [
      { q: "Wat is de hoofdstad van Nederland?", options: ["Rotterdam", "Den Haag", "Amsterdam", "Utrecht"], answer: 2, explanation: "Amsterdam is de hoofdstad." },
      { q: "In welke provincie ligt Maastricht?", options: ["Brabant", "Limburg", "Gelderland", "Zeeland"], answer: 1, explanation: "Maastricht is de hoofdstad van Limburg." },
      { q: "Welke rivier stroomt door Nederland?", options: ["Donau", "Rijn", "Seine", "Theems"], answer: 1, explanation: "De Rijn stroomt vanuit Duitsland Nederland in." },
      { q: "Hoeveel provincies heeft Nederland?", options: ["10", "11", "12", "13"], answer: 2, explanation: "Nederland heeft 12 provincies." },
      { q: "Wat is het grootste meer in Nederland?", options: ["Veluwemeer", "IJsselmeer", "Markermeer", "Grevelingenmeer"], answer: 1, explanation: "Het IJsselmeer." },
      { q: "Welk land grenst aan Nederland in het oosten?", options: ["België", "Duitsland", "Frankrijk", "Engeland"], answer: 1, explanation: "Duitsland grenst aan de oostkant van Nederland." },
      { q: "Wat is de naam van het bekende Nederlandse landaanwinning-project?", options: ["Deltawerken", "Polders", "Veengebied", "Waddengebied"], answer: 1, explanation: "Polders zijn drooggelegde gebieden." },
      { q: "In welke provincie ligt Rotterdam?", options: ["Noord-Holland", "Zuid-Holland", "Utrecht", "Zeeland"], answer: 1, explanation: "Rotterdam ligt in Zuid-Holland." },
      { q: "Wat is een polder?", options: ["Een berg", "Drooggelegd stuk land", "Een bos", "Een rivier"], answer: 1, explanation: "Een polder is land gewonnen op het water." },
      { q: "Welke provincie is de grootste van Nederland?", options: ["Noord-Holland", "Zuid-Holland", "Friesland", "Gelderland"], answer: 3, explanation: "Gelderland is de grootste provincie." },
      { q: "Wat is het hoogste punt van Nederland?", options: ["Drielandenpunt", "Vaalserberg", "Utrechtse Heuvelrug", "Veluwe"], answer: 1, explanation: "De Vaalserberg (322 m) in Limburg." },
      { q: "Welke zee grenst aan de westkust van Nederland?", options: ["Middellandse Zee", "Noordzee", "Oostzee", "Atlantische Oceaan"], answer: 1, explanation: "De Noordzee." },
      { q: "In welke provincie ligt Den Haag?", options: ["Noord-Holland", "Zuid-Holland", "Utrecht", "Zeeland"], answer: 1, explanation: "Den Haag ligt in Zuid-Holland." },
      { q: "Wat is de Afsluitdijk?", options: ["Een brug", "Een dijk die de Zuiderzee afsluit", "Een snelweg", "Een kanaal"], answer: 1, explanation: "De Afsluitdijk (1932) sloot de Zuiderzee af." },
      { q: "Welk eiland hoort bij Nederland?", options: ["Corsica", "Texel", "Mallorca", "Sicilië"], answer: 1, explanation: "Texel is het grootste Waddeneiland." },
      { q: "Wat is de hoofdstad van Friesland?", options: ["Groningen", "Assen", "Leeuwarden", "Zwolle"], answer: 2, explanation: "Leeuwarden is de hoofdstad van Friesland." },
      { q: "Welke rivier verbindt Nederland met Duitsland via de oostgrens?", options: ["Maas", "Schelde", "Rijn", "Waal"], answer: 2, explanation: "De Rijn stroomt vanuit Duitsland Nederland in." },
      { q: "Wat is de naam van de Nederlandse wateren tussen de vastekust en de Waddeneilanden?", options: ["IJsselmeer", "Waddenzee", "Noordzee", "Markermeer"], answer: 1, explanation: "De Waddenzee, UNESCO Werelderfgoed." },
      { q: "Welke provincie grenst aan België?", options: ["Friesland", "Limburg", "Groningen", "Utrecht"], answer: 1, explanation: "Limburg en Zeeland/Noord-Brabant grenzen aan België." },
      { q: "Wat is een kustlijn?", options: ["Een bergketen", "De grens tussen land en zee", "Een rivier", "Een weg"], answer: 1, explanation: "De kustlijn is de grens tussen land en water." },
      { q: "In welke provincie ligt Groningen (stad)?", options: ["Friesland", "Drenthe", "Groningen", "Overijssel"], answer: 2, explanation: "De stad Groningen ligt in de provincie Groningen." },
      { q: "Welke rivier stroomt door Utrecht?", options: ["Rijn", "Maas", "Vecht", "IJssel"], answer: 2, explanation: "De Vecht stroomt door de provincie Utrecht." },
      { q: "Wat is de Delta?", options: ["Een vliegveld", "Laaglandgebied bij de riviermonding", "Een berg", "Een meer"], answer: 1, explanation: "De Nederlandse delta is het mondingsgebied van Rijn, Maas en Schelde." },
      { q: "Welk land grenst aan de zuidkant van Nederland?", options: ["Duitsland", "Frankrijk", "Engeland", "België"], answer: 3, explanation: "België grenst aan de zuidkant van Nederland." },
      { q: "Wat is de naam van het grootste Waddeneiland?", options: ["Vlieland", "Texel", "Terschelling", "Ameland"], answer: 1, explanation: "Texel is het grootste Waddeneiland." },
      { q: "In welke provincie ligt Eindhoven?", options: ["Limburg", "Zeeland", "Noord-Brabant", "Gelderland"], answer: 2, explanation: "Eindhoven ligt in Noord-Brabant." },
      { q: "Wat is een watersnoodgebied?", options: ["Een drooggelegd gebied", "Een gebied gevoelig voor overstromingen", "Een poldergebied", "Een estuarium"], answer: 1, explanation: "Lage en kustgebieden zijn vatbaar voor overstromingen." },
      { q: "Welke provincie heeft de meeste meren?", options: ["Zeeland", "Utrecht", "Friesland", "Noord-Holland"], answer: 2, explanation: "Friesland staat bekend om zijn meren (de Friese meren)." },
      { q: "Wat is de functie van een dijk?", options: ["Een weg door het water", "Een verhoging die land beschermt tegen water", "Een brug over een rivier", "Een sluis in een kanaal"], answer: 1, explanation: "Dijken beschermen laaggelegen land tegen overstromingen." },
    ],
    groep7: [
      { q: "Wat is de langste rivier ter wereld?", options: ["Amazone", "Nijl", "Mississippi", "Yangtze"], answer: 1, explanation: "De Nijl (ca. 6.650 km)." },
      { q: "Op welk continent ligt Brazilië?", options: ["Afrika", "Azië", "Zuid-Amerika", "Europa"], answer: 2, explanation: "Brazilië ligt in Zuid-Amerika." },
      { q: "Wat is het grootste land ter wereld?", options: ["China", "Canada", "VS", "Rusland"], answer: 3, explanation: "Rusland: 17,1 miljoen km²." },
      { q: "Welke oceaan ligt tussen Europa en Amerika?", options: ["Indische Oceaan", "Stille Oceaan", "Atlantische Oceaan", "Noordelijke IJszee"], answer: 2, explanation: "De Atlantische Oceaan." },
      { q: "Wat is de hoofdstad van Australië?", options: ["Sydney", "Melbourne", "Canberra", "Brisbane"], answer: 2, explanation: "Canberra, niet Sydney." },
      { q: "Welk continent heeft de meeste landen?", options: ["Azië", "Europa", "Afrika", "Amerika"], answer: 2, explanation: "Afrika heeft 54 landen." },
      { q: "Welke woestijn is de grootste ter wereld?", options: ["Sahara", "Gobi", "Arabische woestijn", "Antarctica"], answer: 3, explanation: "Antarctica is technisch gezien de grootste koude woestijn." },
      { q: "Wat is de hoofdstad van China?", options: ["Shanghai", "Beijing", "Hong Kong", "Guangzhou"], answer: 1, explanation: "Beijing is de hoofdstad." },
      { q: "Op welk continent ligt Egypte?", options: ["Azië", "Europa", "Afrika", "Zuid-Amerika"], answer: 2, explanation: "Egypte ligt in Noord-Afrika." },
      { q: "Wat is de hoogste berg ter wereld?", options: ["K2", "Mont Blanc", "Everest", "Kilimanjaro"], answer: 2, explanation: "De Mount Everest (8.849 m)." },
      { q: "Welk land heeft de meeste inwoners?", options: ["Rusland", "VS", "India", "China"], answer: 2, explanation: "India heeft in 2023 China gepasseerd als meest bevolkt land." },
      { q: "Wat is de hoofdstad van Japan?", options: ["Osaka", "Kyoto", "Tokyo", "Hiroshima"], answer: 2, explanation: "Tokyo is de hoofdstad van Japan." },
      { q: "Welke rivier stroomt door Parijs?", options: ["Rijn", "Donau", "Seine", "Loire"], answer: 2, explanation: "De Seine stroomt door Parijs." },
      { q: "Wat is de hoofdstad van Brazilië?", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"], answer: 2, explanation: "Brasília, niet Rio de Janeiro." },
      { q: "In welk continent ligt de Sahara?", options: ["Azië", "Afrika", "Europa", "Zuid-Amerika"], answer: 1, explanation: "De Sahara ligt in Noord-Afrika." },
      { q: "Wat is de kleinste staat ter wereld?", options: ["Monaco", "Vaticaan", "San Marino", "Liechtenstein"], answer: 1, explanation: "Vaticaanstad (0,44 km²)." },
      { q: "Welke zee ligt tussen Europa en Afrika?", options: ["Rode Zee", "Zwarte Zee", "Middellandse Zee", "Arabische Zee"], answer: 2, explanation: "De Middellandse Zee." },
      { q: "Wat is de hoofdstad van Canada?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: 3, explanation: "Ottawa is de hoofdstad." },
      { q: "Welke bergketen ligt in Zuid-Amerika?", options: ["Rocky Mountains", "Alpen", "Andes", "Himalaya"], answer: 2, explanation: "De Andes, langs de westkust van Zuid-Amerika." },
      { q: "Op welk continent ligt Nieuw-Zeeland?", options: ["Azië", "Oceanië", "Zuid-Amerika", "Antarctica"], answer: 1, explanation: "Nieuw-Zeeland behoort tot Oceanië." },
      { q: "Wat is de hoofdstad van Duitsland?", options: ["München", "Hamburg", "Berlijn", "Frankfurt"], answer: 2, explanation: "Berlijn is de hoofdstad van Duitsland." },
      { q: "Welk continent is het kleinst?", options: ["Europa", "Australië", "Zuid-Amerika", "Antarctica"], answer: 1, explanation: "Australië is zowel een land als een continent — het kleinste continent." },
      { q: "Wat is de hoofdstad van Spanje?", options: ["Barcelona", "Sevilla", "Madrid", "Valencia"], answer: 2, explanation: "Madrid is de hoofdstad van Spanje." },
      { q: "Door welk land stroomt de Amazone?", options: ["Peru", "Colombia", "Brazilië", "Venezuela"], answer: 2, explanation: "De meeste van de Amazone stroomt door Brazilië." },
      { q: "Wat is de hoofdstad van India?", options: ["Mumbai", "Delhi", "Calcutta", "Chennai"], answer: 1, explanation: "Nieuwe Delhi is de hoofdstad van India." },
      { q: "Welk gebergte scheidt Europa en Azië?", options: ["Alpen", "Ural", "Himalaya", "Kaukasus"], answer: 1, explanation: "Het Oeral-gebergte scheidt Europa van Azië." },
      { q: "Wat is de hoofdstad van Mexico?", options: ["Guadalajara", "Monterrey", "Mexico-Stad", "Tijuana"], answer: 2, explanation: "Mexico-Stad (Ciudad de México) is de hoofdstad." },
      { q: "Welke oceaan ligt ten oosten van Afrika?", options: ["Atlantische Oceaan", "Stille Oceaan", "Indische Oceaan", "Arctische Oceaan"], answer: 2, explanation: "De Indische Oceaan ligt ten oosten van Afrika." },
      { q: "Wat is de Stille Oceaan?", options: ["De kleinste oceaan", "De grootste oceaan ter wereld", "De diepste maar niet grootste", "De koudste oceaan"], answer: 1, explanation: "De Stille Oceaan (Pacifische Oceaan) is de grootste en diepste oceaan." },
    ],
    klas1: [
      { q: "Wat veroorzaakt eb en vloed?", options: ["De wind", "De maan", "De zon", "Aardbevingen"], answer: 1, explanation: "De aantrekkingskracht van de maan." },
      { q: "Wat is de oorzaak van seizoenen?", options: ["Afstand tot zon", "Kanteling aardas", "Maanstand", "Zonnevlekken"], answer: 1, explanation: "De aardas staat 23,5° scheef." },
      { q: "Wat is een delta?", options: ["Een berg", "Een riviermonding", "Een woestijn", "Een eiland"], answer: 1, explanation: "Vlak gebied bij de riviermonding." },
      { q: "Wat is een vulkaan?", options: ["Een erosiegebied", "Een opening in de aardkorst", "Een bergmeer", "Een gletsjer"], answer: 1, explanation: "Een vulkaan is een opening waaruit magma kan ontsnappen." },
      { q: "Wat is urbanisatie?", options: ["Ontbossing", "Trek naar de stad", "Industrie op het platteland", "Klimaatverandering"], answer: 1, explanation: "Urbanisatie = toenemende bevolkingsconcentratie in steden." },
      { q: "Wat is een monoculture in de landbouw?", options: ["Meerdere gewassen", "Eén gewas op grote schaal", "Biologische landbouw", "Kleine akkers"], answer: 1, explanation: "Monoculture = één gewas telen op grote oppervlakken." },
      { q: "Wat is migratie?", options: ["Klimaatverandering", "Verplaatsing van mensen", "Ontbossing", "Landbouw"], answer: 1, explanation: "Migratie is het verplaatsen van mensen van de ene naar de andere plek." },
      { q: "Wat is een regenwoud?", options: ["Een bos in droge gebieden", "Een tropisch bos met veel neerslag", "Een naaldbos", "Een savanne"], answer: 1, explanation: "Regenwouden hebben veel neerslag en enorme biodiversiteit." },
      { q: "Wat is een aardschors?", options: ["De kern van de aarde", "De buitenste laag van de aarde", "Het magma", "De atmosfeer"], answer: 1, explanation: "De aardkorst is de buitenste vaste laag van de aarde." },
      { q: "Wat is een stroomgebied?", options: ["Gebied rond een stad", "Gebied dat afwatert op één rivier", "Een stuwmeer", "Een delta"], answer: 1, explanation: "Het stroomgebied is het gebied waarvan regenwater naar één rivier stroomt." },
      { q: "Wat is erosie?", options: ["Afslijting van gesteente door wind/water", "Vulkaanuitbarsting", "Aardbevingsschade", "Sedimentvorming"], answer: 0, explanation: "Erosie = het afslijten en wegspoelen van gesteente." },
      { q: "Wat is een savanne?", options: ["Regenwoud", "Grasland met verspreide bomen", "Woestijn", "Toendra"], answer: 1, explanation: "Savanne: tropisch grasland met droge en natte seizoenen." },
      { q: "Wat is de equator?", options: ["De poolcirkel", "De denkbeeldige lijn rond het midden van de aarde", "De keerkring", "Een breedtegraad"], answer: 1, explanation: "De evenaar (0°) ligt op gelijke afstand van beide polen." },
      { q: "Wat is een breedtegraad?", options: ["Horizontale lijn op de globe", "Verticale lijn op de globe", "Een landkaart", "Een hoogtecurve"], answer: 0, explanation: "Breedtegraden lopen horizontaal (oost-west)." },
      { q: "Wat is industrialisatie?", options: ["Trek naar het platteland", "Overgang naar fabrieksproductie", "Biologische landbouw", "Toerisme"], answer: 1, explanation: "Industrialisatie = overgang van handwerk naar machineproductie." },
      { q: "Wat is een golfstroom?", options: ["Een windstroom", "Een warme of koude zeestroom", "Een rivier", "Een getijde"], answer: 1, explanation: "De Golfstroom brengt warm water van de tropen naar Europa." },
      { q: "Wat is sediment?", options: ["Vloeibaar gesteente", "Afzettingsmateriaal (zand, slib)", "Gas in de bodem", "Rotsen"], answer: 1, explanation: "Sediment: door water meegevoerd en afgezet materiaal." },
      { q: "Wat is een trekkerstam?", options: ["Een volk met een vaste woonplaats", "Een nomadisch volk", "Een stadsgroep", "Een boerenvolk"], answer: 1, explanation: "Nomaden trekken van plek naar plek, bv. voor vee of voedsel." },
      { q: "Wat is globalisering?", options: ["Lokale handel", "Toenemende wereldwijde verbondenheid", "Nationalisme", "Isolationisme"], answer: 1, explanation: "Globalisering = toenemende economische, culturele en politieke verbondenheid." },
      { q: "Wat is een lengtegraad?", options: ["Horizontale lijn", "Verticale lijn op de globe", "Een hoogtecurve", "Een windrichting"], answer: 1, explanation: "Lengtegraden lopen verticaal (noord-zuid)." },
      { q: "Wat is een agglomeratie?", options: ["Een dunbevolkt gebied", "Een aaneengesloten stedelijk gebied van meerdere steden", "Een industriegebied", "Een haven"], answer: 1, explanation: "Agglomeratie: meerdere steden die samen als één stedelijk geheel functioneren." },
      { q: "Wat is een windrichting?", options: ["De richting waar de wind naartoe gaat", "De richting waar de wind vandaan komt", "De snelheid van de wind", "De kracht van de wind"], answer: 1, explanation: "Een windrichting geeft aan waar de wind vandaan waait (bv. westenwind = van het westen)." },
      { q: "Wat is een topografische kaart?", options: ["Een kaart met klimaatgegevens", "Een kaart die hoogteverschillen en landkenmerken toont", "Een politieke kaart", "Een satellietfoto"], answer: 1, explanation: "Topografische kaarten tonen hoogtelijnen (isohypsen) en landvormen." },
      { q: "Wat is een stroomgebied (hydrologie)?", options: ["Het gebied rondom een stad", "Het totale gebied waarvan regenwater afwatert via één riviernetwerk naar zee", "Een overstromingsgebied", "Een stuwmeer"], answer: 1, explanation: "Het stroomgebied van de Rijn omvat alle gebieden die afwateren op de Rijn." },
      { q: "Wat is een moessonklimaat?", options: ["Een droog klimaat", "Een klimaat met droge en natte seizoenen door seizoensgebonden winden", "Een poolklimaat", "Een gematigd klimaat"], answer: 1, explanation: "Moessonklimaat in Zuid-Azië: natte zomer, droge winter door wisselende windrichtingen." },
      { q: "Wat is een vulkanische ring of fire?", options: ["Een vulkaan in Afrika", "Gebied met veel vulkanen en aardbevingen rond de Stille Oceaan", "Een geiser", "Een koraalkust"], answer: 1, explanation: "Ring of Fire: de rand van de Stille Oceaan heeft de meeste vulkanen en aardbevingen." },
      { q: "Wat is het verschil tussen een delta en een estuarium?", options: ["Geen verschil", "Delta = driehoekige opvulling bij monding; estuarium = brede trechtervormige monding", "Estuarium heeft meer sediment", "Delta is getijde-afhankelijk"], answer: 1, explanation: "Delta: Nijl, Ganges. Estuarium: Schelde, Thames — brede, diepere trechtermond." },
      { q: "Wat is een anticycloon?", options: ["Een orkaan", "Een hogedrukgebied met stabiel, droog weer", "Een lagedrukgebied", "Een depressie"], answer: 1, explanation: "Anticyclonen (hogedruk) brengen rustig, droog weer. Cyclonen brengen regen en wind." },
      { q: "Wat is de bevolkingsdichtheid?", options: ["Het totale aantal inwoners", "Het aantal inwoners per km²", "De bevolkingsgroei", "De urbanisatiegraad"], answer: 1, explanation: "Bevolkingsdichtheid = aantal mensen / oppervlakte in km²." },
    ],
    klas3: [
      { q: "Wat is het broeikaseffect?", options: ["Opwarming door CO2", "Afkoeling atmosfeer", "Ozongat", "Zure regen"], answer: 0, explanation: "Broeikasgassen houden warmte vast in de atmosfeer." },
      { q: "Wat zijn tektonische platen?", options: ["Wolkenformaties", "Stukken aardkorst", "Oceaanstromen", "Windpatronen"], answer: 1, explanation: "Grote stukken aardkorst die langzaam bewegen." },
      { q: "Wat is het demografisch transitiemodel?", options: ["Model van bevolkingsgroei naar stabilisatie", "Model van migratie", "Economisch model", "Klimaatmodel"], answer: 0, explanation: "Beschrijft de overgang van hoge naar lage geboortecijfers." },
      { q: "Wat is een megastad?", options: ["Een stad met > 1 miljoen", "Een stad met > 10 miljoen inwoners", "Elke grote stad", "Een hoofdstad"], answer: 1, explanation: "Megasteden hebben meer dan 10 miljoen inwoners (bv. Tokyo)." },
      { q: "Wat is het HDI?", options: ["Economische index", "Human Development Index", "Handelsdeficit Index", "Humane Duurzaamheids Index"], answer: 1, explanation: "HDI meet levensverwachting, onderwijs en inkomen." },
      { q: "Wat is een push-factor bij migratie?", options: ["Betere kansen elders", "Reden om een land te verlaten", "Taalbarrière", "Familiebanden"], answer: 1, explanation: "Push-factoren drijven mensen weg: armoede, oorlog, ramp." },
      { q: "Wat is het Kyoto-protocol?", options: ["Handelsverdrag", "Internationaal klimaatverdrag", "VN-grondwet", "Migratiepact"], answer: 1, explanation: "Kyoto (1997): reductiedoelen voor CO2-uitstoot." },
      { q: "Wat is suburbanisatie?", options: ["Meer mensen naar steden", "Trek vanuit steden naar randgemeenten", "Plattelandsontwikkeling", "Industriegroei"], answer: 1, explanation: "Suburbanisatie = mensen verlaten de stad voor de buitenwijken." },
      { q: "Wat is een tipping point in het klimaat?", options: ["Een weersextreem", "Een omslagpunt zonder terug", "Een klimaatverdrag", "Een meetstation"], answer: 1, explanation: "Een tipping point is een drempelwaarde: eenmaal overschreden, onomkeerbare verandering." },
      { q: "Wat is een mondiaal distributiecentrum?", options: ["Een winkelcentrum", "Knooppunt voor wereldwijde goederenstromen", "Een haven", "Een vliegveld"], answer: 1, explanation: "Bv. Rotterdam: knooppunt voor mondiale logistiek." },
      { q: "Wat is de ecologische voetafdruk?", options: ["Maat voor biodiversiteit", "Benodigde oppervlakte voor levensstijl", "CO2-uitstoot per persoon", "Waterverbruik"], answer: 1, explanation: "De oppervlakte die nodig is voor het levensonderhoud van een persoon." },
      { q: "Wat is een klimaatrefugee?", options: ["Iemand op vakantie", "Iemand gedwongen te vluchten door klimaat", "Een milieu-activist", "Een wetenschapper"], answer: 1, explanation: "Klimaatvluchtelingen verlaten hun thuis door bv. overstroming of droogte." },
      { q: "Wat beschrijft het begrip 'world city'?", options: ["Elke grote stad", "Een stad met mondiale economische invloed", "Een VN-stad", "Een toeristische stad"], answer: 1, explanation: "World cities (bv. New York, Londen) zijn centra van wereldeconomie." },
      { q: "Wat is desertificatie?", options: ["Verdwijnen van woestijnen", "Uitbreiding van woestijnen", "Bosgroei", "IJsvorming"], answer: 1, explanation: "Desertificatie: droge gebieden breiden zich uit door o.a. ontbossing." },
      { q: "Wat is het verschil tussen klimaat en weer?", options: ["Geen", "Klimaat = lange termijn gemiddelde, weer = actueel", "Klimaat = lokaal", "Weer = globaal"], answer: 1, explanation: "Weer = nu; klimaat = gemiddeld over 30 jaar." },
      { q: "Wat is een BRICS-land?", options: ["Een EU-land", "Een snel groeiende economie", "Een ontwikkelingsland", "Een eilandstaat"], answer: 1, explanation: "BRICS: Brazilië, Rusland, India, China, Zuid-Afrika — opkomende economieën." },
      { q: "Wat is het Parijs-akkoord?", options: ["Handelsverdrag", "Klimaatverdrag (2015) max. 1,5°C opwarming", "Migratieverdrag", "Veiligheidsverdrag"], answer: 1, explanation: "Het Parijs-akkoord (2015) wil opwarming beperken tot 1,5-2°C." },
      { q: "Wat is biocapaciteit?", options: ["Technologische capaciteit", "Productiviteit van een ecosysteem", "Menselijke draagkracht", "Industriële output"], answer: 1, explanation: "Biocapaciteit = het vermogen van ecosystemen om hulpbronnen te leveren." },
      { q: "Wat zijn greenhouse gases?", options: ["Gassen in een kas", "CO2, methaan e.a. die warmte vasthouden", "Schone lucht", "Stikstof"], answer: 1, explanation: "Broeikasgassen (CO2, CH4, N2O) houden warmte vast." },
      { q: "Wat is een transitiezone?", options: ["Een snelweg", "Overgangsgebied tussen twee klimaatzones", "Een kustgebied", "Een industriepark"], answer: 1, explanation: "Bv. de Sahel: overgang tussen Sahara en savanne." },
      { q: "Wat is het begrip 'core-periphery' (kern-periferie)?", options: ["Binnenland vs. kust", "Ongelijke machtsverhouding tussen ontwikkelde kernen en afhankelijke randgebieden", "Stadscentrum vs. buitenwijk", "Noord vs. Zuid"], answer: 1, explanation: "Kern-periferie: rijke landen exploiteren armere randgebieden (wereld-systeem theorie)." },
      { q: "Wat is de vruchtbare sikkel?", options: ["Een landbouwinstrument", "Historisch vruchtbaar gebied in het Midden-Oosten, wieg van landbouw", "Een rivier in Afrika", "Een irrigatiesysteem"], answer: 1, explanation: "De vruchtbare sikkel (Mesopotamië, Levant) was de geboorteplaats van de landbouw." },
      { q: "Wat is het Urban Heat Island-effect?", options: ["Hittegolven in woestijnen", "Steden zijn warmer dan omliggend platteland door bebouwing en industrie", "Opwarming door vulkanen", "El Niño-effect"], answer: 1, explanation: "Steden absorberen meer warmte door steen, asfalt en warmteproductie." },
      { q: "Wat is het verschil tussen pull- en push-factoren bij migratie?", options: ["Geen verschil", "Push = drijft mensen weg; pull = trekt mensen aan", "Pull = armoede, push = welvaart", "Beide zijn economisch"], answer: 1, explanation: "Push: oorlog, armoede. Pull: betere kansen, veiligheid elders." },
      { q: "Wat is geopolitiek?", options: ["Interne politiek", "De invloed van geografie op politieke macht en internationale betrekkingen", "Economische geografie", "Klimaatpolitiek"], answer: 1, explanation: "Geopolitiek: hoe ligging, grondstoffen en geografie politieke verhoudingen bepalen." },
      { q: "Wat is het Kyoto-protocol gericht op?", options: ["Handelsverdrag", "Reductie van broeikasgasuitstoot door geïndustrialiseerde landen", "Biodiversiteitsbehoud", "Oceaanvervuiling"], answer: 1, explanation: "Kyoto (1997) verplicht rijke landen tot vermindering van CO₂-uitstoot." },
      { q: "Wat is een geostationaire baan?", options: ["Een laag-aardse baan", "Een satellietbaan waarbij de satelliet gelijke omlooptijd heeft als de aardrotatie", "Een polaire baan", "Een maanbaan"], answer: 1, explanation: "Geostationaire satellieten staan altijd boven hetzelfde punt op aarde — gebruikt voor tv en weer." },
      { q: "Wat is het concept 'sustainable development' (duurzame ontwikkeling)?", options: ["Economische groei ten koste van milieu", "Ontwikkeling die voldoet aan huidige behoeften zonder toekomstige generaties te benadelen", "Energiebesparing alleen", "Industriële groei"], answer: 1, explanation: "Brundtland-definitie (1987): duurzame ontwikkeling balanceert economie, sociaal en milieu." },
      { q: "Wat is het 'demografisch dividend'?", options: ["Hoge bevolkingsgroei", "Economisch voordeel wanneer de werkzame bevolking groter is dan afhankelijken", "Kindersterfte dalen", "Vergrijzing"], answer: 1, explanation: "Demografisch dividend: grote groep werkenden → economische groei (zoals in Oost-Azië jaren 70-90)." },
    ],
  },
  geschiedenis: {
    groep5: [
      { q: "Wie was Willem van Oranje?", options: ["Een schilder", "Vader des Vaderlands", "Een ontdekkingsreiziger", "Een wetenschapper"], answer: 1, explanation: "Leidde de opstand tegen Spanje." },
      { q: "Wanneer was de Tweede Wereldoorlog?", options: ["1914-1918", "1939-1945", "1940-1944", "1935-1945"], answer: 1, explanation: "1939-1945." },
      { q: "Wat is de VOC?", options: ["Een school", "Een handelscompagnie", "Een leger", "Een kerk"], answer: 1, explanation: "Verenigde Oost-Indische Compagnie (1602)." },
      { q: "In welke tijd leefden de Romeinen in Nederland?", options: ["Middeleeuwen", "Oudheid", "Gouden Eeuw", "Steentijd"], answer: 1, explanation: "De Oudheid, ca. 50 v.Chr. - 400 n.Chr." },
      { q: "Wat was D-Day?", options: ["Einde WO2", "Geallieerde landing in Normandië", "Begin WO1", "Bevrijding van Amsterdam"], answer: 1, explanation: "6 juni 1944: landing in Normandië." },
      { q: "Wie was Adolf Hitler?", options: ["President VS", "Leider nazi-Duitsland", "Russische tsaar", "Italiaans dictator"], answer: 1, explanation: "Hitler was de dictator van nazi-Duitsland (1933-1945)." },
      { q: "Wat gebeurde er op 5 mei 1945 in Nederland?", options: ["Begin WO2", "Bevrijding van Nederland", "Einde WO1", "Oprichting EU"], answer: 1, explanation: "5 mei 1945: bevrijding van Nederland." },
      { q: "Wat zijn de piramides van Gizeh?", options: ["Middeleeuwse burchten", "Oude Egyptische grafmonumenten", "Griekse tempels", "Romeinse koepels"], answer: 1, explanation: "Piramides: grafmonumenten voor farao's, ca. 2.500 v.Chr." },
      { q: "Wat was de Steentijd?", options: ["Een periode met veel oorlogen", "Vroegste periode van de mensheid, gereedschap van steen", "De Middeleeuwen", "De Oudheid"], answer: 1, explanation: "Steentijd: vroegste tijdperk, mensen maakten gereedschap van steen." },
      { q: "Wie was Christoffel Columbus?", options: ["Een Spaans koning", "Een Italiaanse ontdekkingsreiziger", "Een piraat", "Een soldaat"], answer: 1, explanation: "Columbus ontdekte Amerika in 1492." },
      { q: "Wat was de Middeleeuwen?", options: ["500 - 1500 n.Chr.", "100 v.Chr. - 100 n.Chr.", "1500 - 1800", "1800 - 1900"], answer: 0, explanation: "De Middeleeuwen: ca. 500-1500 n.Chr." },
      { q: "Wat was de Gouden Eeuw voor Nederland?", options: ["16e eeuw", "17e eeuw", "18e eeuw", "19e eeuw"], answer: 1, explanation: "17e eeuw: handel, kunst en wetenschap bloeiden." },
      { q: "Wie was Napoleon Bonaparte?", options: ["Engelse admiraal", "Franse keizer", "Russische tsaar", "Spaanse koning"], answer: 1, explanation: "Napoleon was keizer van Frankrijk (1804-1814/15)." },
      { q: "Wat was de Slag bij Waterloo?", options: ["Napoleons grootste overwinning", "Napoleons definitieve nederlaag", "Begin WO1", "Begin WO2"], answer: 1, explanation: "1815: Napoleon verslagen bij Waterloo." },
      { q: "Wat was de rol van de NSB in WO2?", options: ["Verzetsgroep", "Nederlandse nazi-collaborateurs", "Joodse organisatie", "Hulporganisatie"], answer: 1, explanation: "NSB: Nationaal-Socialistische Beweging, collaboreerde met de Duitsers." },
      { q: "Wat was de Berlijnse Muur?", options: ["Een kunstwerk", "Muur die Berlijn verdeelde (1961-1989)", "Een historische verdedigingswal", "Een grens bij de Rijn"], answer: 1, explanation: "De muur scheidde Oost- en West-Berlijn." },
      { q: "Wat was de rol van Anne Frank?", options: ["Verzetsheldin", "Joods meisje dat een dagboek schreef terwijl ze onderdook", "Koningin", "Schrijfster na WO2"], answer: 1, explanation: "Anne Frank schreef haar dagboek tijdens de bezetting." },
      { q: "Wanneer was WO1?", options: ["1900-1910", "1914-1918", "1920-1925", "1939-1945"], answer: 1, explanation: "Eerste Wereldoorlog: 1914-1918." },
      { q: "Wat was de IJzeren Gordijn?", options: ["Een grens in WO2", "Denkbeeldige grens Oost-West tijdens Koude Oorlog", "Een verdedigingswerk", "Een spoorlijn"], answer: 1, explanation: "De IJzeren Gordijn scheidde het communistische Oosten van het Westen." },
      { q: "Wat is een feodale samenleving?", options: ["Een democratie", "Een samenleving met leenheren en lijfeigenen", "Een stadsstaat", "Een koninkrijk"], answer: 1, explanation: "Feodalisme: leenheren geven land in ruil voor diensten." },
      { q: "Wie was Rembrandt van Rijn?", options: ["Een ontdekkingsreiziger", "Een beroemde Nederlandse schilder uit de Gouden Eeuw", "Een politicus", "Een zeeheld"], answer: 1, explanation: "Rembrandt (1606-1669) schilderde o.a. De Nachtwacht." },
      { q: "Wat waren de kruistochten?", options: ["Handelsexpedities naar Azië", "Militaire tochten van christenen naar het Heilige Land", "Ontdekkingsreizen naar Amerika", "Viking-invallen in Europa"], answer: 1, explanation: "Kruistochten (1096-1291): Europese christenen probeerden Jeruzalem te veroveren." },
      { q: "Wat is de Renaissance?", options: ["Een oorlog", "Culturele en artistieke hergeboorte in Europa (14e-17e eeuw)", "Een politieke beweging", "Een godsdienstige stroming"], answer: 1, explanation: "Renaissance = 'wedergeboorte': herleving van Griekse en Romeinse cultuur." },
      { q: "Wie was Michiel de Ruyter?", options: ["Een schilder", "Een Nederlandse admiraal uit de 17e eeuw", "Een ontdekkingsreiziger", "Een dichter"], answer: 1, explanation: "Michiel de Ruyter (1607-1676) was de beroemdste Nederlandse admiraal." },
      { q: "Wat was de rol van de kerk in de Middeleeuwen?", options: ["Geen macht", "Enorme religieuze, politieke en culturele macht in Europa", "Alleen religie, geen politiek", "Alleen in Italië van belang"], answer: 1, explanation: "De katholieke kerk had enorme invloed op politiek, onderwijs en dagelijks leven." },
      { q: "Wanneer begon de Eerste Wereldoorlog?", options: ["1910", "1914", "1918", "1939"], answer: 1, explanation: "WO1 begon in 1914 na de aanslag op Franz Ferdinand in Sarajevo." },
      { q: "Wat was de Spaanse Armada?", options: ["Een Spaanse piratengroep", "De Spaanse vloot die Engeland wilde veroveren (1588)", "Een handelsvloot", "Een koloniale expeditie"], answer: 1, explanation: "De Spaanse Armada (1588) werd verslagen door Engeland, een klap voor Spanje." },
      { q: "Wat is slavernij?", options: ["Gedwongen arbeid met loon", "Mensen die eigendom zijn van anderen en gedwongen worden te werken", "Tijdelijke arbeid", "Contractarbeid"], answer: 1, explanation: "Slavernij: mensen als eigendom, vaak verbonden met transatlantische slavenhandel." },
      { q: "Wat was de Verlichting?", options: ["Uitvinding elektriciteit", "18e-eeuwse stroming die rede en vrijheid boven religie stelde", "Een religieuze beweging", "De industriële revolutie"], answer: 1, explanation: "Verlichtingsdenkers als Voltaire, Rousseau en Locke benadrukten vrijheid en rede." },
    ],
    groep7: [
      { q: "Wanneer begon de Gouden Eeuw?", options: ["15e eeuw", "16e eeuw", "17e eeuw", "18e eeuw"], answer: 2, explanation: "17e eeuw (1600-1700)." },
      { q: "Wie schilderde De Nachtwacht?", options: ["Vermeer", "Van Gogh", "Rembrandt", "Hals"], answer: 2, explanation: "Rembrandt van Rijn, 1642." },
      { q: "Wat was de Watersnoodramp?", options: ["1950", "1953", "1955", "1960"], answer: 1, explanation: "1953, trof Zeeland en Zuid-Holland." },
      { q: "Wat was de Industriële Revolutie?", options: ["Politieke revolutie", "Overgang naar fabrieksproductie (18e-19e eeuw)", "Een oorlog", "Een artistieke beweging"], answer: 1, explanation: "De Industriële Revolutie transformeerde de economie." },
      { q: "Wat was het Marshallplan?", options: ["Militair plan WO2", "Amerikaans hulpplan voor Europa na WO2", "Russisch expansieplan", "Europees verdrag"], answer: 1, explanation: "VS hielp Europa na WO2 met miljarden dollars." },
      { q: "Wat was de Koude Oorlog?", options: ["Een letterlijke koude oorlog", "Politieke spanning VS vs Sovjet-Unie", "WO3", "Een handelsoorlog"], answer: 1, explanation: "Koude Oorlog: ca. 1947-1991, ideologische strijd." },
      { q: "Wanneer vond de bestorming van de Bastille plaats?", options: ["1776", "1789", "1815", "1848"], answer: 1, explanation: "14 juli 1789: begin van de Franse Revolutie." },
      { q: "Wat was de Holocaust?", options: ["Een vulkaanuitbarsting", "Systematische moord op 6 miljoen Joden door nazi's", "Een epidemie", "Een hongersnood"], answer: 1, explanation: "De Holocaust: genocide door nazi-Duitsland." },
      { q: "Wie was Martin Luther King Jr.?", options: ["Een Duitse theoloog", "Amerikaanse burgerrechtenactivist", "Een president", "Een militaire leider"], answer: 1, explanation: "MLK streed voor gelijke rechten voor Afro-Amerikanen." },
      { q: "Wat was de Slag om de Atlantische Oceaan?", options: ["Een zeeslag WO1", "Strijd om bevoorradingsroutes WO2", "Een handelsoorlog", "Een piratenoorlog"], answer: 1, explanation: "Duitsland probeerde Britse bevoorradingslijnen af te snijden." },
      { q: "Wat was Apartheid?", options: ["Een Australisch systeem", "Officieel rassenscheidingsstelsel in Zuid-Afrika", "Een Indiaas kastenstelsel", "Slavernij in Amerika"], answer: 1, explanation: "Apartheid in Zuid-Afrika: 1948-1994." },
      { q: "Wanneer werd de VN opgericht?", options: ["1918", "1939", "1945", "1950"], answer: 2, explanation: "De Verenigde Naties: 1945, na WO2." },
      { q: "Wat was de Perestrojka?", options: ["Russische militaire doctrine", "Gorbatsjovs hervormingsprogramma", "Een kernramp", "Een Russische revolutie"], answer: 1, explanation: "Perestrojka (1986): economische hervorming onder Gorbatsjov." },
      { q: "Wanneer viel de Berlijnse Muur?", options: ["1985", "1987", "1989", "1991"], answer: 2, explanation: "9 november 1989." },
      { q: "Wat was de Eerste Wereldoorlog?", options: ["1900-1910", "1914-1918", "1920-1930", "1939-1945"], answer: 1, explanation: "WO1: 1914-1918, ook wel 'de Grote Oorlog'." },
      { q: "Welk verdrag beëindigde WO1?", options: ["Verdrag van Utrecht", "Verdrag van Versailles", "Verdrag van Parijs", "Akkoord van Wenen"], answer: 1, explanation: "Het Verdrag van Versailles (1919)." },
      { q: "Wat was de Olympische Spelen van 1936?", options: ["Eerste moderne spelen", "Hitlers propagandaspelen in Berlijn", "Eerste Winterspelen", "Geannuleerde spelen"], answer: 1, explanation: "Berlijn 1936: door Hitler gebruikt als propaganda." },
      { q: "Wie was Mahatma Gandhi?", options: ["Indiaas militair leider", "Leider van geweldloze onafhankelijkheidsstrijd India", "Pakistans eerste president", "Een Britse gouverneur"], answer: 1, explanation: "Gandhi leidde de geweldloze strijd voor Indiase onafhankelijkheid." },
      { q: "Wat was de Cubacrisis?", options: ["Cubaanse revolutie", "Nucleaire dreiging VS-Sovjet-Unie in 1962", "Inval in Cuba 1961", "Handelsembargo op Cuba"], answer: 1, explanation: "1962: Sovjet-Unie plaatste kernraketten op Cuba." },
      { q: "Wanneer werd de EU opgericht?", options: ["1945", "1957", "1992", "2000"], answer: 1, explanation: "Verdrag van Rome (1957) stichtte de EEG, voorloper van de EU." },
      { q: "Wat was de impact van de Industriële Revolutie op de samenleving?", options: ["Meer boerderijen", "Verstedelijking, fabrieksarbeid en sociale ongelijkheid groeiden", "Minder productie", "Meer feodalisme"], answer: 1, explanation: "Industrialisatie: trek naar steden, fabriekssysteem, nieuwe arbeidersklasse." },
      { q: "Wat was de Reformatie?", options: ["Een politieke revolutie", "Religieuze vernieuwingsbeweging die leidde tot het protestantisme (Luther 1517)", "Een artistieke beweging", "Een economische hervorming"], answer: 1, explanation: "Luther, Calvijn en Zwingli hervormden het christendom. Scheuring van de kerk." },
      { q: "Wat was de Tachtigjarige Oorlog?", options: ["Een wereldoorlog", "Nederlandse Opstand tegen Spanje (1568-1648)", "Een burgeroorlog in Engeland", "Een Napoleon-oorlog"], answer: 1, explanation: "De Tachtigjarige Oorlog leidde tot de onafhankelijkheid van de Republiek der Zeven Provinciën." },
      { q: "Wat was het Akkoord van München (1938)?", options: ["Handelsovereenkomst", "Britisch-Frans toegeven aan Hitlers eisen over Tsjecho-Slowakije", "Vrede na WO1", "NATO-oprichting"], answer: 1, explanation: "München 1938: Chamberlain gaf Sudetenland aan Hitler — klassiek voorbeeld van appeasement." },
      { q: "Wat was de rol van de SS in Nazi-Duitsland?", options: ["Een militaire eenheid voor verdediging", "Elite-paramilitaire organisatie die concentratiekampen beheerde en terreur uitvoerde", "Een economische organisatie", "De Duitse politie"], answer: 1, explanation: "De SS (Schutzstaffel) was verantwoordelijk voor de uitvoering van de Holocaust." },
      { q: "Wie was Winston Churchill?", options: ["VS-president tijdens WO2", "Britse premier die leiding gaf aan de strijd tegen Hitler", "Russische leider", "Frans generaal"], answer: 1, explanation: "Churchill (1874-1965): Britse premier, symbool van Brits verzet tegen Hitler." },
      { q: "Wat was het IJzeren Gordijn?", options: ["Een muur in Berlijn", "Denkbeeldige grens die West-Europa van de communistische Oostblok scheidde", "Een verdedigingslinie in WO1", "Een handelsbarrière"], answer: 1, explanation: "Het IJzeren Gordijn (Churchill, 1946) symboliseerde de politieke scheiding van Europa." },
      { q: "Wat betekende dekolonisatie voor Afrika?", options: ["Meer kolonies", "Afrikaanse landen werden onafhankelijk na WO2", "Meer Europese controle", "Economische integratie met Europa"], answer: 1, explanation: "Na 1945 werd Afrika grotendeels onafhankelijk: Ghana (1957), Nigeria (1960), enz." },
      { q: "Wat was de Veluwse Oproer of Patriottenbeweging in Nederland?", options: ["Een boerenopstand", "Een 18e-eeuwse democratische beweging die het gezag van de stadhouder betwistte", "Een religieuze beweging", "Een handelsdispuut"], answer: 1, explanation: "De Patriotten (jaren 1780) streefden naar meer volkssoevereiniteit en minder Oranje-macht." },
    ],
    klas1: [
      { q: "Wanneer viel de Berlijnse Muur?", options: ["1985", "1987", "1989", "1991"], answer: 2, explanation: "9 november 1989." },
      { q: "Wie was Anne Frank?", options: ["Verzetsheldin", "Joods meisje dat een dagboek schreef", "Koningin", "Schrijfster na de oorlog"], answer: 1, explanation: "Anne Frank dook onder en schreef haar dagboek." },
      { q: "Wat was de Verlichting?", options: ["Uitvinding elektriciteit", "Filosofische stroming 18e eeuw", "Religieuze beweging", "Industriële revolutie"], answer: 1, explanation: "18e-eeuwse stroming: rede en individuele vrijheid." },
      { q: "Wanneer was de Franse Revolutie?", options: ["1776", "1789", "1815", "1848"], answer: 1, explanation: "1789: bestorming van de Bastille." },
      { q: "Wat was de Koude Oorlog?", options: ["Letterlijk een koude oorlog", "Ideologische strijd VS vs USSR", "WO3", "Een handelsoorlog"], answer: 1, explanation: "Ca. 1947-1991." },
      { q: "Wat was kolonialisme?", options: ["Binnenlandse politiek", "Bezetting en exploitatie van gebieden door Europese mogendheden", "Handelsovereenkomsten", "Wetenschappelijk onderzoek"], answer: 1, explanation: "Europese landen namen gebieden in bezit in Afrika, Azië, Amerika." },
      { q: "Wat was de Haagse vredesconferentie?", options: ["WO2-vredesoverleg", "Eerste internationale vredesconferentie (1899)", "NATO-oprichting", "VN-vergadering"], answer: 1, explanation: "Den Haag 1899: internationale vredesregels vastgelegd." },
      { q: "Wat was de dekolonisatie?", options: ["Nieuwe kolonies stichten", "Kolonies worden onafhankelijk (na WO2)", "Handelsbeleid", "Volksverhuizing"], answer: 1, explanation: "Na WO2 werden veel koloniën zelfstandig." },
      { q: "Wanneer werd de NATO opgericht?", options: ["1945", "1949", "1957", "1968"], answer: 1, explanation: "NATO: 1949, militaire samenwerking West." },
      { q: "Wat was de Weimarrepubliek?", options: ["WO2-Duitsland", "Democratisch Duitsland 1919-1933", "Oost-Duitsland", "Nazi-Duitsland"], answer: 1, explanation: "De Weimarrepubliek: Duitsland na WO1 tot machtsovername Hitler." },
      { q: "Wie was Nelson Mandela?", options: ["Nigeriaanse president", "Eerste zwarte president van Zuid-Afrika", "Keniaanse activist", "VN-secretaris-generaal"], answer: 1, explanation: "Mandela: gevangene, president, symbool van vrijheidsstrijd." },
      { q: "Wat was de Eerste Wereldoorlog?", options: ["1900-1910", "1914-1918", "1920-1930", "1939-1945"], answer: 1, explanation: "WO1: 1914-1918." },
      { q: "Wat was de Russische Revolutie?", options: ["1905", "1917", "1921", "1925"], answer: 1, explanation: "1917: de Bolsjewieken onder Lenin namen de macht over." },
      { q: "Wat was het Verdrag van Versailles?", options: ["Vredesverdrag na WO2", "Vredesverdrag na WO1", "Begin van EU", "Einde van de Koude Oorlog"], answer: 1, explanation: "Versailles 1919: bestrafte Duitsland na WO1." },
      { q: "Wat is een totalitair regime?", options: ["Een democratie", "Absolute staatsmacht over alle levensgebieden", "Een constitutionele monarchie", "Een parlementaire democratie"], answer: 1, explanation: "Totalitarisme: staat controleert alle aspecten van het leven." },
      { q: "Wat was de Marshall-hulp?", options: ["Militaire hulp tijdens WO2", "Economische hulp van VS aan West-Europa na WO2", "Een defensieverdrag", "Een politiek akkoord"], answer: 1, explanation: "Het Marshallplan herstelde de West-Europese economie." },
      { q: "Wanneer was de Val van Constantinopel?", options: ["1348", "1453", "1492", "1517"], answer: 1, explanation: "1453: Ottomanen veroverden Byzantijnse hoofdstad." },
      { q: "Wat was de Reconquista?", options: ["Spaanse veroveringen in Amerika", "Herovering van het Iberisch schiereiland op de Moren", "Kruistochten", "Inquisitie"], answer: 1, explanation: "Reconquista: 8e-15e eeuw, christenen heroveren Spanje en Portugal." },
      { q: "Wat was de Magna Carta?", options: ["Eerste Britse grondwet", "Overeenkomst tussen koning en adel (1215)", "Een kerkelijk document", "Een handvest van de VN"], answer: 1, explanation: "Magna Carta (1215) beperkte de macht van de Engelse koning." },
      { q: "Wanneer begon de Reformatie?", options: ["1400", "1517", "1600", "1789"], answer: 1, explanation: "1517: Luther sloeg zijn stellingen aan de kerkdeur." },
      { q: "Wat was de Onafhankelijkheidsverklaring van de VS (1776)?", options: ["Begin van de Burgeroorlog", "Verklaring waarbij de 13 kolonies zich afscheidden van Engeland", "Einde van de onafhankelijkheidsoorlog", "Grondwetsherziening"], answer: 1, explanation: "4 juli 1776: de 13 kolonies verklaarden onafhankelijkheid van Groot-Brittannië." },
      { q: "Wat was het Versailles-vredesverdrag een reactie op?", options: ["De Russische Revolutie", "Het einde van de Eerste Wereldoorlog", "Napoleons nederlaag", "De Tweede Wereldoorlog"], answer: 1, explanation: "Versailles (1919) was het vredesverdrag na WO1 en bestrafte Duitsland zwaar." },
      { q: "Wie was Joseph Stalin?", options: ["Russische tsaar", "Sovjet-dictator die de USSR met terreur regeerde", "Leider van de Russische Revolutie", "Russische generaal in WO1"], answer: 1, explanation: "Stalin leidde de USSR van 1924-1953, met massale repressie en gulags." },
      { q: "Wat was de Grote Depressie?", options: ["Een epidemie", "Mondiale economische crisis (1929-1939) na beurskrach Wall Street", "Een politieke crisis", "Een oorlog"], answer: 1, explanation: "Na de beurskrach van 1929 volgde wereldwijde economische crisis: werkloosheid, armoede." },
      { q: "Wanneer vond de Russische Revolutie plaats?", options: ["1905", "1917", "1921", "1924"], answer: 1, explanation: "Februari en Oktober 1917: tsaar werd afgezet; Bolsjewieken grepen de macht." },
      { q: "Wat was Operatie Barbarossa?", options: ["D-Day landing", "De Duitse invasie van de Sovjet-Unie (1941)", "Hitlers zelfmoord in de bunker", "De aanval op Polen"], answer: 1, explanation: "Barbarossa (22 juni 1941): Duitsland brak het Molotov-Ribbentrop-pact en viel de USSR aan." },
      { q: "Wat was het Maagdenburger hemispheer-experiment?", options: ["Geschiedkundig experiment", "Otto von Guericke's demonstratie van luchtdruk (1654)", "Een astronomische ontdekking", "Een chemische reactie"], answer: 1, explanation: "Von Guericke toonde aan dat vacuüm zo'n kracht heeft dat 16 paarden twee halve bollen niet konden scheiden." },
      { q: "Wat was de Oost-Indische Compagnie (VOC) de eerste van?", options: ["Eerste handelsvloot", "Eerste beursgenoteerde naamloze vennootschap ter wereld (1602)", "Eerste internationale organisatie", "Eerste bank"], answer: 1, explanation: "De VOC (1602) was de eerste naamloze vennootschap met aandelen op een beurs." },
      { q: "Wat was de Slag bij Gettysburg?", options: ["WO1-slag", "Beslissende slag van de Amerikaanse Burgeroorlog (1863)", "WO2-slag", "Slag in de Mexicaans-Amerikaanse Oorlog"], answer: 1, explanation: "Gettysburg (1-3 juli 1863): de bloedigste slag van de Burgeroorlog, keerpunt voor de Unie." },
    ],
    klas3: [
      { q: "Wat was de Verlichting?", options: ["Uitvinding elektriciteit", "18e-eeuwse filosofische stroming", "Religieuze beweging", "Industriële revolutie"], answer: 1, explanation: "Rede, individuele vrijheid en kritisch denken stonden centraal." },
      { q: "Wanneer was de Franse Revolutie?", options: ["1776", "1789", "1815", "1848"], answer: 1, explanation: "1789: bestorming van de Bastille." },
      { q: "Wat is een historiografisch debat?", options: ["Wetenschappelijk debat over historische interpretaties", "Politiek debat", "Artistiek debat", "Archeologisch onderzoek"], answer: 0, explanation: "Historici discussiëren over interpretaties van het verleden." },
      { q: "Wat was het Congres van Wenen (1815)?", options: ["Begin WO1", "Herordening Europa na Napoleon", "Einde WO2", "Oprichting VN"], answer: 1, explanation: "1815: Europa werd herordend na de Napoleontische oorlogen." },
      { q: "Wat is een primaire bron?", options: ["Een recent boek", "Een bron uit de tijd zelf", "Een encyclopedie", "Een schoolboek"], answer: 1, explanation: "Primaire bronnen: dagboeken, documenten uit de betreffende periode." },
      { q: "Wat was het Appeasement-beleid?", options: ["Aanvalsbeleid", "Toegeven aan Hitler's eisen om oorlog te vermijden", "Vredesverdrag", "Isolationisme"], answer: 1, explanation: "Appeasement: Engeland en Frankrijk gaven toe aan Hitler's eisen." },
      { q: "Wanneer begon de Koude Oorlog formeel?", options: ["1945", "1947", "1950", "1953"], answer: 1, explanation: "Truman-doctrine (1947) markeerde het begin." },
      { q: "Wat was de Drang nach Osten?", options: ["Westerse expansie", "Duits/Duitstalig streven naar oostelijke territoria", "Russische expansie", "Ottomaanse expansie"], answer: 1, explanation: "Historisch Duits verlangen naar Oost-Europese gebieden." },
      { q: "Wat is anachronisme?", options: ["Correcte datering", "Iets plaatsen in een verkeerde tijd", "Historische bron", "Tijdlijn"], answer: 1, explanation: "Anachronisme: iets toeschrijven aan een periode waar het niet in thuishoort." },
      { q: "Wat was de Slag om Stalingrad?", options: ["WO1 gevecht", "Keerpunt aan het Oostfront WO2 (1942-43)", "D-Day landing", "Slag in de Stille Oceaan"], answer: 1, explanation: "Stalingrad was het keerpunt: Duitsland verloor hier." },
      { q: "Wat was de Truman-doctrine?", options: ["Isolationisme", "VS-steun aan landen bedreigd door communisme", "Nucleair beleid", "Economische hulp"], answer: 1, explanation: "1947: VS beloofde steun aan Griekenland en Turkije." },
      { q: "Wat was de Grote Sprong Voorwaarts?", options: ["Braziliaans industrialisatieplan", "Mao's catastrofaal industrialisatieplan in China", "Sovjet-ruimteprogramma", "Japanse modernisering"], answer: 1, explanation: "1958-1962: Mao's plan leidde tot hongersnood voor miljoenen." },
      { q: "Wat was het Molotov-Ribbentroppact?", options: ["NATO-oprichting", "Niet-aanvalsverdrag Duitsland-Sovjet-Unie (1939)", "Vredesverdrag na WO1", "Handelverdrag"], answer: 1, explanation: "1939: Hitler en Stalin beloofden elkaar niet aan te vallen." },
      { q: "Wat was de Kaapverdische onafhankelijkheid een voorbeeld van?", options: ["Kolonialisme", "Dekolonisatie", "Imperialisme", "Federalisme"], answer: 1, explanation: "Dekolonisatie: voormalige koloniën werden onafhankelijk." },
      { q: "Wat was het Dawes Plan?", options: ["Militair plan WO2", "Plan om Duitsland herstelbetalingen WO1 te laten betalen", "Marshallhulp", "NATO-strategie"], answer: 1, explanation: "1924: plan om de Duitse economie te stabiliseren." },
      { q: "Wat was de Volksrepubliek China?", options: ["Nationalist China", "Communistisch China na 1949", "Keizerlijk China", "Taiwan"], answer: 1, explanation: "1949: Mao riep de Volksrepubliek China uit." },
      { q: "Wat was de Zwarte Dood?", options: ["Een oorlog", "De builenpest (14e eeuw)", "Hongersnood", "Vulkaanramp"], answer: 1, explanation: "14e eeuw: pest doodde 30-60% van de Europese bevolking." },
      { q: "Wat was de Haagse Academie?", options: ["Schildersschool", "Internationale rechtsinstitutie", "Politieke organisatie", "Wetenschapsinstituut"], answer: 1, explanation: "De Haagse Academie voor Internationaal Recht (1923)." },
      { q: "Wat is periodisering in de geschiedschrijving?", options: ["Bronnenonderzoek", "Indelen van de geschiedenis in tijdperken", "Biografisch onderzoek", "Economische analyse"], answer: 1, explanation: "Historici delen het verleden in periodes in voor overzicht." },
      { q: "Wat was de Slag bij Hastings?", options: ["Viking-inval", "Normandische verovering van Engeland (1066)", "Honderdjarige Oorlog", "Kruistocht"], answer: 1, explanation: "1066: Willem de Veroveraar versloeg de Engelse koning Harold." },
      { q: "Wat is de term voor het systematisch vernietigen van een bevolkingsgroep?", options: ["Ethnocide", "Genocide", "Holocaust", "Pogrom"], answer: 1, explanation: "Genocide: systematische vernietiging van een etnische, nationale of religieuze groep. Erkend door de VN." },
      { q: "Wat was de rol van de Derde Stand in de Franse Revolutie?", options: ["Ondersteunde de koning", "Voerde de revolutie door gebrek aan politieke macht en economische nood", "Was onverschillig", "Steunde de adel"], answer: 1, explanation: "De Derde Stand (burgers, boeren) had 97% van de bevolking maar nauwelijks rechten → revolutie." },
      { q: "Wat was het Concert van Europa (1815-1914)?", options: ["Muziekconcert", "Systeem van Europese machtsbalans en diplomatie na Napoleon", "Handelsverdrag", "Militaire alliantie"], answer: 1, explanation: "Concert van Europa: grote mogendheden hanteerden consensus om oorlog te voorkomen." },
      { q: "Wat was de Boxer-opstand (1900)?", options: ["Boerenopstand in China", "Chinese nationalistische opstand tegen buitenlandse invloed", "Japanse invasie", "Russisch-Chinese oorlog"], answer: 1, explanation: "Boxers (Yi He Tuan) vielen buitenlandse legaties aan in Peking, neergeslagen door internationale troepen." },
      { q: "Wat was de betekenis van de Magna Carta voor democratie?", options: ["Gaf iedereen stemrecht", "Beperkte de macht van de koning en legde rechten vast", "Schafte de monarchie af", "Voerde parlementaire democratie in"], answer: 1, explanation: "Magna Carta (1215) was een eerste stap: ook de koning was gebonden aan rechtsregels." },
      { q: "Wat is het begrip 'imperialisme'?", options: ["Nationalisme", "Het beleid om andere landen te veroveren en te beheersen voor economisch/politiek gewin", "Kolonialisme alleen", "Militaire expansie"], answer: 1, explanation: "Imperialisme: machtige landen overheersen zwakkere — bv. Europees imperialisme in Afrika/Azië." },
      { q: "Wat was de betekenis van de uitvinding van de boekdrukkunst (Gutenberg, 1450)?", options: ["Vertraging van kennisverspreiding", "Versnelde verspreiding van ideeën, bijbels en wetenschappelijke kennis", "Verdwijning van handschriften", "Geen invloed op samenleving"], answer: 1, explanation: "De drukpers maakte boeken betaalbaar en versnelde de Reformatie en Verlichting." },
      { q: "Wat was het Habsburgse Rijk?", options: ["Een Scandinavisch koninkrijk", "Een Centraal-Europees keizerrijk dat over meerdere eeuwen grote invloed had", "Een Italiaanse stadsstaat", "Een Oosters keizerrijk"], answer: 1, explanation: "De Habsburgers regeerden over Spanje, Oostenrijk-Hongarije en grote delen van Europa (15e-20e eeuw)." },
      { q: "Wat veroorzaakte de Eerste Wereldoorlog?", options: ["De aanval op Polen", "Samenloop van nationalisme, allianties, imperialisme en de moord op Franz Ferdinand", "Alleen de moord op Franz Ferdinand", "Economische crisis"], answer: 1, explanation: "MAIN-factoren: Militarisme, Allianties, Imperialisme, Nationalisme — aanleiding was de aanslag in Sarajevo (1914)." },
    ],
  },
  natuur: {
    groep3: [
      { q: "Welk dier legt eieren?", options: ["Hond", "Kip", "Kat", "Koe"], answer: 1, explanation: "Een kip legt eieren." },
      { q: "In welk seizoen vallen bladeren van de bomen?", options: ["Lente", "Zomer", "Herfst", "Winter"], answer: 2, explanation: "In de herfst worden de blaadjes bruin en vallen ze." },
      { q: "Wat eten vlinders?", options: ["Gras", "Nectar van bloemen", "Wormen", "Vis"], answer: 1, explanation: "Vlinders drinken nectar uit bloemen." },
      { q: "Welk dier slaapt de hele winter?", options: ["Hond", "Egel", "Kip", "Koe"], answer: 1, explanation: "Een egel houdt een winterslaap." },
      { q: "Wat is een jonge hond?", options: ["Kitten", "Lammetje", "Puppy", "Kuiken"], answer: 2, explanation: "Een jonge hond heet een puppy." },
      { q: "Waar leven vissen?", options: ["In de lucht", "In het water", "In de grond", "In een boom"], answer: 1, explanation: "Vissen leven in het water." },
      { q: "Welke plant bloeit in de lente?", options: ["Kerstboom", "Tulp", "Cactus", "Varens"], answer: 1, explanation: "Tulpen bloeien in de lente." },
      { q: "Wat maakt een bij?", options: ["Melk", "Honing", "Wol", "Eieren"], answer: 1, explanation: "Bijen maken honing van nectar." },
      { q: "Hoeveel poten heeft een spin?", options: ["4", "6", "8", "10"], answer: 2, explanation: "Een spin heeft 8 poten." },
      { q: "Wat doet een boom in de winter?", options: ["Bloeit", "Verliest zijn bladeren", "Groeit het snelst", "Zaadjes maken"], answer: 1, explanation: "De meeste bomen verliezen hun bladeren in de herfst/winter." },
      { q: "Welk dier maakt een web?", options: ["Vlinder", "Spin", "Bij", "Lieveheersbeestje"], answer: 1, explanation: "Een spin maakt een web om insecten te vangen." },
      { q: "Wat hebben planten nodig om te groeien?", options: ["Alleen water", "Water, licht en lucht", "Alleen licht", "Alleen lucht"], answer: 1, explanation: "Planten hebben water, zonlicht en lucht (CO2) nodig om te groeien." },
      { q: "Welke kleur heeft gras?", options: ["Bruin", "Geel", "Groen", "Paars"], answer: 2, explanation: "Gras is groen door de kleurstof chlorofyl." },
      { q: "Wat is de jonge kat?", options: ["Puppy", "Kitten", "Veulen", "Kuiken"], answer: 1, explanation: "Een jonge kat heet een kitten of poes." },
      { q: "Welk dier leeft in de grond?", options: ["Vlinder", "Muis", "Regenworm", "Zwaan"], answer: 2, explanation: "Regenwormen leven in de grond en zijn goed voor de bodem." },
      { q: "Wat zijn blaadjes op een boom?", options: ["De wortels van een boom", "Groene, platte organen die licht opvangen", "De vruchten", "De stammen"], answer: 1, explanation: "Bladeren vangen zonlicht op voor fotosynthese." },
      { q: "Welk seizoen volgt op de winter?", options: ["Herfst", "Zomer", "Lente", "Er is geen volgend seizoen"], answer: 2, explanation: "Na de winter komt de lente." },
      { q: "Wat eet een konijn?", options: ["Vlees", "Wormen", "Gras en groenten", "Insecten"], answer: 2, explanation: "Konijnen zijn planteneters (herbivoren) en eten gras, groenten en hooi." },
      { q: "Wat is een rups?", options: ["Een volwassen vlinder", "Een jonge vlinder vóór de vlindertransformatie", "Een soort worm", "Een insectenlarve die geen vlinder wordt"], answer: 1, explanation: "Een rups is de larve van een vlinder of mot — hij maakt een cocon en verandert in een vlinder." },
    ],
    groep5: [
      { q: "Wat hebben planten nodig om te groeien?", options: ["Alleen water", "Water, licht en CO2", "Alleen zonlicht", "Alleen aarde"], answer: 1, explanation: "Fotosynthese vereist water, zonlicht en CO2." },
      { q: "Welk orgaan pompt bloed rond?", options: ["Longen", "Lever", "Hart", "Nieren"], answer: 2, explanation: "Het hart pompt bloed door het lichaam." },
      { q: "Wat is fotosynthese?", options: ["Foto's maken", "Energie maken uit licht", "Bloemen plukken", "Water drinken"], answer: 1, explanation: "Planten zetten zonlicht, water en CO2 om in suikers." },
      { q: "Hoeveel planeten heeft ons zonnestelsel?", options: ["7", "8", "9", "10"], answer: 1, explanation: "8 planeten: Mercurius tot Neptunus." },
      { q: "Wat doen longen?", options: ["Bloed zuiveren", "Zuurstof opnemen en CO2 afgeven", "Voedsel verteren", "Hormonen aanmaken"], answer: 1, explanation: "Longen wisselen gassen uit: O2 opnemen, CO2 uitademen." },
      { q: "Wat is een zoogdier?", options: ["Een dier dat eieren legt", "Een dier dat zijn jong zoogt", "Een koudbloedig dier", "Een reptiel"], answer: 1, explanation: "Zoogdieren zoogen hun jongen met melk." },
      { q: "Waar draait de aarde om?", options: ["De maan", "De zon", "Jupiter", "Een zwart gat"], answer: 1, explanation: "De aarde draait in een baan om de zon." },
      { q: "Wat is een herbivoor?", options: ["Een vleesetend dier", "Een planteneter", "Een alleseter", "Een insectenetende plant"], answer: 1, explanation: "Herbivoren eten alleen planten." },
      { q: "Wat doet een thermometer?", options: ["Druk meten", "Temperatuur meten", "Afstand meten", "Gewicht meten"], answer: 1, explanation: "Een thermometer meet de temperatuur." },
      { q: "Wat is condensatie?", options: ["Water verdampt", "Waterdamp wordt vloeibaar water", "Water bevriest", "Water kookt"], answer: 1, explanation: "Condensatie: waterdamp koelt af en wordt druppels." },
      { q: "Welk dier is een insect?", options: ["Spin", "Kever", "Worm", "Slak"], answer: 1, explanation: "Insecten hebben 6 poten en 3 lichaamsdelen." },
      { q: "Wat is evaporatie?", options: ["Bevriezing", "Verdamping van water", "Condensatie", "Neerslag"], answer: 1, explanation: "Evaporatie = verdamping van vloeibaar water." },
      { q: "Welke planeet is het dichtst bij de zon?", options: ["Venus", "Aarde", "Mars", "Mercurius"], answer: 3, explanation: "Mercurius is de eerste planeet van de zon." },
      { q: "Wat is een carnivoor?", options: ["Planteneter", "Vleesetend dier", "Alleseter", "Omnivoor"], answer: 1, explanation: "Carnivoren eten vlees." },
      { q: "Waaruit bestaat lucht voornamelijk?", options: ["Zuurstof", "Stikstof", "Koolstofdioxide", "Argon"], answer: 1, explanation: "Lucht bestaat voor ~78% uit stikstof (N2)." },
      { q: "Wat is een skelet?", options: ["De huid van een dier", "Het raamwerk van botten", "De spieren", "De organen"], answer: 1, explanation: "Het skelet geeft het lichaam structuur en beschermt organen." },
      { q: "Wat veroorzaakt regen?", options: ["Wind", "Waterdruppels die uit wolken vallen", "Zon", "Maan"], answer: 1, explanation: "Regen: waterdruppels in wolken die zwaar genoeg worden om te vallen." },
      { q: "Wat is een voedselketen?", options: ["Een supermarkt", "Wie wat eet in de natuur", "Een recept", "Een boerderij"], answer: 1, explanation: "Bv: gras → konijn → vos = voedselketen." },
      { q: "Hoelang duurt één dag op aarde?", options: ["12 uur", "24 uur", "48 uur", "365 uur"], answer: 1, explanation: "24 uur = één omwenteling van de aarde om haar as." },
      { q: "Wat is biodiversiteit?", options: ["Eén soort dier", "Verscheidenheid aan leven", "Een type ecosysteem", "Een wetenschappelijk instrument"], answer: 1, explanation: "Biodiversiteit = de rijkdom aan soorten in een gebied." },
      { q: "Wat is een magneet?", options: ["Een elektrisch apparaat", "Een voorwerp dat ijzer en staal aantrekt", "Een soort kristal", "Een chemische stof"], answer: 1, explanation: "Magneten hebben een noord- en zuidpool die ijzerhoudende materialen aantrekken." },
      { q: "Wat is de functie van wortels bij een plant?", options: ["Licht opvangen", "Water en voedingsstoffen uit de grond opnemen en de plant verankeren", "Zuurstof aanmaken", "Bloemen dragen"], answer: 1, explanation: "Wortels houden de plant vast en nemen water en mineralen op." },
      { q: "Hoe verplaatst warmte zich van de zon naar de aarde?", options: ["Geleiding", "Straling", "Convectie", "Diffusie"], answer: 1, explanation: "De zon verwarmt de aarde via infraroodstraling — er is geen materiaal nodig." },
      { q: "Wat is een omnivoor?", options: ["Een vleesetend dier", "Een plantenetend dier", "Een dier dat zowel planten als dieren eet", "Een zaadetend dier"], answer: 2, explanation: "Omnivoren eten alles: mensen, varkens, beren zijn omnivoren." },
      { q: "Wat doet het hart bij mensen?", options: ["Lucht filteren", "Bloed rondpompen door het lichaam", "Voedsel verteren", "Hormonen aanmaken"], answer: 1, explanation: "Het hart is een pomp die bloed via slagaders en aders door het lichaam stuurt." },
      { q: "Wat is condenswater op een koud glas?", options: ["Water dat door het glas lekt", "Waterdamp uit de lucht die afkoelt en neerslaat op het koude oppervlak", "Zweet", "Gesmolten ijs"], answer: 1, explanation: "Condensatie: warme, vochtige lucht raakt het koude glas en vormt waterdruppeltjes." },
      { q: "Wat is een prooi?", options: ["Een dier dat anderen eet", "Een dier dat door andere dieren wordt gegeten", "Een plantenetend dier", "Een roofdier"], answer: 1, explanation: "Prooi = het dier dat wordt opgejaagd en gegeten door een roofdier." },
      { q: "Welke planeet heeft ringen?", options: ["Jupiter", "Mars", "Saturnus", "Venus"], answer: 2, explanation: "Saturnus staat bekend om zijn spectaculaire ringen van ijs en stof." },
      { q: "Wat is het verschil tussen een insect en een spin?", options: ["Geen verschil", "Insect heeft 6 poten; spin heeft 8 poten en is een arachnide", "Spin heeft 6 poten", "Insect heeft 8 poten"], answer: 1, explanation: "Insecten: 6 poten, 3 lichaamsdelen. Spinnen (arachniden): 8 poten, 2 lichaamsdelen." },
    ],
    groep7: [
      { q: "Wat is het verschil tussen weer en klimaat?", options: ["Geen verschil", "Weer is korte termijn, klimaat lange termijn", "Klimaat is korte termijn", "Weer is altijd warm"], answer: 1, explanation: "Weer = nu; klimaat = gemiddeld over 30+ jaar." },
      { q: "Wat is een ecosysteem?", options: ["Een computer", "Samenhangend geheel van levende organismen en omgeving", "Een soort dier", "Een type plant"], answer: 1, explanation: "Ecosysteem: organismen + hun leefomgeving samen." },
      { q: "Wat is een voedselweb?", options: ["Een spinnenweb van voedsel", "Netwerk van voedselrelaties in een ecosysteem", "Een kookboek", "Een recept"], answer: 1, explanation: "Een voedselweb toont alle eetrelaties in een ecosysteem." },
      { q: "Wat is diffusie?", options: ["Verspreiding van moleculen van hoog naar laag concentratie", "Chemische reactie", "Osmose", "Elektriciteit"], answer: 0, explanation: "Diffusie: deeltjes bewegen van hoge naar lage concentratie." },
      { q: "Wat zijn de drie aggregatietoestanden?", options: ["Vast, vloeibaar, gas", "Warm, koud, lauw", "Zuur, base, neutraal", "Hard, zacht, poreus"], answer: 0, explanation: "Materie bestaat in drie toestanden: vast, vloeibaar en gas." },
      { q: "Wat is een producent in een voedselketen?", options: ["Een plant", "Een roofdier", "Een bacterie", "Een schimmel"], answer: 0, explanation: "Planten zijn producenten: ze maken zelf voedsel via fotosynthese." },
      { q: "Wat is osmose?", options: ["Diffusie van water door een halfoorlaatbare membraan", "Chemische reactie", "Verdamping", "Condensatie"], answer: 0, explanation: "Osmose: water beweegt van laag naar hoog zoutconcentratie." },
      { q: "Wat is een adaptatie?", options: ["Een aanpassing aan de omgeving", "Een mutatie", "Een uitsterven", "Een migratie"], answer: 0, explanation: "Adaptaties zijn eigenschappen die soorten helpen overleven." },
      { q: "Wat is een molecuul?", options: ["Een enkel atoom", "Twee of meer verbonden atomen", "Een proton", "Een elektron"], answer: 1, explanation: "Bv: H₂O bestaat uit twee waterstofatomen en één zuurstofatoom." },
      { q: "Wat is de Newton (N)?", options: ["Eenheid van energie", "Eenheid van kracht", "Eenheid van massa", "Eenheid van snelheid"], answer: 1, explanation: "De Newton is de SI-eenheid van kracht." },
      { q: "Wat is een chemische reactie?", options: ["Stoffen veranderen van vorm", "Stoffen veranderen in nieuwe stoffen", "Stoffen verdampen", "Stoffen koelen af"], answer: 1, explanation: "Bij een chemische reactie ontstaan nieuwe stoffen." },
      { q: "Wat is een fossiel?", options: ["Een oud gesteente", "Resten van levende wezens in gesteente", "Een mineraal", "Een kristal"], answer: 1, explanation: "Fossielen zijn verstijfde resten van dieren of planten." },
      { q: "Wat is de snelheid van licht?", options: ["300.000 km/s", "3.000 km/s", "30.000 km/s", "300 km/s"], answer: 0, explanation: "Lichtsnelheid: ca. 300.000 km/s in vacuüm." },
      { q: "Wat is een parasite?", options: ["Een nuttig organisme", "Een organisme dat ten koste van een ander leeft", "Een producent", "Een rottingsorganisme"], answer: 1, explanation: "Parasieten schaden hun gastheer." },
      { q: "Wat is gravitatie?", options: ["Elektrische kracht", "Aantrekkingskracht tussen massa's", "Magnetisme", "Wrijving"], answer: 1, explanation: "Gravitatie = zwaartekracht tussen massa's." },
      { q: "Wat is een atoom?", options: ["De kleinste eenheid van materie", "Een molecuul", "Een cel", "Een proton"], answer: 0, explanation: "Atomen zijn de bouwstenen van materie." },
      { q: "Wat is een symbiose?", options: ["Samenwerking waarbij beide partijen voordeel hebben", "Parasitisme", "Concurrentie", "Predatie"], answer: 0, explanation: "Bv. bijen bestuiven bloemen; bloemen geven nectar." },
      { q: "Wat is een exotherme reactie?", options: ["Warmte-absorberend", "Warmte-vrijgevend", "Lichtgevend", "Geluidgevend"], answer: 1, explanation: "Exotherm: energie (warmte) wordt vrijgegeven." },
      { q: "Wat is dichtheid?", options: ["Massa per volume", "Volume per massa", "Kracht per oppervlak", "Energie per tijd"], answer: 0, explanation: "Dichtheid = massa/volume (kg/m³)." },
      { q: "Wat is het verschil tussen een plant- en diercel?", options: ["Geen verschil", "Plantencel heeft celwand en chloroplasten", "Diercel heeft chloroplasten", "Plantencel heeft geen kern"], answer: 1, explanation: "Plantencellen hebben celwand en chloroplasten voor fotosynthese." },
      { q: "Wat is een predator-prooirelatie?", options: ["Beide dieren helpen elkaar", "Een roofdier jaagt op en eet een prooidier", "Twee dieren leven samen", "Dieren concurreren om voedsel"], answer: 1, explanation: "In een predator-prooirelatie eet het roofdier de prooi. Bv: wolf (predator) – schaap (prooi)." },
      { q: "Wat is een neerslag?", options: ["Alleen regen", "Alle vormen van water die uit de lucht vallen (regen, sneeuw, hagel)", "Alleen sneeuw", "Condens op ramen"], answer: 1, explanation: "Neerslag omvat regen, sneeuw, hagel en ijzel — alle vormen van water die uit wolken vallen." },
      { q: "Wat is de waterkringloop?", options: ["Water verdampt alleen", "De continue circulatie van water tussen zee, lucht en land", "Water valt alleen als regen", "Rivieren stromen naar zee"], answer: 1, explanation: "Waterkringloop: verdamping → condensatie → neerslag → afstroming → verdamping." },
      { q: "Wat is een decompositie (ontbinding)?", options: ["Groei van organismen", "Afbraak van dood organisch materiaal door bacteriën en schimmels", "Fotosynthese in de grond", "Voedselopname door wortels"], answer: 1, explanation: "Ontbinders (bacteriën, schimmels) breken dode materie af en recirculeren voedingsstoffen." },
      { q: "Wat is zwerkracht / zwaartekracht?", options: ["Een magnetische kracht", "De aantrekkingskracht die massa's op elkaar uitoefenen", "Een elektrische kracht", "Wrijving tussen objecten"], answer: 1, explanation: "Zwaartekracht: alle objecten met massa trekken elkaar aan. De aarde trekt ons naar beneden." },
      { q: "Wat is een exotische soort?", options: ["Een zeldzame inheemse soort", "Een soort die buiten zijn oorspronkelijk leefgebied terechtkomt door menselijk handelen", "Een uitgestorven soort", "Een beschermde soort"], answer: 1, explanation: "Invasieve exoten (bv. Japanse duizendknoop, muskusrat) kunnen de biodiversiteit bedreigen." },
      { q: "Wat is de kringloop van koolstof?", options: ["Koolstof verdwijnt in de bodem", "Continue uitwisseling van koolstof tussen atmosfeer, planten, dieren en bodem", "CO2 wordt alleen door mensen geproduceerd", "Een lineair proces"], answer: 1, explanation: "Koolstofkringloop: fotosynthese (CO2 opname) ↔ ademhaling/verbranding (CO2 vrijgave)." },
      { q: "Wat is een biotoop?", options: ["De verzameling van soorten in een gebied", "De leefomgeving met alle abiotische factoren voor een levensgemeenschap", "Een soortenbeschrijving", "Een ecosysteem"], answer: 1, explanation: "Biotoop = de fysieke omgeving (bodem, water, klimaat) van een levensgemeenschap." },
      { q: "Wat is een covalente binding bij moleculen?", options: ["Overdracht van elektronen", "Gemeenschappelijk gebruik van elektronen tussen twee atomen", "Aantrekking van ionen", "Een fysische binding"], answer: 1, explanation: "Covalente binding: twee atomen delen een elektronenpaar (bv. H₂O, CO₂)." },
    ],
    klas1: [
      { q: "Wat is DNA?", options: ["Een type cel", "Erfelijk materiaal", "Een vitamine", "Een hormoon"], answer: 1, explanation: "DNA bevat genetische informatie." },
      { q: "Wat is de chemische formule van water?", options: ["CO2", "H2O", "NaCl", "O2"], answer: 1, explanation: "H₂O: twee waterstof, één zuurstof." },
      { q: "Welke deeltjes zitten in een atoomkern?", options: ["Elektronen", "Protonen en neutronen", "Alleen protonen", "Fotonen"], answer: 1, explanation: "Protonen (positief) en neutronen (neutraal)." },
      { q: "Wat is een chemische formule?", options: ["Een recept", "Afkorting van stoffen met elementsymbolen", "Een vergelijking", "Een tabel"], answer: 1, explanation: "Bv. NaCl = natriumchloride (keukenzout)." },
      { q: "Wat is het periodiek systeem?", options: ["Een kalender", "Overzicht van alle chemische elementen", "Een wiskundig schema", "Een biologiediagram"], answer: 1, explanation: "Het periodiek systeem ordent alle bekende elementen." },
      { q: "Wat is celdeling (mitose)?", options: ["Celsterfte", "Één cel deelt in twee gelijke dochtercellen", "Eiwitproductie", "DNA-reparatie"], answer: 1, explanation: "Mitose: celdeling voor groei en herstel." },
      { q: "Wat is een zuur (pH)?", options: ["pH > 7", "pH < 7", "pH = 7", "pH = 14"], answer: 1, explanation: "Zuren hebben een pH lager dan 7." },
      { q: "Wat is een base?", options: ["pH < 7", "pH = 7", "pH > 7", "pH = 0"], answer: 2, explanation: "Basen (logen) hebben een pH hoger dan 7." },
      { q: "Wat is de wet van Newton (2e wet)?", options: ["F = m × a", "E = mc²", "P = m × v", "W = F × d"], answer: 0, explanation: "Kracht = massa × versnelling." },
      { q: "Wat is fotosynthese (vergelijking)?", options: ["CO2 + H2O → glucose + O2", "O2 + glucose → CO2 + H2O", "H2O → H2 + O2", "N2 + H2O → NH3"], answer: 0, explanation: "CO2 + H₂O → (met licht) glucose + O₂." },
      { q: "Wat is een elektron?", options: ["Positief deeltje in kern", "Negatief deeltje rond kern", "Neutraal deeltje in kern", "Een foton"], answer: 1, explanation: "Elektronen zijn negatief geladen deeltjes." },
      { q: "Wat is celrespiractie?", options: ["Fotosynthese", "Afbreken glucose voor energie", "Celdeling", "Eiwitvorming"], answer: 1, explanation: "Glucose + O₂ → CO₂ + H₂O + energie (ATP)." },
      { q: "Wat is massa?", options: ["Gewicht", "Hoeveelheid materie in een object", "Volume", "Dichtheid"], answer: 1, explanation: "Massa wordt gemeten in kg, ongeacht de zwaartekracht." },
      { q: "Wat is een enzym?", options: ["Een hormoon", "Een biologische katalysator", "Een vitamin", "Een gen"], answer: 1, explanation: "Enzymen versnellen chemische reacties in het lichaam." },
      { q: "Wat is een isotoop?", options: ["Atoom met ander aantal protonen", "Atoom met ander aantal neutronen", "Atoom met ander aantal elektronen", "Een ander element"], answer: 1, explanation: "Isotopen zijn atomen van hetzelfde element met ander aantal neutronen." },
      { q: "Wat is het verschil tussen een element en een verbinding?", options: ["Geen verschil", "Element = één soort atoom, verbinding = meerdere elementen", "Verbinding = één soort atoom", "Element = molecuul"], answer: 1, explanation: "Bv. O₂ = element; H₂O = verbinding." },
      { q: "Wat is een magneetveld?", options: ["Elektrisch veld", "Ruimte rondom magneet met magnetische kracht", "Zwaartekrachtsveld", "Geluidsgolf"], answer: 1, explanation: "Magneetveld: de ruimte waar magneetwerking merkbaar is." },
      { q: "Wat is het verschil tussen brekingsindex en reflectie?", options: ["Geen verschil", "Brekingsindex = lichtafbuiging in medium; reflectie = terugkaatsing", "Reflectie = doorgang", "Brekingsindex = terugkaatsing"], answer: 1, explanation: "Breking: licht buigt af bij overgang; reflectie: licht kaatst terug." },
      { q: "Wat is het getal van Avogadro?", options: ["6,022 × 10²³", "3,14", "9,81", "1,38 × 10⁻²³"], answer: 0, explanation: "6,022 × 10²³ deeltjes = 1 mol." },
      { q: "Wat is een golf (fysica)?", options: ["Een waterbeweging", "Overdracht van energie door trillingen", "Een deeltje", "Een kracht"], answer: 1, explanation: "Golven transporteren energie zonder materie te verplaatsen." },
    ],
    klas3: [
      { q: "Wat is mitose?", options: ["Celdeling", "Celsterfte", "Eiwitvorming", "Ademhaling"], answer: 0, explanation: "Mitose: één cel → twee identieke dochtercellen." },
      { q: "Wat is de wet van behoud van energie?", options: ["Energie ontstaat uit niets", "Energie verdwijnt", "Energie verandert van vorm, gaat niet verloren", "Energie neemt toe"], answer: 2, explanation: "Energie is altijd behouden, maar verandert van vorm." },
      { q: "Wat is meiose?", options: ["Gewone celdeling", "Reductiedeling voor geslachtscellen", "Celdeling in planten", "Celdood"], answer: 1, explanation: "Meiose: vorming van zaad- en eicellen met halve chromosoomset." },
      { q: "Wat is een gen?", options: ["Een chromosoom", "Stukje DNA dat codeert voor een eiwit", "Een cel", "Een enzym"], answer: 1, explanation: "Genen sturen de aanmaak van eiwitten." },
      { q: "Wat is een actie-potentiaal?", options: ["Spierkracht", "Elektrisch signaal in een zenuwcel", "Hormoonproductie", "Celademhaling"], answer: 1, explanation: "Actie-potentiaal: elektrisch zenuwsignaal." },
      { q: "Wat is een katalysator?", options: ["Stof die reageert", "Stof die reactie versnelt zonder zelf te veranderen", "Stof die reactie remt", "Een product"], answer: 1, explanation: "Katalysatoren verlagen activeringsenergie." },
      { q: "Wat is de eerste wet van de thermodynamica?", options: ["Energie is altijd behouden", "Entropie neemt altijd toe", "Warm gaat naar koud", "Druk en volume zijn omgekeerd evenredig"], answer: 0, explanation: "Eerste wet: energiebehoud." },
      { q: "Wat is een allel?", options: ["Een chromosoom", "Een versie van een gen", "Een cel", "Een eiwit"], answer: 1, explanation: "Allelen zijn varianten van hetzelfde gen (bv. blauw/bruin oog)." },
      { q: "Wat is een neutrino?", options: ["Een proton", "Een bijna massaloos deeltje", "Een foton", "Een elektron"], answer: 1, explanation: "Neutrino's zijn elementaire deeltjes met vrijwel geen massa." },
      { q: "Wat is osmose (vergevorderd)?", options: ["Diffusie van alle stoffen", "Selectieve doorgang van water door membraan", "Actief transport", "Diffusie van ionen"], answer: 1, explanation: "Osmose: water beweegt door semipermeabel membraan." },
      { q: "Wat is de Gibbs vrije energie?", options: ["Kinetische energie", "Energie beschikbaar voor nuttig werk", "Warmte-energie", "Potentiële energie"], answer: 1, explanation: "ΔG < 0: reactie spontaan." },
      { q: "Wat is een RNA-transcript?", options: ["Een DNA-kopie", "mRNA gemaakt op basis van DNA-template", "Een eiwit", "Een chromosoom"], answer: 1, explanation: "Transcriptie: DNA → mRNA (boodschapper-RNA)." },
      { q: "Wat is een absorptiespectrum?", options: ["Licht dat wordt uitgezonden", "Golflengten die door een stof worden geabsorbeerd", "Lichtreflectie", "Kleurspectrumanalyse"], answer: 1, explanation: "Bv. chlorofyl absorbeert rood en blauw licht." },
      { q: "Wat is kwantummechanica?", options: ["Klassieke mechanica", "Studie van gedrag van deeltjes op atoomschaal", "Relativiteitstheorie", "Golftheorie"], answer: 1, explanation: "Kwantummechanica beschrijft gedrag van subatomaire deeltjes." },
      { q: "Wat is de tweede wet van de thermodynamica?", options: ["Energiebehoud", "Entropie neemt toe in een gesloten systeem", "Koeling", "Druk-volume relatie"], answer: 1, explanation: "Entropie (wanorde) neemt altijd toe in gesloten systemen." },
      { q: "Wat is een exon?", options: ["Niet-coderende DNA-sequentie", "Coderende DNA-sequentie", "Een soort RNA", "Een chromosoom"], answer: 1, explanation: "Exonen coderen voor eiwitten (introns niet)." },
      { q: "Wat is elektrolyse?", options: ["Spontane chemische reactie", "Chemische reactie door elektrische stroom", "Batterijwerking", "Corrosie"], answer: 1, explanation: "Elektrolyse gebruikt stroom om chemische reacties te forceren." },
      { q: "Wat is de halfwaardetijd?", options: ["Tijd om 100% radioactief te vervallen", "Tijd om helft radioactief materiaal te vervallen", "Levensduur atoom", "Vervallingsenergie"], answer: 1, explanation: "Halfwaardetijd: tijd waarna de helft vervallen is." },
      { q: "Wat is transductie in biologie?", options: ["Cel-deling", "DNA-overdracht via virus of vectoren", "Eiwitsynthese", "Celmigratie"], answer: 1, explanation: "Transductie: gen-overdracht door bacteriofagen." },
      { q: "Wat is de Doppler-verschuiving?", options: ["Lichtbuiging", "Verandering van frequentie door beweging bron/ontvanger", "Reflectie van geluid", "Relativiteitseffect"], answer: 1, explanation: "Ambulancesirene klinkt hoger als hij nadert: Doppler-effect." },
    ],
  },
  engels: {
    groep5: [
      { q: "What is the English word for 'hond'?", options: ["Cat", "Dog", "Bird", "Fish"], answer: 1, explanation: "'Dog' = hond." },
      { q: "How do you say 'goedemorgen' in English?", options: ["Good evening", "Good night", "Good morning", "Good afternoon"], answer: 2, explanation: "'Good morning' = goedemorgen." },
      { q: "What color is the sky?", options: ["Green", "Red", "Blue", "Yellow"], answer: 2, explanation: "The sky is blue." },
      { q: "Fill in: I ___ a student.", options: ["is", "am", "are", "be"], answer: 1, explanation: "I am — always use 'am' with 'I'." },
      { q: "What is the English word for 'kat'?", options: ["Cat", "Dog", "Fish", "Bird"], answer: 0, explanation: "'Cat' = kat." },
      { q: "How many days are in a week?", options: ["Five", "Six", "Seven", "Eight"], answer: 2, explanation: "There are seven days in a week." },
      { q: "What is 'rood' in English?", options: ["Blue", "Green", "Red", "Yellow"], answer: 2, explanation: "'Red' = rood." },
      { q: "What do you say when you meet someone?", options: ["Goodbye", "Hello", "Thank you", "Sorry"], answer: 1, explanation: "'Hello' = hallo (begroeting)." },
      { q: "What is the number after nine?", options: ["Eight", "Ten", "Eleven", "Twelve"], answer: 1, explanation: "Nine, ten — tien komt na negen." },
      { q: "What is 'appel' in English?", options: ["Orange", "Banana", "Pear", "Apple"], answer: 3, explanation: "'Apple' = appel." },
      { q: "Fill in: She ___ to school.", options: ["go", "goes", "going", "gone"], answer: 1, explanation: "She goes — bij she/he/it: werkwoord + s." },
      { q: "What is 'huis' in English?", options: ["School", "Car", "House", "Garden"], answer: 2, explanation: "'House' = huis." },
      { q: "Which animal says 'moo'?", options: ["Dog", "Cat", "Cow", "Horse"], answer: 2, explanation: "A cow says 'moo'." },
      { q: "What month comes after March?", options: ["February", "May", "April", "June"], answer: 2, explanation: "March → April." },
      { q: "What is 'groot' in English?", options: ["Small", "Big", "Fast", "Slow"], answer: 1, explanation: "'Big/large' = groot." },
      { q: "Fill in: They ___ playing football.", options: ["is", "am", "are", "be"], answer: 2, explanation: "They are — bij they gebruik je 'are'." },
      { q: "What is the opposite of 'hot'?", options: ["Warm", "Cool", "Cold", "Freezing"], answer: 2, explanation: "The opposite of hot is cold." },
      { q: "How do you say 'tot ziens' in English?", options: ["Hello", "Please", "Goodbye", "Thank you"], answer: 2, explanation: "'Goodbye' = tot ziens." },
      { q: "What is 'water' in English?", options: ["Milk", "Water", "Juice", "Tea"], answer: 1, explanation: "'Water' is hetzelfde in het Engels." },
      { q: "Fill in: I ___ a book every night.", options: ["reads", "readed", "reading", "read"], answer: 3, explanation: "I read — bij 'I' geen -s." },
      { q: "What is 'fiets' in English?", options: ["Car", "Bus", "Bike", "Train"], answer: 2, explanation: "'Bike' = fiets." },
      { q: "What season comes after summer?", options: ["Spring", "Winter", "Autumn", "Summer"], answer: 2, explanation: "Summer → Autumn (herfst)." },
      { q: "Fill in: ___ you like pizza?", options: ["Does", "Do", "Is", "Are"], answer: 1, explanation: "Do you like...? — hulpwerkwoord 'do' bij vragen." },
      { q: "What is the English word for 'school'?", options: ["House", "School", "Store", "Park"], answer: 1, explanation: "'School' is hetzelfde in het Engels." },
      { q: "How do you say 'alsjeblieft' in English?", options: ["Thank you", "Sorry", "Please", "Hello"], answer: 2, explanation: "'Please' = alsjeblieft." },
      { q: "What is 'brood' in English?", options: ["Milk", "Bread", "Butter", "Cheese"], answer: 1, explanation: "'Bread' = brood." },
      { q: "Fill in: He ___ football every Saturday.", options: ["play", "plays", "playing", "played"], answer: 1, explanation: "He plays — bij he/she/it: werkwoord + s." },
      { q: "What is the opposite of 'big'?", options: ["Tall", "Wide", "Small", "Long"], answer: 2, explanation: "The opposite of big is small." },
      { q: "What day comes after Monday?", options: ["Sunday", "Wednesday", "Tuesday", "Thursday"], answer: 2, explanation: "Monday → Tuesday (dinsdag)." },
      { q: "What is 'vliegtuig' in English?", options: ["Boat", "Train", "Car", "Airplane"], answer: 3, explanation: "'Airplane' = vliegtuig." },
    ],
    groep7: [
      { q: "What is the past tense of 'go'?", options: ["Goed", "Gone", "Went", "Going"], answer: 2, explanation: "Go → went (onregelmatig)." },
      { q: "Which sentence is correct?", options: ["He don't like it", "He doesn't like it", "He not like it", "He no like it"], answer: 1, explanation: "He doesn't like it — bij he/she/it: doesn't." },
      { q: "What does 'although' mean?", options: ["Omdat", "Hoewel", "Wanneer", "Totdat"], answer: 1, explanation: "'Although' = hoewel." },
      { q: "What is the past tense of 'buy'?", options: ["Buyed", "Buys", "Bought", "Boughten"], answer: 2, explanation: "Buy → bought (onregelmatig)." },
      { q: "What does 'however' mean?", options: ["Bovendien", "Omdat", "Echter/maar", "Tenzij"], answer: 2, explanation: "'However' = echter, maar." },
      { q: "Fill in: She has ___ here for three years.", options: ["been", "be", "being", "was"], answer: 0, explanation: "Present perfect: has been." },
      { q: "What is the plural of 'mouse'?", options: ["Mouses", "Mices", "Mice", "Mouse"], answer: 2, explanation: "Mouse → mice (onregelmatig meervoud)." },
      { q: "What does 'therefore' mean?", options: ["Bovendien", "Desondanks", "Daarom", "Terwijl"], answer: 2, explanation: "'Therefore' = daarom." },
      { q: "What is the past tense of 'write'?", options: ["Writed", "Wrote", "Written", "Writes"], answer: 1, explanation: "Write → wrote (verleden tijd)." },
      { q: "Fill in: If it rains, we ___ inside.", options: ["stay", "will stay", "stayed", "would stay"], answer: 1, explanation: "Eerste conditionele: If + present, will + infinitive." },
      { q: "What does 'meanwhile' mean?", options: ["Daarna", "Ondertussen", "Eerder", "Later"], answer: 1, explanation: "'Meanwhile' = ondertussen." },
      { q: "What is the comparative of 'good'?", options: ["Gooder", "More good", "Better", "Best"], answer: 2, explanation: "Good → better → best (onregelmatig)." },
      { q: "What does 'nevertheless' mean?", options: ["Bovendien", "Toch/desondanks", "Omdat", "Wanneer"], answer: 1, explanation: "'Nevertheless' = desondanks, toch." },
      { q: "Fill in: They ___ football when I arrived.", options: ["played", "were playing", "have played", "play"], answer: 1, explanation: "Past continuous: were playing (actie bezig toen...)." },
      { q: "What is the superlative of 'bad'?", options: ["Badder", "Worse", "Worst", "Most bad"], answer: 2, explanation: "Bad → worse → worst." },
      { q: "What does 'consequently' mean?", options: ["Desondanks", "Als gevolg daarvan", "Bovendien", "Ondertussen"], answer: 1, explanation: "'Consequently' = bijgevolg, als gevolg." },
      { q: "What is the past participle of 'speak'?", options: ["Speaked", "Spoke", "Spoken", "Speaking"], answer: 2, explanation: "Speak → spoke → spoken." },
      { q: "Fill in: By tomorrow, she ___ the report.", options: ["will finish", "will have finished", "finishes", "has finished"], answer: 1, explanation: "Future perfect: will have finished (klaar vóór een tijdstip in de toekomst)." },
      { q: "What is a 'metaphor'?", options: ["A comparison using 'like'", "A direct comparison without 'like'", "An exaggeration", "A repetition"], answer: 1, explanation: "A metaphor: 'Life is a journey' (geen 'like')." },
      { q: "What does 'albeit' mean?", options: ["Hoewel", "Omdat", "Wanneer", "Totdat"], answer: 0, explanation: "'Albeit' = hoewel, al is het ook (formeel)." },
      { q: "What is the past tense of 'see'?", options: ["Seed", "Seen", "Saw", "Sees"], answer: 2, explanation: "See → saw (verleden tijd, onregelmatig)." },
      { q: "Fill in: We ___ since this morning.", options: ["work", "worked", "have been working", "works"], answer: 2, explanation: "Present perfect continuous: have been working (al bezig van 's ochtends)." },
      { q: "What does 'despite' mean?", options: ["Omdat", "Ondanks", "Tenzij", "Totdat"], answer: 1, explanation: "'Despite' = ondanks." },
      { q: "What is the plural of 'tooth'?", options: ["Tooths", "Teeths", "Teeth", "Tooth"], answer: 2, explanation: "Tooth → teeth (onregelmatig meervoud)." },
      { q: "What does 'whereas' mean?", options: ["Terwijl/terwijl daarentegen", "Omdat", "Zodra", "Bovendien"], answer: 0, explanation: "'Whereas' = terwijl, terwijl daarentegen (contrast)." },
      { q: "Fill in: She ___ have forgotten — it's not like her.", options: ["can't", "must", "should", "might"], answer: 0, explanation: "Can't have = onmogelijkheid in het verleden." },
      { q: "What is the past tense of 'break'?", options: ["Breaked", "Broken", "Broke", "Breaking"], answer: 2, explanation: "Break → broke (verleden tijd)." },
      { q: "What does 'furthermore' mean?", options: ["Desondanks", "Bovendien", "Echter", "Daarentegen"], answer: 1, explanation: "'Furthermore' = bovendien, ook nog." },
      { q: "Fill in: I suggest ___ early.", options: ["to leave", "leaving", "leave", "left"], answer: 1, explanation: "Na 'suggest': gerund (leaVING)." },
      { q: "What is a 'clause'?", options: ["Een los woord", "Een zinsdeel met onderwerp en werkwoord", "Een bijvoeglijk naamwoord", "Een zelfstandig naamwoord"], answer: 1, explanation: "A clause contains a subject and a verb (bv. 'when she arrived')." },
    ],
    klas1: [
      { q: "What is a synonym for 'happy'?", options: ["Sad", "Angry", "Joyful", "Tired"], answer: 2, explanation: "'Joyful' = blij, vrolijk." },
      { q: "Fill in: If I ___ rich, I would travel.", options: ["am", "was", "were", "be"], answer: 2, explanation: "Tweede conditionele: If + were." },
      { q: "What is the plural of 'child'?", options: ["Childs", "Children", "Childes", "Child's"], answer: 1, explanation: "'Children' is het onregelmatige meervoud." },
      { q: "What is the passive voice of 'They built the house'?", options: ["The house was built.", "The house built.", "The house is built by them.", "Built the house."], answer: 0, explanation: "Passief: The house was built (by them)." },
      { q: "What does 'ambiguous' mean?", options: ["Duidelijk", "Onduidelijk/voor meerdere uitleg vatbaar", "Zeker", "Exact"], answer: 1, explanation: "'Ambiguous' = dubbelzinnig, meerduidig." },
      { q: "Which is a relative clause?", options: ["Although it rained", "The man who called", "Because she left", "If you come"], answer: 1, explanation: "'Who called' is een betrekkelijke bijzin (relative clause)." },
      { q: "What does 'dilemma' mean?", options: ["Een keuze tussen twee slechte opties", "Een positief probleem", "Een uitdaging", "Een conflict"], answer: 0, explanation: "A dilemma: gedwongen kiezen tussen twee ongewenste opties." },
      { q: "What is reported speech of: He said: 'I am tired'?", options: ["He said he is tired.", "He said he was tired.", "He told he was tired.", "He said he were tired."], answer: 1, explanation: "Reported speech: 'am' → 'was'." },
      { q: "What is an idiom?", options: ["A direct expression", "A fixed phrase with non-literal meaning", "A proverb", "A metaphor"], answer: 1, explanation: "An idiom: 'it's raining cats and dogs' = het regent pijpenstelen." },
      { q: "What does 'persevere' mean?", options: ["Opgeven", "Volharden", "Vermijden", "Ontwijken"], answer: 1, explanation: "'Persevere' = volharden, doorzetten." },
      { q: "Fill in: She regrets ___ the job.", options: ["to accept", "accepting", "accepted", "accept"], answer: 1, explanation: "Na 'regret': gerund (acceptING)." },
      { q: "What is the difference between 'affect' and 'effect'?", options: ["Geen", "'Affect' werkwoord, 'effect' zelfstandig naamwoord", "'Effect' werkwoord", "Beide hetzelfde"], answer: 1, explanation: "Affect = beïnvloeden (ww); effect = gevolg (znw)." },
      { q: "What does 'eloquent' mean?", options: ["Stil", "Welsprekend", "Aarzelend", "Verward"], answer: 1, explanation: "'Eloquent' = welsprekend, vloeiend sprekend." },
      { q: "What is a gerund?", options: ["Een werkwoord", "Werkwoord gebruikt als znw (verb + -ing)", "Een bijvoeglijk naamwoord", "Een voornaamwoord"], answer: 1, explanation: "Bv: 'Swimming is fun' — swimming = gerund." },
      { q: "What does 'irony' mean in literature?", options: ["Direct zeggen wat je bedoelt", "Zeggen wat je niet bedoelt", "Overdrijven", "Herhalen"], answer: 1, explanation: "Irony: het tegenovergestelde zeggen van wat je bedoelt." },
      { q: "Fill in: I wish I ___ speak French.", options: ["can", "could", "will", "would"], answer: 1, explanation: "Na 'I wish': could (verleden tijd modaal)." },
      { q: "What is a 'thesis statement'?", options: ["Samenvatting", "Centrale bewering van een essay", "Conclusie", "Inleiding"], answer: 1, explanation: "A thesis statement formulates the main argument." },
      { q: "What does 'prevalent' mean?", options: ["Zeldzaam", "Wijdverbreid", "Uniek", "Onbekend"], answer: 1, explanation: "'Prevalent' = wijdverbreid, voorkomend." },
      { q: "Which sentence uses the present perfect correctly?", options: ["I have went.", "She has gone.", "They have go.", "He have seen."], answer: 1, explanation: "She has gone — has + past participle." },
      { q: "What is the tone of a text?", options: ["Het onderwerp", "De stemming/houding van de schrijver", "De stijl", "De structuur"], answer: 1, explanation: "Tone = de emotionele houding/sfeer van de tekst." },
      { q: "What does 'reluctant' mean?", options: ["Enthousiast", "Tegenzin hebben in", "Zeker", "Bereid"], answer: 1, explanation: "'Reluctant' = met tegenzin, niet bereid." },
      { q: "Fill in: By the time he arrived, we ___ dinner.", options: ["finished", "have finished", "had finished", "finish"], answer: 2, explanation: "Past perfect: had finished (klaar vóór een moment in het verleden)." },
      { q: "What is a 'compound sentence'?", options: ["Eén hoofdzin", "Twee hoofdzinnen verbonden met 'and/but/or'", "Een bijzin", "Een zin met bijvoeglijk naamwoord"], answer: 1, explanation: "Compound: two main clauses joined by a coordinating conjunction." },
      { q: "What does 'concise' mean?", options: ["Uitgebreid", "Beknopt en duidelijk", "Vaag", "Ingewikkeld"], answer: 1, explanation: "'Concise' = beknopt, kort en krachtig." },
      { q: "What is the difference between 'who' and 'whom'?", options: ["Geen verschil", "'Who' = onderwerp, 'whom' = object", "'Whom' = onderwerp", "Beide zijn object"], answer: 1, explanation: "'Who called?' (onderwerp) vs. 'To whom did you speak?' (object)." },
      { q: "What does 'scrutinize' mean?", options: ["Negeren", "Nauwkeurig onderzoeken", "Samenvatten", "Vergelijken"], answer: 1, explanation: "'Scrutinize' = nauwkeurig bekijken/onderzoeken." },
      { q: "What is 'indirect speech' of: 'I will come tomorrow'?", options: ["He said he will come tomorrow.", "He said he would come the next day.", "He told he comes tomorrow.", "He said he comes the next day."], answer: 1, explanation: "Indirect speech: will → would, tomorrow → the next day." },
      { q: "What does 'inference' mean?", options: ["Directe uitspraak", "Conclusie getrokken uit aanwijzingen", "Samenvatting", "Inleiding"], answer: 1, explanation: "Inference = een conclusie trekken op basis van bewijs." },
      { q: "Fill in: She ___ rather stay home than go out.", options: ["would", "will", "should", "shall"], answer: 0, explanation: "'Would rather' = liever... dan." },
      { q: "What is an 'oxymoron'?", options: ["Herhaling van klanken", "Twee tegenstrijdige woorden samen", "Overdrijving", "Vergelijking"], answer: 1, explanation: "Oxymoron: 'deafening silence', 'bittersweet' — contradictie in één uitdrukking." },
    ],
    klas3: [
      { q: "What literary device is: 'The wind whispered'?", options: ["Metaphor", "Simile", "Personification", "Hyperbole"], answer: 2, explanation: "Personification: the wind gets human qualities." },
      { q: "Which word is an adverb?", options: ["Beautiful", "Beautifully", "Beauty", "Beautify"], answer: 1, explanation: "'Beautifully' is an adverb (ends in -ly)." },
      { q: "What is 'stream of consciousness'?", options: ["A river metaphor", "A narrative technique showing inner thoughts", "A plot device", "A genre"], answer: 1, explanation: "Stream of consciousness: the reader experiences raw inner thoughts." },
      { q: "What is a 'foil character'?", options: ["A villain", "A character who contrasts with the protagonist", "A narrator", "A minor character"], answer: 1, explanation: "A foil highlights the protagonist's traits through contrast." },
      { q: "What is the subjunctive mood?", options: ["Verleden tijd", "Hypothetische/wensende zinsvorm", "Gebiedende wijs", "Vraagzin"], answer: 1, explanation: "Bv: 'If I were you...' — were = subjunctive." },
      { q: "What does 'ubiquitous' mean?", options: ["Zeldzaam", "Overal aanwezig", "Tijdelijk", "Oud"], answer: 1, explanation: "'Ubiquitous' = alomtegenwoordig." },
      { q: "What is an 'unreliable narrator'?", options: ["Een eerlijke verteller", "Een verteller wiens betrouwbaarheid twijfelachtig is", "Een alwetende verteller", "Een kind als verteller"], answer: 1, explanation: "Bv: Holden Caulfield in 'The Catcher in the Rye'." },
      { q: "What does 'ephemeral' mean?", options: ["Eeuwig", "Vluchtig/van korte duur", "Stevig", "Constant"], answer: 1, explanation: "'Ephemeral' = kortdurend, vergankelijk." },
      { q: "What is a 'bildungsroman'?", options: ["Een politieke roman", "Een roman over de ontwikkeling van een personage", "Een detecive", "Een fantasieroman"], answer: 1, explanation: "Bildungsroman: coming-of-age-verhaal (bv. 'Jane Eyre')." },
      { q: "What does 'juxtaposition' mean in literature?", options: ["Vergelijking met 'like'", "Plaatsen van contrasten naast elkaar", "Herhaling", "Overdrijving"], answer: 1, explanation: "Juxtaposition: twee contrasterende elementen naast elkaar plaatsen." },
      { q: "What is 'dramatic irony'?", options: ["Situationele ironie", "Publiek weet meer dan de personages", "Verbale ironie", "Kosmische ironie"], answer: 1, explanation: "Dramatic irony: het publiek weet iets dat de personages niet weten." },
      { q: "What does 'pragmatic' mean?", options: ["Idealistisch", "Praktisch/oplossingsgericht", "Theoretisch", "Emotioneel"], answer: 1, explanation: "'Pragmatic' = praktisch, realistisch." },
      { q: "What is a 'motif' in literature?", options: ["Het thema", "Een terugkerend element dat het thema versterkt", "De plot", "Een personage"], answer: 1, explanation: "A motif: a recurring element (image, phrase) supporting the theme." },
      { q: "What does 'nuance' mean?", options: ["Overdrijving", "Subtiel onderscheid of tint", "Duidelijkheid", "Tegenstelling"], answer: 1, explanation: "'Nuance' = subtiel onderscheid, fijnzinnigheid." },
      { q: "What is 'allusion' in literature?", options: ["Een rechtstreekse verwijzing", "Een indirecte verwijzing naar andere tekst/event", "Een vergelijking", "Personificatie"], answer: 1, explanation: "Allusion: indirect referencing something (bv. 'a Herculean task')." },
      { q: "What does 'catharsis' mean?", options: ["Spanning opbouwen", "Emotionele zuivering/opluchting", "Climax", "Conflict"], answer: 1, explanation: "Catharsis: emotional release experienced by the audience." },
      { q: "What is 'syntax' in language?", options: ["Woordkeuze", "Zinsbouw/grammaticale structuur", "Spelling", "Uitspraak"], answer: 1, explanation: "Syntax = de structuur en volgorde van woorden in zinnen." },
      { q: "What does 'ambivalent' mean?", options: ["Zeker", "Tegenstrijdige gevoelens hebben", "Onverschillig", "Enthusiast"], answer: 1, explanation: "'Ambivalent' = gemengde/tegenstrijdige gevoelens hebben." },
      { q: "What is 'diction' in a text?", options: ["Zinsbouw", "Woordkeuze", "Interpunctie", "Stijl"], answer: 1, explanation: "Diction = the choice of words used by a writer." },
      { q: "What does 'verisimilitude' mean?", options: ["Onwaarschijnlijkheid", "De schijn van waarheid/realisme in een verhaal", "Ironie", "Symboliek"], answer: 1, explanation: "Verisimilitude = hoe realistisch een fictief verhaal aanvoelt." },
      { q: "What is 'free indirect discourse'?", options: ["Directe rede", "Versmelting van vertellersstem en personagedachten", "Indirecte rede", "Monoloog"], answer: 1, explanation: "Free indirect discourse: narrator and character's voice blend (bv. Jane Austen)." },
      { q: "What does 'hegemony' mean?", options: ["Gelijkheid", "Overheersende invloed van één groep", "Democratie", "Samenwerking"], answer: 1, explanation: "'Hegemony' = dominantie of overheersende macht van één groep/land." },
      { q: "What is a 'red herring' in literature?", options: ["Een climax", "Een misleidend spoor dat de lezer afleidt", "Een terugblik", "Een open einde"], answer: 1, explanation: "Red herring: a false clue that misdirects the reader." },
      { q: "What does 'verbose' mean?", options: ["Beknopt", "Te veel woorden gebruiken", "Duidelijk", "Formeel"], answer: 1, explanation: "'Verbose' = woordenrijk, omslachtig." },
      { q: "What is 'polyphony' in a novel?", options: ["Eén vertellersperspectief", "Meerdere gelijkwaardige stemmen/perspectieven", "Geen dialoog", "Lineair verhaal"], answer: 1, explanation: "Polyphony (Bakhtin): multiple independent voices/viewpoints in a novel." },
      { q: "What does 'anachronism' mean?", options: ["Een flashforward", "Iets dat niet klopt met de tijdsperiode", "Een tijdsprong", "Een symbool"], answer: 1, explanation: "Anachronism: something misplaced in time (bv. een smartphone in een middeleeuws verhaal)." },
      { q: "What is 'asyndeton'?", options: ["Gebruik van te veel voegwoorden", "Weglaten van voegwoorden voor sneller ritme", "Herhaling", "Vergelijking"], answer: 1, explanation: "Asyndeton: 'I came, I saw, I conquered' — no conjunctions between clauses." },
      { q: "What does 'didactic' mean?", options: ["Vermakelijk", "Bedoeld om te leren of moraal te geven", "Fictief", "Satirisch"], answer: 1, explanation: "'Didactic' = leerstellig, bedoeld om les te geven." },
      { q: "What is 'bathos' in literature?", options: ["Opbouw naar climax", "Anticlimax, plotse daling in toon", "Overdrijving", "Herhaling"], answer: 1, explanation: "Bathos: an abrupt, jarring shift from serious to trivial — often for comic effect." },
    ],
  },
  duits: {
    groep5: [
      { q: "Hoe zeg je 'hallo' in het Duits?", options: ["Bonjour", "Hallo", "Ciao", "Hello"], answer: 1, explanation: "'Hallo' is ook in het Duits de begroeting." },
      { q: "Wat betekent 'Hund' in het Nederlands?", options: ["Kat", "Hond", "Vogel", "Vis"], answer: 1, explanation: "'Hund' = hond." },
      { q: "Hoe tel je tot drie in het Duits?", options: ["un, deux, trois", "ein, zwei, drei", "uno, dos, tres", "one, two, three"], answer: 1, explanation: "Ein, zwei, drei = één, twee, drie." },
      { q: "Wat betekent 'Schule' in het Nederlands?", options: ["Huis", "School", "Auto", "Boek"], answer: 1, explanation: "'Schule' = school." },
      { q: "Hoe zeg je 'tot ziens' in het Duits?", options: ["Bitte", "Danke", "Tschüss", "Bitte schön"], answer: 2, explanation: "'Tschüss' = dag/tot ziens." },
      { q: "Wat betekent 'Katze'?", options: ["Hond", "Kat", "Vis", "Vogel"], answer: 1, explanation: "'Katze' = kat." },
      { q: "Hoe zeg je 'dank je wel' in het Duits?", options: ["Bitte", "Danke", "Entschuldigung", "Hallo"], answer: 1, explanation: "'Danke' = dank je." },
      { q: "Wat betekent 'Buch'?", options: ["Boek", "Pen", "Tafel", "Stoel"], answer: 0, explanation: "'Buch' = boek." },
      { q: "Hoe zeg je 'alsjeblieft' in het Duits?", options: ["Danke", "Bitte", "Ja", "Nein"], answer: 1, explanation: "'Bitte' = alsjeblieft." },
      { q: "Wat betekent 'Haus'?", options: ["Tuin", "Huis", "Auto", "Straat"], answer: 1, explanation: "'Haus' = huis." },
      { q: "Hoe zeg je 'ja' in het Duits?", options: ["Nein", "Ja", "Oui", "Si"], answer: 1, explanation: "'Ja' = ja (zelfde als Nederlands!)." },
      { q: "Wat betekent 'Wasser'?", options: ["Melk", "Sap", "Water", "Thee"], answer: 2, explanation: "'Wasser' = water." },
      { q: "Hoe zeg je 'goeiemorgen' in het Duits?", options: ["Gute Nacht", "Guten Morgen", "Guten Tag", "Guten Abend"], answer: 1, explanation: "'Guten Morgen' = goedemorgen." },
      { q: "Wat betekent 'rot' in het Duits?", options: ["Rot (bederven)", "Rood", "Groot", "Leuk"], answer: 1, explanation: "'Rot' = rood (kleur)." },
      { q: "Wat is de hoofdstad van Duitsland?", options: ["München", "Hamburg", "Berlijn", "Frankfurt"], answer: 2, explanation: "Berlijn is de hoofdstad van Duitsland." },
      { q: "Wat betekent 'Apfel'?", options: ["Peer", "Appel", "Banaan", "Sinaasappel"], answer: 1, explanation: "'Apfel' = appel." },
      { q: "Hoe zeg je 'nee' in het Duits?", options: ["Ja", "Nein", "Nicht", "Kein"], answer: 1, explanation: "'Nein' = nee." },
      { q: "Wat betekent 'Auto'?", options: ["Bus", "Fiets", "Auto", "Trein"], answer: 2, explanation: "'Auto' = auto (zelfde woord!)." },
      { q: "Hoe zeg je 'tot morgen' in het Duits?", options: ["Bis später", "Bis morgen", "Auf Wiedersehen", "Tschüss"], answer: 1, explanation: "'Bis morgen' = tot morgen." },
      { q: "Wat betekent 'Freund'?", options: ["Vijand", "Vreemde", "Vriend", "Familie"], answer: 2, explanation: "'Freund' = vriend." },
    ],
    groep7: [
      { q: "Wat is het lidwoord van 'Tisch' (tafel)?", options: ["die", "das", "der", "den"], answer: 2, explanation: "'Der Tisch' — mannelijk zelfstandig naamwoord." },
      { q: "Hoe zeg je 'ik heet...' in het Duits?", options: ["Ich bin...", "Ich heiße...", "Ich habe...", "Ich komme..."], answer: 1, explanation: "'Ich heiße...' = ik heet..." },
      { q: "Wat betekent 'Entschuldigung'?", options: ["Dank je wel", "Sorry/excuseer", "Alsjeblieft", "Goedendag"], answer: 1, explanation: "'Entschuldigung' = sorry / neem me niet kwalijk." },
      { q: "Wat is de meervoudsvorm van 'Kind' (kind)?", options: ["Kinds", "Kindes", "Kinder", "Kinden"], answer: 2, explanation: "'Kinder' is het meervoud van Kind." },
      { q: "Hoe zeg je 'Ik kom uit Nederland' in het Duits?", options: ["Ich wohne in den Niederlanden.", "Ich komme aus den Niederlanden.", "Ich bin aus Holland.", "Ich lebe in Holland."], answer: 1, explanation: "'Ich komme aus den Niederlanden.'" },
      { q: "Wat betekent 'schön'?", options: ["Lelijk", "Mooi", "Oud", "Nieuw"], answer: 1, explanation: "'Schön' = mooi." },
      { q: "Wat is de werkwoordsvorm van 'spielen' bij 'er'?", options: ["spielen", "spielst", "spielt", "spiele"], answer: 2, explanation: "'Er spielt' — stam + t bij er/sie/es." },
      { q: "Wat betekent 'lernen'?", options: ["Leren/studeren", "Lopen", "Lachen", "Luisteren"], answer: 0, explanation: "'Lernen' = leren." },
      { q: "Welk getal is 'zwanzig'?", options: ["12", "20", "22", "30"], answer: 1, explanation: "'Zwanzig' = 20." },
      { q: "Wat is de vertaling van 'Ich habe Hunger'?", options: ["Ik heb dorst", "Ik heb honger", "Ik ben moe", "Ik heb pijn"], answer: 1, explanation: "'Hunger haben' = honger hebben." },
      { q: "Wat betekent 'gehen'?", options: ["Gaan/lopen", "Rijden", "Zwemmen", "Rennen"], answer: 0, explanation: "'Gehen' = gaan, lopen." },
      { q: "Welke kleur is 'blau'?", options: ["Rood", "Groen", "Blauw", "Geel"], answer: 2, explanation: "'Blau' = blauw." },
      { q: "Wat betekent 'Ich verstehe nicht'?", options: ["Ik begrijp het niet", "Ik weet het niet", "Ik hoor het niet", "Ik zie het niet"], answer: 0, explanation: "'Verstehen' = begrijpen." },
      { q: "Hoe zeg je 'Hoe laat is het?' in het Duits?", options: ["Wie viel kostet es?", "Wie spät ist es?", "Was machst du?", "Wo bist du?"], answer: 1, explanation: "'Wie spät ist es?' = Hoe laat is het?" },
      { q: "Wat is het meervoud van 'Buch' (boek)?", options: ["Buchs", "Büche", "Bücher", "Buches"], answer: 2, explanation: "'Bücher' = boeken." },
      { q: "Wat betekent 'spielen'?", options: ["Spelen", "Slapen", "Spreken", "Springen"], answer: 0, explanation: "'Spielen' = spelen." },
      { q: "Wat is de vertaling van 'Das Wetter ist schön'?", options: ["Het is slecht weer", "Het weer is mooi", "Het is warm", "Het regent"], answer: 1, explanation: "'Das Wetter ist schön' = Het weer is mooi." },
      { q: "Wat betekent 'kaufen'?", options: ["Verkopen", "Kopen", "Geven", "Nemen"], answer: 1, explanation: "'Kaufen' = kopen." },
      { q: "Hoe zeg je 'Ik ben 12 jaar oud' in het Duits?", options: ["Ich bin zwölf Jahre alt.", "Ich habe zwölf Jahre.", "Ich bin zwölf.", "Mein Alter ist zwölf."], answer: 0, explanation: "'Ich bin... Jahre alt' = ik ben... jaar oud." },
      { q: "Wat betekent 'groß'?", options: ["Klein", "Groot", "Snel", "Sterk"], answer: 1, explanation: "'Groß' = groot." },
    ],
    klas1: [
      { q: "Wat is de Nominatief?", options: ["Object van de zin", "Onderwerp van de zin", "Bezit", "Na 'mit'"], answer: 1, explanation: "Nominatief = het onderwerp: 'Der Mann kommt'." },
      { q: "Welke naamval gebruik je na 'mit'?", options: ["Nominatief", "Akkusatief", "Dativ", "Genitief"], answer: 2, explanation: "'Mit' + Dativ: 'mit dem Freund'." },
      { q: "Wat is het verleden tijd (Perfekt) van 'gehen'?", options: ["hat gegangen", "ist gegangen", "ist gegangt", "hat geht"], answer: 1, explanation: "'Ist gegangen' — bewegingswerkwoorden krijgen 'sein'." },
      { q: "Wat is de vertaling van 'trotzdem'?", options: ["Bovendien", "Desondanks/toch", "Omdat", "Maar"], answer: 1, explanation: "'Trotzdem' = desondanks, toch." },
      { q: "Hoe verander je een bijvoeglijk naamwoord na 'der' (sterk)?", options: ["Geen uitgang", "-e", "-en", "-er"], answer: 1, explanation: "Na 'der' (nominatief m): 'der große Mann'." },
      { q: "Wat is de Akkusatief van 'der Mann'?", options: ["der Mann", "dem Mann", "den Mann", "des Mannes"], answer: 2, explanation: "Akkusatief mannelijk: 'den Mann'." },
      { q: "Hoe zeg je 'Ik heb het gedaan' (Perfekt) in het Duits?", options: ["Ich habe es gemacht.", "Ich machte es.", "Ich habe es machen.", "Ich bin es gemacht."], answer: 0, explanation: "'Ich habe es gemacht' = Perfekt van 'machen'." },
      { q: "Wat is het verschil tussen 'seit' en 'vor'?", options: ["Geen", "'Seit' = duur tot nu; 'vor' = geleden", "'Vor' = duur tot nu", "Beide hetzelfde"], answer: 1, explanation: "'Seit drei Jahren' (nog steeds); 'vor drei Jahren' (drie jaar geleden)." },
      { q: "Welke naamval gebruik je bij bezit?", options: ["Nominatief", "Akkusatief", "Dativ", "Genitief"], answer: 3, explanation: "Genitief drukt bezit uit: 'das Buch des Mannes'." },
      { q: "Wat betekent 'obwohl'?", options: ["Omdat", "Als", "Hoewel", "Totdat"], answer: 2, explanation: "'Obwohl' = hoewel (geeft tegenstelling aan)." },
      { q: "Hoe zeg je 'Ik zou graag...' in het Duits?", options: ["Ich will...", "Ich möchte...", "Ich kann...", "Ich soll..."], answer: 1, explanation: "'Ich möchte' = ik zou graag (beleefd)." },
      { q: "Welk hulpwerkwoord gebruikt 'fahren' in het Perfekt?", options: ["haben", "sein", "werden", "können"], answer: 1, explanation: "'Ich bin gefahren' — bewegingswerkwoorden + sein." },
      { q: "Wat is de vertaling van 'wegen'?", options: ["Vanwege", "Tijdens", "Hoewel", "Omdat"], answer: 0, explanation: "'Wegen' = vanwege (+ Genitief)." },
      { q: "Wat is het Konjunktiv II van 'haben'?", options: ["hat", "hatte", "hätte", "gehabt"], answer: 2, explanation: "'Hätte' = Konjunktiv II van haben (voor hypothetische zin)." },
      { q: "Wat betekent 'weil' in de zin?", options: ["Hoewel", "Wanneer", "Omdat", "Als"], answer: 2, explanation: "'Weil' = omdat (persoonsvorm naar het einde)." },
      { q: "Hoe zeg je 'Ik zou gaan als...' in het Duits?", options: ["Ich gehe wenn...", "Ich würde gehen, wenn...", "Ich bin gegangen, wenn...", "Ich gehen würde..."], answer: 1, explanation: "Konjunktiv II: 'Ich würde gehen, wenn...' = ik zou gaan als..." },
      { q: "Wat is de Dativ meervoud uitgang voor lidwoorden?", options: ["-en", "-em", "-es", "-e"], answer: 0, explanation: "Dativ meervoud: altijd 'den' + zelfstandig naamwoord + -(e)n." },
      { q: "Wat betekent 'damit' als voegwoord?", options: ["Daarmee (instrument)", "Opdat/zodat", "Hoewel", "Terwijl"], answer: 1, explanation: "'Damit' als voegwoord = opdat, zodat." },
      { q: "Wat is het verschil tussen 'als' en 'wenn'?", options: ["Geen", "'Als' = eenmalig verleden; 'wenn' = herhaling/toekomst", "'Wenn' = verleden eenmalig", "Beide voor toekomst"], answer: 1, explanation: "'Als er jung war' (eenmalig); 'wenn es regnet' (herhaling/conditie)." },
      { q: "Wat is de Dativ van 'die Frau'?", options: ["die Frau", "der Frau", "den Frau", "des Frau"], answer: 1, explanation: "Dativ vrouwelijk: 'der Frau'." },
      { q: "Wat is het verschil tussen 'sein' en 'haben' in het Perfekt?", options: ["Geen verschil", "Bewegings-/toestandswerkwoorden nemen 'sein'; andere nemen 'haben'", "'Sein' is altijd fout", "'Haben' voor beweging"], answer: 1, explanation: "Gehen → ist gegangen (sein). Essen → hat gegessen (haben)." },
      { q: "Hoe zeg je 'ik wil naar huis gaan' in het Duits?", options: ["Ich will nach Hause fahren.", "Ich möchte nach Hause gehen.", "Ich gehe nach Hause wollen.", "Ich will Haus gehen."], answer: 1, explanation: "'Ich möchte nach Hause gehen.' — möchte is de beleefde vorm van willen." },
      { q: "Welk hulpwerkwoord gebruik je bij 'können'?", options: ["Sein", "Werden", "Haben", "Können staat alleen"], answer: 2, explanation: "In het Perfekt: 'Ich habe es nicht tun können' — kunnen + Infinitief neemt 'haben'." },
      { q: "Wat betekent 'obwohl' in de zin?", options: ["Omdat", "Hoewel (geeft tegenstelling aan, werkwoord naar einde)", "Als", "Wanneer"], answer: 1, explanation: "'Obwohl' = hoewel. Stuurde bijzin: werkwoord naar het einde." },
      { q: "Hoe schrijf je 'Ik begrijp het niet' in het Duits?", options: ["Ich verstehe nicht es.", "Ich nicht verstehe.", "Ich verstehe es nicht.", "Ich es verstehe nicht."], answer: 2, explanation: "'Ich verstehe es nicht.' — negatie staat achter het object." },
      { q: "Wat is de onvoltooid verleden tijd (Präteritum) van 'sein'?", options: ["hat gewesen", "war", "ist gewesen", "wäre"], answer: 1, explanation: "'War' = was (Präteritum van sein)." },
      { q: "Welke naamval gebruik je na 'für'?", options: ["Nominatief", "Akkusatief", "Dativ", "Genitief"], answer: 1, explanation: "'Für' is een Akkusatief-voorzetsel: 'Das ist für dich'." },
      { q: "Hoe zeg je 'hij is gisteren naar school gegaan' in het Duits?", options: ["Er geht gestern zur Schule.", "Er ist gestern zur Schule gegangen.", "Er hat gestern zur Schule gegangen.", "Er ging gestern zur Schule."], answer: 1, explanation: "Perfekt van 'gehen' (beweging) = ist gegangen: 'Er ist gestern zur Schule gegangen.'" },
      { q: "Wat is een Nebensatz (bijzin) in het Duits?", options: ["Een zin die zelfstandig staat", "Een bijzin waarbij het werkwoord naar het einde verplaatst", "Een hoofdzin", "Een vraagzin"], answer: 1, explanation: "In een Nebensatz staat het werkwoord altijd aan het einde: 'weil ich müde bin'." },
    ],
    klas3: [
      { q: "Wat is het Konjunktiv II?", options: ["Gewone verleden tijd", "Hypothetische/irreële uitdrukking", "Toekomst", "Gebiedende wijs"], answer: 1, explanation: "Konjunktiv II: voor hypothetische situaties ('würde gehen')." },
      { q: "Wat is het Plusquamperfekt?", options: ["Toekomst", "Verleden voor het verleden", "Gewone verleden tijd", "Futurum"], answer: 1, explanation: "Plusquamperfekt: 'had gedaan' (war gegangen)." },
      { q: "Welk voegwoord stuurt het werkwoord naar het einde?", options: ["aber", "und", "weil", "denn"], answer: 2, explanation: "'Weil' is een onderschikkend voegwoord → werkwoord naar einde." },
      { q: "Wat is een Relativsatz?", options: ["Een bijwoordelijke bijzin", "Een betrekkelijke bijzin", "Een vraagzin", "Een hoofdzin"], answer: 1, explanation: "Bv: 'Der Mann, der kommt...' = betrekkelijke bijzin." },
      { q: "Wat betekent het prefix 'ver-' in 'vergessen'?", options: ["Geen betekenis", "Versterking/afwijking", "Herhaling", "Terug"], answer: 1, explanation: "'Ver-' versterkt of verandert de betekenis: vergessen = vergeten." },
      { q: "Wat is Passiv Perfekt van 'bauen'?", options: ["wurde gebaut", "ist gebaut worden", "hat gebaut", "wird gebaut"], answer: 1, explanation: "Passief Perfekt: 'ist gebaut worden'." },
      { q: "Wat is het verschil tussen 'legen' en 'liegen'?", options: ["Geen", "'Legen' = neerleggen, 'liegen' = liggen", "'Liegen' = neerleggen", "Beide = liggen"], answer: 1, explanation: "'Legen' = iets neerleggen; 'liegen' = liggen (positie)." },
      { q: "Welke naamval volgt op 'wegen'?", options: ["Nominatief", "Akkusatief", "Dativ", "Genitief"], answer: 3, explanation: "'Wegen' + Genitief: 'wegen des Regens'." },
      { q: "Wat is Futur II?", options: ["Toekomst (eenvoudig)", "Voltooide toekomst", "Verleden tijd", "Conditie"], answer: 1, explanation: "Futur II: 'er wird gegangen sein' = hij zal gegaan zijn." },
      { q: "Wat is een Infinitivkonstruktion?", options: ["Zin met 'dass'", "Infinitief met 'zu'", "Voltooid deelwoord", "Bijzin"], answer: 1, explanation: "Bv: 'Ich versuche, früh aufzustehen.' = infinitief met 'zu'." },
      { q: "Wat betekent 'dennoch'?", options: ["Bovendien", "Toch/desondanks", "Omdat", "Maar"], answer: 1, explanation: "'Dennoch' = toch, desondanks (formeler dan trotzdem)." },
      { q: "Wat is het verschil tussen 'dürfen' en 'sollen'?", options: ["Geen", "'Dürfen' = mogen, 'sollen' = moeten (externe opdracht)", "'Sollen' = mogen", "Beide = moeten"], answer: 1, explanation: "'Darf ich?' = mag ik? 'Du sollst' = jij moet (van iemand anders)." },
      { q: "Wat is Nominalstil?", options: ["Gebruik van werkwoorden", "Gebruik van zelfstandige naamwoorden i.p.v. werkwoorden", "Bijvoeglijk naamwoorden", "Voornaamwoorden"], answer: 1, explanation: "Nominalstil: formele stijl met veel zelfstandige naamwoorden." },
      { q: "Wat is het Partizip I?", options: ["Voltooid deelwoord", "Tegenwoordig deelwoord (werkwoord + -end)", "Infinitief", "Stam"], answer: 1, explanation: "Partizip I: 'spielend' = spelend, lopend." },
      { q: "Welke voorzetsels nemen altijd de Akkusatief?", options: ["mit, nach, seit", "durch, für, gegen", "aus, bei, von", "an, auf, in"], answer: 1, explanation: "'Durch, für, gegen, ohne, um, bis' + Akkusatief altijd." },
      { q: "Wat is Indirekte Rede?", options: ["Direct citaat", "Indirecte/gerapporteerde rede", "Vraag", "Bevel"], answer: 1, explanation: "Indirekte Rede: 'Er sagte, er sei müde.' (Konjunktiv I)." },
      { q: "Wat is Konjunktiv I gebruikt voor?", options: ["Hypothetisch", "Officiële gerapporteerde rede", "Verleden", "Toekomst"], answer: 1, explanation: "Konjunktiv I: in kranten/officiële teksten voor indirecte rede." },
      { q: "Wat betekent 'infolgedessen'?", options: ["Bovendien", "Als gevolg daarvan", "Desondanks", "Terwijl"], answer: 1, explanation: "'Infolgedessen' = als gevolg daarvan (formeel)." },
      { q: "Welke voorzetsels nemen altijd de Dativ?", options: ["durch, für, gegen", "aus, bei, mit, nach, seit, von, zu, gegenüber", "um, bis, durch", "an, auf, in, an"], answer: 1, explanation: "'Aus, bei, mit, nach, seit, von, zu' + altijd Dativ." },
      { q: "Wat is een Ausklammerung?", options: ["Inversie", "Uitplaatsing naar achter de zinshaak", "Zinsbouw", "Inversie bij vraag"], answer: 1, explanation: "Ausklammerung: extra info na de zinshaak geplaatst (informele stijl)." },
      { q: "Hoe verschilt 'während' van 'während' als voegwoord vs. als voorzetsel?", options: ["Geen verschil", "Als voegwoord + bijzin (werkwoord einde); als voorzetsel + Genitief", "Als voorzetsel + Dativ", "Als voegwoord + Akkusatief"], answer: 1, explanation: "'Während ich schlief' (voegwoord, bijzin). 'Während des Urlaubs' (voorzetsel + Genitief)." },
      { q: "Wat is een erweiterter Infinitiv in het Duits?", options: ["Een infinitief met 'zu' alleen", "Een infinitief met 'zu' uitgebreid met andere elementen: 'zu + lezen'", "Een Partizip II", "Een imperatiefvorm"], answer: 1, explanation: "Erweiterter Infinitiv: 'Ich versuche, früh aufzustehen' — infinitief met 'zu' en uitbreidingen." },
      { q: "Wat betekent 'zumal' in het Duits?", options: ["Ondertussen", "Temeer daar/vooral omdat (versterkt een argument)", "Hoewel", "Bovendien"], answer: 1, explanation: "'Zumal' = temeer daar, ook omdat — versterkt een reeds gegeven reden." },
      { q: "Wat is het verschil tussen 'mögen' en 'möchten'?", options: ["Geen verschil", "'Mögen' = houden van; 'möchten' = willen/verlangen (beleefd)", "'Möchten' = houden van", "Beide = willen"], answer: 1, explanation: "'Ich mag Kaffee' (ik lust koffee). 'Ich möchte Kaffee' (ik wil graag koffee — beleefd)." },
      { q: "Wat is een Funktionsverbgefüge?", options: ["Een gewone werkwoordsconstructie", "Een vaste verbinding van werkwoord + zelfstandig naamwoord (bv. in Kraft treten)", "Een samengesteld werkwoord", "Een reflexief werkwoord"], answer: 1, explanation: "'Eine Entscheidung treffen', 'in Betrieb nehmen' — formele stijl, nominale constructies." },
      { q: "Hoe maak je een vraagzin met inversie in het Duits?", options: ["Voeg 'ob' toe", "Zet het werkwoord vóór het onderwerp: 'Gehst du?'", "Voeg een vraagteken toe zonder woordvolgorde te veranderen", "Gebruik 'dass'"], answer: 1, explanation: "Inversie: Werkwoord + Onderwerp in directe vragen: 'Kommst du mit?'" },
      { q: "Wat is het Futur I in het Duits?", options: ["Präteritum", "'Werden' + infinitief (voor toekomst of veronderstelling)", "Perfekt", "Konjunktiv I"], answer: 1, explanation: "Futur I: 'Ich werde kommen' = ik zal komen / ik zal wel komen." },
      { q: "Wat is een Genitivattribut?", options: ["Een bijvoeglijk naamwoord", "Een genitief die bij een zelfstandig naamwoord hoort als bezitsbepaling", "Een Dativcomplement", "Een Akkusativobjekt"], answer: 1, explanation: "'Das Auto des Mannes' — 'des Mannes' is een Genitivattribut (bezit)." },
      { q: "Wat is het doel van Konjunktiv I in het Duits?", options: ["Hypothetische situaties uitdrukken", "Indirecte rede weergeven in formele teksten (kranten, rapporten)", "Wensen uitdrukken", "Bevelen geven"], answer: 1, explanation: "Konjunktiv I: 'Er sagte, er sei krank.' — indirecte rede in formele geschreven taal." },
    ],
  },
  frans: {
    groep5: [
      { q: "Comment dit-on 'hallo' en français?", options: ["Au revoir", "Bonjour", "Merci", "S'il vous plaît"], answer: 1, explanation: "'Bonjour' = goedendag/hallo." },
      { q: "Que signifie 'chat'?", options: ["Hond", "Kat", "Vogel", "Vis"], answer: 1, explanation: "'Chat' = kat." },
      { q: "Comment dit-on 'merci' en néerlandais?", options: ["Hallo", "Tot ziens", "Dank je", "Alsjeblieft"], answer: 2, explanation: "'Merci' = dank je." },
      { q: "Que signifie 'maison'?", options: ["School", "Auto", "Huis", "Tuin"], answer: 2, explanation: "'Maison' = huis." },
      { q: "Comment dit-on 'au revoir'?", options: ["Tot ziens", "Hallo", "Dank je", "Ja"], answer: 0, explanation: "'Au revoir' = tot ziens." },
      { q: "Que signifie 'livre'?", options: ["Boek", "Pen", "Stoel", "Tafel"], answer: 0, explanation: "'Livre' = boek." },
      { q: "Quelle est la couleur 'rouge'?", options: ["Blauw", "Groen", "Rood", "Geel"], answer: 2, explanation: "'Rouge' = rood." },
      { q: "Comment dit-on 'oui'?", options: ["Nee", "Ja", "Misschien", "Waarom"], answer: 1, explanation: "'Oui' = ja." },
      { q: "Que signifie 'chien'?", options: ["Kat", "Hond", "Paard", "Koe"], answer: 1, explanation: "'Chien' = hond." },
      { q: "Comment s'appelle la capitale de la France?", options: ["Lyon", "Paris", "Marseille", "Nice"], answer: 1, explanation: "Parijs is de hoofdstad van Frankrijk." },
      { q: "Que signifie 'école'?", options: ["Huis", "School", "Winkel", "Park"], answer: 1, explanation: "'École' = school." },
      { q: "Comment dit-on 'merci beaucoup'?", options: ["Dank je", "Heel erg bedankt", "Alsjeblieft", "Graag gedaan"], answer: 1, explanation: "'Merci beaucoup' = heel erg bedankt." },
      { q: "Que signifie 'eau'?", options: ["Melk", "Sap", "Water", "Wijn"], answer: 2, explanation: "'Eau' = water." },
      { q: "Comment dit-on 'un, deux, trois'?", options: ["eins, zwei, drei", "one, two, three", "één, twee, drie", "uno, dos, tres"], answer: 2, explanation: "'Un, deux, trois' = 1, 2, 3." },
      { q: "Que signifie 'pomme'?", options: ["Peer", "Appel", "Banaan", "Druif"], answer: 1, explanation: "'Pomme' = appel." },
      { q: "Comment dit-on 'bonsoir'?", options: ["Goedemorgen", "Goedemiddag", "Goedenavond", "Goedenacht"], answer: 2, explanation: "'Bonsoir' = goedenavond." },
      { q: "Que signifie 'grand'?", options: ["Klein", "Groot", "Snel", "Slim"], answer: 1, explanation: "'Grand' = groot." },
      { q: "Comment dit-on 's'il vous plaît'?", options: ["Dank je", "Alsjeblieft", "Excuseer", "Goedendag"], answer: 1, explanation: "'S'il vous plaît' = alsjeblieft (formeel)." },
      { q: "Que signifie 'ami'?", options: ["Vijand", "Vriend", "Familie", "Leraar"], answer: 1, explanation: "'Ami' = vriend." },
      { q: "Comment dit-on 'je m'appelle...'?", options: ["Ik ben...", "Ik heet...", "Ik woon in...", "Ik kom uit..."], answer: 1, explanation: "'Je m'appelle...' = ik heet..." },
    ],
    groep7: [
      { q: "Quel est le genre de 'table'?", options: ["Masculin", "Féminin", "Neutre", "Les deux"], answer: 1, explanation: "'Table' est féminin: la table." },
      { q: "Comment conjugue-t-on 'être' à 'tu'?", options: ["es", "est", "êtes", "suis"], answer: 0, explanation: "Tu es = jij bent." },
      { q: "Que signifie 'parce que'?", options: ["Hoewel", "Omdat", "Als", "Totdat"], answer: 1, explanation: "'Parce que' = omdat." },
      { q: "Quel est le pluriel de 'cheval'?", options: ["Chevals", "Chevales", "Chevaux", "Cheval"], answer: 2, explanation: "'Chevaux' = meervoud van 'cheval' (paard)." },
      { q: "Comment dit-on 'je vais bien'?", options: ["Ik ga weg", "Het gaat goed met me", "Ik ben goed", "Ik voel me niet goed"], answer: 1, explanation: "'Je vais bien' = het gaat goed met mij." },
      { q: "Que signifie 'maintenant'?", options: ["Gisteren", "Morgen", "Nu", "Altijd"], answer: 2, explanation: "'Maintenant' = nu." },
      { q: "Comment conjugue-t-on 'avoir' à 'ils'?", options: ["ont", "est", "sont", "avez"], answer: 0, explanation: "'Ils ont' = zij hebben." },
      { q: "Que signifie 'toujours'?", options: ["Nooit", "Soms", "Altijd", "Vaak"], answer: 2, explanation: "'Toujours' = altijd." },
      { q: "Quel article utilise-t-on devant 'école'?", options: ["le", "la", "l'", "un"], answer: 2, explanation: "'L'école' — de elisie voor klinkers." },
      { q: "Comment dit-on 'je n'aime pas'?", options: ["Ik hou van", "Ik hou niet van", "Ik vind leuk", "Ik weet het niet"], answer: 1, explanation: "'Je n'aime pas' = ik hou niet van." },
      { q: "Que signifie 'souvent'?", options: ["Nooit", "Soms", "Altijd", "Vaak"], answer: 3, explanation: "'Souvent' = vaak." },
      { q: "Comment dit-on 'j'ai faim'?", options: ["Ik heb dorst", "Ik heb honger", "Ik ben moe", "Ik heb het koud"], answer: 1, explanation: "'J'ai faim' = ik heb honger." },
      { q: "Que signifie 'mais'?", options: ["En", "Maar", "Of", "Want"], answer: 1, explanation: "'Mais' = maar." },
      { q: "Comment dit-on 'quel âge as-tu'?", options: ["Hoe heet je?", "Waar woon je?", "Hoe oud ben je?", "Wat doe je?"], answer: 2, explanation: "'Quel âge as-tu?' = hoe oud ben je?" },
      { q: "Que signifie 'demain'?", options: ["Gisteren", "Vandaag", "Morgen", "Nu"], answer: 2, explanation: "'Demain' = morgen." },
      { q: "Comment conjugue-t-on 'aller' à 'nous'?", options: ["allons", "allez", "vont", "vais"], answer: 0, explanation: "'Nous allons' = wij gaan." },
      { q: "Que signifie 'ville'?", options: ["Dorp", "Stad", "Land", "Regio"], answer: 1, explanation: "'Ville' = stad." },
      { q: "Comment dit-on 'où habites-tu'?", options: ["Hoe heet je?", "Hoe oud ben je?", "Waar woon je?", "Wat doe je?"], answer: 2, explanation: "'Où habites-tu?' = waar woon je?" },
      { q: "Que signifie 'hier'?", options: ["Hier (locatie)", "Gisteren", "Morgen", "Nu"], answer: 1, explanation: "'Hier' in het Frans = gisteren." },
      { q: "Quel est le féminin de 'beau'?", options: ["beaux", "belle", "bel", "beautte"], answer: 1, explanation: "'Belle' is de vrouwelijke vorm van 'beau'." },
    ],
    klas1: [
      { q: "Qu'est-ce que le passé composé?", options: ["Onvoltooid verleden", "Voltooid verleden met avoir/être + participe passé", "Toekomst", "Onvoltooid verleden (imparfait)"], answer: 1, explanation: "Passé composé: avoir/être + voltooid deelwoord." },
      { q: "Hoe maak je de negatie in het Frans?", options: ["niet voor werkwoord", "ne...pas om werkwoord", "pas na werkwoord", "ne voor werkwoord"], answer: 1, explanation: "Negatie: ne + werkwoord + pas (je ne sais pas)." },
      { q: "Quand utilise-t-on l'imparfait?", options: ["Voltooide actie verleden", "Voortdurende/herhalende actie verleden", "Toekomst", "Bevel"], answer: 1, explanation: "Imparfait: beschrijving, gewoonte of voortdurende actie in het verleden." },
      { q: "Quelle est la différence entre 'savoir' et 'connaître'?", options: ["Geen verschil", "'Savoir' = kennis van feiten, 'connaître' = vertrouwd zijn met", "'Connaître' = feiten", "Beide hetzelfde"], answer: 1, explanation: "'Je sais nager' vs. 'Je connais Paris'." },
      { q: "Que signifie 'pourtant'?", options: ["Bovendien", "Toch/desondanks", "Omdat", "Als"], answer: 1, explanation: "'Pourtant' = toch, desondanks." },
      { q: "Hoe zeg je 'Ik zou graag...' in het Frans?", options: ["Je veux...", "Je voudrais...", "Je vais...", "Je dois..."], answer: 1, explanation: "'Je voudrais' = conditionnel van 'vouloir' = ik zou graag." },
      { q: "Qu'est-ce que le futur proche?", options: ["Passé composé", "Aller + infinitief", "Eenvoudige toekomst", "Conditonnel"], answer: 1, explanation: "'Je vais manger' = aller + infinitief = nabije toekomst." },
      { q: "Que signifie 'cependant'?", options: ["Bovendien", "Echter/desondanks", "Omdat", "Wanneer"], answer: 1, explanation: "'Cependant' = echter, desondanks." },
      { q: "Quelle est la règle de l'accord du participe passé avec 'être'?", options: ["Geen overeenkomst", "Komt overeen met het onderwerp", "Altijd mannelijk", "Altijd vrouwelijk"], answer: 1, explanation: "Met être past het deelwoord zich aan het onderwerp aan: 'elle est allée'." },
      { q: "Comment forme-t-on le conditionnel?", options: ["Stam + imparfait-uitgang", "Futurstam + imparfait-uitgang (-ais, -ais, -ait...)", "Infinitief + -ais", "avoir + participe passé"], answer: 1, explanation: "Conditionnel: futurstam (infinitief) + -ais, -ais, -ait, -ions, -iez, -aient." },
      { q: "Que signifie 'néanmoins'?", options: ["Bovendien", "Desondanks/toch (formeel)", "Omdat", "Wanneer"], answer: 1, explanation: "'Néanmoins' = desondanks, toch (formeel synoniem van 'pourtant')." },
      { q: "Hoe zeg je 'Ik was aan het eten' in het Frans?", options: ["J'ai mangé", "Je mangeais", "Je vais manger", "J'aurais mangé"], answer: 1, explanation: "'Je mangeais' = imparfait van 'manger'." },
      { q: "Que signifie 'davantage'?", options: ["Minder", "Meer/méér", "Hetzelfde", "Beter"], answer: 1, explanation: "'Davantage' = meer (in formeel taalgebruik)." },
      { q: "Welke werkwoorden nemen être in passé composé?", options: ["Alle werkwoorden", "Bewegings- en toestandswerkwoorden (aller, venir, naître...)", "Transitieve werkwoorden", "Reflexieve werkwoorden"], answer: 1, explanation: "Être + DR MRS VAN DER TRAMP-werkwoorden en reflexieve werkwoorden." },
      { q: "Comment dit-on 'Il faut que tu...'?", options: ["Bevel", "Jij moet... (subjonctif)", "Jij wil...", "Jij kan..."], answer: 1, explanation: "'Il faut que' + subjonctif = je moet..." },
      { q: "Que signifie 'quoique'?", options: ["Omdat", "Hoewel (+ subjonctif)", "Wanneer", "Als"], answer: 1, explanation: "'Quoique' = hoewel (verlangt de subjonctif)." },
      { q: "Wat is het verschil tussen 'pendant' en 'depuis'?", options: ["Geen", "'Pendant' = voltooide duur, 'depuis' = duur tot nu", "'Depuis' = voltooide duur", "Beide hetzelfde"], answer: 1, explanation: "'Pendant trois ans' (klaar); 'depuis trois ans' (nog bezig)." },
      { q: "Hoe zeg je 'Ik hoop dat...' in het Frans?", options: ["J'espère que + indicatif", "J'espère que + subjonctif", "Je pense que + subjonctif", "J'aime que + indicatif"], answer: 0, explanation: "'Espérer que' + indicatif (geen subjonctif!)." },
      { q: "Que signifie 'afin de'?", options: ["Omdat", "Teneinde/om... te", "Terwijl", "Hoewel"], answer: 1, explanation: "'Afin de' + infinitief = teneinde, om... te." },
      { q: "Welk tijdsvorm gebruik je voor een voltooide actie vóór een andere verleden actie?", options: ["Passé composé", "Plus-que-parfait", "Imparfait", "Passé simple"], answer: 1, explanation: "Plus-que-parfait (avais + participe passé) = had gedaan." },
      { q: "Hoe vervoeg je 'aller' in de toekomst (futur simple) bij 'nous'?", options: ["nous allons", "nous irons", "nous allrons", "nous allez"], answer: 1, explanation: "'Aller' in futur simple is onregelmatig: ir- + endings. 'Nous irons.'" },
      { q: "Que signifie 'bien que' suivi du subjonctif?", options: ["Omdat", "Hoewel (+ subjonctif verplicht)", "Als", "Wanneer"], answer: 1, explanation: "'Bien que' = hoewel — verlangt altijd de subjonctif." },
      { q: "Wat is het verschil tussen 'savoir' en 'pouvoir' + infinitief?", options: ["Geen verschil", "'Savoir' = capaciteit door kennis; 'pouvoir' = mogelijkheid of toestemming", "'Pouvoir' = weten", "'Savoir' = toestemming"], answer: 1, explanation: "'Je sais nager' (ik kan zwemmen = ik weet hoe). 'Je peux nager' (ik mag/kan zwemmen = omstandigheid)." },
      { q: "Comment dit-on 'als ik geweten had dat...' in het Frans?", options: ["Si je savais...", "Si j'avais su...", "Si je saurais...", "Si j'ai su..."], answer: 1, explanation: "'Si j'avais su' = plus-que-parfait in 'si'-zin voor irreële verleden conditie." },
      { q: "Que signifie 'en outre'?", options: ["Aan de andere kant", "Bovendien/daarenboven", "Hoewel", "Omdat"], answer: 1, explanation: "'En outre' = bovendien, ook nog (formeel additioneel argument)." },
      { q: "Hoe construeer je de passieve zin in het Frans?", options: ["Être + infinitief", "Être + participe passé (passé composé met être)", "Avoir + participe passé", "Se + infinitief"], answer: 0, explanation: "Passief: être (geconjugeerd) + participe passé: 'Le livre est lu par l'élève.'" },
      { q: "Que signifie 'à moins que' + subjonctif?", options: ["Tenzij", "Zodra", "Hoewel", "Terwijl"], answer: 0, explanation: "'À moins que' + subjonctif = tenzij. 'Il viendra à moins qu'il ne soit malade.'" },
      { q: "Wat is de functie van 'y' als pronomen?", options: ["Vervangt een persoon", "Vervangt een plaatsbepaling of een onpersoonlijk complement na 'à'", "Vervangt het onderwerp", "Vervangt een direct object"], answer: 1, explanation: "'J'y vais' (ik ga erheen). 'Il y pense' (hij denkt eraan). 'Y' vervangt 'à + plaats/ding'." },
      { q: "Que signifie 'malgré'?", options: ["Dankzij", "Ondanks", "Hoewel", "Vanwege"], answer: 1, explanation: "'Malgré' + zelfstandig naamwoord = ondanks. 'Malgré la pluie, il est sorti.'" },
    ],
    klas3: [
      { q: "Qu'est-ce que le subjonctif?", options: ["Aantoonende wijs", "Aanvoegende wijs voor twijfel/wens/gevoel", "Bevelende wijs", "Verleden tijd"], answer: 1, explanation: "Subjonctif: after expressions of doubt, wish, emotion: 'Je veux que tu viennes'." },
      { q: "Que signifie 'or' en français?", options: ["Of/noch", "Welnu/echter (argumentatief)", "Want", "Maar"], answer: 1, explanation: "'Or' = welnu, echter (redeneerend voegwoord in argumentatieve teksten)." },
      { q: "Qu'est-ce que le passé simple?", options: ["Imparfait", "Voltooide verleden tijd (schriftelijk)", "Futur", "Passé composé"], answer: 1, explanation: "Passé simple: voltooide verleden tijd in formele/literaire teksten." },
      { q: "Que signifie 'par conséquent'?", options: ["Desondanks", "Bijgevolg/als gevolg", "Hoewel", "Terwijl"], answer: 1, explanation: "'Par conséquent' = bijgevolg, als gevolg." },
      { q: "Qu'est-ce que le gérondif?", options: ["Infinitief", "'En' + présent participe (en faisant)", "Conditionnel", "Subjonctif"], answer: 1, explanation: "Gérondif: 'en + présent participe': en mangeant = terwijl ik at." },
      { q: "Que signifie 'bien que'?", options: ["Omdat", "Hoewel (+ subjonctif)", "Als", "Wanneer"], answer: 1, explanation: "'Bien que' = hoewel (+ subjonctif altijd)." },
      { q: "Qu'est-ce que le discours indirect?", options: ["Direct citaat", "Gerapporteerde rede", "Monoloog", "Dialoog"], answer: 1, explanation: "Discours indirect: 'Il a dit qu'il viendrait' = gerapporteerde rede." },
      { q: "Que signifie 'en revanche'?", options: ["Aan de andere kant/daarentegen", "Bovendien", "Omdat", "Zo"], answer: 0, explanation: "'En revanche' = aan de andere kant, daarentegen." },
      { q: "Comment forme-t-on le subjonctif présent?", options: ["Stam futur + uitgang", "3e persoon meervoud presens-stam + -e, -es, -e, -ions, -iez, -ent", "Infinitief + subjonctif-uitgang", "avoir + participe passé"], answer: 1, explanation: "Subjonctif: 3mv-stam + -e, -es, -e, -ions, -iez, -ent." },
      { q: "Que signifie 'd'autant plus que'?", options: ["Minder omdat", "Des te meer omdat", "Hoewel", "Ondanks"], answer: 1, explanation: "'D'autant plus que' = des te meer omdat (versterking argument)." },
      { q: "Qu'est-ce que l'hyperbole en littérature?", options: ["Vergelijking met 'comme'", "Overdrijving", "Personificatie", "Metafoor"], answer: 1, explanation: "L'hyperbole = overdrijving om effect te versterken." },
      { q: "Que signifie 'à cet égard'?", options: ["Op dat moment", "In dat opzicht/in dit verband", "Aan de andere kant", "Bovendien"], answer: 1, explanation: "'À cet égard' = in dit opzicht, daarvoor." },
      { q: "Qu'est-ce que la litote?", options: ["Overdrijving", "Understatement (iets zeggen via ontkenning van het tegendeel)", "Vergelijking", "Ironie"], answer: 1, explanation: "Litote: 'Ce n'est pas mal' = het is (heel) goed." },
      { q: "Que signifie 'il s'agit de'?", options: ["Het gaat over/het betreft", "Het is nodig", "Het lijkt op", "Het begint met"], answer: 0, explanation: "'Il s'agit de' = het gaat over, het betreft." },
      { q: "Comment forme-t-on le conditionnel passé?", options: ["Futur + subjonctif", "Conditionnel de avoir/être + participe passé", "Imparfait + participe passé", "Futur antérieur"], answer: 1, explanation: "Conditionnel passé: aurais/serais + participe passé = zou hebben gedaan." },
      { q: "Que signifie 'certes'?", options: ["Zeker/inderdaad (maar)", "Nooit", "Misschien", "Soms"], answer: 0, explanation: "'Certes' = zeker, inderdaad (vaak gevolgd door 'mais')." },
      { q: "Qu'est-ce que le naturalisme en littérature?", options: ["Romantische stijl", "Wetenschappelijke, deterministische benadering van de roman", "Symbolistische stijl", "Modernisme"], answer: 1, explanation: "Naturalisme: Zola — roman als wetenschappelijk experiment." },
      { q: "Que signifie 'désormais'?", options: ["Vroeger", "Voortaan/van nu af aan", "Totdat", "Inmiddels"], answer: 1, explanation: "'Désormais' = voortaan, van nu af aan." },
      { q: "Qu'est-ce que le registre de langue?", options: ["Uitspraak", "Taalniveau (formeel/informeel/argot)", "Spelling", "Grammatica"], answer: 1, explanation: "Registre = taalregister: niveau van formaliteit." },
      { q: "Que signifie 'voire'?", options: ["Zelfs (versterking)", "Of", "Misschien", "Tenzij"], answer: 0, explanation: "'Voire' = zelfs, of zelfs nog (versterkt een stelling)." },
      { q: "Qu'est-ce que le style indirect libre?", options: ["Directe rede", "Versmelting van vertellersperspectief en gedachten van personage zonder aankondiging", "Indirecte rede", "Monologue intérieur"], answer: 1, explanation: "Style indirect libre: 'Elle sortit. Il ferait beau, peut-être' — vertellersstem smelt samen met personage." },
      { q: "Que signifie 'au demeurant'?", options: ["Tenslotte/overigens", "Bovendien", "Hoewel", "Terwijl"], answer: 0, explanation: "'Au demeurant' = overigens, voor het overige (formeel argumentatief)." },
      { q: "Qu'est-ce que la polyphonie narrative?", options: ["Eén vertelstem", "Meerdere gelijkwaardige vertelstemmen/perspectieven", "Dialoog", "Flashback"], answer: 1, explanation: "Polyfonie (Bakhtine): elke stem heeft gelijkwaardige status — geen dominante verteller." },
      { q: "Que signifie 'nonobstant'?", options: ["Bovendien", "Desondanks/ondanks (formeel, juridisch taalgebruik)", "Omdat", "Wanneer"], answer: 1, explanation: "'Nonobstant' = ondanks, desondanks (formeel synoniem van 'malgré')." },
      { q: "Hoe vervoeg je 'être' in de subjonctif présent bij 'il'?", options: ["est", "soit", "sera", "serait"], answer: 1, explanation: "Subjonctif van 'être': que je sois, que tu sois, qu'il soit." },
      { q: "Que signifie 'partant'?", options: ["Vertrekkend", "Bijgevolg/dus (formeel redeneerwoord)", "Bovendien", "Hoewel"], answer: 1, explanation: "'Partant' = bijgevolg, dus (formeel argumentatief voegwoord)." },
      { q: "Qu'est-ce que la synecdoque?", options: ["Een metafoor", "Stijlfiguur waarbij een deel voor het geheel of het geheel voor een deel staat", "Vergelijking", "Personificatie"], answer: 1, explanation: "'Les voiles à l'horizon' (zeilen = schepen). Synecdoque: deel staat voor het geheel." },
      { q: "Que signifie 'il n'en reste pas moins que'?", options: ["Toch blijft het feit dat... (concessie gevolgd door stelling)", "Bovendien", "Hoewel", "Omdat"], answer: 0, explanation: "'Il n'en reste pas moins que' = het neemt niet weg dat... — sterke concessieve constructie." },
      { q: "Qu'est-ce que l'ironie dramatique dans un texte?", options: ["Ironie in dialoog", "De lezer weet meer dan het personage, wat spanning of tragiek creëert", "Verbale ironie", "Situationele ironie"], answer: 1, explanation: "Ironie dramatique: le lecteur connaît la vérité que le personnage ignore — crée tension ou pathos." },
    ],
  },
  maatschappijleer: {
    groep5: [
      { q: "Wat is democratie?", options: ["Eén persoon regeert", "Het volk heeft inspraak in het bestuur", "De koning beslist alles", "Een bedrijf regeert"], answer: 1, explanation: "Democratie = volksbestuur, burgers kiezen vertegenwoordigers." },
      { q: "Wat is een grondwet?", options: ["Een gewone wet", "De belangrijkste wet van een land", "Een Europese wet", "Een gemeentewet"], answer: 1, explanation: "De grondwet bevat de basisregels en rechten van een land." },
      { q: "Wie is het staatshoofd van Nederland?", options: ["De minister-president", "De koning/koningin", "De burgemeester van Amsterdam", "De voorzitter van de Tweede Kamer"], answer: 1, explanation: "De koning (of koningin) is het staatshoofd." },
      { q: "Wat is een burgemeester?", options: ["Hoofd van de gemeente", "Hoofd van de provincie", "Lid van het kabinet", "Voorzitter van de Tweede Kamer"], answer: 0, explanation: "De burgemeester is de bestuurder van een gemeente." },
      { q: "Wat is de Tweede Kamer?", options: ["Een rechtbank", "Het lagerhuis van het Nederlandse parlement", "De Senaat", "De gemeente"], answer: 1, explanation: "De Tweede Kamer is de volksvertegenwoordiging." },
      { q: "Wat is een mensenrecht?", options: ["Een recht voor volwassenen", "Een basisrecht voor alle mensen", "Een recht voor burgers", "Een privilege"], answer: 1, explanation: "Mensenrechten zijn fundamentele rechten voor alle mensen." },
      { q: "Wat is een politieke partij?", options: ["Een feest", "Een groep mensen met dezelfde politieke ideeën", "Een rechtbank", "Een vakbond"], answer: 1, explanation: "Partijen vertegenwoordigen bepaalde politieke standpunten." },
      { q: "Wat is verkiezingen houden?", options: ["Een festival", "Burgers kiezen hun vertegenwoordigers", "Een rechtszaak", "Een belasting betalen"], answer: 1, explanation: "Verkiezingen: burgers stemmen op politieke vertegenwoordigers." },
      { q: "Wat is een rechter?", options: ["Een politieagent", "Iemand die rechtszaken beoordeelt", "Een advocaat", "Een minister"], answer: 1, explanation: "Een rechter beslist in juridische geschillen." },
      { q: "Wat doet de politie?", options: ["Wetten maken", "De openbare orde handhaven", "Belasting innen", "Scholen besturen"], answer: 1, explanation: "De politie handhaaft wetten en beschermt burgers." },
      { q: "Wat is een wet?", options: ["Een advies", "Een bindende regel opgesteld door de overheid", "Een gewoonte", "Een mening"], answer: 1, explanation: "Wetten zijn bindende regels die voor iedereen gelden." },
      { q: "Wat is de Eerste Kamer?", options: ["Het lagerhuis", "De Senaat — controleert wetten van de Tweede Kamer", "Een rechtbank", "Een gemeente"], answer: 1, explanation: "De Eerste Kamer (Senaat) controleert wetgeving." },
      { q: "Wat is belasting?", options: ["Een gift aan de staat", "Verplichte betaling aan de overheid", "Een lening", "Een subsidie"], answer: 1, explanation: "Belasting is een verplichte bijdrage die burgers betalen." },
      { q: "Wie kiest de Tweede Kamer?", options: ["De koning", "De burgers via verkiezingen", "De minister-president", "De gemeenten"], answer: 1, explanation: "Burgers kiezen de leden van de Tweede Kamer." },
      { q: "Wat is een gemeente?", options: ["Een provincie", "Het kleinste bestuursniveau in Nederland", "Een nationaal bestuursniveau", "Een Europees begrip"], answer: 1, explanation: "Nederland heeft drie bestuursniveaus: Rijk, provincie, gemeente." },
      { q: "Wat is vrijheid van meningsuiting?", options: ["Je mag alles zeggen zonder regels", "Het recht om je mening te uiten (met grenzen)", "Een mediabedrijf", "Een recht voor politici"], answer: 1, explanation: "Vrijheid van meningsuiting = recht om je mening te uiten (binnen grenzen van de wet)." },
      { q: "Wat is pluriformiteit in de media?", options: ["Eén grote zender", "Verscheidenheid aan meningen en media", "Staatsmedia", "Betaald nieuws"], answer: 1, explanation: "Pluriformiteit: meerdere perspectieven en bronnen in de media." },
      { q: "Wat is een kabinet?", options: ["Een kast", "Het college van ministers dat regeert", "Het parlement", "De Senaat"], answer: 1, explanation: "Het kabinet = de ministers die samen de regering vormen." },
      { q: "Wat is een coalitie?", options: ["Een oorlog", "Samenwerking van partijen om een meerderheid te vormen", "Een verkiezing", "Een oppositie"], answer: 1, explanation: "Een coalitie is een samenwerking van partijen om te kunnen regeren." },
      { q: "Wat is de oppositie?", options: ["Partijen die het kabinet steunen", "Partijen die niet in het kabinet zitten en kritiek leveren", "De Eerste Kamer", "Het bestuur"], answer: 1, explanation: "Oppositie = partijen buiten de coalitie die controleren en bekritiseren." },
    ],
    groep7: [
      { q: "Wat is de trias politica?", options: ["Een Griekse filosoof", "Scheiding van wetgevende, uitvoerende en rechterlijke macht", "Een politieke partij", "Het Europees parlement"], answer: 1, explanation: "Trias politica: machtsevenwicht door drie gescheiden machten." },
      { q: "Wat is socialisatie?", options: ["Communisme", "Het proces waardoor je normen en waarden leert", "Sociale media", "Socialisme"], answer: 1, explanation: "Socialisatie: het aanleren van normen, waarden en gedrag in de samenleving." },
      { q: "Wat zijn grondrechten?", options: ["Rechten voor rijke mensen", "Fundamentele rechten in de grondwet", "Rechten van gemeenten", "Rechten voor kinderen"], answer: 1, explanation: "Grondrechten: basale rechten vastgelegd in de grondwet." },
      { q: "Wat is de rechtsstaat?", options: ["Een staat geregeerd door rechters", "Een staat waarbij de overheid gebonden is aan rechtsregels", "Hetzelfde als democratie", "Een dictatuur"], answer: 1, explanation: "Rechtsstaat: ook de overheid moet zich aan de wet houden." },
      { q: "Wat is een politiek standpunt?", options: ["Een feit", "Een mening over hoe iets geregeld moet worden", "Een wet", "Een uitspraak van de rechter"], answer: 1, explanation: "Een politiek standpunt is een mening over beleid of bestuur." },
      { q: "Wat is economische ongelijkheid?", options: ["Iedereen verdient hetzelfde", "Verschillen in inkomen en vermogen tussen mensen", "Werkloos zijn", "Belasting betalen"], answer: 1, explanation: "Economische ongelijkheid = inkomensverschillen in de samenleving." },
      { q: "Wat is een pressure group?", options: ["Een politieke partij", "Een lobbyorganisatie die druk uitoefent op besluitvorming", "Een vakbond", "Een rechtbank"], answer: 1, explanation: "Bv. Greenpeace: oefent druk uit op politiek zonder mee te regeren." },
      { q: "Wat is subsidiariteit in de EU?", options: ["Alles wordt Europees geregeld", "Beslissingen worden zo laag mogelijk in de hiërarchie genomen", "Subsidies voor landen", "Belastingharmonisatie"], answer: 1, explanation: "Subsidiariteit: EU regelt alleen wat niet beter nationaal/lokaal kan." },
      { q: "Wat is een referendum?", options: ["Verkiezingen", "Directe volksstemming over een specifiek onderwerp", "Een parlementaire stemming", "Een enquête"], answer: 1, explanation: "Bij een referendum stemmen burgers direct over een vraagstuk." },
      { q: "Wat is de verzorgingsstaat?", options: ["Een dictatuur", "Staat die basisbehoeften van burgers garandeert", "Een economisch systeem", "Een democratie"], answer: 1, explanation: "Verzorgingsstaat: sociale zekerheid, gezondheidszorg, onderwijs voor iedereen." },
      { q: "Wat is globalisering in sociaal perspectief?", options: ["Economische groei", "Toenemende mondiale verwevenheid van culturen en samenlevingen", "Immigratie", "Nationalisme"], answer: 1, explanation: "Globalisering verbindt culturen en samenlevingen wereldwijd." },
      { q: "Wat zijn sociale normen?", options: ["Wetten", "Ongeschreven gedragsregels in een samenleving", "Grondrechten", "Morele waarden"], answer: 1, explanation: "Normen zijn verwachtingen over gedrag (bv. groeten, voor ouderen opstaan)." },
      { q: "Wat is integratie in de context van migratie?", options: ["Assimilatie", "Meedoen aan de samenleving met behoud van eigen cultuur", "Terugkeer naar land van herkomst", "Isolatie"], answer: 1, explanation: "Integratie: deelnemen aan de samenleving én eigen identiteit behouden." },
      { q: "Wat zijn waarden?", options: ["Normen", "Fundamentele overtuigingen over wat goed/belangrijk is", "Wetten", "Rechten"], answer: 1, explanation: "Waarden: diepere overtuigingen (vrijheid, gelijkheid, eerlijkheid)." },
      { q: "Wat is het sociale contract (Rousseau)?", options: ["Arbeidscontract", "Overeenkomst tussen burgers en staat over wederzijdse rechten", "Verdrag tussen landen", "Huwelijkscontract"], answer: 1, explanation: "Sociale contract: burgers geven vrijheid op in ruil voor bescherming." },
      { q: "Wat is media literacy?", options: ["Media lezen", "Kritisch omgaan met en begrijpen van media-inhoud", "Televisie kijken", "Nieuws schrijven"], answer: 1, explanation: "Media literacy: begrijpen, analyseren en beoordelen van media." },
      { q: "Wat is een ideologie?", options: ["Een politieke partij", "Een samenhangend stelsel van politieke denkbeelden", "Een grondwet", "Een wet"], answer: 1, explanation: "Ideologie: samenhangend systeem van ideeën over hoe de samenleving moet zijn." },
      { q: "Wat is pluralisme?", options: ["Eén dominante cultuur", "Erkenning en respect voor diversiteit aan opvattingen", "Nationalisme", "Socialisme"], answer: 1, explanation: "Pluralisme: meerdere culturele, religieuze en politieke opvattingen naast elkaar." },
      { q: "Wat is burgerparticipatie?", options: ["Belasting betalen", "Actieve deelname van burgers aan het politieke proces", "Stemmen", "Lid zijn van een partij"], answer: 1, explanation: "Burgerparticipatie: burgers die actief meedenken en meebeslissen." },
      { q: "Wat is een democratisch deficit?", options: ["Tekort aan stemmen", "Gebrek aan democratische controle (bv. in de EU)", "Te veel democratie", "Corruptie"], answer: 1, explanation: "Democratisch deficit: besluiten worden genomen zonder voldoende democratische controle." },
    ],
    klas1: [
      { q: "Wat is de trias politica?", options: ["Italiaanse politiek", "Scheiding van drie machten in de staat", "Een politieke stroming", "Een Europees verdrag"], answer: 1, explanation: "Wetgevende, uitvoerende en rechterlijke macht zijn gescheiden." },
      { q: "Wat is een rechtsstaat?", options: ["Land met veel rechters", "Staat waarbij overheid en burgers aan rechtsregels gebonden zijn", "Hetzelfde als democratie", "Een monarchie"], answer: 1, explanation: "In een rechtsstaat is iedereen — inclusief de overheid — gebonden aan de wet." },
      { q: "Wat is politieke participatie?", options: ["Belasting betalen", "Actieve deelname aan het politieke proces", "Nieuws lezen", "Werken"], answer: 1, explanation: "Stemmen, demonstreren, lid zijn van een partij — allemaal participatie." },
      { q: "Wat zijn burgerrechten?", options: ["Rechten voor rijken", "Rechten die burgers hebben tegenover de overheid", "Plichten", "Rechten voor politici"], answer: 1, explanation: "Burgerrechten beschermen individuen tegen staatsmacht." },
      { q: "Wat is ideologie?", options: ["Een partijprogramma", "Samenhangend stelsel van ideeën over de gewenste samenleving", "Een wet", "Een beleidsnota"], answer: 1, explanation: "Ideologieën (liberalisme, socialisme, conservatisme) geven een politiek kompas." },
      { q: "Wat is het verschil tussen formele en informele normen?", options: ["Geen verschil", "Formeel = wettelijk vastgelegd; informeel = ongeschreven gedragsregels", "Formeel = ongeschreven", "Informeel = wettelijk"], answer: 1, explanation: "Formele normen: wetten. Informele normen: gewoonten, omgangsvormen." },
      { q: "Wat is een verzorgingsstaat?", options: ["Een socialistische staat", "Staat die sociale zekerheid biedt aan zijn burgers", "Een monarchie", "Een federale staat"], answer: 1, explanation: "Verzorgingsstaat: overheid garandeert zorg, onderwijs en uitkeringen." },
      { q: "Wat is democratisch pluralisme?", options: ["Eén politieke stroming", "Meerdere stromingen en partijen concurreren in een democratie", "Hetzelfde als liberalisme", "Eenpartijstaat"], answer: 1, explanation: "Pluralisme: meerdere partijen en ideologieën bestaan naast elkaar." },
      { q: "Wat is een grondwet?", options: ["De wet over gemeenten", "De fundamentele wet die de staatsinrichting en grondrechten vastlegt", "Een verdrag", "Een Europese wet"], answer: 1, explanation: "De grondwet is de hoogste wet van een land." },
      { q: "Wat is multiculturalisme?", options: ["Één cultuur is dominant", "Samenleven van meerdere culturen met gelijke erkenning", "Assimilatie", "Integratie"], answer: 1, explanation: "Multiculturalisme: erkenning en gelijke waardering van verschillende culturen." },
      { q: "Wat is het verschil tussen links en rechts in de politiek?", options: ["Geen verschil", "Links: gelijkheid, staatsinmenging; rechts: vrijheid, markt, traditie", "Rechts = links", "Links = conservatief"], answer: 1, explanation: "Links: nadruk op gelijkheid; rechts: nadruk op vrijheid en traditie." },
      { q: "Wat is een lobbyist?", options: ["Een politicus", "Iemand die druk uitoefent op politici voor een belang", "Een journalist", "Een rechter"], answer: 1, explanation: "Lobbyisten vertegenwoordigen belangen van bedrijven of organisaties." },
      { q: "Wat is de rol van de media in een democratie?", options: ["Propaganda verspreiden", "Informeren, controleren van macht en publiek debat faciliteren", "Wetten maken", "De overheid steunen"], answer: 1, explanation: "Media = 'vierde macht': controleert de andere drie machten." },
      { q: "Wat is constitutionele monarchie?", options: ["Koning heeft absolute macht", "Koningshuis met beperkte macht vastgelegd in grondwet", "Republiek", "Dictatuur"], answer: 1, explanation: "Nederland is een constitutionele monarchie: de koning regeert niet, maar bekleedt." },
      { q: "Wat is het subsidiariteitsbeginsel?", options: ["Subsidies voor gemeenten", "Beslissingen worden genomen op het laagst mogelijke niveau", "Europese belasting", "Centralisatie"], answer: 1, explanation: "Subsidiariteit: beslissen zo lokaal mogelijk, alleen Europees als het niet anders kan." },
      { q: "Wat is een politiek systeem?", options: ["Een partij", "Het geheel van instituties en regels waarmee een samenleving wordt bestuurd", "Een grondwet", "Een kieswet"], answer: 1, explanation: "Politiek systeem = de structuur van het bestuur (democratie, dictatuur, monarchie)." },
      { q: "Wat is de functie van de oppositie?", options: ["Het kabinet steunen", "Het kabinet controleren en alternatieven bieden", "Wetten uitvoeren", "Recht spreken"], answer: 1, explanation: "Oppositie controleert en bekritiseert het beleid van het kabinet." },
      { q: "Wat is maatschappelijke ongelijkheid?", options: ["Verschillen in lengte", "Ongelijke verdeling van kansen, inkomen en macht", "Gelijkheid voor de wet", "Culturele diversiteit"], answer: 1, explanation: "Ongelijkheid in inkomen, opleiding en kansen in de samenleving." },
      { q: "Wat is integratie (politiek)?", options: ["Volledig opgaan in een andere cultuur", "Meedoen aan de samenleving met behoud van eigen identiteit", "Assimilatie", "Isolatie"], answer: 1, explanation: "Integratie: participeren in de samenleving zonder eigen identiteit op te geven." },
      { q: "Wat is politiek links?", options: ["Nadruk op vrijheid en markt", "Nadruk op gelijkheid, solidariteit en staatsinmenging", "Conservatisme", "Nationalisme"], answer: 1, explanation: "Links: meer gelijkheid, herverdeling, sterkere overheidsrol." },
    ],
    klas3: [
      { q: "Wat is de trias politica in de praktijk?", options: ["Alleen theorie", "Scheiding van machten: parlement, kabinet, rechter onafhankelijk", "Één macht in drie kamers", "Alleen in Nederland"], answer: 1, explanation: "Wetgevend (parlement), uitvoerend (kabinet) en rechterlijk (rechters) zijn gescheiden." },
      { q: "Wat is een sociaal contract (Rawls)?", options: ["Arbeidsovereenkomst", "Eerlijk stelsel achter een 'sluier van onwetendheid'", "Rousseau's theorie", "Sociale zekerheid"], answer: 1, explanation: "Rawls: kies de samenleving als je niet weet welke positie je krijgt — rechtvaardigheidstheorie." },
      { q: "Wat is het democratisch deficit in de EU?", options: ["Te weinig stemmen", "Gebrek aan democratische controle over EU-besluitvorming", "Te veel democratie", "Tekort aan parlementsleden"], answer: 1, explanation: "EU-besluiten worden deels genomen zonder directe democratische controle." },
      { q: "Wat is deliberatieve democratie?", options: ["Directe democratie", "Democratie gebaseerd op publiek debat en deliberatie", "Representatieve democratie", "Technocratie"], answer: 1, explanation: "Deliberatieve democratie: besluiten na openbaar debat en afweging van argumenten." },
      { q: "Wat is het verschil tussen negatieve en positieve vrijheid?", options: ["Geen", "Negatief = vrijheid van inmenging; positief = vrijheid om iets te kunnen", "Positief = geen inmenging", "Negatief = meer vrijheid"], answer: 1, explanation: "Isaiah Berlin: negatief = vrij van; positief = vrij om te." },
      { q: "Wat is een technocratie?", options: ["Democratie via technologie", "Bestuur door technici/experts i.p.v. gekozen politici", "Een digitale overheid", "AI-bestuur"], answer: 1, explanation: "Technocratie: beslissingen worden genomen op basis van expertise." },
      { q: "Wat is het verschil tussen formele en materiële rechtsstaat?", options: ["Geen", "Formeel = regels gevolgd; materieel = ook inhoud rechtvaardig", "Materieel = alleen procedures", "Formeel = rechtvaardig"], answer: 1, explanation: "Formeel: wetten worden gevolgd. Materieel: ook de inhoud van wetten is rechtvaardig." },
      { q: "Wat is de pijlerstructuur (verzuiling) in Nederland?", options: ["Politiek systeem", "Scheiding van samenleving in religieuze/ideologische blokken", "Mediavrijheid", "Federalisme"], answer: 1, explanation: "Verzuiling: katholieken, protestanten, socialisten elk met eigen scholen, media en organisaties." },
      { q: "Wat is populisme?", options: ["Democratie", "Politiek appél op 'het volk' tegenover 'de elite'", "Nationalisme", "Socialisme"], answer: 1, explanation: "Populisme: 'gewone mensen' tegenover corrupte elite." },
      { q: "Wat is een federale staat?", options: ["Eenheidsstaat", "Staat met gedecentraliseerde deelstaten met eigen bevoegdheden", "Confederatie", "Monarchie"], answer: 1, explanation: "Federale staat: bv. VS, Duitsland — deelstaten hebben eigen wetgeving." },
      { q: "Wat is het principe van checks and balances?", options: ["Financiële controle", "Wederzijdse controle tussen de drie staatsmachten", "Auditing", "Begroting"], answer: 1, explanation: "Checks and balances: de drie machten controleren en begrenzen elkaar." },
      { q: "Wat is het verschil tussen assimilatie en integratie?", options: ["Geen", "Assimilatie = eigen cultuur opgeven; integratie = meedoen mét eigen identiteit", "Integratie = assimileren", "Assimilatie = multiculturalisme"], answer: 1, explanation: "Assimilatie: volledig opgaan in de dominante cultuur." },
      { q: "Wat is een politieke cultuur?", options: ["Feesten en tradities", "Gedeelde waarden, normen en opvattingen over politiek in een samenleving", "Kunst", "Media"], answer: 1, explanation: "Politieke cultuur bepaalt hoe burgers naar politiek kijken en daarin participeren." },
      { q: "Wat is het maatschappelijk middenveld?", options: ["De overheid", "Organisaties tussen overheid en individu (vakbonden, ngo's, kerk)", "Het bedrijfsleven", "De media"], answer: 1, explanation: "Maatschappelijk middenveld: organisaties die de kloof tussen burger en staat overbruggen." },
      { q: "Wat is een grondrecht in horizontale werking?", options: ["Grondrecht tussen burger en staat", "Grondrecht dat ook geldt in relaties tussen burgers onderling", "Internationaal recht", "Europees recht"], answer: 1, explanation: "Horizontale werking: grondrechten gelden ook tussen private partijen." },
      { q: "Wat is het panopticum als metafoor (Foucault)?", options: ["Een politiek systeem", "Machtsuitoefening via surveillance en zelfcontrole", "Een gevangenis", "Een mediamodel"], answer: 1, explanation: "Foucault: de wetenschap dat je bewaakt kunt worden, leidt tot zelfcorrectie." },
      { q: "Wat is nationale soevereiniteit?", options: ["Internationaal recht", "Het hoogste gezag van een staat binnen zijn eigen grenzen", "EU-lidmaatschap", "Federalisme"], answer: 1, explanation: "Soevereiniteit: de staat heeft de hoogste macht over zijn eigen grondgebied." },
      { q: "Wat is politiek cynisme?", options: ["Politieke betrokkenheid", "Wantrouwen ten opzichte van politici en het politieke systeem", "Populisme", "Apathie"], answer: 1, explanation: "Cynisme: burgers geloven niet meer dat politiek iets positiefs oplevert." },
      { q: "Wat is een rechtspositivist?", options: ["Iemand die voor rechtvaardigheid strijdt", "Iemand die stelt dat recht = wat wettelijk is vastgelegd", "Een rechtsfilosoof die moraal combineert met recht", "Een politicus"], answer: 1, explanation: "Rechtspositivisme: recht is wat door de staat is vastgelegd, ongeacht morele inhoud." },
      { q: "Wat is het verschil tussen rechtsstaat en democratie?", options: ["Geen", "Rechtsstaat = gebonden aan rechtsregels; democratie = volksbestuur — kunnen samengaan", "Rechtsstaat is onderdeel van democratie", "Democratie is altijd een rechtsstaat"], answer: 1, explanation: "Een land kan democratisch zijn maar niet volledig rechtsstatelijk, en vice versa." },
      { q: "Wat is institutioneel racisme?", options: ["Individuele vooroordelen", "Structurele ongelijkheid ingebakken in wetten, beleid en organisaties", "Openlijk racisme", "Discriminatie door individuen"], answer: 1, explanation: "Institutioneel racisme: systemische benadelingen die bepaalde groepen treffen, ook zonder opzet." },
      { q: "Wat is de 'prisoner's dilemma' in de speltheorie?", options: ["Een crimineel geval", "Een situatie waar individuen rationeel kiezen maar een slechter gezamenlijk resultaat bereiken", "Een rechtszaak", "Een economisch model"], answer: 1, explanation: "Gevangenendilemma: samenwerken levert meer op, maar rationeel eigenbelang leidt tot een slechter resultaat." },
      { q: "Wat is politieke apathie?", options: ["Actieve politieke deelname", "Gebrek aan interesse en betrokkenheid bij politiek", "Politiek cynisme", "Proteststemmen"], answer: 1, explanation: "Apathie: burgers zijn niet geïnteresseerd in politiek en nemen niet deel." },
      { q: "Wat is het verschil tussen liberalisme en socialisme?", options: ["Geen verschil", "Liberalisme: individuele vrijheid en markt centraal; socialisme: gelijkheid en collectiviteit", "Socialisme = liberalisme", "Liberalisme = gelijkheid"], answer: 1, explanation: "Liberalisme (markt, vrijheid) vs. socialisme (herverdeling, gelijkheid, solidariteit)." },
      { q: "Wat is de rol van NGO's (niet-gouvernementele organisaties)?", options: ["Deel van de overheid", "Onafhankelijke organisaties die maatschappelijke doelen nastreven (Amnesty, Rode Kruis)", "Bedrijven", "Politieke partijen"], answer: 1, explanation: "NGO's: Amnesty International, Greenpeace, Oxfam — opereren onafhankelijk van overheden." },
      { q: "Wat is het verschil tussen universele en relatieve mensenrechten?", options: ["Geen verschil", "Universeel: voor iedereen altijd; relatief: afhankelijk van cultuur/context", "Relatief = voor iedereen", "Universeel = alleen voor Westerse landen"], answer: 1, explanation: "Universeel: UVRM geldt voor iedereen. Cultureel relativisme: rechten zijn contextafhankelijk." },
      { q: "Wat is een politieke agenda?", options: ["Een dagboek van een politicus", "De lijst van onderwerpen waaraan een regering of politieke organisatie prioriteit geeft", "Een verkiezingsprogramma", "Een persconferentie"], answer: 1, explanation: "De politieke agenda bepaalt welke kwesties als prioriteit worden behandeld." },
    ],
  },
  biologie: {
    klas1: [
      { q: "Wat is de taak van de celkern?", options: ["Energie aanmaken", "Erfelijke informatie opslaan en celdeling sturen", "Afval afbreken", "Eiwitten uitscheiden"], answer: 1, explanation: "De celkern bevat het DNA en stuurt alle celactiviteiten." },
      { q: "Wat is fotosynthese?", options: ["Verbranding van suiker", "Omzetten van lichtenergie naar suiker en zuurstof", "Opname van water", "Celdeling"], answer: 1, explanation: "Planten zetten zonnelicht + CO₂ + water om in glucose + O₂." },
      { q: "Hoe heet de buitenste laag van een dierlijke cel?", options: ["Celwand", "Celmembraan", "Celkern", "Vacuole"], answer: 1, explanation: "Het celmembraan regelt wat de cel in- en uitgaat." },
      { q: "Welk orgaan pompt bloed door het lichaam?", options: ["Long", "Lever", "Hart", "Nier"], answer: 2, explanation: "Het hart pompt bloed via een klein en groot bloedvatenstelsel." },
      { q: "Wat is een ecosysteem?", options: ["Alleen planten in een gebied", "Alle levende wezens én hun leefomgeving samen", "Een voedselketen", "Een klimaatzone"], answer: 1, explanation: "Een ecosysteem = biotische en abiotische factoren samen." },
      { q: "Wat produceert de long?", options: ["Zuurstof", "Koolstofdioxide wordt afgegeven; zuurstof opgenomen", "Glucose", "Stikstof"], answer: 1, explanation: "In de longen vindt gaswisseling plaats: O₂ in, CO₂ uit." },
      { q: "Wat zijn producenten in een voedselketen?", options: ["Dieren die planten eten", "Organismen die zelf voedsel aanmaken via fotosynthese", "Bacteriën", "Roofvogels"], answer: 1, explanation: "Planten zijn producenten: ze maken zelf organisch materiaal." },
      { q: "Wat is de functie van rode bloedcellen?", options: ["Infecties bestrijden", "Zuurstof vervoeren", "Bloedstolling", "Hormonen aanmaken"], answer: 1, explanation: "Rode bloedcellen bevatten hemoglobine dat zuurstof bindt." },
      { q: "Welke stof slaan planten op als energiereserve?", options: ["Eiwit", "Zetmeel", "Zout", "Cellulose"], answer: 1, explanation: "Planten slaan energie op als zetmeel (polysacharide)." },
      { q: "Wat is de huid als orgaan?", options: ["Een spijsverteringsorgaan", "Het grootste orgaan dat het lichaam beschermt", "Een klier", "Een zenuwstelsel"], answer: 1, explanation: "De huid beschermt, regelt temperatuur en neemt prikkels waar." },
      { q: "Wat is een voedingsstof?", options: ["Alles wat je eet", "Een stof die het lichaam energie of bouwstoffen levert", "Alleen vitamines", "Alleen mineralen"], answer: 1, explanation: "Voedingsstoffen: koolhydraten, eiwitten, vetten, vitamines en mineralen." },
      { q: "Hoe verloopt de spijsvertering in de maag?", options: ["Alleen mechanisch", "Mechanisch (malen) én chemisch (maagsap met enzymen)", "Alleen chemisch", "Via bloedvaten"], answer: 1, explanation: "Maagsap bevat maagzuur en pepsinogeen dat eiwitten afbreekt." },
      { q: "Wat is de functie van de nieren?", options: ["Bloed aanmaken", "Afvalstoffen filteren en urine produceren", "Hormonen aanmaken", "Vetopslag"], answer: 1, explanation: "De nieren filteren ~180 liter bloed per dag en maken urine." },
      { q: "Wat is een populatie?", options: ["Alle organismen op aarde", "Alle individuen van dezelfde soort in een gebied", "Een leefgemeenschap", "Een ecosysteem"], answer: 1, explanation: "Populatie = alle exemplaren van één soort in een bepaald gebied." },
      { q: "Welke cel bevat geen celkern?", options: ["Spiercel", "Rode bloedcel (erytrocyt)", "Zenuwcel", "Huidcel"], answer: 1, explanation: "Rijpe rode bloedcellen hebben geen celkern — zo is er meer ruimte voor hemoglobine." },
      { q: "Wat is de rol van chloroplasten?", options: ["Energie opslaan", "Fotosynthese uitvoeren", "Eiwitten maken", "DNA kopiëren"], answer: 1, explanation: "Chloroplasten bevatten chlorofyl en voeren fotosynthese uit." },
      { q: "Wat is een symbiose?", options: ["Parasitisme", "Samenleving waarbij beide soorten voordeel hebben", "Concurrentie", "Predatie"], answer: 1, explanation: "Mutualisme (wederzijdse symbiose): beide partners profiteren." },
      { q: "Hoe heet de opname van zuurstof door cellen?", options: ["Fotosynthese", "Celademhaling (aerobe respiratie)", "Gisting", "Diffusie"], answer: 1, explanation: "Celademhaling: glucose + O₂ → CO₂ + water + energie (ATP)." },
      { q: "Wat is DNA?", options: ["Een eiwit", "Een molecuul dat erfelijke informatie codeert", "Een vetzuur", "Een koolhydraat"], answer: 1, explanation: "DNA (desoxyribonucleïnezuur) bevat de genetische code van een organisme." },
      { q: "Wat is een reflex?", options: ["Een bewuste handeling", "Een snelle, onbewuste reactie op een prikkel via het ruggenmerg", "Een hersenfunctie", "Een hormoon"], answer: 1, explanation: "Reflexboog: prikkel → sensorcel → ruggenmerg → motorcel → spier." },
      { q: "Wat is de bloedsomloop?", options: ["Alleen het hart", "Het systeem van hart en bloedvaten dat bloed door het lichaam pompt", "Alleen de aders", "De lymfeknooppunten"], answer: 1, explanation: "Kleine kringloop: hart → longen → hart. Grote kringloop: hart → lichaam → hart." },
      { q: "Wat is de functie van het skelet?", options: ["Alleen bescherming", "Stevigheid, beweging, bescherming van organen en aanmaak bloedcellen", "Alleen beweging", "Alleen bloedcelvorming"], answer: 1, explanation: "Het skelet geeft het lichaam vorm, beschermt organen, maakt bloedcellen aan en stelt beweging mogelijk." },
      { q: "Wat is zenuwweefsel?", options: ["Spierweefsel", "Weefsel dat impulsen geleidt via neuronen", "Bindweefsel", "Dekweefsel"], answer: 1, explanation: "Zenuwweefsel bestaat uit neuronen die elektrische signalen doorgeven." },
      { q: "Wat is een hormoon?", options: ["Een enzym", "Een chemische boodschapper aangemaakt door klieren", "Een eiwit in cellen", "Een neurotransmitter"], answer: 1, explanation: "Hormonen (bv. insuline, adrenaline) worden via het bloed getransporteerd naar doelorganen." },
      { q: "Wat is het verschil tussen aerobe en anaerobe ademhaling?", options: ["Geen verschil", "Aeroob = met zuurstof, meer ATP; anaeroob = zonder zuurstof, minder ATP en melkzuur", "Anaeroob = meer ATP", "Aeroob = zonder zuurstof"], answer: 1, explanation: "Aerobe ademhaling: glucose + O₂ → CO₂ + H₂O + veel ATP. Anaeroob: minder efficiënt." },
      { q: "Wat is de rol van de lever?", options: ["Bloed aanmaken", "Afvalstoffen ontgiften, eiwitten aanmaken, galafscheiding", "Bloed filteren (zoals nieren)", "Zuurstof opnemen"], answer: 1, explanation: "De lever is het belangrijkste ontgiftingsorgaan en maakt gal aan voor de vetvertering." },
      { q: "Wat is spierweefsel?", options: ["Weefsel dat beschermt", "Weefsel dat door samentrekking beweging veroorzaakt", "Weefsel dat signalen geleidt", "Weefsel dat organen omhult"], answer: 1, explanation: "Spierweefsel (dwarsgestreept, glad, hartspier) maakt beweging mogelijk door contractie." },
      { q: "Wat is de functie van witte bloedcellen?", options: ["Zuurstof transporteren", "Infecties en ziekten bestrijden (immuunsysteem)", "Bloedstolling", "CO₂ verwijderen"], answer: 1, explanation: "Witte bloedcellen (leukocyten) herkennen en verwijderen ziekteverwekkers." },
      { q: "Wat is diffusie bij biologische processen?", options: ["Actief transport tegen concentratieverval in", "Passieve verspreiding van moleculen van hoge naar lage concentratie", "Osmose van water", "Transport via bloedvaten"], answer: 1, explanation: "Bv. zuurstof diffundeert van de longen naar het bloed (hoge → lage concentratie)." },
    ],
    klas3: [
      { q: "Wat is de wet van Mendel (segregatie)?", options: ["Eigenschappen mengen", "Allelen scheiden tijdens de vorming van geslachtscellen", "Mutaties", "Crossing-over"], answer: 1, explanation: "De wet van segregatie: allelen scheiden bij meiose, elk gameet krijgt 1 allel." },
      { q: "Wat is een dominant allel?", options: ["Een recessief gen", "Een allel dat tot uiting komt ook als er slechts 1 kopie aanwezig is", "Een gemuteerd gen", "Een X-chromosoom"], answer: 1, explanation: "Dominant: 1 kopie is voldoende voor fenotypische expressie." },
      { q: "Wat is mitose?", options: ["Reductiedeling voor geslachtscellen", "Celdeling waarbij twee identieke dochtercellen ontstaan", "DNA-reparatie", "Eiwitproductie"], answer: 1, explanation: "Mitose: 1 cel → 2 identieke cellen (zelfde chromosoomaantal)." },
      { q: "Wat is meiose?", options: ["Gewone celdeling", "Reductiedeling die gameten vormt met de helft van het chromosoomaantal", "Mitose met mutatie", "Celdood"], answer: 1, explanation: "Meiose: diploïde cel → 4 haploïde gameten (bij mensen: 23 chromosomen)." },
      { q: "Wat is een homoloog chromosomenpaar?", options: ["Twee identieke chromosomen", "Twee chromosomen met genen voor dezelfde eigenschappen (één van vader, één van moeder)", "Geslachtschromosomen", "Mutante chromosomen"], answer: 1, explanation: "Homologen dragen allelen voor dezelfde kenmerken maar kunnen verschillen." },
      { q: "Wat is evolutie?", options: ["Aanpassing van individuen", "Verandering van allelefrequenties in een populatie over generaties", "Mutatie bij één organisme", "Migratie"], answer: 1, explanation: "Evolutie = verandering van populaties door selectie, drift, mutatie en migratie." },
      { q: "Wat is natuurlijke selectie?", options: ["Kweekkeuze door mensen", "Overleving en voortplanting van individuen met voordelige eigenschappen", "Toevalsprocessen", "Mutatie"], answer: 1, explanation: "Darwin: individuen met gunstige eigenschappen overleven en planten zich vaker voort." },
      { q: "Wat is een enzym?", options: ["Een hormoon", "Een biokatalysator (eiwit) die reacties versnelt", "Een vitaminesoort", "Een lipide"], answer: 1, explanation: "Enzymen verlagen de activeringsenergie van chemische reacties in het lichaam." },
      { q: "Wat is het verschil tussen RNA en DNA?", options: ["Geen verschil", "RNA is enkelstrengs en bevat uracil; DNA is dubbelstrengs en bevat thymine", "RNA heeft desoxyribose", "DNA is enkelstrengs"], answer: 1, explanation: "RNA: enkelstrengs, ribose, uracil. DNA: dubbelstrengs, desoxyribose, thymine." },
      { q: "Wat is homeostase?", options: ["Groei", "Het handhaven van een stabiele inwendige toestand (o.a. temperatuur, bloedsuiker)", "Celdeling", "Evolutie"], answer: 1, explanation: "Homeostase: negatieve terugkoppeling houdt interne omgeving constant." },
      { q: "Wat is de rol van insuline?", options: ["Bloedsuiker verhogen", "Bloedsuikerspiegel verlagen door glucoseopname te stimuleren", "Vetafbraak", "Groei stimuleren"], answer: 1, explanation: "Insuline (alvleesklier): stimuleert cellen glucose op te nemen → lagere bloedsuiker." },
      { q: "Wat is een gen?", options: ["Een chromosoom", "Een stukje DNA dat codeert voor een eiwit of functie", "Een allel", "Een celkern"], answer: 1, explanation: "Een gen = DNA-segment met informatie voor de aanmaak van een specifiek eiwit." },
      { q: "Wat is crossing-over?", options: ["Mutatie", "Uitwisseling van chromosoomstukken tussen homologen tijdens meiose I", "Genexpressie", "Celcyclus"], answer: 1, explanation: "Crossing-over bij profase I vergroot genetische variatie in gameten." },
      { q: "Wat is een mutatie?", options: ["Een normale celdeling", "Een permanente verandering in de DNA-volgorde", "Epigenetica", "Transcriptie"], answer: 1, explanation: "Mutaties kunnen spontaan of door mutagenen (UV, chemicaliën) optreden." },
      { q: "Hoe werkt het immuunsysteem bij een tweede infectie?", options: ["Trager, want het is vermoeid", "Sneller, door geheugen-B- en T-cellen van de eerste infectie", "Even snel als de eerste keer", "Alleen via antilichamen"], answer: 1, explanation: "Immunologisch geheugen: herkenning van antigenen leidt tot snellere reactie." },
      { q: "Wat is een ecosysteem in evenwicht?", options: ["Geen verandering ooit", "Een dynamisch evenwicht waarbij populaties schommelen rond een gemiddelde", "Alleen planten aanwezig", "Constante biomassa"], answer: 1, explanation: "Evenwicht = fluctuaties, maar het systeem keert terug naar een stabiele toestand." },
      { q: "Wat is bioaccumulatie?", options: ["Fotosynthese", "Ophoping van giftige stoffen in organismen hoger in de voedselketen", "Rottingsproces", "Stofwisseling"], answer: 1, explanation: "PCB's en kwik accumuleren en zijn hoger in de keten geconcentreerder (biomagnificatie)." },
      { q: "Wat is de rol van mitochondriën?", options: ["Eiwitten aanmaken", "ATP produceren via celademhaling (energiecentrale van de cel)", "DNA opslaan", "Afval afbreken"], answer: 1, explanation: "Mitochondriën: oxidatieve fosforylering → ATP." },
      { q: "Wat is het verschil tussen ecto- en endotherme dieren?", options: ["Grootte", "Ectotherm = lichaamstemperatuur afhankelijk van omgeving; endotherm = eigen temperatuurregeling", "Voortplanting", "Voeding"], answer: 1, explanation: "Reptielen zijn ectotherm; zoogdieren en vogels zijn endotherm." },
      { q: "Wat is genexpressie?", options: ["DNA-kopiëren", "Het proces waarbij genetische informatie wordt omgezet in een functioneel product (eiwit)", "Meiose", "Mutatie"], answer: 1, explanation: "Genexpressie: transcriptie (DNA→RNA) en translatie (RNA→eiwit)." },
      { q: "Wat is een fenotype?", options: ["De genetische samenstelling van een organisme", "De waarneembare kenmerken van een organisme (uiterlijk, gedrag)", "Een allel", "Een chromosoom"], answer: 1, explanation: "Fenotype: wat je kunt waarnemen. Genotype: de genetische code." },
      { q: "Wat is de functie van ribosomen?", options: ["DNA kopiëren", "Eiwitten synthetiseren op basis van mRNA-instructies", "ATP aanmaken", "Celdeling sturen"], answer: 1, explanation: "Ribosomen vertalen mRNA in aminozuurketens → eiwitten (translatie)." },
      { q: "Wat is een codon?", options: ["Een gen", "Een reeks van drie basen in mRNA die codeert voor één aminozuur", "Een allel", "Een chromosoom"], answer: 1, explanation: "Codon: drie-nucleotidesequentie in mRNA die één aminozuur specificeert." },
      { q: "Wat is een ras (subspecies) in biologische zin?", options: ["Een andere soort", "Een populatie van een soort met genetisch onderscheidbare kenmerken", "Een hybride soort", "Een mutante soort"], answer: 1, explanation: "Subspecies: populaties van dezelfde soort met kleine genetische verschillen die geografisch gescheiden zijn." },
      { q: "Wat is het zenuwstelsel verdeeld in?", options: ["Centraal en autonoom", "Centraal zenuwstelsel (hersenen + ruggenmerg) en perifeer zenuwstelsel", "Sensorisch en motorisch alleen", "Vrijwillig en reflexmatig"], answer: 1, explanation: "CZS (hersenen + ruggenmerg) + PZS (alle andere zenuwen, incl. autonoom stelsel)." },
      { q: "Wat is een ecosysteemdienst?", options: ["Diensten van de overheid voor natuur", "Voordelen die de natuur de mens gratis levert (schoon water, lucht, bestuiving)", "Ecotoerisme", "Milieubescherming"], answer: 1, explanation: "Ecosysteemdiensten: bestuiving door bijen, waterfiltering door bossen, CO₂-opslag." },
      { q: "Wat is het verschil tussen RNA-polymerase en DNA-polymerase?", options: ["Geen verschil", "RNA-pol maakt mRNA (transcriptie); DNA-pol kopieert DNA (replicatie)", "DNA-pol maakt mRNA", "RNA-pol kopieert DNA"], answer: 1, explanation: "RNA-polymerase: transcriptie (DNA→mRNA). DNA-polymerase: replicatie (DNA→DNA)." },
      { q: "Wat is de energiepiramide in een ecosysteem?", options: ["Een grafiek van soorten", "Een weergave van hoe energie afneemt bij elk troffisch niveau", "Een voedselweb", "Een populatiemodel"], answer: 1, explanation: "Energiepiramide: ~10% van energie gaat door naar het volgende niveau (90% verlies als warmte)." },
      { q: "Wat is een antilichaam?", options: ["Een ziektekiem", "Een eiwit aangemaakt door B-cellen dat antigenen bindt en neutraliseert", "Een vaccin", "Een witte bloedcel"], answer: 1, explanation: "Antilichamen (immunoglobulinen) binden specifiek aan antigenen op ziekteverwekkers." },
    ],
  },
  wiskunde: {
    klas1: [
      { q: "Wat is de uitkomst van 3x + 5 = 14?", options: ["x = 2", "x = 3", "x = 4", "x = 6"], answer: 1, explanation: "3x = 14 - 5 = 9, dus x = 3." },
      { q: "Wat is de oppervlakte van een rechthoek van 6 × 4 cm?", options: ["10 cm²", "20 cm²", "24 cm²", "48 cm²"], answer: 2, explanation: "Oppervlakte rechthoek = lengte × breedte = 6 × 4 = 24 cm²." },
      { q: "Hoeveel is 15% van 80?", options: ["8", "10", "12", "15"], answer: 2, explanation: "15% van 80 = 0,15 × 80 = 12." },
      { q: "Wat is de omtrek van een vierkant met zijde 7 cm?", options: ["14 cm", "21 cm", "28 cm", "49 cm"], answer: 2, explanation: "Omtrek vierkant = 4 × zijde = 4 × 7 = 28 cm." },
      { q: "Welk getal komt na de komma bij 7 ÷ 4?", options: ["1,5", "1,75", "2,0", "2,25"], answer: 1, explanation: "7 ÷ 4 = 1,75." },
      { q: "Wat is de wortel van 144?", options: ["11", "12", "13", "14"], answer: 1, explanation: "√144 = 12, want 12 × 12 = 144." },
      { q: "Hoeveel graden telt een driehoek in totaal?", options: ["90°", "180°", "270°", "360°"], answer: 1, explanation: "De som van de hoeken in een driehoek is altijd 180°." },
      { q: "Wat is 2³?", options: ["6", "8", "9", "16"], answer: 1, explanation: "2³ = 2 × 2 × 2 = 8." },
      { q: "Welke breuk is gelijk aan 0,75?", options: ["½", "⅔", "¾", "⅘"], answer: 2, explanation: "0,75 = 75/100 = ¾." },
      { q: "Een trein rijdt 120 km in 1,5 uur. Wat is de snelheid?", options: ["60 km/u", "80 km/u", "90 km/u", "100 km/u"], answer: 1, explanation: "Snelheid = afstand ÷ tijd = 120 ÷ 1,5 = 80 km/u." },
      { q: "Wat is de oppervlakte van een cirkel met straal 5 cm? (π ≈ 3,14)", options: ["15,7 cm²", "31,4 cm²", "78,5 cm²", "157 cm²"], answer: 2, explanation: "A = π × r² = 3,14 × 25 = 78,5 cm²." },
      { q: "Vereenvoudig: 18/24", options: ["2/3", "3/4", "5/6", "4/5"], answer: 1, explanation: "GGD(18,24) = 6. 18÷6 = 3, 24÷6 = 4. Dus ¾." },
      { q: "Wat is −3 + (−5)?", options: ["−2", "2", "−8", "8"], answer: 2, explanation: "Negatief + negatief = negatiever: −3 + (−5) = −8." },
      { q: "Welke formule beschrijft de omtrek van een cirkel?", options: ["πr²", "2πr", "4πr", "πd²"], answer: 1, explanation: "Omtrek = 2πr (of πd waarbij d de diameter is)." },
      { q: "Los op: 2(x − 3) = 10", options: ["x = 5", "x = 7", "x = 8", "x = 4"], answer: 2, explanation: "2x − 6 = 10 → 2x = 16 → x = 8." },
      { q: "Hoeveel procent is 18 van 72?", options: ["15%", "20%", "25%", "30%"], answer: 2, explanation: "18/72 × 100 = 25%." },
      { q: "Wat is de mediaan van: 3, 7, 9, 2, 5?", options: ["3", "5", "7", "9"], answer: 1, explanation: "Gesorteerd: 2, 3, 5, 7, 9. Middelste getal = 5." },
      { q: "Wat is 10% van 350?", options: ["30", "35", "40", "45"], answer: 1, explanation: "10% = 1/10 van 350 = 35." },
      { q: "Een rechthoekige driehoek heeft zijden 3 en 4. Hoe lang is de hypotenusa?", options: ["5", "6", "7", "√7"], answer: 0, explanation: "Stelling van Pythagoras: 3² + 4² = 9 + 16 = 25 → √25 = 5." },
      { q: "Welke grafiek beschrijft y = 2x + 1?", options: ["Parabool", "Rechte lijn", "Hyperbool", "Cirkel"], answer: 1, explanation: "y = 2x + 1 is een lineaire functie → rechte lijn met rico 2 en snijpunt (0,1)." },
      { q: "Hoeveel is 3/5 + 2/5?", options: ["5/10", "1", "5/5", "6/5"], answer: 1, explanation: "3/5 + 2/5 = 5/5 = 1." },
      { q: "Wat is de omtrek van een cirkel met diameter 10 cm? (π ≈ 3,14)", options: ["15,7 cm", "31,4 cm", "78,5 cm", "100 cm"], answer: 1, explanation: "Omtrek = π × d = 3,14 × 10 = 31,4 cm." },
      { q: "Los op: 4x − 2 = 14", options: ["x = 3", "x = 4", "x = 5", "x = 6"], answer: 1, explanation: "4x = 16, x = 4." },
      { q: "Wat is de modus van: 2, 3, 3, 4, 5, 3, 6?", options: ["2", "3", "4", "5"], answer: 1, explanation: "De modus is het meest voorkomende getal: 3 (komt 3 keer voor)." },
      { q: "Hoeveel graden heeft een vierkant in totaal?", options: ["90°", "180°", "270°", "360°"], answer: 3, explanation: "Een vierkant heeft 4 rechte hoeken van 90° elk: 4 × 90° = 360°." },
      { q: "Bereken: (3 + 7) × 4", options: ["25", "30", "40", "50"], answer: 2, explanation: "(3+7) = 10 en dan × 4 = 40. Haakjes eerst." },
      { q: "Wat is 0,1 + 0,9?", options: ["0,10", "0,19", "1,0", "1,9"], answer: 2, explanation: "0,1 + 0,9 = 1,0." },
      { q: "Een kamer is 5 m lang en 4 m breed. Bereken de oppervlakte.", options: ["9 m²", "18 m²", "20 m²", "20 m"], answer: 2, explanation: "Oppervlakte = lengte × breedte = 5 × 4 = 20 m²." },
      { q: "Wat is de wortel van 49?", options: ["5", "6", "7", "8"], answer: 2, explanation: "√49 = 7, want 7 × 7 = 49." },
    ],
    klas3: [
      { q: "Wat is de discriminant van x² + 2x − 3?", options: ["4", "8", "16", "−4"], answer: 2, explanation: "D = b² − 4ac = 4 − 4(1)(−3) = 4 + 12 = 16." },
      { q: "Bereken de nulpunten van x² − 5x + 6 = 0.", options: ["x = 1 en x = 6", "x = 2 en x = 3", "x = −2 en x = −3", "x = 0 en x = 5"], answer: 1, explanation: "Ontbinden: (x−2)(x−3) = 0 → x = 2 of x = 3." },
      { q: "Wat is sin(30°)?", options: ["√3/2", "1/2", "√2/2", "1"], answer: 1, explanation: "sin(30°) = ½ (onthoud: 30-60-90 driehoek)." },
      { q: "Hoe luidt de stelling van Pythagoras?", options: ["a + b = c", "a² + b² = c²", "a × b = c²", "2a + 2b = c"], answer: 1, explanation: "In een rechthoekige driehoek geldt: a² + b² = c² (c = hypotenusa)." },
      { q: "Wat is de afgeleide van f(x) = 3x²?", options: ["3x", "6x", "6x²", "9x"], answer: 1, explanation: "f'(x) = 2 × 3x^(2−1) = 6x." },
      { q: "Wat is de exponentiële groei als formule?", options: ["N = N₀ + rt", "N = N₀ × gᵗ", "N = N₀ / t", "N = N₀ − gt"], answer: 1, explanation: "Exponentiële groei: N = N₀ × gᵗ waarbij g de groeifactor is." },
      { q: "Bereken de hoek tegenover de zijde van 5 in een driehoek met zijden 3-4-5.", options: ["30°", "45°", "60°", "90°"], answer: 3, explanation: "3² + 4² = 5² → rechte hoek tegenover de 5 (hypotenusa) = 90°." },
      { q: "Wat is log₁₀(1000)?", options: ["2", "3", "4", "10"], answer: 1, explanation: "log₁₀(1000) = 3, want 10³ = 1000." },
      { q: "Wat is de formule voor de oppervlakte van een bol?", options: ["4πr²", "⁴⁄₃πr³", "2πr²", "πr²"], answer: 0, explanation: "Oppervlakte bol = 4πr²." },
      { q: "Vereenvoudig: (x² − 4) / (x − 2)", options: ["x − 2", "x + 2", "x² + 2", "2"], answer: 1, explanation: "x² − 4 = (x−2)(x+2) → delen door (x−2) geeft x + 2." },
      { q: "Wat is de gemiddelde verandering van f(x) = x² op [1, 3]?", options: ["2", "4", "6", "8"], answer: 1, explanation: "(f(3)−f(1))/(3−1) = (9−1)/2 = 8/2 = 4." },
      { q: "Wat is cos(60°)?", options: ["√3/2", "1/2", "√2/2", "0"], answer: 1, explanation: "cos(60°) = ½." },
      { q: "Welke functie heeft een asymptoot bij x = 0?", options: ["f(x) = x²", "f(x) = 1/x", "f(x) = √x", "f(x) = 2x"], answer: 1, explanation: "f(x) = 1/x is niet gedefinieerd bij x = 0 → verticale asymptoot." },
      { q: "Wat is de inverse van f(x) = 2x + 4?", options: ["f⁻¹(x) = x/2 − 2", "f⁻¹(x) = 2x − 4", "f⁻¹(x) = x − 2", "f⁻¹(x) = (x−4)/2"], answer: 0, explanation: "Wissel x en y: x = 2y + 4 → y = (x−4)/2 = x/2 − 2." },
      { q: "Wat is het teken van de tweede afgeleide bij een maximum?", options: ["Positief", "Nul", "Negatief", "Onbepaald"], answer: 2, explanation: "Bij een maximum: f''(x) < 0 (concaaf)." },
      { q: "Hoeveel oplossingen heeft x² + 4 = 0 in de reële getallen?", options: ["0", "1", "2", "Oneindig"], answer: 0, explanation: "x² = −4 heeft geen reële oplossing (discriminant negatief)." },
      { q: "Wat is de standaardafwijking een maat voor?", options: ["Gemiddelde", "Spreiding van gegevens rondom het gemiddelde", "Mediaan", "Modus"], answer: 1, explanation: "Standaardafwijking σ meet hoe ver datapunten gemiddeld van het gemiddelde liggen." },
      { q: "Wat stelt het begrip 'rico' (richtingscoëfficiënt) voor?", options: ["Het snijpunt met de y-as", "De steilheid van een rechte lijn (Δy/Δx)", "De top van een parabool", "De nulpunten"], answer: 1, explanation: "Rico = Δy/Δx = (y₂−y₁)/(x₂−x₁)." },
      { q: "Bereken: √(50) in vereenvoudigde vorm.", options: ["5", "5√2", "10", "25√2"], answer: 1, explanation: "√50 = √(25×2) = 5√2." },
      { q: "Wat is de formule voor samengestelde interest na t jaar?", options: ["K = K₀(1 + r)t", "K = K₀ × r × t", "K = K₀ + r/t", "K = K₀ − rt"], answer: 0, explanation: "Samengestelde interest: K = K₀(1 + r)ᵗ waarbij r de rentevoet is." },
      { q: "Wat is een goniometrische vergelijking?", options: ["Een lineaire vergelijking", "Een vergelijking met sin, cos of tan als hoofdfunctie", "Een kwadratische vergelijking", "Een exponentiële vergelijking"], answer: 1, explanation: "Bv: sin(x) = 0,5 → x = 30° + 360°n of x = 150° + 360°n." },
      { q: "Bereken: d/dx (x² + 3x − 5)", options: ["x + 3", "2x + 3", "2x − 5", "x² + 3"], answer: 1, explanation: "Afgeleid term voor term: 2x + 3 − 0 = 2x + 3." },
      { q: "Wat is de periode van f(x) = sin(2x)?", options: ["π", "2π", "4π", "π/2"], answer: 0, explanation: "Periode van sin(bx) = 2π/b = 2π/2 = π." },
      { q: "Hoeveel oplossingen heeft het stelsel: y = x + 1 en y = x + 3?", options: ["0", "1", "2", "Oneindig"], answer: 0, explanation: "Twee parallelle lijnen (zelfde helling, ander snijpunt) hebben geen snijpunt → 0 oplossingen." },
      { q: "Wat is een kegelsnede?", options: ["Een cirkel alleen", "Een vorm die ontstaat bij doorsnijding van een kegel (cirkel, ellips, parabool, hyperbool)", "Een driehoek", "Een veelhoek"], answer: 1, explanation: "Kegelsneden: cirkel, ellips, parabool, hyperbool — afhankelijk van de hoek van doorsnijding." },
      { q: "Bereken: ∫₁² (2x + 1) dx", options: ["3", "4", "5", "6"], answer: 1, explanation: "[x² + x]₁² = (4+2) − (1+1) = 6 − 2 = 4." },
      { q: "Wat is de amplitude van f(x) = 3sin(x)?", options: ["1", "2", "3", "π"], answer: 2, explanation: "De amplitude is de coëfficiënt voor sin: hier 3." },
      { q: "Wat is ln(e³)?", options: ["3", "e³", "3e", "1/3"], answer: 0, explanation: "ln(eⁿ) = n, dus ln(e³) = 3." },
      { q: "Wat is een asymptoot van f(x) = e^x?", options: ["x = 0", "y = 0", "y = 1", "x = 1"], answer: 1, explanation: "Als x → -∞, dan e^x → 0 maar bereikt nooit 0. De x-as (y = 0) is horizontale asymptoot." },
    ],
  },
  nask: {
    klas1: [
      { q: "Wat is de eenheid van kracht?", options: ["Watt", "Joule", "Newton", "Pascal"], answer: 2, explanation: "Kracht wordt gemeten in Newton (N). F = m × a." },
      { q: "Welke stof is een goede elektrische geleider?", options: ["Hout", "Plastic", "Koper", "Rubber"], answer: 2, explanation: "Metalen zoals koper geleiden elektronen goed." },
      { q: "Wat is de formule voor snelheid?", options: ["v = t / s", "v = s × t", "v = s / t", "v = F × m"], answer: 2, explanation: "Snelheid (v) = afstand (s) gedeeld door tijd (t)." },
      { q: "Uit welke deeltjes bestaat een atoom?", options: ["Elektronen en protonen", "Protonen, neutronen en elektronen", "Ionen en moleculen", "Atomen en moleculen"], answer: 1, explanation: "Een atoom bestaat uit een kern (protonen + neutronen) en elektronen eromheen." },
      { q: "Wat is de aggregatietoestand van water bij 20°C?", options: ["Vast", "Vloeibaar", "Gas", "Plasma"], answer: 1, explanation: "Water is bij kamertemperatuur (20°C) vloeibaar." },
      { q: "Wat meet een thermometer?", options: ["Druk", "Temperatuur", "Massa", "Volume"], answer: 1, explanation: "Een thermometer meet de temperatuur in graden Celsius of Kelvin." },
      { q: "Wat is de symbool voor het element goud?", options: ["Go", "Gd", "Au", "Ag"], answer: 2, explanation: "Au (van het Latijnse 'Aurum') is het symbool voor goud." },
      { q: "Hoe heet het proces waarbij ijs smelt?", options: ["Verdamping", "Condensatie", "Smelten", "Stollen"], answer: 2, explanation: "Smelten: vaste stof → vloeistof (ijs → water bij 0°C)." },
      { q: "Wat is de formule voor dichtheid?", options: ["ρ = V/m", "ρ = m/V", "ρ = m × V", "ρ = F/A"], answer: 1, explanation: "Dichtheid (ρ) = massa (m) gedeeld door volume (V)." },
      { q: "Welk gas maakt ~78% van de lucht uit?", options: ["Zuurstof", "Koolstofdioxide", "Stikstof", "Argon"], answer: 2, explanation: "De atmosfeer bestaat voor ~78% uit stikstof (N₂) en ~21% uit zuurstof." },
      { q: "Wat is de eenheid van elektrische spanning?", options: ["Ampère", "Volt", "Ohm", "Watt"], answer: 1, explanation: "Elektrische spanning wordt gemeten in Volt (V)." },
      { q: "Wat is een mengsel?", options: ["Twee stoffen chemisch gebonden", "Stoffen zonder vaste verhouding samengevoegd", "Een zuivere stof", "Een element"], answer: 1, explanation: "In een mengsel zijn stoffen fysisch gemengd, niet chemisch gebonden." },
      { q: "Welke kracht trekt objecten naar de aarde?", options: ["Magnetisme", "Zwaartekracht", "Wrijving", "Luchtweerstand"], answer: 1, explanation: "De zwaartekracht (gravitatie) trekt massa's naar elkaar toe." },
      { q: "Wat doet een filter?", options: ["Stoffen oplossen", "Vaste deeltjes scheiden van een vloeistof", "Stoffen verhitten", "Stoffen condenseren"], answer: 1, explanation: "Filtratie scheidt onopgeloste vaste stoffen van een vloeistof." },
      { q: "Wat is de eenheid van massa?", options: ["Newton", "Liter", "Kilogram", "Joule"], answer: 2, explanation: "Massa wordt gemeten in kilogram (kg) in het SI-stelsel." },
      { q: "Hoe heet een stof die bestaat uit slechts één soort atoom?", options: ["Verbinding", "Mengsel", "Element", "Molecuul"], answer: 2, explanation: "Een element bestaat uit atomen van slechts één soort (bv. O₂, Fe)." },
      { q: "Wat is de wet van behoud van energie?", options: ["Energie kan verdwijnen", "Energie kan niet worden gemaakt of vernietigd, alleen omgezet", "Energie neemt altijd toe", "Energie = massa"], answer: 1, explanation: "Energie blijft behouden: het verandert alleen van vorm." },
      { q: "Welke schaal meet de sterkte van een aardbeving?", options: ["Beaufort", "Richter", "Celsius", "Decibel"], answer: 1, explanation: "De schaal van Richter (of Moment Magnitude) meet de kracht van aardbevingen." },
      { q: "Wat is de formule voor elektrisch vermogen?", options: ["P = U/I", "P = U × I", "P = I/U", "P = U²/R"], answer: 1, explanation: "Vermogen (P) = spanning (U) × stroomsterkte (I), in Watt." },
      { q: "Wat is de Wet van Ohm?", options: ["V = I/R", "V = I × R", "I = V × R", "R = V × I"], answer: 1, explanation: "Wet van Ohm: U = I × R (spanning = stroomsterkte × weerstand)." },
    ],
  },
  natuurkunde: {
    klas1: [
      { q: "Wat is de eenheid van energie?", options: ["Newton", "Watt", "Joule", "Pascal"], answer: 2, explanation: "Energie wordt uitgedrukt in Joule (J). Arbeid = kracht × verplaatsing." },
      { q: "Welke formule beschrijft de tweede wet van Newton?", options: ["F = m/a", "F = m × a", "F = a/m", "F = m + a"], answer: 1, explanation: "F = m × a: kracht = massa × versnelling." },
      { q: "Wat is de lichtsnelheid in vacuüm?", options: ["300 km/s", "3 × 10⁸ m/s", "300 m/s", "3000 km/s"], answer: 1, explanation: "Lichtsnelheid c ≈ 3 × 10⁸ m/s (300.000 km/s)." },
      { q: "Wat is kinetische energie?", options: ["Energie door positie", "Energie door beweging", "Warmte-energie", "Chemische energie"], answer: 1, explanation: "Eₖ = ½mv² — energie van een bewegend object." },
      { q: "Wat is potentiële energie?", options: ["Energie van beweging", "Energie opgeslagen door positie in een krachtsveld", "Elektrische energie", "Kernenergie"], answer: 1, explanation: "Ep = mgh — afhankelijk van hoogte in het zwaartekrachtsveld." },
      { q: "Hoe heet de weerstand die altijd aanwezig is bij beweging op een oppervlak?", options: ["Luchtweerstand", "Wrijving", "Zwaartekracht", "Spanning"], answer: 1, explanation: "Wrijving werkt altijd tegengesteld aan de bewegingsrichting." },
      { q: "Wat is het SI-symbool voor stroomsterkte?", options: ["V", "W", "A", "Ω"], answer: 2, explanation: "Stroomsterkte wordt gemeten in Ampère (A)." },
      { q: "Welk fenomeen verklaart waarom een lepel in water 'gebroken' lijkt?", options: ["Reflectie", "Breking (refractie)", "Diffractie", "Absorptie"], answer: 1, explanation: "Licht buigt af (breekt) wanneer het van het ene naar het andere medium gaat." },
      { q: "Wat is de formule voor druk?", options: ["P = F × A", "P = F / A", "P = A / F", "P = m × g"], answer: 1, explanation: "Druk (P) = kracht (F) gedeeld door oppervlak (A), in Pascal." },
      { q: "Wat is de frequentie van een geluidsgolf?", options: ["De amplitude", "Het aantal trillingen per seconde, in Hertz", "De golflengte", "De snelheid"], answer: 1, explanation: "Frequentie (f) in Hz = trillingen per seconde." },
      { q: "Wat is de formule voor arbeid (mechanisch)?", options: ["W = m × g", "W = F × d", "W = P × t", "W = m × v²"], answer: 1, explanation: "Arbeid W = kracht × verplaatsing (in Newton × meter = Joule)." },
      { q: "Wat is het principe van energiebehoud?", options: ["Energie kan verdwijnen", "Energie kan niet worden gecreëerd of vernietigd, alleen omgezet", "Energie neemt altijd toe", "Bewegingsenergie wordt altijd warmte"], answer: 1, explanation: "Wet van behoud van energie: totale energie in een gesloten systeem blijft constant." },
      { q: "Wat is een geluidsgolf?", options: ["Een elektromagnetische golf", "Een drukgolf die mechanisch door materie gaat", "Een lichtgolf", "Een gravitatiegolf"], answer: 1, explanation: "Geluid is een longitudinale drukgolf die medium (lucht, water, vaste stof) nodig heeft." },
      { q: "Wat is Ohm's wet?", options: ["U = I/R", "U = I × R", "I = U × R", "R = U × I"], answer: 1, explanation: "U = I × R: spanning = stroomsterkte × weerstand (Volt = Ampère × Ohm)." },
      { q: "Wat is het verschil tussen massa en gewicht?", options: ["Geen verschil", "Massa = hoeveelheid materie (kg); gewicht = zwaartekracht op massa (N)", "Gewicht is altijd groter", "Massa is in Newton"], answer: 1, explanation: "Massa is constant; gewicht = m × g, hangt af van de zwaartekracht." },
      { q: "Wat is geleiding (warmte)?", options: ["Warmteoverdracht via vloeistofstromen", "Warmteoverdracht door direct contact tussen materialen", "Warmteoverdracht via straling", "Convectie"], answer: 1, explanation: "Warmtegeleiding: moleculen geven energie door aan naburige moleculen (bv. metalen pan)." },
      { q: "Wat is de formule voor vermogen?", options: ["P = W/m", "P = W/t", "P = F/t", "P = m × a"], answer: 1, explanation: "Vermogen P = arbeid/tijd (Watt = Joule/seconde)." },
      { q: "Wat is een elektrisch circuit?", options: ["Een batterij alleen", "Een gesloten pad waardoor elektrische stroom kan vloeien", "Een weerstand", "Een schakelaar"], answer: 1, explanation: "Een circuit moet gesloten zijn: stroom vloeit van + naar − via externe geleider." },
      { q: "Wat is het verschil tussen een geleider en een isolator?", options: ["Geen verschil", "Geleider laat stroom makkelijk door; isolator niet of nauwelijks", "Isolator leidt beter", "Geleiders zijn altijd metalen"], answer: 1, explanation: "Geleiders (metalen, koolstof) hebben vrije elektronen; isolatoren (rubber, plastic) hebben dat niet." },
    ],
    klas3: [
      { q: "Wat beschrijft de wet van Coulomb?", options: ["Zwaartekracht", "De kracht tussen elektrische ladingen: F = kq₁q₂/r²", "Magnetische inductie", "Druk"], answer: 1, explanation: "Coulomb: elektrische kracht neemt af met het kwadraat van de afstand." },
      { q: "Wat is elektrische veldsterkte?", options: ["Lading per volume", "Kracht per eenheidslading: E = F/q", "Spanning per weerstand", "Stroom per oppervlak"], answer: 1, explanation: "E = F/q in N/C (Newton per Coulomb)." },
      { q: "Wat is inductie (Faraday)?", options: ["Elektrische lading", "Het opwekken van een spanning door verandering van magnetische flux", "Weerstand", "Geleiding"], answer: 1, explanation: "Faradays wet: wisselende flux → geïnduceerde EMK (transformator, generator)." },
      { q: "Wat is de formule voor golfsnelheid?", options: ["v = f + λ", "v = f × λ", "v = λ / f", "v = f / λ"], answer: 1, explanation: "v = f × λ: golfsnelheid = frequentie × golflengte." },
      { q: "Wat is het fotonenmodel van licht?", options: ["Licht is alleen een golf", "Licht bestaat uit kwantumpakketjes energie (fotonen): E = hf", "Licht heeft massa", "Licht heeft geen frequentie"], answer: 1, explanation: "Einstein: E = hf waarbij h = Planckconstante en f = frequentie." },
      { q: "Wat is de halfwaardetijd?", options: ["Levensduur van een atoom", "Tijd waarna de helft van radioactieve kernen vervallen is", "Vervaltijdconstante", "Neutronenactivatietijd"], answer: 1, explanation: "Na één halfwaardetijd is nog 50% van de radioactieve stof aanwezig." },
      { q: "Wat is het principe van behoud van impuls?", options: ["Impuls neemt altijd af", "De totale impuls van een gesloten systeem blijft constant", "Kracht = impuls", "Massa × snelheid neemt toe"], answer: 1, explanation: "Bij geen externe krachten: p_voor = p_na (botsingen)." },
      { q: "Wat is een coherente lichtbron?", options: ["Licht van alle kleuren", "Licht met vaste faseverhouding, zoals een laser", "Wit licht", "Thermisch licht"], answer: 1, explanation: "Laserlicht is coherent: golven zijn in fase → interferentie mogelijk." },
      { q: "Wat beschrijft de wet van Lenz?", options: ["De richting van de geïnduceerde stroom weerstaat de verandering die hem veroorzaakte", "Licht buigt", "Ladingsbehoud", "Energiebehoud"], answer: 0, explanation: "Lenz: de geïnduceerde stroom is zo gericht dat hij de fluxverandering tegengaat." },
      { q: "Wat is relativiteitstheorie (speciale, Einstein)?", options: ["Alles is relatief", "De snelheid van licht is constant in elk inertiaalstelsel; massa en energie zijn equivalent (E=mc²)", "Zwaartekracht is een ruimtekromming", "Quantummechanica"], answer: 1, explanation: "Speciale relativiteit: E = mc², tijddilatatie, lengtecontractie." },
      { q: "Wat is magnetische flux?", options: ["Stroomsterkte", "Het aantal magnetische veldlijnen door een oppervlak: Φ = B × A", "Magnetische kracht", "Elektrisch veld"], answer: 1, explanation: "Flux Φ = B × A × cos(θ), in Weber (Wb)." },
      { q: "Wat is het verband tussen golflengte en frequentie?", options: ["Ze zijn evenredig", "Ze zijn omgekeerd evenredig bij constante golfsnelheid: λ = v/f", "Ze zijn gelijk", "Geen verband"], answer: 1, explanation: "v = f × λ: bij constante snelheid: hoge frequentie = korte golflengte." },
      { q: "Wat is kernfusie?", options: ["Atoomkernen splitsen", "Lichte atoomkernen smelten samen tot zwaardere kern, waarbij energie vrijkomt", "Radioactief verval", "Elektrolyse"], answer: 1, explanation: "Kernfusie: 2 H-kernen → He + energie (werking van de zon en fusiereaktor)." },
      { q: "Wat is het verschil tussen AC en DC stroom?", options: ["Geen verschil", "AC wisselt van richting; DC stroomt altijd in één richting", "DC wisselt van richting", "AC heeft hogere spanning"], answer: 1, explanation: "AC (wisselstroom): stroomrichting wisselt. DC (gelijkstroom): constante richting (bv. batterij)." },
      { q: "Wat is de brekingsindex?", options: ["De hoek van reflectie", "De verhouding van lichtsnelheid in vacuüm tot lichtsnelheid in een medium: n = c/v", "De golflengte in een medium", "De absorptiecoëfficiënt"], answer: 1, explanation: "n = c/v. Glas heeft n ≈ 1,5 → licht is 1,5× trager dan in vacuüm." },
      { q: "Wat is een staande golf?", options: ["Een golf die beweegt", "Een golf die op een vaste plek oscilleert door interferentie van heen- en teruglopende golven", "Een geluidsgolf in lucht", "Een transversale golf"], answer: 1, explanation: "Staande golven ontstaan bij resonantie in instrumenten (snaarinstrumenten, orgelpijpen)." },
      { q: "Wat beschrijft de wet van Kirchhoff (spanningswet)?", options: ["De som van stromen in een knoop = 0", "De som van spanningen in een gesloten lus = 0", "Stroom × spanning = vermogen", "Weerstand × spanning = stroom"], answer: 1, explanation: "Kirchhoffs spanningswet (KVL): de som van alle spanningsvallen in een gesloten lus is nul." },
      { q: "Wat is het verschil tussen ioniserende en niet-ioniserende straling?", options: ["Geen verschil", "Ioniserend (röntgen, alfa, bèta) heeft genoeg energie om atomen te ioniseren; niet-ioniserend (radio, zichtbaar licht) niet", "Niet-ioniserend is gevaarlijker", "Alleen alfa is ioniserend"], answer: 1, explanation: "Ioniserende straling kan DNA beschadigen. Niet-ioniserende straling (bv. radio) is minder schadelijk." },
      { q: "Wat is superpositie van golven?", options: ["Golven vernietigen elkaar altijd", "De resulterende uitwijking is de som van de uitwijkingen van de afzonderlijke golven", "Golven versterken elkaar altijd", "Golven lopen niet tegelijkertijd"], answer: 1, explanation: "Superpositieprincipe: bij samentreffen van golven tellen de amplitudes op (constructieve of destructieve interferentie)." },
    ],
  },
  scheikunde: {
    klas3: [
      { q: "Wat is het atoommassa-getal?", options: ["Aantal elektronen", "Totaal aantal protonen + neutronen in de kern", "Alleen protonen", "Massa in gram"], answer: 1, explanation: "Massagetal A = aantal protonen (Z) + neutronen (N)." },
      { q: "Wat is een ion?", options: ["Een neutraal atoom", "Een atoom of molecuul met een nettolading door verlies/gain van elektronen", "Een molecuul", "Een neutron"], answer: 1, explanation: "Kationen: positief (verlies e⁻). Anionen: negatief (winst e⁻)." },
      { q: "Wat is de pH-schaal?", options: ["Maat voor temperatuur", "Maat voor de zuurgraad van een oplossing (0 = sterk zuur, 14 = sterk base)", "Maat voor concentratie", "Maat voor oplosbaarheid"], answer: 1, explanation: "pH = −log[H⁺]. pH < 7 = zuur; pH 7 = neutraal; pH > 7 = base." },
      { q: "Wat is een exotherme reactie?", options: ["Reactie die warmte absorbeert", "Reactie die warmte vrijgeeft (ΔH < 0)", "Reactie bij hoge druk", "Elektrolyse"], answer: 1, explanation: "Exotherm: energie komt vrij (verbanding, neutralisatie)." },
      { q: "Hoe luidt de formule van water?", options: ["HO", "H₂O₂", "H₂O", "OH"], answer: 2, explanation: "Water: H₂O — 2 waterstofatomen en 1 zuurstofatoom." },
      { q: "Wat is de wet van behoud van massa?", options: ["Massa neemt toe bij reactie", "Bij een chemische reactie blijft de totale massa gelijk", "Massa verdwijnt als energie", "Massa verdubbelt"], answer: 1, explanation: "Lavoisier: bij elke reactie is de totale massa van reactanten = producten." },
      { q: "Wat is een covalente binding?", options: ["Overdracht van elektronen", "Gemeenschappelijk gebruik van elektronenparen tussen atomen", "Ionbinding", "Metaalbinding"], answer: 1, explanation: "Covalente binding: atomen delen elektronenparen (bv. H₂, H₂O, CO₂)." },
      { q: "Wat is molaire massa?", options: ["Massa van 1 atoom", "Massa van 1 mol deeltjes, in g/mol", "Volume van 1 mol", "Dichtheid van een stof"], answer: 1, explanation: "Molaire massa (M) in g/mol = massa van 6,022 × 10²³ deeltjes." },
      { q: "Wat is het getal van Avogadro?", options: ["6,022 × 10²²", "6,022 × 10²³", "6,022 × 10²⁴", "3,14 × 10²³"], answer: 1, explanation: "N_A = 6,022 × 10²³ mol⁻¹ — aantal deeltjes in 1 mol." },
      { q: "Wat is elektrolyse?", options: ["Spontane chemische reactie", "Chemische reactie gedreven door elektrische stroom", "Oxidatie zonder stroom", "Destillatie"], answer: 1, explanation: "Elektrolyse: gelijkstroom dwingt een niet-spontane redoxreactie af." },
      { q: "Wat is oxidatie in chemische zin?", options: ["Verlies van protonen", "Verlies van elektronen (toename oxidatiegetal)", "Opname van elektronen", "Verbinding met waterstof"], answer: 1, explanation: "OIL RIG: Oxidation Is Loss (of electrons); Reduction Is Gain." },
      { q: "Wat is een katalysator?", options: ["Een reactant", "Een stof die de reactiesnelheid verhoogt zonder zelf verbruikt te worden", "Een product", "Een inhibitor"], answer: 1, explanation: "Katalysatoren verlagen de activeringsenergie en worden niet verbruikt." },
      { q: "Welke bindingen vormen de dubbele helix van DNA?", options: ["Covalente bindingen", "Waterstofbruggen tussen complementaire basen", "Ionbindingen", "Van-der-Waalskrachten"], answer: 1, explanation: "A-T (2 waterstofbruggen) en G-C (3 waterstofbruggen) houden de ketens samen." },
      { q: "Wat is de formule van natriumchloride (keukenzout)?", options: ["Na₂Cl", "NaCl", "NaCl₂", "Na₂Cl₂"], answer: 1, explanation: "NaCl: één Na⁺-ion per Cl⁻-ion in een ionrooster." },
      { q: "Wat is het Le Chatelier-principe?", options: ["Evenwicht verschuift altijd naar reactanten", "Een systeem in evenwicht reageert op een verstoring door de verstoring te compenseren", "Evenwicht is altijd stabiel", "Concentraties nemen altijd toe"], answer: 1, explanation: "Le Chatelier: bij verandering in concentratie, temperatuur of druk verschuift het evenwicht." },
      { q: "Hoe berekent men de molaire concentratie?", options: ["c = n × V", "c = n / V", "c = V / n", "c = m / V"], answer: 1, explanation: "Concentratie (c) = aantal mol (n) gedeeld door volume in liter (V)." },
      { q: "Wat is een organische stof?", options: ["Stof met metaalatomen", "Stof op basis van koolstof (C), vaak met H, O, N", "Anorganische zout", "Mineraal"], answer: 1, explanation: "Organische chemie bestudeert koolstofverbindingen (uitgezonderd CO₂, CO, carbonaten)." },
      { q: "Wat is destillatie?", options: ["Filtratie van vaste stoffen", "Scheiding op basis van kookpuntverschillen door verdamping en condensatie", "Kristallisatie", "Chromatografie"], answer: 1, explanation: "Destillatie: vloeistofmengsel verhitten → damp opvangen → condenseren." },
      { q: "Wat is een bufferoplossing?", options: ["Een sterk zuur", "Een oplossing die pH-veranderingen resists bij toevoeging van zuur of base", "Een onverzadigde oplossing", "Gedestilleerd water"], answer: 1, explanation: "Buffers: mengsel van zwak zuur + geconjugeerde base houdt de pH stabiel." },
      { q: "Wat zijn isomeren?", options: ["Atomen van hetzelfde element met ander massagetal", "Verbindingen met dezelfde molecuulformule maar verschillende structuur", "Allotropen", "Ionen"], answer: 1, explanation: "Structuurisomeren (bv. butaan/isobutaan) of stereoisomeren hebben dezelfde formule maar andere structuur." },
      { q: "Wat is een redoxreactie?", options: ["Zuur-basereactie", "Reactie waarbij oxidatie en reductie gelijktijdig plaatsvinden", "Neutralisatie", "Precipitatiereactie"], answer: 1, explanation: "Redox: OIL RIG — één stof geeft elektronen (oxidatie), ander ontvangt (reductie)." },
      { q: "Wat is een alkaan?", options: ["Een alkohol", "Een verzadigde koolwaterstof met alleen enkelvoudige bindingen (CₙH₂ₙ₊₂)", "Een alkyleen", "Een aromatische verbinding"], answer: 1, explanation: "Alkanen: methaan (CH₄), ethaan (C₂H₆), propaan (C₃H₈) — verzadigd, weinig reactief." },
      { q: "Wat is een endotherme reactie?", options: ["Warmte vrijgevend", "Warmte absorberend (ΔH > 0)", "Explosief", "Bij hoge druk"], answer: 1, explanation: "Endotherm: reactie vraagt warmte van de omgeving. ΔH positief." },
      { q: "Wat is het periodiek systeem?", options: ["Een tijdlijn", "Ordening van alle elementen op basis van atoomnummer en eigenschappen", "Een molecuulmodel", "Een reactievergelijking"], answer: 1, explanation: "Mendeljeev ordende elementen op atoomnummer en soortgelijke eigenschappen in groepen en perioden." },
      { q: "Wat is een ionbinding?", options: ["Delen van elektronen", "Aantrekking tussen positieve en negatieve ionen", "Covalente binding", "Metaalbinding"], answer: 1, explanation: "Ionbinding: metaal geeft e⁻ af (kation +), niet-metaal neemt op (anion −). Bv. NaCl." },
      { q: "Wat is de Hess-wet?", options: ["Energiebehoud in mechanica", "De totale enthalpieverandering is onafhankelijk van de reactieroute", "Wet van behoud van massa", "Wet van Le Chatelier"], answer: 1, explanation: "Hess: ΔH_totaal = som van ΔH van de stappen, ongeacht het pad." },
      { q: "Wat is het verschil tussen een atoom en een molecuul?", options: ["Geen verschil", "Atoom = kleinste eenheid van een element; molecuul = twee of meer gebonden atomen", "Molecuul = kleiner dan atoom", "Atoom = uit twee atomen"], answer: 1, explanation: "H (atoom) vs. H₂ (molecuul) — moleculen zijn aaneengesloten atomen." },
      { q: "Wat is een neerslag (precipitaat) bij scheikunde?", options: ["Een gas dat vrij komt", "Een onoplosbare vaste stof die uit een oplossing neerslaat", "Een zure oplossing", "Een endotherme reactie"], answer: 1, explanation: "Bv: AgNO₃ + NaCl → AgCl↓ (wit neerslag) + NaNO₃." },
      { q: "Wat is chromatografie?", options: ["Een scheidingstechniek op basis van kookpunt", "Een scheidingstechniek op basis van hoe stoffen zich verplaatsen over een fase", "Destillatie", "Filtratie"], answer: 1, explanation: "Chromatografie (dun-laag, kolom, papier): stoffen bewegen met verschillende snelheid over een stationaire fase." },
    ],
  },
  economie: {
    klas3: [
      { q: "Wat is het bruto binnenlands product (bbp)?", options: ["De schuld van een land", "De totale waarde van goederen en diensten geproduceerd in een land per jaar", "De export minus import", "Het overheidstekort"], answer: 1, explanation: "BBP = maat voor de economische productie van een land." },
      { q: "Wat is inflatie?", options: ["Daling van het prijsniveau", "Stijging van het algemeen prijsniveau over tijd", "Toename van de werkloosheid", "Waardestijging van de munt"], answer: 1, explanation: "Inflatie: de koopkracht daalt omdat je voor hetzelfde geld minder kunt kopen." },
      { q: "Wat is de wet van vraag en aanbod?", options: ["Prijs bepaalt altijd de kwaliteit", "Bij hogere prijs daalt de gevraagde hoeveelheid; bij hoger aanbod daalt de prijs", "Aanbod is altijd gelijk aan vraag", "Prijs is onafhankelijk van aanbod"], answer: 1, explanation: "Evenwichtsprijs: punt waar vraagcurve en aanbodcurve snijden." },
      { q: "Wat is een markteconomie?", options: ["De staat bepaalt alle prijzen", "Prijzen worden bepaald door vraag en aanbod op de vrije markt", "Geplande productie door de overheid", "Ruilhandel"], answer: 1, explanation: "In een markteconomie coördineert het prijsmechanisme productie en consumptie." },
      { q: "Wat is werkloosheid (definitie CBS)?", options: ["Iedereen zonder baan", "Mensen die beschikbaar zijn én actief zoeken naar betaald werk maar dat niet vinden", "Mensen die niet willen werken", "Deeltijdwerkers"], answer: 1, explanation: "Officieel werklozen: 15-74 jaar, beschikbaar, actief zoekend, geen betaald werk." },
      { q: "Wat is de toegevoegde waarde?", options: ["Inkoopprijs", "Verkoopprijs minus inkoopprijs van grondstoffen/halffabricaten", "Winst na belasting", "Loonkosten"], answer: 1, explanation: "Toegevoegde waarde: het BBP wordt berekend als som van alle toegevoegde waarden." },
      { q: "Wat is een monopolie?", options: ["Veel aanbieders op een markt", "Eén aanbieder die de gehele markt beheerst", "Twee aanbieders", "Vrije concurrentie"], answer: 1, explanation: "Bij een monopolie is er geen concurrentie → monopolist bepaalt prijs." },
      { q: "Wat is het begrotingstekort?", options: ["Overheidsinkomsten > uitgaven", "Overheidsuitgaven > inkomsten", "Evenwichtige begroting", "Nationale schuld"], answer: 1, explanation: "Tekort: overheid geeft meer uit dan ze ontvangt → leent het verschil." },
      { q: "Wat doet de Europese Centrale Bank (ECB)?", options: ["Begrotingen van lidstaten controleren", "Monetair beleid voeren en de euro stabiliseren", "Handel reguleren", "Belasting innen"], answer: 1, explanation: "ECB: bepaalt rentebeleid, bewaakt prijsstabiliteit in de eurozone." },
      { q: "Wat is comparatief voordeel (Ricardo)?", options: ["Absoluut productievoordeel", "Een land produceert een goed met de laagste opportuniteitskosten relatief t.o.v. andere goederen", "Goedkoopste productie", "Handelsoverschot"], answer: 1, explanation: "Vrijhandel is voordelig als elk land zich specialiseert in zijn comparatief voordeel." },
      { q: "Wat is de betalingsbalans?", options: ["Bankrekening van de overheid", "Overzicht van alle economische transacties van een land met het buitenland", "Handelsbalans alleen", "Schuld aan het IMF"], answer: 1, explanation: "Betalingsbalans = lopende rekening + kapitaalrekening + financiële rekening." },
      { q: "Wat is een recessie?", options: ["Economische groei > 5%", "Twee opeenvolgende kwartalen van negatieve BBP-groei", "Hoge inflatie", "Handelstekort"], answer: 1, explanation: "Technische definitie recessie: twee kwartalen op rij krimp van het BBP." },
      { q: "Wat is elasticiteit van de vraag?", options: ["Hoe sterk aanbieders reageren op prijsverandering", "Hoe sterk de gevraagde hoeveelheid reageert op een prijsverandering", "De omvang van de markt", "De winststijging"], answer: 1, explanation: "Prijselasticiteit = % verandering hoeveelheid / % verandering prijs." },
      { q: "Wat is het doel van progressieve belasting?", options: ["Iedereen evenveel laten betalen", "Hogere inkomens een groter percentage laten betalen om inkomensverschillen te verkleinen", "Bedrijven meer belasten", "Btw verhogen"], answer: 1, explanation: "Progressief: naarmate inkomen stijgt, stijgt ook het belastingpercentage." },
      { q: "Wat is de functie van geld?", options: ["Alleen ruilmiddel", "Ruilmiddel, rekeneenheid en oppotmiddel (spaarmiddel)", "Alleen oppotmiddel", "Alleen rekeneenheid"], answer: 1, explanation: "Drie functies van geld: betaalmiddel, rekeneenheid (prijzen uitdrukken), oppotmiddel." },
      { q: "Wat is marktfalen?", options: ["Als bedrijven verlies maken", "Als de vrije markt geen optimale uitkomst bereikt (bijv. externe effecten, publieke goederen)", "Als er geen vraag is", "Als aanbod groter is dan vraag"], answer: 1, explanation: "Marktfalen: reden voor overheidsinterventie (milieu, publieke goederen, monopolies)." },
      { q: "Wat zijn externe effecten (externaliteiten)?", options: ["Exportkosten", "Kosten of baten van economische activiteit die bij derden terechtkomen", "Buitenlandse investeringen", "Importtarieven"], answer: 1, explanation: "Negatief extern effect: vervuiling. Positief: vaccinatie die anderen beschermt." },
      { q: "Wat is een oligopolie?", options: ["Eén aanbieder", "Weinig aanbieders die de markt domineren en elkaars gedrag beïnvloeden", "Volkomen concurrentie", "Monopsonie"], answer: 1, explanation: "Oligopolie: bv. telecomsector, luchtvaart. Aanbieders houden rekening met elkaars keuzes." },
      { q: "Wat is het verschil tussen nominaal en reëel inkomen?", options: ["Geen verschil", "Nominaal = geldbedrag; reëel = gecorrigeerd voor inflatie (koopkracht)", "Reëel is altijd hoger", "Nominaal is altijd lager"], answer: 1, explanation: "Reëel inkomen = koopkracht: wat je werkelijk kunt kopen met je inkomen." },
      { q: "Wat is schaalvoordeel?", options: ["Hogere kosten bij meer productie", "Lagere gemiddelde kosten per eenheid bij grotere productieschaal", "Gelijke kosten ongeacht schaal", "Marginale kosten stijgen"], answer: 1, explanation: "Economies of scale: grotere productie → lagere kosten per eenheid (bv. massaproductie)." },
      { q: "Wat is de consumentenprijs-index (CPI)?", options: ["Een aandelenindex", "Een maatstaf voor prijsveranderingen van een mandje goederen dat consumenten kopen", "Het gemiddeld inkomen", "De bbp-groei"], answer: 1, explanation: "De CPI meet inflatie vanuit het perspectief van de consument." },
      { q: "Wat is het multipliereffect?", options: ["Effect van monopolie", "Een initiële besteding leidt via doorbestedingen tot een grotere totale economische activiteit", "Belastingeffect", "Rente-effect"], answer: 1, explanation: "Als de overheid €1 miljard investeert, groeit de economie uiteindelijk met meer dan €1 miljard (Keynes)." },
      { q: "Wat is het verschil tussen micro- en macro-economie?", options: ["Geen verschil", "Micro = individuele spelers; macro = de gehele economie (BBP, werkloosheid, inflatie)", "Macro = kleine bedrijven", "Micro = nationale economie"], answer: 1, explanation: "Micro: hoe kiest een bedrijf of consument? Macro: hoe functioneert de economie als geheel?" },
      { q: "Wat is een handelsoverschot?", options: ["Import > export", "Export > import: een land verkoopt meer dan het inkoopt uit het buitenland", "Evenwichtige handelsbalans", "Overheidstekort"], answer: 1, explanation: "Handelsoverschot: Nederland exporteert meer dan het importeert." },
      { q: "Wat is het verschil tussen groei en ontwikkeling?", options: ["Geen verschil", "Groei = toename BBP; ontwikkeling = breder, ook welzijn en gelijkheid", "Ontwikkeling = alleen BBP", "Groei = kwaliteitsverbetering"], answer: 1, explanation: "Economische groei: meer productie. Ontwikkeling: ook onderwijs, gezondheid, gelijkheid (HDI)." },
      { q: "Wat is de rol van de rente bij inflatie?", options: ["Hogere rente stimuleert consumptie", "Hogere rente remt consumptie en leningen, waardoor inflatie daalt", "Rente heeft geen invloed", "Lagere rente verlaagt inflatie"], answer: 1, explanation: "Centrale banken verhogen de rente om inflatie te bestrijden: lenen wordt duurder → minder bestedingen." },
      { q: "Wat zijn opportuniteitskosten?", options: ["Directe productiekosten", "De waarde van het beste alternatief dat je opgeeft voor een keuze", "Belastingen", "Vaste kosten"], answer: 1, explanation: "Opportuniteitskosten: als je kiest voor studie, mis je het loon van een baan — dat is de opportuniteitskosten." },
      { q: "Wat is een publiek goed?", options: ["Een overheidsgebouw", "Een goed dat niet-uitsluitbaar en niet-rivaliserend is (bv. defensie, vuurtoren)", "Een belastingdienst", "Een gemeentehuis"], answer: 1, explanation: "Publieke goederen: je kunt niemand uitsluiten en gebruik door één vermindert beschikbaarheid niet." },
      { q: "Wat is deflatie?", options: ["Hoge inflatie", "Een daling van het algemeen prijsniveau", "Stagflatie", "Lage werkloosheid"], answer: 1, explanation: "Deflatie: prijzen dalen. Gevaarlijk: consumenten wachten met kopen → economie krimpt." },
    ],
  },
  nederlands: {
    klas1: [
      { q: "Wat is een persoonsvorm?", options: ["Een zelfstandig naamwoord", "Het werkwoord dat de persoon en tijd aangeeft in een zin", "Een bijvoeglijk naamwoord", "Een bijwoord"], answer: 1, explanation: "De persoonsvorm is het vervoegde werkwoord: 'Hij loopt' → 'loopt' is de pv." },
      { q: "Wat is een hoofdzin?", options: ["Een zin die niet zelfstandig kan staan", "Een zin die zelfstandig een complete gedachte uitdrukt", "Een bijzin", "Een tussenwerper"], answer: 1, explanation: "Een hoofdzin is zelfstandig en bevat minstens een onderwerp en persoonsvorm." },
      { q: "Wat is een metafoor?", options: ["Een vergelijking met 'zoals' of 'als'", "Een beeldspraak waarbij iets vergeleken wordt zonder vergelijkingswoord", "Een overdrijving", "Een herhaling"], answer: 1, explanation: "Metafoor: 'Het leven is een reis' — geen 'zoals', direct gelijkstelling." },
      { q: "Wat is de verleden tijd van 'rijden'?", options: ["Gereden", "Reed / reden", "Rijdde", "Gerijden"], answer: 1, explanation: "Rijden is een sterk werkwoord: onvoltooid verleden tijd = reed (enkelvoud) / reden (meervoud)." },
      { q: "Wat is een bijvoeglijk naamwoord?", options: ["Een werkwoord", "Een woord dat een eigenschap van een zelfstandig naamwoord beschrijft", "Een voornaamwoord", "Een lidwoord"], answer: 1, explanation: "BV: 'de grote hond' — 'grote' is het bijvoeglijk naamwoord." },
      { q: "Wat is een synoniem?", options: ["Een woord met tegengestelde betekenis", "Een woord met (bijna) dezelfde betekenis", "Een verkleinwoord", "Een samengesteld woord"], answer: 1, explanation: "Synoniemen: blij = vrolijk = opgewekt. Ze zijn uitwisselbaar in context." },
      { q: "Welk leesteken geeft een vraag aan?", options: [".", "!", "?", ";"], answer: 2, explanation: "Een zin die een vraag stelt, eindigt met een vraagteken (?)." },
      { q: "Wat is de verkleinvorm van 'tafel'?", options: ["Tafeltje", "Tafeltje", "Tafeltjen", "Tafelen"], answer: 0, explanation: "Verkleinvorm van 'tafel' = 'tafeltje' (met verkleiningsuitgang -tje)." },
      { q: "Wat is een actieve zin?", options: ["De handelende persoon is het lijdend voorwerp", "Het onderwerp voert de handeling uit", "Er is geen werkwoord", "De handeling is in de verleden tijd"], answer: 1, explanation: "Actief: 'De hond bijt de man.' — de hond (onderwerp) bijt (handeling)." },
      { q: "Wat is een passieve zin?", options: ["De handelende persoon is het onderwerp", "Het onderwerp ondergaat de handeling (er staat 'worden' of 'zijn' + voltooid deelwoord)", "Een ontkenningszin", "Een vraagzin"], answer: 1, explanation: "Passief: 'De man wordt gebeten (door de hond).' — man ondergaat de handeling." },
      { q: "Wat is een enkelvoudig onderwerp?", options: ["Meerdere personen als onderwerp", "Eén persoon of ding als onderwerp in de zin", "Een bijzin als onderwerp", "Een onbepaald onderwerp"], answer: 1, explanation: "Enkelvoudig onderwerp: 'De leerling leest.' — 'De leerling' is het onderwerp." },
      { q: "Wat is een direct object (lijdend voorwerp)?", options: ["De handelende persoon", "Het zelfstandig naamwoord dat de handeling rechtstreeks ondergaat", "Een bijwoord", "Het meewerkend voorwerp"], answer: 1, explanation: "LV: 'Zij leest een boek.' — 'een boek' is het lijdend voorwerp (wat wordt gelezen?)." },
      { q: "Wat is een samengesteld woord?", options: ["Een woord met een voor- of achtervoegsel", "Een woord opgebouwd uit twee of meer zelfstandige woorden", "Een werkwoord", "Een leenwoord"], answer: 1, explanation: "Samengestelde woorden: 'voetbal', 'boekenkast', 'zonnebril'." },
      { q: "Welke schrijfwijze is correct?", options: ["Hij heeft een grote fout gemaakt", "Hij heeft een groote fout gemaakt", "Hij heeft een groot fout gemaakt", "Hij heeft een grotes fout gemaakt"], answer: 0, explanation: "Na 'een' + zelfstandig naamwoord: bijvoeglijk naamwoord krijgt -e: 'grote fout'." },
      { q: "Wat is een tussenwerper (interjectie)?", options: ["Een werkwoord", "Een uitroepwoord dat een gevoel uitdrukt (bijv. 'Au!', 'Hé!', 'Pfff')", "Een bijwoord", "Een voegwoord"], answer: 1, explanation: "Tussenwerpers staan los van de zinsgrammatica en drukken emotie uit." },
      { q: "Wat is de stam van het werkwoord 'werken'?", options: ["Werken", "Werk", "Gewerkt", "Werkende"], answer: 1, explanation: "Stam = infinitief minus -en: werk-en → 'werk'." },
      { q: "Wat is een ontkennende zin?", options: ["Een vraagzin", "Een zin met 'niet' of 'geen' die iets ontkent", "Een bijzin", "Een uitroepzin"], answer: 1, explanation: "Ontkenning met 'niet': 'Ik ga niet mee.' Of 'geen': 'Ik heb geen tijd.'" },
      { q: "Wat is alliteratie?", options: ["Rijm aan het einde van regels", "Herhaling van dezelfde beginletter/klanken in opeenvolgende woorden", "Rijm in het midden", "Een metafoor"], answer: 1, explanation: "Alliteratie: 'De dikke dame danst door de dag.' — beginletter D herhaalt zich." },
      { q: "Wat is het verschil tussen 'hun' en 'hen'?", options: ["Geen verschil", "'Hun' is meewerkend voorwerp; 'hen' is lijdend voorwerp of na voorzetsel", "'Hen' is altijd fout", "'Hun' staat nooit bij een werkwoord"], answer: 1, explanation: "Hun geven (mv): 'Ik geef HUN een cadeau.' Hen zien: 'Ik zie HEN.' Na voorzetsel: 'Met HEN.'" },
      { q: "Wat is een woordveld?", options: ["Alle vervoegingen van een werkwoord", "Een groep woorden die inhoudelijk bij hetzelfde onderwerp horen", "Synoniemen alleen", "Een woordsoortindeling"], answer: 1, explanation: "Woordveld 'school': leerling, leraar, les, klas, rapport, schoolbord." },
      { q: "Wat is een voornaamwoord?", options: ["Een naam van een persoon", "Een woord dat een zelfstandig naamwoord vervangt (ik, hij, dit, die)", "Een bijvoeglijk naamwoord", "Een werkwoord"], answer: 1, explanation: "Voornaamwoorden: persoonlijk (ik, jij), bezittelijk (mijn, jouw), aanwijzend (deze, die)." },
      { q: "Wat is een bijzin?", options: ["Een zelfstandige zin", "Een zin die afhankelijk is van een andere zin en begint met een voegwoord", "Een uitroep", "Een vraagzin"], answer: 1, explanation: "Bv: 'Ik weet dat hij komt.' — 'dat hij komt' is een bijzin (begint met 'dat')." },
      { q: "Wat is de stijl van een tekst?", options: ["De inhoud", "De manier waarop een schrijver taal gebruikt (woordkeuze, zinsbouw, toon)", "De opbouw", "Het genre"], answer: 1, explanation: "Stijl omvat alle talige keuzes: formeel/informeel, beknopt/uitgebreid, literair/zakelijk." },
      { q: "Wat is een verkleinwoord (diminutief)?", options: ["Een vergroting van een woord", "Een kleiner of vriendelijker variant van een zelfstandig naamwoord", "Een meervoudsvorm", "Een afkorting"], answer: 1, explanation: "Verkleinwoorden: 'huisje', 'katje', 'boompje' — kleiner of liefkozend." },
      { q: "Wat is het verschil tussen 'dan' en 'als'?", options: ["Geen verschil", "'Dan' = vergelijking na comparatief; 'als' = gelijkheid of voorwaarde", "'Als' = vergelijking na comparatief", "Beide zijn voegwoorden bij vergelijkingen"], answer: 1, explanation: "'Harder dan jij' (comparatief); 'net zo hard als jij' (gelijkheid); 'als het regent' (voorwaarde)." },
      { q: "Wat is een abstracte zelfstandig naamwoord?", options: ["Een tastbaar ding", "Een onzichtbare, niet-tastbare begrip (vreugde, vrijheid, liefde)", "Een persoon", "Een dier"], answer: 1, explanation: "Abstracte znw: 'geluk', 'hoop', 'verdriet' — je kunt ze niet aanraken." },
      { q: "Wat is een tautologie?", options: ["Een metafoor", "Herhaling van hetzelfde in andere woorden (bv. 'een oud grijsaard')", "Een rijmvorm", "Overdrijving"], answer: 1, explanation: "Tautologie: 'grijs' en 'oud' zeggen hetzelfde — overbodige herhaling." },
      { q: "Wat is een hoofdzin in een samengestelde zin?", options: ["De bijzin", "De zin die zelfstandig kan staan en de bijzin bevat of eraan gekoppeld is", "Een vraagzin", "Een nevengeschikte zin"], answer: 1, explanation: "In 'Ik weet dat hij komt' is 'Ik weet' de hoofdzin; 'dat hij komt' de bijzin." },
      { q: "Wat is een formeel register?", options: ["Omgangstaal", "Taalgebruik in officiële of professionele context met correct taalgebruik", "Dialect", "Jeugdtaal"], answer: 1, explanation: "Formeel register: zakenbrieven, rapporten, vergaderingen — geen afkortingen of slang." },
    ],
    klas3: [
      { q: "Wat is een trope?", options: ["Een grammaticaal begrip", "Een stijlfiguur waarbij woorden in overdrachtelijke betekenis worden gebruikt", "Een zinsstructuur", "Een leesteken"], answer: 1, explanation: "Tropen: metafoor, metonymia, synecdoche, ironie — woorden met figuurlijke betekenis." },
      { q: "Wat is de functie van een argumentatieve tekst?", options: ["Informeren", "De lezer overtuigen van een standpunt door middel van argumenten", "Entertainen", "Beschrijven"], answer: 1, explanation: "Betoogend/argumentatief: doel = overtuigen. Bevat stelling + onderbouwing." },
      { q: "Wat is intertekstualiteit?", options: ["Grammatica tussen zinnen", "Verwijzingen in een tekst naar andere teksten of culturele werken", "Woordvolgorde", "Stijlregister"], answer: 1, explanation: "Intertekstualiteit: een tekst verwijst naar een andere (bijbel, mythologie, populaire cultuur)." },
      { q: "Wat is de cliffhanger als narratieve techniek?", options: ["Een gesloten einde", "Een spannend, onopgelost moment aan het einde van een hoofdstuk/aflevering", "Een terugblik", "Een monoloog"], answer: 1, explanation: "Cliffhanger: de lezer/kijker wordt in spanning gelaten om verder te lezen/kijken." },
      { q: "Wat is een anaforische herhaling?", options: ["Herhaling aan het einde van zinnen", "Herhaling van een woord of woordgroep aan het begin van opeenvolgende zinnen", "Rijm", "Assonantie"], answer: 1, explanation: "'Wij zullen vechten..., wij zullen nooit opgeven...' — 'wij' herhaalt aan het begin." },
      { q: "Wat is het perspectief in een verhaal?", options: ["De volgorde van gebeurtenissen", "Het standpunt vanuit welke het verhaal verteld wordt (ik, hij/zij, alwetend)", "De thematiek", "De setting"], answer: 1, explanation: "Vertelperspectieven: eerste persoon (ik), derde persoon beperkt of alwetend." },
      { q: "Wat is een gedachtestreepje (—) in tekst?", options: ["Koppelteken", "Leesteken voor een pauze, toelichting of plotselinge wending in de zin", "Aanhalingsteken", "Komma"], answer: 1, explanation: "Gedachtestreepje: 'Hij liep naar buiten — het regende.' Benadrukt een wending of toevoeging." },
      { q: "Wat is een poëtisch procédé bij enjambement?", options: ["Rijm aan het einde", "Een zin loopt door over de regelgrens in een gedicht", "Herhaling", "Staccato"], answer: 1, explanation: "Enjambement: de betekenis en zin lopen door naar de volgende versregel." },
      { q: "Wat is het verschil tussen denotatie en connotatie?", options: ["Geen verschil", "Denotatie = letterlijke betekenis; connotatie = bijbetekenis/gevoelswaarde", "Connotatie is altijd positief", "Denotatie = figuurlijk"], answer: 1, explanation: "'Roos': denotatie = bloem; connotatie = liefde, schoonheid, romantiek." },
      { q: "Wat is een retorische vraag?", options: ["Een vraag die om een antwoord vraagt", "Een vraag die voor retorisch effect gesteld wordt en geen antwoord verwacht", "Een open vraag", "Een hypothetische vraag"], answer: 1, explanation: "'Is dat nu zo moeilijk?' — het antwoord is vanzelfsprekend; doel is overtuigen of benadrukken." },
      { q: "Wat is een leitmotiv?", options: ["Een eenmalig symbool", "Een terugkerend thema, motief of symbool in een literair werk", "De climax", "De verteller"], answer: 1, explanation: "Leitmotiv (uit de muziek): een steeds terugkerend element dat betekenis draagt." },
      { q: "Wat is een epische tekst?", options: ["Een lyrische tekst", "Een verhalende tekst (roman, novelle, sprookje, epos)", "Een dramatische tekst", "Een argumentatieve tekst"], answer: 1, explanation: "Episch = verhalend: roman, novelle, verhaal. Tegenover lyrisch (gevoelsuitdrukking) en dramatisch (toneel)." },
      { q: "Wat is een onbetrouwbare verteller?", options: ["Een auctorieel verteller", "Een verteller wiens weergave van de werkelijkheid bevooroordeeld of onjuist is", "Een alwetende verteller", "Een derde persoon verteller"], answer: 1, explanation: "Onbetrouwbare verteller: de lezer kan niet volledig vertrouwen op wat de verteller zegt." },
      { q: "Wat is het verschil tussen parataxis en hypotaxis?", options: ["Rijmvormen", "Parataxis = nevenschikking (en, maar, want); hypotaxis = onderschikking (bijzinnen)", "Vertelperspectieven", "Stijlregisters"], answer: 1, explanation: "Parataxis: 'Ik kom, jij gaat.' Hypotaxis: 'Omdat ik kom, ga jij weg.'" },
      { q: "Wat is een novelle?", options: ["Een lang episch gedicht", "Een kortere roman, vaak geconcentreerd op één kerngebeurtenis", "Een toneelstuk", "Een essay"], answer: 1, explanation: "Novelle: tussen kort verhaal en roman in, één centrale intrige." },
      { q: "Wat is de climax in een verhaal?", options: ["Het begin", "Het hoogtepunt van de spanning, waarna de ontknoping volgt", "De ontknoping", "De vooropstelling"], answer: 1, explanation: "Dramatische driehoek: conflict opbouwt → climax → ontknoping (dénouement)." },
      { q: "Wat is een open einde?", options: ["Een afgerond verhaalslot", "Een einde dat vragen open laat en de lezer zelf laat invullen", "Een happy ending", "Een moraal"], answer: 1, explanation: "Open einde: de auteur laat bewust ruimte voor interpretatie of vervolg." },
      { q: "Wat is de term voor een terugblik in een verhaal?", options: ["Prolepsis", "Flashback (analepsis)", "Cliffhanger", "In medias res"], answer: 1, explanation: "Analepsis/flashback: een terugblik naar een eerder moment dan het vertelheden." },
      { q: "Wat is het 'in medias res' starten van een verhaal?", options: ["Beginnen bij het begin", "Beginnen midden in de actie, zonder voorgeschiedenis", "Beginnen met de ontknoping", "Beginnen met een beschrijving"], answer: 1, explanation: "'In medias res' (Latijn: 'midden in de zaak'): de lezer wordt direct in een dramatische situatie gegooid." },
      { q: "Wat is een essay?", options: ["Een roman", "Een korte, persoonlijke beschouwing over een onderwerp vanuit een subjectief standpunt", "Een gedicht", "Een toneelstuk"], answer: 1, explanation: "Een essay: persoonlijk, reflectief betoog — denkers als Montaigne, Nescio schreven essays." },
      { q: "Wat is een stilistische analyse?", options: ["Een samenvatting van een tekst", "Onderzoek naar hoe taalkeuzes een tekst betekenis en effect geven", "Een grammaticale analyse", "Een inhoudsanalyse"], answer: 1, explanation: "Stilistiek: analyse van woordkeuze, zinsbouw, beeldspraak en hun effect op de lezer." },
      { q: "Wat is een literaire periode?", options: ["Het tijdstip van publicatie", "Een tijdvak in de literatuur met gemeenschappelijke kenmerken en stromingen", "Een schrijfstijl", "Een genre"], answer: 1, explanation: "Bv: Romantiek (1800-1850), Realisme (1850-1880), Naturalisme (1880-1900)." },
      { q: "Wat is een refrein in een gedicht?", options: ["Een strofe", "Een terugkerende regel of strofe in een gedicht of lied", "Het rijmschema", "De eerste strofe"], answer: 1, explanation: "Refrein: de herhaling benadrukt een thema of gevoel." },
      { q: "Wat is een hyperbool?", options: ["Een vergelijking met 'als'", "Een bewuste overdrijving voor nadruk of komisch effect", "Een personificatie", "Een metafoor"], answer: 1, explanation: "Hyperbool: 'Ik heb je al duizend keer gezegd...' — overdrijving voor effect." },
      { q: "Wat is een dialoog in literatuur?", options: ["Een monoloog", "Gesprek tussen twee of meer personages in een tekst", "Een brief", "Een innerlijke gedachtenstroom"], answer: 1, explanation: "Dialoog laat lezers personages direct zien en hun relatie ervaren." },
      { q: "Wat is een genre?", options: ["Een stijl", "Een categorie van literaire werken met gemeenschappelijke kenmerken", "Een schrijver", "Een tijdperk"], answer: 1, explanation: "Genres: roman, gedicht, toneelstuk, essay — elk met eigen conventies en verwachtingen." },
      { q: "Wat is het verschil tussen lyriek, epiek en drama?", options: ["Geen verschil", "Lyriek = gevoelsuitdrukking; epiek = verhaal; drama = toneelstuk", "Epiek = gedicht", "Drama = roman"], answer: 1, explanation: "Drie basiscategorieën van literatuur: lyrisch (gevoelens), episch (verhalen), dramatisch (toneel)." },
      { q: "Wat is een terugkerende verteller (frame narrative)?", options: ["Een alwetende verteller", "Een verhaal-in-een-verhaal constructie met een omsluitend verhaal", "Een ik-verteller", "Een betrouwbare verteller"], answer: 1, explanation: "Frame narrative: bv. 'Duizend-en-één nacht' — een verteller vertelt verhalen in een omsluitend verhaal." },
      { q: "Wat is consonantie in poëzie?", options: ["Herhaling van klinkers", "Herhaling van medeklinkers in opeenvolgende woorden", "Eindrijm", "Assonantie"], answer: 1, explanation: "Consonantie (medeklinkerrijm): 'pitter-patter', 'blank and think' — herhaling van medeklinkers." },
    ],
  },
};

// ─── Vragen voor vrije onderwerpen (fallback als AI niet werkt) ──
const TOPIC_QUESTIONS = {
  "seksuele voorlichting": [
    { q: "Wat is bevruchting?", options: ["Het groeien van een foetus", "Het samenvoegen van zaadcel en eicel", "De geboorte van een baby", "Het begin van de zwangerschap"], answer: 1, explanation: "Bij bevruchting dringt een zaadcel door in een eicel. De nieuw gevormde cel heet een zygote." },
    { q: "Waar worden eitjes aangemaakt bij vrouwen?", options: ["In de baarmoeder", "In de eierstokken", "In de eileiders", "In de vagina"], answer: 1, explanation: "De eierstokken produceren eicellen. Iedere maand rijpt er doorgaans één eicel." },
    { q: "Wat is menstruatie?", options: ["Het vrijkomen van een eicel", "Het afstoten van het baarmoederslijmvlies als er geen bevruchting is", "Een ziekte", "Het begin van de zwangerschap"], answer: 1, explanation: "Als een eicel niet bevrucht wordt, stoot de baarmoeder het slijmvlies af. Dit heet menstruatie." },
    { q: "Wat is een SOA?", options: ["Een schoolvak", "Een seksueel overdraagbare aandoening", "Een medicijn", "Een hormoon"], answer: 1, explanation: "SOA staat voor Seksueel Overdraagbare Aandoening, zoals chlamydia of gonorroe." },
    { q: "Waartegen beschermt een condoom het beste?", options: ["Alleen ongewenste zwangerschap", "Alleen SOA's", "Zowel ongewenste zwangerschap als SOA's", "Niets"], answer: 2, explanation: "Een condoom is het enige voorbehoedsmiddel dat zowel beschermt tegen ongewenste zwangerschap als tegen SOA's." },
    { q: "Wat is anticonceptie?", options: ["Een manier om zwanger te worden", "Een middel of methode om zwangerschap te voorkomen", "Een SOA-behandeling", "Een hormoonziekte"], answer: 1, explanation: "Anticonceptie (voorbehoedsmiddelen) voorkomt zwangerschap. Voorbeelden: pil, condoom, spiraaltje." },
    { q: "Hoe lang duurt een gemiddelde zwangerschap?", options: ["6 maanden", "9 maanden (± 40 weken)", "12 maanden", "7 maanden"], answer: 1, explanation: "Een zwangerschap duurt gemiddeld 40 weken (9 maanden) gerekend vanaf de eerste dag van de laatste menstruatie." },
    { q: "Wat is toestemming (consent) bij seks?", options: ["Je hoeft niets te zeggen", "Beide personen stemmen vrijwillig en duidelijk in", "Zwijgen betekent ja", "Het is alleen nodig bij vreemden"], answer: 1, explanation: "Seksuele toestemming moet vrijwillig, bewust en duidelijk zijn van alle betrokken personen." },
    { q: "Wat is de wettelijke leeftijdsgrens voor seks in Nederland?", options: ["14 jaar", "16 jaar", "18 jaar", "12 jaar"], answer: 1, explanation: "In Nederland is de leeftijdsgrens voor seks 16 jaar. Seks met iemand jonger dan 16 is strafbaar." },
    { q: "Wat is puberteit in relatie tot seksualiteit?", options: ["Een ziekte", "De periode waarin je lichaam geslachtsrijp wordt", "Een operatie", "Een hormoonbehandeling"], answer: 1, explanation: "Tijdens de puberteit maakt het lichaam geslachtshormonen aan en wordt het vruchtbaar." },
    { q: "Wat zijn geslachtshormonen?", options: ["Vitaminen", "Chemische stoffen die geslachtskenmerken en vruchtbaarheid sturen", "Bloedcellen", "Enzymen in de spijsvertering"], answer: 1, explanation: "Geslachtshormonen (testosteron, oestrogeen) sturen de ontwikkeling van geslachtskenmerken." },
    { q: "Wat is seksuele diversiteit?", options: ["Iedereen is heteroseksueel", "Mensen kunnen zich op verschillende geslachten aangetrokken voelen", "Alleen mannen en vrouwen bestaan", "Een medische aandoening"], answer: 1, explanation: "Seksuele diversiteit omvat hetero-, homo-, biseksualiteit en andere oriëntaties — allemaal normaal." },
    { q: "Wat betekent LHBTI+?", options: ["Een politieke partij", "Lesbisch, Homo, Biseksueel, Transgender, Intersekse en meer", "Een sportvereniging", "Een wet"], answer: 1, explanation: "LHBTI+ is een afkorting voor de diversiteit in seksuele oriëntatie en genderidentiteit." },
    { q: "Hoe worden de meeste SOA's overgedragen?", options: ["Via de lucht", "Via onbeschermd seksueel contact", "Via eten en drinken", "Via aanraking"], answer: 1, explanation: "De meeste SOA's verspreiden zich via onbeschermd seksueel contact. Gebruik altijd een condoom." },
    { q: "Wat is seksuele grensoverschrijding?", options: ["Flirten", "Iemand dwingen tot seksueel gedrag zonder toestemming", "Een kus geven", "Complimenten geven"], answer: 1, explanation: "Seksuele grensoverschrijding is elk seksueel gedrag waarvoor geen vrijwillige toestemming is gegeven." },
    { q: "Wat is genderidentiteit?", options: ["Je biologische geslacht", "Hoe je jezelf ervaart (man, vrouw, non-binair, etc.)", "Je seksuele voorkeur", "Je uiterlijk"], answer: 1, explanation: "Genderidentiteit is hoe je jezelf innerlijk ervaart, los van je biologische geslacht." },
    { q: "Wat is een eicel?", options: ["De mannelijke geslachtscel", "De vrouwelijke geslachtscel", "Een hormoon", "Een orgaan"], answer: 1, explanation: "Een eicel is de vrouwelijke geslachtscel, aangemaakt in de eierstokken." },
    { q: "Wat is een zaadcel?", options: ["De vrouwelijke geslachtscel", "De mannelijke geslachtscel die de eicel kan bevruchten", "Een hormoon", "Een bloedcel"], answer: 1, explanation: "Zaadcellen zijn de mannelijke geslachtscellen, aangemaakt in de zaadballen." },
    { q: "Waar kun je terecht met vragen over seksualiteit?", options: ["Niemand", "Huisarts, seksuoloog, Rutgers of jouw vertrouwenspersoon", "Alleen internet", "Alleen vrienden"], answer: 1, explanation: "Voor vragen over seksualiteit kun je terecht bij je huisarts, Rutgers (rutgers.nl) of een vertrouwenspersoon." },
    { q: "Wat is de baarmoeder?", options: ["Een orgaan bij mannen", "Het orgaan bij vrouwen waar een baby groeit tijdens de zwangerschap", "Een ander woord voor vagina", "Een hormoon"], answer: 1, explanation: "De baarmoeder (uterus) is het holle spierorgaan bij vrouwen waarin een bevruchte eicel kan innestelen en groeien." },
  ],
  "puberteit": [
    { q: "Wat is puberteit?", options: ["Een ziekte", "De periode van lichamelijke en emotionele groei van kind naar volwassene", "Een schoolfase", "Een hormoonbehandeling"], answer: 1, explanation: "Puberteit is de fase waarin je lichaam geslachtsrijp wordt onder invloed van hormonen." },
    { q: "Welk hormoon zorgt bij jongens voor de puberteit?", options: ["Oestrogeen", "Testosteron", "Insuline", "Adrenaline"], answer: 1, explanation: "Testosteron is het belangrijkste mannelijke geslachtshormoon. Het veroorzaakt o.a. stemwisseling en baardgroei." },
    { q: "Welk hormoon zorgt bij meisjes voor de puberteit?", options: ["Testosteron", "Insuline", "Oestrogeen", "Adrenaline"], answer: 2, explanation: "Oestrogeen is het belangrijkste vrouwelijke geslachtshormoon. Het veroorzaakt borstvorming en beïnvloedt de menstruatiecyclus." },
    { q: "Wat is acne?", options: ["Een virus", "Puistjes door verstopte talgklieren, veel voorkomend in de puberteit", "Een allergie", "Een schimmelinfectie"], answer: 1, explanation: "Acne ontstaat als talgklieren verstopt raken door hormonale veranderingen in de puberteit." },
    { q: "Op welke leeftijd begint de puberteit gemiddeld bij meisjes?", options: ["6-8 jaar", "10-11 jaar", "15-16 jaar", "18 jaar"], answer: 1, explanation: "Meisjes beginnen gemiddeld rond 10-11 jaar met de puberteit, jongens iets later (11-12 jaar)." },
    { q: "Welke klier produceert groeihormoon?", options: ["De schildklier", "De hypofyse (pituïtaire klier)", "De bijnieren", "De alvleesklier"], answer: 1, explanation: "De hypofyse in de hersenen produceert groeihormoon, dat een groeispurt veroorzaakt in de puberteit." },
    { q: "Wat is een groeispurt?", options: ["Een vertraging in de groei", "Een snelle periode van lichamelijke groei", "Een hormoonstoornis", "Een sportoefening"], answer: 1, explanation: "Tijdens de puberteit kun je plots snel groeien. Dit heet een groeispurt." },
    { q: "Wat is de eerste menstruatie?", options: ["Menarche", "Ovulatie", "Puberteit", "Menopauze"], answer: 0, explanation: "De eerste menstruatie heet menarche. Dit is een teken dat het meisje geslachtsrijp wordt." },
    { q: "Waarom zweten tieners meer in de puberteit?", options: ["Ze sporten meer", "Hormonen activeren meer zweetklieren, ook in de oksels", "Ze eten ongezonder", "Het is toeval"], answer: 1, explanation: "Hormonen stimuleren de zweetklieren, ook de apocriene klieren in oksels. Hierdoor ontstaat ook lichaamslucht." },
    { q: "Wat veroorzaakt een brekende stem bij jongens?", options: ["Verkoudheid", "Testosteron laat het strottenhoofd groeien", "Teveel schreeuwen", "Een infectie"], answer: 1, explanation: "Testosteron laat het strottenhoofd (adamsappel) groeien, waardoor de stem dieper wordt." },
    { q: "Wat zijn stemmingswisselingen in de puberteit?", options: ["Stoornissen", "Normale emotionele schommelingen door hormonale veranderingen", "Geestesziektes", "Vermoeidheid"], answer: 1, explanation: "Hormonale veranderingen kunnen je emoties sterker en wisselender maken. Dit is normaal in de puberteit." },
    { q: "Wat is het verschil tussen puberteit en adolescentie?", options: ["Ze zijn hetzelfde", "Puberteit = lichamelijke verandering; adolescentie = de bredere fase van jeugd naar volwassenheid", "Adolescentie eindigt eerder", "Puberteit is voor meisjes, adolescentie voor jongens"], answer: 1, explanation: "Puberteit gaat over lichamelijke veranderingen; adolescentie is breder en omvat ook emotionele en sociale ontwikkeling." },
    { q: "Wat doet oestrogeen bij meisjes?", options: ["Baardgroei bevorderen", "Borstontwikkeling, heupgroei en menstruatiecyclus reguleren", "Spiergroei stimuleren", "De stem verlagen"], answer: 1, explanation: "Oestrogeen zorgt voor vrouwelijke lichaamsvormen, borstontwikkeling en reguleert de menstruatiecyclus." },
    { q: "Wat is zelfbeeld in de puberteit?", options: ["Hoe anderen je zien", "Hoe je jezelf ziet en ervaart, wat sterk verandert in de puberteit", "Je cijfers op school", "Je vriendenkring"], answer: 1, explanation: "In de puberteit ga je je eigen identiteit ontwikkelen. Je zelfbeeld kan wisselend zijn." },
    { q: "Wat is een ander woord voor de mannelijke geslachtsorganen?", options: ["Ovaria", "Genitaliën of geslachtsorganen", "Gonaden (vrouwelijk)", "Bijnieren"], answer: 1, explanation: "De uitwendige mannelijke geslachtsorganen zijn de penis en de zaadballen." },
    { q: "Wat groeien er bij jongens in de puberteit?", options: ["Alleen spiermassa", "Schaamhaar, okselhaar, snor/baard en de penis groeit", "Alleen de stem verandert", "De ogen worden groter"], answer: 1, explanation: "Jongens krijgen in de puberteit meer lichaamshaar, de stem verdiept en de geslachtsorganen groeien." },
    { q: "Wat groeien er bij meisjes in de puberteit?", options: ["Alleen de borsten", "Borsten, schaamhaar, okselhaar en de heupen worden breder", "Alleen de stem verandert", "De neus wordt groter"], answer: 1, explanation: "Meisjes ontwikkelen borsten, krijgen meer lichaamshaar en hun lichaam wordt vrouwelijker van vorm." },
    { q: "Wat is het belang van slaap in de puberteit?", options: ["Slaap is minder belangrijk", "Tieners hebben meer slaap nodig (8-10 uur) voor groei en herstelontwikkeling", "8 uur is teveel", "Slaap heeft geen invloed op groei"], answer: 1, explanation: "Groeihormoon wordt vooral 's nachts aangemaakt. Tieners hebben meer slaap nodig dan volwassenen." },
    { q: "Wat is identiteitsontwikkeling in de puberteit?", options: ["Je wordt een kopie van je ouders", "Je ontdekt wie je bent, wat je wilt en waar je voor staat", "Je verandert van naam", "Je kiest een beroep"], answer: 1, explanation: "Adolescenten gaan op zoek naar hun eigen identiteit: waarden, interesses en sociale groepen." },
    { q: "Is het normaal als de puberteit op verschillende tijdstippen begint?", options: ["Nee, iedereen begint gelijktijdig", "Ja, er is een grote variatie in begintijdstip (10-16 jaar)", "Alleen meisjes variëren", "Alleen bij ziekte wijkt het af"], answer: 1, explanation: "Er is een grote normale variatie: puberteitsveranderingen kunnen beginnen tussen 10 en 16 jaar." },
  ],
  "roken & drugs": [
    { q: "Wat is nicotine?", options: ["Een vitamine in tabak", "Een verslavende stof in tabak die het brein beïnvloedt", "Een kankerverwekkende kleurstof", "Een geneesmiddel"], answer: 1, explanation: "Nicotine is de verslavende stof in tabak. Het bindt aan receptoren in het brein en geeft tijdelijk een goed gevoel." },
    { q: "Welke ziekte heeft het sterkste verband met roken?", options: ["Diabetes", "Longkanker", "Griep", "Reuma"], answer: 1, explanation: "Roken is de belangrijkste oorzaak van longkanker. Ook hart- en vaatziekten worden door roken veroorzaakt." },
    { q: "Wat is passief roken?", options: ["Roken buiten", "Meeroken: schadelijke rook inademen van een ander", "Licht roken", "E-sigaretten gebruiken"], answer: 1, explanation: "Meeroken (passief roken) is gevaarlijk: ook de rook die iemand anders uitademt bevat schadelijke stoffen." },
    { q: "Wat is de minimumleeftijd voor het kopen van alcohol in Nederland?", options: ["14 jaar", "16 jaar", "18 jaar", "21 jaar"], answer: 2, explanation: "In Nederland mag je pas alcohol kopen vanaf 18 jaar. Dit geldt ook voor sigaretten." },
    { q: "Wat doet alcohol met het brein?", options: ["Het versnelt reacties", "Het remt de werking van het brein, waardoor reacties trager worden", "Het versterkt het geheugen", "Het heeft geen effect"], answer: 1, explanation: "Alcohol is een verdovend middel dat de hersenfunctie vertraagt. Dit verslechtert reactievermogen en oordeelsvermogen." },
    { q: "Wat is een verslaving?", options: ["Een keuze om vaak iets te doen", "Een dwangmatige behoefte aan een stof of gedrag ondanks negatieve gevolgen", "Een hobby", "Een medische behandeling"], answer: 1, explanation: "Bij verslaving is er fysieke en/of psychische afhankelijkheid. Stoppen is moeilijk zonder hulp." },
    { q: "Wat zijn softdrugs?", options: ["Harddrugs met een zacht gevoel", "Drugs die als minder schadelijk worden beschouwd, zoals cannabis", "Alle legale drugs", "Alcohol en koffie"], answer: 1, explanation: "Softdrugs (bijv. cannabis/wiet) worden als minder schadelijk gezien dan harddrugs, maar zijn niet zonder risico." },
    { q: "Wat zijn harddrugs?", options: ["Drugs met een hard gevoel", "Sterk verslavende en gevaarlijke drugs, zoals cocaine en heroïne", "Alle illegale drugs", "Alcohol in grote hoeveelheden"], answer: 1, explanation: "Harddrugs zijn sterk verslavend en gevaarlijk voor de gezondheid. Ze staan op lijst 1 van de Opiumwet." },
    { q: "Wat doet cannabis (wiet) met de hersenen bij jongeren?", options: ["Het is alleen gevaarlijk voor volwassenen", "Het kan de hersenontwikkeling verstoren omdat hersenen tot 25 jaar groeien", "Het is niet schadelijk", "Het verbetert het geheugen"], answer: 1, explanation: "Jongeren zijn extra kwetsbaar voor cannabis: de hersenen zijn nog in ontwikkeling tot het 25e jaar." },
    { q: "Wat zijn ontwenningsverschijnselen?", options: ["Bijwerkingen van medicijnen", "Klachten die optreden als je stopt met een stof waaraan je verslaafd bent", "Allergische reacties", "Symptomen van een ziekte"], answer: 1, explanation: "Bij verslaving kan stoppen leiden tot ontwenning: zweten, trillen, angst, slaapproblemen." },
    { q: "Wat doet roken met de longen?", options: ["Niets", "Teer beschadigt de longblaasjes en trillharen, wat longziekten veroorzaakt", "De longen worden sterker", "Roken verbetert de ademhaling"], answer: 1, explanation: "Teer uit sigaretten beschadigt longweefsel en kan longkanker, COPD en chronisch hoesten veroorzaken." },
    { q: "Wat is een overdosis?", options: ["Te weinig drugs nemen", "Te veel van een stof innemen, wat levensgevaarlijk kan zijn", "Een medicijndosis", "Een ontwenningsverschijnsel"], answer: 1, explanation: "Een overdosis is een hoeveelheid die het lichaam niet kan verwerken. Dit kan leiden tot bewusteloosheid of de dood." },
    { q: "Waarom zijn drugs extra gevaarlijk voor tieners?", options: ["Ze zijn niet gevaarlijker dan voor volwassenen", "Hersenen zijn nog in ontwikkeling en kwetsbaarder voor schade", "Tieners verdragen drugs beter", "Drugs werken minder sterk bij tieners"], answer: 1, explanation: "De hersenen zijn volop in ontwikkeling tot het 25e levensjaar. Drugs kunnen die ontwikkeling permanent beschadigen." },
    { q: "Wat is de invloed van alcohol op verkeersveiligheid?", options: ["Geen invloed", "Alcohol vertraagt reacties en verlaagt concentratie, wat de kans op ongelukken verhoogt", "Alcohol maakt alerter", "Alleen een probleem bij meer dan 5 glazen"], answer: 1, explanation: "Al bij een kleine hoeveelheid alcohol neemt je reactievermogen af. Rijden onder invloed is levensgevaarlijk en strafbaar." },
    { q: "Wat is de schade van roken tijdens zwangerschap?", options: ["Geen schade", "Risico op vroeggeboorte, laag geboortegewicht en ademhalingsproblemen bij de baby", "Alleen schadelijk in de eerste maand", "Schadelijk voor de moeder, niet voor de baby"], answer: 1, explanation: "Roken tijdens de zwangerschap beperkt de zuurstoftoevoer naar de baby en veroorzaakt ernstige gezondheidsrisico's." },
    { q: "Wat is groepsdruk bij druggebruik?", options: ["Zelfstandig kiezen om drugs te gebruiken", "De sociale druk van leeftijdgenoten om mee te doen", "Reclame voor drugs", "Een wettelijk begrip"], answer: 1, explanation: "Groepsdruk is een belangrijke reden waarom jongeren beginnen met roken of drugs: men wil erbij horen." },
    { q: "Wat is de Opiumwet?", options: ["Een wet over slaap", "De Nederlandse wet die productie, handel en bezit van drugs reguleert", "Een internationale verdrag", "Een gezondheidsadvies"], answer: 1, explanation: "De Opiumwet regelt welke drugs illegaal zijn in Nederland. Bezit en handel in harddrugs is strafbaar." },
    { q: "Wat is fetal alcohol syndroom (FAS)?", options: ["Een ziekte van de moeder", "Lichamelijke en geestelijke afwijkingen bij kinderen van moeders die dronken tijdens de zwangerschap", "Een kind dat allergisch is voor alcohol", "Een ontwikkelingsstoornis"], answer: 1, explanation: "Als een zwangere vrouw alcohol drinkt, kan dit blijvende schade veroorzaken bij het ongeboren kind (FAS)." },
    { q: "Waar kun je terecht voor hulp bij verslaving?", options: ["Nergens", "Huisarts, verslavingszorg (bijv. Jellinek), of anoniem via een hulplijn", "Alleen ziekenhuizen", "Alleen politie"], answer: 1, explanation: "Voor verslavingshulp kun je terecht bij de huisarts, verslavingszorginstellingen zoals Jellinek of anonieme hulplijnen." },
    { q: "Wat zijn de korte termijn effecten van alcohol?", options: ["Meer concentratie en energie", "Ontremming, vertraagde reacties, verslechterd evenwicht en wazig zien", "Verbeterd geheugen", "Grotere spierkracht"], answer: 1, explanation: "Alcohol geeft tijdelijk een ontremd gevoel maar vertraagt tegelijk alle hersenfuncties." },
  ],
  "ehbo & eerste hulp": [
    { q: "Wat betekent EHBO?", options: ["Eenvoudige Hulp Bij Ongemakken", "Eerste Hulp Bij Ongelukken", "Erkende Hulpverleners Bij Onheil", "Extra Hulp Bij Operaties"], answer: 1, explanation: "EHBO staat voor Eerste Hulp Bij Ongelukken: direct hulp verlenen voordat professionele hulp arriveert." },
    { q: "Wat is het alarmnummer in Nederland?", options: ["911", "999", "112", "0800-0899"], answer: 2, explanation: "112 is het Europese alarmnummer voor politie, brandweer en ambulance. Gratis bereikbaar vanuit elk toestel." },
    { q: "Wat doe je bij een bewusteloos persoon die NIET ademt?", options: ["Wachten op de ambulance", "Begin direct met reanimatie: 30 borstcompressies dan 2 beademingen", "Water geven", "Op de rug leggen en niks doen"], answer: 1, explanation: "Start direct reanimatie (30:2) en bel 112. Elke minuut zonder reanimatie verkleint de overlevingskans." },
    { q: "Wat is de juiste verhouding bij reanimatie?", options: ["10 compressies, 1 beademing", "30 borstcompressies, 2 beademingen", "15 compressies, 5 beademingen", "50 compressies, geen beademing"], answer: 1, explanation: "De standaard reanimatieverhouding is 30 borstcompressies gevolgd door 2 beademingen, herhaald tot hulp arriveert." },
    { q: "Wat doe je bij een brandwond?", options: ["Boter of vet smeren", "Koelen met lauw (niet koud) stromend water gedurende minimaal 10 minuten", "Een verband om de brandplek", "Ijs erop leggen"], answer: 1, explanation: "Koel een brandwond 10-20 minuten met lauw water. Gebruik NOOIT ijs, boter of tandpasta." },
    { q: "Wanneer gebruik je de stabiele zijligging?", options: ["Bij iemand die niet ademt", "Bij een bewusteloos persoon die wél ademt", "Bij iemand met een botbreuk", "Bij een hartstilstand"], answer: 1, explanation: "De stabiele zijligging voorkomt dat een bewusteloze persoon stikt in zijn braaksel terwijl hij/zij ademt." },
    { q: "Wat is een AED?", options: ["Een ziekenhuisapparaat", "Een Automatische Externe Defibrillator die het hart kan herstarten", "Een bloeddrukmeter", "Een verbandtrommel"], answer: 1, explanation: "Een AED is een draagbaar apparaat dat bij hartstilstand via een elektrische schok het hartritme kan herstellen." },
    { q: "Wat doe je bij ernstige bloeding?", options: ["Wachten tot het vanzelf stopt", "Druk uitoefenen op de wond met een schone doek", "Water eroverheen spoelen", "Tourniquêt altijd direct aanleggen"], answer: 1, explanation: "Druk direct met een schone doek op de wond en houd die druk aan. Bel 112 bij ernstige bloeding." },
    { q: "Wat is RICE-methode bij een verstuiking?", options: ["Rest, Ice, Compression, Elevation", "Run, Inhale, Call, Eat", "Rest, Ibuprofen, Climb, Exercise", "Relax, Ice, Cutting, Elevation"], answer: 0, explanation: "RICE: Rust (Rest), IJspakking (Ice), Drukverband (Compression), Hooghouden (Elevation)." },
    { q: "Hoe herken je een beroerte? (gebruik FAST)", options: ["Koorts, Ademhaling, Shock, Tranen", "Face (scheef gezicht), Arms (arm vallen), Speech (spraakproblemen), Time (bel 112)", "Flauwvallen, Acuut pijn, Schudden, Trillen", "Fallen, Altijd pijn, Spieren, Tintelingen"], answer: 1, explanation: "FAST: Face (mondhoek hangt), Arms (arm valt), Speech (onduidelijke spraak), Time (direct 112 bellen)." },
    { q: "Wat doe je bij iemand die hyperventileert?", options: ["In een zak laten ademen (verouderd)", "Kalm blijven, rustig laten ademen, in een papieren zak ademen is achterhaald", "112 bellen", "Laten liggen en niet aanspreken"], answer: 1, explanation: "Geef rustig aanwijzingen: ademhaal langzaam in en uit. Het 'in de zak ademen' advies is achterhaald." },
    { q: "Wat doe je bij neusbloeding?", options: ["Hoofd achterover en knijpen", "Hoofd voorover buigen en knijp de zachte neusbrug dicht", "Meteen 112 bellen", "Wattenpropje insteken"], answer: 1, explanation: "Hoofd iets naar voren en knijp de zachte neusbrug dicht. Hoofd achterover is gevaarlijk (bloed naar keel)." },
    { q: "Wat doe je als iemand een giftige stof heeft ingeslikt?", options: ["Laten braken", "112 bellen en Antigifcentrum (030-274 88 88) raadplegen", "Veel water laten drinken", "Wachten op symptomen"], answer: 1, explanation: "Bel nooit braken op! Bel 112 of het Vergiftigingen Informatiecentrum voor advies." },
    { q: "Wat is een hersenschudding?", options: ["Een gebroken schedel", "Een tijdelijke hersenstoornis na een klap op het hoofd", "Bloeding in de hersenen", "Een zenuwbeschadiging"], answer: 1, explanation: "Hersenschudding: duizeligheid, misselijkheid, hoofdpijn na klap op het hoofd. Rust is de behandeling." },
    { q: "Wat doe je bij epilepsie?", options: ["De persoon vasthouden", "Vrije ruimte geven, iets zachts onder het hoofd, niet vasthouden", "Lepel in de mond stoppen", "Direct 112 bellen tenzij het langer dan 5 minuten duurt"], answer: 1, explanation: "Houd de persoon NOOIT vast. Maak ruimte vrij, bescherm het hoofd. Bel 112 als de aanval langer dan 5 min duurt." },
    { q: "Hoe controleer je of iemand bewusteloos is?", options: ["Luid roepen en schudden aan de schouders", "Praat luid, schud zacht aan de schouders en kijk of er reactie is", "Alleen roepen", "Controleer de hartslag"], answer: 1, explanation: "Probeer contact: schud voorzichtig aan de schouders en roep. Geen reactie? Controleer ademhaling en bel 112." },
    { q: "Wat doe je bij een botbreuk?", options: ["Het gebroken deel bewegen en rechtzetten", "Immobiliseer het gebroken deel, ondersteun het en bel hulp", "Alles verbinden en zelf naar ziekenhuis", "Masseren om pijn te verminderen"], answer: 1, explanation: "Beweeg een gebroken ledemaat NIET. Immobiliseer en ondersteun en ga naar een ziekenhuis." },
    { q: "Wat is de functie van een verbandtrommel?", options: ["Opbergplek voor medicijnen", "Een doos met materialen voor het verlenen van eerste hulp", "Verplicht in elk huis", "Speciaal voor brandwonden"], answer: 1, explanation: "Een verbandtrommel bevat pleisters, verbanden, desinfectiemiddel en andere EHBO-materialen." },
    { q: "Hoe doe je een drukverband aan bij een wond?", options: ["Zo strak mogelijk om de bloedsomloop te stoppen", "Stevig genoeg om druk te geven maar niet strak genoeg om circulatie te blokkeren", "Zo los mogelijk", "Alleen om gewrichten"], answer: 1, explanation: "Een drukverband stopt bloeding maar mag de bloedsomloop niet afsluiten. Controleer of vingers/tenen warm blijven." },
    { q: "Wat is de veilige afstand bij een elektrisch ongeluk?", options: ["1 meter", "Minimaal 10-15 meter en 112 bellen", "Dicht bij blijven om te helpen", "Geen afstand nodig"], answer: 1, explanation: "Elektriciteit is dodelijk. Kom NOOIT dichtbij een elektrisch ongeluk. Zorg voor veiligheid en bel 112." },
  ],
  "klimaatverandering": [
    { q: "Wat is het broeikaseffect?", options: ["De opwarming van kassen", "De opwarming van de aarde doordat broeikasgassen warmte vasthouden", "De reflectie van de zon", "Wind die warmte verspreidt"], answer: 1, explanation: "Broeikasgassen (CO₂, methaan) houden warmte in de atmosfeer vast, waardoor de aarde opwarmt." },
    { q: "Welk gas draagt het meest bij aan door mensen veroorzaakte klimaatverandering?", options: ["Zuurstof", "Koolstofdioxide (CO₂)", "Stikstof", "Waterdamp"], answer: 1, explanation: "CO₂ uit het verbranden van fossiele brandstoffen is de hoofdoorzaak van de huidige klimaatverandering." },
    { q: "Wat zijn fossiele brandstoffen?", options: ["Duurzame energiebronnen", "Olie, gas en kolen gevormd uit afgestorven organismen", "Kernenergie", "Biomassa"], answer: 1, explanation: "Fossiele brandstoffen (olie, aardgas, steenkool) zijn miljoenen jaar geleden gevormd en slaan CO₂ op." },
    { q: "Hoe draagt de veeteelt bij aan klimaatverandering?", options: ["Helemaal niet", "Koeien produceren methaan (een sterk broeikasgas) bij hun spijsvertering", "Via vervuild water", "Via zuurstofverbruik"], answer: 1, explanation: "Methaan van koeien is een sterk broeikasgas. Veeteelt is verantwoordelijk voor een groot deel van broeikasgasuitstoot." },
    { q: "Wat bepaalde het Klimaatakkoord van Parijs (2015)?", options: ["Stoppen met kerncentrales", "De aardse opwarming beperken tot maximaal 2°C (bij voorkeur 1,5°C) boven pre-industrieel niveau", "Een wereldwijde CO₂-belasting invoeren", "Alle landen verplichten op zonne-energie over te stappen"], answer: 1, explanation: "In Parijs spraken 196 landen af de opwarming te beperken tot 2°C, met een streven naar 1,5°C." },
    { q: "Wat zijn de gevolgen van zeespiegelstijging?", options: ["Meer vissoorten", "Overstromingen van laaggelegen kustgebieden wereldwijd", "Betere scheepvaartroutes", "Meer neerslag in droge gebieden"], answer: 1, explanation: "Zeespiegelstijging bedreigt laaggelegen landen en steden zoals Bangladesh, Miami en delen van Nederland." },
    { q: "Wat is een duurzame energiebron?", options: ["Aardgas", "Energie uit bronnen die niet opraken, zoals zon en wind", "Steenkool", "Kernenergie (omstreden)"], answer: 1, explanation: "Duurzame energiebronnen (zonne-, wind-, waterkracht) raken niet op en stoten geen CO₂ uit." },
    { q: "Wat is je koolstofvoetafdruk?", options: ["De hoeveelheid CO₂ die een land uitstoot", "De totale hoeveelheid broeikasgassen die jij veroorzaakt door je levensstijl", "De maat voor bodemvervuiling", "De hoeveelheid energieverbruik van bedrijven"], answer: 1, explanation: "Je koolstofvoetafdruk is de som van alle broeikasgasemissies door jouw activiteiten (transport, voeding, energie)." },
    { q: "Wat is ontbossing en hoe beïnvloedt het het klimaat?", options: ["Bomen planten, slecht voor het klimaat", "Het kappen van bossen, waardoor CO₂ vrijkomt en absorptie afneemt", "Bos dat droogvalt door droogte", "Het sterven van bomen door zure regen"], answer: 1, explanation: "Bossen absorberen CO₂. Als ze gekapt worden, komt opgeslagen CO₂ vrij en verdwijnt de absorptiecapaciteit." },
    { q: "Wat zijn klimaatvluchtelingen?", options: ["Mensen die reizen voor beter klimaat", "Mensen die hun woonplaats moeten verlaten door extreme weersomstandigheden of zeespiegelstijging", "Wetenschappers die klimaat bestuderen", "Mensen die liever in warmere landen wonen"], answer: 1, explanation: "Klimaatvluchtelingen ontvluchten overstromingen, droogte of extreme hitte die hun leefgebied onbewoonbaar maakt." },
    { q: "Wat doet zonne-energie?", options: ["Warmte opslaan in de grond", "Zonlicht omzetten in elektriciteit via zonnepanelen", "CO₂ omzetten in zuurstof", "Water zuiveren"], answer: 1, explanation: "Zonnepanelen (fotovoltaïsche cellen) zetten zonlicht direct om in elektriciteit, zonder CO₂-uitstoot." },
    { q: "Hoe helpt minder vlees eten het klimaat?", options: ["Het helpt niet", "Vlees (vooral rood vlees) veroorzaakt veel CO₂ en methaan; minder eten vermindert uitstoot", "Alleen plantaardig eten helpt", "Alleen biologisch vlees is schadelijk"], answer: 1, explanation: "De productie van rood vlees stoot veel broeikasgassen uit. Minder vlees eten is een effectieve persoonlijke klimaatmaatregel." },
    { q: "Wat is de rol van ijskappen bij klimaatregulatie?", options: ["Geen", "Ijskappen reflecteren zonlicht en houden de aarde koel; smelten versnelt opwarming", "Ze absorberen CO₂", "Ze reguleren neerslag"], answer: 1, explanation: "Wit ijs reflecteert zonlicht (albedo-effect). Als ijs smelt, absorbeert het donkere zeewater meer warmte." },
    { q: "Wat kun je zelf doen tegen klimaatverandering?", options: ["Niets, het is een probleem voor regeringen", "Minder vliegen, minder vlees eten, groene energie, minder auto rijden", "Alleen recyclen", "Alleen zonnepanelen installeren"], answer: 1, explanation: "Persoonlijke keuzes (transport, voeding, energie) dragen bij. En politieke betrokkenheid is ook effectief." },
    { q: "Wat zijn de gevolgen van klimaatverandering voor de biodiversiteit?", options: ["Geen gevolgen", "Soorten die zich niet snel genoeg aanpassen sterven uit", "Meer soorten", "Alleen tropische soorten worden bedreigd"], answer: 1, explanation: "Klimaatverandering vernietigt leefgebieden en verstoort seizoenspatronen, waardoor soorten uitsterven." },
    { q: "Wat is de relatie tussen klimaatverandering en extremer weer?", options: ["Geen relatie", "Opwarming leidt tot intensere stormen, ergere droogte en hevigere overstromingen", "Minder extreme buien", "Alleen meer hittegolven, niet meer stormen"], answer: 1, explanation: "Een warmere atmosfeer bevat meer energie en waterdamp, waardoor weersextremen vaker en intenser worden." },
    { q: "Wat is CO₂-uitstoot door transport?", options: ["Transport stoot geen CO₂ uit", "Vliegtuigen, auto's en schepen verbranden fossiele brandstoffen en stoten CO₂ uit", "Alleen vliegtuigen stoten CO₂ uit", "Treinen zijn de grootste uitstoters"], answer: 1, explanation: "Transport is verantwoordelijk voor een groot deel van de wereldwijde CO₂-uitstoot, met name door vliegverkeer en auto's." },
    { q: "Wat is een energietransitie?", options: ["Energie exporteren naar andere landen", "De overgang van fossiele brandstoffen naar duurzame energiebronnen", "Energie besparen", "Een nieuwe energiecentrale bouwen"], answer: 1, explanation: "De energietransitie is de wereldwijde overgang van vervuilende fossiele energie naar schone duurzame energie." },
    { q: "Wat is de IPCC?", options: ["Een energiebedrijf", "Het Intergouvernementeel Panel over Klimaatverandering, de wetenschappelijke klimaatorganisatie van de VN", "Een milieuorganisatie zoals Greenpeace", "Een politieke partij"], answer: 1, explanation: "De IPCC bundelt klimaatwetenschappelijk onderzoek en adviseert regeringen over klimaatbeleid." },
    { q: "Waarom is 1,5°C opwarming zo belangrijk?", options: ["Het is een willekeurige grens", "Boven 1,5°C worden de klimaatgevolgen exponentieel erger en moeilijker omkeerbaar", "Omdat dat de maximale meting is", "Geen bijzondere reden"], answer: 1, explanation: "Wetenschappers waarschuwen dat boven 1,5°C veel ecosystemen instorten en klimaatrisico's drastisch toenemen." },
  ],
  "pesten": [
    { q: "Wat is het verschil tussen plagen en pesten?", options: ["Er is geen verschil", "Plagen is eenmalig en speels; pesten is systematisch, herhaald en met bedoeling te kwetsen", "Plagen is erger dan pesten", "Pesten is alleen op internet"], answer: 1, explanation: "Plagen is wederzijds en gaat over, pesten is structureel en eenzijdig en veroorzaakt schade." },
    { q: "Welke rollen zijn er bij pesten?", options: ["Alleen pester en slachtoffer", "Pester, slachtoffer, omstanders (helpers, meeloper, verdediger)", "Leraar, ouder, leerling", "Aanvaller en verdediger"], answer: 1, explanation: "Bij pesten zijn er meerdere rollen: de pester, het slachtoffer, maar ook omstanders die kunnen ingrijpen of juist meedoen." },
    { q: "Wat is cyberpesten?", options: ["Hacken van computers", "Pesten via internet, sociale media, chat of sms", "Online gamen met anderen", "Negatieve recensies schrijven"], answer: 1, explanation: "Cyberpesten is pesten via digitale middelen: beledigende berichten, foto's plaatsen zonder toestemming, uitsluiten online." },
    { q: "Wat zijn de gevolgen van pesten voor het slachtoffer?", options: ["Geen gevolgen", "Angst, depressie, verminderd zelfvertrouwen, schoolverzuim, in ernstige gevallen zelfbeschadiging", "Alleen tijdelijk verdriet", "Alleen lichamelijke gevolgen"], answer: 1, explanation: "Pesten heeft ernstige psychologische gevolgen: angst, depressie, laag zelfbeeld en soms zelfs suïcidegedachten." },
    { q: "Wat kun je doen als je gepest wordt?", options: ["Niets doen en hopen dat het stopt", "Vertel het aan een volwassene die je vertrouwt, bewaar bewijzen en zoek hulp", "Terugpesten", "Jezelf terugtrekken"], answer: 1, explanation: "Meld pesten bij een vertrouwde volwassene. Bewaar bij cyberpesten schermafbeeldingen als bewijs." },
    { q: "Wat is de rol van omstanders bij pesten?", options: ["Ze zijn onbelangrijk", "Omstanders kunnen pesten stoppen of laten doorgaan door hun gedrag", "Ze hebben geen verantwoordelijkheid", "Ze zijn altijd medeplichtig"], answer: 1, explanation: "Omstanders die ingrijpen of steun geven aan het slachtoffer kunnen pesten effectief stoppen." },
    { q: "Hoe herken je iemand die gepest wordt?", options: ["Dat is niet te zien", "Teruggetrokken gedrag, vermijden van school, plotseling slechter presteren, blauwe plekken", "Alleen als ze het zeggen", "Ze worden altijd agressief"], answer: 1, explanation: "Signalen: somberheid, sociale terugtrekking, schoolvermijding, beschadigde spullen, slechte eetlust/slaap." },
    { q: "Wat is buitensluiting als vorm van pesten?", options: ["Een sportactiviteit", "Iemand bewust uitsluiten van de groep", "Een straf van een leraar", "Iets dat alleen bij kleuters voorkomt"], answer: 1, explanation: "Buitensluiting (sociale uitsluiting) is een subtiele maar schadelijke vorm van pesten: iemand negeren of buiten de groep houden." },
    { q: "Wat is een anti-pestprotocol op school?", options: ["Een strafreglement", "Een plan van school hoe pesten wordt aangepakt en voorkomen", "Een gedragscode voor leraren", "Een wet van de overheid"], answer: 1, explanation: "Scholen zijn verplicht een veilig klimaat te creëren. Een pestprotocol beschrijft hoe school pesten aanpakt." },
    { q: "Hoe kun je cyberpesten melden?", options: ["Dat kan niet", "Bij school, politie (via aangifte), of bij de sociale media-platforms (meld/blokkeer)", "Alleen bij ouders", "Alleen bij vrienden"], answer: 1, explanation: "Cyberpesten is soms strafbaar. Je kunt het melden bij school, aangifte doen bij de politie of melden bij het platform." },
    { q: "Wat is groepsdruk in relatie tot pesten?", options: ["Positieve peer pressure", "De druk van de groep om mee te doen met pesten uit angst zelf buitengesloten te worden", "Schooldruk", "Druk van ouders"], answer: 1, explanation: "Veel omstanders doen mee uit groepsdruk, niet omdat ze willen pesten, maar uit angst zelf slachtoffer te worden." },
    { q: "Wat zijn kenmerken van een pester?", options: ["Altijd een slechte thuissituatie", "Vaak behoefte aan macht, moeite met empathie, soms zelf slachtoffer van pesten", "Altijd slechte cijfers", "Altijd populair"], answer: 1, explanation: "Pesters zijn niet altijd eenzijdig 'slecht'. Soms zoeken ze status, soms zijn ze zelf slachtoffer thuis." },
    { q: "Hoe kun je als omstander helpen als iemand gepest wordt?", options: ["Meelachen om niet zelf gepest te worden", "Steun betuigen aan het slachtoffer en het melden bij een volwassene", "Niets doen", "De pester confronteren met geweld"], answer: 1, explanation: "Simpele steun ('dat klopt niet') aan het slachtoffer heeft al grote impact. En meld het bij een leraar of volwassene." },
    { q: "Wat is online anonimiteit bij cyberpesten?", options: ["Een voordeel voor slachtoffers", "Pesters kunnen anoniem opereren, wat cyberpesten verergert en aangifte moeilijker maakt", "Een beveiligingsfeature", "Geen probleem"], answer: 1, explanation: "Anonimiteit maakt pesters brutaler. Toch zijn digitale sporen vaak te traceren door politie." },
    { q: "Wat doet pesten met het zelfvertrouwen?", options: ["Niets", "Pesten beschadigt het zelfvertrouwen sterk, soms voor langere tijd", "Het maakt sterker", "Alleen als het lichamelijk is"], answer: 1, explanation: "Langdurig pesten tast het zelfbeeld aan. Slachtoffers denken soms dat ze het verdienen, wat niet zo is." },
    { q: "Waar kun je hulp zoeken als je gepest wordt?", options: ["Nergens, je lost het zelf op", "Bij een vertrouwde volwassene, anti-pestlijn (0800-2567890), of Pestweb.nl", "Alleen bij ouders", "Alleen bij politie"], answer: 1, explanation: "Er zijn speciale hulplijnen zoals de Anti-pestalarm of pestweb.nl. Zoek altijd hulp; pesten houdt zelden vanzelf op." },
    { q: "Wat is Sociale Veiligheid op school?", options: ["Cameratoezicht", "Een veilig klimaat waarin leerlingen zichzelf kunnen zijn zonder angst voor pesten of discriminatie", "Een vak op school", "Beveiligers op school"], answer: 1, explanation: "Sociale veiligheid betekent dat leerlingen en leraren zich veilig, gerespecteerd en geaccepteerd voelen." },
    { q: "Kunnen volwassenen ook gepest worden?", options: ["Nee, alleen kinderen", "Ja, ook op de werkvloer (intimidatie/mobbing) of online", "Alleen ouderen", "Pesten stopt automatisch na de middelbare school"], answer: 1, explanation: "Pesten op het werk heet 'mobbing' of 'intimidatie'. Het is ook bij volwassenen een serieus probleem." },
    { q: "Wat is een vertrouwenspersoon?", options: ["Een betaalde therapeut", "Een persoon (bij school of werk) bij wie je vertrouwelijk over problemen zoals pesten kunt praten", "De directeur", "Een ouder"], answer: 1, explanation: "Scholen zijn verplicht een vertrouwenspersoon aan te stellen. Je kunt anoniem en vertrouwelijk hulp vragen." },
    { q: "Wat is de definitie van pesten?", options: ["Eenmalig ruzie maken", "Herhaaldelijk, opzettelijk kwetsen van iemand die zichzelf moeilijk kan verdedigen", "Grapjes maken", "Kritiek geven"], answer: 1, explanation: "Pesten = systematisch, herhaald, opzettelijk kwetsen van iemand die ongelijk in macht staat." },
  ],
  "gezonde voeding": [
    { q: "Wat zijn de drie macronutriënten?", options: ["Vitaminen, mineralen en water", "Koolhydraten, eiwitten en vetten", "Suikers, zout en vet", "Groenten, fruit en granen"], answer: 1, explanation: "Macronutriënten leveren energie: koolhydraten (4 kcal/g), eiwitten (4 kcal/g) en vetten (9 kcal/g)." },
    { q: "Wat is de functie van eiwitten?", options: ["Energie leveren als brandstof", "Bouwstoffen voor spieren, organen en hormonen", "Vitaminen opnemen", "De darmen beschermen"], answer: 1, explanation: "Eiwitten zijn bouwstoffen. Ze zijn nodig voor spieropbouw, celreparatie, hormonen en enzymen." },
    { q: "Wat zijn koolhydraten?", options: ["Vetten in een andere vorm", "Suikers en zetmeel die energie leveren", "Bouwstoffen voor spieren", "Vitaminen"], answer: 1, explanation: "Koolhydraten (suikers, zetmeel, vezels) zijn de primaire energiebron van het lichaam." },
    { q: "Wat zijn vezels en waarom zijn ze goed?", options: ["Spiervezels voor sport", "Onverteerbare koolhydraten die de darmen gezond houden en de stoelgang reguleren", "Een soort vet", "Vitaminen in groenten"], answer: 1, explanation: "Vezels (in volkorenproducten, groenten, fruit) voeden darmbacteriën, verbeteren stoelgang en verminderen ziekterisico's." },
    { q: "Wat is de schijf van vijf?", options: ["Vijf maaltijden per dag", "Het Nederlandse voedingsadvies met vijf groepen gezonde basisvoeding", "Vijf vitaminen die je dagelijks nodig hebt", "Een eetmethode"], answer: 1, explanation: "De Schijf van Vijf (Voedingscentrum) toont in vijf vakken welke producten in welke hoeveelheid gezond zijn." },
    { q: "Wat zijn vitaminen?", options: ["Een soort eiwit", "Essentiële micronutriënten die je in kleine hoeveelheden nodig hebt voor lichaamsprocessen", "Een calorierijke stof", "Suikers"], answer: 1, explanation: "Vitaminen (A, B, C, D, E, K) zijn onmisbaar voor groei, afweer en celprocessen. Ons lichaam maakt ze niet (genoeg) zelf." },
    { q: "Hoeveel water moet je per dag ongeveer drinken?", options: ["0,5 liter", "1,5 - 2 liter", "4 liter", "0,5 liter is genoeg als je groenten eet"], answer: 1, explanation: "Volwassenen hebben 1,5-2 liter vocht per dag nodig. Bij sport en warm weer meer." },
    { q: "Wat is het verschil tussen snelle en langzame suikers?", options: ["Er is geen verschil", "Snelle suikers (frisdrank, snoep) geven een snelle bloedsuikerpiek; langzame suikers (volkoren) stijgen geleidelijk", "Langzame suikers zijn ongezonder", "Snelle suikers zitten alleen in fruit"], answer: 1, explanation: "Snelle suikers veroorzaken pieken in bloedsuiker. Langzame suikers (volkorenbrood, havermout) geven langdurige energie." },
    { q: "Wat is overgewicht?", options: ["Meer wegen dan 80 kg", "Een te hoog lichaamsgewicht in verhouding tot lengte (BMI > 25)", "Meer dan 10 kg boven je ideaalgewicht", "Alleen een probleem voor volwassenen"], answer: 1, explanation: "Overgewicht is een BMI > 25. Het verhoogt het risico op diabetes type 2, hart- en vaatziekten en gewrichtsproblemen." },
    { q: "Wat is BMI?", options: ["Een maat voor spiermassa", "Body Mass Index: gewicht gedeeld door lengte in het kwadraat", "Een maat voor vetpercentage", "Het gemiddelde gewicht voor je leeftijd"], answer: 1, explanation: "BMI = gewicht (kg) ÷ lengte² (m). Het geeft een indicatie van over- of ondergewicht." },
    { q: "Wat zijn de gevolgen van te veel suiker eten?", options: ["Geen gevolgen", "Cariës, overgewicht, verhoogd risico op diabetes type 2", "Alleen energieproblemen", "Alleen gaatjes in je tanden"], answer: 1, explanation: "Te veel suiker leidt tot tandbederf, gewichtstoename en op lange termijn tot insulineresistentie en diabetes." },
    { q: "Wat zijn volkoren producten?", options: ["Producten zonder koolhydraten", "Producten waarbij de volledige graankorrel (inclusief zemelen en kiem) gebruikt is", "Biologische producten", "Glutenvrije producten"], answer: 1, explanation: "Volkorenproducten bevatten meer vezels, vitaminen en mineralen dan witte/geraffineerde producten." },
    { q: "Waarom is ontbijt belangrijk?", options: ["Het is niet belangrijk", "Het levert energie voor concentratie en prestaties 's ochtends en voorkomt te veel eten later", "Alleen voor mensen die sporten", "Het is alleen voor kinderen belangrijk"], answer: 1, explanation: "Ontbijt breekt het nachtvasten. Het levert energie en voedingsstoffen voor concentratie en stemming." },
    { q: "Wat zijn de risico's van te weinig eiwitten eten?", options: ["Geen risico's", "Spierverlies, slechte wondgenezing en een verzwakt immuunsysteem", "Alleen gewichtsverlies", "Alleen vermoeidheid"], answer: 1, explanation: "Eiwitten zijn essentieel voor spieronderhoud en herstel, aanmaak van hormonen en een goed immuunsysteem." },
    { q: "Wat is een voedselallergie?", options: ["Een afkeer van bepaald voedsel", "Een immuunreactie op een bepaald voedsel dat soms levensbedreigend kan zijn", "Misselijkheid na het eten", "Intolerantie voor lactose"], answer: 1, explanation: "Bij een voedselallergie reageert het immuunsysteem op een voedingsstof. Reacties kunnen ernstig zijn (anafylaxie)." },
    { q: "Wat is het verschil tussen allergie en intolerantie?", options: ["Hetzelfde", "Allergie: immuunreactie; intolerantie: spijsverteringsprobleem (bijv. lactose)", "Intolerantie is altijd gevaarlijker", "Allergie is altijd milder"], answer: 1, explanation: "Allergie = immuunsysteem reageert (kan ernstig zijn). Intolerantie = verteringsprobleem (minder gevaarlijk)." },
    { q: "Wat zijn probiotica?", options: ["Antibiotica die goed zijn", "Levende bacteriën die de darmflora ondersteunen (in yoghurt, kefir)", "Vitaminesupplementen", "Vezels"], answer: 1, explanation: "Probiotica (in gefermenteerde producten) zijn levende bacteriën die een positief effect op de darmgezondheid hebben." },
    { q: "Wat is vegetarisch eten?", options: ["Alleen groenten eten", "Een dieet zonder vlees en vis, maar soms nog met zuivel en eieren", "Veganistisch eten", "Rauw eten"], answer: 1, explanation: "Vegetariërs eten geen vlees of vis maar vaak wel eieren en zuivel. Veganisten vermijden alle dierlijke producten." },
    { q: "Waarom zijn groenten en fruit zo gezond?", options: ["Ze bevatten veel calorieën", "Ze zijn rijk aan vitaminen, mineralen, vezels en antioxidanten met weinig calorieën", "Ze bevatten veel eiwitten", "Ze zijn gezond omdat ze groen zijn"], answer: 1, explanation: "Groenten en fruit leveren essentiële micronutriënten en vezels. De aanbeveling is 250 g groenten en 2 stuks fruit per dag." },
    { q: "Wat is de rol van vetten in het lichaam?", options: ["Vetten zijn altijd ongezond", "Vetten leveren energie, beschermen organen en zijn nodig voor vetoplosbare vitaminen", "Alleen spierbrandstof", "Vetten koelen het lichaam"], answer: 1, explanation: "Goede vetten (onverzadigd, in noten/olijfolie) zijn essentieel. Ze ondersteunen hormonen, hersenen en vitamineabsorptie." },
  ],
  "media & internet": [
    { q: "Wat is sociale media?", options: ["Nieuws op televisie", "Online platforms waarop gebruikers content delen en communiceren (Instagram, TikTok, X)", "E-mail", "Een informatiewebsite"], answer: 1, explanation: "Sociale media zijn platforms zoals Instagram, TikTok, Snapchat en X (Twitter) voor delen en communiceren." },
    { q: "Wat is phishing?", options: ["Online vissen", "Een oplichterstruc waarbij criminelen via nep-berichten je gegevens stelen", "Hacken van websites", "Spam in je mailbox"], answer: 1, explanation: "Bij phishing sturen criminelen nep-e-mails of sms'jes die lijken van een betrouwbare bron (bank, overheid)." },
    { q: "Wat zijn algoritmen op sociale media?", options: ["Beveiligingsprotocollen", "Regels die bepalen welke content jij te zien krijgt op basis van jouw gedrag", "Advertentieprijzen", "Privacy-instellingen"], answer: 1, explanation: "Algoritmen analyseren jouw klikgedrag en tonen content die je betrokken houdt — soms ten koste van diversiteit." },
    { q: "Wat is nepnieuws (fake news)?", options: ["Nieuws dat je niet leuk vindt", "Bewust verzonnen of misleidende informatie die als nieuws wordt verspreid", "Oud nieuws", "Nieuws van kleine media"], answer: 1, explanation: "Nepnieuws is opzettelijk valse informatie die wordt verspreid om mensen te misleiden of te manipuleren." },
    { q: "Hoe controleer je of nieuws betrouwbaar is?", options: ["Als veel mensen het delen, is het waar", "Controleer de bron, zoek andere bronnen en kijk of het door erkende nieuwsmedia wordt bevestigd", "Vertrouw alleen grote merken", "Als het op internet staat, klopt het"], answer: 1, explanation: "Factchecken: kijk naar de bron, zoek bevestiging bij andere betrouwbare media en gebruik factcheckwebsites." },
    { q: "Wat zijn cookies?", options: ["Kleine bestanden waarmee websites je gedrag bijhouden", "Beveiligingsprogramma's", "Advertenties", "Virussen"], answer: 0, explanation: "Cookies zijn kleine tekstbestanden die websites op jouw apparaat plaatsen om jouw voorkeuren en gedrag bij te houden." },
    { q: "Wat is een sterk wachtwoord?", options: ["Je naam en geboortejaar", "Lang (12+ tekens), met hoofdletters, cijfers en symbolen, uniek per account", "Hetzelfde wachtwoord overal voor gemak", "Je telefoonnummer"], answer: 1, explanation: "Een sterk wachtwoord is lang, uniek en bevat letters, cijfers en symbolen. Gebruik een wachtwoordmanager." },
    { q: "Wat is two-factor authenticatie (2FA)?", options: ["Twee keer inloggen met hetzelfde wachtwoord", "Extra beveiligingslaag: naast wachtwoord ook een code via sms of app", "Een dubbel wachtwoord", "Biometrische herkenning"], answer: 1, explanation: "2FA voegt een extra controle toe bij het inloggen, bijv. een sms-code. Dit maakt accounts veel veiliger." },
    { q: "Wat is FOMO?", options: ["Een social media app", "Fear Of Missing Out: angst iets te missen als je niet constant online bent", "Een cyberpestmethode", "Een privacy-instelling"], answer: 1, explanation: "FOMO (Fear Of Missing Out) is de angst iets te missen. Sociale media versterken dit gevoel bewust." },
    { q: "Wat is een filter bubble?", options: ["Een anti-virusfilter", "De situatie waarbij algoritmen je alleen tonen wat je al leuk vindt, waardoor je minder diverse info ziet", "Privacy-bescherming", "Een reclamefilter"], answer: 1, explanation: "Algoritmen tonen steeds meer van wat je al leuk vindt. Hierdoor kom je steeds minder in contact met andere perspectieven." },
    { q: "Wat is online grooming?", options: ["Online zichzelf mooier maken", "Volwassenen die online het vertrouwen winnen van kinderen met als doel misbruik", "Online pesten", "Nepprofielen aanmaken"], answer: 1, explanation: "Online grooming: een volwassene bouwt online een vertrouwensband op met een kind met als doel seksueel misbruik." },
    { q: "Wat zijn de gevaren van te veel schermtijd?", options: ["Geen gevaren", "Slaapproblemen, verminderde concentratie, minder beweging en sociale isolatie", "Alleen oogproblemen", "Alleen voor jongere kinderen"], answer: 1, explanation: "Overmatig schermgebruik is gelinkt aan slaapstoornissen, mindere schoolprestaties en mentale gezondheidsproblemen." },
    { q: "Wat is auteursrecht?", options: ["Het recht om alles te kopiëren", "Het recht van de maker om te bepalen hoe zijn/haar werk gebruikt mag worden", "Het recht om reviews te schrijven", "Een internetwet"], answer: 1, explanation: "Auteursrecht beschermt makers (schrijvers, fotografen, muzikanten) tegen onrechtmatig kopiëren van hun werk." },
    { q: "Wat is een deepfake?", options: ["Een diep persoonlijk verhaal online", "Een door AI gegenereerde nep-video of nep-foto die er echt uitziet", "Een verborgen camera-video", "Beveiligde internet verbinding"], answer: 1, explanation: "Deepfakes zijn AI-gegenereerde video's of foto's waarbij iemands gezicht overtuigend wordt vervangen — gevaarlijk voor nepnieuws." },
    { q: "Wat is de AVG (Algemene Verordening Gegevensbescherming)?", options: ["Een antivirusprogramma", "Europese privacywet die bepaalt hoe bedrijven met jouw persoonsgegevens mogen omgaan", "Een sociale media regelgeving", "Een wet over auteursrecht"], answer: 1, explanation: "De AVG (GDPR) is de Europese wet die jouw privacyrechten beschermt: recht op inzage, correctie en verwijdering van data." },
    { q: "Wat is digitale etiquette (netiquette)?", options: ["Regels voor computergebruik in de klas", "Gedragsregels voor respectvol communiceren online", "Technische richtlijnen", "Privacy-instellingen"], answer: 1, explanation: "Netiquette zijn ongeschreven (en soms officiële) gedragsregels voor respectvol online communiceren." },
    { q: "Wat is een screenshot als bewijs bij cyberpesten?", options: ["Illegaal", "Een afbeelding van je scherm die je kunt bewaren als bewijs van pestgedrag", "Altijd geldig voor de rechter", "Niet bruikbaar"], answer: 1, explanation: "Screenshots zijn nuttig als bewijs. Bewaar ze als je gepest wordt en meld dit bij school of politie." },
    { q: "Waarom zijn gratis apps soms niet echt gratis?", options: ["Ze zijn altijd echt gratis", "Je betaalt met je persoonlijke gegevens die aan adverteerders worden verkocht", "Ze zijn gratis dankzij subsidies", "Ze verdienen aan in-app aankopen alleen"], answer: 1, explanation: "'Als je niet betaalt, ben je zelf het product': gratis apps verdienen aan jouw data en gedragspatronen." },
    { q: "Wat is cybersecurity?", options: ["Het beveiligen van computers tegen virussen", "De bescherming van computersystemen, netwerken en gegevens tegen digitale aanvallen", "Veilig internetten voor kinderen", "Een antivirusprogramma"], answer: 1, explanation: "Cybersecurity omvat alles wat nodig is om digitale systemen, netwerken en data te beschermen tegen hackers." },
    { q: "Wat doe je als je iets verdachts online tegenkomt?", options: ["Altijd doorklikken om te zien wat het is", "Niet klikken, melden bij een volwassene of via meldknop.nl, en verwijderen", "Doorzuren naar vrienden", "Negeren is voldoende"], answer: 1, explanation: "Klik NOOIT op verdachte links. Meld verdachte content via meldknop.nl of aan een vertrouwde volwassene." },
  ],
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
  const [loading, setLoading] = useState(false);
  const [loadingMode, setLoadingMode] = useState("self");
  const [role, setRole] = useState(null);
  const [userName, setUserName] = useState("");
  const [userLevel, setUserLevel] = useState("");
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [gameState, setGameState] = useState(null);
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);
  const [studentProgress, setStudentProgress] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [pendingQuizData, setPendingQuizData] = useState(null);
  const abortControllerRef = useRef(null);

  // Load stored data
  useEffect(() => {
    try { const q = localStorage.getItem("ls_quizzes"); if (q) setQuizzes(JSON.parse(q)); } catch {}
    try { const p = localStorage.getItem("ls_progress"); if (p) setStudentProgress(JSON.parse(p)); } catch {}
    try { const l = localStorage.getItem("ls_leaderboard"); if (l) setLeaderboard(JSON.parse(l)); } catch {}
    try { const u = localStorage.getItem("ls_user"); if (u) { const d = JSON.parse(u); if (d.name) setUserName(d.name); if (d.level) setUserLevel(d.level); if (d.role) setRole(d.role); } } catch {}
  }, []);

  useEffect(() => { try { localStorage.setItem("ls_quizzes", JSON.stringify(quizzes)); } catch {} }, [quizzes]);
  useEffect(() => { try { localStorage.setItem("ls_progress", JSON.stringify(studentProgress)); } catch {} }, [studentProgress]);
  useEffect(() => { try { localStorage.setItem("ls_leaderboard", JSON.stringify(leaderboard)); } catch {} }, [leaderboard]);

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
      const hasPlayedBefore = !!localStorage.getItem(playedKey);
      if ((hasTopic || hasTextbook || !hasSampleQuestions || hasPlayedBefore) && quiz.useAI !== false) {
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
    localStorage.setItem(`played_${quiz.subject}_${quiz.level}`, "1");
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
          onSelectRole={(r) => { setRole(r); setPage(r === "teacher" ? "teacher-home" : "student-home"); }}
          onBack={role ? () => setPage(role === "teacher" ? "teacher-home" : "student-home") : null}
          userName={userName}
          setUserName={setUserName}
          setUserLevel={setUserLevel}
        />
      )}
      {page === "teacher-home" && (
        <TeacherHome
          userName={userName}
          quizzes={quizzes}
          onCreateQuiz={() => setPage("create-quiz")}
          onViewProgress={() => setPage("teacher-progress")}
          onBack={() => setPage("home")}
          onHome={() => setPage("home")}
          onStartQuiz={(q) => { setCurrentQuiz(q); startGame(q, "host"); }}
        />
      )}
      {page === "create-quiz" && (
        <CreateQuiz
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
            const nq = createQuiz({ ...pendingQuizData, preGeneratedQuestions: finalQuestions });
            setCurrentQuiz(nq);
            setPendingQuizData(null);
            setPage("lobby");
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
          onJoinQuiz={(code) => {
            const quiz = quizzes.find((q) => q.code === code);
            if (quiz) { setCurrentQuiz(quiz); setPage("lobby"); }
          }}
          onSelfStudy={() => setPage("self-study")}
          onTextbook={() => setPage("textbook")}
          onBack={() => setPage("home")}
          onHome={() => setPage("home")}
          onViewProgress={() => setPage("student-progress")}
          onLeaderboard={() => setPage("leaderboard")}
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
          onQuit={() => { setGameState(null); setPage(role === "teacher" ? "teacher-home" : "student-home"); }}
          onHome={() => { setGameState(null); setPage("home"); }}
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

// ─── Home Page ───────────────────────────────────────────────────
function LoadingOverlay({ mode, onCancel }) {
  const [msgIndex, setMsgIndex] = useState(0);
  const textbookMessages = [
    "📚 Inhoudsopgave van je boek opzoeken...",
    "🔍 Echte toetsvragen zoeken op het internet...",
    "🧠 Dit duurt even — echte vragen zijn het waard!",
    "⏳ Nog even geduld, we willen dat de vragen écht kloppen...",
    "📝 Vragen samenstellen uit echte bronnen...",
    "✨ Bijna klaar! Kwaliteit kost een paar seconden extra...",
  ];
  const selfMessages = [
    "🧠 De AI denkt na over jouw onderwerp...",
    "📝 Vragen opstellen op het juiste niveau...",
    "✅ Elk antwoord wordt gecontroleerd op juistheid...",
    "🎯 Foute antwoorden worden bewust slim gemaakt...",
    "✨ Bijna klaar — goede vragen maken kost even tijd!",
  ];
  const messages = mode === "textbook" ? textbookMessages : selfMessages;

  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex(prev => (prev + 1) % messages.length);
    }, mode === "textbook" ? 4000 : 5000);
    return () => clearInterval(interval);
  }, [mode, messages.length]);

  return (
    <div style={{ position: "fixed", inset: 0, background: "linear-gradient(135deg, #1a1a2e, #16213e)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", zIndex: 200 }}>
      <img src="/logo.jpg" alt="studiebol" style={{ width: "80%", maxWidth: 300, marginBottom: 24, borderRadius: 20, animation: "pulse 2s ease infinite" }} />
      <h2 style={{ fontFamily: "'Fredoka', sans-serif", color: "#fff", fontSize: 22, marginBottom: 12 }}>{mode === "textbook" ? "Echte vragen zoeken..." : "Vragen op maat maken..."}</h2>
      <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
        {[0,1,2,3,4].map(i => (
          <div key={i} style={{ width: 12, height: 12, borderRadius: 6, background: "#00e676", animation: `loadDot 1.2s ease ${i * 0.15}s infinite` }} />
        ))}
      </div>
      <p style={{ color: "#69f0ae", fontSize: 14, fontFamily: "'Nunito', sans-serif", textAlign: "center", padding: "0 20px", lineHeight: 1.5, fontWeight: 700, minHeight: 42, animation: "fadeIn 0.5s ease" }} key={msgIndex}>{messages[msgIndex]}</p>
      <p style={{ color: "#556677", fontSize: 11, fontFamily: "'Nunito', sans-serif", textAlign: "center", marginTop: 8, padding: "0 20px" }}>
        {mode === "textbook" ? "Echte vragen zoeken kost ~20 seconden — maar dan heb je ook wat!" : "⏱️ Duurt ongeveer 20-30 seconden — kwaliteit kost even tijd!"}
      </p>
      {onCancel && (
        <button onClick={onCancel} style={{ marginTop: 24, padding: "10px 24px", borderRadius: 12, border: "1px solid #2a3f5f", background: "transparent", color: "#556677", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, cursor: "pointer" }}>
          Annuleren
        </button>
      )}
      <style>{`
        @keyframes loadDot {
          0%, 80%, 100% { transform: scale(0.5); opacity: 0.3; }
          40% { transform: scale(1.2); opacity: 1; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function HomePage({ onSelectRole, onBack, userName, setUserName, setUserLevel }) {
  const [name, setName] = useState(userName);
  const [shake, setShake] = useState(false);
  const [step, setStep] = useState("role");
  const [pendingRole, setPendingRole] = useState(null);
  const [level, setLevel] = useState("");

  const roleLabels = { leerling: "leerling", student: "student", teacher: "leerkracht" };
  const levelOptions = { leerling: [1,2,3,4,5,6,7,8], student: [1,2,3,4], teacher: [] };

  useEffect(() => {
    try {
      const saved = localStorage.getItem("ls_user");
      if (saved) {
        const d = JSON.parse(saved);
        if (d.name) setName(d.name);
        if (d.level) setLevel(d.level);
      }
    } catch {}
  }, []);

  const handleRoleClick = (role) => {
    setPendingRole(role);
    setLevel("");
    setStep("name");
  };

  const handleConfirm = () => {
    if (!name.trim()) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }
    setUserName(name.trim());
    setUserLevel(level);
    try { localStorage.setItem("ls_user", JSON.stringify({ name: name.trim(), level, role: pendingRole })); } catch {}
    onSelectRole(pendingRole);
  };

  return (
    <div style={styles.page}>
      <div style={styles.heroSection}>

        {/* Slime banner */}
        <div style={{ position: "relative", marginBottom: 18, textAlign: "center" }}>
          <div style={{
            fontFamily: "'Fredoka', sans-serif",
            fontSize: 21,
            fontWeight: 700,
            color: "#00d4ff",
            letterSpacing: 0.5,
            animation: "slimeWave 3.5s ease-in-out infinite",
            display: "inline-block",
            textShadow: "0 0 18px rgba(0,212,255,0.7), 0 0 40px rgba(0,180,255,0.4)",
          }}>
            Elke studiebol slaagt
          </div>
          {/* drip drops */}
          {["25%","42%","60%","77%"].map((left, i) => (
            <div key={i} style={{
              position: "absolute",
              bottom: -4,
              left,
              width: 6,
              height: 0,
              background: "radial-gradient(ellipse at top, #00d4ff, #0066aa)",
              borderRadius: "0 0 50% 50%",
              animation: `slimeDrip ${2.2 + i * 0.4}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }} />
          ))}
        </div>

        <div style={{
          position: "relative",
          width: "90%",
          maxWidth: 360,
          marginBottom: 24,
        }}>
          <div style={{
            position: "absolute",
            inset: -24,
            background: "radial-gradient(ellipse at center, rgba(30,100,200,0.4) 0%, transparent 70%)",
            borderRadius: 50,
            zIndex: 0,
            pointerEvents: "none",
          }} />
          <video
            src="/intro.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              borderRadius: 18,
              boxShadow: "0 6px 32px rgba(15,70,180,0.55)",
              display: "block",
              position: "relative",
              zIndex: 1,
            }}
          />
        </div>

        <p style={styles.subtitle}>Jouw slimme studiebuddy!</p>
        <p style={{ fontFamily: "'Nunito', sans-serif", color: "#556677", fontSize: 11, marginTop: -24, marginBottom: 32, textAlign: "center" }}>
          © Smulsoft &nbsp;·&nbsp; <a href="/privacy.html" style={{ color: "#556677" }}>Privacybeleid</a>
        </p>

        {step === "role" && (
          <div style={{ display: "flex", gap: 10, width: "100%", maxWidth: 360 }}>
            {[
              { role: "leerling", label: "leerling", sub: "groep 1 t/m 8" },
              { role: "student", label: "student", sub: "klas 1 t/m 4" },
              { role: "teacher", label: "leerkracht", sub: "" },
            ].map(({ role, label, sub }) => (
              <button key={role} onClick={() => handleRoleClick(role)} style={{
                flex: 1, border: "none", padding: 0, cursor: "pointer",
                borderRadius: 18, overflow: "hidden",
                boxShadow: "0 6px 24px rgba(0,0,0,0.5)",
                background: "#0d2145", position: "relative",
              }}>
                <img src="/bol.jpg" alt={label} style={{
                  width: "100%", height: 140, objectFit: "cover",
                  objectPosition: "center center", display: "block",
                }} />
                <div style={{
                  background: "linear-gradient(to bottom, rgba(13,33,69,0) 0%, rgba(13,33,69,0.95) 100%)",
                  padding: "10px 6px 12px",
                  display: "flex", flexDirection: "column", alignItems: "center", gap: 2,
                }}>
                  <span style={{
                    fontFamily: "'Fredoka', sans-serif", fontWeight: 700,
                    fontSize: 15, color: "#ffffff", letterSpacing: 0.3,
                  }}>{label}</span>
                  <span style={{
                    fontFamily: "'Nunito', sans-serif", fontSize: 10,
                    color: "rgba(255,255,255,0.7)", letterSpacing: 0.2,
                  }}>{sub || "\u00A0"}</span>
                </div>
              </button>
            ))}
          </div>
        )}

        {step === "name" && (
          <div style={{ width: "100%", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{
              background: "rgba(255,255,255,0.06)", borderRadius: 16,
              padding: "10px 14px", display: "flex", alignItems: "center", gap: 10,
            }}>
              <img src="/bol.jpg" alt="" style={{ width: 44, height: 44, borderRadius: 10, objectFit: "cover" }} />
              <div>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 13, color: "rgba(255,255,255,0.5)" }}>Je koos:</div>
                <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 17, fontWeight: 700, color: "#fff" }}>{roleLabels[pendingRole]}</div>
              </div>
              <button onClick={() => setStep("role")} style={{
                marginLeft: "auto", background: "none", border: "none",
                color: "rgba(255,255,255,0.4)", fontSize: 13, cursor: "pointer",
                fontFamily: "'Nunito', sans-serif",
              }}>← terug</button>
            </div>

            <div style={{ ...styles.nameInput, animation: shake ? "shake 0.5s ease" : "none" }}>
              <label style={styles.inputLabel}>Wat is je naam?</label>
              <input
                style={styles.textInput}
                value={name}
                autoFocus
                onChange={(e) => setName(e.target.value)}
                placeholder="Vul je naam in..."
                onKeyDown={(e) => e.key === "Enter" && handleConfirm()}
              />
            </div>

            {levelOptions[pendingRole]?.length > 0 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <label style={{ ...styles.inputLabel, marginBottom: 0 }}>
                    {pendingRole === "leerling" ? "Welke groep zit je in?" : "Welke klas zit je in?"}
                  </label>
                  <button onClick={() => setLevel("")} style={{
                    background: "none", border: "none", color: "rgba(255,255,255,0.35)",
                    fontSize: 12, cursor: "pointer", fontFamily: "'Nunito', sans-serif",
                  }}>sla over</button>
                </div>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {levelOptions[pendingRole].map(n => (
                    <button key={n} onClick={() => setLevel(String(n))} style={{
                      width: 38, height: 38, borderRadius: 10,
                      border: level === String(n) ? "2px solid #00d4ff" : "1px solid rgba(255,255,255,0.15)",
                      background: level === String(n) ? "rgba(0,212,255,0.15)" : "rgba(255,255,255,0.05)",
                      color: level === String(n) ? "#00d4ff" : "rgba(255,255,255,0.6)",
                      fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700,
                      cursor: "pointer",
                    }}>{n}</button>
                  ))}
                </div>
              </div>
            )}

            <button onClick={handleConfirm} style={{
              width: "100%", padding: "15px", borderRadius: 16, border: "none",
              background: "linear-gradient(135deg, #1565c0, #0d47a1)",
              color: "#fff", fontFamily: "'Fredoka', sans-serif",
              fontSize: 17, fontWeight: 700, cursor: "pointer",
              boxShadow: "0 4px 20px rgba(13,71,161,0.5)",
            }}>
              Doorgaan als gast
            </button>

            <button disabled style={{
              width: "100%", padding: "15px", borderRadius: 16,
              border: "1px solid rgba(255,255,255,0.1)",
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.3)", fontFamily: "'Fredoka', sans-serif",
              fontSize: 17, fontWeight: 700, cursor: "not-allowed",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}>
              Inloggen / account
              <span style={{ fontSize: 11, fontFamily: "'Nunito', sans-serif", fontWeight: 400, opacity: 0.7 }}>binnenkort</span>
            </button>
          </div>
        )}

        {step === "role" && <button
          style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: 10,
            width: "100%", maxWidth: 360, background: "#25D366", color: "#fff", border: "none",
            borderRadius: 16, padding: "16px 20px", fontFamily: "'Fredoka', sans-serif",
            fontSize: 16, fontWeight: 600, cursor: "pointer", marginTop: 24,
            boxShadow: "0 4px 16px rgba(37,211,102,0.3)",
          }}
          onClick={() => {
            const text = `Ken je studiebol al?\n\nSamen slim worden met leuke quizzen! Oefenen voor school was nog nooit zo leuk.\n\n👉 Open de app: https://leerschoolnew.vercel.app`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank");
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="white" style={{ flexShrink: 0 }}>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Deel met je klas via WhatsApp
        </button>}
      </div>

      <style>{`
        input, select, textarea { color: #ffffff !important; -webkit-text-fill-color: #ffffff !important; }
        input::placeholder { color: #667788 !important; -webkit-text-fill-color: #667788 !important; }
        select option { background: #1e2d45; color: #ffffff; }
        @keyframes correctGlow { 0% { box-shadow: 0 0 0 0 rgba(40,167,69,0.4); } 70% { box-shadow: 0 0 0 15px rgba(40,167,69,0); } 100% { box-shadow: 0 0 0 0 rgba(40,167,69,0); } }
        @keyframes wrongShake { 0%,100% { transform: translateX(0); } 15%,45%,75% { transform: translateX(-6px); } 30%,60%,90% { transform: translateX(6px); } }
        @keyframes timerPulse { 0%,100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes scoreFloat { 0% { opacity:1; transform:translateY(0) scale(1); } 100% { opacity:0; transform:translateY(-40px) scale(1.5); } }
        @keyframes popIn { 0% { transform:scale(0.5); opacity:0; } 70% { transform:scale(1.1); } 100% { transform:scale(1); opacity:1; } }
        @keyframes confetti { 0% { transform:translateY(0) rotate(0deg); opacity:1; } 100% { transform:translateY(-200px) rotate(720deg); opacity:0; } }
        @keyframes slideIn { from { opacity:0; transform:translateX(-20px); } to { opacity:1; transform:translateX(0); } }
        @keyframes fadeBg { from { opacity:0; } to { opacity:1; } }
        @keyframes slimeWave {
          0%, 100% { transform: scaleX(1) scaleY(1) translateY(0px); filter: drop-shadow(0 6px 4px rgba(0,212,255,0.35)); }
          25% { transform: scaleX(1.04) scaleY(0.96) translateY(-2px); filter: drop-shadow(0 10px 6px rgba(0,212,255,0.5)); }
          50% { transform: scaleX(0.97) scaleY(1.05) translateY(3px); filter: drop-shadow(0 3px 8px rgba(0,212,255,0.6)); }
          75% { transform: scaleX(1.03) scaleY(0.98) translateY(-1px); filter: drop-shadow(0 8px 5px rgba(0,212,255,0.4)); }
        }
        @keyframes slimeDrip {
          0%, 80%, 100% { height: 0px; opacity: 0; }
          40%, 60% { height: 14px; opacity: 0.7; }
        }
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
function TeacherHome({ userName, quizzes, onCreateQuiz, onViewProgress, onBack, onHome, onStartQuiz }) {
  return (
    <div style={styles.page}>
      <Header title={`Hoi ${userName}! 👋`} subtitle="Leerkracht Dashboard" onBack={onBack} onHome={onHome} />

      <div style={styles.content}>
        <div style={styles.actionRow}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00e676)" }} onClick={onCreateQuiz}>
            <span style={{ fontSize: 28 }}>📝</span>
            <span style={{ fontWeight: 700 }}>Nieuwe Quiz</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00a844)" }} onClick={onViewProgress}>
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
                        const text = `studiebol Quiz!\n\n📚 ${subj?.label}\n🎯 Code: ${q.code}\n⏰ ${q.deadline ? `Deadline: ${formatDate(q.deadline)}` : "Geen deadline"}\n\n👉 Open de app: https://leerschoolnew.vercel.app`;
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
// ─── QuizPreview ─────────────────────────────────────────────────
function QuizPreview({ quizConfig, onConfirm, onBack, onHome }) {
  const [questions, setQuestions] = useState(() =>
    quizConfig.preGeneratedQuestions.map((q, i) => ({ ...q, id: i }))
  );
  const [editingId, setEditingId] = useState(null);
  const [regenLoading, setRegenLoading] = useState(null);

  const updateQuestion = (id, field, value) => {
    setQuestions((prev) => prev.map((q) => q.id === id ? { ...q, [field]: value } : q));
  };

  const updateOption = (id, optIdx, value) => {
    setQuestions((prev) => prev.map((q) => {
      if (q.id !== id) return q;
      const newOpts = [...q.options];
      newOpts[optIdx] = value;
      return { ...q, options: newOpts };
    }));
  };

  const deleteQuestion = (id) => {
    setQuestions((prev) => prev.filter((q) => q.id !== id));
    if (editingId === id) setEditingId(null);
  };

  const regenQuestion = async (id) => {
    setRegenLoading(id);
    const fresh = await fetchAIQuestions(quizConfig.subject, quizConfig.level, 1, null, null, null);
    setRegenLoading(null);
    if (fresh.length > 0) {
      setQuestions((prev) => prev.map((q) => q.id === id ? { ...fresh[0], id } : q));
    }
  };

  const subj = SUBJECTS.find((s) => s.id === quizConfig.subject);
  const levelLabel = LEVELS.find((l) => l.id === quizConfig.level)?.label || quizConfig.level;

  return (
    <div style={styles.page}>
      <Header title="Vragen bekijken" subtitle={`${questions.length} vragen — ${subj?.icon} ${subj?.label} · ${levelLabel}`} onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        <div style={{ marginBottom: 12, padding: "10px 14px", background: "#0a1f35", borderRadius: 10, border: "1px solid #1e3a5a", fontSize: 13, color: "#8eaadb" }}>
          ✏️ Tik op een vraag om hem te bewerken. Verwijder of regenereer vragen waar nodig.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {questions.map((q, idx) => {
            const isEditing = editingId === q.id;
            const isRegen = regenLoading === q.id;
            return (
              <div key={q.id} style={{
                background: isEditing ? "#0d2a45" : "#152032",
                border: `1px solid ${isEditing ? "#00c853" : "#1e3a5a"}`,
                borderRadius: 14,
                padding: "14px 16px",
                position: "relative",
              }}>
                {/* Header rij */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
                  <span style={{ fontFamily: "Fredoka", fontWeight: 700, fontSize: 14, color: "#00c853", minWidth: 32 }}>
                    #{idx + 1}
                  </span>
                  <div style={{ flex: 1 }} />
                  <button
                    onClick={() => regenQuestion(q.id)}
                    disabled={isRegen}
                    title="Nieuwe vraag genereren"
                    style={{ background: "none", border: "1px solid #2a5080", borderRadius: 8, padding: "4px 10px", cursor: "pointer", color: "#8eaadb", fontSize: 12, fontFamily: "'Nunito', sans-serif" }}
                  >
                    {isRegen ? "⏳" : "🔄 Nieuwe vraag"}
                  </button>
                  <button
                    onClick={() => setEditingId(isEditing ? null : q.id)}
                    style={{ background: isEditing ? "#00c85320" : "none", border: `1px solid ${isEditing ? "#00c853" : "#2a5080"}`, borderRadius: 8, padding: "4px 10px", cursor: "pointer", color: isEditing ? "#00c853" : "#8eaadb", fontSize: 12, fontFamily: "'Nunito', sans-serif" }}
                  >
                    {isEditing ? "✅ Klaar" : "✏️ Bewerken"}
                  </button>
                  <button
                    onClick={() => deleteQuestion(q.id)}
                    title="Vraag verwijderen"
                    style={{ background: "none", border: "1px solid #5a1a1a", borderRadius: 8, padding: "4px 10px", cursor: "pointer", color: "#ff5252", fontSize: 12, fontFamily: "'Nunito', sans-serif" }}
                  >
                    🗑️
                  </button>
                </div>

                {/* Vraagtekst */}
                {isEditing ? (
                  <textarea
                    value={q.q}
                    onChange={(e) => updateQuestion(q.id, "q", e.target.value)}
                    style={{ ...styles.textInput, width: "100%", minHeight: 70, resize: "vertical", fontSize: 14, marginBottom: 10, boxSizing: "border-box" }}
                  />
                ) : (
                  <p style={{ color: "#e0e6f0", fontSize: 15, fontWeight: 700, margin: "0 0 10px", lineHeight: 1.4 }}>{q.q}</p>
                )}

                {/* Antwoordopties */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {(q.options || []).map((opt, oi) => {
                    const isCorrect = q.answer === oi;
                    return (
                      <div key={oi} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <button
                          onClick={() => isEditing && updateQuestion(q.id, "answer", oi)}
                          style={{
                            width: 24, height: 24, borderRadius: "50%", border: `2px solid ${isCorrect ? "#00c853" : "#2a5080"}`,
                            background: isCorrect ? "#00c853" : "transparent", cursor: isEditing ? "pointer" : "default",
                            flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center",
                          }}
                          title={isEditing ? "Markeer als correct antwoord" : ""}
                        >
                          {isCorrect && <span style={{ color: "#fff", fontSize: 11, fontWeight: 900 }}>✓</span>}
                        </button>
                        {isEditing ? (
                          <input
                            value={opt}
                            onChange={(e) => updateOption(q.id, oi, e.target.value)}
                            style={{ ...styles.textInput, flex: 1, fontSize: 13, padding: "6px 10px" }}
                          />
                        ) : (
                          <span style={{ color: isCorrect ? "#00e676" : "#8eaadb", fontSize: 13, fontWeight: isCorrect ? 700 : 400 }}>
                            {["A","B","C","D"][oi]}. {opt}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {isEditing && (
                  <p style={{ fontSize: 11, color: "#556677", marginTop: 8 }}>
                    Klik op het bolletje naast een antwoord om het als correct te markeren.
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {questions.length === 0 && (
          <div style={{ textAlign: "center", padding: 32, color: "#556677" }}>
            Geen vragen meer. Ga terug en maak een nieuwe quiz.
          </div>
        )}

        <div style={{ ...styles.navRow, marginTop: 20 }}>
          <button style={styles.backBtn} onClick={onBack}>← Terug</button>
          <div style={{ flex: 1 }} />
          <button
            style={{ ...styles.nextBtn, opacity: questions.length > 0 ? 1 : 0.4 }}
            disabled={questions.length === 0}
            onClick={() => onConfirm(questions.map(({ id, ...rest }) => rest))}
          >
            🚀 Quiz starten ({questions.length} vragen)
          </button>
        </div>
      </div>
    </div>
  );
}

function CreateQuiz({ onSave, onBack, onHome }) {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [level, setLevel] = useState("");
  const [groepSelect, setGroepSelect] = useState("");
  const [klasSelect, setKlasSelect] = useState("");
  const [deadline, setDeadline] = useState("");
  const [questionCount, setQuestionCount] = useState(8);
  const [timePerQuestion, setTimePerQuestion] = useState(20);
  const [resultMethod, setResultMethod] = useState("whatsapp");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [step, setStep] = useState(1);

  const levelLabel = groepSelect ? `Groep ${groepSelect.replace("g","")}` : klasSelect ? `Klas ${klasSelect.replace("k","")}` : "";

  const canNext = () => {
    if (step === 1) return subject !== "";
    if (step === 2) return level !== "";
    if (step === 3) return resultMethod === "whatsapp" || (resultMethod === "email" && teacherEmail.includes("@"));
    return true;
  };

  const handleSave = () => {
    onSave({ title: title || SUBJECTS.find((s) => s.id === subject)?.label + " Quiz", subject, level, topic: topic || null, deadline: deadline || null, questionCount, timePerQuestion, resultMethod, teacherEmail: resultMethod === "email" ? teacherEmail : null });
  };

  return (
    <div style={styles.page}>
      <Header title="Nieuwe Quiz" subtitle={`Stap ${step} van 3`} onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${(step / 3) * 100}%` }} />
        </div>

        {(subject || levelLabel) && (
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            {subject && (
              <span style={{ fontSize: 12, background: "#1e2d45", color: "#8eaadb", padding: "4px 10px", borderRadius: 8, border: "1px solid #2a3f5f" }}>
                📚 {SUBJECTS.find(s => s.id === subject)?.label}
              </span>
            )}
            {levelLabel && (
              <span style={{ fontSize: 12, background: "#1e3a2a", color: "#00e676", padding: "4px 10px", borderRadius: 8, border: "1px solid #00c85340" }}>
                🎒 {levelLabel}
              </span>
            )}
          </div>
        )}

        {step === 1 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Kies een vak</h3>
            <div style={styles.subjectGrid}>
              {(level ? (SUBJECT_FOR_LEVEL[level] || []).map(id => SUBJECTS.find(s => s.id === id)).filter(Boolean) : SUBJECTS).map((s) => (
                <button
                  key={s.id}
                  style={{
                    ...styles.subjectCard,
                    borderColor: subject === s.id ? s.color : "transparent",
                    background: subject === s.id ? `${s.color}15` : "#fff",
                    boxShadow: subject === s.id ? `0 0 0 3px ${s.color}40` : "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                  onClick={() => { setSubject(s.id); setTopic(s.label); }}
                >
                  <span style={{ fontSize: 32 }}>{s.icon}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: "#e0e6f0" }}>{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Kies het niveau</h3>
            <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <label style={{ ...styles.settingLabel, marginBottom: 6 }}>🎒 Basisschool</label>
                <select
                  style={{ ...styles.textInput, fontSize: 14, cursor: "pointer" }}
                  value={groepSelect}
                  onChange={(e) => {
                    const v = e.target.value;
                    setGroepSelect(v);
                    setKlasSelect("");
                    const bucket = {"g1":"groep12","g2":"groep12","g3":"groep3","g4":"groep3","g5":"groep5","g6":"groep5","g7":"groep7","g8":"groep7"}[v];
                    if (bucket) { setLevel(bucket); if (subject && !(SUBJECT_FOR_LEVEL[bucket] || []).includes(subject)) setSubject(""); }
                  }}
                >
                  <option value="">-- Groep --</option>
                  <option value="g1">Groep 1</option>
                  <option value="g2">Groep 2</option>
                  <option value="g3">Groep 3</option>
                  <option value="g4">Groep 4</option>
                  <option value="g5">Groep 5</option>
                  <option value="g6">Groep 6</option>
                  <option value="g7">Groep 7</option>
                  <option value="g8">Groep 8</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ ...styles.settingLabel, marginBottom: 6 }}>🎓 Voortgezet onderwijs</label>
                <select
                  style={{ ...styles.textInput, fontSize: 14, cursor: "pointer" }}
                  value={klasSelect}
                  onChange={(e) => {
                    const v = e.target.value;
                    setKlasSelect(v);
                    setGroepSelect("");
                    const bucket = {"k1":"klas1","k2":"klas1","k3":"klas3","k4":"klas3"}[v];
                    if (bucket) setLevel(bucket);
                  }}
                >
                  <option value="">-- Klas --</option>
                  <option value="k1">Klas 1</option>
                  <option value="k2">Klas 2</option>
                  <option value="k3">Klas 3</option>
                  <option value="k4">Klas 4</option>
                </select>
              </div>
            </div>
            {level && (
              <div style={{ fontSize: 13, color: "#00e676", fontWeight: 700, marginBottom: 12, padding: "8px 12px", background: "#0a2a18", borderRadius: 10, border: "1px solid #00c85340" }}>
                ✅ Niveau gekozen: <span style={{ color: "#fff" }}>{levelLabel}</span>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div style={styles.stepContent}>
            <h3 style={styles.stepTitle}>Instellingen</h3>
            <div style={styles.settingsGroup}>
              <label style={styles.settingLabel}>Omschrijving / onderwerp</label>
              <input style={styles.textInput} value={topic} onChange={(e) => setTopic(e.target.value)} placeholder="Bijv. Werkwoorden, Breuken, WOII..." />

              <label style={styles.settingLabel}>Titel (optioneel)</label>
              <input style={styles.textInput} value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Bijv. Week 12 - Breuken" />

              <label style={styles.settingLabel}>Deadline</label>
              <input style={styles.textInput} type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />

              <label style={styles.settingLabel}>Aantal vragen: {questionCount}</label>
              <input type="range" min={3} max={15} value={questionCount} onChange={(e) => setQuestionCount(+e.target.value)} style={styles.slider} />

              <label style={styles.settingLabel}>Tijd per vraag: {timePerQuestion}s</label>
              <input type="range" min={10} max={60} step={5} value={timePerQuestion} onChange={(e) => setTimePerQuestion(+e.target.value)} style={styles.slider} />

              <label style={styles.settingLabel}>📬 Hoe wil je resultaten ontvangen?</label>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <button onClick={() => setResultMethod("whatsapp")} style={{
                  flex: 1, padding: "14px 10px", borderRadius: 12, border: resultMethod === "whatsapp" ? "2px solid #25D366" : "2px solid #2a3f5f",
                  background: resultMethod === "whatsapp" ? "#0a2a1a" : "#1e2d45", cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: "#e0e6f0", textAlign: "center",
                }}>
                  💬 WhatsApp
                </button>
                <button onClick={() => setResultMethod("email")} style={{
                  flex: 1, padding: "14px 10px", borderRadius: 12, border: resultMethod === "email" ? "2px solid #00c853" : "2px solid #2a3f5f",
                  background: resultMethod === "email" ? "#0a2a1a" : "#1e2d45", cursor: "pointer",
                  fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: "#e0e6f0", textAlign: "center",
                }}>
                  📧 E-mail
                </button>
              </div>
              {resultMethod === "email" && (
                <div style={{ marginTop: 10 }}>
                  <label style={styles.settingLabel}>Je e-mailadres</label>
                  <input style={styles.textInput} type="email" value={teacherEmail} onChange={(e) => setTeacherEmail(e.target.value)} placeholder="bijv. docent@school.nl" />
                </div>
              )}
              <p style={{ fontSize: 11, color: "#667788", marginTop: 8 }}>
                {resultMethod === "whatsapp" ? "Leerlingen sturen hun score naar je via WhatsApp na de quiz." : "Leerlingen sturen hun score naar je e-mail na de quiz."}
              </p>
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
function Lobby({ quiz, players, isHost, onStart, onBack, onHome }) {
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
            const text = `Doe mee met mijn studiebol quiz!\n\n📚 Vak: ${subj?.label}\n🎯 Code: ${quiz?.code}\n\n👉 Open de app: https://leerschoolnew.vercel.app`;
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

        {quiz?.preGeneratedQuestions?.length > 0 && (
          <div style={{ margin: "12px 0", padding: 10, background: "#0a2a1a", borderRadius: 10, borderLeft: "3px solid #00c853", textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "#69f0ae" }}>✅ {quiz.preGeneratedQuestions.length} vragen klaar — iedereen krijgt dezelfde vragen!</div>
          </div>
        )}

        <div style={styles.playersSection}>
          <h4 style={{ fontFamily: "Fredoka", color: "#8899aa", fontSize: 13, letterSpacing: 1 }}>SPELERS</h4>
          <div style={styles.playersList}>
            {players.map((p, i) => (
              <span key={i} style={{ ...styles.playerChip, background: i === 0 ? "#00c853" : "#f0f0f0", color: i === 0 ? "#fff" : "#2d3436" }}>
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
        <div style={{ display: "flex", gap: 10 }}>
          <button style={styles.linkBtn} onClick={onBack}>← Terug</button>
          {onHome && <button style={styles.linkBtn} onClick={onHome}>🏠 Home</button>}
        </div>
      </div>
    </div>
  );
}

// ─── Student Home ────────────────────────────────────────────────
function StudentHome({ userName, quizzes, progress, onJoinQuiz, onSelfStudy, onBack, onHome, onViewProgress, onLeaderboard, onTextbook }) {
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
    if (quiz.deadline && new Date(quiz.deadline) < new Date()) {
      setError(`Deze quiz is verlopen op ${new Date(quiz.deadline).toLocaleDateString("nl-NL")} 📅`);
      return;
    }
    setError("");
    onJoinQuiz(code.trim().toUpperCase());
  };

  const recentProgress = progress.slice(-5).reverse();

  return (
    <div style={styles.page}>
      <Header title={`Hey ${userName}! 🌟`} subtitle="Klaar om te leren?" onBack={onBack} onHome={onHome} />

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

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 24 }}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00a844)" }} onClick={() => { SoundEngine.play("click"); onSelfStudy(); }}>
            <span style={{ fontSize: 24 }}>📖</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Zelf oefenen</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #FF6B35, #e55039)" }} onClick={() => { SoundEngine.play("click"); onTextbook(); }}>
            <span style={{ fontSize: 24 }}>📕</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Uit je boek</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00b84d, #36537e)" }} onClick={onViewProgress}>
            <span style={{ fontSize: 24 }}>📊</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Voortgang</span>
          </button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #69f0ae, #00c853)" }} onClick={onLeaderboard}>
            <span style={{ fontSize: 24 }}>🏆</span>
            <span style={{ fontWeight: 700, fontSize: 13 }}>Scorebord</span>
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
                    <div style={{ fontWeight: 700, color: "#e0e6f0" }}>{q.title}</div>
                    <div style={{ fontSize: 12, color: "#8899aa" }}>
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
                    <span style={{ fontSize: 12, color: "#8899aa", marginLeft: 8 }}>{LEVELS.find((l) => l.id === r.level)?.label}</span>
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
function SelfStudy({ onStart, onBack, onHome, userLevel, userRole }) {
  const groepBuckets = {"g1":"groep12","g2":"groep12","g3":"groep3","g4":"groep3","g5":"groep5","g6":"groep5","g7":"groep7","g8":"groep7"};
  const klasBuckets  = {"k1":"klas1","k2":"klas1","k3":"klas3","k4":"klas3"};
  const initGroep = userRole === "leerling" && userLevel ? `g${userLevel}` : "";
  const initKlas  = userRole === "student"  && userLevel ? `k${userLevel}` : "";
  const initLevel = groepBuckets[initGroep] || klasBuckets[initKlas] || "";

  const [subject, setSubject] = useState("");
  const [level, setLevel] = useState(initLevel);
  const [groepSelect, setGroepSelect] = useState(initGroep);
  const [klasSelect, setKlasSelect] = useState(initKlas);
  const [topic, setTopic] = useState("");
  const [eigenMode, setEigenMode] = useState(false);
  const [showHoeWerkt, setShowHoeWerkt] = useState(false);
  const [questionCount, setQuestionCount] = useState(10);
  const [timePerQuestion, setTimePerQuestion] = useState(0);
  const [useAI, setUseAI] = useState(true);

  return (
    <div style={styles.page}>
      <Header title="Zelf oefenen 📖" subtitle="Kies je vak en niveau" onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {!initLevel && (
          <>
            <h3 style={styles.sectionTitle}>Welk niveau?</h3>
            <div style={{ display: "flex", gap: 12, marginBottom: 8 }}>
              <div style={{ flex: 1 }}>
                <label style={{ ...styles.settingLabel, marginBottom: 6 }}>🎒 Basisschool</label>
                <select
                  style={{ ...styles.textInput, fontSize: 14, cursor: "pointer" }}
                  value={groepSelect}
                  onChange={(e) => {
                    const v = e.target.value;
                    setGroepSelect(v);
                    setKlasSelect("");
                    const bucket = {"g1":"groep12","g2":"groep12","g3":"groep3","g4":"groep3","g5":"groep5","g6":"groep5","g7":"groep7","g8":"groep7"}[v];
                    if (bucket) { setLevel(bucket); if (subject && !(SUBJECT_FOR_LEVEL[bucket] || []).includes(subject)) setSubject(""); }
                  }}
                >
                  <option value="">-- Groep --</option>
                  <option value="g1">Groep 1</option>
                  <option value="g2">Groep 2</option>
                  <option value="g3">Groep 3</option>
                  <option value="g4">Groep 4</option>
                  <option value="g5">Groep 5</option>
                  <option value="g6">Groep 6</option>
                  <option value="g7">Groep 7</option>
                  <option value="g8">Groep 8</option>
                </select>
              </div>
              <div style={{ flex: 1 }}>
                <label style={{ ...styles.settingLabel, marginBottom: 6 }}>🎓 Voortgezet onderwijs</label>
                <select
                  style={{ ...styles.textInput, fontSize: 14, cursor: "pointer" }}
                  value={klasSelect}
                  onChange={(e) => {
                    const v = e.target.value;
                    setKlasSelect(v);
                    setGroepSelect("");
                    const bucket = {"k1":"klas1","k2":"klas1","k3":"klas3","k4":"klas3"}[v];
                    if (bucket) setLevel(bucket);
                  }}
                >
                  <option value="">-- Klas --</option>
                  <option value="k1">Klas 1</option>
                  <option value="k2">Klas 2</option>
                  <option value="k3">Klas 3</option>
                  <option value="k4">Klas 4</option>
                </select>
              </div>
            </div>
            {level && (
              <div style={{ fontSize: 12, color: "#00e676", fontWeight: 600, marginBottom: 12 }}>
                ✅ Niveau gekozen!
              </div>
            )}
          </>
        )}

        {/* ── Eigen onderwerp — featured bovenaan ───────── */}
        <button
          onClick={() => { SoundEngine.play("click"); const next = !eigenMode; setEigenMode(next); setSubject(""); setTopic(""); }}
          style={{
            width: "100%", marginBottom: 8, padding: "14px 18px",
            background: eigenMode ? "linear-gradient(135deg, #1e3a2a, #1a3325)" : "linear-gradient(135deg, #1a2a3a, #1e3050)",
            border: `2px solid ${eigenMode ? "#00c853" : "#3a5f8a"}`,
            borderRadius: 16, cursor: "pointer", display: "flex", alignItems: "center", gap: 12, textAlign: "left",
            boxShadow: eigenMode ? "0 0 0 3px #00c85330" : "0 2px 12px rgba(0,0,0,0.2)",
          }}
        >
          <span style={{ fontSize: 26 }}>🎯</span>
          <div style={{ flex: 1 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 16, fontWeight: 700 }}>
                Zelf een onderwerp kiezen
              </span>
              <span style={{ background: "#00c853", color: "#000", fontSize: 10, fontWeight: 800, padding: "2px 7px", borderRadius: 20 }}>AI</span>
            </div>
            <div style={{ color: "#7aaabb", fontSize: 12, marginTop: 3 }}>
              Elk onderwerp — ook voor MBO &amp; HBO
            </div>
          </div>
          <span style={{ fontSize: 18 }}>{eigenMode ? "✅" : "→"}</span>
        </button>

        {/* Hoe werkt dit? */}
        <button
          onClick={() => setShowHoeWerkt(v => !v)}
          style={{ background: "none", border: "none", color: "#5588aa", fontSize: 12, cursor: "pointer", padding: "2px 4px", marginBottom: 8, textAlign: "left" }}
        >
          {showHoeWerkt ? "▲" : "▼"} Hoe werkt dit?
        </button>
        {showHoeWerkt && (
          <div style={{ marginBottom: 12, padding: "12px 14px", background: "#111e2e", borderRadius: 12, border: "1px solid #2a3f5f", fontSize: 12, color: "#99bbcc", lineHeight: 1.7 }}>
            De AI maakt <strong style={{ color: "#fff" }}>vragen op maat</strong> over elk onderwerp dat je typt — van zout en fotosynthese tot bedrijfseconomie of JavaScript.<br />
            Handig voor basisschool en VO, maar ook voor <strong style={{ color: "#00c853" }}>MBO- en HBO-studenten</strong> die willen oefenen voor een tentamen of toets.
          </div>
        )}

        {eigenMode && level && (
          <div style={{ marginBottom: 16, padding: 16, background: "#1e2d45", borderRadius: 16, border: "2px solid #00c853" }}>
            <label style={{ ...styles.settingLabel, marginBottom: 8 }}>Waar wil je over leren?</label>
            <div style={{ color: "#556677", fontSize: 11, marginBottom: 8 }}>Basisschool &amp; VO</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 10 }}>
              {["Seksuele voorlichting", "Puberteit", "Roken & drugs", "EHBO & eerste hulp", "Klimaatverandering", "Pesten", "Gezonde voeding", "Media & internet"].map(s => (
                <button key={s} onClick={() => { SoundEngine.play("click"); setTopic(s); }}
                  style={{ padding: "4px 12px", background: topic === s ? "#00c853" : "#162a1e", border: `1px solid ${topic === s ? "#00c853" : "#2a4a3a"}`, borderRadius: 20, color: topic === s ? "#000" : "#69f0ae", fontSize: 12, cursor: "pointer", fontWeight: topic === s ? 700 : 400 }}>
                  {s}
                </button>
              ))}
            </div>
            <div style={{ color: "#556677", fontSize: 11, marginBottom: 8 }}>MBO &amp; HBO</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
              {["Bedrijfseconomie", "Boekhouden", "Anatomie", "Recht & wetgeving", "Marketing", "ICT & netwerken", "Statistiek", "Verpleegkunde"].map(s => (
                <button key={s} onClick={() => { SoundEngine.play("click"); setTopic(s); }}
                  style={{ padding: "4px 12px", background: topic === s ? "#1a73e8" : "#121e30", border: `1px solid ${topic === s ? "#1a73e8" : "#2a3f5f"}`, borderRadius: 20, color: topic === s ? "#fff" : "#7aaabb", fontSize: 12, cursor: "pointer", fontWeight: topic === s ? 700 : 400 }}>
                  {s}
                </button>
              ))}
            </div>
            <input
              style={{ ...styles.textInput, fontSize: 15 }}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Of typ zelf een onderwerp..."
              maxLength={80}
            />
            {topic && <div style={{ fontSize: 11, color: "#00e676", marginTop: 6, fontWeight: 600 }}>✨ Je krijgt vragen over: {topic}</div>}
          </div>
        )}

        {/* ── Standaard schoolvakken ───────────────────── */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "10px 0 10px" }}>
          <div style={{ flex: 1, height: 1, background: "#2a3f5f" }} />
          <span style={{ color: "#667788", fontSize: 12, whiteSpace: "nowrap" }}>of kies een standaard schoolvak</span>
          <div style={{ flex: 1, height: 1, background: "#2a3f5f" }} />
        </div>
        <div style={styles.subjectGrid}>
          {(level ? (SUBJECT_FOR_LEVEL[level] || []).map(id => SUBJECTS.find(s => s.id === id)).filter(Boolean) : SUBJECTS).map((s) => (
            <button
              key={s.id}
              style={{
                ...styles.subjectCard,
                borderColor: subject === s.id ? s.color : "transparent",
                background: subject === s.id ? `${s.color}15` : "#fff",
                boxShadow: subject === s.id ? `0 0 0 3px ${s.color}40` : "0 2px 8px rgba(0,0,0,0.06)",
              }}
              onClick={() => { setSubject(s.id); setEigenMode(false); setTopic(""); }}
            >
              <span style={{ fontSize: 28 }}>{s.icon}</span>
              <span style={{ fontWeight: 700, fontSize: 13 }}>{s.label}</span>
            </button>
          ))}
        </div>

        {((subject && level) || (eigenMode && level)) && (
          <>
            <div style={styles.settingsGroup}>
              <label style={styles.settingLabel}>Aantal vragen: {questionCount}</label>
              <input type="range" min={3} max={20} value={questionCount} onChange={(e) => setQuestionCount(+e.target.value)} style={styles.slider} />
              <label style={styles.settingLabel}>Tijd per vraag: {timePerQuestion === 0 ? "♾️ Geen limiet" : `${timePerQuestion}s`}</label>
              <input type="range" min={0} max={60} step={5} value={timePerQuestion} onChange={(e) => setTimePerQuestion(+e.target.value)} style={styles.slider} />
              {timePerQuestion === 0 && <div style={{ fontSize: 12, color: "#00e676", fontWeight: 600, marginTop: 4 }}>Sleep naar rechts voor een tijdslimiet</div>}
            </div>
            {!eigenMode && !topic && (
              <div style={{ fontSize: 12, color: "#aabbcc", background: "#1a2a3a", borderRadius: 10, padding: "8px 14px", marginBottom: 10 }}>
                ⚡ Geen onderwerp? Dan starten we <strong>direct</strong> met kant-en-klare vragen — geen wachttijd!
              </div>
            )}
            <button
              style={{ ...styles.startButton, opacity: eigenMode && !topic.trim() ? 0.45 : 1 }}
              disabled={eigenMode && !topic.trim()}
              onClick={() => { if (eigenMode && !topic.trim()) return; SoundEngine.play("click"); onStart({ subject: eigenMode ? "vrij" : subject, level, questionCount, timePerQuestion, useAI, topic: topic.trim() || null }); }}
            >
              🚀 Start met oefenen!
            </button>
          </>
        )}
      </div>
    </div>
  );
}

// ─── Textbook Quiz ───────────────────────────────────────────────
function TextbookQuiz({ onStart, onBack, onHome, userRole, userLevel }) {
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
    "Talent":        () => "/covers/talent.jpg",
    "Op Niveau":     () => "/covers/op-niveau.jpg",
    "Kern Nederlands":() => "/covers/kern-nederlands.png",
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

// ─── Play Quiz ───────────────────────────────────────────────────
function PlayQuiz({ gameState, setGameState, onFinish, onQuit, onHome }) {
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
  const nextStateRef = useRef(null);
  const timerRef = useRef(null);

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
    const ns = nextStateRef.current;
    if (!ns) return;
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
  }, [gameState.currentQ, gameState.timePerQuestion]);

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
        setTimeout(() => setShowWrongOverlay(true), 700);
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

  return (
    <div style={{ ...styles.page, background: `linear-gradient(135deg, ${subj?.color || "#00c853"}10, #0f1729)` }}>
      <div style={styles.quizHeader}>
        <button onClick={() => setShowQuitConfirm(true)} style={{ background: "rgba(0,0,0,0.06)", border: "none", borderRadius: 10, padding: "8px 14px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 13, color: "#8899aa" }}>
          ✕ Stop
        </button>
        <div style={styles.qCounter}>{gameState.currentQ + 1} / {gameState.questions.length}</div>
        <div style={{ ...styles.scoreDisplay, animation: scoreAnim ? "scoreFloat 0.6s ease" : "none" }}>⭐ {gameState.score}</div>
      </div>

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
        <h2 style={styles.questionText}>{question.q}</h2>

        {question.svg && (
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20, padding: 12, background: "#162033", borderRadius: 14 }} dangerouslySetInnerHTML={{ __html: question.svg }} />
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
                  Herhaal het goede antwoord hardop: <em style={{ color: "#b0d8b8" }}>"{question.options[question.answer]}"</em>. Koppel het aan een voorbeeld uit het echte leven.
                </div>
              </div>
            </div>

            {/* YouTube */}
            <a href={getYouTubeUrl(question)} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 16px", background: "#101c2e", border: "1px solid #1a73e8", borderRadius: 12, color: "#69b2ff", textDecoration: "none", fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: 14, marginBottom: 12 }}>
              🎬 Zoek uitlegvideo op YouTube
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
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, animation: "fadeBg 0.2s ease" }}>
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
              <button style={{ flex: 1, background: "linear-gradient(135deg, #69f0ae, #00c853)", color: "#fff", border: "none", borderRadius: 14, padding: "14px", fontWeight: 700, cursor: "pointer", fontFamily: "'Nunito', sans-serif", fontSize: 14 }} onClick={() => {
                clearInterval(timerRef.current);
                if (gameState.answers.length > 0) onFinish(gameState);
                else onQuit();
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

// ─── Results Page ────────────────────────────────────────────────
function ResultsPage({ results, quiz, userName, onBack, onHome, onRetry, onLeaderboard }) {
  const latest = results[results.length - 1];
  if (!latest) return null;

  const grade = latest.percentage >= 90 ? "🏆 Fantastisch!" : latest.percentage >= 70 ? "🌟 Goed gedaan!" : latest.percentage >= 50 ? "💪 Ga zo door!" : "📚 Blijven oefenen!";
  const emoji = latest.percentage >= 90 ? "🎉" : latest.percentage >= 70 ? "😊" : latest.percentage >= 50 ? "🙂" : "💪";
  const [sent, setSent] = useState(false);

  const subjLabel = SUBJECTS.find((s) => s.id === latest.subject)?.label || latest.subject;
  const wrongCount = latest.answers.filter(a => !a.isCorrect).length;
  const resultText = `📊 studiebol Resultaat\n\n👤 Leerling: ${userName || "Onbekend"}\n📚 Vak: ${subjLabel}\n${quiz?.title ? `📝 Quiz: ${quiz.title}\n` : ""}✅ Score: ${latest.score}/${latest.total} (${latest.percentage}%)\n❌ Fout: ${wrongCount} ${wrongCount === 1 ? "vraag" : "vragen"}\n⭐ Beoordeling: ${grade}`;

  const sendViaWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(resultText)}`, "_blank");
    setSent(true);
  };

  const sendViaEmail = () => {
    const email = quiz?.teacherEmail || "";
    const subject = `studiebol resultaat: ${userName} — ${subjLabel} ${latest.percentage}%`;
    window.open(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(resultText)}`, "_blank");
    setSent(true);
  };

  return (
    <div style={styles.page}>
      <div style={{ ...styles.resultsCard, animation: "slideUp 0.4s ease" }}>
        {latest.percentage >= 80 && (
          <div style={{ position: "relative", height: 0, overflow: "visible" }}>
            {["🎉","⭐","🌟","✨","🎊","💫"].map((e, i) => (
              <span key={i} style={{ position: "absolute", fontSize: 20, left: `${15+i*14}%`, top: -20, animation: `confetti 1.5s ease ${i*0.15}s both` }}>{e}</span>
            ))}
          </div>
        )}
        <div style={{ fontSize: 64, textAlign: "center", animation: "popIn 0.5s ease" }}>{emoji}</div>
        <h2 style={{ fontFamily: "Fredoka", fontSize: 28, textAlign: "center", color: "#e0e6f0", margin: "12px 0 4px" }}>{grade}</h2>
        <p style={{ textAlign: "center", color: "#8899aa", marginBottom: 24 }}>
          {subjLabel} · {LEVELS.find((l) => l.id === latest.level)?.label}
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
              {a.isCorrect && <span style={{ fontSize: 11, color: "#8899aa" }}>{a.timeLeft}s over</span>}
            </div>
          ))}
        </div>

        {/* Send results to teacher */}
        {quiz?.resultMethod && !sent && (
          <div style={{ marginTop: 20, padding: 16, background: "#0a2a1a", borderRadius: 14, borderLeft: "3px solid #00c853", textAlign: "center" }}>
            <p style={{ fontSize: 14, color: "#69f0ae", fontWeight: 700, marginBottom: 10 }}>📬 Stuur je resultaat naar je leraar!</p>
            {quiz.resultMethod === "whatsapp" ? (
              <button onClick={sendViaWhatsApp} style={{ width: "100%", padding: 14, border: "none", borderRadius: 12, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                💬 Verstuur via WhatsApp
              </button>
            ) : (
              <button onClick={sendViaEmail} style={{ width: "100%", padding: 14, border: "none", borderRadius: 12, background: "linear-gradient(135deg, #00c853, #00a844)", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                📧 Verstuur via e-mail
              </button>
            )}
          </div>
        )}
        {sent && (
          <div style={{ marginTop: 20, padding: 12, background: "#0a2a1a", borderRadius: 14, textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "#69f0ae" }}>✅ Resultaat verstuurd!</p>
          </div>
        )}

        {latest.percentage < 60 && (
          <div style={{ marginTop: 20, padding: 18, background: "#2a1500", borderRadius: 16, border: "2px solid #ff9800", animation: "slideUp 0.4s ease" }}>
            <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 17, color: "#ffb74d", fontWeight: 700, marginBottom: 4 }}>😕 Hier heb ik moeite mee</div>
            <div style={{ fontSize: 13, color: "#8899aa", marginBottom: 14 }}>Vraag hulp aan je leerkracht of ouder — niemand hoeft het te weten, jij stuurt het zelf!</div>
            <div style={{ display: "flex", gap: 8 }}>
              <button onClick={() => {
                const msg = `Hoi! 👋\n\nIk ben ${userName} en ik heb geoefend op Studiebol.\n\nIk heb moeite met: ${subjLabel}\nMijn score was: ${latest.score}/${latest.total} (${latest.percentage}%)\n\nKun je me helpen? 🙏`;
                window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
              }} style={{ flex: 1, padding: "13px 8px", border: "none", borderRadius: 12, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                💬 WhatsApp
              </button>
              <button onClick={() => {
                const msg = `Hoi!\n\nIk ben ${userName} en ik heb geoefend op Studiebol.\n\nIk heb moeite met: ${subjLabel}\nMijn score was: ${latest.score}/${latest.total} (${latest.percentage}%)\n\nKun je me helpen?`;
                window.open(`mailto:?subject=${encodeURIComponent("Studiebol - " + userName + " heeft hulp nodig bij " + subjLabel)}&body=${encodeURIComponent(msg)}`, "_blank");
              }} style={{ flex: 1, padding: "13px 8px", border: "none", borderRadius: 12, background: "#1a73e8", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 15, fontWeight: 700, cursor: "pointer" }}>
                ✉️ E-mail
              </button>
            </div>
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 24 }}>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #00c853, #00a844)" }} onClick={() => { SoundEngine.play("click"); onRetry(); }}>🔄 Opnieuw</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #69f0ae, #00c853)" }} onClick={onLeaderboard}>🏆 Scorebord</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #2a3f5f, #1e2d45)" }} onClick={onBack}>← Terug</button>
          <button style={{ ...styles.bigButton, background: "linear-gradient(135deg, #1e2d45, #162033)" }} onClick={onHome}>🏠 Home</button>
        </div>
      </div>
    </div>
  );
}

// ─── Teacher Progress ────────────────────────────────────────────
function TeacherProgress({ quizzes, progress, onBack, onHome }) {
  return (
    <div style={styles.page}>
      <Header title="Voortgang 📊" subtitle="Bekijk hoe je klas het doet" onBack={onBack} onHome={onHome} />
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
                    <div style={{ fontSize: 12, color: "#8899aa" }}>{subj?.label} · {LEVELS.find((l) => l.id === r.level)?.label}</div>
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
function StudentProgressView({ progress, userName, onBack, onHome }) {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const bySubject = {};
  progress.forEach((p) => {
    if (!bySubject[p.subject]) bySubject[p.subject] = [];
    bySubject[p.subject].push(p);
  });

  if (selectedSubject) {
    const subj = SUBJECTS.find((s) => s.id === selectedSubject);
    const results = bySubject[selectedSubject] || [];
    // Collect all wrong questions across all attempts
    const wrongQuestions = [];
    results.forEach((r) => {
      if (!r.questions) return;
      r.answers.forEach((a, i) => {
        if (!a.isCorrect && r.questions[a.questionIndex ?? i]) {
          const q = r.questions[a.questionIndex ?? i];
          wrongQuestions.push({ q, selectedOption: a.selected, date: r.completedAt });
        }
      });
    });
    // Deduplicate by question text
    const seen = new Set();
    const uniqueWrong = wrongQuestions.filter(({ q }) => {
      if (seen.has(q.q)) return false;
      seen.add(q.q);
      return true;
    });

    return (
      <div style={styles.page}>
        <Header title={`${subj?.icon} ${subj?.label}`} subtitle="Foute vragen" onBack={() => setSelectedSubject(null)} onHome={onHome} />
        <div style={styles.content}>
          {uniqueWrong.length === 0 ? (
            <div style={styles.emptyState}>
              <span style={{ fontSize: 48 }}>🎉</span>
              <p>Geen foute vragen gevonden! Goed gedaan!</p>
            </div>
          ) : (
            <>
              <div style={{ fontSize: 13, color: "#8899aa", marginBottom: 16 }}>
                {uniqueWrong.length} vraag{uniqueWrong.length !== 1 ? "en" : ""} die je fout had — klik op de hulpknop als je er moeite mee hebt.
              </div>
              {uniqueWrong.map(({ q, selectedOption }, i) => (
                <div key={i} style={{ background: "#1e2d45", borderRadius: 16, padding: 16, marginBottom: 14, borderLeft: "4px solid #ff5252" }}>
                  <div style={{ fontFamily: "'Fredoka', sans-serif", fontSize: 15, color: "#e0e6f0", marginBottom: 10, lineHeight: 1.4 }}>
                    {i + 1}. {q.q}
                  </div>
                  {selectedOption >= 0 && q.options?.[selectedOption] && (
                    <div style={{ fontSize: 12, color: "#ff8a80", marginBottom: 4 }}>
                      ❌ Jouw antwoord: <strong>{q.options[selectedOption]}</strong>
                    </div>
                  )}
                  <div style={{ fontSize: 12, color: "#69f0ae", marginBottom: q.explanation ? 10 : 14 }}>
                    ✅ Goed antwoord: <strong>{q.options?.[q.answer]}</strong>
                  </div>
                  {q.explanation && (
                    <div style={{ fontSize: 13, color: "#b0c8e0", background: "#162033", borderRadius: 10, padding: "10px 12px", marginBottom: 12, lineHeight: 1.5 }}>
                      💡 {q.explanation}
                    </div>
                  )}
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => {
                      const msg = `Hoi! 👋\n\nIk ben ${userName} en ik snap deze vraag niet:\n\n"${q.q}"\n\nHet goede antwoord is: ${q.options?.[q.answer]}\nMaar ik snap nog niet waarom. Kun je het uitleggen? 🙏`;
                      window.open(`https://wa.me/?text=${encodeURIComponent(msg)}`, "_blank");
                    }} style={{ flex: 1, padding: "10px 8px", border: "none", borderRadius: 10, background: "#25D366", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                      💬 WhatsApp
                    </button>
                    <button onClick={() => {
                      const msg = `Hoi!\n\nIk ben ${userName} en ik snap deze vraag niet:\n\n"${q.q}"\n\nHet goede antwoord is: ${q.options?.[q.answer]}\nMaar ik snap nog niet waarom. Kun je het uitleggen?`;
                      window.open(`mailto:?subject=${encodeURIComponent("Studiebol - " + userName + " heeft een vraag over " + subj?.label)}&body=${encodeURIComponent(msg)}`, "_blank");
                    }} style={{ flex: 1, padding: "10px 8px", border: "none", borderRadius: 10, background: "#1a73e8", color: "#fff", fontFamily: "'Fredoka', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                      ✉️ E-mail
                    </button>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <Header title="Mijn Voortgang 📊" subtitle="Tik op een vak voor details" onBack={onBack} onHome={onHome} />
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
              const wrongCount = results.reduce((n, r) => n + (r.answers?.filter(a => !a.isCorrect).length || 0), 0);
              return (
                <button key={subId} onClick={() => setSelectedSubject(subId)} style={{ ...styles.subjectProgress, width: "100%", textAlign: "left", cursor: "pointer", border: "none", display: "block" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 24 }}>{subj?.icon}</span>
                    <strong style={{ color: "#e0e6f0" }}>{subj?.label}</strong>
                    <span style={{ marginLeft: "auto", fontWeight: 700, color: avg >= 80 ? "#28a745" : avg >= 50 ? "#f39c12" : "#e74c3c" }}>{avg}%</span>
                    <span style={{ fontSize: 18, color: "#8899aa" }}>›</span>
                  </div>
                  <div style={styles.progressBarSmall}>
                    <div style={{ ...styles.progressFillSmall, width: `${avg}%`, background: avg >= 80 ? "#28a745" : avg >= 50 ? "#f39c12" : "#e74c3c" }} />
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 6 }}>
                    <span style={{ fontSize: 12, color: "#8899aa" }}>{results.length} poging{results.length !== 1 ? "en" : ""}</span>
                    {wrongCount > 0 && <span style={{ fontSize: 11, color: "#ff8a80" }}>· {wrongCount} fout</span>}
                    {avg < 60 && <span style={{ fontSize: 11, background: "#ff980020", color: "#ffb74d", padding: "2px 8px", borderRadius: 8, fontWeight: 700 }}>💪 aandacht nodig</span>}
                  </div>
                </button>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

// ─── Leaderboard ─────────────────────────────────────────────────
function Leaderboard({ data, currentUser, onBack, onHome }) {
  const medals = ["🥇", "🥈", "🥉"];
  return (
    <div style={styles.page}>
      <Header title="Scorebord 🏆" subtitle="Top scores" onBack={onBack} onHome={onHome} />
      <div style={styles.content}>
        {data.length === 0 ? (
          <div style={styles.emptyState}><span style={{ fontSize: 48 }}>🏆</span><p>Nog geen scores! Speel een quiz om op het scorebord te komen.</p></div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {data.slice(0, 20).map((entry, i) => {
              const subj = SUBJECTS.find((s) => s.id === entry.subject);
              const isMe = entry.player === currentUser;
              return (
                <div key={i} style={{
                  display: "flex", alignItems: "center", gap: 12, padding: "14px 16px", borderRadius: 14,
                  background: isMe ? "linear-gradient(135deg, #fff9e6, #fff3cd)" : "#fff",
                  border: isMe ? "2px solid #ffc107" : "1px solid #e8eef5",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
                  animation: `slideIn 0.3s ease ${i * 0.03}s both`,
                }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: "#162033", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {i < 3 ? <span style={{ fontSize: 22 }}>{medals[i]}</span> : <span style={{ fontWeight: 800, color: "#8899aa" }}>{i + 1}</span>}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: "#e0e6f0" }}>
                      {entry.player} {isMe && <span style={{ fontSize: 11, color: "#8899aa" }}>(jij)</span>}
                    </div>
                    <div style={{ fontSize: 11, color: "#8899aa" }}>
                      {subj?.icon} {subj?.label} · {LEVELS.find((l) => l.id === entry.level)?.label}
                    </div>
                  </div>
                  <div style={{
                    padding: "4px 12px", borderRadius: 10, fontWeight: 800, fontSize: 15,
                    background: entry.percentage >= 80 ? "#d4edda" : entry.percentage >= 50 ? "#fff3cd" : "#f8d7da",
                    color: entry.percentage >= 80 ? "#155724" : entry.percentage >= 50 ? "#856404" : "#721c24",
                  }}>
                    {entry.percentage}%
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Shared Components ───────────────────────────────────────────
function Header({ title, subtitle, onBack, onHome }) {
  return (
    <div style={styles.header}>
      <button style={styles.headerBack} onClick={onBack}>←</button>
      <div style={{ flex: 1 }}>
        <h2 style={styles.headerTitle}>{title}</h2>
        {subtitle && <p style={styles.headerSubtitle}>{subtitle}</p>}
      </div>
      {onHome && (
        <button style={{ ...styles.headerBack, fontSize: 18 }} onClick={onHome} title="Naar beginpagina">🏠</button>
      )}
    </div>
  );
}

// ─── Styles ──────────────────────────────────────────────────────
const styles = {
  app: {
    fontFamily: "'Nunito', sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(160deg, #0f1729 0%, #162033 50%, #1a2744 100%)",
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
    background: "radial-gradient(ellipse 110% 45% at 50% 12%, rgba(20,90,200,0.18) 0%, transparent 70%)",
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
    color: "#8899aa",
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
    color: "#e0e6f0",
    marginBottom: 6,
    fontFamily: "'Fredoka', sans-serif",
  },
  textInput: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 14,
    border: "2px solid #2a3f5f",
    fontFamily: "'Nunito', sans-serif",
    fontSize: 16,
    fontWeight: 600,
    outline: "none",
    transition: "border-color 0.2s",
    background: "#1e2d45",
    boxSizing: "border-box",
    color: "#ffffff",
    WebkitTextFillColor: "#ffffff",
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
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
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
    background: "#1e2d45",
    borderBottom: "1px solid #e8eef5",
    position: "sticky",
    top: 0,
    zIndex: 10,
  },
  headerBack: {
    background: "#162033",
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
  headerTitle: { fontFamily: "'Fredoka', sans-serif", fontSize: 22, margin: 0, color: "#e0e6f0" },
  headerSubtitle: { fontSize: 13, color: "#8899aa", margin: 0 },

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
    boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
    transition: "transform 0.15s",
  },

  // Section title
  sectionTitle: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 18,
    color: "#e0e6f0",
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
    background: "#1e2d45",
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
    background: "#1e2d45",
  },

  // Settings
  settingsGroup: {
    background: "#1e2d45",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
  },
  settingLabel: {
    display: "block",
    fontWeight: 700,
    fontSize: 14,
    color: "#e0e6f0",
    marginBottom: 6,
    marginTop: 16,
    fontFamily: "'Fredoka', sans-serif",
  },
  slider: {
    width: "100%",
    accentColor: "#69f0ae",
    height: 6,
  },
  toggleRow: { display: "flex", alignItems: "center", gap: 14, marginTop: 20, cursor: "pointer", padding: "12px 0" },
  toggle: { width: 48, height: 26, borderRadius: 13, transition: "background 0.2s", flexShrink: 0, position: "relative" },
  toggleKnob: { width: 22, height: 22, borderRadius: 11, background: "#1e2d45", boxShadow: "0 1px 4px rgba(0,0,0,0.2)", position: "absolute", top: 2, transition: "transform 0.2s" },

  // Progress bar
  progressBar: {
    height: 6,
    background: "#2a3f5f",
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
  stepTitle: { fontFamily: "'Fredoka', sans-serif", fontSize: 20, color: "#e0e6f0", marginBottom: 16 },

  // Navigation
  navRow: { display: "flex", gap: 12, marginTop: 24, paddingBottom: 24 },
  backBtn: {
    background: "#162033",
    border: "none",
    borderRadius: 14,
    padding: "14px 24px",
    fontFamily: "'Nunito', sans-serif",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    color: "#8899aa",
  },
  nextBtn: {
    background: "linear-gradient(135deg, #00c853, #00e676)",
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
    background: "#1e2d45",
    borderRadius: 24,
    padding: "32px 24px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    textAlign: "center",
  },
  lobbyLogo: { fontSize: 48, marginBottom: 8 },
  lobbyTitle: { fontFamily: "'Fredoka', sans-serif", fontSize: 28, margin: 0, color: "#e0e6f0" },
  lobbySubtitle: { color: "#8899aa", marginBottom: 16 },
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
    background: "#162033",
    padding: "10px 16px",
    borderRadius: 12,
    letterSpacing: 2,
  },
  lobbyInfo: { display: "flex", justifyContent: "center", gap: 10, marginBottom: 20, flexWrap: "wrap" },
  badge: {
    background: "#162033",
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
    background: "linear-gradient(135deg, #00c853, #00a844)",
    color: "#fff",
    border: "none",
    borderRadius: 16,
    padding: "18px",
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 18,
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 4px 20px rgba(0,200,83,0.4)",
    marginBottom: 16,
  },
  waitingBox: { padding: 20, color: "#8899aa" },
  lobbyTip: { fontSize: 12, color: "#556677", fontStyle: "italic" },
  linkBtn: {
    background: "none",
    border: "none",
    color: "#8899aa",
    fontSize: 14,
    cursor: "pointer",
    marginTop: 8,
    fontWeight: 600,
    fontFamily: "'Nunito', sans-serif",
  },

  // Quiz card
  quizList: { display: "flex", flexDirection: "column", gap: 12 },
  quizCard: {
    background: "#1e2d45",
    borderRadius: 18,
    padding: 16,
    boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
  },
  quizCardHeader: { display: "flex", alignItems: "center", gap: 12, marginBottom: 10 },
  quizTitle: { fontWeight: 700, fontSize: 15, color: "#e0e6f0" },
  quizMeta: { fontSize: 12, color: "#8899aa" },
  quizCardActions: { display: "flex", gap: 8 },
  smallButton: {
    background: "linear-gradient(135deg, #00c853, #00e676)",
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
    background: "#162033",
    color: "#8899aa",
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
    background: "#1e2d45",
    borderRadius: 18,
    padding: 20,
    marginBottom: 20,
    boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
  },
  codeInputRow: { display: "flex", gap: 10 },
  joinButton: {
    background: "linear-gradient(135deg, #00c853, #00e676)",
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
    background: "#1e2d45",
    borderRadius: 14,
    padding: "14px 16px",
    marginBottom: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },
  doneBadge: { fontSize: 13, fontWeight: 700 },

  // Recent card
  recentCard: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#1e2d45",
    borderRadius: 14,
    padding: "12px 16px",
    marginBottom: 8,
    boxShadow: "0 1px 6px rgba(0,0,0,0.3)",
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
    color: "#8899aa",
  },
  scoreDisplay: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 16,
    fontWeight: 700,
    color: "#00c853",
  },
  timerBar: {
    height: 8,
    background: "#2a3f5f",
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
    background: "#1e2d45",
    borderRadius: 24,
    padding: "28px 20px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
    animation: "slideUp 0.3s ease",
  },
  questionText: {
    fontFamily: "'Fredoka', sans-serif",
    fontSize: 20,
    color: "#e0e6f0",
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
    background: "#1e2d45",
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
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: 800,
    flexShrink: 0,
    color: "#e0e6f0",
  },

  // Results
  resultsCard: {
    margin: "32px 20px",
    background: "#1e2d45",
    borderRadius: 24,
    padding: "32px 24px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
  },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #00c853, #00a844)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto 24px",
    boxShadow: "0 8px 24px rgba(0,200,83,0.4)",
  },
  scoreNumber: { fontFamily: "'Fredoka', sans-serif", fontSize: 36, fontWeight: 700, color: "#fff" },
  scoreDetail: { fontSize: 13, color: "rgba(255,255,255,0.85)" },
  resultDetails: {
    background: "#162033",
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
    background: "#1e2d45",
    borderRadius: 16,
    padding: "16px 12px",
    textAlign: "center",
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },
  statValue: { fontFamily: "'Fredoka', sans-serif", fontSize: 28, fontWeight: 700, color: "#e0e6f0" },
  statLabel: { fontSize: 12, color: "#8899aa", fontWeight: 600 },

  // Empty state
  emptyState: { textAlign: "center", padding: "48px 20px", color: "#8899aa" },

  // Subject progress
  subjectProgress: {
    background: "#1e2d45",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
  },
  progressBarSmall: {
    height: 8,
    background: "#2a3f5f",
    borderRadius: 4,
    overflow: "hidden",
  },
  progressFillSmall: {
    height: "100%",
    borderRadius: 4,
    transition: "width 0.6s ease",
  },
};

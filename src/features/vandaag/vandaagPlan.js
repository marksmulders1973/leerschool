// ⭐ Vandaag-motor (Mark 10 sep 2026: "alle facetten van de app in één persoonlijk
// plan per kind, het maximale eruit en simpel — door de bomen het bos").
//
// Eén functie kiest per kind het kwartier van vandaag uit de bestaande blokjes.
// Vaste ladder (memory project_studiebol_vandaag_motor):
//   1. klaargezet door ouder/juf   → altijd eerst (eigen flow, niet gerijgd)
//   2. Doorstroomtoets < 8 weken    → toets-stijl mix (groep 7/8)
//   3. weekschema-regel van vandaag → ma+do lastigste onderwerp, vr wat al goed gaat
//   4. zwakste plek uit de meting   → (zit in 3 verwerkt: zonder weekschema-data
//                                       neemt de zwakste concept-lijst het over)
//   5. gezonde mix per groep        → zelfde paden als het start-kwartier
// Elk kwartier = 2-3 blokjes van ~5 items: vragen uit een leerpad, dictee,
// werkwoorden. Nieuwe functies worden een blokje hier, geen nieuwe voordeur.
// Puur en testbaar: alle data komt als argument binnen (geen fetches hier).

import { kiesZwakkeConcepten } from "../oefenboekje/opMaat.js";
import { kiesStartPaden } from "../onboarding/startKwartier.js";
import pathManifest from "../../learnPaths/pathManifest.generated.json";

const PATHS_BY_ID = Object.fromEntries(pathManifest.map((p) => [p.id, p]));
export const ITEMS_PER_BLOK = 5;
const TOETS_VENSTER_DAGEN = 56;

export function parseGroep(level) {
  const m = String(level || "").match(/(\d)/);
  const g = m ? +m[1] : null;
  return g && g >= 1 && g <= 8 ? g : null;
}

/** Eerstvolgende start van de Doorstroomtoets-afname (25 januari). */
export function volgendeToetsDatum(vandaag = new Date()) {
  const jaar = vandaag.getMonth() === 0 && vandaag.getDate() <= 25 ? vandaag.getFullYear() : vandaag.getFullYear() + 1;
  return new Date(jaar, 0, 25);
}
export function dagenTotToets(vandaag = new Date()) {
  return Math.round((volgendeToetsDatum(vandaag) - vandaag) / 86400000); // round: zomer-/wintertijd-uur weglaten
}

function titelVan(pathId, fallback = "") {
  const p = PATHS_BY_ID[pathId];
  return p ? `${p.emoji ? p.emoji + " " : ""}${p.title}` : fallback || pathId;
}
function vragenBlok(pathId, n = ITEMS_PER_BLOK) {
  return { soort: "vragen", pathId, n, titel: titelVan(pathId) };
}
function dicteeBlok(groep, n = ITEMS_PER_BLOK, school = false) {
  return { soort: "dictee", groep, n, school, titel: school ? "✍️ Dictee met de woorden van school" : "✍️ Dictee met Charley" };
}
function werkwoordenBlok(n = ITEMS_PER_BLOK, school = false) {
  return { soort: "werkwoorden", n, school, titel: school ? "🔤 Werkwoorden van school" : "🔤 Werkwoordspelling" };
}

// 🏠 Gezinsstart-voorkeur (30 sep 2026): de ouder of verzorger koos waar de
// eerste twee maanden de nadruk op ligt. Zolang `tot` in de toekomst ligt en
// niet "laat de app kiezen", komen minstens 2 van de 3 blokjes uit die vakken.
// Daarna (of zonder voorkeur) gewoon de ladder hierboven.
const VAK_MATCH = {
  rekenen: (p) => p.subject === "rekenen" || p.subject === "wiskunde",
  taal: (p) => p.subject === "taal" || p.subject === "spelling",
  werkwoorden: (p) => /werkwoord/i.test(p.id),
  lezen: (p) => p.subject === "begrijpend-lezen",
  doorstroomtoets: (p) => /^(doorstroomtoets|cito)/i.test(p.id),
};
function padVoorGroep(p, groep) {
  const lvl = String(p.level || "").toLowerCase();
  if (lvl === "po") return true;
  const m = lvl.match(/^groep\s?(\d)(?:-(\d))?$/);
  if (!m) return false;
  const van = +m[1]; const tot = m[2] ? +m[2] : van;
  return groep >= van && groep <= tot;
}
function vrijeTekstMatch(p, vrij) {
  const woorden = String(vrij || "").toLowerCase().split(/[^a-zà-ü0-9]+/).filter((w) => w.length >= 4);
  if (!woorden.length) return false;
  const hooi = `${p.id} ${p.title || ""}`.toLowerCase();
  return woorden.some((w) => hooi.includes(w));
}
export function voorkeurActief(voorkeur, vandaag = new Date()) {
  if (!voorkeur || voorkeur.app_kiest) return false;
  const heeftIets = (Array.isArray(voorkeur.vakken) && voorkeur.vakken.length > 0) || !!String(voorkeur.vrij || "").trim();
  if (!heeftIets) return false;
  if (!voorkeur.tot) return true;
  const tot = new Date(voorkeur.tot);
  if (isNaN(tot.getTime())) return true;
  tot.setHours(23, 59, 59, 999);
  return vandaag <= tot;
}
export function padMatchtVoorkeur(pathId, voorkeur) {
  const p = PATHS_BY_ID[pathId];
  if (!p || !voorkeur) return false;
  const vakken = Array.isArray(voorkeur.vakken) ? voorkeur.vakken : [];
  return vakken.some((v) => VAK_MATCH[v]?.(p)) || vrijeTekstMatch(p, voorkeur.vrij);
}
/** Paden voor deze groep die bij de voorkeur passen — vrije tekst eerst, dan per vak. */
export function voorkeurPaden(groep, voorkeur) {
  if (!voorkeur) return [];
  const vakken = Array.isArray(voorkeur.vakken) ? voorkeur.vakken : [];
  const kandidaten = pathManifest.filter((p) => padVoorGroep(p, groep));
  const uit = [];
  const voeg = (p) => { if (!uit.includes(p.id)) uit.push(p.id); };
  kandidaten.filter((p) => vrijeTekstMatch(p, voorkeur.vrij)).forEach(voeg);
  // Om de beurt één pad per gekozen vak, zodat twee vakken allebei aan bod komen.
  const perVak = vakken.map((v) => kandidaten.filter((p) => VAK_MATCH[v]?.(p)));
  const maxLen = Math.max(0, ...perVak.map((l) => l.length));
  for (let i = 0; i < maxLen; i++) for (const lijst of perVak) if (lijst[i]) voeg(lijst[i]);
  return uit;
}

// Weekschema-regel (zelfde als WeekschemaPagina.bouwWeekOpMaat, maar dan alleen
// voor vandaag): concepten komen zwakste-eerst binnen.
function conceptVoorVandaag(concepten, weekdag) {
  const c = concepten;
  if (!c.length) return null;
  const sterkste = c[c.length - 1];
  switch (weekdag) {
    case 1: return c[0];                 // ma: lastigste
    case 2: return c[1] || c[0];         // di
    case 3: return c[2] || sterkste;     // wo
    case 4: return c[0];                 // do: lastigste nog een keer (herhalen werkt)
    case 5: return c.length > 1 ? sterkste : c[0]; // vr: afsluiten met wat al goed gaat
    case 6: return c[3] || c[1] || c[0]; // za
    default: return c[0];                // zo: vrije keuze → we bieden de lastigste aan
  }
}

/**
 * Kies het kwartier van vandaag.
 * @param {object} o
 * @param {string|number} o.level          groep/klas van het kind
 * @param {Date}   [o.vandaag]
 * @param {Array}  [o.klaargezet]          items uit voor_jou_klaargezet (path_id, titel, emoji, gedaan, bron)
 * @param {Array}  [o.mastery]             records uit loadMasteryForPlayer
 * @param {boolean}[o.dicteeSchool]        staat er een schoolwoordenlijst op dit apparaat?
 * @param {boolean}[o.wwSchool]            staat er een werkwoordenlijst van school op dit apparaat?
 * @param {boolean}[o.metSchoolvakken]     VO-leerling (geen dictee/werkwoorden-blokjes)
 * @param {object} [o.voorkeur]            Gezinsstart-voorkeur {vakken, vrij, tot, app_kiest} (zie voorkeur.js)
 * @returns {{reden:string, uitleg:string, blokjes:Array, voorkeur?:boolean}}
 */
export function bepaalPlan({ level, vandaag = new Date(), klaargezet = [], mastery = [], dicteeSchool = false, wwSchool = false, metSchoolvakken = false, voorkeur = null, klasPaden = null } = {}) {
  const groep = parseGroep(level) ?? 6;
  const open = (klaargezet || []).filter((k) => !k.gedaan);
  const weekdag = vandaag.getDay();

  // 🎒 Middelbare school (Noa, testgroep 8 okt 2026: profiel "Klas 5" kreeg groep-4/5-stof —
  // "klas5" werd hierboven als groep 5 gelezen). VO-leerlingen krijgen alleen paden van hun
  // eigen klas (klasPaden, zelfde lijst als de vak-tegels op /mijn), nooit basisschoolpaden.
  if (metSchoolvakken && Array.isArray(klasPaden) && klasPaden.length) {
    if (open.length) {
      return {
        reden: "klaargezet",
        uitleg: open.some((k) => k.bron === "leraar") ? "Je docent heeft iets voor je klaargezet." : "Thuis is iets voor je klaargezet.",
        blokjes: [{ soort: "klaargezet", items: open.slice(0, 3), titel: "💛 Voor jou klaargezet" }],
      };
    }
    const toegestaan = new Set(klasPaden);
    // Eén pad per vak, elke dag bij een ander vak beginnen.
    const perVak = [];
    const vakGehad = new Set();
    for (let i = 0; i < klasPaden.length; i++) {
      const id = klasPaden[(i + weekdag * 7) % klasPaden.length];
      const vak = PATHS_BY_ID[id]?.subject || id;
      if (vakGehad.has(vak)) continue;
      vakGehad.add(vak); perVak.push(id);
    }
    const zwak = kiesZwakkeConcepten(mastery, { maxConcepten: 6, minPogingen: 3, drempelPct: 101 })
      .filter((c) => toegestaan.has(c.id));
    const gekozen = conceptVoorVandaag(zwak, weekdag);
    if (gekozen) {
      const rest = perVak.filter((id) => id !== gekozen.id && PATHS_BY_ID[id]?.subject !== PATHS_BY_ID[gekozen.id]?.subject).slice(0, 2);
      return {
        reden: "weekschema",
        uitleg: "Eerst je lastigste onderwerp, dan twee andere vakken van jouw klas.",
        blokjes: [vragenBlok(gekozen.id), ...rest.map((id) => vragenBlok(id))],
      };
    }
    return {
      reden: "mix",
      uitleg: "Nog weinig gemeten: een mix van vakken van jouw klas.",
      blokjes: perVak.slice(0, 3).map((id) => vragenBlok(id)),
    };
  }
  const vk = !metSchoolvakken && voorkeurActief(voorkeur, vandaag) ? voorkeur : null;
  const vkVakken = vk && Array.isArray(vk.vakken) ? vk.vakken : [];
  const vkPaden = vk ? voorkeurPaden(groep, vk) : [];
  const vkLabel = () => {
    const namen = { rekenen: "rekenen", taal: "taal", werkwoorden: "werkwoorden", lezen: "lezen", doorstroomtoets: "de Doorstroomtoets" };
    const l = vkVakken.map((v) => namen[v] || v);
    if (vk?.vrij) l.push(String(vk.vrij).trim().toLowerCase());
    return l.length > 1 ? `${l.slice(0, -1).join(", ")} en ${l[l.length - 1]}` : l[0] || "";
  };

  // 1. klaargezet door ouder of juf → dat eerst
  if (open.length) {
    return {
      reden: "klaargezet",
      uitleg: open.some((k) => k.bron === "leraar") ? "Je juf of meester heeft iets voor je klaargezet." : "Thuis is iets voor je klaargezet.",
      blokjes: [{ soort: "klaargezet", items: open.slice(0, 3), titel: "💛 Voor jou klaargezet" }],
    };
  }

  // Met voorkeur: "werkwoorden" → werkwoorden-blok (vanaf groep 5), "taal" → dictee.
  const taalBlok = () => {
    if (metSchoolvakken) return null;
    if (vkVakken.includes("werkwoorden") && groep >= 5) return werkwoordenBlok(ITEMS_PER_BLOK, wwSchool);
    if (vkVakken.includes("taal") && !vkVakken.includes("werkwoorden") && groep >= 4) return dicteeBlok(groep, ITEMS_PER_BLOK, dicteeSchool);
    return groep >= 6 ? werkwoordenBlok(ITEMS_PER_BLOK, wwSchool) : groep >= 4 ? dicteeBlok(groep, ITEMS_PER_BLOK, dicteeSchool) : null;
  };
  const tweedeTaalBlok = () => (metSchoolvakken || groep < 4 ? null : groep >= 6 ? dicteeBlok(groep, ITEMS_PER_BLOK, dicteeSchool) : null);
  // Blokje uit de voorkeur-paden, per weekdag doorgeschoven zodat het niet elke dag hetzelfde is.
  const vkBlok = (offset) => (vkPaden.length ? vragenBlok(vkPaden[(weekdag + offset) % vkPaden.length]) : null);

  // 2. Doorstroomtoets binnen 8 weken (groep 7/8)
  const dagen = dagenTotToets(vandaag);
  if (!metSchoolvakken && groep >= 7 && dagen > 0 && dagen <= TOETS_VENSTER_DAGEN) {
    const paden = kiesStartPaden(8);
    return {
      reden: "toets",
      uitleg: `Nog ${dagen} dagen tot de Doorstroomtoets: vandaag oefenen in toets-stijl.`,
      blokjes: [vragenBlok(paden[0]), vragenBlok(paden[1]), taalBlok()].filter(Boolean),
    };
  }

  // 3./4. weekschema-regel op de zwakste plekken uit de meting
  const alleConcepten = kiesZwakkeConcepten(mastery, { maxConcepten: 6, minPogingen: 3, drempelPct: 101 })
    .filter((c) => PATHS_BY_ID[c.id]);
  // Met voorkeur: eerst de zwakke plekken binnen de gekozen vakken; zijn die er niet, dan de gewone lijst.
  const conceptenInVoorkeur = vk ? alleConcepten.filter((c) => padMatchtVoorkeur(c.id, vk)) : [];
  const concepten = conceptenInVoorkeur.length ? conceptenInVoorkeur : alleConcepten;
  const gekozen = conceptVoorVandaag(concepten, weekdag);
  if (gekozen) {
    const dagNaam = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"][weekdag];
    const uitleg = weekdag === 5 && concepten.length > 1
      ? `Vrijdag: afsluiten met iets dat al goed gaat (${titelVan(gekozen.id)}).`
      : weekdag === 4 ? `Donderdag: je lastigste onderwerp nog een keer, herhalen werkt.`
        : `${dagNaam.charAt(0).toUpperCase() + dagNaam.slice(1)}: eerst je lastigste onderwerp, dan taal.`;
    // Is het lastigste onderwerp zélf werkwoordspelling? Dan geen tweede werkwoorden-blok, maar dictee.
    const overWerkwoorden = /werkwoord/i.test(gekozen.id);
    const taal = overWerkwoorden ? (groep >= 4 && !metSchoolvakken ? dicteeBlok(groep, ITEMS_PER_BLOK, dicteeSchool) : null) : taalBlok();
    const taal2 = overWerkwoorden ? null : tweedeTaalBlok();
    if (vk && vkPaden.length) {
      // Minstens 2 van de 3 uit de voorkeur: het (voorkeur-)concept + één voorkeur-pad, dan taal.
      const eersteInVoorkeur = padMatchtVoorkeur(gekozen.id, vk);
      const extra = vkPaden.filter((id) => id !== gekozen.id);
      const b2 = extra.length ? vragenBlok(extra[weekdag % extra.length]) : null;
      const b3 = eersteInVoorkeur ? taal : (extra.length > 1 ? vragenBlok(extra[(weekdag + 1) % extra.length]) : taal);
      return { reden: "weekschema", voorkeur: true, uitleg: `${uitleg} Met extra aandacht voor ${vkLabel()}.`, blokjes: [vragenBlok(gekozen.id), b2, b3].filter(Boolean) };
    }
    return { reden: "weekschema", uitleg, blokjes: [vragenBlok(gekozen.id), taal, taal2].filter(Boolean) };
  }

  // 5. gezonde mix per groep (zelfde paden als het start-kwartier)
  const paden = kiesStartPaden(String(groep));
  const start = weekdag % Math.max(1, paden.length);
  if (vk && (vkPaden.length || taalBlok())) {
    // Voorkeur-mix: twee blokjes uit de gekozen vakken (of één + werkwoorden/dictee), dan de rest.
    const b1 = vkBlok(0);
    const b2 = vkPaden.length > 1 ? vkBlok(1) : vragenBlok(paden[start % paden.length]);
    const blokjes = [b1, b2, taalBlok()].filter(Boolean);
    if (blokjes.length < 2) blokjes.push(vragenBlok(paden[(start + 1) % paden.length]));
    return { reden: "mix", voorkeur: true, uitleg: `Vandaag extra aandacht voor ${vkLabel()}.`, blokjes };
  }
  return {
    reden: "mix",
    uitleg: "Nog weinig gemeten: een mix van rekenen, taal en lezen voor jouw groep.",
    blokjes: [vragenBlok(paden[start % paden.length]), vragenBlok(paden[(start + 1) % paden.length]), taalBlok()].filter(Boolean),
  };
}

/** Korte samenvatting voor de kaart op /mijn: "5 breuken-vragen · 5 werkwoorden · 5 dicteewoorden" */
export function planSamenvatting(plan) {
  if (!plan?.blokjes?.length) return "";
  return plan.blokjes.map((b) => {
    if (b.soort === "klaargezet") return `${b.items.length} ${b.items.length === 1 ? "les" : "lessen"} voor jou klaargezet`;
    if (b.soort === "vragen") return `${b.n} vragen ${b.titel.replace(/^[^\w]*\s?/u, "").toLowerCase()}`;
    if (b.soort === "dictee") return `${b.n} dicteewoorden`;
    if (b.soort === "werkwoorden") return `${b.n} werkwoorden`;
    return b.soort;
  }).join(" · ");
}

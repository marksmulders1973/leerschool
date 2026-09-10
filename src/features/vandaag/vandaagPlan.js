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
 * @returns {{reden:string, uitleg:string, blokjes:Array}}
 */
export function bepaalPlan({ level, vandaag = new Date(), klaargezet = [], mastery = [], dicteeSchool = false, wwSchool = false, metSchoolvakken = false } = {}) {
  const groep = parseGroep(level) ?? 6;
  const open = (klaargezet || []).filter((k) => !k.gedaan);
  const weekdag = vandaag.getDay();

  // 1. klaargezet door ouder of juf → dat eerst
  if (open.length) {
    return {
      reden: "klaargezet",
      uitleg: open.some((k) => k.bron === "leraar") ? "Je juf of meester heeft iets voor je klaargezet." : "Thuis is iets voor je klaargezet.",
      blokjes: [{ soort: "klaargezet", items: open.slice(0, 3), titel: "💛 Voor jou klaargezet" }],
    };
  }

  const taalBlok = () => (metSchoolvakken ? null : groep >= 6 ? werkwoordenBlok(ITEMS_PER_BLOK, wwSchool) : groep >= 4 ? dicteeBlok(groep, ITEMS_PER_BLOK, dicteeSchool) : null);
  const tweedeTaalBlok = () => (metSchoolvakken || groep < 4 ? null : groep >= 6 ? dicteeBlok(groep, ITEMS_PER_BLOK, dicteeSchool) : null);

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
  const concepten = kiesZwakkeConcepten(mastery, { maxConcepten: 6, minPogingen: 3, drempelPct: 101 })
    .filter((c) => PATHS_BY_ID[c.id]);
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
    return { reden: "weekschema", uitleg, blokjes: [vragenBlok(gekozen.id), taal, taal2].filter(Boolean) };
  }

  // 5. gezonde mix per groep (zelfde paden als het start-kwartier)
  const paden = kiesStartPaden(String(groep));
  const start = weekdag % Math.max(1, paden.length);
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

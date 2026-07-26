// Prijsplan — gebruikersgerichte definitie (Mark 2026-06-06, model herzien
// 2026-07-25 — Mark akkoord).
//
// Doel van dit bestand: één bron van waarheid voor WAT de betaalde lagen
// straks zijn, in woorden die ouders/leerkrachten snappen. Losgekoppeld van de
// technische FEATURE_GATES (config.js). Volledige onderbouwing + prijzen:
// docs/PRIJSPLAN.md.
//
// Het principe (2026-07-25): DE BETAALVORM VOLGT DE WAARDEVORM.
//  - Doorlopende waarde (voortgang volgen, rapporten, logo op toetsen)
//    → een klein abonnement: FAMILIE (per gezin) of PRO (leerkrachten).
//  - Verbruikswaarde (extra AI-bijles-tijd) → los KWARTIER-TEGOED,
//    geen abonnement, ook als cadeaukaart.
//  - De leer-basis blijft gratis (merkbelofte); partner-codes (Leergeld,
//    Ooievaarspas, voedselbanken) geven het Familie-niveau gratis.
//    ⚖️ Ooievaarspas = BLIJVEND gratis Familie, zonder plekken-limiet —
//    schriftelijk toegezegd aan gemeente Den Haag (getekend formulier
//    26 jul 2026). Pro (leerkracht) valt buiten die toezegging.
//    Zie partnerCode.js (partnerFamilieTot) + useSubscription.js (partnerGrant).
//
// Nu (2026) staat ALLES gratis open. We labelen de betaalde extra's alvast met
// een <ProBadge> zodat (a) gebruikers zien wat ze straks "winnen" en (b) wij
// via track() meten hoe vaak elke feature gezien + gebruikt wordt — input
// voor de definitieve afbakening bij de lancering (jan 2027).

import { track } from "../utils.js";

// De drie betaalde lagen. Richtprijzen — definitief vóór de lancering.
export const LAGEN = {
  familie: {
    id: "familie",
    naam: "Familie",
    icon: "👨‍👩‍👧",
    wie: "voor ouders",
    prijs: "richtprijs € 4,95 p/mnd of € 39 p/jaar — per gezín, niet per kind",
    kort: "Volg en help al je kinderen — één prijs per gezin",
  },
  leerkracht: {
    id: "leerkracht",
    naam: "Pro",
    icon: "🏫",
    wie: "voor leerkrachten & bijlesdocenten",
    prijs: "richtprijs € 6,95 p/mnd of € 59 p/jaar",
    kort: "Eigen logo op toetsen + rapportage voor je hele klas",
  },
  tegoed: {
    id: "tegoed",
    naam: "Kwartier-tegoed",
    icon: "⏱️",
    wie: "los bijkopen — geen abonnement",
    prijs: "prijs per kwartier maken we vóór de lancering bekend",
    kort: "Losse kwartieren extra AI-bijles — ook leuk als cadeautje",
  },
};

export function getLaag(id) {
  return LAGEN[id] || null;
}

// Het model in copy — hergebruik overal zodat de belofte consistent blijft
// (conform feedback_gratis_belofte_gekwalificeerd: nooit "altijd gratis").
export const PRO_MODEL = {
  nu: "Nu nog gratis",
  belofte: "Gratis & onbeperkt t/m 2026",
  later: "Vanaf 2027 een betaalde extra",
  kort: "Nu gratis · vanaf 2027 betaald",
  uitleg:
    "De basis (oefenen + uitleg op 3 niveaus) blijft altijd gratis. " +
    "Vanaf 2027 zijn er drie extra's: Familie (één klein bedrag per gezín — " +
    "voortgang volgen, weekrapport, examen-simulatie), Pro voor leerkrachten " +
    "(eigen logo op toetsen + klasrapportage) en los kwartier-tegoed voor " +
    "extra AI-bijles — dat laatste zonder abonnement: je betaalt alleen " +
    "voor wat je écht gebruikt.",
};

// De betaalde extra's. `laag`: 'familie' | 'leerkracht' | 'tegoed'.
// `status`: 'live' = nu al in de app (gratis preview), 'binnenkort' = roadmap.
//
// Leidend principe (Leerkwartier-test): alles wat een 10-jarige nodig heeft om
// iets BETER te BEGRIJPEN blijft gratis. Betaald = extra's eromheen (AI-bijles-
// tegoed, ouder-inzicht, rapporten, examen-simulatie, leerkracht-tools).
export const PRO_FEATURES = {
  "ai-tutor": {
    id: "ai-tutor",
    icon: "🤖",
    label: "AI-bijles",
    laag: "tegoed",
    blurb:
      "Een slimme bijles-helper die je vraag beantwoordt en de stof op jouw " +
      "manier uitlegt. Een basis-portie blijft gratis; extra tijd koop je " +
      "straks los bij per kwartier.",
    status: "live",
  },
  "parent-dashboard": {
    id: "parent-dashboard",
    icon: "📊",
    label: "Ouder-inzicht",
    laag: "familie",
    blurb:
      "Volg je gekoppelde kind: scores en voortgang per vak over tijd, plus " +
      "een Doorstroomtoets-verwachting op basis van het oefenen.",
    status: "live",
  },
  "weekrapport": {
    id: "weekrapport",
    icon: "📧",
    label: "Weekrapport per mail",
    laag: "familie",
    blurb:
      "Elke week een kort overzicht in je mail: wat je kind deed en waar het " +
      "nog vastloopt.",
    status: "binnenkort",
  },
  "exam-mode": {
    id: "exam-mode",
    icon: "⏱️",
    label: "Examen-simulatie",
    laag: "familie",
    blurb:
      "Oefen een examen onder echte omstandigheden — met tijdklok en een " +
      "eindrapport dat per onderdeel laat zien wat je nog moet oefenen. " +
      "(Oefenen mét uitleg blijft gewoon gratis.)",
    status: "binnenkort",
  },
  "kwartierplan": {
    id: "kwartierplan",
    icon: "🧭",
    label: "Kwartierplan",
    laag: "familie",
    blurb:
      "Een persoonlijk stappenplan: we kijken waar je staat, maken een " +
      "weekplan van kwartiertjes en houden bij hoe het gaat.",
    status: "binnenkort",
  },
  "teacher-tools": {
    id: "teacher-tools",
    icon: "🏫",
    label: "Leerkracht-extra's",
    laag: "leerkracht",
    blurb:
      "Je eigen (school)logo op toetsen en oefenbladen, onbeperkt toetsen " +
      "maken, voortgang per leerling inzien en resultaten exporteren — voor " +
      "je hele klas. Leerpaden klaarzetten blijft gratis.",
    status: "live",
  },
};

// Wat ALTIJD gratis blijft (de basis). Voor de prijzen-pagina-uitleg.
export const PRO_GRATIS_BASIS = [
  "Onbeperkt oefenen — alle leerpaden, vakken en niveaus",
  "Uitleg op 3 niveaus (basis / simpeler / nog simpeler)",
  "De gratis Doorstroomtoets-oefentoets + je score",
  "Echte examenvragen oefenen mét uitleg",
  "Vraag van de dag & het scorebord",
  "Leerkrachten: leerpaden klaarzetten voor je klas via een deelcode",
];

export function getProFeature(id) {
  return PRO_FEATURES[id] || null;
}

// --- Meten (Mark: "weten wij hoe vaak het gebruikt word") -------------------

// "Gezien" 1× per sessie per feature loggen — anders spamt het de events-tabel.
const _seen = new Set();

export function trackProSeen(featureId) {
  if (!featureId || _seen.has(featureId)) return;
  _seen.add(featureId);
  try { track("pro_feature_seen", { feature: featureId }); } catch {}
}

// "Gebruikt" = op het moment dat iemand de feature echt inzet (AI-vraag
// stelt, ouder-dashboard opent, examen-simulatie start, …). Dit is het signaal
// waarmee we straks de afbakening bepalen. Bewust NIET gededupliceerd — we
// willen frequentie zien.
export function trackProUse(featureId, extra = {}) {
  try { track("pro_feature_used", { feature: featureId, ...extra }); } catch {}
}

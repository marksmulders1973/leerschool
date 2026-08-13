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
//  - Verbruikswaarde (extra AI-bijles-tijd) → los KWARTIER-TEGOED.
//    ⛔ ON-HOLD (Mark 8 aug: "waarschijnlijk een slecht idee"; herbevestigd
//    13 aug "geen losse eindjes") — uit ALLE gebruikers-teksten; alleen terug
//    bij bewezen vraag (PRIJSPLAN §2b). Cadeaukaart idem.
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

// De twee betaalde lagen. Richtprijzen — definitief vóór de lancering.
export const LAGEN = {
  familie: {
    id: "familie",
    naam: "Familie",
    icon: "👨‍👩‍👧",
    wie: "voor thuis",
    // Drie smaken (Mark 9 aug 2026, zie docs/PRIJSPLAN.md §2b). De Seizoenspas
    // is het anker: één keer betalen, stopt vanzelf op 31 juli — bewust GEEN
    // automatische verlenging (merkbelofte, nooit stiekem doorlopen).
    prijs:
      "richtprijs € 4,95 p/mnd · 🎟️ Seizoenspas € 24,95 éénmalig (het hele " +
      "toetsjaar, stopt vanzelf) · € 39 p/jaar — per gezín, niet per kind",
    kort: "Volg en help al je kinderen — één prijs per gezin",
  },
  // School-first (Mark 7 aug 2026, zie docs/PRIJSPLAN.md §3): een leerkracht
  // in loondienst koopt niet privé — de school is de koper (licentie, factuur,
  // verwerkersovereenkomst); alleen de zzp-bijlesdocent koopt individueel.
  // Voor de juf zelf blijft alles wat zij met haar klas doet gratis.
  leerkracht: {
    id: "leerkracht",
    naam: "Pro",
    icon: "🏫",
    wie: "voor scholen & bijlesdocenten",
    prijs: "school € 99 per klas p/jaar · bijlesdocent richtprijs € 6,95 p/mnd of € 59 p/jaar",
    kort: "Schooldashboard, eigen logo op toetsen en rapportage — voor leerkrachten blijft lesgeven met Leerkwartier gratis",
  },
  // (Kwartier-tegoed verwijderd uit de etalage — ON-HOLD, zie kop van dit
  // bestand. LAAG_KLEUREN.tegoed blijft staan voor als hij ooit terugkomt.)
};

export function getLaag(id) {
  return LAGEN[id] || null;
}

// Tier-kleuren (Mark 9 aug 2026: "met stippen of een kleurtje aangeven wat
// onder gratis valt en wat je mist zonder Familie"). Altijd kleur MÉT het
// woord erbij tonen — kleurenblinde ouders en kinderen van 10 moeten het
// zonder de kleur ook snappen. gratis = groen, familie = goud, leerkracht
// (Pro/school) = blauw, tegoed = paars.
export const LAAG_KLEUREN = {
  gratis: { dot: "#69f0ae", tekst: "#69f0ae", rand: "rgba(105,240,174,0.45)", vlak: "rgba(105,240,174,0.10)" },
  familie: { dot: "#ffd54f", tekst: "#ffce80", rand: "rgba(255,183,77,0.5)", vlak: "rgba(255,183,77,0.14)" },
  leerkracht: { dot: "#64b5f6", tekst: "#8ec9ff", rand: "rgba(66,165,245,0.5)", vlak: "rgba(66,165,245,0.12)" },
  tegoed: { dot: "#ce93d8", tekst: "#e1bee7", rand: "rgba(171,71,188,0.5)", vlak: "rgba(171,71,188,0.12)" },
};

// Het model in copy — hergebruik overal zodat de belofte consistent blijft
// (conform feedback_gratis_belofte_gekwalificeerd: nooit "altijd gratis").
export const PRO_MODEL = {
  nu: "Nu nog gratis",
  belofte: "Gratis & onbeperkt t/m 2026",
  later: "Vanaf 2027 een betaalde extra",
  kort: "Nu gratis · vanaf 2027 betaald",
  uitleg:
    "De basis (oefenen + uitleg op 3 niveaus) blijft gratis — ook voor " +
    "leerkrachten die met hun klas oefenen. " +
    "Vanaf 2027 zijn er twee extra's: Familie (één klein bedrag per gezín — " +
    "voortgang volgen, weekrapport, hele toets oefenen met de klok; ook als " +
    "Seizoenspas: één keer betalen voor het hele toetsjaar, stopt vanzelf) en Pro voor scholen " +
    "en bijlesdocenten (schooldashboard, eigen logo op toetsen, klasrapportage).",
};

// De betaalde extra's. `laag`: 'familie' | 'leerkracht' | 'tegoed'.
// `status`: 'live' = nu al in de app (gratis preview), 'binnenkort' = roadmap.
//
// Leidend principe (Leerkwartier-test): alles wat een 10-jarige nodig heeft om
// iets BETER te BEGRIJPEN blijft gratis. Betaald = extra's eromheen (AI-bijles-
// tegoed, ouder-inzicht, rapporten, examen-simulatie, leerkracht-tools).
export const PRO_FEATURES = {
  // T3-besluit (Claude namens Mark, 9 aug 2026): gratis = kleine basis-portie
  // per dag · Familie = onbeperkt · Kwartier-tegoed = extra los bijkopen
  // bovenop gratis (ook als cadeautje). ai-tutor hoort dus bij FAMILIE
  // (sluit aan op FEATURE_GATES + VonkPagina/FamilieHub "Vonk onbeperkt");
  // het losse tegoed is een eigen entry hieronder.
  "ai-tutor": {
    id: "ai-tutor",
    icon: "🤖",
    label: "AI-bijles (Vonk)",
    laag: "familie",
    blurb:
      "De rustige AI-bijlesdocent die de stof op jouw manier uitlegt. Gratis " +
      "krijg je elke dag een kleine basis-portie; met Familie is Vonk " +
      "onbeperkt.",
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
    label: "Hele toets oefenen met de klok",
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
  // ── Gate-only ids (config.js FEATURE_GATES) — entries hier zorgen dat de
  //    LockedPreview straks de júiste laag-kleur toont (9 aug id-sync). ──
  "unlimited-paths": {
    id: "unlimited-paths",
    icon: "🛤️",
    label: "Onbeperkt oefenen per dag",
    laag: "familie",
    blurb: "Zoveel onderwerpen per dag oefenen als je wilt — zonder daglimiet.",
    status: "binnenkort",
  },
  "voorkennis-keten": {
    id: "voorkennis-keten",
    icon: "🔗",
    label: "Voorkennis-keten",
    laag: "familie",
    blurb: "Zie per examenvraag welke basiskennis eronder ligt — en oefen precies de zwakste schakel eerst.",
    status: "binnenkort",
  },
  "school-dashboard": {
    id: "school-dashboard",
    icon: "🏫",
    label: "Schooldashboard",
    laag: "leerkracht",
    blurb: "Voortgang van je hele klas in één overzicht, met export voor het rapportgesprek.",
    status: "binnenkort",
  },
  "generate-questions": {
    id: "generate-questions",
    icon: "✏️",
    label: "AI-vragen-generator",
    laag: "leerkracht",
    blurb: "Laat de AI extra oefenvragen maken bij jouw onderwerp — voor toetsen en werkbladen.",
    status: "live",
  },
  "werkblad-print": {
    id: "werkblad-print",
    icon: "🖨️",
    label: "Werkbladen printen",
    laag: "leerkracht",
    blurb:
      "Print het werkblad (12 opgaven + antwoordblad) met je eigen " +
      "(school)logo erop. Digitaal oefenen via de deelcode blijft gratis.",
    status: "live",
  },
  "teacher-tools": {
    id: "teacher-tools",
    icon: "🏫",
    label: "Leerkracht-extra's",
    laag: "leerkracht",
    blurb:
      "Je eigen (school)logo op toetsen en oefenbladen, onbeperkt toetsen " +
      "maken, onbeperkt werkbladen printen (12 opgaven + antwoordblad, met " +
      "QR om thuis verder te oefenen), voortgang per leerling inzien en " +
      "resultaten exporteren — voor je hele klas. Leerpaden klaarzetten " +
      "blijft gratis.",
    status: "live",
  },
};

// Wat ALTIJD gratis blijft (de basis). Voor de prijzen-pagina-uitleg.
export const PRO_GRATIS_BASIS = [
  "Onbeperkt oefenen — alle leerpaden, vakken en niveaus",
  "Uitleg op 3 niveaus (basis / simpeler / nog simpeler)",
  "De gratis Doorstroomtoets-oefentoets + je score",
  "Echte examenvragen oefenen mét uitleg",
  "Echte VMBO-examens inzien én downloaden als PDF",
  "Printbare oefenbladen mee naar huis (oefenpakket, leesladder, tafels, dictees)",
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

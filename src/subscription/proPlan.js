// Pro-plan — gebruikersgerichte definitie (Mark 2026-06-06).
//
// Doel van dit bestand: één bron van waarheid voor WAT "Pro" straks is, in
// woorden die ouders/leerkrachten snappen. Losgekoppeld van de technische
// FEATURE_GATES (config.js) en van de OUDE abonnement-pricing — want het
// verdienmodel is sinds 2026-06-06: gratis & onbeperkt t/m 2026, en vanaf
// 2027 koop je Pro-extra's PER KWARTIER bij (geen abonnement, geen stil-
// zwijgende verlenging — je betaalt alleen voor wat je écht gebruikt).
//
// Nu (2026) staat ALLES gratis open. We labelen de Pro-features alvast met
// een <ProBadge> zodat (a) gebruikers zien wat ze straks "winnen" en (b) wij
// via track() meten hoe vaak elke Pro-feature gezien + gebruikt wordt — input
// voor de afbakening welke extra's straks echt betaald worden.

import { track } from "../utils.js";

// Het model in copy — hergebruik overal zodat de belofte consistent blijft
// (conform feedback_gratis_belofte_gekwalificeerd: nooit "altijd gratis").
export const PRO_MODEL = {
  nu: "Nu nog gratis",
  belofte: "Gratis & onbeperkt t/m 2026",
  later: "Vanaf 2027 een Pro-extra die je per kwartier bijkoopt",
  kort: "Nu gratis · vanaf 2027 per kwartier",
  uitleg:
    "De basis (oefenen + uitleg op 3 niveaus) blijft altijd gratis. " +
    "Pro-extra's koop je vanaf 2027 per kwartier bij — geen abonnement, " +
    "geen automatische verlenging. Je betaalt alléén voor wat je écht gebruikt.",
};

// De Pro-extra's. `status`: 'live' = nu al in de app (gratis preview),
// 'binnenkort' = op de roadmap. `kern: false` = nooit gratis-basis.
//
// Leidend principe (Leerkwartier-test): alles wat een 10-jarige nodig heeft om
// iets BETER te BEGRIJPEN blijft gratis. Pro = extra's eromheen (AI-bijles,
// ouder-inzicht, rapporten, examen-simulatie, leerkracht-tools).
export const PRO_FEATURES = {
  "ai-tutor": {
    id: "ai-tutor",
    icon: "🤖",
    label: "AI-bijles",
    blurb:
      "Een slimme bijles-helper die je vraag beantwoordt en de stof op jouw " +
      "manier uitlegt — zo vaak je wilt.",
    status: "live",
  },
  "parent-dashboard": {
    id: "parent-dashboard",
    icon: "📊",
    label: "Ouder-inzicht",
    blurb:
      "Volg je gekoppelde kind: scores en voortgang per vak over tijd, plus " +
      "een Doorstroomtoets-verwachting op basis van het oefenen.",
    status: "live",
  },
  "weekrapport": {
    id: "weekrapport",
    icon: "📧",
    label: "Weekrapport per mail",
    blurb:
      "Elke week een kort overzicht in je mail: wat je kind deed en waar het " +
      "nog vastloopt.",
    status: "binnenkort",
  },
  "exam-mode": {
    id: "exam-mode",
    icon: "⏱️",
    label: "Examen-simulatie",
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
    blurb:
      "Een persoonlijk stappenplan: we kijken waar je staat, maken een " +
      "weekplan van kwartiertjes en houden bij hoe het gaat.",
    status: "binnenkort",
  },
  "teacher-tools": {
    id: "teacher-tools",
    icon: "🏫",
    label: "Leerkracht-extra's",
    blurb:
      "Onbeperkt toetsen maken, voortgang per leerling inzien en resultaten " +
      "exporteren — voor je hele klas.",
    status: "live",
  },
};

// Wat ALTIJD gratis blijft (de basis). Voor de Pro-pagina-uitleg.
export const PRO_GRATIS_BASIS = [
  "Onbeperkt oefenen — alle leerpaden, vakken en niveaus",
  "Uitleg op 3 niveaus (basis / simpeler / nog simpeler)",
  "De gratis Doorstroomtoets-oefentoets + je score",
  "Echte examenvragen oefenen mét uitleg",
  "Vraag van de dag & het scorebord",
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

// "Gebruikt" = op het moment dat iemand de Pro-feature echt inzet (AI-vraag
// stelt, ouder-dashboard opent, examen-simulatie start, …). Dit is het signaal
// waarmee we straks de afbakening bepalen. Bewust NIET gededupliceerd — we
// willen frequentie zien.
export function trackProUse(featureId, extra = {}) {
  try { track("pro_feature_used", { feature: featureId, ...extra }); } catch {}
}

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
//    → FAMILIE (per gezin). (Schoollicentie vervallen — zie 2 okt 2026 hieronder.)
//  - Verbruikswaarde (extra AI-bijles-tijd) → los KWARTIER-TEGOED.
//    ⛔ ON-HOLD (Mark 8 aug: "waarschijnlijk een slecht idee"; herbevestigd
//    13 aug "geen losse eindjes") — uit ALLE gebruikers-teksten; alleen terug
//    bij bewezen vraag (PRIJSPLAN §2b). Cadeaukaart idem.
//  - De leer-basis blijft gratis (merkbelofte, max 5 jaar vooruit beloven —
//    nu t/m 2031, telkens verlengd); partner-codes (Leergeld,
//    Ooievaarspas, voedselbanken) geven het Familie-niveau gratis.
//    ⚖️ Ooievaarspas = BLIJVEND gratis Familie, zonder plekken-limiet —
//    schriftelijk toegezegd aan gemeente Den Haag (getekend formulier
//    26 jul 2026).
//  - 2 okt 2026 (Mark): SCHOLEN GRATIS — gegarandeerd t/m 2031. Alles wat een
//    leerkracht met de klas doet (oefenen, onbeperkt toetsen, werkbladen,
//    klaarzetten, voortgang per leerling, digibord, eigen schoollogo, export)
//    is gratis; verwerkersovereenkomst gratis op aanvraag. Betaald blijven
//    alleen Familie (thuis) en organisaties die Familie-plekken voor gezinnen
//    kopen. Interne ids (laag "leerkracht", tier teacher_pro) blijven staan.
//    Zie partnerCode.js (partnerFamilieTot) + useSubscription.js (partnerGrant).
//
// Nu (2026) staat ALLES gratis open. We labelen de betaalde extra's alvast met
// een <ProBadge> zodat (a) gebruikers zien wat ze straks "winnen" en (b) wij
// via track() meten hoe vaak elke feature gezien + gebruikt wordt — input
// voor de definitieve afbakening bij de lancering (jan 2027).

import { track } from "../utils.js";

// De lagen. Familie = betaald (richtprijs, definitief vóór de lancering);
// leerkracht = scholen, gratis t/m 2031 (2 okt 2026).
export const LAGEN = {
  familie: {
    id: "familie",
    naam: "Familie",
    icon: "👨‍👩‍👧",
    wie: "voor thuis",
    // Eén product (Mark 30 sep 2026): € 39 voor 12 maanden vanaf betalen, één keer
    // betalen, stopt vanzelf — bewust GEEN automatische verlenging (merkbelofte).
    // Verlengen kiest het gezin zelf (€ 31). Seizoenspas geschrapt.
    prijs: "€ 39 voor 12 maanden — één keer betalen, stopt vanzelf · per gezín, niet per kind",
    kort: "Volg en help je kinderen (tot 3) — één prijs per gezin",
  },
  // School-first (Mark 7 aug 2026, zie docs/PRIJSPLAN.md §3): een leerkracht
  // in loondienst koopt niet privé — de school is de koper (licentie, factuur,
  // verwerkersovereenkomst). Voor de juf zelf blijft alles wat zij met haar
  // klas doet gratis.
  // 22 sep 2026 (Mark): "Pro" als consumentenlaag geschrapt. Naar buiten zijn
  // er twee lagen, Gratis en Familie; de school krijgt één regel ("Bent u een
  // school?") en een licentie OP AANVRAAG — de prijs komt uit de eerste
  // schoolgesprekken, niet uit een kaartje. Bijlesdocent-Pro (€ 6,95) vervalt:
  // nul klanten, alleen complexiteit.
  // 2 okt 2026 (Mark): schoollicentie VERVALLEN — scholen gratis, gegarandeerd
  // t/m 2031 (0 klanten, schrok directies af; school = de ingang naar gezinnen).
  // Id "leerkracht" blijft voor kleuren/badges.
  leerkracht: {
    id: "leerkracht",
    naam: "School",
    icon: "🏫",
    wie: "voor scholen",
    prijs: "gratis — gegarandeerd t/m 2031 · verwerkersovereenkomst gratis op aanvraag",
    kort: "Voor scholen is Leerkwartier gratis, zodat leerkrachten het ook in de klas kunnen gebruiken — gegarandeerd t/m 2031",
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
// (conform feedback_gratis_belofte_gekwalificeerd: nooit "altijd gratis";
// gratis-garantie max 5 jaar vooruit — nu t/m 2031, telkens verlengd).
export const PRO_MODEL = {
  nu: "Nu nog gratis",
  belofte: "Gratis & onbeperkt t/m 2026",
  later: "Vanaf 2027 een betaalde extra",
  kort: "Nu gratis · vanaf 2027 betaald",
  uitleg:
    "De basis (oefenen + uitleg op 3 niveaus) blijft gratis — gegarandeerd " +
    "t/m 2031, en die belofte verlengen we telkens — ook voor " +
    "leerkrachten die met hun klas oefenen. Voor scholen is Leerkwartier " +
    "gratis (gegarandeerd t/m 2031), zodat leerkrachten het ook in de klas " +
    "kunnen gebruiken. Vanaf 2027 is er één extra voor thuis: Familie (één " +
    "klein bedrag per gezín — voortgang volgen, weekrapport, hele toets " +
    "oefenen met de klok; € 39 voor 12 maanden, één keer betalen, stopt vanzelf).",
};

// De betaalde extra's. `laag`: 'familie' | 'leerkracht' | 'tegoed'.
// `status`: 'live' = nu al in de app (gratis preview), 'binnenkort' = roadmap.
//
// Leidend principe (Leerkwartier-test): alles wat een 10-jarige nodig heeft om
// iets BETER te BEGRIJPEN blijft gratis (t/m zeker 2031, belofte schuift
// telkens op — nooit >5 jaar vooruit beloven). Betaald = extra's eromheen (AI-bijles-
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
      "Elke vrijdag een kort overzicht in je mail: wat je kind deed en waar het " +
      "nog vastloopt.",
    status: "live",
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
    // 3 okt 2026: live — Stap 3 op /cito opent weer CitoLeerpadToets simulatieMode.
    status: "live",
  },
  "kwartierplan": {
    id: "kwartierplan",
    icon: "🧭",
    label: "Kwartierplan",
    laag: "familie",
    blurb:
      "Een persoonlijk stappenplan: we kijken waar je staat, maken een " +
      "weekplan van kwartiertjes en houden bij hoe het gaat.",
    // 3 okt 2026: live — doel + startfoto + weekplan (5 kwartiertjes, klaarzetten, vinkjes).
    status: "live",
  },
  "dictee-school": {
    id: "dictee-school",
    icon: "📋",
    label: "Dictee met de woorden van school",
    laag: "familie",
    blurb:
      "Plak de dicteewoorden van deze week erin (uit Parro, de mail of het " +
      "papiertje). Charley leest ze voor en je kind oefent precies wat vrijdag " +
      "op school komt. (Het dictee met onze eigen woorden blijft gratis.)",
    status: "live",
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
    // 3 okt 2026: niet tonen — botste met "Onbeperkt oefenen" in PRO_GRATIS_BASIS
    // (tip andere AI via Mark: te veel "binnenkort" in Familie). Alleen gate-id.
    verborgen: true,
  },
  "voorkennis-keten": {
    id: "voorkennis-keten",
    icon: "🔗",
    label: "Voorkennis-keten",
    laag: "familie",
    blurb: "Zie per examenvraag welke basiskennis eronder ligt — en oefen precies de zwakste schakel eerst.",
    status: "live",
    // 3 okt 2026: werkt al sinds mei in de leerpaden en is GRATIS (oefen-modus) →
    // niet als Familie-extra tonen; staat nu in PRO_GRATIS_BASIS.
    verborgen: true,
  },
  "school-dashboard": {
    id: "school-dashboard",
    icon: "🏫",
    label: "Schooldashboard",
    laag: "leerkracht",
    blurb: "Voortgang van je hele klas in één overzicht, met export voor het rapportgesprek. Voor scholen gratis, gegarandeerd t/m 2031.",
    status: "binnenkort",
    // 3 okt 2026: niet tonen — voortgang per leerling + export zit al in "Alles voor de klas".
    verborgen: true,
  },
  // (Gezins-plekken cadeau (15 aug 2026) VERVALLEN op 2 okt 2026: hoorde bij
  // de betaalde schoollicentie, die er niet meer is. Gezinnen met een krappe
  // beurs krijgen Familie via gemeenten/stichtingen — partner-codes.)
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
      "(school)logo erop. Voor scholen gratis, gegarandeerd t/m 2031.",
    status: "live",
  },
  "teacher-tools": {
    id: "teacher-tools",
    icon: "🏫",
    label: "Alles voor de klas",
    laag: "leerkracht",
    blurb:
      "Je eigen (school)logo op toetsen en oefenbladen, onbeperkt toetsen " +
      "maken, onbeperkt werkbladen printen (12 opgaven + antwoordblad, met " +
      "QR om thuis verder te oefenen), oefeningen klaarzetten, voortgang per " +
      "leerling inzien en resultaten exporteren — voor je hele klas. Voor " +
      "scholen gratis, gegarandeerd t/m 2031.",
    status: "live",
  },
};

// Wat gratis blijft (de basis; gegarandeerd t/m 2031, belofte schuift telkens
// op — nooit >5 jaar vooruit beloven). Voor de prijzen-pagina-uitleg.
export const PRO_GRATIS_BASIS = [
  "Onbeperkt oefenen — alle leerpaden, vakken en niveaus",
  "Uitleg op 3 niveaus (basis / simpeler / nog simpeler)",
  "De gratis Doorstroomtoets-oefentoets + je score",
  "Echte examenvragen oefenen mét uitleg",
  "Voorkennis-keten: per examenvraag zien welke basiskennis eronder ligt",
  "Echte VMBO-examens inzien én downloaden als PDF",
  "Printbare oefenbladen mee naar huis (oefenpakket, leesladder, tafels, dictees)",
  "Vraag van de dag & het scorebord",
  // 2 okt 2026: scholen gratis t/m 2031 — de klas-kant hoort bij de basis.
  "Leerkrachten en scholen: alles voor de klas — oefeningen klaarzetten, onbeperkt toetsen, werkbladen, voortgang per leerling, digibord en eigen schoollogo",
];

// 3 okt 2026: wat in de lijst komt (live) en wat als één regel "komt erbij" (binnenkort).
export function zichtbareFeatures(laagId) {
  const alle = Object.values(PRO_FEATURES).filter((f) => f.laag === laagId && !f.verborgen);
  return { live: alle.filter((f) => f.status === "live"), komt: alle.filter((f) => f.status !== "live") };
}

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

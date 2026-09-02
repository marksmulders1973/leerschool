// zooEconomy — de muntjes-logica van Mijn Park.
//
// Verdienen (voorspelbaar + verdiend, GEEN gok/loot-boxes):
//  - dagelijks inloggen: +basis, met oplopende streak-bonus
//  - 15 min leren voltooid (de canonieke kwartier-mijlpaal): +vast bedrag
//
// Uitgeven aan dieren/attracties komt in de winkel (stap 4).
import { getAsset } from "./AssetRegistry";

// Startbudget bewust laag (Mark 22 aug, park-megabuild #5): met 200 kocht je op
// dag 1 al de duurste attractie → sparen bestond niet. Nu genoeg voor 1 dier +
// wat decor, zodat er een échte spaar-boog ontstaat (kort/middel/lang doel).
export const START_COINS = 80;
export const LOGIN_BASE = 5;            // basis voor dagelijks inloggen
export const LOGIN_STREAK_BONUS_MAX = 7; // +1 per streakdag, tot dit maximum
// 12-agent-review 2 jul: was 8, maar kramen/parkinkomsten leverden méér op
// dan leren — "leren = véél meer munten" moet ook echt waar zijn. Nu is het
// kwartier de grootste enkele dagbron.
export const KWARTIER_REWARD = 25;      // 15 min leren voltooid
export const WANDEL_REWARD = 15;        // wandeling (3 stops, 3 vragen) helemaal af — sprint 3, 2 sep 2026

// Park-groei: elk verblijf levert muntjes per dag op (meer park = meer muntjes).
export const INKOMST_PER_VERBLIJF = 2;  // per dier/verblijf per dag
export const INKOMST_PER_BABY = 1;      // extra per jonkie per dag
export const MAX_DAGEN_INKOMST = 3;     // offline-opbrengst gecapt op 3 dagen
// 🧢 Parkinkomen-plafond per dag (Mark 22 aug, park-megabuild #5): een groot
// park verdiende ongecapt 60+/dag = 2,5× de kwartier-beloning → rondhangen werd
// lonender dan leren. Nu is het passieve inkomen gecapt onder de kwartier-
// beloning, zodat LEREN de grootste dagbron blijft (de koninklijke route).
export const PARK_INKOMST_CAP_PER_DAG = 20;

// Loonkosten: een kraam heeft een verkoper die je elke dag salaris kost. Zo
// leert het kind "vaste kosten" — je betaalt het óók op een rustige dag. Zacht
// gehouden: het verlaagt je dagopbrengst maar maakt je nooit failliet (de netto
// dagopbrengst wordt op 0 afgekapt, nooit negatief). In het echt kost een
// verkoper ~€60-70 per dag (zie het kraam-dagoverzicht voor die vergelijking).
export const VERKOPER_LOON = 6;         // muntjes per kraam per dag
export const VERKOPER_LOON_EURO = 70;   // ter vergelijking: echt dagloon in euro's

// Heeft dit item een verkoper (is het een kraam)? Kramen hebben een `voorziet`.
function isKraam(assetId) {
  const a = getAsset(assetId);
  return !!(a && a.voorziet);
}
export function aantalKramen(items) {
  return (items || []).filter((it) => isKraam(it.assetId)).length;
}
// Totale loonkost per dag = aantal kramen × het dagloon van één verkoper.
export function loonkostenPerDag(items) {
  return aantalKramen(items) * VERKOPER_LOON;
}
// Jonkies: per nieuwe dag kans dat een verblijf er een baby bij krijgt.
export const BABY_KANS = 0.35;
export const BABY_KANS_GEVOERD = 0.6;   // goed verzorgd (recent gevoerd) → eerder jonkies
export const MAX_BABIES = 3;            // per verblijf
export const BABY_BONUS = 5;            // eenmalige muntjes bij een geboorte
export const VERWAARLOOS_DAGEN = 3;     // zoveel dagen niet voeren → een dier verstopt zich (was: liep weg)

function todayStr(d = new Date()) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function vandaag() {
  return todayStr();
}

// Aantal hele dagen tussen twee datums (null/onbekend → 1).
export function dagenVerschil(fromStr, toStr = todayStr()) {
  if (!fromStr) return 1;
  const a = new Date(`${fromStr}T00:00:00`);
  const b = new Date(`${toStr}T00:00:00`);
  const d = Math.round((b - a) / 86400000);
  return d > 0 ? d : 0;
}

// Wat je park per dag oplevert. Dieren, gebouwen en attracties trekken
// bezoekers → muntjes; decor (paden/hekken/bomen) levert niets op. Een asset met
// een eigen `inkomst`-veld (bv. de donatiebox) levert dat vaste bedrag per dag.
export function inkomstenPerDag(items, kindVan = () => "animal") {
  return (items || []).reduce((s, it) => {
    // Verstopt dier (te lang geen hooi) levert niets op tot je het terugvindt.
    if (it && it.verstopt) return s;
    const a = getAsset(it.assetId);
    if (a && a.inkomst) return s + a.inkomst;
    const k = kindVan(it.assetId);
    if (k === "animal") return s + INKOMST_PER_VERBLIJF + (it.babies || 0) * INKOMST_PER_BABY;
    if (k === "building" || k === "attraction") return s + INKOMST_PER_VERBLIJF;
    return s;
  }, 0);
}

// Recent gevoerd? Verzorging is PER DIER (it.fed = datum waarop dit dier voor het
// laatst hooi kreeg). Recent gevoerd = vandaag of gisteren.
export function dierRecentGevoerd(it) {
  return it && it.fed && dagenVerschil(it.fed) <= 1;
}

// Laat (op een nieuwe dag) elk dier kans maken op een jonkie. Goed verzorgde
// dieren (recent gevoerd) krijgen sneller een jonkie. Gebouwen krijgen niks.
export function groeiBabies(items, isDier = () => true) {
  let births = 0;
  const layout = (items || []).map((it) => {
    if (!isDier(it.assetId)) return it;
    const b = it.babies || 0;
    const kans = dierRecentGevoerd(it) ? BABY_KANS_GEVOERD : BABY_KANS;
    if (b < MAX_BABIES && Math.random() < kans) {
      births++;
      return { ...it, babies: b + 1 };
    }
    return it;
  });
  return { layout, births };
}

// Is dit dier verstopt (te lang niet gevoerd)?
export function dierIsVerstopt(it) {
  return !!(it && it.verstopt);
}

// Verzorging per dier (Mark 22 aug, park-megabuild-advies #1 — unaniem uit de
// review): een GEKOCHT dier dat >= VERWAARLOOS_DAGEN geen hooi kreeg LOOPT NIET
// MEER WEG (dat strafte juist het kind dat na een weekend/vakantie terugkomt =
// churn-gif), maar VERSTOPT zich: het wordt sip/grijs en levert 0 op tot je het
// één keer voert → dan komt het blij terug (mini-viering in de UI). Zo blijft de
// verzorg-les intact zonder permanent verlies. Starter-dieren (price 0) verstoppen
// zich nooit. Een dier dat weer op tijd gevoerd is (verstopt maar recent fed)
// wordt hier ook weer zichtbaar. Geeft nieuwe indeling + aantal nieuw-verstopte
// dieren + hun namen.
export function verwaarloosCheck(items, isDier = () => true) {
  let verstopt = 0;
  const verstoptIds = []; // wíé zich verstopte (voor een melding met naam)
  const layout = (items || []).map((it) => {
    if (!isDier(it.assetId)) return it;
    if ((it.price || 0) <= 0) return it; // starter-dier → nooit verstopt
    const dagen = it.fed ? dagenVerschil(it.fed) : 999;
    if (dagen >= VERWAARLOOS_DAGEN) {
      if (!it.verstopt) { verstopt++; verstoptIds.push(it.assetId); }
      return { ...it, verstopt: true };
    }
    // Weer op tijd gevoerd → niet meer verstopt (vangnet; voeren wist het ook direct).
    if (it.verstopt) return { ...it, verstopt: false };
    return it;
  });
  return { layout, verstopt, verstoptIds };
}

function isYesterday(dateStr, today = todayStr()) {
  if (!dateStr) return false;
  const d = new Date(`${today}T00:00:00`);
  d.setDate(d.getDate() - 1);
  return dateStr === todayStr(d);
}

// Dagelijkse-inlog-beloning. Eén keer per kalenderdag. Streak loopt op als
// gisteren ook ingelogd is, anders reset naar 1.
export function applyDailyLogin(state) {
  const today = todayStr();
  if (state.last_login === today) return { state, gained: 0 };
  const newStreak = isYesterday(state.last_login, today) ? (state.streak || 0) + 1 : 1;
  const bonus = Math.min(LOGIN_STREAK_BONUS_MAX, Math.max(0, newStreak - 1));
  const gained = LOGIN_BASE + bonus;
  return {
    state: { ...state, coins: (state.coins || 0) + gained, streak: newStreak, last_login: today },
    gained,
  };
}

// Kwartier-beloning: alleen als het dagdoel (15 min) vandaag voltooid is en nog
// niet uitbetaald vandaag.
export function applyKwartierReward(state, goalCompletedToday) {
  const today = todayStr();
  if (!goalCompletedToday || state.last_kwartier_date === today) return { state, gained: 0 };
  return {
    state: { ...state, coins: (state.coins || 0) + KWARTIER_REWARD, last_kwartier_date: today },
    gained: KWARTIER_REWARD,
  };
}

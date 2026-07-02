// zooEconomy — de muntjes-logica van Mijn Park.
//
// Verdienen (voorspelbaar + verdiend, GEEN gok/loot-boxes):
//  - dagelijks inloggen: +basis, met oplopende streak-bonus
//  - 15 min leren voltooid (de canonieke kwartier-mijlpaal): +vast bedrag
//
// Uitgeven aan dieren/attracties komt in de winkel (stap 4).
import { getAsset } from "./AssetRegistry";

export const START_COINS = 200; // ruim startbudget (lanceerweek) zodat je meteen kunt bouwen
export const LOGIN_BASE = 5;            // basis voor dagelijks inloggen
export const LOGIN_STREAK_BONUS_MAX = 7; // +1 per streakdag, tot dit maximum
// 12-agent-review 2 jul: was 8, maar kramen/parkinkomsten leverden méér op
// dan leren — "leren = véél meer munten" moet ook echt waar zijn. Nu is het
// kwartier de grootste enkele dagbron.
export const KWARTIER_REWARD = 25;      // 15 min leren voltooid

// Park-groei: elk verblijf levert muntjes per dag op (meer park = meer muntjes).
export const INKOMST_PER_VERBLIJF = 2;  // per dier/verblijf per dag
export const INKOMST_PER_BABY = 1;      // extra per jonkie per dag
export const MAX_DAGEN_INKOMST = 3;     // offline-opbrengst gecapt op 3 dagen

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
export const VERWAARLOOS_DAGEN = 3;     // zoveel dagen niet voeren → een dier loopt weg

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

// Verzorging per dier: een GEKOCHT dier dat >= VERWAARLOOS_DAGEN geen hooi kreeg
// loopt weg. Starter-dieren (price 0) blijven altijd. Geeft nieuwe indeling +
// aantal weggelopen dieren.
export function verwaarloosCheck(items, isDier = () => true) {
  let weggelopen = 0;
  const layout = (items || []).filter((it) => {
    if (!isDier(it.assetId)) return true;
    if ((it.price || 0) <= 0) return true; // starter-dier → blijft
    const dagen = it.fed ? dagenVerschil(it.fed) : 999;
    if (dagen >= VERWAARLOOS_DAGEN) { weggelopen++; return false; }
    return true;
  });
  return { layout, weggelopen };
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

// 📅 Weektaak per groep (groeiplan punt 2, Mark 21 okt 2026).
//
// Waarom: leerkrachten zijn de grootste vermenigvuldiger (één juf = een hele klas),
// maar de bestaande juf-gereedschappen worden nauwelijks gebruikt (okt 2026: in
// 30 dagen 1 takenlijst, 0 toetsen). Een maker vraagt account + uitzoekwerk.
// De weektaak vraagt niets: één vast adres per groep (leerkwartier.app/weektaak?g=6)
// dat elke maandag vanzelf nieuwe taken toont. De juf deelt het één keer.
//
// Een weektaak is een gewone takenlijst (zelfde vorm als src/data/takenlijst.js),
// dus vinkjes en beloning komen uit TakenlijstView. Drie taken: rekenen, taal,
// lezen — de Doorstroomtoets-kern. Groep 3 heeft (nog) geen leespad: daar 2 taken. Welke paden: alle basisschoolpaden waarvan het
// niveau de groep omvat, per vak gesorteerd op id, en per week één stap verder.
// Zelfde week + zelfde groep = overal dezelfde lijst (geen toeval, geen server).

import manifest from "../learnPaths/pathManifest.generated.json";

export const WEEKTAAK_GROEPEN = [3, 4, 5, 6, 7, 8];

const VAKKEN = [
  { sleutel: "rekenen", vakken: ["rekenen"] },
  { sleutel: "taal", vakken: ["taal", "spelling"] },
  { sleutel: "lezen", vakken: ["begrijpend-lezen", "studievaardigheden"] },
];

// "groep6-8" → [6,8], "groep8" → [8,8]; alles wat geen groep-niveau is → null.
export function groepBereik(level) {
  const m = /^groep(\d)(?:-(\d))?$/.exec(String(level || ""));
  if (!m) return null;
  const van = Number(m[1]);
  return [van, m[2] ? Number(m[2]) : van];
}

// Weken sinds maandag 5 jan 2026 (lokale tijd). Loopt door over de jaargrens heen.
// In UTC rekenen: lokale middernachten liggen bij zomer-/wintertijd 23 of 25 uur uit
// elkaar, en dan sprong de telling op zondag 25 okt 2026 een week terug.
const START = Date.UTC(2026, 0, 5);
export function weekIndex(datum = new Date()) {
  const d = Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate());
  return Math.floor((d - START) / (7 * 24 * 3600 * 1000));
}

// ISO-weeknummer, alleen voor de titel ("week 43").
export function isoWeek(datum = new Date()) {
  const d = new Date(Date.UTC(datum.getFullYear(), datum.getMonth(), datum.getDate()));
  const dag = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dag);
  const jaarStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d - jaarStart) / 86400000 + 1) / 7);
}

export function kandidaten(groep, vakken, paden = manifest) {
  return paden
    .filter((p) => vakken.includes(p.subject))
    // Nieuwkomerpaden hebben hun eigen route (/nieuwkomers), niet in een gewone weektaak.
    .filter((p) => !/nieuwkomers/.test(p.id))
    .filter((p) => { const b = groepBereik(p.level); return b && groep >= b[0] && groep <= b[1]; })
    // Kwartier-belofte: geen lange paden als weektaak.
    .filter((p) => (p.stepCount || 0) > 0 && (p.stepCount || 0) <= 7)
    .sort((a, b) => a.id.localeCompare(b.id));
}

// "Breuken — groep 5-8, Doorstroomtoets-stof" → "Breuken"; "Dichten + rijm (groep 5-8, …)" → "Dichten + rijm".
export function korteTitel(titel) {
  return String(titel || "").split(" — ")[0].replace(/\s*\((groep|klas)[^)]*\)\s*$/i, "").trim();
}

export function maakWeektaak(groep, datum = new Date(), paden = manifest) {
  const g = Number(groep);
  if (!WEEKTAAK_GROEPEN.includes(g)) return null;
  const wi = weekIndex(datum);
  const taken = [];
  VAKKEN.forEach(({ sleutel, vakken }, i) => {
    const lijst = kandidaten(g, vakken, paden);
    if (!lijst.length) return;
    // Per vak een andere verschuiving, zodat groepen met dezelfde lijsten niet in de pas lopen.
    const p = lijst[(((wi + i * 7 + g * 3) % lijst.length) + lijst.length) % lijst.length];
    taken.push({ id: `${sleutel}-${p.id}`, title: korteTitel(p.title), pathId: p.id, stepCount: p.stepCount, emoji: p.emoji, vak: sleutel });
  });
  const week = isoWeek(datum);
  return {
    type: "takenlijst",
    id: `weektaak-g${g}-${wi}`,
    title: `Weektaak groep ${g} · week ${week}`,
    intro: "Elke maandag staan hier nieuwe taken. Doe er elke dag een: een kwartier is genoeg.",
    taken,
    weektaak: { groep: g, week, weekIndex: wi },
  };
}

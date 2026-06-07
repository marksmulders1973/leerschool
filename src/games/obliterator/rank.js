// Obliterator — rang-systeem (status naast de score).
//
// Ontwerp-keuzes (15-agent-analyse + kritische review 2026-06-07):
//  - Rang op HOOGST-BEHAALD LEVEL, niet op score. Reden: score is via het
//    anon-INSERT-RLS-gat vervalsbaar; een gespoofte score → gespoofte rang.
//    Het bereikte level is een eerlijkere skill-proxy (je moet de obstakels
//    en bosses echt halen). Brian (lvl100)=Legendary, Sahasra (lvl41)=Gold.
//  - PURE functie, 100% client-side berekend uit data die al op het bord
//    staat (elke score-rij heeft `level`). Geen DB-kolom, geen migratie.
//  - PUUR COSMETISCH: een rang geeft NOOIT gameplay-voordeel (geen extra
//    levens/score). Anders breekt de eerlijkheid. Status, geen power.
//  - Kind-veilig: positieve namen, niemand blijft "op nul" (Bronze vanaf lvl 1).

export const RANGEN = [
  { id: "bronze",    label: "Bronze",    emoji: "🥉", min: 1,  kleur: "#cd7f32" },
  { id: "silver",    label: "Silver",    emoji: "🥈", min: 10, kleur: "#c0c8d0" },
  { id: "gold",      label: "Gold",      emoji: "🥇", min: 25, kleur: "#ffd54f" },
  { id: "platinum",  label: "Platinum",  emoji: "💠", min: 50, kleur: "#5ed4d4" },
  { id: "diamond",   label: "Diamond",   emoji: "🔷", min: 70, kleur: "#4aa3ff" },
  { id: "legendary", label: "Legendary", emoji: "👑", min: 90, kleur: "#b388ff" },
];

// Geef de rang voor een hoogst-behaald level. Onbekend/0 → laagste rang.
export function rangVoorLevel(level) {
  const lvl = Number(level) || 0;
  let huidig = RANGEN[0];
  for (const r of RANGEN) {
    if (lvl >= r.min) huidig = r;
  }
  return huidig;
}

// Voortgang naar de volgende rang — voor de "nog X levels tot Silver"-haak op
// het game-over-scherm (motivatie zonder andere spelers nodig te hebben).
// Returnt null als de speler al de hoogste rang heeft.
export function volgendeRang(level) {
  const lvl = Number(level) || 0;
  const idx = RANGEN.findIndex((r) => lvl < r.min);
  if (idx === -1) return null; // al Legendary
  const next = RANGEN[idx];
  return { rang: next, levelsTeGaan: Math.max(1, next.min - lvl) };
}

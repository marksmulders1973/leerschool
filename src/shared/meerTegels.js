// De extra bestemmingen die tot v648 achter de "Meer"-knop in de onderste balk
// zaten. Mark 11 sep 2026: die knop werd sinds 1 augustus door 7 sessies geopend
// en het paneel kreeg 4 tikken in totaal, terwijl de persoonlijke pagina (/mijn)
// — de USP — helemaal niet in de balk stond. Daarom is "Meer" vervangen door
// "Mijn" en verhuisde deze lijst naar een rij onderaan Mijn pagina, waar hij
// voor iedereen zichtbaar is, mét én zonder naam.
//
// Nieuwe bestemming toevoegen? Zet hem hier neer én voeg een regel toe aan
// src/features/learn/snelkoppelingen.js, zodat hij ook via de zoekbalk te
// vinden is (regel "alles moet vindbaar zijn").
export const MEER_TEGELS = [
  { id: "dictee",      label: "Dictee",      emoji: "✍️", sub: "Charley zegt de zin, jij typt het woord", target: "dictee" },
  { id: "werkwoorden", label: "Werkwoorden", emoji: "🔤", sub: "werkwoordspellingtest zoals op school", target: "werkwoorden" },
  { id: "printen",     label: "Printbaar",   emoji: "🖨️", sub: "werkbladen, tafels, dictees, leesladder", target: "printen" },
  { id: "tips",        label: "Tips",        emoji: "💬", sub: "wens of tip voor de maker", target: "wishes" },
  { id: "ouder",       label: "Thuis",       emoji: "👪", sub: "voor ouder of verzorger", target: "ouder-dashboard" },
  { id: "leerkracht",  label: "Leerkracht",  emoji: "🧑‍🏫", sub: "klas, toets maken, parkcode", target: "teacher-home" },
  { id: "zoeken",      label: "Zoeken",      emoji: "🔎", sub: "vind een onderwerp of pagina", target: "learn-paths-hub" },
];

export default MEER_TEGELS;

// Data voor de herbruikbare Wereldbol (Mark-wens 17 jun 2026): één draaiende
// aardbol die voor verschillende vragen gebruikt wordt. Per "modus" plakken we
// andere prikkers (markers) op de bol:
//   • landen          → naam van het land (genereren we uit de kaartdata zelf)
//   • hoofdsteden      → de hoofdstad die bij een land hoort
//   • bezienswaardigheden → beroemde gebouwen + rivieren
//
// Coördinaten zijn benaderingen (lat = noord/zuid, lng = oost/west). Voor een
// prikker op de bol is dat ruim genoeg — de prikker valt op het juiste land.

// Kleur per soort prikker (sober, geen antwoord-verklap).
export const MARKER_KLEUR = {
  hoofdstad: "#ffd34b", // goud
  gebouw: "#ff9d5c",    // oranje
  rivier: "#4fc3ff",    // blauw
  land: "#7fe0a0",      // groen
};

// ── Hoofdsteden ──────────────────────────────────────────────────────────────
// naam = de hoofdstad (het antwoord), land = waar de prikker op staat.
export const HOOFDSTEDEN = [
  { naam: "Amsterdam",   land: "Nederland",      werelddeel: "Europa",        lat: 52.37, lng: 4.90 },
  { naam: "Brussel",     land: "België",         werelddeel: "Europa",        lat: 50.85, lng: 4.35 },
  { naam: "Berlijn",     land: "Duitsland",      werelddeel: "Europa",        lat: 52.52, lng: 13.40 },
  { naam: "Parijs",      land: "Frankrijk",      werelddeel: "Europa",        lat: 48.85, lng: 2.35 },
  { naam: "Londen",      land: "Verenigd Koninkrijk", werelddeel: "Europa",   lat: 51.51, lng: -0.13 },
  { naam: "Madrid",      land: "Spanje",         werelddeel: "Europa",        lat: 40.42, lng: -3.70 },
  { naam: "Rome",        land: "Italië",         werelddeel: "Europa",        lat: 41.90, lng: 12.50 },
  { naam: "Lissabon",    land: "Portugal",       werelddeel: "Europa",        lat: 38.72, lng: -9.14 },
  { naam: "Wenen",       land: "Oostenrijk",     werelddeel: "Europa",        lat: 48.21, lng: 16.37 },
  { naam: "Bern",        land: "Zwitserland",    werelddeel: "Europa",        lat: 46.95, lng: 7.45 },
  { naam: "Athene",      land: "Griekenland",    werelddeel: "Europa",        lat: 37.98, lng: 23.73 },
  { naam: "Stockholm",   land: "Zweden",         werelddeel: "Europa",        lat: 59.33, lng: 18.07 },
  { naam: "Oslo",        land: "Noorwegen",      werelddeel: "Europa",        lat: 59.91, lng: 10.75 },
  { naam: "Kopenhagen",  land: "Denemarken",     werelddeel: "Europa",        lat: 55.68, lng: 12.57 },
  { naam: "Warschau",    land: "Polen",          werelddeel: "Europa",        lat: 52.23, lng: 21.01 },
  { naam: "Moskou",      land: "Rusland",        werelddeel: "Europa",        lat: 55.76, lng: 37.62 },
  { naam: "Washington",  land: "Verenigde Staten", werelddeel: "Noord-Amerika", lat: 38.91, lng: -77.04 },
  { naam: "Ottawa",      land: "Canada",         werelddeel: "Noord-Amerika", lat: 45.42, lng: -75.70 },
  { naam: "Mexico-Stad", land: "Mexico",         werelddeel: "Noord-Amerika", lat: 19.43, lng: -99.13 },
  { naam: "Brasília",    land: "Brazilië",       werelddeel: "Zuid-Amerika",  lat: -15.79, lng: -47.88 },
  { naam: "Buenos Aires", land: "Argentinië",    werelddeel: "Zuid-Amerika",  lat: -34.60, lng: -58.38 },
  { naam: "Caïro",       land: "Egypte",         werelddeel: "Afrika",        lat: 30.04, lng: 31.24 },
  { naam: "Pretoria",    land: "Zuid-Afrika",    werelddeel: "Afrika",        lat: -25.75, lng: 28.19 },
  { naam: "Nairobi",     land: "Kenia",          werelddeel: "Afrika",        lat: -1.29, lng: 36.82 },
  { naam: "Tokio",       land: "Japan",          werelddeel: "Azië",          lat: 35.68, lng: 139.69 },
  { naam: "Peking",      land: "China",          werelddeel: "Azië",          lat: 39.90, lng: 116.40 },
  { naam: "New Delhi",   land: "India",          werelddeel: "Azië",          lat: 28.61, lng: 77.21 },
  { naam: "Bangkok",     land: "Thailand",       werelddeel: "Azië",          lat: 13.76, lng: 100.50 },
  { naam: "Canberra",    land: "Australië",      werelddeel: "Oceanië",       lat: -35.28, lng: 149.13 },
];

// ── Bezienswaardigheden: beroemde gebouwen + rivieren ────────────────────────
export const BEZIENSWAARDIGHEDEN = [
  { naam: "Eiffeltoren",        soort: "gebouw", emoji: "🗼", waar: "Parijs, Frankrijk",        werelddeel: "Europa",        lat: 48.858, lng: 2.294 },
  { naam: "Big Ben",            soort: "gebouw", emoji: "🕰️", waar: "Londen, Engeland",         werelddeel: "Europa",        lat: 51.500, lng: -0.124 },
  { naam: "Colosseum",          soort: "gebouw", emoji: "🏛️", waar: "Rome, Italië",             werelddeel: "Europa",        lat: 41.890, lng: 12.492 },
  { naam: "Brandenburger Tor",  soort: "gebouw", emoji: "🏛️", waar: "Berlijn, Duitsland",       werelddeel: "Europa",        lat: 52.516, lng: 13.378 },
  { naam: "Sagrada Família",    soort: "gebouw", emoji: "⛪", waar: "Barcelona, Spanje",         werelddeel: "Europa",        lat: 41.404, lng: 2.174 },
  { naam: "Vrijheidsbeeld",     soort: "gebouw", emoji: "🗽", waar: "New York, VS",              werelddeel: "Noord-Amerika", lat: 40.689, lng: -74.044 },
  { naam: "Christusbeeld",      soort: "gebouw", emoji: "⛪", waar: "Rio de Janeiro, Brazilië",  werelddeel: "Zuid-Amerika",  lat: -22.952, lng: -43.210 },
  { naam: "Piramides van Gizeh", soort: "gebouw", emoji: "🔺", waar: "Egypte",                   werelddeel: "Afrika",        lat: 29.979, lng: 31.134 },
  { naam: "Taj Mahal",          soort: "gebouw", emoji: "🕌", waar: "Agra, India",              werelddeel: "Azië",          lat: 27.175, lng: 78.042 },
  { naam: "Chinese Muur",       soort: "gebouw", emoji: "🧱", waar: "China",                     werelddeel: "Azië",          lat: 40.431, lng: 116.570 },
  { naam: "Opera van Sydney",   soort: "gebouw", emoji: "🎭", waar: "Sydney, Australië",         werelddeel: "Oceanië",       lat: -33.857, lng: 151.215 },
  { naam: "De Nijl",            soort: "rivier", emoji: "🌊", waar: "Afrika",                    werelddeel: "Afrika",        lat: 27.0, lng: 31.2 },
  { naam: "De Amazone",         soort: "rivier", emoji: "🌊", waar: "Zuid-Amerika",             werelddeel: "Zuid-Amerika",  lat: -3.0, lng: -60.0 },
  { naam: "De Rijn",            soort: "rivier", emoji: "🌊", waar: "West-Europa",              werelddeel: "Europa",        lat: 51.9, lng: 6.1 },
  { naam: "De Donau",           soort: "rivier", emoji: "🌊", waar: "Midden-Europa",           werelddeel: "Europa",        lat: 47.5, lng: 19.0 },
  { naam: "De Mississippi",     soort: "rivier", emoji: "🌊", waar: "Verenigde Staten",         werelddeel: "Noord-Amerika", lat: 32.3, lng: -90.9 },
  { naam: "De Jangtsekiang",    soort: "rivier", emoji: "🌊", waar: "China",                     werelddeel: "Azië",          lat: 30.6, lng: 114.3 },
];

// ── Landen: Engelse Natural-Earth-naam → nette Nederlandse naam ──────────────
// We pakken de prikker-positie (zwaartepunt) uit de kaartdata zelf, zodat de
// prikker gegarandeerd op het juiste land valt. Alleen herkenbare landen.
export const LANDEN_NL = {
  Netherlands: "Nederland", Belgium: "België", Germany: "Duitsland", France: "Frankrijk",
  Spain: "Spanje", Italy: "Italië", Portugal: "Portugal", "United Kingdom": "Verenigd Koninkrijk",
  Ireland: "Ierland", Switzerland: "Zwitserland", Austria: "Oostenrijk", Poland: "Polen",
  Greece: "Griekenland", Sweden: "Zweden", Norway: "Noorwegen", Denmark: "Denemarken",
  Finland: "Finland", Russia: "Rusland", Turkey: "Turkije", Ukraine: "Oekraïne",
  Egypt: "Egypte", "South Africa": "Zuid-Afrika", Nigeria: "Nigeria", Kenya: "Kenia",
  Morocco: "Marokko", Algeria: "Algerije", "United States of America": "Verenigde Staten",
  Canada: "Canada", Mexico: "Mexico", Brazil: "Brazilië", Argentina: "Argentinië",
  Chile: "Chili", China: "China", India: "India", Japan: "Japan", Indonesia: "Indonesië",
  Thailand: "Thailand", "Saudi Arabia": "Saoedi-Arabië", Australia: "Australië",
  "New Zealand": "Nieuw-Zeeland",
};

// lat/lng → 3D-positie op een bol met straal r. Afgeleid van exact dezelfde
// mapping waarmee de wereldkaart-textuur op de bol wordt geplakt (zie
// Wereldbol.jsx: canvas X=(lng+180)/360, Y=(90-lat)/180), zodat een prikker
// precies op het juiste plekje van de kaart valt.
export function latLngNaarVec3(lat, lng, r, THREE) {
  const la = (lat * Math.PI) / 180;
  const lo = (lng * Math.PI) / 180;
  const x = r * Math.cos(la) * Math.cos(lo);
  const y = r * Math.sin(la);
  const z = -r * Math.cos(la) * Math.sin(lo);
  return new THREE.Vector3(x, y, z);
}

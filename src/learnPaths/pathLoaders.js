// Lazy-loaders voor leerpad-files via Vite's import.meta.glob.
//
// Probleem (audit 2026-05-12): index.js doet eager static imports voor 165+
// paden → één chunk van 5,4 MB ontstaat, of meerdere chunks die toch allemaal
// op page-load worden binnengetrokken. Dit is mobiel-pijn.
//
// Doel: per-pad lazy load zodat alleen het opgevraagde pad over de lijn gaat.
//
// Gebruik:
//   import { getLearnPath, hasLearnPath } from './pathLoaders.js';
//   const path = await getLearnPath('parabolen');  // returnt het default export
//
// QW7 lazy-load STAP 2 voltooid (2026-05-15): id→file mapping uit
// pathManifest.generated.json (build-time gegenereerd via buildPathManifest.mjs).
// Geen eager-resolve meer van alle modules — alleen het opgevraagde pad wordt
// geladen, andere chunks blijven onaangeraakt.

import pathManifest from "./pathManifest.generated.json";

// Vite resolves dit naar object { './parabolen.js': () => import('./parabolen.js'), ... }
// Lazy: modules worden pas geladen wanneer de loader-functie wordt aangeroepen.
//
// Exclusions: niet-pad-files die anders in de bundle terecht komen.
const modules = import.meta.glob(
  ['./*.js{,x}', '!./index.js', '!./index.test.js', '!./examenLookup.js', '!./pathLoaders.js', '!./subjectMapping.js', '!./subjectMapping.test.js', '!./questionPathMap.generated.js'],
  { import: 'default' }
);

// Static id→loader-mapping via manifest. Geen runtime-resolve van alle modules.
const _idToLoader = {};
for (const entry of pathManifest) {
  if (entry.id && entry.file && modules[entry.file]) {
    _idToLoader[entry.id] = modules[entry.file];
  }
}

// Cache van al geresolved paden zodat herhaalde getLearnPath(id)-calls niet
// elke keer opnieuw downloaden.
const _resolved = new Map();

export async function getLearnPath(id) {
  if (_resolved.has(id)) return _resolved.get(id);
  const loader = _idToLoader[id];
  if (!loader) return null;
  const data = await loader();
  _resolved.set(id, data);
  return data;
}

export function hasLearnPath(id) {
  return Object.prototype.hasOwnProperty.call(_idToLoader, id);
}

// Voor consumers die alle ID's willen (lijsten/zoeken) zonder full data te
// laden. Sync — uit manifest, geen async nodig.
export function listLearnPathIds() {
  return Object.keys(_idToLoader);
}

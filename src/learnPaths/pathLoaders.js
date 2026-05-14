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
// Migratie-status:
// - LearnPath.jsx: TODO (huidige top-prioriteit voor lazy migratie).
// - LearnPathsHub.jsx: TODO (gebruikt MANIFEST-data; alleen full data nodig
//   wanneer user op pad klikt).
// - citoMixVragen.js / examenLookup.js: blijft ALL_LEARN_PATHS-based tot apart
//   manifest beschikbaar.
//
// Voor backward compat blijft `ALL_LEARN_PATHS` in `index.js` exporteren met
// alle pad-data eager. Verwijder ALL_LEARN_PATHS pas wanneer alle consumers
// gemigreerd zijn.

// Vite resolves dit naar object { './parabolen.js': () => import('./parabolen.js'), ... }
// Lazy: modules worden pas geladen wanneer de loader-functie wordt aangeroepen.
//
// BUG-FIX 2026-05-14: exclude `.test.js`, `.generated.js`, `index.js`,
// `examenLookup.js`, `pathLoaders.js`, `subjectMapping.js`. Anders pakt Rollup
// die mee in de bundle waardoor:
// 1. `index.test.js` importeert `./index.js` (cycle examens-wiskunde via core)
// 2. test-code in productie-bundle
const modules = import.meta.glob(
  ['./*.js{,x}', '!./index.js', '!./index.test.js', '!./examenLookup.js', '!./pathLoaders.js', '!./subjectMapping.js', '!./subjectMapping.test.js', '!./questionPathMap.generated.js'],
  { import: 'default' }
);

// Map van pad-id naar loader-functie. De pad-id zit in het default-export van
// elk pad-file als `path.id`. We kunnen die niet uit de file-naam afleiden
// (file 'parabolen.js' = id 'parabolen', maar 'cijferendRekenen.js' = id
// 'cijferend-rekenen'). Daarom: bouw cache lazy bij eerste gebruik.
let _idToLoader = null;

async function buildIdMap() {
  if (_idToLoader) return _idToLoader;
  _idToLoader = {};
  // Eager-load alleen de metadata (id-velden) door alle modules eenmalig te
  // resolven. Voor 165 modules = klein eenmalig kostje, daarna mapping cached.
  // BELANGRIJK: bij de migratie naar volledig lazy verdwijnt dit — dan moet
  // de id-map static gegenereerd worden via build-script.
  await Promise.all(
    Object.entries(modules).map(async ([path, loader]) => {
      try {
        const data = await loader();
        if (data && data.id) {
          _idToLoader[data.id] = loader;
        }
      } catch (err) {
        console.warn(`[pathLoaders] kon ${path} niet laden:`, err.message);
      }
    })
  );
  return _idToLoader;
}

// Cache van al geresolved paden zodat herhaalde getLearnPath(id)-calls niet
// elke keer opnieuw downloaden.
const _resolved = new Map();

export async function getLearnPath(id) {
  if (_resolved.has(id)) return _resolved.get(id);
  const map = await buildIdMap();
  const loader = map[id];
  if (!loader) return null;
  const data = await loader();
  _resolved.set(id, data);
  return data;
}

export async function hasLearnPath(id) {
  const map = await buildIdMap();
  return Object.prototype.hasOwnProperty.call(map, id);
}

// Voor consumers die alle ID's willen (lijsten/zoeken) zonder full data te
// laden. Wachten op buildIdMap-eerste-call, daarna sync via cache.
export async function listLearnPathIds() {
  const map = await buildIdMap();
  return Object.keys(map);
}

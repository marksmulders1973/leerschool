# Obliterator — refactor-plan

Status na P3b deel 2 fase 1 (2026-05-06): pure helpers (constants, storage,
scores, rng) zijn geëxtraheerd naar deze folder. `ObliteratorGame.jsx` is
nog 9077 regels groot en bevat één gigantische `export default function`
met ~50 useState/useRef-declaraties en **92 inner functies** in een gedeelde
closure (game-loop, audio-engine, level-generator, render-helpers).

## Waarom we hier zijn gestopt

Een veilige verdere split vereist eerst dat de **state-laag** uit het
component wordt gehaald. Geautomatiseerde extractie zonder browser-test
zou stille bugs introduceren — Vite's tree-shake vangt missende imports,
maar niet:

- closures die `audioCtx`, `masterFilter`, `masterVolume` (lokaal in de
  useEffect) blijven referencen,
- refs die state cross-cuttend delen tussen UI-events en de RAF-loop,
- biome/level-generator-functies die `bioomNu`, `levelObstakelsRef`,
  `customLevelRef` lezen via closure,
- `muziek.draait`, `muziek.beat`, `muziek.startTijd` — een lokaal object
  dat als gedeelde state functioneert tussen 7+ muziek-functies.

Een fout in één van die punten breekt OBLITERATOR zonder dat tests of
build-check het zien. Mark moet dit kunnen verifiëren door te spelen.

## Aanbevolen volgorde voor toekomstige sessie

### Stap 1 — `useObliteratorGame`-hook (~1u, in browser testen!)

Tilt **alle game-state** uit het component naar een custom hook:

```jsx
function useObliteratorGame({ userName, pvpMatch, /* ... */ }) {
  const canvasRef = useRef(null);
  // ... alle bestaande useRef + useState
  // game-loop in useEffect die alleen canvasRef nodig heeft
  return {
    canvasRef, fase, setFase, eindScore, setEindScore,
    /* ... gefilterde public API */
  };
}
```

ObliteratorGame.jsx wordt dan ~1500 regels (alleen JSX-render + hook-call).

### Stap 2 — Audio-engine als module (~30 min)

Audio is **al een natuurlijke module** met een `muziek`-object als state.
Verplaats naar `src/games/obliterator/audio.js`:

```js
export function createObliteratorAudio({ audioVolumeRef }) {
  let audioCtx = null;
  let masterFilter = null;
  let masterVolume = null;
  const muziek = { draait: false, bpm: 160, /* ... */ };

  return {
    aud, piep, springGeluid, scoreGeluid, doodGeluid,
    muziekStart, muziekStop, /* etc */
  };
}
```

Hook gebruikt dit als: `const audio = useMemo(() => createObliteratorAudio({ audioVolumeRef }), []);`

### Stap 3 — Level-generator als module (~30 min)

Alle obstacle-spawning, biome-overgangen, vloer-hoogte zit in pure
functies van `(level, seed, worldX) → {obstakels, decor, biome}`. Niet
state-houdend. Verplaats naar `src/games/obliterator/levelGen.js`.

Functies: `biomeKleur`, `biomeNaam`, `vloerHoogte`, `vloerSlope`, `vloerY`,
`hillsActief`, `cheerfulMix`, `setBiomeVoorLevel`, `genereerObstakels`.

### Stap 4 — Render-helpers als module (~45 min)

Tekenfuncties die alleen `(ctx, x, y, size, ...)` nemen → `render.js`:
`tekenSpeler`, `tekenObstakel`, `tekenDecor`, `tekenAchtergrond`,
`tekenScore`, `tekenLevelTransitie`. Pure t.o.v. ctx.

### Stap 5 — Sub-components als JSX (~30 min)

Menu-screens, game-over-modal, leaderboard-display: aparte componenten
in `src/games/obliterator/ui/`. Ontvangen state via props.

## Test-protocol voor élke stap

Mark moet na elke commit:
1. Open `leerkwartier.app/obliterator` (of via menu)
2. Klik "Start" — kijk of de game laadt zonder console-errors
3. Speel 30 seconden — kijk of:
   - speler springt en valt (physics werken)
   - obstakels spawnen (level-generator werkt)
   - geluid speelt (audio-engine werkt)
   - score telt (game-state werkt)
4. Sterf bewust — kijk of game-over-modal opent en score wordt opgeslagen
5. Herstart — kijk of cleanup correct is gegaan (geen geheugen-lekken)
6. PvP-match starten via deelcode (als beide apparaten beschikbaar)

## Niet doen

- **Niet** alle 92 inner functies tegelijk extraheren via geautomatiseerde
  bash-commands. Closures breken stil.
- **Niet** zonder browser-test door naar Stap 2.
- **Niet** de game-loop opsplitsen in 'tick' + 'render' tot stap 1 klaar is.

## Status-check (te updaten per stap)

- [x] Fase 1: pure helpers eruit (constants/storage/scores/rng) — done 2026-05-06
- [ ] Stap 1: `useObliteratorGame`-hook
- [ ] Stap 2: audio.js
- [ ] Stap 3: levelGen.js
- [ ] Stap 4: render.js
- [ ] Stap 5: ui/ sub-components

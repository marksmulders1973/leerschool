# OBLITERATOR upgrade-plan — 15-agent-audit 2026-05-18

Mark's verzoek: "het spel is te saai, sneller overgangen, meerdere
achtergronden en muziek (Vivaldi-stijl). Looping-bugs fixen. Vergelijk
met andere games, leg de lat hoger. Leerzaam blijven, geen domme shooter."

15 game-design agents (Celeste/Sonic/GD/Hades/NecroDancer/Subway Surfers/
Spelunky/Tetris Effect/Rez/Vlambeer/Crossy Road/code-audit/Portal-tutorial/
Hades-thema/GD-benchmark) hebben elk een focus-rapport geleverd. Synthese:

## ✅ Sprint 1 — KLAAR (deze sessie)

### Loop-bugs (kritisch, code-audit-rapport pinpoint)
- ✅ Bug 1: ringen IN loop worden nu opgepakt (inline pickup vóór `return`).
- ✅ Bug 2: exit-X = loop-bodem ipv `basisX` (geen zij-clip meer).
- ✅ Bug 3: trigger eist nu dat speler-midden binnen 1/3 van loop-midden zit.

## 🔥 Sprint 2 — Pacing & visuals (1-2 dagen)

### Biome-transition (5/15 agents wezen hierop)
- Biome-duur **30s → 18s** (1 param, ~70% wow-upgrade).
- **Particle-curtain transitie** (1.2s) ipv simpele fade.
- Random uit pool: 60% particle-curtain, 25% swipe-parallax, 15% zoom-warp.
- Bij transitie kort 1 leerwoord/symbool flashen (0.4s) = leerzaam-coded.

### Background-intensity (Geometry-Dash-secret-sauce, agent-rapport #8)
- Eén shared `intensity` variabele (0..1) op music-keyframes.
- Parallax-snelheid + wolk-tint + brick-saturation + speed-lines luisteren allemaal.
- "De hele scene ademt mee" — wat GD beter doet dan huidige losse FX.

### Visual-juice (agent #8 + #10)
- Screen-shake easing (80ms cubic-ease-out) bij ring-hit.
- Chromatic aberration 2-4px op down-beat (CSS-overlay).
- Trail-ghosting op speler (4-5 frames silhouet).
- Bloom-flash op pickup (1-frame wit + 200ms fade).

## 🎵 Sprint 3 — Muziek-uitbreiding (1 dag)

### Track-shortlist (alle public domain, musopen.org/wikimedia)
| Stuk | Tempo | Biome-cluster |
|---|---|---|
| Vivaldi — Summer Presto (huidig) | 160 BPM | Level 1-2 (Grass + Nightfall) |
| Mozart — Eine kleine Nachtmusik Rondo | 140 BPM | Level 3-4 (Thunder + Sunset) |
| Rossini — William Tell finale | 150 BPM | Level 5-6 (Desert + Ice) |
| Bach — Brandenburg Concerto 3 | 130 BPM | Level 7-8 (Alien + Volcano) |
| Beethoven — Symfonie 5 deel 1 | 108 BPM | Level 9-10 (Crystal + Black Hole boss) |

### Sync-mechanic
- Per-track JSON met crescendo-timestamps (Winter heeft 4 op 0:34/1:12/1:48/2:20).
- Spawn boss op volgende gemarkeerde beat (wacht max 2 sec).
- Crossfade 8-bar overlap (6-8 sec) bij biome-cluster-switch.
- Pre-fetch volgende track in idle om hak te vermijden.

### Leerzame audio-card
- 3-sec overlay linksboven bij track-start: "🎻 Vivaldi — Vier Jaargetijden (1725)".
- Auto-fade. Geen quiz, pure exposure. "Componisten ontgrendeld: 3/5" in Hall of Fame.

## 🎯 Sprint 4 — Missie-systeem (1 dag, retention-killer)

Subway Surfers-model (agent-rapport #6):
- Bij run-start 3 willekeurige missies tonen:
  - "Pak 50 ringen"
  - "Overleef 60 sec"
  - "Drie near-miss-momenten op rij"
- Checklist rechts in beeld, ✓ + SFX bij voltooiing.
- Alle 3 = chest met letter (verzamel O-B-L-I-T-E-R → skin).
- Daily-rotation reset 00:00.

## 🧠 Sprint 5 — Leerzaam thema (alleen rename + overlay, geen art)

"Tijdmachine van Professor Klok" (agent-rapport #14):
- Hernoem biomes naar tijdperken:
  - Grass Hills → Galapagos / Darwin
  - Desert → Egypte / Pythagoras
  - Ocean → Cousteau
  - Mountains → Newton's appel-boom
  - Volcano → Pompeii
  - Ice → Shackleton's poolexpeditie
  - Alien Meadow → Marie Curie's lab
  - Crystal Cave → Einstein's gedachte-experiment
  - Black Hole → Hawking
- Intro-overlay bij elk biome (2 sec): "1666 — Newton ziet een appel vallen."
- Professor Klok-tekstwolkje tussen biomes ("Aha! 1666! Niet storen!").
- 80% Cuphead-coherence via lettertype (Playfair Display serif) + sepia-filter.

## 🎮 Sprint 6 — Roguelike-replay (2 dagen)

### Mutators per run (Hades-style, agent #3)
Pool van 10 random modifiers, 1 per run:
- "Magneet altijd aan"
- "Dubbele score, half leven"
- "Zwaartekracht omgekeerd elke 10s"
- "Muziek-pitch +20% (extreme tempo)"
- enz.

### Chunk-bag PCG (agent #7)
- 8 obstakel-types, shuffle-bag (Tetris-7-bag).
- Cooldown 90s tussen identieke chunks.
- Difficulty-tier 1-5, weight schuift met speeltijd.
- Tetris-tile-rule: entry-Y van chunk B = exit-Y van vorige (±1 tile).

### 5 pre-authored chunks
| # | Naam | Duur | Tier | Entry→Exit | Inhoud |
|---|------|------|------|--------|--------|
| 1 | Vlakte | 10s | 1 | mid→mid | 2 lage spikes, coin-trail |
| 2 | Trapje-op | 12s | 2 | mid→hoog | 3 platforms stijgend + saw |
| 3 | Duik | 12s | 3 | hoog→laag | Gap + spike-pit + 1 platform |
| 4 | Slalom | 15s | 4 | mid→mid | Boven/onder-obstakels |
| 5 | Pendulum | 15s | 5 | laag→mid | 2 swingende sawblades |

## 🏆 Sprint 7 — Progression (Crossy-Road-Prize-Machine, agent #11)

- 1 currency (muntjes uit runs).
- 1 knop (Prize Machine reveal).
- 50 muntjes (~2 runs) = nieuwe skin-variant.
- 200 muntjes (~5-6 runs) = nieuwe track/achtergrond.
- 500 muntjes + alle sterren = nieuw biome/boss.
- Elke run iets verdienen (zelfs verliezen = 5-10 muntjes).
- Daily challenge: 1× per dag extra muntjes, FOMO-light.
- Mystery box elke 7 dagen.
- Sla over: skill-trees, XP-bars, special abilities.

## 🎯 Sprint 8 — Pacing-rollercoaster (agent #10)

5-min run curve (intensity 0-10):
- 0:00-0:30 Onboarding (3): sparse, brede gaps.
- 0:30-1:30 Build (4→6): density +1 per 20s.
- 1:30-2:00 Eerste piek (8): miniboss.
- 2:00-2:20 Reset-valley (3): heal + pickup-shower.
- 2:20-3:30 Re-build (5→7).
- 3:30-4:00 Tweede piek (9): beat-drop + screenshake.
- 4:00-4:20 Valley 2 (4).
- 4:20-5:00 Finale (10): alles tegelijk, slow-mo laatste 3s.

Vlambeer-regel: elke 8-12 sec iets nieuws (random trigger op 10s ± 2s).

### Kid-vriendelijk softening
- 3 hearts ipv 1-hit-death.
- Damage-immunity 1.5s.
- Hitbox 70% sprite ("bijna raak = mis").
- Game-over scherm positief: "Je haalde X! Vorige keer Y!"

## 🤺 Sprint 9 — Mode-switch (alleen 1, niet alle 6 zoals GD)

- **Ship-mode** toevoegen (vliegen ipv springen) als secundaire mode.
- Trigger: pickup of biome-trigger.
- 80% van GD-mode-variatie zonder leercurve-cliff.
- Sla over: wave/spider/swing (te complex voor 10-jarige).

## 📊 Sprint 10 — GD-features (agent #15)

- Practice-mode met checkpoints (groene bolletjes).
- Attempt-counter + percentage-bar bovenin.
- Death → restart < 0.3s.
- Deelbare score-screenshot ("ik haalde 47%!").

---

## Volgorde (Mark's preferences-volgorde uit eerdere sessies)

1. ✅ **Loop-bugs gefixt** (deze sessie)
2. Biome-duur korter + transitie-upgrade
3. Tweede muziek-track integratie (POC)
4. Visual-juice (chromatic + trail-ghost + bloom-flash)
5. Pacing-rollercoaster (3 hearts + softening + intensity-curve)
6. Missie-systeem (Subway Surfers retention)
7. Tijdmachine-thema (rename biomes + Professor Klok-bubbles)
8. Volledige 5-tracks-playlist + crossfade
9. Mutators + chunk-PCG
10. Progression + Prize Machine

---

## Niet-doen (uit agent-discussies)

- Geen vraag-prompts tijdens gameplay (breekt flow — Prodigy-fout).
- Geen permadeath of "verloren progressie" (10-jarige = quit).
- Geen mode-switches behalve 1 (ship), rest is overkill.
- Geen UGC-editor (te complex voor 1.0).
- Geen blood/screenshake >0.3s/skulls (visuele toon kindvriendelijk houden).
- Geen pure random spawns (chunk-bag ipv).
- Geen 5+ identieke obstakels op rij (cheap-feeling).

---
name: OBLITERATOR (Leerkwartier mini-game) project
description: Geometry Dash-achtige mini-game OBLITERATOR in Leerkwartier-app. Eén actieve versie (`src/components/ObliteratorGame.jsx`); v2-experiment is per 2026-05-07 niet meer aanwezig in repo.
type: project
originSessionId: c162545d-7e42-452f-a902-8ab5232bc2e2
---
**OBLITERATOR** — Geometry Dash-stijl mini-game in Leerkwartier.

**Actieve versie**: `src/components/ObliteratorGame.jsx` (~3000 regels, 1 component). Routes (via `App.jsx`): `obliteratorDirect` (deeplink `?play=obliterator`) + `obliteratorPlay` (vanuit menu/results/kwartier-toast). Alle entrypoints renderen ditzelfde component.

**v2-track verwijderd** (per check 2026-05-07): de voormalige modulaire `src/games/obliterator/{engine,systems,data}/ObliteratorV2.jsx` route `/obliterator-v2` bestaat niet meer in de repo. `src/games/obliterator/` bevat nu alleen `PvPLobby.jsx` + helpers (constants, rng, scores, storage, pvp). De PvPLobby.jsx-comment noemt "ObliteratorV2" nog, maar dat is dode verwijzing. Wil Mark v2 opnieuw → vanaf nul.

**Standalone prototype**: `Desktop\promostudiebol\` — vanilla HTML/JS proto, los van Leerkwartier-app. Niet verwarren.

**Status per 2026-04-26:** uitgegroeid van mini-spel naar volwaardige game-experience met ~80 commits. Belangrijkste features hieronder.

## Game-mechanica
- **3 levens cumulatief** per sessie (4 als bonus van vorige goede oefenvraag), score blijft staan tussen levens
- **Oneindig springen** in de lucht (geen sprong-cap), kracht 100% / 85% / 75% per sprong
- **Snelheid constant** (6 px/frame) — moeilijkheid via density, niet via versnelling
- **Stekels grond + plafond** in ~50/50 ratio. Plafond-stekels alleen vanaf score 3
- **Lichtblauwe platforms** halverwege canvas — soms naast elkaar, soms verticaal gestapeld met ringen-bonus erboven
- **Gouden ringen** = primaire scorebron (Sonic-stijl). Streak-multiplier x1→x5 bij opeenvolgende pickups

## Power-ups (zeldzaam)
- 🚀 **Raket** = 10s ONKWETSBAAR (gouden aura, geen schade), spawn ~elke 25 obstakels
- 🔄 **FLIP** = anti-gravity, 2s waarschuwing → 10s op plafond → 3s "BACK TO NORMAL" countdown
- ❤️ **Hartje** = +1 leven (max 5)

## Visuele/audio polish
- **5 biomes** wisselen elke 8 punten: Gothic Crypt → Wizard's Lair → Magic Portal → Graveyard → Inferno
- Per biome: eigen kleuren, emoji-decor, bass-tonariteit
- "LEVEL UP" overgang met biome-naam + emoji-rij
- Particles overal (sprong, landing, dood-explosie, ring-pickup, raket-trail)
- Studiebol-logo subtiel als achtergrond (opacity 0.42)
- Hardcore 160 BPM gabber muziek-loop (Web Audio API, kick+snare+hat+bass)
- Synth-geluiden voor alles
- Vleermuizen, fakkels, glas-in-lood, mist
- Screen shake, glow, parallax

## Spelflow & UX
- 2-sec countdown 3-2-1-GO! bij start (en bij respawn)
- Fullscreen toggle (browser API + CSS-only fallback voor iOS)
- Landscape-hint bij portrait + fullscreen
- Score / RECORD / STREAK / IMMUNE-timer in HUD
- Record-banners: "🔥 Nog N tot je record!" en "🎉 NIEUW PERSOONLIJK RECORD!" / "🌟 NIEUW WERELDRECORD!" met confetti

## Persistentie & sociale features
- **Supabase tabel `obliterator_scores`** (id, player_name, user_id, score, created_at) met RLS open SELECT/INSERT
- **Top 25 scoreborden**: in-game lichtkrant, in OBLITERATOR-modal, in Kampioenen 5e tab
- **HomePage TickerBanner** toont top 2 scores
- **Deel-knoppen** op game-over: WhatsApp, Facebook, X, Copy, Native (allemaal getrackt in `share_events`)
- **Deeplink-flow** `?play=obliterator`: opent direct in spel, na 3e dood "Welkom bij Studiebol!" conversie-scherm
- **Oefenvraag** elke 3e voltooide sessie (uit wrongQuestions van laatste quiz, geen visuele vragen)
- **Goed antwoord** = +1 leven volgende run

## Tracking (Google Analytics)
- `obliterator_started` (source: deeplink/results_page/menu) bij START-klik
- `obliterator_session_complete` (score, sessies-counter, nieuw_PR, nieuw_WR) bij eindeSessie

## Toegangsregels
- Vanuit ResultsPage: alleen bij **score ≥50%** (ondergrens 80% → 50% verlaagd 2026-04-26)
- Vanuit deeplink: altijd, zonder check (groei-mechaniek voor virale verspreiding)

## Tech-keuzes
- Eén React-component (~3000 regels, monolithisch maar overzichtelijk via secties)
- Geen extra dependencies — Canvas 2D + Web Audio API + Supabase
- canvasW als useEffect-dep zodat rotatie game-restart triggert
- Refs (springRef, prRef, wrRef) voor game-loop closure-issues
- localStorage voor sessie-counter, bonus-leven (per userName)

## Why
Mark's kinderen (en kinderen ~10 jaar in het algemeen) zijn dol op Geometry Dash. OBLITERATOR is hun "directe beloning na hard werken" + sociale viral hook (deeplinks doen 't goed in Analytics).

## How to apply
- Bij vragen over "het spel" / "OBLITERATOR" → werk in `src/components/ObliteratorGame.jsx`
- Werkt samen met `ResultsPage.jsx` (post-quiz toegang) en `App.jsx` (deeplink-detectie)
- Na elke wijziging: build (`npm run build`) → commit + push (auto-deploy via Vercel)
- Schaal-systeem: alle pixel-waarden vermenigvuldigen met `SCHAAL` voor responsive scaling
- Bij grote tweaks: Mark wil snelle iteratie, geen lange overleg-rondes
- **Geen breaking changes aan obliterator_scores tabel zonder migratie** — heeft live data

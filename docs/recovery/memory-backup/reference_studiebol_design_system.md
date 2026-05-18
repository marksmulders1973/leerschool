---
name: Studiebol — design system v1 (kleur/type/spacing/components)
description: Bron-van-waarheid voor visuele beslissingen in Studiebol. Tokens in src/shared/tokens.css, components in src/shared/ui/. Game-stijl (OBLITERATOR) is bewust gescheiden van leer-UI.
type: reference
originSessionId: 986a1d0d-40bd-4171-a71d-3e72c5772960
---
Volledige spec staat in src/shared/tokens.css. Kern-regels die bij visuele beslissingen tellen:

**Kleur-namespaces (en wanneer welke):**
- `--color-brand-primary` (#00C853 groen) — hoofdactie, succes, voortgang. Eén primary-CTA per scherm.
- `--color-brand-secondary` (#3B82F6 blauw) — alleen voor leerpad-context, info, links.
- `--color-game-*` (oranje #FF6B35, geel #FFD600) — ALLEEN in OBLITERATOR-routes. Niet in leer-UI.
- `--color-mastery-bronze/silver/gold/unmeasured` — first-class tokens voor mastery-niveaus.
- Surface: bg-base / bg-surface / bg-elevated / bg-overlay (donker thema is primair).

**Components (allemaal in src/shared/ui/):**
- `<Button>` — variants: primary, secondary, ghost, danger, game. Sizes: sm (32px) / md (44px) / lg (52px).
- `<Card>` — variants: study, exercise (2px primary border), game (glow), ghost. Padding: sm/md/lg.
- `<Input>` — label + helper + error in één, focus-ring + aria-invalid.
- `<Badge>` — pill, 10 tones inclusief mastery.

**Harde regels (do/don't):**
- Tokens, geen hex inline. Tap-target ≥ 44px. 1 primary per scherm.
- Geen game-kleuren in leer-UI; geen leer-kleuren in game.
- Geen pure #000 of #FFF als bg. Geen losse pixels (4-pt grid).
- Geen gradients zonder doel — alleen voor mastery-CTA en game.

**Migratie-status (2026-04-29):**
- Tokens + components + Header + BottomNav gemigreerd.
- Pagina's met inline styles (HomePage, LearnPath, PlayQuiz, etc.) nog niet — dat is de volgende migratie-fase, per-pagina.
- Legacy aliases (`--color-primary` etc.) blijven in tokens.css zodat oude code blijft werken.

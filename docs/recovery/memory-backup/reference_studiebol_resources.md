---
name: Studiebol — externe resources & ID's
description: Supabase project-ID's, tabellen, storage buckets, GitHub repo, admin-email — referenties om snel te kunnen werken zonder opnieuw te hoeven zoeken.
type: reference
originSessionId: 877acc0d-e54b-4c71-b460-2d009efdec69
---
# Supabase
- **Project naam:** `studiebol`
- **Project ID / ref:** `uxqnzrymyjbcpuzqktdm`
- **Region:** eu-central-1, Postgres 17
- **Tweede project:** `POP` (`bcxzbannzlsllgdfzagp`) — INACTIVE, niet gebruiken
- **Org slug:** `vvvarkfgkimrydwcrxcg`

## Belangrijke tabellen (public schema)
- `quizzes` — leerkracht-quizzes
- `profiles` — gebruikersprofielen (display_name, level, role, school_type, school_logo_url)
- `progress` — leerling-resultaten
- `leaderboard` — top-scores per vak/level
- `hall_of_fame` — winnaars
- `subscriptions` — Pro/abonnementen
- `share_events` — track wie de app deelt (voor "vriendenmaker van de week")
- `ai_question_pool` — gegenereerde AI-vragen voor hergebruik (kostenbesparing)
- `obliterator_scores` — high-scores OBLITERATOR mini-game (incl. `level` kolom sinds 2026-04-26)
- `obliterator_levels` — per-level records per ingelogde speler
- `feedback` — "Tip aan de maker"-berichten (sinds 2026-04-26): message, player_name, screenshot_url, resolved, blocked
- `learn_progress` — voortgang per stap in een leerpad (sinds 2026-04-27): player_name, user_id (nullable), learn_path_id (text), step_idx, attempts. UNIQUE op (player_name, learn_path_id, step_idx). RLS uit. Gebruikt door `LearnPath.jsx`.
- `learn_path_waitlist` — interesse-opt-in voor vakken waarvan leerpaden nog ontbreken (sinds 2026-04-28): player_name + subject_id (TEXTBOOK_CATEGORIES_VO/PO id), UNIQUE op die combinatie, RLS aan met insert+select voor anon+authenticated. Gebruikt door `MeeBezig.jsx`.
- `topic_mastery` — voortgang per leerling × per onderwerp (sinds 2026-04-29): player_name + path_id (uit ALL_LEARN_PATHS) + attempts + correct + last_seen + **streak + next_due_at** (sinds P1.10 commit 97f789a, voor spaced repetition), UNIQUE op (player_name, path_id), RLS strikt op auth.uid()=user_id (sinds P1.3). Wordt opgebouwd door `recordAnswer()` / `recordAnswerForPath()` in `src/mastery.js`. Index op (player_name, next_due_at) voor snelle 'due'-query via `loadDueTopics()`.

## Storage buckets
- `feedback-screenshots` — public, max 2 MB, alleen image/png|jpeg|webp|gif

## RLS pattern voor admin-only
Voor admin-features: `auth.email() = 'mark-smulders@hotmail.com'` in policy.

# GitHub
- **Repo:** `marksmulders1973/leerschool`
- **Branch:** `main`
- **Pad lokaal:** `C:\Users\mark-\Desktop\Studiebol\leerschool\`

# Admin / contact
- **Mark's email** (admin-detectie in app): `Mark-smulders@hotmail.com` (lowercase voor compare in code)

# Deploy
- Vercel auto-deployt vanaf `main` branch op `studiebol.online`.

# API endpoints (in repo)
- `api/generate-questions.js` — Anthropic Haiku 4.5 voor AI-vragen, web search via tools
- `api/preview-topic.js` — onderwerp-preview

# Wachtwoorden / API keys
Mark heeft mij geen wachtwoorden gegeven. API keys (zoals `ANTHROPIC_API_KEY`) staan in `.env` lokaal en in Vercel env vars — niet in deze memory en niet in git (`.env` staat in `.gitignore`).

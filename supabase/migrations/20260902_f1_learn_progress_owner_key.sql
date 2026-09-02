-- F1 Fable-review 2 sep 2026 — toegepast op live DB via MCP op dezelfde dag.
-- Probleem: unique (player_name, learn_path_id, step_idx) → tweede kind met
-- dezelfde voornaam kon nooit voortgang opslaan (upsert = UPDATE van andermans
-- rij → RLS-USING faalt → 403, live gezien bij "Testkind").
-- Oplossing: eigenaar-sleutel = user_id, of 'naam:<naam>' voor legacy-rijen
-- zonder account. Client upsert gebruikt onConflict "owner_key,learn_path_id,step_idx".
alter table public.learn_progress
  add column if not exists owner_key text
  generated always as (coalesce(user_id::text || ':', 'naam:') || lower(player_name)) stored;
-- Correctie 2 sep (middag, koppeling-audit): naam ALTIJD in de sleutel — twee kinderen
-- op één tablet delen dezelfde anonieme uid en overschreven anders elkaars rij.
create unique index if not exists learn_progress_owner_step_uniq
  on public.learn_progress (owner_key, learn_path_id, step_idx);
alter table public.learn_progress drop constraint if exists learn_progress_unique_step;

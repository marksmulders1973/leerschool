-- B6 niveau-indicatie (Mark-besluit 2026-06-10): telling per speler ×
-- onderdeel × referentieniveau. Voedt UITSLUITEND de wekelijkse ouder-mail
-- (maakOuderMailSectie in src/shared/niveauIndicatie.js) — nooit kind-facing.
-- Alleen vragen met een ref-tag ("1F"/"S") in stappen met refOnderdeel
-- rekenen/lezen/taalverzorging tellen mee.

create table if not exists public.ref_mastery (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users (id) on delete cascade,
  player_name text not null,
  onderdeel text not null check (onderdeel in ('rekenen', 'lezen', 'taalverzorging')),
  ref text not null check (ref in ('1F', 'S')),
  attempts integer not null default 0 check (attempts >= 0),
  correct integer not null default 0 check (correct >= 0 and correct <= attempts),
  last_seen timestamptz not null default now(),
  unique (player_name, onderdeel, ref)
);

create index if not exists ref_mastery_user_idx on public.ref_mastery (user_id);

alter table public.ref_mastery enable row level security;

-- Zelfde policy-stijl als topic_mastery (rls_policies_export 2026-05-13):
-- ingelogd (anon-auth of permanent) schrijft alleen eigen rijen; legacy
-- zonder sessie schrijft met user_id null.
drop policy if exists "rm_insert_own" on public.ref_mastery;
create policy "rm_insert_own" on public.ref_mastery
  for insert to anon, authenticated with check (
    ((auth.uid() is not null) and (user_id = auth.uid()))
    or ((auth.uid() is null) and (user_id is null))
  );

drop policy if exists "rm_select_own_or_legacy" on public.ref_mastery;
create policy "rm_select_own_or_legacy" on public.ref_mastery
  for select to anon, authenticated using (
    ((auth.uid() is not null) and (user_id = auth.uid())) or (user_id is null)
  );

drop policy if exists "rm_update_own" on public.ref_mastery;
create policy "rm_update_own" on public.ref_mastery
  for update to anon, authenticated
  using (((auth.uid() is not null) and (user_id = auth.uid())) or ((auth.uid() is null) and (user_id is null)))
  with check (((auth.uid() is not null) and (user_id = auth.uid())) or ((auth.uid() is null) and (user_id is null)));

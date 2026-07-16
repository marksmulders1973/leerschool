-- Audit 16-07 (12-lens, privacy): de AVG-knop "Verwijder al mijn data" deed
-- client-side deletes op 20+ tabellen, maar vrijwel geen tabel heeft een
-- DELETE-policy → RLS verwijderde stilletjes 0 rijen (supabase-js gooit geen
-- error, en het error-veld werd nergens gecheckt). De ouder zag "✅ Verwijderd"
-- terwijl scores, profiel én e-maillijst-inschrijving bleven bestaan.
--
-- Fix: één SECURITY DEFINER RPC die als eigenaar écht verwijdert, alleen voor
-- de ingelogde gebruiker (auth.uid()), met per-tabel tellingen terug zodat de
-- UI eerlijk kan rapporteren. Tabellen zonder user_id-kolom (hall_of_fame,
-- kudos, share_events, quizzes, e.d.) zijn anoniem/player_name-based en zijn
-- bewust NIET opgenomen — de bestaande UI-tekst zegt al dat anonieme data via
-- e-mail verwijderd wordt.
--
-- Toegepast op het live project via MCP op 2026-07-16.

create or replace function public.delete_my_data()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_email text;
  t text;
  n bigint;
  detail jsonb := '{}'::jsonb;
  total bigint := 0;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'error', 'not_logged_in');
  end if;
  select lower(email) into v_email from auth.users where id = v_uid;

  -- Tabellen met user_id-kolom (dynamisch: bestaat kolom niet meer, dan skipt
  -- de loop hem vanzelf — geen brekende migratie bij schema-wijzigingen).
  for t in
    select c.table_name from information_schema.columns c
    where c.table_schema = 'public'
      and c.column_name = 'user_id'
      and c.table_name in (
        'progress','leaderboard','topic_mastery','learn_progress','ref_mastery',
        'obliterator_scores','obliterator_levels','share_events','feedback',
        'subscriptions','learn_path_waitlist','zoo_state','school_parent_links'
      )
  loop
    execute format('delete from public.%I where user_id = $1', t) using v_uid;
    get diagnostics n = row_count;
    if n > 0 then detail := detail || jsonb_build_object(t, n); end if;
    total := total + n;
  end loop;

  -- Ouder-kant: koppelingen + koppelcodes.
  for t in
    select c.table_name from information_schema.columns c
    where c.table_schema = 'public'
      and c.column_name = 'parent_user_id'
      and c.table_name in ('parent_child_links','link_codes')
  loop
    execute format('delete from public.%I where parent_user_id = $1', t) using v_uid;
    get diagnostics n = row_count;
    if n > 0 then detail := detail || jsonb_build_object(t, n); end if;
    total := total + n;
  end loop;

  -- Profiel (primary key = auth-uid).
  delete from public.profiles where id = v_uid;
  get diagnostics n = row_count;
  if n > 0 then detail := detail || jsonb_build_object('profiles', n); end if;
  total := total + n;

  -- E-maillijst: geen user_id-kolom — match op het geverifieerde accountadres.
  if v_email is not null and v_email <> '' then
    delete from public.upgrade_waitlist where lower(email) = v_email;
    get diagnostics n = row_count;
    if n > 0 then detail := detail || jsonb_build_object('upgrade_waitlist', n); end if;
    total := total + n;
  end if;

  return jsonb_build_object('ok', true, 'totaal', total, 'per_tabel', detail);
end;
$$;

revoke all on function public.delete_my_data() from public;
revoke all on function public.delete_my_data() from anon;
grant execute on function public.delete_my_data() to authenticated;

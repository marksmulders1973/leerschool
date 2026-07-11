-- Bug-jacht 2026-07-11 (bevestigd, ernst HOOG): het ouder-weekrapport matchte
-- kind-data UITSLUITEND op voornaam (lower(player_name) = lower(child_name)).
-- Twee kinderen uit verschillende gezinnen met dezelfde voornaam ("Sophie",
-- "Tom") kregen daardoor elkaars leerdata bij elkaar opgeteld in de mail van
-- de ouder — privacy-lek + onjuiste cijfers. De client-side kende dit risico
-- al (mastery.js filtert op user_id); de server-paden misten dat filter.
--
-- Fix in drie delen:
--   1. parent_child_links krijgt child_user_id: vastgelegd op het moment dat
--      het kind de koppelcode inwisselt (auth.uid() van de kind-sessie).
--   2. niveau_resultaten_voor_email scopet op child_user_id zodra die bekend
--      is; legacy-koppelingen zonder user_id houden naam-match (anders breekt
--      de bestaande koppeling), maar elke nieuwe claim legt het id wél vast.
--   3. ouder_weekrapport_kandidaten geeft child_user_id mee zodat de API
--      (api/send-ouder-rapport.js) topic_mastery óók op user_id filtert.
-- Toegepast op het project via MCP op 2026-07-11.

alter table public.parent_child_links
  add column if not exists child_user_id uuid;

-- (1) claim_link_code: leg auth.uid() van het kind vast. Kind zonder account
-- (anon) geeft null — dan blijft het naam-match zoals voorheen.
create or replace function public.claim_link_code(
  p_code text,
  p_child_name text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code_row link_codes%rowtype;
  v_link_id uuid;
  v_existing_id uuid;
begin
  -- 1. Valideer code (case-insensitive, trim)
  select * into v_code_row
    from link_codes
   where upper(code) = upper(trim(p_code))
     and (expires_at is null or expires_at > now())
   order by created_at desc
   limit 1;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'code_invalid_or_expired');
  end if;

  -- 2. Bestaat al een (parent, child)-koppeling? → update verified=true ipv duplicate.
  select id into v_existing_id
    from parent_child_links
   where parent_user_id = v_code_row.parent_user_id
     and lower(child_name) = lower(trim(p_child_name))
   limit 1;

  if v_existing_id is not null then
    update parent_child_links
       set verified = true,
           verified_at = now(),
           child_user_id = coalesce(auth.uid(), child_user_id)
     where id = v_existing_id;
    return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'updated', true);
  end if;

  -- 3. Nieuwe koppeling met verified=true (kind heeft expliciet code ingevoerd).
  insert into parent_child_links (parent_user_id, child_name, verified, verified_at, child_user_id)
  values (v_code_row.parent_user_id, trim(p_child_name), true, now(), auth.uid())
  returning id into v_link_id;

  return jsonb_build_object('ok', true, 'link_id', v_link_id, 'created', true);
end;
$$;

grant execute on function public.claim_link_code(text, text) to anon, authenticated;

-- (2) Niveau-sectie: scope op child_user_id zodra bekend.
create or replace function public.niveau_resultaten_voor_email(p_email text)
returns table (onderdeel text, ref text, attempts int, correct int)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
  select rm.onderdeel, rm.ref, sum(rm.attempts)::int, sum(rm.correct)::int
  from auth.users u
  join public.parent_child_links pcl
    on pcl.parent_user_id = u.id and pcl.verified = true
  join public.ref_mastery rm
    on lower(rm.player_name) = lower(pcl.child_name)
   and (pcl.child_user_id is null or rm.user_id = pcl.child_user_id)
  where lower(u.email) = lower(p_email)
  group by rm.onderdeel, rm.ref;
end;
$$;

revoke all on function public.niveau_resultaten_voor_email(text) from public;
revoke all on function public.niveau_resultaten_voor_email(text) from anon;
revoke all on function public.niveau_resultaten_voor_email(text) from authenticated;

-- (3) Kandidaten-RPC: return-type wijzigt (kolom erbij) → eerst droppen.
-- Geeft ouder-e-mails terug, dus mag NOOIT door anon/authenticated aan te
-- roepen zijn — alleen de server (service role).
drop function if exists public.ouder_weekrapport_kandidaten();
create function public.ouder_weekrapport_kandidaten()
returns table (parent_email text, child_name text, child_user_id uuid)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
  select u.email::text, pcl.child_name, pcl.child_user_id
  from public.parent_child_links pcl
  join auth.users u on u.id = pcl.parent_user_id
  where pcl.verified = true and u.email is not null;
end;
$$;

revoke all on function public.ouder_weekrapport_kandidaten() from public;
revoke all on function public.ouder_weekrapport_kandidaten() from anon;
revoke all on function public.ouder_weekrapport_kandidaten() from authenticated;

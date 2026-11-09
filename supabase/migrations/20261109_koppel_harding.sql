-- 🔐 Koppelcode doorgelicht (Mark 9 nov 2026: "kun je de koppelcode helemaal doorlichten en evt verbeteren?").
-- Vier dingen in de server-kant, elk klein en los te volgen:
--
-- 1. RADEN AFREMMEN. claim_link_code en koppel_diagnose mochten onbeperkt worden aangeroepen, ook zonder
--    sessie. Een code is 6 tekens uit 31 (887 miljoen), er staan ±22 codes open die niet meer verlopen:
--    raden is traag maar had geen rem. Nu: tabel koppel_pogingen, sleutel = sessie (u:<uid>) of, zonder
--    sessie, het adres van de bezoeker (cf-connecting-ip: die zet Cloudflare zelf, een bezoeker kan hem
--    niet meesturen; nagekeken 9 nov). Meer dan 30 mislukte pogingen per uur → 'te_veel_pogingen'.
--    Een kind dat zich vertypt zit op 2 per poging (claim + diagnose), dus ±15 vergissingen per uur.
-- 2. ÉÉN CODE, ÉÉN KIND. claim_link_code las de code en zette daarna pas used_at; twee toestellen die
--    tegelijk dezelfde code invoerden konden allebei slagen. Nu claimt één UPDATE … WHERE used_at IS NULL
--    de code; wie te laat is krijgt 'code_invalid_or_expired'.
-- 3. OVERNEMEN ALLEEN VAN EEN ANONIEME TOESTEL-SESSIE. gezin_koppelingen_overnemen(p_oud_uid, …) is
--    bedoeld voor "ouder koppelde zonder account en logt later in". Het bewijs is het oude uid; de functie
--    keek niet of dat uid wel een anonieme sessie was, dus wie het uid van een écht ouder-account kende
--    kon diens koppelingen naar zich toe halen. Nu: oud uid moet anoniem zijn.
-- 4. EIGEN WERK ALLEEN AAN EEN EIGEN KOPPELING HANGEN. koppel_mijn_data(p_link_id, …) hing de rijen van de
--    eigen sessie aan élke verified koppeling waarvan je het id kende (link_id staat in het openbare
--    scorebord) → vreemd werk in andermans ouder-overzicht. Nu eerst kind_hoort_bij(p_link_id).
--
-- Bewust NIET aangepast: kind_hoort_bij laat bij een koppeling zonder toestel het eerste toestel toe
-- (10 oude koppelingen; geen daarvan staat in het scorebord, en strenger maken sluit een terugkerend kind
-- stil buiten). Zie docs/KOPPELING-GRENZEN.md.
--
-- Getest 9 nov met gesimuleerde sessies in een teruggedraaide transactie (zie het testblok onderaan
-- docs/sql/koppel_harding_test.sql) en daarna live met ouder + kind in twee browsers.

create table if not exists public.koppel_pogingen (
  sleutel text not null,
  at timestamptz not null default now()
);
create index if not exists koppel_pogingen_sleutel_at on public.koppel_pogingen (sleutel, at desc);
alter table public.koppel_pogingen enable row level security; -- geen policies: alleen de functies hieronder

create or replace function public.koppel_poging_sleutel()
returns text language plpgsql stable security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_ip text; v_h json;
begin
  if v_uid is not null then return 'u:' || v_uid::text; end if;
  begin
    v_h := current_setting('request.headers', true)::json;
    v_ip := nullif(btrim(coalesce(v_h->>'cf-connecting-ip', v_h->>'sb-forwarded-for', '')), '');
  exception when others then v_ip := null;
  end;
  return 'ip:' || coalesce(left(v_ip, 60), 'onbekend');
end; $$;

-- true = nog ruimte; false = te veel mislukte pogingen het afgelopen uur.
create or replace function public.koppel_poging_mag(p_sleutel text)
returns boolean language sql stable security definer set search_path = public as $$
  select (select count(*) from koppel_pogingen where sleutel = p_sleutel and at > now() - interval '1 hour') < 30;
$$;

create or replace function public.claim_link_code(p_code text, p_child_name text)
returns jsonb language plpgsql security definer set search_path to 'public' as $function$
declare
  v_code_row link_codes%rowtype; v_link_id uuid; v_existing_id uuid; v_van_wie text; v_naam text; v_uid uuid := auth.uid(); v_aantal int;
  v_sleutel text := koppel_poging_sleutel(); v_gepakt int;
begin
  if not koppel_poging_mag(v_sleutel) then
    return jsonb_build_object('ok', false, 'error', 'te_veel_pogingen');
  end if;

  select * into v_code_row from link_codes
   where upper(code) = upper(trim(p_code)) and (expires_at is null or expires_at > now()) and used_at is null
   order by created_at desc limit 1;
  if not found then
    select * into v_code_row from link_codes
     where upper(code) = upper(trim(p_code)) and used_at > now() - interval '10 minutes'
     order by used_at desc limit 1;
    if found and v_uid is not null then
      if v_code_row.teacher_user_id is not null then
        select id into v_existing_id from leraar_leerling_links
         where teacher_user_id = v_code_row.teacher_user_id and lower(student_name) = lower(trim(p_child_name)) and student_user_id = v_uid limit 1;
        if v_existing_id is not null then
          return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'leraar',
            'van_wie', coalesce(nullif(trim(v_code_row.van_wie), ''), (select nullif(trim(display_name), '') from profiles where id = v_code_row.teacher_user_id)), 'herhaald', true);
        end if;
      else
        select id into v_existing_id from parent_child_links
         where parent_user_id = v_code_row.parent_user_id and lower(child_name) = lower(trim(p_child_name))
           and exists (select 1 from koppel_toestellen t where t.link_id = parent_child_links.id and t.user_id = v_uid) limit 1;
        if v_existing_id is not null then
          return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'ouder',
            'van_wie', coalesce(nullif(trim(v_code_row.van_wie), ''), (select nullif(trim(display_name), '') from profiles where id = v_code_row.parent_user_id)), 'herhaald', true);
        end if;
      end if;
    end if;
    insert into koppel_pogingen (sleutel) values (v_sleutel);
    return jsonb_build_object('ok', false, 'error', 'code_invalid_or_expired');
  end if;

  v_naam := coalesce(nullif(trim(v_code_row.child_name), ''), trim(p_child_name));
  if coalesce(v_naam, '') = '' then return jsonb_build_object('ok', false, 'error', 'naam_leeg'); end if;

  if v_code_row.teacher_user_id is not null then
    v_van_wie := coalesce(nullif(trim(v_code_row.van_wie), ''), (select nullif(trim(display_name), '') from profiles where id = v_code_row.teacher_user_id));
    update link_codes set used_at = now() where id = v_code_row.id and used_at is null;
    get diagnostics v_gepakt = row_count;
    if v_gepakt = 0 then
      -- net te laat (dubbele tik, of een ander toestel was eerder): was dit hetzelfde toestel, dan is het gewoon gelukt
      select id into v_existing_id from leraar_leerling_links
       where teacher_user_id = v_code_row.teacher_user_id and lower(student_name) = lower(v_naam) and v_uid is not null and student_user_id = v_uid limit 1;
      if v_existing_id is not null then
        return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'leraar', 'van_wie', v_van_wie, 'naam', v_naam, 'herhaald', true);
      end if;
      return jsonb_build_object('ok', false, 'error', 'code_invalid_or_expired');
    end if;
    select id into v_existing_id from leraar_leerling_links where teacher_user_id = v_code_row.teacher_user_id and lower(student_name) = lower(v_naam) limit 1;
    if v_existing_id is not null then
      update leraar_leerling_links set verified = true, verified_at = now(), student_user_id = coalesce(v_uid, student_user_id) where id = v_existing_id;
      v_link_id := v_existing_id;
    else
      insert into leraar_leerling_links (teacher_user_id, student_name, verified, verified_at, student_user_id)
      values (v_code_row.teacher_user_id, v_naam, true, now(), v_uid) returning id into v_link_id;
    end if;
    if v_uid is not null then insert into koppel_toestellen (link_id, user_id, soort) values (v_link_id, v_uid, 'leraar') on conflict do nothing; end if;
    return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'leraar', 'van_wie', v_van_wie, 'naam', v_naam, 'created', v_existing_id is null, 'updated', v_existing_id is not null);
  end if;

  v_van_wie := coalesce(nullif(trim(v_code_row.van_wie), ''), (select nullif(trim(display_name), '') from profiles where id = v_code_row.parent_user_id));
  select id into v_existing_id from parent_child_links where parent_user_id = v_code_row.parent_user_id and lower(child_name) = lower(v_naam) limit 1;
  if v_existing_id is null then
    select count(*) into v_aantal from parent_child_links where parent_user_id = v_code_row.parent_user_id and verified = true;
    if v_aantal >= 3 then return jsonb_build_object('ok', false, 'error', 'max_kinderen'); end if;
  end if;
  update link_codes set used_at = now() where id = v_code_row.id and used_at is null;
  get diagnostics v_gepakt = row_count;
  if v_gepakt = 0 then
    -- net te laat (dubbele tik, of een ander toestel was eerder): was dit hetzelfde toestel, dan is het gewoon gelukt
    select l.id into v_existing_id from parent_child_links l
     where l.parent_user_id = v_code_row.parent_user_id and lower(l.child_name) = lower(v_naam) and v_uid is not null
       and exists (select 1 from koppel_toestellen t where t.link_id = l.id and t.user_id = v_uid) limit 1;
    if v_existing_id is not null then
      return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'ouder', 'van_wie', v_van_wie, 'naam', v_naam, 'herhaald', true);
    end if;
    return jsonb_build_object('ok', false, 'error', 'code_invalid_or_expired');
  end if;
  if v_existing_id is not null then
    update parent_child_links set verified = true, verified_at = now(), child_user_id = coalesce(child_user_id, v_uid) where id = v_existing_id;
    v_link_id := v_existing_id;
  else
    insert into parent_child_links (parent_user_id, child_name, verified, verified_at, child_user_id)
    values (v_code_row.parent_user_id, v_naam, true, now(), v_uid) returning id into v_link_id;
  end if;
  if v_uid is not null then insert into koppel_toestellen (link_id, user_id) values (v_link_id, v_uid) on conflict do nothing; end if;
  return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'ouder', 'van_wie', v_van_wie, 'naam', v_naam, 'created', v_existing_id is null, 'updated', v_existing_id is not null);
end; $function$;

create or replace function public.koppel_diagnose(p_code text, p_child_name text default ''::text)
returns jsonb language plpgsql security definer set search_path to 'public' as $function$
declare
  v_code text := upper(regexp_replace(coalesce(p_code, ''), '[\s\-._]', '', 'g'));
  v_naam text := lower(btrim(coalesce(p_child_name, '')));
  v_uid uuid := auth.uid();
  v_mag_suggestie boolean := false;
  v_sleutel text := koppel_poging_sleutel();
  r link_codes%rowtype;
  alfabet text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  kandidaten text[] := '{}';
  i int; j int; c text;
  treffers text[];
begin
  if length(v_code) < 4 or length(v_code) > 8 then
    return jsonb_build_object('status', 'onbekend', 'suggestie', null);
  end if;
  -- 9 nov 2026: ook de diagnose telt als poging; boven de grens geen antwoord meer over welke code bestaat.
  if not koppel_poging_mag(v_sleutel) then
    return jsonb_build_object('status', 'onbekend', 'suggestie', null, 'te_veel', true);
  end if;
  insert into koppel_pogingen (sleutel) values (v_sleutel);

  if v_uid is not null then
    if (select count(*) from koppel_diagnose_log where uid = v_uid and at > now() - interval '1 hour') < 10 then
      v_mag_suggestie := true;
      insert into koppel_diagnose_log (uid) values (v_uid);
    end if;
  end if;

  select * into r from link_codes where upper(btrim(code)) = v_code order by created_at desc limit 1;
  if found then
    if r.used_at is not null then
      return jsonb_build_object(
        'status', 'gebruikt',
        'dagen', greatest(0, extract(day from now() - r.used_at))::int,
        'zelfde_naam', v_naam <> '' and (
          (r.parent_user_id is not null and exists (select 1 from parent_child_links l
             where l.parent_user_id = r.parent_user_id and lower(btrim(l.child_name)) = v_naam and l.verified = true))
          or (r.teacher_user_id is not null and exists (select 1 from leraar_leerling_links t
             where t.teacher_user_id = r.teacher_user_id and lower(btrim(t.student_name)) = v_naam))
        ));
    end if;
    if r.expires_at is not null and r.expires_at <= now() then
      return jsonb_build_object('status', 'verlopen');
    end if;
    return jsonb_build_object('status', 'geldig');
  end if;

  if not v_mag_suggestie then
    return jsonb_build_object('status', 'onbekend', 'suggestie', null);
  end if;

  for i in 1..length(v_code) loop
    for j in 1..length(alfabet) loop
      c := substr(alfabet, j, 1);
      if c <> substr(v_code, i, 1) then
        kandidaten := kandidaten || (substr(v_code, 1, i - 1) || c || substr(v_code, i + 1));
      end if;
    end loop;
    if i < length(v_code) then
      kandidaten := kandidaten || (substr(v_code, 1, i - 1) || substr(v_code, i + 1, 1) || substr(v_code, i, 1) || substr(v_code, i + 2));
    end if;
  end loop;

  select array_agg(distinct upper(btrim(code))) into treffers from link_codes
   where upper(btrim(code)) = any(kandidaten) and used_at is null and (expires_at is null or expires_at > now());

  return jsonb_build_object('status', 'onbekend',
    'suggestie', case when coalesce(array_length(treffers, 1), 0) = 1 then treffers[1] else null end);
end;
$function$;

create or replace function public.gezin_koppelingen_overnemen(p_oud_uid uuid, p_link_ids uuid[])
returns integer language plpgsql security definer set search_path to 'public' as $function$
declare
  v_uid uuid := auth.uid();
  v_anon boolean := coalesce((auth.jwt()->>'is_anonymous')::boolean, false);
  r record; v_bestaand uuid; v_n int := 0;
begin
  -- 27 okt 2026: koppelingen van de anonieme toestel-sessie overzetten naar het echte account.
  -- Kent het account dit kind al, dan blijft de anonieme koppeling staan (geen samenvoegen/verwijderen).
  if v_uid is null or v_anon or p_oud_uid is null or p_oud_uid = v_uid then return 0; end if;
  if coalesce(array_length(p_link_ids, 1), 0) not between 1 and 12 then return 0; end if;
  -- 9 nov 2026: alleen van een ANONIEME toestel-sessie. Zonder deze regel kon wie het uid van een echt
  -- ouder-account kende diens koppelingen naar zich toe halen.
  if not exists (select 1 from auth.users u where u.id = p_oud_uid and u.is_anonymous = true) then return 0; end if;
  for r in select * from parent_child_links where parent_user_id = p_oud_uid and id = any(p_link_ids) loop
    select id into v_bestaand from parent_child_links where parent_user_id = v_uid and lower(child_name) = lower(r.child_name) limit 1;
    if v_bestaand is null then
      update parent_child_links set parent_user_id = v_uid where id = r.id;
      v_n := v_n + 1;
    end if;
  end loop;
  insert into koppel_toestellen (link_id, user_id) select id, v_uid from parent_child_links where parent_user_id = v_uid on conflict do nothing;
  return v_n;
end; $function$;

create or replace function public.koppel_mijn_data(p_link_id uuid, p_naam text)
returns jsonb language plpgsql security definer set search_path to 'public' as $function$
declare
  v_uid uuid := auth.uid();
  v_naam text := lower(btrim(coalesce(p_naam, '')));
  v_link_naam text;
  n int; tot int := 0; t text;
begin
  if v_uid is null or p_link_id is null or v_naam = '' then return jsonb_build_object('ok', false); end if;
  select lower(child_name) into v_link_naam from parent_child_links where id = p_link_id and verified = true;
  if v_link_naam is null then return jsonb_build_object('ok', false, 'error', 'link_onbekend'); end if;
  -- 9 nov 2026: alleen een toestel dat bij deze koppeling hoort (of de ouder zelf) mag er werk aan hangen.
  if not kind_hoort_bij(p_link_id) then return jsonb_build_object('ok', false, 'error', 'geen_toegang'); end if;
  -- Alleen rijen van déze sessie (user_id = auth.uid()) met de naam van de koppeling of de getypte naam.
  foreach t in array array['leaderboard','learn_progress','topic_mastery','ref_mastery'] loop
    begin
      execute format('update public.%I set link_id = $1 where link_id is null and user_id = $2 and lower(player_name) in ($3, $4)', t)
        using p_link_id, v_uid, v_naam, v_link_naam;
      get diagnostics n = row_count; tot := tot + n;
    exception when unique_violation then
      -- botsing met al gekoppelde rijen (zelfde pad/stap): overslaan, geen dataverlies
      null;
    end;
  end loop;
  return jsonb_build_object('ok', true, 'gekoppeld', tot);
end;
$function$;

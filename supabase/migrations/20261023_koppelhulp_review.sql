-- 🩺 Koppelhulp — punten uit de review van 23 okt 2026.
--
-- 1) claim_link_code: valt het antwoord weg terwijl de claim op de server wél lukte (haperend
--    schooltablet), dan zag de herhaling de code als "gebruikt" en kreeg het kind "vraag een
--    nieuwe code" terwijl de koppeling al goed stond. Nu: dezelfde code, binnen 10 minuten,
--    dezelfde naam, en (als er een sessie is) dezelfde sessie → gewoon dezelfde koppeling terug.
-- 2) koppel_diagnose: de "bedoel je …?"-suggestie mag geen hulpmiddel worden om andermans vrije
--    codes te vinden. Max 10 diagnoses per sessie per uur; zonder sessie geen suggestie.

create or replace function public.claim_link_code(p_code text, p_child_name text)
returns jsonb
language plpgsql
security definer
set search_path to 'public'
as $function$
declare
  v_code_row link_codes%rowtype;
  v_link_id uuid;
  v_existing_id uuid;
  v_van_wie text;
begin
  select * into v_code_row
    from link_codes
   where upper(code) = upper(trim(p_code))
     and (expires_at is null or expires_at > now())
     and used_at is null
   order by created_at desc
   limit 1;

  if not found then
    -- Herhaling na een weggevallen antwoord: zelfde code, net gebruikt, zelfde naam (en sessie).
    select * into v_code_row
      from link_codes
     where upper(code) = upper(trim(p_code))
       and used_at > now() - interval '10 minutes'
     order by used_at desc
     limit 1;
    if found then
      if v_code_row.teacher_user_id is not null then
        select id into v_existing_id from leraar_leerling_links
         where teacher_user_id = v_code_row.teacher_user_id
           and lower(student_name) = lower(trim(p_child_name))
           and (auth.uid() is null or student_user_id is null or student_user_id = auth.uid())
         limit 1;
        if v_existing_id is not null then
          return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'leraar',
            'van_wie', coalesce(nullif(trim(v_code_row.van_wie), ''), (select nullif(trim(display_name), '') from profiles where id = v_code_row.teacher_user_id)),
            'herhaald', true);
        end if;
      else
        select id into v_existing_id from parent_child_links
         where parent_user_id = v_code_row.parent_user_id
           and lower(child_name) = lower(trim(p_child_name))
           and (auth.uid() is null or child_user_id is null or child_user_id = auth.uid())
         limit 1;
        if v_existing_id is not null then
          return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'ouder',
            'van_wie', coalesce(nullif(trim(v_code_row.van_wie), ''), (select nullif(trim(display_name), '') from profiles where id = v_code_row.parent_user_id)),
            'herhaald', true);
        end if;
      end if;
    end if;
    return jsonb_build_object('ok', false, 'error', 'code_invalid_or_expired');
  end if;

  update link_codes set used_at = now() where id = v_code_row.id;

  -- Leerkracht-koppeling
  if v_code_row.teacher_user_id is not null then
    v_van_wie := coalesce(
      nullif(trim(v_code_row.van_wie), ''),
      (select nullif(trim(display_name), '') from profiles where id = v_code_row.teacher_user_id)
    );
    select id into v_existing_id
      from leraar_leerling_links
     where teacher_user_id = v_code_row.teacher_user_id
       and lower(student_name) = lower(trim(p_child_name))
     limit 1;
    if v_existing_id is not null then
      update leraar_leerling_links
         set verified = true, verified_at = now(),
             student_user_id = coalesce(auth.uid(), student_user_id)
       where id = v_existing_id;
      return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'leraar', 'van_wie', v_van_wie, 'updated', true);
    end if;
    insert into leraar_leerling_links (teacher_user_id, student_name, verified, verified_at, student_user_id)
    values (v_code_row.teacher_user_id, trim(p_child_name), true, now(), auth.uid())
    returning id into v_link_id;
    return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'leraar', 'van_wie', v_van_wie, 'created', true);
  end if;

  -- Ouder-koppeling: naam van de ouder als er geen eigen label is ingevuld.
  v_van_wie := coalesce(
    nullif(trim(v_code_row.van_wie), ''),
    (select nullif(trim(display_name), '') from profiles where id = v_code_row.parent_user_id)
  );

  select id into v_existing_id
    from parent_child_links
   where parent_user_id = v_code_row.parent_user_id
     and lower(child_name) = lower(trim(p_child_name))
   limit 1;

  if v_existing_id is not null then
    update parent_child_links
       set verified = true, verified_at = now(),
           child_user_id = coalesce(auth.uid(), child_user_id)
     where id = v_existing_id;
    return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'ouder', 'van_wie', v_van_wie, 'updated', true);
  end if;

  insert into parent_child_links (parent_user_id, child_name, verified, verified_at, child_user_id)
  values (v_code_row.parent_user_id, trim(p_child_name), true, now(), auth.uid())
  returning id into v_link_id;

  return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'ouder', 'van_wie', v_van_wie, 'created', true);
end;
$function$;

-- Teller voor de diagnose (alleen intern; niemand kan erin lezen of schrijven behalve de functie).
create table if not exists public.koppel_diagnose_log (
  uid uuid not null,
  at timestamptz not null default now()
);
create index if not exists koppel_diagnose_log_uid_at on public.koppel_diagnose_log (uid, at desc);
alter table public.koppel_diagnose_log enable row level security;

create or replace function public.koppel_diagnose(p_code text, p_child_name text default '')
returns jsonb
language plpgsql
security definer
set search_path = public
volatile
as $$
declare
  v_code text := upper(regexp_replace(coalesce(p_code, ''), '[\s\-._]', '', 'g'));
  v_naam text := lower(btrim(coalesce(p_child_name, '')));
  v_uid uuid := auth.uid();
  v_mag_suggestie boolean := false;
  r link_codes%rowtype;
  alfabet text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  kandidaten text[] := '{}';
  i int; j int; c text;
  treffers text[];
begin
  if length(v_code) < 4 or length(v_code) > 8 then
    return jsonb_build_object('status', 'onbekend', 'suggestie', null);
  end if;

  if v_uid is not null then
    delete from koppel_diagnose_log where at < now() - interval '1 day';
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

  -- Typfout? Eén teken anders, of twee buren omgewisseld.
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
$$;

revoke all on function public.koppel_diagnose(text, text) from public;
grant execute on function public.koppel_diagnose(text, text) to anon, authenticated;

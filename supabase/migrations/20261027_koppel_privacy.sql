-- 27 okt 2026 — koppelketen: privacy + claim-regels (code-review koppelketen, punten A4, A6, D).
--
-- Probleem: link_id's staan via het scorebord openbaar (leaderboard SELECT true, kolom link_id),
-- en de kind-RPC's (bericht van thuis, klaargezet werk, voorkeur, koppel_namen) vroegen alleen een
-- link_id + voornaam. Wie het scorebord uitleest kon dus berichten en klaargezet werk van elk gezin
-- lezen. Oplossing: een link_id telt alleen voor de toestellen (auth.uid, ook anoniem) die de code
-- echt hebben ingewisseld. Tabel `koppel_toestellen` houdt die bij; bestaande koppelingen zonder
-- toestel binden zich aan het eerste toestel dat ze gebruikt (= het kind dat er al mee werkt).
--
-- Plus in claim_link_code: de naam óp de code (herstelcode voor "Brian") gaat vóór de getypte naam;
-- maximaal 3 bevestigde kinderen per ouder; de herhaal-route (zelfde code binnen 10 min) alleen voor
-- hetzelfde toestel.

create table if not exists public.koppel_toestellen (
  link_id uuid not null,
  user_id uuid not null,
  soort text not null default 'ouder' check (soort in ('ouder','leraar')),
  created_at timestamptz not null default now(),
  primary key (link_id, user_id)
);
alter table public.koppel_toestellen enable row level security;
-- Geen directe toegang: alleen via de SECURITY DEFINER-functies hieronder.
revoke all on public.koppel_toestellen from anon, authenticated;

-- Hoort dit toestel (auth.uid) bij deze ouder↔kind-koppeling? Legacy (nog geen toestel bekend): het
-- eerste toestel dat vraagt wordt eigenaar. Daarna alleen toestellen die de code inwisselden.
create or replace function public.kind_hoort_bij(p_link_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_bestaat boolean;
  v_toestellen int;
begin
  if v_uid is null or p_link_id is null then return false; end if;
  select true into v_bestaat from parent_child_links where id = p_link_id and verified = true;
  if not found then return false; end if;
  select count(*) into v_toestellen from koppel_toestellen where link_id = p_link_id;
  if v_toestellen = 0 then
    -- ook het toestel van de ouder zelf telt (ouder en kind op één telefoon)
    insert into koppel_toestellen (link_id, user_id) values (p_link_id, v_uid) on conflict do nothing;
    update parent_child_links set child_user_id = coalesce(child_user_id, v_uid) where id = p_link_id;
    return true;
  end if;
  if exists (select 1 from koppel_toestellen where link_id = p_link_id and user_id = v_uid) then return true; end if;
  -- de ouder zelf mag altijd (eigen account)
  return exists (select 1 from parent_child_links where id = p_link_id and parent_user_id = v_uid);
end;
$$;
grant execute on function public.kind_hoort_bij(uuid) to anon, authenticated;

-- Zelfde idee voor leerkracht↔leerling.
create or replace function public.leerling_hoort_bij(p_link_id uuid)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_toestellen int;
begin
  if v_uid is null or p_link_id is null then return false; end if;
  if not exists (select 1 from leraar_leerling_links where id = p_link_id and verified = true) then return false; end if;
  select count(*) into v_toestellen from koppel_toestellen where link_id = p_link_id;
  if v_toestellen = 0 then
    insert into koppel_toestellen (link_id, user_id, soort) values (p_link_id, v_uid, 'leraar') on conflict do nothing;
    update leraar_leerling_links set student_user_id = coalesce(student_user_id, v_uid) where id = p_link_id;
    return true;
  end if;
  if exists (select 1 from koppel_toestellen where link_id = p_link_id and user_id = v_uid) then return true; end if;
  return exists (select 1 from leraar_leerling_links where id = p_link_id and teacher_user_id = v_uid);
end;
$$;
grant execute on function public.leerling_hoort_bij(uuid) to anon, authenticated;

-- ── claim_link_code: naam op de code wint, max 3 kinderen, herhaal-route per toestel, toestel registreren ──
create or replace function public.claim_link_code(p_code text, p_child_name text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code_row link_codes%rowtype;
  v_link_id uuid;
  v_existing_id uuid;
  v_van_wie text;
  v_naam text;
  v_uid uuid := auth.uid();
  v_aantal int;
begin
  select * into v_code_row
    from link_codes
   where upper(code) = upper(trim(p_code))
     and (expires_at is null or expires_at > now())
     and used_at is null
   order by created_at desc
   limit 1;

  if not found then
    -- Herhaal-route (verbinding viel weg): zelfde code, zelfde naam, binnen 10 minuten — ALLEEN hetzelfde toestel.
    select * into v_code_row
      from link_codes
     where upper(code) = upper(trim(p_code))
       and used_at > now() - interval '10 minutes'
     order by used_at desc
     limit 1;
    if found and v_uid is not null then
      if v_code_row.teacher_user_id is not null then
        select id into v_existing_id from leraar_leerling_links
         where teacher_user_id = v_code_row.teacher_user_id
           and lower(student_name) = lower(trim(p_child_name))
           and student_user_id = v_uid
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
           and exists (select 1 from koppel_toestellen t where t.link_id = parent_child_links.id and t.user_id = v_uid)
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

  -- De naam die de ouder/leerkracht op de code zette gaat vóór wat het kind typt (herstelcode "Brian").
  v_naam := coalesce(nullif(trim(v_code_row.child_name), ''), trim(p_child_name));
  if coalesce(v_naam, '') = '' then
    return jsonb_build_object('ok', false, 'error', 'naam_leeg');
  end if;

  if v_code_row.teacher_user_id is not null then
    update link_codes set used_at = now() where id = v_code_row.id;
    v_van_wie := coalesce(
      nullif(trim(v_code_row.van_wie), ''),
      (select nullif(trim(display_name), '') from profiles where id = v_code_row.teacher_user_id)
    );
    select id into v_existing_id
      from leraar_leerling_links
     where teacher_user_id = v_code_row.teacher_user_id
       and lower(student_name) = lower(v_naam)
     limit 1;
    if v_existing_id is not null then
      update leraar_leerling_links
         set verified = true, verified_at = now(),
             student_user_id = coalesce(v_uid, student_user_id)
       where id = v_existing_id;
      v_link_id := v_existing_id;
    else
      insert into leraar_leerling_links (teacher_user_id, student_name, verified, verified_at, student_user_id)
      values (v_code_row.teacher_user_id, v_naam, true, now(), v_uid)
      returning id into v_link_id;
    end if;
    if v_uid is not null then
      insert into koppel_toestellen (link_id, user_id, soort) values (v_link_id, v_uid, 'leraar') on conflict do nothing;
    end if;
    return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'leraar', 'van_wie', v_van_wie, 'naam', v_naam,
      'created', v_existing_id is null, 'updated', v_existing_id is not null);
  end if;

  v_van_wie := coalesce(
    nullif(trim(v_code_row.van_wie), ''),
    (select nullif(trim(display_name), '') from profiles where id = v_code_row.parent_user_id)
  );

  select id into v_existing_id
    from parent_child_links
   where parent_user_id = v_code_row.parent_user_id
     and lower(child_name) = lower(v_naam)
   limit 1;

  if v_existing_id is null then
    -- Maximaal 3 bevestigde kinderen per ouder (Familie = tot 3 kinderen).
    select count(*) into v_aantal from parent_child_links where parent_user_id = v_code_row.parent_user_id and verified = true;
    if v_aantal >= 3 then
      return jsonb_build_object('ok', false, 'error', 'max_kinderen');
    end if;
  end if;

  update link_codes set used_at = now() where id = v_code_row.id;

  if v_existing_id is not null then
    update parent_child_links
       set verified = true, verified_at = now(),
           child_user_id = coalesce(child_user_id, v_uid)
     where id = v_existing_id;
    v_link_id := v_existing_id;
  else
    insert into parent_child_links (parent_user_id, child_name, verified, verified_at, child_user_id)
    values (v_code_row.parent_user_id, v_naam, true, now(), v_uid)
    returning id into v_link_id;
  end if;
  if v_uid is not null then
    insert into koppel_toestellen (link_id, user_id) values (v_link_id, v_uid) on conflict do nothing;
  end if;

  return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'ouder', 'van_wie', v_van_wie, 'naam', v_naam,
    'created', v_existing_id is null, 'updated', v_existing_id is not null);
end;
$$;

-- ── gezin_koppel_zelfde_apparaat: het ouder-toestel registreren als toestel van deze koppeling ──
-- (de functie zelf blijft; we wikkelen alleen de registratie erbij via een trigger op verified-rijen)
create or replace function public.koppel_toestel_bij_verified()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.verified = true and auth.uid() is not null then
    insert into koppel_toestellen (link_id, user_id) values (new.id, auth.uid()) on conflict do nothing;
  end if;
  return new;
end;
$$;
drop trigger if exists trg_koppel_toestel on public.parent_child_links;
create trigger trg_koppel_toestel
  after insert or update of verified on public.parent_child_links
  for each row execute function public.koppel_toestel_bij_verified();

-- ── kind-RPC's: alleen voor een toestel dat bij de koppeling hoort ──
create or replace function public.berichten_van_thuis(p_link_ids uuid[], p_child_name text)
returns table(id uuid, link_id uuid, tekst text, created_at timestamptz, gelezen_at timestamptz)
language plpgsql
security definer
set search_path = public
as $$
declare v_ids uuid[];
begin
  if coalesce(array_length(p_link_ids, 1), 0) not between 1 and 6 then return; end if;
  select coalesce(array_agg(x), '{}') into v_ids from unnest(p_link_ids) as x where kind_hoort_bij(x);
  return query
  select distinct on (b.link_id) b.id, b.link_id, b.tekst, b.created_at, b.gelezen_at
  from thuis_berichten b
  join parent_child_links l on l.id = b.link_id
  where b.link_id = any(v_ids)
    and l.verified = true
    and lower(btrim(l.child_name)) = lower(btrim(coalesce(p_child_name, '')))
    and b.created_at > now() - interval '14 days'
  order by b.link_id, b.created_at desc;
end;
$$;

create or replace function public.bericht_gelezen(p_id uuid, p_child_name text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare v_link uuid;
begin
  select b.link_id into v_link from thuis_berichten b where b.id = p_id;
  if v_link is null or not kind_hoort_bij(v_link) then return false; end if;
  update thuis_berichten b set gelezen_at = now()
    from parent_child_links l
   where b.id = p_id and l.id = b.link_id and b.gelezen_at is null
     and lower(btrim(l.child_name)) = lower(btrim(coalesce(p_child_name, '')));
  return found;
end;
$$;

-- Klaargezet werk: ouder-deel alleen met link_id van een eigen toestel (geen naam-terugval meer —
-- die liet iedereen die "Brian" typte het werk van Brian zien). Leerkracht-deel: eigen toestel of nog ongebonden.
create or replace function public.voor_jou_klaargezet(p_student_name text, p_link_id uuid default null)
returns table(id uuid, path_id text, titel text, emoji text, gedaan boolean, created_at timestamptz, bron text)
language plpgsql
security definer
set search_path = public
as $$
declare v_ouder_ok boolean := false;
begin
  if p_link_id is not null then v_ouder_ok := kind_hoort_bij(p_link_id); end if;
  return query
  select k.id, k.path_id, k.titel, k.emoji, k.gedaan, k.created_at, 'ouder'::text as bron
  from ouder_klaargezet k join parent_child_links l on l.id = k.link_id
  where v_ouder_ok and l.id = p_link_id and l.verified = true
  union all
  select k.id, k.path_id, k.titel, k.emoji, k.gedaan, k.created_at, 'leraar'::text as bron
  from leraar_klaargezet k join leraar_leerling_links l on l.id = k.link_id
  where l.verified = true and lower(l.student_name) = lower(btrim(p_student_name))
    and (l.student_user_id is null or l.student_user_id = auth.uid())
  order by created_at desc;
end;
$$;

create or replace function public.kind_klaargezet_gedaan(p_item_id uuid, p_child_name text, p_gedaan boolean default true, p_link_id uuid default null)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare v_ok int; v_link uuid;
begin
  select k.link_id into v_link from ouder_klaargezet k where k.id = p_item_id;
  if v_link is null or not kind_hoort_bij(v_link) then
    return jsonb_build_object('ok', false, 'error', 'geen_toegang');
  end if;
  update ouder_klaargezet k set gedaan = p_gedaan, gedaan_at = case when p_gedaan then now() else null end
    from parent_child_links l
   where k.id = p_item_id and l.id = k.link_id and l.verified = true;
  get diagnostics v_ok = row_count;
  return jsonb_build_object('ok', v_ok > 0);
end;
$$;

create or replace function public.voor_jou_voorkeur(p_link_id uuid)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
begin
  if p_link_id is null or not kind_hoort_bij(p_link_id) then return null; end if;
  return (select jsonb_build_object('groep', pcl.groep, 'voorkeur', pcl.voorkeur) from parent_child_links pcl where pcl.id = p_link_id);
end;
$$;

create or replace function public.koppel_namen(p_link_ids uuid[])
returns table(link_id uuid, rol text, van_wie text, voornaam text)
language plpgsql
security definer
set search_path = public
as $$
declare v_ouder uuid[]; v_leraar uuid[];
begin
  if auth.uid() is null or coalesce(array_length(p_link_ids, 1), 0) not between 1 and 12 then return; end if;
  select coalesce(array_agg(x), '{}') into v_ouder from unnest(p_link_ids) as x where exists (select 1 from parent_child_links l where l.id = x) and kind_hoort_bij(x);
  select coalesce(array_agg(x), '{}') into v_leraar from unnest(p_link_ids) as x where exists (select 1 from leraar_leerling_links t where t.id = x) and leerling_hoort_bij(x);
  return query
  select l.id, 'ouder'::text,
    (select nullif(btrim(c.van_wie), '') from link_codes c
      where c.parent_user_id = l.parent_user_id and lower(btrim(c.child_name)) = lower(btrim(l.child_name))
        and c.used_at is not null
      order by c.used_at desc limit 1),
    nullif(split_part(btrim(coalesce(p.display_name, '')), ' ', 1), '')
  from parent_child_links l
  left join profiles p on p.id = l.parent_user_id
  where l.id = any(v_ouder) and l.verified = true
  union all
  select t.id, 'leraar'::text,
    (select nullif(btrim(c.van_wie), '') from link_codes c
      where c.teacher_user_id = t.teacher_user_id and c.used_at is not null
      order by c.used_at desc limit 1),
    nullif(split_part(btrim(coalesce(p.display_name, '')), ' ', 1), '')
  from leraar_leerling_links t
  left join profiles p on p.id = t.teacher_user_id
  where t.id = any(v_leraar) and t.verified = true
  union all
  select x.id, 'weg'::text, null::text, null::text
  from unnest(p_link_ids) as x(id)
  where not exists (select 1 from parent_child_links l where l.id = x.id)
    and not exists (select 1 from leraar_leerling_links t where t.id = x.id);
end;
$$;

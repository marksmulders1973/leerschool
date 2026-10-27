-- 27 okt 2026 — één-tik koppelen op één toestel ZONDER account (Mark: "ja doe B").
-- Aanleiding: een ouder uit Apeldoorn (24 okt) tikte 5× op "Koppel X aan Y" en strandde op
-- "log eerst in als ouder" (maillink). Nu: de anonieme Supabase-sessie van het toestel is de ouder.
-- Later inloggen = koppelingen overzetten (gezin_koppelingen_overnemen). Weekmail: de ouder vult
-- een adres in (partner_email + bevestiging via /api/bevestig), dat adres telt dan als ouder-adres.

-- 1) één-tik koppelen: anonieme sessie toegestaan (uid moet er wel zijn)
create or replace function public.gezin_koppel_zelfde_apparaat(p_child_name text, p_groep text default null, p_voorkeur jsonb default null, p_verified boolean default true)
returns uuid language plpgsql security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid();
  v_naam text := btrim(coalesce(p_child_name, ''));
  v_id uuid; v_aantal int;
begin
  if v_uid is null then
    raise exception 'geen sessie' using errcode = '42501';
  end if;
  if v_naam = '' or length(v_naam) > 40 then
    raise exception 'naam ontbreekt of is te lang' using errcode = '22023';
  end if;
  select id into v_id from parent_child_links
   where parent_user_id = v_uid and lower(child_name) = lower(v_naam)
   order by created_at asc limit 1;
  if v_id is not null then
    update parent_child_links
       set groep = coalesce(nullif(btrim(p_groep), ''), groep),
           voorkeur = coalesce(p_voorkeur, voorkeur),
           verified = (verified or coalesce(p_verified, true)),
           verified_at = case when (verified or coalesce(p_verified, true)) and verified_at is null then now() else verified_at end
     where id = v_id;
    return v_id;
  end if;
  select count(*) into v_aantal from parent_child_links where parent_user_id = v_uid;
  if v_aantal >= 3 then
    raise exception 'maximaal 3 kinderen per gezin' using errcode = 'P0001';
  end if;
  insert into parent_child_links (parent_user_id, child_name, verified, verified_at, groep, voorkeur)
  values (v_uid, v_naam, coalesce(p_verified, true), case when coalesce(p_verified, true) then now() else null end,
          nullif(btrim(p_groep), ''), p_voorkeur)
  returning id into v_id;
  return v_id;
end; $$;

-- 2) later inloggen: koppelingen van de anonieme toestel-sessie overzetten naar het echte account.
--    Vereist het (geheime) oude uid én de link-id's die het toestel kent — allebei alleen op dat toestel.
create or replace function public.gezin_koppelingen_overnemen(p_oud_uid uuid, p_link_ids uuid[])
returns integer language plpgsql security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid();
  v_anon boolean := coalesce((auth.jwt()->>'is_anonymous')::boolean, false);
  r record; v_bestaand uuid; v_n int := 0;
begin
  -- Kent het account dit kind al, dan blijft de anonieme koppeling staan (geen samenvoegen/verwijderen:
  -- de Supabase-koppeling blokkeert functies met DELETE erin; zeldzaam geval, kind blijft werken).
  if v_uid is null or v_anon or p_oud_uid is null or p_oud_uid = v_uid then return 0; end if;
  if coalesce(array_length(p_link_ids, 1), 0) not between 1 and 12 then return 0; end if;
  for r in select * from parent_child_links where parent_user_id = p_oud_uid and id = any(p_link_ids) loop
    select id into v_bestaand from parent_child_links where parent_user_id = v_uid and lower(child_name) = lower(r.child_name) limit 1;
    if v_bestaand is null then
      update parent_child_links set parent_user_id = v_uid where id = r.id;
      v_n := v_n + 1;
    end if;
  end loop;
  -- ook de ouder zelf als toestel van de overgenomen koppelingen
  insert into koppel_toestellen (link_id, user_id) select id, v_uid from parent_child_links where parent_user_id = v_uid on conflict do nothing;
  return v_n;
end; $$;
grant execute on function public.gezin_koppelingen_overnemen(uuid, uuid[]) to authenticated;

-- 3) weekrapport: een ouder zonder account (geen e-mail in auth.users) krijgt de mail op het
--    bevestigde adres dat hij zelf invulde (partner_email + partner_email_bevestigd_at).
create or replace function public.ouder_weekrapport_kandidaten()
returns table(parent_email text, child_name text, child_user_id uuid, partner_email text, link_id uuid)
language plpgsql security definer set search_path = public as $$
begin
  return query
  select coalesce(u.email::text, case when pcl.partner_email_bevestigd_at is not null then pcl.partner_email end),
         pcl.child_name, pcl.child_user_id,
         case when u.email is not null and pcl.partner_email_bevestigd_at is not null then pcl.partner_email else null end,
         pcl.id
  from public.parent_child_links pcl
  join auth.users u on u.id = pcl.parent_user_id
  where pcl.verified = true and coalesce(pcl.weekmail, true) = true
    and (u.email is not null or (pcl.partner_email is not null and pcl.partner_email_bevestigd_at is not null));
end; $$;

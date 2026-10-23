-- 🩺 koppel_diagnose (Mark 23 okt 2026: "is er een koppel-assistent mogelijk, zodat het altijd lukt?")
--
-- Meting 30 dagen: 13 apparaten openden /koppelen, 3 kwamen tot "gelukt". Bij een mislukte code
-- zei de app alleen "al gebruikt of klopt niet" — ook als het een typfout was of als het kind
-- al gekoppeld was op een ander toestel. Deze functie zegt WAT er aan de hand is, zodat het
-- scherm de juiste volgende stap kan geven:
--   geldig     — code bestaat en is nog vrij (dan lag het aan iets anders, bv. de verbinding)
--   gebruikt   — al gebruikt; zelfde_naam = er bestaat bij die ouder al een koppeling met deze naam
--   verlopen   — oude code (van vóór 14 okt, toen codes nog 48 uur geldig waren)
--   onbekend   — bestaat niet; `suggestie` = de enige vrije code die één teken of één omwisseling
--                verschilt (typfout), anders null
-- Geeft nooit namen, e-mail of ouder-gegevens terug. Een suggestie verschijnt alleen voor wie de
-- code al bijna goed had.

create or replace function public.koppel_diagnose(p_code text, p_child_name text default '')
returns jsonb
language plpgsql
security definer
set search_path = public
stable
as $$
declare
  v_code text := upper(regexp_replace(coalesce(p_code, ''), '[\s\-._]', '', 'g'));
  v_naam text := lower(btrim(coalesce(p_child_name, '')));
  r link_codes%rowtype;
  alfabet text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  kandidaten text[] := '{}';
  i int; j int; c text;
  treffers text[];
begin
  if length(v_code) < 4 or length(v_code) > 8 then
    return jsonb_build_object('status', 'onbekend', 'suggestie', null);
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

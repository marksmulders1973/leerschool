-- 🔗 koppel_namen meldt ook koppelingen die niet meer bestaan (Mark 24 okt 2026, schermafbeelding:
-- "Brian — gekoppeld met Brian", terwijl die koppeling op de server al weg was). Een toestel dat nog
-- een verdwenen link_id bewaart, stuurt het oefenwerk naar een koppeling die niemand ziet. Nu krijgt
-- zo'n link_id een rij met rol 'weg'; de app ruimt hem dan op het toestel op (en biedt opnieuw
-- koppelen aan). Alleen 'weg' als het id in GEEN van beide koppeltabellen bestaat.

create or replace function public.koppel_namen(p_link_ids uuid[])
returns table (link_id uuid, rol text, van_wie text, voornaam text)
language sql
security definer
set search_path = public
stable
as $$
  select l.id, 'ouder'::text,
    (select nullif(btrim(c.van_wie), '') from link_codes c
      where c.parent_user_id = l.parent_user_id and lower(btrim(c.child_name)) = lower(btrim(l.child_name))
        and c.used_at is not null
      order by c.used_at desc limit 1),
    nullif(split_part(btrim(coalesce(p.display_name, '')), ' ', 1), '')
  from parent_child_links l
  left join profiles p on p.id = l.parent_user_id
  where auth.uid() is not null and coalesce(array_length(p_link_ids, 1), 0) between 1 and 12
    and l.id = any(p_link_ids) and l.verified = true
  union all
  select t.id, 'leraar'::text,
    (select nullif(btrim(c.van_wie), '') from link_codes c
      where c.teacher_user_id = t.teacher_user_id and c.used_at is not null
      order by c.used_at desc limit 1),
    nullif(split_part(btrim(coalesce(p.display_name, '')), ' ', 1), '')
  from leraar_leerling_links t
  left join profiles p on p.id = t.teacher_user_id
  where auth.uid() is not null and coalesce(array_length(p_link_ids, 1), 0) between 1 and 12
    and t.id = any(p_link_ids) and t.verified = true
  union all
  select x.id, 'weg'::text, null::text, null::text
  from unnest(p_link_ids) as x(id)
  where auth.uid() is not null and coalesce(array_length(p_link_ids, 1), 0) between 1 and 12
    and not exists (select 1 from parent_child_links l where l.id = x.id)
    and not exists (select 1 from leraar_leerling_links t where t.id = x.id);
$$;

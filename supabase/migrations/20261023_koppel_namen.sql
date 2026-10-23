-- 🔗 koppel_namen (Mark 23 okt 2026): "Bij Brian staat 'gekoppeld met thuis', wat is thuis?
-- Zeg liefst de naam, bv. pappa Mark."
--
-- Het kind-toestel kent per koppeling alleen het link_id (+ het "van wie"-label dat de ouder
-- invulde). Was dat label leeg en is de code geclaimd vóór 14 okt (toen claim_link_code nog
-- niet terugviel op de profielnaam), dan weet het toestel niet wie het is → "thuis".
--
-- Deze functie geeft voor bekende link_id's het label + de VOORNAAM van de ouder/leerkracht.
-- Geen e-mail, geen achternaam, geen kinddata.
-- Review 23 okt: link_id's staan ook in het publiek leesbare scorebord. Daarom: alleen met een
-- sessie (ook de anonieme kind-sessie telt), max 12 per keer (één gezin heeft er nooit meer),
-- alleen bevestigde koppelingen. Zo is in bulk namen oogsten niet mogelijk.

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
    and t.id = any(p_link_ids) and t.verified = true;
$$;

revoke all on function public.koppel_namen(uuid[]) from public;
grant execute on function public.koppel_namen(uuid[]) to anon, authenticated;

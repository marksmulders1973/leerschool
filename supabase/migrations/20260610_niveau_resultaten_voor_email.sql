-- B6: haal ref_mastery-telling op voor de ouder-mail, via de ENIGE veilige
-- keten: waitlist-e-mail -> auth-account -> GEVERIFIEERDE parent_child_link
-- -> kindnaam -> ref_mastery. Geen geverifieerde koppeling = geen rijen
-- (we matchen nooit op alleen een voornaam — privacy).
-- Toegepast op project 2026-06-10 via MCP.
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
  where lower(u.email) = lower(p_email)
  group by rm.onderdeel, rm.ref;
end;
$$;

-- Alleen de server (service role) mag dit aanroepen — het geeft kind-data
-- terug op basis van een e-mailadres.
revoke all on function public.niveau_resultaten_voor_email(text) from public;
revoke all on function public.niveau_resultaten_voor_email(text) from anon;
revoke all on function public.niveau_resultaten_voor_email(text) from authenticated;

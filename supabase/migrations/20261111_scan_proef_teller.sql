-- Scan je huiswerk (11 nov 2026): hoeveel scans deed dit apparaat ooit?
-- Telt de dagrijen 'uid:scan:<uid>' in ai_call_quota op. Alleen voor de server (service role).
-- Waarom een functie: de kolom heet `count`, en `select=count` via de REST-laag gaf niet de
-- kolomwaarden terug maar een telling, waardoor elk apparaat meteen "proefscans op" kreeg.
create or replace function public.scan_proef_teller(p_uid text)
returns bigint
language sql
stable
security definer
set search_path = public
as $$
  select coalesce(sum(q.count), 0)::bigint
  from public.ai_call_quota q
  where q.endpoint = 'uid:scan:' || p_uid;
$$;

revoke all on function public.scan_proef_teller(text) from public, anon, authenticated;
grant execute on function public.scan_proef_teller(text) to service_role;

-- 🕓 Weekrapport op de databaseklok (idee 84, 23 nov 2026).
--
-- De GitHub-planner startte het ouder-weekrapport drie vrijdagen op rij uren te laat
-- (6 nov 21:14, 13 nov 21:44, 20 nov 22:40 = buiten het venster → niets verstuurd).
-- pg_cron in de database loopt wél op tijd. Deze taak roept op vrijdagmiddag het
-- eindpunt /api/send-ouder-rapport aan met een eigen sleutel in de kop `x-db-klok`.
-- Het eindpunt vergelijkt die met admin_meta['weekrapport_klok_token'] (admin_meta heeft
-- RLS zonder regels: alleen de servicerol kan erbij) en verstuurt via deze deur alleen op
-- vrijdag tussen 16:00 en 21:59 Amsterdamse tijd. De datumstempel
-- admin_meta['ouder_rapport_last_sent'] voorkomt dubbel versturen, dus meerdere
-- startmomenten zijn veilig. De GitHub-workflow blijft bestaan als tweede rail; het
-- zaterdagochtend-vangnet zit in api/send-weekly-lesmateriaal.js.

-- Sleutel één keer aanmaken (bestaat hij al, dan blijft hij staan).
insert into public.admin_meta (key, value, updated_at)
values ('weekrapport_klok_token', encode(extensions.gen_random_bytes(32), 'hex'), now())
on conflict (key) do nothing;

create or replace function public.weekrapport_tik(p_droog boolean default false)
returns bigint
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  tok text;
  verzoek bigint;
begin
  select value into tok from public.admin_meta where key = 'weekrapport_klok_token';
  if tok is null or length(tok) < 32 then return null; end if;
  select net.http_get(
    url := 'https://leerkwartier.app/api/send-ouder-rapport' || case when p_droog then '?droog=1' else '' end,
    headers := jsonb_build_object('x-db-klok', tok),
    timeout_milliseconds := 60000
  ) into verzoek;
  return verzoek;
end $$;

revoke all on function public.weekrapport_tik(boolean) from public, anon, authenticated;

-- Vrijdag 16:00 Amsterdam = 15:00 UTC (wintertijd) of 14:00 UTC (zomertijd). Beide staan erin;
-- de te vroege start in de winter krijgt van het eindpunt "buiten-venster". Daarna twee herkansingen.
select cron.unschedule(jobname) from cron.job where jobname like 'weekrapport-vrijdag-%';
select cron.schedule('weekrapport-vrijdag-1400', '0 14 * * 5',  $$select public.weekrapport_tik()$$);
select cron.schedule('weekrapport-vrijdag-1500', '0 15 * * 5',  $$select public.weekrapport_tik()$$);
select cron.schedule('weekrapport-vrijdag-1530', '30 15 * * 5', $$select public.weekrapport_tik()$$);
select cron.schedule('weekrapport-vrijdag-1730', '30 17 * * 5', $$select public.weekrapport_tik()$$);

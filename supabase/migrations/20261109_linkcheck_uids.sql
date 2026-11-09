-- Idee 72 (Mark 9 nov 2026, "maak maar"): linkcontroles van social-platforms niet als mensen tellen.
-- Facebook/LinkedIn/Threads/X openen een gelinkte pagina binnen ~1 min na het plaatsen (9 nov: 5
-- "prijspagina-bezoeken" die allemaal zo ontstonden). Regel: apparaat waarvan de eerste hit een
-- social-bron + utm_campaign heeft, binnen 2 minuten na de allereerste hit van die bron+campagne,
-- met hooguit 4 passieve events binnen 30 s. Zelfde passief-definitie als scanner_uids (sep 2026).
create or replace view public.linkcheck_uids as
with soc as (
  select unnest(array['facebook','fb','linkedin','linkedin-pagina','threads','x','twitter','instagram','ig','pinterest']) s
), kand as (
  select distinct props->>'uid' uid from public.events_echt
  where props->>'utm_campaign' is not null and lower(coalesce(source,'')) in (select s from soc) and props->>'uid' is not null
), u as (
  select e.props->>'uid' uid, min(e.created_at) eerst, count(*) n,
    extract(epoch from max(e.created_at) - min(e.created_at)) sec,
    bool_and(e.name = any(array['bron_bezoek','partner_bezoek','partner_welkom_toon','deeplink_open']) or e.name like '%\_open' or e.name like '%\_toon' or e.name like '%\_geladen') passief,
    (array_agg(lower(e.source) order by e.created_at))[1] bron,
    (array_agg(e.props->>'utm_campaign' order by e.created_at))[1] cmp
  from public.events_echt e join kand k on k.uid = e.props->>'uid'
  group by 1
), c as (
  select lower(source) bron, props->>'utm_campaign' cmp, min(created_at) t0 from public.events_echt
  where props->>'utm_campaign' is not null and lower(coalesce(source,'')) in (select s from soc)
  group by 1, 2
)
select u.uid, u.eerst from u join c on c.bron = u.bron and c.cmp = u.cmp
where u.n <= 4 and u.sec <= 30 and u.passief and u.eerst <= c.t0 + interval '2 minutes';

create or replace view public.events_mens as
select id, name, props, path, source, session, created_at
from public.events_echt e
where not exists (select 1 from public.scanner_uids s where s.uid = e.props->>'uid')
  and not exists (select 1 from public.linkcheck_uids l where l.uid = e.props->>'uid');

revoke all on public.linkcheck_uids from anon, authenticated;

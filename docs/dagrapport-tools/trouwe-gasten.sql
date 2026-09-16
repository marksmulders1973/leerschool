-- 🌟 Trouwe gasten (idee H, 16 sep 2026) — vaste cockpit-meting.
-- 1) Gasten met ≥5 bezoekdagen zonder account (sinds 1 aug), en hoeveel daarvan ≥10.
with app as (
  select props->>'uid' as uid,
         count(distinct (created_at at time zone 'Europe/Amsterdam')::date) as dagen,
         bool_or(props->>'user_id' is not null) as heeft_account,
         bool_or(name='kwartier_reached') as kwartier
  from events_echt
  where props->>'uid' is not null and created_at >= '2026-08-01'
  group by 1
)
select count(*) filter (where dagen >= 5  and not heeft_account) as gast_5plus,
       count(*) filter (where dagen >= 10 and not heeft_account) as gast_10plus,
       count(*) filter (where dagen >= 5  and not heeft_account and kwartier) as gast_5plus_met_kwartier,
       count(*) filter (where dagen >= 5) as alle_5plus
from app;

-- 2) Het kaartje zelf: getoond → naam gekozen → overgeslagen (7 dagen), per plek.
select props->>'actie' as actie, props->>'plek' as plek,
       count(*) as n, count(distinct props->>'uid') as apparaten
from events_echt
where name = 'trouwe_gast_kaart' and created_at >= now() - interval '7 days'
group by 1,2 order by 1,2;

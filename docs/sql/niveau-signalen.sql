-- 📈 Niveaulijn fase 1 (30 sep 2026) — dagrapport-blok "Niveau-signalen".
-- Per groep van het kind: hoeveel antwoorden, % goed, gemiddelde moeilijkheid van de vragen,
-- hoe vaak "weet ik niet", en wat kinderen zelf zeiden (te makkelijk / goed / te moeilijk).
-- Bron: events_mens (zonder test/huishouden/scanners). Events: niveau_signaal, niveau_gevoel.

-- 1) Antwoorden per groep, laatste 7 dagen
select
  coalesce(props->>'groep', '?')                                  as groep,
  count(*)                                                        as antwoorden,
  count(distinct props->>'uid')                                   as apparaten,
  round(100.0 * avg((props->>'correct')::int), 0)                 as pct_goed,
  round(avg((props->>'moeilijkheid')::numeric), 1)                as gem_moeilijkheid,
  sum((props->>'weetniet')::int)                                  as weet_niet,
  round(avg((props->>'ms')::numeric) / 1000, 1)                   as gem_sec_per_vraag,
  round(avg((props->>'hints')::numeric), 2)                       as gem_hints
from events_mens
where name = 'niveau_signaal' and created_at >= now() - interval '7 days'
group by 1 order by 1;

-- 2) Goed-percentage per vak × verschil (moeilijkheid − groep): zit het kind in de 70-85%-zone?
select
  props->>'vak'                                                                        as vak,
  round((props->>'moeilijkheid')::numeric - (props->>'groep')::numeric, 0)             as verschil_tov_groep,
  count(*)                                                                             as n,
  round(100.0 * avg((props->>'correct')::int), 0)                                      as pct_goed
from events_mens
where name = 'niveau_signaal' and created_at >= now() - interval '28 days'
  and props->>'moeilijkheid' is not null and props->>'groep' is not null
group by 1, 2 having count(*) >= 5 order by 1, 2;

-- 3) Wat kinderen zelf zeiden (28 dagen)
select coalesce(props->>'groep', '?') as groep, props->>'gevoel' as gevoel, props->>'bron' as bron, count(*) as n
from events_mens
where name = 'niveau_gevoel' and created_at >= now() - interval '28 days'
group by 1, 2, 3 order by 1, 2, 3;

-- START-KWARTIER — komt een starter bij de eerste som? (idee BF, 26 sep 2026)
-- Aanleiding: 7-14 dgn vóór v726 beantwoordde maar ~half van de starters vraag 1; vraag 1 was het
-- moeilijkste rekenpad (procenten 14% goed, breuken 52%). v726: groep 6-8 opent met taal, vraag 1 uit de
-- eerste 2 stappen van dat pad. Vergelijk vóór/na op app_v. Gebruik events_mens (tel apparaten, geen sessies).
with s as (
  select props->>'uid' uid, created_at t, coalesce((props->>'app_v')::int, 0) v, props->>'groep' g
  from events_mens where name = 'startkwartier_start' and created_at > now() - interval '28 days'
)
select case when v >= 726 then 'na v726' else 'voor v726' end as periode,
       count(*) starts,
       count(*) filter (where exists (select 1 from events_mens e where e.props->>'uid' = s.uid
         and e.name = 'startkwartier_vraag' and e.created_at between s.t and s.t + interval '20 minutes')) met_vraag,
       round(100.0 * count(*) filter (where exists (select 1 from events_mens e where e.props->>'uid' = s.uid
         and e.name = 'startkwartier_vraag' and e.created_at between s.t and s.t + interval '20 minutes')) / nullif(count(*), 0)) pct
from s group by 1 order by 1;

-- Vraag 1 goed-percentage per pad (na v726 horen hier werkwoordsspelling-dt / doorstroomtoets-taal-g8 te staan)
select props->>'pad' pad, count(*) n, round(100.0 * avg(case when (props->>'goed')::boolean then 1 else 0 end)) pct_goed
from events_mens where name = 'startkwartier_vraag' and props->>'nummer' = '1' and (props->>'app_v')::int >= 726
group by 1 order by 2 desc;

-- Nulmeting 26 sep 2026 (14 dgn, vóór v726): 118 starts, 64 met vraag (54%); groep 8 slechts 19/53.

-- ============================================================
--  🪜 UITDAGINGSLADDER (v961, 16 okt 2026) — "waar gaat saai over in moeilijk?"
--  Kind tikt "Te makkelijk" → vraag uit het volgende deel → weer een tik, enz.
--  Events (props: pad, plek, van = deel waar het kind "te makkelijk" zei, 0-based):
--    uitdaging_start  {treden}
--    uitdaging_trede  {trede (1-based), stap, goed, gevoel?}
--    uitdaging_einde  {reden: goed | te-moeilijk | fout | top, grens (stap, 0-based), treden}
--    uitdaging_verder {stap}  → kind ging op de grens verder oefenen
--  In het rapport: deel = stap + 1.
-- ============================================================

-- 1) Per leerpad: waar ligt de grens? (laatste 28 dagen)
select props->>'pad' as pad,
  count(*) filter (where name = 'uitdaging_start')                          as gestart,
  count(*) filter (where name = 'uitdaging_einde')                          as afgemaakt,
  round(avg((props->>'van')::int + 1) filter (where name = 'uitdaging_einde'), 1)   as gem_deel_te_makkelijk,
  round(avg((props->>'grens')::int + 1) filter (where name = 'uitdaging_einde' and props->>'grens' is not null), 1) as gem_deel_grens,
  count(*) filter (where name = 'uitdaging_einde' and props->>'reden' = 'top')     as kon_alles,
  count(*) filter (where name = 'uitdaging_einde' and props->>'reden' = 'fout')    as grens_door_fout,
  count(*) filter (where name = 'uitdaging_verder')                         as ging_verder
from events_mens
where name like 'uitdaging\_%' and created_at >= now() - interval '28 days'
group by 1 order by gestart desc;

-- 2) Losse ladders (laatste 7 dagen), voor het verhaal in het dagrapport
select to_char(created_at at time zone 'Europe/Amsterdam', 'DD-MM HH24:MI') as wanneer,
  props->>'pad' as pad, (props->>'van')::int + 1 as van_deel,
  props->>'reden' as reden, (props->>'grens')::int + 1 as grens_deel, props->>'treden' as treden
from events_mens
where name = 'uitdaging_einde' and created_at >= now() - interval '7 days'
order by created_at desc;

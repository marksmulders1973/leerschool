-- 🌍 Nieuwkomer-pakket meten (Mark 25 sep 2026: "hoe vaak zijn de nieuwkomer-codes gebruikt, is er
-- gebruik gemaakt van vertaling en welke vertaling het meest"). Alles via events_mens (zonder
-- testaccounts en mailscanners). Eigen tests vallen er alleen uit als het apparaat als huishouden
-- gemarkeerd is — kijk bij kleine aantallen naar de tijdstippen.

-- 1) Codes: hoe vaak welke code is ingetikt (vanaf 25 sep met code; daarvoor zonder)
select coalesce(props->>'code','(voor 25 sep, onbekend)') code, count(*) keer, count(distinct props->>'uid') apparaten,
  to_char(max(created_at) at time zone 'Europe/Amsterdam','DD-MM HH24:MI') laatst
from events_mens where name = 'code_balk_nieuwkomer' group by 1 order by 2 desc;

-- 2) Hoe kwamen ze op /nieuwkomers: via een code of via een link (mail/digibord/doorverteld)
select coalesce(props->>'via','(voor 25 sep)') via, count(distinct props->>'uid') apparaten, count(*) keer
from events_mens where name = 'nieuwkomers_open' group by 1 order by 2 desc;

-- 3) Taalkeuze: welke steuntaal kiezen ze (knop bovenaan /nieuwkomers)
select props->>'taal' taal, count(distinct props->>'uid') apparaten
from events_mens where name = 'nieuwkomers_taal' group by 1 order by 2 desc;

-- 4) Vertaling echt gebruikt: tikken op een tekst (vraag/antwoord/uitleg/knop) per taal
select props->>'taal' taal, count(*) tikken, count(distinct props->>'uid') apparaten,
  count(*) filter (where props->>'soort' = 'vraag') op_vraag,
  count(*) filter (where props->>'soort' = 'optie') op_antwoord,
  count(*) filter (where props->>'soort' not in ('vraag','optie')) op_rest
from events_mens where name = 'steun_tik' group by 1 order by 2 desc;

-- 5) Welke onderdelen openen ze (tegels op /nieuwkomers)
select props->>'id' onderdeel, count(distinct props->>'uid') apparaten
from events_mens where name = 'nieuwkomers_tegel' group by 1 order by 2 desc;

-- 6) Trechter per dag: open → taal → tegel → vertaling getikt → vraag beantwoord in een nieuwkomerpad
select d::date dag,
  (select count(distinct props->>'uid') from events_mens where name='nieuwkomers_open' and created_at::date=d) open,
  (select count(distinct props->>'uid') from events_mens where name='nieuwkomers_taal' and created_at::date=d) taal,
  (select count(distinct props->>'uid') from events_mens where name='nieuwkomers_tegel' and created_at::date=d) tegel,
  (select count(distinct props->>'uid') from events_mens where name='steun_tik' and created_at::date=d) vertaling,
  (select count(distinct props->>'uid') from events_mens where name='question_answered' and props->>'bron' = 'leerpad' and props->>'pad' like '%nieuwkomers%' and created_at::date=d) oefende
from generate_series(current_date - 6, current_date, interval '1 day') d order by 1 desc;

-- 7) Oefenen per nieuwkomerpad + met welke steuntaal (vanaf 25 sep; leerpad-antwoorden zijn pas sinds v720 een event)
select props->>'pad' pad, coalesce(props->>'steuntaal','?') steuntaal, count(*) antwoorden,
  count(distinct props->>'uid') apparaten, round(100.0*avg(case when props->>'is_correct'='true' then 1 else 0 end)) pct_goed
from events_mens where name = 'question_answered' and props->>'bron' = 'leerpad' and props->>'pad' like '%nieuwkomers%'
group by 1,2 order by 3 desc;

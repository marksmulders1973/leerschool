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

-- 8) Doorgroeien: trede-testje (vanaf v752, 26 sep 2026) — geopend → gestart → klaar → geslaagd → diploma geprint
select props->>'trede' trede,
  count(distinct props->>'uid') filter (where name='nk_tredetest_open') geopend,
  count(distinct props->>'uid') filter (where name='nk_tredetest_start') gestart,
  count(distinct props->>'uid') filter (where name='nk_tredetest_klaar') klaar,
  count(distinct props->>'uid') filter (where name='nk_tredetest_klaar' and props->>'geslaagd'='true') geslaagd,
  count(distinct props->>'uid') filter (where name='nk_tredetest_print') geprint,
  round(avg((props->>'goed')::int) filter (where name='nk_tredetest_klaar'),1) gem_goed
from events_mens where name like 'nk_tredetest_%' group by 1 order by 1;

-- 9) Nieuwkomer-dictee (v753): groep 3 = nieuwkomer-stand
select count(distinct props->>'uid') filter (where name='dictee_start') gestart,
  count(distinct props->>'uid') filter (where name='dictee_klaar') klaar,
  round(avg((props->>'score')::numeric) filter (where name='dictee_klaar'),1) gem_score
from events_mens where name in ('dictee_start','dictee_klaar') and props->>'groep' = '3';

-- 10) Instap-testje (v756, stap 5): geopend → klaar, en waar beginnen ze?
select count(distinct props->>'uid') filter (where name='nk_instap_open') geopend,
  count(distinct props->>'uid') filter (where name='nk_instap_klaar') klaar,
  count(*) filter (where name='nk_instap_klaar' and props->>'start'='1') start_trede1,
  count(*) filter (where name='nk_instap_klaar' and props->>'start'='2') start_trede2,
  count(*) filter (where name='nk_instap_klaar' and props->>'start'='3') start_verder
from events_mens where name like 'nk_instap_%';

-- 11) Overstap naar de gewone app (v757, stap 6): welke groep, na welke tredes
select props->>'groep' groep, props->>'tredes' tredes, count(distinct props->>'uid') apparaten
from events_mens where name = 'nk_overstap' group by 1,2 order by 3 desc;

-- 12) Briefje voor thuis (v763): hoe vaak geopend door de juf, en hoeveel kinderen komen thuis binnen via de QR
select
  (select count(distinct props->>'uid') from events_mens where name = 'nk_thuisbrief_open') juf_opende_briefje,
  (select count(distinct props->>'uid') from events_mens where source = 'thuisbrief') via_qr_thuis,
  (select min(created_at at time zone 'Europe/Amsterdam') from events_mens where source = 'thuisbrief') eerste_qr;

-- 13) Delen vanaf /nieuwkomers (v766) + wie binnenkomt via een deellink
select
  (select json_object_agg(k, n) from (select props->>'kanaal' k, count(distinct props->>'uid') n from events_mens where name = 'nk_deel' group by 1) x) deelknop_per_kanaal,
  (select json_object_agg(s, n) from (select source s, count(distinct props->>'uid') n from events_mens where source in ('whatsapp','linkedin','deellink') and path like '/nieuwkomers%' group by 1) y) binnen_via_deellink;

-- 14) Tips/wensen vanaf /nieuwkomers (v773): geopend → verstuurd, en de berichten zelf (wensenbord, pending)
select (select count(distinct props->>'uid') from events_mens where name = 'nk_tip_open') tipvak_geopend,
       (select count(*) from events_mens where name = 'nk_tip' and props->>'ok' = 'true') tips_verstuurd;
select created_at at time zone 'Europe/Amsterdam' t, display_name, message from wishes where message like '[nieuwkomers%' order by created_at desc limit 10;

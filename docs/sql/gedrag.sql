-- ============================================================
--  GEDRAG — van binnenkomst tot leermoment (Mark 28 sep 2026:
--  "hoe komen ze binnen, met code, wat doen ze, waarom stoppen ze, leermoment")
--  Vast blok in elk dagrapport, onder de kerncijfers. Venster: 7 dagen.
--  Altijd events_mens (zonder test/mailscanners), tellen op apparaat (props->>'uid').
-- ============================================================

-- 1) BINNENKOMST — waar komen nieuwe apparaten vandaan? (eerste bron_bezoek per apparaat)
with eerste as (
  select distinct on (props->>'uid') props->>'uid' uid, props->>'bron' bron, source
  from events_mens where name = 'bron_bezoek' and created_at > now() - interval '7 days'
  order by props->>'uid', created_at
)
select case
    when bron like 'partner:%' or bron like 'code%' then 'partnercode (flyer/QR van organisatie)'
    when bron like 'ai:%' or bron ~ '^deel:(chatgpt|perplexity|copilot|gemini|claude)' then 'AI-assistent (ChatGPT e.d.)'
    when bron like 'zoek:%' or source in ('google','www.bing.com') then 'zoekmachine (Google/Bing)'
    when bron like 'pagina:%' then 'eigen landingspagina (bv. tafels-oefenen)'
    when bron = 'deel:clang' then 'Kinderhulp-nieuwsbrief'
    when bron in ('deel:qr-flyer','deel:klas-qr') then 'QR (flyer/klas)'
    when bron like 'social:%' or source in ('whatsapp','linkedin','fb','threads') then 'social / gedeelde link'
    when bron like 'deel:%' then 'overige deel-link (' || substr(bron, 6) || ')'
    when bron = 'direct' or bron is null then 'direct (getypt / bladwijzer / app)'
    else 'overig: ' || left(coalesce(bron, source, '?'), 30) end as ingang,
  count(*) apparaten
from eerste group by 1 order by 2 desc;

-- 1b) Welke codes brachten apparaten binnen (partner + nieuwkomers)
select coalesce(props->>'code', '?') code, count(distinct props->>'uid') apparaten
from events_mens where name in ('partner_bezoek','code_balk_nieuwkomer') and created_at > now() - interval '7 days'
group by 1 order by 2 desc limit 10;

-- 2) INLOGGEN — gast, naam of account? + gekozen rol
--    Let op: "account" via events is onbetrouwbaar (user_id zit niet in elk event) → nieuwe accounts
--    tellen via profiles_echt (zie 4). Deze query vooral voor de rolverdeling.
with a as (
  select props->>'uid' uid,
    bool_or(props->>'user_id' is not null) met_account,
    bool_or(name = 'name_entered') naam,
    max(case when name = 'role_selected' then props->>'role' end) rol
  from events_mens where created_at > now() - interval '7 days' and props->>'uid' is not null group by 1
)
select case when met_account then 'account' when naam then 'naam, geen account' else 'gast' end soort,
  coalesce(rol, '(geen rol gekozen)') rol, count(*) apparaten
from a group by 1, 2 order by 3 desc;

-- 3) WAT DOEN ZE — per apparaat de onderdelen die ze gebruikten
select onderdeel, count(distinct uid) apparaten from (
  select props->>'uid' uid, case
    when name = 'question_answered' then 'oefenen: ' || coalesce(props->>'bron', 'quiz')
    when name like 'startkwartier_%' then 'start-kwartier'
    when name like 'vandaag_%' then 'vandaag-knop'
    when name like 'vraag_vd_dag%' then 'vraag van de dag'
    when name like 'park_%' or name = 'game_start' then 'park/spel'
    when name like 'vonk_%' or name like 'buddy_%' then 'Charley'
    when name like 'nieuwkomers_%' or name like 'nk_%' then 'nieuwkomers'
    when name like 'digibord_%' or name like 'klas_%' then 'klas/digibord'
    when name like 'ww_%' or name like 'dictee_%' then 'dictee/werkwoorden'
    when name = 'mijn_pagina_open' then 'Mijn pagina'
    end onderdeel
  from events_mens where created_at > now() - interval '7 days'
) x where onderdeel is not null group by 1 order by 2 desc limit 15;

-- 4) WAAR STOPPEN ZE — trechter per apparaat (7 dagen). "Vraag" = elk antwoord: oefenvraag,
--    vraag van de dag, dictee, werkwoorden, nieuwkomers-testjes, start-kwartier (fix 28 sep).
with a as (
  select props->>'uid' uid,
    count(*) filter (where name in ('question_answered','vraag_vd_dag_answered','ww_antwoord','dictee_woord','nk_tredetest_antwoord','nk_instap_antwoord','nk_herhaal_antwoord','startkwartier_vraag')) vragen,
    bool_or(name = 'role_selected' or name like 'partner_welkom%' or name = 'nieuwkomers_open' or name = 'startkwartier_start' or name = 'vraag_vd_dag_actueel_geladen') gekozen,
    bool_or(name = 'kwartier_reached') kwartier,
    count(distinct (created_at at time zone 'Europe/Amsterdam')::date) dagen
  from events_mens where created_at > now() - interval '7 days' and props->>'uid' is not null group by 1
)
select count(*) binnen, count(*) filter (where gekozen) iets_gekozen, count(*) filter (where vragen >= 1) eerste_vraag,
  count(*) filter (where vragen >= 5) vijf_vragen, count(*) filter (where kwartier) kwartier_gehaald, count(*) filter (where dagen >= 2) kwam_terug,
  (select count(*) from profiles_echt where created_at > now() - interval '7 days') nieuwe_accounts_7d,
  (select count(distinct props->>'uid') from events_mens where name = 'name_entered' and created_at > now() - interval '7 days') naam_ingevuld
from a;

-- 4a) Per ingang: welk deel van de nieuwe apparaten beantwoordt minstens één vraag?
with eerste as (
  select distinct on (props->>'uid') props->>'uid' uid, props->>'bron' bron
  from events_mens where name = 'bron_bezoek' and created_at > now() - interval '7 days' order by props->>'uid', created_at
), vr as (
  select distinct props->>'uid' uid from events_mens where created_at > now() - interval '7 days'
  and name in ('question_answered','vraag_vd_dag_answered','ww_antwoord','dictee_woord','nk_tredetest_antwoord','nk_instap_antwoord','startkwartier_vraag')
)
select case when bron like 'partner:%' then 'partnercode' when bron like 'zoek:%' then 'zoekmachine' when bron like 'pagina:%' then 'landingspagina'
            when bron = 'deel:clang' then 'Kinderhulp-nieuwsbrief' when bron = 'direct' or bron is null then 'direct' else 'overig' end ingang,
  count(*) nieuw, count(vr.uid) deed_vraag, round(100.0 * count(vr.uid) / count(*)) pct
from eerste left join vr using (uid) group by 1 order by 2 desc;

-- 4b) Wie géén enkele vraag beantwoordde: wat was hun laatste stap? (= waar haken ze af)
--     ⚠️ Duiden (les 28 sep): "startkwartier_laad" als laatste stap = de vraag stond al in beeld
--     (laden duurt mediaan 0,08 s, p90 0,3 s) → dat is "vraag 1 gezien, niet beantwoord", GEEN wachttijd.
with sessies as (
  select session, props->>'uid' uid, bool_or(name = 'question_answered') vroeg
  from events_mens where created_at > now() - interval '7 days' group by 1, 2
), laatste as (
  select distinct on (e.session) e.session, e.name, e.path
  from events_mens e join sessies s on s.session = e.session and not s.vroeg
  where e.created_at > now() - interval '7 days'
  order by e.session, e.created_at desc
)
select name laatste_stap, path, count(*) bezoeken from laatste group by 1, 2 order by 3 desc limit 8;

-- 5) LEERMOMENT — gaat er iets in?
select
  count(*) filter (where name = 'question_answered') antwoorden,
  round(100.0 * avg(case when props->>'is_correct' = 'true' then 1 when props->>'is_correct' = 'false' then 0 end) filter (where name = 'question_answered')) pct_goed,
  count(distinct props->>'uid') filter (where name = 'kwartier_reached') kwartier_apparaten,
  count(distinct props->>'uid') filter (where name = 'dont_know_clicked') weet_niet_knop,
  count(distinct props->>'uid') filter (where name like 'vonk_hulp%') hulp_van_charley,
  count(distinct props->>'uid') filter (where name = 'quiz_quit') gestopt_midden_in_toets,
  count(distinct props->>'uid') filter (where name = 'leerpad_stop_bewaard') leerpad_gepauzeerd
from events_mens where created_at > now() - interval '7 days';

-- 6) START-KWARTIER: beantwoordt het kind vraag 1? (opwarmvraag sinds v767, 28 sep 2026; doel 70%)
with s as (
  select session, min(created_at) filter (where name = 'startkwartier_start') t0,
    count(*) filter (where name = 'question_answered' and props->>'bron' = 'startkwartier') antw
  from events_mens where created_at > now() - interval '28 days' and (name = 'startkwartier_start' or name = 'question_answered') group by 1
)
select case when t0 < '2026-09-26 12:00+00' then '1 oud (vraag 1 uit leerpad)'
            when t0 < '2026-09-28 12:00+00' then '2 makkelijke taalvraag (26-28 sep)'
            else '3 opwarmvraag (v767+)' end periode,
  count(*) starts, round(100.0 * count(*) filter (where antw >= 1) / nullif(count(*), 0)) pct_vraag1, count(*) filter (where antw >= 5) alle_5
from s where t0 is not null group by 1 order by 1;

-- 7) ERE-SCHERM na partnercode (v772, 28 sep 2026): doet men een vraag, of bewaart de ouder de link?
--    Nulmeting 21-28 sep: 42 apparaten zagen het scherm, 1 deed daarna een vraag.
select
  count(distinct props->>'uid') filter (where name = 'partner_eer_vraag') vraag_op_erescherm,
  count(distinct props->>'uid') filter (where name = 'partner_eer_vraag' and props->>'goed' = 'true') goed,
  count(distinct props->>'uid') filter (where name = 'partner_eer_bewaar') link_bewaard,
  count(distinct props->>'uid') filter (where source = 'zelf-bewaard') later_teruggekomen_via_bewaarde_link
from events_mens where created_at > '2026-09-28 16:00+00';

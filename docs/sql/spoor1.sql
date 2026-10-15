-- ============================================================
--  SPOOR 1 — TELLER PER SOORT ORGANISATIE (idee 11, 15 okt 2026)
--  Vast blok in het dagrapport t/m ~wo 22 okt (en daarna zolang er
--  nog bezoekers via spoor 1 binnenkomen).
--
--  Kolommen in het rapport:  gemaild · antwoord · apparaten · oefenende kinderen
--    gemaild  = OK-regels in docs/outreach/SPOOR1-ZEND-*.md (zie SPOOR1-TELLER.md)
--    antwoord = tabel in docs/outreach/SPOOR1-TELLER.md (bij elke mail-check bijwerken)
--    apparaten / oefenend = deze query
--
--  Meetlinks: utm_source=bibliotheek / gezin / bso  →  bron deel:bibliotheek / deel:gezin / deel:bso
--
--  🔴 LES 15 OKT: de eerste 8 "bibliotheek-bezoekers" waren ALLEMAAL mailscanners
--  (1 event per apparaat, 4-5 apparaten in dezelfde milliseconde, soms met een
--  verzonnen label als deel:cvcyvbguffx). De view scanner_uids vangt alleen golven
--  van ≥ 8 apparaten in 6 minuten, dus deze kleine bursts zitten nog in events_mens.
--  Daarom telt een apparaat hier pas als het iets DEED: minstens één event dat niet
--  passief is (zelfde definitie van passief als scanner_uids).
--
--  Labels met een punt erachter (deel:bibliotheek.) worden samengevoegd; sinds
--  v958 haalt bron.js die punt zelf al weg (idee 10).
-- ============================================================

with bron as (
  select props->>'uid' as uid,
         regexp_replace(props->>'bron', '[._-]+$', '') as bron,
         min(created_at) as eerst
  from events_mens
  where name = 'bron_bezoek'
    and created_at >= '2026-10-15'
    and regexp_replace(props->>'bron', '[._-]+$', '') in ('deel:bibliotheek', 'deel:gezin', 'deel:bso')
  group by 1, 2
),
gedrag as (
  select e.props->>'uid' as uid,
         count(*) as events,
         bool_or(not (e.name in ('bron_bezoek','partner_bezoek','partner_welkom_toon','deeplink_open')
                      or e.name like '%\_open' or e.name like '%\_toon' or e.name like '%\_geladen')) as deed_iets,
         count(*) filter (where e.name = 'question_answered') as vragen,
         count(distinct (e.created_at at time zone 'Europe/Amsterdam')::date) as dagen
  from events_mens e
  join bron b on b.uid = e.props->>'uid'
  group by 1
)
select
  case b.bron when 'deel:bibliotheek' then 'bibliotheken'
              when 'deel:gezin'       then 'gezinsorganisaties'
              when 'deel:bso'         then 'kinderopvang' end   as soort,
  count(*)                                                    as apparaten_ruw,
  count(*) filter (where g.deed_iets)                         as apparaten_echt,
  count(*) filter (where g.vragen > 0)                        as oefenende_kinderen,
  coalesce(sum(g.vragen), 0)                                  as vragen,
  count(*) filter (where g.dagen >= 2)                        as kwamen_terug,
  to_char(max(b.eerst) at time zone 'Europe/Amsterdam', 'DD Mon HH24:MI') as laatste_binnen
from bron b
join gedrag g on g.uid = b.uid
group by 1
order by 1;

-- ------------------------------------------------------------
--  IJKPUNT 15 okt 2026 18:00: bibliotheken 5 ruw · 0 echt · 0 oefenend
--  (alle 5 = scanners). gezin en bso: nog niet gemaild.
-- ------------------------------------------------------------

-- 25 sep 2026: events_mens = events_echt zonder mailscanner-golven (idee AX, view scanner_uids).
-- ============================================================
--  NOORD-STER — de officiele tellingen van Leerkwartier
--  Aangelegd 22 sep 2026 (idee AL uit het Meesterplan van 21 sep).
--
--  WAAROM DIT BESTAAT
--  Tot nu toe stond de Noord-ster alleen als getal in
--  docs/DAGRAPPORT-KOMPAS.md en werd de query elke editie opnieuw
--  uit het hoofd bedacht. Op 21 sep leverde dat een getal op dat
--  10x hoger was dan de reeks (617 tegen 51), omdat er op `session`
--  werd geteld in plaats van op apparaat. Vanaf nu: DEZE queries,
--  niets anders. Wijkt een rapport af, dan is het rapport fout.
--
--  DE KERN: tel op props->>'uid', NOOIT op `session`.
--    * `session`  = een bezoek. Wie morgen terugkomt is een nieuwe sessie.
--    * props->>'uid' = het apparaat, blijft gelijk over dagen heen.
--      (100% gevuld over de laatste 28 dagen, gecontroleerd 22 sep 2026.)
--  Tellen op session maakt van elke terugkomer een nieuwe gebruiker
--  en laat de groei er veel mooier uitzien dan hij is.
--
--  Gebruik altijd `events_mens` (testaccounts zijn er al uit gefilterd).
-- ============================================================


-- ------------------------------------------------------------
-- 1. NOORD-STER (7 dagen) — het hoofdcijfer
--    Apparaten die in de laatste 7 dagen op MINSTENS 2 VERSCHILLENDE
--    DAGEN langskwamen. Dus: mensen die terugkomen, niet die een keer
--    langswippen. Doel van Project Titan: 1.000.
--
--    LET OP bij het duiden: dit is een ROLLEND venster. Valt er een
--    drukke dag uit (zoals de nieuwsbriefdag 10 sep), dan verliezen
--    veel apparaten hun tweede bezoekdag en daalt het getal zonder dat
--    er iets is veranderd aan het gedrag. Meld zo'n daling NOOIT als
--    gedragsdaling — zet er de 28-daagse lijn (query 2) naast.
-- ------------------------------------------------------------
select count(*) as noordster_7d
from (
  select props->>'uid' as uid
  from events_mens
  where created_at > now() - interval '7 days'
    and props->>'uid' is not null
  group by 1
  having count(distinct date_trunc('day', created_at at time zone 'Europe/Amsterdam')) >= 2
) q;


-- ------------------------------------------------------------
-- 2. 28-DAAGSE LIJN — de rustige lijn, hoort ALTIJD naast query 1
--    Zelfde definitie, breder venster: apparaten met >=2 bezoekdagen
--    in 28 dagen. Schommelt veel minder, laat de echte trend zien.
--    Vervang het eerste interval door '56 days' / '28 days' voor de
--    vorige periode als vergelijking.
-- ------------------------------------------------------------
select count(*) as terugkomers_28d
from (
  select props->>'uid' as uid
  from events_mens
  where created_at > now() - interval '28 days'
    and props->>'uid' is not null
  group by 1
  having count(distinct date_trunc('day', created_at at time zone 'Europe/Amsterdam')) >= 2
) q;


-- ------------------------------------------------------------
-- 3. KWARTIEREN — "soepel geteld", zoals besloten op 18 sep (v677)
--    kwartier_reached vuurt op een dag met 15 minuten OP de site EN
--    minstens een leermoment. De klok loopt breed (zoeken naar sommen
--    telt mee als leren), maar zonder leermoment telt de dag niet.
--    De lijst leermomenten staat in src/utils.js (LEERMOMENT_EVENTS);
--    nieuwe oefenvorm erbij? Daar toevoegen, en hier.
--
--    Rapporteer het aantal APPARATEN (distinct uid), niet het aantal
--    events: een apparaat kan op meerdere dagen een kwartier halen.
-- ------------------------------------------------------------
select
  count(distinct props->>'uid') as kwartier_apparaten,
  count(*)                      as kwartier_dagen
from events_mens
where name = 'kwartier_reached'
  and created_at >= date_trunc('month', now());


-- ------------------------------------------------------------
-- 4. TREND PER WEEK — voor de grafiek in het dagrapport
--    Acht kalenderweken terug. Wijkt een paar punten af van query 1,
--    want dat is een rollend venster en dit zijn vaste weken.
-- ------------------------------------------------------------
with d as (
  select props->>'uid' as uid,
         date_trunc('day', created_at at time zone 'Europe/Amsterdam')::date as dag
  from events_mens
  where props->>'uid' is not null
),
weken as (select generate_series(0, 7) as n)
select
  (current_date - (weken.n * 7))                                as week_tot,
  (select count(*) from (
     select uid from d
     where dag > (current_date - (weken.n * 7) - 7)
       and dag <= (current_date - (weken.n * 7))
     group by uid having count(distinct dag) >= 2
   ) q)                                                          as noordster,
  (select count(distinct uid) from d
    where dag > (current_date - (weken.n * 7) - 7)
      and dag <= (current_date - (weken.n * 7)))                 as alle_apparaten
from weken
order by week_tot desc;


-- ------------------------------------------------------------
--  IJKPUNT 22 sep 2026 14:55 — hiermee controleer je of een
--  wijziging de tellingen stuk maakt:
--    query 1 (Noord-ster 7d) .......... 43   (week ervoor: 38)
--    query 2 (28d-lijn) ............... 104  (vorige 28 dgn: 22)
--    query 3 (kwartieren september) ... 56 apparaten / 75 dagen
--  En ter waarschuwing, dezelfde dag op `session` geteld: 617.
--  Dat getal is FOUT en hoort nergens in een rapport.
-- ------------------------------------------------------------

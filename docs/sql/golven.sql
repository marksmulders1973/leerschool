-- ============================================================
--  GOLVEN — wat levert één partner-actie blijvend op?
--  Aangelegd 22 sep 2026 op verzoek van Mark ("meet die drie golven apart").
--
--  DE VRAAG DIE DIT BEANTWOORDT
--  Een nieuwsbrief of flyerronde geeft een piek in bezoekers. Die piek
--  zegt niets. Wat telt voor Project Titan is hoeveel TERUGKOMERS er
--  overblijven — apparaten met >=2 bezoekdagen (zie noordster.sql).
--  Kinderhulp is de maatstaf: 322 apparaten -> 59 terugkomers = 18%.
--
--  DRIE GOLVEN IN DE MAAK (stand 22 sep 2026, allemaal nog vóór de start):
--    BUURTGEZINNEN2027   interne nieuwsbrief -> 23 sep
--    ENSCHEDE2027        Leergeld Enschede, nieuwsbrief -> datum onbekend
--    HAARLEMMERMEER2027  flyers in goodiebags -> geregeld 21 sep
--
--  Tel op props->>'uid' (apparaat), NOOIT op session. Zie noordster.sql.
-- ============================================================


-- ------------------------------------------------------------
-- 1. OVERZICHT PER GOLF — het hoofdcijfer
--    Elk apparaat telt mee bij de code waarmee het VOOR HET EERST
--    binnenkwam, zodat een later bezoek via Google de bron niet wist.
-- ------------------------------------------------------------
with e as (
  select props->>'uid' as uid,
         coalesce(props->>'code', props->>'partner', props->>'bron') as code,
         name, created_at,
         date_trunc('day', created_at at time zone 'Europe/Amsterdam')::date as dag
  from events_echt where props->>'uid' is not null
),
toewijzing as (
  select distinct on (uid) uid, code, dag as eerste_dag
  from e
  where code in ('BUURTGEZINNEN2027','ENSCHEDE2027','HAARLEMMERMEER2027','KINDERHULP2027','ALKMAAR2027')
  order by uid, created_at
)
select t.code,
       count(distinct t.uid)                                   as apparaten,
       min(t.eerste_dag)                                       as eerste_bezoek,
       count(distinct t.uid) filter (where exists (
         select 1 from e where e.uid = t.uid
         group by e.uid having count(distinct e.dag) >= 2))     as terugkomers,
       round(100.0 * count(distinct t.uid) filter (where exists (
         select 1 from e where e.uid = t.uid
         group by e.uid having count(distinct e.dag) >= 2))
         / nullif(count(distinct t.uid), 0), 1)                 as terugkom_pct,
       count(distinct t.uid) filter (where exists (
         select 1 from e where e.uid = t.uid and e.name = 'question_answered')) as oefende,
       count(distinct t.uid) filter (where exists (
         select 1 from e where e.uid = t.uid and e.name = 'kwartier_reached'))  as kwartier
from toewijzing t
group by t.code
order by apparaten desc;


-- ------------------------------------------------------------
-- 2. DAG VOOR DAG NA DE START — vul de code en de startdatum in
--    Laat de staart zien: papier werkt dagen door, een mail piekt
--    op dag 1. Bij Alkmaar kwamen de bezoeken op 13:44, 09:52, 17:09
--    en 23:25 — nooit op het moment van uitdelen.
-- ------------------------------------------------------------
with e as (
  select props->>'uid' as uid,
         coalesce(props->>'code', props->>'partner', props->>'bron') as code,
         name, created_at,
         date_trunc('day', created_at at time zone 'Europe/Amsterdam')::date as dag
  from events_echt where props->>'uid' is not null
),
golf as (
  select distinct on (uid) uid, dag as eerste_dag
  from e
  where code = 'BUURTGEZINNEN2027'          -- <<< code invullen
    and created_at >= date '2026-09-23'     -- <<< startdatum invullen
  order by uid, created_at
)
select g.eerste_dag                                as dag,
       (g.eerste_dag - date '2026-09-23') + 1      as dagnr,
       count(*)                                    as nieuwe_apparaten,
       count(*) filter (where exists (
         select 1 from e where e.uid = g.uid and e.name = 'question_answered')) as oefende,
       count(*) filter (where exists (
         select 1 from e where e.uid = g.uid and e.name = 'kwartier_reached'))  as kwartier
from golf g
group by g.eerste_dag
order by g.eerste_dag;


-- ------------------------------------------------------------
--  NULMETING 22 sep 2026 14:58 — alles hieronder is van VÓÓR de golven.
--  Wat er na deze datum bijkomt, is aan de actie toe te rekenen.
--
--    code                 appar.  terugk.  kwartier  oefende  1e bezoek
--    KINDERHULP2027         322      59       25       38     8 sep  <- maatstaf, 18% terug
--    BUURTGEZINNEN2027       10       0        1        1    21 aug
--    ALKMAAR2027              8       3        2        3     5 aug
--    HAARLEMMERMEER2027       1       0        0        0    27 aug
--    ENSCHEDE2027             0       -        -        -    nog geen enkel bezoek
--
--  LET OP bij het lezen van Alkmaar: 8 apparaten, niet de 13 die eerder
--  gemeld is. Dat oudere getal was op `session` geteld en dus te hoog.
-- ------------------------------------------------------------

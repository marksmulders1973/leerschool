-- ============================================================
--  KLASGOLF-RADAR — ziet een klas die het adres van het bord overtypt
--  Aangelegd 22 sep 2026 (idee AM, Mark: "maak maar").
--
--  AANLEIDING
--  Ma 21 sep 2026: 68 nieuwe leerling-apparaten tussen 10 en 12 uur, bron
--  "direct" (adres ingetypt, geen link), allemaal rol "leerling", zonder
--  partnercode. De helft was na twee klikken weg. Dat was een juf met
--  "leerkwartier.app" op het digibord — en wij zagen het pas achteraf.
--
--  DEFINITIE klasgolf: >= 20 NIEUWE apparaten (eerste bezoek ooit) binnen
--  één klokuur, op een schooldag (ma-vr) tussen 08:00 en 16:00, waarvan
--  de meerderheid bron "direct" heeft. Eén klas is 20-30 kinderen; twee
--  klassen tegelijk halen makkelijk 50.
--
--  Draai dit in élk dagrapport voor de afgelopen 7 dagen. Elke gevonden
--  golf hoort in het rapport met: dag + uur, aantal, bron-verdeling,
--  eerste pad, hoeveel er een som maakten, en of er een klascode is gezien.
--  Tel op props->>'uid', nooit op session (zie noordster.sql).
-- ============================================================

with e as (
  select props->>'uid' as uid,
         coalesce(source, '(leeg)') as bron,
         name, path, created_at,
         (created_at at time zone 'Europe/Amsterdam') as lokaal
  from events_echt
  where props->>'uid' is not null
),
eerste as (
  -- eerste bezoek ooit per apparaat
  select uid, min(lokaal) as eerste_lokaal from e group by uid
),
nieuw_per_uur as (
  select date_trunc('hour', eerste_lokaal) as uur,
         count(*) as nieuwe_apparaten,
         count(*) filter (where exists (
           select 1 from e x where x.uid = f.uid and x.bron in ('(leeg)', 'direct')
             and x.lokaal < f.eerste_lokaal + interval '5 minutes')) as direct,
         count(*) filter (where exists (
           select 1 from e x where x.uid = f.uid and x.name = 'question_answered')) as maakte_som,
         count(*) filter (where exists (
           select 1 from e x where x.uid = f.uid and x.name = 'kwartier_reached')) as kwartier,
         count(*) filter (where exists (
           select 1 from e x where x.uid = f.uid and x.name in ('partner_bezoek', 'klas_open'))) as met_code_of_klas
  from eerste f
  where f.eerste_lokaal > (now() at time zone 'Europe/Amsterdam') - interval '7 days'
  group by 1
)
select to_char(uur, 'Dy DD-MM HH24:00') as wanneer,
       nieuwe_apparaten,
       direct,
       round(100.0 * direct / nieuwe_apparaten) as direct_pct,
       maakte_som,
       kwartier,
       met_code_of_klas,
       case
         when nieuwe_apparaten >= 20
          and extract(isodow from uur) between 1 and 5
          and extract(hour from uur) between 8 and 15
          and direct >= nieuwe_apparaten / 2
         then '🏫 KLASGOLF'
         when nieuwe_apparaten >= 20 then 'piek (geen schooltijd of niet direct)'
         else ''
       end as oordeel
from nieuw_per_uur
where nieuwe_apparaten >= 10
order by uur desc;

-- ------------------------------------------------------------
--  Meten of /klas werkt (sinds v684): apparaten die via de klas-ingang
--  binnenkwamen, en wat ze daarna deden. Vergelijk met de klasgolf-cohort
--  van 21 sep (153 nieuw, 16 met som = 10%, 2 kwartier).
-- ------------------------------------------------------------
select date_trunc('day', created_at at time zone 'Europe/Amsterdam')::date as dag,
       count(distinct props->>'uid') filter (where name = 'klas_open')        as klas_open,
       count(distinct props->>'uid') filter (where name = 'klas_vraag')       as beantwoordde,
       count(distinct props->>'uid') filter (where name = 'klas_klaar')       as rondde_af,
       count(distinct props->>'uid') filter (where name = 'klas_naar_juf')    as juf_klik
from events_echt
where name like 'klas_%' and created_at > now() - interval '28 days'
group by 1 order by 1 desc;

-- (3) QR-hoek per klas (v713, 25 sep 2026): per digibord (k) hoe vaak de QR stond
--     en hoeveel apparaten thuis via die QR binnenkwamen. Thuis > 0 = klas → thuis werkt.
SELECT props->>'k' AS klas,
  COUNT(*) FILTER (WHERE name = 'klas_qr_getoond') AS keer_getoond,
  COUNT(DISTINCT props->>'uid') FILTER (WHERE name = 'klas_qr_thuis') AS thuis_apparaten,
  to_char(MAX(created_at) AT TIME ZONE 'Europe/Amsterdam', 'DD-MM HH24:MI') AS laatst
FROM events_echt
WHERE name IN ('klas_qr_getoond', 'klas_qr_thuis') AND created_at >= now() - interval '30 days'
GROUP BY 1 ORDER BY thuis_apparaten DESC, keer_getoond DESC;

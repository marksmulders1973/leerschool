-- 🧭 Startpagina oud (foto's, t/m 9 nov 14:05) tegen nieuw (vak-knoppen, v1068+) — idee 71.
-- Vast blok in elk dagrapport tot ~23 nov (Mark 9 nov: "kijk nu en komende dagen of dit nieuwe
-- startscherm het beter doet als het oude"). Alleen nieuwe apparaten (eerste event ooit) die op "/"
-- binnenkwamen zonder partnercode; wat ze deden in hun eerste 10 minuten. events_mens = zonder test,
-- mailscanners en social-linkcontroles. Oud = de 28 dagen ervoor als basislijn.
with e as (select props->>'uid' uid, name, path, created_at from events_mens
           where created_at > timestamptz '2026-11-09 14:05+01' - interval '28 days' and props->>'uid' is not null),
f as (select distinct on (uid) uid, path p0, created_at t0 from e order by uid, created_at),
nc as (select f.uid, f.t0, case when f.t0 >= '2026-11-09 14:05+01' then 'nieuw' else 'oud' end periode from f
  where f.p0 = '/' and not exists (select 1 from e x where x.uid = f.uid and x.name in ('partner_bezoek','partner_welkom_toon'))),
s as (select nc.periode, nc.uid, e.name from nc join e on e.uid = nc.uid and e.created_at < nc.t0 + interval '10 minutes'),
per as (select periode, uid, count(*) n, bool_or(name = 'question_answered') vraag, bool_or(name = 'home_vak_knop') vak,
          bool_or(name = 'startkwartier_einde') sk_af from s group by 1, 2)
select periode,
  count(*) bezoekers,
  round(100.0 * count(*) filter (where vraag) / count(*), 1) pct_vraag_10min,
  round(100.0 * count(*) filter (where n <= 2) / count(*), 1) pct_niets,
  count(*) filter (where vak) vak_knop,
  count(*) filter (where sk_af) startkwartier_af
from per group by 1 order by 1;

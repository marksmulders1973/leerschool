-- ============================================================
--  PARTNER-KOSTEN (idee AO, Mark 22 sep 2026: "klinkt goed")
--  "Wat kostte de Ooievaarspas ons deze maand aan AI?"
--  Bron: ai_call_quota, sleutels `partner:<CODE>:<endpoint>` (v686, api/_guard.js
--  telPartnerCall; de client stuurt header x-lk-partner mee).
--  Prijzen = schattingen uit het dagrapport: tutor/buddy/leg-uit ~€0,005,
--  generate-questions/preview ~€0,025 per call. Alleen apparaten mét een
--  actieve partnercode tellen mee; een Ooievaarspas-kind zonder code is onzichtbaar.
--  LET OP totaal-rapportages: `endpoint not like 'uid:%' and endpoint not like 'partner:%'`.
-- ============================================================

-- 1. Per partner, deze maand
select split_part(endpoint, ':', 2) as code,
       sum(count) as calls,
       round(sum(count * case when split_part(endpoint, ':', 3) in ('generate-questions','preview-topic') then 0.025 else 0.005 end)::numeric, 2) as kosten_eur
from ai_call_quota
where endpoint like 'partner:%'
  and date >= date_trunc('month', (now() at time zone 'Europe/Amsterdam'))::date
group by 1 order by calls desc;

-- 2. Per partner per endpoint, laatste 30 dagen
select split_part(endpoint, ':', 2) as code, split_part(endpoint, ':', 3) as endpoint, sum(count) as calls
from ai_call_quota
where endpoint like 'partner:%' and date >= current_date - 30
group by 1,2 order by 1,3 desc;

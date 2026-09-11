-- Terugkom-meting partner-claimers (idee 4, dagrapport 11 sep 2026).
-- Vraag: hoeveel gezinnen die een partnercode claimden, komen op dag 3-7 terug en oefenen thuis?
-- Draaien in het dagrapport vanaf ma 14 sep (Kinderhulp-cohort 10-11 sep), daarna wekelijks per code.
-- Beslisregel: 0-2 terug van 13 → volgende stap is een terugkom-haakje voor claimers
-- (weekmail voor thuis aanbieden op het claim-scherm), NIET meer bereik. Bouwen pas na 24 sep + Mark-go.
with claims as (
  select code, visitor_uid, user_id, created_at as claimed_at
  from partner_claims
  where code = :'code'   -- bv. KINDERHULP2027
),
terug as (
  select c.code, c.visitor_uid,
         bool_or(e.created_at >= c.claimed_at + interval '2 days' and e.created_at < c.claimed_at + interval '8 days') as terug_dag3_7,
         bool_or(e.name = 'question_answered' and e.created_at >= c.claimed_at + interval '2 days') as oefende_later
  from claims c
  left join events_echt e on e.props->>'uid' = c.visitor_uid
  group by c.code, c.visitor_uid
)
select code,
       count(*) as claimers,
       count(*) filter (where terug_dag3_7) as terug_dag3_7,
       count(*) filter (where oefende_later) as oefende_later
from terug group by code;
-- Let op: koppeling via props->>'uid' controleren tegen de werkelijke event-props (session/uid);
-- als partner_claims.visitor_uid niet in events zit, koppel via user_id → profiles.

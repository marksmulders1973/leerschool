-- ============================================================
--  KOPPELINGEN — ouder ↔ kind (en leerkracht ↔ leerling)
--  Aangelegd 18 okt 2026. Mark: "ik wil zoveel als mogelijk weten over de koppelingen,
--  hoeveel mensen het gebruiken, wat er gebeurt etc, want dat is het model, ik zoek
--  naar verbeterpunten." → vast blok "🔗 Koppelingen" in elk dagrapport.
--
--  De keten (elke stap = een plek waar het kan lekken):
--   1. ouder komt binnen        home_cta_ouder · partner_welkom_ouder
--   2. begint te koppelen       koppelen_open (code-route) · gezinsstart_open (zelfde apparaat)
--   3. maakt het af             koppelen_klaar · gezinsstart_klaar · ouder_koppelcode_deel
--   4. koppeling bestaat        parent_child_links (verified, child_user_id, weekmail)
--   5. kind oefent              ⚠️ nog NIET per kind meetbaar (zie onderaan)
--   6. ouder krijgt weekrapport mail_log soort ouder-rapport (vrijdag)
--   7. ouder klikt in de mail   events met utm_campaign ouder-rapport-*
--   8. ouder zet iets klaar     ouder_klaargezet → kind doet het (gedaan_at)
--  Altijd zonder huishouden/testaccounts (household_accounts).
-- ============================================================

-- 1) KOPPELINGEN — stand + groei (zonder eigen tests)
with hh as (select user_id from household_accounts),
pcl as (select * from parent_child_links
        where parent_user_id not in (select user_id from hh)
          and coalesce(child_user_id, '00000000-0000-0000-0000-000000000000') not in (select user_id from hh))
select count(*) koppelingen, count(distinct parent_user_id) ouders,
  count(*) filter (where verified) bevestigd,
  count(*) filter (where child_user_id is not null) kind_heeft_eigen_account,
  count(*) filter (where weekmail) weekmail_aan,
  count(*) filter (where created_at > now() - interval '7 days') nieuw_7d,
  count(distinct parent_user_id) filter (where created_at > now() - interval '7 days') nieuwe_ouders_7d
from pcl;

-- 2) PER OUDER — waar kwam de ouder vandaan, hoeveel kinderen, welke groepen
with hh as (select user_id from household_accounts)
select left(md5(l.parent_user_id::text), 6) ouder, p.signup_bron bron,
  count(*) kinderen, string_agg(coalesce(l.groep, '?'), ',' order by l.created_at) groepen,
  to_char(min(l.created_at) at time zone 'Europe/Amsterdam', 'DD-MM') eerste_koppeling,
  count(*) filter (where l.child_user_id is not null) met_kind_account
from parent_child_links l left join profiles p on p.id = l.parent_user_id
where l.parent_user_id not in (select user_id from hh)
group by 1, 2 order by min(l.created_at) desc;

-- 3) TRECHTER 28 dagen — van ouder-ingang tot klaar (apparaten)
select name, count(*) keer, count(distinct props->>'uid') apparaten
from events_mens
where created_at > now() - interval '28 days'
  and name in ('home_cta_ouder', 'partner_welkom_ouder', 'koppelen_open', 'gezinsstart_open', 'gezinsstart_apparaat',
               'gezinsstart_stap1', 'gezinsstart_stap2', 'gezinsstart_klaar', 'koppel_blok_klik', 'ouder_koppelcode_deel',
               'koppelen_klaar', 'mijn_ouder_kind_wissel')
group by 1 order by 3 desc;

-- 4) KOPPELCODES — gemaakt vs gebruikt
with hh as (select user_id from household_accounts)
select count(*) gemaakt, count(*) filter (where used_at is not null) gebruikt,
  count(*) filter (where created_at > now() - interval '7 days') gemaakt_7d,
  count(*) filter (where used_at > now() - interval '7 days') gebruikt_7d,
  count(*) filter (where used_at is null and expires_at < now()) verlopen_ongebruikt
from link_codes where coalesce(parent_user_id, teacher_user_id) not in (select user_id from hh);

-- 5) WEEKRAPPORT — verstuurd per vrijdag + kliks (utm_campaign per knop sinds v691)
select to_char(created_at at time zone 'Europe/Amsterdam', 'YYYY-MM-DD') dag, count(*) verstuurd
from mail_log where soort ilike '%ouder%' group by 1 order by 1;
select props->>'utm_campaign' knop, count(*) kliks, count(distinct props->>'uid') apparaten
from events_mens where props->>'utm_campaign' ilike 'ouder-rapport%' and created_at > now() - interval '28 days'
group by 1 order by 2 desc;

-- 6) KLAARGEZET door ouder → gedaan door kind
select count(*) klaargezet, count(*) filter (where gedaan_at is not null) gedaan,
  count(*) filter (where created_at > now() - interval '28 days') klaargezet_28d,
  count(*) filter (where gedaan_at > now() - interval '28 days') gedaan_28d
from ouder_klaargezet k join parent_child_links l on l.id = k.link_id
where l.parent_user_id not in (select user_id from household_accounts);

-- ⚠️ MEETGAT (18 okt 2026): of een gekoppeld kind oefent is niet te zien.
--   8 van de 12 koppelingen hebben géén child_user_id (gezinsstart: kind speelt op het
--   apparaat van de ouder) en events dragen geen link-id. topic_mastery heeft 0 rijen voor
--   gekoppelde kinderen. Voorstel: link-id/kind-profiel meesturen met question_answered,
--   dan kan stap 5 ("kind oefent na koppelen") en "komt terug" per gezin.

-- 7) KOPPEL-FEEDBACK (v971, 18 okt 2026) — vraag na elke koppelpoging (KoppelFeedback.jsx)
--    route: kind-code (gelukt) · kind-fout (mislukt, + fout) · gezinsstart (ouder, wizard klaar)
select props->>'route' route, props->>'oordeel' oordeel, props->>'wens' wens, props->>'fout' fout,
  count(*) keer, string_agg(nullif(props->>'tekst', ''), ' | ') teksten
from events_mens where name = 'koppel_feedback' and created_at > now() - interval '28 days'
group by 1, 2, 3, 4 order by 1, 5 desc;

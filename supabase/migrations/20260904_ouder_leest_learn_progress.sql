-- 📚 Ouder mag het leerpad-werk van het eigen gekoppelde kind lezen.
-- Mark 4 sep 2026: hij koppelde met Brian, Brian deed begrijpend lezen, en het
-- ouder-overzicht bleef leeg.
--
-- Twee oorzaken; dit is de tweede (de eerste was frontend: het overzicht las
-- alleen `leaderboard`, nooit `learn_progress`).
--
-- De enige SELECT-policy op learn_progress was:
--     ((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR (user_id IS NULL)
-- Een kind schrijft zijn rijen op zijn EIGEN user_id. Een ingelogde ouder
-- vroeg dus altijd nul rijen op — ook met een kloppende link_id.
--
-- Zelfde model als "Parent manages klaargezet for own links" op
-- ouder_klaargezet: toegang via de koppeling, en alleen als die bevestigd is
-- (verified = true), gelijk aan de privacy-regel die de ouder-pagina al voor
-- scores hanteert (audit-3 K6, 8 mei 2026).
--
-- Geverifieerd na toepassen:
--   • als Mark (f420dcdb…): 2 paden zichtbaar — alinea 4 stappen, lezen 1 stap
--   • als een andere ouder (6f50ee39…): 0 rijen
create policy "Parent reads learn_progress of own verified child"
on public.learn_progress
for select
to authenticated
using (
  link_id is not null
  and exists (
    select 1
    from public.parent_child_links l
    where l.id = learn_progress.link_id
      and l.parent_user_id = auth.uid()
      and l.verified = true
  )
);

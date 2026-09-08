-- 👩‍🏫 Leerkracht mag het leerpad-werk van de eigen bevestigde leerling lezen.
-- Mark 4 sep 2026: "doe de leerkracht kant ook" — spiegel van
-- 20260904_ouder_leest_learn_progress.sql.
--
-- Zelfde blokkade: de enige SELECT-policy op learn_progress gaf een ingelogde
-- gebruiker alleen zijn eigen rijen (user_id = auth.uid()). Een leerkracht zag
-- daardoor niets van een INGELOGDE leerling. Bij een niet-ingelogde leerling
-- (user_id is null) werkte het toevallig wel — daardoor viel het gat niet op.
--
-- Geverifieerd met een testrij binnen een teruggedraaide transactie:
--   • eigen leerkracht (9acc0bdb…): 1 rij zichtbaar
--   • andere volwassene (f420dcdb…): 0 rijen
create policy "Teacher reads learn_progress of own verified student"
on public.learn_progress
for select
to authenticated
using (
  link_id is not null
  and exists (
    select 1
    from public.leraar_leerling_links l
    where l.id = learn_progress.link_id
      and l.teacher_user_id = auth.uid()
      and l.verified = true
  )
);

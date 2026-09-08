-- 📝 Per vraag bewaren hoe het ging (Mark 4 sep 2026: "kan daar per vraag
-- iets staan als goed/fout/overgeslagen").
--
-- Tot nu toe bewaarde learn_progress per stap alleen `attempts`, en dat was
-- bovendien alleen het aantal pogingen van de LAATSTE vraag van die stap:
-- advanceAfterEvidence() zet attempts terug op 1 bij elke volgende vraag. Een
-- stap van 5 vragen liet dus 4 uitslagen vallen. Brians pad "Begrijpend lezen"
-- heeft 25 vragen over 5 stappen; daarvan bewaarden we er 5.
--
-- Vorm: array met per vraag het aantal FOUTE pogingen vóór het goede antwoord.
--   [0, 1, 0, 0, 2]  = vraag 1 in één keer goed, vraag 2 na één fout, enz.
-- null = onbekend (alle rijen van vóór deze migratie).
--
-- Bewust een jsonb-kolom en geen aparte tabel: klein, vast lijstje dat altijd
-- samen met de stap-rij gelezen en geschreven wordt.
--
-- NB: in een leerpad kán een vraag niet overgeslagen worden — je gaat pas
-- verder als het antwoord goed is. "Overgeslagen" bestaat dus alleen als
-- "stap nog niet gedaan" (geen rij). Bij toetsen ligt dat anders.
alter table public.learn_progress
  add column if not exists check_fouten jsonb;

comment on column public.learn_progress.check_fouten is
  'Per vraag van deze stap het aantal foute pogingen vóór het goede antwoord, bv. [0,1,0]. Null = onbekend (rij van vóór 4 sep 2026).';

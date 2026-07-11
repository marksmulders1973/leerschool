-- Bug-jacht 2026-07-11 (bevestigd, ernst middel): admin_meta had RLS UIT en
-- anon/authenticated hadden volledige rechten (insert/update/delete/truncate).
-- Daarmee kon iedereen met de publieke anon-key de rij
-- 'ouder_rapport_last_sent' op vandaag zetten (= maandag-ouderrapport
-- onderdrukken) of de park-nulmeting wissen. De API's gebruiken de
-- service-role-key (bypasst RLS), dus dichtzetten breekt niets.
-- Toegepast op het project via MCP op 2026-07-11.

alter table public.admin_meta enable row level security;
revoke all on table public.admin_meta from anon, authenticated;
-- Geen policies = met RLS aan is de tabel voor anon/authenticated volledig dicht.

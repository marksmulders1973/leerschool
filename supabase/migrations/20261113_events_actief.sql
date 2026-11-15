-- 13 nov 2026 (idee 83): robot-vaste telling van apparaten.
--
-- Aanleiding: twee robots in drie dagen (11 nov datacenters, 12 nov woonhuis-proxy's).
-- Beide openen alleen pagina's (bron_bezoek, padprint_open, leerpad_open) en komen niet terug.
-- Per apparaat is zo'n robot niet te onderscheiden van een mens die een pagina opent en weer
-- weggaat. De enige telling die geen robot kan vervuilen is: apparaten die iets DEDEN.
--
-- events_actief = events_mens, alleen van apparaten die ooit minstens een actieve melding
-- stuurden. "Passief" volgt dezelfde regel als in scanner_uids en linkcheck_uids:
-- bron_bezoek, partner_bezoek, partner_welkom_toon, deeplink_open, en alles wat eindigt
-- op _open, _toon of _geladen.
--
-- events_mens zelf is NIET veranderd: de historische reeks apparaten blijft staan.
-- Eerst getest en verworpen: "apparaat telt pas bij >5 s of >3 meldingen" in events_mens.
-- Die regel liet op do 12 nov nog 36 robots door en haalde 40 % van alle apparaten uit
-- oktober weg (mensen met een enkel paginabezoek).
--
-- IJkpunt 13 nov 2026 15:40:
--   actieve apparaten 7 dagen ........ 182  (7 dagen ervoor 257)
--   alle apparaten events_mens 7 d ... 724  (met beide robots erin)
--   beantwoorde vragen 7 d ........... 4.551 in beide views (oefenende kinderen blijven heel)
--   per maand, alle -> actief: sep 1.209 -> 603 · okt 1.399 -> 624 · nov t/m 13e 967 -> 272

create view public.events_actief as
  select e.id, e.name, e.props, e.path, e.source, e.session, e.created_at
  from public.events_mens e
  where (e.props ->> 'uid') in (
    select a.props ->> 'uid'
    from public.events_echt a
    where a.props ->> 'uid' is not null
      and not (a.name = any (array['bron_bezoek','partner_bezoek','partner_welkom_toon','deeplink_open'])
               or a.name like '%\_open' or a.name like '%\_toon' or a.name like '%\_geladen'));

-- Zelfde rechten als events_mens: niet leesbaar voor anon of ingelogde gebruikers.
revoke all on public.events_actief from anon, authenticated, public;

comment on view public.events_actief is
  'events_mens, alleen apparaten die ooit minstens een actieve melding stuurden. Robot-vast. Aangelegd 13 nov 2026 (idee 83). events_mens zelf is niet veranderd.';

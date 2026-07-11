-- Bug-jacht 2026-07-11 (bevestigd, ernst laag): de events-insert-policy had
-- with_check=true — iedereen met de anon-key kon willekeurige events injecteren
-- (verzonnen name/source/props) en zo Mark's dagrapport-cijfers vervalsen.
-- Zelfde aanpak als share_events: vorm-validatie in de policy. Ruim genoeg
-- voor alles wat src/utils.js track() echt stuurt (name ≤60 lowercase_snake,
-- path ≤120, props klein), streng genoeg om bulk-junk te weren.
-- Toegepast op het project via MCP op 2026-07-11.

drop policy if exists "anon can insert events" on public.events;
create policy "anon can insert events" on public.events
  for insert to anon, authenticated
  with check (
    name ~ '^[a-z][a-z0-9_]{0,59}$'
    and (path is null or length(path) <= 120)
    and (source is null or length(source) <= 120)
    and (session is null or length(session) <= 80)
    and (props is null or pg_column_size(props) <= 8192)
  );

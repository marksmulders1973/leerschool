-- Fable-review 30 aug: de "code intrekken"-knop (×) op de wacht-kaart deed een
-- client-side DELETE, maar link_codes had geen DELETE-policy → RLS verwijderde
-- stilletjes 0 rijen en de kaart kwam na herladen terug (zelfde fout-klasse
-- als de delete_my_data-les uit audit 16-07). Ouder + leerkracht mogen hun
-- eigen openstaande codes intrekken.
-- Toegepast op het live project via MCP op 2026-08-30.
create policy "Ouder trekt eigen koppelcode in" on public.link_codes
  for delete to authenticated
  using (parent_user_id = auth.uid());

create policy "Leerkracht trekt eigen koppelcode in" on public.link_codes
  for delete to authenticated
  using (teacher_user_id = auth.uid());

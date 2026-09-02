-- F15 (Fable-review 2 sep 2026): derden konden zonder bevestiging op de
-- wekelijkse lijst gezet worden (oefenblad / weekpakket-code) en een
-- partner-adres kreeg het weekrapport zonder ooit "ja" te zeggen.
-- Toegepast op live via MCP apply_migration "f15_double_opt_in_lijst_en_partner".
--
-- 1) Lijst: confirmed_at. Eerste mail (het gevraagde ding + bevestig-link) mag
--    altijd; de reeks (weekmail/aftelreeks/leesladder) pas na een tik op
--    /api/bevestig?token=<unsubscribe_token>. Bestaande leads = bevestigd
--    (kwamen onder de oude regels binnen; 26 rijen op 2 sep).
alter table public.upgrade_waitlist add column if not exists confirmed_at timestamptz;
update public.upgrade_waitlist set confirmed_at = coalesce(consent_at, created_at, now()) where confirmed_at is null;

-- 2) Partner-adres: token + bevestigingsstempel (api/partner-uitnodiging.js zet
--    ze, /api/bevestig?partner=<token> bevestigt). RPC geeft het adres alleen
--    door als de partner zelf bevestigd heeft.
alter table public.parent_child_links add column if not exists partner_token text;
alter table public.parent_child_links add column if not exists partner_email_bevestigd_at timestamptz;

create or replace function public.ouder_weekrapport_kandidaten()
 returns table(parent_email text, child_name text, child_user_id uuid, partner_email text, link_id uuid)
 language plpgsql
 security definer
 set search_path to 'public'
as $function$
begin
  return query
  select u.email::text, pcl.child_name, pcl.child_user_id,
         case when pcl.partner_email_bevestigd_at is not null then pcl.partner_email else null end,
         pcl.id
  from public.parent_child_links pcl
  join auth.users u on u.id = pcl.parent_user_id
  where pcl.verified = true and u.email is not null and coalesce(pcl.weekmail, true) = true;
end;
$function$;

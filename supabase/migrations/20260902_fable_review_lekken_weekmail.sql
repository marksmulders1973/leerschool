-- Fable-review 2 sep 2026 — toegepast op live DB via MCP op dezelfde dag.
-- 1. Views met SECURITY DEFINER-gedrag lekten via de anon-key álle events
--    (16k rijen) en alle park-states (incl. user_id + share_code).
revoke all on public.events_echt from anon, authenticated;
revoke all on public.zoo_state_real from anon, authenticated;
-- 2. Tabellen zonder RLS: household_accounts was voor iedereen leesbaar én
--    wisbaar; backup-tabel idem. RLS aan zonder policies = alleen service-role.
alter table public.household_accounts enable row level security;
alter table public.zoo_state_backup_20260816 enable row level security;
-- 3. Weekmail-uit-knop in OuderInzicht zette parent_child_links.weekmail=false,
--    maar de kandidaten-RPC filterde er niet op → ouder kreeg toch mail.
create or replace function public.ouder_weekrapport_kandidaten()
 returns table(parent_email text, child_name text, child_user_id uuid, partner_email text)
 language plpgsql security definer set search_path to 'public'
as $function$
begin
  return query
  select u.email::text, pcl.child_name, pcl.child_user_id, pcl.partner_email
  from public.parent_child_links pcl
  join auth.users u on u.id = pcl.parent_user_id
  where pcl.verified = true and u.email is not null
    and coalesce(pcl.weekmail, true) = true;
end;
$function$;

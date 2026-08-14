-- Partner-mail (Mark-wens 2026-08-14): een ouder kan het wekelijkse
-- voortgangsrapport ook naar een tweede adres (partner/verzorger) laten sturen.
-- Veel gezinnen hebben twee ouders die allebei willen weten hoe het gaat.
--
-- Opzet bewust simpel: één partner-adres per gezín, niet per kind. We zetten
-- het op parent_child_links (op álle rijen van de ouder gelijk gehouden vanuit
-- de UI) zodat de bestaande kandidaten-RPC het zonder join kan meegeven. Geen
-- nieuwe tabel = geen nieuwe RLS-policy nodig; de ouder werkt z'n eigen rijen
-- al bij (zie weekmail-toggle).
--
-- Toegepast op het live project via MCP op 2026-08-14.

alter table public.parent_child_links
  add column if not exists partner_email text;

-- Kandidaten-RPC: return-type wijzigt (kolom erbij) → eerst droppen.
-- Geeft ouder-e-mails terug, dus mag NOOIT door anon/authenticated aan te
-- roepen zijn — alleen de server (service role).
drop function if exists public.ouder_weekrapport_kandidaten();
create function public.ouder_weekrapport_kandidaten()
returns table (parent_email text, child_name text, child_user_id uuid, partner_email text)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
  select u.email::text, pcl.child_name, pcl.child_user_id, pcl.partner_email
  from public.parent_child_links pcl
  join auth.users u on u.id = pcl.parent_user_id
  where pcl.verified = true and u.email is not null;
end;
$$;

revoke all on function public.ouder_weekrapport_kandidaten() from public;
revoke all on function public.ouder_weekrapport_kandidaten() from anon;
revoke all on function public.ouder_weekrapport_kandidaten() from authenticated;

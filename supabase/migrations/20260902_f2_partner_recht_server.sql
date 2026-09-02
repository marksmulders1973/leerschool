-- F2 Fable-review 2 sep 2026 — toegepast op live DB via MCP op dezelfde dag.
-- Partner-recht (Familie gratis) stond alleen in localStorage (vervalsbaar) en
-- claim_partner_plek nam een client-gekozen visitor-id (plekken leeg te trekken).
-- Nu: identiteit = auth.uid() (ook de anonieme sessie); einddatum per code in DB.
alter table public.partner_claims add column if not exists user_id uuid;
create index if not exists partner_claims_user_idx on public.partner_claims(user_id);
alter table public.partner_codes add column if not exists familie_tot date default '2027-12-31';
update public.partner_codes set familie_tot = null where code like 'OOIEVAAR%'; -- blijvend (contract Den Haag)

-- claim_partner_plek(p_code, p_visitor default null): 'geen_sessie' zonder auth.uid();
--   één plek per account; legacy apparaat-claims (visitor_uid) krijgen user_id backfill.
-- mijn_partner_recht(p_visitor default null) -> jsonb {recht, code, org, blijvend, familie_tot}
--   matcht op user_id = auth.uid() óf visitor_uid = p_visitor (oude apparaat-claims).
-- Volledige bodies: zie live DB (pg_get_functiondef).
grant execute on function public.mijn_partner_recht(text) to anon, authenticated;
grant execute on function public.claim_partner_plek(text, text) to anon, authenticated;

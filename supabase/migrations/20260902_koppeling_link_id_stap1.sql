-- Koppeling-identiteit STAP 1 (Mark-go 2 sep 2026) — toegepast op live DB via MCP.
-- Doel: link_id (parent_child_links.id) als stabiele kind-identiteit i.p.v. voornaam.
alter table public.leaderboard     add column if not exists link_id uuid;
alter table public.learn_progress  add column if not exists link_id uuid;
alter table public.topic_mastery   add column if not exists link_id uuid;
alter table public.ref_mastery     add column if not exists link_id uuid;
create index if not exists leaderboard_link_idx    on public.leaderboard(link_id)    where link_id is not null;
create index if not exists learn_progress_link_idx on public.learn_progress(link_id) where link_id is not null;
create index if not exists topic_mastery_link_idx  on public.topic_mastery(link_id)  where link_id is not null;
create index if not exists ref_mastery_link_idx    on public.ref_mastery(link_id)    where link_id is not null;

-- Eigenaar-sleutel (zelfde formule in 3 tabellen):
--   link_id  →  gekoppeld kind (stabiel over toestellen/hernoemen)
--   uid:naam →  account/anonieme sessie + naam (twee kinderen op één toestel gescheiden)
--   naam:naam → legacy zonder sessie
-- learn_progress: owner_key opnieuw gedefinieerd (was uid:naam), unique (owner_key, learn_path_id, step_idx)
-- topic_mastery : owner_key + unique (owner_key, path_id); oude unique (player_name, path_id) weg
-- ref_mastery   : owner_key + unique (owner_key, onderdeel, ref); oude unique weg
-- Client: onConflict "owner_key,..." en link_id via src/shared/koppeling.js (metLinkId).
-- Volledige DDL: zie live DB; bodies identiek aan bovenstaande beschrijving.

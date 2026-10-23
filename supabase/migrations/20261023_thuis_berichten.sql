-- 💬 Bericht van thuis (Mark 23 okt 2026, plan docs/PLAN-KOPPELING-WERKEND.md fase 2: "berichtje van
-- ouder aan kind: ja perfect"). Een ouder of verzorger stuurt een kort berichtje (max 140 tekens) aan
-- een gekoppeld kind; het kind ziet het op de eigen pagina en tikt "Dank je!" (= gelezen).
--
-- Schrijven en lezen door de ouder: alleen via de eigen koppeling (RLS op parent_child_links).
-- Lezen door het kind: via RPC, alleen met link_id + de naam van die koppeling, alleen de laatste 14 dagen.

create table if not exists public.thuis_berichten (
  id uuid primary key default gen_random_uuid(),
  link_id uuid not null references public.parent_child_links(id) on delete cascade,
  tekst text not null check (char_length(btrim(tekst)) between 1 and 140),
  created_at timestamptz not null default now(),
  gelezen_at timestamptz
);
create index if not exists thuis_berichten_link_tijd on public.thuis_berichten (link_id, created_at desc);
alter table public.thuis_berichten enable row level security;

drop policy if exists "Ouder leest eigen berichten" on public.thuis_berichten;
create policy "Ouder leest eigen berichten" on public.thuis_berichten for select to authenticated
  using (exists (select 1 from public.parent_child_links l where l.id = link_id and l.parent_user_id = auth.uid()));
drop policy if exists "Ouder stuurt bericht" on public.thuis_berichten;
create policy "Ouder stuurt bericht" on public.thuis_berichten for insert to authenticated
  with check (gelezen_at is null and exists (select 1 from public.parent_child_links l where l.id = link_id and l.parent_user_id = auth.uid() and l.verified = true));
drop policy if exists "Ouder haalt bericht weg" on public.thuis_berichten;
create policy "Ouder haalt bericht weg" on public.thuis_berichten for delete to authenticated
  using (exists (select 1 from public.parent_child_links l where l.id = link_id and l.parent_user_id = auth.uid()));

-- Kind: het laatste bericht per koppeling (max 6 koppelingen), alleen als de naam klopt.
create or replace function public.berichten_van_thuis(p_link_ids uuid[], p_child_name text)
returns table (id uuid, link_id uuid, tekst text, created_at timestamptz, gelezen_at timestamptz)
language sql
security definer
set search_path = public
stable
as $$
  select distinct on (b.link_id) b.id, b.link_id, b.tekst, b.created_at, b.gelezen_at
  from thuis_berichten b
  join parent_child_links l on l.id = b.link_id
  where coalesce(array_length(p_link_ids, 1), 0) between 1 and 6
    and b.link_id = any(p_link_ids)
    and l.verified = true
    and lower(btrim(l.child_name)) = lower(btrim(coalesce(p_child_name, '')))
    and b.created_at > now() - interval '14 days'
  order by b.link_id, b.created_at desc;
$$;

create or replace function public.bericht_gelezen(p_id uuid, p_child_name text)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  update thuis_berichten b set gelezen_at = now()
    from parent_child_links l
   where b.id = p_id and l.id = b.link_id and b.gelezen_at is null
     and lower(btrim(l.child_name)) = lower(btrim(coalesce(p_child_name, '')));
  return found;
end;
$$;

revoke all on function public.berichten_van_thuis(uuid[], text) from public;
revoke all on function public.bericht_gelezen(uuid, text) from public;
grant execute on function public.berichten_van_thuis(uuid[], text) to anon, authenticated;
grant execute on function public.bericht_gelezen(uuid, text) to anon, authenticated;

-- 📅 Weekplanner (idee 66, Mark 9 nov 2026: "leuk, bouw maar"). Per gekoppeld kind per dag één
-- kwartier: een gekozen les (soort 'les', path_id) of 'charley' (Charley kiest wat het lastigst ging).
-- Zelfde vertrouwensmodel als ouder_klaargezet: ouder schrijft via RLS op eigen koppelingen, het kind
-- leest en vinkt af via SECURITY DEFINER-RPC's met kind_hoort_bij(link_id).
-- Getest 9 nov (rollen gesimuleerd): eigen ouder 2/2, kind-RPC 2, vandaag afvinken ok, morgen geweigerd,
-- vreemde ouder 0 en vreemde RPC 0, geen nieuwe koppel_toestellen.
create table if not exists public.ouder_weekplan (
  id uuid primary key default gen_random_uuid(),
  link_id uuid not null references public.parent_child_links(id) on delete cascade,
  dag date not null,
  soort text not null default 'les' check (soort in ('les','charley')),
  path_id text,
  titel text,
  emoji text,
  gedaan boolean not null default false,
  gedaan_at timestamptz,
  created_at timestamptz not null default now(),
  unique (link_id, dag),
  check (soort = 'charley' or path_id is not null)
);
create index if not exists ouder_weekplan_link_dag on public.ouder_weekplan (link_id, dag);
alter table public.ouder_weekplan enable row level security;

drop policy if exists "Parent manages weekplan for own links" on public.ouder_weekplan;
create policy "Parent manages weekplan for own links" on public.ouder_weekplan
  for all to authenticated
  using (exists (select 1 from public.parent_child_links l where l.id = ouder_weekplan.link_id and l.parent_user_id = auth.uid()))
  with check (exists (select 1 from public.parent_child_links l where l.id = ouder_weekplan.link_id and l.parent_user_id = auth.uid()));
grant select, insert, update, delete on public.ouder_weekplan to authenticated;
revoke all on public.ouder_weekplan from anon;

create or replace function public.weekplan_voor_kind(p_link_id uuid, p_van date default null, p_tot date default null)
returns table(id uuid, dag date, soort text, path_id text, titel text, emoji text, gedaan boolean)
language plpgsql security definer set search_path = public as $$
declare v_vandaag date := (now() at time zone 'Europe/Amsterdam')::date;
begin
  if p_link_id is null or not kind_hoort_bij(p_link_id) then return; end if;
  return query
  select w.id, w.dag, w.soort, w.path_id, w.titel, w.emoji, w.gedaan
  from ouder_weekplan w join parent_child_links l on l.id = w.link_id
  where w.link_id = p_link_id and l.verified = true
    and w.dag between coalesce(p_van, v_vandaag - 7) and coalesce(p_tot, v_vandaag + 14)
  order by w.dag;
end; $$;
grant execute on function public.weekplan_voor_kind(uuid, date, date) to anon, authenticated;

create or replace function public.weekplan_gedaan(p_id uuid, p_gedaan boolean default true)
returns jsonb language plpgsql security definer set search_path = public as $$
declare v_link uuid; v_dag date; v_ok int;
begin
  select w.link_id, w.dag into v_link, v_dag from ouder_weekplan w where w.id = p_id;
  if v_link is null or not kind_hoort_bij(v_link) then return jsonb_build_object('ok', false, 'error', 'geen_toegang'); end if;
  if v_dag > (now() at time zone 'Europe/Amsterdam')::date then return jsonb_build_object('ok', false, 'error', 'toekomst'); end if;
  update ouder_weekplan set gedaan = p_gedaan, gedaan_at = case when p_gedaan then now() else null end where id = p_id;
  get diagnostics v_ok = row_count;
  return jsonb_build_object('ok', v_ok > 0);
end; $$;
grant execute on function public.weekplan_gedaan(uuid, boolean) to anon, authenticated;

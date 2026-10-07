-- 🧭 VOORSTEL — NIET TOEGEPAST op de live database (audit ouderadvies, 7 okt 2026).
-- Bewust NIET in supabase/migrations/ gezet: alleen na akkoord van de maker
-- via MCP apply_migration toepassen.
--
-- Wat het mogelijk maakt:
--  1. Nulmeting per blok op de server (link_id), zodat het kind op een ander
--     gekoppeld apparaat verder kan bij het blok dat openstaat, en de ouder of
--     verzorger de uitslag op de eigen telefoon ziet.
--  2. Kind-sleutel (8 tekens, vast per koppeling, door de ouder te vervangen)
--     om op een schoolcomputer of tweede apparaat verder te gaan zonder steeds
--     een nieuwe eenmalige koppelcode.
--
-- Vertrouwensmodel = hetzelfde als voor_jou_voorkeur / voor_jou_klaargezet:
-- wie het link_id (uuid, niet te raden) op het apparaat heeft, mag de
-- kind-kant lezen/schrijven. De ouder leest via RLS op parent_user_id.

-- 1) Tabel
create table if not exists public.nulmeting_blok (
  link_id uuid not null references public.parent_child_links(id) on delete cascade,
  blok smallint not null check (blok between 1 and 3),
  vak text not null,
  groep text,
  uitslag jsonb not null,
  klaar_op timestamptz not null default now(),
  primary key (link_id, blok)
);
alter table public.nulmeting_blok enable row level security;
drop policy if exists "Ouder leest nulmeting eigen kind" on public.nulmeting_blok;
create policy "Ouder leest nulmeting eigen kind" on public.nulmeting_blok
  for select to authenticated
  using (exists (select 1 from public.parent_child_links l
                 where l.id = nulmeting_blok.link_id and l.parent_user_id = auth.uid() and l.verified = true));

-- 2) Kind-apparaat schrijft een blok (na afronden). Overschrijft hetzelfde blok
--    alleen als het nieuwer is (twee apparaten tegelijk: laatste wint).
create or replace function public.nulmeting_bewaar_blok(p_link_id uuid, p_blok int, p_groep text, p_uitslag jsonb)
 returns boolean language plpgsql security definer set search_path to 'public' as $$
begin
  if p_link_id is null or p_blok not between 1 and 3 or p_uitslag is null
     or pg_column_size(p_uitslag) > 4000 then return false; end if;
  if not exists (select 1 from parent_child_links where id = p_link_id and verified = true) then return false; end if;
  insert into nulmeting_blok (link_id, blok, vak, groep, uitslag, klaar_op)
  values (p_link_id, p_blok, coalesce(p_uitslag->>'vak', '?'), nullif(btrim(p_groep), ''), p_uitslag, now())
  on conflict (link_id, blok) do update
    set vak = excluded.vak, groep = excluded.groep, uitslag = excluded.uitslag, klaar_op = excluded.klaar_op;
  return true;
end $$;
grant execute on function public.nulmeting_bewaar_blok(uuid, int, text, jsonb) to anon, authenticated;

-- 3) Kind-apparaat leest de stand (welk blok staat nog open?).
create or replace function public.nulmeting_stand(p_link_id uuid)
 returns table(blok smallint, groep text, uitslag jsonb, klaar_op timestamptz)
 language sql security definer set search_path to 'public' stable as $$
  select n.blok, n.groep, n.uitslag, n.klaar_op from nulmeting_blok n
  join parent_child_links l on l.id = n.link_id and l.verified = true
  where p_link_id is not null and n.link_id = p_link_id order by n.blok;
$$;
grant execute on function public.nulmeting_stand(uuid) to anon, authenticated;

-- 4) Ouder leest de stand (alleen eigen kind).
create or replace function public.nulmeting_stand_ouder(p_link_id uuid)
 returns table(blok smallint, uitslag jsonb, klaar_op timestamptz)
 language sql security definer set search_path to 'public' stable as $$
  select n.blok, n.uitslag, n.klaar_op from nulmeting_blok n
  join parent_child_links l on l.id = n.link_id
  where n.link_id = p_link_id and l.parent_user_id = auth.uid() order by n.blok;
$$;
revoke all on function public.nulmeting_stand_ouder(uuid) from public, anon;
grant execute on function public.nulmeting_stand_ouder(uuid) to authenticated;

-- 5) Kind-sleutel op de koppeling.
alter table public.parent_child_links add column if not exists kind_sleutel text;
create unique index if not exists parent_child_links_kind_sleutel_key on public.parent_child_links (kind_sleutel) where kind_sleutel is not null;

create or replace function public.ouder_kindsleutel(p_link_id uuid, p_nieuw boolean default false)
 returns text language plpgsql security definer set search_path to 'public' as $$
declare v text; alfabet text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; i int;
begin
  select kind_sleutel into v from parent_child_links where id = p_link_id and parent_user_id = auth.uid();
  if not found then raise exception 'geen eigen koppeling' using errcode = '42501'; end if;
  if v is null or p_nieuw then
    loop
      v := '';
      for i in 1..8 loop v := v || substr(alfabet, 1 + floor(random() * length(alfabet))::int, 1); end loop;
      begin
        update parent_child_links set kind_sleutel = v where id = p_link_id;
        exit;
      exception when unique_violation then null; -- botsing: opnieuw
      end;
    end loop;
  end if;
  return v;
end $$;
revoke all on function public.ouder_kindsleutel(uuid, boolean) from public, anon;
grant execute on function public.ouder_kindsleutel(uuid, boolean) to authenticated;

-- Kind tikt de sleutel in. Geeft alleen link_id, de naam van de koppeling en
-- de groep terug — geen e-mail, geen ouder-id. Telt mislukte pogingen niet
-- server-side (TODO bij live zetten: simpele rate-limit per IP via api/_guard.js
-- of een pogingen-tabel; 31^8 ≈ 8,5·10^11 mogelijkheden maakt raden onpraktisch).
create or replace function public.koppel_met_kindsleutel(p_sleutel text, p_naam text default null)
 returns jsonb language plpgsql security definer set search_path to 'public' as $$
declare l parent_child_links%rowtype;
begin
  select * into l from parent_child_links
   where kind_sleutel = upper(regexp_replace(coalesce(p_sleutel, ''), '[\s\-._]', '', 'g')) and verified = true limit 1;
  if not found then return jsonb_build_object('ok', false); end if;
  return jsonb_build_object('ok', true, 'link_id', l.id, 'child_name', l.child_name, 'groep', l.groep);
end $$;
grant execute on function public.koppel_met_kindsleutel(text, text) to anon, authenticated;

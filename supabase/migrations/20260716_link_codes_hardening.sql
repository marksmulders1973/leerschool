-- Audit 16-07 (12-lens, security + ouder-flows): koppelcode-flow gehard.
--
-- Probleem 1 (P1): policy "Anyone can read a link code" gaf select..to public
-- using(true) op de HELE link_codes-tabel — elke anonieme bezoeker kon alle
-- kindernamen + ouder-account-UUIDs + geldige codes uitlezen. De client leest
-- de tabel nergens (claimen loopt via de SECURITY DEFINER RPC, de ouder toont
-- de zojuist zelf gegenereerde code uit lokale state) → policy kan gewoon weg.
--
-- Probleem 2: insert stond open voor iedereen met check(true) — een derde kon
-- codes aanmaken met andermans parent_user_id. Alleen de ingelogde ouder mag
-- nog codes voor zichzélf maken (de UI vereist toch al login).
--
-- Probleem 3 (P2): een geclaimde code bleef 48 uur her-claimbaar — wie de code
-- zag (klasgenoot, groepsapp) kon zich alsnog aan de ouder koppelen. Codes
-- zijn nu eenmalig via used_at.
--
-- Toegepast op het live project via MCP op 2026-07-16.

drop policy if exists "Anyone can read a link code" on public.link_codes;

drop policy if exists "Anyone can create a link code" on public.link_codes;
drop policy if exists "Ouder maakt eigen koppelcode" on public.link_codes;
create policy "Ouder maakt eigen koppelcode" on public.link_codes
  for insert to authenticated
  with check (parent_user_id = auth.uid());

alter table public.link_codes
  add column if not exists used_at timestamptz;

-- Zelfde functie als 20260711, plus: (a) alleen ongebruikte codes zijn geldig,
-- (b) code wordt bij succesvolle claim direct op used_at gezet.
create or replace function public.claim_link_code(
  p_code text,
  p_child_name text
)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_code_row link_codes%rowtype;
  v_link_id uuid;
  v_existing_id uuid;
begin
  -- 1. Valideer code (case-insensitive, trim); gebruikte codes zijn ongeldig.
  select * into v_code_row
    from link_codes
   where upper(code) = upper(trim(p_code))
     and (expires_at is null or expires_at > now())
     and used_at is null
   order by created_at desc
   limit 1;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'code_invalid_or_expired');
  end if;

  -- 2. Markeer de code direct als gebruikt (eenmalig).
  update link_codes set used_at = now() where id = v_code_row.id;

  -- 3. Bestaat al een (parent, child)-koppeling? → update verified=true ipv duplicate.
  select id into v_existing_id
    from parent_child_links
   where parent_user_id = v_code_row.parent_user_id
     and lower(child_name) = lower(trim(p_child_name))
   limit 1;

  if v_existing_id is not null then
    update parent_child_links
       set verified = true,
           verified_at = now(),
           child_user_id = coalesce(auth.uid(), child_user_id)
     where id = v_existing_id;
    return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'updated', true);
  end if;

  -- 4. Nieuwe koppeling met verified=true (kind heeft expliciet code ingevoerd).
  insert into parent_child_links (parent_user_id, child_name, verified, verified_at, child_user_id)
  values (v_code_row.parent_user_id, trim(p_child_name), true, now(), auth.uid())
  returning id into v_link_id;

  return jsonb_build_object('ok', true, 'link_id', v_link_id, 'created', true);
end;
$$;

grant execute on function public.claim_link_code(text, text) to anon, authenticated;

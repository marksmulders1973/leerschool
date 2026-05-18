-- P0-3 (4-agent-audit 2026-05-18): kind-zijde van de WhatsApp-koppelcode-flow.
--
-- Ouder genereert een 6-letter-code in OuderDashboard (insert in link_codes).
-- Kind kreeg de code via WhatsApp en moet 'm kunnen INWISSELEN — maar:
--   * link_codes-RLS staat anon SELECT toe (kan code zoeken).
--   * parent_child_links-RLS staat ALLEEN parent INSERT toe
--     (auth.uid() = parent_user_id). Kind kan dus niet zelf de koppel-row
--     aanmaken.
--
-- Oplossing: een SECURITY DEFINER RPC die als de DB-owner draait, de code
-- valideert (bestaat + niet verlopen), en de parent_child_links-row aanmaakt
-- met verified=true. Kind hoeft niet ingelogd te zijn.

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
  -- 1. Valideer code (case-insensitive, trim)
  select * into v_code_row
    from link_codes
   where upper(code) = upper(trim(p_code))
     and (expires_at is null or expires_at > now())
   order by created_at desc
   limit 1;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'code_invalid_or_expired');
  end if;

  -- 2. Bestaat al een (parent, child)-koppeling? → update verified=true ipv duplicate.
  select id into v_existing_id
    from parent_child_links
   where parent_user_id = v_code_row.parent_user_id
     and lower(child_name) = lower(trim(p_child_name))
   limit 1;

  if v_existing_id is not null then
    update parent_child_links
       set verified = true,
           verified_at = now()
     where id = v_existing_id;
    return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'updated', true);
  end if;

  -- 3. Nieuwe koppeling met verified=true (kind heeft expliciet code ingevoerd).
  insert into parent_child_links (parent_user_id, child_name, verified, verified_at)
  values (v_code_row.parent_user_id, trim(p_child_name), true, now())
  returning id into v_link_id;

  return jsonb_build_object('ok', true, 'link_id', v_link_id, 'created', true);
end;
$$;

-- Toegankelijk voor anon + authenticated (kind heeft mogelijk geen auth)
grant execute on function public.claim_link_code(text, text) to anon, authenticated;

-- verified_at-kolom toevoegen als die nog niet bestaat (voor audit-spoor).
do $$
begin
  if not exists (
    select 1 from information_schema.columns
     where table_schema = 'public'
       and table_name = 'parent_child_links'
       and column_name = 'verified_at'
  ) then
    alter table public.parent_child_links add column verified_at timestamptz;
  end if;
end$$;

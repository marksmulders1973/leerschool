-- Mark 14 okt 2026 (telefoontest, 2e screenshot): "nadat ik als kind ben ingelogd zie ik niet
-- wie de ouder is bij wie ik gekoppeld ben." Oorzaak: losse koppelcodes (v950) en Gezinsstart-
-- codes hebben van_wie = null → het kind ziet "gekoppeld met thuis". Nu valt de RPC terug op
-- de profielnaam van de ouder (of leerkracht) die de code maakte, zodat het kind
-- "gekoppeld met Mark" ziet. Een door de ouder ingevulde van_wie ("mama") wint nog steeds.
-- Toegepast op het live project via MCP op 2026-10-14.

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
  v_van_wie text;
begin
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

  update link_codes set used_at = now() where id = v_code_row.id;

  -- Leerkracht-koppeling
  if v_code_row.teacher_user_id is not null then
    v_van_wie := coalesce(
      nullif(trim(v_code_row.van_wie), ''),
      (select nullif(trim(display_name), '') from profiles where id = v_code_row.teacher_user_id)
    );
    select id into v_existing_id
      from leraar_leerling_links
     where teacher_user_id = v_code_row.teacher_user_id
       and lower(student_name) = lower(trim(p_child_name))
     limit 1;
    if v_existing_id is not null then
      update leraar_leerling_links
         set verified = true, verified_at = now(),
             student_user_id = coalesce(auth.uid(), student_user_id)
       where id = v_existing_id;
      return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'leraar', 'van_wie', v_van_wie, 'updated', true);
    end if;
    insert into leraar_leerling_links (teacher_user_id, student_name, verified, verified_at, student_user_id)
    values (v_code_row.teacher_user_id, trim(p_child_name), true, now(), auth.uid())
    returning id into v_link_id;
    return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'leraar', 'van_wie', v_van_wie, 'created', true);
  end if;

  -- Ouder-koppeling: naam van de ouder als er geen eigen label is ingevuld.
  v_van_wie := coalesce(
    nullif(trim(v_code_row.van_wie), ''),
    (select nullif(trim(display_name), '') from profiles where id = v_code_row.parent_user_id)
  );

  select id into v_existing_id
    from parent_child_links
   where parent_user_id = v_code_row.parent_user_id
     and lower(child_name) = lower(trim(p_child_name))
   limit 1;

  if v_existing_id is not null then
    update parent_child_links
       set verified = true, verified_at = now(),
           child_user_id = coalesce(auth.uid(), child_user_id)
     where id = v_existing_id;
    return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'ouder', 'van_wie', v_van_wie, 'updated', true);
  end if;

  insert into parent_child_links (parent_user_id, child_name, verified, verified_at, child_user_id)
  values (v_code_row.parent_user_id, trim(p_child_name), true, now(), auth.uid())
  returning id into v_link_id;

  return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'ouder', 'van_wie', v_van_wie, 'created', true);
end;
$$;

grant execute on function public.claim_link_code(text, text) to anon, authenticated;

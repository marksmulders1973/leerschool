-- Test bij supabase/migrations/20261109_koppel_harding.sql — draait met gesimuleerde sessies en eindigt
-- ALTIJD met een exception ("UITSLAG …"), zodat alles wordt teruggedraaid (ook de functies, als de
-- migratie in dezelfde aanroep ervoor staat). Gebruik: migratie + dit blok in één execute_sql.
-- Verwachte uitslag staat onderaan.
do $t$
declare
  v_p uuid; v_a uuid; v_x uuid; v_y uuid; v_z uuid; v_link uuid; v_link2 uuid; r jsonb; n int; i int;
  uit text := '';
begin
  select id into v_p from auth.users u where not coalesce(u.is_anonymous,false) and not exists (select 1 from parent_child_links l where l.parent_user_id=u.id) and not exists (select 1 from link_codes c where c.parent_user_id=u.id or c.teacher_user_id=u.id) order by created_at limit 1;
  select id into v_a from auth.users u where not coalesce(u.is_anonymous,false) and u.id <> v_p and not exists (select 1 from parent_child_links l where l.parent_user_id=u.id) order by created_at desc limit 1;
  select id into v_x from auth.users u where u.is_anonymous and not exists (select 1 from parent_child_links l where l.parent_user_id=u.id or l.child_user_id=u.id) and not exists (select 1 from koppel_toestellen t where t.user_id=u.id) order by created_at limit 1;
  select id into v_y from auth.users u where u.is_anonymous and u.id <> v_x and not exists (select 1 from parent_child_links l where l.parent_user_id=u.id or l.child_user_id=u.id) and not exists (select 1 from koppel_toestellen t where t.user_id=u.id) order by created_at desc limit 1;
  select id into v_z from auth.users u where u.is_anonymous and u.id not in (v_x, v_y) and not exists (select 1 from parent_child_links l where l.parent_user_id=u.id or l.child_user_id=u.id) and not exists (select 1 from koppel_toestellen t where t.user_id=u.id) order by created_at desc offset 5 limit 1;

  insert into link_codes (code, child_name, parent_user_id) values ('ZZT9A2', '', v_p), ('ZZT9B3', '', v_p);

  -- T1: kind X claimt een verse code
  perform set_config('request.jwt.claims', json_build_object('sub', v_x, 'role', 'authenticated', 'is_anonymous', true)::text, true);
  perform set_config('request.jwt.claim.sub', v_x::text, true);
  r := claim_link_code('zzt9a2', 'Testkind Hard');
  v_link := (r->>'link_id')::uuid;
  uit := uit || ' | T1 claim ok=' || coalesce(r->>'ok','?') || ' fout=' || coalesce(r->>'error','-') || ' toestel=' || exists(select 1 from koppel_toestellen where link_id = v_link and user_id = v_x);
  -- T3: zelfde toestel, zelfde code nog eens → gelukt (herhaald)
  r := claim_link_code('ZZT9A2', 'Testkind Hard');
  uit := uit || ' | T3 herhaald ok=' || coalesce(r->>'ok','?') || ' herhaald=' || coalesce(r->>'herhaald','-');
  -- T7a: eigen toestel mag eigen werk aanhaken
  r := koppel_mijn_data(v_link, 'Testkind Hard');
  uit := uit || ' | T7a eigen ok=' || coalesce(r->>'ok','?');

  -- T2: ander toestel Y, zelfde code → geweigerd en geteld
  perform set_config('request.jwt.claims', json_build_object('sub', v_y, 'role', 'authenticated', 'is_anonymous', true)::text, true);
  perform set_config('request.jwt.claim.sub', v_y::text, true);
  r := claim_link_code('ZZT9A2', 'Vreemde');
  select count(*) into n from koppel_pogingen where sleutel = 'u:' || v_y::text;
  uit := uit || ' | T2 ander toestel=' || coalesce(r->>'error','ok!') || ' geteld=' || n;
  -- T7b: vreemd toestel mag niets aan andermans koppeling hangen
  r := koppel_mijn_data(v_link, 'Testkind Hard');
  uit := uit || ' | T7b vreemd=' || coalesce(r->>'error', 'ok!');
  -- T4: 29 foute codes erbij (samen 30) → daarna wordt alles geweigerd, ook een geldige code
  for i in 1..29 loop r := claim_link_code('QQ' || lpad(i::text, 4, '2'), 'Vreemde'); end loop;
  uit := uit || ' | T4 poging 30=' || coalesce(r->>'error','ok!');
  r := claim_link_code('ZZT9B3', 'Vreemde');
  uit := uit || ' daarna geldige code=' || coalesce(r->>'error','ok!');
  -- T5: diagnose boven de grens zwijgt
  r := koppel_diagnose('ZZT9B3', 'Vreemde');
  uit := uit || ' | T5 diagnose=' || coalesce(r->>'status','?') || ' te_veel=' || coalesce(r->>'te_veel','-');

  -- T4b: een ander toestel (Z) heeft er geen last van en kan de geldige code gewoon gebruiken
  perform set_config('request.jwt.claims', json_build_object('sub', v_z, 'role', 'authenticated', 'is_anonymous', true)::text, true);
  perform set_config('request.jwt.claim.sub', v_z::text, true);
  r := koppel_diagnose('ZZT9B3', 'Tweede Kind');
  uit := uit || ' | T4b ander toestel diagnose=' || coalesce(r->>'status','?');
  r := claim_link_code('ZZT9B3', 'Tweede Kind');
  uit := uit || ' claim ok=' || coalesce(r->>'ok','?');

  -- T6: overnemen. A (echt account) probeert de koppeling van P (echt account) → 0; van een anonieme ouder → 1
  insert into parent_child_links (parent_user_id, child_name, verified, verified_at) values (v_z, 'Testkind Anon', true, now()) returning id into v_link2;
  perform set_config('request.jwt.claims', json_build_object('sub', v_a, 'role', 'authenticated', 'is_anonymous', false)::text, true);
  perform set_config('request.jwt.claim.sub', v_a::text, true);
  n := gezin_koppelingen_overnemen(v_p, array[v_link]);
  uit := uit || ' | T6 van echt account=' || n || ' blijft bij P=' || exists(select 1 from parent_child_links where id = v_link and parent_user_id = v_p);
  n := gezin_koppelingen_overnemen(v_z, array[v_link2]);
  uit := uit || ' van anonieme sessie=' || n || ' nu bij A=' || exists(select 1 from parent_child_links where id = v_link2 and parent_user_id = v_a);

  -- T8: zonder sessie → sleutel op adres (hier geen kopregels: 'ip:onbekend')
  perform set_config('request.jwt.claims', '', true);
  perform set_config('request.jwt.claim.sub', '', true);
  uit := uit || ' | T8 sleutel zonder sessie=' || koppel_poging_sleutel();

  raise exception 'UITSLAG%', uit;
end $t$;

-- Verwacht (9 nov 2026):
-- T1 claim ok=true fout=- toestel=true | T3 herhaald ok=true herhaald=true | T7a eigen ok=true
-- | T2 ander toestel=code_invalid_or_expired geteld=1 | T7b vreemd=geen_toegang
-- | T4 poging 30=code_invalid_or_expired daarna geldige code=te_veel_pogingen
-- | T5 diagnose=onbekend te_veel=true | T4b ander toestel diagnose=geldig claim ok=true
-- | T6 van echt account=0 blijft bij P=true van anonieme sessie=1 nu bij A=true | T8 sleutel zonder sessie=ip:onbekend

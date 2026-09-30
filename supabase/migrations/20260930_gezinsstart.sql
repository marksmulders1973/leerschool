-- 🏠 Gezinsstart (30 sep 2026): een ouder of verzorger zet in vier stappen het
-- gezin klaar — kinderen + groep, nadruk voor de eerste twee maanden, oefent
-- het kind op dít apparaat of op een ander, weekrapport-adres. De Vandaag-motor
-- op het kind-toestel leest de voorkeur (voor_jou_voorkeur) en kiest dan
-- minstens 2 van de 3 blokjes uit de gekozen vakken zolang `tot` in de
-- toekomst ligt.
-- Toegepast op live via MCP apply_migration "gezinsstart_voorkeur_rpcs".

-- 1) Kolommen op de koppeling: groep (tekst, bv. "7" of "brugklas") en de
--    voorkeur als jsonb: {"vakken":[...], "vrij":"klokkijken", "tot":"2026-11-25", "app_kiest":false}
alter table public.parent_child_links add column if not exists groep text;
alter table public.parent_child_links add column if not exists voorkeur jsonb;

-- 2) Kind op hetzelfde apparaat koppelen zonder code. Alleen voor een écht
--    (niet-anoniem) ingelogd account: de ouder is eigenaar van de koppeling.
--    Upsert op (parent_user_id, lower(child_name)); geeft het link_id terug.
--    p_verified=false gebruikt de wizard voor "oefent op een ander apparaat":
--    de koppeling bestaat dan al mét groep/voorkeur, en claim_link_code vindt
--    die rij (zelfde ouder + naam) en zet 'm op verified zodra het kind de
--    code invoert — zo blijven groep en voorkeur aan die koppeling hangen.
create or replace function public.gezin_koppel_zelfde_apparaat(
  p_child_name text,
  p_groep text default null,
  p_voorkeur jsonb default null,
  p_verified boolean default true
)
 returns uuid
 language plpgsql
 security definer
 set search_path to 'public'
as $function$
declare
  v_uid uuid := auth.uid();
  v_anon boolean := coalesce((auth.jwt()->>'is_anonymous')::boolean, false);
  v_naam text := btrim(coalesce(p_child_name, ''));
  v_id uuid;
  v_aantal int;
begin
  if v_uid is null or v_anon then
    raise exception 'alleen voor een ingelogd ouder-account' using errcode = '42501';
  end if;
  if v_naam = '' or length(v_naam) > 40 then
    raise exception 'naam ontbreekt of is te lang' using errcode = '22023';
  end if;
  select id into v_id from parent_child_links
   where parent_user_id = v_uid and lower(child_name) = lower(v_naam)
   order by created_at asc limit 1;
  if v_id is not null then
    update parent_child_links
       set groep = coalesce(nullif(btrim(p_groep), ''), groep),
           voorkeur = coalesce(p_voorkeur, voorkeur),
           verified = (verified or coalesce(p_verified, true)),
           verified_at = case when (verified or coalesce(p_verified, true)) and verified_at is null then now() else verified_at end
     where id = v_id;
    return v_id;
  end if;
  -- Zelfde gezins-cap als de app (max 3 kinderen).
  select count(*) into v_aantal from parent_child_links where parent_user_id = v_uid;
  if v_aantal >= 3 then
    raise exception 'maximaal 3 kinderen per gezin' using errcode = 'P0001';
  end if;
  insert into parent_child_links (parent_user_id, child_name, verified, verified_at, groep, voorkeur)
  values (v_uid, v_naam, coalesce(p_verified, true), case when coalesce(p_verified, true) then now() else null end,
          nullif(btrim(p_groep), ''), p_voorkeur)
  returning id into v_id;
  return v_id;
end;
$function$;
revoke all on function public.gezin_koppel_zelfde_apparaat(text, text, jsonb, boolean) from public, anon;
grant execute on function public.gezin_koppel_zelfde_apparaat(text, text, jsonb, boolean) to authenticated, service_role;

-- 3) Gezinsoverzicht voor de ingelogde ouder: ouder-adres, partner-status en
--    per kind de koppelstatus + wanneer er voor het laatst is geoefend
--    (max over topic_mastery.last_seen, learn_progress.completed_at en
--    leaderboard.completed_at op link_id).
create or replace function public.gezin_overzicht()
 returns json
 language sql
 security definer
 set search_path to 'public'
as $function$
  with me as (
    select auth.uid() as uid,
           coalesce((auth.jwt()->>'is_anonymous')::boolean, false) as anon,
           (select email::text from auth.users where id = auth.uid()) as email
  ),
  kids as (
    select pcl.id, pcl.child_name, pcl.groep, pcl.voorkeur, coalesce(pcl.weekmail, true) as weekmail,
           coalesce(pcl.verified, false) as verified, pcl.created_at, pcl.partner_email, pcl.partner_email_bevestigd_at,
           greatest(
             (select max(tm.last_seen) from topic_mastery tm where tm.link_id = pcl.id),
             (select max(lp.completed_at) from learn_progress lp where lp.link_id = pcl.id),
             (select max(lb.completed_at) from leaderboard lb where lb.link_id = pcl.id)
           ) as laatst_actief
    from parent_child_links pcl, me
    where me.uid is not null and not me.anon and pcl.parent_user_id = me.uid
  )
  select json_build_object(
    'ouder', json_build_object('email', (select email from me)),
    'partner', json_build_object(
      'email', (select partner_email from kids where partner_email is not null order by created_at limit 1),
      'bevestigd', coalesce((select partner_email_bevestigd_at is not null from kids where partner_email is not null order by created_at limit 1), false)
    ),
    'kinderen', coalesce((
      select json_agg(json_build_object(
        'link_id', k.id, 'naam', k.child_name, 'groep', k.groep, 'voorkeur', k.voorkeur,
        'weekmail', k.weekmail, 'gekoppeld', k.verified,
        'laatst_actief', k.laatst_actief, 'heeft_geoefend', k.laatst_actief is not null
      ) order by k.created_at)
      from kids k
    ), '[]'::json)
  );
$function$;
revoke all on function public.gezin_overzicht() from public, anon;
grant execute on function public.gezin_overzicht() to authenticated, service_role;

-- 4) Voorkeur voor het kind-toestel: alléén groep + voorkeur, op link_id
--    (het toestel kent z'n link_id na koppeling; een uuid is niet te raden).
--    Anoniem aanroepbaar, zoals voor_jou_klaargezet.
create or replace function public.voor_jou_voorkeur(p_link_id uuid)
 returns jsonb
 language sql
 security definer
 set search_path to 'public'
 stable
as $function$
  select case when p_link_id is null then null else (
    select jsonb_build_object('groep', pcl.groep, 'voorkeur', pcl.voorkeur)
    from parent_child_links pcl where pcl.id = p_link_id
  ) end;
$function$;
grant execute on function public.voor_jou_voorkeur(uuid) to anon, authenticated, service_role;

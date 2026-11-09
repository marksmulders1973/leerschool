-- 🔒 Scorebord dichtzetten voor interne id's — STAP 1 van 2 (Mark 9 nov 2026: "bouw stap 1").
-- Plan: docs/KOPPELING-GRENZEN.md § "Scorebord dichtzetten".
--
-- `leaderboard` is openbaar leesbaar, inclusief `user_id` en `link_id`. Daardoor is het id van een
-- koppeling geen geheim. Die twee kolommen gaan in stap 2 dicht voor anon/authenticated; dan kan de app
-- er niet meer op filteren. Deze stap zet daarom twee leesfuncties neer en laat de app daarop lezen.
-- Er verandert nu nog niets aan wat iemand ziet: de functies geven precies wat de app-query's gaven.
--
--   mijn_scores(p_limit)                         → rijen van de eigen sessie (sync tussen toestellen)
--   scores_voor_koppeling(link, vak, limit, oud) → rijen van één koppeling, voor de ouder/leerkracht van
--                                                   die koppeling of een toestel dat erbij hoort; met
--                                                   oud=true ook de rijen van vóór de koppeling op naam
--                                                   (zelfde terugval als kindData.js had)
-- Beide geven jsonb (een lijst rijen) zonder `user_id`; scores_voor_koppeling ook zonder `link_id`.
-- jsonb en geen `setof leaderboard`: dan breekt de functie niet als de tabel er een kolom bij krijgt.
--
-- STAP 2 (pas als vrijwel niemand meer op een app-versie van vóór v1077 zit, zie app_v in events):
--   revoke select on public.leaderboard from anon, authenticated;
--   grant select (id, player_name, subject, level, score, total, percentage, completed_at, quiz_id,
--                 time_taken, topic, title, cito_id, cito_groep, detail) on public.leaderboard to anon, authenticated;
-- Vooraf en achteraf dezelfde kliktocht: ouder-overzicht, Kindkaart, sync, openbaar scorebord.

create or replace function public.mijn_scores(p_limit integer default 500)
returns jsonb language plpgsql stable security definer set search_path = public as $$
declare v_uid uuid := auth.uid(); v_res jsonb;
begin
  if v_uid is null then return '[]'::jsonb; end if;
  select coalesce(jsonb_agg(to_jsonb(q) - 'user_id' order by q.completed_at desc), '[]'::jsonb) into v_res
  from (select * from leaderboard b where b.user_id = v_uid order by b.completed_at desc limit least(greatest(coalesce(p_limit, 500), 1), 500)) q;
  return v_res;
end; $$;
grant execute on function public.mijn_scores(integer) to anon, authenticated;

create or replace function public.scores_voor_koppeling(p_link_id uuid, p_subject text default null, p_limit integer default 50, p_oud boolean default true)
returns jsonb language plpgsql stable security definer set search_path = public as $$
declare
  v_uid uuid := auth.uid(); v_naam text; v_kind uuid; v_mag boolean := false; v_res jsonb;
  v_lim int := least(greatest(coalesce(p_limit, 50), 1), 500);
begin
  if v_uid is null or p_link_id is null then return '[]'::jsonb; end if;
  select l.child_name, l.child_user_id, (l.parent_user_id = v_uid) into v_naam, v_kind, v_mag
    from parent_child_links l where l.id = p_link_id and l.verified = true;
  if found then
    -- Bewust NIET kind_hoort_bij(): die schrijft bij een koppeling zonder toestel het eerste toestel in.
    -- Een leesfunctie mag dat niet doen; hier telt alleen een toestel dat al bij de koppeling hoort.
    if not v_mag then v_mag := exists (select 1 from koppel_toestellen k where k.link_id = p_link_id and k.user_id = v_uid); end if;
  else
    select t.student_name, t.student_user_id, (t.teacher_user_id = v_uid) into v_naam, v_kind, v_mag
      from leraar_leerling_links t where t.id = p_link_id and t.verified = true;
    if not found then return '[]'::jsonb; end if;
    if not v_mag then v_mag := exists (select 1 from koppel_toestellen k where k.link_id = p_link_id and k.user_id = v_uid); end if;
  end if;
  if not coalesce(v_mag, false) then return '[]'::jsonb; end if;

  select coalesce(jsonb_agg(to_jsonb(q) - 'user_id' - 'link_id' order by q.completed_at desc), '[]'::jsonb) into v_res
  from (
    select * from (
      (select b.* from leaderboard b
        where b.link_id = p_link_id and (p_subject is null or b.subject = p_subject)
        order by b.completed_at desc limit v_lim)
      union all
      (select b.* from leaderboard b
        where coalesce(p_oud, true) and b.link_id is null and b.player_name = v_naam
          and (v_kind is null or b.user_id = v_kind) and (p_subject is null or b.subject = p_subject)
        order by b.completed_at desc limit v_lim)
    ) u order by u.completed_at desc limit v_lim
  ) q;
  return v_res;
end; $$;
grant execute on function public.scores_voor_koppeling(uuid, text, integer, boolean) to anon, authenticated;

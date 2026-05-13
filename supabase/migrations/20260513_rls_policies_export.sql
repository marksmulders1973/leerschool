-- Audit-1 QW10 (2026-05-13): export van alle RLS-policies uit Supabase Studio
-- naar version control. Alle 25 public-tabellen hebben RLS aan; deze migration
-- legt de policies vast zodat ze niet verloren gaan bij rebuild of nieuwe omgeving.
--
-- GENERATED via mcp__claude_ai_Supabase__execute_sql op project uxqnzrymyjbcpuzqktdm
-- pg_policies-view op 2026-05-13. Idempotent dankzij `drop policy if exists`.
--
-- 25 tabellen, 57 policies. Admin = mark-smulders@hotmail.com.

-- ── RLS enable (voor de zekerheid, idempotent) ──────────────────────────
alter table if exists public.ai_question_pool enable row level security;
alter table if exists public.feedback enable row level security;
alter table if exists public.hall_of_fame enable row level security;
alter table if exists public.kudos enable row level security;
alter table if exists public.leaderboard enable row level security;
alter table if exists public.learn_path_waitlist enable row level security;
alter table if exists public.learn_progress enable row level security;
alter table if exists public.link_codes enable row level security;
alter table if exists public.obliterator_bonus_events enable row level security;
alter table if exists public.obliterator_levels enable row level security;
alter table if exists public.obliterator_scores enable row level security;
alter table if exists public.obliterator_user_levels enable row level security;
alter table if exists public.oblivion_events enable row level security;
alter table if exists public.parent_child_links enable row level security;
alter table if exists public.profiles enable row level security;
alter table if exists public.progress enable row level security;
alter table if exists public.pvp_matches enable row level security;
alter table if exists public.questions enable row level security;
alter table if exists public.quizzes enable row level security;
alter table if exists public.school_parent_links enable row level security;
alter table if exists public.schools enable row level security;
alter table if exists public.share_events enable row level security;
alter table if exists public.subscriptions enable row level security;
alter table if exists public.topic_mastery enable row level security;
alter table if exists public.upgrade_waitlist enable row level security;

-- ── ai_question_pool ────────────────────────────────────────────────────
drop policy if exists "Anyone can contribute questions" on public.ai_question_pool;
create policy "Anyone can contribute questions" on public.ai_question_pool
  for insert to anon, authenticated with check (true);
drop policy if exists "Anyone can read the question pool" on public.ai_question_pool;
create policy "Anyone can read the question pool" on public.ai_question_pool
  for select to anon, authenticated using (true);

-- ── feedback ────────────────────────────────────────────────────────────
drop policy if exists "anyone can insert feedback" on public.feedback;
create policy "anyone can insert feedback" on public.feedback
  for insert to anon, authenticated with check (true);
drop policy if exists "owner can read feedback" on public.feedback;
create policy "owner can read feedback" on public.feedback
  for select to authenticated using (auth.email() = 'mark-smulders@hotmail.com');
drop policy if exists "owner can update feedback" on public.feedback;
create policy "owner can update feedback" on public.feedback
  for update to authenticated using (auth.email() = 'mark-smulders@hotmail.com');

-- ── hall_of_fame ────────────────────────────────────────────────────────
drop policy if exists "hof_admin_delete" on public.hall_of_fame;
create policy "hof_admin_delete" on public.hall_of_fame
  for delete to authenticated using (auth.email() = 'mark-smulders@hotmail.com');
drop policy if exists "hof_admin_insert" on public.hall_of_fame;
create policy "hof_admin_insert" on public.hall_of_fame
  for insert to authenticated with check (auth.email() = 'mark-smulders@hotmail.com');
drop policy if exists "hof_admin_update" on public.hall_of_fame;
create policy "hof_admin_update" on public.hall_of_fame
  for update to authenticated using (auth.email() = 'mark-smulders@hotmail.com');
drop policy if exists "hof_select_anyone" on public.hall_of_fame;
create policy "hof_select_anyone" on public.hall_of_fame
  for select to anon, authenticated using (true);

-- ── kudos ───────────────────────────────────────────────────────────────
drop policy if exists "Iedereen kan kudo geven" on public.kudos;
create policy "Iedereen kan kudo geven" on public.kudos
  for insert to public with check (true);
drop policy if exists "Iedereen kan kudos zien" on public.kudos;
create policy "Iedereen kan kudos zien" on public.kudos
  for select to public using (true);

-- ── leaderboard ─────────────────────────────────────────────────────────
drop policy if exists "Iedereen kan score toevoegen" on public.leaderboard;
create policy "Iedereen kan score toevoegen" on public.leaderboard
  for insert to anon, authenticated with check (true);
drop policy if exists "Iedereen kan scorebord zien" on public.leaderboard;
create policy "Iedereen kan scorebord zien" on public.leaderboard
  for select to anon, authenticated using (true);

-- ── learn_path_waitlist ─────────────────────────────────────────────────
drop policy if exists "lpw_insert_own_or_anon" on public.learn_path_waitlist;
create policy "lpw_insert_own_or_anon" on public.learn_path_waitlist
  for insert to anon, authenticated with check (
    ((auth.uid() IS NOT NULL) AND ((user_id IS NULL) OR (user_id = auth.uid())))
    OR ((auth.uid() IS NULL) AND (user_id IS NULL))
  );
drop policy if exists "lpw_select_anyone" on public.learn_path_waitlist;
create policy "lpw_select_anyone" on public.learn_path_waitlist
  for select to anon, authenticated using (true);

-- ── learn_progress ──────────────────────────────────────────────────────
drop policy if exists "lp_insert_own" on public.learn_progress;
create policy "lp_insert_own" on public.learn_progress
  for insert to anon, authenticated with check (
    ((auth.uid() IS NOT NULL) AND (user_id = auth.uid()))
    OR ((auth.uid() IS NULL) AND (user_id IS NULL))
  );
drop policy if exists "lp_select_own_or_legacy" on public.learn_progress;
create policy "lp_select_own_or_legacy" on public.learn_progress
  for select to anon, authenticated using (
    ((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR (user_id IS NULL)
  );
drop policy if exists "lp_update_own" on public.learn_progress;
create policy "lp_update_own" on public.learn_progress
  for update to anon, authenticated
  using (((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL)))
  with check (((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL)));

-- ── link_codes ──────────────────────────────────────────────────────────
drop policy if exists "Anyone can create a link code" on public.link_codes;
create policy "Anyone can create a link code" on public.link_codes
  for insert to public with check (true);
drop policy if exists "Anyone can read a link code" on public.link_codes;
create policy "Anyone can read a link code" on public.link_codes
  for select to public using (true);

-- ── obliterator_bonus_events ────────────────────────────────────────────
drop policy if exists "insert_bonus_events" on public.obliterator_bonus_events;
create policy "insert_bonus_events" on public.obliterator_bonus_events
  for insert to anon, authenticated with check (true);
drop policy if exists "select_all_bonus_events" on public.obliterator_bonus_events;
create policy "select_all_bonus_events" on public.obliterator_bonus_events
  for select to anon, authenticated using (true);

-- ── obliterator_levels ──────────────────────────────────────────────────
drop policy if exists "Iedereen kan obliterator levels schrijven" on public.obliterator_levels;
create policy "Iedereen kan obliterator levels schrijven" on public.obliterator_levels
  for insert to public with check (true);
drop policy if exists "Iedereen kan obliterator levels updaten" on public.obliterator_levels;
create policy "Iedereen kan obliterator levels updaten" on public.obliterator_levels
  for update to public using (true) with check (true);
drop policy if exists "Iedereen kan obliterator levels zien" on public.obliterator_levels;
create policy "Iedereen kan obliterator levels zien" on public.obliterator_levels
  for select to public using (true);

-- ── obliterator_scores ──────────────────────────────────────────────────
drop policy if exists "Iedereen kan obliterator score toevoegen" on public.obliterator_scores;
create policy "Iedereen kan obliterator score toevoegen" on public.obliterator_scores
  for insert to public with check (true);
drop policy if exists "Iedereen kan obliterator scorebord zien" on public.obliterator_scores;
create policy "Iedereen kan obliterator scorebord zien" on public.obliterator_scores
  for select to public using (true);

-- ── obliterator_user_levels ─────────────────────────────────────────────
drop policy if exists "delete_eigen_or_admin" on public.obliterator_user_levels;
create policy "delete_eigen_or_admin" on public.obliterator_user_levels
  for delete to authenticated using (
    (auth.uid() = maker_user_id) OR (lower(COALESCE(auth.email(), '')) = 'mark-smulders@hotmail.com')
  );
drop policy if exists "insert_logged_in_eigen" on public.obliterator_user_levels;
create policy "insert_logged_in_eigen" on public.obliterator_user_levels
  for insert to authenticated with check (
    (auth.uid() IS NOT NULL) AND (auth.uid() = maker_user_id)
  );
drop policy if exists "select_publiek_or_eigen" on public.obliterator_user_levels;
create policy "select_publiek_or_eigen" on public.obliterator_user_levels
  for select to anon, authenticated using (
    (publiek = true) OR ((auth.uid() IS NOT NULL) AND (auth.uid() = maker_user_id))
  );
drop policy if exists "update_eigen_or_admin" on public.obliterator_user_levels;
create policy "update_eigen_or_admin" on public.obliterator_user_levels
  for update to authenticated
  using ((auth.uid() = maker_user_id) OR (lower(COALESCE(auth.email(), '')) = 'mark-smulders@hotmail.com'))
  with check ((auth.uid() = maker_user_id) OR (lower(COALESCE(auth.email(), '')) = 'mark-smulders@hotmail.com'));

-- ── oblivion_events ─────────────────────────────────────────────────────
drop policy if exists "insert_oblivion_events" on public.oblivion_events;
create policy "insert_oblivion_events" on public.oblivion_events
  for insert to anon, authenticated with check (true);
drop policy if exists "select_all_oblivion_events" on public.oblivion_events;
create policy "select_all_oblivion_events" on public.oblivion_events
  for select to anon, authenticated using (true);

-- ── parent_child_links ──────────────────────────────────────────────────
drop policy if exists "Parents manage own children" on public.parent_child_links;
create policy "Parents manage own children" on public.parent_child_links
  for all to public
  using (auth.uid() = parent_user_id)
  with check (auth.uid() = parent_user_id);

-- ── profiles ────────────────────────────────────────────────────────────
drop policy if exists "Gebruiker leest eigen profiel" on public.profiles;
create policy "Gebruiker leest eigen profiel" on public.profiles
  for select to public using (auth.uid() = id);
drop policy if exists "Gebruiker schrijft eigen profiel" on public.profiles;
create policy "Gebruiker schrijft eigen profiel" on public.profiles
  for insert to public with check (auth.uid() = id);
drop policy if exists "Gebruiker update eigen profiel" on public.profiles;
create policy "Gebruiker update eigen profiel" on public.profiles
  for update to public using (auth.uid() = id);

-- ── progress ────────────────────────────────────────────────────────────
drop policy if exists "Gebruiker leest eigen voortgang" on public.progress;
create policy "Gebruiker leest eigen voortgang" on public.progress
  for select to public using (auth.uid() = user_id);
drop policy if exists "Gebruiker voegt eigen voortgang toe" on public.progress;
create policy "Gebruiker voegt eigen voortgang toe" on public.progress
  for insert to public with check (auth.uid() = user_id);

-- ── pvp_matches ─────────────────────────────────────────────────────────
drop policy if exists "match_insert_host" on public.pvp_matches;
create policy "match_insert_host" on public.pvp_matches
  for insert to public with check ((auth.uid() IS NULL) OR (auth.uid() = host_user_id));
drop policy if exists "match_select_any" on public.pvp_matches;
create policy "match_select_any" on public.pvp_matches
  for select to public using (true);
drop policy if exists "match_update_participants" on public.pvp_matches;
create policy "match_update_participants" on public.pvp_matches
  for update to public using (
    (auth.uid() IS NULL) OR (auth.uid() = host_user_id)
    OR (auth.uid() = guest_user_id) OR (guest_user_id IS NULL)
  );

-- ── questions ───────────────────────────────────────────────────────────
drop policy if exists "questions_admin_write" on public.questions;
create policy "questions_admin_write" on public.questions
  for all to authenticated
  using (auth.email() = 'mark-smulders@hotmail.com')
  with check (auth.email() = 'mark-smulders@hotmail.com');
drop policy if exists "questions_select_anyone" on public.questions;
create policy "questions_select_anyone" on public.questions
  for select to anon, authenticated using (true);

-- ── quizzes ─────────────────────────────────────────────────────────────
-- Let op: 4 overlapping policies — bewust gedupliceerd in Studio. Hier idem.
drop policy if exists "Allow anon to insert quizzes" on public.quizzes;
create policy "Allow anon to insert quizzes" on public.quizzes
  for insert to anon with check (true);
drop policy if exists "Allow anon to select quizzes" on public.quizzes;
create policy "Allow anon to select quizzes" on public.quizzes
  for select to anon using (true);
drop policy if exists "anyone can insert" on public.quizzes;
create policy "anyone can insert" on public.quizzes
  for insert to public with check (true);
drop policy if exists "anyone can read" on public.quizzes;
create policy "anyone can read" on public.quizzes
  for select to public using (true);

-- ── school_parent_links ─────────────────────────────────────────────────
drop policy if exists "Users can insert own school links" on public.school_parent_links;
create policy "Users can insert own school links" on public.school_parent_links
  for insert to public with check (auth.uid() = user_id);
drop policy if exists "Users can read own school links" on public.school_parent_links;
create policy "Users can read own school links" on public.school_parent_links
  for select to public using (auth.uid() = user_id);

-- ── schools ─────────────────────────────────────────────────────────────
drop policy if exists "Anyone can read schools by code" on public.schools;
create policy "Anyone can read schools by code" on public.schools
  for select to public using (true);

-- ── share_events ────────────────────────────────────────────────────────
drop policy if exists "Anyone can log a share event" on public.share_events;
create policy "Anyone can log a share event" on public.share_events
  for insert to anon, authenticated with check (
    ((length(shared_by) >= 1) AND (length(shared_by) <= 60))
    AND ((platform IS NULL) OR (platform = ANY (ARRAY['whatsapp','facebook','native','copy'])))
  );
drop policy if exists "Anyone can read recent share events" on public.share_events;
create policy "Anyone can read recent share events" on public.share_events
  for select to anon, authenticated using (created_at > (now() - interval '7 days'));

-- ── subscriptions ───────────────────────────────────────────────────────
drop policy if exists "Users insert own subscription" on public.subscriptions;
create policy "Users insert own subscription" on public.subscriptions
  for insert to public with check (auth.uid() = user_id);
drop policy if exists "Users read own subscription" on public.subscriptions;
create policy "Users read own subscription" on public.subscriptions
  for select to public using (auth.uid() = user_id);

-- ── topic_mastery ───────────────────────────────────────────────────────
drop policy if exists "tm_insert_own" on public.topic_mastery;
create policy "tm_insert_own" on public.topic_mastery
  for insert to anon, authenticated with check (
    ((auth.uid() IS NOT NULL) AND (user_id = auth.uid()))
    OR ((auth.uid() IS NULL) AND (user_id IS NULL))
  );
drop policy if exists "tm_select_own_or_legacy" on public.topic_mastery;
create policy "tm_select_own_or_legacy" on public.topic_mastery
  for select to anon, authenticated using (
    ((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR (user_id IS NULL)
  );
drop policy if exists "tm_update_own" on public.topic_mastery;
create policy "tm_update_own" on public.topic_mastery
  for update to anon, authenticated
  using (((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL)))
  with check (((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL)));

-- ── upgrade_waitlist ────────────────────────────────────────────────────
drop policy if exists "Anyone can join waitlist" on public.upgrade_waitlist;
create policy "Anyone can join waitlist" on public.upgrade_waitlist
  for insert to public with check (true);

-- ── Audit-log ──────────────────────────────────────────────────────────
comment on schema public is
  'RLS-policies geëxporteerd 2026-05-13 via mcp__claude_ai_Supabase__execute_sql. Bron: Supabase Studio Live state. 25 tabellen, 57 policies. Admin: mark-smulders@hotmail.com.';

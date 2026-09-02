-- ============================================================================
-- SNAPSHOT VAN DE LIVE SUPABASE-DATABASE (project studiebol / uxqnzrymyjbcpuzqktdm)
-- Gegenereerd: 2026-09-02 via `select public.admin_schema_snapshot();`
-- Doel (F9, Fable-review 2 sep 2026): de losse migraties in deze map liepen achter
-- op wat live staat (klaargezet-RPC's, partner_codes/claims, koppelcode-policies,
-- referral_codes …). Dit bestand is de volledige waarheid van dat moment:
-- tabellen (kolommen/constraints/indexen/RLS), views, functies, triggers,
-- RLS-policies en grants voor anon/authenticated.
--
-- Vernieuwen: in de Supabase SQL-editor (of via MCP) `select public.admin_schema_snapshot();`
-- draaien en de uitkomst hier neerzetten (functie staat in de DB, niet aanroepbaar
-- door anon/authenticated). Bij herbouw van een lege database: dit bestand in zijn
-- geheel uitvoeren (create table if not exists; functies create or replace;
-- policies bestaan dan nog niet). NB: sequences (id bigint zonder default) en
-- auth.users-FK's vereisen een bestaand auth-schema (Supabase standaard).
-- ============================================================================

-- ===== TABELLEN (kolommen, constraints, indexen, RLS) =====

create table if not exists public.actuele_vraag (
  datum date not null,
  vraag jsonb,
  bron_titel text,
  bron_url text,
  model text,
  created_at timestamp with time zone not null default now(),
  actuele_vraag_pkey PRIMARY KEY (datum)
);
alter table public.actuele_vraag enable row level security;

create table if not exists public.admin_meta (
  key text not null,
  value text,
  updated_at timestamp with time zone not null default now(),
  admin_meta_pkey PRIMARY KEY (key)
);
alter table public.admin_meta enable row level security;

create table if not exists public.ai_call_quota (
  date date not null,
  endpoint text not null,
  count bigint not null default 0,
  ai_call_quota_pkey PRIMARY KEY (date, endpoint)
);
alter table public.ai_call_quota enable row level security;
CREATE INDEX ai_call_quota_date_idx ON public.ai_call_quota USING btree (date);

create table if not exists public.ai_question_pool (
  id uuid not null default gen_random_uuid(),
  subject text not null,
  level text not null,
  topic text,
  textbook_key text,
  question text not null,
  options jsonb not null,
  answer integer not null,
  explanation text,
  svg text,
  youtube_url text,
  q_hash text not null,
  used_count integer not null default 0,
  created_at timestamp with time zone not null default now(),
  ai_question_pool_pkey PRIMARY KEY (id),
  ai_question_pool_q_hash_unique UNIQUE (q_hash),
  ai_question_pool_sanity CHECK ((((length(question) >= 3) AND (length(question) <= 2000)) AND ((length(subject) >= 1) AND (length(subject) <= 60)) AND ((length(level) >= 1) AND (length(level) <= 60)) AND (jsonb_typeof(options) = 'array'::text) AND ((jsonb_array_length(options) >= 2) AND (jsonb_array_length(options) <= 6)) AND (answer >= 0) AND (answer < jsonb_array_length(options))))
);
alter table public.ai_question_pool enable row level security;
CREATE INDEX idx_aqp_lookup ON public.ai_question_pool USING btree (subject, level, topic, textbook_key);
CREATE INDEX idx_aqp_created ON public.ai_question_pool USING btree (created_at DESC);

create table if not exists public.contributors (
  id uuid not null default gen_random_uuid(),
  kind text not null default 'deler'::text,
  naam text not null,
  link text,
  status text not null default 'pending'::text,
  created_at timestamp with time zone not null default now(),
  contributors_kind_check CHECK ((kind = ANY (ARRAY['partner'::text, 'deler'::text]))),
  contributors_pkey PRIMARY KEY (id),
  contributors_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text])))
);
alter table public.contributors enable row level security;

create table if not exists public.daily_completions (
  id uuid not null default gen_random_uuid(),
  plan_id uuid,
  parent_user_id uuid not null,
  child_name text not null,
  date date not null,
  path_id text,
  status text not null default 'done'::text,
  questions_answered integer not null default 0,
  correct_count integer not null default 0,
  time_spent_seconds integer not null default 0,
  completed_at timestamp with time zone not null default now(),
  notified_at timestamp with time zone,
  daily_completions_parent_user_id_fkey FOREIGN KEY (parent_user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  daily_completions_pkey PRIMARY KEY (id),
  daily_completions_plan_id_date_path_id_key UNIQUE (plan_id, date, path_id),
  daily_completions_plan_id_fkey FOREIGN KEY (plan_id) REFERENCES daily_plans(id) ON DELETE CASCADE
);
alter table public.daily_completions enable row level security;
CREATE INDEX daily_completions_parent_child_idx ON public.daily_completions USING btree (parent_user_id, child_name, date DESC);

create table if not exists public.daily_plans (
  id uuid not null default gen_random_uuid(),
  parent_user_id uuid not null,
  child_name text not null,
  plan_items jsonb not null default '[]'::jsonb,
  schedule_pattern text not null default 'daily'::text,
  active_from date,
  active_until date,
  paused_at timestamp with time zone,
  created_at timestamp with time zone not null default now(),
  last_updated timestamp with time zone not null default now(),
  daily_plans_parent_user_id_fkey FOREIGN KEY (parent_user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  daily_plans_pkey PRIMARY KEY (id)
);
alter table public.daily_plans enable row level security;
CREATE INDEX daily_plans_parent_child_idx ON public.daily_plans USING btree (parent_user_id, child_name);

create table if not exists public.deluxe_kv (
  sleutel text not null,
  data jsonb not null,
  updated_at timestamp with time zone not null default now(),
  deluxe_kv_pkey PRIMARY KEY (sleutel)
);
CREATE INDEX deluxe_kv_prefix_idx ON public.deluxe_kv USING btree (sleutel text_pattern_ops);

create table if not exists public.diagnostic_assessments (
  id uuid not null default gen_random_uuid(),
  parent_user_id uuid not null,
  child_name text not null,
  taken_at timestamp with time zone not null default now(),
  per_pijler_scores jsonb not null default '{}'::jsonb,
  recommended_paths jsonb not null default '[]'::jsonb,
  questions_total integer not null default 0,
  correct_total integer not null default 0,
  avg_seconds_per_question numeric,
  rushed boolean not null default false,
  is_baseline boolean not null default false,
  parent_acknowledged_at timestamp with time zone,
  diagnostic_assessments_parent_user_id_fkey FOREIGN KEY (parent_user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  diagnostic_assessments_pkey PRIMARY KEY (id)
);
alter table public.diagnostic_assessments enable row level security;
CREATE INDEX diagnostic_assessments_parent_child_idx ON public.diagnostic_assessments USING btree (parent_user_id, child_name, taken_at DESC);

create table if not exists public.events (
  id uuid not null default gen_random_uuid(),
  name text not null,
  props jsonb,
  path text,
  source text,
  session text,
  created_at timestamp with time zone not null default now(),
  events_pkey PRIMARY KEY (id)
);
alter table public.events enable row level security;
CREATE INDEX events_created_at_idx ON public.events USING btree (created_at);
CREATE INDEX events_session_idx ON public.events USING btree (session);
CREATE INDEX events_source_idx ON public.events USING btree (source);
CREATE INDEX events_created_idx ON public.events USING btree (created_at DESC);
CREATE INDEX events_name_idx ON public.events USING btree (name);

create table if not exists public.feedback (
  id bigint not null default nextval('feedback_id_seq'::regclass),
  message text not null,
  player_name text,
  user_id uuid,
  page_url text,
  user_agent text,
  resolved boolean not null default false,
  created_at timestamp with time zone not null default now(),
  screenshot_url text,
  blocked boolean not null default false,
  screenshot_path text,
  feedback_pkey PRIMARY KEY (id)
);
alter table public.feedback enable row level security;
CREATE INDEX feedback_created_idx ON public.feedback USING btree (created_at DESC);
CREATE INDEX feedback_unresolved_idx ON public.feedback USING btree (resolved, created_at DESC) WHERE (resolved = false);

create table if not exists public.game_rooms (
  code text not null,
  data jsonb not null,
  updated_at timestamp with time zone default now(),
  game_rooms_pkey PRIMARY KEY (code)
);
CREATE INDEX game_rooms_updated_at_idx ON public.game_rooms USING btree (updated_at);

create table if not exists public.hall_of_fame (
  id uuid not null default gen_random_uuid(),
  subject text not null,
  level text not null,
  player_name text not null,
  time_taken integer not null,
  percentage integer not null default 100,
  completed_at timestamp with time zone default now(),
  questions jsonb not null,
  hall_of_fame_pkey PRIMARY KEY (id)
);
alter table public.hall_of_fame enable row level security;
CREATE INDEX hall_of_fame_subject_level_idx ON public.hall_of_fame USING btree (subject, level, time_taken);

create table if not exists public.household_accounts (
  user_id uuid not null,
  label text,
  added_at timestamp with time zone not null default now(),
  household_accounts_pkey PRIMARY KEY (user_id)
);
alter table public.household_accounts enable row level security;

create table if not exists public.household_uids (
  uid text not null,
  label text,
  created_at timestamp with time zone not null default now(),
  household_uids_pkey PRIMARY KEY (uid)
);
alter table public.household_uids enable row level security;

create table if not exists public.kudos (
  id bigint not null default nextval('kudos_id_seq'::regclass),
  target_type text not null,
  target_id bigint not null,
  target_player_name text not null,
  giver_name text not null,
  created_at timestamp with time zone not null default now(),
  kudos_pkey PRIMARY KEY (id),
  kudos_target_type_check CHECK ((target_type = ANY (ARRAY['toets'::text, 'obli'::text]))),
  kudos_unique UNIQUE (target_type, target_id, giver_name)
);
alter table public.kudos enable row level security;
CREATE INDEX idx_kudos_target ON public.kudos USING btree (target_type, target_id);
CREATE INDEX idx_kudos_target_player ON public.kudos USING btree (target_player_name);

create table if not exists public.kwartiercheck_results (
  id uuid not null default gen_random_uuid(),
  email text not null,
  naam_kind text not null,
  groep text not null,
  scores_json jsonb not null,
  created_at timestamp with time zone not null default now(),
  weekmail_sent integer not null default 0,
  weekmail_last_at timestamp with time zone,
  unsubscribed_at timestamp with time zone,
  unsubscribe_token uuid not null default gen_random_uuid(),
  kwartiercheck_results_pkey PRIMARY KEY (id)
);
alter table public.kwartiercheck_results enable row level security;
CREATE INDEX kwartiercheck_weekmail_due_idx ON public.kwartiercheck_results USING btree (weekmail_sent, weekmail_last_at) WHERE (unsubscribed_at IS NULL);

create table if not exists public.leaderboard (
  id uuid not null default gen_random_uuid(),
  player_name text not null,
  user_id uuid,
  subject text not null,
  level text not null,
  score integer not null,
  total integer not null,
  percentage integer not null,
  completed_at timestamp with time zone default now(),
  quiz_id text,
  time_taken integer,
  topic text,
  title text,
  cito_id text,
  cito_groep text,
  detail jsonb,
  link_id uuid,
  leaderboard_pkey PRIMARY KEY (id),
  leaderboard_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL
);
alter table public.leaderboard enable row level security;
CREATE INDEX leaderboard_quiz_id_idx ON public.leaderboard USING btree (quiz_id);
CREATE INDEX idx_leaderboard_user_id ON public.leaderboard USING btree (user_id);
CREATE INDEX leaderboard_link_idx ON public.leaderboard USING btree (link_id) WHERE (link_id IS NOT NULL);

create table if not exists public.learn_path_waitlist (
  id bigint not null default nextval('learn_path_waitlist_id_seq'::regclass),
  player_name text not null,
  subject_id text not null,
  user_id uuid,
  created_at timestamp with time zone not null default now(),
  learn_path_waitlist_pkey PRIMARY KEY (id),
  learn_path_waitlist_player_name_subject_id_key UNIQUE (player_name, subject_id),
  learn_path_waitlist_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL
);
alter table public.learn_path_waitlist enable row level security;
CREATE INDEX idx_lpw_subject ON public.learn_path_waitlist USING btree (subject_id);
CREATE INDEX idx_lpw_player ON public.learn_path_waitlist USING btree (player_name);

create table if not exists public.learn_progress (
  id bigint not null,
  player_name text not null,
  user_id uuid,
  learn_path_id text not null,
  step_idx integer not null,
  attempts integer not null default 1,
  completed_at timestamp with time zone not null default now(),
  link_id uuid,
  owner_key text generated always as (COALESCE((link_id)::text, (COALESCE(((user_id)::text || ':'::text), 'naam:'::text) || lower(player_name)))) stored,
  learn_progress_attempts_check CHECK ((attempts >= 1)),
  learn_progress_pkey PRIMARY KEY (id),
  learn_progress_step_idx_check CHECK ((step_idx >= 0))
);
alter table public.learn_progress enable row level security;
CREATE INDEX idx_learn_progress_lookup ON public.learn_progress USING btree (player_name, learn_path_id);
CREATE INDEX learn_progress_link_idx ON public.learn_progress USING btree (link_id) WHERE (link_id IS NOT NULL);
CREATE UNIQUE INDEX learn_progress_owner_step_uniq ON public.learn_progress USING btree (owner_key, learn_path_id, step_idx);

create table if not exists public.learning_goals (
  id uuid not null default gen_random_uuid(),
  parent_user_id uuid not null,
  child_name text not null,
  target_level text not null,
  target_event text not null default 'doorstroomtoets-2027'::text,
  target_date date,
  current_grade text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  learning_goals_parent_user_id_child_name_key UNIQUE (parent_user_id, child_name),
  learning_goals_parent_user_id_fkey FOREIGN KEY (parent_user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  learning_goals_pkey PRIMARY KEY (id)
);
alter table public.learning_goals enable row level security;
CREATE INDEX learning_goals_parent_child_idx ON public.learning_goals USING btree (parent_user_id, child_name);

create table if not exists public.leraar_klaargezet (
  id uuid not null default gen_random_uuid(),
  link_id uuid not null,
  path_id text not null,
  titel text,
  emoji text,
  gedaan boolean not null default false,
  gedaan_at timestamp with time zone,
  created_at timestamp with time zone not null default now(),
  leraar_klaargezet_link_id_fkey FOREIGN KEY (link_id) REFERENCES leraar_leerling_links(id) ON DELETE CASCADE,
  leraar_klaargezet_link_id_path_id_key UNIQUE (link_id, path_id),
  leraar_klaargezet_pkey PRIMARY KEY (id)
);
alter table public.leraar_klaargezet enable row level security;
CREATE INDEX idx_leraar_klaargezet_link ON public.leraar_klaargezet USING btree (link_id);

create table if not exists public.leraar_leerling_links (
  id uuid not null default gen_random_uuid(),
  teacher_user_id uuid not null,
  student_name text not null,
  verified boolean not null default false,
  verified_at timestamp with time zone,
  student_user_id uuid,
  created_at timestamp with time zone not null default now(),
  leraar_leerling_links_pkey PRIMARY KEY (id),
  leraar_leerling_links_teacher_user_id_fkey FOREIGN KEY (teacher_user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
alter table public.leraar_leerling_links enable row level security;
CREATE INDEX idx_leraar_leerling_teacher ON public.leraar_leerling_links USING btree (teacher_user_id);

create table if not exists public.link_codes (
  id uuid not null default gen_random_uuid(),
  code character(6) not null,
  child_name text not null,
  created_at timestamp with time zone default now(),
  expires_at timestamp with time zone default (now() + '48:00:00'::interval),
  parent_user_id uuid,
  used_at timestamp with time zone,
  teacher_user_id uuid,
  van_wie text,
  link_codes_code_key UNIQUE (code),
  link_codes_parent_user_id_fkey FOREIGN KEY (parent_user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  link_codes_pkey PRIMARY KEY (id),
  link_codes_teacher_user_id_fkey FOREIGN KEY (teacher_user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
alter table public.link_codes enable row level security;

create table if not exists public.obliterator_bonus_events (
  id bigint not null default nextval('obliterator_bonus_events_id_seq'::regclass),
  event_type text not null,
  triggered_by_name text not null,
  triggered_at timestamp with time zone not null default now(),
  expires_at timestamp with time zone not null,
  obliterator_bonus_events_pkey PRIMARY KEY (id)
);
alter table public.obliterator_bonus_events enable row level security;
CREATE INDEX obliterator_bonus_events_expires_idx ON public.obliterator_bonus_events USING btree (expires_at DESC);

create table if not exists public.obliterator_levels (
  id bigint not null default nextval('obliterator_levels_id_seq'::regclass),
  user_id uuid not null,
  player_name text not null,
  level integer not null,
  record_score integer not null default 0,
  unlocked_at timestamp with time zone not null default now(),
  laatst_bijgewerkt timestamp with time zone not null default now(),
  obliterator_levels_level_check CHECK (((level >= 1) AND (level <= 100))),
  obliterator_levels_pkey PRIMARY KEY (id),
  obliterator_levels_unique UNIQUE (user_id, level)
);
alter table public.obliterator_levels enable row level security;
CREATE INDEX idx_obli_levels_user ON public.obliterator_levels USING btree (user_id);
CREATE INDEX idx_obli_levels_top ON public.obliterator_levels USING btree (level, record_score DESC);

create table if not exists public.obliterator_scores (
  id bigint not null default nextval('obliterator_scores_id_seq'::regclass),
  player_name text not null,
  user_id uuid,
  score integer not null,
  created_at timestamp with time zone not null default now(),
  level smallint,
  client_key text,
  obliterator_scores_level_check CHECK (((level IS NULL) OR ((level >= 0) AND (level <= 100)))),
  obliterator_scores_pkey PRIMARY KEY (id),
  obliterator_scores_score_check CHECK (((score >= 0) AND (score <= 500000)))
);
alter table public.obliterator_scores enable row level security;
CREATE INDEX idx_obliterator_scores_score_desc ON public.obliterator_scores USING btree (score DESC, created_at);
CREATE INDEX idx_obliterator_scores_player ON public.obliterator_scores USING btree (player_name);
CREATE UNIQUE INDEX uniq_obliterator_client_key ON public.obliterator_scores USING btree (client_key) WHERE (client_key IS NOT NULL);

create table if not exists public.obliterator_user_levels (
  id bigint not null default nextval('obliterator_user_levels_id_seq'::regclass),
  maker_naam text not null,
  maker_user_id uuid,
  naam text not null default 'Naamloos level'::text,
  obstakels jsonb not null default '[]'::jsonb,
  lengte integer not null default 4000,
  publiek boolean not null default false,
  plays integer not null default 0,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now(),
  featured boolean not null default false,
  obliterator_user_levels_pkey PRIMARY KEY (id)
);
alter table public.obliterator_user_levels enable row level security;
CREATE INDEX obliterator_user_levels_maker_idx ON public.obliterator_user_levels USING btree (maker_naam, created_at DESC);
CREATE INDEX obliterator_user_levels_publiek_idx ON public.obliterator_user_levels USING btree (publiek, plays DESC);
CREATE INDEX obliterator_user_levels_featured_idx ON public.obliterator_user_levels USING btree (featured) WHERE (featured = true);

create table if not exists public.oblivion_events (
  id bigint not null default nextval('oblivion_events_id_seq'::regclass),
  triggered_at timestamp with time zone not null default now(),
  triggered_by_name text not null,
  oblivion_events_pkey PRIMARY KEY (id)
);
alter table public.oblivion_events enable row level security;
CREATE INDEX oblivion_events_triggered_at_idx ON public.oblivion_events USING btree (triggered_at DESC);

create table if not exists public.ouder_klaargezet (
  id uuid not null default gen_random_uuid(),
  link_id uuid not null,
  path_id text not null,
  titel text,
  emoji text,
  gedaan boolean not null default false,
  gedaan_at timestamp with time zone,
  created_at timestamp with time zone not null default now(),
  ouder_klaargezet_link_id_fkey FOREIGN KEY (link_id) REFERENCES parent_child_links(id) ON DELETE CASCADE,
  ouder_klaargezet_link_id_path_id_key UNIQUE (link_id, path_id),
  ouder_klaargezet_pkey PRIMARY KEY (id)
);
alter table public.ouder_klaargezet enable row level security;
CREATE INDEX idx_ouder_klaargezet_link ON public.ouder_klaargezet USING btree (link_id);

create table if not exists public.parent_child_links (
  id uuid not null default gen_random_uuid(),
  parent_user_id uuid not null,
  child_name text not null,
  created_at timestamp with time zone default now(),
  verified boolean default false,
  verified_at timestamp with time zone,
  child_user_id uuid,
  weekmail boolean not null default true,
  partner_email text,
  parent_child_links_parent_user_id_fkey FOREIGN KEY (parent_user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  parent_child_links_pkey PRIMARY KEY (id)
);
alter table public.parent_child_links enable row level security;

create table if not exists public.park_galerij (
  id uuid not null default gen_random_uuid(),
  share_code text not null,
  user_id uuid,
  profiel text,
  status text not null default 'pending'::text,
  created_at timestamp with time zone not null default now(),
  park_galerij_pkey PRIMARY KEY (id),
  park_galerij_share_code_key UNIQUE (share_code)
);
alter table public.park_galerij enable row level security;
CREATE INDEX park_galerij_status_idx ON public.park_galerij USING btree (status, created_at DESC);

create table if not exists public.partner_claims (
  code text not null,
  visitor_uid text not null,
  created_at timestamp with time zone not null default now(),
  user_id uuid,
  partner_claims_code_fkey FOREIGN KEY (code) REFERENCES partner_codes(code) ON DELETE CASCADE,
  partner_claims_pkey PRIMARY KEY (code, visitor_uid)
);
alter table public.partner_claims enable row level security;
CREATE INDEX partner_claims_user_idx ON public.partner_claims USING btree (user_id);

create table if not exists public.partner_codes (
  code text not null,
  org_naam text not null,
  max_uses integer not null default 50,
  created_at timestamp with time zone not null default now(),
  familie_tot date default '2027-12-31'::date,
  partner_codes_pkey PRIMARY KEY (code)
);
alter table public.partner_codes enable row level security;

create table if not exists public.profiles (
  id uuid not null,
  display_name text,
  level text,
  role text,
  created_at timestamp with time zone default now(),
  streak_days integer default 0,
  last_played_date date,
  school_type text default ''::text,
  school_logo_url text,
  kwartier_streak integer not null default 0,
  kwartier_streak_best integer not null default 0,
  kwartier_last_day date,
  goal_day date,
  goal_seconds integer not null default 0,
  signup_bron text,
  signup_bron_meta jsonb,
  teacher_classes jsonb not null default '[]'::jsonb,
  profiles_id_fkey FOREIGN KEY (id) REFERENCES auth.users(id) ON DELETE CASCADE,
  profiles_pkey PRIMARY KEY (id)
);
alter table public.profiles enable row level security;

create table if not exists public.progress (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null,
  subject text not null,
  level text not null,
  score integer not null,
  total integer not null,
  percentage integer not null,
  completed_at timestamp with time zone default now(),
  progress_pkey PRIMARY KEY (id),
  progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
alter table public.progress enable row level security;

create table if not exists public.push_subscriptions (
  id uuid not null default gen_random_uuid(),
  user_id uuid,
  player_name text,
  endpoint text not null,
  p256dh text not null,
  auth text not null,
  user_agent text,
  created_at timestamp with time zone not null default now(),
  last_used_at timestamp with time zone,
  failed_count integer not null default 0,
  push_subscriptions_endpoint_key UNIQUE (endpoint),
  push_subscriptions_pkey PRIMARY KEY (id),
  push_subscriptions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
alter table public.push_subscriptions enable row level security;
CREATE INDEX push_subscriptions_user_id_idx ON public.push_subscriptions USING btree (user_id);
CREATE INDEX push_subscriptions_player_name_idx ON public.push_subscriptions USING btree (player_name);

create table if not exists public.pvp_matches (
  id text not null,
  seed bigint not null,
  status text not null default 'lobby'::text,
  host_user_id uuid,
  host_name text not null,
  guest_user_id uuid,
  guest_name text,
  host_score integer not null default 0,
  guest_score integer not null default 0,
  host_alive boolean not null default true,
  guest_alive boolean not null default true,
  winner text,
  created_at timestamp with time zone not null default now(),
  finished_at timestamp with time zone,
  expires_at timestamp with time zone not null default (now() + '24:00:00'::interval),
  pvp_matches_guest_user_id_fkey FOREIGN KEY (guest_user_id) REFERENCES auth.users(id) ON DELETE SET NULL,
  pvp_matches_host_user_id_fkey FOREIGN KEY (host_user_id) REFERENCES auth.users(id) ON DELETE SET NULL,
  pvp_matches_pkey PRIMARY KEY (id),
  pvp_matches_status_check CHECK ((status = ANY (ARRAY['lobby'::text, 'ready'::text, 'playing'::text, 'finished'::text, 'abandoned'::text]))),
  pvp_matches_winner_check CHECK (((winner IS NULL) OR (winner = ANY (ARRAY['host'::text, 'guest'::text, 'tie'::text]))))
);
alter table public.pvp_matches enable row level security;
CREATE INDEX pvp_matches_status_idx ON public.pvp_matches USING btree (status, created_at DESC);
CREATE INDEX pvp_matches_expires_idx ON public.pvp_matches USING btree (expires_at) WHERE (status <> 'finished'::text);

create table if not exists public.questions (
  id bigint not null default nextval('questions_id_seq'::regclass),
  subject text not null,
  level text,
  topic_key text,
  q text not null,
  options jsonb not null,
  answer smallint not null,
  explanation text,
  svg text,
  source text not null default 'sample'::text,
  path_id text,
  step_idx smallint,
  image_in_explanation boolean not null default false,
  question_source text,
  created_at timestamp with time zone not null default now(),
  questions_answer_check CHECK (((answer >= 0) AND (answer <= 9))),
  questions_pkey PRIMARY KEY (id),
  questions_source_check CHECK ((source = ANY (ARRAY['sample'::text, 'topic'::text, 'ai'::text])))
);
alter table public.questions enable row level security;
CREATE INDEX idx_q_subject ON public.questions USING btree (subject);
CREATE INDEX idx_q_subject_level ON public.questions USING btree (subject, level);
CREATE INDEX idx_q_topic ON public.questions USING btree (topic_key);
CREATE INDEX idx_q_path ON public.questions USING btree (path_id);

create table if not exists public.quizzes (
  id text not null,
  code text not null,
  data jsonb not null,
  created_at timestamp with time zone default now(),
  created_by uuid,
  quizzes_code_key UNIQUE (code),
  quizzes_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE SET NULL,
  quizzes_pkey PRIMARY KEY (id)
);
alter table public.quizzes enable row level security;
CREATE INDEX quizzes_code_idx ON public.quizzes USING btree (code);
CREATE INDEX quizzes_created_by_idx ON public.quizzes USING btree (created_by) WHERE (created_by IS NOT NULL);

create table if not exists public.ref_mastery (
  id bigint not null,
  user_id uuid,
  player_name text not null,
  onderdeel text not null,
  ref text not null,
  attempts integer not null default 0,
  correct integer not null default 0,
  last_seen timestamp with time zone not null default now(),
  link_id uuid,
  owner_key text generated always as (COALESCE((link_id)::text, (COALESCE(((user_id)::text || ':'::text), 'naam:'::text) || lower(player_name)))) stored,
  ref_mastery_attempts_check CHECK ((attempts >= 0)),
  ref_mastery_check CHECK (((correct >= 0) AND (correct <= attempts))),
  ref_mastery_onderdeel_check CHECK ((onderdeel = ANY (ARRAY['rekenen'::text, 'lezen'::text, 'taalverzorging'::text]))),
  ref_mastery_pkey PRIMARY KEY (id),
  ref_mastery_ref_check CHECK ((ref = ANY (ARRAY['1F'::text, 'S'::text]))),
  ref_mastery_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
alter table public.ref_mastery enable row level security;
CREATE INDEX ref_mastery_user_idx ON public.ref_mastery USING btree (user_id);
CREATE INDEX ref_mastery_link_idx ON public.ref_mastery USING btree (link_id) WHERE (link_id IS NOT NULL);
CREATE UNIQUE INDEX ref_mastery_owner_uniq ON public.ref_mastery USING btree (owner_key, onderdeel, ref);

create table if not exists public.referral_codes (
  user_id uuid not null,
  code text not null,
  created_at timestamp with time zone not null default now(),
  referral_codes_code_key UNIQUE (code),
  referral_codes_pkey PRIMARY KEY (user_id),
  referral_codes_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
alter table public.referral_codes enable row level security;

create table if not exists public.referrals (
  id bigint not null,
  code text not null,
  visitor_uid text not null,
  created_at timestamp with time zone not null default now(),
  activated_at timestamp with time zone,
  referrals_code_fkey FOREIGN KEY (code) REFERENCES referral_codes(code) ON DELETE CASCADE,
  referrals_code_visitor_uid_key UNIQUE (code, visitor_uid),
  referrals_pkey PRIMARY KEY (id)
);
alter table public.referrals enable row level security;
CREATE INDEX referrals_code_activated_idx ON public.referrals USING btree (code) WHERE (activated_at IS NOT NULL);

create table if not exists public.school_parent_links (
  id uuid not null default gen_random_uuid(),
  school_id uuid,
  user_id uuid,
  joined_at timestamp with time zone default now(),
  school_parent_links_pkey PRIMARY KEY (id),
  school_parent_links_school_id_fkey FOREIGN KEY (school_id) REFERENCES schools(id) ON DELETE CASCADE,
  school_parent_links_school_id_user_id_key UNIQUE (school_id, user_id),
  school_parent_links_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
alter table public.school_parent_links enable row level security;

create table if not exists public.schools (
  id uuid not null default gen_random_uuid(),
  name text not null,
  parent_code text not null,
  max_parents integer not null default 450,
  plan_tier text not null default 'school_m'::text,
  created_by uuid,
  subscription_active boolean not null default false,
  created_at timestamp with time zone default now(),
  schools_created_by_fkey FOREIGN KEY (created_by) REFERENCES auth.users(id) ON DELETE SET NULL,
  schools_parent_code_key UNIQUE (parent_code),
  schools_pkey PRIMARY KEY (id)
);
alter table public.schools enable row level security;

create table if not exists public.scores (
  naam text not null,
  wins integer default 0,
  kills integer default 0,
  bot_kills integer default 0,
  games integer default 0,
  updated_at timestamp with time zone default now(),
  scores_pkey PRIMARY KEY (naam)
);
CREATE INDEX scores_kills_idx ON public.scores USING btree (kills DESC);

create table if not exists public.share_events (
  id uuid not null default gen_random_uuid(),
  shared_by text not null,
  platform text,
  created_at timestamp with time zone not null default now(),
  share_events_pkey PRIMARY KEY (id)
);
alter table public.share_events enable row level security;
CREATE INDEX share_events_created_at_idx ON public.share_events USING btree (created_at DESC);

create table if not exists public.social_post_queue (
  id bigint not null,
  vraag_id text not null,
  image_url text not null,
  caption text not null default ''::text,
  status text not null default 'wachtrij'::text,
  ig_media_id text,
  fb_id text,
  error text,
  created_at timestamp with time zone not null default now(),
  posted_at timestamp with time zone,
  social_post_queue_pkey PRIMARY KEY (id)
);
alter table public.social_post_queue enable row level security;

create table if not exists public.subscriptions (
  id uuid not null default gen_random_uuid(),
  user_id uuid not null,
  tier text not null default 'free'::text,
  valid_until timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  trial_started_at timestamp with time zone,
  subscriptions_pkey PRIMARY KEY (id),
  subscriptions_tier_check CHECK ((tier = ANY (ARRAY['free'::text, 'teacher_pro'::text, 'parent_pro'::text]))),
  subscriptions_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE,
  subscriptions_user_id_key UNIQUE (user_id)
);
alter table public.subscriptions enable row level security;

create table if not exists public.supporter_scores (
  id bigint not null,
  player_name text not null,
  user_id uuid,
  score integer not null,
  created_at timestamp with time zone not null default now(),
  supporter_scores_pkey PRIMARY KEY (id)
);
alter table public.supporter_scores enable row level security;
CREATE INDEX idx_supporter_scores_month ON public.supporter_scores USING btree (created_at DESC, score DESC);

create table if not exists public.topic_mastery (
  id bigint not null default nextval('topic_mastery_id_seq'::regclass),
  player_name text not null,
  user_id uuid,
  path_id text not null,
  attempts integer not null default 0,
  correct integer not null default 0,
  last_seen timestamp with time zone not null default now(),
  next_due_at timestamp with time zone not null default now(),
  streak integer not null default 0,
  link_id uuid,
  owner_key text generated always as (COALESCE((link_id)::text, (COALESCE(((user_id)::text || ':'::text), 'naam:'::text) || lower(player_name)))) stored,
  topic_mastery_pkey PRIMARY KEY (id),
  topic_mastery_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE SET NULL
);
alter table public.topic_mastery enable row level security;
CREATE INDEX idx_tm_player ON public.topic_mastery USING btree (player_name);
CREATE INDEX idx_tm_path ON public.topic_mastery USING btree (path_id);
CREATE INDEX idx_tm_due ON public.topic_mastery USING btree (player_name, next_due_at);
CREATE INDEX topic_mastery_link_idx ON public.topic_mastery USING btree (link_id) WHERE (link_id IS NOT NULL);
CREATE UNIQUE INDEX topic_mastery_owner_path_uniq ON public.topic_mastery USING btree (owner_key, path_id);

create table if not exists public.upgrade_waitlist (
  id uuid not null default gen_random_uuid(),
  email text not null,
  plan text not null,
  created_at timestamp with time zone default now(),
  source text,
  kind_voornaam text,
  kind_groep text,
  vakken jsonb,
  consent_at timestamp with time zone,
  reeks_nummer smallint default 1,
  reeks_status text default 'actief'::text,
  ref text,
  last_sent_at timestamp with time zone,
  sent_count integer not null default 0,
  unsubscribed_at timestamp with time zone,
  unsubscribe_token text default (gen_random_uuid())::text,
  doorstroom_step smallint not null default 0,
  doorstroom_last_at timestamp with time zone,
  upgrade_waitlist_pkey PRIMARY KEY (id),
  upgrade_waitlist_plan_check CHECK ((plan = ANY (ARRAY['teacher_pro'::text, 'parent_pro'::text, 'oefenpakket'::text, 'gratis-lesmateriaal'::text, 'leesladder'::text, 'redactiebladen'::text, 'wereldbol'::text])))
);
alter table public.upgrade_waitlist enable row level security;
CREATE UNIQUE INDEX upgrade_waitlist_email_plan_key ON public.upgrade_waitlist USING btree (lower(email), plan);
CREATE INDEX idx_upgrade_waitlist_ref ON public.upgrade_waitlist USING btree (ref) WHERE (ref IS NOT NULL);
CREATE INDEX idx_upgrade_waitlist_send ON public.upgrade_waitlist USING btree (last_sent_at) WHERE (unsubscribed_at IS NULL);

create table if not exists public.weekpakket_edities (
  week_key text not null,
  titel text not null,
  maker_alinea text not null,
  html_vragen text not null,
  html_antwoorden text not null,
  gepubliceerd boolean not null default true,
  created_at timestamp with time zone not null default now(),
  weekpakket_edities_pkey PRIMARY KEY (week_key)
);
alter table public.weekpakket_edities enable row level security;

create table if not exists public.wishes (
  id uuid not null default gen_random_uuid(),
  message text not null,
  rating integer,
  display_name text,
  user_id uuid,
  parent_id uuid,
  status text not null default 'pending'::text,
  support_count integer not null default 0,
  page_url text,
  created_at timestamp with time zone not null default now(),
  is_maker boolean not null default false,
  wishes_display_name_check CHECK ((char_length(COALESCE(display_name, ''::text)) <= 40)),
  wishes_message_check CHECK (((char_length(message) >= 1) AND (char_length(message) <= 1500))),
  wishes_parent_id_fkey FOREIGN KEY (parent_id) REFERENCES wishes(id) ON DELETE CASCADE,
  wishes_pkey PRIMARY KEY (id),
  wishes_rating_check CHECK (((rating >= 1) AND (rating <= 5))),
  wishes_status_check CHECK ((status = ANY (ARRAY['pending'::text, 'approved'::text, 'rejected'::text])))
);
alter table public.wishes enable row level security;
CREATE INDEX wishes_status_created_idx ON public.wishes USING btree (status, created_at DESC);
CREATE INDEX wishes_parent_idx ON public.wishes USING btree (parent_id);

create table if not exists public.zoo_state (
  user_id uuid not null,
  coins integer not null default 25,
  streak integer not null default 0,
  last_login date,
  last_kwartier_date date,
  layout jsonb not null default '[]'::jsonb,
  owned jsonb not null default '[]'::jsonb,
  updated_at timestamp with time zone not null default now(),
  terrain jsonb,
  share_code text,
  profiel text not null default ''::text,
  zoo_state_pkey PRIMARY KEY (user_id, profiel),
  zoo_state_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE
);
alter table public.zoo_state enable row level security;
CREATE UNIQUE INDEX zoo_state_share_code_key ON public.zoo_state USING btree (share_code);

create table if not exists public.zoo_state_backup_20260816 (
  user_id uuid,
  coins integer,
  streak integer,
  last_login date,
  last_kwartier_date date,
  layout jsonb,
  owned jsonb,
  updated_at timestamp with time zone,
  terrain jsonb,
  share_code text
);
alter table public.zoo_state_backup_20260816 enable row level security;

-- ===== VIEWS =====
create or replace view public.events_echt as
 SELECT id,
    name,
    props,
    path,
    source,
    session,
    created_at
   FROM events
  WHERE (NOT (COALESCE((props ->> 'uid'::text), ''::text) IN ( SELECT household_uids.uid
           FROM household_uids)));
create or replace view public.zoo_state_real as
 SELECT user_id,
    coins,
    streak,
    last_login,
    last_kwartier_date,
    layout,
    owned,
    updated_at,
    terrain,
    share_code
   FROM zoo_state z
  WHERE (NOT (user_id IN ( SELECT household_accounts.user_id
           FROM household_accounts)));

-- ===== FUNCTIES =====
CREATE OR REPLACE FUNCTION public.activeer_vriend(p_code text, p_visitor text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  update referrals set activated_at = now()
  where code = upper(trim(coalesce(p_code, ''))) and visitor_uid = p_visitor and activated_at is null;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.add_partner(p_naam text, p_link text)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if coalesce(auth.jwt()->>'email','') <> 'mark-smulders@hotmail.com' then
    raise exception 'not allowed'; end if;
  insert into contributors(kind, naam, link, status)
  values ('partner', left(p_naam,60), nullif(left(p_link,200),''), 'approved');
end; $function$
;

CREATE OR REPLACE FUNCTION public.approve_contributor(p_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if coalesce(auth.jwt()->>'email','') <> 'mark-smulders@hotmail.com' then
    raise exception 'not allowed'; end if;
  update contributors set status = 'approved' where id = p_id;
end; $function$
;

CREATE OR REPLACE FUNCTION public.claim_link_code(p_code text, p_child_name text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  v_code_row link_codes%rowtype;
  v_link_id uuid;
  v_existing_id uuid;
  v_naam text;
  v_uid uuid := case when coalesce((auth.jwt()->>'is_anonymous')::boolean, false) then null else auth.uid() end;
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
  -- Label van de koppeling = wat de ouder/leerkracht bij het maken typte (stap 2:
  -- "Sophie" vs "Sofie" maakte anders stilletjes een tweede kind aan).
  v_naam := coalesce(nullif(trim(v_code_row.child_name), ''), trim(p_child_name));
  update link_codes set used_at = now() where id = v_code_row.id;

  if v_code_row.teacher_user_id is not null then
    select id into v_existing_id from leraar_leerling_links
     where teacher_user_id = v_code_row.teacher_user_id and lower(student_name) = lower(v_naam) limit 1;
    if v_existing_id is not null then
      update leraar_leerling_links set verified = true, verified_at = now(), student_user_id = coalesce(v_uid, student_user_id) where id = v_existing_id;
      return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'leraar', 'van_wie', v_code_row.van_wie, 'child_name', v_naam, 'updated', true);
    end if;
    insert into leraar_leerling_links (teacher_user_id, student_name, verified, verified_at, student_user_id)
    values (v_code_row.teacher_user_id, v_naam, true, now(), v_uid) returning id into v_link_id;
    return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'leraar', 'van_wie', v_code_row.van_wie, 'child_name', v_naam, 'created', true);
  end if;

  select id into v_existing_id from parent_child_links
   where parent_user_id = v_code_row.parent_user_id and lower(child_name) = lower(v_naam) limit 1;
  if v_existing_id is not null then
    update parent_child_links set verified = true, verified_at = now(), child_user_id = coalesce(v_uid, child_user_id) where id = v_existing_id;
    return jsonb_build_object('ok', true, 'link_id', v_existing_id, 'rol', 'ouder', 'van_wie', v_code_row.van_wie, 'child_name', v_naam, 'updated', true);
  end if;
  insert into parent_child_links (parent_user_id, child_name, verified, verified_at, child_user_id)
  values (v_code_row.parent_user_id, v_naam, true, now(), v_uid) returning id into v_link_id;
  return jsonb_build_object('ok', true, 'link_id', v_link_id, 'rol', 'ouder', 'van_wie', v_code_row.van_wie, 'child_name', v_naam, 'created', true);
end;
$function$
;

CREATE OR REPLACE FUNCTION public.claim_partner_plek(p_code text, p_visitor text DEFAULT NULL::text)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  v_code text;
  v_max int;
  v_n int;
  v_uid uuid := auth.uid();
  v_vis text := nullif(trim(coalesce(p_visitor, '')), '');
begin
  if p_code is null then return 'onbekend'; end if;
  -- Identiteit = het (evt. anonieme) Supabase-account, niet meer een
  -- client-gekozen visitor-id (Fable-review 2 sep 2026: plekken waren met
  -- random id's leeg te trekken en het recht was vervalsbaar).
  if v_uid is null then return 'geen_sessie'; end if;
  if v_vis is not null and (length(v_vis) < 6 or length(v_vis) > 80) then v_vis := null; end if;
  v_code := upper(trim(p_code));
  select max_uses into v_max from partner_codes where code = v_code for update;
  if v_max is null then return 'onbekend'; end if;
  -- Al geclaimd door dit account, of door dit apparaat (legacy-rij zonder user_id)?
  if exists (select 1 from partner_claims where code = v_code and user_id = v_uid) then
    return 'al_geclaimd';
  end if;
  if v_vis is not null and exists (select 1 from partner_claims where code = v_code and visitor_uid = v_vis) then
    update partner_claims set user_id = coalesce(user_id, v_uid) where code = v_code and visitor_uid = v_vis;
    return 'al_geclaimd';
  end if;
  -- Eén partner-plek per account: een tweede code overschrijft niet.
  if exists (select 1 from partner_claims where user_id = v_uid) then return 'al_geclaimd'; end if;
  select count(*) into v_n from partner_claims where code = v_code;
  if v_n >= v_max then return 'vol'; end if;
  insert into partner_claims(code, visitor_uid, user_id)
  values (v_code, coalesce(v_vis, 'uid:' || v_uid::text), v_uid)
  on conflict (code, visitor_uid) do nothing;
  return 'geclaimd';
end;
$function$
;

CREATE OR REPLACE FUNCTION public.claim_sharer_deel_beloning()
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE
  v_code     TEXT;
  v_geworven INT;
BEGIN
  IF auth.uid() IS NULL THEN RETURN 'niet_ingelogd'; END IF;

  SELECT code INTO v_code FROM referral_codes WHERE user_id = auth.uid();
  IF v_code IS NULL THEN RETURN 'geen_code'; END IF;

  SELECT COUNT(*) INTO v_geworven
  FROM referrals WHERE code = v_code AND activated_at IS NOT NULL;

  IF v_geworven < 1 THEN RETURN 'geen_vrienden'; END IF;

  INSERT INTO subscriptions (user_id, tier, valid_until, created_at, updated_at)
  VALUES (auth.uid(), 'parent_pro', '2027-08-01'::timestamptz, NOW(), NOW())
  ON CONFLICT (user_id) DO UPDATE
    SET tier        = 'parent_pro',
        valid_until = GREATEST(
          COALESCE(subscriptions.valid_until, NOW()),
          '2027-08-01'::timestamptz
        ),
        updated_at  = NOW();

  RETURN 'geclaimd';
END;
$function$
;

CREATE OR REPLACE FUNCTION public.deel_actie_stand()
 RETURNS integer
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  SELECT GREATEST(0,
    p.max_uses - (SELECT COUNT(*)::INT FROM partner_claims c WHERE c.code = 'DEELACTIE2027')
  )::INT
  FROM partner_codes p
  WHERE p.code = 'DEELACTIE2027';
$function$
;

CREATE OR REPLACE FUNCTION public.delete_my_data()
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  v_uid uuid := auth.uid();
  v_email text;
  t text;
  n bigint;
  detail jsonb := '{}'::jsonb;
  total bigint := 0;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'error', 'not_logged_in');
  end if;
  select lower(email) into v_email from auth.users where id = v_uid;

  -- 1. Alles wat op user_id staat (ook tabellen zónder FK naar auth.users).
  --    F6 Fable-review 2 sep 2026: lijst was 13 tabellen, nu álle user_id-kolommen
  --    (behalve household_accounts = beheerderslijst van Mark zelf).
  for t in
    select c.table_name from information_schema.columns c
    join information_schema.tables tb on tb.table_name = c.table_name and tb.table_schema = c.table_schema
    where c.table_schema = 'public' and tb.table_type = 'BASE TABLE'
      and c.column_name = 'user_id' and c.table_name not in ('household_accounts')
  loop
    execute format('delete from public.%I where user_id = $1', t) using v_uid;
    get diagnostics n = row_count;
    if n > 0 then detail := detail || jsonb_build_object(t, n); end if;
    total := total + n;
  end loop;

  -- 2. Ouder-/leerkracht-rijen (parent_user_id, teacher_user_id, maker_user_id);
  --    klaargezet-tabellen cascaden mee via link_id.
  for t in
    select c.table_name from information_schema.columns c
    where c.table_schema = 'public' and c.column_name = 'parent_user_id'
  loop
    execute format('delete from public.%I where parent_user_id = $1', t) using v_uid;
    get diagnostics n = row_count;
    if n > 0 then detail := detail || jsonb_build_object(t, n); end if;
    total := total + n;
  end loop;
  for t in
    select c.table_name from information_schema.columns c
    where c.table_schema = 'public' and c.column_name = 'teacher_user_id'
  loop
    execute format('delete from public.%I where teacher_user_id = $1', t) using v_uid;
    get diagnostics n = row_count;
    if n > 0 then detail := detail || jsonb_build_object(t, n); end if;
    total := total + n;
  end loop;
  delete from public.obliterator_user_levels where maker_user_id = v_uid;
  get diagnostics n = row_count; total := total + n;
  if n > 0 then detail := detail || jsonb_build_object('obliterator_user_levels', n); end if;
  delete from public.pvp_matches where host_user_id = v_uid or guest_user_id = v_uid;
  get diagnostics n = row_count; total := total + n;
  if n > 0 then detail := detail || jsonb_build_object('pvp_matches', n); end if;

  -- 3. Verwijzingen naar mij in andermans rijen: account-koppeling losmaken
  --    (de naam in de lijst van een ouder/leerkracht is húń administratie).
  update public.parent_child_links set child_user_id = null where child_user_id = v_uid;
  get diagnostics n = row_count; total := total + n;
  if n > 0 then detail := detail || jsonb_build_object('parent_child_links.child_user_id', n); end if;
  update public.leraar_leerling_links set student_user_id = null where student_user_id = v_uid;
  get diagnostics n = row_count; total := total + n;
  if n > 0 then detail := detail || jsonb_build_object('leraar_leerling_links.student_user_id', n); end if;

  -- 4. E-mailgebonden data.
  if v_email is not null and v_email <> '' then
    delete from public.upgrade_waitlist where lower(email) = v_email;
    get diagnostics n = row_count; total := total + n;
    if n > 0 then detail := detail || jsonb_build_object('upgrade_waitlist', n); end if;
    delete from public.kwartiercheck_results where lower(email) = v_email;
    get diagnostics n = row_count; total := total + n;
    if n > 0 then detail := detail || jsonb_build_object('kwartiercheck_results', n); end if;
    update public.parent_child_links set partner_email = null where lower(partner_email) = v_email;
    get diagnostics n = row_count; total := total + n;
    if n > 0 then detail := detail || jsonb_build_object('parent_child_links.partner_email', n); end if;
  end if;

  -- 5. Profiel + het auth-account zelf (cascadet identities/sessions/rest).
  delete from public.profiles where id = v_uid;
  get diagnostics n = row_count; total := total + n;
  if n > 0 then detail := detail || jsonb_build_object('profiles', n); end if;
  delete from auth.users where id = v_uid;
  get diagnostics n = row_count; total := total + n;
  if n > 0 then detail := detail || jsonb_build_object('auth_account', n); end if;

  return jsonb_build_object('ok', true, 'totaal', total, 'per_tabel', detail, 'account_verwijderd', true);
end;
$function$
;

CREATE OR REPLACE FUNCTION public.get_admin_stats()
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  is_admin boolean := lower(coalesce(auth.jwt() ->> 'email', '')) = 'mark-smulders@hotmail.com';
  res jsonb;
begin
  if not is_admin then
    return jsonb_build_object('error', 'forbidden');
  end if;
  select jsonb_build_object(
    'gegenereerd_op', now(),
    'accounts', (select count(*) from profiles),
    'accounts_echt', (select count(*) from profiles p where p.id not in (select user_id from household_accounts)),
    'bezoekers', jsonb_build_object(
      'vandaag', (select count(distinct session) from events where created_at >= date_trunc('day', now())),
      'week',    (select count(distinct session) from events where created_at >= now() - interval '7 days'),
      'maand',   (select count(distinct session) from events where created_at >= now() - interval '30 days'),
      'totaal',  (select count(distinct session) from events where session is not null)
    ),
    'events_totaal', (select count(*) from events),
    'gem_duur_sec', (select coalesce(round(avg(dur)), 0) from (
        select extract(epoch from (max(created_at) - min(created_at))) as dur
        from events where session is not null group by session having count(*) > 1) s),
    'kwartier_behaald_totaal', (select count(*) from events where name = 'kwartier_reached'),
    'top_bronnen', (select coalesce(jsonb_agg(t), '[]'::jsonb) from (
        select coalesce(source, '(direct)') as bron, count(distinct session) as sessies
        from events group by source order by sessies desc limit 8) t),
    'top_paden', (select coalesce(jsonb_agg(t), '[]'::jsonb) from (
        select coalesce(path, '(leeg)') as pad, count(*) as n
        from events group by path order by n desc limit 8) t),
    'top_events', (select coalesce(jsonb_agg(t), '[]'::jsonb) from (
        select name, count(*) as n from events group by name order by n desc limit 12) t),
    'pro_gebruik', (select coalesce(jsonb_agg(t), '[]'::jsonb) from (
        select coalesce(props ->> 'feature', '(onbekend)') as feature,
               count(*) as gebruikt,
               count(distinct session) as personen
        from events where name = 'pro_feature_used'
        group by 1 order by gebruikt desc limit 12) t),
    'pro_gezien', (select coalesce(jsonb_agg(t), '[]'::jsonb) from (
        select coalesce(props ->> 'feature', '(onbekend)') as feature,
               count(distinct session) as personen
        from events where name = 'pro_feature_seen'
        group by 1 order by personen desc limit 12) t),
    'qr_scans', (select count(distinct session) from events where props ->> 'bron' = 'qr'),
    'feedback_open', (select count(*) from feedback where coalesce(resolved, false) = false and coalesce(blocked, false) = false),
    'wishes_pending', (select count(*) from wishes where status = 'pending')
  ) into res;
  return res;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.get_ref_count(code text)
 RETURNS integer
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select count(*)::int
  from public.upgrade_waitlist
  where ref = code
    and code is not null
    and length(code) >= 4;
$function$
;

CREATE OR REPLACE FUNCTION public.get_shared_park(code text)
 RETURNS TABLE(layout jsonb, terrain jsonb)
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select layout, terrain
  from public.zoo_state
  where share_code = code
  limit 1;
$function$
;

CREATE OR REPLACE FUNCTION public.get_visitor_count()
 RETURNS integer
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select count(*)::int from public.profiles;
$function$
;

CREATE OR REPLACE FUNCTION public.increment_ai_call_quota(p_endpoint text)
 RETURNS bigint
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  v_count bigint;
begin
  insert into public.ai_call_quota (date, endpoint, count)
  values (current_date, p_endpoint, 1)
  on conflict (date, endpoint)
  do update set count = ai_call_quota.count + 1
  returning count into v_count;

  return v_count;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.increment_user_level_plays(level_id bigint)
 RETURNS void
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  UPDATE obliterator_user_levels SET plays = plays + 1 WHERE id = level_id;
$function$
;

CREATE OR REPLACE FUNCTION public.kind_klaargezet(p_child_name text, p_link_id uuid DEFAULT NULL::uuid)
 RETURNS TABLE(id uuid, path_id text, titel text, emoji text, gedaan boolean, created_at timestamp with time zone)
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select k.id, k.path_id, k.titel, k.emoji, k.gedaan, k.created_at
  from ouder_klaargezet k join parent_child_links l on l.id = k.link_id
  where l.verified = true
    and ((p_link_id is not null and l.id = p_link_id)
      or (p_link_id is null and lower(l.child_name) = lower(btrim(p_child_name)) and (l.child_user_id is null or l.child_user_id = auth.uid())))
  order by k.created_at desc;
$function$
;

CREATE OR REPLACE FUNCTION public.kind_klaargezet_gedaan(p_item_id uuid, p_child_name text, p_gedaan boolean DEFAULT true, p_link_id uuid DEFAULT NULL::uuid)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare v_ok int;
begin
  update ouder_klaargezet k set gedaan = p_gedaan, gedaan_at = case when p_gedaan then now() else null end
    from parent_child_links l
   where k.id = p_item_id and l.id = k.link_id and l.verified = true
     and ((p_link_id is not null and l.id = p_link_id)
       or (p_link_id is null and lower(l.child_name) = lower(btrim(p_child_name)) and (l.child_user_id is null or l.child_user_id = auth.uid())));
  get diagnostics v_ok = row_count;
  return jsonb_build_object('ok', v_ok > 0);
end;
$function$
;

CREATE OR REPLACE FUNCTION public.koppel_mijn_data(p_link_id uuid, p_naam text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  v_uid uuid := auth.uid();
  v_naam text := lower(btrim(coalesce(p_naam, '')));
  v_link_naam text;
  n int; tot int := 0; t text;
begin
  if v_uid is null or p_link_id is null or v_naam = '' then return jsonb_build_object('ok', false); end if;
  select lower(child_name) into v_link_naam from parent_child_links where id = p_link_id and verified = true;
  if v_link_naam is null then return jsonb_build_object('ok', false, 'error', 'link_onbekend'); end if;
  -- Alleen rijen van déze sessie (user_id = auth.uid()) met de naam van de koppeling of de getypte naam.
  foreach t in array array['leaderboard','learn_progress','topic_mastery','ref_mastery'] loop
    begin
      execute format('update public.%I set link_id = $1 where link_id is null and user_id = $2 and lower(player_name) in ($3, $4)', t)
        using p_link_id, v_uid, v_naam, v_link_naam;
      get diagnostics n = row_count; tot := tot + n;
    exception when unique_violation then
      -- botsing met al gekoppelde rijen (zelfde pad/stap): overslaan, geen dataverlies
      null;
    end;
  end loop;
  return jsonb_build_object('ok', true, 'gekoppeld', tot);
end;
$function$
;

CREATE OR REPLACE FUNCTION public.leerling_klaargezet_gedaan(p_item_id uuid, p_student_name text, p_gedaan boolean DEFAULT true)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare v_ok int;
begin
  update leraar_klaargezet k
     set gedaan = p_gedaan,
         gedaan_at = case when p_gedaan then now() else null end
    from leraar_leerling_links l
   where k.id = p_item_id
     and l.id = k.link_id
     and l.verified = true
     and lower(l.student_name) = lower(btrim(p_student_name))
     and (l.student_user_id is null or l.student_user_id = auth.uid());
  get diagnostics v_ok = row_count;
  return jsonb_build_object('ok', v_ok > 0);
end;
$function$
;

CREATE OR REPLACE FUNCTION public.list_pending_contributors()
 RETURNS SETOF contributors
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select * from contributors
  where status = 'pending'
    and coalesce(auth.jwt()->>'email','') = 'mark-smulders@hotmail.com'
  order by created_at desc;
$function$
;

CREATE OR REPLACE FUNCTION public.mark_household_uid(p_uid text, p_label text DEFAULT NULL::text)
 RETURNS void
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  INSERT INTO household_uids (uid, label)
  SELECT p_uid, LEFT(COALESCE(p_label, 'huishouden'), 40)
  WHERE p_uid LIKE 'u\_%' AND LENGTH(p_uid) BETWEEN 5 AND 60
  ON CONFLICT (uid) DO NOTHING;
$function$
;

CREATE OR REPLACE FUNCTION public.mijn_partner_recht(p_visitor text DEFAULT NULL::text)
 RETURNS jsonb
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare
  v_uid uuid := auth.uid();
  v_vis text := nullif(trim(coalesce(p_visitor, '')), '');
  r record;
begin
  select c.code, c.visitor_uid, c.user_id, pc.familie_tot, pc.org_naam
    into r
    from partner_claims c
    join partner_codes pc on pc.code = c.code
   where (v_uid is not null and c.user_id = v_uid)
      or (v_vis is not null and c.visitor_uid = v_vis)
   order by (c.user_id = v_uid) desc nulls last, c.created_at asc
   limit 1;
  if not found then return jsonb_build_object('recht', false); end if;
  -- Legacy apparaat-claim aan dit account hangen (eenmalig)
  if v_uid is not null and r.user_id is null then
    update partner_claims set user_id = v_uid where code = r.code and visitor_uid = r.visitor_uid;
  end if;
  return jsonb_build_object(
    'recht', (r.familie_tot is null or r.familie_tot >= current_date),
    'code', r.code,
    'org', r.org_naam,
    'blijvend', (r.familie_tot is null),
    'familie_tot', r.familie_tot
  );
end;
$function$
;

CREATE OR REPLACE FUNCTION public.mijn_vriendencode()
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare v_uid uuid := auth.uid(); v_code text;
begin
  if v_uid is null then raise exception 'niet ingelogd'; end if;
  select code into v_code from referral_codes where user_id = v_uid;
  if v_code is not null then return v_code; end if;
  for i in 1..5 loop
    -- 0/O en 1/I vermijden: makkelijk voor te lezen aan een andere ouder.
    v_code := upper(translate(substr(md5(gen_random_uuid()::text), 1, 6), '01oil', '89xyz'));
    begin
      insert into referral_codes(user_id, code) values (v_uid, v_code);
      return v_code;
    exception when unique_violation then
      select code into v_code from referral_codes where user_id = v_uid;
      if v_code is not null then return v_code; end if;
    end;
  end loop;
  raise exception 'kon geen code maken';
end;
$function$
;

CREATE OR REPLACE FUNCTION public.niveau_resultaten_voor_email(p_email text)
 RETURNS TABLE(onderdeel text, ref text, attempts integer, correct integer)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  return query
  select rm.onderdeel, rm.ref, sum(rm.attempts)::int, sum(rm.correct)::int
  from auth.users u
  join public.parent_child_links pcl on pcl.parent_user_id = u.id and pcl.verified = true
  join public.ref_mastery rm
    on (rm.link_id = pcl.id)
    or (rm.link_id is null and lower(rm.player_name) = lower(pcl.child_name)
        and (pcl.child_user_id is null or rm.user_id = pcl.child_user_id))
  where lower(u.email) = lower(p_email)
  group by rm.onderdeel, rm.ref;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.obliterator_enforce_identity()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
DECLARE dn text;
BEGIN
  IF NEW.user_id IS NOT NULL THEN
    SELECT display_name INTO dn FROM public.profiles WHERE id = NEW.user_id;
    IF dn IS NOT NULL AND length(trim(dn)) > 0 THEN
      NEW.player_name := left(trim(dn), 12);
    END IF;
  ELSE
    IF EXISTS (SELECT 1 FROM public.profiles WHERE lower(display_name) = lower(NEW.player_name)) THEN
      NEW.player_name := left(NEW.player_name, 6) || ' (gast)';
    END IF;
  END IF;
  RETURN NEW;
END; $function$
;

CREATE OR REPLACE FUNCTION public.obliterator_user_levels_enforce_max3()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
  cnt int;
BEGIN
  IF new.maker_user_id IS NULL THEN
    RETURN new;
  END IF;
  SELECT COUNT(*) INTO cnt FROM public.obliterator_user_levels
  WHERE maker_user_id = new.maker_user_id;
  IF cnt >= 3 THEN
    RAISE EXCEPTION 'Maximaal 3 levels per speler — verwijder eerst een oude.'
      USING ERRCODE = 'P0001';
  END IF;
  RETURN new;
END
$function$
;

CREATE OR REPLACE FUNCTION public.obliterator_user_levels_enforce_publiek_unique()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
  cnt int;
BEGIN
  IF new.publiek IS NOT TRUE THEN
    RETURN new;
  END IF;
  IF new.maker_user_id IS NULL THEN
    RETURN new;
  END IF;
  SELECT COUNT(*) INTO cnt FROM public.obliterator_user_levels
  WHERE maker_user_id = new.maker_user_id
    AND publiek = true
    AND (TG_OP = 'INSERT' OR id <> new.id);
  IF cnt >= 1 THEN
    RAISE EXCEPTION 'Je kunt maar 1 publiek level tegelijk delen — zet eerst het andere op privé.'
      USING ERRCODE = 'P0001';
  END IF;
  RETURN new;
END
$function$
;

CREATE OR REPLACE FUNCTION public.obliterator_user_levels_protect_featured()
 RETURNS trigger
 LANGUAGE plpgsql
AS $function$
DECLARE
  is_admin boolean := lower(coalesce(auth.email(), '')) = 'mark-smulders@hotmail.com';
BEGIN
  -- featured kan nooit op een privé level staan
  IF new.publiek = false THEN
    new.featured := false;
  END IF;
  IF (TG_OP = 'INSERT') THEN
    IF new.featured = true AND NOT is_admin THEN
      new.featured := false;
    END IF;
  ELSIF (TG_OP = 'UPDATE') THEN
    IF new.featured IS DISTINCT FROM old.featured AND NOT is_admin THEN
      new.featured := old.featured;
    END IF;
  END IF;
  RETURN new;
END
$function$
;

CREATE OR REPLACE FUNCTION public.ouder_weekrapport_kandidaten()
 RETURNS TABLE(parent_email text, child_name text, child_user_id uuid, partner_email text, link_id uuid)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  return query
  select u.email::text, pcl.child_name, pcl.child_user_id, pcl.partner_email, pcl.id
  from public.parent_child_links pcl
  join auth.users u on u.id = pcl.parent_user_id
  where pcl.verified = true and u.email is not null and coalesce(pcl.weekmail, true) = true;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.partner_code_bestaat(p_code text)
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select exists(select 1 from partner_codes where code = upper(trim(p_code)));
$function$
;

CREATE OR REPLACE FUNCTION public.registreer_vriend(p_code text, p_visitor text)
 RETURNS boolean
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if p_code is null or p_visitor is null then return false; end if;
  if length(p_visitor) < 6 or length(p_visitor) > 80 then return false; end if;
  if not exists (select 1 from referral_codes where code = upper(trim(p_code))) then return false; end if;
  insert into referrals(code, visitor_uid) values (upper(trim(p_code)), p_visitor)
  on conflict (code, visitor_uid) do nothing;
  return true;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.remove_contributor(p_id uuid)
 RETURNS void
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
begin
  if coalesce(auth.jwt()->>'email','') <> 'mark-smulders@hotmail.com' then
    raise exception 'not allowed'; end if;
  delete from contributors where id = p_id;
end; $function$
;

CREATE OR REPLACE FUNCTION public.support_wish(p_id uuid)
 RETURNS void
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  update public.wishes set support_count = support_count + 1
  where id = p_id and status = 'approved';
$function$
;

CREATE OR REPLACE FUNCTION public.verrijk_waitlist(p_id uuid, p_voornaam text, p_groep text, p_vakken jsonb)
 RETURNS void
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  update public.upgrade_waitlist
     set kind_voornaam = p_voornaam,
         kind_groep = p_groep,
         vakken = p_vakken
   where id = p_id;
$function$
;

CREATE OR REPLACE FUNCTION public.voor_jou_klaargezet(p_student_name text, p_link_id uuid DEFAULT NULL::uuid)
 RETURNS TABLE(id uuid, path_id text, titel text, emoji text, gedaan boolean, created_at timestamp with time zone, bron text)
 LANGUAGE sql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  select k.id, k.path_id, k.titel, k.emoji, k.gedaan, k.created_at, 'ouder'::text as bron
  from ouder_klaargezet k join parent_child_links l on l.id = k.link_id
  where l.verified = true
    and ((p_link_id is not null and l.id = p_link_id)
      or (p_link_id is null and lower(l.child_name) = lower(btrim(p_student_name)) and (l.child_user_id is null or l.child_user_id = auth.uid())))
  union all
  select k.id, k.path_id, k.titel, k.emoji, k.gedaan, k.created_at, 'leraar'::text as bron
  from leraar_klaargezet k join leraar_leerling_links l on l.id = k.link_id
  where l.verified = true and lower(l.student_name) = lower(btrim(p_student_name))
    and (l.student_user_id is null or l.student_user_id = auth.uid())
  order by created_at desc;
$function$
;

CREATE OR REPLACE FUNCTION public.vrienden_stand()
 RETURNS TABLE(code text, geworven integer, doel integer, pro_verdiend boolean, pro_tot timestamp with time zone)
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare v_uid uuid := auth.uid(); v_code text; v_n integer; v_tot timestamptz;
begin
  if v_uid is null then raise exception 'niet ingelogd'; end if;
  select rc.code into v_code from referral_codes rc where rc.user_id = v_uid;
  if v_code is null then
    return query select null::text, 0, 5, false, null::timestamptz;
    return;
  end if;
  select count(*)::integer into v_n from referrals r where r.code = v_code and r.activated_at is not null;
  if v_n >= 5 then
    insert into subscriptions(user_id, tier, valid_until)
    values (v_uid, 'parent_pro', '2027-07-01T00:00:00Z')
    on conflict (user_id) do update
      set tier = 'parent_pro',
          valid_until = greatest(coalesce(subscriptions.valid_until, '2027-07-01T00:00:00Z'), '2027-07-01T00:00:00Z'),
          updated_at = now();
  end if;
  select s.valid_until into v_tot from subscriptions s where s.user_id = v_uid;
  return query select v_code, v_n, 5, (v_n >= 5), v_tot;
end;
$function$
;

CREATE OR REPLACE FUNCTION public.vriendencode_voor_email(p_email text)
 RETURNS text
 LANGUAGE plpgsql
 SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
declare v_uid uuid; v_code text;
begin
  select id into v_uid from auth.users where lower(email) = lower(trim(p_email)) limit 1;
  if v_uid is null then return null; end if;
  select code into v_code from referral_codes where user_id = v_uid;
  if v_code is not null then return v_code; end if;
  for i in 1..5 loop
    v_code := upper(translate(substr(md5(gen_random_uuid()::text), 1, 6), '01oil', '89xyz'));
    begin
      insert into referral_codes(user_id, code) values (v_uid, v_code);
      return v_code;
    exception when unique_violation then
      select code into v_code from referral_codes where user_id = v_uid;
      if v_code is not null then return v_code; end if;
    end;
  end loop;
  return null;
end;
$function$
;

-- ===== TRIGGERS =====
CREATE TRIGGER trg_zidentity_obliterator_scores BEFORE INSERT ON public.obliterator_scores FOR EACH ROW EXECUTE FUNCTION obliterator_enforce_identity();
CREATE TRIGGER obliterator_user_levels_max3 BEFORE INSERT ON public.obliterator_user_levels FOR EACH ROW EXECUTE FUNCTION obliterator_user_levels_enforce_max3();
CREATE TRIGGER obliterator_user_levels_one_publiek BEFORE INSERT OR UPDATE ON public.obliterator_user_levels FOR EACH ROW EXECUTE FUNCTION obliterator_user_levels_enforce_publiek_unique();
CREATE TRIGGER obliterator_user_levels_featured_guard BEFORE INSERT OR UPDATE ON public.obliterator_user_levels FOR EACH ROW EXECUTE FUNCTION obliterator_user_levels_protect_featured();

-- ===== RLS-POLICIES =====
create policy "actuele_vraag_lezen" on public.actuele_vraag as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "Anyone can read the question pool" on public.ai_question_pool as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "contributors_insert_deler" on public.contributors as PERMISSIVE for INSERT to public
  with check (((kind = 'deler'::text) AND (status = 'pending'::text) AND (link IS NULL) AND ((char_length(naam) >= 1) AND (char_length(naam) <= 30))));
create policy "contributors_read_approved" on public.contributors as PERMISSIVE for SELECT to public
  using ((status = 'approved'::text));
create policy "ouder leest eigen voltooiingen" on public.daily_completions as PERMISSIVE for SELECT to authenticated
  using ((auth.uid() = parent_user_id));
create policy "ouder beheert eigen plannen" on public.daily_plans as PERMISSIVE for ALL to authenticated
  using ((auth.uid() = parent_user_id))
  with check ((auth.uid() = parent_user_id));
create policy "ouder beheert eigen startfotos" on public.diagnostic_assessments as PERMISSIVE for ALL to authenticated
  using ((auth.uid() = parent_user_id))
  with check ((auth.uid() = parent_user_id));
create policy "anon can insert events" on public.events as PERMISSIVE for INSERT to anon, authenticated
  with check (((name ~ '^[a-z][a-z0-9_]{0,59}$'::text) AND ((path IS NULL) OR (length(path) <= 120)) AND ((source IS NULL) OR (length(source) <= 120)) AND ((session IS NULL) OR (length(session) <= 80)) AND ((props IS NULL) OR (pg_column_size(props) <= 8192))));
create policy "anyone can insert feedback" on public.feedback as PERMISSIVE for INSERT to anon, authenticated
  with check (true);
create policy "owner can read feedback" on public.feedback as PERMISSIVE for SELECT to authenticated
  using ((auth.email() = 'mark-smulders@hotmail.com'::text));
create policy "owner can update feedback" on public.feedback as PERMISSIVE for UPDATE to authenticated
  using ((auth.email() = 'mark-smulders@hotmail.com'::text));
create policy "hof_admin_delete" on public.hall_of_fame as PERMISSIVE for DELETE to authenticated
  using ((auth.email() = 'mark-smulders@hotmail.com'::text));
create policy "hof_admin_insert" on public.hall_of_fame as PERMISSIVE for INSERT to authenticated
  with check ((auth.email() = 'mark-smulders@hotmail.com'::text));
create policy "hof_admin_update" on public.hall_of_fame as PERMISSIVE for UPDATE to authenticated
  using ((auth.email() = 'mark-smulders@hotmail.com'::text));
create policy "hof_select_anyone" on public.hall_of_fame as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "Iedereen kan kudo geven" on public.kudos as PERMISSIVE for INSERT to public
  with check (true);
create policy "Iedereen kan kudos zien" on public.kudos as PERMISSIVE for SELECT to public
  using (true);
create policy "anon_insert_kwartiercheck" on public.kwartiercheck_results as PERMISSIVE for INSERT to anon
  with check (true);
create policy "service_role_select_kwartiercheck" on public.kwartiercheck_results as PERMISSIVE for SELECT to public
  using ((auth.role() = 'service_role'::text));
create policy "Iedereen kan score toevoegen" on public.leaderboard as PERMISSIVE for INSERT to anon, authenticated
  with check (true);
create policy "Iedereen kan scorebord zien" on public.leaderboard as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "lpw_insert_own_or_anon" on public.learn_path_waitlist as PERMISSIVE for INSERT to anon, authenticated
  with check ((((auth.uid() IS NOT NULL) AND ((user_id IS NULL) OR (user_id = auth.uid()))) OR ((auth.uid() IS NULL) AND (user_id IS NULL))));
create policy "lpw_select_anyone" on public.learn_path_waitlist as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "lp_insert_own" on public.learn_progress as PERMISSIVE for INSERT to anon, authenticated
  with check ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))));
create policy "lp_select_own_or_legacy" on public.learn_progress as PERMISSIVE for SELECT to anon, authenticated
  using ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR (user_id IS NULL)));
create policy "lp_update_own" on public.learn_progress as PERMISSIVE for UPDATE to anon, authenticated
  using ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))))
  with check ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))));
create policy "ouder beheert eigen doelen" on public.learning_goals as PERMISSIVE for ALL to authenticated
  using ((auth.uid() = parent_user_id))
  with check ((auth.uid() = parent_user_id));
create policy "Teacher manages klaargezet for own links" on public.leraar_klaargezet as PERMISSIVE for ALL to public
  using ((EXISTS ( SELECT 1
   FROM leraar_leerling_links l
  WHERE ((l.id = leraar_klaargezet.link_id) AND (l.teacher_user_id = auth.uid())))))
  with check ((EXISTS ( SELECT 1
   FROM leraar_leerling_links l
  WHERE ((l.id = leraar_klaargezet.link_id) AND (l.teacher_user_id = auth.uid())))));
create policy "Teacher manages own student links" on public.leraar_leerling_links as PERMISSIVE for ALL to public
  using ((auth.uid() = teacher_user_id))
  with check ((auth.uid() = teacher_user_id));
create policy "Leerkracht maakt eigen koppelcode" on public.link_codes as PERMISSIVE for INSERT to public
  with check ((teacher_user_id = auth.uid()));
create policy "Leerkracht trekt eigen koppelcode in" on public.link_codes as PERMISSIVE for DELETE to authenticated
  using ((teacher_user_id = auth.uid()));
create policy "Leerkracht ziet eigen koppelcodes" on public.link_codes as PERMISSIVE for SELECT to public
  using ((teacher_user_id = auth.uid()));
create policy "Ouder maakt eigen koppelcode" on public.link_codes as PERMISSIVE for INSERT to authenticated
  with check ((parent_user_id = auth.uid()));
create policy "Ouder trekt eigen koppelcode in" on public.link_codes as PERMISSIVE for DELETE to authenticated
  using ((parent_user_id = auth.uid()));
create policy "Ouder ziet eigen koppelcodes" on public.link_codes as PERMISSIVE for SELECT to public
  using ((parent_user_id = auth.uid()));
create policy "insert_bonus_events" on public.obliterator_bonus_events as PERMISSIVE for INSERT to anon, authenticated
  with check (true);
create policy "select_all_bonus_events" on public.obliterator_bonus_events as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "Iedereen kan obliterator levels schrijven" on public.obliterator_levels as PERMISSIVE for INSERT to public
  with check (true);
create policy "Iedereen kan obliterator levels updaten" on public.obliterator_levels as PERMISSIVE for UPDATE to public
  using (true)
  with check (true);
create policy "Iedereen kan obliterator levels zien" on public.obliterator_levels as PERMISSIVE for SELECT to public
  using (true);
create policy "Iedereen kan obliterator score toevoegen" on public.obliterator_scores as PERMISSIVE for INSERT to public
  with check (true);
create policy "Iedereen kan obliterator scorebord zien" on public.obliterator_scores as PERMISSIVE for SELECT to public
  using (true);
create policy "delete_eigen_or_admin" on public.obliterator_user_levels as PERMISSIVE for DELETE to authenticated
  using (((auth.uid() = maker_user_id) OR (lower(COALESCE(auth.email(), ''::text)) = 'mark-smulders@hotmail.com'::text)));
create policy "insert_logged_in_eigen" on public.obliterator_user_levels as PERMISSIVE for INSERT to authenticated
  with check (((auth.uid() IS NOT NULL) AND (auth.uid() = maker_user_id)));
create policy "select_publiek_or_eigen" on public.obliterator_user_levels as PERMISSIVE for SELECT to anon, authenticated
  using (((publiek = true) OR ((auth.uid() IS NOT NULL) AND (auth.uid() = maker_user_id))));
create policy "update_eigen_or_admin" on public.obliterator_user_levels as PERMISSIVE for UPDATE to authenticated
  using (((auth.uid() = maker_user_id) OR (lower(COALESCE(auth.email(), ''::text)) = 'mark-smulders@hotmail.com'::text)))
  with check (((auth.uid() = maker_user_id) OR (lower(COALESCE(auth.email(), ''::text)) = 'mark-smulders@hotmail.com'::text)));
create policy "insert_oblivion_events" on public.oblivion_events as PERMISSIVE for INSERT to anon, authenticated
  with check (true);
create policy "select_all_oblivion_events" on public.oblivion_events as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "Parent manages klaargezet for own links" on public.ouder_klaargezet as PERMISSIVE for ALL to public
  using ((EXISTS ( SELECT 1
   FROM parent_child_links l
  WHERE ((l.id = ouder_klaargezet.link_id) AND (l.parent_user_id = auth.uid())))))
  with check ((EXISTS ( SELECT 1
   FROM parent_child_links l
  WHERE ((l.id = ouder_klaargezet.link_id) AND (l.parent_user_id = auth.uid())))));
create policy "Parents manage own children" on public.parent_child_links as PERMISSIVE for ALL to public
  using ((auth.uid() = parent_user_id))
  with check ((auth.uid() = parent_user_id));
create policy "park_galerij_insert" on public.park_galerij as PERMISSIVE for INSERT to public
  with check ((status = 'pending'::text));
create policy "park_galerij_select" on public.park_galerij as PERMISSIVE for SELECT to public
  using (((status = 'approved'::text) OR (lower(COALESCE((auth.jwt() ->> 'email'::text), ''::text)) = 'mark-smulders@hotmail.com'::text)));
create policy "park_galerij_update" on public.park_galerij as PERMISSIVE for UPDATE to public
  using ((lower(COALESCE((auth.jwt() ->> 'email'::text), ''::text)) = 'mark-smulders@hotmail.com'::text))
  with check ((lower(COALESCE((auth.jwt() ->> 'email'::text), ''::text)) = 'mark-smulders@hotmail.com'::text));
create policy "Gebruiker leest eigen profiel" on public.profiles as PERMISSIVE for SELECT to public
  using ((auth.uid() = id));
create policy "Gebruiker schrijft eigen profiel" on public.profiles as PERMISSIVE for INSERT to public
  with check ((auth.uid() = id));
create policy "Gebruiker update eigen profiel" on public.profiles as PERMISSIVE for UPDATE to public
  using ((auth.uid() = id));
create policy "Gebruiker leest eigen voortgang" on public.progress as PERMISSIVE for SELECT to public
  using ((auth.uid() = user_id));
create policy "Gebruiker voegt eigen voortgang toe" on public.progress as PERMISSIVE for INSERT to public
  with check ((auth.uid() = user_id));
create policy "anon delete own player sub" on public.push_subscriptions as PERMISSIVE for DELETE to anon
  using ((player_name IS NOT NULL));
create policy "anon insert push sub" on public.push_subscriptions as PERMISSIVE for INSERT to anon
  with check ((player_name IS NOT NULL));
create policy "users manage own push subs" on public.push_subscriptions as PERMISSIVE for ALL to public
  using ((auth.uid() = user_id))
  with check ((auth.uid() = user_id));
create policy "match_insert_host" on public.pvp_matches as PERMISSIVE for INSERT to public
  with check (((auth.uid() IS NULL) OR (auth.uid() = host_user_id)));
create policy "match_select_any" on public.pvp_matches as PERMISSIVE for SELECT to public
  using (true);
create policy "match_update_participants" on public.pvp_matches as PERMISSIVE for UPDATE to public
  using (((auth.uid() IS NULL) OR (auth.uid() = host_user_id) OR (auth.uid() = guest_user_id) OR (guest_user_id IS NULL)));
create policy "questions_admin_write" on public.questions as PERMISSIVE for ALL to authenticated
  using ((auth.email() = 'mark-smulders@hotmail.com'::text))
  with check ((auth.email() = 'mark-smulders@hotmail.com'::text));
create policy "questions_select_anyone" on public.questions as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "Allow anon to insert quizzes" on public.quizzes as PERMISSIVE for INSERT to anon
  with check (true);
create policy "Allow anon to select quizzes" on public.quizzes as PERMISSIVE for SELECT to anon
  using (true);
create policy "anyone can insert" on public.quizzes as PERMISSIVE for INSERT to public
  with check (true);
create policy "anyone can read" on public.quizzes as PERMISSIVE for SELECT to public
  using (true);
create policy "rm_insert_own" on public.ref_mastery as PERMISSIVE for INSERT to anon, authenticated
  with check ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))));
create policy "rm_select_own_or_legacy" on public.ref_mastery as PERMISSIVE for SELECT to anon, authenticated
  using ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR (user_id IS NULL)));
create policy "rm_update_own" on public.ref_mastery as PERMISSIVE for UPDATE to anon, authenticated
  using ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))))
  with check ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))));
create policy "Users can insert own school links" on public.school_parent_links as PERMISSIVE for INSERT to public
  with check ((auth.uid() = user_id));
create policy "Users can read own school links" on public.school_parent_links as PERMISSIVE for SELECT to public
  using ((auth.uid() = user_id));
create policy "Anyone can read schools by code" on public.schools as PERMISSIVE for SELECT to public
  using (true);
create policy "Anyone can log a share event" on public.share_events as PERMISSIVE for INSERT to anon, authenticated
  with check ((((length(shared_by) >= 1) AND (length(shared_by) <= 60)) AND ((platform IS NULL) OR (platform = ANY (ARRAY['whatsapp'::text, 'facebook'::text, 'native'::text, 'copy'::text])))));
create policy "Anyone can read recent share events" on public.share_events as PERMISSIVE for SELECT to anon, authenticated
  using ((created_at > (now() - '7 days'::interval)));
create policy "Users insert own subscription" on public.subscriptions as PERMISSIVE for INSERT to public
  with check ((auth.uid() = user_id));
create policy "Users read own subscription" on public.subscriptions as PERMISSIVE for SELECT to public
  using ((auth.uid() = user_id));
create policy "supporter_scores_insert" on public.supporter_scores as PERMISSIVE for INSERT to anon, authenticated
  with check (((score >= 0) AND (score <= 100000) AND (char_length(player_name) <= 24)));
create policy "supporter_scores_select" on public.supporter_scores as PERMISSIVE for SELECT to anon, authenticated
  using (true);
create policy "tm_insert_own" on public.topic_mastery as PERMISSIVE for INSERT to anon, authenticated
  with check ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))));
create policy "tm_select_own_or_legacy" on public.topic_mastery as PERMISSIVE for SELECT to anon, authenticated
  using ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR (user_id IS NULL)));
create policy "tm_update_own" on public.topic_mastery as PERMISSIVE for UPDATE to anon, authenticated
  using ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))))
  with check ((((auth.uid() IS NOT NULL) AND (user_id = auth.uid())) OR ((auth.uid() IS NULL) AND (user_id IS NULL))));
create policy "Anyone can join waitlist" on public.upgrade_waitlist as PERMISSIVE for INSERT to public
  with check (true);
create policy "wishes_insert" on public.wishes as PERMISSIVE for INSERT to public
  with check (((status = 'pending'::text) AND (COALESCE(is_maker, false) = false)));
create policy "wishes_select" on public.wishes as PERMISSIVE for SELECT to public
  using (((status = 'approved'::text) OR (lower(COALESCE((auth.jwt() ->> 'email'::text), ''::text)) = 'mark-smulders@hotmail.com'::text)));
create policy "wishes_update" on public.wishes as PERMISSIVE for UPDATE to public
  using ((lower(COALESCE((auth.jwt() ->> 'email'::text), ''::text)) = 'mark-smulders@hotmail.com'::text))
  with check ((lower(COALESCE((auth.jwt() ->> 'email'::text), ''::text)) = 'mark-smulders@hotmail.com'::text));
create policy "eigen zoo aanmaken" on public.zoo_state as PERMISSIVE for INSERT to public
  with check ((auth.uid() = user_id));
create policy "eigen zoo bijwerken" on public.zoo_state as PERMISSIVE for UPDATE to public
  using ((auth.uid() = user_id))
  with check ((auth.uid() = user_id));
create policy "eigen zoo lezen" on public.zoo_state as PERMISSIVE for SELECT to public
  using ((auth.uid() = user_id));

-- ===== GRANTS (anon/authenticated op tabellen/views) =====
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.actuele_vraag to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.actuele_vraag to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.ai_call_quota to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.ai_call_quota to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.ai_question_pool to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.ai_question_pool to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.contributors to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.contributors to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.daily_completions to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.daily_completions to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.daily_plans to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.daily_plans to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.deluxe_kv to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.deluxe_kv to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.diagnostic_assessments to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.diagnostic_assessments to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.events to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.events to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.feedback to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.feedback to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.game_rooms to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.game_rooms to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.hall_of_fame to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.hall_of_fame to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.household_accounts to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.household_accounts to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.household_uids to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.household_uids to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.kudos to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.kudos to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.kwartiercheck_results to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.kwartiercheck_results to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.leaderboard to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.leaderboard to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.learn_path_waitlist to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.learn_path_waitlist to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.learn_progress to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.learn_progress to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.learning_goals to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.learning_goals to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.leraar_klaargezet to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.leraar_klaargezet to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.leraar_leerling_links to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.leraar_leerling_links to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.link_codes to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.link_codes to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.obliterator_bonus_events to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.obliterator_bonus_events to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.obliterator_levels to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.obliterator_levels to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.obliterator_scores to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.obliterator_scores to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.obliterator_user_levels to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.obliterator_user_levels to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.oblivion_events to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.oblivion_events to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.ouder_klaargezet to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.ouder_klaargezet to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.parent_child_links to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.parent_child_links to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.park_galerij to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.park_galerij to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.partner_claims to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.partner_claims to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.partner_codes to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.partner_codes to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.profiles to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.profiles to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.progress to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.progress to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.push_subscriptions to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.push_subscriptions to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.pvp_matches to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.pvp_matches to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.questions to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.questions to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.quizzes to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.quizzes to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.ref_mastery to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.ref_mastery to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.referral_codes to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.referral_codes to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.referrals to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.referrals to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.school_parent_links to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.school_parent_links to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.schools to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.schools to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.scores to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.scores to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.share_events to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.share_events to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.social_post_queue to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.social_post_queue to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.subscriptions to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.subscriptions to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.supporter_scores to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.supporter_scores to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.topic_mastery to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.topic_mastery to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.upgrade_waitlist to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.upgrade_waitlist to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.weekpakket_edities to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.weekpakket_edities to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.wishes to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.wishes to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.zoo_state to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.zoo_state to authenticated;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.zoo_state_backup_20260816 to anon;
grant DELETE, INSERT, REFERENCES, SELECT, TRIGGER, TRUNCATE, UPDATE on public.zoo_state_backup_20260816 to authenticated;

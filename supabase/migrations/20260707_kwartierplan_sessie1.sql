-- Kwartierplan sessie 1 (2026-07-07) — toegepast via Supabase MCP op prod.
-- Kinderen zijn naam-gebaseerd (geen accounts) — alles keyt op
-- parent_user_id + child_name, conform parent_child_links.
-- RLS: ouder ziet/schrijft alleen eigen rijen; kind-writes (voltooiingen)
-- komen in sessie 2 via een security-definer-RPC (zelfde patroon als
-- verrijk_waitlist). Zie src/features/kwartierplan/.

create table if not exists learning_goals (
  id uuid primary key default gen_random_uuid(),
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  child_name text not null,
  target_level text not null,
  target_event text not null default 'doorstroomtoets-2027',
  target_date date,
  current_grade text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (parent_user_id, child_name)
);
alter table learning_goals enable row level security;
create policy "ouder beheert eigen doelen" on learning_goals
  for all to authenticated
  using (auth.uid() = parent_user_id)
  with check (auth.uid() = parent_user_id);
create index if not exists learning_goals_parent_child_idx
  on learning_goals (parent_user_id, child_name);

create table if not exists diagnostic_assessments (
  id uuid primary key default gen_random_uuid(),
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  child_name text not null,
  taken_at timestamptz not null default now(),
  per_pijler_scores jsonb not null default '{}'::jsonb,
  recommended_paths jsonb not null default '[]'::jsonb,
  questions_total int not null default 0,
  correct_total int not null default 0,
  avg_seconds_per_question numeric,
  rushed boolean not null default false,
  is_baseline boolean not null default false,
  parent_acknowledged_at timestamptz
);
alter table diagnostic_assessments enable row level security;
create policy "ouder beheert eigen startfotos" on diagnostic_assessments
  for all to authenticated
  using (auth.uid() = parent_user_id)
  with check (auth.uid() = parent_user_id);
create index if not exists diagnostic_assessments_parent_child_idx
  on diagnostic_assessments (parent_user_id, child_name, taken_at desc);

create table if not exists daily_plans (
  id uuid primary key default gen_random_uuid(),
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  child_name text not null,
  plan_items jsonb not null default '[]'::jsonb,
  schedule_pattern text not null default 'daily',
  active_from date,
  active_until date,
  paused_at timestamptz,
  created_at timestamptz not null default now(),
  last_updated timestamptz not null default now()
);
alter table daily_plans enable row level security;
create policy "ouder beheert eigen plannen" on daily_plans
  for all to authenticated
  using (auth.uid() = parent_user_id)
  with check (auth.uid() = parent_user_id);
create index if not exists daily_plans_parent_child_idx
  on daily_plans (parent_user_id, child_name);

create table if not exists daily_completions (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid references daily_plans(id) on delete cascade,
  parent_user_id uuid not null references auth.users(id) on delete cascade,
  child_name text not null,
  date date not null,
  path_id text,
  status text not null default 'done',
  questions_answered int not null default 0,
  correct_count int not null default 0,
  time_spent_seconds int not null default 0,
  completed_at timestamptz not null default now(),
  notified_at timestamptz,
  unique (plan_id, date, path_id)
);
alter table daily_completions enable row level security;
create policy "ouder leest eigen voltooiingen" on daily_completions
  for select to authenticated
  using (auth.uid() = parent_user_id);
create index if not exists daily_completions_parent_child_idx
  on daily_completions (parent_user_id, child_name, date desc);

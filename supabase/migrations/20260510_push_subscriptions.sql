-- A12 (10-agent circulariteit-review 2026-05-10): web push voor over-dagen-circulariteit.
-- Slaat browser push subscriptions op zodat we 17:00 dagelijks kunnen pushen
-- "🔄 N vragen wachten op herhaling".

create table if not exists public.push_subscriptions (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid references auth.users(id) on delete cascade,
  player_name  text,                         -- voor anonieme leerlingen zonder auth
  endpoint     text not null unique,         -- de PushSubscription endpoint URL
  p256dh       text not null,                -- public key
  auth         text not null,                -- secret
  user_agent   text,                         -- voor debug ("Chrome op Android")
  created_at   timestamptz not null default now(),
  last_used_at timestamptz,
  failed_count int not null default 0        -- bij herhaalde 410-errors → opruimen
);

create index if not exists push_subscriptions_user_id_idx on public.push_subscriptions(user_id);
create index if not exists push_subscriptions_player_name_idx on public.push_subscriptions(player_name);

alter table public.push_subscriptions enable row level security;

-- Eigen subscriptions: gebruiker met user_id mag eigen rijen lezen/schrijven/verwijderen.
create policy "users manage own push subs"
  on public.push_subscriptions for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Anonieme inzending toestaan (player_name flow zonder auth).
-- LET OP: deze policy laat ook anon inserts toe — bewust voor gast-flow.
-- De edge function gebruikt service-role-key en omzeilt RLS sowieso.
create policy "anon insert push sub"
  on public.push_subscriptions for insert
  to anon
  with check (player_name is not null);

create policy "anon delete own player sub"
  on public.push_subscriptions for delete
  to anon
  using (player_name is not null);

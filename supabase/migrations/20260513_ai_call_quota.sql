-- Audit-1 QW6 (2026-05-13): daily cost-cap voor AI-endpoints.
-- Voorkomt dat een scraper of misbruik-patroon de Anthropic-rekening leegtrekt.
-- Per dag per endpoint tellen we hoeveel calls er waren; als max is bereikt,
-- geeft `_guard.js` direct 503 terug zonder Anthropic-call.
--
-- Defaults (overridable via env-var):
--   tutor-chat:        5000/dag  (Haiku 4.5, ~€0,005/call → max €25/dag)
--   generate-questions: 500/dag  (web_search-tool ~€0,025/call → max €12,50/dag)
--   preview-topic:     1000/dag

create table if not exists public.ai_call_quota (
  date date not null,
  endpoint text not null,
  count bigint not null default 0,
  primary key (date, endpoint)
);

-- RLS aan zodat anon-key niets kan lezen/wijzigen.
alter table public.ai_call_quota enable row level security;

-- Service-role-only — geen policies = alleen service-role kan via REST.
-- (RLS blokkeert anon + authenticated by default.)

-- RPC: atomic increment + return new count. Edge function roept dit aan
-- BEFORE de Anthropic-call. Als return > limit → 503.
create or replace function public.increment_ai_call_quota(p_endpoint text)
returns bigint
language plpgsql
security definer
set search_path = public
as $$
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
$$;

-- Grant alleen aan service-role (edge function gebruikt service-key).
revoke all on function public.increment_ai_call_quota(text) from public;
revoke all on function public.increment_ai_call_quota(text) from anon, authenticated;
grant execute on function public.increment_ai_call_quota(text) to service_role;

-- Index voor cleanup-job (verwijder rijen ouder dan 90 dagen).
create index if not exists ai_call_quota_date_idx on public.ai_call_quota (date);

comment on table public.ai_call_quota is
  'Daily cost-cap counter per AI-endpoint. Audit-1 QW6 (2026-05-13).';
comment on function public.increment_ai_call_quota(text) is
  'Atomic increment-and-return voor edge functions. Service-role only.';

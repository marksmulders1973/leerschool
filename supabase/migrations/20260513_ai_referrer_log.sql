-- AI-referrer-log (Mark request 2026-05-13 na SEO-werk).
-- Meet welke AI-engines (ChatGPT/Claude/Perplexity/Gemini/Copilot) verkeer
-- sturen naar leerkwartier.app — belangrijke meting nu we SEO/AI-discovery-
-- werk hebben gedaan en willen weten wat daadwerkelijk effect heeft.
--
-- Data-flow:
--   1. Client-side: index.html script detecteert document.referrer + UA.
--      Stuurt via navigator.sendBeacon() naar /api/log-ai-ref.
--   2. Edge function api/log-ai-ref.js valideert + classificeert AI-bron.
--   3. Insert in deze tabel via service-role (omzeilt RLS).
--
-- Privacy: GEEN raw IP, alleen referrer-hostname + AI-categorie. Geen
-- persoonsgegevens. Conform AVG datasporing-minimalisatie.

create table if not exists public.ai_referrer_log (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  path         text not null,                -- welke pagina werd bezocht
  referrer_host text,                        -- bv. "chatgpt.com" of "claude.ai"
  user_agent   text,                         -- voor crawler-detectie + debug
  ai_source    text not null,                -- categorie: chatgpt|claude|perplexity|gemini|copilot|crawler|other
  is_crawler   boolean not null default false  -- true = AI-bot (GPTBot/ClaudeBot), false = mens die via AI-chat klikt
);

create index if not exists ai_referrer_log_created_at_idx on public.ai_referrer_log(created_at desc);
create index if not exists ai_referrer_log_ai_source_idx on public.ai_referrer_log(ai_source);

alter table public.ai_referrer_log enable row level security;

-- Anon-insert via service-role-key in edge function. Direct anon-insert
-- is geblokkeerd voor de tabel zelf (geen policy), zodat alleen onze
-- edge function (met service-role) kan loggen — voorkomt spam.

-- Alleen admin-email mag lezen (zelfde patroon als feedback-tabel).
create policy "admin read ai_referrer_log"
  on public.ai_referrer_log for select
  using (
    auth.jwt() ->> 'email' in (
      'Mark-smulders@hotmail.com',
      'marksmulders1973@gmail.com'
    )
  );

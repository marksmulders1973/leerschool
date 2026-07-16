-- Audit 16-07 (12-lens, security P1): policy "Anyone can contribute questions"
-- gaf anon+authenticated INSERT met check(true) op ai_question_pool. De pool
-- wordt door alle gebruikers teruggelezen als quizvragen én de answer-index
-- wordt gebruikt om kinderen na te kijken — iedereen kon dus op grote schaal
-- vragen met een bewust foute answer in de gedeelde bank schuiven
-- (data-poisoning: fout antwoord wordt goed gerekend).
--
-- Fix: client-schrijfrecht ingetrokken; de pool wordt voortaan uitsluitend
-- server-side gevuld door api/generate-questions.js (service role) direct na
-- generatie. Lezen blijft open (nodig voor de spaar-cascade in de app).
--
-- Toegepast op het live project via MCP op 2026-07-16.

drop policy if exists "Anyone can contribute questions" on public.ai_question_pool;

-- Mark 25 okt 2026: rapportcijfer over de laatste 50 vragen. Per onderwerp een rijtje
-- '1'/'0' (goed/fout), nieuwste achteraan, max 50 tekens. Leeg bij bestaande rijen.
alter table public.topic_mastery add column if not exists recent text not null default '';
alter table public.topic_mastery add constraint topic_mastery_recent_len check (char_length(recent) <= 50 and recent ~ '^[01]*$');

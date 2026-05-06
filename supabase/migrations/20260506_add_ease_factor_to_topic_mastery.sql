-- Audit 2 M1 (didacticus): easeFactor in topic_mastery
--
-- Voegt twee kolommen toe aan topic_mastery:
--   - ease_factor (0.5-2.5, default 1.0): SM-2-stijl difficulty-modifier
--   - interval_days (int): vorige interval voor zachte fout-reset
--
-- De code (src/features/mastery/mastery.js) detecteert automatisch of deze
-- kolommen bestaan via supportsEaseColumn(). Bij ontbreken werkt de oude
-- pure-Leitner-flow gewoon door — geen breaking change.
--
-- Run dit in Supabase Studio → SQL Editor wanneer je klaar bent voor de
-- upgrade. Bestaande rijen krijgen automatisch ease_factor=1.0 en
-- interval_days=NULL (nul werkt als 'eerste meting').

ALTER TABLE topic_mastery
  ADD COLUMN IF NOT EXISTS ease_factor numeric(3,2) DEFAULT 1.0,
  ADD COLUMN IF NOT EXISTS interval_days int DEFAULT NULL;

-- Optioneel: index voor snelle due-queries blijft op next_due_at staan;
-- ease_factor heeft geen index nodig (alleen lezen + schrijven per rij).

COMMENT ON COLUMN topic_mastery.ease_factor IS
  'SM-2-style difficulty modifier (0.5-2.5, default 1.0). Verhoogd bij correct (+0.1), verlaagd bij fout (×0.85). Schaalt het Leitner-interval per onderwerp.';

COMMENT ON COLUMN topic_mastery.interval_days IS
  'Aantal dagen tot volgende review (vorige cyclus). Gebruikt voor zachte fout-reset: bij fout antwoord wordt nieuwe interval = vorige_interval × 0.5 ipv harde reset naar 1 dag.';

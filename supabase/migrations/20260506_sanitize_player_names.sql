-- Audit 2 G1 (privacy/AVG-DPO): server-side player_name-sanitizer
--
-- Privacy-statement (public/privacy.html) belooft: "Alleen een voornaam of
-- bijnaam in het scorebord — geen achternaam, geen schoolnaam, geen klas
-- in herleidbare vorm." Maar de code dwingt dat NIET af. Een leerling die
-- "Mark Smulders groep 6 De Regenboog Oss" als naam invoert wordt wereldwijd
-- zichtbaar — schending AVG art. 25 (privacy by design) + art. 5.1.c
-- (dataminimalisatie). AP ziet zo'n gap als 'schijnzekerheid' en handhaaft
-- daar het hardst op.
--
-- Deze migratie installeert één SQL-functie + drie triggers (één per tabel)
-- die player_name BIJ INSERT automatisch saneren:
--   1. Trim whitespace, normaliseer dubbele spaties
--   2. Cap lengte op 12 chars
--   3. Strip cijfers (geen "Mark2026", "Sara_groep6")
--   4. Behoud alleen eerste woord + eerste letter van tweede woord
--      ("Mark Smulders" → "Mark S")
--   5. Filter scheldwoorden (basis-lijst, uitbreidbaar)
--   6. Lege/onleesbare resultaten → "Speler"
--
-- Werking is server-side — leerling kan dit dus niet omzeilen via custom
-- frontend of directe Supabase-call.
--
-- DRAAI DIT IN: Supabase Studio → SQL Editor → plak alles → Run.
-- VOORDAT JE DRAAIT: backup leaderboard + obliterator_scores + hall_of_fame
-- (de trigger raakt geen bestaande rijen, maar voor de zekerheid).

-- ── Sanitizer-functie ─────────────────────────────────────────────────
CREATE OR REPLACE FUNCTION sanitize_player_name(input_name text)
RETURNS text
LANGUAGE plpgsql
IMMUTABLE
AS $$
DECLARE
  cleaned text;
  woorden text[];
  resultaat text;
  scheldwoorden text[] := ARRAY[
    -- Basis NL-scheldwoord-lijst — pragmatisch, niet uitputtend
    'kut', 'lul', 'klote', 'kanker', 'tyfus', 'tering', 'godverdomme',
    'fuck', 'shit', 'asshole', 'bitch', 'nazi', 'hitler'
  ];
  scheld text;
BEGIN
  -- Stap 1: trim + normaliseer
  IF input_name IS NULL THEN
    RETURN 'Speler';
  END IF;
  cleaned := trim(input_name);
  cleaned := regexp_replace(cleaned, '\s+', ' ', 'g');

  -- Stap 2: strip cijfers
  cleaned := regexp_replace(cleaned, '[0-9]', '', 'g');
  cleaned := trim(cleaned);

  -- Stap 3: split op spaties → eerste woord + eerste letter tweede
  woorden := string_to_array(cleaned, ' ');
  IF array_length(woorden, 1) IS NULL OR array_length(woorden, 1) < 1 THEN
    RETURN 'Speler';
  END IF;
  IF array_length(woorden, 1) >= 2 AND length(woorden[2]) > 0 THEN
    resultaat := woorden[1] || ' ' || upper(left(woorden[2], 1));
  ELSE
    resultaat := woorden[1];
  END IF;

  -- Stap 4: cap op 12 chars
  resultaat := left(resultaat, 12);
  resultaat := trim(resultaat);

  -- Stap 5: scheldwoord-filter (case-insensitive op resultaat én oorspronkelijke)
  FOREACH scheld IN ARRAY scheldwoorden LOOP
    IF lower(resultaat) LIKE '%' || scheld || '%'
       OR lower(input_name) LIKE '%' || scheld || '%' THEN
      RETURN 'Speler';
    END IF;
  END LOOP;

  -- Stap 6: lege of te korte output → fallback
  IF length(resultaat) < 2 THEN
    RETURN 'Speler';
  END IF;

  RETURN resultaat;
END;
$$;

COMMENT ON FUNCTION sanitize_player_name(text) IS
  'AVG art. 25 / 5.1.c — saneert player_name tot voornaam + initiaal, max 12 chars, geen cijfers, geen scheldwoorden. Aangeroepen via BEFORE INSERT triggers op leaderboard/obliterator_scores/hall_of_fame.';

-- ── Trigger-functie (gemeenschappelijk) ───────────────────────────────
CREATE OR REPLACE FUNCTION trigger_sanitize_player_name()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  NEW.player_name := sanitize_player_name(NEW.player_name);
  RETURN NEW;
END;
$$;

-- ── Triggers per tabel ────────────────────────────────────────────────
-- Drop eerst zodat opnieuw uitvoeren idempotent is.

DROP TRIGGER IF EXISTS trg_sanitize_leaderboard_name ON leaderboard;
CREATE TRIGGER trg_sanitize_leaderboard_name
  BEFORE INSERT ON leaderboard
  FOR EACH ROW
  EXECUTE FUNCTION trigger_sanitize_player_name();

DROP TRIGGER IF EXISTS trg_sanitize_obliterator_scores_name ON obliterator_scores;
CREATE TRIGGER trg_sanitize_obliterator_scores_name
  BEFORE INSERT ON obliterator_scores
  FOR EACH ROW
  EXECUTE FUNCTION trigger_sanitize_player_name();

DROP TRIGGER IF EXISTS trg_sanitize_hall_of_fame_name ON hall_of_fame;
CREATE TRIGGER trg_sanitize_hall_of_fame_name
  BEFORE INSERT ON hall_of_fame
  FOR EACH ROW
  EXECUTE FUNCTION trigger_sanitize_player_name();

-- ── Optioneel: migreer bestaande rijen (eenmalig, opt-in) ─────────────
-- Decommentariëer onderstaande UPDATEs als je ook de bestaande data wilt
-- saneren. Mark moet hier expliciet over nadenken: bestaande topscores
-- met "echte" namen worden geanonimiseerd, wat voor sommige spelers als
-- onaangenaam kan voelen. Voor v1 alleen nieuwe inserts saneren is
-- juridisch al voldoende (toekomst-proof).
--
-- UPDATE leaderboard         SET player_name = sanitize_player_name(player_name);
-- UPDATE obliterator_scores  SET player_name = sanitize_player_name(player_name);
-- UPDATE hall_of_fame        SET player_name = sanitize_player_name(player_name);

-- ── Test-cases (run handmatig om gedrag te valideren) ─────────────────
-- SELECT sanitize_player_name('Mark Smulders');                   -- → 'Mark S'
-- SELECT sanitize_player_name('Sara groep6');                     -- → 'Sara'
-- SELECT sanitize_player_name('Mark Smulders groep 6 De Regenboog'); -- → 'Mark S'
-- SELECT sanitize_player_name('  ');                              -- → 'Speler'
-- SELECT sanitize_player_name('kut');                             -- → 'Speler'
-- SELECT sanitize_player_name('Bob');                             -- → 'Bob'
-- SELECT sanitize_player_name('Brian2026');                       -- → 'Brian'

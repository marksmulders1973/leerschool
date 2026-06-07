-- 20260607_obliterator_hardening.sql
-- 15-agent-analyse + kritische review (2026-06-07) — 3 must-fixes vóór de
-- score-afgeleide rang/skins écht "eerlijk" zijn. Bouwt VOORT op
-- 20260506_sanitize_player_names.sql (die trimt al, stript cijfers, capt 12
-- tekens en filtert scheldwoorden via trigger trg_sanitize_obliterator_scores_name).
--
-- Wat dit toevoegt:
--   FIX 1 — plausibiliteits-CHECKs (score-cap ophogen voor +10%, level-grens)
--   FIX 2 — identiteit harden (ingelogde naam forceren + anti-impersonatie gast)
--   FIX 3 — dedup-sleutel tegen dubbele offline-flush (optioneel, fase 2)
--
-- DRAAI IN: Supabase Studio -> SQL Editor -> plak alles -> Run.
-- Idempotent (opnieuw draaien is veilig). Raakt GEEN bestaande rijen.
-- Backup van obliterator_scores vooraf is netjes maar niet strikt nodig.

-- ════════════════════════════════════════════════════════════════════════
-- FIX 1 — Plausibiliteits-CHECKs (anti-injectie binnen redelijke grenzen)
-- ════════════════════════════════════════════════════════════════════════
-- De HUIDIGE CHECK is `score <= 100000`. Dat botst met de nieuwe SCORE_MUL
-- 10->11 (+10%): een eerlijke level-100-run levert nu ~110.000 op en zou
-- GEWEIGERD worden -> score verdwijnt. Daarom de cap ophogen.
-- 500.000 = ruim boven elke eerlijke run (ook met dubbelpunt/rainbow-mutators)
-- maar blokkeert nog steeds absurde injecties (bv. 999999999).
-- ⚙️ Tunebaar: weet je de echte max-haalbare score, zet 'm gerust lager
--    (bv. 200000) voor strakkere anti-cheat — maar nooit ónder een eerlijke run.
ALTER TABLE public.obliterator_scores DROP CONSTRAINT IF EXISTS obliterator_scores_score_check;
ALTER TABLE public.obliterator_scores
  ADD CONSTRAINT obliterator_scores_score_check CHECK (score >= 0 AND score <= 500000);

-- Level mag alleen 0..100 zijn (er zijn 100 levels). Blokkeert level-spoof
-- (bv. level 9999 om een nep-Legendary-rang te forceren). NULL blijft toegestaan.
ALTER TABLE public.obliterator_scores DROP CONSTRAINT IF EXISTS obliterator_scores_level_check;
ALTER TABLE public.obliterator_scores
  ADD CONSTRAINT obliterator_scores_level_check CHECK (level IS NULL OR (level >= 0 AND level <= 100));

-- ════════════════════════════════════════════════════════════════════════
-- FIX 2 — Identiteit harden (anti-spoofing / anti-impersonatie)
-- ════════════════════════════════════════════════════════════════════════
-- De sanitize-trigger normaliseert de naam al, maar dwingt NIET af dat:
--   (a) een INGELOGDE speler zijn eigen geregistreerde naam gebruikt, en
--   (b) een GAST zich niet "Brian" noemt om diens rij/rang te kapen.
-- Deze trigger draait NÁ de sanitize (triggers vuren op naam-alfabet: de
-- bestaande heet trg_sanitize_..., deze trg_zidentity_... -> 's' < 'z').
-- SECURITY DEFINER zodat hij profiles mag lezen ongeacht RLS.
CREATE OR REPLACE FUNCTION public.obliterator_enforce_identity()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  dn text;
BEGIN
  IF NEW.user_id IS NOT NULL THEN
    -- Ingelogd: overschrijf met de echte display_name (client-naam wordt genegeerd).
    SELECT display_name INTO dn FROM public.profiles WHERE id = NEW.user_id;
    IF dn IS NOT NULL AND length(trim(dn)) > 0 THEN
      NEW.player_name := left(trim(dn), 12);
    END IF;
  ELSE
    -- Gast: mag geen naam claimen die bij een geregistreerd account hoort.
    IF EXISTS (SELECT 1 FROM public.profiles WHERE lower(display_name) = lower(NEW.player_name)) THEN
      NEW.player_name := left(NEW.player_name, 6) || ' (gast)';
    END IF;
  END IF;
  RETURN NEW;
END;
$$;

COMMENT ON FUNCTION public.obliterator_enforce_identity() IS
  '15-agent-review 2026-06-07 — forceert ingelogde player_name = profiles.display_name (anti-spoof) en markeert gast-impersonatie van geregistreerde namen als "(gast)". Draait na sanitize_player_name.';

DROP TRIGGER IF EXISTS trg_zidentity_obliterator_scores ON public.obliterator_scores;
CREATE TRIGGER trg_zidentity_obliterator_scores
  BEFORE INSERT ON public.obliterator_scores
  FOR EACH ROW
  EXECUTE FUNCTION public.obliterator_enforce_identity();

-- ════════════════════════════════════════════════════════════════════════
-- FIX 3 — Dedup tegen dubbele offline-flush (OPTIONEEL — fase 2)
-- ════════════════════════════════════════════════════════════════════════
-- flushPendingScores kan een score dubbel insturen (insert slaagde, response
-- ging verloren) -> dubbele topscore die rang/PR onterecht ophoogt. Een
-- client-gegenereerde run-sleutel + partiële unique-index voorkomt dat.
-- Harmloos tot de app een client_key meestuurt (tot dan alle NULL).
-- ⚙️ Na het draaien: laat scores.js bij elke run een unieke client_key
--    (bv. crypto.randomUUID()) meesturen; dan wordt de dedup actief.
ALTER TABLE public.obliterator_scores ADD COLUMN IF NOT EXISTS client_key text;
CREATE UNIQUE INDEX IF NOT EXISTS uniq_obliterator_client_key
  ON public.obliterator_scores (client_key) WHERE client_key IS NOT NULL;

-- ════════════════════════════════════════════════════════════════════════
-- OPTIONEEL (product-keuze, NIET standaard aan) — anon van publiek bord weren
-- ════════════════════════════════════════════════════════════════════════
-- De sterkste anti-injectie is: alleen INGELOGDE scores op het publieke bord.
-- NADEEL: gast-kinderen (zonder login) verdwijnen dan van het scorebord. Bij
-- de huidige doelgroep spelen veel kinderen anoniem -> dit kan demotiveren.
-- Zet dit alleen aan als je login (zacht) wilt aanmoedigen. Decommentarieer:
--
-- DROP POLICY IF EXISTS "Iedereen kan obliterator scorebord zien" ON public.obliterator_scores;
-- CREATE POLICY "Alleen geverifieerde scores op het bord" ON public.obliterator_scores
--   FOR SELECT USING (user_id IS NOT NULL);

-- ════════════════════════════════════════════════════════════════════════
-- VERIFICATIE (handmatig runnen na toepassen)
-- ════════════════════════════════════════════════════════════════════════
-- SELECT conname, pg_get_constraintdef(oid) FROM pg_constraint
--   WHERE conrelid='public.obliterator_scores'::regclass;
-- SELECT tgname FROM pg_trigger
--   WHERE tgrelid='public.obliterator_scores'::regclass AND NOT tgisinternal ORDER BY tgname;
-- -- Test anti-spoof (gast die zich Brian noemt):
-- INSERT INTO public.obliterator_scores (player_name, score, level) VALUES ('Brian', 10, 5)
--   RETURNING player_name;   -- verwacht: 'Brian (gast)'  (mits 'Brian' een display_name is)
-- -- Test level-grens (moet falen):
-- INSERT INTO public.obliterator_scores (player_name, score, level) VALUES ('Test', 10, 9999); -- ERROR

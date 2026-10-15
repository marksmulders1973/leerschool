-- ============================================================
--  PAD-FEEDBACK — wat kinderen van een deel of leerpad vonden
--  Sinds 14 okt 2026 (v944). Event `pad_feedback` met props:
--    pad    = leerpad-id            stap = deel-index (0-based) of null bij heel pad
--    plek   = 'deel' | 'pad' | 'stop' niveau = te-makkelijk | goed | te-moeilijk (sinds v957; t/m v956: makkelijk | goed | moeilijk)
--    beantwoord = (alleen bij plek 'stop', sinds 15 okt) vragen die het kind in dat deel deed
--    wens   = 2e tik, hangt af van niveau (sinds v957):
--             te-makkelijk → moeilijker | minder-uitleg | leukere-vragen | niets
--             goed         → meer-sommen | leukere-vragen | niets
--             te-moeilijk  → meer-uitleg | voorbeeld | minder-tekst | makkelijker-beginnen
--  Elke tik is een eigen event; de rij MET wens is de volledige mening.
--  Altijd events_mens. Vast blokje in het dagrapport (cockpit), 7 dagen.
-- ============================================================

-- 1) Per leerpad: hoe voelde het? (7 dagen, alleen volledige meningen)
select props->>'pad' pad, props->>'plek' plek,
  count(*) meningen,
  count(*) filter (where props->>'niveau'='te-makkelijk') te_makkelijk,
  count(*) filter (where props->>'niveau'='goed') goed,
  count(*) filter (where props->>'niveau'='te-moeilijk') te_moeilijk
from events_mens
where name='pad_feedback' and props ? 'wens' and created_at > now()-interval '7 days'
group by 1,2 order by meningen desc limit 20;

-- 2) Wat willen ze anders? (7 dagen)
select props->>'niveau' niveau, props->>'wens' wens, count(*) n, count(distinct props->>'uid') kinderen
from events_mens where name='pad_feedback' and props ? 'wens' and created_at > now()-interval '7 days'
group by 1,2 order by 3 desc;

-- 3) Moeilijkste én te makkelijke delen (≥3 meningen, 28 dagen) — kandidaten om uitleg
--    bij te werken (te moeilijk) of vragen pittiger te maken (te makkelijk)
select props->>'pad' pad, (props->>'stap')::int + 1 deel, count(*) n,
  round(100.0 * count(*) filter (where props->>'niveau'='te-moeilijk') / count(*)) pct_te_moeilijk,
  round(100.0 * count(*) filter (where props->>'niveau'='te-makkelijk') / count(*)) pct_te_makkelijk
from events_mens where name='pad_feedback' and props->>'plek' in ('deel','stop') and props ? 'wens' and created_at > now()-interval '28 days'
group by 1,2 having count(*) >= 3 order by pct_te_moeilijk desc, n desc limit 15;

-- 4) Antwoordpercentage: hoeveel kinderen die een deel afrondden of stopten gaven een mening?
--    leerpad_deel_af bestaat pas sinds 15 okt 2026 (daarvoor was er geen event voor "deel af";
--    de oude versie van deze query telde learn_step_done, dat nooit bestond → altijd 0).
--    Stop-vraag verschijnt alleen bij stop na ≥2 vragen in het deel.
select count(distinct props->>'uid') filter (where name='leerpad_deel_af') kinderen_deel_af,
       count(distinct props->>'uid') filter (where name='pad_feedback' and props->>'plek' in ('deel','pad') and props ? 'wens') mening_na_deel,
       count(distinct props->>'uid') filter (where name='leerpad_stop_bewaard' and (props->>'beantwoord')::int >= 2) kinderen_stop_na_2,
       count(distinct props->>'uid') filter (where name='pad_feedback' and props->>'plek'='stop' and props ? 'wens') mening_bij_stop,
       count(distinct props->>'uid') filter (where name='pad_feedback_overgeslagen') overgeslagen
from events_mens where created_at > now()-interval '7 days';

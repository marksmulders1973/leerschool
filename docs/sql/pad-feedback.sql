-- ============================================================
--  PAD-FEEDBACK — wat kinderen van een deel of leerpad vonden
--  Sinds 14 okt 2026 (v944). Event `pad_feedback` met props:
--    pad    = leerpad-id            stap = deel-index (0-based) of null bij heel pad
--    plek   = 'deel' | 'pad'        niveau = makkelijk | goed | moeilijk
--    wens   = meer-uitleg | minder-tekst | meer-sommen | leukere-vragen | niets (alleen op de 2e tik)
--  Elke tik is een eigen event; de rij MET wens is de volledige mening.
--  Altijd events_mens. Vast blokje in het dagrapport (cockpit), 7 dagen.
-- ============================================================

-- 1) Per leerpad: hoe voelde het? (7 dagen, alleen volledige meningen)
select props->>'pad' pad, props->>'plek' plek,
  count(*) meningen,
  count(*) filter (where props->>'niveau'='makkelijk') makkelijk,
  count(*) filter (where props->>'niveau'='goed') goed,
  count(*) filter (where props->>'niveau'='moeilijk') moeilijk
from events_mens
where name='pad_feedback' and props ? 'wens' and created_at > now()-interval '7 days'
group by 1,2 order by meningen desc limit 20;

-- 2) Wat willen ze anders? (7 dagen)
select props->>'wens' wens, count(*) n, count(distinct props->>'uid') kinderen
from events_mens where name='pad_feedback' and props ? 'wens' and created_at > now()-interval '7 days'
group by 1 order by 2 desc;

-- 3) Moeilijkste delen (≥3 meningen, 28 dagen) — kandidaten om uitleg bij te werken
select props->>'pad' pad, (props->>'stap')::int + 1 deel, count(*) n,
  round(100.0 * count(*) filter (where props->>'niveau'='moeilijk') / count(*)) pct_moeilijk
from events_mens where name='pad_feedback' and props->>'plek'='deel' and props ? 'wens' and created_at > now()-interval '28 days'
group by 1,2 having count(*) >= 3 order by pct_moeilijk desc, n desc limit 15;

-- 4) Antwoordpercentage: hoeveel kinderen die een deel afrondden gaven een mening?
select count(distinct props->>'uid') filter (where name='pad_feedback') kinderen_met_mening,
       count(distinct props->>'uid') filter (where name='learn_step_done' or name='leerpad_markeer_voltooid') kinderen_deel_af
from events_mens where created_at > now()-interval '7 days';

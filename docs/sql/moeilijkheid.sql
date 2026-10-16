-- ============================================================
--  📏 MOEILIJKHEIDSGETAL PER VRAAG (16 okt 2026, v963)
--  question_answered (eerste poging) heeft sinds v963: pad, stap (0-based, alleen
--  leerpad), vraag (hash van de vraagtekst = geziendeVragen.vraagSleutel) en
--  kind_groep (v962). Moeilijkheid = % fout bij de eerste poging.
--  Pas betekenisvol vanaf ~10 antwoorden per vraag; per groep ~30.
--  Vraagtekst bij een hash: zoek de vraag in het leerpad en reken vraagSleutel(pad, q).
-- ============================================================

-- 1) Per vraag (alle groepen samen)
select props->>'pad' as pad, (props->>'stap')::int + 1 as deel, props->>'vraag' as vraag,
  count(*) as antwoorden,
  round(100.0 * count(*) filter (where (props->>'is_correct')::boolean is false) / count(*)) as pct_fout
from events_mens
where name = 'question_answered' and props ? 'vraag' and created_at >= '2026-10-16'
group by 1, 2, 3 having count(*) >= 10
order by pad, deel, pct_fout;

-- 2) Per deel per groep — loopt een leerpad echt op in moeilijkheid?
select props->>'pad' as pad, (props->>'stap')::int + 1 as deel, coalesce(props->>'kind_groep', '?') as groep,
  count(*) as antwoorden,
  round(100.0 * count(*) filter (where (props->>'is_correct')::boolean is false) / count(*)) as pct_fout
from events_mens
where name = 'question_answered' and props ? 'vraag' and props ? 'stap' and created_at >= '2026-10-16'
group by 1, 2, 3 order by 1, 2, 3;

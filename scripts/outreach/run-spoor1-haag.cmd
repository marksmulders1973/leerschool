@echo off
rem Spoor 1 Haaglanden (3 nov 2026, Mark "stuur maar") · 62 adressen, max 60 bulkmails per dag.
rem Taak "Leerkwartier spoor 1 Haaglanden": werkdagen 08:15 vanaf do 5 nov 2026; verwijderen als het doc leeg is.
rem Log: docs\outreach\spoor1-haag-run.log · verzendlog per mail onderaan het doc zelf (dedupe op OK-regels).
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
set BULK_DAGMAX=60
echo === start %date% %time% >> docs\outreach\spoor1-haag-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 60 docs\outreach\denhaag\SPOOR1-HAAG-ZEND.md >> docs\outreach\spoor1-haag-run.log 2>&1
echo === einde %date% %time% >> docs\outreach\spoor1-haag-run.log

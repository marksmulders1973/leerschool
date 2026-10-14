@echo off
rem Spoor 1 — dagelijkse batch (werkdagen 08:00) · max 60 bulkmails per dag over de drie docs samen.
rem Pas inplannen na Marks tekst-akkoord. Log: docs\outreach\spoor1-run.log · verzendlog per doc onderaan het doc zelf.
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
set BULK_DAGMAX=60
echo === start %date% %time% >> docs\outreach\spoor1-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 60 docs\outreach\SPOOR1-ZEND-BIBLIOTHEKEN.md >> docs\outreach\spoor1-run.log 2>&1
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 60 docs\outreach\SPOOR1-ZEND-GEZINSORGANISATIES.md >> docs\outreach\spoor1-run.log 2>&1
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 60 docs\outreach\SPOOR1-ZEND-KINDEROPVANG.md >> docs\outreach\spoor1-run.log 2>&1
echo === einde %date% %time% >> docs\outreach\spoor1-run.log

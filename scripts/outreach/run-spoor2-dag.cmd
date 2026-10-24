@echo off
rem Spoor 2 (24 okt 2026) ? dagelijkse batch (werkdagen 08:00) ? max 85 bulkmails per dag (Mark 24 okt: "ik wil maximaal mailen"; gratis Resend = 100/dag incl. crons) over de drie docs samen.
rem Pas inplannen na Marks tekst-akkoord. Log: docs\outreach\spoor2-run.log ? verzendlog per doc onderaan het doc zelf.
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
set BULK_DAGMAX=85
echo === start %date% %time% >> docs\outreach\spoor2-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 85 docs\outreach\SPOOR2-ZEND-SINT-KERST.md >> docs\outreach\spoor2-run.log 2>&1
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 85 docs\outreach\SPOOR2-ZEND-SPEELGOED-KLEDING.md >> docs\outreach\spoor2-run.log 2>&1
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 85 docs\outreach\SPOOR2-ZEND-WELZIJN.md >> docs\outreach\spoor2-run.log 2>&1
echo === einde %date% %time% >> docs\outreach\spoor2-run.log

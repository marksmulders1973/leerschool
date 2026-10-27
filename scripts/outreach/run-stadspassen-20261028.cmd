@echo off
rem Stadspassen + koepels (Mark "stuur maar" 27 okt 2026 23:55) - eenmalig wo 28 okt 07:55, voor de spoor-2-batch van 08:00.
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
echo === start stadspassen %date% %time% >> docs\outreach\spoor2-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 10 docs\outreach\STADSPASSEN-ZEND-PASSEN-20261028.md >> docs\outreach\spoor2-run.log 2>&1
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 10 docs\outreach\STADSPASSEN-ZEND-KOEPELS-20261028.md >> docs\outreach\spoor2-run.log 2>&1
echo === einde stadspassen %date% %time% >> docs\outreach\spoor2-run.log

@echo off
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
echo === start %date% %time% >> docs\outreach\bonaire-ronde2-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 9 docs\outreach\BONAIRE-S.md >> docs\outreach\bonaire-ronde2-run.log 2>&1
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 4 docs\outreach\BONAIRE-O.md >> docs\outreach\bonaire-ronde2-run.log 2>&1
echo === einde %date% %time% >> docs\outreach\bonaire-ronde2-run.log

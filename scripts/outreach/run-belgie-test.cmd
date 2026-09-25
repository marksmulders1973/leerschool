@echo off
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
echo === start %date% %time% >> docs\outreach\belgie-test-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 7 docs\outreach\BELGIE-VOEDSELBANKEN.md >> docs\outreach\belgie-test-run.log 2>&1
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 20 docs\outreach\BELGIE-SCHOLEN-TAALHELDKLAS.md >> docs\outreach\belgie-test-run.log 2>&1
echo === einde %date% %time% >> docs\outreach\belgie-test-run.log

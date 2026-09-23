@echo off
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
echo === start %date% %time% >> docs\outreach\lowan-batch-7b-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-lowan.mjs 29 docs\outreach\LOWAN-BATCH-7B.md >> docs\outreach\lowan-batch-7b-run.log 2>&1
echo === einde %date% %time% >> docs\outreach\lowan-batch-7b-run.log

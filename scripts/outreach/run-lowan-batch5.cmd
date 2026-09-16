@echo off
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
echo === start %date% %time% >> docs\outreach\lowan-batch-5-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-lowan.mjs 45 docs\outreach\LOWAN-BATCH-5.md >> docs\outreach\lowan-batch-5-run.log 2>&1
echo === einde %date% %time% >> docs\outreach\lowan-batch-5-run.log

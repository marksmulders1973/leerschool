@echo off
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
echo === start %date% %time% >> docs\outreach\lowan-nk2-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach-send-doc.mjs 45 docs\outreach\LOWAN-NIEUWKOMERPAKKET-RONDE-2.md >> docs\outreach\lowan-nk2-run.log 2>&1
echo === einde %date% %time% >> docs\outreach\lowan-nk2-run.log

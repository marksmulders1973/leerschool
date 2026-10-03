@echo off
cd /d "C:\Users\mark-\Desktop\Studiebol\leerschool"
echo === start %date% %time% >> docs\gemeenten\ronde2-run.log
"C:\Program Files\nodejs\node.exe" scripts\outreach\stuur-gemeenten-ronde2-20261005.mjs >> docs\gemeenten\ronde2-run.log 2>&1
echo === einde %date% %time% >> docs\gemeenten\ronde2-run.log

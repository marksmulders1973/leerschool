---
name: Playwright-demo's — auto split-screen browser + terminal
description: Bij elke Playwright/browser-sessie de browser links + Claude Code-terminal rechts snappen via PowerShell, zodat Mark vloeiend kan meekijken zonder handmatig snappen.
type: feedback
originSessionId: 37638b7e-fef5-47c3-ba00-7ae3f9b856bb
---
Bij **elke** sessie waarin ik de Playwright MCP browser open (navigate / screenshot / snapshot), direct daarna dit PowerShell-script draaien om beide vensters naast elkaar te zetten.

**Why:** Mark wil meekijken — code-loop in Claude Code-venster + live browser-resultaat ernaast. Handmatig snappen met `Win+←` / `Win+→` elke sessie is irritant; hij heeft expliciet gevraagd dit voortaan automatisch te doen (2026-05-18).

**How to apply:**
- Run het script direct ná de eerste `browser_navigate`-call (browser is dan zichtbaar).
- Werkt adaptief op elke schermresolutie via `Screen.PrimaryScreen.WorkingArea`.
- Matcht browser op titel `Leerkwartier|Studiebol|leerkwartier\.app`. Als hij later een ander domein test, voeg toe aan de regex.
- Matcht terminal op proces `WindowsTerminal`. Als Mark wisselt naar een andere terminal (bv. Wezterm, Alacritty), proces-naam aanpassen.

**Script (één PowerShell-call):**
```powershell
Add-Type -AssemblyName System.Windows.Forms
$b = [System.Windows.Forms.Screen]::PrimaryScreen.WorkingArea
$W = $b.Width; $H = $b.Height; $X = $b.X; $Y = $b.Y
$half = [int]($W / 2)
Add-Type @"
using System;
using System.Runtime.InteropServices;
public class Win {
  [DllImport("user32.dll")] public static extern bool SetWindowPos(IntPtr hWnd, IntPtr hAfter, int x, int y, int w, int h, uint flags);
  [DllImport("user32.dll")] public static extern bool ShowWindow(IntPtr hWnd, int nCmdShow);
}
"@
$browser  = Get-Process | Where-Object { $_.MainWindowTitle -match 'Leerkwartier|Studiebol|leerkwartier\.app' } | Select-Object -First 1
$terminal = Get-Process WindowsTerminal -ErrorAction SilentlyContinue | Select-Object -First 1
if ($browser)  { [Win]::ShowWindow($browser.MainWindowHandle, 9)  | Out-Null; [Win]::SetWindowPos($browser.MainWindowHandle,  [IntPtr]::Zero, $X,       $Y, $half,    $H, 0x0040) | Out-Null }
if ($terminal) { [Win]::ShowWindow($terminal.MainWindowHandle, 9) | Out-Null; [Win]::SetWindowPos($terminal.MainWindowHandle, [IntPtr]::Zero, $X+$half, $Y, $W-$half, $H, 0x0040) | Out-Null }
```

`ShowWindow(hWnd, 9)` = restore (un-minimize) zodat een gemaximaliseerd venster ook correct ingedeeld wordt. `SetWindowPos` flag `0x0040` = SWP_SHOWWINDOW.

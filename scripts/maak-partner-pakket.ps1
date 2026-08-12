# Partner-pakket 2.0 — stap 2: Word-HTML's (uit maak-partner-pakket.mjs)
# omzetten naar echte .docx-bestanden via Word zelf (plaatjes ingesloten).
# Resultaat: public/drukwerk/flyer-<CODE>-bewerkbaar.docx
$ErrorActionPreference = "Stop"
$temp = Join-Path $env:TEMP "partner-pakket"
$drukwerk = Join-Path $PSScriptRoot "..\public\drukwerk"
$mapjes = Get-ChildItem $temp -Directory -ErrorAction SilentlyContinue | Where-Object { Test-Path (Join-Path $_.FullName "word.html") }
if (-not $mapjes) { Write-Host "Niets te doen — draai eerst: node scripts/maak-partner-pakket.mjs CODE|--alle"; exit 0 }

$w = New-Object -ComObject Word.Application
$w.Visible = $false
try {
  foreach ($m in $mapjes) {
    $code = $m.Name
    $doel = Join-Path (Resolve-Path $drukwerk) "flyer-$code-bewerkbaar.docx"
    $doc = $w.Documents.Open((Join-Path $m.FullName "word.html"))
    foreach ($s in @($doc.InlineShapes)) {
      if ($s.LinkFormat) { $s.LinkFormat.SavePictureWithDocument = $true; $s.LinkFormat.BreakLink() }
    }
    $doc.SaveAs2($doel, 16)  # 16 = wdFormatXMLDocument (.docx)
    $doc.Close($false)
    Write-Host "✅ $code → flyer-$code-bewerkbaar.docx"
    Remove-Item (Join-Path $m.FullName "word.html") -Force
  }
} finally { $w.Quit() }
Write-Host "`nKlaar. Vergeet niet: git add public/drukwerk/*-bewerkbaar.docx + commit/push."

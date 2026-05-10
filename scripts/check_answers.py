#!/usr/bin/env python3
"""Vergelijk pad's `answer: N` met JSON's correcte answer-index, voor elke vraag.
Detecteert gevallen waar fix-script opties heeft geherordend en answer fout is."""
from __future__ import annotations
import json, re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")
from pathlib import Path

PADEN = {
    "examenEconomie2025T1.js": "economie-vmbo-gltl-2025-tijdvak1.json",
    "examenEconomie2025T2.js": "economie-vmbo-gltl-2025-tijdvak2.json",
    "examenEconomie2024T1.js": "economie-vmbo-gltl-2024-tijdvak1.json",
    "examenEconomie2024T2.js": "economie-vmbo-gltl-2024-tijdvak2.json",
    "examenEconomie2023T1.js": "economie-vmbo-gltl-2023-tijdvak1.json",
    "examenEconomie2023T2.js": "economie-vmbo-gltl-2023-tijdvak2.json",
    "examenEngels2025T1.js":   "engels-vmbo-gltl-2025-tijdvak1.json",
    "examenEngels2024T1.js":   "engels-vmbo-gltl-2024-tijdvak1.json",
    "examenGeschiedenis2025T1.js": "geschiedenis-vmbo-gltl-2025-tijdvak1.json",
}

# matches: q: "..." options: [...] answer: N ... examenBron: "...vraag N..."
PAT = re.compile(
    r'q:\s*"([^"\\]*(?:\\.[^"\\]*)*)"'
    r'[\s\S]*?options:\s*\[([\s\S]*?)\]'
    r'[\s\S]*?answer:\s*(\d+)'
    r'[\s\S]*?examenBron:\s*"([^"]*?vraag\s*\d+[^"]*?)"',
    re.MULTILINE,
)
OPT_RE = re.compile(r'"((?:[^"\\]|\\.)*)"')
NR_RE = re.compile(r"vraag\s*(\d+)")

def main():
    total = 0
    ans_mismatch = 0
    for js_name, json_name in PADEN.items():
        text = Path(f"src/learnPaths/{js_name}").read_text(encoding="utf-8")
        data = json.loads(Path(f"src/data/examenQuizzes/{json_name}").read_text(encoding="utf-8"))
        json_qs = {q["vraagNr"]: q for q in data["questions"]}
        print(f"\n=== {js_name} ===")
        for m in PAT.finditer(text):
            opts_raw = m.group(2)
            pad_opts = OPT_RE.findall(opts_raw)
            pad_ans = int(m.group(3))
            bron = m.group(4)
            nr_m = NR_RE.search(bron)
            if not nr_m:
                continue
            nr = int(nr_m.group(1))
            total += 1
            if nr not in json_qs:
                print(f"  V{nr}: ⚠ niet in JSON")
                continue
            jq = json_qs[nr]
            json_ans = jq["answer"]
            if pad_ans != json_ans:
                ans_mismatch += 1
                pa = pad_opts[pad_ans] if pad_ans < len(pad_opts) else "?"
                ja = pad_opts[json_ans] if json_ans < len(pad_opts) else "?"
                print(f"  V{nr}: ✗ pad={chr(65+pad_ans)} ({pa[:60]})")
                print(f"      json={chr(65+json_ans)} ({ja[:60]})")
            else:
                print(f"  V{nr}: ✓ {chr(65+json_ans)}")
    print(f"\n=== TOTAAL: {total} vragen, {ans_mismatch} answer-mismatch(es) ===")

if __name__ == "__main__":
    main()

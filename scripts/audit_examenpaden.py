#!/usr/bin/env python3
"""
Audit alle examen-paden: vergelijk vraag-tekst + opties in .js met de
echte PDF-geparseerde JSON in src/data/examenQuizzes/. Print mismatches.

Doel: nooit meer geparafraseerde of verzonnen vragen in productie.
"""
from __future__ import annotations
import json
import re
import sys
import io
from pathlib import Path
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8")

ROOT = Path(__file__).resolve().parents[1]
PADEN_DIR = ROOT / "src" / "learnPaths"
JSON_DIR = ROOT / "src" / "data" / "examenQuizzes"

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

CHECK_RE = re.compile(
    r"q:\s*\"((?:[^\"\\]|\\.)*)\""
    r"[\s\S]*?options:\s*\[([\s\S]*?)\]"
    r"[\s\S]*?examenBron:\s*\"((?:[^\"\\]|\\.)*)\"",
    re.MULTILINE,
)
OPT_RE = re.compile(r"\"((?:[^\"\\]|\\.)*)\"")
VRAAG_NR_RE = re.compile(r"vraag\s*(\d+)", re.IGNORECASE)

ACCENT = str.maketrans("éèêëïîáàäâöóôüúûçñ", "eeeeiiaaaaoooüüücn")

def normalize(s: str) -> str:
    """Behoud alleen [a-z0-9 ] na accent-strep. Alle interpunctie + non-ASCII droppen."""
    s = s.lower().translate(ACCENT)
    s = re.sub(r"[^a-z0-9 ]", "", s)
    s = re.sub(r"\s+", " ", s).strip()
    return s

def js_unescape(s: str) -> str:
    return (s.replace('\\"', '"').replace("\\'", "'")
             .replace("\\n", " ").replace("\\\\", "\\"))

def extract_pad(js_path: Path) -> list[dict]:
    text = js_path.read_text(encoding="utf-8")
    out = []
    for m in CHECK_RE.finditer(text):
        q_txt = js_unescape(m.group(1))
        opts = [js_unescape(o) for o in OPT_RE.findall(m.group(2))]
        bron = m.group(3)
        nr_m = VRAAG_NR_RE.search(bron)
        nr = int(nr_m.group(1)) if nr_m else None
        out.append({"vraagNr": nr, "q": q_txt, "options": opts, "bron": bron})
    return out

def find_in_json(questions, nr):
    for q in questions:
        if q.get("vraagNr") == nr:
            return q
    return None

def diff_one(pad_q, json_q):
    """Pad mag KORTER zijn dan JSON (= subset OK). Pad mag NIET woorden hebben die niet in JSON staan."""
    issues = []
    pad_qn = normalize(pad_q["q"])
    json_qn = normalize(json_q["q"])
    if pad_qn and pad_qn not in json_qn:
        pad_words = pad_qn.split()
        bad_chunks = []
        i = 0
        while i < len(pad_words):
            for size in (8, 5, 3):
                if i + size > len(pad_words):
                    continue
                chunk = " ".join(pad_words[i:i+size])
                if chunk not in json_qn:
                    bad_chunks.append(chunk)
                    i += size
                    break
            else:
                i += 1
        if bad_chunks:
            issues.append(("Q-PARAPHRASE", " | ".join(bad_chunks[:3]), pad_q["q"]))
    if len(pad_q["options"]) != len(json_q["options"]):
        issues.append(("OPT-AANTAL", str(len(pad_q["options"])), str(len(json_q["options"]))))
    else:
        for i, (po, jo) in enumerate(zip(pad_q["options"], json_q["options"])):
            pn, jn = normalize(po), normalize(jo)
            if pn and pn not in jn:
                issues.append((f"OPT-{chr(65+i)}-PARA", po, jo))
    return issues

def main():
    total_issues = 0
    for js_name, json_name in PADEN.items():
        js_path = PADEN_DIR / js_name
        json_path = JSON_DIR / json_name
        if not js_path.exists():
            print(f"⚠ MIST  {js_name}")
            continue
        if not json_path.exists():
            print(f"⚠ JSON-MIST  {json_name}")
            continue
        json_data = json.loads(json_path.read_text(encoding="utf-8"))
        json_qs = json_data["questions"]
        pad_qs = extract_pad(js_path)
        print(f"\n=== {js_name}  ({len(pad_qs)} vragen) ===")
        for pq in pad_qs:
            jq = find_in_json(json_qs, pq["vraagNr"])
            if not jq:
                print(f"  V{pq['vraagNr']}: ⚠ niet in JSON gevonden")
                total_issues += 1
                continue
            issues = diff_one(pq, jq)
            if not issues:
                print(f"  V{pq['vraagNr']}: ✓")
            else:
                total_issues += len(issues)
                print(f"  V{pq['vraagNr']}: ✗ {len(issues)} mismatch(es)")
                for kind, pad_v, json_v in issues:
                    print(f"     [{kind}]")
                    print(f"     pad : {pad_v[:140]}")
                    print(f"     json: {json_v[:140]}")
    print(f"\n=== TOTAAL: {total_issues} issue(s) ===")
    return 1 if total_issues else 0

if __name__ == "__main__":
    sys.exit(main())

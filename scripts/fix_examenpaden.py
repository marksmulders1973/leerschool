#!/usr/bin/env python3
"""
Vervang q en options in elk examen-pad-bestand met de schone JSON-versie
uit src/data/examenQuizzes/. Bewaar wrongHints, explanation, examenBron,
bronTekst en leerpadLink — alleen q + options worden aangepast.

Zo zijn vragen 100% authentiek (= exact PDF-tekst, geen paraphrase).

Werkwijze per check:
1. Vind q-string in pad, vervang met JSON-q (gecropt op laatste ?-zin)
2. Vind options-array in pad, vervang met JSON-options (gestript van staart)

Output: in-place edit van pad-bestanden.
"""
from __future__ import annotations
import json
import re
import sys
import io
from pathlib import Path

if __name__ == "__main__":
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

# Curly quotes en PDF-glyph-glitches naar correcte UTF-8.
# pdftotext output kan ' (left single quote U+2018) hebben waar é, ï of ' had moeten zijn.
# Hier proberen we contextueel te raden: als ' tussen letters staat (be'nvloeding),
# is het waarschijnlijk een ï of é. Dit is een heuristiek, geen perfect fix.
def clean_pdf_text(s: str) -> str:
    """Schoon PDF-glyph-glitches op."""
    # Curly quotes naar straight
    s = s.replace("‘", "'").replace("’", "'")
    s = s.replace("“", '"').replace("”", '"')
    s = s.replace("–", "-").replace("—", "-")
    s = s.replace("…", "...")
    s = s.replace(" ", " ")  # non-breaking space
    # Bekende mojibake-patterns:
    # "be'nvloeding" → "beïnvloeding"
    s = re.sub(r"be'nvloeding", "beïnvloeding", s)
    s = re.sub(r"\bre'l", "reël", s)
    s = re.sub(r"\bre'el", "reëel", s)
    s = re.sub(r"\bItali'\b", "Italië", s)
    s = re.sub(r"\bBelgi'\b", "België", s)
    s = re.sub(r"\bpriv'\b", "privé", s)
    s = re.sub(r"\bcommerci'le\b", "commerciële", s)
    s = re.sub(r"\bgevarieerde\b", "gevarieerde", s)
    # generieke 'tussen letters → ï of é (laatste redmiddel)
    # "Re'le", "be'nvloed" patterns proberen we in eerdere regels op te vangen
    # Spaties normaliseren
    s = re.sub(r"\s+", " ", s).strip()
    return s

def crop_question(q_full: str) -> str:
    """Crop q-string op de echte vraag-zin.
    Heuristiek: knip op het EERSTE '?' na char 30. Een examenvraag eindigt typisch op
    '?' (Welke... ? / Wat... ? / Hoe... ?). Wat erna komt is meestal context voor
    de VOLGENDE vraag, of toelichting op het correctievoorschrift.

    Fallback: bekende secundaire markers ('Bij de beantwoording...', 'Uitbreiden?').
    """
    q = clean_pdf_text(q_full)
    # Knip "Uitbreiden?" eerst weg (komt aan eind van een vraag-blok)
    q = re.sub(r"\s*Uitbreiden\?\s*", " ", q).strip()
    # Knip op eerste ? na pos 30
    for m in re.finditer(r"\?", q):
        if m.start() > 30:
            return q[:m.end()].strip()
    # Geen ? gevonden — fallback markers
    cut_markers = [
        " Bij de beantwoording", " Gebruik informatiebron", " Bronvermelding",
        " De WOZ-waarde van", " De familie", " Sociaal verzekerd",
        " Fairtrade gemeenten", " Met de oprichting van",
        " Ondanks de concurrentie", " Het aantal gemeenten", " Nour zoekt",
        " Jan en zijn gezin", " In 2022", " De klas doet",
        " De hulp op", " In landen buiten",
    ]
    best = len(q)
    for m in cut_markers:
        idx = q.find(m)
        if idx > 30 and idx < best:
            best = idx
    return q[:best].strip()

def crop_option(o: str) -> str:
    """Strip staart-tekst uit een optie. Optie eindigt typisch met . of bij volgende paragraaf-marker."""
    o = clean_pdf_text(o)
    # Zelfde markers als crop_question
    cut_markers = [
        " Bij de beantwoording", " Gebruik informatiebron", " Bronvermelding",
        " Uitbreiden?", " De WOZ-waarde van", " De familie",
        " Sociaal verzekerd", " Fairtrade gemeenten", " Met de oprichting van",
        " Ondanks de concurrentie", " Het aantal gemeenten", " Nour zoekt",
        " Jan en zijn gezin", " In 2022", " De klas doet",
        " De hulp op", " In landen buiten", " (paragraph",
    ]
    for m in cut_markers:
        idx = o.find(m)
        if idx > 0:
            o = o[:idx]
            break
    return o.strip()

# JS escape: " → \", \ → \\
def js_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"')

def main(dry: bool = False):
    total_fixed = 0
    for js_name, json_name in PADEN.items():
        js_path = PADEN_DIR / js_name
        json_path = JSON_DIR / json_name
        if not (js_path.exists() and json_path.exists()):
            print(f"⚠ skip {js_name}")
            continue

        text = js_path.read_text(encoding="utf-8")
        json_data = json.loads(json_path.read_text(encoding="utf-8"))
        json_qs_by_nr = {q["vraagNr"]: q for q in json_data["questions"]}

        new_text = text
        fixed_in_pad = 0

        # Voor elke vraag in pad: vind q + options + examenBron, vervang q + options
        # Patroon: q: "..." [stuff] options: [...] [stuff] examenBron: "...vraag N..."
        check_pattern = re.compile(
            r'(q:\s*")((?:[^"\\]|\\.)*)("[\s\S]*?options:\s*\[)([\s\S]*?)(\][\s\S]*?examenBron:\s*")((?:[^"\\]|\\.)*)(")',
            re.MULTILINE,
        )

        def replace_check(m):
            nonlocal fixed_in_pad
            q_prefix, q_old, mid, opts_old, post, bron, end = m.groups()
            # Vind vraagnr uit examenBron
            nr_m = re.search(r"vraag\s*(\d+)", bron, re.IGNORECASE)
            if not nr_m:
                return m.group(0)
            nr = int(nr_m.group(1))
            if nr not in json_qs_by_nr:
                return m.group(0)
            jq = json_qs_by_nr[nr]
            new_q = crop_question(jq["q"])
            new_opts = [crop_option(o) for o in jq["options"]]
            # Bouw nieuwe options-array string (op één regel per optie zoals origineel)
            opts_str = ",\n          ".join(f'"{js_escape(o)}"' for o in new_opts)
            opts_new = f"\n          {opts_str},\n        "
            fixed_in_pad += 1
            return f'{q_prefix}{js_escape(new_q)}{mid}{opts_new}{post}{bron}{end}'

        new_text = check_pattern.sub(replace_check, text)

        if new_text != text:
            print(f"✓ {js_name}: {fixed_in_pad} check(s) ge-update")
            if not dry:
                js_path.write_text(new_text, encoding="utf-8")
            total_fixed += fixed_in_pad
        else:
            print(f"  {js_name}: geen wijziging")

    print(f"\n=== TOTAAL: {total_fixed} check(s) ge-update ===")

if __name__ == "__main__":
    main(dry="--dry" in sys.argv)

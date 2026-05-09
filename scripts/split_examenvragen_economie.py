#!/usr/bin/env python3
"""
Splitst examenvragen uit de gewone Pincode-leerpaden en genereert een
apart 'examen-oefenpad' voor klas 4.

Mark wens: lagere klassen (1-3) hoeven geen examenvragen te zien — die
zijn voor klas 4 (eindexamenjaar).

Wat dit script doet:
1. Leest alle 8 pincode*.js leerpaden
2. Verwijdert elk check-object met 'examenBron:' uit de checks-array
3. Schrijft de gestripte leerpaden terug
4. Genereert nieuw bestand src/learnPaths/pincodeEconomieExamenOefenen.js
   met 8 stappen (1 per Pincode-hoofdstuk), gevuld met de juiste
   examenvragen. Level: vmbo-gt-4 (eindexamenklas).
5. Toont snippet voor index.js
"""
import json
import re
import glob
from pathlib import Path
from collections import defaultdict

ROOT = Path(__file__).parent.parent
SRC = ROOT / "src" / "learnPaths"
QUIZZES_DIR = ROOT / "src" / "data" / "examenQuizzes"

# Hergebruik MAPPING uit add_examenvragen_economie.py — kopiëren want import is fragile
MAPPING = {
    (2023, 1, 4):  ("h1", "Soorten inkomen — bruto, netto, primair, secundair"),
    (2023, 1, 13): ("h7", "Beschermingsmaatregelen — protectionisme"),
    (2023, 1, 36): ("h3", "Doelgroep en marketing — wie zijn je klanten?"),
    (2023, 1, 38): ("h3", "Macht op de markt — wie bepaalt de prijs?"),
    (2023, 1, 42): ("h3", "Omzet, kosten en winst — kan ik ermee verdienen?"),
    (2023, 2, 12): ("h5", "Overheidslagen — Rijk, provincie, gemeente"),
    (2023, 2, 14): ("h6", "Inkomstenbelasting — schijven en boxen"),
    (2023, 2, 26): ("h1", "Welvaart, inflatie en koopkracht"),
    (2023, 2, 27): ("h7", "ECB en monetair beleid — beheerder van de euro"),
    (2023, 2, 28): ("h7", "Beschermingsmaatregelen — protectionisme"),
    (2023, 2, 30): ("h7", "Wisselkoersen — wat is jouw euro waard?"),
    (2023, 2, 36): ("h6", "Soorten belastingen — direct, indirect, premies"),
    (2024, 1, 2):  ("h7", "De Europese Unie — 27 landen, 1 markt"),
    (2024, 1, 7):  ("h3", "Macht op de markt — wie bepaalt de prijs?"),
    (2024, 1, 27): ("h5", "De Rijksbegroting — het huishoudboekje van NL"),
    (2024, 1, 30): ("h5", "Staatsschuld — wat als er steeds bij wordt geleend?"),
    (2024, 1, 41): ("h4", "Werkloosheid — soorten en oorzaken"),
    (2024, 2, 17): ("h3", "Rechtsvormen — eenmanszaak, VOF of BV?"),
    (2024, 2, 28): ("h8", "Eerlijke handel en jouw keuzes als consument"),
    (2024, 2, 32): ("h8", "Eerlijke handel en jouw keuzes als consument"),
    (2025, 1, 2):  ("h1", "Welvaart, inflatie en koopkracht"),
    (2025, 1, 4):  ("h7", "Internationale handel — import en export"),
    (2025, 1, 8):  ("h5", "Overheidslagen — Rijk, provincie, gemeente"),
    (2025, 1, 9):  ("h5", "Overheidslagen — Rijk, provincie, gemeente"),
    (2025, 1, 17): ("h3", "Rechtsvormen — eenmanszaak, VOF of BV?"),
    (2025, 1, 29): ("h7", "Internationale handel — import en export"),
    (2025, 1, 32): ("h7", "Internationale handel — import en export"),
    (2025, 1, 37): ("h2", "Sparen of beleggen — risico vs rendement"),
    (2025, 2, 3):  ("h2", "Begroten — heb ik geld over aan het einde van de maand?"),
    (2025, 2, 8):  ("h4", "De arbeidsmarkt en CAO"),
    (2025, 2, 16): ("h6", "Heffingskortingen — wat scheelt het je?"),
    (2025, 2, 39): ("h1", "Inkomensverdeling — eerlijk of ongelijk?"),
    (2025, 2, 43): ("h1", "Welvaart, inflatie en koopkracht"),
}

# Hoofdstuk-info voor het examen-oefenpad
HOOFDSTUKKEN = [
    ("h1", "1. Inkomen en welvaart",      "🍞"),
    ("h2", "2. Geld, sparen en lenen",    "💱"),
    ("h3", "3. Ondernemen",               "🚀"),
    ("h4", "4. Werk en arbeidsmarkt",     "👷"),
    ("h5", "5. De overheid",              "🏛️"),
    ("h6", "6. Belasting",                "🧾"),
    ("h7", "7. Nederland en buitenland",  "🌍"),
    ("h8", "8. Ontwikkelingslanden",      "🌏"),
]


def strip_examenvragen_uit_paden():
    """Verwijder alle check-objecten met 'examenBron:' uit pincode*.js paden."""
    print("=== Strip examenvragen uit gewone leerpaden ===\n")
    pad_files = sorted(SRC.glob("pincode*.js"))
    total_stripped = 0
    for path in pad_files:
        text = path.read_text(encoding="utf-8")
        # Patroon: heel check-object met examenBron-veld eruit halen
        # Begint bij { ... examenBron: ... }, met newline ervoor
        pattern = re.compile(
            r'\n\s*\{\s*\n[^{}]*?examenBron:\s*"[^"]*"\s*,?\s*\n\s*\}\s*,?',
            re.MULTILINE
        )
        new_text, count = pattern.subn('', text)
        if count > 0:
            path.write_text(new_text, encoding="utf-8")
            print(f"  OK {path.name}: -{count} examenvraag-objects gestript")
            total_stripped += count
        else:
            print(f"  -- {path.name}: niets gestript (al schoon)")
    print(f"\nTotaal gestript: {total_stripped} examenvragen\n")
    return total_stripped


def load_examen_vragen_per_hoofdstuk():
    """Leest examenQuizzes JSON's, gebruikt MAPPING om vragen te groeperen
    per hoofdstuk-id (h1..h8). Returns dict: hoofdstuk-id -> list[vraag]."""
    per_hoofdstuk = defaultdict(list)
    for f in sorted(QUIZZES_DIR.glob("economie-*.json")):
        data = json.loads(f.read_text(encoding="utf-8"))
        jaar = data["meta"]["jaar"]
        tv = data["meta"]["tijdvak"]
        for q in data["questions"]:
            key = (jaar, tv, q["vraagNr"])
            if key not in MAPPING:
                continue
            hoofdstuk_id, _step_title = MAPPING[key]
            per_hoofdstuk[hoofdstuk_id].append({
                "jaar": jaar, "tv": tv, "nr": q["vraagNr"],
                "q": q["q"], "options": q["options"], "answer": q["answer"],
            })
    return per_hoofdstuk


def js_escape(s):
    """Escape voor in JS string-literals (dubbele quotes)."""
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ").strip()


def render_check(v):
    label = f"🎓 Examen {v['jaar']}-T{v['tv']} V{v['nr']}:"
    q_full = f"{label} {js_escape(v['q'])}"
    options = [js_escape(o)[:200] for o in v["options"]]
    options_str = ", ".join([f'"{o}"' for o in options])
    return (
        '      {\n'
        f'        q: "{q_full}",\n'
        f'        options: [{options_str}],\n'
        f'        answer: {v["answer"]},\n'
        '        wrongHints: [null, null, null, null],\n'
        '      },'
    )


def render_step(hoofdstuk_id, titel, emoji, vragen):
    checks_str = "\n".join([render_check(v) for v in vragen])
    n = len(vragen)
    explanation = (
        f"Hier oefen je met **{n} echte examenvragen** uit Pincode hoofdstuk {hoofdstuk_id[1]}."
        " De vragen komen uit eindexamens 2023, 2024 en 2025."
        " **Tip**: doe eerst het gewone leerpad voor dit hoofdstuk, dan deze examen-oefening."
    )
    return f'''  {{
    title: "{titel}",
    explanation: "{explanation}",
    checks: [
{checks_str}
    ],
  }},'''


def generate_examen_pad():
    print("=== Genereer examen-oefenpad ===\n")
    per_hoofdstuk = load_examen_vragen_per_hoofdstuk()
    print(f"Vragen per hoofdstuk:")
    for h_id, titel, _emoji in HOOFDSTUKKEN:
        n = len(per_hoofdstuk.get(h_id, []))
        print(f"  {h_id}: {n:2d} vragen — {titel}")

    # Bouw stappen — 1 per hoofdstuk dat vragen heeft
    steps_strs = []
    chapters_strs = []
    emojis_used = []
    step_idx = 0
    for h_id, titel, emoji in HOOFDSTUKKEN:
        vragen = per_hoofdstuk.get(h_id, [])
        if not vragen:
            continue
        steps_strs.append(render_step(h_id, titel, emoji, vragen))
        chapters_strs.append(
            f'  {{ letter: "{chr(ord("A") + step_idx)}", title: "{titel}", emoji: "{emoji}", from: {step_idx}, to: {step_idx} }},'
        )
        emojis_used.append(emoji)
        step_idx += 1

    chapters_block = "\n".join(chapters_strs)
    emojis_str = ", ".join([f'"{e}"' for e in emojis_used])
    steps_block = "\n".join(steps_strs)
    total_q = sum(len(per_hoofdstuk.get(h_id, [])) for h_id, _, _ in HOOFDSTUKKEN)

    content = f'''// Leerpad: Pincode VMBO-GT 4 — Examen-oefenpad (alle 8 hoofdstukken)
// Gegenereerd door scripts/split_examenvragen_economie.py op 2026-05-09.
// Bevat {total_q} echte examenvragen uit eindexamens 2023, 2024, 2025
// (tijdvak 1 + 2). Specifiek voor klas 4 — examenklas. Lagere klassen
// zien dit pad niet (level: vmbo-gt-4).
//
// Idee: leerling doet eerst de 8 gewone Pincode-paden voor uitleg + basis-
// oefening. Daarna dit pad om examen-stijl te oefenen.

const stepEmojis = [{emojis_str}];

const chapters = [
{chapters_block}
];

const steps = [
{steps_block}
];

steps.forEach((s, i) => {{ s.emoji = stepEmojis[i]; }});

const pincodeEconomieExamenOefenen = {{
  id: "pincode-economie-examen-oefenen",
  title: "Examen oefenen — economie (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 - examen oefenpad",
  intro:
    "{total_q} echte examenvragen uit eindexamens 2023-2025, verdeeld over de 8 Pincode-hoofdstukken. Doe eerst de gewone leerpaden voor uitleg, daarna dit pad om examen-stijl te oefenen. Vragen die naar grafieken/tabellen verwijzen zijn niet meegenomen.",
  triggerKeywords: [
    "examen", "examen oefenen", "echte examenvragen", "eindexamen",
    "examen 2023", "examen 2024", "examen 2025",
    "vmbo-gt 4 examen", "pincode examen",
  ],
  chapters,
  steps,
}};

export default pincodeEconomieExamenOefenen;
'''
    out_path = SRC / "pincodeEconomieExamenOefenen.js"
    out_path.write_text(content, encoding="utf-8")
    print(f"\n[OK] Geschreven: {out_path}")
    print(f"     {step_idx} stappen, {total_q} examenvragen totaal")
    print(f"\n--- VOEG TOE AAN src/learnPaths/index.js ---")
    print(f'import pincodeEconomieExamenOefenen from "./pincodeEconomieExamenOefenen.js";')
    print(f'  "pincode-economie-examen-oefenen": pincodeEconomieExamenOefenen,')


def main():
    strip_examenvragen_uit_paden()
    generate_examen_pad()
    print("\n=== KLAAR ===")
    print("Volgende stappen:")
    print("1. Voeg de import + entry toe aan src/learnPaths/index.js")
    print("2. Run npm run build + npm test")


if __name__ == "__main__":
    main()

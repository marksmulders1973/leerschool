#!/usr/bin/env python3
"""
Pilot: genereer een leerpad voor 'Examen Oefenen Economie 2025 tijdvak 1'.
Per vraag: echte vraag uit examen + bijlage-bron + officiële uitleg uit
correctievoorschrift + link naar relevant Pincode-leerpad.

Mark wens 2026-05-09: 20 echte examenvragen met juiste bijlagen + uitleg.
Pilot voor 1 examen, daarna uitrollen.
"""
import json
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC = ROOT / "src" / "learnPaths"
EXAMEN_JSON = ROOT / "src" / "data" / "examenQuizzes" / "economie-vmbo-gltl-2025-tijdvak1.json"

# Per vraag: (sectie-titel, lijst van bron-nrs uit bijlage, link naar Pincode-pad)
# V12 en V19 skippen (vereisen grafiek/tabel die niet goed in tekst zit).
MAPPING = [
    # (vraag_nr, sectie, bron_nrs, leerpad_link, leerpad_naam)
    (1,  "Sint-Maarten — handel",       [1],     "pincode-buitenland-eu",     "Nederland en het buitenland"),
    (2,  "Sint-Maarten — welvaart",     [1],     "pincode-inkomen-welvaart",  "Inkomen en welvaart"),
    (4,  "Sint-Maarten — toerisme",     [1, 2],  "pincode-buitenland-eu",     "Nederland en het buitenland"),
    (8,  "De gemeente — taken",         [3],     "pincode-overheid",          "De overheid"),
    (9,  "De gemeente — belastingen",   [3],     "pincode-overheid",          "De overheid"),
    (14, "Inkomen jongeren",            [7],     "pincode-inkomen-welvaart",  "Inkomen en welvaart"),
    (17, "Dog4fun — ondernemingsvorm",  [5, 6],  "pincode-ondernemen",        "Ondernemen"),
    (29, "Buitenland — handelsoverschot", [8, 9], "pincode-buitenland-eu",   "Nederland en het buitenland"),
    (32, "Buitenland — concurrentie",   [8],     "pincode-ondernemen",        "Ondernemen"),
    (37, "Sparen of beleggen",          [10, 11], "pincode-geld-sparen-lenen", "Geld, sparen en lenen"),
]

EXAMEN_LABEL = "🎓 Echt examen VMBO-GL/TL 2025 tijdvak 1"


def js_escape(s):
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").strip()


def render_check(vraag, bron_text, leerpad_link, leerpad_naam):
    label = f"{EXAMEN_LABEL}, vraag {vraag['vraagNr']}"
    q = js_escape(vraag["q"])
    options = [js_escape(o)[:300] for o in vraag["options"]]
    options_str = ", ".join([f'"{o}"' for o in options])
    explanation = js_escape(vraag.get("explanation", ""))
    bron_titel = js_escape(bron_text["titel"])
    bron_body = js_escape(bron_text["body"][:1500])  # cap body voor leesbaarheid
    return f'''      {{
        q: "{q}",
        options: [{options_str}],
        answer: {vraag["answer"]},
        wrongHints: [null, null, null, null],
        explanation: "{explanation}",
        examenBron: "{label}, vraag {vraag['vraagNr']}",
        bronTekst: {{
          titel: "{bron_titel}",
          body: "{bron_body}",
        }},
      }},'''


def main():
    print("=== Genereer pilot examen-pad: economie 2025-T1 ===\n")
    data = json.loads(EXAMEN_JSON.read_text(encoding="utf-8"))
    by_nr = {q["vraagNr"]: q for q in data["questions"]}

    steps_strs = []
    chapters_strs = []
    for idx, (nr, sectie, bron_nrs, link, link_naam) in enumerate(MAPPING):
        if nr not in by_nr:
            print(f"  [!] Vraag {nr} niet in JSON")
            continue
        v = by_nr[nr]
        # Combineer alle bron-bodies tot 1
        combined_titel = []
        combined_body = []
        for bn in bron_nrs:
            bron = data["teksten"].get(str(bn))
            if not bron:
                continue
            combined_titel.append(f"informatiebron {bn}: {bron['titel']}")
            combined_body.append(f"--- informatiebron {bn} ---\n{bron['body']}")
        bron_combined = {
            "titel": " + ".join(combined_titel) if combined_titel else "informatiebron",
            "body": "\n\n".join(combined_body) if combined_body else "(bron niet gevonden)",
        }

        check_str = render_check(v, bron_combined, link, link_naam)
        explanation_text = js_escape(
            f"Doorklik naar het uitleg-leerpad: **{link_naam}** voor uitgebreide stof "
            f"over dit onderwerp.\n\nOfficiële uitleg uit correctievoorschrift:\n{v.get('explanation', '')}"
        )

        # Stap-titel
        step_title = f"V{nr} — {sectie}"
        chapter_letter = chr(ord("A") + idx)
        chapters_strs.append(
            f'  {{ letter: "{chapter_letter}", title: "{js_escape(step_title)}", emoji: "🎓", from: {idx}, to: {idx} }},'
        )
        # Stap-bestand
        step_str = f'''  {{
    title: "{js_escape(step_title)}",
    explanation: "{js_escape(f"Echte examenvraag uit VMBO-GL/TL economie 2025 tijdvak 1, vraag {nr}. Lees eerst de bron(nen). Doorklik na de vraag voor diepe uitleg in het Pincode-leerpad **{link_naam}**.")}",
    checks: [
{check_str}
    ],
  }},'''
        steps_strs.append(step_str)

    chapters_block = "\n".join(chapters_strs)
    steps_block = "\n".join(steps_strs)

    content = f'''// Leerpad: Examen-oefenpad Economie VMBO-GL/TL 2025 tijdvak 1
// Pilot 2026-05-09 (Mark wens): 10 echte MC-vragen met informatiebron uit
// bijlage + officiële uitleg uit correctievoorschrift + link naar relevant
// Pincode-leerpad voor diepere uitleg.
//
// Specifiek voor klas 4 (eindexamen) — level: vmbo-gt-4.
// Vragen die afbeeldingen/grafieken vereisen (V12, V19) zijn niet
// meegenomen — die werken niet zonder visual.

const chapters = [
{chapters_block}
];

const steps = [
{steps_block}
];

steps.forEach((s) => {{ s.emoji = "🎓"; }});

const examenEconomie2025T1 = {{
  id: "examen-economie-2025-t1",
  title: "Examen oefenen — Economie 2025 tijdvak 1 (echte vragen)",
  emoji: "🎓",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - eindexamen oefenen 2025-T1",
  intro:
    "10 echte examenvragen uit het VMBO-GL/TL economie-examen 2025 tijdvak 1, met de officiële informatiebronnen uit de bijlage en de uitleg uit het correctievoorschrift. Klik bij elke vraag op '📖 Leg uit' voor de officiële uitleg.",
  triggerKeywords: [
    "examen 2025", "examen oefenen", "echte examenvragen",
    "informatiebron", "sint-maarten", "dog4fun",
  ],
  chapters,
  steps,
}};

export default examenEconomie2025T1;
'''
    out = SRC / "examenEconomie2025T1.js"
    out.write_text(content, encoding="utf-8")
    print(f"\n[OK] Geschreven: {out}")
    print(f"     {len(steps_strs)} stappen, {len(steps_strs)} echte examenvragen")
    print(f"\n--- VOEG TOE AAN src/learnPaths/index.js ---")
    print(f'import examenEconomie2025T1 from "./examenEconomie2025T1.js";')
    print(f'  "examen-economie-2025-t1": examenEconomie2025T1,')


if __name__ == "__main__":
    main()

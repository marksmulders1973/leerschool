#!/usr/bin/env python3
"""
Voegt echte examenvragen uit oude eindexamens economie VMBO-GT toe aan de
juiste leerpad-stappen.

Workflow:
1. Leest src/data/examenQuizzes/economie-*.json (geparseerd door
   scripts/parse_examen.py)
2. Per vraag: kijkt in de MAPPING-dict naar welk pad-bestand + welke
   stap-titel het hoort
3. Vragen niet in MAPPING (of EXPLICIT_SKIP) worden overgeslagen — meestal
   omdat ze grafieken/tabellen vereisen die niet in tekst staan
4. Voor elke gemapte vraag: voegt extra check toe aan checks-array van die
   stap, met label '🎓 Echt examen YYYY-T#' voor de q-tekst
5. Idempotent: kijkt of de vraag al toegevoegd is en slaat dan over

Dit script kan herhaaldelijk gedraaid worden zonder duplicaten.
"""
import json
import re
import glob
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC = ROOT / "src" / "learnPaths"
QUIZZES_DIR = ROOT / "src" / "data" / "examenQuizzes"

# MAPPING: (jaar, tijdvak, vraag_nr) -> (pad-bestandsnaam, stap-titel)
# Vragen die niet in deze dict staan worden overgeslagen.
# Stap-titels moeten LETTERLIJK kloppen met de title-veld in het leerpad.
MAPPING = {
    # ─── 2023 tijdvak 1 ───
    (2023, 1, 4):  ("pincodeInkomenWelvaart.js",   "Soorten inkomen — bruto, netto, primair, secundair"),
    (2023, 1, 13): ("pincodeBuitenlandEu.js",      "Beschermingsmaatregelen — protectionisme"),
    (2023, 1, 36): ("pincodeOndernemen.js",        "Doelgroep en marketing — wie zijn je klanten?"),
    (2023, 1, 38): ("pincodeOndernemen.js",        "Macht op de markt — wie bepaalt de prijs?"),
    (2023, 1, 42): ("pincodeOndernemen.js",        "Omzet, kosten en winst — kan ik ermee verdienen?"),

    # ─── 2023 tijdvak 2 ───
    (2023, 2, 12): ("pincodeOverheid.js",          "Overheidslagen — Rijk, provincie, gemeente"),
    (2023, 2, 14): ("pincodeBelasting.js",         "Inkomstenbelasting — schijven en boxen"),
    (2023, 2, 26): ("pincodeInkomenWelvaart.js",   "Welvaart, inflatie en koopkracht"),
    (2023, 2, 27): ("pincodeBuitenlandEu.js",      "ECB en monetair beleid — beheerder van de euro"),
    (2023, 2, 28): ("pincodeBuitenlandEu.js",      "Beschermingsmaatregelen — protectionisme"),
    (2023, 2, 30): ("pincodeBuitenlandEu.js",      "Wisselkoersen — wat is jouw euro waard?"),
    (2023, 2, 36): ("pincodeBelasting.js",         "Soorten belastingen — direct, indirect, premies"),

    # ─── 2024 tijdvak 1 ───
    (2024, 1, 2):  ("pincodeBuitenlandEu.js",      "De Europese Unie — 27 landen, 1 markt"),
    (2024, 1, 7):  ("pincodeOndernemen.js",        "Macht op de markt — wie bepaalt de prijs?"),
    (2024, 1, 27): ("pincodeOverheid.js",          "De Rijksbegroting — het huishoudboekje van NL"),
    (2024, 1, 30): ("pincodeOverheid.js",          "Staatsschuld — wat als er steeds bij wordt geleend?"),
    (2024, 1, 41): ("pincodeWerkArbeidsmarkt.js",  "Werkloosheid — soorten en oorzaken"),

    # ─── 2024 tijdvak 2 ───
    (2024, 2, 17): ("pincodeOndernemen.js",        "Rechtsvormen — eenmanszaak, VOF of BV?"),
    (2024, 2, 28): ("pincodeOntwikkelingslanden.js", "Eerlijke handel en jouw keuzes als consument"),
    (2024, 2, 32): ("pincodeOntwikkelingslanden.js", "Eerlijke handel en jouw keuzes als consument"),

    # ─── 2025 tijdvak 1 ───
    (2025, 1, 2):  ("pincodeInkomenWelvaart.js",   "Welvaart, inflatie en koopkracht"),
    (2025, 1, 4):  ("pincodeBuitenlandEu.js",      "Internationale handel — import en export"),
    (2025, 1, 8):  ("pincodeOverheid.js",          "Overheidslagen — Rijk, provincie, gemeente"),
    (2025, 1, 9):  ("pincodeOverheid.js",          "Overheidslagen — Rijk, provincie, gemeente"),
    (2025, 1, 17): ("pincodeOndernemen.js",        "Rechtsvormen — eenmanszaak, VOF of BV?"),
    (2025, 1, 29): ("pincodeBuitenlandEu.js",      "Internationale handel — import en export"),
    (2025, 1, 32): ("pincodeBuitenlandEu.js",      "Internationale handel — import en export"),
    (2025, 1, 37): ("pincodeGeldSparenLenen.js",   "Sparen of beleggen — risico vs rendement"),

    # ─── 2025 tijdvak 2 ───
    (2025, 2, 3):  ("pincodeGeldSparenLenen.js",   "Begroten — heb ik geld over aan het einde van de maand?"),
    (2025, 2, 8):  ("pincodeWerkArbeidsmarkt.js",  "De arbeidsmarkt en CAO"),
    (2025, 2, 16): ("pincodeBelasting.js",         "Heffingskortingen — wat scheelt het je?"),
    (2025, 2, 39): ("pincodeInkomenWelvaart.js",   "Inkomensverdeling — eerlijk of ongelijk?"),
    (2025, 2, 43): ("pincodeInkomenWelvaart.js",   "Welvaart, inflatie en koopkracht"),
}


def load_all_examenvragen():
    """Lees alle economie-examen JSON-bestanden + return list van vragen
    met meta-info (jaar/tv/nr)."""
    out = []
    for f in sorted(QUIZZES_DIR.glob("economie-*.json")):
        data = json.loads(f.read_text(encoding="utf-8"))
        jaar = data["meta"]["jaar"]
        tv = data["meta"]["tijdvak"]
        for q in data["questions"]:
            out.append({
                "jaar": jaar, "tv": tv, "nr": q["vraagNr"],
                "q": q["q"], "options": q["options"], "answer": q["answer"],
            })
    return out


def render_check(vraag, label):
    """Genereer een check-object als JS-string met examen-label vooraf."""
    q_clean = vraag["q"].replace('"', '\\"').replace("\n", " ").strip()
    q_with_label = f"{label} {q_clean}"
    options_clean = [o.replace('"', '\\"').replace("\n", " ").strip() for o in vraag["options"]]
    # Filter te lange opties (meestal afgekapt door parser of bevatten extra context)
    options_clean = [o[:200] for o in options_clean]
    options_str = ", ".join([f'"{o}"' for o in options_clean])
    return (
        '      {\n'
        f'        q: "{q_with_label}",\n'
        f'        options: [{options_str}],\n'
        f'        answer: {vraag["answer"]},\n'
        '        wrongHints: [null, null, null, null],\n'
        '        examenBron: "' + label + '",\n'
        '      },'
    )


def inject_into_step(text, step_title, check_js, dedupe_key):
    """Voeg check toe aan checks-array van specifieke stap. Idempotent: kijkt
    of dedupe_key (uniek prefix) al voorkomt en slaat dan over."""
    title_pat = re.escape(step_title)
    title_match = re.search(rf'title:\s*"{title_pat}"', text)
    if not title_match:
        return text, "step_not_found"
    if dedupe_key in text:
        return text, "already_present"
    checks_match = re.search(r'checks:\s*\[', text[title_match.end():])
    if not checks_match:
        return text, "no_checks_array"
    checks_open_pos = title_match.end() + checks_match.end()
    depth = 1
    i = checks_open_pos
    while i < len(text) and depth > 0:
        ch = text[i]
        if ch == '[':
            depth += 1
        elif ch == ']':
            depth -= 1
            if depth == 0:
                break
        elif ch == '"':
            j = i + 1
            while j < len(text) and text[j] != '"':
                if text[j] == '\\':
                    j += 2
                else:
                    j += 1
            i = j
        i += 1
    if depth != 0:
        return text, "unbalanced_brackets"
    closing_pos = i
    insert_str = "\n" + check_js + "\n    "
    return text[:closing_pos] + insert_str + text[closing_pos:], "added"


def main():
    print("=== Echte economie-examenvragen → leerpaden ===\n")
    vragen = load_all_examenvragen()
    print(f"Geladen: {len(vragen)} examen MC-vragen uit 6 examens\n")

    # Groepeer per pad
    per_file = {}
    skipped_unmapped = 0
    for v in vragen:
        key = (v["jaar"], v["tv"], v["nr"])
        if key not in MAPPING:
            skipped_unmapped += 1
            continue
        pad_file, step_title = MAPPING[key]
        per_file.setdefault(pad_file, []).append((step_title, v))

    print(f"Gemapt:  {len(vragen) - skipped_unmapped} vragen → leerpaden")
    print(f"Skip:    {skipped_unmapped} (verwijzen naar grafiek/tabel/context)\n")

    total_added = 0
    total_skipped = 0
    for pad_file, lijst in per_file.items():
        path = SRC / pad_file
        if not path.exists():
            print(f"  ! Bestand niet gevonden: {pad_file}")
            continue
        text = path.read_text(encoding="utf-8")
        added = 0
        skipped = 0
        for step_title, v in lijst:
            label = f"🎓 Examen {v['jaar']}-T{v['tv']} V{v['nr']}:"
            check_js = render_check(v, label)
            dedupe_key = f'examenBron: "{label}"'
            text, status = inject_into_step(text, step_title, check_js, dedupe_key)
            if status == "added":
                added += 1
            else:
                skipped += 1
                if status not in ("already_present",):
                    print(f"    [!] {pad_file} V{v['nr']}: {status} (stap: {step_title})")
        if added:
            path.write_text(text, encoding="utf-8")
            print(f"  OK {pad_file}: +{added} examenvragen ({skipped} al aanwezig/fout)")
            total_added += added
            total_skipped += skipped
        else:
            print(f"  -- {pad_file}: niets nieuws ({skipped} skip)")
            total_skipped += skipped

    print(f"\n[KLAAR] +{total_added} echte examenvragen toegevoegd ({total_skipped} skip)")
    print("Run 'npm run build' + 'npm test' om te valideren.")


if __name__ == "__main__":
    main()

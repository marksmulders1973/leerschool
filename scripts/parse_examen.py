#!/usr/bin/env python3
# Parser: examenblad.nl PDF-set (opgaven + bijlage + correctie) -> quiz-JSON.
#
# Gebruik:
#   python scripts/parse_examen.py <examen-id> <opgaven.pdf> <bijlage.pdf> <correctie.pdf>
#
# Output:
#   src/data/examenQuizzes/<examen-id>.json
#
# Vereist: pdftotext (poppler) op PATH.
#
# Filter: alleen MC-vragen met A/B/C/D-opties; open/citeer/volgorde-vragen
# worden overgeslagen (zichtbaar in summary). Voor 1e versie scope.

import json
import re
import subprocess
import sys
from pathlib import Path

# Speciale tekens uit PDF naar leesbare equivalenten.
CHAR_FIX = {
    "�": "'",  # placeholder voor onbekende chars
    "‘": "'", "’": "'",
    "“": '"', "”": '"',
    "–": "-", "—": "-",
    " ": " ",
    "…": "...",
    "": "'", "": "'",
}

def fix_chars(s):
    for k, v in CHAR_FIX.items():
        s = s.replace(k, v)
    # vervang losse high-bit garbage chars door spatie
    s = re.sub(r"[\x00-\x08\x0b-\x1f\x7f-\x9f]", " ", s)
    return s

def pdf_to_text(pdf_path):
    """Run pdftotext -layout en return stdout."""
    result = subprocess.run(
        ["pdftotext", "-layout", str(pdf_path), "-"],
        capture_output=True, text=True, encoding="utf-8", errors="replace"
    )
    if result.returncode != 0:
        raise RuntimeError(f"pdftotext faalt voor {pdf_path}: {result.stderr}")
    return fix_chars(result.stdout)

def strip_page_footers(text):
    """Verwijder paginanummers en 'lees verder' regels."""
    lines = text.split("\n")
    out = []
    for ln in lines:
        if re.match(r"^\s*[A-Z]{2}-\d{4}-[a-z]-\d{2}-\d-[obc]\s+\d+\s*/?\s*\d*\s*lees verder", ln):
            continue
        if re.match(r"^\s*[A-Z]{2}-\d{4}-[a-z]-\d{2}-\d-[obc]\s+\d+\s+lees verder", ln):
            continue
        if re.match(r"^\s*[A-Z]{2}-\d{4}-[a-z]-\d{2}-\d-[obc]\s*$", ln):
            continue
        out.append(ln)
    return "\n".join(out)

def parse_bijlage(text):
    """Parse bijlage -> dict {tekst_nr: {titel, body}}.
    Tekst-headers staan als 'Tekst N' op een eigen regel, gevolgd door
    leeg(en), dan titel, dan body. Body eindigt bij volgende 'Tekst N' of EOF.
    """
    text = strip_page_footers(text)
    teksten = {}
    # Vind alle tekst-blok-starts: 'Tekst <nr>' op eigen regel
    pattern = re.compile(r"^\s*Tekst\s+(\d+)\s*$", re.MULTILINE)
    matches = list(pattern.finditer(text))
    for i, m in enumerate(matches):
        nr = int(m.group(1))
        start = m.end()
        end = matches[i+1].start() if i+1 < len(matches) else len(text)
        block = text[start:end].strip()
        # eerste niet-lege regel = titel
        block_lines = [ln for ln in block.split("\n")]
        titel = ""
        body_start = 0
        for j, ln in enumerate(block_lines):
            if ln.strip():
                titel = ln.strip()
                body_start = j + 1
                break
        body = "\n".join(block_lines[body_start:]).strip()
        # leftover paginatie-resten verwijderen
        body = re.sub(r"\n{3,}", "\n\n", body)
        teksten[nr] = {"titel": titel, "body": body}
    return teksten

def parse_correctie(text):
    """Parse correctie -> dict {vraag_nr: 'A'|'B'|'C'|'D' | None voor open}.
    MC-antwoorden staan als '1B' (geen spatie) of '10 B' (met spatie) op
    een eigen regel. Open vragen als '2 maximumscore N'.
    Slice naar laatste 'Beoordelingsmodel' om header-noise te skippen.
    """
    text = strip_page_footers(text)
    # Pak vanaf laatste 'Beoordelingsmodel' (skip TOC die eerst voorkomt)
    bm_positions = [m.start() for m in re.finditer(r"Beoordelingsmodel", text)]
    bm_text = text[bm_positions[-1]:] if bm_positions else text
    # eindig bij 'Aanleveren scores' of 'Bronvermeldingen'
    for end_marker in ["Aanleveren scores", "Bronvermeldingen"]:
        em = re.search(end_marker, bm_text)
        if em:
            bm_text = bm_text[:em.start()]
            break
    answers = {}
    # MC pattern: '1B', '10 B' aan begin van regel (alleen letters A-E na nr)
    for m in re.finditer(r"^\s*(\d{1,2})\s*([A-E])\s*$", bm_text, re.MULTILINE):
        nr = int(m.group(1))
        answers[nr] = m.group(2)
    # Open vragen markeren als None
    for m in re.finditer(r"^\s*(\d{1,2})\s+maximumscore\s+\d+", bm_text, re.MULTILINE):
        nr = int(m.group(1))
        if nr not in answers:
            answers[nr] = None
    return answers

def parse_opgaven(text):
    """Parse opgaven -> list of vragen.
    Per vraag:
      - nr (int)
      - punten (int, uit 'Np')
      - tekst_nr (int|None) - laatste 'Tekst N'-header voor de vraag
      - vraag (str) - vraagtekst (multi-line samengevouwen)
      - opties (list[str]|None) - A/B/C/D opties als MC, anders None
      - type ('mc'|'open')
    """
    text = strip_page_footers(text)
    vragen = []
    current_tekst_nr = None
    # split op vraag-headers: regel begint met 'Np N' (bv '1p 5', '2p 9')
    # we lezen lijn-per-lijn met state machine
    lines = text.split("\n")
    i = 0
    n = len(lines)
    # Track de "laatste tekst-header" zodat vragen kunnen weten naar welke
    # bijlage-tekst ze refereren.
    tekst_header_re = re.compile(r"^\s*Tekst\s+(\d+)\b")
    vraag_start_re = re.compile(r"^\s*(\d+)p\s+(\d+)\s+(.*)$")
    optie_re = re.compile(r"^\s+([A-E])\s+(.+)$")

    while i < n:
        ln = lines[i]
        # tekst-header detecteren (verandert current_tekst_nr)
        m_th = tekst_header_re.match(ln)
        if m_th:
            current_tekst_nr = int(m_th.group(1))
            i += 1
            continue
        # vraag-start?
        m_vs = vraag_start_re.match(ln)
        if m_vs:
            punten = int(m_vs.group(1))
            nr = int(m_vs.group(2))
            first_q_line = m_vs.group(3).strip()
            # verzamel vraag-body tot eerste optie of volgende vraag/tekst
            body_lines = [first_q_line] if first_q_line else []
            opties = []
            j = i + 1
            while j < n:
                lnj = lines[j]
                if vraag_start_re.match(lnj) or tekst_header_re.match(lnj):
                    break
                m_opt = optie_re.match(lnj)
                if m_opt:
                    letter = m_opt.group(1)
                    optie_text = m_opt.group(2).strip()
                    # volgende regels die geen nieuwe optie/vraag/tekst zijn = vervolg
                    k = j + 1
                    while k < n:
                        lnk = lines[k]
                        if (vraag_start_re.match(lnk) or tekst_header_re.match(lnk)
                                or optie_re.match(lnk)):
                            break
                        if lnk.strip():
                            optie_text += " " + lnk.strip()
                        k += 1
                    opties.append((letter, optie_text))
                    j = k
                else:
                    if lnj.strip():
                        body_lines.append(lnj.strip())
                    j += 1
            vraagtekst = " ".join(body_lines).strip()
            # MC alleen als minstens 3 opties (A/B/C of A/B/C/D, evt E)
            is_mc = len(opties) >= 3 and all(o[0] in "ABCDE" for o in opties)
            vragen.append({
                "nr": nr,
                "punten": punten,
                "tekst_nr": current_tekst_nr,
                "vraag": vraagtekst,
                "opties": [o[1] for o in opties] if is_mc else None,
                "optie_letters": [o[0] for o in opties] if is_mc else None,
                "type": "mc" if is_mc else "open",
            })
            i = j
        else:
            i += 1
    return vragen

def to_quiz_json(examen_id, vragen, teksten, antwoorden, meta):
    """Bouw final quiz-JSON in het formaat dat PlayQuiz verwacht.
    Voegt alleen MC-vragen toe waarvoor we een correct antwoord hebben.
    """
    items = []
    skipped = []
    for v in vragen:
        if v["type"] != "mc":
            skipped.append({"nr": v["nr"], "reden": "open/complex"})
            continue
        antwoord = antwoorden.get(v["nr"])
        if antwoord is None:
            skipped.append({"nr": v["nr"], "reden": "geen MC-antwoord in correctie"})
            continue
        if antwoord not in v["optie_letters"]:
            skipped.append({"nr": v["nr"], "reden": f"antwoord {antwoord} niet in opties {v['optie_letters']}"})
            continue
        answer_idx = v["optie_letters"].index(antwoord)
        item = {
            "q": v["vraag"],
            "options": v["opties"],
            "answer": answer_idx,
            "explanation": f"Het juiste antwoord is {antwoord}.",
            "tekstNr": v["tekst_nr"],
            "vraagNr": v["nr"],
        }
        items.append(item)
    return {
        "id": examen_id,
        "meta": meta,
        "teksten": teksten,
        "questions": items,
        "skipped": skipped,
    }

def main():
    if len(sys.argv) != 5:
        print("Gebruik: parse_examen.py <examen-id> <opgaven.pdf> <bijlage.pdf> <correctie.pdf>")
        sys.exit(1)
    examen_id = sys.argv[1]
    opg_pdf, bij_pdf, cor_pdf = sys.argv[2], sys.argv[3], sys.argv[4]

    print(f"[1/4] PDF -> text...")
    opg_text = pdf_to_text(opg_pdf)
    bij_text = pdf_to_text(bij_pdf)
    cor_text = pdf_to_text(cor_pdf)

    print(f"[2/4] Parse bijlage...")
    teksten = parse_bijlage(bij_text)
    print(f"      {len(teksten)} teksten gevonden: {sorted(teksten.keys())}")

    print(f"[3/4] Parse correctievoorschrift...")
    antwoorden = parse_correctie(cor_text)
    mc_count = sum(1 for v in antwoorden.values() if v)
    print(f"      {len(antwoorden)} vraag-antwoorden ({mc_count} MC, {len(antwoorden)-mc_count} open)")

    print(f"[4/4] Parse opgaven + bouw quiz-JSON...")
    vragen = parse_opgaven(opg_text)
    print(f"      {len(vragen)} vragen herkend")

    meta = {"vak": "engels", "niveau": "vmbo-gltl", "jaar": 2025, "tijdvak": 1}
    if "vmbo-gltl" in examen_id:
        for vak in ["engels", "nederlands", "economie", "geschiedenis"]:
            if vak in examen_id:
                meta["vak"] = vak
                break
        m = re.search(r"-(\d{4})-tijdvak(\d)", examen_id)
        if m:
            meta["jaar"] = int(m.group(1))
            meta["tijdvak"] = int(m.group(2))

    quiz = to_quiz_json(examen_id, vragen, teksten, antwoorden, meta)

    out_dir = Path(__file__).parent.parent / "src" / "data" / "examenQuizzes"
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{examen_id}.json"
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(quiz, f, ensure_ascii=False, indent=2)

    print(f"\n[OK] Geschreven: {out_path}")
    print(f"     {len(quiz['questions'])} speelbare MC-vragen")
    print(f"     {len(quiz['skipped'])} overgeslagen (open/citeer/volgorde)")
    print(f"     {len(quiz['teksten'])} bron-teksten gekoppeld")

if __name__ == "__main__":
    main()

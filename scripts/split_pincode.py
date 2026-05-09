#!/usr/bin/env python3
"""
Splitst het 24-stappen Pincode-leerpad in 8 losse leerpaden (1 per hoofdstuk).
Past bij Leerkwartier-handelsmerk (15-min chunks) en de UI-logica
"1 leerpad = 1 thematisch blok" zoals andere vakken.

Output: 8 nieuwe bestanden in src/learnPaths/pincode*.js
        + bijgewerkte src/learnPaths/index.js (oude verwijderd, 8 nieuwe toegevoegd)
        + verwijdert oude src/learnPaths/pincodeEconomieVmboGt4.js
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC = ROOT / "src" / "learnPaths"
OLD_FILE = SRC / "pincodeEconomieVmboGt4.js"
INDEX_FILE = SRC / "index.js"

# 8 hoofdstuk-definities
HOOFDSTUKKEN = [
    {"letter": "A", "marker": "A. Inkomen en welvaart",
     "id": "pincode-inkomen-welvaart", "var": "pincodeInkomenWelvaart",
     "title": "Inkomen en welvaart", "emoji": "🍞",
     "intro": "Over schaarste, behoeften, productiefactoren, soorten inkomen, welvaart en koopkracht. Hoofdstuk A van Pincode VMBO-GT klas 4."},
    {"letter": "B", "marker": "B. Geld genoeg?",
     "id": "pincode-geld-sparen-lenen", "var": "pincodeGeldSparenLenen",
     "title": "Geld, sparen en lenen", "emoji": "💱",
     "intro": "Functies van geld, banken, samengestelde rente en kredietvormen met hun risico's. Hoofdstuk B van Pincode VMBO-GT klas 4."},
    {"letter": "C", "marker": "C. Ben jij ondernemend?",
     "id": "pincode-ondernemen", "var": "pincodeOndernemen",
     "title": "Ondernemen", "emoji": "🚀",
     "intro": "Wat is een ondernemer, omzet/kosten/winst en de rechtsvormen eenmanszaak, VOF en BV. Hoofdstuk C van Pincode VMBO-GT klas 4."},
    {"letter": "D", "marker": "D. Werk aan de winkel!",
     "id": "pincode-werk-arbeidsmarkt", "var": "pincodeWerkArbeidsmarkt",
     "title": "Werk en arbeidsmarkt", "emoji": "👷",
     "intro": "Werkgever en werknemer, soorten contracten, CAO, vraag en aanbod op de arbeidsmarkt en werkloosheid. Hoofdstuk D van Pincode VMBO-GT klas 4."},
    {"letter": "E", "marker": "E. Hoe werkt de overheid?",
     "id": "pincode-overheid", "var": "pincodeOverheid",
     "title": "De overheid", "emoji": "🏛️",
     "intro": "Taken van de overheid, de Rijksbegroting (Prinsjesdag) en de staatsschuld + EMU-norm. Hoofdstuk E van Pincode VMBO-GT klas 4."},
    {"letter": "F", "marker": "F. Iedereen betaalt belasting",
     "id": "pincode-belasting", "var": "pincodeBelasting",
     "title": "Belasting", "emoji": "🧾",
     "intro": "Directe en indirecte belastingen, BTW-tarieven, accijns en de progressieve inkomstenbelasting met heffingskortingen. Hoofdstuk F van Pincode VMBO-GT klas 4."},
    {"letter": "G", "marker": "G. Nederland en het buitenland",
     "id": "pincode-buitenland-eu", "var": "pincodeBuitenlandEu",
     "title": "Nederland en het buitenland", "emoji": "🌍",
     "intro": "Internationale handel (import/export), de Europese Unie en wisselkoersen + de rol van de ECB. Hoofdstuk G van Pincode VMBO-GT klas 4."},
    {"letter": "H", "marker": "H. Ontwikkelingslanden",
     "id": "pincode-ontwikkelingslanden", "var": "pincodeOntwikkelingslanden",
     "title": "Ontwikkelingslanden", "emoji": "🌏",
     "intro": "Verschillen rijk/arm, oorzaken van armoede, en duurzame ontwikkeling met fair trade en microkrediet. Hoofdstuk H van Pincode VMBO-GT klas 4."},
]

# Trigger keywords per hoofdstuk (gericht op de inhoud, geen brede economie-termen)
TRIGGERS = {
    "A": ["inkomen", "welvaart", "schaarste", "behoeften", "primaire behoefte", "secundaire behoefte",
          "vrije goederen", "schaarse goederen", "consumptiegoederen", "kapitaalgoederen",
          "productiefactoren", "arbeid", "natuur", "kapitaal", "ondernemerschap",
          "bruto", "netto", "loon", "primair inkomen", "secundair inkomen",
          "besteedbaar inkomen", "inflatie", "koopkracht", "cpi", "consumentenprijsindex",
          "lorenz", "pincode hoofdstuk a"],
    "B": ["geld", "ruilhandel", "ruilmiddel", "rekenmiddel", "spaarmiddel", "chartaal", "giraal",
          "bank", "sparen", "rente", "samengestelde rente",
          "lenen", "krediet", "hypotheek", "persoonlijke lening", "doorlopend krediet",
          "rood staan", "bkr", "onderpand", "pincode hoofdstuk b"],
    "C": ["ondernemen", "ondernemer", "kvk", "kamer van koophandel", "marktonderzoek", "ondernemingsplan",
          "productie", "handel", "diensten", "omzet", "kosten", "winst", "verlies",
          "vaste kosten", "constante kosten", "variabele kosten", "totale kosten", "break-even",
          "rechtsvorm", "eenmanszaak", "vof", "vennootschap onder firma", "bv", "besloten vennootschap",
          "aansprakelijk", "vpb", "vennootschapsbelasting", "pincode hoofdstuk c"],
    "D": ["werkgever", "werknemer", "arbeidsovereenkomst", "vast contract", "tijdelijk contract",
          "oproepcontract", "uitzendcontract", "zzp", "zzp'er", "zelfstandige zonder personeel",
          "vakantiegeld", "minimumloon", "ziektewet",
          "arbeidsmarkt", "vraag naar arbeid", "aanbod van arbeid", "krapte", "ruime arbeidsmarkt",
          "cao", "vakbond", "werkgeversorganisatie",
          "werkloosheid", "frictiewerkloosheid", "conjuncturele werkloosheid",
          "structurele werkloosheid", "seizoenswerkloosheid",
          "beroepsbevolking", "productiviteit", "pincode hoofdstuk d"],
    "E": ["overheid", "rijksoverheid", "provincie", "gemeente", "openbare voorzieningen",
          "sociale zekerheid", "inkomensverdeling",
          "rijksbegroting", "miljoenennota", "prinsjesdag", "begrotingstekort", "begrotingsoverschot",
          "staatsschuld", "emu-norm", "stabiliteits- en groeipact", "bbp",
          "bruto binnenlands product", "staatsobligatie", "pincode hoofdstuk e"],
    "F": ["belasting", "directe belasting", "indirecte belasting",
          "inkomstenbelasting", "ib", "vennootschapsbelasting", "vpb", "erfbelasting",
          "btw", "omzetbelasting", "accijns", "tabak", "alcohol", "brandstof",
          "premie", "aow-premie", "zorgverzekeringspremie", "ww-premie",
          "schijven", "progressieve belasting", "heffingskorting", "arbeidskorting",
          "loonheffing", "pincode hoofdstuk f"],
    "G": ["import", "export", "handelsbalans", "comparatief voordeel", "schaalvoordelen",
          "rotterdam", "schiphol", "re-export", "handelsland",
          "europese unie", "eu", "vrije handel", "vrij verkeer", "eurozone", "euro",
          "ecb", "europese centrale bank",
          "wisselkoers", "valutamarkt", "sterke euro", "zwakke euro", "pincode hoofdstuk g"],
    "H": ["ontwikkelingsland", "hdi", "human development index", "bbp per hoofd",
          "levensverwachting", "kindersterfte", "welvaart in ruime zin", "welvaart in enge zin",
          "vicieuze cirkel", "armoede", "kolonisatie", "corruptie",
          "ontwikkelingshulp", "bilaterale hulp", "multilaterale hulp", "noodhulp", "structurele hulp",
          "fair trade", "max havelaar", "utz", "sdg", "sustainable development goals",
          "microkrediet", "yunus", "pincode hoofdstuk h"],
}

def read_old_file():
    return OLD_FILE.read_text(encoding="utf-8")

def extract_colors_block(text):
    """Pak de COLORS const definitie uit het oude bestand."""
    m = re.search(r"^const COLORS = \{[\s\S]+?\};\s*\n", text, re.MULTILINE)
    if not m:
        raise RuntimeError("Kan COLORS-block niet vinden")
    return m.group(0).rstrip()

def extract_step_emojis(text):
    """Pak de stepEmojis array (24 emojis voor de 24 stappen)."""
    m = re.search(r"^const stepEmojis = \[([\s\S]+?)\];\s*\n", text, re.MULTILINE)
    if not m:
        raise RuntimeError("Kan stepEmojis niet vinden")
    body = m.group(1)
    emojis = re.findall(r'"([^"]+)"', body)
    if len(emojis) != 24:
        raise RuntimeError(f"Verwacht 24 emojis, kreeg {len(emojis)}")
    return emojis

def extract_chapters_per_letter(text):
    """Bouw mapping letter -> {letter, title, emoji} uit oude chapters-array."""
    m = re.search(r"const chapters = \[([\s\S]+?)\];", text)
    if not m:
        raise RuntimeError("Kan chapters-array niet vinden")
    body = m.group(1)
    out = {}
    for cm in re.finditer(r'\{\s*letter:\s*"([A-H])",\s*title:\s*"([^"]+)",\s*emoji:\s*"([^"]+)"', body):
        out[cm.group(1)] = {"letter": cm.group(1), "title": cm.group(2), "emoji": cm.group(3)}
    return out

def extract_steps_by_chapter(text):
    """Splits steps-array op // ─── X. markers en geef per letter de raw step-blokken terug.
    Returns: { 'A': '<raw text van 3 stappen>', 'B': ..., ... }
    """
    # vind start van steps array
    steps_start = re.search(r"^const steps = \[\s*\n", text, re.MULTILINE)
    if not steps_start:
        raise RuntimeError("Kan 'const steps = [' niet vinden")
    body_start = steps_start.end()
    # vind einde — laatste '];' op regel-niveau voor de export-block
    # zoek naar regel '];' gevolgd door 'const pincode'
    end_match = re.search(r"^\];\s*\n\s*const\s+pincodeEconomieVmboGt4\s*=", text[body_start:], re.MULTILINE)
    if not end_match:
        raise RuntimeError("Kan einde steps-array niet vinden")
    body = text[body_start:body_start + end_match.start()]
    # splits op markers
    marker_re = re.compile(r"^  // ─+\s*([A-H])\.\s+([^─]+?)─+\s*$", re.MULTILINE)
    matches = list(marker_re.finditer(body))
    if len(matches) != 8:
        raise RuntimeError(f"Verwacht 8 hoofdstuk-markers, kreeg {len(matches)}")
    chunks = {}
    for i, m in enumerate(matches):
        letter = m.group(1)
        chunk_start = m.end()
        chunk_end = matches[i+1].start() if i+1 < len(matches) else len(body)
        chunk = body[chunk_start:chunk_end].rstrip()
        # zorg dat het chunk eindigt met een '},' (laatste stap-objectsluitend)
        if not chunk.endswith(","):
            chunk = chunk.rstrip() + ","
        chunks[letter] = chunk
    return chunks

def render_new_file(hf, colors_block, step_emojis_3, chapter_meta, steps_chunk):
    """Genereer de inhoud van een nieuw leerpad-bestand."""
    triggers = TRIGGERS[hf["letter"]]
    triggers_str = ",\n    ".join([f'"{t}"' for t in triggers])
    emojis_str = ", ".join([f'"{e}"' for e in step_emojis_3])
    return f'''// Leerpad: Pincode 7e ed. VMBO-GT klas 4 - hoofdstuk {hf["letter"]}
// Gesplitst uit pincodeEconomieVmboGt4.js (2026-05-09): 1 hoofdstuk = 1 leerpad,
// past bij Leerkwartier 15-min-chunks en de UI-logica "1 pad = 1 thema".

{colors_block}

const stepEmojis = [{emojis_str}];

const chapters = [
  {{ letter: "{chapter_meta['letter']}", title: "{chapter_meta['title']}", emoji: "{chapter_meta['emoji']}", from: 0, to: 2 }},
];

const steps = [
{steps_chunk}
];

steps.forEach((s, i) => {{ s.emoji = stepEmojis[i]; }});

const {hf["var"]} = {{
  id: "{hf["id"]}",
  title: "{hf["title"]}",
  emoji: "{hf["emoji"]}",
  level: "vmbo-gt-4",
  subject: "economie",
  referentieNiveau: "VMBO-GT eindexamen",
  sloThema: "Economie - Pincode VMBO-GT klas 4 hoofdstuk {hf["letter"]}",
  intro:
    "{hf["intro"]}",
  triggerKeywords: [
    {triggers_str},
  ],
  chapters,
  steps,
}};

export default {hf["var"]};
'''

def write_new_files(text):
    colors_block = extract_colors_block(text)
    step_emojis = extract_step_emojis(text)
    chapter_meta_map = extract_chapters_per_letter(text)
    chunks = extract_steps_by_chapter(text)

    written = []
    for i, hf in enumerate(HOOFDSTUKKEN):
        L = hf["letter"]
        emojis_3 = step_emojis[i*3:(i+1)*3]
        meta = chapter_meta_map[L]
        steps_chunk = chunks[L]
        content = render_new_file(hf, colors_block, emojis_3, meta, steps_chunk)
        out_path = SRC / f"{hf['var']}.js"
        out_path.write_text(content, encoding="utf-8")
        written.append(out_path.name)
    return written

def update_index_js():
    text = INDEX_FILE.read_text(encoding="utf-8")
    # Vervang oude import door 8 nieuwe imports
    old_import = 'import pincodeEconomieVmboGt4 from "./pincodeEconomieVmboGt4.js";'
    new_imports_lines = [f'import {h["var"]} from "./{h["var"]}.js";' for h in HOOFDSTUKKEN]
    new_imports = "\n".join(new_imports_lines)
    if old_import not in text:
        raise RuntimeError("Kan oude import in index.js niet vinden")
    text = text.replace(old_import, new_imports)
    # Vervang oude entry in pad-map door 8 nieuwe entries
    old_entry = '  "pincode-economie-vmbo-gt-4": pincodeEconomieVmboGt4,'
    new_entries_lines = [f'  "{h["id"]}": {h["var"]},' for h in HOOFDSTUKKEN]
    new_entries = "\n".join(new_entries_lines)
    if old_entry not in text:
        raise RuntimeError("Kan oude entry in index.js pad-map niet vinden")
    text = text.replace(old_entry, new_entries)
    INDEX_FILE.write_text(text, encoding="utf-8")

def main():
    print(f"[1/4] Inlezen {OLD_FILE.name}...")
    text = read_old_file()
    print(f"      {len(text)} chars")

    print(f"[2/4] 8 nieuwe leerpaden uitschrijven...")
    written = write_new_files(text)
    for w in written:
        print(f"      OK {w}")

    print(f"[3/4] index.js bijwerken...")
    update_index_js()
    print(f"      OK 8 imports + 8 pad-entries")

    print(f"[4/4] Oud bestand verwijderen...")
    OLD_FILE.unlink()
    print(f"      OK {OLD_FILE.name} weg")

    print(f"\n[KLAAR] 8 leerpaden gegenereerd. Run nu npm run build om te checken.")

if __name__ == "__main__":
    main()

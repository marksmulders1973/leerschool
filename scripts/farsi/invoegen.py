"""Farsi stap 3: de vertalingen (batches/batch-*.fa.json) in de bronbestanden zetten.

Werkt per bestand van achter naar voren. Posities worden opnieuw bepaald (verzamel-logica opnieuw draaien) en de
vertaling wordt gekoppeld via (bestand, volgnummer binnen het bestand) — zo maken tussentijdse code-wijzigingen
in die bestanden niet uit, zolang er geen bg-sleutels bij of af zijn gekomen.
Gebruik: python scripts/farsi/invoegen.py [--droog]
"""
import json, os, re, sys, glob, subprocess
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
F = os.path.join(ROOT, "scripts", "farsi")
droog = "--droog" in sys.argv

oud = json.load(open(os.path.join(F, "items.json"), encoding="utf-8"))
oud_pos = json.load(open(os.path.join(F, "batches", "batch-9-origineel.json" if os.path.exists(os.path.join(F, "batches", "batch-9-origineel.json")) else "batch-9.json"), encoding="utf-8"))
vert = {}
for p in glob.glob(os.path.join(F, "batches", "batch-*.fa.json")):
    vert.update(json.load(open(p, encoding="utf-8")))

def ordinal_map(items):
    m, teller = {}, {}
    for it in items:
        f = it["id"].split("|")[1]; s = it["id"][0]
        k = (f, s if s == "S" else "ABC", teller.get((f, s if s == "S" else "ABC"), 0))
        teller[(f, s if s == "S" else "ABC")] = k[2] + 1
        m[k] = it["id"]
    return m

oud_map = {**ordinal_map(oud), **ordinal_map(oud_pos)}
# vers verzamelen
subprocess.run([sys.executable, os.path.join(F, "verzamel.py")], check=True, capture_output=True)
subprocess.run([sys.executable, os.path.join(F, "verzamel_positioneel.py")], check=True, capture_output=True)
nieuw = json.load(open(os.path.join(F, "items.json"), encoding="utf-8"))
nieuw_pos = json.load(open(os.path.join(F, "batches", "batch-9.json"), encoding="utf-8"))
nieuw_map = {**ordinal_map(nieuw), **ordinal_map(nieuw_pos)}
info = {it["id"]: it for it in nieuw}

def norm(s):
    # vertalers kregen soms ruwe broncode-escapes ("\n", "\'") te zien → terug naar echte tekens
    BS = chr(92)
    return s.replace(BS + "n", chr(10)).replace(BS + "'", "'").replace(BS + '"', '"')

def js_str(s, quote):
    s = norm(s)
    if quote == "`":
        return "`" + s.replace("\\", "\\\\").replace("`", "\\`") + "`"
    return json.dumps(s, ensure_ascii=False)

per_bestand = {}
mist = []
alleen_S = "--alleen-S" in sys.argv
for k, nid in nieuw_map.items():
    if alleen_S and k[1] != "S":
        continue
    oid = oud_map.get(k)
    if oid is None or oid not in vert:
        mist.append(nid); continue
    per_bestand.setdefault(k[0], []).append((nid, vert[oid]))

for f, lijst in per_bestand.items():
    pad = os.path.join(ROOT, f)
    t = open(pad, encoding="utf-8").read()
    for nid, fa in sorted(lijst, key=lambda x: -int(x[0].split("|")[2])):
        soort, _, pos = nid.split("|"); pos = int(pos)
        if soort == "S":
            # 6e argument eindigt op pos → ", <fa>" erachter, zelfde quote als het 6e argument
            q = t[pos - 1]
            t = t[:pos] + ", " + js_str(fa, "`" if q == "`" else '"') + t[pos:]
            continue
        it = info[nid]
        # sleutelstijl en opmaak van de bg-sleutel ervoor
        if soort == "A":
            # zoek begin van de bg-sleutel vóór de waarde
            waarde_start = t.rfind(it["quote"], 0, pos - 1)
            kstart = t.rfind("bg", 0, waarde_start)
        else:
            kstart = t.rfind("bg", 0, pos - len(it["bg_blok"]))
        sleutel = '"fa"' if t[kstart - 1] == '"' else "fa"
        regel_begin = t.rfind("\n", 0, kstart) + 1
        voorloop = t[regel_begin:kstart - (1 if sleutel == '"fa"' else 0)]
        multiline = voorloop.strip() == ""
        if soort == "A":
            waarde = js_str(fa, "`" if it["quote"] == "`" else '"')
        else:
            waarde = fa.strip()
        sep = (",\n" + voorloop) if multiline else ", "
        t = t[:pos] + sep + sleutel + ": " + waarde + t[pos:]
    if not droog:
        open(pad, "w", encoding="utf-8").write(t)
    print(f"{len(lijst):5d} ingevoegd  {f}")
print("ONTBREEKT:", len(mist))
for m in mist[:20]: print("  ", m)

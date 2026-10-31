"""Farsi (fa) toevoegen — stap 1: alle plekken verzamelen waar nu een Bulgaarse (bg) vertaling staat.
(Ali Danish, 31 okt 2026: "zou het mogelijk zijn om ook de Perzische taal (Farsi) toe te voegen?")

Drie soorten:
  A  zin-object   {en: "...", ar: "...", ..., bg: "..."}        → na bg een fa-regel invoegen
  B  taal-blok    bg: { sleutel: "...", ... }  (per component)   → na het bg-blok een fa-blok invoegen
  C  taal-lijst   bg: ["...", "..."]                             → na de bg-lijst een fa-lijst invoegen
Alleen objecten/blokken waar ook "ro" in staat (dan is het een taal en geen achtergrondkleur).
Schrijft scripts/farsi/items.json: [{id, file, soort, nl, en, ar, ...}] — de vertalers vullen "fa".
"""
import json, re, os, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
STR = r'"(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\'|`(?:[^`\\]|\\.)*`'
SLEUTEL = r'(?:"(?P<k1>[a-z]{2})"|\b(?P<k2>[a-z]{2}))\s*:\s*'

def bestanden():
    for basis in ["src", "api", "scripts"]:
        for d, _, fs in os.walk(os.path.join(ROOT, basis)):
            if "node_modules" in d or os.sep + "farsi" in d:
                continue
            for f in fs:
                if f.endswith((".js", ".jsx", ".mjs")):
                    yield os.path.join(d, f)

def eind_van(tekst, i, open_, sluit):
    """index net na de bij tekst[i] (= open_) horende sluit-haak, strings overslaand."""
    diepte = 0; j = i
    while j < len(tekst):
        c = tekst[j]
        if c in "\"'`":
            m = re.compile(STR, re.S).match(tekst, j)
            j = m.end(); continue
        if c == "/" and tekst[j:j + 2] == "//":
            j = tekst.index("\n", j); continue
        if c == open_: diepte += 1
        elif c == sluit:
            diepte -= 1
            if diepte == 0: return j + 1
        j += 1
    raise ValueError("geen sluithaak")

def omsluitend_object(tekst, i):
    """begin-index van de { waar positie i in zit."""
    diepte = 0; j = i
    while j >= 0:
        c = tekst[j]
        if c == "}": diepte += 1
        elif c == "{":
            if diepte == 0: return j
            diepte -= 1
        j -= 1
    return -1

def unq(s):
    try:
        return json.loads(s) if s.startswith('"') else s[1:-1]
    except Exception:
        return s[1:-1]

items = []
for pad in bestanden():
    tekst = open(pad, encoding="utf-8").read()
    if re.search(r'(?:"bg"|\bbg)\s*:', tekst) is None:
        continue
    rel = os.path.relpath(pad, ROOT).replace("\\", "/")
    for m in re.finditer(r'(?:"bg"|(?<![\w.$])bg)\s*:\s*', tekst):
        na = m.end(); c = tekst[na] if na < len(tekst) else ""
        if c in "\"'`":                                            # soort A
            sm = re.compile(STR, re.S).match(tekst, na)
            o = omsluitend_object(tekst, m.start())
            oe = eind_van(tekst, o, "{", "}")
            obj = tekst[o:oe]
            if not re.search(r'(?:"ro"|\bro)\s*:', obj):
                continue
            talen = {}
            for km in re.finditer(SLEUTEL + r'(' + STR + r')', obj, re.S):
                k = km.group("k1") or km.group("k2")
                if k in ("en", "ar", "uk", "tr", "ro", "bg", "nl"):
                    talen.setdefault(k, unq(km.group(3)))
            if re.search(r'(?:"fa"|\bfa)\s*:', obj):
                continue                                           # al gedaan
            # NL-context: sleutel vóór het object ("de tafel": {...}) of een zin/nl-veld
            voor = tekst[max(0, o - 400):o]
            nlm = re.search(r'(' + STR + r')\s*:\s*$', voor, re.S)
            nl = unq(nlm.group(1)) if nlm else talen.get("nl")
            items.append({"id": f"A|{rel}|{sm.end()}", "file": rel, "soort": "A", "na": sm.end(),
                          "quote": c, "nl": nl, **{k: v for k, v in talen.items() if k != "bg"}, "bg": talen.get("bg")})
        elif c in "{[":                                            # soort B / C
            sluit = "}" if c == "{" else "]"
            e = eind_van(tekst, na, c, sluit)
            blok = tekst[na:e]
            ouder_o = omsluitend_object(tekst, m.start())
            ouder = tekst[ouder_o:eind_van(tekst, ouder_o, "{", "}")]
            if not re.search(r'(?:"ro"|\bro)\s*:', ouder) or re.search(r'(?:"fa"|\bfa)\s*:', ouder):
                continue
            # het Engelse blok als bron
            em = re.search(r'(?:"en"|(?<![\w.$])en)\s*:\s*([\[{])', ouder)
            en_blok = None
            if em:
                s0 = ouder_o + em.start(1)
                en_blok = tekst[s0:eind_van(tekst, s0, em.group(1), "}" if em.group(1) == "{" else "]")]
            nlm = re.search(r'(?:"nl"|(?<![\w.$])nl)\s*:\s*([\[{])', ouder)
            nl_blok = None
            if nlm:
                s0 = ouder_o + nlm.start(1)
                nl_blok = tekst[s0:eind_van(tekst, s0, nlm.group(1), "}" if nlm.group(1) == "{" else "]")]
            ind = tekst[tekst.rfind("\n", 0, m.start()) + 1:m.start()]
            items.append({"id": f"{'B' if c == '{' else 'C'}|{rel}|{e}", "file": rel, "soort": "B" if c == "{" else "C",
                          "na": e, "inspring": ind, "nl_blok": nl_blok, "en_blok": en_blok, "bg_blok": blok})

json.dump(items, open(os.path.join(ROOT, "scripts", "farsi", "items.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
per = {}
for it in items:
    per.setdefault(it["file"], [0, 0]); per[it["file"]][0 if it["soort"] == "A" else 1] += 1
for f, (a, b) in sorted(per.items(), key=lambda x: -x[1][0]):
    print(f"{a:5d} zinnen  {b:2d} blokken  {f}")
print("TOTAAL", sum(v[0] for v in per.values()), "zinnen,", sum(v[1] for v in per.values()), "blokken")

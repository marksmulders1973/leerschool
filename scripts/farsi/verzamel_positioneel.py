"""Farsi stap 1b: positionele vertalingen S(en, ar, uk, tr, ro, bg) / S4(...) → pakket 9."""
import re, json, os
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
STR = r'"(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\'|`(?:[^`\\]|\\.)*`'
items = []
for f, fn in [("src/learnPaths/lettersKlankenNieuwkomers.js", "S"), ("src/learnPaths/woorden2Nieuwkomers.js", "S"), ("src/features/dictee/DicteePage.jsx", "S4")]:
    t = open(os.path.join(ROOT, f), encoding="utf-8").read()
    arg = r'\s*(' + STR + r')\s*'
    pat = re.compile(r'(?<![\w.])' + fn + r'\(' + ",".join([arg] * 6) + r'\)', re.S)
    for m in pat.finditer(t):
        voor = t[max(0, m.start() - 300):m.start()]
        km = re.search(r'(' + STR + r')\s*:\s*$', voor, re.S)
        items.append({"id": f"S|{f}|{m.end(6)}", "nl": km.group(1)[1:-1] if km else None,
                      "en": m.group(1)[1:-1], "ar": m.group(2)[1:-1]})
json.dump(items, open(os.path.join(ROOT, "scripts/farsi/batches/batch-9.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(items), "positionele items")

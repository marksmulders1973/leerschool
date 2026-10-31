"""Farsi stap 1d: ...S(en, ar, uk, tr, ro, bg) (met spread, gemist door stap 1b) → pakket 11 (+ --invoegen)."""
import re, json, os, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
STR = r'"(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\'|`(?:[^`\\]|\\.)*`'
arg = r'\s*(' + STR + r')\s*'
pat = re.compile(r'\.\.\.S\(' + ",".join([arg] * 6) + r'\)', re.S)
out = os.path.join(ROOT, "scripts/farsi/batches")
items, alle = [], {}
for f in ["src/learnPaths/lettersKlankenNieuwkomers.js", "src/learnPaths/woorden2Nieuwkomers.js", "src/features/dictee/DicteePage.jsx"]:
    s = open(os.path.join(ROOT, f), encoding="utf-8").read()
    ms = list(pat.finditer(s)); alle[f] = (s, ms)
    for n, m in enumerate(ms):
        nl = re.search(r'nl:\s*(' + STR + r')\s*,\s*$', s[max(0, m.start()-400):m.start()], re.S)
        items.append({"id": f"P|{f}|{n}", "nl": nl.group(1)[1:-1] if nl else None, "en": m.group(1)[1:-1], "ar": m.group(2)[1:-1]})
if "--invoegen" not in sys.argv:
    json.dump(items, open(os.path.join(out, "batch-11.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(len(items), "spread-items")
else:
    fa = json.load(open(os.path.join(out, "batch-11.fa.json"), encoding="utf-8"))
    for f, (s, ms) in alle.items():
        for n, m in reversed(list(enumerate(ms))):
            s = s[:m.end(6)] + ", " + json.dumps(fa[f"P|{f}|{n}"], ensure_ascii=False) + s[m.end(6):]
        open(os.path.join(ROOT, f), "w", encoding="utf-8").write(s); print(len(ms), "ingevoegd", f)

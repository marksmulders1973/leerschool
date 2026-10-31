"""Farsi stap 1c: r5(nl, en, ar, uk, tr, ro, bg) in nieuwkomersFoutUitleg.js → pakket 10 (+ invoegen met --invoegen)."""
import re, json, os, sys
ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
P = os.path.join(ROOT, "src/learnPaths/nieuwkomersFoutUitleg.js")
STR = r'"(?:[^"\\]|\\.)*"|\'(?:[^\'\\]|\\.)*\'|`(?:[^`\\]|\\.)*`'
arg = r'\s*(' + STR + r')\s*'
pat = re.compile(r'(?<![\w.])r5\(' + ",".join([arg] * 7) + r'\)', re.S)
s = open(P, encoding="utf-8").read()
ms = list(pat.finditer(s))
if "--invoegen" not in sys.argv:
    items = [{"id": f"R|{n}", "nl": m.group(1)[1:-1], "en": m.group(2)[1:-1], "ar": m.group(3)[1:-1]} for n, m in enumerate(ms)]
    json.dump(items, open(os.path.join(ROOT, "scripts/farsi/batches/batch-10.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(len(items), "r5-zinnen")
else:
    fa = json.load(open(os.path.join(ROOT, "scripts/farsi/batches/batch-10.fa.json"), encoding="utf-8"))
    for n, m in reversed(list(enumerate(ms))):
        t = fa[f"R|{n}"].replace("`", "\\`")
        s = s[:m.end(7)] + ", `" + t + "`" + s[m.end(7):]
    open(P, "w", encoding="utf-8").write(s)
    print(len(ms), "ingevoegd")

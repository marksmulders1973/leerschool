# 📈 Jaarlijn-staafdiagram voor het Meesterplan (Mark 10 sep 2026: "een staafdiagram
# van januari tot januari: wat een rustige tijd hoort te zijn, wat top-tijd is, en
# wat de bezoekersaantallen zijn geweest"). Leest jaarlijn-data.json, schrijft een
# inline-SVG en plakt die in het Meesterplan-HTML tussen <!-- JAARLIJN --> en
# <!-- /JAARLIJN --> (bestaat het blok niet, dan wordt het vóór het plan-blok gezet).
#
# Gebruik:  python docs/dagrapport-tools/jaarlijn.py <pad-naar-Meesterplan.html>
# Cijfers bijwerken: jaarlijn-data.json (bezoekers uit het hosting-dashboard zodra
# bekend, anders unieke apparaten uit events_echt met bron "app").
import io, json, os, sys

HIER = os.path.dirname(os.path.abspath(__file__))
data = json.load(io.open(os.path.join(HIER, "jaarlijn-data.json"), encoding="utf-8"))
M = data["maanden"]

KLEUR = {"top": "#fde2e1", "aanloop": "#fff3c4", "middel": "#e8f0fe", "rustig": "#eef5ef"}
LABEL = {"top": "TOP", "aanloop": "aanloop", "middel": "gemiddeld", "rustig": "rustig"}
W, H = 980, 300
L, R, T, B = 52, 16, 34, 58
bw = (W - L - R) / len(M)
maxv = max([m.get("bezoekers") or 0 for m in M] + [m.get("doel") or 0 for m in M] + [1])
maxv = int((maxv * 1.12) // 500 + 1) * 500
def y(v): return T + (H - T - B) * (1 - v / maxv)

s = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="100%" style="font-family:Segoe UI,Arial,sans-serif;display:block">']
# seizoensbanden
for i, m in enumerate(M):
    x = L + i * bw
    s.append(f'<rect x="{x:.1f}" y="{T}" width="{bw:.1f}" height="{H-T-B}" fill="{KLEUR[m["seizoen"]]}"/>')
# rasterlijnen
for v in range(0, maxv + 1, 500):
    s.append(f'<line x1="{L}" x2="{W-R}" y1="{y(v):.1f}" y2="{y(v):.1f}" stroke="#d7dee8" stroke-width="1"/>')
    s.append(f'<text x="{L-6}" y="{y(v)+4:.1f}" text-anchor="end" font-size="11" fill="#6b7280">{v}</text>')
# staven
for i, m in enumerate(M):
    x = L + i * bw
    bez = m.get("bezoekers"); doel = m.get("doel"); acc = m.get("accounts")
    if doel:
        s.append(f'<rect x="{x+bw*0.18:.1f}" y="{y(doel):.1f}" width="{bw*0.64:.1f}" height="{y(0)-y(doel):.1f}" fill="none" stroke="#7c3aed" stroke-width="1.5" stroke-dasharray="4 3"/>')
        s.append(f'<text x="{x+bw/2:.1f}" y="{y(doel)-4:.1f}" text-anchor="middle" font-size="10" fill="#7c3aed">doel {doel}</text>')
    if bez:
        kleur = "#146c43" if m.get("bron") == "host" else "#5aa77a"
        s.append(f'<rect x="{x+bw*0.18:.1f}" y="{y(bez):.1f}" width="{bw*0.64:.1f}" height="{y(0)-y(bez):.1f}" fill="{kleur}" rx="3"/>')
        s.append(f'<text x="{x+bw/2:.1f}" y="{y(bez)-4:.1f}" text-anchor="middle" font-size="11" font-weight="700" fill="#0f5132">{bez}{"*" if m.get("bron")=="app" else ""}</text>')
    if acc:
        ah = max(2, (y(0) - y(acc)))
        s.append(f'<rect x="{x+bw*0.62:.1f}" y="{y(0)-ah:.1f}" width="{bw*0.2:.1f}" height="{ah:.1f}" fill="#1e3a8a" rx="2"/>')
        s.append(f'<text x="{x+bw*0.72:.1f}" y="{y(0)-ah-3:.1f}" text-anchor="middle" font-size="9" fill="#1e3a8a">{acc}</text>')
    # maandlabel + seizoen + noot
    s.append(f'<text x="{x+bw/2:.1f}" y="{H-B+16}" text-anchor="middle" font-size="12" font-weight="700" fill="#1a2233">{m["label"]}{" 27" if m["m"].startswith("2027") else ""}</text>')
    s.append(f'<text x="{x+bw/2:.1f}" y="{H-B+29}" text-anchor="middle" font-size="9.5" fill="#6b7280">{LABEL[m["seizoen"]]}</text>')
    if m.get("noot"):
        s.append(f'<text x="{x+bw/2:.1f}" y="{H-B+41}" text-anchor="middle" font-size="8.5" fill="#8a94a6">{m["noot"]}</text>')
# as
s.append(f'<line x1="{L}" x2="{W-R}" y1="{y(0):.1f}" y2="{y(0):.1f}" stroke="#1a2233" stroke-width="1.2"/>')
# legenda
lx = L
for kleur, tekst in [("#146c43", "unieke bezoekers (hosting-dashboard)"), ("#5aa77a", "* unieke apparaten (eigen meting)"), ("#1e3a8a", "nieuwe accounts (echt)")]:
    s.append(f'<rect x="{lx}" y="{T-22}" width="12" height="12" fill="{kleur}" rx="2"/><text x="{lx+16}" y="{T-12}" font-size="10.5" fill="#1a2233">{tekst}</text>')
    lx += 16 + len(tekst) * 5.6 + 18
s.append(f'<rect x="{lx}" y="{T-22}" width="12" height="12" fill="none" stroke="#7c3aed" stroke-dasharray="3 2"/><text x="{lx+16}" y="{T-12}" font-size="10.5" fill="#1a2233">doel (voorstel)</text>')
s.append("</svg>")
svg = "\n".join(s)

blok = f'''<!-- JAARLIJN -->
<h2>📈 Jaarlijn — januari tot januari</h2>
<div class="card" style="padding:10px 12px">
  <div style="display:flex;gap:12px;flex-wrap:wrap;font-size:9pt;margin-bottom:6px">
    <span><span style="display:inline-block;width:12px;height:12px;background:{KLEUR["top"]};border:1px solid #e6b3b1;vertical-align:middle"></span> TOP: Doorstroomtoets (25 jan – 12 feb)</span>
    <span><span style="display:inline-block;width:12px;height:12px;background:{KLEUR["aanloop"]};border:1px solid #e6c65a;vertical-align:middle"></span> aanloop: nov–dec (oefenen begint, cadeaus)</span>
    <span><span style="display:inline-block;width:12px;height:12px;background:{KLEUR["middel"]};border:1px solid #bcd6f5;vertical-align:middle"></span> gemiddeld: mei (examens), sep–okt (schoolstart)</span>
    <span><span style="display:inline-block;width:12px;height:12px;background:{KLEUR["rustig"]};border:1px solid #cde3d6;vertical-align:middle"></span> rustig: mrt–apr (na de toets), jun–aug (zomer)</span>
  </div>
  {svg}
  <div class="muted" style="margin-top:6px">Lezen: de banden zijn het seizoen van de vraag (Doorstroomtoets-ouder), de groene staven wat er echt kwam, de blauwe staafjes de echte nieuwe accounts, de paarse stippellijn het voorstel-doel op weg naar de piek. Augustus was onze beste maand terwijl het seizoen rustig hoort te zijn: dat was outreach, geen seizoen. September staat t/m vandaag op eigen meting; het dashboard-cijfer volgt na de login.</div>
</div>
<!-- /JAARLIJN -->'''

if len(sys.argv) > 1:
    p = sys.argv[1]
    h = io.open(p, encoding="utf-8").read()
    a, b = h.find("<!-- JAARLIJN -->"), h.find("<!-- /JAARLIJN -->")
    if a >= 0 and b >= 0:
        h = h[:a] + blok + h[b + len("<!-- /JAARLIJN -->"):]
    else:
        anker = '<div class="plan">'
        i = h.find(anker); assert i > 0, "geen plan-blok gevonden"
        h = h[:i] + blok + "\n\n" + h[i:]
    io.open(p, "w", encoding="utf-8", newline="").write(h)
    print("jaarlijn geplaatst in", os.path.basename(p))
else:
    print(blok)

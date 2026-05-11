"""
Converteer logo doorstroomtoets.jpg naar PNG met transparante achtergrond.
Crop op een ronde maskerring: alleen de waterring + pijl zichtbaar,
de donkere marineblauwe achtergrond wordt transparant.

Strategie:
1. Open JPG (RGB).
2. Crop tot vierkant op de cirkel (verwijder ruime randen).
3. Zet alle pixels onder een luminantie-drempel op alpha=0 (donker → transparant).
4. Sla op als PNG.
"""
from PIL import Image
import sys
import os

SRC = r"C:\Users\mark-\Desktop\promostudiebol\logo doorstroomtoets.jpg"
DST = r"C:\Users\mark-\Desktop\Studiebol\leerschool\public\logo-doorstroomtoets.png"

# Open + RGBA conversie
img = Image.open(SRC).convert("RGBA")
print(f"Origineel formaat: {img.size}")

# Crop: de waterring zit ongeveer in de bovenste 60% van de afbeelding,
# horizontaal gecentreerd. We maken er een vierkant van.
w, h = img.size
# Schat: de cirkel is rond y=h*0.42, x=w*0.5, met diameter w*0.85
cx = w * 0.50
cy = h * 0.45
diameter = w * 0.90
left = int(cx - diameter / 2)
top = int(cy - diameter / 2)
right = int(cx + diameter / 2)
bottom = int(cy + diameter / 2)
img = img.crop((left, top, right, bottom))
print(f"Na crop: {img.size}")

# Luminantie-drempel: donkere pixels (donkerblauwe achtergrond) → transparant.
# Achtergrond is ~RGB(15,30,60). Waterring is helderder.
# Drempel: gemiddelde RGB < 50 → transparant. Tussen 50-90: zachte fade.
pixels = img.load()
W, H = img.size
for x in range(W):
    for y in range(H):
        r, g, b, a = pixels[x, y]
        avg = (r + g + b) // 3
        if avg < 30:
            pixels[x, y] = (0, 0, 0, 0)
        elif avg < 50:
            # zachte fade
            new_a = int(((avg - 30) / 20) * 255)
            pixels[x, y] = (r, g, b, new_a)
        # anders: pixel behouden zoals hij is

# Resize naar mooie display-grootte
img = img.resize((512, 512), Image.LANCZOS)

os.makedirs(os.path.dirname(DST), exist_ok=True)
img.save(DST, "PNG", optimize=True)
print(f"Opgeslagen: {DST}")
print(f"Grootte: {os.path.getsize(DST)} bytes")

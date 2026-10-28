# Klank-kandidaten maken met de gratis Microsoft-neurale stem (edge-tts), 28 okt 2026.
# Aanleiding: CSG De Waard (nieuwkomersonderwijs): "met klanken worden de letters uit het ABC
# gebruikt i.p.v. de klanken die wij aanleren (de 'tee' i.p.v. de t)". De browserstem kan geen
# losse klank zeggen. Fonetische SSML wordt door de dienst geweigerd (getest: NoAudioReceived),
# dus we laten de stem schijn-spellingen zeggen ("tə", "mmm") en Mark kiest per klank op gehoor
# de beste in scripts/klanken/kies.html (of neemt hem zelf op). Gekozen bestanden komen in
# public/audio/klanken/<klank>.mp3 + src/shared/klankenManifest.js.
#
# Gebruik:  python scripts/klanken/maak-kandidaten.py        (pip install edge-tts; ffmpeg op PATH)
import asyncio, os, subprocess, json, sys
import edge_tts

HIER = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HIER, "kandidaten")
os.makedirs(OUT, exist_ok=True)
STEMMEN = {"fenna": "nl-NL-FennaNeural", "maarten": "nl-NL-MaartenNeural"}

# klank -> schijn-spellingen (volgorde = mijn beste gok eerst)
KANDIDATEN = {
    # korte klinkers
    "a": ["ah", "a", "ɑ"], "e": ["eh", "e"], "i": ["ih", "i"], "o": ["oh", "o"], "u": ["uh", "u", "ʏ"],
    # lange klinkers
    "aa": ["aa", "aah"], "ee": ["ee", "eeh"], "oo": ["oo", "ooh"], "uu": ["uu", "uuh"],
    # tweetekenklanken
    "ie": ["ie", "iee"], "oe": ["oe", "oeh"], "eu": ["eu", "euh"], "ui": ["ui", "uih"],
    "ei": ["ei", "eih"], "ij": ["ij", "ei"], "au": ["au", "auw"], "ou": ["ou", "ouw"],
    # medeklinkers (stop-klanken met sjwa, rek-klanken verlengd)
    "b": ["bə", "buh", "be"], "d": ["də", "duh", "de"], "f": ["fff", "ff", "fə"], "g": ["ggg", "gə", "chchch"],
    "h": ["hhh", "hə", "huh"], "j": ["jjj", "jə", "juh"], "k": ["kə", "kuh", "ke"], "l": ["lll", "ll", "lə"],
    "m": ["mmm", "mm", "mə"], "n": ["nnn", "nn", "nə"], "p": ["pə", "puh", "pe"], "r": ["rrr", "rr", "rə"],
    "s": ["sss", "ss", "sə"], "t": ["tə", "tuh", "te"], "v": ["vvv", "vv", "və"], "w": ["www", "wə", "wuh"],
    "z": ["zzz", "zz", "zə"],
    # combinaties
    "ch": ["chchch", "ch", "gggch"], "ng": ["ngng", "ng", "ngə"], "nk": ["nk", "ngk"], "sch": ["sch", "schchch"],
}

async def maak(tekst, pad, stem):
    c = edge_tts.Communicate(tekst, stem, rate="-25%")
    await c.save(pad)

def knip_stilte(pad):
    # stilte voor en na weghalen + zacht normaliseren; overschrijft het bestand
    tmp = pad + ".tmp.mp3"
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", pad, "-af",
                    "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.12,areverse,loudnorm=I=-18:TP=-2",
                    "-ar", "44100", "-b:a", "96k", tmp], check=True)
    os.replace(tmp, pad)

async def main():
    lijst = []
    for klank, spellingen in KANDIDATEN.items():
        for i, sp in enumerate(spellingen):
            for stemnaam, stem in STEMMEN.items():
                fn = f"{klank}__{i+1}_{stemnaam}.mp3"
                pad = os.path.join(OUT, fn)
                if not os.path.exists(pad):
                    try:
                        await maak(sp, pad, stem)
                        knip_stilte(pad)
                    except Exception as e:
                        print("mislukt", fn, type(e).__name__, file=sys.stderr)
                        continue
                lijst.append({"klank": klank, "nr": i + 1, "stem": stemnaam, "spelling": sp, "bestand": fn})
                print("ok", fn)
    with open(os.path.join(OUT, "kandidaten.json"), "w", encoding="utf-8") as f:
        json.dump(lijst, f, ensure_ascii=False, indent=1)
    print("klaar:", len(lijst), "kandidaten")

asyncio.run(main())

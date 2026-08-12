import { useState, useEffect, useRef, useCallback } from "react";

/* ------------------------------------------------------------------
   Avatarkiezer met kleurregelaars (Mark's claude.ai-ontwerp, 12 aug).
   Elk avatar bestaat uit twee bestanden in public/avatars/kiezer/:
     <id>.jpg        = de tekening (200x200)
     <id>-masker.png = het gebiedenmasker: rood = haar, groen = huid,
                       blauw = ogen
   Het inkleuren gebeurt in een canvas: per gebied wordt de kleur
   vervangen, maar licht en schaduw uit de tekening blijven staan.
   Opslag loopt via de ouder-component (avatar.jsx-systeem), niet hier.
------------------------------------------------------------------- */

const MAP = "/avatars/kiezer/";

const AVATARS = [
  { id: "kai", alt: "jongen met donkerbruin haar", bereik: { hair: [15.4, 88.2], skin: [112.9, 196.1], iris: [0.6, 97.1] } },
  { id: "nora", alt: "meisje met lang steil haar", bereik: { hair: [5.9, 54.0], skin: [87.0, 183.0], iris: [0.0, 113.2] } },
  { id: "tijn", alt: "jongen met krullen", bereik: { hair: [2.4, 47.8], skin: [66.7, 143.5], iris: [0.0, 80.4] } },
  { id: "fleur", alt: "meisje met een staart", bereik: { hair: [71.9, 212.1], skin: [47.8, 218.8], iris: [1.0, 134.4] } },
  { id: "sara", alt: "meisje met lang golvend haar", bereik: { hair: [8.0, 105.4], skin: [65.2, 170.4], iris: [0.3, 96.0] } },
  { id: "bram", alt: "jongen met sproeten", bereik: { hair: [44.5, 148.9], skin: [124.1, 210.3], iris: [0.6, 137.0] } },
  { id: "mei", alt: "meisje met een bob en pony", bereik: { hair: [4.3, 66.6], skin: [119.5, 215.9], iris: [0.7, 115.7] } },
].map((a) => ({ ...a, src: `${MAP}${a.id}.jpg`, mask: `${MAP}${a.id}-masker.png` }));

const HAAR = [
  { naam: "Zoals getekend", hex: null },
  { naam: "Zwart", hex: "#16151A" },
  { naam: "Donkerbruin", hex: "#3B2519" },
  { naam: "Bruin", hex: "#6A452A" },
  { naam: "Kastanje", hex: "#8E4A2E" },
  { naam: "Rossig", hex: "#C2652C" },
  { naam: "Blond", hex: "#DFAE5C" },
  { naam: "Lichtblond", hex: "#EFD79A" },
  { naam: "Grijs", hex: "#C4C1BC" },
  { naam: "Roze", hex: "#E86AAE" },
  { naam: "Blauw", hex: "#4E8ED6" },
  { naam: "Mint", hex: "#4FC2A8" },
  { naam: "Paars", hex: "#9A6BD4" },
];

const HUID = [
  { naam: "Zoals getekend", hex: null },
  { naam: "Heel licht", hex: "#F6DCC4" },
  { naam: "Licht", hex: "#EFC7A2" },
  { naam: "Getint", hex: "#E0A97C" },
  { naam: "Midden", hex: "#C88B5E" },
  { naam: "Olijf", hex: "#A76B45" },
  { naam: "Bruin", hex: "#8A5334" },
  { naam: "Donkerbruin", hex: "#6B3E28" },
  { naam: "Diep", hex: "#4E2C1C" },
];

const OGEN = [
  { naam: "Zoals getekend", hex: null },
  { naam: "Donkerbruin", hex: "#4A2E1C" },
  { naam: "Bruin", hex: "#6B4423" },
  { naam: "Amber", hex: "#A9722F" },
  { naam: "Hazel", hex: "#7E7A46" },
  { naam: "Groen", hex: "#4F7D4A" },
  { naam: "Grijsblauw", hex: "#7B95A8" },
  { naam: "Blauw", hex: "#3A7BC8" },
];

const KLEUREN = [
  { id: "limoen", naam: "Limoen", hex: "#8CC63F" },
  { id: "lucht", naam: "Lucht", hex: "#4FA3E3" },
  { id: "koraal", naam: "Koraal", hex: "#FF7A59" },
  { id: "zon", naam: "Zon", hex: "#FFC24B" },
  { id: "lila", naam: "Lila", hex: "#A98BE0" },
];

const N = 200;

/* --- inkleuren --------------------------------------------------- */

const hex2rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));

function laadAfbeelding(src) {
  return new Promise((res, rej) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });
}

async function laadLagen(av) {
  const [tekening, masker] = await Promise.all([laadAfbeelding(av.src), laadAfbeelding(av.mask)]);
  const c = document.createElement("canvas");
  c.width = N; c.height = N;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(tekening, 0, 0, N, N);
  const basis = ctx.getImageData(0, 0, N, N).data;
  ctx.clearRect(0, 0, N, N);
  ctx.imageSmoothingEnabled = true;
  ctx.drawImage(masker, 0, 0, N, N);
  const mask = ctx.getImageData(0, 0, N, N).data;
  return { basis, mask };
}

// gebied: kanaal 0 = haar, 1 = huid, 2 = ogen
const GEBIEDEN = [
  { kanaal: 0, lo: 0.45, hi: 1.3, sleutel: "hair" },
  { kanaal: 1, lo: 0.45, hi: 1.25, sleutel: "skin" },
  { kanaal: 2, lo: 0.5, hi: 1.3, sleutel: "iris" },
];

function kleurIn(lagen, av, doelen) {
  const { basis, mask } = lagen;
  const uit = new Uint8ClampedArray(basis);
  const actief = GEBIEDEN.map((g, i) => {
    const hex = doelen[i];
    if (!hex) return null;
    const [p5, p95] = av.bereik[g.sleutel];
    return { ...g, rgb: hex2rgb(hex), p5, spanne: Math.max(p95 - p5, 1) };
  }).filter(Boolean);
  if (!actief.length) return uit;

  for (let p = 0; p < basis.length; p += 4) {
    const L = 0.299 * basis[p] + 0.587 * basis[p + 1] + 0.114 * basis[p + 2];
    for (const g of actief) {
      const a = mask[p + g.kanaal] / 255;
      if (a < 0.01) continue;
      let t = (L - g.p5) / g.spanne;
      t = t < 0 ? 0 : t > 1 ? 1 : t;
      const f = g.lo + (g.hi - g.lo) * t;
      for (let k = 0; k < 3; k++) {
        const doel = Math.min(255, g.rgb[k] * f);
        uit[p + k] = uit[p + k] * (1 - a) + doel * a;
      }
    }
  }
  return uit;
}

/* --- vormgeving (Mark's artifact-stijl, fonts via app-tokens) ----- */

const CSS = `
.lkav {
  --navy:#14264D; --navy-zacht:#43547C; --papier:#EEF3FB; --wit:#fff; --lijn:#D6E0F0;
  font-family:var(--font-body,'Nunito',ui-sans-serif,system-ui,sans-serif); color:var(--navy);
  background:var(--papier); border-radius:18px; padding:18px 16px 22px; box-sizing:border-box;
}
.lkav *,.lkav *::before,.lkav *::after{box-sizing:border-box;}
.lkav-sub{margin:0 0 18px;font-size:14px;color:var(--navy-zacht);}

.lkav-voorbeeld{display:flex;align-items:center;gap:16px;background:var(--wit);
  border:1px solid var(--lijn);border-radius:20px;padding:16px;margin-bottom:22px;}
.lkav-groot{position:relative;width:132px;height:132px;flex:none;}
.lkav-kwartier{position:absolute;inset:0;border-radius:0 100% 0 0;
  transition:background-color .35s ease,transform .45s cubic-bezier(.2,.9,.3,1.2);}
.lkav-groot.puls .lkav-kwartier{transform:rotate(-8deg) scale(1.04);}
.lkav-groot canvas{position:absolute;left:8%;top:8%;width:84%;height:84%;border-radius:50%;
  background:var(--wit);border:3px solid var(--wit);}
.lkav-vt h3{font-family:var(--font-display,'Fredoka',sans-serif);font-weight:600;font-size:18px;margin:0 0 4px;}
.lkav-vt p{margin:0;font-size:14px;color:var(--navy-zacht);}

.lkav-label{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;
  color:var(--navy-zacht);margin:0 0 10px;}
.lkav-raster{display:grid;grid-template-columns:repeat(auto-fill,minmax(76px,1fr));gap:10px;
  margin:0 0 22px;padding:0;list-style:none;}
.lkav-tegel{position:relative;width:100%;aspect-ratio:1/1;padding:0;border:2px solid transparent;
  border-radius:18px;background:var(--wit);cursor:pointer;overflow:hidden;
  transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease;}
.lkav-tegel .lkav-vorm{position:absolute;left:10%;top:10%;width:80%;height:80%;border-radius:0 100% 0 0;
  opacity:.9;transition:transform .35s cubic-bezier(.2,.9,.3,1.2),background-color .3s ease;}
.lkav-tegel img{position:absolute;left:12%;top:12%;width:76%;height:76%;object-fit:cover;
  border-radius:50%;border:3px solid var(--wit);background:var(--wit);}
.lkav-tegel:hover{transform:translateY(-3px);box-shadow:0 8px 18px rgba(20,38,77,.13);}
.lkav-tegel:focus-visible{outline:3px solid var(--navy);outline-offset:3px;}
.lkav-tegel[aria-pressed="true"]{border-color:var(--navy);box-shadow:0 8px 20px rgba(20,38,77,.18);}
.lkav-tegel[aria-pressed="true"] .lkav-vorm{transform:rotate(-10deg) scale(1.06);}
.lkav-vink{position:absolute;right:6px;bottom:6px;width:22px;height:22px;border-radius:50%;
  background:var(--navy);color:#fff;font-size:13px;font-weight:700;display:grid;place-items:center;}

.lkav-regelaars{background:var(--wit);border:1px solid var(--lijn);border-radius:20px;
  padding:16px 16px 4px;margin:0 0 22px;}
.lkav-rij{margin:0 0 18px;}
.lkav-rijkop{display:flex;align-items:center;justify-content:space-between;gap:12px;margin:0 0 8px;}
.lkav-rijkop span:first-child{font-family:var(--font-display,'Fredoka',sans-serif);font-size:15px;font-weight:600;}
.lkav-waarde{display:inline-flex;align-items:center;gap:7px;font-size:13px;color:var(--navy-zacht);}
.lkav-stip{width:15px;height:15px;border-radius:50%;border:2px solid var(--lijn);}
.lkav-stip.leeg{background:repeating-linear-gradient(45deg,#fff,#fff 3px,#D6E0F0 3px,#D6E0F0 6px);}
.lkav-schuif{width:100%;accent-color:#14264D;height:26px;cursor:pointer;}
.lkav-schuif:focus-visible{outline:3px solid var(--navy);outline-offset:4px;}

.lkav-kleuren{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 22px;padding:0;list-style:none;}
.lkav-swatch{width:42px;height:42px;border-radius:0 100% 0 0;border:3px solid transparent;
  cursor:pointer;padding:0;transition:transform .18s ease,border-color .18s ease;}
.lkav-swatch:hover{transform:scale(1.08);}
.lkav-swatch:focus-visible{outline:3px solid var(--navy);outline-offset:3px;}
.lkav-swatch[aria-pressed="true"]{border-color:var(--navy);transform:scale(1.08);}

.lkav-acties{display:flex;flex-wrap:wrap;gap:12px;align-items:center;}
.lkav-knop{font-family:var(--font-display,'Fredoka',sans-serif);font-size:15px;font-weight:600;border-radius:999px;
  padding:12px 22px;cursor:pointer;border:2px solid var(--navy);
  transition:transform .15s ease,background-color .2s ease;}
.lkav-knop:active{transform:scale(.97);}
.lkav-knop:focus-visible{outline:3px solid var(--navy);outline-offset:3px;}
.lkav-primair{background:var(--navy);color:#fff;}
.lkav-primair.klaar{background:#8CC63F;border-color:#8CC63F;color:var(--navy);}
.lkav-secundair{background:transparent;color:var(--navy);}
.lkav-melding{font-size:13.5px;color:var(--navy-zacht);margin:12px 0 0;min-height:18px;}

@media (max-width:420px){ .lkav-voorbeeld{flex-direction:column;align-items:flex-start;} }
@media (prefers-reduced-motion:reduce){ .lkav *{transition:none!important;animation:none!important;} }
`;

/* --- component ---------------------------------------------------- */

// waarde  = eerder bewaarde keuze { avatarId, kleurId, haar, huid, ogen } of null
// onBewaar(keuze, beeldDataUrl, kleurHex) — ouder slaat op (avatar.jsx-systeem)
export default function AvatarKleurKiezer({ waarde, onBewaar }) {
  const [avatarId, setAvatarId] = useState(waarde?.avatarId || AVATARS[0].id);
  const [kleurId, setKleurId] = useState(waarde?.kleurId || KLEUREN[0].id);
  const [haar, setHaar] = useState(waarde?.haar ?? 0);
  const [huid, setHuid] = useState(waarde?.huid ?? 0);
  const [ogen, setOgen] = useState(waarde?.ogen ?? 0);
  const [opgeslagen, setOpgeslagen] = useState(!!waarde);
  const [melding, setMelding] = useState(waarde ? "Je vorige keuze staat klaar." : "");
  const [puls, setPuls] = useState(false);
  const canvasRef = useRef(null);
  const lagenRef = useRef({});
  const eerste = useRef(true);

  const avatar = AVATARS.find((a) => a.id === avatarId) || AVATARS[0];
  const kleur = KLEUREN.find((k) => k.id === kleurId) || KLEUREN[0];

  const teken = useCallback(async () => {
    const doek = canvasRef.current;
    if (!doek) return;
    let lagen = lagenRef.current[avatar.id];
    if (!lagen) {
      try {
        lagen = await laadLagen(avatar);
      } catch {
        return; // plaatje (nog) niet bereikbaar — volgende poging bij wissel
      }
      lagenRef.current[avatar.id] = lagen;
    }
    const data = kleurIn(lagen, avatar, [HAAR[haar].hex, HUID[huid].hex, OGEN[ogen].hex]);
    const ctx = doek.getContext("2d");
    ctx.putImageData(new ImageData(data, N, N), 0, 0);
  }, [avatar, haar, huid, ogen]);

  useEffect(() => { teken(); }, [teken]);

  useEffect(() => {
    if (eerste.current) { eerste.current = false; return; }
    setOpgeslagen(false);
    setPuls(true);
    const t = setTimeout(() => setPuls(false), 400);
    return () => clearTimeout(t);
  }, [avatarId, kleurId, haar, huid, ogen]);

  const verrasMij = () => {
    const kies = (n) => Math.floor(Math.random() * n);
    setAvatarId(AVATARS[kies(AVATARS.length)].id);
    setKleurId(KLEUREN[kies(KLEUREN.length)].id);
    setHaar(1 + kies(HAAR.length - 1));
    setHuid(1 + kies(HUID.length - 1));
    setOgen(1 + kies(OGEN.length - 1));
    setMelding("");
  };

  const bewaar = () => {
    try {
      const beeld = canvasRef.current?.toDataURL("image/jpeg", 0.88);
      if (!beeld) throw new Error("geen canvas");
      onBewaar?.({ avatarId, kleurId, haar, huid, ogen }, beeld, kleur.hex);
      setOpgeslagen(true);
      setMelding("Opgeslagen. Deze avatar zie je overal in Leerkwartier.");
    } catch {
      setMelding("Opslaan lukte niet. Probeer het zo nog eens.");
    }
  };

  const regelaar = (titel, lijst, waardeIx, zet) => (
    <div className="lkav-rij">
      <label className="lkav-rijkop" htmlFor={"lkav-" + titel}>
        <span>{titel}</span>
        <span className="lkav-waarde">
          <span
            className={"lkav-stip" + (lijst[waardeIx].hex ? "" : " leeg")}
            style={lijst[waardeIx].hex ? { background: lijst[waardeIx].hex } : undefined}
            aria-hidden="true"
          />
          {lijst[waardeIx].naam}
        </span>
      </label>
      <input
        id={"lkav-" + titel}
        className="lkav-schuif"
        type="range"
        min={0}
        max={lijst.length - 1}
        step={1}
        value={waardeIx}
        onChange={(e) => { zet(Number(e.target.value)); setMelding(""); }}
      />
    </div>
  );

  return (
    <div className="lkav">
      <style>{CSS}</style>
      <p className="lkav-sub">Kies een gezicht en schuif daarna naar de kleur van je haar, huid en ogen.</p>

      <div className="lkav-voorbeeld">
        <div className={"lkav-groot" + (puls ? " puls" : "")}>
          <span className="lkav-kwartier" style={{ background: kleur.hex }} aria-hidden="true" />
          <canvas ref={canvasRef} width={N} height={N} role="img"
            aria-label={`Jouw avatar: ${avatar.alt}, haar ${HAAR[haar].naam.toLowerCase()}, huid ${HUID[huid].naam.toLowerCase()}, ogen ${OGEN[ogen].naam.toLowerCase()}`} />
        </div>
        <div className="lkav-vt">
          <h3>Zo zie jij eruit</h3>
          <p>{avatar.alt}</p>
        </div>
      </div>

      <p className="lkav-label" id="lkav-gezichten">Gezichten</p>
      <ul className="lkav-raster" aria-labelledby="lkav-gezichten">
        {AVATARS.map((a) => {
          const gekozen = a.id === avatarId;
          return (
            <li key={a.id}>
              <button type="button" className="lkav-tegel" aria-pressed={gekozen} aria-label={a.alt}
                onClick={() => { setAvatarId(a.id); setMelding(""); }}>
                <span className="lkav-vorm" style={{ background: kleur.hex }} aria-hidden="true" />
                <img src={a.src} alt="" loading="lazy" />
                {gekozen && <span className="lkav-vink" aria-hidden="true">✓</span>}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="lkav-regelaars">
        {regelaar("Haar", HAAR, haar, setHaar)}
        {regelaar("Huid", HUID, huid, setHuid)}
        {regelaar("Ogen", OGEN, ogen, setOgen)}
      </div>

      <p className="lkav-label" id="lkav-achtergrond">Achtergrond</p>
      <ul className="lkav-kleuren" aria-labelledby="lkav-achtergrond">
        {KLEUREN.map((k) => (
          <li key={k.id}>
            <button type="button" className="lkav-swatch" style={{ background: k.hex }}
              aria-pressed={k.id === kleurId} aria-label={"Achtergrond " + k.naam}
              onClick={() => { setKleurId(k.id); setMelding(""); }} />
          </li>
        ))}
      </ul>

      <div className="lkav-acties">
        <button type="button" className={"lkav-knop lkav-primair" + (opgeslagen ? " klaar" : "")} onClick={bewaar}>
          {opgeslagen ? "Opgeslagen ✓" : "Dit ben ik"}
        </button>
        <button type="button" className="lkav-knop lkav-secundair" onClick={verrasMij}>Verras me</button>
      </div>
      <p className="lkav-melding" role="status">{melding}</p>
    </div>
  );
}

// ══════════════════════════════════════════════════════════════════════
// Reclameclip 1 — drie varianten van 20 s voor Facebook/Instagram Reels
// (okt 2026, storyboard: docs/reclame/STORYBOARD-clip-1.md).
//
// Volledig deterministisch, zonder externe diensten of internet:
//   1. elke scène is HTML/SVG; window.render(t) zet het beeld op tijdstip t
//      (geen CSS-transities, dus elk frame is exact herhaalbaar);
//   2. headless Chromium (Playwright) fotografeert 600 frames (20 s × 30 fps);
//   3. een kleine synth in Node schrijft het deuntje als wav;
//   4. ffmpeg maakt er H.264 + AAC van: clip-vN.mp4 (met muziek) en
//      clip-vN-stil.mp4 (stil audiospoor, voor de eigen ingesproken stem).
//
//   node scripts/reclameclip/maak-clip-1.mjs          → alle drie de varianten
//   node scripts/reclameclip/maak-clip-1.mjs v2       → alleen variant 2
//
// Nodig: playwright-core (of playwright) + Chromium, en ffmpeg in het PATH.
//   CHROMIUM_PATH=/pad/naar/chrome   eigen browser (anders Playwright-standaard)
//   FFMPEG=/pad/naar/ffmpeg          eigen ffmpeg
// Lettertypen: Noto Sans + Noto Sans Arabic (Linux: apt install fonts-noto-core).
//
// Uitvoer in public/reclame/: clip-vN.mp4, clip-vN-stil.mp4, clip-vN-eindkaart.png
// ══════════════════════════════════════════════════════════════════════
import { spawn, execFileSync } from "node:child_process";
import { mkdirSync, readFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { tmpdir } from "node:os";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const UIT = join(ROOT, "public", "reclame");
const WERK = join(tmpdir(), "leerkwartier-clip-1");
const FFMPEG = process.env.FFMPEG || "ffmpeg";
const B = 1080, H = 1920, FPS = 30, DUUR = 20;
const FRAMES = DUUR * FPS;
mkdirSync(UIT, { recursive: true });
mkdirSync(WERK, { recursive: true });

let chromium;
try { ({ chromium } = await import("playwright-core")); } catch { ({ chromium } = await import("playwright")); }

function zoekChromium() {
  if (process.env.CHROMIUM_PATH) return process.env.CHROMIUM_PATH;
  const kandidaat = "/opt/pw-browsers/chromium-1194/chrome-linux/chrome";
  return existsSync(kandidaat) ? kandidaat : undefined;
}

// ── Merk ──────────────────────────────────────────────────────────────
const LOGO = `data:image/jpeg;base64,${readFileSync(join(ROOT, "public", "logo.jpg")).toString("base64")}`;
const SLOGAN = "Een kwartier per dag leren, een leven lang slimmer.";

// ══════════════════════════════════════════════════════════════════════
// Muziek: rustig deuntje in F-groot, 76 bpm, geen drums.
// Lagen: zachte akkoord-pad, getokkelde arpeggio, eenvoudige melodie, bas.
// ══════════════════════════════════════════════════════════════════════
function maakMuziek(pad) {
  const SR = 44100, N = SR * DUUR;
  const L = new Float64Array(N), R = new Float64Array(N);
  const tel = 60 / 76; // seconden per tel
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  // Akkoorden per 4 tellen (MIDI-grondtonen + drieklank)
  const akk = { F: [53, 57, 60], Dm: [50, 53, 57], Bb: [46, 50, 53], C: [48, 52, 55], Gm: [43, 46, 50] };
  const schema = ["F", "Dm", "Bb", "C", "F", "Gm", "F"]; // laatste klinkt uit
  const toon = (t0, freq, dur, amp, pan, soort) => {
    const i0 = Math.floor(t0 * SR), n = Math.min(Math.floor(dur * SR), N - i0);
    for (let i = 0; i < n; i++) {
      const t = i / SR;
      let env, s;
      if (soort === "pluk") {
        env = Math.min(1, t / 0.006) * Math.exp(-t / 0.55);
        s = Math.sin(2 * Math.PI * freq * t) + 0.25 * Math.sin(4 * Math.PI * freq * t) * Math.exp(-t / 0.12);
      } else if (soort === "pad") {
        env = Math.min(1, t / 0.9) * Math.min(1, (dur - t) / 1.2);
        s = Math.sin(2 * Math.PI * freq * t) + 0.6 * Math.sin(2 * Math.PI * freq * 1.003 * t) + 0.15 * Math.sin(6 * Math.PI * freq * t);
      } else if (soort === "bas") {
        env = Math.min(1, t / 0.02) * Math.exp(-t / 1.4);
        s = Math.sin(2 * Math.PI * freq * t);
      } else { // melodie: zacht fluitje
        env = Math.min(1, t / 0.08) * Math.exp(-t / 1.1);
        s = Math.sin(2 * Math.PI * freq * t) + 0.08 * Math.sin(2 * Math.PI * freq * 2 * t);
      }
      const v = s * env * amp;
      L[i0 + i] += v * (1 - pan) ; R[i0 + i] += v * pan;
    }
  };
  schema.forEach((naam, k) => {
    const t0 = 0.25 + k * 4 * tel;
    if (t0 >= DUUR) return;
    const [a, b, c] = akk[naam];
    const laatste = k === schema.length - 1;
    const lengte = laatste ? DUUR - t0 : 4 * tel + 0.6;
    for (const m of [a + 12, b + 12, c + 12]) toon(t0, hz(m), lengte, 0.045, 0.5, "pad");
    toon(t0, hz(a - 12), laatste ? lengte : 4 * tel, 0.16, 0.5, "bas");
    // arpeggio: grondtoon-terts-kwint-terts, per tel (laatste maat: één akkoord)
    const arp = laatste ? [a + 24, b + 24, c + 24] : [a + 24, b + 24, c + 24, b + 24];
    arp.forEach((m, j) => toon(t0 + j * (laatste ? 0.12 : tel), hz(m), laatste ? 3.5 : 1.6, 0.07, j % 2 ? 0.62 : 0.38, "pluk"));
  });
  // Melodie: [tel-index vanaf start, MIDI, duur in tellen] — rustig, stapsgewijs
  const melodie = [
    [0, 72, 2], [2, 74, 2], [4, 72, 2], [6, 69, 2], [8, 70, 2], [10, 69, 1], [11, 67, 1],
    [12, 67, 2], [14, 69, 2], [16, 72, 2], [18, 74, 1], [19, 72, 1], [20, 70, 2], [22, 69, 2], [24, 65, 2],
  ];
  for (const [b0, m, d] of melodie) toon(0.25 + b0 * tel, hz(m), d * tel + 0.8, 0.075, 0.5, "mel");
  // Master: in- en uitfaden, normaliseren op −8 dBFS (ruimte voor stem eroverheen)
  let piek = 0;
  for (let i = 0; i < N; i++) {
    const t = i / SR;
    const g = Math.min(1, t / 0.4) * Math.min(1, (DUUR - t) / 1.6);
    L[i] *= g; R[i] *= g;
    piek = Math.max(piek, Math.abs(L[i]), Math.abs(R[i]));
  }
  const schaal = piek > 0 ? Math.pow(10, -8 / 20) / piek : 1;
  const buf = Buffer.alloc(44 + N * 4);
  buf.write("RIFF", 0); buf.writeUInt32LE(36 + N * 4, 4); buf.write("WAVE", 8);
  buf.write("fmt ", 12); buf.writeUInt32LE(16, 16); buf.writeUInt16LE(1, 20); buf.writeUInt16LE(2, 22);
  buf.writeUInt32LE(SR, 24); buf.writeUInt32LE(SR * 4, 28); buf.writeUInt16LE(4, 32); buf.writeUInt16LE(16, 34);
  buf.write("data", 36); buf.writeUInt32LE(N * 4, 40);
  for (let i = 0; i < N; i++) {
    buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, L[i] * schaal)) * 32767), 44 + i * 4);
    buf.writeInt16LE(Math.round(Math.max(-1, Math.min(1, R[i] * schaal)) * 32767), 46 + i * 4);
  }
  writeFileSync(pad, buf);
}

// ══════════════════════════════════════════════════════════════════════
// Scènes. Veilige zone: y 200–1480. De onderste 440 px blijven leeg voor
// ondertitels van de ingesproken stem (en de Reels-knoppen).
// ══════════════════════════════════════════════════════════════════════
const CSS = `
*{margin:0;padding:0;box-sizing:border-box}
:root{--navy:#0b2540;--navy2:#123457;--lime:#86c21f;--wit:#ffffff;--zacht:rgba(255,255,255,.72);--oranje:#f2a33a}
html,body{width:${B}px;height:${H}px;overflow:hidden}
body{background:radial-gradient(ellipse at 50% 30%,#14375c 0%,var(--navy) 62%);color:var(--wit);
  font-family:'Noto Sans',sans-serif;-webkit-font-smoothing:antialiased}
.abs{position:absolute;left:0;right:0}
.c{text-align:center}
.minilogo{position:absolute;top:200px;left:50%;width:150px;height:150px;margin-left:-75px;border-radius:34px;overflow:hidden}
.minilogo img,.grootlogo img{width:100%;height:100%;display:block}
.kaart{position:absolute;left:80px;right:80px;background:#fff;color:var(--navy);border-radius:40px;padding:56px 60px;
  box-shadow:0 24px 60px rgba(0,0,0,.35)}
.pil{display:inline-block;padding:14px 34px;border-radius:999px;background:rgba(134,194,31,.16);color:var(--lime);
  font-size:38px;font-weight:700;letter-spacing:.5px}
b,.vet{font-weight:700}
.eind .grootlogo{position:absolute;top:300px;left:50%;width:400px;height:400px;margin-left:-200px;border-radius:90px;overflow:hidden;
  box-shadow:0 30px 80px rgba(0,0,0,.4)}
.eind .slogan{top:790px;font-size:62px;font-weight:700;line-height:1.3;padding:0 90px}
.eind .site{top:1130px;font-size:92px;font-weight:700;color:var(--lime)}
.eind .gratis{top:1290px;font-size:46px;color:var(--zacht)}
`;

// Gedeelde hulpjes in de pagina (alles puur een functie van t)
const HULP = `
const cl=x=>Math.max(0,Math.min(1,x));
const ease=x=>{x=cl(x);return x*x*(3-2*x)};
const inF=(t,a,d=.5)=>ease((t-a)/d);
const tussen=(t,a,b,d=.5)=>inF(t,a,d)*(1-inF(t,b-d,d));
const $=id=>document.getElementById(id);
function zet(id,o,y=0,s=1){const e=$(id);e.style.opacity=o;e.style.transform='translateY('+((1-Math.min(1,o*1.0001))*y)+'px) scale('+s+')';e.style.visibility=o<=0.001?'hidden':'visible'}
function eindkaart(t,start){
  const o=inF(t,start,.7);
  zet('eind',o);
  zet('e-logo',inF(t,start+.1,.7),40);
  zet('e-slogan',inF(t,start+.6,.7),40);
  zet('e-site',inF(t,start+1.3,.7),40);
  zet('e-gratis',inF(t,start+1.9,.7),40);
  return o;
}
`;
const EIND_HTML = `
<div id="eind" class="abs eind" style="top:0;bottom:0">
  <div id="e-logo" class="grootlogo"><img src="${LOGO}" alt="Leerkwartier"></div>
  <div id="e-slogan" class="abs c slogan">${SLOGAN}</div>
  <div id="e-site" class="abs c site">leerkwartier.app</div>
  <div id="e-gratis" class="abs c gratis">Gratis, zonder account, zonder reclame.</div>
</div>`;
const MINILOGO = `<div id="minilogo" class="minilogo"><img src="${LOGO}" alt=""></div>`;

// ── V1 "Vraag" — procentenPo.js, stap 4, eerste check (nagerekend:
//    25% van €80 = €80 : 4 = €20 korting; €80 − €20 = €60 betalen) ──
const V1 = {
  id: "v1", naam: "Vraag", eindStart: 15.5,
  html: `${MINILOGO}
  <div id="a" class="abs" style="top:0;bottom:0">
    <div id="a-pil" class="abs c" style="top:420px"><span class="pil">Rekenen · groep 7 en 8</span></div>
    <div id="a-vraag" class="kaart" style="top:530px;font-size:58px;line-height:1.35">
      Een schoen kost normaal <b>€&nbsp;80</b>.<br>Je krijgt <b>25% korting</b>.<br><span style="color:#2a6fb0"><b>Hoeveel betaal je?</b></span>
    </div>
    ${["€ 60", "€ 20", "€ 40", "€ 75"].map((o, i) => `
    <div id="opt${i}" style="position:absolute;top:${980 + Math.floor(i / 2) * 190}px;left:${i % 2 ? 560 : 80}px;width:440px;height:160px;
      border-radius:32px;background:var(--navy2);border:4px solid rgba(255,255,255,.18);display:flex;align-items:center;justify-content:center;
      font-size:64px;font-weight:700">${o}</div>`).join("")}
    <div id="tik" style="position:absolute;left:780px;top:1060px;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;
      border:8px solid #fff"></div>
    <div id="a-hint" class="abs c" style="top:1370px;font-size:44px;color:var(--oranje);font-weight:700;padding:0 80px">
      Dat is de korting. Hoeveel betaal je?</div>
  </div>
  <div id="b" class="abs" style="top:0;bottom:0">
    <div id="b-kop" class="abs c" style="top:410px;font-size:44px;color:var(--zacht)">€&nbsp;80 · 25% korting · hoeveel betaal je?</div>
    <div id="b-titel" class="abs c" style="top:490px;font-size:66px;font-weight:700">Zo zit het</div>
    ${[
      ["Wat vraagt de som?", "Wat je <b>betaalt</b>. Niet hoeveel korting je krijgt."],
      ["Reken de korting uit", "25% is een kwart. <b>€&nbsp;80&nbsp;:&nbsp;4 = €&nbsp;20</b> korting."],
      ["Haal de korting eraf", "<b>€&nbsp;80 − €&nbsp;20 = €&nbsp;60</b>. Dat betaal je."],
    ].map(([kop, tekst], i) => `
    <div id="stap${i}" style="position:absolute;left:80px;right:80px;top:${620 + i * 245}px;height:215px;background:#fff;color:var(--navy);
      border-radius:32px;display:flex;align-items:center;padding:0 40px;gap:34px">
      <div style="flex:none;width:96px;height:96px;border-radius:50%;background:var(--lime);color:var(--navy);display:flex;align-items:center;
        justify-content:center;font-size:54px;font-weight:700">${i + 1}</div>
      <div><div style="font-size:42px;font-weight:700;margin-bottom:8px">${kop}</div><div style="font-size:42px;line-height:1.3">${tekst}</div></div>
    </div>`).join("")}
    <div id="b-goed" class="abs c" style="top:1370px">
      <span style="display:inline-flex;align-items:center;gap:22px;background:var(--lime);color:var(--navy);border-radius:999px;padding:18px 48px;
        font-size:56px;font-weight:700">
        <svg width="54" height="54" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="#0b2540" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
        Het antwoord is €&nbsp;60</span>
    </div>
  </div>
  ${EIND_HTML}`,
  render: `
  const eo=eindkaart(t,15.5);
  zet('minilogo',1-eo);
  const A=1-inF(t,6.0,.6);
  zet('a',A);
  zet('a-pil',inF(t,0,.5),30);
  zet('a-vraag',inF(t,.1,.6),50);
  for(let i=0;i<4;i++) zet('opt'+i,inF(t,1.3+i*.35,.5),40);
  // tik op € 20 (fout) op 3.6 s
  const tk=tussen(t,3.4,4.3,.25); const tikEl=$('tik'); tikEl.style.opacity=tk*.9;
  tikEl.style.transform='scale('+(0.6+0.6*cl((t-3.4)/.9))+')';
  const fout=inF(t,3.75,.3); const o1=$('opt1');
  o1.style.background='rgb('+Math.round(18+(140-18)*fout)+','+Math.round(52+(70-52)*fout)+','+Math.round(87+(40-87)*fout)+')';
  o1.style.borderColor=fout>.5?'var(--oranje)':'rgba(255,255,255,.18)';
  zet('a-hint',inF(t,4.1,.5),20);
  zet('b',inF(t,6.2,.6)*(1-eo));
  zet('b-kop',inF(t,6.3,.6),20); zet('b-titel',inF(t,6.5,.6),20);
  for(let i=0;i<3;i++) zet('stap'+i,inF(t,7.2+i*2.0,.6),50);
  zet('b-goed',inF(t,13.3,.6),30,1+.04*Math.sin(cl((t-13.3)/1.2)*Math.PI));
  `,
};

// ── V2 "Ouder" ──
const KLOK_R = 300;
const V2 = {
  id: "v2", naam: "Ouder", eindStart: 15.5,
  html: `${MINILOGO}
  <div id="a" class="abs" style="top:0;bottom:0">
    <div id="r0" class="abs c" style="top:520px;font-size:76px;line-height:1.25;padding:0 80px">Oefenboeken kosten<br><b>€&nbsp;30</b>.</div>
    <div id="r1" class="abs c" style="top:820px;font-size:76px;line-height:1.25;padding:0 80px">Bijles kost<br><b>€&nbsp;37 per uur</b>.</div>
    <div id="r2" class="abs c" style="top:1150px;font-size:104px;font-weight:700;color:var(--lime)">Dit is gratis.</div>
  </div>
  <div id="k" class="abs" style="top:0;bottom:0">
    <div id="k-kop" class="abs c" style="top:440px;font-size:66px;font-weight:700">Elke dag een kwartier.</div>
    <svg id="klok" style="position:absolute;left:${B / 2 - KLOK_R - 20}px;top:590px" width="${2 * KLOK_R + 40}" height="${2 * KLOK_R + 40}"
      viewBox="${-KLOK_R - 20} ${-KLOK_R - 20} ${2 * KLOK_R + 40} ${2 * KLOK_R + 40}">
      <circle r="${KLOK_R}" fill="#fff"/>
      <path id="taart" fill="var(--lime)" d=""/>
      ${Array.from({ length: 60 }, (_, i) => {
        const a = (i / 60) * 2 * Math.PI, lang = i % 5 === 0;
        const r1 = KLOK_R - (lang ? 44 : 22), r2 = KLOK_R - 10;
        return `<line x1="${(r1 * Math.sin(a)).toFixed(1)}" y1="${(-r1 * Math.cos(a)).toFixed(1)}" x2="${(r2 * Math.sin(a)).toFixed(1)}"
          y2="${(-r2 * Math.cos(a)).toFixed(1)}" stroke="#0b2540" stroke-opacity="${lang ? .85 : .35}" stroke-width="${lang ? 8 : 4}" stroke-linecap="round"/>`;
      }).join("")}
      <line id="wijzer" x1="0" y1="0" x2="0" y2="${-(KLOK_R - 60)}" stroke="#0b2540" stroke-width="12" stroke-linecap="round"/>
      <circle r="20" fill="#0b2540"/>
    </svg>
    <div id="k-min" class="abs c" style="top:1265px;font-size:60px;font-weight:700"></div>
    <div id="k-klaar" class="abs c" style="top:1370px;font-size:48px;color:var(--zacht)">Klaar voor vandaag. Morgen weer.</div>
  </div>
  ${EIND_HTML}`,
  render: `
  const eo=eindkaart(t,15.5);
  zet('minilogo',1-eo);
  zet('a',1-inF(t,8.6,.6));
  zet('r0',inF(t,0,.6),50); zet('r1',inF(t,3.1,.7),50);
  zet('r2',inF(t,5.9,.7),50,1+.03*Math.sin(cl((t-5.9)/1.4)*Math.PI));
  zet('k',inF(t,9.0,.6)*(1-eo));
  zet('k-kop',inF(t,9.1,.6),30);
  const f=ease((t-9.8)/4.0);             // 0 → 1 = 0 → 15 minuten
  const hoek=f*Math.PI/2, r=${KLOK_R - 10};
  const x=r*Math.sin(hoek), y=-r*Math.cos(hoek);
  $('taart').setAttribute('d', f<=0.0001 ? '' : 'M0 0 L0 '+(-r)+' A'+r+' '+r+' 0 0 1 '+x.toFixed(2)+' '+y.toFixed(2)+' Z');
  $('wijzer').setAttribute('transform','rotate('+(f*90).toFixed(3)+')');
  zet('k-min',inF(t,9.4,.5),20); $('k-min').textContent=Math.round(f*15)+' minuten';
  zet('k-klaar',inF(t,14.0,.6),20);
  `,
};

// ── V3 "Nieuwkomers" — nieuwkomersZinnen.js, zin "wc" (vertaling.ar) ──
const WOORDEN = ["Mag", "ik", "naar", "de", "wc?"];
const V3 = {
  id: "v3", naam: "Nieuwkomers", eindStart: 15.5,
  html: `${MINILOGO}
  <div id="a" class="abs" style="top:0;bottom:0">
    <div id="a-pil" class="abs c" style="top:430px"><span class="pil">Zinnen voor in de klas</span></div>
    <div id="a-kaart" class="kaart c" style="top:560px;padding:80px 50px 70px">
      <div style="font-size:84px;font-weight:700;line-height:1.3;white-space:nowrap">
        ${WOORDEN.map((w, i) => `<span id="w${i}" style="display:inline-block;padding:0 12px;border-radius:22px;margin:6px 0">${w}</span>`).join("")}
      </div>
      <div style="height:4px;background:rgba(11,37,64,.1);margin:46px 40px 34px"></div>
      <div id="a-arlabel" style="font-size:34px;color:rgba(11,37,64,.55);font-weight:700;letter-spacing:.5px">Arabisch</div>
      <div id="a-ar" dir="rtl" lang="ar" style="font-family:'Noto Sans Arabic','Noto Naskh Arabic',sans-serif;font-size:64px;margin-top:14px;line-height:1.5">هل يمكنني الذهاب إلى الحمّام؟</div>
    </div>
    <div id="a-tempo" class="abs c" style="top:1290px;font-size:50px;color:var(--zacht)">Woord voor woord, in je eigen tempo.</div>
  </div>
  <div id="n" class="abs" style="top:0;bottom:0">
    <div id="n-kop" class="abs c" style="top:600px;font-size:92px;font-weight:700;line-height:1.25;padding:0 80px">
      Ook voor kinderen die <span style="color:var(--lime)">net in Nederland</span> zijn</div>
    <div id="n-talen" class="abs c" style="top:1080px;font-size:46px;line-height:1.45;color:var(--zacht);padding:0 110px">
      Met steun in het Arabisch, Oekraïens, Turks, Engels, Roemeens en Bulgaars.</div>
  </div>
  ${EIND_HTML}`,
  render: `
  const eo=eindkaart(t,15.5);
  zet('minilogo',1-eo);
  zet('a',1-inF(t,9.0,.6));
  zet('a-pil',inF(t,0,.5),30);
  zet('a-kaart',inF(t,.1,.6),50);
  // woord-voor-woord: woord i licht op vanaf 1.4 + i·0.8 s; daarna alles samen
  for(let i=0;i<${WOORDEN.length};i++){
    const s=1.4+i*.8, e=$('w'+i);
    const nu=tussen(t,s,s+.8,.15), geweest=inF(t,s+.6,.2), samen=inF(t,6.0,.4);
    e.style.background='rgba(134,194,31,'+nu+')';
    e.style.color=(t<s && samen<.5)?'rgba(11,37,64,.28)':'#0b2540';
    e.style.transform='scale('+(1+.08*nu)+')';
    e.style.boxShadow=samen>0?'inset 0 -10px 0 rgba(134,194,31,'+(.55*samen)+')':'none';
  }
  zet('a-arlabel',inF(t,1.0,.6));
  zet('a-ar',inF(t,1.0,.6),20);
  zet('a-tempo',inF(t,6.6,.6),20);
  zet('n',inF(t,9.4,.6)*(1-eo));
  zet('n-kop',inF(t,9.5,.7),50);
  zet('n-talen',inF(t,11.2,.7),30);
  `,
};

const VARIANTEN = [V1, V2, V3];

function paginaHtml(v) {
  return `<!doctype html><html lang="nl"><head><meta charset="utf-8"><style>${CSS}</style></head><body>
${v.html}
<script>${HULP}
window.render=function(t){${v.render}};
window.render(0);
</script></body></html>`;
}

function ff(args, invoer) {
  return new Promise((ok, fout) => {
    const p = spawn(FFMPEG, ["-hide_banner", "-loglevel", "error", "-y", ...args], { stdio: [invoer ? "pipe" : "ignore", "inherit", "inherit"] });
    p.on("error", fout);
    p.on("close", (c) => (c === 0 ? ok() : fout(new Error(`ffmpeg stopte met code ${c}`))));
    if (invoer) invoer(p.stdin);
  });
}

// ── Hoofdprogramma ────────────────────────────────────────────────────
const keuze = process.argv[2];
const teDoen = keuze ? VARIANTEN.filter((v) => v.id === keuze) : VARIANTEN;
if (!teDoen.length) { console.error(`Onbekende variant: ${keuze} (kies v1, v2 of v3)`); process.exit(1); }

const wav = join(WERK, "deuntje.wav");
maakMuziek(wav);
console.log("✓ deuntje geschreven");

const browser = await chromium.launch({ executablePath: zoekChromium(), headless: true });
const ctx = await browser.newContext({ viewport: { width: B, height: H }, deviceScaleFactor: 1 });
const page = await ctx.newPage();

for (const v of teDoen) {
  const htmlPad = join(WERK, `${v.id}.html`);
  writeFileSync(htmlPad, paginaHtml(v));
  await page.goto(pathToFileURL(htmlPad).href);
  await page.evaluate(async () => {
    await document.fonts.load("700 40px 'Noto Sans'");
    await document.fonts.load("400 40px 'Noto Sans'");
    await document.fonts.load("400 40px 'Noto Sans Arabic'", "هل");
    await document.fonts.ready;
  });

  // Proefbeelden: PROEF="1,4.5,9" schrijft alleen losse frames naar de werkmap
  if (process.env.PROEF) {
    for (const t of process.env.PROEF.split(",").map(Number)) {
      await page.evaluate((x) => window.render(x), t);
      await page.screenshot({ path: join(process.env.PROEF_DIR || WERK, `${v.id}-t${t}.png`) });
    }
    continue;
  }

  const beeld = join(WERK, `${v.id}-beeld.mp4`);
  const t0 = Date.now();
  await ff(["-f", "image2pipe", "-framerate", String(FPS), "-c:v", "png", "-i", "-",
    "-c:v", "libx264", "-preset", "slow", "-crf", "20", "-pix_fmt", "yuv420p", "-profile:v", "high", "-r", String(FPS), beeld],
  async (stdin) => {
    for (let f = 0; f < FRAMES; f++) {
      await page.evaluate((t) => window.render(t), f / FPS);
      const png = await page.screenshot({ type: "png" });
      if (!stdin.write(png)) await new Promise((r) => stdin.once("drain", r));
    }
    stdin.end();
  });
  console.log(`✓ ${v.id} beeld: ${FRAMES} frames in ${((Date.now() - t0) / 1000).toFixed(0)} s`);

  // Eindkaart als los beeld (laatste frame, alles in beeld)
  await page.evaluate((t) => window.render(t), DUUR - 0.5);
  await page.screenshot({ path: join(UIT, `clip-${v.id}-eindkaart.png`), type: "png" });

  const uitMet = join(UIT, `clip-${v.id}.mp4`), uitStil = join(UIT, `clip-${v.id}-stil.mp4`);
  await ff(["-i", beeld, "-i", wav, "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "160k",
    "-t", String(DUUR), "-movflags", "+faststart", uitMet]);
  await ff(["-i", beeld, "-f", "lavfi", "-i", "anullsrc=r=44100:cl=stereo", "-map", "0:v", "-map", "1:a", "-c:v", "copy",
    "-c:a", "aac", "-b:a", "96k", "-t", String(DUUR), "-movflags", "+faststart", uitStil]);
  console.log(`✓ ${v.id} klaar: ${uitMet} + ${uitStil}`);
}

await browser.close();
if (!process.env.PROEF) rmSync(WERK, { recursive: true, force: true });
console.log("Klaar.");

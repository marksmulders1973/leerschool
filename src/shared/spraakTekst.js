// Maakt buddy-tekst geschikt voor speechSynthesis. De browserstem leest emoji's
// letterlijk voor ("🐕" → "hond", bug Brian 15 jul 2026) en verhaspelt
// afkortingen als "vs". In de tekstballon blijft de originele tekst staan;
// alleen wat wordt VOORGELEZEN gaat door deze filter.
// ── Meelezen (Mark 15 jul) ──────────────────────────────────────────
// Voor karaoke-meelezen: koppel de GESPROKEN tekst (zonder emoji's/markdown)
// terug aan de GETOONDE woorden. Elk niet-witruimte-token krijgt een
// woord-index; tokens die na schoonmaak leeg zijn (bv. een losse emoji)
// worden niet uitgesproken en dus nooit belicht.
// ── Bedragen menselijk uitspreken (Mark 31 aug 2026) ────────────────
// De browserstem leest "€1,50" voor als "euro één punt vijftig"; een mens zegt
// "één euro vijftig". We zetten euro-bedragen vóór het spreken om naar woorden.
// ALLEEN bedragen met een euro-teken of het woord "euro" worden aangepakt — een
// kaal getal als "1,50" blijft "één komma vijftig" (juist correct voor een
// decimaal in een rekenles). Draait binnen schoonVoorSpraak, dus de woord-
// telling voor het meelezen blijft kloppen en op het scherm blijft "€1,50" staan.
const ONDER_TWINTIG = ["nul", "één", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien", "elf", "twaalf", "dertien", "veertien", "vijftien", "zestien", "zeventien", "achttien", "negentien"];
const TIENTALLEN = ["", "", "twintig", "dertig", "veertig", "vijftig", "zestig", "zeventig", "tachtig", "negentig"];

function tweeCijfersNaarWoord(n) {
  if (n < 20) return ONDER_TWINTIG[n];
  const t = Math.floor(n / 10), e = n % 10;
  if (e === 0) return TIENTALLEN[t];
  // In samenstellingen "een" i.p.v. "één" (eenentwintig); trema bij twee/drie.
  const eenheid = e === 1 ? "een" : ONDER_TWINTIG[e];
  const verbinding = e === 2 || e === 3 ? "ën" : "en";
  return eenheid + verbinding + TIENTALLEN[t];
}

function drieCijfersNaarWoord(n) {
  if (n < 100) return tweeCijfersNaarWoord(n);
  const h = Math.floor(n / 100), r = n % 100;
  const honderdtal = h === 1 ? "honderd" : ONDER_TWINTIG[h] + "honderd";
  return r === 0 ? honderdtal : honderdtal + tweeCijfersNaarWoord(r);
}

function getalNaarWoord(n) {
  n = Math.floor(Math.abs(n));
  if (n < 1000) return drieCijfersNaarWoord(n);
  if (n < 1000000) {
    const d = Math.floor(n / 1000), r = n % 1000;
    const duizendtal = d === 1 ? "duizend" : drieCijfersNaarWoord(d) + "duizend";
    return r === 0 ? duizendtal : duizendtal + drieCijfersNaarWoord(r);
  }
  return String(n); // zulke grote bedragen komen in de app niet voor
}

function bedragNaarWoord(euroDigits, centDigits) {
  const euro = parseInt(String(euroDigits).replace(/\./g, ""), 10) || 0;
  const cent = centDigits ? parseInt((centDigits + "0").slice(0, 2), 10) : 0;
  const euroWoord = euro === 1 ? "één" : getalNaarWoord(euro);
  const centWoord = cent === 1 ? "één" : getalNaarWoord(cent);
  if (euro === 0 && cent === 0) return "nul euro";
  if (euro === 0) return `${centWoord} cent`;   // €0,50 → "vijftig cent"
  if (cent === 0) return `${euroWoord} euro`;   // €2    → "twee euro"
  return `${euroWoord} euro ${centWoord}`;       // €1,50 → "één euro vijftig"
}

export function normaliseerBedragen(tekst) {
  return String(tekst ?? "")
    // €1,50 · € 1,50 · €1.000,25 · €2  (euro-teken vóór het getal)
    .replace(/€\s?(\d{1,3}(?:\.\d{3})*|\d+)(?:,(\d{1,2}))?/g,
      (_, euro, cent) => bedragNaarWoord(euro, cent))
    // 1,50 euro · 2 euro  (het woord "euro" ná het getal)
    .replace(/(\d{1,3}(?:\.\d{3})*|\d+)(?:,(\d{1,2}))?\s?euro\b/gi,
      (_, euro, cent) => bedragNaarWoord(euro, cent));
}

export function maakMeeleesPlan(tekst) {
  const tokens = String(tekst ?? "").split(/(\s+)/);
  let gesproken = "";
  const grenzen = []; // per gesproken woord: { start, eind, woordIdx }
  let woordIdx = -1;
  for (const t of tokens) {
    if (!t || /^\s+$/.test(t)) continue;
    woordIdx += 1;
    const s = schoonVoorSpraak(t);
    if (!s) continue;
    const start = gesproken ? gesproken.length + 1 : 0;
    gesproken = gesproken ? `${gesproken} ${s}` : s;
    grenzen.push({ start, eind: start + s.length, woordIdx });
  }
  return { gesproken, grenzen };
}

// ── Voorlezen mét meelezen — dé centrale spreekfunctie (v3, 15 jul) ──
// Sync-aanpak na Mark's feedback ("loopt achter"):
// 1. PER ZIN een eigen utterance → de highlight reset gegarandeerd bij elke
//    zin-start (utterance-onstart is overal betrouwbaar), dus de schatter
//    kan nooit ver wegdrijven. Omzeilt ook de Chrome-bug waarbij lange
//    utterances na ~15s stilvallen.
// 2. ZELF-KALIBRATIE: na elke zin meten we hoe lang de stem er écht over
//    deed en stellen het tempo (ms per teken) bij voor de volgende zin.
// 3. Lokale NL-stem krijgt voorrang (die stuurt wél échte woord-seintjes;
//    boundary-events nemen de schatter direct over).
// Geeft een stop-functie terug.
export function spreekMetMeelezen(tekst, { rate = 1, pitch = 1, onStart, onEnd, onWoord } = {}) {
  try {
    if (typeof window === "undefined" || !window.speechSynthesis) { onEnd && onEnd(); return () => {}; }
    const plan = maakMeeleesPlan(tekst);
    if (!plan.gesproken) { onEnd && onEnd(); return () => {}; }

    // knip de woord-grenzen op in zinnen
    const zinnen = [];
    let huidige = [];
    for (const g of plan.grenzen) {
      huidige.push(g);
      const w = plan.gesproken.slice(g.start, g.eind);
      if (/[.!?…]["')]?$/.test(w)) { zinnen.push(huidige); huidige = []; }
    }
    if (huidige.length) zinnen.push(huidige);

    const kiesStem = besteNlStem;

    let gestopt = false;
    let gestart = false;
    let timer = null;
    let klaarGeteld = 0;
    let ronde = 0; // herkansings-ronde; events van een oude (gecancelde) ronde tellen niet mee
    let tBegin = 0; // start van de huidige spreek-ronde (voor nep-klaar-detectie)
    let kaalGeprobeerd = false; // herkansing zónder expliciete stem al gedaan?
    let msPerTeken = 62 / rate; // startschatting; wordt per zin bijgesteld
    const stopTimer = () => { if (timer) { clearTimeout(timer); timer = null; } };
    const klaar = (gelukt = true) => { if (gestopt) return; gestopt = true; stopTimer(); stopWachters(); onEnd && onEnd(gelukt); };
    const uts = []; // referenties vasthouden (Chrome-GC laat anders events vallen)
    // Android-vangnet (bug Deianera 18 jul): wachters = timeouts voor herkansing + watchdog.
    let wachters = [];
    const stopWachters = () => { wachters.forEach(clearTimeout); wachters = []; };

    const spreek = (stem) => {
      if (gestopt) return;
      ronde += 1;
      const mijnRonde = ronde;
      klaarGeteld = 0;
      uts.length = 0;
      tBegin = performance.now();
      zinnen.forEach((grenzen) => {
      const van = grenzen[0].start;
      const tot = grenzen[grenzen.length - 1].eind;
      const zinTekst = plan.gesproken.slice(van, tot);
      const u = new SpeechSynthesisUtterance(zinTekst);
      // Taal van de GEKOZEN stem gebruiken (Mark 18 jul: stem-kiezer deed
      // niets) — mobiele engines kiezen de stem vooral op u.lang en negeren
      // u.voice; met hard "nl-NL" won altijd dezelfde standaardstem.
      u.lang = (stem && stem.lang) || "nl-NL";
      u.rate = rate; u.pitch = pitch;
      if (stem) u.voice = stem;
      let boundaryGezien = false;
      let tStart = 0;
      u.onstart = () => {
        if (gestopt || mijnRonde !== ronde) return;
        if (!gestart) { gestart = true; onStart && onStart(); }
        tStart = performance.now();
        stopTimer();
        if (!onWoord) return;
        let i = 0;
        const stap = () => {
          if (gestopt || boundaryGezien || i >= grenzen.length) return;
          onWoord(grenzen[i].woordIdx);
          const w = plan.gesproken.slice(grenzen[i].start, grenzen[i].eind);
          let ms = (w.length + 1) * msPerTeken;
          if (/[,;:]$/.test(w)) ms += 180; // adempauze midden in de zin
          timer = setTimeout(() => { i += 1; stap(); }, ms);
        };
        stap();
      };
      if (onWoord) {
        u.onboundary = (e) => {
          if (gestopt || mijnRonde !== ronde) return;
          boundaryGezien = true;
          stopTimer();
          const rel = e.charIndex || 0;
          let idx = grenzen[0].woordIdx;
          for (const g of grenzen) { if (rel >= g.start - van) idx = g.woordIdx; else break; }
          onWoord(idx);
        };
      }
      const zinKlaar = (gelukt) => {
        if (gestopt || mijnRonde !== ronde) return;
        if (gelukt) gestart = true; // onstart is niet overal betrouwbaar; een echt afgespeelde zin telt ook
        stopTimer();
        if (tStart && zinTekst.length > 4) {
          const gemeten = (performance.now() - tStart) / zinTekst.length;
          if (gemeten > 15 && gemeten < 400) msPerTeken = 0.5 * msPerTeken + 0.5 * gemeten;
        }
        klaarGeteld += 1;
        // Alles geweigerd zónder dat er ooit geluid was (Android "not-allowed"):
        // NIET meteen afsluiten — de herkansing + watchdog handelen dat af.
        if (klaarGeteld >= zinnen.length && gestart) {
          // Nep-klaar-detectie (bug Deianera 18 jul, ronde 2): sommige engines
          // (Samsung/WebView, of Google-TTS zonder NL-spraakdata) melden alle
          // zinnen direct "klaar" zonder ook maar iets uit te spreken. Is de
          // hele tekst sneller "voorgelezen" dan fysiek kan → één kale
          // herkansing zonder stem-keuze, daarna eerlijk falen (foutmelding).
          const duur = performance.now() - tBegin;
          const minimaal = Math.min(2500, plan.gesproken.length * 20);
          if (duur < minimaal) {
            if (!kaalGeprobeerd) {
              kaalGeprobeerd = true;
              gestart = false;
              try { window.speechSynthesis.cancel(); } catch { /* */ }
              spreek(null); // engine kiest zelf een stem o.b.v. u.lang
              return;
            }
            klaar(false);
            return;
          }
          klaar(true);
        }
      };
      u.onend = () => zinKlaar(true);
      u.onerror = () => zinKlaar(false);
      uts.push(u);
      window.speechSynthesis.speak(u);
      });

      // Android laat de engine soms in "paused"-stand achter → los duwtje.
      try { window.speechSynthesis.resume(); } catch { /* */ }
    };

    // BELANGRIJK (les v65→v66, Deianera): speak() MOET synchroon binnen de
    // klik gebeuren — een setTimeout ervoor breekt op Android de koppeling
    // met het tik-gebaar en dan weigert de browser het spreken (not-allowed).
    window.speechSynthesis.cancel();
    spreek(kiesStem(window.speechSynthesis.getVoices()));

    // Herkansing ~450ms: kwam er niets op gang (Android slikt speak-na-cancel
    // soms in, of de stemmenlijst was nog leeg)? Opnieuw — nog ruim binnen het
    // ±5s user-activation-venster, dus toegestaan.
    wachters.push(setTimeout(() => {
      if (gestopt || gestart || window.speechSynthesis.speaking) return;
      try { window.speechSynthesis.cancel(); } catch { /* */ }
      wachters.push(setTimeout(() => {
        if (gestopt || gestart || window.speechSynthesis.speaking) return;
        spreek(kiesStem(window.speechSynthesis.getVoices()));
      }, 150));
    }, 450));
    // Watchdog: na 4s nog steeds geen geluid → netjes opgeven met gelukt=false,
    // zodat de knop terugspringt en de UI kan melden dat voorlezen hier niet kan.
    wachters.push(setTimeout(() => {
      if (!gestopt && !gestart && !window.speechSynthesis.speaking) klaar(false);
    }, 4000));

    return () => {
      gestopt = true;
      stopTimer();
      stopWachters();
      uts.length = 0;
      try { window.speechSynthesis.cancel(); } catch { /* */ }
    };
  } catch { onEnd && onEnd(); return () => {}; }
}

// ── Stem-keuze (Mark 18 jul: "klinkt erg robotachtig, andere stem?") ──
// De lokale Android/Windows-stem is vaak de robot; netwerk-stemmen (Google,
// "natural/neural") klinken veel natuurlijker. Die krijgen nu voorrang.
// Karaoke-sync blijft werken: netwerk-stemmen sturen geen woord-seintjes,
// maar de zelf-kalibrerende schatter in spreekMetMeelezen vangt dat op.
// De gebruiker kan daarnaast zélf een stem kiezen (VoorleesBlok) — die
// keuze staat in localStorage en wint altijd van de automatische keuze.
const STEM_KEY = "lk_voorlees_stem_v1";

export function nlStemmen() {
  try {
    return (window.speechSynthesis?.getVoices() || [])
      .filter((v) => (v.lang || "").toLowerCase().startsWith("nl"));
  } catch { return []; }
}

export function gekozenStemNaam() {
  try { return localStorage.getItem(STEM_KEY) || ""; } catch { return ""; }
}

export function zetGekozenStem(naam) {
  try { naam ? localStorage.setItem(STEM_KEY, naam) : localStorage.removeItem(STEM_KEY); } catch { /* */ }
}

function scoreStem(v) {
  const n = (v.name || "").toLowerCase();
  let s = 0;
  if (/natural|neural|premium|enhanced|wavenet|online/.test(n)) s += 100;
  if (n.includes("google")) s += 40;
  if (!v.localService) s += 30; // netwerk-stem ≈ natuurlijker dan lokale robot
  if ((v.lang || "").toLowerCase() === "nl-nl") s += 10;
  if (v.default) s += 1;
  return s;
}

export function besteNlStem(stemmen) {
  const nl = (stemmen || []).filter((v) => (v.lang || "").toLowerCase().startsWith("nl"));
  if (!nl.length) return null;
  const wens = gekozenStemNaam();
  if (wens) {
    const zelf = nl.find((v) => v.name === wens);
    if (zelf) return zelf;
  }
  return [...nl].sort((a, b) => scoreStem(b) - scoreStem(a))[0];
}

// Welk getoond woord hoort bij deze tekenpositie in de gesproken tekst?
// (onboundary geeft charIndex terug in de utterance-tekst.)
export function woordIndexBijChar(plan, charIndex) {
  let res = -1;
  for (const g of plan.grenzen) {
    if (charIndex >= g.start) res = g.woordIdx;
    else break;
  }
  return res;
}

export function schoonVoorSpraak(tekst) {
  return normaliseerBedragen(String(tekst ?? ""))
    // markdown-tekens (bestond al in de losse speak()-functies)
    .replace(/[*_#`>]/g, "")
    // "vs"/"vs." klinkt als gebrabbel → spreek uit als "of" (reis vs rijst).
    // Alleen kleine letters: hoofdletter-VS = Verenigde Staten, die blijft.
    .replace(/\bvs\b\.?/g, "of")
    // pijlen leest de stem letterlijk voor ("naar rechts wijzende pijl",
    // bug Mark 18 jul) — overslaan; op het scherm blijven ze gewoon staan.
    // Let op: ≤ en ≥ juist NIET strippen, die horen bij rekenles.
    .replace(/<->|->|=>|<-|[→←↑↓⇒⇐⇔↔⟶⟵▶◀►◄➔➜]/g, " ")
    // emoji's en pictogrammen (dekt 🐕 😄 ✨ 🎡 enz.)
    .replace(/\p{Extended_Pictographic}/gu, "")
    // restjes: vlag-letters, huidskleur-tonen, keycap, variatie-selector, joiner
    .replace(/[\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}⃣️‍]/gu, "")
    .replace(/ {2,}/g, " ")
    .replace(/^[ \t]+|[ \t]+$/gm, "")
    .trim();
}

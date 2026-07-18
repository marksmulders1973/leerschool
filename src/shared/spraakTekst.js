// Maakt buddy-tekst geschikt voor speechSynthesis. De browserstem leest emoji's
// letterlijk voor ("🐕" → "hond", bug Brian 15 jul 2026) en verhaspelt
// afkortingen als "vs". In de tekstballon blijft de originele tekst staan;
// alleen wat wordt VOORGELEZEN gaat door deze filter.
// ── Meelezen (Mark 15 jul) ──────────────────────────────────────────
// Voor karaoke-meelezen: koppel de GESPROKEN tekst (zonder emoji's/markdown)
// terug aan de GETOONDE woorden. Elk niet-witruimte-token krijgt een
// woord-index; tokens die na schoonmaak leeg zijn (bv. een losse emoji)
// worden niet uitgesproken en dus nooit belicht.
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

    const kiesStem = (stemmen) => (stemmen || [])
      .filter((v) => (v.lang || "").toLowerCase().startsWith("nl"))
      .sort((a, b) => (b.localService === true) - (a.localService === true))[0] || null;

    let gestopt = false;
    let gestart = false;
    let timer = null;
    let klaarGeteld = 0;
    let msPerTeken = 62 / rate; // startschatting; wordt per zin bijgesteld
    const stopTimer = () => { if (timer) { clearTimeout(timer); timer = null; } };
    const klaar = () => { if (gestopt) return; gestopt = true; stopTimer(); stopWachters(); onEnd && onEnd(); };
    const uts = []; // referenties vasthouden (Chrome-GC laat anders events vallen)
    // Android-vangnet (bug Deianera 18 jul: "voorlezen start niet" op telefoon):
    // wachters = losse timeouts voor start-vertraging, stemmen-wachttijd en watchdog.
    let wachters = [];
    const stopWachters = () => { wachters.forEach(clearTimeout); wachters = []; };

    const spreek = (stem) => {
      if (gestopt) return;
      zinnen.forEach((grenzen) => {
      const van = grenzen[0].start;
      const tot = grenzen[grenzen.length - 1].eind;
      const zinTekst = plan.gesproken.slice(van, tot);
      const u = new SpeechSynthesisUtterance(zinTekst);
      u.lang = "nl-NL"; u.rate = rate; u.pitch = pitch;
      if (stem) u.voice = stem;
      let boundaryGezien = false;
      let tStart = 0;
      u.onstart = () => {
        if (gestopt) return;
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
          if (gestopt) return;
          boundaryGezien = true;
          stopTimer();
          const rel = e.charIndex || 0;
          let idx = grenzen[0].woordIdx;
          for (const g of grenzen) { if (rel >= g.start - van) idx = g.woordIdx; else break; }
          onWoord(idx);
        };
      }
      const zinKlaar = () => {
        if (gestopt) return;
        gestart = true; // onstart is op sommige Android-browsers onbetrouwbaar; onend telt ook als levensteken
        stopTimer();
        if (tStart && zinTekst.length > 4) {
          const gemeten = (performance.now() - tStart) / zinTekst.length;
          if (gemeten > 15 && gemeten < 400) msPerTeken = 0.5 * msPerTeken + 0.5 * gemeten;
        }
        klaarGeteld += 1;
        if (klaarGeteld >= zinnen.length) klaar();
      };
      u.onend = zinKlaar;
      u.onerror = zinKlaar;
      uts.push(u);
      window.speechSynthesis.speak(u);
      });

      // Android laat de engine soms in "paused"-stand achter → los duwtje.
      try { window.speechSynthesis.resume(); } catch { /* */ }
      wachters.push(setTimeout(() => {
        if (!gestopt && !gestart && !window.speechSynthesis.speaking) {
          try { window.speechSynthesis.resume(); } catch { /* */ }
        }
      }, 700));
      // Watchdog: komt er binnen 3,5s géén geluid op gang, geef dan netjes op
      // zodat de knop niet in de ⏹-stand blijft hangen zonder geluid.
      wachters.push(setTimeout(() => {
        if (!gestopt && !gestart && !window.speechSynthesis.speaking) klaar();
      }, 3500));
    };

    window.speechSynthesis.cancel();
    // Android-bug: speak() dírect na cancel() faalt stil — korte adempauze,
    // en wacht daarna zonodig op de asynchrone stemmenlijst (voiceschanged).
    wachters.push(setTimeout(() => {
      if (gestopt) return;
      const nu = window.speechSynthesis.getVoices();
      if (nu.length) { spreek(kiesStem(nu)); return; }
      let gedaan = false;
      const alsnog = () => {
        if (gedaan || gestopt) return;
        gedaan = true;
        spreek(kiesStem(window.speechSynthesis.getVoices()));
      };
      try { window.speechSynthesis.addEventListener("voiceschanged", alsnog, { once: true }); } catch { /* */ }
      wachters.push(setTimeout(alsnog, 400));
    }, 80));

    return () => {
      gestopt = true;
      stopTimer();
      stopWachters();
      uts.length = 0;
      try { window.speechSynthesis.cancel(); } catch { /* */ }
    };
  } catch { onEnd && onEnd(); return () => {}; }
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
  return String(tekst ?? "")
    // markdown-tekens (bestond al in de losse speak()-functies)
    .replace(/[*_#`>]/g, "")
    // "vs"/"vs." klinkt als gebrabbel → spreek uit als "of" (reis vs rijst).
    // Alleen kleine letters: hoofdletter-VS = Verenigde Staten, die blijft.
    .replace(/\bvs\b\.?/g, "of")
    // emoji's en pictogrammen (dekt 🐕 😄 ✨ 🎡 enz.)
    .replace(/\p{Extended_Pictographic}/gu, "")
    // restjes: vlag-letters, huidskleur-tonen, keycap, variatie-selector, joiner
    .replace(/[\u{1F1E6}-\u{1F1FF}\u{1F3FB}-\u{1F3FF}⃣️‍]/gu, "")
    .replace(/ {2,}/g, " ")
    .replace(/^[ \t]+|[ \t]+$/gm, "")
    .trim();
}

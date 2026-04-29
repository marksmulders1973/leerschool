// Procedurele audio engine voor OBLITERATOR V2 — Web Audio API, geen externe lib.
//
// Genereert tonen on-the-fly met OscillatorNode + GainNode. Goedkoop in
// bundle-size (< 1 KB) en in geheugen — geen audio-files te downloaden.
//
// AudioContext mag pas starten ná een user-gesture (browser-policy). De
// `unlock()` helper roept `resume()` aan op de eerste tap; daarna spelen
// alle sfx zonder verdere acties.

let ctx = null;
let masterGain = null;
let muted = false;

function ensureCtx() {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    try {
      const Ctor = window.AudioContext || window.webkitAudioContext;
      if (!Ctor) return null;
      ctx = new Ctor();
      masterGain = ctx.createGain();
      masterGain.gain.value = 0.4;
      masterGain.connect(ctx.destination);
    } catch {
      return null;
    }
  }
  return ctx;
}

/**
 * Roep dit aan vanuit de eerste user-tap. Browsers blokkeren AudioContext
 * tot ná een gesture; deze functie unlockt 'm zonder error.
 */
export function unlockAudio() {
  const c = ensureCtx();
  if (c && c.state === "suspended") {
    c.resume().catch(() => {});
  }
}

export function setMuted(value) {
  muted = !!value;
  if (masterGain) masterGain.gain.value = muted ? 0 : 0.4;
}

export function isMuted() {
  return muted;
}

// SFX-recepten. Elk = oscillator-config + envelope (frequency-slide + decay).
const SFX = {
  jump: {
    type: "square",
    freq: 440,
    slideTo: 220,
    dur: 0.06,
    volume: 0.15,
  },
  obliterate: {
    type: "sawtooth",
    freq: 200,
    slideTo: 900,
    dur: 0.22,
    volume: 0.32,
  },
  hit: {
    type: "square",
    freq: 100,
    slideTo: 60,
    dur: 0.32,
    volume: 0.35,
  },
  powerup: {
    type: "sine",
    freq: 600,
    slideTo: 1200,
    dur: 0.18,
    volume: 0.25,
  },
  level_up: {
    type: "triangle",
    freq: 500,
    slideTo: 1100,
    dur: 0.45,
    volume: 0.32,
  },
  game_over: {
    type: "sawtooth",
    freq: 400,
    slideTo: 80,
    dur: 0.6,
    volume: 0.36,
  },
  combo_tier: {
    type: "sine",
    freq: 800,
    slideTo: 1400,
    dur: 0.18,
    volume: 0.28,
  },
  collect: {
    type: "sine",
    freq: 1000,
    slideTo: 1400,
    dur: 0.08,
    volume: 0.18,
  },
  countdown: {
    type: "sine",
    freq: 700,
    slideTo: 700,
    dur: 0.1,
    volume: 0.25,
  },
  start: {
    type: "triangle",
    freq: 400,
    slideTo: 900,
    dur: 0.3,
    volume: 0.32,
  },
};

/**
 * Speel een sfx. Kan vanaf elk moment in de game worden aangeroepen.
 * Doet niets bij gemute, geen AudioContext, of onbekende sound-naam.
 */
export function playSound(name) {
  if (muted) return;
  const c = ensureCtx();
  if (!c || c.state !== "running") return;
  const cfg = SFX[name];
  if (!cfg) return;
  try {
    const osc = c.createOscillator();
    const gain = c.createGain();
    const t0 = c.currentTime;
    osc.type = cfg.type;
    osc.frequency.setValueAtTime(cfg.freq, t0);
    osc.frequency.exponentialRampToValueAtTime(
      Math.max(20, cfg.slideTo),
      t0 + cfg.dur
    );
    gain.gain.setValueAtTime(cfg.volume, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + cfg.dur);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(t0);
    osc.stop(t0 + cfg.dur + 0.02);
  } catch {
    // ignore — geluid is niet kritiek
  }
}

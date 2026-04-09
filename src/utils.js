// ─── Analytics helper ────────────────────────────────────────────
export function track(event, params = {}) {
  try { window.gtag?.("event", event, params); } catch (e) {}
}

// ─── Sound Engine ────────────────────────────────────────────────
export const SoundEngine = {
  ctx: null,
  getCtx() {
    if (!this.ctx) this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (this.ctx.state === "suspended") this.ctx.resume();
    return this.ctx;
  },
  play(type) {
    try {
      const ctx = this.getCtx(), now = ctx.currentTime;
      const make = (freq, t, dur, vol = 0.12, wave = "sine") => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination); o.type = wave; o.frequency.value = freq;
        g.gain.setValueAtTime(vol, now + t); g.gain.exponentialRampToValueAtTime(0.001, now + t + dur);
        o.start(now + t); o.stop(now + t + dur + 0.01);
      };
      if (type === "correct") [523,659,784].forEach((f,i) => make(f, i*0.1, 0.3, 0.15));
      else if (type === "wrong") { const o=ctx.createOscillator(),g=ctx.createGain(); o.connect(g);g.connect(ctx.destination);o.type="sawtooth";o.frequency.setValueAtTime(300,now);o.frequency.exponentialRampToValueAtTime(150,now+0.3);g.gain.setValueAtTime(0.1,now);g.gain.exponentialRampToValueAtTime(0.001,now+0.3);o.start(now);o.stop(now+0.35); }
      else if (type === "celebrate") [523,587,659,698,784,880,988,1047].forEach((f,i) => make(f, i*0.08, 0.25));
      else if (type === "countdown") make(600, 0, 0.15, 0.08);
      else if (type === "click") make(1200, 0, 0.03, 0.06);
    } catch(e) {}
  }
};

// ─── AI Question Generator ──────────────────────────────────────
export async function fetchAIQuestions(subject, level, count = 5, textbook = null, topic = null, signal = null) {
  const res = await fetch("/api/generate-questions", {
    method: "POST", headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject, level, count, textbook, topic }),
    signal,
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || `Server fout (${res.status})`);
  }
  const data = await res.json();
  if (!data.questions || data.questions.length === 0) throw new Error("Geen vragen ontvangen van de AI");
  return data.questions;
}

// ─── Utility functions ───────────────────────────────────────────
export const generateCode = () => {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  return Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
};

export const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const formatDate = (d) => {
  const date = new Date(d);
  const days = ["zo", "ma", "di", "wo", "do", "vr", "za"];
  const months = ["jan", "feb", "mrt", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  return `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]}`;
};

export const daysUntil = (d) => {
  const now = new Date();
  const target = new Date(d);
  return Math.ceil((target - now) / (1000 * 60 * 60 * 24));
};

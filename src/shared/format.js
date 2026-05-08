// Centrale format-helpers. Audit-2 v2 (2026-05-08) code-quality-agent
// identificeerde formatTime + scoreColor 8× gedupliceerd in PlayQuiz,
// CitoLeerpadToets, ResultsPage, OuderDashboard, StudentProgress.

// ── Tijd ──────────────────────────────────────────────────────────────

// "5:42" stijl — gebruikt in quiz-countdowns en oefen-Cito.
export function formatTime(secs) {
  const s = Math.max(0, Math.floor(Number(secs) || 0));
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${String(r).padStart(2, "0")}`;
}

// "2m 13s" stijl — gebruikt in resultaat-pagina's.
export function formatDurationVerbose(secs) {
  const s = Math.max(0, Math.floor(Number(secs) || 0));
  const m = Math.floor(s / 60);
  const r = s % 60;
  if (m === 0) return `${r}s`;
  return `${m}m ${r}s`;
}

// ── Score-kleur ───────────────────────────────────────────────────────

// Standaard 80% goed / 60% middel / <60% slecht. Returnt CSS-color string.
// Default-paletten passen bij brand-tokens; custom kleuren via opts.
export function scoreColor(pct, opts = {}) {
  const good = opts.good ?? "#00c853";
  const warm = opts.warm ?? "#ffd54f";
  const bad = opts.bad ?? "#ff5252";
  const goodTh = opts.goodThreshold ?? 80;
  const warmTh = opts.warmThreshold ?? 60;
  const n = Number(pct);
  if (!Number.isFinite(n)) return bad;
  if (n >= goodTh) return good;
  if (n >= warmTh) return warm;
  return bad;
}

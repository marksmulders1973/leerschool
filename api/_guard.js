// Audit-2 v2 (2026-05-08) security-agent #2: AI-endpoints zonder origin-
// of rate-check zijn een open API-key-drain voor scrapers. Deze guard
// blokkeert (a) requests zonder/met fout Origin-header (cross-domain
// curl) en (b) ruwe rate-limit per IP via in-memory map (60s window).
//
// Note: edge-runtime instances hebben elk hun eigen geheugen, dus een
// aanvaller die 5 instances raakt kan 5× zoveel doen. Dit is bewust
// goedkoop — een KV-store of Upstash Redis is de upgrade-pad als
// scraping echt een probleem wordt.

const ALLOWED_ORIGINS = [
  "https://leerkwartier.app",
  "https://www.leerkwartier.app",
  "https://leerkwartier.online",
  "https://leerkwartier.nl",
  "https://www.leerkwartier.nl",
  "https://studiebol.online",          // legacy redirect-domein
  "http://localhost:5173",              // vite dev
  "http://localhost:4173",              // vite preview
];

const RATE_WINDOW_MS = 60 * 1000;
const RATE_LIMIT = 10;                  // 10 calls / 60s / IP per instance
const rateMap = new Map();

function now() { return Date.now(); }

function getClientIp(req) {
  const xff = req.headers.get?.("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get?.("x-real-ip") || "unknown";
}

// Returnt null als alles OK is, anders een Response (status 4xx) die de
// handler direct kan teruggeven.
export function guardRequest(req) {
  const origin = req.headers.get?.("origin") || "";
  const referer = req.headers.get?.("referer") || "";
  const isAllowed = ALLOWED_ORIGINS.some((o) =>
    origin === o || referer.startsWith(o + "/")
  );
  if (!isAllowed) {
    return new Response(JSON.stringify({ error: "Forbidden origin" }), {
      status: 403,
      headers: { "Content-Type": "application/json" },
    });
  }

  const ip = getClientIp(req);
  const t = now();
  const entry = rateMap.get(ip) || { count: 0, resetAt: t + RATE_WINDOW_MS };
  if (t > entry.resetAt) {
    entry.count = 0;
    entry.resetAt = t + RATE_WINDOW_MS;
  }
  entry.count++;
  rateMap.set(ip, entry);
  if (entry.count > RATE_LIMIT) {
    const retryAfter = Math.ceil((entry.resetAt - t) / 1000);
    return new Response(JSON.stringify({ error: "Te veel verzoeken — even wachten" }), {
      status: 429,
      headers: {
        "Content-Type": "application/json",
        "Retry-After": String(retryAfter),
      },
    });
  }

  return null;
}

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

// Audit-1 QW6 (2026-05-13): daily cost-cap per AI-endpoint.
// Voorkomt €100+ verrassings-bill bij scraper-misbruik. Roept Supabase
// RPC `increment_ai_call_quota(p_endpoint)` aan die atomic count
// teruggeeft. Bij overschrijding → 503 zonder Anthropic-call.
//
// Limits (overridable via env-var):
//   MAX_TUTOR_CALLS_DAY=5000        (Haiku ~€0,005/call → max €25/dag)
//   MAX_GENERATE_CALLS_DAY=500      (web_search ~€0,025/call → max €12,50/dag)
//   MAX_PREVIEW_CALLS_DAY=1000
//
// Bij Supabase-config-missing of RPC-fout: stil door (geen quota = open
// gate). Beter functionerende app dan blokkade bij DB-down. Wel loggen.
const DEFAULT_LIMITS = {
  "tutor-chat": 5000,
  "generate-questions": 500,
  "preview-topic": 1000,
};

export async function dailyQuotaCheck(endpoint) {
  const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SERVICE_KEY) {
    console.warn(`[quota] config-missing, fail-open for ${endpoint}`);
    return null;
  }

  const envKey = `MAX_${endpoint.toUpperCase().replace(/-/g, "_")}_CALLS_DAY`;
  const limit = parseInt(process.env[envKey], 10) || DEFAULT_LIMITS[endpoint] || 1000;

  try {
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/rpc/increment_ai_call_quota`, {
      method: "POST",
      headers: {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ p_endpoint: endpoint }),
    });
    if (!resp.ok) {
      console.warn(`[quota] RPC failed ${resp.status}, fail-open for ${endpoint}`);
      return null;
    }
    const count = await resp.json();
    if (typeof count === "number" && count > limit) {
      console.warn(`[quota] LIMIT HIT ${endpoint}: ${count}/${limit}`);
      return new Response(
        JSON.stringify({
          error: "Daglimit AI-tutor bereikt — probeer morgen opnieuw of upgrade naar premium.",
          retryAfterHours: 24,
        }),
        {
          status: 503,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": String(60 * 60 * 6), // 6u — voorzichtige reset-hint
          },
        }
      );
    }
    return null;
  } catch (err) {
    console.warn(`[quota] error ${err.message}, fail-open for ${endpoint}`);
    return null;
  }
}

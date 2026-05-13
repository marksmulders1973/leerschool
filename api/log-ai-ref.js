// AI-referrer log endpoint (Mark request 2026-05-13).
// Accepteert {path, referrer, ua?} en logt alleen als de referrer of UA
// matcht met een bekende AI-bron. Filtert noise zodat de tabel niet
// volloopt met irrelevante pageviews.

export const config = { runtime: 'edge' };

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

// AI-crawler user-agent patterns (bot bezoekt zelf de site)
const AI_CRAWLERS = [
  { pattern: /GPTBot/i, source: 'chatgpt' },
  { pattern: /ChatGPT-User/i, source: 'chatgpt' },
  { pattern: /OAI-SearchBot/i, source: 'chatgpt' },
  { pattern: /ClaudeBot/i, source: 'claude' },
  { pattern: /Claude-Web/i, source: 'claude' },
  { pattern: /anthropic-ai/i, source: 'claude' },
  { pattern: /PerplexityBot/i, source: 'perplexity' },
  { pattern: /Perplexity-User/i, source: 'perplexity' },
  { pattern: /Google-Extended/i, source: 'gemini' },
  { pattern: /CCBot/i, source: 'commoncrawl' },
  { pattern: /meta-externalagent/i, source: 'meta' },
  { pattern: /Bytespider/i, source: 'bytedance' },
  { pattern: /Applebot-Extended/i, source: 'apple' },
];

// Referrer-hostnames (mens klikt door vanuit AI-chat)
const AI_REFERRER_HOSTS = {
  'chatgpt.com': 'chatgpt',
  'chat.openai.com': 'chatgpt',
  'claude.ai': 'claude',
  'perplexity.ai': 'perplexity',
  'www.perplexity.ai': 'perplexity',
  'gemini.google.com': 'gemini',
  'copilot.microsoft.com': 'copilot',
  'm365.cloud.microsoft': 'copilot',
};

function classifyUserAgent(ua) {
  if (!ua) return null;
  for (const { pattern, source } of AI_CRAWLERS) {
    if (pattern.test(ua)) return { source, isCrawler: true };
  }
  return null;
}

function classifyReferrer(refUrl) {
  if (!refUrl) return null;
  try {
    const host = new URL(refUrl).hostname.toLowerCase();
    if (AI_REFERRER_HOSTS[host]) {
      return { source: AI_REFERRER_HOSTS[host], isCrawler: false };
    }
  } catch (_) {}
  return null;
}

export default async function handler(req) {
  // Accepteer POST (fetch) en GET (sendBeacon kan beide doen, maar GET
  // met querystring is robuuster bij page-unload).
  if (req.method !== 'POST' && req.method !== 'GET') {
    return json({ error: 'Method not allowed' }, 405);
  }

  // Origin-check: alleen vanaf onze eigen domeinen + dev.
  // (Geen rate-limit hier — endpoint is leeg + classificatie is gratis.)
  const origin = req.headers.get?.('origin') || '';
  const allowedOrigins = [
    'https://leerkwartier.app',
    'https://www.leerkwartier.app',
    'https://studiebol.online',
    'http://localhost:5173',
    'http://localhost:4173',
  ];
  if (origin && !allowedOrigins.some(o => origin.startsWith(o))) {
    return json({ error: 'Forbidden' }, 403);
  }

  let payload = {};
  try {
    if (req.method === 'POST') {
      payload = await req.json();
    } else {
      const url = new URL(req.url);
      payload = {
        path: url.searchParams.get('p') || '/',
        referrer: url.searchParams.get('r') || '',
      };
    }
  } catch (_) {
    return json({ error: 'Invalid payload' }, 400);
  }

  const path = String(payload.path || '/').slice(0, 200);
  const referrer = String(payload.referrer || '').slice(0, 500);
  // User-agent uit de request-header (autoritair), niet uit payload.
  const userAgent = req.headers.get?.('user-agent') || '';

  // Classificeer: eerst UA (crawler) dan referrer (mens via chat).
  const uaMatch = classifyUserAgent(userAgent);
  const refMatch = classifyReferrer(referrer);

  if (!uaMatch && !refMatch) {
    // Geen AI-bron — niet loggen (filter noise).
    return json({ logged: false });
  }

  const aiSource = (uaMatch || refMatch).source;
  const isCrawler = !!uaMatch;
  const referrerHost = (() => {
    try { return referrer ? new URL(referrer).hostname : null; } catch (_) { return null; }
  })();

  // Supabase service-role insert (omzeilt RLS — alleen wij hebben deze key).
  const SUPABASE_URL = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!SUPABASE_URL || !SERVICE_KEY) {
    // Stil falen — geen 500 zodat client-side niet retry-loop'd.
    return json({ logged: false, reason: 'config-missing' });
  }

  try {
    const resp = await fetch(`${SUPABASE_URL}/rest/v1/ai_referrer_log`, {
      method: 'POST',
      headers: {
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({
        path,
        referrer_host: referrerHost,
        user_agent: userAgent.slice(0, 500),
        ai_source: aiSource,
        is_crawler: isCrawler,
      }),
    });
    if (!resp.ok) {
      return json({ logged: false, reason: 'db-error', status: resp.status });
    }
    return json({ logged: true, source: aiSource, isCrawler });
  } catch (e) {
    return json({ logged: false, reason: 'fetch-error' });
  }
}

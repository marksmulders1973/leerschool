// "Leg het uit" — Feynman voor kinderen (Familie-feature, ideeën-dossier #6).
//
// Het kind legt een net-geoefend concept IN EIGEN WOORDEN uit; deze endpoint
// laat een MILDE AI (Haiku, goedkoop) checken of de kernpunten erin zitten en
// moedigt aan. Nooit streng, nooit een cijfer (STOPLIST: geen prestatiedruk).
//
// Kosten-veilig: guardRequest (origin + rate-limit) + dailyQuotaCheck('leg-uit').
// Client rendert dit alleen achter de Familie-preview-poort — dus dubbel gedekt.
import { guardRequest, dailyQuotaCheck } from './_guard.js';

export const config = { runtime: 'edge', maxDuration: 30 };

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

export default async function handler(req) {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const blocked = guardRequest(req);
  if (blocked) return blocked;

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ error: 'API key not configured' }, 500);

  let body;
  try { body = await req.json(); } catch { return json({ error: 'Ongeldige JSON' }, 400); }
  // F8 (2 sep 2026): quotum pas ná het parsen van de body.
  const quotaBlocked = await dailyQuotaCheck('leg-uit');
  if (quotaBlocked) return quotaBlocked;
  const onderwerp = String(body?.onderwerp || '').trim().slice(0, 120);
  const kernpunten = String(body?.kernpunten || '').trim().slice(0, 800);
  const uitleg = String(body?.uitleg || '').trim().slice(0, 1200);
  if (!onderwerp || uitleg.length < 3) return json({ error: 'Te weinig invoer' }, 400);

  const system = [
    'Je bent een warme, geduldige juf/meester voor een kind van ongeveer 10 jaar in Nederland.',
    'Het kind heeft zojuist geprobeerd een onderwerp IN EIGEN WOORDEN uit te leggen (de Feynman-methode: als je iets kunt uitleggen, snap je het echt).',
    'Beoordeel MILD, POSITIEF en AANMOEDIGEND. Nooit streng, gebruik nooit het woord "fout", geef geen cijfer of score.',
    'Noem eerst 1 of 2 concrete dingen die het kind goed of knap deed (verwijs naar wát het schreef).',
    'Geef daarna hooguit ÉÉN vriendelijke tip als er een belangrijk punt mist, in de vorm "Je zou er nog bij kunnen zeggen dat ...". Is de uitleg al goed? Laat de tip dan leeg.',
    'Schrijf in eenvoudige kindtaal: kort, warm, geen moeilijke of Engelse woorden.',
    'Antwoord ALLEEN met JSON, niets anders: {"knap": ["...", "..."], "tip": "..."} waarbij tip een lege string mag zijn.',
  ].join(' ');

  const user = `Onderwerp: "${onderwerp}".
Kernpunten van dit onderwerp (alleen ter info, niet letterlijk teruggeven): ${kernpunten || '(geen)'}

Het kind schreef als uitleg:
"""${uitleg}"""

Geef alleen de JSON.`;

  try {
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-haiku-4-5-20251001',
        max_tokens: 350,
        system,
        messages: [{ role: 'user', content: user }],
      }),
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(data?.error?.message || `HTTP ${resp.status}`);

    let text = '';
    for (const block of (data.content || [])) {
      if (block.type === 'text') text += block.text;
    }

    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return json({ knap: ['Knap dat je het in je eigen woorden probeerde uit te leggen! 💪'], tip: '' });

    const parsed = JSON.parse(match[0]);
    const knap = Array.isArray(parsed.knap)
      ? parsed.knap.filter((s) => typeof s === 'string' && s.trim()).slice(0, 3)
      : [];
    const tip = typeof parsed.tip === 'string' ? parsed.tip.trim() : '';
    return json({ knap: knap.length ? knap : ['Knap dat je het uitlegde! 💪'], tip });
  } catch {
    // Nooit hard falen op een kind-scherm — warme fallback.
    return json({ knap: ['Knap dat je het in je eigen woorden uitlegde! 💪'], tip: '' });
  }
}

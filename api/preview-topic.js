export const config = { runtime: 'edge' };

const json = (data, status = 200) => new Response(JSON.stringify(data), {
  status,
  headers: { 'Content-Type': 'application/json' },
});

export default async function handler(req) {
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405);

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return json({ error: 'API key not configured' }, 500);

  const { topic } = await req.json();
  if (!topic || !topic.trim()) return json({ error: 'Geen onderwerp opgegeven' }, 400);

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
        max_tokens: 400,
        system: 'Je bent een assistent die kort uitlegt wat een onderwerp is. Gebruik web search om het onderwerp op te zoeken. Geef ALLEEN een JSON object terug, niets anders: {"title": "...", "description": "..."} waarbij title de officiele naam is en description maximaal 2 zinnen in het Nederlands.',
        tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        messages: [{
          role: 'user',
          content: `Zoek op wat "${topic.trim()}" is en geef een korte beschrijving. Geef alleen de JSON terug.`,
        }],
      }),
    });

    const data = await resp.json();
    if (!resp.ok) throw new Error(data?.error?.message || `HTTP ${resp.status}`);

    let text = '';
    for (const block of (data.content || [])) {
      if (block.type === 'text') text += block.text;
    }

    const match = text.match(/\{[\s\S]*\}/);
    if (!match) return json({ found: false });

    const parsed = JSON.parse(match[0]);
    if (!parsed.title || !parsed.description) return json({ found: false });

    return json({ found: true, title: parsed.title, description: parsed.description });
  } catch {
    return json({ found: false });
  }
}

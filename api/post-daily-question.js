// Automatische dagelijkse Instagram-post via de officiële Meta Graph
// Content Publishing API. Geen browser, geen bestandskiezer, geen handwerk.
// Een Vercel-cron triggert dit 1×/dag (zie vercel.json "crons").
//
// Flow: pak de oudste vraag uit social_post_queue (Supabase) → maak een IG
// media-container met de JPEG + bijschrift → publiceer → (optioneel) cross-post
// naar de FB-pagina → markeer 'gepost'.
//
// VEREISTE ENV-VARS (Vercel → Settings → Environment Variables):
//   META_ACCESS_TOKEN  – long-lived/system-user token met instagram_content_publish
//   IG_USER_ID         – Instagram Business-account-ID
//   FB_PAGE_ID         – (optioneel) FB-pagina-ID voor cross-post
//   CRON_SECRET        – beschermt het endpoint (Vercel stuurt 'm automatisch mee bij cron)
//   SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
//
// Handmatig testen kan met:  GET /api/post-daily-question?key=<CRON_SECRET>

const GRAPH = "https://graph.facebook.com/v21.0";

async function sb(path, opts, base, key) {
  return fetch(`${base}/rest/v1/${path}`, {
    ...opts,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
      ...(opts.headers || {}),
    },
  });
}

export default async function handler(req, res) {
  // ── Beveiliging: alleen Vercel-cron (Authorization: Bearer CRON_SECRET) of
  //    handmatig met ?key=CRON_SECRET. ──
  const secret = process.env.CRON_SECRET;
  const auth = req.headers["authorization"] || "";
  const keyParam = (req.query && req.query.key) || "";
  if (secret && auth !== `Bearer ${secret}` && keyParam !== secret) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const base = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const TOKEN = process.env.META_ACCESS_TOKEN;
  const IG_USER_ID = process.env.IG_USER_ID;
  const FB_PAGE_ID = process.env.FB_PAGE_ID;

  if (!base || !key) return res.status(500).json({ error: "supabase-config-missing" });
  if (!TOKEN || !IG_USER_ID) {
    return res.status(500).json({
      error: "meta-config-missing",
      hint: "Stel META_ACCESS_TOKEN + IG_USER_ID in als Vercel env-vars.",
    });
  }

  // ── Pak de oudste wachtrij-vraag ──
  let item;
  try {
    const q = await sb(
      "social_post_queue?status=eq.wachtrij&order=created_at.asc&limit=1",
      { method: "GET" },
      base,
      key
    );
    const rows = await q.json();
    if (!Array.isArray(rows) || rows.length === 0) {
      return res.status(200).json({ ok: true, posted: false, reason: "wachtrij-leeg" });
    }
    item = rows[0];
  } catch (e) {
    return res.status(500).json({ error: "queue-read-fout", detail: String(e).slice(0, 200) });
  }

  try {
    // 1. Maak de IG media-container (afbeelding + bijschrift)
    const create = await fetch(`${GRAPH}/${IG_USER_ID}/media`, {
      method: "POST",
      body: new URLSearchParams({
        image_url: item.image_url,
        caption: item.caption || "",
        access_token: TOKEN,
      }),
    });
    const cj = await create.json();
    if (!create.ok || !cj.id) throw new Error("container-fout: " + JSON.stringify(cj).slice(0, 300));
    const containerId = cj.id;

    // 2. Korte status-poll (afbeeldingen zijn meestal direct FINISHED)
    for (let i = 0; i < 5; i++) {
      const s = await fetch(`${GRAPH}/${containerId}?fields=status_code&access_token=${TOKEN}`);
      const sj = await s.json();
      if (sj.status_code === "FINISHED") break;
      if (sj.status_code === "ERROR") throw new Error("container-status ERROR");
      await new Promise((r) => setTimeout(r, 1500));
    }

    // 3. Publiceer op Instagram
    const pub = await fetch(`${GRAPH}/${IG_USER_ID}/media_publish`, {
      method: "POST",
      body: new URLSearchParams({ creation_id: containerId, access_token: TOKEN }),
    });
    const pj = await pub.json();
    if (!pub.ok || !pj.id) throw new Error("publish-fout: " + JSON.stringify(pj).slice(0, 300));

    // 4. (Optioneel) cross-post naar de Facebook-pagina
    let fbId = null;
    if (FB_PAGE_ID) {
      try {
        const fb = await fetch(`${GRAPH}/${FB_PAGE_ID}/photos`, {
          method: "POST",
          body: new URLSearchParams({
            url: item.image_url,
            caption: item.caption || "",
            access_token: TOKEN,
          }),
        });
        const fbj = await fb.json();
        fbId = fbj.id || fbj.post_id || null;
      } catch (_) {}
    }

    // 5. Markeer als gepost
    await sb(
      `social_post_queue?id=eq.${item.id}`,
      {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({
          status: "gepost",
          ig_media_id: pj.id,
          fb_id: fbId,
          posted_at: new Date().toISOString(),
        }),
      },
      base,
      key
    );

    return res.status(200).json({ ok: true, posted: true, vraag_id: item.vraag_id, ig_media_id: pj.id, fb_id: fbId });
  } catch (e) {
    // Markeer als fout zodat de cron niet elke dag op dezelfde vraag blijft hangen.
    await sb(
      `social_post_queue?id=eq.${item.id}`,
      {
        method: "PATCH",
        headers: { Prefer: "return=minimal" },
        body: JSON.stringify({ status: "fout", error: String(e).slice(0, 500) }),
      },
      base,
      key
    ).catch(() => {});
    return res.status(500).json({ ok: false, error: String(e).slice(0, 400) });
  }
}

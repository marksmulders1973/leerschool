// /api/post-daily-question — automatische dagelijkse post van de VRAAG VAN DE
// DAG (bij voorkeur de actuele Jeugdjournaal-nieuwsvraag) naar Instagram +
// Facebook, via de officiële Meta Graph Content Publishing API. Geen browser,
// geen handwerk. Een Vercel-cron triggert dit 1×/dag (zie vercel.json).
//
// Flow: haal de vraag van vandaag op (genereert 'm lazy) → gebruik de publieke
// branded kaart /api/dagkaart-image als afbeelding → maak een IG media-
// container + publiceer → (optioneel) cross-post naar de FB-pagina.
//
// VEREISTE ENV-VARS (Vercel → Settings → Environment Variables) — pas ACTIEF
// zodra Mark de Meta-token-setup afrondt (tot dan no-op met duidelijke hint):
//   META_ACCESS_TOKEN  – token met instagram_content_publish (page- of IG-token)
//   IG_USER_ID         – Instagram Business-account-ID
//   FB_PAGE_ID         – (optioneel) FB-pagina-ID voor cross-post
//   META_GRAPH_BASE    – (optioneel) default https://graph.facebook.com/v21.0;
//                        zet op https://graph.instagram.com/v21.0 bij een
//                        Instagram-login-token (dan geen FB-cross-post mogelijk)
//   CRON_SECRET        – beschermt het endpoint (Vercel stuurt 'm mee bij cron)
//
// Handmatig testen (zonder te posten): GET /api/post-daily-question?key=<CRON_SECRET>&dryrun=1
// Handmatig echt posten:               GET /api/post-daily-question?key=<CRON_SECRET>

function origineel(req) {
  const host = req.headers["x-forwarded-host"] || req.headers["host"];
  const proto = req.headers["x-forwarded-proto"] || "https";
  return `${proto}://${host}`;
}

function bouwCaption(v, bronTitel) {
  const letters = ["🅰️", "🅱️", "🅲️", "🅳️"];
  const opties = (v.options || []).slice(0, 4).map((o, i) => `${letters[i]} ${String(o).replace(/\*\*/g, "")}`).join("\n");
  const kop = v.actueel ? "🗞️ Vraag van de dag — uit het nieuws!" : "🎯 Doorstroomtoets-vraag van de dag";
  const bron = bronTitel ? `\n\nBron: NOS Jeugdjournaal` : "";
  return (
    `${kop}\n\n` +
    `${String(v.vraag || "").replace(/\*\*/g, "")}\n\n` +
    `${opties}\n\n` +
    `Denk je het te weten? 💚 Het antwoord + uitleg op 3 niveaus staat op leerkwartier.app/vandaag (link in bio).` +
    `${bron}\n\n` +
    `#doorstroomtoets #groep8 #cito #oudersvannu #onderwijs #thuisonderwijs #bijles`
  );
}

export default async function handler(req, res) {
  // ── Beveiliging ──
  const secret = process.env.CRON_SECRET;
  const auth = req.headers["authorization"] || "";
  const keyParam = (req.query && req.query.key) || "";
  if (secret && auth !== `Bearer ${secret}` && keyParam !== secret) {
    return res.status(401).json({ error: "unauthorized" });
  }

  const dryrun = (req.query && req.query.dryrun) === "1";
  const origin = origineel(req);

  // ── Vraag van vandaag ophalen (genereert de actuele nieuwsvraag lazy) ──
  let vraag = null, bronTitel = null;
  try {
    const r = await fetch(`${origin}/api/actuele-vraag`);
    const d = r.ok ? await r.json() : null;
    const v = d?.actueel?.vraag;
    if (v?.options) { vraag = { vraag: v.vraag, options: v.options, actueel: true }; bronTitel = d.actueel.bron_titel; }
  } catch { /* geen actuele vraag beschikbaar */ }

  // Alleen automatisch posten als er een actuele nieuwsvraag is (de pool-vraag
  // posten we bewust handmatig — die heeft geen vers nieuws-haakje).
  if (!vraag) {
    return res.status(200).json({ ok: true, posted: false, reason: "geen-actuele-vraag" });
  }

  const caption = bouwCaption(vraag, bronTitel);
  const imageUrl = `${origin}/api/dagkaart-image?fmt=45`;

  const TOKEN = process.env.META_ACCESS_TOKEN;
  const IG_USER_ID = process.env.IG_USER_ID;
  const FB_PAGE_ID = process.env.FB_PAGE_ID;
  const GRAPH = process.env.META_GRAPH_BASE || "https://graph.facebook.com/v21.0";

  // Dry-run: laat zien wat er gepost ZOU worden, zonder Meta aan te roepen.
  if (dryrun) {
    return res.status(200).json({ ok: true, dryrun: true, imageUrl, caption });
  }

  // Nog geen Meta-token? Veilig stoppen met een duidelijke hint (cron blijft
  // draaien maar doet niets tot de setup af is).
  if (!TOKEN || !IG_USER_ID) {
    return res.status(200).json({
      ok: true, posted: false, reason: "meta-config-missing",
      hint: "Stel META_ACCESS_TOKEN + IG_USER_ID in als Vercel env-vars (Meta-token-setup afronden).",
      wouldPost: { imageUrl, captionPreview: caption.slice(0, 120) },
    });
  }

  try {
    // 1. IG media-container (afbeelding + bijschrift)
    const create = await fetch(`${GRAPH}/${IG_USER_ID}/media`, {
      method: "POST",
      body: new URLSearchParams({ image_url: imageUrl, caption, access_token: TOKEN }),
    });
    const cj = await create.json();
    if (!create.ok || !cj.id) throw new Error("container-fout: " + JSON.stringify(cj).slice(0, 300));

    // 2. Korte status-poll (foto's zijn meestal direct FINISHED)
    for (let i = 0; i < 6; i++) {
      const s = await fetch(`${GRAPH}/${cj.id}?fields=status_code&access_token=${TOKEN}`);
      const sj = await s.json();
      if (sj.status_code === "FINISHED") break;
      if (sj.status_code === "ERROR") throw new Error("container-status ERROR");
      await new Promise((r) => setTimeout(r, 1500));
    }

    // 3. Publiceren op Instagram
    const pub = await fetch(`${GRAPH}/${IG_USER_ID}/media_publish`, {
      method: "POST",
      body: new URLSearchParams({ creation_id: cj.id, access_token: TOKEN }),
    });
    const pj = await pub.json();
    if (!pub.ok || !pj.id) throw new Error("publish-fout: " + JSON.stringify(pj).slice(0, 300));

    // 4. (Optioneel) cross-post naar de FB-pagina — alleen met een FB-page-token
    //    op graph.facebook.com (een IG-login-token kan dit niet).
    let fbId = null;
    if (FB_PAGE_ID && GRAPH.includes("graph.facebook.com")) {
      try {
        const fb = await fetch(`${GRAPH}/${FB_PAGE_ID}/photos`, {
          method: "POST",
          body: new URLSearchParams({ url: imageUrl, caption, access_token: TOKEN }),
        });
        const fbj = await fb.json();
        fbId = fbj.id || fbj.post_id || null;
      } catch { /* cross-post is best-effort */ }
    }

    return res.status(200).json({ ok: true, posted: true, ig_media_id: pj.id, fb_id: fbId });
  } catch (e) {
    return res.status(500).json({ ok: false, error: String(e).slice(0, 400) });
  }
}
